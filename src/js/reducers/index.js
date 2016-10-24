import {combineReducers} from 'redux';
import actionsMap from 'js/reducers/appReducer';

var initialState = {};

export const appReducers = {
  ...actionsMap
}
export default combineReducers(
  appReducers
)
