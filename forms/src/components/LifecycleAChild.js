import React, { Component } from "react";

class LifecycleAChild extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "madiha",
    };
    console.log("LifecycleAChild constructor");
  }

  static getDrivedStateFromProps(props, state) {
    console.log("LifecycleAChild getDrivedStateFromProps");
    return null;
  }

  componenetDidMount() {
    console.log("LifecycleAChild componenetDidMount");
  }

  shouldComponentUpdate() {
    console.log("LifecycleAChild shouldComponentUpdate");
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, preState) {
    console.log("LifecycleAChild getSnapshotBeforeUpdate");
    return null;
  }

  componentDidMount() {
    console.log("LifecycleAChild componentDidMount");
  }

  render() {
    console.log("LifecycleAChild render");
    return <div>LifecycleAChild</div>;
  }
}

export default LifecycleAChild;
