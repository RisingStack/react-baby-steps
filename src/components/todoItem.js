'use strict'

import React, { Component, PropTypes } from 'react'
import ImmutablePropTypes from 'react-immutable-proptypes'
import classNames from 'classnames'

/**
* @class TodoItem
*/
class TodoItem extends Component {
  constructor () {
    super()

    this.toggleResolved = this.toggleResolved.bind(this)
  }

  // Lifecycle methods
  componentWillMount () {}
  componentDidMount () {}

  componentWillReceiveProps (nextProps) {}
  shouldComponentUpdate (nextProps, nextState) {
    // reference comparison is cheap
    const isDirty = nextProps.item !== this.props.item
    console.log(`shouldComponentUpdate id: ${nextProps.item.get('id')}, dirty: ${isDirty}`)

    return isDirty
  }

  componentWillUpdate (nextProps, nextState) {}
  componentDidUpdate (nextProps, nextState) {}

  componentWillUnmount () {}

  toggleResolved () {
    const { toggleItemResolve, item } = this.props

    toggleItemResolve(item)
  }

  /**
   * @method render
   * @return {JSX}
   */
  render () {
    const { item, color } = this.props
    const { toggleResolved } = this
    const style = {
      color: color
    }

    const className = classNames({
      'resolved': item.get('isResolved')
    })

    return (<tr style={style} className={className}>
      <td>{item.get('id')}</td>
      <td>{item.get('name')}</td>
      <td>
        <button onClick={toggleResolved}>{'Resolve'}</button>
      </td>
    </tr>)
  }
}

TodoItem.displayName = 'TodoItem'

TodoItem.propTypes = {
  item: ImmutablePropTypes.contains({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    isResolved: PropTypes.bool.isRequired
  }).isRequired,
  color: PropTypes.string.isRequired,
  toggleItemResolve: PropTypes.func.isRequired
}

export default TodoItem
