import { createSelector } from 'reselect';

const getState = (state) => state;

export const getCoordsAndService = createSelector(getState, ({ coords, selectedService }) => {
  return {
    ...coords,
    selectedService,
  };
});
