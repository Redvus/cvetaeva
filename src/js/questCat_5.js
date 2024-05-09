// Америка

if (localStorage.getItem('isAustraliaQuest_1_0') === null
    || localStorage.getItem('isAustraliaQuest_1_0') >= 5
    || localStorage.getItem('isustraliaaQuest_1_0') <= 5) {
    localStorage.setItem('isAustraliaQuest_1_0', JSON.stringify(0));
}

function localSaveAustralia (questLocalNum, questLocalValue) {
    localStorage.setItem(`progressISAustralia_${questLocalNum}`, JSON.stringify(questLocalValue));
    let progressISAustralia_1 = JSON.parse(localStorage.getItem('progressAustraliaAll'));
    let progressISAustralia_questLocalNum = JSON.parse(localStorage.getItem(`progressISAustralia_${questLocalNum}`));
    let progressISAustralia_1Sum = progressISAustralia_1 + progressISAustralia_questLocalNum;
    localStorage.setItem('progressAustraliaAll', JSON.stringify(progressISAustralia_1Sum));
}

function questionCat_5_0() {
    let answerWrightNum = 0;

    questionLoad.questionBlockFind('australiaFindID');

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
            <img src="assets/games/igroskazy/images/australia/is_australiaFindLyko_sm.png" id="cellVar_1" alt="">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" id="cellVarCheck_1"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>
        </li>
        <li class="container-quest__find_icon">
            <img src="assets/games/igroskazy/images/australia/is_australiaFindBumerang_sm.png" id="cellVar_2" alt="">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" id="cellVarCheck_2"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>
        </li>
        <li class="container-quest__find_icon">
            <img src="assets/games/igroskazy/images/australia/is_australiaFindParrot_sm.png" id="cellVar_3" alt="">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" id="cellVarCheck_3"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>
        </li>
        <li class="container-quest__find_icon">
            <img src="assets/games/igroskazy/images/australia/is_australiaFindTurtle_sm.png" id="cellVar_4" alt="">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" id="cellVarCheck_4"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>
        </li>
        <li class="container-quest__find_icon">
            <img src="assets/games/igroskazy/images/australia/is_australiaFindKangaroo_sm.png" id="cellVar_5" alt="">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" id="cellVarCheck_5"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>
        </li>
    `;

    containerFind.innerHTML = `
        <div id="is_itemAustralia_1" class="container-find__items"></div>
        <div id="is_itemAustralia_2" class="container-find__items"></div>
        <div id="is_itemAustralia_3" class="container-find__items"></div>
        <div id="is_itemAustralia_4" class="container-find__items"></div>
        <div id="is_itemAustralia_5" class="container-find__items"></div>
    `;

    containerFindTop.innerHTML = `
        <div id="is_itemAustraliaTop_1" class="container-find__items--hidden"></div>
        <div id="is_itemAustraliaTop_2" class="container-find__items--hidden"></div>
        <div id="is_itemAustraliaTop_3" class="container-find__items--hidden"></div>
        <div id="is_itemAustraliaTop_4" class="container-find__items--hidden"></div>
        <div id="is_itemAustraliaTop_5" class="container-find__items--hidden"></div>
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
        is_itemAustralia_1 = document.getElementById('is_itemAustralia_1'),
        is_itemAustralia_2 = document.getElementById('is_itemAustralia_2'),
        is_itemAustralia_3 = document.getElementById('is_itemAustralia_3'),
        is_itemAustralia_4 = document.getElementById('is_itemAustralia_4'),
        is_itemAustralia_5 = document.getElementById('is_itemAustralia_5'),
        itemAustraliaList = [is_itemAustralia_1, is_itemAustralia_2, is_itemAustralia_3, is_itemAustralia_4, is_itemAustralia_5],
        containerFindBlock = document.querySelector('.container-find'),
        containerFindTopBlock = document.querySelector('.container-find--top'),
        is_itemAustraliaTop_1 = document.getElementById('is_itemAustraliaTop_1'),
        is_itemAustraliaTop_2 = document.getElementById('is_itemAustraliaTop_2'),
        is_itemAustraliaTop_3 = document.getElementById('is_itemAustraliaTop_3'),
        is_itemAustraliaTop_4 = document.getElementById('is_itemAustraliaTop_4'),
        is_itemAustraliaTop_5 = document.getElementById('is_itemAustraliaTop_5'),
        itemAustraliaTopList = [is_itemAustraliaTop_1, is_itemAustraliaTop_2, is_itemAustraliaTop_3, is_itemAustraliaTop_4, is_itemAustraliaTop_5],
        buttonBack = document.getElementById('arrowBack'),
        buttonSetting = document.getElementById('settingsClick')
    ;

    let containerQuestItem = document.querySelector('.container-quest__item');
    gsap.from(containerQuestItem, {
        autoAlpha: 0,
        duration: '0.6',
        delay: '0.05'
    });

    for (let i = 0; i < itemAustraliaTopList.length; i++) {
        itemAustraliaTopList[i].addEventListener('click', () => {
            soundsLoad.rightAnswer('assets/games/igroskazy/sounds/rightAnswer_1.ogg');
            let isAustraliaQuest_1_0 = JSON.parse(localStorage.getItem('isAustraliaQuest_1_0'));
            let isAustraliaQuest_1_0_sum = isAustraliaQuest_1_0 + 1;
            localStorage.setItem('isAustraliaQuest_1_0', JSON.stringify(isAustraliaQuest_1_0_sum));
            let tl = new gsap.timeline();
            let tl1 = new gsap.timeline();
            tl
                .to(itemAustraliaList[i], {
                    y: '-3%',
                    zIndex: 9999
                })
                .to(itemAustraliaList[i], {
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
            itemAustraliaTopList[i].style.pointerEvents = 'none';

            if (isAustraliaQuest_1_0_sum === 5) {
                // localStorage.setItem('progressISAustralia_0', JSON.stringify(1));
                // let progressISAustralia_1 = JSON.parse(localStorage.getItem('progressAustraliaAll'));
                // let progressISAustralia_0 = JSON.parse(localStorage.getItem('progressISAustralia_0'));
                // let progressISAustralia_1Sum = progressISAustralia_1 + progressISAustralia_0;
                // localStorage.setItem('progressAustraliaAll', JSON.stringify(progressISAustralia_1Sum));

                let tl = gsap.timeline({
                    onComplete: () => {
                        wrapper.removeChild(containerFindTop);
                        wrapperBack.removeChild(containerFind);
                        containerQuestBlock.removeChild(containerQuestBottom);
                        // containerQuestBottom.removeChild(buttonBack);
                        // containerQuestBottom.removeChild(buttonSetting);
                        setTimeout(() => {
                            questionCat_5_1();
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

function questionCat_5_1() {
    let answerWrightNum = 0;

    if (localStorage.getItem('progressISAustralia_1') === null ||
        localStorage.getItem('progressISAustralia_1') >= 0) {
        localStorage.setItem('progressISAustralia_1', JSON.stringify(0));
    }

    questionLoad.questionBlock(
        'Как у австралийцев появился бумеранг',
        'Вопрос: За что жители Австралии почитают бумеранг?',
        'он помог людям вырасти',
        'он всегда возвращается к хозяину',
        'он помогает сбивать бананы'
    );

    questionLoad.answerBlock(answerWrightNum,
        '«….Вышел охотник из воды и стал расти все выше и выше. Палка тоже все увеличивалась. Стукнулся Йонди головой о свод небес, схватил волшебную палку, напрягся и начал ею отодвигать небосклон все выше и выше, пока и сам не стал таким, как теперешние люди…»',
        'Как у австралийцев появился бумеранг');

    let answerVar_1 = document.getElementById('answerVar_1'),
        answerVar_2 = document.getElementById('answerVar_2'),
        answerVar_3 = document.getElementById('answerVar_3'),
        answerVarArray = [answerVar_1, answerVar_2, answerVar_3],
        containerQuest = document.querySelector('.container-quest'),
        containerQuestBottom = document.querySelector('.container-quest__bottom'),
        containerQuestBottomTextDiv = document.querySelector('.container-quest__bottom_text'),
        containerQuestBottomButtons = document.querySelector('.container-quest__bottom_buttons'),
        buttonBack = document.getElementById('arrowBack'),
        buttonSetting = document.getElementById('settingsClick')

    ;

    for (let i = 0; i < answerVarArray.length; i++) {
        answerVarArray[i].addEventListener('click', () => {
            if (answerVarArray[i] === answerVarArray[answerWrightNum]) {
                localSaveAustralia(1, 1);

                const answerNextClick = document.getElementById('answerNextClick');
                answerNextClick.addEventListener('click', () => {
                    let tl = gsap.timeline({
                        onComplete: () => {
                            containerQuestBottom.removeChild(containerQuestBottomTextDiv);
                            containerQuestBottom.removeChild(containerQuestBottomButtons);
                            questionCat_5_2();
                            // setTimeout(() => {
                            //     questionCat_5_2();
                            // }, questTimePaused);
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
                localSaveAustralia(1, 0);

                const answerNextClick = document.getElementById('answerNextClick');
                answerNextClick.addEventListener('click', () => {
                    let tl = gsap.timeline({
                        onComplete: () => {
                            containerQuestBottom.removeChild(containerQuestBottomTextDiv);
                            containerQuestBottom.removeChild(containerQuestBottomButtons);
                            questionCat_5_2();
                            // setTimeout(() => {
                            //     questionCat_5_2();
                            // }, questTimePaused);
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

function questionCat_5_2() {
    let answerWrightNum = 0;

    if (localStorage.getItem('progressISAustralia_2') === null ||
        localStorage.getItem('progressISAustralia_2') >= 0) {
        localStorage.setItem('progressISAustralia_2', JSON.stringify(0));
    }

    questionLoad.questionBlockSimple(
        'Как у австралийцев появился бумеранг',
        'Как у австралийцев появился бумеранг?',
        'нашелся в чудесном источнике',
        'принес дельфин',
        'упал с неба'
    );

    questionLoad.answerBlock(answerWrightNum,
        '«…Поглядел Йонди в воду, а там, на дне источника, лежит палка, которую волшебная вода сделала твердой и прочной. Взял йонди палку и еще раз окунулся в чудесный источник, который он назвал источником будущего…»',
        'Как у австралийцев появился бумеранг');

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
                localSaveAustralia(2, 1);

                const answerNextClick = document.getElementById('answerNextClick');
                answerNextClick.addEventListener('click', () => {
                    let tl = gsap.timeline({
                        onComplete: () => {
                            containerQuestBottom.removeChild(containerQuestBottomTextDiv);
                            containerQuestBottom.removeChild(containerQuestBottomButtons);
                            questionCat_5_3();
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
                localSaveAustralia(2, 0);

                const answerNextClick = document.getElementById('answerNextClick');
                answerNextClick.addEventListener('click', () => {
                    let tl = gsap.timeline({
                        onComplete: () => {
                            containerQuestBottom.removeChild(containerQuestBottomTextDiv);
                            containerQuestBottom.removeChild(containerQuestBottomButtons);
                            questionCat_5_3();
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

function questionCat_5_3() {
    let answerWrightNum = 0;

    if (localStorage.getItem('progressISAustralia_3') === null ||
        localStorage.getItem('progressISAustralia_3') >= 0) {
        localStorage.setItem('progressISAustralia_3', JSON.stringify(0));
    }

    questionLoad.questionBlockSimple(
        'Как у австралийцев появился бумеранг',
        'Почему звери проспали чудо?',
        'им было лень встать',
        'крепко спали',
        'не верили в него'
    );

    questionLoad.answerBlock(answerWrightNum,
        '«А некоторые звери проспали всё чудо. Им было лень встать»',
        'Как у австралийцев появился бумеранг');

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
                localSaveAustralia(3, 1);

                const answerNextClick = document.getElementById('answerNextClick');
                answerNextClick.addEventListener('click', () => {
                    let tl = gsap.timeline({
                        onComplete: () => {
                            containerQuestBottom.removeChild(containerQuestBottomTextDiv);
                            containerQuestBottom.removeChild(containerQuestBottomButtons);
                            questionCat_5_4();
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
                localSaveAustralia(3, 0);

                const answerNextClick = document.getElementById('answerNextClick');
                answerNextClick.addEventListener('click', () => {
                    let tl = gsap.timeline({
                        onComplete: () => {
                            containerQuestBottom.removeChild(containerQuestBottomTextDiv);
                            containerQuestBottom.removeChild(containerQuestBottomButtons);
                            questionCat_5_4();
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

function questionCat_5_4() {
    let answerWrightNum = 0;

    if (localStorage.getItem('progressISAustralia_4') === null ||
        localStorage.getItem('progressISAustralia_4') >= 0) {
        localStorage.setItem('progressISAustralia_4', JSON.stringify(0));
    }

    questionLoad.questionBlockSimple(
        'Как у австралийцев появился бумеранг',
        'Во что превратились осколки радуги?',
        'в чудесных многоцветных птиц',
        'в звёзды',
        'в многоцветные цветы'
    );

    questionLoad.answerBlock(answerWrightNum,
        '«…На небе засверкала яркими цветами радуга. Вдруг она разбилась на тысячи кусочков. Эти кусочки превратились в чудесных многоцветных птиц»',
        'Как у австралийцев появился бумеранг');

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
                localSaveAustralia(4, 1);

                const answerNextClick = document.getElementById('answerNextClick');
                answerNextClick.addEventListener('click', () => {
                    let tl = gsap.timeline({
                        onComplete: () => {
                            containerQuestBottom.removeChild(containerQuestBottomTextDiv);
                            containerQuestBottom.removeChild(containerQuestBottomButtons);
                            questionCat_5_5();
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
                localSaveAustralia(4, 0);

                const answerNextClick = document.getElementById('answerNextClick');
                answerNextClick.addEventListener('click', () => {
                    let tl = gsap.timeline({
                        onComplete: () => {
                            containerQuestBottom.removeChild(containerQuestBottomTextDiv);
                            containerQuestBottom.removeChild(containerQuestBottomButtons);
                            questionCat_5_5();
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

function questionCat_5_5() {
    let answerWrightNum = 0;

    if (localStorage.getItem('progressISAustralia_5') === null ||
        localStorage.getItem('progressISAustralia_5') >= 0) {
        localStorage.setItem('progressISAustralia_5', JSON.stringify(0));
    }

    questionLoad.questionBlockSimple(
        'Как у кенгуру появилась сумка',
        'Как у кенгуру появилась сумка?',
        'подарок доброго духа',
        'выигрыш в состязании',
        'бабушкино наследство'
    );

    questionLoad.answerBlock(answerWrightNum,
        '<span style="font-size: 1rem;">«И не знала она, что старик вомбат был на самом деле духом, принявшим вид вомбата, чтобы узнать, какое из живых существ самое доброе и отзывчивое. Дух был добрый, и ему захотелось отблагодарить кенгуру: ведь она рисковала жизнью ради него. И тут он увидел сплетённую из травы сумку, забытую охотником, и вспомнил о непоседливом кенгурёнке.<br />— Возьми эту сумку, — сказал он кенгуру, — да привяжи её к животу покрепче.<br />Мать-кенгуру так и сделала, и в тот же миг почувствовала, как сумка приросла к животу, стала   частью её тела и покрылась снаружи и изнутри шерстью.<br />Мать-кенгуру поняла, какой ценный подарок она получила от доброго духа»</span>',
        'Как у кенгуру появилась сумка');

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
                localSaveAustralia(5, 1);

                const answerNextClick = document.getElementById('answerNextClick');
                answerNextClick.addEventListener('click', () => {
                    let tl = gsap.timeline({
                        onComplete: () => {
                            containerQuestBottom.removeChild(containerQuestBottomTextDiv);
                            containerQuestBottom.removeChild(containerQuestBottomButtons);
                            questionCat_5_6();
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
                localSaveAustralia(5, 0);

                const answerNextClick = document.getElementById('answerNextClick');
                answerNextClick.addEventListener('click', () => {
                    let tl = gsap.timeline({
                        onComplete: () => {
                            containerQuestBottom.removeChild(containerQuestBottomTextDiv);
                            containerQuestBottom.removeChild(containerQuestBottomButtons);
                            questionCat_5_6();
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

function questionCat_5_6() {
    let answerWrightNum = 0;

    if (localStorage.getItem('progressISAustralia_6') === null ||
        localStorage.getItem('progressISAustralia_6') >= 0) {
        localStorage.setItem('progressISAustralia_6', JSON.stringify(0));
    }

    questionLoad.questionBlockSimple(
        'Как у кенгуру появилась сумка',
        'Почему у кенгуру потерялся ребенок?',
        'мама кенгуру помогала старику вомбату',
        'кенгурёнок был непослушным',
        'у мамы кенгуру были гости'
    );

    questionLoad.answerBlock(answerWrightNum,
        '<span style="font-size: 1.1rem;">«…Как-то раз кенгуру оставила сына на полянке и строго-настрого приказала ему сидеть на месте. Сама же отправилась за едой и повстречала старого вомбата. Он жаловался сам себе на то, что всем безразлично, жив он или уже умер. Доброй кенгуру захотелось чем-нибудь помочь старику, и она спросила его<br />— Скажи, вомбат, чем я могу тебе помочь?<br />— Я стар и плохо вижу, — ответил ей вомбат. — Проводи меня, пожалуйста, к зарослям сочной и сладкой травы.<br />Кенгуру проводила старика, а когда вернулась, кенгурёнка на месте не оказалось».</span>',
        'Как у кенгуру появилась сумка');

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
                localSaveAustralia(6, 1);

                const answerNextClick = document.getElementById('answerNextClick');
                answerNextClick.addEventListener('click', () => {
                    let tl = gsap.timeline({
                        onComplete: () => {
                            containerQuestBottom.removeChild(containerQuestBottomTextDiv);
                            containerQuestBottom.removeChild(containerQuestBottomButtons);
                            questionCat_5_7();
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
                localSaveAustralia(6, 0);

                const answerNextClick = document.getElementById('answerNextClick');
                answerNextClick.addEventListener('click', () => {
                    let tl = gsap.timeline({
                        onComplete: () => {
                            containerQuestBottom.removeChild(containerQuestBottomTextDiv);
                            containerQuestBottom.removeChild(containerQuestBottomButtons);
                            questionCat_5_7();
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

function questionCat_5_7() {
    let answerWrightNum = 0;

    if (localStorage.getItem('progressISAustralia_7') === null ||
        localStorage.getItem('progressISAustralia_7') >= 0) {
        localStorage.setItem('progressISAustralia_7', JSON.stringify(0));
    }

    questionLoad.questionBlockSimple(
        'Как у кенгуру появилась сумка',
        'За что Вомбат захотел отблагодарить мать-кенгуру?',
        'она пыталась спасти его от смерти',
        'она накормила его вкусной едой',
        'она сделала ему подарок'
    );

    questionLoad.answerBlock(answerWrightNum,
        '…Дух был добрый и подумал, что не худо бы отблагодарить мать-кенгуру за то, что она пыталась спасти его от смерти, когда охотник намеревался метнуть в него копье. Ведь она рисковала жизнью!',
        'Как у кенгуру появилась сумка');

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
                localSaveAustralia(7, 1);

                const answerNextClick = document.getElementById('answerNextClick');
                answerNextClick.addEventListener('click', () => {
                    let tl = gsap.timeline({
                        onComplete: () => {
                            containerQuestBottom.removeChild(containerQuestBottomTextDiv);
                            containerQuestBottom.removeChild(containerQuestBottomButtons);
                            questionCat_5_8();
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
                localSaveAustralia(7, 0);

                const answerNextClick = document.getElementById('answerNextClick');
                answerNextClick.addEventListener('click', () => {
                    let tl = gsap.timeline({
                        onComplete: () => {
                            containerQuestBottom.removeChild(containerQuestBottomTextDiv);
                            containerQuestBottom.removeChild(containerQuestBottomButtons);
                            questionCat_5_8();
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

function questionCat_5_8() {
    let answerWrightNum = 0;

    if (localStorage.getItem('progressISAustralia_8') === null ||
        localStorage.getItem('progressISAustralia_8') >= 0) {
        localStorage.setItem('progressISAustralia_8', JSON.stringify(0));
    }

    questionLoad.questionBlockSimple(
        'Как у кенгуру появилась сумка',
        'Откуда у детёнышей кенгуру берутся сумки?',
        'сумки им дарят матери',
        'сумки им дарят отцы',
        'они получают сумки на день рождения'
    );

    questionLoad.answerBlock(answerWrightNum,
        '«...С тех пор так и повелось: когда родятся детеныши, животным женского пола их матери дарят сумки, без которых никто из них на австралийской земле обойтись уже не может».',
        'Как у кенгуру появилась сумка');

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
                localSaveAustralia(8, 1);

                const answerNextClick = document.getElementById('answerNextClick');
                answerNextClick.addEventListener('click', () => {
                    let tl = gsap.timeline({
                        onComplete: () => {
                            containerQuestBottom.removeChild(containerQuestBottomTextDiv);
                            containerQuestBottom.removeChild(containerQuestBottomButtons);
                            questionCat_5_9();
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
                localSaveAustralia(8, 0);

                const answerNextClick = document.getElementById('answerNextClick');
                answerNextClick.addEventListener('click', () => {
                    let tl = gsap.timeline({
                        onComplete: () => {
                            containerQuestBottom.removeChild(containerQuestBottomTextDiv);
                            containerQuestBottom.removeChild(containerQuestBottomButtons);
                            questionCat_5_9();
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

function questionCat_5_9() {
    let answerWrightNum = 0;

    if (localStorage.getItem('progressISAustralia_9') === null ||
        localStorage.getItem('progressISAustralia_9') >= 0) {
        localStorage.setItem('progressISAustralia_9', JSON.stringify(0));
    }

    questionLoad.questionBlockSimple(
        'Девушка, которая плела сумки',
        'Почему девушка Лована осталась одна в деревне?',
        'она была слишком тихая и все забыли о ней',
        'её не позвали с собой',
        'она осталась ждать юношу Яади'
    );

    questionLoad.answerBlock(answerWrightNum,
        '« …Оттого что Лована была такая тихая, никто не разговаривал с ней подолгу. Юноши ее племени проходили мимо ее хижины, когда шли на охоту, - не умела она пошутить с ними и приветить их ласковым словом…Все забыли о ней».',
        'Девушка, которая плела сумки');

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
                localSaveAustralia(9, 1);

                const answerNextClick = document.getElementById('answerNextClick');
                answerNextClick.addEventListener('click', () => {
                    let tl = gsap.timeline({
                        onComplete: () => {
                            containerQuestBottom.removeChild(containerQuestBottomTextDiv);
                            containerQuestBottom.removeChild(containerQuestBottomButtons);
                            questionCat_5_10();
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
                localSaveAustralia(9, 0);

                const answerNextClick = document.getElementById('answerNextClick');
                answerNextClick.addEventListener('click', () => {
                    let tl = gsap.timeline({
                        onComplete: () => {
                            containerQuestBottom.removeChild(containerQuestBottomTextDiv);
                            containerQuestBottom.removeChild(containerQuestBottomButtons);
                            questionCat_5_10();
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

function questionCat_5_10() {
    let answerWrightNum = 0;

    if (localStorage.getItem('progressISAustralia_10') === null ||
        localStorage.getItem('progressISAustralia_10') >= 0) {
        localStorage.setItem('progressISAustralia_10', JSON.stringify(0));
    }

    questionLoad.questionBlockSimple(
        'Девушка, которая плела сумки',
        'Из чего Лована плела сумки?',
        'из лыка',
        'из шерсти овец',
        'из травы'
    );

    questionLoad.answerBlock(answerWrightNum,
        '«…ловко переплетали полоски лыка, и потому она делала сумок больше, чем другие женщины»',
        'Девушка, которая плела сумки');

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
                localSaveAustralia(10, 1);

                const answerNextClick = document.getElementById('answerNextClick');
                answerNextClick.addEventListener('click', () => {
                    let tl = gsap.timeline({
                        onComplete: () => {
                            containerQuestBottom.removeChild(containerQuestBottomTextDiv);
                            containerQuestBottom.removeChild(containerQuestBottomButtons);
                            questionCat_5_11();
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
                localSaveAustralia(10, 0);

                const answerNextClick = document.getElementById('answerNextClick');
                answerNextClick.addEventListener('click', () => {
                    let tl = gsap.timeline({
                        onComplete: () => {
                            containerQuestBottom.removeChild(containerQuestBottomTextDiv);
                            containerQuestBottom.removeChild(containerQuestBottomButtons);
                            questionCat_5_11();
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

function questionCat_5_11() {
    let answerWrightNum = 0;

    if (localStorage.getItem('progressISAustralia_11') === null ||
        localStorage.getItem('progressISAustralia_11') >= 0) {
        localStorage.setItem('progressISAustralia_11', JSON.stringify(0));
    }

    questionLoad.questionBlockSimple(
        'Девушка, которая плела сумки',
        'Почему юноша Яади вернулся за девушкой Лованой?',
        'родители девушки обещали отдать её в жены Яади',
        'он был добрый',
        'он заботился о людях своего племени'
    );

    questionLoad.answerBlock(answerWrightNum,
        '«Потом Лована открыла глаза и взглянула на него, и не было в ее глазах страха.<br />-Что с тобой? — спросил Яади.<br />- Зачем ты  пришел?<br />- Я пришел за тобой.<br />- Почему ты сделал это?<br />- Потому что уже давным-давно твои отец и мать обещали отдать тебя мне в жены. Вот я и пришел».',
        'Девушка, которая плела сумки');

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
                localSaveAustralia(11, 1);

                const answerNextClick = document.getElementById('answerNextClick');
                answerNextClick.addEventListener('click', () => {
                    let tl = gsap.timeline({
                        onComplete: () => {
                            containerQuestBottom.removeChild(containerQuestBottomTextDiv);
                            containerQuestBottom.removeChild(containerQuestBottomButtons);
                            questionCat_5_12();
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
                localSaveAustralia(11, 0);

                const answerNextClick = document.getElementById('answerNextClick');
                answerNextClick.addEventListener('click', () => {
                    let tl = gsap.timeline({
                        onComplete: () => {
                            containerQuestBottom.removeChild(containerQuestBottomTextDiv);
                            containerQuestBottom.removeChild(containerQuestBottomButtons);
                            questionCat_5_12();
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

function questionCat_5_12() {
    let answerWrightNum = 0;

    if (localStorage.getItem('progressISAustralia_12') === null ||
        localStorage.getItem('progressISAustralia_12') >= 0) {
        localStorage.setItem('progressISAustralia_12', JSON.stringify(0));
    }

    questionLoad.questionBlockSimple(
        'Цапля и черепаха',
        'Для чего цапля танцевала перед детьми?',
        'чтобы спасти черепаху',
        'чтобы получить вознаграждение',
        'чтобы развеселить детей'
    );

    questionLoad.answerBlock(answerWrightNum,
        '«- Я помогу тебе,— ответила цапля.— Ведь и ты меня спасла когда-то.<br />Повернулась цапля к мальчикам, принялась танцевать еще веселее и вдруг запела:<br />- Керембаебае!  Керембаебае!  Развяжи-ка ноги! (А черепаха в это время развязывала ноги!)<br />- Керембаебае! Керембаебае! Просунь голову через ограду! (А   черепаха   в   это   время   просовывала   голову   через   ограду!)<br />- Керембаебае! Керембаебае! Вылезай! Вылезай! Теперь вся вылезай!»<br />(А черепаха в это время уже вылезла на волю!)',
        'Цапля и черепаха');

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
                localSaveAustralia(12, 1);

                const answerNextClick = document.getElementById('answerNextClick');
                answerNextClick.addEventListener('click', () => {
                    let tl = gsap.timeline({
                        onComplete: () => {
                            containerQuestBottom.removeChild(containerQuestBottomTextDiv);
                            containerQuestBottom.removeChild(containerQuestBottomButtons);
                            questionCat_5_13();
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
                localSaveAustralia(12, 0);

                const answerNextClick = document.getElementById('answerNextClick');
                answerNextClick.addEventListener('click', () => {
                    let tl = gsap.timeline({
                        onComplete: () => {
                            containerQuestBottom.removeChild(containerQuestBottomTextDiv);
                            containerQuestBottom.removeChild(containerQuestBottomButtons);
                            questionCat_5_13();
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

function questionCat_5_13() {
    let answerWrightNum = 0;

    if (localStorage.getItem('progressISAustralia_13') === null ||
        localStorage.getItem('progressISAustralia_13') >= 0) {
        localStorage.setItem('progressISAustralia_13', JSON.stringify(0));
    }

    questionLoad.questionBlockSimple(
        'Цапля и черепаха',
        'Почему цапля помогла черепахе бежать?',
        'черепаха спасла когда-то цаплю',
        'цапля спасала всех на острове',
        'черепаху ждали её дети'
    );

    questionLoad.answerBlock(answerWrightNum,
        '«…Сестрица! — позвала ее цапля.— Помоги мне! Боюсь, вода скоро еще выше поднимется!<br />Расколола черепаха коралл, в котором застряла нога цапли, и птица легко взлетела в воздух.<br />- Ты спасла мне жизнь! — крикнула она черепахе.— Глядишь, и я тебе когда-нибудь пригожусь...»',
        'Цапля и черепаха');

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
                localSaveAustralia(13, 1);

                const answerNextClick = document.getElementById('answerNextClick');
                answerNextClick.addEventListener('click', () => {
                    let tl = gsap.timeline({
                        onComplete: () => {
                            containerQuestBottom.removeChild(containerQuestBottomTextDiv);
                            containerQuestBottom.removeChild(containerQuestBottomButtons);
                            questionCat_5_14();
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
                localSaveAustralia(13, 0);

                const answerNextClick = document.getElementById('answerNextClick');
                answerNextClick.addEventListener('click', () => {
                    let tl = gsap.timeline({
                        onComplete: () => {
                            containerQuestBottom.removeChild(containerQuestBottomTextDiv);
                            containerQuestBottom.removeChild(containerQuestBottomButtons);
                            questionCat_5_14();
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

function questionCat_5_14() {
    let answerWrightNum = 0;

    if (localStorage.getItem('progressISAustralia_14') === null ||
        localStorage.getItem('progressISAustralia_14') >= 0) {
        localStorage.setItem('progressISAustralia_14', JSON.stringify(0));
    }

    questionLoad.questionBlockSimple(
        'Цапля и черепаха',
        'Почему черепаха просила о помощи?',
        'её нога застряла в трещине',
        'она не умела плавать',
        'она перегрелась на солнце'
    );

    questionLoad.answerBlock(answerWrightNum,
        'Как-то раз во время отлива отправилась цапля на коралловый риф, да оступилась — нога и застряла в трещине. А тут прилив! Стала вода подниматься и скоро поднялась по самую цаплину шею',
        'Цапля и черепаха');

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
                localSaveAustralia(14, 1);

                const answerNextClick = document.getElementById('answerNextClick');
                answerNextClick.addEventListener('click', () => {
                    let tl = gsap.timeline({
                        onComplete: () => {
                            containerQuestBottom.removeChild(containerQuestBottomTextDiv);
                            containerQuestBottom.removeChild(containerQuestBottomButtons);
                            questionCat_5_15();
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
                localSaveAustralia(14, 0);

                const answerNextClick = document.getElementById('answerNextClick');
                answerNextClick.addEventListener('click', () => {
                    let tl = gsap.timeline({
                        onComplete: () => {
                            containerQuestBottom.removeChild(containerQuestBottomTextDiv);
                            containerQuestBottom.removeChild(containerQuestBottomButtons);
                            questionCat_5_15();
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

function questionCat_5_15() {
    let answerWrightNum = 0;

    if (localStorage.getItem('progressISAustralia_15') === null ||
        localStorage.getItem('progressISAustralia_15') >= 0) {
        localStorage.setItem('progressISAustralia_15', JSON.stringify(0));
    }

    questionLoad.questionBlockSimple(
        'Цапля и черепаха',
        'Куда исчезла черепаха, после того как ей удалось спастись?',
        'она ушла в море',
        'она зарылась в песок',
        'она забралась на камни'
    );

    questionLoad.answerBlock(answerWrightNum,
        '«Огорчились люди. А когда внимательно осмотрели песок и увидели следы черепахи, тянущиеся к берегу, поняли:<br />- Никто ее не крал. Черепахе удалось спастись. Она в море ушла».',
        'Цапля и черепаха');

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
                localSaveAustralia(15, 1);

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
            } else if (answerVarArray[i] !== answerVarArray[answerWrightNum]) {
                localSaveAustralia(15, 0);

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
            }
        });
    }
}