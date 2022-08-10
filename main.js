const navToggle = document.querySelector('#navToggle');
const mobileNav = document.querySelector('nav');

navToggle.addEventListener('click', () => {
  mobileNav.classList.toggle('active');
});