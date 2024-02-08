import React from "react";
import "./cssStyling.css";

function CssStylesheet(props) {
  let className = props.primary ? "primary" : "";

  return (
    <div>
      <h1 className={className}>CSS Style Sheet</h1>
    </div>
  );
}

export default CssStylesheet;
