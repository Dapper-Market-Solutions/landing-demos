import { useState } from 'react'
import { Link } from 'react-router-dom'

/* ── Brand Colors ── */
const C = {
  navy: '#000321',
  navyLight: '#0a1035',
  teal: '#08BDBD',
  blue: '#5ab2d4',
  gray: '#F3F3F3',
  dark: '#231f20',
  white: '#ffffff',
  accent: '#08BDBD',
}

/* ── Featured Carts ── */
const CARTS = [
  {
    name: '2026 ICON i60LX',
    image: 'https://iconev.com/wp-content/uploads/2024/08/ICON-EV-Golf-Carts-i60L.jpg',
    seats: '6 Passenger',
    price: '$12,995',
    badge: 'Best Seller',
    highlights: ['60-mile range', '10.1" Touchscreen', 'Apple CarPlay', '4-Speaker Audio', 'Backup Camera', 'Wireless Charging'],
    specs: {
      Motor: '5kW AC Motor',
      Battery: '48V 105Ah Lithium',
      Range: 'Up to 60 miles',
      'Top Speed': '25 MPH (street legal)',
      Seating: '6 Passenger',
      Display: '10.1" HD Touchscreen',
      Audio: '4-Speaker Bluetooth Sound System',
      Connectivity: 'Apple CarPlay & Android Auto, USB-C, Wireless Charging',
      Safety: 'Seatbelts, LED High/Low Beam, Backup Camera, Turn Signals',
      Suspension: 'Independent Front & Rear',
      Steering: 'Rack & Pinion',
      Brakes: 'Four-Wheel Disc Brakes',
      Storage: 'Locking Glove Box, Under-Seat Storage',
      Extras: 'DOT Windshield, Side Mirrors, License Plate Bracket',
    },
  },
  {
    name: '2026 EPIC E60FX',
    image: 'https://epiccarts.com/wp-content/uploads/2025/08/EPIC-E60L-Golf-Carts-16_.jpg',
    seats: '6 Passenger',
    price: '$13,995',
    badge: 'Premium',
    highlights: ['6.3kW AC Motor', 'DOT Windshield', 'Lockable Trunk', '4-Speaker Sound', 'LED Lighting', 'Diamond-Stitch Seats'],
    specs: {
      Motor: '6.3kW AC Motor',
      Battery: '48V 105Ah Lithium',
      Range: 'Up to 50 miles',
      'Top Speed': '25 MPH (street legal)',
      Seating: '6 Passenger, Diamond-Stitch Upholstery',
      Display: '10.1" HD Touchscreen',
      Audio: '4-Speaker Premium Sound',
      Connectivity: 'Apple CarPlay & Android Auto, USB-C, Wireless Charging',
      Safety: 'Seatbelts, LED High/Low Beam, Backup Camera, Turn Signals',
      Suspension: 'Independent Front & Rear',
      Steering: 'Rack & Pinion',
      Brakes: 'Four-Wheel Disc Brakes',
      Storage: 'Lockable Trunk, Locking Glove Box',
      Extras: 'DOT Windshield, Fender Flares, Premium Paint',
    },
  },
  {
    name: '2026 ACTIV EV Pulse',
    image: 'https://images.squarespace-cdn.com/content/v1/66c13d617fabfa5f1054156f/ad9a23f5-0364-405b-a494-5e440261eb3f/Rover_XL_6_Web_-_Gray.png',
    seats: '4 Passenger',
    price: '$7,499',
    badge: 'Flash Sale',
    highlights: ['40-mile Range', 'Rear-Facing Seats', 'Premium Sound', 'Wireless Charging', 'LED Lights', 'Backup Camera'],
    specs: {
      Motor: '4kW AC Motor',
      Battery: '48V 56Ah Lithium',
      Range: 'Up to 40 miles',
      'Top Speed': '25 MPH (street legal)',
      Seating: '4 Passenger with Rear-Facing Seats',
      Display: '7" Touchscreen',
      Audio: 'Premium Bluetooth Sound System',
      Connectivity: 'Wireless Phone Charging, USB-C',
      Safety: 'Seatbelts, LED Lights, Backup Camera, Turn Signals',
      Suspension: 'Independent Front Suspension',
      Steering: 'Rack & Pinion',
      Brakes: 'Four-Wheel Disc Brakes',
      Storage: 'Under-Seat Storage',
      Extras: 'DOT Windshield, Side Mirrors, License Plate Bracket',
    },
  },
]

