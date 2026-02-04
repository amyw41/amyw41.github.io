import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import './App.css'
import CursorCircle from './components/CursorCircle'
import Taskbar from './components/Taskbar'
import Home from './pages/Home'
import Work from './pages/Work'
import Me from './pages/Me'
import Play from './pages/Play'
import { useState, useEffect } from 'react'

function App() {
  const [isTaskbarVisible, setIsTaskbarVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      
      // Show taskbar when near top
      if (currentScrollY < 50) {
        setIsTaskbarVisible(true)
      } 
      // Hide taskbar when scrolling down
      else if (currentScrollY > lastScrollY) {
        setIsTaskbarVisible(false)
      } 
      // Show taskbar when scrolling up
      else if (currentScrollY < lastScrollY) {
        setIsTaskbarVisible(true)
      }
      
      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  return (
    <BrowserRouter>
      <CursorCircle />
      <Taskbar isVisible={isTaskbarVisible} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Work />} />
        <Route path="/me" element={<Me />} />
        <Route path="/play" element={<Play />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
