import { useState } from 'react'
import { Link } from 'react-router-dom'

/* ── Featured Models ── */
const MODELS = [
  {
    name: 'Aether GT',
    type: 'Grand Touring Sedan',
    price: '$89,900',
    badge: 'Flagship',
    image: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?w=800&q=80',
    specs: {
      Drivetrain: 'Dual Motor AWD',
      Power: '400 hp',
      'Acceleration': '0-60 in 3.9s',
      Range: '320-mile range',
      Wheels: '21" forged wheels',
      Suspension: 'Air suspension',
    },
    features: [
      '15.6" OLED Display',
      'Meridian Audio 21-Speaker',
      'Wireless CarPlay',
      'OTA Updates',
      'Panoramic Glass Roof',
      'Heated/Ventilated Seats',
    ],
  },
  {
    name: 'Aether LX',
    type: 'Luxury Crossover',
    price: '$94,500',
    badge: 'Most Popular',
    image: 'https://images.unsplash.com/photo-1619767886558-efdc259cde1a?w=800&q=80',
    specs: {
      Drivetrain: 'Tri Motor AWD',
      Power: '450 hp',
      'Acceleration': '0-60 in 3.6s',
      Range: '290-mile range',
      Wheels: '22" forged wheels',
      Suspension: 'Adaptive air suspension',
    },
    features: [
      '17" Curved Display',
      'Surround Sound',
      'Wireless Charging Pad',
      'Semi-Autonomous Driving',
      'Ambient Lighting',
      'Massage Seats',
    ],
  },
  {
    name: 'Aether RS',
    type: 'Performance Coupe',
    price: '$112,000',
    badge: 'Limited Edition',
    image: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800&q=80',
    specs: {
      Drivetrain: 'Dual Motor RWD',
      Power: '500 hp',
      'Acceleration': '0-60 in 3.2s',
      Range: '260-mile range',
      Wheels: '20" carbon fiber wheels',
      Suspension: 'Sport suspension',
    },
    features: [
      'Head-Up Display',
      'Track Mode',
      'Carbon Fiber Interior',
      'Launch Control',
      'Active Aero',
      'Alcantara Steering',
    ],
  },
]

const PILLARS = [
  {
    title: 'Concierge Delivery',
    description: 'White-glove delivery to your door. Your vehicle arrives on your schedule, detailed and charged.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.2">
        <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-4 0a1 1 0 01-1-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 01-1 1" />
      </svg>
    ),
  },
  {
    title: 'Over-the-Air Updates',
    description: 'Your vehicle improves over time. New features, performance enhancements, and refinements delivered wirelessly.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.2">
        <path d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
      </svg>
    ),
  },
  {
    title: 'Dedicated Advisor',
    description: 'A personal luxury consultant who understands your preferences and anticipates your needs.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.2">
        <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
  },
  {
    title: 'Complimentary Maintenance',
    description: '4 years / 50,000 miles of scheduled maintenance included. Because ownership should be effortless.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.2">
        <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
]

const REVIEWS = [
  {
    name: 'Michael T.',
    location: 'Newport Beach',
    text: 'The GT exceeded every expectation. The craftsmanship is on another level \u2014 every detail is considered.',
  },
  {
    name: 'Sarah L.',
    location: 'Beverly Hills',
    text: 'Trading my German sedan for the LX was the best decision. The technology alone is years ahead.',
  },
  {
    name: 'James R.',
    location: 'Malibu',
    text: 'The RS on Pacific Coast Highway is an experience money can\'t describe. Pure driving perfection.',
  },
]

