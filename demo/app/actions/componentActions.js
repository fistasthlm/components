export const SET_SELECTED_COMPONENT = Symbol('SET_SELECTED_COMPONENT')

export function setSelectedComponent (componentName) {
  return {
    type: SET_SELECTED_COMPONENT,
    componentName,
  }
}
