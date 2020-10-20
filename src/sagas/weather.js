import { takeEvery, put, call, select } from 'redux-saga/effects';

import { LOAD_WEATHER } from '@/constants';
import { putDataWeather } from '@/actions';
import { getWeatherToday } from '@/utils/fetchData';
import { getCoordsAndService } from '@/components/selectors/selectors';

function* loadWeather() {
  try {
    const { latitude, longitude, selectedService } = yield select(getCoordsAndService);
    const data = yield call(getWeatherToday, { latitude, longitude, selectedService });
    yield put(putDataWeather(data));
  } catch (error) {
    throw new Error(`Что-то пошло не так: ${error}`);
  }
}

export default function* () {
  yield takeEvery(LOAD_WEATHER, loadWeather);
}
