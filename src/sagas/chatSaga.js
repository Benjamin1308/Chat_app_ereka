import { take, put, call, fork, cancelled, cancel, takeLatest } from 'redux-saga/effects';
import { eventChannel } from 'redux-saga';
import firebase from 'firebase';
import { firestore } from '../constants/firebase';

import {
  ACTIVE_CHAT_ADDED,
  ACTIVE_CHAT_CHANGED,
  ACTIVE_CHAT_REQUEST,
  STOP_ACTIVE_CHAT_REQUEST,
  ACTIVE_CHAT_REMOVED,
  PENDING_CHAT_ADDED,
  PENDING_CHAT_REMOVED,
  PENDING_CHAT_REQUEST,
  STOP_PENDING_CHAT_REQUEST,
} from '../actions/actionTypes';

// Active chat

function createFetchActiveChatsChannel() {
  return eventChannel((emit) => {
    const { uid } = firebase.auth().currentUser || '';
    const usersRef = firestore.collection(`activeChats/${uid}/chats`);

    const unsubscribe = usersRef.onSnapshot((snapshots) => {
      snapshots.docChanges().forEach((change) => {
        if (change.doc.id !== uid) {
          if (change.type === 'added') {
            emit({
              type: ACTIVE_CHAT_ADDED,
              payload: { ...change.doc.data(), id: change.doc.id },
            });
          } else if (change.type === 'modified') {
            emit({
              type: ACTIVE_CHAT_CHANGED,

              payload: { ...change.doc.data(), id: change.doc.id },
            });
          } else if (change.type === 'removed') {
            emit({
              type: ACTIVE_CHAT_REMOVED,

              payload: { ...change.doc.data(), id: change.doc.id },
            });
          }
        }
      });
    });

    return unsubscribe;
  });
}

function* watchActiveChatsChannel() {
  const activeChatsChannel = yield call(createFetchActiveChatsChannel);
  try {
    while (true) {
      const action = yield take(activeChatsChannel);
      yield put(action);
    }
  } finally {
    if (yield cancelled()) {
      activeChatsChannel.close();
    }
  }
}

function* watchActiveChat(action) {
  const task = yield fork(watchActiveChatsChannel);
  try {
    yield take(STOP_ACTIVE_CHAT_REQUEST);
    yield cancel(task);
  } finally {
    yield cancel(task);
  }
}

export function* watchFetchActiveChatRequest() {
  yield takeLatest(ACTIVE_CHAT_REQUEST, watchActiveChat);
}
// Pending Chat

function createFetchPendingChatsChannel() {
  return eventChannel((emit) => {
    const { uid } = firebase.auth().currentUser || '';
    const usersRef = firestore.collection(`pendingChats/${uid}/chats`);

    const unsubscribe = usersRef.onSnapshot((snapshots) => {
      snapshots.docChanges().forEach((change) => {
        if (change.type === 'added') {
          emit({
            type: PENDING_CHAT_ADDED,
            payload: { ...change.doc.data(), id: change.doc.id },
          });
        } else if (change.type === 'removed') {
          emit({
            type: PENDING_CHAT_REMOVED,
            payload: { ...change.doc.data(), id: change.doc.id },
          });
        }
      });
    });

    return unsubscribe;
  });
}

function* watchPendingChatsChannel() {
  const pendingChatsChannel = yield call(createFetchPendingChatsChannel);
  try {
    while (true) {
      const action = yield take(pendingChatsChannel);
      yield put(action);
    }
  } finally {
    if (yield cancelled()) {
      pendingChatsChannel.close();
    }
  }
}

function* watchPendingChat(action) {
  const task = yield fork(watchPendingChatsChannel);
  try {
    yield take(STOP_PENDING_CHAT_REQUEST);
    yield cancel(task);
  } finally {
    yield cancel(task);
  }
}

export function* watchFetchPendingChatRequest() {
  yield takeLatest(PENDING_CHAT_REQUEST, watchPendingChat);
}
