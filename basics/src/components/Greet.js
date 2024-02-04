import React from "react";

// const Greet = (props) => {

/*
- destructuring > unpack values from arrays or props from objs
- 2 ways : in props
*/
// const Greet = ({ name, task, children }) => {
//   console.log("name: ", name, ", task: ", task, ", children: ", children);
//   // console.log(props);
//   return (
//     <h1>
//       {/* destructure */}
//       Hi Greetings. This is {name} {task}
//       {children}
//       {/* Hi Greetings. This is {props.name} {props.task}
//       {props.children} */}
//     </h1>
//   );
// };

// Destructure in fun body
const Greet = (props) => {
  const { name, task, children } = props;
  console.log("name: ", name, ", task: ", task, ", children: ", children);
  // console.log(props);
  return (
    <h1>
      {/* destructure */}
      Hi Greetings. This is {name} {task}
      {children}
      {/* Hi Greetings. This is {props.name} {props.task}
      {props.children} */}
    </h1>
  );
};

// function Greet() {
//   return <h1>Hi </h1>;
// }

export default Greet;
