'use strict'

import React, { Component, PropTypes } from 'react'

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
        {items.map(item => <TodoItem key={item.id} item={item} />)}
      </tbody>
    </table>)
  }
}

TodoList.displayName = 'TodoList'

TodoList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    isResolved: PropTypes.bool.isRequired
  })).isRequired
}

export default TodoList
