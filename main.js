/* main.js — JavaScript partagé — Nexora TP3 */

// 1. Menu burger mobile
const burger = document.querySelector('.burger');
const navM   = document.querySelector('.nav-mobile');
if (burger && navM) {
  burger.addEventListener('click', () => {
    const open = navM.classList.toggle('ouvert');
    burger.setAttribute('aria-expanded', open);
  });
  navM.querySelectorAll('a').forEach(a =>
    a.addEventListener('click', () => {
      navM.classList.remove('ouvert');
      burger.setAttribute('aria-expanded', 'false');
    })
  );
}

// 2. Révélation au scroll
const obs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      obs.unobserve(e.target);
    }
  });
}, { threshold: 0.1 });
document.querySelectorAll('.reveal').forEach(el => obs.observe(el));

// 3. Lien actif
const url = window.location.pathname;
document.querySelectorAll('.nav-liens a, .nav-mobile a').forEach(a => {
  const h = a.getAttribute('href') || '';
  if (h !== 'index.html' && url.includes(h.replace('.html', ''))) a.classList.add('actif');
  if ((h === 'index.html') && (url.endsWith('/') || url.endsWith('index.html'))) a.classList.add('actif');
});
