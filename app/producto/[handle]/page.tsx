import { products } from "@/data/products";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return products.map((product) => ({ handle: product.handle }));
}

export default function ProductPage({ params }: { params: { handle: string } }) {
  const product = products.find((p) => p.handle === params.handle);
  if (!product) notFound();

  return (
    <main className="section">
      <div className="container product-detail">
        <div className="detail-image">
          <img src={product.image} alt={product.name} />
        </div>

        <div className="detail-box">
          <span className="badge">{product.type}</span>
          <h1>{product.name}</h1>
          <div className="oem">OEM: <strong>{product.oem}</strong></div>
          <div className="stock">● {product.availability}</div>
          <div className="price">{product.price}</div>
          <p>{product.description}</p>

          <div className="actions">
            <a className="btn" href={`https://wa.me/50376048817?text=Hola,%20quiero%20cotizar%20el%20sensor%20OEM%20${product.oem}`} target="_blank">Cotizar por WhatsApp</a>
          </div>

          <h2>Compatibilidad</h2>
          <div className="compat-list">
            {product.compatibility.map((brand) => (
              <div className="compat-brand" key={brand.brand}>
                <strong>{brand.brand}</strong>
                <ul>
                  {brand.models.map((m) => (
                    <li key={`${brand.brand}-${m.model}-${m.years}`}>{m.model} · {m.years} {m.engine ? `· ${m.engine}` : ""}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
