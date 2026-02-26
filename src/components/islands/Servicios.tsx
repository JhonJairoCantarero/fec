const servicios = [
  {
    id: 1,
    titulo: 'Asesoría Técnica',
    descripcion: 'Nuestro equipo de expertos te asesora en la elección del mejor producto para tu proyecto, garantizando resultados óptimos.',
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
    ),
  },
  {
    id: 2,
    titulo: 'Corte y Medición',
    descripcion: 'Servicio de corte preciso de materiales según tus especificaciones técnicas, con equipos de alta precisión.',
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
      </svg>
    ),
  },
  {
    id: 3,
    titulo: 'Entrega a Domicilio',
    descripcion: 'Llevamos tus compras directamente a tu obra o domicilio con puntualidad y cuidado en cada entrega.',
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
      </svg>
    ),
  },
  {
    id: 4,
    titulo: 'Crédito Comercial',
    descripcion: 'Facilidades de pago flexibles para empresas y contratistas. Construye más con el respaldo financiero que necesitas.',
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
      </svg>
    ),
  },
];

export default function Servicios() {
  return (
    <section id="servicios" className="py-24 bg-[#F8F9FB] dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-16">
          <span className="inline-block text-sm font-semibold text-[#4A5D23] tracking-widest uppercase mb-3">
            Lo que ofrecemos
          </span>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
              Nuestros Servicios
            </h2>
            <p className="text-gray-500 dark:text-gray-400 font-medium max-w-sm text-sm sm:text-right">
              Más que una ferretería, somos tu aliado estratégico en cada proyecto
            </p>
          </div>
          <div className="mt-6 h-px bg-gray-200 dark:bg-gray-700"></div>
        </div>

        {/* Grid de servicios */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {servicios.map((servicio) => (
            <div
              key={servicio.id}
              className="group flex items-start gap-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-7 hover:border-[#4A5D23]/40 hover:shadow-lg transition-all duration-300"
            >
              {/* Ícono */}
              <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-[#4A5D23]/8 border border-[#4A5D23]/15 flex items-center justify-center text-[#4A5D23] group-hover:bg-[#4A5D23] group-hover:text-white group-hover:border-[#4A5D23] transition-all duration-300">
                {servicio.svg}
              </div>

              {/* Contenido */}
              <div className="flex-1 min-w-0">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  {servicio.titulo}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                  {servicio.descripcion}
                </p>
                <div className="mt-4 flex items-center gap-1 text-[#4A5D23] text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span>Solicitar servicio</span>
                  <svg className="w-4 h-4 translate-x-0 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
