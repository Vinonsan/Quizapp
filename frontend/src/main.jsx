import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'; 
import './index.css'
import SelectCatagory from './SelectCatagory'
import Questions from './Questions'
import { Routes, Route } from 'react-router-dom'; 

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<SelectCatagory />} />  
        <Route path="/questions/:id" element={<Questions />} />  
      </Routes>
    </Router>
  </StrictMode>,
)
