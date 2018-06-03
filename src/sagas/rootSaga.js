import { all } from 'redux-saga/effects';
import watchLogin from './loginSaga';
import watchSignup from './signupSaga';
import { watchUsers } from './userSaga';
import { watchFetchActiveChatRequest, watchFetchPendingChatRequest } from './chatSaga';
import watchFetchChatMessageRequest from './messageSaga';

export default function* rootSaga() {
  yield all([
    watchLogin(),
    watchSignup(),
    watchUsers(),
    watchFetchActiveChatRequest(),
    watchFetchPendingChatRequest(),
    watchFetchChatMessageRequest(),
  ]);
}
