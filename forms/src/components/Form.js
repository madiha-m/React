import React, { Component } from "react";

class Form extends Component {
  /* make input as controlled element:
    1- in ctor initilize the state prop will null > prop_name: ''
     - assign state with value of input-element > value={this.state.prop_name}
    2- handle onCHange event
     - add onChange event with handle in input-elem > onChange={this.handle_name} 
     - now define it a slass peop, and use prop
  */
  constructor(props) {
    super(props);

    this.state = {
      //  1st step
      username: "",
      comment: "",
      topic: "react",
    };
  }

  //   2nd step
  handleUsernameChange = (event) => {
    this.setState({
      username: event.target.value,
    });
    console.log(this.state.username);
  };
  handleCommentChange = (event) => {
    this.setState({
      comment: event.target.value,
    });
    console.log(this.state.comment);
  };
  handleTopicChange = (event) => {
    this.setState(
      {
        topic: event.target.value,
      },
      console.log(this.state.topic)
    );
  };

  handleSubmit = (event) => {
    // form reciving data as args
    alert(`${this.state.username} ${this.state.comment} ${this.state.topic}`);

    // form will refreshed after submit by default, to prevent use prevent default
    event.preventDefault();
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>User Name: </label>
          {/* 1st assign state with value */}
          {/* handle onChange event */}
          <input
            type="text"
            value={this.state.username}
            onChange={this.handleUsernameChange}
          />
        </div>
        <div>
          <label>Comments: </label>
          <textarea
            value={this.state.comment}
            onChange={this.handleCommentChange}
          />
        </div>
        <div>
          <label>Topic: </label>
          <select value={this.state.topic} onChange={this.handleTopicChange}>
            <option value="react">React</option>
            <option value="angular">Angular</option>
            <option value="vue">Vue</option>
          </select>
        </div>
        {/* submit form data:
            - click submit btn, page refresh auto
            - use js submit fun, it also handle inputs  
             in Form tag use onSubmit event
        */}
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default Form;
