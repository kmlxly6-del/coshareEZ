# Blueprint refresh & redesign CoshareEZ

Tarikh kajian: 11 September 2026
Skop: laman awam `coshareez.my`, funnel pembiayaan, funnel pengambilan ejen,
kandungan, UX, CRO, SEO asas, pematuhan dan arah visual.

> Dokumen ini ialah blueprint strategik, bukan nasihat undang-undang. Semua dakwaan
> produk, hubungan agensi, kadar, tempoh, logo dan terma hendaklah disahkan oleh HQ,
> institusi pembiaya serta penasihat pematuhan sebelum diterbitkan.

## 1. Keputusan utama

CoshareEZ tidak patut kelihatan seperti salinan laman korporat HQ atau laman “pinjaman
segera”. Ia perlu mengambil posisi sebagai **saluran bantuan permohonan yang sah,
jelas dan manusiawi untuk sektor awam**, dengan dua perjalanan yang sengaja
dipisahkan:

1. **Saya mahu semak pembiayaan** — objektif utama laman dan CTA utama Home.
2. **Saya mahu menjadi ejen** — funnel rekrut tersendiri dengan penerangan tugas,
   saringan, latihan dan pematuhan seperti model pengambilan ejen insurans.

Cadangan mesej payung:

> **Semakan pembiayaan yang lebih jelas untuk warga sektor awam.**
>
> Fahami kelayakan awal, dokumen dan langkah permohonan bersama pegawai CoshareEZ—
> agensi pemasaran sah bagi produk Coshare. Tertakluk kepada syarat dan kelulusan.

Status “master agent” tidak perlu disebut. Frasa “agensi pemasaran sah bagi produk
Coshare” perlu mendapat kelulusan bertulis dan disokong dengan mekanisme pengesahan,
bukan hanya dakwaan pada halaman.

## 2. Audit laman semasa

### 2.1 Apa yang sudah ada

- Sasaran “sektor kerajaan” dinyatakan dengan cepat.
- CTA semakan kelayakan, telefon dan WhatsApp tersedia.
- Halaman produk, kira kelayakan, info korporat, blog, PDPA dan jadi agen sudah wujud.
- Canonical, meta description, sitemap serta schema `WebSite` asas tersedia.
- LiteSpeed cache dan GA4 dikesan; laman menggunakan WordPress, Elementor dan tema
  Hello Elementor.

### 2.2 Masalah conversion dan kepercayaan

| Pemerhatian | Kesan | Cadangan |
|---|---|---|
| Home meminta nama, telefon, IC, e-mel dan slip gaji hampir serta-merta | Permintaan data sensitif muncul sebelum keyakinan dibina | Jadikan langkah pertama semakan ringkas tanpa IC/slip; minta dokumen hanya selepas keputusan awal dan penerangan privasi |
| Hero berupa carousel poster | Mesej bertukar-tukar, sukar dibaca pada telefon dan terasa seperti iklan | Gunakan satu hero berasaskan outcome, imej manusia sebenar dan satu CTA dominan |
| “Pantas”, “Mudah”, “Patuh Syariah” terlalu generik | Tidak menjawab “mengapa saya patut percaya CoshareEZ?” | Tukar kepada bukti: status agensi, tiada bayaran pendahuluan, langkah jelas, pegawai boleh dikenal pasti |
| KFH yang telah dihentikan masih ditunjukkan sebagai `[Discontinued]` | Menimbulkan kekeliruan dan memberi isyarat laman tidak dijaga | Keluarkan sepenuhnya daripada navigasi, katalog dan sitemap; 301 URL lama ke halaman produk yang paling berkaitan |
| Laluan pembiayaan dan ejen bercampur dalam navigasi tetapi halaman ejen sangat nipis | Dua niat berbeza bersaing; calon ejen tidak mendapat maklumat cukup | Wujudkan funnel dan borang berasingan dengan KPI berasingan |
| CTA umum seperti “Baca Selanjutnya” dan “Hantar” | Pengguna tidak tahu hasil selepas klik | Gunakan “Lihat Syarat Pelan”, “Dapatkan Keputusan Semakan Awal”, “Hantar Permohonan Ejen” |
| Footer masih © 2022 | Mengurangkan keyakinan bahawa maklumat semasa | Gunakan tahun automatik dan tarikh kemas kini produk |
| Banyak copy campur BM/BI dan kesalahan bahasa | Menjejaskan autoriti dalam kategori kewangan | Wujudkan glossary dan semakan editorial/pematuhan |

### 2.3 Ketidakselarasan kandungan yang perlu dihentikan dahulu

- Home menyebut pembiayaan sehingga RM200,000 tetapi halaman Al Rajhi dan halaman
  kira kelayakan menyebut sehingga RM250,000.
- Halaman kira kelayakan menyebut kadar `3.99% flat rate` dan tempoh sehingga 15
  tahun; halaman produk menyebut julat serta tempoh berbeza.
- KFH telah disahkan tidak diteruskan. Katalog baharu hanya mempunyai **Al Rajhi**
  dan **Coshare Prihatin**. KFH tidak perlu diberi kad “tidak tersedia”; buang dari
  semua permukaan conversion dan redirect URL lamanya.
- Home menggunakan istilah “faedah” untuk produk yang diposisikan sebagai patuh
  Syariah. Gunakan istilah yang diluluskan dalam Product Disclosure Sheet.
- Copy “ketahui kelayakan dan terima pinjaman segera” boleh difahami sebagai janji
  hasil. Tukar kepada bahasa bersyarat dan proses yang boleh dibuktikan.
- HQ semasa menyatakan Coshare ialah pemudah cara/ejen pengurusan, bukan bank atau
  pemberi pinjaman, serta tiada caj pendahuluan. CoshareEZ perlu konsisten dengan
  kedudukan ini.

Sebelum pelancaran, bina satu `Product Claims Register` dengan medan: produk, claim,
sumber/PDS, pemilik, tarikh diluluskan, tarikh semakan seterusnya dan halaman yang
menggunakan claim tersebut.

