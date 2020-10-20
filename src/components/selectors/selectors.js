import { createSelector } from 'reselect';

const getState = (state) => state;

export const getWeather = createSelector(getState, ({ weather }) => {
  return {
    ...weather,
  };
});

export const getForecast = createSelector(getState, ({ forecast }) => {
  return forecast;
});

export const getCoordsAndService = createSelector(getState, ({ coords, selectedService }) => {
  return {
    ...coords,
    selectedService,
  };
});
