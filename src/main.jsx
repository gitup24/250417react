import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App1 from './App.jsx'

createRoot(document.getElementById('root')).render(
    //render envoie App1. Le + gros composant
    //St'rinctMode permet App1
    //lance : npm run dev
    //App1 appelé ds main. Et main appelé ds index.html
  <StrictMode>
    <App1 />
  </StrictMode>,
)
