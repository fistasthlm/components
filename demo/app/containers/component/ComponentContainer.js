import React, { PureComponent } from 'react'
import style from './ComponentContainer.scss'

export default class ComponentContainer extends PureComponent {
  render () {
    return (
      <div className={style.container}>
        <h2>Preview</h2>
        <div className={style.preview}>
        </div>
      </div>
    )
  }
}
