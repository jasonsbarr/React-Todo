import React from "react";
import "./Todo.scss";

const Todo = props => {
  return (
    <div
      id={props.id}
      className={props.completed ? "completed" : ""}
      onDoubleClick={props.onDoubleClick}
    >
      {props.children}
    </div>
  );
};

export default Todo;
