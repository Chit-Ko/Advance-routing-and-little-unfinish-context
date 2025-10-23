import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import Them from './Them.jsx'

createRoot(document.getElementById('root')).render(
  <Them>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  
  </Them>
)
