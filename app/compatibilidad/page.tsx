import Link from "next/link";
import { products } from "@/data/products";

export default function CompatibilidadPage() {
  return (
    <main className="section light">
      <div className="container">
        <div className="section-head">
          <span className="badge">Compatibilidad</span>
          <h1>Buscador de compatibilidad</h1>
          <p>Busca por OEM, marca, modelo, año, motor o tipo de sensor. Esta versión usa datos frontend listos para escalar con el CSV completo.</p>
        </div>

        <div className="search-panel">
          <input placeholder="Buscar por OEM, modelo o sensor..." />
          <select>
            <option>Marca</option>
            <option>Hyundai</option>
            <option>Kia</option>
          </select>
          <select>
            <option>Tipo de sensor</option>
            <option>MAF</option>
            <option>CMP</option>
            <option>CKP</option>
          </select>
        </div>

        <div className="grid grid-3">
          {products.map((product) => (
            <article className="card product-card" key={product.handle}>
              <img src={product.image} alt={product.name} />
              <span className="badge">{product.type}</span>
              <h3>{product.name}</h3>
              <p><strong>OEM:</strong> {product.oem}</p>

              <div className="compat-block">
                {product.compatibility.map((brand) => (
                  <div className="compat-brand" key={brand.brand}>
                    <strong>{brand.brand}</strong>
                    <ul>
                      {brand.models.slice(0, 3).map((m) => (
                        <li key={`${brand.brand}-${m.model}`}>{m.model} {m.years} {m.engine ? `· ${m.engine}` : ""}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="actions">
                <Link className="cta" href={`/producto/${product.handle}`}>Ver detalle</Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
