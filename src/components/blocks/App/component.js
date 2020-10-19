import React from 'react';
import { Provider } from 'react-redux';
import { store } from '@/store';
import Wrapper from '@/components/blocks/Wrapper';
import './style.css';

const App = () => {
  return (
    <div className="app">
      <Provider store={store}>
        <Wrapper />
      </Provider>
    </div>
  );
};

export default App;
