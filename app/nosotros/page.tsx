export default function NosotrosPage() {
  return (
    <main className="section light">
      <div className="container">
        <div className="section-head">
          <span className="badge">Nosotros</span>
          <h1>Especialistas en sensores automotrices</h1>
          <p>SensorPro Auto Parts nace para atender talleres, refaccionarias y distribuidores que necesitan sensores automotrices con identificación clara por OEM y compatibilidad.</p>
        </div>

        <div className="grid grid-3">
          <div className="card">
            <h3>Cobertura regional</h3>
            <p>Atención para USA, México y Centroamérica.</p>
          </div>
          <div className="card">
            <h3>Enfoque técnico</h3>
            <p>Clasificación por número OEM, sensor, marca, modelo, año y motor.</p>
          </div>
          <div className="card">
            <h3>Atención comercial</h3>
            <p>Soporte para compra individual, talleres y clientes mayoristas.</p>
          </div>
        </div>
      </div>
    </main>
  );
}
