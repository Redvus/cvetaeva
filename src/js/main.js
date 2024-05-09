import '../scss/main.scss';
import { gsap } from "gsap";
import { Intro } from "./Intro.js";
import { About } from "./About.js";
import { ArrowsAll } from "./ArrowsAll.js"
import { Settings } from "./Settings.js";
import { Sounds } from "./Sounds.js";
import { Category } from "./Category.js";
import { ChoiceCategory } from "./ChoiceCategory.js";

document.getElementById('app').innerHTML = `
    <div class="container"></div>
    <div class="wrapper__top"></div>
    <div class="wrapper__back"></div>
    <div class="wrapper__bottom"></div>
    <div class="container-quest"></div>
`;

const
    container = document.querySelector('.container'),
    wrapper = document.querySelector('.wrapper'),
    wrapperBottom = document.querySelector('.wrapper__bottom'),
    arrowBackLoad = new ArrowsAll(),
    screenBrowserWidth = 400
;

const soundsLoad = new Sounds();

/* Intro */
function introDev() {
    const introDevLoad = new Intro();
    introDevLoad.introStart();

    // if (document.body.clientWidth < screenBrowserWidth || screen.width < screenBrowserWidth) {
    //     fullScreen();
    // }

    const
        clickLoadGame = document.getElementById('clickLoadGame'),
        clickAuthors = document.getElementById('clickAboutAuthors'),
        clickAbout = document.getElementById('clickAboutLibrary'),
        wrapperBottom = document.querySelector('.wrapper__bottom'),
        wrapperTop = document.querySelector('.wrapper__top'),
        wrapperTopTitle = document.querySelector('.wrapper__top h1'),
        wrapperBack = document.querySelector('.wrapper__back'),
        wrapperIntro = document.querySelector('.wrapper__intro'),
        wrapperBottomMenu = document.querySelector('.wrapper__bottom_menu'),
        backgroundMusicID = document.getElementById('backgroundMusicID'),
        choiceCatLoad = new ChoiceCategory(),
        wrapperMobile = document.createElement('div'),
        containerQuest = document.querySelector('.container-quest')
    ;

    wrapperMobile.className = 'wrapper__mobile';
    wrapperMobile.innerHTML = `
        <p>Игра разработана только
            <br />для десктопной версии.<br />
            На сайте вы можете скачать версию игры в виде приложения для мобильных устройств андроид.
        </p>
    `;

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
                wrapperTop.innerHTML = '';
                wrapperBack.removeChild(wrapperIntro);
                wrapperBottom.removeChild(wrapperBottomMenu);
                categoryDev();
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
                wrapperTop.innerHTML = '';
                wrapperBack.removeChild(wrapperIntro);
                wrapperBottom.removeChild(wrapperBottomMenu);
                authorsStart();
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
                wrapperTop.innerHTML = '';
                wrapperBack.removeChild(wrapperIntro);
                wrapperBottom.removeChild(wrapperBottomMenu);
                aboutStart();
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

    if (document.body.clientWidth < 570 || screen.width < 570) {
        wrapper.removeChild(wrapperTop);
        wrapper.removeChild(container);
        wrapper.removeChild(containerQuest);
        wrapper.removeChild(wrapperBottom);
        wrapper.removeChild(wrapperBack);
        wrapper.appendChild(wrapperMobile);
    }
}

