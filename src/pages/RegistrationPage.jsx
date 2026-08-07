import React, { useState } from 'react'

function RegistrationPage() {
  const [formData, setFormData] = useState({
    nama: '',
    whatsapp: '',
    email: '',
    nominal: '',
  })
  const [buktiFile, setBuktiFile] = useState(null)
  const [dragActive, setDragActive] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const nominalOptions = ['20000', '50000', '100000']

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleNominalSelect = (value) => {
    setFormData((prev) => ({ ...prev, nominal: value }))
  }

  const handleFileChange = (file) => {
    setBuktiFile(file)
  }

  const handleDrag = (e) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true)
    } else if (e.type === 'dragleave') {
      setDragActive(false)
    }
  }

  const handleDrop = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFileChange(e.dataTransfer.files[0])
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="bg-surface text-on-surface font-body-md min-h-screen flex flex-col relative islamic-pattern">
        <NavbarSimple />
        <main className="flex-grow pt-[80px]">
          <section className="max-w-3xl mx-auto px-margin-mobile md:px-gutter py-stack-lg">
            <div className="bg-surface-container-lowest rounded-xl p-6 md:p-10 border border-surface-variant shadow-sm relative text-center">
              <div className="flex flex-col items-center justify-center py-8">
                <span className="material-symbols-outlined text-tertiary-fixed text-6xl mb-4">check_circle</span>
                <h1 className="font-display-lg text-display-lg mb-4">Pendaftaran Berhasil</h1>
                <p className="font-body-lg text-body-lg text-on-surface-variant max-w-md">
                  Terima kasih atas pendaftaran dan infaq Anda. Tim kami akan segera menghubungi Anda melalui WhatsApp.
                </p>
                <a href="/" className="mt-6 bg-primary text-on-primary px-6 py-3 rounded-lg font-label-sm text-label-sm hover:opacity-90 transition-opacity no-underline">Kembali ke Beranda</a>
              </div>
            </div>
          </section>
        </main>
        <FooterSimple />
      </div>
    )
  }

  return (
    <div className="bg-surface text-on-surface font-body-md min-h-screen flex flex-col relative islamic-pattern">
      <NavbarSimple />
      <main className="flex-grow pt-[80px]">
        <section className="max-w-3xl mx-auto px-margin-mobile md:px-gutter py-stack-lg">
          <div className="bg-surface-container-lowest rounded-xl p-6 md:p-10 border border-surface-variant shadow-sm relative">
            <h1 className="font-display-lg text-display-lg text-primary mb-2 text-center">Pendaftaran</h1>
            <p className="font-body-md text-body-md text-on-surface-variant text-center mb-8">Isi formulir berikut untuk mendaftar</p>
            <form className="space-y-6" onSubmit={handleSubmit} noValidate>
              <div>
                <label className="block font-label-sm text-label-sm text-on-surface mb-2" htmlFor="nama">Nama Lengkap</label>
                <input id="nama" name="nama" className="w-full bg-surface border border-outline-variant rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-primary transition-shadow font-body-md" placeholder="Masukkan nama lengkap" type="text" value={formData.nama} onChange={handleChange} required />
              </div>
              <div>
                <label className="block font-label-sm text-label-sm text-on-surface mb-2 flex items-center" htmlFor="whatsapp">
                  Nomor WhatsApp
                  <span className="material-symbols-outlined text-[#25D366] text-[18px] ml-1">chat</span>
                </label>
                <input id="whatsapp" name="whatsapp" className="w-full bg-surface border border-outline-variant rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-primary transition-shadow font-body-md" placeholder="08xx-xxxx-xxxx" type="tel" value={formData.whatsapp} onChange={handleChange} required />
              </div>
              <div>
                <label className="block font-label-sm text-label-sm text-on-surface mb-2" htmlFor="email">Email</label>
                <input id="email" name="email" className="w-full bg-surface border border-outline-variant rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-primary transition-shadow font-body-md" placeholder="email@example.com" type="email" value={formData.email} onChange={handleChange} required />
              </div>
              <div>
                <label className="block font-label-sm text-label-sm text-on-surface mb-2">Nominal Infaq</label>
                <div className="flex flex-wrap gap-2 mb-3">
                  {nominalOptions.map((opt) => (
                    <button
                      key={opt}
                      type="button"
                      className={`px-4 py-2 rounded-full border font-label-sm text-label-sm transition-colors ${formData.nominal === opt ? 'bg-primary-fixed border-primary text-on-primary-fixed' : 'border-outline-variant text-on-surface-variant hover:border-primary hover:text-primary'}`}
                      onClick={() => handleNominalSelect(opt)}
                    >
                      Rp {Number(opt).toLocaleString('id-ID')}
                    </button>
                  ))}
                </div>
                <input name="nominal" className="w-full bg-surface border border-outline-variant rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-primary transition-shadow font-body-md" placeholder="Nominal lainnya" type="number" value={formData.nominal} onChange={handleChange} min="0" />
              </div>
              <div>
                <label className="block font-label-sm text-label-sm text-on-surface mb-2" htmlFor="bukti">Bukti Transfer</label>
                <div
                  className={`border-2 border-dashed rounded-lg p-6 text-center transition-colors cursor-pointer ${dragActive ? 'border-primary bg-primary/5' : 'border-outline-variant hover:bg-surface-container-low'}`}
                  onDragEnter={handleDrag}
                  onDragLeave={handleDrag}
                  onDragOver={handleDrag}
                  onDrop={handleDrop}
                  onClick={() => document.getElementById('bukti')?.click()}
                  role="button"
                  tabIndex={0}
                  aria-label="Upload bukti transfer file"
                  onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') document.getElementById('bukti')?.click() }}
                >
                  <input id="bukti" type="file" className="hidden" accept=".pdf,.jpg,.jpeg,.png" onChange={(e) => e.target.files?.[0] && handleFileChange(e.target.files[0])} />
                  <span className="material-symbols-outlined text-outline text-3xl mb-2">upload_file</span>
                  <p className="font-body-md text-on-surface-variant text-sm">{buktiFile ? buktiFile.name : 'Klik untuk upload atau drag &amp; drop file disini'}</p>
                </div>
              </div>
              <button type="submit" className="w-full bg-primary text-on-primary py-4 rounded-lg font-label-sm text-label-sm hover:opacity-90 transition-opacity mt-4 flex items-center justify-center shadow-md">
                Konfirmasi Infaq &amp; Daftar
                <span className="material-symbols-outlined ml-2">arrow_forward</span>
              </button>
            </form>
          </div>
        </section>
      </main>
      <FooterSimple />
    </div>
  )
}

