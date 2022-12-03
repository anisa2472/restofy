class CardResto extends HTMLElement {
    set resto(resto) {
        this._resto = resto;
        this.render();
    }

    render() {
        this.innerHTML = `
		<div class="card-resto__rating">
			<i class="ph-star-fill"></i>
			<span>${this._resto.rating}</span>
		</div>
		<div class="card-resto__image">
			<img src="${this._resto.restoImg}" alt="${this._resto.name} Restaurant">
		</div>
		<div class="card-resto__info">
			<h3 tabindex="6" class="card-resto__info-name">${this._resto.name}</h2>
			<div class="card-resto__info-city">
				<i class="ph-map-pin"></i>
				<span>${this._resto.city}</span>
			</div>
			<p class="card-resto__info-desc">${this._resto.description}</p>
			<a tabindex="6" aria-label="Read more about ${this._resto.name} restaurant" href="#/detail/${this._resto.id}" class="card-resto__info-more">Read More</a>
		</div>
		`;
    }
}

customElements.define('card-resto', CardResto);
