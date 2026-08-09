import { useState, useEffect } from 'react'
import imgFlowers from '@/imports/40bb643c3e39e39fde75a3913af79f0e.jpg'
import imgShore from '@/imports/image.jpg'

const NAV_LINKS = ['About', 'Work', 'Writing', 'Contact']

const PROJECTS = [
  {
    title: 'Bloom',
    year: '2024',
    tags: ['Interaction Design', 'Creative Direction'],
    desc: 'An immersive installation exploring the relationship between digital flora and physical space, exhibited at Centre Pompidou.',
  },
  {
    title: 'Nocturne',
    year: '2024',
    tags: ['Brand Identity', 'Typography'],
    desc: 'Visual identity for an independent music label rooted in ambient and contemporary classical — built around deep field and luminance.',
  },
  {
    title: 'Reverie',
    year: '2023',
    tags: ['Web Experience', 'Motion'],
    desc: 'A browser-native editorial platform for photographic essays. Full-bleed, keyboard-driven, fully bespoke.',
  },
  {
    title: 'Petal',
    year: '2023',
    tags: ['Product Design', 'Systems'],
    desc: 'Design system and component library for a wellness app — soft, considered, and accessible across all contrast levels.',
  },
]

const WRITINGS = [
  { title: 'On Designing in the Dark', date: 'June 2025', read: '6 min' },
  { title: 'The Aesthetics of Latency', date: 'March 2025', read: '9 min' },
  { title: 'Flowers as Interface', date: 'November 2024', read: '5 min' },
]

function Sparkles() {
  const sparks = [
    { top: '12%', left: '18%', delay: '0s' },
    { top: '27%', left: '72%', delay: '0.8s' },
    { top: '48%', left: '9%', delay: '1.4s' },
    { top: '61%', left: '85%', delay: '0.3s' },
    { top: '78%', left: '44%', delay: '1.9s' },
    { top: '34%', left: '54%', delay: '2.2s' },
    { top: '88%', left: '22%', delay: '0.6s' },
    { top: '15%', left: '88%', delay: '1.1s' },
    { top: '55%', left: '61%', delay: '1.7s' },
  ]
  return (
    <>
      {sparks.map((s, i) => (
        <span
          key={i}
          className="sparkle"
          style={{ top: s.top, left: s.left, animationDelay: s.delay }}
        />
      ))}
    </>
  )
}

