// Азия

if (localStorage.getItem('isAsiaQuest_1_0') === null
    || localStorage.getItem('isAsiaQuest_1_0') >= 5
    || localStorage.getItem('isAsiaQuest_1_0') <= 5) {
    localStorage.setItem('isAsiaQuest_1_0', JSON.stringify(0));
}

function localSaveAsia (questLocalNum, questLocalValue) {
    localStorage.setItem(`progressISAsia_${questLocalNum}`, JSON.stringify(questLocalValue));
    let progressISAsia_1 = JSON.parse(localStorage.getItem('progressAsiaAll'));
    let progressISAsia_questLocalNum = JSON.parse(localStorage.getItem(`progressISAsia_${questLocalNum}`));
    let progressISAsia_1Sum = progressISAsia_1 + progressISAsia_questLocalNum;
    localStorage.setItem('progressAsiaAll', JSON.stringify(progressISAsia_1Sum));
}

function questionCat_2_0() {
    let answerWrightNum = 0;

    questionLoad.questionBlockFind('asiaFindID');

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
            <img src="assets/games/igroskazy/images/asia/is_asiaFindVorobei_sm.png" id="cellVar_1" alt="">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" id="cellVarCheck_1"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>
        </li>
        <li class="container-quest__find_icon">
            <img src="assets/games/igroskazy/images/asia/is_asiaFindMagnifier_sm.png" id="cellVar_2" alt="">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" id="cellVarCheck_2"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>
        </li>
        <li class="container-quest__find_icon">
            <img src="assets/games/igroskazy/images/asia/is_asiaFindTiger_sm.png" id="cellVar_3" alt="">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" id="cellVarCheck_3"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>
        </li>
        <li class="container-quest__find_icon">
            <img src="assets/games/igroskazy/images/asia/is_asiaFindLampa_sm.png" id="cellVar_4" alt="">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" id="cellVarCheck_4"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>
        </li>
        <li class="container-quest__find_icon">
            <img src="assets/games/igroskazy/images/asia/is_asiaFindGoat_sm.png" id="cellVar_5" alt="">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" id="cellVarCheck_5"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>
        </li>
    `;

    containerFind.innerHTML = `
        <div id="is_itemAsia_1" class="container-find__items"></div>
        <div id="is_itemAsia_2" class="container-find__items"></div>
        <div id="is_itemAsia_3" class="container-find__items"></div>
        <div id="is_itemAsia_4" class="container-find__items"></div>
        <div id="is_itemAsia_5" class="container-find__items"></div>
    `;

    containerFindTop.innerHTML = `
        <div id="is_itemAsiaTop_1" class="container-find__items--hidden"></div>
        <div id="is_itemAsiaTop_2" class="container-find__items--hidden"></div>
        <div id="is_itemAsiaTop_3" class="container-find__items--hidden"></div>
        <div id="is_itemAsiaTop_4" class="container-find__items--hidden"></div>
        <div id="is_itemAsiaTop_5" class="container-find__items--hidden"></div>
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
        is_itemAsia_1 = document.getElementById('is_itemAsia_1'),
        is_itemAsia_2 = document.getElementById('is_itemAsia_2'),
        is_itemAsia_3 = document.getElementById('is_itemAsia_3'),
        is_itemAsia_4 = document.getElementById('is_itemAsia_4'),
        is_itemAsia_5 = document.getElementById('is_itemAsia_5'),
        itemAsiaList = [is_itemAsia_1, is_itemAsia_2, is_itemAsia_3, is_itemAsia_4, is_itemAsia_5],
        containerFindBlock = document.querySelector('.container-find'),
        containerFindTopBlock = document.querySelector('.container-find--top'),
        is_itemAsiaTop_1 = document.getElementById('is_itemAsiaTop_1'),
        is_itemAsiaTop_2 = document.getElementById('is_itemAsiaTop_2'),
        is_itemAsiaTop_3 = document.getElementById('is_itemAsiaTop_3'),
        is_itemAsiaTop_4 = document.getElementById('is_itemAsiaTop_4'),
        is_itemAsiaTop_5 = document.getElementById('is_itemAsiaTop_5'),
        itemAsiaTopList = [is_itemAsiaTop_1, is_itemAsiaTop_2, is_itemAsiaTop_3, is_itemAsiaTop_4, is_itemAsiaTop_5],
        buttonBack = document.getElementById('arrowBack'),
        buttonSetting = document.getElementById('settingsClick')
    ;

    let containerQuestItem = document.querySelector('.container-quest__item');
    gsap.from(containerQuestItem, {
        autoAlpha: 0,
        duration: '0.6',
        delay: '0.05'
    });

    for (let i = 0; i < itemAsiaTopList.length; i++) {
        itemAsiaTopList[i].addEventListener('click', () => {
            soundsLoad.rightAnswer('assets/games/igroskazy/sounds/rightAnswer_1.ogg');
            let isAsiaQuest_1_0 = JSON.parse(localStorage.getItem('isAsiaQuest_1_0'));
            let isAsiaQuest_1_0_sum = isAsiaQuest_1_0 + 1;
            localStorage.setItem('isAsiaQuest_1_0', JSON.stringify(isAsiaQuest_1_0_sum));
            let tl = new gsap.timeline();
            let tl1 = new gsap.timeline();
            tl
                .to(itemAsiaList[i], {
                    // scale: 1.03,
                    y: '-3%',
                    zIndex: 9999
                })
                .to(itemAsiaList[i], {
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
            itemAsiaTopList[i].style.pointerEvents = 'none';

            if (isAsiaQuest_1_0_sum === 5) {
                // localStorage.setItem('progressISAsia_0', JSON.stringify(1));
                // let progressISAsia_1 = JSON.parse(localStorage.getItem('progressAsiaAll'));
                // let progressISAsia_0 = JSON.parse(localStorage.getItem('progressISAsia_0'));
                // let progressISAsia_1Sum = progressISAsia_1 + progressISAsia_0;
                // localStorage.setItem('progressAsiaAll', JSON.stringify(progressISAsia_1Sum));

                let tl = gsap.timeline({
                    onComplete: () => {
                        wrapper.removeChild(containerFindTop);
                        wrapperBack.removeChild(containerFind);
                        containerQuestBlock.removeChild(containerQuestBottom);
                        // containerQuestBottom.removeChild(buttonBack);
                        // containerQuestBottom.removeChild(buttonSetting);
                        setTimeout(() => {
                            questionCat_2_1();
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

function questionCat_2_1() {
    let answerWrightNum = 2;

    if (localStorage.getItem('progressISAsia_1') === null ||
        localStorage.getItem('progressISAsia_1') >= 0) {
        localStorage.setItem('progressISAsia_1', JSON.stringify(0));
    }

    questionLoad.questionBlock(
        '«Приключения Синдбада-Морехода»',
        'Сколько путешествий совершил Синдбад-Мореход?',
        'Три',
        'Пять',
        'Семь'
    );

    questionLoad.answerBlock(answerWrightNum,
        '«Я сложил в кладовые все бывшие со мной товары; и мои родные высчитали, сколько времени я был в отлучке в седьмое путешествие, и оказалось, что прошло двадцать семь лет, так что они перестали надеяться на мое возвращение».',
        '«Приключения Синдбада-Морехода»');

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
                localSaveAsia(1, 1);

                const answerNextClick = document.getElementById('answerNextClick');
                answerNextClick.addEventListener('click', () => {
                    let tl = gsap.timeline({
                        onComplete: () => {
                            containerQuestBottom.removeChild(containerQuestBottomTextDiv);
                            containerQuestBottom.removeChild(containerQuestBottomButtons);
                            questionCat_2_2();
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
                localSaveAsia(1, 0);

                const answerNextClick = document.getElementById('answerNextClick');
                answerNextClick.addEventListener('click', () => {
                    let tl = gsap.timeline({
                        onComplete: () => {
                            containerQuestBottom.removeChild(containerQuestBottomTextDiv);
                            containerQuestBottom.removeChild(containerQuestBottomButtons);
                            questionCat_2_2();
                            // setTimeout(() => {
                            //     questionCat_2_2();
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

function questionCat_2_2() {
    let answerWrightNum = 1;

    if (localStorage.getItem('progressISAsia_2') === null ||
        localStorage.getItem('progressISAsia_2') >= 0) {
        localStorage.setItem('progressISAsia_2', JSON.stringify(0));
    }

    questionLoad.questionBlockSimple(
        '«Приключения Синдбада-Морехода»',
        'Кто был отцом Синдбада-Морехода?',
        'султан',
        'купец',
        'халиф'
    );

    questionLoad.answerBlock(answerWrightNum,
        '«Синдбад-мореход начал свой рассказ. Мой отец был богатым купцом, а я был его единственным сыном».',
        '«Приключения Синдбада-Морехода»');

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
                localSaveAsia(2, 1);

                const answerNextClick = document.getElementById('answerNextClick');
                answerNextClick.addEventListener('click', () => {
                    let tl = gsap.timeline({
                        onComplete: () => {
                            containerQuestBottom.removeChild(containerQuestBottomTextDiv);
                            containerQuestBottom.removeChild(containerQuestBottomButtons);
                            questionCat_2_3();
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
                localSaveAsia(2, 0);

                const answerNextClick = document.getElementById('answerNextClick');
                answerNextClick.addEventListener('click', () => {
                    let tl = gsap.timeline({
                        onComplete: () => {
                            containerQuestBottom.removeChild(containerQuestBottomTextDiv);
                            containerQuestBottom.removeChild(containerQuestBottomButtons);
                            questionCat_2_3();
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

function questionCat_2_3() {
    let answerWrightNum = 1;

    if (localStorage.getItem('progressISAsia_3') === null ||
        localStorage.getItem('progressISAsia_3') >= 0) {
        localStorage.setItem('progressISAsia_3', JSON.stringify(0));
    }

    questionLoad.questionBlockSimple(
        '«Приключения Синдбада-Морехода». Второе путешествие',
        'Как зовут гигантскую птицу, которая кормит своих птенцов слонами?',
        'Симург',
        'Рухх',
        'Гаруда'
    );

    questionLoad.answerBlock(answerWrightNum,
        '«Синдбад сначала испугался, но потом вспомнил, что капитан его корабля рассказывал, будто на дальних островах живет птица Рухх, которая кормит своих птенцов слонами»',
        '«Приключения Синдбада-Морехода». Второе путешествие');

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
                localSaveAsia(3, 1);

                const answerNextClick = document.getElementById('answerNextClick');
                answerNextClick.addEventListener('click', () => {
                    let tl = gsap.timeline({
                        onComplete: () => {
                            containerQuestBottom.removeChild(containerQuestBottomTextDiv);
                            containerQuestBottom.removeChild(containerQuestBottomButtons);
                            questionCat_2_4();
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
                localSaveAsia(3, 0);

                const answerNextClick = document.getElementById('answerNextClick');
                answerNextClick.addEventListener('click', () => {
                    let tl = gsap.timeline({
                        onComplete: () => {
                            containerQuestBottom.removeChild(containerQuestBottomTextDiv);
                            containerQuestBottom.removeChild(containerQuestBottomButtons);
                            questionCat_2_4();
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

function questionCat_2_4() {
    let answerWrightNum = 2;

    if (localStorage.getItem('progressISAsia_4') === null ||
        localStorage.getItem('progressISAsia_4') >= 0) {
        localStorage.setItem('progressISAsia_4', JSON.stringify(0));
    }

    questionLoad.questionBlockSimple(
        '«Волшебная лампа Аладдина»',
        'Сколько лет было Аладдину, когда он встретился с «дядей» (злым волшебником)',
        'Двадцать один год',
        'Семнадцать лет',
        'Пятнадцать лет'
    );

    questionLoad.answerBlock(answerWrightNum,
        '«Так прошло много времени. Аладдину исполнилось пятнадцать лет. И вот однажды, когда он, по обыкновению, играл с мальчиками, к ним подошел дервиш – странствующий монах»',
        '«Волшебная лампа Аладдина»');

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
                localSaveAsia(4, 1);

                const answerNextClick = document.getElementById('answerNextClick');
                answerNextClick.addEventListener('click', () => {
                    let tl = gsap.timeline({
                        onComplete: () => {
                            containerQuestBottom.removeChild(containerQuestBottomTextDiv);
                            containerQuestBottom.removeChild(containerQuestBottomButtons);
                            questionCat_2_5();
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
                localSaveAsia(4, 0);

                const answerNextClick = document.getElementById('answerNextClick');
                answerNextClick.addEventListener('click', () => {
                    let tl = gsap.timeline({
                        onComplete: () => {
                            containerQuestBottom.removeChild(containerQuestBottomTextDiv);
                            containerQuestBottom.removeChild(containerQuestBottomButtons);
                            questionCat_2_5();
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

function questionCat_2_5() {
    let answerWrightNum = 2;

    if (localStorage.getItem('progressISAsia_5') === null ||
        localStorage.getItem('progressISAsia_5') >= 0) {
        localStorage.setItem('progressISAsia_5', JSON.stringify(0));
    }

    questionLoad.questionBlockSimple(
        '«Волшебная лампа Аладдина»',
        'Что помогло «дяде» накормить Аладдина в пути к подножию скалы?',
        'скатерть-самобранка',
        'горшочек каши',
        'пустой мешок'
    );

    questionLoad.answerBlock(answerWrightNum,
        '<span style="font-size: 0.9rem;">«Они уже давно вышли из города, и Аладдина томила жажда. Наконец он не выдержал и спросил:<br />– Дядя, а когда мы будем обедать? Здесь нет ни одной лавки или харчевни, а ты ничего не взял с собой из города. У тебя в руках только пустой мешок.<br />– Видишь вон там, впереди, высокую гору? – сказал магрибинец. – Мы идем к этой горе, и я хотел отдохнуть и закусить у ее подножия. Но если ты очень голоден, можно пообедать и здесь.<br />– Откуда же ты возьмешь обед? – удивился Аладдин…<br />– Из мешка, – сказал магрибинец и развязал мешок.<br />Аладдин с любопытством заглянул в мешок, но там ничего не было»</span>',
        '«Волшебная лампа Аладдина»');

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
                localSaveAsia(5, 1);

                const answerNextClick = document.getElementById('answerNextClick');
                answerNextClick.addEventListener('click', () => {
                    let tl = gsap.timeline({
                        onComplete: () => {
                            containerQuestBottom.removeChild(containerQuestBottomTextDiv);
                            containerQuestBottom.removeChild(containerQuestBottomButtons);
                            questionCat_2_6();
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
                localSaveAsia(5, 0);

                const answerNextClick = document.getElementById('answerNextClick');
                answerNextClick.addEventListener('click', () => {
                    let tl = gsap.timeline({
                        onComplete: () => {
                            containerQuestBottom.removeChild(containerQuestBottomTextDiv);
                            containerQuestBottom.removeChild(containerQuestBottomButtons);
                            questionCat_2_6();
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

function questionCat_2_6() {
    let answerWrightNum = 1;

    if (localStorage.getItem('progressISAsia_6') === null ||
        localStorage.getItem('progressISAsia_6') >= 0) {
        localStorage.setItem('progressISAsia_6', JSON.stringify(0));
    }

    questionLoad.questionBlockSimple(
        'Волшебная лампа Аладдина',
        'Как звали джинна, раба лампы?',
        'Гасион',
        'Маймун',
        'Дахнаш',
    );

    questionLoad.answerBlock(answerWrightNum,
        '«– Я Маймун, сын Шамхураша, – ответил джинн. – Я раб лампы и раб того, кто ею владеет. Требуй от меня, чего хочешь. Если тебе угодно, чтобы я разрушил город или построил дворец, – приказывай!»',
        'Волшебная лампа Аладдина');

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
                localSaveAsia(6, 1);

                const answerNextClick = document.getElementById('answerNextClick');
                answerNextClick.addEventListener('click', () => {
                    let tl = gsap.timeline({
                        onComplete: () => {
                            containerQuestBottom.removeChild(containerQuestBottomTextDiv);
                            containerQuestBottom.removeChild(containerQuestBottomButtons);
                            questionCat_2_7();
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
                localSaveAsia(6, 0);

                const answerNextClick = document.getElementById('answerNextClick');
                answerNextClick.addEventListener('click', () => {
                    let tl = gsap.timeline({
                        onComplete: () => {
                            containerQuestBottom.removeChild(containerQuestBottomTextDiv);
                            containerQuestBottom.removeChild(containerQuestBottomButtons);
                            questionCat_2_7();
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

function questionCat_2_7() {
    let answerWrightNum = 0;

    if (localStorage.getItem('progressISAsia_7') === null ||
        localStorage.getItem('progressISAsia_7') >= 0) {
        localStorage.setItem('progressISAsia_7', JSON.stringify(0));
    }

    questionLoad.questionBlockSimple(
        'Али-баба и сорок разбойников',
        'Как звали брата Али-Бабы?',
        'Касим',
        'Баррак',
        'Зариф'
    );

    questionLoad.answerBlock(answerWrightNum,
        '«Когда-то, очень давно, в одном персидском городе жили два брата – Касим и Али-Баба».',
        'Али-баба и сорок разбойников');

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
                localSaveAsia(7, 1);

                const answerNextClick = document.getElementById('answerNextClick');
                answerNextClick.addEventListener('click', () => {
                    let tl = gsap.timeline({
                        onComplete: () => {
                            if (containerQuestBottom !== null) {
                                containerQuest.removeChild(containerQuestBottom);
                            } else {
                                containerQuestBottom.removeChild(containerQuestBottomTextDiv);
                                containerQuestBottom.removeChild(containerQuestBottomButtons);

                            }
                            questionCat_2_8();
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
                localSaveAsia(7, 0);

                const answerNextClick = document.getElementById('answerNextClick');
                answerNextClick.addEventListener('click', () => {
                    let tl = gsap.timeline({
                        onComplete: () => {
                            containerQuestBottom.removeChild(containerQuestBottomTextDiv);
                            containerQuestBottom.removeChild(containerQuestBottomButtons);
                            questionCat_2_8();
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

function questionCat_2_8() {
    let answerWrightNum = 1;

    if (localStorage.getItem('progressISAsia_8') === null ||
        localStorage.getItem('progressISAsia_8') >= 0) {
        localStorage.setItem('progressISAsia_8', JSON.stringify(0));
    }

    questionLoad.questionBlockSimple(
        'Али-баба и сорок разбойников',
        'Что такое симсим: «Симсим, откройся!»?',
        'имя',
        'растение',
        'набор звуков'
    );

    questionLoad.answerBlock(answerWrightNum,
        '«Вот чудо! – подумал Али-Баба. – Ведь симсим-то – это маленькое растение. Я знаю, что из него выжимают масло, но я не знал, что оно может открывать двери!»',
        'Али-баба и сорок разбойников');

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
                localSaveAsia(8, 1);

                const answerNextClick = document.getElementById('answerNextClick');
                answerNextClick.addEventListener('click', () => {
                    let tl = gsap.timeline({
                        onComplete: () => {
                            containerQuestBottom.removeChild(containerQuestBottomTextDiv);
                            containerQuestBottom.removeChild(containerQuestBottomButtons);
                            questionCat_2_9();
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
                localSaveAsia(8, 0);

                const answerNextClick = document.getElementById('answerNextClick');
                answerNextClick.addEventListener('click', () => {
                    let tl = gsap.timeline({
                        onComplete: () => {
                            containerQuestBottom.removeChild(containerQuestBottomTextDiv);
                            containerQuestBottom.removeChild(containerQuestBottomButtons);
                            questionCat_2_9();
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

function questionCat_2_9() {
    let answerWrightNum = 2;

    // if (localStorage.getItem('progressISAsia_9') === null ||
    //     localStorage.getItem('progressISAsia_9') >= 0) {
    //     localStorage.setItem('progressISAsia_9', JSON.stringify(0));
    // }

    questionLoad.questionBlockSimple(
        'Али-баба и сорок разбойников',
        'Кто спас Али-бабу от разбойников?',
        'жена Зейнаб',
        'брат Касим',
        'служанка Марджана'
    );

    questionLoad.answerBlock(answerWrightNum,
        '«И вот Марджана посреди танца стала все ближе и ближе подходить к атаману. И вдруг она, как кошка, прыгнула на него и, взмахнув кинжалом, вонзила его в сердце разбойника. Разбойник громко вскрикнул и умер»',
        'Али-баба и сорок разбойников');

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
                localSaveAsia(9, 1);

                const answerNextClick = document.getElementById('answerNextClick');
                answerNextClick.addEventListener('click', () => {
                    let tl = gsap.timeline({
                        onComplete: () => {
                            containerQuestBottom.removeChild(containerQuestBottomTextDiv);
                            containerQuestBottom.removeChild(containerQuestBottomButtons);
                            questionCat_2_10();
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
                localSaveAsia(9, 0);

                const answerNextClick = document.getElementById('answerNextClick');
                answerNextClick.addEventListener('click', () => {
                    let tl = gsap.timeline({
                        onComplete: () => {
                            containerQuestBottom.removeChild(containerQuestBottomTextDiv);
                            containerQuestBottom.removeChild(containerQuestBottomButtons);
                            questionCat_2_10();
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

function questionCat_2_10() {
    let answerWrightNum = 0;

    if (localStorage.getItem('progressISAsia_10') === null ||
        localStorage.getItem('progressISAsia_10') >= 0) {
        localStorage.setItem('progressISAsia_10', JSON.stringify(0));
    }

    questionLoad.questionBlockSimple(
        '«Приключения Синдбада-Морехода». Первое путешествие',
        'Город на Востоке, где происходит действие многих сказок',
        'Багдад',
        'Бухара',
        'Самарканд'
    );

    questionLoad.answerBlock(answerWrightNum,
        '«Давно-давно жил в городе Багдаде купец, которого звали Синдбад. У него было много товаров и денег, и его корабли плавали по всем морям. Капитаны кораблей, возвращаясь из путешествий, рассказывали Синдбаду удивительные истории о своих приключениях и о далеких странах, где они побывали»',
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
                localSaveAsia(10, 1);

                const answerNextClick = document.getElementById('answerNextClick');
                answerNextClick.addEventListener('click', () => {
                    let tl = gsap.timeline({
                        onComplete: () => {
                            containerQuestBottom.removeChild(containerQuestBottomTextDiv);
                            containerQuestBottom.removeChild(containerQuestBottomButtons);
                            questionCat_2_11();
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
                localSaveAsia(10, 0);

                const answerNextClick = document.getElementById('answerNextClick');
                answerNextClick.addEventListener('click', () => {
                    let tl = gsap.timeline({
                        onComplete: () => {
                            containerQuestBottom.removeChild(containerQuestBottomTextDiv);
                            containerQuestBottom.removeChild(containerQuestBottomButtons);
                            questionCat_2_11();
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

function questionCat_2_11() {
    let answerWrightNum = 2;

    if (localStorage.getItem('progressISAsia_11') === null ||
        localStorage.getItem('progressISAsia_11') >= 0) {
        localStorage.setItem('progressISAsia_11', JSON.stringify(0));
    }

    questionLoad.questionBlockSimple(
        '«Жил-был воробей», индийская сказка',
        'Что из перечисленного ниже не является частью войска воробья',
        'мышка',
        'иголка',
        'ложка'
    );

    questionLoad.answerBlock(answerWrightNum,
        'Плотник сделал маленькую тележку па восьми колесах. Воробей запряг в нее мышку и поехал воевать с царем. Едет он, едет, видит – лежит па дороге иголка.<br />– Братец воробей! Братец воробей! Ты куда едешь? – спрашивает иголка.<br />Отвечает воробей:<br />Я воробей, я воробей,<br />Видишь, мышку в тележку запряг:<br />Еду я с царем воевать –<br />Он мою воробьиху поймал.<br />– И я с тобой, братец воробей. – Поедем.',
        'Жил-был воробей');

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
                localSaveAsia(11, 1);

                const answerNextClick = document.getElementById('answerNextClick');
                answerNextClick.addEventListener('click', () => {
                    let tl = gsap.timeline({
                        onComplete: () => {
                            containerQuestBottom.removeChild(containerQuestBottomTextDiv);
                            containerQuestBottom.removeChild(containerQuestBottomButtons);
                            questionCat_2_12();
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
                localSaveAsia(11, 0);

                const answerNextClick = document.getElementById('answerNextClick');
                answerNextClick.addEventListener('click', () => {
                    let tl = gsap.timeline({
                        onComplete: () => {
                            containerQuestBottom.removeChild(containerQuestBottomTextDiv);
                            containerQuestBottom.removeChild(containerQuestBottomButtons);
                            questionCat_2_12();
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

function questionCat_2_12() {
    let answerWrightNum = 1;

    if (localStorage.getItem('progressISAsia_12') === null ||
        localStorage.getItem('progressISAsia_12') >= 0) {
        localStorage.setItem('progressISAsia_12', JSON.stringify(0));
    }

    questionLoad.questionBlockSimple(
        '«Заморыш», индийская сказка',
        'Каким предметом Заморыш укротил страшного великана?',
        'дубина',
        'зеркальце',
        'ружьё'
    );

    questionLoad.answerBlock(answerWrightNum,
        '«Он вынул зеркальце и показал великану. А у того глаза кровью налились, и стал он еще страшнее, чем был. Увидел он себя в зеркальце и испугался. «И вправду, –  думает, – сила у него небывалая, если такого великана он упрятал в коробочку!»',
        'Заморыш');

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
                localSaveAsia(12, 1);

                const answerNextClick = document.getElementById('answerNextClick');
                answerNextClick.addEventListener('click', () => {
                    let tl = gsap.timeline({
                        onComplete: () => {
                            containerQuestBottom.removeChild(containerQuestBottomTextDiv);
                            containerQuestBottom.removeChild(containerQuestBottomButtons);
                            questionCat_2_13();
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
                localSaveAsia(12, 0);

                const answerNextClick = document.getElementById('answerNextClick');
                answerNextClick.addEventListener('click', () => {
                    let tl = gsap.timeline({
                        onComplete: () => {
                            containerQuestBottom.removeChild(containerQuestBottomTextDiv);
                            containerQuestBottom.removeChild(containerQuestBottomButtons);
                            questionCat_2_13();
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

function questionCat_2_13() {
    let answerWrightNum = 1;

    if (localStorage.getItem('progressISAsia_13') === null ||
        localStorage.getItem('progressISAsia_13') >= 0) {
        localStorage.setItem('progressISAsia_13', JSON.stringify(0));
    }

    questionLoad.questionBlockSimple(
        '«Кувшинный человечек», японская сказки',
        'Кто такой кувшинный человечек?',
        'лень',
        'трудолюбие',
        'доброта'
    );

    questionLoad.answerBlock(answerWrightNum,
        '«Старые люди в деревне сказали: верно, это сама лень была и образе Кувшинного человечка»',
        'Кувшинный человечек');

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
                localSaveAsia(13, 1);

                const answerNextClick = document.getElementById('answerNextClick');
                answerNextClick.addEventListener('click', () => {
                    let tl = gsap.timeline({
                        onComplete: () => {
                            containerQuestBottom.removeChild(containerQuestBottomTextDiv);
                            containerQuestBottom.removeChild(containerQuestBottomButtons);
                            questionCat_2_14();
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
                localSaveAsia(13, 0);

                const answerNextClick = document.getElementById('answerNextClick');
                answerNextClick.addEventListener('click', () => {
                    let tl = gsap.timeline({
                        onComplete: () => {
                            containerQuestBottom.removeChild(containerQuestBottomTextDiv);
                            containerQuestBottom.removeChild(containerQuestBottomButtons);
                            questionCat_2_14();
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

function questionCat_2_14() {
    let answerWrightNum = 2;

    if (localStorage.getItem('progressISAsia_14') === null ||
        localStorage.getItem('progressISAsia_14') >= 0) {
        localStorage.setItem('progressISAsia_14', JSON.stringify(0));
    }

    questionLoad.questionBlockSimple(
        '«Старушка», персидская сказка',
        'Какой величины дом был у доброй старушки, приютившей животных в холодную ночь?',
        'величиной с корзину, а  комната – с чашку',
        'величиной с огород, а  комната – с грядку',
        'величиной с сито, а  комната – с тарелку'
    );

    questionLoad.answerBlock(answerWrightNum,
        '«Дом у нее был величиной с сито, комната – с тарелку и куст джидды – с метелку»',
        'Старушка');

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
                localSaveAsia(14, 1);

                const answerNextClick = document.getElementById('answerNextClick');
                answerNextClick.addEventListener('click', () => {
                    let tl = gsap.timeline({
                        onComplete: () => {
                            containerQuestBottom.removeChild(containerQuestBottomTextDiv);
                            containerQuestBottom.removeChild(containerQuestBottomButtons);
                            questionCat_2_15();
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
                localSaveAsia(14, 0);

                const answerNextClick = document.getElementById('answerNextClick');
                answerNextClick.addEventListener('click', () => {
                    let tl = gsap.timeline({
                        onComplete: () => {
                            containerQuestBottom.removeChild(containerQuestBottomTextDiv);
                            containerQuestBottom.removeChild(containerQuestBottomButtons);
                            questionCat_2_15();
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

function questionCat_2_15() {
    let answerWrightNum = 1;

    if (localStorage.getItem('progressISAsia_15') === null ||
        localStorage.getItem('progressISAsia_15') >= 0) {
        localStorage.setItem('progressISAsia_15', JSON.stringify(0));
    }

    questionLoad.questionBlockSimple(
        '«Шангул и Мангул», персидская сказка',
        'Как звали козочку, убежавшую от волка?',
        'Жемчужинка',
        'Виноградинка',
        'Изюминка'
    );

    questionLoad.answerBlock(answerWrightNum,
        '<span style="font-size: 1.1rem;">«Волк просунул в щель лапу, видят козлята: красная нога – и открыли дверь. Волк бросился на них и схватил Шангула и Мангула, а Виноградинка все-таки убежала. Вернулась коза и видит, что дверь распахнута, а дома – ни души. Стала она звать козлят. Виноградинка услышала и прибежала на зов матери. Она рассказала козе, как волк утащил ее братьев»</span>',
        'Шангул и Мангул');

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
                localSaveAsia(15, 1);

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
                localSaveAsia(15, 0);

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