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

export default function slider(state) {
  const slider = document.querySelector('.slider__section');
  const mainPhoto = slider.querySelector('.slider__photo_large');
  const mediumPhotos = slider.querySelectorAll('.slider__photo_medium');
  sliderInit(state, slider, mainPhoto, mediumPhotos);
  sliderAddActive(slider, mainPhoto, mediumPhotos);
}