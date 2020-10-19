import React from 'react';

import SearchPanel from '@/components/controls/SearchPanel';
import WeatherServiceSwitch from '@/components/controls/WeatherServiceSwitch';

import './style.css';

const ControlPanel = () => {
  return (
    <section className="control-panel">
      <WeatherServiceSwitch />
      <SearchPanel />
    </section>
  );
};

export default ControlPanel;
