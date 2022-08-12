const navToggle = document.querySelector('#navToggle');
const mobileNav = document.querySelector('nav');
const title = document.querySelector('.title');

navToggle.addEventListener('click', () => {
  mobileNav.classList.toggle('active');
  title.classList.toggle('hide');
});