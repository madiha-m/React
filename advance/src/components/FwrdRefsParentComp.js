import React, { Component } from "react";
import FwrdRefsComp from "./FwrdRefsComp";

/* Forwarding Refs: auto sending refs through comp to its children
  4 steps:
  -1st: create ref in parent comp
  -2nd: attach ref to child comp with ref attrib
  -3rd: fowrd this ref to input element in child comp
  -4th: define click handler
*/
class FwrdRefsParentComp extends Component {
  constructor(props) {
    super(props);

    // 1st step:
    this.inputRef = React.createRef();
  }

  // 4th step:
  clickHandler = () => { 
    this.inputRef.current.focus();
  };

  render() {
    return (
      <div>
        {/* 2nd step: */}
        <FwrdRefsComp ref={this.inputRef} />

        <button onClick={this.clickHandler}>
          Fword Refs Component for Focus Input
        </button>
      </div>
    );
  }
}

export default FwrdRefsParentComp;
