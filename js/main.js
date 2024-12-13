"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
// Magic button
var button = document.getElementById('button');
console.log(button);
button.addEventListener('mouseenter', function () {
  var _loop = function _loop() {
    var spark = document.createElement('i');
    spark.classList.add('spark');
    // Рэндомная позиция
    var randomX = (Math.random() - 0.5) * window.innerWidth;
    var randomY = (Math.random() - 0.5) * window.innerHeight;
    spark.style.setProperty('--x', randomX + 'px');
    spark.style.setProperty('--y', randomY + 'px');

    // Рэндомный размер
    var randomSize = Math.random() * 8 + 2;
    spark.style.width = randomSize + 'px';
    spark.style.height = randomSize + 'px';
    var duration = Math.random() * 2 + 0.5;
    spark.style.animation = 'animate ${duration}s ease-out forwards';

    // Добавляем пузырики
    button.appendChild(spark);
    // Удаляем пузырики
    setTimeout(function () {
      spark.remove();
    }, 2000);
  };
  for (var i = 0; i < 50; i++) {
    _loop();
  }
});

// 3D вращение
VanillaTilt.init(document.querySelectorAll(".sci li a"), {
  max: 25,
  speed: 400,
  glare: true,
  "max-glare": 1
});

// SWIPER
var swiper = new Swiper('.swiper-container', _defineProperty(_defineProperty(_defineProperty(_defineProperty({
  effect: 'cards',
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  slidesOffsetBefore: 50,
  spaceBetween: 20,
  mousewheel: true
}, "slidesPerView", 1), "coverflowEffect", {
  rotate: 0,
  stretch: 0,
  depth: 200,
  modifier: 1,
  slideShadows: true
}), "loop", true), "autoplay", {
  delay: 4000,
  disableOnInteraction: false
}));

// toggle MENU
var toggle = document.querySelector('.toggle');
var nav = document.querySelector('.header__menu');
toggle.onclick = function () {
  toggle.classList.toggle('active');
  nav.classList.toggle('active');
};

