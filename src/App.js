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
          const response = await fetch(
            `http://www.7timer.info/bin/api.pl?lon=113.17&lat=23.09&product=civillight&output=xml`
          );

          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          } else {

            const data = await response.text();
            const parser = new DOMParser()
            const xmlDoc = parser.parseFromString(data, 'application/xml')
            const jsonData = xmlToJson(xmlDoc)
            setForecastData(jsonData);
            console.log("forecast data is", jsonData)
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
        {forecastData &&
          forecastData.product.dataseries.data.map((forecast, index) => (
            <Card
              key={index}
              weather={forecast.weather}
              high={forecast.temp2m_max}
              low={forecast.temp2m_min}
            />
          ))}
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
