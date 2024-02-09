import React, { Component } from "react";

class CompLifecycleMethod extends Component {
  render() {
    return (
      <div>
        <h1>Component Lifecycle Methods</h1>
        <h6>
          these methods are only for <b>Class Component</b> not for functional
          components
        </h6>
        <ol>
          <li>
            <ul>
              <p>
                <b>Mounting: </b>
              </p>
              <li>
                called, while instance od comp. created and inserted in DOM
              </li>
              <li>
                Methods: constructor, static getDerivedStateFromProps, render
                and componentDidMount
              </li>
            </ul>
          </li>
          <li>
            <ul>
              <p>
                <b>Updating: </b>
              </p>
              <li>
                claaed, while comp. re-render due to changes in props/state
              </li>
              <li>
                Methods: static getDerivedStateFromProps, shouldComponentUpdate,
                render, getSnapshotBeforeUpdate and componentDidMount
              </li>
            </ul>
          </li>
          <li>
            <ul>
              <p>
                <b>Unmounting: </b>
              </p>
              <li>called, while comp removed from DOM</li>
              <li>Methods: componentWillUnmount</li>
            </ul>
          </li>
          <li>
            <ul>
              <p>
                <b>Error Handling: </b>
              </p>
              <li>called, while error during rendering</li>
              <li>
                Methods: static getDerivedStateFromError and componentDidCatch
              </li>
            </ul>
          </li>
        </ol>
      </div>
    );
  }
}

export default CompLifecycleMethod;
