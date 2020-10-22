import { createSelector } from 'reselect';

const getState = (state) => state;

const getWeather = createSelector(getState, ({ weather }) => {
  return weather;
});

const getForecast = createSelector(getState, ({ forecast }) => {
  return forecast;
});

const getCoordsAndService = createSelector(getState, ({ coords, selectedService }) => {
  return {
    ...coords,
    selectedService,
  };
});

export { getWeather, getForecast, getCoordsAndService };
