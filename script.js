/* =========================================================
   Luiz Felipe — Portfólio
   Animações de entrada (AOS), texto digitado, contadores,
   menu do celular e destaque da seção atual.
   ========================================================= */

// ---------- Animações de entrada ----------
if (window.AOS) {
  AOS.init({
    duration: 700,
    easing: 'ease-out-cubic',
    once: true,
    offset: 60,
  });
}

// ---------- Ano do rodapé ----------
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// ---------- Texto que se digita sozinho ----------
(function typingEffect() {
  const target = document.getElementById('typed');
  if (!target) return;

  const words = ['Front-End', 'UI/UX', 'Web Responsivo', 'Interfaces'];
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (reduce) {
    target.textContent = words[0];
    return;
  }

  let wordIndex = 0;
  let charIndex = 0;
  let deleting = false;

  function tick() {
    const word = words[wordIndex];

    if (!deleting) {
      charIndex++;
      if (charIndex === word.length) {
        deleting = true;
        setTimeout(tick, 1500);
        return;
      }
    } else {
      charIndex--;
      if (charIndex === 0) {
        deleting = false;
        wordIndex = (wordIndex + 1) % words.length;
      }
    }

    target.textContent = word.slice(0, charIndex);
    setTimeout(tick, deleting ? 45 : 95);
  }

  setTimeout(tick, 600);
})();

// ---------- Números que sobem ----------
(function counters() {
  const nums = document.querySelectorAll('.num[data-count]');
  if (!nums.length) return;

  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function run(el) {
    const end = Number(el.dataset.count) || 0;
    const suffix = el.dataset.suffix || '';

    if (reduce) {
      el.textContent = end + suffix;
      return;
    }

    const duration = 1400;
    const start = performance.now();

    function step(now) {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(end * eased) + suffix;
      if (p < 1) requestAnimationFrame(step);
    }

    requestAnimationFrame(step);
  }

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        run(entry.target);
        io.unobserve(entry.target);
      });
    },
    { threshold: 0.5 }
  );

  nums.forEach((n) => io.observe(n));
})();

// ---------- Menu flutuante: fundo ao rolar + seção ativa ----------
(function nav() {
  const nav = document.getElementById('nav');
  const links = Array.from(document.querySelectorAll('.nav-link'));
  const sections = links
    .map((l) => document.querySelector(l.getAttribute('href')))
    .filter(Boolean);

  function onScroll() {
    if (nav) nav.classList.toggle('scrolled', window.scrollY > 24);
  }
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  if (!sections.length) return;

  const io = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((e) => e.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (!visible) return;

      links.forEach((l) =>
        l.classList.toggle(
          'active',
          l.getAttribute('href') === '#' + visible.target.id
        )
      );
    },
    { rootMargin: '-45% 0px -45% 0px', threshold: [0, 0.25, 0.5, 1] }
  );

  sections.forEach((s) => io.observe(s));
})();

// ---------- Menu do celular ----------
// ---------- Deslizar a tela suavemente ao rolar ----------
(function slideReveal() {
  const items = document.querySelectorAll('.reveal');
  if (!items.length) return;

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('in');
        io.unobserve(entry.target);
      });
    },
    { threshold: 0.15, rootMargin: '0px 0px -8% 0px' }
  );

  items.forEach((el) => io.observe(el));
})();

(function mobileMenu() {
  const btn = document.getElementById('menuBtn');
  const links = document.getElementById('navLinks');
  if (!btn || !links) return;

  const icon = btn.querySelector('i');

  function setOpen(open) {
    links.classList.toggle('open', open);
    btn.setAttribute('aria-expanded', String(open));
    btn.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
    if (icon) icon.className = open ? 'ri-close-line' : 'ri-menu-3-line';
  }

  btn.addEventListener('click', () => setOpen(!links.classList.contains('open')));

  links.addEventListener('click', (e) => {
    if (e.target.closest('a')) setOpen(false);
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') setOpen(false);
  });
})();
