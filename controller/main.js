import { GlassesList } from '../model/GlassesList.js';

let arrGlass = new GlassesList();
arrGlass.saveLocalStore();
arrGlass.getLocalStore('glassesList');
arrGlass.renderGlassesList('vglassesList');

const arrImage = document.querySelectorAll('.vglasses__items img');
arrImage.forEach(img => {
	img.addEventListener('click', e => {
		const id = e.target.getAttribute('data-imgID');
		arrGlass.handelChangeGlasses(id);
	});
});

const removeGlasses = val => {
	const eleInfo = document.getElementById('glassesInfo').textContent;
	const eleAvatar = document.getElementById('avatar').textContent;
	const eleGlasses = document.querySelector('#avatar #glasses');
	if (eleAvatar.length === 0 && eleInfo.length === 0) {
		Swal.fire({
			position: 'center',
			icon: 'error',
			title: 'Oops...',
			text: 'Vui lòng chọn kính bạn nhé',
			showConfirmButton: false,
			timer: 1500,
		});
	}
	switch (val === true) {
		case true: {
			eleGlasses.style.display = 'none';
			break;
		}
		case false: {
			eleGlasses.style.display = 'block';
			break;
		}
		default:
			break;
	}
};
// Khi click before bỏ kính nhưng vẫn giữ nguyên thông tin
document.getElementById('btnBefore').addEventListener('click', e => {
	e.preventDefault();
	removeGlasses(true);
});
// Khi click after hiển thị lại kính và hiển thị thông tin kính vừa bỏ
document.getElementById('btnAfter').addEventListener('click', e => {
	e.preventDefault();
	removeGlasses(false);
});
