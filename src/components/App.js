import React from 'react';
import './styles/App.css';

function App() {
  return (
    <div className="container">
      <h1 className="title">
        Hello world <span aria-label="emoji" role="img">🔥</span>
      </h1>
      <input type="text" className="new-task"/>
    </div>
  );
}

export default App;
