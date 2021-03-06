! function(e, t) {
    "function" == typeof define && define.amd ? define(t) : "object" == typeof exports ? module.exports = t() : e.returnExports = t()
}(this, function() {
    "use strict";
    var q, e = Function.call.bind(Function.apply),
        t = Function.call.bind(Function.call),
        r = function(t) {
            return function() {
                return !e(t, this, arguments)
            }
        },
        n = function(e) {
            try {
                return e(), !1
            } catch (t) {
                return !0
            }
        },
        o = function(e) {
            try {
                return e()
            } catch (t) {
                return !1
            }
        },
        i = r(n),
        a = function() {
            return !n(function() {
                Object.defineProperty({}, "x", {})
            })
        },
        u = !!Object.defineProperty && a(),
        s = "foo" === function() {}.name,
        f = Function.call.bind(Array.prototype.forEach),
        c = Function.call.bind(Array.prototype.reduce),
        l = Function.call.bind(Array.prototype.filter),
        v = (Function.call.bind(Array.prototype.every), function(e, t, r) {
            u ? Object.defineProperty(e, t, {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                value: r
            }) : e[t] = r
        }),
        h = function(e, t, r) {
            if (v(e, t, r), !te.SameValue(e[t], r)) throw new TypeError("property is nonconfigurable")
        },
        y = function(e, t, r, n) {
            !n && t in e || (u ? Object.defineProperty(e, t, {
                configurable: !0,
                enumerable: !1,
                writable: !0,
                value: r
            }) : e[t] = r)
        },
        b = function(e, t) {
            f(Object.keys(t), function(r) {
                var n = t[r];
                y(e, r, n, !1)
            })
        },
        g = Object.create || function(e, t) {
            var r = function() {};
            r.prototype = e;
            var n = new r;
            return "undefined" != typeof t && Object.keys(t).forEach(function(e) {
                B.defineByDescriptor(n, e, t[e])
            }), n
        },
        d = function(e, t) {
            return Object.setPrototypeOf ? o(function() {
                var r = function Subclass(t) {
                    var r = new e(t);
                    return Object.setPrototypeOf(r, Subclass.prototype), r
                };
                return Object.setPrototypeOf(r, e), r.prototype = g(e.prototype, {
                    constructor: {
                        value: r
                    }
                }), t(r)
            }) : !1
        },
        m = function() {
            return String.prototype.startsWith && n(function() {
                "/a/".startsWith(/a/)
            })
        },
        O = function() {
            return String.prototype.startsWith && "abc".startsWith("a", 1 / 0) === !1
        }(),
        w = function() {
            if ("undefined" != typeof self) return self;
            if ("undefined" != typeof window) return window;
            if ("undefined" != typeof global) return global;
            throw new Error("unable to locate global object")
        },
        j = w(),
        S = j.isFinite,
        I = (function() {
            return null === this
        }.call(null), m() && O),
        E = Function.call.bind(String.prototype.indexOf),
        M = Function.call.bind(Object.prototype.toString),
        P = Function.call.bind(Array.prototype.concat),
        x = Function.call.bind(String.prototype.slice),
        N = Function.call.bind(Array.prototype.push),
        C = Function.apply.bind(Array.prototype.push),
        A = Function.call.bind(Array.prototype.shift),
        _ = Math.max,
        k = Math.min,
        R = Math.floor,
        F = Math.abs,
        D = Math.log,
        z = Math.sqrt,
        L = Function.call.bind(Object.prototype.hasOwnProperty),
        G = function() {},
        W = j.Symbol || {},
        H = W.species || "@@species",
        B = {
            getter: function(e, t, r) {
                if (!u) throw new TypeError("getters require true ES5 support");
                Object.defineProperty(e, t, {
                    configurable: !0,
                    enumerable: !1,
                    get: r
                })
            },
            proxy: function(e, t, r) {
                if (!u) throw new TypeError("getters require true ES5 support");
                var n = Object.getOwnPropertyDescriptor(e, t);
                Object.defineProperty(r, t, {
                    configurable: n.configurable,
                    enumerable: n.enumerable,
                    get: function() {
                        return e[t]
                    },
                    set: function(r) {
                        e[t] = r
                    }
                })
            },
            redefine: function(e, t, r) {
                if (u) {
                    var n = Object.getOwnPropertyDescriptor(e, t);
                    n.value = r, Object.defineProperty(e, t, n)
                } else e[t] = r
            },
            defineByDescriptor: function(e, t, r) {
                u ? Object.defineProperty(e, t, r) : "value" in r && (e[t] = r.value)
            },
            preserveToString: function(e, t) {
                y(e, "toString", t.toString.bind(t), !0)
            }
        },
        V = function(e, t, r) {
            B.preserveToString(t, e), Object.setPrototypeOf && Object.setPrototypeOf(e, t), f(Object.getOwnPropertyNames(e), function(n) {
                n in G || r[n] || B.proxy(e, n, t)
            }), t.prototype = e.prototype, B.redefine(e.prototype, "constructor", t)
        },
        $ = function() {
            return this
        },
        U = function(e) {
            u && !L(e, H) && B.getter(e, H, $)
        },
        K = {
            primitive: function(e) {
                return null === e || "function" != typeof e && "object" != typeof e
            },
            object: function(e) {
                return null !== e && "object" == typeof e
            },
            string: function(e) {
                return "[object String]" === M(e)
            },
            regex: function(e) {
                return "[object RegExp]" === M(e)
            },
            symbol: function(e) {
                return "function" == typeof j.Symbol && "symbol" == typeof e
            }
        },
        X = Number.isNaN || function(e) {
            return e !== e
        },
        Z = Number.isFinite || function(e) {
            return "number" == typeof e && S(e)
        },
        J = function(e, t, r) {
            var n = e[t];
            y(e, t, r, !0), B.preserveToString(e[t], n)
        },
        Q = K.symbol(W.iterator) ? W.iterator : "_es6-shim iterator_";
    j.Set && "function" == typeof(new j.Set)["@@iterator"] && (Q = "@@iterator");
    var Y = function(e, t) {
            var r = t || function() {
                return this
            };
            y(e, Q, r), !e[Q] && K.symbol(Q) && (e[Q] = r)
        },
        ee = function(e) {
            var t = M(e),
                r = "[object Arguments]" === t;
            return r || (r = "[object Array]" !== t && null !== e && "object" == typeof e && "number" == typeof e.length && e.length >= 0 && "[object Function]" === M(e.callee)), r
        },
        te = {
            Call: function(t, r) {
                var n = arguments.length > 2 ? arguments[2] : [];
                if (!te.IsCallable(t)) throw new TypeError(t + " is not a function");
                return e(t, r, n)
            },
            RequireObjectCoercible: function(e, t) {
                if (null == e) throw new TypeError(t || "Cannot call method on " + e)
            },
            TypeIsObject: function(e) {
                return null != e && Object(e) === e
            },
            ToObject: function(e, t) {
                return te.RequireObjectCoercible(e, t), Object(e)
            },
            IsCallable: function(e) {
                return "function" == typeof e && "[object Function]" === M(e)
            },
            IsConstructor: function(e) {
                return te.IsCallable(e)
            },
            ToInt32: function(e) {
                return te.ToNumber(e) >> 0
            },
            ToUint32: function(e) {
                return te.ToNumber(e) >>> 0
            },
            ToNumber: function(e) {
                if ("[object Symbol]" === M(e)) throw new TypeError("Cannot convert a Symbol value to a number");
                return +e
            },
            ToInteger: function(e) {
                var t = te.ToNumber(e);
                return X(t) ? 0 : 0 !== t && Z(t) ? (t > 0 ? 1 : -1) * R(F(t)) : t
            },
            ToLength: function(e) {
                var t = te.ToInteger(e);
                return 0 >= t ? 0 : t > Number.MAX_SAFE_INTEGER ? Number.MAX_SAFE_INTEGER : t
            },
            SameValue: function(e, t) {
                return e === t ? 0 === e ? 1 / e === 1 / t : !0 : X(e) && X(t)
            },
            SameValueZero: function(e, t) {
                return e === t || X(e) && X(t)
            },
            IsIterable: function(e) {
                return te.TypeIsObject(e) && ("undefined" != typeof e[Q] || ee(e))
            },
            GetIterator: function(e) {
                if (ee(e)) return new q(e, "value");
                var r = te.GetMethod(e, Q);
                if (!te.IsCallable(r)) throw new TypeError("value is not an iterable");
                var n = t(r, e);
                if (!te.TypeIsObject(n)) throw new TypeError("bad iterator");
                return n
            },
            GetMethod: function(e, t) {
                var r = te.ToObject(e)[t];
                if (void 0 === r || null === r) return void 0;
                if (!te.IsCallable(r)) throw new TypeError("Method not callable: " + t);
                return r
            },
            IteratorComplete: function(e) {
                return !!e.done
            },
            IteratorClose: function(e, r) {
                var n = te.GetMethod(e, "return");
                if (void 0 !== n) {
                    var o, i;
                    try {
                        o = t(n, e)
                    } catch (a) {
                        i = a
                    }
                    if (!r) {
                        if (i) throw i;
                        if (!te.TypeIsObject(o)) throw new TypeError("Iterator's return method returned a non-object.")
                    }
                }
            },
            IteratorNext: function(e) {
                var t = arguments.length > 1 ? e.next(arguments[1]) : e.next();
                if (!te.TypeIsObject(t)) throw new TypeError("bad iterator");
                return t
            },
            IteratorStep: function(e) {
                var t = te.IteratorNext(e),
                    r = te.IteratorComplete(t);
                return r ? !1 : t
            },
            Construct: function(e, t, r, n) {
                if (void 0 === r && (r = e), !n) return vr.construct(e, t, r);
                var o = r.prototype;
                te.TypeIsObject(o) || (o = Object.prototype);
                var i = g(o),
                    a = te.Call(e, i, t);
                return te.TypeIsObject(a) ? a : i
            },
            SpeciesConstructor: function(e, t) {
                var r = e.constructor;
                if (void 0 === r) return t;
                if (!te.TypeIsObject(r)) throw new TypeError("Bad constructor");
                var n = r[H];
                if (void 0 === n || null === n) return t;
                if (!te.IsConstructor(n)) throw new TypeError("Bad @@species");
                return n
            },
            CreateHTML: function(e, t, r, n) {
                var o = String(e),
                    i = "<" + t;
                if ("" !== r) {
                    var a = String(n),
                        u = a.replace(/"/g, "&quot;");
                    i += " " + r + '="' + u + '"'
                }
                var s = i + ">",
                    f = s + o;
                return f + "</" + t + ">"
            }
        },
        re = function(e, t, r, n) {
            if (!te.TypeIsObject(e)) throw new TypeError("Constructor requires `new`: " + t.name);
            var o = t.prototype;
            te.TypeIsObject(o) || (o = r), e = g(o);
            for (var i in n)
                if (L(n, i)) {
                    var a = n[i];
                    y(e, i, a, !0)
                }
            return e
        };
    if (String.fromCodePoint && 1 !== String.fromCodePoint.length) {
        var ne = String.fromCodePoint;
        J(String, "fromCodePoint", function(t) {
            return e(ne, this, arguments)
        })
    }
    var oe = {
        fromCodePoint: function(e) {
            for (var r, t = [], n = 0, o = arguments.length; o > n; n++) {
                if (r = Number(arguments[n]), !te.SameValue(r, te.ToInteger(r)) || 0 > r || r > 1114111) throw new RangeError("Invalid code point " + r);
                65536 > r ? N(t, String.fromCharCode(r)) : (r -= 65536, N(t, String.fromCharCode((r >> 10) + 55296)), N(t, String.fromCharCode(r % 1024 + 56320)))
            }
            return t.join("")
        },
        raw: function(e) {
            var t = te.ToObject(e, "bad callSite"),
                r = te.ToObject(t.raw, "bad raw value"),
                n = r.length,
                o = te.ToLength(n);
            if (0 >= o) return "";
            for (var u, s, f, c, i = [], a = 0; o > a && (u = String(a), f = String(r[u]), N(i, f), !(a + 1 >= o));) s = a + 1 < arguments.length ? arguments[a + 1] : "", c = String(s), N(i, c), a++;
            return i.join("")
        }
    };
    b(String, oe), "xy" !== String.raw({
        raw: {
            0: "x",
            1: "y",
            length: 2
        }
    }) && J(String, "raw", oe.raw);
    var ie = function repeat(e, t) {
            if (1 > t) return "";
            if (t % 2) return repeat(e, t - 1) + e;
            var r = repeat(e, t / 2);
            return r + r
        },
        ae = 1 / 0,
        ue = {
            repeat: function(e) {
                te.RequireObjectCoercible(this);
                var t = String(this),
                    r = te.ToInteger(e);
                if (0 > r || r >= ae) throw new RangeError("repeat count must be less than infinity and not overflow maximum string size");
                return ie(t, r)
            },
            startsWith: function(e) {
                te.RequireObjectCoercible(this);
                var t = String(this);
                if (K.regex(e)) throw new TypeError('Cannot call method "startsWith" with a regex');
                var r = String(e),
                    n = arguments.length > 1 ? arguments[1] : void 0,
                    o = _(te.ToInteger(n), 0);
                return x(t, o, o + r.length) === r
            },
            endsWith: function(e) {
                te.RequireObjectCoercible(this);
                var t = String(this);
                if (K.regex(e)) throw new TypeError('Cannot call method "endsWith" with a regex');
                var r = String(e),
                    n = t.length,
                    o = arguments.length > 1 ? arguments[1] : void 0,
                    i = "undefined" == typeof o ? n : te.ToInteger(o),
                    a = k(_(i, 0), n);
                return x(t, a - r.length, a) === r
            },
            includes: function(e) {
                if (K.regex(e)) throw new TypeError('"includes" does not accept a RegExp');
                var t;
                return arguments.length > 1 && (t = arguments[1]), -1 !== E(this, e, t)
            },
            codePointAt: function(e) {
                te.RequireObjectCoercible(this);
                var t = String(this),
                    r = te.ToInteger(e),
                    n = t.length;
                if (r >= 0 && n > r) {
                    var o = t.charCodeAt(r),
                        i = r + 1 === n;
                    if (55296 > o || o > 56319 || i) return o;
                    var a = t.charCodeAt(r + 1);
                    return 56320 > a || a > 57343 ? o : 1024 * (o - 55296) + (a - 56320) + 65536
                }
            }
        };
    b(String.prototype, ue), "a".includes("a", 1 / 0) !== !1 && J(String.prototype, "includes", ue.includes);
    var se = 1 !== "".trim().length;
    if (se) {
        delete String.prototype.trim;
        var fe = ["	\n\f\r   ᠎    ", "         　\u2028", "\u2029\ufeff"].join(""),
            ce = new RegExp("(^[" + fe + "]+)|([" + fe + "]+$)", "g");
        b(String.prototype, {
            trim: function() {
                if ("undefined" == typeof this || null === this) throw new TypeError("can't convert " + this + " to object");
                return String(this).replace(ce, "")
            }
        })
    }
    var le = function(e) {
        te.RequireObjectCoercible(e), this._s = String(e), this._i = 0
    };
    le.prototype.next = function() {
        var e = this._s,
            t = this._i;
        if ("undefined" == typeof e || t >= e.length) return this._s = void 0, {
            value: void 0,
            done: !0
        };
        var n, o, r = e.charCodeAt(t);
        return 55296 > r || r > 56319 || t + 1 === e.length ? o = 1 : (n = e.charCodeAt(t + 1), o = 56320 > n || n > 57343 ? 1 : 2), this._i = t + o, {
            value: e.substr(t, o),
            done: !1
        }
    }, Y(le.prototype), Y(String.prototype, function() {
        return new le(this)
    }), I || (J(String.prototype, "startsWith", ue.startsWith), J(String.prototype, "endsWith", ue.endsWith));
    var pe = {
        from: function(e) {
            var o, i, r = this,
                n = arguments.length > 1 ? arguments[1] : void 0;
            if (void 0 === n) o = !1;
            else {
                if (!te.IsCallable(n)) throw new TypeError("Array.from: when provided, the second argument must be a function");
                i = arguments.length > 2 ? arguments[2] : void 0, o = !0
            }
            var u, s, f, a = ee(e) || te.GetMethod(e, Q);
            if (void 0 !== a) {
                s = te.IsConstructor(r) ? Object(new r) : [];
                var l, p, c = te.GetIterator(e);
                for (f = 0;;) {
                    if (l = te.IteratorStep(c), l === !1) break;
                    p = l.value;
                    try {
                        o && (p = void 0 !== i ? t(n, i, p, f) : n(p, f)), s[f] = p
                    } catch (v) {
                        throw te.IteratorClose(c, !0), v
                    }
                    f += 1
                }
                u = f
            } else {
                var h = te.ToObject(e);
                u = te.ToLength(h.length), s = te.IsConstructor(r) ? Object(new r(u)) : new Array(u);
                var y;
                for (f = 0; u > f; ++f) y = h[f], o && (y = void 0 !== i ? t(n, i, y, f) : n(y, f)), s[f] = y
            }
            return s.length = u, s
        },
        of: function() {
            for (var e = arguments.length, t = this, r = Array.isArray(t) || !te.IsCallable(t) ? new Array(e) : te.Construct(t, [e]), n = 0; e > n; ++n) h(r, n, arguments[n]);
            return r.length = e, r
        }
    };
    b(Array, pe), U(Array);
    var ve = function(e) {
        return {
            value: e,
            done: 0 === arguments.length
        }
    };
    q = function(e, t) {
        this.i = 0, this.array = e, this.kind = t
    }, b(q.prototype, {
        next: function() {
            var e = this.i,
                t = this.array;
            if (!(this instanceof q)) throw new TypeError("Not an ArrayIterator");
            if ("undefined" != typeof t)
                for (var r = te.ToLength(t.length); r > e; e++) {
                    var o, n = this.kind;
                    return "key" === n ? o = e : "value" === n ? o = t[e] : "entry" === n && (o = [e, t[e]]), this.i = e + 1, {
                        value: o,
                        done: !1
                    }
                }
            return this.array = void 0, {
                value: void 0,
                done: !0
            }
        }
    }), Y(q.prototype);
    var he = function(e, t) {
            b(this, {
                object: e,
                array: ye(e),
                kind: t
            })
        },
        ye = function(e) {
            var t = [];
            for (var r in e) N(t, r);
            return t
        };
    b(he.prototype, {
        next: function() {
            var e, t = this.array;
            if (!(this instanceof he)) throw new TypeError("Not an ObjectIterator");
            for (; t.length > 0;)
                if (e = A(t), e in this.object) return ve("key" === this.kind ? e : "value" === this.kind ? this.object[e] : [e, this.object[e]]);
            return ve()
        }
    }), Y(he.prototype);
    var be = Array.of === pe.of || function() {
        var e = function(e) {
            this.length = e
        };
        e.prototype = [];
        var t = Array.of.apply(e, [1, 2]);
        return t instanceof e && 2 === t.length
    }();
    be || J(Array, "of", pe.of);
    var ge = {
        copyWithin: function(e, t) {
            var r = arguments[2],
                n = te.ToObject(this),
                o = te.ToLength(n.length),
                i = te.ToInteger(e),
                a = te.ToInteger(t),
                u = 0 > i ? _(o + i, 0) : k(i, o),
                s = 0 > a ? _(o + a, 0) : k(a, o);
            r = "undefined" == typeof r ? o : te.ToInteger(r);
            var f = 0 > r ? _(o + r, 0) : k(r, o),
                c = k(f - s, o - u),
                l = 1;
            for (u > s && s + c > u && (l = -1, s += c - 1, u += c - 1); c > 0;) L(n, s) ? n[u] = n[s] : delete n[s], s += l, u += l, c -= 1;
            return n
        },
        fill: function(e) {
            var t = arguments.length > 1 ? arguments[1] : void 0,
                r = arguments.length > 2 ? arguments[2] : void 0,
                n = te.ToObject(this),
                o = te.ToLength(n.length);
            t = te.ToInteger("undefined" == typeof t ? 0 : t), r = te.ToInteger("undefined" == typeof r ? o : r);
            for (var i = 0 > t ? _(o + t, 0) : k(t, o), a = 0 > r ? o + r : r, u = i; o > u && a > u; ++u) n[u] = e;
            return n
        },
        find: function(e) {
            var r = te.ToObject(this),
                n = te.ToLength(r.length);
            if (!te.IsCallable(e)) throw new TypeError("Array#find: predicate must be a function");
            for (var a, o = arguments.length > 1 ? arguments[1] : null, i = 0; n > i; i++)
                if (a = r[i], o) {
                    if (t(e, o, a, i, r)) return a
                } else if (e(a, i, r)) return a
        },
        findIndex: function(e) {
            var r = te.ToObject(this),
                n = te.ToLength(r.length);
            if (!te.IsCallable(e)) throw new TypeError("Array#findIndex: predicate must be a function");
            for (var o = arguments.length > 1 ? arguments[1] : null, i = 0; n > i; i++)
                if (o) {
                    if (t(e, o, r[i], i, r)) return i
                } else if (e(r[i], i, r)) return i;
            return -1
        },
        keys: function() {
            return new q(this, "key")
        },
        values: function() {
            return new q(this, "value")
        },
        entries: function() {
            return new q(this, "entry")
        }
    };
    if (Array.prototype.keys && !te.IsCallable([1].keys().next) && delete Array.prototype.keys, Array.prototype.entries && !te.IsCallable([1].entries().next) && delete Array.prototype.entries, Array.prototype.keys && Array.prototype.entries && !Array.prototype.values && Array.prototype[Q] && (b(Array.prototype, {
            values: Array.prototype[Q]
        }), K.symbol(W.unscopables) && (Array.prototype[W.unscopables].values = !0)), s && Array.prototype.values && "values" !== Array.prototype.values.name) {
        var de = Array.prototype.values;
        J(Array.prototype, "values", function() {
            return t(de, this)
        }), y(Array.prototype, Q, Array.prototype.values, !0)
    }
    b(Array.prototype, ge), Y(Array.prototype, function() {
        return this.values()
    }), Object.getPrototypeOf && Y(Object.getPrototypeOf([].values()));
    var me = function() {
            return o(function() {
                return 0 === Array.from({
                    length: -1
                }).length
            })
        }(),
        Oe = function() {
            var e = Array.from([0].entries());
            return 1 === e.length && Array.isArray(e[0]) && 0 === e[0][0] && 0 === e[0][1]
        }();
    me && Oe || J(Array, "from", pe.from);
    var we = function() {
        return o(function() {
            return Array.from([0], void 0)
        })
    }();
    if (!we) {
        var je = Array.from;
        J(Array, "from", function(r) {
            return arguments.length > 0 && "undefined" != typeof arguments[1] ? e(je, this, arguments) : t(je, this, r)
        })
    }
    var Se = function(e, r) {
        var n = {
            length: -1
        };
        return n[r ? 4294967294 : 0] = !0, o(function() {
            t(e, n, function() {
                throw new RangeError("should not reach here")
            }, [])
        })
    };
    if (!Se(Array.prototype.forEach)) {
        var Te = Array.prototype.forEach;
        J(Array.prototype, "forEach", function(t) {
            return e(Te, this.length >= 0 ? this : [], arguments)
        }, !0)
    }
    if (!Se(Array.prototype.map)) {
        var Ie = Array.prototype.map;
        J(Array.prototype, "map", function(t) {
            return e(Ie, this.length >= 0 ? this : [], arguments)
        }, !0)
    }
    if (!Se(Array.prototype.filter)) {
        var Ee = Array.prototype.filter;
        J(Array.prototype, "filter", function(t) {
            return e(Ee, this.length >= 0 ? this : [], arguments)
        }, !0)
    }
    if (!Se(Array.prototype.some)) {
        var Me = Array.prototype.some;
        J(Array.prototype, "some", function(t) {
            return e(Me, this.length >= 0 ? this : [], arguments)
        }, !0)
    }
    if (!Se(Array.prototype.every)) {
        var Pe = Array.prototype.every;
        J(Array.prototype, "every", function(t) {
            return e(Pe, this.length >= 0 ? this : [], arguments)
        }, !0)
    }
    if (!Se(Array.prototype.reduce)) {
        var xe = Array.prototype.reduce;
        J(Array.prototype, "reduce", function(t) {
            return e(xe, this.length >= 0 ? this : [], arguments)
        }, !0)
    }
    if (!Se(Array.prototype.reduceRight, !0)) {
        var Ne = Array.prototype.reduceRight;
        J(Array.prototype, "reduceRight", function(t) {
            return e(Ne, this.length >= 0 ? this : [], arguments)
        }, !0)
    }
    if (8 !== Number("0o10") || 2 !== Number("0b10")) {
        var Ce = Number,
            Ae = Function.bind.call(Function.call, RegExp.prototype.test, /^0b/i),
            _e = Function.bind.call(Function.call, RegExp.prototype.test, /^0o/i),
            ke = function(e) {
                var t;
                if ("function" == typeof e.valueOf && (t = e.valueOf(), K.primitive(t))) return t;
                if ("function" == typeof e.toString && (t = e.toString(), K.primitive(t))) return t;
                throw new TypeError("No default value")
            },
            Re = function Number(e) {
                var t = K.primitive(e) ? e : ke(e, "number");
                return "string" == typeof t && (Ae(t) ? t = parseInt(x(t, 2), 2) : _e(t) && (t = parseInt(x(t, 2), 8))), this instanceof Number ? new Ce(t) : Ce(t)
            };
        V(Ce, Re, {}), Number = Re, B.redefine(j, "Number", Re)
    }
    var Fe = Math.pow(2, 53) - 1;
    b(Number, {
        MAX_SAFE_INTEGER: Fe,
        MIN_SAFE_INTEGER: -Fe,
        EPSILON: 2.220446049250313e-16,
        parseInt: j.parseInt,
        parseFloat: j.parseFloat,
        isFinite: Z,
        isInteger: function(e) {
            return Z(e) && te.ToInteger(e) === e
        },
        isSafeInteger: function(e) {
            return Number.isInteger(e) && F(e) <= Number.MAX_SAFE_INTEGER
        },
        isNaN: X
    }), y(Number, "parseInt", j.parseInt, Number.parseInt !== j.parseInt), [, 1].find(function(e, t) {
        return 0 === t
    }) || J(Array.prototype, "find", ge.find), 0 !== [, 1].findIndex(function(e, t) {
        return 0 === t
    }) && J(Array.prototype, "findIndex", ge.findIndex);
    var De = Function.bind.call(Function.bind, Object.prototype.propertyIsEnumerable),
        ze = function() {
            for (var e = Number(this), t = arguments.length, r = t - e, n = new Array(0 > r ? 0 : r), o = e; t > o; ++o) n[o - e] = arguments[o];
            return n
        },
        Le = function(e) {
            return function(t, r) {
                return t[r] = e[r], t
            }
        },
        qe = function(e, t) {
            var n, r = Object.keys(Object(t));
            return te.IsCallable(Object.getOwnPropertySymbols) && (n = l(Object.getOwnPropertySymbols(Object(t)), De(t))), c(P(r, n || []), Le(t), e)
        },
        Ge = {
            assign: function(t, r) {
                var n = te.ToObject(t, "Cannot convert undefined or null to object");
                return c(e(ze, 1, arguments), qe, n)
            },
            is: function(e, t) {
                return te.SameValue(e, t)
            }
        },
        We = Object.assign && Object.preventExtensions && function() {
            var e = Object.preventExtensions({
                1: 2
            });
            try {
                Object.assign(e, "xy")
            } catch (t) {
                return "y" === e[1]
            }
        }();
    if (We && J(Object, "assign", Ge.assign), b(Object, Ge), u) {
        var He = {
            setPrototypeOf: function(e, r) {
                var n, o = function(e, t) {
                        if (!te.TypeIsObject(e)) throw new TypeError("cannot set prototype on a non-object");
                        if (null !== t && !te.TypeIsObject(t)) throw new TypeError("can only set prototype to an object or null" + t)
                    },
                    i = function(e, r) {
                        return o(e, r), t(n, e, r), e
                    };
                try {
                    n = e.getOwnPropertyDescriptor(e.prototype, r).set, t(n, {}, null)
                } catch (a) {
                    if (e.prototype !== {}[r]) return;
                    n = function(e) {
                        this[r] = e
                    }, i.polyfill = i(i({}, null), e.prototype) instanceof e
                }
                return i
            }(Object, "__proto__")
        };
        b(Object, He)
    }
    Object.setPrototypeOf && Object.getPrototypeOf && null !== Object.getPrototypeOf(Object.setPrototypeOf({}, null)) && null === Object.getPrototypeOf(Object.create(null)) && ! function() {
        var e = Object.create(null),
            t = Object.getPrototypeOf,
            r = Object.setPrototypeOf;
        Object.getPrototypeOf = function(r) {
            var n = t(r);
            return n === e ? null : n
        }, Object.setPrototypeOf = function(t, n) {
            var o = null === n ? e : n;
            return r(t, o)
        }, Object.setPrototypeOf.polyfill = !1
    }();
    var Be = !n(function() {
        Object.keys("foo")
    });
    if (!Be) {
        var Ve = Object.keys;
        J(Object, "keys", function(e) {
            return Ve(te.ToObject(e))
        })
    }
    if (Object.getOwnPropertyNames) {
        var $e = !n(function() {
            Object.getOwnPropertyNames("foo")
        });
        if (!$e) {
            var Ue = "object" == typeof window ? Object.getOwnPropertyNames(window) : [],
                Ke = Object.getOwnPropertyNames;
            J(Object, "getOwnPropertyNames", function(e) {
                var t = te.ToObject(e);
                if ("[object Window]" === M(t)) try {
                    return Ke(t)
                } catch (r) {
                    return P([], Ue)
                }
                return Ke(t)
            })
        }
    }
    if (Object.getOwnPropertyDescriptor) {
        var Xe = !n(function() {
            Object.getOwnPropertyDescriptor("foo", "bar")
        });
        if (!Xe) {
            var Ze = Object.getOwnPropertyDescriptor;
            J(Object, "getOwnPropertyDescriptor", function(e, t) {
                return Ze(te.ToObject(e), t)
            })
        }
    }
    if (Object.seal) {
        var Je = !n(function() {
            Object.seal("foo")
        });
        if (!Je) {
            var Qe = Object.seal;
            J(Object, "seal", function(e) {
                return K.object(e) ? Qe(e) : e
            })
        }
    }
    if (Object.isSealed) {
        var Ye = !n(function() {
            Object.isSealed("foo")
        });
        if (!Ye) {
            var et = Object.isSealed;
            J(Object, "isSealed", function(e) {
                return K.object(e) ? et(e) : !0
            })
        }
    }
    if (Object.freeze) {
        var tt = !n(function() {
            Object.freeze("foo")
        });
        if (!tt) {
            var rt = Object.freeze;
            J(Object, "freeze", function(e) {
                return K.object(e) ? rt(e) : e
            })
        }
    }
    if (Object.isFrozen) {
        var nt = !n(function() {
            Object.isFrozen("foo")
        });
        if (!nt) {
            var ot = Object.isFrozen;
            J(Object, "isFrozen", function(e) {
                return K.object(e) ? ot(e) : !0
            })
        }
    }
    if (Object.preventExtensions) {
        var it = !n(function() {
            Object.preventExtensions("foo")
        });
        if (!it) {
            var at = Object.preventExtensions;
            J(Object, "preventExtensions", function(e) {
                return K.object(e) ? at(e) : e
            })
        }
    }
    if (Object.isExtensible) {
        var ut = !n(function() {
            Object.isExtensible("foo")
        });
        if (!ut) {
            var st = Object.isExtensible;
            J(Object, "isExtensible", function(e) {
                return K.object(e) ? st(e) : !1
            })
        }
    }
    if (Object.getPrototypeOf) {
        var ft = !n(function() {
            Object.getPrototypeOf("foo")
        });
        if (!ft) {
            var ct = Object.getPrototypeOf;
            J(Object, "getPrototypeOf", function(e) {
                return ct(te.ToObject(e))
            })
        }
    }
    if (!RegExp.prototype.flags && u) {
        var lt = function() {
            if (!te.TypeIsObject(this)) throw new TypeError("Method called on incompatible type: must be an object.");
            var e = "";
            return this.global && (e += "g"), this.ignoreCase && (e += "i"), this.multiline && (e += "m"), this.unicode && (e += "u"), this.sticky && (e += "y"), e
        };
        B.getter(RegExp.prototype, "flags", lt)
    }
    var pt = o(function() {
        return "/a/i" === String(new RegExp(/a/g, "i"))
    });
    if (!pt && u) {
        var vt = RegExp,
            ht = function RegExp(e, t) {
                var r = this instanceof RegExp;
                return !r && (K.regex(e) || e && e.constructor === RegExp) ? e : K.regex(e) && K.string(t) ? new RegExp(e.source, t) : new vt(e, t)
            };
        V(vt, ht, {
            $input: !0
        }), RegExp = ht, B.redefine(j, "RegExp", ht)
    }
    if (u) {
        var yt = {
            input: "$_",
            lastMatch: "$&",
            lastParen: "$+",
            leftContext: "$`",
            rightContext: "$'"
        };
        f(Object.keys(yt), function(e) {
            e in RegExp && !(yt[e] in RegExp) && B.getter(RegExp, yt[e], function() {
                return RegExp[e]
            })
        })
    }
    U(RegExp);
    var bt = 1 / Number.EPSILON,
        gt = function(e) {
            return e + bt - bt
        },
        dt = Math.pow(2, -23),
        mt = Math.pow(2, 127) * (2 - dt),
        Ot = Math.pow(2, -126),
        wt = Number.prototype.clz;
    delete Number.prototype.clz;
    var jt = {
        acosh: function(e) {
            var t = Number(e);
            return Number.isNaN(t) || 1 > e ? 0 / 0 : 1 === t ? 0 : t === 1 / 0 ? t : D(t / Math.E + z(t + 1) * z(t - 1) / Math.E) + 1
        },
        asinh: function(e) {
            var t = Number(e);
            return 0 !== t && S(t) ? 0 > t ? -Math.asinh(-t) : D(t + z(t * t + 1)) : t
        },
        atanh: function(e) {
            var t = Number(e);
            return Number.isNaN(t) || -1 > t || t > 1 ? 0 / 0 : -1 === t ? -(1 / 0) : 1 === t ? 1 / 0 : 0 === t ? t : .5 * D((1 + t) / (1 - t))
        },
        cbrt: function(e) {
            var t = Number(e);
            if (0 === t) return t;
            var n, r = 0 > t;
            return r && (t = -t), t === 1 / 0 ? n = 1 / 0 : (n = Math.exp(D(t) / 3), n = (t / (n * n) + 2 * n) / 3), r ? -n : n
        },
        clz32: function(e) {
            var r = Number(e),
                n = te.ToUint32(r);
            return 0 === n ? 32 : wt ? t(wt, n) : 31 - R(D(n + .5) * Math.LOG2E)
        },
        cosh: function(e) {
            var t = Number(e);
            return 0 === t ? 1 : Number.isNaN(t) ? 0 / 0 : S(t) ? (0 > t && (t = -t), t > 21 ? Math.exp(t) / 2 : (Math.exp(t) + Math.exp(-t)) / 2) : 1 / 0
        },
        expm1: function(e) {
            var t = Number(e);
            if (t === -(1 / 0)) return -1;
            if (!S(t) || 0 === t) return t;
            if (F(t) > .5) return Math.exp(t) - 1;
            for (var r = t, n = 0, o = 1; n + r !== n;) n += r, o += 1, r *= t / o;
            return n
        },
        hypot: function(e, t) {
            for (var r = 0, n = 0, o = 0; o < arguments.length; ++o) {
                var i = F(Number(arguments[o]));
                i > n ? (r *= n / i * (n / i), r += 1, n = i) : r += i > 0 ? i / n * (i / n) : i
            }
            return n === 1 / 0 ? 1 / 0 : n * z(r)
        },
        log2: function(e) {
            return D(e) * Math.LOG2E
        },
        log10: function(e) {
            return D(e) * Math.LOG10E
        },
        log1p: function(e) {
            var t = Number(e);
            return -1 > t || Number.isNaN(t) ? 0 / 0 : 0 === t || t === 1 / 0 ? t : -1 === t ? -(1 / 0) : 1 + t - 1 === 0 ? t : t * (D(1 + t) / (1 + t - 1))
        },
        sign: function(e) {
            var t = Number(e);
            return 0 === t ? t : Number.isNaN(t) ? t : 0 > t ? -1 : 1
        },
        sinh: function(e) {
            var t = Number(e);
            return S(t) && 0 !== t ? F(t) < 1 ? (Math.expm1(t) - Math.expm1(-t)) / 2 : (Math.exp(t - 1) - Math.exp(-t - 1)) * Math.E / 2 : t
        },
        tanh: function(e) {
            var t = Number(e);
            if (Number.isNaN(t) || 0 === t) return t;
            if (t === 1 / 0) return 1;
            if (t === -(1 / 0)) return -1;
            var r = Math.expm1(t),
                n = Math.expm1(-t);
            return r === 1 / 0 ? 1 : n === 1 / 0 ? -1 : (r - n) / (Math.exp(t) + Math.exp(-t))
        },
        trunc: function(e) {
            var t = Number(e);
            return 0 > t ? -R(-t) : R(t)
        },
        imul: function(e, t) {
            var r = te.ToUint32(e),
                n = te.ToUint32(t),
                o = r >>> 16 & 65535,
                i = 65535 & r,
                a = n >>> 16 & 65535,
                u = 65535 & n;
            return i * u + (o * u + i * a << 16 >>> 0) | 0
        },
        fround: function(e) {
            var t = Number(e);
            if (0 === t || t === 1 / 0 || t === -(1 / 0) || X(t)) return t;
            var r = Math.sign(t),
                n = F(t);
            if (Ot > n) return r * gt(n / Ot / dt) * Ot * dt;
            var o = (1 + dt / Number.EPSILON) * n,
                i = o - (o - n);
            return i > mt || X(i) ? r * (1 / 0) : r * i
        }
    };
    b(Math, jt), y(Math, "log1p", jt.log1p, -1e-17 !== Math.log1p(-1e-17)), y(Math, "asinh", jt.asinh, Math.asinh(-1e7) !== -Math.asinh(1e7)), y(Math, "tanh", jt.tanh, -2e-17 !== Math.tanh(-2e-17)), y(Math, "acosh", jt.acosh, Math.acosh(Number.MAX_VALUE) === 1 / 0), y(Math, "cbrt", jt.cbrt, Math.abs(1 - Math.cbrt(1e-300) / 1e-100) / Number.EPSILON > 8), y(Math, "sinh", jt.sinh, -2e-17 !== Math.sinh(-2e-17));
    var St = Math.expm1(10);
    y(Math, "expm1", jt.expm1, St > 22025.465794806718 || 22025.465794806718 > St);
    var Tt = Math.round,
        It = 0 === Math.round(.5 - Number.EPSILON / 4) && 1 === Math.round(-.5 + Number.EPSILON / 3.99),
        Et = bt + 1,
        Mt = 2 * bt - 1,
        Pt = [Et, Mt].every(function(e) {
            return Math.round(e) === e
        });
    y(Math, "round", function(e) {
        var t = R(e),
            r = -1 === t ? -0 : t + 1;
        return .5 > e - t ? t : r
    }, !It || !Pt), B.preserveToString(Math.round, Tt);
    var xt = Math.imul; - 5 !== Math.imul(4294967295, 5) && (Math.imul = jt.imul, B.preserveToString(Math.imul, xt)), 2 !== Math.imul.length && J(Math, "imul", function(t, r) {
        return e(xt, Math, arguments)
    });
    var Nt = function() {
        var e = j.setTimeout;
        if ("function" == typeof e) {
            te.IsPromise = function(e) {
                return te.TypeIsObject(e) ? "undefined" == typeof e._promise ? !1 : !0 : !1
            };
            var n, r = function(e) {
                if (!te.IsConstructor(e)) throw new TypeError("Bad promise constructor");
                var t = this,
                    r = function(e, r) {
                        if (void 0 !== t.resolve || void 0 !== t.reject) throw new TypeError("Bad Promise implementation!");
                        t.resolve = e, t.reject = r
                    };
                if (t.promise = new e(r), !te.IsCallable(t.resolve) || !te.IsCallable(t.reject)) throw new TypeError("Bad promise constructor")
            };
            "undefined" != typeof window && te.IsCallable(window.postMessage) && (n = function() {
                var e = [],
                    t = "zero-timeout-message",
                    r = function(r) {
                        N(e, r), window.postMessage(t, "*")
                    },
                    n = function(r) {
                        if (r.source === window && r.data === t) {
                            if (r.stopPropagation(), 0 === e.length) return;
                            var n = A(e);
                            n()
                        }
                    };
                return window.addEventListener("message", n, !0), r
            });
            var o = function() {
                    var e = j.Promise;
                    return e && e.resolve && function(t) {
                        return e.resolve().then(t)
                    }
                },
                i = te.IsCallable(j.setImmediate) ? j.setImmediate.bind(j) : "object" == typeof process && process.nextTick ? process.nextTick : o() || (te.IsCallable(n) ? n() : function(t) {
                    e(t, 0)
                }),
                a = 1,
                u = 2,
                s = 3,
                c = 4,
                l = 5,
                p = function(e, t) {
                    var o, s, r = e.capabilities,
                        n = e.handler,
                        i = !1;
                    if (n === a) o = t;
                    else if (n === u) o = t, i = !0;
                    else try {
                        o = n(t)
                    } catch (f) {
                        o = f, i = !0
                    }(s = i ? r.reject : r.resolve)(o)
                },
                v = function(e, t) {
                    f(e, function(e) {
                        i(function() {
                            p(e, t)
                        })
                    })
                },
                h = function(e, t) {
                    var r = e._promise,
                        n = r.fulfillReactions;
                    r.result = t, r.fulfillReactions = void 0, r.rejectReactions = void 0, r.state = c, v(n, t)
                },
                y = function(e, t) {
                    var r = e._promise,
                        n = r.rejectReactions;
                    r.result = t, r.fulfillReactions = void 0, r.rejectReactions = void 0, r.state = l, v(n, t)
                },
                g = function(e) {
                    var t = !1,
                        r = function(r) {
                            var n;
                            if (!t) {
                                if (t = !0, r === e) return y(e, new TypeError("Self resolution"));
                                if (!te.TypeIsObject(r)) return h(e, r);
                                try {
                                    n = r.then
                                } catch (o) {
                                    return y(e, o)
                                }
                                return te.IsCallable(n) ? void i(function() {
                                    d(e, r, n)
                                }) : h(e, r)
                            }
                        },
                        n = function(r) {
                            return t ? void 0 : (t = !0, y(e, r))
                        };
                    return {
                        resolve: r,
                        reject: n
                    }
                },
                d = function(e, r, n) {
                    var o = g(e),
                        i = o.resolve,
                        a = o.reject;
                    try {
                        t(n, r, i, a)
                    } catch (u) {
                        a(u)
                    }
                },
                m = function(e) {
                    if (!te.TypeIsObject(e)) throw new TypeError("Promise is not object");
                    var t = e[H];
                    return void 0 !== t && null !== t ? t : e
                },
                O = function Promise(e) {
                    if (!(this instanceof Promise)) throw new TypeError('Constructor Promise requires "new"');
                    if (this && this._promise) throw new TypeError("Bad construction");
                    if (!te.IsCallable(e)) throw new TypeError("not a valid resolver");
                    var t = re(this, Promise, w, {
                            _promise: {
                                result: void 0,
                                state: s,
                                fulfillReactions: [],
                                rejectReactions: []
                            }
                        }),
                        r = g(t),
                        n = r.reject;
                    try {
                        e(r.resolve, n)
                    } catch (o) {
                        n(o)
                    }
                    return t
                },
                w = O.prototype,
                S = function(e, t, r, n) {
                    var o = !1;
                    return function(i) {
                        if (!o && (o = !0, t[e] = i, 0 === --n.count)) {
                            var a = r.resolve;
                            a(t)
                        }
                    }
                },
                T = function(e, t, r) {
                    for (var a, u, n = e.iterator, o = [], i = {
                            count: 1
                        }, s = 0;;) {
                        try {
                            if (a = te.IteratorStep(n), a === !1) {
                                e.done = !0;
                                break
                            }
                            u = a.value
                        } catch (f) {
                            throw e.done = !0, f
                        }
                        o[s] = void 0;
                        var c = t.resolve(u),
                            l = S(s, o, r, i);
                        i.count++, c.then(l, r.reject), s += 1
                    }
                    if (0 === --i.count) {
                        var p = r.resolve;
                        p(o)
                    }
                    return r.promise
                },
                I = function(e, t, r) {
                    for (var o, i, a, n = e.iterator;;) {
                        try {
                            if (o = te.IteratorStep(n), o === !1) {
                                e.done = !0;
                                break
                            }
                            i = o.value
                        } catch (u) {
                            throw e.done = !0, u
                        }
                        a = t.resolve(i), a.then(r.resolve, r.reject)
                    }
                    return r.promise
                };
            return b(O, {
                all: function(e) {
                    var o, i, t = m(this),
                        n = new r(t);
                    try {
                        return o = te.GetIterator(e), i = {
                            iterator: o,
                            done: !1
                        }, T(i, t, n)
                    } catch (a) {
                        if (i && !i.done) try {
                            te.IteratorClose(o, !0)
                        } catch (u) {
                            a = u
                        }
                        var s = n.reject;
                        return s(a), n.promise
                    }
                },
                race: function(e) {
                    var o, i, t = m(this),
                        n = new r(t);
                    try {
                        return o = te.GetIterator(e), i = {
                            iterator: o,
                            done: !1
                        }, I(i, t, n)
                    } catch (a) {
                        if (i && !i.done) try {
                            te.IteratorClose(o, !0)
                        } catch (u) {
                            a = u
                        }
                        var s = n.reject;
                        return s(a), n.promise
                    }
                },
                reject: function(e) {
                    var t = this,
                        n = new r(t),
                        o = n.reject;
                    return o(e), n.promise
                },
                resolve: function(e) {
                    var t = this;
                    if (te.IsPromise(e)) {
                        var n = e.constructor;
                        if (n === t) return e
                    }
                    var o = new r(t),
                        i = o.resolve;
                    return i(e), o.promise
                }
            }), b(w, {
                "catch": function(e) {
                    return this.then(void 0, e)
                },
                then: function(e, t) {
                    var n = this;
                    if (!te.IsPromise(n)) throw new TypeError("not a promise");
                    var o = te.SpeciesConstructor(n, O),
                        f = new r(o);
                    te.IsCallable(e) || (e = a), te.IsCallable(t) || (t = u);
                    var b, v = {
                            capabilities: f,
                            handler: e
                        },
                        h = {
                            capabilities: f,
                            handler: t
                        },
                        y = n._promise;
                    if (y.state === s) N(y.fulfillReactions, v), N(y.rejectReactions, h);
                    else if (y.state === c) b = y.result, i(function() {
                        p(v, b)
                    });
                    else {
                        if (y.state !== l) throw new TypeError("unexpected Promise state");
                        b = y.result, i(function() {
                            p(h, b)
                        })
                    }
                    return f.promise
                }
            }), O
        }
    }();
    if (j.Promise && (delete j.Promise.accept, delete j.Promise.defer, delete j.Promise.prototype.chain), "function" == typeof Nt) {
        b(j, {
            Promise: Nt
        });
        var Ct = d(j.Promise, function(e) {
                return e.resolve(42).then(function() {}) instanceof e
            }),
            At = !n(function() {
                j.Promise.reject(42).then(null, 5).then(null, G)
            }),
            _t = n(function() {
                j.Promise.call(3, G)
            }),
            kt = function(e) {
                var t = e.resolve(5);
                t.constructor = {};
                var r = e.resolve(t);
                return t === r
            }(j.Promise);
        Ct && At && _t && !kt || (Promise = Nt, J(j, "Promise", Nt)), U(Promise)
    }
    var Rt = function(e) {
            var t = Object.keys(c(e, function(e, t) {
                return e[t] = !0, e
            }, {}));
            return e.join(":") === t.join(":")
        },
        Ft = Rt(["z", "a", "bb"]),
        Dt = Rt(["z", 1, "a", "3", 2]);
    if (u) {
        var zt = function(e) {
                if (!Ft) return null;
                var t = typeof e;
                return "undefined" === t || null === e ? "^" + String(e) : "string" === t ? "$" + e : "number" === t ? Dt ? e : "n" + e : "boolean" === t ? "b" + e : null
            },
            Lt = function() {
                return Object.create ? Object.create(null) : {}
            },
            qt = function(e, r, n) {
                if (Array.isArray(n) || K.string(n)) f(n, function(e) {
                    r.set(e[0], e[1])
                });
                else if (n instanceof e) t(e.prototype.forEach, n, function(e, t) {
                    r.set(t, e)
                });
                else {
                    var o, i;
                    if (null !== n && "undefined" != typeof n) {
                        if (i = r.set, !te.IsCallable(i)) throw new TypeError("bad map");
                        o = te.GetIterator(n)
                    }
                    if ("undefined" != typeof o)
                        for (;;) {
                            var a = te.IteratorStep(o);
                            if (a === !1) break;
                            var u = a.value;
                            try {
                                if (!te.TypeIsObject(u)) throw new TypeError("expected iterable of pairs");
                                t(i, r, u[0], u[1])
                            } catch (s) {
                                throw te.IteratorClose(o, !0), s
                            }
                        }
                }
            },
            Gt = function(e, r, n) {
                if (Array.isArray(n) || K.string(n)) f(n, function(e) {
                    r.add(e)
                });
                else if (n instanceof e) t(e.prototype.forEach, n, function(e) {
                    r.add(e)
                });
                else {
                    var o, i;
                    if (null !== n && "undefined" != typeof n) {
                        if (i = r.add, !te.IsCallable(i)) throw new TypeError("bad set");
                        o = te.GetIterator(n)
                    }
                    if ("undefined" != typeof o)
                        for (;;) {
                            var a = te.IteratorStep(o);
                            if (a === !1) break;
                            var u = a.value;
                            try {
                                t(i, r, u)
                            } catch (s) {
                                throw te.IteratorClose(o, !0), s
                            }
                        }
                }
            },
            Wt = {
                Map: function() {
                    var e = {},
                        r = function(e, t) {
                            this.key = e, this.value = t, this.next = null, this.prev = null
                        };
                    r.prototype.isRemoved = function() {
                        return this.key === e
                    };
                    var n = function(e) {
                            return !!e._es6map
                        },
                        o = function(e, t) {
                            if (!te.TypeIsObject(e) || !n(e)) throw new TypeError("Method Map.prototype." + t + " called on incompatible receiver " + String(e))
                        },
                        i = function(e, t) {
                            o(e, "[[MapIterator]]"), this.head = e._head, this.i = this.head, this.kind = t
                        };
                    i.prototype = {
                        next: function() {
                            var n, e = this.i,
                                t = this.kind,
                                r = this.head;
                            if ("undefined" == typeof this.i) return {
                                value: void 0,
                                done: !0
                            };
                            for (; e.isRemoved() && e !== r;) e = e.prev;
                            for (; e.next !== r;)
                                if (e = e.next, !e.isRemoved()) return n = "key" === t ? e.key : "value" === t ? e.value : [e.key, e.value], this.i = e, {
                                    value: n,
                                    done: !1
                                };
                            return this.i = void 0, {
                                value: void 0,
                                done: !0
                            }
                        }
                    }, Y(i.prototype);
                    var a = function Map() {
                            if (!(this instanceof Map)) throw new TypeError('Constructor Map requires "new"');

                            if (this && this._es6map) throw new TypeError("Bad construction");
                            var e = re(this, Map, u, {
                                    _es6map: !0,
                                    _head: null,
                                    _storage: Lt(),
                                    _size: 0
                                }),
                                t = new r(null, null);
                            return t.next = t.prev = t, e._head = t, arguments.length > 0 && qt(Map, e, arguments[0]), e
                        },
                        u = a.prototype;
                    return B.getter(u, "size", function() {
                        if ("undefined" == typeof this._size) throw new TypeError("size method called on incompatible Map");
                        return this._size
                    }), b(u, {
                        get: function(e) {
                            o(this, "get");
                            var t = zt(e);
                            if (null !== t) {
                                var r = this._storage[t];
                                return r ? r.value : void 0
                            }
                            for (var n = this._head, i = n;
                                (i = i.next) !== n;)
                                if (te.SameValueZero(i.key, e)) return i.value
                        },
                        has: function(e) {
                            o(this, "has");
                            var t = zt(e);
                            if (null !== t) return "undefined" != typeof this._storage[t];
                            for (var r = this._head, n = r;
                                (n = n.next) !== r;)
                                if (te.SameValueZero(n.key, e)) return !0;
                            return !1
                        },
                        set: function(e, t) {
                            o(this, "set");
                            var a, n = this._head,
                                i = n,
                                u = zt(e);
                            if (null !== u) {
                                if ("undefined" != typeof this._storage[u]) return this._storage[u].value = t, this;
                                a = this._storage[u] = new r(e, t), i = n.prev
                            }
                            for (;
                                (i = i.next) !== n;)
                                if (te.SameValueZero(i.key, e)) return i.value = t, this;
                            return a = a || new r(e, t), te.SameValue(-0, e) && (a.key = 0), a.next = this._head, a.prev = this._head.prev, a.prev.next = a, a.next.prev = a, this._size += 1, this
                        },
                        "delete": function(t) {
                            o(this, "delete");
                            var r = this._head,
                                n = r,
                                i = zt(t);
                            if (null !== i) {
                                if ("undefined" == typeof this._storage[i]) return !1;
                                n = this._storage[i].prev, delete this._storage[i]
                            }
                            for (;
                                (n = n.next) !== r;)
                                if (te.SameValueZero(n.key, t)) return n.key = n.value = e, n.prev.next = n.next, n.next.prev = n.prev, this._size -= 1, !0;
                            return !1
                        },
                        clear: function() {
                            o(this, "clear"), this._size = 0, this._storage = Lt();
                            for (var t = this._head, r = t, n = r.next;
                                (r = n) !== t;) r.key = r.value = e, n = r.next, r.next = r.prev = t;
                            t.next = t.prev = t
                        },
                        keys: function() {
                            return o(this, "keys"), new i(this, "key")
                        },
                        values: function() {
                            return o(this, "values"), new i(this, "value")
                        },
                        entries: function() {
                            return o(this, "entries"), new i(this, "key+value")
                        },
                        forEach: function(e) {
                            o(this, "forEach");
                            for (var r = arguments.length > 1 ? arguments[1] : null, n = this.entries(), i = n.next(); !i.done; i = n.next()) r ? t(e, r, i.value[1], i.value[0], this) : e(i.value[1], i.value[0], this)
                        }
                    }), Y(u, u.entries), a
                }(),
                Set: function() {
                    var e = function(e) {
                            return e._es6set && "undefined" != typeof e._storage
                        },
                        r = function(t, r) {
                            if (!te.TypeIsObject(t) || !e(t)) throw new TypeError("Set.prototype." + r + " called on incompatible receiver " + String(t))
                        },
                        n = function Set() {
                            if (!(this instanceof Set)) throw new TypeError('Constructor Set requires "new"');
                            if (this && this._es6set) throw new TypeError("Bad construction");
                            var e = re(this, Set, o, {
                                _es6set: !0,
                                "[[SetData]]": null,
                                _storage: Lt()
                            });
                            if (!e._es6set) throw new TypeError("bad set");
                            return arguments.length > 0 && Gt(Set, e, arguments[0]), e
                        },
                        o = n.prototype,
                        i = function(e) {
                            if (!e["[[SetData]]"]) {
                                var t = e["[[SetData]]"] = new Wt.Map;
                                f(Object.keys(e._storage), function(e) {
                                    if ("^null" === e) e = null;
                                    else if ("^undefined" === e) e = void 0;
                                    else {
                                        var r = e.charAt(0);
                                        e = "$" === r ? x(e, 1) : "n" === r ? +x(e, 1) : "b" === r ? "btrue" === e : +e
                                    }
                                    t.set(e, e)
                                }), e._storage = null
                            }
                        };
                    return B.getter(n.prototype, "size", function() {
                        return r(this, "size"), i(this), this["[[SetData]]"].size
                    }), b(n.prototype, {
                        has: function(e) {
                            r(this, "has");
                            var t;
                            return this._storage && null !== (t = zt(e)) ? !!this._storage[t] : (i(this), this["[[SetData]]"].has(e))
                        },
                        add: function(e) {
                            r(this, "add");
                            var t;
                            return this._storage && null !== (t = zt(e)) ? (this._storage[t] = !0, this) : (i(this), this["[[SetData]]"].set(e, e), this)
                        },
                        "delete": function(e) {
                            r(this, "delete");
                            var t;
                            if (this._storage && null !== (t = zt(e))) {
                                var n = L(this._storage, t);
                                return delete this._storage[t] && n
                            }
                            return i(this), this["[[SetData]]"]["delete"](e)
                        },
                        clear: function() {
                            r(this, "clear"), this._storage ? this._storage = Lt() : this["[[SetData]]"].clear()
                        },
                        values: function() {
                            return r(this, "values"), i(this), this["[[SetData]]"].values()
                        },
                        entries: function() {
                            return r(this, "entries"), i(this), this["[[SetData]]"].entries()
                        },
                        forEach: function(e) {
                            r(this, "forEach");
                            var n = arguments.length > 1 ? arguments[1] : null,
                                o = this;
                            i(o), this["[[SetData]]"].forEach(function(r, i) {
                                n ? t(e, n, i, i, o) : e(i, i, o)
                            })
                        }
                    }), y(n.prototype, "keys", n.prototype.values, !0), Y(n.prototype, n.prototype.values), n
                }()
            };
        if (j.Map || j.Set) {
            var Ht = o(function() {
                return 2 === new Map([
                    [1, 2]
                ]).get(1)
            });
            if (!Ht) {
                var Bt = j.Map;
                j.Map = function Map() {
                    if (!(this instanceof Map)) throw new TypeError('Constructor Map requires "new"');
                    var e = new Bt;
                    return arguments.length > 0 && qt(Map, e, arguments[0]), Object.setPrototypeOf(e, j.Map.prototype), y(e, "constructor", Map, !0), e
                }, j.Map.prototype = g(Bt.prototype), B.preserveToString(j.Map, Bt)
            }
            var Vt = new Map,
                $t = function(e) {
                    return e["delete"](0), e["delete"](-0), e.set(0, 3), e.get(-0, 4), 3 === e.get(0) && 4 === e.get(-0)
                }(Vt),
                Ut = Vt.set(1, 2) === Vt;
            if (!$t || !Ut) {
                var Kt = Map.prototype.set;
                J(Map.prototype, "set", function(e, r) {
                    return t(Kt, this, 0 === e ? 0 : e, r), this
                })
            }
            if (!$t) {
                var Xt = Map.prototype.get,
                    Zt = Map.prototype.has;
                b(Map.prototype, {
                    get: function(e) {
                        return t(Xt, this, 0 === e ? 0 : e)
                    },
                    has: function(e) {
                        return t(Zt, this, 0 === e ? 0 : e)
                    }
                }, !0), B.preserveToString(Map.prototype.get, Xt), B.preserveToString(Map.prototype.has, Zt)
            }
            var Jt = new Set,
                Qt = function(e) {
                    return e["delete"](0), e.add(-0), !e.has(0)
                }(Jt),
                Yt = Jt.add(1) === Jt;
            if (!Qt || !Yt) {
                var er = Set.prototype.add;
                Set.prototype.add = function(e) {
                    return t(er, this, 0 === e ? 0 : e), this
                }, B.preserveToString(Set.prototype.add, er)
            }
            if (!Qt) {
                var tr = Set.prototype.has;
                Set.prototype.has = function(e) {
                    return t(tr, this, 0 === e ? 0 : e)
                }, B.preserveToString(Set.prototype.has, tr);
                var rr = Set.prototype["delete"];
                Set.prototype["delete"] = function(e) {
                    return t(rr, this, 0 === e ? 0 : e)
                }, B.preserveToString(Set.prototype["delete"], rr)
            }
            var nr = d(j.Map, function(e) {
                    var t = new e([]);
                    return t.set(42, 42), t instanceof e
                }),
                or = Object.setPrototypeOf && !nr,
                ir = function() {
                    try {
                        return !(j.Map() instanceof j.Map)
                    } catch (e) {
                        return e instanceof TypeError
                    }
                }();
            if (0 !== j.Map.length || or || !ir) {
                var ar = j.Map;
                j.Map = function Map() {
                    if (!(this instanceof Map)) throw new TypeError('Constructor Map requires "new"');
                    var e = new ar;
                    return arguments.length > 0 && qt(Map, e, arguments[0]), Object.setPrototypeOf(e, Map.prototype), y(e, "constructor", Map, !0), e
                }, j.Map.prototype = ar.prototype, B.preserveToString(j.Map, ar)
            }
            var ur = d(j.Set, function(e) {
                    var t = new e([]);
                    return t.add(42, 42), t instanceof e
                }),
                sr = Object.setPrototypeOf && !ur,
                fr = function() {
                    try {
                        return !(j.Set() instanceof j.Set)
                    } catch (e) {
                        return e instanceof TypeError
                    }
                }();
            if (0 !== j.Set.length || sr || !fr) {
                var cr = j.Set;
                j.Set = function Set() {
                    if (!(this instanceof Set)) throw new TypeError('Constructor Set requires "new"');
                    var e = new cr;
                    return arguments.length > 0 && Gt(Set, e, arguments[0]), Object.setPrototypeOf(e, Set.prototype), y(e, "constructor", Set, !0), e
                }, j.Set.prototype = cr.prototype, B.preserveToString(j.Set, cr)
            }
            var lr = !o(function() {
                return (new Map).keys().next().done
            });
            if (("function" != typeof j.Map.prototype.clear || 0 !== (new j.Set).size || 0 !== (new j.Map).size || "function" != typeof j.Map.prototype.keys || "function" != typeof j.Set.prototype.keys || "function" != typeof j.Map.prototype.forEach || "function" != typeof j.Set.prototype.forEach || i(j.Map) || i(j.Set) || "function" != typeof(new j.Map).keys().next || lr || !nr) && (delete j.Map, delete j.Set, b(j, {
                    Map: Wt.Map,
                    Set: Wt.Set
                }, !0)), j.Set.prototype.keys !== j.Set.prototype.values && y(j.Set.prototype, "keys", j.Set.prototype.values, !0), Y(Object.getPrototypeOf((new j.Map).keys())), Y(Object.getPrototypeOf((new j.Set).keys())), s && "has" !== j.Set.prototype.has.name) {
                var pr = j.Set.prototype.has;
                J(j.Set.prototype, "has", function(e) {
                    return t(pr, this, e)
                })
            }
        }
        b(j, Wt), U(j.Map), U(j.Set)
    }
    j.Reflect || y(j, "Reflect", {});
    var vr = j.Reflect,
        hr = function(e) {
            if (!te.TypeIsObject(e)) throw new TypeError("target must be an object")
        },
        yr = {
            apply: function() {
                return e(te.Call, null, arguments)
            },
            construct: function(e, t) {
                if (!te.IsConstructor(e)) throw new TypeError("First argument must be a constructor.");
                var r = arguments.length < 3 ? e : arguments[2];
                if (!te.IsConstructor(r)) throw new TypeError("new.target must be a constructor.");
                return te.Construct(e, t, r, "internal")
            },
            deleteProperty: function(e, t) {
                if (hr(e), u) {
                    var r = Object.getOwnPropertyDescriptor(e, t);
                    if (r && !r.configurable) return !1
                }
                return delete e[t]
            },
            enumerate: function(e) {
                return hr(e), new he(e, "key")
            },
            has: function(e, t) {
                return hr(e), t in e
            }
        };
    Object.getOwnPropertyNames && Object.assign(yr, {
        ownKeys: function(e) {
            hr(e);
            var t = Object.getOwnPropertyNames(e);
            return te.IsCallable(Object.getOwnPropertySymbols) && C(t, Object.getOwnPropertySymbols(e)), t
        }
    });
    var br = function(e) {
        return !n(e)
    };
    if (Object.preventExtensions && Object.assign(yr, {
            isExtensible: function(e) {
                return hr(e), Object.isExtensible(e)
            },
            preventExtensions: function(e) {
                return hr(e), br(function() {
                    Object.preventExtensions(e)
                })
            }
        }), u) {
        var gr = function(e, r, n) {
                var o = Object.getOwnPropertyDescriptor(e, r);
                if (!o) {
                    var i = Object.getPrototypeOf(e);
                    return null === i ? void 0 : gr(i, r, n)
                }
                return "value" in o ? o.value : o.get ? t(o.get, n) : void 0
            },
            dr = function(e, r, n, o) {
                var i = Object.getOwnPropertyDescriptor(e, r);
                if (!i) {
                    var a = Object.getPrototypeOf(e);
                    if (null !== a) return dr(a, r, n, o);
                    i = {
                        value: void 0,
                        writable: !0,
                        enumerable: !0,
                        configurable: !0
                    }
                }
                if ("value" in i) {
                    if (!i.writable) return !1;
                    if (!te.TypeIsObject(o)) return !1;
                    var u = Object.getOwnPropertyDescriptor(o, r);
                    return u ? vr.defineProperty(o, r, {
                        value: n
                    }) : vr.defineProperty(o, r, {
                        value: n,
                        writable: !0,
                        enumerable: !0,
                        configurable: !0
                    })
                }
                return i.set ? (t(i.set, o, n), !0) : !1
            };
        Object.assign(yr, {
            defineProperty: function(e, t, r) {
                return hr(e), br(function() {
                    Object.defineProperty(e, t, r)
                })
            },
            getOwnPropertyDescriptor: function(e, t) {
                return hr(e), Object.getOwnPropertyDescriptor(e, t)
            },
            get: function(e, t) {
                hr(e);
                var r = arguments.length > 2 ? arguments[2] : e;
                return gr(e, t, r)
            },
            set: function(e, t, r) {
                hr(e);
                var n = arguments.length > 3 ? arguments[3] : e;
                return dr(e, t, r, n)
            }
        })
    }
    if (Object.getPrototypeOf) {
        var mr = Object.getPrototypeOf;
        yr.getPrototypeOf = function(e) {
            return hr(e), mr(e)
        }
    }
    if (Object.setPrototypeOf && yr.getPrototypeOf) {
        var Or = function(e, t) {
            for (; t;) {
                if (e === t) return !0;
                t = yr.getPrototypeOf(t)
            }
            return !1
        };
        Object.assign(yr, {
            setPrototypeOf: function(e, t) {
                if (hr(e), null !== t && !te.TypeIsObject(t)) throw new TypeError("proto must be an object or null");
                return t === vr.getPrototypeOf(e) ? !0 : vr.isExtensible && !vr.isExtensible(e) ? !1 : Or(e, t) ? !1 : (Object.setPrototypeOf(e, t), !0)
            }
        })
    }
    var wr = function(e, t) {
        if (te.IsCallable(j.Reflect[e])) {
            var r = o(function() {
                return j.Reflect[e](1), j.Reflect[e](0 / 0), j.Reflect[e](!0), !0
            });
            r && J(j.Reflect, e, t)
        } else y(j.Reflect, e, t)
    };
    if (Object.keys(yr).forEach(function(e) {
            wr(e, yr[e])
        }), s && "getPrototypeOf" !== j.Reflect.getPrototypeOf.name) {
        var jr = j.Reflect.getPrototypeOf;
        J(j.Reflect, "getPrototypeOf", function(e) {
            return t(jr, j.Reflect, e)
        })
    }
    if (j.Reflect.setPrototypeOf && o(function() {
            return j.Reflect.setPrototypeOf(1, {}), !0
        }) && J(j.Reflect, "setPrototypeOf", yr.setPrototypeOf), j.Reflect.defineProperty && o(function() {
            return j.Reflect.defineProperty(1, "test", {
                value: 1
            }), !0
        }) && J(j.Reflect, "defineProperty", yr.defineProperty), j.Reflect.construct && (o(function() {
            var e = function() {};
            return j.Reflect.construct(function() {}, [], e) instanceof e
        }) || J(j.Reflect, "construct", yr.construct)), "Invalid Date" !== String(new Date(0 / 0))) {
        var Sr = Date.prototype.toString,
            Tr = function() {
                var e = +this;
                return e !== e ? "Invalid Date" : t(Sr, this)
            };
        J(Date.prototype, "toString", Tr)
    }
    var Ir = {
        anchor: function(e) {
            return te.CreateHTML(this, "a", "name", e)
        },
        big: function() {
            return te.CreateHTML(this, "big", "", "")
        },
        blink: function() {
            return te.CreateHTML(this, "blink", "", "")
        },
        bold: function() {
            return te.CreateHTML(this, "b", "", "")
        },
        fixed: function() {
            return te.CreateHTML(this, "tt", "", "")
        },
        fontcolor: function(e) {
            return te.CreateHTML(this, "font", "color", e)
        },
        fontsize: function(e) {
            return te.CreateHTML(this, "font", "size", e)
        },
        italics: function() {
            return te.CreateHTML(this, "i", "", "")
        },
        link: function(e) {
            return te.CreateHTML(this, "a", "href", e)
        },
        small: function() {
            return te.CreateHTML(this, "small", "", "")
        },
        strike: function() {
            return te.CreateHTML(this, "strike", "", "")
        },
        sub: function() {
            return te.CreateHTML(this, "sub", "", "")
        },
        sup: function() {
            return te.CreateHTML(this, "sup", "", "")
        }
    };
    return f(Object.keys(Ir), function(e) {
        var r = String.prototype[e],
            n = !1;
        if (te.IsCallable(r)) {
            var o = t(r, "", ' " '),
                i = P([], o.match(/"/g)).length;
            n = o !== o.toLowerCase() || i > 2
        } else n = !0;
        n && y(String.prototype, e, Ir[e], !0)
    }), j
});