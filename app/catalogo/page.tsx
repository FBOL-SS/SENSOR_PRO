import Link from "next/link";
import { categories, products } from "@/data/products";
import ProductCard from "@/components/ProductCard";

export default function CatalogoPage() {
  return (
    <main>
      <section className="section light">
        <div className="container">
          <div className="section-head">
            <span className="badge">Catálogo</span>
            <h1>Catálogo de sensores automotrices</h1>
            <p>Explora categorías y productos disponibles para talleres, refaccionarias y distribuidores.</p>
          </div>
          <div className="grid grid-4">
            {categories.map((cat) => (
              <div className="card" key={cat}>
                <h3>{cat}</h3>
                <p>Aplicaciones OEM y aftermarket para diferentes marcas y motores.</p>
                <Link className="btn-secondary" href="/compatibilidad">Ver compatibilidad</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>Productos</h2>
          <div className="grid grid-3">
            {products.map((p) => <ProductCard key={p.handle} product={p} />)}
          </div>
        </div>
      </section>
    </main>
  );
}
