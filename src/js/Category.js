import { gsap } from "gsap";

class Category {

    categoryMain(categoryID, categoryTitle) {
        const
            containerCat = document.querySelector('.container__category'),
            categoryBlock = document.createElement('div'),
            categoryBlockInside = document.createElement('div'),
            wrapperTopTitle = document.createElement('div'),
            categoryStarsCount = '20'
        ;
        categoryBlock.className = 'container__category_category';
        categoryBlock.id = `category${categoryID}`;
        categoryBlock.innerHTML = `
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
                        <span id="progress${categoryID}Value"></span>&nbsp;/&nbsp;${categoryStarsCount}
                    </div>
                </div>
            </div>
        `;
        containerCat.appendChild(categoryBlock);
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
            wrapper = document.querySelector('.wrapper'),
            wrapperCategoryBack = document.createElement('picture'),
            wrapperBack = document.querySelector('.wrapper__back'),
            wrapperCategoryTitle = document.createElement('div'),
            wrapperTop = document.querySelector('.wrapper__top'),
            wrapperCategoryBackTop = document.createElement('div'),
            wrapperPreloader = document.createElement('div'),
            containerQuest = document.createElement('div'),
            containerQuestBottom = document.createElement('div'),
            containerQuestBottomText = document.createElement('div'),
            containerQuestBottomButtons = document.createElement('ul')
        ;

        // wrapperCategoryBack.className = 'wrapper__category_back';
        // wrapperCategoryBackTop.className = 'wrapper__category_back wrapper__category_back--first';
        // wrapperCategoryBack.id = `${categoryBackID}`;
        // wrapperCategoryBackTop.id = `${categoryBackTopID}`;
        wrapperCategoryTitle.className = 'wrapper__top_title';
        // wrapperPreloader.className = 'wrapper__preloader';

        // containerQuest.className = 'container-quest';
        // containerQuestBottom.className = 'container-quest__bottom';

        // wrapper.appendChild(wrapperPreloader);
        // wrapperBack.appendChild(wrapperCategoryBack);
        // wrapperBack.appendChild(wrapperCategoryBackTop);
        wrapperTop.appendChild(wrapperCategoryTitle);
        // wrapper.appendChild(containerQuest);
        // containerQuest.appendChild(containerQuestBottom);

        wrapperCategoryTitle.innerHTML = `
            <h1>${categoryTitle}</h1>
        `;

        const
            wrapperCatBack = document.querySelector('.wrapper__back_category'),
            wrapperCatBackTop = document.querySelector('.wrapper__back_category--top'),
            wrapperCatTitle = document.querySelector('.wrapper__top_title'),
            wrapperPreload = document.querySelector('.wrapper__preloader')
        ;

        function catQuestAnim() {
            let tl = gsap.timeline({
                onComplete: () => {
                    // wrapper.removeChild(wrapperPreload);
                }
            });

            tl
                // .to(wrapperPreload, {
                //     duration: 0.6,
                //     delay: '0.3',
                //     autoAlpha: 0
                // })
                // .from(containerQuestBottom, {
                //     autoAlpha: 0,
                //     duration: 0.4,
                //     delay: '-0.2',
                //     // y: '50%',
                //     scale: 1.05
                // })
            // .from([wrapperCatBack, wrapperCatBackTop], {
                //     duration: '0.6',
                //     autoAlpha: 0
                //     // scale: '1.05'
                // })
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
}

export { Category }