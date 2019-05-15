import React from "react";

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
    </form>
  );
};

export default TodoForm;
