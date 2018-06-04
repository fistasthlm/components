import React from 'react'
import style from './Header.scss'

export default function Header () {
  return (
    <header className={style.header}>
      <img width={120} src="https://cdn.filestackcontent.com/F2KlzKAvRgWmOKDWOGsR" />
      <span className={style.subtitle}>components</span>
    </header>
  )
}
