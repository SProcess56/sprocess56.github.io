const toggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.main-nav');
toggle?.addEventListener('click', () => {
  const isOpen = menu.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(isOpen));
});
