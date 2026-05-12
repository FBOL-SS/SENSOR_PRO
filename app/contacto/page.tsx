export default function ContactoPage() {
  return (
    <main className="section light">
      <div className="container">
        <div className="section-head">
          <span className="badge">Contacto</span>
          <h1>Solicita cotización</h1>
          <p>Envíanos el OEM, modelo del vehículo, año y motor para confirmar compatibilidad.</p>
        </div>

        <form className="form">
          <input placeholder="Nombre" />
          <input placeholder="Empresa o taller" />
          <input placeholder="WhatsApp" />
          <input placeholder="Correo" />
          <textarea placeholder="OEM, vehículo, año, motor o sensor que necesitas" rows={6}></textarea>
          <button className="cta" type="button">Enviar solicitud</button>
        </form>

        <div style={{ marginTop: "38px" }} className="card">
          <h3>Cobertura</h3>
          <p>USA · México · Guatemala · El Salvador · Honduras · Nicaragua</p>
          <p><strong>WhatsApp:</strong> +503 7604 8817</p>
          <p><strong>Email:</strong> ventas@sensorpro.com</p>
        </div>
      </div>
    </main>
  );
}
