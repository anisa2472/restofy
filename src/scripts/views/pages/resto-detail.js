import UrlParser from '../../routes/url-parser.js';
import RestoSource from '../../data/resto-source';

const RestoDetail = {
    async render() {
        return `<h2>RESTAURANT DETAIL</h2>`;
    },

    async afterRender() {
        const url = UrlParser.parseActiveUrlWithoutCombiner();
        const resto = await RestoSource.detailResto(url.id);
        console.log(resto.restaurant);
    },
};

export default RestoDetail;
