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
    }

    questionCat_2_1() {
        const questNum = 1;
        const answerWrightNum = 1;

        if (localStorage.getItem(`progressChildLove_${questNum}`) === null ||
            localStorage.getItem(`progressChildLove_${questNum}`) >= 0) {
            localStorage.setItem(`progressChildLove_${questNum}`, JSON.stringify(0));
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
                    this.localSaveChildLove(questNum, 1);

                    answerNextClick.addEventListener('click', () => {
                        let tl = gsap.timeline({
                            onComplete: () => {
                                containerQuestBottom.removeChild(containerQuestBottomTextDiv);
                                containerQuestBottom.removeChild(containerQuestBottomButtons);
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
        const answerWrightNum = 1;

        if (localStorage.getItem(`progressChildLove_${questNum}`) === null ||
            localStorage.getItem(`progressChildLove_${questNum}`) >= 0) {
            localStorage.setItem(`progressChildLove_${questNum}`, JSON.stringify(0));
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
                    this.localSaveChildLove(questNum, 1);

                    answerNextClick.addEventListener('click', () => {
                        let tl = gsap.timeline({
                            onComplete: () => {
                                containerQuestBottom.removeChild(containerQuestBottomTextDiv);
                                containerQuestBottom.removeChild(containerQuestBottomButtons);
                                // this.questionCat_2_3();
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
                                // this.questionCat_2_3();
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