import createReducer from './utils/createReducer'
import * as types from 'js/constants/appActionTypes'


const actionsMap = {
  updateStore(state=0,action) {
      switch(action.type) {
        case types.UPDATESTORE:
          return action.updateStore;
        default:
          return state;
       }
  },
  updatedFieldKey(state=0,action) {
      switch(action.type) {
        case types.UPDATEDFIELDKEY:
          return action.updatedFieldKey;
        default:
          return state;
       }
  },
  elementClicked(state='',action) {
      switch(action.type) {
        case types.ELEMENTCLICKED:
          return action.elementClicked;
        default:
          return state;
       }
  }
}
export default actionsMap
