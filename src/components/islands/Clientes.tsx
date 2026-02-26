import { useState } from 'react';
import { supabase } from '../../lib/supabase';

interface FormData {
  nombre: string;
  empresa: string;
  rtn: string;
  telefono: string;
  correo: string;
  ciudad: string;
  tipo_negocio: string;
  volumen_mensual: string;
  mensaje: string;
}

const TIPOS_NEGOCIO = [
  'Ferretería',
  'Construcción / Contratista',
  'Industria / Manufactura',
  'Comercio general',
  'Proyecto habitacional',
  'Gobierno / Institución',
  'Otro',
];

const VOLUMENES = [
  'Menos de L 5,000 mensual',
  'L 5,000 – L 15,000 mensual',
  'L 15,000 – L 50,000 mensual',
  'L 50,000 – L 100,000 mensual',
  'Más de L 100,000 mensual',
];

const BENEFICIOS = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    titulo: 'Precios Preferenciales',
    desc: 'Accede a tarifas exclusivas de mayoreo con descuentos escalonados según tu volumen de compra.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
    ),
    titulo: 'Crédito Disponible',
    desc: 'Líneas de crédito flexibles adaptadas a las necesidades de tu negocio con plazos convenientes.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    titulo: 'Asesor Dedicado',
    desc: 'Un ejecutivo de ventas asignado exclusivamente a tu cuenta para atender tus pedidos y consultas.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
    titulo: 'Reserva de Inventario',
    desc: 'Prioridad en disponibilidad de productos y reservas anticipadas para tus proyectos.',
  },
];

const REQUISITOS = [
  'Empresa o negocio legalmente constituido en Honduras',
  'RTN activo y vigente',
  'Compra mínima mensual de L 5,000',
  'Referencia comercial (requerida para crédito)',
  'Identificación del representante legal',
];

