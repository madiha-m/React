import React from "react";

const Greet = (props) => {
  console.log(props);
  return (
    <h1>
      Hi Greetings. This is {props.name} {props.task}
      {props.children}
    </h1>
  );
};

// function Greet() {
//   return <h1>Hi </h1>;
// }

export default Greet;
