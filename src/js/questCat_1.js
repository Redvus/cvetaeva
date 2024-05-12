import { gsap } from "gsap";
import { Question } from "./Question.js";
import { ArrowsAll } from "./ArrowsAll.js";
import { Settings } from "./Settings.js";

// Европа

export const
    questionLoad = new Question(),
    arrowBackLoad = new ArrowsAll(),
    settingsLoad = new Settings(),
    questTimePaused = 600
;

if (localStorage.getItem('isEuropeQuest_1_0') === null
    || localStorage.getItem('isEuropeQuest_1_0') >= 5
    || localStorage.getItem('isEuropeQuest_1_0') <= 5) {
    localStorage.setItem('isEuropeQuest_1_0', JSON.stringify(0));
}

function localSaveEurope (questLocalNum, questLocalValue) {
    localStorage.setItem(`progressISEurope_${questLocalNum}`, JSON.stringify(questLocalValue));
    let progressISEurope_1 = JSON.parse(localStorage.getItem('progressEuropeAll'));
    let progressISEurope_questLocalNum = JSON.parse(localStorage.getItem(`progressISEurope_${questLocalNum}`));
    let progressISEurope_1Sum = progressISEurope_1 + progressISEurope_questLocalNum;
    localStorage.setItem('progressEuropeAll', JSON.stringify(progressISEurope_1Sum));
}

export function questionCat_1_0() {
    let answerWrightNum = 0;

    questionLoad.questionBlockFind('europeFindID');

    const
        containerFind = document.querySelector('.container-find'),
        containerFindTop = document.querySelector('.container-find--top'),
        containerQuestBottomCells = document.querySelector('.container-quest__find_cells'),
        containerQuestBlock = document.querySelector('.container-quest'),
        containerQuestBottom = document.querySelector('.container-quest__find'),
        categoryLivingRoomTop = document.getElementById('categoryLivingRoomTop'),
        wrapperBack = document.querySelector('.wrapper__back')
    ;

    containerQuestBottomCells.innerHTML = `
        <li class="container-quest__find_icon">
            <img src="assets/games/igroskazy/images/europe/is_europeFindFlower_sm.png" id="cellVar_1" alt="">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" id="cellVarCheck_1"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>
        </li>
        <li class="container-quest__find_icon">
            <img src="assets/games/igroskazy/images/europe/is_europeFindKey_sm.png" id="cellVar_2" alt="">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" id="cellVarCheck_2"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>
        </li>
        <li class="container-quest__find_icon">
            <img src="assets/games/igroskazy/images/europe/is_europeFindBasket_sm.png" id="cellVar_3" alt="">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" id="cellVarCheck_3"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>
        </li>
        <li class="container-quest__find_icon">
            <img src="assets/games/igroskazy/images/europe/is_europeFindSword_sm.png" id="cellVar_4" alt="">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" id="cellVarCheck_4"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>
        </li>
        <li class="container-quest__find_icon">
            <img src="assets/games/igroskazy/images/europe/is_europeFindBoot_sm.png" id="cellVar_5" alt="">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" id="cellVarCheck_5"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>
        </li>
    `;

    containerFind.innerHTML = `
        <div id="is_itemEurope_1" class="container-find__items"></div>
        <div id="is_itemEurope_2" class="container-find__items"></div>
        <div id="is_itemEurope_3" class="container-find__items"></div>
        <div id="is_itemEurope_4" class="container-find__items"></div>
        <div id="is_itemEurope_5" class="container-find__items"></div>
    `;

    containerFindTop.innerHTML = `
        <div id="is_itemEuropeTop_1" class="container-find__items--hidden"></div>
        <div id="is_itemEuropeTop_2" class="container-find__items--hidden"></div>
        <div id="is_itemEuropeTop_3" class="container-find__items--hidden"></div>
        <div id="is_itemEuropeTop_4" class="container-find__items--hidden"></div>
        <div id="is_itemEuropeTop_5" class="container-find__items--hidden"></div>
    `;

    const
        cellVar_1 = document.getElementById('cellVar_1'),
        cellVar_2 = document.getElementById('cellVar_2'),
        cellVar_3 = document.getElementById('cellVar_3'),
        cellVar_4 = document.getElementById('cellVar_4'),
        cellVar_5 = document.getElementById('cellVar_5'),
        cellVarList = [cellVar_1, cellVar_2, cellVar_3, cellVar_4, cellVar_5],
        cellVarCheck_1 = document.getElementById('cellVarCheck_1'),
        cellVarCheck_2 = document.getElementById('cellVarCheck_2'),
        cellVarCheck_3 = document.getElementById('cellVarCheck_3'),
        cellVarCheck_4 = document.getElementById('cellVarCheck_4'),
        cellVarCheck_5 = document.getElementById('cellVarCheck_5'),
        cellVarCheckList = [cellVarCheck_1, cellVarCheck_2, cellVarCheck_3, cellVarCheck_4, cellVarCheck_5],
        is_itemEurope_1 = document.getElementById('is_itemEurope_1'),
        is_itemEurope_2 = document.getElementById('is_itemEurope_2'),
        is_itemEurope_3 = document.getElementById('is_itemEurope_3'),
        is_itemEurope_4 = document.getElementById('is_itemEurope_4'),
        is_itemEurope_5 = document.getElementById('is_itemEurope_5'),
        itemEuropeList = [is_itemEurope_1, is_itemEurope_2, is_itemEurope_3, is_itemEurope_4, is_itemEurope_5],
        containerFindBlock = document.querySelector('.container-find'),
        containerFindTopBlock = document.querySelector('.container-find--top'),
        is_itemEuropeTop_1 = document.getElementById('is_itemEuropeTop_1'),
        is_itemEuropeTop_2 = document.getElementById('is_itemEuropeTop_2'),
        is_itemEuropeTop_3 = document.getElementById('is_itemEuropeTop_3'),
        is_itemEuropeTop_4 = document.getElementById('is_itemEuropeTop_4'),
        is_itemEuropeTop_5 = document.getElementById('is_itemEuropeTop_5'),
        itemEuropeTopList = [is_itemEuropeTop_1, is_itemEuropeTop_2, is_itemEuropeTop_3, is_itemEuropeTop_4, is_itemEuropeTop_5],
        buttonBack = document.getElementById('arrowBack'),
        buttonSetting = document.getElementById('settingsClick')
    ;

    let containerQuestItem = document.querySelector('.container-quest__item');
    gsap.from(containerQuestItem, {
        autoAlpha: 0,
        duration: '0.6',
        delay: '0.05'
    });

    for (let i = 0; i < itemEuropeTopList.length; i++) {
        itemEuropeTopList[i].addEventListener('click', () => {
            soundsLoad.rightAnswer('assets/games/igroskazy/sounds/rightAnswer_1.ogg');
            let isEuropeQuest_1_0 = JSON.parse(localStorage.getItem('isEuropeQuest_1_0'));
            let isEuropeQuest_1_0_sum = isEuropeQuest_1_0 + 1;
            localStorage.setItem('isEuropeQuest_1_0', JSON.stringify(isEuropeQuest_1_0_sum));
            let tl = new gsap.timeline();
            let tl1 = new gsap.timeline();
            tl
                .to(itemEuropeList[i], {
                    y: '-3%',
                    zIndex: 9999
                })
                .to(itemEuropeList[i], {
                    delay: '0.1',
                    autoAlpha: 0
                })
            ;
            tl1
                .to(cellVarList[i], {
                    scale: '0.5',
                    autoAlpha: 0
                })
                .to(cellVarCheckList[i], {
                    duration: 0.2,
                    delay: '-0.1',
                    autoAlpha: 1
                })
            ;
            itemEuropeTopList[i].style.pointerEvents = 'none';

            if (isEuropeQuest_1_0_sum === 5) {
                let tl = gsap.timeline({
                    onComplete: () => {
                        wrapper.removeChild(containerFindTop);
                        wrapperBack.removeChild(containerFind);
                        containerQuestBlock.removeChild(containerQuestBottom);
                        // containerQuestBottom.removeChild(buttonBack);
                        // containerQuestBottom.removeChild(buttonSetting);
                        setTimeout(() => {
                            questionCat_1_1();
                        }, questTimePaused);
                    }
                });
                tl
                    .to(containerFindTop, {
                        duration: '0.3',
                        delay: '0.3',
                        autoAlpha: 0
                    })
                    .to(containerQuestBottom, {
                        autoAlpha: 0,
                        delay: '0.3',
                        y: '100%'
                    })
                ;
            }
        });
    }
}

