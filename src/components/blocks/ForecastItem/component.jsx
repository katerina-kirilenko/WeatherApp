import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

const ForecastItem = ({ data: { day, temp, description, icon } }) => {
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

ForecastItem.propTypes = {
  data: PropTypes.shape({
    day: PropTypes.string.isRequired,
    temp: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
  }).isRequired,
};

export default ForecastItem;
