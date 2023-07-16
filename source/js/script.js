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

initOpenMenu();
initMap();
