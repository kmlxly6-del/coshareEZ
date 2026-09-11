import {
  BadgeCheck,
  BookOpenText,
  BriefcaseBusiness,
  Building2,
  Calculator,
  CircleHelp,
  FileCheck2,
  FileText,
  Headset,
  Landmark,
  LockKeyhole,
  MapPinned,
  MessagesSquare,
  PhoneCall,
  Scale,
  ShieldCheck,
  UserRoundCheck,
} from 'lucide-react'

export const products = [
  {
    slug: 'al-rajhi',
    name: 'Al Rajhi',
    eyebrow: 'Pembiayaan Peribadi-i',
    icon: Landmark,
    tone: 'navy',
    summary:
      'Pilihan pembiayaan patuh Syariah untuk pemohon sektor awam yang memenuhi kriteria semasa pihak pembiaya.',
    suitable: [
      'Kakitangan kerajaan dan kategori majikan yang diluluskan',
      'Pemohon yang mahu semakan berdasarkan pendapatan dan komitmen',
      'Permohonan dengan dokumen pekerjaan serta kewangan yang lengkap',
    ],
  },
  {
    slug: 'coshare-prihatin',
    name: 'Coshare Prihatin',
    eyebrow: 'Skim Pembiayaan',
    icon: Building2,
    tone: 'red',
    summary:
      'Semakan pembiayaan khusus untuk warga sektor awam, tertakluk pada profil pekerjaan dan syarat produk terkini.',
    suitable: [
      'Kakitangan kerajaan Persekutuan yang memenuhi kelayakan',
      'Pemohon yang memerlukan bantuan menyusun dokumen',
      'Individu yang mahu penerangan sebelum meneruskan permohonan',
    ],
  },
]

export const audienceTypes = [
  { icon: Landmark, label: 'Kerajaan Persekutuan' },
  { icon: Building2, label: 'Kerajaan Negeri & PBT' },
  { icon: BriefcaseBusiness, label: 'Badan berkanun & GLC terpilih' },
]

export const trustItems = [
  { icon: BadgeCheck, title: 'Saluran yang boleh disahkan', text: 'Identiti syarikat dan pegawai diterangkan dengan jelas.' },
  { icon: ShieldCheck, title: 'Tiada bayaran pendahuluan', text: 'Jangan pindahkan wang kepada akaun peribadi mana-mana ejen.' },
  { icon: MessagesSquare, title: 'Bimbingan manusia', text: 'Fahami pilihan dan langkah seterusnya bersama pegawai.' },
]

export const guideCards = [
  { icon: Calculator, title: 'Memahami had potongan gaji', text: 'Ketahui bagaimana komitmen pada slip gaji mempengaruhi semakan awal.' },
  { icon: FileText, title: 'Dokumen yang lazim diperlukan', text: 'Sediakan dokumen yang betul hanya apabila diminta melalui saluran rasmi.' },
  { icon: LockKeyhole, title: 'Elakkan penipuan pembiayaan', text: 'Kenal pasti red flag sebelum berkongsi dokumen atau membuat sebarang bayaran.' },
]

export const processSteps = [
  { icon: CircleHelp, title: 'Jawab semakan awal', text: 'Kongsi maklumat asas pekerjaan dan julat komitmen. IC dan slip gaji belum diperlukan.' },
  { icon: UserRoundCheck, title: 'Dapatkan penjelasan', text: 'Pegawai menilai maklumat asas dan menerangkan pilihan yang mungkin berkaitan.' },
  { icon: FileCheck2, title: 'Lengkapkan dokumen', text: 'Jika sesuai, dokumen diminta melalui saluran yang diterangkan dan dipersetujui.' },
  { icon: Scale, title: 'Permohonan dinilai', text: 'Keputusan akhir tertakluk kepada syarat dan kelulusan pihak pembiaya.' },
]

