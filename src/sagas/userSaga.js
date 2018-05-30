import { take, put, call, fork, cancelled, cancel } from 'redux-saga/effects';
import { eventChannel } from 'redux-saga';
import firebase from 'firebase';
import { USER_ADDED, USERS_REQUEST, STOP_USERS_REQUEST } from '../actions/actionTypes';

function createFetchUsersChannel() {
  return eventChannel((emit) => {
    const usersRef = firebase.database().ref('users');

    const friendAddHandler = (childSnapshot) => {
      emit({ type: USER_ADDED, payload: { ...childSnapshot.val(), id: childSnapshot.key } });
    };

    const addListener = usersRef.on('child_added', friendAddHandler);

    const unsubscribe = () => {
      usersRef.off('child_added', addListener);
    };

    return unsubscribe;
  });
}

function* watchUsersChannel() {
  const friendsChannel = yield call(createFetchUsersChannel);
  try {
    while (true) {
      const action = yield take(friendsChannel);
      yield put(action);
    }
  } finally {
    if (yield cancelled()) {
      friendsChannel.close();
    }
  }
}

export function* watchUsers() {
  yield take(USERS_REQUEST);
  const task = yield fork(watchUsersChannel);
  yield take(STOP_USERS_REQUEST);
  yield cancel(task);
}
