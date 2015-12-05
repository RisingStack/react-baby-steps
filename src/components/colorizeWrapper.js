'use strict'

import React, { Component } from 'react'

export default function connect (ComponentToWrap, colors) {
  class Colorize extends Component {
    render () {
      const color = colors[Math.floor(Math.random() * colors.length)]

      return <ComponentToWrap {...this.props} color={color} />
    }
  }

  Colorize.displayName = 'Colorize'

  return Colorize
}