export default function AutomotiveLight() {
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '', phone: '', model: '' })
  const [submitted, setSubmitted] = useState(false)
  const [specCart, setSpecCart] = useState(null)

  function handleSubmit(e) {
    e.preventDefault()
    setSubmitted(true)
  }

  function updateField(field, value) {
    setForm(prev => ({ ...prev, [field]: value }))
  }

  const bronze = '#8B7355'
  const charcoal = '#3D3D3D'
  const textPrimary = '#1A1A18'
  const textSecondary = 'rgba(0,0,0,0.5)'
  const textTertiary = 'rgba(0,0,0,0.3)'
  const bg = '#FAFAF8'
  const cardBg = '#FFFFFF'
  const altBg = '#F3F2EF'
  const borderLight = 'rgba(0,0,0,0.06)'
  const borderInput = 'rgba(0,0,0,0.08)'

  return (
    <div className="min-h-screen" style={{ fontFamily: '"Outfit", sans-serif', background: bg, color: textPrimary }}>

      {/* ── Nav ── */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl" style={{ background: 'rgba(250,250,248,0.92)', borderBottom: `1px solid ${borderLight}` }}>
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="text-base font-bold tracking-[0.2em] uppercase" style={{ fontFamily: '"Outfit", sans-serif', color: charcoal }}>
            Aether Motors
          </span>
          <div className="hidden sm:flex items-center gap-8 text-[13px] font-medium uppercase tracking-[0.15em]" style={{ color: textTertiary }}>
            <a href="#models" className="hover:text-[#1A1A18] transition">Models</a>
            <a href="#experience" className="hover:text-[#1A1A18] transition">Experience</a>
            <a href="#about" className="hover:text-[#1A1A18] transition">About</a>
            <a href="#contact"
              className="px-5 py-2 transition"
              style={{ background: charcoal, color: '#fff' }}
              onMouseEnter={(e) => e.target.style.background = '#555555'}
              onMouseLeave={(e) => e.target.style.background = charcoal}>
              Schedule Test Drive
            </a>
          </div>
          <a href="#contact" className="sm:hidden px-4 py-2 text-[13px] font-medium uppercase tracking-wider"
             style={{ background: charcoal, color: '#fff' }}>
            Test Drive
          </a>
        </div>
      </nav>

      {/* ── Hero ── */}
      <section className="relative pt-16 min-h-screen flex items-center overflow-hidden">
        {/* Background image with light overlay */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1617788138017-80ad40651399?w=1600&q=80"
            alt=""
            className="w-full h-full object-cover"
            style={{ filter: 'brightness(1.1) contrast(0.95) saturate(0.7)' }}
          />
          <div className="absolute inset-0" style={{
            background: 'linear-gradient(90deg, rgba(250,250,248,0.97) 0%, rgba(250,250,248,0.88) 45%, rgba(250,250,248,0.4) 75%, rgba(250,250,248,0.15) 100%)',
          }} />
        </div>

        {/* Subtle bronze glow */}
        <div className="absolute top-1/3 left-0 w-[600px] h-[600px] rounded-full opacity-[0.04]"
             style={{ background: `radial-gradient(circle, ${bronze} 0%, transparent 70%)` }} />

        <div className="relative w-full max-w-6xl mx-auto px-6 py-24">
          <p className="animate-fade-up text-[13px] font-medium uppercase tracking-[0.35em] mb-8"
             style={{ fontFamily: '"Outfit", sans-serif', color: bronze }}>
            Electric Luxury &mdash; Southern California
          </p>

          <h1 className="animate-fade-up delay-100 text-5xl sm:text-7xl lg:text-8xl font-extrabold uppercase leading-[0.95] tracking-tight mb-6"
              style={{ fontFamily: '"Outfit", sans-serif', letterSpacing: '-0.04em', color: textPrimary }}>
            The Future,
            <br />
            <span style={{ color: charcoal }}>Refined.</span>
          </h1>

          <p className="animate-fade-up delay-200 text-lg sm:text-xl font-light leading-relaxed mb-3 max-w-lg"
             style={{ color: textSecondary }}>
            Experience electric luxury redefined.
            <br />
            Zero emissions. Infinite sophistication.
          </p>

          <p className="animate-fade-up delay-200 text-[15px] font-medium uppercase tracking-[0.2em] mb-10"
             style={{ color: charcoal }}>
            Starting at $89,900
          </p>

          <div className="animate-fade-up delay-300 flex flex-wrap gap-4 mb-16">
            <a href="#models"
              className="inline-flex items-center gap-3 text-[13px] font-semibold uppercase tracking-[0.2em] px-8 py-4 transition"
              style={{ background: charcoal, color: '#fff' }}
              onMouseEnter={(e) => e.target.style.background = '#555555'}
              onMouseLeave={(e) => e.target.style.background = charcoal}>
              Explore Models
              <svg className="w-4 h-4" fill="none" viewBox="0 0 16 16" stroke="currentColor" strokeWidth="1.5">
                <path d="M3 8h10M9 4l4 4-4 4" />
              </svg>
            </a>
            <a href="#contact"
              className="inline-flex items-center gap-3 text-[13px] font-medium uppercase tracking-[0.2em] px-8 py-4 transition border"
              style={{ borderColor: 'rgba(0,0,0,0.15)', color: textSecondary }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = charcoal; e.currentTarget.style.color = textPrimary }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(0,0,0,0.15)'; e.currentTarget.style.color = textSecondary }}>
              Schedule Test Drive
            </a>
          </div>

          {/* Trust stats */}
          <div className="animate-fade-up delay-400 flex flex-wrap gap-12">
            {[
              ['0-60 in 3.9s', 'Performance'],
              ['300+ Mile', 'Range'],
              ['Level 2', 'Autonomy'],
            ].map(([val, label]) => (
              <div key={label}>
                <div className="text-2xl sm:text-3xl font-bold tracking-tight" style={{ fontFamily: '"Outfit", sans-serif', color: textPrimary }}>{val}</div>
                <div className="text-[13px] uppercase tracking-[0.2em] mt-1" style={{ color: textTertiary }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Divider line ── */}
      <div className="max-w-6xl mx-auto px-6">
        <div style={{ height: '1px', background: `linear-gradient(90deg, transparent, ${bronze}33, transparent)` }} />
      </div>

      {/* ── Featured Models ── */}
      <section id="models" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <p className="text-[13px] font-medium uppercase tracking-[0.35em] mb-4"
               style={{ fontFamily: '"Outfit", sans-serif', color: bronze }}>
              The Collection
            </p>
            <h2 className="text-3xl sm:text-5xl font-extrabold uppercase tracking-tight"
                style={{ fontFamily: '"Outfit", sans-serif', color: textPrimary }}>
              Choose Your <span style={{ color: charcoal }}>Aether</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {MODELS.map((model) => (
              <div key={model.name}
                className="group flex flex-col overflow-hidden transition-all duration-500 hover:shadow-xl hover:shadow-black/8"
                style={{ background: cardBg, border: `1px solid ${borderLight}` }}>

                {/* Image */}
                <div className="relative aspect-[16/10] overflow-hidden" style={{ background: '#f0f0ee' }}>
                  <img src={model.image} alt={model.name}
                    className="w-full h-full object-cover group-hover:scale-[1.05] transition-transform duration-700"
                    style={{ filter: 'brightness(0.95) contrast(1.05)' }} />
                  {model.badge && (
                    <div className="absolute top-3 left-3 text-[11px] font-bold uppercase tracking-[0.2em] px-3 py-1"
                         style={{ background: charcoal, color: '#fff' }}>
                      {model.badge}
                    </div>
                  )}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                       style={{ background: 'linear-gradient(180deg, transparent 50%, rgba(250,250,248,0.3) 100%)' }} />
                </div>

                {/* Info */}
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <p className="text-[12px] font-medium uppercase tracking-[0.2em] mb-1" style={{ color: bronze }}>
                        {model.type}
                      </p>
                      <h3 className="text-xl font-bold uppercase tracking-wide" style={{ fontFamily: '"Outfit", sans-serif', color: textPrimary }}>
                        {model.name}
                      </h3>
                    </div>
                    <div className="text-right">
                      <div className="text-xl font-bold" style={{ color: charcoal }}>{model.price}</div>
                    </div>
                  </div>

                  {/* Key specs -- compact grid */}
                  <div className="grid grid-cols-3 gap-2 mb-4 py-4"
                       style={{ borderTop: `1px solid ${borderLight}`, borderBottom: `1px solid ${borderLight}` }}>
                    {Object.entries(model.specs).slice(0, 6).map(([key, val]) => (
                      <div key={key}>
                        <div className="text-[10px] font-medium uppercase tracking-[0.12em] mb-0.5" style={{ color: textTertiary }}>{key}</div>
                        <div className="text-[12px] font-medium" style={{ color: textSecondary }}>{val}</div>
                      </div>
                    ))}
                  </div>

                  {/* Feature tags */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {model.features.slice(0, 3).map((f) => (
                      <span key={f} className="text-[11px] font-light px-2 py-0.5"
                            style={{ background: 'rgba(139,115,85,0.06)', color: textSecondary, border: '1px solid rgba(139,115,85,0.1)' }}>
                        {f}
                      </span>
                    ))}
                    {model.features.length > 3 && (
                      <span className="text-[11px] font-light px-2 py-0.5"
                            style={{ color: textTertiary }}>
                        +{model.features.length - 3} more
                      </span>
                    )}
                  </div>

                  {/* CTA */}
                  <button
                    onClick={() => setSpecCart(model)}
                    className="block w-full mt-auto py-3 text-center text-[13px] font-semibold uppercase tracking-[0.2em] transition cursor-pointer"
                    style={{ background: 'transparent', color: charcoal, border: `1px solid ${charcoal}` }}
                    onMouseEnter={(e) => { e.target.style.background = charcoal; e.target.style.color = '#fff' }}
                    onMouseLeave={(e) => { e.target.style.background = 'transparent'; e.target.style.color = charcoal }}>
                    View Full Specs
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Divider ── */}
      <div className="max-w-6xl mx-auto px-6">
        <div style={{ height: '1px', background: `linear-gradient(90deg, transparent, ${bronze}33, transparent)` }} />
      </div>

      {/* ── Experience Section ── */}
      <section id="experience" className="py-24 px-6" style={{ background: altBg }}>
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <p className="text-[13px] font-medium uppercase tracking-[0.35em] mb-4"
               style={{ fontFamily: '"Outfit", sans-serif', color: bronze }}>
              Beyond the Drive
            </p>
            <h2 className="text-3xl sm:text-5xl font-extrabold uppercase tracking-tight"
                style={{ fontFamily: '"Outfit", sans-serif', color: textPrimary }}>
              The Aether <span style={{ color: charcoal }}>Experience</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PILLARS.map((pillar, i) => (
              <div key={pillar.title}
                className="animate-fade-up group p-8 transition-all duration-500 hover:translate-y-[-4px] hover:shadow-lg hover:shadow-black/5"
                style={{
                  animationDelay: `${i * 100}ms`,
                  background: cardBg,
                  border: `1px solid ${borderLight}`,
                }}>
                <div className="mb-6 transition-colors duration-300" style={{ color: bronze }}>
                  {pillar.icon}
                </div>
                <h3 className="text-[14px] font-bold uppercase tracking-[0.15em] mb-3"
                    style={{ fontFamily: '"Outfit", sans-serif', color: textPrimary }}>
                  {pillar.title}
                </h3>
                <p className="text-[14px] font-light leading-relaxed" style={{ color: textSecondary }}>
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Divider ── */}
      <div className="max-w-6xl mx-auto px-6">
        <div style={{ height: '1px', background: `linear-gradient(90deg, transparent, ${bronze}33, transparent)` }} />
      </div>

      {/* ── Reviews ── */}
      <section id="about" className="py-24 px-6" style={{ background: altBg }}>
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <p className="text-[13px] font-medium uppercase tracking-[0.35em] mb-4"
               style={{ fontFamily: '"Outfit", sans-serif', color: bronze }}>
              Owner Testimonials
            </p>
            <h2 className="text-3xl sm:text-5xl font-extrabold uppercase tracking-tight"
                style={{ fontFamily: '"Outfit", sans-serif', color: textPrimary }}>
              In Their <span style={{ color: charcoal }}>Words</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-3 gap-6">
            {REVIEWS.map((r) => (
              <div key={r.name} className="p-8 flex flex-col"
                   style={{ background: cardBg, border: `1px solid ${borderLight}` }}>
                {/* Bronze quote mark */}
                <div className="text-4xl font-serif leading-none mb-4" style={{ color: bronze, opacity: 0.4 }}>&ldquo;</div>
                <p className="text-base font-light leading-relaxed mb-6 flex-1" style={{ color: textSecondary }}>
                  {r.text}
                </p>
                <div style={{ borderTop: `1px solid ${borderLight}`, paddingTop: '1rem' }}>
                  <div className="text-[14px] font-semibold" style={{ color: textPrimary }}>{r.name}</div>
                  <div className="text-[13px] font-light" style={{ color: bronze, opacity: 0.7 }}>{r.location}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Divider ── */}
      <div className="max-w-6xl mx-auto px-6">
        <div style={{ height: '1px', background: `linear-gradient(90deg, transparent, ${bronze}33, transparent)` }} />
      </div>

      {/* ── Lead Capture Form — THE DARK SECTION ── */}
      <section id="contact" className="px-6 py-24 relative" style={{ background: '#1A1A18' }}>
        {/* Subtle dot pattern */}
        <div className="absolute inset-0 opacity-[0.015]" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, #fff 0.5px, transparent 0)',
          backgroundSize: '40px 40px',
        }} />

        {/* Bronze ambient glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] opacity-[0.04]"
             style={{ background: `radial-gradient(ellipse, ${bronze} 0%, transparent 70%)` }} />

        <div className="relative max-w-xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-[13px] font-medium uppercase tracking-[0.35em] mb-5"
               style={{ fontFamily: '"Outfit", sans-serif', color: bronze }}>
              By Invitation
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold uppercase leading-tight tracking-tight mb-4"
                style={{ fontFamily: '"Outfit", sans-serif', color: '#fff' }}>
              Schedule Your
              <br />
              <span style={{ color: bronze }}>Private Showing</span>
            </h2>
            <p className="text-base font-light leading-relaxed max-w-md mx-auto" style={{ color: 'rgba(255,255,255,0.35)' }}>
              Experience Aether in person. A dedicated advisor will curate your visit.
            </p>
          </div>

          {submitted ? (
            <div className="text-center py-16">
              <div className="w-16 h-16 rounded-full mx-auto mb-6 flex items-center justify-center"
                   style={{ background: `rgba(139,115,85,0.1)`, border: `1px solid ${bronze}33` }}>
                <svg className="w-7 h-7" style={{ color: bronze }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-bold uppercase tracking-wide text-white mb-3"
                  style={{ fontFamily: '"Outfit", sans-serif' }}>
                Request Received
              </h3>
              <p className="text-base font-light" style={{ color: 'rgba(255,255,255,0.4)' }}>
                A dedicated Aether advisor will contact you within 24 hours to arrange your private showing.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="relative p-8 sm:p-10" style={{ border: `1px solid ${bronze}22` }}>
                {/* Corner brackets */}
                <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2" style={{ borderColor: bronze }} />
                <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2" style={{ borderColor: bronze }} />
                <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2" style={{ borderColor: bronze }} />
                <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2" style={{ borderColor: bronze }} />

                <div className="space-y-6">
                  <div className="grid grid-cols-2 gap-5">
                    {[['firstName', 'First Name', 'text', 'Alexander'], ['lastName', 'Last Name', 'text', 'Hamilton']].map(([field, label, type, ph]) => (
                      <div key={field}>
                        <label className="block text-[12px] font-semibold uppercase tracking-[0.2em] mb-2"
                               style={{ fontFamily: '"Outfit", sans-serif', color: 'rgba(255,255,255,0.3)' }}>{label}</label>
                        <input type={type} required value={form[field]}
                          onChange={(e) => updateField(field, e.target.value)}
                          className="w-full bg-transparent border-b text-white text-base font-light pb-2 focus:outline-none transition placeholder-white/15"
                          style={{ borderColor: 'rgba(255,255,255,0.08)' }}
                          onFocus={(e) => e.target.style.borderColor = bronze}
                          onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.08)'}
                          placeholder={ph} />
                      </div>
                    ))}
                  </div>

                  <div>
                    <label className="block text-[12px] font-semibold uppercase tracking-[0.2em] mb-2"
                           style={{ fontFamily: '"Outfit", sans-serif', color: 'rgba(255,255,255,0.3)' }}>Email</label>
                    <input type="email" required value={form.email}
                      onChange={(e) => updateField('email', e.target.value)}
                      className="w-full bg-transparent border-b text-white text-base font-light pb-2 focus:outline-none transition placeholder-white/15"
                      style={{ borderColor: 'rgba(255,255,255,0.08)' }}
                      onFocus={(e) => e.target.style.borderColor = bronze}
                      onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.08)'}
                      placeholder="alex@example.com" />
                  </div>

                  <div>
                    <label className="block text-[12px] font-semibold uppercase tracking-[0.2em] mb-2"
                           style={{ fontFamily: '"Outfit", sans-serif', color: 'rgba(255,255,255,0.3)' }}>Phone</label>
                    <input type="tel" required value={form.phone}
                      onChange={(e) => updateField('phone', e.target.value)}
                      className="w-full bg-transparent border-b text-white text-base font-light pb-2 focus:outline-none transition placeholder-white/15"
                      style={{ borderColor: 'rgba(255,255,255,0.08)' }}
                      onFocus={(e) => e.target.style.borderColor = bronze}
                      onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.08)'}
                      placeholder="(310) 555-0100" />
                  </div>

                  <div>
                    <label className="block text-[12px] font-semibold uppercase tracking-[0.2em] mb-2"
                           style={{ fontFamily: '"Outfit", sans-serif', color: 'rgba(255,255,255,0.3)' }}>Model Interest</label>
                    <select value={form.model}
                      onChange={(e) => updateField('model', e.target.value)}
                      className="w-full bg-transparent border-b text-base font-light pb-2 focus:outline-none transition appearance-none cursor-pointer"
                      style={{ borderColor: 'rgba(255,255,255,0.08)', color: form.model ? '#fff' : 'rgba(255,255,255,0.15)' }}
                      onFocus={(e) => e.target.style.borderColor = bronze}
                      onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.08)'}>
                      <option value="" style={{ background: '#1A1A18', color: '#888' }}>Select a model...</option>
                      <option value="gt" style={{ background: '#1A1A18', color: '#fff' }}>Aether GT &mdash; Grand Touring Sedan</option>
                      <option value="lx" style={{ background: '#1A1A18', color: '#fff' }}>Aether LX &mdash; Luxury Crossover</option>
                      <option value="rs" style={{ background: '#1A1A18', color: '#fff' }}>Aether RS &mdash; Performance Coupe</option>
                      <option value="unsure" style={{ background: '#1A1A18', color: '#fff' }}>Not Sure Yet</option>
                    </select>
                  </div>

                  <button type="submit"
                    className="w-full mt-4 py-4 text-[13px] font-bold uppercase tracking-[0.25em] transition cursor-pointer"
                    style={{ fontFamily: '"Outfit", sans-serif', background: bronze, color: '#fff' }}
                    onMouseEnter={(e) => e.target.style.background = '#A08868'}
                    onMouseLeave={(e) => e.target.style.background = bronze}>
                    Request Private Showing
                  </button>
                </div>
              </div>
              <p className="text-center text-[13px] font-light mt-5" style={{ color: 'rgba(255,255,255,0.2)' }}>
                Your information is kept strictly confidential.
              </p>
            </form>
          )}
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="px-6 py-10" style={{ background: bg, borderTop: `1px solid ${borderLight}` }}>
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-[14px] font-bold uppercase tracking-[0.2em]"
                style={{ fontFamily: '"Outfit", sans-serif', color: charcoal }}>
            Aether Motors
          </span>
          <span className="text-[13px] font-light" style={{ color: textTertiary }}>
            Southern California
          </span>
          <span className="text-[13px] font-light italic" style={{ color: 'rgba(0,0,0,0.15)' }}>
            The Future, Refined.
          </span>
        </div>
      </footer>

      {/* ── Spec Modal ── */}
      {specCart && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4"
             onClick={() => setSpecCart(null)}>
          <div className="absolute inset-0 bg-black/40 backdrop-blur-md" />
          <div className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto shadow-2xl"
               style={{ background: cardBg, border: `1px solid ${borderLight}` }}
               onClick={(e) => e.stopPropagation()}>

            {/* Modal header with image */}
            <div className="relative aspect-[16/10] overflow-hidden" style={{ background: '#f0f0ee' }}>
              <img src={specCart.image} alt={specCart.name}
                   className="w-full h-full object-cover"
                   style={{ filter: 'brightness(0.95) contrast(1.05)' }} />
              {specCart.badge && (
                <div className="absolute top-3 left-3 text-[11px] font-bold uppercase tracking-[0.2em] px-3 py-1"
                     style={{ background: charcoal, color: '#fff' }}>
                  {specCart.badge}
                </div>
              )}
              <button onClick={() => setSpecCart(null)}
                      className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center text-lg transition cursor-pointer"
                      style={{ background: 'rgba(255,255,255,0.85)', color: 'rgba(0,0,0,0.5)', border: `1px solid ${borderLight}` }}
                      onMouseEnter={(e) => e.currentTarget.style.color = textPrimary}
                      onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(0,0,0,0.5)'}>
                &times;
              </button>
              <div className="absolute bottom-0 left-0 right-0 h-16"
                   style={{ background: `linear-gradient(transparent, ${cardBg})` }} />
            </div>

            {/* Name + price */}
            <div className="px-6 pt-5 pb-4 flex items-start justify-between"
                 style={{ borderBottom: `1px solid ${borderLight}` }}>
              <div>
                <p className="text-[12px] font-medium uppercase tracking-[0.2em] mb-1" style={{ color: bronze }}>
                  {specCart.type}
                </p>
                <h3 className="text-xl font-bold uppercase tracking-wide" style={{ fontFamily: '"Outfit", sans-serif', color: textPrimary }}>
                  {specCart.name}
                </h3>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold" style={{ color: charcoal }}>{specCart.price}</div>
              </div>
            </div>

            {/* Full specs */}
            <div className="px-6 py-5">
              <h4 className="text-[12px] font-bold uppercase tracking-[0.2em] mb-4"
                  style={{ fontFamily: '"Outfit", sans-serif', color: bronze }}>
                Specifications
              </h4>
              <div className="space-y-0">
                {Object.entries(specCart.specs).map(([label, value]) => (
                  <div key={label} className="flex py-3" style={{ borderBottom: `1px solid ${borderLight}` }}>
                    <span className="w-28 shrink-0 text-[12px] font-medium uppercase tracking-wide"
                          style={{ color: textTertiary }}>
                      {label}
                    </span>
                    <span className="text-[14px] font-medium" style={{ color: textSecondary }}>
                      {value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Features */}
            <div className="px-6 pb-5">
              <h4 className="text-[12px] font-bold uppercase tracking-[0.2em] mb-4"
                  style={{ fontFamily: '"Outfit", sans-serif', color: bronze }}>
                Standard Features
              </h4>
              <div className="flex flex-wrap gap-2">
                {specCart.features.map((f) => (
                  <span key={f} className="text-[13px] font-light px-3 py-1.5"
                        style={{ background: 'rgba(139,115,85,0.05)', color: textSecondary, border: `1px solid rgba(139,115,85,0.1)` }}>
                    {f}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="px-6 pb-6 pt-2">
              <a href="#contact"
                 onClick={() => setSpecCart(null)}
                 className="block w-full py-3.5 text-center text-[13px] font-bold uppercase tracking-[0.2em] transition"
                 style={{ fontFamily: '"Outfit", sans-serif', background: charcoal, color: '#fff' }}
                 onMouseEnter={(e) => e.target.style.background = '#555555'}
                 onMouseLeave={(e) => e.target.style.background = charcoal}>
                Schedule Test Drive
              </a>
            </div>
          </div>
        </div>
      )}

      {/* ── Back to Gallery ── */}
      <Link to="/"
        className="fixed bottom-5 left-5 z-50 text-[13px] font-medium uppercase tracking-[0.1em] px-4 py-2 backdrop-blur-xl transition flex items-center gap-2"
        style={{ background: 'rgba(255,255,255,0.85)', color: textTertiary, border: `1px solid ${borderLight}` }}
        onMouseEnter={(e) => e.currentTarget.style.color = charcoal}
        onMouseLeave={(e) => e.currentTarget.style.color = textTertiary}>
        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 14 14" stroke="currentColor" strokeWidth="1.5">
          <path d="M11 7H3M6 4L3 7l3 3" />
        </svg>
        Demos
      </Link>
    </div>
  )
}
