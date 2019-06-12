import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import configureStore from './store/configureStore';

import RootRouter from './RootRouter';

import 'assets/scss/main.scss';

const { store, persistor, history } = configureStore();

const App = () => (
  <Provider store={store}>
    <PersistGate persistor={persistor} loading={null}>
      <RootRouter history={history}/>
    </PersistGate>
  </Provider>
);

export default App;
