import { useState } from 'react'
import { Link } from 'react-router-dom'

/* ── Brand Logos ── */
const BRANDS = [
  { name: 'ICON EV', logo: 'https://iconev.com/wp-content/uploads/2022/09/Icon_EV_Logo_Icon_Green-3.png' },
  { name: 'Club Car', logo: 'https://assets-us-01.kc-usercontent.com:443/6abcfde7-3568-006f-9221-66adacb7173a/1509a9b6-4980-4c17-ac2d-53c77c6878b5/Artboard%201_300x.png' },
  { name: 'Denago EV', logo: 'https://images.squarespace-cdn.com/content/v1/66c13d617fabfa5f1054156f/a3562c42-1fae-477b-b15c-a8eb2255cbde/denago-ev-logo-white.png' },
  { name: 'E-Z-GO', logo: 'https://images.seeklogo.com/logo-png/30/1/ez-go-logo-png_seeklogo-302869.png' },
  { name: 'Epic Carts', logo: 'https://epiccarts.com/wp-content/uploads/2023/02/Epic_Carts_Racing_Yellow.png' },
  { name: 'Star EV', logo: 'https://cdn.prod.website-files.com/688255790b8ec29ef563efe6/690585b2ee0115d571a6e66e_STAR%20Logo.png' },
  { name: 'Yamaha', logo: 'https://upload.wikimedia.org/wikipedia/commons/3/32/Yamaha_Motor_Logo_%28full%29.svg' },
  { name: 'DACH', logo: 'https://dachvehicles.com/wp-content/uploads/2025/02/logo.svg' },
  { name: 'Bintelli', logo: 'https://www.bintelli.com/wp-content/themes/bintelli-theme/images/logo-header-sticky.png' },
  { name: 'Tomberlin', logo: 'https://www.tomberlinusa.com/hubfs/raw_assets/public/tomberlin_2024/images/tomberlin-logo-hrz-inverse.svg' },
  { name: 'Kandi', logo: 'https://www.kandiamerica.com/wp-content/uploads/2023/10/logo.svg' },
]

