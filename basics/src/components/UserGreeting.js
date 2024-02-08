import React, { Component } from "react";

class UserGreeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedin: false,
    };
  }

  render() {
    /*
    1st approach:
     if else can't work in jsx, 
     jsx is only for fun calls & obj construction
     */
    // if (this.state.isLoggedin) return <div>Hi Welcome!</div>;
    // else return <div>Welcome Greetings!</div>;

    /*
    2nd approach: better approach
    usig element var, js var use to store elements
    can store whole componenet or part of it
     */
    let message;
    if (this.state.isLoggedin) {
      message = <div>element in var if section weoking</div>;
    } else {
      message = <div>element in var else section weoking</div>;
    }

    return <div>{message}</div>;

    // return (
    //   <div>
    //     <div>Welcome greetings</div>
    //     <div>Welcome Guest</div>
    //   </div>
    // );
  }
}

export default UserGreeting;
