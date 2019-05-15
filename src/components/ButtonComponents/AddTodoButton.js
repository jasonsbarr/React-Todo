import React from "react";
import Button from "./Button";

const AddTodoButton = props => {
  return <Button onClick={props.onClick}>Add Todo</Button>;
};

export default AddTodoButton;
