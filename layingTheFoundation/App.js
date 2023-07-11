import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement => React Element - JS Object => HTMLElement(render)

const heading = React.createElement("h1", { id: "heading" }, "Namaste React");

console.log("heading", heading);

// JSX - HTML - like or XML - like Syntax
// JSX (transpiled before it reaches the JS) - PARCEL - Babel (JS Complier)
// JSX => Babel transpiles it to React.createElement => React Element - JS Object => HTMLElement(render)
const jsxHeading = (
    <h1 className="head" tabIndex="5">
        Namaste Javascript using JSX
    </h1>
);

console.log("jsxheading", jsxHeading);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(jsxHeading);
