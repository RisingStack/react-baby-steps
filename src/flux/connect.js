'use strict'

import React, { Component, PropTypes } from 'react'
import Store from './store'
import Dispatcher from './dispatcher'

export default function connect (ComponentToWrap, selectProps) {
  class Connect extends Component {
    constructor (props, context) {
      super(props)

      this.dispatch = this.dispatch.bind(this)
      this.subscribes = []
      this.state = {
        connectedState: null
      }
    }

    componentWillMount () {
      let globalStateStream = this.context.store.nextStateSubject

      this.subscribes.push(
        globalStateStream.subscribe(nextState => this.setState({
          connectedState: nextState
        }))
      )
    }

    shouldComponentUpdate (nextProps, nextState) {
      return this.state.connectedState !== nextState.connectedState
    }

    componentWillUnmount () {
      this.subscribes.forEach(subscribe => subscribe.dispose())
    }

    dispatch (action) {
      this.context.dispatcher.dispatch(action)
    }

    render () {
      const { dispatch } = this
      const props = typeof selectProps === 'function'
        ? selectProps(this.state.connectedState) : {}

      return <ComponentToWrap {...this.props} {...props} dispatch={dispatch} />
    }
  }

  Connect.displayName = 'Connect'

  Connect.contextTypes = {
    store: PropTypes.instanceOf(Store).isRequired,
    dispatcher: PropTypes.instanceOf(Dispatcher).isRequired
  }

  return Connect
}
