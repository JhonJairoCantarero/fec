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

export default function Catalogo() {
  const [productos, setProductos] = useState<Producto[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProductos = async () => {
      try {
        // Obtener todos los productos con imágenes
        const { data, error } = await supabase
          .from('productos_bondades')
          .select('id, item_code, item_name, item_group, item_group_name, image_urls')
          .order('item_group_name', { ascending: true })
          .order('item_name', { ascending: true });

        if (error) {
          console.error('Error al obtener productos:', error);
          setLoading(false);
          return;
        }

        if (!data || data.length === 0) {
          console.log('No se encontraron productos con imágenes');
          setLoading(false);
          return;
        }

        // Filtrar productos que realmente tienen imágenes válidas
        const productosConImagenes = data.filter(
          (producto) => 
            producto.image_urls && 
            Array.isArray(producto.image_urls) && 
            producto.image_urls.length > 0 &&
            producto.image_urls[0] !== null &&
            producto.image_urls[0] !== '' &&
            typeof producto.image_urls[0] === 'string' &&
            producto.image_urls[0].trim() !== ''
        );

        setProductos(productosConImagenes);
      } catch (error) {
        console.error('Error al obtener productos:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProductos();
  }, []);

  // Agrupar productos por grupo
  const productosPorGrupo = productos.reduce((acc, producto) => {
    const grupo = producto.item_group_name || producto.item_group || 'Sin categoría';
    if (!acc[grupo]) {
      acc[grupo] = [];
    }
    acc[grupo].push(producto);
    return acc;
  }, {} as Record<string, Producto[]>);

  // Ordenar grupos alfabéticamente
  const gruposOrdenados = Object.keys(productosPorGrupo).sort();

  return (
    <section className="min-h-screen bg-[#F5F5F7] py-12" style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado */}
        <div className="mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-black mb-3" style={{ fontWeight: 700 }}>
            Catálogo de Productos
          </h1>
          <p className="text-base text-[#666666]" style={{ lineHeight: 1.5 }}>
            Explora todos nuestros productos organizados por categoría
          </p>
        </div>

        {loading ? (
          <div className="flex justify-center items-center py-20">
            <div className="text-base text-[#666666]">Cargando catálogo...</div>
          </div>
        ) : productos.length === 0 ? (
          <div className="flex justify-center items-center py-20">
            <div className="text-base text-[#666666]">No hay productos disponibles</div>
          </div>
        ) : (
          /* Contenedor tipo cuaderno */
          <div className="bg-white rounded-2xl p-8 md:p-12" style={{ boxShadow: '0 2px 12px rgba(0, 0, 0, 0.08)' }}>
            {gruposOrdenados.map((grupo, grupoIndex) => (
              <div key={grupo} className={grupoIndex > 0 ? 'mt-16' : ''}>
                {/* Encabezado de grupo tipo cuaderno */}
                <div className="mb-8 pb-4 border-b-2 border-[#007AFF]">
                  <h2 
                    className="text-2xl md:text-3xl font-bold text-black mb-2"
                    style={{ fontWeight: 700 }}
                  >
                    {grupo}
                  </h2>
                  <p className="text-sm text-[#666666]">
                    {productosPorGrupo[grupo].length} {productosPorGrupo[grupo].length === 1 ? 'producto' : 'productos'}
                  </p>
                </div>

                {/* Grid de productos del grupo */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
                  {productosPorGrupo[grupo].map((producto) => (
                    <div
                      key={producto.id}
                      className="bg-[#F9F9F9] rounded-xl overflow-hidden cursor-pointer transition-all duration-200 hover:bg-[#F2F2F7]"
                      style={{
                        borderRadius: '12px',
                        border: '1px solid #E5E5EA',
                        boxShadow: '0 1px 4px rgba(0, 0, 0, 0.04)',
                      }}
                    >
                      {/* Imagen del producto */}
                      <div className="relative w-full h-48 bg-white overflow-hidden">
                        <img
                          src={producto.image_urls[0]}
                          alt={producto.item_name}
                          className="w-full h-full object-cover transition-transform duration-300"
                          style={{
                            transform: 'scale(1)',
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'scale(1.05)';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'scale(1)';
                          }}
                          loading="lazy"
                        />
                      </div>

                      {/* Nombre del producto */}
                      <div className="p-3">
                        <h3 
                          className="text-sm text-black text-center line-clamp-2"
                          style={{ 
                            fontWeight: 500,
                            lineHeight: 1.4,
                          }}
                        >
                          {producto.item_name}
                        </h3>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

