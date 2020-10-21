import React from 'react';

import './style.css';

const ForecastItem = ({ day, temp, description, icon }) => {
  return (
    <div className="item-forecast-week">
      <p className="forecast-day">{day}</p>
      {icon && <img className="forecast-icon" alt={description} title={description} src={icon} />}
      <p className="forecast-temperature">
        <span className="degree-t">{temp}</span>
        <span className="degree-icon">°C</span>
      </p>
    </div>
  );
};

export default ForecastItem;
