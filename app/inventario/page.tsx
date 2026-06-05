"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { products, inventorySummary } from "@/data/products";

export default function InventarioPage() {
  const [query, setQuery] = useState("");
  const [typeFilter, setTypeFilter] = useState("");
  const [brandFilter, setBrandFilter] = useState("");

  const filteredProducts = useMemo(() => {
    const search = query.trim().toLowerCase();

    return products.filter((p) => {
      const compatibilityText = p.compatibility
        ?.map((brand) => {
          const models = brand.models
            ?.map((m) => `${m.model} ${m.years} ${m.engine || ""}`)
            .join(" ");

          return `${brand.brand} ${models}`;
        })
        .join(" ")
        .toLowerCase();

      const fullText = `
        ${p.oem || ""}
        ${p.name || ""}
        ${p.type || ""}
        ${p.handle || ""}
        ${compatibilityText || ""}
      `.toLowerCase();

      const matchesSearch = !search || fullText.includes(search);

      const matchesType =
        !typeFilter || p.type?.toLowerCase() === typeFilter.toLowerCase();

      const matchesBrand =
        !brandFilter ||
        p.compatibility?.some(
          (brand) => brand.brand.toLowerCase() === brandFilter.toLowerCase()
        );

      return matchesSearch && matchesType && matchesBrand;
    });
  }, [query, typeFilter, brandFilter]);

  function clearFilters() {
    setQuery("");
    setTypeFilter("");
    setBrandFilter("");
  }

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
          <div className="stat-card">
            <strong>{inventorySummary.totalProducts}</strong>
            <span>SKUs cargados</span>
          </div>

          <div className="stat-card">
            <strong>{inventorySummary.totalUnits}</strong>
            <span>Piezas en inventario</span>
          </div>

          <div className="stat-card">
            <strong>{inventorySummary.availableProducts}</strong>
            <span>SKUs disponibles</span>
          </div>
        </div>

        <div className="compat-panel">
          <div className="filters">
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Buscar SKU/OEM, producto, modelo..."
            />

            <select
              value={typeFilter}
              onChange={(e) => setTypeFilter(e.target.value)}
            >
              <option value="">Tipo de sensor</option>
              <option value="MAF">MAF</option>
              <option value="CMP">CMP</option>
              <option value="CKP">CKP</option>
              <option value="MAP">MAP</option>
              <option value="VSS">VSS</option>
              <option value="TPS">TPS</option>
              <option value="WTS">WTS</option>
            </select>

            <select
              value={brandFilter}
              onChange={(e) => setBrandFilter(e.target.value)}
            >
              <option value="">Marca</option>
              <option value="Hyundai">Hyundai</option>
              <option value="Kia">Kia</option>
            </select>

            <button className="btn outline" type="button" onClick={clearFilters}>
              Limpiar
            </button>
          </div>
        </div>

        <p className="results-count">
          {filteredProducts.length === 1
            ? "1 producto encontrado"
            : `${filteredProducts.length} productos encontrados`}
        </p>

        <div style={{ overflowX: "auto" }}>
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              background: "white",
              border: "1px solid #e5e7eb",
            }}
          >
            <thead>
              <tr>
                <th style={thStyle}>OEM</th>
                <th style={thStyle}>Producto</th>
                <th style={thStyle}>Tipo</th>
                <th style={thStyle}>Stock</th>
                <th style={thStyle}>Precio</th>
                <th style={thStyle}>Acción</th>
              </tr>
            </thead>

            <tbody>
              {filteredProducts.length === 0 ? (
                <tr>
                  <td style={tdStyle} colSpan="6">
                    No encontramos productos con esos filtros.
                  </td>
                </tr>
              ) : (
                filteredProducts.map((p) => (
                  <tr key={p.handle}>
                    <td style={{ ...tdStyle, fontWeight: 800 }}>{p.oem}</td>
                    <td style={tdStyle}>{p.name}</td>
                    <td style={tdStyle}>{p.type}</td>
                    <td style={tdStyle}>{p.stock} pcs</td>
                    <td
                      style={{
                        ...tdStyle,
                        color: "#005bbb",
                        fontWeight: 900,
                      }}
                    >
                      {p.price}
                    </td>
                    <td style={tdStyle}>
                      <Link className="btn" href={`/producto/${p.handle}`}>
                        Ver
                      </Link>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}

const thStyle = {
  padding: 12,
  textAlign: "left",
  borderBottom: "1px solid #e5e7eb",
};

const tdStyle = {
  padding: 12,
  borderBottom: "1px solid #e5e7eb",
};
