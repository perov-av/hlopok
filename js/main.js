"use strict";

var _Swiper;
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
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
var swiper = new Swiper('.swiper-container', (_Swiper = {
  effect: 'cards',
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  slidesOffsetBefore: 50,
  spaceBetween: 20,
  mousewheel: true
}, _defineProperty(_Swiper, "slidesPerView", 1), _defineProperty(_Swiper, "coverflowEffect", {
  rotate: 0,
  stretch: 0,
  depth: 200,
  modifier: 1,
  slideShadows: true
}), _defineProperty(_Swiper, "loop", true), _defineProperty(_Swiper, "autoplay", {
  delay: 4000,
  disableOnInteraction: false
}), _Swiper));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm5hbWVzIjpbImJ1dHRvbiIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJhZGRFdmVudExpc3RlbmVyIiwiX2xvb3AiLCJzcGFyayIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJyYW5kb21YIiwiTWF0aCIsInJhbmRvbSIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJyYW5kb21ZIiwiaW5uZXJIZWlnaHQiLCJzdHlsZSIsInNldFByb3BlcnR5IiwicmFuZG9tU2l6ZSIsIndpZHRoIiwiaGVpZ2h0IiwiZHVyYXRpb24iLCJhbmltYXRpb24iLCJhcHBlbmRDaGlsZCIsInNldFRpbWVvdXQiLCJyZW1vdmUiLCJpIiwic3dpcGVyIiwiU3dpcGVyIiwiX1N3aXBlciIsImVmZmVjdCIsImdyYWJDdXJzb3IiLCJjZW50ZXJlZFNsaWRlcyIsInNsaWRlc1BlclZpZXciLCJzbGlkZXNPZmZzZXRCZWZvcmUiLCJzcGFjZUJldHdlZW4iLCJtb3VzZXdoZWVsIiwiX2RlZmluZVByb3BlcnR5Iiwicm90YXRlIiwic3RyZXRjaCIsImRlcHRoIiwibW9kaWZpZXIiLCJzbGlkZVNoYWRvd3MiLCJkZWxheSIsImRpc2FibGVPbkludGVyYWN0aW9uIiwidG9nZ2xlIiwicXVlcnlTZWxlY3RvciIsIm5hdiIsIm9uY2xpY2siLCJ0b2dnbGVWIiwidHJhaWxlciIsInZpZGVvIiwiY3VycmVudFRpbWUiLCJwYXVzZSIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwiYm94IiwiZSIsIngiLCJwYWdlWCIsIm9mZnNldExlZnQiLCJ5IiwicGFnZVkiLCJvZmZzZXRUb3AiLCJzcGFuIiwibGVmdCIsInRvcCIsImNyZWF0ZUJ1YmxlIiwic2VjdGlvbiIsInNpemUiLCJzZXRJbnRlcnZhbCIsImJ0bnNMaSIsImJ0bkxpIiwic3BhbnMiLCJjb25jYXQiLCJwdXNoIiwicmFuZG9tRGVsYXkiLCJ0cmFuc2l0aW9uRGVsYXkiLCJmaWx0ZXJBZGRyZXNzQ2FyZCIsImV2ZW50IiwidGFyZ2V0IiwidGFnTmFtZSIsImNpdHlDbGFzcyIsImVsIiwiZmlsdGVyQ2xhc3MiLCJkYXRhc2V0IiwiZWxlbSIsImNvbnRhaW5zIiwiYW5jaG9ycyIsIl9pdGVyYXRvciIsIl9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyIiwiX3N0ZXAiLCJfbG9vcDIiLCJhbmNob3IiLCJ2YWx1ZSIsInByZXZlbnREZWZhdWx0IiwiYmxvY2tJRCIsImdldEF0dHJpYnV0ZSIsInN1YnN0ciIsInNjcm9sbEludG9WaWV3IiwiYmVoYXZpb3IiLCJibG9jayIsInMiLCJuIiwiZG9uZSIsImVyciIsImYiXSwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlxyXG4vLyBNYWdpYyBidXR0b25cclxubGV0IGJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidXR0b24nKTtcclxuXHJcbmJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgZnVuY3Rpb24oKXtcclxuXHRmb3IobGV0IGk9MDsgaSA8IDUwOyBpKyspe1xyXG5cdFx0bGV0IHNwYXJrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xyXG5cdFx0c3BhcmsuY2xhc3NMaXN0LmFkZCgnc3BhcmsnKTtcclxuLy8g0KDRjdC90LTQvtC80L3QsNGPINC/0L7Qt9C40YbQuNGPXHJcblx0XHRjb25zdCByYW5kb21YID0gKE1hdGgucmFuZG9tKCkgLSAwLjUpICogd2luZG93LmlubmVyV2lkdGg7XHJcblx0XHRjb25zdCByYW5kb21ZID0gKE1hdGgucmFuZG9tKCkgLSAwLjUpICogd2luZG93LmlubmVySGVpZ2h0O1xyXG5cclxuXHRcdHNwYXJrLnN0eWxlLnNldFByb3BlcnR5KCctLXgnLCByYW5kb21YICsgJ3B4Jyk7XHJcblx0XHRzcGFyay5zdHlsZS5zZXRQcm9wZXJ0eSgnLS15JywgcmFuZG9tWSArICdweCcpO1xyXG5cclxuLy8g0KDRjdC90LTQvtC80L3Ri9C5INGA0LDQt9C80LXRgFxyXG5cdFx0Y29uc3QgcmFuZG9tU2l6ZSA9IE1hdGgucmFuZG9tKCkgKiA4ICsgMjtcclxuXHRcdHNwYXJrLnN0eWxlLndpZHRoID0gcmFuZG9tU2l6ZSArICdweCc7XHJcblx0XHRzcGFyay5zdHlsZS5oZWlnaHQgPSByYW5kb21TaXplICsgJ3B4JztcclxuXHJcblx0XHRjb25zdCBkdXJhdGlvbiA9IE1hdGgucmFuZG9tKCkgKiAyICsgMC41O1xyXG5cdFx0c3Bhcmsuc3R5bGUuYW5pbWF0aW9uID0gJ2FuaW1hdGUgJHtkdXJhdGlvbn1zIGVhc2Utb3V0IGZvcndhcmRzJztcclxuXHJcbi8vINCU0L7QsdCw0LLQu9GP0LXQvCDQv9GD0LfRi9GA0LjQutC4XHJcblx0XHRidXR0b24uYXBwZW5kQ2hpbGQoc3BhcmspO1xyXG4vLyDQo9C00LDQu9GP0LXQvCDQv9GD0LfRi9GA0LjQutC4XHJcblx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XHJcblx0XHRcdHNwYXJrLnJlbW92ZSgpO1xyXG5cdFx0fSwgMjAwMCk7XHJcblx0fVxyXG59KTtcclxuXHJcblxyXG4vLyAzRCDQstGA0LDRidC10L3QuNC1XHJcbi8vIFZhbmlsbGFUaWx0LmluaXQoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5zY2kgbGkgYVwiKSwge1xyXG4vLyBcdG1heDogMjUsXHJcbi8vIFx0c3BlZWQ6IDQwMCxcclxuLy8gXHRnbGFyZTogdHJ1ZSxcclxuLy8gXHRcIm1heC1nbGFyZVwiOiAxLFxyXG4vLyB9KTtcclxuXHJcbi8vIFNXSVBFUlxyXG52YXIgc3dpcGVyID0gbmV3IFN3aXBlcignLnN3aXBlci1jb250YWluZXInLCB7XHJcblx0ZWZmZWN0OiAnY2FyZHMnLFxyXG5cdGdyYWJDdXJzb3I6IHRydWUsXHJcblx0Y2VudGVyZWRTbGlkZXM6IHRydWUsXHJcblx0c2xpZGVzUGVyVmlldzogJ2F1dG8nLFxyXG5cdHNsaWRlc09mZnNldEJlZm9yZTogNTAsXHJcblx0c3BhY2VCZXR3ZWVuOiAyMCxcclxuXHRtb3VzZXdoZWVsOiB0cnVlLFxyXG5cdHNsaWRlc1BlclZpZXc6IDEsXHJcblx0Y292ZXJmbG93RWZmZWN0OiB7XHJcblx0XHRyb3RhdGU6IDAsXHJcblx0XHRzdHJldGNoOiAwLFxyXG5cdFx0ZGVwdGg6IDIwMCxcclxuXHRcdG1vZGlmaWVyOiAxLFxyXG5cdFx0c2xpZGVTaGFkb3dzOiB0cnVlLFxyXG5cdH0sXHJcblx0Ly8gbmF2aWdhdGlvbjoge1xyXG5cdC8vIFx0bmV4dEVsOiAnLnN3aXBlci1idXR0b24tbmV4dCcsXHJcblx0Ly8gXHRwcmV2RWw6ICcuc3dpcGVyLWJ1dHRvbi1wcmV2JyxcclxuXHQvLyB9LFxyXG5cdGxvb3A6IHRydWUsXHJcblx0YXV0b3BsYXk6IHtcclxuXHRkZWxheTogNDAwMCxcclxuXHRkaXNhYmxlT25JbnRlcmFjdGlvbjogZmFsc2VcclxuXHR9LFxyXG5cdC8vIGJyZWFrcG9pbnRzOiB7XHJcblx0Ly8gXHQ1ODA6IHtcclxuXHQvLyBcdFx0c2xpZGVzUGVyVmlldzogMSxcclxuXHQvLyBcdFx0c3BhY2VCZXR3ZWVuOiAxNSxcclxuXHQvLyBcdH0sXHJcblx0Ly8gXHQ3Njg6IHtcclxuXHQvLyBcdFx0c2xpZGVzUGVyVmlldzogMixcclxuXHQvLyBcdFx0c3BhY2VCZXR3ZWVuOiAxNSxcclxuXHQvLyBcdH0sXHJcblx0Ly8gXHQxMDI0OiB7XHJcblx0Ly8gXHRcdHNsaWRlc1BlclZpZXc6IDMsXHJcblx0Ly8gXHRcdHNwYWNlQmV0d2VlbjogMTUsXHJcblx0Ly8gXHR9LFxyXG59KTtcclxuXHJcblxyXG4vLyB0b2dnbGUgTUVOVVxyXG5sZXQgdG9nZ2xlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvciAoJy50b2dnbGUnKTtcclxubGV0IG5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IgKCcuaGVhZGVyX19tZW51JylcclxudG9nZ2xlLm9uY2xpY2sgPSBmdW5jdGlvbigpIHtcclxuXHR0b2dnbGUuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJylcclxuXHRuYXYuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJylcclxufTtcclxubmF2Lm9uY2xpY2sgPSBmdW5jdGlvbigpIHtcclxuXHR0b2dnbGUuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJylcclxuXHRuYXYuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJylcclxufVxyXG5cclxuLy8g0JLQuNC00LXQviBcclxuZnVuY3Rpb24gdG9nZ2xlVigpIHtcclxuXHR2YXIgdHJhaWxlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50cmFpbGVyJyk7XHJcblx0dmFyIHZpZGVvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcigndmlkZW8nKTtcclxuXHR0cmFpbGVyLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZS12aWRlbycpO1xyXG5cdHZpZGVvLmN1cnJlbnRUaW1lID0gMDtcclxuXHR2aWRlby5wYXVzZSgpO1xyXG59O1xyXG5cclxuLy8g0JTQstC40LbQtdC90LjQtSDQvNGL0YjRjNGOINGBINC60YDRg9Cz0L7QvFxyXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYWJvdXRfX3RleHQnKS5mb3JFYWNoKGZ1bmN0aW9uKGJveCl7XHJcblx0Ym94LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIGZ1bmN0aW9uKGUpe1xyXG5cdFx0bGV0IHggPSBlLnBhZ2VYIC0gYm94Lm9mZnNldExlZnQ7XHJcblx0XHRsZXQgeSA9IGUucGFnZVkgLSBib3gub2Zmc2V0VG9wO1xyXG5cclxuXHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3NwYW4nKS5mb3JFYWNoKGZ1bmN0aW9uKHNwYW4pe1xyXG5cdFx0XHRzcGFuLnN0eWxlLmxlZnQgPSB4ICsgJ3B4JztcclxuXHRcdFx0c3Bhbi5zdHlsZS50b3AgPSB5ICsgJ3B4JztcclxuXHRcdH0pXHJcblx0XHRcclxuXHR9KVxyXG59KVxyXG5cclxuLy8g0J/Rg9C30YvRgNGM0LrQuCDQvdCwINC30LDQtNC90LXQvCDRhNC+0L3QtVxyXG5mdW5jdGlvbiBjcmVhdGVCdWJsZSgpe1xyXG5cdGNvbnN0IHNlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VydmljZScpO1xyXG5cdGNvbnN0IGNyZWF0ZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcblx0dmFyIHNpemUgPSBNYXRoLnJhbmRvbSgpICogNjA7XHJcblxyXG5cdGNyZWF0ZUVsZW1lbnQuc3R5bGUud2lkdGggPSAyMCArIHNpemUgKyAncHgnO1xyXG5cdGNyZWF0ZUVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gMjAgKyBzaXplICsgJ3B4JztcclxuXHRjcmVhdGVFbGVtZW50LnN0eWxlLmxlZnQgPSBNYXRoLnJhbmRvbSgpICogaW5uZXJXaWR0aCArICdweCc7XHJcblx0c2VjdGlvbi5hcHBlbmRDaGlsZChjcmVhdGVFbGVtZW50KTtcclxuXHJcblx0c2V0VGltZW91dCgoKSA9PiB7XHJcblx0XHRjcmVhdGVFbGVtZW50LnJlbW92ZSgpXHJcblx0fSwgNDAwMCk7XHJcbn1cclxuc2V0SW50ZXJ2YWwoY3JlYXRlQnVibGUsNTApO1xyXG5cclxuLy8g0J/QvtC70L7RgdC60Lgg0L3QsCDQutC90L7Qv9C60Lgg0YEg0LPQvtGA0L7QtNCw0LzQuFxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24oKXtcclxuXHRsZXQgYnRuc0xpID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnbmF2LmFkZHJlc3MtbmF2IHVsIGxpJyk7XHJcblx0YnRuc0xpLmZvckVhY2goZnVuY3Rpb24oYnRuTGkpe1xyXG5cdFx0Y29uc3Qgc3BhbnMgPSBbXTtcclxuXHRcdGZvciAobGV0IGk9MDsgaTw0MDsgaSsrKXtcclxuXHRcdFx0bGV0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcblx0XHRcdHNwYW4uc3R5bGUudG9wID0gYCR7aSAqIDJ9cHhgXHJcblx0XHRcdHNwYW5zLnB1c2goc3Bhbik7XHJcblx0XHRcdGJ0bkxpLmFwcGVuZENoaWxkKHNwYW4pO1xyXG5cclxuXHRcdFx0bGV0IHJhbmRvbURlbGF5ID0gKE1hdGgucmFuZG9tKCkgKiAwLjc1KSArIDA7XHJcblx0XHRcdHNwYW4uc3R5bGUudHJhbnNpdGlvbkRlbGF5ID0gcmFuZG9tRGVsYXkgKyAncyc7XHJcblx0XHR9XHJcblx0fSlcclxufSk7XHJcblxyXG4vLyDQpNC40LvRjNGC0YDQsNGG0LjRjyDQs9C+0YDQvtC00L7QslxyXG5jb25zdCBmaWx0ZXJBZGRyZXNzQ2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5hZGRyZXNzX19jYXJkJyk7XHJcblxyXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCduYXYuYWRkcmVzcy1uYXYnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50ID0+IHtcclxuXHRpZiAoZXZlbnQudGFyZ2V0LnRhZ05hbWUgIT09ICdMSScpICByZXR1cm4gZmFsc2U7XHJcblx0bGV0IGNpdHlDbGFzcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ25hdi5hZGRyZXNzLW5hdiB1bCBsaScpXHJcblxyXG5cdGNpdHlDbGFzcy5mb3JFYWNoKCBlbCA9PiB7XHJcblx0XHRlbC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuXHR9KVxyXG5cdC8vIGNpdHkuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcblx0ZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG5cdGxldCBmaWx0ZXJDbGFzcyA9IGV2ZW50LnRhcmdldC5kYXRhc2V0WydmJ107XHJcblx0ZmlsdGVyQWRkcmVzc0NhcmQuZm9yRWFjaCggZWxlbSA9PiB7XHJcblx0XHRlbGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcclxuXHRcdGlmKCFlbGVtLmNsYXNzTGlzdC5jb250YWlucyhmaWx0ZXJDbGFzcykgJiYgZmlsdGVyQ2xhc3MhPT0gJ2FsbCcpIHtcclxuXHRcdFx0ZWxlbS5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XHJcblx0XHR9XHJcblx0fSk7XHJcbn0pO1xyXG5cclxuXHJcbi8vINCf0LvQsNCy0L3Ri9C5INGB0LrRgNC+0LvQu1xyXG5jb25zdCBhbmNob3JzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnYVtocmVmKj1cIiNcIl0nKTtcclxuXHJcbmZvcihsZXQgYW5jaG9yIG9mIGFuY2hvcnMpIHtcclxuXHRhbmNob3IuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKSB7XHJcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG5cdFx0Y29uc3QgYmxvY2tJRCA9IGFuY2hvci5nZXRBdHRyaWJ1dGUoJ2hyZWYnKS5zdWJzdHIoMSk7XHJcblx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZChibG9ja0lEKS5zY3JvbGxJbnRvVmlldyh7XHJcblx0XHRcdGJlaGF2aW9yOiAnc21vb3RoJyxcclxuXHRcdFx0YmxvY2s6ICdzdGFydCcsXHJcblx0XHR9KVxyXG5cdH0pXHJcbn1cclxuXHJcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUNBO0FBQ0EsSUFBSUEsTUFBTSxHQUFHQyxRQUFRLENBQUNDLGNBQWMsQ0FBQyxRQUFRLENBQUM7QUFFOUNGLE1BQU0sQ0FBQ0csZ0JBQWdCLENBQUMsWUFBWSxFQUFFLFlBQVU7RUFBQSxJQUFBQyxLQUFBLFlBQUFBLE1BQUEsRUFDdEI7SUFDeEIsSUFBSUMsS0FBSyxHQUFHSixRQUFRLENBQUNLLGFBQWEsQ0FBQyxHQUFHLENBQUM7SUFDdkNELEtBQUssQ0FBQ0UsU0FBUyxDQUFDQyxHQUFHLENBQUMsT0FBTyxDQUFDO0lBQzlCO0lBQ0UsSUFBTUMsT0FBTyxHQUFHLENBQUNDLElBQUksQ0FBQ0MsTUFBTSxDQUFDLENBQUMsR0FBRyxHQUFHLElBQUlDLE1BQU0sQ0FBQ0MsVUFBVTtJQUN6RCxJQUFNQyxPQUFPLEdBQUcsQ0FBQ0osSUFBSSxDQUFDQyxNQUFNLENBQUMsQ0FBQyxHQUFHLEdBQUcsSUFBSUMsTUFBTSxDQUFDRyxXQUFXO0lBRTFEVixLQUFL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