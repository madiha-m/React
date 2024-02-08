import React from "react";

// recomending way to refactor in separate file
// Person component only responsible to render Person, as like List Comp for list rendering
function Person({ person }) {
  return (
    // now send data from NameList Component via prop
    // Key prop can't render in child component
    <div>
      <h2>
        I'm {person.name}. My age is {person.age}. My speciality is in{" "}
        {person.skill}.
      </h2>
    </div>
  );
}

export default Person;
