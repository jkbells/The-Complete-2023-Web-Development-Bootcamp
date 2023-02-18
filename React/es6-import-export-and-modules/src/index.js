import React from "react";
import ReactDOM from "react-dom";
import pi, { doublepi, triplepi } from "./math.js";

ReactDOM.render(
  <ul>
    <li>{pi}</li>
    <li>{doublepi()}</li>
    <li>{triplepi()}</li>
  </ul>,
  document.getElementById("root")
);
