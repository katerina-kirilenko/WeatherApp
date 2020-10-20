import React, { useEffect} from 'react';
import { useDispatch } from 'react-redux';
import ForecastToday from '../ForecastToday';
import ForecastWeek from '../ForecastWeek';
import ControlPanel from '../ControlPanel';
import { usePosition } from '@/hooks/usePosition';
import { loadWeather } from '@/actions';

import './style.css';

const Wrapper = () => {
  const { latitude, longitude } = usePosition();
  const dispatch = useDispatch();

  useEffect(() => {
    if (latitude && longitude) {
      dispatch(loadWeather({ latitude, longitude }));
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
