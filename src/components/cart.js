const openUserCart = (state, cart) => {
  let isOpen = false;
  cart.addEventListener('click', function (event) {
    const cartWindow = document.createElement('div');
    if (isOpen) {
      const cartModule = document.querySelector('.cart__window');
      cartModule.parentNode.removeChild(cartModule);
      isOpen = false;
    } else {
      cartWindow.className = 'cart__window';
      cartWindow.innerHTML = `
      <h2 class="title_medium cart__title">Cart</h2>
      <hr class="divider">
      <div class="cart__item cart__padding flex flex__center_space_between">
        <img src="assets/images/image-product-1-thumbnail.jpg"
             class="cart__item_img" alt="image-product">
        <div>
          <div class="cart__text_info">
            Fall Limited Edition Sneakers
          </div>
          <div class="flex flex__center_space_between flex__gap_small">
            <div class="cart__text_info">
              $125.00 x 1 <b>$125.00</b>
            </div>
          </div>
        </div>
        <button>
          <img src="assets/images/icon-delete.svg" alt="image-product">
        </button>
      </div>
      <div class="cart__padding">
        <button class="info__add_btn cart__button_checkout">
          Checkout
        </button>
      </div>`;
      document.querySelector('body').append(cartWindow);
      isOpen = true;
    }
  })
}

export default function cart (state) {
  const cart = document.querySelector('button[data-cart]');
  openUserCart(state, cart);
}
