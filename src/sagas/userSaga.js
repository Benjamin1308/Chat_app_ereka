import { take, put, call, fork, cancelled, cancel } from 'redux-saga/effects';
import { eventChannel } from 'redux-saga';
import firebase from 'firebase';
import { firestore } from '../constants/firebase';

import {
  USER_ADDED,
  USER_CHANGED,
  USERS_REQUEST,
  STOP_USERS_REQUEST,
  USER_REMOVED,
} from '../actions/actionTypes';

function createFetchUsersChannel() {
  return eventChannel((emit) => {
    const usersRef = firestore.collection('users');

    const { uid } = firebase.auth().currentUser;

    const unsubscribe = usersRef.onSnapshot((snapshots) => {
      snapshots.docChanges().forEach((change) => {
        console.log(change.doc.id);
        if (change.doc.id !== uid) {
          if (change.type === 'added') {
            emit({
              type: USER_ADDED,

              payload: { ...change.doc.data(), id: change.doc.id },
            });
          } else if (change.type === 'modified') {
            emit({
              type: USER_CHANGED,

              payload: { ...change.doc.data(), id: change.doc.id },
            });
          } else if (change.type === 'removed') {
            emit({
              type: USER_REMOVED,

              payload: { ...change.doc.data(), id: change.doc.id },
            });
          }
        }
      });
    });

    return unsubscribe;
  });
}

function* watchUsersChannel() {
  const usersChannel = yield call(createFetchUsersChannel);
  try {
    while (true) {
      const action = yield take(usersChannel);
      yield put(action);
    }
  } finally {
    if (yield cancelled()) {
      usersChannel.close();
    }
  }
}

export function* watchUsers() {
  yield take(USERS_REQUEST);
  const task = yield fork(watchUsersChannel);
  yield take(STOP_USERS_REQUEST);
  yield cancel(task);
}
