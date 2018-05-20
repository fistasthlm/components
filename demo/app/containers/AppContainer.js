import React, { PureComponent } from 'react'
import { Route, Switch, withRouter } from 'react-router-dom'
import { List, Map } from 'immutable'
import Home from 'containers/HomeContainer'
import { NavBar } from '../../../lib'

class AppContainer extends PureComponent {
  render () {
    const options = Map({
      links: List([
        Map({
          to: '/',
          route: 'Home',
        }),
        Map({
          to: '/add',
          route: 'Add new bike',
        }),
        Map({
          to: '/bikes',
          route: 'Bikes',
        }),
      ]),
      actions: List([
        Map({
          action: this.props.onLogOut,
          name: 'Log out',
        }),
      ]),
    })

    return (
      <div className='content-container'>
        <NavBar
          onLogout={() => {console.log('logouturu')}}
          siteDescription="components"
          options={options} />
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
