import React from "react";
import classes from "./Form.module.scss";
import { icons } from "../../assets/imageKeyMapping";
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

const Form = (props) => {
  const { formFields, pagetype } = props;
  const [formData, setFormData] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [checkboxChecked, setCheckboxChecked] = useState(false);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (formFields?.length) {
      let initialFormData = Object.fromEntries(
        formFields?.map((fields) => [
          fields?.fieldname,
          { value: "", error: "Field is required." },
        ])
      );
      setFormData(initialFormData);
    }
  }, [formFields]);

  const handleInput = (e) => {
    const { name, value } = e?.target;
    let errMessage = "";
    let newValue = value?.trim();
    if (!newValue) {
      errMessage = "Field is required.";
    } else if (name === "fullname" && !/^[A-Za-z\s]+$/g.test(newValue)) {
      errMessage = "Fullname cannot contain numbers and special characters";
    } else if (name === "username") {
      if (newValue?.startsWith(".")) {
        errMessage = "Username cannot start with a period.";
      } else if (newValue && !/^[A-Za-z0-9_]+$/g.test(value)) {
        errMessage = "Username can only have letters, numbers and underscore";
      }
    } else if (
      name === "email" &&
      !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(newValue)
    ) {
      errMessage = "Invalid email address.";
    } else {
      errMessage = "";
    }
    setFormData((prevData) => ({
      ...prevData,
      [name]: { ...prevData[name], value: newValue, error: errMessage },
    }));
  };

  const handleSignup = () => {
    try {
      setHasSubmitted(true);
      let canSubmit = isFormValid();
      let payload = Object.fromEntries(
        Object.entries(formData).map(([key, value]) => [key, value.value])
      );
      payload["tnc"] = checkboxChecked;

      // console.log({ payload })
      if (canSubmit) {
        console.info("Submitted");
        updateAuthorization();
      } else {
        console.log("error in form");
      }
    } catch (error) {
      setHasSubmitted(false);
    }
  };

  const handleSignIn = () => {
    setHasSubmitted(true);
    let canSubmit = isFormValid();
    if (canSubmit) {
      console.log("Submit");
      setHasSubmitted(false);
      updateAuthorization();
      // navigate('/home')
    } else {
      console.log("Error in Form");
    }
  };

  const isFormValid = () => {
    Object?.keys(formData)?.forEach((key) => {
      if (formData[key]?.value?.toString()?.trim() === "") {
        setFormData((prev) => ({
          ...prev,
          [key]: { ...prev[key], error: "Field is required." },
        }));
      }
    });
    return Object.keys(formData).every((key) => formData[key].error === "");
  };

  const updateAuthorization = () => {
    dispatch({ type: "LOGIN" });
  };

  return (
    <form action="" className={classes?.form}>
      {formFields?.map((field) => (
        <div className={classes?.input_wrapper} key={field?.fieldname}>
          <input
            type={
              field?.fieldname === "password"
                ? showPassword
                  ? "text"
                  : "password"
                : field?.type
            }
            className={classes?.input}
            placeholder={field?.placeholder}
            name={field?.fieldname}
            onInput={(e) => handleInput(e)}
            autoComplete="current-password"
          />
          {field?.fieldname === "password" && (
            <img
              src={icons?.eyeIcon}
              className={classes?.icon}
              alt="show password"
              onClick={() => setShowPassword((prev) => !prev)}
            />
          )}
          {hasSubmitted && (
            <div className={classes?.error}>
              {formData[field?.fieldname]?.error}
            </div>
          )}
        </div>
      ))}
      {pagetype !== "signin" ? (
        <>
          <div className={classes?.input_wrapper}>
            <div
              className={`${classes?.icon} ${classes?.checkbox} ${
                checkboxChecked ? classes?.checkbox_checked : ""
              }`}
              onClick={() => setCheckboxChecked((prev) => !prev)}
            >
              <img src={icons?.whiteCheck} alt="check" />
            </div>
            <div className={classes?.tnc_text}>
              I agree with
              <span className={classes?.bold}> Privacy Policy </span>
              and
              <span className={classes?.bold}> Terms of Use </span>
            </div>
          </div>
          <div
            className={`${classes?.cta} ${
              !checkboxChecked && classes?.disabled
            }`}
            onClick={handleSignup}
          >
            Sign Up
          </div>
        </>
      ) : (
        <div className={`${classes?.cta}`} onClick={handleSignIn}>
          Sign In
        </div>
      )}
    </form>
  );
};

export default Form;
