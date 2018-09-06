import React from 'react'
import {
  observer,
  inject
} from 'mobx-react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
// import { AppState } from 'store/app-state'

@inject('appState') @observer
export default class TopicList extends React.Component {
  static propTypes = {
    appState: PropTypes.instanceOf(Object)
  }

  constructor() {
    super()
    this.changeName = this.changeName.bind(this)
  }

  componentDidMount() {
    // do somethind
  }

  asyncBootstrap() {
    return new Promise((resolve) => {
      setTimeout(() => {
        this.props.appState.count = 3
        resolve(true)
      })
    })
  }

  changeName(event) {
    const { appState } = this.props
    appState.name = event.target.value
  }

  render() {
    const { appState } = this.props
    return (
      <div>
        <Helmet>
          <title>this is a topic list</title>
          <meta name="description" content="this is des" />
          <style>{'body{background:red}'}</style>
          <link rel="stylesheet" type="text/css" href="n.css?1536246824189" />
        </Helmet>
        <input type="text" onChange={this.changeName} />
        <span>{appState.msg}</span>
      </div>
    )
  }
}
