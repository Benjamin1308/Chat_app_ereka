import { take, put, call, fork, cancelled, cancel } from 'redux-saga/effects';
import { eventChannel } from 'redux-saga';
import firebase from 'firebase';
import { firestore } from '../constants/firebase';

import { MSG_ADDED, MSG_REMOVED, MSG_REQUEST, STOP_MSG_REQUEST } from '../actions/actionTypes';

// Active chat

function createFetchMsgChannel(id) {
  return eventChannel((emit) => {
    const { uid } = firebase.auth().currentUser || '';
    const id1 = uid < id ? uid : id;
    const id2 = uid > id ? uid : id;
    console.log(`${id1}-${id2}`);
    const usersRef = firestore.collection(`activeChats/${id1}-${id2}/messages`);

    const unsubscribe = usersRef.onSnapshot((snapshots) => {
      snapshots.docChanges().forEach((change) => {
        console.log(change.doc);
        if (change.type === 'added') {
          emit({
            type: MSG_ADDED,
            payload: { ...change.doc.data(), id: change.doc.id },
          });
        } else if (change.type === 'removed') {
          emit({
            type: MSG_REMOVED,

            payload: { ...change.doc.data(), id: change.doc.id },
          });
        }
      });
    });

    return unsubscribe;
  });
}

function* watchMsgChannel(id) {
  const msgChannel = yield call(createFetchMsgChannel, id);
  try {
    while (true) {
      const action = yield take(msgChannel);
      yield put(action);
    }
  } finally {
    if (yield cancelled()) {
      msgChannel.close();
    }
  }
}

export default function* watchMsg() {
  const { payload } = yield take(MSG_REQUEST);
  console.log(payload);
  const task = yield fork(watchMsgChannel, payload);
  yield take(STOP_MSG_REQUEST);
  yield cancel(task);
}
