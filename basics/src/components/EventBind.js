import React, { Component } from "react";

class EventBind extends Component {
  // create state property and bind it to UI
  constructor() {
    super();
    this.state = {
      message: "hi",
    };

    // 3rd: bind in ctor
    this.clickHandler3 = this.clickHandler3.bind(this);
  }

  /* ERROR:
        Cannot read properties of undefined (reading 'setState')
        TypeError: Cannot read properties of undefined (reading 'setState')
        this keyword is undefined in event handler, js concept
        
        Solution: event binding , there are many ways
        1st method: use bind keyword > this.function_name.bind(this) > slow performance
        2nd: use arrow fun in render method > easiest way
        
        3rd: bind eventhandler in constructor > suggested
        4th: use arrow fun as class prop > suggested
  */
  clickHandler() {
    this.setState({
      message: "giving error undefined",
    });
    console.log(this);
  }
  clickHandler1() {
    this.setState({
      message: "bind keyword working",
    });
    console.log(this);
  }
  clickHandler3() {
    this.setState({
      message: "binding in ctor working",
    });
    console.log(this);
  }
  clickHandler4 = () => {
    this.setState({
      message: "bind using arrow fun as class prop  working",
    });
    console.log(this);
  };

  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        <div>
          <button onClick={this.clickHandler}>
            Whiout binding this keyword
          </button>
        </div>
        <div>
          {/* 1st: use of bind keyword to bind "this" from setState */}
          <button onClick={this.clickHandler1.bind(this)}>
            Use of bind keyword to bind this
          </button>
        </div>
        <div>
          {/* 2nd: use of arrow fun */}
          <button onClick={() => this.clickHandler2()}>
            Use of arrow fun to bind this keyword
          </button>
        </div>
        <div>
          {/* 3rd: bind in ctor */}
          <button onClick={this.clickHandler3}>
            Use of arrow fun to bind this keyword
          </button>
        </div>
        <div>
          {/* 4th: use arrow fun as class prop */}
          <button onClick={this.clickHandler4}>
            Use of arrow fun as class prop to bind this keyword
          </button>
        </div>
      </div>
    );
  }
}

export default EventBind;
