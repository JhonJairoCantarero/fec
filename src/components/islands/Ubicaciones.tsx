interface Sucursal {
  id: number;
  nombre: string;
  direccion: string;
  telefono: string;
  telefono2?: string;
  horario: {
    semana: string;
    sabado: string;
  };
  mapEmbedUrl: string;
  mapLinkUrl: string;
}

const sucursales: Sucursal[] = [
  {
    id: 1,
    nombre: 'Tienda Principal Siguatepeque',
    direccion: 'Barrio Santa Cruz, una cuadra al sur de la plaza Venuz',
    telefono: '+504 8993-0563',
    horario: {
      semana: '07:30 a.m. - 06:00 p.m.',
      sabado: '07:30 a.m. - 04:00 p.m.',
    },
    mapEmbedUrl: 'https://maps.google.com/maps?q=14.5959133,-87.8346765&hl=es&z=15&output=embed',
    mapLinkUrl: 'https://www.google.com/maps/place/Ferreter%C3%ADa+El+Carmen/@14.5959133,-87.8346765,15.37z/data=!4m7!3m6!1s0x8f65959f5dc1fe67:0x65c9bee2a2b6fa40!4b1!8m2!3d14.597529!4d-87.835821!16s%2Fg%2F11r8g8kmf?hl=es-419&entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D',
  },
  {
    id: 2,
    nombre: 'Sucursal San Juan',
    direccion: 'Barrio San Juan, una cuadra al este del parque',
    telefono: '+504 3326-9197',
    horario: {
      semana: '07:30 a.m. - 05:00 p.m.',
      sabado: '07:30 a.m. - 04:00 p.m.',
    },
    mapEmbedUrl: 'https://maps.google.com/maps?q=14.588563,-87.835063&hl=es&z=15&output=embed',
    mapLinkUrl: 'https://www.google.com/maps?ll=14.588563,-87.835063&z=15&t=m&hl=es-419&gl=US&mapclient=embed&cid=10013519629319759433',
  },
  {
    id: 3,
    nombre: 'CEDIS Siguatepeque',
    direccion: 'CA-5 Carretera hacia Tegucigalpa, Estación COVI, Siguatepeque, Comayagua',
    telefono: '+504 9802-5990',
    horario: {
      semana: '07:30 a.m. - 05:00 p.m.',
      sabado: '07:30 a.m. - 04:00 p.m.',
    },
    mapEmbedUrl: 'https://maps.google.com/maps?q=H57C%2B8VF+Siguatepeque+Honduras&hl=es&z=15&output=embed',
    mapLinkUrl: 'https://www.google.com/maps/place/H57C%2B8VF+Estaci%C3%B3n+de+peaje+COVI+Siguatepeque,+CA-5,+Siguatepeque,+Comayagua/data=!4m2!3m1!1s0x8f6595da4cfeb7ff:0x21c96c72259d7195',
  },
  {
    id: 4,
    nombre: 'Sucursal Jesús de Otoro',
    direccion: 'Barrio El Carmen, Calle 21 de agosto',
    telefono: '+504 3283-4584',
    telefono2: '2773 24-29',
    horario: {
      semana: '07:30 a.m. - 05:00 p.m.',
      sabado: '07:30 a.m. - 04:00 p.m.',
    },
    mapEmbedUrl: 'https://maps.google.com/maps?q=14.483435,-87.980122&hl=es&z=15&output=embed',
    mapLinkUrl: 'https://www.google.com/maps?ll=14.483435,-87.980122&z=15&t=m&hl=es-419&gl=US&mapclient=embed&cid=18053789421006486314',
  },
];

export default function Ubicaciones() {

  return (
    <section id="ubicaciones" className="py-24 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Nuestras Ubicaciones
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto font-medium">
            Visítanos en cualquiera de nuestras sucursales. Estamos aquí para servirte.
          </p>
        </div>

        <div className="space-y-12">
          {sucursales.map((sucursal, index) => (
            <div
              key={sucursal.id}
              className={`grid grid-cols-1 lg:grid-cols-3 gap-8 items-start ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Información de la sucursal */}
              <div className="lg:col-span-1">
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border border-gray-100 dark:border-gray-700 h-full">
                  <h3 className="text-2xl sm:text-3xl font-bold mb-6 text-gray-900 dark:text-white">
                    {sucursal.nombre}
                  </h3>

                  <div className="space-y-6">
                    <div>
                      <div className="flex items-start gap-3">
                        <span className="text-2xl">📍</span>
                        <div>
                          <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                            Dirección
                          </h4>
                          <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed font-medium">
                            {sucursal.direccion}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <div className="flex items-start gap-3">
                        <span className="text-2xl">📞</span>
                        <div>
                          <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                            Teléfono
                          </h4>
                          <p className="text-[#4A5D23] font-semibold">{sucursal.telefono}</p>
                          {sucursal.telefono2 && (
                            <p className="text-[#4A5D23] font-semibold">{sucursal.telefono2}</p>
                          )}
                        </div>
                      </div>
                    </div>

                    <div>
                      <div className="flex items-start gap-3">
                        <span className="text-2xl">🕒</span>
                        <div>
                          <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                            Horario
                          </h4>
                          <p className="text-gray-600 dark:text-gray-400 text-sm font-medium">
                            <strong className="text-gray-900 dark:text-white">Lunes a Viernes:</strong> {sucursal.horario.semana}
                            <br />
                            <strong className="text-gray-900 dark:text-white">Sábado:</strong> {sucursal.horario.sabado}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="pt-6 mt-6 border-t border-gray-200 dark:border-gray-700">
                      <a
                        href={sucursal.mapLinkUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-[#4A5D23] hover:bg-[#6C7F3B] text-white font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
                      >
                        <span>Ver en Google Maps</span>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mapa */}
              <div className="lg:col-span-2">
                <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-200 dark:border-gray-700 h-[400px] lg:h-[500px]">
                  <iframe
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                    src={sucursal.mapEmbedUrl}
                  ></iframe>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

