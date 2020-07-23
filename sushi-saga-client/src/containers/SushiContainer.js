import React, { Fragment } from 'react'
import Sushi from '../components/Sushi'
import MoreButton from '../components/MoreButton'

const SushiContainer = (props) => {
  return (
    <Fragment>
      <div className="belt">
        {
         props.sushis.map(sushi => <Sushi sushi={sushi} eatSushi={props.eatSushi} />)
        }
        <MoreButton />
      </div>
    </Fragment>
  )
}

export default SushiContainer