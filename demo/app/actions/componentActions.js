export const SET_SELECTED_COMPONENT = Symbol('SET_SELECTED_COMPONENT')

export function setSelectedComponent (component) {
  return {
    type: SET_SELECTED_COMPONENT,
    component,
  }
}
