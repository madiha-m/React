/* Provide a way to render children into a DOM node, that existis the DOM hirarcy of the parent Comp
in DOM tree each react comp under root element. 
Potals break this ability of DOM tree
so render a comp which is not undr that root id  
 
Steps:
 - 1st step: add a DOM outside root element
   in index.html add another element under root element 
   <div id ="portal-root"></div>

 - 2nd step: add a fun Comp in components folder, add it to App to render to check under root element

 - 3rd step: now render it under outside DOM root (portal-root) element
     - import ReactDOM package in comp 
     - use ReactDOM.createPortals() > this method takes 2 params
     1st param is jsx want to render
     2nd param is DOM node, to mount elemt onto > document.goetElementById('portal-root')
*/

// Portals: 2nd step
import React from "react";

// Portals: 3rd step
import ReactDom from "react-dom";

function Portals() {
  return (
    ReactDOM.createPortals(<div>Portals Comp</div>),
    document.getElementById("portal-root")
  );
}

export default Portals;
