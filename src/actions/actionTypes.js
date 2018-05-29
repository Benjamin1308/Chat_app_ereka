export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_PENDING = "LOGIN_PENDING";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAIL = "LOGIN_FAIL";
export const ONBOARD = "ONBOARD";
export const SIGN_UP_REQ = "SIGN_UP_REQ";
export const SIGN_UP_PENDING = "SIGN_UP_PENDING";

export const loginPending = () => ({ type: LOGIN_PENDING });

export const loginSuccess = (token, username) => ({
  type: LOGIN_SUCCESS,
  payload: { token, username }
});

export const loginFail = errMsg => ({ type: LOGIN_FAIL, payload: errMsg });

export const signupPending = () => ({ type: SIGN_UP_PENDING });

export const requestSignup = (email, password) => ({
  type: SIGN_UP_REQ,
  payload: {
    email,
    password
  }
});

export const passOnboard = () => ({ type: ONBOARD });
