import { gsap } from "gsap";
import { ArrowsAll } from "./ArrowsAll.js"
import { Settings } from "./Settings.js";
import { Sounds } from "./Sounds.js";
import { Category } from "./Category.js";
import { QuestCat_1 } from "./QuestCat_1.js";
import { QuestCat_2 } from "./QuestCat_2.js";
import { QuestCat_3 } from "./QuestCat_3.js";
import { Intro } from "./Intro.js";

class CategoryLoad {

    constructor() {
        this.soundsLoad = new Sounds();
        this.arrowBackLoad = new ArrowsAll();
        this.categoryLoad = new Category();
        this.settingsLoad = new Settings();
        this.questionLoads_1 = new QuestCat_1();
        this.questionLoads_2 = new QuestCat_2();
        this.questionLoads_3 = new QuestCat_3();
        this.initLayout();
        this.initCategory();
        this.initСategoryBack();
        this.initCategorySettings();
        this.initCategoryLoadAnim();

        // this.initDev();
    }

    initLayout() {
        this.wrapper = document.querySelector('.wrapper');
        this.container = document.querySelector('.container');
        this.wrapperTop = document.querySelector('.wrapper__top');
        this.wrapperTopTitle = document.createElement('div');
        this.wrapperBottom = document.querySelector('.wrapper__bottom');
        this.wrapperBack = document.querySelector('.wrapper__back');
        this.containerQuest = document.querySelector('.container-quest');
        this.backgroundMusicID = document.getElementById('backgroundMusicID');
        this.wrapperIntro = document.querySelector('.wrapper__intro');
        this.wrapperCategoryBack = document.querySelector('.wrapper__category_back');
        this.containerCategoryBlock = document.createElement('div');
        this.screenBrowserWidth = 400;

        this.containerCategoryBlock.className = 'container__category';
        this.container.appendChild(this.containerCategoryBlock);

        // Кнопки
        this.arrowBackLoad.arrowBack();
        this.arrowBackLoad.clearStorage();
        this.arrowBackClick = document.getElementById('arrowBack');
        this.settingsClick = document.getElementById('settingsClick');
        this.wrapperBottom.appendChild(this.arrowBackClick);
        this.wrapperBottom.appendChild(this.settingsClick);

        // Категории
        this.categoryLoad.categoryMain('SecretHit', 'Тайный жар');
        this.categoryLoad.categoryMain('ChildLove', 'Каждый стих – дитя любви');
        this.categoryLoad.categoryMain('ThreeFaces', 'Три лика');
        this.categoryLoad.categoryProgress('progressSecretHitValue', 'progressSecretHitAll');
        this.categoryLoad.categoryProgress('progressChildLoveValue', 'progressChildLoveAll');
        this.categoryLoad.categoryProgress('progressThreeFacesValue', 'progressThreeFacesAll');

        this.categorySecretHit = document.getElementById('categorySecretHit');
        this.categoryChildLove = document.getElementById('categoryChildLove');
        this.categoryThreeFaces = document.getElementById('categoryThreeFaces');
    }

