import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import Components from './components'


const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('app')
  )
}

render(Components)

if (module.hot) {
  module.hot.accept('./components', () => {
    const Components = require('./components').default
    render(Components)
  })
}
