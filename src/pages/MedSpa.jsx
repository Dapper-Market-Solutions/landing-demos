import { useState } from 'react'
import { Link } from 'react-router-dom'

/* ── Services ── */
const SERVICES = [
  {
    name: 'Botox & Dysport',
    category: 'Injectables',
    description: 'Smooth fine lines and wrinkles with precision neurotoxin treatments. Natural-looking results that let your confidence shine through.',
    duration: '15–30 min',
    startingAt: '$12/unit',
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.2">
        <path d="M14 3v22M14 3l-3 4M14 3l3 4" />
        <circle cx="14" cy="14" r="3" />
      </svg>
    ),
  },
  {
    name: 'Dermal Fillers',
    category: 'Injectables',
    description: 'Restore volume and enhance contours with premium hyaluronic acid fillers. Sculpt cheeks, lips, and jawline with artistry.',
    duration: '30–45 min',
    startingAt: '$650/syringe',
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.2">
        <path d="M8 20c0-6 6-8 6-14M20 20c0-6-6-8-6-14" />
        <path d="M6 20h16a2 2 0 01-2 4H8a2 2 0 01-2-4z" />
      </svg>
    ),
  },
  {
    name: 'Hydrafacial',
    category: 'Facials',
    description: 'Deep cleanse, exfoliate, and hydrate in one luxurious treatment. Instantly radiant skin with zero downtime.',
    duration: '45–60 min',
    startingAt: '$199',
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.2">
        <path d="M14 4c-3 5-8 8-8 14a8 8 0 0016 0c0-6-5-9-8-14z" />
      </svg>
    ),
  },
  {
    name: 'Laser Skin Resurfacing',
    category: 'Laser',
    description: 'Advanced laser technology to improve texture, tone, and clarity. Reduce sun damage, scarring, and signs of aging.',
    duration: '30–60 min',
    startingAt: '$350',
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.2">
        <circle cx="14" cy="14" r="6" />
        <path d="M14 2v4M14 22v4M2 14h4M22 14h4" />
      </svg>
    ),
  },
  {
    name: 'Body Contouring',
    category: 'Body',
    description: 'Non-invasive fat reduction and skin tightening. Sculpt your silhouette with clinically proven technology.',
    duration: '45–60 min',
    startingAt: '$500',
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.2">
        <path d="M10 4c-2 4-4 8-4 14s2 6 4 6 4-2 4-6-2-10-4-14z" />
        <path d="M18 4c2 4 4 8 4 14s-2 6-4 6-4-2-4-6 2-10 4-14z" />
      </svg>
    ),
  },
  {
    name: 'Chemical Peels',
    category: 'Facials',
    description: 'Medical-grade peels to reveal fresh, luminous skin beneath. Customized to your unique skin type and goals.',
    duration: '30–45 min',
    startingAt: '$150',
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.2">
        <path d="M6 14c0-6 3.6-10 8-10s8 4 8 10-3.6 10-8 10-8-4-8-10z" />
        <path d="M10 14c0-3.5 1.8-6 4-6s4 2.5 4 6" />
      </svg>
    ),
  },
]

const REVIEWS = [
  {
    name: 'Michelle T.',
    service: 'Botox & Fillers',
    text: "The team at Aura truly listens. My results look so natural — my friends just think I look 'refreshed.' That's exactly what I wanted.",
    stars: 5,
  },
  {
    name: 'Jessica L.',
    service: 'Hydrafacial',
    text: "I've been going monthly for six months and my skin has never looked better. The atmosphere is so calming, it feels like a retreat every time.",
    stars: 5,
  },
  {
    name: 'Danielle R.',
    service: 'Laser Treatment',
    text: "After years of dealing with sun damage, I finally feel confident without makeup. The staff made me feel completely at ease throughout the process.",
    stars: 5,
  },
]

