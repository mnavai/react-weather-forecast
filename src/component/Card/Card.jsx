import React from "react";
import "./Card.css";

const Card = ({ className, weather, high, low, date}) => {
  return (
    <div className={className}>
      <h1 className="card-date">{date}</h1>
      <img className="card-img" src="assets/images/windy.png" alt="weathe icon"></img>
      <h3 className="card-weather-status">{weather["#text"]}</h3>
      <div className="temp">
        <h5 className="high">H: {high["#text"]}</h5>
        <h5 className="low">L: {low["#text"]}</h5>
      </div>
    </div>
  );
};

export default Card;
