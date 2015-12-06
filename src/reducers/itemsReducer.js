'use strict'

import { ITEM_TOGGLE_RESOLVED } from '../actions/itemsActions'
import { fromJS } from 'immutable'

const defaultState = fromJS([
  {
    id: 1,
    name: 'Buy cat food',
    isResolved: false
  },
  {
    id: 2,
    name: 'Learn React',
    isResolved: true
  },
  {
    id: 3,
    name: 'Avoid semicolons',
    isResolved: false
  }
])

function onItemToggleResolved (state, action) {
  const idx = state.findIndex(item => item.get('id') === action.id)
  return state.updateIn([idx, 'isResolved'], isResolved => !isResolved)
}

export default function (state = defaultState, action) {
  switch (action.type) {

    case ITEM_TOGGLE_RESOLVED:
      return onItemToggleResolved(state, action)

    default:
      return state
  }
}
