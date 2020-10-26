import React from 'react';
import { useSelector } from 'react-redux';
import { getForecast } from '@/selectors';
import ForecastItem from '@/components/blocks/ForecastItem';
import ErrorAlert from '../ErrorAlert/component';
import Spinner from '../Spinner';

import './style.css';

const ForecastWeek = () => {
  const { data, isLoading, error } = useSelector(getForecast);
  const hasData = !(isLoading || error);

  const forecastItems = data.map((item) => {
    return <ForecastItem key={item.day} data={item} />;
  });

  return (
    <section className="forecast-week">
      {error && <ErrorAlert errorText={error} />}
      {isLoading && <Spinner />}
      {hasData && forecastItems}
    </section>
  );
};

export default ForecastWeek;
