import Link from "next/link";
import { products, inventorySummary } from "@/data/products";

export default function InventarioPage() {
  return (
    <main className="section">
      <div className="container">
        <div className="section-head">
          <div className="section-title">
            <h1>Inventario</h1>
            <p>Resumen real del inventario cargado desde el CSV.</p>
          </div>
        </div>

        <div className="stat-cards">
          <div className="stat-card"><strong>{inventorySummary.totalProducts}</strong><span>SKUs cargados</span></div>
          <div className="stat-card"><strong>{inventorySummary.totalUnits}</strong><span>Piezas en inventario</span></div>
          <div className="stat-card"><strong>{inventorySummary.availableProducts}</strong><span>SKUs disponibles</span></div>
        </div>

        <div className="compat-panel">
          <div className="filters">
            <input placeholder="Buscar SKU/OEM..." />
            <select><option>Tipo de sensor</option><option>MAF</option><option>CMP</option><option>CKP</option><option>MAP</option><option>VSS</option></select>
            <select><option>Marca</option><option>Hyundai</option><option>Kia</option></select>
            <button className="btn" type="button">Filtrar</button>
          </div>
        </div>

        <div style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", background: "white", border: "1px solid #e5e7eb" }}>
            <thead>
              <tr>
                <th style={{ padding: 12, textAlign: "left", borderBottom: "1px solid #e5e7eb" }}>OEM</th>
                <th style={{ padding: 12, textAlign: "left", borderBottom: "1px solid #e5e7eb" }}>Producto</th>
                <th style={{ padding: 12, textAlign: "left", borderBottom: "1px solid #e5e7eb" }}>Tipo</th>
                <th style={{ padding: 12, textAlign: "left", borderBottom: "1px solid #e5e7eb" }}>Stock</th>
                <th style={{ padding: 12, textAlign: "left", borderBottom: "1px solid #e5e7eb" }}>Precio</th>
                <th style={{ padding: 12, textAlign: "left", borderBottom: "1px solid #e5e7eb" }}>Acción</th>
              </tr>
            </thead>
            <tbody>
              {products.map((p) => (
                <tr key={p.handle}>
                  <td style={{ padding: 12, borderBottom: "1px solid #e5e7eb", fontWeight: 800 }}>{p.oem}</td>
                  <td style={{ padding: 12, borderBottom: "1px solid #e5e7eb" }}>{p.name}</td>
                  <td style={{ padding: 12, borderBottom: "1px solid #e5e7eb" }}>{p.type}</td>
                  <td style={{ padding: 12, borderBottom: "1px solid #e5e7eb" }}>{p.stock} pcs</td>
                  <td style={{ padding: 12, borderBottom: "1px solid #e5e7eb", color: "#D71920", fontWeight: 900 }}>{p.price}</td>
                  <td style={{ padding: 12, borderBottom: "1px solid #e5e7eb" }}>
                    <Link className="btn" href={`/producto/${p.handle}`}>Ver</Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}
