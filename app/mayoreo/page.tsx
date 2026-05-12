export default function MayoreoPage() {
  return (
    <main className="section">
      <div className="container">
        <div className="section-head">
          <div className="section-title">
            <h1>Mayoreo para refaccionarias y talleres</h1>
            <p>Precios por volumen, soporte por OEM y atención rápida.</p>
          </div>
        </div>

        <div className="grid grid-3" style={{ marginBottom: 28 }}>
          {["Precios por volumen", "Soporte OEM", "Envíos regionales", "Cotizaciones rápidas", "Catálogo técnico", "Atención por WhatsApp"].map((item) => (
            <div className="category-card" key={item}>
              <h3>{item}</h3>
              <p>Solución pensada para compradores recurrentes.</p>
            </div>
          ))}
        </div>

        <form className="form">
          <input placeholder="Nombre de empresa" />
          <input placeholder="Nombre de contacto" />
          <input placeholder="WhatsApp" />
          <input placeholder="Correo" />
          <textarea rows={5} placeholder="¿Qué sensores necesitas?" />
          <button className="btn" type="button">Solicitar cuenta mayorista</button>
        </form>
      </div>
    </main>
  );
}
