import { PUT_DATA_WEATHER, PUT_DATA_FORECAST, LOAD_WEATHER } from '@/constants';

export const putDataWeather = (dataWeather) => {
  return {
    type: PUT_DATA_WEATHER,
    payload: dataWeather,
  };
};

export const putDataForecast = (dataForecast) => {
  return {
    type: PUT_DATA_FORECAST,
    payload: dataForecast,
  };
};

export const loadWeather = (geo) => {
  return {
    type: LOAD_WEATHER,
    payload: geo,
  };
};