/* ── Color palette from brand sheet ── */
const C = {
  navy: '#586e89',
  blue: '#5c8ba3',
  teal: '#a4cacb',
  beige: '#d3d0c4',
  sage: '#a5a396',
  cream: '#f4f2ed',
  dark: '#3a4d61',
  white: '#faf9f6',
}

const FAQS = [
  {
    q: 'Is Botox safe?',
    a: 'Yes. Botox has been FDA-approved since 2002 and is one of the most extensively studied medical aesthetic treatments. Our board-certified practitioners have performed thousands of treatments safely.',
  },
  {
    q: 'How long do results last?',
    a: 'Botox typically lasts 3-4 months. Dermal fillers can last 6-18 months depending on the product and treatment area. We\'ll discuss expected timelines during your consultation.',
  },
  {
    q: 'Is there any downtime?',
    a: 'Most treatments require little to no downtime. You may experience mild redness or swelling that resolves within hours. Many clients return to their normal activities immediately.',
  },
  {
    q: 'What should I expect at my first visit?',
    a: 'Your complimentary consultation includes a thorough assessment of your concerns and goals, a personalized treatment plan, and transparent pricing. There\'s never any pressure to proceed same-day.',
  },
  {
    q: 'Do you offer payment plans?',
    a: 'Yes, we offer flexible financing options including CareCredit and in-house payment plans to make treatments accessible. Ask about our membership program for additional savings.',
  },
]

