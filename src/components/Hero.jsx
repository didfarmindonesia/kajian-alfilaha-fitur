import React from 'react'

function Hero() {
  return (
    <section className="relative w-full h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBcF6fo513oYcuRIuWnFm0yd6bQIavyrlx7_zN-Rpl4-Fa6ygi0lX-Gt2UTFZIsqjHKU-lFz-x2wbYEkOLyaGOy86YIIAsS93B4lHZsxMwhPYtum9AOdIezjG7UJJGNfooTV7L3xxdEYilGg52a76tZz1-TX-9I6zu5WXE3ha7mPGKOPZq9glTIe-g_yN8wjhK5wTijnOiqqnhiS9GAPt4tty5Ebz5FMeWyut-mf34dnPfX8oNULLmR")',
        }}
      >
        <div className="absolute inset-0 bg-primary/70"></div>
      </div>
      <div className="relative z-10 px-margin-mobile md:px-gutter max-w-container-max mx-auto text-on-primary grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        <div className="md:col-span-7 text-center md:text-left">
          <span className="inline-block bg-tertiary-fixed-dim/20 text-tertiary-fixed px-3 py-1 rounded-full font-label-sm text-label-sm mb-4 border border-tertiary-fixed/30 backdrop-blur-sm">
            <div className="flex items-center gap-2">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCX7OBkxLKxcYirpVRR7OKCZ6jAiv0pljewprVOjO2amOR92qD8Zxk1wiryj4hB3L1Xx9nXUtK_YcXFSPphEBUzWJVPX0SCvXxl7LaqBiKygnfmTFCeji79ujZ5yPhndgwE3D_g98WHENNGAEIpEu6UW-5v34n5BXCt3wCz2jrgE4AgZAmCZyvJzfouZb7ZlLqW_1-1RQKT0leL83REkdmXWpkKmEjCtGIBsKlYMfSf4GD6HTAOb6ajZDOFhKukHgrhxA"
                alt="Didfarm Indonesia Logo"
                className="h-4 w-auto object-contain"
              />
              <span>Presented by Didfarm Indonesia</span>
            </div>
          </span>
          <h1 className="font-display-lg text-display-lg mb-6 leading-tight">
            Kajian Pertanian Tematik
          </h1>
          <p className="font-body-lg text-body-lg text-inverse-on-surface/90 max-w-2xl">
            Belajar Ilmu Pertanian Berdasarkan Kitab Al-Filaha.
          </p>
        </div>
        <div className="md:col-span-5 flex justify-center md:justify-end">
          <div className="relative group">
            <div className="absolute -inset-2 bg-primary-fixed/20 rounded-xl blur-sm group-hover:blur-md transition-all"></div>
            <div className="relative bg-white p-2 rounded-xl shadow-md border border-outline-variant/30">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAzndjfWrQBfkZcdPnx_JAXfub2WkJM7_gj4TvbvxE4hdmlnnwHcxxdAVjzVam2J9C6m77bqhCbUYUqw7hLRbiadfzjQcxnZZ7AjAlMSmp681BDhajqK6suX2b_oN8p_V46nNItMD4lW9DVwXfKaN_uJARnLXnPp1KZP9gnGD2rahNQIs9hjJDqEoSTPt0ROysmVy3iGsXaLZLzcdBTEDEz-VQAcoepdQLYy0CEt9TTf61kYFlocL0vM0dRagMgUu15aw"
                alt="Kitab Al-Filaha Book Cover"
                className="w-64 md:w-80 h-auto rounded-lg shadow-sm"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero