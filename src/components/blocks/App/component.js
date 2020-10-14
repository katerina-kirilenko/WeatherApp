import React from 'react';
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import reducer from '@/reducer'
import Wrapper from '@/components/blocks/Wrapper';
import './style.css';

let store = createStore(reducer); 

const App = () => {
  return (
    <div className="app">
      <Provider store={store}>
        <Wrapper />
      </Provider>      
    </div>
  );
}

export default App;
