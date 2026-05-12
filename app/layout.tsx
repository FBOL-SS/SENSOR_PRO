import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsappFloat from "@/components/WhatsAppFloat";

export const metadata: Metadata = {
  title: "SensorPro Auto Parts | Sensores Automotrices",
  description: "Sensores automotrices OEM y aftermarket para talleres, refaccionarias y distribuidores."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        <Header />
        {children}
        <Footer />
        <WhatsappFloat />
      </body>
    </html>
  );
}
