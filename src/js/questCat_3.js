// Африка

if (localStorage.getItem('isAfricaQuest_1_0') === null
    || localStorage.getItem('isAfricaQuest_1_0') >= 5
    || localStorage.getItem('isAfricaQuest_1_0') <= 5) {
    localStorage.setItem('isAfricaQuest_1_0', JSON.stringify(0));
}

function localSaveAfrica (questLocalNum, questLocalValue) {
    localStorage.setItem(`progressISAfrica_${questLocalNum}`, JSON.stringify(questLocalValue));
    let progressISAfrica_1 = JSON.parse(localStorage.getItem('progressAfricaAll'));
    let progressISAfrica_questLocalNum = JSON.parse(localStorage.getItem(`progressISAfrica_${questLocalNum}`));
    let progressISAfrica_1Sum = progressISAfrica_1 + progressISAfrica_questLocalNum;
    localStorage.setItem('progressAfricaAll', JSON.stringify(progressISAfrica_1Sum));
}

function questionCat_3_0() {
    let answerWrightNum = 0;

    questionLoad.questionBlockFind('africaFindID');

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
            <img src="assets/games/igroskazy/images/africa/is_africaFindRabbit_sm.png" id="cellVar_1" alt="">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" id="cellVarCheck_1"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>
        </li>
        <li class="container-quest__find_icon">
            <img src="assets/games/igroskazy/images/africa/is_africaFindSpider_sm.png" id="cellVar_2" alt="">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" id="cellVarCheck_2"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>
        </li>
        <li class="container-quest__find_icon">
            <img src="assets/games/igroskazy/images/africa/is_africaFindFrog_sm.png" id="cellVar_3" alt="">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" id="cellVarCheck_3"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>
        </li>
        <li class="container-quest__find_icon">
            <img src="assets/games/igroskazy/images/africa/is_africaFindLion_sm.png" id="cellVar_4" alt="">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" id="cellVarCheck_4"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>
        </li>
        <li class="container-quest__find_icon">
            <img src="assets/games/igroskazy/images/africa/is_africaFindKolibri_sm.png" id="cellVar_5" alt="">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" id="cellVarCheck_5"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>
        </li>
    `;

    containerFind.innerHTML = `
        <div id="is_itemAfrica_1" class="container-find__items"></div>
        <div id="is_itemAfrica_2" class="container-find__items"></div>
        <div id="is_itemAfrica_3" class="container-find__items"></div>
        <div id="is_itemAfrica_4" class="container-find__items"></div>
        <div id="is_itemAfrica_5" class="container-find__items"></div>
    `;

    containerFindTop.innerHTML = `
        <div id="is_itemAfricaTop_1" class="container-find__items--hidden"></div>
        <div id="is_itemAfricaTop_2" class="container-find__items--hidden"></div>
        <div id="is_itemAfricaTop_3" class="container-find__items--hidden"></div>
        <div id="is_itemAfricaTop_4" class="container-find__items--hidden"></div>
        <div id="is_itemAfricaTop_5" class="container-find__items--hidden"></div>
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
        is_itemAfrica_1 = document.getElementById('is_itemAfrica_1'),
        is_itemAfrica_2 = document.getElementById('is_itemAfrica_2'),
        is_itemAfrica_3 = document.getElementById('is_itemAfrica_3'),
        is_itemAfrica_4 = document.getElementById('is_itemAfrica_4'),
        is_itemAfrica_5 = document.getElementById('is_itemAfrica_5'),
        itemAfricaList = [is_itemAfrica_1, is_itemAfrica_2, is_itemAfrica_3, is_itemAfrica_4, is_itemAfrica_5],
        containerFindBlock = document.querySelector('.container-find'),
        containerFindTopBlock = document.querySelector('.container-find--top'),
        is_itemAfricaTop_1 = document.getElementById('is_itemAfricaTop_1'),
        is_itemAfricaTop_2 = document.getElementById('is_itemAfricaTop_2'),
        is_itemAfricaTop_3 = document.getElementById('is_itemAfricaTop_3'),
        is_itemAfricaTop_4 = document.getElementById('is_itemAfricaTop_4'),
        is_itemAfricaTop_5 = document.getElementById('is_itemAfricaTop_5'),
        itemAfricaTopList = [is_itemAfricaTop_1, is_itemAfricaTop_2, is_itemAfricaTop_3, is_itemAfricaTop_4, is_itemAfricaTop_5],
        buttonBack = document.getElementById('arrowBack'),
        buttonSetting = document.getElementById('settingsClick')
    ;

    let containerQuestItem = document.querySelector('.container-quest__item');
    gsap.from(containerQuestItem, {
        autoAlpha: 0,
        duration: '0.6',
        delay: '0.05'
    });

    for (let i = 0; i < itemAfricaTopList.length; i++) {
        itemAfricaTopList[i].addEventListener('click', () => {
            soundsLoad.rightAnswer('assets/games/igroskazy/sounds/rightAnswer_1.ogg');
            let isAfricaQuest_1_0 = JSON.parse(localStorage.getItem('isAfricaQuest_1_0'));
            let isAfricaQuest_1_0_sum = isAfricaQuest_1_0 + 1;
            localStorage.setItem('isAfricaQuest_1_0', JSON.stringify(isAfricaQuest_1_0_sum));
            let tl = new gsap.timeline();
            let tl1 = new gsap.timeline();
            tl
                .to(itemAfricaList[i], {
                    y: '-3%',
                    zIndex: 9999
                })
                .to(itemAfricaList[i], {
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
            itemAfricaTopList[i].style.pointerEvents = 'none';

            if (isAfricaQuest_1_0_sum === 5) {
                // localStorage.setItem('progressISAfrica_0', JSON.stringify(1));
                // let progressISAfrica_1 = JSON.parse(localStorage.getItem('progressAfricaAll'));
                // let progressISAfrica_0 = JSON.parse(localStorage.getItem('progressISAfrica_0'));
                // let progressISAfrica_1Sum = progressISAfrica_1 + progressISAfrica_0;
                // localStorage.setItem('progressAfricaAll', JSON.stringify(progressISAfrica_1Sum));

                let tl = gsap.timeline({
                    onComplete: () => {
                        wrapper.removeChild(containerFindTop);
                        wrapperBack.removeChild(containerFind);
                        containerQuestBlock.removeChild(containerQuestBottom);
                        // containerQuestBottom.removeChild(buttonBack);
                        // containerQuestBottom.removeChild(buttonSetting);
                        setTimeout(() => {
                            questionCat_3_1();
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

function questionCat_3_1() {
    let answerWrightNum = 0;

    if (localStorage.getItem('progressISAfrica_1') === null ||
        localStorage.getItem('progressISAfrica_1') >= 0) {
        localStorage.setItem('progressISAfrica_1', JSON.stringify(0));
    }

    questionLoad.questionBlock(
        '',
        'Кто чаще всего бывает героями африканских сказок?',
        'животные',
        'люди',
        'природные явления'
    );

    questionLoad.answerBlock(answerWrightNum, '');

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
                localSaveAfrica(1, 1);

                const answerNextClick = document.getElementById('answerNextClick');
                answerNextClick.addEventListener('click', () => {
                    let tl = gsap.timeline({
                        onComplete: () => {
                            containerQuestBottom.removeChild(containerQuestBottomTextDiv);
                            containerQuestBottom.removeChild(containerQuestBottomButtons);
                            questionCat_3_2();
                            // setTimeout(() => {
                            //     questionCat_3_2();
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
                localSaveAfrica(1, 0);

                const answerNextClick = document.getElementById('answerNextClick');
                answerNextClick.addEventListener('click', () => {
                    let tl = gsap.timeline({
                        onComplete: () => {
                            containerQuestBottom.removeChild(containerQuestBottomTextDiv);
                            containerQuestBottom.removeChild(containerQuestBottomButtons);
                            questionCat_3_2();
                            // setTimeout(() => {
                            //     questionCat_3_2();
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

function questionCat_3_2() {
    let answerWrightNum = 2;

    if (localStorage.getItem('progressISAfrica_2') === null ||
        localStorage.getItem('progressISAfrica_2') >= 0) {
        localStorage.setItem('progressISAfrica_2', JSON.stringify(0));
    }

    questionLoad.questionBlockSimple(
        '',
        'Какой зверь в сказках олицетворяет глупость?',
        'обезьяна',
        'заяц',
        'лев'
    );

    questionLoad.answerBlock(answerWrightNum, '');

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
                localSaveAfrica(2, 1);

                const answerNextClick = document.getElementById('answerNextClick');
                answerNextClick.addEventListener('click', () => {
                    let tl = gsap.timeline({
                        onComplete: () => {
                            containerQuestBottom.removeChild(containerQuestBottomTextDiv);
                            containerQuestBottom.removeChild(containerQuestBottomButtons);
                            questionCat_3_3();
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
                localSaveAfrica(2, 0);

                const answerNextClick = document.getElementById('answerNextClick');
                answerNextClick.addEventListener('click', () => {
                    let tl = gsap.timeline({
                        onComplete: () => {
                            containerQuestBottom.removeChild(containerQuestBottomTextDiv);
                            containerQuestBottom.removeChild(containerQuestBottomButtons);
                            questionCat_3_3();
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

function questionCat_3_3() {
    let answerWrightNum = 0;

    if (localStorage.getItem('progressISAfrica_3') === null ||
        localStorage.getItem('progressISAfrica_3') >= 0) {
        localStorage.setItem('progressISAfrica_3', JSON.stringify(0));
    }

    questionLoad.questionBlockSimple(
        '',
        'Какое качество олицетворяет паук?',
        'коварство',
        'скупость',
        'обжорство'
    );

    questionLoad.answerBlock(answerWrightNum,
        '',
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
                localSaveAfrica(3, 1);

                const answerNextClick = document.getElementById('answerNextClick');
                answerNextClick.addEventListener('click', () => {
                    let tl = gsap.timeline({
                        onComplete: () => {
                            containerQuestBottom.removeChild(containerQuestBottomTextDiv);
                            containerQuestBottom.removeChild(containerQuestBottomButtons);
                            questionCat_3_4();
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
                localSaveAfrica(3, 0);

                const answerNextClick = document.getElementById('answerNextClick');
                answerNextClick.addEventListener('click', () => {
                    let tl = gsap.timeline({
                        onComplete: () => {
                            containerQuestBottom.removeChild(containerQuestBottomTextDiv);
                            containerQuestBottom.removeChild(containerQuestBottomButtons);
                            questionCat_3_4();
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

function questionCat_3_4() {
    let answerWrightNum = 0;

    if (localStorage.getItem('progressISAfrica_4') === null ||
        localStorage.getItem('progressISAfrica_4') >= 0) {
        localStorage.setItem('progressISAfrica_4', JSON.stringify(0));
    }

    questionLoad.questionBlockSimple(
        '',
        'Какое качество олицетворяет гиена?',
        'жадность',
        'трусость',
        'подхалимство'
    );

    questionLoad.answerBlock(answerWrightNum,
        '',
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
                localSaveAfrica(4, 1);

                const answerNextClick = document.getElementById('answerNextClick');
                answerNextClick.addEventListener('click', () => {
                    let tl = gsap.timeline({
                        onComplete: () => {
                            containerQuestBottom.removeChild(containerQuestBottomTextDiv);
                            containerQuestBottom.removeChild(containerQuestBottomButtons);
                            questionCat_3_5();
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
                localSaveAfrica(4, 0);

                const answerNextClick = document.getElementById('answerNextClick');
                answerNextClick.addEventListener('click', () => {
                    let tl = gsap.timeline({
                        onComplete: () => {
                            containerQuestBottom.removeChild(containerQuestBottomTextDiv);
                            containerQuestBottom.removeChild(containerQuestBottomButtons);
                            questionCat_3_5();
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

function questionCat_3_5() {
    let answerWrightNum = 2;

    if (localStorage.getItem('progressISAfrica_5') === null ||
        localStorage.getItem('progressISAfrica_5') >= 0) {
        localStorage.setItem('progressISAfrica_5', JSON.stringify(0));
    }

    questionLoad.questionBlockSimple(
        'Крокодиловы слёзы',
        'Когда плачет крокодил?',
        'когда больно',
        'когда грустно',
        'когда ест'
    );

    questionLoad.answerBlock(answerWrightNum,
        '«Разве ты не знаешь, что такое крокодильи слезы? Мы плачем, когда собираемся съесть свою жертву. Ха-ха-ха!»',
        'Крокодиловы слёзы');

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
                localSaveAfrica(5, 1);

                const answerNextClick = document.getElementById('answerNextClick');
                answerNextClick.addEventListener('click', () => {
                    let tl = gsap.timeline({
                        onComplete: () => {
                            containerQuestBottom.removeChild(containerQuestBottomTextDiv);
                            containerQuestBottom.removeChild(containerQuestBottomButtons);
                            questionCat_3_6();
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
                localSaveAfrica(5, 0);

                const answerNextClick = document.getElementById('answerNextClick');
                answerNextClick.addEventListener('click', () => {
                    let tl = gsap.timeline({
                        onComplete: () => {
                            containerQuestBottom.removeChild(containerQuestBottomTextDiv);
                            containerQuestBottom.removeChild(containerQuestBottomButtons);
                            questionCat_3_6();
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

function questionCat_3_6() {
    let answerWrightNum = 1;

    if (localStorage.getItem('progressISAfrica_6') === null ||
        localStorage.getItem('progressISAfrica_6') >= 0) {
        localStorage.setItem('progressISAfrica_6', JSON.stringify(0));
    }

    questionLoad.questionBlockSimple(
        '',
        'Как черепаха отблагодарила леопарда за то, что он спас её из огня?',
        'сказала «спасибо»',
        'разрисовала его шкуру чёрными узорами',
        'пригласила в гости'
    );

    questionLoad.answerBlock(answerWrightNum,
        '«– У тебя злое сердце, – сказала ей черепаха, – поэтому и одежда твоя будет совсем другой.\n' +
        'И пеплом нарисовала на шкуре гиены черные некрасивые полосы»',
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
                localSaveAfrica(6, 1);

                const answerNextClick = document.getElementById('answerNextClick');
                answerNextClick.addEventListener('click', () => {
                    let tl = gsap.timeline({
                        onComplete: () => {
                            containerQuestBottom.removeChild(containerQuestBottomTextDiv);
                            containerQuestBottom.removeChild(containerQuestBottomButtons);
                            questionCat_3_7();
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
                localSaveAfrica(6, 0);

                const answerNextClick = document.getElementById('answerNextClick');
                answerNextClick.addEventListener('click', () => {
                    let tl = gsap.timeline({
                        onComplete: () => {
                            containerQuestBottom.removeChild(containerQuestBottomTextDiv);
                            containerQuestBottom.removeChild(containerQuestBottomButtons);
                            questionCat_3_7();
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

function questionCat_3_7() {
    let answerWrightNum = 1;

    if (localStorage.getItem('progressISAfrica_7') === null ||
        localStorage.getItem('progressISAfrica_7') >= 0) {
        localStorage.setItem('progressISAfrica_7', JSON.stringify(0));
    }

    questionLoad.questionBlockSimple(
        'Колодец Ньямы',
        'За что бог воды Ньяма лишил лягушку хвоста?',
        'за хвастовство',
        'за жадность',
        'за нерадивость'
    );

    questionLoad.answerBlock(answerWrightNum,
        '«Когда до Ньямы дошел слух о том, что его подданные погибают от жажды, он сам отправился к колодцу, посмотреть, что там делается. Услыхав его шаги, лягушка проквакала:<br />– Кто идет мутить воду в колодце Ньямы? Ньяма строго сказал:<br />– Это я, Ньяма!<br />Но лягушка по привычке проквакала ему в ответ:<br />– Убирайся прочь! Нет здесь воды! Колодец высох. Услышав такие слова, Ньяма страшно разгневался. Он схватил лягушку за хвост и оторвал его. А лягушку прогнал прочь. И осталась лягушка без хвоста»',
        'Колодец Ньямы');

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
                localSaveAfrica(7, 1);

                const answerNextClick = document.getElementById('answerNextClick');
                answerNextClick.addEventListener('click', () => {
                    let tl = gsap.timeline({
                        onComplete: () => {
                            containerQuestBottom.removeChild(containerQuestBottomTextDiv);
                            containerQuestBottom.removeChild(containerQuestBottomButtons);
                            questionCat_3_8();
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
                localSaveAfrica(7, 0);

                const answerNextClick = document.getElementById('answerNextClick');
                answerNextClick.addEventListener('click', () => {
                    let tl = gsap.timeline({
                        onComplete: () => {
                            containerQuestBottom.removeChild(containerQuestBottomTextDiv);
                            containerQuestBottom.removeChild(containerQuestBottomButtons);
                            questionCat_3_8();
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

function questionCat_3_8() {
    let answerWrightNum = 1;

    if (localStorage.getItem('progressISAfrica_8') === null ||
        localStorage.getItem('progressISAfrica_8') >= 0) {
        localStorage.setItem('progressISAfrica_8', JSON.stringify(0));
    }

    questionLoad.questionBlockSimple(
        'Собака и кот',
        'Почему собака умеет хорошо выслеживать добычу только на земле?',
        'потому что не умеет летать',
        'потому что бросила учение и осталась недоучкой',
        'потому что не умеет лазить по деревьям'
    );

    questionLoad.answerBlock(answerWrightNum,
        '«– Сейчас, собака, ты умеешь находить по запаху то, что на земле. А на дереве отыскать – тебе уж не под силу! Это потому, что поспешила ты! Не успел я тебя всему научить, – сказал кот.<br />Так до сих пор собаки и не умеют влезать на деревья за добычей»',
        'Собака и кот');

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
                localSaveAfrica(8, 1);

                const answerNextClick = document.getElementById('answerNextClick');
                answerNextClick.addEventListener('click', () => {
                    let tl = gsap.timeline({
                        onComplete: () => {
                            containerQuestBottom.removeChild(containerQuestBottomTextDiv);
                            containerQuestBottom.removeChild(containerQuestBottomButtons);
                            questionCat_3_9();
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
                localSaveAfrica(8, 0);

                const answerNextClick = document.getElementById('answerNextClick');
                answerNextClick.addEventListener('click', () => {
                    let tl = gsap.timeline({
                        onComplete: () => {
                            containerQuestBottom.removeChild(containerQuestBottomTextDiv);
                            containerQuestBottom.removeChild(containerQuestBottomButtons);
                            questionCat_3_9();
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

function questionCat_3_9() {
    let answerWrightNum = 2;

    if (localStorage.getItem('progressISAfrica_9') === null ||
        localStorage.getItem('progressISAfrica_9') >= 0) {
        localStorage.setItem('progressISAfrica_9', JSON.stringify(0));
    }

    questionLoad.questionBlockSimple(
        'Почему змеи едят лягушек',
        'Почему змеи едят лягушек?',
        'лягушки полезные',
        'лягушки вкусные',
        'лягушки это заслужили'
    );

    questionLoad.answerBlock(answerWrightNum,
        '«– Не глотай меня, – попросила змею лягушка. – Приоткрой немного рот и скажи «а».<br />Сказала змея «а», но только она раскрыла рот, лягушка как бросится в воду! Страшно удивилась змея.<br />А лягушки в пруду нахваливают подругу: какая она хитрая да какая ловкая!<br />Смеются без удержу над глупой змеей.\n' +
        'Не могла змея стерпеть, что лягушка ее провела. Собрала она своих детей и сказала:<br />– Пожирайте лягушек, где бы они вам ни попались, ешьте их, даже если вы сыты. И глотайте их всегда целиком, чтобы они ускакать не успели. Только так мы истребим их проклятое племя!»',
        'Почему змеи едят лягушек');

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
                localSaveAfrica(9, 1);

                const answerNextClick = document.getElementById('answerNextClick');
                answerNextClick.addEventListener('click', () => {
                    let tl = gsap.timeline({
                        onComplete: () => {
                            containerQuestBottom.removeChild(containerQuestBottomTextDiv);
                            containerQuestBottom.removeChild(containerQuestBottomButtons);
                            questionCat_3_10();
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
                localSaveAfrica(9, 0);

                const answerNextClick = document.getElementById('answerNextClick');
                answerNextClick.addEventListener('click', () => {
                    let tl = gsap.timeline({
                        onComplete: () => {
                            containerQuestBottom.removeChild(containerQuestBottomTextDiv);
                            containerQuestBottom.removeChild(containerQuestBottomButtons);
                            questionCat_3_10();
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

function questionCat_3_10() {
    let answerWrightNum = 1;

    if (localStorage.getItem('progressISAfrica_10') === null ||
        localStorage.getItem('progressISAfrica_10') >= 0) {
        localStorage.setItem('progressISAfrica_10', JSON.stringify(0));
    }

    questionLoad.questionBlockSimple(
        'Заяц и буйвол',
        'Почему у зайца длинные уши?',
        'с такими родился',
        'вытянули',
        'подарили'
    );

    questionLoad.answerBlock(answerWrightNum,
        '«…Завопил заяц не своим голосом. Услышал его буйвол. Смотрит – что такое? Прыгает заяц без головы! Подошел он ближе и увидел, что голова зайца ушла в плечи. Схватил зайца за уши, потянул. Голова у зайца встала на место, только уши с тех пор длинные…»',
        'Заяц и буйвол');

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
                localSaveAfrica(10, 1);

                const answerNextClick = document.getElementById('answerNextClick');
                answerNextClick.addEventListener('click', () => {
                    let tl = gsap.timeline({
                        onComplete: () => {
                            containerQuestBottom.removeChild(containerQuestBottomTextDiv);
                            containerQuestBottom.removeChild(containerQuestBottomButtons);
                            questionCat_3_11();
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
                localSaveAfrica(10, 0);

                const answerNextClick = document.getElementById('answerNextClick');
                answerNextClick.addEventListener('click', () => {
                    let tl = gsap.timeline({
                        onComplete: () => {
                            containerQuestBottom.removeChild(containerQuestBottomTextDiv);
                            containerQuestBottom.removeChild(containerQuestBottomButtons);
                            questionCat_3_11();
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

function questionCat_3_11() {
    let answerWrightNum = 2;

    if (localStorage.getItem('progressISAfrica_11') === null ||
        localStorage.getItem('progressISAfrica_11') >= 0) {
        localStorage.setItem('progressISAfrica_11', JSON.stringify(0));
    }

    questionLoad.questionBlockSimple(
        'Кошка',
        'Почему кошка подружилась с женщиной?',
        'женщина добрая',
        'женщина заботится о кошке',
        'женщина могущественнее всех на свете'
    );

    questionLoad.answerBlock(answerWrightNum,
        '«– Ну, наконец-то я поняла, кто самый сильный из всех зверей. Это – женщина! И кошка поселилась в доме человека и подружилась с женщиной, потому что, на самом деле, женщины могущественнее всех на свете»',
        'Кошка');

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
                localSaveAfrica(11, 1);

                const answerNextClick = document.getElementById('answerNextClick');
                answerNextClick.addEventListener('click', () => {
                    let tl = gsap.timeline({
                        onComplete: () => {
                            containerQuestBottom.removeChild(containerQuestBottomTextDiv);
                            containerQuestBottom.removeChild(containerQuestBottomButtons);
                            questionCat_3_12();
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
                localSaveAfrica(11, 0);

                const answerNextClick = document.getElementById('answerNextClick');
                answerNextClick.addEventListener('click', () => {
                    let tl = gsap.timeline({
                        onComplete: () => {
                            containerQuestBottom.removeChild(containerQuestBottomTextDiv);
                            containerQuestBottom.removeChild(containerQuestBottomButtons);
                            questionCat_3_12();
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

function questionCat_3_12() {
    let answerWrightNum = 1;

    if (localStorage.getItem('progressISAfrica_12') === null ||
        localStorage.getItem('progressISAfrica_12') >= 0) {
        localStorage.setItem('progressISAfrica_12', JSON.stringify(0));
    }

    questionLoad.questionBlockSimple(
        'Соловей',
        'Почему соловей поёт ночью?',
        'нравится это время суток',
        'чтобы не погибнуть',
        'назначает свидание'
    );

    questionLoad.answerBlock(answerWrightNum,
        '«Однажды соловей ночевал в виноградной беседке, и вокруг его шеи обвился усик. С большим трудом удалось ему освободиться. После этого он уже боялся спать ночью и пел, чтобы не заснуть»',
        'Соловей');

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
                localSaveAfrica(12, 1);

                const answerNextClick = document.getElementById('answerNextClick');
                answerNextClick.addEventListener('click', () => {
                    let tl = gsap.timeline({
                        onComplete: () => {
                            containerQuestBottom.removeChild(containerQuestBottomTextDiv);
                            containerQuestBottom.removeChild(containerQuestBottomButtons);
                            questionCat_3_13();
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
                localSaveAfrica(12, 0);

                const answerNextClick = document.getElementById('answerNextClick');
                answerNextClick.addEventListener('click', () => {
                    let tl = gsap.timeline({
                        onComplete: () => {
                            containerQuestBottom.removeChild(containerQuestBottomTextDiv);
                            containerQuestBottom.removeChild(containerQuestBottomButtons);
                            questionCat_3_13();
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

function questionCat_3_13() {
    let answerWrightNum = 2;

    if (localStorage.getItem('progressISAfrica_13') === null ||
        localStorage.getItem('progressISAfrica_13') >= 0) {
        localStorage.setItem('progressISAfrica_13', JSON.stringify(0));
    }

    questionLoad.questionBlockSimple(
        'Как заяц стал вождем всех зверей',
        'Как заяц стал вождём зверей?',
        'по решению зверей',
        'по заслугам',
        'с помощью хитрости'
    );

    questionLoad.answerBlock(answerWrightNum,
        '«Однажды заяц созвал всех зверей и сказал:<br />– Давайте наварим пива, поставим его под огромным деревом и спросим у тех, кто живет там, на небе, кому быть вождем здесь, на земле. Все согласились и назначили день. А на рассвете того дня заяц посадил на дерево своего брата, тоже зайца»',
        'Как заяц стал вождем всех зверей');

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
                localSaveAfrica(13, 1);

                const answerNextClick = document.getElementById('answerNextClick');
                answerNextClick.addEventListener('click', () => {
                    let tl = gsap.timeline({
                        onComplete: () => {
                            containerQuestBottom.removeChild(containerQuestBottomTextDiv);
                            containerQuestBottom.removeChild(containerQuestBottomButtons);
                            questionCat_3_14();
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
                localSaveAfrica(13, 0);

                const answerNextClick = document.getElementById('answerNextClick');
                answerNextClick.addEventListener('click', () => {
                    let tl = gsap.timeline({
                        onComplete: () => {
                            containerQuestBottom.removeChild(containerQuestBottomTextDiv);
                            containerQuestBottom.removeChild(containerQuestBottomButtons);
                            questionCat_3_14();
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

function questionCat_3_14() {
    let answerWrightNum = 2;

    if (localStorage.getItem('progressISAfrica_14') === null ||
        localStorage.getItem('progressISAfrica_14') >= 0) {
        localStorage.setItem('progressISAfrica_14', JSON.stringify(0));
    }

    questionLoad.questionBlockSimple(
        'Рождение Сахары',
        'Как появилась пустыня Сахара?',
        'сотворили люди',
        'сотворил Бог',
        'по проклятию марабу (отшельника)'
    );

    questionLoad.answerBlock(answerWrightNum,
        '«Марабу наслал несчастья на их плодородную землю, и она постепенно сделалась мертвой и бесплодной. Реки пересохли, деревья стали чахнуть, прекрасные цветы и кусты в садах завяли. Ничего не осталось, кроме сорной сухой травы, которую ветер поднимал и уносил далеко.<br />С той поры не стало деревьев, зелени, воды и свежести. Весь край сделался пустынным и голым, и назвали его Сахарой»',
        'Рождение Сахары');

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
                localSaveAfrica(14, 1);

                const answerNextClick = document.getElementById('answerNextClick');
                answerNextClick.addEventListener('click', () => {
                    let tl = gsap.timeline({
                        onComplete: () => {
                            containerQuestBottom.removeChild(containerQuestBottomTextDiv);
                            containerQuestBottom.removeChild(containerQuestBottomButtons);
                            questionCat_3_15();
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
                localSaveAfrica(14, 0);

                const answerNextClick = document.getElementById('answerNextClick');
                answerNextClick.addEventListener('click', () => {
                    let tl = gsap.timeline({
                        onComplete: () => {
                            containerQuestBottom.removeChild(containerQuestBottomTextDiv);
                            containerQuestBottom.removeChild(containerQuestBottomButtons);
                            questionCat_3_15();
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

function questionCat_3_15() {
    let answerWrightNum = 1;

    if (localStorage.getItem('progressISAfrica_15') === null ||
        localStorage.getItem('progressISAfrica_15') >= 0) {
        localStorage.setItem('progressISAfrica_15', JSON.stringify(0));
    }

    questionLoad.questionBlockSimple(
        'Колибри и оса',
        'Почему осы устраивают свои гнёзда рядом с гнездами птицы колибри?',
        'осы и птицы симпатизируют друг другу',
        'осы оберегают яйца колибри',
        'колибри защищают осиные гнёзда'
    );

    questionLoad.answerBlock(answerWrightNum,
        '«Мы будем оберегать тебя. Когда ты положишь яйца в своем гнездышке, мы построим свое гнездо рядом, чтобы сторожить твоих детей.<br />И с той поры осы всегда устраивают себе гнезда рядом с гнездами колибри»',
        'Колибри и оса');

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
                localSaveAfrica(15, 1);

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
                localSaveAfrica(15, 0);

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