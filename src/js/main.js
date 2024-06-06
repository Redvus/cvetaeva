import '../scss/main.scss';
import { gsap } from "gsap";
import { Intro } from "./Intro.js";
import { About } from "./About.js";
import { ArrowsAll } from "./ArrowsAll.js"
import { Settings } from "./Settings.js";
import { Sounds } from "./Sounds.js";
import { Category } from "./Category.js";

class Game {

    constructor() {
        this.initLayout();
        // this.initGame();
        this.initMobile();
        this.initCategory();
    }

    initLayout() {
        document.getElementById('app').innerHTML = `
            <div class="container"></div>
            <div class="wrapper__top"></div>
            <div class="wrapper__back"></div>
            <div class="wrapper__bottom"></div>
            <div class="container-quest"></div>
        `;

        this.wrapper = document.querySelector('.wrapper');
        this.container = document.querySelector('.container');
        this.wrapperTop = document.querySelector('.wrapper__top');
        this.wrapperBottom = document.querySelector('.wrapper__bottom');
        this.wrapperBack = document.querySelector('.wrapper__back');
        this.containerQuest = document.querySelector('.container-quest');
        this.backgroundMusicID = document.getElementById('backgroundMusicID');
        this.arrowBackLoad = new ArrowsAll();
        this.screenBrowserWidth = 400;
        this.soundsLoad = new Sounds();
    }

    initGame() {
        const introDevLoad = new Intro();
        introDevLoad.introStart();

        const
            clickLoadGame = document.getElementById('clickLoadGame'),
            clickAuthors = document.getElementById('clickAboutAuthors'),
            clickAbout = document.getElementById('clickAboutLibrary'),
            wrapperIntro = document.querySelector('.wrapper__intro'),
            wrapperBottomMenu = document.querySelector('.wrapper__bottom_menu'),
            wrapperTopTitle = document.querySelector('.wrapper__top_title')
        ;

        clickLoadGame.addEventListener('click', () => {

            // Music Background
            // if (backgroundMusicID === null) {
            //     soundsLoad.backgroundMusicLoad('assets/games/oldApartment/sounds/oa_ambient.ogg');
            //     localStorage.setItem('backgroundMusic', JSON.stringify(1));
            // } else if (backgroundMusicID.paused || localStorage.getItem('backgroundMusic') === '0') {
            //     backgroundMusicID.pause();
            //     localStorage.setItem('backgroundMusic', JSON.stringify(0));
            // }

            let tl = gsap.timeline({
                onComplete: () => {
                    this.wrapperTop.innerHTML = '';
                    this.wrapperBack.removeChild(wrapperIntro);
                    this.wrapperBottom.removeChild(wrapperBottomMenu);
                    this.initCategory();
                }
            });
            tl
                .to(wrapperTopTitle, {
                    autoAlpha: 0,
                    duration: 0.3,
                    y: '-10%'
                })
                .to([wrapperBottomMenu, wrapperIntro], {
                    duration: 0.3,
                    // delay: '-0.2',
                    autoAlpha: 0
                })
            ;
        });

        clickAuthors.addEventListener('click', () => {
            let tl = gsap.timeline({
                onComplete: () => {
                    this.wrapperTop.innerHTML = '';
                    this.wrapperTop.className = 'wrapper__top';
                    this.wrapperBack.removeChild(wrapperIntro);
                    this.wrapperBottom.removeChild(wrapperBottomMenu);
                    this.authorsStart();
                }
            });
            tl
                .to(wrapperTopTitle, {
                    autoAlpha: 0,
                    duration: 0.3,
                    y: '-10%'
                })
                .to([wrapperBottomMenu, wrapperIntro], {
                    duration: 0.3,
                    // delay: '-0.4',
                    autoAlpha: 0
                })
            ;
        });

        clickAbout.addEventListener('click', () => {
            let tl = gsap.timeline({
                onComplete: () => {
                    this.wrapperTop.innerHTML = '';
                    this.wrapperTop.className = 'wrapper__top';
                    this.wrapperBack.removeChild(wrapperIntro);
                    this.wrapperBottom.removeChild(wrapperBottomMenu);
                    this.aboutStart();
                }
            });
            tl
                .to(wrapperTopTitle, {
                    autoAlpha: 0,
                    duration: 0.3,
                    y: '-10%'
                })
                .to([wrapperBottomMenu, wrapperIntro], {
                    duration: 0.3,
                    // delay: '-0.4',
                    autoAlpha: 0
                })
            ;
        });
    }

