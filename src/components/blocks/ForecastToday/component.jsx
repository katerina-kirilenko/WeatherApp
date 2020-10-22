import React from 'react';
import { useSelector } from 'react-redux';
import { getWeather } from '@/selectors';
import Spinner from '@/components/blocks/Spinner';
import ErrorAlert from '../ErrorAlert/component';
import View from './components/View';

import './style.css';

const ForecastToday = () => {
  const { data, isLoading, error } = useSelector(getWeather);

  const hasData = !(isLoading || error);

  return (
    <section className="forecast-today">
      {error && <ErrorAlert errorText={error} />}
      {isLoading && <Spinner />}
      {hasData && <View {...data} />}
    </section>
  );
};

export default ForecastToday;
