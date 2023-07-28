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

const initChangeMap = () => {
  const mapFrame = document.querySelector('.contacts__google-map');
  var mediaQuery = window.matchMedia('(min-width: 768px)');

  if (!mapFrame) {
    return;
  }

  if (mediaQuery.matches) {
    mapFrame.setAttribute('src', 'https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d2376.7521048576004!2d30.31839209911116!3d59.938740745367205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2sru!4v1688335824171!5m2!1ses!2sru');
  }
};

const initModalIndex = () => {
  const orderButton = document.querySelector('.top-product__order-button');
  const modalContainer = document.querySelector('.modal-container');
  const modalOkButton = document.querySelector('.modal-container__submit-button');

  if (!orderButton) {
    return;
  }

  orderButton.addEventListener('click', (evt) => {
    evt.preventDefault();
    modalContainer.classList.remove('modal-container--close');
  });

  modalOkButton.addEventListener('click', (evt) => {
    evt.preventDefault();
    modalContainer.classList.add('modal-container--close');
  });

  modalContainer.addEventListener('click', (evt) => {
    if (evt.target.closest('.modal-container__order')) {
      return;
    }
    evt.preventDefault();
    modalContainer.classList.add('modal-container--close');
  });

  document.addEventListener('keydown', (evt) => {
    if (evt.key === 'Escape') {
      evt.preventDefault();
      modalContainer.classList.add('modal-container--close');
    }
  });
};

const initModalCatalog = () => {
  var orderButton = document.querySelectorAll('.catalog__order-button');

  if (!orderButton) {
    return;
  }

  if (orderButton.length > 0) {
    const modalContainer = document.querySelector('.modal-container');
    const modalOkButton = document.querySelector('.modal-container__submit-button');

    for (var i = 0; i < orderButton.length; i++) {
      orderButton[i].addEventListener('click', (evt) => {
        evt.preventDefault();
        modalContainer.classList.remove('modal-container--close');
      });

      modalOkButton.addEventListener('click', (evt) => {
        evt.preventDefault();
        modalContainer.classList.add('modal-container--close');
      });

      modalContainer.addEventListener('click', (evt) => {
        if (evt.target.closest('.modal-container__order')) {
          return;
        }
        evt.preventDefault();
        modalContainer.classList.add('modal-container--close');
      });

      document.addEventListener('keydown', (evt) => {
        if (evt.key === 'Escape') {
          evt.preventDefault();
          modalContainer.classList.add('modal-container--close');
        }
      });
    }
  }
};

initOpenMenu();
initMap();
initSlider();
initChangeMap();
initModalIndex();
initModalCatalog();
