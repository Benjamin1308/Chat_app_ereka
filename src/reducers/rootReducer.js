import { combineReducers } from "redux";
// import { persistReducer } from 'redux-persist';

import login from "./login";
import onboard from "./onboard";

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
  login,
  onboard
});

export default rootReducer;

// export default persistReducer(rootConfig, rootReducer);
