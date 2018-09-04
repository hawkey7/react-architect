import React from 'react'
import { Route, Redirect } from 'react-router'
import TestApi from 'views/test/api-test'
import TopicList from '../views/topic-list/index'
import TopicDetail from '../views/topic-detail/index'

export default () => [
  <Route path="/" render={() => <Redirect to="/list" />} exact key="/" />,
  <Route path="/list" component={TopicList} key="/list" />,
  <Route path="/detail" component={TopicDetail} key="/detail" />,
  <Route path="/test" component={TestApi} key="/test" />
]
