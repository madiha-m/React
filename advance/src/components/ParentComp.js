import React, { Component, PureComponent } from "react";
import RegularComp from "./RegularComp";
import PureComp from "./PureComp";

/* change extends of pure component to purecomponent
    all components will render initiallty only 
*/
export class ParentComp extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      name: "madiha",
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        name: "madiha",
      });
    }, 2000);
  }

  render() {
    console.log("************ Parent Component ************");
    return (
      <div>
        Parent Component
        <RegularComp name={this.state.name} />
        <PureComp name={this.state.name} />
        <p>
          <b>Difference b/w Regular and Pure Componenet Classes</b>
        </p>
        <ul>
          <li>PureCompClass Rendered only once</li>
          <li>RegularCompClass rendered everytime</li>
        </ul>
        <ul>
          <li>
            PureComp implements <i>shouldComponentUpdate</i> with a
            <i> shallow props & state comparison</i>
          </li>
          <li>
            Regular doesnot implement <i>shouldComponentUpdate</i> methos and
            returns true by defalut always.
          </li>
        </ul>
        <ul>
          <li>
            PureComp perfom SC pf prevState/PreProps with
            currentState/currentProps , and only if found a difference then
            re-render
          </li>
          <li></li>
        </ul>
        <ul>
          <b>Shallow Comparison (SC)</b>
          <li>
            <i>Primitive Types: </i>If a & b have same value + same type, then a
            SC b return true
          </li>
          <li>
            <i>Complex Types: </i>If a & b reference are the exact same obj,
            Then a SC b return true
          </li>
          <li>
            <i>Example: </i>
            <br />
            var a = [1, 2, 3]
            <br />
            var b = [1, 2, 3]
            <br />
            var c = a {/* var c has the refrence of var a */}
            <br />
            <br />
            var a SC b = (a === b) return <i>false</i>. As both not pointing to
            same obj.
            <br />
            var a SC c = (a === c) return <i>true</i>. As both pointing to same
            obj.
            <br />
          </li>
        </ul>
      </div>
    );
  }
}

export default ParentComp;