export default function Clientes() {
  const [form, setForm] = useState<FormData>({
    nombre: '',
    empresa: '',
    rtn: '',
    telefono: '',
    correo: '',
    ciudad: '',
    tipo_negocio: '',
    volumen_mensual: '',
    mensaje: '',
  });
  const [enviando, setEnviando] = useState(false);
  const [estado, setEstado] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setEnviando(true);
    try {
      const { error } = await supabase.from('solicitudes_mayoreo').insert([{
        ...form,
        fecha: new Date().toISOString(),
      }]);
      if (error) throw error;
      setEstado('success');
      setForm({ nombre: '', empresa: '', rtn: '', telefono: '', correo: '', ciudad: '', tipo_negocio: '', volumen_mensual: '', mensaje: '' });
    } catch {
      setEstado('error');
    } finally {
      setEnviando(false);
    }
  };

  const inputClass = "w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-sm text-gray-800 dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:border-[#4A5D23] focus:bg-white dark:focus:bg-gray-700 focus:ring-2 focus:ring-[#4A5D23]/10 transition-all";
  const labelClass = "block text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wide mb-1.5";

  return (
    <div className="min-h-screen bg-[#F5F5F7] dark:bg-gray-950">

      {/* ── HERO CON VIDEO DE FONDO ── */}
      <div className="relative h-screen overflow-hidden">
        {/* Video de fondo */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          src="/clientes.mp4"
        />
        {/* Overlay oscuro */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/40 to-black/65"></div>

        {/* Contenido sobre el video */}
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-2 bg-white/15 text-white text-xs font-semibold px-4 py-2 rounded-full mb-6 backdrop-blur-sm border border-white/20">
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                Programa Exclusivo de Mayoreo
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6 drop-shadow-2xl">
                Crece con<br />
                <span className="text-[#8CB043]">Ferretería El Carmen</span>
              </h1>
              <p className="text-white/85 text-lg leading-relaxed mb-10 max-w-xl drop-shadow-lg">
                Únete a nuestra red de clientes de mayoreo y accede a precios preferenciales, crédito y un asesor dedicado para tu negocio.
              </p>

              {/* Stats */}
              <div className="flex flex-wrap gap-8">
                {[
                  { valor: '+1,500', label: 'Clientes activos' },
                  { valor: '+28', label: 'Años de experiencia' },
                  { valor: '+15,000', label: 'Productos disponibles' },
                ].map(s => (
                  <div key={s.label}>
                    <p className="text-3xl font-extrabold text-white drop-shadow-lg">{s.valor}</p>
                    <p className="text-white/60 text-sm mt-0.5">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── BENEFICIOS ── */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <span className="text-xs font-semibold text-[#4A5D23] tracking-widest uppercase">¿Por qué unirte?</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mt-2">Beneficios del programa</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {BENEFICIOS.map(b => (
            <div key={b.titulo} className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-100 dark:border-gray-700 hover:border-[#4A5D23]/30 hover:shadow-lg transition-all duration-200 group">
              <div className="w-14 h-14 rounded-2xl bg-[#4A5D23]/8 flex items-center justify-center text-[#4A5D23] mb-4 group-hover:bg-[#4A5D23] group-hover:text-white transition-all duration-200">
                {b.icon}
              </div>
              <h3 className="font-bold text-gray-900 dark:text-white mb-2">{b.titulo}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── FORMULARIO + REQUISITOS ── */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">

          {/* Requisitos */}
          <div className="lg:col-span-2">
            <div className="bg-white dark:bg-gray-800 rounded-3xl border border-gray-100 dark:border-gray-700 p-8 sticky top-28">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Requisitos</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">Para ser parte del programa de mayoreo necesitas:</p>
              <ul className="space-y-4">
                {REQUISITOS.map((req, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[#4A5D23]/10 flex items-center justify-center mt-0.5">
                      <svg className="w-3 h-3 text-[#4A5D23]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{req}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 p-4 bg-[#4A5D23]/5 rounded-2xl border border-[#4A5D23]/15">
                <p className="text-xs font-semibold text-[#4A5D23] mb-1">¿Tienes dudas?</p>
                <p className="text-xs text-gray-600 dark:text-gray-400 mb-3">Contáctanos directamente y un asesor te guiará.</p>
                <a
                  href="tel:+50498025990"
                  className="flex items-center gap-2 text-sm font-semibold text-[#4A5D23] hover:text-[#6C7F3B] transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  9802-5990
                </a>
              </div>
            </div>
          </div>

          {/* Formulario */}
          <div className="lg:col-span-3">
            <div className="bg-white dark:bg-gray-800 rounded-3xl border border-gray-100 dark:border-gray-700 p-8 shadow-sm">
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Solicitud de cuenta mayorista</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Completa el formulario y nos pondremos en contacto contigo en menos de 24 horas.</p>
              </div>

              {estado === 'success' ? (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <div className="w-20 h-20 rounded-full bg-[#4A5D23]/10 flex items-center justify-center mb-6">
                    <svg className="w-10 h-10 text-[#4A5D23]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">¡Solicitud enviada!</h4>
                  <p className="text-gray-500 dark:text-gray-400 text-sm max-w-sm">
                    Hemos recibido tu solicitud. Un asesor se pondrá en contacto contigo a la brevedad.
                  </p>
                  <button
                    onClick={() => setEstado('idle')}
                    className="mt-8 px-6 py-2.5 border border-[#4A5D23] text-[#4A5D23] text-sm font-semibold rounded-xl hover:bg-[#4A5D23] hover:text-white transition-all"
                  >
                    Enviar otra solicitud
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Nombre y Empresa */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className={labelClass}>Nombre completo <span className="text-red-400">*</span></label>
                      <input
                        type="text"
                        name="nombre"
                        value={form.nombre}
                        onChange={handleChange}
                        placeholder="Juan Pérez"
                        required
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label className={labelClass}>Empresa / Negocio <span className="text-red-400">*</span></label>
                      <input
                        type="text"
                        name="empresa"
                        value={form.empresa}
                        onChange={handleChange}
                        placeholder="Mi Empresa S.A."
                        required
                        className={inputClass}
                      />
                    </div>
                  </div>

                  {/* RTN y Teléfono */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className={labelClass}>RTN <span className="text-red-400">*</span></label>
                      <input
                        type="text"
                        name="rtn"
                        value={form.rtn}
                        onChange={handleChange}
                        placeholder="0501-0000-000000"
                        required
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label className={labelClass}>Teléfono <span className="text-red-400">*</span></label>
                      <input
                        type="tel"
                        name="telefono"
                        value={form.telefono}
                        onChange={handleChange}
                        placeholder="+504 0000-0000"
                        required
                        className={inputClass}
                      />
                    </div>
                  </div>

                  {/* Correo y Ciudad */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className={labelClass}>Correo electrónico <span className="text-red-400">*</span></label>
                      <input
                        type="email"
                        name="correo"
                        value={form.correo}
                        onChange={handleChange}
                        placeholder="correo@empresa.com"
                        required
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label className={labelClass}>Ciudad / Departamento <span className="text-red-400">*</span></label>
                      <input
                        type="text"
                        name="ciudad"
                        value={form.ciudad}
                        onChange={handleChange}
                        placeholder="Siguatepeque, Comayagua"
                        required
                        className={inputClass}
                      />
                    </div>
                  </div>

                  {/* Tipo de negocio */}
                  <div>
                    <label className={labelClass}>Tipo de negocio <span className="text-red-400">*</span></label>
                    <select
                      name="tipo_negocio"
                      value={form.tipo_negocio}
                      onChange={handleChange}
                      required
                      className={inputClass}
                    >
                      <option value="">Selecciona una opción</option>
                      {TIPOS_NEGOCIO.map(t => <option key={t} value={t}>{t}</option>)}
                    </select>
                  </div>

                  {/* Volumen mensual */}
                  <div>
                    <label className={labelClass}>Volumen de compra mensual estimado <span className="text-red-400">*</span></label>
                    <select
                      name="volumen_mensual"
                      value={form.volumen_mensual}
                      onChange={handleChange}
                      required
                      className={inputClass}
                    >
                      <option value="">Selecciona un rango</option>
                      {VOLUMENES.map(v => <option key={v} value={v}>{v}</option>)}
                    </select>
                  </div>

                  {/* Mensaje */}
                  <div>
                    <label className={labelClass}>Mensaje adicional <span className="text-gray-300 font-normal">(opcional)</span></label>
                    <textarea
                      name="mensaje"
                      value={form.mensaje}
                      onChange={handleChange}
                      placeholder="Cuéntanos sobre tu negocio, productos de interés o cualquier consulta..."
                      rows={4}
                      className={inputClass + ' resize-none'}
                    />
                  </div>

                  {estado === 'error' && (
                    <div className="flex items-center gap-3 p-4 bg-red-50 dark:bg-red-900/30 border border-red-100 dark:border-red-800 rounded-xl text-sm text-red-600 dark:text-red-400">
                      <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Ocurrió un error al enviar. Por favor intenta de nuevo o contáctanos directamente.
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={enviando}
                    className="w-full py-4 bg-[#4A5D23] hover:bg-[#6C7F3B] disabled:opacity-60 text-white font-bold rounded-2xl transition-all duration-200 shadow-md hover:shadow-lg flex items-center justify-center gap-2 text-sm"
                  >
                    {enviando ? (
                      <>
                        <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        Enviando solicitud...
                      </>
                    ) : (
                      <>
                        Enviar solicitud
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </>
                    )}
                  </button>

                  <p className="text-xs text-gray-400 text-center">
                    Al enviar esta solicitud aceptas que nos pongamos en contacto contigo para completar el proceso de registro.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
