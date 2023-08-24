import React from "react";
import ReactDOM from "react-dom";
const fname = "Aftab";
const lname = "Alam";
const a = "WEL";
const b = "COME";
const num = 7;
ReactDOM.render(
  <div>
    <h1>
      Hello {fname} {lname}!{" "}
    </h1>
    <h2>MOST {a + "" + b}</h2>
    <h2>My luckey number is {num}</h2>
    <h2>Random Number generated is {Math.floor(Math.random() * 10)}</h2>
  </div>,
  document.getElementById("root")
);
