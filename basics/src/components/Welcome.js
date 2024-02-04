import React, { Component } from "react";

class Welcome extends Component {
  render() {
    // destructure in render method
    const { name, task, children } = this.props;

    // destructure stte properties
    // const { state1, state2 } = this.state;

    return (
      <h1>
        {/* use destructure */}
        Welcome! {name} {task}
        {/* Welcome! {this.props.name} {this.props.task} */}
      </h1>
    );
  }
}

export default Welcome;
