import merge from 'xtend';
import createReducer from './create-reducer';
import {
  CHANGE_NAME, CHANGE_EMAIL, CHANGE_SIRNAME, CHANGE_POSITION, CHANGE_PASSWORD, CHANGE_PASSWORD_CONFIRMATION, REQUEST_REGISTRATION,
  REQUEST_REGISTRATION_SUCCESS, REQUEST_REGISTRATION_FAILURE, CHANGE_PATRONYMIC
} from '../actions/auth/registration';

const INITIAL_STATE = {
  name: '',
  sirName: '',
  email: '',
  password: '',
  passwordConf: '',
  position: '',
  patronymic: '',
  isLoading: false
};

export default createReducer({
  [CHANGE_NAME]: (state, action) => merge(state, {name: action.name}),
  [CHANGE_PATRONYMIC]: (state, action) => merge(state, {patronymic: action.patronymic}),
  [CHANGE_SIRNAME]: (state, action) => merge(state, {sirName: action.sir_name}),
  [CHANGE_EMAIL]: (state, action) => merge(state, {email: action.email}),
  [CHANGE_POSITION]: (state, action) => merge(state, {position: action.position}),
  [CHANGE_PASSWORD]: (state, action) => merge(state, {password: action.password}),
  [CHANGE_PASSWORD_CONFIRMATION]: (state, action) => merge(state, {
    passwordConf: action.passConf
  }),
  [REQUEST_REGISTRATION]: (state, action) => merge(state, {isLoading: true}),
  [REQUEST_REGISTRATION_FAILURE]: (state, action) => merge(state, {isLoading: false}),
  [REQUEST_REGISTRATION_SUCCESS]: (state, action) => merge(state, {isLoading: false})
}, INITIAL_STATE)