import React from "react";
import "./DropDown.css";

const DropDown = (className, name, onClick) => {
  return (
    <div className="drop-down">
      <select className={className} name={name} onClick={onClick}>
        {/* <option disabled="" selected="" value="">
          {" "}
          -- select a city --{" "}
        </option>
        {options.map((option, index) => (
            <option key={index} value={option.value}>
                {option.label}
            </option>
        ))} */}
        <option disabled="" selected="" value="">
          {" "}
           Select the city {" "}
        </option>
        <option value='{"lat":"52.367","lon":"4.904"}'>
          Amsterdam, Netherlands
        </option>
        <option value='{"lat":"39.933","lon":"32.859"}'>Ankara, Turkey</option>
        <option value='{"lat":"56.134","lon":"12.945"}'>Åstorp, Sweden</option>
        <option value='{"lat":"37.983","lon":"23.727"}'>Athens, Greece</option>
        <option value='{"lat":"54.597","lon":"-5.930"}'>
          Belfast, Northern Ireland, UK
        </option>
        <option value='{"lat":"41.387","lon":"2.168"}'>Barcelona, Spain</option>
        <option value='{"lat":"52.520","lon":"13.405"}'>Berlin, Germany</option>
        <option value='{"lat":"46.948","lon":"7.447"}'>
          Bern, Switzerland
        </option>
        <option value='{"lat":"43.263","lon":"-2.935"}'>
          Bilbao, Basque Country, Spain
        </option>
        <option value='{"lat":"50.847","lon":"4.357"}'>
          Brussels, Belgium
        </option>
        <option value='{"lat":"47.497","lon":"19.040"}'>
          Bucharest, Romania
        </option>
        <option value='{"lat":"59.329","lon":"18.068"}'>
          Budapest, Hungary
        </option>
        <option value='{"lat":"51.483","lon":"-3.168"}'>
          Cardiff, Wales, UK
        </option>
        <option value='{"lat":"50.937","lon":"6.96"}'>Cologne, Germany</option>
        <option value='{"lat":"55.676","lon":"12.568"}'>
          Copenhagen, Denmark
        </option>
        <option value='{"lat":"51.898","lon":"-8.475"}'>Cork, Ireland</option>
        <option value='{"lat":"53.349","lon":"-6.260"}'>Dublin, Ireland</option>
        <option value='{"lat":"55.953","lon":"-3.188"}'>
          Edinburgh, Scotland, UK
        </option>
        <option value='{"lat":"43.7696","lon":"11.255"}'>
          Florence, Italy
        </option>
        <option value='{"lat":"50.110","lon":"8.682"}'>
          Frankfurt, Germany
        </option>
        <option value='{"lat":"43.254","lon":"6.637"}'>
          French Riviera, France
        </option>
        <option value='{"lat":"32.650","lon":"-16.908"}'>
          Funchal, Madeira, Portugual
        </option>
        <option value='{"lat":"36.140","lon":"-5.353"}'>
          Gibraltar, British Territory
        </option>
        <option value='{"lat":"57.708","lon":"11.974"}'>
          Gothenburg, Sweden
        </option>
        <option value='{"lat":"53.548","lon":"9.987"}'>Hamburg, Germany</option>
        <option value='{"lat":"60.169","lon":"24.938"}'>
          Helsinki, Finland
        </option>
        <option value='{"lat":"39.020","lon":"1.482"}'>Ibiza, Spain</option>
        <option value='{"lat":"50.450","lon":"30.523"}'>Kyiv, Ukraine</option>
        <option value='{"lat":"61.115","lon":"10.466"}'>
          Lillehammer, Norway
        </option>
        <option value='{"lat":"38.722","lon":"-9.139"}'>
          Lisbon, Portugual
        </option>
        <option value='{"lat":"51.507","lon":"-0.127"}'>
          London, England, UK
        </option>
        <option value='{"lat":"40.416","lon":"-3.703"}'>Madrid, Spain</option>
        <option value='{"lat":"39.695","lon":"3.017"}'>Mallorca, Spain</option>
        <option value='{"lat":"53.480","lon":"-2.242"}'>
          Manchester, England, UK
        </option>
        <option value='{"lat":"43.296","lon":"5.369"}'>
          Marseille, France
        </option>
        <option value='{"lat":"27.760","lon":"-15.586"}'>
          Maspalomas, Gran Canaria, Spain
        </option>
        <option value='{"lat":"45.464","lon":"9.190"}'>Milan, Italy</option>
        <option value='{"lat":"48.135","lon":"11.582"}'>Munich, Germany</option>
        <option value='{"lat":"40.851","lon":"14.268"}'>Naples, Italy</option>
        <option value='{"lat":"43.034","lon":"-2.417"}'>
          Oñati, Basque Country, Spain
        </option>
        <option value='{"lat":"59.913","lon":"10.752"}'>Oslo, Norway</option>
        <option value='{"lat":"48.856","lon":"2.352"}'>Paris, France</option>
        <option value='{"lat":"50.075","lon":"14.437"}'>
          Prague, Czech Republic
        </option>
        <option value='{"lat":"64.146","lon":"-21.942"}'>
          Reykjavík, Iceland
        </option>
        <option value='{"lat":"56.879","lon":"24.603"}'>Riga, Latvia</option>
        <option value='{"lat":"41.902","lon":"12.496"}'>Rome, Italy</option>
        <option value='{"lat":"39.453","lon":"-31.127"}'>
          Santa Cruz das Flores, Azores, Portugual
        </option>
        <option value='{"lat":"28.463","lon":"-16.251"}'>
          Santa Cruz de Tenerife, Tenerife, Spain
        </option>
        <option value='{"lat":"57.273","lon":"-6.215"}'>
          Skye, Scotland, UK
        </option>
        <option value='{"lat":"42.697","lon":"23.321"}'>Sofia, Bulgaria</option>
        <option value='{"lat":"59.329","lon":"18.068"}'>
          Stockholm, Sweden
        </option>
        <option value='{"lat":"59.437","lon":"24.753"}'>
          Tallinn, Estonia
        </option>
        <option value='{"lat":"18.208","lon":"16.373"}'>Vienna, Austria</option>
        <option value='{"lat":"52.229","lon":"21.012"}'>Warsaw, Poland</option>
        <option value='{"lat":"53.961","lon":"-1.07"}'>
          York, England, UK
        </option>
        <option value='{"lat":"47.376","lon":"8.541"}'>
          Zurich, Switzerland
        </option>
      </select>
    </div>
  );
};
export default DropDown;
