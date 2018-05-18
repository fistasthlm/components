import React from 'react'
import { shallow } from 'enzyme'
import InstagramLink from './InstagramLink'

const setup = () => {
  const props = {
    handle: 'peteholmberg'
  }

  return shallow(<InstagramLink {...props} />)
}

describe('Render', () => {
  it('should render component', () => {
    const wrapper = setup()

    expect(wrapper).toMatchSnapshot()
  })
})
