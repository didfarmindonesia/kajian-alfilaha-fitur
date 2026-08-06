import React, { useState } from 'react'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-margin-mobile md:px-gutter py-4 max-w-container-max mx-auto bg-surface/80 dark:bg-surface/80 backdrop-blur-md shadow-sm dark:shadow-none bg-transparent">
      <div className="font-headline-lg text-headline-lg-mobile md:text-headline-lg font-bold text-primary dark:text-primary-fixed-dim">
        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuD07kFCVZRItH1Qzprd7h7-2SkXxx6cLUmTQ1nlpxNZRylwF1wrGyX4ONcj0WicB6XR16cNMCRl190oBvPkt6zX6N7YuomYG2-fP7BRknUZ7LGujLcMHCmEXkwoS5FA9fS23eCfLlpFTjZIoF-hHFkImWberKUQldTtj2GL60B6pOsv-ymBlDQAhhF-ZLqyQ4wzxvpSztXVwGQDYCbf7K4gfr8l2NkgVjE4sZjFJaC-M46RwX-sqs5whpb3wD1gmejv0Q"
          alt="Kajian Pertanian Tematik Al-Filaha Logo"
          className="h-8 w-auto object-contain"
        />
      </div>
      <nav className="hidden md:flex items-center space-x-6">
        <a className="font-label-sm text-label-sm text-on-surface-variant dark:text-on-surface-variant hover:text-primary dark:hover:text-primary-fixed-dim transition-colors hover:opacity-80 scale-95 transition-transform duration-200" href="#">Materi</a>
        <a className="font-label-sm text-label-sm text-on-surface-variant dark:text-on-surface-variant hover:text-primary dark:hover:text-primary-fixed-dim transition-colors hover:opacity-80 scale-95 transition-transform duration-200" href="#">Jadwal</a>
        <a className="font-label-sm text-label-sm text-on-surface-variant dark:text-on-surface-variant hover:text-primary dark:hover:text-primary-fixed-dim transition-colors hover:opacity-80 scale-95 transition-transform duration-200" href="#">Speaker</a>
        <a className="font-label-sm text-label-sm text-primary dark:text-primary-fixed-dim border-b-2 border-primary dark:border-primary-fixed-dim pb-1 hover:opacity-80 scale-95 transition-transform duration-200" href="#">Daftar</a>
      </nav>
      <div className="hidden lg:flex items-center space-x-4">
        <span className="font-label-sm text-label-sm text-on-surface-variant">Presented by Didfarm Indonesia</span>
        <button className="bg-primary text-on-primary px-4 py-2 rounded-lg font-label-sm text-label-sm hover:opacity-90 transition-opacity">Daftar Sekarang</button>
      </div>
      <button className="md:hidden text-on-surface" onClick={() => setMenuOpen(!menuOpen)}>
        <span className="material-symbols-outlined">{menuOpen ? 'close' : 'menu'}</span>
      </button>
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-surface/95 backdrop-blur-md shadow-lg flex flex-col items-center space-y-4 py-4 md:hidden">
          <a className="font-label-sm text-label-sm text-on-surface-variant hover:text-primary transition-colors" href="#">Materi</a>
          <a className="font-label-sm text-label-sm text-on-surface-variant hover:text-primary transition-colors" href="#">Jadwal</a>
          <a className="font-label-sm text-label-sm text-on-surface-variant hover:text-primary transition-colors" href="#">Speaker</a>
          <a className="font-label-sm text-label-sm text-primary border-b-2 border-primary pb-1" href="#">Daftar</a>
        </div>
      )}
    </header>
  )
}

export default Navbar