function NavbarSimple() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-margin-mobile md:px-gutter py-4 max-w-container-max mx-auto bg-surface/90 backdrop-blur-md shadow-sm">
      <a href="/" className="font-headline-lg text-headline-lg-mobile md:text-headline-lg font-bold text-primary">
        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuD07kFCVZRItH1Qzprd7h7-2SkXxx6cLUmTQ1nlpxNZRylwF1wrGyX4ONcj0WicB6XR16cNMCRl190oBvPkt6zX6N7YuomYG2-fP7BRknUZ7LGujLcMHCmEXkwoS5FA9fS23eCfLlpFTjZIoF-hHFkImWberKUQldTtj2GL60B6pOsv-ymBlDQAhhF-ZLqyQ4wzxvpSztXVwGQDYCbf7K4gfr8l2NkgVjE4sZjFJaC-M46RwX-sqs5whpb3wD1gmejv0Q"
          alt="Logo"
          className="h-8 w-auto object-contain"
        />
      </a>
      <a href="/" className="font-label-sm text-label-sm text-primary border-b-2 border-primary pb-1 no-underline">Kembali</a>
    </header>
  )
}

function FooterSimple() {
  return (
    <footer className="w-full py-stack-lg px-margin-mobile md:px-gutter flex flex-col md:flex-row justify-between items-center gap-stack-md bg-surface-container-highest text-on-surface">
      <div className="font-title-md text-title-md font-bold text-primary text-center md:text-left">
        Didfarm Indonesia - Konsultan &amp; Inovasi Pertanian
      </div>
    </footer>
  )
}

export default RegistrationPage