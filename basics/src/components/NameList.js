import React from "react";
import Person from "./Person";
import NameComponent from "./NameComponent";

function NameList() {
  // Dataset
  const names = ["Bruce", "Clark", "Diana", "Bruce"];
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

  /*
  Index as key , while key is not used
  Error Warning: NameList.js:71 Warning: Encountered two children with the same key,`Bruce`.
  Solution: the arrow fun passed in map receive a 2nd param > index

  When to use index:
  - absense of unique id
  - list is static, means no add/delete
  - no need of render or filter
  */
  // const nameList = names.map((name) => <h2 key={name}>{name}</h2>);
  const nameList = names.map((name, index) => (
    // NameList.js:71 Warning: Encountered two children with the same key,`Bruce`.
    // <NameComponent key={name} name={name} />
    <NameComponent key={index} name={name} />
  ));

  //  Warning: Each child in a list should have a unique "key" prop.
  const personList = persons.map((person) => (
    // move in separate to refactor
    // <h2>
    //   I'm {person.name}. My age is {person.age}. My speciality is in{" "}
    //   {person.skill}.
    // </h2>

    // passing person as prop to Person.js
    <Person key={person.id} person={person} />
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
