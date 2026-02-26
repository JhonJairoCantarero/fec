import { useState, useEffect } from 'react';
import { supabase } from '../../lib/supabase';

interface Producto {
  id: string;
  item_code: string;
  item_name: string;
  item_group?: string;
  item_group_name?: string;
  image_urls: string[];
}

export default function Productos() {
  const [productos, setProductos] = useState<Producto[]>([]);
  const [loading, setLoading] = useState(true);
  const [grupoActivo, setGrupoActivo] = useState<string>('');
  const [busqueda, setBusqueda] = useState('');
  const [searchFocused, setSearchFocused] = useState(false);

  const isPage = typeof window !== 'undefined' && window.location.pathname === '/productos';

  useEffect(() => {
    const fetchProductos = async () => {
      try {
        const { data, error } = await supabase
          .from('productos_bondades')
          .select('id, item_code, item_name, item_group, item_group_name, image_urls')
          .order('item_group_name', { ascending: true })
          .order('item_name', { ascending: true });

        if (error) { console.error(error); setLoading(false); return; }

        const withImages = (data || []).filter(p =>
          p.image_urls?.length > 0 &&
          typeof p.image_urls[0] === 'string' &&
          p.image_urls[0].trim() !== ''
        );

        setProductos(withImages);

        const params = new URLSearchParams(window.location.search);
        const cat = params.get('categoria');

        if (cat) {
          setGrupoActivo(cat);
        } else if (!isPage && withImages.length > 0) {
          // En landing: preseleccionar primer grupo
          const primerGrupo = withImages[0].item_group_name || withImages[0].item_group || 'Sin categoría';
          setGrupoActivo(primerGrupo);
        }
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    };

    fetchProductos();
  }, []);

  const productosPorGrupo = productos.reduce((acc, p) => {
    const g = p.item_group_name || p.item_group || 'Sin categoría';
    if (!acc[g]) acc[g] = [];
    acc[g].push(p);
    return acc;
  }, {} as Record<string, Producto[]>);

  const grupos = Object.keys(productosPorGrupo).sort();

  const productosMostrados = busqueda.trim()
    ? productos.filter(p =>
        p.item_name.toLowerCase().includes(busqueda.toLowerCase()) ||
        (p.item_code || '').toLowerCase().includes(busqueda.toLowerCase())
      )
    : grupoActivo
    ? productosPorGrupo[grupoActivo] || []
    : productos;

  const cambiarGrupo = (grupo: string) => {
    setGrupoActivo(grupo);
    setBusqueda('');
    if (isPage) {
      const url = new URL(window.location.href);
      if (grupo) url.searchParams.set('categoria', grupo);
      else url.searchParams.delete('categoria');
      window.history.replaceState({}, '', url.toString());
    }
  };

  const renderCard = (producto: Producto) => {
    const grupo = producto.item_group_name || producto.item_group || '';
    const cardContent = (
      <>
        {/* Imagen */}
        <div className="relative h-48 bg-gradient-to-b from-[#F8F9FB] to-[#EFF2F7] dark:from-gray-800 dark:to-gray-900 overflow-hidden flex-shrink-0">
          <img
            src={producto.image_urls[0]}
            alt={producto.item_name}
            className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-300"
            loading="lazy"
            onError={(e) => { (e.target as HTMLImageElement).style.opacity = '0'; }}
          />
          {/* Badge código */}
          {producto.item_code && (
            <div className="absolute top-2 left-2 bg-black/65 backdrop-blur-sm text-white text-[9px] font-bold px-2 py-0.5 rounded-md tracking-wide">
              {producto.item_code}
            </div>
          )}
        </div>

        {/* Contenido */}
        <div className="p-3 flex flex-col gap-2 flex-1">
          {grupo && (
            <span className="self-start text-[9px] font-semibold px-2 py-0.5 rounded-md bg-purple-50 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400 uppercase tracking-wide truncate max-w-full">
              {grupo}
            </span>
          )}
          <p className="text-[11px] font-semibold text-gray-700 dark:text-gray-300 line-clamp-3 leading-snug flex-1">
            {producto.item_name}
          </p>
          <div className="pt-2 border-t border-gray-100 dark:border-gray-700">
            <span className="text-[10px] font-semibold text-[#4A5D23] flex items-center gap-1">
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              Consultar precio
            </span>
          </div>
        </div>
      </>
    );

    const cls = "group bg-white dark:bg-gray-800 rounded-[18px] border border-[#E2E6EC] dark:border-gray-700 overflow-hidden flex flex-col hover:border-[#4A5D23]/50 hover:shadow-[0_8px_30px_rgba(0,0,0,0.10)] transition-all duration-200";

    return isPage ? (
      <div key={producto.id} className={cls}>{cardContent}</div>
    ) : (
      <a key={producto.id} href={`/productos?categoria=${encodeURIComponent(grupoActivo || grupo)}`} className={cls}>
        {cardContent}
      </a>
    );
  };

  /* ─────────────────────────────────────────────
     LANDING SECTION (preview)
  ───────────────────────────────────────────── */
  if (!isPage) {
    return (
      <section id="productos" className="py-24 bg-[#F5F5F7] dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Header */}
          <div className="mb-10">
            <span className="inline-block text-sm font-semibold text-[#4A5D23] tracking-widest uppercase mb-3">
              Catálogo
            </span>
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
                Nuestros Productos
              </h2>
              <a
                href="/productos"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#4A5D23] hover:text-[#6C7F3B] transition-colors"
              >
                Ver todos los productos
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
            <div className="mt-6 h-px bg-gray-200 dark:bg-gray-700"></div>
          </div>

          {loading ? (
            <div className="flex justify-center items-center py-20">
              <div className="flex items-center gap-3 text-gray-400 dark:text-gray-500">
                <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                </svg>
                <span className="text-sm font-medium">Cargando productos...</span>
              </div>
            </div>
          ) : (
            <>
              <div className="flex flex-col lg:flex-row gap-8">

                {/* Sidebar de categorías */}
                <aside className="lg:w-64 flex-shrink-0">
                  <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden">
                    <div className="px-5 py-4 border-b border-gray-100 dark:border-gray-700">
                      <p className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-widest">Categorías</p>
                    </div>
                    <nav className="py-2 max-h-[480px] overflow-y-auto">
                      {grupos.map(grupo => (
                        <button
                          key={grupo}
                          onClick={() => cambiarGrupo(grupo)}
                          className={`w-full text-left px-5 py-3 text-sm font-medium transition-all duration-150 flex items-center justify-between gap-2 ${
                            grupoActivo === grupo
                              ? 'bg-[#4A5D23]/8 text-[#4A5D23] border-r-2 border-[#4A5D23]'
                              : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white'
                          }`}
                        >
                          <span className="truncate">{grupo}</span>
                          <span className={`text-xs flex-shrink-0 px-2 py-0.5 rounded-full font-semibold ${
                            grupoActivo === grupo
                              ? 'bg-[#4A5D23]/15 text-[#4A5D23]'
                              : 'bg-gray-100 dark:bg-gray-800 text-gray-400 dark:text-gray-500'
                          }`}>
                            {productosPorGrupo[grupo]?.length || 0}
                          </span>
                        </button>
                      ))}
                    </nav>
                  </div>
                </aside>

                {/* Grid de productos */}
                <div className="flex-1 min-w-0">
                  <div className="mb-5 flex items-center justify-between">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">{grupoActivo}</h3>
                    <span className="text-sm text-gray-400 dark:text-gray-500">{productosMostrados.length} productos</span>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-4">
                    {productosMostrados.slice(0, 12).map(p => renderCard(p))}
                  </div>
                  {productosMostrados.length > 12 && (
                    <div className="mt-8 text-center">
                      <a
                        href={`/productos?categoria=${encodeURIComponent(grupoActivo)}`}
                        className="inline-flex items-center gap-2 px-8 py-3 bg-[#4A5D23] hover:bg-[#6C7F3B] text-white text-sm font-semibold rounded-2xl transition-all shadow-md hover:shadow-lg"
                      >
                        Ver los {productosMostrados.length} productos
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </a>
                    </div>
                  )}
                </div>

              </div>
            </>
          )}
        </div>
      </section>
    );
  }

  /* ─────────────────────────────────────────────
     FULL PRODUCTS PAGE
  ───────────────────────────────────────────── */
  return (
    <section className="min-h-screen bg-[#F5F5F7] dark:bg-gray-950">
      <div className="flex">

        {/* ── SIDEBAR DESKTOP ── */}
        <aside className="hidden lg:flex flex-col w-72 flex-shrink-0 bg-[#3D4F52] min-h-screen sticky top-20 self-start shadow-[4px_0_24px_rgba(0,0,0,0.15)]">

          {/* Stats */}
          <div className="p-6 border-b border-white/10">
            <p className="text-xs text-white/50 uppercase tracking-widest font-semibold mb-4">Catálogo 2025</p>
            <div className="flex gap-6">
              <div>
                <p className="text-3xl font-extrabold text-white leading-none">{productos.length}</p>
                <p className="text-xs text-white/50 mt-1 uppercase tracking-wide">productos</p>
              </div>
              <div className="w-px bg-white/10"></div>
              <div>
                <p className="text-3xl font-extrabold text-white leading-none">{grupos.length}</p>
                <p className="text-xs text-white/50 mt-1 uppercase tracking-wide">categorías</p>
              </div>
            </div>
          </div>

          {/* Todas las categorías */}
          <div className="px-4 pt-4 pb-2">
            <button
              onClick={() => cambiarGrupo('')}
              className={`w-full px-5 py-3.5 rounded-2xl text-sm font-semibold transition-all duration-200 flex items-center justify-between gap-2 ${
                !grupoActivo && !busqueda
                  ? 'bg-[#4A5D23] text-white shadow-[0_4px_16px_rgba(74,93,35,0.45)] border-2 border-[#4A5D23]'
                  : 'bg-white/8 text-white/70 hover:bg-white/12 border border-white/15'
              }`}
            >
              <span>Todas las categorías</span>
              <span className={`text-xs font-bold px-2 py-0.5 rounded-lg ${
                !grupoActivo && !busqueda ? 'bg-white/25 text-white' : 'bg-white/10 text-white/40'
              }`}>
                {productos.length}
              </span>
            </button>
          </div>

          {/* Lista de categorías */}
          <nav className="flex-1 overflow-y-auto px-3 pb-8 pt-1" style={{ scrollbarWidth: 'thin', scrollbarColor: 'rgba(255,255,255,0.1) transparent' }}>
            {grupos.map(grupo => {
              const initials = grupo.slice(0, 2).toUpperCase();
              const isActive = grupoActivo === grupo;
              return (
                <button
                  key={grupo}
                  onClick={() => cambiarGrupo(grupo)}
                  className={`w-full text-left px-3 py-3 rounded-xl mb-0.5 flex items-center gap-3 transition-all duration-150 ${
                    isActive
                      ? 'bg-[#4A5D23] text-white'
                      : 'text-white/65 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  <span className={`flex-shrink-0 w-9 h-9 rounded-xl flex items-center justify-center text-[12px] font-extrabold tracking-wide ${
                    isActive ? 'bg-white/20 text-white' : 'bg-[#F5F5F5]/10 text-white/60'
                  }`}>
                    {initials}
                  </span>
                  <span className="flex-1 truncate text-sm font-medium">{grupo}</span>
                  <span className={`flex-shrink-0 text-[11px] font-bold px-2 py-0.5 rounded-lg ${
                    isActive ? 'bg-white/20 text-white' : 'bg-white/8 text-white/40'
                  }`}>
                    {productosPorGrupo[grupo]?.length || 0}
                  </span>
                </button>
              );
            })}
          </nav>
        </aside>

        {/* ── MAIN CONTENT ── */}
        <main className="flex-1 min-w-0">

          {/* Sticky top bar */}
          <div className="sticky top-20 z-30 bg-white/95 dark:bg-gray-800/95 backdrop-blur-md border-b border-gray-200 dark:border-gray-700 px-4 sm:px-6 py-4">
            <div className="max-w-5xl">
              <div className="flex items-center gap-3">
                {/* Barra de búsqueda */}
                <div className={`flex-1 flex items-center gap-3 bg-gray-100 dark:bg-gray-800 rounded-2xl px-4 py-3 border-2 transition-all duration-200 ${
                  searchFocused ? 'border-[#4A5D23] bg-white dark:bg-gray-800 shadow-[0_0_0_4px_rgba(74,93,35,0.08)]' : 'border-transparent'
                }`}>
                  <svg className={`w-5 h-5 flex-shrink-0 transition-colors ${searchFocused ? 'text-[#4A5D23]' : 'text-gray-400 dark:text-gray-500'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  <input
                    type="text"
                    placeholder="Buscar por código o nombre..."
                    value={busqueda}
                    onChange={e => setBusqueda(e.target.value)}
                    onFocus={() => setSearchFocused(true)}
                    onBlur={() => setSearchFocused(false)}
                    className="flex-1 bg-transparent outline-none text-sm text-gray-800 dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-500 font-medium"
                  />
                  {busqueda && (
                    <button
                      onClick={() => setBusqueda('')}
                      className="w-5 h-5 flex items-center justify-center rounded-full bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500 transition-colors text-gray-600 dark:text-gray-400"
                    >
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  )}
                </div>

                <span className="flex-shrink-0 text-sm text-gray-500 dark:text-gray-400 font-medium hidden sm:block whitespace-nowrap">
                  {productosMostrados.length} productos
                </span>
              </div>

              {/* Chips móvil */}
              {!loading && grupos.length > 0 && (
                <div className="flex gap-2 overflow-x-auto mt-3 pb-1 lg:hidden" style={{ scrollbarWidth: 'none' }}>
                  <button
                    onClick={() => cambiarGrupo('')}
                    className={`flex-shrink-0 px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                      !grupoActivo && !busqueda ? 'bg-[#4A5D23] text-white' : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
                    }`}
                  >
                    Todas
                  </button>
                  {grupos.map(g => (
                    <button
                      key={g}
                      onClick={() => cambiarGrupo(g)}
                      className={`flex-shrink-0 px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                        grupoActivo === g ? 'bg-gray-800 text-white' : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
                      }`}
                    >
                      {g}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Grid de productos */}
          <div className="p-4 sm:p-6">
            {loading ? (
              <div className="flex justify-center items-center py-32">
                <div className="flex items-center gap-3 text-gray-400 dark:text-gray-500">
                  <svg className="w-6 h-6 animate-spin" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                  <span className="text-sm font-medium">Cargando productos...</span>
                </div>
              </div>
            ) : productosMostrados.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-32 gap-4">
                <svg className="w-16 h-16 text-gray-300 dark:text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
                <p className="text-gray-500 dark:text-gray-400 text-sm font-medium">No se encontraron productos</p>
                {busqueda && (
                  <button
                    onClick={() => setBusqueda('')}
                    className="text-[#4A5D23] text-sm font-semibold hover:underline"
                  >
                    Limpiar búsqueda
                  </button>
                )}
              </div>
            ) : (
              <>
                {/* Título de sección activa */}
                {(grupoActivo || busqueda) && (
                  <div className="mb-6 flex items-center justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                        {busqueda ? `"${busqueda}"` : grupoActivo}
                      </h3>
                      <p className="text-sm text-gray-400 dark:text-gray-500 mt-0.5">{productosMostrados.length} productos encontrados</p>
                    </div>
                    {(grupoActivo || busqueda) && (
                      <button
                        onClick={() => { setBusqueda(''); cambiarGrupo(''); }}
                        className="text-xs text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 flex items-center gap-1 transition-colors"
                      >
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                        Limpiar filtro
                      </button>
                    )}
                  </div>
                )}

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
                  {productosMostrados.map(p => renderCard(p))}
                </div>
              </>
            )}
          </div>
        </main>
      </div>
    </section>
  );
}
