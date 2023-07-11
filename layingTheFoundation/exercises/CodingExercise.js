import React from "react";
import ReactDOM from "react-dom/client";

// React Element
const heading = React.createElement("div", { class: "title" }, [
  React.createElement("h1", {}, "I'm h1 header"),
  React.createElement("h2", {}, "I'm h2 header"),
  React.createElement("h3", {}, "I'm h3 header"),
]);

// JSX
const jsxHeadings = (
  <div className="title">
    <h1>I'm h1 header using JSX</h1>
    <h2>I'm h2 header using JSX</h2>
    <h3>I'm h3 header using JSX</h3>
  </div>
);

// Functional Component
const Title = () => (
  <div className="title">
    <h1>I'm h1 header using JSX in Nested Component</h1>
    <h2>I'm h2 header using JSX in Nested Component</h2>
    <h3>I'm h3 header using JSX in Nested Component</h3>
  </div>
);

const HeadingComponent = () => (
  <div className="title">
    {Title()}
    {<Title />}
    {<Title></Title>}
    <h1 className="header1">I'm h1 header using JSX</h1>
    <h2 className="header2">I'm h2 header using JSX</h2>
    <h3 className="header3">I'm h3 header using JSX</h3>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(jsxHeadings)
root.render(<HeadingComponent />);
