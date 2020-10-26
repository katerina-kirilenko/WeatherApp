import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import saga from '@/sagas';
import reducer from '@/reducer';

const sagaMiddleware = createSagaMiddleware();

const persistConfig = {
  key: 'root',
  storage,
};

const pReducer = persistReducer(persistConfig, reducer);

export const store = createStore(pReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));
export const persistor = persistStore(store);

sagaMiddleware.run(saga);
