import { gsap } from "gsap";
import { Question } from "./Question.js";
import { ArrowsAll } from "./ArrowsAll.js";
import { Settings } from "./Settings.js";

class QuestCat_2 {

    constructor() {
        this.initQuestLayout();
        // this.localSaveChildLove();
        // this.questNextNum = questNextNum;
    }

    localSaveChildLove(questLocalNum, questLocalValue) {
        localStorage.setItem(`progressChildLove_${questLocalNum}`, JSON.stringify(questLocalValue));
        let progressChildLoveAll = JSON.parse(localStorage.getItem('progressChildLoveAll'));
        let progressChildLoveQuestLocalNum = JSON.parse(localStorage.getItem(`progressChildLove_${questLocalNum}`));
        let progressChildLoveAllSum = progressChildLoveAll + progressChildLoveQuestLocalNum;
        localStorage.setItem('progressChildLoveAll', JSON.stringify(progressChildLoveAllSum));
    }

    initQuestLayout() {
        this.questionLoad = new Question();
        this.arrowBackLoad = new ArrowsAll();
        this.settingsLoad = new Settings();
        this.questTimePaused = 600;
        this.wrapperBottom = document.querySelector('.wrapper__bottom');
    }

    questionCat_2_1() {
        const questNum = 1;
        const answerWrightNum = 0;

        if (localStorage.getItem(`progressChildLove_${questNum}`) === null ||
            localStorage.getItem(`progressChildLove_${questNum}`) >= 0) {
            localStorage.setItem(`progressChildLove_${questNum}`, JSON.stringify(0));
        }

        this.questionLoad.questionBlock (
            '',
            'Первую большую статью о Цветаевой написал ...',
            'Максим Волошин',
            'Владимир Маяковский',
            'Павел Антакольский '
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
                    this.localSaveChildLove(questNum, 1);

                    answerNextClick.addEventListener('click', () => {
                        let tl = gsap.timeline({
                            onComplete: () => {
                                containerQuestBottom.removeChild(containerQuestBottomTextDiv);
                                containerQuestBottom.removeChild(containerQuestBottomButtons);
                                container.removeChild(containerQuestBottom);
                                this.wrapperBottom.removeChild(buttonBack);
                                this.questionCat_2_2();
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
                    this.localSaveChildLove(questNum, 0);

                    answerNextClick.addEventListener('click', () => {
                        let tl = gsap.timeline({
                            onComplete: () => {
                                containerQuestBottom.removeChild(containerQuestBottomTextDiv);
                                containerQuestBottom.removeChild(containerQuestBottomButtons);
                                container.removeChild(containerQuestBottom);
                                this.wrapperBottom.removeChild(buttonBack);
                                this.questionCat_2_2();
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

    questionCat_2_2() {
        const questNum = 2;
        const answerWrightNum = 0;

        if (localStorage.getItem(`progressChildLove_${questNum}`) === null ||
            localStorage.getItem(`progressChildLove_${questNum}`) >= 0) {
            localStorage.setItem(`progressChildLove_${questNum}`, JSON.stringify(0));
        }

        this.questionLoad.questionBlock (
            '',
            'Первый сборник Марины Цветаевой выпущен в 1910 году и называется ...',
            '«Вечерний альбом»',
            '«Юношеские стихи»',
            '«Волшебный фонарь»'
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
                    this.localSaveChildLove(questNum, 1);

                    answerNextClick.addEventListener('click', () => {
                        let tl = gsap.timeline({
                            onComplete: () => {
                                containerQuestBottom.removeChild(containerQuestBottomTextDiv);
                                containerQuestBottom.removeChild(containerQuestBottomButtons);
                                container.removeChild(containerQuestBottom);
                                this.wrapperBottom.removeChild(buttonBack);
                                this.questionCat_2_3();
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
                    this.localSaveChildLove(questNum, 0);

                    answerNextClick.addEventListener('click', () => {
                        let tl = gsap.timeline({
                            onComplete: () => {
                                containerQuestBottom.removeChild(containerQuestBottomTextDiv);
                                containerQuestBottom.removeChild(containerQuestBottomButtons);
                                container.removeChild(containerQuestBottom);
                                this.wrapperBottom.removeChild(buttonBack);
                                this.questionCat_2_3();
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

    questionCat_2_3() {
        const questNum = 3;
        const answerWrightNum = 0;

        if (localStorage.getItem(`progressChildLove_${questNum}`) === null ||
            localStorage.getItem(`progressChildLove_${questNum}`) >= 0) {
            localStorage.setItem(`progressChildLove_${questNum}`, JSON.stringify(0));
        }

        this.questionLoad.questionBlock (
            '',
            'Есть такие голоса<br>Что смолкаешь, им не вторя,<br>Что предвидишь чудеса.<br>Есть огромные глаза<br>Цвета моря... Эти строки Цветаева посвящает ...',
            'Сергею Эфрону',
            'своему сыну Георгию',
            'Александру Блоку'
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
                    this.localSaveChildLove(questNum, 1);

                    answerNextClick.addEventListener('click', () => {
                        let tl = gsap.timeline({
                            onComplete: () => {
                                containerQuestBottom.removeChild(containerQuestBottomTextDiv);
                                containerQuestBottom.removeChild(containerQuestBottomButtons);
                                container.removeChild(containerQuestBottom);
                                this.wrapperBottom.removeChild(buttonBack);
                                this.questionCat_2_4();
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
                    this.localSaveChildLove(questNum, 0);

                    answerNextClick.addEventListener('click', () => {
                        let tl = gsap.timeline({
                            onComplete: () => {
                                containerQuestBottom.removeChild(containerQuestBottomTextDiv);
                                containerQuestBottom.removeChild(containerQuestBottomButtons);
                                container.removeChild(containerQuestBottom);
                                this.wrapperBottom.removeChild(buttonBack);
                                this.questionCat_2_4();
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

    questionCat_2_4() {
        const questNum = 4;
        const answerWrightNum = 0;

        if (localStorage.getItem(`progressChildLove_${questNum}`) === null ||
            localStorage.getItem(`progressChildLove_${questNum}`) >= 0) {
            localStorage.setItem(`progressChildLove_${questNum}`, JSON.stringify(0));
        }

        this.questionLoad.questionBlock (
            '',
            'Молодой колоколенкой<br>Ты любуешься-  в воздухе,<br>Голос у нее тоненький,<br>В ясном куполе звёздочки<br><br>Куполок твой золотенький,<br>Ясны звёзды под лобиком.<br>Голосочек твой тоненький, -<br>Ты сама колоколенка… Эти строки Марина Цветаева посвятила ...',
            'своей дочери Ариадне',
            'своей дочери Ирине',
            'сестре Анастасии'
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
                    this.localSaveChildLove(questNum, 1);

                    answerNextClick.addEventListener('click', () => {
                        let tl = gsap.timeline({
                            onComplete: () => {
                                containerQuestBottom.removeChild(containerQuestBottomTextDiv);
                                containerQuestBottom.removeChild(containerQuestBottomButtons);
                                container.removeChild(containerQuestBottom);
                                this.wrapperBottom.removeChild(buttonBack);
                                this.questionCat_2_5();
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
                    this.localSaveChildLove(questNum, 0);

                    answerNextClick.addEventListener('click', () => {
                        let tl = gsap.timeline({
                            onComplete: () => {
                                containerQuestBottom.removeChild(containerQuestBottomTextDiv);
                                containerQuestBottom.removeChild(containerQuestBottomButtons);
                                container.removeChild(containerQuestBottom);
                                this.wrapperBottom.removeChild(buttonBack);
                                this.questionCat_2_5();
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

    questionCat_2_5() {
        const questNum = 5;
        const answerWrightNum = 0;

        if (localStorage.getItem(`progressChildLove_${questNum}`) === null ||
            localStorage.getItem(`progressChildLove_${questNum}`) >= 0) {
            localStorage.setItem(`progressChildLove_${questNum}`, JSON.stringify(0));
        }

        this.questionLoad.questionBlock (
            '',
            'Своему сыну Георгию Цветаева посвятила много стихотворений. Одно из них:',
            '«Кем будешь – бог один...»',
            '«Мирок»',
            '«Бежит тропинка с бугорка»'
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
                    this.localSaveChildLove(questNum, 1);

                    answerNextClick.addEventListener('click', () => {
                        let tl = gsap.timeline({
                            onComplete: () => {
                                containerQuestBottom.removeChild(containerQuestBottomTextDiv);
                                containerQuestBottom.removeChild(containerQuestBottomButtons);
                                container.removeChild(containerQuestBottom);
                                this.wrapperBottom.removeChild(buttonBack);
                                this.questionCat_2_6();
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
                    this.localSaveChildLove(questNum, 0);

                    answerNextClick.addEventListener('click', () => {
                        let tl = gsap.timeline({
                            onComplete: () => {
                                containerQuestBottom.removeChild(containerQuestBottomTextDiv);
                                containerQuestBottom.removeChild(containerQuestBottomButtons);
                                container.removeChild(containerQuestBottom);
                                this.wrapperBottom.removeChild(buttonBack);
                                this.questionCat_2_6();
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

    questionCat_2_6() {
        const questNum = 6;
        const answerWrightNum = 2;

        if (localStorage.getItem(`progressChildLove_${questNum}`) === null ||
            localStorage.getItem(`progressChildLove_${questNum}`) >= 0) {
            localStorage.setItem(`progressChildLove_${questNum}`, JSON.stringify(0));
        }

        this.questionLoad.questionBlock (
            '',
            'Литературное наследие Цветаевой составляет более ...',
            '1000 лирических стихотворений',
            'более 500 лирических стихотворений',
            'более 800 лирических стихотворений'
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
                    this.localSaveChildLove(questNum, 1);

                    answerNextClick.addEventListener('click', () => {
                        let tl = gsap.timeline({
                            onComplete: () => {
                                containerQuestBottom.removeChild(containerQuestBottomTextDiv);
                                containerQuestBottom.removeChild(containerQuestBottomButtons);
                                container.removeChild(containerQuestBottom);
                                this.wrapperBottom.removeChild(buttonBack);
                                this.questionCat_2_7();
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
                    this.localSaveChildLove(questNum, 0);

                    answerNextClick.addEventListener('click', () => {
                        let tl = gsap.timeline({
                            onComplete: () => {
                                containerQuestBottom.removeChild(containerQuestBottomTextDiv);
                                containerQuestBottom.removeChild(containerQuestBottomButtons);
                                container.removeChild(containerQuestBottom);
                                this.wrapperBottom.removeChild(buttonBack);
                                this.questionCat_2_7();
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

    questionCat_2_7() {
        const questNum = 7;
        const answerWrightNum = 2;

        if (localStorage.getItem(`progressChildLove_${questNum}`) === null ||
            localStorage.getItem(`progressChildLove_${questNum}`) >= 0) {
            localStorage.setItem(`progressChildLove_${questNum}`, JSON.stringify(0));
        }

        this.questionLoad.questionBlock (
            '',
            'В 1828 году в Париже выходит последний прижизненный сборник Цветаевой ...',
            '«Мой Пушкин»',
            '«Стихи о Москве»',
            '«После России»'
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
                    this.localSaveChildLove(questNum, 1);

                    answerNextClick.addEventListener('click', () => {
                        let tl = gsap.timeline({
                            onComplete: () => {
                                containerQuestBottom.removeChild(containerQuestBottomTextDiv);
                                containerQuestBottom.removeChild(containerQuestBottomButtons);
                                container.removeChild(containerQuestBottom);
                                this.wrapperBottom.removeChild(buttonBack);
                                this.questionCat_2_8();
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
                    this.localSaveChildLove(questNum, 0);

                    answerNextClick.addEventListener('click', () => {
                        let tl = gsap.timeline({
                            onComplete: () => {
                                containerQuestBottom.removeChild(containerQuestBottomTextDiv);
                                containerQuestBottom.removeChild(containerQuestBottomButtons);
                                container.removeChild(containerQuestBottom);
                                this.wrapperBottom.removeChild(buttonBack);
                                this.questionCat_2_8();
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

    questionCat_2_8() {
        const questNum = 8;
        const answerWrightNum = 0;

        if (localStorage.getItem(`progressChildLove_${questNum}`) === null ||
            localStorage.getItem(`progressChildLove_${questNum}`) >= 0) {
            localStorage.setItem(`progressChildLove_${questNum}`, JSON.stringify(0));
        }

        this.questionLoad.questionBlock (
            '',
            'Любимым городом Марины Ивановны был город .... Этому городу она посвятила десятки стихотворений:',
            'Москва',
            'Петербург',
            'Париж'
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
                    this.localSaveChildLove(questNum, 1);

                    answerNextClick.addEventListener('click', () => {
                        let tl = gsap.timeline({
                            onComplete: () => {
                                containerQuestBottom.removeChild(containerQuestBottomTextDiv);
                                containerQuestBottom.removeChild(containerQuestBottomButtons);
                                container.removeChild(containerQuestBottom);
                                this.wrapperBottom.removeChild(buttonBack);
                                this.questionCat_2_9();
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
                    this.localSaveChildLove(questNum, 0);

                    answerNextClick.addEventListener('click', () => {
                        let tl = gsap.timeline({
                            onComplete: () => {
                                containerQuestBottom.removeChild(containerQuestBottomTextDiv);
                                containerQuestBottom.removeChild(containerQuestBottomButtons);
                                container.removeChild(containerQuestBottom);
                                this.wrapperBottom.removeChild(buttonBack);
                                this.questionCat_2_9();
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

    questionCat_2_9() {
        const questNum = 9;
        const answerWrightNum = 2;

        if (localStorage.getItem(`progressChildLove_${questNum}`) === null ||
            localStorage.getItem(`progressChildLove_${questNum}`) >= 0) {
            localStorage.setItem(`progressChildLove_${questNum}`, JSON.stringify(0));
        }

        this.questionLoad.questionBlock (
            '',
            'Это стихотворение Цветаевой написано до эмиграции:',
            '«Берлину. Дождь убаюкивает боль»',
            '«Я тебя отвоюю у всех земель, у всех небес»',
            '«Умирая не скажу: была»'
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
                    this.localSaveChildLove(questNum, 1);

                    answerNextClick.addEventListener('click', () => {
                        let tl = gsap.timeline({
                            onComplete: () => {
                                containerQuestBottom.removeChild(containerQuestBottomTextDiv);
                                containerQuestBottom.removeChild(containerQuestBottomButtons);
                                container.removeChild(containerQuestBottom);
                                this.wrapperBottom.removeChild(buttonBack);
                                this.questionCat_2_10();
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
                    this.localSaveChildLove(questNum, 0);

                    answerNextClick.addEventListener('click', () => {
                        let tl = gsap.timeline({
                            onComplete: () => {
                                containerQuestBottom.removeChild(containerQuestBottomTextDiv);
                                containerQuestBottom.removeChild(containerQuestBottomButtons);
                                container.removeChild(containerQuestBottom);
                                this.wrapperBottom.removeChild(buttonBack);
                                this.questionCat_2_10();
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

    questionCat_2_10() {
        const questNum = 10;
        const answerWrightNum = 0;

        if (localStorage.getItem(`progressChildLove_${questNum}`) === null ||
            localStorage.getItem(`progressChildLove_${questNum}`) >= 0) {
            localStorage.setItem(`progressChildLove_${questNum}`, JSON.stringify(0));
        }

        this.questionLoad.questionBlock (
            '',
            'Какое стихотворение Цветаевой звучит в фильме Эльдара Рязанова «О бедном гусаре замолвите слово:',
            '«Генералам 1812»',
            '«Двенадцать»',
            '«Сомкнутым строем»'
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
                    this.localSaveChildLove(questNum, 1);

                    answerNextClick.addEventListener('click', () => {
                        let tl = gsap.timeline({
                            onComplete: () => {
                                containerQuestBottom.removeChild(containerQuestBottomTextDiv);
                                containerQuestBottom.removeChild(containerQuestBottomButtons);
                                container.removeChild(containerQuestBottom);
                                this.wrapperBottom.removeChild(buttonBack);
                                this.questionCat_2_11();
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
                    this.localSaveChildLove(questNum, 0);

                    answerNextClick.addEventListener('click', () => {
                        let tl = gsap.timeline({
                            onComplete: () => {
                                containerQuestBottom.removeChild(containerQuestBottomTextDiv);
                                containerQuestBottom.removeChild(containerQuestBottomButtons);
                                container.removeChild(containerQuestBottom);
                                this.wrapperBottom.removeChild(buttonBack);
                                this.questionCat_2_11();
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

    questionCat_2_11() {
        const questNum = 11;
        const answerWrightNum = 1;

        if (localStorage.getItem(`progressChildLove_${questNum}`) === null ||
            localStorage.getItem(`progressChildLove_${questNum}`) >= 0) {
            localStorage.setItem(`progressChildLove_${questNum}`, JSON.stringify(0));
        }

        this.questionLoad.questionBlock (
            '',
            'В этом фильме Эльдара Рязанова звучит романс на стихи Марины Ивановны «Под лаской плюшевого пледа» ...',
            '«Служебный роман»',
            '«Жестокий романс»',
            '«Зигзаг удачи»'
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
                    this.localSaveChildLove(questNum, 1);

                    answerNextClick.addEventListener('click', () => {
                        let tl = gsap.timeline({
                            onComplete: () => {
                                containerQuestBottom.removeChild(containerQuestBottomTextDiv);
                                containerQuestBottom.removeChild(containerQuestBottomButtons);
                                container.removeChild(containerQuestBottom);
                                this.wrapperBottom.removeChild(buttonBack);
                                this.questionCat_2_12();
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
                    this.localSaveChildLove(questNum, 0);

                    answerNextClick.addEventListener('click', () => {
                        let tl = gsap.timeline({
                            onComplete: () => {
                                containerQuestBottom.removeChild(containerQuestBottomTextDiv);
                                containerQuestBottom.removeChild(containerQuestBottomButtons);
                                container.removeChild(containerQuestBottom);
                                this.wrapperBottom.removeChild(buttonBack);
                                this.questionCat_2_12();
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

    questionCat_2_12() {
        const questNum = 12;
        const answerWrightNum = 1;

        if (localStorage.getItem(`progressChildLove_${questNum}`) === null ||
            localStorage.getItem(`progressChildLove_${questNum}`) >= 0) {
            localStorage.setItem(`progressChildLove_${questNum}`, JSON.stringify(0));
        }

        this.questionLoad.questionBlock (
            '',
            'Моя маленькая (Ландыш белоснежный) эти строки Цветаева посвятила ...',
            'своей дочери Ариадне',
            'Софье Голлидэй',
            'Софье Парнок'
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
                    this.localSaveChildLove(questNum, 1);

                    answerNextClick.addEventListener('click', () => {
                        let tl = gsap.timeline({
                            onComplete: () => {
                                containerQuestBottom.removeChild(containerQuestBottomTextDiv);
                                containerQuestBottom.removeChild(containerQuestBottomButtons);
                                container.removeChild(containerQuestBottom);
                                this.wrapperBottom.removeChild(buttonBack);
                                this.questionCat_2_13();
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
                    this.localSaveChildLove(questNum, 0);

                    answerNextClick.addEventListener('click', () => {
                        let tl = gsap.timeline({
                            onComplete: () => {
                                containerQuestBottom.removeChild(containerQuestBottomTextDiv);
                                containerQuestBottom.removeChild(containerQuestBottomButtons);
                                container.removeChild(containerQuestBottom);
                                this.wrapperBottom.removeChild(buttonBack);
                                this.questionCat_2_13();
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

    questionCat_2_13() {
        const questNum = 13;
        const answerWrightNum = 0;

        if (localStorage.getItem(`progressChildLove_${questNum}`) === null ||
            localStorage.getItem(`progressChildLove_${questNum}`) >= 0) {
            localStorage.setItem(`progressChildLove_${questNum}`, JSON.stringify(0));
        }

        this.questionLoad.questionBlock (
            '',
            'Известна стихотворная перекличка Арсения Тарковского и Марины Цветаевой. Тарковский посвятил Цветаевой несколько стихотворений, одно из них ...',
            '«Все, все связалось, даже воздух самый»',
            '«Пляшет перед звёздами звезда»',
            '«Музе»'
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
                    this.localSaveChildLove(questNum, 1);

                    answerNextClick.addEventListener('click', () => {
                        let tl = gsap.timeline({
                            onComplete: () => {
                                containerQuestBottom.removeChild(containerQuestBottomTextDiv);
                                containerQuestBottom.removeChild(containerQuestBottomButtons);
                                container.removeChild(containerQuestBottom);
                                this.wrapperBottom.removeChild(buttonBack);
                                this.questionCat_2_14();
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
                    this.localSaveChildLove(questNum, 0);

                    answerNextClick.addEventListener('click', () => {
                        let tl = gsap.timeline({
                            onComplete: () => {
                                containerQuestBottom.removeChild(containerQuestBottomTextDiv);
                                containerQuestBottom.removeChild(containerQuestBottomButtons);
                                container.removeChild(containerQuestBottom);
                                this.wrapperBottom.removeChild(buttonBack);
                                this.questionCat_2_14();
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

    questionCat_2_14() {
        const questNum = 14;
        const answerWrightNum = 0;

        if (localStorage.getItem(`progressChildLove_${questNum}`) === null ||
            localStorage.getItem(`progressChildLove_${questNum}`) >= 0) {
            localStorage.setItem(`progressChildLove_${questNum}`, JSON.stringify(0));
        }

        this.questionLoad.questionBlock (
            '',
            'Поэму – сказку «Царь девица» Цветаева пишет с 14 июля по 17 сентября ...',
            '1920 года',
            '1939 года',
            '1922 года'
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
                    this.localSaveChildLove(questNum, 1);

                    answerNextClick.addEventListener('click', () => {
                        let tl = gsap.timeline({
                            onComplete: () => {
                                containerQuestBottom.removeChild(containerQuestBottomTextDiv);
                                containerQuestBottom.removeChild(containerQuestBottomButtons);
                                container.removeChild(containerQuestBottom);
                                this.wrapperBottom.removeChild(buttonBack);
                                this.questionCat_2_15();
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
                    this.localSaveChildLove(questNum, 0);

                    answerNextClick.addEventListener('click', () => {
                        let tl = gsap.timeline({
                            onComplete: () => {
                                containerQuestBottom.removeChild(containerQuestBottomTextDiv);
                                containerQuestBottom.removeChild(containerQuestBottomButtons);
                                container.removeChild(containerQuestBottom);
                                this.wrapperBottom.removeChild(buttonBack);
                                this.questionCat_2_15();
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

    questionCat_2_15() {
        const questNum = 15;
        const answerWrightNum = 1;

        if (localStorage.getItem(`progressChildLove_${questNum}`) === null ||
            localStorage.getItem(`progressChildLove_${questNum}`) >= 0) {
            localStorage.setItem(`progressChildLove_${questNum}`, JSON.stringify(0));
        }

        this.questionLoad.questionBlock (
            '',
            'В 1921 году, после восьмилетнего перерыва, в частном издательстве «Костры» вышла небольшая книжка Цветаевой, написанных с января 1917 года по декабрь 1920 ...',
            '«Из двух книг»',
            '«Версты»',
            '«Ремесло»'
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
                    this.localSaveChildLove(questNum, 1);

                    answerNextClick.addEventListener('click', () => {
                        let tl = gsap.timeline({
                            onComplete: () => {
                                containerQuestBottom.removeChild(containerQuestBottomTextDiv);
                                containerQuestBottom.removeChild(containerQuestBottomButtons);
                                container.removeChild(containerQuestBottom);
                                this.wrapperBottom.removeChild(buttonBack);
                                this.questionCat_2_16();
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
                    this.localSaveChildLove(questNum, 0);

                    answerNextClick.addEventListener('click', () => {
                        let tl = gsap.timeline({
                            onComplete: () => {
                                containerQuestBottom.removeChild(containerQuestBottomTextDiv);
                                containerQuestBottom.removeChild(containerQuestBottomButtons);
                                container.removeChild(containerQuestBottom);
                                this.wrapperBottom.removeChild(buttonBack);
                                this.questionCat_2_16();
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

    questionCat_2_16() {
        const questNum = 16;
        const answerWrightNum = 0;

        if (localStorage.getItem(`progressChildLove_${questNum}`) === null ||
            localStorage.getItem(`progressChildLove_${questNum}`) >= 0) {
            localStorage.setItem(`progressChildLove_${questNum}`, JSON.stringify(0));
        }

        this.questionLoad.questionBlock (
            '',
            'По возвращению в Россию Цветаева переводит на французский язык ...',
            'Михаила Лермонтова',
            'Александра Пушкина',
            'свои стихи'
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
                    this.localSaveChildLove(questNum, 1);

                    answerNextClick.addEventListener('click', () => {
                        let tl = gsap.timeline({
                            onComplete: () => {
                                containerQuestBottom.removeChild(containerQuestBottomTextDiv);
                                containerQuestBottom.removeChild(containerQuestBottomButtons);
                                container.removeChild(containerQuestBottom);
                                this.wrapperBottom.removeChild(buttonBack);
                                this.questionCat_2_17();
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
                    this.localSaveChildLove(questNum, 0);

                    answerNextClick.addEventListener('click', () => {
                        let tl = gsap.timeline({
                            onComplete: () => {
                                containerQuestBottom.removeChild(containerQuestBottomTextDiv);
                                containerQuestBottom.removeChild(containerQuestBottomButtons);
                                container.removeChild(containerQuestBottom);
                                this.wrapperBottom.removeChild(buttonBack);
                                this.questionCat_2_17();
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

    questionCat_2_17() {
        const questNum = 17;
        const answerWrightNum = 0;

        if (localStorage.getItem(`progressChildLove_${questNum}`) === null ||
            localStorage.getItem(`progressChildLove_${questNum}`) >= 0) {
            localStorage.setItem(`progressChildLove_${questNum}`, JSON.stringify(0));
        }

        this.questionLoad.questionBlock (
            '',
            'Равенство дара души и глагола – вот ...',
            'поэт',
            'гармония',
            'счастье'
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
                    this.localSaveChildLove(questNum, 1);

                    answerNextClick.addEventListener('click', () => {
                        let tl = gsap.timeline({
                            onComplete: () => {
                                containerQuestBottom.removeChild(containerQuestBottomTextDiv);
                                containerQuestBottom.removeChild(containerQuestBottomButtons);
                                container.removeChild(containerQuestBottom);
                                this.wrapperBottom.removeChild(buttonBack);
                                this.questionCat_2_18();
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
                    this.localSaveChildLove(questNum, 0);

                    answerNextClick.addEventListener('click', () => {
                        let tl = gsap.timeline({
                            onComplete: () => {
                                containerQuestBottom.removeChild(containerQuestBottomTextDiv);
                                containerQuestBottom.removeChild(containerQuestBottomButtons);
                                container.removeChild(containerQuestBottom);
                                this.wrapperBottom.removeChild(buttonBack);
                                this.questionCat_2_18();
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

    questionCat_2_18() {
        const questNum = 18;
        const answerWrightNum = 0;

        if (localStorage.getItem(`progressChildLove_${questNum}`) === null ||
            localStorage.getItem(`progressChildLove_${questNum}`) >= 0) {
            localStorage.setItem(`progressChildLove_${questNum}`, JSON.stringify(0));
        }

        this.questionLoad.questionBlock (
            '',
            '«...я совсем не верю в существование бога и загробной жизни. Отсюда безнадежность, ужас старости и смерти. Полная неспособность природы — молиться и покоряться. Безумная любовь к жизни, судорожная, лихорадочная жажда жить...».<br>С этими строками Марина Ивановна обратилась к ...',
            'Владимиру Розанову',
            'Максиму Волошину',
            'Арсению Тарковскому'
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
                    this.localSaveChildLove(questNum, 1);

                    answerNextClick.addEventListener('click', () => {
                        let tl = gsap.timeline({
                            onComplete: () => {
                                containerQuestBottom.removeChild(containerQuestBottomTextDiv);
                                containerQuestBottom.removeChild(containerQuestBottomButtons);
                                container.removeChild(containerQuestBottom);
                                this.wrapperBottom.removeChild(buttonBack);
                                this.questionCat_2_19();
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
                    this.localSaveChildLove(questNum, 0);

                    answerNextClick.addEventListener('click', () => {
                        let tl = gsap.timeline({
                            onComplete: () => {
                                containerQuestBottom.removeChild(containerQuestBottomTextDiv);
                                containerQuestBottom.removeChild(containerQuestBottomButtons);
                                container.removeChild(containerQuestBottom);
                                this.wrapperBottom.removeChild(buttonBack);
                                this.questionCat_2_19();
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

    questionCat_2_19() {
        const questNum = 19;
        const answerWrightNum = 1;

        if (localStorage.getItem(`progressChildLove_${questNum}`) === null ||
            localStorage.getItem(`progressChildLove_${questNum}`) >= 0) {
            localStorage.setItem(`progressChildLove_${questNum}`, JSON.stringify(0));
        }

        this.questionLoad.questionBlock (
            '',
            'По признанию Цветаевой её вечную неугасимую тоску по иному миру выражает строка из Плаванья «Бодлера» ... - корабль плывущий в Эльдорадо',
            'жизнь наша',
            'душа наша',
            'судьба наша'
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
                    this.localSaveChildLove(questNum, 1);

                    answerNextClick.addEventListener('click', () => {
                        let tl = gsap.timeline({
                            onComplete: () => {
                                containerQuestBottom.removeChild(containerQuestBottomTextDiv);
                                containerQuestBottom.removeChild(containerQuestBottomButtons);
                                container.removeChild(containerQuestBottom);
                                this.wrapperBottom.removeChild(buttonBack);
                                this.questionCat_2_20();
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
                    this.localSaveChildLove(questNum, 0);

                    answerNextClick.addEventListener('click', () => {
                        let tl = gsap.timeline({
                            onComplete: () => {
                                containerQuestBottom.removeChild(containerQuestBottomTextDiv);
                                containerQuestBottom.removeChild(containerQuestBottomButtons);
                                container.removeChild(containerQuestBottom);
                                this.wrapperBottom.removeChild(buttonBack);
                                this.questionCat_2_20();
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

    questionCat_2_20() {
        const questNum = 20;
        const answerWrightNum = 1;

        if (localStorage.getItem(`progressChildLove_${questNum}`) === null ||
            localStorage.getItem(`progressChildLove_${questNum}`) >= 0) {
            localStorage.setItem(`progressChildLove_${questNum}`, JSON.stringify(0));
        }

        this.questionLoad.questionBlock (
            '',
            'Приступая к новой большой вещи, начиная новую тетрадь, она писала вначале: ...',
            '«Дай Бог!»',
            '«О Орфей»',
            '«С Богом!»'
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
                    this.localSaveChildLove(questNum, 1);

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
                    this.localSaveChildLove(questNum, 0);

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

export { QuestCat_2 };