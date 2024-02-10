import React from "react";

function Fragments() {
  return (
    // to remove an extra node (div tag) in DOM  , use react fragment
    // <div>
    <React.Fragment>
      <h1>Fragment Demo</h1>
      <p>this describes the Fragments Component</p>
      {/* </div> */}
    </React.Fragment>
  );
}

export default Fragments;
