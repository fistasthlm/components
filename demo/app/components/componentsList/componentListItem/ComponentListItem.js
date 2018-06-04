import React from 'react'
import classNames from 'classnames/bind'
import style from './ComponentListItem.scss'

export default function ComponentListItem ({component, active, handleSelectComponent}) {
  const listStyle = classNames({
    [style.componentListItem]: true,
    [style.activeListItem]: active,
  })

  function selectComponent () {
    handleSelectComponent(component)
  }

  return (
    <li
      className={listStyle}
      onClick={selectComponent}>
      {component}
    </li>
  )
}
