import { gsap } from "gsap";
import { ArrowsAll } from "./ArrowsAll.js"
import { Settings } from "./Settings.js";
import { Sounds } from "./Sounds.js";
import { Category } from "./Category.js";
import { QuestCat_1 } from "./QuestCat_1.js";
import { QuestCat_2 } from "./QuestCat_2.js";
import { QuestCat_3 } from "./QuestCat_3.js";
import {Game} from "./app.js";

class CategoryLoad {

    initCategory() {
        const
            categoryLoad = new Category(),
            arrowBackLoad = new ArrowsAll(),
            settingsLoad = new Settings(),
            questionLoads_1 = new QuestCat_1(),
            questionLoads_2 = new QuestCat_2(),
            questionLoads_3 = new QuestCat_3()
        ;

        const
            wrapper = document.querySelector('.wrapper'),
            container = document.querySelector('.container'),
            wrapperTop = document.querySelector('.wrapper__top'),
            wrapperTopTitle = document.createElement('div'),
            wrapperBottom = document.querySelector('.wrapper__bottom'),
            wrapperBack = document.querySelector('.wrapper__back'),
            containerQuest = document.querySelector('.container-quest'),
            backgroundMusicID = document.getElementById('backgroundMusicID'),
            wrapperIntro = document.querySelector('.wrapper__intro'),
            wrapperCategoryBack = document.querySelector('.wrapper__category_back'),
            containerCategoryBlock = document.createElement('div'),
            screenBrowserWidth = 400,
            soundsLoad = new Sounds()
        ;

        // container.className = 'container container-category';
        containerCategoryBlock.className = 'container__category';
        // wrapperTopTitle.className = 'wrapper__top_title';
        container.appendChild(containerCategoryBlock);

        categoryLoad.categoryMain('SecretHit', 'Тайный жар');
        categoryLoad.categoryMain('ChildLove', 'Каждый стих – дитя любви');
        categoryLoad.categoryMain('ThreeFaces', 'Три лика');
        categoryLoad.categoryProgress('progressSecretHitValue', 'progressSecretHitAll');
        categoryLoad.categoryProgress('progressChildLoveValue', 'progressChildLoveAll');
        categoryLoad.categoryProgress('progressThreeFacesValue', 'progressThreeFacesAll');

        const
            containerCategory = document.querySelector('.container__category'),
            categorySecretHit = document.getElementById('categorySecretHit'),
            categoryChildLove = document.getElementById('categoryChildLove'),
            categoryThreeFaces = document.getElementById('categoryThreeFaces')
        ;

        let progressSecretHitQuestSum = JSON.parse(localStorage.getItem('progressSecretHitAll')),
            progressChildLoveQuestSum = JSON.parse(localStorage.getItem('progressChildLoveAll')),
            progressThreeFacesQuestSum = JSON.parse(localStorage.getItem('progressThreeFacesAll'))
        ;

        const
            catBack = document.querySelector('.wrapper__category_back'),
            catBack_1 = document.querySelector('.wrapper__category_back--first'),
            catBack_2 = document.querySelector('.wrapper__category_back--second'),
            catBack_3 = document.querySelector('.wrapper__category_back--third')
        ;

        // catBack_1.className = 'wrapper__category_back wrapper__category_back--first';
        // catBack_2.className = 'wrapper__category_back wrapper__category_back--second';
        // catBack_3.className = 'wrapper__category_back wrapper__category_back--third';

        function categoryAnimation() {
            let tl = gsap.timeline();
            tl
                // .from(catBack, {
                //     autoAlpha: 0,
                //     duration: 0.6,
                //     delay: '-0.2'
                // })
                .from([categorySecretHit, categoryChildLove, categoryThreeFaces], {
                    autoAlpha: 0,
                    duration: 0.4,
                    delay: '0.3',
                    // y: "-0.5rem",
                    stagger: 0.1
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
                    wrapperBottom.removeChild(settingsClick);
                    container.removeChild(containerCategoryBlock);
                    // container.removeChild(categorySecretHit);
                    // container.removeChild(categoryChildLove);
                    // container.removeChild(categoryThreeFaces);
                    gsap.to(wrapperCategoryBack, {
                        duration: '0.5',
                        autoAlpha: 0,
                        zIndex: '-1'
                    });
                    gsap.to(wrapperIntro, {
                        delay: '0.2',
                        autoAlpha: 1,
                        zIndex: 1
                    });
                    // setTimeout(() => {
                    //     wrapperBack.removeChild(catBack);
                    // }, 2000);
                    const initGame = new Game();
                    initGame.initGame();
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
                    settingsClick,
                    containerCategoryBlock], {
                    autoAlpha: 0,
                    delay: '-0.1',
                    stagger: 0.07
                })
            ;
        });

