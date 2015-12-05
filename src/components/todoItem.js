'use strict'

import React, { Component, PropTypes } from 'react'
import classNames from 'classnames'

/**
* @class TodoItem
*/
class TodoItem extends Component {

  // Lifecycle methods
  componentWillMount () {}
  componentDidMount () {}

  componentWillReceiveProps (nextProps) {}
  shouldComponentUpdate (nextProps, nextState) {
    // opject comparison is expensive
    const isDirty = nextProps.item.id !== this.props.item.id ||
      nextProps.item.name !== this.props.item.name ||
      nextProps.item.isResolved !== this.props.item.isResolved

    console.log(`shouldComponentUpdate id: ${nextProps.item.id}, dirty: ${isDirty}`)

    return isDirty
  }

  componentWillUpdate (nextProps, nextState) {}
  componentDidUpdate (nextProps, nextState) {}

  componentWillUnmount () {}

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
