'use strict'

import React, { Component, PropTypes } from 'react'
import ImmutablePropTypes from 'react-immutable-proptypes'

import TodoItem from './todoItem'

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
    this.onQueryChanged = this.onQueryChanged.bind(this)
  }

  static isMatch (query, item) {
    if (!query) {
      return true
    }

    return item.get('name').match(new RegExp(query, 'i'))
  }

  onQueryChanged (ev) {
    this.setState({
      query: ev.target.value
    })
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

    const { items } = this.props
    const { query } = this.state

    return (
      <div>
        <input onChange={this.onQueryChanged} type="text" placeholder="search" tabIndex="1" />
        <table style={style}>
          <tbody>
            {items
              .filter(item => TodoList.isMatch(query, item))
              .map(item => <TodoItem key={item.get('id')} item={item} />)}
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
  })).isRequired
}

export default TodoList