### 2.4 SEO dan teknikal

Ujian Lighthouse mudah alih pada 11 September 2026 (satu ujian makmal; bukan data
pengguna sebenar) memberikan:

- Performance **52/100**
- Accessibility **93/100**
- Best Practices **100/100**
- SEO **92/100**
- LCP **6.1s** — lemah berbanding sasaran 2.5s
- CLS **0.791** — sangat lemah berbanding sasaran 0.1
- 92 network requests dan kira-kira 3.9 MiB muatan
- Anggaran JavaScript tidak digunakan 206 KiB dan CSS tidak digunakan 36 KiB
- Isu kontras warna dan pautan tanpa nama yang boleh difahami pembaca skrin

Isu lain:

- Dokumen HTML menetapkan `lang="en-US"` walaupun kandungan utama Bahasa Melayu.
- Title utama masih berbahasa Inggeris dan mengandungi identiti lama.
- Schema hanya `WebSite`; organisasi, perkhidmatan, FAQ dan breadcrumb belum lengkap.
- `robots.txt` mengandungi 15 nama sitemap rawak melalui HTTP yang semuanya memberi
  404. Ini ialah petanda kuat konfigurasi SEO lama atau suntikan yang perlu disiasat
  segera, bukan sekadar dibuang tanpa audit keselamatan.
- `sample-page/`, kategori kosong dan tag bertindih berada dalam sitemap.
- Blog terakhir yang dapat dikesan bertarikh 2023; kandungan kempen bermusim lama
  masih boleh diindeks.
- Header keselamatan lazim seperti HSTS, CSP, `X-Content-Type-Options`,
  `Referrer-Policy` dan `Permissions-Policy` tidak kelihatan dalam respons semasa.
- GA Universal Analytics lama masih wujud bersama GA4; UA boleh dibuang selepas
  mengesahkan tiada kebergantungan pelaporan.

Keutamaan teknikal: audit keselamatan WordPress dan akaun admin, bersihkan
`robots.txt`, kemas kini plugin/tema, buang halaman nipis, bina redirect map, tetapkan
BM sebagai bahasa, kemudian selesaikan LCP/CLS sebelum menambah animasi.

## 3. Positioning dan psikologi conversion

### 3.1 Masalah sebenar yang cuba diselesaikan

Pengguna bukan “mencari pinjaman” semata-mata. Mereka mahu:

- tahu sama ada permohonan berbaloi diteruskan;
- melihat komitmen bulanan dengan lebih jelas;
- mendapat ruang untuk mengurus keperluan atau menyusun komitmen;
- mengelakkan scam, caj pendahuluan dan proses yang kabur;
- dibimbing oleh seseorang yang boleh dihubungi.

### 3.2 Prinsip psikologi yang sesuai dan beretika

- **Kurangkan ketidakpastian:** tunjuk langkah, masa maklum balas dan apa berlaku
  selepas borang dihantar.
- **Commitment kecil dahulu:** semakan awal 5–6 medan, kemudian dokumen penuh.
- **Authority:** paparkan nombor pendaftaran syarikat, status agensi yang boleh
  disahkan, alamat, pegawai dan rakan produk yang diluluskan.
- **Social proof:** gunakan kisah yang disahkan, angka yang boleh diaudit dan bukti
  proses. Jangan cipta quote.
- **Goal gradient:** langkah 1 daripada 3 dengan progress bar pada borang.
- **Loss aversion secara berhemah:** jelaskan kos keputusan tanpa maklumat—bukan
  menakutkan pengguna tentang “krisis” atau memalukan hutang mereka.
- **Choice architecture:** satu CTA utama; maksimum dua jalan penyelesaian yang
  jelas, bukan katalog produk panjang di Home.

## 4. Struktur laman dicadangkan

### 4.1 Model website

Ini ialah **website multi-page dengan navbar dan subpage**, bukan single landing
page. Aliran Problem → Agitate → Solution → Testimoni → Action tetap digunakan pada
Home sebagai naratif conversion, tetapi Home hanya memberi ringkasan yang mencukupi
untuk membantu pengguna memilih laluan. Kandungan panjang, terma produk, dokumen,
FAQ khusus dan borang penuh berada pada halaman masing-masing.

Prinsip pembahagian kandungan:

- **Home:** membina relevansi, kepercayaan dan mengarahkan niat.
- **Subpage:** menjawab soalan khusus serta menyelesaikan satu tugasan pengguna.
- **Borang:** berdiri sebagai langkah conversion, bukan disalin penuh pada setiap
  halaman.
- **Panduan:** membina kefahaman dan trafik organik tanpa mencampurkan promosi produk.
- **Navbar:** menjadi peta utama website; CTA semakan kekal kelihatan.

### 4.2 Information architecture

```text
/
├── /pembiayaan/
│   ├── /semak-kelayakan/
│   ├── /produk/al-rajhi/
│   ├── /produk/coshare-prihatin/
│   ├── /proses-permohonan/
│   ├── /dokumen-diperlukan/
│   └── /semak-status/
├── /jadi-ejen/
│   ├── /jadi-ejen/cara-ia-berfungsi/
│   ├── /jadi-ejen/soalan-lazim/
│   └── /jadi-ejen/mohon/
├── /kisah-pelanggan/
├── /panduan/
├── /tentang-coshareez/
├── /pengesahan-pegawai/
├── /keselamatan-anti-penipuan/
├── /hubungi/
├── /notis-privasi/
└── /terma-dan-syarat/
```

KFH tidak wujud dalam seni bina baharu. URL lama diurus melalui 301 redirect dan
tidak dipaparkan kepada pengguna sebagai pilihan ketiga.

### 4.3 Navbar desktop

Gunakan header dua aras yang ringkas:

