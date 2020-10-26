import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import usePosition from '@/hooks/usePosition';
import { setCoords, coordsGeocoding } from '@/actions';
import { getCity, getSelectedService } from '@/selectors';
import ForecastToday from '../ForecastToday';
import ForecastWeek from '../ForecastWeek';
import ControlPanel from '../ControlPanel';

import './style.css';

const Wrapper = () => {
  const dispatch = useDispatch();
  const selectedServiceId = useSelector(getSelectedService);
  const city = useSelector(getCity);
  const { latitude, longitude } = usePosition();

  useEffect(() => {
    if (latitude && longitude && !city) {
      dispatch(setCoords({ latitude, longitude }));
      dispatch(coordsGeocoding());
    }
  }, [dispatch, latitude, longitude, selectedServiceId, city]);

  return (
    <div className="wrapper">
      <ControlPanel />
      <ForecastToday />
      <ForecastWeek />
    </div>
  );
};

export default Wrapper;
