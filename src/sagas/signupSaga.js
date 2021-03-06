import { takeLatest, put, call } from 'redux-saga/effects';
import firebase from 'firebase';
import { signupPending, loginSuccess, signupFail } from '../actions/auth';
import { SIGN_UP_REQ } from '../actions/actionTypes';

function* signUpWithEmail({ payload }) {
  const { email, password } = payload;
  console.log(email);
  try {
    yield put(signupPending());
    const { user } = yield call(
      // provide context for the function with this syntax
      // in this case, firebase.auth() is the context for signInWithEmailAndPassword
      [firebase.auth(), firebase.auth().createUserWithEmailAndPassword],
      email, // arguments are passed seperately
      password,
    );
    const usernameRef = firebase.database().ref(`users/${user.uid}/name`);
    const dataSnapshot = yield call([usernameRef, usernameRef.once], 'value');
    yield put(loginSuccess(user.uid, dataSnapshot.val()));
  } catch (e) {
    yield put(signupFail(e.message));
  }
}

export default function* watchSignup() {
  yield takeLatest(SIGN_UP_REQ, signUpWithEmail);
}
