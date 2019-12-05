import { ADD_BEAT, EDIT_BEAT, DELETE_BEAT } from './actions.js'

export function beatReducers(state = [], action) {
  switch(action.type) {
    case ADD_BEAT:
      return [
        ...state,
        action.payload
      ]
    case EDIT_BEAT:
      return state.map(n => {
        if (n === action.payload.prevBeat) {
          return Object.assign({}, action.payload.prevBeat, action.payload.beat)
        } else {
          return n
        }
      })
    case DELETE_BEAT:
      return state.filter(n => n !== action.payload)
    default:
      return state
  }
}