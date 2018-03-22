import merge from 'xtend';
import createReducer from './create-reducer';
import {
  FETCH_ACTS, FETCH_ACTS_FAILURE, FETCH_ACTS_SUCCESS
} from '../actions/main-page';


const INITIAL_STATE = {
  acts: [],
  isFetchingActs: false
};

export default createReducer({
  [FETCH_ACTS]: (state, action) => merge(state, {
    isFetchingActs: true
  }),
  [FETCH_ACTS_SUCCESS]: (state, action) => merge(state, {
    isFetchingActs: false,
    acts: action.response
  }),
  [FETCH_ACTS_FAILURE]: (state, action) => merge(state, {
    isFetchingActs: false
  })
}, INITIAL_STATE)