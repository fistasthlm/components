import React from 'react'
import PropTypes from 'prop-types'
import style from './Hamburger.scss'

export default function Hamburger ({toggleMenu}) {
  return (
    <div className={style.hamburgerButton}>
      <button
        id="navbar-toggle-btn-left"
        className={style.toggleButton}
        onClick={toggleMenu}>
        <span className={style.iconBar} />
        <span className={style.iconBar} />
        <span className={style.iconBar} />
      </button>
    </div>
  )
}

Hamburger.propTypes = {
  toggleMenu: PropTypes.func.isRequired
}
