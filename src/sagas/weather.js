import { takeEvery, put, call, select } from 'redux-saga/effects';
import { FETCH_COORDS, WEATHER, FORECAST } from '@/constants';
import {
  requestDataWeather,
  responseDataWeather,
  failedDataWeather,
  requestDataForecast,
  responseDataForecast,
  failedDataForecast,
} from '@/actions';
import { getWeather } from '@/api/fetchData';
import { getCoordsAndService } from '@/selectors/selectors';

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

export default function* () {
  yield takeEvery(FETCH_COORDS, loadWeather);
  yield takeEvery(FETCH_COORDS, loadForecast);
}
