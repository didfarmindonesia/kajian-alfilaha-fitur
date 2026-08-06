import React from 'react'

function Footer() {
  return (
    <footer className="w-full py-stack-lg px-margin-mobile md:px-gutter flex flex-col md:flex-row justify-between items-center gap-stack-md bg-surface-container-highest dark:bg-tertiary-container text-on-surface dark:text-on-tertiary-container">
      <div className="font-title-md text-title-md font-bold text-primary dark:text-tertiary-fixed text-center md:text-left">
        &copy; 2024 Didfarm Indonesia - Konsultan &amp; Inovasi Pertanian. Memberdayakan umat melalui Al-Filaha.
      </div>
      <nav className="flex flex-wrap justify-center gap-4">
        <a className="font-label-sm text-label-sm text-on-surface-variant dark:text-on-tertiary-container hover:text-primary dark:hover:text-tertiary-fixed transition-colors hover:underline transition-all opacity-90 hover:opacity-100" href="#">Tentang Kami</a>
        <a className="font-label-sm text-label-sm text-on-surface-variant dark:text-on-tertiary-container hover:text-primary dark:hover:text-tertiary-fixed transition-colors hover:underline transition-all opacity-90 hover:opacity-100" href="#">Program</a>
        <a className="font-label-sm text-label-sm text-on-surface-variant dark:text-on-tertiary-container hover:text-primary dark:hover:text-tertiary-fixed transition-colors hover:underline transition-all opacity-90 hover:opacity-100" href="#">Kontak</a>
        <a className="font-label-sm text-label-sm text-on-surface-variant dark:text-on-tertiary-container hover:text-primary dark:hover:text-tertiary-fixed transition-colors hover:underline transition-all opacity-90 hover:opacity-100" href="#">Kebijakan Privasi</a>
      </nav>
    </footer>
  )
}

export default Footer