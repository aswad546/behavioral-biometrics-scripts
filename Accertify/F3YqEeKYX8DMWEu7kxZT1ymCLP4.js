/** @license
Found on https://www.starbucks.com/account/signin?ReturnUrl=%2F on 20th August 2024
Collects 16 fp sources: ["Navigator.doNotTrack", "Navigator.cookieEnabled", "Window.devicePixelRatio", "Screen.colorDepth", "Navigator.platform", "Window.navigator", "Navigator.appName", "PluginArray.length", "Plugin.name", "Navigator.maxTouchPoints", "Navigator.plugins", "Screen.width", "Navigator.hardwareConcurrency", "Window.innerWidth", "Navigator.userAgent", "Screen.height"]
Collects 15 behavioral sources: ["ClipboardEvent.target", "KeyboardEvent.altKey", "KeyboardEvent.repeat", "PointerEvent.clientX", "MouseEvent.clientY", "KeyboardEvent.ctrlKey", "KeyboardEvent.isComposing", "KeyboardEvent.metaKey", "MouseEvent.clientX", "KeyboardEvent.shiftKey", "PointerEvent.clientY", "KeyboardEvent.key", "KeyboardEvent.target", "PointerEvent.target", "PointerEvent.button"]

 Uses code from stringencoders and fingerprintjs2
 See https://prod.accdab.net/static/js/uba_opensource_readme.txt for license information.
 */
