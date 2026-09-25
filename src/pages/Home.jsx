import { Link } from 'react-router-dom'
import {
  ArrowRight,
  BadgeCheck,
  Calculator,
  CalendarClock,
  Check,
  CircleHelp,
  Clock,
  FileCheck2,
  FileText,
  Layers,
  LockKeyhole,
  MapPinned,
  MessagesSquare,
  PhoneCall,
  Scale,
  ShieldAlert,
  ShieldCheck,
  UserRoundCheck,
} from 'lucide-react'
import { audienceTypes, products } from '../data'
import { ButtonLink, CTASection, HighlightedTitle, SectionHead } from '../components/UI'

const productImages = {
  'al-rajhi': '/images/coshareez-alrajhi-architecture.jpg',
  'coshare-prihatin': '/images/coshareez-prihatin-catalog.jpg',
}

const proofMetrics = [
  {
    icon: Layers,
    value: '2 Pilihan',
    title: 'Produk aktif dibandingkan',
    desc: 'Al Rajhi & Coshare Prihatin mengikut profil majikan awam',
  },
  {
    icon: ShieldCheck,
    value: 'RM 0',
    title: 'Bayaran pendahuluan',
    desc: 'Tiada caj deposit, pemprosesan atau wang pendahuluan ejen',
  },
  {
    icon: MapPinned,
    value: 'Seluruh MY',
    title: 'Liputan semakan',
    desc: 'Semakan digital untuk pemohon Semenanjung, Sabah & Sarawak',
  },
  {
    icon: BadgeCheck,
    value: 'Agensi Sah',
    title: 'Pemasaran berdaftar',
    desc: 'Mengikut etika dan piawaian ketat agensi pemasaran Coshare',
  },
]

const commitmentPillars = [
  {
    step: '01',
    icon: Calculator,
    title: 'Had Ansuran Slip Gaji',
    desc: 'Patuhi had maksimum 60% potongan pendapatan (Biro ANGKASA / AG) supaya baki wang bulanan kekal selesa untuk perbelanjaan keluarga.',
    tag: 'Maksimum 60% slip gaji',
  },
  {
    step: '02',
    icon: CalendarClock,
    title: 'Tempoh Pembiayaan Bersesuaian',
    desc: 'Tempoh fleksibel sehingga 10 tahun. Tempoh lebih panjang mengurangkan ansuran tetapi menambah jumlah keuntungan pihak pembiaya.',
    tag: 'Pilihan 1 hingga 10 tahun',
  },
  {
    step: '03',
    icon: Scale,
    title: 'Jumlah Bayaran Penuh & Akad',
    desc: 'Ketahui kadar keuntungan tahunan serta jumlah akhir (pokok + keuntungan) tanpa sebarang kos tersembunyi berlandaskan prinsip Syariah.',
    tag: 'Akad patuh Syariah telus',
  },
]

const productHighlights = {
  'al-rajhi': {
    badge: 'Patuh Syariah',
    tag: 'Sektor Awam',
    points: [
      'Kakitangan kerajaan & majikan diluluskan',
      'Semakan berasaskan pendapatan & komitmen',
      'Tiada sebarang bayaran pendahuluan',
    ],
    cta: 'Terokai Al Rajhi',
  },
  'coshare-prihatin': {
    badge: 'Skim Khas',
    tag: 'Bimbingan Pegawai',
    points: [
      'Khusus untuk warga sektor awam',
      'Bantuan menyusun dokumen & komitmen',
      'Semakan awal tanpa sebarang ikatan',
    ],
    cta: 'Terokai Coshare Prihatin',
  },
}

const agentHighlights = {
  badge: 'Peluang Kerjaya',
  tag: 'Rakan Niaga',
  points: [
    'Latihan produk & modul pematuhan berjadual',
    'Sistem semakan kes & sokongan operasi',
    'Peluang pendapatan komisen berprestasi',
  ],
  cta: 'Mohon Jadi Ejen',
}

