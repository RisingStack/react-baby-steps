import React from 'react'
import { shallow } from 'enzyme'
import { expect } from 'chai'
import { fromJS } from 'immutable'

import TodoItem from './todoItem'

describe('<TodoItem />', () => {
  let props

  beforeEach(function () {
    props = {
      color: '#ccc',
      item: fromJS({
        id: 1,
        name: 'My Item',
        isResolved: true
      }),
      toggleItemResolve: this.sandbox.spy()
    }
  })

  it('should have id and name', () => {
    const wrapper = shallow(<TodoItem {...props} />)
    expect(wrapper.prop('style')).to.be.eql({ color: '#ccc' })

    expect(wrapper.find('td').length).to.be.equal(3)
    expect(wrapper.contains(<td>{1}</td>)).to.be.true
    expect(wrapper.contains(<td>{'My Item'}</td>)).to.be.true
  })

  it('should add .resolved class', () => {
    const wrapper = shallow(<TodoItem {...props} />)
    expect(wrapper.hasClass('resolved')).to.be.true
  })

  it('simulates click events', function () {
    const wrapper = shallow(<TodoItem {...props} />)
    wrapper.find('button').simulate('click')

    expect(props.toggleItemResolve).to.be.calledOnce
    expect(props.toggleItemResolve).to.be.calledWith(props.item)
  })
})
