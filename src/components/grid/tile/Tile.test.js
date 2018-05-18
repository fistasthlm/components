import React from 'react'
import { shallow } from 'enzyme'
import { Map, List } from 'immutable'
import Tile from './Tile'

const setup = propOverrides => {
  const props = Object.assign({
    bike: Map({
      images: List(),
      instagram: 'pete',
    }),
  }, propOverrides)

  return shallow(<Tile {...props} />)
}

describe('Render', () => {
  it('should render component', () => {
    const wrapper = setup()

    expect(wrapper).toMatchSnapshot()
  })
})
