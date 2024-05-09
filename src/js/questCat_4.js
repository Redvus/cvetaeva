// Америка

if (localStorage.getItem('isAmericaQuest_1_0') === null
    || localStorage.getItem('isAmericaQuest_1_0') >= 5
    || localStorage.getItem('isAmericaQuest_1_0') <= 5) {
    localStorage.setItem('isAmericaQuest_1_0', JSON.stringify(0));
}

function localSaveAmerica (questLocalNum, questLocalValue) {
    localStorage.setItem(`progressISAmerica_${questLocalNum}`, JSON.stringify(questLocalValue));
    let progressISAmerica_1 = JSON.parse(localStorage.getItem('progressAmericaAll'));
    let progressISAmerica_questLocalNum = JSON.parse(localStorage.getItem(`progressISAmerica_${questLocalNum}`));
    let progressISAmerica_1Sum = progressISAmerica_1 + progressISAmerica_questLocalNum;
    localStorage.setItem('progressAmericaAll', JSON.stringify(progressISAmerica_1Sum));
}

function questionCat_4_0() {
    let answerWrightNum = 0;

    questionLoad.questionBlockFind('americaFindID');

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
            <img src="assets/games/igroskazy/images/america/is_americaFindFeather_sm.png" id="cellVar_1" alt="">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" id="cellVarCheck_1"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>
        </li>
        <li class="container-quest__find_icon">
            <img src="assets/games/igroskazy/images/america/is_americaFindAnt_sm.png" id="cellVar_2" alt="">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" id="cellVarCheck_2"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>
        </li>
        <li class="container-quest__find_icon">
            <img src="assets/games/igroskazy/images/america/is_americaFindBow_sm.png" id="cellVar_3" alt="">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" id="cellVarCheck_3"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>
        </li>
        <li class="container-quest__find_icon">
            <img src="assets/games/igroskazy/images/america/is_americaFindLeopard_sm.png" id="cellVar_4" alt="">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" id="cellVarCheck_4"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>
        </li>
        <li class="container-quest__find_icon">
            <img src="assets/games/igroskazy/images/america/is_americaFindRaven_sm.png" id="cellVar_5" alt="">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" id="cellVarCheck_5"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>
        </li>
    `;

    containerFind.innerHTML = `
        <div id="is_itemAmerica_1" class="container-find__items"></div>
        <div id="is_itemAmerica_2" class="container-find__items"></div>
        <div id="is_itemAmerica_3" class="container-find__items"></div>
        <div id="is_itemAmerica_4" class="container-find__items"></div>
        <div id="is_itemAmerica_5" class="container-find__items"></div>
    `;

    containerFindTop.innerHTML = `
        <div id="is_itemAmericaTop_1" class="container-find__items--hidden"></div>
        <div id="is_itemAmericaTop_2" class="container-find__items--hidden"></div>
        <div id="is_itemAmericaTop_3" class="container-find__items--hidden"></div>
        <div id="is_itemAmericaTop_4" class="container-find__items--hidden"></div>
        <div id="is_itemAmericaTop_5" class="container-find__items--hidden"></div>
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
        is_itemAmerica_1 = document.getElementById('is_itemAmerica_1'),
        is_itemAmerica_2 = document.getElementById('is_itemAmerica_2'),
        is_itemAmerica_3 = document.getElementById('is_itemAmerica_3'),
        is_itemAmerica_4 = document.getElementById('is_itemAmerica_4'),
        is_itemAmerica_5 = document.getElementById('is_itemAmerica_5'),
        itemAmericaList = [is_itemAmerica_1, is_itemAmerica_2, is_itemAmerica_3, is_itemAmerica_4, is_itemAmerica_5],
        containerFindBlock = document.querySelector('.container-find'),
        containerFindTopBlock = document.querySelector('.container-find--top'),
        is_itemAmericaTop_1 = document.getElementById('is_itemAmericaTop_1'),
        is_itemAmericaTop_2 = document.getElementById('is_itemAmericaTop_2'),
        is_itemAmericaTop_3 = document.getElementById('is_itemAmericaTop_3'),
        is_itemAmericaTop_4 = document.getElementById('is_itemAmericaTop_4'),
        is_itemAmericaTop_5 = document.getElementById('is_itemAmericaTop_5'),
        itemAmericaTopList = [is_itemAmericaTop_1, is_itemAmericaTop_2, is_itemAmericaTop_3, is_itemAmericaTop_4, is_itemAmericaTop_5],
        buttonBack = document.getElementById('arrowBack'),
        buttonSetting = document.getElementById('settingsClick')
    ;

    let containerQuestItem = document.querySelector('.container-quest__item');
    gsap.from(containerQuestItem, {
        autoAlpha: 0,
        duration: '0.6',
        delay: '0.05'
    });

    for (let i = 0; i < itemAmericaTopList.length; i++) {
        itemAmericaTopList[i].addEventListener('click', () => {
            soundsLoad.rightAnswer('assets/games/igroskazy/sounds/rightAnswer_1.ogg');
            let isAmericaQuest_1_0 = JSON.parse(localStorage.getItem('isAmericaQuest_1_0'));
            let isAmericaQuest_1_0_sum = isAmericaQuest_1_0 + 1;
            localStorage.setItem('isAmericaQuest_1_0', JSON.stringify(isAmericaQuest_1_0_sum));
            let tl = new gsap.timeline();
            let tl1 = new gsap.timeline();
            tl
                .to(itemAmericaList[i], {
                    y: '-3%',
                    zIndex: 9999
                })
                .to(itemAmericaList[i], {
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
            itemAmericaTopList[i].style.pointerEvents = 'none';

            if (isAmericaQuest_1_0_sum === 5) {
                // localStorage.setItem('progressISAmerica_0', JSON.stringify(1));
                // let progressISAmerica_1 = JSON.parse(localStorage.getItem('progressAmericaAll'));
                // let progressISAmerica_0 = JSON.parse(localStorage.getItem('progressISAmerica_0'));
                // let progressISAmerica_1Sum = progressISAmerica_1 + progressISAmerica_0;
                // localStorage.setItem('progressAmericaAll', JSON.stringify(progressISAmerica_1Sum));

                let tl = gsap.timeline({
                    onComplete: () => {
                        wrapper.removeChild(containerFindTop);
                        wrapperBack.removeChild(containerFind);
                        containerQuestBlock.removeChild(containerQuestBottom);
                        // containerQuestBottom.removeChild(buttonBack);
                        // containerQuestBottom.removeChild(buttonSetting);
                        setTimeout(() => {
                            questionCat_4_1();
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

function questionCat_4_1() {
    let answerWrightNum = 1;

    if (localStorage.getItem('progressISAmerica_1') === null ||
        localStorage.getItem('progressISAmerica_1') >= 0) {
        localStorage.setItem('progressISAmerica_1', JSON.stringify(0));
    }

    questionLoad.questionBlock(
        'Муравей и пшеница',
        'Что король из сказки «Муравей и пшеница» пообещал тому, кто расскажет ему такую сказку, которая никогда не кончится?',
        'полцарства и коня',
        'отдать в жёны победителю свою дочь',
        'помилование'
    );

    questionLoad.answerBlock(answerWrightNum,
        'Один король больше всего на свете любил слушать сказки. Все придворные уже рассказали ему все сказки, которые знали, и поэтому король объявил, что отдаст дочку замуж за того, кто расскажет ему такую сказку, которая никогда не кончится. Однако если это будет просто очень длинная сказка с концом, то рассказчика тут же казнят', '');

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
                localSaveAmerica(1, 1);

                const answerNextClick = document.getElementById('answerNextClick');
                answerNextClick.addEventListener('click', () => {
                    let tl = gsap.timeline({
                        onComplete: () => {
                            containerQuestBottom.removeChild(containerQuestBottomTextDiv);
                            containerQuestBottom.removeChild(containerQuestBottomButtons);
                            questionCat_4_2();
                            // setTimeout(() => {
                            //     questionCat_4_2();
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
                localSaveAmerica(1, 0);

                const answerNextClick = document.getElementById('answerNextClick');
                answerNextClick.addEventListener('click', () => {
                    let tl = gsap.timeline({
                        onComplete: () => {
                            containerQuestBottom.removeChild(containerQuestBottomTextDiv);
                            containerQuestBottom.removeChild(containerQuestBottomButtons);
                            questionCat_4_2();
                            // setTimeout(() => {
                            //     questionCat_4_2();
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

function questionCat_4_2() {
    let answerWrightNum = 0;

    if (localStorage.getItem('progressISAmerica_2') === null ||
        localStorage.getItem('progressISAmerica_2') >= 0) {
        localStorage.setItem('progressISAmerica_2', JSON.stringify(0));
    }

    questionLoad.questionBlockSimple(
        'Добрый охотник',
        'Из чего состояло снадобье для охотника',
        'из искры жизни и души от всех зверей',
        'живой воды',
        'из трав мировых лесов'
    );

    questionLoad.answerBlock(answerWrightNum,
        'Но звери решили приготовить чудесное лекарство, в которое каждый из них вложит по искорке жизни — по кусочку своего ума и души', '');

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
                localSaveAmerica(2, 1);

                const answerNextClick = document.getElementById('answerNextClick');
                answerNextClick.addEventListener('click', () => {
                    let tl = gsap.timeline({
                        onComplete: () => {
                            containerQuestBottom.removeChild(containerQuestBottomTextDiv);
                            containerQuestBottom.removeChild(containerQuestBottomButtons);
                            questionCat_4_3();
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
                localSaveAmerica(2, 0);

                const answerNextClick = document.getElementById('answerNextClick');
                answerNextClick.addEventListener('click', () => {
                    let tl = gsap.timeline({
                        onComplete: () => {
                            containerQuestBottom.removeChild(containerQuestBottomTextDiv);
                            containerQuestBottom.removeChild(containerQuestBottomButtons);
                            questionCat_4_3();
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

function questionCat_4_3() {
    let answerWrightNum = 1;

    if (localStorage.getItem('progressISAmerica_3') === null ||
        localStorage.getItem('progressISAmerica_3') >= 0) {
        localStorage.setItem('progressISAmerica_3', JSON.stringify(0));
    }

    questionLoad.questionBlockSimple(
        '',
        'Какая птица принесла скальп охотника',
        'колибри',
        'ворон',
        'орёл'
    );

    questionLoad.answerBlock(answerWrightNum,
        'Думали, думали и наконец решили, что тут нужна ловкая и умная птица. Говорят, сначала хотели выбрать орла. Ирокезы считают его очень благородной птицей, ведь, говорят, он носит на спине чашу с росой и в дождливые дни проливает ее на землю туманом.<br />Потом выбрали было колибри — за то, что она быстро летает и почти невидима. Но в конце концов решили выбрать Великого Ворона, Гагагову',
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
                localSaveAmerica(3, 1);

                const answerNextClick = document.getElementById('answerNextClick');
                answerNextClick.addEventListener('click', () => {
                    let tl = gsap.timeline({
                        onComplete: () => {
                            containerQuestBottom.removeChild(containerQuestBottomTextDiv);
                            containerQuestBottom.removeChild(containerQuestBottomButtons);
                            questionCat_4_4();
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
                localSaveAmerica(3, 0);

                const answerNextClick = document.getElementById('answerNextClick');
                answerNextClick.addEventListener('click', () => {
                    let tl = gsap.timeline({
                        onComplete: () => {
                            containerQuestBottom.removeChild(containerQuestBottomTextDiv);
                            containerQuestBottom.removeChild(containerQuestBottomButtons);
                            questionCat_4_4();
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

function questionCat_4_4() {
    let answerWrightNum = 1;

    if (localStorage.getItem('progressISAmerica_4') === null ||
        localStorage.getItem('progressISAmerica_4') >= 0) {
        localStorage.setItem('progressISAmerica_4', JSON.stringify(0));
    }

    questionLoad.questionBlockSimple(
        '',
        'Как появились первые водяные лилии?',
        'это слёзы тысячи красавиц',
        'звезда, спустившаяся с небес на землю',
        'покрывало фей'
    );

    questionLoad.answerBlock(answerWrightNum,
        '— Я знаю, где мне будет лучше всего,— сказала звезда людям.— На воде! Там я смогу видеть, как проплывают мимо ваши каноэ. Ребятишки будут играть на берегу и станут моими товарищами. Даже самые маленькие полюбят меня: я буду навевать им сладкие сны в колыбельки.<br />Сказав так, звезда вошла в озеро и распростерла крылья на его глади. Очень понравилось ей свое отражение в прозрачной воде. На другое утро люди увидели на озере тысячи белых цветов в окружении зеленых листьев. То были первые белые водяные лилии',
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
                localSaveAmerica(4, 1);

                const answerNextClick = document.getElementById('answerNextClick');
                answerNextClick.addEventListener('click', () => {
                    let tl = gsap.timeline({
                        onComplete: () => {
                            containerQuestBottom.removeChild(containerQuestBottomTextDiv);
                            containerQuestBottom.removeChild(containerQuestBottomButtons);
                            questionCat_4_5();
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
                localSaveAmerica(4, 0);

                const answerNextClick = document.getElementById('answerNextClick');
                answerNextClick.addEventListener('click', () => {
                    let tl = gsap.timeline({
                        onComplete: () => {
                            containerQuestBottom.removeChild(containerQuestBottomTextDiv);
                            containerQuestBottom.removeChild(containerQuestBottomButtons);
                            questionCat_4_5();
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

function questionCat_4_5() {
    let answerWrightNum = 2;

    if (localStorage.getItem('progressISAmerica_5') === null ||
        localStorage.getItem('progressISAmerica_5') >= 0) {
        localStorage.setItem('progressISAmerica_5', JSON.stringify(0));
    }

    questionLoad.questionBlockSimple(
        'Синяя родинка',
        '«Если мы поссоримся, обещай, что никогда…» Что должен пообещать Синяя родинка своей жене?',
        'не острижёшь волос своих',
        'не выбросишь кольцо',
        'не бросишь землёй и не коснёшься ничем острым'
    );

    questionLoad.answerBlock(answerWrightNum,
        '«Молодая жена предостерегала мужа:<br />—Если мы поссоримся, обещай, что никогда не бросишь в меня золой из костра, не коснешься ничем острым. Иначе быть беде!»',
        'Синяя родинка');

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
                localSaveAmerica(5, 1);

                const answerNextClick = document.getElementById('answerNextClick');
                answerNextClick.addEventListener('click', () => {
                    let tl = gsap.timeline({
                        onComplete: () => {
                            containerQuestBottom.removeChild(containerQuestBottomTextDiv);
                            containerQuestBottom.removeChild(containerQuestBottomButtons);
                            questionCat_4_6();
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
                localSaveAmerica(5, 0);

                const answerNextClick = document.getElementById('answerNextClick');
                answerNextClick.addEventListener('click', () => {
                    let tl = gsap.timeline({
                        onComplete: () => {
                            containerQuestBottom.removeChild(containerQuestBottomTextDiv);
                            containerQuestBottom.removeChild(containerQuestBottomButtons);
                            questionCat_4_6();
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

function questionCat_4_6() {
    let answerWrightNum = 1;

    if (localStorage.getItem('progressISAmerica_6') === null ||
        localStorage.getItem('progressISAmerica_6') >= 0) {
        localStorage.setItem('progressISAmerica_6', JSON.stringify(0));
    }

    questionLoad.questionBlockSimple(
        'Синяя родинка',
        'Сколько раз Синяя Родинка должен был угадать своего сына?',
        'три раза',
        'четыре раза',
        'шесть раз',
    );

    questionLoad.answerBlock(answerWrightNum,
        '«Бизоненок, сын Синей Родинки, пошел к вожаку стада и спросил:<br />—Можно нам с матерью вернуться к отцу?<br />А потом вернулся к Синей Родинке и говорит:<br />—Хозяин требует, чтобы мы дождались бизоньей пляски. Если сможешь четырежды узнать меня, нас отпустят домой.»',
        'Синяя родинка');

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
                localSaveAmerica(6, 1);

                const answerNextClick = document.getElementById('answerNextClick');
                answerNextClick.addEventListener('click', () => {
                    let tl = gsap.timeline({
                        onComplete: () => {
                            containerQuestBottom.removeChild(containerQuestBottomTextDiv);
                            containerQuestBottom.removeChild(containerQuestBottomButtons);
                            questionCat_4_7();
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
                localSaveAmerica(6, 0);

                const answerNextClick = document.getElementById('answerNextClick');
                answerNextClick.addEventListener('click', () => {
                    let tl = gsap.timeline({
                        onComplete: () => {
                            containerQuestBottom.removeChild(containerQuestBottomTextDiv);
                            containerQuestBottom.removeChild(containerQuestBottomButtons);
                            questionCat_4_7();
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

function questionCat_4_7() {
    let answerWrightNum = 1;

    if (localStorage.getItem('progressISAmerica_7') === null ||
        localStorage.getItem('progressISAmerica_7') >= 0) {
        localStorage.setItem('progressISAmerica_7', JSON.stringify(0));
    }

    questionLoad.questionBlockSimple(
        'Чудесный конь',
        'Что просил сделать конь юношу перед охотой на пятнистого телёнка?',
        'накормить лучшим овсом',
        'вымазать коня грязью',
        'заночевать с конём в чистом поле'
    );

    questionLoad.answerBlock(answerWrightNum,
        'Стыдно стало бедняге, отъехал он в сторону, чтобы не слышать насмешек, а конь тут повернул голову и молвит:<br />—Поезжай к ручью и вымажь мне грязью голову, спину и ноги.<br />Испугался юноша, но сделал, как ему было велено.',
        'Чудесный конь');

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
                localSaveAmerica(7, 1);

                const answerNextClick = document.getElementById('answerNextClick');
                answerNextClick.addEventListener('click', () => {
                    let tl = gsap.timeline({
                        onComplete: () => {
                            containerQuestBottom.removeChild(containerQuestBottomTextDiv);
                            containerQuestBottom.removeChild(containerQuestBottomButtons);
                            questionCat_4_8();
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
                localSaveAmerica(7, 0);

                const answerNextClick = document.getElementById('answerNextClick');
                answerNextClick.addEventListener('click', () => {
                    let tl = gsap.timeline({
                        onComplete: () => {
                            containerQuestBottom.removeChild(containerQuestBottomTextDiv);
                            containerQuestBottom.removeChild(containerQuestBottomButtons);
                            questionCat_4_8();
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

function questionCat_4_8() {
    let answerWrightNum = 0;

    if (localStorage.getItem('progressISAmerica_8') === null ||
        localStorage.getItem('progressISAmerica_8') >= 0) {
        localStorage.setItem('progressISAmerica_8', JSON.stringify(0));
    }

    questionLoad.questionBlockSimple(
        'Как волшебник Глускеп подарил людям птиц?',
        'Что мудрый Глускеп превратил в птиц?',
        'листья',
        'веточки берёзы',
        'траву'
    );

    questionLoad.answerBlock(answerWrightNum,
        '—Я не могу вернуть деревьям те листья, что сорвал с них Волчий Ветер. Но все эти листья по моему велению обернутся птицами! Отныне каждую осень птицы будут улетать в Страну Цветов и Лета, а весной вы увидите их вновь. Птицы эти никогда не забудут, откуда они родом. Словно листья, станут кружиться в воздухе.',
        'Как волшебник Глускеп подарил людям птиц?');

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
                localSaveAmerica(8, 1);

                const answerNextClick = document.getElementById('answerNextClick');
                answerNextClick.addEventListener('click', () => {
                    let tl = gsap.timeline({
                        onComplete: () => {
                            containerQuestBottom.removeChild(containerQuestBottomTextDiv);
                            containerQuestBottom.removeChild(containerQuestBottomButtons);
                            questionCat_4_9();
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
                localSaveAmerica(8, 0);

                const answerNextClick = document.getElementById('answerNextClick');
                answerNextClick.addEventListener('click', () => {
                    let tl = gsap.timeline({
                        onComplete: () => {
                            containerQuestBottom.removeChild(containerQuestBottomTextDiv);
                            containerQuestBottom.removeChild(containerQuestBottomButtons);
                            questionCat_4_9();
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

function questionCat_4_9() {
    let answerWrightNum = 0;

    if (localStorage.getItem('progressISAmerica_9') === null ||
        localStorage.getItem('progressISAmerica_9') >= 0) {
        localStorage.setItem('progressISAmerica_9', JSON.stringify(0));
    }

    questionLoad.questionBlockSimple(
        'Как волшебник Глускеп подарил людям птиц?',
        'Как звали ветер в этой сказке?',
        'Волчий ветер',
        'Дикий ветер',
        'Вольный ветер'
    );

    questionLoad.answerBlock(answerWrightNum,
        'Едва солнце склонилось к западу, как с севера нагрянул злой великан. Он летел низко над волнами и громко завывал:<br />—Я Волчий Ветер! Я Во-олчий Ве-етер! Кто выйдет навстречу, погибнет! По-гиб-нет!<br />Мечется Волчий Ветер, с волн клочья пены срывает',
        'Как волшебник Глускеп подарил людям птиц?');

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
                localSaveAmerica(9, 1);

                const answerNextClick = document.getElementById('answerNextClick');
                answerNextClick.addEventListener('click', () => {
                    let tl = gsap.timeline({
                        onComplete: () => {
                            containerQuestBottom.removeChild(containerQuestBottomTextDiv);
                            containerQuestBottom.removeChild(containerQuestBottomButtons);
                            questionCat_4_10();
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
                localSaveAmerica(9, 0);

                const answerNextClick = document.getElementById('answerNextClick');
                answerNextClick.addEventListener('click', () => {
                    let tl = gsap.timeline({
                        onComplete: () => {
                            containerQuestBottom.removeChild(containerQuestBottomTextDiv);
                            containerQuestBottom.removeChild(containerQuestBottomButtons);
                            questionCat_4_10();
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

function questionCat_4_10() {
    let answerWrightNum = 2;

    if (localStorage.getItem('progressISAmerica_10') === null ||
        localStorage.getItem('progressISAmerica_10') >= 0) {
        localStorage.setItem('progressISAmerica_10', JSON.stringify(0));
    }

    questionLoad.questionBlockSimple(
        '',
        'Откуда в племени шайенов появились кукуруза и пеммикан?',
        'колдунья',
        'поля',
        'ведуны'
    );

    questionLoad.answerBlock(answerWrightNum,
        'Ведуны были очень голодны, поэтому они ответили: – В нашем племени нечего есть. Помоги нам!<br />Тогда старуха дала каждому по миске с едой; одну миску она наполнила кукурузой, а другую – пеммиканом.<br />Ведуны возвратились к своему племени и отдали еду людям. Каждый наелся досыта – все племя, до самого малого ребенка. Но сколько бы ни ели из мисок, они так и оставались полными',
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
                localSaveAmerica(10, 1);

                const answerNextClick = document.getElementById('answerNextClick');
                answerNextClick.addEventListener('click', () => {
                    let tl = gsap.timeline({
                        onComplete: () => {
                            containerQuestBottom.removeChild(containerQuestBottomTextDiv);
                            containerQuestBottom.removeChild(containerQuestBottomButtons);
                            questionCat_4_11();
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
                localSaveAmerica(10, 0);

                const answerNextClick = document.getElementById('answerNextClick');
                answerNextClick.addEventListener('click', () => {
                    let tl = gsap.timeline({
                        onComplete: () => {
                            containerQuestBottom.removeChild(containerQuestBottomTextDiv);
                            containerQuestBottom.removeChild(containerQuestBottomButtons);
                            questionCat_4_11();
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

function questionCat_4_11() {
    let answerWrightNum = 2;

    if (localStorage.getItem('progressISAmerica_11') === null ||
        localStorage.getItem('progressISAmerica_11') >= 0) {
        localStorage.setItem('progressISAmerica_11', JSON.stringify(0));
    }

    questionLoad.questionBlockSimple(
        'Ахайюта и Пожиратель Туч',
        '— Видишь эти перья? Воткни в волосы красное перо, и оно будет направлять тебя в пути. Чудесная сила синего пера позволит тебе понимать речь зверей. Желтое перо поможет тебе в один миг стать крошечным — меньше самого маленького зверька.<br />>Перо какого цвета помогло юноше Ахайюта одолеть Пожирателя туч?',
        'Желтое',
        'Красное',
        'Черное'
    );

    questionLoad.answerBlock(answerWrightNum,
        '<span style="font-size: 0.9rem">—Я слышу, как бьется сердце Пожирателя Туч,— прошептал Ахайюта, втыкая в волосы четвертое, черное перо.— Сейчас я разделаюсь с ним! Он почувствовал, как исполинская сила наполняет все его тело. Приложив самую длинную, самую прямую стрелу, Ахайюта натянул лук до предела. Он прицелился прямо в то место над головой, откуда доносилось биение сердца Пожирателя Туч. Едва он спустил тетиву, раздался громкий крик, и все кругом затряслось. Крот и Ахайюта оказались засыпанными землей и глыбами скал.<br />Когда Ахайюта пришел в себя, земля все еще тряслась. Повсюду лежал в развалинах огромный дом Пожирателя Туч, а тело чудовища распростерлось, словно гора</span>',
        'Ахайюта и Пожиратель Туч');

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
                localSaveAmerica(11, 1);

                const answerNextClick = document.getElementById('answerNextClick');
                answerNextClick.addEventListener('click', () => {
                    let tl = gsap.timeline({
                        onComplete: () => {
                            containerQuestBottom.removeChild(containerQuestBottomTextDiv);
                            containerQuestBottom.removeChild(containerQuestBottomButtons);
                            questionCat_4_12();
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
                localSaveAmerica(11, 0);

                const answerNextClick = document.getElementById('answerNextClick');
                answerNextClick.addEventListener('click', () => {
                    let tl = gsap.timeline({
                        onComplete: () => {
                            containerQuestBottom.removeChild(containerQuestBottomTextDiv);
                            containerQuestBottom.removeChild(containerQuestBottomButtons);
                            questionCat_4_12();
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

function questionCat_4_12() {
    let answerWrightNum = 1;

    if (localStorage.getItem('progressISAmerica_12') === null ||
        localStorage.getItem('progressISAmerica_12') >= 0) {
        localStorage.setItem('progressISAmerica_12', JSON.stringify(0));
    }

    questionLoad.questionBlockSimple(
        'Рваная щека',
        'Что просило Солнце сделать Рваную Щеку по возвращению к своей невесте?',
        'разделять кров с бедняками',
        'построить дом для врачевания',
        'изготовить целебное снадобье'
    );

    questionLoad.answerBlock(answerWrightNum,
        '—Когда у женщины заболеет муж, она должна построить Дом для врачевания и посвятить его мне. Тогда я помогу исцелить ее мужа. А построить его нужно так. Выкопать яму, возвести над ней стены и крышу из ста деревянных жердей — крыша должна быть выпуклая, как небесный купол. Одну ее половину следует покрасить в красный, солнечный цвет, а другую в черный, цвет ночи',
        'Рваная щека');

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
                localSaveAmerica(12, 1);

                const answerNextClick = document.getElementById('answerNextClick');
                answerNextClick.addEventListener('click', () => {
                    let tl = gsap.timeline({
                        onComplete: () => {
                            containerQuestBottom.removeChild(containerQuestBottomTextDiv);
                            containerQuestBottom.removeChild(containerQuestBottomButtons);
                            questionCat_4_13();
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
                localSaveAmerica(12, 0);

                const answerNextClick = document.getElementById('answerNextClick');
                answerNextClick.addEventListener('click', () => {
                    let tl = gsap.timeline({
                        onComplete: () => {
                            containerQuestBottom.removeChild(containerQuestBottomTextDiv);
                            containerQuestBottom.removeChild(containerQuestBottomButtons);
                            questionCat_4_13();
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

function questionCat_4_13() {
    let answerWrightNum = 2;

    if (localStorage.getItem('progressISAmerica_13') === null ||
        localStorage.getItem('progressISAmerica_13') >= 0) {
        localStorage.setItem('progressISAmerica_13', JSON.stringify(0));
    }

    questionLoad.questionBlockSimple(
        '',
        'Какое животное по мнению Солнца людям следует почитать более всего?',
        'медведя',
        'слона',
        'бизона'
    );

    questionLoad.answerBlock(answerWrightNum,
        '<span style="font-size: 1rem;">Я — владыка и повелитель всего мира. Все на свете принадлежит мне. Я сотворил землю, и реки, и горы, и леса, и прерии. Я сотворил людей и зверей. Я бессмертен. Правда, зимою я делаюсь дряхлым и слабым, но каждую весну сила и молодость возвращаются ко мне. А знаешь, кто из животных мудрее всех? Ворон! Он везде находит себе пищу и никогда не остается голодным. А какое животное людям следует почитать больше всех? Бизона! Он мой любимец и сотворен для людей, чтобы давать им кров и пищу. А какие из растений священны? Те, что дают съедобные ягоды. Теперь идем со мной, я покажу тебе мир!</span>',
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
                localSaveAmerica(13, 1);

                const answerNextClick = document.getElementById('answerNextClick');
                answerNextClick.addEventListener('click', () => {
                    let tl = gsap.timeline({
                        onComplete: () => {
                            containerQuestBottom.removeChild(containerQuestBottomTextDiv);
                            containerQuestBottom.removeChild(containerQuestBottomButtons);
                            questionCat_4_14();
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
                localSaveAmerica(13, 0);

                const answerNextClick = document.getElementById('answerNextClick');
                answerNextClick.addEventListener('click', () => {
                    let tl = gsap.timeline({
                        onComplete: () => {
                            containerQuestBottom.removeChild(containerQuestBottomTextDiv);
                            containerQuestBottom.removeChild(containerQuestBottomButtons);
                            questionCat_4_14();
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

function questionCat_4_14() {
    let answerWrightNum = 1;

    if (localStorage.getItem('progressISAmerica_14') === null ||
        localStorage.getItem('progressISAmerica_14') >= 0) {
        localStorage.setItem('progressISAmerica_14', JSON.stringify(0));
    }

    questionLoad.questionBlockSimple(
        'Помощь змеиного царя',
        '«Через три дня возвращайся домой, к отцу. Спросит он тебя о том, где был. А ты знай тверди…»',
        '«Что видел, того уж нет»',
        '«Я знаю, что я знаю»',
        '«Ничего не знаю, ничего не вижу, ничего не слышу, ничего никому не скажу»'
    );

    questionLoad.answerBlock(answerWrightNum,
        'Через три дня возвращайся домой, к отцу, Спросит он тебя о том, где был. А ты знай тверди: “Я знаю, что я знаю”. Ни за что не рассказывай ему о том, что видел',
        'Помощь змеиного царя');

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
                localSaveAmerica(14, 1);

                const answerNextClick = document.getElementById('answerNextClick');
                answerNextClick.addEventListener('click', () => {
                    let tl = gsap.timeline({
                        onComplete: () => {
                            containerQuestBottom.removeChild(containerQuestBottomTextDiv);
                            containerQuestBottom.removeChild(containerQuestBottomButtons);
                            questionCat_4_15();
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
                localSaveAmerica(14, 0);

                const answerNextClick = document.getElementById('answerNextClick');
                answerNextClick.addEventListener('click', () => {
                    let tl = gsap.timeline({
                        onComplete: () => {
                            containerQuestBottom.removeChild(containerQuestBottomTextDiv);
                            containerQuestBottom.removeChild(containerQuestBottomButtons);
                            questionCat_4_15();
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

function questionCat_4_15() {
    let answerWrightNum = 1;

    if (localStorage.getItem('progressISAmerica_15') === null ||
        localStorage.getItem('progressISAmerica_15') >= 0) {
        localStorage.setItem('progressISAmerica_15', JSON.stringify(0));
    }

    questionLoad.questionBlockSimple(
        '',
        'Чему должен поклониться три раза сын, когда потребуется помощь?',
        'лесу',
        'солнцу',
        'океану'
    );

    questionLoad.answerBlock(answerWrightNum,
        'А если понадобится помощь, повернись на восточную сторону и трижды поклонись восходящему солнцу — я тотчас явлюсь с подмогой',
        '');

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
                localSaveAmerica(15, 1);

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
                localSaveAmerica(15, 0);

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