import React from "react";

function NameList() {
  // Dataset
  const names = ["Bruce", "Clark", "Diana"];
  const persons = [
    {
      id: 1,
      name: "Bruce",
      age: 30,
      skill: "React",
    },
    {
      id: 2,
      name: "Clark",
      age: 25,
      skill: "Angular",
    },
    {
      id: 3,
      name: "Diana",
      age: 28,
      skill: "React Native",
    },
  ];

  //   Logic
  const nameList = names.map((name) => <h2>{name}</h2>);
  const personList = persons.map((person) => (
    <h2>
      I'm {person.name}. My age is {person.age}. My speciality is in{" "}
      {person.skill}.
    </h2>
  ));

  return (
    <div>
      {
        nameList
        // move out logic to make code simple
        // names.map((name) => (
        //     <h2>{name}</h2>
        // ))
      }
      {
        // list of obj with some properties
        personList
      }

      {/* use map method to render a list */}
      {/* <h2>{names[0]}</h2>
      <h2>{names[1]}</h2>
      <h2>{names[2]}</h2> */}
    </div>
  );
}

export default NameList;
