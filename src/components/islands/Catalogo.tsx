import { useState } from 'react';

interface Catalogo {
  id: number;
  titulo: string;
  descripcion: string;
  paginas: number;
  año: string;
  pdf: string;
  portada?: string;
  color: string;
  colorSecundario: string;
  etiqueta?: string;
}

const catalogos: Catalogo[] = [
  {
    id: 1,
    titulo: 'Catálogo General FEC 2025',
    descripcion: 'Toda nuestra línea de productos ferreteros, herramientas y materiales de construcción.',
    paginas: 0,
    año: '2025',
    pdf: '/catalogos/0 - Catálogo FERRTERÍA EL CARMEN, Honduras. 2025.pdf',
    color: '#4A5D23',
    colorSecundario: '#6C7F3B',
    etiqueta: 'Principal',
  },
  {
    id: 2,
    titulo: 'Catálogo Hunter',
    descripcion: 'Productos Hunter: herramientas, equipos y accesorios de alta calidad para profesionales.',
    paginas: 0,
    año: '2025',
    pdf: '/catalogos/2 - CATALOGO HUNTER.pdf',
    color: '#3D4F52',
    colorSecundario: '#47595C',
    etiqueta: '',
  },
  {
    id: 3,
    titulo: 'Catálogo Tornillería 2025',
    descripcion: 'Amplia variedad de tornillos, tuercas, pernos y todo tipo de sujetadores.',
    paginas: 0,
    año: '2025',
    pdf: '/catalogos/3 - CATALOGO TORNILLERIA 2025 AZUL.pdf',
    color: '#1a3a5c',
    colorSecundario: '#2563a8',
    etiqueta: '',
  },
  {
    id: 4,
    titulo: 'Catálogo de Hogar 2025',
    descripcion: 'Productos para el hogar: pinturas, accesorios, herramientas domésticas y más.',
    paginas: 0,
    año: '2025',
    pdf: '/catalogos/5.- CATALOGO DE HOGAR 2025.pdf',
    color: '#7c3d12',
    colorSecundario: '#b45309',
    etiqueta: '',
  },
  {
    id: 5,
    titulo: 'Catálogo Lámparas 2024-25',
    descripcion: 'Iluminación LED, lámparas decorativas y accesorios eléctricos para hogar y empresa.',
    paginas: 0,
    año: '2024-25',
    pdf: '/catalogos/7 - CATALOGO-LAMPARAS-2024-25.pdf',
    color: '#4a1d96',
    colorSecundario: '#7c3aed',
    etiqueta: '',
  },
  {
    id: 6,
    titulo: 'Porcelanatos Nuevo Ingreso',
    descripcion: 'Nueva colección de porcelanatos y cerámicas para pisos y paredes.',
    paginas: 0,
    año: '2025',
    pdf: '/catalogos/CATALOGO DE NUEVO INGRESO DE PORCELANATOS.pdf',
    color: '#1e3a5f',
    colorSecundario: '#0369a1',
    etiqueta: 'Nuevo',
  },
  {
    id: 7,
    titulo: 'Catálogo Yato 2025',
    descripcion: 'Herramientas profesionales Yato: calidad y precisión para cada trabajo.',
    paginas: 0,
    año: '2025',
    pdf: '/catalogos/CATOLOGO YATO 2025.pdf',
    color: '#7f1d1d',
    colorSecundario: '#dc2626',
    etiqueta: '',
  },
];

export default function Catalogo() {
  const [pdfAbierto, setPdfAbierto] = useState<Catalogo | null>(null);

  return (
    <>
      <div className="min-h-screen bg-[#F8F9FB] dark:bg-gray-950">

        {/* Header */}
        <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
            <span className="inline-block text-sm font-semibold text-[#4A5D23] tracking-widest uppercase mb-3">
              Ferretería El Carmen
            </span>
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
                Nuestros Catálogos
              </h1>
              <p className="text-gray-500 dark:text-gray-400 text-sm font-medium max-w-xs sm:text-right">
                Visualiza o descarga nuestros catálogos digitales de productos
              </p>
            </div>
            <div className="mt-6 h-px bg-gray-200 dark:bg-gray-700"></div>
          </div>
        </div>

        {/* Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {catalogos.map((cat) => (
              <div
                key={cat.id}
                className="group bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                {/* Portada con color */}
                <div
                  className="relative h-48 flex flex-col items-center justify-center p-6"
                  style={{ background: `linear-gradient(135deg, ${cat.color} 0%, ${cat.colorSecundario} 100%)` }}
                >
                  {/* Patrón sutil */}
                  <div className="absolute inset-0 opacity-10" style={{
                    backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 20px, rgba(255,255,255,0.15) 20px, rgba(255,255,255,0.15) 21px)`
                  }}></div>

                  {/* Etiqueta */}
                  {cat.etiqueta && (
                    <span className="absolute top-4 right-4 bg-white text-xs font-bold px-2.5 py-1 rounded-full uppercase tracking-wide shadow-sm" style={{ color: cat.color }}>
                      {cat.etiqueta}
                    </span>
                  )}

                  {/* Ícono libro */}
                  <div className="relative z-10 w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center mb-3 shadow-lg">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <span className="relative z-10 text-white/80 text-xs font-semibold tracking-widest uppercase">{cat.año}</span>
                </div>

                {/* Info */}
                <div className="p-5">
                  <h3 className="text-base font-bold text-gray-900 dark:text-white mb-1.5 leading-snug">{cat.titulo}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed line-clamp-2 mb-5">{cat.descripcion}</p>

                  <div className="flex gap-2">
                    <button
                      onClick={() => setPdfAbierto(cat)}
                      className="flex-1 py-2.5 bg-[#4A5D23] hover:bg-[#6C7F3B] text-white text-sm font-semibold rounded-xl transition-colors flex items-center justify-center gap-1.5"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                      Ver
                    </button>
                    <a
                      href={cat.pdf}
                      download
                      className="flex-1 py-2.5 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 text-sm font-semibold rounded-xl transition-colors flex items-center justify-center gap-1.5 border border-gray-200 dark:border-gray-700"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      PDF
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal visor de PDF */}
      {pdfAbierto && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          onClick={() => setPdfAbierto(null)}
        >
          <div
            className="relative w-full max-w-5xl h-[90vh] bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl border border-gray-200 dark:border-gray-700"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Barra superior */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl flex items-center justify-center shadow-sm" style={{ backgroundColor: pdfAbierto.color }}>
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-900 dark:text-white font-bold text-sm">{pdfAbierto.titulo}</p>
                  <p className="text-gray-400 dark:text-gray-500 text-xs">{pdfAbierto.año}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href={pdfAbierto.pdf}
                  download
                  className="flex items-center gap-2 px-4 py-2 bg-[#4A5D23] hover:bg-[#6C7F3B] text-white text-sm font-semibold rounded-xl transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Descargar
                </a>
                <button
                  onClick={() => setPdfAbierto(null)}
                  className="w-9 h-9 rounded-xl bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 flex items-center justify-center text-gray-600 dark:text-gray-400 transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Visor PDF */}
            <iframe
              src={pdfAbierto.pdf}
              className="w-full"
              style={{ height: 'calc(90vh - 73px)' }}
              title={pdfAbierto.titulo}
            />
          </div>
        </div>
      )}
    </>
  );
}