/* ── Standard Features ── */
const FEATURES = [
  {
    title: 'Advanced Battery Tech',
    items: ['40-60 mile range', '6-hour fast charging'],
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="6" y="10" width="20" height="14" rx="2" />
        <path d="M26 15h2v4h-2" />
        <path d="M12 14v6M15 14v6M18 14v6" />
      </svg>
    ),
  },
  {
    title: 'Smart Technology',
    items: ['Apple CarPlay & Android Auto', 'Wireless phone charging', 'USB-C connectivity'],
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="9" y="4" width="14" height="24" rx="3" />
        <circle cx="16" cy="24" r="1.5" />
        <path d="M12 8h8" />
      </svg>
    ),
  },
  {
    title: 'Safety First',
    items: ['Seatbelts for all occupants', 'LED high/low beam lights', 'Rear backup camera'],
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M16 4L6 10v8c0 6 4 10 10 14 6-4 10-8 10-14v-8L16 4z" />
        <path d="M12 16l3 3 5-6" />
      </svg>
    ),
  },
  {
    title: 'Premium Audio',
    items: ['4-speaker sound system', 'Bluetooth connectivity', 'Crystal clear audio'],
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M8 12v8h4l6 6V6l-6 6H8z" />
        <path d="M22 11a6 6 0 010 10M25 8a10 10 0 010 16" />
      </svg>
    ),
  },
  {
    title: 'Smooth Performance',
    items: ['Up to 25 MPH speed', 'Rack and pinion steering', 'Independent suspension'],
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="16" cy="16" r="10" />
        <path d="M16 8v8l5 3" />
      </svg>
    ),
  },
  {
    title: 'Security & Storage',
    items: ['Two locking glove compartments', 'Under-seat storage', 'Turn signal mirrors'],
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="6" y="14" width="20" height="14" rx="2" />
        <path d="M10 14v-4a6 6 0 0112 0v4" />
        <circle cx="16" cy="21" r="2" />
        <path d="M16 23v3" />
      </svg>
    ),
  },
]

/* ── Service Items ── */
const SERVICES = [
  { title: 'Golf Cart Repair', desc: 'From a cart that won\'t start, to body damage, we can find a solution.' },
  { title: 'Battery Installation', desc: 'We sell and install batteries for electric carts as well as Lithium Conversions LiFePO4.' },
  { title: 'Maintenance', desc: 'Firmware updates, annual maintenance service packages, and full inspections.' },
  { title: 'Tire Installation', desc: 'We sell and install new tires and rims for all makes and models.' },
]

/* ── Reviews ── */
const REVIEWS = [
  { name: 'Sam K.', text: 'Great customer service. Explained differences in various carts. Let us test drive as many as we wanted. We are satisfied customers.', title: 'We Are Satisfied Customers' },
  { name: 'Angela B.', text: 'Central Coast Carts was great to work with and have friendly staff. It was a very easy transaction. Would definitely recommend using this business.', title: 'Great to Work With!' },
  { name: 'Terri B.', text: 'The staff was great. Mike Russell helped me find exactly what I wanted in a very short amount of time. Even more impressive was that this all took place in the middle of moving their offices!', title: 'Staff was Great' },
  { name: 'Fred W.', text: 'Cameron was fantastic, no pressure and delivered my cart all cleaned and shiny. I would definitely recommend Cameron and Central Coast Carts.', title: 'Cameron Was Fantastic' },
]

/* ── FAQs ── */
const FAQS = [
  { q: 'Do you handle all DMV paperwork?', a: 'Yes — we are a licensed DMV dealer and complete all registration, titling, and street-legal paperwork in-house to make the process fast and stress-free.' },
  { q: 'Do you offer delivery?', a: 'Yes — we offer free delivery up to 200 miles from our location. For customers beyond that range, we provide affordable statewide delivery options. We\'ll coordinate the delivery time that works best for you.' },
  { q: 'What brands do you carry?', a: 'We proudly carry a wide selection including Evolution, Icon EV, Epic, Tomberlin, Bintelli, Activ EV, and more — plus custom builds and specialty carts.' },
  { q: 'Do you offer financing options?', a: 'Yes — we work with trusted lenders to provide simple, fast financing options for personal and commercial purchases.' },
  { q: 'What kind of warranty do the carts come with?', a: 'Each manufacturer provides its own warranty program. We will walk you through the details at purchase and help you register your cart so your full warranty coverage is activated.' },
]

