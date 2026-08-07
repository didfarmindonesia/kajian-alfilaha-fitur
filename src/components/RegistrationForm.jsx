import React from 'react'

function RegistrationForm() {
  return (
    <section id="daftar" className="max-w-container-max mx-auto px-margin-mobile md:px-gutter py-stack-lg">
      <div className="bg-surface-container-lowest rounded-3xl p-8 shadow-sm border border-surface-variant">
        <div className="mb-8">
          <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-primary font-label-sm text-label-sm">
            Form Pendaftaran
          </span>
          <h2 className="mt-4 font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary">
            Daftar Kajian Al-Filaha
          </h2>
          <p className="mt-2 text-on-surface-variant font-body-md max-w-2xl">
            Isi data di bawah ini untuk bergabung dalam kajian tematik pertanian secara online.
          </p>
        </div>

        <form onSubmit={(event) => event.preventDefault()} className="grid gap-6">
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="space-y-2 text-on-surface">
              <span className="font-title-md text-title-md">Nama Lengkap</span>
              <input
                type="text"
                name="name"
                placeholder="Nama Anda"
                className="w-full rounded-xl border border-outline-variant/60 bg-white px-4 py-3 text-on-surface shadow-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
            </label>
            <label className="space-y-2 text-on-surface">
              <span className="font-title-md text-title-md">Email</span>
              <input
                type="email"
                name="email"
                placeholder="email@contoh.com"
                className="w-full rounded-xl border border-outline-variant/60 bg-white px-4 py-3 text-on-surface shadow-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
            </label>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <label className="space-y-2 text-on-surface">
              <span className="font-title-md text-title-md">No. Telepon</span>
              <input
                type="tel"
                name="phone"
                placeholder="0812xxxxxxx"
                className="w-full rounded-xl border border-outline-variant/60 bg-white px-4 py-3 text-on-surface shadow-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
            </label>
            <label className="space-y-2 text-on-surface">
              <span className="font-title-md text-title-md">Platform Pembayaran</span>
              <select
                name="payment"
                className="w-full rounded-xl border border-outline-variant/60 bg-white px-4 py-3 text-on-surface shadow-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              >
                <option>GoPay</option>
                <option>OVO</option>
                <option>ShopeePay</option>
                <option>DANA</option>
              </select>
            </label>
          </div>

          <label className="space-y-2 text-on-surface">
            <span className="font-title-md text-title-md">Catatan Tambahan</span>
            <textarea
              name="note"
              rows="4"
              placeholder="Contoh: ingin mengikuti sesi rekaman atau tanya jawab"
              className="w-full rounded-xl border border-outline-variant/60 bg-white px-4 py-3 text-on-surface shadow-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
            />
          </label>

          <button
            type="submit"
            className="inline-flex items-center justify-center rounded-xl bg-primary px-6 py-3 text-on-primary font-label-sm text-label-sm shadow-md transition hover:bg-primary-fixed-dim"
          >
            Kirim Pendaftaran
          </button>
        </form>
      </div>
    </section>
  )
}

export default RegistrationForm
