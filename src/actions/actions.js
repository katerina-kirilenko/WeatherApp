import {
  FETCH_COORDS,
  DATA_WEATHER_REQUEST,
  DATA_WEATHER_RESPONSE,
  DATA_WEATHER_FAILED,
  DATA_FORECAST_REQUEST,
  DATA_FORECAST_RESPONSE,
  DATA_FORECAST_FAILED,
} from '@/constants';

export const requestDataWeather = () => {
  return {
    type: DATA_WEATHER_REQUEST,
  };
};

export const responseDataWeather = (dataWeather) => {
  return {
    type: DATA_WEATHER_RESPONSE,
    payload: dataWeather,
  };
};

export const failedDataWeather = (text) => {
  return {
    type: DATA_WEATHER_FAILED,
    payload: text,
  };
};

export const requestDataForecast = () => {
  return {
    type: DATA_FORECAST_REQUEST,
  };
};

export const responseDataForecast = (dataForecast) => {
  return {
    type: DATA_FORECAST_RESPONSE,
    payload: dataForecast,
  };
};

export const failedDataForecast = (text) => {
  return {
    type: DATA_FORECAST_FAILED,
    payload: text,
  };
};

export const putCoords = (coords) => {
  return {
    type: FETCH_COORDS,
    payload: coords,
  };
};
