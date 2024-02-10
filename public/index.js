const burger = document.getElementById('burger');
const menu = document.getElementById('menu');

burger.addEventListener('click', () => {
  menu.classList.toggle('nav-open');
  menu.classList.toggle('nav-hide');
});