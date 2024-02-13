import React from "react";

/* Note : make it arrow fun first*/
// const FwrdRefsComp = () => {
//   return (
//     <div>
//       <input type="text" />
//     </div>
//   );
// };

/* -3rd step: use frwrd ref metod
    method is going to b assign const
    React.forwardRef() take 1 comp as its param 
    
    Note:every fun comp receives props as its param 

    when a comp passed as param to frwrdRef, then ref attrib will be 2nd param
    then assign as value to ref param (pointing to ref attrib in parent comp) in input element
*/
const FwrdRefsComp = React.forwardRef((props, ref) => {
  return (
    <div>
      <input type="text" ref={ref} />
    </div>
  );
});

export default FwrdRefsComp;
