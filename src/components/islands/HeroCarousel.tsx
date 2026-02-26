import { useState, useEffect } from 'react';

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [showVideo, setShowVideo] = useState(false);
  const [typedText, setTypedText] = useState('');
  const fullText = 'Conócenos en 100 segundos';

  const slides = [
    {
      image: '/logo/1.jpeg',
      title: 'Ferretería El Carmen',
      subtitle: 'Tu socio de confianza en herramientas y materiales',
    },
    {
      image: '/logo/2.jpeg',
      title: 'Calidad Garantizada',
      subtitle: 'Los mejores productos para tus proyectos',
    },
    {
      image: '/logo/3.jpeg',
      title: 'Experiencia y Servicio',
      subtitle: 'Más de 20 años sirviendo a la comunidad',
    },
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, slides.length]);

  // Efecto de escritura del texto
  useEffect(() => {
    setTypedText('');
    let currentIndex = 0;
    let timeoutId: NodeJS.Timeout;

    const typeText = () => {
      if (currentIndex < fullText.length) {
        setTypedText(fullText.slice(0, currentIndex + 1));
        currentIndex++;
        timeoutId = setTimeout(typeText, 100);
      } else {
        setTimeout(() => {
          setTypedText('');
          currentIndex = 0;
          typeText();
        }, 3000);
      }
    };

    typeText();

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <section className="relative w-full min-h-screen overflow-hidden">
      {/* Slides */}
      <div className="relative w-full h-screen">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              index === currentSlide
                ? 'opacity-100 scale-100'
                : 'opacity-0 scale-105'
            }`}
          >
            <div className="absolute inset-0">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-blue-900/50 via-blue-800/30 to-blue-900/50"></div>
            </div>

            <div className="relative z-10 h-full flex items-center justify-center">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
                <div
                  className={`transition-all duration-1000 delay-300 ${
                    index === currentSlide
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-10'
                  }`}
                >
                  <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-6 leading-tight">
                    {slide.title}
                  </h1>
                  <p className="text-xl sm:text-2xl text-white/90 mb-8 font-medium max-w-3xl mx-auto">
                    {slide.subtitle}
                  </p>

                  <div className="flex flex-col gap-4 items-center justify-center">
                    <div className="flex flex-col sm:flex-row gap-4">
                      <a
                        href="/productos"
                        className="group relative px-8 py-4 bg-white text-gray-900 font-semibold rounded-xl shadow-2xl hover:shadow-white/20 transform hover:scale-105 transition-all duration-300 text-lg overflow-hidden text-center"
                      >
                        <span className="relative z-10">Ver Productos</span>
                        <div className="absolute inset-0 bg-gradient-to-r from-[#4A5D23] to-[#6C7F3B] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                        <span className="absolute inset-0 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity font-semibold">
                          Ver Productos
                        </span>
                      </a>
                      <a
                        href="#contacto"
                        className="px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-gray-900 transition-all duration-300 text-lg text-center"
                      >
                        Contáctanos
                      </a>
                    </div>

                    <button
                      onClick={() => setShowVideo(true)}
                      className="group flex items-center gap-3 mt-4 cursor-pointer hover:opacity-90 transition-opacity"
                      aria-label="Ver video"
                      type="button"
                    >
                      <div className="relative flex items-center justify-center">
                        <div className="absolute w-12 h-12 bg-green-600 rounded-full animate-ping opacity-75"></div>
                        <div className="relative w-12 h-12 bg-green-600 rounded-full flex items-center justify-center shadow-xl group-hover:bg-green-700 transition-all duration-300 group-hover:scale-110">
                          <svg className="w-6 h-6 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z"/>
                          </svg>
                        </div>
                      </div>
                      <span className="px-4 py-2 bg-white/90 backdrop-blur-sm text-gray-900 text-sm font-semibold rounded-lg shadow-xl">
                        {typedText || 'Conócenos en 100 segundos'}
                        {typedText.length < fullText.length && typedText.length > 0 && (
                          <span className="animate-pulse">|</span>
                        )}
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-20 w-14 h-14 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white hover:bg-white hover:text-gray-900 transition-all duration-300 shadow-2xl group"
        aria-label="Previous slide"
      >
        <svg className="w-6 h-6 transform group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-20 w-14 h-14 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white hover:bg-white hover:text-gray-900 transition-all duration-300 shadow-2xl group"
        aria-label="Next slide"
      >
        <svg className="w-6 h-6 transform group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 rounded-full transition-all duration-500 ${
              index === currentSlide
                ? 'w-12 bg-white shadow-lg shadow-white/50'
                : 'w-2 bg-white/40 hover:bg-white/60'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 animate-bounce z-20">
        <svg className="w-8 h-8 text-white drop-shadow-lg" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>

      {/* Video Modal */}
      {showVideo && (
        <div
          className="fixed inset-0 z-50 bg-black"
          onClick={() => setShowVideo(false)}
        >
          <button
            onClick={() => setShowVideo(false)}
            className="absolute top-4 right-4 z-10 w-12 h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white hover:bg-white hover:text-gray-900 transition-all duration-300 shadow-2xl"
            aria-label="Cerrar video"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <video
            className="w-full h-full object-contain"
            controls
            autoPlay
            src="/videos/fec.mp4"
            onClick={(e) => e.stopPropagation()}
          >
            Tu navegador no soporta el elemento de video.
          </video>
        </div>
      )}
    </section>
  );
}
