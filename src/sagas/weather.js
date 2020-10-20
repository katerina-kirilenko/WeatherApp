import { takeEvery, put, call, select } from 'redux-saga/effects';

import { LOAD_WEATHER, WEATHER, FORECAST } from '@/constants';
import { putDataWeather, putDataForecast } from '@/actions';
import { getWeather } from '@/utils/fetchData';
import { getCoordsAndService } from '@/components/selectors/selectors';

function* loadWeather() {
  try {
    const { latitude, longitude, selectedService } = yield select(getCoordsAndService);
    const weatherToday = yield call(getWeather, { latitude, longitude, selectedService }, WEATHER);
    const forecast = yield call(getWeather, { latitude, longitude, selectedService }, FORECAST);

    yield put(putDataWeather(weatherToday));
    yield put(putDataForecast(forecast));
  } catch (error) {
    throw new Error(`Что-то пошло не так: ${error}`);
  }
}

export default function* () {
  yield takeEvery(LOAD_WEATHER, loadWeather);
}
