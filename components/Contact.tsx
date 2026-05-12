"use client";

import { useEffect, useRef, useState } from "react";

export default function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [form, setForm] = useState({
    nombre: "",
    correo: "",
    empresa: "",
    telefono: "",
    servicio: "",
    mensaje: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("revealed");
        });
      },
      { threshold: 0.1 }
    );
    const els = sectionRef.current?.querySelectorAll(".reveal, .reveal-left, .reveal-right");
    els?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate form submission
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  const contactInfo = [
    {
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      ),
      label: "WhatsApp",
      value: "+503 0000-0000",
      link: "https://wa.me/50300000000?text=Hola%2C%20me%20gustaría%20obtener%20información%20sobre%20sus%20servicios.",
      color: "text-green-400 bg-green-900/20 border-green-700/30",
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      label: "Correo Electrónico",
      value: "info@alphalogistics.sv",
      link: "mailto:info@alphalogistics.sv",
      color: "text-blue-400 bg-blue-900/20 border-blue-700/30",
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      label: "Ubicación",
      value: "El Salvador, Centroamérica",
      link: "#",
      color: "text-gold-400 bg-amber-900/20 border-amber-700/30",
    },
  ];

  return (
    <section id="contacto" ref={sectionRef} className="section-padding bg-navy-950 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-navy-600 to-transparent" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-navy-700/15 rounded-full blur-[120px]" />
      </div>

      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="text-center mb-14 reveal">
          <span className="inline-block font-mono text-gold-400 text-xs tracking-[0.2em] uppercase mb-3">
            — Contáctanos —
          </span>
          <h2 className="font-display font-800 text-white text-4xl md:text-5xl uppercase tracking-tight mb-4">
            Hablemos de{" "}
            <span className="text-gradient">Tu Operación</span>
          </h2>
          <p className="text-white/60 text-lg max-w-xl mx-auto">
            Cuéntanos tu necesidad y te respondemos en menos de 2 horas hábiles.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10 items-start">
          {/* Contact info */}
          <div className="lg:col-span-2 space-y-4 reveal-left">
            {contactInfo.map((info, i) => (
              <a
                key={i}
                href={info.link}
                target={info.link.startsWith("http") ? "_blank" : "_self"}
                rel="noopener noreferrer"
                className={`flex items-center gap-4 p-5 border transition-all duration-200 hover:opacity-80 ${info.color}`}
              >
                <div className="flex-shrink-0">{info.icon}</div>
                <div>
                  <div className="text-white/40 text-xs font-mono uppercase tracking-wider mb-0.5">
                    {info.label}
                  </div>
                  <div className="text-white font-display font-600 text-sm uppercase tracking-wide">
                    {info.value}
                  </div>
                </div>
                <svg className="w-4 h-4 text-white/20 ml-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            ))}

            {/* Hours */}
            <div className="p-5 border border-navy-700 bg-navy-900/30">
              <div className="font-display font-700 text-white text-sm uppercase tracking-wide mb-3">
                Horario de Atención
              </div>
              <div className="space-y-2">
                {[
                  { days: "Lunes – Viernes", hours: "8:00 AM – 5:30 PM" },
                  { days: "Sábado", hours: "8:00 AM – 12:00 PM" },
                  { days: "Urgencias", hours: "24/7 vía WhatsApp" },
                ].map((h, i) => (
                  <div key={i} className="flex justify-between items-center text-sm">
                    <span className="text-white/50 font-mono text-xs">{h.days}</span>
                    <span className="text-white/80 font-500 text-xs">{h.hours}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Social proof */}
            <div className="p-5 border border-navy-700 bg-navy-900/30">
              <div className="flex items-center gap-3 mb-3">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-gold-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-white/60 text-sm italic leading-relaxed">
                "Alpha Logistics liberó nuestra carga en el SAL en tiempo récord. Servicio profesional y comunicación excelente."
              </p>
              <div className="text-white/30 text-xs mt-2 font-mono">— Cliente empresarial, San Salvador</div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3 reveal-right">
            {submitted ? (
              <div className="border border-green-700/40 bg-green-900/20 p-12 text-center">
                <div className="w-16 h-16 bg-green-500/20 rounded-none flex items-center justify-center mx-auto mb-6"
                  style={{ clipPath: "polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))" }}>
                  <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-display font-700 text-white text-2xl uppercase tracking-wide mb-3">
                  ¡Mensaje Recibido!
                </h3>
                <p className="text-white/60 text-sm leading-relaxed max-w-sm mx-auto">
                  Gracias por contactarnos. Un miembro de nuestro equipo se comunicará contigo en menos de 2 horas hábiles.
                </p>
                <div className="mt-6">
                  <a
                    href="https://wa.me/50300000000?text=Hola%2C%20acabo%20de%20enviar%20un%20formulario%20de%20contacto."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary text-xs inline-flex"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    Continuar por WhatsApp
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="border border-navy-700 bg-navy-900/30 p-8 md:p-10 space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block font-mono text-white/50 text-xs uppercase tracking-widest mb-2">
                      Nombre completo *
                    </label>
                    <input
                      type="text"
                      name="nombre"
                      value={form.nombre}
                      onChange={handleChange}
                      required
                      placeholder="Juan García"
                      className="form-input bg-navy-950/50 border-navy-700 text-white placeholder-white/20 focus:ring-navy-500"
                    />
                  </div>
                  <div>
                    <label className="block font-mono text-white/50 text-xs uppercase tracking-widest mb-2">
                      Correo electrónico *
                    </label>
                    <input
                      type="email"
                      name="correo"
                      value={form.correo}
                      onChange={handleChange}
                      required
                      placeholder="juan@empresa.com"
                      className="form-input bg-navy-950/50 border-navy-700 text-white placeholder-white/20 focus:ring-navy-500"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block font-mono text-white/50 text-xs uppercase tracking-widest mb-2">
                      Empresa
                    </label>
                    <input
                      type="text"
                      name="empresa"
                      value={form.empresa}
                      onChange={handleChange}
                      placeholder="Nombre de tu empresa"
                      className="form-input bg-navy-950/50 border-navy-700 text-white placeholder-white/20 focus:ring-navy-500"
                    />
                  </div>
                  <div>
                    <label className="block font-mono text-white/50 text-xs uppercase tracking-widest mb-2">
                      Teléfono / WhatsApp
                    </label>
                    <input
                      type="tel"
                      name="telefono"
                      value={form.telefono}
                      onChange={handleChange}
                      placeholder="+503 0000-0000"
                      className="form-input bg-navy-950/50 border-navy-700 text-white placeholder-white/20 focus:ring-navy-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-mono text-white/50 text-xs uppercase tracking-widest mb-2">
                    Servicio requerido
                  </label>
                  <select
                    name="servicio"
                    value={form.servicio}
                    onChange={handleChange}
                    className="form-input bg-navy-950/50 border-navy-700 text-white focus:ring-navy-500"
                  >
                    <option value="" className="bg-navy-950">Selecciona un servicio</option>
                    <option value="duca" className="bg-navy-950">Trámite Aduanal DUCA</option>
                    <option value="sal" className="bg-navy-950">Aeropuerto SAL ($90)</option>
                    <option value="dhl" className="bg-navy-950">DHL Santa Elena ($75)</option>
                    <option value="fedex" className="bg-navy-950">FedEx Quezaltepeque ($75)</option>
                    <option value="acajutla" className="bg-navy-950">Puerto de Acajutla ($125)</option>
                    <option value="zonas" className="bg-navy-950">Zonas Francas</option>
                    <option value="corporativo" className="bg-navy-950">Plan Corporativo Mensual</option>
                    <option value="otro" className="bg-navy-950">Otro / Consulta general</option>
                  </select>
                </div>

                <div>
                  <label className="block font-mono text-white/50 text-xs uppercase tracking-widest mb-2">
                    Mensaje *
                  </label>
                  <textarea
                    name="mensaje"
                    value={form.mensaje}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Cuéntanos los detalles de tu operación: tipo de carga, origen, destino, urgencia..."
                    className="form-input bg-navy-950/50 border-navy-700 text-white placeholder-white/20 focus:ring-navy-500 resize-none"
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-primary text-sm flex-1 justify-center disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <>
                        <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        Enviando...
                      </>
                    ) : (
                      <>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                        </svg>
                        Enviar Solicitud
                      </>
                    )}
                  </button>
                  <a
                    href="https://wa.me/50300000000?text=Hola%2C%20necesito%20información%20sobre%20sus%20servicios%20aduanales."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline text-sm flex-1 sm:flex-none justify-center border-green-600 text-green-400 hover:bg-green-700 hover:border-green-700 hover:text-white"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    WhatsApp
                  </a>
                </div>

                <p className="text-white/25 text-xs font-mono text-center">
                  Al enviar este formulario aceptas que nos comuniquemos contigo para atender tu solicitud.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
