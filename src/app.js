'use strict'

import React from 'react'
import { render } from 'react-dom'

import TodoList from './components/todoList'
import items from './items'

render(<TodoList items={items} />,
  document.getElementById('root')
)
