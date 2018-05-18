import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { Map } from 'immutable'
import InstagramLink from 'components/shared/instagramLink/InstagramLink'
import Image from 'components/shared/image/Image'
import style from './Tile.scss'

export default function BikeTile ({bike}) {
  const hasImage = bike.get('images').first()

  return (
    <div className={style.tile}>
      <Link to={`/bike/${bike.get('_id')}`}>
        <div className={style.image}>
          {
            hasImage &&
            <Image
              url={hasImage.get('url')}
              className={style.picture}
              resize={true}
              width="500"
              caption={bike.get('title')} />
          }

        </div>
        <h2 className={bike.title}>
          {bike.get('title')}
        </h2>
      </Link>
      <InstagramLink handle={bike.get('instagram')} />
    </div>
  )
}

BikeTile.propTypes = {
  bike: PropTypes.instanceOf(Map).isRequired
}