/* Authors */
function authorsStart() {
    const authorsLoad = new About();

    authorsLoad.aboutAuthors('Сценарист',
        'Инна Ямщикова',
        'Художники',
        'Елена Расторгуева',
        'Анастасия Полякова',
        'Программист',
        'Александр Суворов');

    const
        wrapperTitleAuthors = document.querySelector('.wrapper__top_title'),
        containerAbout = document.querySelector('.container__about_block'),
        containerBack = document.querySelector('.container__about_back'),
        wrapperTop = document.querySelector('.wrapper__top'),
        wrapperTopTitle = document.querySelector('.wrapper__top_title')
    ;

    arrowBackLoad.arrowBack();
    const arrowBackClick = document.getElementById('arrowBack');
    wrapperBottom.appendChild(arrowBackClick);

    arrowBackClick.addEventListener('click', () => {
        let tl = gsap.timeline({
            onComplete: () => {
                wrapperBottom.removeChild(arrowBackClick);
                container.removeChild(containerAbout);
                container.removeChild(containerBack);
                wrapperTop.removeChild(wrapperTopTitle);
                introDev();
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
                containerBack], {
                autoAlpha: 0,
                delay: '-0.1'
            })
        ;
    });
}

/* About */
function aboutStart() {
    const aboutLoad = new About();

    aboutLoad.aboutLibrary('МБУК г.о. Самара «Самарская муниципальная информационно-библиотечная система» была создана в декабре 1986 года. На сегодняшний день в ее составе&nbsp;– Центральная городская библиотека имени Н.К. Крупской и 35 библиотек-филиалов, нашими читателями являются жители всех 9 районов города. Библиотеки системы&nbsp;– это информационные, образовательные центры, место культурного отдыха и общения. СМИБС находится в центре мировых событий, активно участвует в общероссийских акциях и в жизни города.', 'В библиотеках системы можно получить информацию и литературу по любой теме, доступ к электронным базам данных, воспользоваться услугами Интернет-залов, Центрами общественного доступа, побывать на презентациях выставок и творческих встречах, а также воспользоваться дополнительными сервисными услугами:<ul><li>ксерокопированием</li><li>сканированием</li><li>ламинированием</li><li>документов</li><li>распечаткой информации</li><li>на принтере</li><li>записью на электронные</li><li>носители</li></ul>');

    const
        wrapperTitleAuthors = document.querySelector('.wrapper__top_title'),
        containerAboutLeft = document.querySelector('.container__about_left'),
        containerAboutRight = document.querySelector('.container__about_right'),
        containerAbout = document.querySelector('.container__about_block'),
        containerBack = document.querySelector('.container__about_back'),
        wrapperTop = document.querySelector('.wrapper__top'),
        wrapperTopTitle = document.querySelector('.wrapper__top_title')
    ;

    arrowBackLoad.arrowBack();
    const arrowBackClick = document.getElementById('arrowBack');
    wrapperBottom.appendChild(arrowBackClick);

    arrowBackClick.addEventListener('click', () => {
        let tl = gsap.timeline({
            onComplete: () => {
                wrapperBottom.removeChild(arrowBackClick);
                container.removeChild(containerAbout);
                container.removeChild(containerBack);
                wrapperTop.removeChild(wrapperTopTitle);
                introDev();
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
                containerBack], {
                autoAlpha: 0,
                delay: '-0.1'
            })
        ;
    });
}

/* Category */
function categoryDev() {
    const
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
            soundsLoad.rightAnswer('assets/games/igroskazy/sounds/progressClear.ogg');
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
                questionCat_1_0();
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

function localSetEurope() {
    if (localStorage.getItem('progressISEurope_1') === null ||
        localStorage.getItem('progressISEurope_2') === null ||
        localStorage.getItem('progressISEurope_3') === null ||
        localStorage.getItem('progressISEurope_4') === null ||
        localStorage.getItem('progressISEurope_5') === null ||
        localStorage.getItem('progressISEurope_6') === null ||
        localStorage.getItem('progressISEurope_7') === null ||
        localStorage.getItem('progressISEurope_8') === null ||
        localStorage.getItem('progressISEurope_9') === null ||
        localStorage.getItem('progressISEurope_10') === null ||
        localStorage.getItem('progressISEurope_11') === null ||
        localStorage.getItem('progressISEurope_12') === null ||
        localStorage.getItem('progressISEurope_13') === null ||
        localStorage.getItem('progressISEurope_14') === null ||
        localStorage.getItem('progressISEurope_15') === null ||
        localStorage.getItem('isEuropeQuest_1_0') === null ||
        localStorage.getItem('progressEuropeAll') === null ||
        localStorage.getItem('progressEuropeAll') <= 15
    ) {
        localStorage.setItem('progressEuropeAll', JSON.stringify(0));
        localStorage.setItem('progressISEurope_1', JSON.stringify(0));
        localStorage.setItem('progressISEurope_2', JSON.stringify(0));
        localStorage.setItem('progressISEurope_3', JSON.stringify(0));
        localStorage.setItem('progressISEurope_4', JSON.stringify(0));
        localStorage.setItem('progressISEurope_5', JSON.stringify(0));
        localStorage.setItem('progressISEurope_6', JSON.stringify(0));
        localStorage.setItem('progressISEurope_7', JSON.stringify(0));
        localStorage.setItem('progressISEurope_8', JSON.stringify(0));
        localStorage.setItem('progressISEurope_9', JSON.stringify(0));
        localStorage.setItem('progressISEurope_10', JSON.stringify(0));
        localStorage.setItem('progressISEurope_11', JSON.stringify(0));
        localStorage.setItem('progressISEurope_12', JSON.stringify(0));
        localStorage.setItem('progressISEurope_13', JSON.stringify(0));
        localStorage.setItem('progressISEurope_14', JSON.stringify(0));
        localStorage.setItem('progressISEurope_15', JSON.stringify(0));
        localStorage.setItem('isEuropeQuest_1_0', JSON.stringify(0));
    }
}

function fullScreen() {
    /* Получить documentElement (<html>) для отображения страницы в полноэкранном режиме */
    const fullScreenGame = document.documentElement;

    /* Просмотр в полноэкранном режиме */
    function openFullscreen() {
        if (fullScreenGame.requestFullscreen) {
            fullScreenGame.requestFullscreen();
        } else if (fullScreenGame.mozRequestFullScreen) { /* Firefox */
            fullScreenGame.mozRequestFullScreen();
        } else if (fullScreenGame.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
            fullScreenGame.webkitRequestFullscreen();
        } else if (fullScreenGame.msRequestFullscreen) { /* IE/Edge */
            fullScreenGame.msRequestFullscreen();
        }
    }
    openFullscreen();

    /* Закрыть полный экран */
    function closeFullscreen() {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.mozCancelFullScreen) { /* Firefox */
            document.mozCancelFullScreen();
        } else if (document.webkitExitFullscreen) { /* Chrome, Safari and Opera */
            document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) { /* IE/Edge */
            document.msExitFullscreen();
        }
    }
    closeFullscreen();
}

function questEurope() {
    const
        categoryLoad = new Category(),
        arrowBackLoad = new ArrowsAll(),
        settingsLoad = new Settings()
    ;
    categoryLoad.categoryQuest(
        'Europe',
        'wrapperBackEurope',
        'wrapperBackEuropeTop');
    questionCat_1_15();
}

function init() {
    introDev();
    // authorsStart();
    // aboutStart();
    // categoryDev();
}

init();