import { Link } from 'react-router-dom'

const DEMOS = [
  {
    slug: 'golf-carts',
    title: 'Golf Cart Dealer',
    subtitle: 'Palmetto Carts Co.',
    description: 'Premium golf cart dealership with inventory showcase, financing CTA, and lead capture.',
    image: 'https://iconev.com/wp-content/uploads/2024/09/ICON-i40L-Golf-Carts.jpg',
  },
  {
    slug: 'med-spa',
    title: 'Med Spa',
    subtitle: 'Aura Health & Spa',
    description: 'Luxury medical spa with service showcase, before/after gallery, and booking form.',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&q=80',
  },
  {
    slug: 'central-coast-carts',
    title: 'Golf Cart Dealer (Branded)',
    subtitle: 'Central Coast Carts',
    description: 'Branded dealership page with California coastal theme, service shop, FAQ, and lead capture.',
    image: 'https://epiccarts.com/wp-content/uploads/2025/08/EPIC-E60L-Golf-Carts-16_.jpg',
  },
  {
    slug: 'automotive',
    title: 'Luxury EV Dealership (Dark)',
    subtitle: 'Aether Motors',
    description: 'Ultra-premium electric vehicle dealership with dark luxury aesthetic, spec modals, and private showing.',
    image: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?w=800&q=80',
  },
  {
    slug: 'automotive-light',
    title: 'Luxury EV Dealership (Light)',
    subtitle: 'Aether Motors',
    description: 'Same premium EV dealership with a clean, light aesthetic — warm whites, bronze accents, and refined minimalism.',
    image: 'https://images.unsplash.com/photo-1619767886558-efdc259cde1a?w=800&q=80',
  },
  {
    slug: null,
    title: 'Solar Installer',
    subtitle: 'Coming Soon',
    description: 'Solar energy company with savings calculator, testimonials, and consultation booking.',
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80',
  },
  {
    slug: null,
    title: 'Roofing Company',
    subtitle: 'Coming Soon',
    description: 'Home services with damage assessment CTA, project gallery, and free estimate form.',
    image: 'https://images.unsplash.com/photo-1632759145351-1d592919f522?w=800&q=80',
  },
]

export default function Gallery() {
  return (
    <div className="min-h-screen bg-[#0a0e17] text-white font-body">
      {/* Subtle grid background */}
      <div className="fixed inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative max-w-5xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="animate-fade-up mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center">
              <span className="text-[#0a0e17] font-bold text-lg font-display">D</span>
            </div>
            <span className="text-sm font-medium tracking-widest uppercase text-white/40">
              Dapper Market Solutions
            </span>
          </div>
          <h1 className="text-5xl sm:text-6xl font-display font-bold leading-[1.1] mb-5 tracking-tight">
            Landing Page
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-amber-500">
              Templates
            </span>
          </h1>
          <p className="text-lg text-white/50 max-w-xl leading-relaxed">
            High-converting landing pages built for lead generation.
            Each template is tailored to a specific industry and optimized for conversions.
          </p>
        </div>

        {/* Demo Grid */}
        <div className="grid sm:grid-cols-2 gap-5">
          {DEMOS.map((demo, i) => {
            const isLive = !!demo.slug
            const Card = isLive ? Link : 'div'
            const cardProps = isLive ? { to: `/${demo.slug}` } : {}

            return (
              <Card
                key={demo.title}
                {...cardProps}
                className={`
                  group relative rounded-2xl border overflow-hidden
                  animate-fade-up
                  ${isLive
                    ? 'border-white/10 hover:border-white/25 cursor-pointer'
                    : 'border-white/5 opacity-50 cursor-default'
                  }
                `}
                style={{ animationDelay: `${200 + i * 100}ms` }}
              >
                {/* Image header */}
                <div className="h-40 relative overflow-hidden">
                  <img
                    src={demo.image}
                    alt={demo.title}
                    className="w-full h-full object-cover group-hover:scale-[1.05] transition-transform duration-700"
                    style={{ filter: isLive ? 'brightness(0.7)' : 'brightness(0.4) grayscale(0.5)' }}
                  />
                  <div className="absolute inset-0" style={{
                    background: 'linear-gradient(180deg, transparent 30%, rgba(17,24,37,0.8) 100%)',
                  }} />
                  {!isLive && (
                    <div className="absolute top-4 right-4 text-[11px] font-bold uppercase tracking-widest
                                    bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full">
                      Coming Soon
                    </div>
                  )}
                  {isLive && (
                    <div className="absolute top-4 right-4 flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-widest
                                    bg-emerald-500/30 backdrop-blur-sm text-emerald-200 px-3 py-1 rounded-full">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      Live
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-5 bg-[#111825]">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="text-lg font-semibold text-white">{demo.title}</h3>
                      <span className="text-sm text-white/30">{demo.subtitle}</span>
                    </div>
                    {isLive && (
                      <span className="mt-1 text-white/30 group-hover:text-amber-400 group-hover:translate-x-1 transition-all text-xl">
                        &rarr;
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-white/40 leading-relaxed">{demo.description}</p>
                </div>
              </Card>
            )
          })}
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-white/5 text-center animate-fade-up delay-700">
          <p className="text-sm text-white/25">
            Dapper Market Solutions
          </p>
        </div>
      </div>
    </div>
  )
}
