const hamburgerMenu = document.getElementById('ham-menu');
const closeMenu = document.getElementById('close');
const nav = document.querySelector('.main-nav');

hamburgerMenu.addEventListener('click', function () {
    nav.classList.add('open');
})

closeMenu.addEventListener('click', function () {
    nav.classList.remove('open');
})

