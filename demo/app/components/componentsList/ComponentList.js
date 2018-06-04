import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import ComponentListItem from 'components/componentsList/componentListItem/ComponentListItem'
import getComponents from 'components/componentsList/components'
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
    const components = getComponents()

    return (
      <div>
        <h2>Components</h2>
        <ul className={style.componentList}>
          {
            components.map(component => {
              return (
                <ComponentListItem
                  handleSelectComponent={this.handleSelectComponent}
                  key={component.get('name')}
                  component={component}
                  active={component.get('name') === this.props.selectedComponent.get('name')}
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
