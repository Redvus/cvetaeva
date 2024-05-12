import { gsap } from "gsap";
import { ArrowsAll } from "./ArrowsAll.js";
import { Sounds } from "./Sounds.js";
import { categoryDev } from "./categoryLoad.js";

export class Question {

    questionBlock(questTitle,
                  questQuestion,
                  answerVar_1,
                  answerVar_2,
                  answerVar_3) {
        const
            arrowBackLoad = new ArrowsAll(),
            soundsLoad = new Sounds(),
            containerQuest = document.querySelector('.container-quest'),
            containerQuestBottom = document.createElement('div'),
            wrapperCategoryTitle = document.querySelector('.wrapper__top_title'),
            wrapperTop = document.querySelector('.wrapper__top'),
            containerQuestBottomTitle = document.createElement('h2'),
            containerQuestBottomText = document.createElement('div'),
            containerQuestBottomButtons = document.createElement('ul')
        ;

        containerQuestBottom.className = 'container-quest__bottom';
        containerQuestBottomTitle.className = 'container-quest__bottom_title';
        containerQuestBottomText.className = 'container-quest__bottom_text';
        containerQuestBottomButtons.className = 'container-quest__bottom_buttons';

        if (questTitle) {
            containerQuestBottomText.className = 'container-quest__bottom_text container-quest__bottom_text--short';
            containerQuestBottomTitle.innerHTML = `${questTitle}`;
            containerQuestBottomText.innerHTML = `
                <p class="container-quest__bottom_text--quest">${questQuestion}</p>
            `;
        } else {
            containerQuestBottomTitle.className = 'container-quest__bottom_title container-quest__bottom_title--short';
            containerQuestBottomText.innerHTML = `
                <p class="container-quest__bottom_text--quest">${questQuestion}</p>
            `;
        }

        containerQuestBottomButtons.innerHTML = `
            <li id="answerVar_1"><a href="javascript:void(0);">${answerVar_1}</a></li>
            <li id="answerVar_2"><a href="javascript:void(0);">${answerVar_2}</a></li>
            <li id="answerVar_3"><a href="javascript:void(0);">${answerVar_3}</a></li>
        `;

        containerQuest.appendChild(containerQuestBottom);

        containerQuestBottom.appendChild(containerQuestBottomText);
        containerQuestBottom.appendChild(containerQuestBottomButtons);
        containerQuestBottomText.appendChild(containerQuestBottomTitle);

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

        arrowBackLoad.arrowBackQuest();
        // arrowBackLoad.arrowSetting();

        const
            arrowBackClick = document.getElementById('arrowBack'),
            settingsClick = document.getElementById('settingsClick'),
            containerQuestBlock = document.querySelector('.container-quest'),
            containerQuestBlockBottom = document.querySelector('.container-quest__bottom'),
            containerQuestBottomTextDiv = document.querySelector('.container-quest__bottom_text'),
            containerQuestBottomButton = document.querySelectorAll('.container-quest__bottom_buttons > li'),
            wrapperBackPreloader = document.querySelector('.wrapper__preloader'),
            wrapperCategoryBack = document.querySelector('.wrapper__back_category'),
            wrapperBack = document.querySelector('.wrapper__back'),
            wrapperCategoryBackTop = document.querySelector('.wrapper__back_category--top')
        ;

        arrowBackClick.addEventListener('click', () => {
            let tl = gsap.timeline({
                onComplete: () => {
                    containerQuestBlock.removeChild(containerQuestBlockBottom);
                    wrapperBack.removeChild(wrapperCategoryBack);
                    wrapperBack.removeChild(wrapperCategoryBackTop);
                    wrapperTop.removeChild(wrapperCategoryTitle);
                    categoryDev();
                }
            });
            tl
                .to([
                    arrowBackClick,
                    settingsClick,
                    wrapperCategoryTitle,
                    containerQuestBlockBottom], {
                    autoAlpha: 0,
                    delay: '-0.1'
                })
                .to([
                    wrapperCategoryBack,
                    wrapperCategoryBackTop,
                    containerQuestBottom], {
                    autoAlpha: 0,
                    duration: '0.6',
                    delay: '-0.1',
                    // scale: 1.05
                })
            ;
        });

        function questionBlockAnim() {
            let tl = gsap.timeline();

                tl
                    .from(containerQuestBottom, {
                        autoAlpha: 0,
                        duration: 0.8,
                        delay: '-0.2',
                        scale: 0.95
                    })
                    .from(containerQuestBottomTextDiv, {
                        autoAlpha: 0,
                        duration: 0.4,
                        // delay: '-0.1'
                    })
                    .from(containerQuestBottomButton, {
                        autoAlpha: 0,
                        duration: 0.4,
                        delay: '-0.2',
                        stagger: '0.05'
                    })
                ;

        }
        questionBlockAnim();
    }

