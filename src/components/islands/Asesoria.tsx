export default function Asesoria() {
  const beneficios = [
    { icono: '🔧', texto: 'Asesoría técnica especializada sin costo' },
    { icono: '📐', texto: 'Ayuda en planificación y cálculo de materiales' },
    { icono: '⭐', texto: 'Recomendación de los mejores productos para cada proyecto' },
    { icono: '🤝', texto: 'Atención personalizada y trato de confianza' },
  ];

  return (
    <section className="relative w-full min-h-screen flex items-end justify-center overflow-hidden">
      {/* Imagen de fondo a pantalla completa */}
      <div className="absolute inset-0">
        <img
          src="/ventas.jpeg"
          alt="Personal de Ferretería El Carmen"
          className="w-full h-full object-cover"
        />
        {/* Overlay: transparente arriba (rostros visibles), oscuro abajo (texto legible) */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 via-60% to-transparent"></div>
      </div>

      {/* Contenido sobre el fondo */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16">
        <div className="max-w-2xl">
          {/* Etiqueta */}
          <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/20 text-white font-semibold text-sm px-4 py-2 rounded-full mb-6">
            <span>👷</span>
            <span>Nuestro Equipo</span>
          </div>

          {/* Título */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
            Personal{' '}
            <span className="text-[#8CB043]">altamente</span>{' '}
            <span className="text-[#8CB043]">calificado</span>{' '}
            a tu servicio
          </h2>

          {/* Beneficios */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
            {beneficios.map((b) => (
              <div
                key={b.texto}
                className="flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-4 py-3"
              >
                <span className="text-xl flex-shrink-0">{b.icono}</span>
                <p className="text-white/90 font-medium text-sm">{b.texto}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <a
            href="#contacto"
            className="inline-flex items-center gap-3 px-8 py-4 bg-[#4A5D23] hover:bg-[#6C7F3B] text-white font-semibold rounded-xl shadow-lg shadow-[#4A5D23]/40 hover:shadow-[#4A5D23]/60 hover:scale-105 transition-all duration-300"
          >
            <span>Habla con nuestros expertos</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>

      {/* Badge flotante esquina inferior derecha */}
      <div className="absolute bottom-8 right-8 z-10 bg-white/95 backdrop-blur-sm rounded-2xl px-5 py-3 shadow-2xl flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#4A5D23] to-[#6C7F3B] flex items-center justify-center shadow-md">
          <span className="text-lg">🏅</span>
        </div>
        <div>
          <div className="text-xs text-gray-500 font-medium">Trayectoria</div>
          <div className="text-sm font-bold text-gray-900">+20 años de experiencia</div>
        </div>
      </div>
    </section>
  );
}