function Nav({ active }: { active: string }) {
  const [open, setOpen] = useState(false)
  return (
    <header
      style={{
        position: 'fixed',
        top: 44,
        left: 0,
        right: 0,
        zIndex: 50,
        borderBottom: '1px solid #2a1a4a44',
        backdropFilter: 'blur(20px)',
        backgroundColor: '#08041288',
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          padding: '0 32px',
          height: 64,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <a
          href="#hero"
          className="font-display"
          style={{
            fontSize: 20,
            fontWeight: 600,
            color: '#f0e6ff',
            textDecoration: 'none',
            letterSpacing: '-0.01em',
          }}
        >
          <span style={{ color: '#e855b3' }}>✦</span> Lyra Moon
        </a>
        <nav style={{ display: 'flex', gap: 36 }}>
          {NAV_LINKS.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              style={{
                fontSize: 14,
                fontWeight: 400,
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
                color: active === l.toLowerCase() ? '#e855b3' : '#9b84c4',
                textDecoration: 'none',
                transition: 'color 0.2s',
              }}
              onMouseEnter={(e) => ((e.target as HTMLAnchorElement).style.color = '#f0e6ff')}
              onMouseLeave={(e) =>
                ((e.target as HTMLAnchorElement).style.color =
                  active === l.toLowerCase() ? '#e855b3' : '#9b84c4')
              }
            >
              {l}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
      }}
    >
      {/* Background image with overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `url(${imgFlowers})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          opacity: 0.55,
        }}
      />
      {/* Deep dark gradient on top */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'radial-gradient(ellipse 80% 60% at 60% 100%, #2d0a3a55 0%, transparent 60%), linear-gradient(180deg, #080412 0%, #080412aa 40%, #08041299 60%, #080412cc 100%)',
        }}
      />
      {/* Bloom glows */}
      <div
        className="petal-blur pulse-glow"
        style={{
          width: 500,
          height: 500,
          background: 'radial-gradient(circle, #e855b3 0%, transparent 70%)',
          opacity: 0.12,
          bottom: '-100px',
          right: '-80px',
        }}
      />
      <div
        className="petal-blur pulse-glow"
        style={{
          width: 300,
          height: 300,
          background: 'radial-gradient(circle, #bf7af0 0%, transparent 70%)',
          opacity: 0.15,
          top: '20%',
          right: '20%',
          animationDelay: '2s',
        }}
      />
      <div
        className="petal-blur"
        style={{
          width: 200,
          height: 200,
          background: 'radial-gradient(circle, #ff82d4 0%, transparent 70%)',
          opacity: 0.1,
          top: '10%',
          left: '5%',
        }}
      />
      <Sparkles />

      {/* Content */}
      <div
        style={{
          position: 'relative',
          zIndex: 1,
          maxWidth: 1200,
          margin: '0 auto',
          padding: '0 32px',
          paddingTop: 120,
          paddingBottom: 80,
        }}
      >
        <p
          style={{
            fontSize: 12,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: '#e855b3',
            marginBottom: 24,
            fontWeight: 500,
          }}
        >
          Designer & Creative Director
        </p>
        <h1
          className="font-display glow-pink"
          style={{
            fontSize: 'clamp(52px, 8vw, 110px)',
            fontWeight: 700,
            lineHeight: 1.02,
            letterSpacing: '-0.02em',
            color: '#f0e6ff',
            margin: '0 0 24px',
            maxWidth: 900,
          }}
        >
          Making things{' '}
          <em style={{ color: '#e855b3', fontStyle: 'italic' }}>bloom</em>{' '}
          in the dark.
        </h1>
        <p
          style={{
            fontSize: 18,
            lineHeight: 1.7,
            color: '#9b84c4',
            maxWidth: 520,
            marginBottom: 52,
            fontWeight: 300,
          }}
        >
          I design digital experiences that feel alive — rooted in light, texture, and the quiet drama of things that glow.
        </p>
        <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
          <a
            href="#work"
            style={{
              display: 'inline-block',
              padding: '14px 36px',
              background: '#e855b3',
              color: '#fff',
              borderRadius: 2,
              fontSize: 14,
              fontWeight: 500,
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              textDecoration: 'none',
              boxShadow: '0 0 30px #e855b366, 0 0 60px #e855b322',
              transition: 'box-shadow 0.3s, transform 0.2s',
            }}
            onMouseEnter={(e) => {
              const el = e.target as HTMLAnchorElement
              el.style.boxShadow = '0 0 50px #e855b388, 0 0 100px #e855b344'
              el.style.transform = 'translateY(-2px)'
            }}
            onMouseLeave={(e) => {
              const el = e.target as HTMLAnchorElement
              el.style.boxShadow = '0 0 30px #e855b366, 0 0 60px #e855b322'
              el.style.transform = 'translateY(0)'
            }}
          >
            View Work
          </a>
          <a
            href="#contact"
            style={{
              display: 'inline-block',
              padding: '14px 36px',
              border: '1px solid #2a1a4a',
              color: '#9b84c4',
              borderRadius: 2,
              fontSize: 14,
              fontWeight: 500,
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              textDecoration: 'none',
              transition: 'color 0.2s, border-color 0.2s',
            }}
            onMouseEnter={(e) => {
              const el = e.target as HTMLAnchorElement
              el.style.color = '#f0e6ff'
              el.style.borderColor = '#e855b355'
            }}
            onMouseLeave={(e) => {
              const el = e.target as HTMLAnchorElement
              el.style.color = '#9b84c4'
              el.style.borderColor = '#2a1a4a'
            }}
          >
            Get in Touch
          </a>
        </div>

        {/* Scroll cue */}
        <div
          style={{
            position: 'absolute',
            bottom: 40,
            left: 32,
            display: 'flex',
            alignItems: 'center',
            gap: 12,
            color: '#4a3566',
            fontSize: 12,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
          }}
        >
          <div style={{ width: 1, height: 48, background: 'linear-gradient(to bottom, transparent, #4a3566)' }} />
          Scroll
        </div>
      </div>
    </section>
  )
}

