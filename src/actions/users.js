import { USERS_REQUEST, STOP_USERS_REQUEST } from '../actions/actionTypes';

export const requestUsers = () => ({
  type: USERS_REQUEST,
});

export const stopRequestUsers = () => ({
  type: STOP_USERS_REQUEST,
});
