import * as types from 'js/constants/appActionTypes'

export function updateStore(value){
  return {
    type: types.UPDATESTORE,
    updateStore: value
  }
}
export function updatedFieldKey(value){
  return {
    type: types.UPDATEDFIELDKEY,
    updatedFieldKey: value
  }
}
export function elementClicked(value){
  return {
    type: types.ELEMENTCLICKED,
    elementClicked: value
  }
}

