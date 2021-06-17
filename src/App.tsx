import React from 'react';
import { Provider } from 'react-redux';

import store from './store/store';

import './App.scss';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        Covid Statistic
      </div>
    </Provider>

  );
}

export default App;