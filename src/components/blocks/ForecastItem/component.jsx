import React from 'react';

import './style.css';

const ForecastItem = () => {
  return (
    <div className="item-forecast-week">
      <p className="forecast-day">Friday</p>
      <img
        className="forecast-icon"
        alt="forecast-icon"
        title="forecast"
        src="https://openweathermap.org/img/wn/10d@2x.png"
      />
      <p className="forecast-temperature">
        <span className="degree-t">+9</span>
        <span className="degree-icon">°C</span>
      </p>
    </div>
  );
};

export default ForecastItem;
