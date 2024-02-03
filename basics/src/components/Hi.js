import React, { createElement } from "react";

const Hi = () => {
  //   return (
  //     <div id="id_hi" className="class_hi">
  //       <h1>Hi This is madiha</h1>
  //     </div>
  //   );

  //   return React.createElement("div", null, "<h1>Hi this is madiha</h1>"); // h1 is just a txt

  // **React.createElement** > has parameters (1st: string, which render html, 2nd optional property, 3rd children (can be many as like above <h1> and txt))

  //   return React.createElement("div", null, "h1", "Hi this is madiha"); // not giving right results

  //   return React.createElement(
  //     "div",
  //     null,
  //     createElement("h1", null, "Hi this is madiha")
  //   ); // working now

  return React.createElement(
    "div",
    { id: "id_hi", className: "class_hi" },
    createElement("h1", null, "Hi this is madiha")
  ); // 2nd element
};

export default Hi;
