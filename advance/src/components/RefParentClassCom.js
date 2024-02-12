import React, { Component } from "react";
import RefClassCom from "./RefClassCom";

class RefParentClassCom extends Component {
  constructor(props) {
    super(props);

    //1st step
    this.compRef = React.createRef();
  }

  // 4th step, defined in child
  clickHandler = () => {
    this.compRef.current.focusInput();
  };

  render() {
    return (
      <div>
        {/* 2nd step attach it */}
        <RefClassCom ref={this.compRef} />

        {/* click on btn in parent comp, chile comp input element receive teh focus , use refs in child comp*/}
        {/* 3rd click handler event  */}
        <button onClick={this.clickHandler}>Focus Input</button>
      </div>
    );
  }
}

export default RefParentClassCom;
