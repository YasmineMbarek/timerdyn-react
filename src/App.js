import React, { Component } from 'react';
import './App.css';
import TimerDynamique from'./Timer.js';

class App extends Component {
  render() {
    return (
      <div className="App">
             <TimerDynamique hms="2613888899"/>   
      </div>
    );
  }
}

export default App;
