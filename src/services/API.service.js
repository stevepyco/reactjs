import axios from 'axios';

const APIContainer = [];

const init = (config) => {
  const instance = axios.create(config);
  APIContainer.push(instance);
  return instance;
};

export {
  init
}