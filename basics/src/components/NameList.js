import React from "react";

function NameList() {
  const names = ["Bruce", "Clark", "Diana"];
  return (
    <div>
      {names.map((name) => (
        <h2>{name}</h2>
      ))}

      {/* use map method to render a list */}
      {/* <h2>{names[0]}</h2>
      <h2>{names[1]}</h2>
      <h2>{names[2]}</h2> */}
    </div>
  );
}

export default NameList;
