export default function MayoreoPage() {
  return (
    <main className="section light">
      <div className="container">
        <div className="section-head">
          <span className="badge">Mayoreo</span>
          <h1>Programa para refaccionarias, talleres y distribuidores</h1>
          <p>Precios por volumen, soporte por OEM y abastecimiento recurrente para negocios automotrices.</p>
        </div>

        <div className="grid grid-3">
          {[
            "Precios por volumen",
            "Soporte para identificación OEM",
            "Envíos a USA, México y Centroamérica",
            "Catálogo por compatibilidad",
            "Atención por WhatsApp",
            "Cotizaciones rápidas"
          ].map((item) => (
            <div className="card" key={item}>
              <h3>{item}</h3>
              <p>Solución pensada para operaciones que necesitan comprar con claridad, velocidad y control.</p>
            </div>
          ))}
        </div>

        <section style={{ marginTop: "42px" }}>
          <h2>Solicitar cuenta mayorista</h2>
          <form className="form">
            <input placeholder="Nombre de empresa" />
            <input placeholder="Nombre de contacto" />
            <input placeholder="WhatsApp" />
            <input placeholder="Correo" />
            <textarea placeholder="Cuéntanos qué sensores necesitas" rows={5}></textarea>
            <button className="cta" type="button">Enviar solicitud</button>
          </form>
        </section>
      </div>
    </main>
  );
}
