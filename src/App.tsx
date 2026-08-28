import { useState, useEffect } from 'react'
import imgFlowers from '@/imports/40bb643c3e39e39fde75a3913af79f0e.jpg'
import imgShore from '@/imports/image.jpg'
import pictureOfMe from '@/imports/IMG_3685.jpg'
import imgBlackpinkJump from '@/imports/blackpink-jump-cover.png'
import secondMe from '@/imports/IMG_3180.jpg'
import imgTokiPona from '@/imports/IMG_2841.jpeg'
import imgBooksILike from '@/imports/booksilike.png'
import imgYenaSmiley from '@/imports/yena-smiley-cover.png'

const NAV_LINKS = ['About', 'Work']
const SWITCHER_OFFSET = 56

const SOCIAL_LINKS = [
  { label: 'Instagram', href: 'https://www.instagram.com/jace.chaeyoon/' },
  { label: 'GitHub', href: 'https://github.com/iso-sejun' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/jace-sung/' },
]

const FAVORITE_SONG = {
  title: 'Jump',
  artist: 'Blackpink',
  cover: imgBlackpinkJump,
  spotifyUrl: 'https://open.spotify.com/track/5H1sKFMzDeMtXwND3V6hRY',
}

const REAL_FAVORITE_SONG = {
  title: 'Smiley',
  artist: 'Yena ft. Bibi',
  cover: imgYenaSmiley,
  spotifyUrl: 'https://open.spotify.com/track/4zCIxSnVWpGNghERX4uWZF?si=5b578fc4488240b2',
}

type HeaderNavLink = {
  label: string
  href: string
}

type HeaderTheme = {
  accent: string
  activeColor?: string
  background: string
  border: string
  brandFontSize?: number
  brandColor: string
  backdropFilter?: string
  height?: number
  hoverColor: string
  inactiveColor: string
  navFontSize?: number
  navGap?: number
  navLetterSpacing?: string
  songVariant: 'dark' | 'light'
  zIndex?: number
}

function PageHeader({
  active,
  brandHref,
  marker,
  navLinks,
  song,
  theme,
}: {
  active?: string
  brandHref: string
  marker: string
  navLinks: HeaderNavLink[]
  song: typeof FAVORITE_SONG
  theme: HeaderTheme
}) {
  return (
    <header
      style={{
        position: 'fixed',
        top: SWITCHER_OFFSET,
        left: 0,
        right: 0,
        zIndex: theme.zIndex ?? 50,
        borderBottom: theme.border,
        backdropFilter: theme.backdropFilter ?? 'blur(20px)',
        background: theme.background,
      }}
    >
      <div
        className="page-header-inner"
        style={{
          '--page-header-height': `${theme.height ?? 64}px`,
          '--page-brand-size': `${theme.brandFontSize ?? 20}px`,
          '--page-nav-size': `${theme.navFontSize ?? 14}px`,
          '--page-nav-gap': `${theme.navGap ?? 36}px`,
          '--page-nav-letter-spacing': theme.navLetterSpacing ?? '0.04em',
        } as React.CSSProperties}
      >
        <a
          href={brandHref}
          className="font-display page-brand"
          style={{
            fontWeight: 600,
            color: theme.brandColor,
            textDecoration: 'none',
            letterSpacing: '-0.01em',
          }}
        >
          <span style={{ color: theme.accent }}>{marker}</span> Jace Sung
        </a>
        <CurrentSong song={song} variant={theme.songVariant} />
        <nav className="page-nav">
          {navLinks.map((link) => {
            const isActive = active === link.label.toLowerCase()
            return (
              <a
                key={link.label}
                href={link.href}
                style={{
                  fontSize: theme.navFontSize ?? 14,
                  fontWeight: 400,
                  letterSpacing: theme.navLetterSpacing ?? '0.04em',
                  textTransform: 'uppercase',
                  color: isActive ? theme.activeColor ?? theme.accent : theme.inactiveColor,
                  textDecoration: 'none',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = theme.hoverColor)}
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = isActive ? theme.activeColor ?? theme.accent : theme.inactiveColor)
                }
              >
                {link.label}
              </a>
            )
          })}
        </nav>
      </div>
    </header>
  )
}

