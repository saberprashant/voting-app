import React, { Component } from 'react';
import socketIOClient from "socket.io-client";
import {Label, FormGroup, Radio, Button} from 'react-bootstrap';

import '../style/votingCount.css';


class VoteCount extends Component {
  constructor() {
    super();
    this.state = {
      voteCount: { }, 
      endpoint: "http://127.0.0.1:4002",
    };
    this.socket = socketIOClient(this.state.endpoint);        //setting up the socket for client
  };

  

  componentWillMount() {

      // this.socket.on('votes', function(data) {
      //   this.setState({voteCount: data})
      // }.bind(this));

    // console.log(this.state.voteCount);
    
  }


  componentDidMount() {
    this.socket.on('votes', function(data) {
      this.setState({voteCount: data})
      console.log(this.state.voteCount);
    }.bind(this));

    // socket.on('polls', function(data) {
    //   this.setState({poll: data})
    // }.bind(this));


    // socket.on('votes', function(data) {
    //   this.setState({voteCount: data})
    // }.bind(this));

    
  }


  // // extra method
  // incCount() {
  //   const endpoint  = this.state.endpoint;
  //   const socket = socketIOClient(endpoint);
  //   socket.emit('votes', 1);
  // }

  // //extra 
  // decCount() {
  //   const endpoint  = this.state.endpoint;
  //   const socket = socketIOClient(endpoint);
  //   socket.emit('votes', -1);
  // }



  render() {

    return (
      <div>
        
          <h1>All votes from viewers</h1>
          <hr/>
          <h2>
            <Label bsStyle="primary">{this.state.voteCount.title}</Label>
          </h2> 
          {
            this.state.voteCount.responses ?
              Object.keys(this.state.voteCount.responses).map((item,index)=>{
                return <h2>{item}  {this.state.voteCount.responses[item]}</h2>
              })
            : <div>bye</div>
          }
      </div>
    );
  }
}

export default VoteCount;
