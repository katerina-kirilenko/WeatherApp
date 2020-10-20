import React from 'react';

import './style.css';

const ForecastItem = ({ day, temp, icon }) => {
  return (
    <div className="item-forecast-week">
      <p className="forecast-day">{day}</p>
      <img className="forecast-icon" alt="forecast-icon" title="forecast" src={icon} />
      <p className="forecast-temperature">
        <span className="degree-t">{temp}</span>
        <span className="degree-icon">°C</span>
      </p>
    </div>
  );
};

export default ForecastItem;
