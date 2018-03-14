import React, { Component } from 'react';
import './style/App.css';
import Vote from './components/vote.js';
import VoteCount from './components/voteCount.js';
// import Weather from './components/weather';

class App extends Component {
  constructor() {
    super();
    this.state = {
      showVotes : false
    }
    this.showVotes = this.showVotes.bind(this);
  };

  showVotes(e) {
    // e.preventDefault();
    this.setState({
      showVotes : <tr></tr>
    });
  }


  render() {
    return (
      <div className="App">
      { (!this.state.showVotes) ?
        <Vote showVotes={this.showVotes}/> : <VoteCount/>
      }
        
      </div>
    );
  }
}

export default App;
