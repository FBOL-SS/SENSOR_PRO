"use client";

import { useEffect, useRef } from "react";

const services = [
  {
    id: "duca",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    title: "Trámites Aduanales DUCA",
    description: "Gestionamos el Documento Único Centroamericano (DUCA) para importaciones y exportaciones con precisión y cumplimiento normativo total ante la aduana de El Salvador.",
    features: ["DUCA-F, DUCA-D, DUCA-T", "Revisión documental", "Coordinación con DGA", "Seguimiento en tiempo real"],
    price: null,
    tag: "Core Service",
    accent: "navy",
  },
  {
    id: "puerto",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
      </svg>
    ),
    title: "Operaciones en Puerto",
    description: "Atención integral de carga marítima en el Puerto de Acajutla: descarga, almacenaje, desaduanaje y traslado coordinado con agentes portuarios.",
    features: ["Puerto de Acajutla", "Carga FCL y LCL", "Coordinación CEPA", "Supervisión de descarga"],
    price: "$125 USD",
    tag: "Acajutla",
    accent: "blue",
  },
  {
    id: "aerea",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
      </svg>
    ),
    title: "Logística Aérea",
    description: "Gestión completa de cargas aéreas en el Aeropuerto Internacional de El Salvador (SAL). Trámites express con tramitadores autorizados y carné oficial.",
    features: ["Aeropuerto SAL", "Carga general y especial", "Trámites express", "Courier empresarial"],
    price: "$90 USD",
    tag: "SAL",
    accent: "gold",
  },
  {
    id: "courier",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 10V7m0 10l-8-4V7" />
      </svg>
    ),
    title: "Courier Internacional",
    description: "Manejo profesional de paquetería internacional en centros DHL Santa Elena y FedEx Quezaltepeque. Liberación ágil de envíos con mínimos tiempos de espera.",
    features: ["DHL Santa Elena", "FedEx Quezaltepeque", "Paquetes personales y empresariales", "Gestión de impuestos"],
    price: "$75 USD",
    tag: "DHL / FedEx",
    accent: "navy",
  },
  {
    id: "zonas",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    title: "Zonas Francas",
    description: "Soporte logístico y aduanal especializado para empresas operando en zonas francas de El Salvador. Conocimiento profundo de la normativa ZONAMET.",
    features: ["Todas las zonas francas SV", "Régimen de zona franca", "Internaciones y salidas", "Asesoría normativa"],
    price: "Según operación",
    tag: "Zonas Francas",
    accent: "blue",
  },
  {
    id: "corporativo",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: "Soluciones Corporativas",
    description: "Paquetes mensuales a medida para empresas con alto volumen de trámites. Tramitador dedicado con carné oficial, atención prioritaria y tarifas preferenciales.",
    features: ["Tramitador asignado con carné", "Planes por volumen", "Atención prioritaria", "Reportes mensuales"],
    price: "Personalizado",
    tag: "Empresas",
    accent: "gold",
  },
];

export default function Services() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
          }
        });
      },
      { threshold: 0.1 }
    );

    const els = sectionRef.current?.querySelectorAll(".reveal, .reveal-left, .reveal-right");
    els?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const accentColors: Record<string, string> = {
    navy: "text-navy-600 bg-navy-50 border-navy-100",
    blue: "text-navy-500 bg-navy-50 border-navy-100",
    gold: "text-gold-600 bg-amber-50 border-amber-100",
  };

  const tagColors: Record<string, string> = {
    navy: "bg-navy-900 text-white",
    blue: "bg-navy-600 text-white",
    gold: "bg-gold-500 text-navy-950",
  };

  return (
    <section id="servicios" ref={sectionRef} className="section-padding bg-slate-50">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <span className="inline-block font-mono text-gold-600 text-xs tracking-[0.2em] uppercase mb-3">
            — Nuestros Servicios —
          </span>
          <h2 className="font-display font-800 text-navy-900 text-4xl md:text-5xl uppercase tracking-tight mb-4">
            Soluciones Aduanales{" "}
            <span className="text-gradient-blue">Integrales</span>
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto leading-relaxed">
            Cubrimos toda la cadena logística: desde la gestión documental hasta
            la entrega final, en todos los puntos operativos del país.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children">
          {services.map((service, i) => (
            <div
              key={service.id}
              className="service-card reveal bg-white border border-slate-200 p-8 flex flex-col"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div className={`p-3 rounded-none border ${accentColors[service.accent]}`}
                  style={{ clipPath: "polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))" }}>
                  {service.icon}
                </div>
                <span className={`text-[10px] font-mono font-500 tracking-widest uppercase px-3 py-1 ${tagColors[service.accent]}`}>
                  {service.tag}
                </span>
              </div>

              {/* Content */}
              <h3 className="font-display font-700 text-navy-900 text-xl uppercase tracking-wide mb-3">
                {service.title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-5 flex-1">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2 mb-6">
                {service.features.map((feat, fi) => (
                  <li key={fi} className="flex items-center gap-2 text-sm text-slate-700">
                    <span className="w-4 h-px bg-gold-500 flex-shrink-0" />
                    {feat}
                  </li>
                ))}
              </ul>

              {/* Price */}
              {service.price && (
                <div className="pt-4 border-t border-slate-100">
                  <div className="flex items-center justify-between">
                    <span className="text-xs uppercase tracking-widest text-slate-400 font-mono">
                      Desde
                    </span>
                    <span className="font-display font-800 text-navy-700 text-xl">
                      {service.price}
                    </span>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 text-center reveal">
          <p className="text-slate-500 text-sm mb-4">
            ¿Tu operación no encaja en las categorías anteriores?
          </p>
          <button
            onClick={() => document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" })}
            className="btn-navy text-sm"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            Consultar caso específico
          </button>
        </div>
      </div>
    </section>
  );
}
