"use client";

import { useEffect, useRef } from "react";

const benefits = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
      </svg>
    ),
    title: "Tramitador Dedicado",
    desc: "Agente asignado exclusivamente a tu empresa con carné oficial de la Dirección General de Aduanas.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Atención Prioritaria",
    desc: "Tus trámites pasan a la cabeza de la cola. Tiempos de resolución expresos para no frenar tu operación.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: "Tarifas por Volumen",
    desc: "Mientras más trámites procesas, menor es el costo unitario. Planes escalables según tu operación.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    title: "Reportes Mensuales",
    desc: "Dashboard de tus operaciones: trámites completados, tiempos, costos y documentación centralizada.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Cobertura Total",
    desc: "Todos los puntos operativos bajo un solo contrato: SAL, DHL, FedEx, Puerto Acajutla y zonas francas.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    title: "Soporte 24/7",
    desc: "Canal directo con tu tramitador asignado vía WhatsApp para consultas urgentes fuera de horario.",
  },
];

const targetProfiles = [
  "Importadores y exportadores frecuentes",
  "Empresas de e-commerce internacional",
  "Empresas en zonas francas",
  "Distribuidoras y comercializadoras",
  "Industria manufacturera",
  "Cadenas de retail con proveedores internacionales",
];

export default function Corporate() {
  const sectionRef = useRef<HTMLDivElement>(null);

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

  return (
    <section id="corporativo" ref={sectionRef} className="section-padding bg-white relative overflow-hidden">
      {/* BG accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-50/70 pointer-events-none" 
        style={{ clipPath: "polygon(20% 0, 100% 0, 100% 100%, 0% 100%)" }} />

      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="reveal-left">
            <span className="inline-block font-mono text-gold-600 text-xs tracking-[0.2em] uppercase mb-3">
              — Soluciones Corporativas —
            </span>
            <h2 className="font-display font-800 text-navy-900 text-4xl md:text-5xl uppercase tracking-tight mb-6">
              Planes Mensuales{" "}
              <br />
              <span className="text-gradient-blue">Para Empresas</span>
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              Si tu empresa realiza trámites aduanales de forma regular, nuestros 
              paquetes mensuales te ofrecen mayor eficiencia, costos controlados 
              y un tramitador exclusivo que conoce tu operación.
            </p>
            <div className="space-y-3 mb-8">
              {targetProfiles.map((profile, i) => (
                <div key={i} className="flex items-center gap-3 text-slate-700 text-sm">
                  <div className="w-1.5 h-1.5 bg-gold-500 flex-shrink-0 rotate-45" />
                  {profile}
                </div>
              ))}
            </div>
            <button
              onClick={() => document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" })}
              className="btn-primary text-sm"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
              </svg>
              Solicitar plan corporativo
            </button>
          </div>

          {/* Featured benefit card */}
          <div className="reveal-right">
            <div className="relative bg-navy-900 p-8 md:p-10 overflow-hidden">
              {/* Decorative */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-navy-700/30 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-gold-500/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-2xl" />
              
              <div className="relative">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gold-500 flex items-center justify-center flex-shrink-0"
                    style={{ clipPath: "polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))" }}>
                    <svg className="w-6 h-6 text-navy-950" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-display font-800 text-white text-lg uppercase tracking-wide">
                      Tramitador con Carné Oficial
                    </div>
                    <div className="text-gold-400 text-xs font-mono tracking-wider">
                      Exclusivo para plan corporativo
                    </div>
                  </div>
                </div>
                
                <p className="text-white/70 text-sm leading-relaxed mb-6">
                  Tu tramitador asignado posee carné oficial acreditado por la 
                  <strong className="text-white"> Dirección General de Aduanas (DGA)</strong> de El Salvador, 
                  garantizando legitimidad y acceso autorizado en todos los puntos operativos.
                </p>

                <div className="space-y-3 border-t border-navy-700 pt-6">
                  {[
                    "Acceso autorizado a recintos aduanales",
                    "Reconocido ante autoridades portuarias y aeroportuarias",
                    "Capacitado en normativa aduanal vigente",
                    "Disponible para atención a medida",
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 text-sm text-white/60">
                      <svg className="w-4 h-4 text-gold-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits grid */}
        <div className="reveal">
          <h3 className="font-display font-700 text-navy-900 text-2xl uppercase tracking-wide text-center mb-10">
            Todo lo que incluye tu plan
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 stagger-children">
            {benefits.map((benefit, i) => (
              <div
                key={i}
                className="reveal group flex gap-4 p-6 border border-slate-200 bg-white hover:border-navy-300 hover:shadow-card-hover transition-all duration-300"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center bg-navy-50 border border-navy-100 text-navy-600 group-hover:bg-navy-700 group-hover:text-white group-hover:border-navy-700 transition-all duration-300"
                  style={{ clipPath: "polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px))" }}>
                  {benefit.icon}
                </div>
                <div>
                  <h4 className="font-display font-700 text-navy-900 text-base uppercase tracking-wide mb-1">
                    {benefit.title}
                  </h4>
                  <p className="text-slate-500 text-sm leading-relaxed">{benefit.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA banner */}
        <div className="mt-14 reveal bg-navy-900 p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-gradient-to-l from-navy-700/20 to-transparent" />
          </div>
          <div className="relative">
            <div className="font-display font-800 text-white text-2xl md:text-3xl uppercase tracking-tight mb-2">
              ¿Listo para optimizar tus operaciones?
            </div>
            <p className="text-white/50 text-sm">
              Cotización sin compromiso. Respuesta en menos de 2 horas hábiles.
            </p>
          </div>
          <div className="relative flex gap-3 flex-shrink-0">
            <button
              onClick={() => document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" })}
              className="btn-primary text-sm"
            >
              Solicitar cotización
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
