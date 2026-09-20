/* Asian Art Ceramic centralized business configuration */
window.AAC_CONFIG = Object.freeze({
  whatsapp: "917833882248",
  phoneDisplay: "+91 78338 82248"
});

* {
  box-sizing: border-box;
}

:root {
  --bg: #f6f1ea;
  --panel: #fffdfb;
  --card: #f2eadf;
  --ink: #1f1c1a;
  --muted: #595250;
  --line: rgba(31, 28, 26, 0.12);
  --primary: #b78349;
  --primary-dark: #8b602d;
  --accent: #e9dcc5;
  --shadow: 0 20px 40px rgba(31, 28, 26, 0.08);
  --radius: 22px;
  --container: 1200px;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  font-family: "Segoe UI", Arial, sans-serif;
  background: var(--bg);
  color: var(--ink);
  line-height: 1.6;
}

a {
  color: inherit;
  text-decoration: none;
}

img {
  max-width: 100%;
  display: block;
}

button,
input,
textarea {
  font: inherit;
}

.container {
  width: min(var(--container), calc(100% - 32px));
  margin: 0 auto;
}

.narrow {
  max-width: 760px;
}

.section {
  padding: 88px 0;
}

.text-center {
  text-align: center;
}

.eyebrow {
  display: inline-block;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  font-size: 11px;
  font-weight: 700;
  color: var(--primary-dark);
  margin-bottom: 16px;
}

h1, h2, h3 {
  font-family: Georgia, "Times New Roman", serif;
  line-height: 1.1;
  letter-spacing: -0.03em;
  margin: 0 0 16px;
}

h1 {
  font-size: clamp(2.5rem, 5vw, 5rem);
}

h2 {
  font-size: clamp(2rem, 4vw, 3rem);
}

h3 {
  font-size: clamp(1.2rem, 2vw, 1.8rem);
}

p {
  margin: 0 0 1rem;
  color: var(--muted);
}

.site-header {
  position: sticky;
  top: 0;
  z-index: 20;
  background: rgba(246, 241, 234, 0.9);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--line);
}

.nav-wrap {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 78px;
  gap: 16px;
}

.brand {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  font-weight: 700;
}

.brand strong {
  display: block;
  font-size: 0.96rem;
}