```text
Utility bar:  Agensi sah bagi produk Coshare    Semak Status · Hubungi
Main nav:     [Logo]  Pembiayaan⌄  Cara Memohon  Panduan  Jadi Ejen  Tentang⌄  [Semak Kelayakan]
```

**Dropdown `Pembiayaan`:**

- Ringkasan Pembiayaan
- Al Rajhi
- Coshare Prihatin
- Kelayakan & Dokumen

**Dropdown `Tentang`:**

- Mengenai CoshareEZ
- Pengesahan Pegawai
- Keselamatan & Anti-Penipuan
- Hubungi Kami

`Semak Status` diletakkan pada utility bar kerana ia untuk pelanggan sedia ada,
manakala `Semak Kelayakan` kekal sebagai CTA merah utama untuk pelawat baharu.

Kelakuan navbar:

- sticky selepas pengguna mula scroll, dengan tinggi yang mengecil secara lembut;
- active state jelas pada halaman semasa;
- dropdown dibuka melalui hover dan keyboard focus, serta boleh ditutup dengan Esc;
- keseluruhan parent `Pembiayaan` masih boleh diklik ke halaman ringkasan;
- fokus papan kekunci mempunyai outline yang jelas;
- tiada mega-menu kerana hanya dua produk aktif;
- jangan masukkan nombor telefon besar di bar utama sehingga menolak menu.

### 4.4 Navbar mobile

- Header satu bar: logo, CTA kecil `Semak` dan butang menu.
- Menu slide-down/full-height dengan accordion untuk `Pembiayaan` dan `Tentang`.
- `Semak Kelayakan` dan `Semak Status` dipisahkan dengan jelas.
- Sticky bottom bar hanya mempunyai satu tindakan utama: `Semak Kelayakan Saya`.
- WhatsApp boleh berada dalam halaman atau menu; jangan tindih dengan chat bubble.
- Sasaran sentuhan minimum 44 × 44 px dan menu boleh ditutup tanpa scroll ke atas.

### 4.5 Peranan setiap halaman

| Halaman | Tugas utama | Kandungan teras | CTA utama |
|---|---|---|---|
| Home | Memperkenalkan nilai dan memilih laluan | Problem, agitate, dua produk, proses ringkas, proof, ejen teaser | Semak Kelayakan Saya |
| Pembiayaan | Memberi gambaran keseluruhan | Siapa layak, dua pilihan produk, perbandingan neutral, proses | Lihat Kelayakan Saya |
| Al Rajhi | Menerangkan satu produk | Kesesuaian, amaun, tempoh, kadar/fi, dokumen, PDS, FAQ | Semak untuk Al Rajhi |
| Coshare Prihatin | Menerangkan satu produk | Kesesuaian, amaun, tempoh, kadar/fi, dokumen, PDS, FAQ | Semak untuk Coshare Prihatin |
| Kelayakan & Dokumen | Mengurangkan ketidakpastian | Jenis majikan, status kerja, had potongan, checklist dokumen | Mulakan Semakan Awal |
| Cara Memohon | Menjelaskan perjalanan | Semakan → dokumen → penilaian → keputusan → status | Semak Kelayakan |
| Semak Kelayakan | Menangkap lead berkualiti | Borang progresif dan consent | Hantar Semakan Awal |
| Semak Status | Melayan pemohon sedia ada | Nombor rujukan, verifikasi dan bantuan | Semak Status Saya |
| Jadi Ejen | Merekrut dan menyaring | Peranan, latihan, tatakelakuan, proses, FAQ | Mohon Menjadi Ejen |
| Panduan | Pendidikan dan SEO | Artikel kewangan sektor awam yang disemak | Semak Kelayakan jika relevan |
| Tentang | Membina autoriti | Entiti, pasukan, hubungan agensi, pejabat dan nilai | Kenali Cara Kami Membantu |
| Pengesahan Pegawai | Mengurangkan risiko scam | Carian ID/nombor pegawai dan arahan keselamatan | Sahkan Pegawai |
| Hubungi | Menyediakan saluran rasmi | Telefon, e-mel, alamat, waktu operasi dan peta | Hubungi Pegawai |

### 4.6 Internal linking

- Setiap kad produk pada Home menuju ke subpage produk, bukan membuka popup.
- Subpage produk memaut ke Kelayakan & Dokumen, PDS dan Semak Kelayakan.
- Artikel Panduan memaut hanya ke halaman produk yang benar-benar berkaitan.
- Breadcrumb digunakan pada semua subpage: `Home › Pembiayaan › Al Rajhi`.
- Footer mengulang sitemap ringkas, bukan keseluruhan dropdown navbar.
- Halaman success borang menyediakan pautan Semak Status dan Keselamatan.

## 5. Blueprint Home: Problem → Agitate → Solution → Testimoni → Action

Home ialah halaman utama dalam website multi-page. Ia masih dibina seperti halaman
conversion, tetapi setiap bahagian berfungsi sebagai preview yang membawa pengguna
ke subpage berkaitan. Elakkan memindahkan keseluruhan jadual produk, semua FAQ dan
borang dokumen ke Home.

### 5.1 Header dan trust strip

Tujuan: memberi identiti dan laluan terus tanpa memenuhi skrin.

- Logo CoshareEZ yang kembali ke Home.
- Navbar utama seperti struktur bahagian 4.3.
- Nombor telefon rasmi dan waktu operasi dalam utility bar/menu Hubungi, bukan
  sebagai elemen paling dominan.
- Trust strip ringkas: `Agensi sah bagi produk Coshare` · `Tiada bayaran pendahuluan`
  · `Khas untuk sektor awam terpilih`.
- CTA: `Semak Kelayakan`.

### 5.2 Hero

**Pilihan A — disyorkan**

> # Ketahui kelayakan pembiayaan anda sebelum membuat keputusan
>
> Semakan awal untuk kakitangan kerajaan, GLC dan badan berkanun terpilih. Pegawai
> kami membantu anda memahami pilihan, dokumen dan langkah seterusnya dengan jelas.
>
> **[Semak Kelayakan Saya]**  [Lihat Syarat Kelayakan]
>
> Semakan awal tidak menjamin kelulusan. Terma dan syarat dikenakan.

