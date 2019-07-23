import React, { Component } from "react";
import { TodoList, TodoForm } from "./components/TodoComponents";
import { ClearFinishedButton } from "./components/ButtonComponents";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      alert: "Loading...",
    };
  }

  componentDidMount() {
    const todos = this.fetchTodos();
    const newState = todos
      ? { todos, alert: "" }
      : { todos: [], alert: "No todos found!" };
    this.setState(newState);
  }

  fetchTodos = () => JSON.parse(localStorage.getItem("todos"));

  saveTodos = todos => localStorage.setItem("todos", JSON.stringify(todos));

  addTodoHandler = event => {
    const newTodo = {
      task: event.target.addTodo.value,
      id: Date.now(),
      completed: false,
    };

    const todos = [...this.state.todos, newTodo];
    this.setState({ todos });
    this.saveTodos(todos);
  };

  toggleTodoHandler = event => {
    const todos = this.state.todos.map(todo =>
      todo.id == event.target.id
        ? { ...todo, completed: !todo.completed }
        : todo,
    );
    this.setState({ todos });
    this.saveTodos(todos);
  };

  clearFinishedHandler = () => {
    const todos = this.state.todos.filter(todo => !todo.completed);
    this.setState({ todos });
    this.saveTodos(todos);
  };

  render() {
    return (
      <div>
        <h1>Todo List</h1>
        <TodoList
          todos={this.state.todos}
          toggleTodoCompleted={this.toggleTodoHandler}
          alert={this.state.alert}
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
