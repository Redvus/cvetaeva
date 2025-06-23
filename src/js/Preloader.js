import { gsap } from 'gsap';

class Preloader {

	constructor(delayLoad = 1) {
		this.delayLoad = delayLoad;
		this.initPreloader();
		this.initAnim();
	}

	initPreloader() {
		this.wrapper = document.getElementById('app');

		this.preloader = document.createElement('div');
		this.preloader.className = 'wrapper__preloader';
		this.preloader.id = 'preloader';
		this.preloader.innerHTML = `
			<img src="/assets/games/cvetaeva/images/Book.gif" alt="preloader">
			<div class="wrapper__preloader_text">Загрузка</div>
		`;

		this.wrapper.appendChild(this.preloader);
	}

	initAnim() {
		let tl = new gsap.timeline({
			onComplete: () => {
				this.wrapper.removeChild(this.preloader);
			}
		});
		tl
			.to(this.preloader, {
				autoAlpha: 0,
				duration: 0.6,
				delay: this.delayLoad
			})
		;
	}
}

export { Preloader };