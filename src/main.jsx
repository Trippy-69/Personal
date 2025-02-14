import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Footer from './Footer.jsx'
import LoveStory from './LoveStory.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App/>
    <LoveStory/>
    <Footer/>
  </StrictMode>,
)
