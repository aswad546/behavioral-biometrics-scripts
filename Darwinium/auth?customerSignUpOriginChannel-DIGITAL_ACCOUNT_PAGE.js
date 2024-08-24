/*
  Found on https://www.asaas.com/login/auth?customerSignUpOriginChannel=DIGITAL_ACCOUNT_PAGE on August 23rd 2024
  Collects the following features (What is collected is configurable):
  Behavioral(16): ["Touch.pageX", "Touch.radiusY", "MouseEvent.offsetX", "Touch.radiusX", "MouseEvent.clientY", "MouseEvent.toElement", "TouchEvent.touches", "MouseEvent.clientX", "Touch.clientX", "MouseEvent.relatedTarget", "Touch.pageY", "MouseEvent.offsetY", "PointerEvent.pointerType", "Touch.clientY", "MouseEvent.type", "MouseEvent.button"]
  FP (61): ["HTMLCanvasElement.width", "CanvasRenderingContext2D.closePath", "Navigator.webdriver", "OscillatorNode.connect", "Screen.width", "CanvasRenderingContext2D.fillRect", "Navigator.userAgentData", "CanvasRenderingContext2D.fillStyle", "WebGLRenderingContext.getExtension", "HTMLCanvasElement.height", "Screen.availTop", "Navigator.userAgent", "OscillatorNode.frequency", "Window.requestAnimationFrame", "PermissionStatus.state", "AudioBuffer.getChannelData", "DynamicsCompressorNode.attack", "HTMLCanvasElement.getContext", "MimeType.type", "CanvasRenderingContext2D.fillText", "DynamicsCompressorNode.threshold", "DynamicsCompressorNode.connect", "OfflineAudioContext.createOscillator", "Screen.availLeft", "CanvasRenderingContext2D.fill", "Window.innerWidth", "OfflineAudioContext.createDynamicsCompressor", "Navigator.vendor", "Navigator.appVersion", "Navigator.connection", "CanvasRenderingContext2D.font", "Plugin.name", "Navigator.platform", "Navigator.plugins", "OfflineAudioContext.state", "OfflineAudioContext.startRendering", "Navigator.hardwareConcurrency", "CanvasRenderingContext2D.arc", "Screen.height", "CanvasRenderingContext2D.textBaseline", "Window.indexedDB", "Navigator.geolocation", "DynamicsCompressorNode.knee", "CanvasRenderingContext2D.rect", "WebGLRenderingContext.getParameter", "PluginArray.length", "CanvasRenderingContext2D.beginPath", "Screen.availWidth", "OfflineAudioContext.destination", "Navigator.languages", "MimeType.suffixes", "HTMLDocument.cookie", "Plugin.length", "OscillatorNode.type", "NavigatorUAData.getHighEntropyValues", "Plugin.description", "Screen.colorDepth", "CanvasRenderingContext2D.isPointInPath", "Navigator.language", "Screen.availHeight", "Navigator.maxTouchPoints"]
  Aggregation score: 12 all FP

*/

