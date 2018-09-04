import React from 'react'
import {
  observer,
  inject,
} from 'mobx-react'
import PropTypes from 'prop-types'
import { AppState } from '../../store/app-state'

@inject('appState') @observer
export default class TopicList extends React.Component {
  static propTypes = {
    appState: PropTypes.instanceOf(AppState),
  }

  constructor() {
    super()
    this.changeName = this.changeName.bind(this)
  }

  componentDidMount() {
    // do somethind
  }

  changeName(event) {
    const { appState } = this.props
    appState.name = event.target.value
  }

  render() {
    const { appState } = this.props
    return (
      <div>
        <input type="text" onChange={this.changeName} />
        <span>{appState.msg}</span>
      </div>
    )
  }
}
