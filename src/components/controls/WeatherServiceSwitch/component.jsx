import React, { useEffect } from 'react';
import clsx from 'clsx';
import { useSelector, useDispatch } from 'react-redux';
import { getSelectedService } from '@/selectors';
import { weatherServices } from '@/weather-services';
import { setService } from '@/actions';

import './style.css';

const WeatherServiceSwitch = () => {
  const selectedServiceId = useSelector(getSelectedService);
  const dispatch = useDispatch();

  const handleClickService = (event) => {
    dispatch(setService(event.target.id));
  };

  const buttonsServices = weatherServices.map(({ id, ico, bgColor }) => {
    return (
      <button
        key={id}
        id={id}
        title={id}
        className={clsx('button switch-item', { active: id === selectedServiceId })}
        style={{ backgroundImage: `url(${ico})`, backgroundColor: bgColor }}
        onClick={handleClickService}
      />
    );
  });

  return <div className="service-switch">{buttonsServices}</div>;
};

export default WeatherServiceSwitch;