export function questionCat_1_1() {
    let answerWrightNum = 1;

    if (localStorage.getItem('progressISEurope_1') === null ||
        localStorage.getItem('progressISEurope_1') >= 0) {
        localStorage.setItem('progressISEurope_1', JSON.stringify(0));
    }

    questionLoad.questionBlock(
        '',
        'Как правильно называется сказка Э.Т.А. Гофмана?',
        '«Щелкунчик»',
        '«Щелкунчик и Мышиный король»',
        '«Мышиный король и Щелкунчик»'
    );

    questionLoad.answerBlock(answerWrightNum, '', '');

    let answerVar_1 = document.getElementById('answerVar_1'),
        answerVar_2 = document.getElementById('answerVar_2'),
        answerVar_3 = document.getElementById('answerVar_3'),
        answerVarArray = [answerVar_1, answerVar_2, answerVar_3],
        containerQuest = document.querySelector('.container-quest'),
        containerQuestBottom = document.querySelector('.container-quest__bottom'),
        containerQuestBottomTextDiv = document.querySelector('.container-quest__bottom_text'),
        containerQuestBottomButtons = document.querySelector('.container-quest__bottom_buttons'),
        buttonBack = document.getElementById('arrowBack'),
        buttonSetting = document.getElementById('settingsClick'),
        answerNextClick = document.getElementById('answerNextClick')
    ;

    for (let i = 0; i < answerVarArray.length; i++) {
        answerVarArray[i].addEventListener('click', () => {
            if (answerVarArray[i] === answerVarArray[answerWrightNum]) {
                localSaveEurope(1, 1);

                answerNextClick.addEventListener('click', () => {
                    let tl = gsap.timeline({
                        onComplete: () => {
                            containerQuestBottom.removeChild(containerQuestBottomTextDiv);
                            containerQuestBottom.removeChild(containerQuestBottomButtons);
                            questionCat_1_2();
                        }
                    });
                    tl
                        .to([containerQuestBottomTextDiv, containerQuestBottomButtons], {
                            autoAlpha: 0,
                            // delay: '0.4',
                            // y: '100%'
                            // scale: 0.95
                        })
                    ;
                });

            } else if (answerVarArray[i] !== answerVarArray[answerWrightNum]) {
                localSaveEurope(1, 0);

                answerNextClick.addEventListener('click', () => {
                    let tl = gsap.timeline({
                        onComplete: () => {
                            containerQuestBottom.removeChild(containerQuestBottomTextDiv);
                            containerQuestBottom.removeChild(containerQuestBottomButtons);
                            questionCat_1_2();
                        }
                    });
                    tl
                        .to([containerQuestBottomTextDiv, containerQuestBottomButtons], {
                            autoAlpha: 0,
                            // delay: '0.4',
                            // y: '100%'
                            // scale: 0.95
                        })
                    ;
                });
            }
        });
    }
}

function questionCat_1_2() {
    let answerWrightNum = 1;

    if (localStorage.getItem('progressISEurope_2') === null ||
        localStorage.getItem('progressISEurope_2') >= 0) {
        localStorage.setItem('progressISEurope_2', JSON.stringify(0));
    }

    questionLoad.questionBlockSimple(
        '',
        'Куда Щелкунчик пригласил Мари?',
        'На прогулку по озеру',
        'В кукольное царство',
        'В кругосветное путешествие'
    );

    questionLoad.answerBlock(answerWrightNum,
        '«Мари устремилась дальше, вглубь чудесной кукольной страны. Навстречу им вышел вдруг расфуфыренный парчовый человечек, поклонился Щелкунчику и молвил: - Добро пожаловать, любезный принц, в столицу вашего королевства – прекрасный Марципанштадт!» ');

    let answerVar_1 = document.getElementById('answerVar_1'),
        answerVar_2 = document.getElementById('answerVar_2'),
        answerVar_3 = document.getElementById('answerVar_3'),
        answerVarArray = [answerVar_1, answerVar_2, answerVar_3],
        containerQuest = document.querySelector('.container-quest'),
        containerQuestBottom = document.querySelector('.container-quest__bottom'),
        containerQuestBottomTextDiv = document.querySelector('.container-quest__bottom_text'),
        containerQuestBottomButtons = document.querySelector('.container-quest__bottom_buttons'),
        buttonBack = document.getElementById('arrowBack')
    ;

    for (let i = 0; i < answerVarArray.length; i++) {
        answerVarArray[i].addEventListener('click', () => {
            if (answerVarArray[i] === answerVarArray[answerWrightNum]) {
                localSaveEurope(2, 1);

                const answerNextClick = document.getElementById('answerNextClick');
                answerNextClick.addEventListener('click', () => {
                    let tl = gsap.timeline({
                        onComplete: () => {
                            containerQuestBottom.removeChild(containerQuestBottomTextDiv);
                            containerQuestBottom.removeChild(containerQuestBottomButtons);
                            questionCat_1_3();
                        }
                    });
                    tl
                        .to([containerQuestBottomTextDiv, containerQuestBottomButtons], {
                            autoAlpha: 0,
                            // delay: '0.4',
                            // y: '100%'
                            // scale: 0.95
                        })
                    ;
                });
            } else if (answerVarArray[i] !== answerVarArray[answerWrightNum]) {
                localSaveEurope(2, 0);

                const answerNextClick = document.getElementById('answerNextClick');
                answerNextClick.addEventListener('click', () => {
                    let tl = gsap.timeline({
                        onComplete: () => {
                            containerQuestBottom.removeChild(containerQuestBottomTextDiv);
                            containerQuestBottom.removeChild(containerQuestBottomButtons);
                            questionCat_1_3();
                        }
                    });
                    tl
                        .to([containerQuestBottomTextDiv, containerQuestBottomButtons], {
                            autoAlpha: 0,
                            // delay: '0.4',
                            // y: '100%'
                            // scale: 0.95
                        })
                    ;
                });
            }
        });
    }
}

