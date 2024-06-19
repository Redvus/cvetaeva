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
            'Как правильно называется сказка Э.Т.А. Гофмана?',
            '«Щелкунчик»',
            '«Щелкунчик и Мышиный король»',
            '«Мышиный король и Щелкунчик»'
        );

        this.questionLoad.answerBlock(answerWrightNum, '', '');

        let answerVar_1 = document.getElementById('answerVar_1'),
            answerVar_2 = document.getElementById('answerVar_2'),
            answerVar_3 = document.getElementById('answerVar_3'),
            answerVarArray = [answerVar_1, answerVar_2, answerVar_3],
            containerQuest = document.querySelector('.container-quest'),
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
        const answerWrightNum = 1;

        if (localStorage.getItem(`progressSecretHit_${questNum}`) === null ||
            localStorage.getItem(`progressSecretHit_${questNum}`) >= 0) {
            localStorage.setItem(`progressSecretHit_${questNum}`, JSON.stringify(0));
        }

        this.questionLoad.questionBlock (
            '',
            'Как правильно называется сказка Э.Т.А. Гофмана?',
            '«Щелкунчик»',
            '«Щелкунчик и Мышиный»',
            '«Мышиный король и Щелкунчик»'
        );

        this.questionLoad.answerBlock(answerWrightNum, '', '');

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
                    this.localSaveSecretHit(questNum, 1);

                    answerNextClick.addEventListener('click', () => {
                        let tl = gsap.timeline({
                            onComplete: () => {
                                containerQuestBottom.removeChild(containerQuestBottomTextDiv);
                                containerQuestBottom.removeChild(containerQuestBottomButtons);
                                // this.questionCat_1_3();
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
                                // this.questionCat_1_3();
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