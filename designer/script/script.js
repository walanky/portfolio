$('.banner-slider__slider').slick({
  variableWidth: true,
  infinite: false,
  responsive: [
    {
      breakpoint: 480,
      settings: {
        variableWidth: false,
        slidesToShow: 1,
      }
    },

  ]
});

const menu = document.querySelector('.menu');
const menuOpen = document.querySelector('.menu__burger');
const menuClose = document.querySelector('.menu-close');
const body = document.querySelector('body');

menuOpen.addEventListener('click', function (e) {
  e.preventDefault();
  menu.classList.add('active');
  body.classList.add('is-lock');
})
menuClose.addEventListener('click', function (e) {
  e.preventDefault();
  menu.classList.remove('active');
  body.classList.remove('is-lock');
})
