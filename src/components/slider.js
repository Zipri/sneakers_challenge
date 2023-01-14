const render = (element, number) => {
  element.src = `assets/images/image-product-${number}.jpg`;
}

const sliderInit = (state, slider, mainPhoto, mediumPhotos) => {
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

const sliderAddActive = (slider, mainPhoto, mediumPhotos, compare) => {
  slider.addEventListener('click', function (event) {
    if (event.target.className === compare) {
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
  const slider = document.querySelector('.slider__section_module');
  const closeButton = document.querySelector('.slider__close_button');
  if (background && slider && closeButton) {
    background.parentNode.removeChild(background);
    slider.parentNode.removeChild(slider);
    closeButton.parentNode.removeChild(closeButton);
  }
}

const observeSelectedImage = (mediumPhotos, image) => {
  mediumPhotos.forEach(item => {
    item.classList.remove('slider__active_photo')
    if (image.src.at(-5) === item.src.at(-15)) {
      item.classList.add('slider__active_photo');
    }
  })
}

const createSliderArrows = (slider, image, state, mediumPhotos) => {
  let arrows = document.createElement('div');
  arrows.className = 'slider__arrows_pc';
  arrows.innerHTML = `
    <button data-arrow-prev class="slider__arrows__arrow slider__arrow_pc">
      <img src="assets/images/icon-previous.svg" alt="prev">
    </button>
    <button data-arrow-next class="slider__arrows__arrow slider__arrow_pc">
      <img src="assets/images/icon-next.svg" alt="next">
    </button>`;
  slider.prepend(arrows);
  let imageNumber = +image.src.at(-5);
  arrows.querySelector('button[data-arrow-prev]').addEventListener('click', () => {
    if (imageNumber > 1) {
      imageNumber -= 1;
      image.src = `assets/images/image-product-${imageNumber}.jpg`;
      state.sliderMainPhoto = imageNumber;
      observeSelectedImage(mediumPhotos, image);
    }
  });
  arrows.querySelector('button[data-arrow-next]').addEventListener('click', () => {
    if (imageNumber < 4) {
      imageNumber += 1;
      image.src = `assets/images/image-product-${imageNumber}.jpg`;
      state.sliderMainPhoto = imageNumber;
      observeSelectedImage(mediumPhotos, image);
    }
  });
}

const sliderModuleWindow = (state, mainPhoto) => {
  mainPhoto.addEventListener('click', function (event) {
    const background = document.createElement('div');
    background.className = 'slider__background_all';
    document.querySelector('body').append(background);

    const slider = document.createElement('section');
    slider.className = 'slider__section_module'
    slider.innerHTML = `
      <div>
        <img src="assets/images/image-product-1.jpg"
             class="slider__photo_large_module" alt="image-product">
      </div>
      <ul class="slider_module flex flex__center_space_between">
        <li>
          <img src="assets/images/image-product-1-thumbnail.jpg"
               class="slider__photo_medium_module" alt="image-product">
        </li>
        <li>
          <img src="assets/images/image-product-2-thumbnail.jpg"
               class="slider__photo_medium_module" alt="image-product">
        </li>
        <li>
          <img src="assets/images/image-product-3-thumbnail.jpg"
               class="slider__photo_medium_module" alt="image-product">
        </li>
        <li>
          <img src="assets/images/image-product-4-thumbnail.jpg"
               class="slider__photo_medium_module" alt="image-product">
        </li>
      </ul>`;
    background.append(slider);

    const closeButton = document.createElement('button');
    closeButton.className = 'slider__close_button';
    closeButton.innerHTML = '&times;';
    closeButton.addEventListener('click',
      () => closeSliderModuleWindow())
    slider.append(closeButton)

    const mainPhotoModule = slider.querySelector('.slider__photo_large_module');
    const mediumPhotosModule = slider.querySelectorAll('.slider__photo_medium_module');
    sliderInit(state, slider, mainPhotoModule, mediumPhotosModule);
    sliderAddActive(slider, mainPhotoModule, mediumPhotosModule, 'slider__photo_medium_module');
    createSliderArrows(slider, mainPhotoModule, state, mediumPhotosModule);
  })
}

export default function slider(state) {
  const slider = document.querySelector('.slider__section');
  const mainPhoto = slider.querySelector('.slider__photo_large');
  const mediumPhotos = slider.querySelectorAll('.slider__photo_medium');
  sliderInit(state, slider, mainPhoto, mediumPhotos);
  sliderAddActive(slider, mainPhoto, mediumPhotos, 'slider__photo_medium');
  if (window.innerWidth > 768) sliderModuleWindow(state, mainPhoto);
}
