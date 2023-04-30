import React from "react";
import "./Homepage.css";
import home from "../img/home.webp";

function Homepage() {
  return (
    <div className="Home-img">
      <div>
        {" "}
        <h1> Learn fun with us!</h1>
        <h2>Click on the cards and learn new words!!!</h2>
      </div>

      <img src={home} alt="Homeimg"></img>
    </div>
  );
}
export default Homepage;
