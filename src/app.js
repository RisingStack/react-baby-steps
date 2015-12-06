'use strict'

import React from 'react'
import { render } from 'react-dom'

import Provider from './flux/provider'
import Store from './flux/store'

import TodoList from './components/todoList'
import items from './items'

const reducer = (prevState, action) => {
  if (action.type === 'ITEM_TOGGLE_RESOLVED') {
    const idx = prevState.findIndex(item => item.get('id') === action.id)
    return prevState.updateIn([idx, 'isResolved'], isResolved => !isResolved)
  }

  return prevState
}

const store = new Store(items, reducer)

render(
  <Provider store={store} appId="app-1">
    <TodoList />
  </Provider>,
  document.getElementById('root')
)
