import { Link } from 'react-router-dom'
import Router from '../Routes'
import Landing from "./Landing"
import { useEffect, useState } from 'react'
import DayAndLocationBox from './common/DayAndLocationBox'
import DialogueBox from './common/DialogueBox'
import StatusBox from './common/StatusBox'

function Game() {


  return (
    <div className='gameDisplay'>
      <div className='topDisplay'>
        <DayAndLocationBox />
        <StatusBox />
      </div>
      <div className='bottomDisplay'>
        <DialogueBox />
      </div>
    </div>
    
  )
}

export default Game
