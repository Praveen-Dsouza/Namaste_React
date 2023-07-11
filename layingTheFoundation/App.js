import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement => Object => HTMLElement(render)

const heading = React.createElement("h1", {id: "heading"}, "Namaste React");

console.log('heading', heading);

// JSX - HTML - like or XML - like Syntax
const jsxHeading =  <h1 id="heading">Namaste Javascript using JSX</h1>

console.log('jsxheading', jsxHeading);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(jsxHeading);