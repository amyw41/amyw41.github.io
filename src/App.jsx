import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import './App.css'
import CursorCircle from './components/CursorCircle'
import Taskbar from './components/Taskbar'
import Home from './pages/Home'
import Work from './pages/Work'
import About from './pages/About'
import Play from './pages/Play'
import { useState, useEffect } from 'react'

function App() {
  return (
    <BrowserRouter>
      <CursorCircle />
      <Taskbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Work />} />
        <Route path="/about" element={<About />} />
        <Route path="/play" element={<Play />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
