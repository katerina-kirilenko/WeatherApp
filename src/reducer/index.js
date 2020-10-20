import { PUT_DATA_WEATHER, LOAD_WEATHER } from '@/constants';

const initialState = {
  selectedService: 'openweather',
  coords: {
    latitude: 0,
    longitude: 0,
  },
  weather: {},
  city: '',
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case PUT_DATA_WEATHER:
      return {
        ...state,
        weather: payload,
      };
    case LOAD_WEATHER:
      return {
        ...state,
        coords: {
          ...state.coords,
          ...payload,
        },
      };
    default:
      return state;
  }
};
