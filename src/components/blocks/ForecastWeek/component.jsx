import React from 'react';
import { useSelector } from 'react-redux';
import { getForecast } from '@/components/selectors/selectors';
import ForecastItem from '@/components/blocks/ForecastItem';
import './style.css';

const ForecastWeek = () => {
  const forecast = useSelector(getForecast);

  const forecastItems = forecast.map((item, idx) => {
    return <ForecastItem key={idx} {...item} />;
  });

  return <section className="forecast-week">{forecastItems}</section>;
};

export default ForecastWeek;
