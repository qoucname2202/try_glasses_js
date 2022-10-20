import { GlassesList } from '../model/GlassesList.js';

let glassesList = new GlassesList();
glassesList.saveLocalStore();
glassesList.getLocalStore('glassesList');
glassesList.renderGlassesList('vglassesList');

const arrImage = document.querySelectorAll('.vglasses__items img');
arrImage.forEach(img => {
	img.addEventListener('click', e => {
		const id = e.target.getAttribute('data-imgID');
		glassesList.handelChangeGlasses(id);
	});
});
