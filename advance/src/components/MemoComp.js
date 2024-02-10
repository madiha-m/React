import React from "react";

function MemoComp({ name }) {
  console.log("Rendering memo Component.");
  return <div>{name}</div>;
}

// stop rendering use React.memo
export default React.memo (MemoComp);
