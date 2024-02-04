import React, { Component } from "react";

class Counter extends Component {
  /*
    1. track count value > count state will do this and bind it
    2. incre,ment count value > use btn  
  */

  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  increment() {
    /*
    - only change in console not in UI for this use setState
    - state can't modify directly, means not rerender comp
    */
    this.state.count = this.state.count + 1;
    console.log(this.state.count);
  }
  decrement() {
    /* 
    - can't modify state directly but use setState, it render the comp
    - calls to stState  are async
    - set state has 2 parems: 
     1st setState
     2nd call back fun

    */

    // here sending an object to setState
    this.setState(
      {
        count: this.state.count + 1,
      },
      /*
        - exe code only after state update > use callback fun
      */
      () => {
        console.log("callback value: ", this.state.count);
      }
    );
    /*
    console called before setState 
    coming from sync 
     */
    console.log(this.state.count);
  }

  //pass arrow fun as arg, whenever need to update state based on previous state
  dec() {
    this.setState((previousState) => ({
      count: previousState.count + 1,
    }));
  }

  decrementFive() {
    // react group multiple setState calls to 1 for better performance
    this.dec();
    this.dec();
    this.dec();
    this.dec();
    this.dec();
  }

  render() {
    return (
      <div>
        <div>Count - {this.state.count}</div>
        <button onClick={() => this.increment()}>Increment</button>
        <button onClick={() => this.decrement()}>Decrement</button>

        <div>Count Five - {this.state.count}</div>
        <button onClick={() => this.decrementFive()}>Decrement to 5</button>
      </div>
    );
  }
}

export default Counter;
