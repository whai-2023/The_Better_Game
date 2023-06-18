import { Link } from 'react-router-dom'
import Router from '../Routes'
import Landing from "./Landing"
import { useEffect, useState } from 'react'
import DayAndLocationBox from './common/DayAndLocationBox'
import DialogueBox from './common/DialogueBox'
import StatusBox from './common/StatusBox'
import { RouterProvider } from 'react-router-dom'
import title_music from '../public/audio/title_music.mp3'

function App() {

const titleMusic = function playTitleMusic() {
    new Audio(title_music).play()
  }

  return (
    <>
      <RouterProvider router={Router} />
      <>{titleMusic}</>
    </>
  )
}

export default App
