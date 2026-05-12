@import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;500;600;700;800;900&family=Source+Sans+3:wght@300;400;500;600;700&family=Roboto+Mono:wght@400;500&display=swap');

@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --font-barlow: 'Barlow Condensed', sans-serif;
  --font-source-sans: 'Source Sans 3', sans-serif;
  --font-roboto-mono: 'Roboto Mono', monospace;

  --navy-950: #03091f;
  --navy-900: #061545;
  --navy-800: #0d2561;
  --navy-700: #1a3a7d;
  --navy-600: #2d5099;
  --navy-500: #3e66b3;
  --gold-500: #f59e0b;
  --gold-400: #fbbf24;
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: var(--font-source-sans);
  background-color: #ffffff;
  color: #1e293b;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* Scrollbar */
::-webkit-scrollbar {
  width: 6px;
}

::-webkit-scrollbar-track {
  background: #f1f5f9;
}

::-webkit-scrollbar-thumb {
  background: #1a3a7d;
  border-radius: 3px;
}

::-webkit-scrollbar-thumb:hover {
  background: #3e66b3;
}

/* Utilities */
@layer utilities {
  .animate-delay-100 {
    animation-delay: 100ms;
  }

  .animate-delay-200 {
    animation-delay: 200ms;
  }

  .animate-delay-300 {
    animation-delay: 300ms;
  }

  .animate-delay-400 {
    animation-delay: 400ms;
  }

  .animate-delay-500 {
    animation-delay: 500ms;
  }

  .animate-delay-600 {
    animation-delay: 600ms;
  }

  .animate-delay-700 {
    animation-delay: 700ms;
  }

  .animate-delay-800 {
    animation-delay: 800ms;
  }

  .opacity-0-init {
    opacity: 0;
  }

  .section-padding {
    @apply py-20 md:py-28;
  }

  .container-custom {
    @apply max-w-7xl mx-auto px-4 sm:px-6 lg:px-8;
  }

  .text-gradient {
    background: linear-gradient(
      135deg,
      #fbbf24 0%,
      #f59e0b 50%,
      #d97706 100%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .text-gradient-blue {
    background: linear-gradient(
      135deg,
      #7894c9 0%,
      #3e66b3 50%,
      #1a3a7d 100%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
}

/* Animations */
@keyframes countUp {
  from {
    opacity: 0;
    transform: translateY(10px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Reveal animations */
.reveal {
  opacity: 0;
  transform: translateY(40px);
  transition:
    opacity 0.7s ease,
    transform 0.7s ease;
}

.reveal.revealed {
  opacity: 1;
  transform: translateY(0);
}

.reveal-left {
  opacity: 0;
  transform: translateX(-40px);
  transition:
    opacity 0.7s ease,
    transform 0.7s ease;
}

.reveal-left.revealed {
  opacity: 1;
  transform: translateX(0);
}

.reveal-right {
  opacity: 0;
  transform: translateX(40px);
  transition:
    opacity 0.7s ease,
    transform 0.7s ease;
}

.reveal-right.revealed {
  opacity: 1;
  transform: translateX(0);
}

/* Stagger */
.stagger-children > *:nth-child(1) {
  transition-delay: 0ms;
}

.stagger-children > *:nth-child(2) {
  transition-delay: 100ms;
}

.stagger-children > *:nth-child(3) {
  transition-delay: 200ms;
}

.stagger-children > *:nth-child(4) {
  transition-delay: 300ms;
}

.stagger-children > *:nth-child(5) {
  transition-delay: 400ms;
}

.stagger-children > *:nth-child(6) {
  transition-delay: 500ms;
}

/* Hero */
.hero-bg {
  background-color: #03091f;
  background-image:
    radial-gradient(
      ellipse at 20% 50%,
      rgba(62, 102, 179, 0.15) 0%,
      transparent 50%
    ),
    radial-gradient(
      ellipse at 80% 20%,
      rgba(26, 58, 125, 0.2) 0%,
      transparent 50%
    ),
    linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px);

  background-size:
    auto,
    auto,
    50px 50px,
    50px 50px;
}

/* Navbar */
.navbar-glass {
  backdrop-filter: blur(20px) saturate(180%);
  -webkit-backdrop-filter: blur(20px) saturate(180%);
  background-color: rgba(3, 9, 31, 0.92);
  border-bottom: 1px solid rgba(255, 255, 255, 0.07);
}

/* Service Cards */
.service-card {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
}

.service-card::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(
    135deg,
    rgba(62, 102, 179, 0.06) 0%,
    rgba(26, 58, 125, 0.03) 100%
  );

  opacity: 0;
  transition: opacity 0.3s ease;
}

.service-card:hover::before {
  opacity: 1;
}

.service-card:hover {
  transform: translateY(-4px);

  box-shadow:
    0 20px 60px rgba(0, 0, 0, 0.12),
    0 4px 16px rgba(0, 0, 0, 0.06);

  border-color: rgba(62, 102, 179, 0.3) !important;
}

/* Pricing */
.pricing-row-featured {
  background: linear-gradient(
    135deg,
    rgba(26, 58, 125, 0.06) 0%,
    rgba(62, 102, 179, 0.04) 100%
  );

  border-left: 3px solid #3e66b3;
}

/* Buttons */
.btn-primary {
  @apply inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-gold-500 hover:bg-gold-400 text-navy-950 font-display font-bold text-base uppercase tracking-widest transition-all duration-200 rounded-none;

  letter-spacing: 0.12em;

  clip-path: polygon(
    0 0,
    calc(100% - 10px) 0,
    100% 10px,
    100% 100%,
    10px 100%,
    0 calc(100% - 10px)
  );
}

.btn-primary:hover {
  transform: translateY(-1px);
  box-shadow: 0 8px 24px rgba(245, 158, 11, 0.35);
}

.btn-outline {
  @apply inline-flex items-center justify-center gap-2 px-7 py-3.5 border-2 border-white text-white font-display font-semibold text-base uppercase tracking-widest transition-all duration-200;

  letter-spacing: 0.12em;

  clip-path: polygon(
    0 0,
    calc(100% - 10px) 0,
    100% 10px,
    100% 100%,
    10px 100%,
    0 calc(100% - 10px)
  );
}

.btn-outline:hover {
  @apply bg-white text-navy-950;
  transform: translateY(-1px);
}

.btn-navy {
  @apply inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-navy-700 hover:bg-navy-600 text-white font-display font-semibold text-base uppercase tracking-widest transition-all duration-200;

  letter-spacing: 0.12em;

  clip-path: polygon(
    0 0,
    calc(100% - 10px) 0,
    100% 10px,
    100% 100%,
    10px 100%,
    0 calc(100% - 10px)
  );
}

/* Diagonal */
.diagonal-bottom {
  clip-path: polygon(0 0, 100% 0, 100% calc(100% - 60px), 0 100%);
}

.diagonal-top {
  clip-path: polygon(0 60px, 100% 0, 100% 100%, 0 100%);
}

/* Form */
.form-input {
  @apply w-full px-4 py-3 bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-navy-500 focus:border-transparent transition-all duration-200 text-sm;
}

/* Stat */
.stat-border {
  border-left: 3px solid #f59e0b;
}
