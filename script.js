const burgerMenu = document.querySelector('.burger-menu');
const nav = document.querySelector('.header__nav');

burgerMenu.addEventListener('click', () => {
    nav.classList.toggle('show');
    burgerMenu.classList.toggle('active');
});