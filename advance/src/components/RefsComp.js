import React, { Component } from "react";

/* Refs make it possible to access DOM nodes directly in react
    example problem: focusing text input imideitely after page-render
    Solution: 3 steps
    -1st create a ref > React.createRef()
    -2nd attach ref in input element in render method
    -3rd call focus method on input element
*/

class RefsComp extends Component {
  constructor(props) {
    super(props);

    // 1st step created ref in const. so can be refrence in whole comp
    this.inputRef = React.createRef();
  }

  componentDidMount() {
    /* after 2nd step checking which prop inputRef holds
      it holds prop "current" (pointing to actual DOM node) with value "input"
      so apply "focus" method on "current" prop
     */
    this.inputRef.current.focus();
    console.log(this.inputRef);
  }

  render() {
    return (
      <div>
        {/* 2nd step: attach ref with input element in render method 
          which prop this.inputRef holds?  
          Ans: perform in componentDidMount lifecycle hook
        */}
        <input type="text" ref={this.inputRef} />
      </div>
    );
  }
}

export default RefsComp;
