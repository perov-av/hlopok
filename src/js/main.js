
// Magic button
let button = document.getElementById('button');

button.addEventListener('mouseenter', function(){
	for(let i=0; i < 50; i++){
		let spark = document.createElement('i');
		spark.classList.add('spark');
// Рэндомная позиция
		const randomX = (Math.random() - 0.5) * window.innerWidth;
		const randomY = (Math.random() - 0.5) * window.innerHeight;

		spark.style.setProperty('--x', randomX + 'px');
		spark.style.setProperty('--y', randomY + 'px');

// Рэндомный размер
		const randomSize = Math.random() * 8 + 2;
		spark.style.width = randomSize + 'px';
		spark.style.height = randomSize + 'px';

		const duration = Math.random() * 2 + 0.5;
		spark.style.animation = 'animate ${duration}s ease-out forwards';

// Добавляем пузырики
		button.appendChild(spark);
// Удаляем пузырики
		setTimeout(function(){
			spark.remove();
		}, 2000);
	}
});


// 3D вращение
// VanillaTilt.init(document.querySelectorAll(".sci li a"), {
// 	max: 25,
// 	speed: 400,
// 	glare: true,
// 	"max-glare": 1,
// });

// SWIPER
var swiper = new Swiper('.swiper-container', {
	effect: 'cards',
	grabCursor: true,
	centeredSlides: true,
	slidesPerView: 'auto',
	slidesOffsetBefore: 50,
	spaceBetween: 20,
	mousewheel: true,
	slidesPerView: 1,
	coverflowEffect: {
		rotate: 0,
		stretch: 0,
		depth: 200,
		modifier: 1,
		slideShadows: true,
	},
	// navigation: {
	// 	nextEl: '.swiper-button-next',
	// 	prevEl: '.swiper-button-prev',
	// },
	loop: true,
	autoplay: {
	delay: 4000,
	disableOnInteraction: false
	},
	// breakpoints: {
	// 	580: {
	// 		slidesPerView: 1,
	// 		spaceBetween: 15,
	// 	},
	// 	768: {
	// 		slidesPerView: 2,
	// 		spaceBetween: 15,
	// 	},
	// 	1024: {
	// 		slidesPerView: 3,
	// 		spaceBetween: 15,
	// 	},
});


// toggle MENU
let toggle = document.querySelector ('.toggle');
let nav = document.querySelector ('.header__menu')
toggle.onclick = function() {
	toggle.classList.toggle('active')
	nav.classList.toggle('active')
};
nav.onclick = function() {
	toggle.classList.remove('active')
	nav.classList.remove('active')
}

// Видео 
function toggleV() {
	var trailer = document.querySelector('.trailer');
	var video = document.querySelector('video');
	trailer.classList.toggle('active-video');
	video.currentTime = 0;
	video.pause();
};

// Движение мышью с кругом
document.querySelectorAll('.about__text').forEach(function(box){
	box.addEventListener('mousemove', function(e){
		let x = e.pageX - box.offsetLeft;
		let y = e.pageY - box.offsetTop;

		document.querySelectorAll('span').forEach(function(span){
			span.style.left = x + 'px';
			span.style.top = y + 'px';
		})
		
	})
})

// Пузырьки на заднем фоне
function createBuble(){
	const section = document.querySelector('.service');
	const createElement = document.createElement('span');
	var size = Math.random() * 60;

	createElement.style.width = 20 + size + 'px';
	createElement.style.height = 20 + size + 'px';
	createElement.style.left = Math.random() * innerWidth + 'px';
	section.appendChild(createElement);

	setTimeout(() => {
		createElement.remove()
	}, 4000);
}
setInterval(createBuble,50);

// Полоски на кнопки с городами
document.addEventListener('DOMContentLoaded', function(){
	let btnsLi = document.querySelectorAll('nav.address-nav ul li');
	btnsLi.forEach(function(btnLi){
		const spans = [];
		for (let i=0; i<40; i++){
			let span = document.createElement('span');
			span.style.top = `${i * 2}px`
			spans.push(span);
			btnLi.appendChild(span);

			let randomDelay = (Math.random() * 0.75) + 0;
			span.style.transitionDelay = randomDelay + 's';
		}
	})
});

// Фильтрация городов
const filterAddressCard = document.querySelectorAll('.address__card');

document.querySelector('nav.address-nav').addEventListener('click', event => {
	if (event.target.tagName !== 'LI')  return false;
	let cityClass = document.querySelectorAll('nav.address-nav ul li')

	cityClass.forEach( el => {
		el.classList.remove('active');
	})
	// city.classList.remove('active');
	event.target.classList.add('active');
	let filterClass = event.target.dataset['f'];
	filterAddressCard.forEach( elem => {
		elem.classList.remove('hide');
		if(!elem.classList.contains(filterClass) && filterClass!== 'all') {
			elem.classList.add('hide');
		}
	});
});


// Плавный скролл
const anchors = document.querySelectorAll('a[href*="#"]');

for(let anchor of anchors) {
	anchor.addEventListener('click', function(e) {
		e.preventDefault();

		const blockID = anchor.getAttribute('href').substr(1);
		document.getElementById(blockID).scrollIntoView({
			behavior: 'smooth',
			block: 'start',
		})
	})
}