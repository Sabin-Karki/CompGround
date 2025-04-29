import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.tsx'
import navbar from './components/navbar'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <navbar />
  </StrictMode>,
)
