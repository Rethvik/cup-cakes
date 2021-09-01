const menuToggle = document.querySelector('.toggle');
const showcase = document.querySelector('.container');
const menu = document.querySelector('.menu-cont');
menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('active');
  showcase.classList.toggle('active');
  menu.classList.remove('no');
});