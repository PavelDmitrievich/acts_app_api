import {get} from './request'
import {toastr} from 'react-redux-toastr'

export const FETCH_ACTS = '@@MAIN_PAGE/FETCH_ACTS';
export const FETCH_ACTS_SUCCESS = '@@MAIN_PAGE/FETCH_ACTS_SUCCESS';
export const FETCH_ACTS_FAILURE = '@@MAIN_PAGE/FETCH_ACTS_FAILURE';

export function fetchActs() {
  return (dispatch) => {
    const token = localStorage.getItem('token');
    dispatch({type: FETCH_ACTS});
    return get('/api/acts', token).then((response) => {
      console.log('RESPONSE ==> ', response);
      return dispatch({type: FETCH_ACTS_SUCCESS, response})
    }).catch((error) => {
      toastr.error(error.message);
      return dispatch({type: FETCH_ACTS_FAILURE});
    })
  }
}

