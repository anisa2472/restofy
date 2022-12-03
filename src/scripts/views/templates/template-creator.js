const createRestoDetailTemplate = (resto) => `
	<div class="main-content__header">
		<h2 tabindex="5" class="main-content__header__title">
			${resto.name}
		</h2>
		<div class="main-content__header__rating">
			<i class="ph-star-fill"></i>
			<span>${resto.rating}</span>
		</div>	
		<div class="main-content__header__address">
			<i class="ph-map-pin"></i>
			<span>${resto.address}, ${resto.city}</span>
		</div>
		<div class="main-content__header__image">
			<img src="${resto.restoImg}" alt="${resto.name} Restaurant">
		</div>
		<div class="main-content__header__category">
			${resto.categories
				.map((category) => {
					return `<p>${category.name}</p>`;
				})
				.join(' ')}
		</div>
	</div>
	<div class="main-content__desc">
		<p>${resto.description}</p>
	</div>
	<div class="main-content__menu">
		<h3>Menu</h3>
		<div class="main-content__menu__foods">
			<h4>Foods</h4>
			${resto.menus.foods
				.map((food) => {
					return `<p>${food.name}</p>`;
				})
				.join(' ')}
		</div>
		<div class="main-content__menu__drinks">
			<h4>Drinks</h4>
				${resto.menus.drinks
					.map((drink) => {
						return `<p>${drink.name}</p>`;
					})
					.join(' ')}
		</div>
	</div>
	<div class="main-content__reviews">
		<h3>Reviews</h3>
		<div class="main-content__reviews__review">
			${resto.customerReviews
				.map((review) => {
					return `<p>${review.name}</p>
					<p>${review.date}</p>
					<p>${review.review}</p>`;
				})
				.join(' ')}
		</div>
	</div>
`;

export default createRestoDetailTemplate;
