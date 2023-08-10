const initOpenMenu = () => {
  const navMain = document.querySelector('.main-nav');
  const navToggle = document.querySelector('.main-nav__toggle');

  navMain.classList.remove('main-nav--nojs');
  navMain.classList.add('main-nav--hidden');

  navToggle.addEventListener('click', function () {
    navMain.classList.toggle('main-nav--hidden');
  });
};

const initChangeOrder = () => {
  const logoLink = document.querySelector('.main-header__logo-link');
  const principalMenuLink = document.querySelectorAll('.main-nav__link--principal');
  const searchMenuLink = document.querySelector('.main-nav__link--search');
  const cartMenuLink = document.querySelector('.main-nav__link--cart');
  var mediaTablet = window.matchMedia('(min-width: 768px) and (max-width: 1149.98px)');
  var mediaDesktop = window.matchMedia('(min-width: 1150px)');

  if (mediaTablet.matches) {
    if (!(logoLink.matches('.active-link'))) {
      logoLink.setAttribute('tabindex', '1');
    }

    searchMenuLink.setAttribute('tabindex', '2');
    cartMenuLink.setAttribute('tabindex', '2');
  }

  if (mediaDesktop.matches) {
    if (!(logoLink.matches('.active-link'))) {
      logoLink.setAttribute('tabindex', '2');
    }

    if (principalMenuLink.length > 0) {
      for (var i = 0; i < principalMenuLink.length; i++) {
        if (!(principalMenuLink[i].matches('.active-link'))) {
          principalMenuLink[i].setAttribute('tabindex', '1')
        }
      }
    }
  }
};

const advantagesListOrder  = () => {
  const items = document.querySelectorAll('.about-us__item');
  var items_count = 0;

  for (var i = 0; i < items.length; i++) {
    items_count++;
  }

  var k = items_count;

  if (items_count % 2 == 0) {
    for (var j = 0; j < items_count / 2; j++) {
      items[j].classList.add('about-us__item--first-column');
      k--;
      items[k].classList.remove('about-us__item--first-column');
    }
  }

  else {
    for (var j = 0; j < (items_count / 2 - items_count % 2 + 1); j++) {
      items[j].classList.add('about-us__item--first-column');
    }

    for (var j = 0; j < (items_count / 2 - items_count % 2); j++) {
      k--;
      items[k].classList.remove('about-us__item--first-column');
    }
  }
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
initChangeOrder();
advantagesListOrder();
initMap();
initSlider();
initChangeMap();
initModalIndex();
initModalCatalog();
