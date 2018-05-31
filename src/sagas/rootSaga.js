import { all } from 'redux-saga/effects';
import watchLogin from './loginSaga';
import watchSignup from './signupSaga';
import { watchUsers } from './userSaga';
import { watchActiveChat, watchPendingChat } from './chatSaga';
import watchMsg from './messageSaga';

export default function* rootSaga() {
  yield all([
    watchLogin(),
    watchSignup(),
    watchUsers(),
    watchActiveChat(),
    watchPendingChat(),
    watchMsg(),
  ]);
}
