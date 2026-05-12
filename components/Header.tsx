import Link from "next/link";

export default function Header() {
  return (
    <>
      <div className="top-strip">
        <div className="container top-strip-inner">
          <span>Envíos a USA, México y Centroamérica</span>
          <span>Atención por WhatsApp: +503 7604 8817</span>
        </div>
      </div>

      <header className="header">
        <div className="container nav">
          <Link href="/" className="logo">
            Sensor<span>Pro</span>
            <small>Auto Parts</small>
          </Link>

          <form className="search-main">
            <input placeholder="Buscar por OEM, sensor, marca o modelo..." />
            <button type="button">BUSCAR</button>
          </form>

          <a className="nav-action" href="https://wa.me/50376048817" target="_blank">
            Cotizar ahora
          </a>
        </div>

        <div className="menu-bar">
          <div className="container menu-links">
            <Link href="/catalogo">Catálogo</Link>
            <Link href="/compatibilidad">Buscar compatibilidad</Link>
            <Link href="/inventario">Inventario</Link>
            <Link href="/mayoreo">Mayoreo</Link>
            <Link href="/calidad">Calidad</Link>
            <Link href="/nosotros">Nosotros</Link>
            <Link href="/contacto">Contacto</Link>
          </div>
        </div>
      </header>
    </>
  );
}
