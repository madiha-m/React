import React from "react";
import styles from "./moduleStyling.module.css";
import "./moduleStyling.css";

function ModuleStyling() {
  return (
    <div>
      <h1>Module Styling</h1>
      <ul>
        <li className="error">Regular stylesheet applied here</li>
        <li className={styles.success}>Module stylsheet applied here</li>
        <li>
          Advantage of css modules: classes are locally scoped by default, not
          applied at children
        </li>
        <li>Css applied globaly</li>
        <li>Alternate: css in js package like styled component </li>
      </ul>
    </div>
  );
}

export default ModuleStyling;
