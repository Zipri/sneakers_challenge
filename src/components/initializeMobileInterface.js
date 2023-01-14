import {createSliderArrows} from "./common.js";

export default function initializeMobileInterface() {
  const slider = document.querySelector('.slider__main_photo');
  const image = slider.querySelector('.slider__photo_large');

  if (window.innerWidth <= 768) {
    createHeaderMenu();
    createSliderArrows(slider, image);
  }
  window.addEventListener('resize', function (event) {
    const menu = document.querySelector('.header__menu');
    if (window.innerWidth <= 768 && !menu) {
      createHeaderMenu();
      createSliderArrows(slider, image);
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

function deleteSliderArrows() {
  const arrows = document.querySelector('.slider__arrows');
  arrows.parentNode.removeChild(arrows)
}
