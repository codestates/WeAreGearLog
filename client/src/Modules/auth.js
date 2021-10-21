import { createAction, handleActions } from 'redux-actions';
import { createRequestActionTypes } from '../lib/createRequestSaga';
import { takeLatest } from 'redux-saga/effects';
import createRequestSaga from '../lib/createRequestSaga';
import * as authAPI from '../lib/api/auth';
import produce from 'immer';

const CHANGE_FIELD = 'auth/CHANGE_FIELD';
const INITIALIZE_FORM = 'auth/INITIALIZE_FORM';

const [REGISTER, REGISTER_SUCCESS, REGISTER_FAILURE] = //타입이 반복되어 배열로 비교분해 했다
  createRequestActionTypes('auth/REGISTER');

const [LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE] =
  createRequestActionTypes('auth/REGISTER');

export const changeField = createAction(
  CHANGE_FIELD,
  ({ form, key, value }) => ({
    form, //회원가입 /로그인
    key, // email,username, password,passC
    value,
  }),
);
//create saga

const registerSaga = createRequestSaga(REGISTER, authAPI.register);
const loginSaga = createRequestSaga(LOGIN, authAPI.login);

export function* authSaga() {
  yield takeLatest(REGISTER, registerSaga);
  yield takeLatest(LOGIN, loginSaga);
}

// 초기 상태값
export const initializeForm = createAction(INITIALIZE_FORM, (form) => {
  return form;
});

export const register = createAction(
  REGISTER,
  ({ email, username, password }) => ({
    email,
    username,
    password,
  }),
);

export const login = createAction(LOGIN, ({ email, password }) => ({
  email,
  password,
}));

const initialState = {
  login: {
    email: '',
    password: '',
  },
  register: {
    email: '',
    username: '',
    password: '',
    passwordConfirm: '',
  },
  auth: null,
  authError: null,
};

const auth = handleActions(
  {
    [CHANGE_FIELD]: (state, { payload: { form, key, value } }) =>
      produce(state, (draft) => {
        draft[form][key] = value; //예 state.register.username을 바꾼다
      }),
    [INITIALIZE_FORM]: (state, { payload: form }) => ({
      ...state,
      [form]: initialState[form],
      authError: null, //폼전환시 회원인증
    }),
    [REGISTER_SUCCESS]: (state, { payload: auth }) => ({
      ...state,
      authError: null,
      auth,
    }),
    [REGISTER_FAILURE]: (state, { payload: error }) => ({
      ...state,
      authError: error,
    }),
    [LOGIN_SUCCESS]: (state, { payload: auth }) => ({
      ...state,
      authError: null,
      auth,
    }),
    [LOGIN_FAILURE]: (state, { payload: error }) => ({
      ...state,
      authERROR: error,
    }),
  },
  initialState,
);

export default auth;
