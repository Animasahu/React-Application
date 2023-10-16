import React from "react";
import ReactDOM from "react-dom/client";

//React.createElement => ReactElement - JS object =>HTMLElement(render)
const heading = React.createElement("h1" , {id:"heading"}, "this is h1 tag");

console.log(heading);

//JSX - HTML-like or XML-like syntax
//JSX (transpiled before it reaches the JS) - PARCEL - Babel
//JSX => Babel transpiles it to React.createElement => ReactElement-JS Object => HTMLElement(render)
const jsxHeading = (
  <h1 id="heading" className="head" tabIndex="4">
  Anima Sahu
  </h1>
  );

console.log(jsxHeading);


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(jsxHeading);
