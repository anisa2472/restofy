import UrlParser from '../../routes/url-parser.js';
import RestoSource from '../../data/resto-source';
import createRestoDetailTemplate from '../templates/template-creator.js';

const RestoDetail = {
    async render() {
        return `
			<section id="mainContent" class="main-content"></section>`;
    },

    async afterRender() {
        const url = UrlParser.parseActiveUrlWithoutCombiner();
        const resto = await RestoSource.detailResto(url.id);
        const restoImg = await RestoSource.imageResto(
            resto.restaurant.pictureId
        );
        const restoDetail = { ...resto.restaurant, restoImg };
        const restoContainer = document.querySelector('#mainContent');
        restoContainer.innerHTML = createRestoDetailTemplate(restoDetail);
    },
};

export default RestoDetail;
