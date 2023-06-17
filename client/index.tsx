import { createRoot } from 'react-dom/client'
import { Router } from './Routes'
import { RouterProvider } from 'react-router-dom'

document.addEventListener('DOMContentLoaded', () => {
  createRoot(document.getElementById('app') as HTMLElement).render(<RouterProvider router={Router} />)
})
