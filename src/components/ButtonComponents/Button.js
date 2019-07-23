import React from "react";

const Button = props => {
  const { classes, onClick, ...rest } = props;
  const classNames = `btn ${classes ? classes : ""}`;
  const doOnClick = onClick ? { onClick } : {};
  return (
    <button className={classNames} {...doOnClick} {...rest}>
      {props.children}
    </button>
  );
};

export default Button;