    questionBlockSimple(questTitle,
                  questQuestion,
                  answerVar_1,
                  answerVar_2,
                  answerVar_3) {
        const
            containerQuestBottom = document.querySelector('.container-quest__bottom'),
            containerQuestBottomTitle = document.createElement('h2'),
            containerQuestBottomText = document.createElement('div'),
            containerQuestBottomButtons = document.createElement('ul')
        ;

        containerQuestBottomTitle.className = 'container-quest__bottom_title';
        containerQuestBottomText.className = 'container-quest__bottom_text';
        containerQuestBottomButtons.className = 'container-quest__bottom_buttons';

        if (questTitle) {
            containerQuestBottomText.className = 'container-quest__bottom_text container-quest__bottom_text--short';
            containerQuestBottomTitle.innerHTML = `${questTitle}`;
            containerQuestBottomText.innerHTML = `
                <p class="container-quest__bottom_text--quest">${questQuestion}</p>
            `;
        } else {
            containerQuestBottomTitle.className = 'container-quest__bottom_title container-quest__bottom_title--short';
            containerQuestBottomText.innerHTML = `
                <p class="container-quest__bottom_text--quest">${questQuestion}</p>
            `;
        }

        containerQuestBottomButtons.innerHTML = `
            <li id="answerVar_1"><a href="javascript:void(0);">${answerVar_1}</a></li>
            <li id="answerVar_2"><a href="javascript:void(0);">${answerVar_2}</a></li>
            <li id="answerVar_3"><a href="javascript:void(0);">${answerVar_3}</a></li>
        `;

        containerQuestBottom.appendChild(containerQuestBottomText);
        containerQuestBottom.appendChild(containerQuestBottomButtons);
        containerQuestBottomText.appendChild(containerQuestBottomTitle);

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

        const
            containerQuestBottomTextDiv = document.querySelector('.container-quest__bottom_text'),
            containerQuestBottomButton = document.querySelectorAll('.container-quest__bottom_buttons > li')
        ;

        function questionBlockAnim() {
            let tl = gsap.timeline();

            tl
                .from(containerQuestBottomTextDiv, {
                    autoAlpha: 0,
                    duration: 0.4,
                    // delay: '-0.1'
                })
                .from(containerQuestBottomButton, {
                    autoAlpha: 0,
                    duration: 0.4,
                    delay: '-0.2',
                    stagger: '0.05'
                })
            ;

        }
        questionBlockAnim();
    }