function questionCat_1_3() {
    let answerWrightNum = 2;

    if (localStorage.getItem('progressISEurope_3') === null ||
        localStorage.getItem('progressISEurope_3') >= 0) {
        localStorage.setItem('progressISEurope_3', JSON.stringify(0));
    }

    questionLoad.questionBlockSimple(
        '',
        'У кого из героев сказки вместо правого глаза была черная повязка?',
        'У отца Фрица и Мари',
        'У королевского звездочета',
        'У крестного Дроссельмейера'
    );

    questionLoad.answerBlock(answerWrightNum,
        '«Ох уж этот крестный Дроссльмейер!.. Вместо правого глаза у него была черная, но совсем не страшная повязка».',
        '');

    let answerVar_1 = document.getElementById('answerVar_1'),
        answerVar_2 = document.getElementById('answerVar_2'),
        answerVar_3 = document.getElementById('answerVar_3'),
        answerVarArray = [answerVar_1, answerVar_2, answerVar_3],
        containerQuest = document.querySelector('.container-quest'),
        containerQuestBottom = document.querySelector('.container-quest__bottom'),
        containerQuestBottomTextDiv = document.querySelector('.container-quest__bottom_text'),
        containerQuestBottomButtons = document.querySelector('.container-quest__bottom_buttons'),
        buttonBack = document.getElementById('arrowBack')
    ;

    for (let i = 0; i < answerVarArray.length; i++) {
        answerVarArray[i].addEventListener('click', () => {
            if (answerVarArray[i] === answerVarArray[answerWrightNum]) {
                localSaveEurope(3, 1);

                const answerNextClick = document.getElementById('answerNextClick');
                answerNextClick.addEventListener('click', () => {
                    let tl = gsap.timeline({
                        onComplete: () => {
                            containerQuestBottom.removeChild(containerQuestBottomTextDiv);
                            containerQuestBottom.removeChild(containerQuestBottomButtons);
                            questionCat_1_4();
                        }
                    });
                    tl
                        .to([containerQuestBottomTextDiv, containerQuestBottomButtons], {
                            autoAlpha: 0,
                            // delay: '0.4',
                            // y: '100%'
                            // scale: 0.95
                        })
                    ;
                });
            } else if (answerVarArray[i] !== answerVarArray[answerWrightNum]) {
                localSaveEurope(3, 0);

                const answerNextClick = document.getElementById('answerNextClick');
                answerNextClick.addEventListener('click', () => {
                    let tl = gsap.timeline({
                        onComplete: () => {
                            containerQuestBottom.removeChild(containerQuestBottomTextDiv);
                            containerQuestBottom.removeChild(containerQuestBottomButtons);
                            questionCat_1_4();
                        }
                    });
                    tl
                        .to([containerQuestBottomTextDiv, containerQuestBottomButtons], {
                            autoAlpha: 0,
                            // delay: '0.4',
                            // y: '100%'
                            // scale: 0.95
                        })
                    ;
                });
            }
        });
    }
}

function questionCat_1_4() {
    let answerWrightNum = 1;

    if (localStorage.getItem('progressISEurope_4') === null ||
        localStorage.getItem('progressISEurope_4') >= 0) {
        localStorage.setItem('progressISEurope_4', JSON.stringify(0));
    }

    questionLoad.questionBlockSimple(
        'Красная Шапочка',
        'Почему волк сразу не съел Красную Шапочку, когда встретил её в лесу?',
        'Потому что решил, что она идёт со своей мамой',
        'Потому что поблизости были дровосеки',
        'Потому что тогда он не был голоден'
    );

    questionLoad.answerBlock(answerWrightNum,
        '«Идет она лесом, а навстречу ей – Волк. Захотел Волк съесть Красную Шапочку, да не посмел – где-то близко стучали топорами дровосеки».',
        'Красная Шапочка');

    let answerVar_1 = document.getElementById('answerVar_1'),
        answerVar_2 = document.getElementById('answerVar_2'),
        answerVar_3 = document.getElementById('answerVar_3'),
        answerVarArray = [answerVar_1, answerVar_2, answerVar_3],
        containerQuest = document.querySelector('.container-quest'),
        containerQuestBottom = document.querySelector('.container-quest__bottom'),
        containerQuestBottomTextDiv = document.querySelector('.container-quest__bottom_text'),
        containerQuestBottomButtons = document.querySelector('.container-quest__bottom_buttons'),
        buttonBack = document.getElementById('arrowBack')
    ;

    for (let i = 0; i < answerVarArray.length; i++) {
        answerVarArray[i].addEventListener('click', () => {
            if (answerVarArray[i] === answerVarArray[answerWrightNum]) {
                localSaveEurope(4, 1);

                const answerNextClick = document.getElementById('answerNextClick');
                answerNextClick.addEventListener('click', () => {
                    let tl = gsap.timeline({
                        onComplete: () => {
                            containerQuestBottom.removeChild(containerQuestBottomTextDiv);
                            containerQuestBottom.removeChild(containerQuestBottomButtons);
                            questionCat_1_5();
                        }
                    });
                    tl
                        .to([containerQuestBottomTextDiv, containerQuestBottomButtons], {
                            autoAlpha: 0,
                            // delay: '1',
                            // y: '100%'
                            // scale: 0.95
                        })
                    ;
                });
            } else if (answerVarArray[i] !== answerVarArray[answerWrightNum]) {
                localSaveEurope(4, 0);

                const answerNextClick = document.getElementById('answerNextClick');
                answerNextClick.addEventListener('click', () => {
                    let tl = gsap.timeline({
                        onComplete: () => {
                            containerQuestBottom.removeChild(containerQuestBottomTextDiv);
                            containerQuestBottom.removeChild(containerQuestBottomButtons);
                            questionCat_1_5();
                        }
                    });
                    tl
                        .to([containerQuestBottomTextDiv, containerQuestBottomButtons], {
                            autoAlpha: 0,
                            // delay: '1',
                            // y: '100%'
                            // scale: 0.95
                        })
                    ;
                });
            }
        });
    }
}

