import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Gallery from './pages/Gallery'
import GolfCarts from './pages/GolfCarts'
import MedSpa from './pages/MedSpa'
import CentralCoastCarts from './pages/CentralCoastCarts'
import Automotive from './pages/Automotive'
import AutomotiveLight from './pages/AutomotiveLight'

const PASS_HASH = '5e3322f4' // simple hash of the password

function simpleHash(str) {
  let h = 0
  for (let i = 0; i < str.length; i++) {
    h = ((h << 5) - h + str.charCodeAt(i)) | 0
  }
  return (h >>> 0).toString(16).slice(0, 8)
}

function PasswordGate({ children }) {
  const [authed, setAuthed] = useState(() => sessionStorage.getItem('dms_auth') === '1')
  const [input, setInput] = useState('')
  const [error, setError] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    if (simpleHash(input) === PASS_HASH) {
      sessionStorage.setItem('dms_auth', '1')
      setAuthed(true)
    } else {
      setError(true)
      setInput('')
      setTimeout(() => setError(false), 2000)
    }
  }

  if (authed) return children

  return (
    <div className="min-h-screen bg-[#00274c] flex items-center justify-center px-6" style={{ fontFamily: 'Outfit, sans-serif' }}>
      <div className="w-full max-w-sm">
        <div className="flex justify-center mb-10">
          <img src="/dms-logo-navy.png" alt="Dapper Market Solutions" className="h-12" style={{ filter: 'brightness(0) invert(1)', opacity: 0.85 }} />
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="password"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Enter password"
              autoFocus
              className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/25 text-sm focus:outline-none transition"
              style={{ borderColor: 'rgba(255,203,5,0.15)' }}
              onFocus={(e) => e.target.style.borderColor = 'rgba(255,203,5,0.4)'}
              onBlur={(e) => e.target.style.borderColor = 'rgba(255,203,5,0.15)'}
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 rounded-xl font-semibold text-sm tracking-wide uppercase transition-all cursor-pointer"
            style={{ background: '#ffcb05', color: '#00274c' }}
            onMouseEnter={(e) => e.target.style.background = '#ffe066'}
            onMouseLeave={(e) => e.target.style.background = '#ffcb05'}
          >
            View Demos
          </button>
          {error && (
            <p className="text-center text-red-400/80 text-sm animate-pulse">
              Incorrect password
            </p>
          )}
        </form>

        <p className="text-center text-white/15 text-xs mt-8">
          Access restricted to authorized viewers
        </p>
      </div>
    </div>
  )
}

export default function App() {
  return (
    <PasswordGate>
      <Routes>
        <Route path="/" element={<Gallery />} />
        <Route path="/golf-carts" element={<GolfCarts />} />
        <Route path="/med-spa" element={<MedSpa />} />
        <Route path="/central-coast-carts" element={<CentralCoastCarts />} />
        <Route path="/automotive" element={<Automotive />} />
        <Route path="/automotive-light" element={<AutomotiveLight />} />
      </Routes>
    </PasswordGate>
  )
}
