import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';

import saga from '@/sagas';
import weatherReducer from '@/reducer';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(weatherReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(saga);

export { store };
