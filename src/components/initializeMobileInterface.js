export default function initializeMobileInterface() {
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
  let isOpen = false;
  const header = document.querySelector('header[data-header]');
  let menu = document.createElement('div');
  menu.className = 'header__menu';
  menu.innerHTML = '<img src="assets/images/icon-menu.svg" alt="menu">'
  header.firstElementChild.prepend(menu);
  menu.addEventListener('click', function (event) {
    if (isOpen) {
      const menuList = document.querySelector('.header__menu_list');
      menuList.parentNode.removeChild(menuList)
      isOpen = false;
    } else {
      let menuList = document.createElement('ul');
      menuList.classList.add('header__menu_list');
      menuList.classList.add('flex');
      menuList.classList.add('flex__center_space_between');
      menuList.classList.add('flex__gap_small');
      menuList.classList.add('flex__wrap');
      menuList.innerHTML = `
      <li class="header__menu_list_item">
        <a target="_blank" href="/">Collections</a>
      </li>
      <li class="header__menu_list_item">
        <a target="_blank" href="/">Men</a>
      </li>
      <li class="header__menu_list_item">
        <a target="_blank" href="/">Women</a>
      </li>
      <li class="header__menu_list_item">
        <a target="_blank" href="/">About</a>
      </li>
      <li class="header__menu_list_item">
        <a target="_blank" href="/">Contact</a>
      </li>`;
      header.append(menuList);
      isOpen = true;
    }
  })
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
    <button data-arrow-prev class="slider__arrows__arrow">
      <img src="assets/images/icon-previous.svg" alt="prev">
    </button>
    <button data-arrow-next class="slider__arrows__arrow">
      <img src="assets/images/icon-next.svg" alt="next">
    </button>`;
  slider.prepend(arrows);
  const image = slider.querySelector('.slider__photo_large');
  let imageNumber = +image.src.at(-5);
  arrows.querySelector('button[data-arrow-prev]').addEventListener('click', () => {
    if (imageNumber > 1) {
      imageNumber -= 1;
      image.src = `assets/images/image-product-${imageNumber}.jpg`;
    }
  });
  arrows.querySelector('button[data-arrow-next]').addEventListener('click', () => {
    if (imageNumber < 4) {
      imageNumber += 1;
      image.src = `assets/images/image-product-${imageNumber}.jpg`;
    }
  });
}

function deleteSliderArrows() {
  const arrows = document.querySelector('.slider__arrows');
  arrows.parentNode.removeChild(arrows)
}