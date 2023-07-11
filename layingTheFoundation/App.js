import React from "react";
import ReactDOM from "react-dom/client";

// React Element
const jsxHeading = (
    <h1 className="head" tabIndex="5">
        Namaste Javascript using JSX
    </h1>
);

// React Component
const HeadingComponent = () => (
    <div id="container">
        <h1 className="heading">Namaste React Functional Component</h1>;
    </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(jsxHeading);