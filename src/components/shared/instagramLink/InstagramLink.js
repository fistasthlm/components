import React from 'react'
import PropTypes from 'prop-types'
import style from './InstagramLink.scss'

export default function InstagramLink ({handle}) {
  const url = 'https://www.instagram.com/' + handle + '/'
  handle = `@${handle}`

  return (
    <a href={url}
       target="_blank"
       className={style.link}>
      {handle}
    </a>
  )
}

InstagramLink.propTypes = {
  handle: PropTypes.string.isRequired,
  className: PropTypes.string,
}
