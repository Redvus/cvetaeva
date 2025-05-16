import { gsap } from "gsap";
import { ArrowsAll } from "./ArrowsAll.js";
import { CategoryLoad } from "./CategoryLoad.js";

class Category {

    constructor() {
        this.arrowBackLoad = new ArrowsAll();
        this.initLayout();
        // this.initСategoryBack();
        // this.catQuestAnim();

        // this.initDev();
    }

    initLayout() {
        this.wrapper = document.querySelector('.wrapper');
        this.container = document.querySelector('.container');
        this.wrapperTop = document.querySelector('.wrapper__top');
        this.wrapperBottom = document.querySelector('.wrapper__bottom');
        this.wrapperIntro = document.querySelector('.wrapper__back_intro');

        // Кнопки
        // this.arrowBackLoad.arrowBack();
        this.arrowBackClick = document.getElementById('arrowBack');
    }

    categoryMain(categoryID, categoryTitle) {
        this.containerCat = document.querySelector('.container__category'),
        this.categoryBlock = document.createElement('div'),
        this.categoryStarsCount = '20';

        this.categoryBlock.className = 'container__category_category';
        this.categoryBlock.id = `category${categoryID}`;
        this.categoryBlock.innerHTML = `
            <div class="category__main">
                <div class="category__main_title">
                    <h3>${categoryTitle}</h3>
                </div>
                <div class="category__main_stars">
                    <?xml version="1.0" encoding="UTF-8"?>
                        <svg id="categoryStar" class="category__main_star" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 253.09 240.7">
                          <polygon points="126.54 0 165.65 79.23 253.09 91.94 189.82 153.61 204.75 240.7 126.54 199.58 48.34 240.7 63.27 153.61 0 91.94 87.44 79.23 126.54 0" stroke-width="0"/>
                        </svg>
                    <i class="fas fa-star"></i>
                    <div class="category__main_value">
                        <span id="progress${categoryID}Value"></span>&nbsp;/&nbsp;${this.categoryStarsCount}
                    </div>
                </div>
            </div>
        `;
        this.containerCat.appendChild(this.categoryBlock);
    }

    categoryProgress(progressID, progressNameValue) {
        let progressValue = document.getElementById(progressID),
            progressBasic = 0
        ;

        if (localStorage.getItem(progressNameValue) === null) {
            localStorage.setItem(progressNameValue, JSON.stringify(progressBasic));
            progressValue.textContent = JSON.parse(localStorage.getItem(progressNameValue));
        } else {
            progressValue.textContent = JSON.parse(localStorage.getItem(progressNameValue));
        }
    }

    categoryQuest(categoryTitle) {
        const
            wrapperCategoryTitle = document.createElement('div'),
            wrapperTop = document.querySelector('.wrapper__top')
        ;

        wrapperCategoryTitle.className = 'wrapper__top_title';
        wrapperCategoryTitle.innerHTML = `
            <h1>${categoryTitle}</h1>
        `;

        wrapperTop.appendChild(wrapperCategoryTitle);
    }

    categoryQuestSimple(categoryTitle, categoryBackID) {
        const
            wrapperCategoryBack = document.createElement('picture'),
            wrapperBack = document.querySelector('.wrapper__back'),
            wrapperCategoryTitle = document.createElement('div'),
            wrapperTop = document.querySelector('.wrapper__top')
        ;

        wrapperCategoryBack.className = 'wrapper__back_category';
        wrapperCategoryBack.id = `${categoryBackID}`;
        wrapperCategoryTitle.className = 'wrapper__top_title';

        wrapperBack.appendChild(wrapperCategoryBack);
        wrapperTop.appendChild(wrapperCategoryTitle);

        wrapperCategoryTitle.innerHTML = `
            <h1>${categoryTitle}</h1>
        `;

        const
            wrapperCatBack = document.querySelector('.wrapper__back_category'),
            wrapperCatTitle = document.querySelector('.wrapper__top_title')
        ;

        function catQuestAnim() {
            let tl = gsap.timeline();

            tl
                .from(wrapperCatBack, {
                    duration: '0.6',
                    autoAlpha: 0,
                    // scale: '1.05'
                })
                .from(wrapperCatTitle, {
                    duration: '0.3',
                    delay: '-0.1',
                    autoAlpha: 0,
                    y: '-10%'
                })
            ;
        }
        catQuestAnim();
    }

    initСategoryBack() {
        this.arrowBackClick.addEventListener('click', () => {
            let tl = gsap.timeline({
                onComplete: () => {
                    this.wrapperBottom.removeChild(this.arrowBackClick);
                    this.container.removeChild(this.containerCategoryBlock);
                    // container.removeChild(categorySecretHit);
                    // container.removeChild(categoryChildLove);
                    // container.removeChild(categoryThreeFaces);
                    new CategoryLoad();
                }
            });
            tl
                .to([
                    this.arrowBackClick,
                    this.containerCategoryBlock
                ], {
                    autoAlpha: 0,
                    delay: '-0.1',
                    stagger: 0.07
                })
                .to(this.wrapperIntro, {
                    autoAlpha: 1,
                    duration: '0.6',
                    delay: '-0.3'
                })
            ;
        });
    }

    catQuestAnim() {
        this.wrapperCatTitle = document.querySelector('.wrapper__top_title');

        let tl = gsap.timeline({
            onComplete: () => {
                // wrapper.removeChild(wrapperPreload);
            }
        });

        tl
            .from(this.wrapperCatTitle, {
                duration: '0.3',
                delay: '-0.1',
                autoAlpha: 0,
                y: '-10%'
            })
        ;
    }

    initDev() {
        this.wrapperIntro.style.opacity = '0';
        this.wrapperIntro.style.visibility = 'none';
    }
}

export { Category }