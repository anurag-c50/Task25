import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import NoteState from './contextApi/note/NoteState.jsx'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NoteState>
    <App />
    </NoteState>
  </StrictMode>,
)
