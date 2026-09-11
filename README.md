# CoshareEZ website redesign

Prototaip website multi-page untuk CoshareEZ, dibina dengan React, Vite dan React
Router.

## Jalankan secara tempatan

```bash
npm install
npm run dev
```

Build produksi:

```bash
npm run lint
npm run build
npm run preview
```

## Halaman tersedia

- `/` — Home berorientasikan conversion
- `/pembiayaan` — ringkasan dua produk aktif
- `/produk/al-rajhi`
- `/produk/coshare-prihatin`
- `/kelayakan-dokumen`
- `/cara-memohon`
- `/semak-kelayakan` — borang semakan berperingkat
- `/semak-status`
- `/jadi-ejen` — kandungan dan borang saringan awal ejen
- `/panduan`
- `/tentang`
- `/pengesahan-pegawai`
- `/keselamatan`
- `/hubungi`
- `/notis-privasi`
- `/terma`

## Sebelum pelancaran

Versi ini tidak menghantar borang ke sistem luar. Sambungkan CRM/API, direktori
pegawai dan semakan status sebelum dilancarkan. Semua kadar, syarat produk, hubungan
agensi, notis privasi dan terma perlu disahkan oleh pemilik produk serta penasihat
pematuhan.
