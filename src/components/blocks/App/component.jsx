import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';

import { persistor, store } from '@/store';
import Wrapper from '@/components/blocks/Wrapper';
import Spinner from '@/components/blocks/Spinner';

import './style.css';

const App = () => {
  return (
    <div className="app">
      <Provider store={store}>
        <PersistGate loading={<Spinner />} persistor={persistor}>
          <Wrapper />
        </PersistGate>
      </Provider>
    </div>
  );
};

export default App;
