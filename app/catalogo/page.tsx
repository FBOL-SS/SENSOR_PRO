import ProductCard from "@/components/ProductCard";
import { categories, products } from "@/data/products";

export default function CatalogoPage() {
  return (
    <main className="section">
      <div className="container">
        <div className="section-head">
          <div className="section-title">
            <h1>Catálogo de sensores</h1>
            <p>Compra por categoría o revisa los productos disponibles.</p>
          </div>
        </div>

        <div className="grid grid-4" style={{ marginBottom: 32 }}>
          {categories.map((cat) => (
            <div className="category-card" key={cat.name}>
              <div className="category-icon">{cat.icon}</div>
              <h3>{cat.name}</h3>
              <p>{cat.label}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-3">
          {products.map((p) => <ProductCard key={p.handle} product={p} />)}
        </div>
      </div>
    </main>
  );
}
