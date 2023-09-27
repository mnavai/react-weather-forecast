import React, { useEffect, useState } from "react";
import Card from "../src/component/Card/Card";
import DropDown from "./component/DropDown/DropDown";
import Footer from "./component/Footer/Footer";
import "./App.css";

function App() {

  const [selectedCity, setSelectedCity] = useState("");
  const [forecastData, setForecastData] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleOnClick = () => {
    // Fetch forecast data when city is selected
    if (selectedCity) {
      setLoading(true);
      // Construct API URL based on the selected city
      const apiURL = `https://www.7timer.info/bin/api.pl?lon=${selectedCity.lon}&lat=${selectedCity.lat}&product=astro&output=json`;

      // Make the API request
      fetch(apiURL)
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          return response.json();
        })
        .then((data) => {
          setForecastData(data);
          console.log("Data received from API:", data);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
          setLoading(false);
        });
    } else {
      console.log("No city selected");
    }
  };

  useEffect(() => {
    handleOnClick();
  }, [selectedCity]);

 const handleDropdownChange = (event) => {
   const selectedValue = event.target.value;
   if (selectedValue) {
     const selectedCityData = JSON.parse(selectedValue);
     setSelectedCity(selectedCityData);
   } else {
     setSelectedCity("");
   }
 };
  
  return (
    <div className="App">
      <div className="top-section"></div>
      <h1 className="heading">EurOrbit</h1>
      <h3 className="sub-heading">European Weather Forecast</h3>
      <h3 className="sub-sub-heading">
        Powered by
        <a
          href="http://www.7timer.info/doc.php?lang=en"
          target="_blank"
          data-toggle="tooltip"
          data-placement="Top"
          data-original-title="Tap to visit 7Timer!"
          rel="noreferrer"
        >
          <span class="keyword-magnet">7Timer!</span>
        </a>
      </h3>
      <DropDown
        className="select-city"
        name="dropdown"
        onChange={handleDropdownChange}
      ></DropDown>
      <div className="weather-cards">
        {loading ? (
          <p>Loading...</p>
        ) : forecastData ? (
          // Render your weather cards here using forecastData
          <Card data={forecastData} />
        ) : (
          <p>Please select a city to see the forecast.</p>
        )}
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
