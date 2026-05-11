import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ALPHA LOGISTICS | Agencia de Aduanas y Logística en El Salvador",
  description:
    "Alpha Logistics es tu agencia de aduanas y logística de confianza en El Salvador. Trámites DUCA, tránsitos de carga, courier internacional, zonas francas y más. Operaciones en Acajutla, SAL, DHL y FedEx.",
  keywords:
    "agencia de aduanas el salvador, tramites aduanales, DUCA, logistica de carga, courier internacional, zonas francas el salvador, puerto acajutla, aeropuerto sal, alpha logistics",
  openGraph: {
    title: "ALPHA LOGISTICS | Agencia de Aduanas y Logística",
    description:
      "Gestión aduanal rápida y confiable en El Salvador. Trámites DUCA, tránsitos de carga, courier y más.",
    type: "website",
    locale: "es_SV",
    siteName: "Alpha Logistics El Salvador",
  },
  twitter: {
    card: "summary_large_image",
    title: "ALPHA LOGISTICS | Aduanas y Logística El Salvador",
    description:
      "Tu agencia de confianza para trámites aduanales y logística en El Salvador.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: "https://alpha-logistics.sv",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;500;600;700;800;900&family=Source+Sans+3:wght@300;400;500;600;700&family=Roboto+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <meta name="theme-color" content="#03091f" />
        <meta name="geo.region" content="SV" />
        <meta name="geo.country" content="El Salvador" />
      </head>
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}