    /* Authors */
    authorsStart() {
        const authorsLoad = new About();

        authorsLoad.aboutAuthors('Сценарист',
            'Инна Ямщикова',
            'Художники',
            'Елена Расторгуева',
            'Анастасия Полякова',
            'Программист',
            'Александр Суворов');

        const
            containerAbout = document.querySelector('.container__about_block'),
            wrapperTopTitle = document.querySelector('.wrapper__top_title'),
            wrapperAboutBack = document.querySelector('.wrapper__intro_about')
        ;

        this.arrowBackLoad.arrowBack();
        const arrowBackClick = document.getElementById('arrowBack');
        this.wrapperBottom.appendChild(arrowBackClick);

        arrowBackClick.addEventListener('click', () => {
            let tl = gsap.timeline({
                onComplete: () => {
                    this.wrapperBottom.removeChild(arrowBackClick);
                    this.container.removeChild(containerAbout);
                    this.wrapperTop.removeChild(wrapperTopTitle);
                    this.wrapperBack.removeChild(wrapperAboutBack);
                    this.initGame();
                }
            });
            tl
                .to(wrapperTopTitle, {
                    autoAlpha: 0,
                    delay: '-0.1',
                    y: '-10%'
                })
                .to([
                    containerAbout,
                    arrowBackClick,
                    wrapperAboutBack], {
                    autoAlpha: 0,
                    delay: '-0.1'
                })
            ;
        });
    }

    /* About */
    aboutStart() {
        const aboutLoad = new About();

        aboutLoad.aboutLibrary('МБУК г.о. Самара «Самарская муниципальная информационно-библиотечная система» была создана в декабре 1986 года. На сегодняшний день в ее составе&nbsp;– Центральная городская библиотека имени Н.К. Крупской и 35 библиотек-филиалов, нашими читателями являются жители всех 9 районов города. Библиотеки системы&nbsp;– это информационные, образовательные центры, место культурного отдыха и общения. СМИБС находится в центре мировых событий, активно участвует в общероссийских акциях и в жизни города.', 'В библиотеках системы можно получить информацию и литературу по любой теме, доступ к электронным базам данных, воспользоваться услугами Интернет-залов, Центрами общественного доступа, побывать на презентациях выставок и творческих встречах, а также воспользоваться дополнительными сервисными услугами:<ul><li>ксерокопированием</li><li>сканированием</li><li>ламинированием</li><li>документов</li><li>распечаткой информации</li><li>на принтере</li><li>записью на электронные</li><li>носители</li></ul>');

        const
            wrapperTitleAuthors = document.querySelector('.wrapper__top_title'),
            containerAboutLeft = document.querySelector('.container__about_left'),
            containerAboutRight = document.querySelector('.container__about_right'),
            containerAbout = document.querySelector('.container__about_block'),
            wrapperTopTitle = document.querySelector('.wrapper__top_title'),
            wrapperAboutBack = document.querySelector('.wrapper__intro_about')
        ;

        this.arrowBackLoad.arrowBack();
        const arrowBackClick = document.getElementById('arrowBack');
        this.wrapperBottom.appendChild(arrowBackClick);

        arrowBackClick.addEventListener('click', () => {
            let tl = gsap.timeline({
                onComplete: () => {
                    this.wrapperBottom.removeChild(arrowBackClick);
                    this.container.removeChild(containerAbout);
                    this.wrapperTop.removeChild(wrapperTopTitle);
                    this.wrapperBack.removeChild(wrapperAboutBack);
                    this.container.style = 'none';

                    this.initGame();
                }
            });
            tl
                .to(wrapperTopTitle, {
                    autoAlpha: 0,
                    delay: '-0.1',
                    y: '-10%'
                })
                .to([
                    containerAbout,
                    arrowBackClick,
                    wrapperAboutBack], {
                    autoAlpha: 0,
                    delay: '-0.1'
                })
            ;
        });
    }

