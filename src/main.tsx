import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
// import { createBrowserRouterRouter } from "react-router-dom"
// import Home from './pages/Home.tsx'


// const router = createBrowserRouterRouter([
//   {path: '/', element: <Home/>},
//   {path: '/', element: <Home/>},
//   {path: '/', element: <Home/>},
//   {path: '/', element: <Home/>},
// ])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
