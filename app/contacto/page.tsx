export default function ContactoPage() {
  return (
    <main className="section">
      <div className="container">
        <div className="section-head">
          <div className="section-title">
            <h1>Contacto</h1>
            <p>Mándanos el OEM, vehículo, año y motor para confirmar compatibilidad.</p>
          </div>
        </div>

        <form className="form">
          <input placeholder="Nombre" />
          <input placeholder="Empresa o taller" />
          <input placeholder="WhatsApp" />
          <input placeholder="Correo" />
          <textarea rows={6} placeholder="Describe el sensor que necesitas" />
          <button className="btn" type="button">Enviar solicitud</button>
        </form>
      </div>
    </main>
  );
}
