import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk'
import { createPromise } from 'redux-promise-middleware'
import { persistStore, persistReducer } from 'redux-persist';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
import { API_LOADING_SUB_FIX } from 'constants';
import { rootPersistConfig } from 'config';
import rootReducer from '../reducers';

const history = createBrowserHistory();
const persistedReducer = persistReducer(rootPersistConfig, rootReducer(history));

/*  Define middleware */
const middleware = [
  thunkMiddleware,
  routerMiddleware(history),
  createPromise({
    promiseTypeSuffixes: [
      API_LOADING_SUB_FIX.BEGIN,
      API_LOADING_SUB_FIX.SUCCESS,
      API_LOADING_SUB_FIX.FAILURE,
    ],
  })
];

const composeEnhancers = composeWithDevTools({
  // Specify name here, actionsBlacklist, actionsCreators and other options if needed
});

export default (initialState) => {
  /* Create store */
  const store = createStore(
    persistedReducer,
    initialState,
    composeEnhancers(
      applyMiddleware(...middleware)
      // other store enhancers if any
    )
  );

  /* Create persistor */
  const persistor = persistStore(store);

  return { store, persistor, history };
}
