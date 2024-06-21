import { gsap } from "gsap";
import { Question } from "./Question.js";
import { ArrowsAll } from "./ArrowsAll.js";
import { Settings } from "./Settings.js";

class QuestCat_1 {

    constructor() {
        this.initQuestLayout();
        // this.localSaveSecretHit();
        // this.questNextNum = questNextNum;
    }

    localSaveSecretHit(questLocalNum, questLocalValue) {
        localStorage.setItem(`progressSecretHit_${questLocalNum}`, JSON.stringify(questLocalValue));
        let progressSecretHitAll = JSON.parse(localStorage.getItem('progressSecretHitAll'));
        let progressSecretHitQuestLocalNum = JSON.parse(localStorage.getItem(`progressSecretHit_${questLocalNum}`));
        let progressSecretHitAllSum = progressSecretHitAll + progressSecretHitQuestLocalNum;
        localStorage.setItem('progressSecretHitAll', JSON.stringify(progressSecretHitAllSum));
    }

    initQuestLayout() {
        this.questionLoad = new Question();
        this.arrowBackLoad = new ArrowsAll();
        this.settingsLoad = new Settings();
        this.questTimePaused = 600;
        this.wrapperBottom = document.querySelector('.wrapper__bottom');
    }

    questionCat_1_1() {
        const questNum = 1;
        const answerWrightNum = 1;

        if (localStorage.getItem(`progressSecretHit_${questNum}`) === null ||
            localStorage.getItem(`progressSecretHit_${questNum}`) >= 0) {
            localStorage.setItem(`progressSecretHit_${questNum}`, JSON.stringify(0));
        }

        this.questionLoad.questionBlock (
            '',
            'Марина Ивановна родилась в 1892 году 9 октября. Православные в этот день отмечают в этот день праздник:',
            'Иоанн Богослов',
            'Николай Угодник Зимний',
            'Сергий Радонежский'
        );

        this.questionLoad.answerBlock(answerWrightNum, '', '');

        let answerVar_1 = document.getElementById('answerVar_1'),
            answerVar_2 = document.getElementById('answerVar_2'),
            answerVar_3 = document.getElementById('answerVar_3'),
            answerVarArray = [answerVar_1, answerVar_2, answerVar_3],
            container = document.querySelector('.container'),
            containerQuestBottom = document.querySelector('.container__category'),
            containerQuestBottomTextDiv = document.querySelector('.container-quest__bottom_text'),
            containerQuestBottomButtons = document.querySelector('.container-quest__bottom_buttons'),
            buttonBack = document.getElementById('arrowBack'),
            buttonSetting = document.getElementById('settingsClick'),
            answerNextClick = document.getElementById('answerNextClick')
        ;

        for (let i = 0; i < answerVarArray.length; i++) {
            answerVarArray[i].addEventListener('click', () => {
                if (answerVarArray[i] === answerVarArray[answerWrightNum]) {
                    this.localSaveSecretHit(questNum, 1);

                    answerNextClick.addEventListener('click', () => {
                        let tl = gsap.timeline({
                            onComplete: () => {
                                containerQuestBottom.removeChild(containerQuestBottomTextDiv);
                                containerQuestBottom.removeChild(containerQuestBottomButtons);
                                container.removeChild(containerQuestBottom);
                                this.wrapperBottom.removeChild(buttonBack);
                                this.questionCat_1_2();
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
                    this.localSaveSecretHit(questNum, 0);

                    answerNextClick.addEventListener('click', () => {
                        let tl = gsap.timeline({
                            onComplete: () => {
                                containerQuestBottom.removeChild(containerQuestBottomTextDiv);
                                containerQuestBottom.removeChild(containerQuestBottomButtons);
                                container.removeChild(containerQuestBottom);
                                this.wrapperBottom.removeChild(buttonBack);
                                this.questionCat_1_2();
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

    questionCat_1_2() {
        const questNum = 2;
        const answerWrightNum = 0;

        if (localStorage.getItem(`progressSecretHit_${questNum}`) === null ||
            localStorage.getItem(`progressSecretHit_${questNum}`) >= 0) {
            localStorage.setItem(`progressSecretHit_${questNum}`, JSON.stringify(0));
        }

        this.questionLoad.questionBlock(
            '',
            'Отец Марины Цветаевой Иван Владимирович Цветаев ...',
            'профессор',
            'писатель',
            'доктор'
        );

        this.questionLoad.answerBlock(answerWrightNum, '', '');

        let answerVar_1 = document.getElementById('answerVar_1'),
            answerVar_2 = document.getElementById('answerVar_2'),
            answerVar_3 = document.getElementById('answerVar_3'),
            answerVarArray = [answerVar_1, answerVar_2, answerVar_3],
            container = document.querySelector('.container'),
            containerQuestBottom = document.querySelector('.container__category'),
            containerQuestBottomTextDiv = document.querySelector('.container-quest__bottom_text'),
            containerQuestBottomButtons = document.querySelector('.container-quest__bottom_buttons'),
            buttonBack = document.getElementById('arrowBack'),
            buttonSetting = document.getElementById('settingsClick'),
            answerNextClick = document.getElementById('answerNextClick')
        ;

        for (let i = 0; i < answerVarArray.length; i++) {
            answerVarArray[i].addEventListener('click', () => {
                if (answerVarArray[i] === answerVarArray[answerWrightNum]) {
                    this.localSaveSecretHit(questNum, 1);

                    answerNextClick.addEventListener('click', () => {
                        let tl = gsap.timeline({
                            onComplete: () => {
                                containerQuestBottom.removeChild(containerQuestBottomTextDiv);
                                containerQuestBottom.removeChild(containerQuestBottomButtons);
                                container.removeChild(containerQuestBottom);
                                this.wrapperBottom.removeChild(buttonBack);
                                this.questionCat_1_3();
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
                    this.localSaveSecretHit(questNum, 0);

                    answerNextClick.addEventListener('click', () => {
                        let tl = gsap.timeline({
                            onComplete: () => {
                                containerQuestBottom.removeChild(containerQuestBottomTextDiv);
                                containerQuestBottom.removeChild(containerQuestBottomButtons);
                                container.removeChild(containerQuestBottom);
                                this.wrapperBottom.removeChild(buttonBack);
                                this.questionCat_1_3();
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

    questionCat_1_3() {
        const questNum = 3;
        const answerWrightNum = 0;

        if (localStorage.getItem(`progressSecretHit_${questNum}`) === null ||
            localStorage.getItem(`progressSecretHit_${questNum}`) >= 0) {
            localStorage.setItem(`progressSecretHit_${questNum}`, JSON.stringify(0));
        }

        this.questionLoad.questionBlock(
            '',
            'Мать Марины Цветаевой – Мария Александровна Мейн ...',
            'пианистка',
            'поэт',
            'учитель'
        );

        this.questionLoad.answerBlock(answerWrightNum, '', '');

        let answerVar_1 = document.getElementById('answerVar_1'),
            answerVar_2 = document.getElementById('answerVar_2'),
            answerVar_3 = document.getElementById('answerVar_3'),
            answerVarArray = [answerVar_1, answerVar_2, answerVar_3],
            container = document.querySelector('.container'),
            containerQuestBottom = document.querySelector('.container__category'),
            containerQuestBottomTextDiv = document.querySelector('.container-quest__bottom_text'),
            containerQuestBottomButtons = document.querySelector('.container-quest__bottom_buttons'),
            buttonBack = document.getElementById('arrowBack'),
            buttonSetting = document.getElementById('settingsClick'),
            answerNextClick = document.getElementById('answerNextClick')
        ;

        for (let i = 0; i < answerVarArray.length; i++) {
            answerVarArray[i].addEventListener('click', () => {
                if (answerVarArray[i] === answerVarArray[answerWrightNum]) {
                    this.localSaveSecretHit(questNum, 1);

                    answerNextClick.addEventListener('click', () => {
                        let tl = gsap.timeline({
                            onComplete: () => {
                                containerQuestBottom.removeChild(containerQuestBottomTextDiv);
                                containerQuestBottom.removeChild(containerQuestBottomButtons);
                                container.removeChild(containerQuestBottom);
                                this.wrapperBottom.removeChild(buttonBack);
                                this.questionCat_1_4();
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
                    this.localSaveSecretHit(questNum, 0);

                    answerNextClick.addEventListener('click', () => {
                        let tl = gsap.timeline({
                            onComplete: () => {
                                containerQuestBottom.removeChild(containerQuestBottomTextDiv);
                                containerQuestBottom.removeChild(containerQuestBottomButtons);
                                container.removeChild(containerQuestBottom);
                                this.wrapperBottom.removeChild(buttonBack);
                                this.questionCat_1_4();
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

    questionCat_1_4() {
        const questNum = 4;
        const answerWrightNum = 0;

        if (localStorage.getItem(`progressSecretHit_${questNum}`) === null ||
            localStorage.getItem(`progressSecretHit_${questNum}`) >= 0) {
            localStorage.setItem(`progressSecretHit_${questNum}`, JSON.stringify(0));
        }

        this.questionLoad.questionBlock(
            '',
            'Марина Цветаева родилась в семье, - писала её дочь Ариадна – являющую собой некий союз ...',
            'одиночеств',
            'творцов',
            'просветителей'
        );

        this.questionLoad.answerBlock(answerWrightNum, '', '');

        let answerVar_1 = document.getElementById('answerVar_1'),
            answerVar_2 = document.getElementById('answerVar_2'),
            answerVar_3 = document.getElementById('answerVar_3'),
            answerVarArray = [answerVar_1, answerVar_2, answerVar_3],
            container = document.querySelector('.container'),
            containerQuestBottom = document.querySelector('.container__category'),
            containerQuestBottomTextDiv = document.querySelector('.container-quest__bottom_text'),
            containerQuestBottomButtons = document.querySelector('.container-quest__bottom_buttons'),
            buttonBack = document.getElementById('arrowBack'),
            buttonSetting = document.getElementById('settingsClick'),
            answerNextClick = document.getElementById('answerNextClick')
        ;

        for (let i = 0; i < answerVarArray.length; i++) {
            answerVarArray[i].addEventListener('click', () => {
                if (answerVarArray[i] === answerVarArray[answerWrightNum]) {
                    this.localSaveSecretHit(questNum, 1);

                    answerNextClick.addEventListener('click', () => {
                        let tl = gsap.timeline({
                            onComplete: () => {
                                containerQuestBottom.removeChild(containerQuestBottomTextDiv);
                                containerQuestBottom.removeChild(containerQuestBottomButtons);
                                container.removeChild(containerQuestBottom);
                                this.wrapperBottom.removeChild(buttonBack);
                                this.questionCat_1_5();
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
                    this.localSaveSecretHit(questNum, 0);

                    answerNextClick.addEventListener('click', () => {
                        let tl = gsap.timeline({
                            onComplete: () => {
                                containerQuestBottom.removeChild(containerQuestBottomTextDiv);
                                containerQuestBottom.removeChild(containerQuestBottomButtons);
                                container.removeChild(containerQuestBottom);
                                this.wrapperBottom.removeChild(buttonBack);
                                this.questionCat_1_5();
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

    questionCat_1_5() {
        const questNum = 5;
        const answerWrightNum = 1;

        if (localStorage.getItem(`progressSecretHit_${questNum}`) === null ||
            localStorage.getItem(`progressSecretHit_${questNum}`) >= 0) {
            localStorage.setItem(`progressSecretHit_${questNum}`, JSON.stringify(0));
        }

        this.questionLoad.questionBlock(
            '',
            'Страсть к стихам у Марины Цветаевой от ...',
            'от обоих родителей',
            'от матери',
            'из книг'
        );

        this.questionLoad.answerBlock(answerWrightNum, '', '');

        let answerVar_1 = document.getElementById('answerVar_1'),
            answerVar_2 = document.getElementById('answerVar_2'),
            answerVar_3 = document.getElementById('answerVar_3'),
            answerVarArray = [answerVar_1, answerVar_2, answerVar_3],
            container = document.querySelector('.container'),
            containerQuestBottom = document.querySelector('.container__category'),
            containerQuestBottomTextDiv = document.querySelector('.container-quest__bottom_text'),
            containerQuestBottomButtons = document.querySelector('.container-quest__bottom_buttons'),
            buttonBack = document.getElementById('arrowBack'),
            buttonSetting = document.getElementById('settingsClick'),
            answerNextClick = document.getElementById('answerNextClick')
        ;

        for (let i = 0; i < answerVarArray.length; i++) {
            answerVarArray[i].addEventListener('click', () => {
                if (answerVarArray[i] === answerVarArray[answerWrightNum]) {
                    this.localSaveSecretHit(questNum, 1);

                    answerNextClick.addEventListener('click', () => {
                        let tl = gsap.timeline({
                            onComplete: () => {
                                containerQuestBottom.removeChild(containerQuestBottomTextDiv);
                                containerQuestBottom.removeChild(containerQuestBottomButtons);
                                container.removeChild(containerQuestBottom);
                                this.wrapperBottom.removeChild(buttonBack);
                                this.questionCat_1_6();
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
                    this.localSaveSecretHit(questNum, 0);

                    answerNextClick.addEventListener('click', () => {
                        let tl = gsap.timeline({
                            onComplete: () => {
                                containerQuestBottom.removeChild(containerQuestBottomTextDiv);
                                containerQuestBottom.removeChild(containerQuestBottomButtons);
                                container.removeChild(containerQuestBottom);
                                this.wrapperBottom.removeChild(buttonBack);
                                this.questionCat_1_6();
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

    questionCat_1_6() {
        const questNum = 6;
        const answerWrightNum = 0;

        if (localStorage.getItem(`progressSecretHit_${questNum}`) === null ||
            localStorage.getItem(`progressSecretHit_${questNum}`) >= 0) {
            localStorage.setItem(`progressSecretHit_${questNum}`, JSON.stringify(0));
        }

        this.questionLoad.questionBlock(
            '',
            '«Всё что мне суждено было узнать, узнала ... лет, а все последующие сорок осознавала.',
            'до семи лет',
            'до двадцати лет',
            'до десяти лет'
        );

        this.questionLoad.answerBlock(answerWrightNum, '', '');

        let answerVar_1 = document.getElementById('answerVar_1'),
            answerVar_2 = document.getElementById('answerVar_2'),
            answerVar_3 = document.getElementById('answerVar_3'),
            answerVarArray = [answerVar_1, answerVar_2, answerVar_3],
            container = document.querySelector('.container'),
            containerQuestBottom = document.querySelector('.container__category'),
            containerQuestBottomTextDiv = document.querySelector('.container-quest__bottom_text'),
            containerQuestBottomButtons = document.querySelector('.container-quest__bottom_buttons'),
            buttonBack = document.getElementById('arrowBack'),
            buttonSetting = document.getElementById('settingsClick'),
            answerNextClick = document.getElementById('answerNextClick')
        ;

        for (let i = 0; i < answerVarArray.length; i++) {
            answerVarArray[i].addEventListener('click', () => {
                if (answerVarArray[i] === answerVarArray[answerWrightNum]) {
                    this.localSaveSecretHit(questNum, 1);

                    answerNextClick.addEventListener('click', () => {
                        let tl = gsap.timeline({
                            onComplete: () => {
                                containerQuestBottom.removeChild(containerQuestBottomTextDiv);
                                containerQuestBottom.removeChild(containerQuestBottomButtons);
                                container.removeChild(containerQuestBottom);
                                this.wrapperBottom.removeChild(buttonBack);
                                this.questionCat_1_7();
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
                    this.localSaveSecretHit(questNum, 0);

                    answerNextClick.addEventListener('click', () => {
                        let tl = gsap.timeline({
                            onComplete: () => {
                                containerQuestBottom.removeChild(containerQuestBottomTextDiv);
                                containerQuestBottom.removeChild(containerQuestBottomButtons);
                                container.removeChild(containerQuestBottom);
                                this.wrapperBottom.removeChild(buttonBack);
                                this.questionCat_1_7();
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

    questionCat_1_7() {
        const questNum = 7;
        const answerWrightNum = 2;

        if (localStorage.getItem(`progressSecretHit_${questNum}`) === null ||
            localStorage.getItem(`progressSecretHit_${questNum}`) >= 0) {
            localStorage.setItem(`progressSecretHit_${questNum}`, JSON.stringify(0));
        }

        this.questionLoad.questionBlock(
            '',
            'Первые стихи были написаны...',
            'в семь лет',
            'в десять лет',
            'в шесть лет'
        );

        this.questionLoad.answerBlock(answerWrightNum, '', '');

        let answerVar_1 = document.getElementById('answerVar_1'),
            answerVar_2 = document.getElementById('answerVar_2'),
            answerVar_3 = document.getElementById('answerVar_3'),
            answerVarArray = [answerVar_1, answerVar_2, answerVar_3],
            container = document.querySelector('.container'),
            containerQuestBottom = document.querySelector('.container__category'),
            containerQuestBottomTextDiv = document.querySelector('.container-quest__bottom_text'),
            containerQuestBottomButtons = document.querySelector('.container-quest__bottom_buttons'),
            buttonBack = document.getElementById('arrowBack'),
            buttonSetting = document.getElementById('settingsClick'),
            answerNextClick = document.getElementById('answerNextClick')
        ;

        for (let i = 0; i < answerVarArray.length; i++) {
            answerVarArray[i].addEventListener('click', () => {
                if (answerVarArray[i] === answerVarArray[answerWrightNum]) {
                    this.localSaveSecretHit(questNum, 1);

                    answerNextClick.addEventListener('click', () => {
                        let tl = gsap.timeline({
                            onComplete: () => {
                                containerQuestBottom.removeChild(containerQuestBottomTextDiv);
                                containerQuestBottom.removeChild(containerQuestBottomButtons);
                                container.removeChild(containerQuestBottom);
                                this.wrapperBottom.removeChild(buttonBack);
                                this.questionCat_1_8();
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
                    this.localSaveSecretHit(questNum, 0);

                    answerNextClick.addEventListener('click', () => {
                        let tl = gsap.timeline({
                            onComplete: () => {
                                containerQuestBottom.removeChild(containerQuestBottomTextDiv);
                                containerQuestBottom.removeChild(containerQuestBottomButtons);
                                container.removeChild(containerQuestBottom);
                                this.wrapperBottom.removeChild(buttonBack);
                                this.questionCat_1_8();
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

    questionCat_1_8() {
        const questNum = 8;
        const answerWrightNum = 1;

        if (localStorage.getItem(`progressSecretHit_${questNum}`) === null ||
            localStorage.getItem(`progressSecretHit_${questNum}`) >= 0) {
            localStorage.setItem(`progressSecretHit_${questNum}`, JSON.stringify(0));
        }

        this.questionLoad.questionBlock(
            '',
            'Формулу – наперёд – своей писательской судьбы, она дала, когда ей было 20 лет, и не ошиблась:<br>Разбросанным в пыли по магазинам<br>(Где их никто не брал и не берёт!),<br> ..., как драгоценным камням<br>Настанет свой черёд',
            'моим словам',
            'моим стихам',
            'моим воспоминаниям'
        );

        this.questionLoad.answerBlock(answerWrightNum, '', '');

        let answerVar_1 = document.getElementById('answerVar_1'),
            answerVar_2 = document.getElementById('answerVar_2'),
            answerVar_3 = document.getElementById('answerVar_3'),
            answerVarArray = [answerVar_1, answerVar_2, answerVar_3],
            container = document.querySelector('.container'),
            containerQuestBottom = document.querySelector('.container__category'),
            containerQuestBottomTextDiv = document.querySelector('.container-quest__bottom_text'),
            containerQuestBottomButtons = document.querySelector('.container-quest__bottom_buttons'),
            buttonBack = document.getElementById('arrowBack'),
            buttonSetting = document.getElementById('settingsClick'),
            answerNextClick = document.getElementById('answerNextClick')
        ;

        for (let i = 0; i < answerVarArray.length; i++) {
            answerVarArray[i].addEventListener('click', () => {
                if (answerVarArray[i] === answerVarArray[answerWrightNum]) {
                    this.localSaveSecretHit(questNum, 1);

                    answerNextClick.addEventListener('click', () => {
                        let tl = gsap.timeline({
                            onComplete: () => {
                                containerQuestBottom.removeChild(containerQuestBottomTextDiv);
                                containerQuestBottom.removeChild(containerQuestBottomButtons);
                                container.removeChild(containerQuestBottom);
                                this.wrapperBottom.removeChild(buttonBack);
                                this.questionCat_1_9();
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
                    this.localSaveSecretHit(questNum, 0);

                    answerNextClick.addEventListener('click', () => {
                        let tl = gsap.timeline({
                            onComplete: () => {
                                containerQuestBottom.removeChild(containerQuestBottomTextDiv);
                                containerQuestBottom.removeChild(containerQuestBottomButtons);
                                container.removeChild(containerQuestBottom);
                                this.wrapperBottom.removeChild(buttonBack);
                                this.questionCat_1_9();
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

    questionCat_1_9() {
        const questNum = 9;
        const answerWrightNum = 0;

        if (localStorage.getItem(`progressSecretHit_${questNum}`) === null ||
            localStorage.getItem(`progressSecretHit_${questNum}`) >= 0) {
            localStorage.setItem(`progressSecretHit_${questNum}`, JSON.stringify(0));
        }

        this.questionLoad.questionBlock(
            '',
            'Макс (Волошин), я выйду замуж за того кто угадает, какой мой любимый камень. Именно этот камень преподнёс Сергей Эфрон во время их первой встречи',
            'сердолик',
            'лазурит',
            'агат'
        );

        this.questionLoad.answerBlock(answerWrightNum, '', '');

        let answerVar_1 = document.getElementById('answerVar_1'),
            answerVar_2 = document.getElementById('answerVar_2'),
            answerVar_3 = document.getElementById('answerVar_3'),
            answerVarArray = [answerVar_1, answerVar_2, answerVar_3],
            container = document.querySelector('.container'),
            containerQuestBottom = document.querySelector('.container__category'),
            containerQuestBottomTextDiv = document.querySelector('.container-quest__bottom_text'),
            containerQuestBottomButtons = document.querySelector('.container-quest__bottom_buttons'),
            buttonBack = document.getElementById('arrowBack'),
            buttonSetting = document.getElementById('settingsClick'),
            answerNextClick = document.getElementById('answerNextClick')
        ;

        for (let i = 0; i < answerVarArray.length; i++) {
            answerVarArray[i].addEventListener('click', () => {
                if (answerVarArray[i] === answerVarArray[answerWrightNum]) {
                    this.localSaveSecretHit(questNum, 1);

                    answerNextClick.addEventListener('click', () => {
                        let tl = gsap.timeline({
                            onComplete: () => {
                                containerQuestBottom.removeChild(containerQuestBottomTextDiv);
                                containerQuestBottom.removeChild(containerQuestBottomButtons);
                                container.removeChild(containerQuestBottom);
                                this.wrapperBottom.removeChild(buttonBack);
                                this.questionCat_1_10();
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
                    this.localSaveSecretHit(questNum, 0);

                    answerNextClick.addEventListener('click', () => {
                        let tl = gsap.timeline({
                            onComplete: () => {
                                containerQuestBottom.removeChild(containerQuestBottomTextDiv);
                                containerQuestBottom.removeChild(containerQuestBottomButtons);
                                container.removeChild(containerQuestBottom);
                                this.wrapperBottom.removeChild(buttonBack);
                                this.questionCat_1_10();
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

    questionCat_1_10() {
        const questNum = 10;
        const answerWrightNum = 0;

        if (localStorage.getItem(`progressSecretHit_${questNum}`) === null ||
            localStorage.getItem(`progressSecretHit_${questNum}`) >= 0) {
            localStorage.setItem(`progressSecretHit_${questNum}`, JSON.stringify(0));
        }

        this.questionLoad.questionBlock(
            '',
            'В 1912 году родилась первая дочь Цветаевой. Марина Ивановна нарекла её:',
            'Ариадна',
            'Ирина',
            'Анастасия'
        );

        this.questionLoad.answerBlock(answerWrightNum, '', '');

        let answerVar_1 = document.getElementById('answerVar_1'),
            answerVar_2 = document.getElementById('answerVar_2'),
            answerVar_3 = document.getElementById('answerVar_3'),
            answerVarArray = [answerVar_1, answerVar_2, answerVar_3],
            container = document.querySelector('.container'),
            containerQuestBottom = document.querySelector('.container__category'),
            containerQuestBottomTextDiv = document.querySelector('.container-quest__bottom_text'),
            containerQuestBottomButtons = document.querySelector('.container-quest__bottom_buttons'),
            buttonBack = document.getElementById('arrowBack'),
            buttonSetting = document.getElementById('settingsClick'),
            answerNextClick = document.getElementById('answerNextClick')
        ;

        for (let i = 0; i < answerVarArray.length; i++) {
            answerVarArray[i].addEventListener('click', () => {
                if (answerVarArray[i] === answerVarArray[answerWrightNum]) {
                    this.localSaveSecretHit(questNum, 1);

                    answerNextClick.addEventListener('click', () => {
                        let tl = gsap.timeline({
                            onComplete: () => {
                                containerQuestBottom.removeChild(containerQuestBottomTextDiv);
                                containerQuestBottom.removeChild(containerQuestBottomButtons);
                                container.removeChild(containerQuestBottom);
                                this.wrapperBottom.removeChild(buttonBack);
                                this.questionCat_1_11();
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
                    this.localSaveSecretHit(questNum, 0);

                    answerNextClick.addEventListener('click', () => {
                        let tl = gsap.timeline({
                            onComplete: () => {
                                containerQuestBottom.removeChild(containerQuestBottomTextDiv);
                                containerQuestBottom.removeChild(containerQuestBottomButtons);
                                container.removeChild(containerQuestBottom);
                                this.wrapperBottom.removeChild(buttonBack);
                                this.questionCat_1_11();
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

    questionCat_1_11() {
        const questNum = 11;
        const answerWrightNum = 0;

        if (localStorage.getItem(`progressSecretHit_${questNum}`) === null ||
            localStorage.getItem(`progressSecretHit_${questNum}`) >= 0) {
            localStorage.setItem(`progressSecretHit_${questNum}`, JSON.stringify(0));
        }

        this.questionLoad.questionBlock(
            '',
            'В 1922 году Марина Цветаева уезжает за границу, где три с половиной года живёт в Чехии, и четырнадцать лет во Франции. Уезжает за ...',
            'за мужем Сергеем Эфроном',
            'за свободой',
            'за признанием'
        );

        this.questionLoad.answerBlock(answerWrightNum, '', '');

        let answerVar_1 = document.getElementById('answerVar_1'),
            answerVar_2 = document.getElementById('answerVar_2'),
            answerVar_3 = document.getElementById('answerVar_3'),
            answerVarArray = [answerVar_1, answerVar_2, answerVar_3],
            container = document.querySelector('.container'),
            containerQuestBottom = document.querySelector('.container__category'),
            containerQuestBottomTextDiv = document.querySelector('.container-quest__bottom_text'),
            containerQuestBottomButtons = document.querySelector('.container-quest__bottom_buttons'),
            buttonBack = document.getElementById('arrowBack'),
            buttonSetting = document.getElementById('settingsClick'),
            answerNextClick = document.getElementById('answerNextClick')
        ;

        for (let i = 0; i < answerVarArray.length; i++) {
            answerVarArray[i].addEventListener('click', () => {
                if (answerVarArray[i] === answerVarArray[answerWrightNum]) {
                    this.localSaveSecretHit(questNum, 1);

                    answerNextClick.addEventListener('click', () => {
                        let tl = gsap.timeline({
                            onComplete: () => {
                                containerQuestBottom.removeChild(containerQuestBottomTextDiv);
                                containerQuestBottom.removeChild(containerQuestBottomButtons);
                                container.removeChild(containerQuestBottom);
                                this.wrapperBottom.removeChild(buttonBack);
                                this.questionCat_1_12();
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
                    this.localSaveSecretHit(questNum, 0);

                    answerNextClick.addEventListener('click', () => {
                        let tl = gsap.timeline({
                            onComplete: () => {
                                containerQuestBottom.removeChild(containerQuestBottomTextDiv);
                                containerQuestBottom.removeChild(containerQuestBottomButtons);
                                container.removeChild(containerQuestBottom);
                                this.wrapperBottom.removeChild(buttonBack);
                                this.questionCat_1_12();
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

    questionCat_1_12() {
        const questNum = 12;
        const answerWrightNum = 1;

        if (localStorage.getItem(`progressSecretHit_${questNum}`) === null ||
            localStorage.getItem(`progressSecretHit_${questNum}`) >= 0) {
            localStorage.setItem(`progressSecretHit_${questNum}`, JSON.stringify(0));
        }

        this.questionLoad.questionBlock(
            '',
            'В 1939 году возвращается в Советский союз, чтобы дать своему сыну Георгию ...',
            'образование',
            'родину',
            'жизнь'
        );

        this.questionLoad.answerBlock(answerWrightNum, '', '');

        let answerVar_1 = document.getElementById('answerVar_1'),
            answerVar_2 = document.getElementById('answerVar_2'),
            answerVar_3 = document.getElementById('answerVar_3'),
            answerVarArray = [answerVar_1, answerVar_2, answerVar_3],
            container = document.querySelector('.container'),
            containerQuestBottom = document.querySelector('.container__category'),
            containerQuestBottomTextDiv = document.querySelector('.container-quest__bottom_text'),
            containerQuestBottomButtons = document.querySelector('.container-quest__bottom_buttons'),
            buttonBack = document.getElementById('arrowBack'),
            buttonSetting = document.getElementById('settingsClick'),
            answerNextClick = document.getElementById('answerNextClick')
        ;

        for (let i = 0; i < answerVarArray.length; i++) {
            answerVarArray[i].addEventListener('click', () => {
                if (answerVarArray[i] === answerVarArray[answerWrightNum]) {
                    this.localSaveSecretHit(questNum, 1);

                    answerNextClick.addEventListener('click', () => {
                        let tl = gsap.timeline({
                            onComplete: () => {
                                containerQuestBottom.removeChild(containerQuestBottomTextDiv);
                                containerQuestBottom.removeChild(containerQuestBottomButtons);
                                container.removeChild(containerQuestBottom);
                                this.wrapperBottom.removeChild(buttonBack);
                                this.questionCat_1_13();
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
                    this.localSaveSecretHit(questNum, 0);

                    answerNextClick.addEventListener('click', () => {
                        let tl = gsap.timeline({
                            onComplete: () => {
                                containerQuestBottom.removeChild(containerQuestBottomTextDiv);
                                containerQuestBottom.removeChild(containerQuestBottomButtons);
                                container.removeChild(containerQuestBottom);
                                this.wrapperBottom.removeChild(buttonBack);
                                this.questionCat_1_13();
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

    questionCat_1_13() {
        const questNum = 13;
        const answerWrightNum = 1;

        if (localStorage.getItem(`progressSecretHit_${questNum}`) === null ||
            localStorage.getItem(`progressSecretHit_${questNum}`) >= 0) {
            localStorage.setItem(`progressSecretHit_${questNum}`, JSON.stringify(0));
        }

        this.questionLoad.questionBlock(
            '',
            'Из Анкеты (Служебная). В графе «семейное положение» Марина Ивановна пишет ...',
            'замужем двое детей',
            'замужем, двое детей, муж болен, в отъезде',
            'разведена, двое детей'
        );

        this.questionLoad.answerBlock(answerWrightNum, '', '');

        let answerVar_1 = document.getElementById('answerVar_1'),
            answerVar_2 = document.getElementById('answerVar_2'),
            answerVar_3 = document.getElementById('answerVar_3'),
            answerVarArray = [answerVar_1, answerVar_2, answerVar_3],
            container = document.querySelector('.container'),
            containerQuestBottom = document.querySelector('.container__category'),
            containerQuestBottomTextDiv = document.querySelector('.container-quest__bottom_text'),
            containerQuestBottomButtons = document.querySelector('.container-quest__bottom_buttons'),
            buttonBack = document.getElementById('arrowBack'),
            buttonSetting = document.getElementById('settingsClick'),
            answerNextClick = document.getElementById('answerNextClick')
        ;

        for (let i = 0; i < answerVarArray.length; i++) {
            answerVarArray[i].addEventListener('click', () => {
                if (answerVarArray[i] === answerVarArray[answerWrightNum]) {
                    this.localSaveSecretHit(questNum, 1);

                    answerNextClick.addEventListener('click', () => {
                        let tl = gsap.timeline({
                            onComplete: () => {
                                containerQuestBottom.removeChild(containerQuestBottomTextDiv);
                                containerQuestBottom.removeChild(containerQuestBottomButtons);
                                container.removeChild(containerQuestBottom);
                                this.wrapperBottom.removeChild(buttonBack);
                                this.questionCat_1_14();
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
                    this.localSaveSecretHit(questNum, 0);

                    answerNextClick.addEventListener('click', () => {
                        let tl = gsap.timeline({
                            onComplete: () => {
                                containerQuestBottom.removeChild(containerQuestBottomTextDiv);
                                containerQuestBottom.removeChild(containerQuestBottomButtons);
                                container.removeChild(containerQuestBottom);
                                this.wrapperBottom.removeChild(buttonBack);
                                this.questionCat_1_14();
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

    questionCat_1_14() {
        const questNum = 14;
        const answerWrightNum = 0;

        if (localStorage.getItem(`progressSecretHit_${questNum}`) === null ||
            localStorage.getItem(`progressSecretHit_${questNum}`) >= 0) {
            localStorage.setItem(`progressSecretHit_${questNum}`, JSON.stringify(0));
        }

        this.questionLoad.questionBlock(
            '',
            'Только плохие книги – не для всех. Плохие книги льстят слабостям: века, возраста, пола.',
            'Мифы-Библия-эпос-для всех',
            'Сказки –  для всех',
            'Стихи – для всех'
        );

        this.questionLoad.answerBlock(answerWrightNum, '', '');

        let answerVar_1 = document.getElementById('answerVar_1'),
            answerVar_2 = document.getElementById('answerVar_2'),
            answerVar_3 = document.getElementById('answerVar_3'),
            answerVarArray = [answerVar_1, answerVar_2, answerVar_3],
            container = document.querySelector('.container'),
            containerQuestBottom = document.querySelector('.container__category'),
            containerQuestBottomTextDiv = document.querySelector('.container-quest__bottom_text'),
            containerQuestBottomButtons = document.querySelector('.container-quest__bottom_buttons'),
            buttonBack = document.getElementById('arrowBack'),
            buttonSetting = document.getElementById('settingsClick'),
            answerNextClick = document.getElementById('answerNextClick')
        ;

        for (let i = 0; i < answerVarArray.length; i++) {
            answerVarArray[i].addEventListener('click', () => {
                if (answerVarArray[i] === answerVarArray[answerWrightNum]) {
                    this.localSaveSecretHit(questNum, 1);

                    answerNextClick.addEventListener('click', () => {
                        let tl = gsap.timeline({
                            onComplete: () => {
                                containerQuestBottom.removeChild(containerQuestBottomTextDiv);
                                containerQuestBottom.removeChild(containerQuestBottomButtons);
                                container.removeChild(containerQuestBottom);
                                this.wrapperBottom.removeChild(buttonBack);
                                this.questionCat_1_15();
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
                    this.localSaveSecretHit(questNum, 0);

                    answerNextClick.addEventListener('click', () => {
                        let tl = gsap.timeline({
                            onComplete: () => {
                                containerQuestBottom.removeChild(containerQuestBottomTextDiv);
                                containerQuestBottom.removeChild(containerQuestBottomButtons);
                                container.removeChild(containerQuestBottom);
                                this.wrapperBottom.removeChild(buttonBack);
                                this.questionCat_1_15();
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

    questionCat_1_15() {
        const questNum = 15;
        const answerWrightNum = 0;

        if (localStorage.getItem(`progressSecretHit_${questNum}`) === null ||
            localStorage.getItem(`progressSecretHit_${questNum}`) >= 0) {
            localStorage.setItem(`progressSecretHit_${questNum}`, JSON.stringify(0));
        }

        this.questionLoad.questionBlock(
            '',
            'Ни один человек, даже самый отрешённый, не свободен от ...',
            'радости быть чем-то(всем!) в чьей –нибудь жизни',
            'любви',
            'судьбы'
        );

        this.questionLoad.answerBlock(answerWrightNum, '', '');

        let answerVar_1 = document.getElementById('answerVar_1'),
            answerVar_2 = document.getElementById('answerVar_2'),
            answerVar_3 = document.getElementById('answerVar_3'),
            answerVarArray = [answerVar_1, answerVar_2, answerVar_3],
            container = document.querySelector('.container'),
            containerQuestBottom = document.querySelector('.container__category'),
            containerQuestBottomTextDiv = document.querySelector('.container-quest__bottom_text'),
            containerQuestBottomButtons = document.querySelector('.container-quest__bottom_buttons'),
            buttonBack = document.getElementById('arrowBack'),
            buttonSetting = document.getElementById('settingsClick'),
            answerNextClick = document.getElementById('answerNextClick')
        ;

        for (let i = 0; i < answerVarArray.length; i++) {
            answerVarArray[i].addEventListener('click', () => {
                if (answerVarArray[i] === answerVarArray[answerWrightNum]) {
                    this.localSaveSecretHit(questNum, 1);

                    answerNextClick.addEventListener('click', () => {
                        let tl = gsap.timeline({
                            onComplete: () => {
                                containerQuestBottom.removeChild(containerQuestBottomTextDiv);
                                containerQuestBottom.removeChild(containerQuestBottomButtons);
                                container.removeChild(containerQuestBottom);
                                this.wrapperBottom.removeChild(buttonBack);
                                this.questionCat_1_16();
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
                    this.localSaveSecretHit(questNum, 0);

                    answerNextClick.addEventListener('click', () => {
                        let tl = gsap.timeline({
                            onComplete: () => {
                                containerQuestBottom.removeChild(containerQuestBottomTextDiv);
                                containerQuestBottom.removeChild(containerQuestBottomButtons);
                                container.removeChild(containerQuestBottom);
                                this.wrapperBottom.removeChild(buttonBack);
                                this.questionCat_1_16();
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

    questionCat_1_16() {
        const questNum = 16;
        const answerWrightNum = 1;

        if (localStorage.getItem(`progressSecretHit_${questNum}`) === null ||
            localStorage.getItem(`progressSecretHit_${questNum}`) >= 0) {
            localStorage.setItem(`progressSecretHit_${questNum}`, JSON.stringify(0));
        }

        this.questionLoad.questionBlock(
            '',
            '«…Это колодец не во-вне, а во мне, я в себя, в какую- то себя проваливаюсь – как на Американских горах в свой собственный пищевод». Так Марина Цветаева описала состояние ...',
            'творческого вдохновения',
            'любви',
            'депрессии'
        );

        this.questionLoad.answerBlock(answerWrightNum, '', '');

        let answerVar_1 = document.getElementById('answerVar_1'),
            answerVar_2 = document.getElementById('answerVar_2'),
            answerVar_3 = document.getElementById('answerVar_3'),
            answerVarArray = [answerVar_1, answerVar_2, answerVar_3],
            container = document.querySelector('.container'),
            containerQuestBottom = document.querySelector('.container__category'),
            containerQuestBottomTextDiv = document.querySelector('.container-quest__bottom_text'),
            containerQuestBottomButtons = document.querySelector('.container-quest__bottom_buttons'),
            buttonBack = document.getElementById('arrowBack'),
            buttonSetting = document.getElementById('settingsClick'),
            answerNextClick = document.getElementById('answerNextClick')
        ;

        for (let i = 0; i < answerVarArray.length; i++) {
            answerVarArray[i].addEventListener('click', () => {
                if (answerVarArray[i] === answerVarArray[answerWrightNum]) {
                    this.localSaveSecretHit(questNum, 1);

                    answerNextClick.addEventListener('click', () => {
                        let tl = gsap.timeline({
                            onComplete: () => {
                                containerQuestBottom.removeChild(containerQuestBottomTextDiv);
                                containerQuestBottom.removeChild(containerQuestBottomButtons);
                                container.removeChild(containerQuestBottom);
                                this.wrapperBottom.removeChild(buttonBack);
                                this.questionCat_1_17();
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
                    this.localSaveSecretHit(questNum, 0);

                    answerNextClick.addEventListener('click', () => {
                        let tl = gsap.timeline({
                            onComplete: () => {
                                containerQuestBottom.removeChild(containerQuestBottomTextDiv);
                                containerQuestBottom.removeChild(containerQuestBottomButtons);
                                container.removeChild(containerQuestBottom);
                                this.wrapperBottom.removeChild(buttonBack);
                                this.questionCat_1_17();
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

    questionCat_1_17() {
        const questNum = 17;
        const answerWrightNum = 0;

        if (localStorage.getItem(`progressSecretHit_${questNum}`) === null ||
            localStorage.getItem(`progressSecretHit_${questNum}`) >= 0) {
            localStorage.setItem(`progressSecretHit_${questNum}`, JSON.stringify(0));
        }

        this.questionLoad.questionBlock(
            '',
            'Не торжествуйте победы над врагом. Достаточно сознания. После победы стойте ... или с поднятыми – и протянутой рукой ...',
            'с опущенными глазами',
            'опустившись на колени',
            'слегка склонившись'
        );

        this.questionLoad.answerBlock(answerWrightNum, '', '');

        let answerVar_1 = document.getElementById('answerVar_1'),
            answerVar_2 = document.getElementById('answerVar_2'),
            answerVar_3 = document.getElementById('answerVar_3'),
            answerVarArray = [answerVar_1, answerVar_2, answerVar_3],
            container = document.querySelector('.container'),
            containerQuestBottom = document.querySelector('.container__category'),
            containerQuestBottomTextDiv = document.querySelector('.container-quest__bottom_text'),
            containerQuestBottomButtons = document.querySelector('.container-quest__bottom_buttons'),
            buttonBack = document.getElementById('arrowBack'),
            buttonSetting = document.getElementById('settingsClick'),
            answerNextClick = document.getElementById('answerNextClick')
        ;

        for (let i = 0; i < answerVarArray.length; i++) {
            answerVarArray[i].addEventListener('click', () => {
                if (answerVarArray[i] === answerVarArray[answerWrightNum]) {
                    this.localSaveSecretHit(questNum, 1);

                    answerNextClick.addEventListener('click', () => {
                        let tl = gsap.timeline({
                            onComplete: () => {
                                containerQuestBottom.removeChild(containerQuestBottomTextDiv);
                                containerQuestBottom.removeChild(containerQuestBottomButtons);
                                container.removeChild(containerQuestBottom);
                                this.wrapperBottom.removeChild(buttonBack);
                                this.questionCat_1_18();
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
                    this.localSaveSecretHit(questNum, 0);

                    answerNextClick.addEventListener('click', () => {
                        let tl = gsap.timeline({
                            onComplete: () => {
                                containerQuestBottom.removeChild(containerQuestBottomTextDiv);
                                containerQuestBottom.removeChild(containerQuestBottomButtons);
                                container.removeChild(containerQuestBottom);
                                this.wrapperBottom.removeChild(buttonBack);
                                this.questionCat_1_18();
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

    questionCat_1_18() {
        const questNum = 18;
        const answerWrightNum = 1;

        if (localStorage.getItem(`progressSecretHit_${questNum}`) === null ||
            localStorage.getItem(`progressSecretHit_${questNum}`) >= 0) {
            localStorage.setItem(`progressSecretHit_${questNum}`, JSON.stringify(0));
        }

        this.questionLoad.questionBlock(
            '',
            'Не слишком сердитесь на своих ..., - помните, то и они были вами, и вы будете ими...',
            'стариков',
            'родителей',
            'врагов'
        );

        this.questionLoad.answerBlock(answerWrightNum, '', '');

        let answerVar_1 = document.getElementById('answerVar_1'),
            answerVar_2 = document.getElementById('answerVar_2'),
            answerVar_3 = document.getElementById('answerVar_3'),
            answerVarArray = [answerVar_1, answerVar_2, answerVar_3],
            container = document.querySelector('.container'),
            containerQuestBottom = document.querySelector('.container__category'),
            containerQuestBottomTextDiv = document.querySelector('.container-quest__bottom_text'),
            containerQuestBottomButtons = document.querySelector('.container-quest__bottom_buttons'),
            buttonBack = document.getElementById('arrowBack'),
            buttonSetting = document.getElementById('settingsClick'),
            answerNextClick = document.getElementById('answerNextClick')
        ;

        for (let i = 0; i < answerVarArray.length; i++) {
            answerVarArray[i].addEventListener('click', () => {
                if (answerVarArray[i] === answerVarArray[answerWrightNum]) {
                    this.localSaveSecretHit(questNum, 1);

                    answerNextClick.addEventListener('click', () => {
                        let tl = gsap.timeline({
                            onComplete: () => {
                                containerQuestBottom.removeChild(containerQuestBottomTextDiv);
                                containerQuestBottom.removeChild(containerQuestBottomButtons);
                                container.removeChild(containerQuestBottom);
                                this.wrapperBottom.removeChild(buttonBack);
                                this.questionCat_1_19();
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
                    this.localSaveSecretHit(questNum, 0);

                    answerNextClick.addEventListener('click', () => {
                        let tl = gsap.timeline({
                            onComplete: () => {
                                containerQuestBottom.removeChild(containerQuestBottomTextDiv);
                                containerQuestBottom.removeChild(containerQuestBottomButtons);
                                container.removeChild(containerQuestBottom);
                                this.wrapperBottom.removeChild(buttonBack);
                                this.questionCat_1_19();
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

    questionCat_1_19() {
        const questNum = 19;
        const answerWrightNum = 0;

        if (localStorage.getItem(`progressSecretHit_${questNum}`) === null ||
            localStorage.getItem(`progressSecretHit_${questNum}`) >= 0) {
            localStorage.setItem(`progressSecretHit_${questNum}`, JSON.stringify(0));
        }

        this.questionLoad.questionBlock(
            '',
            'Именно этого поэта и писателя имела ввиду Марина Цветаева, когда писала, что женщина, забывающая о ... в ту минуту, когда входит её возлюбленный, любит только ...',
            'Генриха Гейне',
            'Александра Блока',
            'Уильяма Шекспира'
        );

        this.questionLoad.answerBlock(answerWrightNum, '', '');

        let answerVar_1 = document.getElementById('answerVar_1'),
            answerVar_2 = document.getElementById('answerVar_2'),
            answerVar_3 = document.getElementById('answerVar_3'),
            answerVarArray = [answerVar_1, answerVar_2, answerVar_3],
            container = document.querySelector('.container'),
            containerQuestBottom = document.querySelector('.container__category'),
            containerQuestBottomTextDiv = document.querySelector('.container-quest__bottom_text'),
            containerQuestBottomButtons = document.querySelector('.container-quest__bottom_buttons'),
            buttonBack = document.getElementById('arrowBack'),
            buttonSetting = document.getElementById('settingsClick'),
            answerNextClick = document.getElementById('answerNextClick')
        ;

        for (let i = 0; i < answerVarArray.length; i++) {
            answerVarArray[i].addEventListener('click', () => {
                if (answerVarArray[i] === answerVarArray[answerWrightNum]) {
                    this.localSaveSecretHit(questNum, 1);

                    answerNextClick.addEventListener('click', () => {
                        let tl = gsap.timeline({
                            onComplete: () => {
                                containerQuestBottom.removeChild(containerQuestBottomTextDiv);
                                containerQuestBottom.removeChild(containerQuestBottomButtons);
                                container.removeChild(containerQuestBottom);
                                this.wrapperBottom.removeChild(buttonBack);
                                this.questionCat_1_20();
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
                    this.localSaveSecretHit(questNum, 0);

                    answerNextClick.addEventListener('click', () => {
                        let tl = gsap.timeline({
                            onComplete: () => {
                                containerQuestBottom.removeChild(containerQuestBottomTextDiv);
                                containerQuestBottom.removeChild(containerQuestBottomButtons);
                                container.removeChild(containerQuestBottom);
                                this.wrapperBottom.removeChild(buttonBack);
                                this.questionCat_1_20();
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

    questionCat_1_20() {
        const questNum = 20;
        const answerWrightNum = 0;

        if (localStorage.getItem(`progressSecretHit_${questNum}`) === null ||
            localStorage.getItem(`progressSecretHit_${questNum}`) >= 0) {
            localStorage.setItem(`progressSecretHit_${questNum}`, JSON.stringify(0));
        }

        this.questionLoad.questionBlock(
            '',
            'Последним приютом для Цветаевой стала земля ...',
            'Елабуги',
            'Москвы ',
            'Санкт-Петербурга'
        );

        this.questionLoad.answerBlock(answerWrightNum, '', '');

        let answerVar_1 = document.getElementById('answerVar_1'),
            answerVar_2 = document.getElementById('answerVar_2'),
            answerVar_3 = document.getElementById('answerVar_3'),
            answerVarArray = [answerVar_1, answerVar_2, answerVar_3],
            container = document.querySelector('.container'),
            containerQuestBottom = document.querySelector('.container__category'),
            containerQuestBottomTextDiv = document.querySelector('.container-quest__bottom_text'),
            containerQuestBottomButtons = document.querySelector('.container-quest__bottom_buttons'),
            buttonBack = document.getElementById('arrowBack'),
            buttonSetting = document.getElementById('settingsClick'),
            answerNextClick = document.getElementById('answerNextClick')
        ;

        for (let i = 0; i < answerVarArray.length; i++) {
            answerVarArray[i].addEventListener('click', () => {
                if (answerVarArray[i] === answerVarArray[answerWrightNum]) {
                    this.localSaveSecretHit(questNum, 1);

                    answerNextClick.addEventListener('click', () => {
                        let tl = gsap.timeline({
                            onComplete: () => {
                                containerQuestBottom.removeChild(containerQuestBottomTextDiv);
                                containerQuestBottom.removeChild(containerQuestBottomButtons);
                                container.removeChild(containerQuestBottom);
                                this.wrapperBottom.removeChild(buttonBack);
                                const initCategory = new CategoryLoad();
                                initCategory.initCategory();
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
                    this.localSaveSecretHit(questNum, 0);

                    answerNextClick.addEventListener('click', () => {
                        let tl = gsap.timeline({
                            onComplete: () => {
                                containerQuestBottom.removeChild(containerQuestBottomTextDiv);
                                containerQuestBottom.removeChild(containerQuestBottomButtons);
                                container.removeChild(containerQuestBottom);
                                this.wrapperBottom.removeChild(buttonBack);
                                const initCategory = new CategoryLoad();
                                initCategory.initCategory();
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

}

export { QuestCat_1 };