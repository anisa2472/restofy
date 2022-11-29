import RestoExplore from '../views/pages/resto-explore.js';
import RestoFav from '../views/pages/resto-favorite.js';
import RestoDetail from '../views/pages/resto-detail.js';

const routes = {
    '/': RestoExplore,
    '/favorite': RestoFav,
	'/detail/:id': RestoDetail,
};

export default routes;
