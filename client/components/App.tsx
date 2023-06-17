import { Link } from 'react-router-dom'
import Router from '../Routes'
import Landing from "./Landing"
import { useEffect, useState } from 'react'
import DayAndLocationBox from './common/DayAndLocationBox'
import DialogueBox from './common/DialogueBox'
import StatusBox from './common/StatusBox'
import { RouterProvider } from 'react-router-dom'

function App() {


  return (
    <RouterProvider router={Router} />
  )
}

export default App
