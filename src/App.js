import React, { Component } from "react";
import { TodoList } from "./components/TodoComponents";

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
    };
  }

  render() {
    return (
      <div>
        <h1>Todo List</h1>
        <TodoList />
        {/* todo form */}
      </div>
    );
  }
}

export default App;