    initCategory() {
        const
            categoryLoad = new Category(),
            arrowBackLoad = new ArrowsAll(),
            settingsLoad = new Settings()
        ;

        this.container.className = 'container container-category';

        categoryLoad.categoryMain('SecretHit', 'Тайный жар');
        categoryLoad.categoryMain('ChildLove', 'Каждый стих – дитя любви');
        categoryLoad.categoryMain('ThreeFaces', 'Три лика');
        categoryLoad.categoryProgress('progressSecretHitValue', 'progressSecretHitAll');
        categoryLoad.categoryProgress('progressChildLoveValue', 'progressChildLoveAll');
        categoryLoad.categoryProgress('progressThreeFacesValue', 'progressThreeFacesAll');

        const
            containerCategory = document.querySelector('.container__category'),
            categoryAllBack = document.createElement('picture'),
            categorySecretHit = document.getElementById('categorySecretHit'),
            categoryChildLove = document.getElementById('categoryChildLove'),
            categoryThreeFaces = document.getElementById('categoryThreeFaces')
        ;

        let progressSecretHitQuestSum = JSON.parse(localStorage.getItem('progressSecretHitAll')),
            progressChildLoveQuestSum = JSON.parse(localStorage.getItem('progressChildLoveAll')),
            progressThreeFacesQuestSum = JSON.parse(localStorage.getItem('progressThreeFacesAll'))
        ;

        categoryAllBack.className = 'wrapper__category_back';
        categoryAllBack.innerHTML = `
        <img src="images/c_categoryBack_3.jpg" alt="">
    `;
        this.wrapper.appendChild(categoryAllBack);
        const catBack = document.querySelector('.wrapper__category_back');

        function categoryAnimation() {
            let tl = gsap.timeline();
            tl
                .from(catBack, {
                    autoAlpha: 0,
                    duration: 0.6,
                    delay: '-0.2'
                })
                .from([categorySecretHit, categoryChildLove, categoryThreeFaces], {
                    autoAlpha: 0,
                    duration: 0.4,
                    delay: '-0.1',
                    // y: "-0.5rem",
                    stagger: 0.1
                })
            ;
        }
        categoryAnimation();

        arrowBackLoad.arrowBack();
        const arrowBackClick = document.getElementById('arrowBack');
        this.wrapperBottom.appendChild(arrowBackClick);

        arrowBackClick.addEventListener('click', () => {
            let tl = gsap.timeline({
                onComplete: () => {
                    this.wrapperBottom.removeChild(arrowBackClick);
                    this.wrapperBottom.removeChild(settingButton);
                    this.container.removeChild(categorySecretHit);
                    this.container.removeChild(categoryChildLove);
                    this.container.removeChild(categoryThreeFaces);
                    this.wrapper.removeChild(catBack);
                    this.initGame();
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
                    categorySecretHit,
                    categoryChildLove,
                    categoryThreeFaces,
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
            setProgressCat_1 = document.getElementById('progressSecretHitValue'),
            setProgressCat_2 = document.getElementById('progressChildLoveValue'),
            setProgressCat_3 = document.getElementById('progressThreeFacesValue'),
            wrapperTopTitle = document.querySelector('.wrapper__top')
        ;

        this.wrapperBottom.appendChild(settingButton);
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
                categorySecretHit.className = 'container__category';
                categoryChildLove.className = 'container__category';
                categoryThreeFaces.className = 'container__category';

                let tl = gsap.timeline({
                    onComplete: () => {
                        this.wrapper.removeChild(settingsBack);
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
                        this.wrapper.removeChild(settingsBack);
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

        //categoryCat_1 load
        categorySecretHit.addEventListener('click', () => {
            // soundsLoad.rightAnswer('assets/games/kraevedia/sounds/cp_categoryLoad.ogg');
            let tl = gsap.timeline({
                onComplete: () => {
                    this.wrapperBottom.removeChild(arrowBackClick);
                    this.wrapperBottom.removeChild(settingButton);
                    this.container.removeChild(categorySecretHit);
                    this.container.removeChild(categoryChildLove);
                    this.container.removeChild(categoryThreeFaces);
                    this.wrapper.removeChild(catBack);
                    this.container.className = 'container';
                    categoryLoad.categoryQuest(
                        'Европа',
                        'wrapperBackEurope',
                        'wrapperBackEuropeTop');
                    this.localSetCat_1();
                    questionCat_1_0();
                }
            });
            tl
                .to([
                    arrowBackClick,
                    settingButton,
                    categorySecretHit,
                    categoryChildLove,
                    categoryThreeFaces,
                    catBack], {
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
                    this.wrapperBottom.removeChild(arrowBackClick);
                    this.wrapperBottom.removeChild(settingButton);
                    this.container.removeChild(categorySecretHit);
                    this.container.removeChild(categoryChildLove);
                    this.container.removeChild(categoryThreeFaces);
                    this.wrapper.removeChild(catBack);
                    this.container.className = 'container';
                    categoryLoad.categoryQuest(
                        'Азия',
                        'wrapperBackAsia',
                        'wrapperBackAsiaTop');
                    this.localSetCat_2();
                    questionCat_2_0();
                }
            });
            tl
                .to([
                    arrowBackClick,
                    settingButton,
                    categorySecretHit,
                    categoryChildLove,
                    categoryThreeFaces,
                    catBack], {
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
                    this.wrapperBottom.removeChild(arrowBackClick);
                    this.wrapperBottom.removeChild(settingButton);
                    this.container.removeChild(categorySecretHit);
                    this.container.removeChild(categoryChildLove);
                    this.container.removeChild(categoryThreeFaces);
                    this.wrapper.removeChild(catBack);
                    this.container.className = 'container';
                    categoryLoad.categoryQuest(
                        'Африка',
                        'wrapperBackAfrica',
                        'wrapperBackAfricaTop');
                    this.localSetCat_3();
                    questionCat_3_0();
                }
            });
            tl
                .to([
                    arrowBackClick,
                    settingButton,
                    categorySecretHit,
                    categoryChildLove,
                    categoryThreeFaces,
                    catBack], {
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

    initMobile() {
        /* Mobile */
        this.wrapperMobile = document.createElement('div');
        this.wrapperMobile.className = 'wrapper__mobile';
        this.wrapperMobile.innerHTML = `
            <p>Игра разработана только
                <br />для десктопной версии.<br />
                На сайте вы можете скачать версию игры в виде приложения для мобильных устройств андроид.
            </p>
        `;

        if (document.body.clientWidth < 570 || screen.width < 570) {
            this.wrapper.removeChild(this.wrapperTop);
            this.wrapper.removeChild(this.container);
            this.wrapper.removeChild(this.containerQuest);
            this.wrapper.removeChild(this.wrapperBottom);
            this.wrapper.removeChild(this.wrapperBack);
            this.wrapper.appendChild(this.wrapperMobile);
        }
    }
}

export { Game };