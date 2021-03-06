import React from 'react'
import ReactDom from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { AppContainer } from 'react-hot-loader'
import App from './views/App'

const root = document.querySelector('#root')
const render = (Component) => {
  ReactDom.render(
    <AppContainer>
      <BrowserRouter>
        <Component />
      </BrowserRouter>
    </AppContainer>,
    root,
  )
}

render(App)

if (module.hot) {
  module.hot.accept('./views/App', () => {
    const nextApp = require('./views/App').default // eslint-disable-line
    render(nextApp)
  })
}