function questionCat_1_5() {
    let answerWrightNum = 1;

    if (localStorage.getItem('progressISEurope_5') === null ||
        localStorage.getItem('progressISEurope_5') >= 0) {
        localStorage.setItem('progressISEurope_5', JSON.stringify(0));
    }

    questionLoad.questionBlockSimple(
        'Красная Шапочка',
        'Почему Красная Шапочка заговорила с Волком в лесу?',
        'Потому что растерялась',
        'Потому что не знала, что разговаривать с волками опасно',
        'Потому что захотела, чтобы Волк её проводил'
    );

    questionLoad.answerBlock(answerWrightNum,
        '«Девочка не знала, что с волками разговаривать опасно и вежливо ответила: «Я иду к бабушке, несу пирожки и горшочек масла»',
        'Красная Шапочка');

    let answerVar_1 = document.getElementById('answerVar_1'),
        answerVar_2 = document.getElementById('answerVar_2'),
        answerVar_3 = document.getElementById('answerVar_3'),
        answerVarArray = [answerVar_1, answerVar_2, answerVar_3],
        containerQuest = document.querySelector('.container-quest'),
        containerQuestBottom = document.querySelector('.container-quest__bottom'),
        containerQuestBottomTextDiv = document.querySelector('.container-quest__bottom_text'),
        containerQuestBottomButtons = document.querySelector('.container-quest__bottom_buttons'),
        buttonBack = document.getElementById('arrowBack')
    ;

    for (let i = 0; i < answerVarArray.length; i++) {
        answerVarArray[i].addEventListener('click', () => {
            if (answerVarArray[i] === answerVarArray[answerWrightNum]) {
                localSaveEurope(5, 1);

                const answerNextClick = document.getElementById('answerNextClick');
                answerNextClick.addEventListener('click', () => {
                    let tl = gsap.timeline({
                        onComplete: () => {
                            containerQuestBottom.removeChild(containerQuestBottomTextDiv);
                            containerQuestBottom.removeChild(containerQuestBottomButtons);
                            questionCat_1_6();
                        }
                    });
                    tl
                        .to([containerQuestBottomTextDiv, containerQuestBottomButtons], {
                            autoAlpha: 0,
                            // delay: '1',
                            // y: '100%'
                            // scale: 0.95
                        })
                    ;
                });
            } else if (answerVarArray[i] !== answerVarArray[answerWrightNum]) {
                localSaveEurope(5, 0);

                const answerNextClick = document.getElementById('answerNextClick');
                answerNextClick.addEventListener('click', () => {
                    let tl = gsap.timeline({
                        onComplete: () => {
                            containerQuestBottom.removeChild(containerQuestBottomTextDiv);
                            containerQuestBottom.removeChild(containerQuestBottomButtons);
                            questionCat_1_6();
                        }
                    });
                    tl
                        .to([containerQuestBottomTextDiv, containerQuestBottomButtons], {
                            autoAlpha: 0,
                            // delay: '1',
                            // y: '100%'
                            // scale: 0.95
                        })
                    ;
                });
            }
        });
    }
}

function questionCat_1_6() {
    let answerWrightNum = 2;

    if (localStorage.getItem('progressISEurope_6') === null ||
        localStorage.getItem('progressISEurope_6') >= 0) {
        localStorage.setItem('progressISEurope_6', JSON.stringify(0));
    }

    questionLoad.questionBlockSimple(
        'Красная Шапочка',
        'Какой последний вопрос был у девочки для Волка?',
        '«Почему у тебя такие большие глаза?»',
        '«Почему у тебя так много волос?»',
        '«Почему у тебя такие большие зубы?»'
    );

    questionLoad.answerBlock(answerWrightNum,
        '«-Бабушка, какие у вас большие зубы! -Это для того, чтобы съесть тебя, дитя мое! С этими словами Волк бросился на Красную Шапочку и проглотил ее».',
        'Красная Шапочка');

    let answerVar_1 = document.getElementById('answerVar_1'),
        answerVar_2 = document.getElementById('answerVar_2'),
        answerVar_3 = document.getElementById('answerVar_3'),
        answerVarArray = [answerVar_1, answerVar_2, answerVar_3],
        containerQuest = document.querySelector('.container-quest'),
        containerQuestBottom = document.querySelector('.container-quest__bottom'),
        containerQuestBottomTextDiv = document.querySelector('.container-quest__bottom_text'),
        containerQuestBottomButtons = document.querySelector('.container-quest__bottom_buttons'),
        buttonBack = document.getElementById('arrowBack')
    ;

    for (let i = 0; i < answerVarArray.length; i++) {
        answerVarArray[i].addEventListener('click', () => {
            if (answerVarArray[i] === answerVarArray[answerWrightNum]) {
                localSaveEurope(6, 1);

                const answerNextClick = document.getElementById('answerNextClick');
                answerNextClick.addEventListener('click', () => {
                    let tl = gsap.timeline({
                        onComplete: () => {
                            containerQuestBottom.removeChild(containerQuestBottomTextDiv);
                            containerQuestBottom.removeChild(containerQuestBottomButtons);
                            questionCat_1_7();
                        }
                    });
                    tl
                        .to([containerQuestBottomTextDiv, containerQuestBottomButtons], {
                            autoAlpha: 0,
                            // delay: '1',
                            // y: '100%'
                            // scale: 0.95
                        })
                    ;
                });
            } else if (answerVarArray[i] !== answerVarArray[answerWrightNum]) {
                localSaveEurope(6, 0);

                const answerNextClick = document.getElementById('answerNextClick');
                answerNextClick.addEventListener('click', () => {
                    let tl = gsap.timeline({
                        onComplete: () => {
                            containerQuestBottom.removeChild(containerQuestBottomTextDiv);
                            containerQuestBottom.removeChild(containerQuestBottomButtons);
                            questionCat_1_7();
                        }
                    });
                    tl
                        .to([containerQuestBottomTextDiv, containerQuestBottomButtons], {
                            autoAlpha: 0,
                            // delay: '1',
                            // y: '100%'
                            // scale: 0.95
                        })
                    ;
                });
            }
        });
    }
}

