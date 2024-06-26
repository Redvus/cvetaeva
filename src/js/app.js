import '../scss/main.scss';
import { gsap } from "gsap";
import { Intro } from "./Intro.js";
import { About } from "./About.js";
import { ArrowsAll } from "./ArrowsAll.js";
import { Sounds } from "./Sounds.js";
import { CategoryLoad } from "./CategoryLoad.js";

class Game {

    constructor() {
        this.initLayout();
        // this.initMobile();
    }

    initLayout() {
        document.getElementById('app').innerHTML = `
            <div class="container"></div>
            <div class="wrapper__top"></div>
            <div class="wrapper__back">
                <div class="wrapper__intro"></div>
                <div class="wrapper__category_back"></div>
                <div class="wrapper__category_back--quest wrapper__category_back--first"></div>
                <div class="wrapper__category_back--quest wrapper__category_back--second"></div>
                <div class="wrapper__category_back--quest wrapper__category_back--third"></div>
            </div>
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
        this.wrapperIntro = document.querySelector('.wrapper__intro');
        this.wrapperCategoryBack = document.querySelector('.wrapper__category_back');
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
            wrapperBottomMenu = document.querySelector('.wrapper__bottom_menu'),
            wrapperTopTitle = document.querySelector('.wrapper__top_title')
        ;

        // categoryAllBack.className = 'wrapper__category_back';
        // categoryAllBack.innerHTML = `
        //     <img src="images/c_categoryBack_3.jpg" alt="">
        // `;
        // this.wrapperBack.appendChild(categoryAllBack);

        gsap.to(this.wrapperIntro, {
            duration: 0.5,
            // delay: '-0.1',
            autoAlpha: 1,
            zIndex: 1
        });

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
                    this.wrapperTop.className = 'wrapper__top';
                    gsap.to(this.wrapperIntro, {
                        duration: '0.5',
                        // delay: '0.2',
                        autoAlpha: 0,
                        zIndex: '-1'
                    });
                    gsap.to(this.wrapperCategoryBack, {
                        // duration: '0.5',
                        delay: '0.2',
                        autoAlpha: 1,
                        zIndex: 1
                    });
                    // setTimeout(() => {
                    //     this.wrapperBack.removeChild(wrapperIntro);
                    // }, 800);
                    this.wrapperBottom.removeChild(wrapperBottomMenu);
                    let initCategoryLoad = new CategoryLoad();
                    initCategoryLoad.initCategory();
                }
            });
            tl
                .to(wrapperTopTitle, {
                    autoAlpha: 0,
                    duration: 0.3,
                    y: '-10%'
                })
                .to(wrapperBottomMenu, {
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
                    gsap.to(this.wrapperIntro, {
                        duration: '0.5',
                        // delay: '0.2',
                        autoAlpha: 0,
                        zIndex: '-1'
                    });
                    gsap.to(this.wrapperCategoryBack, {
                        // duration: '0.5',
                        delay: '0.2',
                        autoAlpha: 1,
                        zIndex: 1
                    });
                    // setTimeout(() => {
                    //     this.wrapperBack.removeChild(wrapperIntro);
                    // }, 800);
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
                .to(wrapperBottomMenu, {
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
                    gsap.to(this.wrapperIntro, {
                        duration: '0.5',
                        // delay: '0.2',
                        autoAlpha: 0,
                        zIndex: '-1'
                    });
                    gsap.to(this.wrapperCategoryBack, {
                        // duration: '0.5',
                        delay: '0.2',
                        autoAlpha: 1,
                        zIndex: 1
                    });
                    // setTimeout(() => {
                    //     this.wrapperBack.removeChild(wrapperIntro);
                    // }, 800);
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
                .to(wrapperBottomMenu, {
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
                    gsap.to(this.wrapperCategoryBack, {
                        duration: '0.5',
                        // delay: '0.1',
                        autoAlpha: 0,
                        zIndex: '0'
                    });
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
                    this.container.style.width = '45rem';
                    gsap.to(this.wrapperCategoryBack, {
                        duration: '0.5',
                        // delay: '0.1',
                        autoAlpha: 0,
                        zIndex: '0'
                    });
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