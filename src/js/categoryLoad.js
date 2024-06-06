import { gsap } from "gsap";
import { ArrowsAll } from "./ArrowsAll.js"
import { Settings } from "./Settings.js";
import { Category } from "./Category.js";
import { questionCat_1_1 } from "./questCat_1.js";

/* Category */
function categoryDev() {
    const
        wrapper = document.querySelector('.wrapper'),
        wrapperBottom = document.querySelector('.wrapper__bottom'),
        container = document.querySelector('.container'),
        categoryLoad = new Category(),
        arrowBackLoad = new ArrowsAll(),
        settingsLoad = new Settings()
    ;

    container.className = 'container container-category';

    categoryLoad.categoryMain('Europe', 'Европа');
    categoryLoad.categoryMain('Asia', 'Азия');
    categoryLoad.categoryMain('Africa', 'Африка');
    categoryLoad.categoryMain('America', 'Америка');
    categoryLoad.categoryMain('Australia', 'Австралия и&nbsp;Океания');
    categoryLoad.categoryProgress('progressEuropeValue', 'progressEuropeAll');
    categoryLoad.categoryProgress('progressAsiaValue', 'progressAsiaAll');
    categoryLoad.categoryProgress('progressAfricaValue', 'progressAfricaAll');
    categoryLoad.categoryProgress('progressAmericaValue', 'progressAmericaAll');
    categoryLoad.categoryProgress('progressAustraliaValue', 'progressAustraliaAll');

    const
        containerCategory = document.querySelector('.container__category'),
        categoryAllBack = document.createElement('picture'),
        categoryEurope = document.getElementById('categoryEurope'),
        categoryAsia = document.getElementById('categoryAsia'),
        categoryAfrica = document.getElementById('categoryAfrica'),
        categoryAmerica = document.getElementById('categoryAmerica'),
        categoryAustralia = document.getElementById('categoryAustralia')
    ;

    let progressEuropeQuestSum = JSON.parse(localStorage.getItem('progressEuropeAll')),
        progressAsiaQuestSum = JSON.parse(localStorage.getItem('progressAsiaAll')),
        progressAfricaQuestSum = JSON.parse(localStorage.getItem('progressAfricaAll')),
        progressAmericaQuestSum = JSON.parse(localStorage.getItem('progressAmericaAll')),
        progressAustraliaQuestSum = JSON.parse(localStorage.getItem('progressAustraliaAll'))
    ;

    categoryAllBack.className = 'wrapper__category_back';
    categoryAllBack.innerHTML = `
        <img src="assets/games/igroskazy/images/is_categoryBack_2.png" alt="">
    `;
    wrapper.appendChild(categoryAllBack);
    const catBack = document.querySelector('.wrapper__category_back');

    function categoryAnimation() {
        let tl = gsap.timeline();
        tl
            .from([categoryEurope, categoryAsia, categoryAfrica, categoryAmerica, categoryAustralia], {
                autoAlpha: 0,
                duration: 0.4,
                // delay: '-0.1',
                // y: "-0.5rem",
                stagger: 0.1
            })
            .from(catBack, {
                autoAlpha: 0,
                duration: 0.6,
                delay: '-0.2'
            })
        ;
    }
    categoryAnimation();

    arrowBackLoad.arrowBack();
    const arrowBackClick = document.getElementById('arrowBack');
    wrapperBottom.appendChild(arrowBackClick);

    arrowBackClick.addEventListener('click', () => {
        let tl = gsap.timeline({
            onComplete: () => {
                wrapperBottom.removeChild(arrowBackClick);
                wrapperBottom.removeChild(settingButton);
                container.removeChild(categoryEurope);
                container.removeChild(categoryAsia);
                container.removeChild(categoryAfrica);
                container.removeChild(categoryAmerica);
                container.removeChild(categoryAustralia);
                wrapper.removeChild(catBack);
                introDev();
            }
        });
        tl
            // .to(wrapperTopTitle, {
            //     autoAlpha: 0,
            //     delay: '-0.1',
            //     y: '-10%'
            // })
            .to([
                arrowBackClick,
                settingButton,
                categoryEurope,
                categoryAsia,
                categoryAfrica,
                categoryAmerica,
                categoryAustralia,
                catBack], {
                autoAlpha: 0,
                delay: '-0.1',
                stagger: 0.07
            })
        ;
    });

    //Settings
    arrowBackLoad.clearStorage();
    const
        settingButton = document.getElementById('settingsClick'),
        setProgressEurope = document.getElementById('progressEuropeValue'),
        setProgressAsia = document.getElementById('progressAsiaValue'),
        setProgressAfrica = document.getElementById('progressAfricaValue'),
        setProgressAmerica = document.getElementById('progressAmericaValue'),
        setProgressAustralia = document.getElementById('progressAustraliaValue'),
        wrapperTopTitle = document.querySelector('.wrapper__top')
    ;

    wrapperBottom.appendChild(settingButton);
    settingButton.addEventListener('click', () => {
        settingsLoad.settingsBlock();
        const
            settingsClearButton = document.getElementById('clearProgressButton'),
            settingsBack = document.querySelector('.wrapper__lightbox'),
            settingsBlock = document.querySelector('.wrapper__lightbox_block'),
            settingsTitle = document.querySelector('.wrapper__lightbox_title'),
            settingsClose = document.getElementById('settingsCloseButton')
        ;

        settingsClearButton.addEventListener('click', () => {
            localStorage.clear();
            localSetEurope();
            // soundsLoad.rightAnswer('assets/games/igroskazy/sounds/progressClear.ogg');
            // setTimeout(() => {
            //     location.reload();
            // }, 800);
            setProgressEurope.textContent = JSON.parse(localStorage.getItem('progressEuropeAll'));
            setProgressAsia.textContent = JSON.parse(localStorage.getItem('progressAsiaAll'));
            setProgressAfrica.textContent = JSON.parse(localStorage.getItem('progressAfricaAll'));
            setProgressAmerica.textContent = JSON.parse(localStorage.getItem('progressAmericaAll'));
            setProgressAustralia.textContent = JSON.parse(localStorage.getItem('progressAustraliaAll'));
            categoryEurope.className = 'container__category';
            categoryAsia.className = 'container__category';
            categoryAfrica.className = 'container__category';
            categoryAmerica.className = 'container__category';
            categoryAustralia.className = 'container__category';

            let tl = gsap.timeline({
                onComplete: () => {
                    wrapper.removeChild(settingsBack);
                }
            });
            tl
                .to(settingsTitle, {
                    duration: 0.3,
                    y: '-10%',
                    autoAlpha: 0
                })
                .to(settingsBlock, {
                    duration: 0.3,
                    y: '3%',
                    autoAlpha: 0
                })
                .to(settingsBack, {
                    duration: 0.3,
                    autoAlpha: 0
                })
            ;
        });

        settingsClose.addEventListener('click', () => {
            let tl = gsap.timeline({
                onComplete: () => {
                    wrapper.removeChild(settingsBack);
                }
            });
            tl
                .to(settingsTitle, {
                    duration: 0.3,
                    y: '-10%',
                    autoAlpha: 0
                })
                .to(settingsBlock, {
                    duration: 0.3,
                    y: '3%',
                    autoAlpha: 0
                })
                .to(settingsBack, {
                    duration: 0.3,
                    autoAlpha: 0
                })
            ;
        });
    });

    //categoryEurope load
    categoryEurope.addEventListener('click', () => {
        // soundsLoad.rightAnswer('assets/games/kraevedia/sounds/cp_categoryLoad.ogg');
        let tl = gsap.timeline({
            onComplete: () => {
                wrapperBottom.removeChild(arrowBackClick);
                wrapperBottom.removeChild(settingButton);
                container.removeChild(categoryEurope);
                container.removeChild(categoryAsia);
                container.removeChild(categoryAfrica);
                container.removeChild(categoryAmerica);
                container.removeChild(categoryAustralia);
                wrapper.removeChild(catBack);
                container.className = 'container';
                categoryLoad.categoryQuest(
                    'Европа',
                    'wrapperBackEurope',
                    'wrapperBackEuropeTop');
                localSetEurope();
                questionCat_1_1();
            }
        });
        tl
            .to([
                arrowBackClick,
                settingButton,
                categoryEurope,
                categoryAsia,
                categoryAfrica,
                categoryAmerica,
                categoryAustralia,
                catBack], {
                autoAlpha: 0,
                delay: '-0.1',
                stagger: 0.07
            })
        ;
    });

    //categoryAsia load
    categoryAsia.addEventListener('click', () => {
        // soundsLoad.rightAnswer('assets/games/kraevedia/sounds/cp_categoryLoad.ogg');
        let tl = gsap.timeline({
            onComplete: () => {
                wrapperBottom.removeChild(arrowBackClick);
                wrapperBottom.removeChild(settingButton);
                container.removeChild(categoryEurope);
                container.removeChild(categoryAsia);
                container.removeChild(categoryAfrica);
                container.removeChild(categoryAmerica);
                container.removeChild(categoryAustralia);
                wrapper.removeChild(catBack);
                container.className = 'container';
                categoryLoad.categoryQuest(
                    'Азия',
                    'wrapperBackAsia',
                    'wrapperBackAsiaTop');
                questionCat_2_0();
            }
        });
        tl
            .to([
                arrowBackClick,
                settingButton,
                categoryEurope,
                categoryAsia,
                categoryAfrica,
                categoryAmerica,
                categoryAustralia,
                catBack], {
                autoAlpha: 0,
                delay: '-0.1',
                stagger: 0.07
            })
        ;
    });

    //categoryAfrica load
    categoryAfrica.addEventListener('click', () => {
        // soundsLoad.rightAnswer('assets/games/kraevedia/sounds/cp_categoryLoad.ogg');
        let tl = gsap.timeline({
            onComplete: () => {
                wrapperBottom.removeChild(arrowBackClick);
                wrapperBottom.removeChild(settingButton);
                container.removeChild(categoryEurope);
                container.removeChild(categoryAsia);
                container.removeChild(categoryAfrica);
                container.removeChild(categoryAmerica);
                container.removeChild(categoryAustralia);
                wrapper.removeChild(catBack);
                container.className = 'container';
                categoryLoad.categoryQuest(
                    'Африка',
                    'wrapperBackAfrica',
                    'wrapperBackAfricaTop');
                questionCat_3_0();
            }
        });
        tl
            .to([
                arrowBackClick,
                settingButton,
                categoryEurope,
                categoryAsia,
                categoryAfrica,
                categoryAmerica,
                categoryAustralia,
                catBack], {
                autoAlpha: 0,
                delay: '-0.1',
                stagger: 0.07
            })
        ;
    });

    if (progressEuropeQuestSum === 15) {
        categoryEurope.className += ' category__main--hidden';
        categoryEurope.style.userSelect = 'none';
    }

    if (progressAsiaQuestSum === 15) {
        categoryAsia.className += ' category__main--hidden';
    }

    if (progressAfricaQuestSum === 15) {
        categoryAfrica.className += ' category__main--hidden';
    }

    if (progressAmericaQuestSum === 15) {
        categoryAmerica.className += ' category__main--hidden';
    }

    if (progressAustraliaQuestSum === 15) {
        categoryAustralia.className += ' category__main--hidden';
    }
}