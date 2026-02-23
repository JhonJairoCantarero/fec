import { useState, useEffect, useRef } from 'react';
import { supabase } from '../../lib/supabase';

interface Producto {
  id: string;
  item_code: string;
  item_name: string;
  item_group?: string;
  item_group_name?: string;
  image_urls: string[];
  bondade_1?: string;
  bondade_2?: string;
  bondade_3?: string;
}

export default function Productos() {
  const [productos, setProductos] = useState<Producto[]>([]);
  const [loading, setLoading] = useState(true);
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [visibleCards, setVisibleCards] = useState<Set<string>>(new Set());
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const fetchProductos = async () => {
      try {
        // Obtener productos con imágenes (la política RLS ya filtra los que tienen imágenes)
        const { data, error } = await supabase
          .from('productos_bondades')
          .select('id, item_code, item_name, item_group, item_group_name, image_urls, bondade_1, bondade_2, bondade_3')
          .limit(50);

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
        ).slice(0, 12); // Limitar a 12 productos

        setProductos(productosConImagenes);
      } catch (error) {
        console.error('Error al obtener productos:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProductos();
  }, []);

  useEffect(() => {
    if (productos.length === 0) return;

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('data-product-id') || '';
            setVisibleCards((prev) => new Set(prev).add(id));
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    const cards = document.querySelectorAll('[data-product-id]');
    cards.forEach((card) => observerRef.current?.observe(card));

    return () => {
      observerRef.current?.disconnect();
    };
  }, [productos]);

  return (
    <section id="productos" className="py-20 bg-[#F5F5F7] overflow-hidden" style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-black mb-3" style={{ fontWeight: 700 }}>
            Nuestros Productos
          </h2>
          <p className="text-base text-[#666666] max-w-2xl" style={{ lineHeight: 1.5 }}>
            Ofrecemos una amplia variedad de productos de calidad para todas tus necesidades
          </p>
        </div>

        {loading ? (
          <div className="flex justify-center items-center py-20">
            <div className="text-base text-[#666666]">Cargando productos...</div>
          </div>
        ) : productos.length === 0 ? (
          <div className="flex justify-center items-center py-20">
            <div className="text-base text-[#666666]">No hay productos disponibles</div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {productos.map((producto, index) => (
              <div
                key={producto.id}
                data-product-id={producto.id}
                className={`transition-all duration-500 ${
                  visibleCards.has(producto.id)
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-4'
                }`}
                style={{
                  transitionDelay: `${index * 50}ms`,
                }}
                onMouseEnter={() => setHoveredId(producto.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                {/* Tarjeta profesional */}
                <div
                  className="bg-white rounded-2xl overflow-hidden cursor-pointer transition-all duration-200"
                  style={{
                    borderRadius: '16px',
                    boxShadow: hoveredId === producto.id 
                      ? '0 4px 20px rgba(0, 0, 0, 0.12)' 
                      : '0 2px 12px rgba(0, 0, 0, 0.08)',
                    transform: hoveredId === producto.id ? 'translateY(-4px)' : 'translateY(0)',
                  }}
                >
                  {/* Imagen del producto */}
                  <div className="relative w-full h-64 bg-[#F2F2F7] overflow-hidden">
                    <img
                      src={producto.image_urls[0]}
                      alt={producto.item_name}
                      className="w-full h-full object-cover transition-transform duration-300"
                      style={{
                        transform: hoveredId === producto.id ? 'scale(1.05)' : 'scale(1)',
                      }}
                      loading="lazy"
                    />
                  </div>

                  {/* Contenido de la tarjeta */}
                  <div className="p-6">
                    <h3 
                      className="text-base text-black text-center line-clamp-2"
                      style={{ 
                        fontWeight: 600,
                        lineHeight: 1.4,
                      }}
                    >
                      {producto.item_name}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
