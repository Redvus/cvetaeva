import { gsap } from "gsap";

export class Intro {

    introStart() {
        const
            introBack = document.createElement('div'),
            wrapperBack = document.querySelector('.wrapper__back'),
            wrapperBottom = document.querySelector('.wrapper__bottom'),
            wrapperTop = document.querySelector('.wrapper__top'),
            wrapperTopTitle = document.createElement('div')
        ;
        introBack.className = 'wrapper__intro';
        wrapperTopTitle.className = 'wrapper__top_title';
        wrapperBack.appendChild(introBack);

        wrapperTopTitle.innerHTML = `
            <h1>Игросказы</h1>
        `;
        wrapperTop.appendChild(wrapperTopTitle);

        // Кнопки
        const introBlockButtons = document.createElement('ul');
        introBlockButtons.className = 'wrapper__bottom_menu';
        introBlockButtons.innerHTML = `
            <li><a href="javascript:void(0);" id="clickAboutLibrary">О библиотеке</a></li>
            <li><a href="javascript:void(0);" id="clickAboutAuthors">Авторы</a></li>
            <li><a href="javascript:void(0);" id="clickLoadGame">Начать игру</a></li>
        `;
        wrapperBottom.appendChild(introBlockButtons);

        const
            introTitleBottom = document.getElementById('introTitleBottom'),
            wrapperBottomMenu = document.querySelectorAll('.wrapper__bottom_menu > li'),
            wrapperBackBlock = document.querySelector('.wrapper__back'),
            wrapperTitle = document.querySelector('.wrapper__top_title')
        ;

        function introAnim() {
            let tl = gsap.timeline();
            tl
                .from(wrapperTitle, {
                    duration: 0.4,
                    autoAlpha: 0,
                    y: '-10%'
                })
                .from(wrapperBackBlock, {
                    duration: 0.4,
                    autoAlpha: 0
                })
                .from(wrapperBottomMenu, {
                    duration: 0.4,
                    delay: '-0.6',
                    stagger: '0.05',
                    autoAlpha: 0
                })

            ;
        }
        introAnim();
    }
}