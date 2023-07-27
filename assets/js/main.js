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

// Product Bike
const variant = document.querySelector('#variant');
const addCard = document.querySelector('#addCard');
const arrowVariant = document.querySelector('#arrowVariant');

addCard.addEventListener('click', () => {
    variant.classList.add('active');
});

arrowVariant.addEventListener('click', () => {
    variant.classList.remove('active');
});

// Show Sub Total
const subTotal = document.querySelector('#subTotal');
const total = document.querySelector('#total');

total.addEventListener('click', () => {
    subTotal.classList.toggle('active');
});