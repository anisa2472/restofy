import 'regenerator-runtime'; /* for async await transpile */
import '../styles/styles.css';
import './components/nav-bar.js';
import './components/resto-list.js';
import App from './views/app.js';

const app = new App({
    button: document.querySelector('#hamburgerButton'),
    drawer: document.querySelector('#headerNavigation'),
    content: document.querySelector('#main'),
});
