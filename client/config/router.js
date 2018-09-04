import React from 'react'
import { Route, Redirect } from 'react-router'
import TopicList from '../views/topic-list/index'
import TopicDetail from '../views/topic-detail/index'

export default () => [
  <Redirect from="/detail" to="/list" />,
  <Route path="/" render={() => <Redirect to="/list" />} exact />,
  <Route path="/list" component={TopicList} />,
  <Route path="/detail" component={TopicDetail} />,
]
