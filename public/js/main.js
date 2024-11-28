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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm5hbWVzIjpbImJ1dHRvbiIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjb25zb2xlIiwibG9nIiwiYWRkRXZlbnRMaXN0ZW5lciIsIl9sb29wIiwic3BhcmsiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwicmFuZG9tWCIsIk1hdGgiLCJyYW5kb20iLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwicmFuZG9tWSIsImlubmVySGVpZ2h0Iiwic3R5bGUiLCJzZXRQcm9wZXJ0eSIsInJhbmRvbVNpemUiLCJ3aWR0aCIsImhlaWdodCIsImR1cmF0aW9uIiwiYW5pbWF0aW9uIiwiYXBwZW5kQ2hpbGQiLCJzZXRUaW1lb3V0IiwicmVtb3ZlIiwiaSIsIlZhbmlsbGFUaWx0IiwiaW5pdCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJtYXgiLCJzcGVlZCIsImdsYXJlIiwic3dpcGVyIiwiU3dpcGVyIiwiX2RlZmluZVByb3BlcnR5IiwiZWZmZWN0IiwiZ3JhYkN1cnNvciIsImNlbnRlcmVkU2xpZGVzIiwic2xpZGVzUGVyVmlldyIsInNsaWRlc09mZnNldEJlZm9yZSIsInNwYWNlQmV0d2VlbiIsIm1vdXNld2hlZWwiLCJyb3RhdGUiLCJzdHJldGNoIiwiZGVwdGgiLCJtb2RpZmllciIsInNsaWRlU2hhZG93cyIsImRlbGF5IiwiZGlzYWJsZU9uSW50ZXJhY3Rpb24iLCJ0b2dnbGUiLCJxdWVyeVNlbGVjdG9yIiwibmF2Iiwib25jbGljayJdLCJzb3VyY2VzIjpbIm1haW4uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXHJcbi8vIE1hZ2ljIGJ1dHRvblxyXG5sZXQgYnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J1dHRvbicpO1xyXG5jb25zb2xlLmxvZyhidXR0b24pXHJcbmJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgZnVuY3Rpb24oKXtcclxuXHRmb3IobGV0IGk9MDsgaSA8IDUwOyBpKyspe1xyXG5cdFx0bGV0IHNwYXJrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xyXG5cdFx0c3BhcmsuY2xhc3NMaXN0LmFkZCgnc3BhcmsnKTtcclxuLy8g0KDRjdC90LTQvtC80L3QsNGPINC/0L7Qt9C40YbQuNGPXHJcblx0XHRjb25zdCByYW5kb21YID0gKE1hdGgucmFuZG9tKCkgLSAwLjUpICogd2luZG93LmlubmVyV2lkdGg7XHJcblx0XHRjb25zdCByYW5kb21ZID0gKE1hdGgucmFuZG9tKCkgLSAwLjUpICogd2luZG93LmlubmVySGVpZ2h0O1xyXG5cclxuXHRcdHNwYXJrLnN0eWxlLnNldFByb3BlcnR5KCctLXgnLCByYW5kb21YICsgJ3B4Jyk7XHJcblx0XHRzcGFyay5zdHlsZS5zZXRQcm9wZXJ0eSgnLS15JywgcmFuZG9tWSArICdweCcpO1xyXG5cclxuLy8g0KDRjdC90LTQvtC80L3Ri9C5INGA0LDQt9C80LXRgFxyXG5cdFx0Y29uc3QgcmFuZG9tU2l6ZSA9IE1hdGgucmFuZG9tKCkgKiA4ICsgMjtcclxuXHRcdHNwYXJrLnN0eWxlLndpZHRoID0gcmFuZG9tU2l6ZSArICdweCc7XHJcblx0XHRzcGFyay5zdHlsZS5oZWlnaHQgPSByYW5kb21TaXplICsgJ3B4JztcclxuXHJcblx0XHRjb25zdCBkdXJhdGlvbiA9IE1hdGgucmFuZG9tKCkgKiAyICsgMC41O1xyXG5cdFx0c3Bhcmsuc3R5bGUuYW5pbWF0aW9uID0gJ2FuaW1hdGUgJHtkdXJhdGlvbn1zIGVhc2Utb3V0IGZvcndhcmRzJztcclxuXHJcbi8vINCU0L7QsdCw0LLQu9GP0LXQvCDQv9GD0LfRi9GA0LjQutC4XHJcblx0XHRidXR0b24uYXBwZW5kQ2hpbGQoc3BhcmspO1xyXG4vLyDQo9C00LDQu9GP0LXQvCDQv9GD0LfRi9GA0LjQutC4XHJcblx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XHJcblx0XHRcdHNwYXJrLnJlbW92ZSgpO1xyXG5cdFx0fSwgMjAwMCk7XHJcblx0fVxyXG59KTtcclxuXHJcbi8vIDNEINCy0YDQsNGJ0LXQvdC40LVcclxuVmFuaWxsYVRpbHQuaW5pdChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnNjaSBsaSBhXCIpLCB7XHJcblx0bWF4OiAyNSxcclxuXHRzcGVlZDogNDAwLFxyXG5cdGdsYXJlOiB0cnVlLFxyXG5cdFwibWF4LWdsYXJlXCI6IDEsXHJcbn0pO1xyXG5cclxuLy8gU1dJUEVSXHJcbnZhciBzd2lwZXIgPSBuZXcgU3dpcGVyKCcuc3dpcGVyLWNvbnRhaW5lcicsIHtcclxuXHRlZmZlY3Q6ICdjYXJkcycsXHJcblx0Z3JhYkN1cnNvcjogdHJ1ZSxcclxuXHRjZW50ZXJlZFNsaWRlczogdHJ1ZSxcclxuXHRzbGlkZXNQZXJWaWV3OiAnYXV0bycsXHJcblx0c2xpZGVzT2Zmc2V0QmVmb3JlOiA1MCxcclxuXHRzcGFjZUJldHdlZW46IDIwLFxyXG5cdG1vdXNld2hlZWw6IHRydWUsXHJcblx0c2xpZGVzUGVyVmlldzogMSxcclxuXHRjb3ZlcmZsb3dFZmZlY3Q6IHtcclxuXHRcdHJvdGF0ZTogMCxcclxuXHRcdHN0cmV0Y2g6IDAsXHJcblx0XHRkZXB0aDogMjAwLFxyXG5cdFx0bW9kaWZpZXI6IDEsXHJcblx0XHRzbGlkZVNoYWRvd3M6IHRydWUsXHJcblx0fSxcclxuXHQvLyBuYXZpZ2F0aW9uOiB7XHJcblx0Ly8gXHRuZXh0RWw6ICcuc3dpcGVyLWJ1dHRvbi1uZXh0JyxcclxuXHQvLyBcdHByZXZFbDogJy5zd2lwZXItYnV0dG9uLXByZXYnLFxyXG5cdC8vIH0sXHJcblx0bG9vcDogdHJ1ZSxcclxuXHRhdXRvcGxheToge1xyXG5cdGRlbGF5OiA0MDAwLFxyXG5cdGRpc2FibGVPbkludGVyYWN0aW9uOiBmYWxzZVxyXG5cdH0sXHJcblx0Ly8gYnJlYWtwb2ludHM6IHtcclxuXHQvLyBcdDU4MDoge1xyXG5cdC8vIFx0XHRzbGlkZXNQZXJWaWV3OiAxLFxyXG5cdC8vIFx0XHRzcGFjZUJldHdlZW46IDE1LFxyXG5cdC8vIFx0fSxcclxuXHQvLyBcdDc2ODoge1xyXG5cdC8vIFx0XHRzbGlkZXNQZXJWaWV3OiAyLFxyXG5cdC8vIFx0XHRzcGFjZUJldHdlZW46IDE1LFxyXG5cdC8vIFx0fSxcclxuXHQvLyBcdDEwMjQ6IHtcclxuXHQvLyBcdFx0c2xpZGVzUGVyVmlldzogMyxcclxuXHQvLyBcdFx0c3BhY2VCZXR3ZWVuOiAxNSxcclxuXHQvLyBcdH0sXHJcbn0pO1xyXG5cclxuLy8gdG9nZ2xlIE1FTlVcclxuXHJcbmxldCB0b2dnbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yICgnLnRvZ2dsZScpO1xyXG5sZXQgbmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvciAoJy5oZWFkZXJfX21lbnUnKVxyXG50b2dnbGUub25jbGljayA9IGZ1bmN0aW9uKCkge1xyXG5cdHRvZ2dsZS5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKVxyXG5cdG5hdi5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKVxyXG59Il0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFDQTtBQUNBLElBQUlBLE1BQU0sR0FBR0MsUUFBUSxDQUFDQyxjQUFjLENBQUMsUUFBUSxDQUFDO0FBQzlDQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0osTUFBTSxDQUFDO0FBQ25CQSxNQUFNLENBQUNLLGdCQUFnQixDQUFDLFlBQVksRUFBRSxZQUFVO0VBQUEsSUFBQUMsS0FBQSxZQUFBQSxNQUFBLEVBQ3RCO0lBQ3hCLElBQUlDLEtBQUssR0FBR04sUUFBUSxDQUFDTyxhQUFhLENBQUMsR0FBRyxDQUFDO0lBQ3ZDRCxLQUFLLENBQUNFLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLE9BQU8sQ0FBQztJQUM5QjtJQUNFLElBQU1DLE9BQU8sR0FBRyxDQUFDQyxJQUFJLENBQUNDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsR0FBRyxJQUFJQyxNQUFNLENBQUNDLFVBQVU7SUFDekQsSUFBTUMsT0FBTyxHQUFHLENBQUNKLElBQUksQ0FBQ0MsTUFBTSxDQUFDLENBQUMsR0FBRyxHQUFHLElBQUlDLE1BQU0sQ0FBQ0csV0FBVztJQUUxRFYsS0FBSyxDQUFD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