import { Routes, Route } from 'react-router-dom'
import Gallery from './pages/Gallery'
import GolfCarts from './pages/GolfCarts'
import MedSpa from './pages/MedSpa'
import CentralCoastCarts from './pages/CentralCoastCarts'
import Automotive from './pages/Automotive'
import AutomotiveLight from './pages/AutomotiveLight'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Gallery />} />
      <Route path="/golf-carts" element={<GolfCarts />} />
      <Route path="/med-spa" element={<MedSpa />} />
      <Route path="/central-coast-carts" element={<CentralCoastCarts />} />
      <Route path="/automotive" element={<Automotive />} />
      <Route path="/automotive-light" element={<AutomotiveLight />} />
    </Routes>
  )
}
