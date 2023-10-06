import React, { useEffect, useState } from "react";
import Card from "../src/component/Card/Card";
import DropDown from "./component/DropDown/DropDown";
import Footer from "./component/Footer/Footer";
import "./App.css";

function App() {
  const [selectedCity, setSelectedCity] = useState("");
  const [forecastData, setForecastData] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleDropdownChange = (selectedValue) => {
    console.log("selected city", selectedValue);
    const selectedCity = JSON.parse(selectedValue)
    setSelectedCity(selectedCity);
  };
  //fetching successfully done
  useEffect(() => {
    const handleOnClick = async () => {
      if (selectedCity) {
        try {
          const response = await fetch(
            `https://www.7timer.info/bin/api.pl?lon=${selectedCity.lon}&lat=${selectedCity.lat}&product=astro&output=json`
          );

          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          } else {
            const data = await response.json();
            console.log("data:", data);
            setForecastData(data);
            console.log("forecast data is", data)
            setLoading(false);
          }
        } catch (error) {
          console.error("Error fetching data from API", error);
          setLoading(false);
        }
      }
    };

    handleOnClick();
  }, [selectedCity]);

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
          <span className="keyword-magnet">7Timer!</span>
        </a>
      </h3>
      <DropDown
        className="select-city"
        name="dropdown"
        onChange={handleDropdownChange}
      ></DropDown>
      <div className="weather-cards">
        {/* <Card forecastData={forecastData.dataseries[0]} />
        <Card forecastData={forecastData.dataseries[1]} />
        <Card forecastData={forecastData.dataseries[2]} />
        <Card forecastData={forecastData.dataseries[3]} /> */}
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
