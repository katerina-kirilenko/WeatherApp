import React from 'react';

import { weatherServices } from '../../../weather-services';
import './style.css';

const WeatherServiceSwitch = () => {
  const buttonsServices = weatherServices.map((service) => {
    return (
      <button
        key={service.id}
        id={service.id}
        className="button switch-item"
        style={{ backgroundImage: `url(${service.ico})`, backgroundColor: service.bgColor }}
      ></button>
    );
  });

  return <div className="service-switch">{buttonsServices}</div>;
};

export default WeatherServiceSwitch;
