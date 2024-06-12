import { gsap } from "gsap";
import { ArrowsAll } from "./ArrowsAll.js";
import { Sounds } from "./Sounds.js";
import {Game} from "./app.js";
import {CategoryLoad} from "./CategoryLoad.js";

class Question {

    questionBlock(questTitle,
                  questQuestion,
                  answerVar_1,
                  answerVar_2,
                  answerVar_3) {
        const
            arrowBackLoad = new ArrowsAll(),
            soundsLoad = new Sounds(),
            containerQuest = document.querySelector('.container'),
            containerCategoryBlock = document.createElement('div'),
            wrapperCategoryTitle = document.querySelector('.wrapper__top_title'),
            wrapperTop = document.querySelector('.wrapper__top'),
            containerCategoryBlockTitle = document.createElement('h2'),
            containerCategoryBlockText = document.createElement('div'),
            containerCategoryBlockButtons = document.createElement('ul'),
            wrapperBottom = document.querySelector('.wrapper__bottom')
        ;

        containerCategoryBlock.className = 'container__category'
        containerQuest.appendChild(containerCategoryBlock);
        containerCategoryBlockTitle.className = 'container-quest__bottom_title';
        containerCategoryBlockText.className = 'container-quest__bottom_text';
        containerCategoryBlockButtons.className = 'container-quest__bottom_buttons';

        if (questTitle) {
            containerCategoryBlockText.className = 'container-quest__bottom_text container-quest__bottom_text--short';
            containerCategoryBlockTitle.innerHTML = `${questTitle}`;
            containerCategoryBlockText.innerHTML = `
                <p class="container-quest__bottom_text--quest">${questQuestion}</p>
            `;
        } else {
            containerCategoryBlockTitle.className = 'container-quest__bottom_title container-quest__bottom_title--short';
            containerCategoryBlockText.innerHTML = `
                <p class="container-quest__bottom_text--quest">${questQuestion}</p>
            `;
        }

        containerCategoryBlockButtons.innerHTML = `
            <li id="answerVar_1"><a href="javascript:void(0);">${answerVar_1}</a></li>
            <li id="answerVar_2"><a href="javascript:void(0);">${answerVar_2}</a></li>
            <li id="answerVar_3"><a href="javascript:void(0);">${answerVar_3}</a></li>
        `;

        containerQuest.appendChild(containerCategoryBlock);

        containerCategoryBlock.appendChild(containerCategoryBlockText);
        containerCategoryBlock.appendChild(containerCategoryBlockButtons);
        containerCategoryBlockText.appendChild(containerCategoryBlockTitle);

        const
            questButtonLi_1 = document.getElementById('answerVar_1'),
            questButtonLi_2 = document.getElementById('answerVar_2'),
            questButtonLi_3 = document.getElementById('answerVar_3'),
            questButtonList = [questButtonLi_1, questButtonLi_2, questButtonLi_3],
            questButtonLiPosition = ['9%', '38%', '67%'],
            questButtonLi = document.querySelectorAll('.container-quest__bottom_buttons > li'),
            positionLiTop = questButtonLiPosition.sort(() => Math.floor(Math.random() * questButtonLiPosition.length))
        ;

        questButtonList.forEach((el, idx) => {
            el.style.top = positionLiTop[idx];
        });

        // arrowBackLoad.arrowBackQuest();
        // arrowBackLoad.arrowSetting();

        const
            settingsClick = document.getElementById('settingsClick'),
            containerQuestBlock = document.querySelector('.container-quest'),
            containerQuestBlockBottom = document.querySelector('.container-quest__bottom'),
            containerCategoryBlockTextDiv = document.querySelector('.container-quest__bottom_text'),
            containerCategoryBlockButton = document.querySelectorAll('.container-quest__bottom_buttons > li'),
            wrapperBackPreloader = document.querySelector('.wrapper__preloader'),
            wrapperCategoryBack = document.querySelector('.wrapper__back_category'),
            wrapperBack = document.querySelector('.wrapper__back'),
            wrapperCategoryBackTop = document.querySelector('.wrapper__back_category--top')
        ;

        function questionBlockAnim() {
            let tl = gsap.timeline();

                tl
                    .from(containerCategoryBlock, {
                        autoAlpha: 0,
                        duration: 0.8,
                        delay: '-0.2',
                        scale: 0.95
                    })
                    .from(containerCategoryBlockTextDiv, {
                        autoAlpha: 0,
                        duration: 0.4,
                        // delay: '-0.1'
                    })
                    .from(containerCategoryBlockButton, {
                        autoAlpha: 0,
                        duration: 0.4,
                        delay: '-0.2',
                        stagger: '0.05'
                    })
                ;

        }
        questionBlockAnim();

        arrowBackLoad.arrowBack();
        const arrowBackClick = document.getElementById('arrowBack');
        wrapperBottom.appendChild(arrowBackClick);

        arrowBackClick.addEventListener('click', () => {
            let tl = gsap.timeline({
                onComplete: () => {
                    wrapperBottom.removeChild(arrowBackClick);
                    wrapperBottom.removeChild(settingsClick);
                    containerQuest.removeChild(containerCategoryBlock);
                    wrapperTop.removeChild(wrapperCategoryTitle);
                    // container.removeChild(categorySecretHit);
                    // container.removeChild(categoryChildLove);
                    // container.removeChild(categoryThreeFaces);
                    // gsap.to(wrapperCategoryBack, {
                    //     duration: '0.5',
                    //     delay: '0.1',
                    //     autoAlpha: 0,
                    //     zIndex: '-1'
                    // });
                    // gsap.to(wrapperIntro, {
                    //     duration: '0.5',
                    //     delay: '0.1',
                    //     autoAlpha: 1,
                    //     zIndex: 1
                    // });
                    // setTimeout(() => {
                    //     wrapperBack.removeChild(catBack);
                    // }, 2000);
                    const initGame = new CategoryLoad();
                }
            });
            tl
                // .to(wrapperTopTitle, {
                //     autoAlpha: 0,
                //     delay: '-0.1',
                //     y: '-10%'
                // })
                .to(containerCategoryBlock, {
                    autoAlpha: 0,
                    delay: '-0.1',
                    stagger: 0.07
                })
            ;
        });
    }