**Pilihan B — lebih outcome-led**

> # Susun keperluan kewangan anda dengan langkah yang lebih jelas
>
> Semak pilihan pembiayaan patuh Syariah yang berkaitan dengan kelayakan anda—tanpa
> bayaran pendahuluan dan tanpa janji kelulusan yang mengelirukan.

**Pilihan C — lebih spesifik kepada segmen**

> # Pembiayaan untuk warga sektor awam, dibimbing dari semakan hingga keputusan

Visual hero: pegawai sebenar sedang menerangkan satu halaman ringkasan kepada
pelanggan dalam suasana profesional. Elakkan wang tunai, kereta mewah, thumbs-up,
poster kadar besar dan stock photo berjabat tangan.

### 5.3 Problem

> ## Apabila komitmen bertambah, pilihan yang ada tidak semestinya mudah difahami
>
> Keperluan keluarga, kos pendidikan, penyelesaian komitmen sedia ada atau perbelanjaan
> tidak dijangka boleh mengecilkan ruang kewangan bulanan. Pada masa yang sama, kadar,
> syarat dan dokumen daripada setiap penyedia tidak selalu mudah dibandingkan.

Gunakan tiga situasi, bukan tiga “feature card”:

- `Komitmen bulanan semakin sukar disusun`
- `Tidak pasti produk mana yang berkaitan dengan kelayakan`
- `Bimbang menyerahkan dokumen kepada saluran yang tidak dapat disahkan`

#### Arah visual khusus Section 2

Section 2 ialah bahagian pertama yang perlu terasa manusiawi dan dekat dengan realiti,
bukan sambungan kepada hero berbentuk iklan.

**Komposisi desktop:** split 5/7 yang sedikit asimetri. Copy berada di kiri. Di kanan,
satu foto realistik memenuhi bentuk segi empat beradius besar dengan satu penjuru
lebih bulat, disokong dua bubble kecil yang mempunyai fungsi maklumat.

```text
┌───────────────────────┬──────────────────────────────────┐
│ Apabila komitmen      │             ╭─────────────────╮  │
│ bertambah...          │       ○     │ foto manusia    │  │
│                       │             │ sebenar         │  │
│ Tiga situasi ringkas  │             ╰───────────────╮ │  │
│ tanpa kad berulang    │  bubble info: “Pilihan kabur” ○  │
└───────────────────────┴──────────────────────────────────┘
```

**Subjek foto disyorkan:** seorang kakitangan sektor awam Malaysia berumur sekitar
30–50 tahun, berpakaian kerja yang realistik, duduk di meja makan atau ruang kerja
rumah selepas waktu pejabat. Individu itu sedang meneliti slip gaji atau senarai
komitmen bersama pasangan atau bersendirian. Ekspresi perlu berfikir dan terkawal—
bukan menangis, memegang kepala atau kelihatan terdesak.

**Material dan elemen dalam adegan:**

- meja kayu atau permukaan neutral;
- satu helaian slip gaji dengan semua butiran kabur/tidak boleh dibaca;
- buku nota, pen, kalkulator atau tablet;
- mug, fail nipis atau lanyard kerja sebagai tanda kehidupan sebenar;
- pencahayaan siang Malaysia yang lembut dan warna kulit semula jadi;
- latar kediaman atau pejabat sederhana, kemas tetapi bukan mewah.

**Bubble yang berguna:**

- satu bubble kecil memegang teks `Komitmen bulanan`;
- satu bubble lain memegang ikon dokumen dan teks `Pilihan yang perlu difahami`;
- bubble tidak boleh menyerupai chat palsu atau angka kelulusan;
- maksimum dua bubble, saiz berbeza, sedikit bertindih dengan bingkai foto;
- gunakan warna Paper/Teal lembut; merah hanya untuk titik perhatian kecil.

**Crop dan radius:** foto utama `border-radius: 32px 96px 32px 32px`; bubble bulat
atau organik dengan radius 999 px. Pada mobile, foto berada selepas intro copy,
nisbah 4:3 dan radius `24px 64px 24px 24px`. Pastikan muka dan tangan tidak dipotong
secara janggal.

**Elakkan:** wang tunai, kad kredit besar, rumah/kereta mewah, suit korporat generik,
jabat tangan, thumbs-up, ekspresi panik, meja penuh bil bertanda merah, logo jabatan
sebenar tanpa kebenaran dan teks kewangan yang boleh dikenal pasti.

**Prompt fotografi jika imej perlu dihasilkan:**

> Documentary-style commercial photograph of a Malaysian public-sector employee,
> age 35–45, in modest professional workwear, seated at a simple dining table at
> home after work, calmly reviewing an anonymised payslip and a handwritten monthly
> budget with a calculator and pen, thoughtful but composed expression, authentic
> Malaysian middle-income home, soft natural daylight, navy and neutral wardrobe,
> realistic skin texture, candid three-quarter angle, generous negative space on
> the left for Malay website copy, trustworthy financial-services campaign,
> photorealistic, no visible personal data, no cash, no luxury objects, no logos,
> no handshake, no exaggerated distress, landscape 4:3.

### 5.4 Agitate — intensif tetapi tidak sensasi

> ## Keputusan yang tergesa-gesa boleh menambah beban, bukan menyelesaikannya
>
> Tanpa gambaran yang jelas tentang ansuran, tempoh, jumlah bayaran dan syarat,
> seseorang mungkin memohon produk yang tidak sesuai, menyediakan dokumen berulang
> kali atau berurusan dengan pihak yang tidak dapat disahkan. Langkah pertama yang
> lebih baik ialah memahami kedudukan anda dahulu.

Sertakan satu panel `Sebelum anda memohon`:

