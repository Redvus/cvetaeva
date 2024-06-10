import { gsap } from "gsap";
import { Question } from "./Question.js";
import { ArrowsAll } from "./ArrowsAll.js";
import { Settings } from "./Settings.js";

class QuestCat_1 {

    constructor(questLocalNum, questLocalValue) {
        this.initQuestLayout();
        // this.localSaveSecretHit();
        this.questLocalNum = questLocalNum;
        this.questLocalValue = questLocalValue;
    }

    initQuestLayout() {
        this.questionLoad = new Question();
        this.arrowBackLoad = new ArrowsAll();
        this.settingsLoad = new Settings();
        this.questTimePaused = 600;
    }

    localSaveSecretHit() {
        localStorage.setItem(`progressSecretHit_${this.questLocalNum}`, JSON.stringify(this.questLocalValue));
        let progressSecretHit_1 = JSON.parse(localStorage.getItem('progressSecretHitAll'));
        let progressSecretHitQuestLocalNum = JSON.parse(localStorage.getItem(`progressSecretHit_${this.questLocalNum}`));
        let progressSecretHit_1Sum = progressSecretHit_1 + progressSecretHitQuestLocalNum;
        localStorage.setItem('progressSecretHitAll', JSON.stringify(progressSecretHit_1Sum));
    }

    questionCat_1_1() {
        let answerWrightNum = 1;

        if (localStorage.getItem('progressSecretHit_1') === null ||
            localStorage.getItem('progressSecretHit_1') >= 0) {
            localStorage.setItem('progressSecretHit_1', JSON.stringify(0));
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
                    const localSaveSecretHit_1 = new QuestCat_1(1, 1);
                    localSaveSecretHit_1.localSaveSecretHit();

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
                    this.localSaveSecretHit(1, 0);

                    answerNextClick.addEventListener('click', () => {
                        let tl = gsap.timeline({
                            onComplete: () => {
                                containerQuestBottom.removeChild(containerQuestBottomTextDiv);
                                containerQuestBottom.removeChild(containerQuestBottomButtons);
                                // this.questionCat_1_2();
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
        let answerWrightNum = 1;

        if (localStorage.getItem('progressSecretHit_2') === null ||
            localStorage.getItem('progressSecretHit_2') >= 0) {
            localStorage.setItem('progressSecretHit_2', JSON.stringify(0));
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
                    const localSaveSecretHit_2 = new QuestCat_1(2, 1);
                    localSaveSecretHit_2.localSaveSecretHit();

                    answerNextClick.addEventListener('click', () => {
                        let tl = gsap.timeline({
                            onComplete: () => {
                                containerQuestBottom.removeChild(containerQuestBottomTextDiv);
                                containerQuestBottom.removeChild(containerQuestBottomButtons);
                                // questionCat_1_2();
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
                    this.localSaveSecretHit(1, 0);

                    answerNextClick.addEventListener('click', () => {
                        let tl = gsap.timeline({
                            onComplete: () => {
                                containerQuestBottom.removeChild(containerQuestBottomTextDiv);
                                containerQuestBottom.removeChild(containerQuestBottomButtons);
                                // this.questionCat_1_2();
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