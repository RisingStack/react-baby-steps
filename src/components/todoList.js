'use strict'

import React, { Component, PropTypes } from 'react'
import ImmutablePropTypes from 'react-immutable-proptypes'

import TodoItem from './todoItem'

/**
* @class TodoList
*/
class TodoList extends Component {

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

    return (<table style={style}>
      <tbody>
        {items.map(item => <TodoItem key={item.get('id')} item={item} />)}
      </tbody>
    </table>)
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
