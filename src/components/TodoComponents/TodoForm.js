import React from "react";
import { AddTodoButton } from "../ButtonComponents";

const TodoForm = props => {
  return (
    <form
      onSubmit={props.onAddTodo}
      name="todoForm"
      id="todoForm"
      className="todoForm"
    >
      <input
        type="text"
        name="addTodo"
        id="addTodo"
        placeholder="Add todo..."
        value={props.inputVal}
        onChange={props.changeTodoText}
        autoFocus
      />
      <AddTodoButton type="submit" />
    </form>
  );
};

export default TodoForm;
