import React, { Component } from "react";
import LifecycleAChild from "./LifecycleAChild";

class LifecycleA extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "madiha",
    };
    console.log("LifecycleA constructor");
  }

  static getDrivedStateFromProps(props, state) {
    console.log("LifecycleA getDrivedStateFromProps");
    return null;
  }

  componenetDidMount() {
    console.log("LifecycleA componenetDidMount");
  }

  render() {
    console.log("LifecycleA render");
    return (
      <div>
        <div>LifecycleA</div>
        <LifecycleAChild />
      </div>
    );
  }
}

export default LifecycleA;