.brand small {
  display: block;
  font-size: 0.64rem;
  font-weight: 600;
  color: var(--muted);
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.brand-mark {
  width: 42px;
  height: 42px;
  display: grid;
  place-items: center;
  border-radius: 12px;
  background: linear-gradient(135deg, var(--ink), #534b46);
  color: #fff;
  font-size: 0.8rem;
  letter-spacing: 0.08em;
}

.site-nav {
  display: flex;
  align-items: center;
  gap: 22px;
  font-size: 0.95rem;
}

.site-nav a {
  color: var(--muted);
  transition: color 0.2s ease;
}

.site-nav a:hover,
.site-nav a.active {
  color: var(--ink);
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
  padding: 0.9rem 1.5rem;
  font-weight: 700;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  border: 1px solid transparent;
}

.btn:hover {
  transform: translateY(-1px);
}

.btn-primary {
  background: linear-gradient(135deg, var(--primary), var(--primary-dark));
  color: #fff;
  box-shadow: 0 10px 26px rgba(166, 115, 74, 0.25);
}

.btn-secondary {
  background: transparent;
  border-color: rgba(31, 28, 26, 0.16);
  color: var(--ink);
}

.nav-cta {
  padding-inline: 1.2rem;
}

.hero {
  padding: 56px 0 32px;
}

.hero-grid {
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  align-items: center;
  gap: 36px;
}

.hero-copy p {
  max-width: 620px;
  font-size: 1.08rem;
}

.cta-group {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  margin: 30px 0 22px;
}

.hero-meta {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  padding: 0;
  margin: 0;
}

.hero-meta li {
  padding: 0.6rem 0.9rem;
  background: rgba(255, 255, 255, 0.4);
  border: 1px solid var(--line);
  border-radius: 999px;
  font-size: 0.82rem;
  color: var(--muted);
}

.hero-visual {
  position: relative;
}

.hero-image-card {
  border-radius: 30px;
  overflow: hidden;
  box-shadow: var(--shadow);
}

.hero-image-card img {
  width: 100%;
  height: 620px;
  object-fit: cover;
}

.hero-badge {
  position: absolute;
  left: 20px;
  bottom: 20px;
  background: rgba(255, 255, 255, 0.92);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(31, 28, 26, 0.08);
  border-radius: 18px;
  padding: 0.9rem 1rem;
  max-width: 220px;
  box-shadow: var(--shadow);
}

.hero-badge span {
  display: block;
  font-size: 0.72rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--primary-dark);
  margin-bottom: 4px;
}

.section-head {
  margin-bottom: 28px;
}

.split-head {
  display: flex;
  align-items: end;
  justify-content: space-between;
  gap: 18px;
}

.text-link {
  color: var(--primary-dark);
  font-weight: 700;
}

.feature-grid,
.category-grid,
.process-grid,
.plan-grid,
.industry-grid,
.product-grid {
  display: grid;
  gap: 24px;
}

.feature-grid {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.feature-card,
.process-card,
.plan-card,
.category-card,
.product-card,
.industry-card,
.contact-card,
.map-card,
.solution-panel,
.enquiry-form {
  background: rgba(255, 255, 255, 0.52);
  border: 1px solid var(--line);
  border-radius: var(--radius);
  box-shadow: 0 10px 28px rgba(31, 28, 26, 0.04);
}

.feature-card {
  padding: 28px 24px;
}

.icon {
  width: 54px;
  height: 54px;
  border-radius: 16px;
  display: grid;
  place-items: center;
  background: linear-gradient(135deg, var(--accent), #f7efe7);
  color: var(--primary-dark);
  font-weight: 700;
  margin-bottom: 18px;
}

.category-grid {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.category-card {
  overflow: hidden;
}

.category-card img {
  width: 100%;
  height: 250px;
  object-fit: cover;
}

.category-body {
  padding: 18px 18px 20px;
}

.category-card.highlight {
  background: linear-gradient(135deg, #1f1c1a, #413933);
  color: #fff;
}

.category-card.highlight p {
  color: rgba(255,255,255,0.8);
}

.large-body {
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 250px;
}

.solution-block {
  background: linear-gradient(180deg, rgba(246, 241, 234, 0.6), rgba(233, 220, 197, 0.4));
}

.split-layout {
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 28px;
  align-items: center;
}

.solution-panel {
  padding: 32px 24px;
}

.solution-panel ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 16px;
}

.solution-panel li {
  position: relative;
  padding-left: 24px;
  color: var(--muted);
}

.solution-panel li::before {
  content: "•";
  position: absolute;
  left: 0;
  top: 0;
  color: var(--primary-dark);
  font-size: 1.3rem;
}

.enquiry-grid {
  display: grid;
  grid-template-columns: 0.85fr 1.15fr;
  gap: 28px;
  align-items: start;
}

.form-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 18px;
}

.enquiry-form {
  padding: 26px;
}

label {
  display: flex;
  flex-direction: column;
  gap: 8px;
  color: var(--ink);
  font-size: 0.92rem;
  font-weight: 600;
}

label span {
  color: var(--ink);
}

input,
textarea {
  width: 100%;
  padding: 0.85rem 0.95rem;
  border: 1px solid rgba(31, 28, 26, 0.12);
  border-radius: 12px;
  background: rgba(255,255,255,0.8);
  color: var(--ink);
}

textarea {
  resize: vertical;
}

.full-width {
  grid-column: 1 / -1;
}

.full-btn {
  width: 100%;
  margin-top: 20px;
}

.product-grid {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.product-card {
  overflow: hidden;
}

.product-card img {
  height: 260px;
  width: 100%;
  object-fit: cover;
}

.product-body {
  padding: 20px 18px 22px;
}

.chip {
  display: inline-block;
  font-size: 0.74rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--primary-dark);
  background: rgba(183, 131, 73, 0.1);
  border-radius: 999px;
  padding: 0.42rem 0.7rem;
  margin-bottom: 12px;
}

.btn-small {
  padding: 0.7rem 1.1rem;
  margin-top: 8px;
}

.custom-solution {
  background: linear-gradient(180deg, rgba(255,255,255,0.2), rgba(233, 220, 197, 0.4));
}

.narrow {
  max-width: 820px;
}

.check-list {
  list-style: none;
  padding: 0;
  margin: 26px 0 0;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px 24px;
}

.check-list li {
  position: relative;
  padding-left: 28px;
  color: var(--muted);
  font-weight: 600;
}

.check-list li::before {
  content: "✓";
  position: absolute;
  left: 0;
  top: 0;
  color: var(--primary-dark);
  font-weight: 800;
}

.process-grid {
  grid-template-columns: repeat(4, minmax(0, 1fr));
}

.process-card {
  padding: 28px 22px;
}

.step {
  display: inline-block;
  font-size: 1.2rem;
  font-weight: 800;
  color: var(--primary-dark);
  margin-bottom: 8px;
}

.plan-grid {
  grid-template-columns: repeat(4, minmax(0, 1fr));
}

.plan-card {
  padding: 24px 20px;
}

.plan-card.emphasis {
  background: linear-gradient(180deg, var(--ink), #403b37);
  color: #fff;
}

.plan-card.emphasis p,
.plan-card.emphasis .text-link {
  color: rgba(255,255,255,0.8);
}

.industry-grid {
  grid-template-columns: repeat(4, minmax(0, 1fr));
}

.industry-card {
  padding: 24px 18px;
  text-align: center;
  font-weight: 700;
  color: var(--ink);
}

.about-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 28px;
}

.about-grid img {
  border-radius: 28px;
  width: 100%;
  height: 520px;
  object-fit: cover;
  box-shadow: var(--shadow);
}

.site-footer {
  background: #1f1c1a;
  color: #f3ece6;
  padding-top: 52px;
}

.footer-grid {
  display: grid;
  grid-template-columns: 1.4fr 1fr 1fr 1fr;
  gap: 28px;
  padding-bottom: 28px;
}

.footer-brand {
  color: #fff;
}

.site-footer h3 {
  font-size: 1.1rem;
  margin-bottom: 12px;
  color: #fff;
}

.site-footer ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 8px;
}

.site-footer a,
.site-footer li {
  color: rgba(255,255,255,0.7);
}

.footer-bottom {
  border-top: 1px solid rgba(255,255,255,0.08);
  padding: 18px 0 24px;
}

.floating-whatsapp {
  position: fixed;
  right: 20px;
  bottom: 20px;
  background: #25d366;
  color: #fff;
  padding: 0.85rem 1.1rem;
  border-radius: 999px;
  font-weight: 700;
  box-shadow: 0 12px 30px rgba(37, 211, 102, 0.35);
  z-index: 30;
}

.page-hero {
  padding: 80px 0 32px;
}

.inner-page-hero {
  background: linear-gradient(180deg, rgba(233, 220, 197, 0.5), rgba(246, 241, 234, 0));
}

.product-grid-large {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.product-detail-section {
  padding-top: 56px;
}

.product-detail-grid {
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 32px;
  align-items: start;
}

.product-gallery {
  display: grid;
  gap: 18px;
}

.product-gallery > img {
  width: 100%;
  height: 520px;
  object-fit: cover;
  border-radius: 24px;
  box-shadow: var(--shadow);
}

.gallery-row {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 18px;
}

.gallery-row img {
  height: 220px;
  width: 100%;
  object-fit: cover;
  border-radius: 20px;
}

.product-detail-copy {
  padding: 20px 0;
}

.product-brief {
  font-size: 1.08rem;
}

.detail-meta {
  display: grid;
  gap: 12px;
  padding: 18px 20px;
  background: rgba(255,255,255,0.45);
  border: 1px solid var(--line);
  border-radius: var(--radius);
  margin: 24px 0;
}

.product-description {
  margin-bottom: 22px;
}

.cta-row {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.contact-page {
  padding-top: 40px;
}

.contact-grid {
  display: grid;
  grid-template-columns: 0.8fr 1.2fr;
  gap: 28px;
}

.contact-card,
.map-card {
  padding: 26px;
}

.contact-list {
  list-style: none;
  padding: 0;
  margin: 0 0 22px;
  display: grid;
  gap: 14px;
  color: var(--muted);
}

.map-card iframe {
  width: 100%;
  min-height: 420px;
  border: 0;
  border-radius: 18px;
}

.legal-section {
  padding-top: 64px;
}

.legal-copy {
  background: rgba(255,255,255,0.52);
  border: 1px solid var(--line);
  border-radius: var(--radius);
  padding: 36px 28px;
}

.skip-link {
  position: absolute;
  left: -999px;
  top: auto;
}

.skip-link:focus {
  left: 16px;
  top: 16px;
  background: #fff;
  padding: 10px 14px;
  border-radius: 10px;
  z-index: 100;
}

.nav-toggle {
  display: none;
  background: transparent;
  border: 0;
  padding: 0;
  width: 42px;
  height: 42px;
  cursor: pointer;
}

.nav-toggle span {
  display: block;
  width: 24px;
  height: 2px;
  background: var(--ink);
  margin: 5px auto;
  border-radius: 2px;
}

@media (max-width: 980px) {
  .hero-grid,
  .feature-grid,
  .category-grid,
  .split-layout,
  .enquiry-grid,
  .product-grid,
  .plan-grid,
  .process-grid,
  .industry-grid,
  .about-grid,
  .product-detail-grid,
  .contact-grid,
  .footer-grid {
    grid-template-columns: 1fr 1fr;
  }

  .product-grid-large,
  .feature-grid,
  .category-grid,
  .plan-grid,
  .process-grid,
  .industry-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .nav-toggle {
    display: block;
  }

  .site-nav {
    position: absolute;
    top: 78px;
    right: 16px;
    left: 16px;
    display: none;
    flex-direction: column;
    align-items: stretch;
    padding: 16px;
    background: rgba(255, 255, 255, 0.96);
    border: 1px solid var(--line);
    border-radius: 18px;
    box-shadow: var(--shadow);
  }

  .site-nav.open {
    display: flex;
  }

  .site-nav .nav-cta {
    margin-top: 8px;
  }
}

@media (max-width: 720px) {
  .section {
    padding: 70px 0;
  }

  .hero-grid,
  .feature-grid,
  .category-grid,
  .split-layout,
  .enquiry-grid,
  .product-grid,
  .plan-grid,
  .process-grid,
  .industry-grid,
  .about-grid,
  .product-detail-grid,
  .contact-grid,
  .footer-grid,
  .form-grid,
  .check-list {
    grid-template-columns: 1fr;
  }

  .split-head {
    flex-direction: column;
    align-items: flex-start;
  }

  .hero-image-card img,
  .about-grid img,
  .product-gallery > img {
    height: 420px;
  }

  .nav-wrap {
    min-height: 72px;
  }

  .floating-whatsapp {
    right: 16px;
    bottom: 16px;
  }
}

/* Keep WhatsApp/phone links synchronized from one config source. */
(function(){
  const applyContactConfig = () => {
    const cfg = window.AAC_CONFIG;
    if (!cfg) return;
    document.querySelectorAll('a[href*="wa.me/"]').forEach(a => {
      try {
        const url = new URL(a.href);
        url.pathname = '/' + cfg.whatsapp;
        a.href = url.toString();
      } catch (_) {}
    });
    document.querySelectorAll('a[href^="tel:"]').forEach(a => {
      a.href = 'tel:+' + cfg.whatsapp;
      const text = a.textContent || '';
      if (/\+?\d[\d\s-]{8,}/.test(text)) a.textContent = text.replace(/\+?\d[\d\s-]{8,}/, cfg.phoneDisplay);
    });
  };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', applyContactConfig);
  else applyContactConfig();
})();
