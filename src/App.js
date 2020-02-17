import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  const displayText = () => {
    console.log('hannah');
  }
  render() {
    return (
      <div className="App">
        <button onClick={this.displayText}>Click Me!</button>
      </div>
    );
  }
}

export default App;
