import React from 'react'
import { shallow } from 'enzyme'
import Navbar from './NavBar'

jest.mock('react-router-dom', () => ({
  withRouter: params => params,
  NavLink: params => params,
}))

const setup = propOverrides => {
  const props = Object.assign({
    onLogout: jest.fn(),
    siteDescription: ''
  }, propOverrides)

  return shallow(<Navbar />)
}

describe('Render', () => {
  it('should render component', () => {
    const wrapper = setup()

    expect(wrapper).toMatchSnapshot()
  })

  it('should render with site description', () => {
    const wrapper = setup({
      siteDescription: 'components'
    })

    expect(wrapper).toMatchSnapshot()
  })
})

describe('State', () => {
  it('should toggle menu', () => {
    const wrapper = setup()

    wrapper.instance().toggleMenu()

    expect(wrapper.state().menuToggled).toEqual(true)
  })

  it('should close hamburger', () => {
    const wrapper = setup()

    wrapper.state().menuToggled = true
    wrapper.instance().closeHamburgerMenu()

    expect(wrapper.state().menuToggled).toEqual(false)
  })
})
