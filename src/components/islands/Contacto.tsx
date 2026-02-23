import { useState } from 'react';

export default function Contacto() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    mensaje: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    // Simulación de envío
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ nombre: '', email: '', telefono: '', mensaje: '' });
      
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 3000);
    }, 1000);
  };

  return (
    <section id="contacto" className="py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">Contáctanos</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-medium">
            Estamos aquí para ayudarte. Envíanos un mensaje y te responderemos pronto.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Información de contacto */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Información de Contacto</h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="text-3xl">📍</div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                      Sucursales
                    </h4>
                    <div className="text-gray-600 text-sm space-y-3 font-medium">
                      <div>
                        <strong className="text-gray-900">Tienda Principal:</strong>
                        <br />
                        Barrio El Carmen, Calle 21 de agosto
                        <br />
                        <span className="text-[#007AFF]">+504 3283-4584</span> / 2773 24-29
                      </div>
                      <div>
                        <strong className="text-gray-900">Sucursal San Juan:</strong>
                        <br />
                        Barrio San Juan, una cuadra al este del parque
                        <br />
                        <span className="text-[#007AFF]">+504 3326-9197</span>
                      </div>
                      <div>
                        <strong className="text-gray-900">Sucursal Jesús de Otoro:</strong>
                        <br />
                        Barrio Santa Cruz, una cuadra al sur de la plaza Venuz
                        <br />
                        <span className="text-[#007AFF]">+504 8993-0563</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="text-3xl">📧</div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                      Email
                    </h4>
                    <p className="text-[#007AFF] font-semibold">contacto@ferreteriaelcarmen.com</p>
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-gray-200">
                  <a
                    href="#ubicaciones"
                    className="inline-flex items-center gap-2 text-[#007AFF] hover:text-[#0051D5] font-semibold transition-colors"
                  >
                    <span>Ver todas nuestras ubicaciones</span>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>

                <div className="flex items-start gap-4">
                  <div className="text-3xl">🕒</div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                      Horarios de Atención
                    </h4>
                    <div className="text-gray-600 text-sm space-y-3 font-medium">
                      <div>
                        <strong className="text-gray-900">Tienda Principal:</strong>
                        <br />
                        Lunes a Viernes: 07:30 a.m. - 06:00 p.m.
                        <br />
                        Sábado: 07:30 a.m. - 04:00 p.m.
                      </div>
                      <div>
                        <strong className="text-gray-900">Sucursal San Juan:</strong>
                        <br />
                        Lunes a Viernes: 07:30 a.m. - 05:00 p.m.
                        <br />
                        Sábado: 07:30 a.m. - 04:00 p.m.
                      </div>
                      <div>
                        <strong className="text-gray-900">Sucursal Jesús de Otoro:</strong>
                        <br />
                        Lunes a Viernes: 07:30 a.m. - 05:00 p.m.
                        <br />
                        Sábado: 07:30 a.m. - 04:00 p.m.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Formulario */}
          <div className="bg-white rounded-2xl p-8 shadow-2xl border border-gray-100">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="nombre" className="block text-sm font-semibold text-gray-900 mb-2">
                  Nombre Completo
                </label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#007AFF] focus:border-transparent outline-none transition-all bg-gray-50 hover:bg-white"
                  placeholder="Tu nombre"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#007AFF] focus:border-transparent outline-none transition-all bg-gray-50 hover:bg-white"
                  placeholder="tu@email.com"
                />
              </div>

              <div>
                <label htmlFor="telefono" className="block text-sm font-semibold text-gray-900 mb-2">
                  Teléfono
                </label>
                <input
                  type="tel"
                  id="telefono"
                  name="telefono"
                  value={formData.telefono}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#007AFF] focus:border-transparent outline-none transition-all bg-gray-50 hover:bg-white"
                  placeholder="+504 1234-5678"
                />
              </div>

              <div>
                <label htmlFor="mensaje" className="block text-sm font-semibold text-gray-900 mb-2">
                  Mensaje
                </label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  value={formData.mensaje}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#007AFF] focus:border-transparent outline-none transition-all resize-none bg-gray-50 hover:bg-white"
                  placeholder="¿En qué podemos ayudarte?"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-8 py-4 bg-[#007AFF] hover:bg-[#0051D5] text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
              </button>

              {submitStatus === 'success' && (
                <div className="p-4 bg-green-50 border border-green-200 text-green-700 rounded-xl font-medium">
                  ¡Mensaje enviado exitosamente! Te contactaremos pronto.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

