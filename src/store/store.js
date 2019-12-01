import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'

import { beatReducers } from './beat/reducers'

const rootReducer = combineReducers({
  beats: beatReducers
})

export default function configureStore() {
  return createStore(
    rootReducer,
    applyMiddleware(thunkMiddleware)
  )
}