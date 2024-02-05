import React, { Component } from "react";
import ChildComponent from "./ChildComponent";

class ParentComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      parentName: "Parent",
    };

    this.greetParent = this.greetParent.bind(this);
  }

  greetParent() {
    alert(`Hi ${this.state.parentName}`);
  }

  render() {
    {
    }
    return (
      <div>
        {/* passing ref to greetParent method as prop childCallHandler  */}
        <ChildComponent childCallHandler={this.greetParent} />
      </div>
    );
  }
}

export default ParentComponent;
