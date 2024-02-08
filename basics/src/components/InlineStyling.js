import React from "react";

function InlineStyling() {
  const heading = {
    fontSize: "42px",
    color: "darkBlue",
  };
  const lst = {
    fontSize: "18px",
    color: "gray",
    textAlign: "left",
    marginLeft: "5%",
  };

  return (
    <div>
      <h1 style={heading}>Inline Styling</h1>
      <ul style={lst}>
        <li>In react inline styling not speicfy as string,</li>
        <li>instead specify in an obj,</li>
        <li>its key is camelCase version of style name,</li>
        <li>and value is usually a str</li>
      </ul>
    </div>
  );
}

export default InlineStyling;
