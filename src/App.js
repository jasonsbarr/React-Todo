import React, { Component } from "react";
import { TodoList, TodoForm } from "./components/TodoComponents";
import { ClearFinishedButton } from "./components/ButtonComponents";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { todos: [] };
  }

  addTodoHandler = event => {
    event.preventDefault();
    const newTodo = {
      task: event.target.addTodo.value,
      id: Date.now(),
      completed: false,
    };

    const todos = [...this.state.todos, newTodo];
    this.setState({ todos });
  };

  todoChangeHandler = event => {
    this.setState({ todoText: event.target.value });
  };

  toggleTodoHandler = event => {
    this.setState({
      todos: this.state.todos.map(todo =>
        todo.id == event.target.id
          ? { ...todo, completed: !todo.completed }
          : todo,
      ),
    });
  };

  clearFinishedHandler = () =>
    this.setState({
      todos: this.state.todos.filter(todo => !todo.completed),
    });

  render() {
    return (
      <div>
        <h1>Todo List</h1>
        <TodoList
          todos={this.state.todos}
          toggleTodoCompleted={this.toggleTodoHandler}
        />
        <div className="todoControls">
          <TodoForm
            onAddTodo={this.addTodoHandler}
            inputVal={this.state.todoText}
            changeTodoText={this.todoChangeHandler}
          />
          <ClearFinishedButton onClick={this.clearFinishedHandler} />
        </div>
      </div>
    );
  }
}

export default App;
