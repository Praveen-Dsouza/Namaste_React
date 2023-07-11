import React from "react";
import ReactDOM from "react-dom/client";

// React Element
const jsxHeading = (
  <h1 className="head" tabIndex="5">
    Namaste Javascript using JSX
  </h1>
);

// React Component
const Title = function () { 
    return (
    <h1 className="head" tabIndex="5">
        Namaste Javascript using JSX
    </h1>
    );
}


const HeadingComponent = () => (
  <div id="container">
    {/* <Title /> */}
    { jsxHeading }
    <h2>{ 100 + 200 }</h2>
    <h1 className="heading">Namaste React Functional Component</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(jsxHeading);
root.render(<HeadingComponent />);