! function(t) {
    var e = Date.now();
    try {
        ! function(t) {
            var n, r, i, a, o, u, s, c, l, f, d = {
                    beacon: {
                        domain: "https://prod.accdab.net",
                        url: "https://prod.accdab.net/beacon",
                        session_ttl: 60,
                        frame_source: "https://prod.accdab.net/beacon/bf/bf.html?v=2023_07.3",
                        api_ns: null,
                        proxy_submission_endpoint: null,
                        client_service_none: !1
                    },
                    token: {
                        ttl: 60,
                        key: "_bcntkn",
                        client_key: "_bcnctkn",
                        form_id: "_bcnToken"
                    },
                    client: {
                        id: "F3YqEeKYX8DMWEu7kxZT1ymCLP4",
                        forms: []
                    },
                    events: {
                        send_interval: 1e4,
                        max_page_buffer_time: 2e4,
                        max_page_buffer_size_bytes: 1048576,
                        mtrk_threshold: {
                            time: 250,
                            dist: 50
                        },
                        strk_threshold: {
                            time: 250
                        }
                    }
                },
                g = "",
                p = "",
                h = "",
                m = (r = t.navigator, i = "Microsoft Internet Explorer" === r.appName, a = (n = /MSIE ([0-9]{1,}[.0-9]{0,})/.exec(r.userAgent)) ? parseFloat(n[1]) : 0, g = "BrowserSupported = " + (o = !i || i && a >= 9) + ", isIE = " + i + ", ieVersion = " + a + ". ", o),
                v = (c = (s = function(t) {
                    return void 0 !== t
                })((u = t).Prototype) && u.Prototype.Version < "1.7" && s(Array.prototype.toJSON), l = s(Object.toJSON), f = u.JSON && s(u.JSON.stringify) && s(u.JSON.parse), p = "json: JSON Detection: Prototype lower than 1.7 = " + c + ", window.JSON = " + f + ", Object.toJSON = " + l + ". ", !l && c ? null : f ? {
                    stringify: c ? Object.toJSON : u.JSON.stringify,
                    parse: function(t) {
                        try {
                            return u.JSON.parse(t)
                        } catch (t) {
                            return null
                        }
                    }
                } : null);

            function b(t) {
                var e = "",
                    n = "",
                    r = !1;
                try {
                    t.localStorage && (r = !0)
                } catch (t) {
                    e = "Local storage is not available.  " + t, r = !1
                }
                if (!r) return r;
                try {
                    t.sessionStorage && (r = !0)
                } catch (t) {
                    n = "Session storage is not available.  " + t, r = !1
                }
                return h = "Storage Supported = " + r + ". " + e + n, r
            }
            var y = m && v && b(t) && !d.beacon.client_service_none,
                x = function(t) {
                    if (t.btoa && t.atob) return {
                        btoa: function(e) {
                            return t.btoa(e)
                        },
                        atob: function(e) {
                            return t.atob(e)
                        }
                    };
                    var e = function(t, e) {
                            var n = x.ALPHA.indexOf(t.charAt(e));
                            if (-1 === n) throw x.makeDOMException();
                            return n
                        },
                        n = function(t, e) {
                            var n = t.charCodeAt(e);
                            if (n > 255) throw function() {
                                try {
                                    return new DOMException(DOMException.INVALID_CHARACTER_ERR)
                                } catch (e) {
                                    var t = new Error("DOM Exception 5");
                                    return t.code = t.number = 5, t.name = t.description = "INVALID_CHARACTER_ERR", t.toString = function() {
                                        return "Error: " + t.name + ": " + t.message
                                    }, t
                                }
                            }();
                            return n
                        };
                    return {
                        btoa: function(t) {
                            if (1 !== arguments.length) throw new SyntaxError("Not enough arguments");
                            var e, r, i = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
                                a = n,
                                o = [],
                                u = (t = "" + t).length - t.length % 3;
                            if (0 === t.length) return t;
                            for (e = 0; e < u; e += 3) r = a(t, e) << 16 | a(t, e + 1) << 8 | a(t, e + 2), o.push(i.charAt(r >> 18)), o.push(i.charAt(r >> 12 & 63)), o.push(i.charAt(r >> 6 & 63)), o.push(i.charAt(63 & r));
                            switch (t.length - u) {
                                case 1:
                                    r = a(t, e) << 16, o.push(i.charAt(r >> 18) + i.charAt(r >> 12 & 63) + "==");
                                    break;
                                case 2:
                                    r = a(t, e) << 16 | a(t, e + 1) << 8, o.push(i.charAt(r >> 18) + i.charAt(r >> 12 & 63) + i.charAt(r >> 6 & 63) + "=")
                            }
                            return o.join("")
                        },
                        atob: function(t) {
                            var n, r, i, a = e,
                                o = (t = "" + t).length;
                            if (0 === o) return t;
                            if (o % 4 != 0) throw x.makeDOMException();
                            n = 0, "=" === t.charAt(o - 1) && (n = 1, "=" === t.charAt(o - 2) && (n = 2), o -= 4);
                            var u = [];
                            for (r = 0; r < o; r += 4) i = a(t, r) << 18 | a(t, r + 1) << 12 | a(t, r + 2) << 6 | a(t, r + 3), u.push(String.fromCharCode(i >> 16, i >> 8 & 255, 255 & i));
                            switch (n) {
                                case 1:
                                    i = a(t, r) << 18 | a(t, r + 1) << 12 | a(t, r + 2) << 6, u.push(String.fromCharCode(i >> 16, i >> 8 & 255));
                                    break;
                                case 2:
                                    i = a(t, r) << 18 | a(t, r + 1) << 12, u.push(String.fromCharCode(i >> 16))
                            }
                            return u.join("")
                        }
                    }
                }(t);
            d.beacon.client_service_none || m && v && b(t) || function() {
                var e, n = "BEACON_NOT_SUPPORTED";
                e = null === d.beacon.proxy_submission_endpoint ? d.beacon.url + "/et?c=" + encodeURIComponent(d.client.id) + "&t=" + encodeURIComponent(n) : d.beacon.proxy_submission_endpoint + "?c=" + encodeURIComponent(d.client.id) + "&t=" + encodeURIComponent(n);
                var r = d.beacon.client_service_none,
                    i = function(t) {
                        var e, n = T();
                        if (v) {
                            var r = {
                                ts: n,
                                pay: t
                            };
                            e = v.stringify(r)
                        } else e = '{"ts": ' + n + ', "pay": "' + t + '"}';
                        return x.btoa(e)
                    }(function(e) {
                        var n, r = T(),
                            i = t.location.href,
                            a = (t.document.currentScript || t.document.getElementById("bcn")).getAttribute("sid"),
                            o = "unknown";
                        try {
                            b(t) && (a = t.sessionStorage.get("_bcncsid"), o = t.sessionStorage.get("_bcnbsid"))
                        } catch (t) {}
                        if (v) {
                            var u = [{
                                loc: i,
                                sid: a,
                                bsid: o,
                                ts: r,
                                type: "err",
                                pay: {
                                    t: r,
                                    c: 1,
                                    e: [{
                                        m: e,
                                        c: 0,
                                        t: r
                                    }]
                                },
                                plat: "b",
                                u: !1
                            }];
                            n = v.stringify(u)
                        } else n = '[{"loc": "' + i + '","sid": "' + a + '","bsid": "' + o + '","ts": ' + r + ',"type": "err","pay": {"t": ' + r + ',"c": 1,"e": [{"m": "' + e + '","c": 0,"t": ' + r + '}]},"plat": "b", "u": ' + !1 + "}]";
                        return x.btoa(n)
                    }("Beacon supported = " + y + ". " + g + p + h + "client_service_none = " + r + ". ")),
                    a = "withCredentials" in new XMLHttpRequest,
                    o = a ? new XMLHttpRequest : new XDomainRequest;
                o.open("post", e, !0), a && o.setRequestHeader("Content-Type", "text/plain;charset=UTF-8"), o.send(i)
            }();
            var _ = function(t) {
                    var e = t,
                        n = t.document;

                    function r(t, e, n, r, i, a) {
                        var o = "on" + r;
                        return n[t] && (a || o in n) ? (n[t](r, i), !0) : !!(n[e] && o in n) && (n[e](o, i), !0)
                    }

                    function i(i, a, o, u, s, c) {
                        return r(i, a, o, u, s, c) ? o : o === e && r(i, a, n, u, s, c) ? document : o === n && r(i, a, e, u, s, c) ? t : null
                    }
                    return {
                        register: function(t, e, n, r) {
                            return i("addEventListener", "attachEvent", t, e, n, r)
                        },
                        unregister: function(t, e, n, r) {
                            return i("removeEventListener", "detachEvent", t, e, n, r)
                        }
                    }
                }(t),
                A = function() {
                    function t(t, e) {
                        if ("#" === e.charAt(0) && t.getAttribute("id") === e.substring(1)) return !0;
                        if ("." === e.charAt(0)) {
                            var n = t.className;
                            return n && -1 !== n.indexOf(e.substring(1))
                        }
                        return t.getAttribute("name") === e
                    }
                    return {
                        find: function(e, n) {
                            return e.querySelectorAll ? function(t, e) {
                                for (var n = [], r = 0; r < e.length; r++) {
                                    var i = e[r];
                                    "#" !== i.charAt(0) && "." !== i.charAt(0) && (i = '[name="' + i + '"]'), i = "form" + i, n.push(i)
                                }
                                return n.length > 0 ? t.querySelectorAll(n.join(",")) : []
                            }(e, n) : function(e, n) {
                                for (var r = e.forms, i = [], a = 0; a < r.length; a++)
                                    for (var o = r[a], u = 0; u < n.length; u++)
                                        if (t(o, n[u])) {
                                            i.push(o);
                                            break
                                        } return i
                            }(e, n)
                        },
                        dump: function(t) {
                            return 'form(name="' + t.name + '" id="' + t.id + '" classes="' + t.classList + '")'
                        }
                    }
                }();

            function w(t, e, n) {
                var r = t || null,
                    i = e || null,
                    a = !0 === n,
                    o = [],
                    u = [];

                function s(t) {
                    if (i && a)
                        if (null === r) u.push(t);
                        else {
                            var e = function(t) {
                                if (t.querySelector) return t.querySelector("." + i);
                                var e = t.getElementsByTagName(i);
                                return e && 1 === e.length ? e[0] : null
                            }(t);
                            e ? e.setAttribute("value", r) : t.appendChild((n = t.ownerDocument, (o = n.createElement("input")).setAttribute("type", "hidden"), o.classList ? o.classList.add(i) : o.setAttribute("class", o.getAttribute("class") + " " + i), o.setAttribute("name", i), o.setAttribute("value", r), o))
                        } var n, o
                }
                return {
                    set: function(t) {
                        if (r = t) {
                            for (var e = 0; e < o.length; e++) o[e](t);
                            o = [];
                            for (var n = 0; n < u.length; n++) s(u[n]);
                            u = []
                        }
                    },
                    get: function() {
                        return r
                    },
                    getAsync: function(t) {
                        "function" == typeof t && (null == r ? o.push(t) : t(r))
                    },
                    inject: s,
                    injectable: function() {
                        return a
                    },
                    name: function() {
                        return i
                    }
                }
            }
            var k, S, I = function(t, e) {
                    var n = [],
                        r = t,
                        i = e;

                    function a(t) {
                        if (t && t.nodeName && "FORM" === t.nodeName)
                            for (var e = 0; e < n.length; e++) n[e].inject(t)
                    }

                    function o() {
                        for (var t = A.find(r.document, i), e = 0; e < t.length; e++) a(t[e])
                    }
                    return {
                        addValue: function(t) {
                            t.injectable() && "function" == typeof t.inject && n.push(t)
                        },
                        inject: a,
                        init: function() {
                            "complete" !== r.document.readyState ? _.register(t, "load", o) : o()
                        }
                    }
                }(t, d.client.forms),
                E = t.document.currentScript || t.document.getElementById("bcn"),
                C = w(E.getAttribute("sid") || null, "sessionId", !1),
                N = !!y && E.hasAttribute("ibf"),
                O = function(t) {
                    var e = [];
                    if (t)
                        for (var n = t.replace("\\.", "{ed}").split("."), r = 0; r < n.length; r++) {
                            var i = n[r].trim();
                            i && e.push(i.replace("{ed}", "."))
                        }
                    return e
                }(E.getAttribute("ns") || d.beacon.api_ns),
                M = {
                    value: k = E.getAttribute("ptnr") || "d",
                    auto: "a" === k || "A" === k,
                    load: "l" === k || "L" === k,
                    disabled: "d" === k || "D" === k
                },
                D = {
                    value: S = E.getAttribute("dvc") || M.value || "d",
                    auto: "a" === S || "A" === S,
                    load: "l" === S || "L" === S,
                    disabled: "d" === S || "D" === S,
                    flags: parseInt(E.getAttribute("dvcf")) || 0,
                    timeout: parseInt(E.getAttribute("dvct")) || (d.hasOwnProperty("dvc") ? d.dvc.to : 500),
                    tid: E.hasAttribute("dvci") && E.getAttribute("dvci").trim() || L(),
                    debug: E.hasAttribute("dvcd"),
                    ns: E.getAttribute("dvcn") || (d.hasOwnProperty("dvc") ? d.dvc.ns : null)
                };

            function L() {
                var t = (new Date).getTime();
                return "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx".replace(/[x]/g, function() {
                    var e = (t + 16 * Math.random()) % 16 | 0;
                    return t = Math.floor(t / 16), e.toString(16)
                })
            }
            var H = d.hasOwnProperty("dvc"),
                R = w(null, "_dvcTID", !0);

            function T() {
                var t = Date.now ? Date.now() : (new Date).getTime();
                return t || 0
            }
            H && D.auto && (R.set(D.tid), I.addValue(R));
            var U = w(null, d.token.form_id, !0);
            I.addValue(U);
            var F, P, j, q, V, X, B, W, J, z = y ? function(t, n, r, i) {
                    var a, o, u, s, c, l, f, d, g = t,
                        p = t.navigator,
                        h = t.screen,
                        m = t.document,
                        v = 6e4 * r,
                        b = t.sessionStorage,
                        y = i,
                        x = "_bcnsts",
                        _ = "_bcncsid",
                        A = "_bcnbsid",
                        w = {};

                    function k() {
                        return !S(b.getItem(A))
                    }

                    function S(t) {
                        return null === t || "" === t.trim()
                    }
                    return function() {
                        var t = new Date,
                            e = b.getItem(x);
                        if (null !== e) try {
                            t = new Date(parseInt(e))
                        } catch (t) {}
                        return t
                    }() > new Date && (o = b.getItem(_), u = S(o), s = S(y.get()), c = !s && u, l = !s && !u && o !== y.get(), !c && !l && k()) || (w.sw = h.width, w.sh = h.height, w.cd = h.colorDepth, w.m = "ontouchstart" in (a = g) || a.navigator.maxTouchPoints > 0 || a.navigator.msMaxTouchPoints > 0, w.hc = p.hardwareConcurrency, w.ua = p.userAgent, w.loc = m.location.href, w.plg = function() {
                        if ("plugins" in p) try {
                            for (var t = {}, e = 0; e < p.plugins.length; e++) t[p.plugins[e].name] = 1;
                            return Object.keys(t)
                        } catch (t) {}
                        return null
                    }(), w.pf = p.platform, w.ce = p.cookieEnabled, w.dnt = function() {
                        var t = p.doNotTrack || g.doNotTrack || p.msDoNotTrack || 2;
                        switch (t) {
                            case "yes":
                                t = 1;
                                break;
                            case "no":
                                t = 0;
                                break;
                            case "unspecified":
                                t = 2
                        }
                        return t
                    }(), w.tz = -1 * (new Date).getTimezoneOffset(), w.ab = null, w.cvs = "NAD", w.wgl = "NAD", w.wglv = "NAD", w.wglr = "NAD", w.slt = e), f = v, d = (new Date).getTime() + f, b.setItem(x, d), S(y.get()) || b.setItem(_, y.get()), k() || b.setItem(A, L()), {
                        data: w,
                        bsid: b.getItem(A),
                        bskey: A
                    }
                }(t, 0, d.beacon.session_ttl, C) : null,
                K = y ? function(t, e, n, r, i) {
                    var a = t,
                        o = t.document,
                        u = e,
                        s = n,
                        c = {},
                        l = [],
                        f = null,
                        d = r,
                        g = v(r),
                        p = !1;

                    function h() {
                        (f = o.createElement("iframe")).id = "_bcnf", f.style.display = "none", f.src = d, s.register(f, "load", m, !0);
                        try {
                            o.body.appendChild(f)
                        } catch (t) {
                            f = null
                        }
                        return f
                    }

                    function m() {
                        p = !0;
                        for (var t = 0; t < l.length; t++) b(l[t]);
                        l = []
                    }

                    function v(t) {
                        if (t) {
                            var e = t.split("/");
                            if (e.length >= 3) return e[2]
                        }
                        return ""
                    }

                    function b(t) {
                        f.contentWindow.postMessage(t, d)
                    }
                    return s.register(a, "message", function(t) {
                        if (t && (r = t.origin, g === v(r))) {
                            var e = function(t) {
                                try {
                                    return u.parse(t.data)
                                } catch (t) {
                                    return {}
                                }
                            }(t);
                            (n = e) && "object" == typeof n && n.hasOwnProperty("id") && n.hasOwnProperty("data") && c[e.id] && c[e.id](e.data)
                        }
                        var n, r
                    }), i || "complete" === o.readyState ? h() : s.register(a, "load", h), {
                        register: function(t, e) {
                            c[t] = e
                        },
                        unregister: function(t) {
                            c[t] = null
                        },
                        send: function(t, e) {
                            var n = u.stringify({
                                id: t,
                                data: e
                            });
                            p ? b(n) : l.push(n)
                        }
                    }
                }(t, v, _, d.beacon.frame_source, N) : null;
            y ? (F = t, P = d, j = z, q = K, V = U, X = C.get(), B = F.localStorage, W = P.token.client_key, null !== (J = B.getItem(W)) && "" !== J.trim() || (J = L(), B.setItem(W, J)), V.set(J), q.send("token", {
                ttl: P.token.ttl,
                key: P.token.key,
                ckey: P.token.client_key,
                ctkn: J,
                sid: X,
                bsid: j.bsid,
                bskey: j.bskey,
                url: P.beacon.url,
                client: P.client.id,
                session: j.data
            })) : U.set("TOKEN_UNAVAILABLE");
            var Y = function(e) {
                for (var n = t, r = 0; r < e.length; r++) n[e[r]] = n[e[r]] || {}, n = n[e[r]];
                return n._bcn = {}, n._bcn
            }(O);
            Y.getToken = U.get, Y.getTokenAsync = U.getAsync, Y.getSessionId = C.get, Y.injectForm = I.inject;
            var Z, G, Q, $, tt, et, nt, rt, it, at, ot, ut, st, ct, lt, ft, dt, gt, pt, ht, mt, vt, bt, yt, xt, _t, At, wt, kt = (Z = t, Q = {
                    preUnload: {},
                    unload: {},
                    postUnload: {},
                    preHashChange: {},
                    hashChange: {},
                    postHashChange: {},
                    preSubmit: {},
                    submit: {},
                    postSubmit: {}
                }, (G = _).register(Z, "beforeunload", function() {
                    for (var t in Q.preUnload) Q.preUnload[t]();
                    for (var e in Q.unload) Q.unload[e]();
                    for (var n in Q.postUnload) Q.postUnload[n]()
                }), G.register(Z, "hashchange", function() {
                    for (var t in Q.preHashChange) Q.preHashChange[t]();
                    for (var e in Q.hashChange) Q.hashChange[e]();
                    for (var n in Q.postHashChange) Q.postHashChange[n]()
                }), G.register(Z, "submit", function() {
                    for (var t in Q.preSubmit) Q.preSubmit[t]();
                    for (var e in Q.submit) Q.submit[e]();
                    for (var n in Q.postSubmit) Q.postSubmit[n]()
                }), {
                    register: function(t, e, n) {
                        t in Q && (Q[t][e] = n)
                    }
                }),
                St = y ? function(t, e) {
                    var n = t,
                        r = t.document,
                        i = r.location.href,
                        a = r.referrer || null,
                        o = r.title || null,
                        u = T(),
                        s = c();

                    function c() {
                        return Math.floor(9007199254740991 * Math.random())
                    }

                    function l() {
                        if (n.sessionStorage) return n.sessionStorage.setItem("_bcnPpid", s)
                    }
                    return e.register("hashChange", "pageInfo", function() {
                        a = i, i = r.location.href, o = r.title, l(), s = c(), u = T()
                    }), e.register("unload", "pageInfo", l), {
                        location: function() {
                            return i
                        },
                        referrer: function() {
                            return a
                        },
                        title: function() {
                            return o
                        },
                        timestamp: function() {
                            return u
                        },
                        pageId: function() {
                            return s
                        },
                        previousPageId: function() {
                            return n.sessionStorage ? n.sessionStorage.getItem("_bcnPpid") : null
                        }
                    }
                }(t, kt) : null,
                It = y ? function(t) {
                    var e = t,
                        n = t.document,
                        r = "CSS1Compat" === (n.compatMode || "");

                    function i() {
                        return e.devicePixelRatio || 1
                    }

                    function a() {
                        return e.innerWidth || n.documentElement.clientWidth || n.body.clientWidth || 0
                    }

                    function o() {
                        return e.innerHeight || n.documentElement.clientHeight || n.body.clientHeight || 0
                    }

                    function u() {
                        return e.pageYOffset || (r ? n.documentElement.scrollTop : n.body.scrollTop)
                    }

                    function s() {
                        return e.pageXOffset || (r ? n.documentElement.scrollLeft : n.body.scrollLeft)
                    }
                    return {
                        get: function() {
                            return {
                                documentWidth: n.documentElement.scrollWidth,
                                documentHeight: n.documentElement.scrollHeight,
                                windowWidth: a(),
                                windowHeight: o(),
                                scrollOffsetFromTop: u(),
                                scrollOffsetFromLeft: s(),
                                pixelRatio: i()
                            }
                        },
                        scrollY: u,
                        scrollX: s,
                        windowHeight: o,
                        windowWidth: a,
                        pixelRatio: i
                    }
                }(t) : null,
                Et = y ? ($ = St, tt = C, et = z.bsid, nt = $, rt = tt, it = et, at = {}, {
                    create: function(t) {
                        return t in at ? (e = t, n = at[t](), r = nt.location(), i = nt.pageId(), a = it, {
                            loc: r,
                            pid: i,
                            sid: rt.get(),
                            bsid: a,
                            ts: T(),
                            type: e,
                            pay: n
                        }) : null;
                        var e, n, r, i, a
                    },
                    register: function(t, e) {
                        at[t] = e
                    }
                }) : null,
                Ct = y ? function(t, e, n, r) {
                    var i = e,
                        a = n,
                        o = r,
                        u = t.sessionStorage,
                        s = "_bcnbf",
                        c = {},
                        l = [],
                        f = null;

                    function d() {
                        return o.btoa(encodeURIComponent(a.stringify(l)))
                    }
                    return u && (f = u.getItem(s)), {
                        get: function(t) {
                            var e = c[t] || null;
                            if (null === e) {
                                var n = i.create(t);
                                if (!n) return null;
                                l.push(n), e = n.pay, c[t] = e
                            }
                            return e
                        },
                        set: function() {
                            u && u.setItem(s, d())
                        },
                        serialize: d,
                        clearBuffer: function() {
                            c = {}, l = [], u && u.removeItem(s)
                        },
                        clearPending: function() {
                            f = null
                        },
                        empty: function() {
                            return 0 === l.length
                        },
                        pending: function() {
                            return f
                        }
                    }
                }(t, Et, v, x) : null,
                Nt = y ? function(t, e, n) {
                    var r = t.events.max_page_buffer_time > 0,
                        i = Math.ceil(t.events.max_page_buffer_time / t.events.send_interval),
                        a = 0,
                        o = [],
                        u = e,
                        s = n,
                        c = t.events.max_page_buffer_size_bytes;

                    function l() {
                        for (var t = 0; t < i; t++)
                            if (null != o[t] && o[t].length > 0) return !1;
                        return !0
                    }

                    function f() {
                        return u.btoa(s.stringify({
                            ts: T(),
                            pays: o
                        }))
                    }
                    return {
                        add: function(t) {
                            r && (o[a] = t, a = (a + 1) % i)
                        },
                        getEvents: function() {
                            return o
                        },
                        merge: function(t) {
                            o[i] = t;
                            for (var e = f(); .75 * e.length > c;) {
                                if (1 == l()) return;
                                o[a] = null, a = (a + 1) % i, e = f()
                            }
                            return f()
                        }
                    }
                }(d, x, v) : null,
                Ot = y ? function(t, e, n, r, i, a, o, u) {
                    var s, c = t,
                        l = t.navigator,
                        f = "function" == typeof l.sendBeacon,
                        d = i,
                        g = o,
                        p = n,
                        h = r,
                        m = !1,
                        v = [];
                    s = null === a.beacon.proxy_submission_endpoint ? a.beacon.url + "/et?c=" + _(a.client.id) + "&t=" : a.beacon.proxy_submission_endpoint + "?c=" + _(a.client.id) + "&t=";
                    var b = "withCredentials" in new XMLHttpRequest,
                        y = u;

                    function x() {
                        return m
                    }

                    function _(t) {
                        return encodeURIComponent(t)
                    }

                    function A(t) {
                        return h.btoa(p.stringify({
                            ts: T(),
                            pay: t
                        }))
                    }

                    function w(t) {
                        x() && (f && l.sendBeacon(s, t) || k(s).send(t))
                    }

                    function k(t) {
                        var e = b ? new XMLHttpRequest : new XDomainRequest;
                        return e.open("post", t, !0), b && e.setRequestHeader("Content-Type", "text/plain;charset=UTF-8"), e
                    }

                    function S() {
                        if (!d.empty() && x()) {
                            var t = A(d.serialize());
                            w(t), y.add(t), d.clearBuffer()
                        } else y.add(null)
                    }

                    function I() {
                        d.pending() && x() && (w(A(d.pending())), d.clearPending()), S()
                    }
                    return g.getAsync(function() {
                        s += _(g.get()), m = !0, I()
                    }), v.push(c.setInterval(S, a.events.send_interval)), {
                        unloader: function() {
                            ! function() {
                                for (var t = 0; t < v.length; t++) c.clearInterval(v[t]);
                                v = []
                            }(), S()
                        },
                        hashChanger: S,
                        submitter: S,
                        send: S,
                        getEvents: function() {
                            var t = d.empty() ? null : A(d.serialize());
                            return y.merge(t)
                        }
                    }
                }(t, 0, v, x, Ct, d, U, Nt) : null;
            y ? (Y.flush = Ot.send, Y.getEvents = Ot.getEvents, Y.getPageId = St.pageId, Y.getUbaSessionId = function() {
                return z.bsid
            }) : (Y.flush = function() {}, Y.getEvents = function() {
                return x.btoa("default")
            }, Y.getPageId = function() {
                return "default"
            }, Y.getUbaSessionId = function() {
                return "default"
            });
            try {
                y && 0 !== Object.keys(z.data).length && (Et.register("sesn", function() {
                    return z.data
                }), Ct.get("sesn"), Ct.set("sesn")), y && function(t, e, n, r, i) {
                    var a = It,
                        o = St,
                        u = e,
                        s = "ptni",
                        c = "ptno",
                        l = "ptrk",
                        f = null;

                    function d() {
                        return {
                            t: null,
                            dw: null,
                            dh: null,
                            ww: null,
                            wh: null,
                            sl: null,
                            st: null,
                            pr: null,
                            ref: null,
                            tit: null
                        }
                    }

                    function g() {
                        f = T();
                        var t = u.get(s);
                        t.t = f, h(t), u.set(s)
                    }

                    function p() {
                        var t = u.get(c);
                        t.t = T() - f, h(t), e.set(c)
                    }

                    function h(t) {
                        var e = a.get();
                        t.dw = e.documentWidth, t.dh = e.documentHeight, t.ww = e.windowWidth, t.wh = e.windowHeight, t.sl = e.scrollOffsetFromLeft, t.st = e.scrollOffsetFromTop, t.pr = e.pixelRatio, t.ref = o.referrer(), t.tit = o.title(), t.ppid = o.previousPageId()
                    }
                    t.register(s, d), t.register(c, d), i.register("postHashChange", l, g), i.register("preUnload", l, p), i.register("preHashChange", l, p), g()
                }(Et, Ct, 0, 0, kt);
                var Mt = (At = t.document, yt = At, xt = {}, _t = "_BEACON_NO_LABEL_", wt = {
                        get: function(t) {
                            var e = xt[t];
                            if (!e) {
                                var n = yt.querySelector('label[for="' + t + '"]');
                                e = n && n.textContent && n.textContent.trim() ? n.textContent : _t, xt[t] = e
                            }
                            return e === _t ? null : e
                        }
                    }, {
                        map: function(t) {
                            var e = t.target || t.srcElement;
                            return e.id && e.id.trim() && wt.get(e.id) ? wt.get(e.id) : e.name && e.name.trim() ? e.name : e.id && e.id.trim() ? e.id : "_"
                        }
                    }),
                    Dt = y ? (vt = Ct, bt = "meta", Et.register(bt, function() {
                        return {
                            t: T(),
                            m: {}
                        }
                    }), {
                        add: function(t, e) {
                            var n = vt.get(bt);
                            if (t && !n.m.hasOwnProperty(t)) {
                                var r = e.target || e.srcElement,
                                    i = {};
                                i.i = r.getAttribute("id"), i.n = r.getAttribute("name"), i.t = r.getAttribute("type"), n.m[t] = i, vt.set(n)
                            }
                        }
                    }) : null;
                y && (ot = _, ut = Et, st = Ct, ct = Mt, lt = Dt, ft = t.document, dt = ot, gt = ct, pt = lt, ht = st, mt = "paste", ut.register(mt, function() {
                    return {
                        t: T(),
                        p: {},
                        c: 0
                    }
                }), dt.register(ft, "paste", function(t) {
                    var e = ht.get(mt);
                    e.c = e.c + 1;
                    var n = gt.map(t);
                    pt.add(n, t), n in e.p || (e.p[n] = []), e.p[n].push(T() - e.t), ht.set()
                }, !0)), y && function(t, e, n, r, i, a, o) {
                    var u = _,
                        s = Mt,
                        c = Dt,
                        l = Ct,
                        f = "keyp";
                    Et.register(f, function() {
                        return {
                            t: T(),
                            h: {},
                            p: {},
                            c: 0
                        }
                    });
                    var d = 1,
                        g = 2,
                        p = 4,
                        h = 8,
                        m = 16,
                        v = 32;

                    function b(t) {
                        var e, n = t.key || t.keyCode || null;
                        if (n) {
                            "number" == typeof n && (n = String.fromCharCode(n)), n = (n.length > 1 ? n : (e = n).match(y) ? x : e.match(A) ? w : e.match(k) ? S : I) + "|";
                            var r = 0;
                            r |= t.altKey ? d : 0, r |= t.ctrlKey ? g : 0, r |= t.metaKey ? p : 0, r |= t.shiftKey ? h : 0, r |= t.repeat ? m : 0, n += r |= t.isComposing ? v : 0
                        }
                        return n
                    }
                    var y = /\d/,
                        x = "D",
                        A = /\w/,
                        w = "A",
                        k = /\s/,
                        S = "W",
                        I = "O";
                    u.register(t, "keydown", function(t) {
                        var e = b(t);
                        e && function(t, e) {
                            var n = l.get(f);
                            n.c = n.c + 1;
                            var r = s.map(e);
                            c.add(r, e), r in n.p || (n.p[r] = []), e.repeat || n.p[r].push(T() - n.t), r in n.h || (n.h[r] = {}), t in n.h[r] || (n.h[r][t] = 0), n.h[r][t] = n.h[r][t] + 1, l.set()
                        }(e, t)
                    }, !1)
                }(t), y && function(t, e, n, r, i, a, o) {
                    var u = t,
                        s = t.document,
                        c = e,
                        l = a,
                        f = o,
                        d = r,
                        g = "autof",
                        p = {};

                    function h(t) {
                        return t.target.type && ("text" === t.target.type || "textarea" === t.target.type || "email" === t.target.type || "number" === t.target.type || "password" === t.target.type || "search" === t.target.type || "tel" === t.target.type || "url" === t.target.type)
                    }

                    function m() {
                        for (var t = s.querySelectorAll("input[type=text],input[type=email],input[type=number],input[type=password],input[type=search],input[type=tel],input[type=url],textarea"), e = 0; e < t.length; e++) {
                            var n = t[e];
                            if (n.value) {
                                var r = v({
                                    target: n
                                });
                                r.v = n.value, d.get(g).p.push(r.e), d.set(g)
                            }
                        }
                        c.register(u, "keyup", b, !1), c.register(u, "compositionupdate", x, !0), c.register(s, "paste", y, !0), c.register(u, "change", _, !1)
                    }

                    function v(t) {
                        var e = l.map(t);
                        return f.add(e, t), e in p || (p[e] = {
                            e: e,
                            v: null,
                            k: !1,
                            p: !1
                        }), p[e]
                    }

                    function b(t) {
                        if (h(t) && null !== function(t) {
                                if ("key" in t || "keyIdentifier" in t) {
                                    var e = t.key || t.keyIdentifier || null;
                                    if (e && "Unidentified" !== e && "Dead" !== e) return e
                                }
                                return null
                            }(t)) {
                            var e = v(t);
                            e.v = t.target.value, e.k = !0
                        }
                    }

                    function y(t) {
                        if (h(t)) {
                            var e = v(t);
                            e.v = t.target.value, e.p = !0
                        }
                    }

                    function x(t) {
                        if (h(t)) {
                            var e = v(t);
                            e.v = t.target.value, e.k = !0
                        }
                    }

                    function _(t) {
                        if (h(t)) {
                            var e = v(t);
                            if (t.target.value !== e.v && (!e.k && !e.p || e.k) && t.target.value) {
                                var n = d.get(g);
                                e.e in n.a || (n.a[e.e] = []), n.a[e.e].push(T() - n.t), n.c = n.c + 1, d.set(g)
                            }
                            e.k = !1, e.p = !1, e.v = t.target.value
                        }
                    }
                    n.register(g, function() {
                        return {
                            t: T(),
                            p: [],
                            a: {},
                            c: 0
                        }
                    }), "loading" !== t.document.readyState ? m() : c.register(t, "load", m)
                }(t, _, Et, Ct, 0, Mt, Dt), y && function(t, e, n, r, i, a, o) {
                    var u = _,
                        s = Mt,
                        c = Dt,
                        l = Ct,
                        f = "mclk";

                    function d(t) {
                        var e = l.get(f);
                        e.c = e.c + 1;
                        var n = s.map(t);
                        c.add(n, t), n in e.m || (e.m[n] = []), e.m[n].push({
                            t: T() - e.t,
                            b: t.button,
                            x: t.clientX || 0,
                            y: t.clientY || 0
                        }), l.set()
                    }
                    Et.register(f, function() {
                        return {
                            t: T(),
                            m: {},
                            c: 0
                        }
                    }), u.register(t, "click", d, !1), u.register(t, "contextmenu", d, !1)
                }(t), y && function(t, e, n, r, i, a) {
                    var o = _,
                        u = Ct,
                        s = "mtrk",
                        c = d.events.mtrk_threshold.time;
                    n.register(s, function() {
                        return {
                            t: T(),
                            fd: 0,
                            sd: 0,
                            bb: null,
                            s: [],
                            c: 0,
                            sc: 0
                        }
                    });
                    var l = null,
                        f = null,
                        g = null,
                        p = 0,
                        h = 0,
                        m = Number.MIN_VALUE,
                        v = Number.MAX_VALUE,
                        b = 0,
                        y = 0,
                        x = !0;

                    function A(t, e) {
                        var n = Math.abs(t.x - e.x),
                            r = Math.abs(t.y - e.y);
                        return Math.sqrt(n * n + r * r)
                    }
                    i.register("postHashChange", s, function() {
                        l = null, f = null, g = null, p = 0, h = 0, m = Number.MIN_VALUE, v = Number.MAX_VALUE, b = 0, y = 0, x = !0
                    }), o.register(t, "mousemove", function(t) {
                        var e = u.get(s);
                        e.c = e.c + 1;
                        var n = T(),
                            r = {
                                t: n - e.t,
                                x: t.clientX || 0,
                                y: t.clientY || 0,
                                fd: 0,
                                sd: 0,
                                c: 0,
                                a: 0,
                                mx: 0,
                                mn: 0
                            };
                        x && (l = r, g = n, f = r), null === e.bb && (e.bb = [r.x, r.y, r.x, r.y]);
                        var i = A(l, r),
                            a = n - g,
                            o = i / (a || 1) * 1e3;
                        if (h += i, p += a, i > 0 && (m = Math.max(m, o), v = Math.min(v, o)), y += o, b += 1, e.fd = parseFloat((e.fd + i).toFixed(2)), e.bb[0] = Math.min(e.bb[0], r.x), e.bb[1] = Math.min(e.bb[1], r.y), e.bb[2] = Math.max(e.bb[2], r.x), e.bb[3] = Math.max(e.bb[3], r.y), x || p >= c) {
                            var d = parseFloat(A(r, f).toFixed(2));
                            r.fd = parseFloat(h.toFixed(2)), r.sd = parseFloat(d.toFixed(2)), r.mx = m === Number.MIN_VALUE ? 0 : parseFloat(m.toFixed(2)), r.mn = v === Number.MAX_VALUE ? 0 : parseFloat(v.toFixed(2)), r.a = parseFloat((y / b).toFixed(2)), r.c = b, e.s.push(r), e.sd = e.sd + d, e.sc = e.sc + 1, p = 0, h = 0, m = Number.MIN_VALUE, v = Number.MAX_VALUE, b = 0, y = 0, f = r
                        }
                        l = r, g = n, x = !1, u.set()
                    }, !1)
                }(t, 0, Et, 0, kt)
            } finally {
                y && (kt.register("unload", "sender", Ot.unloader), kt.register("preHashChange", "sender", Ot.hashChanger), kt.register("submit", "sender", Ot.submitter), Ot.send())
            }
            I.init()
        }(t)
    } catch (t) {}
}(window);
