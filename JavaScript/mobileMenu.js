const mobileMenu = document.getElementById('mobile-menu');
const mobileBtn = document.getElementById('mobile-menu-btn');
const closeBtn = document.getElementById('cancel-btn');

mobileBtn.onclick = () => {
  mobileMenu.style.display = 'block';
};

closeBtn.onclick = () => {
  mobileMenu.style.display = 'none';
};