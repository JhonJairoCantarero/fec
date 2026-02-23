export default function SobreNosotros() {
  return (
    <section id="sobre-nosotros" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-8">
              Sobre Nosotros
            </h2>
            <div className="space-y-5 text-lg text-gray-600 leading-relaxed font-medium">
              <p>
                <strong className="text-gray-900 font-bold">Ferretería El Carmen</strong> es
                una empresa familiar con años de experiencia en el sector ferretero, comprometida
                con brindar productos de calidad y un servicio excepcional a nuestros clientes.
              </p>
              <p>
                Nos especializamos en ofrecer una amplia gama de productos para construcción,
                herramientas, materiales eléctricos, fontanería y mucho más. Nuestro equipo está
                siempre dispuesto a ayudarte a encontrar exactamente lo que necesitas.
              </p>
              <p>
                Con precios competitivos y atención personalizada, nos hemos convertido en la
                ferretería de confianza de contratistas, constructores y particulares en la región.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-3 gap-6">
              <div className="text-center p-6 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-100 shadow-md hover:shadow-lg transition-all">
                <div className="text-4xl font-bold text-[#007AFF] mb-2">+15</div>
                <div className="text-sm text-gray-600 font-semibold">Años de Experiencia</div>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-100 shadow-md hover:shadow-lg transition-all">
                <div className="text-4xl font-bold text-[#007AFF] mb-2">+5000</div>
                <div className="text-sm text-gray-600 font-semibold">Productos</div>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-100 shadow-md hover:shadow-lg transition-all">
                <div className="text-4xl font-bold text-[#007AFF] mb-2">+1000</div>
                <div className="text-sm text-gray-600 font-semibold">Clientes Satisfechos</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-10 shadow-xl border border-gray-100">
              <div className="space-y-8">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#007AFF] to-[#0051D5] flex items-center justify-center shadow-lg">
                      <span className="text-2xl">🎯</span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      Nuestra Misión
                    </h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed font-medium">
                    Proporcionar productos de calidad y servicios excepcionales que satisfagan las
                    necesidades de nuestros clientes, contribuyendo al éxito de sus proyectos.
                  </p>
                </div>

                <div className="border-t border-gray-200 pt-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#007AFF] to-[#0051D5] flex items-center justify-center shadow-lg">
                      <span className="text-2xl">🚀</span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      Nuestra Visión
                    </h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed font-medium">
                    Ser la ferretería líder en la región, reconocida por nuestra calidad, servicio y
                    compromiso con la excelencia.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

