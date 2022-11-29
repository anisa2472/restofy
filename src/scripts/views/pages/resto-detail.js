import RestoSource from '../../data/resto-source';

const RestoDetail = {
    async render() {
        return `<h2>RESTAURANT DETAIL</h2>`;
    },

    async afterRender() {
        const restos = await RestoSource.listRestos();
        console.log(restos);
    },
};

export default RestoDetail;
