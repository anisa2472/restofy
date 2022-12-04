import UrlParser from '../../routes/url-parser.js';
import RestoSource from '../../data/resto-source';
import { createRestoDetailTemplate } from '../templates/template-creator.js';
import LikeButtonInitiator from '../../utils/like-button-initiator.js';

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

        LikeButtonInitiator.init({
            likeButtonContainer: document.querySelector('#like'),
            resto: {
                id: resto.restaurant.id,
                name: resto.restaurant.name,
                city: resto.restaurant.city,
                rating: resto.restaurant.rating,
                desc: resto.restaurant.description,
            },
        });
    },
};

export default RestoDetail;
