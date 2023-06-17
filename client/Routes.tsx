import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
  } from 'react-router-dom'
  
  import Game from './components/Game'
  import Landing from './components/Landing'
  import IntroText from './components/IntroText'
  
  export const Router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Landing />} />
        <Route path="intro-text" element={<IntroText />} />
        <Route path="game" element={<Game />} />
      </>
    )
  )

  export default Router