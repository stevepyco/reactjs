import { createAction } from 'redux-actions';
import { PIN_STATUS } from 'constants';
import { SITE_GET_TRENDING_DATA } from 'constants/actionTypes'
import DataService from 'services/GeneralAPI.service';
import { showLoading } from 'utils/loading.util';

const service = new DataService();
const getGiphyTrendingDataAPI = () => {
  return service.fetchTrendingGifs();
}

const actionType = SITE_GET_TRENDING_DATA;
const action = createAction(actionType, getGiphyTrendingDataAPI);

const getGiphyTrendingDataSuccess = (state, { payload }) => {
  const {
    data,
    pagination: {
      total_count: totalCount,
      count,
      offset,
    }
  } = payload.data;

  if (payload && payload.data && count <= totalCount) {
    // Update data offset for next request
    service.dataOffset = state.offset + offset;

    return {
      ...state,
      data: [...state.data, ...data],
      totalCount,
      page: state.page + 1,
      count: state.count + count,
      offset: state.offset + offset,
      loading: false,
      status: PIN_STATUS.SUCCESS,
    };
  }

  return {
    ...state,
    loading: false,
    status: PIN_STATUS.NORMAL,
  }
}
const getGiphyTrendingDataFailed = (state) => ({
  ...state,
  loading: false,
  status: PIN_STATUS.FAILED,
});

const caseReducer = {
  [actionType]: {
    BEGIN: showLoading,
    SUCCESS: getGiphyTrendingDataSuccess,
    FAILURE: getGiphyTrendingDataFailed,
  },
};

export const getGiphyTrendingDataAPIWrapper = getGiphyTrendingDataAPI;
export const getGiphyTrendingDataSuccessWrapper = getGiphyTrendingDataSuccess;
export const getGiphyTrendingDataFailedWrapper = getGiphyTrendingDataFailed;

export default {
  action,
  caseReducer
}