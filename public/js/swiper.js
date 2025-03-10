"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
/**
 * Swiper 5.3.8
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * http://swiperjs.com
 *
 * Copyright 2014-2020 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: April 24, 2020
 */

!function (e, t) {
  "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = e || self).Swiper = t();
}(void 0, function () {
  "use strict";

  var e = "undefined" == typeof document ? {
      body: {},
      addEventListener: function addEventListener() {},
      removeEventListener: function removeEventListener() {},
      activeElement: {
        blur: function blur() {},
        nodeName: ""
      },
      querySelector: function querySelector() {
        return null;
      },
      querySelectorAll: function querySelectorAll() {
        return [];
      },
      getElementById: function getElementById() {
        return null;
      },
      createEvent: function createEvent() {
        return {
          initEvent: function initEvent() {}
        };
      },
      createElement: function createElement() {
        return {
          children: [],
          childNodes: [],
          style: {},
          setAttribute: function setAttribute() {},
          getElementsByTagName: function getElementsByTagName() {
            return [];
          }
        };
      },
      location: {
        hash: ""
      }
    } : document,
    t = "undefined" == typeof window ? {
      document: e,
      navigator: {
        userAgent: ""
      },
      location: {},
      history: {},
      CustomEvent: function CustomEvent() {
        return this;
      },
      addEventListener: function addEventListener() {},
      removeEventListener: function removeEventListener() {},
      getComputedStyle: function getComputedStyle() {
        return {
          getPropertyValue: function getPropertyValue() {
            return "";
          }
        };
      },
      Image: function Image() {},
      Date: function Date() {},
      screen: {},
      setTimeout: function setTimeout() {},
      clearTimeout: function clearTimeout() {}
    } : window,
    i = function i(e) {
      for (var t = 0; t < e.length; t += 1) this[t] = e[t];
      return this.length = e.length, this;
    };
  function s(s, a) {
    var r = [],
      n = 0;
    if (s && !a && s instanceof i) return s;
    if (s) if ("string" == typeof s) {
      var o,
        l,
        d = s.trim();
      if (d.indexOf("<") >= 0 && d.indexOf(">") >= 0) {
        var h = "div";
        for (0 === d.indexOf("<li") && (h = "ul"), 0 === d.indexOf("<tr") && (h = "tbody"), 0 !== d.indexOf("<td") && 0 !== d.indexOf("<th") || (h = "tr"), 0 === d.indexOf("<tbody") && (h = "table"), 0 === d.indexOf("<option") && (h = "select"), (l = e.createElement(h)).innerHTML = d, n = 0; n < l.childNodes.length; n += 1) r.push(l.childNodes[n]);
      } else for (o = a || "#" !== s[0] || s.match(/[ .<>:~]/) ? (a || e).querySelectorAll(s.trim()) : [e.getElementById(s.trim().split("#")[1])], n = 0; n < o.length; n += 1) o[n] && r.push(o[n]);
    } else if (s.nodeType || s === t || s === e) r.push(s);else if (s.length > 0 && s[0].nodeType) for (n = 0; n < s.length; n += 1) r.push(s[n]);
    return new i(r);
  }
  function a(e) {
    for (var t = [], i = 0; i < e.length; i += 1) -1 === t.indexOf(e[i]) && t.push(e[i]);
    return t;
  }
  s.fn = i.prototype, s.Class = i, s.Dom7 = i;
  var r = {
    addClass: function addClass(e) {
      if (void 0 === e) return this;
      for (var t = e.split(" "), i = 0; i < t.length; i += 1) for (var s = 0; s < this.length; s += 1) void 0 !== this[s] && void 0 !== this[s].classList && this[s].classList.add(t[i]);
      return this;
    },
    removeClass: function removeClass(e) {
      for (var t = e.split(" "), i = 0; i < t.length; i += 1) for (var s = 0; s < this.length; s += 1) void 0 !== this[s] && void 0 !== this[s].classList && this[s].classList.remove(t[i]);
      return this;
    },
    hasClass: function hasClass(e) {
      return !!this[0] && this[0].classList.contains(e);
    },
    toggleClass: function toggleClass(e) {
      for (var t = e.split(" "), i = 0; i < t.length; i += 1) for (var s = 0; s < this.length; s += 1) void 0 !== this[s] && void 0 !== this[s].classList && this[s].classList.toggle(t[i]);
      return this;
    },
    attr: function attr(e, t) {
      var i = arguments;
      if (1 === arguments.length && "string" == typeof e) return this[0] ? this[0].getAttribute(e) : void 0;
      for (var s = 0; s < this.length; s += 1) if (2 === i.length) this[s].setAttribute(e, t);else for (var a in e) this[s][a] = e[a], this[s].setAttribute(a, e[a]);
      return this;
    },
    removeAttr: function removeAttr(e) {
      for (var t = 0; t < this.length; t += 1) this[t].removeAttribute(e);
      return this;
    },
    data: function data(e, t) {
      var i;
      if (void 0 !== t) {
        for (var s = 0; s < this.length; s += 1) (i = this[s]).dom7ElementDataStorage || (i.dom7ElementDataStorage = {}), i.dom7ElementDataStorage[e] = t;
        return this;
      }
      if (i = this[0]) {
        if (i.dom7ElementDataStorage && e in i.dom7ElementDataStorage) return i.dom7ElementDataStorage[e];
        var a = i.getAttribute("data-" + e);
        return a || void 0;
      }
    },
    transform: function transform(e) {
      for (var t = 0; t < this.length; t += 1) {
        var i = this[t].style;
        i.webkitTransform = e, i.transform = e;
      }
      return this;
    },
    transition: function transition(e) {
      "string" != typeof e && (e += "ms");
      for (var t = 0; t < this.length; t += 1) {
        var i = this[t].style;
        i.webkitTransitionDuration = e, i.transitionDuration = e;
      }
      return this;
    },
    on: function on() {
      for (var e, t = [], i = arguments.length; i--;) t[i] = arguments[i];
      var a = t[0],
        r = t[1],
        n = t[2],
        o = t[3];
      function l(e) {
        var t = e.target;
        if (t) {
          var i = e.target.dom7EventData || [];
          if (i.indexOf(e) < 0 && i.unshift(e), s(t).is(r)) n.apply(t, i);else for (var a = s(t).parents(), o = 0; o < a.length; o += 1) s(a[o]).is(r) && n.apply(a[o], i);
        }
      }
      function d(e) {
        var t = e && e.target && e.target.dom7EventData || [];
        t.indexOf(e) < 0 && t.unshift(e), n.apply(this, t);
      }
      "function" == typeof t[1] && (a = (e = t)[0], n = e[1], o = e[2], r = void 0), o || (o = !1);
      for (var h, p = a.split(" "), c = 0; c < this.length; c += 1) {
        var u = this[c];
        if (r) for (h = 0; h < p.length; h += 1) {
          var v = p[h];
          u.dom7LiveListeners || (u.dom7LiveListeners = {}), u.dom7LiveListeners[v] || (u.dom7LiveListeners[v] = []), u.dom7LiveListeners[v].push({
            listener: n,
            proxyListener: l
          }), u.addEventListener(v, l, o);
        } else for (h = 0; h < p.length; h += 1) {
          var f = p[h];
          u.dom7Listeners || (u.dom7Listeners = {}), u.dom7Listeners[f] || (u.dom7Listeners[f] = []), u.dom7Listeners[f].push({
            listener: n,
            proxyListener: d
          }), u.addEventListener(f, d, o);
        }
      }
      return this;
    },
    off: function off() {
      for (var e, t = [], i = arguments.length; i--;) t[i] = arguments[i];
      var s = t[0],
        a = t[1],
        r = t[2],
        n = t[3];
      "function" == typeof t[1] && (s = (e = t)[0], r = e[1], n = e[2], a = void 0), n || (n = !1);
      for (var o = s.split(" "), l = 0; l < o.length; l += 1) for (var d = o[l], h = 0; h < this.length; h += 1) {
        var p = this[h],
          c = void 0;
        if (!a && p.dom7Listeners ? c = p.dom7Listeners[d] : a && p.dom7LiveListeners && (c = p.dom7LiveListeners[d]), c && c.length) for (var u = c.length - 1; u >= 0; u -= 1) {
          var v = c[u];
          r && v.listener === r || r && v.listener && v.listener.dom7proxy && v.listener.dom7proxy === r ? (p.removeEventListener(d, v.proxyListener, n), c.splice(u, 1)) : r || (p.removeEventListener(d, v.proxyListener, n), c.splice(u, 1));
        }
      }
      return this;
    },
    trigger: function trigger() {
      for (var i = [], s = arguments.length; s--;) i[s] = arguments[s];
      for (var a = i[0].split(" "), r = i[1], n = 0; n < a.length; n += 1) for (var o = a[n], l = 0; l < this.length; l += 1) {
        var d = this[l],
          h = void 0;
        try {
          h = new t.CustomEvent(o, {
            detail: r,
            bubbles: !0,
            cancelable: !0
          });
        } catch (t) {
          (h = e.createEvent("Event")).initEvent(o, !0, !0), h.detail = r;
        }
        d.dom7EventData = i.filter(function (e, t) {
          return t > 0;
        }), d.dispatchEvent(h), d.dom7EventData = [], delete d.dom7EventData;
      }
      return this;
    },
    transitionEnd: function transitionEnd(e) {
      var t,
        i = ["webkitTransitionEnd", "transitionend"],
        s = this;
      function a(r) {
        if (r.target === this) for (e.call(this, r), t = 0; t < i.length; t += 1) s.off(i[t], a);
      }
      if (e) for (t = 0; t < i.length; t += 1) s.on(i[t], a);
      return this;
    },
    outerWidth: function outerWidth(e) {
      if (this.length > 0) {
        if (e) {
          var t = this.styles();
          return this[0].offsetWidth + parseFloat(t.getPropertyValue("margin-right")) + parseFloat(t.getPropertyValue("margin-left"));
        }
        return this[0].offsetWidth;
      }
      return null;
    },
    outerHeight: function outerHeight(e) {
      if (this.length > 0) {
        if (e) {
          var t = this.styles();
          return this[0].offsetHeight + parseFloat(t.getPropertyValue("margin-top")) + parseFloat(t.getPropertyValue("margin-bottom"));
        }
        return this[0].offsetHeight;
      }
      return null;
    },
    offset: function offset() {
      if (this.length > 0) {
        var i = this[0],
          s = i.getBoundingClientRect(),
          a = e.body,
          r = i.clientTop || a.clientTop || 0,
          n = i.clientLeft || a.clientLeft || 0,
          o = i === t ? t.scrollY : i.scrollTop,
          l = i === t ? t.scrollX : i.scrollLeft;
        return {
          top: s.top + o - r,
          left: s.left + l - n
        };
      }
      return null;
    },
    css: function css(e, i) {
      var s;
      if (1 === arguments.length) {
        if ("string" != typeof e) {
          for (s = 0; s < this.length; s += 1) for (var a in e) this[s].style[a] = e[a];
          return this;
        }
        if (this[0]) return t.getComputedStyle(this[0], null).getPropertyValue(e);
      }
      if (2 === arguments.length && "string" == typeof e) {
        for (s = 0; s < this.length; s += 1) this[s].style[e] = i;
        return this;
      }
      return this;
    },
    each: function each(e) {
      if (!e) return this;
      for (var t = 0; t < this.length; t += 1) if (!1 === e.call(this[t], t, this[t])) return this;
      return this;
    },
    html: function html(e) {
      if (void 0 === e) return this[0] ? this[0].innerHTML : void 0;
      for (var t = 0; t < this.length; t += 1) this[t].innerHTML = e;
      return this;
    },
    text: function text(e) {
      if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;
      for (var t = 0; t < this.length; t += 1) this[t].textContent = e;
      return this;
    },
    is: function is(a) {
      var r,
        n,
        o = this[0];
      if (!o || void 0 === a) return !1;
      if ("string" == typeof a) {
        if (o.matches) return o.matches(a);
        if (o.webkitMatchesSelector) return o.webkitMatchesSelector(a);
        if (o.msMatchesSelector) return o.msMatchesSelector(a);
        for (r = s(a), n = 0; n < r.length; n += 1) if (r[n] === o) return !0;
        return !1;
      }
      if (a === e) return o === e;
      if (a === t) return o === t;
      if (a.nodeType || a instanceof i) {
        for (r = a.nodeType ? [a] : a, n = 0; n < r.length; n += 1) if (r[n] === o) return !0;
        return !1;
      }
      return !1;
    },
    index: function index() {
      var e,
        t = this[0];
      if (t) {
        for (e = 0; null !== (t = t.previousSibling);) 1 === t.nodeType && (e += 1);
        return e;
      }
    },
    eq: function eq(e) {
      if (void 0 === e) return this;
      var t,
        s = this.length;
      return new i(e > s - 1 ? [] : e < 0 ? (t = s + e) < 0 ? [] : [this[t]] : [this[e]]);
    },
    append: function append() {
      for (var t, s = [], a = arguments.length; a--;) s[a] = arguments[a];
      for (var r = 0; r < s.length; r += 1) {
        t = s[r];
        for (var n = 0; n < this.length; n += 1) if ("string" == typeof t) {
          var o = e.createElement("div");
          for (o.innerHTML = t; o.firstChild;) this[n].appendChild(o.firstChild);
        } else if (t instanceof i) for (var l = 0; l < t.length; l += 1) this[n].appendChild(t[l]);else this[n].appendChild(t);
      }
      return this;
    },
    prepend: function prepend(t) {
      var s, a;
      for (s = 0; s < this.length; s += 1) if ("string" == typeof t) {
        var r = e.createElement("div");
        for (r.innerHTML = t, a = r.childNodes.length - 1; a >= 0; a -= 1) this[s].insertBefore(r.childNodes[a], this[s].childNodes[0]);
      } else if (t instanceof i) for (a = 0; a < t.length; a += 1) this[s].insertBefore(t[a], this[s].childNodes[0]);else this[s].insertBefore(t, this[s].childNodes[0]);
      return this;
    },
    next: function next(e) {
      return this.length > 0 ? e ? this[0].nextElementSibling && s(this[0].nextElementSibling).is(e) ? new i([this[0].nextElementSibling]) : new i([]) : this[0].nextElementSibling ? new i([this[0].nextElementSibling]) : new i([]) : new i([]);
    },
    nextAll: function nextAll(e) {
      var t = [],
        a = this[0];
      if (!a) return new i([]);
      for (; a.nextElementSibling;) {
        var r = a.nextElementSibling;
        e ? s(r).is(e) && t.push(r) : t.push(r), a = r;
      }
      return new i(t);
    },
    prev: function prev(e) {
      if (this.length > 0) {
        var t = this[0];
        return e ? t.previousElementSibling && s(t.previousElementSibling).is(e) ? new i([t.previousElementSibling]) : new i([]) : t.previousElementSibling ? new i([t.previousElementSibling]) : new i([]);
      }
      return new i([]);
    },
    prevAll: function prevAll(e) {
      var t = [],
        a = this[0];
      if (!a) return new i([]);
      for (; a.previousElementSibling;) {
        var r = a.previousElementSibling;
        e ? s(r).is(e) && t.push(r) : t.push(r), a = r;
      }
      return new i(t);
    },
    parent: function parent(e) {
      for (var t = [], i = 0; i < this.length; i += 1) null !== this[i].parentNode && (e ? s(this[i].parentNode).is(e) && t.push(this[i].parentNode) : t.push(this[i].parentNode));
      return s(a(t));
    },
    parents: function parents(e) {
      for (var t = [], i = 0; i < this.length; i += 1) for (var r = this[i].parentNode; r;) e ? s(r).is(e) && t.push(r) : t.push(r), r = r.parentNode;
      return s(a(t));
    },
    closest: function closest(e) {
      var t = this;
      return void 0 === e ? new i([]) : (t.is(e) || (t = t.parents(e).eq(0)), t);
    },
    find: function find(e) {
      for (var t = [], s = 0; s < this.length; s += 1) for (var a = this[s].querySelectorAll(e), r = 0; r < a.length; r += 1) t.push(a[r]);
      return new i(t);
    },
    children: function children(e) {
      for (var t = [], r = 0; r < this.length; r += 1) for (var n = this[r].childNodes, o = 0; o < n.length; o += 1) e ? 1 === n[o].nodeType && s(n[o]).is(e) && t.push(n[o]) : 1 === n[o].nodeType && t.push(n[o]);
      return new i(a(t));
    },
    filter: function filter(e) {
      for (var t = [], s = 0; s < this.length; s += 1) e.call(this[s], s, this[s]) && t.push(this[s]);
      return new i(t);
    },
    remove: function remove() {
      for (var e = 0; e < this.length; e += 1) this[e].parentNode && this[e].parentNode.removeChild(this[e]);
      return this;
    },
    add: function add() {
      for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
      var i,
        a,
        r = this;
      for (i = 0; i < e.length; i += 1) {
        var n = s(e[i]);
        for (a = 0; a < n.length; a += 1) r[r.length] = n[a], r.length += 1;
      }
      return r;
    },
    styles: function styles() {
      return this[0] ? t.getComputedStyle(this[0], null) : {};
    }
  };
  Object.keys(r).forEach(function (e) {
    s.fn[e] = s.fn[e] || r[e];
  });
  var n = {
      deleteProps: function deleteProps(e) {
        var t = e;
        Object.keys(t).forEach(function (e) {
          try {
            t[e] = null;
          } catch (e) {}
          try {
            delete t[e];
          } catch (e) {}
        });
      },
      nextTick: function nextTick(e, t) {
        return void 0 === t && (t = 0), setTimeout(e, t);
      },
      now: function now() {
        return Date.now();
      },
      getTranslate: function getTranslate(e, i) {
        var s, a, r;
        void 0 === i && (i = "x");
        var n = t.getComputedStyle(e, null);
        return t.WebKitCSSMatrix ? ((a = n.transform || n.webkitTransform).split(",").length > 6 && (a = a.split(", ").map(function (e) {
          return e.replace(",", ".");
        }).join(", ")), r = new t.WebKitCSSMatrix("none" === a ? "" : a)) : s = (r = n.MozTransform || n.OTransform || n.MsTransform || n.msTransform || n.transform || n.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,")).toString().split(","), "x" === i && (a = t.WebKitCSSMatrix ? r.m41 : 16 === s.length ? parseFloat(s[12]) : parseFloat(s[4])), "y" === i && (a = t.WebKitCSSMatrix ? r.m42 : 16 === s.length ? parseFloat(s[13]) : parseFloat(s[5])), a || 0;
      },
      parseUrlQuery: function parseUrlQuery(e) {
        var i,
          s,
          a,
          r,
          n = {},
          o = e || t.location.href;
        if ("string" == typeof o && o.length) for (r = (s = (o = o.indexOf("?") > -1 ? o.replace(/\S*\?/, "") : "").split("&").filter(function (e) {
          return "" !== e;
        })).length, i = 0; i < r; i += 1) a = s[i].replace(/#\S+/g, "").split("="), n[decodeURIComponent(a[0])] = void 0 === a[1] ? void 0 : decodeURIComponent(a[1]) || "";
        return n;
      },
      isObject: function isObject(e) {
        return "object" == _typeof(e) && null !== e && e.constructor && e.constructor === Object;
      },
      extend: function extend() {
        for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
        for (var i = Object(e[0]), s = 1; s < e.length; s += 1) {
          var a = e[s];
          if (null != a) for (var r = Object.keys(Object(a)), o = 0, l = r.length; o < l; o += 1) {
            var d = r[o],
              h = Object.getOwnPropertyDescriptor(a, d);
            void 0 !== h && h.enumerable && (n.isObject(i[d]) && n.isObject(a[d]) ? n.extend(i[d], a[d]) : !n.isObject(i[d]) && n.isObject(a[d]) ? (i[d] = {}, n.extend(i[d], a[d])) : i[d] = a[d]);
          }
        }
        return i;
      }
    },
    o = {
      touch: t.Modernizr && !0 === t.Modernizr.touch || !!(t.navigator.maxTouchPoints > 0 || "ontouchstart" in t || t.DocumentTouch && e instanceof t.DocumentTouch),
      pointerEvents: !!t.PointerEvent && "maxTouchPoints" in t.navigator && t.navigator.maxTouchPoints > 0,
      observer: "MutationObserver" in t || "WebkitMutationObserver" in t,
      passiveListener: function () {
        var e = !1;
        try {
          var i = Object.defineProperty({}, "passive", {
            get: function get() {
              e = !0;
            }
          });
          t.addEventListener("testPassiveListener", null, i);
        } catch (e) {}
        return e;
      }(),
      gestures: "ongesturestart" in t
    },
    l = function l(e) {
      void 0 === e && (e = {});
      var t = this;
      t.params = e, t.eventsListeners = {}, t.params && t.params.on && Object.keys(t.params.on).forEach(function (e) {
        t.on(e, t.params.on[e]);
      });
    },
    d = {
      components: {
        configurable: !0
      }
    };
  l.prototype.on = function (e, t, i) {
    var s = this;
    if ("function" != typeof t) return s;
    var a = i ? "unshift" : "push";
    return e.split(" ").forEach(function (e) {
      s.eventsListeners[e] || (s.eventsListeners[e] = []), s.eventsListeners[e][a](t);
    }), s;
  }, l.prototype.once = function (e, t, i) {
    var s = this;
    if ("function" != typeof t) return s;
    function a() {
      for (var i = [], r = arguments.length; r--;) i[r] = arguments[r];
      s.off(e, a), a.f7proxy && delete a.f7proxy, t.apply(s, i);
    }
    return a.f7proxy = t, s.on(e, a, i);
  }, l.prototype.off = function (e, t) {
    var i = this;
    return i.eventsListeners ? (e.split(" ").forEach(function (e) {
      void 0 === t ? i.eventsListeners[e] = [] : i.eventsListeners[e] && i.eventsListeners[e].length && i.eventsListeners[e].forEach(function (s, a) {
        (s === t || s.f7proxy && s.f7proxy === t) && i.eventsListeners[e].splice(a, 1);
      });
    }), i) : i;
  }, l.prototype.emit = function () {
    for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
    var i,
      s,
      a,
      r = this;
    if (!r.eventsListeners) return r;
    "string" == typeof e[0] || Array.isArray(e[0]) ? (i = e[0], s = e.slice(1, e.length), a = r) : (i = e[0].events, s = e[0].data, a = e[0].context || r);
    var n = Array.isArray(i) ? i : i.split(" ");
    return n.forEach(function (e) {
      if (r.eventsListeners && r.eventsListeners[e]) {
        var t = [];
        r.eventsListeners[e].forEach(function (e) {
          t.push(e);
        }), t.forEach(function (e) {
          e.apply(a, s);
        });
      }
    }), r;
  }, l.prototype.useModulesParams = function (e) {
    var t = this;
    t.modules && Object.keys(t.modules).forEach(function (i) {
      var s = t.modules[i];
      s.params && n.extend(e, s.params);
    });
  }, l.prototype.useModules = function (e) {
    void 0 === e && (e = {});
    var t = this;
    t.modules && Object.keys(t.modules).forEach(function (i) {
      var s = t.modules[i],
        a = e[i] || {};
      s.instance && Object.keys(s.instance).forEach(function (e) {
        var i = s.instance[e];
        t[e] = "function" == typeof i ? i.bind(t) : i;
      }), s.on && t.on && Object.keys(s.on).forEach(function (e) {
        t.on(e, s.on[e]);
      }), s.create && s.create.bind(t)(a);
    });
  }, d.components.set = function (e) {
    this.use && this.use(e);
  }, l.installModule = function (e) {
    for (var t = [], i = arguments.length - 1; i-- > 0;) t[i] = arguments[i + 1];
    var s = this;
    s.prototype.modules || (s.prototype.modules = {});
    var a = e.name || Object.keys(s.prototype.modules).length + "_" + n.now();
    return s.prototype.modules[a] = e, e.proto && Object.keys(e.proto).forEach(function (t) {
      s.prototype[t] = e.proto[t];
    }), e["static"] && Object.keys(e["static"]).forEach(function (t) {
      s[t] = e["static"][t];
    }), e.install && e.install.apply(s, t), s;
  }, l.use = function (e) {
    for (var t = [], i = arguments.length - 1; i-- > 0;) t[i] = arguments[i + 1];
    var s = this;
    return Array.isArray(e) ? (e.forEach(function (e) {
      return s.installModule(e);
    }), s) : s.installModule.apply(s, [e].concat(t));
  }, Object.defineProperties(l, d);
  var h = {
    updateSize: function updateSize() {
      var e,
        t,
        i = this.$el;
      e = void 0 !== this.params.width ? this.params.width : i[0].clientWidth, t = void 0 !== this.params.height ? this.params.height : i[0].clientHeight, 0 === e && this.isHorizontal() || 0 === t && this.isVertical() || (e = e - parseInt(i.css("padding-left"), 10) - parseInt(i.css("padding-right"), 10), t = t - parseInt(i.css("padding-top"), 10) - parseInt(i.css("padding-bottom"), 10), n.extend(this, {
        width: e,
        height: t,
        size: this.isHorizontal() ? e : t
      }));
    },
    updateSlides: function updateSlides() {
      var e = this.params,
        i = this.$wrapperEl,
        s = this.size,
        a = this.rtlTranslate,
        r = this.wrongRTL,
        o = this.virtual && e.virtual.enabled,
        l = o ? this.virtual.slides.length : this.slides.length,
        d = i.children("." + this.params.slideClass),
        h = o ? this.virtual.slides.length : d.length,
        p = [],
        c = [],
        u = [];
      function v(t) {
        return !e.cssMode || t !== d.length - 1;
      }
      var f = e.slidesOffsetBefore;
      "function" == typeof f && (f = e.slidesOffsetBefore.call(this));
      var m = e.slidesOffsetAfter;
      "function" == typeof m && (m = e.slidesOffsetAfter.call(this));
      var g = this.snapGrid.length,
        b = this.snapGrid.length,
        w = e.spaceBetween,
        y = -f,
        x = 0,
        T = 0;
      if (void 0 !== s) {
        var E, S;
        "string" == typeof w && w.indexOf("%") >= 0 && (w = parseFloat(w.replace("%", "")) / 100 * s), this.virtualSize = -w, a ? d.css({
          marginLeft: "",
          marginTop: ""
        }) : d.css({
          marginRight: "",
          marginBottom: ""
        }), e.slidesPerColumn > 1 && (E = Math.floor(h / e.slidesPerColumn) === h / this.params.slidesPerColumn ? h : Math.ceil(h / e.slidesPerColumn) * e.slidesPerColumn, "auto" !== e.slidesPerView && "row" === e.slidesPerColumnFill && (E = Math.max(E, e.slidesPerView * e.slidesPerColumn)));
        for (var C, M = e.slidesPerColumn, P = E / M, z = Math.floor(h / e.slidesPerColumn), k = 0; k < h; k += 1) {
          S = 0;
          var $ = d.eq(k);
          if (e.slidesPerColumn > 1) {
            var L = void 0,
              I = void 0,
              D = void 0;
            if ("row" === e.slidesPerColumnFill && e.slidesPerGroup > 1) {
              var O = Math.floor(k / (e.slidesPerGroup * e.slidesPerColumn)),
                A = k - e.slidesPerColumn * e.slidesPerGroup * O,
                G = 0 === O ? e.slidesPerGroup : Math.min(Math.ceil((h - O * M * e.slidesPerGroup) / M), e.slidesPerGroup);
              L = (I = A - (D = Math.floor(A / G)) * G + O * e.slidesPerGroup) + D * E / M, $.css({
                "-webkit-box-ordinal-group": L,
                "-moz-box-ordinal-group": L,
                "-ms-flex-order": L,
                "-webkit-order": L,
                order: L
              });
            } else "column" === e.slidesPerColumnFill ? (D = k - (I = Math.floor(k / M)) * M, (I > z || I === z && D === M - 1) && (D += 1) >= M && (D = 0, I += 1)) : I = k - (D = Math.floor(k / P)) * P;
            $.css("margin-" + (this.isHorizontal() ? "top" : "left"), 0 !== D && e.spaceBetween && e.spaceBetween + "px");
          }
          if ("none" !== $.css("display")) {
            if ("auto" === e.slidesPerView) {
              var H = t.getComputedStyle($[0], null),
                B = $[0].style.transform,
                N = $[0].style.webkitTransform;
              if (B && ($[0].style.transform = "none"), N && ($[0].style.webkitTransform = "none"), e.roundLengths) S = this.isHorizontal() ? $.outerWidth(!0) : $.outerHeight(!0);else if (this.isHorizontal()) {
                var X = parseFloat(H.getPropertyValue("width")),
                  V = parseFloat(H.getPropertyValue("padding-left")),
                  Y = parseFloat(H.getPropertyValue("padding-right")),
                  F = parseFloat(H.getPropertyValue("margin-left")),
                  W = parseFloat(H.getPropertyValue("margin-right")),
                  R = H.getPropertyValue("box-sizing");
                S = R && "border-box" === R ? X + F + W : X + V + Y + F + W;
              } else {
                var q = parseFloat(H.getPropertyValue("height")),
                  j = parseFloat(H.getPropertyValue("padding-top")),
                  K = parseFloat(H.getPropertyValue("padding-bottom")),
                  U = parseFloat(H.getPropertyValue("margin-top")),
                  _ = parseFloat(H.getPropertyValue("margin-bottom")),
                  Z = H.getPropertyValue("box-sizing");
                S = Z && "border-box" === Z ? q + U + _ : q + j + K + U + _;
              }
              B && ($[0].style.transform = B), N && ($[0].style.webkitTransform = N), e.roundLengths && (S = Math.floor(S));
            } else S = (s - (e.slidesPerView - 1) * w) / e.slidesPerView, e.roundLengths && (S = Math.floor(S)), d[k] && (this.isHorizontal() ? d[k].style.width = S + "px" : d[k].style.height = S + "px");
            d[k] && (d[k].swiperSlideSize = S), u.push(S), e.centeredSlides ? (y = y + S / 2 + x / 2 + w, 0 === x && 0 !== k && (y = y - s / 2 - w), 0 === k && (y = y - s / 2 - w), Math.abs(y) < .001 && (y = 0), e.roundLengths && (y = Math.floor(y)), T % e.slidesPerGroup == 0 && p.push(y), c.push(y)) : (e.roundLengths && (y = Math.floor(y)), (T - Math.min(this.params.slidesPerGroupSkip, T)) % this.params.slidesPerGroup == 0 && p.push(y), c.push(y), y = y + S + w), this.virtualSize += S + w, x = S, T += 1;
          }
        }
        if (this.virtualSize = Math.max(this.virtualSize, s) + m, a && r && ("slide" === e.effect || "coverflow" === e.effect) && i.css({
          width: this.virtualSize + e.spaceBetween + "px"
        }), e.setWrapperSize && (this.isHorizontal() ? i.css({
          width: this.virtualSize + e.spaceBetween + "px"
        }) : i.css({
          height: this.virtualSize + e.spaceBetween + "px"
        })), e.slidesPerColumn > 1 && (this.virtualSize = (S + e.spaceBetween) * E, this.virtualSize = Math.ceil(this.virtualSize / e.slidesPerColumn) - e.spaceBetween, this.isHorizontal() ? i.css({
          width: this.virtualSize + e.spaceBetween + "px"
        }) : i.css({
          height: this.virtualSize + e.spaceBetween + "px"
        }), e.centeredSlides)) {
          C = [];
          for (var Q = 0; Q < p.length; Q += 1) {
            var J = p[Q];
            e.roundLengths && (J = Math.floor(J)), p[Q] < this.virtualSize + p[0] && C.push(J);
          }
          p = C;
        }
        if (!e.centeredSlides) {
          C = [];
          for (var ee = 0; ee < p.length; ee += 1) {
            var te = p[ee];
            e.roundLengths && (te = Math.floor(te)), p[ee] <= this.virtualSize - s && C.push(te);
          }
          p = C, Math.floor(this.virtualSize - s) - Math.floor(p[p.length - 1]) > 1 && p.push(this.virtualSize - s);
        }
        if (0 === p.length && (p = [0]), 0 !== e.spaceBetween && (this.isHorizontal() ? a ? d.filter(v).css({
          marginLeft: w + "px"
        }) : d.filter(v).css({
          marginRight: w + "px"
        }) : d.filter(v).css({
          marginBottom: w + "px"
        })), e.centeredSlides && e.centeredSlidesBounds) {
          var ie = 0;
          u.forEach(function (t) {
            ie += t + (e.spaceBetween ? e.spaceBetween : 0);
          });
          var se = (ie -= e.spaceBetween) - s;
          p = p.map(function (e) {
            return e < 0 ? -f : e > se ? se + m : e;
          });
        }
        if (e.centerInsufficientSlides) {
          var ae = 0;
          if (u.forEach(function (t) {
            ae += t + (e.spaceBetween ? e.spaceBetween : 0);
          }), (ae -= e.spaceBetween) < s) {
            var re = (s - ae) / 2;
            p.forEach(function (e, t) {
              p[t] = e - re;
            }), c.forEach(function (e, t) {
              c[t] = e + re;
            });
          }
        }
        n.extend(this, {
          slides: d,
          snapGrid: p,
          slidesGrid: c,
          slidesSizesGrid: u
        }), h !== l && this.emit("slidesLengthChange"), p.length !== g && (this.params.watchOverflow && this.checkOverflow(), this.emit("snapGridLengthChange")), c.length !== b && this.emit("slidesGridLengthChange"), (e.watchSlidesProgress || e.watchSlidesVisibility) && this.updateSlidesOffset();
      }
    },
    updateAutoHeight: function updateAutoHeight(e) {
      var t,
        i = [],
        s = 0;
      if ("number" == typeof e ? this.setTransition(e) : !0 === e && this.setTransition(this.params.speed), "auto" !== this.params.slidesPerView && this.params.slidesPerView > 1) {
        if (this.params.centeredSlides) this.visibleSlides.each(function (e, t) {
          i.push(t);
        });else for (t = 0; t < Math.ceil(this.params.slidesPerView); t += 1) {
          var a = this.activeIndex + t;
          if (a > this.slides.length) break;
          i.push(this.slides.eq(a)[0]);
        }
      } else i.push(this.slides.eq(this.activeIndex)[0]);
      for (t = 0; t < i.length; t += 1) if (void 0 !== i[t]) {
        var r = i[t].offsetHeight;
        s = r > s ? r : s;
      }
      s && this.$wrapperEl.css("height", s + "px");
    },
    updateSlidesOffset: function updateSlidesOffset() {
      for (var e = this.slides, t = 0; t < e.length; t += 1) e[t].swiperSlideOffset = this.isHorizontal() ? e[t].offsetLeft : e[t].offsetTop;
    },
    updateSlidesProgress: function updateSlidesProgress(e) {
      void 0 === e && (e = this && this.translate || 0);
      var t = this.params,
        i = this.slides,
        a = this.rtlTranslate;
      if (0 !== i.length) {
        void 0 === i[0].swiperSlideOffset && this.updateSlidesOffset();
        var r = -e;
        a && (r = e), i.removeClass(t.slideVisibleClass), this.visibleSlidesIndexes = [], this.visibleSlides = [];
        for (var n = 0; n < i.length; n += 1) {
          var o = i[n],
            l = (r + (t.centeredSlides ? this.minTranslate() : 0) - o.swiperSlideOffset) / (o.swiperSlideSize + t.spaceBetween);
          if (t.watchSlidesVisibility || t.centeredSlides && t.autoHeight) {
            var d = -(r - o.swiperSlideOffset),
              h = d + this.slidesSizesGrid[n];
            (d >= 0 && d < this.size - 1 || h > 1 && h <= this.size || d <= 0 && h >= this.size) && (this.visibleSlides.push(o), this.visibleSlidesIndexes.push(n), i.eq(n).addClass(t.slideVisibleClass));
          }
          o.progress = a ? -l : l;
        }
        this.visibleSlides = s(this.visibleSlides);
      }
    },
    updateProgress: function updateProgress(e) {
      if (void 0 === e) {
        var t = this.rtlTranslate ? -1 : 1;
        e = this && this.translate && this.translate * t || 0;
      }
      var i = this.params,
        s = this.maxTranslate() - this.minTranslate(),
        a = this.progress,
        r = this.isBeginning,
        o = this.isEnd,
        l = r,
        d = o;
      0 === s ? (a = 0, r = !0, o = !0) : (r = (a = (e - this.minTranslate()) / s) <= 0, o = a >= 1), n.extend(this, {
        progress: a,
        isBeginning: r,
        isEnd: o
      }), (i.watchSlidesProgress || i.watchSlidesVisibility || i.centeredSlides && i.autoHeight) && this.updateSlidesProgress(e), r && !l && this.emit("reachBeginning toEdge"), o && !d && this.emit("reachEnd toEdge"), (l && !r || d && !o) && this.emit("fromEdge"), this.emit("progress", a);
    },
    updateSlidesClasses: function updateSlidesClasses() {
      var e,
        t = this.slides,
        i = this.params,
        s = this.$wrapperEl,
        a = this.activeIndex,
        r = this.realIndex,
        n = this.virtual && i.virtual.enabled;
      t.removeClass(i.slideActiveClass + " " + i.slideNextClass + " " + i.slidePrevClass + " " + i.slideDuplicateActiveClass + " " + i.slideDuplicateNextClass + " " + i.slideDuplicatePrevClass), (e = n ? this.$wrapperEl.find("." + i.slideClass + '[data-swiper-slide-index="' + a + '"]') : t.eq(a)).addClass(i.slideActiveClass), i.loop && (e.hasClass(i.slideDuplicateClass) ? s.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + r + '"]').addClass(i.slideDuplicateActiveClass) : s.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + r + '"]').addClass(i.slideDuplicateActiveClass));
      var o = e.nextAll("." + i.slideClass).eq(0).addClass(i.slideNextClass);
      i.loop && 0 === o.length && (o = t.eq(0)).addClass(i.slideNextClass);
      var l = e.prevAll("." + i.slideClass).eq(0).addClass(i.slidePrevClass);
      i.loop && 0 === l.length && (l = t.eq(-1)).addClass(i.slidePrevClass), i.loop && (o.hasClass(i.slideDuplicateClass) ? s.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + o.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicateNextClass) : s.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + o.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicateNextClass), l.hasClass(i.slideDuplicateClass) ? s.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + l.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicatePrevClass) : s.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + l.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicatePrevClass));
    },
    updateActiveIndex: function updateActiveIndex(e) {
      var t,
        i = this.rtlTranslate ? this.translate : -this.translate,
        s = this.slidesGrid,
        a = this.snapGrid,
        r = this.params,
        o = this.activeIndex,
        l = this.realIndex,
        d = this.snapIndex,
        h = e;
      if (void 0 === h) {
        for (var p = 0; p < s.length; p += 1) void 0 !== s[p + 1] ? i >= s[p] && i < s[p + 1] - (s[p + 1] - s[p]) / 2 ? h = p : i >= s[p] && i < s[p + 1] && (h = p + 1) : i >= s[p] && (h = p);
        r.normalizeSlideIndex && (h < 0 || void 0 === h) && (h = 0);
      }
      if (a.indexOf(i) >= 0) t = a.indexOf(i);else {
        var c = Math.min(r.slidesPerGroupSkip, h);
        t = c + Math.floor((h - c) / r.slidesPerGroup);
      }
      if (t >= a.length && (t = a.length - 1), h !== o) {
        var u = parseInt(this.slides.eq(h).attr("data-swiper-slide-index") || h, 10);
        n.extend(this, {
          snapIndex: t,
          realIndex: u,
          previousIndex: o,
          activeIndex: h
        }), this.emit("activeIndexChange"), this.emit("snapIndexChange"), l !== u && this.emit("realIndexChange"), (this.initialized || this.params.runCallbacksOnInit) && this.emit("slideChange");
      } else t !== d && (this.snapIndex = t, this.emit("snapIndexChange"));
    },
    updateClickedSlide: function updateClickedSlide(e) {
      var t = this.params,
        i = s(e.target).closest("." + t.slideClass)[0],
        a = !1;
      if (i) for (var r = 0; r < this.slides.length; r += 1) this.slides[r] === i && (a = !0);
      if (!i || !a) return this.clickedSlide = void 0, void (this.clickedIndex = void 0);
      this.clickedSlide = i, this.virtual && this.params.virtual.enabled ? this.clickedIndex = parseInt(s(i).attr("data-swiper-slide-index"), 10) : this.clickedIndex = s(i).index(), t.slideToClickedSlide && void 0 !== this.clickedIndex && this.clickedIndex !== this.activeIndex && this.slideToClickedSlide();
    }
  };
  var p = {
    getTranslate: function getTranslate(e) {
      void 0 === e && (e = this.isHorizontal() ? "x" : "y");
      var t = this.params,
        i = this.rtlTranslate,
        s = this.translate,
        a = this.$wrapperEl;
      if (t.virtualTranslate) return i ? -s : s;
      if (t.cssMode) return s;
      var r = n.getTranslate(a[0], e);
      return i && (r = -r), r || 0;
    },
    setTranslate: function setTranslate(e, t) {
      var i = this.rtlTranslate,
        s = this.params,
        a = this.$wrapperEl,
        r = this.wrapperEl,
        n = this.progress,
        o = 0,
        l = 0;
      this.isHorizontal() ? o = i ? -e : e : l = e, s.roundLengths && (o = Math.floor(o), l = Math.floor(l)), s.cssMode ? r[this.isHorizontal() ? "scrollLeft" : "scrollTop"] = this.isHorizontal() ? -o : -l : s.virtualTranslate || a.transform("translate3d(" + o + "px, " + l + "px, 0px)"), this.previousTranslate = this.translate, this.translate = this.isHorizontal() ? o : l;
      var d = this.maxTranslate() - this.minTranslate();
      (0 === d ? 0 : (e - this.minTranslate()) / d) !== n && this.updateProgress(e), this.emit("setTranslate", this.translate, t);
    },
    minTranslate: function minTranslate() {
      return -this.snapGrid[0];
    },
    maxTranslate: function maxTranslate() {
      return -this.snapGrid[this.snapGrid.length - 1];
    },
    translateTo: function translateTo(e, t, i, s, a) {
      var r;
      void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === i && (i = !0), void 0 === s && (s = !0);
      var n = this,
        o = n.params,
        l = n.wrapperEl;
      if (n.animating && o.preventInteractionOnTransition) return !1;
      var d,
        h = n.minTranslate(),
        p = n.maxTranslate();
      if (d = s && e > h ? h : s && e < p ? p : e, n.updateProgress(d), o.cssMode) {
        var c = n.isHorizontal();
        return 0 === t ? l[c ? "scrollLeft" : "scrollTop"] = -d : l.scrollTo ? l.scrollTo(((r = {})[c ? "left" : "top"] = -d, r.behavior = "smooth", r)) : l[c ? "scrollLeft" : "scrollTop"] = -d, !0;
      }
      return 0 === t ? (n.setTransition(0), n.setTranslate(d), i && (n.emit("beforeTransitionStart", t, a), n.emit("transitionEnd"))) : (n.setTransition(t), n.setTranslate(d), i && (n.emit("beforeTransitionStart", t, a), n.emit("transitionStart")), n.animating || (n.animating = !0, n.onTranslateToWrapperTransitionEnd || (n.onTranslateToWrapperTransitionEnd = function (e) {
        n && !n.destroyed && e.target === this && (n.$wrapperEl[0].removeEventListener("transitionend", n.onTranslateToWrapperTransitionEnd), n.$wrapperEl[0].removeEventListener("webkitTransitionEnd", n.onTranslateToWrapperTransitionEnd), n.onTranslateToWrapperTransitionEnd = null, delete n.onTranslateToWrapperTransitionEnd, i && n.emit("transitionEnd"));
      }), n.$wrapperEl[0].addEventListener("transitionend", n.onTranslateToWrapperTransitionEnd), n.$wrapperEl[0].addEventListener("webkitTransitionEnd", n.onTranslateToWrapperTransitionEnd))), !0;
    }
  };
  var c = {
    setTransition: function setTransition(e, t) {
      this.params.cssMode || this.$wrapperEl.transition(e), this.emit("setTransition", e, t);
    },
    transitionStart: function transitionStart(e, t) {
      void 0 === e && (e = !0);
      var i = this.activeIndex,
        s = this.params,
        a = this.previousIndex;
      if (!s.cssMode) {
        s.autoHeight && this.updateAutoHeight();
        var r = t;
        if (r || (r = i > a ? "next" : i < a ? "prev" : "reset"), this.emit("transitionStart"), e && i !== a) {
          if ("reset" === r) return void this.emit("slideResetTransitionStart");
          this.emit("slideChangeTransitionStart"), "next" === r ? this.emit("slideNextTransitionStart") : this.emit("slidePrevTransitionStart");
        }
      }
    },
    transitionEnd: function transitionEnd(e, t) {
      void 0 === e && (e = !0);
      var i = this.activeIndex,
        s = this.previousIndex,
        a = this.params;
      if (this.animating = !1, !a.cssMode) {
        this.setTransition(0);
        var r = t;
        if (r || (r = i > s ? "next" : i < s ? "prev" : "reset"), this.emit("transitionEnd"), e && i !== s) {
          if ("reset" === r) return void this.emit("slideResetTransitionEnd");
          this.emit("slideChangeTransitionEnd"), "next" === r ? this.emit("slideNextTransitionEnd") : this.emit("slidePrevTransitionEnd");
        }
      }
    }
  };
  var u = {
    slideTo: function slideTo(e, t, i, s) {
      var a;
      void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === i && (i = !0);
      var r = this,
        n = e;
      n < 0 && (n = 0);
      var o = r.params,
        l = r.snapGrid,
        d = r.slidesGrid,
        h = r.previousIndex,
        p = r.activeIndex,
        c = r.rtlTranslate,
        u = r.wrapperEl;
      if (r.animating && o.preventInteractionOnTransition) return !1;
      var v = Math.min(r.params.slidesPerGroupSkip, n),
        f = v + Math.floor((n - v) / r.params.slidesPerGroup);
      f >= l.length && (f = l.length - 1), (p || o.initialSlide || 0) === (h || 0) && i && r.emit("beforeSlideChangeStart");
      var m,
        g = -l[f];
      if (r.updateProgress(g), o.normalizeSlideIndex) for (var b = 0; b < d.length; b += 1) -Math.floor(100 * g) >= Math.floor(100 * d[b]) && (n = b);
      if (r.initialized && n !== p) {
        if (!r.allowSlideNext && g < r.translate && g < r.minTranslate()) return !1;
        if (!r.allowSlidePrev && g > r.translate && g > r.maxTranslate() && (p || 0) !== n) return !1;
      }
      if (m = n > p ? "next" : n < p ? "prev" : "reset", c && -g === r.translate || !c && g === r.translate) return r.updateActiveIndex(n), o.autoHeight && r.updateAutoHeight(), r.updateSlidesClasses(), "slide" !== o.effect && r.setTranslate(g), "reset" !== m && (r.transitionStart(i, m), r.transitionEnd(i, m)), !1;
      if (o.cssMode) {
        var w = r.isHorizontal(),
          y = -g;
        return c && (y = u.scrollWidth - u.offsetWidth - y), 0 === t ? u[w ? "scrollLeft" : "scrollTop"] = y : u.scrollTo ? u.scrollTo(((a = {})[w ? "left" : "top"] = y, a.behavior = "smooth", a)) : u[w ? "scrollLeft" : "scrollTop"] = y, !0;
      }
      return 0 === t ? (r.setTransition(0), r.setTranslate(g), r.updateActiveIndex(n), r.updateSlidesClasses(), r.emit("beforeTransitionStart", t, s), r.transitionStart(i, m), r.transitionEnd(i, m)) : (r.setTransition(t), r.setTranslate(g), r.updateActiveIndex(n), r.updateSlidesClasses(), r.emit("beforeTransitionStart", t, s), r.transitionStart(i, m), r.animating || (r.animating = !0, r.onSlideToWrapperTransitionEnd || (r.onSlideToWrapperTransitionEnd = function (e) {
        r && !r.destroyed && e.target === this && (r.$wrapperEl[0].removeEventListener("transitionend", r.onSlideToWrapperTransitionEnd), r.$wrapperEl[0].removeEventListener("webkitTransitionEnd", r.onSlideToWrapperTransitionEnd), r.onSlideToWrapperTransitionEnd = null, delete r.onSlideToWrapperTransitionEnd, r.transitionEnd(i, m));
      }), r.$wrapperEl[0].addEventListener("transitionend", r.onSlideToWrapperTransitionEnd), r.$wrapperEl[0].addEventListener("webkitTransitionEnd", r.onSlideToWrapperTransitionEnd))), !0;
    },
    slideToLoop: function slideToLoop(e, t, i, s) {
      void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === i && (i = !0);
      var a = e;
      return this.params.loop && (a += this.loopedSlides), this.slideTo(a, t, i, s);
    },
    slideNext: function slideNext(e, t, i) {
      void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
      var s = this.params,
        a = this.animating,
        r = this.activeIndex < s.slidesPerGroupSkip ? 1 : s.slidesPerGroup;
      if (s.loop) {
        if (a) return !1;
        this.loopFix(), this._clientLeft = this.$wrapperEl[0].clientLeft;
      }
      return this.slideTo(this.activeIndex + r, e, t, i);
    },
    slidePrev: function slidePrev(e, t, i) {
      void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
      var s = this.params,
        a = this.animating,
        r = this.snapGrid,
        n = this.slidesGrid,
        o = this.rtlTranslate;
      if (s.loop) {
        if (a) return !1;
        this.loopFix(), this._clientLeft = this.$wrapperEl[0].clientLeft;
      }
      function l(e) {
        return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
      }
      var d,
        h = l(o ? this.translate : -this.translate),
        p = r.map(function (e) {
          return l(e);
        }),
        c = (n.map(function (e) {
          return l(e);
        }), r[p.indexOf(h)], r[p.indexOf(h) - 1]);
      return void 0 === c && s.cssMode && r.forEach(function (e) {
        !c && h >= e && (c = e);
      }), void 0 !== c && (d = n.indexOf(c)) < 0 && (d = this.activeIndex - 1), this.slideTo(d, e, t, i);
    },
    slideReset: function slideReset(e, t, i) {
      return void 0 === e && (e = this.params.speed), void 0 === t && (t = !0), this.slideTo(this.activeIndex, e, t, i);
    },
    slideToClosest: function slideToClosest(e, t, i, s) {
      void 0 === e && (e = this.params.speed), void 0 === t && (t = !0), void 0 === s && (s = .5);
      var a = this.activeIndex,
        r = Math.min(this.params.slidesPerGroupSkip, a),
        n = r + Math.floor((a - r) / this.params.slidesPerGroup),
        o = this.rtlTranslate ? this.translate : -this.translate;
      if (o >= this.snapGrid[n]) {
        var l = this.snapGrid[n];
        o - l > (this.snapGrid[n + 1] - l) * s && (a += this.params.slidesPerGroup);
      } else {
        var d = this.snapGrid[n - 1];
        o - d <= (this.snapGrid[n] - d) * s && (a -= this.params.slidesPerGroup);
      }
      return a = Math.max(a, 0), a = Math.min(a, this.slidesGrid.length - 1), this.slideTo(a, e, t, i);
    },
    slideToClickedSlide: function slideToClickedSlide() {
      var e,
        t = this,
        i = t.params,
        a = t.$wrapperEl,
        r = "auto" === i.slidesPerView ? t.slidesPerViewDynamic() : i.slidesPerView,
        o = t.clickedIndex;
      if (i.loop) {
        if (t.animating) return;
        e = parseInt(s(t.clickedSlide).attr("data-swiper-slide-index"), 10), i.centeredSlides ? o < t.loopedSlides - r / 2 || o > t.slides.length - t.loopedSlides + r / 2 ? (t.loopFix(), o = a.children("." + i.slideClass + '[data-swiper-slide-index="' + e + '"]:not(.' + i.slideDuplicateClass + ")").eq(0).index(), n.nextTick(function () {
          t.slideTo(o);
        })) : t.slideTo(o) : o > t.slides.length - r ? (t.loopFix(), o = a.children("." + i.slideClass + '[data-swiper-slide-index="' + e + '"]:not(.' + i.slideDuplicateClass + ")").eq(0).index(), n.nextTick(function () {
          t.slideTo(o);
        })) : t.slideTo(o);
      } else t.slideTo(o);
    }
  };
  var v = {
    loopCreate: function loopCreate() {
      var t = this,
        i = t.params,
        a = t.$wrapperEl;
      a.children("." + i.slideClass + "." + i.slideDuplicateClass).remove();
      var r = a.children("." + i.slideClass);
      if (i.loopFillGroupWithBlank) {
        var n = i.slidesPerGroup - r.length % i.slidesPerGroup;
        if (n !== i.slidesPerGroup) {
          for (var o = 0; o < n; o += 1) {
            var l = s(e.createElement("div")).addClass(i.slideClass + " " + i.slideBlankClass);
            a.append(l);
          }
          r = a.children("." + i.slideClass);
        }
      }
      "auto" !== i.slidesPerView || i.loopedSlides || (i.loopedSlides = r.length), t.loopedSlides = Math.ceil(parseFloat(i.loopedSlides || i.slidesPerView, 10)), t.loopedSlides += i.loopAdditionalSlides, t.loopedSlides > r.length && (t.loopedSlides = r.length);
      var d = [],
        h = [];
      r.each(function (e, i) {
        var a = s(i);
        e < t.loopedSlides && h.push(i), e < r.length && e >= r.length - t.loopedSlides && d.push(i), a.attr("data-swiper-slide-index", e);
      });
      for (var p = 0; p < h.length; p += 1) a.append(s(h[p].cloneNode(!0)).addClass(i.slideDuplicateClass));
      for (var c = d.length - 1; c >= 0; c -= 1) a.prepend(s(d[c].cloneNode(!0)).addClass(i.slideDuplicateClass));
    },
    loopFix: function loopFix() {
      this.emit("beforeLoopFix");
      var e,
        t = this.activeIndex,
        i = this.slides,
        s = this.loopedSlides,
        a = this.allowSlidePrev,
        r = this.allowSlideNext,
        n = this.snapGrid,
        o = this.rtlTranslate;
      this.allowSlidePrev = !0, this.allowSlideNext = !0;
      var l = -n[t] - this.getTranslate();
      if (t < s) e = i.length - 3 * s + t, e += s, this.slideTo(e, 0, !1, !0) && 0 !== l && this.setTranslate((o ? -this.translate : this.translate) - l);else if (t >= i.length - s) {
        e = -i.length + t + s, e += s, this.slideTo(e, 0, !1, !0) && 0 !== l && this.setTranslate((o ? -this.translate : this.translate) - l);
      }
      this.allowSlidePrev = a, this.allowSlideNext = r, this.emit("loopFix");
    },
    loopDestroy: function loopDestroy() {
      var e = this.$wrapperEl,
        t = this.params,
        i = this.slides;
      e.children("." + t.slideClass + "." + t.slideDuplicateClass + ",." + t.slideClass + "." + t.slideBlankClass).remove(), i.removeAttr("data-swiper-slide-index");
    }
  };
  var f = {
    setGrabCursor: function setGrabCursor(e) {
      if (!(o.touch || !this.params.simulateTouch || this.params.watchOverflow && this.isLocked || this.params.cssMode)) {
        var t = this.el;
        t.style.cursor = "move", t.style.cursor = e ? "-webkit-grabbing" : "-webkit-grab", t.style.cursor = e ? "-moz-grabbin" : "-moz-grab", t.style.cursor = e ? "grabbing" : "grab";
      }
    },
    unsetGrabCursor: function unsetGrabCursor() {
      o.touch || this.params.watchOverflow && this.isLocked || this.params.cssMode || (this.el.style.cursor = "");
    }
  };
  var m,
    g,
    b,
    w,
    y,
    x,
    T,
    E,
    S,
    C,
    M,
    P,
    z,
    k,
    $,
    L = {
      appendSlide: function appendSlide(e) {
        var t = this.$wrapperEl,
          i = this.params;
        if (i.loop && this.loopDestroy(), "object" == _typeof(e) && "length" in e) for (var s = 0; s < e.length; s += 1) e[s] && t.append(e[s]);else t.append(e);
        i.loop && this.loopCreate(), i.observer && o.observer || this.update();
      },
      prependSlide: function prependSlide(e) {
        var t = this.params,
          i = this.$wrapperEl,
          s = this.activeIndex;
        t.loop && this.loopDestroy();
        var a = s + 1;
        if ("object" == _typeof(e) && "length" in e) {
          for (var r = 0; r < e.length; r += 1) e[r] && i.prepend(e[r]);
          a = s + e.length;
        } else i.prepend(e);
        t.loop && this.loopCreate(), t.observer && o.observer || this.update(), this.slideTo(a, 0, !1);
      },
      addSlide: function addSlide(e, t) {
        var i = this.$wrapperEl,
          s = this.params,
          a = this.activeIndex;
        s.loop && (a -= this.loopedSlides, this.loopDestroy(), this.slides = i.children("." + s.slideClass));
        var r = this.slides.length;
        if (e <= 0) this.prependSlide(t);else if (e >= r) this.appendSlide(t);else {
          for (var n = a > e ? a + 1 : a, l = [], d = r - 1; d >= e; d -= 1) {
            var h = this.slides.eq(d);
            h.remove(), l.unshift(h);
          }
          if ("object" == _typeof(t) && "length" in t) {
            for (var p = 0; p < t.length; p += 1) t[p] && i.append(t[p]);
            n = a > e ? a + t.length : a;
          } else i.append(t);
          for (var c = 0; c < l.length; c += 1) i.append(l[c]);
          s.loop && this.loopCreate(), s.observer && o.observer || this.update(), s.loop ? this.slideTo(n + this.loopedSlides, 0, !1) : this.slideTo(n, 0, !1);
        }
      },
      removeSlide: function removeSlide(e) {
        var t = this.params,
          i = this.$wrapperEl,
          s = this.activeIndex;
        t.loop && (s -= this.loopedSlides, this.loopDestroy(), this.slides = i.children("." + t.slideClass));
        var a,
          r = s;
        if ("object" == _typeof(e) && "length" in e) {
          for (var n = 0; n < e.length; n += 1) a = e[n], this.slides[a] && this.slides.eq(a).remove(), a < r && (r -= 1);
          r = Math.max(r, 0);
        } else a = e, this.slides[a] && this.slides.eq(a).remove(), a < r && (r -= 1), r = Math.max(r, 0);
        t.loop && this.loopCreate(), t.observer && o.observer || this.update(), t.loop ? this.slideTo(r + this.loopedSlides, 0, !1) : this.slideTo(r, 0, !1);
      },
      removeAllSlides: function removeAllSlides() {
        for (var e = [], t = 0; t < this.slides.length; t += 1) e.push(t);
        this.removeSlide(e);
      }
    },
    I = (m = t.navigator.platform, g = t.navigator.userAgent, b = {
      ios: !1,
      android: !1,
      androidChrome: !1,
      desktop: !1,
      iphone: !1,
      ipod: !1,
      ipad: !1,
      edge: !1,
      ie: !1,
      firefox: !1,
      macos: !1,
      windows: !1,
      cordova: !(!t.cordova && !t.phonegap),
      phonegap: !(!t.cordova && !t.phonegap),
      electron: !1
    }, w = t.screen.width, y = t.screen.height, x = g.match(/(Android);?[\s\/]+([\d.]+)?/), T = g.match(/(iPad).*OS\s([\d_]+)/), E = g.match(/(iPod)(.*OS\s([\d_]+))?/), S = !T && g.match(/(iPhone\sOS|iOS)\s([\d_]+)/), C = g.indexOf("MSIE ") >= 0 || g.indexOf("Trident/") >= 0, M = g.indexOf("Edge/") >= 0, P = g.indexOf("Gecko/") >= 0 && g.indexOf("Firefox/") >= 0, z = "Win32" === m, k = g.toLowerCase().indexOf("electron") >= 0, $ = "MacIntel" === m, !T && $ && o.touch && (1024 === w && 1366 === y || 834 === w && 1194 === y || 834 === w && 1112 === y || 768 === w && 1024 === y) && (T = g.match(/(Version)\/([\d.]+)/), $ = !1), b.ie = C, b.edge = M, b.firefox = P, x && !z && (b.os = "android", b.osVersion = x[2], b.android = !0, b.androidChrome = g.toLowerCase().indexOf("chrome") >= 0), (T || S || E) && (b.os = "ios", b.ios = !0), S && !E && (b.osVersion = S[2].replace(/_/g, "."), b.iphone = !0), T && (b.osVersion = T[2].replace(/_/g, "."), b.ipad = !0), E && (b.osVersion = E[3] ? E[3].replace(/_/g, ".") : null, b.ipod = !0), b.ios && b.osVersion && g.indexOf("Version/") >= 0 && "10" === b.osVersion.split(".")[0] && (b.osVersion = g.toLowerCase().split("version/")[1].split(" ")[0]), b.webView = !(!(S || T || E) || !g.match(/.*AppleWebKit(?!.*Safari)/i) && !t.navigator.standalone) || t.matchMedia && t.matchMedia("(display-mode: standalone)").matches, b.webview = b.webView, b.standalone = b.webView, b.desktop = !(b.ios || b.android) || k, b.desktop && (b.electron = k, b.macos = $, b.windows = z, b.macos && (b.os = "macos"), b.windows && (b.os = "windows")), b.pixelRatio = t.devicePixelRatio || 1, b);
  function D(i) {
    var a = this.touchEventsData,
      r = this.params,
      o = this.touches;
    if (!this.animating || !r.preventInteractionOnTransition) {
      var l = i;
      l.originalEvent && (l = l.originalEvent);
      var d = s(l.target);
      if (("wrapper" !== r.touchEventsTarget || d.closest(this.wrapperEl).length) && (a.isTouchEvent = "touchstart" === l.type, (a.isTouchEvent || !("which" in l) || 3 !== l.which) && !(!a.isTouchEvent && "button" in l && l.button > 0 || a.isTouched && a.isMoved))) if (r.noSwiping && d.closest(r.noSwipingSelector ? r.noSwipingSelector : "." + r.noSwipingClass)[0]) this.allowClick = !0;else if (!r.swipeHandler || d.closest(r.swipeHandler)[0]) {
        o.currentX = "touchstart" === l.type ? l.targetTouches[0].pageX : l.pageX, o.currentY = "touchstart" === l.type ? l.targetTouches[0].pageY : l.pageY;
        var h = o.currentX,
          p = o.currentY,
          c = r.edgeSwipeDetection || r.iOSEdgeSwipeDetection,
          u = r.edgeSwipeThreshold || r.iOSEdgeSwipeThreshold;
        if (!c || !(h <= u || h >= t.screen.width - u)) {
          if (n.extend(a, {
            isTouched: !0,
            isMoved: !1,
            allowTouchCallbacks: !0,
            isScrolling: void 0,
            startMoving: void 0
          }), o.startX = h, o.startY = p, a.touchStartTime = n.now(), this.allowClick = !0, this.updateSize(), this.swipeDirection = void 0, r.threshold > 0 && (a.allowThresholdMove = !1), "touchstart" !== l.type) {
            var v = !0;
            d.is(a.formElements) && (v = !1), e.activeElement && s(e.activeElement).is(a.formElements) && e.activeElement !== d[0] && e.activeElement.blur();
            var f = v && this.allowTouchMove && r.touchStartPreventDefault;
            (r.touchStartForcePreventDefault || f) && l.preventDefault();
          }
          this.emit("touchStart", l);
        }
      }
    }
  }
  function O(t) {
    var i = this.touchEventsData,
      a = this.params,
      r = this.touches,
      o = this.rtlTranslate,
      l = t;
    if (l.originalEvent && (l = l.originalEvent), i.isTouched) {
      if (!i.isTouchEvent || "mousemove" !== l.type) {
        var d = "touchmove" === l.type && l.targetTouches && (l.targetTouches[0] || l.changedTouches[0]),
          h = "touchmove" === l.type ? d.pageX : l.pageX,
          p = "touchmove" === l.type ? d.pageY : l.pageY;
        if (l.preventedByNestedSwiper) return r.startX = h, void (r.startY = p);
        if (!this.allowTouchMove) return this.allowClick = !1, void (i.isTouched && (n.extend(r, {
          startX: h,
          startY: p,
          currentX: h,
          currentY: p
        }), i.touchStartTime = n.now()));
        if (i.isTouchEvent && a.touchReleaseOnEdges && !a.loop) if (this.isVertical()) {
          if (p < r.startY && this.translate <= this.maxTranslate() || p > r.startY && this.translate >= this.minTranslate()) return i.isTouched = !1, void (i.isMoved = !1);
        } else if (h < r.startX && this.translate <= this.maxTranslate() || h > r.startX && this.translate >= this.minTranslate()) return;
        if (i.isTouchEvent && e.activeElement && l.target === e.activeElement && s(l.target).is(i.formElements)) return i.isMoved = !0, void (this.allowClick = !1);
        if (i.allowTouchCallbacks && this.emit("touchMove", l), !(l.targetTouches && l.targetTouches.length > 1)) {
          r.currentX = h, r.currentY = p;
          var c = r.currentX - r.startX,
            u = r.currentY - r.startY;
          if (!(this.params.threshold && Math.sqrt(Math.pow(c, 2) + Math.pow(u, 2)) < this.params.threshold)) {
            var v;
            if (void 0 === i.isScrolling) this.isHorizontal() && r.currentY === r.startY || this.isVertical() && r.currentX === r.startX ? i.isScrolling = !1 : c * c + u * u >= 25 && (v = 180 * Math.atan2(Math.abs(u), Math.abs(c)) / Math.PI, i.isScrolling = this.isHorizontal() ? v > a.touchAngle : 90 - v > a.touchAngle);
            if (i.isScrolling && this.emit("touchMoveOpposite", l), void 0 === i.startMoving && (r.currentX === r.startX && r.currentY === r.startY || (i.startMoving = !0)), i.isScrolling) i.isTouched = !1;else if (i.startMoving) {
              this.allowClick = !1, a.cssMode || l.preventDefault(), a.touchMoveStopPropagation && !a.nested && l.stopPropagation(), i.isMoved || (a.loop && this.loopFix(), i.startTranslate = this.getTranslate(), this.setTransition(0), this.animating && this.$wrapperEl.trigger("webkitTransitionEnd transitionend"), i.allowMomentumBounce = !1, !a.grabCursor || !0 !== this.allowSlideNext && !0 !== this.allowSlidePrev || this.setGrabCursor(!0), this.emit("sliderFirstMove", l)), this.emit("sliderMove", l), i.isMoved = !0;
              var f = this.isHorizontal() ? c : u;
              r.diff = f, f *= a.touchRatio, o && (f = -f), this.swipeDirection = f > 0 ? "prev" : "next", i.currentTranslate = f + i.startTranslate;
              var m = !0,
                g = a.resistanceRatio;
              if (a.touchReleaseOnEdges && (g = 0), f > 0 && i.currentTranslate > this.minTranslate() ? (m = !1, a.resistance && (i.currentTranslate = this.minTranslate() - 1 + Math.pow(-this.minTranslate() + i.startTranslate + f, g))) : f < 0 && i.currentTranslate < this.maxTranslate() && (m = !1, a.resistance && (i.currentTranslate = this.maxTranslate() + 1 - Math.pow(this.maxTranslate() - i.startTranslate - f, g))), m && (l.preventedByNestedSwiper = !0), !this.allowSlideNext && "next" === this.swipeDirection && i.currentTranslate < i.startTranslate && (i.currentTranslate = i.startTranslate), !this.allowSlidePrev && "prev" === this.swipeDirection && i.currentTranslate > i.startTranslate && (i.currentTranslate = i.startTranslate), a.threshold > 0) {
                if (!(Math.abs(f) > a.threshold || i.allowThresholdMove)) return void (i.currentTranslate = i.startTranslate);
                if (!i.allowThresholdMove) return i.allowThresholdMove = !0, r.startX = r.currentX, r.startY = r.currentY, i.currentTranslate = i.startTranslate, void (r.diff = this.isHorizontal() ? r.currentX - r.startX : r.currentY - r.startY);
              }
              a.followFinger && !a.cssMode && ((a.freeMode || a.watchSlidesProgress || a.watchSlidesVisibility) && (this.updateActiveIndex(), this.updateSlidesClasses()), a.freeMode && (0 === i.velocities.length && i.velocities.push({
                position: r[this.isHorizontal() ? "startX" : "startY"],
                time: i.touchStartTime
              }), i.velocities.push({
                position: r[this.isHorizontal() ? "currentX" : "currentY"],
                time: n.now()
              })), this.updateProgress(i.currentTranslate), this.setTranslate(i.currentTranslate));
            }
          }
        }
      }
    } else i.startMoving && i.isScrolling && this.emit("touchMoveOpposite", l);
  }
  function A(e) {
    var t = this,
      i = t.touchEventsData,
      s = t.params,
      a = t.touches,
      r = t.rtlTranslate,
      o = t.$wrapperEl,
      l = t.slidesGrid,
      d = t.snapGrid,
      h = e;
    if (h.originalEvent && (h = h.originalEvent), i.allowTouchCallbacks && t.emit("touchEnd", h), i.allowTouchCallbacks = !1, !i.isTouched) return i.isMoved && s.grabCursor && t.setGrabCursor(!1), i.isMoved = !1, void (i.startMoving = !1);
    s.grabCursor && i.isMoved && i.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1);
    var p,
      c = n.now(),
      u = c - i.touchStartTime;
    if (t.allowClick && (t.updateClickedSlide(h), t.emit("tap click", h), u < 300 && c - i.lastClickTime < 300 && t.emit("doubleTap doubleClick", h)), i.lastClickTime = n.now(), n.nextTick(function () {
      t.destroyed || (t.allowClick = !0);
    }), !i.isTouched || !i.isMoved || !t.swipeDirection || 0 === a.diff || i.currentTranslate === i.startTranslate) return i.isTouched = !1, i.isMoved = !1, void (i.startMoving = !1);
    if (i.isTouched = !1, i.isMoved = !1, i.startMoving = !1, p = s.followFinger ? r ? t.translate : -t.translate : -i.currentTranslate, !s.cssMode) if (s.freeMode) {
      if (p < -t.minTranslate()) return void t.slideTo(t.activeIndex);
      if (p > -t.maxTranslate()) return void (t.slides.length < d.length ? t.slideTo(d.length - 1) : t.slideTo(t.slides.length - 1));
      if (s.freeModeMomentum) {
        if (i.velocities.length > 1) {
          var v = i.velocities.pop(),
            f = i.velocities.pop(),
            m = v.position - f.position,
            g = v.time - f.time;
          t.velocity = m / g, t.velocity /= 2, Math.abs(t.velocity) < s.freeModeMinimumVelocity && (t.velocity = 0), (g > 150 || n.now() - v.time > 300) && (t.velocity = 0);
        } else t.velocity = 0;
        t.velocity *= s.freeModeMomentumVelocityRatio, i.velocities.length = 0;
        var b = 1e3 * s.freeModeMomentumRatio,
          w = t.velocity * b,
          y = t.translate + w;
        r && (y = -y);
        var x,
          T,
          E = !1,
          S = 20 * Math.abs(t.velocity) * s.freeModeMomentumBounceRatio;
        if (y < t.maxTranslate()) s.freeModeMomentumBounce ? (y + t.maxTranslate() < -S && (y = t.maxTranslate() - S), x = t.maxTranslate(), E = !0, i.allowMomentumBounce = !0) : y = t.maxTranslate(), s.loop && s.centeredSlides && (T = !0);else if (y > t.minTranslate()) s.freeModeMomentumBounce ? (y - t.minTranslate() > S && (y = t.minTranslate() + S), x = t.minTranslate(), E = !0, i.allowMomentumBounce = !0) : y = t.minTranslate(), s.loop && s.centeredSlides && (T = !0);else if (s.freeModeSticky) {
          for (var C, M = 0; M < d.length; M += 1) if (d[M] > -y) {
            C = M;
            break;
          }
          y = -(y = Math.abs(d[C] - y) < Math.abs(d[C - 1] - y) || "next" === t.swipeDirection ? d[C] : d[C - 1]);
        }
        if (T && t.once("transitionEnd", function () {
          t.loopFix();
        }), 0 !== t.velocity) {
          if (b = r ? Math.abs((-y - t.translate) / t.velocity) : Math.abs((y - t.translate) / t.velocity), s.freeModeSticky) {
            var P = Math.abs((r ? -y : y) - t.translate),
              z = t.slidesSizesGrid[t.activeIndex];
            b = P < z ? s.speed : P < 2 * z ? 1.5 * s.speed : 2.5 * s.speed;
          }
        } else if (s.freeModeSticky) return void t.slideToClosest();
        s.freeModeMomentumBounce && E ? (t.updateProgress(x), t.setTransition(b), t.setTranslate(y), t.transitionStart(!0, t.swipeDirection), t.animating = !0, o.transitionEnd(function () {
          t && !t.destroyed && i.allowMomentumBounce && (t.emit("momentumBounce"), t.setTransition(s.speed), setTimeout(function () {
            t.setTranslate(x), o.transitionEnd(function () {
              t && !t.destroyed && t.transitionEnd();
            });
          }, 0));
        })) : t.velocity ? (t.updateProgress(y), t.setTransition(b), t.setTranslate(y), t.transitionStart(!0, t.swipeDirection), t.animating || (t.animating = !0, o.transitionEnd(function () {
          t && !t.destroyed && t.transitionEnd();
        }))) : t.updateProgress(y), t.updateActiveIndex(), t.updateSlidesClasses();
      } else if (s.freeModeSticky) return void t.slideToClosest();
      (!s.freeModeMomentum || u >= s.longSwipesMs) && (t.updateProgress(), t.updateActiveIndex(), t.updateSlidesClasses());
    } else {
      for (var k = 0, $ = t.slidesSizesGrid[0], L = 0; L < l.length; L += L < s.slidesPerGroupSkip ? 1 : s.slidesPerGroup) {
        var I = L < s.slidesPerGroupSkip - 1 ? 1 : s.slidesPerGroup;
        void 0 !== l[L + I] ? p >= l[L] && p < l[L + I] && (k = L, $ = l[L + I] - l[L]) : p >= l[L] && (k = L, $ = l[l.length - 1] - l[l.length - 2]);
      }
      var D = (p - l[k]) / $,
        O = k < s.slidesPerGroupSkip - 1 ? 1 : s.slidesPerGroup;
      if (u > s.longSwipesMs) {
        if (!s.longSwipes) return void t.slideTo(t.activeIndex);
        "next" === t.swipeDirection && (D >= s.longSwipesRatio ? t.slideTo(k + O) : t.slideTo(k)), "prev" === t.swipeDirection && (D > 1 - s.longSwipesRatio ? t.slideTo(k + O) : t.slideTo(k));
      } else {
        if (!s.shortSwipes) return void t.slideTo(t.activeIndex);
        t.navigation && (h.target === t.navigation.nextEl || h.target === t.navigation.prevEl) ? h.target === t.navigation.nextEl ? t.slideTo(k + O) : t.slideTo(k) : ("next" === t.swipeDirection && t.slideTo(k + O), "prev" === t.swipeDirection && t.slideTo(k));
      }
    }
  }
  function G() {
    var e = this.params,
      t = this.el;
    if (!t || 0 !== t.offsetWidth) {
      e.breakpoints && this.setBreakpoint();
      var i = this.allowSlideNext,
        s = this.allowSlidePrev,
        a = this.snapGrid;
      this.allowSlideNext = !0, this.allowSlidePrev = !0, this.updateSize(), this.updateSlides(), this.updateSlidesClasses(), ("auto" === e.slidesPerView || e.slidesPerView > 1) && this.isEnd && !this.params.centeredSlides ? this.slideTo(this.slides.length - 1, 0, !1, !0) : this.slideTo(this.activeIndex, 0, !1, !0), this.autoplay && this.autoplay.running && this.autoplay.paused && this.autoplay.run(), this.allowSlidePrev = s, this.allowSlideNext = i, this.params.watchOverflow && a !== this.snapGrid && this.checkOverflow();
    }
  }
  function H(e) {
    this.allowClick || (this.params.preventClicks && e.preventDefault(), this.params.preventClicksPropagation && this.animating && (e.stopPropagation(), e.stopImmediatePropagation()));
  }
  function B() {
    var e = this.wrapperEl,
      t = this.rtlTranslate;
    this.previousTranslate = this.translate, this.isHorizontal() ? this.translate = t ? e.scrollWidth - e.offsetWidth - e.scrollLeft : -e.scrollLeft : this.translate = -e.scrollTop, -0 === this.translate && (this.translate = 0), this.updateActiveIndex(), this.updateSlidesClasses();
    var i = this.maxTranslate() - this.minTranslate();
    (0 === i ? 0 : (this.translate - this.minTranslate()) / i) !== this.progress && this.updateProgress(t ? -this.translate : this.translate), this.emit("setTranslate", this.translate, !1);
  }
  var N = !1;
  function X() {}
  var V = {
      init: !0,
      direction: "horizontal",
      touchEventsTarget: "container",
      initialSlide: 0,
      speed: 300,
      cssMode: !1,
      updateOnWindowResize: !0,
      preventInteractionOnTransition: !1,
      edgeSwipeDetection: !1,
      edgeSwipeThreshold: 20,
      freeMode: !1,
      freeModeMomentum: !0,
      freeModeMomentumRatio: 1,
      freeModeMomentumBounce: !0,
      freeModeMomentumBounceRatio: 1,
      freeModeMomentumVelocityRatio: 1,
      freeModeSticky: !1,
      freeModeMinimumVelocity: .02,
      autoHeight: !1,
      setWrapperSize: !1,
      virtualTranslate: !1,
      effect: "slide",
      breakpoints: void 0,
      spaceBetween: 0,
      slidesPerView: 1,
      slidesPerColumn: 1,
      slidesPerColumnFill: "column",
      slidesPerGroup: 1,
      slidesPerGroupSkip: 0,
      centeredSlides: !1,
      centeredSlidesBounds: !1,
      slidesOffsetBefore: 0,
      slidesOffsetAfter: 0,
      normalizeSlideIndex: !0,
      centerInsufficientSlides: !1,
      watchOverflow: !1,
      roundLengths: !1,
      touchRatio: 1,
      touchAngle: 45,
      simulateTouch: !0,
      shortSwipes: !0,
      longSwipes: !0,
      longSwipesRatio: .5,
      longSwipesMs: 300,
      followFinger: !0,
      allowTouchMove: !0,
      threshold: 0,
      touchMoveStopPropagation: !1,
      touchStartPreventDefault: !0,
      touchStartForcePreventDefault: !1,
      touchReleaseOnEdges: !1,
      uniqueNavElements: !0,
      resistance: !0,
      resistanceRatio: .85,
      watchSlidesProgress: !1,
      watchSlidesVisibility: !1,
      grabCursor: !1,
      preventClicks: !0,
      preventClicksPropagation: !0,
      slideToClickedSlide: !1,
      preloadImages: !0,
      updateOnImagesReady: !0,
      loop: !1,
      loopAdditionalSlides: 0,
      loopedSlides: null,
      loopFillGroupWithBlank: !1,
      allowSlidePrev: !0,
      allowSlideNext: !0,
      swipeHandler: null,
      noSwiping: !0,
      noSwipingClass: "swiper-no-swiping",
      noSwipingSelector: null,
      passiveListeners: !0,
      containerModifierClass: "swiper-container-",
      slideClass: "swiper-slide",
      slideBlankClass: "swiper-slide-invisible-blank",
      slideActiveClass: "swiper-slide-active",
      slideDuplicateActiveClass: "swiper-slide-duplicate-active",
      slideVisibleClass: "swiper-slide-visible",
      slideDuplicateClass: "swiper-slide-duplicate",
      slideNextClass: "swiper-slide-next",
      slideDuplicateNextClass: "swiper-slide-duplicate-next",
      slidePrevClass: "swiper-slide-prev",
      slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
      wrapperClass: "swiper-wrapper",
      runCallbacksOnInit: !0
    },
    Y = {
      update: h,
      translate: p,
      transition: c,
      slide: u,
      loop: v,
      grabCursor: f,
      manipulation: L,
      events: {
        attachEvents: function attachEvents() {
          var t = this.params,
            i = this.touchEvents,
            s = this.el,
            a = this.wrapperEl;
          this.onTouchStart = D.bind(this), this.onTouchMove = O.bind(this), this.onTouchEnd = A.bind(this), t.cssMode && (this.onScroll = B.bind(this)), this.onClick = H.bind(this);
          var r = !!t.nested;
          if (!o.touch && o.pointerEvents) s.addEventListener(i.start, this.onTouchStart, !1), e.addEventListener(i.move, this.onTouchMove, r), e.addEventListener(i.end, this.onTouchEnd, !1);else {
            if (o.touch) {
              var n = !("touchstart" !== i.start || !o.passiveListener || !t.passiveListeners) && {
                passive: !0,
                capture: !1
              };
              s.addEventListener(i.start, this.onTouchStart, n), s.addEventListener(i.move, this.onTouchMove, o.passiveListener ? {
                passive: !1,
                capture: r
              } : r), s.addEventListener(i.end, this.onTouchEnd, n), i.cancel && s.addEventListener(i.cancel, this.onTouchEnd, n), N || (e.addEventListener("touchstart", X), N = !0);
            }
            (t.simulateTouch && !I.ios && !I.android || t.simulateTouch && !o.touch && I.ios) && (s.addEventListener("mousedown", this.onTouchStart, !1), e.addEventListener("mousemove", this.onTouchMove, r), e.addEventListener("mouseup", this.onTouchEnd, !1));
          }
          (t.preventClicks || t.preventClicksPropagation) && s.addEventListener("click", this.onClick, !0), t.cssMode && a.addEventListener("scroll", this.onScroll), t.updateOnWindowResize ? this.on(I.ios || I.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", G, !0) : this.on("observerUpdate", G, !0);
        },
        detachEvents: function detachEvents() {
          var t = this.params,
            i = this.touchEvents,
            s = this.el,
            a = this.wrapperEl,
            r = !!t.nested;
          if (!o.touch && o.pointerEvents) s.removeEventListener(i.start, this.onTouchStart, !1), e.removeEventListener(i.move, this.onTouchMove, r), e.removeEventListener(i.end, this.onTouchEnd, !1);else {
            if (o.touch) {
              var n = !("onTouchStart" !== i.start || !o.passiveListener || !t.passiveListeners) && {
                passive: !0,
                capture: !1
              };
              s.removeEventListener(i.start, this.onTouchStart, n), s.removeEventListener(i.move, this.onTouchMove, r), s.removeEventListener(i.end, this.onTouchEnd, n), i.cancel && s.removeEventListener(i.cancel, this.onTouchEnd, n);
            }
            (t.simulateTouch && !I.ios && !I.android || t.simulateTouch && !o.touch && I.ios) && (s.removeEventListener("mousedown", this.onTouchStart, !1), e.removeEventListener("mousemove", this.onTouchMove, r), e.removeEventListener("mouseup", this.onTouchEnd, !1));
          }
          (t.preventClicks || t.preventClicksPropagation) && s.removeEventListener("click", this.onClick, !0), t.cssMode && a.removeEventListener("scroll", this.onScroll), this.off(I.ios || I.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", G);
        }
      },
      breakpoints: {
        setBreakpoint: function setBreakpoint() {
          var e = this.activeIndex,
            t = this.initialized,
            i = this.loopedSlides;
          void 0 === i && (i = 0);
          var s = this.params,
            a = this.$el,
            r = s.breakpoints;
          if (r && (!r || 0 !== Object.keys(r).length)) {
            var o = this.getBreakpoint(r);
            if (o && this.currentBreakpoint !== o) {
              var l = o in r ? r[o] : void 0;
              l && ["slidesPerView", "spaceBetween", "slidesPerGroup", "slidesPerGroupSkip", "slidesPerColumn"].forEach(function (e) {
                var t = l[e];
                void 0 !== t && (l[e] = "slidesPerView" !== e || "AUTO" !== t && "auto" !== t ? "slidesPerView" === e ? parseFloat(t) : parseInt(t, 10) : "auto");
              });
              var d = l || this.originalParams,
                h = s.slidesPerColumn > 1,
                p = d.slidesPerColumn > 1;
              h && !p ? a.removeClass(s.containerModifierClass + "multirow " + s.containerModifierClass + "multirow-column") : !h && p && (a.addClass(s.containerModifierClass + "multirow"), "column" === d.slidesPerColumnFill && a.addClass(s.containerModifierClass + "multirow-column"));
              var c = d.direction && d.direction !== s.direction,
                u = s.loop && (d.slidesPerView !== s.slidesPerView || c);
              c && t && this.changeDirection(), n.extend(this.params, d), n.extend(this, {
                allowTouchMove: this.params.allowTouchMove,
                allowSlideNext: this.params.allowSlideNext,
                allowSlidePrev: this.params.allowSlidePrev
              }), this.currentBreakpoint = o, u && t && (this.loopDestroy(), this.loopCreate(), this.updateSlides(), this.slideTo(e - i + this.loopedSlides, 0, !1)), this.emit("breakpoint", d);
            }
          }
        },
        getBreakpoint: function getBreakpoint(e) {
          if (e) {
            var i = !1,
              s = Object.keys(e).map(function (e) {
                if ("string" == typeof e && 0 === e.indexOf("@")) {
                  var i = parseFloat(e.substr(1));
                  return {
                    value: t.innerHeight * i,
                    point: e
                  };
                }
                return {
                  value: e,
                  point: e
                };
              });
            s.sort(function (e, t) {
              return parseInt(e.value, 10) - parseInt(t.value, 10);
            });
            for (var a = 0; a < s.length; a += 1) {
              var r = s[a],
                n = r.point;
              r.value <= t.innerWidth && (i = n);
            }
            return i || "max";
          }
        }
      },
      checkOverflow: {
        checkOverflow: function checkOverflow() {
          var e = this.params,
            t = this.isLocked,
            i = this.slides.length > 0 && e.slidesOffsetBefore + e.spaceBetween * (this.slides.length - 1) + this.slides[0].offsetWidth * this.slides.length;
          e.slidesOffsetBefore && e.slidesOffsetAfter && i ? this.isLocked = i <= this.size : this.isLocked = 1 === this.snapGrid.length, this.allowSlideNext = !this.isLocked, this.allowSlidePrev = !this.isLocked, t !== this.isLocked && this.emit(this.isLocked ? "lock" : "unlock"), t && t !== this.isLocked && (this.isEnd = !1, this.navigation.update());
        }
      },
      classes: {
        addClasses: function addClasses() {
          var e = this.classNames,
            t = this.params,
            i = this.rtl,
            s = this.$el,
            a = [];
          a.push("initialized"), a.push(t.direction), t.freeMode && a.push("free-mode"), t.autoHeight && a.push("autoheight"), i && a.push("rtl"), t.slidesPerColumn > 1 && (a.push("multirow"), "column" === t.slidesPerColumnFill && a.push("multirow-column")), I.android && a.push("android"), I.ios && a.push("ios"), t.cssMode && a.push("css-mode"), a.forEach(function (i) {
            e.push(t.containerModifierClass + i);
          }), s.addClass(e.join(" "));
        },
        removeClasses: function removeClasses() {
          var e = this.$el,
            t = this.classNames;
          e.removeClass(t.join(" "));
        }
      },
      images: {
        loadImage: function loadImage(e, i, s, a, r, n) {
          var o;
          function l() {
            n && n();
          }
          e.complete && r ? l() : i ? ((o = new t.Image()).onload = l, o.onerror = l, a && (o.sizes = a), s && (o.srcset = s), i && (o.src = i)) : l();
        },
        preloadImages: function preloadImages() {
          var e = this;
          function t() {
            null != e && e && !e.destroyed && (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1), e.imagesLoaded === e.imagesToLoad.length && (e.params.updateOnImagesReady && e.update(), e.emit("imagesReady")));
          }
          e.imagesToLoad = e.$el.find("img");
          for (var i = 0; i < e.imagesToLoad.length; i += 1) {
            var s = e.imagesToLoad[i];
            e.loadImage(s, s.currentSrc || s.getAttribute("src"), s.srcset || s.getAttribute("srcset"), s.sizes || s.getAttribute("sizes"), !0, t);
          }
        }
      }
    },
    F = {},
    W = function (e) {
      function t() {
        for (var i, a, r, l = [], d = arguments.length; d--;) l[d] = arguments[d];
        1 === l.length && l[0].constructor && l[0].constructor === Object ? r = l[0] : (a = (i = l)[0], r = i[1]), r || (r = {}), r = n.extend({}, r), a && !r.el && (r.el = a), e.call(this, r), Object.keys(Y).forEach(function (e) {
          Object.keys(Y[e]).forEach(function (i) {
            t.prototype[i] || (t.prototype[i] = Y[e][i]);
          });
        });
        var h = this;
        void 0 === h.modules && (h.modules = {}), Object.keys(h.modules).forEach(function (e) {
          var t = h.modules[e];
          if (t.params) {
            var i = Object.keys(t.params)[0],
              s = t.params[i];
            if ("object" != _typeof(s) || null === s) return;
            if (!(i in r) || !("enabled" in s)) return;
            !0 === r[i] && (r[i] = {
              enabled: !0
            }), "object" != _typeof(r[i]) || "enabled" in r[i] || (r[i].enabled = !0), r[i] || (r[i] = {
              enabled: !1
            });
          }
        });
        var p = n.extend({}, V);
        h.useModulesParams(p), h.params = n.extend({}, p, F, r), h.originalParams = n.extend({}, h.params), h.passedParams = n.extend({}, r), h.$ = s;
        var c = s(h.params.el);
        if (a = c[0]) {
          if (c.length > 1) {
            var u = [];
            return c.each(function (e, i) {
              var s = n.extend({}, r, {
                el: i
              });
              u.push(new t(s));
            }), u;
          }
          var v, f, m;
          return a.swiper = h, c.data("swiper", h), a && a.shadowRoot && a.shadowRoot.querySelector ? (v = s(a.shadowRoot.querySelector("." + h.params.wrapperClass))).children = function (e) {
            return c.children(e);
          } : v = c.children("." + h.params.wrapperClass), n.extend(h, {
            $el: c,
            el: a,
            $wrapperEl: v,
            wrapperEl: v[0],
            classNames: [],
            slides: s(),
            slidesGrid: [],
            snapGrid: [],
            slidesSizesGrid: [],
            isHorizontal: function isHorizontal() {
              return "horizontal" === h.params.direction;
            },
            isVertical: function isVertical() {
              return "vertical" === h.params.direction;
            },
            rtl: "rtl" === a.dir.toLowerCase() || "rtl" === c.css("direction"),
            rtlTranslate: "horizontal" === h.params.direction && ("rtl" === a.dir.toLowerCase() || "rtl" === c.css("direction")),
            wrongRTL: "-webkit-box" === v.css("display"),
            activeIndex: 0,
            realIndex: 0,
            isBeginning: !0,
            isEnd: !1,
            translate: 0,
            previousTranslate: 0,
            progress: 0,
            velocity: 0,
            animating: !1,
            allowSlideNext: h.params.allowSlideNext,
            allowSlidePrev: h.params.allowSlidePrev,
            touchEvents: (f = ["touchstart", "touchmove", "touchend", "touchcancel"], m = ["mousedown", "mousemove", "mouseup"], o.pointerEvents && (m = ["pointerdown", "pointermove", "pointerup"]), h.touchEventsTouch = {
              start: f[0],
              move: f[1],
              end: f[2],
              cancel: f[3]
            }, h.touchEventsDesktop = {
              start: m[0],
              move: m[1],
              end: m[2]
            }, o.touch || !h.params.simulateTouch ? h.touchEventsTouch : h.touchEventsDesktop),
            touchEventsData: {
              isTouched: void 0,
              isMoved: void 0,
              allowTouchCallbacks: void 0,
              touchStartTime: void 0,
              isScrolling: void 0,
              currentTranslate: void 0,
              startTranslate: void 0,
              allowThresholdMove: void 0,
              formElements: "input, select, option, textarea, button, video, label",
              lastClickTime: n.now(),
              clickTimeout: void 0,
              velocities: [],
              allowMomentumBounce: void 0,
              isTouchEvent: void 0,
              startMoving: void 0
            },
            allowClick: !0,
            allowTouchMove: h.params.allowTouchMove,
            touches: {
              startX: 0,
              startY: 0,
              currentX: 0,
              currentY: 0,
              diff: 0
            },
            imagesToLoad: [],
            imagesLoaded: 0
          }), h.useModules(), h.params.init && h.init(), h;
        }
      }
      e && (t.__proto__ = e), t.prototype = Object.create(e && e.prototype), t.prototype.constructor = t;
      var i = {
        extendedDefaults: {
          configurable: !0
        },
        defaults: {
          configurable: !0
        },
        Class: {
          configurable: !0
        },
        $: {
          configurable: !0
        }
      };
      return t.prototype.slidesPerViewDynamic = function () {
        var e = this.params,
          t = this.slides,
          i = this.slidesGrid,
          s = this.size,
          a = this.activeIndex,
          r = 1;
        if (e.centeredSlides) {
          for (var n, o = t[a].swiperSlideSize, l = a + 1; l < t.length; l += 1) t[l] && !n && (r += 1, (o += t[l].swiperSlideSize) > s && (n = !0));
          for (var d = a - 1; d >= 0; d -= 1) t[d] && !n && (r += 1, (o += t[d].swiperSlideSize) > s && (n = !0));
        } else for (var h = a + 1; h < t.length; h += 1) i[h] - i[a] < s && (r += 1);
        return r;
      }, t.prototype.update = function () {
        var e = this;
        if (e && !e.destroyed) {
          var t = e.snapGrid,
            i = e.params;
          i.breakpoints && e.setBreakpoint(), e.updateSize(), e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), e.params.freeMode ? (s(), e.params.autoHeight && e.updateAutoHeight()) : (("auto" === e.params.slidesPerView || e.params.slidesPerView > 1) && e.isEnd && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0)) || s(), i.watchOverflow && t !== e.snapGrid && e.checkOverflow(), e.emit("update");
        }
        function s() {
          var t = e.rtlTranslate ? -1 * e.translate : e.translate,
            i = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
          e.setTranslate(i), e.updateActiveIndex(), e.updateSlidesClasses();
        }
      }, t.prototype.changeDirection = function (e, t) {
        void 0 === t && (t = !0);
        var i = this.params.direction;
        return e || (e = "horizontal" === i ? "vertical" : "horizontal"), e === i || "horizontal" !== e && "vertical" !== e || (this.$el.removeClass("" + this.params.containerModifierClass + i).addClass("" + this.params.containerModifierClass + e), this.params.direction = e, this.slides.each(function (t, i) {
          "vertical" === e ? i.style.width = "" : i.style.height = "";
        }), this.emit("changeDirection"), t && this.update()), this;
      }, t.prototype.init = function () {
        this.initialized || (this.emit("beforeInit"), this.params.breakpoints && this.setBreakpoint(), this.addClasses(), this.params.loop && this.loopCreate(), this.updateSize(), this.updateSlides(), this.params.watchOverflow && this.checkOverflow(), this.params.grabCursor && this.setGrabCursor(), this.params.preloadImages && this.preloadImages(), this.params.loop ? this.slideTo(this.params.initialSlide + this.loopedSlides, 0, this.params.runCallbacksOnInit) : this.slideTo(this.params.initialSlide, 0, this.params.runCallbacksOnInit), this.attachEvents(), this.initialized = !0, this.emit("init"));
      }, t.prototype.destroy = function (e, t) {
        void 0 === e && (e = !0), void 0 === t && (t = !0);
        var i = this,
          s = i.params,
          a = i.$el,
          r = i.$wrapperEl,
          o = i.slides;
        return void 0 === i.params || i.destroyed || (i.emit("beforeDestroy"), i.initialized = !1, i.detachEvents(), s.loop && i.loopDestroy(), t && (i.removeClasses(), a.removeAttr("style"), r.removeAttr("style"), o && o.length && o.removeClass([s.slideVisibleClass, s.slideActiveClass, s.slideNextClass, s.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index")), i.emit("destroy"), Object.keys(i.eventsListeners).forEach(function (e) {
          i.off(e);
        }), !1 !== e && (i.$el[0].swiper = null, i.$el.data("swiper", null), n.deleteProps(i)), i.destroyed = !0), null;
      }, t.extendDefaults = function (e) {
        n.extend(F, e);
      }, i.extendedDefaults.get = function () {
        return F;
      }, i.defaults.get = function () {
        return V;
      }, i.Class.get = function () {
        return e;
      }, i.$.get = function () {
        return s;
      }, Object.defineProperties(t, i), t;
    }(l),
    R = {
      name: "device",
      proto: {
        device: I
      },
      "static": {
        device: I
      }
    },
    q = {
      name: "support",
      proto: {
        support: o
      },
      "static": {
        support: o
      }
    },
    j = {
      isEdge: !!t.navigator.userAgent.match(/Edge/g),
      isSafari: function () {
        var e = t.navigator.userAgent.toLowerCase();
        return e.indexOf("safari") >= 0 && e.indexOf("chrome") < 0 && e.indexOf("android") < 0;
      }(),
      isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(t.navigator.userAgent)
    },
    K = {
      name: "browser",
      proto: {
        browser: j
      },
      "static": {
        browser: j
      }
    },
    U = {
      name: "resize",
      create: function create() {
        var e = this;
        n.extend(e, {
          resize: {
            resizeHandler: function resizeHandler() {
              e && !e.destroyed && e.initialized && (e.emit("beforeResize"), e.emit("resize"));
            },
            orientationChangeHandler: function orientationChangeHandler() {
              e && !e.destroyed && e.initialized && e.emit("orientationchange");
            }
          }
        });
      },
      on: {
        init: function init() {
          t.addEventListener("resize", this.resize.resizeHandler), t.addEventListener("orientationchange", this.resize.orientationChangeHandler);
        },
        destroy: function destroy() {
          t.removeEventListener("resize", this.resize.resizeHandler), t.removeEventListener("orientationchange", this.resize.orientationChangeHandler);
        }
      }
    },
    _ = {
      func: t.MutationObserver || t.WebkitMutationObserver,
      attach: function attach(e, i) {
        void 0 === i && (i = {});
        var s = this,
          a = new (0, _.func)(function (e) {
            if (1 !== e.length) {
              var i = function i() {
                s.emit("observerUpdate", e[0]);
              };
              t.requestAnimationFrame ? t.requestAnimationFrame(i) : t.setTimeout(i, 0);
            } else s.emit("observerUpdate", e[0]);
          });
        a.observe(e, {
          attributes: void 0 === i.attributes || i.attributes,
          childList: void 0 === i.childList || i.childList,
          characterData: void 0 === i.characterData || i.characterData
        }), s.observer.observers.push(a);
      },
      init: function init() {
        if (o.observer && this.params.observer) {
          if (this.params.observeParents) for (var e = this.$el.parents(), t = 0; t < e.length; t += 1) this.observer.attach(e[t]);
          this.observer.attach(this.$el[0], {
            childList: this.params.observeSlideChildren
          }), this.observer.attach(this.$wrapperEl[0], {
            attributes: !1
          });
        }
      },
      destroy: function destroy() {
        this.observer.observers.forEach(function (e) {
          e.disconnect();
        }), this.observer.observers = [];
      }
    },
    Z = {
      name: "observer",
      params: {
        observer: !1,
        observeParents: !1,
        observeSlideChildren: !1
      },
      create: function create() {
        n.extend(this, {
          observer: {
            init: _.init.bind(this),
            attach: _.attach.bind(this),
            destroy: _.destroy.bind(this),
            observers: []
          }
        });
      },
      on: {
        init: function init() {
          this.observer.init();
        },
        destroy: function destroy() {
          this.observer.destroy();
        }
      }
    },
    Q = {
      update: function update(e) {
        var t = this,
          i = t.params,
          s = i.slidesPerView,
          a = i.slidesPerGroup,
          r = i.centeredSlides,
          o = t.params.virtual,
          l = o.addSlidesBefore,
          d = o.addSlidesAfter,
          h = t.virtual,
          p = h.from,
          c = h.to,
          u = h.slides,
          v = h.slidesGrid,
          f = h.renderSlide,
          m = h.offset;
        t.updateActiveIndex();
        var g,
          b,
          w,
          y = t.activeIndex || 0;
        g = t.rtlTranslate ? "right" : t.isHorizontal() ? "left" : "top", r ? (b = Math.floor(s / 2) + a + l, w = Math.floor(s / 2) + a + d) : (b = s + (a - 1) + l, w = a + d);
        var x = Math.max((y || 0) - w, 0),
          T = Math.min((y || 0) + b, u.length - 1),
          E = (t.slidesGrid[x] || 0) - (t.slidesGrid[0] || 0);
        function S() {
          t.updateSlides(), t.updateProgress(), t.updateSlidesClasses(), t.lazy && t.params.lazy.enabled && t.lazy.load();
        }
        if (n.extend(t.virtual, {
          from: x,
          to: T,
          offset: E,
          slidesGrid: t.slidesGrid
        }), p === x && c === T && !e) return t.slidesGrid !== v && E !== m && t.slides.css(g, E + "px"), void t.updateProgress();
        if (t.params.virtual.renderExternal) return t.params.virtual.renderExternal.call(t, {
          offset: E,
          from: x,
          to: T,
          slides: function () {
            for (var e = [], t = x; t <= T; t += 1) e.push(u[t]);
            return e;
          }()
        }), void S();
        var C = [],
          M = [];
        if (e) t.$wrapperEl.find("." + t.params.slideClass).remove();else for (var P = p; P <= c; P += 1) (P < x || P > T) && t.$wrapperEl.find("." + t.params.slideClass + '[data-swiper-slide-index="' + P + '"]').remove();
        for (var z = 0; z < u.length; z += 1) z >= x && z <= T && (void 0 === c || e ? M.push(z) : (z > c && M.push(z), z < p && C.push(z)));
        M.forEach(function (e) {
          t.$wrapperEl.append(f(u[e], e));
        }), C.sort(function (e, t) {
          return t - e;
        }).forEach(function (e) {
          t.$wrapperEl.prepend(f(u[e], e));
        }), t.$wrapperEl.children(".swiper-slide").css(g, E + "px"), S();
      },
      renderSlide: function renderSlide(e, t) {
        var i = this.params.virtual;
        if (i.cache && this.virtual.cache[t]) return this.virtual.cache[t];
        var a = i.renderSlide ? s(i.renderSlide.call(this, e, t)) : s('<div class="' + this.params.slideClass + '" data-swiper-slide-index="' + t + '">' + e + "</div>");
        return a.attr("data-swiper-slide-index") || a.attr("data-swiper-slide-index", t), i.cache && (this.virtual.cache[t] = a), a;
      },
      appendSlide: function appendSlide(e) {
        if ("object" == _typeof(e) && "length" in e) for (var t = 0; t < e.length; t += 1) e[t] && this.virtual.slides.push(e[t]);else this.virtual.slides.push(e);
        this.virtual.update(!0);
      },
      prependSlide: function prependSlide(e) {
        var t = this.activeIndex,
          i = t + 1,
          s = 1;
        if (Array.isArray(e)) {
          for (var a = 0; a < e.length; a += 1) e[a] && this.virtual.slides.unshift(e[a]);
          i = t + e.length, s = e.length;
        } else this.virtual.slides.unshift(e);
        if (this.params.virtual.cache) {
          var r = this.virtual.cache,
            n = {};
          Object.keys(r).forEach(function (e) {
            var t = r[e],
              i = t.attr("data-swiper-slide-index");
            i && t.attr("data-swiper-slide-index", parseInt(i, 10) + 1), n[parseInt(e, 10) + s] = t;
          }), this.virtual.cache = n;
        }
        this.virtual.update(!0), this.slideTo(i, 0);
      },
      removeSlide: function removeSlide(e) {
        if (null != e) {
          var t = this.activeIndex;
          if (Array.isArray(e)) for (var i = e.length - 1; i >= 0; i -= 1) this.virtual.slides.splice(e[i], 1), this.params.virtual.cache && delete this.virtual.cache[e[i]], e[i] < t && (t -= 1), t = Math.max(t, 0);else this.virtual.slides.splice(e, 1), this.params.virtual.cache && delete this.virtual.cache[e], e < t && (t -= 1), t = Math.max(t, 0);
          this.virtual.update(!0), this.slideTo(t, 0);
        }
      },
      removeAllSlides: function removeAllSlides() {
        this.virtual.slides = [], this.params.virtual.cache && (this.virtual.cache = {}), this.virtual.update(!0), this.slideTo(0, 0);
      }
    },
    J = {
      name: "virtual",
      params: {
        virtual: {
          enabled: !1,
          slides: [],
          cache: !0,
          renderSlide: null,
          renderExternal: null,
          addSlidesBefore: 0,
          addSlidesAfter: 0
        }
      },
      create: function create() {
        n.extend(this, {
          virtual: {
            update: Q.update.bind(this),
            appendSlide: Q.appendSlide.bind(this),
            prependSlide: Q.prependSlide.bind(this),
            removeSlide: Q.removeSlide.bind(this),
            removeAllSlides: Q.removeAllSlides.bind(this),
            renderSlide: Q.renderSlide.bind(this),
            slides: this.params.virtual.slides,
            cache: {}
          }
        });
      },
      on: {
        beforeInit: function beforeInit() {
          if (this.params.virtual.enabled) {
            this.classNames.push(this.params.containerModifierClass + "virtual");
            var e = {
              watchSlidesProgress: !0
            };
            n.extend(this.params, e), n.extend(this.originalParams, e), this.params.initialSlide || this.virtual.update();
          }
        },
        setTranslate: function setTranslate() {
          this.params.virtual.enabled && this.virtual.update();
        }
      }
    },
    ee = {
      handle: function handle(i) {
        var s = this.rtlTranslate,
          a = i;
        a.originalEvent && (a = a.originalEvent);
        var r = a.keyCode || a.charCode;
        if (!this.allowSlideNext && (this.isHorizontal() && 39 === r || this.isVertical() && 40 === r || 34 === r)) return !1;
        if (!this.allowSlidePrev && (this.isHorizontal() && 37 === r || this.isVertical() && 38 === r || 33 === r)) return !1;
        if (!(a.shiftKey || a.altKey || a.ctrlKey || a.metaKey || e.activeElement && e.activeElement.nodeName && ("input" === e.activeElement.nodeName.toLowerCase() || "textarea" === e.activeElement.nodeName.toLowerCase()))) {
          if (this.params.keyboard.onlyInViewport && (33 === r || 34 === r || 37 === r || 39 === r || 38 === r || 40 === r)) {
            var n = !1;
            if (this.$el.parents("." + this.params.slideClass).length > 0 && 0 === this.$el.parents("." + this.params.slideActiveClass).length) return;
            var o = t.innerWidth,
              l = t.innerHeight,
              d = this.$el.offset();
            s && (d.left -= this.$el[0].scrollLeft);
            for (var h = [[d.left, d.top], [d.left + this.width, d.top], [d.left, d.top + this.height], [d.left + this.width, d.top + this.height]], p = 0; p < h.length; p += 1) {
              var c = h[p];
              c[0] >= 0 && c[0] <= o && c[1] >= 0 && c[1] <= l && (n = !0);
            }
            if (!n) return;
          }
          this.isHorizontal() ? (33 !== r && 34 !== r && 37 !== r && 39 !== r || (a.preventDefault ? a.preventDefault() : a.returnValue = !1), (34 !== r && 39 !== r || s) && (33 !== r && 37 !== r || !s) || this.slideNext(), (33 !== r && 37 !== r || s) && (34 !== r && 39 !== r || !s) || this.slidePrev()) : (33 !== r && 34 !== r && 38 !== r && 40 !== r || (a.preventDefault ? a.preventDefault() : a.returnValue = !1), 34 !== r && 40 !== r || this.slideNext(), 33 !== r && 38 !== r || this.slidePrev()), this.emit("keyPress", r);
        }
      },
      enable: function enable() {
        this.keyboard.enabled || (s(e).on("keydown", this.keyboard.handle), this.keyboard.enabled = !0);
      },
      disable: function disable() {
        this.keyboard.enabled && (s(e).off("keydown", this.keyboard.handle), this.keyboard.enabled = !1);
      }
    },
    te = {
      name: "keyboard",
      params: {
        keyboard: {
          enabled: !1,
          onlyInViewport: !0
        }
      },
      create: function create() {
        n.extend(this, {
          keyboard: {
            enabled: !1,
            enable: ee.enable.bind(this),
            disable: ee.disable.bind(this),
            handle: ee.handle.bind(this)
          }
        });
      },
      on: {
        init: function init() {
          this.params.keyboard.enabled && this.keyboard.enable();
        },
        destroy: function destroy() {
          this.keyboard.enabled && this.keyboard.disable();
        }
      }
    };
  var ie = {
      lastScrollTime: n.now(),
      lastEventBeforeSnap: void 0,
      recentWheelEvents: [],
      event: function event() {
        return t.navigator.userAgent.indexOf("firefox") > -1 ? "DOMMouseScroll" : function () {
          var t = "onwheel" in e;
          if (!t) {
            var i = e.createElement("div");
            i.setAttribute("onwheel", "return;"), t = "function" == typeof i.onwheel;
          }
          return !t && e.implementation && e.implementation.hasFeature && !0 !== e.implementation.hasFeature("", "") && (t = e.implementation.hasFeature("Events.wheel", "3.0")), t;
        }() ? "wheel" : "mousewheel";
      },
      normalize: function normalize(e) {
        var t = 0,
          i = 0,
          s = 0,
          a = 0;
        return "detail" in e && (i = e.detail), "wheelDelta" in e && (i = -e.wheelDelta / 120), "wheelDeltaY" in e && (i = -e.wheelDeltaY / 120), "wheelDeltaX" in e && (t = -e.wheelDeltaX / 120), "axis" in e && e.axis === e.HORIZONTAL_AXIS && (t = i, i = 0), s = 10 * t, a = 10 * i, "deltaY" in e && (a = e.deltaY), "deltaX" in e && (s = e.deltaX), e.shiftKey && !s && (s = a, a = 0), (s || a) && e.deltaMode && (1 === e.deltaMode ? (s *= 40, a *= 40) : (s *= 800, a *= 800)), s && !t && (t = s < 1 ? -1 : 1), a && !i && (i = a < 1 ? -1 : 1), {
          spinX: t,
          spinY: i,
          pixelX: s,
          pixelY: a
        };
      },
      handleMouseEnter: function handleMouseEnter() {
        this.mouseEntered = !0;
      },
      handleMouseLeave: function handleMouseLeave() {
        this.mouseEntered = !1;
      },
      handle: function handle(e) {
        var t = e,
          i = this,
          a = i.params.mousewheel;
        i.params.cssMode && t.preventDefault();
        var r = i.$el;
        if ("container" !== i.params.mousewheel.eventsTarged && (r = s(i.params.mousewheel.eventsTarged)), !i.mouseEntered && !r[0].contains(t.target) && !a.releaseOnEdges) return !0;
        t.originalEvent && (t = t.originalEvent);
        var o = 0,
          l = i.rtlTranslate ? -1 : 1,
          d = ie.normalize(t);
        if (a.forceToAxis) {
          if (i.isHorizontal()) {
            if (!(Math.abs(d.pixelX) > Math.abs(d.pixelY))) return !0;
            o = d.pixelX * l;
          } else {
            if (!(Math.abs(d.pixelY) > Math.abs(d.pixelX))) return !0;
            o = d.pixelY;
          }
        } else o = Math.abs(d.pixelX) > Math.abs(d.pixelY) ? -d.pixelX * l : -d.pixelY;
        if (0 === o) return !0;
        if (a.invert && (o = -o), i.params.freeMode) {
          var h = {
              time: n.now(),
              delta: Math.abs(o),
              direction: Math.sign(o)
            },
            p = i.mousewheel.lastEventBeforeSnap,
            c = p && h.time < p.time + 500 && h.delta <= p.delta && h.direction === p.direction;
          if (!c) {
            i.mousewheel.lastEventBeforeSnap = void 0, i.params.loop && i.loopFix();
            var u = i.getTranslate() + o * a.sensitivity,
              v = i.isBeginning,
              f = i.isEnd;
            if (u >= i.minTranslate() && (u = i.minTranslate()), u <= i.maxTranslate() && (u = i.maxTranslate()), i.setTransition(0), i.setTranslate(u), i.updateProgress(), i.updateActiveIndex(), i.updateSlidesClasses(), (!v && i.isBeginning || !f && i.isEnd) && i.updateSlidesClasses(), i.params.freeModeSticky) {
              clearTimeout(i.mousewheel.timeout), i.mousewheel.timeout = void 0;
              var m = i.mousewheel.recentWheelEvents;
              m.length >= 15 && m.shift();
              var g = m.length ? m[m.length - 1] : void 0,
                b = m[0];
              if (m.push(h), g && (h.delta > g.delta || h.direction !== g.direction)) m.splice(0);else if (m.length >= 15 && h.time - b.time < 500 && b.delta - h.delta >= 1 && h.delta <= 6) {
                var w = o > 0 ? .8 : .2;
                i.mousewheel.lastEventBeforeSnap = h, m.splice(0), i.mousewheel.timeout = n.nextTick(function () {
                  i.slideToClosest(i.params.speed, !0, void 0, w);
                }, 0);
              }
              i.mousewheel.timeout || (i.mousewheel.timeout = n.nextTick(function () {
                i.mousewheel.lastEventBeforeSnap = h, m.splice(0), i.slideToClosest(i.params.speed, !0, void 0, .5);
              }, 500));
            }
            if (c || i.emit("scroll", t), i.params.autoplay && i.params.autoplayDisableOnInteraction && i.autoplay.stop(), u === i.minTranslate() || u === i.maxTranslate()) return !0;
          }
        } else {
          var y = {
              time: n.now(),
              delta: Math.abs(o),
              direction: Math.sign(o),
              raw: e
            },
            x = i.mousewheel.recentWheelEvents;
          x.length >= 2 && x.shift();
          var T = x.length ? x[x.length - 1] : void 0;
          if (x.push(y), T ? (y.direction !== T.direction || y.delta > T.delta) && i.mousewheel.animateSlider(y) : i.mousewheel.animateSlider(y), i.mousewheel.releaseScroll(y)) return !0;
        }
        return t.preventDefault ? t.preventDefault() : t.returnValue = !1, !1;
      },
      animateSlider: function animateSlider(e) {
        return e.delta >= 6 && n.now() - this.mousewheel.lastScrollTime < 60 || (e.direction < 0 ? this.isEnd && !this.params.loop || this.animating || (this.slideNext(), this.emit("scroll", e.raw)) : this.isBeginning && !this.params.loop || this.animating || (this.slidePrev(), this.emit("scroll", e.raw)), this.mousewheel.lastScrollTime = new t.Date().getTime(), !1);
      },
      releaseScroll: function releaseScroll(e) {
        var t = this.params.mousewheel;
        if (e.direction < 0) {
          if (this.isEnd && !this.params.loop && t.releaseOnEdges) return !0;
        } else if (this.isBeginning && !this.params.loop && t.releaseOnEdges) return !0;
        return !1;
      },
      enable: function enable() {
        var e = ie.event();
        if (this.params.cssMode) return this.wrapperEl.removeEventListener(e, this.mousewheel.handle), !0;
        if (!e) return !1;
        if (this.mousewheel.enabled) return !1;
        var t = this.$el;
        return "container" !== this.params.mousewheel.eventsTarged && (t = s(this.params.mousewheel.eventsTarged)), t.on("mouseenter", this.mousewheel.handleMouseEnter), t.on("mouseleave", this.mousewheel.handleMouseLeave), t.on(e, this.mousewheel.handle), this.mousewheel.enabled = !0, !0;
      },
      disable: function disable() {
        var e = ie.event();
        if (this.params.cssMode) return this.wrapperEl.addEventListener(e, this.mousewheel.handle), !0;
        if (!e) return !1;
        if (!this.mousewheel.enabled) return !1;
        var t = this.$el;
        return "container" !== this.params.mousewheel.eventsTarged && (t = s(this.params.mousewheel.eventsTarged)), t.off(e, this.mousewheel.handle), this.mousewheel.enabled = !1, !0;
      }
    },
    se = {
      update: function update() {
        var e = this.params.navigation;
        if (!this.params.loop) {
          var t = this.navigation,
            i = t.$nextEl,
            s = t.$prevEl;
          s && s.length > 0 && (this.isBeginning ? s.addClass(e.disabledClass) : s.removeClass(e.disabledClass), s[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](e.lockClass)), i && i.length > 0 && (this.isEnd ? i.addClass(e.disabledClass) : i.removeClass(e.disabledClass), i[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](e.lockClass));
        }
      },
      onPrevClick: function onPrevClick(e) {
        e.preventDefault(), this.isBeginning && !this.params.loop || this.slidePrev();
      },
      onNextClick: function onNextClick(e) {
        e.preventDefault(), this.isEnd && !this.params.loop || this.slideNext();
      },
      init: function init() {
        var e,
          t,
          i = this.params.navigation;
        (i.nextEl || i.prevEl) && (i.nextEl && (e = s(i.nextEl), this.params.uniqueNavElements && "string" == typeof i.nextEl && e.length > 1 && 1 === this.$el.find(i.nextEl).length && (e = this.$el.find(i.nextEl))), i.prevEl && (t = s(i.prevEl), this.params.uniqueNavElements && "string" == typeof i.prevEl && t.length > 1 && 1 === this.$el.find(i.prevEl).length && (t = this.$el.find(i.prevEl))), e && e.length > 0 && e.on("click", this.navigation.onNextClick), t && t.length > 0 && t.on("click", this.navigation.onPrevClick), n.extend(this.navigation, {
          $nextEl: e,
          nextEl: e && e[0],
          $prevEl: t,
          prevEl: t && t[0]
        }));
      },
      destroy: function destroy() {
        var e = this.navigation,
          t = e.$nextEl,
          i = e.$prevEl;
        t && t.length && (t.off("click", this.navigation.onNextClick), t.removeClass(this.params.navigation.disabledClass)), i && i.length && (i.off("click", this.navigation.onPrevClick), i.removeClass(this.params.navigation.disabledClass));
      }
    },
    ae = {
      update: function update() {
        var e = this.rtl,
          t = this.params.pagination;
        if (t.el && this.pagination.el && this.pagination.$el && 0 !== this.pagination.$el.length) {
          var i,
            a = this.virtual && this.params.virtual.enabled ? this.virtual.slides.length : this.slides.length,
            r = this.pagination.$el,
            n = this.params.loop ? Math.ceil((a - 2 * this.loopedSlides) / this.params.slidesPerGroup) : this.snapGrid.length;
          if (this.params.loop ? ((i = Math.ceil((this.activeIndex - this.loopedSlides) / this.params.slidesPerGroup)) > a - 1 - 2 * this.loopedSlides && (i -= a - 2 * this.loopedSlides), i > n - 1 && (i -= n), i < 0 && "bullets" !== this.params.paginationType && (i = n + i)) : i = void 0 !== this.snapIndex ? this.snapIndex : this.activeIndex || 0, "bullets" === t.type && this.pagination.bullets && this.pagination.bullets.length > 0) {
            var o,
              l,
              d,
              h = this.pagination.bullets;
            if (t.dynamicBullets && (this.pagination.bulletSize = h.eq(0)[this.isHorizontal() ? "outerWidth" : "outerHeight"](!0), r.css(this.isHorizontal() ? "width" : "height", this.pagination.bulletSize * (t.dynamicMainBullets + 4) + "px"), t.dynamicMainBullets > 1 && void 0 !== this.previousIndex && (this.pagination.dynamicBulletIndex += i - this.previousIndex, this.pagination.dynamicBulletIndex > t.dynamicMainBullets - 1 ? this.pagination.dynamicBulletIndex = t.dynamicMainBullets - 1 : this.pagination.dynamicBulletIndex < 0 && (this.pagination.dynamicBulletIndex = 0)), o = i - this.pagination.dynamicBulletIndex, d = ((l = o + (Math.min(h.length, t.dynamicMainBullets) - 1)) + o) / 2), h.removeClass(t.bulletActiveClass + " " + t.bulletActiveClass + "-next " + t.bulletActiveClass + "-next-next " + t.bulletActiveClass + "-prev " + t.bulletActiveClass + "-prev-prev " + t.bulletActiveClass + "-main"), r.length > 1) h.each(function (e, a) {
              var r = s(a),
                n = r.index();
              n === i && r.addClass(t.bulletActiveClass), t.dynamicBullets && (n >= o && n <= l && r.addClass(t.bulletActiveClass + "-main"), n === o && r.prev().addClass(t.bulletActiveClass + "-prev").prev().addClass(t.bulletActiveClass + "-prev-prev"), n === l && r.next().addClass(t.bulletActiveClass + "-next").next().addClass(t.bulletActiveClass + "-next-next"));
            });else {
              var p = h.eq(i),
                c = p.index();
              if (p.addClass(t.bulletActiveClass), t.dynamicBullets) {
                for (var u = h.eq(o), v = h.eq(l), f = o; f <= l; f += 1) h.eq(f).addClass(t.bulletActiveClass + "-main");
                if (this.params.loop) {
                  if (c >= h.length - t.dynamicMainBullets) {
                    for (var m = t.dynamicMainBullets; m >= 0; m -= 1) h.eq(h.length - m).addClass(t.bulletActiveClass + "-main");
                    h.eq(h.length - t.dynamicMainBullets - 1).addClass(t.bulletActiveClass + "-prev");
                  } else u.prev().addClass(t.bulletActiveClass + "-prev").prev().addClass(t.bulletActiveClass + "-prev-prev"), v.next().addClass(t.bulletActiveClass + "-next").next().addClass(t.bulletActiveClass + "-next-next");
                } else u.prev().addClass(t.bulletActiveClass + "-prev").prev().addClass(t.bulletActiveClass + "-prev-prev"), v.next().addClass(t.bulletActiveClass + "-next").next().addClass(t.bulletActiveClass + "-next-next");
              }
            }
            if (t.dynamicBullets) {
              var g = Math.min(h.length, t.dynamicMainBullets + 4),
                b = (this.pagination.bulletSize * g - this.pagination.bulletSize) / 2 - d * this.pagination.bulletSize,
                w = e ? "right" : "left";
              h.css(this.isHorizontal() ? w : "top", b + "px");
            }
          }
          if ("fraction" === t.type && (r.find("." + t.currentClass).text(t.formatFractionCurrent(i + 1)), r.find("." + t.totalClass).text(t.formatFractionTotal(n))), "progressbar" === t.type) {
            var y;
            y = t.progressbarOpposite ? this.isHorizontal() ? "vertical" : "horizontal" : this.isHorizontal() ? "horizontal" : "vertical";
            var x = (i + 1) / n,
              T = 1,
              E = 1;
            "horizontal" === y ? T = x : E = x, r.find("." + t.progressbarFillClass).transform("translate3d(0,0,0) scaleX(" + T + ") scaleY(" + E + ")").transition(this.params.speed);
          }
          "custom" === t.type && t.renderCustom ? (r.html(t.renderCustom(this, i + 1, n)), this.emit("paginationRender", this, r[0])) : this.emit("paginationUpdate", this, r[0]), r[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](t.lockClass);
        }
      },
      render: function render() {
        var e = this.params.pagination;
        if (e.el && this.pagination.el && this.pagination.$el && 0 !== this.pagination.$el.length) {
          var t = this.virtual && this.params.virtual.enabled ? this.virtual.slides.length : this.slides.length,
            i = this.pagination.$el,
            s = "";
          if ("bullets" === e.type) {
            for (var a = this.params.loop ? Math.ceil((t - 2 * this.loopedSlides) / this.params.slidesPerGroup) : this.snapGrid.length, r = 0; r < a; r += 1) e.renderBullet ? s += e.renderBullet.call(this, r, e.bulletClass) : s += "<" + e.bulletElement + ' class="' + e.bulletClass + '"></' + e.bulletElement + ">";
            i.html(s), this.pagination.bullets = i.find("." + e.bulletClass);
          }
          "fraction" === e.type && (s = e.renderFraction ? e.renderFraction.call(this, e.currentClass, e.totalClass) : '<span class="' + e.currentClass + '"></span> / <span class="' + e.totalClass + '"></span>', i.html(s)), "progressbar" === e.type && (s = e.renderProgressbar ? e.renderProgressbar.call(this, e.progressbarFillClass) : '<span class="' + e.progressbarFillClass + '"></span>', i.html(s)), "custom" !== e.type && this.emit("paginationRender", this.pagination.$el[0]);
        }
      },
      init: function init() {
        var e = this,
          t = e.params.pagination;
        if (t.el) {
          var i = s(t.el);
          0 !== i.length && (e.params.uniqueNavElements && "string" == typeof t.el && i.length > 1 && 1 === e.$el.find(t.el).length && (i = e.$el.find(t.el)), "bullets" === t.type && t.clickable && i.addClass(t.clickableClass), i.addClass(t.modifierClass + t.type), "bullets" === t.type && t.dynamicBullets && (i.addClass("" + t.modifierClass + t.type + "-dynamic"), e.pagination.dynamicBulletIndex = 0, t.dynamicMainBullets < 1 && (t.dynamicMainBullets = 1)), "progressbar" === t.type && t.progressbarOpposite && i.addClass(t.progressbarOppositeClass), t.clickable && i.on("click", "." + t.bulletClass, function (t) {
            t.preventDefault();
            var i = s(this).index() * e.params.slidesPerGroup;
            e.params.loop && (i += e.loopedSlides), e.slideTo(i);
          }), n.extend(e.pagination, {
            $el: i,
            el: i[0]
          }));
        }
      },
      destroy: function destroy() {
        var e = this.params.pagination;
        if (e.el && this.pagination.el && this.pagination.$el && 0 !== this.pagination.$el.length) {
          var t = this.pagination.$el;
          t.removeClass(e.hiddenClass), t.removeClass(e.modifierClass + e.type), this.pagination.bullets && this.pagination.bullets.removeClass(e.bulletActiveClass), e.clickable && t.off("click", "." + e.bulletClass);
        }
      }
    },
    re = {
      setTranslate: function setTranslate() {
        if (this.params.scrollbar.el && this.scrollbar.el) {
          var e = this.scrollbar,
            t = this.rtlTranslate,
            i = this.progress,
            s = e.dragSize,
            a = e.trackSize,
            r = e.$dragEl,
            n = e.$el,
            o = this.params.scrollbar,
            l = s,
            d = (a - s) * i;
          t ? (d = -d) > 0 ? (l = s - d, d = 0) : -d + s > a && (l = a + d) : d < 0 ? (l = s + d, d = 0) : d + s > a && (l = a - d), this.isHorizontal() ? (r.transform("translate3d(" + d + "px, 0, 0)"), r[0].style.width = l + "px") : (r.transform("translate3d(0px, " + d + "px, 0)"), r[0].style.height = l + "px"), o.hide && (clearTimeout(this.scrollbar.timeout), n[0].style.opacity = 1, this.scrollbar.timeout = setTimeout(function () {
            n[0].style.opacity = 0, n.transition(400);
          }, 1e3));
        }
      },
      setTransition: function setTransition(e) {
        this.params.scrollbar.el && this.scrollbar.el && this.scrollbar.$dragEl.transition(e);
      },
      updateSize: function updateSize() {
        if (this.params.scrollbar.el && this.scrollbar.el) {
          var e = this.scrollbar,
            t = e.$dragEl,
            i = e.$el;
          t[0].style.width = "", t[0].style.height = "";
          var s,
            a = this.isHorizontal() ? i[0].offsetWidth : i[0].offsetHeight,
            r = this.size / this.virtualSize,
            o = r * (a / this.size);
          s = "auto" === this.params.scrollbar.dragSize ? a * r : parseInt(this.params.scrollbar.dragSize, 10), this.isHorizontal() ? t[0].style.width = s + "px" : t[0].style.height = s + "px", i[0].style.display = r >= 1 ? "none" : "", this.params.scrollbar.hide && (i[0].style.opacity = 0), n.extend(e, {
            trackSize: a,
            divider: r,
            moveDivider: o,
            dragSize: s
          }), e.$el[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](this.params.scrollbar.lockClass);
        }
      },
      getPointerPosition: function getPointerPosition(e) {
        return this.isHorizontal() ? "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].clientX : e.clientX : "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].clientY : e.clientY;
      },
      setDragPosition: function setDragPosition(e) {
        var t,
          i = this.scrollbar,
          s = this.rtlTranslate,
          a = i.$el,
          r = i.dragSize,
          n = i.trackSize,
          o = i.dragStartPos;
        t = (i.getPointerPosition(e) - a.offset()[this.isHorizontal() ? "left" : "top"] - (null !== o ? o : r / 2)) / (n - r), t = Math.max(Math.min(t, 1), 0), s && (t = 1 - t);
        var l = this.minTranslate() + (this.maxTranslate() - this.minTranslate()) * t;
        this.updateProgress(l), this.setTranslate(l), this.updateActiveIndex(), this.updateSlidesClasses();
      },
      onDragStart: function onDragStart(e) {
        var t = this.params.scrollbar,
          i = this.scrollbar,
          s = this.$wrapperEl,
          a = i.$el,
          r = i.$dragEl;
        this.scrollbar.isTouched = !0, this.scrollbar.dragStartPos = e.target === r[0] || e.target === r ? i.getPointerPosition(e) - e.target.getBoundingClientRect()[this.isHorizontal() ? "left" : "top"] : null, e.preventDefault(), e.stopPropagation(), s.transition(100), r.transition(100), i.setDragPosition(e), clearTimeout(this.scrollbar.dragTimeout), a.transition(0), t.hide && a.css("opacity", 1), this.params.cssMode && this.$wrapperEl.css("scroll-snap-type", "none"), this.emit("scrollbarDragStart", e);
      },
      onDragMove: function onDragMove(e) {
        var t = this.scrollbar,
          i = this.$wrapperEl,
          s = t.$el,
          a = t.$dragEl;
        this.scrollbar.isTouched && (e.preventDefault ? e.preventDefault() : e.returnValue = !1, t.setDragPosition(e), i.transition(0), s.transition(0), a.transition(0), this.emit("scrollbarDragMove", e));
      },
      onDragEnd: function onDragEnd(e) {
        var t = this.params.scrollbar,
          i = this.scrollbar,
          s = this.$wrapperEl,
          a = i.$el;
        this.scrollbar.isTouched && (this.scrollbar.isTouched = !1, this.params.cssMode && (this.$wrapperEl.css("scroll-snap-type", ""), s.transition("")), t.hide && (clearTimeout(this.scrollbar.dragTimeout), this.scrollbar.dragTimeout = n.nextTick(function () {
          a.css("opacity", 0), a.transition(400);
        }, 1e3)), this.emit("scrollbarDragEnd", e), t.snapOnRelease && this.slideToClosest());
      },
      enableDraggable: function enableDraggable() {
        if (this.params.scrollbar.el) {
          var t = this.scrollbar,
            i = this.touchEventsTouch,
            s = this.touchEventsDesktop,
            a = this.params,
            r = t.$el[0],
            n = !(!o.passiveListener || !a.passiveListeners) && {
              passive: !1,
              capture: !1
            },
            l = !(!o.passiveListener || !a.passiveListeners) && {
              passive: !0,
              capture: !1
            };
          o.touch ? (r.addEventListener(i.start, this.scrollbar.onDragStart, n), r.addEventListener(i.move, this.scrollbar.onDragMove, n), r.addEventListener(i.end, this.scrollbar.onDragEnd, l)) : (r.addEventListener(s.start, this.scrollbar.onDragStart, n), e.addEventListener(s.move, this.scrollbar.onDragMove, n), e.addEventListener(s.end, this.scrollbar.onDragEnd, l));
        }
      },
      disableDraggable: function disableDraggable() {
        if (this.params.scrollbar.el) {
          var t = this.scrollbar,
            i = this.touchEventsTouch,
            s = this.touchEventsDesktop,
            a = this.params,
            r = t.$el[0],
            n = !(!o.passiveListener || !a.passiveListeners) && {
              passive: !1,
              capture: !1
            },
            l = !(!o.passiveListener || !a.passiveListeners) && {
              passive: !0,
              capture: !1
            };
          o.touch ? (r.removeEventListener(i.start, this.scrollbar.onDragStart, n), r.removeEventListener(i.move, this.scrollbar.onDragMove, n), r.removeEventListener(i.end, this.scrollbar.onDragEnd, l)) : (r.removeEventListener(s.start, this.scrollbar.onDragStart, n), e.removeEventListener(s.move, this.scrollbar.onDragMove, n), e.removeEventListener(s.end, this.scrollbar.onDragEnd, l));
        }
      },
      init: function init() {
        if (this.params.scrollbar.el) {
          var e = this.scrollbar,
            t = this.$el,
            i = this.params.scrollbar,
            a = s(i.el);
          this.params.uniqueNavElements && "string" == typeof i.el && a.length > 1 && 1 === t.find(i.el).length && (a = t.find(i.el));
          var r = a.find("." + this.params.scrollbar.dragClass);
          0 === r.length && (r = s('<div class="' + this.params.scrollbar.dragClass + '"></div>'), a.append(r)), n.extend(e, {
            $el: a,
            el: a[0],
            $dragEl: r,
            dragEl: r[0]
          }), i.draggable && e.enableDraggable();
        }
      },
      destroy: function destroy() {
        this.scrollbar.disableDraggable();
      }
    },
    ne = {
      setTransform: function setTransform(e, t) {
        var i = this.rtl,
          a = s(e),
          r = i ? -1 : 1,
          n = a.attr("data-swiper-parallax") || "0",
          o = a.attr("data-swiper-parallax-x"),
          l = a.attr("data-swiper-parallax-y"),
          d = a.attr("data-swiper-parallax-scale"),
          h = a.attr("data-swiper-parallax-opacity");
        if (o || l ? (o = o || "0", l = l || "0") : this.isHorizontal() ? (o = n, l = "0") : (l = n, o = "0"), o = o.indexOf("%") >= 0 ? parseInt(o, 10) * t * r + "%" : o * t * r + "px", l = l.indexOf("%") >= 0 ? parseInt(l, 10) * t + "%" : l * t + "px", null != h) {
          var p = h - (h - 1) * (1 - Math.abs(t));
          a[0].style.opacity = p;
        }
        if (null == d) a.transform("translate3d(" + o + ", " + l + ", 0px)");else {
          var c = d - (d - 1) * (1 - Math.abs(t));
          a.transform("translate3d(" + o + ", " + l + ", 0px) scale(" + c + ")");
        }
      },
      setTranslate: function setTranslate() {
        var e = this,
          t = e.$el,
          i = e.slides,
          a = e.progress,
          r = e.snapGrid;
        t.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each(function (t, i) {
          e.parallax.setTransform(i, a);
        }), i.each(function (t, i) {
          var n = i.progress;
          e.params.slidesPerGroup > 1 && "auto" !== e.params.slidesPerView && (n += Math.ceil(t / 2) - a * (r.length - 1)), n = Math.min(Math.max(n, -1), 1), s(i).find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each(function (t, i) {
            e.parallax.setTransform(i, n);
          });
        });
      },
      setTransition: function setTransition(e) {
        void 0 === e && (e = this.params.speed);
        this.$el.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each(function (t, i) {
          var a = s(i),
            r = parseInt(a.attr("data-swiper-parallax-duration"), 10) || e;
          0 === e && (r = 0), a.transition(r);
        });
      }
    },
    oe = {
      getDistanceBetweenTouches: function getDistanceBetweenTouches(e) {
        if (e.targetTouches.length < 2) return 1;
        var t = e.targetTouches[0].pageX,
          i = e.targetTouches[0].pageY,
          s = e.targetTouches[1].pageX,
          a = e.targetTouches[1].pageY;
        return Math.sqrt(Math.pow(s - t, 2) + Math.pow(a - i, 2));
      },
      onGestureStart: function onGestureStart(e) {
        var t = this.params.zoom,
          i = this.zoom,
          a = i.gesture;
        if (i.fakeGestureTouched = !1, i.fakeGestureMoved = !1, !o.gestures) {
          if ("touchstart" !== e.type || "touchstart" === e.type && e.targetTouches.length < 2) return;
          i.fakeGestureTouched = !0, a.scaleStart = oe.getDistanceBetweenTouches(e);
        }
        a.$slideEl && a.$slideEl.length || (a.$slideEl = s(e.target).closest("." + this.params.slideClass), 0 === a.$slideEl.length && (a.$slideEl = this.slides.eq(this.activeIndex)), a.$imageEl = a.$slideEl.find("img, svg, canvas, picture, .swiper-zoom-target"), a.$imageWrapEl = a.$imageEl.parent("." + t.containerClass), a.maxRatio = a.$imageWrapEl.attr("data-swiper-zoom") || t.maxRatio, 0 !== a.$imageWrapEl.length) ? (a.$imageEl && a.$imageEl.transition(0), this.zoom.isScaling = !0) : a.$imageEl = void 0;
      },
      onGestureChange: function onGestureChange(e) {
        var t = this.params.zoom,
          i = this.zoom,
          s = i.gesture;
        if (!o.gestures) {
          if ("touchmove" !== e.type || "touchmove" === e.type && e.targetTouches.length < 2) return;
          i.fakeGestureMoved = !0, s.scaleMove = oe.getDistanceBetweenTouches(e);
        }
        s.$imageEl && 0 !== s.$imageEl.length && (i.scale = o.gestures ? e.scale * i.currentScale : s.scaleMove / s.scaleStart * i.currentScale, i.scale > s.maxRatio && (i.scale = s.maxRatio - 1 + Math.pow(i.scale - s.maxRatio + 1, .5)), i.scale < t.minRatio && (i.scale = t.minRatio + 1 - Math.pow(t.minRatio - i.scale + 1, .5)), s.$imageEl.transform("translate3d(0,0,0) scale(" + i.scale + ")"));
      },
      onGestureEnd: function onGestureEnd(e) {
        var t = this.params.zoom,
          i = this.zoom,
          s = i.gesture;
        if (!o.gestures) {
          if (!i.fakeGestureTouched || !i.fakeGestureMoved) return;
          if ("touchend" !== e.type || "touchend" === e.type && e.changedTouches.length < 2 && !I.android) return;
          i.fakeGestureTouched = !1, i.fakeGestureMoved = !1;
        }
        s.$imageEl && 0 !== s.$imageEl.length && (i.scale = Math.max(Math.min(i.scale, s.maxRatio), t.minRatio), s.$imageEl.transition(this.params.speed).transform("translate3d(0,0,0) scale(" + i.scale + ")"), i.currentScale = i.scale, i.isScaling = !1, 1 === i.scale && (s.$slideEl = void 0));
      },
      onTouchStart: function onTouchStart(e) {
        var t = this.zoom,
          i = t.gesture,
          s = t.image;
        i.$imageEl && 0 !== i.$imageEl.length && (s.isTouched || (I.android && e.preventDefault(), s.isTouched = !0, s.touchesStart.x = "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX, s.touchesStart.y = "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY));
      },
      onTouchMove: function onTouchMove(e) {
        var t = this.zoom,
          i = t.gesture,
          s = t.image,
          a = t.velocity;
        if (i.$imageEl && 0 !== i.$imageEl.length && (this.allowClick = !1, s.isTouched && i.$slideEl)) {
          s.isMoved || (s.width = i.$imageEl[0].offsetWidth, s.height = i.$imageEl[0].offsetHeight, s.startX = n.getTranslate(i.$imageWrapEl[0], "x") || 0, s.startY = n.getTranslate(i.$imageWrapEl[0], "y") || 0, i.slideWidth = i.$slideEl[0].offsetWidth, i.slideHeight = i.$slideEl[0].offsetHeight, i.$imageWrapEl.transition(0), this.rtl && (s.startX = -s.startX, s.startY = -s.startY));
          var r = s.width * t.scale,
            o = s.height * t.scale;
          if (!(r < i.slideWidth && o < i.slideHeight)) {
            if (s.minX = Math.min(i.slideWidth / 2 - r / 2, 0), s.maxX = -s.minX, s.minY = Math.min(i.slideHeight / 2 - o / 2, 0), s.maxY = -s.minY, s.touchesCurrent.x = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX, s.touchesCurrent.y = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY, !s.isMoved && !t.isScaling) {
              if (this.isHorizontal() && (Math.floor(s.minX) === Math.floor(s.startX) && s.touchesCurrent.x < s.touchesStart.x || Math.floor(s.maxX) === Math.floor(s.startX) && s.touchesCurrent.x > s.touchesStart.x)) return void (s.isTouched = !1);
              if (!this.isHorizontal() && (Math.floor(s.minY) === Math.floor(s.startY) && s.touchesCurrent.y < s.touchesStart.y || Math.floor(s.maxY) === Math.floor(s.startY) && s.touchesCurrent.y > s.touchesStart.y)) return void (s.isTouched = !1);
            }
            e.preventDefault(), e.stopPropagation(), s.isMoved = !0, s.currentX = s.touchesCurrent.x - s.touchesStart.x + s.startX, s.currentY = s.touchesCurrent.y - s.touchesStart.y + s.startY, s.currentX < s.minX && (s.currentX = s.minX + 1 - Math.pow(s.minX - s.currentX + 1, .8)), s.currentX > s.maxX && (s.currentX = s.maxX - 1 + Math.pow(s.currentX - s.maxX + 1, .8)), s.currentY < s.minY && (s.currentY = s.minY + 1 - Math.pow(s.minY - s.currentY + 1, .8)), s.currentY > s.maxY && (s.currentY = s.maxY - 1 + Math.pow(s.currentY - s.maxY + 1, .8)), a.prevPositionX || (a.prevPositionX = s.touchesCurrent.x), a.prevPositionY || (a.prevPositionY = s.touchesCurrent.y), a.prevTime || (a.prevTime = Date.now()), a.x = (s.touchesCurrent.x - a.prevPositionX) / (Date.now() - a.prevTime) / 2, a.y = (s.touchesCurrent.y - a.prevPositionY) / (Date.now() - a.prevTime) / 2, Math.abs(s.touchesCurrent.x - a.prevPositionX) < 2 && (a.x = 0), Math.abs(s.touchesCurrent.y - a.prevPositionY) < 2 && (a.y = 0), a.prevPositionX = s.touchesCurrent.x, a.prevPositionY = s.touchesCurrent.y, a.prevTime = Date.now(), i.$imageWrapEl.transform("translate3d(" + s.currentX + "px, " + s.currentY + "px,0)");
          }
        }
      },
      onTouchEnd: function onTouchEnd() {
        var e = this.zoom,
          t = e.gesture,
          i = e.image,
          s = e.velocity;
        if (t.$imageEl && 0 !== t.$imageEl.length) {
          if (!i.isTouched || !i.isMoved) return i.isTouched = !1, void (i.isMoved = !1);
          i.isTouched = !1, i.isMoved = !1;
          var a = 300,
            r = 300,
            n = s.x * a,
            o = i.currentX + n,
            l = s.y * r,
            d = i.currentY + l;
          0 !== s.x && (a = Math.abs((o - i.currentX) / s.x)), 0 !== s.y && (r = Math.abs((d - i.currentY) / s.y));
          var h = Math.max(a, r);
          i.currentX = o, i.currentY = d;
          var p = i.width * e.scale,
            c = i.height * e.scale;
          i.minX = Math.min(t.slideWidth / 2 - p / 2, 0), i.maxX = -i.minX, i.minY = Math.min(t.slideHeight / 2 - c / 2, 0), i.maxY = -i.minY, i.currentX = Math.max(Math.min(i.currentX, i.maxX), i.minX), i.currentY = Math.max(Math.min(i.currentY, i.maxY), i.minY), t.$imageWrapEl.transition(h).transform("translate3d(" + i.currentX + "px, " + i.currentY + "px,0)");
        }
      },
      onTransitionEnd: function onTransitionEnd() {
        var e = this.zoom,
          t = e.gesture;
        t.$slideEl && this.previousIndex !== this.activeIndex && (t.$imageEl && t.$imageEl.transform("translate3d(0,0,0) scale(1)"), t.$imageWrapEl && t.$imageWrapEl.transform("translate3d(0,0,0)"), e.scale = 1, e.currentScale = 1, t.$slideEl = void 0, t.$imageEl = void 0, t.$imageWrapEl = void 0);
      },
      toggle: function toggle(e) {
        var t = this.zoom;
        t.scale && 1 !== t.scale ? t.out() : t["in"](e);
      },
      "in": function _in(e) {
        var t,
          i,
          s,
          a,
          r,
          n,
          o,
          l,
          d,
          h,
          p,
          c,
          u,
          v,
          f,
          m,
          g = this.zoom,
          b = this.params.zoom,
          w = g.gesture,
          y = g.image;
        (w.$slideEl || (this.params.virtual && this.params.virtual.enabled && this.virtual ? w.$slideEl = this.$wrapperEl.children("." + this.params.slideActiveClass) : w.$slideEl = this.slides.eq(this.activeIndex), w.$imageEl = w.$slideEl.find("img, svg, canvas, picture, .swiper-zoom-target"), w.$imageWrapEl = w.$imageEl.parent("." + b.containerClass)), w.$imageEl && 0 !== w.$imageEl.length) && (w.$slideEl.addClass("" + b.zoomedSlideClass), void 0 === y.touchesStart.x && e ? (t = "touchend" === e.type ? e.changedTouches[0].pageX : e.pageX, i = "touchend" === e.type ? e.changedTouches[0].pageY : e.pageY) : (t = y.touchesStart.x, i = y.touchesStart.y), g.scale = w.$imageWrapEl.attr("data-swiper-zoom") || b.maxRatio, g.currentScale = w.$imageWrapEl.attr("data-swiper-zoom") || b.maxRatio, e ? (f = w.$slideEl[0].offsetWidth, m = w.$slideEl[0].offsetHeight, s = w.$slideEl.offset().left + f / 2 - t, a = w.$slideEl.offset().top + m / 2 - i, o = w.$imageEl[0].offsetWidth, l = w.$imageEl[0].offsetHeight, d = o * g.scale, h = l * g.scale, u = -(p = Math.min(f / 2 - d / 2, 0)), v = -(c = Math.min(m / 2 - h / 2, 0)), (r = s * g.scale) < p && (r = p), r > u && (r = u), (n = a * g.scale) < c && (n = c), n > v && (n = v)) : (r = 0, n = 0), w.$imageWrapEl.transition(300).transform("translate3d(" + r + "px, " + n + "px,0)"), w.$imageEl.transition(300).transform("translate3d(0,0,0) scale(" + g.scale + ")"));
      },
      out: function out() {
        var e = this.zoom,
          t = this.params.zoom,
          i = e.gesture;
        i.$slideEl || (this.params.virtual && this.params.virtual.enabled && this.virtual ? i.$slideEl = this.$wrapperEl.children("." + this.params.slideActiveClass) : i.$slideEl = this.slides.eq(this.activeIndex), i.$imageEl = i.$slideEl.find("img, svg, canvas, picture, .swiper-zoom-target"), i.$imageWrapEl = i.$imageEl.parent("." + t.containerClass)), i.$imageEl && 0 !== i.$imageEl.length && (e.scale = 1, e.currentScale = 1, i.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"), i.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"), i.$slideEl.removeClass("" + t.zoomedSlideClass), i.$slideEl = void 0);
      },
      enable: function enable() {
        var e = this.zoom;
        if (!e.enabled) {
          e.enabled = !0;
          var t = !("touchstart" !== this.touchEvents.start || !o.passiveListener || !this.params.passiveListeners) && {
              passive: !0,
              capture: !1
            },
            i = !o.passiveListener || {
              passive: !1,
              capture: !0
            },
            s = "." + this.params.slideClass;
          o.gestures ? (this.$wrapperEl.on("gesturestart", s, e.onGestureStart, t), this.$wrapperEl.on("gesturechange", s, e.onGestureChange, t), this.$wrapperEl.on("gestureend", s, e.onGestureEnd, t)) : "touchstart" === this.touchEvents.start && (this.$wrapperEl.on(this.touchEvents.start, s, e.onGestureStart, t), this.$wrapperEl.on(this.touchEvents.move, s, e.onGestureChange, i), this.$wrapperEl.on(this.touchEvents.end, s, e.onGestureEnd, t), this.touchEvents.cancel && this.$wrapperEl.on(this.touchEvents.cancel, s, e.onGestureEnd, t)), this.$wrapperEl.on(this.touchEvents.move, "." + this.params.zoom.containerClass, e.onTouchMove, i);
        }
      },
      disable: function disable() {
        var e = this.zoom;
        if (e.enabled) {
          this.zoom.enabled = !1;
          var t = !("touchstart" !== this.touchEvents.start || !o.passiveListener || !this.params.passiveListeners) && {
              passive: !0,
              capture: !1
            },
            i = !o.passiveListener || {
              passive: !1,
              capture: !0
            },
            s = "." + this.params.slideClass;
          o.gestures ? (this.$wrapperEl.off("gesturestart", s, e.onGestureStart, t), this.$wrapperEl.off("gesturechange", s, e.onGestureChange, t), this.$wrapperEl.off("gestureend", s, e.onGestureEnd, t)) : "touchstart" === this.touchEvents.start && (this.$wrapperEl.off(this.touchEvents.start, s, e.onGestureStart, t), this.$wrapperEl.off(this.touchEvents.move, s, e.onGestureChange, i), this.$wrapperEl.off(this.touchEvents.end, s, e.onGestureEnd, t), this.touchEvents.cancel && this.$wrapperEl.off(this.touchEvents.cancel, s, e.onGestureEnd, t)), this.$wrapperEl.off(this.touchEvents.move, "." + this.params.zoom.containerClass, e.onTouchMove, i);
        }
      }
    },
    le = {
      loadInSlide: function loadInSlide(e, t) {
        void 0 === t && (t = !0);
        var i = this,
          a = i.params.lazy;
        if (void 0 !== e && 0 !== i.slides.length) {
          var r = i.virtual && i.params.virtual.enabled ? i.$wrapperEl.children("." + i.params.slideClass + '[data-swiper-slide-index="' + e + '"]') : i.slides.eq(e),
            n = r.find("." + a.elementClass + ":not(." + a.loadedClass + "):not(." + a.loadingClass + ")");
          !r.hasClass(a.elementClass) || r.hasClass(a.loadedClass) || r.hasClass(a.loadingClass) || (n = n.add(r[0])), 0 !== n.length && n.each(function (e, n) {
            var o = s(n);
            o.addClass(a.loadingClass);
            var l = o.attr("data-background"),
              d = o.attr("data-src"),
              h = o.attr("data-srcset"),
              p = o.attr("data-sizes");
            i.loadImage(o[0], d || l, h, p, !1, function () {
              if (null != i && i && (!i || i.params) && !i.destroyed) {
                if (l ? (o.css("background-image", 'url("' + l + '")'), o.removeAttr("data-background")) : (h && (o.attr("srcset", h), o.removeAttr("data-srcset")), p && (o.attr("sizes", p), o.removeAttr("data-sizes")), d && (o.attr("src", d), o.removeAttr("data-src"))), o.addClass(a.loadedClass).removeClass(a.loadingClass), r.find("." + a.preloaderClass).remove(), i.params.loop && t) {
                  var e = r.attr("data-swiper-slide-index");
                  if (r.hasClass(i.params.slideDuplicateClass)) {
                    var s = i.$wrapperEl.children('[data-swiper-slide-index="' + e + '"]:not(.' + i.params.slideDuplicateClass + ")");
                    i.lazy.loadInSlide(s.index(), !1);
                  } else {
                    var n = i.$wrapperEl.children("." + i.params.slideDuplicateClass + '[data-swiper-slide-index="' + e + '"]');
                    i.lazy.loadInSlide(n.index(), !1);
                  }
                }
                i.emit("lazyImageReady", r[0], o[0]), i.params.autoHeight && i.updateAutoHeight();
              }
            }), i.emit("lazyImageLoad", r[0], o[0]);
          });
        }
      },
      load: function load() {
        var e = this,
          t = e.$wrapperEl,
          i = e.params,
          a = e.slides,
          r = e.activeIndex,
          n = e.virtual && i.virtual.enabled,
          o = i.lazy,
          l = i.slidesPerView;
        function d(e) {
          if (n) {
            if (t.children("." + i.slideClass + '[data-swiper-slide-index="' + e + '"]').length) return !0;
          } else if (a[e]) return !0;
          return !1;
        }
        function h(e) {
          return n ? s(e).attr("data-swiper-slide-index") : s(e).index();
        }
        if ("auto" === l && (l = 0), e.lazy.initialImageLoaded || (e.lazy.initialImageLoaded = !0), e.params.watchSlidesVisibility) t.children("." + i.slideVisibleClass).each(function (t, i) {
          var a = n ? s(i).attr("data-swiper-slide-index") : s(i).index();
          e.lazy.loadInSlide(a);
        });else if (l > 1) for (var p = r; p < r + l; p += 1) d(p) && e.lazy.loadInSlide(p);else e.lazy.loadInSlide(r);
        if (o.loadPrevNext) if (l > 1 || o.loadPrevNextAmount && o.loadPrevNextAmount > 1) {
          for (var c = o.loadPrevNextAmount, u = l, v = Math.min(r + u + Math.max(c, u), a.length), f = Math.max(r - Math.max(u, c), 0), m = r + l; m < v; m += 1) d(m) && e.lazy.loadInSlide(m);
          for (var g = f; g < r; g += 1) d(g) && e.lazy.loadInSlide(g);
        } else {
          var b = t.children("." + i.slideNextClass);
          b.length > 0 && e.lazy.loadInSlide(h(b));
          var w = t.children("." + i.slidePrevClass);
          w.length > 0 && e.lazy.loadInSlide(h(w));
        }
      }
    },
    de = {
      LinearSpline: function LinearSpline(e, t) {
        var i,
          s,
          a,
          r,
          n,
          o = function o(e, t) {
            for (s = -1, i = e.length; i - s > 1;) e[a = i + s >> 1] <= t ? s = a : i = a;
            return i;
          };
        return this.x = e, this.y = t, this.lastIndex = e.length - 1, this.interpolate = function (e) {
          return e ? (n = o(this.x, e), r = n - 1, (e - this.x[r]) * (this.y[n] - this.y[r]) / (this.x[n] - this.x[r]) + this.y[r]) : 0;
        }, this;
      },
      getInterpolateFunction: function getInterpolateFunction(e) {
        this.controller.spline || (this.controller.spline = this.params.loop ? new de.LinearSpline(this.slidesGrid, e.slidesGrid) : new de.LinearSpline(this.snapGrid, e.snapGrid));
      },
      setTranslate: function setTranslate(e, t) {
        var i,
          s,
          a = this,
          r = a.controller.control;
        function n(e) {
          var t = a.rtlTranslate ? -a.translate : a.translate;
          "slide" === a.params.controller.by && (a.controller.getInterpolateFunction(e), s = -a.controller.spline.interpolate(-t)), s && "container" !== a.params.controller.by || (i = (e.maxTranslate() - e.minTranslate()) / (a.maxTranslate() - a.minTranslate()), s = (t - a.minTranslate()) * i + e.minTranslate()), a.params.controller.inverse && (s = e.maxTranslate() - s), e.updateProgress(s), e.setTranslate(s, a), e.updateActiveIndex(), e.updateSlidesClasses();
        }
        if (Array.isArray(r)) for (var o = 0; o < r.length; o += 1) r[o] !== t && r[o] instanceof W && n(r[o]);else r instanceof W && t !== r && n(r);
      },
      setTransition: function setTransition(e, t) {
        var i,
          s = this,
          a = s.controller.control;
        function r(t) {
          t.setTransition(e, s), 0 !== e && (t.transitionStart(), t.params.autoHeight && n.nextTick(function () {
            t.updateAutoHeight();
          }), t.$wrapperEl.transitionEnd(function () {
            a && (t.params.loop && "slide" === s.params.controller.by && t.loopFix(), t.transitionEnd());
          }));
        }
        if (Array.isArray(a)) for (i = 0; i < a.length; i += 1) a[i] !== t && a[i] instanceof W && r(a[i]);else a instanceof W && t !== a && r(a);
      }
    },
    he = {
      makeElFocusable: function makeElFocusable(e) {
        return e.attr("tabIndex", "0"), e;
      },
      addElRole: function addElRole(e, t) {
        return e.attr("role", t), e;
      },
      addElLabel: function addElLabel(e, t) {
        return e.attr("aria-label", t), e;
      },
      disableEl: function disableEl(e) {
        return e.attr("aria-disabled", !0), e;
      },
      enableEl: function enableEl(e) {
        return e.attr("aria-disabled", !1), e;
      },
      onEnterKey: function onEnterKey(e) {
        var t = this.params.a11y;
        if (13 === e.keyCode) {
          var i = s(e.target);
          this.navigation && this.navigation.$nextEl && i.is(this.navigation.$nextEl) && (this.isEnd && !this.params.loop || this.slideNext(), this.isEnd ? this.a11y.notify(t.lastSlideMessage) : this.a11y.notify(t.nextSlideMessage)), this.navigation && this.navigation.$prevEl && i.is(this.navigation.$prevEl) && (this.isBeginning && !this.params.loop || this.slidePrev(), this.isBeginning ? this.a11y.notify(t.firstSlideMessage) : this.a11y.notify(t.prevSlideMessage)), this.pagination && i.is("." + this.params.pagination.bulletClass) && i[0].click();
        }
      },
      notify: function notify(e) {
        var t = this.a11y.liveRegion;
        0 !== t.length && (t.html(""), t.html(e));
      },
      updateNavigation: function updateNavigation() {
        if (!this.params.loop && this.navigation) {
          var e = this.navigation,
            t = e.$nextEl,
            i = e.$prevEl;
          i && i.length > 0 && (this.isBeginning ? this.a11y.disableEl(i) : this.a11y.enableEl(i)), t && t.length > 0 && (this.isEnd ? this.a11y.disableEl(t) : this.a11y.enableEl(t));
        }
      },
      updatePagination: function updatePagination() {
        var e = this,
          t = e.params.a11y;
        e.pagination && e.params.pagination.clickable && e.pagination.bullets && e.pagination.bullets.length && e.pagination.bullets.each(function (i, a) {
          var r = s(a);
          e.a11y.makeElFocusable(r), e.a11y.addElRole(r, "button"), e.a11y.addElLabel(r, t.paginationBulletMessage.replace(/\{\{index\}\}/, r.index() + 1));
        });
      },
      init: function init() {
        this.$el.append(this.a11y.liveRegion);
        var e,
          t,
          i = this.params.a11y;
        this.navigation && this.navigation.$nextEl && (e = this.navigation.$nextEl), this.navigation && this.navigation.$prevEl && (t = this.navigation.$prevEl), e && (this.a11y.makeElFocusable(e), this.a11y.addElRole(e, "button"), this.a11y.addElLabel(e, i.nextSlideMessage), e.on("keydown", this.a11y.onEnterKey)), t && (this.a11y.makeElFocusable(t), this.a11y.addElRole(t, "button"), this.a11y.addElLabel(t, i.prevSlideMessage), t.on("keydown", this.a11y.onEnterKey)), this.pagination && this.params.pagination.clickable && this.pagination.bullets && this.pagination.bullets.length && this.pagination.$el.on("keydown", "." + this.params.pagination.bulletClass, this.a11y.onEnterKey);
      },
      destroy: function destroy() {
        var e, t;
        this.a11y.liveRegion && this.a11y.liveRegion.length > 0 && this.a11y.liveRegion.remove(), this.navigation && this.navigation.$nextEl && (e = this.navigation.$nextEl), this.navigation && this.navigation.$prevEl && (t = this.navigation.$prevEl), e && e.off("keydown", this.a11y.onEnterKey), t && t.off("keydown", this.a11y.onEnterKey), this.pagination && this.params.pagination.clickable && this.pagination.bullets && this.pagination.bullets.length && this.pagination.$el.off("keydown", "." + this.params.pagination.bulletClass, this.a11y.onEnterKey);
      }
    },
    pe = {
      init: function init() {
        if (this.params.history) {
          if (!t.history || !t.history.pushState) return this.params.history.enabled = !1, void (this.params.hashNavigation.enabled = !0);
          var e = this.history;
          e.initialized = !0, e.paths = pe.getPathValues(), (e.paths.key || e.paths.value) && (e.scrollToSlide(0, e.paths.value, this.params.runCallbacksOnInit), this.params.history.replaceState || t.addEventListener("popstate", this.history.setHistoryPopState));
        }
      },
      destroy: function destroy() {
        this.params.history.replaceState || t.removeEventListener("popstate", this.history.setHistoryPopState);
      },
      setHistoryPopState: function setHistoryPopState() {
        this.history.paths = pe.getPathValues(), this.history.scrollToSlide(this.params.speed, this.history.paths.value, !1);
      },
      getPathValues: function getPathValues() {
        var e = t.location.pathname.slice(1).split("/").filter(function (e) {
            return "" !== e;
          }),
          i = e.length;
        return {
          key: e[i - 2],
          value: e[i - 1]
        };
      },
      setHistory: function setHistory(e, i) {
        if (this.history.initialized && this.params.history.enabled) {
          var s = this.slides.eq(i),
            a = pe.slugify(s.attr("data-history"));
          t.location.pathname.includes(e) || (a = e + "/" + a);
          var r = t.history.state;
          r && r.value === a || (this.params.history.replaceState ? t.history.replaceState({
            value: a
          }, null, a) : t.history.pushState({
            value: a
          }, null, a));
        }
      },
      slugify: function slugify(e) {
        return e.toString().replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+/, "").replace(/-+$/, "");
      },
      scrollToSlide: function scrollToSlide(e, t, i) {
        if (t) for (var s = 0, a = this.slides.length; s < a; s += 1) {
          var r = this.slides.eq(s);
          if (pe.slugify(r.attr("data-history")) === t && !r.hasClass(this.params.slideDuplicateClass)) {
            var n = r.index();
            this.slideTo(n, e, i);
          }
        } else this.slideTo(0, e, i);
      }
    },
    ce = {
      onHashCange: function onHashCange() {
        var t = e.location.hash.replace("#", "");
        if (t !== this.slides.eq(this.activeIndex).attr("data-hash")) {
          var i = this.$wrapperEl.children("." + this.params.slideClass + '[data-hash="' + t + '"]').index();
          if (void 0 === i) return;
          this.slideTo(i);
        }
      },
      setHash: function setHash() {
        if (this.hashNavigation.initialized && this.params.hashNavigation.enabled) if (this.params.hashNavigation.replaceState && t.history && t.history.replaceState) t.history.replaceState(null, null, "#" + this.slides.eq(this.activeIndex).attr("data-hash") || "");else {
          var i = this.slides.eq(this.activeIndex),
            s = i.attr("data-hash") || i.attr("data-history");
          e.location.hash = s || "";
        }
      },
      init: function init() {
        if (!(!this.params.hashNavigation.enabled || this.params.history && this.params.history.enabled)) {
          this.hashNavigation.initialized = !0;
          var i = e.location.hash.replace("#", "");
          if (i) for (var a = 0, r = this.slides.length; a < r; a += 1) {
            var n = this.slides.eq(a);
            if ((n.attr("data-hash") || n.attr("data-history")) === i && !n.hasClass(this.params.slideDuplicateClass)) {
              var o = n.index();
              this.slideTo(o, 0, this.params.runCallbacksOnInit, !0);
            }
          }
          this.params.hashNavigation.watchState && s(t).on("hashchange", this.hashNavigation.onHashCange);
        }
      },
      destroy: function destroy() {
        this.params.hashNavigation.watchState && s(t).off("hashchange", this.hashNavigation.onHashCange);
      }
    },
    ue = {
      run: function run() {
        var e = this,
          t = e.slides.eq(e.activeIndex),
          i = e.params.autoplay.delay;
        t.attr("data-swiper-autoplay") && (i = t.attr("data-swiper-autoplay") || e.params.autoplay.delay), clearTimeout(e.autoplay.timeout), e.autoplay.timeout = n.nextTick(function () {
          e.params.autoplay.reverseDirection ? e.params.loop ? (e.loopFix(), e.slidePrev(e.params.speed, !0, !0), e.emit("autoplay")) : e.isBeginning ? e.params.autoplay.stopOnLastSlide ? e.autoplay.stop() : (e.slideTo(e.slides.length - 1, e.params.speed, !0, !0), e.emit("autoplay")) : (e.slidePrev(e.params.speed, !0, !0), e.emit("autoplay")) : e.params.loop ? (e.loopFix(), e.slideNext(e.params.speed, !0, !0), e.emit("autoplay")) : e.isEnd ? e.params.autoplay.stopOnLastSlide ? e.autoplay.stop() : (e.slideTo(0, e.params.speed, !0, !0), e.emit("autoplay")) : (e.slideNext(e.params.speed, !0, !0), e.emit("autoplay")), e.params.cssMode && e.autoplay.running && e.autoplay.run();
        }, i);
      },
      start: function start() {
        return void 0 === this.autoplay.timeout && !this.autoplay.running && (this.autoplay.running = !0, this.emit("autoplayStart"), this.autoplay.run(), !0);
      },
      stop: function stop() {
        return !!this.autoplay.running && void 0 !== this.autoplay.timeout && (this.autoplay.timeout && (clearTimeout(this.autoplay.timeout), this.autoplay.timeout = void 0), this.autoplay.running = !1, this.emit("autoplayStop"), !0);
      },
      pause: function pause(e) {
        this.autoplay.running && (this.autoplay.paused || (this.autoplay.timeout && clearTimeout(this.autoplay.timeout), this.autoplay.paused = !0, 0 !== e && this.params.autoplay.waitForTransition ? (this.$wrapperEl[0].addEventListener("transitionend", this.autoplay.onTransitionEnd), this.$wrapperEl[0].addEventListener("webkitTransitionEnd", this.autoplay.onTransitionEnd)) : (this.autoplay.paused = !1, this.autoplay.run())));
      }
    },
    ve = {
      setTranslate: function setTranslate() {
        for (var e = this.slides, t = 0; t < e.length; t += 1) {
          var i = this.slides.eq(t),
            s = -i[0].swiperSlideOffset;
          this.params.virtualTranslate || (s -= this.translate);
          var a = 0;
          this.isHorizontal() || (a = s, s = 0);
          var r = this.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(i[0].progress), 0) : 1 + Math.min(Math.max(i[0].progress, -1), 0);
          i.css({
            opacity: r
          }).transform("translate3d(" + s + "px, " + a + "px, 0px)");
        }
      },
      setTransition: function setTransition(e) {
        var t = this,
          i = t.slides,
          s = t.$wrapperEl;
        if (i.transition(e), t.params.virtualTranslate && 0 !== e) {
          var a = !1;
          i.transitionEnd(function () {
            if (!a && t && !t.destroyed) {
              a = !0, t.animating = !1;
              for (var e = ["webkitTransitionEnd", "transitionend"], i = 0; i < e.length; i += 1) s.trigger(e[i]);
            }
          });
        }
      }
    },
    fe = {
      setTranslate: function setTranslate() {
        var e,
          t = this.$el,
          i = this.$wrapperEl,
          a = this.slides,
          r = this.width,
          n = this.height,
          o = this.rtlTranslate,
          l = this.size,
          d = this.params.cubeEffect,
          h = this.isHorizontal(),
          p = this.virtual && this.params.virtual.enabled,
          c = 0;
        d.shadow && (h ? (0 === (e = i.find(".swiper-cube-shadow")).length && (e = s('<div class="swiper-cube-shadow"></div>'), i.append(e)), e.css({
          height: r + "px"
        })) : 0 === (e = t.find(".swiper-cube-shadow")).length && (e = s('<div class="swiper-cube-shadow"></div>'), t.append(e)));
        for (var u = 0; u < a.length; u += 1) {
          var v = a.eq(u),
            f = u;
          p && (f = parseInt(v.attr("data-swiper-slide-index"), 10));
          var m = 90 * f,
            g = Math.floor(m / 360);
          o && (m = -m, g = Math.floor(-m / 360));
          var b = Math.max(Math.min(v[0].progress, 1), -1),
            w = 0,
            y = 0,
            x = 0;
          f % 4 == 0 ? (w = 4 * -g * l, x = 0) : (f - 1) % 4 == 0 ? (w = 0, x = 4 * -g * l) : (f - 2) % 4 == 0 ? (w = l + 4 * g * l, x = l) : (f - 3) % 4 == 0 && (w = -l, x = 3 * l + 4 * l * g), o && (w = -w), h || (y = w, w = 0);
          var T = "rotateX(" + (h ? 0 : -m) + "deg) rotateY(" + (h ? m : 0) + "deg) translate3d(" + w + "px, " + y + "px, " + x + "px)";
          if (b <= 1 && b > -1 && (c = 90 * f + 90 * b, o && (c = 90 * -f - 90 * b)), v.transform(T), d.slideShadows) {
            var E = h ? v.find(".swiper-slide-shadow-left") : v.find(".swiper-slide-shadow-top"),
              S = h ? v.find(".swiper-slide-shadow-right") : v.find(".swiper-slide-shadow-bottom");
            0 === E.length && (E = s('<div class="swiper-slide-shadow-' + (h ? "left" : "top") + '"></div>'), v.append(E)), 0 === S.length && (S = s('<div class="swiper-slide-shadow-' + (h ? "right" : "bottom") + '"></div>'), v.append(S)), E.length && (E[0].style.opacity = Math.max(-b, 0)), S.length && (S[0].style.opacity = Math.max(b, 0));
          }
        }
        if (i.css({
          "-webkit-transform-origin": "50% 50% -" + l / 2 + "px",
          "-moz-transform-origin": "50% 50% -" + l / 2 + "px",
          "-ms-transform-origin": "50% 50% -" + l / 2 + "px",
          "transform-origin": "50% 50% -" + l / 2 + "px"
        }), d.shadow) if (h) e.transform("translate3d(0px, " + (r / 2 + d.shadowOffset) + "px, " + -r / 2 + "px) rotateX(90deg) rotateZ(0deg) scale(" + d.shadowScale + ")");else {
          var C = Math.abs(c) - 90 * Math.floor(Math.abs(c) / 90),
            M = 1.5 - (Math.sin(2 * C * Math.PI / 360) / 2 + Math.cos(2 * C * Math.PI / 360) / 2),
            P = d.shadowScale,
            z = d.shadowScale / M,
            k = d.shadowOffset;
          e.transform("scale3d(" + P + ", 1, " + z + ") translate3d(0px, " + (n / 2 + k) + "px, " + -n / 2 / z + "px) rotateX(-90deg)");
        }
        var $ = j.isSafari || j.isUiWebView ? -l / 2 : 0;
        i.transform("translate3d(0px,0," + $ + "px) rotateX(" + (this.isHorizontal() ? 0 : c) + "deg) rotateY(" + (this.isHorizontal() ? -c : 0) + "deg)");
      },
      setTransition: function setTransition(e) {
        var t = this.$el;
        this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), this.params.cubeEffect.shadow && !this.isHorizontal() && t.find(".swiper-cube-shadow").transition(e);
      }
    },
    me = {
      setTranslate: function setTranslate() {
        for (var e = this.slides, t = this.rtlTranslate, i = 0; i < e.length; i += 1) {
          var a = e.eq(i),
            r = a[0].progress;
          this.params.flipEffect.limitRotation && (r = Math.max(Math.min(a[0].progress, 1), -1));
          var n = -180 * r,
            o = 0,
            l = -a[0].swiperSlideOffset,
            d = 0;
          if (this.isHorizontal() ? t && (n = -n) : (d = l, l = 0, o = -n, n = 0), a[0].style.zIndex = -Math.abs(Math.round(r)) + e.length, this.params.flipEffect.slideShadows) {
            var h = this.isHorizontal() ? a.find(".swiper-slide-shadow-left") : a.find(".swiper-slide-shadow-top"),
              p = this.isHorizontal() ? a.find(".swiper-slide-shadow-right") : a.find(".swiper-slide-shadow-bottom");
            0 === h.length && (h = s('<div class="swiper-slide-shadow-' + (this.isHorizontal() ? "left" : "top") + '"></div>'), a.append(h)), 0 === p.length && (p = s('<div class="swiper-slide-shadow-' + (this.isHorizontal() ? "right" : "bottom") + '"></div>'), a.append(p)), h.length && (h[0].style.opacity = Math.max(-r, 0)), p.length && (p[0].style.opacity = Math.max(r, 0));
          }
          a.transform("translate3d(" + l + "px, " + d + "px, 0px) rotateX(" + o + "deg) rotateY(" + n + "deg)");
        }
      },
      setTransition: function setTransition(e) {
        var t = this,
          i = t.slides,
          s = t.activeIndex,
          a = t.$wrapperEl;
        if (i.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), t.params.virtualTranslate && 0 !== e) {
          var r = !1;
          i.eq(s).transitionEnd(function () {
            if (!r && t && !t.destroyed) {
              r = !0, t.animating = !1;
              for (var e = ["webkitTransitionEnd", "transitionend"], i = 0; i < e.length; i += 1) a.trigger(e[i]);
            }
          });
        }
      }
    },
    ge = {
      setTranslate: function setTranslate() {
        for (var e = this.width, t = this.height, i = this.slides, a = this.$wrapperEl, r = this.slidesSizesGrid, n = this.params.coverflowEffect, l = this.isHorizontal(), d = this.translate, h = l ? e / 2 - d : t / 2 - d, p = l ? n.rotate : -n.rotate, c = n.depth, u = 0, v = i.length; u < v; u += 1) {
          var f = i.eq(u),
            m = r[u],
            g = (h - f[0].swiperSlideOffset - m / 2) / m * n.modifier,
            b = l ? p * g : 0,
            w = l ? 0 : p * g,
            y = -c * Math.abs(g),
            x = n.stretch;
          "string" == typeof x && -1 !== x.indexOf("%") && (x = parseFloat(n.stretch) / 100 * m);
          var T = l ? 0 : x * g,
            E = l ? x * g : 0;
          Math.abs(E) < .001 && (E = 0), Math.abs(T) < .001 && (T = 0), Math.abs(y) < .001 && (y = 0), Math.abs(b) < .001 && (b = 0), Math.abs(w) < .001 && (w = 0);
          var S = "translate3d(" + E + "px," + T + "px," + y + "px)  rotateX(" + w + "deg) rotateY(" + b + "deg)";
          if (f.transform(S), f[0].style.zIndex = 1 - Math.abs(Math.round(g)), n.slideShadows) {
            var C = l ? f.find(".swiper-slide-shadow-left") : f.find(".swiper-slide-shadow-top"),
              M = l ? f.find(".swiper-slide-shadow-right") : f.find(".swiper-slide-shadow-bottom");
            0 === C.length && (C = s('<div class="swiper-slide-shadow-' + (l ? "left" : "top") + '"></div>'), f.append(C)), 0 === M.length && (M = s('<div class="swiper-slide-shadow-' + (l ? "right" : "bottom") + '"></div>'), f.append(M)), C.length && (C[0].style.opacity = g > 0 ? g : 0), M.length && (M[0].style.opacity = -g > 0 ? -g : 0);
          }
        }
        (o.pointerEvents || o.prefixedPointerEvents) && (a[0].style.perspectiveOrigin = h + "px 50%");
      },
      setTransition: function setTransition(e) {
        this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e);
      }
    },
    be = {
      init: function init() {
        var e = this.params.thumbs,
          t = this.constructor;
        e.swiper instanceof t ? (this.thumbs.swiper = e.swiper, n.extend(this.thumbs.swiper.originalParams, {
          watchSlidesProgress: !0,
          slideToClickedSlide: !1
        }), n.extend(this.thumbs.swiper.params, {
          watchSlidesProgress: !0,
          slideToClickedSlide: !1
        })) : n.isObject(e.swiper) && (this.thumbs.swiper = new t(n.extend({}, e.swiper, {
          watchSlidesVisibility: !0,
          watchSlidesProgress: !0,
          slideToClickedSlide: !1
        })), this.thumbs.swiperCreated = !0), this.thumbs.swiper.$el.addClass(this.params.thumbs.thumbsContainerClass), this.thumbs.swiper.on("tap", this.thumbs.onThumbClick);
      },
      onThumbClick: function onThumbClick() {
        var e = this.thumbs.swiper;
        if (e) {
          var t = e.clickedIndex,
            i = e.clickedSlide;
          if (!(i && s(i).hasClass(this.params.thumbs.slideThumbActiveClass) || null == t)) {
            var a;
            if (a = e.params.loop ? parseInt(s(e.clickedSlide).attr("data-swiper-slide-index"), 10) : t, this.params.loop) {
              var r = this.activeIndex;
              this.slides.eq(r).hasClass(this.params.slideDuplicateClass) && (this.loopFix(), this._clientLeft = this.$wrapperEl[0].clientLeft, r = this.activeIndex);
              var n = this.slides.eq(r).prevAll('[data-swiper-slide-index="' + a + '"]').eq(0).index(),
                o = this.slides.eq(r).nextAll('[data-swiper-slide-index="' + a + '"]').eq(0).index();
              a = void 0 === n ? o : void 0 === o ? n : o - r < r - n ? o : n;
            }
            this.slideTo(a);
          }
        }
      },
      update: function update(e) {
        var t = this.thumbs.swiper;
        if (t) {
          var i = "auto" === t.params.slidesPerView ? t.slidesPerViewDynamic() : t.params.slidesPerView,
            s = this.params.thumbs.autoScrollOffset,
            a = s && !t.params.loop;
          if (this.realIndex !== t.realIndex || a) {
            var r,
              n,
              o = t.activeIndex;
            if (t.params.loop) {
              t.slides.eq(o).hasClass(t.params.slideDuplicateClass) && (t.loopFix(), t._clientLeft = t.$wrapperEl[0].clientLeft, o = t.activeIndex);
              var l = t.slides.eq(o).prevAll('[data-swiper-slide-index="' + this.realIndex + '"]').eq(0).index(),
                d = t.slides.eq(o).nextAll('[data-swiper-slide-index="' + this.realIndex + '"]').eq(0).index();
              r = void 0 === l ? d : void 0 === d ? l : d - o == o - l ? o : d - o < o - l ? d : l, n = this.activeIndex > this.previousIndex ? "next" : "prev";
            } else n = (r = this.realIndex) > this.previousIndex ? "next" : "prev";
            a && (r += "next" === n ? s : -1 * s), t.visibleSlidesIndexes && t.visibleSlidesIndexes.indexOf(r) < 0 && (t.params.centeredSlides ? r = r > o ? r - Math.floor(i / 2) + 1 : r + Math.floor(i / 2) - 1 : r > o && (r = r - i + 1), t.slideTo(r, e ? 0 : void 0));
          }
          var h = 1,
            p = this.params.thumbs.slideThumbActiveClass;
          if (this.params.slidesPerView > 1 && !this.params.centeredSlides && (h = this.params.slidesPerView), this.params.thumbs.multipleActiveThumbs || (h = 1), h = Math.floor(h), t.slides.removeClass(p), t.params.loop || t.params.virtual && t.params.virtual.enabled) for (var c = 0; c < h; c += 1) t.$wrapperEl.children('[data-swiper-slide-index="' + (this.realIndex + c) + '"]').addClass(p);else for (var u = 0; u < h; u += 1) t.slides.eq(this.realIndex + u).addClass(p);
        }
      }
    },
    we = [R, q, K, U, Z, J, te, {
      name: "mousewheel",
      params: {
        mousewheel: {
          enabled: !1,
          releaseOnEdges: !1,
          invert: !1,
          forceToAxis: !1,
          sensitivity: 1,
          eventsTarged: "container"
        }
      },
      create: function create() {
        n.extend(this, {
          mousewheel: {
            enabled: !1,
            enable: ie.enable.bind(this),
            disable: ie.disable.bind(this),
            handle: ie.handle.bind(this),
            handleMouseEnter: ie.handleMouseEnter.bind(this),
            handleMouseLeave: ie.handleMouseLeave.bind(this),
            animateSlider: ie.animateSlider.bind(this),
            releaseScroll: ie.releaseScroll.bind(this),
            lastScrollTime: n.now(),
            lastEventBeforeSnap: void 0,
            recentWheelEvents: []
          }
        });
      },
      on: {
        init: function init() {
          !this.params.mousewheel.enabled && this.params.cssMode && this.mousewheel.disable(), this.params.mousewheel.enabled && this.mousewheel.enable();
        },
        destroy: function destroy() {
          this.params.cssMode && this.mousewheel.enable(), this.mousewheel.enabled && this.mousewheel.disable();
        }
      }
    }, {
      name: "navigation",
      params: {
        navigation: {
          nextEl: null,
          prevEl: null,
          hideOnClick: !1,
          disabledClass: "swiper-button-disabled",
          hiddenClass: "swiper-button-hidden",
          lockClass: "swiper-button-lock"
        }
      },
      create: function create() {
        n.extend(this, {
          navigation: {
            init: se.init.bind(this),
            update: se.update.bind(this),
            destroy: se.destroy.bind(this),
            onNextClick: se.onNextClick.bind(this),
            onPrevClick: se.onPrevClick.bind(this)
          }
        });
      },
      on: {
        init: function init() {
          this.navigation.init(), this.navigation.update();
        },
        toEdge: function toEdge() {
          this.navigation.update();
        },
        fromEdge: function fromEdge() {
          this.navigation.update();
        },
        destroy: function destroy() {
          this.navigation.destroy();
        },
        click: function click(e) {
          var t,
            i = this.navigation,
            a = i.$nextEl,
            r = i.$prevEl;
          !this.params.navigation.hideOnClick || s(e.target).is(r) || s(e.target).is(a) || (a ? t = a.hasClass(this.params.navigation.hiddenClass) : r && (t = r.hasClass(this.params.navigation.hiddenClass)), !0 === t ? this.emit("navigationShow", this) : this.emit("navigationHide", this), a && a.toggleClass(this.params.navigation.hiddenClass), r && r.toggleClass(this.params.navigation.hiddenClass));
        }
      }
    }, {
      name: "pagination",
      params: {
        pagination: {
          el: null,
          bulletElement: "span",
          clickable: !1,
          hideOnClick: !1,
          renderBullet: null,
          renderProgressbar: null,
          renderFraction: null,
          renderCustom: null,
          progressbarOpposite: !1,
          type: "bullets",
          dynamicBullets: !1,
          dynamicMainBullets: 1,
          formatFractionCurrent: function formatFractionCurrent(e) {
            return e;
          },
          formatFractionTotal: function formatFractionTotal(e) {
            return e;
          },
          bulletClass: "swiper-pagination-bullet",
          bulletActiveClass: "swiper-pagination-bullet-active",
          modifierClass: "swiper-pagination-",
          currentClass: "swiper-pagination-current",
          totalClass: "swiper-pagination-total",
          hiddenClass: "swiper-pagination-hidden",
          progressbarFillClass: "swiper-pagination-progressbar-fill",
          progressbarOppositeClass: "swiper-pagination-progressbar-opposite",
          clickableClass: "swiper-pagination-clickable",
          lockClass: "swiper-pagination-lock"
        }
      },
      create: function create() {
        n.extend(this, {
          pagination: {
            init: ae.init.bind(this),
            render: ae.render.bind(this),
            update: ae.update.bind(this),
            destroy: ae.destroy.bind(this),
            dynamicBulletIndex: 0
          }
        });
      },
      on: {
        init: function init() {
          this.pagination.init(), this.pagination.render(), this.pagination.update();
        },
        activeIndexChange: function activeIndexChange() {
          (this.params.loop || void 0 === this.snapIndex) && this.pagination.update();
        },
        snapIndexChange: function snapIndexChange() {
          this.params.loop || this.pagination.update();
        },
        slidesLengthChange: function slidesLengthChange() {
          this.params.loop && (this.pagination.render(), this.pagination.update());
        },
        snapGridLengthChange: function snapGridLengthChange() {
          this.params.loop || (this.pagination.render(), this.pagination.update());
        },
        destroy: function destroy() {
          this.pagination.destroy();
        },
        click: function click(e) {
          this.params.pagination.el && this.params.pagination.hideOnClick && this.pagination.$el.length > 0 && !s(e.target).hasClass(this.params.pagination.bulletClass) && (!0 === this.pagination.$el.hasClass(this.params.pagination.hiddenClass) ? this.emit("paginationShow", this) : this.emit("paginationHide", this), this.pagination.$el.toggleClass(this.params.pagination.hiddenClass));
        }
      }
    }, {
      name: "scrollbar",
      params: {
        scrollbar: {
          el: null,
          dragSize: "auto",
          hide: !1,
          draggable: !1,
          snapOnRelease: !0,
          lockClass: "swiper-scrollbar-lock",
          dragClass: "swiper-scrollbar-drag"
        }
      },
      create: function create() {
        n.extend(this, {
          scrollbar: {
            init: re.init.bind(this),
            destroy: re.destroy.bind(this),
            updateSize: re.updateSize.bind(this),
            setTranslate: re.setTranslate.bind(this),
            setTransition: re.setTransition.bind(this),
            enableDraggable: re.enableDraggable.bind(this),
            disableDraggable: re.disableDraggable.bind(this),
            setDragPosition: re.setDragPosition.bind(this),
            getPointerPosition: re.getPointerPosition.bind(this),
            onDragStart: re.onDragStart.bind(this),
            onDragMove: re.onDragMove.bind(this),
            onDragEnd: re.onDragEnd.bind(this),
            isTouched: !1,
            timeout: null,
            dragTimeout: null
          }
        });
      },
      on: {
        init: function init() {
          this.scrollbar.init(), this.scrollbar.updateSize(), this.scrollbar.setTranslate();
        },
        update: function update() {
          this.scrollbar.updateSize();
        },
        resize: function resize() {
          this.scrollbar.updateSize();
        },
        observerUpdate: function observerUpdate() {
          this.scrollbar.updateSize();
        },
        setTranslate: function setTranslate() {
          this.scrollbar.setTranslate();
        },
        setTransition: function setTransition(e) {
          this.scrollbar.setTransition(e);
        },
        destroy: function destroy() {
          this.scrollbar.destroy();
        }
      }
    }, {
      name: "parallax",
      params: {
        parallax: {
          enabled: !1
        }
      },
      create: function create() {
        n.extend(this, {
          parallax: {
            setTransform: ne.setTransform.bind(this),
            setTranslate: ne.setTranslate.bind(this),
            setTransition: ne.setTransition.bind(this)
          }
        });
      },
      on: {
        beforeInit: function beforeInit() {
          this.params.parallax.enabled && (this.params.watchSlidesProgress = !0, this.originalParams.watchSlidesProgress = !0);
        },
        init: function init() {
          this.params.parallax.enabled && this.parallax.setTranslate();
        },
        setTranslate: function setTranslate() {
          this.params.parallax.enabled && this.parallax.setTranslate();
        },
        setTransition: function setTransition(e) {
          this.params.parallax.enabled && this.parallax.setTransition(e);
        }
      }
    }, {
      name: "zoom",
      params: {
        zoom: {
          enabled: !1,
          maxRatio: 3,
          minRatio: 1,
          toggle: !0,
          containerClass: "swiper-zoom-container",
          zoomedSlideClass: "swiper-slide-zoomed"
        }
      },
      create: function create() {
        var e = this,
          t = {
            enabled: !1,
            scale: 1,
            currentScale: 1,
            isScaling: !1,
            gesture: {
              $slideEl: void 0,
              slideWidth: void 0,
              slideHeight: void 0,
              $imageEl: void 0,
              $imageWrapEl: void 0,
              maxRatio: 3
            },
            image: {
              isTouched: void 0,
              isMoved: void 0,
              currentX: void 0,
              currentY: void 0,
              minX: void 0,
              minY: void 0,
              maxX: void 0,
              maxY: void 0,
              width: void 0,
              height: void 0,
              startX: void 0,
              startY: void 0,
              touchesStart: {},
              touchesCurrent: {}
            },
            velocity: {
              x: void 0,
              y: void 0,
              prevPositionX: void 0,
              prevPositionY: void 0,
              prevTime: void 0
            }
          };
        "onGestureStart onGestureChange onGestureEnd onTouchStart onTouchMove onTouchEnd onTransitionEnd toggle enable disable in out".split(" ").forEach(function (i) {
          t[i] = oe[i].bind(e);
        }), n.extend(e, {
          zoom: t
        });
        var i = 1;
        Object.defineProperty(e.zoom, "scale", {
          get: function get() {
            return i;
          },
          set: function set(t) {
            if (i !== t) {
              var s = e.zoom.gesture.$imageEl ? e.zoom.gesture.$imageEl[0] : void 0,
                a = e.zoom.gesture.$slideEl ? e.zoom.gesture.$slideEl[0] : void 0;
              e.emit("zoomChange", t, s, a);
            }
            i = t;
          }
        });
      },
      on: {
        init: function init() {
          this.params.zoom.enabled && this.zoom.enable();
        },
        destroy: function destroy() {
          this.zoom.disable();
        },
        touchStart: function touchStart(e) {
          this.zoom.enabled && this.zoom.onTouchStart(e);
        },
        touchEnd: function touchEnd(e) {
          this.zoom.enabled && this.zoom.onTouchEnd(e);
        },
        doubleTap: function doubleTap(e) {
          this.params.zoom.enabled && this.zoom.enabled && this.params.zoom.toggle && this.zoom.toggle(e);
        },
        transitionEnd: function transitionEnd() {
          this.zoom.enabled && this.params.zoom.enabled && this.zoom.onTransitionEnd();
        },
        slideChange: function slideChange() {
          this.zoom.enabled && this.params.zoom.enabled && this.params.cssMode && this.zoom.onTransitionEnd();
        }
      }
    }, {
      name: "lazy",
      params: {
        lazy: {
          enabled: !1,
          loadPrevNext: !1,
          loadPrevNextAmount: 1,
          loadOnTransitionStart: !1,
          elementClass: "swiper-lazy",
          loadingClass: "swiper-lazy-loading",
          loadedClass: "swiper-lazy-loaded",
          preloaderClass: "swiper-lazy-preloader"
        }
      },
      create: function create() {
        n.extend(this, {
          lazy: {
            initialImageLoaded: !1,
            load: le.load.bind(this),
            loadInSlide: le.loadInSlide.bind(this)
          }
        });
      },
      on: {
        beforeInit: function beforeInit() {
          this.params.lazy.enabled && this.params.preloadImages && (this.params.preloadImages = !1);
        },
        init: function init() {
          this.params.lazy.enabled && !this.params.loop && 0 === this.params.initialSlide && this.lazy.load();
        },
        scroll: function scroll() {
          this.params.freeMode && !this.params.freeModeSticky && this.lazy.load();
        },
        resize: function resize() {
          this.params.lazy.enabled && this.lazy.load();
        },
        scrollbarDragMove: function scrollbarDragMove() {
          this.params.lazy.enabled && this.lazy.load();
        },
        transitionStart: function transitionStart() {
          this.params.lazy.enabled && (this.params.lazy.loadOnTransitionStart || !this.params.lazy.loadOnTransitionStart && !this.lazy.initialImageLoaded) && this.lazy.load();
        },
        transitionEnd: function transitionEnd() {
          this.params.lazy.enabled && !this.params.lazy.loadOnTransitionStart && this.lazy.load();
        },
        slideChange: function slideChange() {
          this.params.lazy.enabled && this.params.cssMode && this.lazy.load();
        }
      }
    }, {
      name: "controller",
      params: {
        controller: {
          control: void 0,
          inverse: !1,
          by: "slide"
        }
      },
      create: function create() {
        n.extend(this, {
          controller: {
            control: this.params.controller.control,
            getInterpolateFunction: de.getInterpolateFunction.bind(this),
            setTranslate: de.setTranslate.bind(this),
            setTransition: de.setTransition.bind(this)
          }
        });
      },
      on: {
        update: function update() {
          this.controller.control && this.controller.spline && (this.controller.spline = void 0, delete this.controller.spline);
        },
        resize: function resize() {
          this.controller.control && this.controller.spline && (this.controller.spline = void 0, delete this.controller.spline);
        },
        observerUpdate: function observerUpdate() {
          this.controller.control && this.controller.spline && (this.controller.spline = void 0, delete this.controller.spline);
        },
        setTranslate: function setTranslate(e, t) {
          this.controller.control && this.controller.setTranslate(e, t);
        },
        setTransition: function setTransition(e, t) {
          this.controller.control && this.controller.setTransition(e, t);
        }
      }
    }, {
      name: "a11y",
      params: {
        a11y: {
          enabled: !0,
          notificationClass: "swiper-notification",
          prevSlideMessage: "Previous slide",
          nextSlideMessage: "Next slide",
          firstSlideMessage: "This is the first slide",
          lastSlideMessage: "This is the last slide",
          paginationBulletMessage: "Go to slide {{index}}"
        }
      },
      create: function create() {
        var e = this;
        n.extend(e, {
          a11y: {
            liveRegion: s('<span class="' + e.params.a11y.notificationClass + '" aria-live="assertive" aria-atomic="true"></span>')
          }
        }), Object.keys(he).forEach(function (t) {
          e.a11y[t] = he[t].bind(e);
        });
      },
      on: {
        init: function init() {
          this.params.a11y.enabled && (this.a11y.init(), this.a11y.updateNavigation());
        },
        toEdge: function toEdge() {
          this.params.a11y.enabled && this.a11y.updateNavigation();
        },
        fromEdge: function fromEdge() {
          this.params.a11y.enabled && this.a11y.updateNavigation();
        },
        paginationUpdate: function paginationUpdate() {
          this.params.a11y.enabled && this.a11y.updatePagination();
        },
        destroy: function destroy() {
          this.params.a11y.enabled && this.a11y.destroy();
        }
      }
    }, {
      name: "history",
      params: {
        history: {
          enabled: !1,
          replaceState: !1,
          key: "slides"
        }
      },
      create: function create() {
        n.extend(this, {
          history: {
            init: pe.init.bind(this),
            setHistory: pe.setHistory.bind(this),
            setHistoryPopState: pe.setHistoryPopState.bind(this),
            scrollToSlide: pe.scrollToSlide.bind(this),
            destroy: pe.destroy.bind(this)
          }
        });
      },
      on: {
        init: function init() {
          this.params.history.enabled && this.history.init();
        },
        destroy: function destroy() {
          this.params.history.enabled && this.history.destroy();
        },
        transitionEnd: function transitionEnd() {
          this.history.initialized && this.history.setHistory(this.params.history.key, this.activeIndex);
        },
        slideChange: function slideChange() {
          this.history.initialized && this.params.cssMode && this.history.setHistory(this.params.history.key, this.activeIndex);
        }
      }
    }, {
      name: "hash-navigation",
      params: {
        hashNavigation: {
          enabled: !1,
          replaceState: !1,
          watchState: !1
        }
      },
      create: function create() {
        n.extend(this, {
          hashNavigation: {
            initialized: !1,
            init: ce.init.bind(this),
            destroy: ce.destroy.bind(this),
            setHash: ce.setHash.bind(this),
            onHashCange: ce.onHashCange.bind(this)
          }
        });
      },
      on: {
        init: function init() {
          this.params.hashNavigation.enabled && this.hashNavigation.init();
        },
        destroy: function destroy() {
          this.params.hashNavigation.enabled && this.hashNavigation.destroy();
        },
        transitionEnd: function transitionEnd() {
          this.hashNavigation.initialized && this.hashNavigation.setHash();
        },
        slideChange: function slideChange() {
          this.hashNavigation.initialized && this.params.cssMode && this.hashNavigation.setHash();
        }
      }
    }, {
      name: "autoplay",
      params: {
        autoplay: {
          enabled: !1,
          delay: 3e3,
          waitForTransition: !0,
          disableOnInteraction: !0,
          stopOnLastSlide: !1,
          reverseDirection: !1
        }
      },
      create: function create() {
        var e = this;
        n.extend(e, {
          autoplay: {
            running: !1,
            paused: !1,
            run: ue.run.bind(e),
            start: ue.start.bind(e),
            stop: ue.stop.bind(e),
            pause: ue.pause.bind(e),
            onVisibilityChange: function onVisibilityChange() {
              "hidden" === document.visibilityState && e.autoplay.running && e.autoplay.pause(), "visible" === document.visibilityState && e.autoplay.paused && (e.autoplay.run(), e.autoplay.paused = !1);
            },
            onTransitionEnd: function onTransitionEnd(t) {
              e && !e.destroyed && e.$wrapperEl && t.target === this && (e.$wrapperEl[0].removeEventListener("transitionend", e.autoplay.onTransitionEnd), e.$wrapperEl[0].removeEventListener("webkitTransitionEnd", e.autoplay.onTransitionEnd), e.autoplay.paused = !1, e.autoplay.running ? e.autoplay.run() : e.autoplay.stop());
            }
          }
        });
      },
      on: {
        init: function init() {
          this.params.autoplay.enabled && (this.autoplay.start(), document.addEventListener("visibilitychange", this.autoplay.onVisibilityChange));
        },
        beforeTransitionStart: function beforeTransitionStart(e, t) {
          this.autoplay.running && (t || !this.params.autoplay.disableOnInteraction ? this.autoplay.pause(e) : this.autoplay.stop());
        },
        sliderFirstMove: function sliderFirstMove() {
          this.autoplay.running && (this.params.autoplay.disableOnInteraction ? this.autoplay.stop() : this.autoplay.pause());
        },
        touchEnd: function touchEnd() {
          this.params.cssMode && this.autoplay.paused && !this.params.autoplay.disableOnInteraction && this.autoplay.run();
        },
        destroy: function destroy() {
          this.autoplay.running && this.autoplay.stop(), document.removeEventListener("visibilitychange", this.autoplay.onVisibilityChange);
        }
      }
    }, {
      name: "effect-fade",
      params: {
        fadeEffect: {
          crossFade: !1
        }
      },
      create: function create() {
        n.extend(this, {
          fadeEffect: {
            setTranslate: ve.setTranslate.bind(this),
            setTransition: ve.setTransition.bind(this)
          }
        });
      },
      on: {
        beforeInit: function beforeInit() {
          if ("fade" === this.params.effect) {
            this.classNames.push(this.params.containerModifierClass + "fade");
            var e = {
              slidesPerView: 1,
              slidesPerColumn: 1,
              slidesPerGroup: 1,
              watchSlidesProgress: !0,
              spaceBetween: 0,
              virtualTranslate: !0
            };
            n.extend(this.params, e), n.extend(this.originalParams, e);
          }
        },
        setTranslate: function setTranslate() {
          "fade" === this.params.effect && this.fadeEffect.setTranslate();
        },
        setTransition: function setTransition(e) {
          "fade" === this.params.effect && this.fadeEffect.setTransition(e);
        }
      }
    }, {
      name: "effect-cube",
      params: {
        cubeEffect: {
          slideShadows: !0,
          shadow: !0,
          shadowOffset: 20,
          shadowScale: .94
        }
      },
      create: function create() {
        n.extend(this, {
          cubeEffect: {
            setTranslate: fe.setTranslate.bind(this),
            setTransition: fe.setTransition.bind(this)
          }
        });
      },
      on: {
        beforeInit: function beforeInit() {
          if ("cube" === this.params.effect) {
            this.classNames.push(this.params.containerModifierClass + "cube"), this.classNames.push(this.params.containerModifierClass + "3d");
            var e = {
              slidesPerView: 1,
              slidesPerColumn: 1,
              slidesPerGroup: 1,
              watchSlidesProgress: !0,
              resistanceRatio: 0,
              spaceBetween: 0,
              centeredSlides: !1,
              virtualTranslate: !0
            };
            n.extend(this.params, e), n.extend(this.originalParams, e);
          }
        },
        setTranslate: function setTranslate() {
          "cube" === this.params.effect && this.cubeEffect.setTranslate();
        },
        setTransition: function setTransition(e) {
          "cube" === this.params.effect && this.cubeEffect.setTransition(e);
        }
      }
    }, {
      name: "effect-flip",
      params: {
        flipEffect: {
          slideShadows: !0,
          limitRotation: !0
        }
      },
      create: function create() {
        n.extend(this, {
          flipEffect: {
            setTranslate: me.setTranslate.bind(this),
            setTransition: me.setTransition.bind(this)
          }
        });
      },
      on: {
        beforeInit: function beforeInit() {
          if ("flip" === this.params.effect) {
            this.classNames.push(this.params.containerModifierClass + "flip"), this.classNames.push(this.params.containerModifierClass + "3d");
            var e = {
              slidesPerView: 1,
              slidesPerColumn: 1,
              slidesPerGroup: 1,
              watchSlidesProgress: !0,
              spaceBetween: 0,
              virtualTranslate: !0
            };
            n.extend(this.params, e), n.extend(this.originalParams, e);
          }
        },
        setTranslate: function setTranslate() {
          "flip" === this.params.effect && this.flipEffect.setTranslate();
        },
        setTransition: function setTransition(e) {
          "flip" === this.params.effect && this.flipEffect.setTransition(e);
        }
      }
    }, {
      name: "effect-coverflow",
      params: {
        coverflowEffect: {
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: !0
        }
      },
      create: function create() {
        n.extend(this, {
          coverflowEffect: {
            setTranslate: ge.setTranslate.bind(this),
            setTransition: ge.setTransition.bind(this)
          }
        });
      },
      on: {
        beforeInit: function beforeInit() {
          "coverflow" === this.params.effect && (this.classNames.push(this.params.containerModifierClass + "coverflow"), this.classNames.push(this.params.containerModifierClass + "3d"), this.params.watchSlidesProgress = !0, this.originalParams.watchSlidesProgress = !0);
        },
        setTranslate: function setTranslate() {
          "coverflow" === this.params.effect && this.coverflowEffect.setTranslate();
        },
        setTransition: function setTransition(e) {
          "coverflow" === this.params.effect && this.coverflowEffect.setTransition(e);
        }
      }
    }, {
      name: "thumbs",
      params: {
        thumbs: {
          swiper: null,
          multipleActiveThumbs: !0,
          autoScrollOffset: 0,
          slideThumbActiveClass: "swiper-slide-thumb-active",
          thumbsContainerClass: "swiper-container-thumbs"
        }
      },
      create: function create() {
        n.extend(this, {
          thumbs: {
            swiper: null,
            init: be.init.bind(this),
            update: be.update.bind(this),
            onThumbClick: be.onThumbClick.bind(this)
          }
        });
      },
      on: {
        beforeInit: function beforeInit() {
          var e = this.params.thumbs;
          e && e.swiper && (this.thumbs.init(), this.thumbs.update(!0));
        },
        slideChange: function slideChange() {
          this.thumbs.swiper && this.thumbs.update();
        },
        update: function update() {
          this.thumbs.swiper && this.thumbs.update();
        },
        resize: function resize() {
          this.thumbs.swiper && this.thumbs.update();
        },
        observerUpdate: function observerUpdate() {
          this.thumbs.swiper && this.thumbs.update();
        },
        setTransition: function setTransition(e) {
          var t = this.thumbs.swiper;
          t && t.setTransition(e);
        },
        beforeDestroy: function beforeDestroy() {
          var e = this.thumbs.swiper;
          e && this.thumbs.swiperCreated && e && e.destroy();
        }
      }
    }];
  return void 0 === W.use && (W.use = W.Class.use, W.installModule = W.Class.installModule), W.use(we), W;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3dpcGVyLmpzIiwibmFtZXMiOlsiZSIsInQiLCJleHBvcnRzIiwiX3R5cGVvZiIsIm1vZHVsZSIsImRlZmluZSIsImFtZCIsInNlbGYiLCJTd2lwZXIiLCJkb2N1bWVudCIsImJvZHkiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImFjdGl2ZUVsZW1lbnQiLCJibHVyIiwibm9kZU5hbWUiLCJxdWVyeVNlbGVjdG9yIiwicXVlcnlTZWxlY3RvckFsbCIsImdldEVsZW1lbnRCeUlkIiwiY3JlYXRlRXZlbnQiLCJpbml0RXZlbnQiLCJjcmVhdGVFbGVtZW50IiwiY2hpbGRyZW4iLCJjaGlsZE5vZGVzIiwic3R5bGUiLCJzZXRBdHRyaWJ1dGUiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsImxvY2F0aW9uIiwiaGFzaCIsIndpbmRvdyIsIm5hdmlnYXRvciIsInVzZXJBZ2VudCIsImhpc3RvcnkiLCJDdXN0b21FdmVudCIsImdldENvbXB1dGVkU3R5bGUiLCJnZXRQcm9wZXJ0eVZhbHVlIiwiSW1hZ2UiLCJEYXRlIiwic2NyZWVuIiwic2V0VGltZW91dCIsImNsZWFyVGltZW91dCIsImkiLCJsZW5ndGgiLCJzIiwiYSIsInIiLCJuIiwibyIsImwiLCJkIiwidHJpbSIsImluZGV4T2YiLCJoIiwiaW5uZXJIVE1MIiwicHVzaCIsIm1hdGNoIiwic3BsaXQiLCJub2RlVHlwZSIsImZuIiwicHJvdG90eXBlIiwiQ2xhc3MiLCJEb203IiwiYWRkQ2xhc3MiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmVDbGFzcyIsInJlbW92ZSIsImhhc0NsYXNzIiwiY29udGFpbnMiLCJ0b2dnbGVDbGFzcyIsInRvZ2dsZSIsImF0dHIiLCJhcmd1bWVudHMiLCJnZXRBdHRyaWJ1dGUiLCJyZW1vdmVBdHRyIiwicmVtb3ZlQXR0cmlidXRlIiwiZGF0YSIsImRvbTdFbGVtZW50RGF0YVN0b3JhZ2UiLCJ0cmFuc2Zvcm0iLCJ3ZWJraXRUcmFuc2Zvcm0iLCJ0cmFuc2l0aW9uIiwid2Via2l0VHJhbnNpdGlvbkR1cmF0aW9uIiwidHJhbnNpdGlvbkR1cmF0aW9uIiwib24iLCJ0YXJnZXQiLCJkb203RXZlbnREYXRhIiwidW5zaGlmdCIsImlzIiwiYXBwbHkiLCJwYXJlbnRzIiwicCIsImMiLCJ1IiwidiIsImRvbTdMaXZlTGlzdGVuZXJzIiwibGlzdGVuZXIiLCJwcm94eUxpc3RlbmVyIiwiZiIsImRvbTdMaXN0ZW5lcnMiLCJvZmYiLCJkb203cHJveHkiLCJzcGxpY2UiLCJ0cmlnZ2VyIiwiZGV0YWlsIiwiYnViYmxlcyIsImNhbmNlbGFibGUiLCJmaWx0ZXIiLCJkaXNwYXRjaEV2ZW50IiwidHJhbnNpdGlvbkVuZCIsImNhbGwiLCJvdXRlcldpZHRoIiwic3R5bGVzIiwib2Zmc2V0V2lkdGgiLCJwYXJzZUZsb2F0Iiwib3V0ZXJIZWlnaHQiLCJvZmZzZXRIZWlnaHQiLCJvZmZzZXQiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJjbGllbnRUb3AiLCJjbGllbnRMZWZ0Iiwic2Nyb2xsWSIsInNjcm9sbFRvcCIsInNjcm9sbFgiLCJzY3JvbGxMZWZ0IiwidG9wIiwibGVmdCIsImNzcyIsImVhY2giLCJodG1sIiwidGV4dCIsInRleHRDb250ZW50IiwibWF0Y2hlcyIsIndlYmtpdE1hdGNoZXNTZWxlY3RvciIsIm1zTWF0Y2hlc1NlbGVjdG9yIiwiaW5kZXgiLCJwcmV2aW91c1NpYmxpbmciLCJlcSIsImFwcGVuZCIsImZpcnN0Q2hpbGQiLCJhcHBlbmRDaGlsZCIsInByZXBlbmQiLCJpbnNlcnRCZWZvcmUiLCJuZXh0IiwibmV4dEVsZW1lbnRTaWJsaW5nIiwibmV4dEFsbCIsInByZXYiLCJwcmV2aW91c0VsZW1lbnRTaWJsaW5nIiwicHJldkFsbCIsInBhcmVudCIsInBhcmVudE5vZGUiLCJjbG9zZXN0IiwiZmluZCIsInJlbW92ZUNoaWxkIiwiT2JqZWN0Iiwia2V5cyIsImZvckVhY2giLCJkZWxldGVQcm9wcyIsIm5leHRUaWNrIiwibm93IiwiZ2V0VHJhbnNsYXRlIiwiV2ViS2l0Q1NTTWF0cml4IiwibWFwIiwicmVwbGFjZSIsImpvaW4iLCJNb3pUcmFuc2Zvcm0iLCJPVHJhbnNmb3JtIiwiTXNUcmFuc2Zvcm0iLCJtc1RyYW5zZm9ybSIsInRvU3RyaW5nIiwibTQxIiwibTQyIiwicGFyc2VVcmxRdWVyeSIsImhyZWYiLCJkZWNvZGVVUklDb21wb25lbnQiLCJpc09iamVjdCIsImNvbnN0cnVjdG9yIiwiZXh0ZW5kIiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwiZW51bWVyYWJsZSIsInRvdWNoIiwiTW9kZXJuaXpyIiwibWF4VG91Y2hQb2ludHMiLCJEb2N1bWVudFRvdWNoIiwicG9pbnRlckV2ZW50cyIsIlBvaW50ZXJFdmVudCIsIm9ic2VydmVyIiwicGFzc2l2ZUxpc3RlbmVyIiwiZGVmaW5lUHJvcGVydHkiLCJnZXQiLCJnZXN0dXJlcyIsInBhcmFtcyIsImV2ZW50c0xpc3RlbmVycyIsImNvbXBvbmVudHMiLCJjb25maWd1cmFibGUiLCJvbmNlIiwiZjdwcm94eSIsImVtaXQiLCJBcnJheSIsImlzQXJyYXkiLCJzbGljZSIsImV2ZW50cyIsImNvbnRleHQiLCJ1c2VNb2R1bGVzUGFyYW1zIiwibW9kdWxlcyIsInVzZU1vZHVsZXMiLCJpbnN0YW5jZSIsImJpbmQiLCJjcmVhdGUiLCJzZXQiLCJ1c2UiLCJpbnN0YWxsTW9kdWxlIiwibmFtZSIsInByb3RvIiwiaW5zdGFsbCIsImNvbmNhdCIsImRlZmluZVByb3BlcnRpZXMiLCJ1cGRhdGVTaXplIiwiJGVsIiwid2lkdGgiLCJjbGllbnRXaWR0aCIsImhlaWdodCIsImNsaWVudEhlaWdodCIsImlzSG9yaXpvbnRhbCIsImlzVmVydGljYWwiLCJwYXJzZUludCIsInNpemUiLCJ1cGRhdGVTbGlkZXMiLCIkd3JhcHBlckVsIiwicnRsVHJhbnNsYXRlIiwid3JvbmdSVEwiLCJ2aXJ0dWFsIiwiZW5hYmxlZCIsInNsaWRlcyIsInNsaWRlQ2xhc3MiLCJjc3NNb2RlIiwic2xpZGVzT2Zmc2V0QmVmb3JlIiwibSIsInNsaWRlc09mZnNldEFmdGVyIiwiZyIsInNuYXBHcmlkIiwiYiIsInciLCJzcGFjZUJldHdlZW4iLCJ5IiwieCIsIlQiLCJFIiwiUyIsInZpcnR1YWxTaXplIiwibWFyZ2luTGVmdCIsIm1hcmdpblRvcCIsIm1hcmdpblJpZ2h0IiwibWFyZ2luQm90dG9tIiwic2xpZGVzUGVyQ29sdW1uIiwiTWF0aCIsImZsb29yIiwiY2VpbCIsInNsaWRlc1BlclZpZXciLCJzbGlkZXNQZXJDb2x1bW5GaWxsIiwibWF4IiwiQyIsIk0iLCJQIiwieiIsImsiLCIkIiwiTCIsIkkiLCJEIiwic2xpZGVzUGVyR3JvdXAiLCJPIiwiQSIsIkciLCJtaW4iLCJvcmRlciIsIkgiLCJCIiwiTiIsInJvdW5kTGVuZ3RocyIsIlgiLCJWIiwiWSIsIkYiLCJXIiwiUiIsInEiLCJqIiwiSyIsIlUiLCJfIiwiWiIsInN3aXBlclNsaWRlU2l6ZSIsImNlbnRlcmVkU2xpZGVzIiwiYWJzIiwic2xpZGVzUGVyR3JvdXBTa2lwIiwiZWZmZWN0Iiwic2V0V3JhcHBlclNpemUiLCJRIiwiSiIsImVlIiwidGUiLCJjZW50ZXJlZFNsaWRlc0JvdW5kcyIsImllIiwic2UiLCJjZW50ZXJJbnN1ZmZpY2llbnRTbGlkZXMiLCJhZSIsInJlIiwic2xpZGVzR3JpZCIsInNsaWRlc1NpemVzR3JpZCIsIndhdGNoT3ZlcmZsb3ciLCJjaGVja092ZXJmbG93Iiwid2F0Y2hTbGlkZXNQcm9ncmVzcyIsIndhdGNoU2xpZGVzVmlzaWJpbGl0eSIsInVwZGF0ZVNsaWRlc09mZnNldCIsInVwZGF0ZUF1dG9IZWlnaHQiLCJzZXRUcmFuc2l0aW9uIiwic3BlZWQiLCJ2aXNpYmxlU2xpZGVzIiwiYWN0aXZlSW5kZXgiLCJzd2lwZXJTbGlkZU9mZnNldCIsIm9mZnNldExlZnQiLCJvZmZzZXRUb3AiLCJ1cGRhdGVTbGlkZXNQcm9ncmVzcyIsInRyYW5zbGF0ZSIsInNsaWRlVmlzaWJsZUNsYXNzIiwidmlzaWJsZVNsaWRlc0luZGV4ZXMiLCJtaW5UcmFuc2xhdGUiLCJhdXRvSGVpZ2h0IiwicHJvZ3Jlc3MiLCJ1cGRhdGVQcm9ncmVzcyIsIm1heFRyYW5zbGF0ZSIsImlzQmVnaW5uaW5nIiwiaXNFbmQiLCJ1cGRhdGVTbGlkZXNDbGFzc2VzIiwicmVhbEluZGV4Iiwic2xpZGVBY3RpdmVDbGFzcyIsInNsaWRlTmV4dENsYXNzIiwic2xpZGVQcmV2Q2xhc3MiLCJzbGlkZUR1cGxpY2F0ZUFjdGl2ZUNsYXNzIiwic2xpZGVEdXBsaWNhdGVOZXh0Q2xhc3MiLCJzbGlkZUR1cGxpY2F0ZVByZXZDbGFzcyIsImxvb3AiLCJzbGlkZUR1cGxpY2F0ZUNsYXNzIiwidXBkYXRlQWN0aXZlSW5kZXgiLCJzbmFwSW5kZXgiLCJub3JtYWxpemVTbGlkZUluZGV4IiwicHJldmlvdXNJbmRleCIsImluaXRpYWxpemVkIiwicnVuQ2FsbGJhY2tzT25Jbml0IiwidXBkYXRlQ2xpY2tlZFNsaWRlIiwiY2xpY2tlZFNsaWRlIiwiY2xpY2tlZEluZGV4Iiwic2xpZGVUb0NsaWNrZWRTbGlkZSIsInZpcnR1YWxUcmFuc2xhdGUiLCJzZXRUcmFuc2xhdGUiLCJ3cmFwcGVyRWwiLCJwcmV2aW91c1RyYW5zbGF0ZSIsInRyYW5zbGF0ZVRvIiwiYW5pbWF0aW5nIiwicHJldmVudEludGVyYWN0aW9uT25UcmFuc2l0aW9uIiwic2Nyb2xsVG8iLCJiZWhhdmlvciIsIm9uVHJhbnNsYXRlVG9XcmFwcGVyVHJhbnNpdGlvbkVuZCIsImRlc3Ryb3llZCIsInRyYW5zaXRpb25TdGFydCIsInNsaWRlVG8iLCJpbml0aWFsU2xpZGUiLCJhbGxvd1NsaWRlTmV4dCIsImFsbG93U2xpZGVQcmV2Iiwic2Nyb2xsV2lkdGgiLCJvblNsaWRlVG9XcmFwcGVyVHJhbnNpdGlvbkVuZCIsInNsaWRlVG9Mb29wIiwibG9vcGVkU2xpZGVzIiwic2xpZGVOZXh0IiwibG9vcEZpeCIsIl9jbGllbnRMZWZ0Iiwic2xpZGVQcmV2Iiwic2xpZGVSZXNldCIsInNsaWRlVG9DbG9zZXN0Iiwic2xpZGVzUGVyVmlld0R5bmFtaWMiLCJsb29wQ3JlYXRlIiwibG9vcEZpbGxHcm91cFdpdGhCbGFuayIsInNsaWRlQmxhbmtDbGFzcyIsImxvb3BBZGRpdGlvbmFsU2xpZGVzIiwiY2xvbmVOb2RlIiwibG9vcERlc3Ryb3kiLCJzZXRHcmFiQ3Vyc29yIiwic2ltdWxhdGVUb3VjaCIsImlzTG9ja2VkIiwiZWwiLCJjdXJzb3IiLCJ1bnNldEdyYWJDdXJzb3IiLCJhcHBlbmRTbGlkZSIsInVwZGF0ZSIsInByZXBlbmRTbGlkZSIsImFkZFNsaWRlIiwicmVtb3ZlU2xpZGUiLCJyZW1vdmVBbGxTbGlkZXMiLCJwbGF0Zm9ybSIsImlvcyIsImFuZHJvaWQiLCJhbmRyb2lkQ2hyb21lIiwiZGVza3RvcCIsImlwaG9uZSIsImlwb2QiLCJpcGFkIiwiZWRnZSIsImZpcmVmb3giLCJtYWNvcyIsIndpbmRvd3MiLCJjb3Jkb3ZhIiwicGhvbmVnYXAiLCJlbGVjdHJvbiIsInRvTG93ZXJDYXNlIiwib3MiLCJvc1ZlcnNpb24iLCJ3ZWJWaWV3Iiwic3RhbmRhbG9uZSIsIm1hdGNoTWVkaWEiLCJ3ZWJ2aWV3IiwicGl4ZWxSYXRpbyIsImRldmljZVBpeGVsUmF0aW8iLCJ0b3VjaEV2ZW50c0RhdGEiLCJ0b3VjaGVzIiwib3JpZ2luYWxFdmVudCIsInRvdWNoRXZlbnRzVGFyZ2V0IiwiaXNUb3VjaEV2ZW50IiwidHlwZSIsIndoaWNoIiwiYnV0dG9uIiwiaXNUb3VjaGVkIiwiaXNNb3ZlZCIsIm5vU3dpcGluZyIsIm5vU3dpcGluZ1NlbGVjdG9yIiwibm9Td2lwaW5nQ2xhc3MiLCJhbGxvd0NsaWNrIiwic3dpcGVIYW5kbGVyIiwiY3VycmVudFgiLCJ0YXJnZXRUb3VjaGVzIiwicGFnZVgiLCJjdXJyZW50WSIsInBhZ2VZIiwiZWRnZVN3aXBlRGV0ZWN0aW9uIiwiaU9TRWRnZVN3aXBlRGV0ZWN0aW9uIiwiZWRnZVN3aXBlVGhyZXNob2xkIiwiaU9TRWRnZVN3aXBlVGhyZXNob2xkIiwiYWxsb3dUb3VjaENhbGxiYWNrcyIsImlzU2Nyb2xsaW5nIiwic3RhcnRNb3ZpbmciLCJzdGFydFgiLCJzdGFydFkiLCJ0b3VjaFN0YXJ0VGltZSIsInN3aXBlRGlyZWN0aW9uIiwidGhyZXNob2xkIiwiYWxsb3dUaHJlc2hvbGRNb3ZlIiwiZm9ybUVsZW1lbnRzIiwiYWxsb3dUb3VjaE1vdmUiLCJ0b3VjaFN0YXJ0UHJldmVudERlZmF1bHQiLCJ0b3VjaFN0YXJ0Rm9yY2VQcmV2ZW50RGVmYXVsdCIsInByZXZlbnREZWZhdWx0IiwiY2hhbmdlZFRvdWNoZXMiLCJwcmV2ZW50ZWRCeU5lc3RlZFN3aXBlciIsInRvdWNoUmVsZWFzZU9uRWRnZXMiLCJzcXJ0IiwicG93IiwiYXRhbjIiLCJQSSIsInRvdWNoQW5nbGUiLCJ0b3VjaE1vdmVTdG9wUHJvcGFnYXRpb24iLCJuZXN0ZWQiLCJzdG9wUHJvcGFnYXRpb24iLCJzdGFydFRyYW5zbGF0ZSIsImFsbG93TW9tZW50dW1Cb3VuY2UiLCJncmFiQ3Vyc29yIiwiZGlmZiIsInRvdWNoUmF0aW8iLCJjdXJyZW50VHJhbnNsYXRlIiwicmVzaXN0YW5jZVJhdGlvIiwicmVzaXN0YW5jZSIsImZvbGxvd0ZpbmdlciIsImZyZWVNb2RlIiwidmVsb2NpdGllcyIsInBvc2l0aW9uIiwidGltZSIsImxhc3RDbGlja1RpbWUiLCJmcmVlTW9kZU1vbWVudHVtIiwicG9wIiwidmVsb2NpdHkiLCJmcmVlTW9kZU1pbmltdW1WZWxvY2l0eSIsImZyZWVNb2RlTW9tZW50dW1WZWxvY2l0eVJhdGlvIiwiZnJlZU1vZGVNb21lbnR1bVJhdGlvIiwiZnJlZU1vZGVNb21lbnR1bUJvdW5jZVJhdGlvIiwiZnJlZU1vZGVNb21lbnR1bUJvdW5jZSIsImZyZWVNb2RlU3RpY2t5IiwibG9uZ1N3aXBlc01zIiwibG9uZ1N3aXBlcyIsImxvbmdTd2lwZXNSYXRpbyIsInNob3J0U3dpcGVzIiwibmF2aWdhdGlvbiIsIm5leHRFbCIsInByZXZFbCIsImJyZWFrcG9pbnRzIiwic2V0QnJlYWtwb2ludCIsImF1dG9wbGF5IiwicnVubmluZyIsInBhdXNlZCIsInJ1biIsInByZXZlbnRDbGlja3MiLCJwcmV2ZW50Q2xpY2tzUHJvcGFnYXRpb24iLCJzdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24iLCJpbml0IiwiZGlyZWN0aW9uIiwidXBkYXRlT25XaW5kb3dSZXNpemUiLCJ1bmlxdWVOYXZFbGVtZW50cyIsInByZWxvYWRJbWFnZXMiLCJ1cGRhdGVPbkltYWdlc1JlYWR5IiwicGFzc2l2ZUxpc3RlbmVycyIsImNvbnRhaW5lck1vZGlmaWVyQ2xhc3MiLCJ3cmFwcGVyQ2xhc3MiLCJzbGlkZSIsIm1hbmlwdWxhdGlvbiIsImF0dGFjaEV2ZW50cyIsInRvdWNoRXZlbnRzIiwib25Ub3VjaFN0YXJ0Iiwib25Ub3VjaE1vdmUiLCJvblRvdWNoRW5kIiwib25TY3JvbGwiLCJvbkNsaWNrIiwic3RhcnQiLCJtb3ZlIiwiZW5kIiwicGFzc2l2ZSIsImNhcHR1cmUiLCJjYW5jZWwiLCJkZXRhY2hFdmVudHMiLCJnZXRCcmVha3BvaW50IiwiY3VycmVudEJyZWFrcG9pbnQiLCJvcmlnaW5hbFBhcmFtcyIsImNoYW5nZURpcmVjdGlvbiIsInN1YnN0ciIsInZhbHVlIiwiaW5uZXJIZWlnaHQiLCJwb2ludCIsInNvcnQiLCJpbm5lcldpZHRoIiwiY2xhc3NlcyIsImFkZENsYXNzZXMiLCJjbGFzc05hbWVzIiwicnRsIiwicmVtb3ZlQ2xhc3NlcyIsImltYWdlcyIsImxvYWRJbWFnZSIsImNvbXBsZXRlIiwib25sb2FkIiwib25lcnJvciIsInNpemVzIiwic3Jjc2V0Iiwic3JjIiwiaW1hZ2VzTG9hZGVkIiwiaW1hZ2VzVG9Mb2FkIiwiY3VycmVudFNyYyIsInBhc3NlZFBhcmFtcyIsInN3aXBlciIsInNoYWRvd1Jvb3QiLCJkaXIiLCJ0b3VjaEV2ZW50c1RvdWNoIiwidG91Y2hFdmVudHNEZXNrdG9wIiwiY2xpY2tUaW1lb3V0IiwiX19wcm90b19fIiwiZXh0ZW5kZWREZWZhdWx0cyIsImRlZmF1bHRzIiwiZGVzdHJveSIsImV4dGVuZERlZmF1bHRzIiwiZGV2aWNlIiwic3VwcG9ydCIsImlzRWRnZSIsImlzU2FmYXJpIiwiaXNVaVdlYlZpZXciLCJ0ZXN0IiwiYnJvd3NlciIsInJlc2l6ZSIsInJlc2l6ZUhhbmRsZXIiLCJvcmllbnRhdGlvbkNoYW5nZUhhbmRsZXIiLCJmdW5jIiwiTXV0YXRpb25PYnNlcnZlciIsIldlYmtpdE11dGF0aW9uT2JzZXJ2ZXIiLCJhdHRhY2giLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJvYnNlcnZlIiwiYXR0cmlidXRlcyIsImNoaWxkTGlzdCIsImNoYXJhY3RlckRhdGEiLCJvYnNlcnZlcnMiLCJvYnNlcnZlUGFyZW50cyIsIm9ic2VydmVTbGlkZUNoaWxkcmVuIiwiZGlzY29ubmVjdCIsImFkZFNsaWRlc0JlZm9yZSIsImFkZFNsaWRlc0FmdGVyIiwiZnJvbSIsInRvIiwicmVuZGVyU2xpZGUiLCJsYXp5IiwibG9hZCIsInJlbmRlckV4dGVybmFsIiwiY2FjaGUiLCJiZWZvcmVJbml0IiwiaGFuZGxlIiwia2V5Q29kZSIsImNoYXJDb2RlIiwic2hpZnRLZXkiLCJhbHRLZXkiLCJjdHJsS2V5IiwibWV0YUtleSIsImtleWJvYXJkIiwib25seUluVmlld3BvcnQiLCJyZXR1cm5WYWx1ZSIsImVuYWJsZSIsImRpc2FibGUiLCJsYXN0U2Nyb2xsVGltZSIsImxhc3RFdmVudEJlZm9yZVNuYXAiLCJyZWNlbnRXaGVlbEV2ZW50cyIsImV2ZW50Iiwib253aGVlbCIsImltcGxlbWVudGF0aW9uIiwiaGFzRmVhdHVyZSIsIm5vcm1hbGl6ZSIsIndoZWVsRGVsdGEiLCJ3aGVlbERlbHRhWSIsIndoZWVsRGVsdGFYIiwiYXhpcyIsIkhPUklaT05UQUxfQVhJUyIsImRlbHRhWSIsImRlbHRhWCIsImRlbHRhTW9kZSIsInNwaW5YIiwic3BpblkiLCJwaXhlbFgiLCJwaXhlbFkiLCJoYW5kbGVNb3VzZUVudGVyIiwibW91c2VFbnRlcmVkIiwiaGFuZGxlTW91c2VMZWF2ZSIsIm1vdXNld2hlZWwiLCJldmVudHNUYXJnZWQiLCJyZWxlYXNlT25FZGdlcyIsImZvcmNlVG9BeGlzIiwiaW52ZXJ0IiwiZGVsdGEiLCJzaWduIiwic2Vuc2l0aXZpdHkiLCJ0aW1lb3V0Iiwic2hpZnQiLCJhdXRvcGxheURpc2FibGVPbkludGVyYWN0aW9uIiwic3RvcCIsInJhdyIsImFuaW1hdGVTbGlkZXIiLCJyZWxlYXNlU2Nyb2xsIiwiZ2V0VGltZSIsIiRuZXh0RWwiLCIkcHJldkVsIiwiZGlzYWJsZWRDbGFzcyIsImxvY2tDbGFzcyIsIm9uUHJldkNsaWNrIiwib25OZXh0Q2xpY2siLCJwYWdpbmF0aW9uIiwicGFnaW5hdGlvblR5cGUiLCJidWxsZXRzIiwiZHluYW1pY0J1bGxldHMiLCJidWxsZXRTaXplIiwiZHluYW1pY01haW5CdWxsZXRzIiwiZHluYW1pY0J1bGxldEluZGV4IiwiYnVsbGV0QWN0aXZlQ2xhc3MiLCJjdXJyZW50Q2xhc3MiLCJmb3JtYXRGcmFjdGlvbkN1cnJlbnQiLCJ0b3RhbENsYXNzIiwiZm9ybWF0RnJhY3Rpb25Ub3RhbCIsInByb2dyZXNzYmFyT3Bwb3NpdGUiLCJwcm9ncmVzc2JhckZpbGxDbGFzcyIsInJlbmRlckN1c3RvbSIsInJlbmRlciIsInJlbmRlckJ1bGxldCIsImJ1bGxldENsYXNzIiwiYnVsbGV0RWxlbWVudCIsInJlbmRlckZyYWN0aW9uIiwicmVuZGVyUHJvZ3Jlc3NiYXIiLCJjbGlja2FibGUiLCJjbGlja2FibGVDbGFzcyIsIm1vZGlmaWVyQ2xhc3MiLCJwcm9ncmVzc2Jhck9wcG9zaXRlQ2xhc3MiLCJoaWRkZW5DbGFzcyIsInNjcm9sbGJhciIsImRyYWdTaXplIiwidHJhY2tTaXplIiwiJGRyYWdFbCIsImhpZGUiLCJvcGFjaXR5IiwiZGlzcGxheSIsImRpdmlkZXIiLCJtb3ZlRGl2aWRlciIsImdldFBvaW50ZXJQb3NpdGlvbiIsImNsaWVudFgiLCJjbGllbnRZIiwic2V0RHJhZ1Bvc2l0aW9uIiwiZHJhZ1N0YXJ0UG9zIiwib25EcmFnU3RhcnQiLCJkcmFnVGltZW91dCIsIm9uRHJhZ01vdmUiLCJvbkRyYWdFbmQiLCJzbmFwT25SZWxlYXNlIiwiZW5hYmxlRHJhZ2dhYmxlIiwiZGlzYWJsZURyYWdnYWJsZSIsImRyYWdDbGFzcyIsImRyYWdFbCIsImRyYWdnYWJsZSIsIm5lIiwic2V0VHJhbnNmb3JtIiwicGFyYWxsYXgiLCJvZSIsImdldERpc3RhbmNlQmV0d2VlblRvdWNoZXMiLCJvbkdlc3R1cmVTdGFydCIsInpvb20iLCJnZXN0dXJlIiwiZmFrZUdlc3R1cmVUb3VjaGVkIiwiZmFrZUdlc3R1cmVNb3ZlZCIsInNjYWxlU3RhcnQiLCIkc2xpZGVFbCIsIiRpbWFnZUVsIiwiJGltYWdlV3JhcEVsIiwiY29udGFpbmVyQ2xhc3MiLCJtYXhSYXRpbyIsImlzU2NhbGluZyIsIm9uR2VzdHVyZUNoYW5nZSIsInNjYWxlTW92ZSIsInNjYWxlIiwiY3VycmVudFNjYWxlIiwibWluUmF0aW8iLCJvbkdlc3R1cmVFbmQiLCJpbWFnZSIsInRvdWNoZXNTdGFydCIsInNsaWRlV2lkdGgiLCJzbGlkZUhlaWdodCIsIm1pblgiLCJtYXhYIiwibWluWSIsIm1heFkiLCJ0b3VjaGVzQ3VycmVudCIsInByZXZQb3NpdGlvblgiLCJwcmV2UG9zaXRpb25ZIiwicHJldlRpbWUiLCJvblRyYW5zaXRpb25FbmQiLCJvdXQiLCJfaW4iLCJ6b29tZWRTbGlkZUNsYXNzIiwibGUiLCJsb2FkSW5TbGlkZSIsImVsZW1lbnRDbGFzcyIsImxvYWRlZENsYXNzIiwibG9hZGluZ0NsYXNzIiwicHJlbG9hZGVyQ2xhc3MiLCJpbml0aWFsSW1hZ2VMb2FkZWQiLCJsb2FkUHJldk5leHQiLCJsb2FkUHJldk5leHRBbW91bnQiLCJkZSIsIkxpbmVhclNwbGluZSIsImxhc3RJbmRleCIsImludGVycG9sYXRlIiwiZ2V0SW50ZXJwb2xhdGVGdW5jdGlvbiIsImNvbnRyb2xsZXIiLCJzcGxpbmUiLCJjb250cm9sIiwiYnkiLCJpbnZlcnNlIiwiaGUiLCJtYWtlRWxGb2N1c2FibGUiLCJhZGRFbFJvbGUiLCJhZGRFbExhYmVsIiwiZGlzYWJsZUVsIiwiZW5hYmxlRWwiLCJvbkVudGVyS2V5IiwiYTExeSIsIm5vdGlmeSIsImxhc3RTbGlkZU1lc3NhZ2UiLCJuZXh0U2xpZGVNZXNzYWdlIiwiZmlyc3RTbGlkZU1lc3NhZ2UiLCJwcmV2U2xpZGVNZXNzYWdlIiwiY2xpY2siLCJsaXZlUmVnaW9uIiwidXBkYXRlTmF2aWdhdGlvbiIsInVwZGF0ZVBhZ2luYXRpb24iLCJwYWdpbmF0aW9uQnVsbGV0TWVzc2FnZSIsInBlIiwicHVzaFN0YXRlIiwiaGFzaE5hdmlnYXRpb24iLCJwYXRocyIsImdldFBhdGhWYWx1ZXMiLCJrZXkiLCJzY3JvbGxUb1NsaWRlIiwicmVwbGFjZVN0YXRlIiwic2V0SGlzdG9yeVBvcFN0YXRlIiwicGF0aG5hbWUiLCJzZXRIaXN0b3J5Iiwic2x1Z2lmeSIsImluY2x1ZGVzIiwic3RhdGUiLCJjZSIsIm9uSGFzaENhbmdlIiwic2V0SGFzaCIsIndhdGNoU3RhdGUiLCJ1ZSIsImRlbGF5IiwicmV2ZXJzZURpcmVjdGlvbiIsInN0b3BPbkxhc3RTbGlkZSIsInBhdXNlIiwid2FpdEZvclRyYW5zaXRpb24iLCJ2ZSIsImZhZGVFZmZlY3QiLCJjcm9zc0ZhZGUiLCJmZSIsImN1YmVFZmZlY3QiLCJzaGFkb3ciLCJzbGlkZVNoYWRvd3MiLCJzaGFkb3dPZmZzZXQiLCJzaGFkb3dTY2FsZSIsInNpbiIsImNvcyIsIm1lIiwiZmxpcEVmZmVjdCIsImxpbWl0Um90YXRpb24iLCJ6SW5kZXgiLCJyb3VuZCIsImdlIiwiY292ZXJmbG93RWZmZWN0Iiwicm90YXRlIiwiZGVwdGgiLCJtb2RpZmllciIsInN0cmV0Y2giLCJwcmVmaXhlZFBvaW50ZXJFdmVudHMiLCJwZXJzcGVjdGl2ZU9yaWdpbiIsImJlIiwidGh1bWJzIiwic3dpcGVyQ3JlYXRlZCIsInRodW1ic0NvbnRhaW5lckNsYXNzIiwib25UaHVtYkNsaWNrIiwic2xpZGVUaHVtYkFjdGl2ZUNsYXNzIiwiYXV0b1Njcm9sbE9mZnNldCIsIm11bHRpcGxlQWN0aXZlVGh1bWJzIiwid2UiLCJoaWRlT25DbGljayIsInRvRWRnZSIsImZyb21FZGdlIiwiYWN0aXZlSW5kZXhDaGFuZ2UiLCJzbmFwSW5kZXhDaGFuZ2UiLCJzbGlkZXNMZW5ndGhDaGFuZ2UiLCJzbmFwR3JpZExlbmd0aENoYW5nZSIsIm9ic2VydmVyVXBkYXRlIiwidG91Y2hTdGFydCIsInRvdWNoRW5kIiwiZG91YmxlVGFwIiwic2xpZGVDaGFuZ2UiLCJsb2FkT25UcmFuc2l0aW9uU3RhcnQiLCJzY3JvbGwiLCJzY3JvbGxiYXJEcmFnTW92ZSIsIm5vdGlmaWNhdGlvbkNsYXNzIiwicGFnaW5hdGlvblVwZGF0ZSIsImRpc2FibGVPbkludGVyYWN0aW9uIiwib25WaXNpYmlsaXR5Q2hhbmdlIiwidmlzaWJpbGl0eVN0YXRlIiwiYmVmb3JlVHJhbnNpdGlvblN0YXJ0Iiwic2xpZGVyRmlyc3RNb3ZlIiwiYmVmb3JlRGVzdHJveSJdLCJzb3VyY2VzIjpbInN3aXBlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFN3aXBlciA1LjMuOFxuICogTW9zdCBtb2Rlcm4gbW9iaWxlIHRvdWNoIHNsaWRlciBhbmQgZnJhbWV3b3JrIHdpdGggaGFyZHdhcmUgYWNjZWxlcmF0ZWQgdHJhbnNpdGlvbnNcbiAqIGh0dHA6Ly9zd2lwZXJqcy5jb21cbiAqXG4gKiBDb3B5cmlnaHQgMjAxNC0yMDIwIFZsYWRpbWlyIEtoYXJsYW1waWRpXG4gKlxuICogUmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlXG4gKlxuICogUmVsZWFzZWQgb246IEFwcmlsIDI0LCAyMDIwXG4gKi9cblxuIWZ1bmN0aW9uKGUsdCl7XCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHMmJlwidW5kZWZpbmVkXCIhPXR5cGVvZiBtb2R1bGU/bW9kdWxlLmV4cG9ydHM9dCgpOlwiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUodCk6KGU9ZXx8c2VsZikuU3dpcGVyPXQoKX0odGhpcywoZnVuY3Rpb24oKXtcInVzZSBzdHJpY3RcIjt2YXIgZT1cInVuZGVmaW5lZFwiPT10eXBlb2YgZG9jdW1lbnQ/e2JvZHk6e30sYWRkRXZlbnRMaXN0ZW5lcjpmdW5jdGlvbigpe30scmVtb3ZlRXZlbnRMaXN0ZW5lcjpmdW5jdGlvbigpe30sYWN0aXZlRWxlbWVudDp7Ymx1cjpmdW5jdGlvbigpe30sbm9kZU5hbWU6XCJcIn0scXVlcnlTZWxlY3RvcjpmdW5jdGlvbigpe3JldHVybiBudWxsfSxxdWVyeVNlbGVjdG9yQWxsOmZ1bmN0aW9uKCl7cmV0dXJuW119LGdldEVsZW1lbnRCeUlkOmZ1bmN0aW9uKCl7cmV0dXJuIG51bGx9LGNyZWF0ZUV2ZW50OmZ1bmN0aW9uKCl7cmV0dXJue2luaXRFdmVudDpmdW5jdGlvbigpe319fSxjcmVhdGVFbGVtZW50OmZ1bmN0aW9uKCl7cmV0dXJue2NoaWxkcmVuOltdLGNoaWxkTm9kZXM6W10sc3R5bGU6e30sc2V0QXR0cmlidXRlOmZ1bmN0aW9uKCl7fSxnZXRFbGVtZW50c0J5VGFnTmFtZTpmdW5jdGlvbigpe3JldHVybltdfX19LGxvY2F0aW9uOntoYXNoOlwiXCJ9fTpkb2N1bWVudCx0PVwidW5kZWZpbmVkXCI9PXR5cGVvZiB3aW5kb3c/e2RvY3VtZW50OmUsbmF2aWdhdG9yOnt1c2VyQWdlbnQ6XCJcIn0sbG9jYXRpb246e30saGlzdG9yeTp7fSxDdXN0b21FdmVudDpmdW5jdGlvbigpe3JldHVybiB0aGlzfSxhZGRFdmVudExpc3RlbmVyOmZ1bmN0aW9uKCl7fSxyZW1vdmVFdmVudExpc3RlbmVyOmZ1bmN0aW9uKCl7fSxnZXRDb21wdXRlZFN0eWxlOmZ1bmN0aW9uKCl7cmV0dXJue2dldFByb3BlcnR5VmFsdWU6ZnVuY3Rpb24oKXtyZXR1cm5cIlwifX19LEltYWdlOmZ1bmN0aW9uKCl7fSxEYXRlOmZ1bmN0aW9uKCl7fSxzY3JlZW46e30sc2V0VGltZW91dDpmdW5jdGlvbigpe30sY2xlYXJUaW1lb3V0OmZ1bmN0aW9uKCl7fX06d2luZG93LGk9ZnVuY3Rpb24oZSl7Zm9yKHZhciB0PTA7dDxlLmxlbmd0aDt0Kz0xKXRoaXNbdF09ZVt0XTtyZXR1cm4gdGhpcy5sZW5ndGg9ZS5sZW5ndGgsdGhpc307ZnVuY3Rpb24gcyhzLGEpe3ZhciByPVtdLG49MDtpZihzJiYhYSYmcyBpbnN0YW5jZW9mIGkpcmV0dXJuIHM7aWYocylpZihcInN0cmluZ1wiPT10eXBlb2Ygcyl7dmFyIG8sbCxkPXMudHJpbSgpO2lmKGQuaW5kZXhPZihcIjxcIik+PTAmJmQuaW5kZXhPZihcIj5cIik+PTApe3ZhciBoPVwiZGl2XCI7Zm9yKDA9PT1kLmluZGV4T2YoXCI8bGlcIikmJihoPVwidWxcIiksMD09PWQuaW5kZXhPZihcIjx0clwiKSYmKGg9XCJ0Ym9keVwiKSwwIT09ZC5pbmRleE9mKFwiPHRkXCIpJiYwIT09ZC5pbmRleE9mKFwiPHRoXCIpfHwoaD1cInRyXCIpLDA9PT1kLmluZGV4T2YoXCI8dGJvZHlcIikmJihoPVwidGFibGVcIiksMD09PWQuaW5kZXhPZihcIjxvcHRpb25cIikmJihoPVwic2VsZWN0XCIpLChsPWUuY3JlYXRlRWxlbWVudChoKSkuaW5uZXJIVE1MPWQsbj0wO248bC5jaGlsZE5vZGVzLmxlbmd0aDtuKz0xKXIucHVzaChsLmNoaWxkTm9kZXNbbl0pfWVsc2UgZm9yKG89YXx8XCIjXCIhPT1zWzBdfHxzLm1hdGNoKC9bIC48Pjp+XS8pPyhhfHxlKS5xdWVyeVNlbGVjdG9yQWxsKHMudHJpbSgpKTpbZS5nZXRFbGVtZW50QnlJZChzLnRyaW0oKS5zcGxpdChcIiNcIilbMV0pXSxuPTA7bjxvLmxlbmd0aDtuKz0xKW9bbl0mJnIucHVzaChvW25dKX1lbHNlIGlmKHMubm9kZVR5cGV8fHM9PT10fHxzPT09ZSlyLnB1c2gocyk7ZWxzZSBpZihzLmxlbmd0aD4wJiZzWzBdLm5vZGVUeXBlKWZvcihuPTA7bjxzLmxlbmd0aDtuKz0xKXIucHVzaChzW25dKTtyZXR1cm4gbmV3IGkocil9ZnVuY3Rpb24gYShlKXtmb3IodmFyIHQ9W10saT0wO2k8ZS5sZW5ndGg7aSs9MSktMT09PXQuaW5kZXhPZihlW2ldKSYmdC5wdXNoKGVbaV0pO3JldHVybiB0fXMuZm49aS5wcm90b3R5cGUscy5DbGFzcz1pLHMuRG9tNz1pO3ZhciByPXthZGRDbGFzczpmdW5jdGlvbihlKXtpZih2b2lkIDA9PT1lKXJldHVybiB0aGlzO2Zvcih2YXIgdD1lLnNwbGl0KFwiIFwiKSxpPTA7aTx0Lmxlbmd0aDtpKz0xKWZvcih2YXIgcz0wO3M8dGhpcy5sZW5ndGg7cys9MSl2b2lkIDAhPT10aGlzW3NdJiZ2b2lkIDAhPT10aGlzW3NdLmNsYXNzTGlzdCYmdGhpc1tzXS5jbGFzc0xpc3QuYWRkKHRbaV0pO3JldHVybiB0aGlzfSxyZW1vdmVDbGFzczpmdW5jdGlvbihlKXtmb3IodmFyIHQ9ZS5zcGxpdChcIiBcIiksaT0wO2k8dC5sZW5ndGg7aSs9MSlmb3IodmFyIHM9MDtzPHRoaXMubGVuZ3RoO3MrPTEpdm9pZCAwIT09dGhpc1tzXSYmdm9pZCAwIT09dGhpc1tzXS5jbGFzc0xpc3QmJnRoaXNbc10uY2xhc3NMaXN0LnJlbW92ZSh0W2ldKTtyZXR1cm4gdGhpc30saGFzQ2xhc3M6ZnVuY3Rpb24oZSl7cmV0dXJuISF0aGlzWzBdJiZ0aGlzWzBdLmNsYXNzTGlzdC5jb250YWlucyhlKX0sdG9nZ2xlQ2xhc3M6ZnVuY3Rpb24oZSl7Zm9yKHZhciB0PWUuc3BsaXQoXCIgXCIpLGk9MDtpPHQubGVuZ3RoO2krPTEpZm9yKHZhciBzPTA7czx0aGlzLmxlbmd0aDtzKz0xKXZvaWQgMCE9PXRoaXNbc10mJnZvaWQgMCE9PXRoaXNbc10uY2xhc3NMaXN0JiZ0aGlzW3NdLmNsYXNzTGlzdC50b2dnbGUodFtpXSk7cmV0dXJuIHRoaXN9LGF0dHI6ZnVuY3Rpb24oZSx0KXt2YXIgaT1hcmd1bWVudHM7aWYoMT09PWFyZ3VtZW50cy5sZW5ndGgmJlwic3RyaW5nXCI9PXR5cGVvZiBlKXJldHVybiB0aGlzWzBdP3RoaXNbMF0uZ2V0QXR0cmlidXRlKGUpOnZvaWQgMDtmb3IodmFyIHM9MDtzPHRoaXMubGVuZ3RoO3MrPTEpaWYoMj09PWkubGVuZ3RoKXRoaXNbc10uc2V0QXR0cmlidXRlKGUsdCk7ZWxzZSBmb3IodmFyIGEgaW4gZSl0aGlzW3NdW2FdPWVbYV0sdGhpc1tzXS5zZXRBdHRyaWJ1dGUoYSxlW2FdKTtyZXR1cm4gdGhpc30scmVtb3ZlQXR0cjpmdW5jdGlvbihlKXtmb3IodmFyIHQ9MDt0PHRoaXMubGVuZ3RoO3QrPTEpdGhpc1t0XS5yZW1vdmVBdHRyaWJ1dGUoZSk7cmV0dXJuIHRoaXN9LGRhdGE6ZnVuY3Rpb24oZSx0KXt2YXIgaTtpZih2b2lkIDAhPT10KXtmb3IodmFyIHM9MDtzPHRoaXMubGVuZ3RoO3MrPTEpKGk9dGhpc1tzXSkuZG9tN0VsZW1lbnREYXRhU3RvcmFnZXx8KGkuZG9tN0VsZW1lbnREYXRhU3RvcmFnZT17fSksaS5kb203RWxlbWVudERhdGFTdG9yYWdlW2VdPXQ7cmV0dXJuIHRoaXN9aWYoaT10aGlzWzBdKXtpZihpLmRvbTdFbGVtZW50RGF0YVN0b3JhZ2UmJmUgaW4gaS5kb203RWxlbWVudERhdGFTdG9yYWdlKXJldHVybiBpLmRvbTdFbGVtZW50RGF0YVN0b3JhZ2VbZV07dmFyIGE9aS5nZXRBdHRyaWJ1dGUoXCJkYXRhLVwiK2UpO3JldHVybiBhfHx2b2lkIDB9fSx0cmFuc2Zvcm06ZnVuY3Rpb24oZSl7Zm9yKHZhciB0PTA7dDx0aGlzLmxlbmd0aDt0Kz0xKXt2YXIgaT10aGlzW3RdLnN0eWxlO2kud2Via2l0VHJhbnNmb3JtPWUsaS50cmFuc2Zvcm09ZX1yZXR1cm4gdGhpc30sdHJhbnNpdGlvbjpmdW5jdGlvbihlKXtcInN0cmluZ1wiIT10eXBlb2YgZSYmKGUrPVwibXNcIik7Zm9yKHZhciB0PTA7dDx0aGlzLmxlbmd0aDt0Kz0xKXt2YXIgaT10aGlzW3RdLnN0eWxlO2kud2Via2l0VHJhbnNpdGlvbkR1cmF0aW9uPWUsaS50cmFuc2l0aW9uRHVyYXRpb249ZX1yZXR1cm4gdGhpc30sb246ZnVuY3Rpb24oKXtmb3IodmFyIGUsdD1bXSxpPWFyZ3VtZW50cy5sZW5ndGg7aS0tOyl0W2ldPWFyZ3VtZW50c1tpXTt2YXIgYT10WzBdLHI9dFsxXSxuPXRbMl0sbz10WzNdO2Z1bmN0aW9uIGwoZSl7dmFyIHQ9ZS50YXJnZXQ7aWYodCl7dmFyIGk9ZS50YXJnZXQuZG9tN0V2ZW50RGF0YXx8W107aWYoaS5pbmRleE9mKGUpPDAmJmkudW5zaGlmdChlKSxzKHQpLmlzKHIpKW4uYXBwbHkodCxpKTtlbHNlIGZvcih2YXIgYT1zKHQpLnBhcmVudHMoKSxvPTA7bzxhLmxlbmd0aDtvKz0xKXMoYVtvXSkuaXMocikmJm4uYXBwbHkoYVtvXSxpKX19ZnVuY3Rpb24gZChlKXt2YXIgdD1lJiZlLnRhcmdldCYmZS50YXJnZXQuZG9tN0V2ZW50RGF0YXx8W107dC5pbmRleE9mKGUpPDAmJnQudW5zaGlmdChlKSxuLmFwcGx5KHRoaXMsdCl9XCJmdW5jdGlvblwiPT10eXBlb2YgdFsxXSYmKGE9KGU9dClbMF0sbj1lWzFdLG89ZVsyXSxyPXZvaWQgMCksb3x8KG89ITEpO2Zvcih2YXIgaCxwPWEuc3BsaXQoXCIgXCIpLGM9MDtjPHRoaXMubGVuZ3RoO2MrPTEpe3ZhciB1PXRoaXNbY107aWYocilmb3IoaD0wO2g8cC5sZW5ndGg7aCs9MSl7dmFyIHY9cFtoXTt1LmRvbTdMaXZlTGlzdGVuZXJzfHwodS5kb203TGl2ZUxpc3RlbmVycz17fSksdS5kb203TGl2ZUxpc3RlbmVyc1t2XXx8KHUuZG9tN0xpdmVMaXN0ZW5lcnNbdl09W10pLHUuZG9tN0xpdmVMaXN0ZW5lcnNbdl0ucHVzaCh7bGlzdGVuZXI6bixwcm94eUxpc3RlbmVyOmx9KSx1LmFkZEV2ZW50TGlzdGVuZXIodixsLG8pfWVsc2UgZm9yKGg9MDtoPHAubGVuZ3RoO2grPTEpe3ZhciBmPXBbaF07dS5kb203TGlzdGVuZXJzfHwodS5kb203TGlzdGVuZXJzPXt9KSx1LmRvbTdMaXN0ZW5lcnNbZl18fCh1LmRvbTdMaXN0ZW5lcnNbZl09W10pLHUuZG9tN0xpc3RlbmVyc1tmXS5wdXNoKHtsaXN0ZW5lcjpuLHByb3h5TGlzdGVuZXI6ZH0pLHUuYWRkRXZlbnRMaXN0ZW5lcihmLGQsbyl9fXJldHVybiB0aGlzfSxvZmY6ZnVuY3Rpb24oKXtmb3IodmFyIGUsdD1bXSxpPWFyZ3VtZW50cy5sZW5ndGg7aS0tOyl0W2ldPWFyZ3VtZW50c1tpXTt2YXIgcz10WzBdLGE9dFsxXSxyPXRbMl0sbj10WzNdO1wiZnVuY3Rpb25cIj09dHlwZW9mIHRbMV0mJihzPShlPXQpWzBdLHI9ZVsxXSxuPWVbMl0sYT12b2lkIDApLG58fChuPSExKTtmb3IodmFyIG89cy5zcGxpdChcIiBcIiksbD0wO2w8by5sZW5ndGg7bCs9MSlmb3IodmFyIGQ9b1tsXSxoPTA7aDx0aGlzLmxlbmd0aDtoKz0xKXt2YXIgcD10aGlzW2hdLGM9dm9pZCAwO2lmKCFhJiZwLmRvbTdMaXN0ZW5lcnM/Yz1wLmRvbTdMaXN0ZW5lcnNbZF06YSYmcC5kb203TGl2ZUxpc3RlbmVycyYmKGM9cC5kb203TGl2ZUxpc3RlbmVyc1tkXSksYyYmYy5sZW5ndGgpZm9yKHZhciB1PWMubGVuZ3RoLTE7dT49MDt1LT0xKXt2YXIgdj1jW3VdO3ImJnYubGlzdGVuZXI9PT1yfHxyJiZ2Lmxpc3RlbmVyJiZ2Lmxpc3RlbmVyLmRvbTdwcm94eSYmdi5saXN0ZW5lci5kb203cHJveHk9PT1yPyhwLnJlbW92ZUV2ZW50TGlzdGVuZXIoZCx2LnByb3h5TGlzdGVuZXIsbiksYy5zcGxpY2UodSwxKSk6cnx8KHAucmVtb3ZlRXZlbnRMaXN0ZW5lcihkLHYucHJveHlMaXN0ZW5lcixuKSxjLnNwbGljZSh1LDEpKX19cmV0dXJuIHRoaXN9LHRyaWdnZXI6ZnVuY3Rpb24oKXtmb3IodmFyIGk9W10scz1hcmd1bWVudHMubGVuZ3RoO3MtLTspaVtzXT1hcmd1bWVudHNbc107Zm9yKHZhciBhPWlbMF0uc3BsaXQoXCIgXCIpLHI9aVsxXSxuPTA7bjxhLmxlbmd0aDtuKz0xKWZvcih2YXIgbz1hW25dLGw9MDtsPHRoaXMubGVuZ3RoO2wrPTEpe3ZhciBkPXRoaXNbbF0saD12b2lkIDA7dHJ5e2g9bmV3IHQuQ3VzdG9tRXZlbnQobyx7ZGV0YWlsOnIsYnViYmxlczohMCxjYW5jZWxhYmxlOiEwfSl9Y2F0Y2godCl7KGg9ZS5jcmVhdGVFdmVudChcIkV2ZW50XCIpKS5pbml0RXZlbnQobywhMCwhMCksaC5kZXRhaWw9cn1kLmRvbTdFdmVudERhdGE9aS5maWx0ZXIoKGZ1bmN0aW9uKGUsdCl7cmV0dXJuIHQ+MH0pKSxkLmRpc3BhdGNoRXZlbnQoaCksZC5kb203RXZlbnREYXRhPVtdLGRlbGV0ZSBkLmRvbTdFdmVudERhdGF9cmV0dXJuIHRoaXN9LHRyYW5zaXRpb25FbmQ6ZnVuY3Rpb24oZSl7dmFyIHQsaT1bXCJ3ZWJraXRUcmFuc2l0aW9uRW5kXCIsXCJ0cmFuc2l0aW9uZW5kXCJdLHM9dGhpcztmdW5jdGlvbiBhKHIpe2lmKHIudGFyZ2V0PT09dGhpcylmb3IoZS5jYWxsKHRoaXMsciksdD0wO3Q8aS5sZW5ndGg7dCs9MSlzLm9mZihpW3RdLGEpfWlmKGUpZm9yKHQ9MDt0PGkubGVuZ3RoO3QrPTEpcy5vbihpW3RdLGEpO3JldHVybiB0aGlzfSxvdXRlcldpZHRoOmZ1bmN0aW9uKGUpe2lmKHRoaXMubGVuZ3RoPjApe2lmKGUpe3ZhciB0PXRoaXMuc3R5bGVzKCk7cmV0dXJuIHRoaXNbMF0ub2Zmc2V0V2lkdGgrcGFyc2VGbG9hdCh0LmdldFByb3BlcnR5VmFsdWUoXCJtYXJnaW4tcmlnaHRcIikpK3BhcnNlRmxvYXQodC5nZXRQcm9wZXJ0eVZhbHVlKFwibWFyZ2luLWxlZnRcIikpfXJldHVybiB0aGlzWzBdLm9mZnNldFdpZHRofXJldHVybiBudWxsfSxvdXRlckhlaWdodDpmdW5jdGlvbihlKXtpZih0aGlzLmxlbmd0aD4wKXtpZihlKXt2YXIgdD10aGlzLnN0eWxlcygpO3JldHVybiB0aGlzWzBdLm9mZnNldEhlaWdodCtwYXJzZUZsb2F0KHQuZ2V0UHJvcGVydHlWYWx1ZShcIm1hcmdpbi10b3BcIikpK3BhcnNlRmxvYXQodC5nZXRQcm9wZXJ0eVZhbHVlKFwibWFyZ2luLWJvdHRvbVwiKSl9cmV0dXJuIHRoaXNbMF0ub2Zmc2V0SGVpZ2h0fXJldHVybiBudWxsfSxvZmZzZXQ6ZnVuY3Rpb24oKXtpZih0aGlzLmxlbmd0aD4wKXt2YXIgaT10aGlzWzBdLHM9aS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxhPWUuYm9keSxyPWkuY2xpZW50VG9wfHxhLmNsaWVudFRvcHx8MCxuPWkuY2xpZW50TGVmdHx8YS5jbGllbnRMZWZ0fHwwLG89aT09PXQ/dC5zY3JvbGxZOmkuc2Nyb2xsVG9wLGw9aT09PXQ/dC5zY3JvbGxYOmkuc2Nyb2xsTGVmdDtyZXR1cm57dG9wOnMudG9wK28tcixsZWZ0OnMubGVmdCtsLW59fXJldHVybiBudWxsfSxjc3M6ZnVuY3Rpb24oZSxpKXt2YXIgcztpZigxPT09YXJndW1lbnRzLmxlbmd0aCl7aWYoXCJzdHJpbmdcIiE9dHlwZW9mIGUpe2ZvcihzPTA7czx0aGlzLmxlbmd0aDtzKz0xKWZvcih2YXIgYSBpbiBlKXRoaXNbc10uc3R5bGVbYV09ZVthXTtyZXR1cm4gdGhpc31pZih0aGlzWzBdKXJldHVybiB0LmdldENvbXB1dGVkU3R5bGUodGhpc1swXSxudWxsKS5nZXRQcm9wZXJ0eVZhbHVlKGUpfWlmKDI9PT1hcmd1bWVudHMubGVuZ3RoJiZcInN0cmluZ1wiPT10eXBlb2YgZSl7Zm9yKHM9MDtzPHRoaXMubGVuZ3RoO3MrPTEpdGhpc1tzXS5zdHlsZVtlXT1pO3JldHVybiB0aGlzfXJldHVybiB0aGlzfSxlYWNoOmZ1bmN0aW9uKGUpe2lmKCFlKXJldHVybiB0aGlzO2Zvcih2YXIgdD0wO3Q8dGhpcy5sZW5ndGg7dCs9MSlpZighMT09PWUuY2FsbCh0aGlzW3RdLHQsdGhpc1t0XSkpcmV0dXJuIHRoaXM7cmV0dXJuIHRoaXN9LGh0bWw6ZnVuY3Rpb24oZSl7aWYodm9pZCAwPT09ZSlyZXR1cm4gdGhpc1swXT90aGlzWzBdLmlubmVySFRNTDp2b2lkIDA7Zm9yKHZhciB0PTA7dDx0aGlzLmxlbmd0aDt0Kz0xKXRoaXNbdF0uaW5uZXJIVE1MPWU7cmV0dXJuIHRoaXN9LHRleHQ6ZnVuY3Rpb24oZSl7aWYodm9pZCAwPT09ZSlyZXR1cm4gdGhpc1swXT90aGlzWzBdLnRleHRDb250ZW50LnRyaW0oKTpudWxsO2Zvcih2YXIgdD0wO3Q8dGhpcy5sZW5ndGg7dCs9MSl0aGlzW3RdLnRleHRDb250ZW50PWU7cmV0dXJuIHRoaXN9LGlzOmZ1bmN0aW9uKGEpe3ZhciByLG4sbz10aGlzWzBdO2lmKCFvfHx2b2lkIDA9PT1hKXJldHVybiExO2lmKFwic3RyaW5nXCI9PXR5cGVvZiBhKXtpZihvLm1hdGNoZXMpcmV0dXJuIG8ubWF0Y2hlcyhhKTtpZihvLndlYmtpdE1hdGNoZXNTZWxlY3RvcilyZXR1cm4gby53ZWJraXRNYXRjaGVzU2VsZWN0b3IoYSk7aWYoby5tc01hdGNoZXNTZWxlY3RvcilyZXR1cm4gby5tc01hdGNoZXNTZWxlY3RvcihhKTtmb3Iocj1zKGEpLG49MDtuPHIubGVuZ3RoO24rPTEpaWYocltuXT09PW8pcmV0dXJuITA7cmV0dXJuITF9aWYoYT09PWUpcmV0dXJuIG89PT1lO2lmKGE9PT10KXJldHVybiBvPT09dDtpZihhLm5vZGVUeXBlfHxhIGluc3RhbmNlb2YgaSl7Zm9yKHI9YS5ub2RlVHlwZT9bYV06YSxuPTA7bjxyLmxlbmd0aDtuKz0xKWlmKHJbbl09PT1vKXJldHVybiEwO3JldHVybiExfXJldHVybiExfSxpbmRleDpmdW5jdGlvbigpe3ZhciBlLHQ9dGhpc1swXTtpZih0KXtmb3IoZT0wO251bGwhPT0odD10LnByZXZpb3VzU2libGluZyk7KTE9PT10Lm5vZGVUeXBlJiYoZSs9MSk7cmV0dXJuIGV9fSxlcTpmdW5jdGlvbihlKXtpZih2b2lkIDA9PT1lKXJldHVybiB0aGlzO3ZhciB0LHM9dGhpcy5sZW5ndGg7cmV0dXJuIG5ldyBpKGU+cy0xP1tdOmU8MD8odD1zK2UpPDA/W106W3RoaXNbdF1dOlt0aGlzW2VdXSl9LGFwcGVuZDpmdW5jdGlvbigpe2Zvcih2YXIgdCxzPVtdLGE9YXJndW1lbnRzLmxlbmd0aDthLS07KXNbYV09YXJndW1lbnRzW2FdO2Zvcih2YXIgcj0wO3I8cy5sZW5ndGg7cis9MSl7dD1zW3JdO2Zvcih2YXIgbj0wO248dGhpcy5sZW5ndGg7bis9MSlpZihcInN0cmluZ1wiPT10eXBlb2YgdCl7dmFyIG89ZS5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO2ZvcihvLmlubmVySFRNTD10O28uZmlyc3RDaGlsZDspdGhpc1tuXS5hcHBlbmRDaGlsZChvLmZpcnN0Q2hpbGQpfWVsc2UgaWYodCBpbnN0YW5jZW9mIGkpZm9yKHZhciBsPTA7bDx0Lmxlbmd0aDtsKz0xKXRoaXNbbl0uYXBwZW5kQ2hpbGQodFtsXSk7ZWxzZSB0aGlzW25dLmFwcGVuZENoaWxkKHQpfXJldHVybiB0aGlzfSxwcmVwZW5kOmZ1bmN0aW9uKHQpe3ZhciBzLGE7Zm9yKHM9MDtzPHRoaXMubGVuZ3RoO3MrPTEpaWYoXCJzdHJpbmdcIj09dHlwZW9mIHQpe3ZhciByPWUuY3JlYXRlRWxlbWVudChcImRpdlwiKTtmb3Ioci5pbm5lckhUTUw9dCxhPXIuY2hpbGROb2Rlcy5sZW5ndGgtMTthPj0wO2EtPTEpdGhpc1tzXS5pbnNlcnRCZWZvcmUoci5jaGlsZE5vZGVzW2FdLHRoaXNbc10uY2hpbGROb2Rlc1swXSl9ZWxzZSBpZih0IGluc3RhbmNlb2YgaSlmb3IoYT0wO2E8dC5sZW5ndGg7YSs9MSl0aGlzW3NdLmluc2VydEJlZm9yZSh0W2FdLHRoaXNbc10uY2hpbGROb2Rlc1swXSk7ZWxzZSB0aGlzW3NdLmluc2VydEJlZm9yZSh0LHRoaXNbc10uY2hpbGROb2Rlc1swXSk7cmV0dXJuIHRoaXN9LG5leHQ6ZnVuY3Rpb24oZSl7cmV0dXJuIHRoaXMubGVuZ3RoPjA/ZT90aGlzWzBdLm5leHRFbGVtZW50U2libGluZyYmcyh0aGlzWzBdLm5leHRFbGVtZW50U2libGluZykuaXMoZSk/bmV3IGkoW3RoaXNbMF0ubmV4dEVsZW1lbnRTaWJsaW5nXSk6bmV3IGkoW10pOnRoaXNbMF0ubmV4dEVsZW1lbnRTaWJsaW5nP25ldyBpKFt0aGlzWzBdLm5leHRFbGVtZW50U2libGluZ10pOm5ldyBpKFtdKTpuZXcgaShbXSl9LG5leHRBbGw6ZnVuY3Rpb24oZSl7dmFyIHQ9W10sYT10aGlzWzBdO2lmKCFhKXJldHVybiBuZXcgaShbXSk7Zm9yKDthLm5leHRFbGVtZW50U2libGluZzspe3ZhciByPWEubmV4dEVsZW1lbnRTaWJsaW5nO2U/cyhyKS5pcyhlKSYmdC5wdXNoKHIpOnQucHVzaChyKSxhPXJ9cmV0dXJuIG5ldyBpKHQpfSxwcmV2OmZ1bmN0aW9uKGUpe2lmKHRoaXMubGVuZ3RoPjApe3ZhciB0PXRoaXNbMF07cmV0dXJuIGU/dC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nJiZzKHQucHJldmlvdXNFbGVtZW50U2libGluZykuaXMoZSk/bmV3IGkoW3QucHJldmlvdXNFbGVtZW50U2libGluZ10pOm5ldyBpKFtdKTp0LnByZXZpb3VzRWxlbWVudFNpYmxpbmc/bmV3IGkoW3QucHJldmlvdXNFbGVtZW50U2libGluZ10pOm5ldyBpKFtdKX1yZXR1cm4gbmV3IGkoW10pfSxwcmV2QWxsOmZ1bmN0aW9uKGUpe3ZhciB0PVtdLGE9dGhpc1swXTtpZighYSlyZXR1cm4gbmV3IGkoW10pO2Zvcig7YS5wcmV2aW91c0VsZW1lbnRTaWJsaW5nOyl7dmFyIHI9YS5wcmV2aW91c0VsZW1lbnRTaWJsaW5nO2U/cyhyKS5pcyhlKSYmdC5wdXNoKHIpOnQucHVzaChyKSxhPXJ9cmV0dXJuIG5ldyBpKHQpfSxwYXJlbnQ6ZnVuY3Rpb24oZSl7Zm9yKHZhciB0PVtdLGk9MDtpPHRoaXMubGVuZ3RoO2krPTEpbnVsbCE9PXRoaXNbaV0ucGFyZW50Tm9kZSYmKGU/cyh0aGlzW2ldLnBhcmVudE5vZGUpLmlzKGUpJiZ0LnB1c2godGhpc1tpXS5wYXJlbnROb2RlKTp0LnB1c2godGhpc1tpXS5wYXJlbnROb2RlKSk7cmV0dXJuIHMoYSh0KSl9LHBhcmVudHM6ZnVuY3Rpb24oZSl7Zm9yKHZhciB0PVtdLGk9MDtpPHRoaXMubGVuZ3RoO2krPTEpZm9yKHZhciByPXRoaXNbaV0ucGFyZW50Tm9kZTtyOyllP3MocikuaXMoZSkmJnQucHVzaChyKTp0LnB1c2gocikscj1yLnBhcmVudE5vZGU7cmV0dXJuIHMoYSh0KSl9LGNsb3Nlc3Q6ZnVuY3Rpb24oZSl7dmFyIHQ9dGhpcztyZXR1cm4gdm9pZCAwPT09ZT9uZXcgaShbXSk6KHQuaXMoZSl8fCh0PXQucGFyZW50cyhlKS5lcSgwKSksdCl9LGZpbmQ6ZnVuY3Rpb24oZSl7Zm9yKHZhciB0PVtdLHM9MDtzPHRoaXMubGVuZ3RoO3MrPTEpZm9yKHZhciBhPXRoaXNbc10ucXVlcnlTZWxlY3RvckFsbChlKSxyPTA7cjxhLmxlbmd0aDtyKz0xKXQucHVzaChhW3JdKTtyZXR1cm4gbmV3IGkodCl9LGNoaWxkcmVuOmZ1bmN0aW9uKGUpe2Zvcih2YXIgdD1bXSxyPTA7cjx0aGlzLmxlbmd0aDtyKz0xKWZvcih2YXIgbj10aGlzW3JdLmNoaWxkTm9kZXMsbz0wO288bi5sZW5ndGg7bys9MSllPzE9PT1uW29dLm5vZGVUeXBlJiZzKG5bb10pLmlzKGUpJiZ0LnB1c2gobltvXSk6MT09PW5bb10ubm9kZVR5cGUmJnQucHVzaChuW29dKTtyZXR1cm4gbmV3IGkoYSh0KSl9LGZpbHRlcjpmdW5jdGlvbihlKXtmb3IodmFyIHQ9W10scz0wO3M8dGhpcy5sZW5ndGg7cys9MSllLmNhbGwodGhpc1tzXSxzLHRoaXNbc10pJiZ0LnB1c2godGhpc1tzXSk7cmV0dXJuIG5ldyBpKHQpfSxyZW1vdmU6ZnVuY3Rpb24oKXtmb3IodmFyIGU9MDtlPHRoaXMubGVuZ3RoO2UrPTEpdGhpc1tlXS5wYXJlbnROb2RlJiZ0aGlzW2VdLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpc1tlXSk7cmV0dXJuIHRoaXN9LGFkZDpmdW5jdGlvbigpe2Zvcih2YXIgZT1bXSx0PWFyZ3VtZW50cy5sZW5ndGg7dC0tOyllW3RdPWFyZ3VtZW50c1t0XTt2YXIgaSxhLHI9dGhpcztmb3IoaT0wO2k8ZS5sZW5ndGg7aSs9MSl7dmFyIG49cyhlW2ldKTtmb3IoYT0wO2E8bi5sZW5ndGg7YSs9MSlyW3IubGVuZ3RoXT1uW2FdLHIubGVuZ3RoKz0xfXJldHVybiByfSxzdHlsZXM6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpc1swXT90LmdldENvbXB1dGVkU3R5bGUodGhpc1swXSxudWxsKTp7fX19O09iamVjdC5rZXlzKHIpLmZvckVhY2goKGZ1bmN0aW9uKGUpe3MuZm5bZV09cy5mbltlXXx8cltlXX0pKTt2YXIgbj17ZGVsZXRlUHJvcHM6ZnVuY3Rpb24oZSl7dmFyIHQ9ZTtPYmplY3Qua2V5cyh0KS5mb3JFYWNoKChmdW5jdGlvbihlKXt0cnl7dFtlXT1udWxsfWNhdGNoKGUpe310cnl7ZGVsZXRlIHRbZV19Y2F0Y2goZSl7fX0pKX0sbmV4dFRpY2s6ZnVuY3Rpb24oZSx0KXtyZXR1cm4gdm9pZCAwPT09dCYmKHQ9MCksc2V0VGltZW91dChlLHQpfSxub3c6ZnVuY3Rpb24oKXtyZXR1cm4gRGF0ZS5ub3coKX0sZ2V0VHJhbnNsYXRlOmZ1bmN0aW9uKGUsaSl7dmFyIHMsYSxyO3ZvaWQgMD09PWkmJihpPVwieFwiKTt2YXIgbj10LmdldENvbXB1dGVkU3R5bGUoZSxudWxsKTtyZXR1cm4gdC5XZWJLaXRDU1NNYXRyaXg/KChhPW4udHJhbnNmb3JtfHxuLndlYmtpdFRyYW5zZm9ybSkuc3BsaXQoXCIsXCIpLmxlbmd0aD42JiYoYT1hLnNwbGl0KFwiLCBcIikubWFwKChmdW5jdGlvbihlKXtyZXR1cm4gZS5yZXBsYWNlKFwiLFwiLFwiLlwiKX0pKS5qb2luKFwiLCBcIikpLHI9bmV3IHQuV2ViS2l0Q1NTTWF0cml4KFwibm9uZVwiPT09YT9cIlwiOmEpKTpzPShyPW4uTW96VHJhbnNmb3JtfHxuLk9UcmFuc2Zvcm18fG4uTXNUcmFuc2Zvcm18fG4ubXNUcmFuc2Zvcm18fG4udHJhbnNmb3JtfHxuLmdldFByb3BlcnR5VmFsdWUoXCJ0cmFuc2Zvcm1cIikucmVwbGFjZShcInRyYW5zbGF0ZShcIixcIm1hdHJpeCgxLCAwLCAwLCAxLFwiKSkudG9TdHJpbmcoKS5zcGxpdChcIixcIiksXCJ4XCI9PT1pJiYoYT10LldlYktpdENTU01hdHJpeD9yLm00MToxNj09PXMubGVuZ3RoP3BhcnNlRmxvYXQoc1sxMl0pOnBhcnNlRmxvYXQoc1s0XSkpLFwieVwiPT09aSYmKGE9dC5XZWJLaXRDU1NNYXRyaXg/ci5tNDI6MTY9PT1zLmxlbmd0aD9wYXJzZUZsb2F0KHNbMTNdKTpwYXJzZUZsb2F0KHNbNV0pKSxhfHwwfSxwYXJzZVVybFF1ZXJ5OmZ1bmN0aW9uKGUpe3ZhciBpLHMsYSxyLG49e30sbz1lfHx0LmxvY2F0aW9uLmhyZWY7aWYoXCJzdHJpbmdcIj09dHlwZW9mIG8mJm8ubGVuZ3RoKWZvcihyPShzPShvPW8uaW5kZXhPZihcIj9cIik+LTE/by5yZXBsYWNlKC9cXFMqXFw/LyxcIlwiKTpcIlwiKS5zcGxpdChcIiZcIikuZmlsdGVyKChmdW5jdGlvbihlKXtyZXR1cm5cIlwiIT09ZX0pKSkubGVuZ3RoLGk9MDtpPHI7aSs9MSlhPXNbaV0ucmVwbGFjZSgvI1xcUysvZyxcIlwiKS5zcGxpdChcIj1cIiksbltkZWNvZGVVUklDb21wb25lbnQoYVswXSldPXZvaWQgMD09PWFbMV0/dm9pZCAwOmRlY29kZVVSSUNvbXBvbmVudChhWzFdKXx8XCJcIjtyZXR1cm4gbn0saXNPYmplY3Q6ZnVuY3Rpb24oZSl7cmV0dXJuXCJvYmplY3RcIj09dHlwZW9mIGUmJm51bGwhPT1lJiZlLmNvbnN0cnVjdG9yJiZlLmNvbnN0cnVjdG9yPT09T2JqZWN0fSxleHRlbmQ6ZnVuY3Rpb24oKXtmb3IodmFyIGU9W10sdD1hcmd1bWVudHMubGVuZ3RoO3QtLTspZVt0XT1hcmd1bWVudHNbdF07Zm9yKHZhciBpPU9iamVjdChlWzBdKSxzPTE7czxlLmxlbmd0aDtzKz0xKXt2YXIgYT1lW3NdO2lmKG51bGwhPWEpZm9yKHZhciByPU9iamVjdC5rZXlzKE9iamVjdChhKSksbz0wLGw9ci5sZW5ndGg7bzxsO28rPTEpe3ZhciBkPXJbb10saD1PYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGEsZCk7dm9pZCAwIT09aCYmaC5lbnVtZXJhYmxlJiYobi5pc09iamVjdChpW2RdKSYmbi5pc09iamVjdChhW2RdKT9uLmV4dGVuZChpW2RdLGFbZF0pOiFuLmlzT2JqZWN0KGlbZF0pJiZuLmlzT2JqZWN0KGFbZF0pPyhpW2RdPXt9LG4uZXh0ZW5kKGlbZF0sYVtkXSkpOmlbZF09YVtkXSl9fXJldHVybiBpfX0sbz17dG91Y2g6dC5Nb2Rlcm5penImJiEwPT09dC5Nb2Rlcm5penIudG91Y2h8fCEhKHQubmF2aWdhdG9yLm1heFRvdWNoUG9pbnRzPjB8fFwib250b3VjaHN0YXJ0XCJpbiB0fHx0LkRvY3VtZW50VG91Y2gmJmUgaW5zdGFuY2VvZiB0LkRvY3VtZW50VG91Y2gpLHBvaW50ZXJFdmVudHM6ISF0LlBvaW50ZXJFdmVudCYmXCJtYXhUb3VjaFBvaW50c1wiaW4gdC5uYXZpZ2F0b3ImJnQubmF2aWdhdG9yLm1heFRvdWNoUG9pbnRzPjAsb2JzZXJ2ZXI6XCJNdXRhdGlvbk9ic2VydmVyXCJpbiB0fHxcIldlYmtpdE11dGF0aW9uT2JzZXJ2ZXJcImluIHQscGFzc2l2ZUxpc3RlbmVyOmZ1bmN0aW9uKCl7dmFyIGU9ITE7dHJ5e3ZhciBpPU9iamVjdC5kZWZpbmVQcm9wZXJ0eSh7fSxcInBhc3NpdmVcIix7Z2V0OmZ1bmN0aW9uKCl7ZT0hMH19KTt0LmFkZEV2ZW50TGlzdGVuZXIoXCJ0ZXN0UGFzc2l2ZUxpc3RlbmVyXCIsbnVsbCxpKX1jYXRjaChlKXt9cmV0dXJuIGV9KCksZ2VzdHVyZXM6XCJvbmdlc3R1cmVzdGFydFwiaW4gdH0sbD1mdW5jdGlvbihlKXt2b2lkIDA9PT1lJiYoZT17fSk7dmFyIHQ9dGhpczt0LnBhcmFtcz1lLHQuZXZlbnRzTGlzdGVuZXJzPXt9LHQucGFyYW1zJiZ0LnBhcmFtcy5vbiYmT2JqZWN0LmtleXModC5wYXJhbXMub24pLmZvckVhY2goKGZ1bmN0aW9uKGUpe3Qub24oZSx0LnBhcmFtcy5vbltlXSl9KSl9LGQ9e2NvbXBvbmVudHM6e2NvbmZpZ3VyYWJsZTohMH19O2wucHJvdG90eXBlLm9uPWZ1bmN0aW9uKGUsdCxpKXt2YXIgcz10aGlzO2lmKFwiZnVuY3Rpb25cIiE9dHlwZW9mIHQpcmV0dXJuIHM7dmFyIGE9aT9cInVuc2hpZnRcIjpcInB1c2hcIjtyZXR1cm4gZS5zcGxpdChcIiBcIikuZm9yRWFjaCgoZnVuY3Rpb24oZSl7cy5ldmVudHNMaXN0ZW5lcnNbZV18fChzLmV2ZW50c0xpc3RlbmVyc1tlXT1bXSkscy5ldmVudHNMaXN0ZW5lcnNbZV1bYV0odCl9KSksc30sbC5wcm90b3R5cGUub25jZT1mdW5jdGlvbihlLHQsaSl7dmFyIHM9dGhpcztpZihcImZ1bmN0aW9uXCIhPXR5cGVvZiB0KXJldHVybiBzO2Z1bmN0aW9uIGEoKXtmb3IodmFyIGk9W10scj1hcmd1bWVudHMubGVuZ3RoO3ItLTspaVtyXT1hcmd1bWVudHNbcl07cy5vZmYoZSxhKSxhLmY3cHJveHkmJmRlbGV0ZSBhLmY3cHJveHksdC5hcHBseShzLGkpfXJldHVybiBhLmY3cHJveHk9dCxzLm9uKGUsYSxpKX0sbC5wcm90b3R5cGUub2ZmPWZ1bmN0aW9uKGUsdCl7dmFyIGk9dGhpcztyZXR1cm4gaS5ldmVudHNMaXN0ZW5lcnM/KGUuc3BsaXQoXCIgXCIpLmZvckVhY2goKGZ1bmN0aW9uKGUpe3ZvaWQgMD09PXQ/aS5ldmVudHNMaXN0ZW5lcnNbZV09W106aS5ldmVudHNMaXN0ZW5lcnNbZV0mJmkuZXZlbnRzTGlzdGVuZXJzW2VdLmxlbmd0aCYmaS5ldmVudHNMaXN0ZW5lcnNbZV0uZm9yRWFjaCgoZnVuY3Rpb24ocyxhKXsocz09PXR8fHMuZjdwcm94eSYmcy5mN3Byb3h5PT09dCkmJmkuZXZlbnRzTGlzdGVuZXJzW2VdLnNwbGljZShhLDEpfSkpfSkpLGkpOml9LGwucHJvdG90eXBlLmVtaXQ9ZnVuY3Rpb24oKXtmb3IodmFyIGU9W10sdD1hcmd1bWVudHMubGVuZ3RoO3QtLTspZVt0XT1hcmd1bWVudHNbdF07dmFyIGkscyxhLHI9dGhpcztpZighci5ldmVudHNMaXN0ZW5lcnMpcmV0dXJuIHI7XCJzdHJpbmdcIj09dHlwZW9mIGVbMF18fEFycmF5LmlzQXJyYXkoZVswXSk/KGk9ZVswXSxzPWUuc2xpY2UoMSxlLmxlbmd0aCksYT1yKTooaT1lWzBdLmV2ZW50cyxzPWVbMF0uZGF0YSxhPWVbMF0uY29udGV4dHx8cik7dmFyIG49QXJyYXkuaXNBcnJheShpKT9pOmkuc3BsaXQoXCIgXCIpO3JldHVybiBuLmZvckVhY2goKGZ1bmN0aW9uKGUpe2lmKHIuZXZlbnRzTGlzdGVuZXJzJiZyLmV2ZW50c0xpc3RlbmVyc1tlXSl7dmFyIHQ9W107ci5ldmVudHNMaXN0ZW5lcnNbZV0uZm9yRWFjaCgoZnVuY3Rpb24oZSl7dC5wdXNoKGUpfSkpLHQuZm9yRWFjaCgoZnVuY3Rpb24oZSl7ZS5hcHBseShhLHMpfSkpfX0pKSxyfSxsLnByb3RvdHlwZS51c2VNb2R1bGVzUGFyYW1zPWZ1bmN0aW9uKGUpe3ZhciB0PXRoaXM7dC5tb2R1bGVzJiZPYmplY3Qua2V5cyh0Lm1vZHVsZXMpLmZvckVhY2goKGZ1bmN0aW9uKGkpe3ZhciBzPXQubW9kdWxlc1tpXTtzLnBhcmFtcyYmbi5leHRlbmQoZSxzLnBhcmFtcyl9KSl9LGwucHJvdG90eXBlLnVzZU1vZHVsZXM9ZnVuY3Rpb24oZSl7dm9pZCAwPT09ZSYmKGU9e30pO3ZhciB0PXRoaXM7dC5tb2R1bGVzJiZPYmplY3Qua2V5cyh0Lm1vZHVsZXMpLmZvckVhY2goKGZ1bmN0aW9uKGkpe3ZhciBzPXQubW9kdWxlc1tpXSxhPWVbaV18fHt9O3MuaW5zdGFuY2UmJk9iamVjdC5rZXlzKHMuaW5zdGFuY2UpLmZvckVhY2goKGZ1bmN0aW9uKGUpe3ZhciBpPXMuaW5zdGFuY2VbZV07dFtlXT1cImZ1bmN0aW9uXCI9PXR5cGVvZiBpP2kuYmluZCh0KTppfSkpLHMub24mJnQub24mJk9iamVjdC5rZXlzKHMub24pLmZvckVhY2goKGZ1bmN0aW9uKGUpe3Qub24oZSxzLm9uW2VdKX0pKSxzLmNyZWF0ZSYmcy5jcmVhdGUuYmluZCh0KShhKX0pKX0sZC5jb21wb25lbnRzLnNldD1mdW5jdGlvbihlKXt0aGlzLnVzZSYmdGhpcy51c2UoZSl9LGwuaW5zdGFsbE1vZHVsZT1mdW5jdGlvbihlKXtmb3IodmFyIHQ9W10saT1hcmd1bWVudHMubGVuZ3RoLTE7aS0tID4wOyl0W2ldPWFyZ3VtZW50c1tpKzFdO3ZhciBzPXRoaXM7cy5wcm90b3R5cGUubW9kdWxlc3x8KHMucHJvdG90eXBlLm1vZHVsZXM9e30pO3ZhciBhPWUubmFtZXx8T2JqZWN0LmtleXMocy5wcm90b3R5cGUubW9kdWxlcykubGVuZ3RoK1wiX1wiK24ubm93KCk7cmV0dXJuIHMucHJvdG90eXBlLm1vZHVsZXNbYV09ZSxlLnByb3RvJiZPYmplY3Qua2V5cyhlLnByb3RvKS5mb3JFYWNoKChmdW5jdGlvbih0KXtzLnByb3RvdHlwZVt0XT1lLnByb3RvW3RdfSkpLGUuc3RhdGljJiZPYmplY3Qua2V5cyhlLnN0YXRpYykuZm9yRWFjaCgoZnVuY3Rpb24odCl7c1t0XT1lLnN0YXRpY1t0XX0pKSxlLmluc3RhbGwmJmUuaW5zdGFsbC5hcHBseShzLHQpLHN9LGwudXNlPWZ1bmN0aW9uKGUpe2Zvcih2YXIgdD1bXSxpPWFyZ3VtZW50cy5sZW5ndGgtMTtpLS0gPjA7KXRbaV09YXJndW1lbnRzW2krMV07dmFyIHM9dGhpcztyZXR1cm4gQXJyYXkuaXNBcnJheShlKT8oZS5mb3JFYWNoKChmdW5jdGlvbihlKXtyZXR1cm4gcy5pbnN0YWxsTW9kdWxlKGUpfSkpLHMpOnMuaW5zdGFsbE1vZHVsZS5hcHBseShzLFtlXS5jb25jYXQodCkpfSxPYmplY3QuZGVmaW5lUHJvcGVydGllcyhsLGQpO3ZhciBoPXt1cGRhdGVTaXplOmZ1bmN0aW9uKCl7dmFyIGUsdCxpPXRoaXMuJGVsO2U9dm9pZCAwIT09dGhpcy5wYXJhbXMud2lkdGg/dGhpcy5wYXJhbXMud2lkdGg6aVswXS5jbGllbnRXaWR0aCx0PXZvaWQgMCE9PXRoaXMucGFyYW1zLmhlaWdodD90aGlzLnBhcmFtcy5oZWlnaHQ6aVswXS5jbGllbnRIZWlnaHQsMD09PWUmJnRoaXMuaXNIb3Jpem9udGFsKCl8fDA9PT10JiZ0aGlzLmlzVmVydGljYWwoKXx8KGU9ZS1wYXJzZUludChpLmNzcyhcInBhZGRpbmctbGVmdFwiKSwxMCktcGFyc2VJbnQoaS5jc3MoXCJwYWRkaW5nLXJpZ2h0XCIpLDEwKSx0PXQtcGFyc2VJbnQoaS5jc3MoXCJwYWRkaW5nLXRvcFwiKSwxMCktcGFyc2VJbnQoaS5jc3MoXCJwYWRkaW5nLWJvdHRvbVwiKSwxMCksbi5leHRlbmQodGhpcyx7d2lkdGg6ZSxoZWlnaHQ6dCxzaXplOnRoaXMuaXNIb3Jpem9udGFsKCk/ZTp0fSkpfSx1cGRhdGVTbGlkZXM6ZnVuY3Rpb24oKXt2YXIgZT10aGlzLnBhcmFtcyxpPXRoaXMuJHdyYXBwZXJFbCxzPXRoaXMuc2l6ZSxhPXRoaXMucnRsVHJhbnNsYXRlLHI9dGhpcy53cm9uZ1JUTCxvPXRoaXMudmlydHVhbCYmZS52aXJ0dWFsLmVuYWJsZWQsbD1vP3RoaXMudmlydHVhbC5zbGlkZXMubGVuZ3RoOnRoaXMuc2xpZGVzLmxlbmd0aCxkPWkuY2hpbGRyZW4oXCIuXCIrdGhpcy5wYXJhbXMuc2xpZGVDbGFzcyksaD1vP3RoaXMudmlydHVhbC5zbGlkZXMubGVuZ3RoOmQubGVuZ3RoLHA9W10sYz1bXSx1PVtdO2Z1bmN0aW9uIHYodCl7cmV0dXJuIWUuY3NzTW9kZXx8dCE9PWQubGVuZ3RoLTF9dmFyIGY9ZS5zbGlkZXNPZmZzZXRCZWZvcmU7XCJmdW5jdGlvblwiPT10eXBlb2YgZiYmKGY9ZS5zbGlkZXNPZmZzZXRCZWZvcmUuY2FsbCh0aGlzKSk7dmFyIG09ZS5zbGlkZXNPZmZzZXRBZnRlcjtcImZ1bmN0aW9uXCI9PXR5cGVvZiBtJiYobT1lLnNsaWRlc09mZnNldEFmdGVyLmNhbGwodGhpcykpO3ZhciBnPXRoaXMuc25hcEdyaWQubGVuZ3RoLGI9dGhpcy5zbmFwR3JpZC5sZW5ndGgsdz1lLnNwYWNlQmV0d2Vlbix5PS1mLHg9MCxUPTA7aWYodm9pZCAwIT09cyl7dmFyIEUsUztcInN0cmluZ1wiPT10eXBlb2YgdyYmdy5pbmRleE9mKFwiJVwiKT49MCYmKHc9cGFyc2VGbG9hdCh3LnJlcGxhY2UoXCIlXCIsXCJcIikpLzEwMCpzKSx0aGlzLnZpcnR1YWxTaXplPS13LGE/ZC5jc3Moe21hcmdpbkxlZnQ6XCJcIixtYXJnaW5Ub3A6XCJcIn0pOmQuY3NzKHttYXJnaW5SaWdodDpcIlwiLG1hcmdpbkJvdHRvbTpcIlwifSksZS5zbGlkZXNQZXJDb2x1bW4+MSYmKEU9TWF0aC5mbG9vcihoL2Uuc2xpZGVzUGVyQ29sdW1uKT09PWgvdGhpcy5wYXJhbXMuc2xpZGVzUGVyQ29sdW1uP2g6TWF0aC5jZWlsKGgvZS5zbGlkZXNQZXJDb2x1bW4pKmUuc2xpZGVzUGVyQ29sdW1uLFwiYXV0b1wiIT09ZS5zbGlkZXNQZXJWaWV3JiZcInJvd1wiPT09ZS5zbGlkZXNQZXJDb2x1bW5GaWxsJiYoRT1NYXRoLm1heChFLGUuc2xpZGVzUGVyVmlldyplLnNsaWRlc1BlckNvbHVtbikpKTtmb3IodmFyIEMsTT1lLnNsaWRlc1BlckNvbHVtbixQPUUvTSx6PU1hdGguZmxvb3IoaC9lLnNsaWRlc1BlckNvbHVtbiksaz0wO2s8aDtrKz0xKXtTPTA7dmFyICQ9ZC5lcShrKTtpZihlLnNsaWRlc1BlckNvbHVtbj4xKXt2YXIgTD12b2lkIDAsST12b2lkIDAsRD12b2lkIDA7aWYoXCJyb3dcIj09PWUuc2xpZGVzUGVyQ29sdW1uRmlsbCYmZS5zbGlkZXNQZXJHcm91cD4xKXt2YXIgTz1NYXRoLmZsb29yKGsvKGUuc2xpZGVzUGVyR3JvdXAqZS5zbGlkZXNQZXJDb2x1bW4pKSxBPWstZS5zbGlkZXNQZXJDb2x1bW4qZS5zbGlkZXNQZXJHcm91cCpPLEc9MD09PU8/ZS5zbGlkZXNQZXJHcm91cDpNYXRoLm1pbihNYXRoLmNlaWwoKGgtTypNKmUuc2xpZGVzUGVyR3JvdXApL00pLGUuc2xpZGVzUGVyR3JvdXApO0w9KEk9QS0oRD1NYXRoLmZsb29yKEEvRykpKkcrTyplLnNsaWRlc1Blckdyb3VwKStEKkUvTSwkLmNzcyh7XCItd2Via2l0LWJveC1vcmRpbmFsLWdyb3VwXCI6TCxcIi1tb3otYm94LW9yZGluYWwtZ3JvdXBcIjpMLFwiLW1zLWZsZXgtb3JkZXJcIjpMLFwiLXdlYmtpdC1vcmRlclwiOkwsb3JkZXI6TH0pfWVsc2VcImNvbHVtblwiPT09ZS5zbGlkZXNQZXJDb2x1bW5GaWxsPyhEPWstKEk9TWF0aC5mbG9vcihrL00pKSpNLChJPnp8fEk9PT16JiZEPT09TS0xKSYmKEQrPTEpPj1NJiYoRD0wLEkrPTEpKTpJPWstKEQ9TWF0aC5mbG9vcihrL1ApKSpQOyQuY3NzKFwibWFyZ2luLVwiKyh0aGlzLmlzSG9yaXpvbnRhbCgpP1widG9wXCI6XCJsZWZ0XCIpLDAhPT1EJiZlLnNwYWNlQmV0d2VlbiYmZS5zcGFjZUJldHdlZW4rXCJweFwiKX1pZihcIm5vbmVcIiE9PSQuY3NzKFwiZGlzcGxheVwiKSl7aWYoXCJhdXRvXCI9PT1lLnNsaWRlc1BlclZpZXcpe3ZhciBIPXQuZ2V0Q29tcHV0ZWRTdHlsZSgkWzBdLG51bGwpLEI9JFswXS5zdHlsZS50cmFuc2Zvcm0sTj0kWzBdLnN0eWxlLndlYmtpdFRyYW5zZm9ybTtpZihCJiYoJFswXS5zdHlsZS50cmFuc2Zvcm09XCJub25lXCIpLE4mJigkWzBdLnN0eWxlLndlYmtpdFRyYW5zZm9ybT1cIm5vbmVcIiksZS5yb3VuZExlbmd0aHMpUz10aGlzLmlzSG9yaXpvbnRhbCgpPyQub3V0ZXJXaWR0aCghMCk6JC5vdXRlckhlaWdodCghMCk7ZWxzZSBpZih0aGlzLmlzSG9yaXpvbnRhbCgpKXt2YXIgWD1wYXJzZUZsb2F0KEguZ2V0UHJvcGVydHlWYWx1ZShcIndpZHRoXCIpKSxWPXBhcnNlRmxvYXQoSC5nZXRQcm9wZXJ0eVZhbHVlKFwicGFkZGluZy1sZWZ0XCIpKSxZPXBhcnNlRmxvYXQoSC5nZXRQcm9wZXJ0eVZhbHVlKFwicGFkZGluZy1yaWdodFwiKSksRj1wYXJzZUZsb2F0KEguZ2V0UHJvcGVydHlWYWx1ZShcIm1hcmdpbi1sZWZ0XCIpKSxXPXBhcnNlRmxvYXQoSC5nZXRQcm9wZXJ0eVZhbHVlKFwibWFyZ2luLXJpZ2h0XCIpKSxSPUguZ2V0UHJvcGVydHlWYWx1ZShcImJveC1zaXppbmdcIik7Uz1SJiZcImJvcmRlci1ib3hcIj09PVI/WCtGK1c6WCtWK1krRitXfWVsc2V7dmFyIHE9cGFyc2VGbG9hdChILmdldFByb3BlcnR5VmFsdWUoXCJoZWlnaHRcIikpLGo9cGFyc2VGbG9hdChILmdldFByb3BlcnR5VmFsdWUoXCJwYWRkaW5nLXRvcFwiKSksSz1wYXJzZUZsb2F0KEguZ2V0UHJvcGVydHlWYWx1ZShcInBhZGRpbmctYm90dG9tXCIpKSxVPXBhcnNlRmxvYXQoSC5nZXRQcm9wZXJ0eVZhbHVlKFwibWFyZ2luLXRvcFwiKSksXz1wYXJzZUZsb2F0KEguZ2V0UHJvcGVydHlWYWx1ZShcIm1hcmdpbi1ib3R0b21cIikpLFo9SC5nZXRQcm9wZXJ0eVZhbHVlKFwiYm94LXNpemluZ1wiKTtTPVomJlwiYm9yZGVyLWJveFwiPT09Wj9xK1UrXzpxK2orSytVK199QiYmKCRbMF0uc3R5bGUudHJhbnNmb3JtPUIpLE4mJigkWzBdLnN0eWxlLndlYmtpdFRyYW5zZm9ybT1OKSxlLnJvdW5kTGVuZ3RocyYmKFM9TWF0aC5mbG9vcihTKSl9ZWxzZSBTPShzLShlLnNsaWRlc1BlclZpZXctMSkqdykvZS5zbGlkZXNQZXJWaWV3LGUucm91bmRMZW5ndGhzJiYoUz1NYXRoLmZsb29yKFMpKSxkW2tdJiYodGhpcy5pc0hvcml6b250YWwoKT9kW2tdLnN0eWxlLndpZHRoPVMrXCJweFwiOmRba10uc3R5bGUuaGVpZ2h0PVMrXCJweFwiKTtkW2tdJiYoZFtrXS5zd2lwZXJTbGlkZVNpemU9UyksdS5wdXNoKFMpLGUuY2VudGVyZWRTbGlkZXM/KHk9eStTLzIreC8yK3csMD09PXgmJjAhPT1rJiYoeT15LXMvMi13KSwwPT09ayYmKHk9eS1zLzItdyksTWF0aC5hYnMoeSk8LjAwMSYmKHk9MCksZS5yb3VuZExlbmd0aHMmJih5PU1hdGguZmxvb3IoeSkpLFQlZS5zbGlkZXNQZXJHcm91cD09MCYmcC5wdXNoKHkpLGMucHVzaCh5KSk6KGUucm91bmRMZW5ndGhzJiYoeT1NYXRoLmZsb29yKHkpKSwoVC1NYXRoLm1pbih0aGlzLnBhcmFtcy5zbGlkZXNQZXJHcm91cFNraXAsVCkpJXRoaXMucGFyYW1zLnNsaWRlc1Blckdyb3VwPT0wJiZwLnB1c2goeSksYy5wdXNoKHkpLHk9eStTK3cpLHRoaXMudmlydHVhbFNpemUrPVMrdyx4PVMsVCs9MX19aWYodGhpcy52aXJ0dWFsU2l6ZT1NYXRoLm1heCh0aGlzLnZpcnR1YWxTaXplLHMpK20sYSYmciYmKFwic2xpZGVcIj09PWUuZWZmZWN0fHxcImNvdmVyZmxvd1wiPT09ZS5lZmZlY3QpJiZpLmNzcyh7d2lkdGg6dGhpcy52aXJ0dWFsU2l6ZStlLnNwYWNlQmV0d2VlbitcInB4XCJ9KSxlLnNldFdyYXBwZXJTaXplJiYodGhpcy5pc0hvcml6b250YWwoKT9pLmNzcyh7d2lkdGg6dGhpcy52aXJ0dWFsU2l6ZStlLnNwYWNlQmV0d2VlbitcInB4XCJ9KTppLmNzcyh7aGVpZ2h0OnRoaXMudmlydHVhbFNpemUrZS5zcGFjZUJldHdlZW4rXCJweFwifSkpLGUuc2xpZGVzUGVyQ29sdW1uPjEmJih0aGlzLnZpcnR1YWxTaXplPShTK2Uuc3BhY2VCZXR3ZWVuKSpFLHRoaXMudmlydHVhbFNpemU9TWF0aC5jZWlsKHRoaXMudmlydHVhbFNpemUvZS5zbGlkZXNQZXJDb2x1bW4pLWUuc3BhY2VCZXR3ZWVuLHRoaXMuaXNIb3Jpem9udGFsKCk/aS5jc3Moe3dpZHRoOnRoaXMudmlydHVhbFNpemUrZS5zcGFjZUJldHdlZW4rXCJweFwifSk6aS5jc3Moe2hlaWdodDp0aGlzLnZpcnR1YWxTaXplK2Uuc3BhY2VCZXR3ZWVuK1wicHhcIn0pLGUuY2VudGVyZWRTbGlkZXMpKXtDPVtdO2Zvcih2YXIgUT0wO1E8cC5sZW5ndGg7USs9MSl7dmFyIEo9cFtRXTtlLnJvdW5kTGVuZ3RocyYmKEo9TWF0aC5mbG9vcihKKSkscFtRXTx0aGlzLnZpcnR1YWxTaXplK3BbMF0mJkMucHVzaChKKX1wPUN9aWYoIWUuY2VudGVyZWRTbGlkZXMpe0M9W107Zm9yKHZhciBlZT0wO2VlPHAubGVuZ3RoO2VlKz0xKXt2YXIgdGU9cFtlZV07ZS5yb3VuZExlbmd0aHMmJih0ZT1NYXRoLmZsb29yKHRlKSkscFtlZV08PXRoaXMudmlydHVhbFNpemUtcyYmQy5wdXNoKHRlKX1wPUMsTWF0aC5mbG9vcih0aGlzLnZpcnR1YWxTaXplLXMpLU1hdGguZmxvb3IocFtwLmxlbmd0aC0xXSk+MSYmcC5wdXNoKHRoaXMudmlydHVhbFNpemUtcyl9aWYoMD09PXAubGVuZ3RoJiYocD1bMF0pLDAhPT1lLnNwYWNlQmV0d2VlbiYmKHRoaXMuaXNIb3Jpem9udGFsKCk/YT9kLmZpbHRlcih2KS5jc3Moe21hcmdpbkxlZnQ6dytcInB4XCJ9KTpkLmZpbHRlcih2KS5jc3Moe21hcmdpblJpZ2h0OncrXCJweFwifSk6ZC5maWx0ZXIodikuY3NzKHttYXJnaW5Cb3R0b206dytcInB4XCJ9KSksZS5jZW50ZXJlZFNsaWRlcyYmZS5jZW50ZXJlZFNsaWRlc0JvdW5kcyl7dmFyIGllPTA7dS5mb3JFYWNoKChmdW5jdGlvbih0KXtpZSs9dCsoZS5zcGFjZUJldHdlZW4/ZS5zcGFjZUJldHdlZW46MCl9KSk7dmFyIHNlPShpZS09ZS5zcGFjZUJldHdlZW4pLXM7cD1wLm1hcCgoZnVuY3Rpb24oZSl7cmV0dXJuIGU8MD8tZjplPnNlP3NlK206ZX0pKX1pZihlLmNlbnRlckluc3VmZmljaWVudFNsaWRlcyl7dmFyIGFlPTA7aWYodS5mb3JFYWNoKChmdW5jdGlvbih0KXthZSs9dCsoZS5zcGFjZUJldHdlZW4/ZS5zcGFjZUJldHdlZW46MCl9KSksKGFlLT1lLnNwYWNlQmV0d2Vlbik8cyl7dmFyIHJlPShzLWFlKS8yO3AuZm9yRWFjaCgoZnVuY3Rpb24oZSx0KXtwW3RdPWUtcmV9KSksYy5mb3JFYWNoKChmdW5jdGlvbihlLHQpe2NbdF09ZStyZX0pKX19bi5leHRlbmQodGhpcyx7c2xpZGVzOmQsc25hcEdyaWQ6cCxzbGlkZXNHcmlkOmMsc2xpZGVzU2l6ZXNHcmlkOnV9KSxoIT09bCYmdGhpcy5lbWl0KFwic2xpZGVzTGVuZ3RoQ2hhbmdlXCIpLHAubGVuZ3RoIT09ZyYmKHRoaXMucGFyYW1zLndhdGNoT3ZlcmZsb3cmJnRoaXMuY2hlY2tPdmVyZmxvdygpLHRoaXMuZW1pdChcInNuYXBHcmlkTGVuZ3RoQ2hhbmdlXCIpKSxjLmxlbmd0aCE9PWImJnRoaXMuZW1pdChcInNsaWRlc0dyaWRMZW5ndGhDaGFuZ2VcIiksKGUud2F0Y2hTbGlkZXNQcm9ncmVzc3x8ZS53YXRjaFNsaWRlc1Zpc2liaWxpdHkpJiZ0aGlzLnVwZGF0ZVNsaWRlc09mZnNldCgpfX0sdXBkYXRlQXV0b0hlaWdodDpmdW5jdGlvbihlKXt2YXIgdCxpPVtdLHM9MDtpZihcIm51bWJlclwiPT10eXBlb2YgZT90aGlzLnNldFRyYW5zaXRpb24oZSk6ITA9PT1lJiZ0aGlzLnNldFRyYW5zaXRpb24odGhpcy5wYXJhbXMuc3BlZWQpLFwiYXV0b1wiIT09dGhpcy5wYXJhbXMuc2xpZGVzUGVyVmlldyYmdGhpcy5wYXJhbXMuc2xpZGVzUGVyVmlldz4xKWlmKHRoaXMucGFyYW1zLmNlbnRlcmVkU2xpZGVzKXRoaXMudmlzaWJsZVNsaWRlcy5lYWNoKChmdW5jdGlvbihlLHQpe2kucHVzaCh0KX0pKTtlbHNlIGZvcih0PTA7dDxNYXRoLmNlaWwodGhpcy5wYXJhbXMuc2xpZGVzUGVyVmlldyk7dCs9MSl7dmFyIGE9dGhpcy5hY3RpdmVJbmRleCt0O2lmKGE+dGhpcy5zbGlkZXMubGVuZ3RoKWJyZWFrO2kucHVzaCh0aGlzLnNsaWRlcy5lcShhKVswXSl9ZWxzZSBpLnB1c2godGhpcy5zbGlkZXMuZXEodGhpcy5hY3RpdmVJbmRleClbMF0pO2Zvcih0PTA7dDxpLmxlbmd0aDt0Kz0xKWlmKHZvaWQgMCE9PWlbdF0pe3ZhciByPWlbdF0ub2Zmc2V0SGVpZ2h0O3M9cj5zP3I6c31zJiZ0aGlzLiR3cmFwcGVyRWwuY3NzKFwiaGVpZ2h0XCIscytcInB4XCIpfSx1cGRhdGVTbGlkZXNPZmZzZXQ6ZnVuY3Rpb24oKXtmb3IodmFyIGU9dGhpcy5zbGlkZXMsdD0wO3Q8ZS5sZW5ndGg7dCs9MSllW3RdLnN3aXBlclNsaWRlT2Zmc2V0PXRoaXMuaXNIb3Jpem9udGFsKCk/ZVt0XS5vZmZzZXRMZWZ0OmVbdF0ub2Zmc2V0VG9wfSx1cGRhdGVTbGlkZXNQcm9ncmVzczpmdW5jdGlvbihlKXt2b2lkIDA9PT1lJiYoZT10aGlzJiZ0aGlzLnRyYW5zbGF0ZXx8MCk7dmFyIHQ9dGhpcy5wYXJhbXMsaT10aGlzLnNsaWRlcyxhPXRoaXMucnRsVHJhbnNsYXRlO2lmKDAhPT1pLmxlbmd0aCl7dm9pZCAwPT09aVswXS5zd2lwZXJTbGlkZU9mZnNldCYmdGhpcy51cGRhdGVTbGlkZXNPZmZzZXQoKTt2YXIgcj0tZTthJiYocj1lKSxpLnJlbW92ZUNsYXNzKHQuc2xpZGVWaXNpYmxlQ2xhc3MpLHRoaXMudmlzaWJsZVNsaWRlc0luZGV4ZXM9W10sdGhpcy52aXNpYmxlU2xpZGVzPVtdO2Zvcih2YXIgbj0wO248aS5sZW5ndGg7bis9MSl7dmFyIG89aVtuXSxsPShyKyh0LmNlbnRlcmVkU2xpZGVzP3RoaXMubWluVHJhbnNsYXRlKCk6MCktby5zd2lwZXJTbGlkZU9mZnNldCkvKG8uc3dpcGVyU2xpZGVTaXplK3Quc3BhY2VCZXR3ZWVuKTtpZih0LndhdGNoU2xpZGVzVmlzaWJpbGl0eXx8dC5jZW50ZXJlZFNsaWRlcyYmdC5hdXRvSGVpZ2h0KXt2YXIgZD0tKHItby5zd2lwZXJTbGlkZU9mZnNldCksaD1kK3RoaXMuc2xpZGVzU2l6ZXNHcmlkW25dOyhkPj0wJiZkPHRoaXMuc2l6ZS0xfHxoPjEmJmg8PXRoaXMuc2l6ZXx8ZDw9MCYmaD49dGhpcy5zaXplKSYmKHRoaXMudmlzaWJsZVNsaWRlcy5wdXNoKG8pLHRoaXMudmlzaWJsZVNsaWRlc0luZGV4ZXMucHVzaChuKSxpLmVxKG4pLmFkZENsYXNzKHQuc2xpZGVWaXNpYmxlQ2xhc3MpKX1vLnByb2dyZXNzPWE/LWw6bH10aGlzLnZpc2libGVTbGlkZXM9cyh0aGlzLnZpc2libGVTbGlkZXMpfX0sdXBkYXRlUHJvZ3Jlc3M6ZnVuY3Rpb24oZSl7aWYodm9pZCAwPT09ZSl7dmFyIHQ9dGhpcy5ydGxUcmFuc2xhdGU/LTE6MTtlPXRoaXMmJnRoaXMudHJhbnNsYXRlJiZ0aGlzLnRyYW5zbGF0ZSp0fHwwfXZhciBpPXRoaXMucGFyYW1zLHM9dGhpcy5tYXhUcmFuc2xhdGUoKS10aGlzLm1pblRyYW5zbGF0ZSgpLGE9dGhpcy5wcm9ncmVzcyxyPXRoaXMuaXNCZWdpbm5pbmcsbz10aGlzLmlzRW5kLGw9cixkPW87MD09PXM/KGE9MCxyPSEwLG89ITApOihyPShhPShlLXRoaXMubWluVHJhbnNsYXRlKCkpL3MpPD0wLG89YT49MSksbi5leHRlbmQodGhpcyx7cHJvZ3Jlc3M6YSxpc0JlZ2lubmluZzpyLGlzRW5kOm99KSwoaS53YXRjaFNsaWRlc1Byb2dyZXNzfHxpLndhdGNoU2xpZGVzVmlzaWJpbGl0eXx8aS5jZW50ZXJlZFNsaWRlcyYmaS5hdXRvSGVpZ2h0KSYmdGhpcy51cGRhdGVTbGlkZXNQcm9ncmVzcyhlKSxyJiYhbCYmdGhpcy5lbWl0KFwicmVhY2hCZWdpbm5pbmcgdG9FZGdlXCIpLG8mJiFkJiZ0aGlzLmVtaXQoXCJyZWFjaEVuZCB0b0VkZ2VcIiksKGwmJiFyfHxkJiYhbykmJnRoaXMuZW1pdChcImZyb21FZGdlXCIpLHRoaXMuZW1pdChcInByb2dyZXNzXCIsYSl9LHVwZGF0ZVNsaWRlc0NsYXNzZXM6ZnVuY3Rpb24oKXt2YXIgZSx0PXRoaXMuc2xpZGVzLGk9dGhpcy5wYXJhbXMscz10aGlzLiR3cmFwcGVyRWwsYT10aGlzLmFjdGl2ZUluZGV4LHI9dGhpcy5yZWFsSW5kZXgsbj10aGlzLnZpcnR1YWwmJmkudmlydHVhbC5lbmFibGVkO3QucmVtb3ZlQ2xhc3MoaS5zbGlkZUFjdGl2ZUNsYXNzK1wiIFwiK2kuc2xpZGVOZXh0Q2xhc3MrXCIgXCIraS5zbGlkZVByZXZDbGFzcytcIiBcIitpLnNsaWRlRHVwbGljYXRlQWN0aXZlQ2xhc3MrXCIgXCIraS5zbGlkZUR1cGxpY2F0ZU5leHRDbGFzcytcIiBcIitpLnNsaWRlRHVwbGljYXRlUHJldkNsYXNzKSwoZT1uP3RoaXMuJHdyYXBwZXJFbC5maW5kKFwiLlwiK2kuc2xpZGVDbGFzcysnW2RhdGEtc3dpcGVyLXNsaWRlLWluZGV4PVwiJythKydcIl0nKTp0LmVxKGEpKS5hZGRDbGFzcyhpLnNsaWRlQWN0aXZlQ2xhc3MpLGkubG9vcCYmKGUuaGFzQ2xhc3MoaS5zbGlkZUR1cGxpY2F0ZUNsYXNzKT9zLmNoaWxkcmVuKFwiLlwiK2kuc2xpZGVDbGFzcytcIjpub3QoLlwiK2kuc2xpZGVEdXBsaWNhdGVDbGFzcysnKVtkYXRhLXN3aXBlci1zbGlkZS1pbmRleD1cIicrcisnXCJdJykuYWRkQ2xhc3MoaS5zbGlkZUR1cGxpY2F0ZUFjdGl2ZUNsYXNzKTpzLmNoaWxkcmVuKFwiLlwiK2kuc2xpZGVDbGFzcytcIi5cIitpLnNsaWRlRHVwbGljYXRlQ2xhc3MrJ1tkYXRhLXN3aXBlci1zbGlkZS1pbmRleD1cIicrcisnXCJdJykuYWRkQ2xhc3MoaS5zbGlkZUR1cGxpY2F0ZUFjdGl2ZUNsYXNzKSk7dmFyIG89ZS5uZXh0QWxsKFwiLlwiK2kuc2xpZGVDbGFzcykuZXEoMCkuYWRkQ2xhc3MoaS5zbGlkZU5leHRDbGFzcyk7aS5sb29wJiYwPT09by5sZW5ndGgmJihvPXQuZXEoMCkpLmFkZENsYXNzKGkuc2xpZGVOZXh0Q2xhc3MpO3ZhciBsPWUucHJldkFsbChcIi5cIitpLnNsaWRlQ2xhc3MpLmVxKDApLmFkZENsYXNzKGkuc2xpZGVQcmV2Q2xhc3MpO2kubG9vcCYmMD09PWwubGVuZ3RoJiYobD10LmVxKC0xKSkuYWRkQ2xhc3MoaS5zbGlkZVByZXZDbGFzcyksaS5sb29wJiYoby5oYXNDbGFzcyhpLnNsaWRlRHVwbGljYXRlQ2xhc3MpP3MuY2hpbGRyZW4oXCIuXCIraS5zbGlkZUNsYXNzK1wiOm5vdCguXCIraS5zbGlkZUR1cGxpY2F0ZUNsYXNzKycpW2RhdGEtc3dpcGVyLXNsaWRlLWluZGV4PVwiJytvLmF0dHIoXCJkYXRhLXN3aXBlci1zbGlkZS1pbmRleFwiKSsnXCJdJykuYWRkQ2xhc3MoaS5zbGlkZUR1cGxpY2F0ZU5leHRDbGFzcyk6cy5jaGlsZHJlbihcIi5cIitpLnNsaWRlQ2xhc3MrXCIuXCIraS5zbGlkZUR1cGxpY2F0ZUNsYXNzKydbZGF0YS1zd2lwZXItc2xpZGUtaW5kZXg9XCInK28uYXR0cihcImRhdGEtc3dpcGVyLXNsaWRlLWluZGV4XCIpKydcIl0nKS5hZGRDbGFzcyhpLnNsaWRlRHVwbGljYXRlTmV4dENsYXNzKSxsLmhhc0NsYXNzKGkuc2xpZGVEdXBsaWNhdGVDbGFzcyk/cy5jaGlsZHJlbihcIi5cIitpLnNsaWRlQ2xhc3MrXCI6bm90KC5cIitpLnNsaWRlRHVwbGljYXRlQ2xhc3MrJylbZGF0YS1zd2lwZXItc2xpZGUtaW5kZXg9XCInK2wuYXR0cihcImRhdGEtc3dpcGVyLXNsaWRlLWluZGV4XCIpKydcIl0nKS5hZGRDbGFzcyhpLnNsaWRlRHVwbGljYXRlUHJldkNsYXNzKTpzLmNoaWxkcmVuKFwiLlwiK2kuc2xpZGVDbGFzcytcIi5cIitpLnNsaWRlRHVwbGljYXRlQ2xhc3MrJ1tkYXRhLXN3aXBlci1zbGlkZS1pbmRleD1cIicrbC5hdHRyKFwiZGF0YS1zd2lwZXItc2xpZGUtaW5kZXhcIikrJ1wiXScpLmFkZENsYXNzKGkuc2xpZGVEdXBsaWNhdGVQcmV2Q2xhc3MpKX0sdXBkYXRlQWN0aXZlSW5kZXg6ZnVuY3Rpb24oZSl7dmFyIHQsaT10aGlzLnJ0bFRyYW5zbGF0ZT90aGlzLnRyYW5zbGF0ZTotdGhpcy50cmFuc2xhdGUscz10aGlzLnNsaWRlc0dyaWQsYT10aGlzLnNuYXBHcmlkLHI9dGhpcy5wYXJhbXMsbz10aGlzLmFjdGl2ZUluZGV4LGw9dGhpcy5yZWFsSW5kZXgsZD10aGlzLnNuYXBJbmRleCxoPWU7aWYodm9pZCAwPT09aCl7Zm9yKHZhciBwPTA7cDxzLmxlbmd0aDtwKz0xKXZvaWQgMCE9PXNbcCsxXT9pPj1zW3BdJiZpPHNbcCsxXS0oc1twKzFdLXNbcF0pLzI/aD1wOmk+PXNbcF0mJmk8c1twKzFdJiYoaD1wKzEpOmk+PXNbcF0mJihoPXApO3Iubm9ybWFsaXplU2xpZGVJbmRleCYmKGg8MHx8dm9pZCAwPT09aCkmJihoPTApfWlmKGEuaW5kZXhPZihpKT49MCl0PWEuaW5kZXhPZihpKTtlbHNle3ZhciBjPU1hdGgubWluKHIuc2xpZGVzUGVyR3JvdXBTa2lwLGgpO3Q9YytNYXRoLmZsb29yKChoLWMpL3Iuc2xpZGVzUGVyR3JvdXApfWlmKHQ+PWEubGVuZ3RoJiYodD1hLmxlbmd0aC0xKSxoIT09byl7dmFyIHU9cGFyc2VJbnQodGhpcy5zbGlkZXMuZXEoaCkuYXR0cihcImRhdGEtc3dpcGVyLXNsaWRlLWluZGV4XCIpfHxoLDEwKTtuLmV4dGVuZCh0aGlzLHtzbmFwSW5kZXg6dCxyZWFsSW5kZXg6dSxwcmV2aW91c0luZGV4Om8sYWN0aXZlSW5kZXg6aH0pLHRoaXMuZW1pdChcImFjdGl2ZUluZGV4Q2hhbmdlXCIpLHRoaXMuZW1pdChcInNuYXBJbmRleENoYW5nZVwiKSxsIT09dSYmdGhpcy5lbWl0KFwicmVhbEluZGV4Q2hhbmdlXCIpLCh0aGlzLmluaXRpYWxpemVkfHx0aGlzLnBhcmFtcy5ydW5DYWxsYmFja3NPbkluaXQpJiZ0aGlzLmVtaXQoXCJzbGlkZUNoYW5nZVwiKX1lbHNlIHQhPT1kJiYodGhpcy5zbmFwSW5kZXg9dCx0aGlzLmVtaXQoXCJzbmFwSW5kZXhDaGFuZ2VcIikpfSx1cGRhdGVDbGlja2VkU2xpZGU6ZnVuY3Rpb24oZSl7dmFyIHQ9dGhpcy5wYXJhbXMsaT1zKGUudGFyZ2V0KS5jbG9zZXN0KFwiLlwiK3Quc2xpZGVDbGFzcylbMF0sYT0hMTtpZihpKWZvcih2YXIgcj0wO3I8dGhpcy5zbGlkZXMubGVuZ3RoO3IrPTEpdGhpcy5zbGlkZXNbcl09PT1pJiYoYT0hMCk7aWYoIWl8fCFhKXJldHVybiB0aGlzLmNsaWNrZWRTbGlkZT12b2lkIDAsdm9pZCh0aGlzLmNsaWNrZWRJbmRleD12b2lkIDApO3RoaXMuY2xpY2tlZFNsaWRlPWksdGhpcy52aXJ0dWFsJiZ0aGlzLnBhcmFtcy52aXJ0dWFsLmVuYWJsZWQ/dGhpcy5jbGlja2VkSW5kZXg9cGFyc2VJbnQocyhpKS5hdHRyKFwiZGF0YS1zd2lwZXItc2xpZGUtaW5kZXhcIiksMTApOnRoaXMuY2xpY2tlZEluZGV4PXMoaSkuaW5kZXgoKSx0LnNsaWRlVG9DbGlja2VkU2xpZGUmJnZvaWQgMCE9PXRoaXMuY2xpY2tlZEluZGV4JiZ0aGlzLmNsaWNrZWRJbmRleCE9PXRoaXMuYWN0aXZlSW5kZXgmJnRoaXMuc2xpZGVUb0NsaWNrZWRTbGlkZSgpfX07dmFyIHA9e2dldFRyYW5zbGF0ZTpmdW5jdGlvbihlKXt2b2lkIDA9PT1lJiYoZT10aGlzLmlzSG9yaXpvbnRhbCgpP1wieFwiOlwieVwiKTt2YXIgdD10aGlzLnBhcmFtcyxpPXRoaXMucnRsVHJhbnNsYXRlLHM9dGhpcy50cmFuc2xhdGUsYT10aGlzLiR3cmFwcGVyRWw7aWYodC52aXJ0dWFsVHJhbnNsYXRlKXJldHVybiBpPy1zOnM7aWYodC5jc3NNb2RlKXJldHVybiBzO3ZhciByPW4uZ2V0VHJhbnNsYXRlKGFbMF0sZSk7cmV0dXJuIGkmJihyPS1yKSxyfHwwfSxzZXRUcmFuc2xhdGU6ZnVuY3Rpb24oZSx0KXt2YXIgaT10aGlzLnJ0bFRyYW5zbGF0ZSxzPXRoaXMucGFyYW1zLGE9dGhpcy4kd3JhcHBlckVsLHI9dGhpcy53cmFwcGVyRWwsbj10aGlzLnByb2dyZXNzLG89MCxsPTA7dGhpcy5pc0hvcml6b250YWwoKT9vPWk/LWU6ZTpsPWUscy5yb3VuZExlbmd0aHMmJihvPU1hdGguZmxvb3IobyksbD1NYXRoLmZsb29yKGwpKSxzLmNzc01vZGU/clt0aGlzLmlzSG9yaXpvbnRhbCgpP1wic2Nyb2xsTGVmdFwiOlwic2Nyb2xsVG9wXCJdPXRoaXMuaXNIb3Jpem9udGFsKCk/LW86LWw6cy52aXJ0dWFsVHJhbnNsYXRlfHxhLnRyYW5zZm9ybShcInRyYW5zbGF0ZTNkKFwiK28rXCJweCwgXCIrbCtcInB4LCAwcHgpXCIpLHRoaXMucHJldmlvdXNUcmFuc2xhdGU9dGhpcy50cmFuc2xhdGUsdGhpcy50cmFuc2xhdGU9dGhpcy5pc0hvcml6b250YWwoKT9vOmw7dmFyIGQ9dGhpcy5tYXhUcmFuc2xhdGUoKS10aGlzLm1pblRyYW5zbGF0ZSgpOygwPT09ZD8wOihlLXRoaXMubWluVHJhbnNsYXRlKCkpL2QpIT09biYmdGhpcy51cGRhdGVQcm9ncmVzcyhlKSx0aGlzLmVtaXQoXCJzZXRUcmFuc2xhdGVcIix0aGlzLnRyYW5zbGF0ZSx0KX0sbWluVHJhbnNsYXRlOmZ1bmN0aW9uKCl7cmV0dXJuLXRoaXMuc25hcEdyaWRbMF19LG1heFRyYW5zbGF0ZTpmdW5jdGlvbigpe3JldHVybi10aGlzLnNuYXBHcmlkW3RoaXMuc25hcEdyaWQubGVuZ3RoLTFdfSx0cmFuc2xhdGVUbzpmdW5jdGlvbihlLHQsaSxzLGEpe3ZhciByO3ZvaWQgMD09PWUmJihlPTApLHZvaWQgMD09PXQmJih0PXRoaXMucGFyYW1zLnNwZWVkKSx2b2lkIDA9PT1pJiYoaT0hMCksdm9pZCAwPT09cyYmKHM9ITApO3ZhciBuPXRoaXMsbz1uLnBhcmFtcyxsPW4ud3JhcHBlckVsO2lmKG4uYW5pbWF0aW5nJiZvLnByZXZlbnRJbnRlcmFjdGlvbk9uVHJhbnNpdGlvbilyZXR1cm4hMTt2YXIgZCxoPW4ubWluVHJhbnNsYXRlKCkscD1uLm1heFRyYW5zbGF0ZSgpO2lmKGQ9cyYmZT5oP2g6cyYmZTxwP3A6ZSxuLnVwZGF0ZVByb2dyZXNzKGQpLG8uY3NzTW9kZSl7dmFyIGM9bi5pc0hvcml6b250YWwoKTtyZXR1cm4gMD09PXQ/bFtjP1wic2Nyb2xsTGVmdFwiOlwic2Nyb2xsVG9wXCJdPS1kOmwuc2Nyb2xsVG8/bC5zY3JvbGxUbygoKHI9e30pW2M/XCJsZWZ0XCI6XCJ0b3BcIl09LWQsci5iZWhhdmlvcj1cInNtb290aFwiLHIpKTpsW2M/XCJzY3JvbGxMZWZ0XCI6XCJzY3JvbGxUb3BcIl09LWQsITB9cmV0dXJuIDA9PT10PyhuLnNldFRyYW5zaXRpb24oMCksbi5zZXRUcmFuc2xhdGUoZCksaSYmKG4uZW1pdChcImJlZm9yZVRyYW5zaXRpb25TdGFydFwiLHQsYSksbi5lbWl0KFwidHJhbnNpdGlvbkVuZFwiKSkpOihuLnNldFRyYW5zaXRpb24odCksbi5zZXRUcmFuc2xhdGUoZCksaSYmKG4uZW1pdChcImJlZm9yZVRyYW5zaXRpb25TdGFydFwiLHQsYSksbi5lbWl0KFwidHJhbnNpdGlvblN0YXJ0XCIpKSxuLmFuaW1hdGluZ3x8KG4uYW5pbWF0aW5nPSEwLG4ub25UcmFuc2xhdGVUb1dyYXBwZXJUcmFuc2l0aW9uRW5kfHwobi5vblRyYW5zbGF0ZVRvV3JhcHBlclRyYW5zaXRpb25FbmQ9ZnVuY3Rpb24oZSl7biYmIW4uZGVzdHJveWVkJiZlLnRhcmdldD09PXRoaXMmJihuLiR3cmFwcGVyRWxbMF0ucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInRyYW5zaXRpb25lbmRcIixuLm9uVHJhbnNsYXRlVG9XcmFwcGVyVHJhbnNpdGlvbkVuZCksbi4kd3JhcHBlckVsWzBdLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ3ZWJraXRUcmFuc2l0aW9uRW5kXCIsbi5vblRyYW5zbGF0ZVRvV3JhcHBlclRyYW5zaXRpb25FbmQpLG4ub25UcmFuc2xhdGVUb1dyYXBwZXJUcmFuc2l0aW9uRW5kPW51bGwsZGVsZXRlIG4ub25UcmFuc2xhdGVUb1dyYXBwZXJUcmFuc2l0aW9uRW5kLGkmJm4uZW1pdChcInRyYW5zaXRpb25FbmRcIikpfSksbi4kd3JhcHBlckVsWzBdLmFkZEV2ZW50TGlzdGVuZXIoXCJ0cmFuc2l0aW9uZW5kXCIsbi5vblRyYW5zbGF0ZVRvV3JhcHBlclRyYW5zaXRpb25FbmQpLG4uJHdyYXBwZXJFbFswXS5hZGRFdmVudExpc3RlbmVyKFwid2Via2l0VHJhbnNpdGlvbkVuZFwiLG4ub25UcmFuc2xhdGVUb1dyYXBwZXJUcmFuc2l0aW9uRW5kKSkpLCEwfX07dmFyIGM9e3NldFRyYW5zaXRpb246ZnVuY3Rpb24oZSx0KXt0aGlzLnBhcmFtcy5jc3NNb2RlfHx0aGlzLiR3cmFwcGVyRWwudHJhbnNpdGlvbihlKSx0aGlzLmVtaXQoXCJzZXRUcmFuc2l0aW9uXCIsZSx0KX0sdHJhbnNpdGlvblN0YXJ0OmZ1bmN0aW9uKGUsdCl7dm9pZCAwPT09ZSYmKGU9ITApO3ZhciBpPXRoaXMuYWN0aXZlSW5kZXgscz10aGlzLnBhcmFtcyxhPXRoaXMucHJldmlvdXNJbmRleDtpZighcy5jc3NNb2RlKXtzLmF1dG9IZWlnaHQmJnRoaXMudXBkYXRlQXV0b0hlaWdodCgpO3ZhciByPXQ7aWYocnx8KHI9aT5hP1wibmV4dFwiOmk8YT9cInByZXZcIjpcInJlc2V0XCIpLHRoaXMuZW1pdChcInRyYW5zaXRpb25TdGFydFwiKSxlJiZpIT09YSl7aWYoXCJyZXNldFwiPT09cilyZXR1cm4gdm9pZCB0aGlzLmVtaXQoXCJzbGlkZVJlc2V0VHJhbnNpdGlvblN0YXJ0XCIpO3RoaXMuZW1pdChcInNsaWRlQ2hhbmdlVHJhbnNpdGlvblN0YXJ0XCIpLFwibmV4dFwiPT09cj90aGlzLmVtaXQoXCJzbGlkZU5leHRUcmFuc2l0aW9uU3RhcnRcIik6dGhpcy5lbWl0KFwic2xpZGVQcmV2VHJhbnNpdGlvblN0YXJ0XCIpfX19LHRyYW5zaXRpb25FbmQ6ZnVuY3Rpb24oZSx0KXt2b2lkIDA9PT1lJiYoZT0hMCk7dmFyIGk9dGhpcy5hY3RpdmVJbmRleCxzPXRoaXMucHJldmlvdXNJbmRleCxhPXRoaXMucGFyYW1zO2lmKHRoaXMuYW5pbWF0aW5nPSExLCFhLmNzc01vZGUpe3RoaXMuc2V0VHJhbnNpdGlvbigwKTt2YXIgcj10O2lmKHJ8fChyPWk+cz9cIm5leHRcIjppPHM/XCJwcmV2XCI6XCJyZXNldFwiKSx0aGlzLmVtaXQoXCJ0cmFuc2l0aW9uRW5kXCIpLGUmJmkhPT1zKXtpZihcInJlc2V0XCI9PT1yKXJldHVybiB2b2lkIHRoaXMuZW1pdChcInNsaWRlUmVzZXRUcmFuc2l0aW9uRW5kXCIpO3RoaXMuZW1pdChcInNsaWRlQ2hhbmdlVHJhbnNpdGlvbkVuZFwiKSxcIm5leHRcIj09PXI/dGhpcy5lbWl0KFwic2xpZGVOZXh0VHJhbnNpdGlvbkVuZFwiKTp0aGlzLmVtaXQoXCJzbGlkZVByZXZUcmFuc2l0aW9uRW5kXCIpfX19fTt2YXIgdT17c2xpZGVUbzpmdW5jdGlvbihlLHQsaSxzKXt2YXIgYTt2b2lkIDA9PT1lJiYoZT0wKSx2b2lkIDA9PT10JiYodD10aGlzLnBhcmFtcy5zcGVlZCksdm9pZCAwPT09aSYmKGk9ITApO3ZhciByPXRoaXMsbj1lO248MCYmKG49MCk7dmFyIG89ci5wYXJhbXMsbD1yLnNuYXBHcmlkLGQ9ci5zbGlkZXNHcmlkLGg9ci5wcmV2aW91c0luZGV4LHA9ci5hY3RpdmVJbmRleCxjPXIucnRsVHJhbnNsYXRlLHU9ci53cmFwcGVyRWw7aWYoci5hbmltYXRpbmcmJm8ucHJldmVudEludGVyYWN0aW9uT25UcmFuc2l0aW9uKXJldHVybiExO3ZhciB2PU1hdGgubWluKHIucGFyYW1zLnNsaWRlc1Blckdyb3VwU2tpcCxuKSxmPXYrTWF0aC5mbG9vcigobi12KS9yLnBhcmFtcy5zbGlkZXNQZXJHcm91cCk7Zj49bC5sZW5ndGgmJihmPWwubGVuZ3RoLTEpLChwfHxvLmluaXRpYWxTbGlkZXx8MCk9PT0oaHx8MCkmJmkmJnIuZW1pdChcImJlZm9yZVNsaWRlQ2hhbmdlU3RhcnRcIik7dmFyIG0sZz0tbFtmXTtpZihyLnVwZGF0ZVByb2dyZXNzKGcpLG8ubm9ybWFsaXplU2xpZGVJbmRleClmb3IodmFyIGI9MDtiPGQubGVuZ3RoO2IrPTEpLU1hdGguZmxvb3IoMTAwKmcpPj1NYXRoLmZsb29yKDEwMCpkW2JdKSYmKG49Yik7aWYoci5pbml0aWFsaXplZCYmbiE9PXApe2lmKCFyLmFsbG93U2xpZGVOZXh0JiZnPHIudHJhbnNsYXRlJiZnPHIubWluVHJhbnNsYXRlKCkpcmV0dXJuITE7aWYoIXIuYWxsb3dTbGlkZVByZXYmJmc+ci50cmFuc2xhdGUmJmc+ci5tYXhUcmFuc2xhdGUoKSYmKHB8fDApIT09bilyZXR1cm4hMX1pZihtPW4+cD9cIm5leHRcIjpuPHA/XCJwcmV2XCI6XCJyZXNldFwiLGMmJi1nPT09ci50cmFuc2xhdGV8fCFjJiZnPT09ci50cmFuc2xhdGUpcmV0dXJuIHIudXBkYXRlQWN0aXZlSW5kZXgobiksby5hdXRvSGVpZ2h0JiZyLnVwZGF0ZUF1dG9IZWlnaHQoKSxyLnVwZGF0ZVNsaWRlc0NsYXNzZXMoKSxcInNsaWRlXCIhPT1vLmVmZmVjdCYmci5zZXRUcmFuc2xhdGUoZyksXCJyZXNldFwiIT09bSYmKHIudHJhbnNpdGlvblN0YXJ0KGksbSksci50cmFuc2l0aW9uRW5kKGksbSkpLCExO2lmKG8uY3NzTW9kZSl7dmFyIHc9ci5pc0hvcml6b250YWwoKSx5PS1nO3JldHVybiBjJiYoeT11LnNjcm9sbFdpZHRoLXUub2Zmc2V0V2lkdGgteSksMD09PXQ/dVt3P1wic2Nyb2xsTGVmdFwiOlwic2Nyb2xsVG9wXCJdPXk6dS5zY3JvbGxUbz91LnNjcm9sbFRvKCgoYT17fSlbdz9cImxlZnRcIjpcInRvcFwiXT15LGEuYmVoYXZpb3I9XCJzbW9vdGhcIixhKSk6dVt3P1wic2Nyb2xsTGVmdFwiOlwic2Nyb2xsVG9wXCJdPXksITB9cmV0dXJuIDA9PT10PyhyLnNldFRyYW5zaXRpb24oMCksci5zZXRUcmFuc2xhdGUoZyksci51cGRhdGVBY3RpdmVJbmRleChuKSxyLnVwZGF0ZVNsaWRlc0NsYXNzZXMoKSxyLmVtaXQoXCJiZWZvcmVUcmFuc2l0aW9uU3RhcnRcIix0LHMpLHIudHJhbnNpdGlvblN0YXJ0KGksbSksci50cmFuc2l0aW9uRW5kKGksbSkpOihyLnNldFRyYW5zaXRpb24odCksci5zZXRUcmFuc2xhdGUoZyksci51cGRhdGVBY3RpdmVJbmRleChuKSxyLnVwZGF0ZVNsaWRlc0NsYXNzZXMoKSxyLmVtaXQoXCJiZWZvcmVUcmFuc2l0aW9uU3RhcnRcIix0LHMpLHIudHJhbnNpdGlvblN0YXJ0KGksbSksci5hbmltYXRpbmd8fChyLmFuaW1hdGluZz0hMCxyLm9uU2xpZGVUb1dyYXBwZXJUcmFuc2l0aW9uRW5kfHwoci5vblNsaWRlVG9XcmFwcGVyVHJhbnNpdGlvbkVuZD1mdW5jdGlvbihlKXtyJiYhci5kZXN0cm95ZWQmJmUudGFyZ2V0PT09dGhpcyYmKHIuJHdyYXBwZXJFbFswXS5yZW1vdmVFdmVudExpc3RlbmVyKFwidHJhbnNpdGlvbmVuZFwiLHIub25TbGlkZVRvV3JhcHBlclRyYW5zaXRpb25FbmQpLHIuJHdyYXBwZXJFbFswXS5yZW1vdmVFdmVudExpc3RlbmVyKFwid2Via2l0VHJhbnNpdGlvbkVuZFwiLHIub25TbGlkZVRvV3JhcHBlclRyYW5zaXRpb25FbmQpLHIub25TbGlkZVRvV3JhcHBlclRyYW5zaXRpb25FbmQ9bnVsbCxkZWxldGUgci5vblNsaWRlVG9XcmFwcGVyVHJhbnNpdGlvbkVuZCxyLnRyYW5zaXRpb25FbmQoaSxtKSl9KSxyLiR3cmFwcGVyRWxbMF0uYWRkRXZlbnRMaXN0ZW5lcihcInRyYW5zaXRpb25lbmRcIixyLm9uU2xpZGVUb1dyYXBwZXJUcmFuc2l0aW9uRW5kKSxyLiR3cmFwcGVyRWxbMF0uYWRkRXZlbnRMaXN0ZW5lcihcIndlYmtpdFRyYW5zaXRpb25FbmRcIixyLm9uU2xpZGVUb1dyYXBwZXJUcmFuc2l0aW9uRW5kKSkpLCEwfSxzbGlkZVRvTG9vcDpmdW5jdGlvbihlLHQsaSxzKXt2b2lkIDA9PT1lJiYoZT0wKSx2b2lkIDA9PT10JiYodD10aGlzLnBhcmFtcy5zcGVlZCksdm9pZCAwPT09aSYmKGk9ITApO3ZhciBhPWU7cmV0dXJuIHRoaXMucGFyYW1zLmxvb3AmJihhKz10aGlzLmxvb3BlZFNsaWRlcyksdGhpcy5zbGlkZVRvKGEsdCxpLHMpfSxzbGlkZU5leHQ6ZnVuY3Rpb24oZSx0LGkpe3ZvaWQgMD09PWUmJihlPXRoaXMucGFyYW1zLnNwZWVkKSx2b2lkIDA9PT10JiYodD0hMCk7dmFyIHM9dGhpcy5wYXJhbXMsYT10aGlzLmFuaW1hdGluZyxyPXRoaXMuYWN0aXZlSW5kZXg8cy5zbGlkZXNQZXJHcm91cFNraXA/MTpzLnNsaWRlc1Blckdyb3VwO2lmKHMubG9vcCl7aWYoYSlyZXR1cm4hMTt0aGlzLmxvb3BGaXgoKSx0aGlzLl9jbGllbnRMZWZ0PXRoaXMuJHdyYXBwZXJFbFswXS5jbGllbnRMZWZ0fXJldHVybiB0aGlzLnNsaWRlVG8odGhpcy5hY3RpdmVJbmRleCtyLGUsdCxpKX0sc2xpZGVQcmV2OmZ1bmN0aW9uKGUsdCxpKXt2b2lkIDA9PT1lJiYoZT10aGlzLnBhcmFtcy5zcGVlZCksdm9pZCAwPT09dCYmKHQ9ITApO3ZhciBzPXRoaXMucGFyYW1zLGE9dGhpcy5hbmltYXRpbmcscj10aGlzLnNuYXBHcmlkLG49dGhpcy5zbGlkZXNHcmlkLG89dGhpcy5ydGxUcmFuc2xhdGU7aWYocy5sb29wKXtpZihhKXJldHVybiExO3RoaXMubG9vcEZpeCgpLHRoaXMuX2NsaWVudExlZnQ9dGhpcy4kd3JhcHBlckVsWzBdLmNsaWVudExlZnR9ZnVuY3Rpb24gbChlKXtyZXR1cm4gZTwwPy1NYXRoLmZsb29yKE1hdGguYWJzKGUpKTpNYXRoLmZsb29yKGUpfXZhciBkLGg9bChvP3RoaXMudHJhbnNsYXRlOi10aGlzLnRyYW5zbGF0ZSkscD1yLm1hcCgoZnVuY3Rpb24oZSl7cmV0dXJuIGwoZSl9KSksYz0obi5tYXAoKGZ1bmN0aW9uKGUpe3JldHVybiBsKGUpfSkpLHJbcC5pbmRleE9mKGgpXSxyW3AuaW5kZXhPZihoKS0xXSk7cmV0dXJuIHZvaWQgMD09PWMmJnMuY3NzTW9kZSYmci5mb3JFYWNoKChmdW5jdGlvbihlKXshYyYmaD49ZSYmKGM9ZSl9KSksdm9pZCAwIT09YyYmKGQ9bi5pbmRleE9mKGMpKTwwJiYoZD10aGlzLmFjdGl2ZUluZGV4LTEpLHRoaXMuc2xpZGVUbyhkLGUsdCxpKX0sc2xpZGVSZXNldDpmdW5jdGlvbihlLHQsaSl7cmV0dXJuIHZvaWQgMD09PWUmJihlPXRoaXMucGFyYW1zLnNwZWVkKSx2b2lkIDA9PT10JiYodD0hMCksdGhpcy5zbGlkZVRvKHRoaXMuYWN0aXZlSW5kZXgsZSx0LGkpfSxzbGlkZVRvQ2xvc2VzdDpmdW5jdGlvbihlLHQsaSxzKXt2b2lkIDA9PT1lJiYoZT10aGlzLnBhcmFtcy5zcGVlZCksdm9pZCAwPT09dCYmKHQ9ITApLHZvaWQgMD09PXMmJihzPS41KTt2YXIgYT10aGlzLmFjdGl2ZUluZGV4LHI9TWF0aC5taW4odGhpcy5wYXJhbXMuc2xpZGVzUGVyR3JvdXBTa2lwLGEpLG49citNYXRoLmZsb29yKChhLXIpL3RoaXMucGFyYW1zLnNsaWRlc1Blckdyb3VwKSxvPXRoaXMucnRsVHJhbnNsYXRlP3RoaXMudHJhbnNsYXRlOi10aGlzLnRyYW5zbGF0ZTtpZihvPj10aGlzLnNuYXBHcmlkW25dKXt2YXIgbD10aGlzLnNuYXBHcmlkW25dO28tbD4odGhpcy5zbmFwR3JpZFtuKzFdLWwpKnMmJihhKz10aGlzLnBhcmFtcy5zbGlkZXNQZXJHcm91cCl9ZWxzZXt2YXIgZD10aGlzLnNuYXBHcmlkW24tMV07by1kPD0odGhpcy5zbmFwR3JpZFtuXS1kKSpzJiYoYS09dGhpcy5wYXJhbXMuc2xpZGVzUGVyR3JvdXApfXJldHVybiBhPU1hdGgubWF4KGEsMCksYT1NYXRoLm1pbihhLHRoaXMuc2xpZGVzR3JpZC5sZW5ndGgtMSksdGhpcy5zbGlkZVRvKGEsZSx0LGkpfSxzbGlkZVRvQ2xpY2tlZFNsaWRlOmZ1bmN0aW9uKCl7dmFyIGUsdD10aGlzLGk9dC5wYXJhbXMsYT10LiR3cmFwcGVyRWwscj1cImF1dG9cIj09PWkuc2xpZGVzUGVyVmlldz90LnNsaWRlc1BlclZpZXdEeW5hbWljKCk6aS5zbGlkZXNQZXJWaWV3LG89dC5jbGlja2VkSW5kZXg7aWYoaS5sb29wKXtpZih0LmFuaW1hdGluZylyZXR1cm47ZT1wYXJzZUludChzKHQuY2xpY2tlZFNsaWRlKS5hdHRyKFwiZGF0YS1zd2lwZXItc2xpZGUtaW5kZXhcIiksMTApLGkuY2VudGVyZWRTbGlkZXM/bzx0Lmxvb3BlZFNsaWRlcy1yLzJ8fG8+dC5zbGlkZXMubGVuZ3RoLXQubG9vcGVkU2xpZGVzK3IvMj8odC5sb29wRml4KCksbz1hLmNoaWxkcmVuKFwiLlwiK2kuc2xpZGVDbGFzcysnW2RhdGEtc3dpcGVyLXNsaWRlLWluZGV4PVwiJytlKydcIl06bm90KC4nK2kuc2xpZGVEdXBsaWNhdGVDbGFzcytcIilcIikuZXEoMCkuaW5kZXgoKSxuLm5leHRUaWNrKChmdW5jdGlvbigpe3Quc2xpZGVUbyhvKX0pKSk6dC5zbGlkZVRvKG8pOm8+dC5zbGlkZXMubGVuZ3RoLXI/KHQubG9vcEZpeCgpLG89YS5jaGlsZHJlbihcIi5cIitpLnNsaWRlQ2xhc3MrJ1tkYXRhLXN3aXBlci1zbGlkZS1pbmRleD1cIicrZSsnXCJdOm5vdCguJytpLnNsaWRlRHVwbGljYXRlQ2xhc3MrXCIpXCIpLmVxKDApLmluZGV4KCksbi5uZXh0VGljaygoZnVuY3Rpb24oKXt0LnNsaWRlVG8obyl9KSkpOnQuc2xpZGVUbyhvKX1lbHNlIHQuc2xpZGVUbyhvKX19O3ZhciB2PXtsb29wQ3JlYXRlOmZ1bmN0aW9uKCl7dmFyIHQ9dGhpcyxpPXQucGFyYW1zLGE9dC4kd3JhcHBlckVsO2EuY2hpbGRyZW4oXCIuXCIraS5zbGlkZUNsYXNzK1wiLlwiK2kuc2xpZGVEdXBsaWNhdGVDbGFzcykucmVtb3ZlKCk7dmFyIHI9YS5jaGlsZHJlbihcIi5cIitpLnNsaWRlQ2xhc3MpO2lmKGkubG9vcEZpbGxHcm91cFdpdGhCbGFuayl7dmFyIG49aS5zbGlkZXNQZXJHcm91cC1yLmxlbmd0aCVpLnNsaWRlc1Blckdyb3VwO2lmKG4hPT1pLnNsaWRlc1Blckdyb3VwKXtmb3IodmFyIG89MDtvPG47bys9MSl7dmFyIGw9cyhlLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIikpLmFkZENsYXNzKGkuc2xpZGVDbGFzcytcIiBcIitpLnNsaWRlQmxhbmtDbGFzcyk7YS5hcHBlbmQobCl9cj1hLmNoaWxkcmVuKFwiLlwiK2kuc2xpZGVDbGFzcyl9fVwiYXV0b1wiIT09aS5zbGlkZXNQZXJWaWV3fHxpLmxvb3BlZFNsaWRlc3x8KGkubG9vcGVkU2xpZGVzPXIubGVuZ3RoKSx0Lmxvb3BlZFNsaWRlcz1NYXRoLmNlaWwocGFyc2VGbG9hdChpLmxvb3BlZFNsaWRlc3x8aS5zbGlkZXNQZXJWaWV3LDEwKSksdC5sb29wZWRTbGlkZXMrPWkubG9vcEFkZGl0aW9uYWxTbGlkZXMsdC5sb29wZWRTbGlkZXM+ci5sZW5ndGgmJih0Lmxvb3BlZFNsaWRlcz1yLmxlbmd0aCk7dmFyIGQ9W10saD1bXTtyLmVhY2goKGZ1bmN0aW9uKGUsaSl7dmFyIGE9cyhpKTtlPHQubG9vcGVkU2xpZGVzJiZoLnB1c2goaSksZTxyLmxlbmd0aCYmZT49ci5sZW5ndGgtdC5sb29wZWRTbGlkZXMmJmQucHVzaChpKSxhLmF0dHIoXCJkYXRhLXN3aXBlci1zbGlkZS1pbmRleFwiLGUpfSkpO2Zvcih2YXIgcD0wO3A8aC5sZW5ndGg7cCs9MSlhLmFwcGVuZChzKGhbcF0uY2xvbmVOb2RlKCEwKSkuYWRkQ2xhc3MoaS5zbGlkZUR1cGxpY2F0ZUNsYXNzKSk7Zm9yKHZhciBjPWQubGVuZ3RoLTE7Yz49MDtjLT0xKWEucHJlcGVuZChzKGRbY10uY2xvbmVOb2RlKCEwKSkuYWRkQ2xhc3MoaS5zbGlkZUR1cGxpY2F0ZUNsYXNzKSl9LGxvb3BGaXg6ZnVuY3Rpb24oKXt0aGlzLmVtaXQoXCJiZWZvcmVMb29wRml4XCIpO3ZhciBlLHQ9dGhpcy5hY3RpdmVJbmRleCxpPXRoaXMuc2xpZGVzLHM9dGhpcy5sb29wZWRTbGlkZXMsYT10aGlzLmFsbG93U2xpZGVQcmV2LHI9dGhpcy5hbGxvd1NsaWRlTmV4dCxuPXRoaXMuc25hcEdyaWQsbz10aGlzLnJ0bFRyYW5zbGF0ZTt0aGlzLmFsbG93U2xpZGVQcmV2PSEwLHRoaXMuYWxsb3dTbGlkZU5leHQ9ITA7dmFyIGw9LW5bdF0tdGhpcy5nZXRUcmFuc2xhdGUoKTtpZih0PHMpZT1pLmxlbmd0aC0zKnMrdCxlKz1zLHRoaXMuc2xpZGVUbyhlLDAsITEsITApJiYwIT09bCYmdGhpcy5zZXRUcmFuc2xhdGUoKG8/LXRoaXMudHJhbnNsYXRlOnRoaXMudHJhbnNsYXRlKS1sKTtlbHNlIGlmKHQ+PWkubGVuZ3RoLXMpe2U9LWkubGVuZ3RoK3QrcyxlKz1zLHRoaXMuc2xpZGVUbyhlLDAsITEsITApJiYwIT09bCYmdGhpcy5zZXRUcmFuc2xhdGUoKG8/LXRoaXMudHJhbnNsYXRlOnRoaXMudHJhbnNsYXRlKS1sKX10aGlzLmFsbG93U2xpZGVQcmV2PWEsdGhpcy5hbGxvd1NsaWRlTmV4dD1yLHRoaXMuZW1pdChcImxvb3BGaXhcIil9LGxvb3BEZXN0cm95OmZ1bmN0aW9uKCl7dmFyIGU9dGhpcy4kd3JhcHBlckVsLHQ9dGhpcy5wYXJhbXMsaT10aGlzLnNsaWRlcztlLmNoaWxkcmVuKFwiLlwiK3Quc2xpZGVDbGFzcytcIi5cIit0LnNsaWRlRHVwbGljYXRlQ2xhc3MrXCIsLlwiK3Quc2xpZGVDbGFzcytcIi5cIit0LnNsaWRlQmxhbmtDbGFzcykucmVtb3ZlKCksaS5yZW1vdmVBdHRyKFwiZGF0YS1zd2lwZXItc2xpZGUtaW5kZXhcIil9fTt2YXIgZj17c2V0R3JhYkN1cnNvcjpmdW5jdGlvbihlKXtpZighKG8udG91Y2h8fCF0aGlzLnBhcmFtcy5zaW11bGF0ZVRvdWNofHx0aGlzLnBhcmFtcy53YXRjaE92ZXJmbG93JiZ0aGlzLmlzTG9ja2VkfHx0aGlzLnBhcmFtcy5jc3NNb2RlKSl7dmFyIHQ9dGhpcy5lbDt0LnN0eWxlLmN1cnNvcj1cIm1vdmVcIix0LnN0eWxlLmN1cnNvcj1lP1wiLXdlYmtpdC1ncmFiYmluZ1wiOlwiLXdlYmtpdC1ncmFiXCIsdC5zdHlsZS5jdXJzb3I9ZT9cIi1tb3otZ3JhYmJpblwiOlwiLW1vei1ncmFiXCIsdC5zdHlsZS5jdXJzb3I9ZT9cImdyYWJiaW5nXCI6XCJncmFiXCJ9fSx1bnNldEdyYWJDdXJzb3I6ZnVuY3Rpb24oKXtvLnRvdWNofHx0aGlzLnBhcmFtcy53YXRjaE92ZXJmbG93JiZ0aGlzLmlzTG9ja2VkfHx0aGlzLnBhcmFtcy5jc3NNb2RlfHwodGhpcy5lbC5zdHlsZS5jdXJzb3I9XCJcIil9fTt2YXIgbSxnLGIsdyx5LHgsVCxFLFMsQyxNLFAseixrLCQsTD17YXBwZW5kU2xpZGU6ZnVuY3Rpb24oZSl7dmFyIHQ9dGhpcy4kd3JhcHBlckVsLGk9dGhpcy5wYXJhbXM7aWYoaS5sb29wJiZ0aGlzLmxvb3BEZXN0cm95KCksXCJvYmplY3RcIj09dHlwZW9mIGUmJlwibGVuZ3RoXCJpbiBlKWZvcih2YXIgcz0wO3M8ZS5sZW5ndGg7cys9MSllW3NdJiZ0LmFwcGVuZChlW3NdKTtlbHNlIHQuYXBwZW5kKGUpO2kubG9vcCYmdGhpcy5sb29wQ3JlYXRlKCksaS5vYnNlcnZlciYmby5vYnNlcnZlcnx8dGhpcy51cGRhdGUoKX0scHJlcGVuZFNsaWRlOmZ1bmN0aW9uKGUpe3ZhciB0PXRoaXMucGFyYW1zLGk9dGhpcy4kd3JhcHBlckVsLHM9dGhpcy5hY3RpdmVJbmRleDt0Lmxvb3AmJnRoaXMubG9vcERlc3Ryb3koKTt2YXIgYT1zKzE7aWYoXCJvYmplY3RcIj09dHlwZW9mIGUmJlwibGVuZ3RoXCJpbiBlKXtmb3IodmFyIHI9MDtyPGUubGVuZ3RoO3IrPTEpZVtyXSYmaS5wcmVwZW5kKGVbcl0pO2E9cytlLmxlbmd0aH1lbHNlIGkucHJlcGVuZChlKTt0Lmxvb3AmJnRoaXMubG9vcENyZWF0ZSgpLHQub2JzZXJ2ZXImJm8ub2JzZXJ2ZXJ8fHRoaXMudXBkYXRlKCksdGhpcy5zbGlkZVRvKGEsMCwhMSl9LGFkZFNsaWRlOmZ1bmN0aW9uKGUsdCl7dmFyIGk9dGhpcy4kd3JhcHBlckVsLHM9dGhpcy5wYXJhbXMsYT10aGlzLmFjdGl2ZUluZGV4O3MubG9vcCYmKGEtPXRoaXMubG9vcGVkU2xpZGVzLHRoaXMubG9vcERlc3Ryb3koKSx0aGlzLnNsaWRlcz1pLmNoaWxkcmVuKFwiLlwiK3Muc2xpZGVDbGFzcykpO3ZhciByPXRoaXMuc2xpZGVzLmxlbmd0aDtpZihlPD0wKXRoaXMucHJlcGVuZFNsaWRlKHQpO2Vsc2UgaWYoZT49cil0aGlzLmFwcGVuZFNsaWRlKHQpO2Vsc2V7Zm9yKHZhciBuPWE+ZT9hKzE6YSxsPVtdLGQ9ci0xO2Q+PWU7ZC09MSl7dmFyIGg9dGhpcy5zbGlkZXMuZXEoZCk7aC5yZW1vdmUoKSxsLnVuc2hpZnQoaCl9aWYoXCJvYmplY3RcIj09dHlwZW9mIHQmJlwibGVuZ3RoXCJpbiB0KXtmb3IodmFyIHA9MDtwPHQubGVuZ3RoO3ArPTEpdFtwXSYmaS5hcHBlbmQodFtwXSk7bj1hPmU/YSt0Lmxlbmd0aDphfWVsc2UgaS5hcHBlbmQodCk7Zm9yKHZhciBjPTA7YzxsLmxlbmd0aDtjKz0xKWkuYXBwZW5kKGxbY10pO3MubG9vcCYmdGhpcy5sb29wQ3JlYXRlKCkscy5vYnNlcnZlciYmby5vYnNlcnZlcnx8dGhpcy51cGRhdGUoKSxzLmxvb3A/dGhpcy5zbGlkZVRvKG4rdGhpcy5sb29wZWRTbGlkZXMsMCwhMSk6dGhpcy5zbGlkZVRvKG4sMCwhMSl9fSxyZW1vdmVTbGlkZTpmdW5jdGlvbihlKXt2YXIgdD10aGlzLnBhcmFtcyxpPXRoaXMuJHdyYXBwZXJFbCxzPXRoaXMuYWN0aXZlSW5kZXg7dC5sb29wJiYocy09dGhpcy5sb29wZWRTbGlkZXMsdGhpcy5sb29wRGVzdHJveSgpLHRoaXMuc2xpZGVzPWkuY2hpbGRyZW4oXCIuXCIrdC5zbGlkZUNsYXNzKSk7dmFyIGEscj1zO2lmKFwib2JqZWN0XCI9PXR5cGVvZiBlJiZcImxlbmd0aFwiaW4gZSl7Zm9yKHZhciBuPTA7bjxlLmxlbmd0aDtuKz0xKWE9ZVtuXSx0aGlzLnNsaWRlc1thXSYmdGhpcy5zbGlkZXMuZXEoYSkucmVtb3ZlKCksYTxyJiYoci09MSk7cj1NYXRoLm1heChyLDApfWVsc2UgYT1lLHRoaXMuc2xpZGVzW2FdJiZ0aGlzLnNsaWRlcy5lcShhKS5yZW1vdmUoKSxhPHImJihyLT0xKSxyPU1hdGgubWF4KHIsMCk7dC5sb29wJiZ0aGlzLmxvb3BDcmVhdGUoKSx0Lm9ic2VydmVyJiZvLm9ic2VydmVyfHx0aGlzLnVwZGF0ZSgpLHQubG9vcD90aGlzLnNsaWRlVG8ocit0aGlzLmxvb3BlZFNsaWRlcywwLCExKTp0aGlzLnNsaWRlVG8ociwwLCExKX0scmVtb3ZlQWxsU2xpZGVzOmZ1bmN0aW9uKCl7Zm9yKHZhciBlPVtdLHQ9MDt0PHRoaXMuc2xpZGVzLmxlbmd0aDt0Kz0xKWUucHVzaCh0KTt0aGlzLnJlbW92ZVNsaWRlKGUpfX0sST0obT10Lm5hdmlnYXRvci5wbGF0Zm9ybSxnPXQubmF2aWdhdG9yLnVzZXJBZ2VudCxiPXtpb3M6ITEsYW5kcm9pZDohMSxhbmRyb2lkQ2hyb21lOiExLGRlc2t0b3A6ITEsaXBob25lOiExLGlwb2Q6ITEsaXBhZDohMSxlZGdlOiExLGllOiExLGZpcmVmb3g6ITEsbWFjb3M6ITEsd2luZG93czohMSxjb3Jkb3ZhOiEoIXQuY29yZG92YSYmIXQucGhvbmVnYXApLHBob25lZ2FwOiEoIXQuY29yZG92YSYmIXQucGhvbmVnYXApLGVsZWN0cm9uOiExfSx3PXQuc2NyZWVuLndpZHRoLHk9dC5zY3JlZW4uaGVpZ2h0LHg9Zy5tYXRjaCgvKEFuZHJvaWQpOz9bXFxzXFwvXSsoW1xcZC5dKyk/LyksVD1nLm1hdGNoKC8oaVBhZCkuKk9TXFxzKFtcXGRfXSspLyksRT1nLm1hdGNoKC8oaVBvZCkoLipPU1xccyhbXFxkX10rKSk/LyksUz0hVCYmZy5tYXRjaCgvKGlQaG9uZVxcc09TfGlPUylcXHMoW1xcZF9dKykvKSxDPWcuaW5kZXhPZihcIk1TSUUgXCIpPj0wfHxnLmluZGV4T2YoXCJUcmlkZW50L1wiKT49MCxNPWcuaW5kZXhPZihcIkVkZ2UvXCIpPj0wLFA9Zy5pbmRleE9mKFwiR2Vja28vXCIpPj0wJiZnLmluZGV4T2YoXCJGaXJlZm94L1wiKT49MCx6PVwiV2luMzJcIj09PW0saz1nLnRvTG93ZXJDYXNlKCkuaW5kZXhPZihcImVsZWN0cm9uXCIpPj0wLCQ9XCJNYWNJbnRlbFwiPT09bSwhVCYmJCYmby50b3VjaCYmKDEwMjQ9PT13JiYxMzY2PT09eXx8ODM0PT09dyYmMTE5ND09PXl8fDgzND09PXcmJjExMTI9PT15fHw3Njg9PT13JiYxMDI0PT09eSkmJihUPWcubWF0Y2goLyhWZXJzaW9uKVxcLyhbXFxkLl0rKS8pLCQ9ITEpLGIuaWU9QyxiLmVkZ2U9TSxiLmZpcmVmb3g9UCx4JiYheiYmKGIub3M9XCJhbmRyb2lkXCIsYi5vc1ZlcnNpb249eFsyXSxiLmFuZHJvaWQ9ITAsYi5hbmRyb2lkQ2hyb21lPWcudG9Mb3dlckNhc2UoKS5pbmRleE9mKFwiY2hyb21lXCIpPj0wKSwoVHx8U3x8RSkmJihiLm9zPVwiaW9zXCIsYi5pb3M9ITApLFMmJiFFJiYoYi5vc1ZlcnNpb249U1syXS5yZXBsYWNlKC9fL2csXCIuXCIpLGIuaXBob25lPSEwKSxUJiYoYi5vc1ZlcnNpb249VFsyXS5yZXBsYWNlKC9fL2csXCIuXCIpLGIuaXBhZD0hMCksRSYmKGIub3NWZXJzaW9uPUVbM10/RVszXS5yZXBsYWNlKC9fL2csXCIuXCIpOm51bGwsYi5pcG9kPSEwKSxiLmlvcyYmYi5vc1ZlcnNpb24mJmcuaW5kZXhPZihcIlZlcnNpb24vXCIpPj0wJiZcIjEwXCI9PT1iLm9zVmVyc2lvbi5zcGxpdChcIi5cIilbMF0mJihiLm9zVmVyc2lvbj1nLnRvTG93ZXJDYXNlKCkuc3BsaXQoXCJ2ZXJzaW9uL1wiKVsxXS5zcGxpdChcIiBcIilbMF0pLGIud2ViVmlldz0hKCEoU3x8VHx8RSl8fCFnLm1hdGNoKC8uKkFwcGxlV2ViS2l0KD8hLipTYWZhcmkpL2kpJiYhdC5uYXZpZ2F0b3Iuc3RhbmRhbG9uZSl8fHQubWF0Y2hNZWRpYSYmdC5tYXRjaE1lZGlhKFwiKGRpc3BsYXktbW9kZTogc3RhbmRhbG9uZSlcIikubWF0Y2hlcyxiLndlYnZpZXc9Yi53ZWJWaWV3LGIuc3RhbmRhbG9uZT1iLndlYlZpZXcsYi5kZXNrdG9wPSEoYi5pb3N8fGIuYW5kcm9pZCl8fGssYi5kZXNrdG9wJiYoYi5lbGVjdHJvbj1rLGIubWFjb3M9JCxiLndpbmRvd3M9eixiLm1hY29zJiYoYi5vcz1cIm1hY29zXCIpLGIud2luZG93cyYmKGIub3M9XCJ3aW5kb3dzXCIpKSxiLnBpeGVsUmF0aW89dC5kZXZpY2VQaXhlbFJhdGlvfHwxLGIpO2Z1bmN0aW9uIEQoaSl7dmFyIGE9dGhpcy50b3VjaEV2ZW50c0RhdGEscj10aGlzLnBhcmFtcyxvPXRoaXMudG91Y2hlcztpZighdGhpcy5hbmltYXRpbmd8fCFyLnByZXZlbnRJbnRlcmFjdGlvbk9uVHJhbnNpdGlvbil7dmFyIGw9aTtsLm9yaWdpbmFsRXZlbnQmJihsPWwub3JpZ2luYWxFdmVudCk7dmFyIGQ9cyhsLnRhcmdldCk7aWYoKFwid3JhcHBlclwiIT09ci50b3VjaEV2ZW50c1RhcmdldHx8ZC5jbG9zZXN0KHRoaXMud3JhcHBlckVsKS5sZW5ndGgpJiYoYS5pc1RvdWNoRXZlbnQ9XCJ0b3VjaHN0YXJ0XCI9PT1sLnR5cGUsKGEuaXNUb3VjaEV2ZW50fHwhKFwid2hpY2hcImluIGwpfHwzIT09bC53aGljaCkmJiEoIWEuaXNUb3VjaEV2ZW50JiZcImJ1dHRvblwiaW4gbCYmbC5idXR0b24+MHx8YS5pc1RvdWNoZWQmJmEuaXNNb3ZlZCkpKWlmKHIubm9Td2lwaW5nJiZkLmNsb3Nlc3Qoci5ub1N3aXBpbmdTZWxlY3Rvcj9yLm5vU3dpcGluZ1NlbGVjdG9yOlwiLlwiK3Iubm9Td2lwaW5nQ2xhc3MpWzBdKXRoaXMuYWxsb3dDbGljaz0hMDtlbHNlIGlmKCFyLnN3aXBlSGFuZGxlcnx8ZC5jbG9zZXN0KHIuc3dpcGVIYW5kbGVyKVswXSl7by5jdXJyZW50WD1cInRvdWNoc3RhcnRcIj09PWwudHlwZT9sLnRhcmdldFRvdWNoZXNbMF0ucGFnZVg6bC5wYWdlWCxvLmN1cnJlbnRZPVwidG91Y2hzdGFydFwiPT09bC50eXBlP2wudGFyZ2V0VG91Y2hlc1swXS5wYWdlWTpsLnBhZ2VZO3ZhciBoPW8uY3VycmVudFgscD1vLmN1cnJlbnRZLGM9ci5lZGdlU3dpcGVEZXRlY3Rpb258fHIuaU9TRWRnZVN3aXBlRGV0ZWN0aW9uLHU9ci5lZGdlU3dpcGVUaHJlc2hvbGR8fHIuaU9TRWRnZVN3aXBlVGhyZXNob2xkO2lmKCFjfHwhKGg8PXV8fGg+PXQuc2NyZWVuLndpZHRoLXUpKXtpZihuLmV4dGVuZChhLHtpc1RvdWNoZWQ6ITAsaXNNb3ZlZDohMSxhbGxvd1RvdWNoQ2FsbGJhY2tzOiEwLGlzU2Nyb2xsaW5nOnZvaWQgMCxzdGFydE1vdmluZzp2b2lkIDB9KSxvLnN0YXJ0WD1oLG8uc3RhcnRZPXAsYS50b3VjaFN0YXJ0VGltZT1uLm5vdygpLHRoaXMuYWxsb3dDbGljaz0hMCx0aGlzLnVwZGF0ZVNpemUoKSx0aGlzLnN3aXBlRGlyZWN0aW9uPXZvaWQgMCxyLnRocmVzaG9sZD4wJiYoYS5hbGxvd1RocmVzaG9sZE1vdmU9ITEpLFwidG91Y2hzdGFydFwiIT09bC50eXBlKXt2YXIgdj0hMDtkLmlzKGEuZm9ybUVsZW1lbnRzKSYmKHY9ITEpLGUuYWN0aXZlRWxlbWVudCYmcyhlLmFjdGl2ZUVsZW1lbnQpLmlzKGEuZm9ybUVsZW1lbnRzKSYmZS5hY3RpdmVFbGVtZW50IT09ZFswXSYmZS5hY3RpdmVFbGVtZW50LmJsdXIoKTt2YXIgZj12JiZ0aGlzLmFsbG93VG91Y2hNb3ZlJiZyLnRvdWNoU3RhcnRQcmV2ZW50RGVmYXVsdDsoci50b3VjaFN0YXJ0Rm9yY2VQcmV2ZW50RGVmYXVsdHx8ZikmJmwucHJldmVudERlZmF1bHQoKX10aGlzLmVtaXQoXCJ0b3VjaFN0YXJ0XCIsbCl9fX19ZnVuY3Rpb24gTyh0KXt2YXIgaT10aGlzLnRvdWNoRXZlbnRzRGF0YSxhPXRoaXMucGFyYW1zLHI9dGhpcy50b3VjaGVzLG89dGhpcy5ydGxUcmFuc2xhdGUsbD10O2lmKGwub3JpZ2luYWxFdmVudCYmKGw9bC5vcmlnaW5hbEV2ZW50KSxpLmlzVG91Y2hlZCl7aWYoIWkuaXNUb3VjaEV2ZW50fHxcIm1vdXNlbW92ZVwiIT09bC50eXBlKXt2YXIgZD1cInRvdWNobW92ZVwiPT09bC50eXBlJiZsLnRhcmdldFRvdWNoZXMmJihsLnRhcmdldFRvdWNoZXNbMF18fGwuY2hhbmdlZFRvdWNoZXNbMF0pLGg9XCJ0b3VjaG1vdmVcIj09PWwudHlwZT9kLnBhZ2VYOmwucGFnZVgscD1cInRvdWNobW92ZVwiPT09bC50eXBlP2QucGFnZVk6bC5wYWdlWTtpZihsLnByZXZlbnRlZEJ5TmVzdGVkU3dpcGVyKXJldHVybiByLnN0YXJ0WD1oLHZvaWQoci5zdGFydFk9cCk7aWYoIXRoaXMuYWxsb3dUb3VjaE1vdmUpcmV0dXJuIHRoaXMuYWxsb3dDbGljaz0hMSx2b2lkKGkuaXNUb3VjaGVkJiYobi5leHRlbmQocix7c3RhcnRYOmgsc3RhcnRZOnAsY3VycmVudFg6aCxjdXJyZW50WTpwfSksaS50b3VjaFN0YXJ0VGltZT1uLm5vdygpKSk7aWYoaS5pc1RvdWNoRXZlbnQmJmEudG91Y2hSZWxlYXNlT25FZGdlcyYmIWEubG9vcClpZih0aGlzLmlzVmVydGljYWwoKSl7aWYocDxyLnN0YXJ0WSYmdGhpcy50cmFuc2xhdGU8PXRoaXMubWF4VHJhbnNsYXRlKCl8fHA+ci5zdGFydFkmJnRoaXMudHJhbnNsYXRlPj10aGlzLm1pblRyYW5zbGF0ZSgpKXJldHVybiBpLmlzVG91Y2hlZD0hMSx2b2lkKGkuaXNNb3ZlZD0hMSl9ZWxzZSBpZihoPHIuc3RhcnRYJiZ0aGlzLnRyYW5zbGF0ZTw9dGhpcy5tYXhUcmFuc2xhdGUoKXx8aD5yLnN0YXJ0WCYmdGhpcy50cmFuc2xhdGU+PXRoaXMubWluVHJhbnNsYXRlKCkpcmV0dXJuO2lmKGkuaXNUb3VjaEV2ZW50JiZlLmFjdGl2ZUVsZW1lbnQmJmwudGFyZ2V0PT09ZS5hY3RpdmVFbGVtZW50JiZzKGwudGFyZ2V0KS5pcyhpLmZvcm1FbGVtZW50cykpcmV0dXJuIGkuaXNNb3ZlZD0hMCx2b2lkKHRoaXMuYWxsb3dDbGljaz0hMSk7aWYoaS5hbGxvd1RvdWNoQ2FsbGJhY2tzJiZ0aGlzLmVtaXQoXCJ0b3VjaE1vdmVcIixsKSwhKGwudGFyZ2V0VG91Y2hlcyYmbC50YXJnZXRUb3VjaGVzLmxlbmd0aD4xKSl7ci5jdXJyZW50WD1oLHIuY3VycmVudFk9cDt2YXIgYz1yLmN1cnJlbnRYLXIuc3RhcnRYLHU9ci5jdXJyZW50WS1yLnN0YXJ0WTtpZighKHRoaXMucGFyYW1zLnRocmVzaG9sZCYmTWF0aC5zcXJ0KE1hdGgucG93KGMsMikrTWF0aC5wb3codSwyKSk8dGhpcy5wYXJhbXMudGhyZXNob2xkKSl7dmFyIHY7aWYodm9pZCAwPT09aS5pc1Njcm9sbGluZyl0aGlzLmlzSG9yaXpvbnRhbCgpJiZyLmN1cnJlbnRZPT09ci5zdGFydFl8fHRoaXMuaXNWZXJ0aWNhbCgpJiZyLmN1cnJlbnRYPT09ci5zdGFydFg/aS5pc1Njcm9sbGluZz0hMTpjKmMrdSp1Pj0yNSYmKHY9MTgwKk1hdGguYXRhbjIoTWF0aC5hYnModSksTWF0aC5hYnMoYykpL01hdGguUEksaS5pc1Njcm9sbGluZz10aGlzLmlzSG9yaXpvbnRhbCgpP3Y+YS50b3VjaEFuZ2xlOjkwLXY+YS50b3VjaEFuZ2xlKTtpZihpLmlzU2Nyb2xsaW5nJiZ0aGlzLmVtaXQoXCJ0b3VjaE1vdmVPcHBvc2l0ZVwiLGwpLHZvaWQgMD09PWkuc3RhcnRNb3ZpbmcmJihyLmN1cnJlbnRYPT09ci5zdGFydFgmJnIuY3VycmVudFk9PT1yLnN0YXJ0WXx8KGkuc3RhcnRNb3Zpbmc9ITApKSxpLmlzU2Nyb2xsaW5nKWkuaXNUb3VjaGVkPSExO2Vsc2UgaWYoaS5zdGFydE1vdmluZyl7dGhpcy5hbGxvd0NsaWNrPSExLGEuY3NzTW9kZXx8bC5wcmV2ZW50RGVmYXVsdCgpLGEudG91Y2hNb3ZlU3RvcFByb3BhZ2F0aW9uJiYhYS5uZXN0ZWQmJmwuc3RvcFByb3BhZ2F0aW9uKCksaS5pc01vdmVkfHwoYS5sb29wJiZ0aGlzLmxvb3BGaXgoKSxpLnN0YXJ0VHJhbnNsYXRlPXRoaXMuZ2V0VHJhbnNsYXRlKCksdGhpcy5zZXRUcmFuc2l0aW9uKDApLHRoaXMuYW5pbWF0aW5nJiZ0aGlzLiR3cmFwcGVyRWwudHJpZ2dlcihcIndlYmtpdFRyYW5zaXRpb25FbmQgdHJhbnNpdGlvbmVuZFwiKSxpLmFsbG93TW9tZW50dW1Cb3VuY2U9ITEsIWEuZ3JhYkN1cnNvcnx8ITAhPT10aGlzLmFsbG93U2xpZGVOZXh0JiYhMCE9PXRoaXMuYWxsb3dTbGlkZVByZXZ8fHRoaXMuc2V0R3JhYkN1cnNvcighMCksdGhpcy5lbWl0KFwic2xpZGVyRmlyc3RNb3ZlXCIsbCkpLHRoaXMuZW1pdChcInNsaWRlck1vdmVcIixsKSxpLmlzTW92ZWQ9ITA7dmFyIGY9dGhpcy5pc0hvcml6b250YWwoKT9jOnU7ci5kaWZmPWYsZio9YS50b3VjaFJhdGlvLG8mJihmPS1mKSx0aGlzLnN3aXBlRGlyZWN0aW9uPWY+MD9cInByZXZcIjpcIm5leHRcIixpLmN1cnJlbnRUcmFuc2xhdGU9ZitpLnN0YXJ0VHJhbnNsYXRlO3ZhciBtPSEwLGc9YS5yZXNpc3RhbmNlUmF0aW87aWYoYS50b3VjaFJlbGVhc2VPbkVkZ2VzJiYoZz0wKSxmPjAmJmkuY3VycmVudFRyYW5zbGF0ZT50aGlzLm1pblRyYW5zbGF0ZSgpPyhtPSExLGEucmVzaXN0YW5jZSYmKGkuY3VycmVudFRyYW5zbGF0ZT10aGlzLm1pblRyYW5zbGF0ZSgpLTErTWF0aC5wb3coLXRoaXMubWluVHJhbnNsYXRlKCkraS5zdGFydFRyYW5zbGF0ZStmLGcpKSk6ZjwwJiZpLmN1cnJlbnRUcmFuc2xhdGU8dGhpcy5tYXhUcmFuc2xhdGUoKSYmKG09ITEsYS5yZXNpc3RhbmNlJiYoaS5jdXJyZW50VHJhbnNsYXRlPXRoaXMubWF4VHJhbnNsYXRlKCkrMS1NYXRoLnBvdyh0aGlzLm1heFRyYW5zbGF0ZSgpLWkuc3RhcnRUcmFuc2xhdGUtZixnKSkpLG0mJihsLnByZXZlbnRlZEJ5TmVzdGVkU3dpcGVyPSEwKSwhdGhpcy5hbGxvd1NsaWRlTmV4dCYmXCJuZXh0XCI9PT10aGlzLnN3aXBlRGlyZWN0aW9uJiZpLmN1cnJlbnRUcmFuc2xhdGU8aS5zdGFydFRyYW5zbGF0ZSYmKGkuY3VycmVudFRyYW5zbGF0ZT1pLnN0YXJ0VHJhbnNsYXRlKSwhdGhpcy5hbGxvd1NsaWRlUHJldiYmXCJwcmV2XCI9PT10aGlzLnN3aXBlRGlyZWN0aW9uJiZpLmN1cnJlbnRUcmFuc2xhdGU+aS5zdGFydFRyYW5zbGF0ZSYmKGkuY3VycmVudFRyYW5zbGF0ZT1pLnN0YXJ0VHJhbnNsYXRlKSxhLnRocmVzaG9sZD4wKXtpZighKE1hdGguYWJzKGYpPmEudGhyZXNob2xkfHxpLmFsbG93VGhyZXNob2xkTW92ZSkpcmV0dXJuIHZvaWQoaS5jdXJyZW50VHJhbnNsYXRlPWkuc3RhcnRUcmFuc2xhdGUpO2lmKCFpLmFsbG93VGhyZXNob2xkTW92ZSlyZXR1cm4gaS5hbGxvd1RocmVzaG9sZE1vdmU9ITAsci5zdGFydFg9ci5jdXJyZW50WCxyLnN0YXJ0WT1yLmN1cnJlbnRZLGkuY3VycmVudFRyYW5zbGF0ZT1pLnN0YXJ0VHJhbnNsYXRlLHZvaWQoci5kaWZmPXRoaXMuaXNIb3Jpem9udGFsKCk/ci5jdXJyZW50WC1yLnN0YXJ0WDpyLmN1cnJlbnRZLXIuc3RhcnRZKX1hLmZvbGxvd0ZpbmdlciYmIWEuY3NzTW9kZSYmKChhLmZyZWVNb2RlfHxhLndhdGNoU2xpZGVzUHJvZ3Jlc3N8fGEud2F0Y2hTbGlkZXNWaXNpYmlsaXR5KSYmKHRoaXMudXBkYXRlQWN0aXZlSW5kZXgoKSx0aGlzLnVwZGF0ZVNsaWRlc0NsYXNzZXMoKSksYS5mcmVlTW9kZSYmKDA9PT1pLnZlbG9jaXRpZXMubGVuZ3RoJiZpLnZlbG9jaXRpZXMucHVzaCh7cG9zaXRpb246clt0aGlzLmlzSG9yaXpvbnRhbCgpP1wic3RhcnRYXCI6XCJzdGFydFlcIl0sdGltZTppLnRvdWNoU3RhcnRUaW1lfSksaS52ZWxvY2l0aWVzLnB1c2goe3Bvc2l0aW9uOnJbdGhpcy5pc0hvcml6b250YWwoKT9cImN1cnJlbnRYXCI6XCJjdXJyZW50WVwiXSx0aW1lOm4ubm93KCl9KSksdGhpcy51cGRhdGVQcm9ncmVzcyhpLmN1cnJlbnRUcmFuc2xhdGUpLHRoaXMuc2V0VHJhbnNsYXRlKGkuY3VycmVudFRyYW5zbGF0ZSkpfX19fX1lbHNlIGkuc3RhcnRNb3ZpbmcmJmkuaXNTY3JvbGxpbmcmJnRoaXMuZW1pdChcInRvdWNoTW92ZU9wcG9zaXRlXCIsbCl9ZnVuY3Rpb24gQShlKXt2YXIgdD10aGlzLGk9dC50b3VjaEV2ZW50c0RhdGEscz10LnBhcmFtcyxhPXQudG91Y2hlcyxyPXQucnRsVHJhbnNsYXRlLG89dC4kd3JhcHBlckVsLGw9dC5zbGlkZXNHcmlkLGQ9dC5zbmFwR3JpZCxoPWU7aWYoaC5vcmlnaW5hbEV2ZW50JiYoaD1oLm9yaWdpbmFsRXZlbnQpLGkuYWxsb3dUb3VjaENhbGxiYWNrcyYmdC5lbWl0KFwidG91Y2hFbmRcIixoKSxpLmFsbG93VG91Y2hDYWxsYmFja3M9ITEsIWkuaXNUb3VjaGVkKXJldHVybiBpLmlzTW92ZWQmJnMuZ3JhYkN1cnNvciYmdC5zZXRHcmFiQ3Vyc29yKCExKSxpLmlzTW92ZWQ9ITEsdm9pZChpLnN0YXJ0TW92aW5nPSExKTtzLmdyYWJDdXJzb3ImJmkuaXNNb3ZlZCYmaS5pc1RvdWNoZWQmJighMD09PXQuYWxsb3dTbGlkZU5leHR8fCEwPT09dC5hbGxvd1NsaWRlUHJldikmJnQuc2V0R3JhYkN1cnNvcighMSk7dmFyIHAsYz1uLm5vdygpLHU9Yy1pLnRvdWNoU3RhcnRUaW1lO2lmKHQuYWxsb3dDbGljayYmKHQudXBkYXRlQ2xpY2tlZFNsaWRlKGgpLHQuZW1pdChcInRhcCBjbGlja1wiLGgpLHU8MzAwJiZjLWkubGFzdENsaWNrVGltZTwzMDAmJnQuZW1pdChcImRvdWJsZVRhcCBkb3VibGVDbGlja1wiLGgpKSxpLmxhc3RDbGlja1RpbWU9bi5ub3coKSxuLm5leHRUaWNrKChmdW5jdGlvbigpe3QuZGVzdHJveWVkfHwodC5hbGxvd0NsaWNrPSEwKX0pKSwhaS5pc1RvdWNoZWR8fCFpLmlzTW92ZWR8fCF0LnN3aXBlRGlyZWN0aW9ufHwwPT09YS5kaWZmfHxpLmN1cnJlbnRUcmFuc2xhdGU9PT1pLnN0YXJ0VHJhbnNsYXRlKXJldHVybiBpLmlzVG91Y2hlZD0hMSxpLmlzTW92ZWQ9ITEsdm9pZChpLnN0YXJ0TW92aW5nPSExKTtpZihpLmlzVG91Y2hlZD0hMSxpLmlzTW92ZWQ9ITEsaS5zdGFydE1vdmluZz0hMSxwPXMuZm9sbG93RmluZ2VyP3I/dC50cmFuc2xhdGU6LXQudHJhbnNsYXRlOi1pLmN1cnJlbnRUcmFuc2xhdGUsIXMuY3NzTW9kZSlpZihzLmZyZWVNb2RlKXtpZihwPC10Lm1pblRyYW5zbGF0ZSgpKXJldHVybiB2b2lkIHQuc2xpZGVUbyh0LmFjdGl2ZUluZGV4KTtpZihwPi10Lm1heFRyYW5zbGF0ZSgpKXJldHVybiB2b2lkKHQuc2xpZGVzLmxlbmd0aDxkLmxlbmd0aD90LnNsaWRlVG8oZC5sZW5ndGgtMSk6dC5zbGlkZVRvKHQuc2xpZGVzLmxlbmd0aC0xKSk7aWYocy5mcmVlTW9kZU1vbWVudHVtKXtpZihpLnZlbG9jaXRpZXMubGVuZ3RoPjEpe3ZhciB2PWkudmVsb2NpdGllcy5wb3AoKSxmPWkudmVsb2NpdGllcy5wb3AoKSxtPXYucG9zaXRpb24tZi5wb3NpdGlvbixnPXYudGltZS1mLnRpbWU7dC52ZWxvY2l0eT1tL2csdC52ZWxvY2l0eS89MixNYXRoLmFicyh0LnZlbG9jaXR5KTxzLmZyZWVNb2RlTWluaW11bVZlbG9jaXR5JiYodC52ZWxvY2l0eT0wKSwoZz4xNTB8fG4ubm93KCktdi50aW1lPjMwMCkmJih0LnZlbG9jaXR5PTApfWVsc2UgdC52ZWxvY2l0eT0wO3QudmVsb2NpdHkqPXMuZnJlZU1vZGVNb21lbnR1bVZlbG9jaXR5UmF0aW8saS52ZWxvY2l0aWVzLmxlbmd0aD0wO3ZhciBiPTFlMypzLmZyZWVNb2RlTW9tZW50dW1SYXRpbyx3PXQudmVsb2NpdHkqYix5PXQudHJhbnNsYXRlK3c7ciYmKHk9LXkpO3ZhciB4LFQsRT0hMSxTPTIwKk1hdGguYWJzKHQudmVsb2NpdHkpKnMuZnJlZU1vZGVNb21lbnR1bUJvdW5jZVJhdGlvO2lmKHk8dC5tYXhUcmFuc2xhdGUoKSlzLmZyZWVNb2RlTW9tZW50dW1Cb3VuY2U/KHkrdC5tYXhUcmFuc2xhdGUoKTwtUyYmKHk9dC5tYXhUcmFuc2xhdGUoKS1TKSx4PXQubWF4VHJhbnNsYXRlKCksRT0hMCxpLmFsbG93TW9tZW50dW1Cb3VuY2U9ITApOnk9dC5tYXhUcmFuc2xhdGUoKSxzLmxvb3AmJnMuY2VudGVyZWRTbGlkZXMmJihUPSEwKTtlbHNlIGlmKHk+dC5taW5UcmFuc2xhdGUoKSlzLmZyZWVNb2RlTW9tZW50dW1Cb3VuY2U/KHktdC5taW5UcmFuc2xhdGUoKT5TJiYoeT10Lm1pblRyYW5zbGF0ZSgpK1MpLHg9dC5taW5UcmFuc2xhdGUoKSxFPSEwLGkuYWxsb3dNb21lbnR1bUJvdW5jZT0hMCk6eT10Lm1pblRyYW5zbGF0ZSgpLHMubG9vcCYmcy5jZW50ZXJlZFNsaWRlcyYmKFQ9ITApO2Vsc2UgaWYocy5mcmVlTW9kZVN0aWNreSl7Zm9yKHZhciBDLE09MDtNPGQubGVuZ3RoO00rPTEpaWYoZFtNXT4teSl7Qz1NO2JyZWFrfXk9LSh5PU1hdGguYWJzKGRbQ10teSk8TWF0aC5hYnMoZFtDLTFdLXkpfHxcIm5leHRcIj09PXQuc3dpcGVEaXJlY3Rpb24/ZFtDXTpkW0MtMV0pfWlmKFQmJnQub25jZShcInRyYW5zaXRpb25FbmRcIiwoZnVuY3Rpb24oKXt0Lmxvb3BGaXgoKX0pKSwwIT09dC52ZWxvY2l0eSl7aWYoYj1yP01hdGguYWJzKCgteS10LnRyYW5zbGF0ZSkvdC52ZWxvY2l0eSk6TWF0aC5hYnMoKHktdC50cmFuc2xhdGUpL3QudmVsb2NpdHkpLHMuZnJlZU1vZGVTdGlja3kpe3ZhciBQPU1hdGguYWJzKChyPy15OnkpLXQudHJhbnNsYXRlKSx6PXQuc2xpZGVzU2l6ZXNHcmlkW3QuYWN0aXZlSW5kZXhdO2I9UDx6P3Muc3BlZWQ6UDwyKno/MS41KnMuc3BlZWQ6Mi41KnMuc3BlZWR9fWVsc2UgaWYocy5mcmVlTW9kZVN0aWNreSlyZXR1cm4gdm9pZCB0LnNsaWRlVG9DbG9zZXN0KCk7cy5mcmVlTW9kZU1vbWVudHVtQm91bmNlJiZFPyh0LnVwZGF0ZVByb2dyZXNzKHgpLHQuc2V0VHJhbnNpdGlvbihiKSx0LnNldFRyYW5zbGF0ZSh5KSx0LnRyYW5zaXRpb25TdGFydCghMCx0LnN3aXBlRGlyZWN0aW9uKSx0LmFuaW1hdGluZz0hMCxvLnRyYW5zaXRpb25FbmQoKGZ1bmN0aW9uKCl7dCYmIXQuZGVzdHJveWVkJiZpLmFsbG93TW9tZW50dW1Cb3VuY2UmJih0LmVtaXQoXCJtb21lbnR1bUJvdW5jZVwiKSx0LnNldFRyYW5zaXRpb24ocy5zcGVlZCksc2V0VGltZW91dCgoZnVuY3Rpb24oKXt0LnNldFRyYW5zbGF0ZSh4KSxvLnRyYW5zaXRpb25FbmQoKGZ1bmN0aW9uKCl7dCYmIXQuZGVzdHJveWVkJiZ0LnRyYW5zaXRpb25FbmQoKX0pKX0pLDApKX0pKSk6dC52ZWxvY2l0eT8odC51cGRhdGVQcm9ncmVzcyh5KSx0LnNldFRyYW5zaXRpb24oYiksdC5zZXRUcmFuc2xhdGUoeSksdC50cmFuc2l0aW9uU3RhcnQoITAsdC5zd2lwZURpcmVjdGlvbiksdC5hbmltYXRpbmd8fCh0LmFuaW1hdGluZz0hMCxvLnRyYW5zaXRpb25FbmQoKGZ1bmN0aW9uKCl7dCYmIXQuZGVzdHJveWVkJiZ0LnRyYW5zaXRpb25FbmQoKX0pKSkpOnQudXBkYXRlUHJvZ3Jlc3MoeSksdC51cGRhdGVBY3RpdmVJbmRleCgpLHQudXBkYXRlU2xpZGVzQ2xhc3NlcygpfWVsc2UgaWYocy5mcmVlTW9kZVN0aWNreSlyZXR1cm4gdm9pZCB0LnNsaWRlVG9DbG9zZXN0KCk7KCFzLmZyZWVNb2RlTW9tZW50dW18fHU+PXMubG9uZ1N3aXBlc01zKSYmKHQudXBkYXRlUHJvZ3Jlc3MoKSx0LnVwZGF0ZUFjdGl2ZUluZGV4KCksdC51cGRhdGVTbGlkZXNDbGFzc2VzKCkpfWVsc2V7Zm9yKHZhciBrPTAsJD10LnNsaWRlc1NpemVzR3JpZFswXSxMPTA7TDxsLmxlbmd0aDtMKz1MPHMuc2xpZGVzUGVyR3JvdXBTa2lwPzE6cy5zbGlkZXNQZXJHcm91cCl7dmFyIEk9TDxzLnNsaWRlc1Blckdyb3VwU2tpcC0xPzE6cy5zbGlkZXNQZXJHcm91cDt2b2lkIDAhPT1sW0wrSV0/cD49bFtMXSYmcDxsW0wrSV0mJihrPUwsJD1sW0wrSV0tbFtMXSk6cD49bFtMXSYmKGs9TCwkPWxbbC5sZW5ndGgtMV0tbFtsLmxlbmd0aC0yXSl9dmFyIEQ9KHAtbFtrXSkvJCxPPWs8cy5zbGlkZXNQZXJHcm91cFNraXAtMT8xOnMuc2xpZGVzUGVyR3JvdXA7aWYodT5zLmxvbmdTd2lwZXNNcyl7aWYoIXMubG9uZ1N3aXBlcylyZXR1cm4gdm9pZCB0LnNsaWRlVG8odC5hY3RpdmVJbmRleCk7XCJuZXh0XCI9PT10LnN3aXBlRGlyZWN0aW9uJiYoRD49cy5sb25nU3dpcGVzUmF0aW8/dC5zbGlkZVRvKGsrTyk6dC5zbGlkZVRvKGspKSxcInByZXZcIj09PXQuc3dpcGVEaXJlY3Rpb24mJihEPjEtcy5sb25nU3dpcGVzUmF0aW8/dC5zbGlkZVRvKGsrTyk6dC5zbGlkZVRvKGspKX1lbHNle2lmKCFzLnNob3J0U3dpcGVzKXJldHVybiB2b2lkIHQuc2xpZGVUbyh0LmFjdGl2ZUluZGV4KTt0Lm5hdmlnYXRpb24mJihoLnRhcmdldD09PXQubmF2aWdhdGlvbi5uZXh0RWx8fGgudGFyZ2V0PT09dC5uYXZpZ2F0aW9uLnByZXZFbCk/aC50YXJnZXQ9PT10Lm5hdmlnYXRpb24ubmV4dEVsP3Quc2xpZGVUbyhrK08pOnQuc2xpZGVUbyhrKTooXCJuZXh0XCI9PT10LnN3aXBlRGlyZWN0aW9uJiZ0LnNsaWRlVG8oaytPKSxcInByZXZcIj09PXQuc3dpcGVEaXJlY3Rpb24mJnQuc2xpZGVUbyhrKSl9fX1mdW5jdGlvbiBHKCl7dmFyIGU9dGhpcy5wYXJhbXMsdD10aGlzLmVsO2lmKCF0fHwwIT09dC5vZmZzZXRXaWR0aCl7ZS5icmVha3BvaW50cyYmdGhpcy5zZXRCcmVha3BvaW50KCk7dmFyIGk9dGhpcy5hbGxvd1NsaWRlTmV4dCxzPXRoaXMuYWxsb3dTbGlkZVByZXYsYT10aGlzLnNuYXBHcmlkO3RoaXMuYWxsb3dTbGlkZU5leHQ9ITAsdGhpcy5hbGxvd1NsaWRlUHJldj0hMCx0aGlzLnVwZGF0ZVNpemUoKSx0aGlzLnVwZGF0ZVNsaWRlcygpLHRoaXMudXBkYXRlU2xpZGVzQ2xhc3NlcygpLChcImF1dG9cIj09PWUuc2xpZGVzUGVyVmlld3x8ZS5zbGlkZXNQZXJWaWV3PjEpJiZ0aGlzLmlzRW5kJiYhdGhpcy5wYXJhbXMuY2VudGVyZWRTbGlkZXM/dGhpcy5zbGlkZVRvKHRoaXMuc2xpZGVzLmxlbmd0aC0xLDAsITEsITApOnRoaXMuc2xpZGVUbyh0aGlzLmFjdGl2ZUluZGV4LDAsITEsITApLHRoaXMuYXV0b3BsYXkmJnRoaXMuYXV0b3BsYXkucnVubmluZyYmdGhpcy5hdXRvcGxheS5wYXVzZWQmJnRoaXMuYXV0b3BsYXkucnVuKCksdGhpcy5hbGxvd1NsaWRlUHJldj1zLHRoaXMuYWxsb3dTbGlkZU5leHQ9aSx0aGlzLnBhcmFtcy53YXRjaE92ZXJmbG93JiZhIT09dGhpcy5zbmFwR3JpZCYmdGhpcy5jaGVja092ZXJmbG93KCl9fWZ1bmN0aW9uIEgoZSl7dGhpcy5hbGxvd0NsaWNrfHwodGhpcy5wYXJhbXMucHJldmVudENsaWNrcyYmZS5wcmV2ZW50RGVmYXVsdCgpLHRoaXMucGFyYW1zLnByZXZlbnRDbGlja3NQcm9wYWdhdGlvbiYmdGhpcy5hbmltYXRpbmcmJihlLnN0b3BQcm9wYWdhdGlvbigpLGUuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCkpKX1mdW5jdGlvbiBCKCl7dmFyIGU9dGhpcy53cmFwcGVyRWwsdD10aGlzLnJ0bFRyYW5zbGF0ZTt0aGlzLnByZXZpb3VzVHJhbnNsYXRlPXRoaXMudHJhbnNsYXRlLHRoaXMuaXNIb3Jpem9udGFsKCk/dGhpcy50cmFuc2xhdGU9dD9lLnNjcm9sbFdpZHRoLWUub2Zmc2V0V2lkdGgtZS5zY3JvbGxMZWZ0Oi1lLnNjcm9sbExlZnQ6dGhpcy50cmFuc2xhdGU9LWUuc2Nyb2xsVG9wLC0wPT09dGhpcy50cmFuc2xhdGUmJih0aGlzLnRyYW5zbGF0ZT0wKSx0aGlzLnVwZGF0ZUFjdGl2ZUluZGV4KCksdGhpcy51cGRhdGVTbGlkZXNDbGFzc2VzKCk7dmFyIGk9dGhpcy5tYXhUcmFuc2xhdGUoKS10aGlzLm1pblRyYW5zbGF0ZSgpOygwPT09aT8wOih0aGlzLnRyYW5zbGF0ZS10aGlzLm1pblRyYW5zbGF0ZSgpKS9pKSE9PXRoaXMucHJvZ3Jlc3MmJnRoaXMudXBkYXRlUHJvZ3Jlc3ModD8tdGhpcy50cmFuc2xhdGU6dGhpcy50cmFuc2xhdGUpLHRoaXMuZW1pdChcInNldFRyYW5zbGF0ZVwiLHRoaXMudHJhbnNsYXRlLCExKX12YXIgTj0hMTtmdW5jdGlvbiBYKCl7fXZhciBWPXtpbml0OiEwLGRpcmVjdGlvbjpcImhvcml6b250YWxcIix0b3VjaEV2ZW50c1RhcmdldDpcImNvbnRhaW5lclwiLGluaXRpYWxTbGlkZTowLHNwZWVkOjMwMCxjc3NNb2RlOiExLHVwZGF0ZU9uV2luZG93UmVzaXplOiEwLHByZXZlbnRJbnRlcmFjdGlvbk9uVHJhbnNpdGlvbjohMSxlZGdlU3dpcGVEZXRlY3Rpb246ITEsZWRnZVN3aXBlVGhyZXNob2xkOjIwLGZyZWVNb2RlOiExLGZyZWVNb2RlTW9tZW50dW06ITAsZnJlZU1vZGVNb21lbnR1bVJhdGlvOjEsZnJlZU1vZGVNb21lbnR1bUJvdW5jZTohMCxmcmVlTW9kZU1vbWVudHVtQm91bmNlUmF0aW86MSxmcmVlTW9kZU1vbWVudHVtVmVsb2NpdHlSYXRpbzoxLGZyZWVNb2RlU3RpY2t5OiExLGZyZWVNb2RlTWluaW11bVZlbG9jaXR5Oi4wMixhdXRvSGVpZ2h0OiExLHNldFdyYXBwZXJTaXplOiExLHZpcnR1YWxUcmFuc2xhdGU6ITEsZWZmZWN0Olwic2xpZGVcIixicmVha3BvaW50czp2b2lkIDAsc3BhY2VCZXR3ZWVuOjAsc2xpZGVzUGVyVmlldzoxLHNsaWRlc1BlckNvbHVtbjoxLHNsaWRlc1BlckNvbHVtbkZpbGw6XCJjb2x1bW5cIixzbGlkZXNQZXJHcm91cDoxLHNsaWRlc1Blckdyb3VwU2tpcDowLGNlbnRlcmVkU2xpZGVzOiExLGNlbnRlcmVkU2xpZGVzQm91bmRzOiExLHNsaWRlc09mZnNldEJlZm9yZTowLHNsaWRlc09mZnNldEFmdGVyOjAsbm9ybWFsaXplU2xpZGVJbmRleDohMCxjZW50ZXJJbnN1ZmZpY2llbnRTbGlkZXM6ITEsd2F0Y2hPdmVyZmxvdzohMSxyb3VuZExlbmd0aHM6ITEsdG91Y2hSYXRpbzoxLHRvdWNoQW5nbGU6NDUsc2ltdWxhdGVUb3VjaDohMCxzaG9ydFN3aXBlczohMCxsb25nU3dpcGVzOiEwLGxvbmdTd2lwZXNSYXRpbzouNSxsb25nU3dpcGVzTXM6MzAwLGZvbGxvd0ZpbmdlcjohMCxhbGxvd1RvdWNoTW92ZTohMCx0aHJlc2hvbGQ6MCx0b3VjaE1vdmVTdG9wUHJvcGFnYXRpb246ITEsdG91Y2hTdGFydFByZXZlbnREZWZhdWx0OiEwLHRvdWNoU3RhcnRGb3JjZVByZXZlbnREZWZhdWx0OiExLHRvdWNoUmVsZWFzZU9uRWRnZXM6ITEsdW5pcXVlTmF2RWxlbWVudHM6ITAscmVzaXN0YW5jZTohMCxyZXNpc3RhbmNlUmF0aW86Ljg1LHdhdGNoU2xpZGVzUHJvZ3Jlc3M6ITEsd2F0Y2hTbGlkZXNWaXNpYmlsaXR5OiExLGdyYWJDdXJzb3I6ITEscHJldmVudENsaWNrczohMCxwcmV2ZW50Q2xpY2tzUHJvcGFnYXRpb246ITAsc2xpZGVUb0NsaWNrZWRTbGlkZTohMSxwcmVsb2FkSW1hZ2VzOiEwLHVwZGF0ZU9uSW1hZ2VzUmVhZHk6ITAsbG9vcDohMSxsb29wQWRkaXRpb25hbFNsaWRlczowLGxvb3BlZFNsaWRlczpudWxsLGxvb3BGaWxsR3JvdXBXaXRoQmxhbms6ITEsYWxsb3dTbGlkZVByZXY6ITAsYWxsb3dTbGlkZU5leHQ6ITAsc3dpcGVIYW5kbGVyOm51bGwsbm9Td2lwaW5nOiEwLG5vU3dpcGluZ0NsYXNzOlwic3dpcGVyLW5vLXN3aXBpbmdcIixub1N3aXBpbmdTZWxlY3RvcjpudWxsLHBhc3NpdmVMaXN0ZW5lcnM6ITAsY29udGFpbmVyTW9kaWZpZXJDbGFzczpcInN3aXBlci1jb250YWluZXItXCIsc2xpZGVDbGFzczpcInN3aXBlci1zbGlkZVwiLHNsaWRlQmxhbmtDbGFzczpcInN3aXBlci1zbGlkZS1pbnZpc2libGUtYmxhbmtcIixzbGlkZUFjdGl2ZUNsYXNzOlwic3dpcGVyLXNsaWRlLWFjdGl2ZVwiLHNsaWRlRHVwbGljYXRlQWN0aXZlQ2xhc3M6XCJzd2lwZXItc2xpZGUtZHVwbGljYXRlLWFjdGl2ZVwiLHNsaWRlVmlzaWJsZUNsYXNzOlwic3dpcGVyLXNsaWRlLXZpc2libGVcIixzbGlkZUR1cGxpY2F0ZUNsYXNzOlwic3dpcGVyLXNsaWRlLWR1cGxpY2F0ZVwiLHNsaWRlTmV4dENsYXNzOlwic3dpcGVyLXNsaWRlLW5leHRcIixzbGlkZUR1cGxpY2F0ZU5leHRDbGFzczpcInN3aXBlci1zbGlkZS1kdXBsaWNhdGUtbmV4dFwiLHNsaWRlUHJldkNsYXNzOlwic3dpcGVyLXNsaWRlLXByZXZcIixzbGlkZUR1cGxpY2F0ZVByZXZDbGFzczpcInN3aXBlci1zbGlkZS1kdXBsaWNhdGUtcHJldlwiLHdyYXBwZXJDbGFzczpcInN3aXBlci13cmFwcGVyXCIscnVuQ2FsbGJhY2tzT25Jbml0OiEwfSxZPXt1cGRhdGU6aCx0cmFuc2xhdGU6cCx0cmFuc2l0aW9uOmMsc2xpZGU6dSxsb29wOnYsZ3JhYkN1cnNvcjpmLG1hbmlwdWxhdGlvbjpMLGV2ZW50czp7YXR0YWNoRXZlbnRzOmZ1bmN0aW9uKCl7dmFyIHQ9dGhpcy5wYXJhbXMsaT10aGlzLnRvdWNoRXZlbnRzLHM9dGhpcy5lbCxhPXRoaXMud3JhcHBlckVsO3RoaXMub25Ub3VjaFN0YXJ0PUQuYmluZCh0aGlzKSx0aGlzLm9uVG91Y2hNb3ZlPU8uYmluZCh0aGlzKSx0aGlzLm9uVG91Y2hFbmQ9QS5iaW5kKHRoaXMpLHQuY3NzTW9kZSYmKHRoaXMub25TY3JvbGw9Qi5iaW5kKHRoaXMpKSx0aGlzLm9uQ2xpY2s9SC5iaW5kKHRoaXMpO3ZhciByPSEhdC5uZXN0ZWQ7aWYoIW8udG91Y2gmJm8ucG9pbnRlckV2ZW50cylzLmFkZEV2ZW50TGlzdGVuZXIoaS5zdGFydCx0aGlzLm9uVG91Y2hTdGFydCwhMSksZS5hZGRFdmVudExpc3RlbmVyKGkubW92ZSx0aGlzLm9uVG91Y2hNb3ZlLHIpLGUuYWRkRXZlbnRMaXN0ZW5lcihpLmVuZCx0aGlzLm9uVG91Y2hFbmQsITEpO2Vsc2V7aWYoby50b3VjaCl7dmFyIG49IShcInRvdWNoc3RhcnRcIiE9PWkuc3RhcnR8fCFvLnBhc3NpdmVMaXN0ZW5lcnx8IXQucGFzc2l2ZUxpc3RlbmVycykmJntwYXNzaXZlOiEwLGNhcHR1cmU6ITF9O3MuYWRkRXZlbnRMaXN0ZW5lcihpLnN0YXJ0LHRoaXMub25Ub3VjaFN0YXJ0LG4pLHMuYWRkRXZlbnRMaXN0ZW5lcihpLm1vdmUsdGhpcy5vblRvdWNoTW92ZSxvLnBhc3NpdmVMaXN0ZW5lcj97cGFzc2l2ZTohMSxjYXB0dXJlOnJ9OnIpLHMuYWRkRXZlbnRMaXN0ZW5lcihpLmVuZCx0aGlzLm9uVG91Y2hFbmQsbiksaS5jYW5jZWwmJnMuYWRkRXZlbnRMaXN0ZW5lcihpLmNhbmNlbCx0aGlzLm9uVG91Y2hFbmQsbiksTnx8KGUuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoc3RhcnRcIixYKSxOPSEwKX0odC5zaW11bGF0ZVRvdWNoJiYhSS5pb3MmJiFJLmFuZHJvaWR8fHQuc2ltdWxhdGVUb3VjaCYmIW8udG91Y2gmJkkuaW9zKSYmKHMuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLHRoaXMub25Ub3VjaFN0YXJ0LCExKSxlLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIix0aGlzLm9uVG91Y2hNb3ZlLHIpLGUuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIix0aGlzLm9uVG91Y2hFbmQsITEpKX0odC5wcmV2ZW50Q2xpY2tzfHx0LnByZXZlbnRDbGlja3NQcm9wYWdhdGlvbikmJnMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsdGhpcy5vbkNsaWNrLCEwKSx0LmNzc01vZGUmJmEuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLHRoaXMub25TY3JvbGwpLHQudXBkYXRlT25XaW5kb3dSZXNpemU/dGhpcy5vbihJLmlvc3x8SS5hbmRyb2lkP1wicmVzaXplIG9yaWVudGF0aW9uY2hhbmdlIG9ic2VydmVyVXBkYXRlXCI6XCJyZXNpemUgb2JzZXJ2ZXJVcGRhdGVcIixHLCEwKTp0aGlzLm9uKFwib2JzZXJ2ZXJVcGRhdGVcIixHLCEwKX0sZGV0YWNoRXZlbnRzOmZ1bmN0aW9uKCl7dmFyIHQ9dGhpcy5wYXJhbXMsaT10aGlzLnRvdWNoRXZlbnRzLHM9dGhpcy5lbCxhPXRoaXMud3JhcHBlckVsLHI9ISF0Lm5lc3RlZDtpZighby50b3VjaCYmby5wb2ludGVyRXZlbnRzKXMucmVtb3ZlRXZlbnRMaXN0ZW5lcihpLnN0YXJ0LHRoaXMub25Ub3VjaFN0YXJ0LCExKSxlLnJlbW92ZUV2ZW50TGlzdGVuZXIoaS5tb3ZlLHRoaXMub25Ub3VjaE1vdmUsciksZS5yZW1vdmVFdmVudExpc3RlbmVyKGkuZW5kLHRoaXMub25Ub3VjaEVuZCwhMSk7ZWxzZXtpZihvLnRvdWNoKXt2YXIgbj0hKFwib25Ub3VjaFN0YXJ0XCIhPT1pLnN0YXJ0fHwhby5wYXNzaXZlTGlzdGVuZXJ8fCF0LnBhc3NpdmVMaXN0ZW5lcnMpJiZ7cGFzc2l2ZTohMCxjYXB0dXJlOiExfTtzLnJlbW92ZUV2ZW50TGlzdGVuZXIoaS5zdGFydCx0aGlzLm9uVG91Y2hTdGFydCxuKSxzLnJlbW92ZUV2ZW50TGlzdGVuZXIoaS5tb3ZlLHRoaXMub25Ub3VjaE1vdmUscikscy5yZW1vdmVFdmVudExpc3RlbmVyKGkuZW5kLHRoaXMub25Ub3VjaEVuZCxuKSxpLmNhbmNlbCYmcy5yZW1vdmVFdmVudExpc3RlbmVyKGkuY2FuY2VsLHRoaXMub25Ub3VjaEVuZCxuKX0odC5zaW11bGF0ZVRvdWNoJiYhSS5pb3MmJiFJLmFuZHJvaWR8fHQuc2ltdWxhdGVUb3VjaCYmIW8udG91Y2gmJkkuaW9zKSYmKHMucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLHRoaXMub25Ub3VjaFN0YXJ0LCExKSxlLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIix0aGlzLm9uVG91Y2hNb3ZlLHIpLGUucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIix0aGlzLm9uVG91Y2hFbmQsITEpKX0odC5wcmV2ZW50Q2xpY2tzfHx0LnByZXZlbnRDbGlja3NQcm9wYWdhdGlvbikmJnMucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsdGhpcy5vbkNsaWNrLCEwKSx0LmNzc01vZGUmJmEucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLHRoaXMub25TY3JvbGwpLHRoaXMub2ZmKEkuaW9zfHxJLmFuZHJvaWQ/XCJyZXNpemUgb3JpZW50YXRpb25jaGFuZ2Ugb2JzZXJ2ZXJVcGRhdGVcIjpcInJlc2l6ZSBvYnNlcnZlclVwZGF0ZVwiLEcpfX0sYnJlYWtwb2ludHM6e3NldEJyZWFrcG9pbnQ6ZnVuY3Rpb24oKXt2YXIgZT10aGlzLmFjdGl2ZUluZGV4LHQ9dGhpcy5pbml0aWFsaXplZCxpPXRoaXMubG9vcGVkU2xpZGVzO3ZvaWQgMD09PWkmJihpPTApO3ZhciBzPXRoaXMucGFyYW1zLGE9dGhpcy4kZWwscj1zLmJyZWFrcG9pbnRzO2lmKHImJighcnx8MCE9PU9iamVjdC5rZXlzKHIpLmxlbmd0aCkpe3ZhciBvPXRoaXMuZ2V0QnJlYWtwb2ludChyKTtpZihvJiZ0aGlzLmN1cnJlbnRCcmVha3BvaW50IT09byl7dmFyIGw9byBpbiByP3Jbb106dm9pZCAwO2wmJltcInNsaWRlc1BlclZpZXdcIixcInNwYWNlQmV0d2VlblwiLFwic2xpZGVzUGVyR3JvdXBcIixcInNsaWRlc1Blckdyb3VwU2tpcFwiLFwic2xpZGVzUGVyQ29sdW1uXCJdLmZvckVhY2goKGZ1bmN0aW9uKGUpe3ZhciB0PWxbZV07dm9pZCAwIT09dCYmKGxbZV09XCJzbGlkZXNQZXJWaWV3XCIhPT1lfHxcIkFVVE9cIiE9PXQmJlwiYXV0b1wiIT09dD9cInNsaWRlc1BlclZpZXdcIj09PWU/cGFyc2VGbG9hdCh0KTpwYXJzZUludCh0LDEwKTpcImF1dG9cIil9KSk7dmFyIGQ9bHx8dGhpcy5vcmlnaW5hbFBhcmFtcyxoPXMuc2xpZGVzUGVyQ29sdW1uPjEscD1kLnNsaWRlc1BlckNvbHVtbj4xO2gmJiFwP2EucmVtb3ZlQ2xhc3Mocy5jb250YWluZXJNb2RpZmllckNsYXNzK1wibXVsdGlyb3cgXCIrcy5jb250YWluZXJNb2RpZmllckNsYXNzK1wibXVsdGlyb3ctY29sdW1uXCIpOiFoJiZwJiYoYS5hZGRDbGFzcyhzLmNvbnRhaW5lck1vZGlmaWVyQ2xhc3MrXCJtdWx0aXJvd1wiKSxcImNvbHVtblwiPT09ZC5zbGlkZXNQZXJDb2x1bW5GaWxsJiZhLmFkZENsYXNzKHMuY29udGFpbmVyTW9kaWZpZXJDbGFzcytcIm11bHRpcm93LWNvbHVtblwiKSk7dmFyIGM9ZC5kaXJlY3Rpb24mJmQuZGlyZWN0aW9uIT09cy5kaXJlY3Rpb24sdT1zLmxvb3AmJihkLnNsaWRlc1BlclZpZXchPT1zLnNsaWRlc1BlclZpZXd8fGMpO2MmJnQmJnRoaXMuY2hhbmdlRGlyZWN0aW9uKCksbi5leHRlbmQodGhpcy5wYXJhbXMsZCksbi5leHRlbmQodGhpcyx7YWxsb3dUb3VjaE1vdmU6dGhpcy5wYXJhbXMuYWxsb3dUb3VjaE1vdmUsYWxsb3dTbGlkZU5leHQ6dGhpcy5wYXJhbXMuYWxsb3dTbGlkZU5leHQsYWxsb3dTbGlkZVByZXY6dGhpcy5wYXJhbXMuYWxsb3dTbGlkZVByZXZ9KSx0aGlzLmN1cnJlbnRCcmVha3BvaW50PW8sdSYmdCYmKHRoaXMubG9vcERlc3Ryb3koKSx0aGlzLmxvb3BDcmVhdGUoKSx0aGlzLnVwZGF0ZVNsaWRlcygpLHRoaXMuc2xpZGVUbyhlLWkrdGhpcy5sb29wZWRTbGlkZXMsMCwhMSkpLHRoaXMuZW1pdChcImJyZWFrcG9pbnRcIixkKX19fSxnZXRCcmVha3BvaW50OmZ1bmN0aW9uKGUpe2lmKGUpe3ZhciBpPSExLHM9T2JqZWN0LmtleXMoZSkubWFwKChmdW5jdGlvbihlKXtpZihcInN0cmluZ1wiPT10eXBlb2YgZSYmMD09PWUuaW5kZXhPZihcIkBcIikpe3ZhciBpPXBhcnNlRmxvYXQoZS5zdWJzdHIoMSkpO3JldHVybnt2YWx1ZTp0LmlubmVySGVpZ2h0KmkscG9pbnQ6ZX19cmV0dXJue3ZhbHVlOmUscG9pbnQ6ZX19KSk7cy5zb3J0KChmdW5jdGlvbihlLHQpe3JldHVybiBwYXJzZUludChlLnZhbHVlLDEwKS1wYXJzZUludCh0LnZhbHVlLDEwKX0pKTtmb3IodmFyIGE9MDthPHMubGVuZ3RoO2ErPTEpe3ZhciByPXNbYV0sbj1yLnBvaW50O3IudmFsdWU8PXQuaW5uZXJXaWR0aCYmKGk9bil9cmV0dXJuIGl8fFwibWF4XCJ9fX0sY2hlY2tPdmVyZmxvdzp7Y2hlY2tPdmVyZmxvdzpmdW5jdGlvbigpe3ZhciBlPXRoaXMucGFyYW1zLHQ9dGhpcy5pc0xvY2tlZCxpPXRoaXMuc2xpZGVzLmxlbmd0aD4wJiZlLnNsaWRlc09mZnNldEJlZm9yZStlLnNwYWNlQmV0d2VlbioodGhpcy5zbGlkZXMubGVuZ3RoLTEpK3RoaXMuc2xpZGVzWzBdLm9mZnNldFdpZHRoKnRoaXMuc2xpZGVzLmxlbmd0aDtlLnNsaWRlc09mZnNldEJlZm9yZSYmZS5zbGlkZXNPZmZzZXRBZnRlciYmaT90aGlzLmlzTG9ja2VkPWk8PXRoaXMuc2l6ZTp0aGlzLmlzTG9ja2VkPTE9PT10aGlzLnNuYXBHcmlkLmxlbmd0aCx0aGlzLmFsbG93U2xpZGVOZXh0PSF0aGlzLmlzTG9ja2VkLHRoaXMuYWxsb3dTbGlkZVByZXY9IXRoaXMuaXNMb2NrZWQsdCE9PXRoaXMuaXNMb2NrZWQmJnRoaXMuZW1pdCh0aGlzLmlzTG9ja2VkP1wibG9ja1wiOlwidW5sb2NrXCIpLHQmJnQhPT10aGlzLmlzTG9ja2VkJiYodGhpcy5pc0VuZD0hMSx0aGlzLm5hdmlnYXRpb24udXBkYXRlKCkpfX0sY2xhc3Nlczp7YWRkQ2xhc3NlczpmdW5jdGlvbigpe3ZhciBlPXRoaXMuY2xhc3NOYW1lcyx0PXRoaXMucGFyYW1zLGk9dGhpcy5ydGwscz10aGlzLiRlbCxhPVtdO2EucHVzaChcImluaXRpYWxpemVkXCIpLGEucHVzaCh0LmRpcmVjdGlvbiksdC5mcmVlTW9kZSYmYS5wdXNoKFwiZnJlZS1tb2RlXCIpLHQuYXV0b0hlaWdodCYmYS5wdXNoKFwiYXV0b2hlaWdodFwiKSxpJiZhLnB1c2goXCJydGxcIiksdC5zbGlkZXNQZXJDb2x1bW4+MSYmKGEucHVzaChcIm11bHRpcm93XCIpLFwiY29sdW1uXCI9PT10LnNsaWRlc1BlckNvbHVtbkZpbGwmJmEucHVzaChcIm11bHRpcm93LWNvbHVtblwiKSksSS5hbmRyb2lkJiZhLnB1c2goXCJhbmRyb2lkXCIpLEkuaW9zJiZhLnB1c2goXCJpb3NcIiksdC5jc3NNb2RlJiZhLnB1c2goXCJjc3MtbW9kZVwiKSxhLmZvckVhY2goKGZ1bmN0aW9uKGkpe2UucHVzaCh0LmNvbnRhaW5lck1vZGlmaWVyQ2xhc3MraSl9KSkscy5hZGRDbGFzcyhlLmpvaW4oXCIgXCIpKX0scmVtb3ZlQ2xhc3NlczpmdW5jdGlvbigpe3ZhciBlPXRoaXMuJGVsLHQ9dGhpcy5jbGFzc05hbWVzO2UucmVtb3ZlQ2xhc3ModC5qb2luKFwiIFwiKSl9fSxpbWFnZXM6e2xvYWRJbWFnZTpmdW5jdGlvbihlLGkscyxhLHIsbil7dmFyIG87ZnVuY3Rpb24gbCgpe24mJm4oKX1lLmNvbXBsZXRlJiZyP2woKTppPygobz1uZXcgdC5JbWFnZSkub25sb2FkPWwsby5vbmVycm9yPWwsYSYmKG8uc2l6ZXM9YSkscyYmKG8uc3Jjc2V0PXMpLGkmJihvLnNyYz1pKSk6bCgpfSxwcmVsb2FkSW1hZ2VzOmZ1bmN0aW9uKCl7dmFyIGU9dGhpcztmdW5jdGlvbiB0KCl7bnVsbCE9ZSYmZSYmIWUuZGVzdHJveWVkJiYodm9pZCAwIT09ZS5pbWFnZXNMb2FkZWQmJihlLmltYWdlc0xvYWRlZCs9MSksZS5pbWFnZXNMb2FkZWQ9PT1lLmltYWdlc1RvTG9hZC5sZW5ndGgmJihlLnBhcmFtcy51cGRhdGVPbkltYWdlc1JlYWR5JiZlLnVwZGF0ZSgpLGUuZW1pdChcImltYWdlc1JlYWR5XCIpKSl9ZS5pbWFnZXNUb0xvYWQ9ZS4kZWwuZmluZChcImltZ1wiKTtmb3IodmFyIGk9MDtpPGUuaW1hZ2VzVG9Mb2FkLmxlbmd0aDtpKz0xKXt2YXIgcz1lLmltYWdlc1RvTG9hZFtpXTtlLmxvYWRJbWFnZShzLHMuY3VycmVudFNyY3x8cy5nZXRBdHRyaWJ1dGUoXCJzcmNcIikscy5zcmNzZXR8fHMuZ2V0QXR0cmlidXRlKFwic3Jjc2V0XCIpLHMuc2l6ZXN8fHMuZ2V0QXR0cmlidXRlKFwic2l6ZXNcIiksITAsdCl9fX19LEY9e30sVz1mdW5jdGlvbihlKXtmdW5jdGlvbiB0KCl7Zm9yKHZhciBpLGEscixsPVtdLGQ9YXJndW1lbnRzLmxlbmd0aDtkLS07KWxbZF09YXJndW1lbnRzW2RdOzE9PT1sLmxlbmd0aCYmbFswXS5jb25zdHJ1Y3RvciYmbFswXS5jb25zdHJ1Y3Rvcj09PU9iamVjdD9yPWxbMF06KGE9KGk9bClbMF0scj1pWzFdKSxyfHwocj17fSkscj1uLmV4dGVuZCh7fSxyKSxhJiYhci5lbCYmKHIuZWw9YSksZS5jYWxsKHRoaXMsciksT2JqZWN0LmtleXMoWSkuZm9yRWFjaCgoZnVuY3Rpb24oZSl7T2JqZWN0LmtleXMoWVtlXSkuZm9yRWFjaCgoZnVuY3Rpb24oaSl7dC5wcm90b3R5cGVbaV18fCh0LnByb3RvdHlwZVtpXT1ZW2VdW2ldKX0pKX0pKTt2YXIgaD10aGlzO3ZvaWQgMD09PWgubW9kdWxlcyYmKGgubW9kdWxlcz17fSksT2JqZWN0LmtleXMoaC5tb2R1bGVzKS5mb3JFYWNoKChmdW5jdGlvbihlKXt2YXIgdD1oLm1vZHVsZXNbZV07aWYodC5wYXJhbXMpe3ZhciBpPU9iamVjdC5rZXlzKHQucGFyYW1zKVswXSxzPXQucGFyYW1zW2ldO2lmKFwib2JqZWN0XCIhPXR5cGVvZiBzfHxudWxsPT09cylyZXR1cm47aWYoIShpIGluIHIpfHwhKFwiZW5hYmxlZFwiaW4gcykpcmV0dXJuOyEwPT09cltpXSYmKHJbaV09e2VuYWJsZWQ6ITB9KSxcIm9iamVjdFwiIT10eXBlb2YgcltpXXx8XCJlbmFibGVkXCJpbiByW2ldfHwocltpXS5lbmFibGVkPSEwKSxyW2ldfHwocltpXT17ZW5hYmxlZDohMX0pfX0pKTt2YXIgcD1uLmV4dGVuZCh7fSxWKTtoLnVzZU1vZHVsZXNQYXJhbXMocCksaC5wYXJhbXM9bi5leHRlbmQoe30scCxGLHIpLGgub3JpZ2luYWxQYXJhbXM9bi5leHRlbmQoe30saC5wYXJhbXMpLGgucGFzc2VkUGFyYW1zPW4uZXh0ZW5kKHt9LHIpLGguJD1zO3ZhciBjPXMoaC5wYXJhbXMuZWwpO2lmKGE9Y1swXSl7aWYoYy5sZW5ndGg+MSl7dmFyIHU9W107cmV0dXJuIGMuZWFjaCgoZnVuY3Rpb24oZSxpKXt2YXIgcz1uLmV4dGVuZCh7fSxyLHtlbDppfSk7dS5wdXNoKG5ldyB0KHMpKX0pKSx1fXZhciB2LGYsbTtyZXR1cm4gYS5zd2lwZXI9aCxjLmRhdGEoXCJzd2lwZXJcIixoKSxhJiZhLnNoYWRvd1Jvb3QmJmEuc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yPyh2PXMoYS5zaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3IoXCIuXCIraC5wYXJhbXMud3JhcHBlckNsYXNzKSkpLmNoaWxkcmVuPWZ1bmN0aW9uKGUpe3JldHVybiBjLmNoaWxkcmVuKGUpfTp2PWMuY2hpbGRyZW4oXCIuXCIraC5wYXJhbXMud3JhcHBlckNsYXNzKSxuLmV4dGVuZChoLHskZWw6YyxlbDphLCR3cmFwcGVyRWw6dix3cmFwcGVyRWw6dlswXSxjbGFzc05hbWVzOltdLHNsaWRlczpzKCksc2xpZGVzR3JpZDpbXSxzbmFwR3JpZDpbXSxzbGlkZXNTaXplc0dyaWQ6W10saXNIb3Jpem9udGFsOmZ1bmN0aW9uKCl7cmV0dXJuXCJob3Jpem9udGFsXCI9PT1oLnBhcmFtcy5kaXJlY3Rpb259LGlzVmVydGljYWw6ZnVuY3Rpb24oKXtyZXR1cm5cInZlcnRpY2FsXCI9PT1oLnBhcmFtcy5kaXJlY3Rpb259LHJ0bDpcInJ0bFwiPT09YS5kaXIudG9Mb3dlckNhc2UoKXx8XCJydGxcIj09PWMuY3NzKFwiZGlyZWN0aW9uXCIpLHJ0bFRyYW5zbGF0ZTpcImhvcml6b250YWxcIj09PWgucGFyYW1zLmRpcmVjdGlvbiYmKFwicnRsXCI9PT1hLmRpci50b0xvd2VyQ2FzZSgpfHxcInJ0bFwiPT09Yy5jc3MoXCJkaXJlY3Rpb25cIikpLHdyb25nUlRMOlwiLXdlYmtpdC1ib3hcIj09PXYuY3NzKFwiZGlzcGxheVwiKSxhY3RpdmVJbmRleDowLHJlYWxJbmRleDowLGlzQmVnaW5uaW5nOiEwLGlzRW5kOiExLHRyYW5zbGF0ZTowLHByZXZpb3VzVHJhbnNsYXRlOjAscHJvZ3Jlc3M6MCx2ZWxvY2l0eTowLGFuaW1hdGluZzohMSxhbGxvd1NsaWRlTmV4dDpoLnBhcmFtcy5hbGxvd1NsaWRlTmV4dCxhbGxvd1NsaWRlUHJldjpoLnBhcmFtcy5hbGxvd1NsaWRlUHJldix0b3VjaEV2ZW50czooZj1bXCJ0b3VjaHN0YXJ0XCIsXCJ0b3VjaG1vdmVcIixcInRvdWNoZW5kXCIsXCJ0b3VjaGNhbmNlbFwiXSxtPVtcIm1vdXNlZG93blwiLFwibW91c2Vtb3ZlXCIsXCJtb3VzZXVwXCJdLG8ucG9pbnRlckV2ZW50cyYmKG09W1wicG9pbnRlcmRvd25cIixcInBvaW50ZXJtb3ZlXCIsXCJwb2ludGVydXBcIl0pLGgudG91Y2hFdmVudHNUb3VjaD17c3RhcnQ6ZlswXSxtb3ZlOmZbMV0sZW5kOmZbMl0sY2FuY2VsOmZbM119LGgudG91Y2hFdmVudHNEZXNrdG9wPXtzdGFydDptWzBdLG1vdmU6bVsxXSxlbmQ6bVsyXX0sby50b3VjaHx8IWgucGFyYW1zLnNpbXVsYXRlVG91Y2g/aC50b3VjaEV2ZW50c1RvdWNoOmgudG91Y2hFdmVudHNEZXNrdG9wKSx0b3VjaEV2ZW50c0RhdGE6e2lzVG91Y2hlZDp2b2lkIDAsaXNNb3ZlZDp2b2lkIDAsYWxsb3dUb3VjaENhbGxiYWNrczp2b2lkIDAsdG91Y2hTdGFydFRpbWU6dm9pZCAwLGlzU2Nyb2xsaW5nOnZvaWQgMCxjdXJyZW50VHJhbnNsYXRlOnZvaWQgMCxzdGFydFRyYW5zbGF0ZTp2b2lkIDAsYWxsb3dUaHJlc2hvbGRNb3ZlOnZvaWQgMCxmb3JtRWxlbWVudHM6XCJpbnB1dCwgc2VsZWN0LCBvcHRpb24sIHRleHRhcmVhLCBidXR0b24sIHZpZGVvLCBsYWJlbFwiLGxhc3RDbGlja1RpbWU6bi5ub3coKSxjbGlja1RpbWVvdXQ6dm9pZCAwLHZlbG9jaXRpZXM6W10sYWxsb3dNb21lbnR1bUJvdW5jZTp2b2lkIDAsaXNUb3VjaEV2ZW50OnZvaWQgMCxzdGFydE1vdmluZzp2b2lkIDB9LGFsbG93Q2xpY2s6ITAsYWxsb3dUb3VjaE1vdmU6aC5wYXJhbXMuYWxsb3dUb3VjaE1vdmUsdG91Y2hlczp7c3RhcnRYOjAsc3RhcnRZOjAsY3VycmVudFg6MCxjdXJyZW50WTowLGRpZmY6MH0saW1hZ2VzVG9Mb2FkOltdLGltYWdlc0xvYWRlZDowfSksaC51c2VNb2R1bGVzKCksaC5wYXJhbXMuaW5pdCYmaC5pbml0KCksaH19ZSYmKHQuX19wcm90b19fPWUpLHQucHJvdG90eXBlPU9iamVjdC5jcmVhdGUoZSYmZS5wcm90b3R5cGUpLHQucHJvdG90eXBlLmNvbnN0cnVjdG9yPXQ7dmFyIGk9e2V4dGVuZGVkRGVmYXVsdHM6e2NvbmZpZ3VyYWJsZTohMH0sZGVmYXVsdHM6e2NvbmZpZ3VyYWJsZTohMH0sQ2xhc3M6e2NvbmZpZ3VyYWJsZTohMH0sJDp7Y29uZmlndXJhYmxlOiEwfX07cmV0dXJuIHQucHJvdG90eXBlLnNsaWRlc1BlclZpZXdEeW5hbWljPWZ1bmN0aW9uKCl7dmFyIGU9dGhpcy5wYXJhbXMsdD10aGlzLnNsaWRlcyxpPXRoaXMuc2xpZGVzR3JpZCxzPXRoaXMuc2l6ZSxhPXRoaXMuYWN0aXZlSW5kZXgscj0xO2lmKGUuY2VudGVyZWRTbGlkZXMpe2Zvcih2YXIgbixvPXRbYV0uc3dpcGVyU2xpZGVTaXplLGw9YSsxO2w8dC5sZW5ndGg7bCs9MSl0W2xdJiYhbiYmKHIrPTEsKG8rPXRbbF0uc3dpcGVyU2xpZGVTaXplKT5zJiYobj0hMCkpO2Zvcih2YXIgZD1hLTE7ZD49MDtkLT0xKXRbZF0mJiFuJiYocis9MSwobys9dFtkXS5zd2lwZXJTbGlkZVNpemUpPnMmJihuPSEwKSl9ZWxzZSBmb3IodmFyIGg9YSsxO2g8dC5sZW5ndGg7aCs9MSlpW2hdLWlbYV08cyYmKHIrPTEpO3JldHVybiByfSx0LnByb3RvdHlwZS51cGRhdGU9ZnVuY3Rpb24oKXt2YXIgZT10aGlzO2lmKGUmJiFlLmRlc3Ryb3llZCl7dmFyIHQ9ZS5zbmFwR3JpZCxpPWUucGFyYW1zO2kuYnJlYWtwb2ludHMmJmUuc2V0QnJlYWtwb2ludCgpLGUudXBkYXRlU2l6ZSgpLGUudXBkYXRlU2xpZGVzKCksZS51cGRhdGVQcm9ncmVzcygpLGUudXBkYXRlU2xpZGVzQ2xhc3NlcygpLGUucGFyYW1zLmZyZWVNb2RlPyhzKCksZS5wYXJhbXMuYXV0b0hlaWdodCYmZS51cGRhdGVBdXRvSGVpZ2h0KCkpOigoXCJhdXRvXCI9PT1lLnBhcmFtcy5zbGlkZXNQZXJWaWV3fHxlLnBhcmFtcy5zbGlkZXNQZXJWaWV3PjEpJiZlLmlzRW5kJiYhZS5wYXJhbXMuY2VudGVyZWRTbGlkZXM/ZS5zbGlkZVRvKGUuc2xpZGVzLmxlbmd0aC0xLDAsITEsITApOmUuc2xpZGVUbyhlLmFjdGl2ZUluZGV4LDAsITEsITApKXx8cygpLGkud2F0Y2hPdmVyZmxvdyYmdCE9PWUuc25hcEdyaWQmJmUuY2hlY2tPdmVyZmxvdygpLGUuZW1pdChcInVwZGF0ZVwiKX1mdW5jdGlvbiBzKCl7dmFyIHQ9ZS5ydGxUcmFuc2xhdGU/LTEqZS50cmFuc2xhdGU6ZS50cmFuc2xhdGUsaT1NYXRoLm1pbihNYXRoLm1heCh0LGUubWF4VHJhbnNsYXRlKCkpLGUubWluVHJhbnNsYXRlKCkpO2Uuc2V0VHJhbnNsYXRlKGkpLGUudXBkYXRlQWN0aXZlSW5kZXgoKSxlLnVwZGF0ZVNsaWRlc0NsYXNzZXMoKX19LHQucHJvdG90eXBlLmNoYW5nZURpcmVjdGlvbj1mdW5jdGlvbihlLHQpe3ZvaWQgMD09PXQmJih0PSEwKTt2YXIgaT10aGlzLnBhcmFtcy5kaXJlY3Rpb247cmV0dXJuIGV8fChlPVwiaG9yaXpvbnRhbFwiPT09aT9cInZlcnRpY2FsXCI6XCJob3Jpem9udGFsXCIpLGU9PT1pfHxcImhvcml6b250YWxcIiE9PWUmJlwidmVydGljYWxcIiE9PWV8fCh0aGlzLiRlbC5yZW1vdmVDbGFzcyhcIlwiK3RoaXMucGFyYW1zLmNvbnRhaW5lck1vZGlmaWVyQ2xhc3MraSkuYWRkQ2xhc3MoXCJcIit0aGlzLnBhcmFtcy5jb250YWluZXJNb2RpZmllckNsYXNzK2UpLHRoaXMucGFyYW1zLmRpcmVjdGlvbj1lLHRoaXMuc2xpZGVzLmVhY2goKGZ1bmN0aW9uKHQsaSl7XCJ2ZXJ0aWNhbFwiPT09ZT9pLnN0eWxlLndpZHRoPVwiXCI6aS5zdHlsZS5oZWlnaHQ9XCJcIn0pKSx0aGlzLmVtaXQoXCJjaGFuZ2VEaXJlY3Rpb25cIiksdCYmdGhpcy51cGRhdGUoKSksdGhpc30sdC5wcm90b3R5cGUuaW5pdD1mdW5jdGlvbigpe3RoaXMuaW5pdGlhbGl6ZWR8fCh0aGlzLmVtaXQoXCJiZWZvcmVJbml0XCIpLHRoaXMucGFyYW1zLmJyZWFrcG9pbnRzJiZ0aGlzLnNldEJyZWFrcG9pbnQoKSx0aGlzLmFkZENsYXNzZXMoKSx0aGlzLnBhcmFtcy5sb29wJiZ0aGlzLmxvb3BDcmVhdGUoKSx0aGlzLnVwZGF0ZVNpemUoKSx0aGlzLnVwZGF0ZVNsaWRlcygpLHRoaXMucGFyYW1zLndhdGNoT3ZlcmZsb3cmJnRoaXMuY2hlY2tPdmVyZmxvdygpLHRoaXMucGFyYW1zLmdyYWJDdXJzb3ImJnRoaXMuc2V0R3JhYkN1cnNvcigpLHRoaXMucGFyYW1zLnByZWxvYWRJbWFnZXMmJnRoaXMucHJlbG9hZEltYWdlcygpLHRoaXMucGFyYW1zLmxvb3A/dGhpcy5zbGlkZVRvKHRoaXMucGFyYW1zLmluaXRpYWxTbGlkZSt0aGlzLmxvb3BlZFNsaWRlcywwLHRoaXMucGFyYW1zLnJ1bkNhbGxiYWNrc09uSW5pdCk6dGhpcy5zbGlkZVRvKHRoaXMucGFyYW1zLmluaXRpYWxTbGlkZSwwLHRoaXMucGFyYW1zLnJ1bkNhbGxiYWNrc09uSW5pdCksdGhpcy5hdHRhY2hFdmVudHMoKSx0aGlzLmluaXRpYWxpemVkPSEwLHRoaXMuZW1pdChcImluaXRcIikpfSx0LnByb3RvdHlwZS5kZXN0cm95PWZ1bmN0aW9uKGUsdCl7dm9pZCAwPT09ZSYmKGU9ITApLHZvaWQgMD09PXQmJih0PSEwKTt2YXIgaT10aGlzLHM9aS5wYXJhbXMsYT1pLiRlbCxyPWkuJHdyYXBwZXJFbCxvPWkuc2xpZGVzO3JldHVybiB2b2lkIDA9PT1pLnBhcmFtc3x8aS5kZXN0cm95ZWR8fChpLmVtaXQoXCJiZWZvcmVEZXN0cm95XCIpLGkuaW5pdGlhbGl6ZWQ9ITEsaS5kZXRhY2hFdmVudHMoKSxzLmxvb3AmJmkubG9vcERlc3Ryb3koKSx0JiYoaS5yZW1vdmVDbGFzc2VzKCksYS5yZW1vdmVBdHRyKFwic3R5bGVcIiksci5yZW1vdmVBdHRyKFwic3R5bGVcIiksbyYmby5sZW5ndGgmJm8ucmVtb3ZlQ2xhc3MoW3Muc2xpZGVWaXNpYmxlQ2xhc3Mscy5zbGlkZUFjdGl2ZUNsYXNzLHMuc2xpZGVOZXh0Q2xhc3Mscy5zbGlkZVByZXZDbGFzc10uam9pbihcIiBcIikpLnJlbW92ZUF0dHIoXCJzdHlsZVwiKS5yZW1vdmVBdHRyKFwiZGF0YS1zd2lwZXItc2xpZGUtaW5kZXhcIikpLGkuZW1pdChcImRlc3Ryb3lcIiksT2JqZWN0LmtleXMoaS5ldmVudHNMaXN0ZW5lcnMpLmZvckVhY2goKGZ1bmN0aW9uKGUpe2kub2ZmKGUpfSkpLCExIT09ZSYmKGkuJGVsWzBdLnN3aXBlcj1udWxsLGkuJGVsLmRhdGEoXCJzd2lwZXJcIixudWxsKSxuLmRlbGV0ZVByb3BzKGkpKSxpLmRlc3Ryb3llZD0hMCksbnVsbH0sdC5leHRlbmREZWZhdWx0cz1mdW5jdGlvbihlKXtuLmV4dGVuZChGLGUpfSxpLmV4dGVuZGVkRGVmYXVsdHMuZ2V0PWZ1bmN0aW9uKCl7cmV0dXJuIEZ9LGkuZGVmYXVsdHMuZ2V0PWZ1bmN0aW9uKCl7cmV0dXJuIFZ9LGkuQ2xhc3MuZ2V0PWZ1bmN0aW9uKCl7cmV0dXJuIGV9LGkuJC5nZXQ9ZnVuY3Rpb24oKXtyZXR1cm4gc30sT2JqZWN0LmRlZmluZVByb3BlcnRpZXModCxpKSx0fShsKSxSPXtuYW1lOlwiZGV2aWNlXCIscHJvdG86e2RldmljZTpJfSxzdGF0aWM6e2RldmljZTpJfX0scT17bmFtZTpcInN1cHBvcnRcIixwcm90bzp7c3VwcG9ydDpvfSxzdGF0aWM6e3N1cHBvcnQ6b319LGo9e2lzRWRnZTohIXQubmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvRWRnZS9nKSxpc1NhZmFyaTpmdW5jdGlvbigpe3ZhciBlPXQubmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpO3JldHVybiBlLmluZGV4T2YoXCJzYWZhcmlcIik+PTAmJmUuaW5kZXhPZihcImNocm9tZVwiKTwwJiZlLmluZGV4T2YoXCJhbmRyb2lkXCIpPDB9KCksaXNVaVdlYlZpZXc6LyhpUGhvbmV8aVBvZHxpUGFkKS4qQXBwbGVXZWJLaXQoPyEuKlNhZmFyaSkvaS50ZXN0KHQubmF2aWdhdG9yLnVzZXJBZ2VudCl9LEs9e25hbWU6XCJicm93c2VyXCIscHJvdG86e2Jyb3dzZXI6an0sc3RhdGljOnticm93c2VyOmp9fSxVPXtuYW1lOlwicmVzaXplXCIsY3JlYXRlOmZ1bmN0aW9uKCl7dmFyIGU9dGhpcztuLmV4dGVuZChlLHtyZXNpemU6e3Jlc2l6ZUhhbmRsZXI6ZnVuY3Rpb24oKXtlJiYhZS5kZXN0cm95ZWQmJmUuaW5pdGlhbGl6ZWQmJihlLmVtaXQoXCJiZWZvcmVSZXNpemVcIiksZS5lbWl0KFwicmVzaXplXCIpKX0sb3JpZW50YXRpb25DaGFuZ2VIYW5kbGVyOmZ1bmN0aW9uKCl7ZSYmIWUuZGVzdHJveWVkJiZlLmluaXRpYWxpemVkJiZlLmVtaXQoXCJvcmllbnRhdGlvbmNoYW5nZVwiKX19fSl9LG9uOntpbml0OmZ1bmN0aW9uKCl7dC5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsdGhpcy5yZXNpemUucmVzaXplSGFuZGxlciksdC5hZGRFdmVudExpc3RlbmVyKFwib3JpZW50YXRpb25jaGFuZ2VcIix0aGlzLnJlc2l6ZS5vcmllbnRhdGlvbkNoYW5nZUhhbmRsZXIpfSxkZXN0cm95OmZ1bmN0aW9uKCl7dC5yZW1vdmVFdmVudExpc3RlbmVyKFwicmVzaXplXCIsdGhpcy5yZXNpemUucmVzaXplSGFuZGxlciksdC5yZW1vdmVFdmVudExpc3RlbmVyKFwib3JpZW50YXRpb25jaGFuZ2VcIix0aGlzLnJlc2l6ZS5vcmllbnRhdGlvbkNoYW5nZUhhbmRsZXIpfX19LF89e2Z1bmM6dC5NdXRhdGlvbk9ic2VydmVyfHx0LldlYmtpdE11dGF0aW9uT2JzZXJ2ZXIsYXR0YWNoOmZ1bmN0aW9uKGUsaSl7dm9pZCAwPT09aSYmKGk9e30pO3ZhciBzPXRoaXMsYT1uZXcoMCxfLmZ1bmMpKChmdW5jdGlvbihlKXtpZigxIT09ZS5sZW5ndGgpe3ZhciBpPWZ1bmN0aW9uKCl7cy5lbWl0KFwib2JzZXJ2ZXJVcGRhdGVcIixlWzBdKX07dC5yZXF1ZXN0QW5pbWF0aW9uRnJhbWU/dC5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoaSk6dC5zZXRUaW1lb3V0KGksMCl9ZWxzZSBzLmVtaXQoXCJvYnNlcnZlclVwZGF0ZVwiLGVbMF0pfSkpO2Eub2JzZXJ2ZShlLHthdHRyaWJ1dGVzOnZvaWQgMD09PWkuYXR0cmlidXRlc3x8aS5hdHRyaWJ1dGVzLGNoaWxkTGlzdDp2b2lkIDA9PT1pLmNoaWxkTGlzdHx8aS5jaGlsZExpc3QsY2hhcmFjdGVyRGF0YTp2b2lkIDA9PT1pLmNoYXJhY3RlckRhdGF8fGkuY2hhcmFjdGVyRGF0YX0pLHMub2JzZXJ2ZXIub2JzZXJ2ZXJzLnB1c2goYSl9LGluaXQ6ZnVuY3Rpb24oKXtpZihvLm9ic2VydmVyJiZ0aGlzLnBhcmFtcy5vYnNlcnZlcil7aWYodGhpcy5wYXJhbXMub2JzZXJ2ZVBhcmVudHMpZm9yKHZhciBlPXRoaXMuJGVsLnBhcmVudHMoKSx0PTA7dDxlLmxlbmd0aDt0Kz0xKXRoaXMub2JzZXJ2ZXIuYXR0YWNoKGVbdF0pO3RoaXMub2JzZXJ2ZXIuYXR0YWNoKHRoaXMuJGVsWzBdLHtjaGlsZExpc3Q6dGhpcy5wYXJhbXMub2JzZXJ2ZVNsaWRlQ2hpbGRyZW59KSx0aGlzLm9ic2VydmVyLmF0dGFjaCh0aGlzLiR3cmFwcGVyRWxbMF0se2F0dHJpYnV0ZXM6ITF9KX19LGRlc3Ryb3k6ZnVuY3Rpb24oKXt0aGlzLm9ic2VydmVyLm9ic2VydmVycy5mb3JFYWNoKChmdW5jdGlvbihlKXtlLmRpc2Nvbm5lY3QoKX0pKSx0aGlzLm9ic2VydmVyLm9ic2VydmVycz1bXX19LFo9e25hbWU6XCJvYnNlcnZlclwiLHBhcmFtczp7b2JzZXJ2ZXI6ITEsb2JzZXJ2ZVBhcmVudHM6ITEsb2JzZXJ2ZVNsaWRlQ2hpbGRyZW46ITF9LGNyZWF0ZTpmdW5jdGlvbigpe24uZXh0ZW5kKHRoaXMse29ic2VydmVyOntpbml0Ol8uaW5pdC5iaW5kKHRoaXMpLGF0dGFjaDpfLmF0dGFjaC5iaW5kKHRoaXMpLGRlc3Ryb3k6Xy5kZXN0cm95LmJpbmQodGhpcyksb2JzZXJ2ZXJzOltdfX0pfSxvbjp7aW5pdDpmdW5jdGlvbigpe3RoaXMub2JzZXJ2ZXIuaW5pdCgpfSxkZXN0cm95OmZ1bmN0aW9uKCl7dGhpcy5vYnNlcnZlci5kZXN0cm95KCl9fX0sUT17dXBkYXRlOmZ1bmN0aW9uKGUpe3ZhciB0PXRoaXMsaT10LnBhcmFtcyxzPWkuc2xpZGVzUGVyVmlldyxhPWkuc2xpZGVzUGVyR3JvdXAscj1pLmNlbnRlcmVkU2xpZGVzLG89dC5wYXJhbXMudmlydHVhbCxsPW8uYWRkU2xpZGVzQmVmb3JlLGQ9by5hZGRTbGlkZXNBZnRlcixoPXQudmlydHVhbCxwPWguZnJvbSxjPWgudG8sdT1oLnNsaWRlcyx2PWguc2xpZGVzR3JpZCxmPWgucmVuZGVyU2xpZGUsbT1oLm9mZnNldDt0LnVwZGF0ZUFjdGl2ZUluZGV4KCk7dmFyIGcsYix3LHk9dC5hY3RpdmVJbmRleHx8MDtnPXQucnRsVHJhbnNsYXRlP1wicmlnaHRcIjp0LmlzSG9yaXpvbnRhbCgpP1wibGVmdFwiOlwidG9wXCIscj8oYj1NYXRoLmZsb29yKHMvMikrYStsLHc9TWF0aC5mbG9vcihzLzIpK2ErZCk6KGI9cysoYS0xKStsLHc9YStkKTt2YXIgeD1NYXRoLm1heCgoeXx8MCktdywwKSxUPU1hdGgubWluKCh5fHwwKStiLHUubGVuZ3RoLTEpLEU9KHQuc2xpZGVzR3JpZFt4XXx8MCktKHQuc2xpZGVzR3JpZFswXXx8MCk7ZnVuY3Rpb24gUygpe3QudXBkYXRlU2xpZGVzKCksdC51cGRhdGVQcm9ncmVzcygpLHQudXBkYXRlU2xpZGVzQ2xhc3NlcygpLHQubGF6eSYmdC5wYXJhbXMubGF6eS5lbmFibGVkJiZ0LmxhenkubG9hZCgpfWlmKG4uZXh0ZW5kKHQudmlydHVhbCx7ZnJvbTp4LHRvOlQsb2Zmc2V0OkUsc2xpZGVzR3JpZDp0LnNsaWRlc0dyaWR9KSxwPT09eCYmYz09PVQmJiFlKXJldHVybiB0LnNsaWRlc0dyaWQhPT12JiZFIT09bSYmdC5zbGlkZXMuY3NzKGcsRStcInB4XCIpLHZvaWQgdC51cGRhdGVQcm9ncmVzcygpO2lmKHQucGFyYW1zLnZpcnR1YWwucmVuZGVyRXh0ZXJuYWwpcmV0dXJuIHQucGFyYW1zLnZpcnR1YWwucmVuZGVyRXh0ZXJuYWwuY2FsbCh0LHtvZmZzZXQ6RSxmcm9tOngsdG86VCxzbGlkZXM6ZnVuY3Rpb24oKXtmb3IodmFyIGU9W10sdD14O3Q8PVQ7dCs9MSllLnB1c2godVt0XSk7cmV0dXJuIGV9KCl9KSx2b2lkIFMoKTt2YXIgQz1bXSxNPVtdO2lmKGUpdC4kd3JhcHBlckVsLmZpbmQoXCIuXCIrdC5wYXJhbXMuc2xpZGVDbGFzcykucmVtb3ZlKCk7ZWxzZSBmb3IodmFyIFA9cDtQPD1jO1ArPTEpKFA8eHx8UD5UKSYmdC4kd3JhcHBlckVsLmZpbmQoXCIuXCIrdC5wYXJhbXMuc2xpZGVDbGFzcysnW2RhdGEtc3dpcGVyLXNsaWRlLWluZGV4PVwiJytQKydcIl0nKS5yZW1vdmUoKTtmb3IodmFyIHo9MDt6PHUubGVuZ3RoO3orPTEpej49eCYmejw9VCYmKHZvaWQgMD09PWN8fGU/TS5wdXNoKHopOih6PmMmJk0ucHVzaCh6KSx6PHAmJkMucHVzaCh6KSkpO00uZm9yRWFjaCgoZnVuY3Rpb24oZSl7dC4kd3JhcHBlckVsLmFwcGVuZChmKHVbZV0sZSkpfSkpLEMuc29ydCgoZnVuY3Rpb24oZSx0KXtyZXR1cm4gdC1lfSkpLmZvckVhY2goKGZ1bmN0aW9uKGUpe3QuJHdyYXBwZXJFbC5wcmVwZW5kKGYodVtlXSxlKSl9KSksdC4kd3JhcHBlckVsLmNoaWxkcmVuKFwiLnN3aXBlci1zbGlkZVwiKS5jc3MoZyxFK1wicHhcIiksUygpfSxyZW5kZXJTbGlkZTpmdW5jdGlvbihlLHQpe3ZhciBpPXRoaXMucGFyYW1zLnZpcnR1YWw7aWYoaS5jYWNoZSYmdGhpcy52aXJ0dWFsLmNhY2hlW3RdKXJldHVybiB0aGlzLnZpcnR1YWwuY2FjaGVbdF07dmFyIGE9aS5yZW5kZXJTbGlkZT9zKGkucmVuZGVyU2xpZGUuY2FsbCh0aGlzLGUsdCkpOnMoJzxkaXYgY2xhc3M9XCInK3RoaXMucGFyYW1zLnNsaWRlQ2xhc3MrJ1wiIGRhdGEtc3dpcGVyLXNsaWRlLWluZGV4PVwiJyt0KydcIj4nK2UrXCI8L2Rpdj5cIik7cmV0dXJuIGEuYXR0cihcImRhdGEtc3dpcGVyLXNsaWRlLWluZGV4XCIpfHxhLmF0dHIoXCJkYXRhLXN3aXBlci1zbGlkZS1pbmRleFwiLHQpLGkuY2FjaGUmJih0aGlzLnZpcnR1YWwuY2FjaGVbdF09YSksYX0sYXBwZW5kU2xpZGU6ZnVuY3Rpb24oZSl7aWYoXCJvYmplY3RcIj09dHlwZW9mIGUmJlwibGVuZ3RoXCJpbiBlKWZvcih2YXIgdD0wO3Q8ZS5sZW5ndGg7dCs9MSllW3RdJiZ0aGlzLnZpcnR1YWwuc2xpZGVzLnB1c2goZVt0XSk7ZWxzZSB0aGlzLnZpcnR1YWwuc2xpZGVzLnB1c2goZSk7dGhpcy52aXJ0dWFsLnVwZGF0ZSghMCl9LHByZXBlbmRTbGlkZTpmdW5jdGlvbihlKXt2YXIgdD10aGlzLmFjdGl2ZUluZGV4LGk9dCsxLHM9MTtpZihBcnJheS5pc0FycmF5KGUpKXtmb3IodmFyIGE9MDthPGUubGVuZ3RoO2ErPTEpZVthXSYmdGhpcy52aXJ0dWFsLnNsaWRlcy51bnNoaWZ0KGVbYV0pO2k9dCtlLmxlbmd0aCxzPWUubGVuZ3RofWVsc2UgdGhpcy52aXJ0dWFsLnNsaWRlcy51bnNoaWZ0KGUpO2lmKHRoaXMucGFyYW1zLnZpcnR1YWwuY2FjaGUpe3ZhciByPXRoaXMudmlydHVhbC5jYWNoZSxuPXt9O09iamVjdC5rZXlzKHIpLmZvckVhY2goKGZ1bmN0aW9uKGUpe3ZhciB0PXJbZV0saT10LmF0dHIoXCJkYXRhLXN3aXBlci1zbGlkZS1pbmRleFwiKTtpJiZ0LmF0dHIoXCJkYXRhLXN3aXBlci1zbGlkZS1pbmRleFwiLHBhcnNlSW50KGksMTApKzEpLG5bcGFyc2VJbnQoZSwxMCkrc109dH0pKSx0aGlzLnZpcnR1YWwuY2FjaGU9bn10aGlzLnZpcnR1YWwudXBkYXRlKCEwKSx0aGlzLnNsaWRlVG8oaSwwKX0scmVtb3ZlU2xpZGU6ZnVuY3Rpb24oZSl7aWYobnVsbCE9ZSl7dmFyIHQ9dGhpcy5hY3RpdmVJbmRleDtpZihBcnJheS5pc0FycmF5KGUpKWZvcih2YXIgaT1lLmxlbmd0aC0xO2k+PTA7aS09MSl0aGlzLnZpcnR1YWwuc2xpZGVzLnNwbGljZShlW2ldLDEpLHRoaXMucGFyYW1zLnZpcnR1YWwuY2FjaGUmJmRlbGV0ZSB0aGlzLnZpcnR1YWwuY2FjaGVbZVtpXV0sZVtpXTx0JiYodC09MSksdD1NYXRoLm1heCh0LDApO2Vsc2UgdGhpcy52aXJ0dWFsLnNsaWRlcy5zcGxpY2UoZSwxKSx0aGlzLnBhcmFtcy52aXJ0dWFsLmNhY2hlJiZkZWxldGUgdGhpcy52aXJ0dWFsLmNhY2hlW2VdLGU8dCYmKHQtPTEpLHQ9TWF0aC5tYXgodCwwKTt0aGlzLnZpcnR1YWwudXBkYXRlKCEwKSx0aGlzLnNsaWRlVG8odCwwKX19LHJlbW92ZUFsbFNsaWRlczpmdW5jdGlvbigpe3RoaXMudmlydHVhbC5zbGlkZXM9W10sdGhpcy5wYXJhbXMudmlydHVhbC5jYWNoZSYmKHRoaXMudmlydHVhbC5jYWNoZT17fSksdGhpcy52aXJ0dWFsLnVwZGF0ZSghMCksdGhpcy5zbGlkZVRvKDAsMCl9fSxKPXtuYW1lOlwidmlydHVhbFwiLHBhcmFtczp7dmlydHVhbDp7ZW5hYmxlZDohMSxzbGlkZXM6W10sY2FjaGU6ITAscmVuZGVyU2xpZGU6bnVsbCxyZW5kZXJFeHRlcm5hbDpudWxsLGFkZFNsaWRlc0JlZm9yZTowLGFkZFNsaWRlc0FmdGVyOjB9fSxjcmVhdGU6ZnVuY3Rpb24oKXtuLmV4dGVuZCh0aGlzLHt2aXJ0dWFsOnt1cGRhdGU6US51cGRhdGUuYmluZCh0aGlzKSxhcHBlbmRTbGlkZTpRLmFwcGVuZFNsaWRlLmJpbmQodGhpcykscHJlcGVuZFNsaWRlOlEucHJlcGVuZFNsaWRlLmJpbmQodGhpcykscmVtb3ZlU2xpZGU6US5yZW1vdmVTbGlkZS5iaW5kKHRoaXMpLHJlbW92ZUFsbFNsaWRlczpRLnJlbW92ZUFsbFNsaWRlcy5iaW5kKHRoaXMpLHJlbmRlclNsaWRlOlEucmVuZGVyU2xpZGUuYmluZCh0aGlzKSxzbGlkZXM6dGhpcy5wYXJhbXMudmlydHVhbC5zbGlkZXMsY2FjaGU6e319fSl9LG9uOntiZWZvcmVJbml0OmZ1bmN0aW9uKCl7aWYodGhpcy5wYXJhbXMudmlydHVhbC5lbmFibGVkKXt0aGlzLmNsYXNzTmFtZXMucHVzaCh0aGlzLnBhcmFtcy5jb250YWluZXJNb2RpZmllckNsYXNzK1widmlydHVhbFwiKTt2YXIgZT17d2F0Y2hTbGlkZXNQcm9ncmVzczohMH07bi5leHRlbmQodGhpcy5wYXJhbXMsZSksbi5leHRlbmQodGhpcy5vcmlnaW5hbFBhcmFtcyxlKSx0aGlzLnBhcmFtcy5pbml0aWFsU2xpZGV8fHRoaXMudmlydHVhbC51cGRhdGUoKX19LHNldFRyYW5zbGF0ZTpmdW5jdGlvbigpe3RoaXMucGFyYW1zLnZpcnR1YWwuZW5hYmxlZCYmdGhpcy52aXJ0dWFsLnVwZGF0ZSgpfX19LGVlPXtoYW5kbGU6ZnVuY3Rpb24oaSl7dmFyIHM9dGhpcy5ydGxUcmFuc2xhdGUsYT1pO2Eub3JpZ2luYWxFdmVudCYmKGE9YS5vcmlnaW5hbEV2ZW50KTt2YXIgcj1hLmtleUNvZGV8fGEuY2hhckNvZGU7aWYoIXRoaXMuYWxsb3dTbGlkZU5leHQmJih0aGlzLmlzSG9yaXpvbnRhbCgpJiYzOT09PXJ8fHRoaXMuaXNWZXJ0aWNhbCgpJiY0MD09PXJ8fDM0PT09cikpcmV0dXJuITE7aWYoIXRoaXMuYWxsb3dTbGlkZVByZXYmJih0aGlzLmlzSG9yaXpvbnRhbCgpJiYzNz09PXJ8fHRoaXMuaXNWZXJ0aWNhbCgpJiYzOD09PXJ8fDMzPT09cikpcmV0dXJuITE7aWYoIShhLnNoaWZ0S2V5fHxhLmFsdEtleXx8YS5jdHJsS2V5fHxhLm1ldGFLZXl8fGUuYWN0aXZlRWxlbWVudCYmZS5hY3RpdmVFbGVtZW50Lm5vZGVOYW1lJiYoXCJpbnB1dFwiPT09ZS5hY3RpdmVFbGVtZW50Lm5vZGVOYW1lLnRvTG93ZXJDYXNlKCl8fFwidGV4dGFyZWFcIj09PWUuYWN0aXZlRWxlbWVudC5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpKSkpe2lmKHRoaXMucGFyYW1zLmtleWJvYXJkLm9ubHlJblZpZXdwb3J0JiYoMzM9PT1yfHwzND09PXJ8fDM3PT09cnx8Mzk9PT1yfHwzOD09PXJ8fDQwPT09cikpe3ZhciBuPSExO2lmKHRoaXMuJGVsLnBhcmVudHMoXCIuXCIrdGhpcy5wYXJhbXMuc2xpZGVDbGFzcykubGVuZ3RoPjAmJjA9PT10aGlzLiRlbC5wYXJlbnRzKFwiLlwiK3RoaXMucGFyYW1zLnNsaWRlQWN0aXZlQ2xhc3MpLmxlbmd0aClyZXR1cm47dmFyIG89dC5pbm5lcldpZHRoLGw9dC5pbm5lckhlaWdodCxkPXRoaXMuJGVsLm9mZnNldCgpO3MmJihkLmxlZnQtPXRoaXMuJGVsWzBdLnNjcm9sbExlZnQpO2Zvcih2YXIgaD1bW2QubGVmdCxkLnRvcF0sW2QubGVmdCt0aGlzLndpZHRoLGQudG9wXSxbZC5sZWZ0LGQudG9wK3RoaXMuaGVpZ2h0XSxbZC5sZWZ0K3RoaXMud2lkdGgsZC50b3ArdGhpcy5oZWlnaHRdXSxwPTA7cDxoLmxlbmd0aDtwKz0xKXt2YXIgYz1oW3BdO2NbMF0+PTAmJmNbMF08PW8mJmNbMV0+PTAmJmNbMV08PWwmJihuPSEwKX1pZighbilyZXR1cm59dGhpcy5pc0hvcml6b250YWwoKT8oMzMhPT1yJiYzNCE9PXImJjM3IT09ciYmMzkhPT1yfHwoYS5wcmV2ZW50RGVmYXVsdD9hLnByZXZlbnREZWZhdWx0KCk6YS5yZXR1cm5WYWx1ZT0hMSksKDM0IT09ciYmMzkhPT1yfHxzKSYmKDMzIT09ciYmMzchPT1yfHwhcyl8fHRoaXMuc2xpZGVOZXh0KCksKDMzIT09ciYmMzchPT1yfHxzKSYmKDM0IT09ciYmMzkhPT1yfHwhcyl8fHRoaXMuc2xpZGVQcmV2KCkpOigzMyE9PXImJjM0IT09ciYmMzghPT1yJiY0MCE9PXJ8fChhLnByZXZlbnREZWZhdWx0P2EucHJldmVudERlZmF1bHQoKTphLnJldHVyblZhbHVlPSExKSwzNCE9PXImJjQwIT09cnx8dGhpcy5zbGlkZU5leHQoKSwzMyE9PXImJjM4IT09cnx8dGhpcy5zbGlkZVByZXYoKSksdGhpcy5lbWl0KFwia2V5UHJlc3NcIixyKX19LGVuYWJsZTpmdW5jdGlvbigpe3RoaXMua2V5Ym9hcmQuZW5hYmxlZHx8KHMoZSkub24oXCJrZXlkb3duXCIsdGhpcy5rZXlib2FyZC5oYW5kbGUpLHRoaXMua2V5Ym9hcmQuZW5hYmxlZD0hMCl9LGRpc2FibGU6ZnVuY3Rpb24oKXt0aGlzLmtleWJvYXJkLmVuYWJsZWQmJihzKGUpLm9mZihcImtleWRvd25cIix0aGlzLmtleWJvYXJkLmhhbmRsZSksdGhpcy5rZXlib2FyZC5lbmFibGVkPSExKX19LHRlPXtuYW1lOlwia2V5Ym9hcmRcIixwYXJhbXM6e2tleWJvYXJkOntlbmFibGVkOiExLG9ubHlJblZpZXdwb3J0OiEwfX0sY3JlYXRlOmZ1bmN0aW9uKCl7bi5leHRlbmQodGhpcyx7a2V5Ym9hcmQ6e2VuYWJsZWQ6ITEsZW5hYmxlOmVlLmVuYWJsZS5iaW5kKHRoaXMpLGRpc2FibGU6ZWUuZGlzYWJsZS5iaW5kKHRoaXMpLGhhbmRsZTplZS5oYW5kbGUuYmluZCh0aGlzKX19KX0sb246e2luaXQ6ZnVuY3Rpb24oKXt0aGlzLnBhcmFtcy5rZXlib2FyZC5lbmFibGVkJiZ0aGlzLmtleWJvYXJkLmVuYWJsZSgpfSxkZXN0cm95OmZ1bmN0aW9uKCl7dGhpcy5rZXlib2FyZC5lbmFibGVkJiZ0aGlzLmtleWJvYXJkLmRpc2FibGUoKX19fTt2YXIgaWU9e2xhc3RTY3JvbGxUaW1lOm4ubm93KCksbGFzdEV2ZW50QmVmb3JlU25hcDp2b2lkIDAscmVjZW50V2hlZWxFdmVudHM6W10sZXZlbnQ6ZnVuY3Rpb24oKXtyZXR1cm4gdC5uYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoXCJmaXJlZm94XCIpPi0xP1wiRE9NTW91c2VTY3JvbGxcIjpmdW5jdGlvbigpe3ZhciB0PVwib253aGVlbFwiaW4gZTtpZighdCl7dmFyIGk9ZS5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO2kuc2V0QXR0cmlidXRlKFwib253aGVlbFwiLFwicmV0dXJuO1wiKSx0PVwiZnVuY3Rpb25cIj09dHlwZW9mIGkub253aGVlbH1yZXR1cm4hdCYmZS5pbXBsZW1lbnRhdGlvbiYmZS5pbXBsZW1lbnRhdGlvbi5oYXNGZWF0dXJlJiYhMCE9PWUuaW1wbGVtZW50YXRpb24uaGFzRmVhdHVyZShcIlwiLFwiXCIpJiYodD1lLmltcGxlbWVudGF0aW9uLmhhc0ZlYXR1cmUoXCJFdmVudHMud2hlZWxcIixcIjMuMFwiKSksdH0oKT9cIndoZWVsXCI6XCJtb3VzZXdoZWVsXCJ9LG5vcm1hbGl6ZTpmdW5jdGlvbihlKXt2YXIgdD0wLGk9MCxzPTAsYT0wO3JldHVyblwiZGV0YWlsXCJpbiBlJiYoaT1lLmRldGFpbCksXCJ3aGVlbERlbHRhXCJpbiBlJiYoaT0tZS53aGVlbERlbHRhLzEyMCksXCJ3aGVlbERlbHRhWVwiaW4gZSYmKGk9LWUud2hlZWxEZWx0YVkvMTIwKSxcIndoZWVsRGVsdGFYXCJpbiBlJiYodD0tZS53aGVlbERlbHRhWC8xMjApLFwiYXhpc1wiaW4gZSYmZS5heGlzPT09ZS5IT1JJWk9OVEFMX0FYSVMmJih0PWksaT0wKSxzPTEwKnQsYT0xMCppLFwiZGVsdGFZXCJpbiBlJiYoYT1lLmRlbHRhWSksXCJkZWx0YVhcImluIGUmJihzPWUuZGVsdGFYKSxlLnNoaWZ0S2V5JiYhcyYmKHM9YSxhPTApLChzfHxhKSYmZS5kZWx0YU1vZGUmJigxPT09ZS5kZWx0YU1vZGU/KHMqPTQwLGEqPTQwKToocyo9ODAwLGEqPTgwMCkpLHMmJiF0JiYodD1zPDE/LTE6MSksYSYmIWkmJihpPWE8MT8tMToxKSx7c3Bpblg6dCxzcGluWTppLHBpeGVsWDpzLHBpeGVsWTphfX0saGFuZGxlTW91c2VFbnRlcjpmdW5jdGlvbigpe3RoaXMubW91c2VFbnRlcmVkPSEwfSxoYW5kbGVNb3VzZUxlYXZlOmZ1bmN0aW9uKCl7dGhpcy5tb3VzZUVudGVyZWQ9ITF9LGhhbmRsZTpmdW5jdGlvbihlKXt2YXIgdD1lLGk9dGhpcyxhPWkucGFyYW1zLm1vdXNld2hlZWw7aS5wYXJhbXMuY3NzTW9kZSYmdC5wcmV2ZW50RGVmYXVsdCgpO3ZhciByPWkuJGVsO2lmKFwiY29udGFpbmVyXCIhPT1pLnBhcmFtcy5tb3VzZXdoZWVsLmV2ZW50c1RhcmdlZCYmKHI9cyhpLnBhcmFtcy5tb3VzZXdoZWVsLmV2ZW50c1RhcmdlZCkpLCFpLm1vdXNlRW50ZXJlZCYmIXJbMF0uY29udGFpbnModC50YXJnZXQpJiYhYS5yZWxlYXNlT25FZGdlcylyZXR1cm4hMDt0Lm9yaWdpbmFsRXZlbnQmJih0PXQub3JpZ2luYWxFdmVudCk7dmFyIG89MCxsPWkucnRsVHJhbnNsYXRlPy0xOjEsZD1pZS5ub3JtYWxpemUodCk7aWYoYS5mb3JjZVRvQXhpcylpZihpLmlzSG9yaXpvbnRhbCgpKXtpZighKE1hdGguYWJzKGQucGl4ZWxYKT5NYXRoLmFicyhkLnBpeGVsWSkpKXJldHVybiEwO289ZC5waXhlbFgqbH1lbHNle2lmKCEoTWF0aC5hYnMoZC5waXhlbFkpPk1hdGguYWJzKGQucGl4ZWxYKSkpcmV0dXJuITA7bz1kLnBpeGVsWX1lbHNlIG89TWF0aC5hYnMoZC5waXhlbFgpPk1hdGguYWJzKGQucGl4ZWxZKT8tZC5waXhlbFgqbDotZC5waXhlbFk7aWYoMD09PW8pcmV0dXJuITA7aWYoYS5pbnZlcnQmJihvPS1vKSxpLnBhcmFtcy5mcmVlTW9kZSl7dmFyIGg9e3RpbWU6bi5ub3coKSxkZWx0YTpNYXRoLmFicyhvKSxkaXJlY3Rpb246TWF0aC5zaWduKG8pfSxwPWkubW91c2V3aGVlbC5sYXN0RXZlbnRCZWZvcmVTbmFwLGM9cCYmaC50aW1lPHAudGltZSs1MDAmJmguZGVsdGE8PXAuZGVsdGEmJmguZGlyZWN0aW9uPT09cC5kaXJlY3Rpb247aWYoIWMpe2kubW91c2V3aGVlbC5sYXN0RXZlbnRCZWZvcmVTbmFwPXZvaWQgMCxpLnBhcmFtcy5sb29wJiZpLmxvb3BGaXgoKTt2YXIgdT1pLmdldFRyYW5zbGF0ZSgpK28qYS5zZW5zaXRpdml0eSx2PWkuaXNCZWdpbm5pbmcsZj1pLmlzRW5kO2lmKHU+PWkubWluVHJhbnNsYXRlKCkmJih1PWkubWluVHJhbnNsYXRlKCkpLHU8PWkubWF4VHJhbnNsYXRlKCkmJih1PWkubWF4VHJhbnNsYXRlKCkpLGkuc2V0VHJhbnNpdGlvbigwKSxpLnNldFRyYW5zbGF0ZSh1KSxpLnVwZGF0ZVByb2dyZXNzKCksaS51cGRhdGVBY3RpdmVJbmRleCgpLGkudXBkYXRlU2xpZGVzQ2xhc3NlcygpLCghdiYmaS5pc0JlZ2lubmluZ3x8IWYmJmkuaXNFbmQpJiZpLnVwZGF0ZVNsaWRlc0NsYXNzZXMoKSxpLnBhcmFtcy5mcmVlTW9kZVN0aWNreSl7Y2xlYXJUaW1lb3V0KGkubW91c2V3aGVlbC50aW1lb3V0KSxpLm1vdXNld2hlZWwudGltZW91dD12b2lkIDA7dmFyIG09aS5tb3VzZXdoZWVsLnJlY2VudFdoZWVsRXZlbnRzO20ubGVuZ3RoPj0xNSYmbS5zaGlmdCgpO3ZhciBnPW0ubGVuZ3RoP21bbS5sZW5ndGgtMV06dm9pZCAwLGI9bVswXTtpZihtLnB1c2goaCksZyYmKGguZGVsdGE+Zy5kZWx0YXx8aC5kaXJlY3Rpb24hPT1nLmRpcmVjdGlvbikpbS5zcGxpY2UoMCk7ZWxzZSBpZihtLmxlbmd0aD49MTUmJmgudGltZS1iLnRpbWU8NTAwJiZiLmRlbHRhLWguZGVsdGE+PTEmJmguZGVsdGE8PTYpe3ZhciB3PW8+MD8uODouMjtpLm1vdXNld2hlZWwubGFzdEV2ZW50QmVmb3JlU25hcD1oLG0uc3BsaWNlKDApLGkubW91c2V3aGVlbC50aW1lb3V0PW4ubmV4dFRpY2soKGZ1bmN0aW9uKCl7aS5zbGlkZVRvQ2xvc2VzdChpLnBhcmFtcy5zcGVlZCwhMCx2b2lkIDAsdyl9KSwwKX1pLm1vdXNld2hlZWwudGltZW91dHx8KGkubW91c2V3aGVlbC50aW1lb3V0PW4ubmV4dFRpY2soKGZ1bmN0aW9uKCl7aS5tb3VzZXdoZWVsLmxhc3RFdmVudEJlZm9yZVNuYXA9aCxtLnNwbGljZSgwKSxpLnNsaWRlVG9DbG9zZXN0KGkucGFyYW1zLnNwZWVkLCEwLHZvaWQgMCwuNSl9KSw1MDApKX1pZihjfHxpLmVtaXQoXCJzY3JvbGxcIix0KSxpLnBhcmFtcy5hdXRvcGxheSYmaS5wYXJhbXMuYXV0b3BsYXlEaXNhYmxlT25JbnRlcmFjdGlvbiYmaS5hdXRvcGxheS5zdG9wKCksdT09PWkubWluVHJhbnNsYXRlKCl8fHU9PT1pLm1heFRyYW5zbGF0ZSgpKXJldHVybiEwfX1lbHNle3ZhciB5PXt0aW1lOm4ubm93KCksZGVsdGE6TWF0aC5hYnMobyksZGlyZWN0aW9uOk1hdGguc2lnbihvKSxyYXc6ZX0seD1pLm1vdXNld2hlZWwucmVjZW50V2hlZWxFdmVudHM7eC5sZW5ndGg+PTImJnguc2hpZnQoKTt2YXIgVD14Lmxlbmd0aD94W3gubGVuZ3RoLTFdOnZvaWQgMDtpZih4LnB1c2goeSksVD8oeS5kaXJlY3Rpb24hPT1ULmRpcmVjdGlvbnx8eS5kZWx0YT5ULmRlbHRhKSYmaS5tb3VzZXdoZWVsLmFuaW1hdGVTbGlkZXIoeSk6aS5tb3VzZXdoZWVsLmFuaW1hdGVTbGlkZXIoeSksaS5tb3VzZXdoZWVsLnJlbGVhc2VTY3JvbGwoeSkpcmV0dXJuITB9cmV0dXJuIHQucHJldmVudERlZmF1bHQ/dC5wcmV2ZW50RGVmYXVsdCgpOnQucmV0dXJuVmFsdWU9ITEsITF9LGFuaW1hdGVTbGlkZXI6ZnVuY3Rpb24oZSl7cmV0dXJuIGUuZGVsdGE+PTYmJm4ubm93KCktdGhpcy5tb3VzZXdoZWVsLmxhc3RTY3JvbGxUaW1lPDYwfHwoZS5kaXJlY3Rpb248MD90aGlzLmlzRW5kJiYhdGhpcy5wYXJhbXMubG9vcHx8dGhpcy5hbmltYXRpbmd8fCh0aGlzLnNsaWRlTmV4dCgpLHRoaXMuZW1pdChcInNjcm9sbFwiLGUucmF3KSk6dGhpcy5pc0JlZ2lubmluZyYmIXRoaXMucGFyYW1zLmxvb3B8fHRoaXMuYW5pbWF0aW5nfHwodGhpcy5zbGlkZVByZXYoKSx0aGlzLmVtaXQoXCJzY3JvbGxcIixlLnJhdykpLHRoaXMubW91c2V3aGVlbC5sYXN0U2Nyb2xsVGltZT0obmV3IHQuRGF0ZSkuZ2V0VGltZSgpLCExKX0scmVsZWFzZVNjcm9sbDpmdW5jdGlvbihlKXt2YXIgdD10aGlzLnBhcmFtcy5tb3VzZXdoZWVsO2lmKGUuZGlyZWN0aW9uPDApe2lmKHRoaXMuaXNFbmQmJiF0aGlzLnBhcmFtcy5sb29wJiZ0LnJlbGVhc2VPbkVkZ2VzKXJldHVybiEwfWVsc2UgaWYodGhpcy5pc0JlZ2lubmluZyYmIXRoaXMucGFyYW1zLmxvb3AmJnQucmVsZWFzZU9uRWRnZXMpcmV0dXJuITA7cmV0dXJuITF9LGVuYWJsZTpmdW5jdGlvbigpe3ZhciBlPWllLmV2ZW50KCk7aWYodGhpcy5wYXJhbXMuY3NzTW9kZSlyZXR1cm4gdGhpcy53cmFwcGVyRWwucmVtb3ZlRXZlbnRMaXN0ZW5lcihlLHRoaXMubW91c2V3aGVlbC5oYW5kbGUpLCEwO2lmKCFlKXJldHVybiExO2lmKHRoaXMubW91c2V3aGVlbC5lbmFibGVkKXJldHVybiExO3ZhciB0PXRoaXMuJGVsO3JldHVyblwiY29udGFpbmVyXCIhPT10aGlzLnBhcmFtcy5tb3VzZXdoZWVsLmV2ZW50c1RhcmdlZCYmKHQ9cyh0aGlzLnBhcmFtcy5tb3VzZXdoZWVsLmV2ZW50c1RhcmdlZCkpLHQub24oXCJtb3VzZWVudGVyXCIsdGhpcy5tb3VzZXdoZWVsLmhhbmRsZU1vdXNlRW50ZXIpLHQub24oXCJtb3VzZWxlYXZlXCIsdGhpcy5tb3VzZXdoZWVsLmhhbmRsZU1vdXNlTGVhdmUpLHQub24oZSx0aGlzLm1vdXNld2hlZWwuaGFuZGxlKSx0aGlzLm1vdXNld2hlZWwuZW5hYmxlZD0hMCwhMH0sZGlzYWJsZTpmdW5jdGlvbigpe3ZhciBlPWllLmV2ZW50KCk7aWYodGhpcy5wYXJhbXMuY3NzTW9kZSlyZXR1cm4gdGhpcy53cmFwcGVyRWwuYWRkRXZlbnRMaXN0ZW5lcihlLHRoaXMubW91c2V3aGVlbC5oYW5kbGUpLCEwO2lmKCFlKXJldHVybiExO2lmKCF0aGlzLm1vdXNld2hlZWwuZW5hYmxlZClyZXR1cm4hMTt2YXIgdD10aGlzLiRlbDtyZXR1cm5cImNvbnRhaW5lclwiIT09dGhpcy5wYXJhbXMubW91c2V3aGVlbC5ldmVudHNUYXJnZWQmJih0PXModGhpcy5wYXJhbXMubW91c2V3aGVlbC5ldmVudHNUYXJnZWQpKSx0Lm9mZihlLHRoaXMubW91c2V3aGVlbC5oYW5kbGUpLHRoaXMubW91c2V3aGVlbC5lbmFibGVkPSExLCEwfX0sc2U9e3VwZGF0ZTpmdW5jdGlvbigpe3ZhciBlPXRoaXMucGFyYW1zLm5hdmlnYXRpb247aWYoIXRoaXMucGFyYW1zLmxvb3Ape3ZhciB0PXRoaXMubmF2aWdhdGlvbixpPXQuJG5leHRFbCxzPXQuJHByZXZFbDtzJiZzLmxlbmd0aD4wJiYodGhpcy5pc0JlZ2lubmluZz9zLmFkZENsYXNzKGUuZGlzYWJsZWRDbGFzcyk6cy5yZW1vdmVDbGFzcyhlLmRpc2FibGVkQ2xhc3MpLHNbdGhpcy5wYXJhbXMud2F0Y2hPdmVyZmxvdyYmdGhpcy5pc0xvY2tlZD9cImFkZENsYXNzXCI6XCJyZW1vdmVDbGFzc1wiXShlLmxvY2tDbGFzcykpLGkmJmkubGVuZ3RoPjAmJih0aGlzLmlzRW5kP2kuYWRkQ2xhc3MoZS5kaXNhYmxlZENsYXNzKTppLnJlbW92ZUNsYXNzKGUuZGlzYWJsZWRDbGFzcyksaVt0aGlzLnBhcmFtcy53YXRjaE92ZXJmbG93JiZ0aGlzLmlzTG9ja2VkP1wiYWRkQ2xhc3NcIjpcInJlbW92ZUNsYXNzXCJdKGUubG9ja0NsYXNzKSl9fSxvblByZXZDbGljazpmdW5jdGlvbihlKXtlLnByZXZlbnREZWZhdWx0KCksdGhpcy5pc0JlZ2lubmluZyYmIXRoaXMucGFyYW1zLmxvb3B8fHRoaXMuc2xpZGVQcmV2KCl9LG9uTmV4dENsaWNrOmZ1bmN0aW9uKGUpe2UucHJldmVudERlZmF1bHQoKSx0aGlzLmlzRW5kJiYhdGhpcy5wYXJhbXMubG9vcHx8dGhpcy5zbGlkZU5leHQoKX0saW5pdDpmdW5jdGlvbigpe3ZhciBlLHQsaT10aGlzLnBhcmFtcy5uYXZpZ2F0aW9uOyhpLm5leHRFbHx8aS5wcmV2RWwpJiYoaS5uZXh0RWwmJihlPXMoaS5uZXh0RWwpLHRoaXMucGFyYW1zLnVuaXF1ZU5hdkVsZW1lbnRzJiZcInN0cmluZ1wiPT10eXBlb2YgaS5uZXh0RWwmJmUubGVuZ3RoPjEmJjE9PT10aGlzLiRlbC5maW5kKGkubmV4dEVsKS5sZW5ndGgmJihlPXRoaXMuJGVsLmZpbmQoaS5uZXh0RWwpKSksaS5wcmV2RWwmJih0PXMoaS5wcmV2RWwpLHRoaXMucGFyYW1zLnVuaXF1ZU5hdkVsZW1lbnRzJiZcInN0cmluZ1wiPT10eXBlb2YgaS5wcmV2RWwmJnQubGVuZ3RoPjEmJjE9PT10aGlzLiRlbC5maW5kKGkucHJldkVsKS5sZW5ndGgmJih0PXRoaXMuJGVsLmZpbmQoaS5wcmV2RWwpKSksZSYmZS5sZW5ndGg+MCYmZS5vbihcImNsaWNrXCIsdGhpcy5uYXZpZ2F0aW9uLm9uTmV4dENsaWNrKSx0JiZ0Lmxlbmd0aD4wJiZ0Lm9uKFwiY2xpY2tcIix0aGlzLm5hdmlnYXRpb24ub25QcmV2Q2xpY2spLG4uZXh0ZW5kKHRoaXMubmF2aWdhdGlvbix7JG5leHRFbDplLG5leHRFbDplJiZlWzBdLCRwcmV2RWw6dCxwcmV2RWw6dCYmdFswXX0pKX0sZGVzdHJveTpmdW5jdGlvbigpe3ZhciBlPXRoaXMubmF2aWdhdGlvbix0PWUuJG5leHRFbCxpPWUuJHByZXZFbDt0JiZ0Lmxlbmd0aCYmKHQub2ZmKFwiY2xpY2tcIix0aGlzLm5hdmlnYXRpb24ub25OZXh0Q2xpY2spLHQucmVtb3ZlQ2xhc3ModGhpcy5wYXJhbXMubmF2aWdhdGlvbi5kaXNhYmxlZENsYXNzKSksaSYmaS5sZW5ndGgmJihpLm9mZihcImNsaWNrXCIsdGhpcy5uYXZpZ2F0aW9uLm9uUHJldkNsaWNrKSxpLnJlbW92ZUNsYXNzKHRoaXMucGFyYW1zLm5hdmlnYXRpb24uZGlzYWJsZWRDbGFzcykpfX0sYWU9e3VwZGF0ZTpmdW5jdGlvbigpe3ZhciBlPXRoaXMucnRsLHQ9dGhpcy5wYXJhbXMucGFnaW5hdGlvbjtpZih0LmVsJiZ0aGlzLnBhZ2luYXRpb24uZWwmJnRoaXMucGFnaW5hdGlvbi4kZWwmJjAhPT10aGlzLnBhZ2luYXRpb24uJGVsLmxlbmd0aCl7dmFyIGksYT10aGlzLnZpcnR1YWwmJnRoaXMucGFyYW1zLnZpcnR1YWwuZW5hYmxlZD90aGlzLnZpcnR1YWwuc2xpZGVzLmxlbmd0aDp0aGlzLnNsaWRlcy5sZW5ndGgscj10aGlzLnBhZ2luYXRpb24uJGVsLG49dGhpcy5wYXJhbXMubG9vcD9NYXRoLmNlaWwoKGEtMip0aGlzLmxvb3BlZFNsaWRlcykvdGhpcy5wYXJhbXMuc2xpZGVzUGVyR3JvdXApOnRoaXMuc25hcEdyaWQubGVuZ3RoO2lmKHRoaXMucGFyYW1zLmxvb3A/KChpPU1hdGguY2VpbCgodGhpcy5hY3RpdmVJbmRleC10aGlzLmxvb3BlZFNsaWRlcykvdGhpcy5wYXJhbXMuc2xpZGVzUGVyR3JvdXApKT5hLTEtMip0aGlzLmxvb3BlZFNsaWRlcyYmKGktPWEtMip0aGlzLmxvb3BlZFNsaWRlcyksaT5uLTEmJihpLT1uKSxpPDAmJlwiYnVsbGV0c1wiIT09dGhpcy5wYXJhbXMucGFnaW5hdGlvblR5cGUmJihpPW4raSkpOmk9dm9pZCAwIT09dGhpcy5zbmFwSW5kZXg/dGhpcy5zbmFwSW5kZXg6dGhpcy5hY3RpdmVJbmRleHx8MCxcImJ1bGxldHNcIj09PXQudHlwZSYmdGhpcy5wYWdpbmF0aW9uLmJ1bGxldHMmJnRoaXMucGFnaW5hdGlvbi5idWxsZXRzLmxlbmd0aD4wKXt2YXIgbyxsLGQsaD10aGlzLnBhZ2luYXRpb24uYnVsbGV0cztpZih0LmR5bmFtaWNCdWxsZXRzJiYodGhpcy5wYWdpbmF0aW9uLmJ1bGxldFNpemU9aC5lcSgwKVt0aGlzLmlzSG9yaXpvbnRhbCgpP1wib3V0ZXJXaWR0aFwiOlwib3V0ZXJIZWlnaHRcIl0oITApLHIuY3NzKHRoaXMuaXNIb3Jpem9udGFsKCk/XCJ3aWR0aFwiOlwiaGVpZ2h0XCIsdGhpcy5wYWdpbmF0aW9uLmJ1bGxldFNpemUqKHQuZHluYW1pY01haW5CdWxsZXRzKzQpK1wicHhcIiksdC5keW5hbWljTWFpbkJ1bGxldHM+MSYmdm9pZCAwIT09dGhpcy5wcmV2aW91c0luZGV4JiYodGhpcy5wYWdpbmF0aW9uLmR5bmFtaWNCdWxsZXRJbmRleCs9aS10aGlzLnByZXZpb3VzSW5kZXgsdGhpcy5wYWdpbmF0aW9uLmR5bmFtaWNCdWxsZXRJbmRleD50LmR5bmFtaWNNYWluQnVsbGV0cy0xP3RoaXMucGFnaW5hdGlvbi5keW5hbWljQnVsbGV0SW5kZXg9dC5keW5hbWljTWFpbkJ1bGxldHMtMTp0aGlzLnBhZ2luYXRpb24uZHluYW1pY0J1bGxldEluZGV4PDAmJih0aGlzLnBhZ2luYXRpb24uZHluYW1pY0J1bGxldEluZGV4PTApKSxvPWktdGhpcy5wYWdpbmF0aW9uLmR5bmFtaWNCdWxsZXRJbmRleCxkPSgobD1vKyhNYXRoLm1pbihoLmxlbmd0aCx0LmR5bmFtaWNNYWluQnVsbGV0cyktMSkpK28pLzIpLGgucmVtb3ZlQ2xhc3ModC5idWxsZXRBY3RpdmVDbGFzcytcIiBcIit0LmJ1bGxldEFjdGl2ZUNsYXNzK1wiLW5leHQgXCIrdC5idWxsZXRBY3RpdmVDbGFzcytcIi1uZXh0LW5leHQgXCIrdC5idWxsZXRBY3RpdmVDbGFzcytcIi1wcmV2IFwiK3QuYnVsbGV0QWN0aXZlQ2xhc3MrXCItcHJldi1wcmV2IFwiK3QuYnVsbGV0QWN0aXZlQ2xhc3MrXCItbWFpblwiKSxyLmxlbmd0aD4xKWguZWFjaCgoZnVuY3Rpb24oZSxhKXt2YXIgcj1zKGEpLG49ci5pbmRleCgpO249PT1pJiZyLmFkZENsYXNzKHQuYnVsbGV0QWN0aXZlQ2xhc3MpLHQuZHluYW1pY0J1bGxldHMmJihuPj1vJiZuPD1sJiZyLmFkZENsYXNzKHQuYnVsbGV0QWN0aXZlQ2xhc3MrXCItbWFpblwiKSxuPT09byYmci5wcmV2KCkuYWRkQ2xhc3ModC5idWxsZXRBY3RpdmVDbGFzcytcIi1wcmV2XCIpLnByZXYoKS5hZGRDbGFzcyh0LmJ1bGxldEFjdGl2ZUNsYXNzK1wiLXByZXYtcHJldlwiKSxuPT09bCYmci5uZXh0KCkuYWRkQ2xhc3ModC5idWxsZXRBY3RpdmVDbGFzcytcIi1uZXh0XCIpLm5leHQoKS5hZGRDbGFzcyh0LmJ1bGxldEFjdGl2ZUNsYXNzK1wiLW5leHQtbmV4dFwiKSl9KSk7ZWxzZXt2YXIgcD1oLmVxKGkpLGM9cC5pbmRleCgpO2lmKHAuYWRkQ2xhc3ModC5idWxsZXRBY3RpdmVDbGFzcyksdC5keW5hbWljQnVsbGV0cyl7Zm9yKHZhciB1PWguZXEobyksdj1oLmVxKGwpLGY9bztmPD1sO2YrPTEpaC5lcShmKS5hZGRDbGFzcyh0LmJ1bGxldEFjdGl2ZUNsYXNzK1wiLW1haW5cIik7aWYodGhpcy5wYXJhbXMubG9vcClpZihjPj1oLmxlbmd0aC10LmR5bmFtaWNNYWluQnVsbGV0cyl7Zm9yKHZhciBtPXQuZHluYW1pY01haW5CdWxsZXRzO20+PTA7bS09MSloLmVxKGgubGVuZ3RoLW0pLmFkZENsYXNzKHQuYnVsbGV0QWN0aXZlQ2xhc3MrXCItbWFpblwiKTtoLmVxKGgubGVuZ3RoLXQuZHluYW1pY01haW5CdWxsZXRzLTEpLmFkZENsYXNzKHQuYnVsbGV0QWN0aXZlQ2xhc3MrXCItcHJldlwiKX1lbHNlIHUucHJldigpLmFkZENsYXNzKHQuYnVsbGV0QWN0aXZlQ2xhc3MrXCItcHJldlwiKS5wcmV2KCkuYWRkQ2xhc3ModC5idWxsZXRBY3RpdmVDbGFzcytcIi1wcmV2LXByZXZcIiksdi5uZXh0KCkuYWRkQ2xhc3ModC5idWxsZXRBY3RpdmVDbGFzcytcIi1uZXh0XCIpLm5leHQoKS5hZGRDbGFzcyh0LmJ1bGxldEFjdGl2ZUNsYXNzK1wiLW5leHQtbmV4dFwiKTtlbHNlIHUucHJldigpLmFkZENsYXNzKHQuYnVsbGV0QWN0aXZlQ2xhc3MrXCItcHJldlwiKS5wcmV2KCkuYWRkQ2xhc3ModC5idWxsZXRBY3RpdmVDbGFzcytcIi1wcmV2LXByZXZcIiksdi5uZXh0KCkuYWRkQ2xhc3ModC5idWxsZXRBY3RpdmVDbGFzcytcIi1uZXh0XCIpLm5leHQoKS5hZGRDbGFzcyh0LmJ1bGxldEFjdGl2ZUNsYXNzK1wiLW5leHQtbmV4dFwiKX19aWYodC5keW5hbWljQnVsbGV0cyl7dmFyIGc9TWF0aC5taW4oaC5sZW5ndGgsdC5keW5hbWljTWFpbkJ1bGxldHMrNCksYj0odGhpcy5wYWdpbmF0aW9uLmJ1bGxldFNpemUqZy10aGlzLnBhZ2luYXRpb24uYnVsbGV0U2l6ZSkvMi1kKnRoaXMucGFnaW5hdGlvbi5idWxsZXRTaXplLHc9ZT9cInJpZ2h0XCI6XCJsZWZ0XCI7aC5jc3ModGhpcy5pc0hvcml6b250YWwoKT93OlwidG9wXCIsYitcInB4XCIpfX1pZihcImZyYWN0aW9uXCI9PT10LnR5cGUmJihyLmZpbmQoXCIuXCIrdC5jdXJyZW50Q2xhc3MpLnRleHQodC5mb3JtYXRGcmFjdGlvbkN1cnJlbnQoaSsxKSksci5maW5kKFwiLlwiK3QudG90YWxDbGFzcykudGV4dCh0LmZvcm1hdEZyYWN0aW9uVG90YWwobikpKSxcInByb2dyZXNzYmFyXCI9PT10LnR5cGUpe3ZhciB5O3k9dC5wcm9ncmVzc2Jhck9wcG9zaXRlP3RoaXMuaXNIb3Jpem9udGFsKCk/XCJ2ZXJ0aWNhbFwiOlwiaG9yaXpvbnRhbFwiOnRoaXMuaXNIb3Jpem9udGFsKCk/XCJob3Jpem9udGFsXCI6XCJ2ZXJ0aWNhbFwiO3ZhciB4PShpKzEpL24sVD0xLEU9MTtcImhvcml6b250YWxcIj09PXk/VD14OkU9eCxyLmZpbmQoXCIuXCIrdC5wcm9ncmVzc2JhckZpbGxDbGFzcykudHJhbnNmb3JtKFwidHJhbnNsYXRlM2QoMCwwLDApIHNjYWxlWChcIitUK1wiKSBzY2FsZVkoXCIrRStcIilcIikudHJhbnNpdGlvbih0aGlzLnBhcmFtcy5zcGVlZCl9XCJjdXN0b21cIj09PXQudHlwZSYmdC5yZW5kZXJDdXN0b20/KHIuaHRtbCh0LnJlbmRlckN1c3RvbSh0aGlzLGkrMSxuKSksdGhpcy5lbWl0KFwicGFnaW5hdGlvblJlbmRlclwiLHRoaXMsclswXSkpOnRoaXMuZW1pdChcInBhZ2luYXRpb25VcGRhdGVcIix0aGlzLHJbMF0pLHJbdGhpcy5wYXJhbXMud2F0Y2hPdmVyZmxvdyYmdGhpcy5pc0xvY2tlZD9cImFkZENsYXNzXCI6XCJyZW1vdmVDbGFzc1wiXSh0LmxvY2tDbGFzcyl9fSxyZW5kZXI6ZnVuY3Rpb24oKXt2YXIgZT10aGlzLnBhcmFtcy5wYWdpbmF0aW9uO2lmKGUuZWwmJnRoaXMucGFnaW5hdGlvbi5lbCYmdGhpcy5wYWdpbmF0aW9uLiRlbCYmMCE9PXRoaXMucGFnaW5hdGlvbi4kZWwubGVuZ3RoKXt2YXIgdD10aGlzLnZpcnR1YWwmJnRoaXMucGFyYW1zLnZpcnR1YWwuZW5hYmxlZD90aGlzLnZpcnR1YWwuc2xpZGVzLmxlbmd0aDp0aGlzLnNsaWRlcy5sZW5ndGgsaT10aGlzLnBhZ2luYXRpb24uJGVsLHM9XCJcIjtpZihcImJ1bGxldHNcIj09PWUudHlwZSl7Zm9yKHZhciBhPXRoaXMucGFyYW1zLmxvb3A/TWF0aC5jZWlsKCh0LTIqdGhpcy5sb29wZWRTbGlkZXMpL3RoaXMucGFyYW1zLnNsaWRlc1Blckdyb3VwKTp0aGlzLnNuYXBHcmlkLmxlbmd0aCxyPTA7cjxhO3IrPTEpZS5yZW5kZXJCdWxsZXQ/cys9ZS5yZW5kZXJCdWxsZXQuY2FsbCh0aGlzLHIsZS5idWxsZXRDbGFzcyk6cys9XCI8XCIrZS5idWxsZXRFbGVtZW50KycgY2xhc3M9XCInK2UuYnVsbGV0Q2xhc3MrJ1wiPjwvJytlLmJ1bGxldEVsZW1lbnQrXCI+XCI7aS5odG1sKHMpLHRoaXMucGFnaW5hdGlvbi5idWxsZXRzPWkuZmluZChcIi5cIitlLmJ1bGxldENsYXNzKX1cImZyYWN0aW9uXCI9PT1lLnR5cGUmJihzPWUucmVuZGVyRnJhY3Rpb24/ZS5yZW5kZXJGcmFjdGlvbi5jYWxsKHRoaXMsZS5jdXJyZW50Q2xhc3MsZS50b3RhbENsYXNzKTonPHNwYW4gY2xhc3M9XCInK2UuY3VycmVudENsYXNzKydcIj48L3NwYW4+IC8gPHNwYW4gY2xhc3M9XCInK2UudG90YWxDbGFzcysnXCI+PC9zcGFuPicsaS5odG1sKHMpKSxcInByb2dyZXNzYmFyXCI9PT1lLnR5cGUmJihzPWUucmVuZGVyUHJvZ3Jlc3NiYXI/ZS5yZW5kZXJQcm9ncmVzc2Jhci5jYWxsKHRoaXMsZS5wcm9ncmVzc2JhckZpbGxDbGFzcyk6JzxzcGFuIGNsYXNzPVwiJytlLnByb2dyZXNzYmFyRmlsbENsYXNzKydcIj48L3NwYW4+JyxpLmh0bWwocykpLFwiY3VzdG9tXCIhPT1lLnR5cGUmJnRoaXMuZW1pdChcInBhZ2luYXRpb25SZW5kZXJcIix0aGlzLnBhZ2luYXRpb24uJGVsWzBdKX19LGluaXQ6ZnVuY3Rpb24oKXt2YXIgZT10aGlzLHQ9ZS5wYXJhbXMucGFnaW5hdGlvbjtpZih0LmVsKXt2YXIgaT1zKHQuZWwpOzAhPT1pLmxlbmd0aCYmKGUucGFyYW1zLnVuaXF1ZU5hdkVsZW1lbnRzJiZcInN0cmluZ1wiPT10eXBlb2YgdC5lbCYmaS5sZW5ndGg+MSYmMT09PWUuJGVsLmZpbmQodC5lbCkubGVuZ3RoJiYoaT1lLiRlbC5maW5kKHQuZWwpKSxcImJ1bGxldHNcIj09PXQudHlwZSYmdC5jbGlja2FibGUmJmkuYWRkQ2xhc3ModC5jbGlja2FibGVDbGFzcyksaS5hZGRDbGFzcyh0Lm1vZGlmaWVyQ2xhc3MrdC50eXBlKSxcImJ1bGxldHNcIj09PXQudHlwZSYmdC5keW5hbWljQnVsbGV0cyYmKGkuYWRkQ2xhc3MoXCJcIit0Lm1vZGlmaWVyQ2xhc3MrdC50eXBlK1wiLWR5bmFtaWNcIiksZS5wYWdpbmF0aW9uLmR5bmFtaWNCdWxsZXRJbmRleD0wLHQuZHluYW1pY01haW5CdWxsZXRzPDEmJih0LmR5bmFtaWNNYWluQnVsbGV0cz0xKSksXCJwcm9ncmVzc2JhclwiPT09dC50eXBlJiZ0LnByb2dyZXNzYmFyT3Bwb3NpdGUmJmkuYWRkQ2xhc3ModC5wcm9ncmVzc2Jhck9wcG9zaXRlQ2xhc3MpLHQuY2xpY2thYmxlJiZpLm9uKFwiY2xpY2tcIixcIi5cIit0LmJ1bGxldENsYXNzLChmdW5jdGlvbih0KXt0LnByZXZlbnREZWZhdWx0KCk7dmFyIGk9cyh0aGlzKS5pbmRleCgpKmUucGFyYW1zLnNsaWRlc1Blckdyb3VwO2UucGFyYW1zLmxvb3AmJihpKz1lLmxvb3BlZFNsaWRlcyksZS5zbGlkZVRvKGkpfSkpLG4uZXh0ZW5kKGUucGFnaW5hdGlvbix7JGVsOmksZWw6aVswXX0pKX19LGRlc3Ryb3k6ZnVuY3Rpb24oKXt2YXIgZT10aGlzLnBhcmFtcy5wYWdpbmF0aW9uO2lmKGUuZWwmJnRoaXMucGFnaW5hdGlvbi5lbCYmdGhpcy5wYWdpbmF0aW9uLiRlbCYmMCE9PXRoaXMucGFnaW5hdGlvbi4kZWwubGVuZ3RoKXt2YXIgdD10aGlzLnBhZ2luYXRpb24uJGVsO3QucmVtb3ZlQ2xhc3MoZS5oaWRkZW5DbGFzcyksdC5yZW1vdmVDbGFzcyhlLm1vZGlmaWVyQ2xhc3MrZS50eXBlKSx0aGlzLnBhZ2luYXRpb24uYnVsbGV0cyYmdGhpcy5wYWdpbmF0aW9uLmJ1bGxldHMucmVtb3ZlQ2xhc3MoZS5idWxsZXRBY3RpdmVDbGFzcyksZS5jbGlja2FibGUmJnQub2ZmKFwiY2xpY2tcIixcIi5cIitlLmJ1bGxldENsYXNzKX19fSxyZT17c2V0VHJhbnNsYXRlOmZ1bmN0aW9uKCl7aWYodGhpcy5wYXJhbXMuc2Nyb2xsYmFyLmVsJiZ0aGlzLnNjcm9sbGJhci5lbCl7dmFyIGU9dGhpcy5zY3JvbGxiYXIsdD10aGlzLnJ0bFRyYW5zbGF0ZSxpPXRoaXMucHJvZ3Jlc3Mscz1lLmRyYWdTaXplLGE9ZS50cmFja1NpemUscj1lLiRkcmFnRWwsbj1lLiRlbCxvPXRoaXMucGFyYW1zLnNjcm9sbGJhcixsPXMsZD0oYS1zKSppO3Q/KGQ9LWQpPjA/KGw9cy1kLGQ9MCk6LWQrcz5hJiYobD1hK2QpOmQ8MD8obD1zK2QsZD0wKTpkK3M+YSYmKGw9YS1kKSx0aGlzLmlzSG9yaXpvbnRhbCgpPyhyLnRyYW5zZm9ybShcInRyYW5zbGF0ZTNkKFwiK2QrXCJweCwgMCwgMClcIiksclswXS5zdHlsZS53aWR0aD1sK1wicHhcIik6KHIudHJhbnNmb3JtKFwidHJhbnNsYXRlM2QoMHB4LCBcIitkK1wicHgsIDApXCIpLHJbMF0uc3R5bGUuaGVpZ2h0PWwrXCJweFwiKSxvLmhpZGUmJihjbGVhclRpbWVvdXQodGhpcy5zY3JvbGxiYXIudGltZW91dCksblswXS5zdHlsZS5vcGFjaXR5PTEsdGhpcy5zY3JvbGxiYXIudGltZW91dD1zZXRUaW1lb3V0KChmdW5jdGlvbigpe25bMF0uc3R5bGUub3BhY2l0eT0wLG4udHJhbnNpdGlvbig0MDApfSksMWUzKSl9fSxzZXRUcmFuc2l0aW9uOmZ1bmN0aW9uKGUpe3RoaXMucGFyYW1zLnNjcm9sbGJhci5lbCYmdGhpcy5zY3JvbGxiYXIuZWwmJnRoaXMuc2Nyb2xsYmFyLiRkcmFnRWwudHJhbnNpdGlvbihlKX0sdXBkYXRlU2l6ZTpmdW5jdGlvbigpe2lmKHRoaXMucGFyYW1zLnNjcm9sbGJhci5lbCYmdGhpcy5zY3JvbGxiYXIuZWwpe3ZhciBlPXRoaXMuc2Nyb2xsYmFyLHQ9ZS4kZHJhZ0VsLGk9ZS4kZWw7dFswXS5zdHlsZS53aWR0aD1cIlwiLHRbMF0uc3R5bGUuaGVpZ2h0PVwiXCI7dmFyIHMsYT10aGlzLmlzSG9yaXpvbnRhbCgpP2lbMF0ub2Zmc2V0V2lkdGg6aVswXS5vZmZzZXRIZWlnaHQscj10aGlzLnNpemUvdGhpcy52aXJ0dWFsU2l6ZSxvPXIqKGEvdGhpcy5zaXplKTtzPVwiYXV0b1wiPT09dGhpcy5wYXJhbXMuc2Nyb2xsYmFyLmRyYWdTaXplP2EqcjpwYXJzZUludCh0aGlzLnBhcmFtcy5zY3JvbGxiYXIuZHJhZ1NpemUsMTApLHRoaXMuaXNIb3Jpem9udGFsKCk/dFswXS5zdHlsZS53aWR0aD1zK1wicHhcIjp0WzBdLnN0eWxlLmhlaWdodD1zK1wicHhcIixpWzBdLnN0eWxlLmRpc3BsYXk9cj49MT9cIm5vbmVcIjpcIlwiLHRoaXMucGFyYW1zLnNjcm9sbGJhci5oaWRlJiYoaVswXS5zdHlsZS5vcGFjaXR5PTApLG4uZXh0ZW5kKGUse3RyYWNrU2l6ZTphLGRpdmlkZXI6cixtb3ZlRGl2aWRlcjpvLGRyYWdTaXplOnN9KSxlLiRlbFt0aGlzLnBhcmFtcy53YXRjaE92ZXJmbG93JiZ0aGlzLmlzTG9ja2VkP1wiYWRkQ2xhc3NcIjpcInJlbW92ZUNsYXNzXCJdKHRoaXMucGFyYW1zLnNjcm9sbGJhci5sb2NrQ2xhc3MpfX0sZ2V0UG9pbnRlclBvc2l0aW9uOmZ1bmN0aW9uKGUpe3JldHVybiB0aGlzLmlzSG9yaXpvbnRhbCgpP1widG91Y2hzdGFydFwiPT09ZS50eXBlfHxcInRvdWNobW92ZVwiPT09ZS50eXBlP2UudGFyZ2V0VG91Y2hlc1swXS5jbGllbnRYOmUuY2xpZW50WDpcInRvdWNoc3RhcnRcIj09PWUudHlwZXx8XCJ0b3VjaG1vdmVcIj09PWUudHlwZT9lLnRhcmdldFRvdWNoZXNbMF0uY2xpZW50WTplLmNsaWVudFl9LHNldERyYWdQb3NpdGlvbjpmdW5jdGlvbihlKXt2YXIgdCxpPXRoaXMuc2Nyb2xsYmFyLHM9dGhpcy5ydGxUcmFuc2xhdGUsYT1pLiRlbCxyPWkuZHJhZ1NpemUsbj1pLnRyYWNrU2l6ZSxvPWkuZHJhZ1N0YXJ0UG9zO3Q9KGkuZ2V0UG9pbnRlclBvc2l0aW9uKGUpLWEub2Zmc2V0KClbdGhpcy5pc0hvcml6b250YWwoKT9cImxlZnRcIjpcInRvcFwiXS0obnVsbCE9PW8/bzpyLzIpKS8obi1yKSx0PU1hdGgubWF4KE1hdGgubWluKHQsMSksMCkscyYmKHQ9MS10KTt2YXIgbD10aGlzLm1pblRyYW5zbGF0ZSgpKyh0aGlzLm1heFRyYW5zbGF0ZSgpLXRoaXMubWluVHJhbnNsYXRlKCkpKnQ7dGhpcy51cGRhdGVQcm9ncmVzcyhsKSx0aGlzLnNldFRyYW5zbGF0ZShsKSx0aGlzLnVwZGF0ZUFjdGl2ZUluZGV4KCksdGhpcy51cGRhdGVTbGlkZXNDbGFzc2VzKCl9LG9uRHJhZ1N0YXJ0OmZ1bmN0aW9uKGUpe3ZhciB0PXRoaXMucGFyYW1zLnNjcm9sbGJhcixpPXRoaXMuc2Nyb2xsYmFyLHM9dGhpcy4kd3JhcHBlckVsLGE9aS4kZWwscj1pLiRkcmFnRWw7dGhpcy5zY3JvbGxiYXIuaXNUb3VjaGVkPSEwLHRoaXMuc2Nyb2xsYmFyLmRyYWdTdGFydFBvcz1lLnRhcmdldD09PXJbMF18fGUudGFyZ2V0PT09cj9pLmdldFBvaW50ZXJQb3NpdGlvbihlKS1lLnRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVt0aGlzLmlzSG9yaXpvbnRhbCgpP1wibGVmdFwiOlwidG9wXCJdOm51bGwsZS5wcmV2ZW50RGVmYXVsdCgpLGUuc3RvcFByb3BhZ2F0aW9uKCkscy50cmFuc2l0aW9uKDEwMCksci50cmFuc2l0aW9uKDEwMCksaS5zZXREcmFnUG9zaXRpb24oZSksY2xlYXJUaW1lb3V0KHRoaXMuc2Nyb2xsYmFyLmRyYWdUaW1lb3V0KSxhLnRyYW5zaXRpb24oMCksdC5oaWRlJiZhLmNzcyhcIm9wYWNpdHlcIiwxKSx0aGlzLnBhcmFtcy5jc3NNb2RlJiZ0aGlzLiR3cmFwcGVyRWwuY3NzKFwic2Nyb2xsLXNuYXAtdHlwZVwiLFwibm9uZVwiKSx0aGlzLmVtaXQoXCJzY3JvbGxiYXJEcmFnU3RhcnRcIixlKX0sb25EcmFnTW92ZTpmdW5jdGlvbihlKXt2YXIgdD10aGlzLnNjcm9sbGJhcixpPXRoaXMuJHdyYXBwZXJFbCxzPXQuJGVsLGE9dC4kZHJhZ0VsO3RoaXMuc2Nyb2xsYmFyLmlzVG91Y2hlZCYmKGUucHJldmVudERlZmF1bHQ/ZS5wcmV2ZW50RGVmYXVsdCgpOmUucmV0dXJuVmFsdWU9ITEsdC5zZXREcmFnUG9zaXRpb24oZSksaS50cmFuc2l0aW9uKDApLHMudHJhbnNpdGlvbigwKSxhLnRyYW5zaXRpb24oMCksdGhpcy5lbWl0KFwic2Nyb2xsYmFyRHJhZ01vdmVcIixlKSl9LG9uRHJhZ0VuZDpmdW5jdGlvbihlKXt2YXIgdD10aGlzLnBhcmFtcy5zY3JvbGxiYXIsaT10aGlzLnNjcm9sbGJhcixzPXRoaXMuJHdyYXBwZXJFbCxhPWkuJGVsO3RoaXMuc2Nyb2xsYmFyLmlzVG91Y2hlZCYmKHRoaXMuc2Nyb2xsYmFyLmlzVG91Y2hlZD0hMSx0aGlzLnBhcmFtcy5jc3NNb2RlJiYodGhpcy4kd3JhcHBlckVsLmNzcyhcInNjcm9sbC1zbmFwLXR5cGVcIixcIlwiKSxzLnRyYW5zaXRpb24oXCJcIikpLHQuaGlkZSYmKGNsZWFyVGltZW91dCh0aGlzLnNjcm9sbGJhci5kcmFnVGltZW91dCksdGhpcy5zY3JvbGxiYXIuZHJhZ1RpbWVvdXQ9bi5uZXh0VGljaygoZnVuY3Rpb24oKXthLmNzcyhcIm9wYWNpdHlcIiwwKSxhLnRyYW5zaXRpb24oNDAwKX0pLDFlMykpLHRoaXMuZW1pdChcInNjcm9sbGJhckRyYWdFbmRcIixlKSx0LnNuYXBPblJlbGVhc2UmJnRoaXMuc2xpZGVUb0Nsb3Nlc3QoKSl9LGVuYWJsZURyYWdnYWJsZTpmdW5jdGlvbigpe2lmKHRoaXMucGFyYW1zLnNjcm9sbGJhci5lbCl7dmFyIHQ9dGhpcy5zY3JvbGxiYXIsaT10aGlzLnRvdWNoRXZlbnRzVG91Y2gscz10aGlzLnRvdWNoRXZlbnRzRGVza3RvcCxhPXRoaXMucGFyYW1zLHI9dC4kZWxbMF0sbj0hKCFvLnBhc3NpdmVMaXN0ZW5lcnx8IWEucGFzc2l2ZUxpc3RlbmVycykmJntwYXNzaXZlOiExLGNhcHR1cmU6ITF9LGw9ISghby5wYXNzaXZlTGlzdGVuZXJ8fCFhLnBhc3NpdmVMaXN0ZW5lcnMpJiZ7cGFzc2l2ZTohMCxjYXB0dXJlOiExfTtvLnRvdWNoPyhyLmFkZEV2ZW50TGlzdGVuZXIoaS5zdGFydCx0aGlzLnNjcm9sbGJhci5vbkRyYWdTdGFydCxuKSxyLmFkZEV2ZW50TGlzdGVuZXIoaS5tb3ZlLHRoaXMuc2Nyb2xsYmFyLm9uRHJhZ01vdmUsbiksci5hZGRFdmVudExpc3RlbmVyKGkuZW5kLHRoaXMuc2Nyb2xsYmFyLm9uRHJhZ0VuZCxsKSk6KHIuYWRkRXZlbnRMaXN0ZW5lcihzLnN0YXJ0LHRoaXMuc2Nyb2xsYmFyLm9uRHJhZ1N0YXJ0LG4pLGUuYWRkRXZlbnRMaXN0ZW5lcihzLm1vdmUsdGhpcy5zY3JvbGxiYXIub25EcmFnTW92ZSxuKSxlLmFkZEV2ZW50TGlzdGVuZXIocy5lbmQsdGhpcy5zY3JvbGxiYXIub25EcmFnRW5kLGwpKX19LGRpc2FibGVEcmFnZ2FibGU6ZnVuY3Rpb24oKXtpZih0aGlzLnBhcmFtcy5zY3JvbGxiYXIuZWwpe3ZhciB0PXRoaXMuc2Nyb2xsYmFyLGk9dGhpcy50b3VjaEV2ZW50c1RvdWNoLHM9dGhpcy50b3VjaEV2ZW50c0Rlc2t0b3AsYT10aGlzLnBhcmFtcyxyPXQuJGVsWzBdLG49ISghby5wYXNzaXZlTGlzdGVuZXJ8fCFhLnBhc3NpdmVMaXN0ZW5lcnMpJiZ7cGFzc2l2ZTohMSxjYXB0dXJlOiExfSxsPSEoIW8ucGFzc2l2ZUxpc3RlbmVyfHwhYS5wYXNzaXZlTGlzdGVuZXJzKSYme3Bhc3NpdmU6ITAsY2FwdHVyZTohMX07by50b3VjaD8oci5yZW1vdmVFdmVudExpc3RlbmVyKGkuc3RhcnQsdGhpcy5zY3JvbGxiYXIub25EcmFnU3RhcnQsbiksci5yZW1vdmVFdmVudExpc3RlbmVyKGkubW92ZSx0aGlzLnNjcm9sbGJhci5vbkRyYWdNb3ZlLG4pLHIucmVtb3ZlRXZlbnRMaXN0ZW5lcihpLmVuZCx0aGlzLnNjcm9sbGJhci5vbkRyYWdFbmQsbCkpOihyLnJlbW92ZUV2ZW50TGlzdGVuZXIocy5zdGFydCx0aGlzLnNjcm9sbGJhci5vbkRyYWdTdGFydCxuKSxlLnJlbW92ZUV2ZW50TGlzdGVuZXIocy5tb3ZlLHRoaXMuc2Nyb2xsYmFyLm9uRHJhZ01vdmUsbiksZS5yZW1vdmVFdmVudExpc3RlbmVyKHMuZW5kLHRoaXMuc2Nyb2xsYmFyLm9uRHJhZ0VuZCxsKSl9fSxpbml0OmZ1bmN0aW9uKCl7aWYodGhpcy5wYXJhbXMuc2Nyb2xsYmFyLmVsKXt2YXIgZT10aGlzLnNjcm9sbGJhcix0PXRoaXMuJGVsLGk9dGhpcy5wYXJhbXMuc2Nyb2xsYmFyLGE9cyhpLmVsKTt0aGlzLnBhcmFtcy51bmlxdWVOYXZFbGVtZW50cyYmXCJzdHJpbmdcIj09dHlwZW9mIGkuZWwmJmEubGVuZ3RoPjEmJjE9PT10LmZpbmQoaS5lbCkubGVuZ3RoJiYoYT10LmZpbmQoaS5lbCkpO3ZhciByPWEuZmluZChcIi5cIit0aGlzLnBhcmFtcy5zY3JvbGxiYXIuZHJhZ0NsYXNzKTswPT09ci5sZW5ndGgmJihyPXMoJzxkaXYgY2xhc3M9XCInK3RoaXMucGFyYW1zLnNjcm9sbGJhci5kcmFnQ2xhc3MrJ1wiPjwvZGl2PicpLGEuYXBwZW5kKHIpKSxuLmV4dGVuZChlLHskZWw6YSxlbDphWzBdLCRkcmFnRWw6cixkcmFnRWw6clswXX0pLGkuZHJhZ2dhYmxlJiZlLmVuYWJsZURyYWdnYWJsZSgpfX0sZGVzdHJveTpmdW5jdGlvbigpe3RoaXMuc2Nyb2xsYmFyLmRpc2FibGVEcmFnZ2FibGUoKX19LG5lPXtzZXRUcmFuc2Zvcm06ZnVuY3Rpb24oZSx0KXt2YXIgaT10aGlzLnJ0bCxhPXMoZSkscj1pPy0xOjEsbj1hLmF0dHIoXCJkYXRhLXN3aXBlci1wYXJhbGxheFwiKXx8XCIwXCIsbz1hLmF0dHIoXCJkYXRhLXN3aXBlci1wYXJhbGxheC14XCIpLGw9YS5hdHRyKFwiZGF0YS1zd2lwZXItcGFyYWxsYXgteVwiKSxkPWEuYXR0cihcImRhdGEtc3dpcGVyLXBhcmFsbGF4LXNjYWxlXCIpLGg9YS5hdHRyKFwiZGF0YS1zd2lwZXItcGFyYWxsYXgtb3BhY2l0eVwiKTtpZihvfHxsPyhvPW98fFwiMFwiLGw9bHx8XCIwXCIpOnRoaXMuaXNIb3Jpem9udGFsKCk/KG89bixsPVwiMFwiKToobD1uLG89XCIwXCIpLG89by5pbmRleE9mKFwiJVwiKT49MD9wYXJzZUludChvLDEwKSp0KnIrXCIlXCI6byp0KnIrXCJweFwiLGw9bC5pbmRleE9mKFwiJVwiKT49MD9wYXJzZUludChsLDEwKSp0K1wiJVwiOmwqdCtcInB4XCIsbnVsbCE9aCl7dmFyIHA9aC0oaC0xKSooMS1NYXRoLmFicyh0KSk7YVswXS5zdHlsZS5vcGFjaXR5PXB9aWYobnVsbD09ZClhLnRyYW5zZm9ybShcInRyYW5zbGF0ZTNkKFwiK28rXCIsIFwiK2wrXCIsIDBweClcIik7ZWxzZXt2YXIgYz1kLShkLTEpKigxLU1hdGguYWJzKHQpKTthLnRyYW5zZm9ybShcInRyYW5zbGF0ZTNkKFwiK28rXCIsIFwiK2wrXCIsIDBweCkgc2NhbGUoXCIrYytcIilcIil9fSxzZXRUcmFuc2xhdGU6ZnVuY3Rpb24oKXt2YXIgZT10aGlzLHQ9ZS4kZWwsaT1lLnNsaWRlcyxhPWUucHJvZ3Jlc3Mscj1lLnNuYXBHcmlkO3QuY2hpbGRyZW4oXCJbZGF0YS1zd2lwZXItcGFyYWxsYXhdLCBbZGF0YS1zd2lwZXItcGFyYWxsYXgteF0sIFtkYXRhLXN3aXBlci1wYXJhbGxheC15XSwgW2RhdGEtc3dpcGVyLXBhcmFsbGF4LW9wYWNpdHldLCBbZGF0YS1zd2lwZXItcGFyYWxsYXgtc2NhbGVdXCIpLmVhY2goKGZ1bmN0aW9uKHQsaSl7ZS5wYXJhbGxheC5zZXRUcmFuc2Zvcm0oaSxhKX0pKSxpLmVhY2goKGZ1bmN0aW9uKHQsaSl7dmFyIG49aS5wcm9ncmVzcztlLnBhcmFtcy5zbGlkZXNQZXJHcm91cD4xJiZcImF1dG9cIiE9PWUucGFyYW1zLnNsaWRlc1BlclZpZXcmJihuKz1NYXRoLmNlaWwodC8yKS1hKihyLmxlbmd0aC0xKSksbj1NYXRoLm1pbihNYXRoLm1heChuLC0xKSwxKSxzKGkpLmZpbmQoXCJbZGF0YS1zd2lwZXItcGFyYWxsYXhdLCBbZGF0YS1zd2lwZXItcGFyYWxsYXgteF0sIFtkYXRhLXN3aXBlci1wYXJhbGxheC15XSwgW2RhdGEtc3dpcGVyLXBhcmFsbGF4LW9wYWNpdHldLCBbZGF0YS1zd2lwZXItcGFyYWxsYXgtc2NhbGVdXCIpLmVhY2goKGZ1bmN0aW9uKHQsaSl7ZS5wYXJhbGxheC5zZXRUcmFuc2Zvcm0oaSxuKX0pKX0pKX0sc2V0VHJhbnNpdGlvbjpmdW5jdGlvbihlKXt2b2lkIDA9PT1lJiYoZT10aGlzLnBhcmFtcy5zcGVlZCk7dGhpcy4kZWwuZmluZChcIltkYXRhLXN3aXBlci1wYXJhbGxheF0sIFtkYXRhLXN3aXBlci1wYXJhbGxheC14XSwgW2RhdGEtc3dpcGVyLXBhcmFsbGF4LXldLCBbZGF0YS1zd2lwZXItcGFyYWxsYXgtb3BhY2l0eV0sIFtkYXRhLXN3aXBlci1wYXJhbGxheC1zY2FsZV1cIikuZWFjaCgoZnVuY3Rpb24odCxpKXt2YXIgYT1zKGkpLHI9cGFyc2VJbnQoYS5hdHRyKFwiZGF0YS1zd2lwZXItcGFyYWxsYXgtZHVyYXRpb25cIiksMTApfHxlOzA9PT1lJiYocj0wKSxhLnRyYW5zaXRpb24ocil9KSl9fSxvZT17Z2V0RGlzdGFuY2VCZXR3ZWVuVG91Y2hlczpmdW5jdGlvbihlKXtpZihlLnRhcmdldFRvdWNoZXMubGVuZ3RoPDIpcmV0dXJuIDE7dmFyIHQ9ZS50YXJnZXRUb3VjaGVzWzBdLnBhZ2VYLGk9ZS50YXJnZXRUb3VjaGVzWzBdLnBhZ2VZLHM9ZS50YXJnZXRUb3VjaGVzWzFdLnBhZ2VYLGE9ZS50YXJnZXRUb3VjaGVzWzFdLnBhZ2VZO3JldHVybiBNYXRoLnNxcnQoTWF0aC5wb3cocy10LDIpK01hdGgucG93KGEtaSwyKSl9LG9uR2VzdHVyZVN0YXJ0OmZ1bmN0aW9uKGUpe3ZhciB0PXRoaXMucGFyYW1zLnpvb20saT10aGlzLnpvb20sYT1pLmdlc3R1cmU7aWYoaS5mYWtlR2VzdHVyZVRvdWNoZWQ9ITEsaS5mYWtlR2VzdHVyZU1vdmVkPSExLCFvLmdlc3R1cmVzKXtpZihcInRvdWNoc3RhcnRcIiE9PWUudHlwZXx8XCJ0b3VjaHN0YXJ0XCI9PT1lLnR5cGUmJmUudGFyZ2V0VG91Y2hlcy5sZW5ndGg8MilyZXR1cm47aS5mYWtlR2VzdHVyZVRvdWNoZWQ9ITAsYS5zY2FsZVN0YXJ0PW9lLmdldERpc3RhbmNlQmV0d2VlblRvdWNoZXMoZSl9YS4kc2xpZGVFbCYmYS4kc2xpZGVFbC5sZW5ndGh8fChhLiRzbGlkZUVsPXMoZS50YXJnZXQpLmNsb3Nlc3QoXCIuXCIrdGhpcy5wYXJhbXMuc2xpZGVDbGFzcyksMD09PWEuJHNsaWRlRWwubGVuZ3RoJiYoYS4kc2xpZGVFbD10aGlzLnNsaWRlcy5lcSh0aGlzLmFjdGl2ZUluZGV4KSksYS4kaW1hZ2VFbD1hLiRzbGlkZUVsLmZpbmQoXCJpbWcsIHN2ZywgY2FudmFzLCBwaWN0dXJlLCAuc3dpcGVyLXpvb20tdGFyZ2V0XCIpLGEuJGltYWdlV3JhcEVsPWEuJGltYWdlRWwucGFyZW50KFwiLlwiK3QuY29udGFpbmVyQ2xhc3MpLGEubWF4UmF0aW89YS4kaW1hZ2VXcmFwRWwuYXR0cihcImRhdGEtc3dpcGVyLXpvb21cIil8fHQubWF4UmF0aW8sMCE9PWEuJGltYWdlV3JhcEVsLmxlbmd0aCk/KGEuJGltYWdlRWwmJmEuJGltYWdlRWwudHJhbnNpdGlvbigwKSx0aGlzLnpvb20uaXNTY2FsaW5nPSEwKTphLiRpbWFnZUVsPXZvaWQgMH0sb25HZXN0dXJlQ2hhbmdlOmZ1bmN0aW9uKGUpe3ZhciB0PXRoaXMucGFyYW1zLnpvb20saT10aGlzLnpvb20scz1pLmdlc3R1cmU7aWYoIW8uZ2VzdHVyZXMpe2lmKFwidG91Y2htb3ZlXCIhPT1lLnR5cGV8fFwidG91Y2htb3ZlXCI9PT1lLnR5cGUmJmUudGFyZ2V0VG91Y2hlcy5sZW5ndGg8MilyZXR1cm47aS5mYWtlR2VzdHVyZU1vdmVkPSEwLHMuc2NhbGVNb3ZlPW9lLmdldERpc3RhbmNlQmV0d2VlblRvdWNoZXMoZSl9cy4kaW1hZ2VFbCYmMCE9PXMuJGltYWdlRWwubGVuZ3RoJiYoaS5zY2FsZT1vLmdlc3R1cmVzP2Uuc2NhbGUqaS5jdXJyZW50U2NhbGU6cy5zY2FsZU1vdmUvcy5zY2FsZVN0YXJ0KmkuY3VycmVudFNjYWxlLGkuc2NhbGU+cy5tYXhSYXRpbyYmKGkuc2NhbGU9cy5tYXhSYXRpby0xK01hdGgucG93KGkuc2NhbGUtcy5tYXhSYXRpbysxLC41KSksaS5zY2FsZTx0Lm1pblJhdGlvJiYoaS5zY2FsZT10Lm1pblJhdGlvKzEtTWF0aC5wb3codC5taW5SYXRpby1pLnNjYWxlKzEsLjUpKSxzLiRpbWFnZUVsLnRyYW5zZm9ybShcInRyYW5zbGF0ZTNkKDAsMCwwKSBzY2FsZShcIitpLnNjYWxlK1wiKVwiKSl9LG9uR2VzdHVyZUVuZDpmdW5jdGlvbihlKXt2YXIgdD10aGlzLnBhcmFtcy56b29tLGk9dGhpcy56b29tLHM9aS5nZXN0dXJlO2lmKCFvLmdlc3R1cmVzKXtpZighaS5mYWtlR2VzdHVyZVRvdWNoZWR8fCFpLmZha2VHZXN0dXJlTW92ZWQpcmV0dXJuO2lmKFwidG91Y2hlbmRcIiE9PWUudHlwZXx8XCJ0b3VjaGVuZFwiPT09ZS50eXBlJiZlLmNoYW5nZWRUb3VjaGVzLmxlbmd0aDwyJiYhSS5hbmRyb2lkKXJldHVybjtpLmZha2VHZXN0dXJlVG91Y2hlZD0hMSxpLmZha2VHZXN0dXJlTW92ZWQ9ITF9cy4kaW1hZ2VFbCYmMCE9PXMuJGltYWdlRWwubGVuZ3RoJiYoaS5zY2FsZT1NYXRoLm1heChNYXRoLm1pbihpLnNjYWxlLHMubWF4UmF0aW8pLHQubWluUmF0aW8pLHMuJGltYWdlRWwudHJhbnNpdGlvbih0aGlzLnBhcmFtcy5zcGVlZCkudHJhbnNmb3JtKFwidHJhbnNsYXRlM2QoMCwwLDApIHNjYWxlKFwiK2kuc2NhbGUrXCIpXCIpLGkuY3VycmVudFNjYWxlPWkuc2NhbGUsaS5pc1NjYWxpbmc9ITEsMT09PWkuc2NhbGUmJihzLiRzbGlkZUVsPXZvaWQgMCkpfSxvblRvdWNoU3RhcnQ6ZnVuY3Rpb24oZSl7dmFyIHQ9dGhpcy56b29tLGk9dC5nZXN0dXJlLHM9dC5pbWFnZTtpLiRpbWFnZUVsJiYwIT09aS4kaW1hZ2VFbC5sZW5ndGgmJihzLmlzVG91Y2hlZHx8KEkuYW5kcm9pZCYmZS5wcmV2ZW50RGVmYXVsdCgpLHMuaXNUb3VjaGVkPSEwLHMudG91Y2hlc1N0YXJ0Lng9XCJ0b3VjaHN0YXJ0XCI9PT1lLnR5cGU/ZS50YXJnZXRUb3VjaGVzWzBdLnBhZ2VYOmUucGFnZVgscy50b3VjaGVzU3RhcnQueT1cInRvdWNoc3RhcnRcIj09PWUudHlwZT9lLnRhcmdldFRvdWNoZXNbMF0ucGFnZVk6ZS5wYWdlWSkpfSxvblRvdWNoTW92ZTpmdW5jdGlvbihlKXt2YXIgdD10aGlzLnpvb20saT10Lmdlc3R1cmUscz10LmltYWdlLGE9dC52ZWxvY2l0eTtpZihpLiRpbWFnZUVsJiYwIT09aS4kaW1hZ2VFbC5sZW5ndGgmJih0aGlzLmFsbG93Q2xpY2s9ITEscy5pc1RvdWNoZWQmJmkuJHNsaWRlRWwpKXtzLmlzTW92ZWR8fChzLndpZHRoPWkuJGltYWdlRWxbMF0ub2Zmc2V0V2lkdGgscy5oZWlnaHQ9aS4kaW1hZ2VFbFswXS5vZmZzZXRIZWlnaHQscy5zdGFydFg9bi5nZXRUcmFuc2xhdGUoaS4kaW1hZ2VXcmFwRWxbMF0sXCJ4XCIpfHwwLHMuc3RhcnRZPW4uZ2V0VHJhbnNsYXRlKGkuJGltYWdlV3JhcEVsWzBdLFwieVwiKXx8MCxpLnNsaWRlV2lkdGg9aS4kc2xpZGVFbFswXS5vZmZzZXRXaWR0aCxpLnNsaWRlSGVpZ2h0PWkuJHNsaWRlRWxbMF0ub2Zmc2V0SGVpZ2h0LGkuJGltYWdlV3JhcEVsLnRyYW5zaXRpb24oMCksdGhpcy5ydGwmJihzLnN0YXJ0WD0tcy5zdGFydFgscy5zdGFydFk9LXMuc3RhcnRZKSk7dmFyIHI9cy53aWR0aCp0LnNjYWxlLG89cy5oZWlnaHQqdC5zY2FsZTtpZighKHI8aS5zbGlkZVdpZHRoJiZvPGkuc2xpZGVIZWlnaHQpKXtpZihzLm1pblg9TWF0aC5taW4oaS5zbGlkZVdpZHRoLzItci8yLDApLHMubWF4WD0tcy5taW5YLHMubWluWT1NYXRoLm1pbihpLnNsaWRlSGVpZ2h0LzItby8yLDApLHMubWF4WT0tcy5taW5ZLHMudG91Y2hlc0N1cnJlbnQueD1cInRvdWNobW92ZVwiPT09ZS50eXBlP2UudGFyZ2V0VG91Y2hlc1swXS5wYWdlWDplLnBhZ2VYLHMudG91Y2hlc0N1cnJlbnQueT1cInRvdWNobW92ZVwiPT09ZS50eXBlP2UudGFyZ2V0VG91Y2hlc1swXS5wYWdlWTplLnBhZ2VZLCFzLmlzTW92ZWQmJiF0LmlzU2NhbGluZyl7aWYodGhpcy5pc0hvcml6b250YWwoKSYmKE1hdGguZmxvb3Iocy5taW5YKT09PU1hdGguZmxvb3Iocy5zdGFydFgpJiZzLnRvdWNoZXNDdXJyZW50Lng8cy50b3VjaGVzU3RhcnQueHx8TWF0aC5mbG9vcihzLm1heFgpPT09TWF0aC5mbG9vcihzLnN0YXJ0WCkmJnMudG91Y2hlc0N1cnJlbnQueD5zLnRvdWNoZXNTdGFydC54KSlyZXR1cm4gdm9pZChzLmlzVG91Y2hlZD0hMSk7aWYoIXRoaXMuaXNIb3Jpem9udGFsKCkmJihNYXRoLmZsb29yKHMubWluWSk9PT1NYXRoLmZsb29yKHMuc3RhcnRZKSYmcy50b3VjaGVzQ3VycmVudC55PHMudG91Y2hlc1N0YXJ0Lnl8fE1hdGguZmxvb3Iocy5tYXhZKT09PU1hdGguZmxvb3Iocy5zdGFydFkpJiZzLnRvdWNoZXNDdXJyZW50Lnk+cy50b3VjaGVzU3RhcnQueSkpcmV0dXJuIHZvaWQocy5pc1RvdWNoZWQ9ITEpfWUucHJldmVudERlZmF1bHQoKSxlLnN0b3BQcm9wYWdhdGlvbigpLHMuaXNNb3ZlZD0hMCxzLmN1cnJlbnRYPXMudG91Y2hlc0N1cnJlbnQueC1zLnRvdWNoZXNTdGFydC54K3Muc3RhcnRYLHMuY3VycmVudFk9cy50b3VjaGVzQ3VycmVudC55LXMudG91Y2hlc1N0YXJ0Lnkrcy5zdGFydFkscy5jdXJyZW50WDxzLm1pblgmJihzLmN1cnJlbnRYPXMubWluWCsxLU1hdGgucG93KHMubWluWC1zLmN1cnJlbnRYKzEsLjgpKSxzLmN1cnJlbnRYPnMubWF4WCYmKHMuY3VycmVudFg9cy5tYXhYLTErTWF0aC5wb3cocy5jdXJyZW50WC1zLm1heFgrMSwuOCkpLHMuY3VycmVudFk8cy5taW5ZJiYocy5jdXJyZW50WT1zLm1pblkrMS1NYXRoLnBvdyhzLm1pblktcy5jdXJyZW50WSsxLC44KSkscy5jdXJyZW50WT5zLm1heFkmJihzLmN1cnJlbnRZPXMubWF4WS0xK01hdGgucG93KHMuY3VycmVudFktcy5tYXhZKzEsLjgpKSxhLnByZXZQb3NpdGlvblh8fChhLnByZXZQb3NpdGlvblg9cy50b3VjaGVzQ3VycmVudC54KSxhLnByZXZQb3NpdGlvbll8fChhLnByZXZQb3NpdGlvblk9cy50b3VjaGVzQ3VycmVudC55KSxhLnByZXZUaW1lfHwoYS5wcmV2VGltZT1EYXRlLm5vdygpKSxhLng9KHMudG91Y2hlc0N1cnJlbnQueC1hLnByZXZQb3NpdGlvblgpLyhEYXRlLm5vdygpLWEucHJldlRpbWUpLzIsYS55PShzLnRvdWNoZXNDdXJyZW50LnktYS5wcmV2UG9zaXRpb25ZKS8oRGF0ZS5ub3coKS1hLnByZXZUaW1lKS8yLE1hdGguYWJzKHMudG91Y2hlc0N1cnJlbnQueC1hLnByZXZQb3NpdGlvblgpPDImJihhLng9MCksTWF0aC5hYnMocy50b3VjaGVzQ3VycmVudC55LWEucHJldlBvc2l0aW9uWSk8MiYmKGEueT0wKSxhLnByZXZQb3NpdGlvblg9cy50b3VjaGVzQ3VycmVudC54LGEucHJldlBvc2l0aW9uWT1zLnRvdWNoZXNDdXJyZW50LnksYS5wcmV2VGltZT1EYXRlLm5vdygpLGkuJGltYWdlV3JhcEVsLnRyYW5zZm9ybShcInRyYW5zbGF0ZTNkKFwiK3MuY3VycmVudFgrXCJweCwgXCIrcy5jdXJyZW50WStcInB4LDApXCIpfX19LG9uVG91Y2hFbmQ6ZnVuY3Rpb24oKXt2YXIgZT10aGlzLnpvb20sdD1lLmdlc3R1cmUsaT1lLmltYWdlLHM9ZS52ZWxvY2l0eTtpZih0LiRpbWFnZUVsJiYwIT09dC4kaW1hZ2VFbC5sZW5ndGgpe2lmKCFpLmlzVG91Y2hlZHx8IWkuaXNNb3ZlZClyZXR1cm4gaS5pc1RvdWNoZWQ9ITEsdm9pZChpLmlzTW92ZWQ9ITEpO2kuaXNUb3VjaGVkPSExLGkuaXNNb3ZlZD0hMTt2YXIgYT0zMDAscj0zMDAsbj1zLngqYSxvPWkuY3VycmVudFgrbixsPXMueSpyLGQ9aS5jdXJyZW50WStsOzAhPT1zLngmJihhPU1hdGguYWJzKChvLWkuY3VycmVudFgpL3MueCkpLDAhPT1zLnkmJihyPU1hdGguYWJzKChkLWkuY3VycmVudFkpL3MueSkpO3ZhciBoPU1hdGgubWF4KGEscik7aS5jdXJyZW50WD1vLGkuY3VycmVudFk9ZDt2YXIgcD1pLndpZHRoKmUuc2NhbGUsYz1pLmhlaWdodCplLnNjYWxlO2kubWluWD1NYXRoLm1pbih0LnNsaWRlV2lkdGgvMi1wLzIsMCksaS5tYXhYPS1pLm1pblgsaS5taW5ZPU1hdGgubWluKHQuc2xpZGVIZWlnaHQvMi1jLzIsMCksaS5tYXhZPS1pLm1pblksaS5jdXJyZW50WD1NYXRoLm1heChNYXRoLm1pbihpLmN1cnJlbnRYLGkubWF4WCksaS5taW5YKSxpLmN1cnJlbnRZPU1hdGgubWF4KE1hdGgubWluKGkuY3VycmVudFksaS5tYXhZKSxpLm1pblkpLHQuJGltYWdlV3JhcEVsLnRyYW5zaXRpb24oaCkudHJhbnNmb3JtKFwidHJhbnNsYXRlM2QoXCIraS5jdXJyZW50WCtcInB4LCBcIitpLmN1cnJlbnRZK1wicHgsMClcIil9fSxvblRyYW5zaXRpb25FbmQ6ZnVuY3Rpb24oKXt2YXIgZT10aGlzLnpvb20sdD1lLmdlc3R1cmU7dC4kc2xpZGVFbCYmdGhpcy5wcmV2aW91c0luZGV4IT09dGhpcy5hY3RpdmVJbmRleCYmKHQuJGltYWdlRWwmJnQuJGltYWdlRWwudHJhbnNmb3JtKFwidHJhbnNsYXRlM2QoMCwwLDApIHNjYWxlKDEpXCIpLHQuJGltYWdlV3JhcEVsJiZ0LiRpbWFnZVdyYXBFbC50cmFuc2Zvcm0oXCJ0cmFuc2xhdGUzZCgwLDAsMClcIiksZS5zY2FsZT0xLGUuY3VycmVudFNjYWxlPTEsdC4kc2xpZGVFbD12b2lkIDAsdC4kaW1hZ2VFbD12b2lkIDAsdC4kaW1hZ2VXcmFwRWw9dm9pZCAwKX0sdG9nZ2xlOmZ1bmN0aW9uKGUpe3ZhciB0PXRoaXMuem9vbTt0LnNjYWxlJiYxIT09dC5zY2FsZT90Lm91dCgpOnQuaW4oZSl9LGluOmZ1bmN0aW9uKGUpe3ZhciB0LGkscyxhLHIsbixvLGwsZCxoLHAsYyx1LHYsZixtLGc9dGhpcy56b29tLGI9dGhpcy5wYXJhbXMuem9vbSx3PWcuZ2VzdHVyZSx5PWcuaW1hZ2U7KHcuJHNsaWRlRWx8fCh0aGlzLnBhcmFtcy52aXJ0dWFsJiZ0aGlzLnBhcmFtcy52aXJ0dWFsLmVuYWJsZWQmJnRoaXMudmlydHVhbD93LiRzbGlkZUVsPXRoaXMuJHdyYXBwZXJFbC5jaGlsZHJlbihcIi5cIit0aGlzLnBhcmFtcy5zbGlkZUFjdGl2ZUNsYXNzKTp3LiRzbGlkZUVsPXRoaXMuc2xpZGVzLmVxKHRoaXMuYWN0aXZlSW5kZXgpLHcuJGltYWdlRWw9dy4kc2xpZGVFbC5maW5kKFwiaW1nLCBzdmcsIGNhbnZhcywgcGljdHVyZSwgLnN3aXBlci16b29tLXRhcmdldFwiKSx3LiRpbWFnZVdyYXBFbD13LiRpbWFnZUVsLnBhcmVudChcIi5cIitiLmNvbnRhaW5lckNsYXNzKSksdy4kaW1hZ2VFbCYmMCE9PXcuJGltYWdlRWwubGVuZ3RoKSYmKHcuJHNsaWRlRWwuYWRkQ2xhc3MoXCJcIitiLnpvb21lZFNsaWRlQ2xhc3MpLHZvaWQgMD09PXkudG91Y2hlc1N0YXJ0LngmJmU/KHQ9XCJ0b3VjaGVuZFwiPT09ZS50eXBlP2UuY2hhbmdlZFRvdWNoZXNbMF0ucGFnZVg6ZS5wYWdlWCxpPVwidG91Y2hlbmRcIj09PWUudHlwZT9lLmNoYW5nZWRUb3VjaGVzWzBdLnBhZ2VZOmUucGFnZVkpOih0PXkudG91Y2hlc1N0YXJ0LngsaT15LnRvdWNoZXNTdGFydC55KSxnLnNjYWxlPXcuJGltYWdlV3JhcEVsLmF0dHIoXCJkYXRhLXN3aXBlci16b29tXCIpfHxiLm1heFJhdGlvLGcuY3VycmVudFNjYWxlPXcuJGltYWdlV3JhcEVsLmF0dHIoXCJkYXRhLXN3aXBlci16b29tXCIpfHxiLm1heFJhdGlvLGU/KGY9dy4kc2xpZGVFbFswXS5vZmZzZXRXaWR0aCxtPXcuJHNsaWRlRWxbMF0ub2Zmc2V0SGVpZ2h0LHM9dy4kc2xpZGVFbC5vZmZzZXQoKS5sZWZ0K2YvMi10LGE9dy4kc2xpZGVFbC5vZmZzZXQoKS50b3ArbS8yLWksbz13LiRpbWFnZUVsWzBdLm9mZnNldFdpZHRoLGw9dy4kaW1hZ2VFbFswXS5vZmZzZXRIZWlnaHQsZD1vKmcuc2NhbGUsaD1sKmcuc2NhbGUsdT0tKHA9TWF0aC5taW4oZi8yLWQvMiwwKSksdj0tKGM9TWF0aC5taW4obS8yLWgvMiwwKSksKHI9cypnLnNjYWxlKTxwJiYocj1wKSxyPnUmJihyPXUpLChuPWEqZy5zY2FsZSk8YyYmKG49Yyksbj52JiYobj12KSk6KHI9MCxuPTApLHcuJGltYWdlV3JhcEVsLnRyYW5zaXRpb24oMzAwKS50cmFuc2Zvcm0oXCJ0cmFuc2xhdGUzZChcIityK1wicHgsIFwiK24rXCJweCwwKVwiKSx3LiRpbWFnZUVsLnRyYW5zaXRpb24oMzAwKS50cmFuc2Zvcm0oXCJ0cmFuc2xhdGUzZCgwLDAsMCkgc2NhbGUoXCIrZy5zY2FsZStcIilcIikpfSxvdXQ6ZnVuY3Rpb24oKXt2YXIgZT10aGlzLnpvb20sdD10aGlzLnBhcmFtcy56b29tLGk9ZS5nZXN0dXJlO2kuJHNsaWRlRWx8fCh0aGlzLnBhcmFtcy52aXJ0dWFsJiZ0aGlzLnBhcmFtcy52aXJ0dWFsLmVuYWJsZWQmJnRoaXMudmlydHVhbD9pLiRzbGlkZUVsPXRoaXMuJHdyYXBwZXJFbC5jaGlsZHJlbihcIi5cIit0aGlzLnBhcmFtcy5zbGlkZUFjdGl2ZUNsYXNzKTppLiRzbGlkZUVsPXRoaXMuc2xpZGVzLmVxKHRoaXMuYWN0aXZlSW5kZXgpLGkuJGltYWdlRWw9aS4kc2xpZGVFbC5maW5kKFwiaW1nLCBzdmcsIGNhbnZhcywgcGljdHVyZSwgLnN3aXBlci16b29tLXRhcmdldFwiKSxpLiRpbWFnZVdyYXBFbD1pLiRpbWFnZUVsLnBhcmVudChcIi5cIit0LmNvbnRhaW5lckNsYXNzKSksaS4kaW1hZ2VFbCYmMCE9PWkuJGltYWdlRWwubGVuZ3RoJiYoZS5zY2FsZT0xLGUuY3VycmVudFNjYWxlPTEsaS4kaW1hZ2VXcmFwRWwudHJhbnNpdGlvbigzMDApLnRyYW5zZm9ybShcInRyYW5zbGF0ZTNkKDAsMCwwKVwiKSxpLiRpbWFnZUVsLnRyYW5zaXRpb24oMzAwKS50cmFuc2Zvcm0oXCJ0cmFuc2xhdGUzZCgwLDAsMCkgc2NhbGUoMSlcIiksaS4kc2xpZGVFbC5yZW1vdmVDbGFzcyhcIlwiK3Quem9vbWVkU2xpZGVDbGFzcyksaS4kc2xpZGVFbD12b2lkIDApfSxlbmFibGU6ZnVuY3Rpb24oKXt2YXIgZT10aGlzLnpvb207aWYoIWUuZW5hYmxlZCl7ZS5lbmFibGVkPSEwO3ZhciB0PSEoXCJ0b3VjaHN0YXJ0XCIhPT10aGlzLnRvdWNoRXZlbnRzLnN0YXJ0fHwhby5wYXNzaXZlTGlzdGVuZXJ8fCF0aGlzLnBhcmFtcy5wYXNzaXZlTGlzdGVuZXJzKSYme3Bhc3NpdmU6ITAsY2FwdHVyZTohMX0saT0hby5wYXNzaXZlTGlzdGVuZXJ8fHtwYXNzaXZlOiExLGNhcHR1cmU6ITB9LHM9XCIuXCIrdGhpcy5wYXJhbXMuc2xpZGVDbGFzcztvLmdlc3R1cmVzPyh0aGlzLiR3cmFwcGVyRWwub24oXCJnZXN0dXJlc3RhcnRcIixzLGUub25HZXN0dXJlU3RhcnQsdCksdGhpcy4kd3JhcHBlckVsLm9uKFwiZ2VzdHVyZWNoYW5nZVwiLHMsZS5vbkdlc3R1cmVDaGFuZ2UsdCksdGhpcy4kd3JhcHBlckVsLm9uKFwiZ2VzdHVyZWVuZFwiLHMsZS5vbkdlc3R1cmVFbmQsdCkpOlwidG91Y2hzdGFydFwiPT09dGhpcy50b3VjaEV2ZW50cy5zdGFydCYmKHRoaXMuJHdyYXBwZXJFbC5vbih0aGlzLnRvdWNoRXZlbnRzLnN0YXJ0LHMsZS5vbkdlc3R1cmVTdGFydCx0KSx0aGlzLiR3cmFwcGVyRWwub24odGhpcy50b3VjaEV2ZW50cy5tb3ZlLHMsZS5vbkdlc3R1cmVDaGFuZ2UsaSksdGhpcy4kd3JhcHBlckVsLm9uKHRoaXMudG91Y2hFdmVudHMuZW5kLHMsZS5vbkdlc3R1cmVFbmQsdCksdGhpcy50b3VjaEV2ZW50cy5jYW5jZWwmJnRoaXMuJHdyYXBwZXJFbC5vbih0aGlzLnRvdWNoRXZlbnRzLmNhbmNlbCxzLGUub25HZXN0dXJlRW5kLHQpKSx0aGlzLiR3cmFwcGVyRWwub24odGhpcy50b3VjaEV2ZW50cy5tb3ZlLFwiLlwiK3RoaXMucGFyYW1zLnpvb20uY29udGFpbmVyQ2xhc3MsZS5vblRvdWNoTW92ZSxpKX19LGRpc2FibGU6ZnVuY3Rpb24oKXt2YXIgZT10aGlzLnpvb207aWYoZS5lbmFibGVkKXt0aGlzLnpvb20uZW5hYmxlZD0hMTt2YXIgdD0hKFwidG91Y2hzdGFydFwiIT09dGhpcy50b3VjaEV2ZW50cy5zdGFydHx8IW8ucGFzc2l2ZUxpc3RlbmVyfHwhdGhpcy5wYXJhbXMucGFzc2l2ZUxpc3RlbmVycykmJntwYXNzaXZlOiEwLGNhcHR1cmU6ITF9LGk9IW8ucGFzc2l2ZUxpc3RlbmVyfHx7cGFzc2l2ZTohMSxjYXB0dXJlOiEwfSxzPVwiLlwiK3RoaXMucGFyYW1zLnNsaWRlQ2xhc3M7by5nZXN0dXJlcz8odGhpcy4kd3JhcHBlckVsLm9mZihcImdlc3R1cmVzdGFydFwiLHMsZS5vbkdlc3R1cmVTdGFydCx0KSx0aGlzLiR3cmFwcGVyRWwub2ZmKFwiZ2VzdHVyZWNoYW5nZVwiLHMsZS5vbkdlc3R1cmVDaGFuZ2UsdCksdGhpcy4kd3JhcHBlckVsLm9mZihcImdlc3R1cmVlbmRcIixzLGUub25HZXN0dXJlRW5kLHQpKTpcInRvdWNoc3RhcnRcIj09PXRoaXMudG91Y2hFdmVudHMuc3RhcnQmJih0aGlzLiR3cmFwcGVyRWwub2ZmKHRoaXMudG91Y2hFdmVudHMuc3RhcnQscyxlLm9uR2VzdHVyZVN0YXJ0LHQpLHRoaXMuJHdyYXBwZXJFbC5vZmYodGhpcy50b3VjaEV2ZW50cy5tb3ZlLHMsZS5vbkdlc3R1cmVDaGFuZ2UsaSksdGhpcy4kd3JhcHBlckVsLm9mZih0aGlzLnRvdWNoRXZlbnRzLmVuZCxzLGUub25HZXN0dXJlRW5kLHQpLHRoaXMudG91Y2hFdmVudHMuY2FuY2VsJiZ0aGlzLiR3cmFwcGVyRWwub2ZmKHRoaXMudG91Y2hFdmVudHMuY2FuY2VsLHMsZS5vbkdlc3R1cmVFbmQsdCkpLHRoaXMuJHdyYXBwZXJFbC5vZmYodGhpcy50b3VjaEV2ZW50cy5tb3ZlLFwiLlwiK3RoaXMucGFyYW1zLnpvb20uY29udGFpbmVyQ2xhc3MsZS5vblRvdWNoTW92ZSxpKX19fSxsZT17bG9hZEluU2xpZGU6ZnVuY3Rpb24oZSx0KXt2b2lkIDA9PT10JiYodD0hMCk7dmFyIGk9dGhpcyxhPWkucGFyYW1zLmxhenk7aWYodm9pZCAwIT09ZSYmMCE9PWkuc2xpZGVzLmxlbmd0aCl7dmFyIHI9aS52aXJ0dWFsJiZpLnBhcmFtcy52aXJ0dWFsLmVuYWJsZWQ/aS4kd3JhcHBlckVsLmNoaWxkcmVuKFwiLlwiK2kucGFyYW1zLnNsaWRlQ2xhc3MrJ1tkYXRhLXN3aXBlci1zbGlkZS1pbmRleD1cIicrZSsnXCJdJyk6aS5zbGlkZXMuZXEoZSksbj1yLmZpbmQoXCIuXCIrYS5lbGVtZW50Q2xhc3MrXCI6bm90KC5cIithLmxvYWRlZENsYXNzK1wiKTpub3QoLlwiK2EubG9hZGluZ0NsYXNzK1wiKVwiKTshci5oYXNDbGFzcyhhLmVsZW1lbnRDbGFzcyl8fHIuaGFzQ2xhc3MoYS5sb2FkZWRDbGFzcyl8fHIuaGFzQ2xhc3MoYS5sb2FkaW5nQ2xhc3MpfHwobj1uLmFkZChyWzBdKSksMCE9PW4ubGVuZ3RoJiZuLmVhY2goKGZ1bmN0aW9uKGUsbil7dmFyIG89cyhuKTtvLmFkZENsYXNzKGEubG9hZGluZ0NsYXNzKTt2YXIgbD1vLmF0dHIoXCJkYXRhLWJhY2tncm91bmRcIiksZD1vLmF0dHIoXCJkYXRhLXNyY1wiKSxoPW8uYXR0cihcImRhdGEtc3Jjc2V0XCIpLHA9by5hdHRyKFwiZGF0YS1zaXplc1wiKTtpLmxvYWRJbWFnZShvWzBdLGR8fGwsaCxwLCExLChmdW5jdGlvbigpe2lmKG51bGwhPWkmJmkmJighaXx8aS5wYXJhbXMpJiYhaS5kZXN0cm95ZWQpe2lmKGw/KG8uY3NzKFwiYmFja2dyb3VuZC1pbWFnZVwiLCd1cmwoXCInK2wrJ1wiKScpLG8ucmVtb3ZlQXR0cihcImRhdGEtYmFja2dyb3VuZFwiKSk6KGgmJihvLmF0dHIoXCJzcmNzZXRcIixoKSxvLnJlbW92ZUF0dHIoXCJkYXRhLXNyY3NldFwiKSkscCYmKG8uYXR0cihcInNpemVzXCIscCksby5yZW1vdmVBdHRyKFwiZGF0YS1zaXplc1wiKSksZCYmKG8uYXR0cihcInNyY1wiLGQpLG8ucmVtb3ZlQXR0cihcImRhdGEtc3JjXCIpKSksby5hZGRDbGFzcyhhLmxvYWRlZENsYXNzKS5yZW1vdmVDbGFzcyhhLmxvYWRpbmdDbGFzcyksci5maW5kKFwiLlwiK2EucHJlbG9hZGVyQ2xhc3MpLnJlbW92ZSgpLGkucGFyYW1zLmxvb3AmJnQpe3ZhciBlPXIuYXR0cihcImRhdGEtc3dpcGVyLXNsaWRlLWluZGV4XCIpO2lmKHIuaGFzQ2xhc3MoaS5wYXJhbXMuc2xpZGVEdXBsaWNhdGVDbGFzcykpe3ZhciBzPWkuJHdyYXBwZXJFbC5jaGlsZHJlbignW2RhdGEtc3dpcGVyLXNsaWRlLWluZGV4PVwiJytlKydcIl06bm90KC4nK2kucGFyYW1zLnNsaWRlRHVwbGljYXRlQ2xhc3MrXCIpXCIpO2kubGF6eS5sb2FkSW5TbGlkZShzLmluZGV4KCksITEpfWVsc2V7dmFyIG49aS4kd3JhcHBlckVsLmNoaWxkcmVuKFwiLlwiK2kucGFyYW1zLnNsaWRlRHVwbGljYXRlQ2xhc3MrJ1tkYXRhLXN3aXBlci1zbGlkZS1pbmRleD1cIicrZSsnXCJdJyk7aS5sYXp5LmxvYWRJblNsaWRlKG4uaW5kZXgoKSwhMSl9fWkuZW1pdChcImxhenlJbWFnZVJlYWR5XCIsclswXSxvWzBdKSxpLnBhcmFtcy5hdXRvSGVpZ2h0JiZpLnVwZGF0ZUF1dG9IZWlnaHQoKX19KSksaS5lbWl0KFwibGF6eUltYWdlTG9hZFwiLHJbMF0sb1swXSl9KSl9fSxsb2FkOmZ1bmN0aW9uKCl7dmFyIGU9dGhpcyx0PWUuJHdyYXBwZXJFbCxpPWUucGFyYW1zLGE9ZS5zbGlkZXMscj1lLmFjdGl2ZUluZGV4LG49ZS52aXJ0dWFsJiZpLnZpcnR1YWwuZW5hYmxlZCxvPWkubGF6eSxsPWkuc2xpZGVzUGVyVmlldztmdW5jdGlvbiBkKGUpe2lmKG4pe2lmKHQuY2hpbGRyZW4oXCIuXCIraS5zbGlkZUNsYXNzKydbZGF0YS1zd2lwZXItc2xpZGUtaW5kZXg9XCInK2UrJ1wiXScpLmxlbmd0aClyZXR1cm4hMH1lbHNlIGlmKGFbZV0pcmV0dXJuITA7cmV0dXJuITF9ZnVuY3Rpb24gaChlKXtyZXR1cm4gbj9zKGUpLmF0dHIoXCJkYXRhLXN3aXBlci1zbGlkZS1pbmRleFwiKTpzKGUpLmluZGV4KCl9aWYoXCJhdXRvXCI9PT1sJiYobD0wKSxlLmxhenkuaW5pdGlhbEltYWdlTG9hZGVkfHwoZS5sYXp5LmluaXRpYWxJbWFnZUxvYWRlZD0hMCksZS5wYXJhbXMud2F0Y2hTbGlkZXNWaXNpYmlsaXR5KXQuY2hpbGRyZW4oXCIuXCIraS5zbGlkZVZpc2libGVDbGFzcykuZWFjaCgoZnVuY3Rpb24odCxpKXt2YXIgYT1uP3MoaSkuYXR0cihcImRhdGEtc3dpcGVyLXNsaWRlLWluZGV4XCIpOnMoaSkuaW5kZXgoKTtlLmxhenkubG9hZEluU2xpZGUoYSl9KSk7ZWxzZSBpZihsPjEpZm9yKHZhciBwPXI7cDxyK2w7cCs9MSlkKHApJiZlLmxhenkubG9hZEluU2xpZGUocCk7ZWxzZSBlLmxhenkubG9hZEluU2xpZGUocik7aWYoby5sb2FkUHJldk5leHQpaWYobD4xfHxvLmxvYWRQcmV2TmV4dEFtb3VudCYmby5sb2FkUHJldk5leHRBbW91bnQ+MSl7Zm9yKHZhciBjPW8ubG9hZFByZXZOZXh0QW1vdW50LHU9bCx2PU1hdGgubWluKHIrdStNYXRoLm1heChjLHUpLGEubGVuZ3RoKSxmPU1hdGgubWF4KHItTWF0aC5tYXgodSxjKSwwKSxtPXIrbDttPHY7bSs9MSlkKG0pJiZlLmxhenkubG9hZEluU2xpZGUobSk7Zm9yKHZhciBnPWY7ZzxyO2crPTEpZChnKSYmZS5sYXp5LmxvYWRJblNsaWRlKGcpfWVsc2V7dmFyIGI9dC5jaGlsZHJlbihcIi5cIitpLnNsaWRlTmV4dENsYXNzKTtiLmxlbmd0aD4wJiZlLmxhenkubG9hZEluU2xpZGUoaChiKSk7dmFyIHc9dC5jaGlsZHJlbihcIi5cIitpLnNsaWRlUHJldkNsYXNzKTt3Lmxlbmd0aD4wJiZlLmxhenkubG9hZEluU2xpZGUoaCh3KSl9fX0sZGU9e0xpbmVhclNwbGluZTpmdW5jdGlvbihlLHQpe3ZhciBpLHMsYSxyLG4sbz1mdW5jdGlvbihlLHQpe2ZvcihzPS0xLGk9ZS5sZW5ndGg7aS1zPjE7KWVbYT1pK3M+PjFdPD10P3M9YTppPWE7cmV0dXJuIGl9O3JldHVybiB0aGlzLng9ZSx0aGlzLnk9dCx0aGlzLmxhc3RJbmRleD1lLmxlbmd0aC0xLHRoaXMuaW50ZXJwb2xhdGU9ZnVuY3Rpb24oZSl7cmV0dXJuIGU/KG49byh0aGlzLngsZSkscj1uLTEsKGUtdGhpcy54W3JdKSoodGhpcy55W25dLXRoaXMueVtyXSkvKHRoaXMueFtuXS10aGlzLnhbcl0pK3RoaXMueVtyXSk6MH0sdGhpc30sZ2V0SW50ZXJwb2xhdGVGdW5jdGlvbjpmdW5jdGlvbihlKXt0aGlzLmNvbnRyb2xsZXIuc3BsaW5lfHwodGhpcy5jb250cm9sbGVyLnNwbGluZT10aGlzLnBhcmFtcy5sb29wP25ldyBkZS5MaW5lYXJTcGxpbmUodGhpcy5zbGlkZXNHcmlkLGUuc2xpZGVzR3JpZCk6bmV3IGRlLkxpbmVhclNwbGluZSh0aGlzLnNuYXBHcmlkLGUuc25hcEdyaWQpKX0sc2V0VHJhbnNsYXRlOmZ1bmN0aW9uKGUsdCl7dmFyIGkscyxhPXRoaXMscj1hLmNvbnRyb2xsZXIuY29udHJvbDtmdW5jdGlvbiBuKGUpe3ZhciB0PWEucnRsVHJhbnNsYXRlPy1hLnRyYW5zbGF0ZTphLnRyYW5zbGF0ZTtcInNsaWRlXCI9PT1hLnBhcmFtcy5jb250cm9sbGVyLmJ5JiYoYS5jb250cm9sbGVyLmdldEludGVycG9sYXRlRnVuY3Rpb24oZSkscz0tYS5jb250cm9sbGVyLnNwbGluZS5pbnRlcnBvbGF0ZSgtdCkpLHMmJlwiY29udGFpbmVyXCIhPT1hLnBhcmFtcy5jb250cm9sbGVyLmJ5fHwoaT0oZS5tYXhUcmFuc2xhdGUoKS1lLm1pblRyYW5zbGF0ZSgpKS8oYS5tYXhUcmFuc2xhdGUoKS1hLm1pblRyYW5zbGF0ZSgpKSxzPSh0LWEubWluVHJhbnNsYXRlKCkpKmkrZS5taW5UcmFuc2xhdGUoKSksYS5wYXJhbXMuY29udHJvbGxlci5pbnZlcnNlJiYocz1lLm1heFRyYW5zbGF0ZSgpLXMpLGUudXBkYXRlUHJvZ3Jlc3MocyksZS5zZXRUcmFuc2xhdGUocyxhKSxlLnVwZGF0ZUFjdGl2ZUluZGV4KCksZS51cGRhdGVTbGlkZXNDbGFzc2VzKCl9aWYoQXJyYXkuaXNBcnJheShyKSlmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rPTEpcltvXSE9PXQmJnJbb11pbnN0YW5jZW9mIFcmJm4ocltvXSk7ZWxzZSByIGluc3RhbmNlb2YgVyYmdCE9PXImJm4ocil9LHNldFRyYW5zaXRpb246ZnVuY3Rpb24oZSx0KXt2YXIgaSxzPXRoaXMsYT1zLmNvbnRyb2xsZXIuY29udHJvbDtmdW5jdGlvbiByKHQpe3Quc2V0VHJhbnNpdGlvbihlLHMpLDAhPT1lJiYodC50cmFuc2l0aW9uU3RhcnQoKSx0LnBhcmFtcy5hdXRvSGVpZ2h0JiZuLm5leHRUaWNrKChmdW5jdGlvbigpe3QudXBkYXRlQXV0b0hlaWdodCgpfSkpLHQuJHdyYXBwZXJFbC50cmFuc2l0aW9uRW5kKChmdW5jdGlvbigpe2EmJih0LnBhcmFtcy5sb29wJiZcInNsaWRlXCI9PT1zLnBhcmFtcy5jb250cm9sbGVyLmJ5JiZ0Lmxvb3BGaXgoKSx0LnRyYW5zaXRpb25FbmQoKSl9KSkpfWlmKEFycmF5LmlzQXJyYXkoYSkpZm9yKGk9MDtpPGEubGVuZ3RoO2krPTEpYVtpXSE9PXQmJmFbaV1pbnN0YW5jZW9mIFcmJnIoYVtpXSk7ZWxzZSBhIGluc3RhbmNlb2YgVyYmdCE9PWEmJnIoYSl9fSxoZT17bWFrZUVsRm9jdXNhYmxlOmZ1bmN0aW9uKGUpe3JldHVybiBlLmF0dHIoXCJ0YWJJbmRleFwiLFwiMFwiKSxlfSxhZGRFbFJvbGU6ZnVuY3Rpb24oZSx0KXtyZXR1cm4gZS5hdHRyKFwicm9sZVwiLHQpLGV9LGFkZEVsTGFiZWw6ZnVuY3Rpb24oZSx0KXtyZXR1cm4gZS5hdHRyKFwiYXJpYS1sYWJlbFwiLHQpLGV9LGRpc2FibGVFbDpmdW5jdGlvbihlKXtyZXR1cm4gZS5hdHRyKFwiYXJpYS1kaXNhYmxlZFwiLCEwKSxlfSxlbmFibGVFbDpmdW5jdGlvbihlKXtyZXR1cm4gZS5hdHRyKFwiYXJpYS1kaXNhYmxlZFwiLCExKSxlfSxvbkVudGVyS2V5OmZ1bmN0aW9uKGUpe3ZhciB0PXRoaXMucGFyYW1zLmExMXk7aWYoMTM9PT1lLmtleUNvZGUpe3ZhciBpPXMoZS50YXJnZXQpO3RoaXMubmF2aWdhdGlvbiYmdGhpcy5uYXZpZ2F0aW9uLiRuZXh0RWwmJmkuaXModGhpcy5uYXZpZ2F0aW9uLiRuZXh0RWwpJiYodGhpcy5pc0VuZCYmIXRoaXMucGFyYW1zLmxvb3B8fHRoaXMuc2xpZGVOZXh0KCksdGhpcy5pc0VuZD90aGlzLmExMXkubm90aWZ5KHQubGFzdFNsaWRlTWVzc2FnZSk6dGhpcy5hMTF5Lm5vdGlmeSh0Lm5leHRTbGlkZU1lc3NhZ2UpKSx0aGlzLm5hdmlnYXRpb24mJnRoaXMubmF2aWdhdGlvbi4kcHJldkVsJiZpLmlzKHRoaXMubmF2aWdhdGlvbi4kcHJldkVsKSYmKHRoaXMuaXNCZWdpbm5pbmcmJiF0aGlzLnBhcmFtcy5sb29wfHx0aGlzLnNsaWRlUHJldigpLHRoaXMuaXNCZWdpbm5pbmc/dGhpcy5hMTF5Lm5vdGlmeSh0LmZpcnN0U2xpZGVNZXNzYWdlKTp0aGlzLmExMXkubm90aWZ5KHQucHJldlNsaWRlTWVzc2FnZSkpLHRoaXMucGFnaW5hdGlvbiYmaS5pcyhcIi5cIit0aGlzLnBhcmFtcy5wYWdpbmF0aW9uLmJ1bGxldENsYXNzKSYmaVswXS5jbGljaygpfX0sbm90aWZ5OmZ1bmN0aW9uKGUpe3ZhciB0PXRoaXMuYTExeS5saXZlUmVnaW9uOzAhPT10Lmxlbmd0aCYmKHQuaHRtbChcIlwiKSx0Lmh0bWwoZSkpfSx1cGRhdGVOYXZpZ2F0aW9uOmZ1bmN0aW9uKCl7aWYoIXRoaXMucGFyYW1zLmxvb3AmJnRoaXMubmF2aWdhdGlvbil7dmFyIGU9dGhpcy5uYXZpZ2F0aW9uLHQ9ZS4kbmV4dEVsLGk9ZS4kcHJldkVsO2kmJmkubGVuZ3RoPjAmJih0aGlzLmlzQmVnaW5uaW5nP3RoaXMuYTExeS5kaXNhYmxlRWwoaSk6dGhpcy5hMTF5LmVuYWJsZUVsKGkpKSx0JiZ0Lmxlbmd0aD4wJiYodGhpcy5pc0VuZD90aGlzLmExMXkuZGlzYWJsZUVsKHQpOnRoaXMuYTExeS5lbmFibGVFbCh0KSl9fSx1cGRhdGVQYWdpbmF0aW9uOmZ1bmN0aW9uKCl7dmFyIGU9dGhpcyx0PWUucGFyYW1zLmExMXk7ZS5wYWdpbmF0aW9uJiZlLnBhcmFtcy5wYWdpbmF0aW9uLmNsaWNrYWJsZSYmZS5wYWdpbmF0aW9uLmJ1bGxldHMmJmUucGFnaW5hdGlvbi5idWxsZXRzLmxlbmd0aCYmZS5wYWdpbmF0aW9uLmJ1bGxldHMuZWFjaCgoZnVuY3Rpb24oaSxhKXt2YXIgcj1zKGEpO2UuYTExeS5tYWtlRWxGb2N1c2FibGUociksZS5hMTF5LmFkZEVsUm9sZShyLFwiYnV0dG9uXCIpLGUuYTExeS5hZGRFbExhYmVsKHIsdC5wYWdpbmF0aW9uQnVsbGV0TWVzc2FnZS5yZXBsYWNlKC9cXHtcXHtpbmRleFxcfVxcfS8sci5pbmRleCgpKzEpKX0pKX0saW5pdDpmdW5jdGlvbigpe3RoaXMuJGVsLmFwcGVuZCh0aGlzLmExMXkubGl2ZVJlZ2lvbik7dmFyIGUsdCxpPXRoaXMucGFyYW1zLmExMXk7dGhpcy5uYXZpZ2F0aW9uJiZ0aGlzLm5hdmlnYXRpb24uJG5leHRFbCYmKGU9dGhpcy5uYXZpZ2F0aW9uLiRuZXh0RWwpLHRoaXMubmF2aWdhdGlvbiYmdGhpcy5uYXZpZ2F0aW9uLiRwcmV2RWwmJih0PXRoaXMubmF2aWdhdGlvbi4kcHJldkVsKSxlJiYodGhpcy5hMTF5Lm1ha2VFbEZvY3VzYWJsZShlKSx0aGlzLmExMXkuYWRkRWxSb2xlKGUsXCJidXR0b25cIiksdGhpcy5hMTF5LmFkZEVsTGFiZWwoZSxpLm5leHRTbGlkZU1lc3NhZ2UpLGUub24oXCJrZXlkb3duXCIsdGhpcy5hMTF5Lm9uRW50ZXJLZXkpKSx0JiYodGhpcy5hMTF5Lm1ha2VFbEZvY3VzYWJsZSh0KSx0aGlzLmExMXkuYWRkRWxSb2xlKHQsXCJidXR0b25cIiksdGhpcy5hMTF5LmFkZEVsTGFiZWwodCxpLnByZXZTbGlkZU1lc3NhZ2UpLHQub24oXCJrZXlkb3duXCIsdGhpcy5hMTF5Lm9uRW50ZXJLZXkpKSx0aGlzLnBhZ2luYXRpb24mJnRoaXMucGFyYW1zLnBhZ2luYXRpb24uY2xpY2thYmxlJiZ0aGlzLnBhZ2luYXRpb24uYnVsbGV0cyYmdGhpcy5wYWdpbmF0aW9uLmJ1bGxldHMubGVuZ3RoJiZ0aGlzLnBhZ2luYXRpb24uJGVsLm9uKFwia2V5ZG93blwiLFwiLlwiK3RoaXMucGFyYW1zLnBhZ2luYXRpb24uYnVsbGV0Q2xhc3MsdGhpcy5hMTF5Lm9uRW50ZXJLZXkpfSxkZXN0cm95OmZ1bmN0aW9uKCl7dmFyIGUsdDt0aGlzLmExMXkubGl2ZVJlZ2lvbiYmdGhpcy5hMTF5LmxpdmVSZWdpb24ubGVuZ3RoPjAmJnRoaXMuYTExeS5saXZlUmVnaW9uLnJlbW92ZSgpLHRoaXMubmF2aWdhdGlvbiYmdGhpcy5uYXZpZ2F0aW9uLiRuZXh0RWwmJihlPXRoaXMubmF2aWdhdGlvbi4kbmV4dEVsKSx0aGlzLm5hdmlnYXRpb24mJnRoaXMubmF2aWdhdGlvbi4kcHJldkVsJiYodD10aGlzLm5hdmlnYXRpb24uJHByZXZFbCksZSYmZS5vZmYoXCJrZXlkb3duXCIsdGhpcy5hMTF5Lm9uRW50ZXJLZXkpLHQmJnQub2ZmKFwia2V5ZG93blwiLHRoaXMuYTExeS5vbkVudGVyS2V5KSx0aGlzLnBhZ2luYXRpb24mJnRoaXMucGFyYW1zLnBhZ2luYXRpb24uY2xpY2thYmxlJiZ0aGlzLnBhZ2luYXRpb24uYnVsbGV0cyYmdGhpcy5wYWdpbmF0aW9uLmJ1bGxldHMubGVuZ3RoJiZ0aGlzLnBhZ2luYXRpb24uJGVsLm9mZihcImtleWRvd25cIixcIi5cIit0aGlzLnBhcmFtcy5wYWdpbmF0aW9uLmJ1bGxldENsYXNzLHRoaXMuYTExeS5vbkVudGVyS2V5KX19LHBlPXtpbml0OmZ1bmN0aW9uKCl7aWYodGhpcy5wYXJhbXMuaGlzdG9yeSl7aWYoIXQuaGlzdG9yeXx8IXQuaGlzdG9yeS5wdXNoU3RhdGUpcmV0dXJuIHRoaXMucGFyYW1zLmhpc3RvcnkuZW5hYmxlZD0hMSx2b2lkKHRoaXMucGFyYW1zLmhhc2hOYXZpZ2F0aW9uLmVuYWJsZWQ9ITApO3ZhciBlPXRoaXMuaGlzdG9yeTtlLmluaXRpYWxpemVkPSEwLGUucGF0aHM9cGUuZ2V0UGF0aFZhbHVlcygpLChlLnBhdGhzLmtleXx8ZS5wYXRocy52YWx1ZSkmJihlLnNjcm9sbFRvU2xpZGUoMCxlLnBhdGhzLnZhbHVlLHRoaXMucGFyYW1zLnJ1bkNhbGxiYWNrc09uSW5pdCksdGhpcy5wYXJhbXMuaGlzdG9yeS5yZXBsYWNlU3RhdGV8fHQuYWRkRXZlbnRMaXN0ZW5lcihcInBvcHN0YXRlXCIsdGhpcy5oaXN0b3J5LnNldEhpc3RvcnlQb3BTdGF0ZSkpfX0sZGVzdHJveTpmdW5jdGlvbigpe3RoaXMucGFyYW1zLmhpc3RvcnkucmVwbGFjZVN0YXRlfHx0LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJwb3BzdGF0ZVwiLHRoaXMuaGlzdG9yeS5zZXRIaXN0b3J5UG9wU3RhdGUpfSxzZXRIaXN0b3J5UG9wU3RhdGU6ZnVuY3Rpb24oKXt0aGlzLmhpc3RvcnkucGF0aHM9cGUuZ2V0UGF0aFZhbHVlcygpLHRoaXMuaGlzdG9yeS5zY3JvbGxUb1NsaWRlKHRoaXMucGFyYW1zLnNwZWVkLHRoaXMuaGlzdG9yeS5wYXRocy52YWx1ZSwhMSl9LGdldFBhdGhWYWx1ZXM6ZnVuY3Rpb24oKXt2YXIgZT10LmxvY2F0aW9uLnBhdGhuYW1lLnNsaWNlKDEpLnNwbGl0KFwiL1wiKS5maWx0ZXIoKGZ1bmN0aW9uKGUpe3JldHVyblwiXCIhPT1lfSkpLGk9ZS5sZW5ndGg7cmV0dXJue2tleTplW2ktMl0sdmFsdWU6ZVtpLTFdfX0sc2V0SGlzdG9yeTpmdW5jdGlvbihlLGkpe2lmKHRoaXMuaGlzdG9yeS5pbml0aWFsaXplZCYmdGhpcy5wYXJhbXMuaGlzdG9yeS5lbmFibGVkKXt2YXIgcz10aGlzLnNsaWRlcy5lcShpKSxhPXBlLnNsdWdpZnkocy5hdHRyKFwiZGF0YS1oaXN0b3J5XCIpKTt0LmxvY2F0aW9uLnBhdGhuYW1lLmluY2x1ZGVzKGUpfHwoYT1lK1wiL1wiK2EpO3ZhciByPXQuaGlzdG9yeS5zdGF0ZTtyJiZyLnZhbHVlPT09YXx8KHRoaXMucGFyYW1zLmhpc3RvcnkucmVwbGFjZVN0YXRlP3QuaGlzdG9yeS5yZXBsYWNlU3RhdGUoe3ZhbHVlOmF9LG51bGwsYSk6dC5oaXN0b3J5LnB1c2hTdGF0ZSh7dmFsdWU6YX0sbnVsbCxhKSl9fSxzbHVnaWZ5OmZ1bmN0aW9uKGUpe3JldHVybiBlLnRvU3RyaW5nKCkucmVwbGFjZSgvXFxzKy9nLFwiLVwiKS5yZXBsYWNlKC9bXlxcdy1dKy9nLFwiXCIpLnJlcGxhY2UoLy0tKy9nLFwiLVwiKS5yZXBsYWNlKC9eLSsvLFwiXCIpLnJlcGxhY2UoLy0rJC8sXCJcIil9LHNjcm9sbFRvU2xpZGU6ZnVuY3Rpb24oZSx0LGkpe2lmKHQpZm9yKHZhciBzPTAsYT10aGlzLnNsaWRlcy5sZW5ndGg7czxhO3MrPTEpe3ZhciByPXRoaXMuc2xpZGVzLmVxKHMpO2lmKHBlLnNsdWdpZnkoci5hdHRyKFwiZGF0YS1oaXN0b3J5XCIpKT09PXQmJiFyLmhhc0NsYXNzKHRoaXMucGFyYW1zLnNsaWRlRHVwbGljYXRlQ2xhc3MpKXt2YXIgbj1yLmluZGV4KCk7dGhpcy5zbGlkZVRvKG4sZSxpKX19ZWxzZSB0aGlzLnNsaWRlVG8oMCxlLGkpfX0sY2U9e29uSGFzaENhbmdlOmZ1bmN0aW9uKCl7dmFyIHQ9ZS5sb2NhdGlvbi5oYXNoLnJlcGxhY2UoXCIjXCIsXCJcIik7aWYodCE9PXRoaXMuc2xpZGVzLmVxKHRoaXMuYWN0aXZlSW5kZXgpLmF0dHIoXCJkYXRhLWhhc2hcIikpe3ZhciBpPXRoaXMuJHdyYXBwZXJFbC5jaGlsZHJlbihcIi5cIit0aGlzLnBhcmFtcy5zbGlkZUNsYXNzKydbZGF0YS1oYXNoPVwiJyt0KydcIl0nKS5pbmRleCgpO2lmKHZvaWQgMD09PWkpcmV0dXJuO3RoaXMuc2xpZGVUbyhpKX19LHNldEhhc2g6ZnVuY3Rpb24oKXtpZih0aGlzLmhhc2hOYXZpZ2F0aW9uLmluaXRpYWxpemVkJiZ0aGlzLnBhcmFtcy5oYXNoTmF2aWdhdGlvbi5lbmFibGVkKWlmKHRoaXMucGFyYW1zLmhhc2hOYXZpZ2F0aW9uLnJlcGxhY2VTdGF0ZSYmdC5oaXN0b3J5JiZ0Lmhpc3RvcnkucmVwbGFjZVN0YXRlKXQuaGlzdG9yeS5yZXBsYWNlU3RhdGUobnVsbCxudWxsLFwiI1wiK3RoaXMuc2xpZGVzLmVxKHRoaXMuYWN0aXZlSW5kZXgpLmF0dHIoXCJkYXRhLWhhc2hcIil8fFwiXCIpO2Vsc2V7dmFyIGk9dGhpcy5zbGlkZXMuZXEodGhpcy5hY3RpdmVJbmRleCkscz1pLmF0dHIoXCJkYXRhLWhhc2hcIil8fGkuYXR0cihcImRhdGEtaGlzdG9yeVwiKTtlLmxvY2F0aW9uLmhhc2g9c3x8XCJcIn19LGluaXQ6ZnVuY3Rpb24oKXtpZighKCF0aGlzLnBhcmFtcy5oYXNoTmF2aWdhdGlvbi5lbmFibGVkfHx0aGlzLnBhcmFtcy5oaXN0b3J5JiZ0aGlzLnBhcmFtcy5oaXN0b3J5LmVuYWJsZWQpKXt0aGlzLmhhc2hOYXZpZ2F0aW9uLmluaXRpYWxpemVkPSEwO3ZhciBpPWUubG9jYXRpb24uaGFzaC5yZXBsYWNlKFwiI1wiLFwiXCIpO2lmKGkpZm9yKHZhciBhPTAscj10aGlzLnNsaWRlcy5sZW5ndGg7YTxyO2ErPTEpe3ZhciBuPXRoaXMuc2xpZGVzLmVxKGEpO2lmKChuLmF0dHIoXCJkYXRhLWhhc2hcIil8fG4uYXR0cihcImRhdGEtaGlzdG9yeVwiKSk9PT1pJiYhbi5oYXNDbGFzcyh0aGlzLnBhcmFtcy5zbGlkZUR1cGxpY2F0ZUNsYXNzKSl7dmFyIG89bi5pbmRleCgpO3RoaXMuc2xpZGVUbyhvLDAsdGhpcy5wYXJhbXMucnVuQ2FsbGJhY2tzT25Jbml0LCEwKX19dGhpcy5wYXJhbXMuaGFzaE5hdmlnYXRpb24ud2F0Y2hTdGF0ZSYmcyh0KS5vbihcImhhc2hjaGFuZ2VcIix0aGlzLmhhc2hOYXZpZ2F0aW9uLm9uSGFzaENhbmdlKX19LGRlc3Ryb3k6ZnVuY3Rpb24oKXt0aGlzLnBhcmFtcy5oYXNoTmF2aWdhdGlvbi53YXRjaFN0YXRlJiZzKHQpLm9mZihcImhhc2hjaGFuZ2VcIix0aGlzLmhhc2hOYXZpZ2F0aW9uLm9uSGFzaENhbmdlKX19LHVlPXtydW46ZnVuY3Rpb24oKXt2YXIgZT10aGlzLHQ9ZS5zbGlkZXMuZXEoZS5hY3RpdmVJbmRleCksaT1lLnBhcmFtcy5hdXRvcGxheS5kZWxheTt0LmF0dHIoXCJkYXRhLXN3aXBlci1hdXRvcGxheVwiKSYmKGk9dC5hdHRyKFwiZGF0YS1zd2lwZXItYXV0b3BsYXlcIil8fGUucGFyYW1zLmF1dG9wbGF5LmRlbGF5KSxjbGVhclRpbWVvdXQoZS5hdXRvcGxheS50aW1lb3V0KSxlLmF1dG9wbGF5LnRpbWVvdXQ9bi5uZXh0VGljaygoZnVuY3Rpb24oKXtlLnBhcmFtcy5hdXRvcGxheS5yZXZlcnNlRGlyZWN0aW9uP2UucGFyYW1zLmxvb3A/KGUubG9vcEZpeCgpLGUuc2xpZGVQcmV2KGUucGFyYW1zLnNwZWVkLCEwLCEwKSxlLmVtaXQoXCJhdXRvcGxheVwiKSk6ZS5pc0JlZ2lubmluZz9lLnBhcmFtcy5hdXRvcGxheS5zdG9wT25MYXN0U2xpZGU/ZS5hdXRvcGxheS5zdG9wKCk6KGUuc2xpZGVUbyhlLnNsaWRlcy5sZW5ndGgtMSxlLnBhcmFtcy5zcGVlZCwhMCwhMCksZS5lbWl0KFwiYXV0b3BsYXlcIikpOihlLnNsaWRlUHJldihlLnBhcmFtcy5zcGVlZCwhMCwhMCksZS5lbWl0KFwiYXV0b3BsYXlcIikpOmUucGFyYW1zLmxvb3A/KGUubG9vcEZpeCgpLGUuc2xpZGVOZXh0KGUucGFyYW1zLnNwZWVkLCEwLCEwKSxlLmVtaXQoXCJhdXRvcGxheVwiKSk6ZS5pc0VuZD9lLnBhcmFtcy5hdXRvcGxheS5zdG9wT25MYXN0U2xpZGU/ZS5hdXRvcGxheS5zdG9wKCk6KGUuc2xpZGVUbygwLGUucGFyYW1zLnNwZWVkLCEwLCEwKSxlLmVtaXQoXCJhdXRvcGxheVwiKSk6KGUuc2xpZGVOZXh0KGUucGFyYW1zLnNwZWVkLCEwLCEwKSxlLmVtaXQoXCJhdXRvcGxheVwiKSksZS5wYXJhbXMuY3NzTW9kZSYmZS5hdXRvcGxheS5ydW5uaW5nJiZlLmF1dG9wbGF5LnJ1bigpfSksaSl9LHN0YXJ0OmZ1bmN0aW9uKCl7cmV0dXJuIHZvaWQgMD09PXRoaXMuYXV0b3BsYXkudGltZW91dCYmKCF0aGlzLmF1dG9wbGF5LnJ1bm5pbmcmJih0aGlzLmF1dG9wbGF5LnJ1bm5pbmc9ITAsdGhpcy5lbWl0KFwiYXV0b3BsYXlTdGFydFwiKSx0aGlzLmF1dG9wbGF5LnJ1bigpLCEwKSl9LHN0b3A6ZnVuY3Rpb24oKXtyZXR1cm4hIXRoaXMuYXV0b3BsYXkucnVubmluZyYmKHZvaWQgMCE9PXRoaXMuYXV0b3BsYXkudGltZW91dCYmKHRoaXMuYXV0b3BsYXkudGltZW91dCYmKGNsZWFyVGltZW91dCh0aGlzLmF1dG9wbGF5LnRpbWVvdXQpLHRoaXMuYXV0b3BsYXkudGltZW91dD12b2lkIDApLHRoaXMuYXV0b3BsYXkucnVubmluZz0hMSx0aGlzLmVtaXQoXCJhdXRvcGxheVN0b3BcIiksITApKX0scGF1c2U6ZnVuY3Rpb24oZSl7dGhpcy5hdXRvcGxheS5ydW5uaW5nJiYodGhpcy5hdXRvcGxheS5wYXVzZWR8fCh0aGlzLmF1dG9wbGF5LnRpbWVvdXQmJmNsZWFyVGltZW91dCh0aGlzLmF1dG9wbGF5LnRpbWVvdXQpLHRoaXMuYXV0b3BsYXkucGF1c2VkPSEwLDAhPT1lJiZ0aGlzLnBhcmFtcy5hdXRvcGxheS53YWl0Rm9yVHJhbnNpdGlvbj8odGhpcy4kd3JhcHBlckVsWzBdLmFkZEV2ZW50TGlzdGVuZXIoXCJ0cmFuc2l0aW9uZW5kXCIsdGhpcy5hdXRvcGxheS5vblRyYW5zaXRpb25FbmQpLHRoaXMuJHdyYXBwZXJFbFswXS5hZGRFdmVudExpc3RlbmVyKFwid2Via2l0VHJhbnNpdGlvbkVuZFwiLHRoaXMuYXV0b3BsYXkub25UcmFuc2l0aW9uRW5kKSk6KHRoaXMuYXV0b3BsYXkucGF1c2VkPSExLHRoaXMuYXV0b3BsYXkucnVuKCkpKSl9fSx2ZT17c2V0VHJhbnNsYXRlOmZ1bmN0aW9uKCl7Zm9yKHZhciBlPXRoaXMuc2xpZGVzLHQ9MDt0PGUubGVuZ3RoO3QrPTEpe3ZhciBpPXRoaXMuc2xpZGVzLmVxKHQpLHM9LWlbMF0uc3dpcGVyU2xpZGVPZmZzZXQ7dGhpcy5wYXJhbXMudmlydHVhbFRyYW5zbGF0ZXx8KHMtPXRoaXMudHJhbnNsYXRlKTt2YXIgYT0wO3RoaXMuaXNIb3Jpem9udGFsKCl8fChhPXMscz0wKTt2YXIgcj10aGlzLnBhcmFtcy5mYWRlRWZmZWN0LmNyb3NzRmFkZT9NYXRoLm1heCgxLU1hdGguYWJzKGlbMF0ucHJvZ3Jlc3MpLDApOjErTWF0aC5taW4oTWF0aC5tYXgoaVswXS5wcm9ncmVzcywtMSksMCk7aS5jc3Moe29wYWNpdHk6cn0pLnRyYW5zZm9ybShcInRyYW5zbGF0ZTNkKFwiK3MrXCJweCwgXCIrYStcInB4LCAwcHgpXCIpfX0sc2V0VHJhbnNpdGlvbjpmdW5jdGlvbihlKXt2YXIgdD10aGlzLGk9dC5zbGlkZXMscz10LiR3cmFwcGVyRWw7aWYoaS50cmFuc2l0aW9uKGUpLHQucGFyYW1zLnZpcnR1YWxUcmFuc2xhdGUmJjAhPT1lKXt2YXIgYT0hMTtpLnRyYW5zaXRpb25FbmQoKGZ1bmN0aW9uKCl7aWYoIWEmJnQmJiF0LmRlc3Ryb3llZCl7YT0hMCx0LmFuaW1hdGluZz0hMTtmb3IodmFyIGU9W1wid2Via2l0VHJhbnNpdGlvbkVuZFwiLFwidHJhbnNpdGlvbmVuZFwiXSxpPTA7aTxlLmxlbmd0aDtpKz0xKXMudHJpZ2dlcihlW2ldKX19KSl9fX0sZmU9e3NldFRyYW5zbGF0ZTpmdW5jdGlvbigpe3ZhciBlLHQ9dGhpcy4kZWwsaT10aGlzLiR3cmFwcGVyRWwsYT10aGlzLnNsaWRlcyxyPXRoaXMud2lkdGgsbj10aGlzLmhlaWdodCxvPXRoaXMucnRsVHJhbnNsYXRlLGw9dGhpcy5zaXplLGQ9dGhpcy5wYXJhbXMuY3ViZUVmZmVjdCxoPXRoaXMuaXNIb3Jpem9udGFsKCkscD10aGlzLnZpcnR1YWwmJnRoaXMucGFyYW1zLnZpcnR1YWwuZW5hYmxlZCxjPTA7ZC5zaGFkb3cmJihoPygwPT09KGU9aS5maW5kKFwiLnN3aXBlci1jdWJlLXNoYWRvd1wiKSkubGVuZ3RoJiYoZT1zKCc8ZGl2IGNsYXNzPVwic3dpcGVyLWN1YmUtc2hhZG93XCI+PC9kaXY+JyksaS5hcHBlbmQoZSkpLGUuY3NzKHtoZWlnaHQ6citcInB4XCJ9KSk6MD09PShlPXQuZmluZChcIi5zd2lwZXItY3ViZS1zaGFkb3dcIikpLmxlbmd0aCYmKGU9cygnPGRpdiBjbGFzcz1cInN3aXBlci1jdWJlLXNoYWRvd1wiPjwvZGl2PicpLHQuYXBwZW5kKGUpKSk7Zm9yKHZhciB1PTA7dTxhLmxlbmd0aDt1Kz0xKXt2YXIgdj1hLmVxKHUpLGY9dTtwJiYoZj1wYXJzZUludCh2LmF0dHIoXCJkYXRhLXN3aXBlci1zbGlkZS1pbmRleFwiKSwxMCkpO3ZhciBtPTkwKmYsZz1NYXRoLmZsb29yKG0vMzYwKTtvJiYobT0tbSxnPU1hdGguZmxvb3IoLW0vMzYwKSk7dmFyIGI9TWF0aC5tYXgoTWF0aC5taW4odlswXS5wcm9ncmVzcywxKSwtMSksdz0wLHk9MCx4PTA7ZiU0PT0wPyh3PTQqLWcqbCx4PTApOihmLTEpJTQ9PTA/KHc9MCx4PTQqLWcqbCk6KGYtMiklND09MD8odz1sKzQqZypsLHg9bCk6KGYtMyklND09MCYmKHc9LWwseD0zKmwrNCpsKmcpLG8mJih3PS13KSxofHwoeT13LHc9MCk7dmFyIFQ9XCJyb3RhdGVYKFwiKyhoPzA6LW0pK1wiZGVnKSByb3RhdGVZKFwiKyhoP206MCkrXCJkZWcpIHRyYW5zbGF0ZTNkKFwiK3crXCJweCwgXCIreStcInB4LCBcIit4K1wicHgpXCI7aWYoYjw9MSYmYj4tMSYmKGM9OTAqZis5MCpiLG8mJihjPTkwKi1mLTkwKmIpKSx2LnRyYW5zZm9ybShUKSxkLnNsaWRlU2hhZG93cyl7dmFyIEU9aD92LmZpbmQoXCIuc3dpcGVyLXNsaWRlLXNoYWRvdy1sZWZ0XCIpOnYuZmluZChcIi5zd2lwZXItc2xpZGUtc2hhZG93LXRvcFwiKSxTPWg/di5maW5kKFwiLnN3aXBlci1zbGlkZS1zaGFkb3ctcmlnaHRcIik6di5maW5kKFwiLnN3aXBlci1zbGlkZS1zaGFkb3ctYm90dG9tXCIpOzA9PT1FLmxlbmd0aCYmKEU9cygnPGRpdiBjbGFzcz1cInN3aXBlci1zbGlkZS1zaGFkb3ctJysoaD9cImxlZnRcIjpcInRvcFwiKSsnXCI+PC9kaXY+Jyksdi5hcHBlbmQoRSkpLDA9PT1TLmxlbmd0aCYmKFM9cygnPGRpdiBjbGFzcz1cInN3aXBlci1zbGlkZS1zaGFkb3ctJysoaD9cInJpZ2h0XCI6XCJib3R0b21cIikrJ1wiPjwvZGl2PicpLHYuYXBwZW5kKFMpKSxFLmxlbmd0aCYmKEVbMF0uc3R5bGUub3BhY2l0eT1NYXRoLm1heCgtYiwwKSksUy5sZW5ndGgmJihTWzBdLnN0eWxlLm9wYWNpdHk9TWF0aC5tYXgoYiwwKSl9fWlmKGkuY3NzKHtcIi13ZWJraXQtdHJhbnNmb3JtLW9yaWdpblwiOlwiNTAlIDUwJSAtXCIrbC8yK1wicHhcIixcIi1tb3otdHJhbnNmb3JtLW9yaWdpblwiOlwiNTAlIDUwJSAtXCIrbC8yK1wicHhcIixcIi1tcy10cmFuc2Zvcm0tb3JpZ2luXCI6XCI1MCUgNTAlIC1cIitsLzIrXCJweFwiLFwidHJhbnNmb3JtLW9yaWdpblwiOlwiNTAlIDUwJSAtXCIrbC8yK1wicHhcIn0pLGQuc2hhZG93KWlmKGgpZS50cmFuc2Zvcm0oXCJ0cmFuc2xhdGUzZCgwcHgsIFwiKyhyLzIrZC5zaGFkb3dPZmZzZXQpK1wicHgsIFwiKy1yLzIrXCJweCkgcm90YXRlWCg5MGRlZykgcm90YXRlWigwZGVnKSBzY2FsZShcIitkLnNoYWRvd1NjYWxlK1wiKVwiKTtlbHNle3ZhciBDPU1hdGguYWJzKGMpLTkwKk1hdGguZmxvb3IoTWF0aC5hYnMoYykvOTApLE09MS41LShNYXRoLnNpbigyKkMqTWF0aC5QSS8zNjApLzIrTWF0aC5jb3MoMipDKk1hdGguUEkvMzYwKS8yKSxQPWQuc2hhZG93U2NhbGUsej1kLnNoYWRvd1NjYWxlL00saz1kLnNoYWRvd09mZnNldDtlLnRyYW5zZm9ybShcInNjYWxlM2QoXCIrUCtcIiwgMSwgXCIreitcIikgdHJhbnNsYXRlM2QoMHB4LCBcIisobi8yK2spK1wicHgsIFwiKy1uLzIveitcInB4KSByb3RhdGVYKC05MGRlZylcIil9dmFyICQ9ai5pc1NhZmFyaXx8ai5pc1VpV2ViVmlldz8tbC8yOjA7aS50cmFuc2Zvcm0oXCJ0cmFuc2xhdGUzZCgwcHgsMCxcIiskK1wicHgpIHJvdGF0ZVgoXCIrKHRoaXMuaXNIb3Jpem9udGFsKCk/MDpjKStcImRlZykgcm90YXRlWShcIisodGhpcy5pc0hvcml6b250YWwoKT8tYzowKStcImRlZylcIil9LHNldFRyYW5zaXRpb246ZnVuY3Rpb24oZSl7dmFyIHQ9dGhpcy4kZWw7dGhpcy5zbGlkZXMudHJhbnNpdGlvbihlKS5maW5kKFwiLnN3aXBlci1zbGlkZS1zaGFkb3ctdG9wLCAuc3dpcGVyLXNsaWRlLXNoYWRvdy1yaWdodCwgLnN3aXBlci1zbGlkZS1zaGFkb3ctYm90dG9tLCAuc3dpcGVyLXNsaWRlLXNoYWRvdy1sZWZ0XCIpLnRyYW5zaXRpb24oZSksdGhpcy5wYXJhbXMuY3ViZUVmZmVjdC5zaGFkb3cmJiF0aGlzLmlzSG9yaXpvbnRhbCgpJiZ0LmZpbmQoXCIuc3dpcGVyLWN1YmUtc2hhZG93XCIpLnRyYW5zaXRpb24oZSl9fSxtZT17c2V0VHJhbnNsYXRlOmZ1bmN0aW9uKCl7Zm9yKHZhciBlPXRoaXMuc2xpZGVzLHQ9dGhpcy5ydGxUcmFuc2xhdGUsaT0wO2k8ZS5sZW5ndGg7aSs9MSl7dmFyIGE9ZS5lcShpKSxyPWFbMF0ucHJvZ3Jlc3M7dGhpcy5wYXJhbXMuZmxpcEVmZmVjdC5saW1pdFJvdGF0aW9uJiYocj1NYXRoLm1heChNYXRoLm1pbihhWzBdLnByb2dyZXNzLDEpLC0xKSk7dmFyIG49LTE4MCpyLG89MCxsPS1hWzBdLnN3aXBlclNsaWRlT2Zmc2V0LGQ9MDtpZih0aGlzLmlzSG9yaXpvbnRhbCgpP3QmJihuPS1uKTooZD1sLGw9MCxvPS1uLG49MCksYVswXS5zdHlsZS56SW5kZXg9LU1hdGguYWJzKE1hdGgucm91bmQocikpK2UubGVuZ3RoLHRoaXMucGFyYW1zLmZsaXBFZmZlY3Quc2xpZGVTaGFkb3dzKXt2YXIgaD10aGlzLmlzSG9yaXpvbnRhbCgpP2EuZmluZChcIi5zd2lwZXItc2xpZGUtc2hhZG93LWxlZnRcIik6YS5maW5kKFwiLnN3aXBlci1zbGlkZS1zaGFkb3ctdG9wXCIpLHA9dGhpcy5pc0hvcml6b250YWwoKT9hLmZpbmQoXCIuc3dpcGVyLXNsaWRlLXNoYWRvdy1yaWdodFwiKTphLmZpbmQoXCIuc3dpcGVyLXNsaWRlLXNoYWRvdy1ib3R0b21cIik7MD09PWgubGVuZ3RoJiYoaD1zKCc8ZGl2IGNsYXNzPVwic3dpcGVyLXNsaWRlLXNoYWRvdy0nKyh0aGlzLmlzSG9yaXpvbnRhbCgpP1wibGVmdFwiOlwidG9wXCIpKydcIj48L2Rpdj4nKSxhLmFwcGVuZChoKSksMD09PXAubGVuZ3RoJiYocD1zKCc8ZGl2IGNsYXNzPVwic3dpcGVyLXNsaWRlLXNoYWRvdy0nKyh0aGlzLmlzSG9yaXpvbnRhbCgpP1wicmlnaHRcIjpcImJvdHRvbVwiKSsnXCI+PC9kaXY+JyksYS5hcHBlbmQocCkpLGgubGVuZ3RoJiYoaFswXS5zdHlsZS5vcGFjaXR5PU1hdGgubWF4KC1yLDApKSxwLmxlbmd0aCYmKHBbMF0uc3R5bGUub3BhY2l0eT1NYXRoLm1heChyLDApKX1hLnRyYW5zZm9ybShcInRyYW5zbGF0ZTNkKFwiK2wrXCJweCwgXCIrZCtcInB4LCAwcHgpIHJvdGF0ZVgoXCIrbytcImRlZykgcm90YXRlWShcIituK1wiZGVnKVwiKX19LHNldFRyYW5zaXRpb246ZnVuY3Rpb24oZSl7dmFyIHQ9dGhpcyxpPXQuc2xpZGVzLHM9dC5hY3RpdmVJbmRleCxhPXQuJHdyYXBwZXJFbDtpZihpLnRyYW5zaXRpb24oZSkuZmluZChcIi5zd2lwZXItc2xpZGUtc2hhZG93LXRvcCwgLnN3aXBlci1zbGlkZS1zaGFkb3ctcmlnaHQsIC5zd2lwZXItc2xpZGUtc2hhZG93LWJvdHRvbSwgLnN3aXBlci1zbGlkZS1zaGFkb3ctbGVmdFwiKS50cmFuc2l0aW9uKGUpLHQucGFyYW1zLnZpcnR1YWxUcmFuc2xhdGUmJjAhPT1lKXt2YXIgcj0hMTtpLmVxKHMpLnRyYW5zaXRpb25FbmQoKGZ1bmN0aW9uKCl7aWYoIXImJnQmJiF0LmRlc3Ryb3llZCl7cj0hMCx0LmFuaW1hdGluZz0hMTtmb3IodmFyIGU9W1wid2Via2l0VHJhbnNpdGlvbkVuZFwiLFwidHJhbnNpdGlvbmVuZFwiXSxpPTA7aTxlLmxlbmd0aDtpKz0xKWEudHJpZ2dlcihlW2ldKX19KSl9fX0sZ2U9e3NldFRyYW5zbGF0ZTpmdW5jdGlvbigpe2Zvcih2YXIgZT10aGlzLndpZHRoLHQ9dGhpcy5oZWlnaHQsaT10aGlzLnNsaWRlcyxhPXRoaXMuJHdyYXBwZXJFbCxyPXRoaXMuc2xpZGVzU2l6ZXNHcmlkLG49dGhpcy5wYXJhbXMuY292ZXJmbG93RWZmZWN0LGw9dGhpcy5pc0hvcml6b250YWwoKSxkPXRoaXMudHJhbnNsYXRlLGg9bD9lLzItZDp0LzItZCxwPWw/bi5yb3RhdGU6LW4ucm90YXRlLGM9bi5kZXB0aCx1PTAsdj1pLmxlbmd0aDt1PHY7dSs9MSl7dmFyIGY9aS5lcSh1KSxtPXJbdV0sZz0oaC1mWzBdLnN3aXBlclNsaWRlT2Zmc2V0LW0vMikvbSpuLm1vZGlmaWVyLGI9bD9wKmc6MCx3PWw/MDpwKmcseT0tYypNYXRoLmFicyhnKSx4PW4uc3RyZXRjaDtcInN0cmluZ1wiPT10eXBlb2YgeCYmLTEhPT14LmluZGV4T2YoXCIlXCIpJiYoeD1wYXJzZUZsb2F0KG4uc3RyZXRjaCkvMTAwKm0pO3ZhciBUPWw/MDp4KmcsRT1sP3gqZzowO01hdGguYWJzKEUpPC4wMDEmJihFPTApLE1hdGguYWJzKFQpPC4wMDEmJihUPTApLE1hdGguYWJzKHkpPC4wMDEmJih5PTApLE1hdGguYWJzKGIpPC4wMDEmJihiPTApLE1hdGguYWJzKHcpPC4wMDEmJih3PTApO3ZhciBTPVwidHJhbnNsYXRlM2QoXCIrRStcInB4LFwiK1QrXCJweCxcIit5K1wicHgpICByb3RhdGVYKFwiK3crXCJkZWcpIHJvdGF0ZVkoXCIrYitcImRlZylcIjtpZihmLnRyYW5zZm9ybShTKSxmWzBdLnN0eWxlLnpJbmRleD0xLU1hdGguYWJzKE1hdGgucm91bmQoZykpLG4uc2xpZGVTaGFkb3dzKXt2YXIgQz1sP2YuZmluZChcIi5zd2lwZXItc2xpZGUtc2hhZG93LWxlZnRcIik6Zi5maW5kKFwiLnN3aXBlci1zbGlkZS1zaGFkb3ctdG9wXCIpLE09bD9mLmZpbmQoXCIuc3dpcGVyLXNsaWRlLXNoYWRvdy1yaWdodFwiKTpmLmZpbmQoXCIuc3dpcGVyLXNsaWRlLXNoYWRvdy1ib3R0b21cIik7MD09PUMubGVuZ3RoJiYoQz1zKCc8ZGl2IGNsYXNzPVwic3dpcGVyLXNsaWRlLXNoYWRvdy0nKyhsP1wibGVmdFwiOlwidG9wXCIpKydcIj48L2Rpdj4nKSxmLmFwcGVuZChDKSksMD09PU0ubGVuZ3RoJiYoTT1zKCc8ZGl2IGNsYXNzPVwic3dpcGVyLXNsaWRlLXNoYWRvdy0nKyhsP1wicmlnaHRcIjpcImJvdHRvbVwiKSsnXCI+PC9kaXY+JyksZi5hcHBlbmQoTSkpLEMubGVuZ3RoJiYoQ1swXS5zdHlsZS5vcGFjaXR5PWc+MD9nOjApLE0ubGVuZ3RoJiYoTVswXS5zdHlsZS5vcGFjaXR5PS1nPjA/LWc6MCl9fShvLnBvaW50ZXJFdmVudHN8fG8ucHJlZml4ZWRQb2ludGVyRXZlbnRzKSYmKGFbMF0uc3R5bGUucGVyc3BlY3RpdmVPcmlnaW49aCtcInB4IDUwJVwiKX0sc2V0VHJhbnNpdGlvbjpmdW5jdGlvbihlKXt0aGlzLnNsaWRlcy50cmFuc2l0aW9uKGUpLmZpbmQoXCIuc3dpcGVyLXNsaWRlLXNoYWRvdy10b3AsIC5zd2lwZXItc2xpZGUtc2hhZG93LXJpZ2h0LCAuc3dpcGVyLXNsaWRlLXNoYWRvdy1ib3R0b20sIC5zd2lwZXItc2xpZGUtc2hhZG93LWxlZnRcIikudHJhbnNpdGlvbihlKX19LGJlPXtpbml0OmZ1bmN0aW9uKCl7dmFyIGU9dGhpcy5wYXJhbXMudGh1bWJzLHQ9dGhpcy5jb25zdHJ1Y3RvcjtlLnN3aXBlciBpbnN0YW5jZW9mIHQ/KHRoaXMudGh1bWJzLnN3aXBlcj1lLnN3aXBlcixuLmV4dGVuZCh0aGlzLnRodW1icy5zd2lwZXIub3JpZ2luYWxQYXJhbXMse3dhdGNoU2xpZGVzUHJvZ3Jlc3M6ITAsc2xpZGVUb0NsaWNrZWRTbGlkZTohMX0pLG4uZXh0ZW5kKHRoaXMudGh1bWJzLnN3aXBlci5wYXJhbXMse3dhdGNoU2xpZGVzUHJvZ3Jlc3M6ITAsc2xpZGVUb0NsaWNrZWRTbGlkZTohMX0pKTpuLmlzT2JqZWN0KGUuc3dpcGVyKSYmKHRoaXMudGh1bWJzLnN3aXBlcj1uZXcgdChuLmV4dGVuZCh7fSxlLnN3aXBlcix7d2F0Y2hTbGlkZXNWaXNpYmlsaXR5OiEwLHdhdGNoU2xpZGVzUHJvZ3Jlc3M6ITAsc2xpZGVUb0NsaWNrZWRTbGlkZTohMX0pKSx0aGlzLnRodW1icy5zd2lwZXJDcmVhdGVkPSEwKSx0aGlzLnRodW1icy5zd2lwZXIuJGVsLmFkZENsYXNzKHRoaXMucGFyYW1zLnRodW1icy50aHVtYnNDb250YWluZXJDbGFzcyksdGhpcy50aHVtYnMuc3dpcGVyLm9uKFwidGFwXCIsdGhpcy50aHVtYnMub25UaHVtYkNsaWNrKX0sb25UaHVtYkNsaWNrOmZ1bmN0aW9uKCl7dmFyIGU9dGhpcy50aHVtYnMuc3dpcGVyO2lmKGUpe3ZhciB0PWUuY2xpY2tlZEluZGV4LGk9ZS5jbGlja2VkU2xpZGU7aWYoIShpJiZzKGkpLmhhc0NsYXNzKHRoaXMucGFyYW1zLnRodW1icy5zbGlkZVRodW1iQWN0aXZlQ2xhc3MpfHxudWxsPT10KSl7dmFyIGE7aWYoYT1lLnBhcmFtcy5sb29wP3BhcnNlSW50KHMoZS5jbGlja2VkU2xpZGUpLmF0dHIoXCJkYXRhLXN3aXBlci1zbGlkZS1pbmRleFwiKSwxMCk6dCx0aGlzLnBhcmFtcy5sb29wKXt2YXIgcj10aGlzLmFjdGl2ZUluZGV4O3RoaXMuc2xpZGVzLmVxKHIpLmhhc0NsYXNzKHRoaXMucGFyYW1zLnNsaWRlRHVwbGljYXRlQ2xhc3MpJiYodGhpcy5sb29wRml4KCksdGhpcy5fY2xpZW50TGVmdD10aGlzLiR3cmFwcGVyRWxbMF0uY2xpZW50TGVmdCxyPXRoaXMuYWN0aXZlSW5kZXgpO3ZhciBuPXRoaXMuc2xpZGVzLmVxKHIpLnByZXZBbGwoJ1tkYXRhLXN3aXBlci1zbGlkZS1pbmRleD1cIicrYSsnXCJdJykuZXEoMCkuaW5kZXgoKSxvPXRoaXMuc2xpZGVzLmVxKHIpLm5leHRBbGwoJ1tkYXRhLXN3aXBlci1zbGlkZS1pbmRleD1cIicrYSsnXCJdJykuZXEoMCkuaW5kZXgoKTthPXZvaWQgMD09PW4/bzp2b2lkIDA9PT1vP246by1yPHItbj9vOm59dGhpcy5zbGlkZVRvKGEpfX19LHVwZGF0ZTpmdW5jdGlvbihlKXt2YXIgdD10aGlzLnRodW1icy5zd2lwZXI7aWYodCl7dmFyIGk9XCJhdXRvXCI9PT10LnBhcmFtcy5zbGlkZXNQZXJWaWV3P3Quc2xpZGVzUGVyVmlld0R5bmFtaWMoKTp0LnBhcmFtcy5zbGlkZXNQZXJWaWV3LHM9dGhpcy5wYXJhbXMudGh1bWJzLmF1dG9TY3JvbGxPZmZzZXQsYT1zJiYhdC5wYXJhbXMubG9vcDtpZih0aGlzLnJlYWxJbmRleCE9PXQucmVhbEluZGV4fHxhKXt2YXIgcixuLG89dC5hY3RpdmVJbmRleDtpZih0LnBhcmFtcy5sb29wKXt0LnNsaWRlcy5lcShvKS5oYXNDbGFzcyh0LnBhcmFtcy5zbGlkZUR1cGxpY2F0ZUNsYXNzKSYmKHQubG9vcEZpeCgpLHQuX2NsaWVudExlZnQ9dC4kd3JhcHBlckVsWzBdLmNsaWVudExlZnQsbz10LmFjdGl2ZUluZGV4KTt2YXIgbD10LnNsaWRlcy5lcShvKS5wcmV2QWxsKCdbZGF0YS1zd2lwZXItc2xpZGUtaW5kZXg9XCInK3RoaXMucmVhbEluZGV4KydcIl0nKS5lcSgwKS5pbmRleCgpLGQ9dC5zbGlkZXMuZXEobykubmV4dEFsbCgnW2RhdGEtc3dpcGVyLXNsaWRlLWluZGV4PVwiJyt0aGlzLnJlYWxJbmRleCsnXCJdJykuZXEoMCkuaW5kZXgoKTtyPXZvaWQgMD09PWw/ZDp2b2lkIDA9PT1kP2w6ZC1vPT1vLWw/bzpkLW88by1sP2Q6bCxuPXRoaXMuYWN0aXZlSW5kZXg+dGhpcy5wcmV2aW91c0luZGV4P1wibmV4dFwiOlwicHJldlwifWVsc2Ugbj0ocj10aGlzLnJlYWxJbmRleCk+dGhpcy5wcmV2aW91c0luZGV4P1wibmV4dFwiOlwicHJldlwiO2EmJihyKz1cIm5leHRcIj09PW4/czotMSpzKSx0LnZpc2libGVTbGlkZXNJbmRleGVzJiZ0LnZpc2libGVTbGlkZXNJbmRleGVzLmluZGV4T2Yocik8MCYmKHQucGFyYW1zLmNlbnRlcmVkU2xpZGVzP3I9cj5vP3ItTWF0aC5mbG9vcihpLzIpKzE6citNYXRoLmZsb29yKGkvMiktMTpyPm8mJihyPXItaSsxKSx0LnNsaWRlVG8ocixlPzA6dm9pZCAwKSl9dmFyIGg9MSxwPXRoaXMucGFyYW1zLnRodW1icy5zbGlkZVRodW1iQWN0aXZlQ2xhc3M7aWYodGhpcy5wYXJhbXMuc2xpZGVzUGVyVmlldz4xJiYhdGhpcy5wYXJhbXMuY2VudGVyZWRTbGlkZXMmJihoPXRoaXMucGFyYW1zLnNsaWRlc1BlclZpZXcpLHRoaXMucGFyYW1zLnRodW1icy5tdWx0aXBsZUFjdGl2ZVRodW1ic3x8KGg9MSksaD1NYXRoLmZsb29yKGgpLHQuc2xpZGVzLnJlbW92ZUNsYXNzKHApLHQucGFyYW1zLmxvb3B8fHQucGFyYW1zLnZpcnR1YWwmJnQucGFyYW1zLnZpcnR1YWwuZW5hYmxlZClmb3IodmFyIGM9MDtjPGg7Yys9MSl0LiR3cmFwcGVyRWwuY2hpbGRyZW4oJ1tkYXRhLXN3aXBlci1zbGlkZS1pbmRleD1cIicrKHRoaXMucmVhbEluZGV4K2MpKydcIl0nKS5hZGRDbGFzcyhwKTtlbHNlIGZvcih2YXIgdT0wO3U8aDt1Kz0xKXQuc2xpZGVzLmVxKHRoaXMucmVhbEluZGV4K3UpLmFkZENsYXNzKHApfX19LHdlPVtSLHEsSyxVLFosSix0ZSx7bmFtZTpcIm1vdXNld2hlZWxcIixwYXJhbXM6e21vdXNld2hlZWw6e2VuYWJsZWQ6ITEscmVsZWFzZU9uRWRnZXM6ITEsaW52ZXJ0OiExLGZvcmNlVG9BeGlzOiExLHNlbnNpdGl2aXR5OjEsZXZlbnRzVGFyZ2VkOlwiY29udGFpbmVyXCJ9fSxjcmVhdGU6ZnVuY3Rpb24oKXtuLmV4dGVuZCh0aGlzLHttb3VzZXdoZWVsOntlbmFibGVkOiExLGVuYWJsZTppZS5lbmFibGUuYmluZCh0aGlzKSxkaXNhYmxlOmllLmRpc2FibGUuYmluZCh0aGlzKSxoYW5kbGU6aWUuaGFuZGxlLmJpbmQodGhpcyksaGFuZGxlTW91c2VFbnRlcjppZS5oYW5kbGVNb3VzZUVudGVyLmJpbmQodGhpcyksaGFuZGxlTW91c2VMZWF2ZTppZS5oYW5kbGVNb3VzZUxlYXZlLmJpbmQodGhpcyksYW5pbWF0ZVNsaWRlcjppZS5hbmltYXRlU2xpZGVyLmJpbmQodGhpcykscmVsZWFzZVNjcm9sbDppZS5yZWxlYXNlU2Nyb2xsLmJpbmQodGhpcyksbGFzdFNjcm9sbFRpbWU6bi5ub3coKSxsYXN0RXZlbnRCZWZvcmVTbmFwOnZvaWQgMCxyZWNlbnRXaGVlbEV2ZW50czpbXX19KX0sb246e2luaXQ6ZnVuY3Rpb24oKXshdGhpcy5wYXJhbXMubW91c2V3aGVlbC5lbmFibGVkJiZ0aGlzLnBhcmFtcy5jc3NNb2RlJiZ0aGlzLm1vdXNld2hlZWwuZGlzYWJsZSgpLHRoaXMucGFyYW1zLm1vdXNld2hlZWwuZW5hYmxlZCYmdGhpcy5tb3VzZXdoZWVsLmVuYWJsZSgpfSxkZXN0cm95OmZ1bmN0aW9uKCl7dGhpcy5wYXJhbXMuY3NzTW9kZSYmdGhpcy5tb3VzZXdoZWVsLmVuYWJsZSgpLHRoaXMubW91c2V3aGVlbC5lbmFibGVkJiZ0aGlzLm1vdXNld2hlZWwuZGlzYWJsZSgpfX19LHtuYW1lOlwibmF2aWdhdGlvblwiLHBhcmFtczp7bmF2aWdhdGlvbjp7bmV4dEVsOm51bGwscHJldkVsOm51bGwsaGlkZU9uQ2xpY2s6ITEsZGlzYWJsZWRDbGFzczpcInN3aXBlci1idXR0b24tZGlzYWJsZWRcIixoaWRkZW5DbGFzczpcInN3aXBlci1idXR0b24taGlkZGVuXCIsbG9ja0NsYXNzOlwic3dpcGVyLWJ1dHRvbi1sb2NrXCJ9fSxjcmVhdGU6ZnVuY3Rpb24oKXtuLmV4dGVuZCh0aGlzLHtuYXZpZ2F0aW9uOntpbml0OnNlLmluaXQuYmluZCh0aGlzKSx1cGRhdGU6c2UudXBkYXRlLmJpbmQodGhpcyksZGVzdHJveTpzZS5kZXN0cm95LmJpbmQodGhpcyksb25OZXh0Q2xpY2s6c2Uub25OZXh0Q2xpY2suYmluZCh0aGlzKSxvblByZXZDbGljazpzZS5vblByZXZDbGljay5iaW5kKHRoaXMpfX0pfSxvbjp7aW5pdDpmdW5jdGlvbigpe3RoaXMubmF2aWdhdGlvbi5pbml0KCksdGhpcy5uYXZpZ2F0aW9uLnVwZGF0ZSgpfSx0b0VkZ2U6ZnVuY3Rpb24oKXt0aGlzLm5hdmlnYXRpb24udXBkYXRlKCl9LGZyb21FZGdlOmZ1bmN0aW9uKCl7dGhpcy5uYXZpZ2F0aW9uLnVwZGF0ZSgpfSxkZXN0cm95OmZ1bmN0aW9uKCl7dGhpcy5uYXZpZ2F0aW9uLmRlc3Ryb3koKX0sY2xpY2s6ZnVuY3Rpb24oZSl7dmFyIHQsaT10aGlzLm5hdmlnYXRpb24sYT1pLiRuZXh0RWwscj1pLiRwcmV2RWw7IXRoaXMucGFyYW1zLm5hdmlnYXRpb24uaGlkZU9uQ2xpY2t8fHMoZS50YXJnZXQpLmlzKHIpfHxzKGUudGFyZ2V0KS5pcyhhKXx8KGE/dD1hLmhhc0NsYXNzKHRoaXMucGFyYW1zLm5hdmlnYXRpb24uaGlkZGVuQ2xhc3MpOnImJih0PXIuaGFzQ2xhc3ModGhpcy5wYXJhbXMubmF2aWdhdGlvbi5oaWRkZW5DbGFzcykpLCEwPT09dD90aGlzLmVtaXQoXCJuYXZpZ2F0aW9uU2hvd1wiLHRoaXMpOnRoaXMuZW1pdChcIm5hdmlnYXRpb25IaWRlXCIsdGhpcyksYSYmYS50b2dnbGVDbGFzcyh0aGlzLnBhcmFtcy5uYXZpZ2F0aW9uLmhpZGRlbkNsYXNzKSxyJiZyLnRvZ2dsZUNsYXNzKHRoaXMucGFyYW1zLm5hdmlnYXRpb24uaGlkZGVuQ2xhc3MpKX19fSx7bmFtZTpcInBhZ2luYXRpb25cIixwYXJhbXM6e3BhZ2luYXRpb246e2VsOm51bGwsYnVsbGV0RWxlbWVudDpcInNwYW5cIixjbGlja2FibGU6ITEsaGlkZU9uQ2xpY2s6ITEscmVuZGVyQnVsbGV0Om51bGwscmVuZGVyUHJvZ3Jlc3NiYXI6bnVsbCxyZW5kZXJGcmFjdGlvbjpudWxsLHJlbmRlckN1c3RvbTpudWxsLHByb2dyZXNzYmFyT3Bwb3NpdGU6ITEsdHlwZTpcImJ1bGxldHNcIixkeW5hbWljQnVsbGV0czohMSxkeW5hbWljTWFpbkJ1bGxldHM6MSxmb3JtYXRGcmFjdGlvbkN1cnJlbnQ6ZnVuY3Rpb24oZSl7cmV0dXJuIGV9LGZvcm1hdEZyYWN0aW9uVG90YWw6ZnVuY3Rpb24oZSl7cmV0dXJuIGV9LGJ1bGxldENsYXNzOlwic3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0XCIsYnVsbGV0QWN0aXZlQ2xhc3M6XCJzd2lwZXItcGFnaW5hdGlvbi1idWxsZXQtYWN0aXZlXCIsbW9kaWZpZXJDbGFzczpcInN3aXBlci1wYWdpbmF0aW9uLVwiLGN1cnJlbnRDbGFzczpcInN3aXBlci1wYWdpbmF0aW9uLWN1cnJlbnRcIix0b3RhbENsYXNzOlwic3dpcGVyLXBhZ2luYXRpb24tdG90YWxcIixoaWRkZW5DbGFzczpcInN3aXBlci1wYWdpbmF0aW9uLWhpZGRlblwiLHByb2dyZXNzYmFyRmlsbENsYXNzOlwic3dpcGVyLXBhZ2luYXRpb24tcHJvZ3Jlc3NiYXItZmlsbFwiLHByb2dyZXNzYmFyT3Bwb3NpdGVDbGFzczpcInN3aXBlci1wYWdpbmF0aW9uLXByb2dyZXNzYmFyLW9wcG9zaXRlXCIsY2xpY2thYmxlQ2xhc3M6XCJzd2lwZXItcGFnaW5hdGlvbi1jbGlja2FibGVcIixsb2NrQ2xhc3M6XCJzd2lwZXItcGFnaW5hdGlvbi1sb2NrXCJ9fSxjcmVhdGU6ZnVuY3Rpb24oKXtuLmV4dGVuZCh0aGlzLHtwYWdpbmF0aW9uOntpbml0OmFlLmluaXQuYmluZCh0aGlzKSxyZW5kZXI6YWUucmVuZGVyLmJpbmQodGhpcyksdXBkYXRlOmFlLnVwZGF0ZS5iaW5kKHRoaXMpLGRlc3Ryb3k6YWUuZGVzdHJveS5iaW5kKHRoaXMpLGR5bmFtaWNCdWxsZXRJbmRleDowfX0pfSxvbjp7aW5pdDpmdW5jdGlvbigpe3RoaXMucGFnaW5hdGlvbi5pbml0KCksdGhpcy5wYWdpbmF0aW9uLnJlbmRlcigpLHRoaXMucGFnaW5hdGlvbi51cGRhdGUoKX0sYWN0aXZlSW5kZXhDaGFuZ2U6ZnVuY3Rpb24oKXsodGhpcy5wYXJhbXMubG9vcHx8dm9pZCAwPT09dGhpcy5zbmFwSW5kZXgpJiZ0aGlzLnBhZ2luYXRpb24udXBkYXRlKCl9LHNuYXBJbmRleENoYW5nZTpmdW5jdGlvbigpe3RoaXMucGFyYW1zLmxvb3B8fHRoaXMucGFnaW5hdGlvbi51cGRhdGUoKX0sc2xpZGVzTGVuZ3RoQ2hhbmdlOmZ1bmN0aW9uKCl7dGhpcy5wYXJhbXMubG9vcCYmKHRoaXMucGFnaW5hdGlvbi5yZW5kZXIoKSx0aGlzLnBhZ2luYXRpb24udXBkYXRlKCkpfSxzbmFwR3JpZExlbmd0aENoYW5nZTpmdW5jdGlvbigpe3RoaXMucGFyYW1zLmxvb3B8fCh0aGlzLnBhZ2luYXRpb24ucmVuZGVyKCksdGhpcy5wYWdpbmF0aW9uLnVwZGF0ZSgpKX0sZGVzdHJveTpmdW5jdGlvbigpe3RoaXMucGFnaW5hdGlvbi5kZXN0cm95KCl9LGNsaWNrOmZ1bmN0aW9uKGUpe3RoaXMucGFyYW1zLnBhZ2luYXRpb24uZWwmJnRoaXMucGFyYW1zLnBhZ2luYXRpb24uaGlkZU9uQ2xpY2smJnRoaXMucGFnaW5hdGlvbi4kZWwubGVuZ3RoPjAmJiFzKGUudGFyZ2V0KS5oYXNDbGFzcyh0aGlzLnBhcmFtcy5wYWdpbmF0aW9uLmJ1bGxldENsYXNzKSYmKCEwPT09dGhpcy5wYWdpbmF0aW9uLiRlbC5oYXNDbGFzcyh0aGlzLnBhcmFtcy5wYWdpbmF0aW9uLmhpZGRlbkNsYXNzKT90aGlzLmVtaXQoXCJwYWdpbmF0aW9uU2hvd1wiLHRoaXMpOnRoaXMuZW1pdChcInBhZ2luYXRpb25IaWRlXCIsdGhpcyksdGhpcy5wYWdpbmF0aW9uLiRlbC50b2dnbGVDbGFzcyh0aGlzLnBhcmFtcy5wYWdpbmF0aW9uLmhpZGRlbkNsYXNzKSl9fX0se25hbWU6XCJzY3JvbGxiYXJcIixwYXJhbXM6e3Njcm9sbGJhcjp7ZWw6bnVsbCxkcmFnU2l6ZTpcImF1dG9cIixoaWRlOiExLGRyYWdnYWJsZTohMSxzbmFwT25SZWxlYXNlOiEwLGxvY2tDbGFzczpcInN3aXBlci1zY3JvbGxiYXItbG9ja1wiLGRyYWdDbGFzczpcInN3aXBlci1zY3JvbGxiYXItZHJhZ1wifX0sY3JlYXRlOmZ1bmN0aW9uKCl7bi5leHRlbmQodGhpcyx7c2Nyb2xsYmFyOntpbml0OnJlLmluaXQuYmluZCh0aGlzKSxkZXN0cm95OnJlLmRlc3Ryb3kuYmluZCh0aGlzKSx1cGRhdGVTaXplOnJlLnVwZGF0ZVNpemUuYmluZCh0aGlzKSxzZXRUcmFuc2xhdGU6cmUuc2V0VHJhbnNsYXRlLmJpbmQodGhpcyksc2V0VHJhbnNpdGlvbjpyZS5zZXRUcmFuc2l0aW9uLmJpbmQodGhpcyksZW5hYmxlRHJhZ2dhYmxlOnJlLmVuYWJsZURyYWdnYWJsZS5iaW5kKHRoaXMpLGRpc2FibGVEcmFnZ2FibGU6cmUuZGlzYWJsZURyYWdnYWJsZS5iaW5kKHRoaXMpLHNldERyYWdQb3NpdGlvbjpyZS5zZXREcmFnUG9zaXRpb24uYmluZCh0aGlzKSxnZXRQb2ludGVyUG9zaXRpb246cmUuZ2V0UG9pbnRlclBvc2l0aW9uLmJpbmQodGhpcyksb25EcmFnU3RhcnQ6cmUub25EcmFnU3RhcnQuYmluZCh0aGlzKSxvbkRyYWdNb3ZlOnJlLm9uRHJhZ01vdmUuYmluZCh0aGlzKSxvbkRyYWdFbmQ6cmUub25EcmFnRW5kLmJpbmQodGhpcyksaXNUb3VjaGVkOiExLHRpbWVvdXQ6bnVsbCxkcmFnVGltZW91dDpudWxsfX0pfSxvbjp7aW5pdDpmdW5jdGlvbigpe3RoaXMuc2Nyb2xsYmFyLmluaXQoKSx0aGlzLnNjcm9sbGJhci51cGRhdGVTaXplKCksdGhpcy5zY3JvbGxiYXIuc2V0VHJhbnNsYXRlKCl9LHVwZGF0ZTpmdW5jdGlvbigpe3RoaXMuc2Nyb2xsYmFyLnVwZGF0ZVNpemUoKX0scmVzaXplOmZ1bmN0aW9uKCl7dGhpcy5zY3JvbGxiYXIudXBkYXRlU2l6ZSgpfSxvYnNlcnZlclVwZGF0ZTpmdW5jdGlvbigpe3RoaXMuc2Nyb2xsYmFyLnVwZGF0ZVNpemUoKX0sc2V0VHJhbnNsYXRlOmZ1bmN0aW9uKCl7dGhpcy5zY3JvbGxiYXIuc2V0VHJhbnNsYXRlKCl9LHNldFRyYW5zaXRpb246ZnVuY3Rpb24oZSl7dGhpcy5zY3JvbGxiYXIuc2V0VHJhbnNpdGlvbihlKX0sZGVzdHJveTpmdW5jdGlvbigpe3RoaXMuc2Nyb2xsYmFyLmRlc3Ryb3koKX19fSx7bmFtZTpcInBhcmFsbGF4XCIscGFyYW1zOntwYXJhbGxheDp7ZW5hYmxlZDohMX19LGNyZWF0ZTpmdW5jdGlvbigpe24uZXh0ZW5kKHRoaXMse3BhcmFsbGF4OntzZXRUcmFuc2Zvcm06bmUuc2V0VHJhbnNmb3JtLmJpbmQodGhpcyksc2V0VHJhbnNsYXRlOm5lLnNldFRyYW5zbGF0ZS5iaW5kKHRoaXMpLHNldFRyYW5zaXRpb246bmUuc2V0VHJhbnNpdGlvbi5iaW5kKHRoaXMpfX0pfSxvbjp7YmVmb3JlSW5pdDpmdW5jdGlvbigpe3RoaXMucGFyYW1zLnBhcmFsbGF4LmVuYWJsZWQmJih0aGlzLnBhcmFtcy53YXRjaFNsaWRlc1Byb2dyZXNzPSEwLHRoaXMub3JpZ2luYWxQYXJhbXMud2F0Y2hTbGlkZXNQcm9ncmVzcz0hMCl9LGluaXQ6ZnVuY3Rpb24oKXt0aGlzLnBhcmFtcy5wYXJhbGxheC5lbmFibGVkJiZ0aGlzLnBhcmFsbGF4LnNldFRyYW5zbGF0ZSgpfSxzZXRUcmFuc2xhdGU6ZnVuY3Rpb24oKXt0aGlzLnBhcmFtcy5wYXJhbGxheC5lbmFibGVkJiZ0aGlzLnBhcmFsbGF4LnNldFRyYW5zbGF0ZSgpfSxzZXRUcmFuc2l0aW9uOmZ1bmN0aW9uKGUpe3RoaXMucGFyYW1zLnBhcmFsbGF4LmVuYWJsZWQmJnRoaXMucGFyYWxsYXguc2V0VHJhbnNpdGlvbihlKX19fSx7bmFtZTpcInpvb21cIixwYXJhbXM6e3pvb206e2VuYWJsZWQ6ITEsbWF4UmF0aW86MyxtaW5SYXRpbzoxLHRvZ2dsZTohMCxjb250YWluZXJDbGFzczpcInN3aXBlci16b29tLWNvbnRhaW5lclwiLHpvb21lZFNsaWRlQ2xhc3M6XCJzd2lwZXItc2xpZGUtem9vbWVkXCJ9fSxjcmVhdGU6ZnVuY3Rpb24oKXt2YXIgZT10aGlzLHQ9e2VuYWJsZWQ6ITEsc2NhbGU6MSxjdXJyZW50U2NhbGU6MSxpc1NjYWxpbmc6ITEsZ2VzdHVyZTp7JHNsaWRlRWw6dm9pZCAwLHNsaWRlV2lkdGg6dm9pZCAwLHNsaWRlSGVpZ2h0OnZvaWQgMCwkaW1hZ2VFbDp2b2lkIDAsJGltYWdlV3JhcEVsOnZvaWQgMCxtYXhSYXRpbzozfSxpbWFnZTp7aXNUb3VjaGVkOnZvaWQgMCxpc01vdmVkOnZvaWQgMCxjdXJyZW50WDp2b2lkIDAsY3VycmVudFk6dm9pZCAwLG1pblg6dm9pZCAwLG1pblk6dm9pZCAwLG1heFg6dm9pZCAwLG1heFk6dm9pZCAwLHdpZHRoOnZvaWQgMCxoZWlnaHQ6dm9pZCAwLHN0YXJ0WDp2b2lkIDAsc3RhcnRZOnZvaWQgMCx0b3VjaGVzU3RhcnQ6e30sdG91Y2hlc0N1cnJlbnQ6e319LHZlbG9jaXR5Ont4OnZvaWQgMCx5OnZvaWQgMCxwcmV2UG9zaXRpb25YOnZvaWQgMCxwcmV2UG9zaXRpb25ZOnZvaWQgMCxwcmV2VGltZTp2b2lkIDB9fTtcIm9uR2VzdHVyZVN0YXJ0IG9uR2VzdHVyZUNoYW5nZSBvbkdlc3R1cmVFbmQgb25Ub3VjaFN0YXJ0IG9uVG91Y2hNb3ZlIG9uVG91Y2hFbmQgb25UcmFuc2l0aW9uRW5kIHRvZ2dsZSBlbmFibGUgZGlzYWJsZSBpbiBvdXRcIi5zcGxpdChcIiBcIikuZm9yRWFjaCgoZnVuY3Rpb24oaSl7dFtpXT1vZVtpXS5iaW5kKGUpfSkpLG4uZXh0ZW5kKGUse3pvb206dH0pO3ZhciBpPTE7T2JqZWN0LmRlZmluZVByb3BlcnR5KGUuem9vbSxcInNjYWxlXCIse2dldDpmdW5jdGlvbigpe3JldHVybiBpfSxzZXQ6ZnVuY3Rpb24odCl7aWYoaSE9PXQpe3ZhciBzPWUuem9vbS5nZXN0dXJlLiRpbWFnZUVsP2Uuem9vbS5nZXN0dXJlLiRpbWFnZUVsWzBdOnZvaWQgMCxhPWUuem9vbS5nZXN0dXJlLiRzbGlkZUVsP2Uuem9vbS5nZXN0dXJlLiRzbGlkZUVsWzBdOnZvaWQgMDtlLmVtaXQoXCJ6b29tQ2hhbmdlXCIsdCxzLGEpfWk9dH19KX0sb246e2luaXQ6ZnVuY3Rpb24oKXt0aGlzLnBhcmFtcy56b29tLmVuYWJsZWQmJnRoaXMuem9vbS5lbmFibGUoKX0sZGVzdHJveTpmdW5jdGlvbigpe3RoaXMuem9vbS5kaXNhYmxlKCl9LHRvdWNoU3RhcnQ6ZnVuY3Rpb24oZSl7dGhpcy56b29tLmVuYWJsZWQmJnRoaXMuem9vbS5vblRvdWNoU3RhcnQoZSl9LHRvdWNoRW5kOmZ1bmN0aW9uKGUpe3RoaXMuem9vbS5lbmFibGVkJiZ0aGlzLnpvb20ub25Ub3VjaEVuZChlKX0sZG91YmxlVGFwOmZ1bmN0aW9uKGUpe3RoaXMucGFyYW1zLnpvb20uZW5hYmxlZCYmdGhpcy56b29tLmVuYWJsZWQmJnRoaXMucGFyYW1zLnpvb20udG9nZ2xlJiZ0aGlzLnpvb20udG9nZ2xlKGUpfSx0cmFuc2l0aW9uRW5kOmZ1bmN0aW9uKCl7dGhpcy56b29tLmVuYWJsZWQmJnRoaXMucGFyYW1zLnpvb20uZW5hYmxlZCYmdGhpcy56b29tLm9uVHJhbnNpdGlvbkVuZCgpfSxzbGlkZUNoYW5nZTpmdW5jdGlvbigpe3RoaXMuem9vbS5lbmFibGVkJiZ0aGlzLnBhcmFtcy56b29tLmVuYWJsZWQmJnRoaXMucGFyYW1zLmNzc01vZGUmJnRoaXMuem9vbS5vblRyYW5zaXRpb25FbmQoKX19fSx7bmFtZTpcImxhenlcIixwYXJhbXM6e2xhenk6e2VuYWJsZWQ6ITEsbG9hZFByZXZOZXh0OiExLGxvYWRQcmV2TmV4dEFtb3VudDoxLGxvYWRPblRyYW5zaXRpb25TdGFydDohMSxlbGVtZW50Q2xhc3M6XCJzd2lwZXItbGF6eVwiLGxvYWRpbmdDbGFzczpcInN3aXBlci1sYXp5LWxvYWRpbmdcIixsb2FkZWRDbGFzczpcInN3aXBlci1sYXp5LWxvYWRlZFwiLHByZWxvYWRlckNsYXNzOlwic3dpcGVyLWxhenktcHJlbG9hZGVyXCJ9fSxjcmVhdGU6ZnVuY3Rpb24oKXtuLmV4dGVuZCh0aGlzLHtsYXp5Ontpbml0aWFsSW1hZ2VMb2FkZWQ6ITEsbG9hZDpsZS5sb2FkLmJpbmQodGhpcyksbG9hZEluU2xpZGU6bGUubG9hZEluU2xpZGUuYmluZCh0aGlzKX19KX0sb246e2JlZm9yZUluaXQ6ZnVuY3Rpb24oKXt0aGlzLnBhcmFtcy5sYXp5LmVuYWJsZWQmJnRoaXMucGFyYW1zLnByZWxvYWRJbWFnZXMmJih0aGlzLnBhcmFtcy5wcmVsb2FkSW1hZ2VzPSExKX0saW5pdDpmdW5jdGlvbigpe3RoaXMucGFyYW1zLmxhenkuZW5hYmxlZCYmIXRoaXMucGFyYW1zLmxvb3AmJjA9PT10aGlzLnBhcmFtcy5pbml0aWFsU2xpZGUmJnRoaXMubGF6eS5sb2FkKCl9LHNjcm9sbDpmdW5jdGlvbigpe3RoaXMucGFyYW1zLmZyZWVNb2RlJiYhdGhpcy5wYXJhbXMuZnJlZU1vZGVTdGlja3kmJnRoaXMubGF6eS5sb2FkKCl9LHJlc2l6ZTpmdW5jdGlvbigpe3RoaXMucGFyYW1zLmxhenkuZW5hYmxlZCYmdGhpcy5sYXp5LmxvYWQoKX0sc2Nyb2xsYmFyRHJhZ01vdmU6ZnVuY3Rpb24oKXt0aGlzLnBhcmFtcy5sYXp5LmVuYWJsZWQmJnRoaXMubGF6eS5sb2FkKCl9LHRyYW5zaXRpb25TdGFydDpmdW5jdGlvbigpe3RoaXMucGFyYW1zLmxhenkuZW5hYmxlZCYmKHRoaXMucGFyYW1zLmxhenkubG9hZE9uVHJhbnNpdGlvblN0YXJ0fHwhdGhpcy5wYXJhbXMubGF6eS5sb2FkT25UcmFuc2l0aW9uU3RhcnQmJiF0aGlzLmxhenkuaW5pdGlhbEltYWdlTG9hZGVkKSYmdGhpcy5sYXp5LmxvYWQoKX0sdHJhbnNpdGlvbkVuZDpmdW5jdGlvbigpe3RoaXMucGFyYW1zLmxhenkuZW5hYmxlZCYmIXRoaXMucGFyYW1zLmxhenkubG9hZE9uVHJhbnNpdGlvblN0YXJ0JiZ0aGlzLmxhenkubG9hZCgpfSxzbGlkZUNoYW5nZTpmdW5jdGlvbigpe3RoaXMucGFyYW1zLmxhenkuZW5hYmxlZCYmdGhpcy5wYXJhbXMuY3NzTW9kZSYmdGhpcy5sYXp5LmxvYWQoKX19fSx7bmFtZTpcImNvbnRyb2xsZXJcIixwYXJhbXM6e2NvbnRyb2xsZXI6e2NvbnRyb2w6dm9pZCAwLGludmVyc2U6ITEsYnk6XCJzbGlkZVwifX0sY3JlYXRlOmZ1bmN0aW9uKCl7bi5leHRlbmQodGhpcyx7Y29udHJvbGxlcjp7Y29udHJvbDp0aGlzLnBhcmFtcy5jb250cm9sbGVyLmNvbnRyb2wsZ2V0SW50ZXJwb2xhdGVGdW5jdGlvbjpkZS5nZXRJbnRlcnBvbGF0ZUZ1bmN0aW9uLmJpbmQodGhpcyksc2V0VHJhbnNsYXRlOmRlLnNldFRyYW5zbGF0ZS5iaW5kKHRoaXMpLHNldFRyYW5zaXRpb246ZGUuc2V0VHJhbnNpdGlvbi5iaW5kKHRoaXMpfX0pfSxvbjp7dXBkYXRlOmZ1bmN0aW9uKCl7dGhpcy5jb250cm9sbGVyLmNvbnRyb2wmJnRoaXMuY29udHJvbGxlci5zcGxpbmUmJih0aGlzLmNvbnRyb2xsZXIuc3BsaW5lPXZvaWQgMCxkZWxldGUgdGhpcy5jb250cm9sbGVyLnNwbGluZSl9LHJlc2l6ZTpmdW5jdGlvbigpe3RoaXMuY29udHJvbGxlci5jb250cm9sJiZ0aGlzLmNvbnRyb2xsZXIuc3BsaW5lJiYodGhpcy5jb250cm9sbGVyLnNwbGluZT12b2lkIDAsZGVsZXRlIHRoaXMuY29udHJvbGxlci5zcGxpbmUpfSxvYnNlcnZlclVwZGF0ZTpmdW5jdGlvbigpe3RoaXMuY29udHJvbGxlci5jb250cm9sJiZ0aGlzLmNvbnRyb2xsZXIuc3BsaW5lJiYodGhpcy5jb250cm9sbGVyLnNwbGluZT12b2lkIDAsZGVsZXRlIHRoaXMuY29udHJvbGxlci5zcGxpbmUpfSxzZXRUcmFuc2xhdGU6ZnVuY3Rpb24oZSx0KXt0aGlzLmNvbnRyb2xsZXIuY29udHJvbCYmdGhpcy5jb250cm9sbGVyLnNldFRyYW5zbGF0ZShlLHQpfSxzZXRUcmFuc2l0aW9uOmZ1bmN0aW9uKGUsdCl7dGhpcy5jb250cm9sbGVyLmNvbnRyb2wmJnRoaXMuY29udHJvbGxlci5zZXRUcmFuc2l0aW9uKGUsdCl9fX0se25hbWU6XCJhMTF5XCIscGFyYW1zOnthMTF5OntlbmFibGVkOiEwLG5vdGlmaWNhdGlvbkNsYXNzOlwic3dpcGVyLW5vdGlmaWNhdGlvblwiLHByZXZTbGlkZU1lc3NhZ2U6XCJQcmV2aW91cyBzbGlkZVwiLG5leHRTbGlkZU1lc3NhZ2U6XCJOZXh0IHNsaWRlXCIsZmlyc3RTbGlkZU1lc3NhZ2U6XCJUaGlzIGlzIHRoZSBmaXJzdCBzbGlkZVwiLGxhc3RTbGlkZU1lc3NhZ2U6XCJUaGlzIGlzIHRoZSBsYXN0IHNsaWRlXCIscGFnaW5hdGlvbkJ1bGxldE1lc3NhZ2U6XCJHbyB0byBzbGlkZSB7e2luZGV4fX1cIn19LGNyZWF0ZTpmdW5jdGlvbigpe3ZhciBlPXRoaXM7bi5leHRlbmQoZSx7YTExeTp7bGl2ZVJlZ2lvbjpzKCc8c3BhbiBjbGFzcz1cIicrZS5wYXJhbXMuYTExeS5ub3RpZmljYXRpb25DbGFzcysnXCIgYXJpYS1saXZlPVwiYXNzZXJ0aXZlXCIgYXJpYS1hdG9taWM9XCJ0cnVlXCI+PC9zcGFuPicpfX0pLE9iamVjdC5rZXlzKGhlKS5mb3JFYWNoKChmdW5jdGlvbih0KXtlLmExMXlbdF09aGVbdF0uYmluZChlKX0pKX0sb246e2luaXQ6ZnVuY3Rpb24oKXt0aGlzLnBhcmFtcy5hMTF5LmVuYWJsZWQmJih0aGlzLmExMXkuaW5pdCgpLHRoaXMuYTExeS51cGRhdGVOYXZpZ2F0aW9uKCkpfSx0b0VkZ2U6ZnVuY3Rpb24oKXt0aGlzLnBhcmFtcy5hMTF5LmVuYWJsZWQmJnRoaXMuYTExeS51cGRhdGVOYXZpZ2F0aW9uKCl9LGZyb21FZGdlOmZ1bmN0aW9uKCl7dGhpcy5wYXJhbXMuYTExeS5lbmFibGVkJiZ0aGlzLmExMXkudXBkYXRlTmF2aWdhdGlvbigpfSxwYWdpbmF0aW9uVXBkYXRlOmZ1bmN0aW9uKCl7dGhpcy5wYXJhbXMuYTExeS5lbmFibGVkJiZ0aGlzLmExMXkudXBkYXRlUGFnaW5hdGlvbigpfSxkZXN0cm95OmZ1bmN0aW9uKCl7dGhpcy5wYXJhbXMuYTExeS5lbmFibGVkJiZ0aGlzLmExMXkuZGVzdHJveSgpfX19LHtuYW1lOlwiaGlzdG9yeVwiLHBhcmFtczp7aGlzdG9yeTp7ZW5hYmxlZDohMSxyZXBsYWNlU3RhdGU6ITEsa2V5Olwic2xpZGVzXCJ9fSxjcmVhdGU6ZnVuY3Rpb24oKXtuLmV4dGVuZCh0aGlzLHtoaXN0b3J5Ontpbml0OnBlLmluaXQuYmluZCh0aGlzKSxzZXRIaXN0b3J5OnBlLnNldEhpc3RvcnkuYmluZCh0aGlzKSxzZXRIaXN0b3J5UG9wU3RhdGU6cGUuc2V0SGlzdG9yeVBvcFN0YXRlLmJpbmQodGhpcyksc2Nyb2xsVG9TbGlkZTpwZS5zY3JvbGxUb1NsaWRlLmJpbmQodGhpcyksZGVzdHJveTpwZS5kZXN0cm95LmJpbmQodGhpcyl9fSl9LG9uOntpbml0OmZ1bmN0aW9uKCl7dGhpcy5wYXJhbXMuaGlzdG9yeS5lbmFibGVkJiZ0aGlzLmhpc3RvcnkuaW5pdCgpfSxkZXN0cm95OmZ1bmN0aW9uKCl7dGhpcy5wYXJhbXMuaGlzdG9yeS5lbmFibGVkJiZ0aGlzLmhpc3RvcnkuZGVzdHJveSgpfSx0cmFuc2l0aW9uRW5kOmZ1bmN0aW9uKCl7dGhpcy5oaXN0b3J5LmluaXRpYWxpemVkJiZ0aGlzLmhpc3Rvcnkuc2V0SGlzdG9yeSh0aGlzLnBhcmFtcy5oaXN0b3J5LmtleSx0aGlzLmFjdGl2ZUluZGV4KX0sc2xpZGVDaGFuZ2U6ZnVuY3Rpb24oKXt0aGlzLmhpc3RvcnkuaW5pdGlhbGl6ZWQmJnRoaXMucGFyYW1zLmNzc01vZGUmJnRoaXMuaGlzdG9yeS5zZXRIaXN0b3J5KHRoaXMucGFyYW1zLmhpc3Rvcnkua2V5LHRoaXMuYWN0aXZlSW5kZXgpfX19LHtuYW1lOlwiaGFzaC1uYXZpZ2F0aW9uXCIscGFyYW1zOntoYXNoTmF2aWdhdGlvbjp7ZW5hYmxlZDohMSxyZXBsYWNlU3RhdGU6ITEsd2F0Y2hTdGF0ZTohMX19LGNyZWF0ZTpmdW5jdGlvbigpe24uZXh0ZW5kKHRoaXMse2hhc2hOYXZpZ2F0aW9uOntpbml0aWFsaXplZDohMSxpbml0OmNlLmluaXQuYmluZCh0aGlzKSxkZXN0cm95OmNlLmRlc3Ryb3kuYmluZCh0aGlzKSxzZXRIYXNoOmNlLnNldEhhc2guYmluZCh0aGlzKSxvbkhhc2hDYW5nZTpjZS5vbkhhc2hDYW5nZS5iaW5kKHRoaXMpfX0pfSxvbjp7aW5pdDpmdW5jdGlvbigpe3RoaXMucGFyYW1zLmhhc2hOYXZpZ2F0aW9uLmVuYWJsZWQmJnRoaXMuaGFzaE5hdmlnYXRpb24uaW5pdCgpfSxkZXN0cm95OmZ1bmN0aW9uKCl7dGhpcy5wYXJhbXMuaGFzaE5hdmlnYXRpb24uZW5hYmxlZCYmdGhpcy5oYXNoTmF2aWdhdGlvbi5kZXN0cm95KCl9LHRyYW5zaXRpb25FbmQ6ZnVuY3Rpb24oKXt0aGlzLmhhc2hOYXZpZ2F0aW9uLmluaXRpYWxpemVkJiZ0aGlzLmhhc2hOYXZpZ2F0aW9uLnNldEhhc2goKX0sc2xpZGVDaGFuZ2U6ZnVuY3Rpb24oKXt0aGlzLmhhc2hOYXZpZ2F0aW9uLmluaXRpYWxpemVkJiZ0aGlzLnBhcmFtcy5jc3NNb2RlJiZ0aGlzLmhhc2hOYXZpZ2F0aW9uLnNldEhhc2goKX19fSx7bmFtZTpcImF1dG9wbGF5XCIscGFyYW1zOnthdXRvcGxheTp7ZW5hYmxlZDohMSxkZWxheTozZTMsd2FpdEZvclRyYW5zaXRpb246ITAsZGlzYWJsZU9uSW50ZXJhY3Rpb246ITAsc3RvcE9uTGFzdFNsaWRlOiExLHJldmVyc2VEaXJlY3Rpb246ITF9fSxjcmVhdGU6ZnVuY3Rpb24oKXt2YXIgZT10aGlzO24uZXh0ZW5kKGUse2F1dG9wbGF5OntydW5uaW5nOiExLHBhdXNlZDohMSxydW46dWUucnVuLmJpbmQoZSksc3RhcnQ6dWUuc3RhcnQuYmluZChlKSxzdG9wOnVlLnN0b3AuYmluZChlKSxwYXVzZTp1ZS5wYXVzZS5iaW5kKGUpLG9uVmlzaWJpbGl0eUNoYW5nZTpmdW5jdGlvbigpe1wiaGlkZGVuXCI9PT1kb2N1bWVudC52aXNpYmlsaXR5U3RhdGUmJmUuYXV0b3BsYXkucnVubmluZyYmZS5hdXRvcGxheS5wYXVzZSgpLFwidmlzaWJsZVwiPT09ZG9jdW1lbnQudmlzaWJpbGl0eVN0YXRlJiZlLmF1dG9wbGF5LnBhdXNlZCYmKGUuYXV0b3BsYXkucnVuKCksZS5hdXRvcGxheS5wYXVzZWQ9ITEpfSxvblRyYW5zaXRpb25FbmQ6ZnVuY3Rpb24odCl7ZSYmIWUuZGVzdHJveWVkJiZlLiR3cmFwcGVyRWwmJnQudGFyZ2V0PT09dGhpcyYmKGUuJHdyYXBwZXJFbFswXS5yZW1vdmVFdmVudExpc3RlbmVyKFwidHJhbnNpdGlvbmVuZFwiLGUuYXV0b3BsYXkub25UcmFuc2l0aW9uRW5kKSxlLiR3cmFwcGVyRWxbMF0ucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIndlYmtpdFRyYW5zaXRpb25FbmRcIixlLmF1dG9wbGF5Lm9uVHJhbnNpdGlvbkVuZCksZS5hdXRvcGxheS5wYXVzZWQ9ITEsZS5hdXRvcGxheS5ydW5uaW5nP2UuYXV0b3BsYXkucnVuKCk6ZS5hdXRvcGxheS5zdG9wKCkpfX19KX0sb246e2luaXQ6ZnVuY3Rpb24oKXt0aGlzLnBhcmFtcy5hdXRvcGxheS5lbmFibGVkJiYodGhpcy5hdXRvcGxheS5zdGFydCgpLGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJ2aXNpYmlsaXR5Y2hhbmdlXCIsdGhpcy5hdXRvcGxheS5vblZpc2liaWxpdHlDaGFuZ2UpKX0sYmVmb3JlVHJhbnNpdGlvblN0YXJ0OmZ1bmN0aW9uKGUsdCl7dGhpcy5hdXRvcGxheS5ydW5uaW5nJiYodHx8IXRoaXMucGFyYW1zLmF1dG9wbGF5LmRpc2FibGVPbkludGVyYWN0aW9uP3RoaXMuYXV0b3BsYXkucGF1c2UoZSk6dGhpcy5hdXRvcGxheS5zdG9wKCkpfSxzbGlkZXJGaXJzdE1vdmU6ZnVuY3Rpb24oKXt0aGlzLmF1dG9wbGF5LnJ1bm5pbmcmJih0aGlzLnBhcmFtcy5hdXRvcGxheS5kaXNhYmxlT25JbnRlcmFjdGlvbj90aGlzLmF1dG9wbGF5LnN0b3AoKTp0aGlzLmF1dG9wbGF5LnBhdXNlKCkpfSx0b3VjaEVuZDpmdW5jdGlvbigpe3RoaXMucGFyYW1zLmNzc01vZGUmJnRoaXMuYXV0b3BsYXkucGF1c2VkJiYhdGhpcy5wYXJhbXMuYXV0b3BsYXkuZGlzYWJsZU9uSW50ZXJhY3Rpb24mJnRoaXMuYXV0b3BsYXkucnVuKCl9LGRlc3Ryb3k6ZnVuY3Rpb24oKXt0aGlzLmF1dG9wbGF5LnJ1bm5pbmcmJnRoaXMuYXV0b3BsYXkuc3RvcCgpLGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ2aXNpYmlsaXR5Y2hhbmdlXCIsdGhpcy5hdXRvcGxheS5vblZpc2liaWxpdHlDaGFuZ2UpfX19LHtuYW1lOlwiZWZmZWN0LWZhZGVcIixwYXJhbXM6e2ZhZGVFZmZlY3Q6e2Nyb3NzRmFkZTohMX19LGNyZWF0ZTpmdW5jdGlvbigpe24uZXh0ZW5kKHRoaXMse2ZhZGVFZmZlY3Q6e3NldFRyYW5zbGF0ZTp2ZS5zZXRUcmFuc2xhdGUuYmluZCh0aGlzKSxzZXRUcmFuc2l0aW9uOnZlLnNldFRyYW5zaXRpb24uYmluZCh0aGlzKX19KX0sb246e2JlZm9yZUluaXQ6ZnVuY3Rpb24oKXtpZihcImZhZGVcIj09PXRoaXMucGFyYW1zLmVmZmVjdCl7dGhpcy5jbGFzc05hbWVzLnB1c2godGhpcy5wYXJhbXMuY29udGFpbmVyTW9kaWZpZXJDbGFzcytcImZhZGVcIik7dmFyIGU9e3NsaWRlc1BlclZpZXc6MSxzbGlkZXNQZXJDb2x1bW46MSxzbGlkZXNQZXJHcm91cDoxLHdhdGNoU2xpZGVzUHJvZ3Jlc3M6ITAsc3BhY2VCZXR3ZWVuOjAsdmlydHVhbFRyYW5zbGF0ZTohMH07bi5leHRlbmQodGhpcy5wYXJhbXMsZSksbi5leHRlbmQodGhpcy5vcmlnaW5hbFBhcmFtcyxlKX19LHNldFRyYW5zbGF0ZTpmdW5jdGlvbigpe1wiZmFkZVwiPT09dGhpcy5wYXJhbXMuZWZmZWN0JiZ0aGlzLmZhZGVFZmZlY3Quc2V0VHJhbnNsYXRlKCl9LHNldFRyYW5zaXRpb246ZnVuY3Rpb24oZSl7XCJmYWRlXCI9PT10aGlzLnBhcmFtcy5lZmZlY3QmJnRoaXMuZmFkZUVmZmVjdC5zZXRUcmFuc2l0aW9uKGUpfX19LHtuYW1lOlwiZWZmZWN0LWN1YmVcIixwYXJhbXM6e2N1YmVFZmZlY3Q6e3NsaWRlU2hhZG93czohMCxzaGFkb3c6ITAsc2hhZG93T2Zmc2V0OjIwLHNoYWRvd1NjYWxlOi45NH19LGNyZWF0ZTpmdW5jdGlvbigpe24uZXh0ZW5kKHRoaXMse2N1YmVFZmZlY3Q6e3NldFRyYW5zbGF0ZTpmZS5zZXRUcmFuc2xhdGUuYmluZCh0aGlzKSxzZXRUcmFuc2l0aW9uOmZlLnNldFRyYW5zaXRpb24uYmluZCh0aGlzKX19KX0sb246e2JlZm9yZUluaXQ6ZnVuY3Rpb24oKXtpZihcImN1YmVcIj09PXRoaXMucGFyYW1zLmVmZmVjdCl7dGhpcy5jbGFzc05hbWVzLnB1c2godGhpcy5wYXJhbXMuY29udGFpbmVyTW9kaWZpZXJDbGFzcytcImN1YmVcIiksdGhpcy5jbGFzc05hbWVzLnB1c2godGhpcy5wYXJhbXMuY29udGFpbmVyTW9kaWZpZXJDbGFzcytcIjNkXCIpO3ZhciBlPXtzbGlkZXNQZXJWaWV3OjEsc2xpZGVzUGVyQ29sdW1uOjEsc2xpZGVzUGVyR3JvdXA6MSx3YXRjaFNsaWRlc1Byb2dyZXNzOiEwLHJlc2lzdGFuY2VSYXRpbzowLHNwYWNlQmV0d2VlbjowLGNlbnRlcmVkU2xpZGVzOiExLHZpcnR1YWxUcmFuc2xhdGU6ITB9O24uZXh0ZW5kKHRoaXMucGFyYW1zLGUpLG4uZXh0ZW5kKHRoaXMub3JpZ2luYWxQYXJhbXMsZSl9fSxzZXRUcmFuc2xhdGU6ZnVuY3Rpb24oKXtcImN1YmVcIj09PXRoaXMucGFyYW1zLmVmZmVjdCYmdGhpcy5jdWJlRWZmZWN0LnNldFRyYW5zbGF0ZSgpfSxzZXRUcmFuc2l0aW9uOmZ1bmN0aW9uKGUpe1wiY3ViZVwiPT09dGhpcy5wYXJhbXMuZWZmZWN0JiZ0aGlzLmN1YmVFZmZlY3Quc2V0VHJhbnNpdGlvbihlKX19fSx7bmFtZTpcImVmZmVjdC1mbGlwXCIscGFyYW1zOntmbGlwRWZmZWN0OntzbGlkZVNoYWRvd3M6ITAsbGltaXRSb3RhdGlvbjohMH19LGNyZWF0ZTpmdW5jdGlvbigpe24uZXh0ZW5kKHRoaXMse2ZsaXBFZmZlY3Q6e3NldFRyYW5zbGF0ZTptZS5zZXRUcmFuc2xhdGUuYmluZCh0aGlzKSxzZXRUcmFuc2l0aW9uOm1lLnNldFRyYW5zaXRpb24uYmluZCh0aGlzKX19KX0sb246e2JlZm9yZUluaXQ6ZnVuY3Rpb24oKXtpZihcImZsaXBcIj09PXRoaXMucGFyYW1zLmVmZmVjdCl7dGhpcy5jbGFzc05hbWVzLnB1c2godGhpcy5wYXJhbXMuY29udGFpbmVyTW9kaWZpZXJDbGFzcytcImZsaXBcIiksdGhpcy5jbGFzc05hbWVzLnB1c2godGhpcy5wYXJhbXMuY29udGFpbmVyTW9kaWZpZXJDbGFzcytcIjNkXCIpO3ZhciBlPXtzbGlkZXNQZXJWaWV3OjEsc2xpZGVzUGVyQ29sdW1uOjEsc2xpZGVzUGVyR3JvdXA6MSx3YXRjaFNsaWRlc1Byb2dyZXNzOiEwLHNwYWNlQmV0d2VlbjowLHZpcnR1YWxUcmFuc2xhdGU6ITB9O24uZXh0ZW5kKHRoaXMucGFyYW1zLGUpLG4uZXh0ZW5kKHRoaXMub3JpZ2luYWxQYXJhbXMsZSl9fSxzZXRUcmFuc2xhdGU6ZnVuY3Rpb24oKXtcImZsaXBcIj09PXRoaXMucGFyYW1zLmVmZmVjdCYmdGhpcy5mbGlwRWZmZWN0LnNldFRyYW5zbGF0ZSgpfSxzZXRUcmFuc2l0aW9uOmZ1bmN0aW9uKGUpe1wiZmxpcFwiPT09dGhpcy5wYXJhbXMuZWZmZWN0JiZ0aGlzLmZsaXBFZmZlY3Quc2V0VHJhbnNpdGlvbihlKX19fSx7bmFtZTpcImVmZmVjdC1jb3ZlcmZsb3dcIixwYXJhbXM6e2NvdmVyZmxvd0VmZmVjdDp7cm90YXRlOjUwLHN0cmV0Y2g6MCxkZXB0aDoxMDAsbW9kaWZpZXI6MSxzbGlkZVNoYWRvd3M6ITB9fSxjcmVhdGU6ZnVuY3Rpb24oKXtuLmV4dGVuZCh0aGlzLHtjb3ZlcmZsb3dFZmZlY3Q6e3NldFRyYW5zbGF0ZTpnZS5zZXRUcmFuc2xhdGUuYmluZCh0aGlzKSxzZXRUcmFuc2l0aW9uOmdlLnNldFRyYW5zaXRpb24uYmluZCh0aGlzKX19KX0sb246e2JlZm9yZUluaXQ6ZnVuY3Rpb24oKXtcImNvdmVyZmxvd1wiPT09dGhpcy5wYXJhbXMuZWZmZWN0JiYodGhpcy5jbGFzc05hbWVzLnB1c2godGhpcy5wYXJhbXMuY29udGFpbmVyTW9kaWZpZXJDbGFzcytcImNvdmVyZmxvd1wiKSx0aGlzLmNsYXNzTmFtZXMucHVzaCh0aGlzLnBhcmFtcy5jb250YWluZXJNb2RpZmllckNsYXNzK1wiM2RcIiksdGhpcy5wYXJhbXMud2F0Y2hTbGlkZXNQcm9ncmVzcz0hMCx0aGlzLm9yaWdpbmFsUGFyYW1zLndhdGNoU2xpZGVzUHJvZ3Jlc3M9ITApfSxzZXRUcmFuc2xhdGU6ZnVuY3Rpb24oKXtcImNvdmVyZmxvd1wiPT09dGhpcy5wYXJhbXMuZWZmZWN0JiZ0aGlzLmNvdmVyZmxvd0VmZmVjdC5zZXRUcmFuc2xhdGUoKX0sc2V0VHJhbnNpdGlvbjpmdW5jdGlvbihlKXtcImNvdmVyZmxvd1wiPT09dGhpcy5wYXJhbXMuZWZmZWN0JiZ0aGlzLmNvdmVyZmxvd0VmZmVjdC5zZXRUcmFuc2l0aW9uKGUpfX19LHtuYW1lOlwidGh1bWJzXCIscGFyYW1zOnt0aHVtYnM6e3N3aXBlcjpudWxsLG11bHRpcGxlQWN0aXZlVGh1bWJzOiEwLGF1dG9TY3JvbGxPZmZzZXQ6MCxzbGlkZVRodW1iQWN0aXZlQ2xhc3M6XCJzd2lwZXItc2xpZGUtdGh1bWItYWN0aXZlXCIsdGh1bWJzQ29udGFpbmVyQ2xhc3M6XCJzd2lwZXItY29udGFpbmVyLXRodW1ic1wifX0sY3JlYXRlOmZ1bmN0aW9uKCl7bi5leHRlbmQodGhpcyx7dGh1bWJzOntzd2lwZXI6bnVsbCxpbml0OmJlLmluaXQuYmluZCh0aGlzKSx1cGRhdGU6YmUudXBkYXRlLmJpbmQodGhpcyksb25UaHVtYkNsaWNrOmJlLm9uVGh1bWJDbGljay5iaW5kKHRoaXMpfX0pfSxvbjp7YmVmb3JlSW5pdDpmdW5jdGlvbigpe3ZhciBlPXRoaXMucGFyYW1zLnRodW1icztlJiZlLnN3aXBlciYmKHRoaXMudGh1bWJzLmluaXQoKSx0aGlzLnRodW1icy51cGRhdGUoITApKX0sc2xpZGVDaGFuZ2U6ZnVuY3Rpb24oKXt0aGlzLnRodW1icy5zd2lwZXImJnRoaXMudGh1bWJzLnVwZGF0ZSgpfSx1cGRhdGU6ZnVuY3Rpb24oKXt0aGlzLnRodW1icy5zd2lwZXImJnRoaXMudGh1bWJzLnVwZGF0ZSgpfSxyZXNpemU6ZnVuY3Rpb24oKXt0aGlzLnRodW1icy5zd2lwZXImJnRoaXMudGh1bWJzLnVwZGF0ZSgpfSxvYnNlcnZlclVwZGF0ZTpmdW5jdGlvbigpe3RoaXMudGh1bWJzLnN3aXBlciYmdGhpcy50aHVtYnMudXBkYXRlKCl9LHNldFRyYW5zaXRpb246ZnVuY3Rpb24oZSl7dmFyIHQ9dGhpcy50aHVtYnMuc3dpcGVyO3QmJnQuc2V0VHJhbnNpdGlvbihlKX0sYmVmb3JlRGVzdHJveTpmdW5jdGlvbigpe3ZhciBlPXRoaXMudGh1bWJzLnN3aXBlcjtlJiZ0aGlzLnRodW1icy5zd2lwZXJDcmVhdGVkJiZlJiZlLmRlc3Ryb3koKX19fV07cmV0dXJuIHZvaWQgMD09PVcudXNlJiYoVy51c2U9Vy5DbGFzcy51c2UsVy5pbnN0YWxsTW9kdWxlPVcuQ2xhc3MuaW5zdGFsbE1vZHVsZSksVy51c2Uod2UpLFd9KSk7XG4iXSwibWFwcGluZ3MiOiI7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsQ0FBQyxVQUFTQSxDQUFDLEVBQUNDLENBQUMsRUFBQztFQUFDLFFBQVEsWUFBU0MsT0FBTyxpQ0FBQUMsT0FBQSxDQUFQRCxPQUFPLE1BQUUsV0FBVyxJQUFFLE9BQU9FLE1BQU0sR0FBQ0EsTUFBTSxDQUFDRixPQUFPLEdBQUNELENBQUMsQ0FBQyxDQUFDLEdBQUMsVUFBVSxJQUFFLE9BQU9JLE1BQU0sSUFBRUEsTUFBTSxDQUFDQyxHQUFHLEdBQUNELE1BQU0sQ0FBQ0osQ0FBQyxDQUFDLEdBQUMsQ0FBQ0QsQ0FBQyxHQUFDQSxDQUFDLElBQUVPLElBQUksRUFBRUMsTUFBTSxHQUFDUCxDQUFDLENBQUMsQ0FBQztBQUFBLENBQUMsU0FBTyxZQUFVO0VBQUMsWUFBWTs7RUFBQyxJQUFJRCxDQUFDLEdBQUMsV0FBVyxJQUFFLE9BQU9TLFFBQVEsR0FBQztNQUFDQyxJQUFJLEVBQUMsQ0FBQyxDQUFDO01BQUNDLGdCQUFnQixFQUFDLFNBQUFBLGlCQUFBLEVBQVUsQ0FBQyxDQUFDO01BQUNDLG1CQUFtQixFQUFDLFNBQUFBLG9CQUFBLEVBQVUsQ0FBQyxDQUFDO01BQUNDLGFBQWEsRUFBQztRQUFDQyxJQUFJLEVBQUMsU0FBQUEsS0FBQSxFQUFVLENBQUMsQ0FBQztRQUFDQyxRQUFRLEVBQUM7TUFBRSxDQUFDO01BQUNDLGFBQWEsRUFBQyxTQUFBQSxjQUFBLEVBQVU7UUFBQyxPQUFPLElBQUk7TUFBQSxDQUFDO01BQUNDLGdCQUFnQixFQUFDLFNBQUFBLGlCQUFBLEVBQVU7UUFBQyxPQUFNLEVBQUU7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QyxFQUFDLElBQUksTUFBSUMsQ0FBQyxHQUFDQSxDQUFDLENBQUNzSSxlQUFlLENBQUMsR0FBRSxDQUFDLEtBQUd0SSxDQUFDLENBQUN3RCxRQUFRLEtBQUd6RCxDQUFDLElBQUUsQ0FBQyxDQUFDO1FBQUMsT0FBT0EsQ0FBQztNQUFBO0lBQUMsQ0FBQztJQUFDd0ksRUFBRSxFQUFDLFNBQUFBLEdBQVN4SSxDQUFDLEVBQUM7TUFBQyxJQUFHLEtBQUssQ0FBQyxLQUFHQSxDQUFDLEVBQUMsT0FBTyxJQUFJO01BQUMsSUFBSUMsQ0FBQztRQUFDMEMsQ0FBQyxHQUFDLElBQUksQ0FBQ0QsTUFBTTtNQUFDLE9BQU8sSUFBSUQsQ0FBQyxDQUFDekMsQ0FBQyxHQUFDMkMsQ0FBQyxHQUFDLENBQUMsR0FBQyxFQUFFLEdBQUMzQyxDQUFDLEdBQUMsQ0FBQyxHQUFDLENBQUNDLENBQUMsR0FBQzBDLENBQUMsR0FBQzNDLENBQUMsSUFBRSxDQUFDLEdBQUMsRUFBRSxHQUFDLENBQUMsSUFBSSxDQUFDQyxDQUFDLENBQUMsQ0FBQyxHQUFDLENBQUMsSUFBSSxDQUFDRCxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQUEsQ0FBQztJQUFDeUksTUFBTSxFQUFDLFNBQUFBLE9BQUEsRUFBVTtNQUFDLEtBQUksSUFBSXhJLENBQUMsRUFBQzBDLENBQUMsR0FBQyxFQUFFLEVBQUNDLENBQUMsR0FBQzRCLFNBQVMsQ0FBQzlCLE1BQU0sRUFBQ0UsQ0FBQyxFQUFFLEdBQUVELENBQUMsQ0FBQ0MsQ0FBQyxDQUFDLEdBQUM0QixTQUFTLENBQUM1QixDQUFDLENBQUM7TUFBQyxLQUFJLElBQUlDLENBQUMsR0FBQyxDQUFDLEVBQUNBLENBQUMsR0FBQ0YsQ0FBQyxDQUFDRCxNQUFNLEVBQUNHLENBQUMsSUFBRSxDQUFDLEVBQUM7UUFBQzVDLENBQUMsR0FBQzBDLENBQUMsQ0FBQ0UsQ0FBQyxDQUFDO1FBQUMsS0FBSSxJQUFJQyxDQUFDLEdBQUMsQ0FBQyxFQUFDQSxDQUFDLEdBQUMsSUFBSSxDQUFDSixNQUFNLEVBQUNJLENBQUMs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