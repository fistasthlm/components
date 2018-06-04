import React from 'react'
import ComponentContainer from 'containers/component/ComponentContainer'
import ComponentList from 'components/componentsList/ComponentList'
import style from './HomeContainer.scss'

export default function HomeContainer () {
  return (
    <div className={style.container}>
      <ComponentList />
      <ComponentContainer />
    </div>
  )
}
