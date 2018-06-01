import {
  ACTIVE_CHAT_ADDED,
  ACTIVE_CHAT_CHANGED,
  ACTIVE_CHAT_REMOVED,
  PENDING_CHAT_ADDED,
  PENDING_CHAT_REMOVED,
  MSG_ADDED,
  MSG_REMOVED,
} from '../actions/actionTypes';

const initialState = {
  activeChats: [],
  chats: [],
  pendingChats: [],
};

const chats = (state = initialState, action) => {
  const { payload } = action;
  switch (action.type) {
    case ACTIVE_CHAT_ADDED:
      return { ...state, activeChats: [...state.activeChats, payload] };
    case ACTIVE_CHAT_CHANGED:
      return {
        ...state,
        activeChats: [...state.activeChats.filter(chat => chat.id !== payload.id), action.payload],
      };
    case ACTIVE_CHAT_REMOVED:
      return {
        ...state,
        activeChats: state.activeChats.filter(chat => chat.id !== payload.id),
      };
    case PENDING_CHAT_ADDED:
      return { ...state, pendingChats: [...state.pendingChats, payload] };
    case PENDING_CHAT_REMOVED:
      return {
        ...state,
        pendingChats: state.pendingChats.filter(chat => chat.id !== payload.id),
      };
    case MSG_ADDED:
      console.log(state.chats);
      return {
        ...state,
        chats: [...state.chats, payload],
      };
    case MSG_REMOVED:
      return {
        ...state,
        chats: state.chats.filter(chat => chat.id !== payload.id),
      };
    default:
      return state;
  }
};

export default chats;
