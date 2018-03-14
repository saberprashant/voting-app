import React, { Component } from 'react';
import socketIOClient from "socket.io-client";
import {Label, FormGroup, Radio, Button} from 'react-bootstrap';


import '../style/votingCount.css';

const socket = socketIOClient('http://127.0.0.1:4002');
class Vote extends Component {
  constructor() {
    super();
    this.state = {
      poll: { },                          //poll coming from socket server
      voteCount: { },
      endpoint: "http://127.0.0.1:4002",


      test: {                               //same object as poll coming from server
        'title': "Which cuisine is best in the world?",
        'options': ['Chinese', 'Indian', 'American', 'Italian']
      },
      voteOptions: ''                 //to set all the dynamic buttons created from options of poll

    };
  };

  // endpoint  = this.state.endpoint;
  // socket = socketIOClient(endpoint);
  // socket.on('votes', function(data) {
  //   this.setState({voteCount: data})
  // });

  componentWillMount() {
    const endpoint  = this.state.endpoint;
    const socket = socketIOClient(endpoint);
    socket.on('polls', function(data) {  
      this.setState({poll: data},()=>{
      })
    }.bind(this));

    // socket.on('votes', function(data) {
    //   this.setState({voteCount: data})
    // }.bind(this));
    

   }


  componentDidMount() {
    const endpoint  = this.state.endpoint;

    // socket.on('polls', function(data) {
    //   this.setState({poll: data})
    // }.bind(this));


    // socket.on('votes', function(data) {
    //   this.setState({voteCount: data})
    // }.bind(this));
    // const incCount = () => {
    //   socket.emit('votes', 1);
    // }
    
    // const decCount = () => {
    //   socket.emit('votes', -1);
    // }
    
  }



  incCount() {
    const endpoint  = this.state.endpoint;
    const socket = socketIOClient(endpoint);
    socket.emit('votes', 1);
  }

  decCount() {
    const endpoint  = this.state.endpoint;
    const socket = socketIOClient(endpoint);
    socket.emit('votes', -1);
  }

  submitVote() {
    const endpoint  = this.state.endpoint;
    const socket = socketIOClient(endpoint);
    // socket.emit('polls', this.state.poll)
  }



//  EXTRA WORK (NO USE RIGHT NOW)

  // <h1>{this.state.voteCount}</h1> <br/>
  //       <button onClick={this.incCount.bind(this)}>INCREASE</button>
  //       <button onClick={this.decCount.bind(this)}>DECREASE</button>

// <Radio name="radioGroup">
//             {this.state.poll.options[1]}
//           </Radio>  
//           <Radio name="radioGroup">
//             {this.state.poll.options[2]}
//           </Radio>
//           <Radio name="radioGroup">
//             {this.state.poll.options[3]}
//           </Radio>

            // {(this.state && this.state.poll && this.state.poll.options && this.state.poll.options.length > 0)} ? {this.state.poll.options[0]} : <span>None</span>




  render() {

    // let voteOptions;            //here, I simply map over to each option to create a radio button dynamically
  
    // if (this.state.poll.options.length) {
    //   voteOptions = this.state.poll.options.map(
    //     (obj, index) => (<Radio key={index} name="radioGroup">{obj}</Radio>)
    //   );
    // } else {
    //   voteOptions = <h1>Working</h1>;
    // } 



    return (
      <div className="App">
        
      <form onSubmit={this.submitVote}>
        <FormGroup>
          <h1>
            <Label bsStyle="primary">{this.state.poll.title}</Label>
          </h1> 
          <div>
            {/*this.state.voteOptions*/}    {/*here I want to render all the radio buttons*/} 
          </div>
          {
            (this.state.poll.options&&this.state.poll.options.length>0)?
            this.state.poll.options.map((item,index)=>{
              return <Radio name="radioGroup">
                        {this.state.poll.options[index]}    {/*testing from test data(this.state.test)*/}
                    </Radio>
            }):<div></div>
          }          
          <Button type="submit" bsStyle="info">Vote Now</Button>
        </FormGroup>
      </form>
      </div>
    );
  }
}

export default Vote;
