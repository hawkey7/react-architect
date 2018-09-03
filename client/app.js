import React from 'react'
import ReactDom from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import App from './views/App'

const root = document.querySelector('#root')
const render = (Component) => {
  ReactDom.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    root,
  )
}

render(App)

if (module.hot) {
  module.hot.accept('./views/App.jsx', () => {
    const nextApp = require('./views/App.jsx').default // eslint-disable-line
    render(nextApp)
  })
}
