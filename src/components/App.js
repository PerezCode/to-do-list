import React from "react";
import "./styles/App.css";
import Layout from "./Layout"
import Title from "./Title";
import Input from "./Input"
import TaskList from "./TaskList";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newTask: "",
      tasks: []
    };
  }

  handleChange = e => {
    this.setState({ newTask: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    let currentTasks = this.state.tasks;
    currentTasks.push(this.state.newTask);
    this.setState({
      newTask: "",
      tasks: currentTasks
    });
  };

  render() {
    return (
      <Layout>
        <Title />
        <Input
          onSubmit={this.handleSubmit}
          onChange={this.handleChange}
          value={this.state.newTask}
        />
        <TaskList
          tasks={this.state.tasks}
        />
      </Layout>
    );
  }
}

export default App;
