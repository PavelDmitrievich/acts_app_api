import {get, post, remove, update} from './request'
import {toastr} from 'react-redux-toastr'

export const UPLOAD_FILE = '@@MAIN_PAGE/UPLOAD_FILE';
export const UPLOAD_FILE_SUCCESS = '@@MAIN_PAGE/UPLOAD_FILE_SUCCESS';
export const UPLOAD_FILE_FAILURE = '@@MAIN_PAGE/UPLOAD_FILE_FAILURE';
export const FETCH_PHOTOS = '@MAIN_PAGE/FETCH_PHOTOS';
export const FETCH_PHOTOS_SUCCESS = '@MAIN_PAGE/FETCH_PHOTOS_SUCCESS';
export const FETCH_PHOTOS_FAILURE = '@MAIN_PAGE/FETCH_PHOTOS_FAILURE';
export const FETCH_PHOTOS_FIRST_PAGE_SUCCESS = '@MAIN_PAGE/FETCH_PHOTOS_FIRST_PAGE_SUCCESS';
export const FETCH_PHOTOS_FIRST_PAGE_FAILURE = '@MAIN_PAGE/FETCH_PHOTOS_FIRST_PAGE_FAILURE';
export const SHOW_PLACE_SELECT_DIALOG = '@MAIN_PAGE/SHOW_PLACE_SELECT_DIALOG';
export const HIDE_PLACE_SELECT_DIALOG = '@MAIN_PAGE/HIDE_PLACE_SELECT_DIALOG';
export const CHANGE_UPLOAD_FILES = '@MAIN_PAGE/CHANGE_UPLOAD_FILES';
export const CHANGE_PLACE = '@MAIN_PAGE/CHANGE_PLACE';
export const FETCH_PLACES = '@MAIN_PAGE/FETCH_PLACES';
export const FETCH_PLACES_SUCCESS = '@MAIN_PAGE/FETCH_PLACES_SUCCESS';
export const FETCH_PLACES_FAILURE = '@MAIN_PAGE/FETCH_PLACES_FAILURE';
export const FETCH_USERS = '@MAIN_PAGE/FETCH_USERS';
export const FETCH_USERS_SUCCESS = '@MAIN_PAGE/FETCH_USERS_SUCCESS';
export const FETCH_USERS_FAILURE = '@MAIN_PAGE/FETCH_USERS_FAILURE';

// From photo
export const CHANGE_EMAIL = '@@MAIN_PAGE/CHANGE_EMAIL';
export const CHANGE_MESSAGE = '@@MAIN_PAGE/CHANGE_MESSAGE';
export const REQUEST_SHARE_PHOTO = '@@MAIN_PAGE/REQUEST_SHARE_PHOTO';
export const REQUEST_SHARE_PHOTO_SUCCESS = '@@MAIN_PAGE/REQUEST_SHARE_PHOTO_SUCCESS';
export const REQUEST_SHARE_PHOTO_FAILURE = '@@MAIN_PAGE/REQUEST_SHARE_PHOTO_FAILURE';
export const CLOSE_MODAL_MESSAGE = '@@MAIN_PAGE/CLOSE_MODAL_MESSAGE';
export const CHANGE_PHOTOS_ORDER = '@MAIN_PAGE/CHANGE_PHOTOS_ORDER';

export const REQUEST_FOR_CHANGE_OF_DATE = '@@MAIN_PAGE/REQUEST_FOR_CHANGE_OF_DATE';
export const REQUEST_FOR_CHANGE_OF_DATE_SUCCESS = '@@MAIN_PAGE/REQUEST_FOR_CHANGE_OF_DATE_SUCCESS';
export const REQUEST_FOR_CHANGE_OF_DATE_FAILURE = '@@MAIN_PAGE/REQUEST_FOR_CHANGE_OF_DATE_FAILURE';

export const REQUEST_FOR_DELETE = '@@MAIN_PAGE/REQUEST_FOR_DELETE';
export const REQUEST_FOR_DELETE_SUCCESS = '@@MAIN_PAGE/REQUEST_FOR_DELETE_SUCCESS';
export const REQUEST_FOR_DELETE_FAILURE = '@@MAIN_PAGE/REQUEST_FOR_DELETE_FAILURE';

export const CHANGE_PERCENT = '@@MAIN_PAGE/CHANGE_PERCENT';
export const UPLOAD_COMPLETE = '@@MAIN_PAGE/UPLOAD_COMPLETE';
export const UPLOADING_IS_OVER = '@@MAIN_PAGE/UPLOADING_IS_OVER';
export const START_UPLOADING = '@@MAIN_PAGE/START_UPLOADING';

