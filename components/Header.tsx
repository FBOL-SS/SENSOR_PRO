import Link from "next/link";

export default function Header() {
  return (
    <header className="header">
      <div className="container nav">
        <Link href="/" className="logo">
          Sensor<span>Pro</span>
          <small>Auto Parts</small>
        </Link>

        <nav className="navlinks">
          <Link href="/catalogo">Catálogo</Link>
          <Link href="/compatibilidad">Compatibilidad</Link>
          <Link href="/mayoreo">Mayoreo</Link>
          <Link href="/calidad">Calidad</Link>
          <Link href="/nosotros">Nosotros</Link>
          <Link href="/contacto">Contacto</Link>
          <a className="cta" href="https://wa.me/50376048817" target="_blank">WhatsApp</a>
        </nav>
      </div>
    </header>
  );
}
