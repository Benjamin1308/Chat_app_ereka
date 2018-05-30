import { USER_ADDED, USER_CHANGED, USER_REMOVED } from '../actions/actionTypes';

const users = (state = [], action) => {
  switch (action.type) {
    case USER_ADDED:
      return [...state, action.payload];
    case USER_CHANGED:
      return [...state, action.payload];
    case USER_REMOVED:
      return state.filter(user => user.id !== action.payload.id);
    default:
      return state;
  }
};

export default users;
