import React from 'react';

import './style.css';

const ForecastToday = () => {
  return (
    <section className="forecast-today">
      <div className="wrap">
        <div className="temperature-today">
          <span className="degree-t">+12</span>
          <span className="degree-icon">℃</span>
        </div>
        <div className="forecast-title">
          <div className="forecast-icon">
            <img alt="forecast-icon" title="forecast" src="https://openweathermap.org/img/wn/10d@2x.png" />
          </div>
          <p>Moderate rain</p>
        </div>
      </div>
      <div className="forecast-description">
        <div>
          Feels like: <span>9 °C</span>
        </div>
        <div>
          Wind: <span>5.0 m/s</span>
        </div>
        <div>
          Humidity: <span>100%</span>
        </div>
      </div>
    </section>
  );
};

export default ForecastToday;
