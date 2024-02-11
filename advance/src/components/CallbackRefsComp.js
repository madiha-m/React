import React, { Component } from "react";

/* Call Back Refs: (an old approach)
    React will call the RefcallBack with DOM element, when component mounts, and call it null when unmount
    4steps
    -1st: create a prop(DOM element) with null value > this.prop_name = null
    -2nd: create a method, that will assign DOM element to the ref, craeted in step1 > this.set_prop_name = (e) => { this.prop_name = e}
    -3rd: attach it with input element
    -4th: check if the value exists on the reference prop + not null > apply condition in componentDidMount

 */

class CallbackRefsComp extends Component {
  constructor(props) {
    super(props);

    // 1st step: create a prop(DOM element) with null value
    this.cbRef = null;

    // 2nd step: create a method, that will assign DOM element to the ref, craeted in step1
    this.setCbRef = (element) => {
      this.cbRef = element;
    };
  }

  componentDidMount() {
    /* 4th step:
    checking id prop exists + not null
    DOM node directly access using ref prop, no need of current prop
     */
    if (this.cbRef) {
      this.cbRef.focus();
    }
  }

  clickHandler = () => {
    alert(this.cbRef.value);
  };

  render() {
    return (
      <div>
        {/* 3rf step: attach with input element
         */}
        <input type="text" ref={this.setCbRef} />

        {/* Apply ref to fetch input values */}
        <button onClick={this.clickHandler}>Click</button>
      </div>
    );
  }
}

export default CallbackRefsComp;
