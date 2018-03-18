import merge from 'xtend';
import _ from 'lodash';
import createReducer from './create-reducer';
import {
  CHANGE_EMAIL,
  CHANGE_MESSAGE,
  CHANGE_PERCENT,
  CHANGE_PHOTOS_ORDER,
  CHANGE_PLACE,
  CHANGE_UPLOAD_FILES,
  CLOSE_MODAL_MESSAGE,
  FETCH_PHOTOS,
  FETCH_PHOTOS_FIRST_PAGE_SUCCESS,
  FETCH_PHOTOS_SUCCESS,
  FETCH_PLACES_SUCCESS,
  FETCH_USERS_SUCCESS,
  HIDE_PLACE_SELECT_DIALOG,
  REQUEST_FOR_CHANGE_OF_DATE,
  REQUEST_FOR_CHANGE_OF_DATE_FAILURE,
  REQUEST_FOR_CHANGE_OF_DATE_SUCCESS,
  REQUEST_FOR_DELETE,
  REQUEST_FOR_DELETE_FAILURE,
  REQUEST_FOR_DELETE_SUCCESS,
  REQUEST_SHARE_PHOTO,
  REQUEST_SHARE_PHOTO_FAILURE,
  REQUEST_SHARE_PHOTO_SUCCESS,
  SHOW_PLACE_SELECT_DIALOG,
  START_UPLOADING,
  UPLOAD_COMPLETE,
  UPLOAD_FILE,
  UPLOAD_FILE_FAILURE,
  UPLOAD_FILE_SUCCESS,
  UPLOADING_IS_OVER
} from '../actions/main-page';


const INITIAL_SHARE_ERRORS = {
  email: [],
  photos: [],
  chargeable: []
};

const INITIAL_EDIT_DATE_ERRORS = {
  created_date: [],
  uploaded_date: []
};

const INITIAL_STATE = {
  isFileUploading: false,
  isFetchingPhotos: false,
  photos: [],
  nextPage: 2,
  currentPage: 1,
  places: [],
  users: [],
  selectedPlace: null,
  needToShowSelectPlace: false,
  isSharePhotos: false,
  email: '',
  shareErrors: INITIAL_SHARE_ERRORS,
  openSuccessMessage: false,
  url: '',
  message: '',
  isProcessingEditDate: false,
  editDateErrors: INITIAL_EDIT_DATE_ERRORS,
  isProcessingForDelete: false,
  hasShareErrors: false,
  percent: 0,
  startUpload: false,
  completeUpload: 0,
  countFiles: 0,
  photosOrder: 'created_date'
};

function deleteFileFromFilesToUpload(fileToDelete, files) {
  return files.reduce((acc, file) => {
    if (file === fileToDelete) return acc;
    acc.push(file);
    return acc;
  }, [])
}

function getPhotosDifference(oldPhotos, newPhotos) {
  const difference = _.differenceBy(newPhotos, oldPhotos, 'id');
  return oldPhotos.concat(difference);
}

function updatePhotos(oldPhotos, updatePhotos) {
  let id = 'id'
    , data = {};
  [].concat(oldPhotos, updatePhotos).forEach(function (item) {
    if (id in item) {
      let key = item[id];
      data[key] = data[key] || {};
      Object.keys(item).forEach(function (property) {
        data[key][property] = item[property];
      });
    }
  });
  return Object.values(data);
}

function removePhotos(oldPhotos, removePhotos) {
  removePhotos.map((photo) => {
    oldPhotos.map((oldPhoto) => {
      if (oldPhoto.id === photo.id) {
        let index = oldPhotos.indexOf(oldPhoto);
        oldPhotos.splice(index, 1)
      }
    });
  });
  return oldPhotos;
}