    initСategoryBack() {
        this.arrowBackClick.addEventListener('click', () => {
            let tl = gsap.timeline({
                onComplete: () => {
                    this.wrapperBottom.removeChild(this.arrowBackClick);
                    this.wrapperBottom.removeChild(this.settingsClick);
                    this.container.removeChild(this.containerCategoryBlock);
                    // container.removeChild(categorySecretHit);
                    // container.removeChild(categoryChildLove);
                    // container.removeChild(categoryThreeFaces);
                    new Intro();
                }
            });
            tl
                .to([
                    this.arrowBackClick,
                    this.settingsClick,
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

    initCategorySettings() {
        this.setProgressCat_1 = document.getElementById('progressSecretHitValue');
        this.setProgressCat_2 = document.getElementById('progressChildLoveValue');
        this.setProgressCat_3 = document.getElementById('progressThreeFacesValue');

        this.settingsClick.addEventListener('click', () => {
            this.settingsLoad.settingsBlock();
            this.settingsClearButton = document.getElementById('clearProgressButton');
            this.settingsLightbox = document.querySelector('.wrapper__lightbox');
            this.settingsBack = document.querySelector('.wrapper__lightbox_back');
            this.settingsBlock = document.querySelector('.wrapper__lightbox_block');
            this.settingsTitle = document.querySelector('.wrapper__lightbox_title');
            this.settingsClose = document.getElementById('settingsCloseButton');
            this.settingsCloseArray = [this.settingsClose, this.settingsBack];

            this.settingsClearButton.addEventListener('click', () => {
                localStorage.clear();
                this.localSetCat_1();
                this.localSetCat_2();
                this.localSetCat_3();
                // soundsLoad.rightAnswer('assets/games/igroskazy/sounds/progressClear.ogg');
                // setTimeout(() => {
                //     location.reload();
                // }, 800);
                this.setProgressCat_1.textContent = JSON.parse(localStorage.getItem('progressSecretHitAll'));
                this.setProgressCat_2.textContent = JSON.parse(localStorage.getItem('progressChildLoveAll'));
                this.setProgressCat_3.textContent = JSON.parse(localStorage.getItem('progressThreeFacesAll'));
                this.categorySecretHit.firstElementChild.className = 'category__main';
                this.categorySecretHit.style.userSelect = '';
                this.categorySecretHit.style.pointerEvents = '';
                this.categoryChildLove.firstElementChild.className = 'category__main';
                this.categoryChildLove.style.userSelect = '';
                this.categoryChildLove.style.pointerEvents = '';
                this.categoryThreeFaces.firstElementChild.className = 'category__main';
                this.categoryThreeFaces.style.userSelect = '';
                this.categoryThreeFaces.style.pointerEvents = '';

                let tl = gsap.timeline({
                    onComplete: () => {
                        this.wrapper.removeChild(this.settingsLightbox);
                    }
                });
                tl
                    // .to(this.settingsTitle, {
                    //     duration: 0.3,
                    //     y: '-10%',
                    //     autoAlpha: 0
                    // })
                    .to(this.settingsBlock, {
                        duration: 0.3,
                        y: '3%',
                        autoAlpha: 0
                    })
                    .to(this.settingsBack, {
                        duration: 0.3,
                        autoAlpha: 0
                    })
                ;
            });

            for (let i = 0; i < this.settingsCloseArray.length; i++) {
                this.settingsCloseArray[i].addEventListener('click', () => {
                    let tl = gsap.timeline({
                        onComplete: () => {
                            this.wrapper.removeChild(this.settingsLightbox);
                        }
                    });
                    tl
                        // .to(this.settingsTitle, {
                        //     duration: 0.3,
                        //     y: '-10%',
                        //     autoAlpha: 0
                        // })
                        .to(this.settingsBlock, {
                            duration: 0.3,
                            y: '3%',
                            autoAlpha: 0
                        })
                        .to(this.settingsBack, {
                            duration: 0.3,
                            autoAlpha: 0
                        })
                    ;
                });
            }
        });
    }

    initCategory() {
        this.progressSecretHitQuestSum = JSON.parse(localStorage.getItem('progressSecretHitAll'));
        this.progressChildLoveQuestSum = JSON.parse(localStorage.getItem('progressChildLoveAll'));
        this.progressThreeFacesQuestSum = JSON.parse(localStorage.getItem('progressThreeFacesAll'));

        this.catBack = document.querySelector('.wrapper__category_back');
        this.catBack_1 = document.querySelector('.wrapper__category_back--first');
        this.catBack_2 = document.querySelector('.wrapper__category_back--second');
        this.catBack_3 = document.querySelector('.wrapper__category_back--third');

        //categoryCat_1 load
        this.categorySecretHit.addEventListener('click', () => {
            // soundsLoad.rightAnswer('assets/games/kraevedia/sounds/cp_categoryLoad.ogg');
            let tl = gsap.timeline({
                onComplete: () => {
                    this.wrapperBottom.removeChild(this.arrowBackClick);
                    this.wrapperBottom.removeChild(this.settingsClick);
                    this.container.removeChild(this.containerCategoryBlock);
                    this.categoryLoad.categoryQuest('Тайный жар');
                    this.localSetCat_1();
                    this.questionLoads_1.questionCat_1_1();
                }
            });
            tl
                .to(this.containerCategoryBlock, {
                    autoAlpha: 0,
                    delay: '-0.1',
                    stagger: 0.07
                })
            ;
        });

        //categoryCat_2 load
        this.categoryChildLove.addEventListener('click', () => {
            // soundsLoad.rightAnswer('assets/games/kraevedia/sounds/cp_categoryLoad.ogg');
            let tl = gsap.timeline({
                onComplete: () => {
                    this.wrapperBottom.removeChild(this.arrowBackClick);
                    this.wrapperBottom.removeChild(this.settingsClick);
                    this.container.removeChild(this.containerCategoryBlock);
                    this.categoryLoad.categoryQuest('Каждый стих–дитя любви');
                    this.localSetCat_2();
                    this.questionLoads_2.questionCat_2_1();
                }
            });
            tl
                .to(this.containerCategoryBlock, {
                    autoAlpha: 0,
                    delay: '-0.1',
                    stagger: 0.07
                })
            ;
        });

        //categoryCat_3 load
        this.categoryThreeFaces.addEventListener('click', () => {
            // soundsLoad.rightAnswer('assets/games/kraevedia/sounds/cp_categoryLoad.ogg');
            let tl = gsap.timeline({
                onComplete: () => {
                    this.wrapperBottom.removeChild(this.arrowBackClick);
                    this.wrapperBottom.removeChild(this.settingsClick);
                    this.container.removeChild(this.containerCategoryBlock);
                    this.categoryLoad.categoryQuest('Три лика');
                    this.localSetCat_3();
                    this.questionLoads_3.questionCat_3_1();
                }
            });
            tl
                .to(this.containerCategoryBlock, {
                    autoAlpha: 0,
                    delay: '-0.1',
                    stagger: 0.07
                })
            ;
        });

        if (this.progressSecretHitQuestSum === 20) {
            this.categorySecretHit.firstElementChild.className += ' category__main--hidden';
            this.categorySecretHit.style.userSelect = 'none';
            this.categorySecretHit.style.pointerEvents = 'none';
        }

        if (this.progressChildLoveQuestSum === 20) {
            this.categoryChildLove.firstElementChild.className += ' category__main--hidden';
            this.categoryChildLove.style.userSelect = 'none';
            this.categoryChildLove.style.pointerEvents = 'none';
        }

        if (this.progressThreeFacesQuestSum === 20) {
            this.categoryThreeFaces.firstElementChild.className += ' category__main--hidden';
            this.categoryThreeFaces.style.userSelect = 'none';
            this.categoryThreeFaces.style.pointerEvents = 'none';
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

    initCategoryLoadAnim() {
        let tl = gsap.timeline({
            delay: '-0.3'
        });
        tl
            .from([
                this.categorySecretHit,
                this.categoryChildLove,
                this.categoryThreeFaces
            ], {
                autoAlpha: 0,
                duration: 0.3,
                delay: '0.3',
                y: "-0.5rem",
                stagger: 0.1
            })
            .from([
                this.arrowBackClick,
                this.settingsClick
            ], {
                duration: '0.3',
                delay: '-0.1',
                autoAlpha: 0,
                y: '10%'
            })
        ;
    }

    initDev() {
        const introBack = document.querySelector('.wrapper__intro');
        introBack.style.opacity = '0';
        introBack.style.visibility = 'none';
    }
}

export { CategoryLoad }