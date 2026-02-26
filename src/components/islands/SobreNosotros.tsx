import { useState, useEffect } from 'react';

export default function SobreNosotros() {
  const [fotoIdx, setFotoIdx] = useState<number | null>(null);
  const [isPage, setIsPage] = useState(false);

  useEffect(() => {
    setIsPage(window.location.pathname === '/nosotros');
  }, []);

  const fotos = [
    { src: '/logo/1.jpeg', alt: 'Ferretería El Carmen - Tienda Principal' },
    { src: '/nosotros/foto-1.jpeg', alt: 'Ferretería El Carmen' },
    { src: '/nosotros/foto-2.jpeg', alt: 'Ferretería El Carmen' },
    { src: '/nosotros/foto-3.jpeg', alt: 'Ferretería El Carmen' },
    { src: '/nosotros/foto-4.jpeg', alt: 'Ferretería El Carmen' },
    { src: '/nosotros/foto-5.jpeg', alt: 'Ferretería El Carmen' },
    { src: '/nosotros/foto-6.jpeg', alt: 'Ferretería El Carmen' },
    { src: '/nosotros/foto-7.jpeg', alt: 'Ferretería El Carmen' },
    { src: '/nosotros/foto-8.jpeg', alt: 'Ferretería El Carmen' },
    { src: '/nosotros/foto-9.jpeg', alt: 'Ferretería El Carmen' },
    { src: '/nosotros/foto-10.jpeg', alt: 'Ferretería El Carmen' },
    { src: '/nosotros/foto-11.jpeg', alt: 'Ferretería El Carmen' },
    { src: '/nosotros/foto-12.jpeg', alt: 'Ferretería El Carmen' },
    { src: '/nosotros/foto-13.jpeg', alt: 'Ferretería El Carmen' },
    { src: '/nosotros/foto-14.jpeg', alt: 'Ferretería El Carmen' },
    { src: '/nosotros/foto-15.jpeg', alt: 'Ferretería El Carmen' },
    { src: '/nosotros/foto-16.jpeg', alt: 'Ferretería El Carmen' },
  ];

  const prevFoto = () => setFotoIdx(i => i !== null ? (i - 1 + fotos.length) % fotos.length : null);
  const nextFoto = () => setFotoIdx(i => i !== null ? (i + 1) % fotos.length : null);

  const valores = [
    "Gratitud",
    "Integridad",
    "Servicio al cliente",
    "Calidad",
    "Innovación",
    "Sostenibilidad",
  ];

  const pilares = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      titulo: 'Desarrollo Local',
      desc: 'Genera empleos y oportunidades de crecimiento para la comunidad de Siguatepeque, fortaleciendo el tejido económico de la región.',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      titulo: 'Contribución al Progreso',
      desc: 'Participa activamente en proyectos de desarrollo social y comunitario, impulsando el bienestar y la calidad de vida en la zona central de Honduras.',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      titulo: 'Aliado Estratégico',
      desc: 'Socio confiable para constructores y empresas, brindando el apoyo y las herramientas necesarias para materializar proyectos exitosos.',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
        </svg>
      ),
      titulo: 'Símbolo de Confianza',
      desc: 'Más de 28 años de trayectoria impecable y compromiso con la excelencia la convierten en una marca de confianza para los habitantes de Siguatepeque.',
    },
  ];

  return (
    <section id="sobre-nosotros" className="py-24 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── ENCABEZADO ── */}
        <div className="mb-16">
          <span className="inline-block text-sm font-semibold text-[#4A5D23] tracking-widest uppercase mb-3">
            Nuestra Historia
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white">
            Sobre Nosotros
          </h2>
        </div>

        {/* ── COLUMNAS: HISTORIA + MISIÓN/VISIÓN/VALORES ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-16">

          {/* Izquierda: Historia */}
          <div>
            <div className="space-y-5 text-base text-gray-600 dark:text-gray-400 leading-relaxed">
              <p>
                Fundada en <strong className="text-gray-900 dark:text-white font-bold">1997</strong>,{" "}
                <strong className="text-gray-900 dark:text-white font-bold">Ferretería El Carmen</strong> surge con la misión
                de proporcionar a los residentes del municipio de Siguatepeque una amplia gama de productos y
                servicios de alta calidad en el sector de la construcción. Se distingue por su compromiso con
                los más altos estándares de excelencia, así como por su dedicación al bienestar y la
                satisfacción de sus clientes.
              </p>
              <p>
                Su filosofía empresarial se fundamenta en valores arraigados que guían cada una de sus
                acciones. Prioriza la accesibilidad económica, la calidad sin compromisos, la innovación
                constante y la atención personalizada a las necesidades de sus clientes. Para garantizar un
                servicio óptimo, cuenta con un equipo de profesionales altamente capacitados, dispuestos a
                brindar asesoramiento técnico especializado en todo momento.
              </p>
              <p>
                Enfocados en la satisfacción del cliente, se esfuerza por asegurar la entrega puntual y
                adecuada de sus productos, lo que permite generar crecimiento y rentabilidad para todas las
                partes involucradas. Su compromiso con el desarrollo de la zona central es innegable,
                contribuyendo activamente a su progreso y prosperidad.
              </p>
              <p>
                Con una trayectoria consolidada, se enorgullece al ser parte integral del tejido empresarial
                de Siguatepeque, comprometida a seguir superando las expectativas de sus clientes y
                contribuyendo al crecimiento sostenible de la comunidad.
              </p>
              <p className="text-[#4A5D23] font-semibold border-l-4 border-[#4A5D23] pl-4">
                La empresa se proyecta hacia el futuro con un firme compromiso de seguir creciendo y
                evolucionando, siempre con el objetivo de brindar soluciones innovadoras y de alta calidad.
                Ferretería El Carmen: un pilar fundamental en el desarrollo de la construcción y el progreso
                de Siguatepeque.
              </p>
            </div>

            {/* Stats */}
            <div className="mt-10 grid grid-cols-3 gap-4">
              {[
                { valor: '+28', label: 'Años de Experiencia' },
                { valor: '+15,000', label: 'Productos' },
                { valor: '+1,500', label: 'Clientes Satisfechos' },
              ].map(s => (
                <div key={s.label} className="text-center p-5 bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-md hover:shadow-lg transition-all">
                  <div className="text-3xl font-bold text-[#4A5D23] mb-1">{s.valor}</div>
                  <div className="text-xs text-gray-600 dark:text-gray-400 font-semibold leading-snug">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Derecha: Misión, Visión, Valores */}
          <div className="relative">
            <div className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-2xl p-10 shadow-xl border border-gray-100 dark:border-gray-700">
              <div className="space-y-8">

                {/* Misión */}
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#4A5D23] to-[#6C7F3B] flex items-center justify-center shadow-lg flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Nuestra Misión</h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed font-medium">
                    Ofrecer soluciones ferreteras de calidad, mejorando la vida diaria de nuestros clientes.
                  </p>
                </div>

                {/* Visión */}
                <div className="border-t border-gray-200 dark:border-gray-700 pt-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#4A5D23] to-[#6C7F3B] flex items-center justify-center shadow-lg flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Nuestra Visión</h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed font-medium">
                    Ser una ferretería innovadora que potencia las ideas y proyectos de nuestros clientes,
                    a través de soluciones duraderas y sostenibles.
                  </p>
                </div>

                {/* Valores */}
                <div className="border-t border-gray-200 dark:border-gray-700 pt-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#4A5D23] to-[#6C7F3B] flex items-center justify-center shadow-lg flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Nuestros Valores</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {valores.map((valor) => (
                      <span
                        key={valor}
                        className="px-4 py-2 bg-gradient-to-r from-[#4A5D23]/10 to-[#6C7F3B]/10 text-[#4A5D23] font-semibold rounded-full text-sm border border-[#4A5D23]/20"
                      >
                        {valor}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

        {/* ── PILARES ── */}
        <div>
          <div className="h-px bg-gray-100 dark:bg-gray-700 mb-12"></div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pilares.map((pilar) => (
              <div
                key={pilar.titulo}
                className="group p-6 bg-gray-50 dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 hover:border-[#4A5D23]/30 hover:shadow-lg hover:bg-white dark:hover:bg-gray-700 transition-all duration-200"
              >
                <div className="w-12 h-12 rounded-xl bg-[#4A5D23]/8 border border-[#4A5D23]/15 flex items-center justify-center text-[#4A5D23] mb-4 group-hover:bg-[#4A5D23] group-hover:text-white transition-all duration-200">
                  {pilar.icon}
                </div>
                <h4 className="font-bold text-gray-900 dark:text-white mb-2 text-sm">{pilar.titulo}</h4>
                <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">{pilar.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── GALERÍA DE FOTOS (solo en /nosotros) ── */}
        {isPage && <div className="mt-20">
          <div className="h-px bg-gray-100 dark:bg-gray-700 mb-12"></div>
          <div className="mb-10">
            <span className="inline-block text-sm font-semibold text-[#4A5D23] tracking-widest uppercase mb-3">
              Nuestras Instalaciones
            </span>
            <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
              Conoce Nuestra Tienda
            </h3>
            <p className="mt-3 text-gray-500 dark:text-gray-400 max-w-xl">
              Un vistazo a nuestras instalaciones, productos y el equipo que hace posible servirte cada día.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {fotos.map((foto, i) => (
              <button
                key={i}
                onClick={() => setFotoIdx(i)}
                className={`group relative overflow-hidden rounded-2xl cursor-pointer focus:outline-none ${
                  i === 0 ? 'col-span-2 row-span-2' : ''
                }`}
                style={{ aspectRatio: i === 0 ? '1/1' : '4/3' }}
              >
                <img
                  src={foto.src}
                  alt={foto.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-12 h-12 rounded-full bg-white/90 flex items-center justify-center shadow-lg">
                    <svg className="w-5 h-5 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>}

      </div>

      {/* ── LIGHTBOX ── */}
      {fotoIdx !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={() => setFotoIdx(null)}
        >
          {/* Cerrar */}
          <button
            onClick={() => setFotoIdx(null)}
            className="absolute top-4 right-4 w-12 h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white hover:bg-white hover:text-gray-900 transition-all duration-300 shadow-2xl z-10"
            aria-label="Cerrar"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Flecha anterior */}
          <button
            onClick={(e) => { e.stopPropagation(); prevFoto(); }}
            className="absolute left-4 w-12 h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white hover:bg-white hover:text-gray-900 transition-all duration-300 shadow-2xl z-10"
            aria-label="Anterior"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Imagen */}
          <img
            src={fotos[fotoIdx].src}
            alt={fotos[fotoIdx].alt}
            className="max-w-full max-h-[85vh] object-contain rounded-xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />

          {/* Flecha siguiente */}
          <button
            onClick={(e) => { e.stopPropagation(); nextFoto(); }}
            className="absolute right-4 w-12 h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white hover:bg-white hover:text-gray-900 transition-all duration-300 shadow-2xl z-10"
            aria-label="Siguiente"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Contador */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-white/20 backdrop-blur-md rounded-full text-white text-sm font-medium">
            {fotoIdx + 1} / {fotos.length}
          </div>
        </div>
      )}
    </section>
  );
}