function questionCat_1_7() {
    let answerWrightNum = 2;

    if (localStorage.getItem('progressISEurope_7') === null ||
        localStorage.getItem('progressISEurope_7') >= 0) {
        localStorage.setItem('progressISEurope_7', JSON.stringify(0));
    }

    questionLoad.questionBlockSimple(
        'Красная Шапочка',
        'Почему девушку назвали Золушкой?',
        'Имя было придумано',
        'Потому что она была очаровательна как золото',
        'Потому что она работала в грязи'
    );

    questionLoad.answerBlock(answerWrightNum,
        'Вечером, окончив работу, она забиралась в уголок возле камина и сидела там, на ящике с золой. Поэтому сестры, а за ними и все в доме прозвали ее «Золушкой»',
        'Красная Шапочка');

    let answerVar_1 = document.getElementById('answerVar_1'),
        answerVar_2 = document.getElementById('answerVar_2'),
        answerVar_3 = document.getElementById('answerVar_3'),
        answerVarArray = [answerVar_1, answerVar_2, answerVar_3],
        containerQuest = document.querySelector('.container-quest'),
        containerQuestBottom = document.querySelector('.container-quest__bottom'),
        containerQuestBottomTextDiv = document.querySelector('.container-quest__bottom_text'),
        containerQuestBottomButtons = document.querySelector('.container-quest__bottom_buttons'),
        buttonBack = document.getElementById('arrowBack')
    ;

    for (let i = 0; i < answerVarArray.length; i++) {
        answerVarArray[i].addEventListener('click', () => {
            if (answerVarArray[i] === answerVarArray[answerWrightNum]) {
                localSaveEurope(7, 1);

                const answerNextClick = document.getElementById('answerNextClick');
                answerNextClick.addEventListener('click', () => {
                    let tl = gsap.timeline({
                        onComplete: () => {
                            containerQuestBottom.removeChild(containerQuestBottomTextDiv);
                            containerQuestBottom.removeChild(containerQuestBottomButtons);
                            questionCat_1_8();
                        }
                    });
                    tl
                        .to([containerQuestBottomTextDiv, containerQuestBottomButtons], {
                            autoAlpha: 0,
                            // delay: '1',
                            // y: '100%'
                            // scale: 0.95
                        })
                    ;
                });
            } else if (answerVarArray[i] !== answerVarArray[answerWrightNum]) {
                localSaveEurope(7, 0);

                const answerNextClick = document.getElementById('answerNextClick');
                answerNextClick.addEventListener('click', () => {
                    let tl = gsap.timeline({
                        onComplete: () => {
                            containerQuestBottom.removeChild(containerQuestBottomTextDiv);
                            containerQuestBottom.removeChild(containerQuestBottomButtons);
                            questionCat_1_8();
                        }
                    });
                    tl
                        .to([containerQuestBottomTextDiv, containerQuestBottomButtons], {
                            autoAlpha: 0,
                            // delay: '1',
                            // y: '100%'
                            // scale: 0.95
                        })
                    ;
                });
            }
        });
    }
}

function questionCat_1_8() {
    let answerWrightNum = 1;

    if (localStorage.getItem('progressISEurope_8') === null ||
        localStorage.getItem('progressISEurope_8') >= 0) {
        localStorage.setItem('progressISEurope_8', JSON.stringify(0));
    }

    questionLoad.questionBlockSimple(
        'Красная Шапочка',
        'Кого фея превратила в лошадей?',
        'Хомяков',
        'Мышей',
        'Собак'
    );

    questionLoad.answerBlock(answerWrightNum,
        '«Фея велела Золушке приоткрыть дверцу и выпустить на волю всех мышей по очереди, одну за другой.  Едва только мышь выбегала из своей темницы, фея прикасалась к ней палочкой, и от этого прикосновения обыкновенная серая мышка сейчас же превращалась в серого, мышастого коня».',
        'Красная Шапочка');

    let answerVar_1 = document.getElementById('answerVar_1'),
        answerVar_2 = document.getElementById('answerVar_2'),
        answerVar_3 = document.getElementById('answerVar_3'),
        answerVarArray = [answerVar_1, answerVar_2, answerVar_3],
        containerQuest = document.querySelector('.container-quest'),
        containerQuestBottom = document.querySelector('.container-quest__bottom'),
        containerQuestBottomTextDiv = document.querySelector('.container-quest__bottom_text'),
        containerQuestBottomButtons = document.querySelector('.container-quest__bottom_buttons'),
        buttonBack = document.getElementById('arrowBack')
    ;

    for (let i = 0; i < answerVarArray.length; i++) {
        answerVarArray[i].addEventListener('click', () => {
            if (answerVarArray[i] === answerVarArray[answerWrightNum]) {
                localSaveEurope(8, 1);

                const answerNextClick = document.getElementById('answerNextClick');
                answerNextClick.addEventListener('click', () => {
                    let tl = gsap.timeline({
                        onComplete: () => {
                            containerQuestBottom.removeChild(containerQuestBottomTextDiv);
                            containerQuestBottom.removeChild(containerQuestBottomButtons);
                            questionCat_1_9();
                        }
                    });
                    tl
                        .to([containerQuestBottomTextDiv, containerQuestBottomButtons], {
                            autoAlpha: 0,
                            // delay: '1',
                            // y: '100%'
                            // scale: 0.95
                        })
                    ;
                });
            } else if (answerVarArray[i] !== answerVarArray[answerWrightNum]) {
                localSaveEurope(8, 0);

                const answerNextClick = document.getElementById('answerNextClick');
                answerNextClick.addEventListener('click', () => {
                    let tl = gsap.timeline({
                        onComplete: () => {
                            containerQuestBottom.removeChild(containerQuestBottomTextDiv);
                            containerQuestBottom.removeChild(containerQuestBottomButtons);
                            questionCat_1_9();
                        }
                    });
                    tl
                        .to([containerQuestBottomTextDiv, containerQuestBottomButtons], {
                            autoAlpha: 0,
                            // delay: '1',
                            // y: '100%'
                            // scale: 0.95
                        })
                    ;
                });
            }
        });
    }
}

function questionCat_1_9() {
    let answerWrightNum = 0;

    if (localStorage.getItem('progressISEurope_9') === null ||
        localStorage.getItem('progressISEurope_9') >= 0) {
        localStorage.setItem('progressISEurope_9', JSON.stringify(0));
    }

    questionLoad.questionBlockSimple(
        'Красная Шапочка',
        'Когда Золушке надо было убежать с бала?',
        'В полночь',
        'На рассвете',
        'После танца с принцем'
    );

    questionLoad.answerBlock(answerWrightNum,
        '«Фея усадила Золушку в карету и строго настрого приказала возвратиться домой до полуночи…\n' +
        'Золушка вдруг услышала, как дворцовые часы бьют одиннадцать часов и три четверти. Она встала и пошла к выходу так быстро, что никто не смог ее догнать»',
        'Красная Шапочка');

    let answerVar_1 = document.getElementById('answerVar_1'),
        answerVar_2 = document.getElementById('answerVar_2'),
        answerVar_3 = document.getElementById('answerVar_3'),
        answerVarArray = [answerVar_1, answerVar_2, answerVar_3],
        containerQuest = document.querySelector('.container-quest'),
        containerQuestBottom = document.querySelector('.container-quest__bottom'),
        containerQuestBottomTextDiv = document.querySelector('.container-quest__bottom_text'),
        containerQuestBottomButtons = document.querySelector('.container-quest__bottom_buttons'),
        buttonBack = document.getElementById('arrowBack')
    ;

    for (let i = 0; i < answerVarArray.length; i++) {
        answerVarArray[i].addEventListener('click', () => {
            if (answerVarArray[i] === answerVarArray[answerWrightNum]) {
                localSaveEurope(9, 1);

                const answerNextClick = document.getElementById('answerNextClick');
                answerNextClick.addEventListener('click', () => {
                    let tl = gsap.timeline({
                        onComplete: () => {
                            containerQuestBottom.removeChild(containerQuestBottomTextDiv);
                            containerQuestBottom.removeChild(containerQuestBottomButtons);
                            questionCat_1_10();
                        }
                    });
                    tl
                        .to([containerQuestBottomTextDiv, containerQuestBottomButtons], {
                            autoAlpha: 0,
                            // delay: '1',
                            // y: '100%'
                            // scale: 0.95
                        })
                    ;
                });
            } else if (answerVarArray[i] !== answerVarArray[answerWrightNum]) {
                localSaveEurope(9, 0);

                const answerNextClick = document.getElementById('answerNextClick');
                answerNextClick.addEventListener('click', () => {
                    let tl = gsap.timeline({
                        onComplete: () => {
                            containerQuestBottom.removeChild(containerQuestBottomTextDiv);
                            containerQuestBottom.removeChild(containerQuestBottomButtons);
                            questionCat_1_10();
                        }
                    });
                    tl
                        .to([containerQuestBottomTextDiv, containerQuestBottomButtons], {
                            autoAlpha: 0,
                            // delay: '1',
                            // y: '100%'
                            // scale: 0.95
                        })
                    ;
                });
            }
        });
    }
}

