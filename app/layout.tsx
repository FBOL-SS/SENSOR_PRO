import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export const metadata: Metadata = {
  title: "AUTOLAB Auto Parts | Sensores Automotrices",
  description: "Tecnología OEM para diagnóstico automotriz."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        <Header />
        {children}
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
