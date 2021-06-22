import React from 'react';
import { Provider } from 'react-redux';

import store from './store/store';
import Routes from './routes/Routes';

import './App.scss';

const App: React.FC = (): JSX.Element => {
  return (
    <Provider store={store}>
      <div className="App">
        <Routes />
      </div>
    </Provider>
  );
};

export default App;