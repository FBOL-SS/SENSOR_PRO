export default function CalidadPage() {
  return (
    <main className="section">
      <div className="container">
        <div className="section-head">
          <div className="section-title">
            <h1>Calidad y compatibilidad</h1>
            <p>El objetivo es vender el sensor correcto desde la primera vez.</p>
          </div>
        </div>

        <div className="grid grid-3">
          {["Compatibilidad OEM", "Productos verificados", "Garantía limitada", "Control de calidad", "Soporte técnico", "Aplicación correcta"].map((item) => (
            <div className="category-card" key={item}>
              <h3>{item}</h3>
              <p>Validamos información técnica para reducir errores de compra.</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
