import { gsap } from "gsap";

class About {

    constructor() {
        this.initLayout();
        this.aboutAnim();
        this.aboutAuthorsAnim();
    }

    initLayout() {
        this.container = document.querySelector('.container');
        this.wrapperTitleAuthors = document.createElement('div');
        this.containerAbout = document.createElement('div');
        this.wrapperTop = document.querySelector('.wrapper__top');

        this.wrapperBack = document.querySelector('.wrapper__back');
        this.wrapperAboutBack = document.createElement('div');
        this.wrapperBackBlock = document.querySelector('.wrapper__back');

        this.wrapperAboutBack.className = 'wrapper__intro wrapper__intro_about';
        this.wrapperBack.appendChild(this.wrapperAboutBack);

        this.titleAuthors = document.querySelector('.wrapper__top_title');
        this.containerAboutPerson = document.querySelectorAll('.container__about_person');
        this.aboutBlock = document.querySelector('.container__about_block');
        this.containerAboutInside = document.querySelector('.container__about_inside');
    }

    aboutAuthors(personFirstTitle,
                 personFirstName,
                 personSecondTitle,
                 personSecondNameGone,
                 personSecondName,
                 personThirdTitle,
                 personThirdName) {


        if (document.body.clientWidth < 570 || screen.width < 570) {
            container.style.width = 'calc(100% - 2rem)';
            container.style.padding = '0 1rem';
        } else {
            this.container.style.width = '45rem';
        }

        this.containerAbout.className = 'container__about_block container__about_block--authors';
        this.wrapperTitleAuthors.className = 'wrapper__top_title';

        this.wrapperTitleAuthors.innerHTML = `
            <h1>Авторы</h1>
        `;

        this.containerAbout.innerHTML = `
            <div class="container__about_inside container__about_text container__about_text--center">
                <div class="container__about_person">
                    <h4>${personFirstTitle}</h4>
                    <p>${personFirstName}</p>
                </div>
                <div class="container__about_person">
                    <h4>${personSecondTitle}</h4>
                    <p class="container__about_person--gone">${personSecondNameGone}</p>
                </div>
                <div class="container__about_person">
                    <h4>${personThirdTitle}</h4>
                    <p>${personThirdName}</p>
                </div>
            </div>
        `;
        this.wrapperTop.appendChild(this.wrapperTitleAuthors);
        this.container.appendChild(this.containerAbout);
    }

    aboutAnim() {
        let tl = gsap.timeline();
        tl
            // .from(wrapperTitle, {
            //     duration: 0.4,
            //     autoAlpha: 0,
            //     y: '-10%'
            // })
            .from(this.wrapperBackBlock, {
                duration: 0.4,
                autoAlpha: 0
            })
        // .from(wrapperBottomMenu, {
        //     duration: 0.4,
        //     delay: '-0.6',
        //     stagger: '0.05',
        //     autoAlpha: 0
        // })
        ;
    }

    aboutAuthorsAnim() {
        let tl = new gsap.timeline();

        tl
            .from(this.aboutBlock, {
                autoAlpha: 0,
                duration: 0.4,
                scale: 0.97
            })
            .from(this.titleAuthors, {
                duration: '0.3',
                delay: '-0.1',
                autoAlpha: 0,
                y: '-10%'
            })
            .from(this.containerAboutPerson, {
                autoAlpha: 0,
                duration: 0.4,
                delay: '-0.2',
                y: "-0.5rem",
                stagger: 0.07
            })
        ;

        if (document.body.clientWidth < 570 || screen.width < 570) {
            this.containerAboutInside.style.height = '100%';
        }
    }

    aboutLibrary(libraryLeftText, libraryRightText) {
        const
            container = document.querySelector('.container'),
            wrapperTitleAuthors = document.createElement('div'),
            wrapperTop = document.querySelector('.wrapper__top'),
            containerAbout = document.createElement('div'),
            containerAboutLeft = document.createElement('div'),
            containerAboutRight = document.createElement('div')
        ;

        if (document.body.clientWidth < 570 || screen.width < 570) {
            container.style.width = 'calc(100% - 2rem)';
            container.style.padding = '0 1rem';
        } else {
            container.style.width = '60rem';
        }
        containerAbout.className = 'container__about_block container__about_block--about';
        containerAboutLeft.className = 'container__about_inside container__inside_left';
        containerAboutRight.className = 'container__about_inside container__inside_right';
        wrapperTitleAuthors.className = 'wrapper__top_title';

        wrapperTitleAuthors.innerHTML = `
            <h1>Библиотека</h1>
        `;

        containerAboutLeft.innerHTML = `
            <div class="container__about_text container__about_text--left">
                <p>${libraryLeftText}</p>
            </div>
        `;

        containerAboutRight.innerHTML = `
            <div class="container__about_text container__about_text--right">
                <p>${libraryRightText}</p>
            </div>
        `;
        wrapperTop.appendChild(wrapperTitleAuthors);
        container.appendChild(containerAbout);
        containerAbout.appendChild(containerAboutLeft);
        containerAbout.appendChild(containerAboutRight);

        let
            titleAuthors = document.querySelector('.wrapper__top_title'),
            aboutBlock = document.querySelectorAll('.container__about_block')
        ;

        function aboutLibraryAnim() {
            let tl = new gsap.timeline();

            tl
                .from(aboutBlock, {
                    autoAlpha: 0,
                    duration: 0.4,
                    scale: 0.97
                })
                .from(titleAuthors, {
                    duration: '0.3',
                    delay: '-0.1',
                    autoAlpha: 0,
                    y: '-10%'
                })
            ;
        }
        aboutLibraryAnim();
    }
}

export { About };