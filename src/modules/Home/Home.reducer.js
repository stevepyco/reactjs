import { PIN_STATUS } from 'constants';
import { reducerGenerator } from 'utils/reducer.util';

import getGiphyTrendingData from './actions/getGiphyTrendingData.action';

const reducerName = 'home';

const initialState = {
  data: [],
  totalCount: 0,
  page: 0,
  count: 0,
  offset: 0,
  loading: false,
  status: PIN_STATUS.NORMAL,
};

const { actions, reducer } = reducerGenerator(
  {
    getGiphyTrendingData,
  },
  initialState
);

export { actions, initialState, reducerName };
export default reducer;
