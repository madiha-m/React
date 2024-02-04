import React from "react";

function FunctionClick() {
  function clickHandler() {
    console.log("btn clicked");
  }
  return (
    <div>
      {/* make the handler a fun not fun call , avoid () */}
      <button onClick={clickHandler}>Click</button>
    </div>
  );
}

export default FunctionClick;
