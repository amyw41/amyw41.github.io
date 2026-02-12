import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import './App.css'
import CursorCircle from './components/CursorCircle'
import Taskbar from './components/Taskbar'
import Home from './pages/Home'
import Work from './pages/Work'
import About from './pages/About'
import Play from './pages/Play'
import Cybersea from './pages/Cybersea'
import Relish from './pages/Relish'
import Amazon from './pages/Amazon'
import PlaceholderProject from './pages/PlaceholderProject'
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
        <Route path="/projects/cybersea" element={<Cybersea />} />
        <Route path="/projects/relish" element={<Relish />} />
        <Route path="/projects/amazon" element={<Amazon />} />
        <Route path="/projects/placeholder" element={<PlaceholderProject />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
