import React from "react";
import { AddTodoButton } from "../ButtonComponents";

const TodoForm = props => {
  return (
    <form
      onSubmit={props.onSubmit}
      name="todoForm"
      id="todoForm"
      className="todoForm"
    >
      <input
        onChange={props.onChange}
        type="text"
        name="addTodo"
        id="addTodo"
      />
      <AddTodoButton type="submit" onClick={props.onAddTodo} />
    </form>
  );
};

export default TodoForm;