const processStepsDetailed = [
  {
    step: '01',
    icon: CircleHelp,
    tag: 'Tanpa IC / Slip Gaji',
    title: 'Semakan Awal Ringkas Secara Digital',
    text: 'Isi maklumat asas pekerjaan dan julat gaji semasa melalui borang pintar. Dokumen sensitif seperti kad pengenalan dan penyata gaji belum diperlukan pada langkah ini.',
  },
  {
    step: '02',
    icon: UserRoundCheck,
    tag: 'Formula DSR 60%',
    title: 'Penilaian Kelayakan & Pilihan Pakej',
    text: 'Pegawai berdaftar menganalisis nisbah komitmen slip gaji dan menerangkan pilihan produk (Al Rajhi atau Coshare Prihatin) yang paling sesuai mengikut kelayakan majikan.',
  },
  {
    step: '03',
    icon: FileCheck2,
    tag: 'Saluran Rasmi Agensi',
    title: 'Penyerahan Dokumen Terpilih',
    text: 'Hanya setelah anda bersetuju dengan jadual ansuran dan kadar keuntungan, dokumen sokongan diserahkan secara selamat melalui saluran agensi yang sah dan boleh disemak.',
  },
  {
    step: '04',
    icon: Scale,
    tag: 'Akad Patuh Syariah',
    title: 'Kelulusan Pembiaya & Akad Selesai',
    text: 'Pihak pembiaya memproses permohonan secara telus. Akad pembiayaan dimeterai tanpa sebarang wang pendahuluan, deposit akaun peribadi atau caj ejen tersembunyi.',
  },
]

const trustItemsDetailed = [
  {
    icon: BadgeCheck,
    tone: 'teal',
    badge: 'Pematuhan Agensi',
    title: 'Saluran Pegawai Berdaftar',
    text: 'Setiap wakil pemasaran CoshareEZ mempunyai identiti dan kod pendaftaran rasmi. Anda boleh mengesahkan kesahihan pegawai melalui portal kami sebelum berkongsi sebarang butiran.',
    actionText: 'Sahkan Pegawai Sekarang',
    actionTo: '/pengesahan-pegawai',
  },
  {
    icon: ShieldAlert,
    tone: 'red',
    badge: 'Dasar Sifar Yuran',
    title: '100% Tiada Bayaran Pendahuluan',
    text: 'Kami tidak pernah meminta wang pendahuluan, deposit ke akaun peribadi, atau caj pemprosesan. Segala semakan awal adalah percuma sepenuhnya.',
    actionText: 'Ketahui Panduan Anti-Penipuan',
    actionTo: '/keselamatan',
  },
  {
    icon: MessagesSquare,
    tone: 'ink',
    badge: 'Konsultasi Berhemah',
    title: 'Bimbingan Tanpa Tekanan',
    text: 'Dapatkan penerangan jujur mengenai jadual ansuran, kadar keuntungan, dan perbezaan pakej. Anda bebas membuat keputusan tanpa paksaan untuk memohon.',
    actionText: 'Hubungi Konsultan Rasmi',
    actionTo: '/hubungi',
  },
]

const guideCardsDetailed = [
  {
    icon: Calculator,
    category: 'Slip Gaji & DSR',
    readTime: '3 min bacaan',
    title: 'Memahami Had 60% Potongan Gaji Kakitangan Kerajaan',
    text: 'Ketahui bagaimana potongan ANGKASA dan potongan majikan dikira untuk memastikan permohonan anda tidak melebihi had baki gaji bersih yang dibenarkan.',
    link: '/panduan',
  },
  {
    icon: FileText,
    category: 'Senarai Dokumen',
    readTime: '2 min bacaan',
    title: 'Dokumen Yang Lazim Diperlukan Mengikut Kategori Majikan',
    text: 'Panduan menyediakan slip gaji terkini, surat pengesahan jawatan, dan dokumen sokongan secara selamat hanya apabila diminta melalui saluran yang sah.',
    link: '/panduan',
  },
  {
    icon: LockKeyhole,
    category: 'Keselamatan',
    readTime: '4 min bacaan',
    title: '5 Tanda Amaran Sindiket Pinjaman Peribadi Palsu',
    text: 'Kenal pasti taktik pihak tidak berlesen yang menyamar sebagai ejen dan cara memastikan urusan anda sentiasa terlindung di bawah saluran rasmi.',
    link: '/panduan',
  },
]

