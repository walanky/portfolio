/* ================================
  1. Header menu
  2. About Slider
  3. Work Filter
  4. Partners Slider


  ================================ */


// 1. Header menu

const menuOpenBtn = document.querySelector('.menu-open');
const menuCloseBtn = document.querySelector('.menu-close');
const menu = document.querySelector('.menu');
const body = document.querySelector('body');

menuOpenBtn.addEventListener('click', function (e) {
  e.preventDefault();
  menu.classList.add('active');
  body.classList.add('is-lock');
});

menuCloseBtn.addEventListener('click', function (e) {
  e.preventDefault();
  menu.classList.remove('active');
  body.classList.remove('is-lock');
});

// 2. About Slider
var mySwiper = new Swiper('.about-slider', {
  speed: 400,
  slidesPerView: 1,
  breakpoints: {
    // when window width is >= 320px
    520: {
      slidesPerView: 2,
    },
    780: {
      slidesPerView: 3,
    },
    1100: {
      slidesPerView: 4,
    },
  },
  navigation: {
    nextEl: '.swiper-button--next',
    prevEl: '.swiper-button--prev'
  },
});
// 3. Work Filter

function tabs(choiceSelector, itemsSelector) {
  const choices = document.querySelectorAll(choiceSelector);
  const items = document.querySelectorAll(itemsSelector);


  choices.forEach(function (choice) {
    choice.addEventListener("click", function (e) {
      e.preventDefault();
      choices.forEach((c) => c.classList.remove('active'));
      this.classList.add('active');
      const choiceFilter = this.getAttribute('data-work');
      if (choiceFilter == 'all') {
        items.forEach(item => {
          item.style.display = 'block';
        })
        return;
      }
      items.forEach(item => {
        if (item.getAttribute('data-work').split(',').indexOf(choiceFilter) == -1) {
          item.style.display = 'none';
        } else {
          item.style.display = 'block';

        }
      })
    })
  })
}

tabs('.works-varibles__link', '.work-item--wrapper');

// 4. Partners Slider

var mySwiper = new Swiper('.partners-slider', {
  speed: 400,
  slidesPerView: 1,
  pagination: {
    el: '.partners-slider-pagination',
    type: 'bullets',
    clickable: true,
  },
});


