import {combineReducers} from 'redux';
import {routerReducer as routing} from 'react-router-redux';
import mainPage from './main-page';
import loginPage from './login-page';
import {reducer as toastrReducer} from 'react-redux-toastr';
import registrationPage from './registrationPage';

export default combineReducers({
  toastr: toastrReducer,
  routing,
  mainPage,
  loginPage,
  registrationPage
})
