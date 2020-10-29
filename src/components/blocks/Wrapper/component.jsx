import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import usePosition from '@/hooks/usePosition';
import { setCoords, handleWeatherRequests } from '@/actions';
import ForecastToday from '../ForecastToday';
import ForecastWeek from '../ForecastWeek';
import ControlPanel from '../ControlPanel';

import './style.css';

const Wrapper = () => {
  const dispatch = useDispatch();
  const { latitude, longitude } = usePosition();

  useEffect(() => {
    if (latitude && longitude) {
      dispatch(setCoords({ latitude, longitude }));
      dispatch(handleWeatherRequests());
    }
  }, [dispatch, latitude, longitude]);

  return (
    <div className="wrapper">
      <ControlPanel />
      <ForecastToday />
      <ForecastWeek />
    </div>
  );
};

export default Wrapper;
