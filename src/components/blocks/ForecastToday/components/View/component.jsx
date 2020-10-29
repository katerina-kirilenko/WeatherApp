import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

const View = ({ data: { temp, icon, description, feelsLike, wind, humidity } }) => {
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
            <p>Feels like:</p>
            <p>
              <span>{feelsLike}</span>
              <span> °C</span>
            </p>
          </div>
        )}
        {wind && (
          <div>
            <p>Wind:</p>
            <p>
              <span>{wind}</span>
              <span> m/s</span>
            </p>
          </div>
        )}
        {humidity && (
          <div>
            <p>Humidity:</p>
            <p>
              <span>{humidity}</span>
              <span>%</span>
            </p>
          </div>
        )}
      </div>
    </>
  );
};

View.propTypes = {
  data: PropTypes.shape({
    city: PropTypes.string,
    temp: PropTypes.number,
    description: PropTypes.string,
    icon: PropTypes.string,
    feelsLike: PropTypes.number,
    wind: PropTypes.number,
    humidity: PropTypes.number,
  }).isRequired,
};

export default View;
