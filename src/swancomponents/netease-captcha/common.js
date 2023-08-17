import { request as _helpers$request } from "./adaptor.js";
(swan.neCaptchaJsonp = swan.neCaptchaJsonp || []).push([[0], [function (t, r, e) {
  "use strict";

  r.__esModule = !0;
  r.WIDTH_RANGE = [220, 1e4], r.CAPTCHA_TYPE = {
    JIGSAW: 2,
    POINT: 3,
    ICON_POINT: 7,
    INTELLISENSE: 5
  }, r.DEFAULT_TIMEOUT = 6e3, r.SAMPLE_NUM = 50, r.MAX_VERIFICATION = 5, r.DEVICE_TYPE = {
    MOUSE: 1,
    TOUCH: 2,
    MOUSE_TOUCH: 3
  }, r.VERIFY_STATUS = {
    ERROR: "error",
    SUCCESS: "success",
    MAX_ERROR: "maxerror",
    DOING: "verifying"
  }, r.RUNENV = {
    wx: 40,
    swan: 41,
    alipay: 42,
    tt: 43
  }, r.MAX_POINTS = 3;
}, function (t, r, e) {
  "use strict";

  (function (t) {
    var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
      return typeof t;
    } : function (t) {
      return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
    };
    !function (t) {
      var e = Object.prototype,
          n = e.hasOwnProperty,
          o = "function" == typeof Symbol ? Symbol : {},
          i = o.iterator || "@@iterator",
          a = o.asyncIterator || "@@asyncIterator",
          u = o.toStringTag || "@@toStringTag";

      function c(t, r, e, n) {
        var o = r && r.prototype instanceof f ? r : f,
            i = Object.create(o.prototype),
            a = new R(n || []);
        return i._invoke = function (t, r, e) {
          var n = "suspendedStart";
          return function (o, i) {
            if ("executing" === n) throw new Error("Generator is already running");

            if ("completed" === n) {
              if ("throw" === o) throw i;
              return S();
            }

            for (e.method = o, e.arg = i;;) {
              var a = e.delegate;

              if (a) {
                var u = w(a, e);

                if (u) {
                  if (u === l) continue;
                  return u;
                }
              }

              if ("next" === e.method) e.sent = e._sent = e.arg;else if ("throw" === e.method) {
                if ("suspendedStart" === n) throw n = "completed", e.arg;
                e.dispatchException(e.arg);
              } else "return" === e.method && e.abrupt("return", e.arg);
              n = "executing";
              var c = s(t, r, e);

              if ("normal" === c.type) {
                if (n = e.done ? "completed" : "suspendedYield", c.arg === l) continue;
                return {
                  value: c.arg,
                  done: e.done
                };
              }

              "throw" === c.type && (n = "completed", e.method = "throw", e.arg = c.arg);
            }
          };
        }(t, e, a), i;
      }

      function s(t, r, e) {
        try {
          return {
            type: "normal",
            arg: t.call(r, e)
          };
        } catch (t) {
          return {
            type: "throw",
            arg: t
          };
        }
      }

      t.wrap = c;
      var l = {};

      function f() {}

      function h() {}

      function p() {}

      var d = {};

      d[i] = function () {
        return this;
      };

      var v = Object.getPrototypeOf,
          y = v && v(v(O([])));
      y && y !== e && n.call(y, i) && (d = y);
      var g = p.prototype = f.prototype = Object.create(d);

      function m(t) {
        ["next", "throw", "return"].forEach(function (r) {
          t[r] = function (t) {
            return this._invoke(r, t);
          };
        });
      }

      function E(t) {
        var e;

        this._invoke = function (o, i) {
          function a() {
            return new Promise(function (e, a) {
              !function e(o, i, a, u) {
                var c = s(t[o], t, i);

                if ("throw" !== c.type) {
                  var l = c.arg,
                      f = l.value;
                  return f && "object" === (void 0 === f ? "undefined" : r(f)) && n.call(f, "__await") ? Promise.resolve(f.__await).then(function (t) {
                    e("next", t, a, u);
                  }, function (t) {
                    e("throw", t, a, u);
                  }) : Promise.resolve(f).then(function (t) {
                    l.value = t, a(l);
                  }, function (t) {
                    return e("throw", t, a, u);
                  });
                }

                u(c.arg);
              }(o, i, e, a);
            });
          }

          return e = e ? e.then(a, a) : a();
        };
      }

      function w(t, r) {
        var e = t.iterator[r.method];

        if (void 0 === e) {
          if (r.delegate = null, "throw" === r.method) {
            if (t.iterator.return && (r.method = "return", r.arg = void 0, w(t, r), "throw" === r.method)) return l;
            r.method = "throw", r.arg = new TypeError("The iterator does not provide a 'throw' method");
          }

          return l;
        }

        var n = s(e, t.iterator, r.arg);
        if ("throw" === n.type) return r.method = "throw", r.arg = n.arg, r.delegate = null, l;
        var o = n.arg;
        return o ? o.done ? (r[t.resultName] = o.value, r.next = t.nextLoc, "return" !== r.method && (r.method = "next", r.arg = void 0), r.delegate = null, l) : o : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, l);
      }

      function _(t) {
        var r = {
          tryLoc: t[0]
        };
        1 in t && (r.catchLoc = t[1]), 2 in t && (r.finallyLoc = t[2], r.afterLoc = t[3]), this.tryEntries.push(r);
      }

      function b(t) {
        var r = t.completion || {};
        r.type = "normal", delete r.arg, t.completion = r;
      }

      function R(t) {
        this.tryEntries = [{
          tryLoc: "root"
        }], t.forEach(_, this), this.reset(!0);
      }

      function O(t) {
        if (t) {
          var r = t[i];
          if (r) return r.call(t);
          if ("function" == typeof t.next) return t;

          if (!isNaN(t.length)) {
            var e = -1,
                o = function r() {
              for (; ++e < t.length;) if (n.call(t, e)) return r.value = t[e], r.done = !1, r;

              return r.value = void 0, r.done = !0, r;
            };

            return o.next = o;
          }
        }

        return {
          next: S
        };
      }

      function S() {
        return {
          value: void 0,
          done: !0
        };
      }

      h.prototype = g.constructor = p, p.constructor = h, p[u] = h.displayName = "GeneratorFunction", t.isGeneratorFunction = function (t) {
        var r = "function" == typeof t && t.constructor;
        return !!r && (r === h || "GeneratorFunction" === (r.displayName || r.name));
      }, t.mark = function (t) {
        return Object.setPrototypeOf ? Object.setPrototypeOf(t, p) : (t.__proto__ = p, u in t || (t[u] = "GeneratorFunction")), t.prototype = Object.create(g), t;
      }, t.awrap = function (t) {
        return {
          __await: t
        };
      }, m(E.prototype), E.prototype[a] = function () {
        return this;
      }, t.AsyncIterator = E, t.async = function (r, e, n, o) {
        var i = new E(c(r, e, n, o));
        return t.isGeneratorFunction(e) ? i : i.next().then(function (t) {
          return t.done ? t.value : i.next();
        });
      }, m(g), g[u] = "Generator", g[i] = function () {
        return this;
      }, g.toString = function () {
        return "[object Generator]";
      }, t.keys = function (t) {
        var r = [];

        for (var e in t) r.push(e);

        return r.reverse(), function e() {
          for (; r.length;) {
            var n = r.pop();
            if (n in t) return e.value = n, e.done = !1, e;
          }

          return e.done = !0, e;
        };
      }, t.values = O, R.prototype = {
        constructor: R,
        reset: function (t) {
          if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(b), !t) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = void 0);
        },
        stop: function () {
          this.done = !0;
          var t = this.tryEntries[0].completion;
          if ("throw" === t.type) throw t.arg;
          return this.rval;
        },
        dispatchException: function (t) {
          if (this.done) throw t;
          var r = this;

          function e(e, n) {
            return a.type = "throw", a.arg = t, r.next = e, n && (r.method = "next", r.arg = void 0), !!n;
          }

          for (var o = this.tryEntries.length - 1; o >= 0; --o) {
            var i = this.tryEntries[o],
                a = i.completion;
            if ("root" === i.tryLoc) return e("end");

            if (i.tryLoc <= this.prev) {
              var u = n.call(i, "catchLoc"),
                  c = n.call(i, "finallyLoc");

              if (u && c) {
                if (this.prev < i.catchLoc) return e(i.catchLoc, !0);
                if (this.prev < i.finallyLoc) return e(i.finallyLoc);
              } else if (u) {
                if (this.prev < i.catchLoc) return e(i.catchLoc, !0);
              } else {
                if (!c) throw new Error("try statement without catch or finally");
                if (this.prev < i.finallyLoc) return e(i.finallyLoc);
              }
            }
          }
        },
        abrupt: function (t, r) {
          for (var e = this.tryEntries.length - 1; e >= 0; --e) {
            var o = this.tryEntries[e];

            if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
              var i = o;
              break;
            }
          }

          i && ("break" === t || "continue" === t) && i.tryLoc <= r && r <= i.finallyLoc && (i = null);
          var a = i ? i.completion : {};
          return a.type = t, a.arg = r, i ? (this.method = "next", this.next = i.finallyLoc, l) : this.complete(a);
        },
        complete: function (t, r) {
          if ("throw" === t.type) throw t.arg;
          return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && r && (this.next = r), l;
        },
        finish: function (t) {
          for (var r = this.tryEntries.length - 1; r >= 0; --r) {
            var e = this.tryEntries[r];
            if (e.finallyLoc === t) return this.complete(e.completion, e.afterLoc), b(e), l;
          }
        },
        catch: function (t) {
          for (var r = this.tryEntries.length - 1; r >= 0; --r) {
            var e = this.tryEntries[r];

            if (e.tryLoc === t) {
              var n = e.completion;

              if ("throw" === n.type) {
                var o = n.arg;
                b(e);
              }

              return o;
            }
          }

          throw new Error("illegal catch attempt");
        },
        delegateYield: function (t, r, e) {
          return this.delegate = {
            iterator: O(t),
            resultName: r,
            nextLoc: e
          }, "next" === this.method && (this.arg = void 0), l;
        }
      };
    }("object" === r(t) ? t.exports : {});
  }).call(this, e(18)(t));
}, function (t, r, e) {
  "use strict";

  r.__esModule = !0;
  var n,
      o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
    return typeof t;
  } : function (t) {
    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  };

  function i(t, r) {
    if (!(t instanceof r)) throw new TypeError("Cannot call a class as a function");
  }

  function a(t, r) {
    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !r || "object" != typeof r && "function" != typeof r ? t : r;
  }

  var u = r.SCRIPT_ERROR = 100,
      c = r.CONFIG_ERROR = 1e4,
      s = r.BUSINESS_ERROR = 200,
      l = r.REQUEST_ERROR = 500,
      f = r.REQUEST_API_ERROR = 501,
      h = r.REQUEST_SCRIPT_ERROR = 502,
      p = r.REQUEST_IMG_ERROR = 503,
      d = r.REQUEST_TIMEOUT_ERROR = 504,
      v = r.UNKNOWN_ERROR = 1e3,
      y = ((n = {})[u] = "script error", n[c] = "config error", n[s] = "business error", n[l] = "request error", n[f] = "request api error", n[h] = "request script error", n[p] = "request img error", n[d] = "request timeout error", n[v] = "unknown error", n),
      g = function (t) {
    function r() {
      i(this, r);

      for (var e = arguments.length, n = Array(e), o = 0; o < e; o++) n[o] = arguments[o];

      var u = a(this, t.call.apply(t, [this].concat(n))),
          c = n[0],
          s = n[1],
          l = n[2];
      return u.name = "CaptchaError", u.code = c, u.message = c + "(" + y[c] + ")" + (s ? " - " + s : ""), Error.captureStackTrace ? Error.captureStackTrace(u, u.constructor) : u.stack = new Error().stack, u.data = l || {}, u;
    }

    return function (t, r) {
      if ("function" != typeof r && null !== r) throw new TypeError("Super expression must either be null or a function, not " + typeof r);
      t.prototype = Object.create(r && r.prototype, {
        constructor: {
          value: t,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), r && (Object.setPrototypeOf ? Object.setPrototypeOf(t, r) : t.__proto__ = r);
    }(r, t), r.prototype.toString = function () {
      var t = String(this.stack);
      return 0 === t.indexOf("CaptchaError:") ? t : this.name + ": " + this.message + (t ? "\n    " + t : "");
    }, r.prototype.set = function (t, r) {
      Number.isInteger(t) && "string" == typeof r ? y[t] = r : "object" === (void 0 === t ? "undefined" : o(t)) && t && Object.assign(y, t);
    }, r.prototype.get = function (t) {
      return y[t];
    }, r.prototype.remove = function (t) {
      String(t) in y && delete y[t];
    }, r;
  }(Error);

  r.default = g;
}, function (t, r, e) {
  "use strict";

  r.__esModule = !0;

  var n = r.assert = function (t, r) {
    if (!t) throw new Error("[NECaptcha] " + r);
  },
      o = r.sample = function (t, r) {
    if (!t || !Array.isArray(t)) return [];
    var e = t.length;
    if (e <= r) return t;
    var n = 0;
    return t.filter(function (t, o) {
      return o >= n * (e - 1) / (r - 1) && (n++, !0);
    });
  },
      i = r.uuid = function (t, r) {
    var e = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""),
        n = [],
        o = void 0;
    if (r = r || e.length, t) for (o = 0; o < t; o++) n[o] = e[0 | Math.random() * r];else {
      var i = void 0;

      for (n[8] = n[13] = n[18] = n[23] = "-", n[14] = "4", o = 0; o < 36; o++) n[o] || (i = 0 | 16 * Math.random(), n[o] = e[19 === o ? 3 & i | 8 : i]);
    }
    return n.join("");
  };

  r.default = {
    assert: n,
    sample: o,
    uuid: i
  };
}, function (t, r, e) {
  "use strict";

  r.__esModule = !0;
  var n,
      o = e(9),
      i = (n = o) && n.__esModule ? n : {
    default: n
  };
  r.default = Behavior({
    properties: {
      context: {
        type: Object,
        value: null
      }
    },
    data: {
      langPkg: null,
      customStyles: null
    },
    attached: function () {
      if (this.data.context) {
        "function" == typeof this.data.context.getStore ? this.store = this.data.context.getStore() : this.store = (0, i.default)(this.data.context.storeKey);
        var t = this.store.state,
            r = t.langPkg,
            e = t.customStyles,
            n = t.config;
        this.setData({
          langPkg: r,
          customStyles: e,
          theme: n.theme
        });
      }
    }
  });
}, function (t, r, e) {
  "use strict";

  var n = function t(r) {
    if (r < -128) return t(128 - (-128 - r));
    if (r >= -128 && r <= 127) return r;
    if (r > 127) return t(-129 + r - 127);
    throw new Error("1001");
  },
      o = function (t, r) {
    return n(t + r);
  },
      i = function (t, r) {
    if (null == t) return null;
    if (null == r) return t;

    for (var e = [], n = r.length, i = 0, a = t.length; i < a; i++) e[i] = o(t[i], r[i % n]);

    return e;
  },
      a = function (t, r) {
    return t = n(t), r = n(r), n(t ^ r);
  },
      u = function (t, r) {
    if (null == t || null == r || t.length != r.length) return t;

    for (var e = [], n = 0, o = t.length; n < o; n++) e[n] = a(t[n], r[n]);

    return e;
  },
      c = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"],
      s = function (t) {
    var r = [];
    return r.push(c[t >>> 4 & 15]), r.push(c[15 & t]), r.join("");
  },
      l = function (t) {
    if (null == t || 0 == t.length) return [];

    for (var r = new String(t), e = [], o = r.length / 2, i = 0, a = 0; a < o; a++) {
      var u = parseInt(r.charAt(i++), 16) << 4,
          c = parseInt(r.charAt(i++), 16);
      e[a] = n(u + c);
    }

    return e;
  },
      f = function (t) {
    if (null == t || null == t) return t;

    for (var r = encodeURIComponent(t), e = [], n = r.length, o = 0; o < n; o++) if ("%" == r.charAt(o)) {
      if (!(o + 2 < n)) throw new Error("1009");
      e.push(l(r.charAt(++o) + "" + r.charAt(++o))[0]);
    } else e.push(r.charCodeAt(o));

    return e;
  },
      h = function (t) {
    var r = [];
    return r[0] = t >>> 24 & 255, r[1] = t >>> 16 & 255, r[2] = t >>> 8 & 255, r[3] = 255 & t, r;
  },
      p = function (t) {
    return function (t) {
      var r = t.length;
      if (null == t || r < 0) return new String("");

      for (var e = [], n = 0; n < r; n++) e.push(s(t[n]));

      return e.join("");
    }(h(t));
  },
      d = function (t, r, e) {
    var n = [];
    if (null == t || 0 == t.length) return n;
    if (t.length < e) throw new Error("1003");

    for (var o = 0; o < e; o++) n[o] = t[r + o];

    return n;
  },
      v = function (t, r, e, n, o) {
    if (null == t || 0 == t.length) return e;
    if (null == e) throw new Error("1004");
    if (t.length < o) throw new Error("1003");

    for (var i = 0; i < o; i++) e[n + i] = t[r + i];

    return e;
  },
      y = function (t) {
    for (var r = [], e = 0; e < t; e++) r[e] = 0;

    return r;
  },
      g = function (t, r, e) {
    var n,
        o,
        i,
        a = ["i", "/", "x", "1", "X", "g", "U", "0", "z", "7", "k", "8", "N", "+", "l", "C", "p", "O", "n", "P", "r", "v", "6", "\\", "q", "u", "2", "G", "j", "9", "H", "R", "c", "w", "T", "Y", "Z", "4", "b", "f", "S", "J", "B", "h", "a", "W", "s", "t", "A", "e", "o", "M", "I", "E", "Q", "5", "m", "D", "d", "V", "F", "L", "K", "y"],
        u = [];
    if (1 == e) n = t[r], o = 0, i = 0, u.push(a[n >>> 2 & 63]), u.push(a[(n << 4 & 48) + (o >>> 4 & 15)]), u.push("3"), u.push("3");else if (2 == e) n = t[r], o = t[r + 1], i = 0, u.push(a[n >>> 2 & 63]), u.push(a[(n << 4 & 48) + (o >>> 4 & 15)]), u.push(a[(o << 2 & 60) + (i >>> 6 & 3)]), u.push("3");else {
      if (3 != e) throw new Error("1010");
      n = t[r], o = t[r + 1], i = t[r + 2], u.push(a[n >>> 2 & 63]), u.push(a[(n << 4 & 48) + (o >>> 4 & 15)]), u.push(a[(o << 2 & 60) + (i >>> 6 & 3)]), u.push(a[63 & i]);
    }
    return u.join("");
  },
      m = function (t) {
    if (null == t || null == t) return null;
    if (0 == t.length) return "";

    try {
      for (var r = [], e = 0; e < t.length;) {
        if (!(e + 3 <= t.length)) {
          r.push(g(t, e, t.length - e));
          break;
        }

        r.push(g(t, e, 3)), e += 3;
      }

      return r.join("");
    } catch (t) {
      throw new Error("1010");
    }
  },
      E = [0, 1996959894, 3993919788, 2567524794, 124634137, 1886057615, 3915621685, 2657392035, 249268274, 2044508324, 3772115230, 2547177864, 162941995, 2125561021, 3887607047, 2428444049, 498536548, 1789927666, 4089016648, 2227061214, 450548861, 1843258603, 4107580753, 2211677639, 325883990, 1684777152, 4251122042, 2321926636, 335633487, 1661365465, 4195302755, 2366115317, 997073096, 1281953886, 3579855332, 2724688242, 1006888145, 1258607687, 3524101629, 2768942443, 901097722, 1119000684, 3686517206, 2898065728, 853044451, 1172266101, 3705015759, 2882616665, 651767980, 1373503546, 3369554304, 3218104598, 565507253, 1454621731, 3485111705, 3099436303, 671266974, 1594198024, 3322730930, 2970347812, 795835527, 1483230225, 3244367275, 3060149565, 1994146192, 31158534, 2563907772, 4023717930, 1907459465, 112637215, 2680153253, 3904427059, 2013776290, 251722036, 2517215374, 3775830040, 2137656763, 141376813, 2439277719, 3865271297, 1802195444, 476864866, 2238001368, 4066508878, 1812370925, 453092731, 2181625025, 4111451223, 1706088902, 314042704, 2344532202, 4240017532, 1658658271, 366619977, 2362670323, 4224994405, 1303535960, 984961486, 2747007092, 3569037538, 1256170817, 1037604311, 2765210733, 3554079995, 1131014506, 879679996, 2909243462, 3663771856, 1141124467, 855842277, 2852801631, 3708648649, 1342533948, 654459306, 3188396048, 3373015174, 1466479909, 544179635, 3110523913, 3462522015, 1591671054, 702138776, 2966460450, 3352799412, 1504918807, 783551873, 3082640443, 3233442989, 3988292384, 2596254646, 62317068, 1957810842, 3939845945, 2647816111, 81470997, 1943803523, 3814918930, 2489596804, 225274430, 2053790376, 3826175755, 2466906013, 167816743, 2097651377, 4027552580, 2265490386, 503444072, 1762050814, 4150417245, 2154129355, 426522225, 1852507879, 4275313526, 2312317920, 282753626, 1742555852, 4189708143, 2394877945, 397917763, 1622183637, 3604390888, 2714866558, 953729732, 1340076626, 3518719985, 2797360999, 1068828381, 1219638859, 3624741850, 2936675148, 906185462, 1090812512, 3747672003, 2825379669, 829329135, 1181335161, 3412177804, 3160834842, 628085408, 1382605366, 3423369109, 3138078467, 570562233, 1426400815, 3317316542, 2998733608, 733239954, 1555261956, 3268935591, 3050360625, 752459403, 1541320221, 2607071920, 3965973030, 1969922972, 40735498, 2617837225, 3943577151, 1913087877, 83908371, 2512341634, 3803740692, 2075208622, 213261112, 2463272603, 3855990285, 2094854071, 198958881, 2262029012, 4057260610, 1759359992, 534414190, 2176718541, 4139329115, 1873836001, 414664567, 2282248934, 4279200368, 1711684554, 285281116, 2405801727, 4167216745, 1634467795, 376229701, 2685067896, 3608007406, 1308918612, 956543938, 2808555105, 3495958263, 1231636301, 1047427035, 2932959818, 3654703836, 1088359270, 936918e3, 2847714899, 3736837829, 1202900863, 817233897, 3183342108, 3401237130, 1404277552, 615818150, 3134207493, 3453421203, 1423857449, 601450431, 3009837614, 3294710456, 1567103746, 711928724, 3020668471, 3272380065, 1510334235, 755167117],
      w = function (t) {
    var r = 4294967295;
    if (null != t) for (var e = 0; e < t.length; e++) {
      var n = t[e];
      r = r >>> 8 ^ E[255 & (r ^ n)];
    }
    return p(4294967295 ^ r);
  },
      _ = function (t) {
    return w(null == t ? [] : f(t));
  },
      b = [120, 85, -95, -84, 122, 38, -16, -53, -11, 16, 55, 3, 125, -29, 32, -128, -94, 77, 15, 106, -88, -100, -34, 88, 78, 105, -104, -90, -70, 90, -119, -28, -19, -47, -111, 117, -105, -62, -35, 2, -14, -32, 114, 23, -21, 25, -7, -92, 96, -103, 126, 112, -113, -65, -109, -44, 47, 48, 86, 75, 62, -26, 72, -56, -27, 66, -42, 63, 14, 92, 59, -101, 19, -33, 12, -18, -126, -50, -67, 42, 7, -60, -81, -93, -86, 40, -69, -37, 98, -63, -59, 108, 46, -45, 93, 102, 65, -79, 73, -23, -46, 37, -114, -15, 44, -54, 99, -10, 60, -96, 76, 26, 61, -107, 18, -116, -55, -40, 57, -76, -82, 45, 0, -112, -77, 29, 43, -30, 109, -91, -83, 107, 101, 81, -52, -71, 84, 36, -41, 68, 39, -75, -122, -6, 11, -80, -17, -74, -73, 35, 49, -49, -127, 80, 103, 79, -25, 52, -43, 56, 41, -61, -24, 17, -118, 115, -38, 8, -78, 33, -85, -106, 58, -98, -108, 94, 116, -125, -51, -9, 71, 82, 87, -115, 9, 69, -123, 123, -117, 113, -22, -124, -87, 64, 13, 21, -89, -2, -99, -97, 1, -4, 34, 20, 83, 119, 30, -12, -110, -66, 118, -48, 6, -36, 104, -58, -102, 97, 5, -20, 31, -72, 70, -39, 67, -68, -57, 110, 89, 51, 10, -120, 28, 111, 127, 22, -3, 54, 53, -1, 100, 74, 50, 91, 27, -31, -5, -64, 124, -121, 24, -13, 95, 121, -8, 4],
      R = function (t) {
    var r = [];
    if (null == t || null == t || 0 == t.length) return y(4);
    if (t.length >= 4) return d(t, 0, 4);

    for (var e = 0; e < 4; e++) r[e] = t[e % t.length];

    return r;
  },
      O = function (t) {
    if (null == t) return null;

    for (var r, e = [], n = 0, o = t.length; n < o; n++) e[n] = (r = t[n], b[16 * (r >>> 4 & 15) + (15 & r)]);

    return e;
  },
      S = function (t, r) {
    if (null == t) return null;

    for (var e = n(r), o = [], i = t.length, u = 0; u < i; u++) o.push(a(t[u], e));

    return o;
  },
      x = function (t) {
    var r = function (t, r) {
      if (null == t) return null;

      for (var e = n(r), i = [], a = t.length, u = 0; u < a; u++) i.push(o(t[u], e));

      return i;
    }(S(t, 56), -40);

    return S(r, 103);
  },
      T = function (t, r) {
    null == t && (t = []);

    var e = function () {
      for (var t = [], r = 0; r < 4; r++) {
        var e = 256 * Math.random();
        e = Math.floor(e), t[r] = n(e);
      }

      return t;
    }();

    r = R(r), r = u(r, R(e));

    var o = r = R(r),
        a = function (t) {
      if (null == t || t.length % 4 != 0) throw new Error("1005");

      for (var r = [], e = 0, n = t.length / 4, o = 0; o < n; o++) {
        r[o] = [];

        for (var i = 0; i < 4; i++) r[o][i] = t[e++];
      }

      return r;
    }(function (t) {
      if (null == t || null == t || 0 == t.length) return y(4);
      var r = t.length,
          e = 0;
      e = r % 4 <= 0 ? 4 - r % 4 - 4 : 8 - r % 4 - 4;
      var n = [];
      v(t, 0, n, 0, r);

      for (var o = 0; o < e; o++) n[r + o] = 0;

      var i = h(r);
      return v(i, 0, n, r + e, 4), n;
    }(t)),
        c = [];

    v(e, 0, c, 0, 4);

    for (var s = a.length, l = 0; l < s; l++) {
      var f = x(a[l]),
          p = u(f, r),
          d = i(p, o);
      p = u(d, o);
      var g = O(p);
      g = O(g), v(g, 0, c, 4 * l + 4, 4), o = g;
    }

    return c;
  };

  r.eypt = function (t) {
    var r = "14731382d816714fC59E47De5dA0C871D3F";
    null != t && null != t || (t = "");

    var e = t + _(t),
        n = f(e),
        o = f(r),
        i = T(n, o);

    return m(i);
  }, r.xor_encode = function (t, r) {
    return r = function (t, r) {
      return r.split("").map(function (r, e) {
        return r.charCodeAt(0) ^ function (t, r) {
          return t.charCodeAt(Math.floor(r % t.length));
        }(t, e);
      });
    }(t, r), m(r);
  }, r.toByte = n, r.str2Bytes = f, r.arrayCopy = d, r.arrayCopy2 = v, r.createEmptyArray = y, r.isEmptyString = function (t) {
    return null == t || null == t || "" == t;
  }, r.base64Encode = function (t) {
    return m(f(t));
  }, r.getStringCRC32 = _, r.toByte = n;
}, function (t, r, e) {
  "use strict";

  r.__esModule = !0;

  var n = Object.assign || function (t) {
    for (var r = 1; r < arguments.length; r++) {
      var e = arguments[r];

      for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
    }

    return t;
  };

  r.default = function (t, r) {
    return function (e, i) {
      var u = i.type,
          s = i.url,
          l = i.index,
          f = new a.default(c[u], e.message, n({}, r, {
        url: s
      }));
      (0, o.default)(f, t, {
        times: l + 1
      });
    };
  };

  var o = u(e(11)),
      i = e(2),
      a = u(i);

  function u(t) {
    return t && t.__esModule ? t : {
      default: t
    };
  }

  var c = {
    image: i.REQUEST_IMG_ERROR,
    api: i.REQUEST_API_ERROR
  };
}, function (t, r, e) {
  "use strict";

  r.__esModule = !0;
  var n = c(e(16)),
      o = e(3),
      i = e(0),
      a = c(e(17)),
      u = c(e(1));

  function c(t) {
    return t && t.__esModule ? t : {
      default: t
    };
  }

  function s(t, r) {
    var e = Array.isArray(t) ? t : [t],
        n = (Array.isArray(r) ? r : [r]).reduce(function (t, r) {
      var n = e.map(function (t) {
        return r && t.startsWith("/") ? "" + r + t : t;
      });
      return t.concat(n);
    }, []);
    return n.length < 2 ? n.concat(n) : n;
  }

  var l = function () {
    function t(r) {
      if (function (t, r) {
        if (!(t instanceof r)) throw new TypeError("Cannot call a class as a function");
      }(this, t), (0, o.assert)(void 0 === r.baseUrl || Array.isArray(r.baseUrl) || "string" == typeof r.baseUrl, 'api: "baseUrl" must be string or array'), r.baseUrl) this.baseUrl = r.baseUrl;else {
        var e = r.protocol,
            n = r.host,
            u = r.port,
            c = r.path,
            s = [];
        s = Array.isArray(n) ? n.map(function (t) {
          return (0, a.default)(e, t, u, c);
        }) : [(0, a.default)(e, n, u, c)], this.baseUrl = s;
      }
      this.timeout = r.timeout || i.DEFAULT_TIMEOUT, this.request = this.request.bind(this);
    }

    var r, e;
    return t.prototype.request = (r = u.default.mark(function t(r) {
      var e, o, i, a, c, l;
      return u.default.wrap(function (t) {
        for (;;) switch (t.prev = t.next) {
          case 0:
            e = r.disableRetry, o = r.onTryError, i = s(r.url, this.baseUrl), e && (i = i.slice(-1)), a = 0, c = i.length;

          case 4:
            if (!(a < c)) {
              t.next = 21;
              break;
            }

            return l = i[a], t.prev = 6, t.next = 9, (0, n.default)(Object.assign({
              timeout: this.timeout
            }, r, {
              url: l
            }));

          case 9:
            return t.abrupt("return", t.sent);

          case 12:
            if (t.prev = 12, t.t0 = t.catch(6), "function" == typeof o && (t.t0.data && (t.t0.data.retry = a > 0), o(t.t0, {
              type: "api",
              urls: i,
              url: l,
              index: a
            })), a !== c - 1) {
              t.next = 18;
              break;
            }

            throw t.t0.data = Object.assign({}, t.t0.data, {
              url: String(i),
              retry: a > 0
            }), t.t0;

          case 18:
            a++, t.next = 4;
            break;

          case 21:
          case "end":
            return t.stop();
        }
      }, t, this, [[6, 12]]);
    }), e = function () {
      var t = r.apply(this, arguments);
      return new Promise(function (r, e) {
        return function n(o, i) {
          try {
            var a = t[o](i),
                u = a.value;
          } catch (t) {
            return void e(t);
          }

          if (!a.done) return Promise.resolve(u).then(function (t) {
            n("next", t);
          }, function (t) {
            n("throw", t);
          });
          r(u);
        }("next");
      });
    }, function (t) {
      return e.apply(this, arguments);
    }), t;
  }();

  r.default = l;
},, function (t, r, e) {
  "use strict";

  r.__esModule = !0;
  var n,
      o = e(10),
      i = (n = o) && n.__esModule ? n : {
    default: n
  };
  var a = [];

  r.default = function (t, r) {
    if (a.hasOwnProperty(t)) return a[t];
    var e = new i.default(r);
    return a[t] = e, e;
  };
}, function (t, r, e) {
  "use strict";

  r.__esModule = !0;

  var n = function () {
    function t(r) {
      !function (t, r) {
        if (!(t instanceof r)) throw new TypeError("Cannot call a class as a function");
      }(this, t), this.state = r.state, this._committing = !1, this._subscribers = [], this._mutations = [], this.commit = this.commit.bind(this), this.dispatch = this.dispatch.bind(this), this.subscribe = this.subscribe.bind(this), this.registerMutations(r.mutations), this.registerActions(r.actions);
    }

    return t.prototype.registerMutations = function (t) {
      this._mutations = Object.assign(this._mutations || {}, t);
    }, t.prototype.registerActions = function (t) {
      this._actions = Object.assign(this._actions || {}, t);
    }, t.prototype.commit = function (t, r) {
      var e = this,
          n = {
        type: t,
        payload: r
      },
          o = this._mutations[t];

      if (o) {
        var i = this._committing;
        this._committing = !0, o(this.state, r), this._committing = i, this._subscribers.forEach(function (t) {
          return t(n, e.state);
        });
      } else console.error("[Store] unknown mutation type: " + t);
    }, t.prototype.dispatch = function (t, r, e) {
      var n = this._actions[t];
      if (!n) return console.error("[Store] unknown action type: " + t), null;
      var o = {
        state: this.state,
        commit: this.commit,
        dispatch: this.dispatch
      };
      return Promise.resolve(n(o, r, e));
    }, t.prototype.subscribe = function (t) {
      var r = this._subscribers;
      return r.indexOf(t) < 0 && r.push(t), function () {
        var e = r.indexOf(t);
        e > -1 && r.splice(e, 1);
      };
    }, t.prototype.replaceState = function (t) {
      this.state = t;
    }, t;
  }();

  r.default = n;
}, function (t, r, e) {
  "use strict";

  var n;
  r.__esModule = !0;
  var o = c(e(7)),
      i = c(e(1)),
      a = e(2),
      u = e(0);

  function c(t) {
    return t && t.__esModule ? t : {
      default: t
    };
  }

  var s,
      l,
      f = ((n = {})[a.REQUEST_API_ERROR] = "api", n[a.REQUEST_IMG_ERROR] = "image", n[a.REQUEST_SCRIPT_ERROR] = "script", n);
  r.default = (s = i.default.mark(function t(r, e, n) {
    var a, c, s, l, h, p, d, v, y, g, m;
    return i.default.wrap(function (t) {
      for (;;) switch (t.prev = t.next) {
        case 0:
          return a = e.protocol, c = e.apiServer, s = e.__serverConfig__, l = e.captchaId, h = e.timeout, p = void 0 === h ? u.DEFAULT_TIMEOUT : h, d = new o.default({
            protocol: a,
            host: c || s && s.apiServer || ["c.dun.163yun.com", "c.dun.163.com"],
            timeout: p
          }), v = r.data, y = Object.assign({
            id: l,
            token: v.token || "",
            type: f[r.code],
            target: v.url || v.resource || "",
            message: r.toString()
          }, n), g = "/api/v2/mp/collect", t.prev = 5, t.next = 8, d.request({
            url: g,
            data: y,
            method: "POST",
            disableRetry: !0
          });

        case 8:
          return t.abrupt("return", t.sent);

        case 11:
          return t.prev = 11, t.t0 = t.catch(5), console && console.warn("Failed to collect error."), (m = new Error(t.t0, t.t0.message || t.t0.originalRes && (t.t0.originalRes.msg || t.t0.originalRes.errMsg) || "unkown error")).data = {
            url: g
          }, t.abrupt("return", m);

        case 17:
        case "end":
          return t.stop();
      }
    }, t, this, [[5, 11]]);
  }), l = function () {
    var t = s.apply(this, arguments);
    return new Promise(function (r, e) {
      return function n(o, i) {
        try {
          var a = t[o](i),
              u = a.value;
        } catch (t) {
          return void e(t);
        }

        if (!a.done) return Promise.resolve(u).then(function (t) {
          n("next", t);
        }, function (t) {
          n("throw", t);
        });
        r(u);
      }("next");
    });
  }, function (t, r, e) {
    return l.apply(this, arguments);
  });
}, function (t, r, e) {
  "use strict";

  r.__esModule = !0, r.default = function () {
    var t = (0, n.uuid)(32);
    return (0, o.eypt)(t);
  };
  var n = e(3),
      o = e(5);
}, function (t, r, e) {
  "use strict";

  t.exports = function (t) {
    var r = {
      "\\": "-",
      "/": "_",
      "+": "."
    };
    return t.replace(/[\\/+]/g, function (t) {
      return r[t];
    });
  };
},,, function (t, r, e) {
  "use strict";

  r.__esModule = !0;

  var n = Object.assign || function (t) {
    for (var r = 1; r < arguments.length; r++) {
      var e = arguments[r];

      for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
    }

    return t;
  },
      o = e(0),
      i = e(2),
      a = {
    timeout: o.DEFAULT_TIMEOUT,
    dataType: "json",
    method: "get",
    header: {
      "content-type": "application/x-www-form-urlencoded",
      "Accept-Language": "en",
      Accept: "*/*"
    }
  };

  r.default = function (t) {
    var r = a.header,
        e = Object.assign({}, a, t);
    return Object.assign(e.header, r), new Promise(function (t, r) {
      _helpers$request(n({}, e, {
        success: function (n) {
          var o = n.data,
              i = o.error,
              a = o.msg;

          if (200 !== n.statusCode || void 0 !== i && 0 !== i && 200 !== i) {
            var u = new Error("Failed to request (" + e.url + ")." + (a || n.data));
            u.data = {
              url: e.url
            }, u.code = i, u.originalRes = n, r(u);
          } else t(n.data, n);
        },
        fail: function (t) {
          var n = new Error("Failed too request (" + e.url + ")." + t.errMsg);
          n.data = {
            url: e.url
          }, n.code = i.UNKNOWN_ERROR, n.originalRes = t, r(n);
        }
      }));
    });
  };
}, function (t, r, e) {
  "use strict";

  r.__esModule = !0, r.default = function () {
    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
        r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
        e = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "",
        n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "",
        o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "",
        i = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : "";
    t && (t = t.replace(/:?\/{0,2}$/, "://"));

    if (r) {
      var a = r.match(/^([-0-9a-zA-Z.:]*)(\/.*)?/);
      r = a[1], n = (a[2] || "") + "/" + n;
    }

    if (!r && (t = ""), e) {
      if (!r) throw Error('"host" is required, if "port" was provided');
      e = ":" + e;
    }

    n && (n = n.replace(/^\/*|\/+/g, ""));
    o && (o = o.replace(/^\??/, "?"));
    i && (i = i.replace(/^#?/, "#"));
    return t + r + e + n + o + i;
  };
}, function (t, r) {
  t.exports = function (t) {
    return t.webpackPolyfill || (t.deprecate = function () {}, t.paths = [], t.children || (t.children = []), Object.defineProperty(t, "loaded", {
      enumerable: !0,
      get: function () {
        return t.l;
      }
    }), Object.defineProperty(t, "id", {
      enumerable: !0,
      get: function () {
        return t.i;
      }
    }), t.webpackPolyfill = 1), t;
  };
}]]);