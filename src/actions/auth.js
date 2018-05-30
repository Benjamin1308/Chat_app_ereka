import {
  LOGIN_FAIL,
  LOGIN_PENDING,
  LOGIN_SUCCESS,
  SIGN_UP_PENDING,
  SIGN_UP_REQ,
  SIGN_UP_FAIL,
  LOGIN_REQUEST,
  LOG_OUT,
} from './actionTypes';

export const loginPending = () => ({ type: LOGIN_PENDING });

export const loginSuccess = (token, username) => ({
  type: LOGIN_SUCCESS,
  payload: { token, username },
});

export const requestLogin = (email, password) => ({
  type: LOGIN_REQUEST,
  payload: {
    email,
    password,
  },
});

export const loginFail = errMsg => ({ type: LOGIN_FAIL, payload: errMsg });

export const signupFail = errMsg => ({ type: SIGN_UP_FAIL, payload: errMsg });

export const signupPending = () => ({ type: SIGN_UP_PENDING });

export const requestSignup = (email, password) => ({
  type: SIGN_UP_REQ,
  payload: {
    email,
    password,
  },
});

export const logout = () => ({
  type: LOG_OUT,
});
