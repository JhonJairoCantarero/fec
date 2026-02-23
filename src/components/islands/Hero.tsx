import { useState, useEffect } from 'react';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-ferreteria-dark-100 via-ferreteria-dark-50 to-ferreteria-dark-100 overflow-hidden">
      {/* Fondo decorativo */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-ferreteria-accent-orange rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-ferreteria-accent-gold rounded-full blur-3xl"></div>
      </div>

      {/* Contenido */}
      <div className={`relative z-10 text-center px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight">
            Ferretería
            <span className="block text-ferreteria-accent-gold">El Carmen</span>
          </h1>
          
          <p className="text-xl sm:text-2xl md:text-3xl text-gray-200 mb-8 font-light">
            Tu ferretería de confianza con los mejores productos y servicios
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#productos"
              className="px-8 py-4 bg-ferreteria-accent-orange hover:bg-ferreteria-accent-gold text-white font-semibold rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300 text-lg"
            >
              Ver Productos
            </a>
            <a
              href="#contacto"
              className="px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-ferreteria-dark-100 transition-all duration-300 text-lg"
            >
              Contáctanos
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  );
}

