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

  onAddTodo = event => {
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

  render() {
    return (
      <div>
        <h1>Todo List</h1>
        <TodoList todos={this.state.todos} />
        <div className="todoControls">
          <TodoForm
            onAddTodo={this.onAddTodo}
            inputVal={this.state.todoText}
            changeTodoText={this.todoChangeHandler}
          />
          <ClearFinishedButton />
        </div>
      </div>
    );
  }
}

export default App;
