import { useState, useEffect, useRef } from 'react';

interface Servicio {
  id: number;
  titulo: string;
  descripcion: string;
  icono: string;
}

const servicios: Servicio[] = [
  {
    id: 1,
    titulo: 'Asesoría Técnica',
    descripcion: 'Nuestro equipo de expertos te asesora en la elección del mejor producto para tu proyecto',
    icono: '👨‍💼',
  },
  {
    id: 2,
    titulo: 'Corte y Medición',
    descripcion: 'Servicio de corte preciso de materiales según tus especificaciones',
    icono: '📏',
  },
  {
    id: 3,
    titulo: 'Entrega a Domicilio',
    descripcion: 'Llevamos tus compras hasta la puerta de tu casa u obra',
    icono: '🚚',
  },
  {
    id: 4,
    titulo: 'Crédito Comercial',
    descripcion: 'Facilidades de pago para empresas y contratistas',
    icono: '💳',
  },
];

export default function Servicios() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set());
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = parseInt(entry.target.getAttribute('data-service-id') || '0');
            setVisibleCards((prev) => new Set(prev).add(id));
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    const cards = document.querySelectorAll('[data-service-id]');
    cards.forEach((card) => observerRef.current?.observe(card));

    return () => {
      observerRef.current?.disconnect();
    };
  }, []);

  return (
    <section id="servicios" className="py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-black mb-4">
            Nuestros Servicios
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-medium">
            Más que una ferretería, somos tu aliado en cada proyecto
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {servicios.map((servicio, index) => (
            <div
              key={servicio.id}
              data-service-id={servicio.id}
              className={`relative transition-all duration-700 ${
                visibleCards.has(servicio.id)
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              }`}
              style={{
                transitionDelay: `${index * 100}ms`,
              }}
              onMouseEnter={() => setHoveredId(servicio.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Icono flotante por encima de la tarjeta */}
              <div className={`relative z-10 flex justify-center transition-all duration-500 ${
                hoveredId === servicio.id ? 'scale-110 -translate-y-3' : ''
              }`}>
                <div className="text-8xl mb-[-30px] drop-shadow-lg">
                  {servicio.icono}
                </div>
              </div>

              {/* Tarjeta minimalista */}
              <div
                className={`relative pt-20 pb-8 px-6 rounded-2xl bg-white border-2 cursor-pointer transform transition-all duration-300 overflow-hidden ${
                  hoveredId === servicio.id
                    ? 'border-[#007AFF] shadow-xl scale-105'
                    : 'border-gray-200 shadow-sm hover:shadow-lg'
                }`}
              >
                <div className="text-center">
                  <h3 className="text-xl font-bold text-black mb-4">
                    {servicio.titulo}
                  </h3>

                  {hoveredId === servicio.id && (
                    <div className="mt-4 animate-fade-in">
                      <p className="text-sm text-gray-600 mb-4 leading-relaxed">{servicio.descripcion}</p>
                      <button className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#007AFF] text-white font-semibold rounded-lg hover:bg-[#0051D5] transition-all">
                        Solicitar servicio
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
