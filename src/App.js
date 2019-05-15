import React, { Component } from "react";
import { TodoList, TodoForm } from "./components/TodoComponents";
import { ClearFinishedButton } from "./components/ButtonComponents";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {
          task: "Design website",
          id: 111111111111,
          completed: false,
        },
        {
          task: "Buy food",
          id: 222222222222,
          completed: false,
        },
        {
          task: "Get gas",
          id: 333333333333,
          completed: false,
        },
      ],

      todoText: "",
    };
  }

  addTodoHandler = event => {
    event.preventDefault();
    const newTodo = {
      task: this.state.todoText,
      id: Date.now(),
      completed: false,
    };

    const todos = [...this.state.todos, newTodo];
    this.setState({
      todos,
      todoText: "",
    });
  };

  todoChangeHandler = event => {
    this.setState({ todoText: event.target.value });
  };

  toggleTodoHandler = event => {
    const todos = [...this.state.todos];
    const completedIdx = todos.findIndex(todo => todo.id == event.target.id);
    const completedTodo = { ...todos[completedIdx] };
    completedTodo.completed = !completedTodo.completed;
    this.setState({
      todos: [
        ...todos.slice(0, completedIdx),
        completedTodo,
        ...todos.slice(completedIdx + 1),
      ],
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