export default function MedSpa() {
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '', phone: '', service: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [openFaq, setOpenFaq] = useState(null)

  function handleSubmit(e) {
    e.preventDefault()
    setSubmitted(true)
  }

  function updateField(field, value) {
    setForm(prev => ({ ...prev, [field]: value }))
  }

  return (
    <div className="min-h-screen" style={{ fontFamily: '"Outfit", sans-serif', background: C.white }}>

      {/* ── Nav ── */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl" style={{ background: 'rgba(250,249,246,0.92)' }}>
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            {/* Leaf icon */}
            <svg className="w-7 h-7" viewBox="0 0 32 32" fill="none" stroke={C.blue} strokeWidth="1.3">
              <path d="M16 4c-4 4-10 10-10 18M16 4c4 4 10 10 10 18M16 4v22" />
              <path d="M10 16c2-1 4-1 6 0s4 1 6 0" />
            </svg>
            <span className="text-lg tracking-[0.08em] font-light" style={{ fontFamily: '"Cormorant Garamond", Georgia, serif', color: C.navy }}>
              AURA
            </span>
            <span className="text-[12px] uppercase tracking-[0.2em] font-light" style={{ color: C.sage }}>
              Health & Spa
            </span>
          </div>
          <div className="hidden sm:flex items-center gap-8 text-[13px] font-medium uppercase tracking-[0.12em]" style={{ color: C.sage }}>
            <a href="#services" className="hover:opacity-70 transition">Services</a>
            <a href="#reviews" className="hover:opacity-70 transition">Reviews</a>
            <a href="#book" className="px-5 py-2 text-white transition hover:opacity-90" style={{ background: C.blue }}>
              Book Now
            </a>
          </div>
          <a href="#book" className="sm:hidden px-4 py-2 text-white text-[13px] font-medium uppercase tracking-wider" style={{ background: C.blue }}>
            Book
          </a>
        </div>
        <div className="h-px" style={{ background: `${C.beige}40` }} />
      </nav>

      {/* ── Hero ── */}
      <section className="relative pt-16 overflow-hidden min-h-[90vh] flex items-center">
        {/* Soft gradient background */}
        <div className="absolute inset-0" style={{
          background: `linear-gradient(160deg, ${C.navy} 0%, ${C.blue} 35%, ${C.teal} 70%, ${C.beige} 100%)`,
        }} />
        {/* Noise texture overlay */}
        <div className="absolute inset-0 opacity-[0.04]" style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\'/%3E%3C/svg%3E")',
        }} />
        {/* Soft radial glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full"
             style={{ background: `radial-gradient(circle, rgba(255,255,255,0.12) 0%, transparent 60%)` }} />

        <div className="relative w-full max-w-6xl mx-auto px-6 py-24">
          <div className="max-w-2xl">
            <p className="animate-fade-up text-[13px] font-medium uppercase tracking-[0.3em] mb-6" style={{ color: 'rgba(255,255,255,0.5)' }}>
              Aesthetic Wellness &mdash; Redefined
            </p>
            <h1 className="animate-fade-up delay-100 text-5xl sm:text-7xl font-light text-white leading-[1.05] tracking-tight mb-6"
                style={{ fontFamily: '"Cormorant Garamond", Georgia, serif' }}>
              Authentically
              <br />
              <em className="font-medium" style={{ color: C.beige }}>You.</em>
            </h1>
            <p className="animate-fade-up delay-200 text-base sm:text-lg font-light leading-relaxed mb-10 max-w-lg"
               style={{ color: 'rgba(255,255,255,0.65)' }}>
              Personalized care meets expert artistry. From subtle enhancements to
              transformative treatments, we deliver natural results that let your
              true beauty shine.
            </p>

            <div className="animate-fade-up delay-300 flex flex-wrap gap-4 mb-12">
              <a href="#book"
                className="inline-flex items-center gap-3 text-[13px] font-medium uppercase tracking-[0.15em] px-8 py-4 text-white transition hover:opacity-90"
                style={{ background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(20px)', border: '1px solid rgba(255,255,255,0.2)' }}>
                Book a Consultation
                <svg className="w-4 h-4" fill="none" viewBox="0 0 16 16" stroke="currentColor" strokeWidth="1.5">
                  <path d="M3 8h10M9 4l4 4-4 4" />
                </svg>
              </a>
              <a href="#services"
                className="inline-flex items-center gap-3 text-[13px] font-medium uppercase tracking-[0.15em] px-8 py-4 transition"
                style={{ color: 'rgba(255,255,255,0.5)' }}>
                View Services
              </a>
            </div>

            {/* Trust signals */}
            <div className="animate-fade-up delay-400 flex flex-wrap gap-8">
              {[
                ['5-Star', 'Google Rating'],
                ['500+', 'Happy Clients'],
                ['Board Certified', 'Practitioners'],
              ].map(([val, label]) => (
                <div key={label}>
                  <div className="text-lg font-medium text-white">{val}</div>
                  <div className="text-[13px] uppercase tracking-[0.15em]" style={{ color: 'rgba(255,255,255,0.35)' }}>{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Intro Strip ── */}
      <section className="py-16 px-6" style={{ background: C.cream }}>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-base sm:text-lg font-light leading-relaxed" style={{ color: C.navy }}>
            At Aura Health & Spa, our mission is to combine personalized care with expert education
            to deliver results that are authentically <em style={{ fontFamily: '"Cormorant Garamond", Georgia, serif', fontWeight: 500 }}>You. Redefined.</em>
          </p>
        </div>
      </section>

      {/* ── Services ── */}
      <section id="services" className="py-20 px-6" style={{ background: C.white }}>
        <div className="max-w-6xl mx-auto">
          <div className="mb-14">
            <p className="text-[13px] font-medium uppercase tracking-[0.2em] mb-3" style={{ color: C.blue }}>
              Our Treatments
            </p>
            <h2 className="text-3xl sm:text-5xl font-light tracking-tight mb-3"
                style={{ fontFamily: '"Cormorant Garamond", Georgia, serif', color: C.navy }}>
              Expert Care, <em className="font-medium">Beautiful Results</em>
            </h2>
            <p className="text-base font-light max-w-xl" style={{ color: C.sage }}>
              Each treatment is tailored to your unique goals with the highest standards of safety and artistry.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {SERVICES.map((svc, i) => (
              <div key={svc.name}
                className="group p-7 transition-all duration-300 hover:shadow-lg hover:shadow-black/[0.03] cursor-pointer"
                style={{
                  background: i % 2 === 0 ? C.cream : C.white,
                  border: `1px solid ${C.beige}60`,
                }}>
                <div className="flex items-start justify-between mb-5">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center"
                       style={{ background: `${C.teal}30`, color: C.blue }}>
                    {svc.icon}
                  </div>
                  <span className="text-[12px] font-medium uppercase tracking-[0.15em] px-3 py-1"
                        style={{ background: `${C.teal}25`, color: C.blue }}>
                    {svc.category}
                  </span>
                </div>
                <h3 className="text-xl font-medium mb-2" style={{ fontFamily: '"Cormorant Garamond", Georgia, serif', color: C.navy }}>
                  {svc.name}
                </h3>
                <p className="text-base font-light leading-relaxed mb-5" style={{ color: C.sage }}>
                  {svc.description}
                </p>
                <div className="flex items-center justify-between pt-4" style={{ borderTop: `1px solid ${C.beige}50` }}>
                  <div className="text-[13px] uppercase tracking-[0.1em] font-light" style={{ color: C.sage }}>
                    {svc.duration}
                  </div>
                  <div className="text-base font-medium" style={{ color: C.navy }}>
                    {svc.startingAt}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <a href="#book"
              className="inline-flex items-center gap-3 text-[13px] font-medium uppercase tracking-[0.15em] px-8 py-4 transition hover:opacity-90"
              style={{ background: C.blue, color: '#fff' }}>
              Book a Free Consultation
              <svg className="w-4 h-4" fill="none" viewBox="0 0 16 16" stroke="currentColor" strokeWidth="1.5">
                <path d="M3 8h10M9 4l4 4-4 4" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* ── Before & After Results ── */}
      <section className="py-20 px-6" style={{ background: C.white }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-[13px] font-medium uppercase tracking-[0.2em] mb-3" style={{ color: C.blue }}>
              Real Transformations
            </p>
            <h2 className="text-3xl sm:text-5xl font-light tracking-tight mb-3"
                style={{ fontFamily: '"Cormorant Garamond", Georgia, serif', color: C.navy }}>
              See the <em className="font-medium">Difference</em>
            </h2>
            <p className="text-base font-light max-w-xl mx-auto" style={{ color: C.sage }}>
              Actual client results from our board-certified practitioners. Individual results may vary.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { treatment: 'Botox & Dysport', area: 'Forehead & Crow\'s Feet', timeframe: '2 weeks post-treatment' },
              { treatment: 'Dermal Fillers', area: 'Lip Enhancement', timeframe: '1 week post-treatment' },
              { treatment: 'Hydrafacial', area: 'Full Face Rejuvenation', timeframe: 'Same-day results' },
            ].map((item) => (
              <div key={item.treatment} className="overflow-hidden" style={{ border: `1px solid ${C.beige}60` }}>
                {/* Before/After placeholder with split design */}
                <div className="relative aspect-[4/3] overflow-hidden" style={{ background: C.cream }}>
                  <div className="absolute inset-0 flex">
                    {/* Before side */}
                    <div className="w-1/2 relative flex items-center justify-center"
                         style={{ background: `linear-gradient(135deg, ${C.beige}40, ${C.cream})` }}>
                      <div className="text-center">
                        <div className="w-16 h-16 rounded-full mx-auto mb-3 flex items-center justify-center"
                             style={{ background: `${C.sage}25` }}>
                          <svg className="w-7 h-7" viewBox="0 0 28 28" fill="none" stroke={C.sage} strokeWidth="1">
                            <circle cx="14" cy="11" r="5" />
                            <path d="M6 24c0-5 3.6-8 8-8s8 3 8 8" />
                          </svg>
                        </div>
                        <span className="text-[11px] font-medium uppercase tracking-[0.15em]" style={{ color: C.sage }}>Before</span>
                      </div>
                    </div>
                    {/* Center divider */}
                    <div className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2" style={{ background: `${C.beige}` }}>
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-7 h-7 rounded-full flex items-center justify-center"
                           style={{ background: C.blue, border: `2px solid ${C.white}` }}>
                        <svg className="w-3.5 h-3.5" viewBox="0 0 14 14" fill="none" stroke="white" strokeWidth="1.5">
                          <path d="M4 7h6M7 4l3 3-3 3" />
                        </svg>
                      </div>
                    </div>
                    {/* After side */}
                    <div className="w-1/2 relative flex items-center justify-center"
                         style={{ background: `linear-gradient(135deg, ${C.cream}, ${C.teal}20)` }}>
                      <div className="text-center">
                        <div className="w-16 h-16 rounded-full mx-auto mb-3 flex items-center justify-center"
                             style={{ background: `${C.teal}30` }}>
                          <svg className="w-7 h-7" viewBox="0 0 28 28" fill="none" stroke={C.blue} strokeWidth="1">
                            <circle cx="14" cy="11" r="5" />
                            <path d="M6 24c0-5 3.6-8 8-8s8 3 8 8" />
                            <path d="M11 11l2 2 4-4" strokeWidth="1.5" />
                          </svg>
                        </div>
                        <span className="text-[11px] font-medium uppercase tracking-[0.15em]" style={{ color: C.blue }}>After</span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Treatment info */}
                <div className="p-5">
                  <h3 className="text-lg font-medium mb-1" style={{ fontFamily: '"Cormorant Garamond", Georgia, serif', color: C.navy }}>
                    {item.treatment}
                  </h3>
                  <p className="text-[13px] font-light mb-2" style={{ color: C.sage }}>
                    {item.area}
                  </p>
                  <span className="text-[12px] font-medium uppercase tracking-[0.1em] px-2.5 py-1 inline-block"
                        style={{ background: `${C.teal}20`, color: C.blue }}>
                    {item.timeframe}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-[13px] font-light mt-8" style={{ color: C.sage }}>
            * Results shown are representative. Actual photos available during your consultation.
          </p>
        </div>
      </section>

      {/* ── Why Aura ── */}
      <section className="py-20 px-6" style={{ background: C.cream }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-[13px] font-medium uppercase tracking-[0.2em] mb-3" style={{ color: C.blue }}>
              The Aura Difference
            </p>
            <h2 className="text-3xl sm:text-5xl font-light tracking-tight"
                style={{ fontFamily: '"Cormorant Garamond", Georgia, serif', color: C.navy }}>
              Why Our Clients <em className="font-medium">Trust Us</em>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Board Certified',
                desc: 'All treatments performed by licensed, board-certified aesthetic professionals with years of advanced training.',
                icon: <path d="M12 2l3 6h6l-5 4 2 6-6-4-6 4 2-6-5-4h6z" />,
              },
              {
                title: 'Natural Results',
                desc: 'We believe in enhancing your natural beauty, not changing who you are. Subtle refinement is our specialty.',
                icon: <path d="M12 3c-3 4-8 7-8 13a8 8 0 0016 0c0-6-5-9-8-13z" />,
              },
              {
                title: 'Luxury Experience',
                desc: 'From the moment you walk in, every detail is designed to make you feel pampered, relaxed, and cared for.',
                icon: <><path d="M4 12h16M8 8h8M6 16h12" /><circle cx="12" cy="12" r="9" /></>,
              },
              {
                title: 'Personalized Plans',
                desc: 'No two faces are alike. Your treatment plan is customized to your unique anatomy, goals, and lifestyle.',
                icon: <><path d="M12 3v18M3 12h18" /><circle cx="12" cy="12" r="4" /></>,
              },
            ].map((item) => (
              <div key={item.title} className="text-center">
                <div className="w-14 h-14 rounded-full mx-auto mb-5 flex items-center justify-center"
                     style={{ background: `${C.teal}30` }}>
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke={C.blue} strokeWidth="1.2">
                    {item.icon}
                  </svg>
                </div>
                <h3 className="text-lg font-medium mb-2" style={{ fontFamily: '"Cormorant Garamond", Georgia, serif', color: C.navy }}>
                  {item.title}
                </h3>
                <p className="text-base font-light leading-relaxed" style={{ color: C.sage }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Reviews ── */}
      <section id="reviews" className="py-20 px-6" style={{ background: C.white }}>
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-12 gap-4">
            <div>
              <p className="text-[13px] font-medium uppercase tracking-[0.2em] mb-3" style={{ color: C.blue }}>
                Client Stories
              </p>
              <h2 className="text-3xl sm:text-5xl font-light tracking-tight"
                  style={{ fontFamily: '"Cormorant Garamond", Georgia, serif', color: C.navy }}>
                Real Results, <em className="font-medium">Real Confidence</em>
              </h2>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex gap-0.5">
                {[1,2,3,4,5].map(i => (
                  <svg key={i} className="w-5 h-5" style={{ color: C.blue }} viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-base font-medium" style={{ color: C.navy }}>5.0 / 5</span>
              <span className="text-[13px]" style={{ color: C.sage }}>on Google</span>
            </div>
          </div>

          <div className="grid sm:grid-cols-3 gap-5">
            {REVIEWS.map((r) => (
              <div key={r.name} className="p-7" style={{ background: C.cream, border: `1px solid ${C.beige}50` }}>
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: r.stars }).map((_, j) => (
                    <svg key={j} className="w-4 h-4" style={{ color: C.blue }} viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-base font-light leading-relaxed mb-5" style={{ color: C.navy }}>
                  "{r.text}"
                </p>
                <div className="pt-4" style={{ borderTop: `1px solid ${C.beige}50` }}>
                  <div className="text-base font-medium" style={{ color: C.navy }}>{r.name}</div>
                  <div className="text-[13px] font-light" style={{ color: C.sage }}>{r.service}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQs ── */}
      <section className="py-20 px-6" style={{ background: C.cream }}>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[13px] font-medium uppercase tracking-[0.2em] mb-3" style={{ color: C.blue }}>
              Common Questions
            </p>
            <h2 className="text-3xl sm:text-5xl font-light tracking-tight"
                style={{ fontFamily: '"Cormorant Garamond", Georgia, serif', color: C.navy }}>
              Frequently <em className="font-medium">Asked</em>
            </h2>
          </div>

          <div className="space-y-3">
            {FAQS.map((faq, i) => {
              const isOpen = openFaq === i
              return (
                <div key={i} style={{ border: `1px solid ${C.beige}60`, background: C.white }}>
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                    className="w-full flex items-center justify-between px-6 py-5 text-left transition">
                    <span className="text-base font-medium pr-4" style={{ fontFamily: '"Cormorant Garamond", Georgia, serif', color: C.navy }}>
                      {faq.q}
                    </span>
                    <svg className={`w-4 h-4 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                         fill="none" viewBox="0 0 16 16" stroke={C.blue} strokeWidth="1.5">
                      <path d="M4 6l4 4 4-4" />
                    </svg>
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-5 animate-fade-in">
                      <p className="text-base font-light leading-relaxed" style={{ color: C.sage }}>
                        {faq.a}
                      </p>
                    </div>
                  )}
                </div>
              )
            })}
          </div>

          <div className="text-center mt-10">
            <a href="#book"
              className="inline-flex items-center gap-3 text-[13px] font-medium uppercase tracking-[0.15em] px-8 py-4 text-white transition hover:opacity-90 rounded-full"
              style={{ background: C.blue }}>
              Book Your Consultation
              <svg className="w-4 h-4" fill="none" viewBox="0 0 16 16" stroke="currentColor" strokeWidth="1.5">
                <path d="M3 8h10M9 4l4 4-4 4" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* ── Lead Capture Form ── */}
      <section id="book" className="px-6 py-24 relative" style={{ background: C.navy }}>
        {/* Soft texture */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, #fff 0.5px, transparent 0)',
          backgroundSize: '40px 40px',
        }} />

        <div className="relative max-w-xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[13px] font-medium uppercase tracking-[0.2em] mb-5" style={{ color: C.teal }}>
              Begin Your Journey
            </p>
            <h2 className="text-3xl sm:text-5xl font-light text-white leading-tight tracking-tight mb-4"
                style={{ fontFamily: '"Cormorant Garamond", Georgia, serif' }}>
              Book Your <em className="font-medium" style={{ color: C.beige }}>Free Consultation</em>
            </h2>
            <p className="text-base font-light leading-relaxed" style={{ color: 'rgba(255,255,255,0.45)' }}>
              Share a few details and our team will reach out within 24 hours to
              craft your personalized treatment plan.
            </p>
          </div>

          {submitted ? (
            <div className="text-center py-16">
              <div className="w-16 h-16 rounded-full mx-auto mb-6 flex items-center justify-center"
                   style={{ background: `${C.teal}25` }}>
                <svg className="w-7 h-7" style={{ color: C.teal }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl text-white mb-2" style={{ fontFamily: '"Cormorant Garamond", Georgia, serif' }}>
                Thank You
              </h3>
              <p className="text-base font-light" style={{ color: 'rgba(255,255,255,0.45)' }}>
                We'll be in touch within 24 hours to schedule your consultation.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="relative p-8 sm:p-10" style={{ border: `1px solid ${C.blue}30` }}>
                {/* Decorative corner accents */}
                <div className="absolute top-0 left-0 w-5 h-5 border-t-2 border-l-2" style={{ borderColor: C.teal }} />
                <div className="absolute top-0 right-0 w-5 h-5 border-t-2 border-r-2" style={{ borderColor: C.teal }} />
                <div className="absolute bottom-0 left-0 w-5 h-5 border-b-2 border-l-2" style={{ borderColor: C.teal }} />
                <div className="absolute bottom-0 right-0 w-5 h-5 border-b-2 border-r-2" style={{ borderColor: C.teal }} />

                <div className="space-y-5">
                  <div className="grid grid-cols-2 gap-4">
                    {[['firstName', 'First Name', 'text', 'Jane'], ['lastName', 'Last Name', 'text', 'Smith']].map(([field, label, type, ph]) => (
                      <div key={field}>
                        <label className="block text-[13px] font-medium uppercase tracking-[0.15em] text-white/40 mb-2">{label}</label>
                        <input type={type} required value={form[field]}
                          onChange={(e) => updateField(field, e.target.value)}
                          className="w-full bg-transparent border-b text-white text-base font-light pb-2 focus:outline-none transition placeholder-white/20"
                          style={{ borderColor: 'rgba(255,255,255,0.1)' }}
                          onFocus={(e) => e.target.style.borderColor = C.teal}
                          onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
                          placeholder={ph} />
                      </div>
                    ))}
                  </div>
                  <div>
                    <label className="block text-[13px] font-medium uppercase tracking-[0.15em] text-white/40 mb-2">Email</label>
                    <input type="email" required value={form.email}
                      onChange={(e) => updateField('email', e.target.value)}
                      className="w-full bg-transparent border-b text-white text-base font-light pb-2 focus:outline-none transition placeholder-white/20"
                      style={{ borderColor: 'rgba(255,255,255,0.1)' }}
                      onFocus={(e) => e.target.style.borderColor = C.teal}
                      onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
                      placeholder="jane@example.com" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[13px] font-medium uppercase tracking-[0.15em] text-white/40 mb-2">Phone</label>
                      <input type="tel" required value={form.phone}
                        onChange={(e) => updateField('phone', e.target.value)}
                        className="w-full bg-transparent border-b text-white text-base font-light pb-2 focus:outline-none transition placeholder-white/20"
                        style={{ borderColor: 'rgba(255,255,255,0.1)' }}
                        onFocus={(e) => e.target.style.borderColor = C.teal}
                        onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
                        placeholder="(555) 123-4567" />
                    </div>
                    <div>
                      <label className="block text-[13px] font-medium uppercase tracking-[0.15em] text-white/40 mb-2">Interested In</label>
                      <select value={form.service}
                        onChange={(e) => updateField('service', e.target.value)}
                        className="w-full bg-transparent border-b text-base font-light pb-2 focus:outline-none transition appearance-none cursor-pointer"
                        style={{ borderColor: 'rgba(255,255,255,0.1)', color: form.service ? '#fff' : 'rgba(255,255,255,0.2)' }}
                        onFocus={(e) => e.target.style.borderColor = C.teal}
                        onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}>
                        <option value="" style={{ color: '#333' }}>Select...</option>
                        <option value="botox" style={{ color: '#333' }}>Botox & Dysport</option>
                        <option value="fillers" style={{ color: '#333' }}>Dermal Fillers</option>
                        <option value="hydrafacial" style={{ color: '#333' }}>Hydrafacial</option>
                        <option value="laser" style={{ color: '#333' }}>Laser Treatment</option>
                        <option value="body" style={{ color: '#333' }}>Body Contouring</option>
                        <option value="peel" style={{ color: '#333' }}>Chemical Peel</option>
                        <option value="other" style={{ color: '#333' }}>Not Sure Yet</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-[13px] font-medium uppercase tracking-[0.15em] text-white/40 mb-2">Anything else?</label>
                    <input type="text" value={form.message}
                      onChange={(e) => updateField('message', e.target.value)}
                      className="w-full bg-transparent border-b text-white text-base font-light pb-2 focus:outline-none transition placeholder-white/20"
                      style={{ borderColor: 'rgba(255,255,255,0.1)' }}
                      onFocus={(e) => e.target.style.borderColor = C.teal}
                      onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
                      placeholder="Tell us about your goals..." />
                  </div>

                  <button type="submit"
                    className="w-full mt-4 py-4 text-[13px] font-medium uppercase tracking-[0.2em] text-white transition hover:opacity-90"
                    style={{ background: C.blue }}>
                    Request My Consultation &rarr;
                  </button>
                </div>
              </div>
              <p className="text-center text-[13px] font-light mt-4" style={{ color: 'rgba(255,255,255,0.25)' }}>
                No obligations. Complimentary consultations for all new clients.
              </p>
            </form>
          )}
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="px-6 py-8" style={{ background: C.navy, borderTop: `1px solid ${C.blue}20` }}>
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <span className="text-[13px] font-light" style={{ color: 'rgba(255,255,255,0.25)' }}>
            &copy; {new Date().getFullYear()} Aura Health & Spa
          </span>
          <span className="text-[13px] font-light" style={{ color: 'rgba(255,255,255,0.25)' }}>
            Aesthetic Wellness, Redefined
          </span>
        </div>
      </footer>

      {/* ── Back to Gallery ── */}
      <Link to="/"
        className="fixed bottom-5 left-5 z-50 text-[13px] font-medium uppercase tracking-[0.1em] px-4 py-2 backdrop-blur-xl transition flex items-center gap-2"
        style={{ background: `${C.navy}cc`, color: 'rgba(255,255,255,0.4)', border: `1px solid ${C.blue}20` }}
        onMouseEnter={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.8)'}
        onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.4)'}>
        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 14 14" stroke="currentColor" strokeWidth="1.5">
          <path d="M11 7H3M6 4L3 7l3 3" />
        </svg>
        Demos
      </Link>
    </div>
  )
}
