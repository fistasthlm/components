import React from 'react'
import ImmutablePropTypes from 'react-immutable-proptypes'
import BikeTile from './tile/Tile'
import style from './Grid.scss'

export default function Grid ({bikes}) {
  return (
    <div className={style.grid}>
      {
        bikes.size > 0 &&
        bikes.map(bike => {
          return (
            <BikeTile
              key={bike.get('_id')}
              bike={bike} />
          )
        })
      }
    </div>
  )
}

Grid.propTypes = {
  bikes: ImmutablePropTypes.list.isRequired
}
