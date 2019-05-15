import React from "react";
import { Todo } from "./";
import "./Todo.scss";

const TodoList = props => {
  const { todos } = props;
  return (
    <div className="todos">
      <Todo />
    </div>
  );
};

export default TodoList;
