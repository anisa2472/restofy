import restos from '../data/resto.js';
import './card-resto.js';

class RestoList extends HTMLElement {
    connectedCallback() {
        this._restos = restos;
        this.render();
    }

    render() {
        this.innerHTML = ``;
        this._restos.forEach((resto) => {
            const restoElement = document.createElement('card-resto');
            restoElement.resto = resto;
            this.appendChild(restoElement);
        });
    }
}

customElements.define('resto-list', RestoList);
