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

  shouldComponentUpdate() {
    console.log("LifecycleA shouldComponentUpdate");
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, preState) {
    console.log("LifecycleA getSnapshotBeforeUpdate");
    return null;
  }

  componentDidMount() {
    console.log("LifecycleA componentDidMount");
  }

  changeState = () => {
    this.setState({
      name: "Codevolution",
    });
  };

  render() {
    console.log("LifecycleA render");
    return (
      <div>
        <div>LifecycleA</div>
        <button onChange={this.changeState}>Change State</button>
        <LifecycleAChild />
      </div>
    );
  }
}

export default LifecycleA;
