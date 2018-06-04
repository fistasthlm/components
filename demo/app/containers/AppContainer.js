import React, { PureComponent } from 'react'
import { Route, Switch, withRouter } from 'react-router-dom'
import Home from 'containers/home/HomeContainer'
import Header from 'components/header/Header';

class AppContainer extends PureComponent {
  render () {
    return (
      <div className='content-container'>
        <Header />
        <div>
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
