import { combineReducers } from 'redux'
import { fromJS } from 'immutable'

function appState (state = fromJS({
  networkFailed: false,

}), action = null) {
  switch (action.type) {
    default:
      return state
  }
}

const rootReducer = combineReducers({
  appState
})

export default rootReducer
