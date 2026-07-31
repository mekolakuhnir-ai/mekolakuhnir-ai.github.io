const burger = document.getElementById('burger');
const navList = document.querySelector('.nav-list');

burger.addEventListener('click', () => {
    navList.classList.toggle('open');
});

navList.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
        navList.classList.remove('open');
    });
});

document.getElementById('year').textContent = new Date().getFullYear();
