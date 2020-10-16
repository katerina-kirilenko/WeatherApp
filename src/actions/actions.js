import { PUT_DATA_WEATHER, LOAD_WEATHER } from '@/constants';

export const putDataWeather = (dataWeather) => {
  return {
    type: PUT_DATA_WEATHER,
    payload: dataWeather,
  };
};

export const loadWeather = (geo) => {
  return {
    type: LOAD_WEATHER,
    payload: geo,
  };
};