function questionCat_1_10() {
    let answerWrightNum = 1;

    if (localStorage.getItem('progressISEurope_10') === null ||
        localStorage.getItem('progressISEurope_10') >= 0) {
        localStorage.setItem('progressISEurope_10', JSON.stringify(0));
    }

    questionLoad.questionBlockSimple(
        'Цветик-семицветик',
        'Кто подарил девочке цветок?',
        'Волшебник',
        'Старушка',
        'Садовник'
    );

    questionLoad.answerBlock(answerWrightNum,
        '«Пожалела старушка Женю, привела в свой садик и говорит: - Ничего, не плачь, я тебе помогу. Я тебе подарю цветик-семицветик, он все устроит»',
        'Цветик-семицветик');

    let answerVar_1 = document.getElementById('answerVar_1'),
        answerVar_2 = document.getElementById('answerVar_2'),
        answerVar_3 = document.getElementById('answerVar_3'),
        answerVarArray = [answerVar_1, answerVar_2, answerVar_3],
        containerQuest = document.querySelector('.container-quest'),
        containerQuestBottom = document.querySelector('.container-quest__bottom'),
        containerQuestBottomTextDiv = document.querySelector('.container-quest__bottom_text'),
        containerQuestBottomButtons = document.querySelector('.container-quest__bottom_buttons'),
        buttonBack = document.getElementById('arrowBack')
    ;

    for (let i = 0; i < answerVarArray.length; i++) {
        answerVarArray[i].addEventListener('click', () => {
            if (answerVarArray[i] === answerVarArray[answerWrightNum]) {
                localSaveEurope(10, 1);

                const answerNextClick = document.getElementById('answerNextClick');
                answerNextClick.addEventListener('click', () => {
                    let tl = gsap.timeline({
                        onComplete: () => {
                            containerQuestBottom.removeChild(containerQuestBottomTextDiv);
                            containerQuestBottom.removeChild(containerQuestBottomButtons);
                            questionCat_1_11();
                        }
                    });
                    tl
                        .to([containerQuestBottomTextDiv, containerQuestBottomButtons], {
                            autoAlpha: 0,
                            // delay: '1',
                            // y: '100%'
                            // scale: 0.95
                        })
                    ;
                });
            } else if (answerVarArray[i] !== answerVarArray[answerWrightNum]) {
                localSaveEurope(10, 0);

                const answerNextClick = document.getElementById('answerNextClick');
                answerNextClick.addEventListener('click', () => {
                    let tl = gsap.timeline({
                        onComplete: () => {
                            containerQuestBottom.removeChild(containerQuestBottomTextDiv);
                            containerQuestBottom.removeChild(containerQuestBottomButtons);
                            questionCat_1_11();
                        }
                    });
                    tl
                        .to([containerQuestBottomTextDiv, containerQuestBottomButtons], {
                            autoAlpha: 0,
                            // delay: '1',
                            // y: '100%'
                            // scale: 0.95
                        })
                    ;
                });
            }
        });
    }
}

function questionCat_1_11() {
    let answerWrightNum = 1;

    if (localStorage.getItem('progressISEurope_11') === null ||
        localStorage.getItem('progressISEurope_11') >= 0) {
        localStorage.setItem('progressISEurope_11', JSON.stringify(0));
    }

    questionLoad.questionBlockSimple(
        'Цветик-семицветик',
        'Что нужно было сделать, чтобы цветок исполнил желание?',
        'Потрясти цветок и произнести стих',
        'Оторвать один лепесток, бросить его и сказать',
        'Оторвать один лепесток и произнести стих'
    );

    questionLoad.answerBlock(answerWrightNum,
        '«Он может исполнить всё, что ты захочешь.  Для этого надо только оторвать один из лепестков, бросить его и сказать: Лети, лети, лепесток,<br /> Через запад на восток,<br /> Через север, через юг,<br /> Возвращайся, сделав круг.<br /> Лишь коснешься ты земли – Быть, по-моему, вели.<br /> И это тотчас сделается»',
        'Цветик-семицветик');

    let answerVar_1 = document.getElementById('answerVar_1'),
        answerVar_2 = document.getElementById('answerVar_2'),
        answerVar_3 = document.getElementById('answerVar_3'),
        answerVarArray = [answerVar_1, answerVar_2, answerVar_3],
        containerQuest = document.querySelector('.container-quest'),
        containerQuestBottom = document.querySelector('.container-quest__bottom'),
        containerQuestBottomTextDiv = document.querySelector('.container-quest__bottom_text'),
        containerQuestBottomButtons = document.querySelector('.container-quest__bottom_buttons'),
        buttonBack = document.getElementById('arrowBack')
    ;

    for (let i = 0; i < answerVarArray.length; i++) {
        answerVarArray[i].addEventListener('click', () => {
            if (answerVarArray[i] === answerVarArray[answerWrightNum]) {
                localSaveEurope(11, 1);

                const answerNextClick = document.getElementById('answerNextClick');
                answerNextClick.addEventListener('click', () => {
                    let tl = gsap.timeline({
                        onComplete: () => {
                            containerQuestBottom.removeChild(containerQuestBottomTextDiv);
                            containerQuestBottom.removeChild(containerQuestBottomButtons);
                            questionCat_1_12();
                        }
                    });
                    tl
                        .to([containerQuestBottomTextDiv, containerQuestBottomButtons], {
                            autoAlpha: 0,
                            // delay: '1',
                            // y: '100%'
                            // scale: 0.95
                        })
                    ;
                });
            } else if (answerVarArray[i] !== answerVarArray[answerWrightNum]) {
                localSaveEurope(11, 0);

                const answerNextClick = document.getElementById('answerNextClick');
                answerNextClick.addEventListener('click', () => {
                    let tl = gsap.timeline({
                        onComplete: () => {
                            containerQuestBottom.removeChild(containerQuestBottomTextDiv);
                            containerQuestBottom.removeChild(containerQuestBottomButtons);
                            questionCat_1_12();
                        }
                    });
                    tl
                        .to([containerQuestBottomTextDiv, containerQuestBottomButtons], {
                            autoAlpha: 0,
                            // delay: '1',
                            // y: '100%'
                            // scale: 0.95
                        })
                    ;
                });
            }
        });
    }
}

