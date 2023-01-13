const render = (element, number) => {
  element.src = `assets/images/image-product-${number}.jpg`;
}

const sliderInit = (state, slider, mainPhoto, mediumPhotos) => {
  state.sliderMainPhoto = mainPhoto.src.at(-5);
  mediumPhotos.forEach(photo => {
    if (mainPhoto.src.at(-5) === photo.src.at(-15)) {
      photo.classList.add('slider__active_photo');
    }
    photo.addEventListener('click', function (event) {
      state.sliderMainPhoto = photo.src.at(-15);
      render(mainPhoto, state.sliderMainPhoto);
    })
  })
}

const sliderAddActive = (slider, mainPhoto, mediumPhotos) => {
  slider.addEventListener('click', function (event) {
    if (event.target.className === 'slider__photo_medium') {
      mediumPhotos.forEach(item => {
        item.classList.remove('slider__active_photo')
      })
      if (mainPhoto.src.at(-5) === event.target.src.at(-15)) {
        event.target.classList.add('slider__active_photo');
      }
    }
  })
}

const closeSliderModuleWindow = () => {
  const background = document.querySelector('.slider__background_all');
  background.parentNode.removeChild(background);
  const slider = document.querySelector('.slider__section_module');
  slider.parentNode.removeChild(slider);
  const closeButton = document.querySelector('.slider__close_button');
  closeButton.parentNode.removeChild(closeButton);
}

const sliderModuleWindow = (state, slider, mainPhoto, mediumPhotos) => {
  mainPhoto.addEventListener('click', function (event) {
    const background = document.createElement('div');
    background.className = 'slider__background_all';
    document.querySelector('body').append(background);

    const slider = document.createElement('section');
    slider.className = 'slider__section_module'
    slider.innerHTML = `
      <div class="slider__main_photo">
        <img src="assets/images/image-product-1.jpg"
             class="slider__photo_large" alt="image-product">
      </div>
      <ul class="slider flex flex__center_space_between">
        <li>
          <img src="assets/images/image-product-1-thumbnail.jpg"
               class="slider__photo_medium" alt="image-product">
        </li>
        <li>
          <img src="assets/images/image-product-2-thumbnail.jpg"
               class="slider__photo_medium" alt="image-product">
        </li>
        <li>
          <img src="assets/images/image-product-3-thumbnail.jpg"
               class="slider__photo_medium" alt="image-product">
        </li>
        <li>
          <img src="assets/images/image-product-4-thumbnail.jpg"
               class="slider__photo_medium" alt="image-product">
        </li>
      </ul>`;
    background.append(slider);

    const closeButton = document.createElement('button');
    closeButton.className = 'slider__close_button';
    closeButton.innerHTML = '&times;';
    closeButton.addEventListener('click', () => closeSliderModuleWindow())
    background.append(closeButton)
  })
}

export default function slider(state) {
  const slider = document.querySelector('.slider__section');
  const mainPhoto = slider.querySelector('.slider__photo_large');
  const mediumPhotos = slider.querySelectorAll('.slider__photo_medium');
  sliderInit(state, slider, mainPhoto, mediumPhotos);
  sliderAddActive(slider, mainPhoto, mediumPhotos);
  sliderModuleWindow(state, slider, mainPhoto, mediumPhotos);
}