import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
  } from 'react-router-dom'
  
  import App from './components/App'
  import Landing from './components/Landing'
  import IntroText from './components/IntroText'
  
  export const Router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Landing />} />
        <Route path="IntroText" element={<IntroText />} />
        <Route path="App" element={<App />} />
      </>
    )
  )

  export default Router