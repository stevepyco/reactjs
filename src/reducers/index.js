import {combineReducers} from 'redux';
import {connectRouter} from 'connected-react-router';

import home, {reducerName as HomeReducerName} from 'modules/Home/Home.reducer';

const rootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    [HomeReducerName]: home,
  });

export default rootReducer;
