const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav');
const navLink = nav.querySelectorAll('.nav__link');
const body = document.body;

//Burger menu 
burger.addEventListener('click', function () {
  body.classList.toggle('stop-scroll');
  burger.classList.toggle('burger--active');
  nav.classList.toggle('nav--visible');
})

navLink.forEach(el => {
  el.addEventListener('click', function () {
    body.classList.remove('stop-scroll');
    burger.classList.remove('burger--active');
    nav.classList.remove('nav--visible');
  });
});