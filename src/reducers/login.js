import {
  LOGIN_PENDING,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  SIGN_UP_PENDING
} from "../actions/actionTypes";

const login = (
  state = {
    isLoggingIn: false,
    token: "",
    username: ""
  },
  action
) => {
  switch (action.type) {
    case LOGIN_PENDING:
      return { ...state, isLoggingIn: true };
    case LOGIN_SUCCESS:
      return {
        isLoggingIn: false,
        token: action.payload.token,
        username: action.payload.username
      };
    case LOGIN_FAIL:
      return { ...state, isLoggingIn: false };

    case SIGN_UP_PENDING:
      return { ...state, isLoggingIn: true };
    default:
      return state;
  }
};

export default login;
