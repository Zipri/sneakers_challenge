export default function initializeMobileInterface () {
  if (window.innerWidth <= 768) {
    createHeaderMenu();
    createSliderArrows();
  }
  window.addEventListener('resize', function (event) {
    const menu = document.querySelector('.header__menu');
    if (window.innerWidth <= 768 && !menu) {
      createHeaderMenu();
      createSliderArrows();
    }
    if (window.innerWidth > 768 && menu) {
      deleteHeaderMenu();
      deleteSliderArrows();
    }
  })
}

function createHeaderMenu() {
  const header = document.querySelector('header[data-header]');
  let menu = document.createElement('div');
  menu.className = 'header__menu';
  menu.innerHTML = '<img src="assets/images/icon-menu.svg" alt="menu">'
  header.prepend(menu);
}

function deleteHeaderMenu() {
  const menu = document.querySelector('.header__menu');
  menu.parentNode.removeChild(menu)
}

function createSliderArrows() {
  const slider = document.querySelector('.slider__main_photo')
  let arrows = document.createElement('div');
  arrows.className = 'slider__arrows';
  arrows.innerHTML = `
    <button class="slider__arrows__arrow">&#9668;</button>
    <button class="slider__arrows__arrow">&#9658;</button>`;
  slider.prepend(arrows);
}

function deleteSliderArrows() {
  const arrows = document.querySelector('.slider__arrows');
  arrows.parentNode.removeChild(arrows)
}