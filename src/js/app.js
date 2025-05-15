import '../scss/main.scss';
import { Intro } from "./Intro.js";
import { Authors } from "./Authors.js";
import { About } from "./About.js";
import { CategoryLoad } from "./CategoryLoad.js";

class Game {

    constructor() {
        this.initLayout();
        this.initLayoutBack();
        this.initAppend();
        new Intro();

        // new CategoryLoad();
    }

    initLayout() {
        document.getElementById('app').innerHTML = `
            <div class="container"></div>
            <div class="wrapper__top"></div>
            <div class="wrapper__back"></div>
            <div class="wrapper__bottom"></div>
        `;

        this.wrapper = document.querySelector('.wrapper');
        this.container = document.querySelector('.container');
        this.wrapperTop = document.querySelector('.wrapper__top');
        this.wrapperBottom = document.querySelector('.wrapper__bottom');
        this.wrapperBack = document.querySelector('.wrapper__back');
    }

    initLayoutBack() {
        this.wrapperIntro = document.createElement('div');
        this.wrapperCategoryBack = document.createElement('div');
        this.wrapperIntro.classList = "wrapper__intro";
        this.wrapperCategoryBack.classList = "wrapper__category_back";

        this.wrapperBackFirst = document.createElement('div');
        this.wrapperBackSecond = document.createElement('div');
        this.wrapperBackThird = document.createElement('div');

        this.wrapperBackFirst.classList = "wrapper__category_back--quest wrapper__category_back--first";
        this.wrapperBackSecond.classList = "wrapper__category_back--quest wrapper__category_back--second";
        this.wrapperBackThird.classList = "wrapper__category_back--quest wrapper__category_back--third";
    }

    initAppend() {
        this.wrapperBack.appendChild(this.wrapperIntro);
        this.wrapperBack.appendChild(this.wrapperCategoryBack);
        this.wrapperBack.appendChild(this.wrapperBackFirst);
        this.wrapperBack.appendChild(this.wrapperBackSecond);
        this.wrapperBack.appendChild(this.wrapperBackThird);
    }
}

export { Game };