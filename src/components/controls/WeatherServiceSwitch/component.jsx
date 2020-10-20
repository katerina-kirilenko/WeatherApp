import React from 'react';

import { weatherServices } from '@/weather-services';
import './style.css';

const WeatherServiceSwitch = () => {
  const buttonsServices = weatherServices.map((service) => {
    return (
      <button
        key={service.id}
        id={service.id}
        title={service.id}
        className="button switch-item"
        style={{ backgroundImage: `url(${service.ico})`, backgroundColor: service.bgColor }}
      />
    );
  });

  return <div className="service-switch">{buttonsServices}</div>;
};

export default WeatherServiceSwitch;
