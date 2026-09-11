import { useEffect } from 'react'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import { Layout } from './components/Layout'
import Home from './pages/Home'
import ProductPage from './pages/ProductPage'
import Eligibility from './pages/Eligibility'
import AgentPage from './pages/AgentPage'
import { About, Contact, DocumentsPage, Financing, Guides, LegalPage, ProcessPage, Safety, StatusPage, VerifyOfficer } from './pages/ContentPages'

const titles = {
  '/': 'Pembiayaan Kakitangan Kerajaan | CoshareEZ',
  '/pembiayaan': 'Pilihan Pembiayaan | CoshareEZ',
  '/produk/al-rajhi': 'Al Rajhi | CoshareEZ',
  '/produk/coshare-prihatin': 'Coshare Prihatin | CoshareEZ',
  '/kelayakan-dokumen': 'Kelayakan & Dokumen | CoshareEZ',
  '/cara-memohon': 'Cara Memohon | CoshareEZ',
  '/semak-kelayakan': 'Semak Kelayakan | CoshareEZ',
  '/semak-status': 'Semak Status | CoshareEZ',
  '/jadi-ejen': 'Jadi Ejen | CoshareEZ',
  '/panduan': 'Panduan Pembiayaan | CoshareEZ',
  '/tentang': 'Mengenai CoshareEZ',
  '/pengesahan-pegawai': 'Pengesahan Pegawai | CoshareEZ',
  '/keselamatan': 'Keselamatan & Anti-Penipuan | CoshareEZ',
  '/hubungi': 'Hubungi CoshareEZ',
}

function PageMeta() {
  const { pathname } = useLocation()
  useEffect(() => { document.title = titles[pathname] || 'CoshareEZ' }, [pathname])
  return null
}

export default function App() {
  return <Layout><PageMeta /><Routes>
    <Route path="/" element={<Home />} />
    <Route path="/pembiayaan" element={<Financing />} />
    <Route path="/produk/:slug" element={<ProductPage />} />
    <Route path="/kelayakan-dokumen" element={<DocumentsPage />} />
    <Route path="/cara-memohon" element={<ProcessPage />} />
    <Route path="/semak-kelayakan" element={<Eligibility />} />
    <Route path="/semak-status" element={<StatusPage />} />
    <Route path="/jadi-ejen" element={<AgentPage />} />
    <Route path="/panduan" element={<Guides />} />
    <Route path="/tentang" element={<About />} />
    <Route path="/pengesahan-pegawai" element={<VerifyOfficer />} />
    <Route path="/keselamatan" element={<Safety />} />
    <Route path="/hubungi" element={<Contact />} />
    <Route path="/notis-privasi" element={<LegalPage />} />
    <Route path="/terma" element={<LegalPage type="terms" />} />
    <Route path="*" element={<Navigate to="/" replace />} />
  </Routes></Layout>
}