function About() {
  return (
    <section
      id="about"
      style={{
        maxWidth: 1200,
        margin: '0 auto',
        padding: '120px 32px',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 80,
        alignItems: 'center',
      }}
    >
      {/* Left: image + decoration */}
      <div style={{ position: 'relative' }}>
        <div
          className="petal-blur pulse-glow"
          style={{
            width: 400,
            height: 400,
            background: 'radial-gradient(circle, #bf7af0 0%, transparent 70%)',
            opacity: 0.12,
            top: -60,
            left: -60,
          }}
        />
        <div
          style={{
            position: 'relative',
            aspectRatio: '3/4',
            maxWidth: 380,
            borderRadius: 1,
            overflow: 'hidden',
            border: '1px solid #2a1a4a',
          }}
        >
          <img
            src={imgFlowers}
            alt="Glowing flowers — the inspiration for this site"
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }}
          />
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(180deg, transparent 50%, #080412cc 100%)',
            }}
          />
        </div>
        {/* Accent border offset */}
        <div
          style={{
            position: 'absolute',
            bottom: -16,
            right: -16,
            width: '80%',
            height: '80%',
            border: '1px solid #e855b322',
            borderRadius: 1,
            pointerEvents: 'none',
          }}
        />
        {/* Stat chip */}
        <div
          style={{
            position: 'absolute',
            bottom: 24,
            right: 24,
            background: '#110a24ee',
            border: '1px solid #2a1a4a',
            borderRadius: 2,
            padding: '16px 24px',
            backdropFilter: 'blur(12px)',
          }}
        >
          <p className="font-display" style={{ fontSize: 36, fontWeight: 700, color: '#e855b3', margin: 0, lineHeight: 1 }}>
            8+
          </p>
          <p style={{ fontSize: 12, color: '#9b84c4', margin: '4px 0 0', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
            Years crafting
          </p>
        </div>
      </div>

      {/* Right: text */}
      <div>
        <p style={{ fontSize: 12, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#e855b3', marginBottom: 20, fontWeight: 500 }}>
          About
        </p>
        <h2
          className="font-display"
          style={{ fontSize: 'clamp(36px, 4vw, 56px)', fontWeight: 600, lineHeight: 1.1, letterSpacing: '-0.01em', color: '#f0e6ff', margin: '0 0 28px' }}
        >
          Light, texture, and{' '}
          <em style={{ color: '#bf7af0', fontStyle: 'italic' }}>the space between</em>
        </h2>
        <p style={{ fontSize: 16, lineHeight: 1.8, color: '#9b84c4', marginBottom: 20, fontWeight: 300 }}>
          I'm Lyra — a designer who works at the intersection of sensory experience and digital craft. My practice spans brand identity, interactive design, and creative direction for studios, artists, and cultural institutions.
        </p>
        <p style={{ fontSize: 16, lineHeight: 1.8, color: '#9b84c4', marginBottom: 40, fontWeight: 300 }}>
          I believe the most interesting design happens in the dark — when constraints disappear and something luminous pushes through. That's the feeling I try to give every project I touch.
        </p>
        <div style={{ display: 'flex', gap: 48 }}>
          {[['Brand', 'Identity'], ['Interactive', 'Design'], ['Creative', 'Direction']].map(([a, b]) => (
            <div key={a}>
              <p className="font-display" style={{ fontSize: 15, fontWeight: 600, color: '#f0e6ff', margin: '0 0 4px' }}>{a}</p>
              <p style={{ fontSize: 13, color: '#4a3566', margin: 0 }}>{b}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Work() {
  const [hovered, setHovered] = useState<number | null>(null)
  return (
    <section
      id="work"
      style={{
        padding: '120px 0',
        position: 'relative',
        borderTop: '1px solid #2a1a4a44',
      }}
    >
      {/* Ambient glow */}
      <div
        className="petal-blur pulse-glow"
        style={{
          width: 600,
          height: 300,
          background: 'radial-gradient(ellipse, #e855b3 0%, transparent 70%)',
          opacity: 0.06,
          top: 0,
          left: '50%',
          transform: 'translateX(-50%)',
        }}
      />
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 32px' }}>
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 72 }}>
          <div>
            <p style={{ fontSize: 12, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#e855b3', marginBottom: 12, fontWeight: 500 }}>
              Selected Work
            </p>
            <h2
              className="font-display"
              style={{ fontSize: 'clamp(32px, 4vw, 52px)', fontWeight: 600, letterSpacing: '-0.01em', color: '#f0e6ff', margin: 0 }}
            >
              Recent Projects
            </h2>
          </div>
          <a
            href="#"
            style={{ fontSize: 13, color: '#4a3566', letterSpacing: '0.08em', textTransform: 'uppercase', textDecoration: 'none', borderBottom: '1px solid #2a1a4a' }}
          >
            All Work →
          </a>
        </div>

        <div style={{ display: 'grid', gap: 1 }}>
          {PROJECTS.map((p, i) => (
            <div
              key={p.title}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              style={{
                display: 'grid',
                gridTemplateColumns: '80px 1fr auto',
                gap: 40,
                alignItems: 'start',
                padding: '40px 0',
                borderTop: '1px solid #2a1a4a55',
                cursor: 'default',
                transition: 'background 0.3s',
                position: 'relative',
              }}
            >
              {/* Hover glow */}
              {hovered === i && (
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(90deg, #e855b308, transparent)',
                    pointerEvents: 'none',
                  }}
                />
              )}
              <span
                className="font-display"
                style={{ fontSize: 13, color: '#4a3566', fontWeight: 400, paddingTop: 4 }}
              >
                {p.year}
              </span>
              <div>
                <h3
                  className="font-display"
                  style={{
                    fontSize: 'clamp(22px, 3vw, 36px)',
                    fontWeight: 600,
                    letterSpacing: '-0.01em',
                    color: hovered === i ? '#e855b3' : '#f0e6ff',
                    margin: '0 0 12px',
                    transition: 'color 0.3s',
                  }}
                >
                  {p.title}
                </h3>
                <p style={{ fontSize: 15, lineHeight: 1.7, color: '#9b84c4', margin: '0 0 16px', maxWidth: 500, fontWeight: 300 }}>
                  {p.desc}
                </p>
                <div style={{ display: 'flex', gap: 10 }}>
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      style={{
                        fontSize: 11,
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                        color: '#4a3566',
                        border: '1px solid #2a1a4a',
                        borderRadius: 1,
                        padding: '4px 10px',
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <span
                style={{
                  fontSize: 24,
                  color: hovered === i ? '#e855b3' : '#2a1a4a',
                  transition: 'color 0.3s, transform 0.3s',
                  transform: hovered === i ? 'translate(4px, -4px)' : 'none',
                  display: 'block',
                  paddingTop: 4,
                }}
              >
                ↗
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Writing() {
  return (
    <section
      id="writing"
      style={{
        padding: '120px 0',
        borderTop: '1px solid #2a1a4a44',
        position: 'relative',
      }}
    >
      <div
        className="petal-blur pulse-glow"
        style={{
          width: 400,
          height: 400,
          background: 'radial-gradient(circle, #bf7af0 0%, transparent 70%)',
          opacity: 0.07,
          bottom: 0,
          right: 0,
          animationDelay: '1.5s',
        }}
      />
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 32px' }}>
        <p style={{ fontSize: 12, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#e855b3', marginBottom: 12, fontWeight: 500 }}>
          Writing
        </p>
        <h2
          className="font-display"
          style={{ fontSize: 'clamp(32px, 4vw, 52px)', fontWeight: 600, letterSpacing: '-0.01em', color: '#f0e6ff', margin: '0 0 64px' }}
        >
          Notes & Essays
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
          {WRITINGS.map((w, i) => (
            <a
              key={w.title}
              href="#"
              style={{
                display: 'block',
                padding: 32,
                background: '#110a24',
                border: '1px solid #2a1a4a',
                borderRadius: 2,
                textDecoration: 'none',
                transition: 'border-color 0.3s, box-shadow 0.3s',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget
                el.style.borderColor = '#e855b344'
                el.style.boxShadow = '0 0 30px #e855b311'
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget
                el.style.borderColor = '#2a1a4a'
                el.style.boxShadow = 'none'
              }}
            >
              <span
                className="font-display"
                style={{ fontSize: 11, color: '#4a3566', letterSpacing: '0.08em', textTransform: 'uppercase' }}
              >
                0{i + 1}
              </span>
              <h3
                className="font-display"
                style={{ fontSize: 22, fontWeight: 600, lineHeight: 1.3, color: '#f0e6ff', margin: '16px 0 20px', letterSpacing: '-0.01em' }}
              >
                {w.title}
              </h3>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: 12, color: '#4a3566' }}>{w.date}</span>
                <span style={{ fontSize: 12, color: '#e855b3' }}>{w.read} read</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [msg, setMsg] = useState('')
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
  }

  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '14px 18px',
    background: '#110a24',
    border: '1px solid #2a1a4a',
    borderRadius: 2,
    color: '#f0e6ff',
    fontSize: 15,
    fontFamily: 'DM Sans, sans-serif',
    outline: 'none',
    boxSizing: 'border-box',
    transition: 'border-color 0.2s',
  }

  return (
    <section
      id="contact"
      style={{
        padding: '120px 0 160px',
        borderTop: '1px solid #2a1a4a44',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div
        className="petal-blur pulse-glow"
        style={{
          width: 700,
          height: 400,
          background: 'radial-gradient(ellipse, #e855b3 0%, transparent 70%)',
          opacity: 0.07,
          bottom: -100,
          left: '50%',
          transform: 'translateX(-50%)',
          animationDelay: '1s',
        }}
      />
      <div style={{ maxWidth: 720, margin: '0 auto', padding: '0 32px', textAlign: 'center', position: 'relative', zIndex: 1 }}>
        <p style={{ fontSize: 12, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#e855b3', marginBottom: 20, fontWeight: 500 }}>
          Contact
        </p>
        <h2
          className="font-display glow-pink"
          style={{ fontSize: 'clamp(36px, 5vw, 64px)', fontWeight: 700, lineHeight: 1.1, letterSpacing: '-0.02em', color: '#f0e6ff', margin: '0 0 16px' }}
        >
          Let's make something{' '}
          <em style={{ color: '#e855b3' }}>luminous</em>
        </h2>
        <p style={{ fontSize: 16, color: '#9b84c4', marginBottom: 56, fontWeight: 300, lineHeight: 1.7 }}>
          Whether you have a project in mind or just want to say hello — I'd love to hear from you.
        </p>

        {sent ? (
          <div
            style={{
              padding: 48,
              background: '#110a24',
              border: '1px solid #e855b333',
              borderRadius: 2,
              boxShadow: '0 0 40px #e855b311',
            }}
          >
            <div className="font-display" style={{ fontSize: 48, marginBottom: 16 }}>✦</div>
            <p className="font-display" style={{ fontSize: 24, fontWeight: 600, color: '#e855b3', margin: '0 0 8px' }}>
              Message sent.
            </p>
            <p style={{ fontSize: 15, color: '#9b84c4', margin: 0 }}>I'll be in touch soon.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ textAlign: 'left' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 16 }}>
              <div>
                <label style={{ fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#4a3566', display: 'block', marginBottom: 8 }}>
                  Name
                </label>
                <input
                  style={inputStyle}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  onFocus={(e) => (e.target.style.borderColor = '#e855b355')}
                  onBlur={(e) => (e.target.style.borderColor = '#2a1a4a')}
                  placeholder="Your name"
                  required
                />
              </div>
              <div>
                <label style={{ fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#4a3566', display: 'block', marginBottom: 8 }}>
                  Email
                </label>
                <input
                  style={inputStyle}
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onFocus={(e) => (e.target.style.borderColor = '#e855b355')}
                  onBlur={(e) => (e.target.style.borderColor = '#2a1a4a')}
                  placeholder="your@email.com"
                  required
                />
              </div>
            </div>
            <div style={{ marginBottom: 28 }}>
              <label style={{ fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#4a3566', display: 'block', marginBottom: 8 }}>
                Message
              </label>
              <textarea
                style={{ ...inputStyle, minHeight: 140, resize: 'vertical' }}
                value={msg}
                onChange={(e) => setMsg(e.target.value)}
                onFocus={(e) => (e.target.style.borderColor = '#e855b355')}
                onBlur={(e) => (e.target.style.borderColor = '#2a1a4a')}
                placeholder="Tell me about your project…"
                required
              />
            </div>
            <div style={{ textAlign: 'center' }}>
              <button
                type="submit"
                style={{
                  padding: '16px 56px',
                  background: '#e855b3',
                  color: '#fff',
                  border: 'none',
                  borderRadius: 2,
                  fontSize: 14,
                  fontWeight: 500,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                  boxShadow: '0 0 30px #e855b366, 0 0 60px #e855b322',
                  fontFamily: 'DM Sans, sans-serif',
                  transition: 'box-shadow 0.3s, transform 0.2s',
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget
                  el.style.boxShadow = '0 0 50px #e855b388, 0 0 100px #e855b344'
                  el.style.transform = 'translateY(-2px)'
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget
                  el.style.boxShadow = '0 0 30px #e855b366, 0 0 60px #e855b322'
                  el.style.transform = 'translateY(0)'
                }}
              >
                Send Message
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer
      style={{
        borderTop: '1px solid #2a1a4a44',
        padding: '32px',
        maxWidth: 1200,
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <span className="font-display" style={{ fontSize: 14, color: '#4a3566' }}>
        © 2025 Lyra Moon
      </span>
      <div style={{ display: 'flex', gap: 28 }}>
        {['Instagram', 'Behance', 'Are.na', 'LinkedIn'].map((s) => (
          <a
            key={s}
            href="#"
            style={{
              fontSize: 12,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: '#4a3566',
              textDecoration: 'none',
              transition: 'color 0.2s',
            }}
            onMouseEnter={(e) => ((e.target as HTMLAnchorElement).style.color = '#9b84c4')}
            onMouseLeave={(e) => ((e.target as HTMLAnchorElement).style.color = '#4a3566')}
          >
            {s}
          </a>
        ))}
      </div>
    </footer>
  )
}

// ─── Switcher bar ────────────────────────────────────────────────────────────
function Switcher({ page, setPage }: { page: string; setPage: (p: string) => void }) {
  const isReal = page === 'real'
  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        display: 'flex',
        justifyContent: 'center',
        padding: '8px 0',
        background: isReal ? 'rgba(240,248,255,0.85)' : 'rgba(8,4,18,0.85)',
        backdropFilter: 'blur(12px)',
        borderBottom: isReal ? '1px solid #c8dff088' : '1px solid #2a1a4a88',
      }}
    >
      <div style={{ display: 'flex', gap: 4, background: isReal ? '#d8edf8' : '#110a24', borderRadius: 20, padding: 4 }}>
        {[['larper', 'larper'], ['real', 'real me']].map(([key, label]) => {
          const active = page === key
          return (
            <button
              key={key}
              onClick={() => setPage(key)}
              style={{
                padding: '5px 20px',
                borderRadius: 16,
                border: 'none',
                cursor: 'pointer',
                fontSize: 12,
                fontWeight: 500,
                letterSpacing: '0.08em',
                fontFamily: 'DM Sans, sans-serif',
                transition: 'all 0.2s',
                background: active
                  ? isReal ? '#2a7fa8' : '#e855b3'
                  : 'transparent',
                color: active
                  ? '#fff'
                  : isReal ? '#6a9ab8' : '#4a3566',
              }}
            >
              {label}
            </button>
          )
        })}
      </div>
    </div>
  )
}

// ─── Real Me page ─────────────────────────────────────────────────────────────
const REAL_PROJECTS = [
  { title: 'Tideline', year: '2024', tags: ['Research', 'Writing'], desc: 'A year-long study of coastal erosion patterns along the northeast shore — part field notes, part essay, part archive.' },
  { title: 'Commonplace', year: '2024', tags: ['Illustration', 'Print'], desc: 'A hand-illustrated zine about ordinary things: morning light through glass, the sound of gravel underfoot, waiting rooms.' },
  { title: 'Wavelength', year: '2023', tags: ['Sound', 'Collaboration'], desc: 'An ambient audio piece made with a friend, built from field recordings of water — lakes, rain, taps left running.' },
  { title: 'Still Life', year: '2023', tags: ['Photography', 'Archival'], desc: 'A series of photographs made over six months, always at the same time of day, always of the same window.' },
]

const REAL_WRITINGS = [
  { title: 'What the Shore Keeps', date: 'May 2025', read: '7 min' },
  { title: 'On Collecting Small Stones', date: 'Feb 2025', read: '4 min' },
  { title: 'The Light at Four O\'Clock', date: 'Oct 2024', read: '6 min' },
]

function RealMe() {
  const [hovered, setHovered] = useState<number | null>(null)
  const [sent, setSent] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [msg, setMsg] = useState('')

  const blue = '#2a7fa8'
  const gold = '#c8923a'
  const ink = '#1a3040'
  const muted = '#6a8fa8'
  const bg = '#f4f9fc'
  const card = '#ffffff'
  const border = '#d0e4ef'

  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '13px 16px',
    background: '#fff',
    border: '1px solid #c8dded',
    borderRadius: 6,
    color: ink,
    fontSize: 15,
    fontFamily: 'DM Sans, sans-serif',
    outline: 'none',
    boxSizing: 'border-box',
    transition: 'border-color 0.2s',
  }

  return (
    <div style={{ background: bg, minHeight: '100vh', color: ink }}>

      {/* ── Nav ── */}
      <header style={{
        position: 'fixed', top: 44, left: 0, right: 0, zIndex: 50,
        borderBottom: `1px solid ${border}`,
        backdropFilter: 'blur(16px)',
        background: 'rgba(244,249,252,0.88)',
      }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 32px', height: 60, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <span className="font-display" style={{ fontSize: 18, fontWeight: 600, color: ink, letterSpacing: '-0.01em' }}>
            <span style={{ color: gold }}>◦</span> Lyra Moon
          </span>
          <nav style={{ display: 'flex', gap: 32 }}>
            {['About', 'Work', 'Writing', 'Contact'].map(l => (
              <a key={l} href={`#real-${l.toLowerCase()}`} style={{ fontSize: 13, letterSpacing: '0.05em', textTransform: 'uppercase', color: muted, textDecoration: 'none', transition: 'color 0.2s' }}
                onMouseEnter={e => (e.currentTarget.style.color = ink)}
                onMouseLeave={e => (e.currentTarget.style.color = muted)}>
                {l}
              </a>
            ))}
          </nav>
        </div>
      </header>

      {/* ── Hero ── */}
      <section id="real-hero" style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'flex-end', overflow: 'hidden' }}>
        <img src={imgShore} alt="Sunlit pebble shore" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 40%' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(200,225,240,0.15) 0%, rgba(244,249,252,0.7) 60%, rgba(244,249,252,1) 100%)' }} />
        <div style={{ position: 'relative', zIndex: 1, maxWidth: 1200, margin: '0 auto', padding: '0 32px 100px', width: '100%' }}>
          <p style={{ fontSize: 12, letterSpacing: '0.2em', textTransform: 'uppercase', color: gold, marginBottom: 16, fontWeight: 500 }}>
            Writer & Image-maker
          </p>
          <h1 className="font-display" style={{ fontSize: 'clamp(44px, 7vw, 96px)', fontWeight: 700, lineHeight: 1.05, letterSpacing: '-0.02em', color: ink, margin: '0 0 20px', maxWidth: 800 }}>
            Making sense of<br />
            <em style={{ color: blue, fontStyle: 'italic' }}>ordinary things.</em>
          </h1>
          <p style={{ fontSize: 17, lineHeight: 1.75, color: muted, maxWidth: 480, marginBottom: 44, fontWeight: 300 }}>
            I write essays, make photographs, and collect small observations about the world at water's edge.
          </p>
          <a href="#real-work" style={{ display: 'inline-block', padding: '13px 36px', background: blue, color: '#fff', borderRadius: 4, fontSize: 13, fontWeight: 500, letterSpacing: '0.06em', textTransform: 'uppercase', textDecoration: 'none', boxShadow: '0 4px 24px rgba(42,127,168,0.25)', transition: 'box-shadow 0.2s, transform 0.2s' }}
            onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 6px 32px rgba(42,127,168,0.4)'; e.currentTarget.style.transform = 'translateY(-2px)' }}
            onMouseLeave={e => { e.currentTarget.style.boxShadow = '0 4px 24px rgba(42,127,168,0.25)'; e.currentTarget.style.transform = 'translateY(0)' }}>
            See my work
          </a>
        </div>
      </section>

      {/* ── About ── */}
      <section id="real-about" style={{ maxWidth: 1200, margin: '0 auto', padding: '100px 32px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>
        <div style={{ position: 'relative' }}>
          <div style={{ aspectRatio: '4/5', borderRadius: 8, overflow: 'hidden', border: `1px solid ${border}`, boxShadow: '0 8px 48px rgba(42,127,168,0.1)' }}>
            <img src={imgShore} alt="Shore" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }} />
          </div>
          <div style={{ position: 'absolute', bottom: -20, right: -20, width: '60%', height: '60%', border: `1px solid ${gold}44`, borderRadius: 8, pointerEvents: 'none' }} />
        </div>
        <div>
          <p style={{ fontSize: 12, letterSpacing: '0.2em', textTransform: 'uppercase', color: gold, marginBottom: 16, fontWeight: 500 }}>About</p>
          <h2 className="font-display" style={{ fontSize: 'clamp(30px, 4vw, 48px)', fontWeight: 600, lineHeight: 1.15, color: ink, margin: '0 0 24px' }}>
            I'm interested in what gets<br />
            <em style={{ color: blue }}>left behind</em>
          </h2>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: muted, marginBottom: 20, fontWeight: 300 }}>
            I'm Lyra — I grew up near water and I've never really moved away from it. My work tends to circle around the same questions: what we notice, what we overlook, and what stays lodged in the body long after an experience has ended.
          </p>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: muted, marginBottom: 40, fontWeight: 300 }}>
            I make things slowly. Essays, photographs, sometimes sound. Occasionally I collaborate. Mostly I just pay attention.
          </p>
          <div style={{ display: 'flex', gap: 40 }}>
            {[['Essays', 'Long-form'], ['Photography', 'Analog & digital'], ['Sound', 'Field recording']].map(([a, b]) => (
              <div key={a}>
                <p className="font-display" style={{ fontSize: 14, fontWeight: 600, color: ink, margin: '0 0 3px' }}>{a}</p>
                <p style={{ fontSize: 12, color: muted, margin: 0 }}>{b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Work ── */}
      <section id="real-work" style={{ padding: '100px 0', borderTop: `1px solid ${border}` }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 32px' }}>
          <p style={{ fontSize: 12, letterSpacing: '0.2em', textTransform: 'uppercase', color: gold, marginBottom: 12, fontWeight: 500 }}>Selected Work</p>
          <h2 className="font-display" style={{ fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 600, color: ink, margin: '0 0 64px' }}>Recent Projects</h2>
          <div style={{ display: 'grid', gap: 0 }}>
            {REAL_PROJECTS.map((p, i) => (
              <div key={p.title} onMouseEnter={() => setHovered(i)} onMouseLeave={() => setHovered(null)}
                style={{ display: 'grid', gridTemplateColumns: '72px 1fr auto', gap: 32, alignItems: 'start', padding: '36px 0', borderTop: `1px solid ${border}`, position: 'relative', transition: 'background 0.2s', background: hovered === i ? '#edf5fb' : 'transparent', cursor: 'default', borderRadius: hovered === i ? 4 : 0 }}>
                <span className="font-display" style={{ fontSize: 13, color: '#a0bfcf', paddingTop: 2 }}>{p.year}</span>
                <div>
                  <h3 className="font-display" style={{ fontSize: 'clamp(20px, 2.5vw, 32px)', fontWeight: 600, color: hovered === i ? blue : ink, margin: '0 0 10px', transition: 'color 0.2s' }}>{p.title}</h3>
                  <p style={{ fontSize: 14, lineHeight: 1.7, color: muted, margin: '0 0 14px', maxWidth: 480, fontWeight: 300 }}>{p.desc}</p>
                  <div style={{ display: 'flex', gap: 8 }}>
                    {p.tags.map(t => <span key={t} style={{ fontSize: 11, letterSpacing: '0.08em', textTransform: 'uppercase', color: muted, border: `1px solid ${border}`, borderRadius: 3, padding: '3px 10px', background: '#fff' }}>{t}</span>)}
                  </div>
                </div>
                <span style={{ fontSize: 20, color: hovered === i ? blue : border, transition: 'color 0.2s, transform 0.2s', transform: hovered === i ? 'translate(3px,-3px)' : 'none', paddingTop: 2 }}>↗</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Writing ── */}
      <section id="real-writing" style={{ padding: '100px 0', borderTop: `1px solid ${border}` }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 32px' }}>
          <p style={{ fontSize: 12, letterSpacing: '0.2em', textTransform: 'uppercase', color: gold, marginBottom: 12, fontWeight: 500 }}>Writing</p>
          <h2 className="font-display" style={{ fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 600, color: ink, margin: '0 0 56px' }}>Notes & Essays</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
            {REAL_WRITINGS.map((w, i) => (
              <a key={w.title} href="#" style={{ display: 'block', padding: 28, background: card, border: `1px solid ${border}`, borderRadius: 6, textDecoration: 'none', boxShadow: '0 2px 12px rgba(42,127,168,0.06)', transition: 'box-shadow 0.2s, border-color 0.2s' }}
                onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 6px 28px rgba(42,127,168,0.14)'; e.currentTarget.style.borderColor = '#9ac8de' }}
                onMouseLeave={e => { e.currentTarget.style.boxShadow = '0 2px 12px rgba(42,127,168,0.06)'; e.currentTarget.style.borderColor = border }}>
                <span className="font-display" style={{ fontSize: 11, color: '#b8d4e4', letterSpacing: '0.08em', textTransform: 'uppercase' }}>0{i + 1}</span>
                <h3 className="font-display" style={{ fontSize: 20, fontWeight: 600, lineHeight: 1.3, color: ink, margin: '14px 0 18px' }}>{w.title}</h3>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ fontSize: 12, color: muted }}>{w.date}</span>
                  <span style={{ fontSize: 12, color: gold }}>{w.read} read</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact ── */}
      <section id="real-contact" style={{ padding: '100px 0 140px', borderTop: `1px solid ${border}` }}>
        <div style={{ maxWidth: 660, margin: '0 auto', padding: '0 32px', textAlign: 'center' }}>
          <p style={{ fontSize: 12, letterSpacing: '0.2em', textTransform: 'uppercase', color: gold, marginBottom: 16, fontWeight: 500 }}>Contact</p>
          <h2 className="font-display" style={{ fontSize: 'clamp(32px, 5vw, 56px)', fontWeight: 700, lineHeight: 1.1, color: ink, margin: '0 0 14px' }}>
            Say <em style={{ color: blue }}>hello.</em>
          </h2>
          <p style={{ fontSize: 16, color: muted, marginBottom: 48, fontWeight: 300, lineHeight: 1.7 }}>
            I'm always glad to hear from people who make things, think slowly, or spend time near water.
          </p>
          {sent ? (
            <div style={{ padding: 48, background: card, border: `1px solid ${border}`, borderRadius: 8, boxShadow: '0 4px 24px rgba(42,127,168,0.08)' }}>
              <div className="font-display" style={{ fontSize: 40, marginBottom: 12, color: gold }}>◦</div>
              <p className="font-display" style={{ fontSize: 22, fontWeight: 600, color: blue, margin: '0 0 8px' }}>Message sent.</p>
              <p style={{ fontSize: 14, color: muted, margin: 0 }}>I'll write back soon.</p>
            </div>
          ) : (
            <form onSubmit={e => { e.preventDefault(); setSent(true) }} style={{ textAlign: 'left' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, marginBottom: 14 }}>
                <div>
                  <label style={{ fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase', color: muted, display: 'block', marginBottom: 7 }}>Name</label>
                  <input style={inputStyle} value={name} onChange={e => setName(e.target.value)} onFocus={e => (e.target.style.borderColor = '#7abcd4')} onBlur={e => (e.target.style.borderColor = '#c8dded')} placeholder="Your name" required />
                </div>
                <div>
                  <label style={{ fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase', color: muted, display: 'block', marginBottom: 7 }}>Email</label>
                  <input style={inputStyle} type="email" value={email} onChange={e => setEmail(e.target.value)} onFocus={e => (e.target.style.borderColor = '#7abcd4')} onBlur={e => (e.target.style.borderColor = '#c8dded')} placeholder="your@email.com" required />
                </div>
              </div>
              <div style={{ marginBottom: 24 }}>
                <label style={{ fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase', color: muted, display: 'block', marginBottom: 7 }}>Message</label>
                <textarea style={{ ...inputStyle, minHeight: 130, resize: 'vertical' }} value={msg} onChange={e => setMsg(e.target.value)} onFocus={e => (e.target.style.borderColor = '#7abcd4')} onBlur={e => (e.target.style.borderColor = '#c8dded')} placeholder="What's on your mind?" required />
              </div>
              <div style={{ textAlign: 'center' }}>
                <button type="submit" style={{ padding: '14px 52px', background: blue, color: '#fff', border: 'none', borderRadius: 4, fontSize: 13, fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase', cursor: 'pointer', fontFamily: 'DM Sans, sans-serif', boxShadow: '0 4px 20px rgba(42,127,168,0.3)', transition: 'box-shadow 0.2s, transform 0.2s' }}
                  onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 6px 28px rgba(42,127,168,0.45)'; e.currentTarget.style.transform = 'translateY(-2px)' }}
                  onMouseLeave={e => { e.currentTarget.style.boxShadow = '0 4px 20px rgba(42,127,168,0.3)'; e.currentTarget.style.transform = 'translateY(0)' }}>
                  Send
                </button>
              </div>
            </form>
          )}
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ borderTop: `1px solid ${border}`, padding: '28px 32px', maxWidth: 1200, margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span className="font-display" style={{ fontSize: 13, color: '#b0ccd8' }}>© 2025 Lyra Moon</span>
        <div style={{ display: 'flex', gap: 24 }}>
          {['Instagram', 'Are.na', 'Substack'].map(s => (
            <a key={s} href="#" style={{ fontSize: 11, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#b0ccd8', textDecoration: 'none', transition: 'color 0.2s' }}
              onMouseEnter={e => (e.currentTarget.style.color = muted)}
              onMouseLeave={e => (e.currentTarget.style.color = '#b0ccd8')}>{s}</a>
          ))}
        </div>
      </footer>
    </div>
  )
}

// ─── Root ─────────────────────────────────────────────────────────────────────
export default function App() {
  const [page, setPage] = useState('larper')
  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
    if (page !== 'larper') return
    const sections = ['hero', 'about', 'work', 'writing', 'contact']
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id)
        })
      },
      { threshold: 0.3 }
    )
    sections.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [page])

  return (
    <>
      <Switcher page={page} setPage={setPage} />
      {/* push content below the switcher bar (44px) + nav (64px) */}
      {page === 'real' ? (
        <RealMe />
      ) : (
        <div style={{ background: '#080412', minHeight: '100vh', paddingTop: 44 }}>
          <Nav active={activeSection} />
          <Hero />
          <About />
          <Work />
          <Writing />
          <Contact />
          <Footer />
        </div>
      )}
    </>
  )
}
