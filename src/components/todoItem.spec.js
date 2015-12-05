import React from 'react'
import { shallow } from 'reagent'
import { expect } from 'chai'
import { fromJS } from 'immutable'

import TodoItem from './TodoItem'

describe('<TodoItem />', () => {
  it('should have id and name', () => {
    const props = {
      color: '#ccc',
      item: fromJS({
        id: 1,
        name: 'My Item',
        isResolved: true
      })
    }
    const wrapper = shallow(<TodoItem {...props} />)
    expect(wrapper.prop('style')).to.be.eql({ color: '#ccc' })

    expect(wrapper.find('td').length).to.be.equal(2)
    expect(wrapper.contains(<td>{1}</td>)).to.be.true
    expect(wrapper.contains(<td>{'My Item'}</td>)).to.be.true
  })

  it('should add .resolved class', () => {
    const props = {
      color: '#ccc',
      item: fromJS({
        id: 1,
        name: 'My Item',
        isResolved: true
      })
    }
    const wrapper = shallow(<TodoItem {...props} />)
    expect(wrapper.hasClass('resolved')).to.be.true
  })
})