- semak komitmen semasa;
- fahami anggaran ansuran dan jumlah bayaran;
- pastikan saluran serta pegawai boleh disahkan;
- jangan bayar wang pendahuluan kepada individu.

### 5.5 Solution

> ## Dua cara CoshareEZ boleh membantu

**Laluan 1 — Pembiayaan**

> Dapatkan semakan awal berdasarkan profil pekerjaan dan komitmen anda. Jika sesuai,
> pegawai akan menerangkan pilihan yang tersedia, dokumen diperlukan dan proses
> seterusnya.
>
> **[Semak Kelayakan Saya]**

Paparkan hanya dua produk aktif:

1. **Al Rajhi**
2. **Coshare Prihatin**

Setiap panel produk perlu ada: siapa sesuai, julat amaun, tempoh, kadar keuntungan
efektif/kaedah yang diluluskan, dokumen, fi/caj, tarikh kemas kini, pautan PDS dan
disclaimer. Jangan gunakan label “paling popular” atau memilih produk secara default
tanpa asas kesesuaian pelanggan.

**Laluan 2 — Kerjaya ejen**

> Bina kerjaya sebagai perunding pembiayaan dengan latihan, bahan pemasaran, proses
> kes yang teratur dan standard tatakelakuan yang jelas.
>
> **[Lihat Peluang Ejen]**

Kad ejen harus visualnya sekunder pada Home supaya tidak mengganggu funnel pemohon.

### 5.6 Cara proses berfungsi

1. **Jawab semakan awal** — butiran asas pekerjaan dan komitmen.
2. **Terima penjelasan pegawai** — pilihan yang berkaitan dan dokumen sebenar.
3. **Hantar dokumen melalui saluran selamat** — hanya selepas persetujuan yang jelas.
4. **Permohonan dinilai** — keputusan tertakluk kepada penyedia pembiayaan.

Nyatakan SLA yang boleh dipenuhi, contohnya “maklum balas awal dalam waktu operasi”,
bukan “lulus dalam 24 jam” kecuali ada bukti dan takrif yang tepat.

### 5.7 Trust dan anti-penipuan

> ## Kenal pasti saluran yang betul sebelum berkongsi dokumen

- Tiada bayaran pendahuluan.
- Jangan pindahkan wang ke akaun peribadi ejen.
- Semak nombor pegawai pada halaman pengesahan.
- CoshareEZ membantu proses permohonan; kelulusan dibuat oleh pihak pembiaya.
- Paparkan syarikat, nombor pendaftaran, alamat, telefon domain sendiri dan pautan
  notis privasi.

### 5.8 Testimoni tanpa mereka-reka testimoni

**Jangan lancarkan carousel quote palsu atau menggunakan nama pelanggan tanpa bukti
persetujuan.** Untuk versi pertama, gunakan `Bukti yang boleh disahkan`:

- garis masa proses sebenar tanpa dakwaan kelulusan;
- jumlah semakan/permohonan hanya jika boleh diaudit dan nyatakan tempoh;
- logo rakan hanya dengan kebenaran;
- foto pejabat dan pasukan sebenar;
- screenshot status yang disunting semua data peribadi;
- `Apa yang pelanggan boleh jangkakan` sebagai process proof, bukan testimoni.

Copy sementara:

> ## Keyakinan dibina melalui proses yang boleh diperiksa
>
> Kami sedang menyusun kisah pelanggan yang telah memberikan persetujuan untuk
> diterbitkan. Sementara itu, lihat bagaimana setiap permohonan dikendalikan dan cara
> mengesahkan pegawai yang menghubungi anda.
>
> [Lihat Proses Kami] [Semak Pegawai]

Apabila testimoni sah tersedia, guna format kes yang lebih berguna daripada pujian:

```text
Keperluan: Menyusun beberapa komitmen bulanan
Profil: Kakitangan badan berkanun, Selangor
Apa yang dibantu: Semakan dokumen dan penerangan pilihan
Hasil: [fakta yang disahkan; jangan samakan kelulusan dengan jaminan masa depan]
Petikan: “...”
Nama: Nama pertama + inisial / nama penuh mengikut consent
Tarikh pengalaman: Bulan Tahun
```

### 5.9 FAQ

Soalan yang perlu dijawab:

1. Siapa yang boleh membuat semakan?
2. Adakah semakan awal menjamin kelulusan?
3. Adakah CoshareEZ sebuah bank atau pemberi pinjaman?
4. Adakah bayaran pendahuluan dikenakan?
5. Dokumen apa yang diperlukan dan bila perlu dihantar?
6. Bagaimana data IC dan slip gaji digunakan serta disimpan?
7. Bagaimana saya boleh mengesahkan pegawai?
8. Bagaimana potongan gaji dan had 60% dinilai?
9. Berapa lama semakan dan permohonan mengambil masa?
10. Bagaimana saya menyemak status?

### 5.10 Final action

> ## Mulakan dengan semakan awal, bukan komitmen
>
> Jawab beberapa soalan ringkas untuk membantu pegawai kami memahami profil anda.
> Dokumen sensitif hanya diminta pada langkah seterusnya jika diperlukan.
>
> **[Semak Kelayakan Saya]**
>
> Perlukan penjelasan dahulu? [Bercakap dengan Pegawai]

## 6. Funnel permohonan pembiayaan

### 6.1 Progressive form

**Langkah 1 — Semakan asas (tanpa dokumen)**

- Nama penuh
- Nombor telefon
- Negeri
- Jenis majikan: Kerajaan Persekutuan / Kerajaan Negeri / Badan Berkanun / PBT /
  GLC / Lain-lain
- Status pekerjaan: Tetap / Kontrak / Lain-lain
- Julat gaji kasar
- Julat jumlah potongan dalam slip gaji
- Tujuan umum: keperluan peribadi / penyatuan komitmen / pendidikan / perubatan /
  lain-lain
- Consent komunikasi dan pautan notis privasi

**Langkah 2 — Hasil semakan awal**

