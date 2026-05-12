"use client";

import { useEffect, useRef } from "react";

const pricingRows = [
  {
    punto: "Aeropuerto Internacional SAL",
    descripcion: "Gestión y trámite aduanal de carga aérea. Incluye gestión documental y envío.",
    precio: "$90",
    badge: "Popular",
    badgeColor: "bg-gold-500 text-navy-950",
    highlight: false,
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
      </svg>
    ),
  },
  {
    punto: "DHL Santa Elena",
    descripcion: "Liberación y trámite de paquetería courier en instalaciones DHL.",
    precio: "$75",
    badge: null,
    badgeColor: "",
    highlight: false,
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 10V7m0 10l-8-4V7" />
      </svg>
    ),
  },
  {
    punto: "FedEx Quezaltepeque",
    descripcion: "Liberación y trámite de paquetería courier en instalaciones FedEx.",
    precio: "$75",
    badge: null,
    badgeColor: "",
    highlight: false,
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 10V7m0 10l-8-4V7" />
      </svg>
    ),
  },
  {
    punto: "Puerto de Acajutla",
    descripcion: "Gestión aduanal de carga marítima FCL/LCL. Incluye coordinación portuaria.",
    precio: "$125",
    badge: "Marítimo",
    badgeColor: "bg-navy-700 text-white",
    highlight: true,
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
      </svg>
    ),
  },
  {
    punto: "Paquetes Mensuales Corporativos",
    descripcion: "Plan personalizado según volumen mensual de trámites. Incluye tramitador dedicado y atención prioritaria.",
    precio: "A consultar",
    badge: "Corporativo",
    badgeColor: "bg-navy-900 text-gold-400",
    highlight: false,
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
];

const includes = [
  "Gestión documental completa",
  "Tramitador con carné oficial",
  "Coordinación con DGA",
  "Seguimiento del trámite",
  "Comunicación directa por WhatsApp",
];

