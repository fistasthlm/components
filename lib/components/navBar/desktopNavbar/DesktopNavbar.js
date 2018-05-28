import React from 'react'
import ImmutablePropTypes from 'react-immutable-proptypes'
import { NavLink } from 'react-router-dom'
import style from './DesktopNavbar.scss'

export default function DesktopNavbar ({options}) {
  return (
    <div className={style.desktopNavbar}>
      {
        options.get('links') && options.get('links').map((link, index) => {
          return (
            <NavLink
              key={`${index}-${link.get('to')}`}
              exact={true}
              className={style.navItem}
              activeClassName={style.active}
              to={link.get('to')}>
              {link.get('route')}
            </NavLink>
          )
        })
      }
      {
        options.get('actions') && options.get('actions').map((action, index) => {
          return (
            <div
              key={`${index}-${action.get('name')}`}
              className={style.navItem}
              onClick={action.get('action')}>
              {action.get('name')}
            </div>
          )
        })
      }
    </div>
  )
}

DesktopNavbar.propTypes = {
  options: ImmutablePropTypes.map.isRequired,
}
