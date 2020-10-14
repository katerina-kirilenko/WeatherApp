import React from "react";

import "./style.css";

const WeatherServiceSwitch = () => {
  return (
    <div className="service-switch">
      <button id="weatherbit" className="button switch-item active"></button>
      <button id="openweather" className="button switch-item"></button>
    </div>
  );
};

export default WeatherServiceSwitch;