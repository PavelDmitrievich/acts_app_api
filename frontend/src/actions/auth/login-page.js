import {post} from "../request";
import {push} from 'react-router-redux';

export const REQUEST = '@LOGIN_PAGE/REQUEST';
export const REQUEST_SUCCESS = '@LOGIN_PAGE/REQUEST_SUCCESS';
export const REQUEST_FAILURE = '@LOGIN_PAGE/REQUEST_FAILURE';
export const CHANGE_EMAIL = '@LOGIN_PAGE/CHANGE_EMAIL';
export const CHANGE_PASSWORD = '@LOGIN_PAGE/CHANGE_PASSWORD';
export const LOGOUT = '@LOGIN_PAGE/LOGOUT';


export function login() {
  return (dispatch, getState) => {
    dispatch({type: REQUEST});
    const {email, password} = getState().loginPage;

    return post('/api/auth/login', {email, password}).then((response) => {
      const {auth_token, user} = response;

      dispatch({type: REQUEST_SUCCESS, auth_token});
      localStorage.setItem('token', auth_token);
      dispatch(push('/'));
    }).catch((errors) => {
      console.log('errors ==> ', errors);
      dispatch({type: REQUEST_FAILURE, errors})
    })
  }
}

export function changeUsername(email) {
  return {type: CHANGE_EMAIL, email};
}

export function changePassword(password) {
  return {type: CHANGE_PASSWORD, password};
}

export function logout() {
  return (dispatch) => {
    localStorage.removeItem('token');
    dispatch({type: LOGOUT});
    dispatch(push('/login'));
  }
}

export function loadAuth() {
  return (dispatch) => {
    const token = localStorage.getItem('token');
    if(!!token) {
      dispatch({type: REQUEST_SUCCESS, token});
    }
  }
}
