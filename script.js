// ---------- Ano no rodapé ----------
document.querySelector('#year').textContent = new Date().getFullYear();

// ---------- Menu mobile ----------
const menuButton = document.querySelector('.menu-button');
const nav = document.querySelector('.nav');
const navLinks = document.querySelectorAll('.nav a');

menuButton.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
});

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
  });
});

// ---------- Nav ativo conforme a seção visível ----------
const sections = [...navLinks]
  .map((link) => document.querySelector(link.getAttribute('href')))
  .filter(Boolean);

const activeObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      navLinks.forEach((link) => link.classList.remove('active'));
      const active = document.querySelector(`.nav a[href="#${entry.target.id}"]`);
      if (active) active.classList.add('active');
    });
  },
  { rootMargin: '-40% 0px -55% 0px' }
);
sections.forEach((section) => activeObserver.observe(section));

// ---------- Reveal no scroll ----------
const revealObserver = new IntersectionObserver(
  (entries, obs) => {
    entries.forEach((entry, i) => {
      if (!entry.isIntersecting) return;
      entry.target.style.transitionDelay = `${Math.min(i * 60, 240)}ms`;
      entry.target.classList.add('in');
      obs.unobserve(entry.target);
    });
  },
  { rootMargin: '0px 0px -8% 0px', threshold: 0.05 }
);
document.querySelectorAll('.reveal').forEach((el) => revealObserver.observe(el));

// ---------- Contador animado das métricas ----------
const counters = document.querySelectorAll('.metrics strong[data-count]');
const countObserver = new IntersectionObserver(
  (entries, obs) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const target = Number(el.dataset.count);
      const duration = 1100;
      const start = performance.now();
      const tick = (now) => {
        const p = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        el.textContent = Math.round(target * eased) + (p === 1 ? '+' : '');
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
      obs.unobserve(el);
    });
  },
  { threshold: 0.5 }
);
counters.forEach((el) => countObserver.observe(el));
