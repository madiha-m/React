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
        <ol style={{ textAlign: "left" }}>
          <li>
            <ul>
              <p>
                <b>Mounting: </b>
              </p>
              <li>
                called, while instance of comp. created and inserted in DOM
              </li>
              <li>
                Methods: constructor, static getDerivedStateFromProps, render
                and componentDidMount
                <ol>
                  <li>
                    <b>
                      <i>Constructor (props) </i>
                    </b>
                    <ul>
                      <li>special fun, called when new component created.</li>
                      <li>used for: initilize state & bind event-handling</li>
                      <li>can't use: http req, </li>
                      <li>
                        important things to create constructor:
                        <br />
                        1- super(props)
                        <br />
                        2- only place to overwite this.state value, else change
                        at useState place
                      </li>
                    </ul>
                  </li>
                  <li>
                    <b>
                      <i>static getDerivedStateFromProps(props, state)</i>
                    </b>
                    <ul>
                      <li>
                        used when state of method depends on changes in props
                        overtime, means initial state of comp based on props
                        passed to it
                      </li>
                      <li>
                        so here is need to set the state, but due to static
                        method thos keyword not applicable, so return an obj
                        instead
                      </li>
                      <li>
                        side effects: can't use: http req, fetching data from
                        endpoint etc
                      </li>
                    </ul>
                  </li>
                  <li>
                    <b>
                      <i>render</i>
                    </b>
                    <ul>
                      <li>
                        it is only <b> required method</b> in class componenet,
                        a pure fun
                      </li>
                      <li>
                        in render method read this.props & this.state and return
                        JSX
                      </li>
                      <li>
                        Not to do: change state, interact with DOM, make ajax
                        calls
                      </li>
                      <li>
                        children also used so children components lifecycle also
                        exected.
                      </li>
                    </ul>
                  </li>
                  <li>
                    <b>
                      <i>componentDidMount</i>
                    </b>
                    <ul>
                      <li>called only once in whole lifecycle</li>
                      <li>
                        invoked imideiately after rendering the component with
                        all its children in DOM
                      </li>
                      <li>
                        good place to initilize DOM ndes and load data from
                        network request
                      </li>
                    </ul>
                  </li>
                </ol>
              </li>
            </ul>
          </li>
          <li>
            <ul>
              <p>
                <b>Updating: </b>
              </p>
              <li>
                clalled, while component re-render due to changes in props/state
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
