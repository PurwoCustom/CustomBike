const burger = document.querySelector('#burger');
const burgerIcon = document.querySelector('#burger-icon');
const nav = document.querySelector('#nav');
let menuopen = false;
burger.addEventListener('click', () => {
    if (!menuopen) {
        nav.classList.add('open');
        burgerIcon.className = 'ri-close-line';
        menuopen = true;
    } else {
        nav.classList.remove('open');
        burgerIcon.className = 'ri-menu-line';
        menuopen = false;
    }
});