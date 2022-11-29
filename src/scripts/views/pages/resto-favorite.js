import RestoSource from '../../data/resto-source';

const RestoFav = {
    async render() {
        return `<h2>RESTAURANTS FAVORITE</h2>`;
    },

    async afterRender() {
        const restos = await RestoSource.listRestos();
        console.log(restos);
    },
};

export default RestoFav;
