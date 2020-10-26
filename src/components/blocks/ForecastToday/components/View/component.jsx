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
    temp: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    feelsLike: PropTypes.number.isRequired,
    wind: PropTypes.number.isRequired,
    humidity: PropTypes.number.isRequired,
  }).isRequired,
};

export default View;
