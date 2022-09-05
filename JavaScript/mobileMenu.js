const mobileMenu = document.getElementById('mobile-menu');
const mobileBtn = document.getElementById('mobile-menu-btn');
const closeBtn = document.getElementById('cancel-btn');
const menu = document.querySelector('.menu');

mobileBtn.onclick = () => {
  mobileMenu.style.display = 'block';
};

closeBtn.onclick = () => {
  mobileMenu.style.display = 'none';
};

menu.addEventListener('click', () => {
  mobileMenu.style.display = 'none';
});