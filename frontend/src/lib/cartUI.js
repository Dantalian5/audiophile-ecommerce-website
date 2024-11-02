import { getCartFromLocalStorage, saveCartToLocalStorage } from "./cartStorage";
import {
  updateProductQuantity,
  calculateTotalValue,
  calculateTotalQuantity,
} from "./cartOperations";

import { formatPriceOutput } from "@lib/utils";

export function updateModalContent() {
  const cart = getCartFromLocalStorage();
  const modalCart = document.querySelector('[data-target="modal-cart"]');
  const productContainer = modalCart.querySelector(
    '[data-target="modal-cart-products"]'
  );

  productContainer.innerHTML = "";

  if (cart.length === 0) {
    productContainer.innerHTML = `<p class="empty-message">Your cart is empty.</p>`;
  } else {
    // Renderizar cada producto
    cart.forEach((item) => {
      const itemElement = renderItem(item, true);

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
        updateProductQuantity(item.id, parseInt(quantityInput.value, 10));
        renderTotalValue();
        renderTotalQuantity();
      });

      plusButton.addEventListener("click", () => {
        quantityInput.stepUp();
        updateProductQuantity(item.id, parseInt(quantityInput.value, 10));
        renderTotalValue();
        renderTotalQuantity();
      });

      quantityInput.addEventListener("input", () => {
        const newQuantity = parseInt(quantityInput.value, 10);
        if (!isNaN(newQuantity) && newQuantity >= 0) {
          updateProductQuantity(item.id, newQuantity);
          renderTotalValue();
        } else {
          quantityInput.value = 1;
          updateProductQuantity(item.id, 1);
          renderTotalValue();
          renderTotalQuantity();
        }
      });
    });
  }

  renderTotalQuantity();
  renderTotalValue();
}

function renderTotalValue() {
  const cartTotalValue = document.querySelector(
    '[data-target="cart-total-value"]'
  );
  cartTotalValue.textContent = calculateTotalValue();
}
function renderTotalQuantity() {
  const cartTotalQuantity = document.querySelector(
    '[data-target="cart-total-quantity"]'
  );
  cartTotalQuantity.textContent = calculateTotalQuantity();
}

export function renderItem(item, editable = false) {
  const itemElement = document.createElement("div");
  itemElement.classList.add("cart-item");
  itemElement.innerHTML = `
  <div class="cart-item__img">
    <img src="/assets/products/${
      item.id || item.code
    }/image-cart.jpg" alt="product image" />
  </div>
  <div class="cart-item__specs">
    <h3 class="cart-item__title">
      <span>${item.nickname}</span>
    </h3>
    <p class="cart-item__price"> 
      $ <span>${formatPriceOutput(item.price)}</span>
    </p>
  </div>
    ${
      editable
        ? `<div class="input-number">
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
        </div>`
        : `<p class="cart-item__quantity">x<span>${item.quantity}</span></p>`
    }`;

  return itemElement;
}
export function updateCartBtnIndicator() {
  const cartBtnIndicator = document.querySelector(
    '[data-target="cart-btn-indicator"]'
  );
  const cartTotalQuantity = calculateTotalQuantity();
  if (cartTotalQuantity > 0) {
    cartBtnIndicator.style.display = "flex";
    cartBtnIndicator.textContent = cartTotalQuantity;
  } else {
    cartBtnIndicator.style.display = "none";
  }
}