const PROJECTS = [
  {
    title: 'Hyperion',
    year: '2026',
    desc: 'Marketplace designed to solve three problems at once: food waste for farms, lost profit for farmers, and lack of access to fresh produce to low-income households. ',
    link: 'https://www.youtube.com/watch?v=c2fOL3o77h4'
  },
  {
    title: 'Root to Recepie',
    year: '2026',
    desc: 'Recipe‑search platform that lets users search recipes, locate nearby grocery stores, and view a blended environmental score.',
    link: 'https://www.youtube.com/watch?v=VfJMw2h7dlI'
  },
  {
    title: 'Toki Pona Explained',
    year: '2026',
    desc: 'A informative webpage explaining the conlang (constructed langugae) toki pona. Created this so I could explain one of my hobbies to other people.',
    link: 'https://tp-website-neon.vercel.app/'
  },
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

function CurrentSong({
  song = FAVORITE_SONG,
  variant = 'dark',
}: {
  song?: typeof FAVORITE_SONG
  variant?: 'dark' | 'light'
}) {
  return (
    <div className={`current-song-pill ${variant}`} aria-label={`Currently looping: ${song.title} by ${song.artist}`}>
      <a
        href={song.spotifyUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Open ${song.title} by ${song.artist} on Spotify`}
        className="current-song-cover-link"
      >
        <img
          src={song.cover}
          alt={`${song.title} by ${song.artist} album cover`}
          className="current-song-cover"
        />
      </a>
      <a
        href={song.spotifyUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Play ${song.title} by ${song.artist} on Spotify`}
        className="current-song-play"
      >
        <span />
      </a>
      <div className="current-song-copy">
        <p>Currently Looping</p>
        <span>{song.title} by {song.artist}</span>
      </div>
    </div>
  )
}

function Nav({ active }: { active: string }) {
  return (
    <PageHeader
      active={active}
      brandHref="#hero"
      marker="✦"
      navLinks={NAV_LINKS.map((label) => ({ label, href: `#${label.toLowerCase()}` }))}
      song={FAVORITE_SONG}
      theme={{
        accent: '#e855b3',
        activeColor: '#e855b3',
        background: '#08041288',
        backdropFilter: 'blur(20px)',
        border: '1px solid #2a1a4a44',
        brandFontSize: 20,
        brandColor: '#f0e6ff',
        height: 64,
        hoverColor: '#f0e6ff',
        inactiveColor: '#9b84c4',
        navFontSize: 14,
        navGap: 36,
        navLetterSpacing: '0.04em',
        songVariant: 'dark',
      }}
    />
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
          Math + CS at Dartmouth
        </p>
        <h1
          className="font-display glow-pink"
          style={{
            fontSize: 'clamp(22px, 5vw, 70px)',
            fontWeight: 700,
            lineHeight: 1.02,
            letterSpacing: '-0.02em',
            color: '#f0e6ff',
            margin: '0 0 24px',
            maxWidth: 900,
          }}
        >
        joy, jokes, and jace
          
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
          job-searching
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
      className="about-section"
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
      <div className="about-image-column" style={{ position: 'relative' }}>
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
            src={pictureOfMe}
            alt="me!"
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
          <p className="font-display" style={{ fontSize: 25, fontWeight: 700, color: '#e855b3', margin: 0, lineHeight: 1 }}>
            Fun fact:
          </p>
          <p style={{ fontSize: 12, color: '#9b84c4', margin: '4px 0 0', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
            I'm really good at pen spinning!
          </p>
        </div>
      </div>

      {/* Right: text */}
      <div className="about-copy-column">
        <p style={{ fontSize: 12, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#e855b3', marginBottom: 20, fontWeight: 500 }}>
          About Me
        </p>
        <h2
          className="font-display"
          style={{ fontSize: 'clamp(36px, 4vw, 56px)', fontWeight: 600, lineHeight: 1.1, letterSpacing: '-0.01em', color: '#f0e6ff', margin: '0 0 28px' }}
        >
          What I've been up to:{' '}
        </h2>
        <p style={{ fontSize: 16, lineHeight: 1.8, color: '#9b84c4', marginBottom: 20, fontWeight: 300 }}>
          Hi, I'm Jace! Coming from a math competition background in high school, I now study Math and Computer Science at Dartmouth College.
          I'm the coding director of the nonprofit Cultured Kids Cuisine, a research intern in the RISC Lab, and a fullstack dev at the DALI Lab!
        </p>
        <p style={{ fontSize: 16, lineHeight: 1.8, color: '#9b84c4', marginBottom: 40, fontWeight: 300 }}>
          On campus, I'm active in the Association of Women in Math and the Women in CS club. In my free time, I love meeting new peopple, attending hackathons, and building personal projects.
        </p>
        <div className="larper-stats" style={{ display: 'flex', gap: 48 }}>
          {[['Favorite Subjects', 'Math + CS'], ['Favorite College', 'Dartmouth'], ['Favorite Letter', 'J']].map(([a, b]) => (
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
      className="larper-work"
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
              Work
            </p>
            <h2
              className="font-display"
              style={{ fontSize: 'clamp(32px, 4vw, 52px)', fontWeight: 600, letterSpacing: '-0.01em', color: '#f0e6ff', margin: 0 }}
            >
              My Personal Projects!
            </h2>
          </div>
        </div>

        <div style={{ display: 'grid', gap: 1 }}>
          {PROJECTS.map((p, i) => (
            <a
              key={p.title}
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open ${p.title} project`}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              style={{
                display: 'grid',
                gridTemplateColumns: '80px 1fr auto',
                gap: 40,
                alignItems: 'start',
                padding: '40px 0',
                borderTop: '1px solid #2a1a4a55',
                color: 'inherit',
                cursor: 'pointer',
                textDecoration: 'none',
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
            </a>
          ))}
        </div>
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
        © 2026 Jace Sung
      </span>
      <div style={{ display: 'flex', gap: 28 }}>
        {SOCIAL_LINKS.map((social) => (
          <a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
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
            {social.label}
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
        padding: '12px 0',
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
const CROCHET_SLIDES_URL = 'https://docs.google.com/presentation/d/1moVVdnY9My8dtNNlimG_wCTZUKrNbFGy1qKpu9BUHK0/embed?start=false&loop=false&delayms=3000'

const REAL_INTERESTS = [
  { title: 'kpop', desc: 'my playlist is 37 hours long. i exclusively listen to kpop and kendrick lamar. ive seen twice, itzy, ive, and stray kids in concert. i can dance to "what is love" by twice :D'},
  { title: 'fashion', desc: 'im a big fan of going to the mall and dressing up with my friends. i love trying new outfits, and seeing other people become more confident through clothes'},
  { title: 'boba/matcha', desc: "don't even get me started on this... my wallet is crying because of my boba addiction"},
]

function HobbyImageSpace({
  alt,
  fit = 'cover',
  image,
  tone,
}: {
  alt: string
  fit?: 'cover' | 'contain'
  image: string
  tone: 'mint' | 'rose'
}) {
  return (
    <div className={`hobby-image-space ${tone} ${fit}`}>
      <div className="hobby-image-frame">
        <img src={image} alt={alt} />
      </div>
    </div>
  )
}

function HobbiesSection() {
  return (
    <section id="real-hobbies" className="real-hobbies-section">
      <div className="real-hobbies-heading">
        <p>Hobbies</p>
        <h2 className="font-display">what i do for fun</h2>
      </div>

      <div className="hobby-tier crochet">
        <div className="hobby-copy">
          <h3 className="font-display">Crochet</h3>
          <p>
            My #1 favorite activity!! i love how crochet lets me make cool gifts for my friends. plus,
            i get to watch youtube and still feel like im being productive 
          </p>
  
        </div>
        <div className="hobby-media slide-media">
          <iframe
            src={CROCHET_SLIDES_URL}
            title="Crochet Google Slides"
            allowFullScreen
          />
        </div>
      </div>

      <div className="hobby-tier toki">
        <HobbyImageSpace
          alt="Toki Pona hobby image"
          image={imgTokiPona}
          tone="mint"
        />
        <div className="hobby-copy">
          <h3 className="font-display">toki pona</h3>
          <p>
            toki pona is a conlang (constructed language) created by linguist sonja lang in 2001. the unique aspect of toki pona is that it only has around 140 words in it’s total vocabulary.
            ive been speaking it for a few years now. For more info, go to the projects section of my larper page
          </p>
        </div>
      </div>

      <div className="hobby-tier reading">
        <div className="hobby-copy">
          <h3 className="font-display">Reading</h3>
          <p>
            My favorite books/series: The Stormlight Archive, 3-Body Problem, The Poppy War, Harry Potter and the Methods of Rationality, House of Leaves
          </p>
        </div>
        <HobbyImageSpace
          alt="Books I like"
          fit="contain"
          image={imgBooksILike}
          tone="rose"
        />
      </div>
    </section>
  )
}

function RealMe() {
  const blue = '#2a7fa8'
  const gold = '#c8923a'
  const ink = '#1a3040'
  const muted = '#6a8fa8'
  const bg = '#f4f9fc'
  const card = '#ffffff'
  const border = '#d0e4ef'

  return (
    <div style={{ background: bg, minHeight: '100vh', color: ink }}>

      <PageHeader
        brandHref="#real-hero"
        marker="◦"
        navLinks={['About', 'Hobbies', 'Interests'].map((label) => ({ label, href: `#real-${label.toLowerCase()}` }))}
        song={REAL_FAVORITE_SONG}
        theme={{
          accent: gold,
          background: 'rgba(244,249,252,0.88)',
          backdropFilter: 'blur(16px)',
          border: `1px solid ${border}`,
          brandFontSize: 18,
          brandColor: ink,
          height: 60,
          hoverColor: ink,
          inactiveColor: muted,
          navFontSize: 13,
          navGap: 32,
          navLetterSpacing: '0.05em',
          songVariant: 'light',
        }}
      />

      {/* ── Hero ── */}
      <section id="real-hero" style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'flex-end', overflow: 'hidden' }}>
        <img src={imgShore} alt="Sunlit pebble shore" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 40%' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(200,225,240,0.15) 0%, rgba(244,249,252,0.7) 60%, rgba(244,249,252,1) 100%)' }} />
        <div style={{ position: 'relative', zIndex: 1, maxWidth: 1200, margin: '0 auto', padding: '0 32px 100px', width: '100%' }}>
          {/* <p style={{ fontSize: 12, letterSpacing: '0.2em', textTransform: 'uppercase', color: gold, marginBottom: 16, fontWeight: 500 }}>
            Writer & Image-maker
          </p> */}
          <h1 className="font-display" style={{ fontSize: 'clamp(25px, 5vw, 67px)', fontWeight: 700, lineHeight: 1.05, letterSpacing: '-0.02em', color: ink, margin: '0 0 20px', maxWidth: 800 }}>
            korean-american, entj, 5'2"<br />
            {/* <em style={{ color: blue, fontStyle: 'italic' }}>ordinary things.</em> */}
          </h1>
          <p style={{ fontSize: 17, lineHeight: 1.75, color: muted, maxWidth: 480, marginBottom: 44, fontWeight: 300 }}>
          </p>
          <a href="#real-hobbies" style={{ display: 'inline-block', padding: '13px 36px', background: blue, color: '#fff', borderRadius: 4, fontSize: 13, fontWeight: 500, letterSpacing: '0.06em', textTransform: 'uppercase', textDecoration: 'none', boxShadow: '0 4px 24px rgba(42,127,168,0.25)', transition: 'box-shadow 0.2s, transform 0.2s' }}
            onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 6px 32px rgba(42,127,168,0.4)'; e.currentTarget.style.transform = 'translateY(-2px)' }}
            onMouseLeave={e => { e.currentTarget.style.boxShadow = '0 4px 24px rgba(42,127,168,0.25)'; e.currentTarget.style.transform = 'translateY(0)' }}>
            My hobbies
          </a>
        </div>
      </section>

      {/* ── About ── */}
      <section id="real-about" className="about-section" style={{ maxWidth: 1200, margin: '0 auto', padding: '100px 32px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>
        <div className="about-image-column" style={{ position: 'relative' }}>
          <div style={{ aspectRatio: '4/5', borderRadius: 8, overflow: 'hidden', border: `1px solid ${border}`, boxShadow: '0 8px 48px rgba(42,127,168,0.1)' }}>
            <img src={secondMe} alt="Shore" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }} />
          </div>
          <div style={{ position: 'absolute', bottom: -20, right: -20, width: '60%', height: '60%', border: `1px solid ${gold}44`, borderRadius: 8, pointerEvents: 'none' }} />
        </div>
        <div className="about-copy-column">
          <p style={{ fontSize: 12, letterSpacing: '0.2em', textTransform: 'uppercase', color: gold, marginBottom: 16, fontWeight: 500 }}>About Me</p>
          <h2 className="font-display" style={{ fontSize: 'clamp(30px, 4vw, 48px)', fontWeight: 600, lineHeight: 1.15, color: ink, margin: '0 0 24px' }}>
            who am i?<br />
          </h2>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: muted, marginBottom: 20, fontWeight: 300 }}>
            my favorite feeling is when I make a joke that my friends laugh at. I'm that friend who's always singing lyrics (and then my voice cracks 😭). 
            im a good listener, hype man, and concept explainer (i used to tutor middle schoolers)
          </p>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: muted, marginBottom: 40, fontWeight: 300 }}>
            i live by the motto that "I'll get whatever I want, but I just have to work for it." i don't ever want to live a life where I'm not learning or improving. 
            i don't want to regret not having tried harder
          </p>
        </div>
      </section>

      <HobbiesSection />

      {/* ── Interests ── */}
      <section id="real-interests" className="real-interests-section" style={{ borderTop: `1px solid ${border}` }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 32px' }}>
          <p style={{ fontSize: 12, letterSpacing: '0.2em', textTransform: 'uppercase', color: gold, marginBottom: 12, fontWeight: 500 }}>Interests</p>
          <h2 className="font-display" style={{ fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 600, color: ink, margin: '0 0 56px' }}>what i like</h2>
          <div className="real-interests-grid">
            {REAL_INTERESTS.map((w, i) => (
              <a key={w.title} className="real-interest-card" style={{ background: card, border: `1px solid ${border}` }}
                onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 6px 28px rgba(42,127,168,0.14)'; e.currentTarget.style.borderColor = '#9ac8de' }}
                onMouseLeave={e => { e.currentTarget.style.boxShadow = '0 2px 12px rgba(42,127,168,0.06)'; e.currentTarget.style.borderColor = border }}>
                <h3 className="font-display" style={{ fontSize: 20, fontWeight: 600, lineHeight: 1.3, color: ink, margin: '14px 0 18px' }}>{w.title}</h3>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ fontSize: 16, color: muted}}>{w.desc}</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ borderTop: `1px solid ${border}`, padding: '28px 32px', maxWidth: 1200, margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span className="font-display" style={{ fontSize: 13, color: '#b0ccd8' }}>© 2026 Jace Sung</span>
        <div style={{ display: 'flex', gap: 24 }}>
          {SOCIAL_LINKS.map(social => (
            <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" style={{ fontSize: 11, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#b0ccd8', textDecoration: 'none', transition: 'color 0.2s' }}
              onMouseEnter={e => (e.currentTarget.style.color = muted)}
              onMouseLeave={e => (e.currentTarget.style.color = '#b0ccd8')}>{social.label}</a>
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
    const sections = ['hero', 'about', 'work']
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
      {/* push content below the switcher bar + nav */}
      {page === 'real' ? (
        <RealMe />
      ) : (
        <div className="larper-page" style={{ background: '#080412', minHeight: '100vh', paddingTop: SWITCHER_OFFSET }}>
          <Nav active={activeSection} />
          <Hero />
          <About />
          <Work />
          <Footer />
        </div>
      )}
    </>
  )
}
