import React from 'react'
import { fromJS } from 'immutable'
import Grid from 'components/grid/Grid'

export default function Home () {
  const bikes = fromJS([
    {
      title: 'dolan',
      images: [],
    }
  ])

  return (
    <div>
      hello
      <Grid bikes={bikes} />
    </div>
  )
}
