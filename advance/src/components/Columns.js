import React from "react";

function Columns() {
  return (
    /*
    Console Warning: Warning: validateDOMNesting(...): <td> cannot appear as a child of <div>.

    Solution: Replace div tag with React.Fragment
     */

    // <div>
    <React.Fragment>
      <td>Name</td>
      <td>Madiha</td>
      {/* </div> */}
    </React.Fragment>
  );
}

export default Columns;