function questionCat_1_12() {
    let answerWrightNum = 2;

    if (localStorage.getItem('progressISEurope_12') === null ||
        localStorage.getItem('progressISEurope_12') >= 0) {
        localStorage.setItem('progressISEurope_12', JSON.stringify(0));
    }

    questionLoad.questionBlockSimple(
        'Золотой ключик',
        'Откуда папа Карло взял полено?',
        'Нашёл в лесу',
        'Ему принёс полено один из его заказчиков',
        'Ему отдал полено столяр Джузеппе'
    );

    questionLoad.answerBlock(answerWrightNum,
        '«Отделаюсь-ка я сейчас от этого проклятого полена». - Чего проще; видишь - лежит на верстаке превосходное полено, возьми-ка ты это полено, Карло, и отнеси домой…»',
        'Золотой ключик');

    let answerVar_1 = document.getElementById('answerVar_1'),
        answerVar_2 = document.getElementById('answerVar_2'),
        answerVar_3 = document.getElementById('answerVar_3'),
        answerVarArray = [answerVar_1, answerVar_2, answerVar_3],
        containerQuest = document.querySelector('.container-quest'),
        containerQuestBottom = document.querySelector('.container-quest__bottom'),
        containerQuestBottomTextDiv = document.querySelector('.container-quest__bottom_text'),
        containerQuestBottomButtons = document.querySelector('.container-quest__bottom_buttons'),
        buttonBack = document.getElementById('arrowBack')
    ;

    for (let i = 0; i < answerVarArray.length; i++) {
        answerVarArray[i].addEventListener('click', () => {
            if (answerVarArray[i] === answerVarArray[answerWrightNum]) {
                localSaveEurope(12, 1);

                const answerNextClick = document.getElementById('answerNextClick');
                answerNextClick.addEventListener('click', () => {
                    let tl = gsap.timeline({
                        onComplete: () => {
                            containerQuestBottom.removeChild(containerQuestBottomTextDiv);
                            containerQuestBottom.removeChild(containerQuestBottomButtons);
                            questionCat_1_13();
                        }
                    });
                    tl
                        .to([containerQuestBottomTextDiv, containerQuestBottomButtons], {
                            autoAlpha: 0,
                            // delay: '1',
                            // y: '100%'
                            // scale: 0.95
                        })
                    ;
                });
            } else if (answerVarArray[i] !== answerVarArray[answerWrightNum]) {
                localSaveEurope(12, 0);

                const answerNextClick = document.getElementById('answerNextClick');
                answerNextClick.addEventListener('click', () => {
                    let tl = gsap.timeline({
                        onComplete: () => {
                            containerQuestBottom.removeChild(containerQuestBottomTextDiv);
                            containerQuestBottom.removeChild(containerQuestBottomButtons);
                            questionCat_1_13();
                        }
                    });
                    tl
                        .to([containerQuestBottomTextDiv, containerQuestBottomButtons], {
                            autoAlpha: 0,
                            // delay: '1',
                            // y: '100%'
                            // scale: 0.95
                        })
                    ;
                });
            }
        });
    }
}

function questionCat_1_13() {
    let answerWrightNum = 1;

    if (localStorage.getItem('progressISEurope_13') === null ||
        localStorage.getItem('progressISEurope_13') >= 0) {
        localStorage.setItem('progressISEurope_13', JSON.stringify(0));
    }

    questionLoad.questionBlockSimple(
        'Золотой ключик',
        'Почему Карабас дал Буратино пять золотых монет?',
        'Чтобы уговорить человечка работать у него в театре',
        'Потому что тот рассказал ему про нарисованный очаг',
        'Потому что Буратино усмирил кукол'
    );

    questionLoad.answerBlock(answerWrightNum,
        '«- Где ты видел очаг, и огонь, и котелок нарисованными на куске холста? -  В каморке моего папы Карло. – Так, значит, это в каморке старого Карло находится  потайная…<br /> - Я тебе дарю жизнь, Буратино. Мало того…<br /> Он залез под бороду в жилетный карман, вытащил пять золотых монет и протянул их Буратино»',
        'Золотой ключик');

    let answerVar_1 = document.getElementById('answerVar_1'),
        answerVar_2 = document.getElementById('answerVar_2'),
        answerVar_3 = document.getElementById('answerVar_3'),
        answerVarArray = [answerVar_1, answerVar_2, answerVar_3],
        containerQuest = document.querySelector('.container-quest'),
        containerQuestBottom = document.querySelector('.container-quest__bottom'),
        containerQuestBottomTextDiv = document.querySelector('.container-quest__bottom_text'),
        containerQuestBottomButtons = document.querySelector('.container-quest__bottom_buttons'),
        buttonBack = document.getElementById('arrowBack')
    ;

    for (let i = 0; i < answerVarArray.length; i++) {
        answerVarArray[i].addEventListener('click', () => {
            if (answerVarArray[i] === answerVarArray[answerWrightNum]) {
                localSaveEurope(13, 1);

                const answerNextClick = document.getElementById('answerNextClick');
                answerNextClick.addEventListener('click', () => {
                    let tl = gsap.timeline({
                        onComplete: () => {
                            containerQuestBottom.removeChild(containerQuestBottomTextDiv);
                            containerQuestBottom.removeChild(containerQuestBottomButtons);
                            questionCat_1_14();
                        }
                    });
                    tl
                        .to([containerQuestBottomTextDiv, containerQuestBottomButtons], {
                            autoAlpha: 0,
                            // delay: '1',
                            // y: '100%'
                            // scale: 0.95
                        })
                    ;
                });
            } else if (answerVarArray[i] !== answerVarArray[answerWrightNum]) {
                localSaveEurope(13, 0);

                const answerNextClick = document.getElementById('answerNextClick');
                answerNextClick.addEventListener('click', () => {
                    let tl = gsap.timeline({
                        onComplete: () => {
                            containerQuestBottom.removeChild(containerQuestBottomTextDiv);
                            containerQuestBottom.removeChild(containerQuestBottomButtons);
                            questionCat_1_14();
                        }
                    });
                    tl
                        .to([containerQuestBottomTextDiv, containerQuestBottomButtons], {
                            autoAlpha: 0,
                            // delay: '1',
                            // y: '100%'
                            // scale: 0.95
                        })
                    ;
                });
            }
        });
    }
}

