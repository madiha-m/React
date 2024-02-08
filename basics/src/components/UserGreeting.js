import React, { Component } from "react";

class UserGreeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedin: true,
    };
  }

  render() {
    // if else can't work in jsx, jsx is only for fun calls & obj construction
    if (this.state.isLoggedin) return <div>Hi Welcome!</div>;
    else return <div>Welcome Greetings!</div>;

    // return (
    //   <div>
    //     <div>Welcome greetings</div>
    //     <div>Welcome Guest</div>
    //   </div>
    // );
  }
}

export default UserGreeting;