/* ── Featured Carts with Real Specs ── */
const CARTS = [
  {
    name: 'ICON i40L',
    brand: 'ICON EV',
    image: 'https://iconev.com/wp-content/uploads/2024/09/ICON-i40L-Golf-Carts.jpg',
    type: 'Street Legal',
    seats: '4 Passenger',
    price: '$10,995',
    msrp: '$14,200',
    badge: 'Best Seller',
    specs: {
      Motor: '5kW AC Motor',
      Battery: '51.2V 105Ah Lithium',
      Range: '25–30 miles',
      'Top Speed': '25 mph',
      Brakes: '4-Wheel Disc',
      Frame: 'Aluminum',
    },
    features: ['10.1" Touchscreen', 'Backup Camera', 'Bluetooth Audio', 'LED Lights', 'Seat Belts', '12" Alloy Wheels'],
    colors: ['Black', 'White', 'Silver', 'Forest', 'Caribbean', 'Champagne', 'Indigo', 'Sangria', 'Torch'],
  },
  {
    name: 'ICON i60L',
    brand: 'ICON EV',
    image: 'https://iconev.com/wp-content/uploads/2024/08/ICON-EV-Golf-Carts-i60L.jpg',
    type: 'Street Legal',
    seats: '6 Passenger',
    price: '$12,200',
    msrp: '$16,500',
    badge: null,
    specs: {
      Motor: '5kW AC Motor',
      Battery: '51.2V 105Ah Lithium',
      Range: '25–40 miles',
      'Top Speed': '25 mph',
      Brakes: '4-Wheel Disc',
      Frame: 'Aluminum',
    },
    features: ['10.1" Touchscreen', 'Backup Camera', 'Rear Flip Seat', 'Built-in Cooler', '3-Point Belts', 'Hip Restraints'],
    colors: ['Black', 'White', 'Silver', 'Forest', 'Caribbean', 'Champagne', 'Indigo', 'Sangria', 'Torch'],
  },
  {
    name: 'Club Car Onward 4P',
    brand: 'Club Car',
    image: 'https://assets-us-01.kc-usercontent.com:443/6abcfde7-3568-006f-9221-66adacb7173a/912590fa-1c11-42a0-b7c1-5b8b3efe3eec/_49A7444%20%281%29.jpg',
    type: 'Street Legal · Lifted',
    seats: '4 Passenger',
    price: '$13,699',
    msrp: '$15,699',
    badge: null,
    specs: {
      Motor: '4.7hp AC (29hp peak)',
      Battery: '7.0 kWh Li-Ion XR',
      Range: '30–55 miles',
      'Top Speed': '19 mph',
      Brakes: 'Rear Drum',
      Frame: 'AlumiCore Aluminum',
    },
    features: ['7" Display', 'Wireless Charging', 'Soundbar + BT', 'LED Headlights', 'Brush Guard', 'Rack & Pinion'],
    colors: ['Glacier White', 'Midnight Silver', 'Candy Apple Red', 'Blue Onyx', 'Graphite', 'Metallic Black'],
  },
  {
    name: 'Club Car Onward 6P',
    brand: 'Club Car',
    image: 'https://assets-us-01.kc-usercontent.com:443/6abcfde7-3568-006f-9221-66adacb7173a/9a52ecc4-7855-4432-903e-f07d74c87521/6%20Passenger%20Hero.png',
    type: 'Street Legal · Lifted',
    seats: '6 Passenger',
    price: '$19,699',
    msrp: '$21,199',
    badge: 'Premium',
    specs: {
      Motor: '4.7hp AC (29hp peak)',
      Battery: '7.0 kWh Li-Ion XR',
      Range: '25–45 miles',
      'Top Speed': '19 mph',
      Brakes: 'Rear Drum',
      Frame: 'AlumiCore Aluminum',
    },
    features: ['7" Display', 'Wireless Charging', 'Soundbar + BT', 'LED Headlights', 'Flip Seat + Cargo', 'Ergonomic Grab Handles'],
    colors: ['Glacier White', 'Midnight Silver', 'Metallic Black'],
  },
  {
    name: 'Denago Nomad XL',
    brand: 'Denago EV',
    image: 'https://images.squarespace-cdn.com/content/v1/66c13d617fabfa5f1054156f/500b0022-ae2b-4afa-a2a8-46e0644f7fd6/Denago+EV+White+-+3.png',
    type: 'Street Legal · Lifted',
    seats: '4 Passenger',
    price: '$8,495',
    msrp: '$8,995',
    badge: 'Value Pick',
    specs: {
      Motor: '5kW AC Motor',
      Battery: '51.2V 105Ah LiFePO4',
      Range: '40 miles',
      'Top Speed': '25 mph',
      Brakes: '4-Wheel Disc',
      Frame: 'Aluminum · 2.5" Lift',
    },
    features: ['10" Touchscreen', 'Apple CarPlay', 'Backup Camera', 'Brush Guard', 'LED Lights', 'USB-C PD'],
    colors: ['Gray', 'Lava', 'White', 'Black', 'Blue', 'Champagne'],
  },
  {
    name: 'Denago Rover XL 6',
    brand: 'Denago EV',
    image: 'https://images.squarespace-cdn.com/content/v1/66c13d617fabfa5f1054156f/ad9a23f5-0364-405b-a494-5e440261eb3f/Rover_XL_6_Web_-_Gray.png',
    type: 'Street Legal · Lifted',
    seats: '6 Passenger',
    price: '$12,495',
    msrp: null,
    badge: 'New for 2026',
    specs: {
      Motor: '5kW AC Motor',
      Battery: '51.2V 105Ah LiFePO4',
      Range: '32 miles',
      'Top Speed': '25 mph',
      Brakes: '4-Wheel Disc',
      Frame: 'Carbon Steel',
    },
    features: ['10" Touchscreen', 'Apple CarPlay', 'Backup Camera', 'All Forward-Facing', 'Premium Seats', '110V Outlet'],
    colors: ['Gray', 'Lava', 'White', 'Black', 'Blue', 'Verdant', 'Scarlet'],
  },
  {
    name: 'Epic E40FX',
    brand: 'Epic Carts',
    image: 'https://epiccarts.com/wp-content/uploads/2025/05/FX40-Golf-Car-For-Sale-1.jpg',
    type: 'Street Legal',
    seats: '4 Passenger',
    price: '$12,500',
    msrp: '$12,995',
    badge: '2026 Model',
    specs: {
      Motor: '6.3kW AC Motor',
      Battery: '51V 105Ah Lithium',
      Range: '~25 miles',
      'Top Speed': '25 mph',
      Brakes: '4-Wheel Disc',
      Frame: 'Steel · 14" Wheels',
    },
    features: ['10.1" Touchscreen', 'Wireless Charging', '4x 6.5" Speakers', 'DOT Windshield', 'Lockable Trunk', 'Lit Frunk'],
    colors: ['6 colors available'],
  },
  {
    name: 'Epic E60L',
    brand: 'Epic Carts',
    image: 'https://epiccarts.com/wp-content/uploads/2025/08/EPIC-E60L-Golf-Carts-16_.jpg',
    type: 'Street Legal · Lifted',
    seats: '6 Passenger',
    price: '$13,995',
    msrp: '$14,235',
    badge: null,
    specs: {
      Motor: '5kW AC Motor',
      Battery: '51V 105Ah Lithium',
      Range: '~25 miles',
      'Top Speed': '25 mph',
      Brakes: '4-Wheel Disc',
      Frame: 'Steel · 14" Alloys',
    },
    features: ['10.1" Touchscreen', 'Bluetooth Soundbar', 'Backup Camera', 'DOT Windshield', 'Diamond-Stitch Seats', '3-Point Belts'],
    colors: ['Multiple colors available'],
  },
  {
    name: 'DACH Apollo',
    brand: 'DACH',
    image: 'https://dachvehicles.com/wp-content/uploads/2025/02/P1058247-1-2.png',
    type: 'Street Legal',
    seats: '4 Passenger',
    price: '$12,980',
    msrp: null,
    badge: 'Cruise Control',
    specs: {
      Motor: '6.3kW 72V AC',
      Battery: '73.6V 105Ah LiFePO4',
      Range: '~50 miles',
      'Top Speed': '25 mph',
      Brakes: '4-Wheel Disc',
      Frame: 'Monocoque Unibody',
    },
    features: ['12.3" Touchscreen', 'Apple CarPlay', 'Cruise Control', 'Keyless Start', 'Neon LED Lights', 'Wireless Charging'],
    colors: ['Multiple colors available'],
  },
  {
    name: 'DACH Falcon 2+2',
    brand: 'DACH',
    image: 'https://dachvehicles.com/wp-content/uploads/2025/02/DachVehicles_Falcon2_Right-1.png',
    type: 'Street Legal',
    seats: '4 Passenger',
    price: '$9,980',
    msrp: null,
    badge: 'Solar Roof',
    specs: {
      Motor: '5kW 48V AC',
      Battery: '51.2V 105Ah Lithium',
      Range: '35+ miles',
      'Top Speed': '25 mph',
      Brakes: '4-Wheel Disc',
      Frame: 'Monocoque Stamped',
    },
    features: ['Solar Roof (+20% Range)', '10.1" Touchscreen', 'Apple CarPlay', 'Keyless Start', 'Fold-Flat Rear Seat', 'Wireless Charging'],
    colors: ['Red/White', 'Orange/White', 'Orange/Silver', 'Black/White', 'Black/Green'],
  },
  {
    name: 'Star EV Sirius 4',
    brand: 'Star EV',
    image: 'https://cdn.prod.website-files.com/688255790b8ec29ef563efe6/688bdbf6e2f07d211cebf04a_Sirius%204%20red.webp',
    type: 'Street Legal · All Forward',
    seats: '4 Passenger',
    price: '$13,499',
    msrp: null,
    badge: 'All Forward-Facing',
    specs: {
      Motor: '5kW QDS AC Motor',
      Battery: '105Ah Smart Lithium',
      Range: '60–70 miles',
      'Top Speed': '25 mph',
      Brakes: '4-Wheel Hydraulic',
      Frame: 'Welded Steel',
    },
    features: ['Touchscreen Infotainment', 'Bluetooth Speakers', 'Diamond-Stitch Seats', 'LED Rocker Panels', 'Locking Trunk', '4-Year Warranty'],
    colors: ['Pearl White', 'Jet Black', 'Ruby Red', 'Coastal Blue', 'Metallic Silver', 'British Racing Green', 'Champagne'],
  },
  {
    name: 'Star EV Sirius 4+2',
    brand: 'Star EV',
    image: 'https://cdn.prod.website-files.com/688255790b8ec29ef563efe6/688bdbf6f4f79821ca1d2c0b_Sirius%2042%20red.webp',
    type: 'Street Legal · Luxury',
    seats: '6 Passenger',
    price: '$15,998',
    msrp: null,
    badge: 'Luxury Line',
    specs: {
      Motor: '5kW QDS AC Motor',
      Battery: 'Smart Lithium LiFePO4',
      Range: '60–70 miles',
      'Top Speed': '25 mph',
      Brakes: '4-Wheel Hydraulic',
      Frame: 'Tubular Steel',
    },
    features: ['Touchscreen Infotainment', 'Bluetooth Speakers', 'Insulated Cooler Trunk', 'LED Projection Lights', 'Diamond-Stitch Seats', 'Ambient Lighting'],
    colors: ['Pearl White', 'Jet Black', 'Ruby Red', 'Coastal Blue', 'Metallic Silver', 'British Racing Green', 'Champagne'],
  },
]

