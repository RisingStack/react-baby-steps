'use strict'

import React from 'react'
import { render } from 'react-dom'

import Provider from './components/provider'
import TodoList from './components/todoList'
import items from './items'

function renderApp (items) {
  render(
    <Provider appId="app-1">
      <TodoList items={items} />
    </Provider>,
    document.getElementById('root')
  )
}

renderApp(items)

// change first item to resolved
setTimeout(() => {
  const newItems = items.setIn([0, 'isResolved'], true)

  renderApp(newItems)
}, 500)