function questionCat_1_14() {
    let answerWrightNum = 0;

    if (localStorage.getItem('progressISEurope_14') === null ||
        localStorage.getItem('progressISEurope_14') >= 0) {
        localStorage.setItem('progressISEurope_14', JSON.stringify(0));
    }

    questionLoad.questionBlockSimple(
        'Золотой ключик',
        'Зачем Базилио и Алиса вешают Буратино вниз головой на дерево?',
        'Чтобы вытрясти монеты, которые он взял в рот',
        'Чтобы он никуда не убежал',
        'Чтобы напугать его'
    );

    questionLoad.answerBlock(answerWrightNum,
        '«Наконец разбойники решили его повесить вниз головой. Привязали к ногам веревку, сели под дубом, протянув мокрые хвосты, и ждали, когда у него вывалятся изо рта золотые…»',
        'Золотой ключик');

    let answerVar_1 = document.getElementById('answerVar_1'),
        answerVar_2 = document.getElementById('answerVar_2'),
        answerVar_3 = document.getElementById('answerVar_3'),
        answerVarArray = [answerVar_1, answerVar_2, answerVar_3],
        containerQuest = document.querySelector('.container-quest'),
        containerQuestBottom = document.querySelector('.container-quest__bottom'),
        containerQuestBottomTextDiv = document.querySelector('.container-quest__bottom_text'),
        containerQuestBottomButtons = document.querySelector('.container-quest__bottom_buttons'),
        buttonBack = document.getElementById('arrowBack')
    ;

    for (let i = 0; i < answerVarArray.length; i++) {
        answerVarArray[i].addEventListener('click', () => {
            if (answerVarArray[i] === answerVarArray[answerWrightNum]) {
                localSaveEurope(14, 1);

                const answerNextClick = document.getElementById('answerNextClick');
                answerNextClick.addEventListener('click', () => {
                    let tl = gsap.timeline({
                        onComplete: () => {
                            containerQuestBottom.removeChild(containerQuestBottomTextDiv);
                            containerQuestBottom.removeChild(containerQuestBottomButtons);
                            questionCat_1_15();
                        }
                    });
                    tl
                        .to([containerQuestBottomTextDiv, containerQuestBottomButtons], {
                            autoAlpha: 0,
                            // delay: '1',
                            // y: '100%'
                            // scale: 0.95
                        })
                    ;
                });
            } else if (answerVarArray[i] !== answerVarArray[answerWrightNum]) {
                localSaveEurope(14, 0);

                const answerNextClick = document.getElementById('answerNextClick');
                answerNextClick.addEventListener('click', () => {
                    let tl = gsap.timeline({
                        onComplete: () => {
                            containerQuestBottom.removeChild(containerQuestBottomTextDiv);
                            containerQuestBottom.removeChild(containerQuestBottomButtons);
                            questionCat_1_15();
                        }
                    });
                    tl
                        .to([containerQuestBottomTextDiv, containerQuestBottomButtons], {
                            autoAlpha: 0,
                            // delay: '1',
                            // y: '100%'
                            // scale: 0.95
                        })
                    ;
                });
            }
        });
    }
}

function questionCat_1_15() {
    let answerWrightNum = 1;

    if (localStorage.getItem('progressISEurope_15') === null ||
        localStorage.getItem('progressISEurope_15') >= 0) {
        localStorage.setItem('progressISEurope_15', JSON.stringify(0));
    }

    questionLoad.questionBlockSimple(
        'Золотой ключик',
        'Как Буратино узнал секрет про дверцу, которую можно открыть ключиком?',
        'Нечаянно порвал нарисованный камин',
        'Услышал, как об этом говорил Барабас',
        'Ему рассказал сверчок'
    );

    questionLoad.answerBlock(answerWrightNum,
        '<span style="font-size: 1.1rem;">«Открой тайну, - опять завыл таинственный голос из глубины кувшина, - иначе не сойдешь с этого стула, несчастный!<br /> - Как-ка–какую та–та–тайну?<br /> - Где находится дверь, где находится дверь? – будто ветер в трубе в осеннюю ночь, провыл голос…<br />- Отвечу, отвечу, замолчи, замолчи, - прошептал Карабас Барабас.<br />– Дверь – у старого Карло в каморке, за нарисованным очагом»</span>',
        'Золотой ключик');

    let answerVar_1 = document.getElementById('answerVar_1'),
        answerVar_2 = document.getElementById('answerVar_2'),
        answerVar_3 = document.getElementById('answerVar_3'),
        answerVarArray = [answerVar_1, answerVar_2, answerVar_3],
        containerQuestBottom = document.querySelector('.container-quest__bottom'),
        arrowBackClick = document.getElementById('arrowBack'),
        settingsClick = document.getElementById('settingsClick'),
        containerQuestBlock = document.querySelector('.container-quest'),
        containerQuestBlockBottom = document.querySelector('.container-quest__bottom'),
        wrapperBackPreloader = document.querySelector('.wrapper__preloader'),
        wrapperCategoryBack = document.querySelector('.wrapper__back_category'),
        wrapperBack = document.querySelector('.wrapper__back'),
        wrapperCategoryBackTop = document.querySelector('.wrapper__back_category--top'),
        wrapperCategoryTitle = document.querySelector('.wrapper__top_title'),
        wrapperTop = document.querySelector('.wrapper__top')
    ;

    for (let i = 0; i < answerVarArray.length; i++) {
        answerVarArray[i].addEventListener('click', () => {
            if (answerVarArray[i] === answerVarArray[answerWrightNum]) {
                localSaveEurope(15, 1);

                const answerNextClick = document.getElementById('answerNextClick');
                answerNextClick.addEventListener('click', () => {
                    soundsLoad.rightAnswer('assets/games/igroskazy/sounds/rightAnswer_2.ogg');
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
            } else if (answerVarArray[i] !== answerVarArray[answerWrightNum]) {
                localSaveEurope(15, 0);

                const answerNextClick = document.getElementById('answerNextClick');
                answerNextClick.addEventListener('click', () => {
                    soundsLoad.rightAnswer('assets/games/igroskazy/sounds/rightAnswer_2.ogg');
                    let tl = gsap.timeline({
                        onComplete: () => {
                            containerQuestBlock.removeChild(containerQuestBlockBottom);
                            wrapperBack.removeChild(wrapperCategoryBack);
                            wrapperBack.removeChild(wrapperCategoryBackTop);
                            wrapperBack.removeChild(wrapperBackPreloader);
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
            }
        });
    }
}