export default function CentralCoastCarts() {
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '', phone: '', interest: '' })
  const [submitted, setSubmitted] = useState(false)
  const [openFaq, setOpenFaq] = useState(null)
  const [specCart, setSpecCart] = useState(null)

  function handleSubmit(e) {
    e.preventDefault()
    setSubmitted(true)
  }

  function updateField(field, value) {
    setForm(prev => ({ ...prev, [field]: value }))
  }

  const headingFont = '"Oswald", sans-serif'
  const bodyFont = '"Outfit", sans-serif'

  return (
    <div className="min-h-screen" style={{ fontFamily: bodyFont, background: C.white }}>

      {/* ── Nav ── */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl" style={{ background: 'rgba(255,255,255,0.92)' }}>
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src="https://centralcoastcarts.com/wp-content/uploads/2024/02/central-cart-logo-updated-pushed-2-1.webp"
              alt="Central Coast Carts"
              className="h-14 object-contain"
            />
          </div>
          <div className="hidden sm:flex items-center gap-8 text-[13px] font-medium uppercase tracking-[0.12em]" style={{ color: 'rgba(0,3,33,0.4)' }}>
            <a href="#inventory" className="transition" style={{}} onMouseEnter={(e) => e.target.style.color = C.teal} onMouseLeave={(e) => e.target.style.color = 'rgba(0,3,33,0.4)'}>Inventory</a>
            <a href="#service" className="transition" onMouseEnter={(e) => e.target.style.color = C.teal} onMouseLeave={(e) => e.target.style.color = 'rgba(0,3,33,0.4)'}>Service</a>
            <a href="#reviews" className="transition" onMouseEnter={(e) => e.target.style.color = C.teal} onMouseLeave={(e) => e.target.style.color = 'rgba(0,3,33,0.4)'}>Reviews</a>
            <a href="#contact"
              className="px-5 py-2 text-white transition hover:brightness-110 rounded-sm"
              style={{ background: C.teal }}>
              Get Your Cart
            </a>
          </div>
          <a href="#contact" className="sm:hidden px-4 py-2 text-white text-[13px] font-bold uppercase tracking-wider rounded-sm" style={{ background: C.teal }}>
            Quote
          </a>
        </div>
        <div className="h-px" style={{ background: 'rgba(0,0,0,0.06)' }} />
      </nav>

      {/* ── Hero ── */}
      <section className="relative pt-16 overflow-hidden min-h-[90vh] flex items-center" style={{ background: C.gray }}>
        {/* Soft coastal gradient */}
        <div className="absolute inset-0" style={{
          background: `
            radial-gradient(ellipse 80% 60% at 70% 100%, ${C.teal}10 0%, transparent 50%),
            radial-gradient(ellipse 60% 50% at 10% 30%, ${C.blue}08 0%, transparent 50%),
            linear-gradient(180deg, #ffffff 0%, ${C.gray} 100%)
          `,
        }} />
        {/* Subtle dot grid */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, ${C.teal} 0.5px, transparent 0)`,
          backgroundSize: '40px 40px',
        }} />

        <div className="relative w-full max-w-6xl mx-auto px-6 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              {/* Price badge */}
              <div className="animate-fade-up inline-flex items-center gap-3 mb-6 px-5 py-2.5 rounded-full"
                   style={{ background: `${C.teal}12`, border: `1px solid ${C.teal}30` }}>
                <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: C.teal }} />
                <span className="text-[13px] font-bold uppercase tracking-[0.15em]" style={{ color: C.teal }}>
                  Street Legal Carts As Low As
                </span>
                <span className="text-lg font-bold" style={{ fontFamily: headingFont, color: C.teal }}>
                  $8,695
                </span>
              </div>

              <h1 className="animate-fade-up delay-100 text-4xl sm:text-6xl font-bold leading-[1.05] uppercase mb-2"
                  style={{ fontFamily: headingFont, color: C.navy }}>
                Central California's
                <br />
                <span className="font-bold" style={{ color: C.teal }}>Premier</span>
              </h1>
              <h2 className="animate-fade-up delay-150 text-2xl sm:text-4xl font-light uppercase mb-6"
                  style={{ fontFamily: headingFont, color: 'rgba(0,3,33,0.4)' }}>
                Street Legal Golf Carts
              </h2>

              <p className="animate-fade-up delay-200 text-base font-light leading-relaxed mb-3 max-w-md" style={{ color: 'rgba(0,3,33,0.55)' }}>
                Premium features, unbeatable prices. Limited edition sale — while supplies last!
              </p>
              <p className="animate-fade-up delay-200 text-base font-medium mb-8" style={{ color: 'rgba(0,3,33,0.35)' }}>
                Don't be fooled by our competitors.
              </p>

              <div className="animate-fade-up delay-300 flex flex-wrap gap-4 mb-10">
                <a href="#contact"
                  className="inline-flex items-center gap-3 text-[13px] font-bold uppercase tracking-[0.15em] px-8 py-4 text-white transition hover:brightness-110 rounded-sm"
                  style={{ background: C.teal }}>
                  Shop Now
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 16 16" stroke="currentColor" strokeWidth="2">
                    <path d="M3 8h10M9 4l4 4-4 4" />
                  </svg>
                </a>
                <a href="#inventory"
                  className="inline-flex items-center gap-3 text-[13px] font-bold uppercase tracking-[0.15em] px-8 py-4 border transition rounded-sm"
                  style={{ borderColor: 'rgba(0,3,33,0.15)', color: 'rgba(0,3,33,0.5)' }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = C.teal; e.currentTarget.style.color = C.teal }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(0,3,33,0.15)'; e.currentTarget.style.color = 'rgba(0,3,33,0.5)' }}>
                  View Inventory
                </a>
              </div>

              {/* Trust note */}
              <div className="animate-fade-up delay-400 flex items-center gap-2">
                <span className="text-[13px] uppercase tracking-[0.15em] font-medium" style={{ color: 'rgba(0,3,33,0.35)' }}>
                  Premium Features &bull; Unbeatable Prices &bull; Free Local Delivery
                </span>
              </div>
            </div>

            {/* Hero image */}
            <div className="animate-fade-up delay-300 hidden lg:block">
              <div className="relative">
                <img
                  src="https://iconev.com/wp-content/uploads/2024/08/ICON-EV-Golf-Carts-i60L.jpg"
                  alt="Street Legal Golf Cart"
                  className="relative w-full rounded-lg shadow-xl shadow-black/[0.08]"
                />
                <div className="absolute bottom-0 left-0 right-0 p-5 rounded-b-lg"
                     style={{ background: 'linear-gradient(transparent, rgba(0,3,33,0.85))' }}>
                  <div className="flex items-end justify-between">
                    <div>
                      <div className="text-[12px] font-bold uppercase tracking-[0.15em]" style={{ color: C.teal }}>Featured</div>
                      <div className="text-base text-white/80">ICON i60LX · 6-Seat · Street Legal</div>
                    </div>
                    <div className="text-xl font-bold text-white" style={{ fontFamily: headingFont }}>$12,995</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Trust Bar ── */}
      <section className="py-6 px-6" style={{ background: C.teal }}>
        <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-center gap-8 sm:gap-16">
          {[
            ['Authorized', 'California Dealer'],
            ['500+', 'Carts Sold This Year'],
            ['Family Owned', '& Operated'],
            ['Free Delivery', 'Within 200 Miles'],
          ].map(([val, label]) => (
            <div key={label} className="flex items-center gap-3 text-white">
              <div className="text-base sm:text-lg font-bold uppercase" style={{ fontFamily: headingFont }}>{val}</div>
              <div className="text-[13px] font-light opacity-80">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Standard Features ── */}
      <section className="py-20 px-6" style={{ background: C.white }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-[13px] font-bold uppercase tracking-[0.25em] mb-3" style={{ color: C.teal }}>
              No Hidden Costs
            </p>
            <h2 className="text-3xl sm:text-5xl font-bold uppercase tracking-tight mb-3"
                style={{ fontFamily: headingFont, color: C.navy }}>
              Standard <span style={{ color: C.teal }}>Premium</span> Features
            </h2>
            <p className="text-base font-light" style={{ color: 'rgba(0,3,33,0.45)' }}>
              These features come standard with almost every cart — no surprise charges.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {FEATURES.map((feat) => (
              <div key={feat.title}
                className="group p-6 transition-all duration-300 hover:translate-y-[-2px] hover:shadow-lg hover:shadow-black/[0.04]"
                style={{
                  background: C.gray,
                  border: '1px solid #ebebeb',
                }}>
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center shrink-0 transition-colors"
                       style={{ background: `${C.teal}15`, color: C.teal }}>
                    {feat.icon}
                  </div>
                  <h3 className="text-lg font-bold uppercase pt-2" style={{ fontFamily: headingFont, color: C.navy }}>
                    {feat.title}
                  </h3>
                </div>
                <ul className="space-y-2 ml-1">
                  {feat.items.map((item) => (
                    <li key={item} className="flex items-center gap-2.5 text-base font-light" style={{ color: 'rgba(0,3,33,0.5)' }}>
                      <svg className="w-3.5 h-3.5 shrink-0" style={{ color: C.teal }} viewBox="0 0 14 14" fill="currentColor">
                        <path d="M5.5 10.5L2 7l1-1 2.5 2.5L11 3l1 1-6.5 6.5z" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Featured Inventory ── */}
      <section id="inventory" className="py-20 px-6" style={{ background: C.gray }}>
        <div className="max-w-6xl mx-auto">
          <div className="mb-14">
            <p className="text-[13px] font-bold uppercase tracking-[0.25em] mb-3" style={{ color: C.teal }}>
              Limited Stock Available
            </p>
            <h2 className="text-3xl sm:text-5xl font-bold uppercase tracking-tight mb-3"
                style={{ fontFamily: headingFont, color: C.navy }}>
              Featured <span style={{ color: C.teal }}>Inventory</span>
            </h2>
            <p className="text-base font-light" style={{ color: 'rgba(0,3,33,0.5)' }}>
              Explore our premium street legal golf carts — built for California roads.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-6">
            {CARTS.map((cart) => (
              <div key={cart.name}
                className="group flex flex-col bg-white overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-black/[0.08]"
                style={{ border: '2px solid #ebebeb' }}>

                <div className="relative aspect-[16/10] overflow-hidden" style={{ background: '#f0f0f0' }}>
                  <img src={cart.image} alt={cart.name}
                    className="w-full h-full object-contain p-3 group-hover:scale-[1.03] transition-transform duration-700" />
                  <div className="absolute top-3 left-3 text-[11px] font-bold uppercase tracking-[0.15em] px-3 py-1 text-white"
                       style={{ background: cart.badge === 'Flash Sale' ? '#e93d3d' : C.teal }}>
                    {cart.badge}
                  </div>
                  <div className="absolute top-3 right-3 text-[11px] font-bold uppercase tracking-[0.15em] px-3 py-1 text-white"
                       style={{ background: C.navy }}>
                    {cart.seats}
                  </div>
                </div>

                <div className="p-5 flex-1 flex flex-col">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-lg font-bold uppercase" style={{ fontFamily: headingFont, color: C.navy }}>
                      {cart.name}
                    </h3>
                    <div className="text-xl font-bold" style={{ fontFamily: headingFont, color: C.teal }}>
                      {cart.price}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-1.5 mb-4">
                    {cart.highlights.map((h) => (
                      <div key={h} className="flex items-center gap-1.5 text-[13px] font-light" style={{ color: C.dark }}>
                        <svg className="w-3 h-3 shrink-0" style={{ color: C.teal }} viewBox="0 0 12 12" fill="currentColor">
                          <path d="M4.5 8.5L2 6l.7-.7L4.5 7.1 9.3 2.3l.7.7-5.5 5.5z" />
                        </svg>
                        {h}
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={() => setSpecCart(cart)}
                    className="block w-full mt-auto py-3 text-center text-[13px] font-bold uppercase tracking-[0.15em] text-white transition hover:brightness-110 cursor-pointer"
                    style={{ background: C.blue }}>
                    Click for Full Spec Card
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Service Shop ── */}
      <section id="service" className="py-20 px-6" style={{ background: C.white }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-[13px] font-bold uppercase tracking-[0.25em] mb-3" style={{ color: C.teal }}>
                Expert Repairs
              </p>
              <h2 className="text-3xl sm:text-5xl font-bold uppercase tracking-tight mb-4"
                  style={{ fontFamily: headingFont, color: C.navy }}>
                Award Winning <span style={{ color: C.teal }}>Service Shop</span>
              </h2>
              <p className="text-base font-light leading-relaxed mb-6" style={{ color: 'rgba(0,3,33,0.55)' }}>
                When you're invested in making sure your golf cart stays in great working order for years to come,
                you need knowledge and skill you can count on. Our shop services all brands of golf carts and
                low speed vehicles.
              </p>
              <p className="text-base font-light leading-relaxed" style={{ color: 'rgba(0,3,33,0.4)' }}>
                We have the equipment and experience to get your cart maintained, whether you're cruising the
                neighborhood or tearing it up on the course.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {SERVICES.map((svc, i) => (
                <div key={svc.title} className="p-5" style={{
                  background: i % 2 === 0 ? C.gray : C.white,
                  border: '1px solid #ebebeb',
                }}>
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-3" style={{ background: `${C.teal}12` }}>
                    <svg className="w-5 h-5" viewBox="0 0 20 20" fill="none" stroke={C.teal} strokeWidth="1.5">
                      <path d="M10 2l2 4h4l-3 3 1 4-4-2-4 2 1-4-3-3h4z" />
                    </svg>
                  </div>
                  <h3 className="text-base font-bold uppercase mb-2" style={{ fontFamily: headingFont, color: C.navy }}>
                    {svc.title}
                  </h3>
                  <p className="text-[13px] font-light leading-relaxed" style={{ color: 'rgba(0,3,33,0.5)' }}>
                    {svc.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Reviews ── */}
      <section id="reviews" className="py-20 px-6" style={{ background: C.gray }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[13px] font-bold uppercase tracking-[0.25em] mb-3" style={{ color: C.teal }}>
              Testimonials
            </p>
            <h2 className="text-3xl sm:text-5xl font-bold uppercase tracking-tight"
                style={{ fontFamily: headingFont, color: C.navy }}>
              What Our Customers <span style={{ color: C.teal }}>Are Saying</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {REVIEWS.map((r) => (
              <div key={r.name} className="bg-white p-6 transition-all duration-300 hover:translate-y-[-2px] hover:shadow-lg hover:shadow-black/[0.04]"
                   style={{ border: '1px solid #ebebeb' }}>
                <div className="flex gap-0.5 mb-4">
                  {[1,2,3,4,5].map(i => (
                    <svg key={i} className="w-4 h-4" style={{ color: '#fbbf24' }} viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <h4 className="text-base font-bold uppercase mb-2" style={{ fontFamily: headingFont, color: C.navy }}>
                  "{r.title}"
                </h4>
                <p className="text-[13px] font-light leading-relaxed mb-4" style={{ color: 'rgba(0,3,33,0.5)' }}>
                  "{r.text}"
                </p>
                <div className="pt-3" style={{ borderTop: '1px solid #ebebeb' }}>
                  <span className="text-[13px] font-medium" style={{ color: C.teal }}>&mdash; {r.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Choose Us ── */}
      <section className="py-20 px-6" style={{ background: C.gray }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-[13px] font-bold uppercase tracking-[0.25em] mb-3" style={{ color: C.teal }}>
              Still Not Sure?
            </p>
            <h2 className="text-3xl sm:text-5xl font-bold uppercase tracking-tight mb-3"
                style={{ fontFamily: headingFont, color: C.navy }}>
              Why California Residents
              <br />
              Choose <span style={{ color: C.teal }}>Central Coast Carts</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { title: 'Local Knowledge', desc: 'California-based dealership with deep local knowledge and understanding of your specific cart needs.' },
              { title: 'Best Prices', desc: 'Best prices on the Central Coast with no hidden fees, surprise charges, or mandatory add-ons — guaranteed.' },
              { title: 'White-Glove Delivery', desc: 'White-glove delivery, expert setup, and comprehensive training included with every cart purchase.' },
              { title: '5-Year Warranty', desc: 'Industry-leading warranty protection with up to 5-year battery coverage and local service support.' },
            ].map((item) => (
              <div key={item.title} className="bg-white p-6" style={{ border: '2px solid #ebebeb' }}>
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4" style={{ background: `${C.teal}12` }}>
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke={C.teal} strokeWidth="1.5">
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold uppercase mb-2" style={{ fontFamily: headingFont, color: C.navy }}>
                  {item.title}
                </h3>
                <p className="text-base font-light leading-relaxed" style={{ color: 'rgba(0,3,33,0.5)' }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-20 px-6" style={{ background: C.white }}>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[13px] font-bold uppercase tracking-[0.25em] mb-3" style={{ color: C.teal }}>
              Common Questions
            </p>
            <h2 className="text-3xl sm:text-5xl font-bold uppercase tracking-tight"
                style={{ fontFamily: headingFont, color: C.navy }}>
              Frequently <span style={{ color: C.teal }}>Asked</span>
            </h2>
          </div>

          <div className="space-y-3">
            {FAQS.map((faq, i) => {
              const isOpen = openFaq === i
              return (
                <div key={i} style={{ border: '2px solid #ebebeb', background: isOpen ? C.gray : C.white }}>
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                    className="w-full flex items-center justify-between px-6 py-5 text-left transition">
                    <span className="text-base font-bold uppercase pr-4" style={{ fontFamily: headingFont, color: C.navy }}>
                      {faq.q}
                    </span>
                    <div className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all"
                         style={{ background: isOpen ? C.teal : `${C.teal}15` }}>
                      <svg className={`w-4 h-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                           fill="none" viewBox="0 0 16 16" stroke={isOpen ? 'white' : C.teal} strokeWidth="2">
                        <path d="M4 6l4 4 4-4" />
                      </svg>
                    </div>
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-5 animate-fade-in">
                      <p className="text-base font-light leading-relaxed" style={{ color: 'rgba(0,3,33,0.55)' }}>
                        {faq.a}
                      </p>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── Flash Sale Banner ── */}
      <section className="py-6 px-6 text-center" style={{ background: '#e93d3d' }}>
        <p className="text-base sm:text-lg font-bold uppercase tracking-[0.1em] text-white" style={{ fontFamily: headingFont }}>
          &#9889; Flash Sale Alert! Limited Inventory Available &#9889;
        </p>
      </section>

      {/* ── Lead Capture Form ── */}
      <section id="contact" className="px-6 py-24 relative" style={{ background: C.navy }}>
        <div className="absolute inset-0 opacity-[0.04]" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, ${C.teal} 0.5px, transparent 0)`,
          backgroundSize: '40px 40px',
        }} />

        <div className="relative max-w-xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[13px] font-bold uppercase tracking-[0.25em] mb-5" style={{ color: C.teal }}>
              Ready to Get Started?
            </p>
            <h2 className="text-3xl sm:text-5xl font-bold uppercase text-white leading-tight tracking-tight mb-4"
                style={{ fontFamily: headingFont }}>
              Get Your <span style={{ color: C.teal }}>Cart Now</span>
            </h2>
            <p className="text-base font-light leading-relaxed" style={{ color: 'rgba(255,255,255,0.4)' }}>
              Ready to cruise the coast in style? Fill out the form and we'll get back to you within 24 hours.
            </p>
          </div>

          {submitted ? (
            <div className="text-center py-16">
              <div className="w-16 h-16 rounded-full mx-auto mb-6 flex items-center justify-center"
                   style={{ background: `${C.teal}20` }}>
                <svg className="w-7 h-7" style={{ color: C.teal }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-bold uppercase text-white mb-2" style={{ fontFamily: headingFont }}>
                You're All Set!
              </h3>
              <p className="text-base font-light" style={{ color: 'rgba(255,255,255,0.4)' }}>
                Our team will be in touch within 24 hours with your personalized quote.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="p-8 sm:p-10" style={{ background: 'rgba(255,255,255,0.03)', border: `1px solid ${C.teal}25` }}>
                <div className="space-y-5">
                  <div className="grid grid-cols-2 gap-4">
                    {[['firstName', 'First Name', 'text', 'John'], ['lastName', 'Last Name', 'text', 'Smith']].map(([field, label, type, ph]) => (
                      <div key={field}>
                        <label className="block text-[13px] font-bold uppercase tracking-[0.15em] text-white/40 mb-2">{label}</label>
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
                    <label className="block text-[13px] font-bold uppercase tracking-[0.15em] text-white/40 mb-2">Email</label>
                    <input type="email" required value={form.email}
                      onChange={(e) => updateField('email', e.target.value)}
                      className="w-full bg-transparent border-b text-white text-base font-light pb-2 focus:outline-none transition placeholder-white/20"
                      style={{ borderColor: 'rgba(255,255,255,0.1)' }}
                      onFocus={(e) => e.target.style.borderColor = C.teal}
                      onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
                      placeholder="john@example.com" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[13px] font-bold uppercase tracking-[0.15em] text-white/40 mb-2">Phone</label>
                      <input type="tel" required value={form.phone}
                        onChange={(e) => updateField('phone', e.target.value)}
                        className="w-full bg-transparent border-b text-white text-base font-light pb-2 focus:outline-none transition placeholder-white/20"
                        style={{ borderColor: 'rgba(255,255,255,0.1)' }}
                        onFocus={(e) => e.target.style.borderColor = C.teal}
                        onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
                        placeholder="(555) 123-4567" />
                    </div>
                    <div>
                      <label className="block text-[13px] font-bold uppercase tracking-[0.15em] text-white/40 mb-2">Interested In</label>
                      <select value={form.interest}
                        onChange={(e) => updateField('interest', e.target.value)}
                        className="w-full bg-transparent border-b text-base font-light pb-2 focus:outline-none transition appearance-none cursor-pointer"
                        style={{ borderColor: 'rgba(255,255,255,0.1)', color: form.interest ? '#fff' : 'rgba(255,255,255,0.2)' }}
                        onFocus={(e) => e.target.style.borderColor = C.teal}
                        onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}>
                        <option value="" style={{ color: '#333' }}>Select...</option>
                        <option value="new-4seat" style={{ color: '#333' }}>New 4-Seat Cart</option>
                        <option value="new-6seat" style={{ color: '#333' }}>New 6-Seat Cart</option>
                        <option value="custom" style={{ color: '#333' }}>Custom Build</option>
                        <option value="service" style={{ color: '#333' }}>Service / Repair</option>
                        <option value="financing" style={{ color: '#333' }}>Financing Info</option>
                      </select>
                    </div>
                  </div>

                  <button type="submit"
                    className="w-full mt-4 py-4 text-[13px] font-bold uppercase tracking-[0.2em] text-white transition hover:brightness-110"
                    style={{ background: C.teal }}>
                    Get My Quote &rarr;
                  </button>
                </div>
              </div>
              <p className="text-center text-[13px] font-light mt-4" style={{ color: 'rgba(255,255,255,0.2)' }}>
                No obligations. No pressure. Just great carts.
              </p>
            </form>
          )}
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="px-6 py-10" style={{ background: '#010428', borderTop: `1px solid ${C.teal}15` }}>
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-base font-light leading-relaxed mb-4" style={{ color: 'rgba(255,255,255,0.35)' }}>
            Whether you're in Grover Beach, Santa Barbara, Montecito, Monterey, Carmel or
            anywhere on the Central Coast, our mission is simple: deliver top-tier products,
            trusted service, and unbeatable value.
          </p>
          <p className="text-base font-medium mb-6" style={{ color: C.teal }}>
            Wherever you are, we deliver within 200 miles of Grover Beach — free of charge!
          </p>
          <div className="h-px mb-6" style={{ background: 'rgba(255,255,255,0.06)' }} />
          <span className="text-[13px] font-light" style={{ color: 'rgba(255,255,255,0.2)' }}>
            &copy; {new Date().getFullYear()} Central Coast Carts. All Rights Reserved.
          </span>
        </div>
      </footer>

      {/* ── Back to Gallery ── */}
      {/* ── Spec Card Modal ── */}
      {specCart && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4"
             onClick={() => setSpecCart(null)}>
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
          <div className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-lg shadow-2xl"
               style={{ background: C.white }}
               onClick={(e) => e.stopPropagation()}>
            {/* Modal header with image */}
            <div className="relative aspect-[16/10] overflow-hidden" style={{ background: '#f0f0f0' }}>
              <img src={specCart.image} alt={specCart.name}
                   className="w-full h-full object-contain p-4" />
              <div className="absolute top-3 left-3 text-[11px] font-bold uppercase tracking-[0.15em] px-3 py-1 text-white"
                   style={{ background: specCart.badge === 'Flash Sale' ? '#e93d3d' : C.teal }}>
                {specCart.badge}
              </div>
              <button onClick={() => setSpecCart(null)}
                      className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 flex items-center justify-center text-lg hover:bg-white transition cursor-pointer"
                      style={{ color: C.dark }}>
                &times;
              </button>
            </div>

            {/* Cart name + price */}
            <div className="px-6 pt-5 pb-3 flex items-start justify-between border-b" style={{ borderColor: 'rgba(0,0,0,0.08)' }}>
              <div>
                <h3 className="text-xl font-bold uppercase" style={{ fontFamily: headingFont, color: C.navy }}>
                  {specCart.name}
                </h3>
                <span className="text-sm" style={{ color: 'rgba(0,3,33,0.4)' }}>{specCart.seats}</span>
              </div>
              <div className="text-2xl font-bold" style={{ fontFamily: headingFont, color: C.teal }}>
                {specCart.price}
              </div>
            </div>

            {/* Full specs */}
            <div className="px-6 py-4">
              <h4 className="text-[13px] font-bold uppercase tracking-[0.15em] mb-3" style={{ color: 'rgba(0,3,33,0.35)' }}>
                Full Specifications
              </h4>
              <div className="space-y-0">
                {Object.entries(specCart.specs).map(([label, value]) => (
                  <div key={label} className="flex py-2.5 border-b last:border-0" style={{ borderColor: 'rgba(0,0,0,0.06)' }}>
                    <span className="w-28 shrink-0 text-[13px] font-semibold uppercase tracking-wide" style={{ color: C.navy }}>
                      {label}
                    </span>
                    <span className="text-[14px] font-light" style={{ color: C.dark }}>
                      {value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="px-6 pb-6 pt-2">
              <a href="#contact"
                 onClick={() => setSpecCart(null)}
                 className="block w-full py-3.5 text-center text-[13px] font-bold uppercase tracking-[0.15em] text-white transition hover:brightness-110 rounded-sm"
                 style={{ background: C.teal }}>
                Request a Quote
              </a>
            </div>
          </div>
        </div>
      )}

      <Link to="/"
        className="fixed bottom-5 left-5 z-50 text-[13px] font-bold uppercase tracking-[0.1em] px-4 py-2 backdrop-blur-xl transition flex items-center gap-2"
        style={{ background: `${C.navy}dd`, color: 'rgba(255,255,255,0.4)', border: `1px solid ${C.teal}20` }}
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
