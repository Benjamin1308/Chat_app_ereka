import { combineReducers } from 'redux';
// import { persistReducer } from 'redux-persist';

import auth from './auth';
import users from './users';
// const rootConfig = {
//   key: 'root',
//   storage: AsyncStorage,
//   whitelist: ['onboard'],
// };

// const loginConfig = {
//   key: 'login',
//   storage: AsyncStorage,
//   whitelist: ['isLoggedIn'],
// };

const rootReducer = combineReducers({
  auth,
  users,
});

export default rootReducer;

// export default persistReducer(rootConfig, rootReducer);
