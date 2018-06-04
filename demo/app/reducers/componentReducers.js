import { fromJS } from 'immutable'
import * as ActionTypes from 'actions/componentActions'

const defaultState = fromJS({
  selectedComponent: {},
})

export default function componentReducers (state = defaultState, action) {
  switch (action.type) {
    case ActionTypes.SET_SELECTED_COMPONENT:
      return state.merge({selectedComponent: action.component})
    default:
      return state
  }
}

export function getSelectedComponent (state) {
  return state.componentReducers.get('selectedComponent')
}
