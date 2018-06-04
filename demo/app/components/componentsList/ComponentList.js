import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import ComponentListItem from 'components/componentsList/componentListItem/ComponentListItem'
import { setSelectedComponent } from 'actions/componentActions'
import { getSelectedComponent } from 'reducers/componentReducers'
import style from './ComponentList.scss'

class ComponentList extends PureComponent {
  constructor (props) {
    super(props)

    this.handleSelectComponent = this.handleSelectComponent.bind(this)
  }

  handleSelectComponent (component) {
    this.props.setSelectedComponent(component)
  }

  render () {
    const components = [
      'header',
      'bikegrid',
      'biketile',
      'instagramlink',
    ]

    return (
      <div>
        <h2>Components</h2>
        <ul className={style.componentList}>
          {
            components.map(component => {
              return (
                <ComponentListItem
                  handleSelectComponent={this.handleSelectComponent}
                  key={component}
                  component={component}
                  active={component === this.props.selectedComponent}
                />
              )
            })
          }
        </ul>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    selectedComponent: getSelectedComponent(state),
  }
}

export default connect(mapStateToProps, {
  setSelectedComponent,
})(ComponentList)
