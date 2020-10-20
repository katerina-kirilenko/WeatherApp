import React from 'react';
import { useSelector } from 'react-redux';

import './style.css';

const ForecastToday = () => {
  const { temp, icon, description, feels_like, wind, humidity } = useSelector(
    (state) => state.weather,
  );

  return (
    <section className="forecast-today">
      <div className="wrap">
        <div className="temperature-today">
          <span className="degree-t">{temp}</span>
          <span className="degree-icon">℃</span>
        </div>
        <div className="forecast-title">
          <div className="forecast-icon">
            <img alt={description} title={description} src={icon} />
          </div>
          <p>{description}</p>
        </div>
      </div>
      <div className="forecast-description">
        <div>
          Feels like: <span>{feels_like} °C</span>
        </div>
        <div>
          Wind: <span>{wind} m/s</span>
        </div>
        <div>
          Humidity: <span>{humidity}%</span>
        </div>
      </div>
    </section>
  );
};

export default ForecastToday;
