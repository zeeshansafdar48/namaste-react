// There are 3 steps to creating a React element.

// First step is creating a root element for React
// creating a root and rendering something in it, it is the job of React DOM  so that is why we use ReactDOM API
// const root = ReactDOM.createRoot(document.getElementById("root"));

// // Second step is creating an element for React
// // Creating an element is a core thing in react so that is why we use React API
// const heading = React.createElement("h1", { id: "heading", xyz: "abc" }, "Hello World from React!");

// console.log(heading); // object
// // Third step is rendering the element inside the root element
// root.render(heading);

/**

What is the empty object inside this line?
const heading = React.createElement("h1", {}, "Hello World from React!");
This is the place where you can add attributes to the element.
And what are the attributes? Suppose I need to give an id to my h1 element. So I can do this following
const heading = React.createElement("h1", {id: "heading"}, "Hello World from React!");
At the end of the day, React.createElement is just an object.

The job of render function is to take the object and make it h1 tag which browsers can understand
and put it into the root element which is div with root id in our case. 

*/

/**

<div id="parent">
  <div id="child">
    <h1>I am an h1 tag</h1>
    <h2>I am an h2 tag</h2>
  </div>
  <div id="child2">
    <h1>I am an h1 tag</h1>
    <h2>I am an h2 tag</h2>
  </div>  
</div>

*/

const root = ReactDOM.createRoot(document.getElementById("root"));

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I am an h1 tag"),
    React.createElement("h2", {}, "I am an h2 tag")
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I am an h1 tag"),
    React.createElement("h2", {}, "I am an h2 tag")
  ])
]);

console.log(parent); // object
root.render(parent);