export default function Home() {
  return <>
    <section className="editorial-home-hero">
      <div className="container">
        <div className="hero-layout">
          <div className="hero-content">
            <div className="hero-badge">
              <span className="hero-badge-dot" />
              <span>Agensi Pemasaran Sah Pembiayaan Awam</span>
            </div>
            <h1 className="hero-title"><HighlightedTitle text="Fahami pilihan sebelum membuat komitmen" highlight="sebelum membuat komitmen" /></h1>
            <p className="hero-desc">Semak kelayakan, anggaran ansuran dan dokumen bersama pegawai sah CoshareEZ melalui proses digital yang jelas, telus dan tanpa sebarang bayaran pendahuluan.</p>
            <div className="hero-actions">
              <ButtonLink to="/semak-kelayakan" className="hero-btn-primary">
                Semak Kelayakan Saya
              </ButtonLink>
              <ButtonLink to="/kelayakan-dokumen" secondary className="hero-btn-secondary">
                Lihat syarat kelayakan
              </ButtonLink>
            </div>
            <div className="hero-guarantees">
              <div className="hero-guarantee-item">
                <Check size={16} className="hero-check-icon" />
                <span>RM0 Bayaran Pendahuluan</span>
              </div>
              <div className="hero-guarantee-item">
                <Check size={16} className="hero-check-icon" />
                <span>Semakan Tanpa Slip Gaji</span>
              </div>
              <div className="hero-guarantee-item">
                <Check size={16} className="hero-check-icon" />
                <span>Saluran Pegawai Berdaftar</span>
              </div>
            </div>
          </div>

          <div className="hero-visual-col">
            <div className="hero-floating-stage">
              <img
                src="/images/coshareez-hero-floating.png"
                alt="Kakitangan sektor awam bersama pilihan pembiayaan CoshareEZ"
                className="hero-floating-image"
                fetchPriority="high"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="section editorial-intro">
      <div className="container">
        <div className="intro-grid">
          <div className="intro-copy">
            <SectionHead
              eyebrow="Mengapa semakan awal penting"
              title="Keputusan kewangan lebih baik bermula dengan gambaran yang jelas"
              highlight="gambaran yang jelas"
              text="Komitmen sedia ada, tempoh pembiayaan dan syarat produk boleh memberi kesan berbeza kepada setiap pemohon. CoshareEZ membantu anda memahami pilihan yang tepat sebelum dokumen lengkap diserahkan."
            />
            <div className="intro-highlight-quote">
              <p>Elakkan kesilapan permohonan berulang atau komitmen melampaui had dengan bimbingan pegawai yang sah dan telus.</p>
            </div>
          </div>

          <div className="proof-facts-bento" aria-label="Fakta utama CoshareEZ">
            {proofMetrics.map(item => {
              const Icon = item.icon
              return (
                <div className="proof-card" key={item.value}>
                  <div className="proof-card-top">
                    <span className="proof-card-val">{item.value}</span>
                    <div className="proof-card-icon">
                      <Icon size={18} />
                    </div>
                  </div>
                  <strong className="proof-card-title">{item.title}</strong>
                  <p className="proof-card-desc">{item.desc}</p>
                </div>
              )
            })}
          </div>
        </div>

        <div className="audience-bar">
          <span className="audience-bar-label">Kelayakan majikan sektor awam:</span>
          <div className="audience-chips">
            {audienceTypes.map(({ icon: Icon, label }) => (
              <div className="audience-chip" key={label}>
                <Icon size={16} />
                <span>{label}</span>
              </div>
            ))}
            <div className="audience-chip verified">
              <BadgeCheck size={16} />
              <span>Saluran pegawai boleh disahkan</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="section agitate-section editorial-agitate">
      <div className="container">
        <div className="agitate-header">
          <span className="eyebrow light">Sebelum anda memohon</span>
          <h2><HighlightedTitle text="Bandingkan perkara yang memberi kesan kepada komitmen anda" highlight="komitmen anda" /></h2>
          <p>Ansuran bulanan yang kelihatan mampu milik belum menggambarkan keseluruhan keputusan. Teliti 3 faktor utama ini sebelum menyerahkan dokumen lengkap.</p>
        </div>

        <div className="agitate-cards">
          {commitmentPillars.map(item => {
            const Icon = item.icon
            return (
              <div className="agitate-card" key={item.step}>
                <div className="agitate-card-top">
                  <span className="agitate-card-step">{item.step}</span>
                  <div className="agitate-icon-wrap">
                    <Icon size={19} />
                  </div>
                </div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
                <span className="agitate-tag">{item.tag}</span>
              </div>
            )
          })}
        </div>

        <div className="agitate-footer">
          <div className="agitate-note">
            <ShieldCheck size={18} />
            <span>Semakan awal membantu menyusun pilihan tanpa sebarang yuran. Keputusan akhir tetap tertakluk kepada syarat serta kelulusan pihak pembiaya.</span>
          </div>
          <Link to="/semak-kelayakan" className="agitate-action-btn">
            <span>Semak Kelayakan Awal</span>
            <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </section>

    <section className="section catalog-section">
      <div className="container">
        <div className="catalog-header">
          <div className="catalog-header-text">
            <span className="eyebrow">Pilihan Laluan Anda</span>
            <h2><HighlightedTitle text="Pembiayaan atau peluang kerjaya" highlight="peluang kerjaya" /></h2>
            <p>Pilih laluan mengikut keperluan anda — bandingkan pakej pembiayaan patuh Syariah untuk warga sektor awam, atau sertai rangkaian konsultan bertauliah CoshareEZ.</p>
          </div>
          <Link className="catalog-compare-btn" to="/pembiayaan">
            <span>Bandingkan pembiayaan</span>
            <ArrowRight size={15} />
          </Link>
        </div>

        <div className="catalog-cards">
          {products.map(product => {
            const meta = productHighlights[product.slug]
            return (
              <Link className="catalog-card" to={`/produk/${product.slug}`} key={product.slug}>
                <div className="catalog-card-media">
                  <img src={productImages[product.slug]} alt={`Visual untuk ${product.name}`} loading="lazy" />
                  <span className={`catalog-media-badge ${product.slug === 'al-rajhi' ? 'badge-syariah' : 'badge-prihatin'}`}>
                    {meta.badge}
                  </span>
                </div>
                <div className="catalog-card-body">
                  <div className="catalog-category-row">
                    <span className="catalog-category">{product.eyebrow}</span>
                    <span className="catalog-tag-pill">{meta.tag}</span>
                  </div>
                  <h3>{product.name}</h3>
                  <p className="catalog-card-desc">{product.summary}</p>
                  <ul className="catalog-points" aria-label={`Kelebihan ${product.name}`}>
                    {meta.points.map(pt => (
                      <li key={pt}>
                        <Check size={14} className="catalog-point-icon" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="catalog-card-action">
                    <span>{meta.cta}</span>
                    <ArrowRight size={15} />
                  </div>
                </div>
              </Link>
            )
          })}

          <Link className="catalog-card agent-card" to="/jadi-ejen">
            <div className="catalog-card-media">
              <img src="/images/coshareez-hero-consultation.jpg" alt="Pegawai CoshareEZ berbincang bersama pelanggan" loading="lazy" />
              <span className="catalog-media-badge badge-career">
                {agentHighlights.badge}
              </span>
            </div>
            <div className="catalog-card-body">
              <div className="catalog-category-row">
                <span className="catalog-category">Peluang Kerjaya</span>
                <span className="catalog-tag-pill">{agentHighlights.tag}</span>
              </div>
              <h3>Jadi Ejen CoshareEZ</h3>
              <p className="catalog-card-desc">Fahami latihan, sokongan, saringan dan tatakelakuan sebelum memohon sebagai wakil pemasaran sah.</p>
              <ul className="catalog-points" aria-label="Kelebihan menjadi ejen">
                {agentHighlights.points.map(pt => (
                  <li key={pt}>
                    <Check size={14} className="catalog-point-icon" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
              <div className="catalog-card-action">
                <span>{agentHighlights.cta}</span>
                <ArrowRight size={15} />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>

    {/* Bahagian 1: Cara Ia Berfungsi */}
    <section className="section process-editorial-section" id="cara-ia-berfungsi">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Langkah Permohonan Berperingkat</span>
          <h2><HighlightedTitle text="Cara ia berfungsi dari awal hingga selesai" highlight="awal hingga selesai" /></h2>
          <p>Kami membahagikan urusan kepada empat langkah berperingkat supaya anda sentiasa faham apa yang berlaku tanpa berkongsi dokumen sensitif secara terburu-buru.</p>
        </div>

        <div className="editorial-process-grid">
          <div className="process-visual-column">
            <div className="process-photo-card">
              <img
                src="/images/coshareez-home-process.jpg"
                alt="Pegawai menyemak dokumen pembiayaan sebelum memulakan semakan awal"
                loading="lazy"
              />
              <div className="process-photo-overlay">
                <span className="process-overlay-badge">Bimbingan Telus & Selamat</span>
              </div>
            </div>

            <div className="process-assurance-box">
              <div className="process-assurance-head">
                <ShieldCheck size={20} className="text-teal" />
                <div>
                  <strong>Jaminan Perlindungan Pemohon</strong>
                  <p>Integriti data dan ketelusan syarat adalah keutamaan kami.</p>
                </div>
              </div>
              <ul className="process-assurance-list">
                <li>
                  <Check size={14} className="text-teal" />
                  <span><strong>RM0 yuran permulaan</strong> — Tiada caj ejen atau wang pendahuluan.</span>
                </li>
                <li>
                  <Check size={14} className="text-teal" />
                  <span><strong>Privasi data terjamin</strong> — Dokumen hanya diserah selepas persetujuan anda.</span>
                </li>
                <li>
                  <Check size={14} className="text-teal" />
                  <span><strong>Pegawai berdaftar</strong> — Semak nombor kuasa konsultan pada bila-bila masa.</span>
                </li>
              </ul>
              <Link to="/pengesahan-pegawai" className="process-assurance-link">
                <BadgeCheck size={15} />
                <span>Sahkan Kod Pegawai Agensi</span>
                <ArrowRight size={13} />
              </Link>
            </div>
          </div>

          <div className="process-timeline-column">
            <div className="process-timeline-cards">
              {processStepsDetailed.map((item) => {
                const Icon = item.icon
                return (
                  <div className="process-timeline-card" key={item.step}>
                    <div className="process-timeline-head">
                      <span className="process-step-pill">Langkah {item.step}</span>
                      <span className="process-tag-pill">{item.tag}</span>
                    </div>
                    <div className="process-timeline-body">
                      <div className="process-timeline-icon">
                        <Icon size={18} />
                      </div>
                      <div className="process-timeline-text">
                        <h3>{item.title}</h3>
                        <p>{item.text}</p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>

            <div className="process-actions-bar">
              <ButtonLink to="/semak-kelayakan">Mulakan Semakan Awal</ButtonLink>
              <Link to="/cara-memohon" className="process-secondary-link">
                <span>Lihat panduan terperinci cara memohon</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Bahagian 2: Bukti Sebelum Janji (Integriti & Keselamatan) */}
    <section className="section trust-section" id="integriti-keselamatan">
      <div className="container">
        <div className="section-head center">
          <span className="eyebrow">Ketelusan & Integriti</span>
          <h2><HighlightedTitle text="Keyakinan dibina melalui amalan yang boleh disahkan" highlight="boleh disahkan" /></h2>
          <p>Kami tidak mereka-reka testimoni. Pemohon sektor awam berhak menilai identiti agensi, ketelusan sifar fi, dan saluran perundingan yang selamat sebelum memulakan urusan.</p>
        </div>

        <div className="trust-bento-grid">
          {trustItemsDetailed.map((item) => {
            const Icon = item.icon
            return (
              <div className={`trust-card tone-${item.tone}`} key={item.title}>
                <div className="trust-card-top">
                  <span className="trust-badge">{item.badge}</span>
                  <div className="trust-icon-box">
                    <Icon size={20} />
                  </div>
                </div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <Link to={item.actionTo} className="trust-card-action">
                  <span>{item.actionText}</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            )
          })}
        </div>

        <div className="trust-assurance-bar">
          <div className="trust-assurance-inner">
            <div className="trust-assurance-content">
              <LockKeyhole size={18} className="text-red" />
              <span>
                <strong>Peringatan Keselamatan:</strong> Jangan sekali-kali memindahkan wang ke akaun peribadi individu atas nama deposit atau yuran pemprosesan.
              </span>
            </div>
            <a href="tel:+60174474404" className="trust-hotline-btn">
              <PhoneCall size={14} />
              <span>Talian Bantuan: 017 447 4404</span>
            </a>
          </div>
        </div>
      </div>
    </section>

    {/* Bahagian 3: Panduan Ringkas (Editorial Knowledge Hub) */}
    <section className="section guide-section" id="panduan-ringkas">
      <div className="container">
        <div className="section-head">
          <div className="guide-head-row">
            <div>
              <span className="eyebrow">Pusat Panduan & Maklumat</span>
              <h2><HighlightedTitle text="Buat keputusan berasaskan maklumat yang sahih" highlight="maklumat yang sahih" /></h2>
              <p>Rujukan ringkas tentang formula potongan gaji, senarai dokumen rasmi, dan panduan mengelak sindiket penipuan pembiayaan sektor awam.</p>
            </div>
            <Link to="/panduan" className="guide-view-all-btn">
              <span>Semua Panduan</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        <div className="guide-cards-grid">
          {guideCardsDetailed.map((item) => {
            const Icon = item.icon
            return (
              <Link to={item.link} className="guide-card" key={item.title}>
                <div className="guide-card-top">
                  <span className="guide-category-tag">{item.category}</span>
                  <span className="guide-read-time">
                    <Clock size={12} />
                    <span>{item.readTime}</span>
                  </span>
                </div>
                <div className="guide-card-icon-wrap">
                  <Icon size={19} />
                </div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <div className="guide-card-footer">
                  <span>Baca panduan penuh</span>
                  <ArrowRight size={14} />
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>

    {/* Bahagian 4: CTA Section */}
    <CTASection />
  </>
}
