'use strict'

import React, { Component, PropTypes } from 'react'
import ImmutablePropTypes from 'react-immutable-proptypes'
import classNames from 'classnames'

import colorizeWrapper from './colorizeWrapper'

/**
* @class TodoItem
*/
class TodoItem extends Component {

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

  /**
   * @method render
   * @return {JSX}
   */
  render () {
    const { item, color } = this.props
    const style = {
      color: color
    }

    const className = classNames({
      'resolved': item.get('isResolved')
    })

    return (<tr style={style} className={className}>
      <td>{item.get('id')}</td>
      <td>{item.get('name')}</td>
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
  color: PropTypes.string.isRequired
}

export default colorizeWrapper(TodoItem, ['#d15f11', '#115bd1', '#d6d641'])
