const navToggle = document.querySelector('.nav-toggle');
const siteNav = document.querySelector('.site-nav');
const demoMode = true;

if (navToggle && siteNav) {
  navToggle.addEventListener('click', () => {
    const expanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!expanded));
    siteNav.classList.toggle('open');
  });

  siteNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navToggle.setAttribute('aria-expanded', 'false');
      siteNav.classList.remove('open');
    });
  });
}

const form = document.querySelector('.contact-form');
const statusNode = document.getElementById('form-status');

if (form && demoMode) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (statusNode) {
      statusNode.hidden = false;
      statusNode.textContent = 'Consulta capturada en la demo local. La conexión final se completa en la siguiente etapa.';
    }
  });
}
