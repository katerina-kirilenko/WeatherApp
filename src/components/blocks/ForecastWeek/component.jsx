import React from 'react';

import ForecastItem from '@/components/blocks/ForecastItem';
import './style.css';

const ForecastWeek = () => {
  return (
    <section className="forecast-week">
      <ForecastItem />
      <ForecastItem />
      <ForecastItem />
      <ForecastItem />
      <ForecastItem />
    </section>
  );
};

export default ForecastWeek;
