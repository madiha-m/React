import React, { Component, createRef } from "react";

class RefClassCom extends Component {
  constructor(props) {
    super(props);

    this.inputRef = React.createRef();
  }

  // not going to use componentDidMount(), instad cteate method, which focus on input element, called by parent cmop
  focusInput() {
    this.inputRef.current.focus();
    // now need to creat parent comp
  }

  render() {
    return (
      <div>
        <input type="text" ref={this.inputRef} />
      </div>
    );
  }
}

export default RefClassCom;
