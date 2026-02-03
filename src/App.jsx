import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import CursorCircle from './components/CursorCircle'
import Taskbar from './components/Taskbar'
import Home from './pages/Home'
import Work from './pages/Work'
import Me from './pages/Me'
import Play from './pages/Play'

function App() {
  return (
    <BrowserRouter>
      <CursorCircle />
      <Taskbar />
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