export function changeEmail(email) {
  return {
    type: CHANGE_EMAIL, email
  }
}

export function changeMessage(message) {
  return {
    type: CHANGE_MESSAGE, message
  }
}

export function sharePhotos(photoIds) {
  return (dispatch, getState) => {
    const {email} = getState().mainPage;
    let photos = photoIds;
    let chargeable = true;
    dispatch({type: REQUEST_SHARE_PHOTO});
    return post('/api/sets', {email, photos, chargeable}).then((response) => {
      dispatch({type: REQUEST_SHARE_PHOTO_SUCCESS, url: response})
    }).catch((errors) => {
      dispatch({type: REQUEST_SHARE_PHOTO_FAILURE, errors})
    });
  }
}

export function closeModalMessage() {
  return {type: CLOSE_MODAL_MESSAGE}
}

export function showPlaceSelectDialog() {
  return {type: SHOW_PLACE_SELECT_DIALOG};
}

export function hidePlaceSelectDialog() {
  return {type: HIDE_PLACE_SELECT_DIALOG};
}

export function changeUploadFiles(files) {
  return {type: CHANGE_UPLOAD_FILES, files}
}

export function changePlace(place) {
  return {type: CHANGE_PLACE, place};
}

export function fetchPhotos(page, order) {
  return (dispatch) => {
    dispatch({type: FETCH_PHOTOS});
    const token = localStorage.getItem('token');

    return get(`/api/photos?page=${page}&ordered_by=${order}`, token).then((response) => {
      dispatch({type: FETCH_PHOTOS_SUCCESS, photos: response})
    }).catch((errors) => {
      dispatch({type: FETCH_PHOTOS_FAILURE})
      //something bad happened
    })
  }
}

export function fetchPhotosFirstPage(order) {
  return (dispatch) => {
    dispatch({type: FETCH_PHOTOS});
    const token = localStorage.getItem('token');

    return get(`/api/photos?page=1&ordered_by=${order}`, token).then((response) => {
      dispatch({type: FETCH_PHOTOS_FIRST_PAGE_SUCCESS, photos: response})
    }).catch((errors) => {
      dispatch({type: FETCH_PHOTOS_FIRST_PAGE_FAILURE})
      //something bad happened
    })
  }
}

export function fetchUsers() {
  return (dispatch) => {
    dispatch({type: FETCH_USERS});
    const token = localStorage.getItem('token');

    return get('/api/users', token).then((response) => {
      dispatch({type: FETCH_USERS_SUCCESS, users: response});
    }).catch((errors) => {
      dispatch({type: FETCH_USERS_FAILURE});
    })
  }
}

export function fetchPlaces() {
  return (dispatch) => {
    dispatch({type: FETCH_PLACES});
    const token = localStorage.getItem('token');

    return get('/api/places', token).then((response) => {
      dispatch({type: FETCH_PLACES_SUCCESS, places: response});
    }).catch((errors) => {
      dispatch({type: FETCH_PLACES_FAILURE});
    })
  }
}

export function requestForChangeOfDate(data) {
  return (dispatch) => {
    dispatch({type: REQUEST_FOR_CHANGE_OF_DATE});
    const token = localStorage.getItem('token');
    return update('/api/photos', {photos: data}, token).then((response) => {
      dispatch({type: REQUEST_FOR_CHANGE_OF_DATE_SUCCESS, photos: response})
    }).catch((errors) => {
      dispatch({type: REQUEST_FOR_CHANGE_OF_DATE_FAILURE, errors})
    })
  }
}

export function requestForDelete(ids) {
  return (dispatch) => {
    dispatch({type: REQUEST_FOR_DELETE});
    const token = localStorage.getItem('token');
    return remove('/api/photos', {data: ids}, token).then((response) => {
      dispatch({type: REQUEST_FOR_DELETE_SUCCESS, deletePhotos: response})
    }).catch((errors) => {
      dispatch({type: REQUEST_FOR_DELETE_FAILURE});
      errors.photos.map(error => toastr.error(error));
    })
  }
}

export function changePhotosOrder(value) {
  return (dispatch) => {
    dispatch({type: CHANGE_PHOTOS_ORDER, photosOrder: value});
    const token = localStorage.getItem('token');
    return get(`/api/photos?page=1&ordered_by=${value}`, token).then((response) => {
      dispatch({type: FETCH_PHOTOS_FIRST_PAGE_SUCCESS, photos: response})
    }).catch((errors) => {
      dispatch({type: FETCH_PHOTOS_FIRST_PAGE_FAILURE})
      //something bad happened
    })
  }
}
