import { all } from 'redux-saga/effects';
import watchLogin from './loginSaga';
import watchSignup from './signupSaga';
import { watchUsers } from './userSaga';

export default function* rootSaga() {
  yield all([watchLogin(), watchSignup(), watchUsers()]);
}
