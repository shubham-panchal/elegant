import React from "react";
import classes from "./Loader.module.scss";

const Loader = () => {
  return (
    <div className={classes?.loader_component}>
      <div className={classes?.spinner}></div>
    </div>
  );
};

export default Loader;
