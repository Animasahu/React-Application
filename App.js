import React from "react";
import ReactDOM from "react-dom/client";

//React component
const Title = () => (
  <h1 className="head" tabIndex="4">
       Anima Sahu
  </h1>
  );

//React Functional Component
const HeadingComponent = () => (
    <div id="container">
        <Title/>
        <h1 className="heading">Anima Sahu functional component</h1>
    </div>
);

// const Heading = () => {
//     return <div className="head">
//         <h1>njkhkhklj</h1>
//     </div>
// }


const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);
root.render(<HeadingComponent/>);
