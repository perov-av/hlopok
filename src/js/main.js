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
})
