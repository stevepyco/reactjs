import * as ROUTES from './routes';
import * as ACTION_TYPES from './actionTypes';
import * as MESSAGES from './messages';
import * as ENDPOINTS from './endpoints';

export const API_URL = 'https://api.giphy.com';
export const API_KEY = 'UrTVsJZ1hL1bJQoZQn6GF2fyG99RFLCo';
export const API_PREFIX = 'v1';
export const API_BASE_URL = `${API_URL}/${API_PREFIX}`;

export const API_GENERRAL_HEADERS = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};
export const API_LOADING_SUB_FIX = {
  BEGIN: 'BEGIN',
  SUCCESS: 'SUCCESS',
  FAILURE: 'FAILURE',
}
export const PIN_STATUS = {
  NORMAL: '',
  SUCCESS: 'success',
  FAILED: 'failed',
};

export const GIPHY_DATA_OFFSET = 20;
export const GIPHY_IMAGE_WEBP = 'preview_webp';
export const GIPHY_IMAGE_JPG = '480w_still';
export const GIPHY_IMAGE_FULL = 'downsized';

export {
  ROUTES,
  ENDPOINTS,
  ACTION_TYPES,
  MESSAGES
};
