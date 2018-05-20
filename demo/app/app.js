import React from 'react'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import createBrowserHistory from 'history/createBrowserHistory'
import configureStore from './configureStore'
import AppContainer from 'containers/AppContainer'
import 'styles/main.scss'

const store = configureStore()
const history = createBrowserHistory()

const App = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <AppContainer />
    </ConnectedRouter>
  </Provider>
)

export default App
