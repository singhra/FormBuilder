import getReducerFn from './getReducerFn'

// String -> Object -> Object -> Object
export default function createReducer(reducerKey, actionsMap, initialState) {
  return (state = initialState, action) => {
    const reduceFn = getReducerFn(reducerKey, actionsMap, action.type)

    if (!reduceFn || (reduceFn && reduceFn.isSystemAction)) {
      return state
    }

    return {
      ...state,
      ...reduceFn(state, action)
    }
  }
}
