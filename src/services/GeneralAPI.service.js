import { API_BASE_URL, API_GENERRAL_HEADERS, API_KEY, GIPHY_DATA_OFFSET, ENDPOINTS } from 'constants';
import * as API from 'services/API.service';

const baseAPI = API.init({
  baseURL: API_BASE_URL,
  headers: API_GENERRAL_HEADERS
});

class DataService {
  constructor() {
    this.instance = baseAPI;
    this.limit = GIPHY_DATA_OFFSET;
    this.offset = GIPHY_DATA_OFFSET;
  }

  set dataLimit(limit) {
    this.limit = limit;
  }

  set dataOffset(offset) {
    this.offset = offset;
  }
  
  /**
   * Fetch Giphy Trending Data
   */
  fetchTrendingGifs() {
    return this.instance.get(`${API_BASE_URL}${ENDPOINTS.TRENDING_GIFS}`, {
      params: {
        api_key: API_KEY,
        limit: this.limit,
        offset: this.offset
      }
    });
  }
}

export default DataService;
export {
  baseAPI
};
