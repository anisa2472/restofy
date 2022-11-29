import RestoSource from '../../data/resto-source';

const RestoExplore = {
    async render() {
        return `<h2>RESTAURANTS EXPLORE</h2>`;
    },

    async afterRender() {
        const restos = await RestoSource.listRestos();
        console.log(restos);
    },
};

export default RestoExplore;
