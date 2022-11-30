import 'regenerator-runtime'; /* for async await transpile */
import '../styles/styles.css';
import './components/nav-bar.js';
import App from './views/app.js';

const app = new App({
    button: document.querySelector('#hamburgerButton'),
    drawer: document.querySelector('#headerNavigation'),
    content: document.querySelector('#main'),
});

window.addEventListener('hashchange', () => {
    app.renderContent();
});

window.addEventListener('load', () => {
    app.renderContent();
});