export default createReducer({
  [FETCH_PHOTOS]: (state, action) => merge(state, {
    isFetchingPhotos: true
  }),
  [FETCH_PHOTOS_SUCCESS]: (state, action) => merge(state, {
    isFetchingPhotos: false,
    photos: getPhotosDifference(state.photos, action.photos),
    currentPage: state.nextPage,
    nextPage: action.photos.length < 100 ? state.nextPage : state.nextPage + 1
  }),
  [FETCH_PHOTOS_FIRST_PAGE_SUCCESS]: (state, action) => merge(state, {
    isFetchingPhotos: false,
    photos: getPhotosDifference(state.photos, action.photos)
  }),
  [UPLOAD_FILE]: (state, action) => merge(state, {
    isFileUploading: true,
    startUpload: true
  }),
  [UPLOAD_FILE_SUCCESS]: (state, action) => merge(state, {
    isFileUploading: false,
    photos: state.photos.concat(action.photo),
    uploadFiles: deleteFileFromFilesToUpload(action.file, state.uploadFiles)
  }),
  [UPLOAD_FILE_FAILURE]: (state, action) => merge(state, {
    isFileUploading: false,
    percent: 0,
    startUpload: false,
    countFiles: 0
  }),
  [SHOW_PLACE_SELECT_DIALOG]: (state, action) => merge(state, {
    needToShowSelectPlace: true
  }),
  [HIDE_PLACE_SELECT_DIALOG]: (state, action) => merge(state, {
    needToShowSelectPlace: false
  }),
  [CHANGE_UPLOAD_FILES]: (state, action) => merge(state, {
    uploadFiles: action.files
  }),
  [CHANGE_PLACE]: (state, action) => merge(state, {
    selectedPlace: action.place
  }),
  [FETCH_PLACES_SUCCESS]: (state, action) => merge(state, {
    places: action.places
  }),
  [FETCH_USERS_SUCCESS]: (state, action) => merge(state, {
    users: action.users
  }),
  [REQUEST_SHARE_PHOTO]: (state, action) => merge(state, {
    isSharePhotos: true
  }),
  [REQUEST_SHARE_PHOTO_FAILURE]: (state, action) => merge(state, {
    isSharePhotos: false,
    shareErrors: action.errors,
    openSuccessMessage: false,
    hasShareErrors: true
  }),
  [REQUEST_SHARE_PHOTO_SUCCESS]: (state, action) => merge(state, {
    isSharePhotos: false,
    shareErrors: INITIAL_SHARE_ERRORS,
    openSuccessMessage: true,
    url: action.url.url,
    hasShareErrors: false
  }),
  [CHANGE_EMAIL]: (state, action) => merge(state, {
    email: action.email
  }),
  [CLOSE_MODAL_MESSAGE]: (state, action) => merge(state, {
    openSuccessMessage: false
  }),
  [CHANGE_MESSAGE]: (state, action) => merge(state, {
    message: action.message
  }),
  [REQUEST_FOR_CHANGE_OF_DATE]: (state, action) => merge(state, {
    isProcessingEditDate: true
  }),
  [REQUEST_FOR_CHANGE_OF_DATE_SUCCESS]: (state, action) => merge(state, {
    isProcessingEditDate: false,
    photos: updatePhotos(state.photos, action.photos)
  }),
  [REQUEST_FOR_CHANGE_OF_DATE_FAILURE]: (state, action) => merge(state, {
    isProcessingEditDate: false,
    editDateErrors: action.errors
  }),
  [REQUEST_FOR_DELETE]: (state, action) => merge(state, {
    isProcessingForDelete: true
  }),
  [REQUEST_FOR_DELETE_SUCCESS]: (state, action) => merge(state, {
    isProcessingForDelete: false,
    photos: removePhotos(state.photos, action.deletePhotos)
  }),
  [REQUEST_FOR_DELETE_FAILURE]: (state, action) => merge(state, {
    isProcessingForDelete: false
  }),
  [CHANGE_PERCENT]: (state, action) => merge(state, {
    percent: action.percent
  }),
  [UPLOAD_COMPLETE]: (state, action) => merge(state, {
    completeUpload: action.count
  }),
  [UPLOADING_IS_OVER]: (state, action) => merge(state, {
    percent: 0,
    startUpload: false,
    countFiles: 0
  }),
  [START_UPLOADING]: (state, action) => merge(state, {
    countFiles: action.count,
    completeUpload: 0
  }),
  [CHANGE_PHOTOS_ORDER]: (state, action) => merge(state, {
    currentPage: 1,
    nextPage: 2,
    photos: [],
    photosOrder: action.photosOrder
  })
}, INITIAL_STATE)