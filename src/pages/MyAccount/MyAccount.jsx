import React, { lazy, useEffect, useState } from "react";
import classes from "./MyAccount.module.scss";
import { icons } from "../../assets/imageKeyMapping";

import { useDispatch } from "react-redux";

const NAV_LINKS = [
  {
    id: 1,
    name: "Account",
  },
  {
    id: 2,
    name: "Address",
  },
  {
    id: 3,
    name: "Orders",
  },
  {
    id: 4,
    name: "Wishlist",
  },
  {
    id: 5,
    name: "Logout",
  },
];
const Wishlist = lazy(() => import("./Wishlist/Wishlist"));
const Address = lazy(() => import("./Address/Address"));
const Account = lazy(() => import("./Account/Account"));
const Orders = lazy(() => import("./Orders/Orders"));

const MyAccount = () => {
  const [Component, setComponent] = useState(null);
  const [selectedNav, setSelectedNav] = useState(4);
  const dispatch = useDispatch();

  useEffect(() => {
    switch (selectedNav) {
      case 1:
        setComponent(Account);
        break;
      case 2:
        setComponent(Address);
        break;
      case 3:
        setComponent(Orders);
        break;
      case 4:
        setComponent(Wishlist);
        break;
      case 5:
        dispatch({ type: "LOGOUT" });
        break;
      default:
        Component = Wishlist;
    }
  }, [selectedNav]);
  return (
    <div className={classes?.my_account_page}>
      <div className={classes?.page_title}>My Account</div>
      <div className={classes.container}>
        <div className={classes?.sidenav}>
          <div className={classes?.profile_block}>
            <div className={classes?.avatar_wrapper}>
              <img
                src={icons?.avatarIcon}
                alt="avatar"
                className={classes?.avatar}
              />
            </div>
            <div className={classes?.profile_name}>John Doe</div>
          </div>
          <div className={classes?.nav_block}>
            {NAV_LINKS?.map((link) => (
              <div
                key={link?.id}
                className={`${classes?.nav_link} ${
                  selectedNav === link?.id ? classes?.nav_link_active : ""
                }`}
                onClick={() => setSelectedNav(link?.id)}
              >
                {link?.name}
              </div>
            ))}
          </div>
        </div>
        <div className={classes?.component}>{Component && <Component />}</div>
      </div>
    </div>
  );
};

export default MyAccount;
