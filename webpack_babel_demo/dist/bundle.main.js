!function (t) {
  var n = {};

  function e(r) {
    if (n[r]) return n[r].exports;
    var o = n[r] = {i: r, l: !1, exports: {}};
    return t[r].call(o.exports, o, o.exports, e), o.l = !0, o.exports
  }

  e.m = t, e.c = n, e.d = function (t, n, r) {
    e.o(t, n) || Object.defineProperty(t, n, {enumerable: !0, get: r})
  }, e.r = function (t) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(t, "__esModule", {value: !0})
  }, e.t = function (t, n) {
    if (1 & n && (t = e(t)), 8 & n) return t;
    if (4 & n && "object" == typeof t && t && t.__esModule) return t;
    var r = Object.create(null);
    if (e.r(r), Object.defineProperty(r, "default", {
      enumerable: !0,
      value: t
    }), 2 & n && "string" != typeof t) for (var o in t) e.d(r, o, function (n) {
      return t[n]
    }.bind(null, o));
    return r
  }, e.n = function (t) {
    var n = t && t.__esModule ? function () {
      return t.default
    } : function () {
      return t
    };
    return e.d(n, "a", n), n
  }, e.o = function (t, n) {
    return Object.prototype.hasOwnProperty.call(t, n)
  }, e.p = "", e(e.s = 47)
}([function (t, n) {
  var e = t.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
  "number" == typeof __g && (__g = e)
}, function (t, n, e) {
  var r = e(13)("wks"), o = e(14), i = e(0).Symbol, c = "function" == typeof i;
  (t.exports = function (t) {
    return r[t] || (r[t] = c && i[t] || (c ? i : o)("Symbol." + t))
  }).store = r
}, function (t, n) {
  var e = t.exports = {version: "2.6.11"};
  "number" == typeof __e && (__e = e)
}, function (t, n, e) {
  var r = e(4);
  t.exports = function (t) {
    if (!r(t)) throw TypeError(t + " is not an object!");
    return t
  }
}, function (t, n) {
  t.exports = function (t) {
    return "object" == typeof t ? null !== t : "function" == typeof t
  }
}, function (t, n, e) {
  var r = e(6);
  t.exports = function (t, n, e) {
    if (r(t), void 0 === n) return t;
    switch (e) {
      case 1:
        return function (e) {
          return t.call(n, e)
        };
      case 2:
        return function (e, r) {
          return t.call(n, e, r)
        };
      case 3:
        return function (e, r, o) {
          return t.call(n, e, r, o)
        }
    }
    return function () {
      return t.apply(n, arguments)
    }
  }
}, function (t, n) {
  t.exports = function (t) {
    if ("function" != typeof t) throw TypeError(t + " is not a function!");
    return t
  }
}, function (t, n, e) {
  t.exports = !e(16)((function () {
    return 7 != Object.defineProperty({}, "a", {
      get: function () {
        return 7
      }
    }).a
  }))
}, function (t, n, e) {
  var r = e(9), o = e(1)("toStringTag"), i = "Arguments" == r(function () {
    return arguments
  }());
  t.exports = function (t) {
    var n, e, c;
    return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof (e = function (t, n) {
      try {
        return t[n]
      } catch (t) {
      }
    }(n = Object(t), o)) ? e : i ? r(n) : "Object" == (c = r(n)) && "function" == typeof n.callee ? "Arguments" : c
  }
}, function (t, n) {
  var e = {}.toString;
  t.exports = function (t) {
    return e.call(t).slice(8, -1)
  }
}, function (t, n, e) {
  var r = e(3), o = e(24), i = e(25), c = Object.defineProperty;
  n.f = e(7) ? Object.defineProperty : function (t, n, e) {
    if (r(t), n = i(n, !0), r(e), o) try {
      return c(t, n, e)
    } catch (t) {
    }
    if ("get" in e || "set" in e) throw TypeError("Accessors not supported!");
    return "value" in e && (t[n] = e.value), t
  }
}, function (t, n, e) {
  var r = e(0), o = e(15), i = e(18), c = e(14)("src"), u = e(27), f = ("" + u).split("toString");
  e(2).inspectSource = function (t) {
    return u.call(t)
  }, (t.exports = function (t, n, e, u) {
    var a = "function" == typeof e;
    a && (i(e, "name") || o(e, "name", n)), t[n] !== e && (a && (i(e, c) || o(e, c, t[n] ? "" + t[n] : f.join(String(n)))), t === r ? t[n] = e : u ? t[n] ? t[n] = e : o(t, n, e) : (delete t[n], o(t, n, e)))
  })(Function.prototype, "toString", (function () {
    return "function" == typeof this && this[c] || u.call(this)
  }))
}, function (t, n) {
  t.exports = !1
}, function (t, n, e) {
  var r = e(2), o = e(0), i = o["__core-js_shared__"] || (o["__core-js_shared__"] = {});
  (t.exports = function (t, n) {
    return i[t] || (i[t] = void 0 !== n ? n : {})
  })("versions", []).push({
    version: r.version,
    mode: e(12) ? "pure" : "global",
    copyright: "© 2019 Denis Pushkarev (zloirock.ru)"
  })
}, function (t, n) {
  var e = 0, r = Math.random();
  t.exports = function (t) {
    return "Symbol(".concat(void 0 === t ? "" : t, ")_", (++e + r).toString(36))
  }
}, function (t, n, e) {
  var r = e(10), o = e(26);
  t.exports = e(7) ? function (t, n, e) {
    return r.f(t, n, o(1, e))
  } : function (t, n, e) {
    return t[n] = e, t
  }
}, function (t, n) {
  t.exports = function (t) {
    try {
      return !!t()
    } catch (t) {
      return !0
    }
  }
}, function (t, n, e) {
  var r = e(4), o = e(0).document, i = r(o) && r(o.createElement);
  t.exports = function (t) {
    return i ? o.createElement(t) : {}
  }
}, function (t, n) {
  var e = {}.hasOwnProperty;
  t.exports = function (t, n) {
    return e.call(t, n)
  }
}, function (t, n) {
  t.exports = {}
}, function (t, n, e) {
  var r, o, i, c = e(5), u = e(36), f = e(37), a = e(17), s = e(0), l = s.process, p = s.setImmediate,
      v = s.clearImmediate, h = s.MessageChannel, d = s.Dispatch, y = 0, m = {}, _ = function () {
        var t = +this;
        if (m.hasOwnProperty(t)) {
          var n = m[t];
          delete m[t], n()
        }
      }, x = function (t) {
        _.call(t.data)
      };
  p && v || (p = function (t) {
    for (var n = [], e = 1; arguments.length > e;) n.push(arguments[e++]);
    return m[++y] = function () {
      u("function" == typeof t ? t : Function(t), n)
    }, r(y), y
  }, v = function (t) {
    delete m[t]
  }, "process" == e(9)(l) ? r = function (t) {
    l.nextTick(c(_, t, 1))
  } : d && d.now ? r = function (t) {
    d.now(c(_, t, 1))
  } : h ? (i = (o = new h).port2, o.port1.onmessage = x, r = c(i.postMessage, i, 1)) : s.addEventListener && "function" == typeof postMessage && !s.importScripts ? (r = function (t) {
    s.postMessage(t + "", "*")
  }, s.addEventListener("message", x, !1)) : r = "onreadystatechange" in a("script") ? function (t) {
    f.appendChild(a("script")).onreadystatechange = function () {
      f.removeChild(this), _.call(t)
    }
  } : function (t) {
    setTimeout(c(_, t, 1), 0)
  }), t.exports = {set: p, clear: v}
}, function (t, n, e) {
  "use strict";
  var r = e(6);

  function o(t) {
    var n, e;
    this.promise = new t((function (t, r) {
      if (void 0 !== n || void 0 !== e) throw TypeError("Bad Promise constructor");
      n = t, e = r
    })), this.resolve = r(n), this.reject = r(e)
  }

  t.exports.f = function (t) {
    return new o(t)
  }
}, function (t, n, e) {
  "use strict";
  var r, o, i, c, u = e(12), f = e(0), a = e(5), s = e(8), l = e(23), p = e(4), v = e(6), h = e(28), d = e(29),
      y = e(35), m = e(20).set, _ = e(38)(), x = e(21), g = e(39), b = e(40), w = e(41), j = f.TypeError, P = f.process,
      S = P && P.versions, O = S && S.v8 || "", M = f.Promise, T = "process" == s(P), E = function () {
      }, F = o = x.f, k = !!function () {
        try {
          var t = M.resolve(1), n = (t.constructor = {})[e(1)("species")] = function (t) {
            t(E, E)
          };
          return (T || "function" == typeof PromiseRejectionEvent) && t.then(E) instanceof n && 0 !== O.indexOf("6.6") && -1 === b.indexOf("Chrome/66")
        } catch (t) {
        }
      }(), A = function (t) {
        var n;
        return !(!p(t) || "function" != typeof (n = t.then)) && n
      }, R = function (t, n) {
        if (!t._n) {
          t._n = !0;
          var e = t._c;
          _((function () {
            for (var r = t._v, o = 1 == t._s, i = 0, c = function (n) {
              var e, i, c, u = o ? n.ok : n.fail, f = n.resolve, a = n.reject, s = n.domain;
              try {
                u ? (o || (2 == t._h && N(t), t._h = 1), !0 === u ? e = r : (s && s.enter(), e = u(r), s && (s.exit(), c = !0)), e === n.promise ? a(j("Promise-chain cycle")) : (i = A(e)) ? i.call(e, f, a) : f(e)) : a(r)
              } catch (t) {
                s && !c && s.exit(), a(t)
              }
            }; e.length > i;) c(e[i++]);
            t._c = [], t._n = !1, n && !t._h && B(t)
          }))
        }
      }, B = function (t) {
        m.call(f, (function () {
          var n, e, r, o = t._v, i = C(t);
          if (i && (n = g((function () {
            T ? P.emit("unhandledRejection", o, t) : (e = f.onunhandledrejection) ? e({
              promise: t,
              reason: o
            }) : (r = f.console) && r.error && r.error("Unhandled promise rejection", o)
          })), t._h = T || C(t) ? 2 : 1), t._a = void 0, i && n.e) throw n.v
        }))
      }, C = function (t) {
        return 1 !== t._h && 0 === (t._a || t._c).length
      }, N = function (t) {
        m.call(f, (function () {
          var n;
          T ? P.emit("rejectionHandled", t) : (n = f.onrejectionhandled) && n({promise: t, reason: t._v})
        }))
      }, U = function (t) {
        var n = this;
        n._d || (n._d = !0, (n = n._w || n)._v = t, n._s = 2, n._a || (n._a = n._c.slice()), R(n, !0))
      }, I = function (t) {
        var n, e = this;
        if (!e._d) {
          e._d = !0, e = e._w || e;
          try {
            if (e === t) throw j("Promise can't be resolved itself");
            (n = A(t)) ? _((function () {
              var r = {_w: e, _d: !1};
              try {
                n.call(t, a(I, r, 1), a(U, r, 1))
              } catch (t) {
                U.call(r, t)
              }
            })) : (e._v = t, e._s = 1, R(e, !1))
          } catch (t) {
            U.call({_w: e, _d: !1}, t)
          }
        }
      };
  k || (M = function (t) {
    h(this, M, "Promise", "_h"), v(t), r.call(this);
    try {
      t(a(I, this, 1), a(U, this, 1))
    } catch (t) {
      U.call(this, t)
    }
  }, (r = function (t) {
    this._c = [], this._a = void 0, this._s = 0, this._d = !1, this._v = void 0, this._h = 0, this._n = !1
  }).prototype = e(42)(M.prototype, {
    then: function (t, n) {
      var e = F(y(this, M));
      return e.ok = "function" != typeof t || t, e.fail = "function" == typeof n && n, e.domain = T ? P.domain : void 0, this._c.push(e), this._a && this._a.push(e), this._s && R(this, !1), e.promise
    }, catch: function (t) {
      return this.then(void 0, t)
    }
  }), i = function () {
    var t = new r;
    this.promise = t, this.resolve = a(I, t, 1), this.reject = a(U, t, 1)
  }, x.f = F = function (t) {
    return t === M || t === c ? new i(t) : o(t)
  }), l(l.G + l.W + l.F * !k, {Promise: M}), e(43)(M, "Promise"), e(44)("Promise"), c = e(2).Promise, l(l.S + l.F * !k, "Promise", {
    reject: function (t) {
      var n = F(this);
      return (0, n.reject)(t), n.promise
    }
  }), l(l.S + l.F * (u || !k), "Promise", {
    resolve: function (t) {
      return w(u && this === c ? M : this, t)
    }
  }), l(l.S + l.F * !(k && e(45)((function (t) {
    M.all(t).catch(E)
  }))), "Promise", {
    all: function (t) {
      var n = this, e = F(n), r = e.resolve, o = e.reject, i = g((function () {
        var e = [], i = 0, c = 1;
        d(t, !1, (function (t) {
          var u = i++, f = !1;
          e.push(void 0), c++, n.resolve(t).then((function (t) {
            f || (f = !0, e[u] = t, --c || r(e))
          }), o)
        })), --c || r(e)
      }));
      return i.e && o(i.v), e.promise
    }, race: function (t) {
      var n = this, e = F(n), r = e.reject, o = g((function () {
        d(t, !1, (function (t) {
          n.resolve(t).then(e.resolve, r)
        }))
      }));
      return o.e && r(o.v), e.promise
    }
  })
}, function (t, n, e) {
  var r = e(0), o = e(2), i = e(15), c = e(11), u = e(5), f = function (t, n, e) {
    var a, s, l, p, v = t & f.F, h = t & f.G, d = t & f.S, y = t & f.P, m = t & f.B,
        _ = h ? r : d ? r[n] || (r[n] = {}) : (r[n] || {}).prototype, x = h ? o : o[n] || (o[n] = {}),
        g = x.prototype || (x.prototype = {});
    for (a in h && (e = n), e) l = ((s = !v && _ && void 0 !== _[a]) ? _ : e)[a], p = m && s ? u(l, r) : y && "function" == typeof l ? u(Function.call, l) : l, _ && c(_, a, l, t & f.U), x[a] != l && i(x, a, p), y && g[a] != l && (g[a] = l)
  };
  r.core = o, f.F = 1, f.G = 2, f.S = 4, f.P = 8, f.B = 16, f.W = 32, f.U = 64, f.R = 128, t.exports = f
}, function (t, n, e) {
  t.exports = !e(7) && !e(16)((function () {
    return 7 != Object.defineProperty(e(17)("div"), "a", {
      get: function () {
        return 7
      }
    }).a
  }))
}, function (t, n, e) {
  var r = e(4);
  t.exports = function (t, n) {
    if (!r(t)) return t;
    var e, o;
    if (n && "function" == typeof (e = t.toString) && !r(o = e.call(t))) return o;
    if ("function" == typeof (e = t.valueOf) && !r(o = e.call(t))) return o;
    if (!n && "function" == typeof (e = t.toString) && !r(o = e.call(t))) return o;
    throw TypeError("Can't convert object to primitive value")
  }
}, function (t, n) {
  t.exports = function (t, n) {
    return {enumerable: !(1 & t), configurable: !(2 & t), writable: !(4 & t), value: n}
  }
}, function (t, n, e) {
  t.exports = e(13)("native-function-to-string", Function.toString)
}, function (t, n) {
  t.exports = function (t, n, e, r) {
    if (!(t instanceof n) || void 0 !== r && r in t) throw TypeError(e + ": incorrect invocation!");
    return t
  }
}, function (t, n, e) {
  var r = e(5), o = e(30), i = e(31), c = e(3), u = e(32), f = e(34), a = {}, s = {};
  (n = t.exports = function (t, n, e, l, p) {
    var v, h, d, y, m = p ? function () {
      return t
    } : f(t), _ = r(e, l, n ? 2 : 1), x = 0;
    if ("function" != typeof m) throw TypeError(t + " is not iterable!");
    if (i(m)) {
      for (v = u(t.length); v > x; x++) if ((y = n ? _(c(h = t[x])[0], h[1]) : _(t[x])) === a || y === s) return y
    } else for (d = m.call(t); !(h = d.next()).done;) if ((y = o(d, _, h.value, n)) === a || y === s) return y
  }).BREAK = a, n.RETURN = s
}, function (t, n, e) {
  var r = e(3);
  t.exports = function (t, n, e, o) {
    try {
      return o ? n(r(e)[0], e[1]) : n(e)
    } catch (n) {
      var i = t.return;
      throw void 0 !== i && r(i.call(t)), n
    }
  }
}, function (t, n, e) {
  var r = e(19), o = e(1)("iterator"), i = Array.prototype;
  t.exports = function (t) {
    return void 0 !== t && (r.Array === t || i[o] === t)
  }
}, function (t, n, e) {
  var r = e(33), o = Math.min;
  t.exports = function (t) {
    return t > 0 ? o(r(t), 9007199254740991) : 0
  }
}, function (t, n) {
  var e = Math.ceil, r = Math.floor;
  t.exports = function (t) {
    return isNaN(t = +t) ? 0 : (t > 0 ? r : e)(t)
  }
}, function (t, n, e) {
  var r = e(8), o = e(1)("iterator"), i = e(19);
  t.exports = e(2).getIteratorMethod = function (t) {
    if (null != t) return t[o] || t["@@iterator"] || i[r(t)]
  }
}, function (t, n, e) {
  var r = e(3), o = e(6), i = e(1)("species");
  t.exports = function (t, n) {
    var e, c = r(t).constructor;
    return void 0 === c || null == (e = r(c)[i]) ? n : o(e)
  }
}, function (t, n) {
  t.exports = function (t, n, e) {
    var r = void 0 === e;
    switch (n.length) {
      case 0:
        return r ? t() : t.call(e);
      case 1:
        return r ? t(n[0]) : t.call(e, n[0]);
      case 2:
        return r ? t(n[0], n[1]) : t.call(e, n[0], n[1]);
      case 3:
        return r ? t(n[0], n[1], n[2]) : t.call(e, n[0], n[1], n[2]);
      case 4:
        return r ? t(n[0], n[1], n[2], n[3]) : t.call(e, n[0], n[1], n[2], n[3])
    }
    return t.apply(e, n)
  }
}, function (t, n, e) {
  var r = e(0).document;
  t.exports = r && r.documentElement
}, function (t, n, e) {
  var r = e(0), o = e(20).set, i = r.MutationObserver || r.WebKitMutationObserver, c = r.process, u = r.Promise,
      f = "process" == e(9)(c);
  t.exports = function () {
    var t, n, e, a = function () {
      var r, o;
      for (f && (r = c.domain) && r.exit(); t;) {
        o = t.fn, t = t.next;
        try {
          o()
        } catch (r) {
          throw t ? e() : n = void 0, r
        }
      }
      n = void 0, r && r.enter()
    };
    if (f) e = function () {
      c.nextTick(a)
    }; else if (!i || r.navigator && r.navigator.standalone) if (u && u.resolve) {
      var s = u.resolve(void 0);
      e = function () {
        s.then(a)
      }
    } else e = function () {
      o.call(r, a)
    }; else {
      var l = !0, p = document.createTextNode("");
      new i(a).observe(p, {characterData: !0}), e = function () {
        p.data = l = !l
      }
    }
    return function (r) {
      var o = {fn: r, next: void 0};
      n && (n.next = o), t || (t = o, e()), n = o
    }
  }
}, function (t, n) {
  t.exports = function (t) {
    try {
      return {e: !1, v: t()}
    } catch (t) {
      return {e: !0, v: t}
    }
  }
}, function (t, n, e) {
  var r = e(0).navigator;
  t.exports = r && r.userAgent || ""
}, function (t, n, e) {
  var r = e(3), o = e(4), i = e(21);
  t.exports = function (t, n) {
    if (r(t), o(n) && n.constructor === t) return n;
    var e = i.f(t);
    return (0, e.resolve)(n), e.promise
  }
}, function (t, n, e) {
  var r = e(11);
  t.exports = function (t, n, e) {
    for (var o in n) r(t, o, n[o], e);
    return t
  }
}, function (t, n, e) {
  var r = e(10).f, o = e(18), i = e(1)("toStringTag");
  t.exports = function (t, n, e) {
    t && !o(t = e ? t : t.prototype, i) && r(t, i, {configurable: !0, value: n})
  }
}, function (t, n, e) {
  "use strict";
  var r = e(0), o = e(10), i = e(7), c = e(1)("species");
  t.exports = function (t) {
    var n = r[t];
    i && n && !n[c] && o.f(n, c, {
      configurable: !0, get: function () {
        return this
      }
    })
  }
}, function (t, n, e) {
  var r = e(1)("iterator"), o = !1;
  try {
    var i = [7][r]();
    i.return = function () {
      o = !0
    }, Array.from(i, (function () {
      throw 2
    }))
  } catch (t) {
  }
  t.exports = function (t, n) {
    if (!n && !o) return !1;
    var e = !1;
    try {
      var i = [7], c = i[r]();
      c.next = function () {
        return {done: e = !0}
      }, i[r] = function () {
        return c
      }, t(i)
    } catch (t) {
    }
    return e
  }
}, function (t, n, e) {
  "use strict";
  var r = e(8), o = {};
  o[e(1)("toStringTag")] = "z", o + "" != "[object z]" && e(11)(Object.prototype, "toString", (function () {
    return "[object " + r(this) + "]"
  }), !0)
}, function (t, n, e) {
  "use strict";
  e.r(n);
  e(22), e(46);
  document.getElementById("btn").addEventListener("click", (function () {
    setTimeout((function () {
      var t, n;
      Promise.resolve((t = 10, n = 30, t + n)).then((function (t) {
        console.log(t)
      }))
    }), 3e3)
  }))
}]);
