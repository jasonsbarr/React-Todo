import React, { Component } from "react";
import { Todo } from "./";
import { SearchBar } from "../SearchBar";
import "./Todo.scss";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: "",
      filtered: [],
    };
  }

  componentDidUpdate(prevProps) {
    if (this.props.todos.length !== prevProps.todos.length) {
      this.setState({
        filtered: this.getFilteredTodos(this.state.searchText),
      });
    }
  }

  getFilteredTodos = text => {
    return this.props.todos.filter(todo => {
      return todo.task.length > 0
        ? todo.task.toLowerCase().includes(text.toLowerCase())
        : todo;
    });
  };

  searchHandler = event => {
    const { value } = event.target;
    this.setState({
      searchText: value,
      filtered: this.getFilteredTodos(value),
    });
  };

  render() {
    const { alert } = this.props;
    const todos =
      this.state.searchText !== ""
        ? [...this.state.filtered]
        : [...this.props.todos];
    return (
      <>
        <SearchBar
          value={this.state.searchText}
          onSearchChange={this.searchHandler}
        />
        <div className="todos">
          {todos ? (
            todos.map(todo => (
              <Todo
                key={todo.id}
                id={todo.id}
                completed={todo.completed}
                onDoubleClick={this.props.toggleTodoCompleted}
              >
                {todo.task}
              </Todo>
            ))
          ) : (
            <p className="alert">{alert || "No todos found!"}</p>
          )}
        </div>
      </>
    );
  }
}

export default TodoList;
