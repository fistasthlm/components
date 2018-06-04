import { combineReducers } from 'redux'
import { fromJS } from 'immutable'
import componentReducers from 'reducers/componentReducers'

function appState (state = fromJS({
  networkFailed: false,

}), action = null) {
  switch (action.type) {
    default:
      return state
  }
}

const rootReducer = combineReducers({
  appState,
  componentReducers,
})

export default rootReducer
