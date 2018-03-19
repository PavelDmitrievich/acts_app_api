import merge from 'xtend';
import createReducer from './create-reducer';
import {
  REQUEST,
  REQUEST_SUCCESS,
  REQUEST_FAILURE,
  CHANGE_EMAIL,
  CHANGE_PASSWORD,
  LOGOUT
} from '../actions/auth/login-page';

const INITIAL_STATE = {
  isProcessing: false,
  token: null,
  errors: '',
  isLoggedIn: false,
  email: '',
  password: ''
};

export default createReducer({
  [REQUEST]: (state, action) => merge(state, {
    isProcessing: true,
    errors: ''
  }),
  [REQUEST_SUCCESS]: (state, action) => merge(state, {
    isProcessing: false,
    token: action.token,
    isLoggedIn: true,
    email: '',
    password: ''
  }),
  [REQUEST_FAILURE]: (state, action) => merge(state, {
    isProcessing: false,
    errors: action.errors.message
  }),
  [CHANGE_EMAIL]: (state, action) => merge(state, {
    email: action.email,
    errors: ''
  }),
  [CHANGE_PASSWORD]: (state, action) => merge(state, {
    password: action.password,
    errors: ''
  }),
  [LOGOUT]: (state, action) => merge(state, {
    isLoggedIn: false,
    token: null
  }),
}, INITIAL_STATE)