- Berpotensi diteruskan / perlukan semakan pegawai / belum menepati kriteria asas.
- Tunjuk bahawa ini bukan kelulusan kredit.
- Terangkan mengapa dokumen seterusnya diperlukan.

**Langkah 3 — Dokumen melalui saluran selamat**

- IC depan/belakang, slip gaji, penyata bank dan dokumen sokongan berdasarkan produk.
- Paparkan pemilik data, tujuan, penerima data, tempoh simpanan, hak pengguna dan
  pautan notis BM/English sebelum upload.
- Enkripsi transit dan storan, kawalan akses berperanan, audit log, polisi pemadaman,
  malware scanning dan larangan menghantar dokumen ke nombor peribadi.

**Confirmation page**

- Nombor rujukan.
- Ringkasan apa yang dihantar.
- Jangka masa maklum balas yang diluluskan.
- Nombor telefon rasmi dan amaran anti-scam.
- CTA `Semak Status Permohonan`.

## 7. Funnel pengambilan ejen ala insurans

### 7.1 Prinsip

Jangan menjual “komisen tinggi” sebagai mesej utama. Jual satu sistem kerjaya:
latihan → pensijilan dalaman → prospecting beretika → penghantaran kes → semakan
status → pembayaran komisen mengikut terma. Ini menarik calon lebih berkualiti dan
mengurangkan risiko ejen membuat dakwaan sendiri.

### 7.2 Struktur halaman `/jadi-ejen/`

1. **Hero**

   > # Bina kerjaya sebagai ejen pembiayaan yang dipercayai
   >
   > Sertai rangkaian CoshareEZ dengan latihan produk, panduan pematuhan, bahan
   > pemasaran dan sokongan pengurusan kes.
   >
   > **[Semak Kesesuaian Saya]**

2. **Siapa yang sesuai** — profesional jualan/insurans/hartanah/unit amanah, individu
   berdisiplin, atau calon baharu yang sanggup belajar. Nyatakan syarat konflik
   pekerjaan untuk penjawat awam perlu disemak oleh calon dengan majikan.
3. **Peranan sebenar** — prospecting, penerangan yang tepat, pengumpulan consent dan
   dokumen melalui saluran sah, kemas kini pelanggan dan kerahsiaan data.
4. **Apa yang disediakan** — latihan, playbook, bahan yang telah diluluskan, support
   desk, sistem status dan coaching. Paparkan hanya manfaat yang benar-benar wujud.
5. **Cara pendapatan berfungsi** — “komisen bagi kes yang memenuhi terma dan berjaya
   diselesaikan”; berikan contoh berangka hanya selepas struktur disahkan. Jangan
   jamin pendapatan.
6. **Proses 5 langkah** — permohonan → saringan → taklimat → dokumen/semakan →
   pengaktifan.
7. **Tatakelakuan** — tiada caj pendahuluan, tiada jaminan lulus, tiada akaun peribadi,
   tiada ubah suai dokumen, lindungi data, guna bahan diluluskan.
8. **Kisah ejen** — hanya selepas interview dan consent; fokus perkembangan kemahiran,
   bukan gaya hidup mewah.
9. **FAQ** — status kerja, kawasan, pengalaman, latihan, sasaran, komisen, tempoh
   saringan dan perlindungan data.
10. **Final CTA** — `Hantar Permohonan Ejen`.

### 7.3 Borang ejen berperingkat

**Langkah 1: minat dan kesesuaian**

- Nama, telefon, e-mel, negeri/daerah
- Status semasa: bekerja / berniaga / pelajar / tidak bekerja
- Pengalaman jualan: tiada / <1 tahun / 1–3 tahun / >3 tahun
- Bidang pengalaman
- Masa yang boleh diperuntukkan
- Mengapa berminat (maksimum 300 aksara)
- Persetujuan dihubungi

**Langkah 2: saringan**

- Sesi taklimat ringkas atau video wajib
- Quiz pematuhan ringkas
- Pengakuan konflik kepentingan dan tatakelakuan

**Langkah 3: hanya calon disenarai pendek**

- IC, alamat, butiran bank bagi pembayaran dan dokumen kontrak melalui portal selamat
- Consent khusus dan akses terhad

Hasil setiap langkah mesti jelas: `Permohonan diterima`, `Dalam saringan`, `Jemputan
taklimat`, `Dokumen diperlukan`, `Aktif` atau `Tidak diteruskan`.

## 8. Sistem mendapatkan testimoni sebenar

### 8.1 Trigger

- Hari keputusan/disbursement: minta skor pengalaman 1–5.
- 3–7 hari kemudian: minta maklum balas ringkas daripada skor 4–5.
- Skor 1–3 dihantar ke recovery workflow, bukan diminta testimoni awam.

### 8.2 Soalan interview

1. Apakah keadaan yang mendorong anda membuat semakan?
2. Apakah kebimbangan anda sebelum berhubung?
3. Bahagian proses mana yang paling membantu?
4. Apa yang menjadi lebih jelas selepas dibantu?
5. Apakah nasihat anda kepada pemohon lain?

### 8.3 Consent wajib

- Pilihan paparan nama: penuh / nama pertama + inisial / anonim.
- Pilihan paparan foto, video, suara, jawatan dan organisasi secara berasingan.
- Saluran penggunaan: website, sosial, iklan.
- Hak untuk menarik balik bagi penggunaan masa depan.
- Tarikh, versi copy yang diluluskan dan rekod asal disimpan.

Sasaran pelancaran: 6–9 kisah merentasi kerajaan Persekutuan, Negeri, badan berkanun,
PBT dan GLC; bukan sembilan quote yang mengatakan perkara sama.

## 9. Arah visual

### Konsep: “Clarity Ledger”

Identiti meminjam disiplin daripada dokumen kewangan kerajaan—garisan grid, ruang
putih, label yang jelas dan panel semakan—tanpa kelihatan seperti portal kerajaan.
Elemen istimewa tunggal ialah **laluan merah nipis** yang bergerak melalui halaman,
menghubungkan masalah → semakan → keputusan.

