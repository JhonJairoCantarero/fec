import { useState, useEffect } from 'react';

export default function TruckAnimation() {
  const [truckState, setTruckState] = useState<'entering' | 'moving' | 'exiting' | 'done'>('entering');
  const [hideBrandsTitle, setHideBrandsTitle] = useState(false);

  useEffect(() => {
    // Esperar 500ms antes de iniciar la animación
    const enterTimer = setTimeout(() => {
      setTruckState('moving');
    }, 500);

    // Ocultar el título de BrandsCarousel cuando el camión empieza a moverse
    const hideTitleTimer = setTimeout(() => {
      setHideBrandsTitle(true);
    }, 500);

    // Después de 3 segundos, el camión empieza a salir
    const exitTimer = setTimeout(() => {
      setTruckState('exiting');
    }, 3500);

    // Después de que el camión sale completamente, mostrar el título
    const showTitleTimer = setTimeout(() => {
      setHideBrandsTitle(false);
    }, 6500); // Después de que el camión haya pasado completamente

    // Después de que el camión sale completamente, desaparece
    const doneTimer = setTimeout(() => {
      setTruckState('done');
    }, 6500);

    return () => {
      clearTimeout(enterTimer);
      clearTimeout(hideTitleTimer);
      clearTimeout(showTitleTimer);
      clearTimeout(exitTimer);
      clearTimeout(doneTimer);
    };
  }, []);

  // Exponer el estado para que BrandsCarousel pueda usarlo
  useEffect(() => {
    window.dispatchEvent(new CustomEvent('truckAnimationState', { 
      detail: { hideBrandsTitle } 
    }));
  }, [hideBrandsTitle]);

  return (
    <>
      {/* Camión animado con desvanecimiento elegante */}
      {truckState !== 'done' && (
        <div
          className="absolute z-40 pointer-events-none hidden lg:block"
          style={{ 
            top: '60%', 
            transform: 'translateY(-50%)',
            left: truckState === 'entering' 
              ? '-600px' 
              : truckState === 'moving' 
              ? '0px' 
              : truckState === 'exiting'
              ? 'calc(100vw + 600px)'
              : '-600px',
            transition: truckState === 'exiting' 
              ? 'left 3000ms ease-in-out, opacity 2000ms ease-out' 
              : truckState === 'entering'
              ? 'left 3000ms ease-in-out, opacity 800ms ease-in'
              : 'left 3000ms ease-in-out',
            opacity: truckState === 'entering' 
              ? 0 
              : truckState === 'moving' 
              ? 1 
              : truckState === 'exiting'
              ? 0
              : 1,
          }}
        >
          <img
            src="/camion.png"
            alt="Delivery Truck"
            className="w-[450px] xl:w-[550px] h-auto object-contain transition-all duration-300"
            style={{ 
              filter: 'drop-shadow(0 20px 40px rgba(0, 0, 0, 0.3))',
            }}
          />
        </div>
      )}
    </>
  );
}
