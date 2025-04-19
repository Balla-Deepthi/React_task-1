import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import LandingPage from './Components/LandingPage.jsx'
// import App,{BringPizza,Offline} from './App.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LandingPage/>

  </StrictMode>,
)
