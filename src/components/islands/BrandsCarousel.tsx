import { useEffect, useRef, useState } from 'react';

export default function BrandsCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [hideTitle, setHideTitle] = useState(false);

  const brands = [
    '/marcas/2.png',
    '/marcas/3.png',
    '/marcas/4.png',
    '/marcas/5.png',
    '/marcas/6.png',
    '/marcas/7.png',
    '/marcas/8.png',
    '/marcas/9.png',
    '/marcas/10.png',
    '/marcas/11.png',
    '/marcas/122.png',
    '/marcas/133.png',
    '/marcas/144.png',
    '/marcas/155.png',
    '/marcas/166.png',
  ];

  // Duplicar las marcas para efecto infinito
  const duplicatedBrands = [...brands, ...brands, ...brands];

  useEffect(() => {
    // Escuchar eventos del TruckAnimation
    const handleTruckState = (event: CustomEvent) => {
      setHideTitle(event.detail.hideBrandsTitle);
    };

    window.addEventListener('truckAnimationState', handleTruckState as EventListener);

    return () => {
      window.removeEventListener('truckAnimationState', handleTruckState as EventListener);
    };
  }, []);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationFrameId: number;
    let scrollPosition = 0;
    const scrollSpeed = 0.5; // Velocidad del scroll (píxeles por frame)

    const scroll = () => {
      scrollPosition += scrollSpeed;

      // Cuando llegamos al final del primer set de marcas, reseteamos
      const maxScroll = scrollContainer.scrollWidth / 3;
      if (scrollPosition >= maxScroll) {
        scrollPosition = 0;
      }

      scrollContainer.scrollLeft = scrollPosition;
      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);

    // Pausar en hover
    const handleMouseEnter = () => {
      cancelAnimationFrame(animationFrameId);
    };

    const handleMouseLeave = () => {
      animationFrameId = requestAnimationFrame(scroll);
    };

    scrollContainer.addEventListener('mouseenter', handleMouseEnter);
    scrollContainer.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationFrameId);
      scrollContainer.removeEventListener('mouseenter', handleMouseEnter);
      scrollContainer.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`text-center mb-12 transition-all duration-500 ${
          hideTitle ? 'opacity-0 h-0 mb-0 overflow-hidden' : 'opacity-100'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Marcas de Confianza
          </h2>
          <p className="text-lg text-gray-600 font-medium">
            Trabajamos con las mejores marcas del mercado
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

          {/* Scrolling Container */}
          <div
            ref={scrollRef}
            className="flex gap-8 overflow-x-hidden"
            style={{ scrollBehavior: 'auto' }}
          >
            {duplicatedBrands.map((brand, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-40 h-40 sm:w-48 sm:h-48 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 flex items-center justify-center group hover:scale-105 border border-gray-100"
              >
                <img
                  src={brand}
                  alt={`Brand ${index + 1}`}
                  className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="mt-12 flex justify-center gap-2">
          <div className="w-2 h-2 rounded-full bg-[#007AFF] animate-pulse"></div>
          <div className="w-2 h-2 rounded-full bg-[#007AFF] animate-pulse delay-75"></div>
          <div className="w-2 h-2 rounded-full bg-[#007AFF] animate-pulse delay-150"></div>
        </div>
      </div>
    </section>
  );
}
