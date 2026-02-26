import { useState, useEffect } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentPath, setCurrentPath] = useState('');
  const [scrolled, setScrolled] = useState(false);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    setCurrentPath(window.location.pathname);
    setDark(document.documentElement.classList.contains('dark'));
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const toggleDark = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle('dark', next);
    localStorage.setItem('theme', next ? 'dark' : 'light');
  };

  const navLinks = [
    { href: '/', label: 'Inicio' },
    { href: '/productos', label: 'Productos' },
    { href: '/catalogo', label: 'Catálogo' },
    { href: '/clientes', label: 'Mayoreo' },
    { href: '/proveedores', label: 'Proveedores' },
    { href: '/nosotros', label: 'Nosotros' },
  ];

  const isActive = (href: string) => {
    if (href.startsWith('#')) return false;
    if (href === '/') return currentPath === '/';
    return currentPath.startsWith(href);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white dark:bg-gray-900 ${
        scrolled ? 'shadow-lg' : 'shadow-sm border-b border-gray-100 dark:border-gray-800'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <a href="/" className="flex items-center group flex-shrink-0">
            <img
              src="/LOGOFECSLOGANVERDE.png"
              alt="Ferretería El Carmen"
              className="h-14 w-auto object-contain group-hover:scale-105"
              style={{ transition: 'transform 0.2s ease' }}
            />
          </a>

          {/* Navegación Desktop */}
          <div className="hidden md:flex items-center gap-0.5">
            {navLinks.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className={`relative px-4 py-2 text-sm font-semibold rounded-lg ${
                  isActive(href)
                    ? 'text-[#4A5D23] dark:text-[#8CB043]'
                    : 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800'
                }`}
                style={{ transition: 'color 0.15s ease, background 0.15s ease' }}
              >
                {label}
                {isActive(href) && (
                  <span
                    className="absolute bottom-0.5 left-1/2 -translate-x-1/2 h-0.5 bg-[#4A5D23] dark:bg-[#8CB043] rounded-full"
                    style={{ width: '60%', transition: 'none' }}
                  />
                )}
              </a>
            ))}

            {/* Dark mode toggle */}
            <button
              onClick={toggleDark}
              className="ml-2 w-9 h-9 flex items-center justify-center rounded-lg text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Cambiar tema"
            >
              {dark ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>

            <a
              href="#contacto"
              className="ml-2 px-5 py-2.5 bg-[#4A5D23] text-white text-sm font-semibold rounded-xl shadow-md hover:bg-[#6C7F3B] hover:shadow-lg"
              style={{ transition: 'background 0.2s ease, box-shadow 0.2s ease' }}
            >
              Contacto
            </a>
          </div>

          {/* Botones Móvil */}
          <div className="flex items-center gap-1 md:hidden">
            <button
              onClick={toggleDark}
              className="w-10 h-10 flex items-center justify-center rounded-lg text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Cambiar tema"
            >
              {dark ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
              style={{ transition: 'background 0.15s ease' }}
              aria-label="Abrir menú"
            >
              {mobileMenuOpen ? (
                <svg className="w-6 h-6 text-gray-700 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>
                </svg>
              ) : (
                <svg className="w-6 h-6 text-gray-700 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"/>
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Menú Móvil */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col gap-1 bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 p-3 mt-1">
              {navLinks.map(({ href, label }) => (
                <a
                  key={href}
                  href={href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium ${
                    isActive(href)
                      ? 'text-[#4A5D23] dark:text-[#8CB043] bg-[#f0f4e8] dark:bg-[#4A5D23]/20 font-semibold'
                      : 'text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-700'
                  }`}
                  style={{ transition: 'background 0.15s ease, color 0.15s ease' }}
                >
                  {isActive(href) && (
                    <span className="w-1.5 h-1.5 rounded-full bg-[#4A5D23] dark:bg-[#8CB043] flex-shrink-0" />
                  )}
                  {label}
                </a>
              ))}
              <div className="h-px bg-gray-100 dark:bg-gray-700 my-1" />
              <a
                href="#contacto"
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-3 bg-[#4A5D23] hover:bg-[#6C7F3B] text-white font-semibold rounded-xl text-center text-sm"
                style={{ transition: 'background 0.2s ease' }}
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
