export function createSliderArrows(slider, image, state) {
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
  let imageNumber = +image.src.at(-5);
  arrows.querySelector('button[data-arrow-prev]').addEventListener('click', () => {
    if (imageNumber > 1) {
      imageNumber -= 1;
      image.src = `assets/images/image-product-${imageNumber}.jpg`;
      state.sliderMainPhoto = imageNumber;
    }
  });
  arrows.querySelector('button[data-arrow-next]').addEventListener('click', () => {
    if (imageNumber < 4) {
      imageNumber += 1;
      image.src = `assets/images/image-product-${imageNumber}.jpg`;
      state.sliderMainPhoto = imageNumber;
    }
  });
}