    questionBlockFind(questionFindItems) {
        const
            containerQuest = document.querySelector('.container-quest'),
            containerQuestBottom = document.createElement('div'),
            wrapperCategoryBack = document.querySelector('.wrapper__back_category'),
            wrapperBack = document.querySelector('.wrapper__back'),
            wrapperCategoryTitle = document.querySelector('.wrapper__top_title'),
            wrapperTop = document.querySelector('.wrapper__top'),
            containerQuestBottomCells = document.createElement('ul'),
            containerQuestBottomText = document.createElement('div'),
            containerFind = document.createElement('div'),
            containerFindTop = document.createElement('div'),
            settingsLoad = new Settings()
        ;

        // containerQuest.className = 'container-quest';
        containerQuestBottom.className = 'container-quest__bottom container-quest__find';
        containerQuestBottomCells.className = 'container-quest__find_cells';
        containerQuestBottomText.className = 'container-quest__find_text';
        containerFind.className = 'container-find';
        containerFindTop.className = 'container-find container-find--top';
        containerFindTop.id = questionFindItems;

        containerQuestBottomText.innerHTML = `
            <p class="container-quest__find_text--quest">Найдите спрятавшихся персонажей и артефакты из сказок:</p>
        `;

        // wrapper.appendChild(containerQuest);
        wrapperBack.appendChild(containerFind);
        wrapper.appendChild(containerFindTop);
        containerQuest.appendChild(containerQuestBottom);

        if (containerQuestBottom !== null) {
            arrowBackLoad.arrowBackQuest();
            // arrowBackLoad.arrowSetting();
        }

        const containerQuestFind = document.querySelector('.container-quest__find');
        containerQuestFind.appendChild(containerQuestBottomText);
        containerQuestFind.appendChild(containerQuestBottomCells);

        const
            arrowBackClick = document.getElementById('arrowBack'),
            settingsClick = document.getElementById('settingsClick'),
            containerQuestBlock = document.querySelector('.container-quest'),
            containerQuestBottomTextDiv = document.querySelector('.container-quest__find_text'),
            containerQuestBottomButton = document.querySelectorAll('.container-quest__find_buttons > li'),
            wrapperCategoryBackTop = document.querySelector('.wrapper__back_category--top'),
            containerFindBlock = document.querySelector('.container-find'),
            containerFindTopBlock = document.querySelector('.container-find--top'),
            wrapperBackPreloader = document.querySelector('.wrapper__preloader')
        ;

        arrowBackClick.addEventListener('click', () => {
            let tl = gsap.timeline({
                onComplete: () => {
                    // wrapperTop.removeChild(wrapperCategoryTitle);
                    // wrapper.removeChild(containerQuestBlock);
                    containerQuestBlock.removeChild(containerQuestFind);
                    wrapperBack.removeChild(wrapperCategoryBack);
                    wrapperBack.removeChild(wrapperCategoryBackTop);
                    wrapperBack.removeChild(containerFindBlock);
                    wrapperBack.removeChild(wrapperBackPreloader);
                    wrapper.removeChild(containerFindTopBlock);
                    wrapperTop.removeChild(wrapperCategoryTitle);
                    categoryDev();
                }
            });
            tl
                .to([
                    arrowBackClick,
                    settingsClick,
                    wrapperCategoryTitle,
                    containerQuestFind], {
                    autoAlpha: 0,
                    delay: '-0.1'
                })
                .to([
                    wrapperCategoryBack,
                    wrapperCategoryBackTop,
                    containerFindBlock], {
                    autoAlpha: 0,
                    duration: '0.6',
                    delay: '-0.1',
                    // scale: 1.05
                })
            ;
        });

        function questionBlockAnim() {
            let tl = gsap.timeline();
            tl
                .from(containerQuestBottom, {
                    autoAlpha: 0,
                    duration: 0.4,
                    delay: 0.6
                    // y: '100%'
                })
                .from(containerQuestBottomTextDiv, {
                    autoAlpha: 0,
                    duration: 0.4,
                    delay: '-0.2'
                })
                .from(containerQuestBottomButton, {
                    autoAlpha: 0,
                    duration: 0.4,
                    delay: '-0.4',
                    stagger: '0.05'
                })
            ;
        }
        questionBlockAnim();
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
            answerNextClick = document.createElement('div')
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
                            // soundsLoad.rightAnswer('assets/games/igroskazy/sounds/rightAnswer_1.ogg');
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
                            // soundsLoad.rightAnswer('assets/games/igroskazy/sounds/wrongAnswer.ogg');
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
                            // soundsLoad.rightAnswer('assets/games/igroskazy/sounds/wrongAnswer.ogg');
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
                            // soundsLoad.rightAnswer('assets/games/igroskazy/sounds/wrongAnswer.ogg');
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