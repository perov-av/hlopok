
// Magic button
let button = document.getElementById('button');
console.log(button)
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
VanillaTilt.init(document.querySelectorAll(".sci li a"), {
	max: 25,
	speed: 400,
	glare: true,
	"max-glare": 1,
});

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

// Видео 
function toggleV() {
	var trailer = document.querySelector('.trailer');
	var video = document.querySelector('video');
	trailer.classList.toggle('active-video');
	video.currentTime = 0;
	video.pause();
};

// Анимация заголовка
// 1. Делим на спаны
// const text = document.querySelector('.textAnim');
// text.innerHTML = text.textContent.replace(/\S/g, "<span>$&</span>");

// anime.timeline({
// 	loop: true
// })
// .add({
// 	targets: '.text span',
// 	translateY: [-600,0]
// })