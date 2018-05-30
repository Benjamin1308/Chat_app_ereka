import {
  LOGIN_PENDING,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  SIGN_UP_PENDING,
  SIGN_UP_FAIL,
  LOG_OUT,
} from '../actions/actionTypes';

const initialState = {
  isLoggingIn: false,
  token: '',
  username: '',
  error: '',
};

const auth = (state = initialState, action) => {
  const { payload } = action;
  switch (action.type) {
    case LOGIN_PENDING:
      return { ...state, isLoggingIn: true };
    case LOGIN_SUCCESS:
      return {
        isLoggingIn: false,
        token: payload.token,
        username: payload.username,
      };
    case LOGIN_FAIL:
      return { ...state, error: payload, isLoggingIn: false };
    case SIGN_UP_FAIL:
      return { ...state, error: payload, isLoggingIn: false };
    case SIGN_UP_PENDING:
      return { ...state, isLoggingIn: true };
    case LOG_OUT:
      return {
        ...state,
        token: '',
        username: '',
        error: '',
      };
    default:
      return state;
  }
};

export default auth;
