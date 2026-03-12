import { Link } from 'react-router-dom'

const DEMOS = [
  {
    slug: 'golf-carts',
    title: 'Golf Cart Dealer',
    subtitle: 'Palmetto Carts Co.',
    description: 'Premium golf cart dealership with inventory showcase, financing CTA, and lead capture.',
    gradient: 'from-emerald-600 to-teal-800',
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="8" y="18" width="28" height="14" rx="3" />
        <circle cx="14" cy="36" r="4" />
        <circle cx="30" cy="36" r="4" />
        <path d="M36 18V12a2 2 0 00-2-2H20l-4 8" />
        <line x1="10" y1="14" x2="20" y2="14" />
        <path d="M36 22h4a2 2 0 012 2v4" />
      </svg>
    ),
  },
  {
    slug: 'med-spa',
    title: 'Med Spa',
    subtitle: 'Aura Health & Spa',
    description: 'Luxury medical spa with service showcase, before/after gallery, and booking form.',
    gradient: 'from-[#5c8ba3] to-[#586e89]',
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M24 4c-4 6-12 10-12 20a12 12 0 0024 0C36 14 28 10 24 4z" />
        <path d="M24 28v-8M20 24h8" />
      </svg>
    ),
  },
  {
    slug: 'central-coast-carts',
    title: 'Golf Cart Dealer (Branded)',
    subtitle: 'Central Coast Carts',
    description: 'Branded dealership page with dark navy theme, service shop, FAQ, and California-focused messaging.',
    gradient: 'from-[#000321] to-[#08BDBD]',
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M24 6l4 8h8l-6 6 2 8-8-4-8 4 2-8-6-6h8z" />
        <circle cx="24" cy="36" r="6" />
        <path d="M20 36h8" />
      </svg>
    ),
  },
  {
    slug: 'automotive',
    title: 'Luxury EV Dealership',
    subtitle: 'Aether Motors',
    description: 'Ultra-premium electric vehicle dealership with dark luxury aesthetic, spec modals, and private showing booking.',
    gradient: 'from-[#1a1a1a] to-[#C4A265]',
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M8 28h32M12 28l3-10h18l3 10" />
        <circle cx="14" cy="34" r="4" />
        <circle cx="34" cy="34" r="4" />
        <path d="M18 34h12" />
        <path d="M20 18l2-6h4l2 6" />
      </svg>
    ),
  },
  {
    slug: 'automotive-light',
    title: 'Luxury EV Dealership (Light)',
    subtitle: 'Aether Motors',
    description: 'Same premium EV dealership with a clean, light aesthetic — warm whites, bronze accents, and refined minimalism.',
    gradient: 'from-[#FAFAF8] to-[#8B7355]',
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M8 28h32M12 28l3-10h18l3 10" />
        <circle cx="14" cy="34" r="4" />
        <circle cx="34" cy="34" r="4" />
        <path d="M18 34h12" />
        <path d="M20 18l2-6h4l2 6" />
      </svg>
    ),
  },
  {
    slug: null,
    title: 'Solar Installer',
    subtitle: 'Coming Soon',
    description: 'Solar energy company with savings calculator, testimonials, and consultation booking.',
    gradient: 'from-amber-500 to-orange-700',
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="24" cy="24" r="8" />
        <path d="M24 4v6M24 38v6M4 24h6M38 24h6M10 10l4 4M34 34l4 4M10 38l4-4M34 14l4-4" />
      </svg>
    ),
  },
  {
    slug: null,
    title: 'Roofing Company',
    subtitle: 'Coming Soon',
    description: 'Home services with damage assessment CTA, project gallery, and free estimate form.',
    gradient: 'from-slate-600 to-slate-900',
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4 22L24 6l20 16" />
        <rect x="10" y="22" width="28" height="20" rx="1" />
        <rect x="20" y="30" width="8" height="12" />
      </svg>
    ),
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
              DapperIQ Demos
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
                {/* Gradient header strip */}
                <div className={`h-32 bg-gradient-to-br ${demo.gradient} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/20" />
                  <div className="absolute bottom-4 left-5 text-white/80">
                    {demo.icon}
                  </div>
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
            DapperIQ &mdash; Dapper Market Solutions
          </p>
        </div>
      </div>
    </div>
  )
}
