import { gsap } from "gsap";

export class About {

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
            containerClouds = document.createElement('div'),
            wrapperTop = document.querySelector('.wrapper__top')
        ;

        containerAbout.className = 'container__about_block container__about_block--authors';
        containerClouds.className = 'container__about_back';
        wrapperTitleAuthors.className = 'wrapper__top_title';
        // container.className = 'container container__about';

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
                    <p class="container__about_person">${personSecondName}</p>
                </div>
                <div class="container__about_person">
                    <h4>${personThirdTitle}</h4>
                    <p>${personThirdName}</p>
                </div>
            </div>
        `;
        wrapperTop.appendChild(wrapperTitleAuthors);
        container.appendChild(containerAbout);
        container.appendChild(containerClouds);

        let titleAuthors = document.querySelector('.wrapper__top_title'),
            containerAboutPerson = document.querySelectorAll('.container__about_person'),
            aboutBlock = document.querySelector('.container__about_block'),
            aboutBack = document.querySelector('.container__about_back')
        ;

        function aboutAuthorsAnim() {
            let tl = new gsap.timeline();

            tl
                .from(aboutBlock, {
                    autoAlpha: 0,
                    duration: 0.4,
                    scale: 0.97
                })
                .from(aboutBack, {
                    autoAlpha: 0,
                    duration: 0.4,
                    delay: '-0.2',
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
            containerClouds = document.createElement('div'),
            containerAboutLeft = document.createElement('div'),
            containerAboutRight = document.createElement('div')
        ;

        containerAbout.className = 'container__about_block container__about_block--about';
        containerClouds.className = 'container__about_back';
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
        container.appendChild(containerClouds);
        containerAbout.appendChild(containerAboutLeft);
        containerAbout.appendChild(containerAboutRight);

        let
            titleAuthors = document.querySelector('.wrapper__top_title'),
            aboutBlock = document.querySelectorAll('.container__about_block'),
            aboutBack = document.querySelector('.container__about_back')
        ;

        function aboutLibraryAnim() {
            let tl = new gsap.timeline();

            tl
                .from(aboutBlock, {
                    autoAlpha: 0,
                    duration: 0.4,
                    scale: 0.97
                })
                .from(aboutBack, {
                    autoAlpha: 0,
                    duration: 0.4,
                    delay: '-0.2',
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