import React, { Component } from "react";
import { AddTodoButton } from "../ButtonComponents";

class TodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = { text: "" };
  }

  changeHandler = event => this.setState({ text: event.target.value });

  handleAddTodo = event => {
    event.preventDefault();
    this.props.onAddTodo(event);
    this.setState({ text: "" });
  };

  render() {
    return (
      <form
        onSubmit={this.handleAddTodo}
        name="todoForm"
        id="todoForm"
        className="todoForm"
      >
        <input
          type="text"
          name="addTodo"
          id="addTodo"
          placeholder="Add todo..."
          value={this.state.text}
          onChange={this.changeHandler}
          autoFocus
        />
        <AddTodoButton type="submit" />
      </form>
    );
  }
}

export default TodoForm;
