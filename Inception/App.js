/**
 * 
 * <div id="parent">
 *      <div id="child">
 *          <h1>I'm h1 tag</h1>
 *          <h2>I'm h2 tag</h2>
 *      </div>
 *      <div id="child2">
 *          <h1>I'm h1 tag</h1>
 *          <h2>I'm h2 tag</h2>
 *      </div>
 * </div>
 * 
 * ReactElement(Object) => HTML(Browser Understands)
 * 
 */

const parent = React.createElement("div", {id: "parent"},[
        React.createElement("div", {id: "child"}, [
                React.createElement("h1", {}, "I'm h1 tag"), 
                React.createElement("h2", {}, "I'm h2 tag")
            ]
        ),
        React.createElement("div", {id: "child2"}, [
                React.createElement("h1", {}, "I'm h1 tag"), 
                React.createElement("h2", {}, "I'm h2 tag")
            ]
        )
    ]
);

console.log('parent', parent);

const root = ReactDOM.createRoot(document.getElementById("header"));
root.render(parent); 

// Created h1 tag will `hello world from react`
const heading = React.createElement(
    "h1",                           // tag
    { id: "heading", xyz: "abc"},   // attributes
    "Hello World from React!"       //children
);

console.log('heading', heading); // react element return object

// // Create root, Root is the place where all react code will run.
// const root = ReactDOM.createRoot(document.getElementById("root"));

// // Everything will be rendered in the root.
// root.render(heading);

// .render = take the heading object create an h1 teg 
// that browser will understand and put that up inside the root