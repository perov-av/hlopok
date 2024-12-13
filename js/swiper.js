"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3dpcGVyLmpzIiwibmFtZXMiOlsiZSIsInQiLCJleHBvcnRzIiwiX3R5cGVvZiIsIm1vZHVsZSIsImRlZmluZSIsImFtZCIsInNlbGYiLCJTd2lwZXIiLCJkb2N1bWVudCIsImJvZHkiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImFjdGl2ZUVsZW1lbnQiLCJibHVyIiwibm9kZU5hbWUiLCJxdWVyeVNlbGVjdG9yIiwicXVlcnlTZWxlY3RvckFsbCIsImdldEVsZW1lbnRCeUlkIiwiY3JlYXRlRXZlbnQiLCJpbml0RXZlbnQiLCJjcmVhdGVFbGVtZW50IiwiY2hpbGRyZW4iLCJjaGlsZE5vZGVzIiwic3R5bGUiLCJzZXRBdHRyaWJ1dGUiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsImxvY2F0aW9uIiwiaGFzaCIsIndpbmRvdyIsIm5hdmlnYXRvciIsInVzZXJBZ2VudCIsImhpc3RvcnkiLCJDdXN0b21FdmVudCIsImdldENvbXB1dGVkU3R5bGUiLCJnZXRQcm9wZXJ0eVZhbHVlIiwiSW1hZ2UiLCJEYXRlIiwic2NyZWVuIiwic2V0VGltZW91dCIsImNsZWFyVGltZW91dCIsImkiLCJsZW5ndGgiLCJzIiwiYSIsInIiLCJuIiwibyIsImwiLCJkIiwidHJpbSIsImluZGV4T2YiLCJoIiwiaW5uZXJIVE1MIiwicHVzaCIsIm1hdGNoIiwic3BsaXQiLCJub2RlVHlwZSIsImZuIiwicHJvdG90eXBlIiwiQ2xhc3MiLCJEb203IiwiYWRkQ2xhc3MiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmVDbGFzcyIsInJlbW92ZSIsImhhc0NsYXNzIiwiY29udGFpbnMiLCJ0b2dnbGVDbGFzcyIsInRvZ2dsZSIsImF0dHIiLCJhcmd1bWVudHMiLCJnZXRBdHRyaWJ1dGUiLCJyZW1vdmVBdHRyIiwicmVtb3ZlQXR0cmlidXRlIiwiZGF0YSIsImRvbTdFbGVtZW50RGF0YVN0b3JhZ2UiLCJ0cmFuc2Zvcm0iLCJ3ZWJraXRUcmFuc2Zvcm0iLCJ0cmFuc2l0aW9uIiwid2Via2l0VHJhbnNpdGlvbkR1cmF0aW9uIiwidHJhbnNpdGlvbkR1cmF0aW9uIiwib24iLCJ0YXJnZXQiLCJkb203RXZlbnREYXRhIiwidW5zaGlmdCIsImlzIiwiYXBwbHkiLCJwYXJlbnRzIiwicCIsImMiLCJ1IiwidiIsImRvbTdMaXZlTGlzdGVuZXJzIiwibGlzdGVuZXIiLCJwcm94eUxpc3RlbmVyIiwiZiIsImRvbTdMaXN0ZW5lcnMiLCJvZmYiLCJkb203cHJveHkiLCJzcGxpY2UiLCJ0cmlnZ2VyIiwiZGV0YWlsIiwiYnViYmxlcyIsImNhbmNlbGFibGUiLCJmaWx0ZXIiLCJkaXNwYXRjaEV2ZW50IiwidHJhbnNpdGlvbkVuZCIsImNhbGwiLCJvdXRlcldpZHRoIiwic3R5bGVzIiwib2Zmc2V0V2lkdGgiLCJwYXJzZUZsb2F0Iiwib3V0ZXJIZWlnaHQiLCJvZmZzZXRIZWlnaHQiLCJvZmZzZXQiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJjbGllbnRUb3AiLCJjbGllbnRMZWZ0Iiwic2Nyb2xsWSIsInNjcm9sbFRvcCIsInNjcm9sbFgiLCJzY3JvbGxMZWZ0IiwidG9wIiwibGVmdCIsImNzcyIsImVhY2giLCJodG1sIiwidGV4dCIsInRleHRDb250ZW50IiwibWF0Y2hlcyIsIndlYmtpdE1hdGNoZXNTZWxlY3RvciIsIm1zTWF0Y2hlc1NlbGVjdG9yIiwiaW5kZXgiLCJwcmV2aW91c1NpYmxpbmciLCJlcSIsImFwcGVuZCIsImZpcnN0Q2hpbGQiLCJhcHBlbmRDaGlsZCIsInByZXBlbmQiLCJpbnNlcnRCZWZvcmUiLCJuZXh0IiwibmV4dEVsZW1lbnRTaWJsaW5nIiwibmV4dEFsbCIsInByZXYiLCJwcmV2aW91c0VsZW1lbnRTaWJsaW5nIiwicHJldkFsbCIsInBhcmVudCIsInBhcmVudE5vZGUiLCJjbG9zZXN0IiwiZmluZCIsInJlbW92ZUNoaWxkIiwiT2JqZWN0Iiwia2V5cyIsImZvckVhY2giLCJkZWxldGVQcm9wcyIsIm5leHRUaWNrIiwibm93IiwiZ2V0VHJhbnNsYXRlIiwiV2ViS2l0Q1NTTWF0cml4IiwibWFwIiwicmVwbGFjZSIsImpvaW4iLCJNb3pUcmFuc2Zvcm0iLCJPVHJhbnNmb3JtIiwiTXNUcmFuc2Zvcm0iLCJtc1RyYW5zZm9ybSIsInRvU3RyaW5nIiwibTQxIiwibTQyIiwicGFyc2VVcmxRdWVyeSIsImhyZWYiLCJkZWNvZGVVUklDb21wb25lbnQiLCJpc09iamVjdCIsImNvbnN0cnVjdG9yIiwiZXh0ZW5kIiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwiZW51bWVyYWJsZSIsInRvdWNoIiwiTW9kZXJuaXpyIiwibWF4VG91Y2hQb2ludHMiLCJEb2N1bWVudFRvdWNoIiwicG9pbnRlckV2ZW50cyIsIlBvaW50ZXJFdmVudCIsIm9ic2VydmVyIiwicGFzc2l2ZUxpc3RlbmVyIiwiZGVmaW5lUHJvcGVydHkiLCJnZXQiLCJnZXN0dXJlcyIsInBhcmFtcyIsImV2ZW50c0xpc3RlbmVycyIsImNvbXBvbmVudHMiLCJjb25maWd1cmFibGUiLCJvbmNlIiwiZjdwcm94eSIsImVtaXQiLCJBcnJheSIsImlzQXJyYXkiLCJzbGljZSIsImV2ZW50cyIsImNvbnRleHQiLCJ1c2VNb2R1bGVzUGFyYW1zIiwibW9kdWxlcyIsInVzZU1vZHVsZXMiLCJpbnN0YW5jZSIsImJpbmQiLCJjcmVhdGUiLCJzZXQiLCJ1c2UiLCJpbnN0YWxsTW9kdWxlIiwibmFtZSIsInByb3RvIiwiaW5zdGFsbCIsImNvbmNhdCIsImRlZmluZVByb3BlcnRpZXMiLCJ1cGRhdGVTaXplIiwiJGVsIiwid2lkdGgiLCJjbGllbnRXaWR0aCIsImhlaWdodCIsImNsaWVudEhlaWdodCIsImlzSG9yaXpvbnRhbCIsImlzVmVydGljYWwiLCJwYXJzZUludCIsInNpemUiLCJ1cGRhdGVTbGlkZXMiLCIkd3JhcHBlckVsIiwicnRsVHJhbnNsYXRlIiwid3JvbmdSVEwiLCJ2aXJ0dWFsIiwiZW5hYmxlZCIsInNsaWRlcyIsInNsaWRlQ2xhc3MiLCJjc3NNb2RlIiwic2xpZGVzT2Zmc2V0QmVmb3JlIiwibSIsInNsaWRlc09mZnNldEFmdGVyIiwiZyIsInNuYXBHcmlkIiwiYiIsInciLCJzcGFjZUJldHdlZW4iLCJ5IiwieCIsIlQiLCJFIiwiUyIsInZpcnR1YWxTaXplIiwibWFyZ2luTGVmdCIsIm1hcmdpblRvcCIsIm1hcmdpblJpZ2h0IiwibWFyZ2luQm90dG9tIiwic2xpZGVzUGVyQ29sdW1uIiwiTWF0aCIsImZsb29yIiwiY2VpbCIsInNsaWRlc1BlclZpZXciLCJzbGlkZXNQZXJDb2x1bW5GaWxsIiwibWF4IiwiQyIsIk0iLCJQIiwieiIsImsiLCIkIiwiTCIsIkkiLCJEIiwic2xpZGVzUGVyR3JvdXAiLCJPIiwiQSIsIkciLCJtaW4iLCJvcmRlciIsIkgiLCJCIiwiTiIsInJvdW5kTGVuZ3RocyIsIlgiLCJWIiwiWSIsIkYiLCJXIiwiUiIsInEiLCJqIiwiSyIsIlUiLCJfIiwiWiIsInN3aXBlclNsaWRlU2l6ZSIsImNlbnRlcmVkU2xpZGVzIiwiYWJzIiwic2xpZGVzUGVyR3JvdXBTa2lwIiwiZWZmZWN0Iiwic2V0V3JhcHBlclNpemUiLCJRIiwiSiIsImVlIiwidGUiLCJjZW50ZXJlZFNsaWRlc0JvdW5kcyIsImllIiwic2UiLCJjZW50ZXJJbnN1ZmZpY2llbnRTbGlkZXMiLCJhZSIsInJlIiwic2xpZGVzR3JpZCIsInNsaWRlc1NpemVzR3JpZCIsIndhdGNoT3ZlcmZsb3ciLCJjaGVja092ZXJmbG93Iiwid2F0Y2hTbGlkZXNQcm9ncmVzcyIsIndhdGNoU2xpZGVzVmlzaWJpbGl0eSIsInVwZGF0ZVNsaWRlc09mZnNldCIsInVwZGF0ZUF1dG9IZWlnaHQiLCJzZXRUcmFuc2l0aW9uIiwic3BlZWQiLCJ2aXNpYmxlU2xpZGVzIiwiYWN0aXZlSW5kZXgiLCJzd2lwZXJTbGlkZU9mZnNldCIsIm9mZnNldExlZnQiLCJvZmZzZXRUb3AiLCJ1cGRhdGVTbGlkZXNQcm9ncmVzcyIsInRyYW5zbGF0ZSIsInNsaWRlVmlzaWJsZUNsYXNzIiwidmlzaWJsZVNsaWRlc0luZGV4ZXMiLCJtaW5UcmFuc2xhdGUiLCJhdXRvSGVpZ2h0IiwicHJvZ3Jlc3MiLCJ1cGRhdGVQcm9ncmVzcyIsIm1heFRyYW5zbGF0ZSIsImlzQmVnaW5uaW5nIiwiaXNFbmQiLCJ1cGRhdGVTbGlkZXNDbGFzc2VzIiwicmVhbEluZGV4Iiwic2xpZGVBY3RpdmVDbGFzcyIsInNsaWRlTmV4dENsYXNzIiwic2xpZGVQcmV2Q2xhc3MiLCJzbGlkZUR1cGxpY2F0ZUFjdGl2ZUNsYXNzIiwic2xpZGVEdXBsaWNhdGVOZXh0Q2xhc3MiLCJzbGlkZUR1cGxpY2F0ZVByZXZDbGFzcyIsImxvb3AiLCJzbGlkZUR1cGxpY2F0ZUNsYXNzIiwidXBkYXRlQWN0aXZlSW5kZXgiLCJzbmFwSW5kZXgiLCJub3JtYWxpemVTbGlkZUluZGV4IiwicHJldmlvdXNJbmRleCIsImluaXRpYWxpemVkIiwicnVuQ2FsbGJhY2tzT25Jbml0IiwidXBkYXRlQ2xpY2tlZFNsaWRlIiwiY2xpY2tlZFNsaWRlIiwiY2xpY2tlZEluZGV4Iiwic2xpZGVUb0NsaWNrZWRTbGlkZSIsInZpcnR1YWxUcmFuc2xhdGUiLCJzZXRUcmFuc2xhdGUiLCJ3cmFwcGVyRWwiLCJwcmV2aW91c1RyYW5zbGF0ZSIsInRyYW5zbGF0ZVRvIiwiYW5pbWF0aW5nIiwicHJldmVudEludGVyYWN0aW9uT25UcmFuc2l0aW9uIiwic2Nyb2xsVG8iLCJiZWhhdmlvciIsIm9uVHJhbnNsYXRlVG9XcmFwcGVyVHJhbnNpdGlvbkVuZCIsImRlc3Ryb3llZCIsInRyYW5zaXRpb25TdGFydCIsInNsaWRlVG8iLCJpbml0aWFsU2xpZGUiLCJhbGxvd1NsaWRlTmV4dCIsImFsbG93U2xpZGVQcmV2Iiwic2Nyb2xsV2lkdGgiLCJvblNsaWRlVG9XcmFwcGVyVHJhbnNpdGlvbkVuZCIsInNsaWRlVG9Mb29wIiwibG9vcGVkU2xpZGVzIiwic2xpZGVOZXh0IiwibG9vcEZpeCIsIl9jbGllbnRMZWZ0Iiwic2xpZGVQcmV2Iiwic2xpZGVSZXNldCIsInNsaWRlVG9DbG9zZXN0Iiwic2xpZGVzUGVyVmlld0R5bmFtaWMiLCJsb29wQ3JlYXRlIiwibG9vcEZpbGxHcm91cFdpdGhCbGFuayIsInNsaWRlQmxhbmtDbGFzcyIsImxvb3BBZGRpdGlvbmFsU2xpZGVzIiwiY2xvbmVOb2RlIiwibG9vcERlc3Ryb3kiLCJzZXRHcmFiQ3Vyc29yIiwic2ltdWxhdGVUb3VjaCIsImlzTG9ja2VkIiwiZWwiLCJjdXJzb3IiLCJ1bnNldEdyYWJDdXJzb3IiLCJhcHBlbmRTbGlkZSIsInVwZGF0ZSIsInByZXBlbmRTbGlkZSIsImFkZFNsaWRlIiwicmVtb3ZlU2xpZGUiLCJyZW1vdmVBbGxTbGlkZXMiLCJwbGF0Zm9ybSIsImlvcyIsImFuZHJvaWQiLCJhbmRyb2lkQ2hyb21lIiwiZGVza3RvcCIsImlwaG9uZSIsImlwb2QiLCJpcGFkIiwiZWRnZSIsImZpcmVmb3giLCJtYWNvcyIsIndpbmRvd3MiLCJjb3Jkb3ZhIiwicGhvbmVnYXAiLCJlbGVjdHJvbiIsInRvTG93ZXJDYXNlIiwib3MiLCJvc1ZlcnNpb24iLCJ3ZWJWaWV3Iiwic3RhbmRhbG9uZSIsIm1hdGNoTWVkaWEiLCJ3ZWJ2aWV3IiwicGl4ZWxSYXRpbyIsImRldmljZVBpeGVsUmF0aW8iLCJ0b3VjaEV2ZW50c0RhdGEiLCJ0b3VjaGVzIiwib3JpZ2luYWxFdmVudCIsInRvdWNoRXZlbnRzVGFyZ2V0IiwiaXNUb3VjaEV2ZW50IiwidHlwZSIsIndoaWNoIiwiYnV0dG9uIiwiaXNUb3VjaGVkIiwiaXNNb3ZlZCIsIm5vU3dpcGluZyIsIm5vU3dpcGluZ1NlbGVjdG9yIiwibm9Td2lwaW5nQ2xhc3MiLCJhbGxvd0NsaWNrIiwic3dpcGVIYW5kbGVyIiwiY3VycmVudFgiLCJ0YXJnZXRUb3VjaGVzIiwicGFnZVgiLCJjdXJyZW50WSIsInBhZ2VZIiwiZWRnZVN3aXBlRGV0ZWN0aW9uIiwiaU9TRWRnZVN3aXBlRGV0ZWN0aW9uIiwiZWRnZVN3aXBlVGhyZXNob2xkIiwiaU9TRWRnZVN3aXBlVGhyZXNob2xkIiwiYWxsb3dUb3VjaENhbGxiYWNrcyIsImlzU2Nyb2xsaW5nIiwic3RhcnRNb3ZpbmciLCJzdGFydFgiLCJzdGFydFkiLCJ0b3VjaFN0YXJ0VGltZSIsInN3aXBlRGlyZWN0aW9uIiwidGhyZXNob2xkIiwiYWxsb3dUaHJlc2hvbGRNb3ZlIiwiZm9ybUVsZW1lbnRzIiwiYWxsb3dUb3VjaE1vdmUiLCJ0b3VjaFN0YXJ0UHJldmVudERlZmF1bHQiLCJ0b3VjaFN0YXJ0Rm9yY2VQcmV2ZW50RGVmYXVsdCIsInByZXZlbnREZWZhdWx0IiwiY2hhbmdlZFRvdWNoZXMiLCJwcmV2ZW50ZWRCeU5lc3RlZFN3aXBlciIsInRvdWNoUmVsZWFzZU9uRWRnZXMiLCJzcXJ0IiwicG93IiwiYXRhbjIiLCJQSSIsInRvdWNoQW5nbGUiLCJ0b3VjaE1vdmVTdG9wUHJvcGFnYXRpb24iLCJuZXN0ZWQiLCJzdG9wUHJvcGFnYXRpb24iLCJzdGFydFRyYW5zbGF0ZSIsImFsbG93TW9tZW50dW1Cb3VuY2UiLCJncmFiQ3Vyc29yIiwiZGlmZiIsInRvdWNoUmF0aW8iLCJjdXJyZW50VHJhbnNsYXRlIiwicmVzaXN0YW5jZVJhdGlvIiwicmVzaXN0YW5jZSIsImZvbGxvd0ZpbmdlciIsImZyZWVNb2RlIiwidmVsb2NpdGllcyIsInBvc2l0aW9uIiwidGltZSIsImxhc3RDbGlja1RpbWUiLCJmcmVlTW9kZU1vbWVudHVtIiwicG9wIiwidmVsb2NpdHkiLCJmcmVlTW9kZU1pbmltdW1WZWxvY2l0eSIsImZyZWVNb2RlTW9tZW50dW1WZWxvY2l0eVJhdGlvIiwiZnJlZU1vZGVNb21lbnR1bVJhdGlvIiwiZnJlZU1vZGVNb21lbnR1bUJvdW5jZVJhdGlvIiwiZnJlZU1vZGVNb21lbnR1bUJvdW5jZSIsImZyZWVNb2RlU3RpY2t5IiwibG9uZ1N3aXBlc01zIiwibG9uZ1N3aXBlcyIsImxvbmdTd2lwZXNSYXRpbyIsInNob3J0U3dpcGVzIiwibmF2aWdhdGlvbiIsIm5leHRFbCIsInByZXZFbCIsImJyZWFrcG9pbnRzIiwic2V0QnJlYWtwb2ludCIsImF1dG9wbGF5IiwicnVubmluZyIsInBhdXNlZCIsInJ1biIsInByZXZlbnRDbGlja3MiLCJwcmV2ZW50Q2xpY2tzUHJvcGFnYXRpb24iLCJzdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24iLCJpbml0IiwiZGlyZWN0aW9uIiwidXBkYXRlT25XaW5kb3dSZXNpemUiLCJ1bmlxdWVOYXZFbGVtZW50cyIsInByZWxvYWRJbWFnZXMiLCJ1cGRhdGVPbkltYWdlc1JlYWR5IiwicGFzc2l2ZUxpc3RlbmVycyIsImNvbnRhaW5lck1vZGlmaWVyQ2xhc3MiLCJ3cmFwcGVyQ2xhc3MiLCJzbGlkZSIsIm1hbmlwdWxhdGlvbiIsImF0dGFjaEV2ZW50cyIsInRvdWNoRXZlbnRzIiwib25Ub3VjaFN0YXJ0Iiwib25Ub3VjaE1vdmUiLCJvblRvdWNoRW5kIiwib25TY3JvbGwiLCJvbkNsaWNrIiwic3RhcnQiLCJtb3ZlIiwiZW5kIiwicGFzc2l2ZSIsImNhcHR1cmUiLCJjYW5jZWwiLCJkZXRhY2hFdmVudHMiLCJnZXRCcmVha3BvaW50IiwiY3VycmVudEJyZWFrcG9pbnQiLCJvcmlnaW5hbFBhcmFtcyIsImNoYW5nZURpcmVjdGlvbiIsInN1YnN0ciIsInZhbHVlIiwiaW5uZXJIZWlnaHQiLCJwb2ludCIsInNvcnQiLCJpbm5lcldpZHRoIiwiY2xhc3NlcyIsImFkZENsYXNzZXMiLCJjbGFzc05hbWVzIiwicnRsIiwicmVtb3ZlQ2xhc3NlcyIsImltYWdlcyIsImxvYWRJbWFnZSIsImNvbXBsZXRlIiwib25sb2FkIiwib25lcnJvciIsInNpemVzIiwic3Jjc2V0Iiwic3JjIiwiaW1hZ2VzTG9hZGVkIiwiaW1hZ2VzVG9Mb2FkIiwiY3VycmVudFNyYyIsInBhc3NlZFBhcmFtcyIsInN3aXBlciIsInNoYWRvd1Jvb3QiLCJkaXIiLCJ0b3VjaEV2ZW50c1RvdWNoIiwidG91Y2hFdmVudHNEZXNrdG9wIiwiY2xpY2tUaW1lb3V0IiwiX19wcm90b19fIiwiZXh0ZW5kZWREZWZhdWx0cyIsImRlZmF1bHRzIiwiZGVzdHJveSIsImV4dGVuZERlZmF1bHRzIiwiZGV2aWNlIiwic3VwcG9ydCIsImlzRWRnZSIsImlzU2FmYXJpIiwiaXNVaVdlYlZpZXciLCJ0ZXN0IiwiYnJvd3NlciIsInJlc2l6ZSIsInJlc2l6ZUhhbmRsZXIiLCJvcmllbnRhdGlvbkNoYW5nZUhhbmRsZXIiLCJmdW5jIiwiTXV0YXRpb25PYnNlcnZlciIsIldlYmtpdE11dGF0aW9uT2JzZXJ2ZXIiLCJhdHRhY2giLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJvYnNlcnZlIiwiYXR0cmlidXRlcyIsImNoaWxkTGlzdCIsImNoYXJhY3RlckRhdGEiLCJvYnNlcnZlcnMiLCJvYnNlcnZlUGFyZW50cyIsIm9ic2VydmVTbGlkZUNoaWxkcmVuIiwiZGlzY29ubmVjdCIsImFkZFNsaWRlc0JlZm9yZSIsImFkZFNsaWRlc0FmdGVyIiwiZnJvbSIsInRvIiwicmVuZGVyU2xpZGUiLCJsYXp5IiwibG9hZCIsInJlbmRlckV4dGVybmFsIiwiY2FjaGUiLCJiZWZvcmVJbml0IiwiaGFuZGxlIiwia2V5Q29kZSIsImNoYXJDb2RlIiwic2hpZnRLZXkiLCJhbHRLZXkiLCJjdHJsS2V5IiwibWV0YUtleSIsImtleWJvYXJkIiwib25seUluVmlld3BvcnQiLCJyZXR1cm5WYWx1ZSIsImVuYWJsZSIsImRpc2FibGUiLCJsYXN0U2Nyb2xsVGltZSIsImxhc3RFdmVudEJlZm9yZVNuYXAiLCJyZWNlbnRXaGVlbEV2ZW50cyIsImV2ZW50Iiwib253aGVlbCIsImltcGxlbWVudGF0aW9uIiwiaGFzRmVhdHVyZSIsIm5vcm1hbGl6ZSIsIndoZWVsRGVsdGEiLCJ3aGVlbERlbHRhWSIsIndoZWVsRGVsdGFYIiwiYXhpcyIsIkhPUklaT05UQUxfQVhJUyIsImRlbHRhWSIsImRlbHRhWCIsImRlbHRhTW9kZSIsInNwaW5YIiwic3BpblkiLCJwaXhlbFgiLCJwaXhlbFkiLCJoYW5kbGVNb3VzZUVudGVyIiwibW91c2VFbnRlcmVkIiwiaGFuZGxlTW91c2VMZWF2ZSIsIm1vdXNld2hlZWwiLCJldmVudHNUYXJnZWQiLCJyZWxlYXNlT25FZGdlcyIsImZvcmNlVG9BeGlzIiwiaW52ZXJ0IiwiZGVsdGEiLCJzaWduIiwic2Vuc2l0aXZpdHkiLCJ0aW1lb3V0Iiwic2hpZnQiLCJhdXRvcGxheURpc2FibGVPbkludGVyYWN0aW9uIiwic3RvcCIsInJhdyIsImFuaW1hdGVTbGlkZXIiLCJyZWxlYXNlU2Nyb2xsIiwiZ2V0VGltZSIsIiRuZXh0RWwiLCIkcHJldkVsIiwiZGlzYWJsZWRDbGFzcyIsImxvY2tDbGFzcyIsIm9uUHJldkNsaWNrIiwib25OZXh0Q2xpY2siLCJwYWdpbmF0aW9uIiwicGFnaW5hdGlvblR5cGUiLCJidWxsZXRzIiwiZHluYW1pY0J1bGxldHMiLCJidWxsZXRTaXplIiwiZHluYW1pY01haW5CdWxsZXRzIiwiZHluYW1pY0J1bGxldEluZGV4IiwiYnVsbGV0QWN0aXZlQ2xhc3MiLCJjdXJyZW50Q2xhc3MiLCJmb3JtYXRGcmFjdGlvbkN1cnJlbnQiLCJ0b3RhbENsYXNzIiwiZm9ybWF0RnJhY3Rpb25Ub3RhbCIsInByb2dyZXNzYmFyT3Bwb3NpdGUiLCJwcm9ncmVzc2JhckZpbGxDbGFzcyIsInJlbmRlckN1c3RvbSIsInJlbmRlciIsInJlbmRlckJ1bGxldCIsImJ1bGxldENsYXNzIiwiYnVsbGV0RWxlbWVudCIsInJlbmRlckZyYWN0aW9uIiwicmVuZGVyUHJvZ3Jlc3NiYXIiLCJjbGlja2FibGUiLCJjbGlja2FibGVDbGFzcyIsIm1vZGlmaWVyQ2xhc3MiLCJwcm9ncmVzc2Jhck9wcG9zaXRlQ2xhc3MiLCJoaWRkZW5DbGFzcyIsInNjcm9sbGJhciIsImRyYWdTaXplIiwidHJhY2tTaXplIiwiJGRyYWdFbCIsImhpZGUiLCJvcGFjaXR5IiwiZGlzcGxheSIsImRpdmlkZXIiLCJtb3ZlRGl2aWRlciIsImdldFBvaW50ZXJQb3NpdGlvbiIsImNsaWVudFgiLCJjbGllbnRZIiwic2V0RHJhZ1Bvc2l0aW9uIiwiZHJhZ1N0YXJ0UG9zIiwib25EcmFnU3RhcnQiLCJkcmFnVGltZW91dCIsIm9uRHJhZ01vdmUiLCJvbkRyYWdFbmQiLCJzbmFwT25SZWxlYXNlIiwiZW5hYmxlRHJhZ2dhYmxlIiwiZGlzYWJsZURyYWdnYWJsZSIsImRyYWdDbGFzcyIsImRyYWdFbCIsImRyYWdnYWJsZSIsIm5lIiwic2V0VHJhbnNmb3JtIiwicGFyYWxsYXgiLCJvZSIsImdldERpc3RhbmNlQmV0d2VlblRvdWNoZXMiLCJvbkdlc3R1cmVTdGFydCIsInpvb20iLCJnZXN0dXJlIiwiZmFrZUdlc3R1cmVUb3VjaGVkIiwiZmFrZUdlc3R1cmVNb3ZlZCIsInNjYWxlU3RhcnQiLCIkc2xpZGVFbCIsIiRpbWFnZUVsIiwiJGltYWdlV3JhcEVsIiwiY29udGFpbmVyQ2xhc3MiLCJtYXhSYXRpbyIsImlzU2NhbGluZyIsIm9uR2VzdHVyZUNoYW5nZSIsInNjYWxlTW92ZSIsInNjYWxlIiwiY3VycmVudFNjYWxlIiwibWluUmF0aW8iLCJvbkdlc3R1cmVFbmQiLCJpbWFnZSIsInRvdWNoZXNTdGFydCIsInNsaWRlV2lkdGgiLCJzbGlkZUhlaWdodCIsIm1pblgiLCJtYXhYIiwibWluWSIsIm1heFkiLCJ0b3VjaGVzQ3VycmVudCIsInByZXZQb3NpdGlvblgiLCJwcmV2UG9zaXRpb25ZIiwicHJldlRpbWUiLCJvblRyYW5zaXRpb25FbmQiLCJvdXQiLCJpbiIsInpvb21lZFNsaWRlQ2xhc3MiLCJsZSIsImxvYWRJblNsaWRlIiwiZWxlbWVudENsYXNzIiwibG9hZGVkQ2xhc3MiLCJsb2FkaW5nQ2xhc3MiLCJwcmVsb2FkZXJDbGFzcyIsImluaXRpYWxJbWFnZUxvYWRlZCIsImxvYWRQcmV2TmV4dCIsImxvYWRQcmV2TmV4dEFtb3VudCIsImRlIiwiTGluZWFyU3BsaW5lIiwibGFzdEluZGV4IiwiaW50ZXJwb2xhdGUiLCJnZXRJbnRlcnBvbGF0ZUZ1bmN0aW9uIiwiY29udHJvbGxlciIsInNwbGluZSIsImNvbnRyb2wiLCJieSIsImludmVyc2UiLCJoZSIsIm1ha2VFbEZvY3VzYWJsZSIsImFkZEVsUm9sZSIsImFkZEVsTGFiZWwiLCJkaXNhYmxlRWwiLCJlbmFibGVFbCIsIm9uRW50ZXJLZXkiLCJhMTF5Iiwibm90aWZ5IiwibGFzdFNsaWRlTWVzc2FnZSIsIm5leHRTbGlkZU1lc3NhZ2UiLCJmaXJzdFNsaWRlTWVzc2FnZSIsInByZXZTbGlkZU1lc3NhZ2UiLCJjbGljayIsImxpdmVSZWdpb24iLCJ1cGRhdGVOYXZpZ2F0aW9uIiwidXBkYXRlUGFnaW5hdGlvbiIsInBhZ2luYXRpb25CdWxsZXRNZXNzYWdlIiwicGUiLCJwdXNoU3RhdGUiLCJoYXNoTmF2aWdhdGlvbiIsInBhdGhzIiwiZ2V0UGF0aFZhbHVlcyIsImtleSIsInNjcm9sbFRvU2xpZGUiLCJyZXBsYWNlU3RhdGUiLCJzZXRIaXN0b3J5UG9wU3RhdGUiLCJwYXRobmFtZSIsInNldEhpc3RvcnkiLCJzbHVnaWZ5IiwiaW5jbHVkZXMiLCJzdGF0ZSIsImNlIiwib25IYXNoQ2FuZ2UiLCJzZXRIYXNoIiwid2F0Y2hTdGF0ZSIsInVlIiwiZGVsYXkiLCJyZXZlcnNlRGlyZWN0aW9uIiwic3RvcE9uTGFzdFNsaWRlIiwicGF1c2UiLCJ3YWl0Rm9yVHJhbnNpdGlvbiIsInZlIiwiZmFkZUVmZmVjdCIsImNyb3NzRmFkZSIsImZlIiwiY3ViZUVmZmVjdCIsInNoYWRvdyIsInNsaWRlU2hhZG93cyIsInNoYWRvd09mZnNldCIsInNoYWRvd1NjYWxlIiwic2luIiwiY29zIiwibWUiLCJmbGlwRWZmZWN0IiwibGltaXRSb3RhdGlvbiIsInpJbmRleCIsInJvdW5kIiwiZ2UiLCJjb3ZlcmZsb3dFZmZlY3QiLCJyb3RhdGUiLCJkZXB0aCIsIm1vZGlmaWVyIiwic3RyZXRjaCIsInByZWZpeGVkUG9pbnRlckV2ZW50cyIsInBlcnNwZWN0aXZlT3JpZ2luIiwiYmUiLCJ0aHVtYnMiLCJzd2lwZXJDcmVhdGVkIiwidGh1bWJzQ29udGFpbmVyQ2xhc3MiLCJvblRodW1iQ2xpY2siLCJzbGlkZVRodW1iQWN0aXZlQ2xhc3MiLCJhdXRvU2Nyb2xsT2Zmc2V0IiwibXVsdGlwbGVBY3RpdmVUaHVtYnMiLCJ3ZSIsImhpZGVPbkNsaWNrIiwidG9FZGdlIiwiZnJvbUVkZ2UiLCJhY3RpdmVJbmRleENoYW5nZSIsInNuYXBJbmRleENoYW5nZSIsInNsaWRlc0xlbmd0aENoYW5nZSIsInNuYXBHcmlkTGVuZ3RoQ2hhbmdlIiwib2JzZXJ2ZXJVcGRhdGUiLCJ0b3VjaFN0YXJ0IiwidG91Y2hFbmQiLCJkb3VibGVUYXAiLCJzbGlkZUNoYW5nZSIsImxvYWRPblRyYW5zaXRpb25TdGFydCIsInNjcm9sbCIsInNjcm9sbGJhckRyYWdNb3ZlIiwibm90aWZpY2F0aW9uQ2xhc3MiLCJwYWdpbmF0aW9uVXBkYXRlIiwiZGlzYWJsZU9uSW50ZXJhY3Rpb24iLCJvblZpc2liaWxpdHlDaGFuZ2UiLCJ2aXNpYmlsaXR5U3RhdGUiLCJiZWZvcmVUcmFuc2l0aW9uU3RhcnQiLCJzbGlkZXJGaXJzdE1vdmUiLCJiZWZvcmVEZXN0cm95Il0sInNvdXJjZXMiOlsic3dpcGVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogU3dpcGVyIDUuMy44XG4gKiBNb3N0IG1vZGVybiBtb2JpbGUgdG91Y2ggc2xpZGVyIGFuZCBmcmFtZXdvcmsgd2l0aCBoYXJkd2FyZSBhY2NlbGVyYXRlZCB0cmFuc2l0aW9uc1xuICogaHR0cDovL3N3aXBlcmpzLmNvbVxuICpcbiAqIENvcHlyaWdodCAyMDE0LTIwMjAgVmxhZGltaXIgS2hhcmxhbXBpZGlcbiAqXG4gKiBSZWxlYXNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2VcbiAqXG4gKiBSZWxlYXNlZCBvbjogQXByaWwgMjQsIDIwMjBcbiAqL1xuXG4hZnVuY3Rpb24oZSx0KXtcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cyYmXCJ1bmRlZmluZWRcIiE9dHlwZW9mIG1vZHVsZT9tb2R1bGUuZXhwb3J0cz10KCk6XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZSh0KTooZT1lfHxzZWxmKS5Td2lwZXI9dCgpfSh0aGlzLChmdW5jdGlvbigpe1widXNlIHN0cmljdFwiO3ZhciBlPVwidW5kZWZpbmVkXCI9PXR5cGVvZiBkb2N1bWVudD97Ym9keTp7fSxhZGRFdmVudExpc3RlbmVyOmZ1bmN0aW9uKCl7fSxyZW1vdmVFdmVudExpc3RlbmVyOmZ1bmN0aW9uKCl7fSxhY3RpdmVFbGVtZW50OntibHVyOmZ1bmN0aW9uKCl7fSxub2RlTmFtZTpcIlwifSxxdWVyeVNlbGVjdG9yOmZ1bmN0aW9uKCl7cmV0dXJuIG51bGx9LHF1ZXJ5U2VsZWN0b3JBbGw6ZnVuY3Rpb24oKXtyZXR1cm5bXX0sZ2V0RWxlbWVudEJ5SWQ6ZnVuY3Rpb24oKXtyZXR1cm4gbnVsbH0sY3JlYXRlRXZlbnQ6ZnVuY3Rpb24oKXtyZXR1cm57aW5pdEV2ZW50OmZ1bmN0aW9uKCl7fX19LGNyZWF0ZUVsZW1lbnQ6ZnVuY3Rpb24oKXtyZXR1cm57Y2hpbGRyZW46W10sY2hpbGROb2RlczpbXSxzdHlsZTp7fSxzZXRBdHRyaWJ1dGU6ZnVuY3Rpb24oKXt9LGdldEVsZW1lbnRzQnlUYWdOYW1lOmZ1bmN0aW9uKCl7cmV0dXJuW119fX0sbG9jYXRpb246e2hhc2g6XCJcIn19OmRvY3VtZW50LHQ9XCJ1bmRlZmluZWRcIj09dHlwZW9mIHdpbmRvdz97ZG9jdW1lbnQ6ZSxuYXZpZ2F0b3I6e3VzZXJBZ2VudDpcIlwifSxsb2NhdGlvbjp7fSxoaXN0b3J5Ont9LEN1c3RvbUV2ZW50OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXN9LGFkZEV2ZW50TGlzdGVuZXI6ZnVuY3Rpb24oKXt9LHJlbW92ZUV2ZW50TGlzdGVuZXI6ZnVuY3Rpb24oKXt9LGdldENvbXB1dGVkU3R5bGU6ZnVuY3Rpb24oKXtyZXR1cm57Z2V0UHJvcGVydHlWYWx1ZTpmdW5jdGlvbigpe3JldHVyblwiXCJ9fX0sSW1hZ2U6ZnVuY3Rpb24oKXt9LERhdGU6ZnVuY3Rpb24oKXt9LHNjcmVlbjp7fSxzZXRUaW1lb3V0OmZ1bmN0aW9uKCl7fSxjbGVhclRpbWVvdXQ6ZnVuY3Rpb24oKXt9fTp3aW5kb3csaT1mdW5jdGlvbihlKXtmb3IodmFyIHQ9MDt0PGUubGVuZ3RoO3QrPTEpdGhpc1t0XT1lW3RdO3JldHVybiB0aGlzLmxlbmd0aD1lLmxlbmd0aCx0aGlzfTtmdW5jdGlvbiBzKHMsYSl7dmFyIHI9W10sbj0wO2lmKHMmJiFhJiZzIGluc3RhbmNlb2YgaSlyZXR1cm4gcztpZihzKWlmKFwic3RyaW5nXCI9PXR5cGVvZiBzKXt2YXIgbyxsLGQ9cy50cmltKCk7aWYoZC5pbmRleE9mKFwiPFwiKT49MCYmZC5pbmRleE9mKFwiPlwiKT49MCl7dmFyIGg9XCJkaXZcIjtmb3IoMD09PWQuaW5kZXhPZihcIjxsaVwiKSYmKGg9XCJ1bFwiKSwwPT09ZC5pbmRleE9mKFwiPHRyXCIpJiYoaD1cInRib2R5XCIpLDAhPT1kLmluZGV4T2YoXCI8dGRcIikmJjAhPT1kLmluZGV4T2YoXCI8dGhcIil8fChoPVwidHJcIiksMD09PWQuaW5kZXhPZihcIjx0Ym9keVwiKSYmKGg9XCJ0YWJsZVwiKSwwPT09ZC5pbmRleE9mKFwiPG9wdGlvblwiKSYmKGg9XCJzZWxlY3RcIiksKGw9ZS5jcmVhdGVFbGVtZW50KGgpKS5pbm5lckhUTUw9ZCxuPTA7bjxsLmNoaWxkTm9kZXMubGVuZ3RoO24rPTEpci5wdXNoKGwuY2hpbGROb2Rlc1tuXSl9ZWxzZSBmb3Iobz1hfHxcIiNcIiE9PXNbMF18fHMubWF0Y2goL1sgLjw+On5dLyk/KGF8fGUpLnF1ZXJ5U2VsZWN0b3JBbGwocy50cmltKCkpOltlLmdldEVsZW1lbnRCeUlkKHMudHJpbSgpLnNwbGl0KFwiI1wiKVsxXSldLG49MDtuPG8ubGVuZ3RoO24rPTEpb1tuXSYmci5wdXNoKG9bbl0pfWVsc2UgaWYocy5ub2RlVHlwZXx8cz09PXR8fHM9PT1lKXIucHVzaChzKTtlbHNlIGlmKHMubGVuZ3RoPjAmJnNbMF0ubm9kZVR5cGUpZm9yKG49MDtuPHMubGVuZ3RoO24rPTEpci5wdXNoKHNbbl0pO3JldHVybiBuZXcgaShyKX1mdW5jdGlvbiBhKGUpe2Zvcih2YXIgdD1bXSxpPTA7aTxlLmxlbmd0aDtpKz0xKS0xPT09dC5pbmRleE9mKGVbaV0pJiZ0LnB1c2goZVtpXSk7cmV0dXJuIHR9cy5mbj1pLnByb3RvdHlwZSxzLkNsYXNzPWkscy5Eb203PWk7dmFyIHI9e2FkZENsYXNzOmZ1bmN0aW9uKGUpe2lmKHZvaWQgMD09PWUpcmV0dXJuIHRoaXM7Zm9yKHZhciB0PWUuc3BsaXQoXCIgXCIpLGk9MDtpPHQubGVuZ3RoO2krPTEpZm9yKHZhciBzPTA7czx0aGlzLmxlbmd0aDtzKz0xKXZvaWQgMCE9PXRoaXNbc10mJnZvaWQgMCE9PXRoaXNbc10uY2xhc3NMaXN0JiZ0aGlzW3NdLmNsYXNzTGlzdC5hZGQodFtpXSk7cmV0dXJuIHRoaXN9LHJlbW92ZUNsYXNzOmZ1bmN0aW9uKGUpe2Zvcih2YXIgdD1lLnNwbGl0KFwiIFwiKSxpPTA7aTx0Lmxlbmd0aDtpKz0xKWZvcih2YXIgcz0wO3M8dGhpcy5sZW5ndGg7cys9MSl2b2lkIDAhPT10aGlzW3NdJiZ2b2lkIDAhPT10aGlzW3NdLmNsYXNzTGlzdCYmdGhpc1tzXS5jbGFzc0xpc3QucmVtb3ZlKHRbaV0pO3JldHVybiB0aGlzfSxoYXNDbGFzczpmdW5jdGlvbihlKXtyZXR1cm4hIXRoaXNbMF0mJnRoaXNbMF0uY2xhc3NMaXN0LmNvbnRhaW5zKGUpfSx0b2dnbGVDbGFzczpmdW5jdGlvbihlKXtmb3IodmFyIHQ9ZS5zcGxpdChcIiBcIiksaT0wO2k8dC5sZW5ndGg7aSs9MSlmb3IodmFyIHM9MDtzPHRoaXMubGVuZ3RoO3MrPTEpdm9pZCAwIT09dGhpc1tzXSYmdm9pZCAwIT09dGhpc1tzXS5jbGFzc0xpc3QmJnRoaXNbc10uY2xhc3NMaXN0LnRvZ2dsZSh0W2ldKTtyZXR1cm4gdGhpc30sYXR0cjpmdW5jdGlvbihlLHQpe3ZhciBpPWFyZ3VtZW50cztpZigxPT09YXJndW1lbnRzLmxlbmd0aCYmXCJzdHJpbmdcIj09dHlwZW9mIGUpcmV0dXJuIHRoaXNbMF0/dGhpc1swXS5nZXRBdHRyaWJ1dGUoZSk6dm9pZCAwO2Zvcih2YXIgcz0wO3M8dGhpcy5sZW5ndGg7cys9MSlpZigyPT09aS5sZW5ndGgpdGhpc1tzXS5zZXRBdHRyaWJ1dGUoZSx0KTtlbHNlIGZvcih2YXIgYSBpbiBlKXRoaXNbc11bYV09ZVthXSx0aGlzW3NdLnNldEF0dHJpYnV0ZShhLGVbYV0pO3JldHVybiB0aGlzfSxyZW1vdmVBdHRyOmZ1bmN0aW9uKGUpe2Zvcih2YXIgdD0wO3Q8dGhpcy5sZW5ndGg7dCs9MSl0aGlzW3RdLnJlbW92ZUF0dHJpYnV0ZShlKTtyZXR1cm4gdGhpc30sZGF0YTpmdW5jdGlvbihlLHQpe3ZhciBpO2lmKHZvaWQgMCE9PXQpe2Zvcih2YXIgcz0wO3M8dGhpcy5sZW5ndGg7cys9MSkoaT10aGlzW3NdKS5kb203RWxlbWVudERhdGFTdG9yYWdlfHwoaS5kb203RWxlbWVudERhdGFTdG9yYWdlPXt9KSxpLmRvbTdFbGVtZW50RGF0YVN0b3JhZ2VbZV09dDtyZXR1cm4gdGhpc31pZihpPXRoaXNbMF0pe2lmKGkuZG9tN0VsZW1lbnREYXRhU3RvcmFnZSYmZSBpbiBpLmRvbTdFbGVtZW50RGF0YVN0b3JhZ2UpcmV0dXJuIGkuZG9tN0VsZW1lbnREYXRhU3RvcmFnZVtlXTt2YXIgYT1pLmdldEF0dHJpYnV0ZShcImRhdGEtXCIrZSk7cmV0dXJuIGF8fHZvaWQgMH19LHRyYW5zZm9ybTpmdW5jdGlvbihlKXtmb3IodmFyIHQ9MDt0PHRoaXMubGVuZ3RoO3QrPTEpe3ZhciBpPXRoaXNbdF0uc3R5bGU7aS53ZWJraXRUcmFuc2Zvcm09ZSxpLnRyYW5zZm9ybT1lfXJldHVybiB0aGlzfSx0cmFuc2l0aW9uOmZ1bmN0aW9uKGUpe1wic3RyaW5nXCIhPXR5cGVvZiBlJiYoZSs9XCJtc1wiKTtmb3IodmFyIHQ9MDt0PHRoaXMubGVuZ3RoO3QrPTEpe3ZhciBpPXRoaXNbdF0uc3R5bGU7aS53ZWJraXRUcmFuc2l0aW9uRHVyYXRpb249ZSxpLnRyYW5zaXRpb25EdXJhdGlvbj1lfXJldHVybiB0aGlzfSxvbjpmdW5jdGlvbigpe2Zvcih2YXIgZSx0PVtdLGk9YXJndW1lbnRzLmxlbmd0aDtpLS07KXRbaV09YXJndW1lbnRzW2ldO3ZhciBhPXRbMF0scj10WzFdLG49dFsyXSxvPXRbM107ZnVuY3Rpb24gbChlKXt2YXIgdD1lLnRhcmdldDtpZih0KXt2YXIgaT1lLnRhcmdldC5kb203RXZlbnREYXRhfHxbXTtpZihpLmluZGV4T2YoZSk8MCYmaS51bnNoaWZ0KGUpLHModCkuaXMocikpbi5hcHBseSh0LGkpO2Vsc2UgZm9yKHZhciBhPXModCkucGFyZW50cygpLG89MDtvPGEubGVuZ3RoO28rPTEpcyhhW29dKS5pcyhyKSYmbi5hcHBseShhW29dLGkpfX1mdW5jdGlvbiBkKGUpe3ZhciB0PWUmJmUudGFyZ2V0JiZlLnRhcmdldC5kb203RXZlbnREYXRhfHxbXTt0LmluZGV4T2YoZSk8MCYmdC51bnNoaWZ0KGUpLG4uYXBwbHkodGhpcyx0KX1cImZ1bmN0aW9uXCI9PXR5cGVvZiB0WzFdJiYoYT0oZT10KVswXSxuPWVbMV0sbz1lWzJdLHI9dm9pZCAwKSxvfHwobz0hMSk7Zm9yKHZhciBoLHA9YS5zcGxpdChcIiBcIiksYz0wO2M8dGhpcy5sZW5ndGg7Yys9MSl7dmFyIHU9dGhpc1tjXTtpZihyKWZvcihoPTA7aDxwLmxlbmd0aDtoKz0xKXt2YXIgdj1wW2hdO3UuZG9tN0xpdmVMaXN0ZW5lcnN8fCh1LmRvbTdMaXZlTGlzdGVuZXJzPXt9KSx1LmRvbTdMaXZlTGlzdGVuZXJzW3ZdfHwodS5kb203TGl2ZUxpc3RlbmVyc1t2XT1bXSksdS5kb203TGl2ZUxpc3RlbmVyc1t2XS5wdXNoKHtsaXN0ZW5lcjpuLHByb3h5TGlzdGVuZXI6bH0pLHUuYWRkRXZlbnRMaXN0ZW5lcih2LGwsbyl9ZWxzZSBmb3IoaD0wO2g8cC5sZW5ndGg7aCs9MSl7dmFyIGY9cFtoXTt1LmRvbTdMaXN0ZW5lcnN8fCh1LmRvbTdMaXN0ZW5lcnM9e30pLHUuZG9tN0xpc3RlbmVyc1tmXXx8KHUuZG9tN0xpc3RlbmVyc1tmXT1bXSksdS5kb203TGlzdGVuZXJzW2ZdLnB1c2goe2xpc3RlbmVyOm4scHJveHlMaXN0ZW5lcjpkfSksdS5hZGRFdmVudExpc3RlbmVyKGYsZCxvKX19cmV0dXJuIHRoaXN9LG9mZjpmdW5jdGlvbigpe2Zvcih2YXIgZSx0PVtdLGk9YXJndW1lbnRzLmxlbmd0aDtpLS07KXRbaV09YXJndW1lbnRzW2ldO3ZhciBzPXRbMF0sYT10WzFdLHI9dFsyXSxuPXRbM107XCJmdW5jdGlvblwiPT10eXBlb2YgdFsxXSYmKHM9KGU9dClbMF0scj1lWzFdLG49ZVsyXSxhPXZvaWQgMCksbnx8KG49ITEpO2Zvcih2YXIgbz1zLnNwbGl0KFwiIFwiKSxsPTA7bDxvLmxlbmd0aDtsKz0xKWZvcih2YXIgZD1vW2xdLGg9MDtoPHRoaXMubGVuZ3RoO2grPTEpe3ZhciBwPXRoaXNbaF0sYz12b2lkIDA7aWYoIWEmJnAuZG9tN0xpc3RlbmVycz9jPXAuZG9tN0xpc3RlbmVyc1tkXTphJiZwLmRvbTdMaXZlTGlzdGVuZXJzJiYoYz1wLmRvbTdMaXZlTGlzdGVuZXJzW2RdKSxjJiZjLmxlbmd0aClmb3IodmFyIHU9Yy5sZW5ndGgtMTt1Pj0wO3UtPTEpe3ZhciB2PWNbdV07ciYmdi5saXN0ZW5lcj09PXJ8fHImJnYubGlzdGVuZXImJnYubGlzdGVuZXIuZG9tN3Byb3h5JiZ2Lmxpc3RlbmVyLmRvbTdwcm94eT09PXI/KHAucmVtb3ZlRXZlbnRMaXN0ZW5lcihkLHYucHJveHlMaXN0ZW5lcixuKSxjLnNwbGljZSh1LDEpKTpyfHwocC5yZW1vdmVFdmVudExpc3RlbmVyKGQsdi5wcm94eUxpc3RlbmVyLG4pLGMuc3BsaWNlKHUsMSkpfX1yZXR1cm4gdGhpc30sdHJpZ2dlcjpmdW5jdGlvbigpe2Zvcih2YXIgaT1bXSxzPWFyZ3VtZW50cy5sZW5ndGg7cy0tOylpW3NdPWFyZ3VtZW50c1tzXTtmb3IodmFyIGE9aVswXS5zcGxpdChcIiBcIikscj1pWzFdLG49MDtuPGEubGVuZ3RoO24rPTEpZm9yKHZhciBvPWFbbl0sbD0wO2w8dGhpcy5sZW5ndGg7bCs9MSl7dmFyIGQ9dGhpc1tsXSxoPXZvaWQgMDt0cnl7aD1uZXcgdC5DdXN0b21FdmVudChvLHtkZXRhaWw6cixidWJibGVzOiEwLGNhbmNlbGFibGU6ITB9KX1jYXRjaCh0KXsoaD1lLmNyZWF0ZUV2ZW50KFwiRXZlbnRcIikpLmluaXRFdmVudChvLCEwLCEwKSxoLmRldGFpbD1yfWQuZG9tN0V2ZW50RGF0YT1pLmZpbHRlcigoZnVuY3Rpb24oZSx0KXtyZXR1cm4gdD4wfSkpLGQuZGlzcGF0Y2hFdmVudChoKSxkLmRvbTdFdmVudERhdGE9W10sZGVsZXRlIGQuZG9tN0V2ZW50RGF0YX1yZXR1cm4gdGhpc30sdHJhbnNpdGlvbkVuZDpmdW5jdGlvbihlKXt2YXIgdCxpPVtcIndlYmtpdFRyYW5zaXRpb25FbmRcIixcInRyYW5zaXRpb25lbmRcIl0scz10aGlzO2Z1bmN0aW9uIGEocil7aWYoci50YXJnZXQ9PT10aGlzKWZvcihlLmNhbGwodGhpcyxyKSx0PTA7dDxpLmxlbmd0aDt0Kz0xKXMub2ZmKGlbdF0sYSl9aWYoZSlmb3IodD0wO3Q8aS5sZW5ndGg7dCs9MSlzLm9uKGlbdF0sYSk7cmV0dXJuIHRoaXN9LG91dGVyV2lkdGg6ZnVuY3Rpb24oZSl7aWYodGhpcy5sZW5ndGg+MCl7aWYoZSl7dmFyIHQ9dGhpcy5zdHlsZXMoKTtyZXR1cm4gdGhpc1swXS5vZmZzZXRXaWR0aCtwYXJzZUZsb2F0KHQuZ2V0UHJvcGVydHlWYWx1ZShcIm1hcmdpbi1yaWdodFwiKSkrcGFyc2VGbG9hdCh0LmdldFByb3BlcnR5VmFsdWUoXCJtYXJnaW4tbGVmdFwiKSl9cmV0dXJuIHRoaXNbMF0ub2Zmc2V0V2lkdGh9cmV0dXJuIG51bGx9LG91dGVySGVpZ2h0OmZ1bmN0aW9uKGUpe2lmKHRoaXMubGVuZ3RoPjApe2lmKGUpe3ZhciB0PXRoaXMuc3R5bGVzKCk7cmV0dXJuIHRoaXNbMF0ub2Zmc2V0SGVpZ2h0K3BhcnNlRmxvYXQodC5nZXRQcm9wZXJ0eVZhbHVlKFwibWFyZ2luLXRvcFwiKSkrcGFyc2VGbG9hdCh0LmdldFByb3BlcnR5VmFsdWUoXCJtYXJnaW4tYm90dG9tXCIpKX1yZXR1cm4gdGhpc1swXS5vZmZzZXRIZWlnaHR9cmV0dXJuIG51bGx9LG9mZnNldDpmdW5jdGlvbigpe2lmKHRoaXMubGVuZ3RoPjApe3ZhciBpPXRoaXNbMF0scz1pLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLGE9ZS5ib2R5LHI9aS5jbGllbnRUb3B8fGEuY2xpZW50VG9wfHwwLG49aS5jbGllbnRMZWZ0fHxhLmNsaWVudExlZnR8fDAsbz1pPT09dD90LnNjcm9sbFk6aS5zY3JvbGxUb3AsbD1pPT09dD90LnNjcm9sbFg6aS5zY3JvbGxMZWZ0O3JldHVybnt0b3A6cy50b3Arby1yLGxlZnQ6cy5sZWZ0K2wtbn19cmV0dXJuIG51bGx9LGNzczpmdW5jdGlvbihlLGkpe3ZhciBzO2lmKDE9PT1hcmd1bWVudHMubGVuZ3RoKXtpZihcInN0cmluZ1wiIT10eXBlb2YgZSl7Zm9yKHM9MDtzPHRoaXMubGVuZ3RoO3MrPTEpZm9yKHZhciBhIGluIGUpdGhpc1tzXS5zdHlsZVthXT1lW2FdO3JldHVybiB0aGlzfWlmKHRoaXNbMF0pcmV0dXJuIHQuZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzWzBdLG51bGwpLmdldFByb3BlcnR5VmFsdWUoZSl9aWYoMj09PWFyZ3VtZW50cy5sZW5ndGgmJlwic3RyaW5nXCI9PXR5cGVvZiBlKXtmb3Iocz0wO3M8dGhpcy5sZW5ndGg7cys9MSl0aGlzW3NdLnN0eWxlW2VdPWk7cmV0dXJuIHRoaXN9cmV0dXJuIHRoaXN9LGVhY2g6ZnVuY3Rpb24oZSl7aWYoIWUpcmV0dXJuIHRoaXM7Zm9yKHZhciB0PTA7dDx0aGlzLmxlbmd0aDt0Kz0xKWlmKCExPT09ZS5jYWxsKHRoaXNbdF0sdCx0aGlzW3RdKSlyZXR1cm4gdGhpcztyZXR1cm4gdGhpc30saHRtbDpmdW5jdGlvbihlKXtpZih2b2lkIDA9PT1lKXJldHVybiB0aGlzWzBdP3RoaXNbMF0uaW5uZXJIVE1MOnZvaWQgMDtmb3IodmFyIHQ9MDt0PHRoaXMubGVuZ3RoO3QrPTEpdGhpc1t0XS5pbm5lckhUTUw9ZTtyZXR1cm4gdGhpc30sdGV4dDpmdW5jdGlvbihlKXtpZih2b2lkIDA9PT1lKXJldHVybiB0aGlzWzBdP3RoaXNbMF0udGV4dENvbnRlbnQudHJpbSgpOm51bGw7Zm9yKHZhciB0PTA7dDx0aGlzLmxlbmd0aDt0Kz0xKXRoaXNbdF0udGV4dENvbnRlbnQ9ZTtyZXR1cm4gdGhpc30saXM6ZnVuY3Rpb24oYSl7dmFyIHIsbixvPXRoaXNbMF07aWYoIW98fHZvaWQgMD09PWEpcmV0dXJuITE7aWYoXCJzdHJpbmdcIj09dHlwZW9mIGEpe2lmKG8ubWF0Y2hlcylyZXR1cm4gby5tYXRjaGVzKGEpO2lmKG8ud2Via2l0TWF0Y2hlc1NlbGVjdG9yKXJldHVybiBvLndlYmtpdE1hdGNoZXNTZWxlY3RvcihhKTtpZihvLm1zTWF0Y2hlc1NlbGVjdG9yKXJldHVybiBvLm1zTWF0Y2hlc1NlbGVjdG9yKGEpO2ZvcihyPXMoYSksbj0wO248ci5sZW5ndGg7bis9MSlpZihyW25dPT09bylyZXR1cm4hMDtyZXR1cm4hMX1pZihhPT09ZSlyZXR1cm4gbz09PWU7aWYoYT09PXQpcmV0dXJuIG89PT10O2lmKGEubm9kZVR5cGV8fGEgaW5zdGFuY2VvZiBpKXtmb3Iocj1hLm5vZGVUeXBlP1thXTphLG49MDtuPHIubGVuZ3RoO24rPTEpaWYocltuXT09PW8pcmV0dXJuITA7cmV0dXJuITF9cmV0dXJuITF9LGluZGV4OmZ1bmN0aW9uKCl7dmFyIGUsdD10aGlzWzBdO2lmKHQpe2ZvcihlPTA7bnVsbCE9PSh0PXQucHJldmlvdXNTaWJsaW5nKTspMT09PXQubm9kZVR5cGUmJihlKz0xKTtyZXR1cm4gZX19LGVxOmZ1bmN0aW9uKGUpe2lmKHZvaWQgMD09PWUpcmV0dXJuIHRoaXM7dmFyIHQscz10aGlzLmxlbmd0aDtyZXR1cm4gbmV3IGkoZT5zLTE/W106ZTwwPyh0PXMrZSk8MD9bXTpbdGhpc1t0XV06W3RoaXNbZV1dKX0sYXBwZW5kOmZ1bmN0aW9uKCl7Zm9yKHZhciB0LHM9W10sYT1hcmd1bWVudHMubGVuZ3RoO2EtLTspc1thXT1hcmd1bWVudHNbYV07Zm9yKHZhciByPTA7cjxzLmxlbmd0aDtyKz0xKXt0PXNbcl07Zm9yKHZhciBuPTA7bjx0aGlzLmxlbmd0aDtuKz0xKWlmKFwic3RyaW5nXCI9PXR5cGVvZiB0KXt2YXIgbz1lLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7Zm9yKG8uaW5uZXJIVE1MPXQ7by5maXJzdENoaWxkOyl0aGlzW25dLmFwcGVuZENoaWxkKG8uZmlyc3RDaGlsZCl9ZWxzZSBpZih0IGluc3RhbmNlb2YgaSlmb3IodmFyIGw9MDtsPHQubGVuZ3RoO2wrPTEpdGhpc1tuXS5hcHBlbmRDaGlsZCh0W2xdKTtlbHNlIHRoaXNbbl0uYXBwZW5kQ2hpbGQodCl9cmV0dXJuIHRoaXN9LHByZXBlbmQ6ZnVuY3Rpb24odCl7dmFyIHMsYTtmb3Iocz0wO3M8dGhpcy5sZW5ndGg7cys9MSlpZihcInN0cmluZ1wiPT10eXBlb2YgdCl7dmFyIHI9ZS5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO2ZvcihyLmlubmVySFRNTD10LGE9ci5jaGlsZE5vZGVzLmxlbmd0aC0xO2E+PTA7YS09MSl0aGlzW3NdLmluc2VydEJlZm9yZShyLmNoaWxkTm9kZXNbYV0sdGhpc1tzXS5jaGlsZE5vZGVzWzBdKX1lbHNlIGlmKHQgaW5zdGFuY2VvZiBpKWZvcihhPTA7YTx0Lmxlbmd0aDthKz0xKXRoaXNbc10uaW5zZXJ0QmVmb3JlKHRbYV0sdGhpc1tzXS5jaGlsZE5vZGVzWzBdKTtlbHNlIHRoaXNbc10uaW5zZXJ0QmVmb3JlKHQsdGhpc1tzXS5jaGlsZE5vZGVzWzBdKTtyZXR1cm4gdGhpc30sbmV4dDpmdW5jdGlvbihlKXtyZXR1cm4gdGhpcy5sZW5ndGg+MD9lP3RoaXNbMF0ubmV4dEVsZW1lbnRTaWJsaW5nJiZzKHRoaXNbMF0ubmV4dEVsZW1lbnRTaWJsaW5nKS5pcyhlKT9uZXcgaShbdGhpc1swXS5uZXh0RWxlbWVudFNpYmxpbmddKTpuZXcgaShbXSk6dGhpc1swXS5uZXh0RWxlbWVudFNpYmxpbmc/bmV3IGkoW3RoaXNbMF0ubmV4dEVsZW1lbnRTaWJsaW5nXSk6bmV3IGkoW10pOm5ldyBpKFtdKX0sbmV4dEFsbDpmdW5jdGlvbihlKXt2YXIgdD1bXSxhPXRoaXNbMF07aWYoIWEpcmV0dXJuIG5ldyBpKFtdKTtmb3IoO2EubmV4dEVsZW1lbnRTaWJsaW5nOyl7dmFyIHI9YS5uZXh0RWxlbWVudFNpYmxpbmc7ZT9zKHIpLmlzKGUpJiZ0LnB1c2gocik6dC5wdXNoKHIpLGE9cn1yZXR1cm4gbmV3IGkodCl9LHByZXY6ZnVuY3Rpb24oZSl7aWYodGhpcy5sZW5ndGg+MCl7dmFyIHQ9dGhpc1swXTtyZXR1cm4gZT90LnByZXZpb3VzRWxlbWVudFNpYmxpbmcmJnModC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nKS5pcyhlKT9uZXcgaShbdC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nXSk6bmV3IGkoW10pOnQucHJldmlvdXNFbGVtZW50U2libGluZz9uZXcgaShbdC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nXSk6bmV3IGkoW10pfXJldHVybiBuZXcgaShbXSl9LHByZXZBbGw6ZnVuY3Rpb24oZSl7dmFyIHQ9W10sYT10aGlzWzBdO2lmKCFhKXJldHVybiBuZXcgaShbXSk7Zm9yKDthLnByZXZpb3VzRWxlbWVudFNpYmxpbmc7KXt2YXIgcj1hLnByZXZpb3VzRWxlbWVudFNpYmxpbmc7ZT9zKHIpLmlzKGUpJiZ0LnB1c2gocik6dC5wdXNoKHIpLGE9cn1yZXR1cm4gbmV3IGkodCl9LHBhcmVudDpmdW5jdGlvbihlKXtmb3IodmFyIHQ9W10saT0wO2k8dGhpcy5sZW5ndGg7aSs9MSludWxsIT09dGhpc1tpXS5wYXJlbnROb2RlJiYoZT9zKHRoaXNbaV0ucGFyZW50Tm9kZSkuaXMoZSkmJnQucHVzaCh0aGlzW2ldLnBhcmVudE5vZGUpOnQucHVzaCh0aGlzW2ldLnBhcmVudE5vZGUpKTtyZXR1cm4gcyhhKHQpKX0scGFyZW50czpmdW5jdGlvbihlKXtmb3IodmFyIHQ9W10saT0wO2k8dGhpcy5sZW5ndGg7aSs9MSlmb3IodmFyIHI9dGhpc1tpXS5wYXJlbnROb2RlO3I7KWU/cyhyKS5pcyhlKSYmdC5wdXNoKHIpOnQucHVzaChyKSxyPXIucGFyZW50Tm9kZTtyZXR1cm4gcyhhKHQpKX0sY2xvc2VzdDpmdW5jdGlvbihlKXt2YXIgdD10aGlzO3JldHVybiB2b2lkIDA9PT1lP25ldyBpKFtdKToodC5pcyhlKXx8KHQ9dC5wYXJlbnRzKGUpLmVxKDApKSx0KX0sZmluZDpmdW5jdGlvbihlKXtmb3IodmFyIHQ9W10scz0wO3M8dGhpcy5sZW5ndGg7cys9MSlmb3IodmFyIGE9dGhpc1tzXS5xdWVyeVNlbGVjdG9yQWxsKGUpLHI9MDtyPGEubGVuZ3RoO3IrPTEpdC5wdXNoKGFbcl0pO3JldHVybiBuZXcgaSh0KX0sY2hpbGRyZW46ZnVuY3Rpb24oZSl7Zm9yKHZhciB0PVtdLHI9MDtyPHRoaXMubGVuZ3RoO3IrPTEpZm9yKHZhciBuPXRoaXNbcl0uY2hpbGROb2RlcyxvPTA7bzxuLmxlbmd0aDtvKz0xKWU/MT09PW5bb10ubm9kZVR5cGUmJnMobltvXSkuaXMoZSkmJnQucHVzaChuW29dKToxPT09bltvXS5ub2RlVHlwZSYmdC5wdXNoKG5bb10pO3JldHVybiBuZXcgaShhKHQpKX0sZmlsdGVyOmZ1bmN0aW9uKGUpe2Zvcih2YXIgdD1bXSxzPTA7czx0aGlzLmxlbmd0aDtzKz0xKWUuY2FsbCh0aGlzW3NdLHMsdGhpc1tzXSkmJnQucHVzaCh0aGlzW3NdKTtyZXR1cm4gbmV3IGkodCl9LHJlbW92ZTpmdW5jdGlvbigpe2Zvcih2YXIgZT0wO2U8dGhpcy5sZW5ndGg7ZSs9MSl0aGlzW2VdLnBhcmVudE5vZGUmJnRoaXNbZV0ucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzW2VdKTtyZXR1cm4gdGhpc30sYWRkOmZ1bmN0aW9uKCl7Zm9yKHZhciBlPVtdLHQ9YXJndW1lbnRzLmxlbmd0aDt0LS07KWVbdF09YXJndW1lbnRzW3RdO3ZhciBpLGEscj10aGlzO2ZvcihpPTA7aTxlLmxlbmd0aDtpKz0xKXt2YXIgbj1zKGVbaV0pO2ZvcihhPTA7YTxuLmxlbmd0aDthKz0xKXJbci5sZW5ndGhdPW5bYV0sci5sZW5ndGgrPTF9cmV0dXJuIHJ9LHN0eWxlczpmdW5jdGlvbigpe3JldHVybiB0aGlzWzBdP3QuZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzWzBdLG51bGwpOnt9fX07T2JqZWN0LmtleXMocikuZm9yRWFjaCgoZnVuY3Rpb24oZSl7cy5mbltlXT1zLmZuW2VdfHxyW2VdfSkpO3ZhciBuPXtkZWxldGVQcm9wczpmdW5jdGlvbihlKXt2YXIgdD1lO09iamVjdC5rZXlzKHQpLmZvckVhY2goKGZ1bmN0aW9uKGUpe3RyeXt0W2VdPW51bGx9Y2F0Y2goZSl7fXRyeXtkZWxldGUgdFtlXX1jYXRjaChlKXt9fSkpfSxuZXh0VGljazpmdW5jdGlvbihlLHQpe3JldHVybiB2b2lkIDA9PT10JiYodD0wKSxzZXRUaW1lb3V0KGUsdCl9LG5vdzpmdW5jdGlvbigpe3JldHVybiBEYXRlLm5vdygpfSxnZXRUcmFuc2xhdGU6ZnVuY3Rpb24oZSxpKXt2YXIgcyxhLHI7dm9pZCAwPT09aSYmKGk9XCJ4XCIpO3ZhciBuPXQuZ2V0Q29tcHV0ZWRTdHlsZShlLG51bGwpO3JldHVybiB0LldlYktpdENTU01hdHJpeD8oKGE9bi50cmFuc2Zvcm18fG4ud2Via2l0VHJhbnNmb3JtKS5zcGxpdChcIixcIikubGVuZ3RoPjYmJihhPWEuc3BsaXQoXCIsIFwiKS5tYXAoKGZ1bmN0aW9uKGUpe3JldHVybiBlLnJlcGxhY2UoXCIsXCIsXCIuXCIpfSkpLmpvaW4oXCIsIFwiKSkscj1uZXcgdC5XZWJLaXRDU1NNYXRyaXgoXCJub25lXCI9PT1hP1wiXCI6YSkpOnM9KHI9bi5Nb3pUcmFuc2Zvcm18fG4uT1RyYW5zZm9ybXx8bi5Nc1RyYW5zZm9ybXx8bi5tc1RyYW5zZm9ybXx8bi50cmFuc2Zvcm18fG4uZ2V0UHJvcGVydHlWYWx1ZShcInRyYW5zZm9ybVwiKS5yZXBsYWNlKFwidHJhbnNsYXRlKFwiLFwibWF0cml4KDEsIDAsIDAsIDEsXCIpKS50b1N0cmluZygpLnNwbGl0KFwiLFwiKSxcInhcIj09PWkmJihhPXQuV2ViS2l0Q1NTTWF0cml4P3IubTQxOjE2PT09cy5sZW5ndGg/cGFyc2VGbG9hdChzWzEyXSk6cGFyc2VGbG9hdChzWzRdKSksXCJ5XCI9PT1pJiYoYT10LldlYktpdENTU01hdHJpeD9yLm00MjoxNj09PXMubGVuZ3RoP3BhcnNlRmxvYXQoc1sxM10pOnBhcnNlRmxvYXQoc1s1XSkpLGF8fDB9LHBhcnNlVXJsUXVlcnk6ZnVuY3Rpb24oZSl7dmFyIGkscyxhLHIsbj17fSxvPWV8fHQubG9jYXRpb24uaHJlZjtpZihcInN0cmluZ1wiPT10eXBlb2YgbyYmby5sZW5ndGgpZm9yKHI9KHM9KG89by5pbmRleE9mKFwiP1wiKT4tMT9vLnJlcGxhY2UoL1xcUypcXD8vLFwiXCIpOlwiXCIpLnNwbGl0KFwiJlwiKS5maWx0ZXIoKGZ1bmN0aW9uKGUpe3JldHVyblwiXCIhPT1lfSkpKS5sZW5ndGgsaT0wO2k8cjtpKz0xKWE9c1tpXS5yZXBsYWNlKC8jXFxTKy9nLFwiXCIpLnNwbGl0KFwiPVwiKSxuW2RlY29kZVVSSUNvbXBvbmVudChhWzBdKV09dm9pZCAwPT09YVsxXT92b2lkIDA6ZGVjb2RlVVJJQ29tcG9uZW50KGFbMV0pfHxcIlwiO3JldHVybiBufSxpc09iamVjdDpmdW5jdGlvbihlKXtyZXR1cm5cIm9iamVjdFwiPT10eXBlb2YgZSYmbnVsbCE9PWUmJmUuY29uc3RydWN0b3ImJmUuY29uc3RydWN0b3I9PT1PYmplY3R9LGV4dGVuZDpmdW5jdGlvbigpe2Zvcih2YXIgZT1bXSx0PWFyZ3VtZW50cy5sZW5ndGg7dC0tOyllW3RdPWFyZ3VtZW50c1t0XTtmb3IodmFyIGk9T2JqZWN0KGVbMF0pLHM9MTtzPGUubGVuZ3RoO3MrPTEpe3ZhciBhPWVbc107aWYobnVsbCE9YSlmb3IodmFyIHI9T2JqZWN0LmtleXMoT2JqZWN0KGEpKSxvPTAsbD1yLmxlbmd0aDtvPGw7bys9MSl7dmFyIGQ9cltvXSxoPU9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoYSxkKTt2b2lkIDAhPT1oJiZoLmVudW1lcmFibGUmJihuLmlzT2JqZWN0KGlbZF0pJiZuLmlzT2JqZWN0KGFbZF0pP24uZXh0ZW5kKGlbZF0sYVtkXSk6IW4uaXNPYmplY3QoaVtkXSkmJm4uaXNPYmplY3QoYVtkXSk/KGlbZF09e30sbi5leHRlbmQoaVtkXSxhW2RdKSk6aVtkXT1hW2RdKX19cmV0dXJuIGl9fSxvPXt0b3VjaDp0Lk1vZGVybml6ciYmITA9PT10Lk1vZGVybml6ci50b3VjaHx8ISEodC5uYXZpZ2F0b3IubWF4VG91Y2hQb2ludHM+MHx8XCJvbnRvdWNoc3RhcnRcImluIHR8fHQuRG9jdW1lbnRUb3VjaCYmZSBpbnN0YW5jZW9mIHQuRG9jdW1lbnRUb3VjaCkscG9pbnRlckV2ZW50czohIXQuUG9pbnRlckV2ZW50JiZcIm1heFRvdWNoUG9pbnRzXCJpbiB0Lm5hdmlnYXRvciYmdC5uYXZpZ2F0b3IubWF4VG91Y2hQb2ludHM+MCxvYnNlcnZlcjpcIk11dGF0aW9uT2JzZXJ2ZXJcImluIHR8fFwiV2Via2l0TXV0YXRpb25PYnNlcnZlclwiaW4gdCxwYXNzaXZlTGlzdGVuZXI6ZnVuY3Rpb24oKXt2YXIgZT0hMTt0cnl7dmFyIGk9T2JqZWN0LmRlZmluZVByb3BlcnR5KHt9LFwicGFzc2l2ZVwiLHtnZXQ6ZnVuY3Rpb24oKXtlPSEwfX0pO3QuYWRkRXZlbnRMaXN0ZW5lcihcInRlc3RQYXNzaXZlTGlzdGVuZXJcIixudWxsLGkpfWNhdGNoKGUpe31yZXR1cm4gZX0oKSxnZXN0dXJlczpcIm9uZ2VzdHVyZXN0YXJ0XCJpbiB0fSxsPWZ1bmN0aW9uKGUpe3ZvaWQgMD09PWUmJihlPXt9KTt2YXIgdD10aGlzO3QucGFyYW1zPWUsdC5ldmVudHNMaXN0ZW5lcnM9e30sdC5wYXJhbXMmJnQucGFyYW1zLm9uJiZPYmplY3Qua2V5cyh0LnBhcmFtcy5vbikuZm9yRWFjaCgoZnVuY3Rpb24oZSl7dC5vbihlLHQucGFyYW1zLm9uW2VdKX0pKX0sZD17Y29tcG9uZW50czp7Y29uZmlndXJhYmxlOiEwfX07bC5wcm90b3R5cGUub249ZnVuY3Rpb24oZSx0LGkpe3ZhciBzPXRoaXM7aWYoXCJmdW5jdGlvblwiIT10eXBlb2YgdClyZXR1cm4gczt2YXIgYT1pP1widW5zaGlmdFwiOlwicHVzaFwiO3JldHVybiBlLnNwbGl0KFwiIFwiKS5mb3JFYWNoKChmdW5jdGlvbihlKXtzLmV2ZW50c0xpc3RlbmVyc1tlXXx8KHMuZXZlbnRzTGlzdGVuZXJzW2VdPVtdKSxzLmV2ZW50c0xpc3RlbmVyc1tlXVthXSh0KX0pKSxzfSxsLnByb3RvdHlwZS5vbmNlPWZ1bmN0aW9uKGUsdCxpKXt2YXIgcz10aGlzO2lmKFwiZnVuY3Rpb25cIiE9dHlwZW9mIHQpcmV0dXJuIHM7ZnVuY3Rpb24gYSgpe2Zvcih2YXIgaT1bXSxyPWFyZ3VtZW50cy5sZW5ndGg7ci0tOylpW3JdPWFyZ3VtZW50c1tyXTtzLm9mZihlLGEpLGEuZjdwcm94eSYmZGVsZXRlIGEuZjdwcm94eSx0LmFwcGx5KHMsaSl9cmV0dXJuIGEuZjdwcm94eT10LHMub24oZSxhLGkpfSxsLnByb3RvdHlwZS5vZmY9ZnVuY3Rpb24oZSx0KXt2YXIgaT10aGlzO3JldHVybiBpLmV2ZW50c0xpc3RlbmVycz8oZS5zcGxpdChcIiBcIikuZm9yRWFjaCgoZnVuY3Rpb24oZSl7dm9pZCAwPT09dD9pLmV2ZW50c0xpc3RlbmVyc1tlXT1bXTppLmV2ZW50c0xpc3RlbmVyc1tlXSYmaS5ldmVudHNMaXN0ZW5lcnNbZV0ubGVuZ3RoJiZpLmV2ZW50c0xpc3RlbmVyc1tlXS5mb3JFYWNoKChmdW5jdGlvbihzLGEpeyhzPT09dHx8cy5mN3Byb3h5JiZzLmY3cHJveHk9PT10KSYmaS5ldmVudHNMaXN0ZW5lcnNbZV0uc3BsaWNlKGEsMSl9KSl9KSksaSk6aX0sbC5wcm90b3R5cGUuZW1pdD1mdW5jdGlvbigpe2Zvcih2YXIgZT1bXSx0PWFyZ3VtZW50cy5sZW5ndGg7dC0tOyllW3RdPWFyZ3VtZW50c1t0XTt2YXIgaSxzLGEscj10aGlzO2lmKCFyLmV2ZW50c0xpc3RlbmVycylyZXR1cm4gcjtcInN0cmluZ1wiPT10eXBlb2YgZVswXXx8QXJyYXkuaXNBcnJheShlWzBdKT8oaT1lWzBdLHM9ZS5zbGljZSgxLGUubGVuZ3RoKSxhPXIpOihpPWVbMF0uZXZlbnRzLHM9ZVswXS5kYXRhLGE9ZVswXS5jb250ZXh0fHxyKTt2YXIgbj1BcnJheS5pc0FycmF5KGkpP2k6aS5zcGxpdChcIiBcIik7cmV0dXJuIG4uZm9yRWFjaCgoZnVuY3Rpb24oZSl7aWYoci5ldmVudHNMaXN0ZW5lcnMmJnIuZXZlbnRzTGlzdGVuZXJzW2VdKXt2YXIgdD1bXTtyLmV2ZW50c0xpc3RlbmVyc1tlXS5mb3JFYWNoKChmdW5jdGlvbihlKXt0LnB1c2goZSl9KSksdC5mb3JFYWNoKChmdW5jdGlvbihlKXtlLmFwcGx5KGEscyl9KSl9fSkpLHJ9LGwucHJvdG90eXBlLnVzZU1vZHVsZXNQYXJhbXM9ZnVuY3Rpb24oZSl7dmFyIHQ9dGhpczt0Lm1vZHVsZXMmJk9iamVjdC5rZXlzKHQubW9kdWxlcykuZm9yRWFjaCgoZnVuY3Rpb24oaSl7dmFyIHM9dC5tb2R1bGVzW2ldO3MucGFyYW1zJiZuLmV4dGVuZChlLHMucGFyYW1zKX0pKX0sbC5wcm90b3R5cGUudXNlTW9kdWxlcz1mdW5jdGlvbihlKXt2b2lkIDA9PT1lJiYoZT17fSk7dmFyIHQ9dGhpczt0Lm1vZHVsZXMmJk9iamVjdC5rZXlzKHQubW9kdWxlcykuZm9yRWFjaCgoZnVuY3Rpb24oaSl7dmFyIHM9dC5tb2R1bGVzW2ldLGE9ZVtpXXx8e307cy5pbnN0YW5jZSYmT2JqZWN0LmtleXMocy5pbnN0YW5jZSkuZm9yRWFjaCgoZnVuY3Rpb24oZSl7dmFyIGk9cy5pbnN0YW5jZVtlXTt0W2VdPVwiZnVuY3Rpb25cIj09dHlwZW9mIGk/aS5iaW5kKHQpOml9KSkscy5vbiYmdC5vbiYmT2JqZWN0LmtleXMocy5vbikuZm9yRWFjaCgoZnVuY3Rpb24oZSl7dC5vbihlLHMub25bZV0pfSkpLHMuY3JlYXRlJiZzLmNyZWF0ZS5iaW5kKHQpKGEpfSkpfSxkLmNvbXBvbmVudHMuc2V0PWZ1bmN0aW9uKGUpe3RoaXMudXNlJiZ0aGlzLnVzZShlKX0sbC5pbnN0YWxsTW9kdWxlPWZ1bmN0aW9uKGUpe2Zvcih2YXIgdD1bXSxpPWFyZ3VtZW50cy5sZW5ndGgtMTtpLS0gPjA7KXRbaV09YXJndW1lbnRzW2krMV07dmFyIHM9dGhpcztzLnByb3RvdHlwZS5tb2R1bGVzfHwocy5wcm90b3R5cGUubW9kdWxlcz17fSk7dmFyIGE9ZS5uYW1lfHxPYmplY3Qua2V5cyhzLnByb3RvdHlwZS5tb2R1bGVzKS5sZW5ndGgrXCJfXCIrbi5ub3coKTtyZXR1cm4gcy5wcm90b3R5cGUubW9kdWxlc1thXT1lLGUucHJvdG8mJk9iamVjdC5rZXlzKGUucHJvdG8pLmZvckVhY2goKGZ1bmN0aW9uKHQpe3MucHJvdG90eXBlW3RdPWUucHJvdG9bdF19KSksZS5zdGF0aWMmJk9iamVjdC5rZXlzKGUuc3RhdGljKS5mb3JFYWNoKChmdW5jdGlvbih0KXtzW3RdPWUuc3RhdGljW3RdfSkpLGUuaW5zdGFsbCYmZS5pbnN0YWxsLmFwcGx5KHMsdCksc30sbC51c2U9ZnVuY3Rpb24oZSl7Zm9yKHZhciB0PVtdLGk9YXJndW1lbnRzLmxlbmd0aC0xO2ktLSA+MDspdFtpXT1hcmd1bWVudHNbaSsxXTt2YXIgcz10aGlzO3JldHVybiBBcnJheS5pc0FycmF5KGUpPyhlLmZvckVhY2goKGZ1bmN0aW9uKGUpe3JldHVybiBzLmluc3RhbGxNb2R1bGUoZSl9KSkscyk6cy5pbnN0YWxsTW9kdWxlLmFwcGx5KHMsW2VdLmNvbmNhdCh0KSl9LE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKGwsZCk7dmFyIGg9e3VwZGF0ZVNpemU6ZnVuY3Rpb24oKXt2YXIgZSx0LGk9dGhpcy4kZWw7ZT12b2lkIDAhPT10aGlzLnBhcmFtcy53aWR0aD90aGlzLnBhcmFtcy53aWR0aDppWzBdLmNsaWVudFdpZHRoLHQ9dm9pZCAwIT09dGhpcy5wYXJhbXMuaGVpZ2h0P3RoaXMucGFyYW1zLmhlaWdodDppWzBdLmNsaWVudEhlaWdodCwwPT09ZSYmdGhpcy5pc0hvcml6b250YWwoKXx8MD09PXQmJnRoaXMuaXNWZXJ0aWNhbCgpfHwoZT1lLXBhcnNlSW50KGkuY3NzKFwicGFkZGluZy1sZWZ0XCIpLDEwKS1wYXJzZUludChpLmNzcyhcInBhZGRpbmctcmlnaHRcIiksMTApLHQ9dC1wYXJzZUludChpLmNzcyhcInBhZGRpbmctdG9wXCIpLDEwKS1wYXJzZUludChpLmNzcyhcInBhZGRpbmctYm90dG9tXCIpLDEwKSxuLmV4dGVuZCh0aGlzLHt3aWR0aDplLGhlaWdodDp0LHNpemU6dGhpcy5pc0hvcml6b250YWwoKT9lOnR9KSl9LHVwZGF0ZVNsaWRlczpmdW5jdGlvbigpe3ZhciBlPXRoaXMucGFyYW1zLGk9dGhpcy4kd3JhcHBlckVsLHM9dGhpcy5zaXplLGE9dGhpcy5ydGxUcmFuc2xhdGUscj10aGlzLndyb25nUlRMLG89dGhpcy52aXJ0dWFsJiZlLnZpcnR1YWwuZW5hYmxlZCxsPW8/dGhpcy52aXJ0dWFsLnNsaWRlcy5sZW5ndGg6dGhpcy5zbGlkZXMubGVuZ3RoLGQ9aS5jaGlsZHJlbihcIi5cIit0aGlzLnBhcmFtcy5zbGlkZUNsYXNzKSxoPW8/dGhpcy52aXJ0dWFsLnNsaWRlcy5sZW5ndGg6ZC5sZW5ndGgscD1bXSxjPVtdLHU9W107ZnVuY3Rpb24gdih0KXtyZXR1cm4hZS5jc3NNb2RlfHx0IT09ZC5sZW5ndGgtMX12YXIgZj1lLnNsaWRlc09mZnNldEJlZm9yZTtcImZ1bmN0aW9uXCI9PXR5cGVvZiBmJiYoZj1lLnNsaWRlc09mZnNldEJlZm9yZS5jYWxsKHRoaXMpKTt2YXIgbT1lLnNsaWRlc09mZnNldEFmdGVyO1wiZnVuY3Rpb25cIj09dHlwZW9mIG0mJihtPWUuc2xpZGVzT2Zmc2V0QWZ0ZXIuY2FsbCh0aGlzKSk7dmFyIGc9dGhpcy5zbmFwR3JpZC5sZW5ndGgsYj10aGlzLnNuYXBHcmlkLmxlbmd0aCx3PWUuc3BhY2VCZXR3ZWVuLHk9LWYseD0wLFQ9MDtpZih2b2lkIDAhPT1zKXt2YXIgRSxTO1wic3RyaW5nXCI9PXR5cGVvZiB3JiZ3LmluZGV4T2YoXCIlXCIpPj0wJiYodz1wYXJzZUZsb2F0KHcucmVwbGFjZShcIiVcIixcIlwiKSkvMTAwKnMpLHRoaXMudmlydHVhbFNpemU9LXcsYT9kLmNzcyh7bWFyZ2luTGVmdDpcIlwiLG1hcmdpblRvcDpcIlwifSk6ZC5jc3Moe21hcmdpblJpZ2h0OlwiXCIsbWFyZ2luQm90dG9tOlwiXCJ9KSxlLnNsaWRlc1BlckNvbHVtbj4xJiYoRT1NYXRoLmZsb29yKGgvZS5zbGlkZXNQZXJDb2x1bW4pPT09aC90aGlzLnBhcmFtcy5zbGlkZXNQZXJDb2x1bW4/aDpNYXRoLmNlaWwoaC9lLnNsaWRlc1BlckNvbHVtbikqZS5zbGlkZXNQZXJDb2x1bW4sXCJhdXRvXCIhPT1lLnNsaWRlc1BlclZpZXcmJlwicm93XCI9PT1lLnNsaWRlc1BlckNvbHVtbkZpbGwmJihFPU1hdGgubWF4KEUsZS5zbGlkZXNQZXJWaWV3KmUuc2xpZGVzUGVyQ29sdW1uKSkpO2Zvcih2YXIgQyxNPWUuc2xpZGVzUGVyQ29sdW1uLFA9RS9NLHo9TWF0aC5mbG9vcihoL2Uuc2xpZGVzUGVyQ29sdW1uKSxrPTA7azxoO2srPTEpe1M9MDt2YXIgJD1kLmVxKGspO2lmKGUuc2xpZGVzUGVyQ29sdW1uPjEpe3ZhciBMPXZvaWQgMCxJPXZvaWQgMCxEPXZvaWQgMDtpZihcInJvd1wiPT09ZS5zbGlkZXNQZXJDb2x1bW5GaWxsJiZlLnNsaWRlc1Blckdyb3VwPjEpe3ZhciBPPU1hdGguZmxvb3Ioay8oZS5zbGlkZXNQZXJHcm91cCplLnNsaWRlc1BlckNvbHVtbikpLEE9ay1lLnNsaWRlc1BlckNvbHVtbiplLnNsaWRlc1Blckdyb3VwKk8sRz0wPT09Tz9lLnNsaWRlc1Blckdyb3VwOk1hdGgubWluKE1hdGguY2VpbCgoaC1PKk0qZS5zbGlkZXNQZXJHcm91cCkvTSksZS5zbGlkZXNQZXJHcm91cCk7TD0oST1BLShEPU1hdGguZmxvb3IoQS9HKSkqRytPKmUuc2xpZGVzUGVyR3JvdXApK0QqRS9NLCQuY3NzKHtcIi13ZWJraXQtYm94LW9yZGluYWwtZ3JvdXBcIjpMLFwiLW1vei1ib3gtb3JkaW5hbC1ncm91cFwiOkwsXCItbXMtZmxleC1vcmRlclwiOkwsXCItd2Via2l0LW9yZGVyXCI6TCxvcmRlcjpMfSl9ZWxzZVwiY29sdW1uXCI9PT1lLnNsaWRlc1BlckNvbHVtbkZpbGw/KEQ9ay0oST1NYXRoLmZsb29yKGsvTSkpKk0sKEk+enx8ST09PXomJkQ9PT1NLTEpJiYoRCs9MSk+PU0mJihEPTAsSSs9MSkpOkk9ay0oRD1NYXRoLmZsb29yKGsvUCkpKlA7JC5jc3MoXCJtYXJnaW4tXCIrKHRoaXMuaXNIb3Jpem9udGFsKCk/XCJ0b3BcIjpcImxlZnRcIiksMCE9PUQmJmUuc3BhY2VCZXR3ZWVuJiZlLnNwYWNlQmV0d2VlbitcInB4XCIpfWlmKFwibm9uZVwiIT09JC5jc3MoXCJkaXNwbGF5XCIpKXtpZihcImF1dG9cIj09PWUuc2xpZGVzUGVyVmlldyl7dmFyIEg9dC5nZXRDb21wdXRlZFN0eWxlKCRbMF0sbnVsbCksQj0kWzBdLnN0eWxlLnRyYW5zZm9ybSxOPSRbMF0uc3R5bGUud2Via2l0VHJhbnNmb3JtO2lmKEImJigkWzBdLnN0eWxlLnRyYW5zZm9ybT1cIm5vbmVcIiksTiYmKCRbMF0uc3R5bGUud2Via2l0VHJhbnNmb3JtPVwibm9uZVwiKSxlLnJvdW5kTGVuZ3RocylTPXRoaXMuaXNIb3Jpem9udGFsKCk/JC5vdXRlcldpZHRoKCEwKTokLm91dGVySGVpZ2h0KCEwKTtlbHNlIGlmKHRoaXMuaXNIb3Jpem9udGFsKCkpe3ZhciBYPXBhcnNlRmxvYXQoSC5nZXRQcm9wZXJ0eVZhbHVlKFwid2lkdGhcIikpLFY9cGFyc2VGbG9hdChILmdldFByb3BlcnR5VmFsdWUoXCJwYWRkaW5nLWxlZnRcIikpLFk9cGFyc2VGbG9hdChILmdldFByb3BlcnR5VmFsdWUoXCJwYWRkaW5nLXJpZ2h0XCIpKSxGPXBhcnNlRmxvYXQoSC5nZXRQcm9wZXJ0eVZhbHVlKFwibWFyZ2luLWxlZnRcIikpLFc9cGFyc2VGbG9hdChILmdldFByb3BlcnR5VmFsdWUoXCJtYXJnaW4tcmlnaHRcIikpLFI9SC5nZXRQcm9wZXJ0eVZhbHVlKFwiYm94LXNpemluZ1wiKTtTPVImJlwiYm9yZGVyLWJveFwiPT09Uj9YK0YrVzpYK1YrWStGK1d9ZWxzZXt2YXIgcT1wYXJzZUZsb2F0KEguZ2V0UHJvcGVydHlWYWx1ZShcImhlaWdodFwiKSksaj1wYXJzZUZsb2F0KEguZ2V0UHJvcGVydHlWYWx1ZShcInBhZGRpbmctdG9wXCIpKSxLPXBhcnNlRmxvYXQoSC5nZXRQcm9wZXJ0eVZhbHVlKFwicGFkZGluZy1ib3R0b21cIikpLFU9cGFyc2VGbG9hdChILmdldFByb3BlcnR5VmFsdWUoXCJtYXJnaW4tdG9wXCIpKSxfPXBhcnNlRmxvYXQoSC5nZXRQcm9wZXJ0eVZhbHVlKFwibWFyZ2luLWJvdHRvbVwiKSksWj1ILmdldFByb3BlcnR5VmFsdWUoXCJib3gtc2l6aW5nXCIpO1M9WiYmXCJib3JkZXItYm94XCI9PT1aP3ErVStfOnEraitLK1UrX31CJiYoJFswXS5zdHlsZS50cmFuc2Zvcm09QiksTiYmKCRbMF0uc3R5bGUud2Via2l0VHJhbnNmb3JtPU4pLGUucm91bmRMZW5ndGhzJiYoUz1NYXRoLmZsb29yKFMpKX1lbHNlIFM9KHMtKGUuc2xpZGVzUGVyVmlldy0xKSp3KS9lLnNsaWRlc1BlclZpZXcsZS5yb3VuZExlbmd0aHMmJihTPU1hdGguZmxvb3IoUykpLGRba10mJih0aGlzLmlzSG9yaXpvbnRhbCgpP2Rba10uc3R5bGUud2lkdGg9UytcInB4XCI6ZFtrXS5zdHlsZS5oZWlnaHQ9UytcInB4XCIpO2Rba10mJihkW2tdLnN3aXBlclNsaWRlU2l6ZT1TKSx1LnB1c2goUyksZS5jZW50ZXJlZFNsaWRlcz8oeT15K1MvMit4LzIrdywwPT09eCYmMCE9PWsmJih5PXktcy8yLXcpLDA9PT1rJiYoeT15LXMvMi13KSxNYXRoLmFicyh5KTwuMDAxJiYoeT0wKSxlLnJvdW5kTGVuZ3RocyYmKHk9TWF0aC5mbG9vcih5KSksVCVlLnNsaWRlc1Blckdyb3VwPT0wJiZwLnB1c2goeSksYy5wdXNoKHkpKTooZS5yb3VuZExlbmd0aHMmJih5PU1hdGguZmxvb3IoeSkpLChULU1hdGgubWluKHRoaXMucGFyYW1zLnNsaWRlc1Blckdyb3VwU2tpcCxUKSkldGhpcy5wYXJhbXMuc2xpZGVzUGVyR3JvdXA9PTAmJnAucHVzaCh5KSxjLnB1c2goeSkseT15K1MrdyksdGhpcy52aXJ0dWFsU2l6ZSs9Uyt3LHg9UyxUKz0xfX1pZih0aGlzLnZpcnR1YWxTaXplPU1hdGgubWF4KHRoaXMudmlydHVhbFNpemUscykrbSxhJiZyJiYoXCJzbGlkZVwiPT09ZS5lZmZlY3R8fFwiY292ZXJmbG93XCI9PT1lLmVmZmVjdCkmJmkuY3NzKHt3aWR0aDp0aGlzLnZpcnR1YWxTaXplK2Uuc3BhY2VCZXR3ZWVuK1wicHhcIn0pLGUuc2V0V3JhcHBlclNpemUmJih0aGlzLmlzSG9yaXpvbnRhbCgpP2kuY3NzKHt3aWR0aDp0aGlzLnZpcnR1YWxTaXplK2Uuc3BhY2VCZXR3ZWVuK1wicHhcIn0pOmkuY3NzKHtoZWlnaHQ6dGhpcy52aXJ0dWFsU2l6ZStlLnNwYWNlQmV0d2VlbitcInB4XCJ9KSksZS5zbGlkZXNQZXJDb2x1bW4+MSYmKHRoaXMudmlydHVhbFNpemU9KFMrZS5zcGFjZUJldHdlZW4pKkUsdGhpcy52aXJ0dWFsU2l6ZT1NYXRoLmNlaWwodGhpcy52aXJ0dWFsU2l6ZS9lLnNsaWRlc1BlckNvbHVtbiktZS5zcGFjZUJldHdlZW4sdGhpcy5pc0hvcml6b250YWwoKT9pLmNzcyh7d2lkdGg6dGhpcy52aXJ0dWFsU2l6ZStlLnNwYWNlQmV0d2VlbitcInB4XCJ9KTppLmNzcyh7aGVpZ2h0OnRoaXMudmlydHVhbFNpemUrZS5zcGFjZUJldHdlZW4rXCJweFwifSksZS5jZW50ZXJlZFNsaWRlcykpe0M9W107Zm9yKHZhciBRPTA7UTxwLmxlbmd0aDtRKz0xKXt2YXIgSj1wW1FdO2Uucm91bmRMZW5ndGhzJiYoSj1NYXRoLmZsb29yKEopKSxwW1FdPHRoaXMudmlydHVhbFNpemUrcFswXSYmQy5wdXNoKEopfXA9Q31pZighZS5jZW50ZXJlZFNsaWRlcyl7Qz1bXTtmb3IodmFyIGVlPTA7ZWU8cC5sZW5ndGg7ZWUrPTEpe3ZhciB0ZT1wW2VlXTtlLnJvdW5kTGVuZ3RocyYmKHRlPU1hdGguZmxvb3IodGUpKSxwW2VlXTw9dGhpcy52aXJ0dWFsU2l6ZS1zJiZDLnB1c2godGUpfXA9QyxNYXRoLmZsb29yKHRoaXMudmlydHVhbFNpemUtcyktTWF0aC5mbG9vcihwW3AubGVuZ3RoLTFdKT4xJiZwLnB1c2godGhpcy52aXJ0dWFsU2l6ZS1zKX1pZigwPT09cC5sZW5ndGgmJihwPVswXSksMCE9PWUuc3BhY2VCZXR3ZWVuJiYodGhpcy5pc0hvcml6b250YWwoKT9hP2QuZmlsdGVyKHYpLmNzcyh7bWFyZ2luTGVmdDp3K1wicHhcIn0pOmQuZmlsdGVyKHYpLmNzcyh7bWFyZ2luUmlnaHQ6dytcInB4XCJ9KTpkLmZpbHRlcih2KS5jc3Moe21hcmdpbkJvdHRvbTp3K1wicHhcIn0pKSxlLmNlbnRlcmVkU2xpZGVzJiZlLmNlbnRlcmVkU2xpZGVzQm91bmRzKXt2YXIgaWU9MDt1LmZvckVhY2goKGZ1bmN0aW9uKHQpe2llKz10KyhlLnNwYWNlQmV0d2Vlbj9lLnNwYWNlQmV0d2VlbjowKX0pKTt2YXIgc2U9KGllLT1lLnNwYWNlQmV0d2VlbiktcztwPXAubWFwKChmdW5jdGlvbihlKXtyZXR1cm4gZTwwPy1mOmU+c2U/c2UrbTplfSkpfWlmKGUuY2VudGVySW5zdWZmaWNpZW50U2xpZGVzKXt2YXIgYWU9MDtpZih1LmZvckVhY2goKGZ1bmN0aW9uKHQpe2FlKz10KyhlLnNwYWNlQmV0d2Vlbj9lLnNwYWNlQmV0d2VlbjowKX0pKSwoYWUtPWUuc3BhY2VCZXR3ZWVuKTxzKXt2YXIgcmU9KHMtYWUpLzI7cC5mb3JFYWNoKChmdW5jdGlvbihlLHQpe3BbdF09ZS1yZX0pKSxjLmZvckVhY2goKGZ1bmN0aW9uKGUsdCl7Y1t0XT1lK3JlfSkpfX1uLmV4dGVuZCh0aGlzLHtzbGlkZXM6ZCxzbmFwR3JpZDpwLHNsaWRlc0dyaWQ6YyxzbGlkZXNTaXplc0dyaWQ6dX0pLGghPT1sJiZ0aGlzLmVtaXQoXCJzbGlkZXNMZW5ndGhDaGFuZ2VcIikscC5sZW5ndGghPT1nJiYodGhpcy5wYXJhbXMud2F0Y2hPdmVyZmxvdyYmdGhpcy5jaGVja092ZXJmbG93KCksdGhpcy5lbWl0KFwic25hcEdyaWRMZW5ndGhDaGFuZ2VcIikpLGMubGVuZ3RoIT09YiYmdGhpcy5lbWl0KFwic2xpZGVzR3JpZExlbmd0aENoYW5nZVwiKSwoZS53YXRjaFNsaWRlc1Byb2dyZXNzfHxlLndhdGNoU2xpZGVzVmlzaWJpbGl0eSkmJnRoaXMudXBkYXRlU2xpZGVzT2Zmc2V0KCl9fSx1cGRhdGVBdXRvSGVpZ2h0OmZ1bmN0aW9uKGUpe3ZhciB0LGk9W10scz0wO2lmKFwibnVtYmVyXCI9PXR5cGVvZiBlP3RoaXMuc2V0VHJhbnNpdGlvbihlKTohMD09PWUmJnRoaXMuc2V0VHJhbnNpdGlvbih0aGlzLnBhcmFtcy5zcGVlZCksXCJhdXRvXCIhPT10aGlzLnBhcmFtcy5zbGlkZXNQZXJWaWV3JiZ0aGlzLnBhcmFtcy5zbGlkZXNQZXJWaWV3PjEpaWYodGhpcy5wYXJhbXMuY2VudGVyZWRTbGlkZXMpdGhpcy52aXNpYmxlU2xpZGVzLmVhY2goKGZ1bmN0aW9uKGUsdCl7aS5wdXNoKHQpfSkpO2Vsc2UgZm9yKHQ9MDt0PE1hdGguY2VpbCh0aGlzLnBhcmFtcy5zbGlkZXNQZXJWaWV3KTt0Kz0xKXt2YXIgYT10aGlzLmFjdGl2ZUluZGV4K3Q7aWYoYT50aGlzLnNsaWRlcy5sZW5ndGgpYnJlYWs7aS5wdXNoKHRoaXMuc2xpZGVzLmVxKGEpWzBdKX1lbHNlIGkucHVzaCh0aGlzLnNsaWRlcy5lcSh0aGlzLmFjdGl2ZUluZGV4KVswXSk7Zm9yKHQ9MDt0PGkubGVuZ3RoO3QrPTEpaWYodm9pZCAwIT09aVt0XSl7dmFyIHI9aVt0XS5vZmZzZXRIZWlnaHQ7cz1yPnM/cjpzfXMmJnRoaXMuJHdyYXBwZXJFbC5jc3MoXCJoZWlnaHRcIixzK1wicHhcIil9LHVwZGF0ZVNsaWRlc09mZnNldDpmdW5jdGlvbigpe2Zvcih2YXIgZT10aGlzLnNsaWRlcyx0PTA7dDxlLmxlbmd0aDt0Kz0xKWVbdF0uc3dpcGVyU2xpZGVPZmZzZXQ9dGhpcy5pc0hvcml6b250YWwoKT9lW3RdLm9mZnNldExlZnQ6ZVt0XS5vZmZzZXRUb3B9LHVwZGF0ZVNsaWRlc1Byb2dyZXNzOmZ1bmN0aW9uKGUpe3ZvaWQgMD09PWUmJihlPXRoaXMmJnRoaXMudHJhbnNsYXRlfHwwKTt2YXIgdD10aGlzLnBhcmFtcyxpPXRoaXMuc2xpZGVzLGE9dGhpcy5ydGxUcmFuc2xhdGU7aWYoMCE9PWkubGVuZ3RoKXt2b2lkIDA9PT1pWzBdLnN3aXBlclNsaWRlT2Zmc2V0JiZ0aGlzLnVwZGF0ZVNsaWRlc09mZnNldCgpO3ZhciByPS1lO2EmJihyPWUpLGkucmVtb3ZlQ2xhc3ModC5zbGlkZVZpc2libGVDbGFzcyksdGhpcy52aXNpYmxlU2xpZGVzSW5kZXhlcz1bXSx0aGlzLnZpc2libGVTbGlkZXM9W107Zm9yKHZhciBuPTA7bjxpLmxlbmd0aDtuKz0xKXt2YXIgbz1pW25dLGw9KHIrKHQuY2VudGVyZWRTbGlkZXM/dGhpcy5taW5UcmFuc2xhdGUoKTowKS1vLnN3aXBlclNsaWRlT2Zmc2V0KS8oby5zd2lwZXJTbGlkZVNpemUrdC5zcGFjZUJldHdlZW4pO2lmKHQud2F0Y2hTbGlkZXNWaXNpYmlsaXR5fHx0LmNlbnRlcmVkU2xpZGVzJiZ0LmF1dG9IZWlnaHQpe3ZhciBkPS0oci1vLnN3aXBlclNsaWRlT2Zmc2V0KSxoPWQrdGhpcy5zbGlkZXNTaXplc0dyaWRbbl07KGQ+PTAmJmQ8dGhpcy5zaXplLTF8fGg+MSYmaDw9dGhpcy5zaXplfHxkPD0wJiZoPj10aGlzLnNpemUpJiYodGhpcy52aXNpYmxlU2xpZGVzLnB1c2gobyksdGhpcy52aXNpYmxlU2xpZGVzSW5kZXhlcy5wdXNoKG4pLGkuZXEobikuYWRkQ2xhc3ModC5zbGlkZVZpc2libGVDbGFzcykpfW8ucHJvZ3Jlc3M9YT8tbDpsfXRoaXMudmlzaWJsZVNsaWRlcz1zKHRoaXMudmlzaWJsZVNsaWRlcyl9fSx1cGRhdGVQcm9ncmVzczpmdW5jdGlvbihlKXtpZih2b2lkIDA9PT1lKXt2YXIgdD10aGlzLnJ0bFRyYW5zbGF0ZT8tMToxO2U9dGhpcyYmdGhpcy50cmFuc2xhdGUmJnRoaXMudHJhbnNsYXRlKnR8fDB9dmFyIGk9dGhpcy5wYXJhbXMscz10aGlzLm1heFRyYW5zbGF0ZSgpLXRoaXMubWluVHJhbnNsYXRlKCksYT10aGlzLnByb2dyZXNzLHI9dGhpcy5pc0JlZ2lubmluZyxvPXRoaXMuaXNFbmQsbD1yLGQ9bzswPT09cz8oYT0wLHI9ITAsbz0hMCk6KHI9KGE9KGUtdGhpcy5taW5UcmFuc2xhdGUoKSkvcyk8PTAsbz1hPj0xKSxuLmV4dGVuZCh0aGlzLHtwcm9ncmVzczphLGlzQmVnaW5uaW5nOnIsaXNFbmQ6b30pLChpLndhdGNoU2xpZGVzUHJvZ3Jlc3N8fGkud2F0Y2hTbGlkZXNWaXNpYmlsaXR5fHxpLmNlbnRlcmVkU2xpZGVzJiZpLmF1dG9IZWlnaHQpJiZ0aGlzLnVwZGF0ZVNsaWRlc1Byb2dyZXNzKGUpLHImJiFsJiZ0aGlzLmVtaXQoXCJyZWFjaEJlZ2lubmluZyB0b0VkZ2VcIiksbyYmIWQmJnRoaXMuZW1pdChcInJlYWNoRW5kIHRvRWRnZVwiKSwobCYmIXJ8fGQmJiFvKSYmdGhpcy5lbWl0KFwiZnJvbUVkZ2VcIiksdGhpcy5lbWl0KFwicHJvZ3Jlc3NcIixhKX0sdXBkYXRlU2xpZGVzQ2xhc3NlczpmdW5jdGlvbigpe3ZhciBlLHQ9dGhpcy5zbGlkZXMsaT10aGlzLnBhcmFtcyxzPXRoaXMuJHdyYXBwZXJFbCxhPXRoaXMuYWN0aXZlSW5kZXgscj10aGlzLnJlYWxJbmRleCxuPXRoaXMudmlydHVhbCYmaS52aXJ0dWFsLmVuYWJsZWQ7dC5yZW1vdmVDbGFzcyhpLnNsaWRlQWN0aXZlQ2xhc3MrXCIgXCIraS5zbGlkZU5leHRDbGFzcytcIiBcIitpLnNsaWRlUHJldkNsYXNzK1wiIFwiK2kuc2xpZGVEdXBsaWNhdGVBY3RpdmVDbGFzcytcIiBcIitpLnNsaWRlRHVwbGljYXRlTmV4dENsYXNzK1wiIFwiK2kuc2xpZGVEdXBsaWNhdGVQcmV2Q2xhc3MpLChlPW4/dGhpcy4kd3JhcHBlckVsLmZpbmQoXCIuXCIraS5zbGlkZUNsYXNzKydbZGF0YS1zd2lwZXItc2xpZGUtaW5kZXg9XCInK2ErJ1wiXScpOnQuZXEoYSkpLmFkZENsYXNzKGkuc2xpZGVBY3RpdmVDbGFzcyksaS5sb29wJiYoZS5oYXNDbGFzcyhpLnNsaWRlRHVwbGljYXRlQ2xhc3MpP3MuY2hpbGRyZW4oXCIuXCIraS5zbGlkZUNsYXNzK1wiOm5vdCguXCIraS5zbGlkZUR1cGxpY2F0ZUNsYXNzKycpW2RhdGEtc3dpcGVyLXNsaWRlLWluZGV4PVwiJytyKydcIl0nKS5hZGRDbGFzcyhpLnNsaWRlRHVwbGljYXRlQWN0aXZlQ2xhc3MpOnMuY2hpbGRyZW4oXCIuXCIraS5zbGlkZUNsYXNzK1wiLlwiK2kuc2xpZGVEdXBsaWNhdGVDbGFzcysnW2RhdGEtc3dpcGVyLXNsaWRlLWluZGV4PVwiJytyKydcIl0nKS5hZGRDbGFzcyhpLnNsaWRlRHVwbGljYXRlQWN0aXZlQ2xhc3MpKTt2YXIgbz1lLm5leHRBbGwoXCIuXCIraS5zbGlkZUNsYXNzKS5lcSgwKS5hZGRDbGFzcyhpLnNsaWRlTmV4dENsYXNzKTtpLmxvb3AmJjA9PT1vLmxlbmd0aCYmKG89dC5lcSgwKSkuYWRkQ2xhc3MoaS5zbGlkZU5leHRDbGFzcyk7dmFyIGw9ZS5wcmV2QWxsKFwiLlwiK2kuc2xpZGVDbGFzcykuZXEoMCkuYWRkQ2xhc3MoaS5zbGlkZVByZXZDbGFzcyk7aS5sb29wJiYwPT09bC5sZW5ndGgmJihsPXQuZXEoLTEpKS5hZGRDbGFzcyhpLnNsaWRlUHJldkNsYXNzKSxpLmxvb3AmJihvLmhhc0NsYXNzKGkuc2xpZGVEdXBsaWNhdGVDbGFzcyk/cy5jaGlsZHJlbihcIi5cIitpLnNsaWRlQ2xhc3MrXCI6bm90KC5cIitpLnNsaWRlRHVwbGljYXRlQ2xhc3MrJylbZGF0YS1zd2lwZXItc2xpZGUtaW5kZXg9XCInK28uYXR0cihcImRhdGEtc3dpcGVyLXNsaWRlLWluZGV4XCIpKydcIl0nKS5hZGRDbGFzcyhpLnNsaWRlRHVwbGljYXRlTmV4dENsYXNzKTpzLmNoaWxkcmVuKFwiLlwiK2kuc2xpZGVDbGFzcytcIi5cIitpLnNsaWRlRHVwbGljYXRlQ2xhc3MrJ1tkYXRhLXN3aXBlci1zbGlkZS1pbmRleD1cIicrby5hdHRyKFwiZGF0YS1zd2lwZXItc2xpZGUtaW5kZXhcIikrJ1wiXScpLmFkZENsYXNzKGkuc2xpZGVEdXBsaWNhdGVOZXh0Q2xhc3MpLGwuaGFzQ2xhc3MoaS5zbGlkZUR1cGxpY2F0ZUNsYXNzKT9zLmNoaWxkcmVuKFwiLlwiK2kuc2xpZGVDbGFzcytcIjpub3QoLlwiK2kuc2xpZGVEdXBsaWNhdGVDbGFzcysnKVtkYXRhLXN3aXBlci1zbGlkZS1pbmRleD1cIicrbC5hdHRyKFwiZGF0YS1zd2lwZXItc2xpZGUtaW5kZXhcIikrJ1wiXScpLmFkZENsYXNzKGkuc2xpZGVEdXBsaWNhdGVQcmV2Q2xhc3MpOnMuY2hpbGRyZW4oXCIuXCIraS5zbGlkZUNsYXNzK1wiLlwiK2kuc2xpZGVEdXBsaWNhdGVDbGFzcysnW2RhdGEtc3dpcGVyLXNsaWRlLWluZGV4PVwiJytsLmF0dHIoXCJkYXRhLXN3aXBlci1zbGlkZS1pbmRleFwiKSsnXCJdJykuYWRkQ2xhc3MoaS5zbGlkZUR1cGxpY2F0ZVByZXZDbGFzcykpfSx1cGRhdGVBY3RpdmVJbmRleDpmdW5jdGlvbihlKXt2YXIgdCxpPXRoaXMucnRsVHJhbnNsYXRlP3RoaXMudHJhbnNsYXRlOi10aGlzLnRyYW5zbGF0ZSxzPXRoaXMuc2xpZGVzR3JpZCxhPXRoaXMuc25hcEdyaWQscj10aGlzLnBhcmFtcyxvPXRoaXMuYWN0aXZlSW5kZXgsbD10aGlzLnJlYWxJbmRleCxkPXRoaXMuc25hcEluZGV4LGg9ZTtpZih2b2lkIDA9PT1oKXtmb3IodmFyIHA9MDtwPHMubGVuZ3RoO3ArPTEpdm9pZCAwIT09c1twKzFdP2k+PXNbcF0mJmk8c1twKzFdLShzW3ArMV0tc1twXSkvMj9oPXA6aT49c1twXSYmaTxzW3ArMV0mJihoPXArMSk6aT49c1twXSYmKGg9cCk7ci5ub3JtYWxpemVTbGlkZUluZGV4JiYoaDwwfHx2b2lkIDA9PT1oKSYmKGg9MCl9aWYoYS5pbmRleE9mKGkpPj0wKXQ9YS5pbmRleE9mKGkpO2Vsc2V7dmFyIGM9TWF0aC5taW4oci5zbGlkZXNQZXJHcm91cFNraXAsaCk7dD1jK01hdGguZmxvb3IoKGgtYykvci5zbGlkZXNQZXJHcm91cCl9aWYodD49YS5sZW5ndGgmJih0PWEubGVuZ3RoLTEpLGghPT1vKXt2YXIgdT1wYXJzZUludCh0aGlzLnNsaWRlcy5lcShoKS5hdHRyKFwiZGF0YS1zd2lwZXItc2xpZGUtaW5kZXhcIil8fGgsMTApO24uZXh0ZW5kKHRoaXMse3NuYXBJbmRleDp0LHJlYWxJbmRleDp1LHByZXZpb3VzSW5kZXg6byxhY3RpdmVJbmRleDpofSksdGhpcy5lbWl0KFwiYWN0aXZlSW5kZXhDaGFuZ2VcIiksdGhpcy5lbWl0KFwic25hcEluZGV4Q2hhbmdlXCIpLGwhPT11JiZ0aGlzLmVtaXQoXCJyZWFsSW5kZXhDaGFuZ2VcIiksKHRoaXMuaW5pdGlhbGl6ZWR8fHRoaXMucGFyYW1zLnJ1bkNhbGxiYWNrc09uSW5pdCkmJnRoaXMuZW1pdChcInNsaWRlQ2hhbmdlXCIpfWVsc2UgdCE9PWQmJih0aGlzLnNuYXBJbmRleD10LHRoaXMuZW1pdChcInNuYXBJbmRleENoYW5nZVwiKSl9LHVwZGF0ZUNsaWNrZWRTbGlkZTpmdW5jdGlvbihlKXt2YXIgdD10aGlzLnBhcmFtcyxpPXMoZS50YXJnZXQpLmNsb3Nlc3QoXCIuXCIrdC5zbGlkZUNsYXNzKVswXSxhPSExO2lmKGkpZm9yKHZhciByPTA7cjx0aGlzLnNsaWRlcy5sZW5ndGg7cis9MSl0aGlzLnNsaWRlc1tyXT09PWkmJihhPSEwKTtpZighaXx8IWEpcmV0dXJuIHRoaXMuY2xpY2tlZFNsaWRlPXZvaWQgMCx2b2lkKHRoaXMuY2xpY2tlZEluZGV4PXZvaWQgMCk7dGhpcy5jbGlja2VkU2xpZGU9aSx0aGlzLnZpcnR1YWwmJnRoaXMucGFyYW1zLnZpcnR1YWwuZW5hYmxlZD90aGlzLmNsaWNrZWRJbmRleD1wYXJzZUludChzKGkpLmF0dHIoXCJkYXRhLXN3aXBlci1zbGlkZS1pbmRleFwiKSwxMCk6dGhpcy5jbGlja2VkSW5kZXg9cyhpKS5pbmRleCgpLHQuc2xpZGVUb0NsaWNrZWRTbGlkZSYmdm9pZCAwIT09dGhpcy5jbGlja2VkSW5kZXgmJnRoaXMuY2xpY2tlZEluZGV4IT09dGhpcy5hY3RpdmVJbmRleCYmdGhpcy5zbGlkZVRvQ2xpY2tlZFNsaWRlKCl9fTt2YXIgcD17Z2V0VHJhbnNsYXRlOmZ1bmN0aW9uKGUpe3ZvaWQgMD09PWUmJihlPXRoaXMuaXNIb3Jpem9udGFsKCk/XCJ4XCI6XCJ5XCIpO3ZhciB0PXRoaXMucGFyYW1zLGk9dGhpcy5ydGxUcmFuc2xhdGUscz10aGlzLnRyYW5zbGF0ZSxhPXRoaXMuJHdyYXBwZXJFbDtpZih0LnZpcnR1YWxUcmFuc2xhdGUpcmV0dXJuIGk/LXM6cztpZih0LmNzc01vZGUpcmV0dXJuIHM7dmFyIHI9bi5nZXRUcmFuc2xhdGUoYVswXSxlKTtyZXR1cm4gaSYmKHI9LXIpLHJ8fDB9LHNldFRyYW5zbGF0ZTpmdW5jdGlvbihlLHQpe3ZhciBpPXRoaXMucnRsVHJhbnNsYXRlLHM9dGhpcy5wYXJhbXMsYT10aGlzLiR3cmFwcGVyRWwscj10aGlzLndyYXBwZXJFbCxuPXRoaXMucHJvZ3Jlc3Msbz0wLGw9MDt0aGlzLmlzSG9yaXpvbnRhbCgpP289aT8tZTplOmw9ZSxzLnJvdW5kTGVuZ3RocyYmKG89TWF0aC5mbG9vcihvKSxsPU1hdGguZmxvb3IobCkpLHMuY3NzTW9kZT9yW3RoaXMuaXNIb3Jpem9udGFsKCk/XCJzY3JvbGxMZWZ0XCI6XCJzY3JvbGxUb3BcIl09dGhpcy5pc0hvcml6b250YWwoKT8tbzotbDpzLnZpcnR1YWxUcmFuc2xhdGV8fGEudHJhbnNmb3JtKFwidHJhbnNsYXRlM2QoXCIrbytcInB4LCBcIitsK1wicHgsIDBweClcIiksdGhpcy5wcmV2aW91c1RyYW5zbGF0ZT10aGlzLnRyYW5zbGF0ZSx0aGlzLnRyYW5zbGF0ZT10aGlzLmlzSG9yaXpvbnRhbCgpP286bDt2YXIgZD10aGlzLm1heFRyYW5zbGF0ZSgpLXRoaXMubWluVHJhbnNsYXRlKCk7KDA9PT1kPzA6KGUtdGhpcy5taW5UcmFuc2xhdGUoKSkvZCkhPT1uJiZ0aGlzLnVwZGF0ZVByb2dyZXNzKGUpLHRoaXMuZW1pdChcInNldFRyYW5zbGF0ZVwiLHRoaXMudHJhbnNsYXRlLHQpfSxtaW5UcmFuc2xhdGU6ZnVuY3Rpb24oKXtyZXR1cm4tdGhpcy5zbmFwR3JpZFswXX0sbWF4VHJhbnNsYXRlOmZ1bmN0aW9uKCl7cmV0dXJuLXRoaXMuc25hcEdyaWRbdGhpcy5zbmFwR3JpZC5sZW5ndGgtMV19LHRyYW5zbGF0ZVRvOmZ1bmN0aW9uKGUsdCxpLHMsYSl7dmFyIHI7dm9pZCAwPT09ZSYmKGU9MCksdm9pZCAwPT09dCYmKHQ9dGhpcy5wYXJhbXMuc3BlZWQpLHZvaWQgMD09PWkmJihpPSEwKSx2b2lkIDA9PT1zJiYocz0hMCk7dmFyIG49dGhpcyxvPW4ucGFyYW1zLGw9bi53cmFwcGVyRWw7aWYobi5hbmltYXRpbmcmJm8ucHJldmVudEludGVyYWN0aW9uT25UcmFuc2l0aW9uKXJldHVybiExO3ZhciBkLGg9bi5taW5UcmFuc2xhdGUoKSxwPW4ubWF4VHJhbnNsYXRlKCk7aWYoZD1zJiZlPmg/aDpzJiZlPHA/cDplLG4udXBkYXRlUHJvZ3Jlc3MoZCksby5jc3NNb2RlKXt2YXIgYz1uLmlzSG9yaXpvbnRhbCgpO3JldHVybiAwPT09dD9sW2M/XCJzY3JvbGxMZWZ0XCI6XCJzY3JvbGxUb3BcIl09LWQ6bC5zY3JvbGxUbz9sLnNjcm9sbFRvKCgocj17fSlbYz9cImxlZnRcIjpcInRvcFwiXT0tZCxyLmJlaGF2aW9yPVwic21vb3RoXCIscikpOmxbYz9cInNjcm9sbExlZnRcIjpcInNjcm9sbFRvcFwiXT0tZCwhMH1yZXR1cm4gMD09PXQ/KG4uc2V0VHJhbnNpdGlvbigwKSxuLnNldFRyYW5zbGF0ZShkKSxpJiYobi5lbWl0KFwiYmVmb3JlVHJhbnNpdGlvblN0YXJ0XCIsdCxhKSxuLmVtaXQoXCJ0cmFuc2l0aW9uRW5kXCIpKSk6KG4uc2V0VHJhbnNpdGlvbih0KSxuLnNldFRyYW5zbGF0ZShkKSxpJiYobi5lbWl0KFwiYmVmb3JlVHJhbnNpdGlvblN0YXJ0XCIsdCxhKSxuLmVtaXQoXCJ0cmFuc2l0aW9uU3RhcnRcIikpLG4uYW5pbWF0aW5nfHwobi5hbmltYXRpbmc9ITAsbi5vblRyYW5zbGF0ZVRvV3JhcHBlclRyYW5zaXRpb25FbmR8fChuLm9uVHJhbnNsYXRlVG9XcmFwcGVyVHJhbnNpdGlvbkVuZD1mdW5jdGlvbihlKXtuJiYhbi5kZXN0cm95ZWQmJmUudGFyZ2V0PT09dGhpcyYmKG4uJHdyYXBwZXJFbFswXS5yZW1vdmVFdmVudExpc3RlbmVyKFwidHJhbnNpdGlvbmVuZFwiLG4ub25UcmFuc2xhdGVUb1dyYXBwZXJUcmFuc2l0aW9uRW5kKSxuLiR3cmFwcGVyRWxbMF0ucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIndlYmtpdFRyYW5zaXRpb25FbmRcIixuLm9uVHJhbnNsYXRlVG9XcmFwcGVyVHJhbnNpdGlvbkVuZCksbi5vblRyYW5zbGF0ZVRvV3JhcHBlclRyYW5zaXRpb25FbmQ9bnVsbCxkZWxldGUgbi5vblRyYW5zbGF0ZVRvV3JhcHBlclRyYW5zaXRpb25FbmQsaSYmbi5lbWl0KFwidHJhbnNpdGlvbkVuZFwiKSl9KSxuLiR3cmFwcGVyRWxbMF0uYWRkRXZlbnRMaXN0ZW5lcihcInRyYW5zaXRpb25lbmRcIixuLm9uVHJhbnNsYXRlVG9XcmFwcGVyVHJhbnNpdGlvbkVuZCksbi4kd3JhcHBlckVsWzBdLmFkZEV2ZW50TGlzdGVuZXIoXCJ3ZWJraXRUcmFuc2l0aW9uRW5kXCIsbi5vblRyYW5zbGF0ZVRvV3JhcHBlclRyYW5zaXRpb25FbmQpKSksITB9fTt2YXIgYz17c2V0VHJhbnNpdGlvbjpmdW5jdGlvbihlLHQpe3RoaXMucGFyYW1zLmNzc01vZGV8fHRoaXMuJHdyYXBwZXJFbC50cmFuc2l0aW9uKGUpLHRoaXMuZW1pdChcInNldFRyYW5zaXRpb25cIixlLHQpfSx0cmFuc2l0aW9uU3RhcnQ6ZnVuY3Rpb24oZSx0KXt2b2lkIDA9PT1lJiYoZT0hMCk7dmFyIGk9dGhpcy5hY3RpdmVJbmRleCxzPXRoaXMucGFyYW1zLGE9dGhpcy5wcmV2aW91c0luZGV4O2lmKCFzLmNzc01vZGUpe3MuYXV0b0hlaWdodCYmdGhpcy51cGRhdGVBdXRvSGVpZ2h0KCk7dmFyIHI9dDtpZihyfHwocj1pPmE/XCJuZXh0XCI6aTxhP1wicHJldlwiOlwicmVzZXRcIiksdGhpcy5lbWl0KFwidHJhbnNpdGlvblN0YXJ0XCIpLGUmJmkhPT1hKXtpZihcInJlc2V0XCI9PT1yKXJldHVybiB2b2lkIHRoaXMuZW1pdChcInNsaWRlUmVzZXRUcmFuc2l0aW9uU3RhcnRcIik7dGhpcy5lbWl0KFwic2xpZGVDaGFuZ2VUcmFuc2l0aW9uU3RhcnRcIiksXCJuZXh0XCI9PT1yP3RoaXMuZW1pdChcInNsaWRlTmV4dFRyYW5zaXRpb25TdGFydFwiKTp0aGlzLmVtaXQoXCJzbGlkZVByZXZUcmFuc2l0aW9uU3RhcnRcIil9fX0sdHJhbnNpdGlvbkVuZDpmdW5jdGlvbihlLHQpe3ZvaWQgMD09PWUmJihlPSEwKTt2YXIgaT10aGlzLmFjdGl2ZUluZGV4LHM9dGhpcy5wcmV2aW91c0luZGV4LGE9dGhpcy5wYXJhbXM7aWYodGhpcy5hbmltYXRpbmc9ITEsIWEuY3NzTW9kZSl7dGhpcy5zZXRUcmFuc2l0aW9uKDApO3ZhciByPXQ7aWYocnx8KHI9aT5zP1wibmV4dFwiOmk8cz9cInByZXZcIjpcInJlc2V0XCIpLHRoaXMuZW1pdChcInRyYW5zaXRpb25FbmRcIiksZSYmaSE9PXMpe2lmKFwicmVzZXRcIj09PXIpcmV0dXJuIHZvaWQgdGhpcy5lbWl0KFwic2xpZGVSZXNldFRyYW5zaXRpb25FbmRcIik7dGhpcy5lbWl0KFwic2xpZGVDaGFuZ2VUcmFuc2l0aW9uRW5kXCIpLFwibmV4dFwiPT09cj90aGlzLmVtaXQoXCJzbGlkZU5leHRUcmFuc2l0aW9uRW5kXCIpOnRoaXMuZW1pdChcInNsaWRlUHJldlRyYW5zaXRpb25FbmRcIil9fX19O3ZhciB1PXtzbGlkZVRvOmZ1bmN0aW9uKGUsdCxpLHMpe3ZhciBhO3ZvaWQgMD09PWUmJihlPTApLHZvaWQgMD09PXQmJih0PXRoaXMucGFyYW1zLnNwZWVkKSx2b2lkIDA9PT1pJiYoaT0hMCk7dmFyIHI9dGhpcyxuPWU7bjwwJiYobj0wKTt2YXIgbz1yLnBhcmFtcyxsPXIuc25hcEdyaWQsZD1yLnNsaWRlc0dyaWQsaD1yLnByZXZpb3VzSW5kZXgscD1yLmFjdGl2ZUluZGV4LGM9ci5ydGxUcmFuc2xhdGUsdT1yLndyYXBwZXJFbDtpZihyLmFuaW1hdGluZyYmby5wcmV2ZW50SW50ZXJhY3Rpb25PblRyYW5zaXRpb24pcmV0dXJuITE7dmFyIHY9TWF0aC5taW4oci5wYXJhbXMuc2xpZGVzUGVyR3JvdXBTa2lwLG4pLGY9ditNYXRoLmZsb29yKChuLXYpL3IucGFyYW1zLnNsaWRlc1Blckdyb3VwKTtmPj1sLmxlbmd0aCYmKGY9bC5sZW5ndGgtMSksKHB8fG8uaW5pdGlhbFNsaWRlfHwwKT09PShofHwwKSYmaSYmci5lbWl0KFwiYmVmb3JlU2xpZGVDaGFuZ2VTdGFydFwiKTt2YXIgbSxnPS1sW2ZdO2lmKHIudXBkYXRlUHJvZ3Jlc3MoZyksby5ub3JtYWxpemVTbGlkZUluZGV4KWZvcih2YXIgYj0wO2I8ZC5sZW5ndGg7Yis9MSktTWF0aC5mbG9vcigxMDAqZyk+PU1hdGguZmxvb3IoMTAwKmRbYl0pJiYobj1iKTtpZihyLmluaXRpYWxpemVkJiZuIT09cCl7aWYoIXIuYWxsb3dTbGlkZU5leHQmJmc8ci50cmFuc2xhdGUmJmc8ci5taW5UcmFuc2xhdGUoKSlyZXR1cm4hMTtpZighci5hbGxvd1NsaWRlUHJldiYmZz5yLnRyYW5zbGF0ZSYmZz5yLm1heFRyYW5zbGF0ZSgpJiYocHx8MCkhPT1uKXJldHVybiExfWlmKG09bj5wP1wibmV4dFwiOm48cD9cInByZXZcIjpcInJlc2V0XCIsYyYmLWc9PT1yLnRyYW5zbGF0ZXx8IWMmJmc9PT1yLnRyYW5zbGF0ZSlyZXR1cm4gci51cGRhdGVBY3RpdmVJbmRleChuKSxvLmF1dG9IZWlnaHQmJnIudXBkYXRlQXV0b0hlaWdodCgpLHIudXBkYXRlU2xpZGVzQ2xhc3NlcygpLFwic2xpZGVcIiE9PW8uZWZmZWN0JiZyLnNldFRyYW5zbGF0ZShnKSxcInJlc2V0XCIhPT1tJiYoci50cmFuc2l0aW9uU3RhcnQoaSxtKSxyLnRyYW5zaXRpb25FbmQoaSxtKSksITE7aWYoby5jc3NNb2RlKXt2YXIgdz1yLmlzSG9yaXpvbnRhbCgpLHk9LWc7cmV0dXJuIGMmJih5PXUuc2Nyb2xsV2lkdGgtdS5vZmZzZXRXaWR0aC15KSwwPT09dD91W3c/XCJzY3JvbGxMZWZ0XCI6XCJzY3JvbGxUb3BcIl09eTp1LnNjcm9sbFRvP3Uuc2Nyb2xsVG8oKChhPXt9KVt3P1wibGVmdFwiOlwidG9wXCJdPXksYS5iZWhhdmlvcj1cInNtb290aFwiLGEpKTp1W3c/XCJzY3JvbGxMZWZ0XCI6XCJzY3JvbGxUb3BcIl09eSwhMH1yZXR1cm4gMD09PXQ/KHIuc2V0VHJhbnNpdGlvbigwKSxyLnNldFRyYW5zbGF0ZShnKSxyLnVwZGF0ZUFjdGl2ZUluZGV4KG4pLHIudXBkYXRlU2xpZGVzQ2xhc3NlcygpLHIuZW1pdChcImJlZm9yZVRyYW5zaXRpb25TdGFydFwiLHQscyksci50cmFuc2l0aW9uU3RhcnQoaSxtKSxyLnRyYW5zaXRpb25FbmQoaSxtKSk6KHIuc2V0VHJhbnNpdGlvbih0KSxyLnNldFRyYW5zbGF0ZShnKSxyLnVwZGF0ZUFjdGl2ZUluZGV4KG4pLHIudXBkYXRlU2xpZGVzQ2xhc3NlcygpLHIuZW1pdChcImJlZm9yZVRyYW5zaXRpb25TdGFydFwiLHQscyksci50cmFuc2l0aW9uU3RhcnQoaSxtKSxyLmFuaW1hdGluZ3x8KHIuYW5pbWF0aW5nPSEwLHIub25TbGlkZVRvV3JhcHBlclRyYW5zaXRpb25FbmR8fChyLm9uU2xpZGVUb1dyYXBwZXJUcmFuc2l0aW9uRW5kPWZ1bmN0aW9uKGUpe3ImJiFyLmRlc3Ryb3llZCYmZS50YXJnZXQ9PT10aGlzJiYoci4kd3JhcHBlckVsWzBdLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ0cmFuc2l0aW9uZW5kXCIsci5vblNsaWRlVG9XcmFwcGVyVHJhbnNpdGlvbkVuZCksci4kd3JhcHBlckVsWzBdLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ3ZWJraXRUcmFuc2l0aW9uRW5kXCIsci5vblNsaWRlVG9XcmFwcGVyVHJhbnNpdGlvbkVuZCksci5vblNsaWRlVG9XcmFwcGVyVHJhbnNpdGlvbkVuZD1udWxsLGRlbGV0ZSByLm9uU2xpZGVUb1dyYXBwZXJUcmFuc2l0aW9uRW5kLHIudHJhbnNpdGlvbkVuZChpLG0pKX0pLHIuJHdyYXBwZXJFbFswXS5hZGRFdmVudExpc3RlbmVyKFwidHJhbnNpdGlvbmVuZFwiLHIub25TbGlkZVRvV3JhcHBlclRyYW5zaXRpb25FbmQpLHIuJHdyYXBwZXJFbFswXS5hZGRFdmVudExpc3RlbmVyKFwid2Via2l0VHJhbnNpdGlvbkVuZFwiLHIub25TbGlkZVRvV3JhcHBlclRyYW5zaXRpb25FbmQpKSksITB9LHNsaWRlVG9Mb29wOmZ1bmN0aW9uKGUsdCxpLHMpe3ZvaWQgMD09PWUmJihlPTApLHZvaWQgMD09PXQmJih0PXRoaXMucGFyYW1zLnNwZWVkKSx2b2lkIDA9PT1pJiYoaT0hMCk7dmFyIGE9ZTtyZXR1cm4gdGhpcy5wYXJhbXMubG9vcCYmKGErPXRoaXMubG9vcGVkU2xpZGVzKSx0aGlzLnNsaWRlVG8oYSx0LGkscyl9LHNsaWRlTmV4dDpmdW5jdGlvbihlLHQsaSl7dm9pZCAwPT09ZSYmKGU9dGhpcy5wYXJhbXMuc3BlZWQpLHZvaWQgMD09PXQmJih0PSEwKTt2YXIgcz10aGlzLnBhcmFtcyxhPXRoaXMuYW5pbWF0aW5nLHI9dGhpcy5hY3RpdmVJbmRleDxzLnNsaWRlc1Blckdyb3VwU2tpcD8xOnMuc2xpZGVzUGVyR3JvdXA7aWYocy5sb29wKXtpZihhKXJldHVybiExO3RoaXMubG9vcEZpeCgpLHRoaXMuX2NsaWVudExlZnQ9dGhpcy4kd3JhcHBlckVsWzBdLmNsaWVudExlZnR9cmV0dXJuIHRoaXMuc2xpZGVUbyh0aGlzLmFjdGl2ZUluZGV4K3IsZSx0LGkpfSxzbGlkZVByZXY6ZnVuY3Rpb24oZSx0LGkpe3ZvaWQgMD09PWUmJihlPXRoaXMucGFyYW1zLnNwZWVkKSx2b2lkIDA9PT10JiYodD0hMCk7dmFyIHM9dGhpcy5wYXJhbXMsYT10aGlzLmFuaW1hdGluZyxyPXRoaXMuc25hcEdyaWQsbj10aGlzLnNsaWRlc0dyaWQsbz10aGlzLnJ0bFRyYW5zbGF0ZTtpZihzLmxvb3Ape2lmKGEpcmV0dXJuITE7dGhpcy5sb29wRml4KCksdGhpcy5fY2xpZW50TGVmdD10aGlzLiR3cmFwcGVyRWxbMF0uY2xpZW50TGVmdH1mdW5jdGlvbiBsKGUpe3JldHVybiBlPDA/LU1hdGguZmxvb3IoTWF0aC5hYnMoZSkpOk1hdGguZmxvb3IoZSl9dmFyIGQsaD1sKG8/dGhpcy50cmFuc2xhdGU6LXRoaXMudHJhbnNsYXRlKSxwPXIubWFwKChmdW5jdGlvbihlKXtyZXR1cm4gbChlKX0pKSxjPShuLm1hcCgoZnVuY3Rpb24oZSl7cmV0dXJuIGwoZSl9KSkscltwLmluZGV4T2YoaCldLHJbcC5pbmRleE9mKGgpLTFdKTtyZXR1cm4gdm9pZCAwPT09YyYmcy5jc3NNb2RlJiZyLmZvckVhY2goKGZ1bmN0aW9uKGUpeyFjJiZoPj1lJiYoYz1lKX0pKSx2b2lkIDAhPT1jJiYoZD1uLmluZGV4T2YoYykpPDAmJihkPXRoaXMuYWN0aXZlSW5kZXgtMSksdGhpcy5zbGlkZVRvKGQsZSx0LGkpfSxzbGlkZVJlc2V0OmZ1bmN0aW9uKGUsdCxpKXtyZXR1cm4gdm9pZCAwPT09ZSYmKGU9dGhpcy5wYXJhbXMuc3BlZWQpLHZvaWQgMD09PXQmJih0PSEwKSx0aGlzLnNsaWRlVG8odGhpcy5hY3RpdmVJbmRleCxlLHQsaSl9LHNsaWRlVG9DbG9zZXN0OmZ1bmN0aW9uKGUsdCxpLHMpe3ZvaWQgMD09PWUmJihlPXRoaXMucGFyYW1zLnNwZWVkKSx2b2lkIDA9PT10JiYodD0hMCksdm9pZCAwPT09cyYmKHM9LjUpO3ZhciBhPXRoaXMuYWN0aXZlSW5kZXgscj1NYXRoLm1pbih0aGlzLnBhcmFtcy5zbGlkZXNQZXJHcm91cFNraXAsYSksbj1yK01hdGguZmxvb3IoKGEtcikvdGhpcy5wYXJhbXMuc2xpZGVzUGVyR3JvdXApLG89dGhpcy5ydGxUcmFuc2xhdGU/dGhpcy50cmFuc2xhdGU6LXRoaXMudHJhbnNsYXRlO2lmKG8+PXRoaXMuc25hcEdyaWRbbl0pe3ZhciBsPXRoaXMuc25hcEdyaWRbbl07by1sPih0aGlzLnNuYXBHcmlkW24rMV0tbCkqcyYmKGErPXRoaXMucGFyYW1zLnNsaWRlc1Blckdyb3VwKX1lbHNle3ZhciBkPXRoaXMuc25hcEdyaWRbbi0xXTtvLWQ8PSh0aGlzLnNuYXBHcmlkW25dLWQpKnMmJihhLT10aGlzLnBhcmFtcy5zbGlkZXNQZXJHcm91cCl9cmV0dXJuIGE9TWF0aC5tYXgoYSwwKSxhPU1hdGgubWluKGEsdGhpcy5zbGlkZXNHcmlkLmxlbmd0aC0xKSx0aGlzLnNsaWRlVG8oYSxlLHQsaSl9LHNsaWRlVG9DbGlja2VkU2xpZGU6ZnVuY3Rpb24oKXt2YXIgZSx0PXRoaXMsaT10LnBhcmFtcyxhPXQuJHdyYXBwZXJFbCxyPVwiYXV0b1wiPT09aS5zbGlkZXNQZXJWaWV3P3Quc2xpZGVzUGVyVmlld0R5bmFtaWMoKTppLnNsaWRlc1BlclZpZXcsbz10LmNsaWNrZWRJbmRleDtpZihpLmxvb3Ape2lmKHQuYW5pbWF0aW5nKXJldHVybjtlPXBhcnNlSW50KHModC5jbGlja2VkU2xpZGUpLmF0dHIoXCJkYXRhLXN3aXBlci1zbGlkZS1pbmRleFwiKSwxMCksaS5jZW50ZXJlZFNsaWRlcz9vPHQubG9vcGVkU2xpZGVzLXIvMnx8bz50LnNsaWRlcy5sZW5ndGgtdC5sb29wZWRTbGlkZXMrci8yPyh0Lmxvb3BGaXgoKSxvPWEuY2hpbGRyZW4oXCIuXCIraS5zbGlkZUNsYXNzKydbZGF0YS1zd2lwZXItc2xpZGUtaW5kZXg9XCInK2UrJ1wiXTpub3QoLicraS5zbGlkZUR1cGxpY2F0ZUNsYXNzK1wiKVwiKS5lcSgwKS5pbmRleCgpLG4ubmV4dFRpY2soKGZ1bmN0aW9uKCl7dC5zbGlkZVRvKG8pfSkpKTp0LnNsaWRlVG8obyk6bz50LnNsaWRlcy5sZW5ndGgtcj8odC5sb29wRml4KCksbz1hLmNoaWxkcmVuKFwiLlwiK2kuc2xpZGVDbGFzcysnW2RhdGEtc3dpcGVyLXNsaWRlLWluZGV4PVwiJytlKydcIl06bm90KC4nK2kuc2xpZGVEdXBsaWNhdGVDbGFzcytcIilcIikuZXEoMCkuaW5kZXgoKSxuLm5leHRUaWNrKChmdW5jdGlvbigpe3Quc2xpZGVUbyhvKX0pKSk6dC5zbGlkZVRvKG8pfWVsc2UgdC5zbGlkZVRvKG8pfX07dmFyIHY9e2xvb3BDcmVhdGU6ZnVuY3Rpb24oKXt2YXIgdD10aGlzLGk9dC5wYXJhbXMsYT10LiR3cmFwcGVyRWw7YS5jaGlsZHJlbihcIi5cIitpLnNsaWRlQ2xhc3MrXCIuXCIraS5zbGlkZUR1cGxpY2F0ZUNsYXNzKS5yZW1vdmUoKTt2YXIgcj1hLmNoaWxkcmVuKFwiLlwiK2kuc2xpZGVDbGFzcyk7aWYoaS5sb29wRmlsbEdyb3VwV2l0aEJsYW5rKXt2YXIgbj1pLnNsaWRlc1Blckdyb3VwLXIubGVuZ3RoJWkuc2xpZGVzUGVyR3JvdXA7aWYobiE9PWkuc2xpZGVzUGVyR3JvdXApe2Zvcih2YXIgbz0wO288bjtvKz0xKXt2YXIgbD1zKGUuY3JlYXRlRWxlbWVudChcImRpdlwiKSkuYWRkQ2xhc3MoaS5zbGlkZUNsYXNzK1wiIFwiK2kuc2xpZGVCbGFua0NsYXNzKTthLmFwcGVuZChsKX1yPWEuY2hpbGRyZW4oXCIuXCIraS5zbGlkZUNsYXNzKX19XCJhdXRvXCIhPT1pLnNsaWRlc1BlclZpZXd8fGkubG9vcGVkU2xpZGVzfHwoaS5sb29wZWRTbGlkZXM9ci5sZW5ndGgpLHQubG9vcGVkU2xpZGVzPU1hdGguY2VpbChwYXJzZUZsb2F0KGkubG9vcGVkU2xpZGVzfHxpLnNsaWRlc1BlclZpZXcsMTApKSx0Lmxvb3BlZFNsaWRlcys9aS5sb29wQWRkaXRpb25hbFNsaWRlcyx0Lmxvb3BlZFNsaWRlcz5yLmxlbmd0aCYmKHQubG9vcGVkU2xpZGVzPXIubGVuZ3RoKTt2YXIgZD1bXSxoPVtdO3IuZWFjaCgoZnVuY3Rpb24oZSxpKXt2YXIgYT1zKGkpO2U8dC5sb29wZWRTbGlkZXMmJmgucHVzaChpKSxlPHIubGVuZ3RoJiZlPj1yLmxlbmd0aC10Lmxvb3BlZFNsaWRlcyYmZC5wdXNoKGkpLGEuYXR0cihcImRhdGEtc3dpcGVyLXNsaWRlLWluZGV4XCIsZSl9KSk7Zm9yKHZhciBwPTA7cDxoLmxlbmd0aDtwKz0xKWEuYXBwZW5kKHMoaFtwXS5jbG9uZU5vZGUoITApKS5hZGRDbGFzcyhpLnNsaWRlRHVwbGljYXRlQ2xhc3MpKTtmb3IodmFyIGM9ZC5sZW5ndGgtMTtjPj0wO2MtPTEpYS5wcmVwZW5kKHMoZFtjXS5jbG9uZU5vZGUoITApKS5hZGRDbGFzcyhpLnNsaWRlRHVwbGljYXRlQ2xhc3MpKX0sbG9vcEZpeDpmdW5jdGlvbigpe3RoaXMuZW1pdChcImJlZm9yZUxvb3BGaXhcIik7dmFyIGUsdD10aGlzLmFjdGl2ZUluZGV4LGk9dGhpcy5zbGlkZXMscz10aGlzLmxvb3BlZFNsaWRlcyxhPXRoaXMuYWxsb3dTbGlkZVByZXYscj10aGlzLmFsbG93U2xpZGVOZXh0LG49dGhpcy5zbmFwR3JpZCxvPXRoaXMucnRsVHJhbnNsYXRlO3RoaXMuYWxsb3dTbGlkZVByZXY9ITAsdGhpcy5hbGxvd1NsaWRlTmV4dD0hMDt2YXIgbD0tblt0XS10aGlzLmdldFRyYW5zbGF0ZSgpO2lmKHQ8cyllPWkubGVuZ3RoLTMqcyt0LGUrPXMsdGhpcy5zbGlkZVRvKGUsMCwhMSwhMCkmJjAhPT1sJiZ0aGlzLnNldFRyYW5zbGF0ZSgobz8tdGhpcy50cmFuc2xhdGU6dGhpcy50cmFuc2xhdGUpLWwpO2Vsc2UgaWYodD49aS5sZW5ndGgtcyl7ZT0taS5sZW5ndGgrdCtzLGUrPXMsdGhpcy5zbGlkZVRvKGUsMCwhMSwhMCkmJjAhPT1sJiZ0aGlzLnNldFRyYW5zbGF0ZSgobz8tdGhpcy50cmFuc2xhdGU6dGhpcy50cmFuc2xhdGUpLWwpfXRoaXMuYWxsb3dTbGlkZVByZXY9YSx0aGlzLmFsbG93U2xpZGVOZXh0PXIsdGhpcy5lbWl0KFwibG9vcEZpeFwiKX0sbG9vcERlc3Ryb3k6ZnVuY3Rpb24oKXt2YXIgZT10aGlzLiR3cmFwcGVyRWwsdD10aGlzLnBhcmFtcyxpPXRoaXMuc2xpZGVzO2UuY2hpbGRyZW4oXCIuXCIrdC5zbGlkZUNsYXNzK1wiLlwiK3Quc2xpZGVEdXBsaWNhdGVDbGFzcytcIiwuXCIrdC5zbGlkZUNsYXNzK1wiLlwiK3Quc2xpZGVCbGFua0NsYXNzKS5yZW1vdmUoKSxpLnJlbW92ZUF0dHIoXCJkYXRhLXN3aXBlci1zbGlkZS1pbmRleFwiKX19O3ZhciBmPXtzZXRHcmFiQ3Vyc29yOmZ1bmN0aW9uKGUpe2lmKCEoby50b3VjaHx8IXRoaXMucGFyYW1zLnNpbXVsYXRlVG91Y2h8fHRoaXMucGFyYW1zLndhdGNoT3ZlcmZsb3cmJnRoaXMuaXNMb2NrZWR8fHRoaXMucGFyYW1zLmNzc01vZGUpKXt2YXIgdD10aGlzLmVsO3Quc3R5bGUuY3Vyc29yPVwibW92ZVwiLHQuc3R5bGUuY3Vyc29yPWU/XCItd2Via2l0LWdyYWJiaW5nXCI6XCItd2Via2l0LWdyYWJcIix0LnN0eWxlLmN1cnNvcj1lP1wiLW1vei1ncmFiYmluXCI6XCItbW96LWdyYWJcIix0LnN0eWxlLmN1cnNvcj1lP1wiZ3JhYmJpbmdcIjpcImdyYWJcIn19LHVuc2V0R3JhYkN1cnNvcjpmdW5jdGlvbigpe28udG91Y2h8fHRoaXMucGFyYW1zLndhdGNoT3ZlcmZsb3cmJnRoaXMuaXNMb2NrZWR8fHRoaXMucGFyYW1zLmNzc01vZGV8fCh0aGlzLmVsLnN0eWxlLmN1cnNvcj1cIlwiKX19O3ZhciBtLGcsYix3LHkseCxULEUsUyxDLE0sUCx6LGssJCxMPXthcHBlbmRTbGlkZTpmdW5jdGlvbihlKXt2YXIgdD10aGlzLiR3cmFwcGVyRWwsaT10aGlzLnBhcmFtcztpZihpLmxvb3AmJnRoaXMubG9vcERlc3Ryb3koKSxcIm9iamVjdFwiPT10eXBlb2YgZSYmXCJsZW5ndGhcImluIGUpZm9yKHZhciBzPTA7czxlLmxlbmd0aDtzKz0xKWVbc10mJnQuYXBwZW5kKGVbc10pO2Vsc2UgdC5hcHBlbmQoZSk7aS5sb29wJiZ0aGlzLmxvb3BDcmVhdGUoKSxpLm9ic2VydmVyJiZvLm9ic2VydmVyfHx0aGlzLnVwZGF0ZSgpfSxwcmVwZW5kU2xpZGU6ZnVuY3Rpb24oZSl7dmFyIHQ9dGhpcy5wYXJhbXMsaT10aGlzLiR3cmFwcGVyRWwscz10aGlzLmFjdGl2ZUluZGV4O3QubG9vcCYmdGhpcy5sb29wRGVzdHJveSgpO3ZhciBhPXMrMTtpZihcIm9iamVjdFwiPT10eXBlb2YgZSYmXCJsZW5ndGhcImluIGUpe2Zvcih2YXIgcj0wO3I8ZS5sZW5ndGg7cis9MSllW3JdJiZpLnByZXBlbmQoZVtyXSk7YT1zK2UubGVuZ3RofWVsc2UgaS5wcmVwZW5kKGUpO3QubG9vcCYmdGhpcy5sb29wQ3JlYXRlKCksdC5vYnNlcnZlciYmby5vYnNlcnZlcnx8dGhpcy51cGRhdGUoKSx0aGlzLnNsaWRlVG8oYSwwLCExKX0sYWRkU2xpZGU6ZnVuY3Rpb24oZSx0KXt2YXIgaT10aGlzLiR3cmFwcGVyRWwscz10aGlzLnBhcmFtcyxhPXRoaXMuYWN0aXZlSW5kZXg7cy5sb29wJiYoYS09dGhpcy5sb29wZWRTbGlkZXMsdGhpcy5sb29wRGVzdHJveSgpLHRoaXMuc2xpZGVzPWkuY2hpbGRyZW4oXCIuXCIrcy5zbGlkZUNsYXNzKSk7dmFyIHI9dGhpcy5zbGlkZXMubGVuZ3RoO2lmKGU8PTApdGhpcy5wcmVwZW5kU2xpZGUodCk7ZWxzZSBpZihlPj1yKXRoaXMuYXBwZW5kU2xpZGUodCk7ZWxzZXtmb3IodmFyIG49YT5lP2ErMTphLGw9W10sZD1yLTE7ZD49ZTtkLT0xKXt2YXIgaD10aGlzLnNsaWRlcy5lcShkKTtoLnJlbW92ZSgpLGwudW5zaGlmdChoKX1pZihcIm9iamVjdFwiPT10eXBlb2YgdCYmXCJsZW5ndGhcImluIHQpe2Zvcih2YXIgcD0wO3A8dC5sZW5ndGg7cCs9MSl0W3BdJiZpLmFwcGVuZCh0W3BdKTtuPWE+ZT9hK3QubGVuZ3RoOmF9ZWxzZSBpLmFwcGVuZCh0KTtmb3IodmFyIGM9MDtjPGwubGVuZ3RoO2MrPTEpaS5hcHBlbmQobFtjXSk7cy5sb29wJiZ0aGlzLmxvb3BDcmVhdGUoKSxzLm9ic2VydmVyJiZvLm9ic2VydmVyfHx0aGlzLnVwZGF0ZSgpLHMubG9vcD90aGlzLnNsaWRlVG8obit0aGlzLmxvb3BlZFNsaWRlcywwLCExKTp0aGlzLnNsaWRlVG8obiwwLCExKX19LHJlbW92ZVNsaWRlOmZ1bmN0aW9uKGUpe3ZhciB0PXRoaXMucGFyYW1zLGk9dGhpcy4kd3JhcHBlckVsLHM9dGhpcy5hY3RpdmVJbmRleDt0Lmxvb3AmJihzLT10aGlzLmxvb3BlZFNsaWRlcyx0aGlzLmxvb3BEZXN0cm95KCksdGhpcy5zbGlkZXM9aS5jaGlsZHJlbihcIi5cIit0LnNsaWRlQ2xhc3MpKTt2YXIgYSxyPXM7aWYoXCJvYmplY3RcIj09dHlwZW9mIGUmJlwibGVuZ3RoXCJpbiBlKXtmb3IodmFyIG49MDtuPGUubGVuZ3RoO24rPTEpYT1lW25dLHRoaXMuc2xpZGVzW2FdJiZ0aGlzLnNsaWRlcy5lcShhKS5yZW1vdmUoKSxhPHImJihyLT0xKTtyPU1hdGgubWF4KHIsMCl9ZWxzZSBhPWUsdGhpcy5zbGlkZXNbYV0mJnRoaXMuc2xpZGVzLmVxKGEpLnJlbW92ZSgpLGE8ciYmKHItPTEpLHI9TWF0aC5tYXgociwwKTt0Lmxvb3AmJnRoaXMubG9vcENyZWF0ZSgpLHQub2JzZXJ2ZXImJm8ub2JzZXJ2ZXJ8fHRoaXMudXBkYXRlKCksdC5sb29wP3RoaXMuc2xpZGVUbyhyK3RoaXMubG9vcGVkU2xpZGVzLDAsITEpOnRoaXMuc2xpZGVUbyhyLDAsITEpfSxyZW1vdmVBbGxTbGlkZXM6ZnVuY3Rpb24oKXtmb3IodmFyIGU9W10sdD0wO3Q8dGhpcy5zbGlkZXMubGVuZ3RoO3QrPTEpZS5wdXNoKHQpO3RoaXMucmVtb3ZlU2xpZGUoZSl9fSxJPShtPXQubmF2aWdhdG9yLnBsYXRmb3JtLGc9dC5uYXZpZ2F0b3IudXNlckFnZW50LGI9e2lvczohMSxhbmRyb2lkOiExLGFuZHJvaWRDaHJvbWU6ITEsZGVza3RvcDohMSxpcGhvbmU6ITEsaXBvZDohMSxpcGFkOiExLGVkZ2U6ITEsaWU6ITEsZmlyZWZveDohMSxtYWNvczohMSx3aW5kb3dzOiExLGNvcmRvdmE6ISghdC5jb3Jkb3ZhJiYhdC5waG9uZWdhcCkscGhvbmVnYXA6ISghdC5jb3Jkb3ZhJiYhdC5waG9uZWdhcCksZWxlY3Ryb246ITF9LHc9dC5zY3JlZW4ud2lkdGgseT10LnNjcmVlbi5oZWlnaHQseD1nLm1hdGNoKC8oQW5kcm9pZCk7P1tcXHNcXC9dKyhbXFxkLl0rKT8vKSxUPWcubWF0Y2goLyhpUGFkKS4qT1NcXHMoW1xcZF9dKykvKSxFPWcubWF0Y2goLyhpUG9kKSguKk9TXFxzKFtcXGRfXSspKT8vKSxTPSFUJiZnLm1hdGNoKC8oaVBob25lXFxzT1N8aU9TKVxccyhbXFxkX10rKS8pLEM9Zy5pbmRleE9mKFwiTVNJRSBcIik+PTB8fGcuaW5kZXhPZihcIlRyaWRlbnQvXCIpPj0wLE09Zy5pbmRleE9mKFwiRWRnZS9cIik+PTAsUD1nLmluZGV4T2YoXCJHZWNrby9cIik+PTAmJmcuaW5kZXhPZihcIkZpcmVmb3gvXCIpPj0wLHo9XCJXaW4zMlwiPT09bSxrPWcudG9Mb3dlckNhc2UoKS5pbmRleE9mKFwiZWxlY3Ryb25cIik+PTAsJD1cIk1hY0ludGVsXCI9PT1tLCFUJiYkJiZvLnRvdWNoJiYoMTAyND09PXcmJjEzNjY9PT15fHw4MzQ9PT13JiYxMTk0PT09eXx8ODM0PT09dyYmMTExMj09PXl8fDc2OD09PXcmJjEwMjQ9PT15KSYmKFQ9Zy5tYXRjaCgvKFZlcnNpb24pXFwvKFtcXGQuXSspLyksJD0hMSksYi5pZT1DLGIuZWRnZT1NLGIuZmlyZWZveD1QLHgmJiF6JiYoYi5vcz1cImFuZHJvaWRcIixiLm9zVmVyc2lvbj14WzJdLGIuYW5kcm9pZD0hMCxiLmFuZHJvaWRDaHJvbWU9Zy50b0xvd2VyQ2FzZSgpLmluZGV4T2YoXCJjaHJvbWVcIik+PTApLChUfHxTfHxFKSYmKGIub3M9XCJpb3NcIixiLmlvcz0hMCksUyYmIUUmJihiLm9zVmVyc2lvbj1TWzJdLnJlcGxhY2UoL18vZyxcIi5cIiksYi5pcGhvbmU9ITApLFQmJihiLm9zVmVyc2lvbj1UWzJdLnJlcGxhY2UoL18vZyxcIi5cIiksYi5pcGFkPSEwKSxFJiYoYi5vc1ZlcnNpb249RVszXT9FWzNdLnJlcGxhY2UoL18vZyxcIi5cIik6bnVsbCxiLmlwb2Q9ITApLGIuaW9zJiZiLm9zVmVyc2lvbiYmZy5pbmRleE9mKFwiVmVyc2lvbi9cIik+PTAmJlwiMTBcIj09PWIub3NWZXJzaW9uLnNwbGl0KFwiLlwiKVswXSYmKGIub3NWZXJzaW9uPWcudG9Mb3dlckNhc2UoKS5zcGxpdChcInZlcnNpb24vXCIpWzFdLnNwbGl0KFwiIFwiKVswXSksYi53ZWJWaWV3PSEoIShTfHxUfHxFKXx8IWcubWF0Y2goLy4qQXBwbGVXZWJLaXQoPyEuKlNhZmFyaSkvaSkmJiF0Lm5hdmlnYXRvci5zdGFuZGFsb25lKXx8dC5tYXRjaE1lZGlhJiZ0Lm1hdGNoTWVkaWEoXCIoZGlzcGxheS1tb2RlOiBzdGFuZGFsb25lKVwiKS5tYXRjaGVzLGIud2Vidmlldz1iLndlYlZpZXcsYi5zdGFuZGFsb25lPWIud2ViVmlldyxiLmRlc2t0b3A9IShiLmlvc3x8Yi5hbmRyb2lkKXx8ayxiLmRlc2t0b3AmJihiLmVsZWN0cm9uPWssYi5tYWNvcz0kLGIud2luZG93cz16LGIubWFjb3MmJihiLm9zPVwibWFjb3NcIiksYi53aW5kb3dzJiYoYi5vcz1cIndpbmRvd3NcIikpLGIucGl4ZWxSYXRpbz10LmRldmljZVBpeGVsUmF0aW98fDEsYik7ZnVuY3Rpb24gRChpKXt2YXIgYT10aGlzLnRvdWNoRXZlbnRzRGF0YSxyPXRoaXMucGFyYW1zLG89dGhpcy50b3VjaGVzO2lmKCF0aGlzLmFuaW1hdGluZ3x8IXIucHJldmVudEludGVyYWN0aW9uT25UcmFuc2l0aW9uKXt2YXIgbD1pO2wub3JpZ2luYWxFdmVudCYmKGw9bC5vcmlnaW5hbEV2ZW50KTt2YXIgZD1zKGwudGFyZ2V0KTtpZigoXCJ3cmFwcGVyXCIhPT1yLnRvdWNoRXZlbnRzVGFyZ2V0fHxkLmNsb3Nlc3QodGhpcy53cmFwcGVyRWwpLmxlbmd0aCkmJihhLmlzVG91Y2hFdmVudD1cInRvdWNoc3RhcnRcIj09PWwudHlwZSwoYS5pc1RvdWNoRXZlbnR8fCEoXCJ3aGljaFwiaW4gbCl8fDMhPT1sLndoaWNoKSYmISghYS5pc1RvdWNoRXZlbnQmJlwiYnV0dG9uXCJpbiBsJiZsLmJ1dHRvbj4wfHxhLmlzVG91Y2hlZCYmYS5pc01vdmVkKSkpaWYoci5ub1N3aXBpbmcmJmQuY2xvc2VzdChyLm5vU3dpcGluZ1NlbGVjdG9yP3Iubm9Td2lwaW5nU2VsZWN0b3I6XCIuXCIrci5ub1N3aXBpbmdDbGFzcylbMF0pdGhpcy5hbGxvd0NsaWNrPSEwO2Vsc2UgaWYoIXIuc3dpcGVIYW5kbGVyfHxkLmNsb3Nlc3Qoci5zd2lwZUhhbmRsZXIpWzBdKXtvLmN1cnJlbnRYPVwidG91Y2hzdGFydFwiPT09bC50eXBlP2wudGFyZ2V0VG91Y2hlc1swXS5wYWdlWDpsLnBhZ2VYLG8uY3VycmVudFk9XCJ0b3VjaHN0YXJ0XCI9PT1sLnR5cGU/bC50YXJnZXRUb3VjaGVzWzBdLnBhZ2VZOmwucGFnZVk7dmFyIGg9by5jdXJyZW50WCxwPW8uY3VycmVudFksYz1yLmVkZ2VTd2lwZURldGVjdGlvbnx8ci5pT1NFZGdlU3dpcGVEZXRlY3Rpb24sdT1yLmVkZ2VTd2lwZVRocmVzaG9sZHx8ci5pT1NFZGdlU3dpcGVUaHJlc2hvbGQ7aWYoIWN8fCEoaDw9dXx8aD49dC5zY3JlZW4ud2lkdGgtdSkpe2lmKG4uZXh0ZW5kKGEse2lzVG91Y2hlZDohMCxpc01vdmVkOiExLGFsbG93VG91Y2hDYWxsYmFja3M6ITAsaXNTY3JvbGxpbmc6dm9pZCAwLHN0YXJ0TW92aW5nOnZvaWQgMH0pLG8uc3RhcnRYPWgsby5zdGFydFk9cCxhLnRvdWNoU3RhcnRUaW1lPW4ubm93KCksdGhpcy5hbGxvd0NsaWNrPSEwLHRoaXMudXBkYXRlU2l6ZSgpLHRoaXMuc3dpcGVEaXJlY3Rpb249dm9pZCAwLHIudGhyZXNob2xkPjAmJihhLmFsbG93VGhyZXNob2xkTW92ZT0hMSksXCJ0b3VjaHN0YXJ0XCIhPT1sLnR5cGUpe3ZhciB2PSEwO2QuaXMoYS5mb3JtRWxlbWVudHMpJiYodj0hMSksZS5hY3RpdmVFbGVtZW50JiZzKGUuYWN0aXZlRWxlbWVudCkuaXMoYS5mb3JtRWxlbWVudHMpJiZlLmFjdGl2ZUVsZW1lbnQhPT1kWzBdJiZlLmFjdGl2ZUVsZW1lbnQuYmx1cigpO3ZhciBmPXYmJnRoaXMuYWxsb3dUb3VjaE1vdmUmJnIudG91Y2hTdGFydFByZXZlbnREZWZhdWx0OyhyLnRvdWNoU3RhcnRGb3JjZVByZXZlbnREZWZhdWx0fHxmKSYmbC5wcmV2ZW50RGVmYXVsdCgpfXRoaXMuZW1pdChcInRvdWNoU3RhcnRcIixsKX19fX1mdW5jdGlvbiBPKHQpe3ZhciBpPXRoaXMudG91Y2hFdmVudHNEYXRhLGE9dGhpcy5wYXJhbXMscj10aGlzLnRvdWNoZXMsbz10aGlzLnJ0bFRyYW5zbGF0ZSxsPXQ7aWYobC5vcmlnaW5hbEV2ZW50JiYobD1sLm9yaWdpbmFsRXZlbnQpLGkuaXNUb3VjaGVkKXtpZighaS5pc1RvdWNoRXZlbnR8fFwibW91c2Vtb3ZlXCIhPT1sLnR5cGUpe3ZhciBkPVwidG91Y2htb3ZlXCI9PT1sLnR5cGUmJmwudGFyZ2V0VG91Y2hlcyYmKGwudGFyZ2V0VG91Y2hlc1swXXx8bC5jaGFuZ2VkVG91Y2hlc1swXSksaD1cInRvdWNobW92ZVwiPT09bC50eXBlP2QucGFnZVg6bC5wYWdlWCxwPVwidG91Y2htb3ZlXCI9PT1sLnR5cGU/ZC5wYWdlWTpsLnBhZ2VZO2lmKGwucHJldmVudGVkQnlOZXN0ZWRTd2lwZXIpcmV0dXJuIHIuc3RhcnRYPWgsdm9pZChyLnN0YXJ0WT1wKTtpZighdGhpcy5hbGxvd1RvdWNoTW92ZSlyZXR1cm4gdGhpcy5hbGxvd0NsaWNrPSExLHZvaWQoaS5pc1RvdWNoZWQmJihuLmV4dGVuZChyLHtzdGFydFg6aCxzdGFydFk6cCxjdXJyZW50WDpoLGN1cnJlbnRZOnB9KSxpLnRvdWNoU3RhcnRUaW1lPW4ubm93KCkpKTtpZihpLmlzVG91Y2hFdmVudCYmYS50b3VjaFJlbGVhc2VPbkVkZ2VzJiYhYS5sb29wKWlmKHRoaXMuaXNWZXJ0aWNhbCgpKXtpZihwPHIuc3RhcnRZJiZ0aGlzLnRyYW5zbGF0ZTw9dGhpcy5tYXhUcmFuc2xhdGUoKXx8cD5yLnN0YXJ0WSYmdGhpcy50cmFuc2xhdGU+PXRoaXMubWluVHJhbnNsYXRlKCkpcmV0dXJuIGkuaXNUb3VjaGVkPSExLHZvaWQoaS5pc01vdmVkPSExKX1lbHNlIGlmKGg8ci5zdGFydFgmJnRoaXMudHJhbnNsYXRlPD10aGlzLm1heFRyYW5zbGF0ZSgpfHxoPnIuc3RhcnRYJiZ0aGlzLnRyYW5zbGF0ZT49dGhpcy5taW5UcmFuc2xhdGUoKSlyZXR1cm47aWYoaS5pc1RvdWNoRXZlbnQmJmUuYWN0aXZlRWxlbWVudCYmbC50YXJnZXQ9PT1lLmFjdGl2ZUVsZW1lbnQmJnMobC50YXJnZXQpLmlzKGkuZm9ybUVsZW1lbnRzKSlyZXR1cm4gaS5pc01vdmVkPSEwLHZvaWQodGhpcy5hbGxvd0NsaWNrPSExKTtpZihpLmFsbG93VG91Y2hDYWxsYmFja3MmJnRoaXMuZW1pdChcInRvdWNoTW92ZVwiLGwpLCEobC50YXJnZXRUb3VjaGVzJiZsLnRhcmdldFRvdWNoZXMubGVuZ3RoPjEpKXtyLmN1cnJlbnRYPWgsci5jdXJyZW50WT1wO3ZhciBjPXIuY3VycmVudFgtci5zdGFydFgsdT1yLmN1cnJlbnRZLXIuc3RhcnRZO2lmKCEodGhpcy5wYXJhbXMudGhyZXNob2xkJiZNYXRoLnNxcnQoTWF0aC5wb3coYywyKStNYXRoLnBvdyh1LDIpKTx0aGlzLnBhcmFtcy50aHJlc2hvbGQpKXt2YXIgdjtpZih2b2lkIDA9PT1pLmlzU2Nyb2xsaW5nKXRoaXMuaXNIb3Jpem9udGFsKCkmJnIuY3VycmVudFk9PT1yLnN0YXJ0WXx8dGhpcy5pc1ZlcnRpY2FsKCkmJnIuY3VycmVudFg9PT1yLnN0YXJ0WD9pLmlzU2Nyb2xsaW5nPSExOmMqYyt1KnU+PTI1JiYodj0xODAqTWF0aC5hdGFuMihNYXRoLmFicyh1KSxNYXRoLmFicyhjKSkvTWF0aC5QSSxpLmlzU2Nyb2xsaW5nPXRoaXMuaXNIb3Jpem9udGFsKCk/dj5hLnRvdWNoQW5nbGU6OTAtdj5hLnRvdWNoQW5nbGUpO2lmKGkuaXNTY3JvbGxpbmcmJnRoaXMuZW1pdChcInRvdWNoTW92ZU9wcG9zaXRlXCIsbCksdm9pZCAwPT09aS5zdGFydE1vdmluZyYmKHIuY3VycmVudFg9PT1yLnN0YXJ0WCYmci5jdXJyZW50WT09PXIuc3RhcnRZfHwoaS5zdGFydE1vdmluZz0hMCkpLGkuaXNTY3JvbGxpbmcpaS5pc1RvdWNoZWQ9ITE7ZWxzZSBpZihpLnN0YXJ0TW92aW5nKXt0aGlzLmFsbG93Q2xpY2s9ITEsYS5jc3NNb2RlfHxsLnByZXZlbnREZWZhdWx0KCksYS50b3VjaE1vdmVTdG9wUHJvcGFnYXRpb24mJiFhLm5lc3RlZCYmbC5zdG9wUHJvcGFnYXRpb24oKSxpLmlzTW92ZWR8fChhLmxvb3AmJnRoaXMubG9vcEZpeCgpLGkuc3RhcnRUcmFuc2xhdGU9dGhpcy5nZXRUcmFuc2xhdGUoKSx0aGlzLnNldFRyYW5zaXRpb24oMCksdGhpcy5hbmltYXRpbmcmJnRoaXMuJHdyYXBwZXJFbC50cmlnZ2VyKFwid2Via2l0VHJhbnNpdGlvbkVuZCB0cmFuc2l0aW9uZW5kXCIpLGkuYWxsb3dNb21lbnR1bUJvdW5jZT0hMSwhYS5ncmFiQ3Vyc29yfHwhMCE9PXRoaXMuYWxsb3dTbGlkZU5leHQmJiEwIT09dGhpcy5hbGxvd1NsaWRlUHJldnx8dGhpcy5zZXRHcmFiQ3Vyc29yKCEwKSx0aGlzLmVtaXQoXCJzbGlkZXJGaXJzdE1vdmVcIixsKSksdGhpcy5lbWl0KFwic2xpZGVyTW92ZVwiLGwpLGkuaXNNb3ZlZD0hMDt2YXIgZj10aGlzLmlzSG9yaXpvbnRhbCgpP2M6dTtyLmRpZmY9ZixmKj1hLnRvdWNoUmF0aW8sbyYmKGY9LWYpLHRoaXMuc3dpcGVEaXJlY3Rpb249Zj4wP1wicHJldlwiOlwibmV4dFwiLGkuY3VycmVudFRyYW5zbGF0ZT1mK2kuc3RhcnRUcmFuc2xhdGU7dmFyIG09ITAsZz1hLnJlc2lzdGFuY2VSYXRpbztpZihhLnRvdWNoUmVsZWFzZU9uRWRnZXMmJihnPTApLGY+MCYmaS5jdXJyZW50VHJhbnNsYXRlPnRoaXMubWluVHJhbnNsYXRlKCk/KG09ITEsYS5yZXNpc3RhbmNlJiYoaS5jdXJyZW50VHJhbnNsYXRlPXRoaXMubWluVHJhbnNsYXRlKCktMStNYXRoLnBvdygtdGhpcy5taW5UcmFuc2xhdGUoKStpLnN0YXJ0VHJhbnNsYXRlK2YsZykpKTpmPDAmJmkuY3VycmVudFRyYW5zbGF0ZTx0aGlzLm1heFRyYW5zbGF0ZSgpJiYobT0hMSxhLnJlc2lzdGFuY2UmJihpLmN1cnJlbnRUcmFuc2xhdGU9dGhpcy5tYXhUcmFuc2xhdGUoKSsxLU1hdGgucG93KHRoaXMubWF4VHJhbnNsYXRlKCktaS5zdGFydFRyYW5zbGF0ZS1mLGcpKSksbSYmKGwucHJldmVudGVkQnlOZXN0ZWRTd2lwZXI9ITApLCF0aGlzLmFsbG93U2xpZGVOZXh0JiZcIm5leHRcIj09PXRoaXMuc3dpcGVEaXJlY3Rpb24mJmkuY3VycmVudFRyYW5zbGF0ZTxpLnN0YXJ0VHJhbnNsYXRlJiYoaS5jdXJyZW50VHJhbnNsYXRlPWkuc3RhcnRUcmFuc2xhdGUpLCF0aGlzLmFsbG93U2xpZGVQcmV2JiZcInByZXZcIj09PXRoaXMuc3dpcGVEaXJlY3Rpb24mJmkuY3VycmVudFRyYW5zbGF0ZT5pLnN0YXJ0VHJhbnNsYXRlJiYoaS5jdXJyZW50VHJhbnNsYXRlPWkuc3RhcnRUcmFuc2xhdGUpLGEudGhyZXNob2xkPjApe2lmKCEoTWF0aC5hYnMoZik+YS50aHJlc2hvbGR8fGkuYWxsb3dUaHJlc2hvbGRNb3ZlKSlyZXR1cm4gdm9pZChpLmN1cnJlbnRUcmFuc2xhdGU9aS5zdGFydFRyYW5zbGF0ZSk7aWYoIWkuYWxsb3dUaHJlc2hvbGRNb3ZlKXJldHVybiBpLmFsbG93VGhyZXNob2xkTW92ZT0hMCxyLnN0YXJ0WD1yLmN1cnJlbnRYLHIuc3RhcnRZPXIuY3VycmVudFksaS5jdXJyZW50VHJhbnNsYXRlPWkuc3RhcnRUcmFuc2xhdGUsdm9pZChyLmRpZmY9dGhpcy5pc0hvcml6b250YWwoKT9yLmN1cnJlbnRYLXIuc3RhcnRYOnIuY3VycmVudFktci5zdGFydFkpfWEuZm9sbG93RmluZ2VyJiYhYS5jc3NNb2RlJiYoKGEuZnJlZU1vZGV8fGEud2F0Y2hTbGlkZXNQcm9ncmVzc3x8YS53YXRjaFNsaWRlc1Zpc2liaWxpdHkpJiYodGhpcy51cGRhdGVBY3RpdmVJbmRleCgpLHRoaXMudXBkYXRlU2xpZGVzQ2xhc3NlcygpKSxhLmZyZWVNb2RlJiYoMD09PWkudmVsb2NpdGllcy5sZW5ndGgmJmkudmVsb2NpdGllcy5wdXNoKHtwb3NpdGlvbjpyW3RoaXMuaXNIb3Jpem9udGFsKCk/XCJzdGFydFhcIjpcInN0YXJ0WVwiXSx0aW1lOmkudG91Y2hTdGFydFRpbWV9KSxpLnZlbG9jaXRpZXMucHVzaCh7cG9zaXRpb246clt0aGlzLmlzSG9yaXpvbnRhbCgpP1wiY3VycmVudFhcIjpcImN1cnJlbnRZXCJdLHRpbWU6bi5ub3coKX0pKSx0aGlzLnVwZGF0ZVByb2dyZXNzKGkuY3VycmVudFRyYW5zbGF0ZSksdGhpcy5zZXRUcmFuc2xhdGUoaS5jdXJyZW50VHJhbnNsYXRlKSl9fX19fWVsc2UgaS5zdGFydE1vdmluZyYmaS5pc1Njcm9sbGluZyYmdGhpcy5lbWl0KFwidG91Y2hNb3ZlT3Bwb3NpdGVcIixsKX1mdW5jdGlvbiBBKGUpe3ZhciB0PXRoaXMsaT10LnRvdWNoRXZlbnRzRGF0YSxzPXQucGFyYW1zLGE9dC50b3VjaGVzLHI9dC5ydGxUcmFuc2xhdGUsbz10LiR3cmFwcGVyRWwsbD10LnNsaWRlc0dyaWQsZD10LnNuYXBHcmlkLGg9ZTtpZihoLm9yaWdpbmFsRXZlbnQmJihoPWgub3JpZ2luYWxFdmVudCksaS5hbGxvd1RvdWNoQ2FsbGJhY2tzJiZ0LmVtaXQoXCJ0b3VjaEVuZFwiLGgpLGkuYWxsb3dUb3VjaENhbGxiYWNrcz0hMSwhaS5pc1RvdWNoZWQpcmV0dXJuIGkuaXNNb3ZlZCYmcy5ncmFiQ3Vyc29yJiZ0LnNldEdyYWJDdXJzb3IoITEpLGkuaXNNb3ZlZD0hMSx2b2lkKGkuc3RhcnRNb3Zpbmc9ITEpO3MuZ3JhYkN1cnNvciYmaS5pc01vdmVkJiZpLmlzVG91Y2hlZCYmKCEwPT09dC5hbGxvd1NsaWRlTmV4dHx8ITA9PT10LmFsbG93U2xpZGVQcmV2KSYmdC5zZXRHcmFiQ3Vyc29yKCExKTt2YXIgcCxjPW4ubm93KCksdT1jLWkudG91Y2hTdGFydFRpbWU7aWYodC5hbGxvd0NsaWNrJiYodC51cGRhdGVDbGlja2VkU2xpZGUoaCksdC5lbWl0KFwidGFwIGNsaWNrXCIsaCksdTwzMDAmJmMtaS5sYXN0Q2xpY2tUaW1lPDMwMCYmdC5lbWl0KFwiZG91YmxlVGFwIGRvdWJsZUNsaWNrXCIsaCkpLGkubGFzdENsaWNrVGltZT1uLm5vdygpLG4ubmV4dFRpY2soKGZ1bmN0aW9uKCl7dC5kZXN0cm95ZWR8fCh0LmFsbG93Q2xpY2s9ITApfSkpLCFpLmlzVG91Y2hlZHx8IWkuaXNNb3ZlZHx8IXQuc3dpcGVEaXJlY3Rpb258fDA9PT1hLmRpZmZ8fGkuY3VycmVudFRyYW5zbGF0ZT09PWkuc3RhcnRUcmFuc2xhdGUpcmV0dXJuIGkuaXNUb3VjaGVkPSExLGkuaXNNb3ZlZD0hMSx2b2lkKGkuc3RhcnRNb3Zpbmc9ITEpO2lmKGkuaXNUb3VjaGVkPSExLGkuaXNNb3ZlZD0hMSxpLnN0YXJ0TW92aW5nPSExLHA9cy5mb2xsb3dGaW5nZXI/cj90LnRyYW5zbGF0ZTotdC50cmFuc2xhdGU6LWkuY3VycmVudFRyYW5zbGF0ZSwhcy5jc3NNb2RlKWlmKHMuZnJlZU1vZGUpe2lmKHA8LXQubWluVHJhbnNsYXRlKCkpcmV0dXJuIHZvaWQgdC5zbGlkZVRvKHQuYWN0aXZlSW5kZXgpO2lmKHA+LXQubWF4VHJhbnNsYXRlKCkpcmV0dXJuIHZvaWQodC5zbGlkZXMubGVuZ3RoPGQubGVuZ3RoP3Quc2xpZGVUbyhkLmxlbmd0aC0xKTp0LnNsaWRlVG8odC5zbGlkZXMubGVuZ3RoLTEpKTtpZihzLmZyZWVNb2RlTW9tZW50dW0pe2lmKGkudmVsb2NpdGllcy5sZW5ndGg+MSl7dmFyIHY9aS52ZWxvY2l0aWVzLnBvcCgpLGY9aS52ZWxvY2l0aWVzLnBvcCgpLG09di5wb3NpdGlvbi1mLnBvc2l0aW9uLGc9di50aW1lLWYudGltZTt0LnZlbG9jaXR5PW0vZyx0LnZlbG9jaXR5Lz0yLE1hdGguYWJzKHQudmVsb2NpdHkpPHMuZnJlZU1vZGVNaW5pbXVtVmVsb2NpdHkmJih0LnZlbG9jaXR5PTApLChnPjE1MHx8bi5ub3coKS12LnRpbWU+MzAwKSYmKHQudmVsb2NpdHk9MCl9ZWxzZSB0LnZlbG9jaXR5PTA7dC52ZWxvY2l0eSo9cy5mcmVlTW9kZU1vbWVudHVtVmVsb2NpdHlSYXRpbyxpLnZlbG9jaXRpZXMubGVuZ3RoPTA7dmFyIGI9MWUzKnMuZnJlZU1vZGVNb21lbnR1bVJhdGlvLHc9dC52ZWxvY2l0eSpiLHk9dC50cmFuc2xhdGUrdztyJiYoeT0teSk7dmFyIHgsVCxFPSExLFM9MjAqTWF0aC5hYnModC52ZWxvY2l0eSkqcy5mcmVlTW9kZU1vbWVudHVtQm91bmNlUmF0aW87aWYoeTx0Lm1heFRyYW5zbGF0ZSgpKXMuZnJlZU1vZGVNb21lbnR1bUJvdW5jZT8oeSt0Lm1heFRyYW5zbGF0ZSgpPC1TJiYoeT10Lm1heFRyYW5zbGF0ZSgpLVMpLHg9dC5tYXhUcmFuc2xhdGUoKSxFPSEwLGkuYWxsb3dNb21lbnR1bUJvdW5jZT0hMCk6eT10Lm1heFRyYW5zbGF0ZSgpLHMubG9vcCYmcy5jZW50ZXJlZFNsaWRlcyYmKFQ9ITApO2Vsc2UgaWYoeT50Lm1pblRyYW5zbGF0ZSgpKXMuZnJlZU1vZGVNb21lbnR1bUJvdW5jZT8oeS10Lm1pblRyYW5zbGF0ZSgpPlMmJih5PXQubWluVHJhbnNsYXRlKCkrUykseD10Lm1pblRyYW5zbGF0ZSgpLEU9ITAsaS5hbGxvd01vbWVudHVtQm91bmNlPSEwKTp5PXQubWluVHJhbnNsYXRlKCkscy5sb29wJiZzLmNlbnRlcmVkU2xpZGVzJiYoVD0hMCk7ZWxzZSBpZihzLmZyZWVNb2RlU3RpY2t5KXtmb3IodmFyIEMsTT0wO008ZC5sZW5ndGg7TSs9MSlpZihkW01dPi15KXtDPU07YnJlYWt9eT0tKHk9TWF0aC5hYnMoZFtDXS15KTxNYXRoLmFicyhkW0MtMV0teSl8fFwibmV4dFwiPT09dC5zd2lwZURpcmVjdGlvbj9kW0NdOmRbQy0xXSl9aWYoVCYmdC5vbmNlKFwidHJhbnNpdGlvbkVuZFwiLChmdW5jdGlvbigpe3QubG9vcEZpeCgpfSkpLDAhPT10LnZlbG9jaXR5KXtpZihiPXI/TWF0aC5hYnMoKC15LXQudHJhbnNsYXRlKS90LnZlbG9jaXR5KTpNYXRoLmFicygoeS10LnRyYW5zbGF0ZSkvdC52ZWxvY2l0eSkscy5mcmVlTW9kZVN0aWNreSl7dmFyIFA9TWF0aC5hYnMoKHI/LXk6eSktdC50cmFuc2xhdGUpLHo9dC5zbGlkZXNTaXplc0dyaWRbdC5hY3RpdmVJbmRleF07Yj1QPHo/cy5zcGVlZDpQPDIqej8xLjUqcy5zcGVlZDoyLjUqcy5zcGVlZH19ZWxzZSBpZihzLmZyZWVNb2RlU3RpY2t5KXJldHVybiB2b2lkIHQuc2xpZGVUb0Nsb3Nlc3QoKTtzLmZyZWVNb2RlTW9tZW50dW1Cb3VuY2UmJkU/KHQudXBkYXRlUHJvZ3Jlc3MoeCksdC5zZXRUcmFuc2l0aW9uKGIpLHQuc2V0VHJhbnNsYXRlKHkpLHQudHJhbnNpdGlvblN0YXJ0KCEwLHQuc3dpcGVEaXJlY3Rpb24pLHQuYW5pbWF0aW5nPSEwLG8udHJhbnNpdGlvbkVuZCgoZnVuY3Rpb24oKXt0JiYhdC5kZXN0cm95ZWQmJmkuYWxsb3dNb21lbnR1bUJvdW5jZSYmKHQuZW1pdChcIm1vbWVudHVtQm91bmNlXCIpLHQuc2V0VHJhbnNpdGlvbihzLnNwZWVkKSxzZXRUaW1lb3V0KChmdW5jdGlvbigpe3Quc2V0VHJhbnNsYXRlKHgpLG8udHJhbnNpdGlvbkVuZCgoZnVuY3Rpb24oKXt0JiYhdC5kZXN0cm95ZWQmJnQudHJhbnNpdGlvbkVuZCgpfSkpfSksMCkpfSkpKTp0LnZlbG9jaXR5Pyh0LnVwZGF0ZVByb2dyZXNzKHkpLHQuc2V0VHJhbnNpdGlvbihiKSx0LnNldFRyYW5zbGF0ZSh5KSx0LnRyYW5zaXRpb25TdGFydCghMCx0LnN3aXBlRGlyZWN0aW9uKSx0LmFuaW1hdGluZ3x8KHQuYW5pbWF0aW5nPSEwLG8udHJhbnNpdGlvbkVuZCgoZnVuY3Rpb24oKXt0JiYhdC5kZXN0cm95ZWQmJnQudHJhbnNpdGlvbkVuZCgpfSkpKSk6dC51cGRhdGVQcm9ncmVzcyh5KSx0LnVwZGF0ZUFjdGl2ZUluZGV4KCksdC51cGRhdGVTbGlkZXNDbGFzc2VzKCl9ZWxzZSBpZihzLmZyZWVNb2RlU3RpY2t5KXJldHVybiB2b2lkIHQuc2xpZGVUb0Nsb3Nlc3QoKTsoIXMuZnJlZU1vZGVNb21lbnR1bXx8dT49cy5sb25nU3dpcGVzTXMpJiYodC51cGRhdGVQcm9ncmVzcygpLHQudXBkYXRlQWN0aXZlSW5kZXgoKSx0LnVwZGF0ZVNsaWRlc0NsYXNzZXMoKSl9ZWxzZXtmb3IodmFyIGs9MCwkPXQuc2xpZGVzU2l6ZXNHcmlkWzBdLEw9MDtMPGwubGVuZ3RoO0wrPUw8cy5zbGlkZXNQZXJHcm91cFNraXA/MTpzLnNsaWRlc1Blckdyb3VwKXt2YXIgST1MPHMuc2xpZGVzUGVyR3JvdXBTa2lwLTE/MTpzLnNsaWRlc1Blckdyb3VwO3ZvaWQgMCE9PWxbTCtJXT9wPj1sW0xdJiZwPGxbTCtJXSYmKGs9TCwkPWxbTCtJXS1sW0xdKTpwPj1sW0xdJiYoaz1MLCQ9bFtsLmxlbmd0aC0xXS1sW2wubGVuZ3RoLTJdKX12YXIgRD0ocC1sW2tdKS8kLE89azxzLnNsaWRlc1Blckdyb3VwU2tpcC0xPzE6cy5zbGlkZXNQZXJHcm91cDtpZih1PnMubG9uZ1N3aXBlc01zKXtpZighcy5sb25nU3dpcGVzKXJldHVybiB2b2lkIHQuc2xpZGVUbyh0LmFjdGl2ZUluZGV4KTtcIm5leHRcIj09PXQuc3dpcGVEaXJlY3Rpb24mJihEPj1zLmxvbmdTd2lwZXNSYXRpbz90LnNsaWRlVG8oaytPKTp0LnNsaWRlVG8oaykpLFwicHJldlwiPT09dC5zd2lwZURpcmVjdGlvbiYmKEQ+MS1zLmxvbmdTd2lwZXNSYXRpbz90LnNsaWRlVG8oaytPKTp0LnNsaWRlVG8oaykpfWVsc2V7aWYoIXMuc2hvcnRTd2lwZXMpcmV0dXJuIHZvaWQgdC5zbGlkZVRvKHQuYWN0aXZlSW5kZXgpO3QubmF2aWdhdGlvbiYmKGgudGFyZ2V0PT09dC5uYXZpZ2F0aW9uLm5leHRFbHx8aC50YXJnZXQ9PT10Lm5hdmlnYXRpb24ucHJldkVsKT9oLnRhcmdldD09PXQubmF2aWdhdGlvbi5uZXh0RWw/dC5zbGlkZVRvKGsrTyk6dC5zbGlkZVRvKGspOihcIm5leHRcIj09PXQuc3dpcGVEaXJlY3Rpb24mJnQuc2xpZGVUbyhrK08pLFwicHJldlwiPT09dC5zd2lwZURpcmVjdGlvbiYmdC5zbGlkZVRvKGspKX19fWZ1bmN0aW9uIEcoKXt2YXIgZT10aGlzLnBhcmFtcyx0PXRoaXMuZWw7aWYoIXR8fDAhPT10Lm9mZnNldFdpZHRoKXtlLmJyZWFrcG9pbnRzJiZ0aGlzLnNldEJyZWFrcG9pbnQoKTt2YXIgaT10aGlzLmFsbG93U2xpZGVOZXh0LHM9dGhpcy5hbGxvd1NsaWRlUHJldixhPXRoaXMuc25hcEdyaWQ7dGhpcy5hbGxvd1NsaWRlTmV4dD0hMCx0aGlzLmFsbG93U2xpZGVQcmV2PSEwLHRoaXMudXBkYXRlU2l6ZSgpLHRoaXMudXBkYXRlU2xpZGVzKCksdGhpcy51cGRhdGVTbGlkZXNDbGFzc2VzKCksKFwiYXV0b1wiPT09ZS5zbGlkZXNQZXJWaWV3fHxlLnNsaWRlc1BlclZpZXc+MSkmJnRoaXMuaXNFbmQmJiF0aGlzLnBhcmFtcy5jZW50ZXJlZFNsaWRlcz90aGlzLnNsaWRlVG8odGhpcy5zbGlkZXMubGVuZ3RoLTEsMCwhMSwhMCk6dGhpcy5zbGlkZVRvKHRoaXMuYWN0aXZlSW5kZXgsMCwhMSwhMCksdGhpcy5hdXRvcGxheSYmdGhpcy5hdXRvcGxheS5ydW5uaW5nJiZ0aGlzLmF1dG9wbGF5LnBhdXNlZCYmdGhpcy5hdXRvcGxheS5ydW4oKSx0aGlzLmFsbG93U2xpZGVQcmV2PXMsdGhpcy5hbGxvd1NsaWRlTmV4dD1pLHRoaXMucGFyYW1zLndhdGNoT3ZlcmZsb3cmJmEhPT10aGlzLnNuYXBHcmlkJiZ0aGlzLmNoZWNrT3ZlcmZsb3coKX19ZnVuY3Rpb24gSChlKXt0aGlzLmFsbG93Q2xpY2t8fCh0aGlzLnBhcmFtcy5wcmV2ZW50Q2xpY2tzJiZlLnByZXZlbnREZWZhdWx0KCksdGhpcy5wYXJhbXMucHJldmVudENsaWNrc1Byb3BhZ2F0aW9uJiZ0aGlzLmFuaW1hdGluZyYmKGUuc3RvcFByb3BhZ2F0aW9uKCksZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKSkpfWZ1bmN0aW9uIEIoKXt2YXIgZT10aGlzLndyYXBwZXJFbCx0PXRoaXMucnRsVHJhbnNsYXRlO3RoaXMucHJldmlvdXNUcmFuc2xhdGU9dGhpcy50cmFuc2xhdGUsdGhpcy5pc0hvcml6b250YWwoKT90aGlzLnRyYW5zbGF0ZT10P2Uuc2Nyb2xsV2lkdGgtZS5vZmZzZXRXaWR0aC1lLnNjcm9sbExlZnQ6LWUuc2Nyb2xsTGVmdDp0aGlzLnRyYW5zbGF0ZT0tZS5zY3JvbGxUb3AsLTA9PT10aGlzLnRyYW5zbGF0ZSYmKHRoaXMudHJhbnNsYXRlPTApLHRoaXMudXBkYXRlQWN0aXZlSW5kZXgoKSx0aGlzLnVwZGF0ZVNsaWRlc0NsYXNzZXMoKTt2YXIgaT10aGlzLm1heFRyYW5zbGF0ZSgpLXRoaXMubWluVHJhbnNsYXRlKCk7KDA9PT1pPzA6KHRoaXMudHJhbnNsYXRlLXRoaXMubWluVHJhbnNsYXRlKCkpL2kpIT09dGhpcy5wcm9ncmVzcyYmdGhpcy51cGRhdGVQcm9ncmVzcyh0Py10aGlzLnRyYW5zbGF0ZTp0aGlzLnRyYW5zbGF0ZSksdGhpcy5lbWl0KFwic2V0VHJhbnNsYXRlXCIsdGhpcy50cmFuc2xhdGUsITEpfXZhciBOPSExO2Z1bmN0aW9uIFgoKXt9dmFyIFY9e2luaXQ6ITAsZGlyZWN0aW9uOlwiaG9yaXpvbnRhbFwiLHRvdWNoRXZlbnRzVGFyZ2V0OlwiY29udGFpbmVyXCIsaW5pdGlhbFNsaWRlOjAsc3BlZWQ6MzAwLGNzc01vZGU6ITEsdXBkYXRlT25XaW5kb3dSZXNpemU6ITAscHJldmVudEludGVyYWN0aW9uT25UcmFuc2l0aW9uOiExLGVkZ2VTd2lwZURldGVjdGlvbjohMSxlZGdlU3dpcGVUaHJlc2hvbGQ6MjAsZnJlZU1vZGU6ITEsZnJlZU1vZGVNb21lbnR1bTohMCxmcmVlTW9kZU1vbWVudHVtUmF0aW86MSxmcmVlTW9kZU1vbWVudHVtQm91bmNlOiEwLGZyZWVNb2RlTW9tZW50dW1Cb3VuY2VSYXRpbzoxLGZyZWVNb2RlTW9tZW50dW1WZWxvY2l0eVJhdGlvOjEsZnJlZU1vZGVTdGlja3k6ITEsZnJlZU1vZGVNaW5pbXVtVmVsb2NpdHk6LjAyLGF1dG9IZWlnaHQ6ITEsc2V0V3JhcHBlclNpemU6ITEsdmlydHVhbFRyYW5zbGF0ZTohMSxlZmZlY3Q6XCJzbGlkZVwiLGJyZWFrcG9pbnRzOnZvaWQgMCxzcGFjZUJldHdlZW46MCxzbGlkZXNQZXJWaWV3OjEsc2xpZGVzUGVyQ29sdW1uOjEsc2xpZGVzUGVyQ29sdW1uRmlsbDpcImNvbHVtblwiLHNsaWRlc1Blckdyb3VwOjEsc2xpZGVzUGVyR3JvdXBTa2lwOjAsY2VudGVyZWRTbGlkZXM6ITEsY2VudGVyZWRTbGlkZXNCb3VuZHM6ITEsc2xpZGVzT2Zmc2V0QmVmb3JlOjAsc2xpZGVzT2Zmc2V0QWZ0ZXI6MCxub3JtYWxpemVTbGlkZUluZGV4OiEwLGNlbnRlckluc3VmZmljaWVudFNsaWRlczohMSx3YXRjaE92ZXJmbG93OiExLHJvdW5kTGVuZ3RoczohMSx0b3VjaFJhdGlvOjEsdG91Y2hBbmdsZTo0NSxzaW11bGF0ZVRvdWNoOiEwLHNob3J0U3dpcGVzOiEwLGxvbmdTd2lwZXM6ITAsbG9uZ1N3aXBlc1JhdGlvOi41LGxvbmdTd2lwZXNNczozMDAsZm9sbG93RmluZ2VyOiEwLGFsbG93VG91Y2hNb3ZlOiEwLHRocmVzaG9sZDowLHRvdWNoTW92ZVN0b3BQcm9wYWdhdGlvbjohMSx0b3VjaFN0YXJ0UHJldmVudERlZmF1bHQ6ITAsdG91Y2hTdGFydEZvcmNlUHJldmVudERlZmF1bHQ6ITEsdG91Y2hSZWxlYXNlT25FZGdlczohMSx1bmlxdWVOYXZFbGVtZW50czohMCxyZXNpc3RhbmNlOiEwLHJlc2lzdGFuY2VSYXRpbzouODUsd2F0Y2hTbGlkZXNQcm9ncmVzczohMSx3YXRjaFNsaWRlc1Zpc2liaWxpdHk6ITEsZ3JhYkN1cnNvcjohMSxwcmV2ZW50Q2xpY2tzOiEwLHByZXZlbnRDbGlja3NQcm9wYWdhdGlvbjohMCxzbGlkZVRvQ2xpY2tlZFNsaWRlOiExLHByZWxvYWRJbWFnZXM6ITAsdXBkYXRlT25JbWFnZXNSZWFkeTohMCxsb29wOiExLGxvb3BBZGRpdGlvbmFsU2xpZGVzOjAsbG9vcGVkU2xpZGVzOm51bGwsbG9vcEZpbGxHcm91cFdpdGhCbGFuazohMSxhbGxvd1NsaWRlUHJldjohMCxhbGxvd1NsaWRlTmV4dDohMCxzd2lwZUhhbmRsZXI6bnVsbCxub1N3aXBpbmc6ITAsbm9Td2lwaW5nQ2xhc3M6XCJzd2lwZXItbm8tc3dpcGluZ1wiLG5vU3dpcGluZ1NlbGVjdG9yOm51bGwscGFzc2l2ZUxpc3RlbmVyczohMCxjb250YWluZXJNb2RpZmllckNsYXNzOlwic3dpcGVyLWNvbnRhaW5lci1cIixzbGlkZUNsYXNzOlwic3dpcGVyLXNsaWRlXCIsc2xpZGVCbGFua0NsYXNzOlwic3dpcGVyLXNsaWRlLWludmlzaWJsZS1ibGFua1wiLHNsaWRlQWN0aXZlQ2xhc3M6XCJzd2lwZXItc2xpZGUtYWN0aXZlXCIsc2xpZGVEdXBsaWNhdGVBY3RpdmVDbGFzczpcInN3aXBlci1zbGlkZS1kdXBsaWNhdGUtYWN0aXZlXCIsc2xpZGVWaXNpYmxlQ2xhc3M6XCJzd2lwZXItc2xpZGUtdmlzaWJsZVwiLHNsaWRlRHVwbGljYXRlQ2xhc3M6XCJzd2lwZXItc2xpZGUtZHVwbGljYXRlXCIsc2xpZGVOZXh0Q2xhc3M6XCJzd2lwZXItc2xpZGUtbmV4dFwiLHNsaWRlRHVwbGljYXRlTmV4dENsYXNzOlwic3dpcGVyLXNsaWRlLWR1cGxpY2F0ZS1uZXh0XCIsc2xpZGVQcmV2Q2xhc3M6XCJzd2lwZXItc2xpZGUtcHJldlwiLHNsaWRlRHVwbGljYXRlUHJldkNsYXNzOlwic3dpcGVyLXNsaWRlLWR1cGxpY2F0ZS1wcmV2XCIsd3JhcHBlckNsYXNzOlwic3dpcGVyLXdyYXBwZXJcIixydW5DYWxsYmFja3NPbkluaXQ6ITB9LFk9e3VwZGF0ZTpoLHRyYW5zbGF0ZTpwLHRyYW5zaXRpb246YyxzbGlkZTp1LGxvb3A6dixncmFiQ3Vyc29yOmYsbWFuaXB1bGF0aW9uOkwsZXZlbnRzOnthdHRhY2hFdmVudHM6ZnVuY3Rpb24oKXt2YXIgdD10aGlzLnBhcmFtcyxpPXRoaXMudG91Y2hFdmVudHMscz10aGlzLmVsLGE9dGhpcy53cmFwcGVyRWw7dGhpcy5vblRvdWNoU3RhcnQ9RC5iaW5kKHRoaXMpLHRoaXMub25Ub3VjaE1vdmU9Ty5iaW5kKHRoaXMpLHRoaXMub25Ub3VjaEVuZD1BLmJpbmQodGhpcyksdC5jc3NNb2RlJiYodGhpcy5vblNjcm9sbD1CLmJpbmQodGhpcykpLHRoaXMub25DbGljaz1ILmJpbmQodGhpcyk7dmFyIHI9ISF0Lm5lc3RlZDtpZighby50b3VjaCYmby5wb2ludGVyRXZlbnRzKXMuYWRkRXZlbnRMaXN0ZW5lcihpLnN0YXJ0LHRoaXMub25Ub3VjaFN0YXJ0LCExKSxlLmFkZEV2ZW50TGlzdGVuZXIoaS5tb3ZlLHRoaXMub25Ub3VjaE1vdmUsciksZS5hZGRFdmVudExpc3RlbmVyKGkuZW5kLHRoaXMub25Ub3VjaEVuZCwhMSk7ZWxzZXtpZihvLnRvdWNoKXt2YXIgbj0hKFwidG91Y2hzdGFydFwiIT09aS5zdGFydHx8IW8ucGFzc2l2ZUxpc3RlbmVyfHwhdC5wYXNzaXZlTGlzdGVuZXJzKSYme3Bhc3NpdmU6ITAsY2FwdHVyZTohMX07cy5hZGRFdmVudExpc3RlbmVyKGkuc3RhcnQsdGhpcy5vblRvdWNoU3RhcnQsbikscy5hZGRFdmVudExpc3RlbmVyKGkubW92ZSx0aGlzLm9uVG91Y2hNb3ZlLG8ucGFzc2l2ZUxpc3RlbmVyP3twYXNzaXZlOiExLGNhcHR1cmU6cn06cikscy5hZGRFdmVudExpc3RlbmVyKGkuZW5kLHRoaXMub25Ub3VjaEVuZCxuKSxpLmNhbmNlbCYmcy5hZGRFdmVudExpc3RlbmVyKGkuY2FuY2VsLHRoaXMub25Ub3VjaEVuZCxuKSxOfHwoZS5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hzdGFydFwiLFgpLE49ITApfSh0LnNpbXVsYXRlVG91Y2gmJiFJLmlvcyYmIUkuYW5kcm9pZHx8dC5zaW11bGF0ZVRvdWNoJiYhby50b3VjaCYmSS5pb3MpJiYocy5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsdGhpcy5vblRvdWNoU3RhcnQsITEpLGUuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLHRoaXMub25Ub3VjaE1vdmUsciksZS5hZGRFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLHRoaXMub25Ub3VjaEVuZCwhMSkpfSh0LnByZXZlbnRDbGlja3N8fHQucHJldmVudENsaWNrc1Byb3BhZ2F0aW9uKSYmcy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIix0aGlzLm9uQ2xpY2ssITApLHQuY3NzTW9kZSYmYS5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsdGhpcy5vblNjcm9sbCksdC51cGRhdGVPbldpbmRvd1Jlc2l6ZT90aGlzLm9uKEkuaW9zfHxJLmFuZHJvaWQ/XCJyZXNpemUgb3JpZW50YXRpb25jaGFuZ2Ugb2JzZXJ2ZXJVcGRhdGVcIjpcInJlc2l6ZSBvYnNlcnZlclVwZGF0ZVwiLEcsITApOnRoaXMub24oXCJvYnNlcnZlclVwZGF0ZVwiLEcsITApfSxkZXRhY2hFdmVudHM6ZnVuY3Rpb24oKXt2YXIgdD10aGlzLnBhcmFtcyxpPXRoaXMudG91Y2hFdmVudHMscz10aGlzLmVsLGE9dGhpcy53cmFwcGVyRWwscj0hIXQubmVzdGVkO2lmKCFvLnRvdWNoJiZvLnBvaW50ZXJFdmVudHMpcy5yZW1vdmVFdmVudExpc3RlbmVyKGkuc3RhcnQsdGhpcy5vblRvdWNoU3RhcnQsITEpLGUucmVtb3ZlRXZlbnRMaXN0ZW5lcihpLm1vdmUsdGhpcy5vblRvdWNoTW92ZSxyKSxlLnJlbW92ZUV2ZW50TGlzdGVuZXIoaS5lbmQsdGhpcy5vblRvdWNoRW5kLCExKTtlbHNle2lmKG8udG91Y2gpe3ZhciBuPSEoXCJvblRvdWNoU3RhcnRcIiE9PWkuc3RhcnR8fCFvLnBhc3NpdmVMaXN0ZW5lcnx8IXQucGFzc2l2ZUxpc3RlbmVycykmJntwYXNzaXZlOiEwLGNhcHR1cmU6ITF9O3MucmVtb3ZlRXZlbnRMaXN0ZW5lcihpLnN0YXJ0LHRoaXMub25Ub3VjaFN0YXJ0LG4pLHMucmVtb3ZlRXZlbnRMaXN0ZW5lcihpLm1vdmUsdGhpcy5vblRvdWNoTW92ZSxyKSxzLnJlbW92ZUV2ZW50TGlzdGVuZXIoaS5lbmQsdGhpcy5vblRvdWNoRW5kLG4pLGkuY2FuY2VsJiZzLnJlbW92ZUV2ZW50TGlzdGVuZXIoaS5jYW5jZWwsdGhpcy5vblRvdWNoRW5kLG4pfSh0LnNpbXVsYXRlVG91Y2gmJiFJLmlvcyYmIUkuYW5kcm9pZHx8dC5zaW11bGF0ZVRvdWNoJiYhby50b3VjaCYmSS5pb3MpJiYocy5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsdGhpcy5vblRvdWNoU3RhcnQsITEpLGUucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLHRoaXMub25Ub3VjaE1vdmUsciksZS5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLHRoaXMub25Ub3VjaEVuZCwhMSkpfSh0LnByZXZlbnRDbGlja3N8fHQucHJldmVudENsaWNrc1Byb3BhZ2F0aW9uKSYmcy5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIix0aGlzLm9uQ2xpY2ssITApLHQuY3NzTW9kZSYmYS5yZW1vdmVFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsdGhpcy5vblNjcm9sbCksdGhpcy5vZmYoSS5pb3N8fEkuYW5kcm9pZD9cInJlc2l6ZSBvcmllbnRhdGlvbmNoYW5nZSBvYnNlcnZlclVwZGF0ZVwiOlwicmVzaXplIG9ic2VydmVyVXBkYXRlXCIsRyl9fSxicmVha3BvaW50czp7c2V0QnJlYWtwb2ludDpmdW5jdGlvbigpe3ZhciBlPXRoaXMuYWN0aXZlSW5kZXgsdD10aGlzLmluaXRpYWxpemVkLGk9dGhpcy5sb29wZWRTbGlkZXM7dm9pZCAwPT09aSYmKGk9MCk7dmFyIHM9dGhpcy5wYXJhbXMsYT10aGlzLiRlbCxyPXMuYnJlYWtwb2ludHM7aWYociYmKCFyfHwwIT09T2JqZWN0LmtleXMocikubGVuZ3RoKSl7dmFyIG89dGhpcy5nZXRCcmVha3BvaW50KHIpO2lmKG8mJnRoaXMuY3VycmVudEJyZWFrcG9pbnQhPT1vKXt2YXIgbD1vIGluIHI/cltvXTp2b2lkIDA7bCYmW1wic2xpZGVzUGVyVmlld1wiLFwic3BhY2VCZXR3ZWVuXCIsXCJzbGlkZXNQZXJHcm91cFwiLFwic2xpZGVzUGVyR3JvdXBTa2lwXCIsXCJzbGlkZXNQZXJDb2x1bW5cIl0uZm9yRWFjaCgoZnVuY3Rpb24oZSl7dmFyIHQ9bFtlXTt2b2lkIDAhPT10JiYobFtlXT1cInNsaWRlc1BlclZpZXdcIiE9PWV8fFwiQVVUT1wiIT09dCYmXCJhdXRvXCIhPT10P1wic2xpZGVzUGVyVmlld1wiPT09ZT9wYXJzZUZsb2F0KHQpOnBhcnNlSW50KHQsMTApOlwiYXV0b1wiKX0pKTt2YXIgZD1sfHx0aGlzLm9yaWdpbmFsUGFyYW1zLGg9cy5zbGlkZXNQZXJDb2x1bW4+MSxwPWQuc2xpZGVzUGVyQ29sdW1uPjE7aCYmIXA/YS5yZW1vdmVDbGFzcyhzLmNvbnRhaW5lck1vZGlmaWVyQ2xhc3MrXCJtdWx0aXJvdyBcIitzLmNvbnRhaW5lck1vZGlmaWVyQ2xhc3MrXCJtdWx0aXJvdy1jb2x1bW5cIik6IWgmJnAmJihhLmFkZENsYXNzKHMuY29udGFpbmVyTW9kaWZpZXJDbGFzcytcIm11bHRpcm93XCIpLFwiY29sdW1uXCI9PT1kLnNsaWRlc1BlckNvbHVtbkZpbGwmJmEuYWRkQ2xhc3Mocy5jb250YWluZXJNb2RpZmllckNsYXNzK1wibXVsdGlyb3ctY29sdW1uXCIpKTt2YXIgYz1kLmRpcmVjdGlvbiYmZC5kaXJlY3Rpb24hPT1zLmRpcmVjdGlvbix1PXMubG9vcCYmKGQuc2xpZGVzUGVyVmlldyE9PXMuc2xpZGVzUGVyVmlld3x8Yyk7YyYmdCYmdGhpcy5jaGFuZ2VEaXJlY3Rpb24oKSxuLmV4dGVuZCh0aGlzLnBhcmFtcyxkKSxuLmV4dGVuZCh0aGlzLHthbGxvd1RvdWNoTW92ZTp0aGlzLnBhcmFtcy5hbGxvd1RvdWNoTW92ZSxhbGxvd1NsaWRlTmV4dDp0aGlzLnBhcmFtcy5hbGxvd1NsaWRlTmV4dCxhbGxvd1NsaWRlUHJldjp0aGlzLnBhcmFtcy5hbGxvd1NsaWRlUHJldn0pLHRoaXMuY3VycmVudEJyZWFrcG9pbnQ9byx1JiZ0JiYodGhpcy5sb29wRGVzdHJveSgpLHRoaXMubG9vcENyZWF0ZSgpLHRoaXMudXBkYXRlU2xpZGVzKCksdGhpcy5zbGlkZVRvKGUtaSt0aGlzLmxvb3BlZFNsaWRlcywwLCExKSksdGhpcy5lbWl0KFwiYnJlYWtwb2ludFwiLGQpfX19LGdldEJyZWFrcG9pbnQ6ZnVuY3Rpb24oZSl7aWYoZSl7dmFyIGk9ITEscz1PYmplY3Qua2V5cyhlKS5tYXAoKGZ1bmN0aW9uKGUpe2lmKFwic3RyaW5nXCI9PXR5cGVvZiBlJiYwPT09ZS5pbmRleE9mKFwiQFwiKSl7dmFyIGk9cGFyc2VGbG9hdChlLnN1YnN0cigxKSk7cmV0dXJue3ZhbHVlOnQuaW5uZXJIZWlnaHQqaSxwb2ludDplfX1yZXR1cm57dmFsdWU6ZSxwb2ludDplfX0pKTtzLnNvcnQoKGZ1bmN0aW9uKGUsdCl7cmV0dXJuIHBhcnNlSW50KGUudmFsdWUsMTApLXBhcnNlSW50KHQudmFsdWUsMTApfSkpO2Zvcih2YXIgYT0wO2E8cy5sZW5ndGg7YSs9MSl7dmFyIHI9c1thXSxuPXIucG9pbnQ7ci52YWx1ZTw9dC5pbm5lcldpZHRoJiYoaT1uKX1yZXR1cm4gaXx8XCJtYXhcIn19fSxjaGVja092ZXJmbG93OntjaGVja092ZXJmbG93OmZ1bmN0aW9uKCl7dmFyIGU9dGhpcy5wYXJhbXMsdD10aGlzLmlzTG9ja2VkLGk9dGhpcy5zbGlkZXMubGVuZ3RoPjAmJmUuc2xpZGVzT2Zmc2V0QmVmb3JlK2Uuc3BhY2VCZXR3ZWVuKih0aGlzLnNsaWRlcy5sZW5ndGgtMSkrdGhpcy5zbGlkZXNbMF0ub2Zmc2V0V2lkdGgqdGhpcy5zbGlkZXMubGVuZ3RoO2Uuc2xpZGVzT2Zmc2V0QmVmb3JlJiZlLnNsaWRlc09mZnNldEFmdGVyJiZpP3RoaXMuaXNMb2NrZWQ9aTw9dGhpcy5zaXplOnRoaXMuaXNMb2NrZWQ9MT09PXRoaXMuc25hcEdyaWQubGVuZ3RoLHRoaXMuYWxsb3dTbGlkZU5leHQ9IXRoaXMuaXNMb2NrZWQsdGhpcy5hbGxvd1NsaWRlUHJldj0hdGhpcy5pc0xvY2tlZCx0IT09dGhpcy5pc0xvY2tlZCYmdGhpcy5lbWl0KHRoaXMuaXNMb2NrZWQ/XCJsb2NrXCI6XCJ1bmxvY2tcIiksdCYmdCE9PXRoaXMuaXNMb2NrZWQmJih0aGlzLmlzRW5kPSExLHRoaXMubmF2aWdhdGlvbi51cGRhdGUoKSl9fSxjbGFzc2VzOnthZGRDbGFzc2VzOmZ1bmN0aW9uKCl7dmFyIGU9dGhpcy5jbGFzc05hbWVzLHQ9dGhpcy5wYXJhbXMsaT10aGlzLnJ0bCxzPXRoaXMuJGVsLGE9W107YS5wdXNoKFwiaW5pdGlhbGl6ZWRcIiksYS5wdXNoKHQuZGlyZWN0aW9uKSx0LmZyZWVNb2RlJiZhLnB1c2goXCJmcmVlLW1vZGVcIiksdC5hdXRvSGVpZ2h0JiZhLnB1c2goXCJhdXRvaGVpZ2h0XCIpLGkmJmEucHVzaChcInJ0bFwiKSx0LnNsaWRlc1BlckNvbHVtbj4xJiYoYS5wdXNoKFwibXVsdGlyb3dcIiksXCJjb2x1bW5cIj09PXQuc2xpZGVzUGVyQ29sdW1uRmlsbCYmYS5wdXNoKFwibXVsdGlyb3ctY29sdW1uXCIpKSxJLmFuZHJvaWQmJmEucHVzaChcImFuZHJvaWRcIiksSS5pb3MmJmEucHVzaChcImlvc1wiKSx0LmNzc01vZGUmJmEucHVzaChcImNzcy1tb2RlXCIpLGEuZm9yRWFjaCgoZnVuY3Rpb24oaSl7ZS5wdXNoKHQuY29udGFpbmVyTW9kaWZpZXJDbGFzcytpKX0pKSxzLmFkZENsYXNzKGUuam9pbihcIiBcIikpfSxyZW1vdmVDbGFzc2VzOmZ1bmN0aW9uKCl7dmFyIGU9dGhpcy4kZWwsdD10aGlzLmNsYXNzTmFtZXM7ZS5yZW1vdmVDbGFzcyh0LmpvaW4oXCIgXCIpKX19LGltYWdlczp7bG9hZEltYWdlOmZ1bmN0aW9uKGUsaSxzLGEscixuKXt2YXIgbztmdW5jdGlvbiBsKCl7biYmbigpfWUuY29tcGxldGUmJnI/bCgpOmk/KChvPW5ldyB0LkltYWdlKS5vbmxvYWQ9bCxvLm9uZXJyb3I9bCxhJiYoby5zaXplcz1hKSxzJiYoby5zcmNzZXQ9cyksaSYmKG8uc3JjPWkpKTpsKCl9LHByZWxvYWRJbWFnZXM6ZnVuY3Rpb24oKXt2YXIgZT10aGlzO2Z1bmN0aW9uIHQoKXtudWxsIT1lJiZlJiYhZS5kZXN0cm95ZWQmJih2b2lkIDAhPT1lLmltYWdlc0xvYWRlZCYmKGUuaW1hZ2VzTG9hZGVkKz0xKSxlLmltYWdlc0xvYWRlZD09PWUuaW1hZ2VzVG9Mb2FkLmxlbmd0aCYmKGUucGFyYW1zLnVwZGF0ZU9uSW1hZ2VzUmVhZHkmJmUudXBkYXRlKCksZS5lbWl0KFwiaW1hZ2VzUmVhZHlcIikpKX1lLmltYWdlc1RvTG9hZD1lLiRlbC5maW5kKFwiaW1nXCIpO2Zvcih2YXIgaT0wO2k8ZS5pbWFnZXNUb0xvYWQubGVuZ3RoO2krPTEpe3ZhciBzPWUuaW1hZ2VzVG9Mb2FkW2ldO2UubG9hZEltYWdlKHMscy5jdXJyZW50U3JjfHxzLmdldEF0dHJpYnV0ZShcInNyY1wiKSxzLnNyY3NldHx8cy5nZXRBdHRyaWJ1dGUoXCJzcmNzZXRcIikscy5zaXplc3x8cy5nZXRBdHRyaWJ1dGUoXCJzaXplc1wiKSwhMCx0KX19fX0sRj17fSxXPWZ1bmN0aW9uKGUpe2Z1bmN0aW9uIHQoKXtmb3IodmFyIGksYSxyLGw9W10sZD1hcmd1bWVudHMubGVuZ3RoO2QtLTspbFtkXT1hcmd1bWVudHNbZF07MT09PWwubGVuZ3RoJiZsWzBdLmNvbnN0cnVjdG9yJiZsWzBdLmNvbnN0cnVjdG9yPT09T2JqZWN0P3I9bFswXTooYT0oaT1sKVswXSxyPWlbMV0pLHJ8fChyPXt9KSxyPW4uZXh0ZW5kKHt9LHIpLGEmJiFyLmVsJiYoci5lbD1hKSxlLmNhbGwodGhpcyxyKSxPYmplY3Qua2V5cyhZKS5mb3JFYWNoKChmdW5jdGlvbihlKXtPYmplY3Qua2V5cyhZW2VdKS5mb3JFYWNoKChmdW5jdGlvbihpKXt0LnByb3RvdHlwZVtpXXx8KHQucHJvdG90eXBlW2ldPVlbZV1baV0pfSkpfSkpO3ZhciBoPXRoaXM7dm9pZCAwPT09aC5tb2R1bGVzJiYoaC5tb2R1bGVzPXt9KSxPYmplY3Qua2V5cyhoLm1vZHVsZXMpLmZvckVhY2goKGZ1bmN0aW9uKGUpe3ZhciB0PWgubW9kdWxlc1tlXTtpZih0LnBhcmFtcyl7dmFyIGk9T2JqZWN0LmtleXModC5wYXJhbXMpWzBdLHM9dC5wYXJhbXNbaV07aWYoXCJvYmplY3RcIiE9dHlwZW9mIHN8fG51bGw9PT1zKXJldHVybjtpZighKGkgaW4gcil8fCEoXCJlbmFibGVkXCJpbiBzKSlyZXR1cm47ITA9PT1yW2ldJiYocltpXT17ZW5hYmxlZDohMH0pLFwib2JqZWN0XCIhPXR5cGVvZiByW2ldfHxcImVuYWJsZWRcImluIHJbaV18fChyW2ldLmVuYWJsZWQ9ITApLHJbaV18fChyW2ldPXtlbmFibGVkOiExfSl9fSkpO3ZhciBwPW4uZXh0ZW5kKHt9LFYpO2gudXNlTW9kdWxlc1BhcmFtcyhwKSxoLnBhcmFtcz1uLmV4dGVuZCh7fSxwLEYsciksaC5vcmlnaW5hbFBhcmFtcz1uLmV4dGVuZCh7fSxoLnBhcmFtcyksaC5wYXNzZWRQYXJhbXM9bi5leHRlbmQoe30sciksaC4kPXM7dmFyIGM9cyhoLnBhcmFtcy5lbCk7aWYoYT1jWzBdKXtpZihjLmxlbmd0aD4xKXt2YXIgdT1bXTtyZXR1cm4gYy5lYWNoKChmdW5jdGlvbihlLGkpe3ZhciBzPW4uZXh0ZW5kKHt9LHIse2VsOml9KTt1LnB1c2gobmV3IHQocykpfSkpLHV9dmFyIHYsZixtO3JldHVybiBhLnN3aXBlcj1oLGMuZGF0YShcInN3aXBlclwiLGgpLGEmJmEuc2hhZG93Um9vdCYmYS5zaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3I/KHY9cyhhLnNoYWRvd1Jvb3QucXVlcnlTZWxlY3RvcihcIi5cIitoLnBhcmFtcy53cmFwcGVyQ2xhc3MpKSkuY2hpbGRyZW49ZnVuY3Rpb24oZSl7cmV0dXJuIGMuY2hpbGRyZW4oZSl9OnY9Yy5jaGlsZHJlbihcIi5cIitoLnBhcmFtcy53cmFwcGVyQ2xhc3MpLG4uZXh0ZW5kKGgseyRlbDpjLGVsOmEsJHdyYXBwZXJFbDp2LHdyYXBwZXJFbDp2WzBdLGNsYXNzTmFtZXM6W10sc2xpZGVzOnMoKSxzbGlkZXNHcmlkOltdLHNuYXBHcmlkOltdLHNsaWRlc1NpemVzR3JpZDpbXSxpc0hvcml6b250YWw6ZnVuY3Rpb24oKXtyZXR1cm5cImhvcml6b250YWxcIj09PWgucGFyYW1zLmRpcmVjdGlvbn0saXNWZXJ0aWNhbDpmdW5jdGlvbigpe3JldHVyblwidmVydGljYWxcIj09PWgucGFyYW1zLmRpcmVjdGlvbn0scnRsOlwicnRsXCI9PT1hLmRpci50b0xvd2VyQ2FzZSgpfHxcInJ0bFwiPT09Yy5jc3MoXCJkaXJlY3Rpb25cIikscnRsVHJhbnNsYXRlOlwiaG9yaXpvbnRhbFwiPT09aC5wYXJhbXMuZGlyZWN0aW9uJiYoXCJydGxcIj09PWEuZGlyLnRvTG93ZXJDYXNlKCl8fFwicnRsXCI9PT1jLmNzcyhcImRpcmVjdGlvblwiKSksd3JvbmdSVEw6XCItd2Via2l0LWJveFwiPT09di5jc3MoXCJkaXNwbGF5XCIpLGFjdGl2ZUluZGV4OjAscmVhbEluZGV4OjAsaXNCZWdpbm5pbmc6ITAsaXNFbmQ6ITEsdHJhbnNsYXRlOjAscHJldmlvdXNUcmFuc2xhdGU6MCxwcm9ncmVzczowLHZlbG9jaXR5OjAsYW5pbWF0aW5nOiExLGFsbG93U2xpZGVOZXh0OmgucGFyYW1zLmFsbG93U2xpZGVOZXh0LGFsbG93U2xpZGVQcmV2OmgucGFyYW1zLmFsbG93U2xpZGVQcmV2LHRvdWNoRXZlbnRzOihmPVtcInRvdWNoc3RhcnRcIixcInRvdWNobW92ZVwiLFwidG91Y2hlbmRcIixcInRvdWNoY2FuY2VsXCJdLG09W1wibW91c2Vkb3duXCIsXCJtb3VzZW1vdmVcIixcIm1vdXNldXBcIl0sby5wb2ludGVyRXZlbnRzJiYobT1bXCJwb2ludGVyZG93blwiLFwicG9pbnRlcm1vdmVcIixcInBvaW50ZXJ1cFwiXSksaC50b3VjaEV2ZW50c1RvdWNoPXtzdGFydDpmWzBdLG1vdmU6ZlsxXSxlbmQ6ZlsyXSxjYW5jZWw6ZlszXX0saC50b3VjaEV2ZW50c0Rlc2t0b3A9e3N0YXJ0Om1bMF0sbW92ZTptWzFdLGVuZDptWzJdfSxvLnRvdWNofHwhaC5wYXJhbXMuc2ltdWxhdGVUb3VjaD9oLnRvdWNoRXZlbnRzVG91Y2g6aC50b3VjaEV2ZW50c0Rlc2t0b3ApLHRvdWNoRXZlbnRzRGF0YTp7aXNUb3VjaGVkOnZvaWQgMCxpc01vdmVkOnZvaWQgMCxhbGxvd1RvdWNoQ2FsbGJhY2tzOnZvaWQgMCx0b3VjaFN0YXJ0VGltZTp2b2lkIDAsaXNTY3JvbGxpbmc6dm9pZCAwLGN1cnJlbnRUcmFuc2xhdGU6dm9pZCAwLHN0YXJ0VHJhbnNsYXRlOnZvaWQgMCxhbGxvd1RocmVzaG9sZE1vdmU6dm9pZCAwLGZvcm1FbGVtZW50czpcImlucHV0LCBzZWxlY3QsIG9wdGlvbiwgdGV4dGFyZWEsIGJ1dHRvbiwgdmlkZW8sIGxhYmVsXCIsbGFzdENsaWNrVGltZTpuLm5vdygpLGNsaWNrVGltZW91dDp2b2lkIDAsdmVsb2NpdGllczpbXSxhbGxvd01vbWVudHVtQm91bmNlOnZvaWQgMCxpc1RvdWNoRXZlbnQ6dm9pZCAwLHN0YXJ0TW92aW5nOnZvaWQgMH0sYWxsb3dDbGljazohMCxhbGxvd1RvdWNoTW92ZTpoLnBhcmFtcy5hbGxvd1RvdWNoTW92ZSx0b3VjaGVzOntzdGFydFg6MCxzdGFydFk6MCxjdXJyZW50WDowLGN1cnJlbnRZOjAsZGlmZjowfSxpbWFnZXNUb0xvYWQ6W10saW1hZ2VzTG9hZGVkOjB9KSxoLnVzZU1vZHVsZXMoKSxoLnBhcmFtcy5pbml0JiZoLmluaXQoKSxofX1lJiYodC5fX3Byb3RvX189ZSksdC5wcm90b3R5cGU9T2JqZWN0LmNyZWF0ZShlJiZlLnByb3RvdHlwZSksdC5wcm90b3R5cGUuY29uc3RydWN0b3I9dDt2YXIgaT17ZXh0ZW5kZWREZWZhdWx0czp7Y29uZmlndXJhYmxlOiEwfSxkZWZhdWx0czp7Y29uZmlndXJhYmxlOiEwfSxDbGFzczp7Y29uZmlndXJhYmxlOiEwfSwkOntjb25maWd1cmFibGU6ITB9fTtyZXR1cm4gdC5wcm90b3R5cGUuc2xpZGVzUGVyVmlld0R5bmFtaWM9ZnVuY3Rpb24oKXt2YXIgZT10aGlzLnBhcmFtcyx0PXRoaXMuc2xpZGVzLGk9dGhpcy5zbGlkZXNHcmlkLHM9dGhpcy5zaXplLGE9dGhpcy5hY3RpdmVJbmRleCxyPTE7aWYoZS5jZW50ZXJlZFNsaWRlcyl7Zm9yKHZhciBuLG89dFthXS5zd2lwZXJTbGlkZVNpemUsbD1hKzE7bDx0Lmxlbmd0aDtsKz0xKXRbbF0mJiFuJiYocis9MSwobys9dFtsXS5zd2lwZXJTbGlkZVNpemUpPnMmJihuPSEwKSk7Zm9yKHZhciBkPWEtMTtkPj0wO2QtPTEpdFtkXSYmIW4mJihyKz0xLChvKz10W2RdLnN3aXBlclNsaWRlU2l6ZSk+cyYmKG49ITApKX1lbHNlIGZvcih2YXIgaD1hKzE7aDx0Lmxlbmd0aDtoKz0xKWlbaF0taVthXTxzJiYocis9MSk7cmV0dXJuIHJ9LHQucHJvdG90eXBlLnVwZGF0ZT1mdW5jdGlvbigpe3ZhciBlPXRoaXM7aWYoZSYmIWUuZGVzdHJveWVkKXt2YXIgdD1lLnNuYXBHcmlkLGk9ZS5wYXJhbXM7aS5icmVha3BvaW50cyYmZS5zZXRCcmVha3BvaW50KCksZS51cGRhdGVTaXplKCksZS51cGRhdGVTbGlkZXMoKSxlLnVwZGF0ZVByb2dyZXNzKCksZS51cGRhdGVTbGlkZXNDbGFzc2VzKCksZS5wYXJhbXMuZnJlZU1vZGU/KHMoKSxlLnBhcmFtcy5hdXRvSGVpZ2h0JiZlLnVwZGF0ZUF1dG9IZWlnaHQoKSk6KChcImF1dG9cIj09PWUucGFyYW1zLnNsaWRlc1BlclZpZXd8fGUucGFyYW1zLnNsaWRlc1BlclZpZXc+MSkmJmUuaXNFbmQmJiFlLnBhcmFtcy5jZW50ZXJlZFNsaWRlcz9lLnNsaWRlVG8oZS5zbGlkZXMubGVuZ3RoLTEsMCwhMSwhMCk6ZS5zbGlkZVRvKGUuYWN0aXZlSW5kZXgsMCwhMSwhMCkpfHxzKCksaS53YXRjaE92ZXJmbG93JiZ0IT09ZS5zbmFwR3JpZCYmZS5jaGVja092ZXJmbG93KCksZS5lbWl0KFwidXBkYXRlXCIpfWZ1bmN0aW9uIHMoKXt2YXIgdD1lLnJ0bFRyYW5zbGF0ZT8tMSplLnRyYW5zbGF0ZTplLnRyYW5zbGF0ZSxpPU1hdGgubWluKE1hdGgubWF4KHQsZS5tYXhUcmFuc2xhdGUoKSksZS5taW5UcmFuc2xhdGUoKSk7ZS5zZXRUcmFuc2xhdGUoaSksZS51cGRhdGVBY3RpdmVJbmRleCgpLGUudXBkYXRlU2xpZGVzQ2xhc3NlcygpfX0sdC5wcm90b3R5cGUuY2hhbmdlRGlyZWN0aW9uPWZ1bmN0aW9uKGUsdCl7dm9pZCAwPT09dCYmKHQ9ITApO3ZhciBpPXRoaXMucGFyYW1zLmRpcmVjdGlvbjtyZXR1cm4gZXx8KGU9XCJob3Jpem9udGFsXCI9PT1pP1widmVydGljYWxcIjpcImhvcml6b250YWxcIiksZT09PWl8fFwiaG9yaXpvbnRhbFwiIT09ZSYmXCJ2ZXJ0aWNhbFwiIT09ZXx8KHRoaXMuJGVsLnJlbW92ZUNsYXNzKFwiXCIrdGhpcy5wYXJhbXMuY29udGFpbmVyTW9kaWZpZXJDbGFzcytpKS5hZGRDbGFzcyhcIlwiK3RoaXMucGFyYW1zLmNvbnRhaW5lck1vZGlmaWVyQ2xhc3MrZSksdGhpcy5wYXJhbXMuZGlyZWN0aW9uPWUsdGhpcy5zbGlkZXMuZWFjaCgoZnVuY3Rpb24odCxpKXtcInZlcnRpY2FsXCI9PT1lP2kuc3R5bGUud2lkdGg9XCJcIjppLnN0eWxlLmhlaWdodD1cIlwifSkpLHRoaXMuZW1pdChcImNoYW5nZURpcmVjdGlvblwiKSx0JiZ0aGlzLnVwZGF0ZSgpKSx0aGlzfSx0LnByb3RvdHlwZS5pbml0PWZ1bmN0aW9uKCl7dGhpcy5pbml0aWFsaXplZHx8KHRoaXMuZW1pdChcImJlZm9yZUluaXRcIiksdGhpcy5wYXJhbXMuYnJlYWtwb2ludHMmJnRoaXMuc2V0QnJlYWtwb2ludCgpLHRoaXMuYWRkQ2xhc3NlcygpLHRoaXMucGFyYW1zLmxvb3AmJnRoaXMubG9vcENyZWF0ZSgpLHRoaXMudXBkYXRlU2l6ZSgpLHRoaXMudXBkYXRlU2xpZGVzKCksdGhpcy5wYXJhbXMud2F0Y2hPdmVyZmxvdyYmdGhpcy5jaGVja092ZXJmbG93KCksdGhpcy5wYXJhbXMuZ3JhYkN1cnNvciYmdGhpcy5zZXRHcmFiQ3Vyc29yKCksdGhpcy5wYXJhbXMucHJlbG9hZEltYWdlcyYmdGhpcy5wcmVsb2FkSW1hZ2VzKCksdGhpcy5wYXJhbXMubG9vcD90aGlzLnNsaWRlVG8odGhpcy5wYXJhbXMuaW5pdGlhbFNsaWRlK3RoaXMubG9vcGVkU2xpZGVzLDAsdGhpcy5wYXJhbXMucnVuQ2FsbGJhY2tzT25Jbml0KTp0aGlzLnNsaWRlVG8odGhpcy5wYXJhbXMuaW5pdGlhbFNsaWRlLDAsdGhpcy5wYXJhbXMucnVuQ2FsbGJhY2tzT25Jbml0KSx0aGlzLmF0dGFjaEV2ZW50cygpLHRoaXMuaW5pdGlhbGl6ZWQ9ITAsdGhpcy5lbWl0KFwiaW5pdFwiKSl9LHQucHJvdG90eXBlLmRlc3Ryb3k9ZnVuY3Rpb24oZSx0KXt2b2lkIDA9PT1lJiYoZT0hMCksdm9pZCAwPT09dCYmKHQ9ITApO3ZhciBpPXRoaXMscz1pLnBhcmFtcyxhPWkuJGVsLHI9aS4kd3JhcHBlckVsLG89aS5zbGlkZXM7cmV0dXJuIHZvaWQgMD09PWkucGFyYW1zfHxpLmRlc3Ryb3llZHx8KGkuZW1pdChcImJlZm9yZURlc3Ryb3lcIiksaS5pbml0aWFsaXplZD0hMSxpLmRldGFjaEV2ZW50cygpLHMubG9vcCYmaS5sb29wRGVzdHJveSgpLHQmJihpLnJlbW92ZUNsYXNzZXMoKSxhLnJlbW92ZUF0dHIoXCJzdHlsZVwiKSxyLnJlbW92ZUF0dHIoXCJzdHlsZVwiKSxvJiZvLmxlbmd0aCYmby5yZW1vdmVDbGFzcyhbcy5zbGlkZVZpc2libGVDbGFzcyxzLnNsaWRlQWN0aXZlQ2xhc3Mscy5zbGlkZU5leHRDbGFzcyxzLnNsaWRlUHJldkNsYXNzXS5qb2luKFwiIFwiKSkucmVtb3ZlQXR0cihcInN0eWxlXCIpLnJlbW92ZUF0dHIoXCJkYXRhLXN3aXBlci1zbGlkZS1pbmRleFwiKSksaS5lbWl0KFwiZGVzdHJveVwiKSxPYmplY3Qua2V5cyhpLmV2ZW50c0xpc3RlbmVycykuZm9yRWFjaCgoZnVuY3Rpb24oZSl7aS5vZmYoZSl9KSksITEhPT1lJiYoaS4kZWxbMF0uc3dpcGVyPW51bGwsaS4kZWwuZGF0YShcInN3aXBlclwiLG51bGwpLG4uZGVsZXRlUHJvcHMoaSkpLGkuZGVzdHJveWVkPSEwKSxudWxsfSx0LmV4dGVuZERlZmF1bHRzPWZ1bmN0aW9uKGUpe24uZXh0ZW5kKEYsZSl9LGkuZXh0ZW5kZWREZWZhdWx0cy5nZXQ9ZnVuY3Rpb24oKXtyZXR1cm4gRn0saS5kZWZhdWx0cy5nZXQ9ZnVuY3Rpb24oKXtyZXR1cm4gVn0saS5DbGFzcy5nZXQ9ZnVuY3Rpb24oKXtyZXR1cm4gZX0saS4kLmdldD1mdW5jdGlvbigpe3JldHVybiBzfSxPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0LGkpLHR9KGwpLFI9e25hbWU6XCJkZXZpY2VcIixwcm90bzp7ZGV2aWNlOkl9LHN0YXRpYzp7ZGV2aWNlOkl9fSxxPXtuYW1lOlwic3VwcG9ydFwiLHByb3RvOntzdXBwb3J0Om99LHN0YXRpYzp7c3VwcG9ydDpvfX0saj17aXNFZGdlOiEhdC5uYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC9FZGdlL2cpLGlzU2FmYXJpOmZ1bmN0aW9uKCl7dmFyIGU9dC5uYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCk7cmV0dXJuIGUuaW5kZXhPZihcInNhZmFyaVwiKT49MCYmZS5pbmRleE9mKFwiY2hyb21lXCIpPDAmJmUuaW5kZXhPZihcImFuZHJvaWRcIik8MH0oKSxpc1VpV2ViVmlldzovKGlQaG9uZXxpUG9kfGlQYWQpLipBcHBsZVdlYktpdCg/IS4qU2FmYXJpKS9pLnRlc3QodC5uYXZpZ2F0b3IudXNlckFnZW50KX0sSz17bmFtZTpcImJyb3dzZXJcIixwcm90bzp7YnJvd3NlcjpqfSxzdGF0aWM6e2Jyb3dzZXI6an19LFU9e25hbWU6XCJyZXNpemVcIixjcmVhdGU6ZnVuY3Rpb24oKXt2YXIgZT10aGlzO24uZXh0ZW5kKGUse3Jlc2l6ZTp7cmVzaXplSGFuZGxlcjpmdW5jdGlvbigpe2UmJiFlLmRlc3Ryb3llZCYmZS5pbml0aWFsaXplZCYmKGUuZW1pdChcImJlZm9yZVJlc2l6ZVwiKSxlLmVtaXQoXCJyZXNpemVcIikpfSxvcmllbnRhdGlvbkNoYW5nZUhhbmRsZXI6ZnVuY3Rpb24oKXtlJiYhZS5kZXN0cm95ZWQmJmUuaW5pdGlhbGl6ZWQmJmUuZW1pdChcIm9yaWVudGF0aW9uY2hhbmdlXCIpfX19KX0sb246e2luaXQ6ZnVuY3Rpb24oKXt0LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIix0aGlzLnJlc2l6ZS5yZXNpemVIYW5kbGVyKSx0LmFkZEV2ZW50TGlzdGVuZXIoXCJvcmllbnRhdGlvbmNoYW5nZVwiLHRoaXMucmVzaXplLm9yaWVudGF0aW9uQ2hhbmdlSGFuZGxlcil9LGRlc3Ryb3k6ZnVuY3Rpb24oKXt0LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIix0aGlzLnJlc2l6ZS5yZXNpemVIYW5kbGVyKSx0LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJvcmllbnRhdGlvbmNoYW5nZVwiLHRoaXMucmVzaXplLm9yaWVudGF0aW9uQ2hhbmdlSGFuZGxlcil9fX0sXz17ZnVuYzp0Lk11dGF0aW9uT2JzZXJ2ZXJ8fHQuV2Via2l0TXV0YXRpb25PYnNlcnZlcixhdHRhY2g6ZnVuY3Rpb24oZSxpKXt2b2lkIDA9PT1pJiYoaT17fSk7dmFyIHM9dGhpcyxhPW5ldygwLF8uZnVuYykoKGZ1bmN0aW9uKGUpe2lmKDEhPT1lLmxlbmd0aCl7dmFyIGk9ZnVuY3Rpb24oKXtzLmVtaXQoXCJvYnNlcnZlclVwZGF0ZVwiLGVbMF0pfTt0LnJlcXVlc3RBbmltYXRpb25GcmFtZT90LnJlcXVlc3RBbmltYXRpb25GcmFtZShpKTp0LnNldFRpbWVvdXQoaSwwKX1lbHNlIHMuZW1pdChcIm9ic2VydmVyVXBkYXRlXCIsZVswXSl9KSk7YS5vYnNlcnZlKGUse2F0dHJpYnV0ZXM6dm9pZCAwPT09aS5hdHRyaWJ1dGVzfHxpLmF0dHJpYnV0ZXMsY2hpbGRMaXN0OnZvaWQgMD09PWkuY2hpbGRMaXN0fHxpLmNoaWxkTGlzdCxjaGFyYWN0ZXJEYXRhOnZvaWQgMD09PWkuY2hhcmFjdGVyRGF0YXx8aS5jaGFyYWN0ZXJEYXRhfSkscy5vYnNlcnZlci5vYnNlcnZlcnMucHVzaChhKX0saW5pdDpmdW5jdGlvbigpe2lmKG8ub2JzZXJ2ZXImJnRoaXMucGFyYW1zLm9ic2VydmVyKXtpZih0aGlzLnBhcmFtcy5vYnNlcnZlUGFyZW50cylmb3IodmFyIGU9dGhpcy4kZWwucGFyZW50cygpLHQ9MDt0PGUubGVuZ3RoO3QrPTEpdGhpcy5vYnNlcnZlci5hdHRhY2goZVt0XSk7dGhpcy5vYnNlcnZlci5hdHRhY2godGhpcy4kZWxbMF0se2NoaWxkTGlzdDp0aGlzLnBhcmFtcy5vYnNlcnZlU2xpZGVDaGlsZHJlbn0pLHRoaXMub2JzZXJ2ZXIuYXR0YWNoKHRoaXMuJHdyYXBwZXJFbFswXSx7YXR0cmlidXRlczohMX0pfX0sZGVzdHJveTpmdW5jdGlvbigpe3RoaXMub2JzZXJ2ZXIub2JzZXJ2ZXJzLmZvckVhY2goKGZ1bmN0aW9uKGUpe2UuZGlzY29ubmVjdCgpfSkpLHRoaXMub2JzZXJ2ZXIub2JzZXJ2ZXJzPVtdfX0sWj17bmFtZTpcIm9ic2VydmVyXCIscGFyYW1zOntvYnNlcnZlcjohMSxvYnNlcnZlUGFyZW50czohMSxvYnNlcnZlU2xpZGVDaGlsZHJlbjohMX0sY3JlYXRlOmZ1bmN0aW9uKCl7bi5leHRlbmQodGhpcyx7b2JzZXJ2ZXI6e2luaXQ6Xy5pbml0LmJpbmQodGhpcyksYXR0YWNoOl8uYXR0YWNoLmJpbmQodGhpcyksZGVzdHJveTpfLmRlc3Ryb3kuYmluZCh0aGlzKSxvYnNlcnZlcnM6W119fSl9LG9uOntpbml0OmZ1bmN0aW9uKCl7dGhpcy5vYnNlcnZlci5pbml0KCl9LGRlc3Ryb3k6ZnVuY3Rpb24oKXt0aGlzLm9ic2VydmVyLmRlc3Ryb3koKX19fSxRPXt1cGRhdGU6ZnVuY3Rpb24oZSl7dmFyIHQ9dGhpcyxpPXQucGFyYW1zLHM9aS5zbGlkZXNQZXJWaWV3LGE9aS5zbGlkZXNQZXJHcm91cCxyPWkuY2VudGVyZWRTbGlkZXMsbz10LnBhcmFtcy52aXJ0dWFsLGw9by5hZGRTbGlkZXNCZWZvcmUsZD1vLmFkZFNsaWRlc0FmdGVyLGg9dC52aXJ0dWFsLHA9aC5mcm9tLGM9aC50byx1PWguc2xpZGVzLHY9aC5zbGlkZXNHcmlkLGY9aC5yZW5kZXJTbGlkZSxtPWgub2Zmc2V0O3QudXBkYXRlQWN0aXZlSW5kZXgoKTt2YXIgZyxiLHcseT10LmFjdGl2ZUluZGV4fHwwO2c9dC5ydGxUcmFuc2xhdGU/XCJyaWdodFwiOnQuaXNIb3Jpem9udGFsKCk/XCJsZWZ0XCI6XCJ0b3BcIixyPyhiPU1hdGguZmxvb3Iocy8yKSthK2wsdz1NYXRoLmZsb29yKHMvMikrYStkKTooYj1zKyhhLTEpK2wsdz1hK2QpO3ZhciB4PU1hdGgubWF4KCh5fHwwKS13LDApLFQ9TWF0aC5taW4oKHl8fDApK2IsdS5sZW5ndGgtMSksRT0odC5zbGlkZXNHcmlkW3hdfHwwKS0odC5zbGlkZXNHcmlkWzBdfHwwKTtmdW5jdGlvbiBTKCl7dC51cGRhdGVTbGlkZXMoKSx0LnVwZGF0ZVByb2dyZXNzKCksdC51cGRhdGVTbGlkZXNDbGFzc2VzKCksdC5sYXp5JiZ0LnBhcmFtcy5sYXp5LmVuYWJsZWQmJnQubGF6eS5sb2FkKCl9aWYobi5leHRlbmQodC52aXJ0dWFsLHtmcm9tOngsdG86VCxvZmZzZXQ6RSxzbGlkZXNHcmlkOnQuc2xpZGVzR3JpZH0pLHA9PT14JiZjPT09VCYmIWUpcmV0dXJuIHQuc2xpZGVzR3JpZCE9PXYmJkUhPT1tJiZ0LnNsaWRlcy5jc3MoZyxFK1wicHhcIiksdm9pZCB0LnVwZGF0ZVByb2dyZXNzKCk7aWYodC5wYXJhbXMudmlydHVhbC5yZW5kZXJFeHRlcm5hbClyZXR1cm4gdC5wYXJhbXMudmlydHVhbC5yZW5kZXJFeHRlcm5hbC5jYWxsKHQse29mZnNldDpFLGZyb206eCx0bzpULHNsaWRlczpmdW5jdGlvbigpe2Zvcih2YXIgZT1bXSx0PXg7dDw9VDt0Kz0xKWUucHVzaCh1W3RdKTtyZXR1cm4gZX0oKX0pLHZvaWQgUygpO3ZhciBDPVtdLE09W107aWYoZSl0LiR3cmFwcGVyRWwuZmluZChcIi5cIit0LnBhcmFtcy5zbGlkZUNsYXNzKS5yZW1vdmUoKTtlbHNlIGZvcih2YXIgUD1wO1A8PWM7UCs9MSkoUDx4fHxQPlQpJiZ0LiR3cmFwcGVyRWwuZmluZChcIi5cIit0LnBhcmFtcy5zbGlkZUNsYXNzKydbZGF0YS1zd2lwZXItc2xpZGUtaW5kZXg9XCInK1ArJ1wiXScpLnJlbW92ZSgpO2Zvcih2YXIgej0wO3o8dS5sZW5ndGg7eis9MSl6Pj14JiZ6PD1UJiYodm9pZCAwPT09Y3x8ZT9NLnB1c2goeik6KHo+YyYmTS5wdXNoKHopLHo8cCYmQy5wdXNoKHopKSk7TS5mb3JFYWNoKChmdW5jdGlvbihlKXt0LiR3cmFwcGVyRWwuYXBwZW5kKGYodVtlXSxlKSl9KSksQy5zb3J0KChmdW5jdGlvbihlLHQpe3JldHVybiB0LWV9KSkuZm9yRWFjaCgoZnVuY3Rpb24oZSl7dC4kd3JhcHBlckVsLnByZXBlbmQoZih1W2VdLGUpKX0pKSx0LiR3cmFwcGVyRWwuY2hpbGRyZW4oXCIuc3dpcGVyLXNsaWRlXCIpLmNzcyhnLEUrXCJweFwiKSxTKCl9LHJlbmRlclNsaWRlOmZ1bmN0aW9uKGUsdCl7dmFyIGk9dGhpcy5wYXJhbXMudmlydHVhbDtpZihpLmNhY2hlJiZ0aGlzLnZpcnR1YWwuY2FjaGVbdF0pcmV0dXJuIHRoaXMudmlydHVhbC5jYWNoZVt0XTt2YXIgYT1pLnJlbmRlclNsaWRlP3MoaS5yZW5kZXJTbGlkZS5jYWxsKHRoaXMsZSx0KSk6cygnPGRpdiBjbGFzcz1cIicrdGhpcy5wYXJhbXMuc2xpZGVDbGFzcysnXCIgZGF0YS1zd2lwZXItc2xpZGUtaW5kZXg9XCInK3QrJ1wiPicrZStcIjwvZGl2PlwiKTtyZXR1cm4gYS5hdHRyKFwiZGF0YS1zd2lwZXItc2xpZGUtaW5kZXhcIil8fGEuYXR0cihcImRhdGEtc3dpcGVyLXNsaWRlLWluZGV4XCIsdCksaS5jYWNoZSYmKHRoaXMudmlydHVhbC5jYWNoZVt0XT1hKSxhfSxhcHBlbmRTbGlkZTpmdW5jdGlvbihlKXtpZihcIm9iamVjdFwiPT10eXBlb2YgZSYmXCJsZW5ndGhcImluIGUpZm9yKHZhciB0PTA7dDxlLmxlbmd0aDt0Kz0xKWVbdF0mJnRoaXMudmlydHVhbC5zbGlkZXMucHVzaChlW3RdKTtlbHNlIHRoaXMudmlydHVhbC5zbGlkZXMucHVzaChlKTt0aGlzLnZpcnR1YWwudXBkYXRlKCEwKX0scHJlcGVuZFNsaWRlOmZ1bmN0aW9uKGUpe3ZhciB0PXRoaXMuYWN0aXZlSW5kZXgsaT10KzEscz0xO2lmKEFycmF5LmlzQXJyYXkoZSkpe2Zvcih2YXIgYT0wO2E8ZS5sZW5ndGg7YSs9MSllW2FdJiZ0aGlzLnZpcnR1YWwuc2xpZGVzLnVuc2hpZnQoZVthXSk7aT10K2UubGVuZ3RoLHM9ZS5sZW5ndGh9ZWxzZSB0aGlzLnZpcnR1YWwuc2xpZGVzLnVuc2hpZnQoZSk7aWYodGhpcy5wYXJhbXMudmlydHVhbC5jYWNoZSl7dmFyIHI9dGhpcy52aXJ0dWFsLmNhY2hlLG49e307T2JqZWN0LmtleXMocikuZm9yRWFjaCgoZnVuY3Rpb24oZSl7dmFyIHQ9cltlXSxpPXQuYXR0cihcImRhdGEtc3dpcGVyLXNsaWRlLWluZGV4XCIpO2kmJnQuYXR0cihcImRhdGEtc3dpcGVyLXNsaWRlLWluZGV4XCIscGFyc2VJbnQoaSwxMCkrMSksbltwYXJzZUludChlLDEwKStzXT10fSkpLHRoaXMudmlydHVhbC5jYWNoZT1ufXRoaXMudmlydHVhbC51cGRhdGUoITApLHRoaXMuc2xpZGVUbyhpLDApfSxyZW1vdmVTbGlkZTpmdW5jdGlvbihlKXtpZihudWxsIT1lKXt2YXIgdD10aGlzLmFjdGl2ZUluZGV4O2lmKEFycmF5LmlzQXJyYXkoZSkpZm9yKHZhciBpPWUubGVuZ3RoLTE7aT49MDtpLT0xKXRoaXMudmlydHVhbC5zbGlkZXMuc3BsaWNlKGVbaV0sMSksdGhpcy5wYXJhbXMudmlydHVhbC5jYWNoZSYmZGVsZXRlIHRoaXMudmlydHVhbC5jYWNoZVtlW2ldXSxlW2ldPHQmJih0LT0xKSx0PU1hdGgubWF4KHQsMCk7ZWxzZSB0aGlzLnZpcnR1YWwuc2xpZGVzLnNwbGljZShlLDEpLHRoaXMucGFyYW1zLnZpcnR1YWwuY2FjaGUmJmRlbGV0ZSB0aGlzLnZpcnR1YWwuY2FjaGVbZV0sZTx0JiYodC09MSksdD1NYXRoLm1heCh0LDApO3RoaXMudmlydHVhbC51cGRhdGUoITApLHRoaXMuc2xpZGVUbyh0LDApfX0scmVtb3ZlQWxsU2xpZGVzOmZ1bmN0aW9uKCl7dGhpcy52aXJ0dWFsLnNsaWRlcz1bXSx0aGlzLnBhcmFtcy52aXJ0dWFsLmNhY2hlJiYodGhpcy52aXJ0dWFsLmNhY2hlPXt9KSx0aGlzLnZpcnR1YWwudXBkYXRlKCEwKSx0aGlzLnNsaWRlVG8oMCwwKX19LEo9e25hbWU6XCJ2aXJ0dWFsXCIscGFyYW1zOnt2aXJ0dWFsOntlbmFibGVkOiExLHNsaWRlczpbXSxjYWNoZTohMCxyZW5kZXJTbGlkZTpudWxsLHJlbmRlckV4dGVybmFsOm51bGwsYWRkU2xpZGVzQmVmb3JlOjAsYWRkU2xpZGVzQWZ0ZXI6MH19LGNyZWF0ZTpmdW5jdGlvbigpe24uZXh0ZW5kKHRoaXMse3ZpcnR1YWw6e3VwZGF0ZTpRLnVwZGF0ZS5iaW5kKHRoaXMpLGFwcGVuZFNsaWRlOlEuYXBwZW5kU2xpZGUuYmluZCh0aGlzKSxwcmVwZW5kU2xpZGU6US5wcmVwZW5kU2xpZGUuYmluZCh0aGlzKSxyZW1vdmVTbGlkZTpRLnJlbW92ZVNsaWRlLmJpbmQodGhpcykscmVtb3ZlQWxsU2xpZGVzOlEucmVtb3ZlQWxsU2xpZGVzLmJpbmQodGhpcykscmVuZGVyU2xpZGU6US5yZW5kZXJTbGlkZS5iaW5kKHRoaXMpLHNsaWRlczp0aGlzLnBhcmFtcy52aXJ0dWFsLnNsaWRlcyxjYWNoZTp7fX19KX0sb246e2JlZm9yZUluaXQ6ZnVuY3Rpb24oKXtpZih0aGlzLnBhcmFtcy52aXJ0dWFsLmVuYWJsZWQpe3RoaXMuY2xhc3NOYW1lcy5wdXNoKHRoaXMucGFyYW1zLmNvbnRhaW5lck1vZGlmaWVyQ2xhc3MrXCJ2aXJ0dWFsXCIpO3ZhciBlPXt3YXRjaFNsaWRlc1Byb2dyZXNzOiEwfTtuLmV4dGVuZCh0aGlzLnBhcmFtcyxlKSxuLmV4dGVuZCh0aGlzLm9yaWdpbmFsUGFyYW1zLGUpLHRoaXMucGFyYW1zLmluaXRpYWxTbGlkZXx8dGhpcy52aXJ0dWFsLnVwZGF0ZSgpfX0sc2V0VHJhbnNsYXRlOmZ1bmN0aW9uKCl7dGhpcy5wYXJhbXMudmlydHVhbC5lbmFibGVkJiZ0aGlzLnZpcnR1YWwudXBkYXRlKCl9fX0sZWU9e2hhbmRsZTpmdW5jdGlvbihpKXt2YXIgcz10aGlzLnJ0bFRyYW5zbGF0ZSxhPWk7YS5vcmlnaW5hbEV2ZW50JiYoYT1hLm9yaWdpbmFsRXZlbnQpO3ZhciByPWEua2V5Q29kZXx8YS5jaGFyQ29kZTtpZighdGhpcy5hbGxvd1NsaWRlTmV4dCYmKHRoaXMuaXNIb3Jpem9udGFsKCkmJjM5PT09cnx8dGhpcy5pc1ZlcnRpY2FsKCkmJjQwPT09cnx8MzQ9PT1yKSlyZXR1cm4hMTtpZighdGhpcy5hbGxvd1NsaWRlUHJldiYmKHRoaXMuaXNIb3Jpem9udGFsKCkmJjM3PT09cnx8dGhpcy5pc1ZlcnRpY2FsKCkmJjM4PT09cnx8MzM9PT1yKSlyZXR1cm4hMTtpZighKGEuc2hpZnRLZXl8fGEuYWx0S2V5fHxhLmN0cmxLZXl8fGEubWV0YUtleXx8ZS5hY3RpdmVFbGVtZW50JiZlLmFjdGl2ZUVsZW1lbnQubm9kZU5hbWUmJihcImlucHV0XCI9PT1lLmFjdGl2ZUVsZW1lbnQubm9kZU5hbWUudG9Mb3dlckNhc2UoKXx8XCJ0ZXh0YXJlYVwiPT09ZS5hY3RpdmVFbGVtZW50Lm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkpKSl7aWYodGhpcy5wYXJhbXMua2V5Ym9hcmQub25seUluVmlld3BvcnQmJigzMz09PXJ8fDM0PT09cnx8Mzc9PT1yfHwzOT09PXJ8fDM4PT09cnx8NDA9PT1yKSl7dmFyIG49ITE7aWYodGhpcy4kZWwucGFyZW50cyhcIi5cIit0aGlzLnBhcmFtcy5zbGlkZUNsYXNzKS5sZW5ndGg+MCYmMD09PXRoaXMuJGVsLnBhcmVudHMoXCIuXCIrdGhpcy5wYXJhbXMuc2xpZGVBY3RpdmVDbGFzcykubGVuZ3RoKXJldHVybjt2YXIgbz10LmlubmVyV2lkdGgsbD10LmlubmVySGVpZ2h0LGQ9dGhpcy4kZWwub2Zmc2V0KCk7cyYmKGQubGVmdC09dGhpcy4kZWxbMF0uc2Nyb2xsTGVmdCk7Zm9yKHZhciBoPVtbZC5sZWZ0LGQudG9wXSxbZC5sZWZ0K3RoaXMud2lkdGgsZC50b3BdLFtkLmxlZnQsZC50b3ArdGhpcy5oZWlnaHRdLFtkLmxlZnQrdGhpcy53aWR0aCxkLnRvcCt0aGlzLmhlaWdodF1dLHA9MDtwPGgubGVuZ3RoO3ArPTEpe3ZhciBjPWhbcF07Y1swXT49MCYmY1swXTw9byYmY1sxXT49MCYmY1sxXTw9bCYmKG49ITApfWlmKCFuKXJldHVybn10aGlzLmlzSG9yaXpvbnRhbCgpPygzMyE9PXImJjM0IT09ciYmMzchPT1yJiYzOSE9PXJ8fChhLnByZXZlbnREZWZhdWx0P2EucHJldmVudERlZmF1bHQoKTphLnJldHVyblZhbHVlPSExKSwoMzQhPT1yJiYzOSE9PXJ8fHMpJiYoMzMhPT1yJiYzNyE9PXJ8fCFzKXx8dGhpcy5zbGlkZU5leHQoKSwoMzMhPT1yJiYzNyE9PXJ8fHMpJiYoMzQhPT1yJiYzOSE9PXJ8fCFzKXx8dGhpcy5zbGlkZVByZXYoKSk6KDMzIT09ciYmMzQhPT1yJiYzOCE9PXImJjQwIT09cnx8KGEucHJldmVudERlZmF1bHQ/YS5wcmV2ZW50RGVmYXVsdCgpOmEucmV0dXJuVmFsdWU9ITEpLDM0IT09ciYmNDAhPT1yfHx0aGlzLnNsaWRlTmV4dCgpLDMzIT09ciYmMzghPT1yfHx0aGlzLnNsaWRlUHJldigpKSx0aGlzLmVtaXQoXCJrZXlQcmVzc1wiLHIpfX0sZW5hYmxlOmZ1bmN0aW9uKCl7dGhpcy5rZXlib2FyZC5lbmFibGVkfHwocyhlKS5vbihcImtleWRvd25cIix0aGlzLmtleWJvYXJkLmhhbmRsZSksdGhpcy5rZXlib2FyZC5lbmFibGVkPSEwKX0sZGlzYWJsZTpmdW5jdGlvbigpe3RoaXMua2V5Ym9hcmQuZW5hYmxlZCYmKHMoZSkub2ZmKFwia2V5ZG93blwiLHRoaXMua2V5Ym9hcmQuaGFuZGxlKSx0aGlzLmtleWJvYXJkLmVuYWJsZWQ9ITEpfX0sdGU9e25hbWU6XCJrZXlib2FyZFwiLHBhcmFtczp7a2V5Ym9hcmQ6e2VuYWJsZWQ6ITEsb25seUluVmlld3BvcnQ6ITB9fSxjcmVhdGU6ZnVuY3Rpb24oKXtuLmV4dGVuZCh0aGlzLHtrZXlib2FyZDp7ZW5hYmxlZDohMSxlbmFibGU6ZWUuZW5hYmxlLmJpbmQodGhpcyksZGlzYWJsZTplZS5kaXNhYmxlLmJpbmQodGhpcyksaGFuZGxlOmVlLmhhbmRsZS5iaW5kKHRoaXMpfX0pfSxvbjp7aW5pdDpmdW5jdGlvbigpe3RoaXMucGFyYW1zLmtleWJvYXJkLmVuYWJsZWQmJnRoaXMua2V5Ym9hcmQuZW5hYmxlKCl9LGRlc3Ryb3k6ZnVuY3Rpb24oKXt0aGlzLmtleWJvYXJkLmVuYWJsZWQmJnRoaXMua2V5Ym9hcmQuZGlzYWJsZSgpfX19O3ZhciBpZT17bGFzdFNjcm9sbFRpbWU6bi5ub3coKSxsYXN0RXZlbnRCZWZvcmVTbmFwOnZvaWQgMCxyZWNlbnRXaGVlbEV2ZW50czpbXSxldmVudDpmdW5jdGlvbigpe3JldHVybiB0Lm5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZihcImZpcmVmb3hcIik+LTE/XCJET01Nb3VzZVNjcm9sbFwiOmZ1bmN0aW9uKCl7dmFyIHQ9XCJvbndoZWVsXCJpbiBlO2lmKCF0KXt2YXIgaT1lLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7aS5zZXRBdHRyaWJ1dGUoXCJvbndoZWVsXCIsXCJyZXR1cm47XCIpLHQ9XCJmdW5jdGlvblwiPT10eXBlb2YgaS5vbndoZWVsfXJldHVybiF0JiZlLmltcGxlbWVudGF0aW9uJiZlLmltcGxlbWVudGF0aW9uLmhhc0ZlYXR1cmUmJiEwIT09ZS5pbXBsZW1lbnRhdGlvbi5oYXNGZWF0dXJlKFwiXCIsXCJcIikmJih0PWUuaW1wbGVtZW50YXRpb24uaGFzRmVhdHVyZShcIkV2ZW50cy53aGVlbFwiLFwiMy4wXCIpKSx0fSgpP1wid2hlZWxcIjpcIm1vdXNld2hlZWxcIn0sbm9ybWFsaXplOmZ1bmN0aW9uKGUpe3ZhciB0PTAsaT0wLHM9MCxhPTA7cmV0dXJuXCJkZXRhaWxcImluIGUmJihpPWUuZGV0YWlsKSxcIndoZWVsRGVsdGFcImluIGUmJihpPS1lLndoZWVsRGVsdGEvMTIwKSxcIndoZWVsRGVsdGFZXCJpbiBlJiYoaT0tZS53aGVlbERlbHRhWS8xMjApLFwid2hlZWxEZWx0YVhcImluIGUmJih0PS1lLndoZWVsRGVsdGFYLzEyMCksXCJheGlzXCJpbiBlJiZlLmF4aXM9PT1lLkhPUklaT05UQUxfQVhJUyYmKHQ9aSxpPTApLHM9MTAqdCxhPTEwKmksXCJkZWx0YVlcImluIGUmJihhPWUuZGVsdGFZKSxcImRlbHRhWFwiaW4gZSYmKHM9ZS5kZWx0YVgpLGUuc2hpZnRLZXkmJiFzJiYocz1hLGE9MCksKHN8fGEpJiZlLmRlbHRhTW9kZSYmKDE9PT1lLmRlbHRhTW9kZT8ocyo9NDAsYSo9NDApOihzKj04MDAsYSo9ODAwKSkscyYmIXQmJih0PXM8MT8tMToxKSxhJiYhaSYmKGk9YTwxPy0xOjEpLHtzcGluWDp0LHNwaW5ZOmkscGl4ZWxYOnMscGl4ZWxZOmF9fSxoYW5kbGVNb3VzZUVudGVyOmZ1bmN0aW9uKCl7dGhpcy5tb3VzZUVudGVyZWQ9ITB9LGhhbmRsZU1vdXNlTGVhdmU6ZnVuY3Rpb24oKXt0aGlzLm1vdXNlRW50ZXJlZD0hMX0saGFuZGxlOmZ1bmN0aW9uKGUpe3ZhciB0PWUsaT10aGlzLGE9aS5wYXJhbXMubW91c2V3aGVlbDtpLnBhcmFtcy5jc3NNb2RlJiZ0LnByZXZlbnREZWZhdWx0KCk7dmFyIHI9aS4kZWw7aWYoXCJjb250YWluZXJcIiE9PWkucGFyYW1zLm1vdXNld2hlZWwuZXZlbnRzVGFyZ2VkJiYocj1zKGkucGFyYW1zLm1vdXNld2hlZWwuZXZlbnRzVGFyZ2VkKSksIWkubW91c2VFbnRlcmVkJiYhclswXS5jb250YWlucyh0LnRhcmdldCkmJiFhLnJlbGVhc2VPbkVkZ2VzKXJldHVybiEwO3Qub3JpZ2luYWxFdmVudCYmKHQ9dC5vcmlnaW5hbEV2ZW50KTt2YXIgbz0wLGw9aS5ydGxUcmFuc2xhdGU/LTE6MSxkPWllLm5vcm1hbGl6ZSh0KTtpZihhLmZvcmNlVG9BeGlzKWlmKGkuaXNIb3Jpem9udGFsKCkpe2lmKCEoTWF0aC5hYnMoZC5waXhlbFgpPk1hdGguYWJzKGQucGl4ZWxZKSkpcmV0dXJuITA7bz1kLnBpeGVsWCpsfWVsc2V7aWYoIShNYXRoLmFicyhkLnBpeGVsWSk+TWF0aC5hYnMoZC5waXhlbFgpKSlyZXR1cm4hMDtvPWQucGl4ZWxZfWVsc2Ugbz1NYXRoLmFicyhkLnBpeGVsWCk+TWF0aC5hYnMoZC5waXhlbFkpPy1kLnBpeGVsWCpsOi1kLnBpeGVsWTtpZigwPT09bylyZXR1cm4hMDtpZihhLmludmVydCYmKG89LW8pLGkucGFyYW1zLmZyZWVNb2RlKXt2YXIgaD17dGltZTpuLm5vdygpLGRlbHRhOk1hdGguYWJzKG8pLGRpcmVjdGlvbjpNYXRoLnNpZ24obyl9LHA9aS5tb3VzZXdoZWVsLmxhc3RFdmVudEJlZm9yZVNuYXAsYz1wJiZoLnRpbWU8cC50aW1lKzUwMCYmaC5kZWx0YTw9cC5kZWx0YSYmaC5kaXJlY3Rpb249PT1wLmRpcmVjdGlvbjtpZighYyl7aS5tb3VzZXdoZWVsLmxhc3RFdmVudEJlZm9yZVNuYXA9dm9pZCAwLGkucGFyYW1zLmxvb3AmJmkubG9vcEZpeCgpO3ZhciB1PWkuZ2V0VHJhbnNsYXRlKCkrbyphLnNlbnNpdGl2aXR5LHY9aS5pc0JlZ2lubmluZyxmPWkuaXNFbmQ7aWYodT49aS5taW5UcmFuc2xhdGUoKSYmKHU9aS5taW5UcmFuc2xhdGUoKSksdTw9aS5tYXhUcmFuc2xhdGUoKSYmKHU9aS5tYXhUcmFuc2xhdGUoKSksaS5zZXRUcmFuc2l0aW9uKDApLGkuc2V0VHJhbnNsYXRlKHUpLGkudXBkYXRlUHJvZ3Jlc3MoKSxpLnVwZGF0ZUFjdGl2ZUluZGV4KCksaS51cGRhdGVTbGlkZXNDbGFzc2VzKCksKCF2JiZpLmlzQmVnaW5uaW5nfHwhZiYmaS5pc0VuZCkmJmkudXBkYXRlU2xpZGVzQ2xhc3NlcygpLGkucGFyYW1zLmZyZWVNb2RlU3RpY2t5KXtjbGVhclRpbWVvdXQoaS5tb3VzZXdoZWVsLnRpbWVvdXQpLGkubW91c2V3aGVlbC50aW1lb3V0PXZvaWQgMDt2YXIgbT1pLm1vdXNld2hlZWwucmVjZW50V2hlZWxFdmVudHM7bS5sZW5ndGg+PTE1JiZtLnNoaWZ0KCk7dmFyIGc9bS5sZW5ndGg/bVttLmxlbmd0aC0xXTp2b2lkIDAsYj1tWzBdO2lmKG0ucHVzaChoKSxnJiYoaC5kZWx0YT5nLmRlbHRhfHxoLmRpcmVjdGlvbiE9PWcuZGlyZWN0aW9uKSltLnNwbGljZSgwKTtlbHNlIGlmKG0ubGVuZ3RoPj0xNSYmaC50aW1lLWIudGltZTw1MDAmJmIuZGVsdGEtaC5kZWx0YT49MSYmaC5kZWx0YTw9Nil7dmFyIHc9bz4wPy44Oi4yO2kubW91c2V3aGVlbC5sYXN0RXZlbnRCZWZvcmVTbmFwPWgsbS5zcGxpY2UoMCksaS5tb3VzZXdoZWVsLnRpbWVvdXQ9bi5uZXh0VGljaygoZnVuY3Rpb24oKXtpLnNsaWRlVG9DbG9zZXN0KGkucGFyYW1zLnNwZWVkLCEwLHZvaWQgMCx3KX0pLDApfWkubW91c2V3aGVlbC50aW1lb3V0fHwoaS5tb3VzZXdoZWVsLnRpbWVvdXQ9bi5uZXh0VGljaygoZnVuY3Rpb24oKXtpLm1vdXNld2hlZWwubGFzdEV2ZW50QmVmb3JlU25hcD1oLG0uc3BsaWNlKDApLGkuc2xpZGVUb0Nsb3Nlc3QoaS5wYXJhbXMuc3BlZWQsITAsdm9pZCAwLC41KX0pLDUwMCkpfWlmKGN8fGkuZW1pdChcInNjcm9sbFwiLHQpLGkucGFyYW1zLmF1dG9wbGF5JiZpLnBhcmFtcy5hdXRvcGxheURpc2FibGVPbkludGVyYWN0aW9uJiZpLmF1dG9wbGF5LnN0b3AoKSx1PT09aS5taW5UcmFuc2xhdGUoKXx8dT09PWkubWF4VHJhbnNsYXRlKCkpcmV0dXJuITB9fWVsc2V7dmFyIHk9e3RpbWU6bi5ub3coKSxkZWx0YTpNYXRoLmFicyhvKSxkaXJlY3Rpb246TWF0aC5zaWduKG8pLHJhdzplfSx4PWkubW91c2V3aGVlbC5yZWNlbnRXaGVlbEV2ZW50czt4Lmxlbmd0aD49MiYmeC5zaGlmdCgpO3ZhciBUPXgubGVuZ3RoP3hbeC5sZW5ndGgtMV06dm9pZCAwO2lmKHgucHVzaCh5KSxUPyh5LmRpcmVjdGlvbiE9PVQuZGlyZWN0aW9ufHx5LmRlbHRhPlQuZGVsdGEpJiZpLm1vdXNld2hlZWwuYW5pbWF0ZVNsaWRlcih5KTppLm1vdXNld2hlZWwuYW5pbWF0ZVNsaWRlcih5KSxpLm1vdXNld2hlZWwucmVsZWFzZVNjcm9sbCh5KSlyZXR1cm4hMH1yZXR1cm4gdC5wcmV2ZW50RGVmYXVsdD90LnByZXZlbnREZWZhdWx0KCk6dC5yZXR1cm5WYWx1ZT0hMSwhMX0sYW5pbWF0ZVNsaWRlcjpmdW5jdGlvbihlKXtyZXR1cm4gZS5kZWx0YT49NiYmbi5ub3coKS10aGlzLm1vdXNld2hlZWwubGFzdFNjcm9sbFRpbWU8NjB8fChlLmRpcmVjdGlvbjwwP3RoaXMuaXNFbmQmJiF0aGlzLnBhcmFtcy5sb29wfHx0aGlzLmFuaW1hdGluZ3x8KHRoaXMuc2xpZGVOZXh0KCksdGhpcy5lbWl0KFwic2Nyb2xsXCIsZS5yYXcpKTp0aGlzLmlzQmVnaW5uaW5nJiYhdGhpcy5wYXJhbXMubG9vcHx8dGhpcy5hbmltYXRpbmd8fCh0aGlzLnNsaWRlUHJldigpLHRoaXMuZW1pdChcInNjcm9sbFwiLGUucmF3KSksdGhpcy5tb3VzZXdoZWVsLmxhc3RTY3JvbGxUaW1lPShuZXcgdC5EYXRlKS5nZXRUaW1lKCksITEpfSxyZWxlYXNlU2Nyb2xsOmZ1bmN0aW9uKGUpe3ZhciB0PXRoaXMucGFyYW1zLm1vdXNld2hlZWw7aWYoZS5kaXJlY3Rpb248MCl7aWYodGhpcy5pc0VuZCYmIXRoaXMucGFyYW1zLmxvb3AmJnQucmVsZWFzZU9uRWRnZXMpcmV0dXJuITB9ZWxzZSBpZih0aGlzLmlzQmVnaW5uaW5nJiYhdGhpcy5wYXJhbXMubG9vcCYmdC5yZWxlYXNlT25FZGdlcylyZXR1cm4hMDtyZXR1cm4hMX0sZW5hYmxlOmZ1bmN0aW9uKCl7dmFyIGU9aWUuZXZlbnQoKTtpZih0aGlzLnBhcmFtcy5jc3NNb2RlKXJldHVybiB0aGlzLndyYXBwZXJFbC5yZW1vdmVFdmVudExpc3RlbmVyKGUsdGhpcy5tb3VzZXdoZWVsLmhhbmRsZSksITA7aWYoIWUpcmV0dXJuITE7aWYodGhpcy5tb3VzZXdoZWVsLmVuYWJsZWQpcmV0dXJuITE7dmFyIHQ9dGhpcy4kZWw7cmV0dXJuXCJjb250YWluZXJcIiE9PXRoaXMucGFyYW1zLm1vdXNld2hlZWwuZXZlbnRzVGFyZ2VkJiYodD1zKHRoaXMucGFyYW1zLm1vdXNld2hlZWwuZXZlbnRzVGFyZ2VkKSksdC5vbihcIm1vdXNlZW50ZXJcIix0aGlzLm1vdXNld2hlZWwuaGFuZGxlTW91c2VFbnRlciksdC5vbihcIm1vdXNlbGVhdmVcIix0aGlzLm1vdXNld2hlZWwuaGFuZGxlTW91c2VMZWF2ZSksdC5vbihlLHRoaXMubW91c2V3aGVlbC5oYW5kbGUpLHRoaXMubW91c2V3aGVlbC5lbmFibGVkPSEwLCEwfSxkaXNhYmxlOmZ1bmN0aW9uKCl7dmFyIGU9aWUuZXZlbnQoKTtpZih0aGlzLnBhcmFtcy5jc3NNb2RlKXJldHVybiB0aGlzLndyYXBwZXJFbC5hZGRFdmVudExpc3RlbmVyKGUsdGhpcy5tb3VzZXdoZWVsLmhhbmRsZSksITA7aWYoIWUpcmV0dXJuITE7aWYoIXRoaXMubW91c2V3aGVlbC5lbmFibGVkKXJldHVybiExO3ZhciB0PXRoaXMuJGVsO3JldHVyblwiY29udGFpbmVyXCIhPT10aGlzLnBhcmFtcy5tb3VzZXdoZWVsLmV2ZW50c1RhcmdlZCYmKHQ9cyh0aGlzLnBhcmFtcy5tb3VzZXdoZWVsLmV2ZW50c1RhcmdlZCkpLHQub2ZmKGUsdGhpcy5tb3VzZXdoZWVsLmhhbmRsZSksdGhpcy5tb3VzZXdoZWVsLmVuYWJsZWQ9ITEsITB9fSxzZT17dXBkYXRlOmZ1bmN0aW9uKCl7dmFyIGU9dGhpcy5wYXJhbXMubmF2aWdhdGlvbjtpZighdGhpcy5wYXJhbXMubG9vcCl7dmFyIHQ9dGhpcy5uYXZpZ2F0aW9uLGk9dC4kbmV4dEVsLHM9dC4kcHJldkVsO3MmJnMubGVuZ3RoPjAmJih0aGlzLmlzQmVnaW5uaW5nP3MuYWRkQ2xhc3MoZS5kaXNhYmxlZENsYXNzKTpzLnJlbW92ZUNsYXNzKGUuZGlzYWJsZWRDbGFzcyksc1t0aGlzLnBhcmFtcy53YXRjaE92ZXJmbG93JiZ0aGlzLmlzTG9ja2VkP1wiYWRkQ2xhc3NcIjpcInJlbW92ZUNsYXNzXCJdKGUubG9ja0NsYXNzKSksaSYmaS5sZW5ndGg+MCYmKHRoaXMuaXNFbmQ/aS5hZGRDbGFzcyhlLmRpc2FibGVkQ2xhc3MpOmkucmVtb3ZlQ2xhc3MoZS5kaXNhYmxlZENsYXNzKSxpW3RoaXMucGFyYW1zLndhdGNoT3ZlcmZsb3cmJnRoaXMuaXNMb2NrZWQ/XCJhZGRDbGFzc1wiOlwicmVtb3ZlQ2xhc3NcIl0oZS5sb2NrQ2xhc3MpKX19LG9uUHJldkNsaWNrOmZ1bmN0aW9uKGUpe2UucHJldmVudERlZmF1bHQoKSx0aGlzLmlzQmVnaW5uaW5nJiYhdGhpcy5wYXJhbXMubG9vcHx8dGhpcy5zbGlkZVByZXYoKX0sb25OZXh0Q2xpY2s6ZnVuY3Rpb24oZSl7ZS5wcmV2ZW50RGVmYXVsdCgpLHRoaXMuaXNFbmQmJiF0aGlzLnBhcmFtcy5sb29wfHx0aGlzLnNsaWRlTmV4dCgpfSxpbml0OmZ1bmN0aW9uKCl7dmFyIGUsdCxpPXRoaXMucGFyYW1zLm5hdmlnYXRpb247KGkubmV4dEVsfHxpLnByZXZFbCkmJihpLm5leHRFbCYmKGU9cyhpLm5leHRFbCksdGhpcy5wYXJhbXMudW5pcXVlTmF2RWxlbWVudHMmJlwic3RyaW5nXCI9PXR5cGVvZiBpLm5leHRFbCYmZS5sZW5ndGg+MSYmMT09PXRoaXMuJGVsLmZpbmQoaS5uZXh0RWwpLmxlbmd0aCYmKGU9dGhpcy4kZWwuZmluZChpLm5leHRFbCkpKSxpLnByZXZFbCYmKHQ9cyhpLnByZXZFbCksdGhpcy5wYXJhbXMudW5pcXVlTmF2RWxlbWVudHMmJlwic3RyaW5nXCI9PXR5cGVvZiBpLnByZXZFbCYmdC5sZW5ndGg+MSYmMT09PXRoaXMuJGVsLmZpbmQoaS5wcmV2RWwpLmxlbmd0aCYmKHQ9dGhpcy4kZWwuZmluZChpLnByZXZFbCkpKSxlJiZlLmxlbmd0aD4wJiZlLm9uKFwiY2xpY2tcIix0aGlzLm5hdmlnYXRpb24ub25OZXh0Q2xpY2spLHQmJnQubGVuZ3RoPjAmJnQub24oXCJjbGlja1wiLHRoaXMubmF2aWdhdGlvbi5vblByZXZDbGljayksbi5leHRlbmQodGhpcy5uYXZpZ2F0aW9uLHskbmV4dEVsOmUsbmV4dEVsOmUmJmVbMF0sJHByZXZFbDp0LHByZXZFbDp0JiZ0WzBdfSkpfSxkZXN0cm95OmZ1bmN0aW9uKCl7dmFyIGU9dGhpcy5uYXZpZ2F0aW9uLHQ9ZS4kbmV4dEVsLGk9ZS4kcHJldkVsO3QmJnQubGVuZ3RoJiYodC5vZmYoXCJjbGlja1wiLHRoaXMubmF2aWdhdGlvbi5vbk5leHRDbGljayksdC5yZW1vdmVDbGFzcyh0aGlzLnBhcmFtcy5uYXZpZ2F0aW9uLmRpc2FibGVkQ2xhc3MpKSxpJiZpLmxlbmd0aCYmKGkub2ZmKFwiY2xpY2tcIix0aGlzLm5hdmlnYXRpb24ub25QcmV2Q2xpY2spLGkucmVtb3ZlQ2xhc3ModGhpcy5wYXJhbXMubmF2aWdhdGlvbi5kaXNhYmxlZENsYXNzKSl9fSxhZT17dXBkYXRlOmZ1bmN0aW9uKCl7dmFyIGU9dGhpcy5ydGwsdD10aGlzLnBhcmFtcy5wYWdpbmF0aW9uO2lmKHQuZWwmJnRoaXMucGFnaW5hdGlvbi5lbCYmdGhpcy5wYWdpbmF0aW9uLiRlbCYmMCE9PXRoaXMucGFnaW5hdGlvbi4kZWwubGVuZ3RoKXt2YXIgaSxhPXRoaXMudmlydHVhbCYmdGhpcy5wYXJhbXMudmlydHVhbC5lbmFibGVkP3RoaXMudmlydHVhbC5zbGlkZXMubGVuZ3RoOnRoaXMuc2xpZGVzLmxlbmd0aCxyPXRoaXMucGFnaW5hdGlvbi4kZWwsbj10aGlzLnBhcmFtcy5sb29wP01hdGguY2VpbCgoYS0yKnRoaXMubG9vcGVkU2xpZGVzKS90aGlzLnBhcmFtcy5zbGlkZXNQZXJHcm91cCk6dGhpcy5zbmFwR3JpZC5sZW5ndGg7aWYodGhpcy5wYXJhbXMubG9vcD8oKGk9TWF0aC5jZWlsKCh0aGlzLmFjdGl2ZUluZGV4LXRoaXMubG9vcGVkU2xpZGVzKS90aGlzLnBhcmFtcy5zbGlkZXNQZXJHcm91cCkpPmEtMS0yKnRoaXMubG9vcGVkU2xpZGVzJiYoaS09YS0yKnRoaXMubG9vcGVkU2xpZGVzKSxpPm4tMSYmKGktPW4pLGk8MCYmXCJidWxsZXRzXCIhPT10aGlzLnBhcmFtcy5wYWdpbmF0aW9uVHlwZSYmKGk9bitpKSk6aT12b2lkIDAhPT10aGlzLnNuYXBJbmRleD90aGlzLnNuYXBJbmRleDp0aGlzLmFjdGl2ZUluZGV4fHwwLFwiYnVsbGV0c1wiPT09dC50eXBlJiZ0aGlzLnBhZ2luYXRpb24uYnVsbGV0cyYmdGhpcy5wYWdpbmF0aW9uLmJ1bGxldHMubGVuZ3RoPjApe3ZhciBvLGwsZCxoPXRoaXMucGFnaW5hdGlvbi5idWxsZXRzO2lmKHQuZHluYW1pY0J1bGxldHMmJih0aGlzLnBhZ2luYXRpb24uYnVsbGV0U2l6ZT1oLmVxKDApW3RoaXMuaXNIb3Jpem9udGFsKCk/XCJvdXRlcldpZHRoXCI6XCJvdXRlckhlaWdodFwiXSghMCksci5jc3ModGhpcy5pc0hvcml6b250YWwoKT9cIndpZHRoXCI6XCJoZWlnaHRcIix0aGlzLnBhZ2luYXRpb24uYnVsbGV0U2l6ZSoodC5keW5hbWljTWFpbkJ1bGxldHMrNCkrXCJweFwiKSx0LmR5bmFtaWNNYWluQnVsbGV0cz4xJiZ2b2lkIDAhPT10aGlzLnByZXZpb3VzSW5kZXgmJih0aGlzLnBhZ2luYXRpb24uZHluYW1pY0J1bGxldEluZGV4Kz1pLXRoaXMucHJldmlvdXNJbmRleCx0aGlzLnBhZ2luYXRpb24uZHluYW1pY0J1bGxldEluZGV4PnQuZHluYW1pY01haW5CdWxsZXRzLTE/dGhpcy5wYWdpbmF0aW9uLmR5bmFtaWNCdWxsZXRJbmRleD10LmR5bmFtaWNNYWluQnVsbGV0cy0xOnRoaXMucGFnaW5hdGlvbi5keW5hbWljQnVsbGV0SW5kZXg8MCYmKHRoaXMucGFnaW5hdGlvbi5keW5hbWljQnVsbGV0SW5kZXg9MCkpLG89aS10aGlzLnBhZ2luYXRpb24uZHluYW1pY0J1bGxldEluZGV4LGQ9KChsPW8rKE1hdGgubWluKGgubGVuZ3RoLHQuZHluYW1pY01haW5CdWxsZXRzKS0xKSkrbykvMiksaC5yZW1vdmVDbGFzcyh0LmJ1bGxldEFjdGl2ZUNsYXNzK1wiIFwiK3QuYnVsbGV0QWN0aXZlQ2xhc3MrXCItbmV4dCBcIit0LmJ1bGxldEFjdGl2ZUNsYXNzK1wiLW5leHQtbmV4dCBcIit0LmJ1bGxldEFjdGl2ZUNsYXNzK1wiLXByZXYgXCIrdC5idWxsZXRBY3RpdmVDbGFzcytcIi1wcmV2LXByZXYgXCIrdC5idWxsZXRBY3RpdmVDbGFzcytcIi1tYWluXCIpLHIubGVuZ3RoPjEpaC5lYWNoKChmdW5jdGlvbihlLGEpe3ZhciByPXMoYSksbj1yLmluZGV4KCk7bj09PWkmJnIuYWRkQ2xhc3ModC5idWxsZXRBY3RpdmVDbGFzcyksdC5keW5hbWljQnVsbGV0cyYmKG4+PW8mJm48PWwmJnIuYWRkQ2xhc3ModC5idWxsZXRBY3RpdmVDbGFzcytcIi1tYWluXCIpLG49PT1vJiZyLnByZXYoKS5hZGRDbGFzcyh0LmJ1bGxldEFjdGl2ZUNsYXNzK1wiLXByZXZcIikucHJldigpLmFkZENsYXNzKHQuYnVsbGV0QWN0aXZlQ2xhc3MrXCItcHJldi1wcmV2XCIpLG49PT1sJiZyLm5leHQoKS5hZGRDbGFzcyh0LmJ1bGxldEFjdGl2ZUNsYXNzK1wiLW5leHRcIikubmV4dCgpLmFkZENsYXNzKHQuYnVsbGV0QWN0aXZlQ2xhc3MrXCItbmV4dC1uZXh0XCIpKX0pKTtlbHNle3ZhciBwPWguZXEoaSksYz1wLmluZGV4KCk7aWYocC5hZGRDbGFzcyh0LmJ1bGxldEFjdGl2ZUNsYXNzKSx0LmR5bmFtaWNCdWxsZXRzKXtmb3IodmFyIHU9aC5lcShvKSx2PWguZXEobCksZj1vO2Y8PWw7Zis9MSloLmVxKGYpLmFkZENsYXNzKHQuYnVsbGV0QWN0aXZlQ2xhc3MrXCItbWFpblwiKTtpZih0aGlzLnBhcmFtcy5sb29wKWlmKGM+PWgubGVuZ3RoLXQuZHluYW1pY01haW5CdWxsZXRzKXtmb3IodmFyIG09dC5keW5hbWljTWFpbkJ1bGxldHM7bT49MDttLT0xKWguZXEoaC5sZW5ndGgtbSkuYWRkQ2xhc3ModC5idWxsZXRBY3RpdmVDbGFzcytcIi1tYWluXCIpO2guZXEoaC5sZW5ndGgtdC5keW5hbWljTWFpbkJ1bGxldHMtMSkuYWRkQ2xhc3ModC5idWxsZXRBY3RpdmVDbGFzcytcIi1wcmV2XCIpfWVsc2UgdS5wcmV2KCkuYWRkQ2xhc3ModC5idWxsZXRBY3RpdmVDbGFzcytcIi1wcmV2XCIpLnByZXYoKS5hZGRDbGFzcyh0LmJ1bGxldEFjdGl2ZUNsYXNzK1wiLXByZXYtcHJldlwiKSx2Lm5leHQoKS5hZGRDbGFzcyh0LmJ1bGxldEFjdGl2ZUNsYXNzK1wiLW5leHRcIikubmV4dCgpLmFkZENsYXNzKHQuYnVsbGV0QWN0aXZlQ2xhc3MrXCItbmV4dC1uZXh0XCIpO2Vsc2UgdS5wcmV2KCkuYWRkQ2xhc3ModC5idWxsZXRBY3RpdmVDbGFzcytcIi1wcmV2XCIpLnByZXYoKS5hZGRDbGFzcyh0LmJ1bGxldEFjdGl2ZUNsYXNzK1wiLXByZXYtcHJldlwiKSx2Lm5leHQoKS5hZGRDbGFzcyh0LmJ1bGxldEFjdGl2ZUNsYXNzK1wiLW5leHRcIikubmV4dCgpLmFkZENsYXNzKHQuYnVsbGV0QWN0aXZlQ2xhc3MrXCItbmV4dC1uZXh0XCIpfX1pZih0LmR5bmFtaWNCdWxsZXRzKXt2YXIgZz1NYXRoLm1pbihoLmxlbmd0aCx0LmR5bmFtaWNNYWluQnVsbGV0cys0KSxiPSh0aGlzLnBhZ2luYXRpb24uYnVsbGV0U2l6ZSpnLXRoaXMucGFnaW5hdGlvbi5idWxsZXRTaXplKS8yLWQqdGhpcy5wYWdpbmF0aW9uLmJ1bGxldFNpemUsdz1lP1wicmlnaHRcIjpcImxlZnRcIjtoLmNzcyh0aGlzLmlzSG9yaXpvbnRhbCgpP3c6XCJ0b3BcIixiK1wicHhcIil9fWlmKFwiZnJhY3Rpb25cIj09PXQudHlwZSYmKHIuZmluZChcIi5cIit0LmN1cnJlbnRDbGFzcykudGV4dCh0LmZvcm1hdEZyYWN0aW9uQ3VycmVudChpKzEpKSxyLmZpbmQoXCIuXCIrdC50b3RhbENsYXNzKS50ZXh0KHQuZm9ybWF0RnJhY3Rpb25Ub3RhbChuKSkpLFwicHJvZ3Jlc3NiYXJcIj09PXQudHlwZSl7dmFyIHk7eT10LnByb2dyZXNzYmFyT3Bwb3NpdGU/dGhpcy5pc0hvcml6b250YWwoKT9cInZlcnRpY2FsXCI6XCJob3Jpem9udGFsXCI6dGhpcy5pc0hvcml6b250YWwoKT9cImhvcml6b250YWxcIjpcInZlcnRpY2FsXCI7dmFyIHg9KGkrMSkvbixUPTEsRT0xO1wiaG9yaXpvbnRhbFwiPT09eT9UPXg6RT14LHIuZmluZChcIi5cIit0LnByb2dyZXNzYmFyRmlsbENsYXNzKS50cmFuc2Zvcm0oXCJ0cmFuc2xhdGUzZCgwLDAsMCkgc2NhbGVYKFwiK1QrXCIpIHNjYWxlWShcIitFK1wiKVwiKS50cmFuc2l0aW9uKHRoaXMucGFyYW1zLnNwZWVkKX1cImN1c3RvbVwiPT09dC50eXBlJiZ0LnJlbmRlckN1c3RvbT8oci5odG1sKHQucmVuZGVyQ3VzdG9tKHRoaXMsaSsxLG4pKSx0aGlzLmVtaXQoXCJwYWdpbmF0aW9uUmVuZGVyXCIsdGhpcyxyWzBdKSk6dGhpcy5lbWl0KFwicGFnaW5hdGlvblVwZGF0ZVwiLHRoaXMsclswXSksclt0aGlzLnBhcmFtcy53YXRjaE92ZXJmbG93JiZ0aGlzLmlzTG9ja2VkP1wiYWRkQ2xhc3NcIjpcInJlbW92ZUNsYXNzXCJdKHQubG9ja0NsYXNzKX19LHJlbmRlcjpmdW5jdGlvbigpe3ZhciBlPXRoaXMucGFyYW1zLnBhZ2luYXRpb247aWYoZS5lbCYmdGhpcy5wYWdpbmF0aW9uLmVsJiZ0aGlzLnBhZ2luYXRpb24uJGVsJiYwIT09dGhpcy5wYWdpbmF0aW9uLiRlbC5sZW5ndGgpe3ZhciB0PXRoaXMudmlydHVhbCYmdGhpcy5wYXJhbXMudmlydHVhbC5lbmFibGVkP3RoaXMudmlydHVhbC5zbGlkZXMubGVuZ3RoOnRoaXMuc2xpZGVzLmxlbmd0aCxpPXRoaXMucGFnaW5hdGlvbi4kZWwscz1cIlwiO2lmKFwiYnVsbGV0c1wiPT09ZS50eXBlKXtmb3IodmFyIGE9dGhpcy5wYXJhbXMubG9vcD9NYXRoLmNlaWwoKHQtMip0aGlzLmxvb3BlZFNsaWRlcykvdGhpcy5wYXJhbXMuc2xpZGVzUGVyR3JvdXApOnRoaXMuc25hcEdyaWQubGVuZ3RoLHI9MDtyPGE7cis9MSllLnJlbmRlckJ1bGxldD9zKz1lLnJlbmRlckJ1bGxldC5jYWxsKHRoaXMscixlLmJ1bGxldENsYXNzKTpzKz1cIjxcIitlLmJ1bGxldEVsZW1lbnQrJyBjbGFzcz1cIicrZS5idWxsZXRDbGFzcysnXCI+PC8nK2UuYnVsbGV0RWxlbWVudCtcIj5cIjtpLmh0bWwocyksdGhpcy5wYWdpbmF0aW9uLmJ1bGxldHM9aS5maW5kKFwiLlwiK2UuYnVsbGV0Q2xhc3MpfVwiZnJhY3Rpb25cIj09PWUudHlwZSYmKHM9ZS5yZW5kZXJGcmFjdGlvbj9lLnJlbmRlckZyYWN0aW9uLmNhbGwodGhpcyxlLmN1cnJlbnRDbGFzcyxlLnRvdGFsQ2xhc3MpOic8c3BhbiBjbGFzcz1cIicrZS5jdXJyZW50Q2xhc3MrJ1wiPjwvc3Bhbj4gLyA8c3BhbiBjbGFzcz1cIicrZS50b3RhbENsYXNzKydcIj48L3NwYW4+JyxpLmh0bWwocykpLFwicHJvZ3Jlc3NiYXJcIj09PWUudHlwZSYmKHM9ZS5yZW5kZXJQcm9ncmVzc2Jhcj9lLnJlbmRlclByb2dyZXNzYmFyLmNhbGwodGhpcyxlLnByb2dyZXNzYmFyRmlsbENsYXNzKTonPHNwYW4gY2xhc3M9XCInK2UucHJvZ3Jlc3NiYXJGaWxsQ2xhc3MrJ1wiPjwvc3Bhbj4nLGkuaHRtbChzKSksXCJjdXN0b21cIiE9PWUudHlwZSYmdGhpcy5lbWl0KFwicGFnaW5hdGlvblJlbmRlclwiLHRoaXMucGFnaW5hdGlvbi4kZWxbMF0pfX0saW5pdDpmdW5jdGlvbigpe3ZhciBlPXRoaXMsdD1lLnBhcmFtcy5wYWdpbmF0aW9uO2lmKHQuZWwpe3ZhciBpPXModC5lbCk7MCE9PWkubGVuZ3RoJiYoZS5wYXJhbXMudW5pcXVlTmF2RWxlbWVudHMmJlwic3RyaW5nXCI9PXR5cGVvZiB0LmVsJiZpLmxlbmd0aD4xJiYxPT09ZS4kZWwuZmluZCh0LmVsKS5sZW5ndGgmJihpPWUuJGVsLmZpbmQodC5lbCkpLFwiYnVsbGV0c1wiPT09dC50eXBlJiZ0LmNsaWNrYWJsZSYmaS5hZGRDbGFzcyh0LmNsaWNrYWJsZUNsYXNzKSxpLmFkZENsYXNzKHQubW9kaWZpZXJDbGFzcyt0LnR5cGUpLFwiYnVsbGV0c1wiPT09dC50eXBlJiZ0LmR5bmFtaWNCdWxsZXRzJiYoaS5hZGRDbGFzcyhcIlwiK3QubW9kaWZpZXJDbGFzcyt0LnR5cGUrXCItZHluYW1pY1wiKSxlLnBhZ2luYXRpb24uZHluYW1pY0J1bGxldEluZGV4PTAsdC5keW5hbWljTWFpbkJ1bGxldHM8MSYmKHQuZHluYW1pY01haW5CdWxsZXRzPTEpKSxcInByb2dyZXNzYmFyXCI9PT10LnR5cGUmJnQucHJvZ3Jlc3NiYXJPcHBvc2l0ZSYmaS5hZGRDbGFzcyh0LnByb2dyZXNzYmFyT3Bwb3NpdGVDbGFzcyksdC5jbGlja2FibGUmJmkub24oXCJjbGlja1wiLFwiLlwiK3QuYnVsbGV0Q2xhc3MsKGZ1bmN0aW9uKHQpe3QucHJldmVudERlZmF1bHQoKTt2YXIgaT1zKHRoaXMpLmluZGV4KCkqZS5wYXJhbXMuc2xpZGVzUGVyR3JvdXA7ZS5wYXJhbXMubG9vcCYmKGkrPWUubG9vcGVkU2xpZGVzKSxlLnNsaWRlVG8oaSl9KSksbi5leHRlbmQoZS5wYWdpbmF0aW9uLHskZWw6aSxlbDppWzBdfSkpfX0sZGVzdHJveTpmdW5jdGlvbigpe3ZhciBlPXRoaXMucGFyYW1zLnBhZ2luYXRpb247aWYoZS5lbCYmdGhpcy5wYWdpbmF0aW9uLmVsJiZ0aGlzLnBhZ2luYXRpb24uJGVsJiYwIT09dGhpcy5wYWdpbmF0aW9uLiRlbC5sZW5ndGgpe3ZhciB0PXRoaXMucGFnaW5hdGlvbi4kZWw7dC5yZW1vdmVDbGFzcyhlLmhpZGRlbkNsYXNzKSx0LnJlbW92ZUNsYXNzKGUubW9kaWZpZXJDbGFzcytlLnR5cGUpLHRoaXMucGFnaW5hdGlvbi5idWxsZXRzJiZ0aGlzLnBhZ2luYXRpb24uYnVsbGV0cy5yZW1vdmVDbGFzcyhlLmJ1bGxldEFjdGl2ZUNsYXNzKSxlLmNsaWNrYWJsZSYmdC5vZmYoXCJjbGlja1wiLFwiLlwiK2UuYnVsbGV0Q2xhc3MpfX19LHJlPXtzZXRUcmFuc2xhdGU6ZnVuY3Rpb24oKXtpZih0aGlzLnBhcmFtcy5zY3JvbGxiYXIuZWwmJnRoaXMuc2Nyb2xsYmFyLmVsKXt2YXIgZT10aGlzLnNjcm9sbGJhcix0PXRoaXMucnRsVHJhbnNsYXRlLGk9dGhpcy5wcm9ncmVzcyxzPWUuZHJhZ1NpemUsYT1lLnRyYWNrU2l6ZSxyPWUuJGRyYWdFbCxuPWUuJGVsLG89dGhpcy5wYXJhbXMuc2Nyb2xsYmFyLGw9cyxkPShhLXMpKmk7dD8oZD0tZCk+MD8obD1zLWQsZD0wKTotZCtzPmEmJihsPWErZCk6ZDwwPyhsPXMrZCxkPTApOmQrcz5hJiYobD1hLWQpLHRoaXMuaXNIb3Jpem9udGFsKCk/KHIudHJhbnNmb3JtKFwidHJhbnNsYXRlM2QoXCIrZCtcInB4LCAwLCAwKVwiKSxyWzBdLnN0eWxlLndpZHRoPWwrXCJweFwiKTooci50cmFuc2Zvcm0oXCJ0cmFuc2xhdGUzZCgwcHgsIFwiK2QrXCJweCwgMClcIiksclswXS5zdHlsZS5oZWlnaHQ9bCtcInB4XCIpLG8uaGlkZSYmKGNsZWFyVGltZW91dCh0aGlzLnNjcm9sbGJhci50aW1lb3V0KSxuWzBdLnN0eWxlLm9wYWNpdHk9MSx0aGlzLnNjcm9sbGJhci50aW1lb3V0PXNldFRpbWVvdXQoKGZ1bmN0aW9uKCl7blswXS5zdHlsZS5vcGFjaXR5PTAsbi50cmFuc2l0aW9uKDQwMCl9KSwxZTMpKX19LHNldFRyYW5zaXRpb246ZnVuY3Rpb24oZSl7dGhpcy5wYXJhbXMuc2Nyb2xsYmFyLmVsJiZ0aGlzLnNjcm9sbGJhci5lbCYmdGhpcy5zY3JvbGxiYXIuJGRyYWdFbC50cmFuc2l0aW9uKGUpfSx1cGRhdGVTaXplOmZ1bmN0aW9uKCl7aWYodGhpcy5wYXJhbXMuc2Nyb2xsYmFyLmVsJiZ0aGlzLnNjcm9sbGJhci5lbCl7dmFyIGU9dGhpcy5zY3JvbGxiYXIsdD1lLiRkcmFnRWwsaT1lLiRlbDt0WzBdLnN0eWxlLndpZHRoPVwiXCIsdFswXS5zdHlsZS5oZWlnaHQ9XCJcIjt2YXIgcyxhPXRoaXMuaXNIb3Jpem9udGFsKCk/aVswXS5vZmZzZXRXaWR0aDppWzBdLm9mZnNldEhlaWdodCxyPXRoaXMuc2l6ZS90aGlzLnZpcnR1YWxTaXplLG89ciooYS90aGlzLnNpemUpO3M9XCJhdXRvXCI9PT10aGlzLnBhcmFtcy5zY3JvbGxiYXIuZHJhZ1NpemU/YSpyOnBhcnNlSW50KHRoaXMucGFyYW1zLnNjcm9sbGJhci5kcmFnU2l6ZSwxMCksdGhpcy5pc0hvcml6b250YWwoKT90WzBdLnN0eWxlLndpZHRoPXMrXCJweFwiOnRbMF0uc3R5bGUuaGVpZ2h0PXMrXCJweFwiLGlbMF0uc3R5bGUuZGlzcGxheT1yPj0xP1wibm9uZVwiOlwiXCIsdGhpcy5wYXJhbXMuc2Nyb2xsYmFyLmhpZGUmJihpWzBdLnN0eWxlLm9wYWNpdHk9MCksbi5leHRlbmQoZSx7dHJhY2tTaXplOmEsZGl2aWRlcjpyLG1vdmVEaXZpZGVyOm8sZHJhZ1NpemU6c30pLGUuJGVsW3RoaXMucGFyYW1zLndhdGNoT3ZlcmZsb3cmJnRoaXMuaXNMb2NrZWQ/XCJhZGRDbGFzc1wiOlwicmVtb3ZlQ2xhc3NcIl0odGhpcy5wYXJhbXMuc2Nyb2xsYmFyLmxvY2tDbGFzcyl9fSxnZXRQb2ludGVyUG9zaXRpb246ZnVuY3Rpb24oZSl7cmV0dXJuIHRoaXMuaXNIb3Jpem9udGFsKCk/XCJ0b3VjaHN0YXJ0XCI9PT1lLnR5cGV8fFwidG91Y2htb3ZlXCI9PT1lLnR5cGU/ZS50YXJnZXRUb3VjaGVzWzBdLmNsaWVudFg6ZS5jbGllbnRYOlwidG91Y2hzdGFydFwiPT09ZS50eXBlfHxcInRvdWNobW92ZVwiPT09ZS50eXBlP2UudGFyZ2V0VG91Y2hlc1swXS5jbGllbnRZOmUuY2xpZW50WX0sc2V0RHJhZ1Bvc2l0aW9uOmZ1bmN0aW9uKGUpe3ZhciB0LGk9dGhpcy5zY3JvbGxiYXIscz10aGlzLnJ0bFRyYW5zbGF0ZSxhPWkuJGVsLHI9aS5kcmFnU2l6ZSxuPWkudHJhY2tTaXplLG89aS5kcmFnU3RhcnRQb3M7dD0oaS5nZXRQb2ludGVyUG9zaXRpb24oZSktYS5vZmZzZXQoKVt0aGlzLmlzSG9yaXpvbnRhbCgpP1wibGVmdFwiOlwidG9wXCJdLShudWxsIT09bz9vOnIvMikpLyhuLXIpLHQ9TWF0aC5tYXgoTWF0aC5taW4odCwxKSwwKSxzJiYodD0xLXQpO3ZhciBsPXRoaXMubWluVHJhbnNsYXRlKCkrKHRoaXMubWF4VHJhbnNsYXRlKCktdGhpcy5taW5UcmFuc2xhdGUoKSkqdDt0aGlzLnVwZGF0ZVByb2dyZXNzKGwpLHRoaXMuc2V0VHJhbnNsYXRlKGwpLHRoaXMudXBkYXRlQWN0aXZlSW5kZXgoKSx0aGlzLnVwZGF0ZVNsaWRlc0NsYXNzZXMoKX0sb25EcmFnU3RhcnQ6ZnVuY3Rpb24oZSl7dmFyIHQ9dGhpcy5wYXJhbXMuc2Nyb2xsYmFyLGk9dGhpcy5zY3JvbGxiYXIscz10aGlzLiR3cmFwcGVyRWwsYT1pLiRlbCxyPWkuJGRyYWdFbDt0aGlzLnNjcm9sbGJhci5pc1RvdWNoZWQ9ITAsdGhpcy5zY3JvbGxiYXIuZHJhZ1N0YXJ0UG9zPWUudGFyZ2V0PT09clswXXx8ZS50YXJnZXQ9PT1yP2kuZ2V0UG9pbnRlclBvc2l0aW9uKGUpLWUudGFyZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpW3RoaXMuaXNIb3Jpem9udGFsKCk/XCJsZWZ0XCI6XCJ0b3BcIl06bnVsbCxlLnByZXZlbnREZWZhdWx0KCksZS5zdG9wUHJvcGFnYXRpb24oKSxzLnRyYW5zaXRpb24oMTAwKSxyLnRyYW5zaXRpb24oMTAwKSxpLnNldERyYWdQb3NpdGlvbihlKSxjbGVhclRpbWVvdXQodGhpcy5zY3JvbGxiYXIuZHJhZ1RpbWVvdXQpLGEudHJhbnNpdGlvbigwKSx0LmhpZGUmJmEuY3NzKFwib3BhY2l0eVwiLDEpLHRoaXMucGFyYW1zLmNzc01vZGUmJnRoaXMuJHdyYXBwZXJFbC5jc3MoXCJzY3JvbGwtc25hcC10eXBlXCIsXCJub25lXCIpLHRoaXMuZW1pdChcInNjcm9sbGJhckRyYWdTdGFydFwiLGUpfSxvbkRyYWdNb3ZlOmZ1bmN0aW9uKGUpe3ZhciB0PXRoaXMuc2Nyb2xsYmFyLGk9dGhpcy4kd3JhcHBlckVsLHM9dC4kZWwsYT10LiRkcmFnRWw7dGhpcy5zY3JvbGxiYXIuaXNUb3VjaGVkJiYoZS5wcmV2ZW50RGVmYXVsdD9lLnByZXZlbnREZWZhdWx0KCk6ZS5yZXR1cm5WYWx1ZT0hMSx0LnNldERyYWdQb3NpdGlvbihlKSxpLnRyYW5zaXRpb24oMCkscy50cmFuc2l0aW9uKDApLGEudHJhbnNpdGlvbigwKSx0aGlzLmVtaXQoXCJzY3JvbGxiYXJEcmFnTW92ZVwiLGUpKX0sb25EcmFnRW5kOmZ1bmN0aW9uKGUpe3ZhciB0PXRoaXMucGFyYW1zLnNjcm9sbGJhcixpPXRoaXMuc2Nyb2xsYmFyLHM9dGhpcy4kd3JhcHBlckVsLGE9aS4kZWw7dGhpcy5zY3JvbGxiYXIuaXNUb3VjaGVkJiYodGhpcy5zY3JvbGxiYXIuaXNUb3VjaGVkPSExLHRoaXMucGFyYW1zLmNzc01vZGUmJih0aGlzLiR3cmFwcGVyRWwuY3NzKFwic2Nyb2xsLXNuYXAtdHlwZVwiLFwiXCIpLHMudHJhbnNpdGlvbihcIlwiKSksdC5oaWRlJiYoY2xlYXJUaW1lb3V0KHRoaXMuc2Nyb2xsYmFyLmRyYWdUaW1lb3V0KSx0aGlzLnNjcm9sbGJhci5kcmFnVGltZW91dD1uLm5leHRUaWNrKChmdW5jdGlvbigpe2EuY3NzKFwib3BhY2l0eVwiLDApLGEudHJhbnNpdGlvbig0MDApfSksMWUzKSksdGhpcy5lbWl0KFwic2Nyb2xsYmFyRHJhZ0VuZFwiLGUpLHQuc25hcE9uUmVsZWFzZSYmdGhpcy5zbGlkZVRvQ2xvc2VzdCgpKX0sZW5hYmxlRHJhZ2dhYmxlOmZ1bmN0aW9uKCl7aWYodGhpcy5wYXJhbXMuc2Nyb2xsYmFyLmVsKXt2YXIgdD10aGlzLnNjcm9sbGJhcixpPXRoaXMudG91Y2hFdmVudHNUb3VjaCxzPXRoaXMudG91Y2hFdmVudHNEZXNrdG9wLGE9dGhpcy5wYXJhbXMscj10LiRlbFswXSxuPSEoIW8ucGFzc2l2ZUxpc3RlbmVyfHwhYS5wYXNzaXZlTGlzdGVuZXJzKSYme3Bhc3NpdmU6ITEsY2FwdHVyZTohMX0sbD0hKCFvLnBhc3NpdmVMaXN0ZW5lcnx8IWEucGFzc2l2ZUxpc3RlbmVycykmJntwYXNzaXZlOiEwLGNhcHR1cmU6ITF9O28udG91Y2g/KHIuYWRkRXZlbnRMaXN0ZW5lcihpLnN0YXJ0LHRoaXMuc2Nyb2xsYmFyLm9uRHJhZ1N0YXJ0LG4pLHIuYWRkRXZlbnRMaXN0ZW5lcihpLm1vdmUsdGhpcy5zY3JvbGxiYXIub25EcmFnTW92ZSxuKSxyLmFkZEV2ZW50TGlzdGVuZXIoaS5lbmQsdGhpcy5zY3JvbGxiYXIub25EcmFnRW5kLGwpKTooci5hZGRFdmVudExpc3RlbmVyKHMuc3RhcnQsdGhpcy5zY3JvbGxiYXIub25EcmFnU3RhcnQsbiksZS5hZGRFdmVudExpc3RlbmVyKHMubW92ZSx0aGlzLnNjcm9sbGJhci5vbkRyYWdNb3ZlLG4pLGUuYWRkRXZlbnRMaXN0ZW5lcihzLmVuZCx0aGlzLnNjcm9sbGJhci5vbkRyYWdFbmQsbCkpfX0sZGlzYWJsZURyYWdnYWJsZTpmdW5jdGlvbigpe2lmKHRoaXMucGFyYW1zLnNjcm9sbGJhci5lbCl7dmFyIHQ9dGhpcy5zY3JvbGxiYXIsaT10aGlzLnRvdWNoRXZlbnRzVG91Y2gscz10aGlzLnRvdWNoRXZlbnRzRGVza3RvcCxhPXRoaXMucGFyYW1zLHI9dC4kZWxbMF0sbj0hKCFvLnBhc3NpdmVMaXN0ZW5lcnx8IWEucGFzc2l2ZUxpc3RlbmVycykmJntwYXNzaXZlOiExLGNhcHR1cmU6ITF9LGw9ISghby5wYXNzaXZlTGlzdGVuZXJ8fCFhLnBhc3NpdmVMaXN0ZW5lcnMpJiZ7cGFzc2l2ZTohMCxjYXB0dXJlOiExfTtvLnRvdWNoPyhyLnJlbW92ZUV2ZW50TGlzdGVuZXIoaS5zdGFydCx0aGlzLnNjcm9sbGJhci5vbkRyYWdTdGFydCxuKSxyLnJlbW92ZUV2ZW50TGlzdGVuZXIoaS5tb3ZlLHRoaXMuc2Nyb2xsYmFyLm9uRHJhZ01vdmUsbiksci5yZW1vdmVFdmVudExpc3RlbmVyKGkuZW5kLHRoaXMuc2Nyb2xsYmFyLm9uRHJhZ0VuZCxsKSk6KHIucmVtb3ZlRXZlbnRMaXN0ZW5lcihzLnN0YXJ0LHRoaXMuc2Nyb2xsYmFyLm9uRHJhZ1N0YXJ0LG4pLGUucmVtb3ZlRXZlbnRMaXN0ZW5lcihzLm1vdmUsdGhpcy5zY3JvbGxiYXIub25EcmFnTW92ZSxuKSxlLnJlbW92ZUV2ZW50TGlzdGVuZXIocy5lbmQsdGhpcy5zY3JvbGxiYXIub25EcmFnRW5kLGwpKX19LGluaXQ6ZnVuY3Rpb24oKXtpZih0aGlzLnBhcmFtcy5zY3JvbGxiYXIuZWwpe3ZhciBlPXRoaXMuc2Nyb2xsYmFyLHQ9dGhpcy4kZWwsaT10aGlzLnBhcmFtcy5zY3JvbGxiYXIsYT1zKGkuZWwpO3RoaXMucGFyYW1zLnVuaXF1ZU5hdkVsZW1lbnRzJiZcInN0cmluZ1wiPT10eXBlb2YgaS5lbCYmYS5sZW5ndGg+MSYmMT09PXQuZmluZChpLmVsKS5sZW5ndGgmJihhPXQuZmluZChpLmVsKSk7dmFyIHI9YS5maW5kKFwiLlwiK3RoaXMucGFyYW1zLnNjcm9sbGJhci5kcmFnQ2xhc3MpOzA9PT1yLmxlbmd0aCYmKHI9cygnPGRpdiBjbGFzcz1cIicrdGhpcy5wYXJhbXMuc2Nyb2xsYmFyLmRyYWdDbGFzcysnXCI+PC9kaXY+JyksYS5hcHBlbmQocikpLG4uZXh0ZW5kKGUseyRlbDphLGVsOmFbMF0sJGRyYWdFbDpyLGRyYWdFbDpyWzBdfSksaS5kcmFnZ2FibGUmJmUuZW5hYmxlRHJhZ2dhYmxlKCl9fSxkZXN0cm95OmZ1bmN0aW9uKCl7dGhpcy5zY3JvbGxiYXIuZGlzYWJsZURyYWdnYWJsZSgpfX0sbmU9e3NldFRyYW5zZm9ybTpmdW5jdGlvbihlLHQpe3ZhciBpPXRoaXMucnRsLGE9cyhlKSxyPWk/LTE6MSxuPWEuYXR0cihcImRhdGEtc3dpcGVyLXBhcmFsbGF4XCIpfHxcIjBcIixvPWEuYXR0cihcImRhdGEtc3dpcGVyLXBhcmFsbGF4LXhcIiksbD1hLmF0dHIoXCJkYXRhLXN3aXBlci1wYXJhbGxheC15XCIpLGQ9YS5hdHRyKFwiZGF0YS1zd2lwZXItcGFyYWxsYXgtc2NhbGVcIiksaD1hLmF0dHIoXCJkYXRhLXN3aXBlci1wYXJhbGxheC1vcGFjaXR5XCIpO2lmKG98fGw/KG89b3x8XCIwXCIsbD1sfHxcIjBcIik6dGhpcy5pc0hvcml6b250YWwoKT8obz1uLGw9XCIwXCIpOihsPW4sbz1cIjBcIiksbz1vLmluZGV4T2YoXCIlXCIpPj0wP3BhcnNlSW50KG8sMTApKnQqcitcIiVcIjpvKnQqcitcInB4XCIsbD1sLmluZGV4T2YoXCIlXCIpPj0wP3BhcnNlSW50KGwsMTApKnQrXCIlXCI6bCp0K1wicHhcIixudWxsIT1oKXt2YXIgcD1oLShoLTEpKigxLU1hdGguYWJzKHQpKTthWzBdLnN0eWxlLm9wYWNpdHk9cH1pZihudWxsPT1kKWEudHJhbnNmb3JtKFwidHJhbnNsYXRlM2QoXCIrbytcIiwgXCIrbCtcIiwgMHB4KVwiKTtlbHNle3ZhciBjPWQtKGQtMSkqKDEtTWF0aC5hYnModCkpO2EudHJhbnNmb3JtKFwidHJhbnNsYXRlM2QoXCIrbytcIiwgXCIrbCtcIiwgMHB4KSBzY2FsZShcIitjK1wiKVwiKX19LHNldFRyYW5zbGF0ZTpmdW5jdGlvbigpe3ZhciBlPXRoaXMsdD1lLiRlbCxpPWUuc2xpZGVzLGE9ZS5wcm9ncmVzcyxyPWUuc25hcEdyaWQ7dC5jaGlsZHJlbihcIltkYXRhLXN3aXBlci1wYXJhbGxheF0sIFtkYXRhLXN3aXBlci1wYXJhbGxheC14XSwgW2RhdGEtc3dpcGVyLXBhcmFsbGF4LXldLCBbZGF0YS1zd2lwZXItcGFyYWxsYXgtb3BhY2l0eV0sIFtkYXRhLXN3aXBlci1wYXJhbGxheC1zY2FsZV1cIikuZWFjaCgoZnVuY3Rpb24odCxpKXtlLnBhcmFsbGF4LnNldFRyYW5zZm9ybShpLGEpfSkpLGkuZWFjaCgoZnVuY3Rpb24odCxpKXt2YXIgbj1pLnByb2dyZXNzO2UucGFyYW1zLnNsaWRlc1Blckdyb3VwPjEmJlwiYXV0b1wiIT09ZS5wYXJhbXMuc2xpZGVzUGVyVmlldyYmKG4rPU1hdGguY2VpbCh0LzIpLWEqKHIubGVuZ3RoLTEpKSxuPU1hdGgubWluKE1hdGgubWF4KG4sLTEpLDEpLHMoaSkuZmluZChcIltkYXRhLXN3aXBlci1wYXJhbGxheF0sIFtkYXRhLXN3aXBlci1wYXJhbGxheC14XSwgW2RhdGEtc3dpcGVyLXBhcmFsbGF4LXldLCBbZGF0YS1zd2lwZXItcGFyYWxsYXgtb3BhY2l0eV0sIFtkYXRhLXN3aXBlci1wYXJhbGxheC1zY2FsZV1cIikuZWFjaCgoZnVuY3Rpb24odCxpKXtlLnBhcmFsbGF4LnNldFRyYW5zZm9ybShpLG4pfSkpfSkpfSxzZXRUcmFuc2l0aW9uOmZ1bmN0aW9uKGUpe3ZvaWQgMD09PWUmJihlPXRoaXMucGFyYW1zLnNwZWVkKTt0aGlzLiRlbC5maW5kKFwiW2RhdGEtc3dpcGVyLXBhcmFsbGF4XSwgW2RhdGEtc3dpcGVyLXBhcmFsbGF4LXhdLCBbZGF0YS1zd2lwZXItcGFyYWxsYXgteV0sIFtkYXRhLXN3aXBlci1wYXJhbGxheC1vcGFjaXR5XSwgW2RhdGEtc3dpcGVyLXBhcmFsbGF4LXNjYWxlXVwiKS5lYWNoKChmdW5jdGlvbih0LGkpe3ZhciBhPXMoaSkscj1wYXJzZUludChhLmF0dHIoXCJkYXRhLXN3aXBlci1wYXJhbGxheC1kdXJhdGlvblwiKSwxMCl8fGU7MD09PWUmJihyPTApLGEudHJhbnNpdGlvbihyKX0pKX19LG9lPXtnZXREaXN0YW5jZUJldHdlZW5Ub3VjaGVzOmZ1bmN0aW9uKGUpe2lmKGUudGFyZ2V0VG91Y2hlcy5sZW5ndGg8MilyZXR1cm4gMTt2YXIgdD1lLnRhcmdldFRvdWNoZXNbMF0ucGFnZVgsaT1lLnRhcmdldFRvdWNoZXNbMF0ucGFnZVkscz1lLnRhcmdldFRvdWNoZXNbMV0ucGFnZVgsYT1lLnRhcmdldFRvdWNoZXNbMV0ucGFnZVk7cmV0dXJuIE1hdGguc3FydChNYXRoLnBvdyhzLXQsMikrTWF0aC5wb3coYS1pLDIpKX0sb25HZXN0dXJlU3RhcnQ6ZnVuY3Rpb24oZSl7dmFyIHQ9dGhpcy5wYXJhbXMuem9vbSxpPXRoaXMuem9vbSxhPWkuZ2VzdHVyZTtpZihpLmZha2VHZXN0dXJlVG91Y2hlZD0hMSxpLmZha2VHZXN0dXJlTW92ZWQ9ITEsIW8uZ2VzdHVyZXMpe2lmKFwidG91Y2hzdGFydFwiIT09ZS50eXBlfHxcInRvdWNoc3RhcnRcIj09PWUudHlwZSYmZS50YXJnZXRUb3VjaGVzLmxlbmd0aDwyKXJldHVybjtpLmZha2VHZXN0dXJlVG91Y2hlZD0hMCxhLnNjYWxlU3RhcnQ9b2UuZ2V0RGlzdGFuY2VCZXR3ZWVuVG91Y2hlcyhlKX1hLiRzbGlkZUVsJiZhLiRzbGlkZUVsLmxlbmd0aHx8KGEuJHNsaWRlRWw9cyhlLnRhcmdldCkuY2xvc2VzdChcIi5cIit0aGlzLnBhcmFtcy5zbGlkZUNsYXNzKSwwPT09YS4kc2xpZGVFbC5sZW5ndGgmJihhLiRzbGlkZUVsPXRoaXMuc2xpZGVzLmVxKHRoaXMuYWN0aXZlSW5kZXgpKSxhLiRpbWFnZUVsPWEuJHNsaWRlRWwuZmluZChcImltZywgc3ZnLCBjYW52YXMsIHBpY3R1cmUsIC5zd2lwZXItem9vbS10YXJnZXRcIiksYS4kaW1hZ2VXcmFwRWw9YS4kaW1hZ2VFbC5wYXJlbnQoXCIuXCIrdC5jb250YWluZXJDbGFzcyksYS5tYXhSYXRpbz1hLiRpbWFnZVdyYXBFbC5hdHRyKFwiZGF0YS1zd2lwZXItem9vbVwiKXx8dC5tYXhSYXRpbywwIT09YS4kaW1hZ2VXcmFwRWwubGVuZ3RoKT8oYS4kaW1hZ2VFbCYmYS4kaW1hZ2VFbC50cmFuc2l0aW9uKDApLHRoaXMuem9vbS5pc1NjYWxpbmc9ITApOmEuJGltYWdlRWw9dm9pZCAwfSxvbkdlc3R1cmVDaGFuZ2U6ZnVuY3Rpb24oZSl7dmFyIHQ9dGhpcy5wYXJhbXMuem9vbSxpPXRoaXMuem9vbSxzPWkuZ2VzdHVyZTtpZighby5nZXN0dXJlcyl7aWYoXCJ0b3VjaG1vdmVcIiE9PWUudHlwZXx8XCJ0b3VjaG1vdmVcIj09PWUudHlwZSYmZS50YXJnZXRUb3VjaGVzLmxlbmd0aDwyKXJldHVybjtpLmZha2VHZXN0dXJlTW92ZWQ9ITAscy5zY2FsZU1vdmU9b2UuZ2V0RGlzdGFuY2VCZXR3ZWVuVG91Y2hlcyhlKX1zLiRpbWFnZUVsJiYwIT09cy4kaW1hZ2VFbC5sZW5ndGgmJihpLnNjYWxlPW8uZ2VzdHVyZXM/ZS5zY2FsZSppLmN1cnJlbnRTY2FsZTpzLnNjYWxlTW92ZS9zLnNjYWxlU3RhcnQqaS5jdXJyZW50U2NhbGUsaS5zY2FsZT5zLm1heFJhdGlvJiYoaS5zY2FsZT1zLm1heFJhdGlvLTErTWF0aC5wb3coaS5zY2FsZS1zLm1heFJhdGlvKzEsLjUpKSxpLnNjYWxlPHQubWluUmF0aW8mJihpLnNjYWxlPXQubWluUmF0aW8rMS1NYXRoLnBvdyh0Lm1pblJhdGlvLWkuc2NhbGUrMSwuNSkpLHMuJGltYWdlRWwudHJhbnNmb3JtKFwidHJhbnNsYXRlM2QoMCwwLDApIHNjYWxlKFwiK2kuc2NhbGUrXCIpXCIpKX0sb25HZXN0dXJlRW5kOmZ1bmN0aW9uKGUpe3ZhciB0PXRoaXMucGFyYW1zLnpvb20saT10aGlzLnpvb20scz1pLmdlc3R1cmU7aWYoIW8uZ2VzdHVyZXMpe2lmKCFpLmZha2VHZXN0dXJlVG91Y2hlZHx8IWkuZmFrZUdlc3R1cmVNb3ZlZClyZXR1cm47aWYoXCJ0b3VjaGVuZFwiIT09ZS50eXBlfHxcInRvdWNoZW5kXCI9PT1lLnR5cGUmJmUuY2hhbmdlZFRvdWNoZXMubGVuZ3RoPDImJiFJLmFuZHJvaWQpcmV0dXJuO2kuZmFrZUdlc3R1cmVUb3VjaGVkPSExLGkuZmFrZUdlc3R1cmVNb3ZlZD0hMX1zLiRpbWFnZUVsJiYwIT09cy4kaW1hZ2VFbC5sZW5ndGgmJihpLnNjYWxlPU1hdGgubWF4KE1hdGgubWluKGkuc2NhbGUscy5tYXhSYXRpbyksdC5taW5SYXRpbykscy4kaW1hZ2VFbC50cmFuc2l0aW9uKHRoaXMucGFyYW1zLnNwZWVkKS50cmFuc2Zvcm0oXCJ0cmFuc2xhdGUzZCgwLDAsMCkgc2NhbGUoXCIraS5zY2FsZStcIilcIiksaS5jdXJyZW50U2NhbGU9aS5zY2FsZSxpLmlzU2NhbGluZz0hMSwxPT09aS5zY2FsZSYmKHMuJHNsaWRlRWw9dm9pZCAwKSl9LG9uVG91Y2hTdGFydDpmdW5jdGlvbihlKXt2YXIgdD10aGlzLnpvb20saT10Lmdlc3R1cmUscz10LmltYWdlO2kuJGltYWdlRWwmJjAhPT1pLiRpbWFnZUVsLmxlbmd0aCYmKHMuaXNUb3VjaGVkfHwoSS5hbmRyb2lkJiZlLnByZXZlbnREZWZhdWx0KCkscy5pc1RvdWNoZWQ9ITAscy50b3VjaGVzU3RhcnQueD1cInRvdWNoc3RhcnRcIj09PWUudHlwZT9lLnRhcmdldFRvdWNoZXNbMF0ucGFnZVg6ZS5wYWdlWCxzLnRvdWNoZXNTdGFydC55PVwidG91Y2hzdGFydFwiPT09ZS50eXBlP2UudGFyZ2V0VG91Y2hlc1swXS5wYWdlWTplLnBhZ2VZKSl9LG9uVG91Y2hNb3ZlOmZ1bmN0aW9uKGUpe3ZhciB0PXRoaXMuem9vbSxpPXQuZ2VzdHVyZSxzPXQuaW1hZ2UsYT10LnZlbG9jaXR5O2lmKGkuJGltYWdlRWwmJjAhPT1pLiRpbWFnZUVsLmxlbmd0aCYmKHRoaXMuYWxsb3dDbGljaz0hMSxzLmlzVG91Y2hlZCYmaS4kc2xpZGVFbCkpe3MuaXNNb3ZlZHx8KHMud2lkdGg9aS4kaW1hZ2VFbFswXS5vZmZzZXRXaWR0aCxzLmhlaWdodD1pLiRpbWFnZUVsWzBdLm9mZnNldEhlaWdodCxzLnN0YXJ0WD1uLmdldFRyYW5zbGF0ZShpLiRpbWFnZVdyYXBFbFswXSxcInhcIil8fDAscy5zdGFydFk9bi5nZXRUcmFuc2xhdGUoaS4kaW1hZ2VXcmFwRWxbMF0sXCJ5XCIpfHwwLGkuc2xpZGVXaWR0aD1pLiRzbGlkZUVsWzBdLm9mZnNldFdpZHRoLGkuc2xpZGVIZWlnaHQ9aS4kc2xpZGVFbFswXS5vZmZzZXRIZWlnaHQsaS4kaW1hZ2VXcmFwRWwudHJhbnNpdGlvbigwKSx0aGlzLnJ0bCYmKHMuc3RhcnRYPS1zLnN0YXJ0WCxzLnN0YXJ0WT0tcy5zdGFydFkpKTt2YXIgcj1zLndpZHRoKnQuc2NhbGUsbz1zLmhlaWdodCp0LnNjYWxlO2lmKCEocjxpLnNsaWRlV2lkdGgmJm88aS5zbGlkZUhlaWdodCkpe2lmKHMubWluWD1NYXRoLm1pbihpLnNsaWRlV2lkdGgvMi1yLzIsMCkscy5tYXhYPS1zLm1pblgscy5taW5ZPU1hdGgubWluKGkuc2xpZGVIZWlnaHQvMi1vLzIsMCkscy5tYXhZPS1zLm1pblkscy50b3VjaGVzQ3VycmVudC54PVwidG91Y2htb3ZlXCI9PT1lLnR5cGU/ZS50YXJnZXRUb3VjaGVzWzBdLnBhZ2VYOmUucGFnZVgscy50b3VjaGVzQ3VycmVudC55PVwidG91Y2htb3ZlXCI9PT1lLnR5cGU/ZS50YXJnZXRUb3VjaGVzWzBdLnBhZ2VZOmUucGFnZVksIXMuaXNNb3ZlZCYmIXQuaXNTY2FsaW5nKXtpZih0aGlzLmlzSG9yaXpvbnRhbCgpJiYoTWF0aC5mbG9vcihzLm1pblgpPT09TWF0aC5mbG9vcihzLnN0YXJ0WCkmJnMudG91Y2hlc0N1cnJlbnQueDxzLnRvdWNoZXNTdGFydC54fHxNYXRoLmZsb29yKHMubWF4WCk9PT1NYXRoLmZsb29yKHMuc3RhcnRYKSYmcy50b3VjaGVzQ3VycmVudC54PnMudG91Y2hlc1N0YXJ0LngpKXJldHVybiB2b2lkKHMuaXNUb3VjaGVkPSExKTtpZighdGhpcy5pc0hvcml6b250YWwoKSYmKE1hdGguZmxvb3Iocy5taW5ZKT09PU1hdGguZmxvb3Iocy5zdGFydFkpJiZzLnRvdWNoZXNDdXJyZW50Lnk8cy50b3VjaGVzU3RhcnQueXx8TWF0aC5mbG9vcihzLm1heFkpPT09TWF0aC5mbG9vcihzLnN0YXJ0WSkmJnMudG91Y2hlc0N1cnJlbnQueT5zLnRvdWNoZXNTdGFydC55KSlyZXR1cm4gdm9pZChzLmlzVG91Y2hlZD0hMSl9ZS5wcmV2ZW50RGVmYXVsdCgpLGUuc3RvcFByb3BhZ2F0aW9uKCkscy5pc01vdmVkPSEwLHMuY3VycmVudFg9cy50b3VjaGVzQ3VycmVudC54LXMudG91Y2hlc1N0YXJ0Lngrcy5zdGFydFgscy5jdXJyZW50WT1zLnRvdWNoZXNDdXJyZW50Lnktcy50b3VjaGVzU3RhcnQueStzLnN0YXJ0WSxzLmN1cnJlbnRYPHMubWluWCYmKHMuY3VycmVudFg9cy5taW5YKzEtTWF0aC5wb3cocy5taW5YLXMuY3VycmVudFgrMSwuOCkpLHMuY3VycmVudFg+cy5tYXhYJiYocy5jdXJyZW50WD1zLm1heFgtMStNYXRoLnBvdyhzLmN1cnJlbnRYLXMubWF4WCsxLC44KSkscy5jdXJyZW50WTxzLm1pblkmJihzLmN1cnJlbnRZPXMubWluWSsxLU1hdGgucG93KHMubWluWS1zLmN1cnJlbnRZKzEsLjgpKSxzLmN1cnJlbnRZPnMubWF4WSYmKHMuY3VycmVudFk9cy5tYXhZLTErTWF0aC5wb3cocy5jdXJyZW50WS1zLm1heFkrMSwuOCkpLGEucHJldlBvc2l0aW9uWHx8KGEucHJldlBvc2l0aW9uWD1zLnRvdWNoZXNDdXJyZW50LngpLGEucHJldlBvc2l0aW9uWXx8KGEucHJldlBvc2l0aW9uWT1zLnRvdWNoZXNDdXJyZW50LnkpLGEucHJldlRpbWV8fChhLnByZXZUaW1lPURhdGUubm93KCkpLGEueD0ocy50b3VjaGVzQ3VycmVudC54LWEucHJldlBvc2l0aW9uWCkvKERhdGUubm93KCktYS5wcmV2VGltZSkvMixhLnk9KHMudG91Y2hlc0N1cnJlbnQueS1hLnByZXZQb3NpdGlvblkpLyhEYXRlLm5vdygpLWEucHJldlRpbWUpLzIsTWF0aC5hYnMocy50b3VjaGVzQ3VycmVudC54LWEucHJldlBvc2l0aW9uWCk8MiYmKGEueD0wKSxNYXRoLmFicyhzLnRvdWNoZXNDdXJyZW50LnktYS5wcmV2UG9zaXRpb25ZKTwyJiYoYS55PTApLGEucHJldlBvc2l0aW9uWD1zLnRvdWNoZXNDdXJyZW50LngsYS5wcmV2UG9zaXRpb25ZPXMudG91Y2hlc0N1cnJlbnQueSxhLnByZXZUaW1lPURhdGUubm93KCksaS4kaW1hZ2VXcmFwRWwudHJhbnNmb3JtKFwidHJhbnNsYXRlM2QoXCIrcy5jdXJyZW50WCtcInB4LCBcIitzLmN1cnJlbnRZK1wicHgsMClcIil9fX0sb25Ub3VjaEVuZDpmdW5jdGlvbigpe3ZhciBlPXRoaXMuem9vbSx0PWUuZ2VzdHVyZSxpPWUuaW1hZ2Uscz1lLnZlbG9jaXR5O2lmKHQuJGltYWdlRWwmJjAhPT10LiRpbWFnZUVsLmxlbmd0aCl7aWYoIWkuaXNUb3VjaGVkfHwhaS5pc01vdmVkKXJldHVybiBpLmlzVG91Y2hlZD0hMSx2b2lkKGkuaXNNb3ZlZD0hMSk7aS5pc1RvdWNoZWQ9ITEsaS5pc01vdmVkPSExO3ZhciBhPTMwMCxyPTMwMCxuPXMueCphLG89aS5jdXJyZW50WCtuLGw9cy55KnIsZD1pLmN1cnJlbnRZK2w7MCE9PXMueCYmKGE9TWF0aC5hYnMoKG8taS5jdXJyZW50WCkvcy54KSksMCE9PXMueSYmKHI9TWF0aC5hYnMoKGQtaS5jdXJyZW50WSkvcy55KSk7dmFyIGg9TWF0aC5tYXgoYSxyKTtpLmN1cnJlbnRYPW8saS5jdXJyZW50WT1kO3ZhciBwPWkud2lkdGgqZS5zY2FsZSxjPWkuaGVpZ2h0KmUuc2NhbGU7aS5taW5YPU1hdGgubWluKHQuc2xpZGVXaWR0aC8yLXAvMiwwKSxpLm1heFg9LWkubWluWCxpLm1pblk9TWF0aC5taW4odC5zbGlkZUhlaWdodC8yLWMvMiwwKSxpLm1heFk9LWkubWluWSxpLmN1cnJlbnRYPU1hdGgubWF4KE1hdGgubWluKGkuY3VycmVudFgsaS5tYXhYKSxpLm1pblgpLGkuY3VycmVudFk9TWF0aC5tYXgoTWF0aC5taW4oaS5jdXJyZW50WSxpLm1heFkpLGkubWluWSksdC4kaW1hZ2VXcmFwRWwudHJhbnNpdGlvbihoKS50cmFuc2Zvcm0oXCJ0cmFuc2xhdGUzZChcIitpLmN1cnJlbnRYK1wicHgsIFwiK2kuY3VycmVudFkrXCJweCwwKVwiKX19LG9uVHJhbnNpdGlvbkVuZDpmdW5jdGlvbigpe3ZhciBlPXRoaXMuem9vbSx0PWUuZ2VzdHVyZTt0LiRzbGlkZUVsJiZ0aGlzLnByZXZpb3VzSW5kZXghPT10aGlzLmFjdGl2ZUluZGV4JiYodC4kaW1hZ2VFbCYmdC4kaW1hZ2VFbC50cmFuc2Zvcm0oXCJ0cmFuc2xhdGUzZCgwLDAsMCkgc2NhbGUoMSlcIiksdC4kaW1hZ2VXcmFwRWwmJnQuJGltYWdlV3JhcEVsLnRyYW5zZm9ybShcInRyYW5zbGF0ZTNkKDAsMCwwKVwiKSxlLnNjYWxlPTEsZS5jdXJyZW50U2NhbGU9MSx0LiRzbGlkZUVsPXZvaWQgMCx0LiRpbWFnZUVsPXZvaWQgMCx0LiRpbWFnZVdyYXBFbD12b2lkIDApfSx0b2dnbGU6ZnVuY3Rpb24oZSl7dmFyIHQ9dGhpcy56b29tO3Quc2NhbGUmJjEhPT10LnNjYWxlP3Qub3V0KCk6dC5pbihlKX0saW46ZnVuY3Rpb24oZSl7dmFyIHQsaSxzLGEscixuLG8sbCxkLGgscCxjLHUsdixmLG0sZz10aGlzLnpvb20sYj10aGlzLnBhcmFtcy56b29tLHc9Zy5nZXN0dXJlLHk9Zy5pbWFnZTsody4kc2xpZGVFbHx8KHRoaXMucGFyYW1zLnZpcnR1YWwmJnRoaXMucGFyYW1zLnZpcnR1YWwuZW5hYmxlZCYmdGhpcy52aXJ0dWFsP3cuJHNsaWRlRWw9dGhpcy4kd3JhcHBlckVsLmNoaWxkcmVuKFwiLlwiK3RoaXMucGFyYW1zLnNsaWRlQWN0aXZlQ2xhc3MpOncuJHNsaWRlRWw9dGhpcy5zbGlkZXMuZXEodGhpcy5hY3RpdmVJbmRleCksdy4kaW1hZ2VFbD13LiRzbGlkZUVsLmZpbmQoXCJpbWcsIHN2ZywgY2FudmFzLCBwaWN0dXJlLCAuc3dpcGVyLXpvb20tdGFyZ2V0XCIpLHcuJGltYWdlV3JhcEVsPXcuJGltYWdlRWwucGFyZW50KFwiLlwiK2IuY29udGFpbmVyQ2xhc3MpKSx3LiRpbWFnZUVsJiYwIT09dy4kaW1hZ2VFbC5sZW5ndGgpJiYody4kc2xpZGVFbC5hZGRDbGFzcyhcIlwiK2Iuem9vbWVkU2xpZGVDbGFzcyksdm9pZCAwPT09eS50b3VjaGVzU3RhcnQueCYmZT8odD1cInRvdWNoZW5kXCI9PT1lLnR5cGU/ZS5jaGFuZ2VkVG91Y2hlc1swXS5wYWdlWDplLnBhZ2VYLGk9XCJ0b3VjaGVuZFwiPT09ZS50eXBlP2UuY2hhbmdlZFRvdWNoZXNbMF0ucGFnZVk6ZS5wYWdlWSk6KHQ9eS50b3VjaGVzU3RhcnQueCxpPXkudG91Y2hlc1N0YXJ0LnkpLGcuc2NhbGU9dy4kaW1hZ2VXcmFwRWwuYXR0cihcImRhdGEtc3dpcGVyLXpvb21cIil8fGIubWF4UmF0aW8sZy5jdXJyZW50U2NhbGU9dy4kaW1hZ2VXcmFwRWwuYXR0cihcImRhdGEtc3dpcGVyLXpvb21cIil8fGIubWF4UmF0aW8sZT8oZj13LiRzbGlkZUVsWzBdLm9mZnNldFdpZHRoLG09dy4kc2xpZGVFbFswXS5vZmZzZXRIZWlnaHQscz13LiRzbGlkZUVsLm9mZnNldCgpLmxlZnQrZi8yLXQsYT13LiRzbGlkZUVsLm9mZnNldCgpLnRvcCttLzItaSxvPXcuJGltYWdlRWxbMF0ub2Zmc2V0V2lkdGgsbD13LiRpbWFnZUVsWzBdLm9mZnNldEhlaWdodCxkPW8qZy5zY2FsZSxoPWwqZy5zY2FsZSx1PS0ocD1NYXRoLm1pbihmLzItZC8yLDApKSx2PS0oYz1NYXRoLm1pbihtLzItaC8yLDApKSwocj1zKmcuc2NhbGUpPHAmJihyPXApLHI+dSYmKHI9dSksKG49YSpnLnNjYWxlKTxjJiYobj1jKSxuPnYmJihuPXYpKToocj0wLG49MCksdy4kaW1hZ2VXcmFwRWwudHJhbnNpdGlvbigzMDApLnRyYW5zZm9ybShcInRyYW5zbGF0ZTNkKFwiK3IrXCJweCwgXCIrbitcInB4LDApXCIpLHcuJGltYWdlRWwudHJhbnNpdGlvbigzMDApLnRyYW5zZm9ybShcInRyYW5zbGF0ZTNkKDAsMCwwKSBzY2FsZShcIitnLnNjYWxlK1wiKVwiKSl9LG91dDpmdW5jdGlvbigpe3ZhciBlPXRoaXMuem9vbSx0PXRoaXMucGFyYW1zLnpvb20saT1lLmdlc3R1cmU7aS4kc2xpZGVFbHx8KHRoaXMucGFyYW1zLnZpcnR1YWwmJnRoaXMucGFyYW1zLnZpcnR1YWwuZW5hYmxlZCYmdGhpcy52aXJ0dWFsP2kuJHNsaWRlRWw9dGhpcy4kd3JhcHBlckVsLmNoaWxkcmVuKFwiLlwiK3RoaXMucGFyYW1zLnNsaWRlQWN0aXZlQ2xhc3MpOmkuJHNsaWRlRWw9dGhpcy5zbGlkZXMuZXEodGhpcy5hY3RpdmVJbmRleCksaS4kaW1hZ2VFbD1pLiRzbGlkZUVsLmZpbmQoXCJpbWcsIHN2ZywgY2FudmFzLCBwaWN0dXJlLCAuc3dpcGVyLXpvb20tdGFyZ2V0XCIpLGkuJGltYWdlV3JhcEVsPWkuJGltYWdlRWwucGFyZW50KFwiLlwiK3QuY29udGFpbmVyQ2xhc3MpKSxpLiRpbWFnZUVsJiYwIT09aS4kaW1hZ2VFbC5sZW5ndGgmJihlLnNjYWxlPTEsZS5jdXJyZW50U2NhbGU9MSxpLiRpbWFnZVdyYXBFbC50cmFuc2l0aW9uKDMwMCkudHJhbnNmb3JtKFwidHJhbnNsYXRlM2QoMCwwLDApXCIpLGkuJGltYWdlRWwudHJhbnNpdGlvbigzMDApLnRyYW5zZm9ybShcInRyYW5zbGF0ZTNkKDAsMCwwKSBzY2FsZSgxKVwiKSxpLiRzbGlkZUVsLnJlbW92ZUNsYXNzKFwiXCIrdC56b29tZWRTbGlkZUNsYXNzKSxpLiRzbGlkZUVsPXZvaWQgMCl9LGVuYWJsZTpmdW5jdGlvbigpe3ZhciBlPXRoaXMuem9vbTtpZighZS5lbmFibGVkKXtlLmVuYWJsZWQ9ITA7dmFyIHQ9IShcInRvdWNoc3RhcnRcIiE9PXRoaXMudG91Y2hFdmVudHMuc3RhcnR8fCFvLnBhc3NpdmVMaXN0ZW5lcnx8IXRoaXMucGFyYW1zLnBhc3NpdmVMaXN0ZW5lcnMpJiZ7cGFzc2l2ZTohMCxjYXB0dXJlOiExfSxpPSFvLnBhc3NpdmVMaXN0ZW5lcnx8e3Bhc3NpdmU6ITEsY2FwdHVyZTohMH0scz1cIi5cIit0aGlzLnBhcmFtcy5zbGlkZUNsYXNzO28uZ2VzdHVyZXM/KHRoaXMuJHdyYXBwZXJFbC5vbihcImdlc3R1cmVzdGFydFwiLHMsZS5vbkdlc3R1cmVTdGFydCx0KSx0aGlzLiR3cmFwcGVyRWwub24oXCJnZXN0dXJlY2hhbmdlXCIscyxlLm9uR2VzdHVyZUNoYW5nZSx0KSx0aGlzLiR3cmFwcGVyRWwub24oXCJnZXN0dXJlZW5kXCIscyxlLm9uR2VzdHVyZUVuZCx0KSk6XCJ0b3VjaHN0YXJ0XCI9PT10aGlzLnRvdWNoRXZlbnRzLnN0YXJ0JiYodGhpcy4kd3JhcHBlckVsLm9uKHRoaXMudG91Y2hFdmVudHMuc3RhcnQscyxlLm9uR2VzdHVyZVN0YXJ0LHQpLHRoaXMuJHdyYXBwZXJFbC5vbih0aGlzLnRvdWNoRXZlbnRzLm1vdmUscyxlLm9uR2VzdHVyZUNoYW5nZSxpKSx0aGlzLiR3cmFwcGVyRWwub24odGhpcy50b3VjaEV2ZW50cy5lbmQscyxlLm9uR2VzdHVyZUVuZCx0KSx0aGlzLnRvdWNoRXZlbnRzLmNhbmNlbCYmdGhpcy4kd3JhcHBlckVsLm9uKHRoaXMudG91Y2hFdmVudHMuY2FuY2VsLHMsZS5vbkdlc3R1cmVFbmQsdCkpLHRoaXMuJHdyYXBwZXJFbC5vbih0aGlzLnRvdWNoRXZlbnRzLm1vdmUsXCIuXCIrdGhpcy5wYXJhbXMuem9vbS5jb250YWluZXJDbGFzcyxlLm9uVG91Y2hNb3ZlLGkpfX0sZGlzYWJsZTpmdW5jdGlvbigpe3ZhciBlPXRoaXMuem9vbTtpZihlLmVuYWJsZWQpe3RoaXMuem9vbS5lbmFibGVkPSExO3ZhciB0PSEoXCJ0b3VjaHN0YXJ0XCIhPT10aGlzLnRvdWNoRXZlbnRzLnN0YXJ0fHwhby5wYXNzaXZlTGlzdGVuZXJ8fCF0aGlzLnBhcmFtcy5wYXNzaXZlTGlzdGVuZXJzKSYme3Bhc3NpdmU6ITAsY2FwdHVyZTohMX0saT0hby5wYXNzaXZlTGlzdGVuZXJ8fHtwYXNzaXZlOiExLGNhcHR1cmU6ITB9LHM9XCIuXCIrdGhpcy5wYXJhbXMuc2xpZGVDbGFzcztvLmdlc3R1cmVzPyh0aGlzLiR3cmFwcGVyRWwub2ZmKFwiZ2VzdHVyZXN0YXJ0XCIscyxlLm9uR2VzdHVyZVN0YXJ0LHQpLHRoaXMuJHdyYXBwZXJFbC5vZmYoXCJnZXN0dXJlY2hhbmdlXCIscyxlLm9uR2VzdHVyZUNoYW5nZSx0KSx0aGlzLiR3cmFwcGVyRWwub2ZmKFwiZ2VzdHVyZWVuZFwiLHMsZS5vbkdlc3R1cmVFbmQsdCkpOlwidG91Y2hzdGFydFwiPT09dGhpcy50b3VjaEV2ZW50cy5zdGFydCYmKHRoaXMuJHdyYXBwZXJFbC5vZmYodGhpcy50b3VjaEV2ZW50cy5zdGFydCxzLGUub25HZXN0dXJlU3RhcnQsdCksdGhpcy4kd3JhcHBlckVsLm9mZih0aGlzLnRvdWNoRXZlbnRzLm1vdmUscyxlLm9uR2VzdHVyZUNoYW5nZSxpKSx0aGlzLiR3cmFwcGVyRWwub2ZmKHRoaXMudG91Y2hFdmVudHMuZW5kLHMsZS5vbkdlc3R1cmVFbmQsdCksdGhpcy50b3VjaEV2ZW50cy5jYW5jZWwmJnRoaXMuJHdyYXBwZXJFbC5vZmYodGhpcy50b3VjaEV2ZW50cy5jYW5jZWwscyxlLm9uR2VzdHVyZUVuZCx0KSksdGhpcy4kd3JhcHBlckVsLm9mZih0aGlzLnRvdWNoRXZlbnRzLm1vdmUsXCIuXCIrdGhpcy5wYXJhbXMuem9vbS5jb250YWluZXJDbGFzcyxlLm9uVG91Y2hNb3ZlLGkpfX19LGxlPXtsb2FkSW5TbGlkZTpmdW5jdGlvbihlLHQpe3ZvaWQgMD09PXQmJih0PSEwKTt2YXIgaT10aGlzLGE9aS5wYXJhbXMubGF6eTtpZih2b2lkIDAhPT1lJiYwIT09aS5zbGlkZXMubGVuZ3RoKXt2YXIgcj1pLnZpcnR1YWwmJmkucGFyYW1zLnZpcnR1YWwuZW5hYmxlZD9pLiR3cmFwcGVyRWwuY2hpbGRyZW4oXCIuXCIraS5wYXJhbXMuc2xpZGVDbGFzcysnW2RhdGEtc3dpcGVyLXNsaWRlLWluZGV4PVwiJytlKydcIl0nKTppLnNsaWRlcy5lcShlKSxuPXIuZmluZChcIi5cIithLmVsZW1lbnRDbGFzcytcIjpub3QoLlwiK2EubG9hZGVkQ2xhc3MrXCIpOm5vdCguXCIrYS5sb2FkaW5nQ2xhc3MrXCIpXCIpOyFyLmhhc0NsYXNzKGEuZWxlbWVudENsYXNzKXx8ci5oYXNDbGFzcyhhLmxvYWRlZENsYXNzKXx8ci5oYXNDbGFzcyhhLmxvYWRpbmdDbGFzcyl8fChuPW4uYWRkKHJbMF0pKSwwIT09bi5sZW5ndGgmJm4uZWFjaCgoZnVuY3Rpb24oZSxuKXt2YXIgbz1zKG4pO28uYWRkQ2xhc3MoYS5sb2FkaW5nQ2xhc3MpO3ZhciBsPW8uYXR0cihcImRhdGEtYmFja2dyb3VuZFwiKSxkPW8uYXR0cihcImRhdGEtc3JjXCIpLGg9by5hdHRyKFwiZGF0YS1zcmNzZXRcIikscD1vLmF0dHIoXCJkYXRhLXNpemVzXCIpO2kubG9hZEltYWdlKG9bMF0sZHx8bCxoLHAsITEsKGZ1bmN0aW9uKCl7aWYobnVsbCE9aSYmaSYmKCFpfHxpLnBhcmFtcykmJiFpLmRlc3Ryb3llZCl7aWYobD8oby5jc3MoXCJiYWNrZ3JvdW5kLWltYWdlXCIsJ3VybChcIicrbCsnXCIpJyksby5yZW1vdmVBdHRyKFwiZGF0YS1iYWNrZ3JvdW5kXCIpKTooaCYmKG8uYXR0cihcInNyY3NldFwiLGgpLG8ucmVtb3ZlQXR0cihcImRhdGEtc3Jjc2V0XCIpKSxwJiYoby5hdHRyKFwic2l6ZXNcIixwKSxvLnJlbW92ZUF0dHIoXCJkYXRhLXNpemVzXCIpKSxkJiYoby5hdHRyKFwic3JjXCIsZCksby5yZW1vdmVBdHRyKFwiZGF0YS1zcmNcIikpKSxvLmFkZENsYXNzKGEubG9hZGVkQ2xhc3MpLnJlbW92ZUNsYXNzKGEubG9hZGluZ0NsYXNzKSxyLmZpbmQoXCIuXCIrYS5wcmVsb2FkZXJDbGFzcykucmVtb3ZlKCksaS5wYXJhbXMubG9vcCYmdCl7dmFyIGU9ci5hdHRyKFwiZGF0YS1zd2lwZXItc2xpZGUtaW5kZXhcIik7aWYoci5oYXNDbGFzcyhpLnBhcmFtcy5zbGlkZUR1cGxpY2F0ZUNsYXNzKSl7dmFyIHM9aS4kd3JhcHBlckVsLmNoaWxkcmVuKCdbZGF0YS1zd2lwZXItc2xpZGUtaW5kZXg9XCInK2UrJ1wiXTpub3QoLicraS5wYXJhbXMuc2xpZGVEdXBsaWNhdGVDbGFzcytcIilcIik7aS5sYXp5LmxvYWRJblNsaWRlKHMuaW5kZXgoKSwhMSl9ZWxzZXt2YXIgbj1pLiR3cmFwcGVyRWwuY2hpbGRyZW4oXCIuXCIraS5wYXJhbXMuc2xpZGVEdXBsaWNhdGVDbGFzcysnW2RhdGEtc3dpcGVyLXNsaWRlLWluZGV4PVwiJytlKydcIl0nKTtpLmxhenkubG9hZEluU2xpZGUobi5pbmRleCgpLCExKX19aS5lbWl0KFwibGF6eUltYWdlUmVhZHlcIixyWzBdLG9bMF0pLGkucGFyYW1zLmF1dG9IZWlnaHQmJmkudXBkYXRlQXV0b0hlaWdodCgpfX0pKSxpLmVtaXQoXCJsYXp5SW1hZ2VMb2FkXCIsclswXSxvWzBdKX0pKX19LGxvYWQ6ZnVuY3Rpb24oKXt2YXIgZT10aGlzLHQ9ZS4kd3JhcHBlckVsLGk9ZS5wYXJhbXMsYT1lLnNsaWRlcyxyPWUuYWN0aXZlSW5kZXgsbj1lLnZpcnR1YWwmJmkudmlydHVhbC5lbmFibGVkLG89aS5sYXp5LGw9aS5zbGlkZXNQZXJWaWV3O2Z1bmN0aW9uIGQoZSl7aWYobil7aWYodC5jaGlsZHJlbihcIi5cIitpLnNsaWRlQ2xhc3MrJ1tkYXRhLXN3aXBlci1zbGlkZS1pbmRleD1cIicrZSsnXCJdJykubGVuZ3RoKXJldHVybiEwfWVsc2UgaWYoYVtlXSlyZXR1cm4hMDtyZXR1cm4hMX1mdW5jdGlvbiBoKGUpe3JldHVybiBuP3MoZSkuYXR0cihcImRhdGEtc3dpcGVyLXNsaWRlLWluZGV4XCIpOnMoZSkuaW5kZXgoKX1pZihcImF1dG9cIj09PWwmJihsPTApLGUubGF6eS5pbml0aWFsSW1hZ2VMb2FkZWR8fChlLmxhenkuaW5pdGlhbEltYWdlTG9hZGVkPSEwKSxlLnBhcmFtcy53YXRjaFNsaWRlc1Zpc2liaWxpdHkpdC5jaGlsZHJlbihcIi5cIitpLnNsaWRlVmlzaWJsZUNsYXNzKS5lYWNoKChmdW5jdGlvbih0LGkpe3ZhciBhPW4/cyhpKS5hdHRyKFwiZGF0YS1zd2lwZXItc2xpZGUtaW5kZXhcIik6cyhpKS5pbmRleCgpO2UubGF6eS5sb2FkSW5TbGlkZShhKX0pKTtlbHNlIGlmKGw+MSlmb3IodmFyIHA9cjtwPHIrbDtwKz0xKWQocCkmJmUubGF6eS5sb2FkSW5TbGlkZShwKTtlbHNlIGUubGF6eS5sb2FkSW5TbGlkZShyKTtpZihvLmxvYWRQcmV2TmV4dClpZihsPjF8fG8ubG9hZFByZXZOZXh0QW1vdW50JiZvLmxvYWRQcmV2TmV4dEFtb3VudD4xKXtmb3IodmFyIGM9by5sb2FkUHJldk5leHRBbW91bnQsdT1sLHY9TWF0aC5taW4ocit1K01hdGgubWF4KGMsdSksYS5sZW5ndGgpLGY9TWF0aC5tYXgoci1NYXRoLm1heCh1LGMpLDApLG09citsO208djttKz0xKWQobSkmJmUubGF6eS5sb2FkSW5TbGlkZShtKTtmb3IodmFyIGc9ZjtnPHI7Zys9MSlkKGcpJiZlLmxhenkubG9hZEluU2xpZGUoZyl9ZWxzZXt2YXIgYj10LmNoaWxkcmVuKFwiLlwiK2kuc2xpZGVOZXh0Q2xhc3MpO2IubGVuZ3RoPjAmJmUubGF6eS5sb2FkSW5TbGlkZShoKGIpKTt2YXIgdz10LmNoaWxkcmVuKFwiLlwiK2kuc2xpZGVQcmV2Q2xhc3MpO3cubGVuZ3RoPjAmJmUubGF6eS5sb2FkSW5TbGlkZShoKHcpKX19fSxkZT17TGluZWFyU3BsaW5lOmZ1bmN0aW9uKGUsdCl7dmFyIGkscyxhLHIsbixvPWZ1bmN0aW9uKGUsdCl7Zm9yKHM9LTEsaT1lLmxlbmd0aDtpLXM+MTspZVthPWkrcz4+MV08PXQ/cz1hOmk9YTtyZXR1cm4gaX07cmV0dXJuIHRoaXMueD1lLHRoaXMueT10LHRoaXMubGFzdEluZGV4PWUubGVuZ3RoLTEsdGhpcy5pbnRlcnBvbGF0ZT1mdW5jdGlvbihlKXtyZXR1cm4gZT8obj1vKHRoaXMueCxlKSxyPW4tMSwoZS10aGlzLnhbcl0pKih0aGlzLnlbbl0tdGhpcy55W3JdKS8odGhpcy54W25dLXRoaXMueFtyXSkrdGhpcy55W3JdKTowfSx0aGlzfSxnZXRJbnRlcnBvbGF0ZUZ1bmN0aW9uOmZ1bmN0aW9uKGUpe3RoaXMuY29udHJvbGxlci5zcGxpbmV8fCh0aGlzLmNvbnRyb2xsZXIuc3BsaW5lPXRoaXMucGFyYW1zLmxvb3A/bmV3IGRlLkxpbmVhclNwbGluZSh0aGlzLnNsaWRlc0dyaWQsZS5zbGlkZXNHcmlkKTpuZXcgZGUuTGluZWFyU3BsaW5lKHRoaXMuc25hcEdyaWQsZS5zbmFwR3JpZCkpfSxzZXRUcmFuc2xhdGU6ZnVuY3Rpb24oZSx0KXt2YXIgaSxzLGE9dGhpcyxyPWEuY29udHJvbGxlci5jb250cm9sO2Z1bmN0aW9uIG4oZSl7dmFyIHQ9YS5ydGxUcmFuc2xhdGU/LWEudHJhbnNsYXRlOmEudHJhbnNsYXRlO1wic2xpZGVcIj09PWEucGFyYW1zLmNvbnRyb2xsZXIuYnkmJihhLmNvbnRyb2xsZXIuZ2V0SW50ZXJwb2xhdGVGdW5jdGlvbihlKSxzPS1hLmNvbnRyb2xsZXIuc3BsaW5lLmludGVycG9sYXRlKC10KSkscyYmXCJjb250YWluZXJcIiE9PWEucGFyYW1zLmNvbnRyb2xsZXIuYnl8fChpPShlLm1heFRyYW5zbGF0ZSgpLWUubWluVHJhbnNsYXRlKCkpLyhhLm1heFRyYW5zbGF0ZSgpLWEubWluVHJhbnNsYXRlKCkpLHM9KHQtYS5taW5UcmFuc2xhdGUoKSkqaStlLm1pblRyYW5zbGF0ZSgpKSxhLnBhcmFtcy5jb250cm9sbGVyLmludmVyc2UmJihzPWUubWF4VHJhbnNsYXRlKCktcyksZS51cGRhdGVQcm9ncmVzcyhzKSxlLnNldFRyYW5zbGF0ZShzLGEpLGUudXBkYXRlQWN0aXZlSW5kZXgoKSxlLnVwZGF0ZVNsaWRlc0NsYXNzZXMoKX1pZihBcnJheS5pc0FycmF5KHIpKWZvcih2YXIgbz0wO288ci5sZW5ndGg7bys9MSlyW29dIT09dCYmcltvXWluc3RhbmNlb2YgVyYmbihyW29dKTtlbHNlIHIgaW5zdGFuY2VvZiBXJiZ0IT09ciYmbihyKX0sc2V0VHJhbnNpdGlvbjpmdW5jdGlvbihlLHQpe3ZhciBpLHM9dGhpcyxhPXMuY29udHJvbGxlci5jb250cm9sO2Z1bmN0aW9uIHIodCl7dC5zZXRUcmFuc2l0aW9uKGUscyksMCE9PWUmJih0LnRyYW5zaXRpb25TdGFydCgpLHQucGFyYW1zLmF1dG9IZWlnaHQmJm4ubmV4dFRpY2soKGZ1bmN0aW9uKCl7dC51cGRhdGVBdXRvSGVpZ2h0KCl9KSksdC4kd3JhcHBlckVsLnRyYW5zaXRpb25FbmQoKGZ1bmN0aW9uKCl7YSYmKHQucGFyYW1zLmxvb3AmJlwic2xpZGVcIj09PXMucGFyYW1zLmNvbnRyb2xsZXIuYnkmJnQubG9vcEZpeCgpLHQudHJhbnNpdGlvbkVuZCgpKX0pKSl9aWYoQXJyYXkuaXNBcnJheShhKSlmb3IoaT0wO2k8YS5sZW5ndGg7aSs9MSlhW2ldIT09dCYmYVtpXWluc3RhbmNlb2YgVyYmcihhW2ldKTtlbHNlIGEgaW5zdGFuY2VvZiBXJiZ0IT09YSYmcihhKX19LGhlPXttYWtlRWxGb2N1c2FibGU6ZnVuY3Rpb24oZSl7cmV0dXJuIGUuYXR0cihcInRhYkluZGV4XCIsXCIwXCIpLGV9LGFkZEVsUm9sZTpmdW5jdGlvbihlLHQpe3JldHVybiBlLmF0dHIoXCJyb2xlXCIsdCksZX0sYWRkRWxMYWJlbDpmdW5jdGlvbihlLHQpe3JldHVybiBlLmF0dHIoXCJhcmlhLWxhYmVsXCIsdCksZX0sZGlzYWJsZUVsOmZ1bmN0aW9uKGUpe3JldHVybiBlLmF0dHIoXCJhcmlhLWRpc2FibGVkXCIsITApLGV9LGVuYWJsZUVsOmZ1bmN0aW9uKGUpe3JldHVybiBlLmF0dHIoXCJhcmlhLWRpc2FibGVkXCIsITEpLGV9LG9uRW50ZXJLZXk6ZnVuY3Rpb24oZSl7dmFyIHQ9dGhpcy5wYXJhbXMuYTExeTtpZigxMz09PWUua2V5Q29kZSl7dmFyIGk9cyhlLnRhcmdldCk7dGhpcy5uYXZpZ2F0aW9uJiZ0aGlzLm5hdmlnYXRpb24uJG5leHRFbCYmaS5pcyh0aGlzLm5hdmlnYXRpb24uJG5leHRFbCkmJih0aGlzLmlzRW5kJiYhdGhpcy5wYXJhbXMubG9vcHx8dGhpcy5zbGlkZU5leHQoKSx0aGlzLmlzRW5kP3RoaXMuYTExeS5ub3RpZnkodC5sYXN0U2xpZGVNZXNzYWdlKTp0aGlzLmExMXkubm90aWZ5KHQubmV4dFNsaWRlTWVzc2FnZSkpLHRoaXMubmF2aWdhdGlvbiYmdGhpcy5uYXZpZ2F0aW9uLiRwcmV2RWwmJmkuaXModGhpcy5uYXZpZ2F0aW9uLiRwcmV2RWwpJiYodGhpcy5pc0JlZ2lubmluZyYmIXRoaXMucGFyYW1zLmxvb3B8fHRoaXMuc2xpZGVQcmV2KCksdGhpcy5pc0JlZ2lubmluZz90aGlzLmExMXkubm90aWZ5KHQuZmlyc3RTbGlkZU1lc3NhZ2UpOnRoaXMuYTExeS5ub3RpZnkodC5wcmV2U2xpZGVNZXNzYWdlKSksdGhpcy5wYWdpbmF0aW9uJiZpLmlzKFwiLlwiK3RoaXMucGFyYW1zLnBhZ2luYXRpb24uYnVsbGV0Q2xhc3MpJiZpWzBdLmNsaWNrKCl9fSxub3RpZnk6ZnVuY3Rpb24oZSl7dmFyIHQ9dGhpcy5hMTF5LmxpdmVSZWdpb247MCE9PXQubGVuZ3RoJiYodC5odG1sKFwiXCIpLHQuaHRtbChlKSl9LHVwZGF0ZU5hdmlnYXRpb246ZnVuY3Rpb24oKXtpZighdGhpcy5wYXJhbXMubG9vcCYmdGhpcy5uYXZpZ2F0aW9uKXt2YXIgZT10aGlzLm5hdmlnYXRpb24sdD1lLiRuZXh0RWwsaT1lLiRwcmV2RWw7aSYmaS5sZW5ndGg+MCYmKHRoaXMuaXNCZWdpbm5pbmc/dGhpcy5hMTF5LmRpc2FibGVFbChpKTp0aGlzLmExMXkuZW5hYmxlRWwoaSkpLHQmJnQubGVuZ3RoPjAmJih0aGlzLmlzRW5kP3RoaXMuYTExeS5kaXNhYmxlRWwodCk6dGhpcy5hMTF5LmVuYWJsZUVsKHQpKX19LHVwZGF0ZVBhZ2luYXRpb246ZnVuY3Rpb24oKXt2YXIgZT10aGlzLHQ9ZS5wYXJhbXMuYTExeTtlLnBhZ2luYXRpb24mJmUucGFyYW1zLnBhZ2luYXRpb24uY2xpY2thYmxlJiZlLnBhZ2luYXRpb24uYnVsbGV0cyYmZS5wYWdpbmF0aW9uLmJ1bGxldHMubGVuZ3RoJiZlLnBhZ2luYXRpb24uYnVsbGV0cy5lYWNoKChmdW5jdGlvbihpLGEpe3ZhciByPXMoYSk7ZS5hMTF5Lm1ha2VFbEZvY3VzYWJsZShyKSxlLmExMXkuYWRkRWxSb2xlKHIsXCJidXR0b25cIiksZS5hMTF5LmFkZEVsTGFiZWwocix0LnBhZ2luYXRpb25CdWxsZXRNZXNzYWdlLnJlcGxhY2UoL1xce1xce2luZGV4XFx9XFx9LyxyLmluZGV4KCkrMSkpfSkpfSxpbml0OmZ1bmN0aW9uKCl7dGhpcy4kZWwuYXBwZW5kKHRoaXMuYTExeS5saXZlUmVnaW9uKTt2YXIgZSx0LGk9dGhpcy5wYXJhbXMuYTExeTt0aGlzLm5hdmlnYXRpb24mJnRoaXMubmF2aWdhdGlvbi4kbmV4dEVsJiYoZT10aGlzLm5hdmlnYXRpb24uJG5leHRFbCksdGhpcy5uYXZpZ2F0aW9uJiZ0aGlzLm5hdmlnYXRpb24uJHByZXZFbCYmKHQ9dGhpcy5uYXZpZ2F0aW9uLiRwcmV2RWwpLGUmJih0aGlzLmExMXkubWFrZUVsRm9jdXNhYmxlKGUpLHRoaXMuYTExeS5hZGRFbFJvbGUoZSxcImJ1dHRvblwiKSx0aGlzLmExMXkuYWRkRWxMYWJlbChlLGkubmV4dFNsaWRlTWVzc2FnZSksZS5vbihcImtleWRvd25cIix0aGlzLmExMXkub25FbnRlcktleSkpLHQmJih0aGlzLmExMXkubWFrZUVsRm9jdXNhYmxlKHQpLHRoaXMuYTExeS5hZGRFbFJvbGUodCxcImJ1dHRvblwiKSx0aGlzLmExMXkuYWRkRWxMYWJlbCh0LGkucHJldlNsaWRlTWVzc2FnZSksdC5vbihcImtleWRvd25cIix0aGlzLmExMXkub25FbnRlcktleSkpLHRoaXMucGFnaW5hdGlvbiYmdGhpcy5wYXJhbXMucGFnaW5hdGlvbi5jbGlja2FibGUmJnRoaXMucGFnaW5hdGlvbi5idWxsZXRzJiZ0aGlzLnBhZ2luYXRpb24uYnVsbGV0cy5sZW5ndGgmJnRoaXMucGFnaW5hdGlvbi4kZWwub24oXCJrZXlkb3duXCIsXCIuXCIrdGhpcy5wYXJhbXMucGFnaW5hdGlvbi5idWxsZXRDbGFzcyx0aGlzLmExMXkub25FbnRlcktleSl9LGRlc3Ryb3k6ZnVuY3Rpb24oKXt2YXIgZSx0O3RoaXMuYTExeS5saXZlUmVnaW9uJiZ0aGlzLmExMXkubGl2ZVJlZ2lvbi5sZW5ndGg+MCYmdGhpcy5hMTF5LmxpdmVSZWdpb24ucmVtb3ZlKCksdGhpcy5uYXZpZ2F0aW9uJiZ0aGlzLm5hdmlnYXRpb24uJG5leHRFbCYmKGU9dGhpcy5uYXZpZ2F0aW9uLiRuZXh0RWwpLHRoaXMubmF2aWdhdGlvbiYmdGhpcy5uYXZpZ2F0aW9uLiRwcmV2RWwmJih0PXRoaXMubmF2aWdhdGlvbi4kcHJldkVsKSxlJiZlLm9mZihcImtleWRvd25cIix0aGlzLmExMXkub25FbnRlcktleSksdCYmdC5vZmYoXCJrZXlkb3duXCIsdGhpcy5hMTF5Lm9uRW50ZXJLZXkpLHRoaXMucGFnaW5hdGlvbiYmdGhpcy5wYXJhbXMucGFnaW5hdGlvbi5jbGlja2FibGUmJnRoaXMucGFnaW5hdGlvbi5idWxsZXRzJiZ0aGlzLnBhZ2luYXRpb24uYnVsbGV0cy5sZW5ndGgmJnRoaXMucGFnaW5hdGlvbi4kZWwub2ZmKFwia2V5ZG93blwiLFwiLlwiK3RoaXMucGFyYW1zLnBhZ2luYXRpb24uYnVsbGV0Q2xhc3MsdGhpcy5hMTF5Lm9uRW50ZXJLZXkpfX0scGU9e2luaXQ6ZnVuY3Rpb24oKXtpZih0aGlzLnBhcmFtcy5oaXN0b3J5KXtpZighdC5oaXN0b3J5fHwhdC5oaXN0b3J5LnB1c2hTdGF0ZSlyZXR1cm4gdGhpcy5wYXJhbXMuaGlzdG9yeS5lbmFibGVkPSExLHZvaWQodGhpcy5wYXJhbXMuaGFzaE5hdmlnYXRpb24uZW5hYmxlZD0hMCk7dmFyIGU9dGhpcy5oaXN0b3J5O2UuaW5pdGlhbGl6ZWQ9ITAsZS5wYXRocz1wZS5nZXRQYXRoVmFsdWVzKCksKGUucGF0aHMua2V5fHxlLnBhdGhzLnZhbHVlKSYmKGUuc2Nyb2xsVG9TbGlkZSgwLGUucGF0aHMudmFsdWUsdGhpcy5wYXJhbXMucnVuQ2FsbGJhY2tzT25Jbml0KSx0aGlzLnBhcmFtcy5oaXN0b3J5LnJlcGxhY2VTdGF0ZXx8dC5hZGRFdmVudExpc3RlbmVyKFwicG9wc3RhdGVcIix0aGlzLmhpc3Rvcnkuc2V0SGlzdG9yeVBvcFN0YXRlKSl9fSxkZXN0cm95OmZ1bmN0aW9uKCl7dGhpcy5wYXJhbXMuaGlzdG9yeS5yZXBsYWNlU3RhdGV8fHQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInBvcHN0YXRlXCIsdGhpcy5oaXN0b3J5LnNldEhpc3RvcnlQb3BTdGF0ZSl9LHNldEhpc3RvcnlQb3BTdGF0ZTpmdW5jdGlvbigpe3RoaXMuaGlzdG9yeS5wYXRocz1wZS5nZXRQYXRoVmFsdWVzKCksdGhpcy5oaXN0b3J5LnNjcm9sbFRvU2xpZGUodGhpcy5wYXJhbXMuc3BlZWQsdGhpcy5oaXN0b3J5LnBhdGhzLnZhbHVlLCExKX0sZ2V0UGF0aFZhbHVlczpmdW5jdGlvbigpe3ZhciBlPXQubG9jYXRpb24ucGF0aG5hbWUuc2xpY2UoMSkuc3BsaXQoXCIvXCIpLmZpbHRlcigoZnVuY3Rpb24oZSl7cmV0dXJuXCJcIiE9PWV9KSksaT1lLmxlbmd0aDtyZXR1cm57a2V5OmVbaS0yXSx2YWx1ZTplW2ktMV19fSxzZXRIaXN0b3J5OmZ1bmN0aW9uKGUsaSl7aWYodGhpcy5oaXN0b3J5LmluaXRpYWxpemVkJiZ0aGlzLnBhcmFtcy5oaXN0b3J5LmVuYWJsZWQpe3ZhciBzPXRoaXMuc2xpZGVzLmVxKGkpLGE9cGUuc2x1Z2lmeShzLmF0dHIoXCJkYXRhLWhpc3RvcnlcIikpO3QubG9jYXRpb24ucGF0aG5hbWUuaW5jbHVkZXMoZSl8fChhPWUrXCIvXCIrYSk7dmFyIHI9dC5oaXN0b3J5LnN0YXRlO3ImJnIudmFsdWU9PT1hfHwodGhpcy5wYXJhbXMuaGlzdG9yeS5yZXBsYWNlU3RhdGU/dC5oaXN0b3J5LnJlcGxhY2VTdGF0ZSh7dmFsdWU6YX0sbnVsbCxhKTp0Lmhpc3RvcnkucHVzaFN0YXRlKHt2YWx1ZTphfSxudWxsLGEpKX19LHNsdWdpZnk6ZnVuY3Rpb24oZSl7cmV0dXJuIGUudG9TdHJpbmcoKS5yZXBsYWNlKC9cXHMrL2csXCItXCIpLnJlcGxhY2UoL1teXFx3LV0rL2csXCJcIikucmVwbGFjZSgvLS0rL2csXCItXCIpLnJlcGxhY2UoL14tKy8sXCJcIikucmVwbGFjZSgvLSskLyxcIlwiKX0sc2Nyb2xsVG9TbGlkZTpmdW5jdGlvbihlLHQsaSl7aWYodClmb3IodmFyIHM9MCxhPXRoaXMuc2xpZGVzLmxlbmd0aDtzPGE7cys9MSl7dmFyIHI9dGhpcy5zbGlkZXMuZXEocyk7aWYocGUuc2x1Z2lmeShyLmF0dHIoXCJkYXRhLWhpc3RvcnlcIikpPT09dCYmIXIuaGFzQ2xhc3ModGhpcy5wYXJhbXMuc2xpZGVEdXBsaWNhdGVDbGFzcykpe3ZhciBuPXIuaW5kZXgoKTt0aGlzLnNsaWRlVG8obixlLGkpfX1lbHNlIHRoaXMuc2xpZGVUbygwLGUsaSl9fSxjZT17b25IYXNoQ2FuZ2U6ZnVuY3Rpb24oKXt2YXIgdD1lLmxvY2F0aW9uLmhhc2gucmVwbGFjZShcIiNcIixcIlwiKTtpZih0IT09dGhpcy5zbGlkZXMuZXEodGhpcy5hY3RpdmVJbmRleCkuYXR0cihcImRhdGEtaGFzaFwiKSl7dmFyIGk9dGhpcy4kd3JhcHBlckVsLmNoaWxkcmVuKFwiLlwiK3RoaXMucGFyYW1zLnNsaWRlQ2xhc3MrJ1tkYXRhLWhhc2g9XCInK3QrJ1wiXScpLmluZGV4KCk7aWYodm9pZCAwPT09aSlyZXR1cm47dGhpcy5zbGlkZVRvKGkpfX0sc2V0SGFzaDpmdW5jdGlvbigpe2lmKHRoaXMuaGFzaE5hdmlnYXRpb24uaW5pdGlhbGl6ZWQmJnRoaXMucGFyYW1zLmhhc2hOYXZpZ2F0aW9uLmVuYWJsZWQpaWYodGhpcy5wYXJhbXMuaGFzaE5hdmlnYXRpb24ucmVwbGFjZVN0YXRlJiZ0Lmhpc3RvcnkmJnQuaGlzdG9yeS5yZXBsYWNlU3RhdGUpdC5oaXN0b3J5LnJlcGxhY2VTdGF0ZShudWxsLG51bGwsXCIjXCIrdGhpcy5zbGlkZXMuZXEodGhpcy5hY3RpdmVJbmRleCkuYXR0cihcImRhdGEtaGFzaFwiKXx8XCJcIik7ZWxzZXt2YXIgaT10aGlzLnNsaWRlcy5lcSh0aGlzLmFjdGl2ZUluZGV4KSxzPWkuYXR0cihcImRhdGEtaGFzaFwiKXx8aS5hdHRyKFwiZGF0YS1oaXN0b3J5XCIpO2UubG9jYXRpb24uaGFzaD1zfHxcIlwifX0saW5pdDpmdW5jdGlvbigpe2lmKCEoIXRoaXMucGFyYW1zLmhhc2hOYXZpZ2F0aW9uLmVuYWJsZWR8fHRoaXMucGFyYW1zLmhpc3RvcnkmJnRoaXMucGFyYW1zLmhpc3RvcnkuZW5hYmxlZCkpe3RoaXMuaGFzaE5hdmlnYXRpb24uaW5pdGlhbGl6ZWQ9ITA7dmFyIGk9ZS5sb2NhdGlvbi5oYXNoLnJlcGxhY2UoXCIjXCIsXCJcIik7aWYoaSlmb3IodmFyIGE9MCxyPXRoaXMuc2xpZGVzLmxlbmd0aDthPHI7YSs9MSl7dmFyIG49dGhpcy5zbGlkZXMuZXEoYSk7aWYoKG4uYXR0cihcImRhdGEtaGFzaFwiKXx8bi5hdHRyKFwiZGF0YS1oaXN0b3J5XCIpKT09PWkmJiFuLmhhc0NsYXNzKHRoaXMucGFyYW1zLnNsaWRlRHVwbGljYXRlQ2xhc3MpKXt2YXIgbz1uLmluZGV4KCk7dGhpcy5zbGlkZVRvKG8sMCx0aGlzLnBhcmFtcy5ydW5DYWxsYmFja3NPbkluaXQsITApfX10aGlzLnBhcmFtcy5oYXNoTmF2aWdhdGlvbi53YXRjaFN0YXRlJiZzKHQpLm9uKFwiaGFzaGNoYW5nZVwiLHRoaXMuaGFzaE5hdmlnYXRpb24ub25IYXNoQ2FuZ2UpfX0sZGVzdHJveTpmdW5jdGlvbigpe3RoaXMucGFyYW1zLmhhc2hOYXZpZ2F0aW9uLndhdGNoU3RhdGUmJnModCkub2ZmKFwiaGFzaGNoYW5nZVwiLHRoaXMuaGFzaE5hdmlnYXRpb24ub25IYXNoQ2FuZ2UpfX0sdWU9e3J1bjpmdW5jdGlvbigpe3ZhciBlPXRoaXMsdD1lLnNsaWRlcy5lcShlLmFjdGl2ZUluZGV4KSxpPWUucGFyYW1zLmF1dG9wbGF5LmRlbGF5O3QuYXR0cihcImRhdGEtc3dpcGVyLWF1dG9wbGF5XCIpJiYoaT10LmF0dHIoXCJkYXRhLXN3aXBlci1hdXRvcGxheVwiKXx8ZS5wYXJhbXMuYXV0b3BsYXkuZGVsYXkpLGNsZWFyVGltZW91dChlLmF1dG9wbGF5LnRpbWVvdXQpLGUuYXV0b3BsYXkudGltZW91dD1uLm5leHRUaWNrKChmdW5jdGlvbigpe2UucGFyYW1zLmF1dG9wbGF5LnJldmVyc2VEaXJlY3Rpb24/ZS5wYXJhbXMubG9vcD8oZS5sb29wRml4KCksZS5zbGlkZVByZXYoZS5wYXJhbXMuc3BlZWQsITAsITApLGUuZW1pdChcImF1dG9wbGF5XCIpKTplLmlzQmVnaW5uaW5nP2UucGFyYW1zLmF1dG9wbGF5LnN0b3BPbkxhc3RTbGlkZT9lLmF1dG9wbGF5LnN0b3AoKTooZS5zbGlkZVRvKGUuc2xpZGVzLmxlbmd0aC0xLGUucGFyYW1zLnNwZWVkLCEwLCEwKSxlLmVtaXQoXCJhdXRvcGxheVwiKSk6KGUuc2xpZGVQcmV2KGUucGFyYW1zLnNwZWVkLCEwLCEwKSxlLmVtaXQoXCJhdXRvcGxheVwiKSk6ZS5wYXJhbXMubG9vcD8oZS5sb29wRml4KCksZS5zbGlkZU5leHQoZS5wYXJhbXMuc3BlZWQsITAsITApLGUuZW1pdChcImF1dG9wbGF5XCIpKTplLmlzRW5kP2UucGFyYW1zLmF1dG9wbGF5LnN0b3BPbkxhc3RTbGlkZT9lLmF1dG9wbGF5LnN0b3AoKTooZS5zbGlkZVRvKDAsZS5wYXJhbXMuc3BlZWQsITAsITApLGUuZW1pdChcImF1dG9wbGF5XCIpKTooZS5zbGlkZU5leHQoZS5wYXJhbXMuc3BlZWQsITAsITApLGUuZW1pdChcImF1dG9wbGF5XCIpKSxlLnBhcmFtcy5jc3NNb2RlJiZlLmF1dG9wbGF5LnJ1bm5pbmcmJmUuYXV0b3BsYXkucnVuKCl9KSxpKX0sc3RhcnQ6ZnVuY3Rpb24oKXtyZXR1cm4gdm9pZCAwPT09dGhpcy5hdXRvcGxheS50aW1lb3V0JiYoIXRoaXMuYXV0b3BsYXkucnVubmluZyYmKHRoaXMuYXV0b3BsYXkucnVubmluZz0hMCx0aGlzLmVtaXQoXCJhdXRvcGxheVN0YXJ0XCIpLHRoaXMuYXV0b3BsYXkucnVuKCksITApKX0sc3RvcDpmdW5jdGlvbigpe3JldHVybiEhdGhpcy5hdXRvcGxheS5ydW5uaW5nJiYodm9pZCAwIT09dGhpcy5hdXRvcGxheS50aW1lb3V0JiYodGhpcy5hdXRvcGxheS50aW1lb3V0JiYoY2xlYXJUaW1lb3V0KHRoaXMuYXV0b3BsYXkudGltZW91dCksdGhpcy5hdXRvcGxheS50aW1lb3V0PXZvaWQgMCksdGhpcy5hdXRvcGxheS5ydW5uaW5nPSExLHRoaXMuZW1pdChcImF1dG9wbGF5U3RvcFwiKSwhMCkpfSxwYXVzZTpmdW5jdGlvbihlKXt0aGlzLmF1dG9wbGF5LnJ1bm5pbmcmJih0aGlzLmF1dG9wbGF5LnBhdXNlZHx8KHRoaXMuYXV0b3BsYXkudGltZW91dCYmY2xlYXJUaW1lb3V0KHRoaXMuYXV0b3BsYXkudGltZW91dCksdGhpcy5hdXRvcGxheS5wYXVzZWQ9ITAsMCE9PWUmJnRoaXMucGFyYW1zLmF1dG9wbGF5LndhaXRGb3JUcmFuc2l0aW9uPyh0aGlzLiR3cmFwcGVyRWxbMF0uYWRkRXZlbnRMaXN0ZW5lcihcInRyYW5zaXRpb25lbmRcIix0aGlzLmF1dG9wbGF5Lm9uVHJhbnNpdGlvbkVuZCksdGhpcy4kd3JhcHBlckVsWzBdLmFkZEV2ZW50TGlzdGVuZXIoXCJ3ZWJraXRUcmFuc2l0aW9uRW5kXCIsdGhpcy5hdXRvcGxheS5vblRyYW5zaXRpb25FbmQpKToodGhpcy5hdXRvcGxheS5wYXVzZWQ9ITEsdGhpcy5hdXRvcGxheS5ydW4oKSkpKX19LHZlPXtzZXRUcmFuc2xhdGU6ZnVuY3Rpb24oKXtmb3IodmFyIGU9dGhpcy5zbGlkZXMsdD0wO3Q8ZS5sZW5ndGg7dCs9MSl7dmFyIGk9dGhpcy5zbGlkZXMuZXEodCkscz0taVswXS5zd2lwZXJTbGlkZU9mZnNldDt0aGlzLnBhcmFtcy52aXJ0dWFsVHJhbnNsYXRlfHwocy09dGhpcy50cmFuc2xhdGUpO3ZhciBhPTA7dGhpcy5pc0hvcml6b250YWwoKXx8KGE9cyxzPTApO3ZhciByPXRoaXMucGFyYW1zLmZhZGVFZmZlY3QuY3Jvc3NGYWRlP01hdGgubWF4KDEtTWF0aC5hYnMoaVswXS5wcm9ncmVzcyksMCk6MStNYXRoLm1pbihNYXRoLm1heChpWzBdLnByb2dyZXNzLC0xKSwwKTtpLmNzcyh7b3BhY2l0eTpyfSkudHJhbnNmb3JtKFwidHJhbnNsYXRlM2QoXCIrcytcInB4LCBcIithK1wicHgsIDBweClcIil9fSxzZXRUcmFuc2l0aW9uOmZ1bmN0aW9uKGUpe3ZhciB0PXRoaXMsaT10LnNsaWRlcyxzPXQuJHdyYXBwZXJFbDtpZihpLnRyYW5zaXRpb24oZSksdC5wYXJhbXMudmlydHVhbFRyYW5zbGF0ZSYmMCE9PWUpe3ZhciBhPSExO2kudHJhbnNpdGlvbkVuZCgoZnVuY3Rpb24oKXtpZighYSYmdCYmIXQuZGVzdHJveWVkKXthPSEwLHQuYW5pbWF0aW5nPSExO2Zvcih2YXIgZT1bXCJ3ZWJraXRUcmFuc2l0aW9uRW5kXCIsXCJ0cmFuc2l0aW9uZW5kXCJdLGk9MDtpPGUubGVuZ3RoO2krPTEpcy50cmlnZ2VyKGVbaV0pfX0pKX19fSxmZT17c2V0VHJhbnNsYXRlOmZ1bmN0aW9uKCl7dmFyIGUsdD10aGlzLiRlbCxpPXRoaXMuJHdyYXBwZXJFbCxhPXRoaXMuc2xpZGVzLHI9dGhpcy53aWR0aCxuPXRoaXMuaGVpZ2h0LG89dGhpcy5ydGxUcmFuc2xhdGUsbD10aGlzLnNpemUsZD10aGlzLnBhcmFtcy5jdWJlRWZmZWN0LGg9dGhpcy5pc0hvcml6b250YWwoKSxwPXRoaXMudmlydHVhbCYmdGhpcy5wYXJhbXMudmlydHVhbC5lbmFibGVkLGM9MDtkLnNoYWRvdyYmKGg/KDA9PT0oZT1pLmZpbmQoXCIuc3dpcGVyLWN1YmUtc2hhZG93XCIpKS5sZW5ndGgmJihlPXMoJzxkaXYgY2xhc3M9XCJzd2lwZXItY3ViZS1zaGFkb3dcIj48L2Rpdj4nKSxpLmFwcGVuZChlKSksZS5jc3Moe2hlaWdodDpyK1wicHhcIn0pKTowPT09KGU9dC5maW5kKFwiLnN3aXBlci1jdWJlLXNoYWRvd1wiKSkubGVuZ3RoJiYoZT1zKCc8ZGl2IGNsYXNzPVwic3dpcGVyLWN1YmUtc2hhZG93XCI+PC9kaXY+JyksdC5hcHBlbmQoZSkpKTtmb3IodmFyIHU9MDt1PGEubGVuZ3RoO3UrPTEpe3ZhciB2PWEuZXEodSksZj11O3AmJihmPXBhcnNlSW50KHYuYXR0cihcImRhdGEtc3dpcGVyLXNsaWRlLWluZGV4XCIpLDEwKSk7dmFyIG09OTAqZixnPU1hdGguZmxvb3IobS8zNjApO28mJihtPS1tLGc9TWF0aC5mbG9vcigtbS8zNjApKTt2YXIgYj1NYXRoLm1heChNYXRoLm1pbih2WzBdLnByb2dyZXNzLDEpLC0xKSx3PTAseT0wLHg9MDtmJTQ9PTA/KHc9NCotZypsLHg9MCk6KGYtMSklND09MD8odz0wLHg9NCotZypsKTooZi0yKSU0PT0wPyh3PWwrNCpnKmwseD1sKTooZi0zKSU0PT0wJiYodz0tbCx4PTMqbCs0KmwqZyksbyYmKHc9LXcpLGh8fCh5PXcsdz0wKTt2YXIgVD1cInJvdGF0ZVgoXCIrKGg/MDotbSkrXCJkZWcpIHJvdGF0ZVkoXCIrKGg/bTowKStcImRlZykgdHJhbnNsYXRlM2QoXCIrdytcInB4LCBcIit5K1wicHgsIFwiK3grXCJweClcIjtpZihiPD0xJiZiPi0xJiYoYz05MCpmKzkwKmIsbyYmKGM9OTAqLWYtOTAqYikpLHYudHJhbnNmb3JtKFQpLGQuc2xpZGVTaGFkb3dzKXt2YXIgRT1oP3YuZmluZChcIi5zd2lwZXItc2xpZGUtc2hhZG93LWxlZnRcIik6di5maW5kKFwiLnN3aXBlci1zbGlkZS1zaGFkb3ctdG9wXCIpLFM9aD92LmZpbmQoXCIuc3dpcGVyLXNsaWRlLXNoYWRvdy1yaWdodFwiKTp2LmZpbmQoXCIuc3dpcGVyLXNsaWRlLXNoYWRvdy1ib3R0b21cIik7MD09PUUubGVuZ3RoJiYoRT1zKCc8ZGl2IGNsYXNzPVwic3dpcGVyLXNsaWRlLXNoYWRvdy0nKyhoP1wibGVmdFwiOlwidG9wXCIpKydcIj48L2Rpdj4nKSx2LmFwcGVuZChFKSksMD09PVMubGVuZ3RoJiYoUz1zKCc8ZGl2IGNsYXNzPVwic3dpcGVyLXNsaWRlLXNoYWRvdy0nKyhoP1wicmlnaHRcIjpcImJvdHRvbVwiKSsnXCI+PC9kaXY+Jyksdi5hcHBlbmQoUykpLEUubGVuZ3RoJiYoRVswXS5zdHlsZS5vcGFjaXR5PU1hdGgubWF4KC1iLDApKSxTLmxlbmd0aCYmKFNbMF0uc3R5bGUub3BhY2l0eT1NYXRoLm1heChiLDApKX19aWYoaS5jc3Moe1wiLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luXCI6XCI1MCUgNTAlIC1cIitsLzIrXCJweFwiLFwiLW1vei10cmFuc2Zvcm0tb3JpZ2luXCI6XCI1MCUgNTAlIC1cIitsLzIrXCJweFwiLFwiLW1zLXRyYW5zZm9ybS1vcmlnaW5cIjpcIjUwJSA1MCUgLVwiK2wvMitcInB4XCIsXCJ0cmFuc2Zvcm0tb3JpZ2luXCI6XCI1MCUgNTAlIC1cIitsLzIrXCJweFwifSksZC5zaGFkb3cpaWYoaCllLnRyYW5zZm9ybShcInRyYW5zbGF0ZTNkKDBweCwgXCIrKHIvMitkLnNoYWRvd09mZnNldCkrXCJweCwgXCIrLXIvMitcInB4KSByb3RhdGVYKDkwZGVnKSByb3RhdGVaKDBkZWcpIHNjYWxlKFwiK2Quc2hhZG93U2NhbGUrXCIpXCIpO2Vsc2V7dmFyIEM9TWF0aC5hYnMoYyktOTAqTWF0aC5mbG9vcihNYXRoLmFicyhjKS85MCksTT0xLjUtKE1hdGguc2luKDIqQypNYXRoLlBJLzM2MCkvMitNYXRoLmNvcygyKkMqTWF0aC5QSS8zNjApLzIpLFA9ZC5zaGFkb3dTY2FsZSx6PWQuc2hhZG93U2NhbGUvTSxrPWQuc2hhZG93T2Zmc2V0O2UudHJhbnNmb3JtKFwic2NhbGUzZChcIitQK1wiLCAxLCBcIit6K1wiKSB0cmFuc2xhdGUzZCgwcHgsIFwiKyhuLzIraykrXCJweCwgXCIrLW4vMi96K1wicHgpIHJvdGF0ZVgoLTkwZGVnKVwiKX12YXIgJD1qLmlzU2FmYXJpfHxqLmlzVWlXZWJWaWV3Py1sLzI6MDtpLnRyYW5zZm9ybShcInRyYW5zbGF0ZTNkKDBweCwwLFwiKyQrXCJweCkgcm90YXRlWChcIisodGhpcy5pc0hvcml6b250YWwoKT8wOmMpK1wiZGVnKSByb3RhdGVZKFwiKyh0aGlzLmlzSG9yaXpvbnRhbCgpPy1jOjApK1wiZGVnKVwiKX0sc2V0VHJhbnNpdGlvbjpmdW5jdGlvbihlKXt2YXIgdD10aGlzLiRlbDt0aGlzLnNsaWRlcy50cmFuc2l0aW9uKGUpLmZpbmQoXCIuc3dpcGVyLXNsaWRlLXNoYWRvdy10b3AsIC5zd2lwZXItc2xpZGUtc2hhZG93LXJpZ2h0LCAuc3dpcGVyLXNsaWRlLXNoYWRvdy1ib3R0b20sIC5zd2lwZXItc2xpZGUtc2hhZG93LWxlZnRcIikudHJhbnNpdGlvbihlKSx0aGlzLnBhcmFtcy5jdWJlRWZmZWN0LnNoYWRvdyYmIXRoaXMuaXNIb3Jpem9udGFsKCkmJnQuZmluZChcIi5zd2lwZXItY3ViZS1zaGFkb3dcIikudHJhbnNpdGlvbihlKX19LG1lPXtzZXRUcmFuc2xhdGU6ZnVuY3Rpb24oKXtmb3IodmFyIGU9dGhpcy5zbGlkZXMsdD10aGlzLnJ0bFRyYW5zbGF0ZSxpPTA7aTxlLmxlbmd0aDtpKz0xKXt2YXIgYT1lLmVxKGkpLHI9YVswXS5wcm9ncmVzczt0aGlzLnBhcmFtcy5mbGlwRWZmZWN0LmxpbWl0Um90YXRpb24mJihyPU1hdGgubWF4KE1hdGgubWluKGFbMF0ucHJvZ3Jlc3MsMSksLTEpKTt2YXIgbj0tMTgwKnIsbz0wLGw9LWFbMF0uc3dpcGVyU2xpZGVPZmZzZXQsZD0wO2lmKHRoaXMuaXNIb3Jpem9udGFsKCk/dCYmKG49LW4pOihkPWwsbD0wLG89LW4sbj0wKSxhWzBdLnN0eWxlLnpJbmRleD0tTWF0aC5hYnMoTWF0aC5yb3VuZChyKSkrZS5sZW5ndGgsdGhpcy5wYXJhbXMuZmxpcEVmZmVjdC5zbGlkZVNoYWRvd3Mpe3ZhciBoPXRoaXMuaXNIb3Jpem9udGFsKCk/YS5maW5kKFwiLnN3aXBlci1zbGlkZS1zaGFkb3ctbGVmdFwiKTphLmZpbmQoXCIuc3dpcGVyLXNsaWRlLXNoYWRvdy10b3BcIikscD10aGlzLmlzSG9yaXpvbnRhbCgpP2EuZmluZChcIi5zd2lwZXItc2xpZGUtc2hhZG93LXJpZ2h0XCIpOmEuZmluZChcIi5zd2lwZXItc2xpZGUtc2hhZG93LWJvdHRvbVwiKTswPT09aC5sZW5ndGgmJihoPXMoJzxkaXYgY2xhc3M9XCJzd2lwZXItc2xpZGUtc2hhZG93LScrKHRoaXMuaXNIb3Jpem9udGFsKCk/XCJsZWZ0XCI6XCJ0b3BcIikrJ1wiPjwvZGl2PicpLGEuYXBwZW5kKGgpKSwwPT09cC5sZW5ndGgmJihwPXMoJzxkaXYgY2xhc3M9XCJzd2lwZXItc2xpZGUtc2hhZG93LScrKHRoaXMuaXNIb3Jpem9udGFsKCk/XCJyaWdodFwiOlwiYm90dG9tXCIpKydcIj48L2Rpdj4nKSxhLmFwcGVuZChwKSksaC5sZW5ndGgmJihoWzBdLnN0eWxlLm9wYWNpdHk9TWF0aC5tYXgoLXIsMCkpLHAubGVuZ3RoJiYocFswXS5zdHlsZS5vcGFjaXR5PU1hdGgubWF4KHIsMCkpfWEudHJhbnNmb3JtKFwidHJhbnNsYXRlM2QoXCIrbCtcInB4LCBcIitkK1wicHgsIDBweCkgcm90YXRlWChcIitvK1wiZGVnKSByb3RhdGVZKFwiK24rXCJkZWcpXCIpfX0sc2V0VHJhbnNpdGlvbjpmdW5jdGlvbihlKXt2YXIgdD10aGlzLGk9dC5zbGlkZXMscz10LmFjdGl2ZUluZGV4LGE9dC4kd3JhcHBlckVsO2lmKGkudHJhbnNpdGlvbihlKS5maW5kKFwiLnN3aXBlci1zbGlkZS1zaGFkb3ctdG9wLCAuc3dpcGVyLXNsaWRlLXNoYWRvdy1yaWdodCwgLnN3aXBlci1zbGlkZS1zaGFkb3ctYm90dG9tLCAuc3dpcGVyLXNsaWRlLXNoYWRvdy1sZWZ0XCIpLnRyYW5zaXRpb24oZSksdC5wYXJhbXMudmlydHVhbFRyYW5zbGF0ZSYmMCE9PWUpe3ZhciByPSExO2kuZXEocykudHJhbnNpdGlvbkVuZCgoZnVuY3Rpb24oKXtpZighciYmdCYmIXQuZGVzdHJveWVkKXtyPSEwLHQuYW5pbWF0aW5nPSExO2Zvcih2YXIgZT1bXCJ3ZWJraXRUcmFuc2l0aW9uRW5kXCIsXCJ0cmFuc2l0aW9uZW5kXCJdLGk9MDtpPGUubGVuZ3RoO2krPTEpYS50cmlnZ2VyKGVbaV0pfX0pKX19fSxnZT17c2V0VHJhbnNsYXRlOmZ1bmN0aW9uKCl7Zm9yKHZhciBlPXRoaXMud2lkdGgsdD10aGlzLmhlaWdodCxpPXRoaXMuc2xpZGVzLGE9dGhpcy4kd3JhcHBlckVsLHI9dGhpcy5zbGlkZXNTaXplc0dyaWQsbj10aGlzLnBhcmFtcy5jb3ZlcmZsb3dFZmZlY3QsbD10aGlzLmlzSG9yaXpvbnRhbCgpLGQ9dGhpcy50cmFuc2xhdGUsaD1sP2UvMi1kOnQvMi1kLHA9bD9uLnJvdGF0ZTotbi5yb3RhdGUsYz1uLmRlcHRoLHU9MCx2PWkubGVuZ3RoO3U8djt1Kz0xKXt2YXIgZj1pLmVxKHUpLG09clt1XSxnPShoLWZbMF0uc3dpcGVyU2xpZGVPZmZzZXQtbS8yKS9tKm4ubW9kaWZpZXIsYj1sP3AqZzowLHc9bD8wOnAqZyx5PS1jKk1hdGguYWJzKGcpLHg9bi5zdHJldGNoO1wic3RyaW5nXCI9PXR5cGVvZiB4JiYtMSE9PXguaW5kZXhPZihcIiVcIikmJih4PXBhcnNlRmxvYXQobi5zdHJldGNoKS8xMDAqbSk7dmFyIFQ9bD8wOngqZyxFPWw/eCpnOjA7TWF0aC5hYnMoRSk8LjAwMSYmKEU9MCksTWF0aC5hYnMoVCk8LjAwMSYmKFQ9MCksTWF0aC5hYnMoeSk8LjAwMSYmKHk9MCksTWF0aC5hYnMoYik8LjAwMSYmKGI9MCksTWF0aC5hYnModyk8LjAwMSYmKHc9MCk7dmFyIFM9XCJ0cmFuc2xhdGUzZChcIitFK1wicHgsXCIrVCtcInB4LFwiK3krXCJweCkgIHJvdGF0ZVgoXCIrdytcImRlZykgcm90YXRlWShcIitiK1wiZGVnKVwiO2lmKGYudHJhbnNmb3JtKFMpLGZbMF0uc3R5bGUuekluZGV4PTEtTWF0aC5hYnMoTWF0aC5yb3VuZChnKSksbi5zbGlkZVNoYWRvd3Mpe3ZhciBDPWw/Zi5maW5kKFwiLnN3aXBlci1zbGlkZS1zaGFkb3ctbGVmdFwiKTpmLmZpbmQoXCIuc3dpcGVyLXNsaWRlLXNoYWRvdy10b3BcIiksTT1sP2YuZmluZChcIi5zd2lwZXItc2xpZGUtc2hhZG93LXJpZ2h0XCIpOmYuZmluZChcIi5zd2lwZXItc2xpZGUtc2hhZG93LWJvdHRvbVwiKTswPT09Qy5sZW5ndGgmJihDPXMoJzxkaXYgY2xhc3M9XCJzd2lwZXItc2xpZGUtc2hhZG93LScrKGw/XCJsZWZ0XCI6XCJ0b3BcIikrJ1wiPjwvZGl2PicpLGYuYXBwZW5kKEMpKSwwPT09TS5sZW5ndGgmJihNPXMoJzxkaXYgY2xhc3M9XCJzd2lwZXItc2xpZGUtc2hhZG93LScrKGw/XCJyaWdodFwiOlwiYm90dG9tXCIpKydcIj48L2Rpdj4nKSxmLmFwcGVuZChNKSksQy5sZW5ndGgmJihDWzBdLnN0eWxlLm9wYWNpdHk9Zz4wP2c6MCksTS5sZW5ndGgmJihNWzBdLnN0eWxlLm9wYWNpdHk9LWc+MD8tZzowKX19KG8ucG9pbnRlckV2ZW50c3x8by5wcmVmaXhlZFBvaW50ZXJFdmVudHMpJiYoYVswXS5zdHlsZS5wZXJzcGVjdGl2ZU9yaWdpbj1oK1wicHggNTAlXCIpfSxzZXRUcmFuc2l0aW9uOmZ1bmN0aW9uKGUpe3RoaXMuc2xpZGVzLnRyYW5zaXRpb24oZSkuZmluZChcIi5zd2lwZXItc2xpZGUtc2hhZG93LXRvcCwgLnN3aXBlci1zbGlkZS1zaGFkb3ctcmlnaHQsIC5zd2lwZXItc2xpZGUtc2hhZG93LWJvdHRvbSwgLnN3aXBlci1zbGlkZS1zaGFkb3ctbGVmdFwiKS50cmFuc2l0aW9uKGUpfX0sYmU9e2luaXQ6ZnVuY3Rpb24oKXt2YXIgZT10aGlzLnBhcmFtcy50aHVtYnMsdD10aGlzLmNvbnN0cnVjdG9yO2Uuc3dpcGVyIGluc3RhbmNlb2YgdD8odGhpcy50aHVtYnMuc3dpcGVyPWUuc3dpcGVyLG4uZXh0ZW5kKHRoaXMudGh1bWJzLnN3aXBlci5vcmlnaW5hbFBhcmFtcyx7d2F0Y2hTbGlkZXNQcm9ncmVzczohMCxzbGlkZVRvQ2xpY2tlZFNsaWRlOiExfSksbi5leHRlbmQodGhpcy50aHVtYnMuc3dpcGVyLnBhcmFtcyx7d2F0Y2hTbGlkZXNQcm9ncmVzczohMCxzbGlkZVRvQ2xpY2tlZFNsaWRlOiExfSkpOm4uaXNPYmplY3QoZS5zd2lwZXIpJiYodGhpcy50aHVtYnMuc3dpcGVyPW5ldyB0KG4uZXh0ZW5kKHt9LGUuc3dpcGVyLHt3YXRjaFNsaWRlc1Zpc2liaWxpdHk6ITAsd2F0Y2hTbGlkZXNQcm9ncmVzczohMCxzbGlkZVRvQ2xpY2tlZFNsaWRlOiExfSkpLHRoaXMudGh1bWJzLnN3aXBlckNyZWF0ZWQ9ITApLHRoaXMudGh1bWJzLnN3aXBlci4kZWwuYWRkQ2xhc3ModGhpcy5wYXJhbXMudGh1bWJzLnRodW1ic0NvbnRhaW5lckNsYXNzKSx0aGlzLnRodW1icy5zd2lwZXIub24oXCJ0YXBcIix0aGlzLnRodW1icy5vblRodW1iQ2xpY2spfSxvblRodW1iQ2xpY2s6ZnVuY3Rpb24oKXt2YXIgZT10aGlzLnRodW1icy5zd2lwZXI7aWYoZSl7dmFyIHQ9ZS5jbGlja2VkSW5kZXgsaT1lLmNsaWNrZWRTbGlkZTtpZighKGkmJnMoaSkuaGFzQ2xhc3ModGhpcy5wYXJhbXMudGh1bWJzLnNsaWRlVGh1bWJBY3RpdmVDbGFzcyl8fG51bGw9PXQpKXt2YXIgYTtpZihhPWUucGFyYW1zLmxvb3A/cGFyc2VJbnQocyhlLmNsaWNrZWRTbGlkZSkuYXR0cihcImRhdGEtc3dpcGVyLXNsaWRlLWluZGV4XCIpLDEwKTp0LHRoaXMucGFyYW1zLmxvb3Ape3ZhciByPXRoaXMuYWN0aXZlSW5kZXg7dGhpcy5zbGlkZXMuZXEocikuaGFzQ2xhc3ModGhpcy5wYXJhbXMuc2xpZGVEdXBsaWNhdGVDbGFzcykmJih0aGlzLmxvb3BGaXgoKSx0aGlzLl9jbGllbnRMZWZ0PXRoaXMuJHdyYXBwZXJFbFswXS5jbGllbnRMZWZ0LHI9dGhpcy5hY3RpdmVJbmRleCk7dmFyIG49dGhpcy5zbGlkZXMuZXEocikucHJldkFsbCgnW2RhdGEtc3dpcGVyLXNsaWRlLWluZGV4PVwiJythKydcIl0nKS5lcSgwKS5pbmRleCgpLG89dGhpcy5zbGlkZXMuZXEocikubmV4dEFsbCgnW2RhdGEtc3dpcGVyLXNsaWRlLWluZGV4PVwiJythKydcIl0nKS5lcSgwKS5pbmRleCgpO2E9dm9pZCAwPT09bj9vOnZvaWQgMD09PW8/bjpvLXI8ci1uP286bn10aGlzLnNsaWRlVG8oYSl9fX0sdXBkYXRlOmZ1bmN0aW9uKGUpe3ZhciB0PXRoaXMudGh1bWJzLnN3aXBlcjtpZih0KXt2YXIgaT1cImF1dG9cIj09PXQucGFyYW1zLnNsaWRlc1BlclZpZXc/dC5zbGlkZXNQZXJWaWV3RHluYW1pYygpOnQucGFyYW1zLnNsaWRlc1BlclZpZXcscz10aGlzLnBhcmFtcy50aHVtYnMuYXV0b1Njcm9sbE9mZnNldCxhPXMmJiF0LnBhcmFtcy5sb29wO2lmKHRoaXMucmVhbEluZGV4IT09dC5yZWFsSW5kZXh8fGEpe3ZhciByLG4sbz10LmFjdGl2ZUluZGV4O2lmKHQucGFyYW1zLmxvb3Ape3Quc2xpZGVzLmVxKG8pLmhhc0NsYXNzKHQucGFyYW1zLnNsaWRlRHVwbGljYXRlQ2xhc3MpJiYodC5sb29wRml4KCksdC5fY2xpZW50TGVmdD10LiR3cmFwcGVyRWxbMF0uY2xpZW50TGVmdCxvPXQuYWN0aXZlSW5kZXgpO3ZhciBsPXQuc2xpZGVzLmVxKG8pLnByZXZBbGwoJ1tkYXRhLXN3aXBlci1zbGlkZS1pbmRleD1cIicrdGhpcy5yZWFsSW5kZXgrJ1wiXScpLmVxKDApLmluZGV4KCksZD10LnNsaWRlcy5lcShvKS5uZXh0QWxsKCdbZGF0YS1zd2lwZXItc2xpZGUtaW5kZXg9XCInK3RoaXMucmVhbEluZGV4KydcIl0nKS5lcSgwKS5pbmRleCgpO3I9dm9pZCAwPT09bD9kOnZvaWQgMD09PWQ/bDpkLW89PW8tbD9vOmQtbzxvLWw/ZDpsLG49dGhpcy5hY3RpdmVJbmRleD50aGlzLnByZXZpb3VzSW5kZXg/XCJuZXh0XCI6XCJwcmV2XCJ9ZWxzZSBuPShyPXRoaXMucmVhbEluZGV4KT50aGlzLnByZXZpb3VzSW5kZXg/XCJuZXh0XCI6XCJwcmV2XCI7YSYmKHIrPVwibmV4dFwiPT09bj9zOi0xKnMpLHQudmlzaWJsZVNsaWRlc0luZGV4ZXMmJnQudmlzaWJsZVNsaWRlc0luZGV4ZXMuaW5kZXhPZihyKTwwJiYodC5wYXJhbXMuY2VudGVyZWRTbGlkZXM/cj1yPm8/ci1NYXRoLmZsb29yKGkvMikrMTpyK01hdGguZmxvb3IoaS8yKS0xOnI+byYmKHI9ci1pKzEpLHQuc2xpZGVUbyhyLGU/MDp2b2lkIDApKX12YXIgaD0xLHA9dGhpcy5wYXJhbXMudGh1bWJzLnNsaWRlVGh1bWJBY3RpdmVDbGFzcztpZih0aGlzLnBhcmFtcy5zbGlkZXNQZXJWaWV3PjEmJiF0aGlzLnBhcmFtcy5jZW50ZXJlZFNsaWRlcyYmKGg9dGhpcy5wYXJhbXMuc2xpZGVzUGVyVmlldyksdGhpcy5wYXJhbXMudGh1bWJzLm11bHRpcGxlQWN0aXZlVGh1bWJzfHwoaD0xKSxoPU1hdGguZmxvb3IoaCksdC5zbGlkZXMucmVtb3ZlQ2xhc3MocCksdC5wYXJhbXMubG9vcHx8dC5wYXJhbXMudmlydHVhbCYmdC5wYXJhbXMudmlydHVhbC5lbmFibGVkKWZvcih2YXIgYz0wO2M8aDtjKz0xKXQuJHdyYXBwZXJFbC5jaGlsZHJlbignW2RhdGEtc3dpcGVyLXNsaWRlLWluZGV4PVwiJysodGhpcy5yZWFsSW5kZXgrYykrJ1wiXScpLmFkZENsYXNzKHApO2Vsc2UgZm9yKHZhciB1PTA7dTxoO3UrPTEpdC5zbGlkZXMuZXEodGhpcy5yZWFsSW5kZXgrdSkuYWRkQ2xhc3MocCl9fX0sd2U9W1IscSxLLFUsWixKLHRlLHtuYW1lOlwibW91c2V3aGVlbFwiLHBhcmFtczp7bW91c2V3aGVlbDp7ZW5hYmxlZDohMSxyZWxlYXNlT25FZGdlczohMSxpbnZlcnQ6ITEsZm9yY2VUb0F4aXM6ITEsc2Vuc2l0aXZpdHk6MSxldmVudHNUYXJnZWQ6XCJjb250YWluZXJcIn19LGNyZWF0ZTpmdW5jdGlvbigpe24uZXh0ZW5kKHRoaXMse21vdXNld2hlZWw6e2VuYWJsZWQ6ITEsZW5hYmxlOmllLmVuYWJsZS5iaW5kKHRoaXMpLGRpc2FibGU6aWUuZGlzYWJsZS5iaW5kKHRoaXMpLGhhbmRsZTppZS5oYW5kbGUuYmluZCh0aGlzKSxoYW5kbGVNb3VzZUVudGVyOmllLmhhbmRsZU1vdXNlRW50ZXIuYmluZCh0aGlzKSxoYW5kbGVNb3VzZUxlYXZlOmllLmhhbmRsZU1vdXNlTGVhdmUuYmluZCh0aGlzKSxhbmltYXRlU2xpZGVyOmllLmFuaW1hdGVTbGlkZXIuYmluZCh0aGlzKSxyZWxlYXNlU2Nyb2xsOmllLnJlbGVhc2VTY3JvbGwuYmluZCh0aGlzKSxsYXN0U2Nyb2xsVGltZTpuLm5vdygpLGxhc3RFdmVudEJlZm9yZVNuYXA6dm9pZCAwLHJlY2VudFdoZWVsRXZlbnRzOltdfX0pfSxvbjp7aW5pdDpmdW5jdGlvbigpeyF0aGlzLnBhcmFtcy5tb3VzZXdoZWVsLmVuYWJsZWQmJnRoaXMucGFyYW1zLmNzc01vZGUmJnRoaXMubW91c2V3aGVlbC5kaXNhYmxlKCksdGhpcy5wYXJhbXMubW91c2V3aGVlbC5lbmFibGVkJiZ0aGlzLm1vdXNld2hlZWwuZW5hYmxlKCl9LGRlc3Ryb3k6ZnVuY3Rpb24oKXt0aGlzLnBhcmFtcy5jc3NNb2RlJiZ0aGlzLm1vdXNld2hlZWwuZW5hYmxlKCksdGhpcy5tb3VzZXdoZWVsLmVuYWJsZWQmJnRoaXMubW91c2V3aGVlbC5kaXNhYmxlKCl9fX0se25hbWU6XCJuYXZpZ2F0aW9uXCIscGFyYW1zOntuYXZpZ2F0aW9uOntuZXh0RWw6bnVsbCxwcmV2RWw6bnVsbCxoaWRlT25DbGljazohMSxkaXNhYmxlZENsYXNzOlwic3dpcGVyLWJ1dHRvbi1kaXNhYmxlZFwiLGhpZGRlbkNsYXNzOlwic3dpcGVyLWJ1dHRvbi1oaWRkZW5cIixsb2NrQ2xhc3M6XCJzd2lwZXItYnV0dG9uLWxvY2tcIn19LGNyZWF0ZTpmdW5jdGlvbigpe24uZXh0ZW5kKHRoaXMse25hdmlnYXRpb246e2luaXQ6c2UuaW5pdC5iaW5kKHRoaXMpLHVwZGF0ZTpzZS51cGRhdGUuYmluZCh0aGlzKSxkZXN0cm95OnNlLmRlc3Ryb3kuYmluZCh0aGlzKSxvbk5leHRDbGljazpzZS5vbk5leHRDbGljay5iaW5kKHRoaXMpLG9uUHJldkNsaWNrOnNlLm9uUHJldkNsaWNrLmJpbmQodGhpcyl9fSl9LG9uOntpbml0OmZ1bmN0aW9uKCl7dGhpcy5uYXZpZ2F0aW9uLmluaXQoKSx0aGlzLm5hdmlnYXRpb24udXBkYXRlKCl9LHRvRWRnZTpmdW5jdGlvbigpe3RoaXMubmF2aWdhdGlvbi51cGRhdGUoKX0sZnJvbUVkZ2U6ZnVuY3Rpb24oKXt0aGlzLm5hdmlnYXRpb24udXBkYXRlKCl9LGRlc3Ryb3k6ZnVuY3Rpb24oKXt0aGlzLm5hdmlnYXRpb24uZGVzdHJveSgpfSxjbGljazpmdW5jdGlvbihlKXt2YXIgdCxpPXRoaXMubmF2aWdhdGlvbixhPWkuJG5leHRFbCxyPWkuJHByZXZFbDshdGhpcy5wYXJhbXMubmF2aWdhdGlvbi5oaWRlT25DbGlja3x8cyhlLnRhcmdldCkuaXMocil8fHMoZS50YXJnZXQpLmlzKGEpfHwoYT90PWEuaGFzQ2xhc3ModGhpcy5wYXJhbXMubmF2aWdhdGlvbi5oaWRkZW5DbGFzcyk6ciYmKHQ9ci5oYXNDbGFzcyh0aGlzLnBhcmFtcy5uYXZpZ2F0aW9uLmhpZGRlbkNsYXNzKSksITA9PT10P3RoaXMuZW1pdChcIm5hdmlnYXRpb25TaG93XCIsdGhpcyk6dGhpcy5lbWl0KFwibmF2aWdhdGlvbkhpZGVcIix0aGlzKSxhJiZhLnRvZ2dsZUNsYXNzKHRoaXMucGFyYW1zLm5hdmlnYXRpb24uaGlkZGVuQ2xhc3MpLHImJnIudG9nZ2xlQ2xhc3ModGhpcy5wYXJhbXMubmF2aWdhdGlvbi5oaWRkZW5DbGFzcykpfX19LHtuYW1lOlwicGFnaW5hdGlvblwiLHBhcmFtczp7cGFnaW5hdGlvbjp7ZWw6bnVsbCxidWxsZXRFbGVtZW50Olwic3BhblwiLGNsaWNrYWJsZTohMSxoaWRlT25DbGljazohMSxyZW5kZXJCdWxsZXQ6bnVsbCxyZW5kZXJQcm9ncmVzc2JhcjpudWxsLHJlbmRlckZyYWN0aW9uOm51bGwscmVuZGVyQ3VzdG9tOm51bGwscHJvZ3Jlc3NiYXJPcHBvc2l0ZTohMSx0eXBlOlwiYnVsbGV0c1wiLGR5bmFtaWNCdWxsZXRzOiExLGR5bmFtaWNNYWluQnVsbGV0czoxLGZvcm1hdEZyYWN0aW9uQ3VycmVudDpmdW5jdGlvbihlKXtyZXR1cm4gZX0sZm9ybWF0RnJhY3Rpb25Ub3RhbDpmdW5jdGlvbihlKXtyZXR1cm4gZX0sYnVsbGV0Q2xhc3M6XCJzd2lwZXItcGFnaW5hdGlvbi1idWxsZXRcIixidWxsZXRBY3RpdmVDbGFzczpcInN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldC1hY3RpdmVcIixtb2RpZmllckNsYXNzOlwic3dpcGVyLXBhZ2luYXRpb24tXCIsY3VycmVudENsYXNzOlwic3dpcGVyLXBhZ2luYXRpb24tY3VycmVudFwiLHRvdGFsQ2xhc3M6XCJzd2lwZXItcGFnaW5hdGlvbi10b3RhbFwiLGhpZGRlbkNsYXNzOlwic3dpcGVyLXBhZ2luYXRpb24taGlkZGVuXCIscHJvZ3Jlc3NiYXJGaWxsQ2xhc3M6XCJzd2lwZXItcGFnaW5hdGlvbi1wcm9ncmVzc2Jhci1maWxsXCIscHJvZ3Jlc3NiYXJPcHBvc2l0ZUNsYXNzOlwic3dpcGVyLXBhZ2luYXRpb24tcHJvZ3Jlc3NiYXItb3Bwb3NpdGVcIixjbGlja2FibGVDbGFzczpcInN3aXBlci1wYWdpbmF0aW9uLWNsaWNrYWJsZVwiLGxvY2tDbGFzczpcInN3aXBlci1wYWdpbmF0aW9uLWxvY2tcIn19LGNyZWF0ZTpmdW5jdGlvbigpe24uZXh0ZW5kKHRoaXMse3BhZ2luYXRpb246e2luaXQ6YWUuaW5pdC5iaW5kKHRoaXMpLHJlbmRlcjphZS5yZW5kZXIuYmluZCh0aGlzKSx1cGRhdGU6YWUudXBkYXRlLmJpbmQodGhpcyksZGVzdHJveTphZS5kZXN0cm95LmJpbmQodGhpcyksZHluYW1pY0J1bGxldEluZGV4OjB9fSl9LG9uOntpbml0OmZ1bmN0aW9uKCl7dGhpcy5wYWdpbmF0aW9uLmluaXQoKSx0aGlzLnBhZ2luYXRpb24ucmVuZGVyKCksdGhpcy5wYWdpbmF0aW9uLnVwZGF0ZSgpfSxhY3RpdmVJbmRleENoYW5nZTpmdW5jdGlvbigpeyh0aGlzLnBhcmFtcy5sb29wfHx2b2lkIDA9PT10aGlzLnNuYXBJbmRleCkmJnRoaXMucGFnaW5hdGlvbi51cGRhdGUoKX0sc25hcEluZGV4Q2hhbmdlOmZ1bmN0aW9uKCl7dGhpcy5wYXJhbXMubG9vcHx8dGhpcy5wYWdpbmF0aW9uLnVwZGF0ZSgpfSxzbGlkZXNMZW5ndGhDaGFuZ2U6ZnVuY3Rpb24oKXt0aGlzLnBhcmFtcy5sb29wJiYodGhpcy5wYWdpbmF0aW9uLnJlbmRlcigpLHRoaXMucGFnaW5hdGlvbi51cGRhdGUoKSl9LHNuYXBHcmlkTGVuZ3RoQ2hhbmdlOmZ1bmN0aW9uKCl7dGhpcy5wYXJhbXMubG9vcHx8KHRoaXMucGFnaW5hdGlvbi5yZW5kZXIoKSx0aGlzLnBhZ2luYXRpb24udXBkYXRlKCkpfSxkZXN0cm95OmZ1bmN0aW9uKCl7dGhpcy5wYWdpbmF0aW9uLmRlc3Ryb3koKX0sY2xpY2s6ZnVuY3Rpb24oZSl7dGhpcy5wYXJhbXMucGFnaW5hdGlvbi5lbCYmdGhpcy5wYXJhbXMucGFnaW5hdGlvbi5oaWRlT25DbGljayYmdGhpcy5wYWdpbmF0aW9uLiRlbC5sZW5ndGg+MCYmIXMoZS50YXJnZXQpLmhhc0NsYXNzKHRoaXMucGFyYW1zLnBhZ2luYXRpb24uYnVsbGV0Q2xhc3MpJiYoITA9PT10aGlzLnBhZ2luYXRpb24uJGVsLmhhc0NsYXNzKHRoaXMucGFyYW1zLnBhZ2luYXRpb24uaGlkZGVuQ2xhc3MpP3RoaXMuZW1pdChcInBhZ2luYXRpb25TaG93XCIsdGhpcyk6dGhpcy5lbWl0KFwicGFnaW5hdGlvbkhpZGVcIix0aGlzKSx0aGlzLnBhZ2luYXRpb24uJGVsLnRvZ2dsZUNsYXNzKHRoaXMucGFyYW1zLnBhZ2luYXRpb24uaGlkZGVuQ2xhc3MpKX19fSx7bmFtZTpcInNjcm9sbGJhclwiLHBhcmFtczp7c2Nyb2xsYmFyOntlbDpudWxsLGRyYWdTaXplOlwiYXV0b1wiLGhpZGU6ITEsZHJhZ2dhYmxlOiExLHNuYXBPblJlbGVhc2U6ITAsbG9ja0NsYXNzOlwic3dpcGVyLXNjcm9sbGJhci1sb2NrXCIsZHJhZ0NsYXNzOlwic3dpcGVyLXNjcm9sbGJhci1kcmFnXCJ9fSxjcmVhdGU6ZnVuY3Rpb24oKXtuLmV4dGVuZCh0aGlzLHtzY3JvbGxiYXI6e2luaXQ6cmUuaW5pdC5iaW5kKHRoaXMpLGRlc3Ryb3k6cmUuZGVzdHJveS5iaW5kKHRoaXMpLHVwZGF0ZVNpemU6cmUudXBkYXRlU2l6ZS5iaW5kKHRoaXMpLHNldFRyYW5zbGF0ZTpyZS5zZXRUcmFuc2xhdGUuYmluZCh0aGlzKSxzZXRUcmFuc2l0aW9uOnJlLnNldFRyYW5zaXRpb24uYmluZCh0aGlzKSxlbmFibGVEcmFnZ2FibGU6cmUuZW5hYmxlRHJhZ2dhYmxlLmJpbmQodGhpcyksZGlzYWJsZURyYWdnYWJsZTpyZS5kaXNhYmxlRHJhZ2dhYmxlLmJpbmQodGhpcyksc2V0RHJhZ1Bvc2l0aW9uOnJlLnNldERyYWdQb3NpdGlvbi5iaW5kKHRoaXMpLGdldFBvaW50ZXJQb3NpdGlvbjpyZS5nZXRQb2ludGVyUG9zaXRpb24uYmluZCh0aGlzKSxvbkRyYWdTdGFydDpyZS5vbkRyYWdTdGFydC5iaW5kKHRoaXMpLG9uRHJhZ01vdmU6cmUub25EcmFnTW92ZS5iaW5kKHRoaXMpLG9uRHJhZ0VuZDpyZS5vbkRyYWdFbmQuYmluZCh0aGlzKSxpc1RvdWNoZWQ6ITEsdGltZW91dDpudWxsLGRyYWdUaW1lb3V0Om51bGx9fSl9LG9uOntpbml0OmZ1bmN0aW9uKCl7dGhpcy5zY3JvbGxiYXIuaW5pdCgpLHRoaXMuc2Nyb2xsYmFyLnVwZGF0ZVNpemUoKSx0aGlzLnNjcm9sbGJhci5zZXRUcmFuc2xhdGUoKX0sdXBkYXRlOmZ1bmN0aW9uKCl7dGhpcy5zY3JvbGxiYXIudXBkYXRlU2l6ZSgpfSxyZXNpemU6ZnVuY3Rpb24oKXt0aGlzLnNjcm9sbGJhci51cGRhdGVTaXplKCl9LG9ic2VydmVyVXBkYXRlOmZ1bmN0aW9uKCl7dGhpcy5zY3JvbGxiYXIudXBkYXRlU2l6ZSgpfSxzZXRUcmFuc2xhdGU6ZnVuY3Rpb24oKXt0aGlzLnNjcm9sbGJhci5zZXRUcmFuc2xhdGUoKX0sc2V0VHJhbnNpdGlvbjpmdW5jdGlvbihlKXt0aGlzLnNjcm9sbGJhci5zZXRUcmFuc2l0aW9uKGUpfSxkZXN0cm95OmZ1bmN0aW9uKCl7dGhpcy5zY3JvbGxiYXIuZGVzdHJveSgpfX19LHtuYW1lOlwicGFyYWxsYXhcIixwYXJhbXM6e3BhcmFsbGF4OntlbmFibGVkOiExfX0sY3JlYXRlOmZ1bmN0aW9uKCl7bi5leHRlbmQodGhpcyx7cGFyYWxsYXg6e3NldFRyYW5zZm9ybTpuZS5zZXRUcmFuc2Zvcm0uYmluZCh0aGlzKSxzZXRUcmFuc2xhdGU6bmUuc2V0VHJhbnNsYXRlLmJpbmQodGhpcyksc2V0VHJhbnNpdGlvbjpuZS5zZXRUcmFuc2l0aW9uLmJpbmQodGhpcyl9fSl9LG9uOntiZWZvcmVJbml0OmZ1bmN0aW9uKCl7dGhpcy5wYXJhbXMucGFyYWxsYXguZW5hYmxlZCYmKHRoaXMucGFyYW1zLndhdGNoU2xpZGVzUHJvZ3Jlc3M9ITAsdGhpcy5vcmlnaW5hbFBhcmFtcy53YXRjaFNsaWRlc1Byb2dyZXNzPSEwKX0saW5pdDpmdW5jdGlvbigpe3RoaXMucGFyYW1zLnBhcmFsbGF4LmVuYWJsZWQmJnRoaXMucGFyYWxsYXguc2V0VHJhbnNsYXRlKCl9LHNldFRyYW5zbGF0ZTpmdW5jdGlvbigpe3RoaXMucGFyYW1zLnBhcmFsbGF4LmVuYWJsZWQmJnRoaXMucGFyYWxsYXguc2V0VHJhbnNsYXRlKCl9LHNldFRyYW5zaXRpb246ZnVuY3Rpb24oZSl7dGhpcy5wYXJhbXMucGFyYWxsYXguZW5hYmxlZCYmdGhpcy5wYXJhbGxheC5zZXRUcmFuc2l0aW9uKGUpfX19LHtuYW1lOlwiem9vbVwiLHBhcmFtczp7em9vbTp7ZW5hYmxlZDohMSxtYXhSYXRpbzozLG1pblJhdGlvOjEsdG9nZ2xlOiEwLGNvbnRhaW5lckNsYXNzOlwic3dpcGVyLXpvb20tY29udGFpbmVyXCIsem9vbWVkU2xpZGVDbGFzczpcInN3aXBlci1zbGlkZS16b29tZWRcIn19LGNyZWF0ZTpmdW5jdGlvbigpe3ZhciBlPXRoaXMsdD17ZW5hYmxlZDohMSxzY2FsZToxLGN1cnJlbnRTY2FsZToxLGlzU2NhbGluZzohMSxnZXN0dXJlOnskc2xpZGVFbDp2b2lkIDAsc2xpZGVXaWR0aDp2b2lkIDAsc2xpZGVIZWlnaHQ6dm9pZCAwLCRpbWFnZUVsOnZvaWQgMCwkaW1hZ2VXcmFwRWw6dm9pZCAwLG1heFJhdGlvOjN9LGltYWdlOntpc1RvdWNoZWQ6dm9pZCAwLGlzTW92ZWQ6dm9pZCAwLGN1cnJlbnRYOnZvaWQgMCxjdXJyZW50WTp2b2lkIDAsbWluWDp2b2lkIDAsbWluWTp2b2lkIDAsbWF4WDp2b2lkIDAsbWF4WTp2b2lkIDAsd2lkdGg6dm9pZCAwLGhlaWdodDp2b2lkIDAsc3RhcnRYOnZvaWQgMCxzdGFydFk6dm9pZCAwLHRvdWNoZXNTdGFydDp7fSx0b3VjaGVzQ3VycmVudDp7fX0sdmVsb2NpdHk6e3g6dm9pZCAwLHk6dm9pZCAwLHByZXZQb3NpdGlvblg6dm9pZCAwLHByZXZQb3NpdGlvblk6dm9pZCAwLHByZXZUaW1lOnZvaWQgMH19O1wib25HZXN0dXJlU3RhcnQgb25HZXN0dXJlQ2hhbmdlIG9uR2VzdHVyZUVuZCBvblRvdWNoU3RhcnQgb25Ub3VjaE1vdmUgb25Ub3VjaEVuZCBvblRyYW5zaXRpb25FbmQgdG9nZ2xlIGVuYWJsZSBkaXNhYmxlIGluIG91dFwiLnNwbGl0KFwiIFwiKS5mb3JFYWNoKChmdW5jdGlvbihpKXt0W2ldPW9lW2ldLmJpbmQoZSl9KSksbi5leHRlbmQoZSx7em9vbTp0fSk7dmFyIGk9MTtPYmplY3QuZGVmaW5lUHJvcGVydHkoZS56b29tLFwic2NhbGVcIix7Z2V0OmZ1bmN0aW9uKCl7cmV0dXJuIGl9LHNldDpmdW5jdGlvbih0KXtpZihpIT09dCl7dmFyIHM9ZS56b29tLmdlc3R1cmUuJGltYWdlRWw/ZS56b29tLmdlc3R1cmUuJGltYWdlRWxbMF06dm9pZCAwLGE9ZS56b29tLmdlc3R1cmUuJHNsaWRlRWw/ZS56b29tLmdlc3R1cmUuJHNsaWRlRWxbMF06dm9pZCAwO2UuZW1pdChcInpvb21DaGFuZ2VcIix0LHMsYSl9aT10fX0pfSxvbjp7aW5pdDpmdW5jdGlvbigpe3RoaXMucGFyYW1zLnpvb20uZW5hYmxlZCYmdGhpcy56b29tLmVuYWJsZSgpfSxkZXN0cm95OmZ1bmN0aW9uKCl7dGhpcy56b29tLmRpc2FibGUoKX0sdG91Y2hTdGFydDpmdW5jdGlvbihlKXt0aGlzLnpvb20uZW5hYmxlZCYmdGhpcy56b29tLm9uVG91Y2hTdGFydChlKX0sdG91Y2hFbmQ6ZnVuY3Rpb24oZSl7dGhpcy56b29tLmVuYWJsZWQmJnRoaXMuem9vbS5vblRvdWNoRW5kKGUpfSxkb3VibGVUYXA6ZnVuY3Rpb24oZSl7dGhpcy5wYXJhbXMuem9vbS5lbmFibGVkJiZ0aGlzLnpvb20uZW5hYmxlZCYmdGhpcy5wYXJhbXMuem9vbS50b2dnbGUmJnRoaXMuem9vbS50b2dnbGUoZSl9LHRyYW5zaXRpb25FbmQ6ZnVuY3Rpb24oKXt0aGlzLnpvb20uZW5hYmxlZCYmdGhpcy5wYXJhbXMuem9vbS5lbmFibGVkJiZ0aGlzLnpvb20ub25UcmFuc2l0aW9uRW5kKCl9LHNsaWRlQ2hhbmdlOmZ1bmN0aW9uKCl7dGhpcy56b29tLmVuYWJsZWQmJnRoaXMucGFyYW1zLnpvb20uZW5hYmxlZCYmdGhpcy5wYXJhbXMuY3NzTW9kZSYmdGhpcy56b29tLm9uVHJhbnNpdGlvbkVuZCgpfX19LHtuYW1lOlwibGF6eVwiLHBhcmFtczp7bGF6eTp7ZW5hYmxlZDohMSxsb2FkUHJldk5leHQ6ITEsbG9hZFByZXZOZXh0QW1vdW50OjEsbG9hZE9uVHJhbnNpdGlvblN0YXJ0OiExLGVsZW1lbnRDbGFzczpcInN3aXBlci1sYXp5XCIsbG9hZGluZ0NsYXNzOlwic3dpcGVyLWxhenktbG9hZGluZ1wiLGxvYWRlZENsYXNzOlwic3dpcGVyLWxhenktbG9hZGVkXCIscHJlbG9hZGVyQ2xhc3M6XCJzd2lwZXItbGF6eS1wcmVsb2FkZXJcIn19LGNyZWF0ZTpmdW5jdGlvbigpe24uZXh0ZW5kKHRoaXMse2xhenk6e2luaXRpYWxJbWFnZUxvYWRlZDohMSxsb2FkOmxlLmxvYWQuYmluZCh0aGlzKSxsb2FkSW5TbGlkZTpsZS5sb2FkSW5TbGlkZS5iaW5kKHRoaXMpfX0pfSxvbjp7YmVmb3JlSW5pdDpmdW5jdGlvbigpe3RoaXMucGFyYW1zLmxhenkuZW5hYmxlZCYmdGhpcy5wYXJhbXMucHJlbG9hZEltYWdlcyYmKHRoaXMucGFyYW1zLnByZWxvYWRJbWFnZXM9ITEpfSxpbml0OmZ1bmN0aW9uKCl7dGhpcy5wYXJhbXMubGF6eS5lbmFibGVkJiYhdGhpcy5wYXJhbXMubG9vcCYmMD09PXRoaXMucGFyYW1zLmluaXRpYWxTbGlkZSYmdGhpcy5sYXp5LmxvYWQoKX0sc2Nyb2xsOmZ1bmN0aW9uKCl7dGhpcy5wYXJhbXMuZnJlZU1vZGUmJiF0aGlzLnBhcmFtcy5mcmVlTW9kZVN0aWNreSYmdGhpcy5sYXp5LmxvYWQoKX0scmVzaXplOmZ1bmN0aW9uKCl7dGhpcy5wYXJhbXMubGF6eS5lbmFibGVkJiZ0aGlzLmxhenkubG9hZCgpfSxzY3JvbGxiYXJEcmFnTW92ZTpmdW5jdGlvbigpe3RoaXMucGFyYW1zLmxhenkuZW5hYmxlZCYmdGhpcy5sYXp5LmxvYWQoKX0sdHJhbnNpdGlvblN0YXJ0OmZ1bmN0aW9uKCl7dGhpcy5wYXJhbXMubGF6eS5lbmFibGVkJiYodGhpcy5wYXJhbXMubGF6eS5sb2FkT25UcmFuc2l0aW9uU3RhcnR8fCF0aGlzLnBhcmFtcy5sYXp5LmxvYWRPblRyYW5zaXRpb25TdGFydCYmIXRoaXMubGF6eS5pbml0aWFsSW1hZ2VMb2FkZWQpJiZ0aGlzLmxhenkubG9hZCgpfSx0cmFuc2l0aW9uRW5kOmZ1bmN0aW9uKCl7dGhpcy5wYXJhbXMubGF6eS5lbmFibGVkJiYhdGhpcy5wYXJhbXMubGF6eS5sb2FkT25UcmFuc2l0aW9uU3RhcnQmJnRoaXMubGF6eS5sb2FkKCl9LHNsaWRlQ2hhbmdlOmZ1bmN0aW9uKCl7dGhpcy5wYXJhbXMubGF6eS5lbmFibGVkJiZ0aGlzLnBhcmFtcy5jc3NNb2RlJiZ0aGlzLmxhenkubG9hZCgpfX19LHtuYW1lOlwiY29udHJvbGxlclwiLHBhcmFtczp7Y29udHJvbGxlcjp7Y29udHJvbDp2b2lkIDAsaW52ZXJzZTohMSxieTpcInNsaWRlXCJ9fSxjcmVhdGU6ZnVuY3Rpb24oKXtuLmV4dGVuZCh0aGlzLHtjb250cm9sbGVyOntjb250cm9sOnRoaXMucGFyYW1zLmNvbnRyb2xsZXIuY29udHJvbCxnZXRJbnRlcnBvbGF0ZUZ1bmN0aW9uOmRlLmdldEludGVycG9sYXRlRnVuY3Rpb24uYmluZCh0aGlzKSxzZXRUcmFuc2xhdGU6ZGUuc2V0VHJhbnNsYXRlLmJpbmQodGhpcyksc2V0VHJhbnNpdGlvbjpkZS5zZXRUcmFuc2l0aW9uLmJpbmQodGhpcyl9fSl9LG9uOnt1cGRhdGU6ZnVuY3Rpb24oKXt0aGlzLmNvbnRyb2xsZXIuY29udHJvbCYmdGhpcy5jb250cm9sbGVyLnNwbGluZSYmKHRoaXMuY29udHJvbGxlci5zcGxpbmU9dm9pZCAwLGRlbGV0ZSB0aGlzLmNvbnRyb2xsZXIuc3BsaW5lKX0scmVzaXplOmZ1bmN0aW9uKCl7dGhpcy5jb250cm9sbGVyLmNvbnRyb2wmJnRoaXMuY29udHJvbGxlci5zcGxpbmUmJih0aGlzLmNvbnRyb2xsZXIuc3BsaW5lPXZvaWQgMCxkZWxldGUgdGhpcy5jb250cm9sbGVyLnNwbGluZSl9LG9ic2VydmVyVXBkYXRlOmZ1bmN0aW9uKCl7dGhpcy5jb250cm9sbGVyLmNvbnRyb2wmJnRoaXMuY29udHJvbGxlci5zcGxpbmUmJih0aGlzLmNvbnRyb2xsZXIuc3BsaW5lPXZvaWQgMCxkZWxldGUgdGhpcy5jb250cm9sbGVyLnNwbGluZSl9LHNldFRyYW5zbGF0ZTpmdW5jdGlvbihlLHQpe3RoaXMuY29udHJvbGxlci5jb250cm9sJiZ0aGlzLmNvbnRyb2xsZXIuc2V0VHJhbnNsYXRlKGUsdCl9LHNldFRyYW5zaXRpb246ZnVuY3Rpb24oZSx0KXt0aGlzLmNvbnRyb2xsZXIuY29udHJvbCYmdGhpcy5jb250cm9sbGVyLnNldFRyYW5zaXRpb24oZSx0KX19fSx7bmFtZTpcImExMXlcIixwYXJhbXM6e2ExMXk6e2VuYWJsZWQ6ITAsbm90aWZpY2F0aW9uQ2xhc3M6XCJzd2lwZXItbm90aWZpY2F0aW9uXCIscHJldlNsaWRlTWVzc2FnZTpcIlByZXZpb3VzIHNsaWRlXCIsbmV4dFNsaWRlTWVzc2FnZTpcIk5leHQgc2xpZGVcIixmaXJzdFNsaWRlTWVzc2FnZTpcIlRoaXMgaXMgdGhlIGZpcnN0IHNsaWRlXCIsbGFzdFNsaWRlTWVzc2FnZTpcIlRoaXMgaXMgdGhlIGxhc3Qgc2xpZGVcIixwYWdpbmF0aW9uQnVsbGV0TWVzc2FnZTpcIkdvIHRvIHNsaWRlIHt7aW5kZXh9fVwifX0sY3JlYXRlOmZ1bmN0aW9uKCl7dmFyIGU9dGhpcztuLmV4dGVuZChlLHthMTF5OntsaXZlUmVnaW9uOnMoJzxzcGFuIGNsYXNzPVwiJytlLnBhcmFtcy5hMTF5Lm5vdGlmaWNhdGlvbkNsYXNzKydcIiBhcmlhLWxpdmU9XCJhc3NlcnRpdmVcIiBhcmlhLWF0b21pYz1cInRydWVcIj48L3NwYW4+Jyl9fSksT2JqZWN0LmtleXMoaGUpLmZvckVhY2goKGZ1bmN0aW9uKHQpe2UuYTExeVt0XT1oZVt0XS5iaW5kKGUpfSkpfSxvbjp7aW5pdDpmdW5jdGlvbigpe3RoaXMucGFyYW1zLmExMXkuZW5hYmxlZCYmKHRoaXMuYTExeS5pbml0KCksdGhpcy5hMTF5LnVwZGF0ZU5hdmlnYXRpb24oKSl9LHRvRWRnZTpmdW5jdGlvbigpe3RoaXMucGFyYW1zLmExMXkuZW5hYmxlZCYmdGhpcy5hMTF5LnVwZGF0ZU5hdmlnYXRpb24oKX0sZnJvbUVkZ2U6ZnVuY3Rpb24oKXt0aGlzLnBhcmFtcy5hMTF5LmVuYWJsZWQmJnRoaXMuYTExeS51cGRhdGVOYXZpZ2F0aW9uKCl9LHBhZ2luYXRpb25VcGRhdGU6ZnVuY3Rpb24oKXt0aGlzLnBhcmFtcy5hMTF5LmVuYWJsZWQmJnRoaXMuYTExeS51cGRhdGVQYWdpbmF0aW9uKCl9LGRlc3Ryb3k6ZnVuY3Rpb24oKXt0aGlzLnBhcmFtcy5hMTF5LmVuYWJsZWQmJnRoaXMuYTExeS5kZXN0cm95KCl9fX0se25hbWU6XCJoaXN0b3J5XCIscGFyYW1zOntoaXN0b3J5OntlbmFibGVkOiExLHJlcGxhY2VTdGF0ZTohMSxrZXk6XCJzbGlkZXNcIn19LGNyZWF0ZTpmdW5jdGlvbigpe24uZXh0ZW5kKHRoaXMse2hpc3Rvcnk6e2luaXQ6cGUuaW5pdC5iaW5kKHRoaXMpLHNldEhpc3Rvcnk6cGUuc2V0SGlzdG9yeS5iaW5kKHRoaXMpLHNldEhpc3RvcnlQb3BTdGF0ZTpwZS5zZXRIaXN0b3J5UG9wU3RhdGUuYmluZCh0aGlzKSxzY3JvbGxUb1NsaWRlOnBlLnNjcm9sbFRvU2xpZGUuYmluZCh0aGlzKSxkZXN0cm95OnBlLmRlc3Ryb3kuYmluZCh0aGlzKX19KX0sb246e2luaXQ6ZnVuY3Rpb24oKXt0aGlzLnBhcmFtcy5oaXN0b3J5LmVuYWJsZWQmJnRoaXMuaGlzdG9yeS5pbml0KCl9LGRlc3Ryb3k6ZnVuY3Rpb24oKXt0aGlzLnBhcmFtcy5oaXN0b3J5LmVuYWJsZWQmJnRoaXMuaGlzdG9yeS5kZXN0cm95KCl9LHRyYW5zaXRpb25FbmQ6ZnVuY3Rpb24oKXt0aGlzLmhpc3RvcnkuaW5pdGlhbGl6ZWQmJnRoaXMuaGlzdG9yeS5zZXRIaXN0b3J5KHRoaXMucGFyYW1zLmhpc3Rvcnkua2V5LHRoaXMuYWN0aXZlSW5kZXgpfSxzbGlkZUNoYW5nZTpmdW5jdGlvbigpe3RoaXMuaGlzdG9yeS5pbml0aWFsaXplZCYmdGhpcy5wYXJhbXMuY3NzTW9kZSYmdGhpcy5oaXN0b3J5LnNldEhpc3RvcnkodGhpcy5wYXJhbXMuaGlzdG9yeS5rZXksdGhpcy5hY3RpdmVJbmRleCl9fX0se25hbWU6XCJoYXNoLW5hdmlnYXRpb25cIixwYXJhbXM6e2hhc2hOYXZpZ2F0aW9uOntlbmFibGVkOiExLHJlcGxhY2VTdGF0ZTohMSx3YXRjaFN0YXRlOiExfX0sY3JlYXRlOmZ1bmN0aW9uKCl7bi5leHRlbmQodGhpcyx7aGFzaE5hdmlnYXRpb246e2luaXRpYWxpemVkOiExLGluaXQ6Y2UuaW5pdC5iaW5kKHRoaXMpLGRlc3Ryb3k6Y2UuZGVzdHJveS5iaW5kKHRoaXMpLHNldEhhc2g6Y2Uuc2V0SGFzaC5iaW5kKHRoaXMpLG9uSGFzaENhbmdlOmNlLm9uSGFzaENhbmdlLmJpbmQodGhpcyl9fSl9LG9uOntpbml0OmZ1bmN0aW9uKCl7dGhpcy5wYXJhbXMuaGFzaE5hdmlnYXRpb24uZW5hYmxlZCYmdGhpcy5oYXNoTmF2aWdhdGlvbi5pbml0KCl9LGRlc3Ryb3k6ZnVuY3Rpb24oKXt0aGlzLnBhcmFtcy5oYXNoTmF2aWdhdGlvbi5lbmFibGVkJiZ0aGlzLmhhc2hOYXZpZ2F0aW9uLmRlc3Ryb3koKX0sdHJhbnNpdGlvbkVuZDpmdW5jdGlvbigpe3RoaXMuaGFzaE5hdmlnYXRpb24uaW5pdGlhbGl6ZWQmJnRoaXMuaGFzaE5hdmlnYXRpb24uc2V0SGFzaCgpfSxzbGlkZUNoYW5nZTpmdW5jdGlvbigpe3RoaXMuaGFzaE5hdmlnYXRpb24uaW5pdGlhbGl6ZWQmJnRoaXMucGFyYW1zLmNzc01vZGUmJnRoaXMuaGFzaE5hdmlnYXRpb24uc2V0SGFzaCgpfX19LHtuYW1lOlwiYXV0b3BsYXlcIixwYXJhbXM6e2F1dG9wbGF5OntlbmFibGVkOiExLGRlbGF5OjNlMyx3YWl0Rm9yVHJhbnNpdGlvbjohMCxkaXNhYmxlT25JbnRlcmFjdGlvbjohMCxzdG9wT25MYXN0U2xpZGU6ITEscmV2ZXJzZURpcmVjdGlvbjohMX19LGNyZWF0ZTpmdW5jdGlvbigpe3ZhciBlPXRoaXM7bi5leHRlbmQoZSx7YXV0b3BsYXk6e3J1bm5pbmc6ITEscGF1c2VkOiExLHJ1bjp1ZS5ydW4uYmluZChlKSxzdGFydDp1ZS5zdGFydC5iaW5kKGUpLHN0b3A6dWUuc3RvcC5iaW5kKGUpLHBhdXNlOnVlLnBhdXNlLmJpbmQoZSksb25WaXNpYmlsaXR5Q2hhbmdlOmZ1bmN0aW9uKCl7XCJoaWRkZW5cIj09PWRvY3VtZW50LnZpc2liaWxpdHlTdGF0ZSYmZS5hdXRvcGxheS5ydW5uaW5nJiZlLmF1dG9wbGF5LnBhdXNlKCksXCJ2aXNpYmxlXCI9PT1kb2N1bWVudC52aXNpYmlsaXR5U3RhdGUmJmUuYXV0b3BsYXkucGF1c2VkJiYoZS5hdXRvcGxheS5ydW4oKSxlLmF1dG9wbGF5LnBhdXNlZD0hMSl9LG9uVHJhbnNpdGlvbkVuZDpmdW5jdGlvbih0KXtlJiYhZS5kZXN0cm95ZWQmJmUuJHdyYXBwZXJFbCYmdC50YXJnZXQ9PT10aGlzJiYoZS4kd3JhcHBlckVsWzBdLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ0cmFuc2l0aW9uZW5kXCIsZS5hdXRvcGxheS5vblRyYW5zaXRpb25FbmQpLGUuJHdyYXBwZXJFbFswXS5yZW1vdmVFdmVudExpc3RlbmVyKFwid2Via2l0VHJhbnNpdGlvbkVuZFwiLGUuYXV0b3BsYXkub25UcmFuc2l0aW9uRW5kKSxlLmF1dG9wbGF5LnBhdXNlZD0hMSxlLmF1dG9wbGF5LnJ1bm5pbmc/ZS5hdXRvcGxheS5ydW4oKTplLmF1dG9wbGF5LnN0b3AoKSl9fX0pfSxvbjp7aW5pdDpmdW5jdGlvbigpe3RoaXMucGFyYW1zLmF1dG9wbGF5LmVuYWJsZWQmJih0aGlzLmF1dG9wbGF5LnN0YXJ0KCksZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInZpc2liaWxpdHljaGFuZ2VcIix0aGlzLmF1dG9wbGF5Lm9uVmlzaWJpbGl0eUNoYW5nZSkpfSxiZWZvcmVUcmFuc2l0aW9uU3RhcnQ6ZnVuY3Rpb24oZSx0KXt0aGlzLmF1dG9wbGF5LnJ1bm5pbmcmJih0fHwhdGhpcy5wYXJhbXMuYXV0b3BsYXkuZGlzYWJsZU9uSW50ZXJhY3Rpb24/dGhpcy5hdXRvcGxheS5wYXVzZShlKTp0aGlzLmF1dG9wbGF5LnN0b3AoKSl9LHNsaWRlckZpcnN0TW92ZTpmdW5jdGlvbigpe3RoaXMuYXV0b3BsYXkucnVubmluZyYmKHRoaXMucGFyYW1zLmF1dG9wbGF5LmRpc2FibGVPbkludGVyYWN0aW9uP3RoaXMuYXV0b3BsYXkuc3RvcCgpOnRoaXMuYXV0b3BsYXkucGF1c2UoKSl9LHRvdWNoRW5kOmZ1bmN0aW9uKCl7dGhpcy5wYXJhbXMuY3NzTW9kZSYmdGhpcy5hdXRvcGxheS5wYXVzZWQmJiF0aGlzLnBhcmFtcy5hdXRvcGxheS5kaXNhYmxlT25JbnRlcmFjdGlvbiYmdGhpcy5hdXRvcGxheS5ydW4oKX0sZGVzdHJveTpmdW5jdGlvbigpe3RoaXMuYXV0b3BsYXkucnVubmluZyYmdGhpcy5hdXRvcGxheS5zdG9wKCksZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInZpc2liaWxpdHljaGFuZ2VcIix0aGlzLmF1dG9wbGF5Lm9uVmlzaWJpbGl0eUNoYW5nZSl9fX0se25hbWU6XCJlZmZlY3QtZmFkZVwiLHBhcmFtczp7ZmFkZUVmZmVjdDp7Y3Jvc3NGYWRlOiExfX0sY3JlYXRlOmZ1bmN0aW9uKCl7bi5leHRlbmQodGhpcyx7ZmFkZUVmZmVjdDp7c2V0VHJhbnNsYXRlOnZlLnNldFRyYW5zbGF0ZS5iaW5kKHRoaXMpLHNldFRyYW5zaXRpb246dmUuc2V0VHJhbnNpdGlvbi5iaW5kKHRoaXMpfX0pfSxvbjp7YmVmb3JlSW5pdDpmdW5jdGlvbigpe2lmKFwiZmFkZVwiPT09dGhpcy5wYXJhbXMuZWZmZWN0KXt0aGlzLmNsYXNzTmFtZXMucHVzaCh0aGlzLnBhcmFtcy5jb250YWluZXJNb2RpZmllckNsYXNzK1wiZmFkZVwiKTt2YXIgZT17c2xpZGVzUGVyVmlldzoxLHNsaWRlc1BlckNvbHVtbjoxLHNsaWRlc1Blckdyb3VwOjEsd2F0Y2hTbGlkZXNQcm9ncmVzczohMCxzcGFjZUJldHdlZW46MCx2aXJ0dWFsVHJhbnNsYXRlOiEwfTtuLmV4dGVuZCh0aGlzLnBhcmFtcyxlKSxuLmV4dGVuZCh0aGlzLm9yaWdpbmFsUGFyYW1zLGUpfX0sc2V0VHJhbnNsYXRlOmZ1bmN0aW9uKCl7XCJmYWRlXCI9PT10aGlzLnBhcmFtcy5lZmZlY3QmJnRoaXMuZmFkZUVmZmVjdC5zZXRUcmFuc2xhdGUoKX0sc2V0VHJhbnNpdGlvbjpmdW5jdGlvbihlKXtcImZhZGVcIj09PXRoaXMucGFyYW1zLmVmZmVjdCYmdGhpcy5mYWRlRWZmZWN0LnNldFRyYW5zaXRpb24oZSl9fX0se25hbWU6XCJlZmZlY3QtY3ViZVwiLHBhcmFtczp7Y3ViZUVmZmVjdDp7c2xpZGVTaGFkb3dzOiEwLHNoYWRvdzohMCxzaGFkb3dPZmZzZXQ6MjAsc2hhZG93U2NhbGU6Ljk0fX0sY3JlYXRlOmZ1bmN0aW9uKCl7bi5leHRlbmQodGhpcyx7Y3ViZUVmZmVjdDp7c2V0VHJhbnNsYXRlOmZlLnNldFRyYW5zbGF0ZS5iaW5kKHRoaXMpLHNldFRyYW5zaXRpb246ZmUuc2V0VHJhbnNpdGlvbi5iaW5kKHRoaXMpfX0pfSxvbjp7YmVmb3JlSW5pdDpmdW5jdGlvbigpe2lmKFwiY3ViZVwiPT09dGhpcy5wYXJhbXMuZWZmZWN0KXt0aGlzLmNsYXNzTmFtZXMucHVzaCh0aGlzLnBhcmFtcy5jb250YWluZXJNb2RpZmllckNsYXNzK1wiY3ViZVwiKSx0aGlzLmNsYXNzTmFtZXMucHVzaCh0aGlzLnBhcmFtcy5jb250YWluZXJNb2RpZmllckNsYXNzK1wiM2RcIik7dmFyIGU9e3NsaWRlc1BlclZpZXc6MSxzbGlkZXNQZXJDb2x1bW46MSxzbGlkZXNQZXJHcm91cDoxLHdhdGNoU2xpZGVzUHJvZ3Jlc3M6ITAscmVzaXN0YW5jZVJhdGlvOjAsc3BhY2VCZXR3ZWVuOjAsY2VudGVyZWRTbGlkZXM6ITEsdmlydHVhbFRyYW5zbGF0ZTohMH07bi5leHRlbmQodGhpcy5wYXJhbXMsZSksbi5leHRlbmQodGhpcy5vcmlnaW5hbFBhcmFtcyxlKX19LHNldFRyYW5zbGF0ZTpmdW5jdGlvbigpe1wiY3ViZVwiPT09dGhpcy5wYXJhbXMuZWZmZWN0JiZ0aGlzLmN1YmVFZmZlY3Quc2V0VHJhbnNsYXRlKCl9LHNldFRyYW5zaXRpb246ZnVuY3Rpb24oZSl7XCJjdWJlXCI9PT10aGlzLnBhcmFtcy5lZmZlY3QmJnRoaXMuY3ViZUVmZmVjdC5zZXRUcmFuc2l0aW9uKGUpfX19LHtuYW1lOlwiZWZmZWN0LWZsaXBcIixwYXJhbXM6e2ZsaXBFZmZlY3Q6e3NsaWRlU2hhZG93czohMCxsaW1pdFJvdGF0aW9uOiEwfX0sY3JlYXRlOmZ1bmN0aW9uKCl7bi5leHRlbmQodGhpcyx7ZmxpcEVmZmVjdDp7c2V0VHJhbnNsYXRlOm1lLnNldFRyYW5zbGF0ZS5iaW5kKHRoaXMpLHNldFRyYW5zaXRpb246bWUuc2V0VHJhbnNpdGlvbi5iaW5kKHRoaXMpfX0pfSxvbjp7YmVmb3JlSW5pdDpmdW5jdGlvbigpe2lmKFwiZmxpcFwiPT09dGhpcy5wYXJhbXMuZWZmZWN0KXt0aGlzLmNsYXNzTmFtZXMucHVzaCh0aGlzLnBhcmFtcy5jb250YWluZXJNb2RpZmllckNsYXNzK1wiZmxpcFwiKSx0aGlzLmNsYXNzTmFtZXMucHVzaCh0aGlzLnBhcmFtcy5jb250YWluZXJNb2RpZmllckNsYXNzK1wiM2RcIik7dmFyIGU9e3NsaWRlc1BlclZpZXc6MSxzbGlkZXNQZXJDb2x1bW46MSxzbGlkZXNQZXJHcm91cDoxLHdhdGNoU2xpZGVzUHJvZ3Jlc3M6ITAsc3BhY2VCZXR3ZWVuOjAsdmlydHVhbFRyYW5zbGF0ZTohMH07bi5leHRlbmQodGhpcy5wYXJhbXMsZSksbi5leHRlbmQodGhpcy5vcmlnaW5hbFBhcmFtcyxlKX19LHNldFRyYW5zbGF0ZTpmdW5jdGlvbigpe1wiZmxpcFwiPT09dGhpcy5wYXJhbXMuZWZmZWN0JiZ0aGlzLmZsaXBFZmZlY3Quc2V0VHJhbnNsYXRlKCl9LHNldFRyYW5zaXRpb246ZnVuY3Rpb24oZSl7XCJmbGlwXCI9PT10aGlzLnBhcmFtcy5lZmZlY3QmJnRoaXMuZmxpcEVmZmVjdC5zZXRUcmFuc2l0aW9uKGUpfX19LHtuYW1lOlwiZWZmZWN0LWNvdmVyZmxvd1wiLHBhcmFtczp7Y292ZXJmbG93RWZmZWN0Ontyb3RhdGU6NTAsc3RyZXRjaDowLGRlcHRoOjEwMCxtb2RpZmllcjoxLHNsaWRlU2hhZG93czohMH19LGNyZWF0ZTpmdW5jdGlvbigpe24uZXh0ZW5kKHRoaXMse2NvdmVyZmxvd0VmZmVjdDp7c2V0VHJhbnNsYXRlOmdlLnNldFRyYW5zbGF0ZS5iaW5kKHRoaXMpLHNldFRyYW5zaXRpb246Z2Uuc2V0VHJhbnNpdGlvbi5iaW5kKHRoaXMpfX0pfSxvbjp7YmVmb3JlSW5pdDpmdW5jdGlvbigpe1wiY292ZXJmbG93XCI9PT10aGlzLnBhcmFtcy5lZmZlY3QmJih0aGlzLmNsYXNzTmFtZXMucHVzaCh0aGlzLnBhcmFtcy5jb250YWluZXJNb2RpZmllckNsYXNzK1wiY292ZXJmbG93XCIpLHRoaXMuY2xhc3NOYW1lcy5wdXNoKHRoaXMucGFyYW1zLmNvbnRhaW5lck1vZGlmaWVyQ2xhc3MrXCIzZFwiKSx0aGlzLnBhcmFtcy53YXRjaFNsaWRlc1Byb2dyZXNzPSEwLHRoaXMub3JpZ2luYWxQYXJhbXMud2F0Y2hTbGlkZXNQcm9ncmVzcz0hMCl9LHNldFRyYW5zbGF0ZTpmdW5jdGlvbigpe1wiY292ZXJmbG93XCI9PT10aGlzLnBhcmFtcy5lZmZlY3QmJnRoaXMuY292ZXJmbG93RWZmZWN0LnNldFRyYW5zbGF0ZSgpfSxzZXRUcmFuc2l0aW9uOmZ1bmN0aW9uKGUpe1wiY292ZXJmbG93XCI9PT10aGlzLnBhcmFtcy5lZmZlY3QmJnRoaXMuY292ZXJmbG93RWZmZWN0LnNldFRyYW5zaXRpb24oZSl9fX0se25hbWU6XCJ0aHVtYnNcIixwYXJhbXM6e3RodW1iczp7c3dpcGVyOm51bGwsbXVsdGlwbGVBY3RpdmVUaHVtYnM6ITAsYXV0b1Njcm9sbE9mZnNldDowLHNsaWRlVGh1bWJBY3RpdmVDbGFzczpcInN3aXBlci1zbGlkZS10aHVtYi1hY3RpdmVcIix0aHVtYnNDb250YWluZXJDbGFzczpcInN3aXBlci1jb250YWluZXItdGh1bWJzXCJ9fSxjcmVhdGU6ZnVuY3Rpb24oKXtuLmV4dGVuZCh0aGlzLHt0aHVtYnM6e3N3aXBlcjpudWxsLGluaXQ6YmUuaW5pdC5iaW5kKHRoaXMpLHVwZGF0ZTpiZS51cGRhdGUuYmluZCh0aGlzKSxvblRodW1iQ2xpY2s6YmUub25UaHVtYkNsaWNrLmJpbmQodGhpcyl9fSl9LG9uOntiZWZvcmVJbml0OmZ1bmN0aW9uKCl7dmFyIGU9dGhpcy5wYXJhbXMudGh1bWJzO2UmJmUuc3dpcGVyJiYodGhpcy50aHVtYnMuaW5pdCgpLHRoaXMudGh1bWJzLnVwZGF0ZSghMCkpfSxzbGlkZUNoYW5nZTpmdW5jdGlvbigpe3RoaXMudGh1bWJzLnN3aXBlciYmdGhpcy50aHVtYnMudXBkYXRlKCl9LHVwZGF0ZTpmdW5jdGlvbigpe3RoaXMudGh1bWJzLnN3aXBlciYmdGhpcy50aHVtYnMudXBkYXRlKCl9LHJlc2l6ZTpmdW5jdGlvbigpe3RoaXMudGh1bWJzLnN3aXBlciYmdGhpcy50aHVtYnMudXBkYXRlKCl9LG9ic2VydmVyVXBkYXRlOmZ1bmN0aW9uKCl7dGhpcy50aHVtYnMuc3dpcGVyJiZ0aGlzLnRodW1icy51cGRhdGUoKX0sc2V0VHJhbnNpdGlvbjpmdW5jdGlvbihlKXt2YXIgdD10aGlzLnRodW1icy5zd2lwZXI7dCYmdC5zZXRUcmFuc2l0aW9uKGUpfSxiZWZvcmVEZXN0cm95OmZ1bmN0aW9uKCl7dmFyIGU9dGhpcy50aHVtYnMuc3dpcGVyO2UmJnRoaXMudGh1bWJzLnN3aXBlckNyZWF0ZWQmJmUmJmUuZGVzdHJveSgpfX19XTtyZXR1cm4gdm9pZCAwPT09Vy51c2UmJihXLnVzZT1XLkNsYXNzLnVzZSxXLmluc3RhbGxNb2R1bGU9Vy5DbGFzcy5pbnN0YWxsTW9kdWxlKSxXLnVzZSh3ZSksV30pKTtcbiJdLCJtYXBwaW5ncyI6Ijs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxDQUFDLFVBQVNBLENBQUMsRUFBQ0MsQ0FBQyxFQUFDO0VBQUMsUUFBUSxZQUFTQyxPQUFPLGlDQUFBQyxPQUFBLENBQVBELE9BQU8sTUFBRSxXQUFXLElBQUUsT0FBT0UsTUFBTSxHQUFDQSxNQUFNLENBQUNGLE9BQU8sR0FBQ0QsQ0FBQyxDQUFDLENBQUMsR0FBQyxVQUFVLElBQUUsT0FBT0ksTUFBTSxJQUFFQSxNQUFNLENBQUNDLEdBQUcsR0FBQ0QsTUFBTSxDQUFDSixDQUFDLENBQUMsR0FBQyxDQUFDRCxDQUFDLEdBQUNBLENBQUMsSUFBRU8sSUFBSSxFQUFFQyxNQUFNLEdBQUNQLENBQUMsQ0FBQyxDQUFDO0FBQUEsQ0FBQyxTQUFPLFlBQVU7RUFBQyxZQUFZOztFQUFDLElBQUlELENBQUMsR0FBQyxXQUFXLElBQUUsT0FBT1MsUUFBUSxHQUFDO01BQUNDLElBQUksRUFBQyxDQUFDLENBQUM7TUFBQ0MsZ0JBQWdCLEVBQUMsU0FBakJBLGdCQUFnQkEsQ0FBQSxFQUFXLENBQUMsQ0FBQztNQUFDQyxtQkFBbUIsRUFBQyxTQUFwQkEsbUJBQW1CQSxDQUFBLEVBQVcsQ0FBQyxDQUFDO01BQUNDLGFBQWEsRUFBQztRQUFDQyxJQUFJLEVBQUMsU0FBTEEsSUFBSUEsQ0FBQSxFQUFXLENBQUMsQ0FBQztRQUFDQyxRQUFRLEVBQUM7TUFBRSxDQUFDO01BQUNDLGFBQWEsRUFBQyxTQUFkQSxhQUFhQSxDQUFBLEVBQVc7UUFBQyxPQUFPLElBQUk7TUFBQSxDQUFDO01BQUNDLGdCQUFnQixFQUFDLFNBQWpC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LENBQUMsSUFBRSxDQUFDLEVBQUMsS0FBSSxJQUFJRSxDQUFDLEdBQUMsQ0FBQyxFQUFDQSxDQUFDLEdBQUMsSUFBSSxDQUFDRCxNQUFNLEVBQUNDLENBQUMsSUFBRSxDQUFDLEVBQUMsS0FBSyxDQUFDLEtBQUcsSUFBSSxDQUFDQSxDQUFDLENBQUMsSUFBRSxLQUFLLENBQUMsS0FBRyxJQUFJLENBQUNBLENBQUMsQ0FBQyxDQUFDb0IsU0FBUyxJQUFFLElBQUksQ0FBQ3BCLENBQUMsQ0FBQyxDQUFDb0IsU0FBUyxDQUFDRyxNQUFNLENBQUNqRSxDQUFDLENBQUN3QyxDQUFDLENBQUMsQ0FBQztNQUFDLE9BQU8sSUFBSTtJQUFBLENBQUM7SUFBQzBCLFFBQVEsRUFBQyxTQUFUQSxRQUFRQSxDQUFVbkUsQ0FBQyxFQUFDO01BQUMsT0FBTSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQytELFNBQVMsQ0FBQ0ssUUFBUSxDQUFDcEUsQ0FBQyxDQUFDO0lBQUEsQ0FBQztJQUFDcUUsV0FBVyxFQUFDLFNBQVpBLFdBQVdBLENBQVVyRSxDQUFDLEVBQUM7TUFBQyxLQUFJLElBQUlDLENBQUMsR0FBQ0QsQ0FBQyxDQUFDd0QsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFDZixDQUFDLEdBQUMsQ0FBQyxFQUFDQSxDQUFDLEdBQUN4QyxDQUFDLENBQUN5QyxNQUFNLEVBQUNELENBQUMsSUFBRSxDQUFDLEVBQUMsS0FBSSxJQUFJRSxDQUFDLEdBQUMsQ0FBQyxFQUFDQSxDQUFDLEdBQUMsSUFBSSxDQUFDRCxNQUFNLEVBQUNDLENBQUMsSUFBRSxDQUFDLEVBQUMsS0FBSyxDQUFDLEtBQUcsSUFBSSxDQUFDQSxDQUFDLENBQUMsSUFBRSxLQUFLLENBQUMsS0FBRyxJQUFJLENBQUNBLENBQUMsQ0FBQyxDQUFDb0IsU0FBUyxJQUFFLElBQUksQ0FBQ3BCLENBQUMsQ0FBQyxDQUFDb0IsU0FBUyxDQUFDTyxNQUFNLENBQUNyRSxDQUFDLENBQUN3QyxDQUFDLENB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QyxJQUFFLENBQUMsRUFBQyxJQUFHRCxDQUFDLENBQUNDLENBQUMsQ0FBQyxLQUFHQyxDQUFDLEVBQUMsT0FBTSxDQUFDLENBQUM7UUFBQyxPQUFNLENBQUMsQ0FBQztNQUFBO01BQUMsT0FBTSxDQUFDLENBQUM7SUFBQSxDQUFDO0lBQUN1RixLQUFLLEVBQUMsU0FBTkEsS0FBS0EsQ0FBQSxFQUFXO01BQUMsSUFBSXRJLENBQUM7UUFBQ0MsQ0FBQyxHQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7TUFBQyxJQUFHQSxDQUFDLEVBQUM7UUFBQyxLQUFJRCxDQUFDLEdBQUMsQ0FBQyxFQUFDLElBQUksTUFBSUMsQ0FBQyxHQUFDQSxDQUFDLENBQUNzSSxlQUFlLENBQUMsR0FBRSxDQUFDLEtBQUd0SSxDQUFDLENBQUN3RCxRQUFRLEtBQUd6RCxDQUFDLElBQUUsQ0FBQyxDQUFDO1FBQUMsT0FBT0EsQ0FBQztNQUFBO0lBQUMsQ0FBQztJQUFDd0ksRUFBRSxFQUFDLFNBQUhBLEVBQUVBLENBQVV4SSxDQUFDLEVBQUM7TUFBQyxJQUFHLEtBQUssQ0FBQyxLQUFHQSxDQUFDLEVBQUMsT0FBTyxJQUFJO01BQUMsSUFBSUMsQ0FBQztRQUFDMEMsQ0FBQyxHQUFDLElBQUksQ0FBQ0QsTUFBTTtNQUFDLE9BQU8sSUFBSUQsQ0FBQyxDQUFDekMsQ0FBQyxHQUFDMkMsQ0FBQyxHQUFDLENBQUMsR0FBQyxFQUFFLEdBQUMzQyxDQUFDLEdBQUMsQ0FBQyxHQUFDLENBQUNDLENBQUMsR0FBQzBDLENBQUMsR0FBQzNDLENBQUMsSUFBRSxDQUFDLEdBQUMsRUFBRSxHQUFDLENBQUMsSUFBSSxDQUFDQyxDQUFDLENBQUMsQ0FBQyxHQUFDLENBQUMsSUFBSSxDQUFDRCxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQUEsQ0FBQztJQUFDeUksTUFBTSxFQUFDLFNBQVBBLE1BQU1BLENBQUEsRUFBVztNQUFDLEtBQUksSUFBSXhJLENBQUMsRUFBQzBDLENBQUMsR0FBQyxFQUFFLEVBQUNDLENBQUMsR0FBQzRCLFNBQVMsQ0FBQzlCLE1B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