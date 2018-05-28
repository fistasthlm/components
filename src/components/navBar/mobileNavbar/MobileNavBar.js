import React, { PureComponent } from 'react'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'
import ImmutablePropTypes from 'react-immutable-proptypes'
import classNames from 'classnames/bind'
import style from './MobileNavbar.scss'

export default class MobileNavBar extends PureComponent {
  executeAction (action) {
    action()
    this.props.toggleMenu()
  }

  render () {
    const {menuToggled, options, toggleMenu} = this.props

    const hamburgerStyle = classNames({
      [style.hamburgerMenu]: true,
      [style.hamburgerMenuOpen]: menuToggled
    })

    const links = options.get('links')
    const actions = options.get('actions')

    return (
      <div className={hamburgerStyle}>
        {
          links && links.map((link, index) => {
            return (
              <div
                key={`${index}-${link.get('to')}`}
                className={style.menuItem}>
                <NavLink
                  exact={true}
                  className={style.navItem}
                  activeClassName={style.active}
                  onClick={toggleMenu}
                  to={link.get('to')}>
                  {link.get('route')}
                </NavLink>
              </div>
            )
          })
        }
        {
          actions && actions.map((action, index) => {
            return (
              <div
                key={`${index}-${action.get('route')}`}
                className={style.menuItem}>
                <div
                  className={style.navItem}
                  onClick={() => this.executeAction(action.get('action'))}>
                  {action.get('name')}
                </div>
              </div>
            )
          })
        }
      </div>
    )
  }
}

MobileNavBar.propTypes = {
  toggleMenu: PropTypes.func.isRequired,
  options: ImmutablePropTypes.map.isRequired,
  menuToggled: PropTypes.bool.isRequired,
}
