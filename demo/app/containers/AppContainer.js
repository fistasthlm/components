import React, { PureComponent } from 'react'
import { Route, Switch, withRouter } from 'react-router-dom'
import Home from 'containers/HomeContainer'

class AppContainer extends PureComponent {
  render () {
    return (
      <div className='content-container'>
        <div className='divider' />
        <div className='page-content'>
          <Switch>
            <Route
              exact path='/'
              component={Home} />
          </Switch>
        </div>
      </div>
    )
  }
}

export default withRouter(AppContainer)
