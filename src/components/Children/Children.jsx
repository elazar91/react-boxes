import classes from "./Children.module.css";

import React from "react";

const Children = (props) => {
  const stopPro = (e) => {
    e.stopPropagation();
  };
  return (
    <div className={classes.Box} onClick={stopPro}>
      <div className={classes.Text}>{props.theWord}</div>
    </div>
  );
};
export default Children;
