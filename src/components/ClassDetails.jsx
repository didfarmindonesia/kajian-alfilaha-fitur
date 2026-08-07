import React from 'react'

function ClassDetails() {
  const details = [
    { icon: 'calendar_month', title: 'Jadwal & Waktu', desc: 'Setiap Sabtu, 09:00 - 11:30 WIB' },
    { icon: 'videocam', title: 'Media', desc: 'Zoom Meeting Exclusive' },
    { icon: 'auto_stories', title: 'Chapter/Topik', desc: 'Pengantar Kitab Al-Filaha & Ekologi' },
    { icon: 'person', title: 'Pemateri', desc: 'Mashab [Ir., S.T., M.Si]' },
  ]

  return (
    <section id="kelas" className="max-w-container-max mx-auto px-margin-mobile md:px-gutter py-stack-lg">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        <div className="md:col-span-8 bg-surface-container-lowest rounded-xl p-8 border border-primary/20 shadow-sm relative overflow-hidden group hover:shadow-md transition-shadow">
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary-fixed/20 rounded-bl-full -z-0"></div>
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary mb-6 relative z-10">Detail Kelas</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative z-10">
            {details.map((item, index) => (
              <div key={index} className="flex items-start space-x-3">
                <span className="material-symbols-outlined text-primary mt-1">{item.icon}</span>
                <div>
                  <h3 className="font-title-md text-title-md text-on-surface">{item.title}</h3>
                  <p className="text-on-surface-variant font-body-md mt-1">{item.desc}</p>
                </div>
              </div>
            ))}
            <div className="flex items-start space-x-3 sm:col-span-2 bg-surface-container-low p-4 rounded-lg border border-outline-variant/50">
              <span className="material-symbols-outlined text-secondary mt-1">volunteer_activism</span>
              <div>
                <h3 className="font-title-md text-title-md text-on-surface">Skema Infaq</h3>
                <p className="text-on-surface-variant font-body-md mt-1">Seikhlasnya</p>
              </div>
            </div>
          </div>
        </div>

        <div id="jadwal" className="md:col-span-4 bg-surface-container-lowest rounded-xl p-8 border border-surface-variant shadow-sm flex flex-col items-center text-center">
          <span className="bg-primary/10 text-primary px-3 py-1 rounded-full font-label-sm text-label-sm mb-6 inline-flex items-center">
            <span className="material-symbols-outlined text-[16px] mr-1">qr_code_scanner</span>
            QRIS STATIS INFAQ
          </span>
          <div
            className="w-48 h-48 bg-white border-2 border-outline-variant rounded-xl shadow-sm mb-6 flex items-center justify-center p-2 relative overflow-hidden"
            style={{
              backgroundImage: 'url("/qris-alfilaha.jpeg")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
          ></div>
          <h3 className="font-title-md text-title-md text-on-surface mb-2">Scan untuk Infaq</h3>
          <p className="text-on-surface-variant font-body-md text-sm mb-4">Support: GoPay, OVO, ShopeePay, DANA</p>
          <div className="flex space-x-2 text-primary opacity-50">
            <span className="material-symbols-outlined">account_balance_wallet</span>
            <span className="material-symbols-outlined">payments</span>
            <span className="material-symbols-outlined">credit_card</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ClassDetails