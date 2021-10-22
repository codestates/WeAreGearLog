import auth from './auth';
import { combineReducers } from 'redux';
import loading from './loading';
import { all } from 'redux-saga/effects';
import { authSaga } from './auth';
import user from './user';
import { userSaga } from './user';

const rootReducer = combineReducers({ auth, loading, user });

export function* rootSaga() {
  yield all([authSaga(), userSaga()]);
}

export default rootReducer;
