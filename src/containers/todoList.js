'use strict'

import React, { Component, PropTypes } from 'react'
import ImmutablePropTypes from 'react-immutable-proptypes'
import LinkedStateMixin from 'react-addons-linked-state-mixin'
import ReactMixin from 'react-mixin'
import { connect } from 'react-redux'

import actions from '../actions'
import colorizeWrapper from '../components/colorizeWrapper'
import TodoItem from '../components/todoItem'

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

    const { items, itemToggleResolved } = this.props
    const { query } = this.state

    const toggleItemResolve = item => itemToggleResolved(item)

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
  itemToggleResolved: PropTypes.func.isRequired
}

ReactMixin.onClass(TodoList, LinkedStateMixin)

function mapStateToProps (state) {
  return {
    items: state.items
  }
}

function mapDispatchToProps (dispatch) {
  const { itemToggleResolved } = actions.items

  return {
    itemToggleResolved: item => dispatch(itemToggleResolved(item.get('id')))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
