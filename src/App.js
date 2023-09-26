import React from "react";
import Card from "../src/component/Card/Card";
import DropDown from "./component/DropDown/DropDown";
import Footer from "./component/Footer/Footer";
import "./App.css";

function App() {
  // const [options, setOptions] = useState([]);

  // useEffect(() => {
  //   // Fetch and parse the CSV file
  //   Papa.parse("my-weather-forecast/public/assets/city_coordinates.csv", {
  //     header: true,
  //     dynamicTyping: true,
  //     complete: (results) => {
  //       if (results.data.length > 0) {
  //         // Map the CSV data to an array of options
  //         const csvOptions = results.data.map((row) => ({
  //           value: JSON.stringify({ lat: row.latitude, lon: row.longitude }),
  //           label: `${row.city}, ${row.country}`,
  //         }));
  //         console.log("csvOptions".csvOptions);
  //         setOptions(csvOptions);
  //       }
  //     },
  //     error: (error) => {
  //       console.error("CSV parsing error:", error);
  //     },
  //   });
  // }, []);

  const handleOnClick = () => {};
  
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
      <DropDown className="select-city" name="dropdown" onClick={handleOnClick}>
      </DropDown>
      <div className="weather-cards">
        <Card></Card>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
