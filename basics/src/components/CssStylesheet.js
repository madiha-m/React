import React from "react";
import "./cssStyling.css";

function CssStylesheet(props) {
  let className = props.primary ? "primary" : "";

  return (
    <div>
      <h1 className={className}>CSS Style Sheet</h1>
      <h2 className={`${className} font-xl`}>
        Specify multiple styling classes, use template literals. enclose
        class-names in backtics, if prop use $ as prefix{" "}
      </h2>
    </div>
  );
}

export default CssStylesheet;
