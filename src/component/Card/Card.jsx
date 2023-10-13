import React from "react";
import "./Card.css";

const Card = ({ className, weather, high, low, date, src, alt }) => {
 
  return (
    <div className={className}>
      <h1 className="card-date">{date}</h1>
      <img className="card-img" src={src} alt={alt}></img>
      <h3 className="card-weather-status">
        {weather}
      </h3>
      <div className="temp">
        <h5 className="high">H: {high["#text"]} C</h5>
        <h5 className="low">L: {low["#text"]} C</h5>
      </div>
    </div>
  );
};

export default Card;
