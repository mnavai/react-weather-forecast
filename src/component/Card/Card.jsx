import React from "react";
import "./Card.css";

const Card = ({ weather, high, low }) => {
  return (
    <div className="card-container">
      <h1 className="card-date">{weather.description}</h1>
      <h3 className="card-weather-status">{weather.description}</h3>
      <h5 className="high">{high["#text"]}</h5>
      <h5 className="low">{low["#text"]}</h5>
    </div>
  );
};

export default Card;
