import React from 'react';
import './style.css';

const View = ({ temp, icon, description, feelsLike, wind, humidity }) => {
  return (
    <>
      <div className="wrap">
        {temp && (
          <div className="temperature-today">
            <span className="degree-t">{temp}</span>
            <span className="degree-icon">℃</span>
          </div>
        )}
        <div className="forecast-title">
          {icon && (
            <div className="forecast-icon">
              <img alt={description} title={description} src={icon} />
            </div>
          )}
          <p>{description}</p>
        </div>
      </div>
      <div className="forecast-description">
        {feelsLike && (
          <div>
            Feels like: <span>{feelsLike} °C</span>
          </div>
        )}
        {wind && (
          <div>
            Wind: <span>{wind} m/s</span>
          </div>
        )}
        {humidity && (
          <div>
            Humidity: <span>{humidity}%</span>
          </div>
        )}
      </div>
    </>
  );
};

export default View;
