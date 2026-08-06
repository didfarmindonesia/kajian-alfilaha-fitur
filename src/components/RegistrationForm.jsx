import React, { useState } from 'react'

function RegistrationForm() {
  const [nominal, setNominal] = useState('')

  const nominalOptions = ['20000', '50000', '100000']

  return (
    <section className="max-w-3xl mx-auto px-margin-mobile md:px-gutter pb-stack-lg">
      <div className="bg-surface-container-lowest rounded-xl p-6 md:p-10 border border-surface-variant shadow-sm relative">
        <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary mb-8 text-center">Form Pendaftaran</h2>
        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
          <div>
            <label className="block font-label-sm text-label-sm text-on-surface mb-2">Nama Lengkap</label>
            <input className="w-full bg-surface border border-outline-variant rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-primary transition-shadow font-body-md" placeholder="Masukkan nama lengkap" type="text" />
          </div>
          <div>
            <label className="block font-label-sm text-label-sm text-on-surface mb-2 flex items-center">
              Nomor WhatsApp
              <span className="material-symbols-outlined text-[#25D366] text-[18px] ml-1">chat</span>
            </label>
            <input className="w-full bg-surface border border-outline-variant rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-primary transition-shadow font-body-md" placeholder="08xx-xxxx-xxxx" type="tel" />
          </div>
          <div>
            <label className="block font-label-sm text-label-sm text-on-surface mb-2">Email</label>
            <input className="w-full bg-surface border border-outline-variant rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-primary transition-shadow font-body-md" placeholder="email@example.com" type="email" />
          </div>
          <div>
            <label className="block font-label-sm text-label-sm text-on-surface mb-2">Nominal Infaq</label>
            <div className="flex flex-wrap gap-2 mb-3">
              {nominalOptions.map((opt) => (
                <button
                  key={opt}
                  type="button"
                  className={`px-4 py-2 rounded-full border border-outline-variant font-label-sm text-label-sm transition-colors focus:bg-primary-fixed focus:border-primary focus:text-on-primary-fixed ${nominal === opt ? 'bg-primary-fixed border-primary text-on-primary-fixed' : 'text-on-surface-variant hover:border-primary hover:text-primary'}`}
                  onClick={() => setNominal(opt)}
                >
                  Rp {Number(opt).toLocaleString('id-ID')}
                </button>
              ))}
            </div>
            <input className="w-full bg-surface border border-outline-variant rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-primary transition-shadow font-body-md" placeholder="Nominal lainnya" type="number" value={nominal} onChange={(e) => setNominal(e.target.value)} />
          </div>
          <div>
            <label className="block font-label-sm text-label-sm text-on-surface mb-2">Bukti Transfer</label>
            <div className="border-2 border-dashed border-outline-variant rounded-lg p-6 text-center hover:bg-surface-container-low transition-colors cursor-pointer">
              <span className="material-symbols-outlined text-outline text-3xl mb-2">upload_file</span>
              <p className="font-body-md text-on-surface-variant text-sm">Klik untuk upload atau drag &amp; drop file disini</p>
            </div>
          </div>
          <button className="w-full bg-primary text-on-primary py-4 rounded-lg font-label-sm text-label-sm hover:opacity-90 transition-opacity mt-4 flex items-center justify-center shadow-md" type="submit">
            Konfirmasi Infaq &amp; Daftar
            <span className="material-symbols-outlined ml-2">arrow_forward</span>
          </button>
        </form>
      </div>
    </section>
  )
}

export default RegistrationForm