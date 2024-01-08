const menuTonggle = document.querySelector('.menu-side input');
const nav = document.querySelector('nav ul');

menuTonggle.addEventListener('click', function () {
    nav.classList.toggle('slide');
});