"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
// Magic button
var button = document.getElementById('button');
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
// VanillaTilt.init(document.querySelectorAll(".sci li a"), {
// 	max: 25,
// 	speed: 400,
// 	glare: true,
// 	"max-glare": 1,
// });

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
nav.onclick = function () {
  toggle.classList.remove('active');
  nav.classList.remove('active');
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

// Движение мышью с кругом
document.querySelectorAll('.about__text').forEach(function (box) {
  box.addEventListener('mousemove', function (e) {
    var x = e.pageX - box.offsetLeft;
    var y = e.pageY - box.offsetTop;
    document.querySelectorAll('span').forEach(function (span) {
      span.style.left = x + 'px';
      span.style.top = y + 'px';
    });
  });
});

// Пузырьки на заднем фоне
function createBuble() {
  var section = document.querySelector('.service');
  var createElement = document.createElement('span');
  var size = Math.random() * 60;
  createElement.style.width = 20 + size + 'px';
  createElement.style.height = 20 + size + 'px';
  createElement.style.left = Math.random() * innerWidth + 'px';
  section.appendChild(createElement);
  setTimeout(function () {
    createElement.remove();
  }, 4000);
}
setInterval(createBuble, 50);

// Полоски на кнопки с городами
document.addEventListener('DOMContentLoaded', function () {
  var btnsLi = document.querySelectorAll('nav.address-nav ul li');
  btnsLi.forEach(function (btnLi) {
    var spans = [];
    for (var i = 0; i < 40; i++) {
      var span = document.createElement('span');
      span.style.top = "".concat(i * 2, "px");
      spans.push(span);
      btnLi.appendChild(span);
      var randomDelay = Math.random() * 0.75 + 0;
      span.style.transitionDelay = randomDelay + 's';
    }
  });
});

// Фильтрация городов
var filterAddressCard = document.querySelectorAll('.address__card');
document.querySelector('nav.address-nav').addEventListener('click', function (event) {
  if (event.target.tagName !== 'LI') return false;
  var cityClass = document.querySelectorAll('nav.address-nav ul li');
  cityClass.forEach(function (el) {
    el.classList.remove('active');
  });
  // city.classList.remove('active');
  event.target.classList.add('active');
  var filterClass = event.target.dataset['f'];
  filterAddressCard.forEach(function (elem) {
    elem.classList.remove('hide');
    if (!elem.classList.contains(filterClass) && filterClass !== 'all') {
      elem.classList.add('hide');
    }
  });
});

// Плавный скролл
var anchors = document.querySelectorAll('a[href*="#"]');
var _iterator = _createForOfIteratorHelper(anchors),
  _step;
try {
  var _loop2 = function _loop2() {
    var anchor = _step.value;
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      var blockID = anchor.getAttribute('href').substr(1);
      document.getElementById(blockID).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    });
  };
  for (_iterator.s(); !(_step = _iterator.n()).done;) {
    _loop2();
  }
} catch (err) {
  _iterator.e(err);
} finally {
  _iterator.f();
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm5hbWVzIjpbImJ1dHRvbiIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJhZGRFdmVudExpc3RlbmVyIiwiX2xvb3AiLCJzcGFyayIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJyYW5kb21YIiwiTWF0aCIsInJhbmRvbSIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJyYW5kb21ZIiwiaW5uZXJIZWlnaHQiLCJzdHlsZSIsInNldFByb3BlcnR5IiwicmFuZG9tU2l6ZSIsIndpZHRoIiwiaGVpZ2h0IiwiZHVyYXRpb24iLCJhbmltYXRpb24iLCJhcHBlbmRDaGlsZCIsInNldFRpbWVvdXQiLCJyZW1vdmUiLCJpIiwic3dpcGVyIiwiU3dpcGVyIiwiX2RlZmluZVByb3BlcnR5IiwiZWZmZWN0IiwiZ3JhYkN1cnNvciIsImNlbnRlcmVkU2xpZGVzIiwic2xpZGVzUGVyVmlldyIsInNsaWRlc09mZnNldEJlZm9yZSIsInNwYWNlQmV0d2VlbiIsIm1vdXNld2hlZWwiLCJyb3RhdGUiLCJzdHJldGNoIiwiZGVwdGgiLCJtb2RpZmllciIsInNsaWRlU2hhZG93cyIsImRlbGF5IiwiZGlzYWJsZU9uSW50ZXJhY3Rpb24iLCJ0b2dnbGUiLCJxdWVyeVNlbGVjdG9yIiwibmF2Iiwib25jbGljayIsInRvZ2dsZVYiLCJ0cmFpbGVyIiwidmlkZW8iLCJjdXJyZW50VGltZSIsInBhdXNlIiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJib3giLCJlIiwieCIsInBhZ2VYIiwib2Zmc2V0TGVmdCIsInkiLCJwYWdlWSIsIm9mZnNldFRvcCIsInNwYW4iLCJsZWZ0IiwidG9wIiwiY3JlYXRlQnVibGUiLCJzZWN0aW9uIiwic2l6ZSIsInNldEludGVydmFsIiwiYnRuc0xpIiwiYnRuTGkiLCJzcGFucyIsImNvbmNhdCIsInB1c2giLCJyYW5kb21EZWxheSIsInRyYW5zaXRpb25EZWxheSIsImZpbHRlckFkZHJlc3NDYXJkIiwiZXZlbnQiLCJ0YXJnZXQiLCJ0YWdOYW1lIiwiY2l0eUNsYXNzIiwiZWwiLCJmaWx0ZXJDbGFzcyIsImRhdGFzZXQiLCJlbGVtIiwiY29udGFpbnMiLCJhbmNob3JzIiwiX2l0ZXJhdG9yIiwiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCJfc3RlcCIsIl9sb29wMiIsImFuY2hvciIsInZhbHVlIiwicHJldmVudERlZmF1bHQiLCJibG9ja0lEIiwiZ2V0QXR0cmlidXRlIiwic3Vic3RyIiwic2Nyb2xsSW50b1ZpZXciLCJiZWhhdmlvciIsImJsb2NrIiwicyIsIm4iLCJkb25lIiwiZXJyIiwiZiJdLCJzb3VyY2VzIjpbIm1haW4uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXHJcbi8vIE1hZ2ljIGJ1dHRvblxyXG5sZXQgYnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J1dHRvbicpO1xyXG5cclxuYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCBmdW5jdGlvbigpe1xyXG5cdGZvcihsZXQgaT0wOyBpIDwgNTA7IGkrKyl7XHJcblx0XHRsZXQgc3BhcmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XHJcblx0XHRzcGFyay5jbGFzc0xpc3QuYWRkKCdzcGFyaycpO1xyXG4vLyDQoNGN0L3QtNC+0LzQvdCw0Y8g0L/QvtC30LjRhtC40Y9cclxuXHRcdGNvbnN0IHJhbmRvbVggPSAoTWF0aC5yYW5kb20oKSAtIDAuNSkgKiB3aW5kb3cuaW5uZXJXaWR0aDtcclxuXHRcdGNvbnN0IHJhbmRvbVkgPSAoTWF0aC5yYW5kb20oKSAtIDAuNSkgKiB3aW5kb3cuaW5uZXJIZWlnaHQ7XHJcblxyXG5cdFx0c3Bhcmsuc3R5bGUuc2V0UHJvcGVydHkoJy0teCcsIHJhbmRvbVggKyAncHgnKTtcclxuXHRcdHNwYXJrLnN0eWxlLnNldFByb3BlcnR5KCctLXknLCByYW5kb21ZICsgJ3B4Jyk7XHJcblxyXG4vLyDQoNGN0L3QtNC+0LzQvdGL0Lkg0YDQsNC30LzQtdGAXHJcblx0XHRjb25zdCByYW5kb21TaXplID0gTWF0aC5yYW5kb20oKSAqIDggKyAyO1xyXG5cdFx0c3Bhcmsuc3R5bGUud2lkdGggPSByYW5kb21TaXplICsgJ3B4JztcclxuXHRcdHNwYXJrLnN0eWxlLmhlaWdodCA9IHJhbmRvbVNpemUgKyAncHgnO1xyXG5cclxuXHRcdGNvbnN0IGR1cmF0aW9uID0gTWF0aC5yYW5kb20oKSAqIDIgKyAwLjU7XHJcblx0XHRzcGFyay5zdHlsZS5hbmltYXRpb24gPSAnYW5pbWF0ZSAke2R1cmF0aW9ufXMgZWFzZS1vdXQgZm9yd2FyZHMnO1xyXG5cclxuLy8g0JTQvtCx0LDQstC70Y/QtdC8INC/0YPQt9GL0YDQuNC60LhcclxuXHRcdGJ1dHRvbi5hcHBlbmRDaGlsZChzcGFyayk7XHJcbi8vINCj0LTQsNC70Y/QtdC8INC/0YPQt9GL0YDQuNC60LhcclxuXHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcclxuXHRcdFx0c3BhcmsucmVtb3ZlKCk7XHJcblx0XHR9LCAyMDAwKTtcclxuXHR9XHJcbn0pO1xyXG5cclxuXHJcbi8vIDNEINCy0YDQsNGJ0LXQvdC40LVcclxuLy8gVmFuaWxsYVRpbHQuaW5pdChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnNjaSBsaSBhXCIpLCB7XHJcbi8vIFx0bWF4OiAyNSxcclxuLy8gXHRzcGVlZDogNDAwLFxyXG4vLyBcdGdsYXJlOiB0cnVlLFxyXG4vLyBcdFwibWF4LWdsYXJlXCI6IDEsXHJcbi8vIH0pO1xyXG5cclxuLy8gU1dJUEVSXHJcbnZhciBzd2lwZXIgPSBuZXcgU3dpcGVyKCcuc3dpcGVyLWNvbnRhaW5lcicsIHtcclxuXHRlZmZlY3Q6ICdjYXJkcycsXHJcblx0Z3JhYkN1cnNvcjogdHJ1ZSxcclxuXHRjZW50ZXJlZFNsaWRlczogdHJ1ZSxcclxuXHRzbGlkZXNQZXJWaWV3OiAnYXV0bycsXHJcblx0c2xpZGVzT2Zmc2V0QmVmb3JlOiA1MCxcclxuXHRzcGFjZUJldHdlZW46IDIwLFxyXG5cdG1vdXNld2hlZWw6IHRydWUsXHJcblx0c2xpZGVzUGVyVmlldzogMSxcclxuXHRjb3ZlcmZsb3dFZmZlY3Q6IHtcclxuXHRcdHJvdGF0ZTogMCxcclxuXHRcdHN0cmV0Y2g6IDAsXHJcblx0XHRkZXB0aDogMjAwLFxyXG5cdFx0bW9kaWZpZXI6IDEsXHJcblx0XHRzbGlkZVNoYWRvd3M6IHRydWUsXHJcblx0fSxcclxuXHQvLyBuYXZpZ2F0aW9uOiB7XHJcblx0Ly8gXHRuZXh0RWw6ICcuc3dpcGVyLWJ1dHRvbi1uZXh0JyxcclxuXHQvLyBcdHByZXZFbDogJy5zd2lwZXItYnV0dG9uLXByZXYnLFxyXG5cdC8vIH0sXHJcblx0bG9vcDogdHJ1ZSxcclxuXHRhdXRvcGxheToge1xyXG5cdGRlbGF5OiA0MDAwLFxyXG5cdGRpc2FibGVPbkludGVyYWN0aW9uOiBmYWxzZVxyXG5cdH0sXHJcblx0Ly8gYnJlYWtwb2ludHM6IHtcclxuXHQvLyBcdDU4MDoge1xyXG5cdC8vIFx0XHRzbGlkZXNQZXJWaWV3OiAxLFxyXG5cdC8vIFx0XHRzcGFjZUJldHdlZW46IDE1LFxyXG5cdC8vIFx0fSxcclxuXHQvLyBcdDc2ODoge1xyXG5cdC8vIFx0XHRzbGlkZXNQZXJWaWV3OiAyLFxyXG5cdC8vIFx0XHRzcGFjZUJldHdlZW46IDE1LFxyXG5cdC8vIFx0fSxcclxuXHQvLyBcdDEwMjQ6IHtcclxuXHQvLyBcdFx0c2xpZGVzUGVyVmlldzogMyxcclxuXHQvLyBcdFx0c3BhY2VCZXR3ZWVuOiAxNSxcclxuXHQvLyBcdH0sXHJcbn0pO1xyXG5cclxuXHJcbi8vIHRvZ2dsZSBNRU5VXHJcbmxldCB0b2dnbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yICgnLnRvZ2dsZScpO1xyXG5sZXQgbmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvciAoJy5oZWFkZXJfX21lbnUnKVxyXG50b2dnbGUub25jbGljayA9IGZ1bmN0aW9uKCkge1xyXG5cdHRvZ2dsZS5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKVxyXG5cdG5hdi5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKVxyXG59O1xyXG5uYXYub25jbGljayA9IGZ1bmN0aW9uKCkge1xyXG5cdHRvZ2dsZS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKVxyXG5cdG5hdi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKVxyXG59XHJcblxyXG4vLyDQktC40LTQtdC+IFxyXG5mdW5jdGlvbiB0b2dnbGVWKCkge1xyXG5cdHZhciB0cmFpbGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRyYWlsZXInKTtcclxuXHR2YXIgdmlkZW8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCd2aWRlbycpO1xyXG5cdHRyYWlsZXIuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlLXZpZGVvJyk7XHJcblx0dmlkZW8uY3VycmVudFRpbWUgPSAwO1xyXG5cdHZpZGVvLnBhdXNlKCk7XHJcbn07XHJcblxyXG4vLyDQlNCy0LjQttC10L3QuNC1INC80YvRiNGM0Y4g0YEg0LrRgNGD0LPQvtC8XHJcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5hYm91dF9fdGV4dCcpLmZvckVhY2goZnVuY3Rpb24oYm94KXtcclxuXHRib3guYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgZnVuY3Rpb24oZSl7XHJcblx0XHRsZXQgeCA9IGUucGFnZVggLSBib3gub2Zmc2V0TGVmdDtcclxuXHRcdGxldCB5ID0gZS5wYWdlWSAtIGJveC5vZmZzZXRUb3A7XHJcblxyXG5cdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnc3BhbicpLmZvckVhY2goZnVuY3Rpb24oc3Bhbil7XHJcblx0XHRcdHNwYW4uc3R5bGUubGVmdCA9IHggKyAncHgnO1xyXG5cdFx0XHRzcGFuLnN0eWxlLnRvcCA9IHkgKyAncHgnO1xyXG5cdFx0fSlcclxuXHRcdFxyXG5cdH0pXHJcbn0pXHJcblxyXG4vLyDQn9GD0LfRi9GA0YzQutC4INC90LAg0LfQsNC00L3QtdC8INGE0L7QvdC1XHJcbmZ1bmN0aW9uIGNyZWF0ZUJ1YmxlKCl7XHJcblx0Y29uc3Qgc2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZXJ2aWNlJyk7XHJcblx0Y29uc3QgY3JlYXRlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuXHR2YXIgc2l6ZSA9IE1hdGgucmFuZG9tKCkgKiA2MDtcclxuXHJcblx0Y3JlYXRlRWxlbWVudC5zdHlsZS53aWR0aCA9IDIwICsgc2l6ZSArICdweCc7XHJcblx0Y3JlYXRlRWxlbWVudC5zdHlsZS5oZWlnaHQgPSAyMCArIHNpemUgKyAncHgnO1xyXG5cdGNyZWF0ZUVsZW1lbnQuc3R5bGUubGVmdCA9IE1hdGgucmFuZG9tKCkgKiBpbm5lcldpZHRoICsgJ3B4JztcclxuXHRzZWN0aW9uLmFwcGVuZENoaWxkKGNyZWF0ZUVsZW1lbnQpO1xyXG5cclxuXHRzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdGNyZWF0ZUVsZW1lbnQucmVtb3ZlKClcclxuXHR9LCA0MDAwKTtcclxufVxyXG5zZXRJbnRlcnZhbChjcmVhdGVCdWJsZSw1MCk7XHJcblxyXG4vLyDQn9C+0LvQvtGB0LrQuCDQvdCwINC60L3QvtC/0LrQuCDRgSDQs9C+0YDQvtC00LDQvNC4XHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbigpe1xyXG5cdGxldCBidG5zTGkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCduYXYuYWRkcmVzcy1uYXYgdWwgbGknKTtcclxuXHRidG5zTGkuZm9yRWFjaChmdW5jdGlvbihidG5MaSl7XHJcblx0XHRjb25zdCBzcGFucyA9IFtdO1xyXG5cdFx0Zm9yIChsZXQgaT0wOyBpPDQwOyBpKyspe1xyXG5cdFx0XHRsZXQgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuXHRcdFx0c3Bhbi5zdHlsZS50b3AgPSBgJHtpICogMn1weGBcclxuXHRcdFx0c3BhbnMucHVzaChzcGFuKTtcclxuXHRcdFx0YnRuTGkuYXBwZW5kQ2hpbGQoc3Bhbik7XHJcblxyXG5cdFx0XHRsZXQgcmFuZG9tRGVsYXkgPSAoTWF0aC5yYW5kb20oKSAqIDAuNzUpICsgMDtcclxuXHRcdFx0c3Bhbi5zdHlsZS50cmFuc2l0aW9uRGVsYXkgPSByYW5kb21EZWxheSArICdzJztcclxuXHRcdH1cclxuXHR9KVxyXG59KTtcclxuXHJcbi8vINCk0LjQu9GM0YLRgNCw0YbQuNGPINCz0L7RgNC+0LTQvtCyXHJcbmNvbnN0IGZpbHRlckFkZHJlc3NDYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmFkZHJlc3NfX2NhcmQnKTtcclxuXHJcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ25hdi5hZGRyZXNzLW5hdicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnQgPT4ge1xyXG5cdGlmIChldmVudC50YXJnZXQudGFnTmFtZSAhPT0gJ0xJJykgIHJldHVybiBmYWxzZTtcclxuXHRsZXQgY2l0eUNsYXNzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnbmF2LmFkZHJlc3MtbmF2IHVsIGxpJylcclxuXHJcblx0Y2l0eUNsYXNzLmZvckVhY2goIGVsID0+IHtcclxuXHRcdGVsLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG5cdH0pXHJcblx0Ly8gY2l0eS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuXHRldmVudC50YXJnZXQuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcblx0bGV0IGZpbHRlckNsYXNzID0gZXZlbnQudGFyZ2V0LmRhdGFzZXRbJ2YnXTtcclxuXHRmaWx0ZXJBZGRyZXNzQ2FyZC5mb3JFYWNoKCBlbGVtID0+IHtcclxuXHRcdGVsZW0uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xyXG5cdFx0aWYoIWVsZW0uY2xhc3NMaXN0LmNvbnRhaW5zKGZpbHRlckNsYXNzKSAmJiBmaWx0ZXJDbGFzcyE9PSAnYWxsJykge1xyXG5cdFx0XHRlbGVtLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcclxuXHRcdH1cclxuXHR9KTtcclxufSk7XHJcblxyXG5cclxuLy8g0J/Qu9Cw0LLQvdGL0Lkg0YHQutGA0L7Qu9C7XHJcbmNvbnN0IGFuY2hvcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdhW2hyZWYqPVwiI1wiXScpO1xyXG5cclxuZm9yKGxldCBhbmNob3Igb2YgYW5jaG9ycykge1xyXG5cdGFuY2hvci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcclxuXHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcblx0XHRjb25zdCBibG9ja0lEID0gYW5jaG9yLmdldEF0dHJpYnV0ZSgnaHJlZicpLnN1YnN0cigxKTtcclxuXHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGJsb2NrSUQpLnNjcm9sbEludG9WaWV3KHtcclxuXHRcdFx0YmVoYXZpb3I6ICdzbW9vdGgnLFxyXG5cdFx0XHRibG9jazogJ3N0YXJ0JyxcclxuXHRcdH0pXHJcblx0fSlcclxufSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7QUFDQSxJQUFJQSxNQUFNLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLFFBQVEsQ0FBQztBQUU5Q0YsTUFBTSxDQUFDRyxnQkFBZ0IsQ0FBQyxZQUFZLEVBQUUsWUFBVTtFQUFBLElBQUFDLEtBQUEsWUFBQUEsTUFBQSxFQUN0QjtJQUN4QixJQUFJQyxLQUFLLEdBQUdKLFFBQVEsQ0FBQ0ssYUFBYSxDQUFDLEdBQUcsQ0FBQztJQUN2Q0QsS0FBSyxDQUFDRSxTQUFTLENBQUNDLEdBQUcsQ0FBQyxPQUFPLENBQUM7SUFDOUI7SUFDRSxJQUFNQyxPQUFPLEdBQUcsQ0FBQ0MsSUFBSSxDQUFDQyxNQUFNLENBQUMsQ0FBQyxHQUFHLEdBQUcsSUFBSUMsTUFBTSxDQUFDQyxVQUFVO0lBQ3pELElBQU1DLE9BQU8sR0FBRyxDQUFDSixJQUFJLENBQUNDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsR0FBRyxJQUFJQyxNQUFNLENBQUNHLFdBQVc7SUFFMURWLEtBQUssQ0FBQ1csS0FBSyxDQUFDQyxX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