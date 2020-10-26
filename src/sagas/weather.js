import { takeEvery, put, call, select } from 'redux-saga/effects';
import { FETCH_COORDS, WEATHER, FORECAST, COORDS_GEOCODING, CITY_GEOCODING } from '@/constants';
import {
  requestDataWeather,
  responseDataWeather,
  failedDataWeather,
  requestDataForecast,
  responseDataForecast,
  failedDataForecast,
  setCity,
  setCoords,
} from '@/actions';
import getWeather from '@/api/fetchWeather';
import { getCityName, getCityCoordinates } from '@/api/geocoding';
import { getCoordsAndService, getCoordinates } from '@/selectors';

function* loadWeather() {
  try {
    yield put(requestDataWeather());

    const { latitude, longitude, selectedService } = yield select(getCoordsAndService);
    const weatherToday = yield call(getWeather, { latitude, longitude, selectedService }, WEATHER);

    yield put(responseDataWeather(weatherToday));
  } catch (error) {
    yield put(failedDataWeather(`Something went wrong ${error}`));
  }
}

function* loadForecast() {
  try {
    yield put(requestDataForecast());

    const { latitude, longitude, selectedService } = yield select(getCoordsAndService);
    const forecast = yield call(getWeather, { latitude, longitude, selectedService }, FORECAST);

    yield put(responseDataForecast(forecast));
  } catch (error) {
    yield put(failedDataForecast(`Something went wrong ${error}`));
  }
}

function* getCityWorker() {
  try {
    const { latitude, longitude } = yield select(getCoordinates);
    const name = yield call(getCityName, { latitude, longitude });

    yield put(setCity(name));
  } catch (error) {
    console.log('An error has occurred', error);
  }
}

function* getCoords({ payload }) {
  try {
    const { latitude, longitude } = yield call(getCityCoordinates, payload);

    yield put(setCoords({ latitude, longitude }));
  } catch (error) {
    console.log('An error has occurred', error);
  }
}

export default function* () {
  yield takeEvery(FETCH_COORDS, loadWeather);
  yield takeEvery(FETCH_COORDS, loadForecast);
  yield takeEvery(COORDS_GEOCODING, getCityWorker);
  yield takeEvery(CITY_GEOCODING, getCoords);
}
