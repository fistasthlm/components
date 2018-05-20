import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import ImmutablePropTypes from 'react-immutable-proptypes'
import { NavLink, withRouter } from 'react-router-dom'
import DesktopNavbar from './desktopNavbar/DesktopNavbar'
import MobileNavBar from './mobileNavbar/MobileNavBar'
import Hamburger from './Hamburger/Hamburger'
import Image from '../shared/image/Image'
import style from './NavBar.scss'

class NavBar extends PureComponent {
  constructor (props) {
    super(props)

    this.state = {
      menuToggled: false
    }

    this.toggleMenu = this.toggleMenu.bind(this)
    this.closeHamburgerMenu = this.closeHamburgerMenu.bind(this)
  }

  toggleMenu () {
    this.setState(prevState => ({
      menuToggled: !prevState.menuToggled
    }))
  }

  closeHamburgerMenu () {
    this.setState({
      menuToggled: false
    })
  }

  isMobile () {
    return document.body.clientWidth <= 768
  }

  renderNavigation () {
    const {options} = this.props

    return (
      this.isMobile() ?
        <MobileNavBar
          options={options}
          menuToggled={this.state.menuToggled}
          toggleMenu={this.toggleMenu} />
        :
        <DesktopNavbar
          options={options} />
    )
  }

  render () {
    const {siteDescription, options} = this.props
    const logoUrl = 'https://images.contentful.com/' +
      'x1j0zkbk3421/4wgAQ4qPFKIyyeoUImGYko/66256a7ec6c12ea8f8d1d88bbcafe6ea/fistasthlm-logotype.png'

    return (
      <div className={style.navContent}>
        <div
          className={style.leftDiv}
          onClick={this.closeHamburgerMenu}>
          <NavLink to="/">
            <Image
              url={logoUrl}
              className={style.logo}
              caption="fista sthlm"
              resize={true}
              width="200"
              height="80" />
          </NavLink>
          {
            siteDescription &&
            <span
              className={style.siteDescription}>
              {siteDescription}
            </span>
          }
        </div>
        <div className={style.rightDiv}>
          {
            this.isMobile() &&
            <Hamburger toggleMenu={this.toggleMenu} />
          }
        </div>
        {
          options &&
          this.renderNavigation()
        }
      </div>
    )
  }
}

NavBar.propTypes = {
  onLogout: PropTypes.func.isRequired,
  siteDescription: PropTypes.string,
  options: ImmutablePropTypes.map.isRequired,
}

export default withRouter(NavBar)
