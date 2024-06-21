import { gsap } from "gsap";
import { Question } from "./Question.js";
import { ArrowsAll } from "./ArrowsAll.js";
import { Settings } from "./Settings.js";

class QuestCat_3 {

    constructor() {
        this.initQuestLayout();
        // this.localSaveThreeFaces();
        // this.questNextNum = questNextNum;
    }

    localSaveThreeFaces(questLocalNum, questLocalValue) {
        localStorage.setItem(`progressThreeFaces_${questLocalNum}`, JSON.stringify(questLocalValue));
        let progressThreeFacesAll = JSON.parse(localStorage.getItem('progressThreeFacesAll'));
        let progressThreeFacesQuestLocalNum = JSON.parse(localStorage.getItem(`progressThreeFaces_${questLocalNum}`));
        let progressThreeFacesAllSum = progressThreeFacesAll + progressThreeFacesQuestLocalNum;
        localStorage.setItem('progressThreeFacesAll', JSON.stringify(progressThreeFacesAllSum));
    }

    initQuestLayout() {
        this.questionLoad = new Question();
        this.arrowBackLoad = new ArrowsAll();
        this.settingsLoad = new Settings();
        this.questTimePaused = 600;
        this.wrapperBottom = document.querySelector('.wrapper__bottom');
    }

