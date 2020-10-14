import React from "react";

import ItemForecastWeek from "../ItemForecastWeek";
import "./style.css";

const ForecastWeek = () => {
  return (
    <section className='forecast-week'>
      <ItemForecastWeek />
      <ItemForecastWeek />
      <ItemForecastWeek />
      <ItemForecastWeek />
      <ItemForecastWeek />
    </section>
  );
};

export default ForecastWeek;