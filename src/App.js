import React, { Component} from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      displayText: false 
    }
  }

  displayText = () => {
    this.setState({ displayText: !this.state.displayText });
  }
  render() {
    return (
      <div className="App mt3">
        <button onClick={this.displayText}>Click Me!</button>
        <div>
          { this.state.displayText ? <p>This button works.</p> :null }
        </div>
      </div>
    );
  }
}

export default App;
