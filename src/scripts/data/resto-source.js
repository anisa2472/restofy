import API_ENDPOINT from '../globals/api-endpoint.js';

class RestoSource {
    static async listRestos() {
        const response = await fetch(API_ENDPOINT.LIST_RESTOS);
        const responseJson = await response.json();
        return responseJson.restaurants;
    }

    static async detailResto(id) {
        const response = await fetch(API_ENDPOINT.DETAIL(id));
        return response.json();
    }

	static async imageResto(id) {
		const response = await fetch(API_ENDPOINT.IMAGE_RESTOS_MEDIUM(id));
		return response.json();
	}
}

export default RestoSource;
