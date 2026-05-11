"use client";

import { useEffect, useRef } from "react";

const values = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Rapidez",
    desc: "Procesos optimizados para minimizar los tiempos en aduana y que tu carga fluya sin interrupciones.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Cumplimiento",
    desc: "Operamos con estricto apego a la normativa aduanal de El Salvador y los tratados comerciales vigentes.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: "Eficiencia",
    desc: "Cada recurso, cada gestión y cada comunicación está orientada a la máxima eficiencia operativa.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: "Experiencia",
    desc: "Equipo de tramitadores certificados con amplio conocimiento del sistema aduanal salvadoreño.",
  },
];

const operativePoints = [
  { name: "Puerto de Acajutla", type: "Marítimo", code: "ACJ" },
  { name: "Aeropuerto Intl. SAL", type: "Aéreo", code: "SAL" },
  { name: "DHL Santa Elena", type: "Courier", code: "DHL" },
  { name: "FedEx Quezaltepeque", type: "Courier", code: "FDX" },
  { name: "Zonas Francas SV", type: "Zona Franca", code: "ZF+" },
];

export default function About() {
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
    <section id="nosotros" ref={sectionRef} className="section-padding bg-slate-50 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <span className="inline-block font-mono text-gold-600 text-xs tracking-[0.2em] uppercase mb-3">
            — Quiénes Somos —
          </span>
          <h2 className="font-display font-800 text-navy-900 text-4xl md:text-5xl uppercase tracking-tight mb-4">
            Nosotros
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Mission text */}
          <div className="reveal-left">
            <div className="border-l-4 border-gold-500 pl-6 mb-8">
              <h3 className="font-display font-700 text-navy-900 text-2xl uppercase tracking-wide mb-3">
                Nuestra Misión
              </h3>
              <p className="text-slate-600 text-lg leading-relaxed">
                Facilitar el comercio internacional de El Salvador mediante una 
                gestión aduanal precisa, ágil y totalmente apegada a la ley, 
                siendo el aliado estratégico que nuestros clientes necesitan 
                para crecer sin fronteras.
              </p>
            </div>

            <p className="text-slate-600 leading-relaxed mb-6">
              <strong className="text-navy-900">ALPHA LOGISTICS</strong> nació de la necesidad de un servicio aduanal 
              moderno, transparente y eficiente en El Salvador. Entendemos que 
              cada carga retenida en aduana representa pérdidas reales para tu 
              negocio, por eso trabajamos con la urgencia y precisión que el 
              comercio internacional exige.
            </p>

            <p className="text-slate-600 leading-relaxed mb-8">
              Nuestro equipo de tramitadores certificados opera en todos los 
              puntos de entrada del país: desde el Puerto de Acajutla hasta el 
              Aeropuerto Internacional SAL, pasando por los principales centros 
              de distribución courier y todas las zonas francas activas.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Trámites completados", value: "500+" },
                { label: "Años de experiencia", value: "5+" },
                { label: "Empresas atendidas", value: "80+" },
                { label: "Puntos operativos", value: "6" },
              ].map((stat, i) => (
                <div key={i} className="bg-white border border-slate-200 p-4 stat-border">
                  <div className="font-display font-800 text-navy-700 text-2xl">{stat.value}</div>
                  <div className="text-slate-500 text-xs uppercase tracking-wider font-mono">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Operative points visual */}
          <div className="reveal-right">
            <div className="bg-navy-950 p-8 relative overflow-hidden">
              <div className="absolute inset-0 pointer-events-none"
                style={{
                  backgroundImage: "linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)",
                  backgroundSize: "30px 30px",
                }} />
              
              <div className="relative">
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="font-mono text-green-400 text-xs tracking-widest uppercase">Puntos Operativos Activos</span>
                </div>

                {/* El Salvador map placeholder */}
                <div className="relative bg-navy-900/60 border border-navy-700 p-6 mb-6 flex items-center justify-center min-h-[160px]">
                  <div className="text-center">
                    <svg className="w-16 h-16 text-navy-600 mx-auto mb-3" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                    </svg>
                    <div className="font-display font-700 text-white/40 text-sm uppercase tracking-wider">
                      El Salvador
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  {operativePoints.map((point, i) => (
                    <div key={i} className="flex items-center gap-4 py-2.5 border-b border-navy-800 last:border-0">
                      <div className="w-10 h-7 bg-navy-700 flex items-center justify-center flex-shrink-0">
                        <span className="font-mono text-gold-400 text-[10px] font-500">{point.code}</span>
                      </div>
                      <div className="flex-1">
                        <div className="font-display font-600 text-white text-sm uppercase tracking-wide leading-none">{point.name}</div>
                        <div className="text-white/40 text-xs mt-0.5 font-mono">{point.type}</div>
                      </div>
                      <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="reveal">
          <h3 className="font-display font-700 text-navy-900 text-2xl uppercase tracking-wide text-center mb-10">
            Nuestros Valores
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 stagger-children">
            {values.map((value, i) => (
              <div
                key={i}
                className="reveal text-center p-8 bg-white border border-slate-200 hover:border-navy-300 hover:shadow-card transition-all duration-300 group"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="w-12 h-12 mx-auto mb-5 flex items-center justify-center bg-navy-50 border border-navy-100 text-navy-600 group-hover:bg-navy-700 group-hover:text-white group-hover:border-navy-700 transition-all duration-300"
                  style={{ clipPath: "polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))" }}>
                  {value.icon}
                </div>
                <h4 className="font-display font-700 text-navy-900 text-lg uppercase tracking-wide mb-2">{value.title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
