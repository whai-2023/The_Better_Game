import { Link } from 'react-router-dom'
import Router from '../Routes'
import Landing from "./Landing"
import { useEffect, useState } from 'react'
import DayAndLocationBox from './common/DayAndLocationBox'
import DialogueBox from './common/DialogueBox'
import StatusBox from './common/StatusBox'
import { RouterProvider } from 'react-router-dom'
// import title_music from '/audio/title_music.mp3?url'
import ReactAudioPlayer from 'react-audio-player'

function App() {

  return (
    <>
      <RouterProvider router={Router} />
      <ReactAudioPlayer
          src={'/audio/title_music.mp3'}
          // autoPlay
          //TODO: Make the volume quieter than currently is, also hide controls
          controls
      />
    </>
  )
}

export default App
