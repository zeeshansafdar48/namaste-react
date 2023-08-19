import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "Hi Zeeshan"),
    React.createElement("h2", {}, "Welcome to Namaste React")
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "Enjoy the World of Akshay Saini"),
    React.createElement("h2", {}, "Learning React js")
  ])
]);

root.render(parent);
