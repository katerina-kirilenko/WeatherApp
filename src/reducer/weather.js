import {
  SET_COORDS,
  DATA_WEATHER_REQUEST,
  DATA_WEATHER_RESPONSE,
  DATA_WEATHER_FAILED,
  DATA_FORECAST_REQUEST,
  DATA_FORECAST_RESPONSE,
  DATA_FORECAST_FAILED,
  SET_SERVICE,
  SET_CITY,
} from '@/constants';

const initialState = {
  selectedService: 'openweather',
  coords: {
    latitude: 0,
    longitude: 0,
  },
  weather: {
    data: {},
    isLoading: false,
    error: null,
  },
  forecast: {
    data: [],
    isLoading: false,
    error: null,
  },
  city: '',
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_SERVICE:
      return {
        ...state,
        selectedService: payload,
      };
    case SET_CITY:
      return {
        ...state,
        city: payload,
      };
    case SET_COORDS:
      return {
        ...state,
        coords: {
          ...state.coords,
          ...payload,
        },
      };
    case DATA_WEATHER_REQUEST:
      return {
        ...state,
        weather: {
          ...state.weather,
          isLoading: true,
        },
      };
    case DATA_WEATHER_RESPONSE:
      return {
        ...state,
        weather: {
          ...state.weather,
          data: payload,
          isLoading: false,
        },
      };
    case DATA_WEATHER_FAILED:
      return {
        ...state,
        weather: {
          ...state.weather,
          error: payload,
          isLoading: false,
        },
      };
    case DATA_FORECAST_REQUEST:
      return {
        ...state,
        forecast: {
          ...state.forecast,
          isLoading: true,
        },
      };
    case DATA_FORECAST_RESPONSE:
      return {
        ...state,
        forecast: {
          ...state.forecast,
          data: payload,
          isLoading: false,
        },
      };
    case DATA_FORECAST_FAILED:
      return {
        ...state,
        forecast: {
          ...state.forecast,
          error: payload,
          isLoading: false,
        },
      };
    default:
      return state;
  }
};