// Видео 
function toggleV() {
  var trailer = document.querySelector('.trailer');
  var video = document.querySelector('video');
  trailer.classList.toggle('active-video');
  video.currentTime = 0;
  video.pause();
}
;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm5hbWVzIjpbImJ1dHRvbiIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjb25zb2xlIiwibG9nIiwiYWRkRXZlbnRMaXN0ZW5lciIsIl9sb29wIiwic3BhcmsiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwicmFuZG9tWCIsIk1hdGgiLCJyYW5kb20iLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwicmFuZG9tWSIsImlubmVySGVpZ2h0Iiwic3R5bGUiLCJzZXRQcm9wZXJ0eSIsInJhbmRvbVNpemUiLCJ3aWR0aCIsImhlaWdodCIsImR1cmF0aW9uIiwiYW5pbWF0aW9uIiwiYXBwZW5kQ2hpbGQiLCJzZXRUaW1lb3V0IiwicmVtb3ZlIiwiaSIsIlZhbmlsbGFUaWx0IiwiaW5pdCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJtYXgiLCJzcGVlZCIsImdsYXJlIiwic3dpcGVyIiwiU3dpcGVyIiwiX2RlZmluZVByb3BlcnR5IiwiZWZmZWN0IiwiZ3JhYkN1cnNvciIsImNlbnRlcmVkU2xpZGVzIiwic2xpZGVzUGVyVmlldyIsInNsaWRlc09mZnNldEJlZm9yZSIsInNwYWNlQmV0d2VlbiIsIm1vdXNld2hlZWwiLCJyb3RhdGUiLCJzdHJldGNoIiwiZGVwdGgiLCJtb2RpZmllciIsInNsaWRlU2hhZG93cyIsImRlbGF5IiwiZGlzYWJsZU9uSW50ZXJhY3Rpb24iLCJ0b2dnbGUiLCJxdWVyeVNlbGVjdG9yIiwibmF2Iiwib25jbGljayIsInRvZ2dsZVYiLCJ0cmFpbGVyIiwidmlkZW8iLCJjdXJyZW50VGltZSIsInBhdXNlIl0sInNvdXJjZXMiOlsibWFpbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLy8gTWFnaWMgYnV0dG9uXHJcbmxldCBidXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnV0dG9uJyk7XHJcbmNvbnNvbGUubG9nKGJ1dHRvbilcclxuYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCBmdW5jdGlvbigpe1xyXG5cdGZvcihsZXQgaT0wOyBpIDwgNTA7IGkrKyl7XHJcblx0XHRsZXQgc3BhcmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XHJcblx0XHRzcGFyay5jbGFzc0xpc3QuYWRkKCdzcGFyaycpO1xyXG4vLyDQoNGN0L3QtNC+0LzQvdCw0Y8g0L/QvtC30LjRhtC40Y9cclxuXHRcdGNvbnN0IHJhbmRvbVggPSAoTWF0aC5yYW5kb20oKSAtIDAuNSkgKiB3aW5kb3cuaW5uZXJXaWR0aDtcclxuXHRcdGNvbnN0IHJhbmRvbVkgPSAoTWF0aC5yYW5kb20oKSAtIDAuNSkgKiB3aW5kb3cuaW5uZXJIZWlnaHQ7XHJcblxyXG5cdFx0c3Bhcmsuc3R5bGUuc2V0UHJvcGVydHkoJy0teCcsIHJhbmRvbVggKyAncHgnKTtcclxuXHRcdHNwYXJrLnN0eWxlLnNldFByb3BlcnR5KCctLXknLCByYW5kb21ZICsgJ3B4Jyk7XHJcblxyXG4vLyDQoNGN0L3QtNC+0LzQvdGL0Lkg0YDQsNC30LzQtdGAXHJcblx0XHRjb25zdCByYW5kb21TaXplID0gTWF0aC5yYW5kb20oKSAqIDggKyAyO1xyXG5cdFx0c3Bhcmsuc3R5bGUud2lkdGggPSByYW5kb21TaXplICsgJ3B4JztcclxuXHRcdHNwYXJrLnN0eWxlLmhlaWdodCA9IHJhbmRvbVNpemUgKyAncHgnO1xyXG5cclxuXHRcdGNvbnN0IGR1cmF0aW9uID0gTWF0aC5yYW5kb20oKSAqIDIgKyAwLjU7XHJcblx0XHRzcGFyay5zdHlsZS5hbmltYXRpb24gPSAnYW5pbWF0ZSAke2R1cmF0aW9ufXMgZWFzZS1vdXQgZm9yd2FyZHMnO1xyXG5cclxuLy8g0JTQvtCx0LDQstC70Y/QtdC8INC/0YPQt9GL0YDQuNC60LhcclxuXHRcdGJ1dHRvbi5hcHBlbmRDaGlsZChzcGFyayk7XHJcbi8vINCj0LTQsNC70Y/QtdC8INC/0YPQt9GL0YDQuNC60LhcclxuXHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcclxuXHRcdFx0c3BhcmsucmVtb3ZlKCk7XHJcblx0XHR9LCAyMDAwKTtcclxuXHR9XHJcbn0pO1xyXG5cclxuLy8gM0Qg0LLRgNCw0YnQtdC90LjQtVxyXG5WYW5pbGxhVGlsdC5pbml0KGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc2NpIGxpIGFcIiksIHtcclxuXHRtYXg6IDI1LFxyXG5cdHNwZWVkOiA0MDAsXHJcblx0Z2xhcmU6IHRydWUsXHJcblx0XCJtYXgtZ2xhcmVcIjogMSxcclxufSk7XHJcblxyXG4vLyBTV0lQRVJcclxudmFyIHN3aXBlciA9IG5ldyBTd2lwZXIoJy5zd2lwZXItY29udGFpbmVyJywge1xyXG5cdGVmZmVjdDogJ2NhcmRzJyxcclxuXHRncmFiQ3Vyc29yOiB0cnVlLFxyXG5cdGNlbnRlcmVkU2xpZGVzOiB0cnVlLFxyXG5cdHNsaWRlc1BlclZpZXc6ICdhdXRvJyxcclxuXHRzbGlkZXNPZmZzZXRCZWZvcmU6IDUwLFxyXG5cdHNwYWNlQmV0d2VlbjogMjAsXHJcblx0bW91c2V3aGVlbDogdHJ1ZSxcclxuXHRzbGlkZXNQZXJWaWV3OiAxLFxyXG5cdGNvdmVyZmxvd0VmZmVjdDoge1xyXG5cdFx0cm90YXRlOiAwLFxyXG5cdFx0c3RyZXRjaDogMCxcclxuXHRcdGRlcHRoOiAyMDAsXHJcblx0XHRtb2RpZmllcjogMSxcclxuXHRcdHNsaWRlU2hhZG93czogdHJ1ZSxcclxuXHR9LFxyXG5cdC8vIG5hdmlnYXRpb246IHtcclxuXHQvLyBcdG5leHRFbDogJy5zd2lwZXItYnV0dG9uLW5leHQnLFxyXG5cdC8vIFx0cHJldkVsOiAnLnN3aXBlci1idXR0b24tcHJldicsXHJcblx0Ly8gfSxcclxuXHRsb29wOiB0cnVlLFxyXG5cdGF1dG9wbGF5OiB7XHJcblx0ZGVsYXk6IDQwMDAsXHJcblx0ZGlzYWJsZU9uSW50ZXJhY3Rpb246IGZhbHNlXHJcblx0fSxcclxuXHQvLyBicmVha3BvaW50czoge1xyXG5cdC8vIFx0NTgwOiB7XHJcblx0Ly8gXHRcdHNsaWRlc1BlclZpZXc6IDEsXHJcblx0Ly8gXHRcdHNwYWNlQmV0d2VlbjogMTUsXHJcblx0Ly8gXHR9LFxyXG5cdC8vIFx0NzY4OiB7XHJcblx0Ly8gXHRcdHNsaWRlc1BlclZpZXc6IDIsXHJcblx0Ly8gXHRcdHNwYWNlQmV0d2VlbjogMTUsXHJcblx0Ly8gXHR9LFxyXG5cdC8vIFx0MTAyNDoge1xyXG5cdC8vIFx0XHRzbGlkZXNQZXJWaWV3OiAzLFxyXG5cdC8vIFx0XHRzcGFjZUJldHdlZW46IDE1LFxyXG5cdC8vIFx0fSxcclxufSk7XHJcblxyXG5cclxuLy8gdG9nZ2xlIE1FTlVcclxubGV0IHRvZ2dsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IgKCcudG9nZ2xlJyk7XHJcbmxldCBuYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yICgnLmhlYWRlcl9fbWVudScpXHJcbnRvZ2dsZS5vbmNsaWNrID0gZnVuY3Rpb24oKSB7XHJcblx0dG9nZ2xlLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpXHJcblx0bmF2LmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpXHJcbn07XHJcblxyXG4vLyDQktC40LTQtdC+IFxyXG5mdW5jdGlvbiB0b2dnbGVWKCkge1xyXG5cdHZhciB0cmFpbGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRyYWlsZXInKTtcclxuXHR2YXIgdmlkZW8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCd2aWRlbycpO1xyXG5cdHRyYWlsZXIuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlLXZpZGVvJyk7XHJcblx0dmlkZW8uY3VycmVudFRpbWUgPSAwO1xyXG5cdHZpZGVvLnBhdXNlKCk7XHJcbn07XHJcblxyXG4vLyDQkNC90LjQvNCw0YbQuNGPINC30LDQs9C+0LvQvtCy0LrQsFxyXG4vLyAxLiDQlNC10LvQuNC8INC90LAg0YHQv9Cw0L3Ri1xyXG4vLyBjb25zdCB0ZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRleHRBbmltJyk7XHJcbi8vIHRleHQuaW5uZXJIVE1MID0gdGV4dC50ZXh0Q29udGVudC5yZXBsYWNlKC9cXFMvZywgXCI8c3Bhbj4kJjwvc3Bhbj5cIik7XHJcblxyXG4vLyBhbmltZS50aW1lbGluZSh7XHJcbi8vIFx0bG9vcDogdHJ1ZVxyXG4vLyB9KVxyXG4vLyAuYWRkKHtcclxuLy8gXHR0YXJnZXRzOiAnLnRleHQgc3BhbicsXHJcbi8vIFx0dHJhbnNsYXRlWTogWy02MDAsMF1cclxuLy8gfSkiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUNBO0FBQ0EsSUFBSUEsTUFBTSxHQUFHQyxRQUFRLENBQUNDLGNBQWMsQ0FBQyxRQUFRLENBQUM7QUFDOUNDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSixNQUFNLENBQUM7QUFDbkJBLE1BQU0sQ0FBQ0ssZ0JBQWdCLENBQUMsWUFBWSxFQUFFLFlBQVU7RUFBQSxJQUFBQyxLQUFBLFlBQUFBLE1BQUEsRUFDdEI7SUFDeEIsSUFBSUMsS0FBSyxHQUFHTixRQUFRLENBQUNPLGFBQWEsQ0FBQyxHQUFHLENBQUM7SUFDdkNELEtBQUssQ0FBQ0UsU0FBUyxDQUFDQyxHQUFHLENBQUMsT0FBTyxDQUFDO0lBQzlCO0lBQ0UsSUFBTUMsT0FBTyxHQUFHLENBQUNDLElBQUksQ0FBQ0MsTUFBTSxDQUFDLENBQUMsR0FBRyxHQUFHLElBQUlDLE1BQU0sQ0FBQ0MsVUFBVTtJQUN6RCxJQUFNQyxPQUFPLEdBQUcsQ0FBQ0osSUFBSSxDQUFDQyxNQUFNLENBQUMsQ0FBQyxHQUFHLEdBQUcsSUFBSUMsTUFBTSxDQUFDRyxXQUFXO0lBRTFEVixLQUFLLENBQUNXLEtBQUssQ0FBQ0MsV0FBVyxDQUFDLEtBQUssRUFBRVIsT0FBTyxHQUFHLElBQUksQ0FBQztJQUM5Q0osS0FBSyxDQUFDVyxLQUFLLENBQUNDLFdBQVcsQ0FBQyxLQUFLLEVBQUVILE9BQU8sR0FBRyxJQUFJLENBQUM7O0lBRWhEO0lBQ0UsSUFBTUksVUFBVSxHQUFHUixJQUFJLENBQUNDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUM7SUFDeENOLEtBQUssQ0FBQ1csS0FBSyxDQUFDRyxLQUFLLEdBQUdELFVBQVUs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