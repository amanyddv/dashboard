import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom' // Import the necessary components from 'react-router-dom'
import App from './App.tsx'
import './index.css'
import ServicesNew from './pages/ServicesNew.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/services/new" element={<ServicesNew />} />
      </Routes>
    </Router>
  </StrictMode>,
)
