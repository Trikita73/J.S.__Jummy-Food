import createElement from '../libs/assets/create-element.js';

export default class Carousel {
    constructor(slides) {
        this.slides = slides;

        this.currentsSliderNumber = 0;
        this.render();
        this.addEventListeners();
    }

    render() {
        this.elem = createElement(`
            <div class="carousel">
                <div class="carousel__arrow carousel__arrow_right">
                    <img scr="/app/img/icon/angle-icon.svg" alt="icon" />
                </div>
                <div class="carousel__arrow carousel__arrow_left">
                    <img src="/app/img/icon/angle-left-icon.svg" alt="icon" />
                </div>
                <div class="carousel__inner"></div>
            </div>
            `);

        let slides = this.slides.map(item => createElement(`
            
        `));
    }
}