Bahasa bentuk keseluruhan perlu lembut dan tidak tajam. Gunakan segi empat beradius,
pill dan bubble organik untuk memberi rasa dibimbing, sambil mengekalkan grid dan
tipografi yang disiplin supaya laman tidak kelihatan seperti aplikasi kanak-kanak.

### Palet

| Token | Hex | Fungsi |
|---|---:|---|
| Ink navy | `#13263A` | Teks, header, autoriti |
| Paper | `#F7F8FA` | Latar utama |
| Signal red | `#D92D32` | CTA utama dan laluan jenama |
| Teal trust | `#18766F` | Status selamat, patuh, disahkan |
| Steel | `#607184` | Teks sokongan |
| White | `#FFFFFF` | Permukaan borang |

Merah kekal sebagai tanda tindakan, bukan memenuhi seluruh halaman. Navy membezakan
CoshareEZ daripada merah-putih korporat HQ; teal membawa isyarat tenang dan amanah.

### Tipografi

- `IBM Plex Sans` untuk heading dan UI: formal, teknikal tetapi mesra dibaca.
- `Source Sans 3` untuk body dan borang: jelas pada skrin kecil.
- Angka kewangan gunakan tabular numerals.
- Elakkan semua heading huruf besar dan headline poster yang terlalu tebal.

### Layout

- Desktop: grid 12 kolum, kandungan utama maksimum 1180 px, copy 6–7 kolum.
- Mobile-first: CTA dan hasil semakan boleh dicapai dengan ibu jari.
- Kebanyakan kandungan left-aligned; center hanya untuk final CTA.
- Tiada penjuru tajam pada permukaan utama. Gunakan sistem radius yang konsisten:
  `10px` untuk input, `16px` untuk butang/panel kecil, `24px` untuk panel produk,
  `32px` untuk gambar biasa dan `32px 96px 32px 32px` untuk gambar utama.
- CTA utama berbentuk pill sederhana (`border-radius: 999px`) tetapi tidak terlalu
  tinggi atau kartun.
- Bubble organik hanya untuk imej, status ringkas dan callout penting; maksimum dua
  atau tiga dalam satu viewport.
- Jangan jadikan setiap perenggan sebuah kad. Radius perlu membingkai fungsi dan
  hierarki, bukan menghasilkan “dinding kad” generik.
- Foto dokumentari pasukan/pelanggan sebenar; tidak perlu wang kertas atau gaya hidup.

### Sistem imej beradius dan bubble

1. **Hero:** satu foto besar beradius asimetri, satu bubble pengesahan seperti
   `Tiada bayaran pendahuluan`.
2. **Section 2:** foto manusia realistik dengan dua bubble konteks seperti arahan
   terperinci di bahagian 5.3.
3. **Produk:** dua panel beradius 24 px. Logo kekal di atas latar putih yang tenang;
   jangan memotong logo ke dalam bentuk bubble.
4. **Proses:** avatar/foto kecil berbentuk circle hanya jika orang itu benar-benar
   sebahagian daripada proses.
5. **Testimoni:** potret pelanggan dengan consent dalam rounded square, bukan semua
   gambar berbentuk bulat.

Bayang perlu lembut dan hampir rata: contoh `0 16px 40px rgba(19,38,58,.10)` pada
foto utama sahaja. Panel lain lebih sesuai menggunakan border halus supaya visual
kekal profesional.

```text
┌──────────────────────────────────────────────────────────────┐
│ Logo   Pembiayaan  Cara Memohon  Panduan  Jadi Ejen   [CTA] │
├──────────────────────────────────────────────────────────────┤
│ Headline & CTA                         Foto konsultasi sebenar │
│ trust notes                            panel “3 langkah”       │
├──────────────────────────────────────────────────────────────┤
│ Masalah → akibat keputusan kabur                              │
├──────────────────────────────────────────────────────────────┤
│ Pembiayaan (utama, lebar)             Jadi ejen (sekunder)    │
├──────────────────────────────────────────────────────────────┤
│ Process proof / kisah pelanggan / anti-scam                   │
├──────────────────────────────────────────────────────────────┤
│ FAQ                                          Final CTA         │
└──────────────────────────────────────────────────────────────┘
```

## 10. SEO content blueprint

### Halaman wang

- `Pembiayaan peribadi kakitangan kerajaan`
- `Pembiayaan peribadi badan berkanun`
- `Pembiayaan peribadi GLC terpilih`
- `Semak kelayakan pembiayaan kerajaan`
- Setiap produk aktif dengan PDS, kadar/terma yang disahkan dan tarikh kemas kini
- `Jadi ejen pembiayaan` sebagai cluster berasingan

### Cluster panduan

- Cara membaca potongan dalam slip gaji kerajaan
- Apa maksud had potongan gaji 60%
- Dokumen lazim untuk semakan pembiayaan
- Perbezaan semakan awal, permohonan dan kelulusan
- Cara mengesahkan ejen pembiayaan dan mengelakkan scam
- Soalan yang perlu ditanya sebelum memilih pembiayaan
- Penyatuan komitmen: perkara yang perlu dinilai, risiko dan jumlah bayaran

Setiap artikel perlu ada penulis/penyemak, tarikh kemas kini, sumber primer dan CTA
yang berkaitan. Elakkan halaman lokasi atau variasi kata kunci berskala besar tanpa
nilai unik.

### Meta Home cadangan

- **Title:** `Pembiayaan Kakitangan Kerajaan | Semak Kelayakan CoshareEZ`
- **Description:** `Semak kelayakan awal pembiayaan untuk kakitangan kerajaan, GLC dan badan berkanun terpilih. Proses jelas, patuh Syariah dan tiada bayaran pendahuluan.`

Sahkan panjang akhir dalam SERP dan ubah claim “patuh Syariah” mengikut produk aktif.

