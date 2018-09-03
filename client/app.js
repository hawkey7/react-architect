import React from 'react'
import ReactDom from 'react-dom'
import {AppContainer} from 'react-hot-loader'
import App from './App.jsx'

const root = document.querySelector('#root')
const render = Component => {
    ReactDom.render(
        <AppContainer>
            <Component />
        </AppContainer>,
        root
    )
}

render(App)

if (module.hot) {
    module.hot.accept('./App.jsx', ()=>{
        const nextApp = require('./App.jsx').default
        render(nextApp)
    })
} 