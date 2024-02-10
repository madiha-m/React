import React, { Component } from "react";
import MemoComp from "./MemoComp";

export class ParentMemoComp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "madiha",
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        name: "madiha",
      });
    }, 2000);
  }

  render() {
    console.log("************ Parent Component ************");
    return (
      <div>
        Parent Component
        <MemoComp name={this.state.name} />
      </div>
    );
  }
}

export default ParentMemoComp;
