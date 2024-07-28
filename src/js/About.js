import { gsap } from "gsap";

class About {

    constructor() {
        this.aboutBack();
    }

    aboutBack() {
        const
            wrapperBack = document.querySelector('.wrapper__back'),
            wrapperAboutBack = document.createElement('div')
        ;

        wrapperAboutBack.className = 'wrapper__intro wrapper__intro_about';
        wrapperBack.appendChild(wrapperAboutBack);

        const wrapperBackBlock = document.querySelector('.wrapper__back');

        function aboutAnim() {
            let tl = gsap.timeline();
            tl
                // .from(wrapperTitle, {
                //     duration: 0.4,
                //     autoAlpha: 0,
                //     y: '-10%'
                // })
                .from(wrapperBackBlock, {
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
        aboutAnim();
    }

    aboutAuthors(personFirstTitle,
                 personFirstName,
                 personSecondTitle,
                 personSecondNameGone,
                 personSecondName,
                 personThirdTitle,
                 personThirdName) {
        const
            container = document.querySelector('.container'),
            wrapperTitleAuthors = document.createElement('div'),
            containerAbout = document.createElement('div'),
            wrapperTop = document.querySelector('.wrapper__top')
        ;

        if (document.body.clientWidth < 570 || screen.width < 570) {
            container.style.width = 'calc(100% - 2rem)';
            container.style.padding = '0 1rem';
        } else {
            container.style.width = '45rem';
        }
        containerAbout.className = 'container__about_block container__about_block--authors';
        wrapperTitleAuthors.className = 'wrapper__top_title';

        wrapperTitleAuthors.innerHTML = `
            <h1>Авторы</h1>
        `;

        containerAbout.innerHTML = `
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
        wrapperTop.appendChild(wrapperTitleAuthors);
        container.appendChild(containerAbout);

        const titleAuthors = document.querySelector('.wrapper__top_title'),
            containerAboutPerson = document.querySelectorAll('.container__about_person'),
            aboutBlock = document.querySelector('.container__about_block'),
            containerAboutInside = document.querySelector('.container__about_inside')
        ;

        containerAboutInside.style.height = '100%';

        function aboutAuthorsAnim() {
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
                .from(containerAboutPerson, {
                    autoAlpha: 0,
                    duration: 0.4,
                    delay: '-0.2',
                    y: "-0.5rem",
                    stagger: 0.07
                })
            ;
        }
        aboutAuthorsAnim();
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