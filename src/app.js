'use strict'

import React from 'react'
import { render } from 'react-dom'

import { Provider } from 'react-redux'
import configureStore from './store/configureStore'

import TodoList from './containers/todoList'

const store = configureStore()

render(
  <Provider store={store}>
    <TodoList />
  </Provider>,
  document.getElementById('root')
)
