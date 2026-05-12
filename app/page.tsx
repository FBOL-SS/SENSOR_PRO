import Link from "next/link";
import { categories, products } from "@/data/products";
import ProductCard from "@/components/ProductCard";

export default function HomePage() {
  return (
    <main>
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <span className="eyebrow">OEM · Aftermarket · Wholesale</span>
            <h1>Sensores automotrices confiables para talleres, refaccionarias y distribuidores</h1>
            <p>Especialistas en sensores de cigüeñal, árbol de levas, ABS, oxígeno, MAP, MAF, TPS y más. Envíos a USA, México y Centroamérica.</p>
            <div className="actions">
              <Link className="cta" href="/catalogo">Ver catálogo</Link>
              <a className="btn-secondary" href="https://wa.me/50376048817" target="_blank">Cotizar por WhatsApp</a>
            </div>
          </div>
          <div className="visual-card">
            <div className="sensor-graphic">
              <img src="/sensor-placeholder.svg" alt="Sensor automotriz" />
            </div>
          </div>
        </div>
      </section>

      <section className="section light">
        <div className="container">
          <div className="section-head">
            <span className="badge">Categorías</span>
            <h2>Catálogo técnico para identificación rápida</h2>
            <p>Organizamos sensores por tipo, OEM y compatibilidad para reducir errores de aplicación.</p>
          </div>
          <div className="grid grid-4">
            {categories.map((cat) => (
              <div className="card" key={cat}>
                <h3>{cat}</h3>
                <p>Consulta compatibilidad por modelo, año, motor y número OEM.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="badge">Productos destacados</span>
            <h2>Sensores con compatibilidad</h2>
            <p>Ejemplo inicial de catálogo. Después metemos todo el CSV limpio.</p>
          </div>
          <div className="grid grid-3">
            {products.map((p) => <ProductCard key={p.handle} product={p} />)}
          </div>
        </div>
      </section>
    </main>
  );
}
