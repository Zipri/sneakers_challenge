const emptyCart = (cartWindow, state) => {
  cartWindow.innerHTML = `
      <h2 class="title_medium cart__title">Cart</h2>
      <hr class="divider">
      <div class="cart__item cart__padding flex flex__center_space_between">
        <div class="cart__empty">Your cart is empty.</div>
      </div>`;
  state.cartItems = 0;
}

const createUserCart = (state) => {
  const price = state.cartItems * 125;
  const cartWindow = document.createElement('div');
  cartWindow.className = 'cart__window';
  if (state.cartItems) {
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
            <div data-cart-price class="cart__text_info">
              $125.00 x ${state.cartItems} <b>$${price}.00</b>
            </div>
          </div>
        </div>
        <button data-delete-from-cart class="cart__delete_button">
          <img src="assets/images/icon-delete.svg" alt="image-product">
        </button>
      </div>
      <div class="cart__padding">
        <button class="info__add_btn cart__button_checkout">
          Checkout
        </button>
      </div>`;
    const deleteButton = cartWindow.querySelector('button[data-delete-from-cart]');
    const cartItem = cartWindow.querySelector('.cart__item');
    deleteButton.addEventListener('click', function (event) {
      cartItem.parentNode.removeChild(cartItem);
      emptyCart(cartWindow, state);
      const cartPusher = document.querySelector('.cart__pusher');
      cartPusher.parentNode.removeChild(cartPusher);
    })
  } else {
    emptyCart(cartWindow, state);
  }
  document.querySelector('body').append(cartWindow);
}

const deleteUserCart = () => {
  const cartModule = document.querySelector('.cart__window');
  cartModule.parentNode.removeChild(cartModule);
}

const openUserCart = (state, cart) => {
  let isOpen = false;
  cart.addEventListener('click', function (event) {
    if (isOpen) {
      deleteUserCart();
      isOpen = false;
    } else {
      createUserCart(state);
      isOpen = true;
    }
  })
}

const incrementItems = (state, cartWindow) => {
  const price = state.cartItems * 125;
  const textInfo = cartWindow.querySelector('div[data-cart-price]');
  if (textInfo) {
    textInfo.innerHTML = `$125.00 x ${state.cartItems} <b>$${price}.00</b>`
  } else {
    const cartItem = cartWindow.querySelector('div.cart__item');
    cartItem.innerHTML = `
      <img src="assets/images/image-product-1-thumbnail.jpg"
           class="cart__item_img" alt="image-product">
      <div>
        <div class="cart__text_info">
          Fall Limited Edition Sneakers
        </div>
        <div class="flex flex__center_space_between flex__gap_small">
          <div data-cart-price class="cart__text_info">
            $125.00 x ${state.cartItems} <b>$${price}.00</b>
          </div>
        </div>
      </div>
      <button data-delete-from-cart class="cart__delete_button">
        <img src="assets/images/icon-delete.svg" alt="image-product">
      </button>`;
    const deleteButton = cartWindow.querySelector('button[data-delete-from-cart]');
    deleteButton.addEventListener('click', function (event) {
      cartItem.parentNode.removeChild(cartItem);
      emptyCart(cartWindow, state);
      const cartPusher = document.querySelector('.cart__pusher');
      cartPusher.parentNode.removeChild(cartPusher);
    })
    const checkoutButton = document.createElement('div');
    checkoutButton.innerHTML = `
      <div class="cart__padding">
        <button class="info__add_btn cart__button_checkout">
          Checkout
        </button>
      </div>`;
    cartWindow.append(checkoutButton);
  }
}

const pushCart = (state, cart) => {
  const pusher = document.createElement('div');
  pusher.className = 'cart__pusher';
  pusher.innerHTML = `${state.cartItems}`;
  cart.append(pusher);
}

const addToCart = (state, addToCartButton, cart) => {
  addToCartButton.addEventListener('click', function (event) {
    if (state.counter > 0) {
      state.cartItems += state.counter;
      pushCart(state, cart);
      const cartWindow = document.querySelector('.cart__window')
      if (cartWindow) incrementItems(state, cartWindow);
    }
  })
}

export default function cart(state) {
  const cart = document.querySelector('button[data-cart]');
  const addToCartButton = document.querySelector('button[data-add-to-cart]');
  openUserCart(state, cart);
  addToCart(state, addToCartButton, cart);
}
