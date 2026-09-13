import { useParams } from 'react-router-dom'
import { FileCheck2, Scale, ShieldCheck } from 'lucide-react'
import { products } from '../data'
import { ButtonLink, Checklist, CTASection, PageHero, SafeNote, SectionHead } from '../components/UI'

export default function ProductPage() {
  const { slug } = useParams()
  const product = products.find(item => item.slug === slug) || products[0]
  const Icon = product.icon
  return <>
    <PageHero eyebrow={product.eyebrow} title={product.name} text={product.summary} aside={<div className={`product-mark ${product.tone}`}><Icon /><span>Maklumat produk</span><strong>Dikemas kini mengikut terma semasa</strong></div>}>
      <ButtonLink to="/semak-kelayakan">Semak untuk {product.name}</ButtonLink>
    </PageHero>
    <section className="section"><div className="container two-col-content editorial-two-col">
      <div><SectionHead eyebrow="Kesesuaian asas" title={`Siapa yang boleh mempertimbangkan ${product.name}?`} text="Semakan sebenar bergantung pada kategori majikan, status pekerjaan, pendapatan, komitmen dan kriteria pihak pembiaya." /><Checklist items={product.suitable} /></div>
      <div className="info-panel"><ShieldCheck /><h3>Ketahui sebelum berkongsi dokumen</h3><p>CoshareEZ membantu menguruskan proses permohonan. Kami bukan pihak yang memberi kelulusan akhir.</p><SafeNote>Jangan buat bayaran pendahuluan kepada individu atau akaun peribadi.</SafeNote></div>
    </div></section>
    <section className="section soft-section"><div className="container"><SectionHead eyebrow="Maklumat yang akan diterangkan" title="Nilai keseluruhan pilihan, bukan satu angka sahaja" align="center" />
      <div className="three-grid"><div><Scale /><h3>Kadar dan jumlah bayaran</h3><p>Pegawai menerangkan kadar keuntungan, anggaran ansuran dan jumlah bayaran berdasarkan jadual semasa.</p></div><div><FileCheck2 /><h3>Syarat dan dokumen</h3><p>Dokumen diminta mengikut produk dan hanya melalui saluran yang diterangkan.</p></div><div><ShieldCheck /><h3>Fi dan perlindungan</h3><p>Fahami fi, polisi tiada bayaran pendahuluan serta kaedah mengesahkan pegawai.</p></div></div>
    </div></section>
    <CTASection title={`Semak sama ada ${product.name} berkaitan dengan profil anda`} />
  </>
}
