import React from "react";
import ReactDOM from "react-dom/client";

// React Element
const jsxHeading = (
  <h1 className="head" tabIndex="5">
    Namaste Javascript React Element using JSX
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

// React Fragment - behaves like an empty tag
const HeadingComponent = () => (
    <>
        <div id="container">
            <Title />
            <h1 className="heading">Namaste React Functional Component</h1>
        </div>
        <div id="container-2"></div>
    </>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(jsxHeading);
root.render(<HeadingComponent />);
