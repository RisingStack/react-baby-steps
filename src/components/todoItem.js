'use strict'

import React, { Component, PropTypes } from 'react'
import classNames from 'classnames'

/**
* @class TodoItem
*/
class TodoItem extends Component {

  /**
   * @method render
   * @return {JSX}
   */
  render () {
    const { item } = this.props

    const className = classNames({
      'resolved': item.isResolved
    })

    return (<tr className={className}>
      <td>{item.id}</td>
      <td>{item.name}</td>
    </tr>)
  }
}

TodoItem.displayName = 'TodoItem'

TodoItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    isResolved: PropTypes.bool.isRequired
  }).isRequired
}

export default TodoItem