var dwn_ns = dwn_ns || {};
dwn_ns.dwn_dyn = dwn_ns.dwn_dyn || {};
dwn_ns.dwn_dyn["dwn_submit"] = {
    "selector": "form[action='/j_spring_security_check']"
};
dwn_ns.geo_location_enabled = true;
dwn_ns.device_sensor_enabled = false;
dwn_ns.dwn_fp_fetch = false;
dwn_ns.dwn_fp_ajax = false;
dwn_ns.post_whitelist = "none";
dwn_ns.use_deep_query_selector = false;
dwn_ns.profiling_debug = true;
dwn_ns.crypto_nonce = "ad758eb4a2dc47d8b9cb32cc6c5e0e1a";
(function() {
    /*

Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/
    function aa(d) {
        var e = 0;
        return function() {
            return e < d.length ? {
                done: !1,
                value: d[e++]
            } : {
                done: !0
            }
        }
    }
    function ba(d) {
        var e = "undefined" != typeof Symbol && Symbol.iterator && d[Symbol.iterator];
        return e ? e.call(d) : {
            next: aa(d)
        }
    }
    function ca(d) {
        if (!(d instanceof Array)) {
            d = ba(d);
            for (var e, b = []; !(e = d.next()).done; )
                b.push(e.value);
            d = b
        }
        return d
    }
    var ia = "function" == typeof Object.defineProperties ? Object.defineProperty : function(d, e, b) {
        d != Array.prototype && d != Object.prototype && (d[e] = b.value)
    }
      , la = "undefined" != typeof window && window === this ? this : "undefined" != typeof global && null != global ? global : this;
    function na(d, e) {
        this.a = d;
        ia(this, "description", {
            configurable: !0,
            writable: !0,
            value: e
        })
    }
    na.prototype.toString = function() {
        return this.a
    }
    ;
    var oa = function() {
        function d(b) {
            if (this instanceof d)
                throw new TypeError("Symbol is not a constructor");
            return new na("jscomp_symbol_" + (b || "") + "_" + e++,b)
        }
        var e = 0;
        return d
    }(), pa;
    if ("function" == typeof Object.setPrototypeOf)
        pa = Object.setPrototypeOf;
    else {
        var qa;
        a: {
            var ra = {
                o: !0
            }
              , sa = {};
            try {
                sa.__proto__ = ra;
                qa = sa.o;
                break a
            } catch (d) {}
            qa = !1
        }
        pa = qa ? function(d, e) {
            d.__proto__ = e;
            if (d.__proto__ !== e)
                throw new TypeError(d + " is not extensible");
            return d
        }
        : null
    }
    var ta = pa;
    function wa(d, e, b) {
        if (null == d)
            throw new TypeError("The 'this' value for String.prototype." + b + " must not be null or undefined");
        if (e instanceof RegExp)
            throw new TypeError("First argument to String.prototype." + b + " must not be a regular expression");
        return d + ""
    }
    function xa(d, e) {
        if (e) {
            var b = la;
            d = d.split(".");
            for (var h = 0; h < d.length - 1; h++) {
                var k = d[h];
                k in b || (b[k] = {});
                b = b[k]
            }
            d = d[d.length - 1];
            h = b[d];
            e = e(h);
            e != h && null != e && ia(b, d, {
                configurable: !0,
                writable: !0,
                value: e
            })
        }
    }
    xa("String.prototype.startsWith", function(d) {
        return d ? d : function(e, b) {
            var h = wa(this, e, "startsWith")
              , k = h.length
              , m = e.length;
            b = Math.max(0, Math.min(b | 0, h.length));
            for (var n = 0; n < m && b < k; )
                if (h[b++] != e[n++])
                    return !1;
            return n >= m
        }
    });
    xa("Array.prototype.find", function(d) {
        return d ? d : function(e, b) {
            a: {
                var h = this;
                h instanceof String && (h = String(h));
                for (var k = h.length, m = 0; m < k; m++) {
                    var n = h[m];
                    if (e.call(b, n, m, h)) {
                        e = n;
                        break a
                    }
                }
                e = void 0
            }
            return e
        }
    });
    xa("Promise", function(d) {
        function e(n) {
            this.c = 0;
            this.m = void 0;
            this.a = [];
            var r = this.f();
            try {
                n(r.resolve, r.reject)
            } catch (u) {
                r.reject(u)
            }
        }
        function b() {
            this.a = null
        }
        function h(n) {
            return n instanceof e ? n : new e(function(r) {
                r(n)
            }
            )
        }
        if (d)
            return d;
        b.prototype.c = function(n) {
            if (null == this.a) {
                this.a = [];
                var r = this;
                this.f(function() {
                    r.m()
                })
            }
            this.a.push(n)
        }
        ;
        var k = la.setTimeout;
        b.prototype.f = function(n) {
            k(n, 0)
        }
        ;
        b.prototype.m = function() {
            for (; this.a && this.a.length; ) {
                var n = this.a;
                this.a = [];
                for (var r = 0; r < n.length; ++r) {
                    var u = n[r];
                    n[r] = null;
                    try {
                        u()
                    } catch (v) {
                        this.g(v)
                    }
                }
            }
            this.a = null
        }
        ;
        b.prototype.g = function(n) {
            this.f(function() {
                throw n;
            })
        }
        ;
        e.prototype.f = function() {
            function n(v) {
                return function(y) {
                    u || (u = !0,
                    v.call(r, y))
                }
            }
            var r = this
              , u = !1;
            return {
                resolve: n(this.ta),
                reject: n(this.g)
            }
        }
        ;
        e.prototype.ta = function(n) {
            if (n === this)
                this.g(new TypeError("A Promise cannot resolve to itself"));
            else if (n instanceof e)
                this.Xa(n);
            else {
                a: switch (typeof n) {
                case "object":
                    var r = null != n;
                    break a;
                case "function":
                    r = !0;
                    break a;
                default:
                    r = !1
                }
                r ? this.M(n) : this.w(n)
            }
        }
        ;
        e.prototype.M = function(n) {
            var r = void 0;
            try {
                r = n.then
            } catch (u) {
                this.g(u);
                return
            }
            "function" == typeof r ? this.Mc(r, n) : this.w(n)
        }
        ;
        e.prototype.g = function(n) {
            this.C(2, n)
        }
        ;
        e.prototype.w = function(n) {
            this.C(1, n)
        }
        ;
        e.prototype.C = function(n, r) {
            if (0 != this.c)
                throw Error("Cannot settle(" + n + ", " + r + "): Promise already settled in state" + this.c);
            this.c = n;
            this.m = r;
            this.H()
        }
        ;
        e.prototype.H = function() {
            if (null != this.a) {
                for (var n = 0; n < this.a.length; ++n)
                    m.c(this.a[n]);
                this.a = null
            }
        }
        ;
        var m = new b;
        e.prototype.Xa = function(n) {
            var r = this.f();
            n.Ca(r.resolve, r.reject)
        }
        ;
        e.prototype.Mc = function(n, r) {
            var u = this.f();
            try {
                n.call(r, u.resolve, u.reject)
            } catch (v) {
                u.reject(v)
            }
        }
        ;
        e.prototype.then = function(n, r) {
            function u(w, N) {
                return "function" == typeof w ? function(H) {
                    try {
                        v(w(H))
                    } catch (q) {
                        y(q)
                    }
                }
                : N
            }
            var v, y, x = new e(function(w, N) {
                v = w;
                y = N
            }
            );
            this.Ca(u(n, v), u(r, y));
            return x
        }
        ;
        e.prototype.catch = function(n) {
            return this.then(void 0, n)
        }
        ;
        e.prototype.Ca = function(n, r) {
            function u() {
                switch (v.c) {
                case 1:
                    n(v.m);
                    break;
                case 2:
                    r(v.m);
                    break;
                default:
                    throw Error("Unexpected state: " + v.c);
                }
            }
            var v = this;
            null == this.a ? m.c(u) : this.a.push(u)
        }
        ;
        e.resolve = h;
        e.reject = function(n) {
            return new e(function(r, u) {
                u(n)
            }
            )
        }
        ;
        e.race = function(n) {
            return new e(function(r, u) {
                for (var v = ba(n), y = v.next(); !y.done; y = v.next())
                    h(y.value).Ca(r, u)
            }
            )
        }
        ;
        e.all = function(n) {
            var r = ba(n)
              , u = r.next();
            return u.done ? h([]) : new e(function(v, y) {
                function x(H) {
                    return function(q) {
                        w[H] = q;
                        N--;
                        0 == N && v(w)
                    }
                }
                var w = []
                  , N = 0;
                do
                    w.push(void 0),
                    N++,
                    h(u.value).Ca(x(w.length - 1), y),
                    u = r.next();
                while (!u.done)
            }
            )
        }
        ;
        return e
    });
    xa("String.prototype.includes", function(d) {
        return d ? d : function(e, b) {
            return -1 !== wa(this, e, "includes").indexOf(e, b || 0)
        }
    });
    xa("Object.entries", function(d) {
        return d ? d : function(e) {
            var b = [], h;
            for (h in e)
                Object.prototype.hasOwnProperty.call(e, h) && b.push([h, e[h]]);
            return b
        }
    });
    dwn_ns.b || (dwn_ns.xb = function(d) {
        var e = !1;
        try {
            if ("boolean" === typeof dwn_ns.enable_log_all)
                return dwn_ns.enable_log_all;
            e = false;
            "boolean" === typeof e && e || "boolean" === typeof dwn_ns[d] && (e = dwn_ns[d])
        } catch (b) {}
        return e
    }
    ,
    dwn_ns.b = function(d) {
        "string" !== typeof d && (d = "common");
        var e = "enable_log";
        e = e + "_" + d;
        return function() {
            try {
                var b = arguments;
                if (!(0 >= b.length)) {
                    var h = !1
                      , k = dwn_ns.xb(e)
                      , m = b[0];
                    if ("string" === typeof m) {
                        var n = m.toLowerCase();
                        if (n.startsWith("exception") || n.startsWith("failed"))
                            h = !0
                    }
                    if (h || k) {
                        k = "";
                        for (m = 0; m < b.length; m++) {
                            var r = b[m];
                            n = r;
                            if ("object" === typeof r)
                                if (r)
                                    try {
                                        n = JSON.stringify(r, null, 4),
                                        "string" === typeof n && 2 >= n.length && "undefined" !== typeof r.toString && (n = r.toString())
                                    } catch (v) {
                                        n = "object"
                                    }
                                else
                                    n = "null";
                            else
                                "undefined" === typeof r && (n = "undefined");
                            0 === m ? k = n : k += ", " + n
                        }
                        h && ya(k);
                        var u = (new Date).toISOString() + "[" + d + "]: " + k;
                        console.log(u);
                        return k
                    }
                }
            } catch (v) {
                console.log("Exception on dwn log", v)
            }
        }
    }
    ,
    dwn_ns.Cc = function() {
        var d = "secure_id";
        "string" !== typeof d && (d = "common");
        var e = "enable_log";
        e = e + "_" + d;
        return function(b, h) {
            if (dwn_ns.xb(e))
                if ("object" === typeof h) {
                    console.log("============== Object " + b + " ===========");
                    for (var k in h)
                        console.log(b + "." + k + " = " + h[k])
                } else
                    console.log("Not an object: " + b)
        }
    }
    );
    dwn_ns.W || (dwn_ns.W = function(d, e, b) {
        var h = dwn_ns.b("main");
        try {
            if ("addEventListener"in window)
                d.addEventListener(e, b, !1);
            else {
                var k = "on" + e;
                if ("attachEvent"in window)
                    d.attachEvent(k, b);
                else {
                    var m = d[k];
                    d[k] = "undefined" === typeof m ? b : function() {
                        m();
                        b(event)
                    }
                }
            }
        } catch (n) {
            h("Exception on add_event", d, e, n)
        }
    }
    );
    dwn_ns.ua || (dwn_ns.ua = function(d, e, b) {
        var h = dwn_ns.b("main");
        try {
            "removeEventListener"in window ? d.removeEventListener(e, b, !1) : "dettachEvent"in window ? d.detachEvent("on" + e, b) : console.error("Can't remove event:", d, e)
        } catch (k) {
            h("Exception on remove DwnEvent:", d, e, k)
        }
    }
    );
    dwn_ns.Z || (dwn_ns.Z = function(d, e, b) {
        if ("undefined" !== typeof e && 0 !== e.length) {
            b = "_" + b;
            var h = dwn_ns.b("main");
            try {
                var k = e.length
                  , m = Math.floor(k / 2);
                e.sort(function(H, q) {
                    return H - q
                });
                var n = e.reduce(function(H, q) {
                    return H + q
                }, 0)
                  , r = e[0]
                  , u = e[k - 1]
                  , v = n / k
                  , y = Math.sqrt(e.map(function(H) {
                    return Math.pow(H - v, 2)
                }).reduce(function(H, q) {
                    return H + q
                }, 0) / k)
                  , x = 0 !== m % 2 ? e[m] : (e[m - 1] + e[m]) / 2
                  , w = e.map(function(H) {
                    return Math.abs(H - x)
                }).sort(function(H, q) {
                    return H - q
                })
                  , N = 0 !== m % 2 ? w[m] : (w[m - 1] + w[m]) / 2;
                d[b + "_1"] = r;
                d[b + "_2"] = u;
                d[b + "_3"] = N;
                d[b + "_4"] = v;
                d[b + "_5"] = x;
                d[b + "_6"] = y
            } catch (H) {
                h("Exception on calc_stats:", H)
            }
        }
    }
    );
    dwn_ns.Za || (dwn_ns.Za = function(d) {
        var e = dwn_ns.b("main");
        try {
            var b = Date.now();
            d.v && 0 !== d.v || (d.v = b);
            d.s = b;
            if (d.j && 0 !== d.j)
                return b - d.j;
            d.j = b;
            return 0
        } catch (h) {
            e("Exception on set_timing:", h)
        }
    }
    );
    "undefined" !== typeof dwn_ns.ra && (dwn_ns.ra.G = void 0,
    dwn_ns.ra.F = void 0);
    "undefined" !== typeof dwn_ns.da && (dwn_ns.da.G = void 0,
    dwn_ns.da.F = void 0);
    "undefined" !== typeof dwn_ns.ya && (dwn_ns.ya.G = void 0,
    dwn_ns.ya.F = void 0);
    "undefined" !== typeof dwn_ns.xa && (dwn_ns.xa.G = void 0,
    dwn_ns.xa.F = void 0);
    var l = {};
    function ya(d) {
        "undefined" === typeof dwn_ns.debugging && (dwn_ns.debugging = []);
        -1 == dwn_ns.debugging.indexOf(d) && dwn_ns.debugging.push(d)
    }
    ;function ub() {
        ub = function() {}
        ;
        la.Symbol || (la.Symbol = oa)
    }
    function vb() {
        ub();
        var d = la.Symbol.iterator;
        d || (d = la.Symbol.iterator = la.Symbol("Symbol.iterator"));
        "function" != typeof Array.prototype[d] && ia(Array.prototype, d, {
            configurable: !0,
            writable: !0,
            value: function() {
                return wb(aa(this))
            }
        });
        vb = function() {}
    }
    function wb(d) {
        vb();
        d = {
            next: d
        };
        d[la.Symbol.iterator] = function() {
            return this
        }
        ;
        return d
    }
    function xb() {
        this.C = !1;
        this.m = null;
        this.c = void 0;
        this.a = 1;
        this.w = this.f = 0;
        this.M = this.g = null
    }
    function yb(d) {
        if (d.C)
            throw new TypeError("Generator is already running");
        d.C = !0
    }
    xb.prototype.H = function(d) {
        this.c = d
    }
    ;
    function zb(d, e) {
        d.g = {
            yb: e,
            Ab: !0
        };
        d.a = d.f || d.w
    }
    xb.prototype.return = function(d) {
        this.g = {
            return: d
        };
        this.a = this.w
    }
    ;
    function Eb(d, e, b) {
        d.a = b;
        return {
            value: e
        }
    }
    xb.prototype.D = function(d) {
        this.a = d
    }
    ;
    function Fb(d) {
        d.f = 0;
        d.w = 5
    }
    function Gb(d) {
        d.f = 0;
        var e = d.g.yb;
        d.g = null;
        return e
    }
    function Hb(d) {
        d.M = [d.g];
        d.f = 0;
        d.w = 0
    }
    function Ib(d) {
        var e = d.M.splice(0)[0];
        (e = d.g = d.g || e) ? e.Ab ? d.a = d.f || d.w : void 0 != e.D && d.w < e.D ? (d.a = e.D,
        d.g = null) : d.a = d.w : d.a = 0
    }
    function Jb(d) {
        this.a = new xb;
        this.c = d
    }
    function Kb(d, e) {
        yb(d.a);
        var b = d.a.m;
        if (b)
            return Lb(d, "return"in b ? b["return"] : function(h) {
                return {
                    value: h,
                    done: !0
                }
            }
            , e, d.a.return);
        d.a.return(e);
        return Mb(d)
    }
    function Lb(d, e, b, h) {
        try {
            var k = e.call(d.a.m, b);
            if (!(k instanceof Object))
                throw new TypeError("Iterator result " + k + " is not an object");
            if (!k.done)
                return d.a.C = !1,
                k;
            var m = k.value
        } catch (n) {
            return d.a.m = null,
            zb(d.a, n),
            Mb(d)
        }
        d.a.m = null;
        h.call(d.a, m);
        return Mb(d)
    }
    function Mb(d) {
        for (; d.a.a; )
            try {
                var e = d.c(d.a);
                if (e)
                    return d.a.C = !1,
                    {
                        value: e.value,
                        done: !1
                    }
            } catch (b) {
                d.a.c = void 0,
                zb(d.a, b)
            }
        d.a.C = !1;
        if (d.a.g) {
            e = d.a.g;
            d.a.g = null;
            if (e.Ab)
                throw e.yb;
            return {
                value: e.return,
                done: !0
            }
        }
        return {
            value: void 0,
            done: !0
        }
    }
    function Nb(d) {
        this.next = function(e) {
            yb(d.a);
            d.a.m ? e = Lb(d, d.a.m.next, e, d.a.H) : (d.a.H(e),
            e = Mb(d));
            return e
        }
        ;
        this.throw = function(e) {
            yb(d.a);
            d.a.m ? e = Lb(d, d.a.m["throw"], e, d.a.H) : (zb(d.a, e),
            e = Mb(d));
            return e
        }
        ;
        this.return = function(e) {
            return Kb(d, e)
        }
        ;
        vb();
        this[Symbol.iterator] = function() {
            return this
        }
    }
    function Ob(d, e) {
        e = new Nb(new Jb(e));
        ta && ta(e, d.prototype);
        return e
    }
    function Pb(d, e) {
        function b() {}
        b.prototype = e.prototype;
        d.Pd = e.prototype;
        d.prototype = new b;
        d.prototype.constructor = d;
        d.Ed = function(h, k, m) {
            for (var n = Array(arguments.length - 2), r = 2; r < arguments.length; r++)
                n[r - 2] = arguments[r];
            return e.prototype[k].apply(h, n)
        }
    }
    var Qb = {};
    function Rb() {
        if (0 == Object.keys(l).length) {
            if (!Sb)
                return console.log("Signals is not ready!"),
                !1;
            l = Sb;
            Qb = Tb
        }
        return !0
    }
    function Ub(d) {
        Rb() && ("undefined" === typeof dwn_ns.signals && (dwn_ns.signals = []),
        "undefined" !== typeof d && -1 == dwn_ns.signals.indexOf(d) && dwn_ns.signals.push(d))
    }
    ;/*

Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/
    function Vb(d, e, b, h) {
        var k = "Assertion failed";
        if (b) {
            k += ": " + b;
            var m = h
        } else
            d && (k += ": " + d,
            m = e);
        throw Error(k, m || []);
    }
    function Wb(d, e, b) {
        for (var h = [], k = 2; k < arguments.length; ++k)
            h[k - 2] = arguments[k];
        d || Vb("", null, e, h)
    }
    function Xb(d, e, b) {
        for (var h = [], k = 2; k < arguments.length; ++k)
            h[k - 2] = arguments[k];
        "string" !== typeof d && (k = typeof d,
        Vb("Expected string but got %s: %s.", ["object" != k ? k : d ? Array.isArray(d) ? "array" : k : "null", d], e, h))
    }
    function Yb(d, e) {
        for (var b = [], h = 1; h < arguments.length; ++h)
            b[h - 1] = arguments[h];
        throw Error("Failure" + (d ? ": " + d : ""), b);
    }
    function Zb(d, e, b, h) {
        for (var k = [], m = 3; m < arguments.length; ++m)
            k[m - 3] = arguments[m];
        d instanceof e || Vb("Expected instanceof %s but got %s.", [$b(e), $b(d)], b, k)
    }
    function $b(d) {
        return d instanceof Function ? d.displayName || d.name || "unknown type name" : d instanceof Object ? d.constructor.displayName || d.constructor.name || Object.prototype.toString.call(d) : null === d ? "null" : typeof d
    }
    ;var ac = Array.prototype.map ? function(d, e) {
        return Array.prototype.map.call(d, e, void 0)
    }
    : function(d, e) {
        for (var b = d.length, h = Array(b), k = "string" === typeof d ? d.split("") : d, m = 0; m < b; m++)
            m in k && (h[m] = e.call(void 0, k[m], m, d));
        return h
    }
    ;
    var bc = null;
    function cc(d) {
        var e = d.length
          , b = 3 * e / 4;
        b % 3 ? b = Math.floor(b) : -1 != "=.".indexOf(d[e - 1]) && (b = -1 != "=.".indexOf(d[e - 2]) ? b - 2 : b - 1);
        var h = new Uint8Array(b)
          , k = 0;
        dc(d, function(m) {
            h[k++] = m
        });
        return h.subarray(0, k)
    }
    function dc(d, e) {
        function b(u) {
            for (; h < d.length; ) {
                var v = d.charAt(h++)
                  , y = bc[v];
                if (null != y)
                    return y;
                if (!/^[\s\xa0]*$/.test(v))
                    throw Error("Unknown base64 encoding at char: " + v);
            }
            return u
        }
        ec();
        for (var h = 0; ; ) {
            var k = b(-1)
              , m = b(0)
              , n = b(64)
              , r = b(64);
            if (64 === r && -1 === k)
                break;
            e(k << 2 | m >> 4);
            64 != n && (e(m << 4 & 240 | n >> 2),
            64 != r && e(n << 6 & 192 | r))
        }
    }
    function ec() {
        if (!bc) {
            bc = {};
            for (var d = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), e = ["+/=", "+/", "-_=", "-_.", "-_"], b = 0; 5 > b; b++)
                for (var h = d.concat(e[b].split("")), k = 0; k < h.length; k++) {
                    var m = h[k];
                    void 0 === bc[m] && (bc[m] = k)
                }
        }
    }
    ;var fc = 0
      , gc = 0;
    function hc(d) {
        if (d.constructor === Uint8Array)
            return d;
        if (d.constructor === ArrayBuffer)
            return new Uint8Array(d);
        if (d.constructor === Array)
            return new Uint8Array(d);
        if (d.constructor === String)
            return cc(d);
        if (d instanceof Uint8Array)
            return new Uint8Array(d.buffer,d.byteOffset,d.byteLength);
        Yb("Type not convertible to Uint8Array.");
        return new Uint8Array(0)
    }
    ;function ic() {
        this.a = []
    }
    ic.prototype.length = function() {
        return this.a.length
    }
    ;
    function jc(d) {
        var e = d.a;
        d.a = [];
        return e
    }
    function kc(d, e) {
        Wb(e == Math.floor(e));
        for (Wb(0 <= e && 4294967296 > e); 127 < e; )
            d.a.push(e & 127 | 128),
            e >>>= 7;
        d.a.push(e)
    }
    function lc(d, e) {
        Wb(e == Math.floor(e));
        Wb(-2147483648 <= e && 2147483648 > e);
        if (0 <= e)
            kc(d, e);
        else {
            for (var b = 0; 9 > b; b++)
                d.a.push(e & 127 | 128),
                e >>= 7;
            d.a.push(1)
        }
    }
    ;function mc() {
        this.f = [];
        this.c = 0;
        this.a = new ic;
        this.g = []
    }
    function nc(d, e) {
        oc(d, e, 2);
        e = jc(d.a);
        d.f.push(e);
        d.c += e.length;
        e.push(d.c);
        return e
    }
    function pc(d, e) {
        var b = e.pop();
        b = d.c + d.a.length() - b;
        for (Wb(0 <= b); 127 < b; )
            e.push(b & 127 | 128),
            b >>>= 7,
            d.c++;
        e.push(b);
        d.c++
    }
    function oc(d, e, b) {
        Wb(1 <= e && e == Math.floor(e));
        kc(d.a, 8 * e + b)
    }
    function A(d, e, b) {
        null != b && (Wb(-2147483648 <= b && 2147483648 > b),
        null != b && (oc(d, e, 0),
        lc(d.a, b)))
    }
    function qc(d, e, b) {
        if (null != b && (Wb(-9223372036854775808 <= b && 0x7fffffffffffffff > b),
        null != b)) {
            oc(d, e, 0);
            d = d.a;
            Wb(b == Math.floor(b));
            Wb(-9223372036854775808 <= b && 0x7fffffffffffffff > b);
            var h = b;
            b = 0 > h;
            h = Math.abs(h);
            e = h >>> 0;
            h = Math.floor((h - e) / 4294967296);
            h >>>= 0;
            b && (h = ~h >>> 0,
            e = (~e >>> 0) + 1,
            4294967295 < e && (e = 0,
            h++,
            4294967295 < h && (h = 0)));
            fc = e;
            gc = h;
            b = fc;
            e = gc;
            Wb(b == Math.floor(b));
            Wb(e == Math.floor(e));
            Wb(0 <= b && 4294967296 > b);
            for (Wb(0 <= e && 4294967296 > e); 0 < e || 127 < b; )
                d.a.push(b & 127 | 128),
                b = (b >>> 7 | e << 25) >>> 0,
                e >>>= 7;
            d.a.push(b)
        }
    }
    function rc(d, e, b) {
        if (null != b) {
            oc(d, e, 5);
            d = d.a;
            Wb(Infinity === b || -Infinity === b || isNaN(b) || -3.4028234663852886E38 <= b && 3.4028234663852886E38 >= b);
            var h = b;
            h = (b = 0 > h ? 1 : 0) ? -h : h;
            0 === h ? 0 < 1 / h ? fc = gc = 0 : (gc = 0,
            fc = 2147483648) : isNaN(h) ? (gc = 0,
            fc = 2147483647) : 3.4028234663852886E38 < h ? (gc = 0,
            fc = (b << 31 | 2139095040) >>> 0) : 1.1754943508222875E-38 > h ? (h = Math.round(h / Math.pow(2, -149)),
            gc = 0,
            fc = (b << 31 | h) >>> 0) : (e = Math.floor(Math.log(h) / Math.LN2),
            h *= Math.pow(2, -e),
            h = Math.round(8388608 * h),
            16777216 <= h && ++e,
            gc = 0,
            fc = (b << 31 | e + 127 << 23 | h & 8388607) >>> 0);
            b = fc;
            Wb(b == Math.floor(b));
            Wb(0 <= b && 4294967296 > b);
            d.a.push(b >>> 0 & 255);
            d.a.push(b >>> 8 & 255);
            d.a.push(b >>> 16 & 255);
            d.a.push(b >>> 24 & 255)
        }
    }
    function sc(d, e, b) {
        null != b && (Wb("boolean" === typeof b || "number" === typeof b),
        oc(d, e, 0),
        d = d.a,
        Wb("boolean" === typeof b || "number" === typeof b),
        d.a.push(b ? 1 : 0))
    }
    function tc(d, e, b) {
        null != b && (Wb(-2147483648 <= b && 2147483648 > b),
        oc(d, e, 0),
        lc(d.a, b))
    }
    function D(d, e, b) {
        if (null != b) {
            e = nc(d, e);
            var h = d.a;
            Xb(b);
            for (var k = 0; k < b.length; k++) {
                var m = b.charCodeAt(k);
                if (128 > m)
                    h.a.push(m);
                else if (2048 > m)
                    h.a.push(m >> 6 | 192),
                    h.a.push(m & 63 | 128);
                else if (65536 > m)
                    if (55296 <= m && 56319 >= m && k + 1 < b.length) {
                        var n = b.charCodeAt(k + 1);
                        56320 <= n && 57343 >= n && (m = 1024 * (m - 55296) + n - 56320 + 65536,
                        h.a.push(m >> 18 | 240),
                        h.a.push(m >> 12 & 63 | 128),
                        h.a.push(m >> 6 & 63 | 128),
                        h.a.push(m & 63 | 128),
                        k++)
                    } else
                        h.a.push(m >> 12 | 224),
                        h.a.push(m >> 6 & 63 | 128),
                        h.a.push(m & 63 | 128)
            }
            pc(d, e)
        }
    }
    function uc(d, e, b) {
        null != b && (b = hc(b),
        oc(d, e, 2),
        kc(d.a, b.length),
        e = jc(d.a),
        d.f.push(e),
        d.f.push(b),
        d.c += e.length + b.length)
    }
    function vc(d, e, b, h) {
        null != b && (e = nc(d, e),
        h(b, d),
        pc(d, e))
    }
    function wc(d, e, b) {
        if (null != b)
            for (var h = 0; h < b.length; h++)
                D(d, e, b[h])
    }
    function xc(d, e, b, h) {
        if (null != b)
            for (var k = 0; k < b.length; k++) {
                var m = nc(d, e);
                h(b[k], d);
                pc(d, m)
            }
    }
    function yc(d, e, b) {
        if (null != b && b.length) {
            e = nc(d, e);
            for (var h = 0; h < b.length; h++) {
                var k = d.a
                  , m = b[h];
                Wb(m == Math.floor(m));
                Wb(-2147483648 <= m && 2147483648 > m);
                lc(k, m)
            }
            pc(d, e)
        }
    }
    ;function zc() {}
    var Ac = "function" == typeof Uint8Array;
    function Bc(d, e, b) {
        d.h = null;
        e || (e = []);
        d.c = void 0;
        d.X = -1;
        d.A = e;
        a: {
            if (e = d.A.length) {
                --e;
                var h = d.A[e];
                if (!(null === h || "object" != typeof h || Array.isArray(h) || Ac && h instanceof Uint8Array)) {
                    d.ea = e - d.X;
                    d.B = h;
                    break a
                }
            }
            d.ea = Number.MAX_VALUE
        }
        d.a = {};
        if (b)
            for (e = 0; e < b.length; e++)
                h = b[e],
                h < d.ea ? (h += d.X,
                d.A[h] = d.A[h] || Cc) : (Dc(d),
                d.B[h] = d.B[h] || Cc)
    }
    var Cc = Object.freeze ? Object.freeze([]) : [];
    function Dc(d) {
        var e = d.ea + d.X;
        d.A[e] || (d.B = d.A[e] = {})
    }
    function P(d, e) {
        if (e < d.ea) {
            e += d.X;
            var b = d.A[e];
            return b === Cc ? d.A[e] = [] : b
        }
        if (d.B)
            return b = d.B[e],
            b === Cc ? d.B[e] = [] : b
    }
    function Ec(d, e, b) {
        d = P(d, e);
        return null == d ? b : d
    }
    function Z(d, e, b) {
        Zb(d, zc);
        e < d.ea ? d.A[e + d.X] = b : (Dc(d),
        d.B[e] = b);
        return d
    }
    function Fc(d, e, b) {
        Zb(d, zc);
        e !== b ? Z(d, 1, e) : 1 < d.ea ? d.A[1 + d.X] = null : (Dc(d),
        delete d.B[1])
    }
    function Gc(d, e, b) {
        d.h || (d.h = {});
        if (!d.h[b]) {
            var h = P(d, b);
            h && (d.h[b] = new e(h))
        }
        return d.h[b]
    }
    function Hc(d, e, b) {
        d.h || (d.h = {});
        if (!d.h[b]) {
            for (var h = P(d, b), k = [], m = 0; m < h.length; m++)
                k[m] = new e(h[m]);
            d.h[b] = k
        }
        e = d.h[b];
        e == Cc && (e = d.h[b] = []);
        return e
    }
    function Ic(d, e, b) {
        Zb(d, zc);
        d.h || (d.h = {});
        var h = b ? b.A : b;
        d.h[e] = b;
        Z(d, e, h)
    }
    function Jc(d, e, b) {
        Zb(d, zc);
        d.h || (d.h = {});
        b = b || [];
        for (var h = [], k = 0; k < b.length; k++)
            h[k] = b[k].A;
        d.h[e] = b;
        Z(d, e, h)
    }
    zc.prototype.toString = function() {
        return this.A.toString()
    }
    ;
    zc.prototype.getExtension = function(d) {
        if (this.B) {
            this.h || (this.h = {});
            var e = d.f;
            if (d.g) {
                if (d.c())
                    return this.h[e] || (this.h[e] = ac(this.B[e] || [], function(b) {
                        return new d.a(b)
                    })),
                    this.h[e]
            } else if (d.c())
                return !this.h[e] && this.B[e] && (this.h[e] = new d.a(this.B[e])),
                this.h[e];
            return this.B[e]
        }
    }
    ;
    function Kc(d) {
        Bc(this, d, null)
    }
    Pb(Kc, zc);
    function Lc(d) {
        Bc(this, d, Mc)
    }
    Pb(Lc, zc);
    function Nc(d) {
        Bc(this, d, Oc)
    }
    Pb(Nc, zc);
    function Pc(d) {
        Bc(this, d, Qc)
    }
    Pb(Pc, zc);
    function Rc(d) {
        Bc(this, d, Sc)
    }
    Pb(Rc, zc);
    function Tc(d) {
        Bc(this, d, null)
    }
    Pb(Tc, zc);
    function Uc(d) {
        Bc(this, d, null)
    }
    Pb(Uc, zc);
    function Vc(d) {
        Bc(this, d, null)
    }
    Pb(Vc, zc);
    function Wc(d) {
        Bc(this, d, null)
    }
    Pb(Wc, zc);
    function Xc(d) {
        Bc(this, d, null)
    }
    Pb(Xc, zc);
    function Yc(d) {
        Bc(this, d, Zc)
    }
    Pb(Yc, zc);
    function $c(d) {
        Bc(this, d, null)
    }
    Pb($c, zc);
    function ad(d) {
        Bc(this, d, null)
    }
    Pb(ad, zc);
    function bd(d) {
        Bc(this, d, cd)
    }
    Pb(bd, zc);
    function dd(d) {
        Bc(this, d, ed)
    }
    Pb(dd, zc);
    function fd(d) {
        Bc(this, d, null)
    }
    Pb(fd, zc);
    function gd(d) {
        Bc(this, d, null)
    }
    Pb(gd, zc);
    function hd(d) {
        Bc(this, d, null)
    }
    Pb(hd, zc);
    function id(d) {
        Bc(this, d, null)
    }
    Pb(id, zc);
    function jd(d) {
        Bc(this, d, null)
    }
    Pb(jd, zc);
    function kd(d) {
        Bc(this, d, null)
    }
    Pb(kd, zc);
    function ld(d) {
        Bc(this, d, null)
    }
    Pb(ld, zc);
    function md(d) {
        Bc(this, d, null)
    }
    Pb(md, zc);
    function nd(d) {
        Bc(this, d, od)
    }
    Pb(nd, zc);
    function pd(d) {
        Bc(this, d, qd)
    }
    Pb(pd, zc);
    function rd(d) {
        Bc(this, d, null)
    }
    Pb(rd, zc);
    function sd(d) {
        Bc(this, d, null)
    }
    Pb(sd, zc);
    function td(d) {
        Bc(this, d, ud)
    }
    Pb(td, zc);
    function vd(d, e) {
        var b = Ec(d, 1, 0);
        0 !== b && A(e, 1, b);
        b = P(d, 2);
        null != b && rc(e, 2, b);
        b = P(d, 3);
        null != b && rc(e, 3, b);
        b = P(d, 4);
        null != b && rc(e, 4, b);
        b = P(d, 5);
        null != b && rc(e, 5, b);
        b = P(d, 6);
        null != b && rc(e, 6, b);
        b = P(d, 7);
        null != b && rc(e, 7, b)
    }
    var Mc = [12, 31];
    function wd(d, e) {
        var b = Ec(d, 1, "");
        0 < b.length && D(e, 1, b);
        b = P(d, 2);
        null != b && D(e, 2, b);
        b = P(d, 3);
        null != b && D(e, 3, b);
        b = P(d, 4);
        null != b && D(e, 4, b);
        b = P(d, 5);
        null != b && D(e, 5, b);
        b = P(d, 6);
        null != b && A(e, 6, b);
        b = P(d, 7);
        null != b && A(e, 7, b);
        b = P(d, 8);
        null != b && A(e, 8, b);
        b = P(d, 9);
        null != b && A(e, 9, b);
        b = P(d, 10);
        null != b && qc(e, 10, b);
        b = P(d, 11);
        null != b && A(e, 11, b);
        b = P(d, 12);
        0 < b.length && wc(e, 12, b);
        b = P(d, 13);
        null != b && A(e, 13, b);
        b = P(d, 14);
        null != b && A(e, 14, b);
        b = P(d, 15);
        null != b && A(e, 15, b);
        b = P(d, 16);
        null != b && A(e, 16, b);
        b = P(d, 17);
        null != b && A(e, 17, b);
        b = P(d, 18);
        null != b && A(e, 18, b);
        b = P(d, 19);
        null != b && A(e, 19, b);
        b = P(d, 20);
        null != b && A(e, 20, b);
        b = P(d, 21);
        null != b && A(e, 21, b);
        b = P(d, 22);
        null != b && A(e, 22, b);
        b = P(d, 23);
        null != b && A(e, 23, b);
        b = P(d, 24);
        null != b && A(e, 24, b);
        b = P(d, 25);
        null != b && A(e, 25, b);
        b = P(d, 26);
        null != b && A(e, 26, b);
        b = P(d, 27);
        null != b && A(e, 27, b);
        b = P(d, 28);
        null != b && A(e, 28, b);
        b = P(d, 29);
        null != b && A(e, 29, b);
        b = P(d, 30);
        null != b && A(e, 30, b);
        b = Hc(d, Kc, 31);
        0 < b.length && xc(e, 31, b, vd);
        b = P(d, 32);
        null != b && A(e, 32, b)
    }
    var Oc = [8];
    function xd(d, e) {
        var b = P(d, 1);
        null != b && A(e, 1, b);
        b = P(d, 2);
        null != b && qc(e, 2, b);
        b = P(d, 3);
        null != b && A(e, 3, b);
        b = P(d, 4);
        null != b && A(e, 4, b);
        b = P(d, 5);
        null != b && A(e, 5, b);
        b = P(d, 6);
        null != b && A(e, 6, b);
        b = P(d, 7);
        null != b && A(e, 7, b);
        b = Hc(d, Kc, 8);
        0 < b.length && xc(e, 8, b, vd)
    }
    var Qc = [5];
    function yd(d, e) {
        var b = P(d, 1);
        null != b && A(e, 1, b);
        b = P(d, 2);
        null != b && A(e, 2, b);
        b = P(d, 3);
        null != b && A(e, 3, b);
        b = P(d, 4);
        null != b && sc(e, 4, b);
        b = Hc(d, Kc, 5);
        0 < b.length && xc(e, 5, b, vd)
    }
    var Sc = [3];
    function zd(d, e) {
        var b = P(d, 1);
        null != b && tc(e, 1, b);
        b = P(d, 2);
        null != b && tc(e, 2, b);
        b = Hc(d, Kc, 3);
        0 < b.length && xc(e, 3, b, vd)
    }
    function Ad(d, e) {
        var b = Ec(d, 1, 0);
        0 !== b && A(e, 1, b);
        b = P(d, 2);
        null != b && tc(e, 2, b);
        b = P(d, 3);
        null != b && D(e, 3, b);
        b = P(d, 4);
        null != b && D(e, 4, b);
        b = P(d, 5);
        null != b && D(e, 5, b);
        b = P(d, 6);
        null != b && sc(e, 6, b);
        b = P(d, 7);
        null != b && D(e, 7, b);
        b = P(d, 8);
        null != b && D(e, 8, b);
        b = P(d, 9);
        null != b && D(e, 9, b);
        b = P(d, 10);
        null != b && D(e, 10, b);
        b = P(d, 11);
        null != b && A(e, 11, b);
        b = P(d, 12);
        null != b && D(e, 12, b);
        b = P(d, 13);
        null != b && tc(e, 13, b);
        b = P(d, 16);
        null != b && D(e, 16, b);
        b = P(d, 17);
        null != b && D(e, 17, b);
        b = P(d, 18);
        null != b && A(e, 18, b);
        b = P(d, 19);
        null != b && D(e, 19, b);
        b = P(d, 20);
        null != b && D(e, 20, b);
        b = P(d, 21);
        null != b && D(e, 21, b);
        b = P(d, 22);
        null != b && A(e, 22, b);
        b = P(d, 23);
        null != b && A(e, 23, b);
        b = P(d, 24);
        null != b && D(e, 24, b);
        b = P(d, 25);
        null != b && tc(e, 25, b);
        b = P(d, 26);
        null != b && tc(e, 26, b);
        b = P(d, 27);
        null != b && sc(e, 27, b);
        b = P(d, 28);
        null != b && sc(e, 28, b)
    }
    function Bd(d, e) {
        var b = P(d, 1);
        null != b && A(e, 1, b);
        b = P(d, 2);
        null != b && D(e, 2, b);
        b = P(d, 3);
        null != b && D(e, 3, b);
        b = P(d, 4);
        null != b && D(e, 4, b);
        b = P(d, 5);
        null != b && D(e, 5, b);
        b = P(d, 6);
        null != b && D(e, 6, b);
        b = P(d, 7);
        null != b && D(e, 7, b);
        b = P(d, 8);
        null != b && D(e, 8, b);
        b = P(d, 9);
        null != b && D(e, 9, b);
        b = P(d, 10);
        null != b && D(e, 10, b);
        b = P(d, 11);
        null != b && D(e, 11, b);
        b = P(d, 12);
        null != b && D(e, 12, b);
        b = P(d, 13);
        null != b && D(e, 13, b);
        b = P(d, 14);
        null != b && D(e, 14, b);
        b = P(d, 15);
        null != b && D(e, 15, b);
        b = P(d, 16);
        null != b && D(e, 16, b);
        b = P(d, 17);
        null != b && D(e, 17, b);
        b = P(d, 18);
        null != b && D(e, 18, b);
        b = P(d, 19);
        null != b && D(e, 19, b);
        b = P(d, 20);
        null != b && qc(e, 20, b);
        b = P(d, 21);
        null != b && D(e, 21, b);
        b = P(d, 22);
        null != b && D(e, 22, b);
        b = P(d, 23);
        null != b && D(e, 23, b);
        b = P(d, 24);
        null != b && D(e, 24, b)
    }
    function Cd(d, e) {
        var b = P(d, 1);
        null != b && sc(e, 1, b);
        b = P(d, 2);
        null != b && rc(e, 2, b);
        b = P(d, 3);
        null != b && rc(e, 3, b);
        b = P(d, 4);
        null != b && rc(e, 4, b);
        b = P(d, 5);
        null != b && rc(e, 5, b);
        b = P(d, 6);
        null != b && D(e, 6, b);
        b = P(d, 7);
        null != b && qc(e, 7, b);
        b = P(d, 8);
        null != b && rc(e, 8, b);
        b = P(d, 9);
        null != b && rc(e, 9, b);
        b = P(d, 10);
        null != b && rc(e, 10, b);
        b = P(d, 11);
        null != b && sc(e, 11, b);
        b = P(d, 12);
        null != b && rc(e, 12, b);
        b = P(d, 13);
        null != b && rc(e, 13, b)
    }
    function Dd(d, e) {
        var b = P(d, 1);
        null != b && D(e, 1, b);
        b = P(d, 2);
        null != b && D(e, 2, b);
        b = P(d, 3);
        null != b && D(e, 3, b);
        b = P(d, 4);
        null != b && D(e, 4, b);
        b = P(d, 5);
        null != b && D(e, 5, b);
        b = P(d, 6);
        null != b && D(e, 6, b);
        b = P(d, 7);
        null != b && qc(e, 7, b)
    }
    function Ed(d, e) {
        var b = P(d, 1);
        null != b && tc(e, 1, b);
        b = P(d, 2);
        null != b && D(e, 2, b);
        b = P(d, 3);
        null != b && D(e, 3, b);
        b = P(d, 4);
        null != b && D(e, 4, b);
        b = P(d, 5);
        null != b && D(e, 5, b);
        b = P(d, 6);
        null != b && rc(e, 6, b);
        b = P(d, 7);
        null != b && D(e, 7, b);
        b = P(d, 8);
        null != b && D(e, 8, b);
        b = P(d, 9);
        null != b && tc(e, 9, b);
        b = Gc(d, Wc, 10);
        null != b && vc(e, 10, b, Dd);
        b = P(d, 12);
        null != b && sc(e, 12, b);
        b = P(d, 13);
        null != b && A(e, 13, b);
        b = P(d, 14);
        null != b && tc(e, 14, b)
    }
    var Zc = [3];
    function Fd(d, e) {
        var b = P(d, 1);
        null != b && D(e, 1, b);
        b = P(d, 2);
        null != b && rc(e, 2, b);
        b = P(d, 3);
        0 < b.length && yc(e, 3, b)
    }
    function Gd(d, e) {
        var b = P(d, 1);
        null != b && D(e, 1, b);
        b = P(d, 2);
        null != b && D(e, 2, b);
        b = P(d, 3);
        null != b && D(e, 3, b);
        b = P(d, 4);
        null != b && A(e, 4, b);
        b = P(d, 6);
        null != b && qc(e, 6, b);
        b = P(d, 7);
        null != b && qc(e, 7, b);
        b = P(d, 8);
        null != b && qc(e, 8, b);
        b = P(d, 9);
        null != b && qc(e, 9, b);
        b = P(d, 10);
        null != b && qc(e, 10, b);
        b = P(d, 11);
        null != b && qc(e, 11, b);
        b = P(d, 12);
        null != b && qc(e, 12, b);
        b = P(d, 13);
        null != b && D(e, 13, b);
        b = P(d, 14);
        null != b && A(e, 14, b);
        b = P(d, 15);
        null != b && D(e, 15, b);
        b = P(d, 16);
        null != b && uc(e, 16, b);
        b = P(d, 17);
        null != b && qc(e, 17, b);
        b = P(d, 18);
        null != b && qc(e, 18, b);
        b = P(d, 19);
        null != b && A(e, 19, b);
        b = P(d, 20);
        null != b && uc(e, 20, b);
        b = P(d, 21);
        null != b && D(e, 21, b);
        b = P(d, 22);
        null != b && qc(e, 22, b);
        b = P(d, 23);
        null != b && D(e, 23, b);
        b = P(d, 24);
        null != b && qc(e, 24, b);
        b = P(d, 25);
        null != b && A(e, 25, b);
        b = P(d, 26);
        null != b && A(e, 26, b);
        b = P(d, 27);
        null != b && qc(e, 27, b);
        b = P(d, 28);
        null != b && A(e, 28, b);
        b = P(d, 29);
        null != b && qc(e, 29, b);
        b = P(d, 30);
        null != b && uc(e, 30, b);
        b = P(d, 31);
        null != b && sc(e, 31, b);
        b = P(d, 32);
        null != b && sc(e, 32, b)
    }
    function Hd(d, e) {
        var b = P(d, 1);
        null != b && D(e, 1, b);
        b = P(d, 2);
        null != b && sc(e, 2, b);
        b = P(d, 3);
        null != b && sc(e, 3, b);
        b = P(d, 4);
        null != b && sc(e, 4, b);
        b = P(d, 5);
        null != b && sc(e, 5, b);
        b = P(d, 6);
        null != b && sc(e, 6, b);
        b = P(d, 7);
        null != b && sc(e, 7, b);
        b = P(d, 8);
        null != b && A(e, 8, b);
        b = P(d, 9);
        null != b && sc(e, 9, b);
        b = P(d, 10);
        null != b && D(e, 10, b);
        b = P(d, 11);
        null != b && sc(e, 11, b);
        b = P(d, 12);
        null != b && sc(e, 12, b);
        b = P(d, 13);
        null != b && D(e, 13, b);
        b = P(d, 14);
        null != b && D(e, 14, b)
    }
    var cd = [8];
    function Id(d, e) {
        var b = Ec(d, 1, "");
        0 < b.length && D(e, 1, b);
        b = P(d, 2);
        null != b && A(e, 2, b);
        b = P(d, 3);
        null != b && A(e, 3, b);
        b = P(d, 4);
        null != b && A(e, 4, b);
        b = P(d, 5);
        null != b && A(e, 5, b);
        b = P(d, 6);
        null != b && A(e, 6, b);
        b = P(d, 7);
        null != b && A(e, 7, b);
        b = Hc(d, Kc, 8);
        0 < b.length && xc(e, 8, b, vd);
        b = P(d, 9);
        null != b && qc(e, 9, b);
        b = P(d, 10);
        null != b && A(e, 10, b)
    }
    var ed = [6, 10, 21, 23, 30];
    function Jd(d, e) {
        var b = P(d, 1);
        null != b && A(e, 1, b);
        b = P(d, 2);
        null != b && A(e, 2, b);
        b = P(d, 3);
        null != b && D(e, 3, b);
        b = Gc(d, Uc, 5);
        null != b && vc(e, 5, b, Bd);
        b = Hc(d, Tc, 6);
        0 < b.length && xc(e, 6, b, Ad);
        b = Gc(d, Vc, 7);
        null != b && vc(e, 7, b, Cd);
        b = Gc(d, Xc, 8);
        null != b && vc(e, 8, b, Ed);
        b = Gc(d, Yc, 9);
        null != b && vc(e, 9, b, Fd);
        b = P(d, 10);
        0 < b.length && wc(e, 10, b);
        b = P(d, 11);
        null != b && A(e, 11, b);
        b = P(d, 12);
        null != b && qc(e, 12, b);
        b = P(d, 13);
        null != b && D(e, 13, b);
        b = P(d, 14);
        null != b && D(e, 14, b);
        b = P(d, 15);
        null != b && qc(e, 15, b);
        b = P(d, 16);
        null != b && qc(e, 16, b);
        b = Gc(d, ad, 17);
        null != b && vc(e, 17, b, Hd);
        b = Gc(d, $c, 18);
        null != b && vc(e, 18, b, Gd);
        b = P(d, 19);
        null != b && D(e, 19, b);
        b = P(d, 20);
        null != b && tc(e, 20, b);
        b = Hc(d, Kc, 21);
        0 < b.length && xc(e, 21, b, vd);
        b = Gc(d, Pc, 22);
        null != b && vc(e, 22, b, yd);
        b = Hc(d, bd, 23);
        0 < b.length && xc(e, 23, b, Id);
        b = P(d, 24);
        null != b && D(e, 24, b);
        b = P(d, 25);
        null != b && A(e, 25, b);
        b = P(d, 26);
        null != b && A(e, 26, b);
        b = P(d, 27);
        null != b && A(e, 27, b);
        b = P(d, 28);
        null != b && uc(e, 28, b);
        b = P(d, 29);
        null != b && uc(e, 29, b);
        b = P(d, 30);
        0 < b.length && yc(e, 30, b);
        b = P(d, 31);
        null != b && D(e, 31, b);
        b = P(d, 32);
        null != b && qc(e, 32, b);
        b = P(d, 33);
        null != b && qc(e, 33, b);
        b = P(d, 34);
        null != b && D(e, 34, b);
        b = P(d, 35);
        null != b && tc(e, 35, b)
    }
    function Kd(d, e) {
        var b = P(d, 1);
        null != b && D(e, 1, b);
        b = P(d, 2);
        null != b && D(e, 2, b);
        b = P(d, 3);
        null != b && D(e, 3, b);
        b = P(d, 4);
        null != b && qc(e, 4, b);
        b = P(d, 5);
        null != b && D(e, 5, b)
    }
    function Ld(d, e) {
        var b = P(d, 1);
        null != b && D(e, 1, b);
        b = P(d, 2);
        null != b && qc(e, 2, b);
        b = P(d, 3);
        null != b && A(e, 3, b);
        b = P(d, 4);
        null != b && qc(e, 4, b);
        b = P(d, 5);
        null != b && A(e, 5, b);
        b = P(d, 6);
        null != b && D(e, 6, b);
        b = P(d, 8);
        null != b && uc(e, 8, b)
    }
    function Md(d, e) {
        var b = P(d, 1);
        null != b && D(e, 1, b);
        b = P(d, 2);
        null != b && D(e, 2, b);
        b = P(d, 3);
        null != b && rc(e, 3, b);
        b = P(d, 4);
        null != b && A(e, 4, b);
        b = P(d, 5);
        null != b && D(e, 5, b);
        b = P(d, 6);
        null != b && D(e, 6, b);
        b = P(d, 7);
        null != b && D(e, 7, b);
        b = P(d, 8);
        null != b && tc(e, 8, b)
    }
    function Nd(d, e) {
        var b = P(d, 1);
        null != b && rc(e, 1, b);
        b = P(d, 2);
        null != b && rc(e, 2, b);
        b = P(d, 3);
        null != b && sc(e, 3, b);
        b = P(d, 4);
        null != b && A(e, 4, b);
        b = P(d, 5);
        null != b && rc(e, 5, b)
    }
    function Od(d, e) {
        var b = Ec(d, 1, 0);
        0 !== b && A(e, 1, b);
        b = P(d, 2);
        null != b && tc(e, 2, b);
        b = P(d, 3);
        null != b && D(e, 3, b);
        b = P(d, 4);
        null != b && D(e, 4, b);
        b = P(d, 5);
        null != b && sc(e, 5, b);
        b = P(d, 6);
        null != b && D(e, 6, b);
        b = P(d, 7);
        null != b && D(e, 7, b);
        b = P(d, 8);
        null != b && D(e, 8, b)
    }
    function Pd(d, e) {
        var b = P(d, 1);
        null != b && D(e, 1, b);
        b = P(d, 2);
        null != b && D(e, 2, b);
        b = P(d, 3);
        null != b && D(e, 3, b);
        b = P(d, 4);
        null != b && D(e, 4, b);
        b = P(d, 5);
        null != b && sc(e, 5, b);
        b = P(d, 6);
        null != b && D(e, 6, b);
        b = P(d, 7);
        null != b && D(e, 7, b)
    }
    function Qd(d, e) {
        var b = P(d, 1);
        null != b && rc(e, 1, b);
        b = P(d, 2);
        null != b && rc(e, 2, b);
        b = P(d, 3);
        null != b && rc(e, 3, b)
    }
    function Rd(d, e) {
        var b = P(d, 1);
        null != b && sc(e, 1, b);
        b = P(d, 2);
        null != b && sc(e, 2, b);
        b = P(d, 3);
        null != b && sc(e, 3, b);
        b = P(d, 4);
        null != b && sc(e, 4, b);
        b = P(d, 5);
        null != b && D(e, 5, b);
        b = P(d, 6);
        null != b && D(e, 6, b);
        b = P(d, 7);
        null != b && D(e, 7, b);
        b = P(d, 8);
        null != b && D(e, 8, b);
        b = P(d, 10);
        null != b && uc(e, 10, b)
    }
    var od = [14];
    function Sd(d, e) {
        var b = P(d, 1);
        null != b && D(e, 1, b);
        b = P(d, 2);
        null != b && D(e, 2, b);
        b = P(d, 3);
        null != b && D(e, 3, b);
        b = P(d, 4);
        null != b && qc(e, 4, b);
        b = P(d, 5);
        null != b && D(e, 5, b);
        b = P(d, 6);
        null != b && D(e, 6, b);
        b = Gc(d, fd, 7);
        null != b && vc(e, 7, b, Kd);
        b = Gc(d, gd, 8);
        null != b && vc(e, 8, b, Ld);
        b = Gc(d, hd, 9);
        null != b && vc(e, 9, b, Md);
        b = Gc(d, id, 10);
        null != b && vc(e, 10, b, Nd);
        b = Gc(d, kd, 11);
        null != b && vc(e, 11, b, Pd);
        b = Gc(d, md, 12);
        null != b && vc(e, 12, b, Rd);
        b = P(d, 13);
        null != b && A(e, 13, b);
        b = Hc(d, jd, 14);
        0 < b.length && xc(e, 14, b, Od);
        b = Gc(d, ld, 15);
        null != b && vc(e, 15, b, Qd);
        b = P(d, 16);
        null != b && D(e, 16, b);
        b = P(d, 17);
        null != b && uc(e, 17, b);
        b = P(d, 18);
        null != b && A(e, 18, b);
        b = P(d, 19);
        null != b && sc(e, 19, b);
        b = P(d, 20);
        null != b && sc(e, 20, b)
    }
    var qd = [2, 17, 19, 27];
    function Td(d, e) {
        var b = P(d, 1);
        null != b && D(e, 1, b);
        b = P(d, 2);
        0 < b.length && wc(e, 2, b);
        b = P(d, 3);
        null != b && A(e, 3, b);
        b = P(d, 4);
        null != b && A(e, 4, b);
        b = P(d, 5);
        null != b && rc(e, 5, b);
        b = P(d, 6);
        null != b && D(e, 6, b);
        b = P(d, 7);
        null != b && D(e, 7, b);
        b = P(d, 8);
        null != b && qc(e, 8, b);
        b = P(d, 12);
        null != b && sc(e, 12, b);
        b = P(d, 13);
        null != b && A(e, 13, b);
        b = P(d, 14);
        null != b && D(e, 14, b);
        b = P(d, 15);
        null != b && tc(e, 15, b);
        b = Gc(d, nd, 16);
        null != b && vc(e, 16, b, Sd);
        b = Hc(d, Kc, 17);
        0 < b.length && xc(e, 17, b, vd);
        b = Gc(d, Pc, 18);
        null != b && vc(e, 18, b, yd);
        b = Hc(d, bd, 19);
        0 < b.length && xc(e, 19, b, Id);
        b = P(d, 20);
        null != b && D(e, 20, b);
        b = P(d, 21);
        null != b && A(e, 21, b);
        b = P(d, 22);
        null != b && A(e, 22, b);
        b = P(d, 23);
        null != b && D(e, 23, b);
        b = P(d, 24);
        null != b && uc(e, 24, b);
        b = P(d, 25);
        null != b && uc(e, 25, b);
        b = P(d, 26);
        null != b && uc(e, 26, b);
        b = P(d, 27);
        0 < b.length && yc(e, 27, b)
    }
    function Ud(d, e) {
        var b = P(d, 2);
        null != b && rc(e, 2, b);
        b = P(d, 3);
        null != b && rc(e, 3, b);
        b = P(d, 4);
        null != b && rc(e, 4, b);
        b = P(d, 5);
        null != b && rc(e, 5, b);
        b = P(d, 6);
        null != b && rc(e, 6, b);
        b = P(d, 7);
        null != b && rc(e, 7, b)
    }
    function Vd(d, e) {
        var b = P(d, 1);
        null != b && qc(e, 1, b);
        b = P(d, 2);
        null != b && qc(e, 2, b);
        b = P(d, 3);
        null != b && qc(e, 3, b);
        b = P(d, 4);
        null != b && qc(e, 4, b);
        b = P(d, 5);
        null != b && qc(e, 5, b);
        b = P(d, 6);
        null != b && qc(e, 6, b);
        b = P(d, 7);
        null != b && qc(e, 7, b);
        b = P(d, 8);
        null != b && qc(e, 8, b);
        b = P(d, 9);
        null != b && qc(e, 9, b);
        b = P(d, 10);
        null != b && qc(e, 10, b)
    }
    var ud = [12, 13, 55, 66, 75, 80, 84, 86, 88, 89];
    function Wd(d) {
        var e = navigator.platform;
        "MacIntel" === e && Xd() && !Yd() && ("iPad" === navigator.platform ? e = !0 : (e = screen,
        e = e.width / e.height,
        e = 2 <= Zd(["MediaSource"in window, !!Element.prototype.webkitRequestFullscreen, e > 2 / 3 && 1.5 > e])),
        e = e ? "iPad" : "iPhone");
        Z(d, 9, e)
    }
    function $d(d) {
        var e = [];
        for (var b = ba("chrome safari __crWeb __gCrWeb yandex __yb __ybro __firefox__ __edgeTrackingPreventionStatistics webkit oprt samsungAr ucweb UCShellJava puffinDevice".split(" ")), h = b.next(); !h.done; h = b.next()) {
            h = h.value;
            var k = window[h];
            k && "object" === typeof k && e.push(h)
        }
        e = e.sort();
        Z(d, 13, e || [])
    }
    function ae(d) {
        try {
            var e = !!window.localStorage
        } catch (b) {
            e = !0
        }
        Z(d, 31, e)
    }
    function be(d) {
        try {
            var e = !!window.sessionStorage
        } catch (b) {
            e = !0
        }
        Z(d, 32, e)
    }
    function ce(d) {
        var e = document;
        try {
            e.cookie = "cookietest=1; SameSite=Strict;";
            var b = -1 !== e.cookie.indexOf("cookietest=");
            e.cookie = "cookietest=1; SameSite=Strict; expires=Thu, 01-Jan-1970 00:00:01 GMT";
            var h = b
        } catch (k) {
            h = !1
        }
        Z(d, 48, h)
    }
    function de(d) {
        var e = {
            acos: ee(.12312423423423424),
            acosh: fe(1E308),
            Bd: ge.log(1E154 + ge.sqrt(1E154 * 1E154 - 1)),
            asin: he(.12312423423423424),
            asinh: le(1),
            Cd: ge.log(1 + ge.sqrt(2)),
            atanh: me(.5),
            Dd: ge.log(3) / 2,
            atan: ne(.5),
            sin: oe(-1E300),
            sinh: pe(1),
            Nd: ge.exp(1) - 1 / ge.exp(1) / 2,
            cos: qe(10.000000000123),
            cosh: re(1),
            Fd: (ge.exp(1) + 1 / ge.exp(1)) / 2,
            tan: se(-1E300),
            tanh: te(1),
            Rd: (ge.exp(2) - 1) / (ge.exp(2) + 1),
            exp: ue(1),
            expm1: ve(1),
            Gd: ge.exp(1) - 1,
            log1p: we(10),
            Hd: ge.log(11),
            Jd: ge.pow(ge.PI, -100)
        };
        var b = "", h;
        for (h in e)
            b += h + "=" + e[h] + ",";
        e = xe(b);
        Z(d, 50, e)
    }
    var Aa = 0
      , Ca = 1
      , Fa = 2
      , Ga = 3
      , Ha = 4
      , Ia = 5
      , Ka = 6
      , La = 7
      , Ma = 8
      , Na = 9
      , Oa = 10
      , Pa = 11
      , Qa = 12
      , Sa = 13
      , Ta = 14
      , Ua = 15
      , Va = 16
      , Wa = 17
      , Xa = 18
      , Ya = 19
      , Za = 20
      , ab = 21
      , bb = 22
      , cb = 23
      , db = 24
      , gb = 25
      , hb = 26
      , ib = 27
      , jb = 28
      , kb = 29
      , ob = 30
      , pb = 31
      , qb = 32
      , rb = 33
      , sb = 34
      , tb = 35
      , Sb = {
        zc: Aa,
        ec: Ca,
        fc: Fa,
        $b: Ga,
        eb: Ha,
        mc: Ia,
        nc: Ka,
        jc: La,
        kc: Ma,
        rb: Na,
        sb: Oa,
        pb: Pa,
        qb: Qa,
        Ub: Sa,
        Vb: Ta,
        Sb: Ua,
        Tb: Va,
        hc: Wa,
        yc: Xa,
        sc: Ya,
        gc: Za,
        ac: ab,
        dc: bb,
        bc: cb,
        cc: db,
        tc: gb,
        uc: hb,
        oc: ib,
        pc: jb,
        qc: kb,
        rc: ob,
        vc: pb,
        wc: qb,
        Zb: rb,
        Yb: sb,
        vd: tb,
        ad: 36,
        bd: 37,
        Wc: 38,
        Zc: 39,
        $c: 40,
        cd: 41,
        Xc: 42,
        Yc: 43,
        md: 44,
        fb: 45,
        ed: 100,
        gd: 101,
        fd: 103,
        lc: 102,
        ud: 104,
        jd: 105,
        hd: 106,
        kd: 107,
        Uc: 110,
        Tc: 111,
        Vc: 112,
        od: 200,
        Oc: 201,
        Pc: 202,
        xd: 203,
        wd: 204,
        Rc: 205,
        Qc: 206,
        Sc: 207,
        td: 210,
        rd: 211,
        sd: 212,
        yd: 213,
        ld: 300,
        qd: 301,
        nd: 302,
        pd: 303,
        Ad: 304
    }
      , Tb = {
        ic: 0,
        Wb: 1,
        zd: 2,
        dd: 3,
        Rb: 4,
        TIMEOUT: 5,
        Xb: 6
    };
    function ye(d, e) {
        var b = void 0;
        return new (b || (b = Promise))(function(h, k) {
            function m(u) {
                try {
                    r(e.next(u))
                } catch (v) {
                    k(v)
                }
            }
            function n(u) {
                try {
                    r(e["throw"](u))
                } catch (v) {
                    k(v)
                }
            }
            function r(u) {
                u.done ? h(u.value) : (new b(function(v) {
                    v(u.value)
                }
                )).then(m, n)
            }
            r((e = e.apply(d, void 0)).next())
        }
        )
    }
    ;function ze(d, e) {
        return "number" === typeof d && isNaN(d) ? e : d
    }
    function Zd(d) {
        return d.reduce(function(e, b) {
            return e + (b ? 1 : 0)
        }, 0)
    }
    function Ae(d) {
        function e(v, y) {
            n[v] = n[v] || [];
            n[v].push(y)
        }
        var b, h, k = "Unexpected syntax '" + d + "'";
        d = /^\s*([a-z-]*)(.*)$/i.exec(d);
        for (var m = d[1] || void 0, n = {}, r = /([.:#][\w-]+|\[.+?\])/gi; ; ) {
            var u = r.exec(d[2]);
            if (!u)
                break;
            u = u[0];
            switch (u[0]) {
            case ".":
                e("class", u.slice(1));
                break;
            case "#":
                e("id", u.slice(1));
                break;
            case "[":
                if (u = /^\[([\w-]+)([~|^$*]?=("(.*?)"|([\w-]+)))?(\s+[is])?\]$/.exec(u))
                    e(u[1], null !== (h = null !== (b = u[4]) && void 0 !== b ? b : u[5]) && void 0 !== h ? h : "");
                else
                    throw Error(k);
                break;
            default:
                throw Error(k);
            }
        }
        return [m, n]
    }
    ;function Be() {
        var d = window
          , e = navigator;
        return 4 <= Zd(["MSCSSMatrix"in d, "msSetImmediate"in d, "msIndexedDB"in d, "msMaxTouchPoints"in e, "msPointerEnabled"in e])
    }
    function Ce() {
        var d = window
          , e = navigator;
        return 3 <= Zd(["msWriteProfilerMark"in d, "MSStream"in d, "msLaunchUri"in e, "msSaveBlob"in e]) && !Be()
    }
    function De() {
        var d = window
          , e = navigator;
        return 5 <= Zd(["webkitPersistentStorage"in e, "webkitTemporaryStorage"in e, 0 === e.vendor.indexOf("Google"), "webkitResolveLocalFileSystemURL"in d, "BatteryManager"in d, "webkitMediaStream"in d, "webkitSpeechGrammar"in d])
    }
    function Xd() {
        var d = window
          , e = navigator;
        return 4 <= Zd(["ApplePayError"in d, "CSSPrimitiveValue"in d, "Counter"in d, 0 === e.vendor.indexOf("Apple"), "getStorageUpdates"in e, "WebKitMediaKeys"in d])
    }
    function Yd() {
        var d = window;
        return 3 <= Zd(["safari"in d, !("DeviceMotionEvent"in d), !("ongestureend"in d), !("standalone"in navigator)])
    }
    function Ee() {
        var d = De(), e, b;
        var h = window;
        h = 4 <= Zd(["buildID"in navigator, "MozAppearance"in (null !== (b = null === (e = document.documentElement) || void 0 === e ? void 0 : e.style) && void 0 !== b ? b : {}), "MediaRecorderErrorEvent"in h, "mozInnerScreenX"in h, "CSSMozDocumentRule"in h, "CanvasCaptureMediaStream"in h]);
        if (!d && !h)
            return !1;
        e = window;
        return 2 <= Zd(["onorientationchange"in e, "orientation"in e, d && "SharedWorker"in e, h && /android/i.test(navigator.appVersion)])
    }
    ;function Fe(d, e) {
        d = [d[0] >>> 16, d[0] & 65535, d[1] >>> 16, d[1] & 65535];
        e = [e[0] >>> 16, e[0] & 65535, e[1] >>> 16, e[1] & 65535];
        var b = [0, 0, 0, 0];
        b[3] += d[3] + e[3];
        b[2] += b[3] >>> 16;
        b[3] &= 65535;
        b[2] += d[2] + e[2];
        b[1] += b[2] >>> 16;
        b[2] &= 65535;
        b[1] += d[1] + e[1];
        b[0] += b[1] >>> 16;
        b[1] &= 65535;
        b[0] += d[0] + e[0];
        b[0] &= 65535;
        return [b[0] << 16 | b[1], b[2] << 16 | b[3]]
    }
    function Ge(d, e) {
        d = [d[0] >>> 16, d[0] & 65535, d[1] >>> 16, d[1] & 65535];
        e = [e[0] >>> 16, e[0] & 65535, e[1] >>> 16, e[1] & 65535];
        var b = [0, 0, 0, 0];
        b[3] += d[3] * e[3];
        b[2] += b[3] >>> 16;
        b[3] &= 65535;
        b[2] += d[2] * e[3];
        b[1] += b[2] >>> 16;
        b[2] &= 65535;
        b[2] += d[3] * e[2];
        b[1] += b[2] >>> 16;
        b[2] &= 65535;
        b[1] += d[1] * e[3];
        b[0] += b[1] >>> 16;
        b[1] &= 65535;
        b[1] += d[2] * e[2];
        b[0] += b[1] >>> 16;
        b[1] &= 65535;
        b[1] += d[3] * e[1];
        b[0] += b[1] >>> 16;
        b[1] &= 65535;
        b[0] += d[0] * e[3] + d[1] * e[2] + d[2] * e[1] + d[3] * e[0];
        b[0] &= 65535;
        return [b[0] << 16 | b[1], b[2] << 16 | b[3]]
    }
    function He(d, e) {
        e %= 64;
        if (32 === e)
            return [d[1], d[0]];
        if (32 > e)
            return [d[0] << e | d[1] >>> 32 - e, d[1] << e | d[0] >>> 32 - e];
        e -= 32;
        return [d[1] << e | d[0] >>> 32 - e, d[0] << e | d[1] >>> 32 - e]
    }
    function Ie(d, e) {
        e %= 64;
        return 0 === e ? d : 32 > e ? [d[0] << e | d[1] >>> 32 - e, d[1] << e] : [d[1] << e - 32, 0]
    }
    function Je(d, e) {
        return [d[0] ^ e[0], d[1] ^ e[1]]
    }
    function Ke(d) {
        d = Je(d, [0, d[0] >>> 1]);
        d = Ge(d, [4283543511, 3981806797]);
        d = Je(d, [0, d[0] >>> 1]);
        d = Ge(d, [3301882366, 444984403]);
        return d = Je(d, [0, d[0] >>> 1])
    }
    function xe(d) {
        d = d || "";
        var e = e || 0;
        var b = d.length % 16
          , h = d.length - b
          , k = [0, e];
        e = [0, e];
        var m = [2277735313, 289559509], n = [1291169091, 658871167], r;
        for (r = 0; r < h; r += 16) {
            var u = [d.charCodeAt(r + 4) & 255 | (d.charCodeAt(r + 5) & 255) << 8 | (d.charCodeAt(r + 6) & 255) << 16 | (d.charCodeAt(r + 7) & 255) << 24, d.charCodeAt(r) & 255 | (d.charCodeAt(r + 1) & 255) << 8 | (d.charCodeAt(r + 2) & 255) << 16 | (d.charCodeAt(r + 3) & 255) << 24];
            var v = [d.charCodeAt(r + 12) & 255 | (d.charCodeAt(r + 13) & 255) << 8 | (d.charCodeAt(r + 14) & 255) << 16 | (d.charCodeAt(r + 15) & 255) << 24, d.charCodeAt(r + 8) & 255 | (d.charCodeAt(r + 9) & 255) << 8 | (d.charCodeAt(r + 10) & 255) << 16 | (d.charCodeAt(r + 11) & 255) << 24];
            u = Ge(u, m);
            u = He(u, 31);
            u = Ge(u, n);
            k = Je(k, u);
            k = He(k, 27);
            k = Fe(k, e);
            k = Fe(Ge(k, [0, 5]), [0, 1390208809]);
            v = Ge(v, n);
            v = He(v, 33);
            v = Ge(v, m);
            e = Je(e, v);
            e = He(e, 31);
            e = Fe(e, k);
            e = Fe(Ge(e, [0, 5]), [0, 944331445])
        }
        u = [0, 0];
        v = [0, 0];
        switch (b) {
        case 15:
            v = Je(v, Ie([0, d.charCodeAt(r + 14)], 48));
        case 14:
            v = Je(v, Ie([0, d.charCodeAt(r + 13)], 40));
        case 13:
            v = Je(v, Ie([0, d.charCodeAt(r + 12)], 32));
        case 12:
            v = Je(v, Ie([0, d.charCodeAt(r + 11)], 24));
        case 11:
            v = Je(v, Ie([0, d.charCodeAt(r + 10)], 16));
        case 10:
            v = Je(v, Ie([0, d.charCodeAt(r + 9)], 8));
        case 9:
            v = Je(v, [0, d.charCodeAt(r + 8)]),
            v = Ge(v, n),
            v = He(v, 33),
            v = Ge(v, m),
            e = Je(e, v);
        case 8:
            u = Je(u, Ie([0, d.charCodeAt(r + 7)], 56));
        case 7:
            u = Je(u, Ie([0, d.charCodeAt(r + 6)], 48));
        case 6:
            u = Je(u, Ie([0, d.charCodeAt(r + 5)], 40));
        case 5:
            u = Je(u, Ie([0, d.charCodeAt(r + 4)], 32));
        case 4:
            u = Je(u, Ie([0, d.charCodeAt(r + 3)], 24));
        case 3:
            u = Je(u, Ie([0, d.charCodeAt(r + 2)], 16));
        case 2:
            u = Je(u, Ie([0, d.charCodeAt(r + 1)], 8));
        case 1:
            u = Je(u, [0, d.charCodeAt(r)]),
            u = Ge(u, m),
            u = He(u, 31),
            u = Ge(u, n),
            k = Je(k, u)
        }
        k = Je(k, [0, d.length]);
        e = Je(e, [0, d.length]);
        k = Fe(k, e);
        e = Fe(e, k);
        k = Ke(k);
        e = Ke(e);
        k = Fe(k, e);
        e = Fe(e, k);
        d = new ArrayBuffer(16);
        b = new DataView(d);
        b.setInt32(0, k[0], !0);
        b.setInt32(4, k[1], !0);
        b.setInt32(8, e[0], !0);
        b.setInt32(12, e[1], !0);
        return new Uint8Array(d)
    }
    ;function Le() {
        return ye(this, function e() {
            var b, h, k, m, n, r, u, v;
            return Ob(e, function(y) {
                switch (y.a) {
                case 1:
                    b = window;
                    h = b.OfflineAudioContext || b.webkitOfflineAudioContext;
                    if (!h)
                        return y.return(xe(-(2).toString()));
                    var x;
                    if (x = Xd() && !Yd())
                        x = window,
                        x = !(3 <= Zd(["DOMRectList"in x, "RTCPeerConnectionIceEvent"in x, "SVGGeometryElement"in x, "ontransitioncancel"in x]));
                    if (x)
                        return y.return(xe(-(1).toString()));
                    k = 4500;
                    m = new h(1,5E3,44100);
                    n = m.createOscillator();
                    n.type = "triangle";
                    n.frequency.value = 1E4;
                    r = m.createDynamicsCompressor();
                    r.threshold.value = -50;
                    r.knee.value = 40;
                    r.ratio.value = 12;
                    r.attack.value = 0;
                    r.release.value = .25;
                    n.connect(r);
                    r.connect(m.destination);
                    n.start(0);
                    y.f = 2;
                    return Eb(y, Me(m), 4);
                case 4:
                    u = y.c;
                    y.a = 3;
                    y.f = 0;
                    break;
                case 2:
                    return v = Gb(y),
                    "timeout" === v.name || "suspended" === v.name ? y.return(xe(-(3).toString())) : y.return(xe(-(4).toString()));
                case 3:
                    return y.return(Ne(u.getChannelData(0).subarray(k)))
                }
            })
        })
    }
    function Me(d) {
        return new Promise(function(e, b) {
            function h() {
                d.startRendering();
                switch (d.state) {
                case "running":
                    setTimeout(function() {
                        return b(Oe("timeout"))
                    }, 1E3);
                    break;
                case "suspended":
                    document.hidden || k--,
                    0 < k ? setTimeout(h, 500) : b(Oe("suspended"))
                }
            }
            d.oncomplete = function(m) {
                return e(m.renderedBuffer)
            }
            ;
            var k = 3;
            h()
        }
        )
    }
    function Ne(d) {
        for (var e = "", b = 0; b < d.length; ++b)
            e += d[b].toString() + ",";
        return xe(e)
    }
    function Oe(d) {
        var e = Error(d);
        e.name = d;
        return e
    }
    ;function Pe(d) {
        function e(m) {
            return 26 > m ? 65 + m : 52 > m ? 71 + m : 62 > m ? m - 4 : 62 == m ? 43 : 47
        }
        var b = ""
          , h = 0;
        for (h = 0; h + 2 < d.length; h += 3) {
            var k = d[h] << 16 | d[h + 1] << 8 | d[h + 2];
            b += String.fromCharCode(e(k >> 18 & 63), e(k >> 12 & 63), e(k >> 6 & 63), e(k & 63))
        }
        h + 1 < d.length ? (d = d[h] << 8 | d[h + 1],
        b += String.fromCharCode(e(d >> 10 & 63), e(d >> 4 & 63), e(d << 2 & 63), 61)) : h < d.length && (d = d[h],
        b += String.fromCharCode(e(d >> 2 & 63), e(d << 4 & 63), 61, 61));
        return b
    }
    ;function Qe() {
        var d = document.createElement("canvas");
        d.width = 1;
        d.height = 1;
        d = [d, d.getContext("2d")];
        var e = ba(d);
        d = e.next().value;
        var b = e.next().value;
        if (b && d.toDataURL) {
            b.rect(0, 0, 10, 10);
            b.rect(2, 2, 6, 6);
            e = !b.isPointInPath(5, 5, "evenodd");
            d.width = 122;
            d.height = 110;
            b.globalCompositeOperation = "multiply";
            var h = ba([["#f2f", 40, 40], ["#2ff", 80, 40], ["#ff2", 60, 80]]);
            for (var k = h.next(); !k.done; k = h.next()) {
                var m = ba(k.value);
                k = m.next().value;
                var n = m.next().value;
                m = m.next().value;
                b.fillStyle = k;
                b.beginPath();
                b.arc(n, m, 40, 0, 2 * Math.PI, !0);
                b.closePath();
                b.fill()
            }
            b.fillStyle = "#f9c";
            b.arc(60, 60, 60, 0, 2 * Math.PI, !0);
            b.arc(60, 60, 20, 0, 2 * Math.PI, !0);
            b.fill("evenodd");
            h = d.toDataURL();
            h = xe(h);
            d.width = 240;
            d.height = 60;
            b.textBaseline = "alphabetic";
            b.fillStyle = "#f60";
            b.fillRect(100, 1, 62, 20);
            b.fillStyle = "#069";
            b.font = '11pt "Times New Roman"';
            k = "Cwm fjordbank gly " + String.fromCharCode(55357, 56835);
            b.fillText(k, 2, 15);
            b.fillStyle = "rgba(102, 204, 0, 0.2)";
            b.font = "18pt Arial";
            b.fillText(k, 4, 45);
            d = d.toDataURL();
            d = {
                Qb: e,
                zb: h,
                text: xe(d)
            }
        } else
            d = {
                Qb: !1,
                zb: new Uint8Array(16),
                text: new Uint8Array(16)
            };
        return d
    }
    ;function Re() {
        for (var d = ba(["rec2020", "p3", "srgb"]), e = d.next(); !e.done; e = d.next())
            if (e = e.value,
            window.matchMedia("(color-gamut: " + e + ")").matches)
                return e
    }
    ;function Se(d) {
        if ("undefined" !== typeof d) {
            "undefined" === typeof dwn_ns.dwn_dyn && (dwn_ns.dwn_dyn = {});
            "boolean" === typeof d.geo && (dwn_ns.geo_location_enabled = d.geo);
            "boolean" === typeof d.sensor && (dwn_ns.device_sensor_enabled = d.sensor);
            "string" === typeof d.profiling_domain && (dwn_ns.profiling_domain = d.profiling_domain);
            "string" === typeof d.dns_domain && (dwn_ns.dns_domain = d.dns_domain);
            "string" === typeof d.webrtc_domain && (dwn_ns.webrtc_domain = d.webrtc_domain);
            "boolean" === typeof d.use_deep_query_selector && (dwn_ns.use_deep_query_selector = d.use_deep_query_selector);
            "boolean" === typeof d.profiling_debug && (dwn_ns.Lb = d.profiling_debug);
            "boolean" === typeof d.one_instance && (dwn_ns.one_instance = d.one_instance);
            "string" === typeof d.http_method && ("ajax" === d.http_method ? (dwn_ns.dwn_fp_ajax = !0,
            dwn_ns.dwn_fp_fetch = !1) : "fetch" === d.http_method && (dwn_ns.dwn_fp_fetch = !0,
            dwn_ns.dwn_fp_ajax = !1));
            if ("undefined" !== typeof d.log)
                if ("string" === typeof d.log)
                    dwn_ns["enable_log_" + d.log] = !0;
                else if (Array.isArray(d.log))
                    d.log.forEach(function(e) {
                        dwn_ns["enable_log_" + e] = !0
                    });
                else
                    throw Error("config.log has to be an array or a string");
            if ("object" === typeof d.key_bm)
                if (d = d.key_bm,
                Array.isArray(d))
                    d.forEach(function(e) {
                        var b = e.selector
                          , h = e.context;
                        b && h && (dwn_ns.dwn_dyn[h] = {
                            selector: b,
                            context: h
                        },
                        "boolean" === typeof e.use_deep_query_selector && (dwn_ns.dwn_dyn[h].use_deep_query_selector = e.use_deep_query_selector))
                    });
                else
                    throw Error("config.key_bm has to be an array with {selector, context}");
        }
    }
    ;function Te() {
        if (Ue("no-preference"))
            return 1;
        if (Ue("high") || Ue("more"))
            return 2;
        if (Ue("low") || Ue("less"))
            return 0;
        if (Ue("forced"))
            return 10
    }
    function Ue(d) {
        return window.matchMedia("(prefers-contrast: " + d + ")").matches
    }
    ;function Ve() {
        return new Promise(function(d, e) {
            try {
                if (navigator && navigator.userAgentData && navigator.userAgentData.getHighEntropyValues)
                    navigator.userAgentData.getHighEntropyValues(["architecture", "bitness"]).then(function(b) {
                        if (b.architecture) {
                            var h = b.architecture;
                            b.bitness && (h += "_" + b.bitness);
                            return d(h)
                        }
                        return e("no architecture")
                    });
                else
                    return e("navigator object doesn't exist")
            } catch (b) {
                return e("exception: " + b)
            }
        }
        )
    }
    ;function We(d, e) {
        e = void 0 === e ? "all" : e;
        var b = ""
          , h = 62;
        "hex" === e ? h = 16 : "lower" === e && (h = 36);
        for (e = 0; e < d; e++)
            b += "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".charAt(Math.floor(Math.random() * h));
        return b
    }
    function Xe(d) {
        return ("00" + d.toString(16)).slice(-2)
    }
    function Ye(d) {
        for (var e = [], b = 0; b < d.length; b++)
            e.push(d.charCodeAt(b));
        return new Uint8Array(e)
    }
    function Ze(d) {
        var e = typeof d;
        if ("undefined" === e || "number" !== e)
            return !1;
        var b = !1;
        if ("number" === e || "string" === e)
            b = 0 >= d;
        return b
    }
    ;var $e = dwn_ns.b("crypto")
      , af = dwn_ns.Cc()
      , bf = window.crypto || window.msCrypto
      , cf = "undefined" !== typeof bf ? bf.subtle || bf.Ud : null;
    function df(d, e) {
        return new Promise(function(b, h) {
            try {
                var k = d.open("dwn_db_3lkbmv5", 1)
                  , m = !1;
                k.onupgradeneeded = function(n) {
                    $e("onupgradeneeded triggered");
                    m = !0;
                    var r = n.target.result;
                    r.createObjectStore("dwn_db_3lkbmv5", {
                        keyPath: "id"
                    }).transaction.oncomplete = function() {
                        var u = cf.generateKey({
                            name: "ECDSA",
                            namedCurve: "P-256"
                        }, !1, ["sign"]);
                        if ("undefined" === typeof u)
                            return h("Failed to subtle.generateKey");
                        u.then(function(v) {
                            try {
                                if ("undefined" !== typeof v) {
                                    $e("Generated keypair: ", v);
                                    var y = r.transaction("dwn_db_3lkbmv5", "readwrite").objectStore("dwn_db_3lkbmv5")
                                      , x = Date.now()
                                      , w = v.privateKey
                                      , N = v.publicKey
                                      , H = y.add({
                                        id: "dwn_db_3lkbmv5",
                                        puk: N,
                                        prk: w,
                                        ct: x
                                    });
                                    H.onsuccess = function() {
                                        var q = {
                                            ia: x,
                                            privateKey: w,
                                            publicKey: N,
                                            algorithm: "ECDSA",
                                            storage: "indexDB"
                                        };
                                        e.push(Qb.ic);
                                        $e("Add store onsuccess", q);
                                        b(q)
                                    }
                                    ;
                                    H.onerror = function(q) {
                                        h("Add store failed onerror: " + q)
                                    }
                                } else
                                    h("Failed to get in result.then")
                            } catch (q) {
                                h("generateKey result.then failed: " + q)
                            }
                        }, function(v) {
                            h("createCryptoKeyPair result.then failed: " + v)
                        })
                    }
                }
                ;
                k.onsuccess = function(n) {
                    m || (n = n.target.result,
                    $e("onsuccess triggered"),
                    n = n.transaction("dwn_db_3lkbmv5", "readonly").objectStore("dwn_db_3lkbmv5").get("dwn_db_3lkbmv5"),
                    n.onsuccess = function(r) {
                        try {
                            var u = r.target.result;
                            af("storedObj", u);
                            var v = u.ct
                              , y = u.prk
                              , x = u.puk;
                            v && y && x ? (r = {
                                ia: v,
                                privateKey: y,
                                publicKey: x,
                                algorithm: "ECDSA",
                                storage: "indexDB"
                            },
                            e.push(Qb.Wb),
                            $e("Get store onsuccess", r),
                            b(r)) : ($e("Got wrong store: ", v, y, x),
                            e.push(Qb.Rb),
                            h("Get store succeed, but content is wrong: " + v))
                        } catch (w) {
                            h("Get store succeed, but catch error: " + w)
                        }
                    }
                    ,
                    n.onerror = function(r) {
                        h("Get store failed onerror: " + r)
                    }
                    )
                }
                ;
                k.onerror = function(n) {
                    h("Failed on open indexedDB: " + n)
                }
            } catch (n) {
                h("Failed on get_crypto_auth: " + n)
            }
            setTimeout(function() {
                0 == e.length && e.push(Qb.TIMEOUT);
                h("getDBStore timeout")
            }, 1E3)
        }
        )
    }
    function ef(d) {
        return new Promise(function(e, b) {
            try {
                var h = cf.exportKey("spki", d);
                h && "undefined" !== typeof h || ($e("Failed to exportKey spki"),
                b("Failed to exportKey spki"));
                "undefined" !== typeof h.then ? h.then(function(k) {
                    k = Pe(new Uint8Array(k));
                    $e("Got exportKey on ret.then: " + k);
                    e(k)
                }).catch(function(k) {
                    throw k;
                }) : h.oncomplete = function(k) {
                    if (k.target && k.target.result)
                        return k = Pe(new Uint8Array(k.target.result)),
                        $e("Got exportKey oncomplete: " + k),
                        e(k);
                    b("Empty event.targe")
                }
            } catch (k) {
                $e("Can't export key: " + k),
                b(k)
            }
            setTimeout(function() {
                e("timeout in export")
            }, 1E3)
        }
        )
    }
    function ff(d) {
        return ("00" + (d.length / 2).toString(16)).slice(-2).toString()
    }
    function gf(d) {
        try {
            var e = Array.prototype.map.call(new Uint8Array(d), Xe).join("")
              , b = e.substring(0, e.length / 2)
              , h = e.substring(e.length / 2);
            for (e = d = !0; 0 === b.indexOf("00"); )
                b = b.substring(2),
                d = !1;
            for (d && 127 < parseInt(b.substring(0, 2), 16) && (b = "00" + b); 0 === h.indexOf("00"); )
                h = h.substring(2),
                e = !1;
            e && 127 < parseInt(h.substring(0, 2), 16) && (h = "00" + h);
            var k = "02" + ff(b) + b + "02" + ff(h) + h
              , m = ("30" + ff(k) + k).match(/.{1,2}/g);
            if (m) {
                var n = new Uint8Array(m.map(function(r) {
                    return parseInt(r, 16)
                }));
                return Pe(n)
            }
        } catch (r) {
            $e("Failed to get signature: " + r)
        }
    }
    function hf(d, e, b) {
        return new Promise(function(h, k) {
            try {
                var m = d.algorithm.name
                  , n = Ye(m + e + b)
                  , r = cf.sign({
                    name: m,
                    hash: {
                        name: "SHA-256"
                    }
                }, d, n);
                "undefined" !== typeof r.then ? r.then(function(u) {
                    if (u = gf(u))
                        $e("Got signature in ret.then: " + u),
                        h(u);
                    k("no signature")
                }, function(u) {
                    $e("Failed to sign data: " + u);
                    k(u)
                }).catch(function(u) {
                    throw u;
                }) : r.oncomplete = function(u) {
                    if (u = gf(u.target.result))
                        $e("Got signature oncomplete: " + u),
                        h(u);
                    k("no signature")
                }
            } catch (u) {
                $e("signNonce: " + u),
                k(u)
            }
            setTimeout(function() {
                h("timeout in signNonce")
            }, 1E3)
        }
        )
    }
    function jf(d, e) {
        return ye(this, function h() {
            var k, m, n, r, u, v, y, x, w, N, H, q, M, U;
            return Ob(h, function(z) {
                switch (z.a) {
                case 1:
                    k = [];
                    m = {};
                    if (0 === d.length)
                        return $e("secure_id nonce is empty, not first time for embedded nonce"),
                        z.return(void 0);
                    n = dwn_ns.Fc;
                    if (!n)
                        return $e("Failed to get secure_id protobuf data structure"),
                        z.return(void 0);
                    z.f = 2;
                    r = window.indexedDB || window.a || window.g || window.c || window.f;
                    if (!r || !bf || !cf)
                        throw "secure_id not supported";
                    return Eb(z, df(r, k), 4);
                case 4:
                    u = z.c;
                    if (!u)
                        throw "getDBStore failed";
                    v = u.ia;
                    y = u.privateKey;
                    x = u.publicKey;
                    w = u.storage;
                    N = u.algorithm;
                    if (!y || !x) {
                        z.D(5);
                        break
                    }
                    return Eb(z, ef(x), 6);
                case 6:
                    H = z.c;
                    if (!H) {
                        z.D(5);
                        break
                    }
                    return Eb(z, hf(y, d, v), 8);
                case 8:
                    (q = z.c) && (m = {
                        ia: v,
                        publicKey: H,
                        Mb: q,
                        algorithm: N,
                        storage: w
                    });
                case 5:
                    z.a = 3;
                    z.f = 0;
                    break;
                case 2:
                    M = Gb(z),
                    $e("Failed on secure_id", d, M.toString());
                case 3:
                    return 0 == k.length && k.push(Qb.Xb),
                    m.signals = k,
                    U = dwn_ns.b("main"),
                    U("Got secure_id from", e, d, m),
                    m.ia && Z(n, 59, m.ia),
                    m.publicKey && Z(n, 60, m.publicKey),
                    m.Mb && Z(n, 61, m.Mb),
                    m.algorithm && Z(n, 74, m.algorithm),
                    m.storage && Z(n, 73, m.storage),
                    0 < k.length && Z(n, 89, k || []),
                    z.return(m)
                }
            })
        })
    }
    ;function kf(d) {
        return new Promise(function(e) {
            return setTimeout(e, d, void 0)
        }
        )
    }
    ;function lf(d, e) {
        var b = void 0 === b ? 50 : b;
        var h, k;
        return ye(this, function n() {
            var r, u;
            return Ob(n, function(v) {
                switch (v.a) {
                case 1:
                    r = document;
                case 2:
                    return r.body ? (u = r.createElement("iframe"),
                    Fb(v),
                    Eb(v, new Promise(function(y, x) {
                        function w() {
                            var N;
                            "complete" === (null === (N = u.contentWindow) || void 0 === N ? void 0 : N.document.readyState) ? y(null) : setTimeout(w, 10)
                        }
                        u.onload = y;
                        u.onerror = x;
                        x = u.style;
                        x.setProperty("display", "block", "important");
                        x.position = "absolute";
                        x.top = "0";
                        x.left = "0";
                        x.visibility = "hidden";
                        e && "srcdoc"in u ? u.srcdoc = e : u.src = "about:blank";
                        r.body.appendChild(u);
                        w()
                    }
                    ), 8)) : Eb(v, kf(b), 2);
                case 8:
                    return (null === (h = u.contentWindow) || void 0 === h ? 0 : h.document.body) ? Eb(v, d(u, u.contentWindow), 11) : Eb(v, kf(b), 8);
                case 11:
                    return v.return(v.c);
                case 5:
                    Hb(v),
                    null === (k = u.parentNode) || void 0 === k ? void 0 : k.removeChild(u),
                    Ib(v)
                }
            })
        })
    }
    ;var mf = [{
        key: 0,
        list: ["#Iklan-Melayang", "#Kolom-Iklan-728", "#SidebarIklan-wrapper", 'a[title="7naga poker" i]', '[title="ALIENBOLA" i]']
    }, {
        key: 1,
        list: ["#quangcaomb", ".i-said-no-thing-can-stop-me-warning.dark", ".quangcao", '[href^="https://r88.vn/"]', '[href^="https://zbet.vn/"]']
    }, {
        key: 2,
        list: [".mainostila", ".sponsorit", ".ylamainos", 'a[href*="/clickthrgh.asp?"]', 'a[href^="https://app.readpeak.com/ads"]']
    }, {
        key: 3,
        list: ["#navbar_notice_50", 'a[href^="https://iqoption.com/lp/mobile-partner/?aff="]', ".kadr", 'TABLE[width="140px"]', "#divAgahi"]
    }, {
        key: 4,
        list: ["#adblock_message", ".adblockInfo", ".deadblocker-header-bar", ".no-ad-reminder", "#AdBlockDialog"]
    }, {
        key: 5,
        list: ['amp-embed[type="zen"]', ".hs-sosyal", "#cookieconsentdiv", 'div[class^="app_gdpr"]', ".as-oil"]
    }, {
        key: 6,
        list: ["#gads_middle", ".tjads", ".BetterJsPopOverlay", "#ad_300X250", "#bannerfloat22"]
    }, {
        key: 7,
        list: ['a[href*=".123ch.cn"]', 'a[href*=".ttz5.cn"]', 'a[href*=".yabovip2027.com/"]', ".tm3all2h4b", "#j-new-ad"]
    }, {
        key: 8,
        list: ["#div_banniere_pub", 'a[href^="https://secure.securitetotale.fr/"]', 'a[href*="fducks.com/"]', 'a[href^="http://frtyd.com/"]', ".publicite1"]
    }, {
        key: 9,
        list: [".banneritemwerbung_head_1", ".boxstartwerbung", ".werbung3", 'a[href^="http://www.ichwuerde.com/?ref="]', 'a[href^="http://partners.adklick.de/tracking.php?"]']
    }, {
        key: 10,
        list: [".ad-text-blockA01", "._popIn_infinite_video", "[class^=blogroll_wrapper]", 'a[href^="http://ad2.trafficgate.net/"]', 'a[href^="http://www.rssad.jp/"]']
    }, {
        key: 11,
        list: ["amp-auto-ads", "#mgid_iframe", ".amp_ad", "amp-sticky-ad", ".plugin-blogroll"]
    }, {
        key: 12,
        list: ['a[href^="https://ya-distrib.ru/r/"]', '[onclick*=".twkv.ru"]', ".reclama", 'div[id^="smi2adblock"]', 'div[id^="AdFox_banner_"]']
    }, {
        key: 13,
        list: ['a[href^="//www.stumbleupon.com/submit?url="]', 'a[href^="//telegram.me/share/url?"]', ".etsy-tweet", "#inlineShare", ".popup-social"]
    }, {
        key: 14,
        list: ["#barraPublicidade", "#Publicidade", "#publiEspecial", "#queTooltip", '[href^="http://ads.glispa.com/"]']
    }, {
        key: 15,
        list: ['amp-embed[type="taboola"]', "#qoo-counter", 'a[href^="http://click.hotlog.ru/"]', 'a[href^="http://hitcounter.ru/top/stat.php"]', 'a[href^="http://top.mail.ru/jump"]']
    }, {
        key: 16,
        list: ["#backkapat", "#reklami", 'a[href^="http://adserv.ontek.com.tr/"]', 'a[href^="http://izlenzi.com/campaign/"]', 'a[href^="http://www.installads.net/"]']
    }, {
        key: 17,
        list: ["td#freenet_table_ads", "#newAd", "#ea_intext_div", ".lapni-pop-over", "#xenium_hot_offers"]
    }, {
        key: 18,
        list: ['[lazy-ad="leftthin_banner"]', "#ad_300x250_2", "#interstitialAd", "#wide_ad_unit", ".showcaseAd"]
    }, {
        key: 19,
        list: ['a[href*=".wensixuetang.com/"]', 'A[href*="/hth107.com/"]', '.appguide-wrap[onclick*="bcebos.com"]', ".frontpageAdvM", "#taotaole"]
    }, {
        key: 20,
        list: ["#CookieEU", "#__cookies_", "#les_cookies", ".asset_balaNotification", ".gdpr-tab"]
    }, {
        key: 21,
        list: ["#onlajny-stickers", "#reklamni-box", ".reklama-megaboard", ".sklik", '[id^="sklikReklama"]']
    }, {
        key: 22,
        list: ["#advertentie", "#vipAdmarktBannerBlock", ".adstekst", 'a[href^="http://adserver.webads.nl/adclick/"]', "#semilo-lrectangle"]
    }, {
        key: 23,
        list: ["#LxWerbeteaser", 'a[href^="http://www.kontakt-vermittler.de/?wm="]', ".werbung301", ".ads_bueroklammer", "#Werbung_Sky"]
    }, {
        key: 24,
        list: [".box_adv_annunci", ".sb-box-pubbliredazionale", 'a[href^="http://affiliazioniads.snai.it/"]', 'a[href^="https://adserver.html.it/"]', 'a[href^="https://affiliazioniads.snai.it/"]']
    }, {
        key: 25,
        list: [".reklamos_tarpas", ".reklamos_nuorodos", 'img[alt="Reklaminis skydelis"]', 'img[alt="Dedikuoti.lt serveriai"]', 'img[alt="Hostingas Serveriai.lt"]']
    }, {
        key: 26,
        list: ['A[href*="http://pay4results24.eu"]']
    }, {
        key: 27,
        list: ["#feedback-tab", "#taboola-below-article", ".feedburnerFeedBlock", ".widget-feedburner-counter", '[title="Subscribe to our blog"]']
    }, {
        key: 28,
        list: [".util-bar-module-firefly-visible"]
    }, {
        key: 29,
        list: [".open.pushModal", "#issuem-leaky-paywall-articles-zero-remaining-nag", 'div[style*="box-shadow: rgb(136, 136, 136) 0px 0px 12px; color: "]', 'div[class$="-hide"][zoompage-fontsize][style="display: block;"]', ".BlockNag__Card"]
    }, {
        key: 30,
        list: [".td-tags-and-social-wrapper-box", ".twitterContainer", ".youtube-social", 'a[title^="Like us on Facebook"]', 'img[alt^="Share on Digg"]']
    }, {
        key: 31,
        list: ['a[href*="casinopro.se"][target="_blank"]', 'a[href*="doktor-se.onelink.me"]', "article.category-samarbete", "div.holidAds", "ul.adsmodern"]
    }, {
        key: 32,
        list: ['A[href*="adman.otenet.gr/click?"]', 'A[href*="http://axiabanners.exodus.gr/"]', 'A[href*="http://interactive.forthnet.gr/click?"]', "DIV.agores300", "TABLE.advright"]
    }, {
        key: 33,
        list: ['A[href*="ad.eval.hu"]', 'A[href*="ad.netmedia.hu"]', 'A[href*="daserver.ultraweb.hu"]', "#cemp_doboz", ".optimonk-iframe-container"]
    }, {
        key: 34,
        list: ['.alert-info[data-block-track*="CookieNotice"]', ".ModuleTemplateCookieIndicator", ".o--cookies--container", ".cookie-msg-info-container", "#cookies-policy-sticky"]
    }, {
        key: 35,
        list: ['A[href^="/framework/resources/forms/ads.aspx"]']
    }, {
        key: 36,
        list: ['a[href="http://www.salidzini.lv/"][style="display: block; width: 120px; height: 40px; overflow: hidden; position: relative;"]', 'a[href="http://www.salidzini.lv/"][style="display: block; width: 88px; height: 31px; overflow: hidden; position: relative;"]']
    }, {
        key: 37,
        list: ['a[href*="//kingtoon.slnk.kr"]', 'a[href*="//playdsb.com/kr"]', "div.logly-lift-adz", 'div[data-widget_id="ml6EJ074"]', "ins.daum_ddn_area"]
    }, {
        key: 38,
        list: [".geminiLB1Ad", ".right-and-left-sponsers", 'a[href*=".aflam.info"]', 'a[href*="booraq.org"]', 'a[href*="dubizzle.com/ar/?utm_source="]']
    }, {
        key: 39,
        list: ['a[href^="http://promo.vador.com/"]', "#adcontainer_recherche", 'a[href*="weborama.fr/fcgi-bin/"]', ".site-pub-interstitiel", 'div[id^="crt-"][data-criteo-id]']
    }, {
        key: 40,
        list: ["#ceneo-placeholder-ceneo-12", '[href^="https://aff.sendhub.pl/"]', 'a[href^="http://advmanager.techfun.pl/redirect/"]', 'a[href^="http://www.trizer.pl/?utm_source"]', "div#skapiec_ad"]
    }, {
        key: 41,
        list: ['a[href^="//afftrk.altex.ro/Counter/Click"]', 'a[href^="/magazin/"]', 'a[href^="https://blackfridaysales.ro/trk/shop/"]', 'a[href^="https://event.2performant.com/events/click"]', 'a[href^="https://l.profitshare.ro/"]']
    }, {
        key: 42,
        list: ['a[href*="//febrare.ru/"]', 'a[href*="//utimg.ru/"]', 'a[href*="://chikidiki.ru"]', "#pgeldiz", ".yandex-rtb-block"]
    }, {
        key: 43,
        list: ["a[href*=macau-uta-popup]", "#ads-google-middle_rectangle-group", ".ads300s", ".bumq", ".img-kosana"]
    }, {
        key: 44,
        list: ["#mod-social-share-2", "#social-tools", ".ctpl-fullbanner", ".zergnet-recommend", ".yt.btn-link.btn-md.btn"]
    }];
    function nf() {
        var d = {}.debug;
        return ye(this, function b() {
            var h, k, m, n, r, u, v, y;
            return Ob(b, function(x) {
                if (1 == x.a) {
                    if (!Xd() && !Ee())
                        return x.return(void 0);
                    h = [].concat.apply([], ca(mf.map(function(w) {
                        return w.list
                    })));
                    return Eb(x, of(h), 2)
                }
                k = x.c;
                d && pf(k);
                m = [];
                n = ba(mf);
                for (r = n.next(); !r.done; r = n.next())
                    u = r.value,
                    v = u.list,
                    y = Zd(v.map(function(w) {
                        return k[w]
                    })),
                    y > .5 * v.length && m.push(u.key);
                return x.return(m)
            })
        })
    }
    function of(d) {
        var e;
        return ye(this, function h() {
            var k, m, n, r, u, v, y, x, w, N;
            return Ob(h, function(H) {
                if (1 == H.a)
                    for (k = document,
                    m = k.createElement("div"),
                    n = [],
                    r = {},
                    qf(m),
                    u = ba(d),
                    v = u.next(); !v.done; v = u.next()) {
                        y = v.value;
                        var q = ba(Ae(y))
                          , M = q.next().value;
                        q = q.next().value;
                        M = document.createElement(null !== M && void 0 !== M ? M : "div");
                        for (var U = ba(Object.keys(q)), z = U.next(); !z.done; z = U.next())
                            z = z.value,
                            M.setAttribute(z, q[z].join(" "));
                        x = M;
                        w = k.createElement("div");
                        qf(w);
                        w.appendChild(x);
                        m.appendChild(w);
                        n.push(x)
                    }
                if (3 != H.a)
                    return k.body ? H.D(3) : Eb(H, kf(50), 2);
                k.body.appendChild(m);
                try {
                    for (N = 0; N < d.length; ++N)
                        n[N].offsetParent || (r[d[N]] = !0)
                } finally {
                    null === (e = m.parentNode) || void 0 === e ? void 0 : e.removeChild(m)
                }
                return H.return(r)
            })
        })
    }
    function qf(d) {
        d.style.setProperty("display", "block", "important")
    }
    function pf(d) {
        for (var e = "DOM blockers debug:\n```", b = ba(mf), h = b.next(); !h.done; h = b.next()) {
            h = h.value;
            e += "\n" + h.key + ":";
            h = ba(h.list);
            for (var k = h.next(); !k.done; k = h.next())
                k = k.value,
                e += "\n  " + k + " " + (d[k] ? "\ud83d\udeab" : "\u27a1\ufe0f")
        }
        console.log(e + "\n```")
    }
    ;function rf(d) {
        function e() {
            y && (0 < h.length && /^[~+>]$/.test(h[h.length - 1]) && h.push(" "),
            h.push(y))
        }
        var b = dwn_ns.b("main"), h = [], k, m = [0], n = 0, r = /(?:[^\\]|(?:^|[^\\])(?:\\\\)+)$/, u = /^\s+$/, v = [/\s+|\/\*|["'>~+[(]/g, /\s+|\/\*|["'[\]()]/g, /\s+|\/\*|["'[\]()]/g, null, /\*\//g];
        d = d.trim();
        try {
            for (; ; ) {
                var y = "";
                var x = v[m[m.length - 1]];
                if (!x)
                    break;
                x.lastIndex = n;
                if (k = x.exec(d)) {
                    var w = n;
                    n = x.lastIndex;
                    w < n - k[0].length && (y = d.substring(w, n - k[0].length));
                    if (3 > m[m.length - 1]) {
                        e();
                        if ("[" === k[0])
                            m.push(1);
                        else if ("(" === k[0])
                            m.push(2);
                        else if (/^["']$/.test(k[0]))
                            m.push(3),
                            v[3] = new RegExp(k[0],"g");
                        else if ("/*" === k[0])
                            m.push(4);
                        else if (/^[\])]$/.test(k[0]) && 0 < m.length)
                            m.pop();
                        else if (/^(?:\s+|[~+>])$/.test(k[0]) && (0 < h.length && !u.test(h[h.length - 1]) && 0 === m[m.length - 1] && h.push(" "),
                        1 === m[m.length - 1] && 5 === h.length && "=" === h[2].charAt(h[2].length - 1) && (h[4] = " " + h[4]),
                        u.test(k[0])))
                            continue;
                        h.push(k[0])
                    } else
                        h[h.length - 1] += y,
                        r.test(h[h.length - 1]) && (4 === m[m.length - 1] && (2 > h.length || u.test(h[h.length - 2]) ? h.pop() : h[h.length - 1] = " ",
                        k[0] = ""),
                        m.pop()),
                        h[h.length - 1] += k[0]
                } else {
                    y = d.substr(n);
                    e();
                    break
                }
            }
        } catch (N) {
            b("Exception on normalizeSelector", N)
        }
        return h.join("").trim()
    }
    function sf(d) {
        var e = document;
        var b = void 0 === b ? null : b;
        var h = dwn_ns.b("main");
        try {
            d = rf(d);
            var k = e.querySelector(d);
            return document.head.createShadowRoot || document.head.attachShadow ? k ? k : tf(d, ",").reduce(function(m, n) {
                if (m)
                    return m;
                m = tf(n.replace(/^\s+/g, "").replace(/\s*([>+~]+)\s*/g, "$1"), " ").filter(function(r) {
                    return !!r
                }).map(function(r) {
                    return tf(r, ">")
                }) || [];
                n = m.length - 1;
                return (m = uf(m[n][m[n].length - 1], e, b).find(vf(m, n, e))) || null
            }, null) : k
        } catch (m) {
            h("Exception on _querySelcetorDeep", m)
        }
        return null
    }
    function vf(d, e, b) {
        return function(h) {
            var k = dwn_ns.b("main")
              , m = e
              , n = !1;
            try {
                for (; h && h.nodeType !== Node.DOCUMENT_FRAGMENT_NODE && h.nodeType !== Node.DOCUMENT_NODE; ) {
                    var r = !0;
                    if (1 === d[m].length)
                        r = h.matches(d[m]);
                    else
                        for (var u = [].concat(d[m]).reverse(), v = h, y = ba(u), x = y.next(); !x.done; x = y.next()) {
                            var w = x.value;
                            if (!v || !v.matches(w)) {
                                r = !1;
                                break
                            }
                            v = wf(v, b)
                        }
                    if (r && 0 === m) {
                        n = !0;
                        break
                    }
                    r && m--;
                    h = wf(h, b)
                }
            } catch (N) {
                k("Exception findMatchingElement", N)
            }
            return n
        }
    }
    function tf(d, e) {
        return (d = d.match(/\\?.|^$/g)) ? d.reduce(function(b, h) {
            try {
                '"' !== h || b.nb ? "'" !== h || b.quote ? b.quote || b.nb || h !== e ? b.o[b.o.length - 1] += h : b.o.push("") : (b.nb ^= 1,
                b.o[b.o.length - 1] += h) : (b.quote ^= 1,
                b.o[b.o.length - 1] += h)
            } catch (k) {}
            return b
        }, {
            o: [""]
        }).o : [""]
    }
    function wf(d, e) {
        return (d = d.parentNode) && d.host && 11 === d.nodeType ? d.host : d === e ? null : d
    }
    function uf(d, e, b) {
        b = void 0 === b ? null : b;
        var h = dwn_ns.b("main")
          , k = [];
        try {
            if (b)
                k = b;
            else {
                var m = function(n) {
                    for (var r = 0; r < n.length; r++) {
                        var u = n[r];
                        k.push(u);
                        u.shadowRoot && m(u.shadowRoot.querySelectorAll("*"))
                    }
                };
                e.shadowRoot && m(e.shadowRoot.querySelectorAll("*"));
                m(e.querySelectorAll("*"))
            }
        } catch (n) {
            h("Exception collectAllElementsDeep", n)
        }
        return d ? k.filter(function(n) {
            return n.matches(d)
        }) : k
    }
    function xf(d) {
        function e(h) {
            if (h && (h.shadowRoot && b.push(h.shadowRoot),
            (h = h.childNodes) && 0 < h.length))
                for (var k = 0; k < h.length; k++)
                    e(h[k])
        }
        var b = [];
        e(d);
        return b
    }
    ;function yf() {
        var d = "";
        try {
            d = "67254da2b6524498a07398f3033aaa9a"
        } catch (e) {
            d = We(32, "lower")
        }
        return d
    }
    function zf() {
        var d = "";
        try {
            "undefined" === typeof dwn_ns.webrtc_domain ? d = "ats.wowscale.com" : d = dwn_ns.webrtc_domain
        } catch (e) {}
        return d
    }
    function Af() {
        var d = ".json";
        switch (Math.floor(6 * Math.random())) {
        case 0:
            d = ".png";
            break;
        case 1:
            d = ".json";
            break;
        case 2:
            d = ".txt";
            break;
        case 3:
            d = ".jpeg";
            break;
        case 4:
            d = ".jpg";
            break;
        case 5:
            d = ".gif"
        }
        return d
    }
    function Bf(d) {
        var e = "";
        try {
            "undefined" === typeof dwn_ns.profiling_domain ? (e = "aps.wowscale.com",
            "none" === e && (e = "")) : e = dwn_ns.profiling_domain
        } catch (h) {
            e = ""
        }
        if (0 !== e.length) {
            var b = ".uid";
            (void 0 === d ? 0 : d) || (b = Af());
            e = "https://" + e + "/" + We(Math.floor(8 * Math.random()) + 8) + b + "?pid=" + yf()
        }
        return e
    }
    function Cf() {
        var d = "";
        try {
            "undefined" === typeof dwn_ns.dns_domain ? d = "dxf.wowscale.com" : d = dwn_ns.dns_domain
        } catch (e) {
            d = ""
        }
        0 !== d.length && (d = "https://" + yf() + "." + d + "/" + We(Math.floor(8 * Math.random()) + 8) + Af());
        return d
    }
    function Df() {
        var d = dwn_ns.b("main")
          , e = !1;
        try {
            switch (typeof dwn_ns.geo_location_enabled) {
            case "boolean":
                e = dwn_ns.geo_location_enabled;
                break;
            case "number":
                1 === dwn_ns.geo_location_enabled && (e = !0)
            }
        } catch (b) {}
        d("isGeoLocationEnabled", e);
        return e
    }
    function Ef(d, e) {
        var b;
        dwn_ns.b ? b = dwn_ns.b("main") : b = function() {}
        ;
        try {
            if (d.hostname != e.hostname)
                return b("Hostnames are different", d.href, e.href),
                !1;
            if (!e.pathname || "/" === e.pathname)
                return b("Empty path on whitelist, matched", d.href, e.href),
                !0;
            if (d.pathname != e.pathname)
                return b("Pathes are different", d.href, e.href),
                !1;
            if (0 === ca(e.searchParams.values()).concat().length)
                return !0;
            if (ca(d.searchParams.values()).concat().length !== ca(e.searchParams.values()).concat().length)
                return b("Params size are different", d.href, e.href),
                !1;
            for (var h = ba(e.searchParams.entries()), k = h.next(); !k.done; k = h.next()) {
                var m = ba(k.value)
                  , n = m.next().value
                  , r = m.next().value
                  , u = d.searchParams.get(n);
                b("search params", n, u);
                if (!u)
                    return b("Can't find param", n, d.href, e.href),
                    !1;
                if ("*" != r && r != u)
                    return b("Param values are different", n, r, u, d.href, e.href),
                    !1
            }
            return !0
        } catch (v) {
            b("Exception in isUrlMatched", v, d.href, e.href)
        }
        return !1
    }
    function Ff(d, e) {
        var b;
        dwn_ns.b ? b = dwn_ns.b("main") : b = function() {}
        ;
        try {
            var h = d;
            if (-1 === d.indexOf("://"))
                h = "https://" + window.location.hostname + d;
            else if (!d.startsWith("https://"))
                return b("fetch not https, no dwn process"),
                !1;
            var k = new URL(h);
            h = "any" == e ? "" : e;
            h.startsWith("https://") || (h = "https://" + window.location.hostname + h);
            var m = new URL(h)
              , n = Ef(k, m);
            b("whitelist matched", n, d, e);
            return n
        } catch (r) {
            b("exception", r, d, e)
        }
        return !1
    }
    function Gf() {
        var d = !1;
        try {
            "boolean" === typeof dwn_ns.use_deep_query_selector && (d = dwn_ns.use_deep_query_selector)
        } catch (e) {}
        return d
    }
    function Hf() {
        var d = "main";
        try {
            d = "v1.5.18-1026"
        } catch (e) {
            d = "main"
        }
        return d
    }
    ;var If = [1116352408, 1899447441, -1245643825, -373957723, 961987163, 1508970993, -1841331548, -1424204075, -670586216, 310598401, 607225278, 1426881987, 1925078388, -2132889090, -1680079193, -1046744716, -459576895, -272742522, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, -1740746414, -1473132947, -1341970488, -1084653625, -958395405, -710438585, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, -2117940946, -1838011259, -1564481375, -1474664885, -1035236496, -949202525, -778901479, -694614492, -200395387, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, -2067236844, -1933114872, -1866530822, -1538233109, -1090935817, -965641998];
    function Jf() {
        this.c = 1779033703;
        this.f = -1150833019;
        this.g = 1013904242;
        this.m = -1521486534;
        this.E = 1359893119;
        this.w = -1694144372;
        this.C = 528734635;
        this.H = 1541459225;
        this.Xa = this.a = 0;
        if (!Kf || 8E3 <= Lf)
            Kf = new ArrayBuffer(8E3),
            Lf = 0;
        this.M = new Uint8Array(Kf,Lf,80);
        this.ta = new Int32Array(Kf,Lf,20);
        Lf += 80
    }
    function Mf(d, e, b) {
        var h = d.M
          , k = d.ta
          , m = e.length;
        for (b |= 0; b < m; ) {
            for (var n = d.a % 64, r = n; b < m && 64 > r; )
                h[r++] = e[b++];
            64 <= r && Nf(d, k);
            d.a += r - n
        }
        return d
    }
    function Nf(d, e, b) {
        var h = d.c
          , k = d.f
          , m = d.g
          , n = d.m
          , r = d.E
          , u = d.w
          , v = d.C
          , y = d.H
          , x = 0;
        for (b |= 0; 16 > x; )
            Of[x++] = Pf(e[b++]);
        for (x = 16; 64 > x; x++)
            e = Of[x - 15],
            b = Of[x - 2],
            Of[x] = ((b >>> 17 | b << 15) ^ (b >>> 19 | b << 13) ^ b >>> 10) + Of[x - 7] + ((e >>> 7 | e << 25) ^ (e >>> 18 | e << 14) ^ e >>> 3) + Of[x - 16] | 0;
        for (x = 0; 64 > x; x++)
            e = y + ((r >>> 6 | r << 26) ^ (r >>> 11 | r << 21) ^ (r >>> 25 | r << 7)) + (v ^ r & (u ^ v)) + If[x] + Of[x] | 0,
            b = ((h >>> 2 | h << 30) ^ (h >>> 13 | h << 19) ^ (h >>> 22 | h << 10)) + (h & k | m & (h | k)) | 0,
            y = v,
            v = u,
            u = r,
            r = n + e | 0,
            n = m,
            m = k,
            k = h,
            h = e + b | 0;
        d.c = h + d.c | 0;
        d.f = k + d.f | 0;
        d.g = m + d.g | 0;
        d.m = n + d.m | 0;
        d.E = r + d.E | 0;
        d.w = u + d.w | 0;
        d.C = v + d.C | 0;
        d.H = y + d.H | 0
    }
    var Of = new Int32Array(64), Kf, Lf = 0;
    function Qf(d) {
        return (d + 4294967296).toString(16).substr(-8)
    }
    function Rf(d) {
        return d << 24 & 4278190080 | d << 8 & 16711680 | d >> 8 & 65280 | d >> 24 & 255
    }
    function Sf(d) {
        return d
    }
    var Pf = 254 === (new Uint8Array((new Uint16Array([65279])).buffer))[0] ? Sf : Rf;
    function Tf() {
        var d = !0;
        "boolean" === typeof dwn_ns.dwn_fp_ajax && (d = dwn_ns.dwn_fp_ajax);
        return d
    }
    function Uf() {
        var d = !0;
        "boolean" === typeof dwn_ns.dwn_fp_fetch && (d = dwn_ns.dwn_fp_fetch);
        return d
    }
    function Vf(d) {
        var e = "unknown";
        switch (d) {
        case 0:
            e = "fingerprint";
            break;
        case 1:
            e = "https_profiling";
            break;
        case 2:
            e = "dns";
            break;
        case 3:
            e = "nonce_https_profiling"
        }
        return e
    }
    function Wf(d, e) {
        var b = {}
          , h = {}
          , k = {}
          , m = {}
          , n = {};
        if (d = (n[0] = (b[0] = l.jc,
        b[3] = l.kc,
        b[1] = l.mc,
        b[2] = l.nc,
        b),
        n[1] = (h[0] = l.pb,
        h[3] = l.qb,
        h[1] = l.rb,
        h[2] = l.sb,
        h),
        n[2] = (k[0] = l.Sb,
        k[3] = l.Tb,
        k[1] = l.Ub,
        k[2] = l.Vb,
        k),
        n[3] = (m[0] = l.pb,
        m[3] = l.qb,
        m[1] = l.rb,
        m[2] = l.sb,
        m),
        n)[d])
            if (e = d[e])
                return e;
        return l.zc
    }
    function Xf(d) {
        var e = dwn_ns.b("main")
          , b = yf();
        if (!d && 96 > d.length)
            return e("Failed to get nonce from https profiling response", d),
            null;
        d = d.substring(0, 96);
        var h = d.toLowerCase().replace(/[^0-9a-f]/g, "");
        if (96 != h.length)
            return e("Failed to get nonce from https profiling response", d),
            null;
        d = h.substring(0, 64);
        h = h.substring(64);
        a: {
            try {
                var k = new Jf;
                if ("string" === typeof b) {
                    for (var m = k.M, n = k.ta, r = b.length, u = k.Xa, v = 0; v < r; ) {
                        for (var y = k.a % 64, x = y; v < r && 64 > x; ) {
                            var w = b.charCodeAt(v++) | 0;
                            128 > w ? m[x++] = w : 2048 > w ? (m[x++] = 192 | w >>> 6,
                            m[x++] = 128 | w & 63) : 55296 > w || 57343 < w ? (m[x++] = 224 | w >>> 12,
                            m[x++] = 128 | w >>> 6 & 63,
                            m[x++] = 128 | w & 63) : u ? (w = ((u & 1023) << 10) + (w & 1023) + 65536,
                            m[x++] = 240 | w >>> 18,
                            m[x++] = 128 | w >>> 12 & 63,
                            m[x++] = 128 | w >>> 6 & 63,
                            m[x++] = 128 | w & 63,
                            u = 0) : u = w
                        }
                        64 <= x && (Nf(k, n),
                        n[0] = n[16]);
                        k.a += x - y
                    }
                    k.Xa = u;
                    var N = k
                } else {
                    if (null == b)
                        throw new TypeError("Invalid type: " + typeof b);
                    v = b.byteOffset;
                    x = b.byteLength;
                    m = x / 64 | 0;
                    n = 0;
                    if (!(!m || v & 3 || k.a % 64)) {
                        for (var H = new Int32Array(b.buffer,v,16 * m); m--; )
                            Nf(k, H, n >> 2),
                            n += 64;
                        k.a += n
                    }
                    if (1 !== b.BYTES_PER_ELEMENT && b.buffer) {
                        var q = new Uint8Array(b.buffer,v + n,x - n);
                        N = Mf(k, q)
                    } else
                        N = n === x ? k : Mf(k, b, n)
                }
                var M = N.M
                  , U = N.ta
                  , z = N.a % 64 | 0;
                for (M[z++] = 128; z & 3; )
                    M[z++] = 0;
                z >>= 2;
                if (14 < z) {
                    for (; 16 > z; )
                        U[z++] = 0;
                    z = 0;
                    Nf(N, U)
                }
                for (; 16 > z; )
                    U[z++] = 0;
                var O = 8 * N.a;
                M = (O & 4294967295) >>> 0;
                (O = (O - M) / 4294967296) && (U[14] = Pf(O));
                M && (U[15] = Pf(M));
                Nf(N, U);
                var W = Qf(N.c) + Qf(N.f) + Qf(N.g) + Qf(N.m) + Qf(N.E) + Qf(N.w) + Qf(N.C) + Qf(N.H);
                break a
            } catch (Q) {}
            W = null
        }
        if (W == d)
            return h;
        e("Failed to get nonce from https profiling, unmatched handle", d, b, W);
        return null
    }
    function Yf(d, e, b) {
        e = void 0 === e ? 0 : e;
        return new Promise(function(h) {
            var k = dwn_ns.b("main");
            try {
                var m = !1
                  , n = {
                    method: "POST"
                };
                "undefined" !== typeof b && (n.headers = {
                    "Dwn-Profiling": b
                });
                d.includes(".uid?pid=") ? m = !0 : n.mode = "no-cors";
                fetch(d, n).then(function(r) {
                    var u = r.status;
                    0 === u || 200 === u || 204 === u || 304 === u ? (k("Profiling fetch succeed", u, "nonce request", m),
                    0 !== u && m && r.text().then(function(v) {
                        (v = Xf(v)) ? jf(v, "https profiling").then(function(y) {
                            y && h(!0)
                        }, function() {
                            return h(!1)
                        }).catch(function() {
                            return h(!1)
                        }) : (Ub(l.fb),
                        h(!1))
                    }).catch(function(v) {
                        k("Failed on nonce https profiling", v.toString());
                        Ub(l.fb);
                        h(!1)
                    })) : (k("Failed on fetch request", Vf(e), "status", u),
                    Ub(Wf(e, 1)),
                    h(!1))
                }, function(r) {
                    k("Failed on fetch request", Vf(e), "reason", r.toString());
                    Ub(Wf(e, 2));
                    h(!1)
                })
            } catch (r) {
                k("Failed on fetch profiling", Vf(e), "exception", r.toString()),
                Ub(Wf(e, 2)),
                h(!1)
            }
        }
        )
    }
    function Zf(d, e, b) {
        e = void 0 === e ? 0 : e;
        return new Promise(function(h) {
            var k = dwn_ns.b("main");
            try {
                var m = !1;
                d.includes(".uid?pid=") && (m = !0);
                var n = new XMLHttpRequest;
                n.open("POST", d, !0);
                "undefined" !== typeof b && n.setRequestHeader("Dwn-Profiling", b);
                n.onreadystatechange = function() {
                    if (n.readyState == XMLHttpRequest.DONE) {
                        var r = n.status;
                        200 === r || 204 === r || 304 === r ? (k("Profiling ajax call succeed", r, d),
                        m ? (r = Xf(n.response)) ? jf(r, "https profiling").then(function(u) {
                            u && h(!0)
                        }, function() {
                            return h(!1)
                        }).catch(function() {
                            return h(!1)
                        }) : (Ub(l.fb),
                        h(!1)) : h(!0)) : (k("Failed on ajax request", Vf(e), "status", r),
                        Ub(Wf(e, 0)),
                        h(!1))
                    }
                }
                ;
                n.send()
            } catch (r) {
                k("Profiling ajax failed", Vf(e), "exception", r.toString()),
                Ub(Wf(e, 3)),
                h(!1)
            }
        }
        )
    }
    function $f(d, e, b) {
        e = void 0 === e ? 0 : e;
        return ye(this, function k() {
            var m, n, r, u, v;
            return Ob(k, function(y) {
                switch (y.a) {
                case 1:
                    m = dwn_ns.b("main");
                    y.f = 2;
                    n = Uf();
                    r = 0 == d.length;
                    m("dwn request", Vf(e), n ? "fetch" : "ajax", r ? "none" : d);
                    if (r)
                        return y.return(!1);
                    u = !1;
                    return n ? Eb(y, Yf(d, e, b), 7) : Eb(y, Zf(d, e, b), 6);
                case 6:
                    u = y.c;
                    y.D(5);
                    break;
                case 7:
                    u = y.c;
                case 5:
                    return y.return(u);
                case 2:
                    v = Gb(y),
                    m("Exception on doRequest", v);
                case 3:
                    return y.return(!1)
                }
            })
        })
    }
    function ag() {
        var d = dwn_ns.b("main")
          , e = {};
        try {
            if ("undefined" !== typeof dwn_ns.ra ? (e.Pa = new dwn_ns.ra,
            d("initialized mouse")) : Ub(l.hc),
            "undefined" !== typeof dwn_ns.ya ? (e.bb = new dwn_ns.ya,
            d("initialized touch")) : Ub(l.yc),
            "undefined" !== typeof dwn_ns.xa ? (e.Ya = new dwn_ns.xa,
            d("initialized sensor")) : Ub(l.sc),
            "undefined" !== typeof dwn_ns.da)
                for (var b = document.querySelectorAll("[dwn_context]"), h = 0; h < b.length; h++) {
                    var k = b[h]
                      , m = k.getAttribute("dwn_context");
                    d("Found dwn_context", k.name, m);
                    m && (d("initialized field", m),
                    bg(k, m, e))
                }
            else
                Ub(l.gc)
        } catch (n) {
            d("Exception on enableBM", n)
        }
        return e
    }
    function bg(d, e, b) {
        var h = dwn_ns.b("main");
        try {
            "undefined" === typeof b.key && (b.key = {});
            if ("undefined" !== typeof b.key[e]) {
                if (b.key[e].element == d && d.Bc == e) {
                    h("Already setup input field", e, d.localName, d.id, b);
                    return
                }
                b.key[e].F()
            }
            d.Bc = e;
            b.key[e] = new dwn_ns.da(d,e);
            h("setup input field", e, d.localName, d.id, b)
        } catch (k) {
            h("Exception on enableFieldBM", k)
        }
    }
    ;function cg(d) {
        var e = "undefined" === typeof dwn_ns || "function" !== typeof dwn_ns.b ? console.log : dwn_ns.b("main");
        return new Promise(function(b, h) {
            try {
                fetch(d, {
                    method: "POST",
                    mode: "no-cors"
                }).then(function(k) {
                    k = k.status;
                    e("extension: got fetch response", k, d);
                    200 !== k && 204 !== k && 304 !== k || b(!0);
                    h(!1)
                }, function() {
                    return h(!1)
                })
            } catch (k) {
                e("extension: exception on fetch", d, k),
                h(!1)
            }
            setTimeout(function() {
                h(!1)
            }, 1E3)
        }
        )
    }
    function dg(d) {
        var e = "undefined" === typeof dwn_ns || "function" !== typeof dwn_ns.b ? console.log : dwn_ns.b("main");
        return new Promise(function(b, h) {
            try {
                var k = new XMLHttpRequest;
                k.open("POST", d, !0);
                k.onreadystatechange = function() {
                    if (k.readyState == XMLHttpRequest.DONE) {
                        var m = k.status;
                        if (200 === m || 204 === m || 304 === m)
                            e("extension: succeed on response", m, d),
                            b(!0);
                        h(!1)
                    }
                }
                ;
                k.send()
            } catch (m) {
                e("Failed to Ajax", d, m),
                h(!1)
            }
            setTimeout(function() {
                h(!1)
            }, 500)
        }
        )
    }
    function eg(d, e) {
        return ye(this, function h() {
            var k, m, n, r, u, v, y, x, w, N, H, q;
            return Ob(h, function(M) {
                switch (M.a) {
                case 1:
                    k = "undefined" === typeof dwn_ns || "function" !== typeof dwn_ns.b ? console.log : dwn_ns.b("main");
                    m = "chrome-extension://";
                    n = {
                        Chrome: {
                            protocol: "chrome-extension://",
                            list: [{
                                id: "gighmmpiobklfepjocnamgkkbiglidom",
                                name: "AdBlock",
                                i: 1,
                                file: "adblock-ads-allowed-icon.svg"
                            }, {
                                id: "mlomiejdfkolichcflejclcbmpeaniij",
                                name: "Ghostery",
                                i: 2,
                                file: "app/templates/trackers-preview.html"
                            }, {
                                id: "mdnleldcmiljblolnjhpnblkcekpdkpa",
                                name: "Requestly",
                                i: 3,
                                file: "resources/images/128x128.png"
                            }, {
                                id: "idgpnmonknjnojddfkpgkljpfnnfcklj",
                                name: "ModHeader",
                                i: 4,
                                file: "js/tool/common.js"
                            }, {
                                id: "hdokiejnpimakedhajhdlcegeplioahd",
                                name: "LastPass",
                                i: 5,
                                file: "general.css"
                            }, {
                                id: "fdjamakpfbbddfjaooikfcpapjohcfmg",
                                name: "Dashlane",
                                i: 6,
                                file: "index.html"
                            }, {
                                id: "fgddmllnllkalaagkghckoinaemmogpe",
                                name: "ExpressVPN",
                                i: 7,
                                file: "html/networkLock.html"
                            }, {
                                id: "fjoaledfpmneenckfbpdfhkmimnjocfa",
                                name: "NordVPN",
                                i: 8,
                                file: "killswitch.html"
                            }, {
                                id: "gomekmidlodglbbmalcneegieacbdmki",
                                name: "AvastSecurity",
                                i: 9,
                                file: "common/ui/icons/bg.png"
                            }, {
                                id: "flliilndjeohchalpbbcdekjklbdgfkk",
                                name: "AviraBrowserSafety",
                                i: 10,
                                file: "html/top.html"
                            }, {
                                id: "pgojnojmmhpofjgdmaebadhbocahppod",
                                name: "Captcha Solver",
                                i: 11,
                                file: "manifest.json"
                            }, {
                                id: "ifibfemgeogfhoebkmokieepdoobkbpo",
                                name: "2Captcha Solver",
                                i: 12,
                                file: "assets/images/logo.svg"
                            }]
                        },
                        Edge: {
                            list: [{
                                id: "ndcileolkflehcjpmjnfbnaibdcgglog",
                                name: "AdBlock",
                                i: 1,
                                file: "adblock-ads-allowed-icon.svg"
                            }, {
                                id: "ehghoapnlpepjmfbgaomdiilchcjemak",
                                name: "Requestly",
                                i: 3,
                                file: "resources/images/128x128.png"
                            }, {
                                id: "fclbdkbhjlgkbpfldjodgjncejkkjcme",
                                name: "Ghostery",
                                i: 2,
                                file: "app/templates/trackers-preview.html"
                            }, {
                                id: "opgbiafapkbbnbnjcdomjaghbckfkglc",
                                name: "ModHeader",
                                i: 4,
                                file: "js/tool/common.js"
                            }, {
                                id: "bbcinlkgjjkejfdpemiealijmmooekmp",
                                name: "LastPass",
                                i: 5,
                                file: "general.css"
                            }, {
                                id: "gehmmocbbkpblljhkekmfhjpfbkclbph",
                                name: "Dashlane",
                                i: 6,
                                file: "index.html"
                            }, {
                                id: "fdgpikaaheckgdijjmepmdjjkbceakif",
                                name: "AvastSecurity",
                                i: 9,
                                file: "common/ui/icons/bg.png"
                            }, {
                                id: "gomekmidlodglbbmalcneegieacbdmki",
                                name: "AvastSecurity",
                                i: 9,
                                file: "common/ui/icons/bg.png"
                            }, {
                                id: "flliilndjeohchalpbbcdekjklbdgfkk",
                                name: "AviraBrowserSafety",
                                i: 10,
                                file: "html/top.html"
                            }, {
                                id: "pgojnojmmhpofjgdmaebadhbocahppod",
                                name: "Captcha Solver",
                                i: 11,
                                file: "manifest.json"
                            }, {
                                id: "ifibfemgeogfhoebkmokieepdoobkbpo",
                                name: "2Captcha Solver",
                                i: 12,
                                file: "assets/images/logo.svg"
                            }]
                        },
                        Opera: {
                            list: [{
                                id: "gighmmpiobklfepjocnamgkkbiglidom",
                                name: "AdBlock",
                                i: 1,
                                file: "adblock-ads-allowed-icon.svg"
                            }]
                        }
                    };
                    r = [];
                    u = [];
                    var U = !0;
                    try {
                        "boolean" === typeof dwn_ns.Dc && (U = dwn_ns.Dc)
                    } catch (z) {}
                    if (!U)
                        return k("extension: not enabled"),
                        M.return(r);
                    if (d)
                        return k("extension: not support on mobile"),
                        M.return(r);
                    v = n[e];
                    if (!v)
                        return k("extension: not support on browser", e),
                        M.return(r);
                    y = Uf() || !Tf();
                    x = 0;
                case 2:
                    if (!(x < v.list.length)) {
                        M.D(4);
                        break
                    }
                    w = v.list[x];
                    N = v.protocol ? v.protocol : m;
                    H = N + w.id + "/" + w.file;
                    q = !1;
                    M.f = 5;
                    return y ? Eb(M, cg(H), 10) : Eb(M, dg(H), 9);
                case 9:
                    q = M.c;
                    M.D(8);
                    break;
                case 10:
                    q = M.c;
                case 8:
                    M.a = 6;
                    M.f = 0;
                    break;
                case 5:
                    Gb(M);
                case 6:
                    k("extension installed", q, w.name, H);
                    q && (r.push(w.i),
                    u.push(w.name));
                    x++;
                    M.D(2);
                    break;
                case 4:
                    return u.length ? k("Found extensions, mobile", d, e, u) : k("No extensions found, mobile", d, e),
                    M.return(r)
                }
            })
        })
    }
    ;var fg = {
        default: [],
        Ac: [{
            font: "-apple-system-body"
        }],
        Ic: [{
            fontFamily: "serif"
        }],
        Hc: [{
            fontFamily: "sans-serif"
        }],
        Ec: [{
            fontFamily: "monospace"
        }],
        min: [{
            fontSize: "1px"
        }],
        Jc: [{
            fontFamily: "system-ui"
        }]
    };
    function gg() {
        return hg(function(d, e) {
            for (var b = {}, h = {}, k = ba(Object.keys(fg)), m = k.next(); !m.done; m = k.next()) {
                m = m.value;
                var n = ba(fg[m])
                  , r = n.next().value;
                r = void 0 === r ? {} : r;
                var u = n.next().value;
                n = d.createElement("span");
                n.textContent = void 0 === u ? "mmMwWLliI0fiflO&1" : u;
                n.style.whiteSpace = "nowrap";
                u = ba(Object.keys(r));
                for (var v = u.next(); !v.done; v = u.next()) {
                    v = v.value;
                    var y = r[v];
                    void 0 !== y && (n.style[v] = y)
                }
                b[m] = n;
                e.appendChild(d.createElement("br"));
                e.appendChild(n)
            }
            d = ba(Object.keys(fg));
            for (m = d.next(); !m.done; m = d.next())
                e = m.value,
                h[e] = b[e].getBoundingClientRect().width;
            return h
        })
    }
    function hg(d) {
        var e = void 0 === e ? 4E3 : e;
        return lf(function(b, h) {
            b = h.document;
            var k = b.body
              , m = k.style;
            m.width = e + "px";
            m.webkitTextSizeAdjust = m.Sd = "none";
            De() ? k.style.zoom = "" + 1 / h.devicePixelRatio : Xd() && (k.style.zoom = "reset");
            h = b.createElement("div");
            h.textContent = ca(Array(e / 20 << 0)).concat().map(function() {
                return "word"
            }).join(" ");
            k.appendChild(h);
            return d(b, k)
        }, '<!doctype html><html><head><meta name="viewport" content="width=device-width, initial-scale=1">')
    }
    ;var ig = ["monospace", "sans-serif", "serif"]
      , jg = "sans-serif-thin;ARNO PRO;Agency FB;Arabic Typesetting;Arial Unicode MS;AvantGarde Bk BT;BankGothic Md BT;Batang;Bitstream Vera Sans Mono;Calibri;Century;Century Gothic;Clarendon;EUROSTILE;Franklin Gothic;Futura Bk BT;Futura Md BT;GOTHAM;Gill Sans;HELV;Haettenschweiler;Helvetica Neue;Humanst521 BT;Leelawadee;Letter Gothic;Levenim MT;Lucida Bright;Lucida Sans;Menlo;MS Mincho;MS Outlook;MS Reference Specialty;MS UI Gothic;MT Extra;MYRIAD PRO;Marlett;Meiryo UI;Microsoft Uighur;Minion Pro;Monotype Corsiva;PMingLiU;Pristina;SCRIPTINA;Segoe UI Light;Serifa;SimHei;Small Fonts;Staccato222 BT;TRAJAN PRO;Univers CE 55 Medium;Vrinda;ZWAdobeF".split(";");
    function kg() {
        return lf(function(d, e) {
            function b(v) {
                return ig.some(function(y, x) {
                    return v[x].offsetWidth !== n[y] || v[x].offsetHeight !== r[y]
                })
            }
            function h(v) {
                var y = k.createElement("span")
                  , x = y.style;
                x.position = "absolute";
                x.top = "0";
                x.left = "0";
                x.fontFamily = v;
                y.textContent = "mmMwWLliI0O&1";
                m.appendChild(y);
                return y
            }
            var k = e.document;
            e = k.body;
            e.style.fontSize = "48px";
            var m = k.createElement("div")
              , n = {}
              , r = {};
            d = ig.map(h);
            var u = function() {
                for (var v = {}, y = {}, x = ba(jg), w = x.next(); !w.done; y = {
                    za: y.za
                },
                w = x.next())
                    y.za = w.value,
                    v[y.za] = ig.map(function(N) {
                        return function(H) {
                            return h("'" + N.za + "'," + H)
                        }
                    }(y));
                return v
            }();
            e.appendChild(m);
            for (e = 0; e < ig.length; e++)
                n[ig[e]] = d[e].offsetWidth,
                r[ig[e]] = d[e].offsetHeight;
            if ((d = jg.filter(function(v) {
                return b(u[v])
            })) && 0 !== d.length)
                return [d.length, xe(d.sort().toString())]
        })
    }
    ;function lg() {
        var d = dwn_ns.b("main");
        return new Promise(function(e, b) {
            try {
                var h = dwn_ns.Z
                  , k = null
                  , m = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame
                  , n = window.cancelAnimationFrame || window.mozCancelAnimationFrame;
                if (!m || !n)
                    return d("no requestAnimationFrame or cancelAnimationFrame"),
                    b(void 0);
                var r = []
                  , u = []
                  , v = function(y) {
                    r.push(y);
                    if (20 >= r.length)
                        k = m(v);
                    else {
                        k && n(k);
                        for (y = 0; 5 > y; y++)
                            r.shift();
                        y = r.shift();
                        if (!y)
                            return b(void 0);
                        for (var x = 0; x < r.length; x++) {
                            var w = r[x];
                            u[x] = Math.round(1E3 / (w - y));
                            y = w
                        }
                        y = {};
                        h(y, u, 1);
                        return e(y)
                    }
                };
                m(v)
            } catch (y) {
                return d("exception on frame_rate", y),
                b(void 0)
            }
        }
        )
    }
    ;function mg() {
        var d = dwn_ns.b("main");
        return new Promise(function(e, b) {
            try {
                var h = function(m) {
                    d("geo location error: ", m.code, m.message);
                    1 == m.code ? b(l.Yb) : (d("Failed to get geo location on code: ", m.code),
                    b(l.eb))
                }
                  , k = function(m) {
                    m = m.coords;
                    d("get geo location", m);
                    e([m.latitude, m.longitude, m.accuracy])
                };
                "https:" !== location.protocol && b(l.Zb);
                navigator.geolocation && navigator.geolocation.getCurrentPosition(k, h)
            } catch (m) {
                d("Exception on geo location: ", m),
                b(l.eb)
            }
        }
        )
    }
    ;function ng() {
        if (window.matchMedia("(dynamic-range: high)").matches)
            return !0;
        if (window.matchMedia("(dynamic-range: standard)").matches)
            return !1
    }
    ;function og() {
        var d = dwn_ns.b("main")
          , e = {
            U: 1,
            J: 2
        };
        e[e.U] = "webdriver";
        e[e.J] = "headless";
        for (var b = !1, h = !1, k = ba([{
            name: "webdriver",
            fa: function() {
                return navigator.webdriver
            },
            result: e.U
        }, {
            name: "cdc",
            fa: function() {
                for (var n = !1, r = ba(Object.getOwnPropertyNames(window)), u = r.next(); !u.done; u = r.next())
                    if (u = u.value,
                    u.startsWith("cdc_") || u.startsWith("$cdc_")) {
                        n = !0;
                        d("Identify webdrive in testCDC", u);
                        break
                    }
                return n
            },
            result: e.U
        }, {
            name: "connection",
            fa: function() {
                return navigator.connection ? 0 === navigator.connection.rtt : !1
            },
            result: e.J
        }, {
            name: "screen",
            fa: function() {
                var n = Ze(window.screenX) && Ze(window.screenY) && Ze(window.screenTop) && Ze(window.screenLeft);
                n && d("Identify headless in screen", window.screenX, window.screenY, window.screenTop, window.screenLeft);
                return n
            },
            result: e.J
        }, {
            name: "user_agent",
            fa: function() {
                var n = navigator.userAgent
                  , r = /headless/i.test(n);
                r && d("Found headless in UserAgent", n);
                return r
            },
            result: e.J
        }, {
            name: "app_version",
            fa: function() {
                var n = navigator.appVersion;
                /headless/i.test(n) && d("Found headless in UserAgent", n);
                return /headless/i.test(n)
            },
            result: e.J
        }]), m = k.next(); !m.done; m = k.next()) {
            m = m.value;
            if (h)
                break;
            if (!b || m.result != e.U)
                try {
                    m.fa() && (b = !0,
                    m.result == e.J && (h = !0),
                    d("Identified browser", m.name + ": webdriver[" + b + "], headless[" + h + "]"))
                } catch (n) {
                    d("Exception", m.name, n.toString())
                }
        }
        return {
            U: b,
            J: h
        }
    }
    ;function pg(d) {
        return window.matchMedia("(inverted-colors: " + d + ")").matches
    }
    ;function qg() {
        var d = navigator
          , e = d.language || d.Td || d.browserLanguage || d.Qd
          , b = [];
        Array.isArray(d.languages) ? b = d.languages : "string" === typeof d.languages && (d = d.languages) && (b = d.split(","));
        return [e, b]
    }
    ;function rg(d) {
        var e = "";
        try {
            if (window.localStorage) {
                var b = window.localStorage.getItem("dwn_ap5trb65ml0kkmed2ux60ct7");
                if (null !== b) {
                    var h = b.split("_");
                    if (2 === h.length) {
                        var k = h[0];
                        var m = h[1];
                        var n = "existing localstorage"
                    }
                }
                "undefined" === typeof k && (m = Date.now(),
                k = d,
                window.localStorage.setItem("dwn_ap5trb65ml0kkmed2ux60ct7", k + "_" + m),
                n = "new localstorage");
                return {
                    guid: k,
                    createTime: m,
                    signal: n
                }
            }
        } catch (r) {
            e = "Exception to get local storage: " + r.message
        }
        return {
            signal: e
        }
    }
    ;var ge = Math;
    function sg() {
        return 0
    }
    var ee = ge.acos || sg
      , fe = ge.acosh || sg
      , he = ge.asin || sg
      , le = ge.asinh || sg
      , me = ge.atanh || sg
      , ne = ge.atan || sg
      , oe = ge.sin || sg
      , pe = ge.sinh || sg
      , qe = ge.cos || sg
      , re = ge.cosh || sg
      , se = ge.tan || sg
      , te = ge.tanh || sg
      , ue = ge.exp || sg
      , ve = ge.expm1 || sg
      , we = ge.log1p || sg;
    function tg() {
        if (window.matchMedia("(min-monochrome: 0)").matches) {
            for (var d = 0; 100 >= d; ++d)
                if (window.matchMedia("(max-monochrome: " + d + ")").matches)
                    return d;
            throw Error("Too high value");
        }
    }
    ;function ug(d) {
        return d.reduce(function(e, b) {
            return e + (b ? 1 : 0)
        }, 0)
    }
    function vg() {
        var d = window
          , e = navigator;
        return 4 <= ug(["MSCSSMatrix"in d, "msSetImmediate"in d, "msIndexedDB"in d, "msMaxTouchPoints"in e, "msPointerEnabled"in e])
    }
    ;function wg() {
        function d(H) {
            var q = null;
            try {
                q = new Worker(H)
            } catch (M) {
                try {
                    return null !== q && "undefined" !== typeof q.terminate && q.terminate(),
                    -1 !== M.toString().indexOf("is not a valid URL")
                } catch (U) {
                    b("Failed to isProtocolSupported(): " + U)
                }
            }
            return !1
        }
        function e(H) {
            try {
                if (n) {
                    var q;
                    switch (n) {
                    case "Safari":
                        var M = /\WVersion[^\d]([\.\d]+)/.exec(H);
                        null !== M && 1 <= M.length && (q = M[1]);
                        break;
                    default:
                        var U = N[n];
                        M = [];
                        "undefined" === typeof U ? M = [n] : "string" === typeof U ? M = [U] : M = U;
                        for (U = 0; U < M.length; U++) {
                            var z = M[U]
                              , O = H.indexOf(z);
                            if (-1 !== O) {
                                q = H.substring(O + z.length + 1);
                                break
                            }
                        }
                    }
                    if (q)
                        return parseFloat(q).toString()
                }
            } catch (W) {
                b("Failed to getBrowserVersion: " + W)
            }
        }
        var b = "undefined" === typeof dwn_ns || "function" !== typeof dwn_ns.b ? console.log : dwn_ns.b("os_browser")
          , h = "undefined" !== typeof window.orientation
          , k = void 0
          , m = void 0
          , n = void 0
          , r = void 0
          , u = navigator.userAgent;
        m = navigator.platform;
        var v = navigator.appVersion
          , y = !1
          , x = [{
            src: m,
            K: "Win",
            id: "Windows"
        }, {
            src: m,
            K: "Mac",
            id: "Mac",
            Bb: !1
        }, {
            src: m,
            K: "Mac",
            id: "iOS",
            Bb: !0
        }, {
            src: m,
            K: "Linux arm",
            id: "Android"
        }, {
            src: m,
            K: "Linux aarch",
            id: "Android"
        }, {
            src: m,
            K: "Linux",
            id: "Linux"
        }, {
            src: m,
            K: "BlackBerry",
            id: "BlackBerry"
        }, {
            src: m,
            K: "iPhone",
            id: "iOS"
        }, {
            src: m,
            K: "iPad",
            id: "iOS"
        }]
          , w = [{
            id: "Windows",
            cb: [{
                l: "10",
                r: /(Windows 10.0|Windows NT 10.0)/
            }, {
                l: "8.1",
                r: /(Windows 8.1|Windows NT 6.3)/
            }, {
                l: "8",
                r: /(Windows 8|Windows NT 6.2)/
            }, {
                l: "7",
                r: /(Windows 7|Windows NT 6.1)/
            }, {
                l: "Vista",
                r: /Windows NT 6.0/
            }, {
                l: "Server 2003",
                r: /Windows NT 5.2/
            }, {
                l: "XP",
                r: /(Windows NT 5.1|Windows XP)/
            }, {
                l: "2000",
                r: /(Windows NT 5.0|Windows 2000)/
            }, {
                l: "ME",
                r: /(Win 9x 4.90|Windows ME)/
            }, {
                l: "98",
                r: /(Windows 98|Win98)/
            }, {
                l: "95",
                r: /(Windows 95|Win95|Windows_95)/
            }, {
                l: "NT 4.0",
                r: /(Windows NT 4.0|WinNT4.0|WinNT|Windows NT)/
            }, {
                l: "CE",
                r: /Windows CE/
            }, {
                l: "3.11",
                r: /Win16/
            }]
        }, {
            id: "Mac",
            cb: [{
                k: "Mac OS X",
                r: /Mac OS X/
            }, {
                k: "Mac OS",
                r: /(MacPPC|MacIntel|Mac_PowerPC|Macintosh)/
            }]
        }, {
            id: "Windows Phone",
            cb: [{
                l: "6.0",
                r: /Windows Phone 6.0/
            }, {
                l: "7.0",
                r: /Windows Phone 7.0/
            }, {
                l: "8.0",
                r: /Windows Phone 8.0/
            }, {
                l: "8.1",
                r: /Windows Phone 8.1/
            }, {
                l: "10.0",
                r: /Windows Phone 10.0/
            }]
        }]
          , N = {
            Edge: ["Edge", "Edg"],
            Opera: ["OPR", "OPT", "Version"],
            Yandex: "YaBrowser",
            Explorer: "rv",
            Chrome: ["Chrome", "CriOS"],
            Firefox: ["Firefox", "FxiOS"],
            Safari: ["Version"]
        };
        k = function() {
            try {
                for (var H = 0; H < x.length; H++) {
                    var q = x[H]
                      , M = q.src;
                    if (M && -1 !== M.indexOf(q.K)) {
                        var U = q.Bb;
                        if ("undefined" === typeof U || U === h)
                            return q.id
                    }
                }
                var z;
                if (z = h) {
                    H = window;
                    q = navigator;
                    var O = 5 <= ug(["webkitPersistentStorage"in q, "webkitTemporaryStorage"in q, 0 === q.vendor.indexOf("Google"), "webkitResolveLocalFileSystemURL"in H, "BatteryManager"in H, "webkitMediaStream"in H, "webkitSpeechGrammar"in H]) || 3 <= ug([!("MediaSettingsRange"in H), "RTCEncodedAudioFrame"in H, "[object Intl]" === "" + H.Intl, "[object Reflect]" === "" + H.Reflect]);
                    var W, Q;
                    H = window;
                    var G = 4 <= ug(["buildID"in navigator, "MozAppearance"in (null !== (Q = null === (W = document.documentElement) || void 0 === W ? void 0 : W.style) && void 0 !== Q ? Q : {}), "MediaRecorderErrorEvent"in H, "mozInnerScreenX"in H, "CSSMozDocumentRule"in H, "CanvasCaptureMediaStream"in H]);
                    O || G ? (W = window,
                    z = 2 <= ug(["onorientationchange"in W, "orientation"in W, O && "SharedWorker"in W, G && /android/i.test(navigator.appVersion)])) : z = !1
                }
                if (z)
                    return "Android"
            } catch (p) {
                b("Failed to getOS: " + p)
            }
        }();
        m = function() {
            if (k)
                try {
                    for (var H = k, q = 0; q < w.length; q++) {
                        var M = w[q];
                        if (M.id === k) {
                            for (q = 0; q < M.cb.length; q++) {
                                var U = M.cb[q];
                                if (U.r.test(u)) {
                                    if ("undefined" !== typeof U.l) {
                                        if ("Windows" === k && "10" === U.l)
                                            try {
                                                y = !0;
                                                return
                                            } catch (O) {}
                                        return U.l
                                    }
                                    "undefined" !== typeof U.k && (H = U.k);
                                    break
                                }
                            }
                            break
                        }
                    }
                    switch (H) {
                    case "Mac OS X":
                        k = H;
                        var z = /Mac OS X (10[\._\d]+)/.exec(u);
                        if (null !== z && 1 <= z.length)
                            return z[1].replace(/_/g, ".");
                        break;
                    case "Android":
                        z = /[^-]Android[^\d]?([\._\d]+)/.exec(u);
                        if (null !== z && 1 <= z.length)
                            return z[1].replace(/_/g, ".");
                        break;
                    case "iOS":
                        z = /OS (\d+)_(\d+)_?(\d+)?/.exec(v);
                        if (null !== z)
                            return (1 <= z.length ? z[1] : "unknown") + "." + (2 <= z.length ? z[2] : "unknown") + "." + (3 <= z.length ? z[3] || "0" : "0");
                        z = /Version\/([\._\d]+)/.exec(v);
                        if (null !== z && 1 <= z.length)
                            return z[1].replace(/_/g, ".")
                    }
                } catch (O) {
                    b("Failed to getOSVersion: " + O)
                }
        }();
        n = function() {
            try {
                var H = "undefined" !== typeof window.opr || "undefined" !== typeof window.opera;
                if (H)
                    return "Opera";
                if (H = "undefined" !== typeof InstallTrigger)
                    return "Firefox";
                var q;
                if (!(q = "undefined" !== typeof window.safari)) {
                    var M = window;
                    q = 3 <= ug(["safari"in M, !("DeviceMotionEvent"in M), !("ongestureend"in M), !("standalone"in navigator)])
                }
                if (H = q)
                    return "Safari";
                if (vg())
                    return "Explorer";
                q = window;
                M = navigator;
                if (3 <= ug(["msWriteProfilerMark"in q, "MSStream"in q, "msLaunchUri"in M, "msSaveBlob"in M]) && !vg())
                    return "Edge";
                if (d("brave://"))
                    return "Brave";
                if (d("edge://"))
                    return "Edge";
                if (d("puffin://"))
                    return "Puffin";
                if (H = "undefined" !== typeof window.chrome && "undefined" === typeof window.yandex && ("undefined" !== typeof window.chrome.webstore || "undefined" !== typeof window.chrome.runtime || "undefined" !== typeof window.chrome.loadTimes))
                    return "Chrome";
                if (h) {
                    if (H = "undefined" !== typeof window.chrome && "undefined" !== typeof window.chrome.Benchmarking)
                        return "SamsungBrowser";
                    if (H = "undefined" !== typeof window.ucapi)
                        return "UCBrowser"
                }
                if ("iOS" === k) {
                    var U;
                    (U = "undefined" !== typeof navigator.serviceWorker || "undefined" !== typeof window.browser) || (q = window,
                    M = navigator,
                    U = 4 <= ug(["ApplePayError"in q, "CSSPrimitiveValue"in q, "Counter"in q, 0 === M.vendor.indexOf("Apple"), "getStorageUpdates"in M, "WebKitMediaKeys"in q]));
                    if (U)
                        return "Safari";
                    if ("undefined" !== typeof window.$jscomp || "undefined" !== typeof window.__gCrWeb)
                        return "Chrome"
                }
                if (H = "undefined" !== typeof window.chrome && "undefined" !== typeof window.yandex)
                    return "Yandex"
            } catch (z) {
                b("Failed to getBrowser: " + z)
            }
        }();
        r = e(u) || e(v) || void 0;
        return {
            lb: h,
            Db: k,
            Eb: m,
            ib: n,
            vb: r,
            Nc: y
        }
    }
    function xg() {
        return new Promise(function(d, e) {
            try {
                if (navigator && navigator.userAgentData && navigator.userAgentData.getHighEntropyValues)
                    navigator.userAgentData.getHighEntropyValues(["platformVersion"]).then(function(b) {
                        return 13 <= parseInt(b.platformVersion.split(".")[0]) ? d("11") : e(void 0)
                    }).catch(function() {
                        return e(void 0)
                    });
                else
                    return e(void 0)
            } catch (b) {
                return e(void 0)
            }
        }
        )
    }
    ;function yg() {
        var d = navigator.plugins;
        if (!d)
            return [];
        for (var e = "", b = 0, h = 0; h < d.length; ++h) {
            var k = d[h];
            if (k) {
                b += 1;
                e += k.name + "," + k.description + ",";
                for (var m = 0; m < k.length; ++m) {
                    var n = k[m];
                    e += n.type + "," + n.suffixes + ","
                }
            }
        }
        return 0 === b ? [] : [b, xe(e)]
    }
    ;function zg(d) {
        return window.matchMedia("(prefers-reduced-motion: " + d + ")").matches
    }
    ;var Ag;
    function Bg() {
        return ye(this, function e() {
            var b;
            return Ob(e, function(h) {
                if (1 == h.a) {
                    b = Cg();
                    if (Dg(b))
                        if (Ag)
                            h = h.return(ca(Ag).concat());
                        else {
                            var k = document;
                            k.fullscreenElement || k.msFullscreenElement || k.mozFullScreenElement || k.webkitFullscreenElement ? (k = document,
                            k = (k.exitFullscreen || k.msExitFullscreen || k.mozCancelFullScreen || k.webkitExitFullscreen).call(k),
                            h = Eb(h, k, 4)) : h = h.D(2)
                        }
                    else
                        h = h.D(2);
                    return h
                }
                2 != h.a && (b = Cg());
                Dg(b) || (Ag = b);
                return h.return(b)
            })
        })
    }
    function Eg() {
        return ye(this, function e() {
            var b, h;
            return Ob(e, function(k) {
                if (1 == k.a)
                    return b = function(m) {
                        if (null === m)
                            m = null;
                        else {
                            var n = 10;
                            n = void 0 === n ? 1 : n;
                            1 <= Math.abs(n) ? m = Math.round(m / n) * n : (n = 1 / n,
                            m = Math.round(m * n) / n)
                        }
                        return m
                    }
                    ,
                    Eb(k, Bg(), 2);
                h = k.c;
                return k.return([b(h[0]), b(h[1]), b(h[2]), b(h[3])])
            })
        })
    }
    function Cg() {
        var d = screen;
        return [ze(parseFloat(d.availTop), null), ze(parseFloat(d.width) - parseFloat(d.availWidth) - ze(parseFloat(d.availLeft), 0), null), ze(parseFloat(d.height) - parseFloat(d.availHeight) - ze(parseFloat(d.availTop), 0), null), ze(parseFloat(d.availLeft), null)]
    }
    function Dg(d) {
        for (var e = 0; 4 > e; ++e)
            if (d[e])
                return !1;
        return !0
    }
    ;function Fg() {
        var d = screen;
        return [parseInt(d.width), parseInt(d.height)]
    }
    ;function Gg() {
        var d, e = null === (d = window.Intl) || void 0 === d ? void 0 : d.DateTimeFormat;
        if (e)
            var b = (new e).resolvedOptions().timeZone;
        e = (new Date).getFullYear();
        d = (new Date(e,0,1)).getTimezoneOffset();
        e = (new Date(e,6,1)).getTimezoneOffset();
        !b && d && e && (b = -Math.max(d, e),
        b = "UTC" + (0 <= b ? "+" : "") + Math.abs(b));
        return [b, -d, -e]
    }
    ;function Hg() {
        var d = navigator
          , e = 0;
        void 0 !== d.maxTouchPoints ? e = parseInt(d.maxTouchPoints) : void 0 !== d.msMaxTouchPoints && (e = d.msMaxTouchPoints);
        try {
            document.createEvent("TouchEvent");
            var b = !0
        } catch (h) {
            b = !1
        }
        return {
            maxTouchPoints: e,
            Kc: b,
            Lc: "ontouchstart"in window
        }
    }
    ;function Ig() {
        try {
            a: {
                if (window.WebGLRenderingContext)
                    for (var d = document.createElement("canvas"), e = ["webgl", "experimental-webgl", "moz-webgl", "webkit-3d"], b = 0; 4 > b; b++)
                        try {
                            var h = d.getContext(e[b]);
                            if (h && "function" === typeof h.getParameter && "function" === typeof h.getExtension) {
                                var k = h;
                                break a
                            }
                        } catch (u) {}
                k = void 0
            }
            if (k) {
                e = d = void 0;
                var m = k.getExtension("WEBGL_debug_renderer_info");
                if (m && "object" === typeof m) {
                    var n = k.getParameter(m.UNMASKED_VENDOR_WEBGL);
                    "string" === typeof n && (e = n);
                    var r = k.getParameter(m.UNMASKED_RENDERER_WEBGL);
                    "string" === typeof r && (d = r);
                    return [d, e]
                }
            }
        } catch (u) {}
    }
    ;function Jg(d, e, b) {
        return new Promise(function(h, k) {
            function m() {
                y || (y = setTimeout(function() {
                    w && w.close();
                    h([u, v]);
                    n("Failed on webrtc timeout on " + b + ", delay: 5000, connected to server " + u)
                }, 5E3))
            }
            var n = dwn_ns.b("webrtc")
              , r = window;
            n("webrtc connection", d, e, b);
            var u = !1
              , v = null
              , y = null;
            "tcp" !== b && "udp" !== b && k("failed");
            var x = {
                iceServers: [{
                    urls: "turn:" + e + "?transport=" + b,
                    username: d,
                    credential: "darwinium"
                }]
            }
              , w = null;
            try {
                w = new (r.RTCPeerConnection || r.mozRTCPeerConnection || r.webkitRTCPeerConnection)(x);
                w.onicecandidate = function(H) {
                    if (H.candidate && H.candidate.candidate) {
                        m();
                        var q = H.candidate;
                        n("candidate", q.type, "port", q.port, q.Md, q.candidate);
                        H = q.type;
                        q = q.address;
                        if (H && q) {
                            var M = /([0-9]{1,3}(\.[0-9]{1,3}){3}|[a-f0-9]{1,4}(:[a-f0-9]{1,4}){7})/.exec(q);
                            !Array.isArray(M) || 1 >= M.length ? n("invalid ip address", q) : (q = M[1],
                            "host" !== H && "prflx" !== H ? (n("Got external IP, remote turn server works", q),
                            u = !0) : "host" !== H || v || (v = q,
                            n("Got internal IP", v)))
                        }
                    }
                }
                ;
                w.onicegatheringstatechange = function() {
                    m();
                    var H = w.iceGatheringState;
                    "complete" === H ? (n("icegatheringstatechange completed"),
                    w.close(),
                    y && clearTimeout(y),
                    h([u, v])) : n("icegatheringstatechange", H)
                }
                ;
                w.oniceconnectionstatechange = function(H) {
                    m();
                    n("iceConnectionState", w.iceConnectionState, H)
                }
                ;
                w.onicecandidateerror = function(H) {
                    n("Failed oncandidateerror", b, H)
                }
                ;
                w.createDataChannel(Math.random().toString());
                var N = function() {};
                r = function(H) {
                    w.setLocalDescription(H, N, N)
                }
                ;
                "undefined" === typeof Promise || 0 < w.createOffer.length ? w.createOffer(r, N) : w.createOffer().then(r, N)
            } catch (H) {
                w && w.close(),
                k(H)
            }
        }
        )
    }
    function Kg(d, e) {
        return ye(this, function h() {
            var k, m, n;
            return Ob(h, function(r) {
                switch (r.a) {
                case 1:
                    k = dwn_ns.b("webrtc");
                    if (e && 0 < e.length)
                        k("webrtc connect on domain", e);
                    else
                        return k("Failed on webrtc, no domain set"),
                        r.return(void 0);
                    r.f = 2;
                    var u = window;
                    (u = u.RTCPeerConnection || u.mozRTCPeerConnection || u.webkitRTCPeerConnection) && "undefined" !== typeof u ? u = !0 : (k("Failed on webrtc: not supported"),
                    u = !1);
                    return u ? Eb(r, Jg(d, e, "tcp"), 4) : r.return([!1]);
                case 4:
                    if ((m = r.c) && 0 !== m.length && m[0]) {
                        r.D(5);
                        break
                    }
                    return Eb(r, Jg(d, e, "udp"), 6);
                case 6:
                    m = r.c;
                case 5:
                    return m && m[1] && 0 < m[1].length ? r.return([!0, m[1].sort().join()]) : r.return([!0]);
                case 2:
                    n = Gb(r),
                    k("Failed on webrtc", n);
                case 3:
                    return r.return(void 0)
                }
            })
        })
    }
    ;dwn_ns = dwn_ns || {};
    var Lg = window.onload;
    function Mg(d, e) {
        function b() {
            try {
                q("Darwinium JS started", z, U, "secure_nonce", e);
                Ub(l.fc);
                var p = kg()
                  , B = nf()
                  , C = gg()
                  , I = Le()
                  , S = Eg()
                  , L = wg();
                q("JS detected os/browser", L);
                L.lb && Z(G, 87, L.lb);
                L.Db && Z(G, 76, L.Db);
                L.ib && Z(G, 78, L.ib);
                L.vb && Z(G, 79, L.vb);
                L.Eb ? Z(G, 77, L.Eb) : L.Nc && xg().then(function(Y) {
                    return Z(G, 77, Y)
                }, function() {
                    return q("Can't find window version")
                }).catch(function(Y) {
                    return q("Exception on window version", Y)
                });
                var X = zf();
                q("webrtc_domain", X);
                var T = Kg(U, X)
                  , E = eg(L.lb, L.ib)
                  , F = og();
                q("identify browser", F);
                F.U && Z(G, 94, F.U);
                F.J && Z(G, 95, F.J);
                var K = lg(), R;
                Df() ? R = mg() : Ub(l.$b);
                e && (jf(e, "injected nonce"),
                $f(Bf(), 1));
                $f(Cf(), 2);
                W = Promise.all([p, B, C, I, S, T, E]).then(function(Y) {
                    var ua = Y[0]
                      , Da = Y[1]
                      , Ra = Y[2]
                      , Ng = Y[3]
                      , eb = ba(Y[4])
                      , ie = eb.next().value
                      , je = eb.next().value
                      , ke = eb.next().value;
                    eb = eb.next().value;
                    ua && 2 === ua.length && (Z(G, 34, ua[0]),
                    Z(G, 35, ua[1]));
                    ua = Y[5];
                    "undefined" !== typeof ua && (1 <= ua.length && Z(G, 56, ua[0]),
                    2 <= ua.length && ua[1] && Z(G, 49, ua[1]));
                    Y = Y[6];
                    Z(G, 86, (Y ? Y : []) || []);
                    null !== Da && "undefined" !== typeof Da && Z(G, 55, Da || []);
                    Z(G, 43, Ng);
                    null !== ie && Z(G, 44, ie);
                    null !== je && Z(G, 45, je);
                    null !== ke && Z(G, 46, ke);
                    null !== eb && Z(G, 47, eb);
                    null !== Ra && "undefined" !== typeof Ra && (Z(G, 36, Ra.default),
                    Z(G, 37, Ra.Ac),
                    Z(G, 38, Ra.Ic),
                    Z(G, 39, Ra.Hc),
                    Z(G, 40, Ra.Ec),
                    Z(G, 41, Ra.min),
                    Z(G, 42, Ra.Jc));
                    return G
                }).catch(function(Y) {
                    q("Exception on fp_stuff: ", Y)
                });
                var da = Date.now();
                Z(G, 57, da);
                Z(G, 91, da);
                Z(G, 4, navigator.vendor || "");
                var V = Gg();
                Z(G, 1, V[0]);
                Z(G, 2, V[1]);
                Z(G, 3, V[2]);
                var ha = ze(parseFloat(navigator.deviceMemory), void 0);
                "undefined" !== typeof ha && Z(G, 5, ha);
                var ea = Fg();
                Z(G, 7, ea[0]);
                Z(G, 8, ea[1]);
                $d(G);
                var fa = navigator.oscpu;
                "undefined" !== typeof fa && Z(G, 6, fa);
                Ve().then(function(Y) {
                    q("Got cpu_class", Y);
                    Z(G, 10, Y)
                }).catch(function(Y) {
                    q("Failed to get cpu architecture", Y)
                });
                Wd(G);
                var va = qg()
                  , ja = va[0]
                  , ka = va[1];
                "undefined" !== typeof ja && Z(G, 11, ja);
                Z(G, 12, ka || []);
                var Ba = Qe();
                Z(G, 14, Ba.Qb);
                Z(G, 15, Ba.zb);
                Z(G, 16, Ba.text);
                Z(G, 17, window.screen.colorDepth);
                de(G);
                var fb = yg();
                fb && 2 === fb.length && (Z(G, 51, fb[0]),
                Z(G, 52, fb[1]));
                var Ab = {
                    Od: 0,
                    Id: 1,
                    Kd: 2
                }[Re()];
                "undefined" !== typeof Ab && Z(G, 18, Ab);
                var ma = Te();
                "undefined" !== typeof ma && Z(G, 19, ma);
                ce(G);
                var lb = Hg();
                Z(G, 20, lb.maxTouchPoints);
                Z(G, 21, lb.Kc);
                Z(G, 22, lb.Lc);
                var $a = ze(parseInt(navigator.hardwareConcurrency), void 0);
                "undefined" !== typeof $a && Z(G, 23, $a);
                var Ea = zg("reduce") ? !0 : zg("no-preference") ? !1 : void 0;
                "undefined" !== typeof Ea && Z(G, 24, Ea);
                var Bb = tg();
                "undefined" !== typeof Bb && Z(G, 25, Bb);
                var Cb = ng();
                "undefined" !== typeof Cb && Z(G, 26, Cb);
                var J = ng();
                "undefined" !== typeof J && Z(G, 27, J);
                a: {
                    if (!Be() && !Ce())
                        try {
                            var t = !!window.indexedDB;
                            break a
                        } catch (Y) {
                            t = !0;
                            break a
                        }
                    t = void 0
                }
                p = t;
                "undefined" !== typeof p && Z(G, 28, p);
                var Ja = pg("inverted") ? !0 : pg("none") ? !1 : void 0;
                "undefined" !== typeof Ja && Z(G, 29, Ja);
                ae(G);
                be(G);
                Z(G, 33, !!window.openDatabase);
                window.innerWidth && window.innerHeight && (Ja = 2,
                window.innerWidth < window.innerHeight && (Ja = 1),
                Z(G, 90, Ja));
                var mb = rg(U);
                q("local_storage_guid", mb);
                mb.guid && Z(G, 81, mb.guid);
                var nb = Ig();
                nb && 2 === nb.length && (Z(G, 53, nb[0]),
                Z(G, 54, nb[1]));
                K && K.then(function(Y) {
                    var ua = new rd;
                    Z(ua, 2, Y._1_1);
                    Z(ua, 3, Y._1_2);
                    Z(ua, 5, Y._1_3);
                    Z(ua, 4, Y._1_4);
                    Z(ua, 6, Y._1_5);
                    Z(ua, 7, Y._1_6);
                    Ic(G, 82, ua);
                    q("Got frame rate", Y)
                }, function() {
                    return q("Failed to get frame rate")
                });
                R && R.then(function(Y) {
                    "undefined" !== typeof Y && 3 <= Y.length && ("undefined" !== typeof Y[0] && Z(G, 62, Y[0]),
                    "undefined" !== typeof Y[1] && Z(G, 63, Y[1]),
                    "undefined" !== typeof Y[2] && Z(G, 64, Y[2]))
                }, function(Y) {
                    q("Failed to get geo location", Y);
                    "number" === typeof Y && Ub(Y)
                }).catch(function(Y) {
                    q("Exception location", Y);
                    Ub(l.eb)
                });
                Q = ag();
                q("BM enabled", Q);
                H();
                if (!M && !w() && ("string" !== typeof dwn_ns.post_whitelist && (dwn_ns.post_whitelist = "any"),
                "none" !== dwn_ns.post_whitelist)) {
                    var Db = dwn_ns.post_whitelist;
                    u(Db);
                    r(Db)
                }
            } catch (Y) {
                q("exception on dwn_profiling", Y.toString())
            }
        }
        function h(p, B) {
            var C = "_" + B;
            if ("undefined" !== typeof p[C + "_1"]) {
                var I = new Kc;
                try {
                    Fc(I, B, 0),
                    Z(I, 2, p[C + "_1"]),
                    Z(I, 3, p[C + "_2"]),
                    Z(I, 5, p[C + "_3"]),
                    Z(I, 4, p[C + "_4"]),
                    Z(I, 6, p[C + "_5"]),
                    Z(I, 7, p[C + "_6"])
                } catch (S) {
                    q("exception on setBmStatistic", S)
                }
                return I
            }
        }
        function k(p, B) {
            B.j && (!p.j || p.j > B.j) && (p.j = B.j);
            B.v && (!p.v || p.v > B.v) && (p.v = B.v);
            B.s && (!p.s || p.s < B.s) && (p.s = B.s);
            B.I && (!p.I || p.I > B.I) && (p.I = B.I);
            B.u && (!p.u || p.u < B.u) && (p.u = B.u);
            p.aa = B.aa;
            p.na = B.na;
            p.$ = B.$;
            p.ba = B.ba;
            p.oa = B.oa;
            p.ca = B.ca;
            p.j && p.v && (p.tb = p.v - p.j,
            p.ub = p.s - p.v)
        }
        function m(p, B) {
            try {
                var C = {};
                if ("undefined" === typeof B.key)
                    q("No dwn_context at all");
                else {
                    for (var I = [], S = ba(Object.entries(B.key)), L = S.next(); !L.done; L = S.next()) {
                        var X = ba(L.value)
                          , T = X.next().value
                          , E = X.next().value.G();
                        if (0 === E.j)
                            q("Didn't collect any key BM: field_bm", E);
                        else {
                            k(C, E);
                            var F = E;
                            "undefined" === typeof dwn_ns.Gb ? q("setFieldBM", T, F) : dwn_ns.Gb(F);
                            var K = new Lc;
                            try {
                                Fc(K, T.toLowerCase(), "");
                                Z(K, 3, F.type);
                                Z(K, 4, F.name);
                                Z(K, 5, F.id);
                                Z(K, 10, F.ka);
                                Z(K, 11, F.R);
                                Z(K, 12, F.jb || []);
                                Z(K, 6, F.Ea);
                                Z(K, 7, F.Ra);
                                Z(K, 8, F.Ia);
                                Z(K, 8, F.ab);
                                Z(K, 13, F.Ma);
                                Z(K, 14, F.Va);
                                Z(K, 15, F.Ka);
                                Z(K, 16, F.Ta);
                                Z(K, 17, F.Na);
                                Z(K, 18, F.Wa);
                                Z(K, 19, F.Fa);
                                Z(K, 20, F.delete);
                                Z(K, 21, F.Ba);
                                Z(K, 22, F.Ha);
                                Z(K, 23, F.S);
                                Z(K, 24, F.alpha);
                                Z(K, 25, F.$a);
                                Z(K, 26, F.Da);
                                Z(K, 27, F.La);
                                Z(K, 28, F.Ua);
                                Z(K, 29, F.Aa);
                                Z(K, 30, F.Y);
                                Z(K, 32, F.ma);
                                var R = []
                                  , da = h(F, 1);
                                da && R.push(da);
                                (da = h(F, 2)) && R.push(da);
                                (da = h(F, 3)) && R.push(da);
                                (da = h(F, 4)) && R.push(da);
                                (da = h(F, 5)) && R.push(da);
                                (da = h(F, 6)) && R.push(da);
                                Jc(K, 31, R)
                            } catch (Da) {
                                q("exception on setFieldBM", Da)
                            }
                            I.push(K)
                        }
                    }
                    0 < I.length && Jc(p, 66, I)
                }
                if ("undefined" === typeof B.Pa)
                    q("No mouse_bm injected");
                else {
                    var V = B.Pa.G();
                    if (void 0 === V)
                        q("Didn't collect any mouse_bm");
                    else {
                        k(C, V);
                        "undefined" === typeof dwn_ns.Hb ? q("setMouseBM", V) : dwn_ns.Hb(V);
                        var ha = new Nc;
                        Z(ha, 4, V.Ja);
                        Z(ha, 5, V.Sa);
                        Z(ha, 6, V.Oa);
                        Z(ha, 7, V.wa);
                        Z(ha, 3, V.Cb);
                        Z(ha, 1, V.sa);
                        Z(ha, 2, V.ga);
                        I = [];
                        var ea = h(V, 1);
                        ea && I.push(ea);
                        (ea = h(V, 2)) && I.push(ea);
                        (ea = h(V, 3)) && I.push(ea);
                        (ea = h(V, 4)) && I.push(ea);
                        (ea = h(V, 5)) && I.push(ea);
                        (ea = h(V, 6)) && I.push(ea);
                        (ea = h(V, 7)) && I.push(ea);
                        (ea = h(V, 8)) && I.push(ea);
                        (ea = h(V, 9)) && I.push(ea);
                        Jc(ha, 8, I);
                        Ic(p, 67, ha)
                    }
                }
                if ("undefined" === typeof B.bb)
                    q("No touch_bm injected");
                else {
                    var fa = B.bb.G();
                    if (void 0 === fa)
                        q("Didn't collect any touch_bm");
                    else {
                        k(C, fa);
                        "undefined" === typeof dwn_ns.Kb ? q("setTouchBM", fa) : dwn_ns.Kb(fa);
                        var va = new Pc;
                        try {
                            Z(va, 1, fa.Nb);
                            Z(va, 4, fa.Ob);
                            Z(va, 2, fa.pa);
                            Z(va, 3, fa.va);
                            V = [];
                            var ja = h(fa, 1);
                            ja && V.push(ja);
                            (ja = h(fa, 2)) && V.push(ja);
                            (ja = h(fa, 3)) && V.push(ja);
                            (ja = h(fa, 4)) && V.push(ja);
                            (ja = h(fa, 5)) && V.push(ja);
                            (ja = h(fa, 6)) && V.push(ja);
                            (ja = h(fa, 7)) && V.push(ja);
                            (ja = h(fa, 8)) && V.push(ja);
                            (ja = h(fa, 9)) && V.push(ja);
                            (ja = h(fa, 10)) && V.push(ja);
                            (ja = h(fa, 11)) && V.push(ja);
                            (ja = h(fa, 12)) && V.push(ja);
                            (ja = h(fa, 13)) && V.push(ja);
                            Jc(va, 5, V)
                        } catch (Da) {
                            q("exception on setTouchBM", Da)
                        }
                        Ic(p, 68, va)
                    }
                }
                if ("undefined" === typeof B.Ya)
                    q("No sensor_bm injected");
                else {
                    var ka = B.Ya.G();
                    if (void 0 === ka)
                        q("Didn't collect any sensor_bm");
                    else {
                        "undefined" === typeof dwn_ns.Ib ? q("setSensorBM", ka) : dwn_ns.Ib(ka);
                        var Ba = new Rc;
                        try {
                            var fb = ka.orientation;
                            "undefined" !== typeof fb && Z(Ba, 1, fb);
                            var Ab = ka.source;
                            "undefined" !== typeof Ab && Z(Ba, 2, Ab);
                            B = [];
                            var ma = h(ka, 1);
                            ma && B.push(ma);
                            (ma = h(ka, 2)) && B.push(ma);
                            (ma = h(ka, 3)) && B.push(ma);
                            (ma = h(ka, 4)) && B.push(ma);
                            (ma = h(ka, 5)) && B.push(ma);
                            (ma = h(ka, 6)) && B.push(ma);
                            (ma = h(ka, 7)) && B.push(ma);
                            (ma = h(ka, 8)) && B.push(ma);
                            (ma = h(ka, 9)) && B.push(ma);
                            (ma = h(ka, 10)) && B.push(ma);
                            (ma = h(ka, 11)) && B.push(ma);
                            (ma = h(ka, 12)) && B.push(ma);
                            (ma = h(ka, 13)) && B.push(ma);
                            (ma = h(ka, 14)) && B.push(ma);
                            Jc(Ba, 3, B)
                        } catch (Da) {
                            q("exception on setSensorBM", Da)
                        }
                        Ic(p, 69, Ba);
                        if (null != P(p, 87)) {
                            if (ka.signals) {
                                var lb = ka.signals;
                                for (Ba = 0; Ba < lb.length; Ba++)
                                    Ub(lb[Ba])
                            }
                            if (ka.debugging) {
                                var $a = ka.debugging;
                                for (ka = 0; ka < $a.length; ka++)
                                    ya($a[ka])
                            }
                        }
                    }
                }
                if ("undefined" === typeof dwn_ns.debugging || "number" !== typeof dwn_ns.debugging.length ? 0 : 0 < dwn_ns.debugging.length) {
                    $a = !0;
                    try {
                        "boolean" === typeof dwn_ns.Lb && ($a = dwn_ns.Lb)
                    } catch (Da) {}
                    $a ? (q("profiling_debug", dwn_ns.debugging),
                    Z(p, 84, dwn_ns.debugging || [])) : (q("debug not enabled", dwn_ns.debugging),
                    Ub(l.lc))
                }
                if ("undefined" === typeof dwn_ns.signals || "number" !== typeof dwn_ns.signals.length ? 0 : 0 < dwn_ns.signals.length)
                    "undefined" === typeof dwn_ns.Jb ? q("dwn signals", dwn_ns.signals) : dwn_ns.Jb(),
                    Z(p, 88, dwn_ns.signals || []);
                a: {
                    if (C.j) {
                        "undefined" === typeof dwn_ns.Fb ? q("setBmMessage", C) : dwn_ns.Fb(C);
                        var Ea = new sd;
                        try {
                            C.tb && Z(Ea, 1, 1E3 * C.tb);
                            C.ub && Z(Ea, 2, 1E3 * C.ub);
                            C.u && Z(Ea, 3, 1E3 * C.u);
                            Z(Ea, 4, C.aa);
                            Z(Ea, 5, C.na);
                            Z(Ea, 7, C.ba);
                            Z(Ea, 8, C.oa);
                            Z(Ea, 6, C.$);
                            Z(Ea, 9, C.ca);
                            Z(Ea, 10, C.I);
                            var Bb = Ea;
                            break a
                        } catch (Da) {
                            q("exception on setBiometrics", Da)
                        }
                    } else
                        q("No input biometrics happened");
                    Bb = null
                }
                Ic(p, 85, Bb);
                var Cb = Date.now();
                Z(p, 58, Cb);
                Z(p, 92, Cb);
                var J = new mc;
                var t = P(p, 1);
                null != t && D(J, 1, t);
                t = P(p, 2);
                null != t && A(J, 2, t);
                t = P(p, 3);
                null != t && A(J, 3, t);
                t = P(p, 4);
                null != t && D(J, 4, t);
                t = P(p, 5);
                null != t && qc(J, 5, t);
                t = P(p, 6);
                null != t && D(J, 6, t);
                t = P(p, 7);
                null != t && A(J, 7, t);
                t = P(p, 8);
                null != t && A(J, 8, t);
                t = P(p, 9);
                null != t && D(J, 9, t);
                t = P(p, 10);
                null != t && D(J, 10, t);
                t = P(p, 11);
                null != t && D(J, 11, t);
                t = P(p, 12);
                0 < t.length && wc(J, 12, t);
                t = P(p, 13);
                0 < t.length && wc(J, 13, t);
                t = P(p, 14);
                null != t && sc(J, 14, t);
                t = P(p, 15);
                null != t && uc(J, 15, t);
                t = P(p, 16);
                null != t && uc(J, 16, t);
                t = P(p, 17);
                null != t && (C = t,
                null != C && (Wb(0 <= C && 4294967296 > C),
                null != C && (oc(J, 17, 0),
                kc(J.a, C))));
                t = P(p, 18);
                null != t && tc(J, 18, t);
                t = P(p, 19);
                null != t && tc(J, 19, t);
                t = P(p, 20);
                null != t && A(J, 20, t);
                t = P(p, 21);
                null != t && sc(J, 21, t);
                t = P(p, 22);
                null != t && sc(J, 22, t);
                t = P(p, 23);
                null != t && A(J, 23, t);
                t = P(p, 24);
                null != t && sc(J, 24, t);
                t = P(p, 25);
                null != t && A(J, 25, t);
                t = P(p, 26);
                null != t && sc(J, 26, t);
                t = P(p, 27);
                null != t && sc(J, 27, t);
                t = P(p, 28);
                null != t && sc(J, 28, t);
                t = P(p, 29);
                null != t && sc(J, 29, t);
                t = P(p, 31);
                null != t && sc(J, 31, t);
                t = P(p, 32);
                null != t && sc(J, 32, t);
                t = P(p, 33);
                null != t && sc(J, 33, t);
                t = P(p, 34);
                null != t && A(J, 34, t);
                t = P(p, 35);
                null != t && uc(J, 35, t);
                t = P(p, 36);
                null != t && rc(J, 36, t);
                t = P(p, 37);
                null != t && rc(J, 37, t);
                t = P(p, 38);
                null != t && rc(J, 38, t);
                t = P(p, 39);
                null != t && rc(J, 39, t);
                t = P(p, 40);
                null != t && rc(J, 40, t);
                t = P(p, 41);
                null != t && rc(J, 41, t);
                t = P(p, 42);
                null != t && rc(J, 42, t);
                t = P(p, 43);
                null != t && uc(J, 43, t);
                t = P(p, 44);
                null != t && A(J, 44, t);
                t = P(p, 45);
                null != t && A(J, 45, t);
                t = P(p, 46);
                null != t && A(J, 46, t);
                t = P(p, 47);
                null != t && A(J, 47, t);
                t = P(p, 48);
                null != t && sc(J, 48, t);
                t = P(p, 49);
                null != t && D(J, 49, t);
                t = P(p, 50);
                null != t && uc(J, 50, t);
                t = P(p, 51);
                null != t && A(J, 51, t);
                t = P(p, 52);
                null != t && uc(J, 52, t);
                t = P(p, 53);
                null != t && D(J, 53, t);
                t = P(p, 54);
                null != t && D(J, 54, t);
                t = P(p, 55);
                0 < t.length && yc(J, 55, t);
                t = P(p, 56);
                null != t && sc(J, 56, t);
                t = P(p, 57);
                null != t && qc(J, 57, t);
                t = P(p, 58);
                null != t && qc(J, 58, t);
                t = P(p, 59);
                null != t && qc(J, 59, t);
                t = P(p, 60);
                null != t && D(J, 60, t);
                t = P(p, 61);
                null != t && D(J, 61, t);
                t = P(p, 62);
                null != t && rc(J, 62, t);
                t = P(p, 63);
                null != t && rc(J, 63, t);
                t = P(p, 64);
                null != t && rc(J, 64, t);
                t = P(p, 65);
                null != t && D(J, 65, t);
                t = Hc(p, Lc, 66);
                0 < t.length && xc(J, 66, t, wd);
                t = Gc(p, Nc, 67);
                null != t && vc(J, 67, t, xd);
                t = Gc(p, Pc, 68);
                null != t && vc(J, 68, t, yd);
                t = Gc(p, Rc, 69);
                null != t && vc(J, 69, t, zd);
                t = Gc(p, dd, 70);
                null != t && vc(J, 70, t, Jd);
                t = Gc(p, pd, 71);
                null != t && vc(J, 71, t, Td);
                t = P(p, 73);
                null != t && D(J, 73, t);
                t = P(p, 74);
                null != t && D(J, 74, t);
                t = P(p, 75);
                0 < t.length && wc(J, 75, t);
                t = P(p, 76);
                null != t && D(J, 76, t);
                t = P(p, 77);
                null != t && D(J, 77, t);
                t = P(p, 78);
                null != t && D(J, 78, t);
                t = P(p, 79);
                null != t && D(J, 79, t);
                t = P(p, 80);
                0 < t.length && wc(J, 80, t);
                t = P(p, 81);
                null != t && D(J, 81, t);
                t = Gc(p, rd, 82);
                null != t && vc(J, 82, t, Ud);
                t = P(p, 83);
                null != t && D(J, 83, t);
                t = P(p, 84);
                0 < t.length && wc(J, 84, t);
                t = Gc(p, sd, 85);
                null != t && vc(J, 85, t, Vd);
                t = P(p, 86);
                0 < t.length && yc(J, 86, t);
                t = P(p, 87);
                null != t && sc(J, 87, t);
                t = P(p, 88);
                0 < t.length && yc(J, 88, t);
                t = P(p, 89);
                0 < t.length && yc(J, 89, t);
                t = P(p, 90);
                null != t && tc(J, 90, t);
                t = P(p, 91);
                null != t && qc(J, 91, t);
                t = P(p, 92);
                null != t && qc(J, 92, t);
                t = P(p, 93);
                null != t && qc(J, 93, t);
                t = P(p, 94);
                null != t && sc(J, 94, t);
                t = P(p, 95);
                null != t && sc(J, 95, t);
                Wb(0 == J.g.length);
                var Ja = new Uint8Array(J.c + J.a.length())
                  , mb = J.f
                  , nb = mb.length;
                for (C = t = 0; C < nb; C++) {
                    var Db = mb[C];
                    Ja.set(Db, t);
                    t += Db.length
                }
                var Y = jc(J.a);
                Ja.set(Y, t);
                t += Y.length;
                Wb(t == Ja.length);
                J.f = [Ja];
                var ua = Pe(Ja);
                null != P(p, 61) ? q("FP base64 string with secure_id", ua) : q("FP base64 string without secure_id", ua);
                return ua
            } catch (Da) {
                q("exception on getFingerprint", Da)
            }
            return ""
        }
        function n(p) {
            null != P(p, 59) && (Z(p, 59, void 0),
            Z(p, 60, void 0),
            Z(p, 61, void 0),
            Z(p, 74, void 0),
            Z(p, 73, void 0),
            Z(p, 75, []),
            Z(p, 75, ["SECURE_ID_SENT"]),
            q("SecureId send, don't send again, clear it"))
        }
        function r(p) {
            if (Tf()) {
                if ("undefined" !== typeof window.XMLHttpRequest.prototype.open) {
                    var B = window.XMLHttpRequest.prototype.open;
                    window.XMLHttpRequest.prototype.open = function(I, S) {
                        this.a = S;
                        return B.apply(this, arguments)
                    }
                }
                if ("undefined" !== typeof window.XMLHttpRequest.prototype.send) {
                    var C = window.XMLHttpRequest.prototype.send;
                    window.XMLHttpRequest.prototype.send = function(I) {
                        var S = arguments
                          , L = this;
                        if ("undefined" === typeof this.a || !Ff(this.a, p))
                            return C.apply(this, arguments);
                        q("AJAX url: ", this.a);
                        return W.then(function(X) {
                            try {
                                var T = m(X, Q);
                                L.setRequestHeader.apply(L, ["Dwn-Profiling", T]);
                                n(X);
                                C.apply(L, S)
                            } catch (E) {
                                q("exception on ajax", L.a, E)
                            }
                        }, function() {
                            C.apply(L, S)
                        })
                    }
                    ;
                    q("Dwn ajax set, whitelist", p)
                }
            }
        }
        function u(p) {
            if (Uf()) {
                var B = window.fetch;
                window.fetch = function(C, I) {
                    return typeof C === typeof Request || (C = new Request(C),
                    q("fetch url: ", C.url),
                    "undefined" !== typeof C.url && Ff(C.url, p)) ? W.then(function(S) {
                        try {
                            var L = m(S, Q);
                            I && "undefined" !== typeof I.headers ? I.headers instanceof Headers ? I.headers.set("Dwn-Profiling", L) : I.headers["Dwn-Profiling"] = L : C.headers.set("Dwn-Profiling", L);
                            n(S)
                        } catch (X) {
                            q("exception on fetch", X, C.url)
                        }
                        return B(C, I)
                    }, function() {
                        return B(C, I)
                    }).catch(function(S) {
                        q("exception on fetch", S)
                    }) : B(C, I)
                }
                ;
                q("Dwn fetch set, whitelist", p)
            }
        }
        function v() {
            var p = this.wb;
            p && W.then(function(B) {
                B = m(B, Q);
                p.setAttribute("value", B)
            }, function(B) {
                q("fp failed", B.toString())
            }).catch(function(B) {
                q("Exception on doDwnSubmit", B)
            })
        }
        function y(p, B, C) {
            var I = p.querySelector("[type='submit']");
            I ? (q("dwn set click event to refresh profiling data", I.id, I.name),
            I.wb = B,
            O(I, "click", C)) : (q("dwn set form submit event to refresh profiling data"),
            p.wb = B,
            O(p, "submit", C))
        }
        function x(p, B) {
            try {
                if ("string" !== typeof p.tagName || "form" !== p.tagName.toLowerCase() || "string" !== typeof p.method || "post" !== p.method.toLowerCase())
                    q("Failed to add dwn field, not a form with post method, selector", B, p.tagName, p.method, p.name, p.id);
                else {
                    var C = p.action, I;
                    if (I = C)
                        a: {
                            try {
                                I = (new URL(C)).hostname;
                                break a
                            } catch (X) {}
                            I = null
                        }
                    if (I) {
                        var S = p.querySelector("input[name='dwn-profiling']");
                        if (S)
                            q("Already has hidden dwn-profiling field", p.name, p.action, S.tagName, S.name, S.a);
                        else {
                            var L = document.createElement("input");
                            L.type = "hidden";
                            L.name = "dwn-profiling";
                            L.className = "dwn_field";
                            q("Added hidden dwn-profiling field", L.tagName, L.name, L.a);
                            p.appendChild(L);
                            y(p, L, v);
                            W.then(function(X) {
                                X = m(X, Q);
                                q("Completed on fingerprint: " + X);
                                L.value = X
                            }, function(X) {
                                q("Failed on fingerprint: " + X)
                            }).catch(function(X) {
                                q("Exception on fingerprint: " + X)
                            })
                        }
                    } else
                        q("Failed to add hidden field dwn-profiling, invalid action", p.id, p.name, C)
                }
            } catch (X) {
                q("exception on addFormDwnField", X)
            }
        }
        function w() {
            function p(T) {
                W.then(function(E) {
                    var F = m(E, Q);
                    n(E);
                    $f(T, 0, F)
                }, function(E) {
                    B("Failed on fingerprint: " + E)
                }).catch(function(E) {
                    B("Exception on fingerprint: " + E)
                })
            }
            var B = dwn_ns.b("main")
              , C = dwn_ns.dwn_profiling
              , I = !1;
            try {
                if (!C)
                    return I;
                var S = C.timeout || 10
                  , L = C.profiling_url
                  , X = C.timeout_url;
                B("dwn profiling callback", C);
                if ("undefined" !== typeof X || "none" !== X)
                    setTimeout(function() {
                        p(X)
                    }, 1E3 * S),
                    I = !0;
                if ("undefined" !== typeof L || "none" !== L)
                    p(L),
                    I = !0
            } catch (T) {
                B("exeption on doDwnProfiling", T)
            }
            return I
        }
        function N(p) {
            q("observerHandler", p.id, p.name, p.tagName);
            if (!p || "undefined" === typeof p.querySelector)
                return !1;
            try {
                for (var B = 0, C = Object.keys(dwn_ns.dwn_dyn).length, I = Gf(), S = ba(Object.entries(dwn_ns.dwn_dyn)), L = S.next(); !L.done; L = S.next()) {
                    var X = ba(L.value)
                      , T = X.next().value
                      , E = X.next().value;
                    I || "boolean" !== typeof E.use_deep_query_selector || (I = E.use_deep_query_selector);
                    var F = E.selector;
                    if (F) {
                        var K = void 0
                          , R = null;
                        if (p.matches(F))
                            K = p;
                        else if (I) {
                            var da = sf(F);
                            da && (da instanceof NodeList ? R = da : K = da)
                        } else
                            R = p.querySelectorAll(F);
                        if (K || R && 0 !== R.length) {
                            var V = 0;
                            R && (V = R.length);
                            B += 1;
                            for (var ha = {}, ea = -1; ea < V; ha = {
                                V: ha.V
                            },
                            ea++)
                                if (-1 != ea && R && (K = R.item(ea)),
                                K)
                                    if (q("dwn_dyn matched query selector", T, E, F),
                                    "dwn_submit" === T)
                                        ha.V = E.profiling_url,
                                        "string" === typeof ha.V && "none" !== ha.V ? (q("dwn_dyn submit profiling_url", K.localName, K.name, K.id, ha.V),
                                        K.addEventListener(E.event || "click", function(va) {
                                            return function() {
                                                $f(va.V)
                                            }
                                        }(ha))) : (q("dwn_dyn form submit, add dwn hidden field", K.tagName, K.name, K.id),
                                        x(K, F));
                                    else if ("undefined" === typeof dwn_ns.da)
                                        q("no keyboard JS injected", E);
                                    else {
                                        var fa = E.context;
                                        fa ? "none" !== fa && bg(K, fa, Q) : q("dwn_dyn no context", E)
                                    }
                        } else
                            q("Can't find node(s)", F)
                    } else
                        q("dwn_dyn no selector", E)
                }
                q("dwn_dyn items processed " + B + "/" + C + " selectors");
                if (B === C)
                    return !0
            } catch (va) {
                q("exception on observerHandle", va)
            }
            return !1
        }
        function H() {
            try {
                if ("object" !== typeof dwn_ns.dwn_dyn)
                    q("No dwn_dyn items, no dynamic process");
                else {
                    var p = document.querySelector("body");
                    if (p) {
                        var B = Gf();
                        if (!N(p) || B) {
                            var C = [];
                            B && (C = xf(p));
                            C.unshift(p);
                            q("Can't find all elements, using obeserver");
                            var I = new MutationObserver(function(T) {
                                T.forEach(function(E) {
                                    q("mutation", E.type);
                                    "childList" === E.type ? E.addedNodes.forEach(function(F) {
                                        N(F)
                                    }) : "attributes" === E.type && N(E.target)
                                })
                            }
                            );
                            for (p = 0; p < C.length; p++) {
                                var S = C[p]
                                  , L = "node id[" + S.nodeName + "]";
                                S instanceof ShadowRoot && (L += ", ShadowRoot host",
                                S.host && (L += ", " + S.host.nodeName + ", " + S.host.id));
                                q("observer on", L);
                                I.observe(C[p], {
                                    childList: !0,
                                    attributeFilter: ["method", "action"],
                                    subtree: !0
                                })
                            }
                            if (B)
                                try {
                                    var X = HTMLElement.prototype.attachShadow;
                                    HTMLElement.prototype.attachShadow = function(T) {
                                        T = X.call(this, T);
                                        try {
                                            I.observe(T, {
                                                childList: !0,
                                                attributes: !1,
                                                subtree: !0
                                            }),
                                            q("observer on attachShadow", this.tagName, this.id)
                                        } catch (E) {
                                            q("exception in attachShadow", E)
                                        }
                                        return T
                                    }
                                } catch (T) {
                                    q("exception on setup attachShadow", T)
                                }
                            "undefined" !== typeof Q.Qa && (q("stop observer"),
                            Q.Qa.disconnect());
                            Q.Qa = I
                        }
                    } else
                        q("Can't find document body, failed to addFieldBmListener")
                }
            } catch (T) {
                q("exception on processDynamic", T)
            }
        }
        var q = dwn_ns.b("main")
          , M = "undefined" !== typeof d;
        if (M) {
            try {
                Se(d)
            } catch (p) {
                throw p;
            }
            "boolean" === typeof dwn_ns.one_instance && !1 === dwn_ns.one_instance && (e = void 0)
        } else
            e = dwn_ns.crypto_nonce;
        Rb();
        var U = yf()
          , z = Hf()
          , O = dwn_ns.W
          , W = null
          , Q = {}
          , G = new td;
        dwn_ns.Fc = G;
        Z(G, 65, U);
        Z(G, 83, z);
        q("Darwinium JS downloaded", U);
        Ub(l.ec);
        this.collect = function() {
            return new Promise(function(p, B) {
                W.then(function(C) {
                    var I = m(C, Q);
                    null != P(C, 59) ? (q("collect: already has secure_id", Ec(C, 59, 0)),
                    n(C),
                    p(I)) : (q("collect: doesn't have secure_id, lanuch http profiling nonce request"),
                    $f(Bf(!0), 3).then(function() {
                        var S = m(C, Q);
                        q("Succeed on http profiling nonce request", Ec(C, 59, 0));
                        n(C);
                        p(S)
                    }, function() {
                        q("Failed on http profiling nonce request");
                        p(I)
                    }).catch(function(S) {
                        q("exception on http profiling nonce request" + S);
                        p(I)
                    }))
                }, function(C) {
                    B("Profiling failed: " + C)
                }).catch(function(C) {
                    B("exception on collect profiling" + C)
                })
            }
            )
        }
        ;
        this.stop = function() {
            var p = Q
              , B = dwn_ns.b("main");
            try {
                "undefined" !== typeof p.Pa && p.Pa.F();
                "undefined" !== typeof p.bb && p.bb.F();
                "undefined" !== typeof p.Ya && p.Ya.F();
                if ("undefined" !== typeof p.key)
                    for (var C = ba(Object.entries(p.key)), I = C.next(); !I.done; I = C.next()) {
                        var S = ba(I.value);
                        S.next();
                        S.next().value.F()
                    }
                "undefined" !== typeof p.Qa && p.Qa.disconnect()
            } catch (L) {
                B("exception on stop profiling", L)
            }
        }
        ;
        try {
            b()
        } catch (p) {
            q("exception on start dwn profiling", p)
        }
    }
    dwn_ns.onload = function(d) {
        dwn_ns.b("main")("dwn onload triggered");
        var e = null;
        "function" === typeof Lg && (e = Lg(d));
        Mg(void 0);
        return e
    }
    ;
    dwn_ns.profiling = Mg;
    dwn_ns.ra = function() {
        function d() {
            var p = Date.now() - Q;
            800 > p && (r("Pointer down is not a mouse down", p),
            G = !1);
            return G
        }
        function e(p) {
            try {
                if (d()) {
                    p = p || window.event;
                    var B = x(w)
                      , C = N.length
                      , I = {
                        time: B,
                        x: p.clientX,
                        y: p.clientY
                    };
                    r("Mouse move event", p.offsetX, p.offsetY);
                    if (0 === C)
                        N.push(I);
                    else if (100 < B - N[C - 1].time) {
                        if (3 < N.length) {
                            p = N;
                            try {
                                C = B = 0;
                                for (var S = p[0], L = I = S, X = S.time, T, E, F = 1; F < p.length; F++) {
                                    L = p[F];
                                    end_time = L.time;
                                    var K = I.x - L.x
                                      , R = I.y - L.y;
                                    B += Math.sqrt(Math.pow(K, 2) + Math.pow(R, 2));
                                    var da = 0 === K ? 0 : 0 < K ? 1 : -1
                                      , V = 0 === R ? 0 : 0 < R ? 1 : -1;
                                    T && E && (0 > da * T || 0 > V * E) && C++;
                                    T = da;
                                    E = V;
                                    I = L
                                }
                                var ha = {
                                    j: X,
                                    s: L.time,
                                    T: L.time - X,
                                    O: Math.sqrt(Math.pow(L.x - S.x, 2) + Math.pow(L.y - S.y, 2)),
                                    P: B,
                                    kb: C
                                };
                                r("Got a stroke", JSON.stringify(ha));
                                q.push(ha)
                            } catch (va) {
                                r("Exception on mouse stoke_info", va)
                            }
                            var ea = Date.now();
                            w.aa || (w.aa = ea);
                            w.na = ea
                        }
                        N = []
                    } else if (L = N[C - 1],
                    L.x !== I.x || L.y !== I.y)
                        N.push(I),
                        M.push(B - L.time);
                    if (0 !== O) {
                        w.sa ? w.sa++ : w.sa = 1;
                        var fa = Date.now() - O;
                        w.ga ? w.ga += fa : w.ga = fa;
                        O = 0;
                        r("Mouse came back in screen, count: " + w.sa + ", time: " + w.ga)
                    }
                } else
                    r("Mouse mouse_move event, not a mouse")
            } catch (va) {
                r("Exception on mouse move", va)
            }
        }
        function b(p) {
            try {
                if (d()) {
                    p = p || window.event;
                    x(w);
                    var B = p.relatedTarget || p.toElement;
                    B && "HTML" !== B.nodeName || (0 === O && (O = Date.now()),
                    r("Mouse left screen"))
                } else
                    r("Mouse mouse_out event, not a mouse")
            } catch (C) {
                r("Exception on mouse out", C)
            }
        }
        function h() {
            try {
                if (d()) {
                    var p = x(w)
                      , B = H.length
                      , C = {
                        time: p
                    };
                    r("Mouse wheel event", p);
                    if (0 === B)
                        H.push(C);
                    else {
                        var I = p - H[B - 1].time;
                        100 < I ? (w.wa ? w.wa++ : w.wa = 1,
                        r("mouse_record.scroll_click", w.wa),
                        H = []) : (H.push(C),
                        U.push(I))
                    }
                } else
                    r("Mouse mouse_wheel event, not a mouse")
            } catch (S) {
                r("Exception on mouse wheel", S)
            }
        }
        function k(p) {
            try {
                p = p || window.event,
                r("point down mouse check, pointerType", typeof p.pointerType, p.pointerType),
                "mouse" !== p.pointerType ? (Q = Date.now(),
                G = !1) : (Q = 0,
                G = !0)
            } catch (B) {
                r("Exception on pointer down mouse check", B)
            }
        }
        function m(p) {
            try {
                if (d()) {
                    p = p || window.event;
                    var B = x(w)
                      , C = p.button;
                    w.$ || (w.$ = Date.now());
                    var I = "left";
                    switch (C) {
                    case 0:
                        w.Ja ? w.Ja++ : w.Ja = 1;
                        break;
                    case 1:
                        w.Oa ? w.Oa++ : w.Oa = 1;
                        I = "middle";
                        break;
                    case 2:
                        w.Sa ? w.Sa++ : w.Sa = 1,
                        I = "right"
                    }
                    r("Mouse event down", p.type, I, p.clientX, p.clientY);
                    W = B
                } else
                    r("Mouse mouse_down event, not a mouse")
            } catch (S) {
                r("Exception on mouse down", S)
            }
        }
        function n() {
            try {
                if (d()) {
                    var p = x(w);
                    r("Mouse mouse_up event: " + p);
                    0 != W && p > W && z.push(p - W);
                    W = 0
                } else
                    r("Mouse mouse_up event, not a mouse")
            } catch (B) {
                r("Exception on mouse up", B)
            }
        }
        var r = dwn_ns.b("mouse_bm")
          , u = dwn_ns.W
          , v = dwn_ns.ua
          , y = dwn_ns.Z
          , x = dwn_ns.Za
          , w = {}
          , N = []
          , H = []
          , q = []
          , M = []
          , U = []
          , z = []
          , O = 0
          , W = 0
          , Q = 0
          , G = !0;
        this.F = function() {
            try {
                r("stop mouse movement detection"),
                v(window, "mousemove", e),
                v(window, "mouseout", b),
                v(window, "mousewheel", h),
                v(window, "mousedown", m),
                v(window, "pointerdown", k),
                v(window, "mouseup", n)
            } catch (p) {
                r("Exception on mouse stop", p)
            }
        }
        ;
        this.G = function() {
            try {
                var p = q.length;
                r("Number of strokes", p);
                if (0 === p)
                    return w;
                var B = []
                  , C = []
                  , I = []
                  , S = []
                  , L = []
                  , X = [];
                w.Cb = p;
                for (var T = 0, E = 0; E < p; E++) {
                    var F = q[E];
                    if (0 < E) {
                        var K = F.j - q[E - 1].s;
                        K > T && (T = K)
                    }
                    B.push(F.P);
                    C.push(F.O);
                    I.push(F.T);
                    0 !== F.T && S.push(F.P / F.T);
                    if (0 !== F.O) {
                        var R = F.P / F.O;
                        L.push((R - 1) / (R + 1))
                    }
                    X.push(F.kb)
                }
                T && (w.u = T);
                y(w, B, 1);
                y(w, C, 2);
                y(w, I, 3);
                y(w, S, 4);
                y(w, L, 5);
                y(w, X, 6);
                r("Number of move intervals", M.length);
                var da = ca(M).concat();
                y(w, da, 7);
                r("Number of scroll intervals", U.length);
                var V = ca(U).concat();
                y(w, V, 8);
                y(w, z, 9)
            } catch (ha) {
                r("Exception on mouse record", ha)
            }
            return w
        }
        ;
        try {
            r("init mouse movement"),
            u(window, "mousemove", e),
            u(window, "mouseout", b),
            u(window, "mousewheel", h),
            u(window, "mousedown", m),
            u(window, "pointerdown", k),
            u(window, "mouseup", n)
        } catch (p) {
            r("Exception on mouse init", p)
        }
    }
    ;

    dwn_ns.da = function(d, e) {
        function b(Q) {
            try {
                Q = Q || window.event;
                q.I || (q.I = Date.now());
                var G = H(q)
                  , p = Q.which || Q.keyCode
                  , B = Q.key
                  , C = Q.location;
                switch (p) {
                case 17:
                    W = !0;
                    break;
                case 91:
                    q.Ka ? q.Ka++ : q.Ka = 1;
                    break;
                case 93:
                    q.Ta ? q.Ta++ : q.Ta = 1;
                    break;
                case 13:
                    q.Ia ? q.Ia++ : q.Ia = 1;
                    break;
                case 9:
                    z ? q.Na ? q.Na++ : q.Na = 1 : O ? q.Wa ? q.Wa++ : q.Wa = 1 : W ? q.Fa ? q.Fa++ : q.Fa = 1 : q.ab ? q.ab++ : q.ab = 1;
                    break;
                case 46:
                    q.delete ? q.delete++ : q.delete = 1;
                    break;
                case 8:
                    q.Ba ? q.Ba++ : q.Ba = 1;
                    break;
                case 37:
                case 39:
                case 38:
                case 40:
                    q.Aa ? q.Aa++ : q.Aa = 1;
                    break;
                case 20:
                    q.Da ? q.Da++ : q.Da = 1;
                    break;
                case 16:
                    1 === C ? (q.Ma ? q.Ma++ : q.Ma = 1,
                    z = !0) : 2 === C && (q.Va ? q.Va++ : q.Va = 1,
                    O = !0);
                    break;
                default:
                    65 <= p && 90 >= p ? q.alpha ? q.alpha++ : q.alpha = 1 : 96 <= p && 105 >= p ? q.S ? q.S++ : q.S = 1 : B && ("0" <= B && "9" >= B ? 3 === C ? q.S ? q.S++ : q.S = 1 : q.Ha ? q.Ha++ : q.Ha = 1 : 1 === B.length && (q.$a ? q.$a++ : q.$a = 1))
                }
                switch (C) {
                case 0:
                    q.ka || (q.ka = Date.now(),
                    q.R ? q.R++ : q.R = 1);
                    U[p] = G;
                    break;
                case 1:
                    16 !== p && 93 !== p && (q.La ? q.La++ : q.La = 1);
                    break;
                case 2:
                    16 !== p && 91 !== p && (q.Ua ? q.Ua++ : q.Ua = 1)
                }
                y("keydown", JSON.stringify(q));
                "undefined" === typeof p ? q.mb = Date.now() : q.mb = void 0
            } catch (I) {
                y("Exception on KeyDown", I)
            }
        }
        function h(Q) {
            try {
                Q = Q || window.event;
                var G = H(q)
                  , p = Q.which || Q.keyCode;
                switch (p) {
                case 17:
                    W = !1;
                    break;
                case 16:
                    var B = Q.location;
                    1 === B ? z = !1 : 2 === B && (O = !1)
                }
                var C = U[p];
                C && (M.push({
                    N: C,
                    L: G
                }),
                U[p] = void 0)
            } catch (I) {
                y("Exception on KeyUp", I)
            }
        }
        function k() {
            try {
                if (H(q),
                "undefined" !== typeof q.mb) {
                    var Q = Date.now() - q.mb;
                    5 > Q && (y("AUTO-FILL detectted", Q),
                    q.Y ? q.Y++ : q.Y = 1)
                }
            } catch (G) {
                y("Exception on key change", G)
            }
        }
        function m() {
            try {
                H(q),
                q.R ? q.R++ : q.R = 1,
                q.ka || (q.ka = Date.now())
            } catch (Q) {
                y("Exception on key focus", Q)
            }
        }
        function n() {
            try {
                var Q = H(q)
                  , G = M.length;
                if (0 < G) {
                    var p = Q - M[G - 1].L;
                    if (!q.u || q.u < p)
                        q.u = p;
                    q.ma ? q.ma += p : q.ma = p;
                    y("hesitancy time", p)
                }
            } catch (B) {
                y("Exception on key focusout", B)
            }
        }
        function r() {
            q.Ea ? q.Ea++ : q.Ea = 1
        }
        function u() {
            q.Ra ? q.Ra++ : q.Ra = 1
        }
        function v() {
            try {
                H(q),
                this.selectionStart && q.jb.push(this.selectionStart.toString())
            } catch (Q) {
                y("Exception on key click", Q)
            }
        }
        var y = dwn_ns.b("key_bm")
          , x = dwn_ns.Z
          , w = dwn_ns.W
          , N = dwn_ns.ua
          , H = dwn_ns.Za
          , q = {}
          , M = []
          , U = {}
          , z = !1
          , O = !1
          , W = !1;
        this.element = d;
        this.F = function() {
            try {
                y("Stop keyboard detection on " + e),
                N(d, "keyup", h),
                N(d, "keydown", b),
                N(d, "focus", m),
                N(d, "click", v),
                N(d, "change", k),
                N(d, "focusout", n),
                N(d, "copy", r),
                N(d, "paste", u)
            } catch (Q) {
                y("Exception on key stop", Q)
            }
        }
        ;
        this.G = function() {
            var Q = M.length;
            try {
                if (1 < Q) {
                    var G = []
                      , p = []
                      , B = []
                      , C = []
                      , I = []
                      , S = []
                      , L = M[0];
                    G.push(L.L - L.N);
                    for (var X = 0, T = 1; T < Q; T++) {
                        var E = M[T];
                        G.push(E.L - E.N);
                        var F = E.N - L.L;
                        F > X && (X = F);
                        p.push(E.N - L.L);
                        B.push(E.N - L.N);
                        C.push(E.L - L.L);
                        K && (I.push(E.N - K.N),
                        S.push(E.L - K.L));
                        var K = L;
                        L = E
                    }
                    if (!q.u || q.u < X)
                        q.u = X;
                    x(q, p, 1);
                    x(q, G, 2);
                    x(q, B, 3);
                    x(q, C, 4);
                    x(q, I, 5);
                    x(q, S, 6)
                } else
                    !q.Y && d.value && 0 < d.value.length && (y("no key pressed, but input has value, set auto_fill"),
                    H(q),
                    q.Y = 1)
            } catch (R) {
                y("Exception on getKeyRecords", R)
            }
            return q
        }
        ;
        if ("undefined" === typeof d)
            y("Didn't pass element in");
        else if ("undefined" === typeof e)
            y("Didn't pass context in");
        else
            try {
                y("init field", "context: " + e, "type: " + d.type, "id: " + d.id),
                q.type = d.type,
                q.name = d.name,
                q.id = d.id,
                q.context = e,
                q.j = 0,
                q.jb = [],
                w(d, "keyup", h),
                w(d, "keydown", b),
                w(d, "focus", m),
                w(d, "click", v),
                w(d, "change", k),
                w(d, "focusout", n),
                w(d, "copy", r),
                w(d, "paste", u)
            } catch (Q) {
                y("Exception on key init_field", Q)
            }
    }
    ;

    dwn_ns.ya = function() {
        function d(z) {
            try {
                var O = z.pageX || z.layerX || z.clientX
                  , W = z.pageY || z.layerY || z.clientY;
                if ((void 0 === O || void 0 === W) && z.touches && 0 < z.touches.length) {
                    var Q = z.touches[0];
                    O = Q.pageX || Q.layerX || Q.clientX;
                    W = Q.pageY || Q.layerY || Q.clientY
                }
                return {
                    x: O,
                    y: W
                }
            } catch (G) {
                n("Exception on getXY", G)
            }
            return {}
        }
        function e(z) {
            try {
                z = z || window.event;
                w = w || [];
                var O = w.length
                  , W = y(x)
                  , Q = d(z)
                  , G = Q.x
                  , p = Q.y;
                if (void 0 === G || void 0 === p)
                    n("touch moved, can't get x/y", W, G, p);
                else {
                    z = {
                        time: W,
                        x: G,
                        y: p
                    };
                    if (0 === O)
                        w.push(z);
                    else {
                        var B = w[O - 1];
                        if (B.x !== z.x || B.y !== z.y)
                            w.push(z),
                            q.push(z.time - B.time)
                    }
                    n("touch moved", z.time, z.x, z.y)
                }
            } catch (C) {
                n("Exception on touch move", C)
            }
        }
        function b(z) {
            try {
                z = z || window.event;
                w = [];
                var O = y(x);
                x.ca || (x.ca = Date.now());
                M = O;
                var W = d(z)
                  , Q = W.x
                  , G = W.y;
                if (void 0 === Q || void 0 === G)
                    n("touch start, can't get x/y", O, Q, G);
                else {
                    var p;
                    if (z.touches && 0 < z.touches.length) {
                        var B = z.touches[0]
                          , C = B.radiusX
                          , I = B.radiusY;
                        C && I && (p = (C + I) / 2)
                    }
                    w.push({
                        time: O,
                        x: Q,
                        y: G,
                        size: p
                    });
                    n("touch start", O, Q, G, p)
                }
            } catch (S) {
                n("Exception on touch start", S)
            }
        }
        function h(z) {
            try {
                z = z || window.event;
                w = w || [];
                var O = y(x);
                if (0 != M && O > M) {
                    var W = O - M;
                    U.push(W);
                    n("Got dwell_time on touch", W)
                }
                M = 0;
                var Q = d(z)
                  , G = Q.x
                  , p = Q.y;
                void 0 !== G && void 0 !== p && w.push({
                    time: O,
                    x: G,
                    y: p
                });
                n("touch end", O, G, p, w.length);
                if (3 < w.length) {
                    z = w;
                    try {
                        n("get swipe info", z.length);
                        var B = z.length;
                        if (!(1 >= B)) {
                            var C = z[0]
                              , I = z[B - 1]
                              , S = C.size
                              , L = C.time
                              , X = I.time - L
                              , T = I.x - C.x
                              , E = I.y - C.y
                              , F = Math.sqrt(Math.pow(T, 2) + Math.pow(E, 2));
                            O = 0;
                            0 !== T && 0 !== E && (0 < T && 0 > E || 0 > T && 0 < E ? x.pa ? x.pa++ : x.pa = 1 : x.va ? x.va++ : x.va = 1);
                            if (2 < B) {
                                var K = window.innerWidth
                                  , R = window.innerHeight
                                  , da = z[Math.round(B / 2)];
                                var V = (Math.sqrt(Math.pow(K - C.x, 2) + Math.pow(R - C.y, 2)) + Math.sqrt(Math.pow(K - da.x, 2) + Math.pow(R - da.y, 2)) + Math.sqrt(Math.pow(K - I.x, 2) + Math.pow(R - I.y, 2))) / 3
                            }
                            T = 0;
                            for (E = 1; E < B; E++) {
                                var ha = z[E]
                                  , ea = C.x - ha.x
                                  , fa = C.y - ha.y;
                                O += Math.sqrt(Math.pow(ea, 2) + Math.pow(fa, 2));
                                K = 0 === ea ? 0 : 0 < ea ? 1 : -1;
                                R = 0 === fa ? 0 : 0 < fa ? 1 : -1;
                                va && ja && (0 > K * va || 0 > R * ja) && T++;
                                var va = K;
                                var ja = R;
                                C = ha
                            }
                            var ka = {
                                j: L,
                                s: I.time,
                                T: X,
                                Gc: V,
                                size: S,
                                P: O,
                                O: F,
                                kb: T
                            };
                            n("Got a swipe", ka, "left", x.pa, "right", x.va);
                            N.push(ka)
                        }
                    } catch (Ba) {
                        n("Exception on touch swipe info", Ba)
                    }
                    x.ba || (x.ba = x.s);
                    x.oa = x.s
                }
            } catch (Ba) {
                n("Exception on touch end", Ba)
            }
        }
        function k(z) {
            try {
                if (z = z || window.event,
                n("point down, pointerType", typeof z.pointerType, z.pointerType),
                "pen" === z.pointerType) {
                    var O = y(x);
                    H.push({
                        time: O,
                        pressure: z.pressure,
                        tiltX: z.tiltX,
                        tiltY: z.tiltY
                    })
                }
            } catch (W) {
                n("Exception on pointer down", W)
            }
        }
        function m(z) {
            try {
                z = z || window.event,
                n("touch cancel", z)
            } catch (O) {
                n("Exception on touch cancel", O)
            }
        }
        var n = dwn_ns.b("touch_bm")
          , r = dwn_ns.W
          , u = dwn_ns.ua
          , v = dwn_ns.Z
          , y = dwn_ns.Za
          , x = {}
          , w = []
          , N = []
          , H = []
          , q = []
          , M = 0
          , U = [];
        this.F = function() {
            try {
                n("stop touch movement detection"),
                u(window, "touchstart", b),
                u(window, "touchmove", e),
                u(window, "touchend", h),
                u(window, "touchcancel", m),
                u(window, "pointerdown", k)
            } catch (z) {
                n("Exception on touch stop", z)
            }
        }
        ;
        this.G = function() {
            try {
                var z = !1;
                0 !== U.length && (v(x, U, 13),
                z = !0);
                var O = N.length;
                x.Nb = O;
                if (0 < O) {
                    for (var W = [], Q = [], G = [], p = [], B = [], C = [], I = [], S = [], L = 0, X = 0; X < O; X++) {
                        var T = N[X];
                        if (0 < X) {
                            var E = T.j - N[X - 1].s;
                            E > L && (L = E)
                        }
                        W.push(T.P);
                        Q.push(T.O);
                        G.push(T.T);
                        C.push(T.kb);
                        S.push(T.Gc);
                        T.T && p.push(T.P / T.T);
                        T.size && I.push(T.size);
                        if (0 !== T.O) {
                            var F = T.P / T.O;
                            B.push((F - 1) / (F + 1))
                        }
                    }
                    L && (x.u = L);
                    v(x, S, 1);
                    v(x, I, 2);
                    v(x, W, 3);
                    v(x, Q, 4);
                    v(x, p, 5);
                    v(x, B, 6);
                    v(x, C, 7);
                    v(x, G, 8);
                    n("Number of move_interval", q.length);
                    var K = ca(q).concat();
                    v(x, K, 12);
                    z = !0
                }
                O = H.length;
                if (0 < O) {
                    x.Ob = !0;
                    W = [];
                    Q = [];
                    G = [];
                    for (p = 0; p < O; p++) {
                        var R = H[p];
                        W.push(R.pressure);
                        Q.push(R.tiltX);
                        G.push(R.tiltY)
                    }
                    v(x, W, 9);
                    v(x, Q, 10);
                    v(x, G, 11);
                    z = !0
                }
                if (z)
                    return x;
                return
            } catch (da) {
                n("Exception on touch record", da)
            }
            return x
        }
        ;
        try {
            n("init touch movement"),
            x.j = Date.now(),
            r(window, "touchstart", b),
            r(window, "touchmove", e),
            r(window, "touchend", h),
            r(window, "touchcancel", m),
            r(window, "pointerdown", k)
        } catch (z) {
            n("Exception on touch init", z)
        }
    }
    ;
    dwn_ns.xa = function() {
        function d(E) {
            E && -1 == X.indexOf(E) && X.push(E)
        }
        function e(E) {
            E && -1 == L.indexOf(E) && L.push(E)
        }
        function b() {
            var E = !1;
            try {
                switch (typeof dwn_ns.device_sensor_enabled) {
                case "boolean":
                    E = dwn_ns.device_sensor_enabled;
                    break;
                case "number":
                    1 === dwn_ns.device_sensor_enabled && (E = !0)
                }
            } catch (F) {
                w("Exception on device sensor enable", F)
            }
            return E
        }
        function h(E, F) {
            try {
                navigator.permissions.query({
                    name: E
                }).then(function(R) {
                    "granted" === R.state ? (w("Permission granted for " + E),
                    F()) : (w("Permission denied for " + E, R.state),
                    e(T[E].Ga))
                }).catch(function(R) {
                    R = w("Permission error for " + E, R);
                    d(R);
                    e(T[E].ja)
                })
            } catch (R) {
                var K = w("Sensor exception on request permission", R);
                d(K);
                e(T[E].ja)
            }
        }
        function k() {
            w("Device motion permission", G, Q);
            if ((W || Q) && G)
                w("Device motion permission checked before");
            else
                try {
                    DeviceMotionEvent.requestPermission().then(function(F) {
                        "granted" === F ? (W = !0,
                        N(window, "devicemotion", y),
                        N(window, "deviceorientation", x),
                        w("Sensor source = DeviceSensorEvent(iOS)"),
                        G = !0) : (Q = !0,
                        e(l.ac));
                        w("Device motion permission state", F, L)
                    }).catch(function(F) {
                        e(l.dc);
                        F = w("Device motion permission error", F);
                        d(F)
                    })
                } catch (F) {
                    var E = w("Sensor exception on request motion permission", F);
                    d(E)
                }
        }
        function m() {
            try {
                O.la = new Gyroscope({
                    frequency: 1
                }),
                O.la.addEventListener("reading", function() {
                    B.push({
                        x: O.la.x,
                        y: O.la.y,
                        z: O.la.z
                    })
                }),
                O.la.start()
            } catch (F) {
                var E = w("Sensor failed on Gyroscope", F);
                d(E)
            }
        }
        function n() {
            try {
                O.hb = new AmbientLightSensor({
                    frequency: 1
                }),
                O.hb.addEventListener("reading", function() {
                    I.push(O.hb.illuminance)
                }),
                O.hb.start()
            } catch (F) {
                var E = w("Sensor failed on AmbientLightSensor", F);
                d(E)
            }
        }
        function r() {
            try {
                O.ha = new Accelerometer({
                    frequency: 1
                }),
                O.ha.addEventListener("reading", function() {
                    S.push({
                        x: O.ha.x,
                        y: O.ha.y,
                        z: O.ha.z
                    })
                }),
                O.ha.start()
            } catch (F) {
                var E = w("Sensor failed on Accelerometer", F);
                d(E)
            }
        }
        function u() {
            try {
                O.qa = new Magnetometer({
                    frequency: 1
                }),
                O.qa.addEventListener("reading", function() {
                    var F = O.qa.x
                      , K = O.qa.y
                      , R = O.qa.z;
                    C.push({
                        x: F,
                        y: K,
                        z: R,
                        o: Math.sqrt(F * F + K * K + R * R)
                    })
                }),
                O.qa.start()
            } catch (F) {
                var E = w("Sensor failed on Magnetometer", F);
                d(E)
            }
        }
        function v() {
            if (0 == Object.keys(O).length)
                w("No Sensors API started");
            else {
                U = M.xc;
                w("Sensor source = SensorAPI(Android)");
                try {
                    O.gb = new AbsoluteOrientationSensor({
                        frequency: 1,
                        Ld: "device"
                    }),
                    O.gb.addEventListener("reading", function() {
                        try {
                            var E = O.gb.quaternion
                              , F = E[0]
                              , K = E[1]
                              , R = E[2]
                              , da = E[3];
                            p.push({
                                x: 180 * Math.atan2(2 * (F * K + R * da), 1 - 2 * (Math.pow(K, 2) + Math.pow(R, 2))) / Math.PI,
                                y: 180 * Math.asin(2 * (F * da + K * R)) / Math.PI,
                                z: 180 * Math.atan2(2 * (F * da + K * R), 1 - 2 * (Math.pow(R, 2) + Math.pow(da, 2))) / Math.PI
                            })
                        } catch (V) {
                            w("Exception on AbsoluteOrientatinoSensor read", V)
                        }
                    }),
                    O.gb.start()
                } catch (E) {
                    w("Exception on AbsoluteOrientationSensor", E)
                }
                w("Sensor API started", Object.keys(O))
            }
        }
        function y(E) {
            try {
                S.push({
                    x: E.acceleration.x,
                    y: E.acceleration.y,
                    z: E.acceleration.z
                }),
                B.push({
                    x: E.rotationRate.gamma,
                    y: E.rotationRate.beta,
                    z: E.rotationRate.alpha
                })
            } catch (F) {
                w("Exception on handleMoton", F)
            }
        }
        function x(E) {
            try {
                var F = E.alpha;
                180 < F && (F -= 360);
                p.push({
                    x: E.gamma,
                    y: E.beta,
                    z: F
                })
            } catch (K) {
                w("Exception on handleOrientation", K)
            }
        }
        var w = dwn_ns.b("sensor_bm")
          , N = dwn_ns.W
          , H = dwn_ns.ua
          , q = dwn_ns.Z
          , M = {
            Pb: 0,
            ob: 1,
            xc: 2
        }
          , U = M.Pb
          , z = {}
          , O = {}
          , W = !1
          , Q = !1
          , G = !1
          , p = []
          , B = []
          , C = []
          , I = []
          , S = []
          , L = []
          , X = []
          , T = {
            gyroscope: {
                Ga: l.tc,
                ja: l.uc
            },
            accelerometer: {
                Ga: l.oc,
                ja: l.pc
            },
            "ambient-light-sensor": {
                Ga: l.qc,
                ja: l.rc
            },
            magnetometer: {
                Ga: l.vc,
                ja: l.wc
            }
        };
        this.F = function() {
            try {
                if (G) {
                    for (var E in O)
                        O[E].stop();
                    W && (H(window, "devicemotion", y),
                    H(window, "deviceorientation", x));
                    G = !1;
                    w("sensors stopped")
                } else
                    w("sensors already stopped", O)
            } catch (F) {
                w("Exception on sensor stop", F)
            }
        }
        ;
        this.G = function() {
            try {
                if (U == M.Pb)
                    w("Sensor source is unknown");
                else {
                    U != M.ob || 0 != L.length || W || Q || e(l.cc, !0);
                    0 < L.length && (w("sensor signals", L),
                    z.signals = L);
                    0 < X.length && (w("sensor debugging", X),
                    z.debugging = X);
                    z.source = U;
                    w("window size", window.innerWidth, window.innerHeight);
                    z.orientation = window.innerWidth < window.innerHeight ? 1 : 2;
                    for (var E = [], F = [], K = [], R = 0; R < p.length; R++) {
                        var da = p[R];
                        E.push(da.x);
                        F.push(da.y);
                        K.push(da.z)
                    }
                    q(z, F, 2);
                    q(z, K, 3);
                    q(z, E, 4);
                    E = [];
                    F = [];
                    K = [];
                    for (R = 0; R < B.length; R++) {
                        var V = B[R];
                        E.push(V.x);
                        F.push(V.y);
                        K.push(V.z)
                    }
                    q(z, F, 5);
                    q(z, K, 6);
                    q(z, E, 7);
                    E = [];
                    F = [];
                    K = [];
                    for (V = 0; V < S.length; V++) {
                        var ha = S[V];
                        E.push(ha.x);
                        F.push(ha.y);
                        K.push(ha.z)
                    }
                    q(z, E, 8);
                    q(z, F, 9);
                    q(z, K, 10);
                    E = [];
                    F = [];
                    K = [];
                    ha = [];
                    for (V = 0; V < C.length; V++) {
                        var ea = C[V];
                        E.push(ea.x);
                        F.push(ea.y);
                        K.push(ea.z);
                        ha.push(ea.o)
                    }
                    q(z, E, 11);
                    q(z, F, 12);
                    q(z, K, 13);
                    q(z, ha, 14);
                    q(z, I, 1);
                    return z
                }
            } catch (fa) {
                w("Exception on sensor record", fa)
            }
        }
        ;
        try {
            h("gyroscope", m),
            h("accelerometer", r),
            h("ambient-light-sensor", n),
            h("magnetometer", u),
            setTimeout(v, 500)
        } catch (E) {
            w("Exception on init_sensor_api", E)
        }
        try {
            "undefined" === typeof DeviceMotionEvent || "function" !== typeof DeviceMotionEvent.requestPermission ? w("device motion event NOT supported") : (U = M.ob,
            b() ? (w("init_device_motion_event, add window.click event for DeviceMotionEvent"),
            N(window, "click", k)) : e(l.bc))
        } catch (E) {
            w("Exception on init_device_motion", E)
        }
    }
    ;

    window.onload = dwn_ns.onload;
}
)();
