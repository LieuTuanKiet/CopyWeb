import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'
import './styles/main.css'
import Home from './pages/HomePage'
import Research from './pages/ResearchPage'
import Project from './pages/ProjectPage'
import Team from './pages/TeamPage'
import Error from './pages/ErrorPage'
import Contact from './pages/ContactPage'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/Research" element={<Research />}/>
        <Route path="/Project" element={<Project />}/>
        <Route path="/Team" element={<Team />}/>
        <Route path="/Contact" element={<Contact />}/>

        <Route path="*" element={<Error />}/>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
