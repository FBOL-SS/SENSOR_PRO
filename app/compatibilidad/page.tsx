"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { products } from "@/data/products";

export default function CompatibilidadPage() {
  const [query, setQuery] = useState("");
  const [brandFilter, setBrandFilter] = useState("");
  const [typeFilter, setTypeFilter] = useState("");
  const [hasSearched, setHasSearched] = useState(false);

  const filteredProducts = useMemo(() => {
    if (!hasSearched) return products;

    const search = query.trim().toLowerCase();

    return products.filter((product) => {
      const compatibilityText = product.compatibility
        ?.map((brand) => {
          const models = brand.models
            ?.map((m) => `${m.model} ${m.years} ${m.engine || ""}`)
            .join(" ");

          return `${brand.brand} ${models}`;
        })
        .join(" ")
        .toLowerCase();

      const productText = `
        ${product.name || ""}
        ${product.oem || ""}
        ${product.type || ""}
        ${product.handle || ""}
        ${compatibilityText || ""}
      `.toLowerCase();

      const matchesSearch = !search || productText.includes(search);

      const matchesBrand =
        !brandFilter ||
        product.compatibility?.some(
          (brand) => brand.brand.toLowerCase() === brandFilter.toLowerCase()
        );

      const matchesType =
        !typeFilter ||
        product.type?.toLowerCase() === typeFilter.toLowerCase();

      return matchesSearch && matchesBrand && matchesType;
    });
  }, [query, brandFilter, typeFilter, hasSearched]);

  function handleSearch(e) {
    e.preventDefault();
    setHasSearched(true);
  }

  function clearFilters() {
    setQuery("");
    setBrandFilter("");
    setTypeFilter("");
    setHasSearched(false);
  }

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
          <form className="filters" onSubmit={handleSearch}>
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="OEM, modelo o sensor..."
            />

            <select
              value={brandFilter}
              onChange={(e) => setBrandFilter(e.target.value)}
            >
              <option value="">Marca</option>
              <option value="Hyundai">Hyundai</option>
              <option value="Kia">Kia</option>
            </select>

            <select
              value={typeFilter}
              onChange={(e) => setTypeFilter(e.target.value)}
            >
              <option value="">Tipo</option>
              <option value="MAF">MAF</option>
              <option value="CMP">CMP</option>
              <option value="CKP">CKP</option>
              <option value="MAP">MAP</option>
              <option value="VSS">VSS</option>
              <option value="TPS">TPS</option>
              <option value="WTS">WTS</option>
            </select>

            <button className="btn" type="submit">
              Buscar
            </button>

            <button className="btn outline" type="button" onClick={clearFilters}>
              Limpiar
            </button>
          </form>
        </div>

        {hasSearched && (
          <p className="results-count">
            {filteredProducts.length === 1
              ? "1 resultado encontrado"
              : `${filteredProducts.length} resultados encontrados`}
          </p>
        )}

        {filteredProducts.length === 0 ? (
          <div className="empty-results">
            <h3>No encontramos compatibilidades</h3>
            <p>
              Prueba buscando por número OEM, modelo, marca, motor o tipo de
              sensor.
            </p>
          </div>
        ) : (
          <div className="grid grid-3">
            {filteredProducts.map((product) => (
              <article className="product-card" key={product.handle}>
                <img src={product.image} alt={product.name} />

                <span className="badge">{product.type}</span>

                <h3>{product.name}</h3>

                <div className="oem">
                  OEM: <strong>{product.oem}</strong>
                </div>

                <div className="stock">
                  ● {product.availability} · {product.stock} pcs
                </div>

                <div className="compat-list">
                  {product.compatibility.map((brand) => (
                    <div className="compat-brand" key={brand.brand}>
                      <strong>{brand.brand}</strong>
                      <ul>
                        {brand.models.slice(0, 5).map((m) => (
                          <li key={`${brand.brand}-${m.model}-${m.years}`}>
                            {m.model} {m.years}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                <div className="product-actions">
                  <Link className="btn" href={`/producto/${product.handle}`}>
                    Ver detalle
                  </Link>

                  <a
                    className="btn outline"
                    href={`https://wa.me/50376048817?text=Hola,%20quiero%20cotizar%20el%20sensor%20OEM%20${product.oem}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Cotizar
                  </a>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
