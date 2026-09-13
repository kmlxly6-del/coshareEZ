import { Link } from 'react-router-dom'
import { ArrowRight, Check, ChevronRight, Phone, ShieldCheck } from 'lucide-react'

export function SectionHead({ eyebrow, title, text, align = 'left' }) {
  return <div className={`section-head ${align === 'center' ? 'center' : ''}`}>
    {eyebrow && <span className="eyebrow">{eyebrow}</span>}
    <h2>{title}</h2>
    {text && <p>{text}</p>}
  </div>
}

export function ButtonLink({ to, children, secondary = false, className = '' }) {
  return <Link className={`button ${secondary ? 'button-secondary' : 'button-primary'} ${className}`} to={to}>{children}<ArrowRight size={17} /></Link>
}

export function Breadcrumbs({ items }) {
  return <nav className="breadcrumbs" aria-label="Breadcrumb">
    <Link to="/">Laman Utama</Link>
    {items.map((item, index) => <span key={item.label}><ChevronRight size={14} />{item.to && index < items.length - 1 ? <Link to={item.to}>{item.label}</Link> : <span aria-current="page">{item.label}</span>}</span>)}
  </nav>
}

export function PageHero({ eyebrow, title, text, children, aside }) {
  const visual = aside

  return <section className="page-hero"><div className="container">
    <Breadcrumbs items={[{ label: title }]} />
    <div className={`page-hero-grid ${visual ? '' : 'page-hero-grid-solo'}`}><div className="page-hero-copy"><span className="eyebrow">{eyebrow}</span><h1>{title}</h1><p>{text}</p>{children && <div className="hero-actions">{children}</div>}</div>{visual && <div className="page-hero-aside">{visual}</div>}</div>
  </div></section>
}

export function SafeNote({ children = 'Semakan awal tidak menjamin kelulusan. Terma dan syarat dikenakan.' }) {
  return <div className="safe-note"><ShieldCheck size={18} /><span>{children}</span></div>
}

export function Checklist({ items }) {
  return <ul className="checklist">{items.map(item => <li key={item}><span><Check size={14} /></span>{item}</li>)}</ul>
}

export function CTASection({
  title = 'Mulakan dengan semakan awal, bukan komitmen',
  text = 'Jawab beberapa soalan ringkas untuk membantu pegawai memahami profil anda. Dokumen sensitif hanya diminta pada langkah seterusnya jika diperlukan.'
}) {
  return (
    <section className="cta-section">
      <div className="container cta-shell">
        <div className="cta-content">
          <span className="eyebrow light">Langkah seterusnya</span>
          <h2>{title}</h2>
          <p>{text}</p>
          <div className="cta-guarantees">
            <div className="cta-guarantee-item">
              <ShieldCheck size={16} />
              <span>Tiada bayaran pendahuluan</span>
            </div>
            <div className="cta-guarantee-item">
              <Check size={16} />
              <span>Semakan awal tanpa IC & slip gaji</span>
            </div>
            <div className="cta-guarantee-item">
              <Check size={16} />
              <span>Saluran pegawai sah berdaftar</span>
            </div>
          </div>
        </div>
        <div className="cta-actions-wrap">
          <ButtonLink to="/semak-kelayakan" className="cta-main-btn">Semak Kelayakan Saya</ButtonLink>
          <Link className="cta-sub-link" to="/hubungi">
            <Phone size={15} />
            <span>Bercakap dengan pegawai sah</span>
          </Link>
          <span className="cta-hours-note">Isnin – Jumaat · 9.00 pagi – 6.00 petang</span>
        </div>
      </div>
    </section>
  )
}
