export default function CalidadPage() {
  return (
    <main className="section light">
      <div className="container">
        <div className="section-head">
          <span className="badge">Calidad</span>
          <h1>Calidad, compatibilidad y soporte técnico</h1>
          <p>La prioridad es reducir errores de aplicación y ofrecer sensores confiables para reemplazo profesional.</p>
        </div>

        <div className="grid grid-3">
          {[
            "Compatibilidad OEM",
            "Productos verificados",
            "Garantía limitada",
            "Control de calidad",
            "Soporte técnico",
            "Identificación por aplicación"
          ].map((item) => (
            <div className="card" key={item}>
              <h3>{item}</h3>
              <p>Procesos enfocados en confirmar aplicación, tipo de sensor y número OEM antes de vender.</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
