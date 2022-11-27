class NavBar extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
			<div class="header-hamburger-menu">
				<button
					tabindex="2"
					id="hamburgerButton"
					class="header-hamburger-menu__button"
					aria-label="Hamburger menu button"
					type="button"
				>
					<i class="ph-hamburger"></i>
				</button>
			</div>
			<nav id="headerNavigation" class="header-navigation">
				<ul class="header-navigation__list">
					<li class="header-navigation__item">
						<a tabindex="2" href="/"><i class="ph-house"></i>Home</a>
					</li>
					<li class="header-navigation__item">
						<a tabindex="2" href="#"><i class="ph-heart"></i>Favorite</a>
					</li>
					<li class="header-navigation__item">
						<a tabindex="2" href="https://github.com/anisa2472"><i class="ph-phone"></i>About Us</a>
					</li>
				</ul>
			</nav>
		`;
    }
}

customElements.define('nav-bar', NavBar);
