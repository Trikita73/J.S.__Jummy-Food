import createElement from "../../libs/assets/create-element.js";

export default class ProductGrid {
    constructor(products) {
        this.products = products;
        this.filters = {};
        this.render();
    }

    render() {
        this.elem = createElement(`<div class="products-grid">
            <div class="products__inner"></div>
        </div>`);
    }
}