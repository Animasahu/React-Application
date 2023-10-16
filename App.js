/**
 * 
 * <div id = "parent">
 *  <div id = "child">
 *    <h1>I'm h1 tag</h1>
 *    <h2>I'm h2 tag</h2>
 *  </div>
 *   <div id = "child">
 *    <h1>I'm h1 tag</h1>
 *    <h2>I'm h2 tag</h2>
 *  </div>
 * </div>
 * 
 * ReactElement(object) = HTML(Browser understand)
 * 
 * 
 */
import React from "react";
import ReactDOM from "react-dom";

const parent = React.createElement(
    "div", 
    {id: "parent"}, [
        React.createElement("div", {id: "child"}, [
            React.createElement("h1", {}, "I'm Anima Sahu"),
            React.createElement("h2", {}, "hgjdgkwfhkwef")
    ]),
    React.createElement("div", {id: "child2"}, [
        React.createElement("h1", {}, "I'm h1 tag"),
        React.createElement("h2", {}, "I'm h2 tag")
])
]);


console.log(parent); //object
        
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);