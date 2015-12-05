import { Component, PropTypes, Children } from 'react'

export default class Provider extends Component {
  getChildContext () {
    return {
      appId: this.props.appId
    }
  }

  render () {
    const { children } = this.props

    // Return the only child in children. Throws otherwise.
    return Children.only(children)
  }
}

Provider.displayName = 'Provider'

Provider.propTypes = {
  appId: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired
}
Provider.childContextTypes = {
  appId: PropTypes.string.isRequired
}
