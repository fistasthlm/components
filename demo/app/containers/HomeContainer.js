import React from 'react'
import { fromJS } from 'immutable'
import Grid from 'components/grid/Grid'

export default function Home () {
  const bikes = fromJS([
    {
      title: 'dolan',
      instagram: 'peteholmberg',
      images: [{
        url: 'https://cdn.filestackcontent.com/cMGicHSdm7Sb4p7uWCwh',
      }],
    }
  ])

  return (
    <div className="container" style={{backgroundColor: 'black'}}>
      <Grid bikes={bikes} />
    </div>
  )
}
