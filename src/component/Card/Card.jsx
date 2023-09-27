import React from "react";
import "./Card.css";

const Card = (date, src, alt, status, high, low) => {
  return (
    <div className="card-container">
      <h1 className="card-date">{date}</h1>
      <img src={src} alt={alt}></img>
      <h3 className="card-weather-status">{status}</h3>
      <h5 className="high">{high}</h5>
      <h5 className="low">{low}</h5>
    </div>
  )
};
export default Card;
