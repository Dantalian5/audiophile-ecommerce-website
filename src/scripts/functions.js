export function getCartFromLocalStorage() {
  const cart = localStorage.getItem("cart");
  return cart ? JSON.parse(cart) : [];
}
export function saveCartToLocalStorage(cart) {
  localStorage.setItem("cart", JSON.stringify(cart));
}
export function clearCartFromLocalStorage() {
  localStorage.removeItem("cart");
}
export function addToCart(product) {
  const cart = getCartFromLocalStorage();
  const existingProductIndex = cart.findIndex((item) => item.id === product.id);

  if (existingProductIndex > -1) {
    cart[existingProductIndex].quantity += product.quantity;
  } else {
    cart.push(product);
  }
  saveCartToLocalStorage(cart);
}
export function updateProductQuantity(productId, quantity) {
  const cart = getCartFromLocalStorage();
  const productIndex = cart.findIndex((item) => item.id === productId);
  cart[productIndex].quantity = quantity;
  saveCartToLocalStorage(cart);
}
export function formatPriceInput(price) {
  const formattedPrice = parseFloat(price.replace(/,/g, "")).toFixed(2);
  return parseFloat(formattedPrice);
}

export function openModalCart() {
  const modalCart = document.querySelector('[data-modal="cart"]');
  const modalWrapper = document.querySelector(".modal-cart__wrapper");

  updateModalContent();
  modalCart.classList.add("active");

  modalCart.addEventListener("click", (event) =>
    handleOutsideClick(event, modalWrapper)
  );
}

export function closeModalCart() {
  const modalCart = document.querySelector('[data-modal="cart"]');

  modalCart.classList.remove("active");

  modalCart.removeEventListener("click", handleOutsideClick);
}
export function toggleModalCart() {
  const modalCart = document.querySelector('[data-modal="cart"]');

  if (modalCart.classList.contains("active")) {
    closeModalCart();
  } else {
    openModalCart();
  }
}
export function handleOutsideClick(event, modalWrapper) {
  if (!modalWrapper.contains(event.target)) {
    closeModalCart();
  }
}

export function updateModalContent() {
  const cart = getCartFromLocalStorage();
  const modalCart = document.querySelector('[data-modal="cart"]');
  const productContainer = modalCart.querySelector('[data-cart="products"]');
  const cartCountElement = modalCart.querySelector('[data-cart="count"]');

  productContainer.innerHTML = ""; // Clean Container

  if (cart.length === 0) {
    productContainer.innerHTML = "<p>Your cart is empty.</p>";
    cartCountElement.textContent = "0";
  } else {
    cartCountElement.textContent = cart.length;

    // Render items
    cart.forEach((item) => {
      // Create product HTML
      const itemElement = document.createElement("div");
      itemElement.classList.add("cart-item");
      itemElement.innerHTML = `
        <div class="cart-item__img">
          <img src="/assets/cart/image-${
            item.id
          }-headphones.jpg" alt="product image" />
        </div>
        <div class="cart-item__specs">
          <h3 class="cart-item__title"><span>${item.name}</span></h3>
          <p class="cart-item__price">$<span>${item.price.toFixed(2)}</span></p>
        </div>
        <div class="input-number">
          <button type="button" class="input-number__btn" data-action="product-cart-minus">-</button>
          <input
            data-target="product-quantity"
            class="input-number__input"
            type="number"
            value="${item.quantity}"
            min="0"
            max="999"
            step="1"
          />
          <button type="button" class="input-number__btn" data-action="product-cart-plus">+</button>
        </div>
      `;

      productContainer.appendChild(itemElement);
      const minusButton = itemElement.querySelector(
        '[data-action="product-cart-minus"]'
      );
      const plusButton = itemElement.querySelector(
        '[data-action="product-cart-plus"]'
      );
      const quantityInput = itemElement.querySelector(
        '[data-target="product-quantity"]'
      );

      minusButton.addEventListener("click", () => {
        quantityInput.stepDown();
        updateProductQuantity(item.id, quantityInput.value);
        calculateTotalValue();
      });
      itemElement;

      plusButton.addEventListener("click", () => {
        quantityInput.stepUp();
        updateProductQuantity(item.id, quantityInput.value);
        calculateTotalValue();
      });

      quantityInput.addEventListener("input", () => {
        const newQuantity = parseInt(quantityInput.value, 10);
        if (!isNaN(newQuantity) && newQuantity >= 0) {
          updateProductQuantity(item.id, newQuantity);
          calculateTotalValue();
        } else {
          quantityInput.value = 1;
          updateProductQuantity(item.id, 1);
          calculateTotalValue();
        }
      });
    });
  }

  // Actualizar el total
  calculateTotalValue();
}
export function calculateTotalValue() {
  const cart = getCartFromLocalStorage();
  const cartTotalValue = document.querySelector(
    '[data-target="cart-total-value"]'
  );
  let totalValue = 0;
  cart.forEach((item) => {
    totalValue += item.price * item.quantity;
  });
  cartTotalValue.textContent = totalValue.toFixed(2);
  return totalValue;
}
