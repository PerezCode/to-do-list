import React from 'react';
import './styles/App.css';

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      newTask: "",
      tasks: [],
    }
  }

  handleChange = (e) => {
    this.setState({newTask: e.target.value});
  }

  handleSubmit = (e) => {
    e.preventDefault();
    let currentTask = this.state.tasks;
    currentTask.push(this.state.newTask);
    this.setState({
      newTask: "",
      tasks: currentTask,
    })
  }

  render() {
    return (
      <div className="container">
        <h1 className="title">
          Hello world <span aria-label="emoji" role="img">🔥</span>
        </h1>
        <form onSubmit={this.handleSubmit}>
          <input type="text"value={this.state.newTask} onChange={this.handleChange} className="new-task"/>
        </form>
        <h2 className="test-label">{this.state.newTask}</h2>
        {
          this.state.tasks.map( task => (
            <div className="task-container">
              <h3 className="task">{task}</h3>
            </div>
            )
          )
        }
      </div>
    )
  }
}

export default App;
