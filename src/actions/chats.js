import {
  ACTIVE_CHAT_REQUEST,
  STOP_ACTIVE_CHAT_REQUEST,
  PENDING_CHAT_REQUEST,
  STOP_PENDING_CHAT_REQUEST,
  MSG_REQUEST,
  STOP_MSG_REQUEST,
} from '../actions/actionTypes';

export const requestActiveChats = () => ({
  type: ACTIVE_CHAT_REQUEST,
});

export const stopRequestActiveChats = () => ({
  type: STOP_ACTIVE_CHAT_REQUEST,
});

export const requestPendingChats = () => ({
  type: PENDING_CHAT_REQUEST,
});

export const stopRequestPendingChats = () => ({
  type: STOP_PENDING_CHAT_REQUEST,
});

export const requestMsg = id => ({
  type: MSG_REQUEST,
  payload: id,
});

export const stopRequestMsg = () => ({
  type: STOP_MSG_REQUEST,
});
