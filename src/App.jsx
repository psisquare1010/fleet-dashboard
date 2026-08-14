import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar'
import FleetOverview from './pages/FleetOverview'
import TruckDetail from './pages/TruckDetail'
import About from './pages/About'

export default function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <main className="app-main">
        <Routes>
          <Route path="/" element={<FleetOverview />} />
          <Route path="/truck/:id" element={<TruckDetail />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}
