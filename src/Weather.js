import React from "react";
import BigWeather from "./BigWeather";
import Search from "./Search";
import Current from "./Current";
import Forecast from "./Forecast";
import image from "./wintery.gif";
import "./styles.css";

export default function Weather() {
  return (
    <div className="container">
      <div className="weather-app" style={{ backgroundImage: `url(${image})` }}>
        <div className="row">
          <div className="col-1"></div>
          <div className="col-4">
            <BigWeather />
          </div>
          <div className="col-2"></div>
          <div className="col-4">
            <Search />
            <br />
            <Current />
          </div>
          <div className="col-1"></div>
        </div>
        <br />
        <br />
        <Forecast />
      </div>
      <a href="https://github.com/triinliis/react-weather-app" target="_blank" rel="noreferrer" class="below">Open-source code</a>
      <span class="below-name"> by Triin Liis Kuhlberg</span>
    </div>  
  );
}
