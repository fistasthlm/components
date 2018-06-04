import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { NavBar } from '../../../../lib'
import style from './ComponentContainer.scss'
import { getSelectedComponent } from 'reducers/componentReducers'

class ComponentContainer extends PureComponent {
  renderComponent () {
    const {component} = this.props

    switch (component.get('name')) {
      case 'NavBar':
        return (
          <NavBar {...component.get('props')} />
        )
      default:
        return (
          <div>Select a component on the right</div>
        )
    }
  }

  render () {
    const {component} = this.props
    return (
      <div className={style.container}>
        <h2>{component.get('name')}</h2>
        <div className={style.description}>
          {component.get('description')}
        </div>
        <div className={style.previewSection}>
          <h4>
            Preview
          </h4>
          <div className={style.preview}>
            <div>
              {
                this.renderComponent()
              }
            </div>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    component: getSelectedComponent(state)
  }
}

export default connect(mapStateToProps)(ComponentContainer)
