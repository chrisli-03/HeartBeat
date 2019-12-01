import { ADD_BEAT } from './actions.js'

export function beatReducers(state = [], action) {
  switch(action.type) {
    case ADD_BEAT:
      return [
        ...state,
        action.payload
      ]
    default:
      return state
  }
}