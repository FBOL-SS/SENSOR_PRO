import Link from "next/link";
import { SensorProduct } from "@/data/products";

export default function ProductCard({ product }: { product: SensorProduct }) {
  return (
    <article className="card product-card">
      <img src={product.image} alt={product.name} />
      <span className="badge">{product.type}</span>
      <h3>{product.name}</h3>
      <p><strong>OEM:</strong> {product.oem}</p>
      <p>{product.description}</p>
      <div className="actions">
        <Link className="cta" href={`/producto/${product.handle}`}>Ver detalle</Link>
        <a className="btn-secondary" href={`https://wa.me/50376048817?text=Hola,%20quiero%20cotizar%20el%20sensor%20OEM%20${product.oem}`} target="_blank">
          Cotizar
        </a>
      </div>
    </article>
  );
}
