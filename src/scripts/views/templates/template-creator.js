import CONFIG from '../../globals/config';

const createRestoItemTemplate = (resto) => `
	<section id="MainContent" class="main-content">
		<h2 tabindex="5" class="main-content__title">
			Restaurant Explore
		</h2>
		<resto-list class="main-content__cards"></resto-list>
	</section>
`;
