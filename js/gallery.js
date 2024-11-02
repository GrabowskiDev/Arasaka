const N = 84;
const gallery = document.querySelector('.gallery');
const imageTag = document.querySelector('#image-displayed');
const main = document.querySelector('#main');

const nextBtn = document.querySelector('#image-next');
const prevBtn = document.querySelector('#image-prev');
const closeBtn = document.querySelector('#image-close');
let activeImage = 0;

function displayImage() {
	imageTag.src = `img/gallery/Photo${activeImage}.jpg`;
}

//Displaying all photos in gallery
for (let i = 1; i <= 84; i++) {
	let item = document.createElement('div');
	item.classList.add('item');
	item.id = i;

	let img = document.createElement('img');
	img.src = `img/gallery/Photo${i}.jpg`;
	img.alt = `Picture number ${i}`;

	item.appendChild(img);
	gallery.appendChild(item);
}

//Click listeners to all gallery photos
const items = document.querySelectorAll('.item');
items.forEach(item => {
	item.onclick = () => {
		activeImage = Number(item.id);
		displayImage();
		main.classList.add('open');
	};
});

// Picture viewer buttons
function nextImg() {
	activeImage += 1;
	if (activeImage > N) {
		activeImage = 1;
	}
	displayImage();
}

function prevImg() {
	activeImage -= 1;
	if (activeImage <= 0) {
		activeImage = N;
	}
	displayImage();
}

nextBtn.addEventListener('click', nextImg);

prevBtn.addEventListener('click', prevImg);

closeBtn.addEventListener('click', () => {
	main.classList.remove('open');
});

window.addEventListener(
	'keydown',
	function (e) {
		if (e.key == 'ArrowRight') {
			nextImg();
		}
		if (e.key == 'ArrowLeft') {
			prevImg();
		}
	},
	false
);
