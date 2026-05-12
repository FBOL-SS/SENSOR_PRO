import Link from "next/link";
import { products } from "@/data/products";

export default function CompatibilidadPage() {
  return (
    <main className="section">
      <div className="container">
        <div className="section-head">
          <div className="section-title">
            <h1>Buscar compatibilidad</h1>
            <p>Encuentra sensores por OEM, marca, modelo, año, motor o tipo.</p>
          </div>
        </div>

        <div className="compat-panel">
          <div className="filters">
            <input placeholder="OEM, modelo o sensor..." />
            <select><option>Marca</option><option>Hyundai</option><option>Kia</option></select>
            <select><option>Tipo</option><option>MAF</option><option>CMP</option><option>CKP</option><option>MAP</option><option>VSS</option><option>TPS</option><option>WTS</option></select>
            <button className="btn" type="button">Buscar</button>
          </div>
        </div>

        <div className="grid grid-3">
          {products.map((product) => (
            <article className="product-card" key={product.handle}>
              <img src={product.image} alt={product.name} />
              <span className="badge">{product.type}</span>
              <h3>{product.name}</h3>
              <div className="oem">OEM: <strong>{product.oem}</strong></div>
              <div className="stock">● {product.availability} · {product.stock} pcs</div>
              <div className="compat-list">
                {product.compatibility.map((brand) => (
                  <div className="compat-brand" key={brand.brand}>
                    <strong>{brand.brand}</strong>
                    <ul>
                      {brand.models.slice(0, 5).map((m) => (
                        <li key={`${brand.brand}-${m.model}-${m.years}`}>{m.model} {m.years}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              <div className="product-actions">
                <Link className="btn" href={`/producto/${product.handle}`}>Ver detalle</Link>
                <a className="btn outline" href={`https://wa.me/50376048817?text=Hola,%20quiero%20cotizar%20el%20sensor%20OEM%20${product.oem}`} target="_blank">Cotizar</a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
