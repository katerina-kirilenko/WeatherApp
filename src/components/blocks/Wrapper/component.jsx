import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ForecastToday from '../ForecastToday';
import ForecastWeek from '../ForecastWeek';
import ControlPanel from '../ControlPanel';
import { usePosition } from '@/hooks/usePosition';
import { setCoords } from '@/actions';
import { getSelectedService } from '@/selectors';

import './style.css';

const Wrapper = () => {
  const selectedServiceId = useSelector(getSelectedService);
  const { latitude, longitude } = usePosition();
  const dispatch = useDispatch();

  useEffect(() => {
    if (latitude && longitude) {
      dispatch(setCoords({ latitude, longitude }));
    }
  }, [dispatch, latitude, longitude, selectedServiceId]);

  return (
    <div className="wrapper">
      <ControlPanel />
      <ForecastToday />
      <ForecastWeek />
    </div>
  );
};

export default Wrapper;
