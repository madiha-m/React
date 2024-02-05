import React from "react";
import ParentComponent from "./ParentComponent";

// no need to use state, so fun com created
function ChildComponent(props) {
  return (
    <div>
      <button onClick={props.childCallHandler}>
        exe fun defined in parent comp
      </button>
    </div>
  );
}

export default ChildComponent;
