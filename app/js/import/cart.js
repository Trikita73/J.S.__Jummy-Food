import createElement from "../../libs/assets/create-element.js";
import escapeHtml from "../../libs/assets/escape-html.js";

import Modal from './modal.js';

export default class Cart {
    cartItems = []; // [product: {...}, count: N]

    constructor(cartIcon) {
        this.cartIcon = cartIcon;

        this.addEventListeners();
    }

    addProduct(product) {
        let cartItem = this.cartItems.find(
            item => item.product.id == product.id
        );
        if (!cartItem) {
            cartItem = {
                product,
                count: 1
            };
            this.cartItems.push(cartItem);
        } else {
            cartItem.count++;
        }

        this.onProductUpdate(cartItem);
    }

    updateProductCount(productId, amount) {
        let cartItem = this.cartItems.find(item => item.product.id == productId);
        cartItem.count += amount;

        if (cartItem.count == 0) {
            this.cartItems.splice(this.cartItems.indexOf(cartItem), 1);
        }

        this.onProductUpdate(cartItem);
    }

    isEmpty() {
        return this.cartItems.length === 0;
    }

    getTotalCount() {
        return this.cartItems.reduce((sum, item) => sum + item.count, 0);
    }

    getTotalPrice() {
        return this.cartItems.reduce(
            (sum, item) => sum + item.product.price * item.count,
            0
        );
    }

    renderProduct(product, count) {
        return createElement(`
        <div class="cart-product" data-product-id="${product.id}">
            <div class="cart-product__img">
                <img src="/app/img/product/${product.image}" alt="product">
            </div>
            <div class="cart-product__info">
                <div class="cart-product__title">${escapeHtml(product.name)}</div>
                <div class="cart-product__price-wrap">
                    <div class="cart-counter">
                        <button type="button" class="cart-counter__button cart-counter__button_minus">
                            <img src="/app/img/icon/square-minus-icon.svg" alt="minus">
                        </button>
                        <span class="cart-counter__count">${count}</span>
                        <button type="button" class="cart-counter__button cart-counter__button_plus">
                            <img src="/app/img/icon/square-plus-icon.svg" alt="plus">
                        </button>
                    </div>
                    <div class="cart-product__price">€${product.price.toFixed(2)}</div>
                </div>
            </div>
        </div>`);
    }

    renderOrderFrom() {
        return createElement(`<form class="cart-from">
            <h5 class="cart-from__title">Delivery</h5>
            <div class="cart-from__group cart-from__group_row">
                <imput name="name" type="text" class="cart-from__input" placeholder="Name" required value="Santa Calus">
                <imput name="email" type="email" class="cart-from__input" placeholder="Email" required value="john@gmail.com">
                <input name="tel" type="tel" class="cart-from__input" placeholder="Phone" value="+1234567">	
            </div>
            <div class="cart-from__group">
                <input name="address" type="text" class="cart-from__input" placeholder="Address" required value="North, Lapland, Snow Home">
            </div>
            <div class="cart-buttons">
                <div class="cart-buttons__buttons btn-group">
                    <div class="cart-buttons__info">
                        <span class="cart-buttons__info-text">total</span>
                        <span class="cart-buttons__info-price">€${this.getTotalPrice().toFixed(2)}</span>
                    </div>
                    <button type="submit" class="cart-button btn-group__button">order</button>
                </div>
            </div>
	    </form>`);
    }

}