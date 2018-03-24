import {post} from "../request";
import {push} from 'react-router-redux';
import {toastr} from "react-redux-toastr";
import {REQUEST_SUCCESS} from "./login-page";

export const CHANGE_NAME = '@@REGISTRATION_PAGE/CHANGE_NAME';
export const CHANGE_EMAIL = '@@REGISTRATION_PAGE/CHANGE_EMAIL';
export const CHANGE_SIRNAME = '@@REGISTRATION_PAGE/CHANGE_SIRNAME';
export const CHANGE_PATRONYMIC = '@@REGISTRATION_PAGE/CHANGE_PATRONYMIC';
export const CHANGE_POSITION = '@@REGISTRATION_PAGE/CHANGE_POSITION';
export const CHANGE_PASSWORD = '@@REGISTRATION_PAGE/CHANGE_PASSWORD';
export const CHANGE_PASSWORD_CONFIRMATION = '@@REGISTRATION_PAGE/CHANGE_PASSWORD_CONFIRMATION';
export const REQUEST_REGISTRATION = '@@REGISTRATION_PAGE/REQUEST_REGISTRATION';
export const REQUEST_REGISTRATION_SUCCESS = '@@REGISTRATION_PAGE/REQUEST_REGISTRATION_SUCCESS';
export const REQUEST_REGISTRATION_FAILURE = '@@REGISTRATION_PAGE/REQUEST_REGISTRATION_FAILURE';

export function changeName(name) {
  return {type: CHANGE_NAME, name}
}

export function changePatronymic(patronymic) {
  return {type: CHANGE_PATRONYMIC, patronymic}
}

export function changeEmail(email) {
  return {type: CHANGE_EMAIL, email}
}

export function changeSirName(sir_name) {
  return {type: CHANGE_SIRNAME, sir_name}
}

export function changePosition(position) {
  return {type: CHANGE_POSITION, position}
}

export function changePassword(password) {
  return {type: CHANGE_PASSWORD, password}
}

export function changePassConf(passConf) {
  return {type: CHANGE_PASSWORD_CONFIRMATION, passConf}
}

export function startRegister() {
  return (dispatch, getState) => {
    dispatch({type: REQUEST_REGISTRATION});
    const {name, sirName, patronymic, email, position, password, passwordConf} = getState().registrationPage;
    return post('/api/signup', {name, email, password, position, patronymic, sir_name: sirName, password_confirmation: passwordConf})
      .then((response) => {
        console.log('RESPONSE ===> ', response);
        const {auth_token, user} = response;
        toastr.success(response.message);
        dispatch({type: REQUEST_SUCCESS, auth_token});
        localStorage.setItem('token', auth_token);
        localStorage.setItem('user_name', user.name);
        dispatch(push('/'));
        dispatch({type: REQUEST_REGISTRATION_SUCCESS})
      })
      .catch((error) => {
        toastr.error(error.message);
        return {type: REQUEST_REGISTRATION_FAILURE}
      })
  }
}