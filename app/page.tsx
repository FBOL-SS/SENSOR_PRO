import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import { categories, products, inventorySummary } from "@/data/products";

export default function HomePage() {
  return (
    <main>
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <h1>Encuentra el sensor correcto para tu vehículo</h1>
            <p>Busca por número OEM, marca, modelo, año o tipo de sensor. Catálogo inicial con inventario real cargado.</p>
            <div className="actions">
              <Link className="btn accent" href="/compatibilidad">Buscar compatibilidad</Link>
              <Link className="btn" href="/catalogo">Ver catálogo</Link>
            </div>
          </div>

          <div className="hero-card">
            <form className="vehicle-finder">
              <h2>Busca por vehículo</h2>
              <select><option>Marca</option><option>Hyundai</option><option>Kia</option></select>
              <select><option>Modelo</option><option>Elantra</option><option>Rio</option><option>Accent</option></select>
              <select><option>Año</option><option>2010</option><option>2012</option><option>2016</option></select>
              <input placeholder="Número OEM opcional" />
              <Link className="btn" href="/compatibilidad">Encontrar sensor</Link>
            </form>
          </div>
        </div>
      </section>

      <section className="trust-row">
        <div className="container trust-grid">
          <div className="trust-item"><strong>{inventorySummary.totalProducts} SKUs</strong><span>Inventario cargado</span></div>
          <div className="trust-item"><strong>{inventorySummary.totalUnits} piezas</strong><span>Unidades registradas</span></div>
          <div className="trust-item"><strong>Hyundai / Kia</strong><span>Compatibilidad principal</span></div>
          <div className="trust-item"><strong>Soporte técnico</strong><span>Confirmamos aplicación</span></div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <div className="section-title">
              <h2>Comprar por categoría</h2>
              <p>Sensores organizados para encontrar rápido lo que necesitas.</p>
            </div>
            <Link className="btn outline" href="/catalogo">Ver todo</Link>
          </div>

          <div className="grid grid-4">
            {categories.map((cat) => (
              <Link className="category-card" href="/catalogo" key={cat.name}>
                <div className="category-icon">{cat.icon}</div>
                <h3>{cat.name}</h3>
                <p>{cat.label}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="banner">
            <div>
              <h2>Inventario real disponible</h2>
              <p>Ya cargamos {inventorySummary.totalProducts} productos del CSV con stock por SKU/OEM.</p>
            </div>
            <Link className="btn accent" href="/inventario">Ver inventario</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <div className="section-title">
              <h2>Productos destacados</h2>
              <p>Vista rápida de sensores con stock y compatibilidad.</p>
            </div>
          </div>

          <div className="grid grid-3">
            {products.slice(0, 9).map((p) => <ProductCard key={p.handle} product={p} />)}
          </div>
        </div>
      </section>
    </main>
  );
}
