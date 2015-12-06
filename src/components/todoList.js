'use strict'

import React, { Component, PropTypes } from 'react'
import ImmutablePropTypes from 'react-immutable-proptypes'
import LinkedStateMixin from 'react-addons-linked-state-mixin'
import ReactMixin from 'react-mixin'

import Connect from '../flux/connect'
import colorizeWrapper from './colorizeWrapper'
import TodoItem from './todoItem'

const ColoredTodoItem = colorizeWrapper(TodoItem, ['#d15f11', '#115bd1', '#d6d641'])

/**
* @class TodoList
*/
class TodoList extends Component {
  constructor () {
    super()

    this.state = {
      query: null
    }

    // autobinding only for lifecycle methods
    this.linkState = this.linkState.bind(this)
  }

  static isMatch (query, item) {
    if (!query) {
      return true
    }

    return item.get('name').match(new RegExp(query, 'i'))
  }

  /**
   * @method render
   * @return {JSX}
   */
  render () {
    const style = {
      width: '20%',
      backgroundColor: '#ececec'
    }

    const { items, dispatch } = this.props
    const { query } = this.state

    const toggleItemResolve = item => dispatch({
      type: 'ITEM_TOGGLE_RESOLVED',
      id: item.get('id')
    })

    return (
      <div>
        <input valueLink={this.linkState('query')} type="text" placeholder="search" tabIndex="1" />
        <table style={style}>
          <tbody>
            {items
              .filter(item => TodoList.isMatch(query, item))
              .map(item => <ColoredTodoItem key={item.get('id')} item={item} toggleItemResolve={toggleItemResolve} />)}
          </tbody>
        </table>
      </div>
    )
  }
}

TodoList.displayName = 'TodoList'

TodoList.propTypes = {
  items: ImmutablePropTypes.listOf(ImmutablePropTypes.contains({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    isResolved: PropTypes.bool.isRequired
  })).isRequired,
  dispatch: PropTypes.func.isRequired
}

ReactMixin.onClass(TodoList, LinkedStateMixin)

export default Connect(TodoList, nextState => ({
  items: nextState
}))
