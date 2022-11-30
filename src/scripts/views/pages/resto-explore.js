import RestoSource from '../../data/resto-source.js';
import '../../components/card-resto.js';

const RestoExplore = {
    async render() {
        return `
			<section class="main-hero">
				<div class="main-hero__inner">
					<h1 class="main-hero__inner__title">
						Welcome to <span>Restofy</span>
					</h1>
					<p class="main-hero__inner__subtitle">
						Find and try food from restaurants in various cities.
					</p>
				</div>
			</section>
			<section id="MainContent" class="main-content">
				<h2 tabindex="5" class="main-content__title">
					Restaurant Explore
				</h2>
				<div id="MainContentCards" class="main-content__cards"></div>
			</section>
		`;
    },

    async afterRender() {
        const restos = await RestoSource.listRestos();
        const restoContainer = document.querySelector('#MainContentCards');
        restos.forEach(async (resto) => {
            const restoImg = await RestoSource.imageResto(resto.pictureId);
            const _resto = { ...resto, restoImg };
            const restoElement = document.createElement('card-resto');
            restoElement.resto = _resto;
            restoContainer.appendChild(restoElement);
        });
    },
};

export default RestoExplore;
