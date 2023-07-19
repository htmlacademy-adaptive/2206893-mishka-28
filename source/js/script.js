const initOpenMenu = () => {
  const navMain = document.querySelector('.main-nav');
  const navToggle = document.querySelector('.main-nav__toggle');

  navMain.classList.remove('main-nav--nojs');
  navMain.classList.add('main-nav--hidden');

  navToggle.addEventListener('click', function () {
    navMain.classList.toggle('main-nav--hidden');
  });
};

const initMap = () => {
  const mapFrame = document.querySelector('.contacts__google-map');

  if (!mapFrame) {
    return;
  }

  mapFrame.style.display = "block";
};

const initSlider = () => {
  const sliderButtonPrev = document.querySelector('.review__slider-button--prev');
  const sliderButtonNext = document.querySelector('.review__slider-button--next');
  const slides = document.querySelectorAll('.review__slider-item');

  let currentSlide = 0;

  if (!slides.length) {
    return;
  }

  const removeSlideActiveState = () => {
    slides[currentSlide].classList.remove('review__slider-item--active');
  };

  const addSlideActiveState = () => {
    slides[currentSlide].classList.add('review__slider-item--active');
  };

  sliderButtonPrev.addEventListener('click', (evt) => {
    evt.preventDefault();
    removeSlideActiveState();
    if (currentSlide === 0) {
      currentSlide = slides.length - 1;
    } else {
      currentSlide -= 1;
    }
    addSlideActiveState();
  });

  sliderButtonNext.addEventListener('click', (evt) => {
    evt.preventDefault();
    removeSlideActiveState();
    if (currentSlide === slides.length - 1) {
      currentSlide = 0;
    } else {
      currentSlide += 1;
    }
    addSlideActiveState();
  });
};

initOpenMenu();
initMap();
initSlider();
