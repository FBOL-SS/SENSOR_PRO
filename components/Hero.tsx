"use client";

import { useEffect, useRef } from "react";

const stats = [
  { value: "500+", label: "Trámites completados" },
  { value: "6", label: "Puntos operativos" },
  { value: "100%", label: "Cumplimiento aduanal" },
  { value: "24h", label: "Tiempo de respuesta" },
];

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const els = heroRef.current?.querySelectorAll(".hero-animate");
    els?.forEach((el, i) => {
      (el as HTMLElement).style.animationDelay = `${i * 120}ms`;
      el.classList.add("animate-fade-up");
    });
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="inicio"
      ref={heroRef}
      className="hero-bg relative min-h-screen flex flex-col justify-center overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Large accent circle */}
        <div className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full bg-navy-700/20 blur-[100px]" />
        <div className="absolute bottom-0 -left-32 w-[400px] h-[400px] rounded-full bg-navy-600/15 blur-[80px]" />
        {/* Gold accent line */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold-500 to-transparent opacity-60" />
        {/* Diagonal accent */}
        <div
          className="absolute right-0 top-0 h-full w-1/3 opacity-5"
          style={{
            background:
              "linear-gradient(135deg, transparent 40%, rgba(255,255,255,0.1) 41%, rgba(255,255,255,0.05) 42%, transparent 43%)",
          }}
        />
        {/* Floating port icon */}
        <div className="absolute right-8 md:right-24 top-1/2 -translate-y-1/2 opacity-5 hidden lg:block">
          <svg
            width="400"
            height="400"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="10" y="60" width="20" height="25" fill="white" rx="2" />
            <rect x="35" y="50" width="20" height="35" fill="white" rx="2" />
            <rect x="60" y="55" width="20" height="30" fill="white" rx="2" />
            <rect x="5" y="85" width="90" height="4" fill="white" rx="1" />
            <line
              x1="20"
              y1="60"
              x2="20"
              y2="30"
              stroke="white"
              strokeWidth="2"
            />
            <line
              x1="10"
              y1="35"
              x2="50"
              y2="20"
              stroke="white"
              strokeWidth="1.5"
            />
            <line
              x1="30"
              y1="35"
              x2="50"
              y2="20"
              stroke="white"
              strokeWidth="1.5"
            />
          </svg>
        </div>
      </div>

      <div className="container-custom relative z-10 pt-32 pb-24">
        <div className="max-w-4xl">
          {/* Badge */}
          <div
            className="hero-animate opacity-0 inline-flex items-center gap-2 mb-8 px-4 py-2 border border-gold-500/30 bg-gold-500/10"
            style={{ clipPath: "polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))" }}
          >
            <span className="w-2 h-2 rounded-full bg-gold-400 animate-pulse-slow" />
            <span className="font-mono text-gold-400 text-xs tracking-[0.2em] uppercase">
              Agencia Autorizada · El Salvador
            </span>
          </div>

          {/* Headline */}
          <h1 className="hero-animate opacity-0 font-display font-900 text-white leading-none mb-6">
            <span className="block text-[clamp(2.8rem,8vw,6rem)] uppercase tracking-tight">
              Gestión Aduanal
            </span>
            <span className="block text-[clamp(2.8rem,8vw,6rem)] uppercase tracking-tight">
              Rápida y{" "}
              <span className="text-gradient">Confiable</span>
            </span>
            <span className="block text-[clamp(2rem,5vw,3.5rem)] uppercase tracking-tight text-white/60 font-600 mt-2">
              en El Salvador
            </span>
          </h1>

          {/* Subtitle */}
          <p className="hero-animate opacity-0 text-white/70 text-lg md:text-xl max-w-2xl mb-10 leading-relaxed font-300">
            <strong className="text-white font-600">ALPHA LOGISTICS</strong>{" "}
            simplifica el comercio internacional, aduanas y logística de carga.
            Operamos en puertos, aeropuertos y zonas francas de todo El Salvador.
          </p>

          {/* CTA buttons */}
          <div className="hero-animate opacity-0 flex flex-col sm:flex-row gap-4 mb-16">
            <button
              onClick={() => scrollTo("contacto")}
              className="btn-primary text-sm"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
              </svg>
              Contáctanos
            </button>
            <button
              onClick={() => scrollTo("tarifas")}
              className="btn-outline text-sm"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                />
              </svg>
              Ver Tarifas
            </button>
          </div>

          {/* Stats bar */}
          <div className="hero-animate opacity-0 grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="stat-border pl-4 py-2"
              >
                <div className="font-display font-800 text-white text-2xl md:text-3xl leading-none mb-1">
                  {stat.value}
                </div>
                <div className="text-white/50 text-xs uppercase tracking-wider font-500">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => scrollTo("servicios")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30 hover:text-white/60 transition-colors duration-200"
      >
        <span className="text-xs tracking-widest uppercase font-mono">
          Scroll
        </span>
        <div className="w-px h-8 bg-gradient-to-b from-white/30 to-transparent animate-pulse" />
      </button>

      {/* Bottom diagonal cut */}
      <div
        className="absolute bottom-0 left-0 right-0 h-16 bg-white"
        style={{ clipPath: "polygon(0 100%, 100% 0, 100% 100%)" }}
      />
    </section>
  );
}
