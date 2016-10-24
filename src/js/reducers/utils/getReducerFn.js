import { appReducers} from '../'

import {
  camelCase,
  head,
  isFunction,
  isString,
  some
} from 'lodash'

// String -> Object -> String -> Function
export default function getReducerFn(reducerKey, actionsMap, actionType) {

  const isSystemAction = isString(actionType) && (
    actionType.includes('@@') || actionType.includes('redux')
  )

  // System actions are prefixed with @@, e.g., '@@redux'
  if (isSystemAction) {
    return { isSystemAction }

  } else {
    const baseAction = camelCase(head(actionType.split('_')))
    const camelizedActionType = camelCase(actionType)
    const foundIn = find(camelizedActionType)

    if (foundIn(appReducers)) {
      return actionsMap[camelizedActionType]
    } else {
      throw new Error(
        '(getReducerFn.js) \n' +
        `Error updating state: the function \`${baseAction}\` for action ` +
        `type \`${actionType}\` not found within resourceReducer.`
      )
    }
  }
}

// String -> Func -> Bool
function find(actionType) {
  return (reducers) => {
    return some(reducers, (reducer) => {
      const { actionsMap } = reducer
      return isFunction(actionsMap && actionsMap[actionType])
    })
  }
}