### Schema

- `Organization`/`LocalBusiness` dengan butiran sah.
- `Service` untuk setiap perkhidmatan.
- `FAQPage` hanya apabila FAQ benar-benar kelihatan pada halaman.
- `BreadcrumbList` pada halaman dalaman.
- `Article` dengan author/reviewer/dateModified untuk panduan.
- Jangan guna aggregate rating atau review schema tanpa ulasan yang sah dan mematuhi
  garis panduan Google.

## 11. Pengukuran funnel

KPI utama pembiayaan:

- Hero CTA click-through.
- Mula semakan → siap langkah 1.
- Layak/semakan pegawai → mula upload.
- Upload lengkap → permohonan diterima.
- Permohonan diterima → keputusan/disbursement, jika integrasi membenarkan.
- Masa respons pegawai dan kadar lead tidak dapat dihubungi.

KPI ejen:

- View `/jadi-ejen/` → mula permohonan.
- Siap permohonan → hadir taklimat.
- Hadir taklimat → lulus saringan.
- Lulus → aktif 30 hari.
- Aktif → kes lengkap pertama dan kadar kes berkualiti.

Event minimum: `financing_cta_click`, `eligibility_start`, `eligibility_step_complete`,
`eligibility_complete`, `document_upload_start`, `agent_cta_click`,
`agent_application_complete`, `whatsapp_click`, `phone_click`, `status_check` dan
`form_error`. Jangan hantar IC, telefon, e-mel atau data gaji ke analytics.

## 12. Eksperimen selepas baseline stabil

1. Hero A “ketahui kelayakan” vs Hero B “susun keperluan kewangan”.
2. Borang embedded langkah 1 vs CTA ke halaman semakan.
3. Trust strip “tiada bayaran pendahuluan” vs “semak pegawai”.
4. Process proof vs testimoni pada posisi selepas solution.
5. CTA `Semak Kelayakan Saya` vs `Dapatkan Semakan Awal`.

Uji satu hipotesis utama pada satu masa. Kualiti lead dan kadar permohonan lengkap
lebih penting daripada klik WhatsApp semata-mata.

## 13. Pelan pelaksanaan

### Fasa 0 — segera, sebelum redesign

- Audit keselamatan WordPress dan siasat sitemap rawak dalam `robots.txt`.
- Sahkan semua produk, kadar, tempoh, amaun, rakan dan SLA.
- Keluarkan KFH daripada navigasi, katalog, borang dan sitemap; 301 URL lama ke
  halaman produk berkaitan yang dipersetujui. Nyahterbit/redirect `sample-page`.
- Betulkan copy berisiko dan footer.
- Dokumentasikan aliran data borang, storage, akses dan retention.

### Fasa 1 — asas conversion

- Bangunkan design system dan Home baharu.
- Lancarkan semakan kelayakan berperingkat.
- Bina halaman produk berformat standard, proses, dokumen, keselamatan dan FAQ.
- Konfigurasi analytics tanpa PII dan dashboard funnel.
- Capai sasaran teknikal LCP <2.5s, CLS <0.1 dan INP <200ms pada p75 data sebenar.

### Fasa 2 — rekrut ejen

- Bangunkan `/jadi-ejen/`, borang saringan, taklimat dan status onboarding.
- Sediakan code of conduct, kit pemasaran terkawal dan direktori pengesahan ejen.
- Pisahkan CRM pipeline pelanggan dan calon ejen.

### Fasa 3 — bukti dan pertumbuhan organik

- Jalankan program testimoni berconsent.
- Terbitkan kisah pelanggan dan cluster panduan.
- Jalankan eksperimen CRO berasaskan data.

## 14. Input yang diperlukan sebelum copy final

- Surat/frasa rasmi yang dibenarkan untuk menerangkan hubungan CoshareEZ–Coshare.
- Nombor pendaftaran syarikat dan butiran entiti pemilik data.
- Senarai produk serta PDS terkini.
- Syarat kelayakan mengikut jenis majikan.
- Struktur fi/caj, kadar keuntungan efektif, tempoh dan contoh pengiraan diluluskan.
- SLA sebenar bagi semakan awal, pemprosesan dan status.
- Saluran upload dokumen dan polisi keselamatan/retention.
- Struktur komisen, syarat pembayaran dan kontrak ejen.
- Latihan, bahan, sistem status dan sokongan yang benar-benar tersedia.
- Data agregat yang boleh diaudit dan pelanggan/ejen yang boleh ditemu bual.

## 15. Rujukan kajian

- [CoshareEZ Home](https://coshareez.my/)
- [Halaman Jadi Agen semasa](https://coshareez.my/jadi-agen/)
- [Halaman Kira Kelayakan semasa](https://coshareez.my/kira-kelayakan/)
- [Info Korporat CoshareEZ](https://coshareez.my/info-korporat/)
- [Terma & Syarat Coshare HQ](https://coshare.my/terma-syarat/)
- [Laman rasmi Coshare HQ](https://coshare.my/)
- [KoWARGA](https://koperasiwarga.com/)
- [SmartGlobal-i](https://smart.global-i.com.my/)
- [AWAKAS](https://pembiayaan.awakas.com/)
- [DanaPoket](https://danapoket.com/)
- [Contoh aliran e-form CIMB](https://apply.cimb.com.my/awami-eform/)
- [BNM: Fair Treatment of Financial Consumers](https://www.bnm.gov.my/en/-/pd-ftfc)
- [BNM: Policy Document on Personal Financing](https://www.bnm.gov.my/-/pd-pf-925)
- [JANM: had potongan 60% / pendapatan bersih 40%](https://www.anm.gov.my/images/dokumen/soalan-lazim/Potongan-Gaji-60-peratus.pdf)
- [JPDP: panduan notis privasi](https://www.pdp.gov.my/ppdpv1/wp-content/uploads/2025/01/A-Quick-Guide-to-PRIVACY-NOTICE.pdf)
