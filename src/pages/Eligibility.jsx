import { useState } from 'react'
import { CheckCircle2, LockKeyhole, ShieldCheck } from 'lucide-react'
import { eligibilityQuestions } from '../data'
import { PageHero, SafeNote } from '../components/UI'

export default function Eligibility() {
  const [step, setStep] = useState(1)
  const [data, setData] = useState({})
  const [accepted, setAccepted] = useState(false)
  const [error, setError] = useState('')
  const fields = step === 1 ? eligibilityQuestions.slice(0, 4) : eligibilityQuestions.slice(4)
  const update = (key, value) => setData({ ...data, [key]: value })
  const next = (event) => {
    event.preventDefault()
    if (fields.some(field => !data[field.key])) { setError('Sila lengkapkan semua maklumat pada langkah ini.'); return }
    setError('')
    if (step === 2 && !accepted) { setError('Sila sahkan persetujuan sebelum meneruskan.'); return }
    setStep(step + 1)
  }
  return <>
    <PageHero eyebrow="Semakan awal" title="Semak kelayakan anda dengan beberapa soalan ringkas" text="Langkah pertama tidak memerlukan nombor IC atau slip gaji. Maklumat ini membantu pegawai memahami profil asas anda." aside={<div className="privacy-bubble"><LockKeyhole /><strong>Privasi dari langkah pertama</strong><span>Tiada dokumen sensitif diperlukan sekarang.</span></div>} />
    <section className="section form-section"><div className="container form-layout">
      <div className="stepper"><div className={step >= 1 ? 'active' : ''}><span>1</span><p><strong>Profil asas</strong>Maklumat pekerjaan</p></div><div className={step >= 2 ? 'active' : ''}><span>2</span><p><strong>Komitmen</strong>Julat kewangan</p></div><div className={step >= 3 ? 'active' : ''}><span>3</span><p><strong>Selesai</strong>Langkah seterusnya</p></div></div>
      {step < 3 ? <form className="eligibility-form" onSubmit={next} noValidate>
        <div className="form-heading"><span>Langkah {step} daripada 2</span><h2>{step === 1 ? 'Ceritakan sedikit tentang anda' : 'Anggaran kedudukan bulanan'}</h2><p>{step === 1 ? 'Gunakan maklumat yang membolehkan pegawai menghubungi anda.' : 'Pilih julat terdekat. Anda boleh mengesahkan angka sebenar kemudian.'}</p></div>
        <div className="fields-grid">{fields.map(field => <label key={field.key}>{field.label}{field.type === 'select' ? <select value={data[field.key] || ''} onChange={e => update(field.key, e.target.value)}><option value="">Sila pilih</option>{field.options.map(o => <option key={o}>{o}</option>)}</select> : <input type={field.type} placeholder={field.placeholder} value={data[field.key] || ''} onChange={e => update(field.key, e.target.value)} />}</label>)}</div>
        {step === 2 && <label className="consent"><input type="checkbox" checked={accepted} onChange={e => setAccepted(e.target.checked)} /><span>Saya bersetuju untuk dihubungi bagi tujuan semakan awal dan telah membaca <a href="/notis-privasi">Notis Privasi</a>. Ini bukan permohonan atau jaminan kelulusan.</span></label>}
        {error && <p className="form-error" role="alert">{error}</p>}
        <div className="form-actions">{step === 2 && <button type="button" className="button button-secondary" onClick={() => setStep(1)}>Kembali</button>}<button className="button button-primary" type="submit">{step === 1 ? 'Teruskan' : 'Dapatkan Semakan Awal'}</button></div>
        <SafeNote />
      </form> : <div className="success-panel"><CheckCircle2 /><span className="eyebrow">Maklumat lengkap</span><h2>Semakan awal sedia untuk dihantar</h2><p>Versi prototaip ini tidak menghantar data ke mana-mana sistem. Sambungan CRM dan proses persetujuan akhir perlu dikonfigurasi sebelum pelancaran.</p><button className="button button-secondary" onClick={() => { setStep(1); setData({}); setAccepted(false) }}>Mulakan semula</button></div>}
      <aside className="form-assurance"><ShieldCheck /><h3>Apa berlaku selepas ini?</h3><ol><li>Pegawai menyemak profil asas.</li><li>Anda menerima penerangan pilihan yang mungkin berkaitan.</li><li>Dokumen hanya diminta jika semakan perlu diteruskan.</li></ol><p>Jangan hantar IC atau slip gaji melalui nombor yang tidak dapat disahkan.</p></aside>
    </div></section>
  </>
}