const REVIEWS = [
  {
    name: 'James R.',
    location: 'Charleston, SC',
    text: "Best buying experience I've ever had. They delivered my ICON i40 right to my driveway and walked me through everything. Worth every penny.",
    stars: 5,
  },
  {
    name: 'Linda & Tom M.',
    location: 'Hilton Head, SC',
    text: "We use ours every day around the community — errands, dinners, visiting neighbors. The selection, pricing, and no-pressure approach sold us instantly.",
    stars: 5,
  },
  {
    name: 'Derek W.',
    location: 'Myrtle Beach, SC',
    text: "Financing took 10 minutes, delivery was free, and the 2-year warranty gave us total peace of mind. We use it every day around the neighborhood — grocery runs, dinner, the pool.",
    stars: 5,
  },
]

export default function GolfCarts() {
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '', phone: '', zip: '', interest: '' })
  const [submitted, setSubmitted] = useState(false)
  const [expandedCart, setExpandedCart] = useState(null)
  const [specCart, setSpecCart] = useState(null)

  function handleSubmit(e) {
    e.preventDefault()
    setSubmitted(true)
  }

  function updateField(field, value) {
    setForm(prev => ({ ...prev, [field]: value }))
  }

  return (
    <div className="min-h-screen" style={{ fontFamily: '"Outfit", sans-serif', background: '#F5F4F1' }}>

      {/* ── Nav ── */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl" style={{ background: 'rgba(245,244,241,0.92)' }}>
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="text-lg font-semibold tracking-tight text-gray-900">Palmetto Carts</span>
          <div className="hidden sm:flex items-center gap-8 text-[13px] font-medium uppercase tracking-[0.12em] text-gray-400">
            <a href="#inventory" className="hover:text-gray-900 transition">Inventory</a>
            <a href="#reviews" className="hover:text-gray-900 transition">Reviews</a>
            <a href="#claim" className="px-5 py-2 bg-gray-900 text-white hover:bg-gray-800 transition">
              Get Your Quote
            </a>
          </div>
          <a href="#claim" className="sm:hidden px-4 py-2 bg-gray-900 text-white text-[13px] font-medium uppercase tracking-wider">
            Quote
          </a>
        </div>
        <div className="h-px bg-gray-900/5" />
      </nav>

      {/* ── Hero — Offer Front & Center ── */}
      <section className="relative pt-16 overflow-hidden min-h-[90vh] flex items-center">
        {/* Background lifestyle image overlay */}
        <div className="absolute inset-0">
          <div className="absolute inset-0" style={{
            background: 'linear-gradient(170deg, rgba(26,26,24,0.88) 0%, rgba(26,26,24,0.75) 50%, rgba(26,26,24,0.92) 100%)',
          }} />
          <div className="absolute inset-0 opacity-[0.02]" style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, #fff 0.5px, transparent 0)',
            backgroundSize: '32px 32px',
          }} />
        </div>

        {/* Accent glow */}
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] rounded-full opacity-10"
             style={{ background: 'radial-gradient(circle, rgba(166,152,130,0.4) 0%, transparent 70%)' }} />

        <div className="relative w-full max-w-6xl mx-auto px-6 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: The Offer */}
            <div>
              <p className="animate-fade-up text-[13px] font-medium uppercase tracking-[0.25em] mb-6"
                 style={{ color: '#A69882' }}>
                Street-Legal &mdash; 2026 Models Now In Stock
              </p>
              <h1 className="animate-fade-up delay-100 text-4xl sm:text-6xl font-light text-white leading-[1.05] tracking-tight mb-4"
                  style={{ fontFamily: '"Playfair Display", Georgia, serif' }}>
                0% Financing
                <br />
                <span className="font-semibold" style={{ color: '#D4C5B0' }}>+ Free Delivery</span>
              </h1>
              <p className="animate-fade-up delay-200 text-xl font-light mb-2" style={{ color: 'rgba(255,255,255,0.7)' }}>
                Starting at <span className="font-semibold text-white">$195/mo</span>
              </p>
              <p className="animate-fade-up delay-200 text-base font-light leading-relaxed mb-8 max-w-md"
                 style={{ color: 'rgba(255,255,255,0.4)' }}>
                Street-legal carts built for your neighborhood, not the golf course.
                Cruise your community in style. In-stock and ready for same-week delivery.
              </p>

              <div className="animate-fade-up delay-300 flex flex-wrap gap-3 mb-10">
                <a href="#claim"
                  className="inline-flex items-center gap-3 text-[13px] font-medium uppercase tracking-[0.15em] px-8 py-4 transition"
                  style={{ background: '#A69882', color: '#1A1A18' }}
                  onMouseEnter={(e) => e.target.style.background = '#B8A994'}
                  onMouseLeave={(e) => e.target.style.background = '#A69882'}>
                  Claim This Offer
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 16 16" stroke="currentColor" strokeWidth="1.5">
                    <path d="M3 8h10M9 4l4 4-4 4" />
                  </svg>
                </a>
                <a href="#inventory"
                  className="inline-flex items-center gap-3 text-[13px] font-medium uppercase tracking-[0.15em] px-8 py-4 transition border"
                  style={{ borderColor: 'rgba(255,255,255,0.15)', color: 'rgba(255,255,255,0.6)' }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)'; e.currentTarget.style.color = '#fff' }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)'; e.currentTarget.style.color = 'rgba(255,255,255,0.6)' }}>
                  View Inventory
                </a>
              </div>

              {/* Quick trust signals */}
              <div className="animate-fade-up delay-400 flex flex-wrap gap-6">
                {[
                  ['200+', 'Carts Sold'],
                  ['4.9 ★', 'Google Rating'],
                  ['2-Year', 'Full Warranty'],
                ].map(([val, label]) => (
                  <div key={label}>
                    <div className="text-lg font-semibold text-white">{val}</div>
                    <div className="text-[13px] uppercase tracking-[0.15em]" style={{ color: 'rgba(255,255,255,0.3)' }}>{label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Featured cart image */}
            <div className="animate-fade-up delay-300 hidden lg:block">
              <div className="relative">
                <img
                  src="https://iconev.com/wp-content/uploads/2024/09/ICON-i40L-Golf-Carts.jpg"
                  alt="ICON i40L Golf Cart"
                  className="w-full rounded-sm"
                  style={{ filter: 'brightness(0.95) contrast(1.05)' }}
                />
                <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                  <div>
                    <div className="text-[13px] font-medium uppercase tracking-[0.15em]" style={{ color: '#A69882' }}>ICON i40L</div>
                    <div className="text-base font-light text-white/60">4-Seat · Street Legal · From $10,995</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Brand Logo Bar ── */}
      <section className="border-y" style={{ borderColor: 'rgba(0,0,0,0.06)' }}>
        <div className="max-w-6xl mx-auto px-6 py-6 overflow-hidden">
          <div className="flex items-center justify-center gap-10 flex-wrap">
            {BRANDS.map((brand) => (
              <div key={brand.name} className="flex items-center h-8 opacity-40 hover:opacity-70 transition-opacity">
                {brand.logo ? (
                  <img src={brand.logo} alt={brand.name} className="h-6 sm:h-7 object-contain"
                       style={{ filter: 'grayscale(100%) brightness(0.4)' }} />
                ) : (
                  <span className="text-[13px] font-medium uppercase tracking-[0.2em] text-gray-400">
                    {brand.name}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Inventory — Full Spec Cards ── */}
      <section id="inventory" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-14">
            <p className="text-[13px] font-medium uppercase tracking-[0.2em] mb-3" style={{ color: '#A69882' }}>
              Street-Legal &amp; Neighborhood Ready
            </p>
            <h2 className="text-3xl sm:text-4xl font-light text-gray-900 tracking-tight"
                style={{ fontFamily: '"Playfair Display", Georgia, serif' }}>
              2026 Featured <span className="font-semibold">Models</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {CARTS.map((cart) => {
              const isExpanded = expandedCart === cart.name
              return (
                <div key={cart.name}
                  className="group flex flex-col bg-white overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-black/[0.04]"
                  style={{ border: '1px solid rgba(0,0,0,0.06)' }}>

                  {/* Cart Image — contain so nothing is cropped */}
                  <div className="relative aspect-[16/10] overflow-hidden" style={{ background: '#EDECEA' }}>
                    <img src={cart.image} alt={cart.name}
                      className="w-full h-full object-contain p-3 group-hover:scale-[1.03] transition-transform duration-700" />
                    {cart.badge && (
                      <div className="absolute top-3 left-3 text-[11px] font-semibold uppercase tracking-[0.15em] px-2.5 py-1"
                           style={{ background: '#A69882', color: '#1A1A18' }}>
                        {cart.badge}
                      </div>
                    )}
                    <div className="absolute top-3 right-3 text-[11px] font-medium uppercase tracking-[0.15em] px-2.5 py-1 bg-white/90 backdrop-blur-sm text-gray-900">
                      {cart.seats}
                    </div>
                  </div>

                  {/* Cart Info */}
                  <div className="p-5 flex-1 flex flex-col">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <p className="text-[12px] font-medium uppercase tracking-[0.15em] mb-0.5" style={{ color: '#A69882' }}>
                          {cart.brand}
                        </p>
                        <h3 className="text-base font-medium text-gray-900">{cart.name}</h3>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-semibold text-gray-900">{cart.price}</div>
                        {cart.msrp && (
                          <div className="text-[12px] text-gray-400 line-through">{cart.msrp}</div>
                        )}
                      </div>
                    </div>

                    {/* Key Specs — compact 3-col */}
                    <div className="grid grid-cols-3 gap-2 mb-3 py-3" style={{ borderTop: '1px solid rgba(0,0,0,0.05)', borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
                      {Object.entries(cart.specs).map(([key, val]) => (
                        <div key={key}>
                          <div className="text-[11px] font-medium uppercase tracking-[0.1em] text-gray-400 mb-0.5">{key}</div>
                          <div className="text-[13px] font-medium text-gray-800">{val}</div>
                        </div>
                      ))}
                    </div>

                    {/* Standard Features — compact tags */}
                    <div className="flex flex-wrap gap-1 mb-3">
                      {cart.features.slice(0, 4).map((f) => (
                        <span key={f} className="text-[12px] font-light px-2 py-0.5 text-gray-500"
                              style={{ background: '#F5F4F1' }}>
                          {f}
                        </span>
                      ))}
                      {cart.features.length > 4 && (
                        <span className="text-[12px] font-light px-2 py-0.5 text-gray-400"
                              style={{ background: '#F5F4F1' }}>
                          +{cart.features.length - 4} more
                        </span>
                      )}
                    </div>

                    {/* Colors */}
                    <button
                      onClick={() => setExpandedCart(isExpanded ? null : cart.name)}
                      className="text-[12px] font-medium uppercase tracking-[0.12em] transition flex items-center gap-1.5"
                      style={{ color: '#A69882' }}>
                      {cart.colors.length} Colors
                      <svg className={`w-3 h-3 transition-transform ${isExpanded ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 12 12" stroke="currentColor" strokeWidth="1.5">
                        <path d="M3 5l3 3 3-3" />
                      </svg>
                    </button>
                    {isExpanded && (
                      <div className="flex flex-wrap gap-1 mt-2 animate-fade-in">
                        {cart.colors.map((c) => (
                          <span key={c} className="text-[12px] font-light px-2 py-0.5 text-gray-500 border" style={{ borderColor: 'rgba(0,0,0,0.06)' }}>
                            {c}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* CTA */}
                    <button
                      onClick={() => setSpecCart(cart)}
                      className="block w-full mt-auto pt-4 py-2.5 text-center text-[13px] font-medium uppercase tracking-[0.15em] transition cursor-pointer"
                      style={{ background: '#1A1A18', color: '#fff' }}
                      onMouseEnter={(e) => e.target.style.background = '#333'}
                      onMouseLeave={(e) => e.target.style.background = '#1A1A18'}>
                      View Full Specs
                    </button>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── Social Proof ── */}
      <section id="reviews" className="py-20 px-6" style={{ background: '#EDECEA' }}>
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-12 gap-4">
            <div>
              <p className="text-[13px] font-medium uppercase tracking-[0.2em] mb-3" style={{ color: '#A69882' }}>
                Customer Reviews
              </p>
              <h2 className="text-3xl sm:text-4xl font-light text-gray-900 tracking-tight"
                  style={{ fontFamily: '"Playfair Display", Georgia, serif' }}>
                Don't Take Our <span className="font-semibold">Word for It</span>
              </h2>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex gap-0.5">
                {[1,2,3,4,5].map(i => (
                  <svg key={i} className="w-5 h-5" style={{ color: '#A69882' }} viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-base font-medium text-gray-900">4.9 / 5</span>
              <span className="text-[13px] text-gray-400">on Google</span>
            </div>
          </div>

          <div className="grid sm:grid-cols-3 gap-5">
            {REVIEWS.map((r) => (
              <div key={r.name} className="bg-white p-6" style={{ border: '1px solid rgba(0,0,0,0.04)' }}>
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: r.stars }).map((_, j) => (
                    <svg key={j} className="w-3.5 h-3.5" style={{ color: '#A69882' }} viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-base font-light leading-relaxed text-gray-600 mb-4">"{r.text}"</p>
                <div>
                  <div className="text-base font-medium text-gray-900">{r.name}</div>
                  <div className="text-[13px] font-light text-gray-400">{r.location}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Lead Capture Form ── */}
      <section id="claim" className="px-6 py-24 relative" style={{ background: '#1A1A18' }}>
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, #fff 0.5px, transparent 0)',
          backgroundSize: '40px 40px',
        }} />

        <div className="relative max-w-xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[13px] font-medium uppercase tracking-[0.2em] mb-5" style={{ color: '#A69882' }}>
              Claim Your Offer
            </p>
            <h2 className="text-3xl sm:text-4xl font-light text-white leading-tight tracking-tight mb-4"
                style={{ fontFamily: '"Playfair Display", Georgia, serif' }}>
              0% Financing + <span className="font-semibold" style={{ color: '#D4C5B0' }}>Free Delivery</span>
            </h2>
            <p className="text-base font-light leading-relaxed" style={{ color: '#7A7672' }}>
              Fill out the form below and a cart specialist will reach out within 24 hours
              with a personalized quote.
            </p>
          </div>

          {submitted ? (
            <div className="text-center py-16">
              <div className="w-16 h-16 rounded-full mx-auto mb-6 flex items-center justify-center"
                   style={{ background: 'rgba(166,152,130,0.15)' }}>
                <svg className="w-7 h-7" style={{ color: '#A69882' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-light text-white mb-2" style={{ fontFamily: '"Playfair Display", Georgia, serif' }}>
                You're All Set
              </h3>
              <p className="text-base font-light" style={{ color: '#7A7672' }}>
                A specialist will be in touch within 24 hours with your personalized quote.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="relative p-8 sm:p-10" style={{ border: '1px solid rgba(166,152,130,0.15)' }}>
                {/* Corner brackets */}
                <div className="absolute top-0 left-0 w-5 h-5 border-t-2 border-l-2" style={{ borderColor: '#A69882' }} />
                <div className="absolute top-0 right-0 w-5 h-5 border-t-2 border-r-2" style={{ borderColor: '#A69882' }} />
                <div className="absolute bottom-0 left-0 w-5 h-5 border-b-2 border-l-2" style={{ borderColor: '#A69882' }} />
                <div className="absolute bottom-0 right-0 w-5 h-5 border-b-2 border-r-2" style={{ borderColor: '#A69882' }} />

                <div className="space-y-5">
                  <div className="grid grid-cols-2 gap-4">
                    {[['firstName', 'First Name', 'text', 'John'], ['lastName', 'Last Name', 'text', 'Smith']].map(([field, label, type, ph]) => (
                      <div key={field}>
                        <label className="block text-[13px] font-medium uppercase tracking-[0.15em] text-white/40 mb-2">{label}</label>
                        <input type={type} required value={form[field]}
                          onChange={(e) => updateField(field, e.target.value)}
                          className="w-full bg-transparent border-b text-white text-base font-light pb-2 focus:outline-none transition placeholder-white/20"
                          style={{ borderColor: 'rgba(255,255,255,0.1)' }}
                          onFocus={(e) => e.target.style.borderColor = '#A69882'}
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
                      onFocus={(e) => e.target.style.borderColor = '#A69882'}
                      onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
                      placeholder="john@example.com" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    {[['phone', 'Phone', 'tel', '(555) 123-4567'], ['zip', 'ZIP Code', 'text', '29401']].map(([field, label, type, ph]) => (
                      <div key={field}>
                        <label className="block text-[13px] font-medium uppercase tracking-[0.15em] text-white/40 mb-2">{label}</label>
                        <input type={type} required={field === 'phone'} value={form[field]}
                          onChange={(e) => updateField(field, e.target.value)}
                          className="w-full bg-transparent border-b text-white text-base font-light pb-2 focus:outline-none transition placeholder-white/20"
                          style={{ borderColor: 'rgba(255,255,255,0.1)' }}
                          onFocus={(e) => e.target.style.borderColor = '#A69882'}
                          onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
                          placeholder={ph} />
                      </div>
                    ))}
                  </div>
                  <div>
                    <label className="block text-[13px] font-medium uppercase tracking-[0.15em] text-white/40 mb-2">I'm Interested In</label>
                    <select value={form.interest}
                      onChange={(e) => updateField('interest', e.target.value)}
                      className="w-full bg-transparent border-b text-base font-light pb-2 focus:outline-none transition appearance-none cursor-pointer"
                      style={{ borderColor: 'rgba(255,255,255,0.1)', color: form.interest ? '#fff' : 'rgba(255,255,255,0.2)' }}
                      onFocus={(e) => e.target.style.borderColor = '#A69882'}
                      onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}>
                      <option value="" className="text-gray-900">Select one...</option>
                      <option value="new-4seat" className="text-gray-900">New 4-Seat Cart</option>
                      <option value="new-6seat" className="text-gray-900">New 6-Seat Cart</option>
                      <option value="custom" className="text-gray-900">Custom Build</option>
                      <option value="financing" className="text-gray-900">Financing Info</option>
                      <option value="trade-in" className="text-gray-900">Trade-In</option>
                    </select>
                  </div>

                  <button type="submit"
                    className="w-full mt-4 py-4 text-[13px] font-medium uppercase tracking-[0.2em] transition"
                    style={{ background: '#A69882', color: '#1A1A18' }}
                    onMouseEnter={(e) => e.target.style.background = '#B8A994'}
                    onMouseLeave={(e) => e.target.style.background = '#A69882'}>
                    Claim Your Offer &rarr;
                  </button>
                </div>
              </div>
              <p className="text-center text-[13px] font-light mt-4" style={{ color: '#4A4642' }}>
                No obligations. No pressure. Just carts.
              </p>
            </form>
          )}
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="px-6 py-8" style={{ background: '#1A1A18', borderTop: '1px solid rgba(255,255,255,0.04)' }}>
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <span className="text-[13px] font-light" style={{ color: '#4A4642' }}>
            &copy; {new Date().getFullYear()} Palmetto Carts Co.
          </span>
          <span className="text-[13px] font-light" style={{ color: '#4A4642' }}>Palmetto, SC</span>
        </div>
      </footer>

      {/* ── Spec Card Modal ── */}
      {specCart && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4"
             onClick={() => setSpecCart(null)}>
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
          <div className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto bg-white shadow-2xl"
               onClick={(e) => e.stopPropagation()}>
            {/* Modal header with image */}
            <div className="relative aspect-[16/10] overflow-hidden" style={{ background: '#EDECEA' }}>
              <img src={specCart.image} alt={specCart.name}
                   className="w-full h-full object-contain p-4" />
              {specCart.badge && (
                <div className="absolute top-3 left-3 text-[11px] font-semibold uppercase tracking-[0.15em] px-2.5 py-1"
                     style={{ background: '#A69882', color: '#1A1A18' }}>
                  {specCart.badge}
                </div>
              )}
              <button onClick={() => setSpecCart(null)}
                      className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 flex items-center justify-center text-lg hover:bg-white transition cursor-pointer text-gray-700">
                &times;
              </button>
            </div>

            {/* Cart name + price */}
            <div className="px-6 pt-5 pb-3 flex items-start justify-between" style={{ borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
              <div>
                <p className="text-[12px] font-medium uppercase tracking-[0.15em] mb-0.5" style={{ color: '#A69882' }}>
                  {specCart.brand}
                </p>
                <h3 className="text-xl font-medium text-gray-900">{specCart.name}</h3>
                <span className="text-[13px] text-gray-400">{specCart.type} · {specCart.seats}</span>
              </div>
              <div className="text-right">
                <div className="text-2xl font-semibold text-gray-900">{specCart.price}</div>
                {specCart.msrp && (
                  <div className="text-[13px] text-gray-400 line-through">{specCart.msrp}</div>
                )}
              </div>
            </div>

            {/* Full specs */}
            <div className="px-6 py-4">
              <h4 className="text-[12px] font-medium uppercase tracking-[0.15em] mb-3" style={{ color: '#A69882' }}>
                Specifications
              </h4>
              <div className="space-y-0">
                {Object.entries(specCart.specs).map(([label, value]) => (
                  <div key={label} className="flex py-2.5" style={{ borderBottom: '1px solid rgba(0,0,0,0.04)' }}>
                    <span className="w-28 shrink-0 text-[12px] font-medium uppercase tracking-wide text-gray-400">
                      {label}
                    </span>
                    <span className="text-[14px] font-medium text-gray-800">
                      {value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Features */}
            <div className="px-6 pb-4">
              <h4 className="text-[12px] font-medium uppercase tracking-[0.15em] mb-3" style={{ color: '#A69882' }}>
                Standard Features
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {specCart.features.map((f) => (
                  <span key={f} className="text-[13px] font-light px-2.5 py-1 text-gray-600"
                        style={{ background: '#F5F4F1' }}>
                    {f}
                  </span>
                ))}
              </div>
            </div>

            {/* Colors */}
            <div className="px-6 pb-4">
              <h4 className="text-[12px] font-medium uppercase tracking-[0.15em] mb-3" style={{ color: '#A69882' }}>
                Available Colors
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {specCart.colors.map((c) => (
                  <span key={c} className="text-[13px] font-light px-2.5 py-1 text-gray-500 border"
                        style={{ borderColor: 'rgba(0,0,0,0.06)' }}>
                    {c}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="px-6 pb-6 pt-2">
              <a href="#claim"
                 onClick={() => setSpecCart(null)}
                 className="block w-full py-3.5 text-center text-[13px] font-medium uppercase tracking-[0.15em] transition"
                 style={{ background: '#1A1A18', color: '#fff' }}
                 onMouseEnter={(e) => e.target.style.background = '#333'}
                 onMouseLeave={(e) => e.target.style.background = '#1A1A18'}>
                Request a Quote
              </a>
            </div>
          </div>
        </div>
      )}

      {/* ── Back to Gallery ── */}
      <Link to="/"
        className="fixed bottom-5 left-5 z-50 text-[13px] font-medium uppercase tracking-[0.1em] px-4 py-2 backdrop-blur-xl transition flex items-center gap-2"
        style={{ background: 'rgba(26,26,24,0.7)', color: 'rgba(255,255,255,0.4)', border: '1px solid rgba(255,255,255,0.06)' }}
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
