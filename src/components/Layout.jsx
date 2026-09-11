import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { ChevronDown, ChevronRight, Mail, Menu, Phone, ShieldCheck, X } from 'lucide-react'

const financingLinks = [
  ['/pembiayaan', 'Ringkasan Pembiayaan'],
  ['/produk/al-rajhi', 'Al Rajhi'],
  ['/produk/coshare-prihatin', 'Coshare Prihatin'],
  ['/kelayakan-dokumen', 'Kelayakan & Dokumen'],
]

const aboutLinks = [
  ['/tentang', 'Mengenai CoshareEZ'],
  ['/keselamatan', 'Keselamatan & Anti-Penipuan'],
  ['/hubungi', 'Hubungi Kami'],
]

function Dropdown({ label, to, items, onNavigate }) {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()
  const [prevPathname, setPrevPathname] = useState(location.pathname)
  const isChildActive = items.some(([path]) => location.pathname === path)

  if (prevPathname !== location.pathname) {
    setPrevPathname(location.pathname)
    setIsOpen(false)
  }

  return (
    <div className={`nav-dropdown ${isOpen ? 'is-expanded' : ''}`}>
      <div className="nav-dropdown-header">
        <NavLink
          to={to}
          className={({ isActive }) => `nav-parent ${isActive || isChildActive ? 'active' : ''}`}
          onClick={(e) => {
            if (window.innerWidth <= 820) {
              e.preventDefault()
              setIsOpen((prev) => !prev)
            } else {
              onNavigate()
            }
          }}
          aria-expanded={isOpen}
          aria-haspopup="true"
        >
          <span>{label}</span>
          <ChevronDown
            size={15}
            strokeWidth={2.4}
            className={`dropdown-chevron ${isOpen ? 'is-rotated' : ''}`}
          />
        </NavLink>
      </div>
      <div className={`dropdown-panel ${isOpen ? 'is-mobile-open' : ''}`}>
        <div className="dropdown-panel-inner">
          {items.map(([path, text]) => (
            <NavLink
              key={path}
              to={path}
              onClick={onNavigate}
              className={({ isActive }) => `dropdown-item ${isActive ? 'active' : ''}`}
            >
              <span>{text}</span>
              <ChevronRight size={14} className="dropdown-item-arrow" />
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  )
}

export function Header() {
  const [open, setOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { pathname } = useLocation()
  const [prevPathname, setPrevPathname] = useState(pathname)

  if (prevPathname !== pathname) {
    setPrevPathname(pathname)
    setOpen(false)
  }

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname])

  useEffect(() => {
    let ticking = false

    const handleScroll = () => {
      const scrollY = window.scrollY
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled((prev) => {
            if (!prev && scrollY > 32) return true
            if (prev && scrollY < 10) return false
            return prev
          })
          ticking = false
        })
        ticking = true
      }
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <header className={`site-header ${isScrolled ? 'is-scrolled' : ''}`}>
        <div className="utility-bar">
          <div className="container utility-inner">
            <span><ShieldCheck size={15} /> Agensi pemasaran sah bagi produk Coshare</span>
            <div>
              <Link to="/semak-status">Semak status</Link>
              <a href="tel:+60174474404"><Phone size={14} /> 017 447 4404</a>
            </div>
          </div>
        </div>
        <div className="main-nav-track">
          <div className={`main-nav-pill ${isScrolled ? 'is-pill' : ''}`}>
            <nav className="main-nav" aria-label="Navigasi utama">
              <Link className="brand" to="/" aria-label="CoshareEZ, laman utama">
                <img src="/images/coshareez-logo.png" alt="CoshareEZ" />
              </Link>
              <button className="mobile-toggle" onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Buka menu">
                {open ? <X /> : <Menu />}
              </button>
              <div className={`nav-links ${open ? 'is-open' : ''}`}>
                <Dropdown label="Pembiayaan" to="/pembiayaan" items={financingLinks} onNavigate={() => setOpen(false)} />
                <NavLink to="/cara-memohon" onClick={() => setOpen(false)}>Cara Memohon</NavLink>
                <NavLink to="/panduan" onClick={() => setOpen(false)}>Panduan</NavLink>
                <NavLink to="/jadi-ejen" onClick={() => setOpen(false)}>Jadi Ejen</NavLink>
                <Dropdown label="Tentang" to="/tentang" items={aboutLinks} onNavigate={() => setOpen(false)} />
                <Link className="button button-primary nav-cta" to="/semak-kelayakan" onClick={() => setOpen(false)}>Semak Kelayakan</Link>
              </div>
            </nav>
          </div>
        </div>
      </header>
      <div className="site-header-spacer" aria-hidden="true" />
    </>
  )
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <img src="/images/coshareez-logo.png" alt="CoshareEZ" />
          <p>Saluran bantuan permohonan pembiayaan untuk kakitangan kerajaan, badan berkanun, PBT dan GLC terpilih.</p>
          <span className="footer-note"><ShieldCheck size={16} /> Tiada bayaran pendahuluan</span>
        </div>
        <div>
          <h3>Pembiayaan</h3>
          <Link to="/pembiayaan">Ringkasan</Link>
          <Link to="/produk/al-rajhi">Al Rajhi</Link>
          <Link to="/produk/coshare-prihatin">Coshare Prihatin</Link>
          <Link to="/kelayakan-dokumen">Kelayakan & Dokumen</Link>
        </div>
        <div>
          <h3>Bantuan</h3>
          <Link to="/cara-memohon">Cara Memohon</Link>
          <Link to="/pengesahan-pegawai">Pengesahan Pegawai</Link>
          <Link to="/keselamatan">Anti-Penipuan</Link>
          <Link to="/hubungi">Hubungi Kami</Link>
        </div>
        <div>
          <h3>Hubungi</h3>
          <a href="tel:+60174474404"><Phone size={15} /> 017 447 4404</a>
          <a href="mailto:info@coshareez.my"><Mail size={15} /> info@coshareez.my</a>
          <p>Isnin–Jumaat<br />9.00 pagi–6.00 petang</p>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} CoshareEZ Sdn Bhd</span>
        <div><Link to="/notis-privasi">Notis Privasi</Link><Link to="/terma">Terma & Syarat</Link></div>
      </div>
    </footer>
  )
}

export function Layout({ children }) {
  return <><Header /><main>{children}</main><Footer /><Link className="mobile-sticky-cta" to="/semak-kelayakan">Semak Kelayakan Saya</Link></>
}
