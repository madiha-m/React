import React from "react";

function Columns() {
  // array of items
  const items = [];

  return (
    /*
    Console Warning: Warning: validateDOMNesting(...): <td> cannot appear as a child of <div>.

    Solution: Replace div tag with React.Fragment
     */

    // <div>
    <React.Fragment>
      {/* can accept "key" attribute when rendering list of items
            Key attributes are only one acceptable by react fragment
       */}
      {items.map((item) => (
        <React.Fragment key={item.id}>
          <h1>Title</h1>
          <p>{item.description}</p>
        </React.Fragment>
      ))}
      <td>Name</td>
      <td>Madiha</td>
      {/* </div> */}
    </React.Fragment>
  );
}

export default Columns;
