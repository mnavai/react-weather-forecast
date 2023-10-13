import React, { useEffect, useState } from "react";
import { addDays, format, startOfDay } from "date-fns";
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
    const selectedCity = JSON.parse(selectedValue);
    setSelectedCity(selectedCity);
    setLoading(true)
  };
  //fetching successfully done
  useEffect(() => {
    const handleOnClick = async () => {
      function xmlToJson(xml) {
        // Create the return object
        let obj = {};

        if (xml.nodeType === 1) {
          // element
          // do attributes
          if (xml.attributes.length > 0) {
            obj["@attributes"] = {};
            for (let j = 0; j < xml.attributes.length; j++) {
              const attribute = xml.attributes.item(j);
              obj["@attributes"][attribute.nodeName] = attribute.nodeValue;
            }
          }
        } else if (xml.nodeType === 3) {
          // text
          obj = xml.nodeValue;
        }

        // do children
        if (xml.hasChildNodes()) {
          for (let i = 0; i < xml.childNodes.length; i++) {
            const item = xml.childNodes.item(i);
            const nodeName = item.nodeName;
            if (typeof obj[nodeName] === "undefined") {
              obj[nodeName] = xmlToJson(item);
            } else {
              if (typeof obj[nodeName].push === "undefined") {
                const old = obj[nodeName];
                obj[nodeName] = [];
                obj[nodeName].push(old);
              }
              obj[nodeName].push(xmlToJson(item));
            }
          }
        }
        return obj;
      }

      if (selectedCity) {
        try {
          setLoading(true)
          const response = await fetch(
            `http://www.7timer.info/bin/api.pl?lon=${selectedCity.lon}&lat=${selectedCity.lat}&product=civillight&output=xml`
          );

          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          } else {
            const data = await response.text();
            const parser = new DOMParser();
            const xmlDoc = parser.parseFromString(data, "application/xml");
            const jsonData = xmlToJson(xmlDoc);
            setForecastData(jsonData);
            console.log("forecast data is", jsonData);
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

  const weatherImages = {
    clear: "/assets/images/clear.png",
    cloudy: "/assets/images/cloudy.png",
    fog: "/assets/images/fog.png",
    humid: "/assets/images/humid.png",
    ishower: "/assets/images/ishower.png",
    lightrain: "/assets/images/lightrain.png",
    lightsnow: "/assets/images/lightsnow.png",
    mcloudy: "/assets/images/mcloudy.png",
    oshower: "/assets/images/oshower.png",
    pcloudy: "/assets/images/pcloudy.png",
    rain: "/assets/images/rain.png",
    rainsnow: "/assets/images/rainsnow.png",
    snow: "/assets/images/snow.png",
    tsrain: "/assets/images/tsrain.png",
    tstorm: "/assets/images/tstorm.png",
    windy: "/assets/images/windy.png"
  };

  const weatherDescriptions = {
    ishower: "Isolated Showers",
    oshower: "Occasional Showers",
    pcloudy: "Partly Cloudy",
    tsrain: "Thunderstorm | Rain",
    tsnow: "Thunderstorm | Snow",
    clear: "Clear",
    cloudy: "Cloudy",
    fog: "Fog",
    humid: "Humid",
    lightrain: "Light Rain",
    lightsnow: "Light Snow",
    mcloudy: "Moderate Cloudy",
    rain: "Rain",
    rainsnow: "Rain | Snow",
    snow: "Snow",
    tstorm: "Thunderstom",
    windy: "Windy",
  };

  // Calculate the dates for each card and pass them as props
  const today = startOfDay(new Date());
  const cardDates = Array.from({ length: 7 }, (_, index) => {
    const incrementedDate = addDays(today, index);
    return format(incrementedDate, "EEE MMM dd");
  });

  return (
    <div className="App">
      <div className="wrapper">
        <div className="top-section">
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
              className="link"
            >
              <span className="keyword-magnet">7Timer!</span>
            </a>
          </h3>
        </div>
        <div className="select-group">
          <lebel className="city-heading">Select the city</lebel>
          <DropDown
            className="select-city"
            name="dropdown"
            onChange={handleDropdownChange}
          ></DropDown>
        </div>
        {/* {loading && <div className="loading-sign">Loading...</div>} */}
        <div className="weather-cards">
          {forecastData &&
            forecastData.product.dataseries.data.map((forecast, index) => {
              const weatherType = forecast.weather["#text"].toLowerCase();
              const imageSrc = weatherImages[weatherType];
              const weatherDescription =
                weatherDescriptions[weatherType] || forecast.weather["#text"];
              return (
                <Card
                  className="card"
                  key={index}
                  weather={weatherDescription}
                  high={forecast.temp2m_max}
                  low={forecast.temp2m_min}
                  date={cardDates[index]}
                  src={imageSrc}
                  alt={`Weather: ${weatherType}`}
                />
              );
            })}
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
