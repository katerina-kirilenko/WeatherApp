import { takeEvery, put, call, select } from 'redux-saga/effects';
import { WEATHER, FORECAST, HANDLE_WEATHER_REQUESTS } from '@/constants';
import {
  requestDataWeather,
  responseDataWeather,
  failedDataWeather,
  requestDataForecast,
  responseDataForecast,
  failedDataForecast,
  setCity,
} from '@/actions';
import getWeather from '@/api/fetchWeather';
import { getCityName, getCityCoordinates } from '@/api/geocoding';
import { getCoordinates, getCity, getSelectedService } from '@/selectors';

function* loadWeather(latitude, longitude, selectedService) {
  try {
    yield put(requestDataWeather());

    const weatherToday = yield call(getWeather, { latitude, longitude, selectedService }, WEATHER);

    yield put(responseDataWeather(weatherToday));
  } catch (error) {
    yield put(failedDataWeather(`Something went wrong ${error}`));
  }
}

function* loadForecast(latitude, longitude, selectedService) {
  try {
    yield put(requestDataForecast());

    const forecast = yield call(getWeather, { latitude, longitude, selectedService }, FORECAST);

    yield put(responseDataForecast(forecast));
  } catch (error) {
    yield put(failedDataForecast(`Something went wrong ${error}`));
  }
}

function* handlerWeatherRequests() {
  try {
    let coordinates = { lat: null, lng: null };
    const { latitude, longitude } = yield select(getCoordinates);
    const cityName = yield select(getCity);
    const selectedService = yield select(getSelectedService);

    if (latitude && longitude && !cityName) {
      coordinates = { lat: latitude, lng: longitude };

      const name = yield call(getCityName, { latitude, longitude });
      yield put(setCity(name));
    } else if (cityName) {
      const coordsByCity = yield call(getCityCoordinates, cityName);
      coordinates = { lat: coordsByCity.latitude, lng: coordsByCity.longitude };
    }

    if ((latitude && longitude) || cityName) {
      yield loadWeather(coordinates.lat, coordinates.lng, selectedService);
      yield loadForecast(coordinates.lat, coordinates.lng, selectedService);
    } else {
      console.log('Coordinates not found');
    }
  } catch (error) {
    console.log('An error has occurred', error);
  }
}

export default function* () {
  yield takeEvery(HANDLE_WEATHER_REQUESTS, handlerWeatherRequests);
}
