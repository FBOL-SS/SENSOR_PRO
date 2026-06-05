import BrandLogo from "@/components/BrandLogo";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">

        <div>
          <div className="logo footer-logo" aria-label="AUTOLAB">
            <img src="/autolab-logo.svg" alt="AUTOLAB" />
          </div>

          <p>
            Soluciones automotrices especializadas en sensores, actuadores y
            componentes electrónicos OEM para el mercado de América.
          </p>
        </div>

        <div>
          <h3>Compra fácil</h3>
          <p>
            Busca por OEM, marca, modelo, año, motor o tipo de sensor para
            encontrar exactamente lo que necesitas.
          </p>
        </div>

        <div>
          <h3>Contacto</h3>
          <p>WhatsApp: +503 7604 8817</p>
          <p>ventas@autolab.com</p>
        </div>

      </div>
    </footer>
  );
}
