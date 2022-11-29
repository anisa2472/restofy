import DrawerInitiator from '../utils/drawer-initiator.js';
import UrlParser from '../routes/url-parser.js';
import routes from '../routes/routes.js';

class App {
    constructor({ button, drawer, content }) {
        this._button = button;
        this._drawer = drawer;
        this._content = content;

        this._initialAppShell();
    }

    _initialAppShell() {
        DrawerInitiator.init({
            button: this._button,
            drawer: this._drawer,
            content: this._content,
        });
    }

    async renderContent() {
        const url = UrlParser.parseActiveUrlWithCombiner();
        const page = routes[url];

        if (page) {
            this._content.innerHTML = await page.render();
            await page.afterRender();
        } else {
            console.log('tidak ada');
        }
    }
}

export default App;
