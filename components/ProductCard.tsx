import Link from "next/link";
import { SensorProduct } from "@/data/products";

export default function ProductCard({ product }: { product: SensorProduct }) {
  return (
    <article className="product-card">
      <img src={product.image} alt={product.name} />
      <div style={{ marginTop: 12 }}>
        <span className="badge">{product.type}</span>
      </div>
      <h3>{product.name}</h3>
      <div className="oem">OEM: <strong>{product.oem}</strong></div>
      <div className="stock">● {product.availability} · {product.stock} pcs</div>
      <div className="price">{product.price}</div>
      <p>{product.description}</p>
      <div className="product-actions">
        <Link className="btn" href={`/producto/${product.handle}`}>Ver detalle</Link>
        <a className="btn outline" href={`https://wa.me/50376048817?text=Hola,%20quiero%20cotizar%20el%20sensor%20OEM%20${product.oem}`} target="_blank">
          Cotizar
        </a>
      </div>
    </article>
  );
}