    questionCat_3_1() {
        const questNum = 1;
        const answerWrightNum = 0;

        if (localStorage.getItem(`progressThreeFaces_${questNum}`) === null ||
            localStorage.getItem(`progressThreeFaces_${questNum}`) >= 0) {
            localStorage.setItem(`progressThreeFaces_${questNum}`, JSON.stringify(0));
        }

        this.questionLoad.questionBlock (
            '',
            'Переписка Пастернака – Цветаевой – Рильке началась в 1926 году. Эта переписка длилась ...',
            'полгода',
            'год',
            'два года'
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
                    this.localSaveThreeFaces(questNum, 1);

                    answerNextClick.addEventListener('click', () => {
                        let tl = gsap.timeline({
                            onComplete: () => {
                                containerQuestBottom.removeChild(containerQuestBottomTextDiv);
                                containerQuestBottom.removeChild(containerQuestBottomButtons);
                                container.removeChild(containerQuestBottom);
                                this.wrapperBottom.removeChild(buttonBack);
                                this.questionCat_3_2();
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
                    this.localSaveThreeFaces(questNum, 0);

                    answerNextClick.addEventListener('click', () => {
                        let tl = gsap.timeline({
                            onComplete: () => {
                                containerQuestBottom.removeChild(containerQuestBottomTextDiv);
                                containerQuestBottom.removeChild(containerQuestBottomButtons);
                                container.removeChild(containerQuestBottom);
                                this.wrapperBottom.removeChild(buttonBack);
                                this.questionCat_3_2();
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

    questionCat_3_2() {
        const questNum = 2;
        const answerWrightNum = 2;

        if (localStorage.getItem(`progressThreeFaces_${questNum}`) === null ||
            localStorage.getItem(`progressThreeFaces_${questNum}`) >= 0) {
            localStorage.setItem(`progressThreeFaces_${questNum}`, JSON.stringify(0));
        }

        this.questionLoad.questionBlock (
            '',
            'Невольным инициатором этой переписки стал Борис Пастернак прислав Цветаевой письмо с ...',
            'со своим сборником',
            'с сборником Рильке',
            'с восторженным отзывом на новый сборник Цветаевой'
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
                    this.localSaveThreeFaces(questNum, 1);

                    answerNextClick.addEventListener('click', () => {
                        let tl = gsap.timeline({
                            onComplete: () => {
                                containerQuestBottom.removeChild(containerQuestBottomTextDiv);
                                containerQuestBottom.removeChild(containerQuestBottomButtons);
                                container.removeChild(containerQuestBottom);
                                this.wrapperBottom.removeChild(buttonBack);
                                this.questionCat_3_3();
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
                    this.localSaveThreeFaces(questNum, 0);

                    answerNextClick.addEventListener('click', () => {
                        let tl = gsap.timeline({
                            onComplete: () => {
                                containerQuestBottom.removeChild(containerQuestBottomTextDiv);
                                containerQuestBottom.removeChild(containerQuestBottomButtons);
                                container.removeChild(containerQuestBottom);
                                this.wrapperBottom.removeChild(buttonBack);
                                this.questionCat_3_3();
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

    questionCat_3_3() {
        const questNum = 3;
        const answerWrightNum = 0;

        if (localStorage.getItem(`progressThreeFaces_${questNum}`) === null ||
            localStorage.getItem(`progressThreeFaces_${questNum}`) >= 0) {
            localStorage.setItem(`progressThreeFaces_${questNum}`, JSON.stringify(0));
        }

        this.questionLoad.questionBlock (
            '',
            'Эта переписка нашла своё отражение в поэме «Попытка комнаты», в которой Марина Цветаева обращается к Пастернаку и Рильке.',
            '«Попытка комнаты»',
            '«Причал»',
            '«Одиночество»'
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
                    this.localSaveThreeFaces(questNum, 1);

                    answerNextClick.addEventListener('click', () => {
                        let tl = gsap.timeline({
                            onComplete: () => {
                                containerQuestBottom.removeChild(containerQuestBottomTextDiv);
                                containerQuestBottom.removeChild(containerQuestBottomButtons);
                                container.removeChild(containerQuestBottom);
                                this.wrapperBottom.removeChild(buttonBack);
                                this.questionCat_3_4();
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
                    this.localSaveThreeFaces(questNum, 0);

                    answerNextClick.addEventListener('click', () => {
                        let tl = gsap.timeline({
                            onComplete: () => {
                                containerQuestBottom.removeChild(containerQuestBottomTextDiv);
                                containerQuestBottom.removeChild(containerQuestBottomButtons);
                                container.removeChild(containerQuestBottom);
                                this.wrapperBottom.removeChild(buttonBack);
                                this.questionCat_3_4();
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

    questionCat_3_4() {
        const questNum = 4;
        const answerWrightNum = 2;

        if (localStorage.getItem(`progressThreeFaces_${questNum}`) === null ||
            localStorage.getItem(`progressThreeFaces_${questNum}`) >= 0) {
            localStorage.setItem(`progressThreeFaces_${questNum}`, JSON.stringify(0));
        }

        this.questionLoad.questionBlock (
            '',
            'В одном из писем Пастернак писал Цветаевой «Это должно было остаться моей возрождающей тайной до самого свидания с тобой. Я мог и должен был скрыть от тебя до встречи, что никогда теперь не смогу уже разлюбить тебя, что ты моё единственное законное небо, и ...',
            'сестра',
            'муза',
            'жена'
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
                    this.localSaveThreeFaces(questNum, 1);

                    answerNextClick.addEventListener('click', () => {
                        let tl = gsap.timeline({
                            onComplete: () => {
                                containerQuestBottom.removeChild(containerQuestBottomTextDiv);
                                containerQuestBottom.removeChild(containerQuestBottomButtons);
                                container.removeChild(containerQuestBottom);
                                this.wrapperBottom.removeChild(buttonBack);
                                this.questionCat_3_5();
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
                    this.localSaveThreeFaces(questNum, 0);

                    answerNextClick.addEventListener('click', () => {
                        let tl = gsap.timeline({
                            onComplete: () => {
                                containerQuestBottom.removeChild(containerQuestBottomTextDiv);
                                containerQuestBottom.removeChild(containerQuestBottomButtons);
                                container.removeChild(containerQuestBottom);
                                this.wrapperBottom.removeChild(buttonBack);
                                this.questionCat_3_5();
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

    questionCat_3_5() {
        const questNum = 5;
        const answerWrightNum = 0;

        if (localStorage.getItem(`progressThreeFaces_${questNum}`) === null ||
            localStorage.getItem(`progressThreeFaces_${questNum}`) >= 0) {
            localStorage.setItem(`progressThreeFaces_${questNum}`, JSON.stringify(0));
        }

        this.questionLoad.questionBlock (
            '',
            'Марина Цветаева - Райнеру Рильке: «Я читала твое письмо… и читал со мной, мы вместе читали. Тебя не смущает, что он читал тоже?»»',
            'океан',
            'рассвет',
            'воздух'
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
                    this.localSaveThreeFaces(questNum, 1);

                    answerNextClick.addEventListener('click', () => {
                        let tl = gsap.timeline({
                            onComplete: () => {
                                containerQuestBottom.removeChild(containerQuestBottomTextDiv);
                                containerQuestBottom.removeChild(containerQuestBottomButtons);
                                container.removeChild(containerQuestBottom);
                                this.wrapperBottom.removeChild(buttonBack);
                                this.questionCat_3_6();
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
                    this.localSaveThreeFaces(questNum, 0);

                    answerNextClick.addEventListener('click', () => {
                        let tl = gsap.timeline({
                            onComplete: () => {
                                containerQuestBottom.removeChild(containerQuestBottomTextDiv);
                                containerQuestBottom.removeChild(containerQuestBottomButtons);
                                container.removeChild(containerQuestBottom);
                                this.wrapperBottom.removeChild(buttonBack);
                                this.questionCat_3_6();
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

    questionCat_3_6() {
        const questNum = 6;
        const answerWrightNum = 1;

        if (localStorage.getItem(`progressThreeFaces_${questNum}`) === null ||
            localStorage.getItem(`progressThreeFaces_${questNum}`) >= 0) {
            localStorage.setItem(`progressThreeFaces_${questNum}`, JSON.stringify(0));
        }

        this.questionLoad.questionBlock (
            '',
            'Борис Пастернак пишет Цветаевой: «…найти сообща – «поверх барьеров» - новые возможности ...',
            'литературы',
            'искусства',
            'поэзии'
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
                    this.localSaveThreeFaces(questNum, 1);

                    answerNextClick.addEventListener('click', () => {
                        let tl = gsap.timeline({
                            onComplete: () => {
                                containerQuestBottom.removeChild(containerQuestBottomTextDiv);
                                containerQuestBottom.removeChild(containerQuestBottomButtons);
                                container.removeChild(containerQuestBottom);
                                this.wrapperBottom.removeChild(buttonBack);
                                this.questionCat_3_7();
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
                    this.localSaveThreeFaces(questNum, 0);

                    answerNextClick.addEventListener('click', () => {
                        let tl = gsap.timeline({
                            onComplete: () => {
                                containerQuestBottom.removeChild(containerQuestBottomTextDiv);
                                containerQuestBottom.removeChild(containerQuestBottomButtons);
                                container.removeChild(containerQuestBottom);
                                this.wrapperBottom.removeChild(buttonBack);
                                this.questionCat_3_7();
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

    questionCat_3_7() {
        const questNum = 7;
        const answerWrightNum = 2;

        if (localStorage.getItem(`progressThreeFaces_${questNum}`) === null ||
            localStorage.getItem(`progressThreeFaces_${questNum}`) >= 0) {
            localStorage.setItem(`progressThreeFaces_${questNum}`, JSON.stringify(0));
        }

        this.questionLoad.questionBlock (
            '',
            'В одном из писем Пастернак просит Цветаеву ...',
            'верь мне',
            'будь добра ко мне',
            'не разочаровывайся во мне'
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
                    this.localSaveThreeFaces(questNum, 1);

                    answerNextClick.addEventListener('click', () => {
                        let tl = gsap.timeline({
                            onComplete: () => {
                                containerQuestBottom.removeChild(containerQuestBottomTextDiv);
                                containerQuestBottom.removeChild(containerQuestBottomButtons);
                                container.removeChild(containerQuestBottom);
                                this.wrapperBottom.removeChild(buttonBack);
                                this.questionCat_3_8();
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
                    this.localSaveThreeFaces(questNum, 0);

                    answerNextClick.addEventListener('click', () => {
                        let tl = gsap.timeline({
                            onComplete: () => {
                                containerQuestBottom.removeChild(containerQuestBottomTextDiv);
                                containerQuestBottom.removeChild(containerQuestBottomButtons);
                                container.removeChild(containerQuestBottom);
                                this.wrapperBottom.removeChild(buttonBack);
                                this.questionCat_3_8();
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

    questionCat_3_8() {
        const questNum = 8;
        const answerWrightNum = 0;

        if (localStorage.getItem(`progressThreeFaces_${questNum}`) === null ||
            localStorage.getItem(`progressThreeFaces_${questNum}`) >= 0) {
            localStorage.setItem(`progressThreeFaces_${questNum}`, JSON.stringify(0));
        }

        this.questionLoad.questionBlock (
            '',
            'Свои произведения Райнер Мария Рильке выслал Цветаевой во Францию, как знак, что письмо от Пастернака получено и прочтено. Это были ...',
            '«Сонеты к Орфею» и «Дуинские элегии»',
            '«Часослов» и «Книгу образов»',
            '«Сочельник» и «Новые стихотворения»'
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
                    this.localSaveThreeFaces(questNum, 1);

                    answerNextClick.addEventListener('click', () => {
                        let tl = gsap.timeline({
                            onComplete: () => {
                                containerQuestBottom.removeChild(containerQuestBottomTextDiv);
                                containerQuestBottom.removeChild(containerQuestBottomButtons);
                                container.removeChild(containerQuestBottom);
                                this.wrapperBottom.removeChild(buttonBack);
                                this.questionCat_3_9();
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
                    this.localSaveThreeFaces(questNum, 0);

                    answerNextClick.addEventListener('click', () => {
                        let tl = gsap.timeline({
                            onComplete: () => {
                                containerQuestBottom.removeChild(containerQuestBottomTextDiv);
                                containerQuestBottom.removeChild(containerQuestBottomButtons);
                                container.removeChild(containerQuestBottom);
                                this.wrapperBottom.removeChild(buttonBack);
                                this.questionCat_3_9();
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

    questionCat_3_9() {
        const questNum = 9;
        const answerWrightNum = 1;

        if (localStorage.getItem(`progressThreeFaces_${questNum}`) === null ||
            localStorage.getItem(`progressThreeFaces_${questNum}`) >= 0) {
            localStorage.setItem(`progressThreeFaces_${questNum}`, JSON.stringify(0));
        }

        this.questionLoad.questionBlock (
            '',
            'На каком языке велась переписка Пастернака – Цветаевой – Рильке?',
            'русский',
            'немецкий',
            'французский'
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
                    this.localSaveThreeFaces(questNum, 1);

                    answerNextClick.addEventListener('click', () => {
                        let tl = gsap.timeline({
                            onComplete: () => {
                                containerQuestBottom.removeChild(containerQuestBottomTextDiv);
                                containerQuestBottom.removeChild(containerQuestBottomButtons);
                                container.removeChild(containerQuestBottom);
                                this.wrapperBottom.removeChild(buttonBack);
                                this.questionCat_3_10();
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
                    this.localSaveThreeFaces(questNum, 0);

                    answerNextClick.addEventListener('click', () => {
                        let tl = gsap.timeline({
                            onComplete: () => {
                                containerQuestBottom.removeChild(containerQuestBottomTextDiv);
                                containerQuestBottom.removeChild(containerQuestBottomButtons);
                                container.removeChild(containerQuestBottom);
                                this.wrapperBottom.removeChild(buttonBack);
                                this.questionCat_3_10();
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

    questionCat_3_10() {
        const questNum = 10;
        const answerWrightNum = 2;

        if (localStorage.getItem(`progressThreeFaces_${questNum}`) === null ||
            localStorage.getItem(`progressThreeFaces_${questNum}`) >= 0) {
            localStorage.setItem(`progressThreeFaces_${questNum}`, JSON.stringify(0));
        }

        this.questionLoad.questionBlock (
            '',
            'М. Цветаева «Есть только один человек в России. Один поэт… он и его стихи замечательны, и он их прекрасно читает. Лицом о похож на Пушкина, ростом выше ...',
            'Г. Н. Гумилев',
            'Р. М. Рильке',
            'Б. Л. Пастернак'
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
                    this.localSaveThreeFaces(questNum, 1);

                    answerNextClick.addEventListener('click', () => {
                        let tl = gsap.timeline({
                            onComplete: () => {
                                containerQuestBottom.removeChild(containerQuestBottomTextDiv);
                                containerQuestBottom.removeChild(containerQuestBottomButtons);
                                container.removeChild(containerQuestBottom);
                                this.wrapperBottom.removeChild(buttonBack);
                                this.questionCat_3_11();
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
                    this.localSaveThreeFaces(questNum, 0);

                    answerNextClick.addEventListener('click', () => {
                        let tl = gsap.timeline({
                            onComplete: () => {
                                containerQuestBottom.removeChild(containerQuestBottomTextDiv);
                                containerQuestBottom.removeChild(containerQuestBottomButtons);
                                container.removeChild(containerQuestBottom);
                                this.wrapperBottom.removeChild(buttonBack);
                                this.questionCat_3_11();
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

    questionCat_3_11() {
        const questNum = 11;
        const answerWrightNum = 1;

        if (localStorage.getItem(`progressThreeFaces_${questNum}`) === null ||
            localStorage.getItem(`progressThreeFaces_${questNum}`) >= 0) {
            localStorage.setItem(`progressThreeFaces_${questNum}`, JSON.stringify(0));
        }

        this.questionLoad.questionBlock (
            '',
            '«Элегия к Цветаевой» принадлежит ...',
            'В. В. Маяковский',
            'Р. М. Рильке',
            'Б. Л. Пастернак'
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
                    this.localSaveThreeFaces(questNum, 1);

                    answerNextClick.addEventListener('click', () => {
                        let tl = gsap.timeline({
                            onComplete: () => {
                                containerQuestBottom.removeChild(containerQuestBottomTextDiv);
                                containerQuestBottom.removeChild(containerQuestBottomButtons);
                                container.removeChild(containerQuestBottom);
                                this.wrapperBottom.removeChild(buttonBack);
                                this.questionCat_3_12();
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
                    this.localSaveThreeFaces(questNum, 0);

                    answerNextClick.addEventListener('click', () => {
                        let tl = gsap.timeline({
                            onComplete: () => {
                                containerQuestBottom.removeChild(containerQuestBottomTextDiv);
                                containerQuestBottom.removeChild(containerQuestBottomButtons);
                                container.removeChild(containerQuestBottom);
                                this.wrapperBottom.removeChild(buttonBack);
                                this.questionCat_3_12();
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

    questionCat_3_12() {
        const questNum = 12;
        const answerWrightNum = 0;

        if (localStorage.getItem(`progressThreeFaces_${questNum}`) === null ||
            localStorage.getItem(`progressThreeFaces_${questNum}`) >= 0) {
            localStorage.setItem(`progressThreeFaces_${questNum}`, JSON.stringify(0));
        }

        this.questionLoad.questionBlock (
            '',
            '«Новогоднее» стихотворение Марины Цветаевой посвящено ...',
            'Р. М. Рильке',
            'Б. Л. Пастернака',
            'В. И. Иванов'
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
                    this.localSaveThreeFaces(questNum, 1);

                    answerNextClick.addEventListener('click', () => {
                        let tl = gsap.timeline({
                            onComplete: () => {
                                containerQuestBottom.removeChild(containerQuestBottomTextDiv);
                                containerQuestBottom.removeChild(containerQuestBottomButtons);
                                container.removeChild(containerQuestBottom);
                                this.wrapperBottom.removeChild(buttonBack);
                                this.questionCat_3_13();
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
                    this.localSaveThreeFaces(questNum, 0);

                    answerNextClick.addEventListener('click', () => {
                        let tl = gsap.timeline({
                            onComplete: () => {
                                containerQuestBottom.removeChild(containerQuestBottomTextDiv);
                                containerQuestBottom.removeChild(containerQuestBottomButtons);
                                container.removeChild(containerQuestBottom);
                                this.wrapperBottom.removeChild(buttonBack);
                                this.questionCat_3_13();
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

    questionCat_3_13() {
        const questNum = 13;
        const answerWrightNum = 0;

        if (localStorage.getItem(`progressThreeFaces_${questNum}`) === null ||
            localStorage.getItem(`progressThreeFaces_${questNum}`) >= 0) {
            localStorage.setItem(`progressThreeFaces_${questNum}`, JSON.stringify(0));
        }

        this.questionLoad.questionBlock (
            '',
            'В одном из писем Цветаева пишет Рильке «Райнер, этой зимой мы должны встретиться…В маленьком городке, Райнер, захочешь – надолго. Захочешь – ненадолго. Прошлое еще ...',
            'впереди',
            'живо',
            'не ушло'
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
                    this.localSaveThreeFaces(questNum, 1);

                    answerNextClick.addEventListener('click', () => {
                        let tl = gsap.timeline({
                            onComplete: () => {
                                containerQuestBottom.removeChild(containerQuestBottomTextDiv);
                                containerQuestBottom.removeChild(containerQuestBottomButtons);
                                container.removeChild(containerQuestBottom);
                                this.wrapperBottom.removeChild(buttonBack);
                                this.questionCat_3_14();
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
                    this.localSaveThreeFaces(questNum, 0);

                    answerNextClick.addEventListener('click', () => {
                        let tl = gsap.timeline({
                            onComplete: () => {
                                containerQuestBottom.removeChild(containerQuestBottomTextDiv);
                                containerQuestBottom.removeChild(containerQuestBottomButtons);
                                container.removeChild(containerQuestBottom);
                                this.wrapperBottom.removeChild(buttonBack);
                                this.questionCat_3_14();
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

    questionCat_3_14() {
        const questNum = 14;
        const answerWrightNum = 1;

        if (localStorage.getItem(`progressThreeFaces_${questNum}`) === null ||
            localStorage.getItem(`progressThreeFaces_${questNum}`) >= 0) {
            localStorage.setItem(`progressThreeFaces_${questNum}`, JSON.stringify(0));
        }

        this.questionLoad.questionBlock (
            '',
            'Цветаева – Пастернаку: «Жизнь - … Скоро уеду. А куда не скажу» ...',
            'мираж',
            'вокзал',
            'судьба'
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
                    this.localSaveThreeFaces(questNum, 1);

                    answerNextClick.addEventListener('click', () => {
                        let tl = gsap.timeline({
                            onComplete: () => {
                                containerQuestBottom.removeChild(containerQuestBottomTextDiv);
                                containerQuestBottom.removeChild(containerQuestBottomButtons);
                                container.removeChild(containerQuestBottom);
                                this.wrapperBottom.removeChild(buttonBack);
                                this.questionCat_3_15();
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
                    this.localSaveThreeFaces(questNum, 0);

                    answerNextClick.addEventListener('click', () => {
                        let tl = gsap.timeline({
                            onComplete: () => {
                                containerQuestBottom.removeChild(containerQuestBottomTextDiv);
                                containerQuestBottom.removeChild(containerQuestBottomButtons);
                                container.removeChild(containerQuestBottom);
                                this.wrapperBottom.removeChild(buttonBack);
                                this.questionCat_3_15();
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

    questionCat_3_15() {
        const questNum = 15;
        const answerWrightNum = 2;

        if (localStorage.getItem(`progressThreeFaces_${questNum}`) === null ||
            localStorage.getItem(`progressThreeFaces_${questNum}`) >= 0) {
            localStorage.setItem(`progressThreeFaces_${questNum}`, JSON.stringify(0));
        }

        this.questionLoad.questionBlock (
            '',
            '«...В нее надо было вчитываться. Когда я это сделал, я ахнул от открывшейся мне бездны чистоты и ясности…» - эти слова принадлежат ...',
            'С. Я. Эфрон',
            'Р. М. Рильке',
            'Б. Л. Пастернак'
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
                    this.localSaveThreeFaces(questNum, 1);

                    answerNextClick.addEventListener('click', () => {
                        let tl = gsap.timeline({
                            onComplete: () => {
                                containerQuestBottom.removeChild(containerQuestBottomTextDiv);
                                containerQuestBottom.removeChild(containerQuestBottomButtons);
                                container.removeChild(containerQuestBottom);
                                this.wrapperBottom.removeChild(buttonBack);
                                this.questionCat_3_16();
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
                    this.localSaveThreeFaces(questNum, 0);

                    answerNextClick.addEventListener('click', () => {
                        let tl = gsap.timeline({
                            onComplete: () => {
                                containerQuestBottom.removeChild(containerQuestBottomTextDiv);
                                containerQuestBottom.removeChild(containerQuestBottomButtons);
                                container.removeChild(containerQuestBottom);
                                this.wrapperBottom.removeChild(buttonBack);
                                this.questionCat_3_16();
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

    questionCat_3_16() {
        const questNum = 16;
        const answerWrightNum = 0;

        if (localStorage.getItem(`progressThreeFaces_${questNum}`) === null ||
            localStorage.getItem(`progressThreeFaces_${questNum}`) >= 0) {
            localStorage.setItem(`progressThreeFaces_${questNum}`, JSON.stringify(0));
        }

        this.questionLoad.questionBlock (
            '',
            '«Рейнике» в чьем произношении имя Рильке так звучало?',
            'Ариадна',
            'Марина Цветаева',
            'Лу Саломе'
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
                    this.localSaveThreeFaces(questNum, 1);

                    answerNextClick.addEventListener('click', () => {
                        let tl = gsap.timeline({
                            onComplete: () => {
                                containerQuestBottom.removeChild(containerQuestBottomTextDiv);
                                containerQuestBottom.removeChild(containerQuestBottomButtons);
                                container.removeChild(containerQuestBottom);
                                this.wrapperBottom.removeChild(buttonBack);
                                this.questionCat_3_17();
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
                    this.localSaveThreeFaces(questNum, 0);

                    answerNextClick.addEventListener('click', () => {
                        let tl = gsap.timeline({
                            onComplete: () => {
                                containerQuestBottom.removeChild(containerQuestBottomTextDiv);
                                containerQuestBottom.removeChild(containerQuestBottomButtons);
                                container.removeChild(containerQuestBottom);
                                this.wrapperBottom.removeChild(buttonBack);
                                this.questionCat_3_17();
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

    questionCat_3_17() {
        const questNum = 17;
        const answerWrightNum = 0;

        if (localStorage.getItem(`progressThreeFaces_${questNum}`) === null ||
            localStorage.getItem(`progressThreeFaces_${questNum}`) >= 0) {
            localStorage.setItem(`progressThreeFaces_${questNum}`, JSON.stringify(0));
        }

        this.questionLoad.questionBlock (
            '',
            'В ответ на смерть австрийского Орфея Цветаева написала «Новогоднее» и этот очерк ...',
            '«Твоя смерть»',
            '«Пленный дух»',
            '«Реквием»'
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
                    this.localSaveThreeFaces(questNum, 1);

                    answerNextClick.addEventListener('click', () => {
                        let tl = gsap.timeline({
                            onComplete: () => {
                                containerQuestBottom.removeChild(containerQuestBottomTextDiv);
                                containerQuestBottom.removeChild(containerQuestBottomButtons);
                                container.removeChild(containerQuestBottom);
                                this.wrapperBottom.removeChild(buttonBack);
                                this.questionCat_3_18();
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
                    this.localSaveThreeFaces(questNum, 0);

                    answerNextClick.addEventListener('click', () => {
                        let tl = gsap.timeline({
                            onComplete: () => {
                                containerQuestBottom.removeChild(containerQuestBottomTextDiv);
                                containerQuestBottom.removeChild(containerQuestBottomButtons);
                                container.removeChild(containerQuestBottom);
                                this.wrapperBottom.removeChild(buttonBack);
                                this.questionCat_3_18();
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

    questionCat_3_18() {
        const questNum = 18;
        const answerWrightNum = 0;

        if (localStorage.getItem(`progressThreeFaces_${questNum}`) === null ||
            localStorage.getItem(`progressThreeFaces_${questNum}`) >= 0) {
            localStorage.setItem(`progressThreeFaces_${questNum}`, JSON.stringify(0));
        }

        this.questionLoad.questionBlock (
            '',
            'Цветаева посвящает Пастернаку стихотворение ...',
            '«Расстоянья, вёрсты, мили»',
            '«Выстрел – в самую душу»',
            '«Я забыла, что сердце в Вас»'
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
                    this.localSaveThreeFaces(questNum, 1);

                    answerNextClick.addEventListener('click', () => {
                        let tl = gsap.timeline({
                            onComplete: () => {
                                containerQuestBottom.removeChild(containerQuestBottomTextDiv);
                                containerQuestBottom.removeChild(containerQuestBottomButtons);
                                container.removeChild(containerQuestBottom);
                                this.wrapperBottom.removeChild(buttonBack);
                                this.questionCat_3_19();
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
                    this.localSaveThreeFaces(questNum, 0);

                    answerNextClick.addEventListener('click', () => {
                        let tl = gsap.timeline({
                            onComplete: () => {
                                containerQuestBottom.removeChild(containerQuestBottomTextDiv);
                                containerQuestBottom.removeChild(containerQuestBottomButtons);
                                container.removeChild(containerQuestBottom);
                                this.wrapperBottom.removeChild(buttonBack);
                                this.questionCat_3_19();
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

    questionCat_3_19() {
        const questNum = 19;
        const answerWrightNum = 0;

        if (localStorage.getItem(`progressThreeFaces_${questNum}`) === null ||
            localStorage.getItem(`progressThreeFaces_${questNum}`) >= 0) {
            localStorage.setItem(`progressThreeFaces_${questNum}`, JSON.stringify(0));
        }

        this.questionLoad.questionBlock (
            '',
            'Марина Ивановна перевела это произведение Рильке',
            '«Письма к молодому поэту»',
            '«Сказка о боге»',
            '«Песнь о любви и смерти корнета Кристофа»'
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
                    this.localSaveThreeFaces(questNum, 1);

                    answerNextClick.addEventListener('click', () => {
                        let tl = gsap.timeline({
                            onComplete: () => {
                                containerQuestBottom.removeChild(containerQuestBottomTextDiv);
                                containerQuestBottom.removeChild(containerQuestBottomButtons);
                                container.removeChild(containerQuestBottom);
                                this.wrapperBottom.removeChild(buttonBack);
                                this.questionCat_3_20();
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
                    this.localSaveThreeFaces(questNum, 0);

                    answerNextClick.addEventListener('click', () => {
                        let tl = gsap.timeline({
                            onComplete: () => {
                                containerQuestBottom.removeChild(containerQuestBottomTextDiv);
                                containerQuestBottom.removeChild(containerQuestBottomButtons);
                                container.removeChild(containerQuestBottom);
                                this.wrapperBottom.removeChild(buttonBack);
                                this.questionCat_3_20();
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

    questionCat_3_20() {
        const questNum = 20;
        const answerWrightNum = 1;

        if (localStorage.getItem(`progressThreeFaces_${questNum}`) === null ||
            localStorage.getItem(`progressThreeFaces_${questNum}`) >= 0) {
            localStorage.setItem(`progressThreeFaces_${questNum}`, JSON.stringify(0));
        }

        this.questionLoad.questionBlock (
            '',
            'Кому обратила Марина Цветаева эти строки: «Когда я — т. е. все годы до — была уверена, что мы встретимся, мне бы и в голову, и в руку не пришло тaк выявить тебя воочию — себе и другим. Ты был моя тайна — от всех глаз, даже моих. И только закрывая свои — я тебя видела — и ничего уже не видела кроме. Я свои закрывала — в твои. Выходит — сейчас я просто тебя из себя — изъяла — и поставила — как художник холст — и возможно дальше — отошла.',
            'Райнеру Мария Рильке',
            'Борису Пастернаку',
            'Орфею'
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
                    this.localSaveThreeFaces(questNum, 1);

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
                    this.localSaveThreeFaces(questNum, 0);

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

export { QuestCat_3 };