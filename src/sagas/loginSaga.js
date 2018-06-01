import { takeLatest, put, call } from 'redux-saga/effects';
import firebase from 'firebase';
import { LOGIN_REQUEST } from '../actions/actionTypes';
import { loginPending, loginSuccess, loginFail } from '../actions/auth';

function* authorizeWithFirebase({ payload }) {
  const { email, password } = payload;
  try {
    yield put(loginPending());
    const { user } = yield call(
      // provide context for the function with this syntax
      // in this case, firebase.auth() is the context for signInWithEmailAndPassword
      [firebase.auth(), firebase.auth().signInWithEmailAndPassword],
      email, // arguments are passed seperately
      password,
    );
    // const usernameRef = firebase.database().ref(`users/${user.uid}`);
    // const dataSnapshot = yield call([usernameRef, usernameRef.once], 'value');
    // console.log(dataSnapshot.val());
    yield put(loginSuccess(user.uid));
  } catch (e) {
    yield put(loginFail(e.message));
  }
}

export default function* watchLogin() {
  yield takeLatest(LOGIN_REQUEST, authorizeWithFirebase);
}