    answerBlock(answerVarNum, answerFull, answerTitle) {
        const
            questionBlock = document.querySelector('.container-quest__bottom_text'),
            questionBlockTitle = document.querySelector('.container-quest__bottom_title'),
            questionBlockButtons = document.querySelector('.container-quest__bottom_buttons'),
            answerWrongVar = ['Неправильно', 'В следующий раз повезет', 'Не отчаивайтесь', 'Не совсем так', 'К сожалению нет'],
            answerWrongVarView = answerWrongVar[Math.floor(Math.random() * answerWrongVar.length)],
            answerRightVar = ['Правильно!', 'Все верно!', 'Именно так!', 'Точно так!', 'Так держать!'],
            answerRightVarView = answerRightVar[Math.floor(Math.random() * answerRightVar.length)],
            answerBlockWrongText = document.getElementById('answerWrong'),
            answerNextClick = document.createElement('div'),
            soundsLoad = new Sounds()
        ;

        let answerVar_1 = document.getElementById('answerVar_1'),
            answerVar_2 = document.getElementById('answerVar_2'),
            answerVar_3 = document.getElementById('answerVar_3'),
            answerVarArray = [answerVar_1, answerVar_2, answerVar_3],
            answerLi = document.querySelectorAll('ul.container-quest__bottom_buttons li'),
            answerLiRight = document.querySelectorAll('ul.container-quest__bottom_buttons > li > a')
        ;

        answerNextClick.id = 'answerNextClick';
        answerNextClick.className = 'container-quest__bottom_next';
        answerNextClick.innerHTML = 'Продолжить';
        questionBlockButtons.appendChild(answerNextClick);

        function buttonNextLoad() {
            let answerNextButton = document.getElementById('answerNextClick');
            gsap.to(answerNextButton, {
                autoAlpha: 1,
                duration: 0.2,
                delay: 0.2
            });
        }

        function wrongTextLoad() {
            if (answerTitle) {
                questionBlock.className = 'container-quest__bottom_text container-quest__bottom_text--short';
                questionBlockTitle.innerHTML = `${answerTitle}`;
                questionBlock.innerHTML = `
                    <p class="container-quest__bottom_text--quest">${answerWrongVarView}</p>
                `;
                questionBlock.appendChild(questionBlockTitle);
            } else {
                questionBlockTitle.className = 'container-quest__bottom_title container-quest__bottom_title--short';
                questionBlock.innerHTML = `
                    <p class="container-quest__bottom_text--quest">${answerWrongVarView}</p>
                `;
                questionBlock.appendChild(questionBlockTitle);
            }
            let answerBlockWrongText = document.getElementById('answerWrong');
            gsap.from(answerBlockWrongText, {
                autoAlpha: 0,
                duration: 0.2,
                delay: 0.2
            });
        }

        for (let i = 0; i < answerVarArray.length; i++) {
            if (answerVarArray[i] === answerVarArray[answerVarNum]) {
                answerVarArray[i].addEventListener('click', () => {
                    answerLi.forEach((el, idx) => {
                        if (idx !== answerVarNum) {
                            el.remove();
                            if (answerFull) {
                                if (answerTitle) {
                                    questionBlock.className = 'container-quest__bottom_text container-quest__bottom_text--short';
                                    questionBlockTitle.innerHTML = `${answerTitle}`;
                                    questionBlock.innerHTML = `
                                        <p class="container-quest__bottom_text--quest">${answerFull}</p>
                                    `;
                                    questionBlock.appendChild(questionBlockTitle);
                                    } else {
                                        questionBlockTitle.className = 'container-quest__bottom_title container-quest__bottom_title--short';
                                        questionBlock.innerHTML = `
                                            <p class="container-quest__bottom_text--quest">${answerFull}</p>
                                        `;
                                        questionBlock.appendChild(questionBlockTitle);
                                }
                            } else {
                                if (answerTitle) {
                                    questionBlock.className = 'container-quest__bottom_text container-quest__bottom_text--short';
                                    questionBlockTitle.innerHTML = `${answerTitle}`;
                                    questionBlock.innerHTML = `
                                        <p class="container-quest__bottom_text--quest">${answerRightVarView}</p>
                                    `;
                                    questionBlock.appendChild(questionBlockTitle);
                                } else {
                                    questionBlockTitle.className = 'container-quest__bottom_title container-quest__bottom_title--short';
                                    questionBlock.innerHTML = `
                                        <p class="container-quest__bottom_text--quest">${answerRightVarView}</p>
                                    `;
                                    questionBlock.appendChild(questionBlockTitle);
                                }
                            }
                            let answerBlockText = document.getElementById('answerWright');
                            gsap.from(answerBlockText, {
                                autoAlpha: 0,
                                duration: 0.2,
                                delay: 0.2
                            });
                            buttonNextLoad();
                        } else {
                            let tl = gsap.timeline();
                            answerLiRight[i].className += 'question__block_list--right';
                            answerLiRight[i].style.userSelect = 'none';
                            soundsLoad.rightAnswer('./sounds/rightAnswer_1.ogg');
                            tl
                                .to(el, {
                                    top: '9%',
                                    duration: 0.3,
                                    delay: 0.1,
                                    ease: 'back'
                                })
                            ;
                        }
                    });
                });
            } else if (answerVarArray[i] === answerVarArray[0]) {
                answerVarArray[i].addEventListener('click', () => {
                    answerLi.forEach((el, idx) => {
                        if (idx !== 0) {
                            el.remove();
                            wrongTextLoad();
                            buttonNextLoad();
                        } else {
                            let tl = gsap.timeline();
                            answerLiRight[i].className += 'question__block_list--wrong';
                            answerLiRight[i].style.userSelect = 'none';
                            soundsLoad.rightAnswer('./sounds/wrongAnswer.ogg');
                            tl
                                .to(el, {
                                    top: '9%',
                                    duration: 0.3,
                                    delay: 0.1,
                                    ease: 'back'
                                })
                            ;
                        }
                    });
                });
            } else if (answerVarArray[i] === answerVarArray[1]) {
                answerVarArray[i].addEventListener('click', () => {
                    answerLi.forEach((el, idx) => {
                        if (idx !== 1) {
                            el.remove();
                            wrongTextLoad();
                            buttonNextLoad();
                        } else {
                            let tl = gsap.timeline();
                            answerLiRight[i].className += 'question__block_list--wrong';
                            answerLiRight[i].style.userSelect = 'none';
                            soundsLoad.rightAnswer('./sounds/wrongAnswer.ogg');
                            tl
                                .to(el, {
                                    top: '9%',
                                    duration: 0.3,
                                    delay: 0.1,
                                    ease: 'back'
                                })
                            ;
                        }
                    });
                });
            } else if (answerVarArray[i] === answerVarArray[2]) {
                answerVarArray[i].addEventListener('click', () => {
                    answerLi.forEach((el, idx) => {
                        if (idx !== 2) {
                            el.remove();
                            wrongTextLoad();
                            buttonNextLoad();
                        } else {
                            let tl = gsap.timeline();
                            answerLiRight[i].className += 'question__block_list--wrong';
                            answerLiRight[i].style.userSelect = 'none';
                            soundsLoad.rightAnswer('./sounds/wrongAnswer.ogg');
                            tl
                                .to(el, {
                                    top: '9%',
                                    duration: 0.3,
                                    delay: 0.1,
                                    ease: 'back'
                                })
                            ;
                        }
                    });
                });
            }
        }
    }
}

export { Question };