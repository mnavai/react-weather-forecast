import React from "react";
import "./Card.css";

const Card = ({ className,weather, high, low }) => {
  return (
    <div className={className}>
      <h1 className="card-date">{weather.description}</h1>
      <h3 className="card-weather-status">{weather["#text"]}</h3>
      <h5 className="high">High {high["#text"]}</h5>
      <h5 className="low">Low {low["#text"]}</h5>
    </div>
  );
};

export default Card;
