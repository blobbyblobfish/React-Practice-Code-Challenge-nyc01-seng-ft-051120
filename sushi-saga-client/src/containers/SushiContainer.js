import React, { Fragment } from 'react'
import Sushi from '../components/Sushi'
import MoreButton from '../components/MoreButton'

const SushiContainer = (props) => {
  return (
    <Fragment>
      <div className="belt">
        {
          props.selectedSushis.map(sushi => <Sushi key={sushi.id} eaten={props.eaten} sushi={sushi} eatSushi={props.eatSushi} />)
        }
        <MoreButton more={props.more}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer