import { Link } from 'react-router-dom'
import { AlertTriangle, ArrowRight, Building2, FileCheck2, FileText, Headset, LockKeyhole, MapPin, PhoneCall, SearchCheck, ShieldCheck } from 'lucide-react'
import { contactDetails, financingHighlights, guideCards, processSteps, products } from '../data'
import { ButtonLink, Checklist, CTASection, PageHero, SafeNote, SectionHead } from '../components/UI'

const productImages = {
  'al-rajhi': '/images/coshareez-alrajhi-architecture.jpg',
  'coshare-prihatin': '/images/coshareez-prihatin-catalog.jpg',
}

const guideImages = [
  '/images/coshareez-section2-commitments.jpg',
  '/images/coshareez-section2-professional-v2.jpg',
  '/images/coshareez-hero-consultation.jpg',
]

const guideSections = [
  {
    id: 'potongan-gaji',
    eyebrow: '01 · Slip gaji & komitmen',
    title: 'Fahami ruang potongan sebelum memilih jumlah pembiayaan',
    intro: 'Semakan yang baik bukan sekadar melihat jumlah yang boleh dipohon. Ia perlu mengambil kira baki pendapatan selepas semua potongan supaya komitmen baharu kekal munasabah.',
    image: guideImages[0],
    imageAlt: 'Kakitangan menyemak komitmen bulanan pada slip gaji',
    points: [
      ['Kenal pasti semua potongan', 'Senaraikan pembiayaan sedia ada, potongan ANGKASA, potongan majikan dan komitmen tetap lain yang muncul pada slip gaji.'],
      ['Bandingkan ansuran dengan baki bersih', 'Ansuran lebih rendah tidak semestinya lebih baik jika tempoh lebih panjang meningkatkan jumlah bayaran keseluruhan.'],
      ['Gunakan angka sebagai panduan', 'Had potongan yang dirujuk semasa saringan bukan jaminan kelulusan. Kriteria sebenar bergantung pada produk dan pihak pembiaya.'],
    ],
  },
  {
    id: 'dokumen-permohonan',
    eyebrow: '02 · Dokumen & proses',
    title: 'Sediakan dokumen mengikut peringkat, bukan semuanya sekaligus',
    intro: 'Semakan awal hanya memerlukan maklumat asas pekerjaan dan julat kewangan. Dokumen sensitif diminta kemudian apabila pilihan berkaitan telah diterangkan.',
    image: guideImages[1],
    imageAlt: 'Pegawai menyemak dokumen permohonan secara profesional',
    points: [
      ['Semakan awal', 'Nama, nombor telefon, jenis majikan, status pekerjaan serta anggaran pendapatan dan potongan.'],
      ['Semakan terperinci', 'Kad pengenalan, slip gaji terkini dan pengesahan pekerjaan mungkin diperlukan mengikut produk.'],
      ['Sebelum menghantar', 'Pastikan tujuan dokumen diterangkan dan nombor pegawai serta saluran penerimaan boleh disahkan.'],
    ],
  },
  {
    id: 'elak-penipuan',
    eyebrow: '03 · Keselamatan',
    title: 'Berhenti dan semak apabila urusan terasa terlalu mendesak',
    intro: 'Permohonan yang sah tidak memerlukan janji kelulusan, pindahan wang ke akaun peribadi atau tekanan untuk menyerahkan dokumen tanpa penerangan.',
    image: guideImages[2],
    imageAlt: 'Pegawai menerangkan proses pembiayaan melalui saluran rasmi',
    points: [
      ['Tiada bayaran pendahuluan', 'Jangan pindahkan wang untuk deposit, yuran ejen atau caj pemprosesan ke akaun individu.'],
      ['Tiada jaminan kelulusan', 'Keputusan akhir tertakluk pada dokumen, syarat produk dan penilaian pihak pembiaya.'],
      ['Sahkan sebelum berkongsi', 'Jika ragu-ragu, hentikan perbualan dan hubungi talian rasmi CoshareEZ di 017 447 4404.'],
    ],
  },
]

export function Financing() {
  const financingVisual = <div className="page-hero-floating-visual">
    <img src="/images/coshareez-financing-hero.png" alt="Pegawai CoshareEZ menunjukkan pilihan pembiayaan untuk warga sektor awam" />
  </div>

  return <>
    <PageHero eyebrow="Pilihan pembiayaan" title="Pembiayaan untuk warga sektor awam" highlight="sektor awam" text="Bandingkan dua produk aktif dan fahami skop pembiayaan sebelum mendapatkan semakan berdasarkan profil anda." aside={financingVisual}>
      <ButtonLink to="/semak-kelayakan">Semak Kelayakan Saya</ButtonLink>
    </PageHero>
    <section className="section page-intro-section"><div className="container">
      <div className="editorial-section-line"><span>02 produk aktif</span><p>Pilih berdasarkan kesesuaian profil, bukan semata-mata jumlah yang ditawarkan.</p></div>
      <div className="product-grid">{products.map(p => { const Icon = p.icon; return <article className={`product-panel product-panel-photo ${p.tone}`} key={p.slug}><div className="product-panel-media"><img src={productImages[p.slug]} alt="" /><span><Icon size={16} />{p.eyebrow}</span></div><div className="product-panel-body"><h2>{p.name}</h2><p>{p.summary}</p><Link to={`/produk/${p.slug}`}>Lihat butiran produk <ArrowRight size={16} /></Link></div></article> })}</div>
    </div></section>
    <section className="section soft-section"><div className="container">
      <SectionHead eyebrow="Ciri & pertimbangan" title="Lihat gambaran penuh sebelum memilih" highlight="gambaran penuh" text="Maklumat berikut ialah panduan indikatif berdasarkan program yang dipasarkan melalui CoshareEZ. Butiran sebenar perlu disahkan mengikut produk, profil pemohon dan terma semasa." align="center" />
      <div className="benefit-grid">{financingHighlights.map(({ icon: Icon, label, title, text }) => <article className="benefit-card" key={title}><Icon /><span>{label}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
      <SafeNote>Julat jumlah dan tempoh bukan tawaran atau jaminan kelulusan. Pegawai akan mengesahkan maklumat produk semasa sebelum dokumen lengkap diminta.</SafeNote>
    </div></section>
    <section className="section"><div className="container two-col-content"><div><SectionHead eyebrow="Perbandingan yang bertanggungjawab" title="Produk yang sesuai bergantung pada profil, bukan label popular" highlight="bergantung pada profil" text="Pegawai akan menilai kategori majikan, status pekerjaan, pendapatan, komitmen dan dokumen sebelum menerangkan pilihan yang mungkin berkaitan." /></div><Checklist items={['Dua produk aktif sahaja', 'Terma dirujuk kepada maklumat semasa', 'Tiada produk dipilih secara automatik', 'Keputusan akhir oleh pihak pembiaya']} /></div></section>
    <CTASection />
  </>
}

export function ProcessPage() {
  const processVisual = <div className="page-hero-floating-visual">
    <img src="/images/coshareez-process-hero.png" alt="Telefon yang menerangkan empat langkah permohonan CoshareEZ" />
  </div>

  return <>
    <PageHero eyebrow="Cara memohon" title="Ketahui apa yang berlaku pada setiap langkah" highlight="setiap langkah" text="Proses yang jelas membantu anda menyediakan maklumat tepat tanpa berkongsi dokumen terlalu awal." aside={processVisual}>
      <ButtonLink to="/semak-kelayakan">Mulakan Semakan Awal</ButtonLink>
    </PageHero>
    <section className="section"><div className="container process-page-layout"><figure className="editorial-side-photo"><img src="/images/coshareez-hero-consultation.jpg" alt="Sesi penerangan antara pegawai dan pelanggan" /><figcaption><strong>Bimbingan manusia, dari awal hingga keputusan</strong><span>Dokumen diminta hanya selepas pilihan diterangkan.</span></figcaption></figure><div className="process-list">{processSteps.map(({ icon: Icon, title, text }, i) => <div key={title}><span>0{i + 1}</span><Icon /><div><h2>{title}</h2><p>{text}</p></div></div>)}</div></div></section>
    <CTASection />
  </>
}

export function DocumentsPage() {
  const documentsVisual = <div className="page-hero-floating-visual">
    <img src="/images/coshareez-documents-hero.png" alt="Wakil profesional menerangkan kelayakan dan dokumen CoshareEZ" />
  </div>

  return <>
    <PageHero eyebrow="Kelayakan & dokumen" title="Sediakan perkara yang betul pada waktu yang betul" highlight="waktu yang betul" text="Semakan awal menggunakan maklumat asas. Dokumen sensitif hanya diminta apabila pilihan berkaitan telah dikenal pasti." aside={documentsVisual}>
      <ButtonLink to="/semak-kelayakan">Semak Kelayakan</ButtonLink>
    </PageHero>
    <section className="section"><div className="container two-col-content editorial-two-col"><div><SectionHead eyebrow="Kelayakan asas" title="Siapa yang boleh membuat semakan?" highlight="boleh membuat semakan" /><Checklist items={['Kakitangan kerajaan Persekutuan atau Negeri', 'Kakitangan badan berkanun dan PBT', 'Kakitangan GLC yang berada dalam kategori terpilih', 'Status dan tempoh pekerjaan tertakluk pada produk']} /></div><div className="document-stack"><div><FileText /><span>Kad pengenalan</span></div><div><FileCheck2 /><span>Slip gaji terkini</span></div><div><Building2 /><span>Pengesahan pekerjaan</span></div><p>Senarai tepat boleh berbeza mengikut produk. Jangan hantar dokumen sebelum menerima arahan melalui saluran rasmi.</p></div></div></section>
    <CTASection />
  </>
}

export function Guides() {
  const guideVisual = <div className="page-hero-floating-visual">
    <img src="/images/coshareez-guide-hero.png" alt="Pegawai CoshareEZ membantu memahami potongan dan angka pembiayaan" />
  </div>

  return <>
    <PageHero eyebrow="Pusat panduan" title="Buat keputusan dengan maklumat yang lebih tersusun" highlight="lebih tersusun" text="Rujukan praktikal untuk memahami potongan gaji, dokumen permohonan dan langkah keselamatan sebelum anda membuat sebarang komitmen." aside={guideVisual} />

    <section className="guide-index-section">
      <div className="container guide-index">
        <span className="guide-index-label">Dalam panduan ini</span>
        <nav aria-label="Kandungan panduan">
          {guideSections.map((guide, index) => <a href={`#${guide.id}`} key={guide.id}><span>0{index + 1}</span>{guide.title}</a>)}
        </nav>
      </div>
    </section>

    <section className="guide-articles">
      <div className="container">
        {guideSections.map((guide, index) => {
          const Icon = guideCards[index].icon
          return <article className="guide-article" id={guide.id} key={guide.id}>
            <figure className="guide-article-media">
              <img src={guide.image} alt={guide.imageAlt} />
              <figcaption><Icon size={17} />{guide.eyebrow}</figcaption>
            </figure>
            <div className="guide-article-content">
              <span className="eyebrow">{guide.eyebrow}</span>
              <h2>{guide.title}</h2>
              <p className="guide-article-intro">{guide.intro}</p>
              <div className="guide-point-list">
                {guide.points.map(([title, text], pointIndex) => <div key={title}><span>0{pointIndex + 1}</span><div><h3>{title}</h3><p>{text}</p></div></div>)}
              </div>
            </div>
          </article>
        })}
        <SafeNote>Maklumat ini ialah panduan umum. Kelayakan, jumlah, tempoh dan dokumen sebenar tertakluk pada produk serta penilaian pihak pembiaya.</SafeNote>
      </div>
    </section>

    <CTASection title="Sudah faham perkara asas? Mulakan semakan awal" text="Kongsi maklumat asas pekerjaan dan julat kewangan. Pegawai akan menerangkan pilihan berkaitan sebelum meminta dokumen sensitif." />
  </>
}

export function About() {
  const aboutVisual = <div className="page-hero-floating-visual">
    <img src="/images/coshareez-about-hero.png" alt="Pegawai CoshareEZ bersama komputer riba dan bangunan Coshare" />
  </div>

  return <>
    <PageHero eyebrow="Mengenai kami" title="Bantuan yang jelas, melalui saluran yang boleh disahkan" highlight="boleh disahkan" text="CoshareEZ ialah agensi pemasaran sah bagi produk Coshare dan memberi fokus kepada proses permohonan warga sektor awam." aside={aboutVisual} />
    <section className="section"><div className="container two-col-content editorial-two-col"><div><SectionHead eyebrow="Peranan CoshareEZ" title="Kami membantu proses. Pihak pembiaya membuat keputusan." highlight="membuat keputusan" text="Pegawai membantu semakan awal, menerangkan dokumen dan menguruskan langkah permohonan. Kami tidak menjanjikan kelulusan atau meminta bayaran pendahuluan." /></div><div className="principles-list"><div><span>01</span><h3>Maklumat yang mudah difahami</h3></div><div><span>02</span><h3>Perlindungan data sejak awal</h3></div><div><span>03</span><h3>Urusan melalui identiti rasmi</h3></div></div></div></section>
    <section className="section soft-section"><div className="container partnership-panel"><div><span className="eyebrow">Kerjasama organisasi</span><h2>Saluran penerangan untuk kumpulan kakitangan</h2><p>CoshareEZ terbuka kepada program penerangan yang terancang bersama GLC, syarikat tersenarai, badan berkanun dan organisasi terpilih. Skop kelayakan, bahan komunikasi dan proses rujukan disahkan sebelum program dimulakan.</p></div><ButtonLink to="/hubungi" secondary>Bincang kerjasama</ButtonLink></div></section>
  </>
}

export function Safety() {
  const safetyVisual = <div className="page-hero-floating-visual">
    <img src="/images/coshareez-safety-hero.png" alt="Peranti digital dan mangga yang menekankan keselamatan urusan CoshareEZ" />
  </div>

  return <>
    <PageHero eyebrow="Keselamatan" title="Kenal pasti saluran yang betul sebelum berkongsi dokumen" highlight="saluran yang betul" text="Berhenti dan semak jika seseorang meminta wang pendahuluan, akaun peribadi atau menjanjikan kelulusan tanpa penilaian." aside={safetyVisual} />
    <section className="section"><div className="container risk-grid"><div className="risk-card bad"><AlertTriangle /><h2>Tanda amaran</h2><Checklist items={['Meminta bayaran ke akaun peribadi', 'Menjanjikan kelulusan 100%', 'Mendesak penghantaran IC tanpa penerangan', 'Menggunakan nombor yang tidak dapat disahkan']} /></div><div className="risk-card good"><ShieldCheck /><h2>Amalan CoshareEZ</h2><Checklist items={['Tiada bayaran pendahuluan', 'Tujuan dokumen diterangkan', 'Pegawai boleh disahkan', 'Keputusan tertakluk pada pihak pembiaya']} /></div></div></section>
  </>
}

export function VerifyOfficer() { return <><PageHero eyebrow="Pengesahan pegawai" title="Pastikan siapa yang menghubungi anda" text="Gunakan nombor telefon atau ID pegawai untuk membuat semakan sebelum menghantar dokumen." image="/images/coshareez-hero-consultation.jpg" imageAlt="Pegawai menerangkan urusan melalui saluran rasmi" imageLabel="Semak identiti sebelum berkongsi dokumen" /><section className="section form-section"><div className="container verify-shell"><SearchCheck /><h2>Semakan direktori pegawai</h2><p>Direktori sebenar perlu disambungkan kepada pangkalan data pegawai yang diluluskan sebelum pelancaran.</p><div className="verify-input"><input aria-label="Nombor telefon atau ID pegawai" placeholder="Masukkan nombor telefon atau ID pegawai" /><button className="button button-primary" onClick={() => alert('Direktori pegawai belum disambungkan dalam prototaip ini.')}>Semak Pegawai</button></div><SafeNote>Jika ragu-ragu, hubungi talian rasmi 017 447 4404.</SafeNote></div></section></> }

export function Contact() {
  const contactVisual = <div className="page-hero-floating-visual">
    <img src="/images/coshareez-contact-hero.png" alt="Wakil CoshareEZ menunjukkan saluran rasmi untuk menghubungi pasukan" />
  </div>

  return <>
    <PageHero eyebrow="Hubungi kami" title="Bercakap melalui saluran rasmi CoshareEZ" highlight="saluran rasmi" text="Dapatkan penjelasan tentang semakan pembiayaan, status permohonan atau peluang ejen." aside={contactVisual} />
    <section className="section"><div className="container contact-grid">{contactDetails.map(({ icon: Icon, label, value, href }) => { const content = <><Icon /><span>{label}</span><strong>{value}</strong></>; return href ? <Link key={label} to={href}>{content}</Link> : <div key={label}>{content}</div> })}</div><div className="container address-panel"><MapPin /><div><h2>Pejabat Kota Damansara</h2><p>No 25-G, Jalan PJU 5/20A, Pusat Perdagangan The Strand, Kota Damansara, 47810 Petaling Jaya, Selangor.</p></div><a className="button button-secondary" href="tel:+60174474404"><PhoneCall size={17} /> Hubungi Pejabat</a></div></section>
  </>
}

export function StatusPage() { return <><PageHero eyebrow="Pelanggan sedia ada" title="Semak status permohonan" text="Gunakan nombor rujukan yang diberikan oleh pegawai. Jangan masukkan nombor IC penuh pada halaman ini." image="/images/coshareez-section2-professional-v2.jpg" imageAlt="Pegawai menyemak perkembangan permohonan" imageLabel="Gunakan nombor rujukan, bukan nombor IC" /><section className="section form-section"><div className="container verify-shell"><Headset /><h2>Masukkan nombor rujukan</h2><div className="verify-input"><input aria-label="Nombor rujukan" placeholder="Contoh: CEZ-000000" /><button className="button button-primary" onClick={() => alert('Sistem status belum disambungkan dalam prototaip ini.')}>Semak Status</button></div><SafeNote>Untuk bantuan, hubungi 017 447 4404 melalui saluran rasmi.</SafeNote></div></section></> }

export function LegalPage({ type = 'privacy' }) { const privacy = type === 'privacy'; return <><PageHero eyebrow="Maklumat undang-undang" title={privacy ? 'Notis Privasi' : 'Terma & Syarat'} text={privacy ? 'Ketahui bagaimana data peribadi dikumpul, digunakan, dikongsi dan dilindungi.' : 'Terma penggunaan laman dan proses semakan CoshareEZ.'} aside={<div className="privacy-bubble"><LockKeyhole /><strong>{privacy ? 'Data anda, tanggungjawab kami' : 'Terma yang mudah dirujuk'}</strong><span>Maklumat rasmi sebelum anda meneruskan.</span></div>} /><section className="section form-section"><div className="container legal-copy"><LockKeyhole /><h2>{privacy ? 'Notis penuh perlu disahkan sebelum pelancaran' : 'Terma penuh perlu disahkan sebelum pelancaran'}</h2><p>Halaman prototaip ini menyediakan lokasi dan struktur sahaja. Kandungan undang-undang akhir perlu disemak oleh pemilik data dan penasihat pematuhan dalam Bahasa Melayu serta Bahasa Inggeris.</p></div></section></> }
