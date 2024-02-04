import React, { Component } from "react";

class Message extends Component {
  // 1. create a state obj and intitilize it
  constructor() {
    super(); //will calll base class const

    /* State > 
    obj , privately mainted inside comp, 
    it influnce what is rendered in broweser
    can be changed within comp
    */
    this.state = {
      message: "Welcome Visitor! ",
    };
  }
  changeMessage() {
    // setStat > acceptts the obj which is the new state of method
    this.setState({
      message: " Thank you for subscribing!",
    });
  }

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={() => this.changeMessage()}>Subscribe</button>
      </div>
    );
  }
}

export default Message;
