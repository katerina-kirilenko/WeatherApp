import React from "react";

import ForecastToday from "../ForecastToday";
import ForecastWeek from "../ForecastWeek";
import ControlPanel from "../ControlPanel";

import "./style.css";

const Wrapper = () => {
  return (
    <div className='wrapper'>
      <ControlPanel />
      <ForecastToday />
      <ForecastWeek />
    </div>
  );
};

export default Wrapper;