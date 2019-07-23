import React from "react";
import "./Todo.scss";

const Todo = props => {
  return (
    <div
      id={props.id}
      className={`todo ${props.completed ? "completed" : ""}`}
      onDoubleClick={props.onDoubleClick}
      tabIndex={0}
    >
      {props.children}
    </div>
  );
};

export default Todo;
