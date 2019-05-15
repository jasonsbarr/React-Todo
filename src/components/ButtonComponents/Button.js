import React from "react";

const Button = props => {
  const classes = `btn ${props.classes ? props.classes : ""}`;
  return (
    <button className={classes} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
