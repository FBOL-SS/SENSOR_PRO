# ALPHA LOGISTICS — Sitio Web Oficial

Sitio web corporativo para **Alpha Logistics**, agencia de aduanas y logística en El Salvador.

Construido con **Next.js 14**, **Tailwind CSS** y TypeScript.

---

## 🚀 Despliegue Rápido

### Requisitos
- Node.js 18.17 o superior
- npm / yarn / pnpm

### Instalación local

```bash
# 1. Clonar el repositorio
git clone https://github.com/tu-usuario/alpha-logistics.git
cd alpha-logistics

# 2. Instalar dependencias
npm install

# 3. Correr en desarrollo
npm run dev
```

Abrir [http://localhost:3000](http://localhost:3000)

### Build de producción

```bash
npm run build
npm start
```

---

## 📦 Subir a GitHub

```bash
# Inicializar repositorio (si no existe)
git init
git add .
git commit -m "feat: sitio web Alpha Logistics v1.0"

# Conectar a GitHub
git remote add origin https://github.com/tu-usuario/alpha-logistics.git
git branch -M main
git push -u origin main
```

---

## ☁️ Desplegar en Vercel

### Opción A — Desde la CLI

```bash
# Instalar Vercel CLI
npm i -g vercel

# Desplegar
vercel

# Para producción
vercel --prod
```

### Opción B — Desde el Dashboard de Vercel

1. Ir a [vercel.com/new](https://vercel.com/new)
2. Importar el repositorio de GitHub
3. Vercel detecta Next.js automáticamente
4. Click en **Deploy**

> El proyecto está listo para zero-config deployment en Vercel.

---

## ⚙️ Variables de entorno (opcional)

Crear `.env.local` en la raíz para configurar el formulario de contacto:

```env
# Para integrar con un servicio de email (e.g. Resend, SendGrid)
RESEND_API_KEY=your_api_key

# Número de WhatsApp (formato internacional sin +)
NEXT_PUBLIC_WHATSAPP_NUMBER=503XXXXXXXX

# Email de contacto
NEXT_PUBLIC_CONTACT_EMAIL=info@alphalogistics.sv
```

---

## 📁 Estructura del Proyecto

```
alpha-logistics/
├── app/
│   ├── globals.css        # Estilos globales + custom utilities
│   ├── layout.tsx         # Root layout con metadata SEO
│   └── page.tsx           # Página principal
├── components/
│   ├── Navbar.tsx         # Barra de navegación responsiva
│   ├── Hero.tsx           # Sección hero principal
│   ├── Services.tsx       # Grid de servicios
│   ├── Pricing.tsx        # Tabla de tarifas
│   ├── Corporate.tsx      # Planes corporativos
│   ├── About.tsx          # Nosotros y valores
│   ├── Contact.tsx        # Formulario de contacto
│   ├── Footer.tsx         # Pie de página
│   └── WhatsAppFloat.tsx  # Botón flotante WhatsApp
├── public/
│   └── favicon.svg
├── tailwind.config.ts
├── next.config.js
└── tsconfig.json
```

---

## 🎨 Paleta de Colores

| Variable | Hex | Uso |
|----------|-----|-----|
| `navy-950` | `#03091f` | Fondo oscuro principal |
| `navy-700` | `#1a3a7d` | Elementos navy |
| `navy-500` | `#3e66b3` | Acentos azules |
| `gold-500` | `#f59e0b` | CTA y acentos dorados |
| `white` | `#ffffff` | Fondo claro |
| `slate-50` | `#f8fafc` | Fondo secundario |

---

## 📋 Secciones del Sitio

| ID | Sección | Descripción |
|----|---------|-------------|
| `#inicio` | Hero | Headline principal + stats |
| `#servicios` | Servicios | 6 tarjetas de servicios |
| `#tarifas` | Tarifas | Tabla de precios oficial |
| `#corporativo` | Corporativo | Planes para empresas |
| `#nosotros` | Nosotros | Misión y valores |
| `#contacto` | Contacto | Formulario + WhatsApp |

---

## 🔧 Personalización

### Cambiar número de WhatsApp
Buscar `50300000000` en todos los archivos y reemplazar con el número real.

### Cambiar correo de contacto
Buscar `info@alphalogistics.sv` y reemplazar.

### Cambiar tarifas
Editar `components/Pricing.tsx` → array `pricingRows`.

### Integrar formulario de contacto
El formulario actualmente simula el envío. Para integrar con un backend real:
- **Resend** (recomendado): [resend.com](https://resend.com)
- **Formspree**: [formspree.io](https://formspree.io)
- **EmailJS**: [emailjs.com](https://emailjs.com)

---

## 📈 SEO

El sitio incluye:
- Metadata completa (title, description, keywords)
- Open Graph tags
- Twitter Card
- Canonical URL
- Schema markup ready
- `robots: index, follow`
- `geo.region: SV` para El Salvador

---

Desarrollado para **Alpha Logistics** — El Salvador 🇸🇻