export default function Pricing() {
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
    <section id="tarifas" ref={sectionRef} className="section-padding bg-navy-950 relative overflow-hidden">
      {/* BG decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-navy-600 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-navy-600 to-transparent" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
        <div className="absolute -top-40 right-0 w-96 h-96 bg-navy-700/20 rounded-full blur-[100px]" />
      </div>

      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="text-center mb-14 reveal">
          <span className="inline-block font-mono text-gold-400 text-xs tracking-[0.2em] uppercase mb-3">
            — Tarifario Oficial —
          </span>
          <h2 className="font-display font-800 text-white text-4xl md:text-5xl uppercase tracking-tight mb-4">
            Precios Claros,{" "}
            <span className="text-gradient">Sin Sorpresas</span>
          </h2>
          <p className="text-white/60 text-lg max-w-xl mx-auto">
            Tarifas fijas por punto operativo. Lo que ves es lo que pagas.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {/* Pricing table */}
          <div className="lg:col-span-2 reveal-left">
            {/* Desktop table */}
            <div className="hidden md:block overflow-hidden border border-navy-700">
              <table className="w-full">
                <thead>
                  <tr className="bg-navy-800 border-b border-navy-600">
                    <th className="text-left px-6 py-4 font-mono text-gold-400 text-xs tracking-[0.15em] uppercase">
                      Punto Operativo
                    </th>
                    <th className="text-left px-6 py-4 font-mono text-gold-400 text-xs tracking-[0.15em] uppercase hidden lg:table-cell">
                      Descripción
                    </th>
                    <th className="text-right px-6 py-4 font-mono text-gold-400 text-xs tracking-[0.15em] uppercase">
                      Tarifa / Trámite
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {pricingRows.map((row, i) => (
                    <tr
                      key={i}
                      className={`border-b border-navy-800 transition-colors duration-200 hover:bg-navy-800/50 ${
                        row.highlight ? "bg-navy-800/30 border-l-2 border-l-navy-500" : ""
                      }`}
                    >
                      <td className="px-6 py-5">
                        <div className="flex items-center gap-3">
                          <span className="text-navy-400">{row.icon}</span>
                          <div>
                            <div className="font-display font-600 text-white text-sm uppercase tracking-wide">
                              {row.punto}
                            </div>
                            {row.badge && (
                              <span className={`inline-block mt-1 text-[10px] font-mono font-500 tracking-widest uppercase px-2 py-0.5 ${row.badgeColor}`}>
                                {row.badge}
                              </span>
                            )}
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-5 hidden lg:table-cell">
                        <p className="text-white/50 text-sm leading-relaxed">{row.descripcion}</p>
                      </td>
                      <td className="px-6 py-5 text-right">
                        <span className="font-display font-800 text-gold-400 text-2xl">
                          {row.precio}
                        </span>
                        {row.precio !== "A consultar" && (
                          <span className="text-white/40 text-xs ml-1 font-mono">USD</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile cards */}
            <div className="md:hidden space-y-3">
              {pricingRows.map((row, i) => (
                <div key={i} className={`p-5 border ${row.highlight ? "border-navy-500 bg-navy-800/50" : "border-navy-700 bg-navy-900/50"}`}>
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div className="flex items-center gap-3">
                      <span className="text-navy-400">{row.icon}</span>
                      <span className="font-display font-700 text-white text-sm uppercase tracking-wide">{row.punto}</span>
                    </div>
                    {row.badge && (
                      <span className={`flex-shrink-0 text-[10px] font-mono tracking-widest uppercase px-2 py-0.5 ${row.badgeColor}`}>
                        {row.badge}
                      </span>
                    )}
                  </div>
                  <p className="text-white/50 text-xs mb-3">{row.descripcion}</p>
                  <div className="flex items-center justify-end gap-1">
                    <span className="font-display font-800 text-gold-400 text-3xl">{row.precio}</span>
                    {row.precio !== "A consultar" && (
                      <span className="text-white/40 text-sm font-mono">USD</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <p className="mt-4 text-white/30 text-xs font-mono text-center">
              * Precios por trámite. Pueden variar según complejidad de la operación.
            </p>
          </div>

          {/* What's included */}
          <div className="reveal-right">
            <div className="border border-navy-700 bg-navy-900/50 p-8">
              <div className="w-10 h-10 bg-gold-500 flex items-center justify-center mb-6"
                style={{ clipPath: "polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))" }}>
                <svg className="w-5 h-5 text-navy-950" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="font-display font-700 text-white text-xl uppercase tracking-wide mb-2">
                Cada trámite incluye
              </h3>
              <p className="text-white/50 text-sm mb-6">
                Servicio integral sin costos ocultos.
              </p>
              <ul className="space-y-3 mb-8">
                {includes.map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-white/70">
                    <span className="w-5 h-5 flex-shrink-0 flex items-center justify-center bg-navy-700 rounded-none">
                      <svg className="w-3 h-3 text-gold-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <button
                onClick={() => document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" })}
                className="btn-primary w-full justify-center text-xs"
              >
                Solicitar cotización
              </button>
            </div>

            {/* WhatsApp quick */}
            <a
              href="https://wa.me/50300000000?text=Hola%2C%20necesito%20una%20cotización%20para%20un%20trámite%20aduanal."
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 flex items-center gap-3 p-4 border border-green-700/40 bg-green-900/20 hover:bg-green-900/30 transition-colors duration-200 group"
            >
              <svg className="w-8 h-8 text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              <div>
                <div className="font-display font-700 text-green-300 text-sm uppercase tracking-wide group-hover:text-green-200 transition-colors">
                  Cotización por WhatsApp
                </div>
                <div className="text-white/40 text-xs">Respuesta en menos de 1 hora</div>
              </div>
              <svg className="w-4 h-4 text-white/30 ml-auto group-hover:text-white/50 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
