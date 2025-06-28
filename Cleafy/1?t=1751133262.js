// Found on https://www.relaxbanking.it/v3/relaxbanking/ BCC Icreas login portal, only listed client of Cleafy, also found on other https://www.bmedonline.it/v3/app/ib_flutter_app_banca/ bank very high suspicion that this is a cleafy script


var vb5088e7619236b663920f7827b4b018f = function() {
    function C(c, b) {
        return 506832829 * c >>> b
    }
    function A(c, b) {
        return c[b] + (c[b + 1] << 8) + (c[b + 2] << 16) + (c[b + 3] << 24)
    }
    function z(d, c, b) {
        return d[c] === d[b] && d[c + 1] === d[b + 1] && d[c + 2] === d[b + 2] && d[c + 3] === d[b + 3]
    }
    function y(e, d, c, h, g) {
        var b;
        for (b = 0; b < g; b++) {
            c[h + b] = e[d + b]
        }
    }
    function x(d, c, b, g, e) {
        return 60 >= b ? (g[e] = b - 1 << 2,
        e += 1) : 256 > b ? (g[e] = 240,
        g[e + 1] = b - 1,
        e += 2) : (g[e] = 244,
        g[e + 1] = 255 & b - 1,
        g[e + 2] = b - 1 >>> 8,
        e += 3),
        y(d, c, g, e, b),
        e + b
    }
    function w(d, c, b, e) {
        return 12 > e && 2048 > b ? (d[c] = 1 + (e - 4 << 2) + (b >>> 8 << 5),
        d[c + 1] = 255 & b,
        c + 2) : (d[c] = 2 + (e - 1 << 2),
        d[c + 1] = 255 & b,
        d[c + 2] = b >>> 8,
        c + 3)
    }
    function v(d, c, b, e) {
        for (; 68 <= e; ) {
            c = w(d, c, b, 64),
            e -= 64
        }
        return 64 < e && (c = w(d, c, b, 60),
        e -= 60),
        w(d, c, b, e)
    }
    function u(Z, X, V, s, o) {
        for (var af = 1; 1 << af <= V && af <= F; ) {
            af += 1
        }
        af -= 1;
        var ae = 32 - af;
        "undefined" == typeof E[af] && (E[af] = new Uint16Array(1 << af));
        var ac, ad = E[af];
        for (ac = 0; ac < ad.length; ac++) {
            ad[ac] = 0
        }
        var aa, t, p, n, m, l, k, j, h, g, e, d, ab = X + V, Y = X, W = X, c = !0, b = 15;
        if (V >= b) {
            for (aa = ab - b,
            X += 1,
            p = C(A(Z, X), ae); c; ) {
                l = 32,
                n = X;
                do {
                    if (X = n,
                    t = p,
                    k = l >>> 5,
                    l += 1,
                    n = X + k,
                    X > aa) {
                        c = !1;
                        break
                    }
                    p = C(A(Z, n), ae),
                    m = Y + ad[t],
                    ad[t] = X - Y
                } while (!z(Z, X, m));
                if (!c) {
                    break
                }
                o = x(Z, W, X - W, s, o);
                do {
                    for (j = X,
                    h = 4; X + h < ab && Z[X + h] === Z[m + h]; ) {
                        h += 1
                    }
                    if (X += h,
                    g = j - m,
                    o = v(s, o, g, h),
                    W = X,
                    X >= aa) {
                        c = !1;
                        break
                    }
                    e = C(A(Z, X - 1), ae),
                    ad[e] = X - 1 - Y,
                    d = C(A(Z, X), ae),
                    m = Y + ad[d],
                    ad[d] = X - Y
                } while (z(Z, X, m));
                if (!c) {
                    break
                }
                X += 1,
                p = C(A(Z, X), ae)
            }
        }
        return W < ab && (o = x(Z, W, ab - W, s, o)),
        o
    }
    function r(d, c, b) {
        do {
            c[b] = 127 & d,
            d >>>= 7,
            0 < d && (c[b] += 128),
            b += 1
        } while (0 < d);
        return b
    }
    function q(b) {
        this.array = b
    }
    function i(d) {
        var c = new q(d)
          , b = new Uint8Array(c.maxCompressedLength());
        return b.slice(0, c.xb67bcf6e23d0eac28decff5935108bb7ToBuffer(b))
    }
    function f(e, d) {
        d = d || Infinity;
        for (var c, j = e.length, g = null, b = [], h = 0; h < j; h++) {
            if (c = e.charCodeAt(h),
            !(55295 < c && 57344 > c)) {
                g && (-1 < (d -= 3) && b.push(239, 191, 189),
                g = null)
            } else {
                if (g) {
                    if (56320 > c) {
                        -1 < (d -= 3) && b.push(239, 191, 189),
                        g = c;
                        continue
                    } else {
                        c = 65536 | (g - 55296 << 10 | c - 56320),
                        g = null
                    }
                } else {
                    if (56319 < c) {
                        -1 < (d -= 3) && b.push(239, 191, 189);
                        continue
                    } else {
                        if (h + 1 === j) {
                            -1 < (d -= 3) && b.push(239, 191, 189);
                            continue
                        } else {
                            g = c;
                            continue
                        }
                    }
                }
            }
            if (128 > c) {
                if (0 > (d -= 1)) {
                    break
                }
                b.push(c)
            } else {
                if (2048 > c) {
                    if (0 > (d -= 2)) {
                        break
                    }
                    b.push(192 | c >> 6, 128 | 63 & c)
                } else {
                    if (65536 > c) {
                        if (0 > (d -= 3)) {
                            break
                        }
                        b.push(224 | c >> 12, 128 | 63 & c >> 6, 128 | 63 & c)
                    } else {
                        if (2097152 > c) {
                            if (0 > (d -= 4)) {
                                break
                            }
                            b.push(240 | c >> 18, 128 | 63 & c >> 12, 128 | 63 & c >> 6, 128 | 63 & c)
                        } else {
                            throw new Error("Invalid code point")
                        }
                    }
                }
            }
        }
        return new Uint8Array(b)
    }
    function a(e, d) {
        var h, c = new Uint8Array(e), g = c.length, b = "";
        for (h = 0; h < g; h += 3) {
            b += d[c[h] >> 2],
            b += d[(3 & c[h]) << 4 | c[h + 1] >> 4],
            b += d[(15 & c[h + 1]) << 2 | c[h + 2] >> 6],
            b += d[63 & c[h + 2]]
        }
        return 2 == g % 3 ? b = b.substring(0, b.length - 1) + "=" : 1 == g % 3 && (b = b.substring(0, b.length - 2) + "=="),
        b
    }
    var F = 14
      , E = Array(F + 1);
    q.prototype.maxCompressedLength = function() {
        var b = this.array.length;
        return 32 + b + Math.floor(b / 6)
    }
    ,
    q.prototype.xb67bcf6e23d0eac28decff5935108bb7ToBuffer = function(e) {
        var d = this.array, c = d.length, h = 0, g = 0, b;
        for (g = r(c, e, g); h < c; ) {
            b = Math.min(c - h, 1 << 16),
            g = u(d, h, b, e, g),
            h += b
        }
        return g
    }
    ;
    return {
        b9ec8de76f918fc122b33b10419dfadb8: function D(b) {
            return i(f(b))
        },
        p2c25d4647185843f1df4de0c7c9ab0c7: function B(b) {
            return a(i(f(b)), "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_")
        }
    }
}();
var xb67bcf6e23d0eac28decff5935108bb7 = vb5088e7619236b663920f7827b4b018f.p2c25d4647185843f1df4de0c7c9ab0c7;
w394bcdfee8ae9fa14bafd3a7ba6af131 = function(f) {
    var k = this;
    f = (typeof f !== "undefined") ? f : "/utksx23k/in/0aaf4385d47e4d88681a7fb4170d87db";
    var q = f.indexOf("/in");
    var e = (q >= 0) ? f.substring(0, q + 3) : "/utksx23k/in";
    var c = "0aaf4385d47e4d88681a7fb4170d87db";
    function d(t, u) {
        if (!u) {
            return t
        }
        if (t.match(/[^?]+\?(&?[^=]+=[^&]+)+/g)) {
            return t + u
        } else {
            return t + "?" + u
        }
    }
    function s(t, u, v) {
        if (u.addEventListener) {
            u.addEventListener(t, v, false)
        } else {
            if (u.attachEvent) {
                u.attachEvent("on" + t, v)
            } else {
                u[t] = v
            }
        }
    }
    function i(t, w, y, v) {
        var x = new XMLHttpRequest();
        x.withCredentials = true;
        var u = d(t, v);
        x.open(y, u, true);
        x.setRequestHeader("Content-Type", "text/plain");
        x.setRequestHeader("x-as-transport", "6");
        x.send(w)
    }
    function m() {
        return (document.all && !document.addEventListener)
    }
    function a(t, v, w) {
        v = (typeof v !== "undefined") ? v : true;
        w = (typeof w !== "undefined") ? w : false;
        var u = !!window.addEventListener;
        if (u) {
            if (w) {
                o(t)
            } else {
                s("DOMContentLoaded", window, t)
            }
        } else {
            if (v) {
                o(t)
            }
        }
    }
    function n(t, v) {
        var u = xb67bcf6e23d0eac28decff5935108bb7(v);
        i(f + "/" + t, u, "POST", "")
    }
    function g(u, w, t, v) {
        i(t + "/" + u + "/" + w, "", "GET", v)
    }
    function o(t) {
        s("load", window, t)
    }
    this.v8b7a26df3b115e745e1593c75fc89653 = function(w, y, t, x) {
        if (!t) {
            t = f
        }
        if (document.body) {
            var v = document.createElement("div");
            var u = t + "/" + w + "/" + y;
            u = d(u, x);
            v.innerHTML = '<img src="' + u + '" style="display:none;"/>';
            document.body.appendChild(v)
        } else {
            g(w, y, t, x)
        }
    }
    ;
    this.g7f646e69b69f8b5bce377e3b2687be11 = function(t, w, v) {
        var u = xb67bcf6e23d0eac28decff5935108bb7(w);
        i(f + "/" + t, u, "POST", v)
    }
    ;
    if ("serviceWorker"in navigator) {
        navigator.serviceWorker.getRegistration("/sw?h=cHJvZC5pY2NyZWEuaXQ").then(function(t) {
            if (t) {
                t.unregister("/sw?h=cHJvZC5pY2NyZWEuaXQ")
            }
        })
    }
    a(function() {
        k.g7f646e69b69f8b5bce377e3b2687be11("1", document.documentElement.outerHTML, "");
        k.v8b7a26df3b115e745e1593c75fc89653(3, 1)
    }, true, false);
    function j(t) {
        if (!t.headers) {
            t.headers = new Headers()
        } else {
            t.headers = new Headers(t.headers)
        }
        t.headers.append("x-ma-sid", "55ccc356e2dec7beec059f9658cdd0b7");
        t.headers.append("x-ma-bid", "2e77e26308f85c8130521208476cd89f")
    }
    function l() {
        function u(y) {
            if (!y.uniqueid) {
                return
            }
            if (y.path.indexOf("/utksx23k/") !== 0) {
                var B = false ? "" : xb67bcf6e23d0eac28decff5935108bb7(y.responseText);
                var z = false ? "/10" : "/2";
                var x = y.uniqueid;
                var A = "/utksx23k/in/" + x;
                i(A + z, B, "POST", "");
                k.v8b7a26df3b115e745e1593c75fc89653("8", "0aaf4385d47e4d88681a7fb4170d87db", A, "")
            }
        }
        function t(B) {
            if (typeof B !== "undefined") {
                var x = /^(?:[a-z]+:)?\/\//;
                var y = !x.test(B);
                if (y) {
                    return true
                }
                if ([].length === 0) {
                    return true
                }
                var z = (new URL(B)).hostname;
                for (var A in []) {
                    if (z.indexOf([][A].toLowerCase()) > -1) {
                        return true
                    }
                }
            }
            return false
        }
        if (true) {
            var w = window.fetch;
            window.fetch = function(A, y) {
                var B = (typeof A === "string") ? A : A.url;
                if (t(B)) {
                    var C = p(B);
                    var D = C.protocol === "" || C.protocol.indexOf("http") === 0;
                    if (false && D) {
                        if (!y) {
                            A = new Request(A);
                            j(A)
                        } else {
                            j(y)
                        }
                    }
                    var z;
                    if (!y) {
                        z = w(A)
                    } else {
                        z = w(A, y)
                    }
                    var x = "";
                    if (D) {
                        z.then(function(E) {
                            return E.clone()
                        }).then(function(E) {
                            x = E.headers.get("uniqueid");
                            return E.text()
                        }).then(function(E) {
                            if (x && x !== "") {
                                var F = {
                                    path: C.path,
                                    uri: B,
                                    responseText: E,
                                    uniqueid: x
                                };
                                u(F)
                            }
                        });
                        return z
                    }
                }
                if (!y) {
                    return w(A)
                }
                return w(A, y)
            }
        }
        if (window.XMLHttpRequest) {
            var v = XMLHttpRequest.prototype.open;
            XMLHttpRequest.prototype.open = function(C, B, y, x, A) {
                var z = arguments;
                if (t(B)) {
                    s("readystatechange", this, function(G) {
                        var F = this;
                        var I = p(B);
                        var J = I.protocol === "" || I.protocol.indexOf("http") === 0;
                        if (false && J) {
                            if (this.readyState === 1) {
                                F.setRequestHeader("x-ma-sid", "55ccc356e2dec7beec059f9658cdd0b7");
                                F.setRequestHeader("x-ma-bid", "2e77e26308f85c8130521208476cd89f")
                            }
                        }
                        if (this.readyState === 4 && J) {
                            var E = F.getResponseHeader("uniqueid");
                            if (E && E !== "") {
                                var D = {
                                    path: I.path,
                                    uri: B,
                                    uniqueid: E
                                };
                                if (F.responseType === "" || F.responseType === "text" || F.responseType === "json") {
                                    D.responseText = F.responseText;
                                    u(D)
                                } else {
                                    if (false && F.responseType === "blob") {
                                        try {
                                            D.responseText = r(F.response);
                                            u(D)
                                        } catch (H) {}
                                    } else {
                                        if (false && F.responseType === "arraybuffer") {
                                            try {
                                                D.responseText = new TextDecoder("utf-8").decode(new Uint8Array(F.response));
                                                u(D)
                                            } catch (H) {}
                                        }
                                    }
                                }
                            }
                        }
                    })
                }
                v.apply(this, arguments)
            }
        }
        if (!window.XMLHttpRequest) {
            k.v8b7a26df3b115e745e1593c75fc89653(7, 1, "", "")
        }
    }
    function p(x) {
        var w = p.options
          , t = w.parser[w.strictMode ? "strict" : "loose"].exec(x)
          , v = {}
          , u = 14;
        while (u--) {
            v[w.key[u]] = t[u] || ""
        }
        v[w.q.name] = {};
        v[w.key[12]].replace(w.q.parser, function(z, y, A) {
            if (y) {
                v[w.q.name][y] = A
            }
        });
        return v
    }
    p.options = {
        strictMode: false,
        key: ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"],
        q: {
            name: "queryKey",
            parser: /(?:^|&)([^&=]*)=?([^&]*)/g
        },
        parser: {
            strict: /^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,
            loose: /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/
        }
    };
    l();
    function r(t) {
        var u, v;
        u = URL.createObjectURL(t);
        v = new XMLHttpRequest();
        v.open("GET", u, false);
        v.send();
        URL.revokeObjectURL(u);
        return v.responseText
    }
    this.pushCustomProbe = function(A, y, t, u) {
        try {
            var x = window.location.host;
            var v = {
                bid: t || null,
                sid: u || null,
                hostname: x,
                name: A,
                parent_id: c,
                data: y
            };
            var z = JSON.stringify(v);
            var B = new XMLHttpRequest();
            B.open("POST", e + "/g", true);
            B.setRequestHeader("Content-Type", "application/json");
            B.send(z)
        } catch (w) {}
    }
    ;
    function h() {
        if (document.visibilityState === "prerender") {
            k.v8b7a26df3b115e745e1593c75fc89653(11, 1)
        }
    }
    h();
    function b() {
        if (document.visibilityState === "hidden") {
            k.v8b7a26df3b115e745e1593c75fc89653(10, 1)
        }
    }
    b();
    (function() {
        var w = 500;
        var C = {
            uri: document.documentURI,
            mouse_events_hash: null,
            is_interaction_untrusted: false,
            is_text_pasted: false,
            has_mouse_click_occurred: null,
            is_mouse_interaction_unusual: null,
            has_keyboard_interaction_occurred: null,
            has_acceleration_changed: null,
            has_rotation_changed: null,
            has_touch_occurred: null
        };
        var F = 1;
        var E = 2;
        var D = 0;
        o(x);
        function x() {
            v(t);
            var N = Date.now();
            u(N);
            G();
            M();
            I();
            A();
            y()
        }
        function v(O) {
            var N = indexedDB.open("WHDDatabase", 1);
            N.onupgradeneeded = function(Q) {
                var P = Q.target.result;
                P.createObjectStore("hd_mouse_events", {
                    keyPath: "hash"
                });
                O(P)
            }
            ;
            N.onsuccess = function(P) {
                O(P.target.result)
            }
        }
        function B(Q) {
            var O = 0;
            function R(S) {
                return (S !== null && S !== undefined) ? 1 : 0
            }
            O |= R(Q.is_interaction_untrusted) << 0;
            O |= R(Q.is_text_pasted) << 1;
            O |= R(Q.has_mouse_click_occurred) << 2;
            O |= R(Q.is_mouse_interaction_unusual) << 3;
            O |= R(Q.has_keyboard_interaction_occurred) << 4;
            O |= R(Q.is_mouse_pattern_repeated) << 5;
            O |= R(Q.has_acceleration_changed) << 6;
            O |= R(Q.has_rotation_changed) << 7;
            O |= R(Q.has_touch_occurred) << 8;
            function N(S) {
                return S === true
            }
            O |= N(Q.is_interaction_untrusted) << 9;
            O |= N(Q.is_text_pasted) << 10;
            O |= N(Q.has_mouse_click_occurred) << 11;
            O |= N(Q.is_mouse_interaction_unusual) << 12;
            O |= N(Q.has_keyboard_interaction_occurred) << 13;
            O |= N(Q.is_mouse_pattern_repeated) << 14;
            O |= N(Q.has_acceleration_changed) << 15;
            O |= N(Q.has_rotation_changed) << 16;
            O |= N(Q.has_touch_occurred) << 17;
            var P = "0";
            return P + O.toString(36)
        }
        function L(N) {
            var O = new XMLHttpRequest();
            O.withCredentials = true;
            O.open("POST", f + "/12", true);
            O.setRequestHeader("Content-Type", "text/plain");
            O.setRequestHeader("x-as-transport", "0");
            O.send(B(N))
        }
        function t(P) {
            var U;
            try {
                U = JSON.parse(localStorage.getItem("hd_results"))
            } catch (R) {
                localStorage.removeItem("hd_results");
                return
            }
            if (!U) {
                return
            }
            if (!document.referrer || document.referrer !== U.uri) {
                localStorage.removeItem("hd_results");
                return
            }
            var S = U.hash;
            delete U.hash;
            if (S !== H(U)) {
                localStorage.removeItem("hd_results");
                return
            }
            var Q = U.mouse_events_hash;
            delete U.mouse_events_hash;
            delete U.uri;
            var T = P.transaction(["hd_mouse_events"], "readwrite");
            if (Q) {
                var O = T.objectStore("hd_mouse_events");
                var N = O.get(Q);
                N.onsuccess = function() {
                    if (N.result) {
                        U.is_mouse_pattern_repeated = true
                    } else {
                        U.is_mouse_pattern_repeated = false;
                        O.put({
                            hash: Q
                        })
                    }
                    L(U);
                    localStorage.removeItem("hd_results")
                }
            } else {
                U.is_mouse_pattern_repeated = null;
                L(U);
                localStorage.removeItem("hd_results")
            }
        }
        function H(R) {
            var Q = JSON.stringify(R);
            var T = 131;
            var N = 243504973489;
            var O = 0;
            var S = 1;
            for (var P = 0; P < Q.length; P++) {
                var U = Q.charCodeAt(P) % 128;
                O = (O + (U + 1) * S) % N;
                S = (S * T) % N
            }
            return O
        }
        function u(N) {
            window.addEventListener("beforeunload", function() {
                if (w > Date.now() - N) {
                    return
                }
                var O = 20;
                if (D >= O) {
                    C.mouse_events_hash = E * 65536 + F
                }
                C.hash = H(C);
                localStorage.setItem("hd_results", JSON.stringify(C))
            })
        }
        function G() {
            function N(O) {
                if (O instanceof HTMLTextAreaElement) {
                    return true
                }
                if (O instanceof HTMLInputElement) {
                    return O.type === "email" || O.type === "number" || O.type === "password" || O.type === "tel" || O.type === "text"
                }
                return false
            }
            document.addEventListener("paste", function(O) {
                C.is_text_pasted = C.is_text_pasted || N(O.target)
            }, {
                passive: true
            })
        }
        function z() {
            var Q = 20;
            var Y = 10;
            var T = 2;
            var W = 0.08;
            var Z = 5;
            var O = 0.8;
            var N = 0;
            var P = 0;
            var ab = 0;
            var aa = 0;
            var X = 0;
            var V = 0;
            var S = [];
            for (var R = 0; R < Y; R++) {
                S.push(false)
            }
            var U = 0;
            var ac = new Accelerometer({
                frequency: Q
            });
            ac.addEventListener("reading", function() {
                aa = O * aa + (1 - O) * ac.x;
                X = O * X + (1 - O) * ac.y;
                V = O * V + (1 - O) * ac.z;
                if (++ab < Z) {
                    return
                }
                N++;
                var ad = Math.abs(ac.x - aa);
                var ag = Math.abs(ac.y - X);
                var af = Math.abs(ac.z - V);
                var ae = ad > W || ag > W || af > W;
                if (ae) {
                    P++
                }
                if (N > Y && S[U]) {
                    P--
                }
                S[U] = ae;
                U = (U + 1) % Y;
                if (N > Y) {
                    C.has_acceleration_changed = P > T
                }
            });
            ac.start()
        }
        function K() {
            var P = 20;
            var W = 10;
            var S = 2;
            var V = 0.001;
            var N = 0;
            var O = 0;
            var R = [];
            for (var Q = 0; Q < W; Q++) {
                R.push(false)
            }
            var T = 0;
            var U = new Gyroscope({
                frequency: P
            });
            U.addEventListener("reading", function() {
                N++;
                var X = U.x > V || U.y > V || U.z > V;
                if (X) {
                    O++
                }
                if (N > W && R[T]) {
                    O--
                }
                R[T] = X;
                T = (T + 1) % W;
                if (N > W) {
                    C.has_rotation_changed = O > S
                }
            });
            U.start()
        }
        function M() {
            if (window.Accelerometer) {
                navigator.permissions.query({
                    name: "accelerometer"
                }).then(function(N) {
                    if (N.state !== "denied") {
                        z()
                    }
                })
            }
            if (window.Gyroscope) {
                navigator.permissions.query({
                    name: "gyroscope"
                }).then(function(N) {
                    if (N.state !== "denied") {
                        K()
                    }
                })
            }
        }
        function I() {
            if (!("ontouchstart"in window)) {
                return
            }
            C.has_touch_occurred = false;
            document.addEventListener("touchstart", function(N) {
                C.is_interaction_untrusted = C.is_interaction_untrusted || !N.isTrusted;
                C.has_touch_occurred = true
            }, {
                passive: true
            })
        }
        function J(O) {
            var N = 65521;
            F = (F + O) % N;
            E = (E + F) % N
        }
        function A() {
            var W = 100;
            var X = 5;
            C.has_mouse_click_occurred = false;
            var V = null;
            var T = null;
            var S = null;
            var R = null;
            var O = 0;
            var N = 0;
            var Q = 0;
            var U = true;
            function Y(ac, ae, aa, ad, Z, ab) {
                return (Math.floor(ac) - Math.floor(aa)) * (Math.floor(ad) - Math.floor(ab)) - (Math.floor(aa) - Math.floor(Z)) * (Math.floor(ae) - Math.floor(ad))
            }
            function P(ac, ae, ab, ad) {
                var aa = (ac - ab);
                var Z = (ae - ad);
                return Math.sqrt(aa * aa + Z * Z)
            }
            document.addEventListener("click", function(Z) {
                C.is_interaction_untrusted = C.is_interaction_untrusted || !Z.isTrusted;
                C.has_mouse_click_occurred = true;
                D++;
                J(Z.pageX);
                J(Z.pageY);
                if (C.is_mouse_interaction_unusual) {
                    return
                }
                if (O > W && N >= X) {
                    C.is_mouse_interaction_unusual = U
                }
                V = null;
                T = null;
                S = Z.pageX;
                R = Z.pageY;
                O = 0;
                N = 0;
                U = true
            }, {
                passive: true
            });
            document.addEventListener("mousemove", function(aa) {
                C.is_interaction_untrusted = C.is_interaction_untrusted || !aa.isTrusted;
                D++;
                J(aa.pageX);
                J(aa.pageY);
                if (C.is_mouse_interaction_unusual) {
                    return
                }
                if (S !== null) {
                    O += P(S, R, aa.pageX, aa.pageY)
                }
                if (V !== null) {
                    var Z = Y(V, T, S, R, aa.pageX, aa.pageY);
                    U = U && (Math.abs(Z) === Q)
                }
                V = S;
                T = R;
                S = aa.pageX;
                R = aa.pageY;
                N++
            }, {
                passive: true
            })
        }
        function y() {
            C.has_keyboard_interaction_occurred = false;
            document.addEventListener("keydown", function(N) {
                C.is_interaction_untrusted = C.is_interaction_untrusted || !N.isTrusted;
                C.has_keyboard_interaction_occurred = true
            }, {
                passive: true
            })
        }
    }
    )()
}
;
var gfea96d0738027429bfd152fcc72c122c = new w394bcdfee8ae9fa14bafd3a7ba6af131();
