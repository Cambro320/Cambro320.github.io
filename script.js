const navButton = document.getElementById('menu-icon')
const headerSocialLinks = document.querySelector('.header-social-links')
const menu = document.querySelector('.menu')

navButton.addEventListener('click', toggleActive)

function toggleActive() {
  headerSocialLinks.classList.toggle('inactive')
  menu.classList.toggle('inactive')
}

AOS.init({
  duration: 800
});


