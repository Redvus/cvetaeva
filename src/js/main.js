import '../scss/main.scss';

document.querySelector('#app').innerHTML = `
    <div class="container"></div>
    <div class="wrapper__top"></div>
    <div class="wrapper__back"></div>
    <div class="wrapper__bottom"></div>
    <div class="container-quest"></div>
`

const
    container = document.querySelector('.container'),
    wrapper = document.querySelector('.wrapper'),
    wrapperBottom = document.querySelector('.wrapper__bottom'),
    screenBrowserWidth = 400
;