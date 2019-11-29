//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.
import React from "react";
import ReactDOM from "react-dom";

let d = new Date();
let hours = d.getHours();

let greeting = "Good";

let stylehour = {
  color: "red"
};

if (hours <= 12) {
  greeting += " Morning";
  stylehour.color = "red";
} else if (hours > 12 && hours < 18) {
  greeting += " Afternoon";
  stylehour.color = "green";
} else {
  greeting += " Evening";
  stylehour.color = "blue";
}

ReactDOM.render(
  <div>
    <h1 style={stylehour}>{greeting}</h1>
  </div>,
  document.getElementById("root")
);
