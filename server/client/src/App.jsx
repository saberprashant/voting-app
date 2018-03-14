import React, { Component } from 'react';
import './style/App.css';
import Vote from './components/votingCount';
import Weather from './components/weather';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Vote/>
      </div>
    );
  }
}

export default App;
