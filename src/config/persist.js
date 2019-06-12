import storage from 'redux-persist/lib/storage';

const rootPersistConfig = {
  key: 'root',
  storage,
  debug: process.env.NODE_ENV === 'development',
};

export default rootPersistConfig;
