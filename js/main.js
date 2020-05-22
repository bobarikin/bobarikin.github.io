const menuToggle = document.querySelector('#menu-togle');
const mobileNavConatainer = document.querySelector('#mobile-nav');

menuToggle.onclick = function() {
    menuToggle.classList.toggle('menu-icon-active');
    mobileNavConatainer.classList.toggle('mobile-nav-active');
}