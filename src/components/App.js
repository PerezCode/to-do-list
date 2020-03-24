import React from 'react';
import './styles/App.css';

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = { newTask: ""}
  }

  handleChange = (e) => {
    this.setState({newTask: e.target.value});
  }

  render() {
    return(
      <div className="container">
        <h1 className="title">
          Hello world <span aria-label="emoji" role="img">🔥</span>
        </h1>
        <input type="text" onChange={this.handleChange} className="new-task"/>
        <h2 className="test-label">{this.state.newTask}</h2>
      </div>
    )
  }
}

export default App;
