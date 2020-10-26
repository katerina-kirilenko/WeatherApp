import {
  FETCH_COORDS,
  DATA_WEATHER_REQUEST,
  DATA_WEATHER_RESPONSE,
  DATA_WEATHER_FAILED,
  DATA_FORECAST_REQUEST,
  DATA_FORECAST_RESPONSE,
  DATA_FORECAST_FAILED,
  SET_SERVICE,
  SET_CITY,
  CITY_GEOCODING,
  COORDS_GEOCODING,
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

export const setService = (id) => {
  return {
    type: SET_SERVICE,
    payload: id,
  };
};

export const setCity = (name) => {
  return {
    type: SET_CITY,
    payload: name,
  };
};

export const setCoords = (coords) => {
  return {
    type: FETCH_COORDS,
    payload: coords,
  };
};

export const cityGeocoding = (city) => {
  return {
    type: CITY_GEOCODING,
    payload: city,
  };
};

export const coordsGeocoding = () => {
  return {
    type: COORDS_GEOCODING,
  };
};
