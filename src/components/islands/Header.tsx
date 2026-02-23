import { useState } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-200 shadow-sm border-b border-gray-300">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3 group">
            <img
              src="/LOGOFECSLOGANVERDE.png"
              alt="Ferretería El Carmen"
              className="h-14 w-auto object-contain transition-all group-hover:scale-105"
            />
          </a>

          {/* Navegación Desktop */}
          <div className="hidden md:flex items-center gap-1">
            <a href="#productos" className="px-4 py-2 text-gray-700 hover:text-black font-medium rounded-lg hover:bg-gray-100 transition-all">
              Productos
            </a>
            <a href="/catalogo" className="px-4 py-2 text-gray-700 hover:text-black font-medium rounded-lg hover:bg-gray-100 transition-all">
              Catálogo
            </a>
            <a href="#servicios" className="px-4 py-2 text-gray-700 hover:text-black font-medium rounded-lg hover:bg-gray-100 transition-all">
              Servicios
            </a>
            <a href="#sobre-nosotros" className="px-4 py-2 text-gray-700 hover:text-black font-medium rounded-lg hover:bg-gray-100 transition-all">
              Nosotros
            </a>
            <a href="#ubicaciones" className="px-4 py-2 text-gray-700 hover:text-black font-medium rounded-lg hover:bg-gray-100 transition-all">
              Ubicaciones
            </a>
              <a
                href="#contacto"
                className="ml-2 px-6 py-2.5 bg-[#007AFF] hover:bg-[#0051D5] text-white font-semibold rounded-xl transition-all shadow-md hover:shadow-lg"
              >
                Contacto
              </a>
          </div>

          {/* Botón Menú Móvil */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-all"
          >
            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"/>
            </svg>
          </button>
        </div>

        {/* Menú Móvil */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col gap-2 bg-white rounded-2xl shadow-xl p-4 mt-2">
              <a
                href="#productos"
                className="px-4 py-3 text-gray-700 hover:text-black hover:bg-gray-50 font-medium rounded-lg transition-all"
                onClick={() => setMobileMenuOpen(false)}
              >
                Productos
              </a>
              <a
                href="/catalogo"
                className="px-4 py-3 text-gray-700 hover:text-black hover:bg-gray-50 font-medium rounded-lg transition-all"
                onClick={() => setMobileMenuOpen(false)}
              >
                Catálogo
              </a>
              <a
                href="#servicios"
                className="px-4 py-3 text-gray-700 hover:text-black hover:bg-gray-50 font-medium rounded-lg transition-all"
                onClick={() => setMobileMenuOpen(false)}
              >
                Servicios
              </a>
              <a
                href="#sobre-nosotros"
                className="px-4 py-3 text-gray-700 hover:text-black hover:bg-gray-50 font-medium rounded-lg transition-all"
                onClick={() => setMobileMenuOpen(false)}
              >
                Nosotros
              </a>
              <a
                href="#ubicaciones"
                className="px-4 py-3 text-gray-700 hover:text-black hover:bg-gray-50 font-medium rounded-lg transition-all"
                onClick={() => setMobileMenuOpen(false)}
              >
                Ubicaciones
              </a>
                <a
                  href="#contacto"
                  className="px-4 py-3 bg-[#007AFF] hover:bg-[#0051D5] text-white font-semibold rounded-lg transition-all text-center mt-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contacto
                </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
