import CONFIG from './config.js';

const API_ENDPOINT = {
    LIST_RESTOS: `${CONFIG.BASE_URL}list`,
    DETAIL: (idResto) => `${CONFIG.BASE_URL}detail/${idResto}`,
    IMAGE_RESTOS_MEDIUM: (idImg) => `${CONFIG.BASE_IMAGE_URL}medium/${idImg}`,
};

export default API_ENDPOINT;
