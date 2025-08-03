import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/main.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'
import Research from './components/Research'
import Project from './components/Project'
import Team from './components/Team'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <Home />
    <Research />
    <Project />
    <Team />
    <Footer />
  </StrictMode>,
)
