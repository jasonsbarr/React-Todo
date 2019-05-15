import React from "react";
import { Todo } from "./";
import "./Todo.scss";

const TodoList = props => {
  const { todos } = props;
  return (
    <div className="todos">
      {todos.map(todo => (
        <Todo
          key={todo.id}
          id={todo.id}
          completed={todo.completed}
          onDoubleClick={props.toggleTodoCompleted}
        >
          {todo.task}
        </Todo>
      ))}
    </div>
  );
};

export default TodoList;
