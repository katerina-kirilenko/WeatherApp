import { takeEvery, put, call } from 'redux-saga/effects';

import { LOAD_WEATHER } from '@/constants';
import { putDataWeather } from '@/actions';
import { getWeather } from '@/utils/fetchData';

function* loadWeather({ payload }) {
  const data = yield call(getWeather, payload);
  yield put(putDataWeather(data));
}

export default function* () {
  yield takeEvery(LOAD_WEATHER, loadWeather);
}
