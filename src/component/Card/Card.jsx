import React from "react";
import "./Card.css";

const Card = (src,alt, forecastData) => {
  return (
    <div className="card-container">
      <h1 className="card-date">{forecastData.date}</h1>
      <img src={src} alt={alt}></img>
      <h3 className="card-weather-status">{forecastData.status}</h3>
      <h5 className="high">{forecastData.high}</h5>
      <h5 className="low">{forecastData.low}</h5>
    </div>
  );
};
export default Card;
