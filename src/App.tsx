import React from 'react';
import { Provider } from 'react-redux';

import store from './store/store';

import './App.scss';
import Statistics from './pages/Statistics/Statistics';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Statistics />
      </div>
    </Provider>

  );
}

export default App;