export const financingHighlights = [
  {
    icon: Calculator,
    label: 'Julat indikatif',
    title: 'RM5,000–RM200,000',
    text: 'Jumlah yang boleh dipertimbangkan bergantung pada produk, pendapatan, komitmen dan penilaian pihak pembiaya.',
  },
  {
    icon: Scale,
    label: 'Pilihan tempoh',
    title: '1 hingga 12 tahun',
    text: 'Tempoh yang tersedia berbeza mengikut produk dan profil. Bandingkan ansuran bulanan dengan jumlah bayaran keseluruhan.',
  },
  {
    icon: Landmark,
    label: 'Struktur pembiayaan',
    title: 'Kadar keuntungan yang jelas',
    text: 'Pegawai akan menerangkan kadar, jadual bayaran dan rebat penyelesaian awal, jika berkenaan, sebelum anda meneruskan.',
  },
  {
    icon: MapPinned,
    label: 'Akses permohonan',
    title: 'Semakan dari seluruh Malaysia',
    text: 'Semakan awal boleh dimulakan secara dalam talian sebelum dokumen lengkap diminta melalui saluran rasmi.',
  },
  {
    icon: Building2,
    label: 'Pengesahan pekerjaan',
    title: 'Keperluan majikan diterangkan',
    text: 'Kaedah pengesahan, termasuk rekod ANM atau HRMIS jika berkaitan, bergantung pada produk dan kategori majikan.',
  },
  {
    icon: FileCheck2,
    label: 'Profil kredit',
    title: 'Setiap kes dinilai secara individu',
    text: 'Rekod CCRIS, CTOS atau AKPK boleh dibincangkan dalam semakan awal. Ia bukan jaminan bahawa permohonan akan diluluskan.',
  },
  {
    icon: Headset,
    label: 'Perkembangan kes',
    title: 'Status dimaklumkan sepanjang proses',
    text: 'Pegawai membantu menyemak kemajuan kes. Tempoh keputusan sebenar bergantung pada dokumen dan pihak pembiaya.',
  },
  {
    icon: ShieldCheck,
    label: 'Perlindungan',
    title: 'Butiran takaful disahkan dahulu',
    text: 'Ketahui sama ada perlindungan takaful disertakan, skop perlindungan dan kesannya kepada jumlah pembiayaan.',
  },
]

export const contactDetails = [
  { icon: PhoneCall, label: 'Telefon', value: '017 447 4404', href: 'tel:+60174474404' },
  { icon: Headset, label: 'E-mel', value: 'info@coshareez.my', href: 'mailto:info@coshareez.my' },
  { icon: MapPinned, label: 'Pejabat', value: 'Kota Damansara, Petaling Jaya', href: '/hubungi' },
  { icon: BookOpenText, label: 'Waktu operasi', value: 'Isnin–Jumaat, 9.00 pagi–6.00 petang' },
]

export const eligibilityQuestions = [
  { key: 'name', label: 'Nama penuh', type: 'text', placeholder: 'Seperti dalam kad pengenalan' },
  { key: 'phone', label: 'Nombor telefon', type: 'tel', placeholder: 'Contoh: 012 345 6789' },
  {
    key: 'employer',
    label: 'Jenis majikan',
    type: 'select',
    options: ['Kerajaan Persekutuan', 'Kerajaan Negeri', 'Badan Berkanun', 'PBT', 'GLC', 'Lain-lain'],
  },
  {
    key: 'employment',
    label: 'Status pekerjaan',
    type: 'select',
    options: ['Tetap', 'Kontrak', 'Lain-lain'],
  },
  {
    key: 'salary',
    label: 'Julat gaji kasar bulanan',
    type: 'select',
    options: ['Bawah RM1,500', 'RM1,500–RM2,499', 'RM2,500–RM4,999', 'RM5,000 dan ke atas'],
  },
  {
    key: 'deduction',
    label: 'Anggaran potongan dalam slip gaji',
    type: 'select',
    options: ['Bawah 30%', '30%–49%', '50%–59%', '60% atau lebih', 'Tidak pasti'],
  },
]