        //Settings
        arrowBackLoad.clearStorage();
        const
            settingsClick = document.getElementById('settingsClick'),
            setProgressCat_1 = document.getElementById('progressSecretHitValue'),
            setProgressCat_2 = document.getElementById('progressChildLoveValue'),
            setProgressCat_3 = document.getElementById('progressThreeFacesValue')
        ;

        wrapperBottom.appendChild(settingsClick);
        settingsClick.addEventListener('click', () => {
            settingsLoad.settingsBlock();
            const
                settingsClearButton = document.getElementById('clearProgressButton'),
                settingsLightbox = document.querySelector('.wrapper__lightbox'),
                settingsBack = document.querySelector('.wrapper__lightbox_back'),
                settingsBlock = document.querySelector('.wrapper__lightbox_block'),
                settingsTitle = document.querySelector('.wrapper__lightbox_title'),
                settingsClose = document.getElementById('settingsCloseButton'),
                settingsCloseArray = [settingsClose, settingsBack]
            ;

            settingsClearButton.addEventListener('click', () => {
                localStorage.clear();
                this.localSetCat_1();
                this.localSetCat_2();
                this.localSetCat_3();
                // soundsLoad.rightAnswer('assets/games/igroskazy/sounds/progressClear.ogg');
                // setTimeout(() => {
                //     location.reload();
                // }, 800);
                setProgressCat_1.textContent = JSON.parse(localStorage.getItem('progressSecretHitAll'));
                setProgressCat_2.textContent = JSON.parse(localStorage.getItem('progressChildLoveAll'));
                setProgressCat_3.textContent = JSON.parse(localStorage.getItem('progressThreeFacesAll'));
                // categorySecretHit.className = 'container__category';
                // categoryChildLove.className = 'container__category';
                // categoryThreeFaces.className = 'container__category';

                let tl = gsap.timeline({
                    onComplete: () => {
                        wrapper.removeChild(settingsLightbox);
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

            for (let i = 0; i < settingsCloseArray.length; i++) {
                settingsCloseArray[i].addEventListener('click', () => {
                    let tl = gsap.timeline({
                        onComplete: () => {
                            wrapper.removeChild(settingsLightbox);
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
            }

        });

        //categoryCat_1 load
        categorySecretHit.addEventListener('click', () => {
            // soundsLoad.rightAnswer('assets/games/kraevedia/sounds/cp_categoryLoad.ogg');
            let tl = gsap.timeline({
                onComplete: () => {
                    wrapperBottom.removeChild(arrowBackClick);
                    wrapperBottom.removeChild(settingsClick);
                    container.removeChild(containerCategoryBlock);
                    // container.removeChild(categorySecretHit);
                    // container.removeChild(categoryChildLove);
                    // container.removeChild(categoryThreeFaces);
                    // wrapperBack.removeChild(catBack);
                    // container.className = 'container container-quest';
                    categoryLoad.categoryQuest('Тайный жар');
                    gsap.to(catBack, {
                        duration: '0.5',
                        // delay: '0.2',
                        autoAlpha: 0,
                        zIndex: '-1'
                    });
                    // wrapperBack.appendChild(catBack_1);
                    gsap.to(catBack_1, {
                        // duration: '0.5',
                        delay: '0.2',
                        autoAlpha: 1,
                        zIndex: '1'
                    });
                    this.localSetCat_1();
                    questionLoads_1.questionCat_1_1();
                }
            });
            tl
                .to([
                    containerCategoryBlock], {
                    autoAlpha: 0,
                    delay: '-0.1',
                    stagger: 0.07
                })
            ;
        });

        //categoryCat_2 load
        categoryChildLove.addEventListener('click', () => {
            // soundsLoad.rightAnswer('assets/games/kraevedia/sounds/cp_categoryLoad.ogg');
            let tl = gsap.timeline({
                onComplete: () => {
                    wrapperBottom.removeChild(arrowBackClick);
                    wrapperBottom.removeChild(settingsClick);
                    container.removeChild(containerCategoryBlock);
                    // container.removeChild(categorySecretHit);
                    // container.removeChild(categoryChildLove);
                    // container.removeChild(categoryThreeFaces);
                    // wrapper.removeChild(catBack);
                    // container.className = 'container';
                    categoryLoad.categoryQuest('Каждый стих – дитя любви');
                    gsap.to(catBack, {
                        duration: '0.5',
                        // delay: '0.2',
                        autoAlpha: 0,
                        zIndex: '-1'
                    });
                    // wrapperBack.appendChild(catBack_1);
                    gsap.to(catBack_2, {
                        // duration: '0.5',
                        delay: '0.2',
                        autoAlpha: 1,
                        zIndex: '1'
                    });
                    this.localSetCat_2();
                    questionLoads_2.questionCat_2_1();
                }
            });
            tl
                .to(containerCategoryBlock, {
                    autoAlpha: 0,
                    delay: '-0.1',
                    stagger: 0.07
                })
            ;
        });

        //categoryCat_3 load
        categoryThreeFaces.addEventListener('click', () => {
            // soundsLoad.rightAnswer('assets/games/kraevedia/sounds/cp_categoryLoad.ogg');
            let tl = gsap.timeline({
                onComplete: () => {
                    wrapperBottom.removeChild(arrowBackClick);
                    wrapperBottom.removeChild(settingsClick);
                    container.removeChild(containerCategoryBlock);
                    categoryLoad.categoryQuest('Три лика');
                    gsap.to(catBack, {
                        duration: '0.5',
                        // delay: '0.2',
                        autoAlpha: 0,
                        zIndex: '-1'
                    });
                    // wrapperBack.appendChild(catBack_1);
                    gsap.to(catBack_3, {
                        // duration: '0.5',
                        delay: '0.2',
                        autoAlpha: 1,
                        zIndex: '1'
                    });
                    this.localSetCat_3();
                    questionLoads_3.questionCat_3_1();
                }
            });
            tl
                .to([
                    containerCategoryBlock], {
                    autoAlpha: 0,
                    delay: '-0.1',
                    stagger: 0.07
                })
            ;
        });

        if (progressSecretHitQuestSum === 20) {
            categorySecretHit.className += ' category__main--hidden';
            categorySecretHit.style.userSelect = 'none';
        }

        if (progressChildLoveQuestSum === 20) {
            categoryChildLove.className += ' category__main--hidden';
            categoryChildLove.style.userSelect = 'none';
        }

        if (progressThreeFacesQuestSum === 20) {
            categoryThreeFaces.className += ' category__main--hidden';
            categoryThreeFaces.style.userSelect = 'none';
        }
    }

    localSetCat_1() {
        if (localStorage.getItem('progressSecretHit_1') === null ||
            localStorage.getItem('progressSecretHit_2') === null ||
            localStorage.getItem('progressSecretHit_3') === null ||
            localStorage.getItem('progressSecretHit_4') === null ||
            localStorage.getItem('progressSecretHit_5') === null ||
            localStorage.getItem('progressSecretHit_6') === null ||
            localStorage.getItem('progressSecretHit_7') === null ||
            localStorage.getItem('progressSecretHit_8') === null ||
            localStorage.getItem('progressSecretHit_9') === null ||
            localStorage.getItem('progressSecretHit_10') === null ||
            localStorage.getItem('progressSecretHit_11') === null ||
            localStorage.getItem('progressSecretHit_12') === null ||
            localStorage.getItem('progressSecretHit_13') === null ||
            localStorage.getItem('progressSecretHit_14') === null ||
            localStorage.getItem('progressSecretHit_15') === null ||
            localStorage.getItem('progressSecretHit_16') === null ||
            localStorage.getItem('progressSecretHit_17') === null ||
            localStorage.getItem('progressSecretHit_18') === null ||
            localStorage.getItem('progressSecretHit_19') === null ||
            localStorage.getItem('progressSecretHit_20') === null ||
            localStorage.getItem('progressSecretHitAll') === null ||
            localStorage.getItem('progressSecretHitAll') <= 20
        ) {
            localStorage.setItem('progressSecretHitAll', JSON.stringify(0));
            localStorage.setItem('progressSecretHit_1', JSON.stringify(0));
            localStorage.setItem('progressSecretHit_2', JSON.stringify(0));
            localStorage.setItem('progressSecretHit_3', JSON.stringify(0));
            localStorage.setItem('progressSecretHit_4', JSON.stringify(0));
            localStorage.setItem('progressSecretHit_5', JSON.stringify(0));
            localStorage.setItem('progressSecretHit_6', JSON.stringify(0));
            localStorage.setItem('progressSecretHit_7', JSON.stringify(0));
            localStorage.setItem('progressSecretHit_8', JSON.stringify(0));
            localStorage.setItem('progressSecretHit_9', JSON.stringify(0));
            localStorage.setItem('progressSecretHit_10', JSON.stringify(0));
            localStorage.setItem('progressSecretHit_11', JSON.stringify(0));
            localStorage.setItem('progressSecretHit_12', JSON.stringify(0));
            localStorage.setItem('progressSecretHit_13', JSON.stringify(0));
            localStorage.setItem('progressSecretHit_14', JSON.stringify(0));
            localStorage.setItem('progressSecretHit_15', JSON.stringify(0));
            localStorage.setItem('progressSecretHit_16', JSON.stringify(0));
            localStorage.setItem('progressSecretHit_17', JSON.stringify(0));
            localStorage.setItem('progressSecretHit_18', JSON.stringify(0));
            localStorage.setItem('progressSecretHit_19', JSON.stringify(0));
            localStorage.setItem('progressSecretHit_20', JSON.stringify(0));
        }
    }

    localSetCat_2() {
        if (localStorage.getItem('progressChildLove_1') === null ||
            localStorage.getItem('progressChildLove_2') === null ||
            localStorage.getItem('progressChildLove_3') === null ||
            localStorage.getItem('progressChildLove_4') === null ||
            localStorage.getItem('progressChildLove_5') === null ||
            localStorage.getItem('progressChildLove_6') === null ||
            localStorage.getItem('progressChildLove_7') === null ||
            localStorage.getItem('progressChildLove_8') === null ||
            localStorage.getItem('progressChildLove_9') === null ||
            localStorage.getItem('progressChildLove_10') === null ||
            localStorage.getItem('progressChildLove_11') === null ||
            localStorage.getItem('progressChildLove_12') === null ||
            localStorage.getItem('progressChildLove_13') === null ||
            localStorage.getItem('progressChildLove_14') === null ||
            localStorage.getItem('progressChildLove_15') === null ||
            localStorage.getItem('progressChildLove_16') === null ||
            localStorage.getItem('progressChildLove_17') === null ||
            localStorage.getItem('progressChildLove_18') === null ||
            localStorage.getItem('progressChildLove_19') === null ||
            localStorage.getItem('progressChildLove_20') === null ||
            localStorage.getItem('progressChildLoveAll') === null ||
            localStorage.getItem('progressChildLoveAll') <= 20
        ) {
            localStorage.setItem('progressChildLoveAll', JSON.stringify(0));
            localStorage.setItem('progressChildLove_1', JSON.stringify(0));
            localStorage.setItem('progressChildLove_2', JSON.stringify(0));
            localStorage.setItem('progressChildLove_3', JSON.stringify(0));
            localStorage.setItem('progressChildLove_4', JSON.stringify(0));
            localStorage.setItem('progressChildLove_5', JSON.stringify(0));
            localStorage.setItem('progressChildLove_6', JSON.stringify(0));
            localStorage.setItem('progressChildLove_7', JSON.stringify(0));
            localStorage.setItem('progressChildLove_8', JSON.stringify(0));
            localStorage.setItem('progressChildLove_9', JSON.stringify(0));
            localStorage.setItem('progressChildLove_10', JSON.stringify(0));
            localStorage.setItem('progressChildLove_11', JSON.stringify(0));
            localStorage.setItem('progressChildLove_12', JSON.stringify(0));
            localStorage.setItem('progressChildLove_13', JSON.stringify(0));
            localStorage.setItem('progressChildLove_14', JSON.stringify(0));
            localStorage.setItem('progressChildLove_15', JSON.stringify(0));
            localStorage.setItem('progressChildLove_16', JSON.stringify(0));
            localStorage.setItem('progressChildLove_17', JSON.stringify(0));
            localStorage.setItem('progressChildLove_18', JSON.stringify(0));
            localStorage.setItem('progressChildLove_19', JSON.stringify(0));
            localStorage.setItem('progressChildLove_20', JSON.stringify(0));
        }
    }

    localSetCat_3() {
        if (localStorage.getItem('progressThreeFaces_1') === null ||
            localStorage.getItem('progressThreeFaces_2') === null ||
            localStorage.getItem('progressThreeFaces_3') === null ||
            localStorage.getItem('progressThreeFaces_4') === null ||
            localStorage.getItem('progressThreeFaces_5') === null ||
            localStorage.getItem('progressThreeFaces_6') === null ||
            localStorage.getItem('progressThreeFaces_7') === null ||
            localStorage.getItem('progressThreeFaces_8') === null ||
            localStorage.getItem('progressThreeFaces_9') === null ||
            localStorage.getItem('progressThreeFaces_10') === null ||
            localStorage.getItem('progressThreeFaces_11') === null ||
            localStorage.getItem('progressThreeFaces_12') === null ||
            localStorage.getItem('progressThreeFaces_13') === null ||
            localStorage.getItem('progressThreeFaces_14') === null ||
            localStorage.getItem('progressThreeFaces_15') === null ||
            localStorage.getItem('progressThreeFaces_16') === null ||
            localStorage.getItem('progressThreeFaces_17') === null ||
            localStorage.getItem('progressThreeFaces_18') === null ||
            localStorage.getItem('progressThreeFaces_19') === null ||
            localStorage.getItem('progressThreeFaces_20') === null ||
            localStorage.getItem('progressThreeFacesAll') === null ||
            localStorage.getItem('progressThreeFacesAll') <= 20
        ) {
            localStorage.setItem('progressThreeFacesAll', JSON.stringify(0));
            localStorage.setItem('progressThreeFaces_1', JSON.stringify(0));
            localStorage.setItem('progressThreeFaces_2', JSON.stringify(0));
            localStorage.setItem('progressThreeFaces_3', JSON.stringify(0));
            localStorage.setItem('progressThreeFaces_4', JSON.stringify(0));
            localStorage.setItem('progressThreeFaces_5', JSON.stringify(0));
            localStorage.setItem('progressThreeFaces_6', JSON.stringify(0));
            localStorage.setItem('progressThreeFaces_7', JSON.stringify(0));
            localStorage.setItem('progressThreeFaces_8', JSON.stringify(0));
            localStorage.setItem('progressThreeFaces_9', JSON.stringify(0));
            localStorage.setItem('progressThreeFaces_10', JSON.stringify(0));
            localStorage.setItem('progressThreeFaces_11', JSON.stringify(0));
            localStorage.setItem('progressThreeFaces_12', JSON.stringify(0));
            localStorage.setItem('progressThreeFaces_13', JSON.stringify(0));
            localStorage.setItem('progressThreeFaces_14', JSON.stringify(0));
            localStorage.setItem('progressThreeFaces_15', JSON.stringify(0));
            localStorage.setItem('progressThreeFaces_16', JSON.stringify(0));
            localStorage.setItem('progressThreeFaces_17', JSON.stringify(0));
            localStorage.setItem('progressThreeFaces_18', JSON.stringify(0));
            localStorage.setItem('progressThreeFaces_19', JSON.stringify(0));
            localStorage.setItem('progressThreeFaces_20', JSON.stringify(0));
        }
    }
}

export { CategoryLoad }