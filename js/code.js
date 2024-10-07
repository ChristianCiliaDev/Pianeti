// Selecting the hamburger and the mobile menu
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

// Toggle menu visibility and hamburger animation on click
hamburger.addEventListener('click', function() {
  hamburger.classList.toggle('active');
  mobileMenu.classList.toggle('active');
});