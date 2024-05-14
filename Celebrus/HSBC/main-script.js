/*Copyright © 2000-2014 Celebrus Technologies www.celebrus.com*/
window.HSBCHKoTP = true;
window.HSBCHKoWA = new Array();
window.HSBCHKwI = 0;
window.HSBCHKsWO = true;
function HSBCHKiBd() {
    if (HSBCHKBd)
        HSBCHKBd('HSBCHK', '/jclasses/', 'https://www.isstprod.hsbc.com.hk:443', 'https://www.isstprod.hsbc.com.hk:443', true);
}
function HSBCHKBd(svn, scbs, stcp, sssl, j2s) {
    function CelebrusCsa(ve) {
        function we() {
            S ? ("_" == S.charAt(0) && (S = S.substring(1)),
            4 == S.length && S.match(og) || (S = "0000")) : S = "0000"
        }
        function F(a, b) {
            return !a && 0 !== a && !1 !== a || b && a == b ? 0 : 1
        }
        function H(a) {
            var b = ""
              , b = window;
            b.encodeURIComponent ? (b = b.encodeURIComponent(a),
            b = b.replace(/!/g, "%21"),
            b = b.replace(/\'/g, "%27"),
            b = b.replace(/~/g, "%7E")) : (b = escape(a),
            b = b.replace(/\//g, "%2F"),
            b = b.replace(/:/g, "%3A"),
            b = b.replace(/#/g, "%23"));
            b = b.replace(/q/g, "%71");
            b = b.replace(/&/g, "%26");
            return b = b.replace(/\+/g, "%2B")
        }
        function R(a) {
            if (!a)
                return "";
            var b, c = window;
            b = a.replace(/\+/g, "%20");
            return b = c.decodeURIComponent ? c.decodeURIComponent(b) : unescape(a)
        }
        function Eb(a) {
            a && (a = a.replace(/\+/g, "%2B"),
            a = a.replace(/q/g, "%71"),
            a = a.replace(/&/g, "%26"));
            return a
        }
        function ib(a) {
            return a.parentElement ? a.parentElement : a.parentNode ? a.parentNode : ""
        }
        function pg(a, b) {
            return a.length - b.length
        }
        function qg(a, b) {
            return b.count - a.count
        }
        function xe(a, b) {
            try {
                if (!b)
                    return !1;
                var c = R("%2f")
                  , f = "http:" + c + c
                  , l = "https:" + c + c;
                if (0 === b.indexOf(c) || 0 === b.indexOf("javascript:"))
                    return !1;
                var h;
                var d = b.indexOf("?");
                h = -1 != d ? b.substring(0, d) : b;
                return 0 === h.indexOf(f + a) || 0 === h.indexOf(l + a) ? !1 : !0
            } catch (k) {
                return !1
            }
        }
        function e(a, b, c, f) {
            if (!F(c))
                return a;
            f && (c = H(c));
            return a + "&" + b + "=" + c
        }
        function ye(a, b) {
            var c = a.join("&")
              , f = c.toLowerCase().lastIndexOf(";&", b)
              , c = "lookup;" + c.substring(0, f);
            return Fb(c)
        }
        function ze(a, b, c) {
            var f = a.indexOf("&uf=");
            if (-1 == f)
                return ja = [],
                a;
            var l = a.indexOf("&", f + 1);
            -1 == l && (l = a.length);
            a = a.substring(f, l);
            b = ye(ja, Math.floor(.8 * Math.min(a.length / 2, ma - b - c)));
            ja = [];
            return b
        }
        function mc(a, b) {
            if (a.length > b) {
                b = Math.floor(b);
                var c = a.toLowerCase().lastIndexOf("%3b%26", b);
                a = -1 < c ? a.substring(0, c) : ""
            }
            return a
        }
        function od(a) {
            var b = 0
              , c = 1
              , f = !1
              , l = !1
              , h = !1
              , d = !1
              , k = (B + ":" + da + "!" + aa + "!" + oa).length
              , e = ("&tz=" + Gb).length;
            if (a.length + k + e > ma) {
                var q = a.indexOf("&aD=")
                  , m = a.indexOf("&", q + 4)
                  , q = a.substring(0, m)
                  , m = a.substring(m);
                var p = m.indexOf("&wk=");
                if (-1 != p) {
                    var g = m.indexOf("&", p + 1);
                    -1 == g && (g = m.length);
                    p = m.substring(p, g);
                    m = m.replace(p, "")
                }
                for (m = m.split("&"); c && a.length + k + e > ma; ) {
                    m = m.sort(pg);
                    a: {
                        c = m;
                        for (p = c.length - 1; 0 <= p; p--) {
                            for (var g = c[p], r = !1, w = 0; w < Ae.length && !r; w++)
                                0 === g.indexOf(Ae[w]) && (r = !0);
                            if (!r) {
                                p = g;
                                break a
                            }
                        }
                        p = ""
                    }
                    if (10 >= p.length)
                        break;
                    c = p.substring(0, 3);
                    g = p = p.substring(3, p.length);
                    "cs=" == c ? jb ? Be && 0 < ja.length ? (g = ze(a, k, e),
                    l = !0) : f ? g = "" : (a = Math.floor(.8 * Math.min(g.length / 2, ma - k - e)),
                    g = ye(nc, a),
                    f = !0) : (a = Math.min(g.length / 2, ma - k - e),
                    g = mc(g, a)) : "uf=" == c ? l ? g = "" : (g = ze(a, k, e),
                    l = !0) : "uh=" == c ? h ? g = "" : (a = Math.floor(.8 * Math.min(g.length / 2, ma - k - e)),
                    g = mc(g, a),
                    h = !0) : "un=" == c ? d ? g = "" : (a = Math.floor(.8 * Math.min(g.length / 2, ma - k - e)),
                    g = mc(g, a),
                    d = !0) : "tx=" == c ? (a = Math.min(g.length / 2, ma - k - e),
                    g = mc(g, a)) : (g = R(g),
                    a = Math.min(g.length / 2, ma - k - e),
                    g = g.substring(0, a),
                    g = H(g));
                    m[m.length - 1] = c + g;
                    a = q + m.join("&");
                    (c = p.length > g.length) && (b = 1)
                }
            }
            b && (a += "&ic=true");
            return a
        }
        function pd(a) {
            for (var b = 0, c = a.length - 1, f = 0, l = a.length; f < l; f++)
                if (" " == a.charAt(f))
                    b = f + 1;
                else
                    break;
            for (f = a.length - 1; f >= b; f--)
                if (" " != a.charAt(f)) {
                    c = f + 1;
                    break
                }
            return a.substring(b, c)
        }
        function Ce(a) {
            a = a.toLowerCase();
            return -1 < a.indexOf("ipad") || -1 < a.indexOf("iphone") ? !0 : !1
        }
        function W(a, b) {
            a || (a = "");
            b || (b = "");
            if ("*" == b)
                return !0;
            if (-1 < b.indexOf("*"))
                if (a) {
                    var c = "*" == b.charAt(0)
                      , f = "*" == b.charAt(b.length - 1);
                    if (c && f)
                        return -1 < a.indexOf(b.substring(1, b.length - 1));
                    if (c)
                        return c = b.substring(1),
                        -1 < a.lastIndexOf(c) ? a.lastIndexOf(c) == a.length - c.length : !1;
                    if (f)
                        return 0 === a.indexOf(b.substring(0, b.length - 1))
                } else if ("*" == b)
                    return !0;
            return a == b
        }
        function Na(a) {
            try {
                if (!F(a))
                    return !1;
                for (var b in qd) {
                    var c = qd[b];
                    if (c.isWildcard) {
                        if (0 === a.indexOf(c.searchVal))
                            return !0
                    } else if (a == c.searchVal)
                        return !0
                }
            } catch (f) {}
            return !1
        }
        function Hb(a) {
            var b = a.offsetLeft;
            for (a = a.offsetParent; a != y.body && null != a; a = a.offsetParent)
                b += a.offsetLeft;
            return b
        }
        function Ib(a) {
            var b = a.offsetTop;
            for (a = a.offsetParent; a != y.body && null != a; a = a.offsetParent)
                b += a.offsetTop;
            return b
        }
        function C(a, b) {
            return b ? 4294967296 * (Ba / 4294967296 & a / 4294967296) + (Ba % 4294967296 & a % 4294967296) : 0 !== (Ba & a)
        }
        function De() {
            g[d + "useCors"] && ("function" == typeof XMLHttpRequest || "object" == typeof XMLHttpRequest ? (g[d + "useCors"] = "withCredentials"in new XMLHttpRequest,
            g[d + "useCors"] && (Ca = 51200,
            ma = Ca - 10,
            Ee = Da *= 10)) : g[d + "useCors"] = !1);
            Oa = C(1);
            oc = C(2);
            ea = C(8);
            kb = C(16);
            Jb = C(256);
            pc = C(512);
            rd = C(1024);
            lb = C(2048);
            ua = C(4096);
            sd = C(8192);
            qc = C(32768);
            fa = C(65536);
            Kb = C(524288);
            Lb = C(2097152);
            Fe = C(16777216);
            Pa = C(33554432);
            mb = C(67108864);
            rc = C(134217728);
            sc = C(268435456);
            jb = mb && g[d + "lookups"] && !g[d + "useCors"];
            td = C(8388608);
            nb = C(-2147483648);
            t = C(1 * Math.pow(2, 32), !0) && rg();
            Mb = C(1 * Math.pow(2, 34), !0);
            Ge = C(1 * Math.pow(2, 35), !0)
        }
        function sg(a) {
            var b = a.accessMethod
              , c = R("%29");
            if (0 == b) {
                if (a = a.identifierString,
                !(-1 < a.indexOf(c) || -1 < a.indexOf(";") || -1 < a.indexOf("=")))
                    return !0
            } else if (1 == b || 2 == b) {
                a = a.watchPropertyArray;
                for (var b = 0, f = a.length; b < f; b++) {
                    var l = a[b];
                    if (-1 < l.indexOf(c) || -1 < l.indexOf("=") || -1 < l.indexOf(";"))
                        return !1
                }
                return !0
            }
            return !1
        }
        function ud(a, b, c) {
            if (!a || !b)
                return null;
            var f = a;
            a = 0;
            for (var l = b.length; a < l; a++) {
                var h = b[a]
                  , f = f ? F(h) ? f[h] : null : null;
                if (!F(f))
                    return null
            }
            if (c) {
                var d;
                b = f;
                if ("undefined" === typeof JSON)
                    window.CelebrusLoggingUtils && window.CelebrusLoggingUtils.error("Cannot convert JavaScript object to JSON; no data will be sent"),
                    d = "";
                else
                    try {
                        d = JSON.stringify(b)
                    } catch (k) {
                        d = ""
                    }
                return d
            }
            return "" + f
        }
        function He(a, b, c) {
            a = a + "." + b;
            if (c && 0 < c.length) {
                b = 0;
                for (var f = c.length; b < f; b++)
                    a = a + "." + c[b]
            }
            return a
        }
        function vd() {
            if (tc || Qa) {
                for (var a, b, c, f, l, h, J, k, e, q = 0, m = tc.length; q < m; q++)
                    try {
                        var p = tc[q];
                        e = p.accessMethod;
                        var v = p.isJsonStringify;
                        if (!(0 > e || 2 < e)) {
                            var r = a = b = c = f = h = l = J = k = null;
                            if (0 == e)
                                a = e + "." + p.identifierString,
                                l = p.identifierString,
                                b = ud(window, l.split("."), v),
                                c = "SCRIPT";
                            else if (1 == e)
                                try {
                                    h = p.identifierString;
                                    if (Na(h))
                                        continue;
                                    var w = wd("", h, "", "", "", "", "", "");
                                    if (1 != w.length)
                                        continue;
                                    if (r = w[0])
                                        J = p.watchPropertyArray,
                                        k = p.watchProperty,
                                        a = He(e, h, J),
                                        b = ud(r, J, v),
                                        c = r.tagName,
                                        f = r.type;
                                    else
                                        continue
                                } catch (A) {}
                            else if (2 == e)
                                try {
                                    l = p.identifierString;
                                    J = p.watchPropertyArray;
                                    k = p.watchProperty;
                                    w = wd(l, "", "", "", "", "", "", "");
                                    if (1 != w.length)
                                        continue;
                                    r = w[0];
                                    if (Na(r.id))
                                        continue;
                                    if (r)
                                        a = He(e, l, J),
                                        b = ud(r, J, v),
                                        c = r.tagName,
                                        f = r.type;
                                    else
                                        continue
                                } catch (A) {}
                            if ("password" != f) {
                                var E = xd[a];
                                if (!F(E) || E != b)
                                    if (xd[a] = b,
                                    F(b) && ("string" == (typeof b).toLowerCase() || "number" == (typeof b).toLowerCase() || "boolean" == (typeof b).toLowerCase()))
                                        g[d + "variableStateChange"](l, h, b, c, k, f)
                            }
                        }
                    } catch (A) {}
                if (0 != Qa.length && !(-1 < document.cookie.indexOf("MagiqProfileCaptureBlocked=true")))
                    for (a = 0; a < Qa.length; a++)
                        b = Qa[a],
                        l = b.elIsWindowVariable ? b.elName ? [window[b.elName]] : [] : wd(b.elName, b.elId, b.elClass, b.elTagName, b.elHref, b.elSrc, b.elFormName, b.elFormID),
                        1 == l.length && (c = "" + b.elName + b.elId + b.elClass + b.elTagName + b.elHref + b.elSrc + b.elFormName + b.elFormID + b.elIsWindowVariable,
                        h = Ie[c],
                        f = b.elIsWindowVariable ? l[0] : l[0].innerHTML,
                        h && h == f || (h = b.elTagName,
                        b.elIsWindowVariable ? (h = "SCRIPT",
                        J = k = l = "") : (J = "innerHTML",
                        k = l[0].type,
                        l = va(l[0])),
                        !F(f) || "string" != (typeof f).toLowerCase() && "number" != (typeof f).toLowerCase() && "boolean" != (typeof f).toLowerCase() || (g[d + "variableStateChange"](b.elName, b.elId, f, h, J, k, l, "", "", "", "", ""),
                        Ie[c] = f)));
                V || g.setTimeout(vd, 1E3)
            }
        }
        function Je() {
            if (0 != uc.length)
                for (var a = 0, b = uc.length; a < b; a++)
                    if ("" != uc[a]) {
                        var c;
                        c = {};
                        for (var f = uc[a].split("?"), l = 0, h = f.length; l < h; l++) {
                            var d = f[l].indexOf(":");
                            if (-1 != d) {
                                var k = f[l].substring(0, d)
                                  , d = f[l].substring(d + 1);
                                c[k] = d
                            }
                        }
                        c = "" == c.idVal && "" == c.nameVal && "" == c.classVal && "" == c.hrefVal ? null : c;
                        null != c && (Ke[c.ruleName] = c,
                        T.push(c.ruleName))
                    }
        }
        function tg(a) {
            try {
                var b = a.style.visibility;
                if ("hidden" == b || "collapse" == b)
                    return !1
            } catch (f) {}
            try {
                if ("none" == a.style.display)
                    return !1
            } catch (f) {}
            try {
                var c = a.width;
                if (1 >= a.height && 1 >= c)
                    return !1
            } catch (f) {}
            try {
                if (1 == a.hidden)
                    return !1
            } catch (f) {}
            return !0
        }
        function Le(a) {
            (a = a.innerHTML) && 300 < a.length && (a = a.substring(0, 300) + "...");
            return a
        }
        function yd() {
            if (null != T && 0 != T.length) {
                for (var a = [], b = 0, c = T.length; b < c; b++)
                    try {
                        for (var f = T[b], l = Ke[f], h = l.tagVal, d = l.nameVal, k = l.idVal, n = l.classVal, q = l.hrefVal, m = document.getElementsByTagName(h), p = 0, v = m.length; p < v; p++) {
                            var r = "", w, E = !0, A = m[p].getAttribute("name"), t = m[p].getAttribute("id");
                            if (!Na(t)) {
                                try {
                                    r = m[p].getAttribute("class")
                                } catch (D) {}
                                if (!r)
                                    try {
                                        r = m[p].getAttribute("className")
                                    } catch (D) {}
                                null == A && (A = "");
                                null == t && (t = "");
                                null == r && (r = "");
                                if (E = (E = (E = E && W(A, d)) && W(t, k)) && W(r, n)) {
                                    var z;
                                    a: {
                                        var F = m[p];
                                        try {
                                            for (; F; ) {
                                                if (!tg(F)) {
                                                    z = !1;
                                                    break a
                                                }
                                                if (F === ib(F))
                                                    break;
                                                F = ib(F)
                                            }
                                        } catch (D) {}
                                        z = !0
                                    }
                                    if (z) {
                                        a.push(f);
                                        var G = ""
                                          , G = e(G, "at", h, 1)
                                          , G = e(G, "an", A, 1)
                                          , G = e(G, "ai", t, 1);
                                        if ("IMG" == h) {
                                            if (w = m[p].getAttribute("src"),
                                            E = E && W(w, q)) {
                                                var u = m[p]
                                                  , H = G;
                                                if (u.title || u.alt) {
                                                    var x = "";
                                                    (x = u.title ? u.title : u.alt) && 80 < x.length && (x = x.substring(0, 80) + "...");
                                                    H = e(H, "ie", x, 1)
                                                }
                                                var y = Hb(u)
                                                  , B = Ib(u)
                                                  , H = H + "&bk=" + u.height + "&b%71=" + u.width + "&br=" + y + "&bs=" + B
                                                  , C = u.src
                                                  , L = C.length;
                                                200 < L && (C = C.substring(L - 200));
                                                G = H = e(H, "bo", C, 1)
                                            }
                                        } else if ("FORM" == h) {
                                            if (w = m[p].getAttribute("action"),
                                            w || (w = m[p].action),
                                            E = E && W(w, q)) {
                                                var H = G
                                                  , R = m[p].action;
                                                R && (H = e(H, "tv", R, 1));
                                                G = H
                                            }
                                        } else if ("A" == h) {
                                            if (w = m[p].getAttribute("href"),
                                            E = E && W(w, q))
                                                var G = e(G, "ah", w, 1)
                                                  , N = Le(m[p])
                                                  , G = e(G, "ie", N, 1)
                                        } else if ("DIV" == h || "SPAN" == h)
                                            N = Le(m[p]),
                                            G = e(G, "hx", N, 1);
                                        G = e(G, "hv", r, 1);
                                        E && K("Q", G)
                                    }
                                }
                            }
                        }
                    } catch (D) {}
                p = 0;
                for (v = a.length; p < v; p++)
                    try {
                        for (var b = -1, c = 0, Q = T.length; c < Q && -1 == b; c++)
                            T[c] == a[p] && (b = c);
                        -1 < b && T.splice(b, 1)
                    } catch (D) {}
                V || g.setTimeout(yd, 2E3)
            }
        }
        function vc(a, b) {
            if (!a && !b)
                return !0;
            var c = "" + b;
            return ("" + a).toUpperCase() == c.toUpperCase()
        }
        function va(a) {
            var b = null;
            try {
                b = a.getAttribute("class")
            } catch (c) {}
            if (!b)
                try {
                    b = a.getAttribute("className")
                } catch (c) {}
            return b
        }
        function wd(a, b, c, f, l, h, d, k) {
            d = null;
            if (b)
                if (d) {
                    k = [];
                    for (var e = 0, g = d.length; e < g; e++)
                        null != d[e] && b == d[e].id && (k[k.length] = d[e]);
                    d = k
                } else
                    d = [document.getElementById(b)];
            if (a)
                if (b = d)
                    for (d = [],
                    k = 0,
                    e = b.length; k < e; k++)
                        try {
                            null != b[k] && vc(a, b[k].name) && (d[d.length] = b[k])
                        } catch (m) {}
                else
                    d = document.getElementsByName(a);
            if (c)
                if (a = d) {
                    b = [];
                    for (d = 0; d < a.length; d++)
                        null != a[d] && c == va(a[d]) && (b[b.length] = a[d]);
                    d = b
                } else if (document.getElementsByClassName)
                    d = document.getElementsByClassName(c);
                else {
                    a = document.getElementsByTagName("*");
                    b = [];
                    d = 0;
                    for (k = a.length; d < k; d++)
                        (e = a[d]) && (g = va(e)) && g == c && (b[b.length] = e);
                    d = b
                }
            if (f) {
                c = d;
                f = f.toUpperCase();
                c || (c = document.getElementsByTagName("*"));
                a = [];
                b = 0;
                for (d = c.length; b < d; b++)
                    null != c[b] && vc(f, c[b].tagName) && (a[a.length] = c[b]);
                d = a
            }
            if (l) {
                (f = d) || (f = document.getElementsByTagName("A"));
                c = [];
                a = 0;
                for (b = f.length; a < b; a++)
                    null != f[a] && vc(l, f[a].href) && (c[c.length] = f[a]);
                d = c
            }
            if (h) {
                (l = d) || (l = document.getElementsByTagName("IMG"));
                f = [];
                c = 0;
                for (a = l.length; c < a; c++)
                    null != l[c] && vc(h, l[c].src) && (f[f.length] = l[c]);
                d = f
            }
            for (h = 0; h < d.length; h++)
                ;
            return d
        }
        function zd() {
            try {
                var a = [];
                g[d + "multiAttribJsRules"] && (a = g[d + "multiAttribJsRules"].split(";"));
                if (a && 0 != a.length)
                    for (var b = 0; b < a.length; b++) {
                        a[b] = R(a[b]);
                        var c = a[b].split("&");
                        9 == c.length && (Qa[b] = {
                            elName: c[0],
                            elId: c[1],
                            elClass: c[2],
                            elTagName: c[3],
                            elHref: c[4],
                            elSrc: c[5],
                            elFormName: c[6],
                            elFormID: c[7],
                            elIsWindowVariable: "true" == c[8]
                        })
                    }
                else
                    Qa = [];
                if (g[d + "getInputs"]) {
                    for (var f = "" + g[d + "getInputs"], f = R(f), l = f.split(";"), a = [], b = [], f = c = 0; f < l.length; f++) {
                        var h = l[f].split("?");
                        if (2 == h.length) {
                            var J = 0;
                            try {
                                J = parseInt(h[0])
                            } catch (t) {}
                            for (var k = R(h[1]).split(":"), n = 0; n < k.length; n++) {
                                var q = c + n;
                                a[q] = k[n];
                                b[q] = J;
                                c++
                            }
                        }
                    }
                    var m = a.length;
                    if (0 < m) {
                        var l = document
                          , p = l.getElementsByTagName("*");
                        if (!p || 0 >= p.length)
                            p = l.all;
                        if (p)
                            for (var l = 0, v = p.length; l < v; l++) {
                                var r = p[l]
                                  , w = r.getAttribute("id");
                                if (!Na(w)) {
                                    var E = r.getAttribute("name")
                                      , h = "";
                                    try {
                                        h = r.getAttribute("class")
                                    } catch (t) {}
                                    if (!h)
                                        try {
                                            h = r.getAttribute("className")
                                        } catch (t) {}
                                    if (w || E || h) {
                                        k = 0;
                                        c = "";
                                        for (f = 0; f < m && !k; f++)
                                            c = a[f],
                                            "*" != c && c && !c.match(ug) && ((k = W(w, c)) || (k = W(E, c)),
                                            !k && b[f] && (k = W(h, c)));
                                        if (k) {
                                            var D = "&cr=" + H(c) + "&ap=elementhtml"
                                              , h = r
                                              , c = k = void 0
                                              , F = h.tagName
                                              , c = e("", "at", F, 1);
                                            F && -1 != ("" + F).toLowerCase().indexOf("select") && h.selectedIndex && (c = e(c, "as", h.selectedIndex, 1));
                                            c = e(c, "aT", h.getAttribute("type"), 1);
                                            c = e(c, "ai", h.getAttribute("id"), 1);
                                            c = e(c, "an", h.getAttribute("name"), 1);
                                            c = e(c, "hx", h.innerHTML, 1);
                                            c = e(c, "ah", h.getAttribute("href"), 1);
                                            c = e(c, "hm", h.getAttribute("src"), 1);
                                            c = e(c, "av", h.getAttribute("value"), 1);
                                            c = e(c, "hn", h.getAttribute("size"));
                                            c = e(c, "ho", h.getAttribute("rows"));
                                            c = e(c, "hp", h.getAttribute("cols"));
                                            c = e(c, "hy", h.getAttribute("width"));
                                            c = e(c, "hr", h.getAttribute("height"));
                                            c = e(c, "hs", h.getAttribute("action"), 1);
                                            c = e(c, "ht", h.getAttribute("method"), 1);
                                            c = e(c, "hu", h.getAttribute("content"), 1);
                                            (k = h.getAttribute("class")) || (k = h.getAttribute("className"));
                                            c = e(c, "hv", k, 1);
                                            c = e(c, "hw", h.getAttribute("target"), 1);
                                            c = e(c, "ac", h.checked);
                                            h = D + c;
                                            h = Ad(r, h, !1).updatedProperties;
                                            K("H", h)
                                        }
                                    }
                                }
                            }
                    }
                }
                if (g[d + "metaTagRules"])
                    for (var z = document.getElementsByTagName("META"), x = "" + g[d + "metaTagRules"], x = R(x), G = x.split(";"), u = G.length, m = 0; m < u; m++) {
                        var C = G[m];
                        if (C) {
                            var y = C.split("?");
                            if (3 == y.length) {
                                var B = z.length
                                  , N = y[0]
                                  , p = "name"
                                  , Q = y[1]
                                  , O = y[2];
                                "1" == N ? p = "http-equiv" : "2" == N ? p = "property" : "3" == N && (p = O);
                                "3" != N && (O = "content");
                                for (v = 0; v < B; v++) {
                                    var M = z[v]
                                      , r = "";
                                    if ("3" != y[0]) {
                                        var ca = M.getAttribute(p);
                                        W(ca, Q) && (r = M.getAttribute(O))
                                    } else
                                        M.getAttribute(p) && (r = M.getAttribute(O));
                                    if (r) {
                                        var V = "&wh=" + H(p) + "&wi=" + H(Q) + "&wj=" + H(r)
                                          , V = Ad(M, V, !1).updatedProperties;
                                        K("w", V)
                                    }
                                }
                            }
                        }
                    }
                z = "";
                try {
                    z = document.documentElement.innerHTML
                } catch (t) {}
                if (z)
                    for (var G = 0, X = Bd.length; G < X; G++) {
                        var P = Bd[G]
                          , Z = new RegExp(P.expressionString,P.attributeString)
                          , I = Z.exec(z);
                        if (null != I)
                            for (; null != I; ) {
                                for (var u = "", C = [], y = 0, S = P.returnIndicesArray, fa = P.returnNamesArray, B = 0, ba = S.length; B < ba; B++) {
                                    var ga = S[B], Y;
                                    I[ga] && (Y = H(fa[B]) + ";" + H(I[ga]) + ";",
                                    C[y] = Y,
                                    y++)
                                }
                                if (0 < C.length) {
                                    var aa = H(C.join("&"))
                                      , u = e(u, "ai", P.idString, 1)
                                      , u = e(u, "tx", aa, 0);
                                    L("W", u)
                                }
                                I = Z.global ? Z.exec(z) : null
                            }
                    }
            } catch (t) {
                A(t, "startIdentifiedElementChecks")
            }
            Cd && K("u", "&ap=contenteventscomplete")
        }
        function rg() {
            var a = !1;
            try {
                a = "sessionStorage"in window && null !== window.sessionStorage
            } catch (c) {
                return !1
            }
            try {
                z(d + "test", d);
                var b = "" + x(d + "test")
                  , a = d == b;
                wc(d + "test")
            } catch (c) {
                return !1
            }
            return a
        }
        function Me(a) {
            this.value = 0;
            this.pointerIdentifier = a;
            this.getValueFromStorage = function() {
                try {
                    var a = x(this.pointerIdentifier)
                      , b = parseInt(a);
                    return isNaN(b) ? 0 : b
                } catch (l) {
                    return M(),
                    0
                }
            }
            ;
            if (t) {
                var b = this.getValueFromStorage();
                if (!b || isNaN(b))
                    b = 0,
                    z(a, "" + b);
                this.value = b
            }
            this.getNextValue = function(a) {
                if (49 <= a)
                    return 0;
                a++;
                return a
            }
            ;
            this.incrementPointer = function() {
                if (t)
                    try {
                        var b = this.getValueFromStorage();
                        isNaN(b) && (b = 0);
                        this.value = this.getNextValue(b);
                        z(a, "" + this.value)
                    } catch (f) {
                        M()
                    }
                else
                    this.value = this.getNextValue(this.value);
                return this.value
            }
            ;
            this.getPointer = function() {
                return t ? this.getValueFromStorage() : this.value
            }
        }
        function Ra() {
            return "https:" == location.protocol.toLowerCase() || g[Ne] || Sa ? "https:" : "http:"
        }
        function Oe(a) {
            if ("https:" != Ra())
                try {
                    var b = ""
                      , c = "init";
                    try {
                        b = a.attributes.action
                    } catch (e) {}
                    b ? c = b.value ? "" + b.value : "" + b : a.getAttributeNode && (b = a.getAttributeNode("action")) && (c = "" + b.value);
                    if (null != c && -1 != c.toLowerCase().indexOf("https:")) {
                        Sa = 1;
                        xc = "https";
                        var f = na.getPointer()
                          , l = ha.getPointer();
                        do {
                            var h = Dd(f);
                            h && !Pe(h, ":https") && (h = Pe(h, ":http") ? h + "s" : h + ":https",
                            t ? z(f, h) : ob[d + ka + f] = h);
                            f++
                        } while (f <= l)
                    }
                } catch (e) {
                    A(e, "Error checking form for mixed-mode")
                }
        }
        function Ed(a) {
            a = a.replace(/&/g, "+");
            a = a.replace(/%/g, "q");
            a = a.replace(/(..)(..)/g, "$2$1");
            a = a.replace(/(........)(.....)/g, "$2$1");
            var b = Qe;
            Gb && (b += "_" + Gb);
            return a = "z=" + H(b) + "&y=" + a
        }
        function Re() {
            if (X)
                try {
                    var a, b = {};
                    a = b = t ? {
                        totalBytesSent: Ta("totalSent", 0),
                        totalBytesReceived: Ta("totalReceived", 0),
                        totalNetworkTime: Ta("totalTime", 0),
                        currentBytesSent: Ta("currentSent", 0),
                        eventCount: Ta("eventsSentCount", 0),
                        currentStartTimestamp: Ta("currentStartTime", 0)
                    } : {
                        totalBytesSent: Fd,
                        totalBytesReceived: Gd,
                        totalNetworkTime: Hd,
                        currentBytesSent: Ua,
                        eventCount: pb,
                        currentStartTimestamp: Va
                    };
                    var c = a.totalBytesSent
                      , f = a.totalBytesReceived
                      , l = a.eventCount
                      , h = a.totalNetworkTime;
                    if (c && f && 1 < l) {
                        var d = (new Date).valueOf()
                          , k = (new Date).valueOf();
                        yc(0, 0, 0, 0, 0, k, k);
                        var e = Math.ceil(d - h / 2);
                        ia("aE=K&ap=network&bv=" + c + "&bw=" + f + "&bx=" + d + "&by=" + (d - h) + "&bz=" + e + "&ca=" + e + "&aD=" + d, !1)
                    }
                } catch (g) {
                    A(g, "queueNWEvent")
                }
        }
        function vg() {
            if (t)
                try {
                    var a = x("eventsInPacketCounter")
                      , b = parseInt(a);
                    return isNaN(b) ? 0 : b
                } catch (c) {
                    return M(),
                    0
                }
            else
                zc || (zc = 0);
            return zc
        }
        function Se() {
            if (t && X)
                try {
                    z("eventsInPacketCounter", "0")
                } catch (a) {
                    M()
                }
            else
                zc = 0
        }
        function Te() {
            t && Nb && (z("eventQueueOwnerID", "" + B),
            z("eventQueueOwnerLastActivityTimestampMillis", "" + (new Date).valueOf()))
        }
        function Pe(a, b) {
            return a ? -1 !== a.indexOf(b, a.length - b.length) : !1
        }
        function Id() {
            try {
                var a = ""
                  , b = ""
                  , c = !1
                  , f = B
                  , l = 0;
                if (Ob && 5 >= Ac)
                    a = Ob,
                    c = !0,
                    Ac++;
                else if (Ac = 0,
                Ob = "",
                0 == vg()) {
                    var b = "" + Bc()
                      , h = b.length;
                    if (b) {
                        var e = b.indexOf(":");
                        -1 < e && (h = b.substring(e).length)
                    }
                    if (b && h > Ca)
                        Jd(),
                        ba("event too large: packet length is " + h, "packageEvents");
                    else {
                        var k = b.indexOf(":");
                        if (-1 < k)
                            try {
                                l = b.substring(0, k),
                                b = b.substring(k + 1)
                            } catch (r) {
                                ba("No CSA Number included with event", "packageEvents"),
                                b = ""
                            }
                        a = b;
                        f = l
                    }
                }
                if ("" != a)
                    if (c && 2 < Pb)
                        g.setTimeout(U, 1E3);
                    else {
                        t && !Nb && (Nb = !0,
                        Te(),
                        Kd = window.setInterval(Te, 300));
                        ha.getPointer() == na.getPointer() && ha.incrementPointer();
                        try {
                            if (g[qb]) {
                                g[wa][0] || (g[wa][0] = new Image,
                                D(g[wa][0], "load", Qb),
                                D(g[wa][0], "error", wg));
                                rb && !sb && (sb = !0);
                                var n;
                                f || (f = B);
                                if (Lb) {
                                    var q;
                                    try {
                                        for (var m = a.split("&a=1"), l = b = 0, p = m.length; l < p; l++)
                                            m[l] && ":http" != m[l] && ":https" != m[l] && -1 == m[l].indexOf("!aE=c&") && b++;
                                        q = b
                                    } catch (r) {
                                        q = 0
                                    }
                                    if (t)
                                        try {
                                            var v = Ta("eventsSentCount", 0);
                                            z("eventsSentCount", "" + (v + q))
                                        } catch (r) {
                                            M()
                                        }
                                    else
                                        pb += q
                                }
                                c || (a = Ed(a));
                                v = tb;
                                "https:" == Ra() && (v = Cc);
                                Ld ? (n = v + "/" + S + "/" + f + "/XBW09WEA78JG/",
                                n = g[d + "useCors"] && g[d + "useJsonFormatRequest"] ? n + "jsEvent.json" : n + "jsEvent.js",
                                Ob = a) : n = v + "/" + S + "/" + f + "/UYT76TBX45GD/uw2jde932.bmp";
                                Ua = n.length + a.length + 1;
                                Va = (new Date).valueOf();
                                window.CelebrusLoggingUtils && window.CelebrusLoggingUtils.isDryRun() ? window.setTimeout(Qb, 50) : (v = Ua,
                                q = Va,
                                t ? (z("currentSent", "" + v),
                                z("currentStartTime", "" + q)) : (Ua = v,
                                Va = q),
                                Ld ? xg(n, a) : (Ea(!0),
                                g[wa][0].src = n + "?" + a))
                            }
                        } catch (r) {
                            A(r, "processEvent")
                        }
                    }
                else
                    Md(),
                    Wa || Rb ? "" != b && (Dc ? Sb() : g.setTimeout(Sb, 50)) : Dc ? U() : (n = 200,
                    Ue > Ca && (n = 50),
                    g.setTimeout(U, n))
            } catch (r) {
                A(r, "packageEvents")
            }
        }
        function Ve() {
            return 153 + ("" + yg + zg + document.referrer + navigator.userAgent + tb + document.cookie).length
        }
        function wc(a) {
            a = d + ka + a;
            try {
                window.sessionStorage && window.sessionStorage.removeItem(a)
            } catch (b) {
                "Security error" == b.message && M()
            }
            return ""
        }
        function x(a) {
            a = d + ka + a;
            try {
                if (window.sessionStorage) {
                    var b = window.sessionStorage.getItem(a);
                    if (b)
                        return "" + b
                }
            } catch (c) {
                "Security error" == c.message && M()
            }
            return ""
        }
        function z(a, b) {
            var c = d + ka + a;
            try {
                window.sessionStorage && window.sessionStorage.setItem(c, "" + b)
            } catch (f) {
                "Security error" == f.message && M()
            }
        }
        function Dd(a) {
            var b = "";
            t && (b = x(a));
            if (!b)
                try {
                    b = ob[d + ka + a]
                } catch (c) {}
            return b
        }
        function ia(a, b, c) {
            try {
                if (g[qb])
                    if (0 >= B)
                        50 > ub.length && (ub[ub.length] = {
                            sendVal: a,
                            isLoadPageEvt: b,
                            evtCode: c
                        });
                    else {
                        var f = e(a, "tz", Gb)
                          , l = na.getPointer()
                          , h = ha.getPointer();
                        Xa() && l == h && ha.incrementPointer();
                        var J = "" + ha.getPointer()
                          , k = Dd(J);
                        a = "";
                        if (k) {
                            a: {
                                var n = k.split(":"), q, m, p;
                                try {
                                    q = parseInt(n[0]),
                                    m = n[1],
                                    3 == n.length && (p = n[2]),
                                    p || (p = xc)
                                } catch (E) {
                                    a = "";
                                    break a
                                }
                                a = {
                                    csaNumber: q,
                                    packetString: m,
                                    csaNumberString: n[0],
                                    protocolToUse: p
                                }
                            }
                            if ((da + "!" + aa + "!" + (oa + 1) + "!" + f).length + 4 + a.packetString.length + a.csaNumberString.length + 1 > Ca || a.csaNumber != B) {
                                var v = ha.getPointer() + 1;
                                if (Dd("" + v))
                                    return;
                                ha.incrementPointer();
                                J = "" + ha.getPointer();
                                a = ""
                            }
                        }
                        window.CelebrusLoggingUtils && window.CelebrusLoggingUtils.logEventQueued(f);
                        k = 2;
                        b || ("b" == c ? k = 0 : (b = oa,
                        oa++,
                        k = b));
                        if (Dc) {
                            var J = "" + da + "!" + aa + "!" + k + "!" + f
                              , J = Ed(J)
                              , r = tb;
                            "https:" == Ra() && (r = Cc);
                            J = r + "/" + S + "/" + B + "/UYT76TBX45GD/uw2jde932.bmp?" + J;
                            null == g[wa][0] && (g[wa][0] = new Image);
                            g[wa][0].src = J
                        } else {
                            try {
                                if (useCelebrusNSCommand) {
                                    SpeedTrapComponent.forwardEvent(da + "!" + aa + "!" + k + "!" + f, "" + B);
                                    U();
                                    return
                                }
                            } catch (E) {}
                            b = a;
                            f = da + "!" + aa + "!" + k + "!" + f + "&a=1";
                            if (b) {
                                var w = b.protocolToUse;
                                "https:" == Ra() && (w = "https");
                                r = b.csaNumber + ":" + b.packetString + f + ":" + w
                            } else
                                r = B + ":" + f + ":" + xc;
                            try {
                                t ? z(J, r) : ob[d + ka + J] = r
                            } catch (E) {
                                M()
                            }
                            We();
                            X && Xe() && U()
                        }
                    }
            } catch (E) {
                A(E, "queueEventVal")
            }
        }
        function Ye() {
            X && Xe() ? U() : X && window.setTimeout(Ye, 250)
        }
        function Jd() {
            var a = na.getPointer()
              , b = ha.getPointer()
              , c = "" + a
              , f = "";
            t && (f = x(c));
            f || (f = ob[d + ka + c]);
            if (f && "" != f) {
                if (t)
                    try {
                        wc(c)
                    } catch (l) {
                        M()
                    }
                else
                    ob[d + ka + c] = "";
                a != b && na.incrementPointer();
                return f
            }
            a != b && na.incrementPointer();
            return ""
        }
        function Ze(a) {
            var b = "";
            if (t)
                try {
                    b = x(a)
                } catch (c) {
                    M()
                }
            b || (b = ob[d + ka + a]);
            return b
        }
        function Bc(a) {
            var b = na.getPointer()
              , c = ha.getPointer();
            a && (b += a);
            a = "";
            if ((a = Ze("" + b)) && "" != a)
                return a;
            if (b != c)
                for (var f = 0; !a && b != c && 50 > f; )
                    b = na.incrementPointer(),
                    a = Ze("" + b),
                    f++;
            return a && "" != a ? a : ""
        }
        function Ea(a) {
            if (t)
                try {
                    1 == a ? z("awaitingResponse", "1") : z("awaitingResponse", "0")
                } catch (b) {
                    M()
                }
            else
                Ec = a
        }
        function Xa() {
            return t ? "1" == x("awaitingResponse") ? !0 : !1 : Ec
        }
        function $e() {
            x("eventQueueOwnerID") == "" + g[d + "wid"] && (wc("eventQueueOwnerID"),
            wc("eventQueueOwnerLastActivityTimestampMillis"))
        }
        function af(a) {
            if (t) {
                var b = x("eventQueueOwnerID");
                if (b) {
                    b == "" + B && (a = !1);
                    var c;
                    if (0 < window.frames.length)
                        c = !1;
                    else
                        try {
                            c = window == window.parent
                        } catch (f) {
                            c = !1
                        }
                    c && (z("eventQueueOwnerID", "" + B),
                    z("eventQueueOwnerLastActivityTimestampMillis", "" + (new Date).valueOf()),
                    a && Ea(!1))
                } else
                    z("eventQueueOwnerID", "" + B),
                    z("eventQueueOwnerLastActivityTimestampMillis", "" + (new Date).valueOf())
            }
        }
        function bf() {
            var a, b, c, f = a = b = c = 0, l = 0, h = 0, d = 0;
            if (t)
                try {
                    if (f = parseInt(x("currentSent")),
                    0 < f) {
                        var k = x("totalSent");
                        a = parseInt(k) + f + Ve();
                        var e = x("totalReceived");
                        b = parseInt(e) + 250;
                        l = parseInt(x("currentStartTime"));
                        c = parseInt(x("totalTime")) + ((new Date).valueOf() - l);
                        l = f = 0;
                        h = parseInt(x("timeLastSent"));
                        d = parseInt(x("eventsSentCount"))
                    }
                } catch (g) {
                    M()
                }
            else
                0 < Ua && (h = Fc,
                d = pb,
                a = Fd + Ua + Ve(),
                b = Gd + 250,
                c = Hd + ((new Date).valueOf() - Va),
                l = f = 0);
            yc(a, b, c, f, d, l, h)
        }
        function yc(a, b, c, f, l, d, e, k) {
            if (Lb || k)
                t ? (z("totalSent", "" + a),
                z("totalReceived", "" + b),
                z("totalTime", "" + c),
                z("currentSent", "" + f),
                z("currentStartTime", "" + d),
                z("timeLastSent", "" + e),
                z("eventsSentCount", "" + l)) : (Fd = a,
                Gd = b,
                Hd = c,
                Ua = f,
                pb = l,
                Va = d,
                Fc = e)
        }
        function Ta(a, b) {
            var c = x(a);
            return c ? parseInt(c) : b
        }
        function Qb() {
            try {
                if (Xa())
                    if (Ea(!1),
                    bf(),
                    X && (Jd(),
                    Se()),
                    Dc)
                        Wa ? Sb() : U();
                    else if (Wa || Rb)
                        g.setTimeout(Sb, 50);
                    else if (rb && !sb)
                        U();
                    else {
                        var a = 200;
                        Ue > Ca && (a = 50);
                        g.setTimeout(U, a)
                    }
            } catch (b) {
                A(b, "updateStatsAndPause")
            }
        }
        function cf(a) {
            try {
                if (Xa()) {
                    t && Nb && (window.clearInterval(Kd),
                    Kd = "",
                    Nb = !1);
                    if (!g[d + "useCors"]) {
                        var b = document.getElementById(d + "ScriptElement");
                        if (!b || !b.responseReceived)
                            return
                    }
                    V = Wa = 0;
                    a || (Ob = "",
                    Ac = 0);
                    a: try {
                        if (Nd && !(df || 1E4 > (new Date).valueOf() - window[d + "lstActv"])) {
                            var c = document.cookie
                              , b = "";
                            if (c) {
                                var f = c.indexOf(Ya);
                                if (-1 == f)
                                    break a;
                                var l = c.indexOf(";", f);
                                -1 == l && (l = c.length);
                                b = c.substring(f + Ya.length + 1, l)
                            } else
                                b = window.sessionStorage.getItem(Ya);
                            if (b) {
                                var h = b.split("::")
                                  , c = b
                                  , f = [];
                                if (l = Ya != d + "session")
                                    for (var b = 0, e = h.length; b < e; b++)
                                        h[b] && "" != h[b] && (0 == h[b].indexOf(d) ? c = h[b] : f[f.length] = h[b]);
                                if (c) {
                                    var k = c.split("_"), n;
                                    n = l ? parseInt(k[3]) : parseInt(k[1]);
                                    var q = (new Date).valueOf()
                                      , m = Math.abs(q - n);
                                    if (!(1E4 > m))
                                        if (m > Nd) {
                                            if (window[d + "doReInit"])
                                                window[d + "doReInit"]()
                                        } else {
                                            window[d + "lstActv"] = q;
                                            l ? k[3] = q : k[1] = q;
                                            var p = k.join("_");
                                            0 < f.length && (p = p + "::" + f.join("::"));
                                            if (window[d + "SC"])
                                                window[d + "SC"](Ya + "=" + p);
                                            Od = window[d + "sST"];
                                            if ((ef = window[d + "mST"]) && Od && Math.abs((new Date).valueOf() - Od) > ef && window[d + "doReInit"])
                                                window[d + "doReInit"]()
                                        }
                                }
                            }
                        }
                    } catch (v) {}
                    if (a)
                        Ea(!1),
                        bf(),
                        Se(),
                        g.setTimeout(U, 1E3);
                    else {
                        rb && sb && (a = vb,
                        Md(),
                        a && a());
                        if (nb && Za && !Pd) {
                            if (window[d + "navSent"]) {
                                window[d + "navSent"] = !1;
                                window[d + "dTO"] && window.clearTimeout(window[d + "dTO"]);
                                Qb();
                                ff();
                                return
                            }
                            if (Rb) {
                                Rb = !1;
                                window[d + "fTO"] && window.clearTimeout(window[d + "fTO"]);
                                Qb();
                                try {
                                    if (window[d + "doSubmitForm"] && window[d + "doSubmitForm"][d + "Submit"])
                                        window[d + "doSubmitForm"][d + "Submit"]()
                                } catch (v) {
                                    A(v, "Error executing delayed form submit")
                                }
                                return
                            }
                        }
                        Qb()
                    }
                }
            } catch (v) {}
        }
        function Ag() {
            if (!V) {
                var a = document.getElementById(d + "ScriptElement");
                if (a) {
                    a.src = "";
                    a.parentNode && a.parentNode.removeChild(a);
                    a.detachEvent ? (a.detachEvent("onload", wb),
                    a.detachEvent("onerror", $a)) : a.removeEventListener && (a.removeEventListener("load", wb, !1),
                    a.removeEventListener("error", $a, !1));
                    a.onreadystatechange && (a.onreadystatechange = null);
                    a.onerror && (a.onerror = null);
                    a.clearAttributes && a.clearAttributes();
                    for (var b in a)
                        try {
                            delete a[b]
                        } catch (c) {}
                }
            }
        }
        function Bg() {
            var a = document.body;
            document.attachEvent && (a = document.getElementsByTagName("HEAD")[0]);
            return a
        }
        function xg(a, b) {
            if (!Xa())
                if (g[d + "useCors"]) {
                    Ec = !1;
                    var c = new XMLHttpRequest;
                    c.open("POST", a, !0);
                    c.withCredentials = !0;
                    c.setRequestHeader("Content-Type", "text/plain;charset=UTF-8");
                    c.onload = function() {
                        if (200 !== c.status)
                            $a();
                        else {
                            var a = c.responseText;
                            if (a)
                                if (g[d + "useCors"] && g[d + "useJsonFormatRequest"]) {
                                    if (a = JSON.parse(a),
                                    a.contentResponse && window.HSBCHKRTEHandler) {
                                        var b = [];
                                        try {
                                            b = JSON.parse(a.contentResponse)
                                        } catch (f) {}
                                        try {
                                            window.HSBCHKRTEHandler.handleResponse(b)
                                        } catch (f) {}
                                    }
                                } else if (y.getElementById && (b = y.getElementsByTagName("head").item(0))) {
                                    var l = d + "corsResponseElement"
                                      , e = y.getElementById(l);
                                    e && e.parentNode.removeChild(e);
                                    e = y.createElement("SCRIPT");
                                    e.type = "text/javascript";
                                    e.id = l;
                                    e.text = a;
                                    b.appendChild(e)
                                }
                            wb()
                        }
                    }
                    ;
                    c.onerror = function() {
                        $a()
                    }
                    ;
                    if (!V) {
                        Ea(!0);
                        try {
                            c.send(b)
                        } catch (h) {}
                    }
                } else {
                    var f = document.getElementById(d + "ScriptElement");
                    Ec = !1;
                    f && Ag();
                    f = document.createElement("SCRIPT");
                    f.setAttribute("type", "text/javascript");
                    f.setAttribute("id", d + "ScriptElement");
                    f.loadedFired = "initial";
                    var l = Bg();
                    if (l) {
                        try {
                            D(f, "load", wb),
                            D(f, "error", $a),
                            l.appendChild(f)
                        } catch (h) {}
                        f.onerror = $a;
                        f.attachEvent && (f.onreadystatechange = Cg);
                        Ea(!0);
                        f.setAttribute("src", a + "?" + b)
                    }
                }
        }
        function Cg() {
            if (!V) {
                var a = document.getElementById(d + "ScriptElement");
                a && ("complete" == a.readyState ? "initial" == a.loadedFired && wb() : "loaded" == a.readyState && (a.loadedFired = "true",
                wb()))
            }
        }
        function Tb() {
            K("b", "")
        }
        function gf(a, b) {
            z("eventQueueOwnerID", a);
            z("eventQueueOwnerLastActivityTimestampMillis", b)
        }
        function Xe() {
            if (!t)
                return !1;
            var a = ""
              , b = 0
              , c = (new Date).valueOf()
              , f = "" + B;
            try {
                a = x("eventQueueOwnerID");
                b = parseInt(x("eventQueueOwnerLastActivityTimestampMillis"));
                if (a == "" + B)
                    return 500 < Math.abs(c - b) ? (gf(f, "" + c),
                    Ea(!1),
                    !0) : !1;
                if (!b || 500 < Math.abs(c - b))
                    return gf(f, "" + c),
                    Ea(!1),
                    !0
            } catch (l) {
                M()
            }
            return !1
        }
        function U(a) {
            if (!V && (!t || X))
                try {
                    var b = (new Date).valueOf();
                    a = b;
                    var c = 0;
                    t ? (a = parseInt(x("timeLastSent")),
                    c = parseInt(x("eventsSentCount"))) : (a = Fc,
                    c = pb);
                    Lb && (50 < c || 15E3 < b - a) && Re();
                    var f = Xa()
                      , b = "" + B;
                    if (t)
                        try {
                            b = x("eventQueueOwnerID")
                        } catch (l) {
                            M()
                        }
                    f || b == "" + B && Id()
                } catch (l) {
                    A(l, "decideNextAction")
                }
        }
        function Sb(a) {
            try {
                Lb && a && Re(),
                Gc()
            } catch (b) {
                A(b, "doUnloadSequence")
            }
        }
        function $a() {
            t && $e();
            if (5 < Pb || !Ld) {
                g[qb] = !1;
                var a = "CSA received comms error response";
                Sa && (a += " - Note: Page is mixed-mode");
                ba(a, "shutdown")
            } else if (Pb++,
            !g[d + "useCors"]) {
                if (a = document.getElementById(d + "ScriptElement"))
                    a.responseReceived = !0;
                cf(!0)
            }
        }
        function wb() {
            Pb = 0;
            cf()
        }
        function wg() {
            $a()
        }
        function L(a, b, c) {
            a = Fa(a, b, c);
            ia(a)
        }
        function Fa(a, b, c) {
            b || (b = "");
            a = "aE=" + a + "&aD=" + (new Date).valueOf() + b;
            a = e(a, "av", c, 1);
            return a = od(a)
        }
        function Gc() {
            Xa() || (t ? x("eventQueueOwnerID") == "" + B && Id() : Id())
        }
        function hf() {
            vb && F(Hc) && rb && -1 != Ub && ((new Date).valueOf() - Ub > Hc ? (vb(),
            Md()) : window.setTimeout(hf, 10))
        }
        function Md() {
            sb = rb = !1;
            vb = "";
            Hc = 0;
            Ub = -1
        }
        function K(a, b, c) {
            b = Fa(a, b, c);
            "Z" == a ? Ic = b : (Ic && (ia(Ic),
            Ic = 0),
            "L" == a ? ia(b, !0) : ia(b, !1, a),
            df = "c" == a ? !0 : !1)
        }
        function M() {
            t = !1;
            na.value = 0;
            ha.value = 0
        }
        function Fb(a, b) {
            if (null == a)
                return "";
            b = {};
            var c = 0
              , f = a.match(Dg)
              , l = []
              , d = 0;
            if (null == f)
                return "";
            for (var e = 0; e < f.length; e++)
                if (F(f[e])) {
                    var k = f[e];
                    F(b[k]) ? b[k].count++ : (b[k] = {
                        idString: k,
                        count: 1,
                        idVal: 0
                    },
                    c++,
                    l[d] = b[k],
                    d++)
                }
            l.sort(qg);
            e = "..";
            for (c = 0; c < l.length; c++)
                l[c].idVal = c,
                e += l[c].idString + ".";
            l = e + ".";
            k = [];
            c = [];
            e = 0;
            for (f = a.length; e < f; e++)
                if (d = a.charAt(e),
                -1 < "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".indexOf(d))
                    k[k.length] = d;
                else {
                    if (0 < k.length) {
                        var k = k.join("")
                          , g = null;
                        try {
                            g = b[k].idVal.toString(16)
                        } catch (A) {}
                        null != g && (c[c.length] = g);
                        k = []
                    }
                    c[c.length] = d
                }
            a = c.join("");
            var q, e = a, c = "";
            try {
                for (var m, p, v, r, w, E, f = 0, d = e, k = "", g = 0; g < d.length; g++) {
                    var t = d.charCodeAt(g);
                    128 > t ? k += String.fromCharCode(t) : (127 < t && 2048 > t ? k += String.fromCharCode(t >> 6 | 192) : (k += String.fromCharCode(t >> 12 | 224),
                    k += String.fromCharCode(t >> 6 & 63 | 128)),
                    k += String.fromCharCode(t & 63 | 128))
                }
                for (e = k; f < e.length; )
                    q = e.charCodeAt(f++),
                    m = e.charCodeAt(f++),
                    p = e.charCodeAt(f++),
                    v = q >> 2,
                    r = (q & 3) << 4 | m >> 4,
                    w = (m & 15) << 2 | p >> 6,
                    E = p & 63,
                    isNaN(m) ? w = E = 64 : isNaN(p) && (E = 64),
                    c = c + "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(v) + "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(r) + "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(w) + "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(E)
            } catch (A) {}
            q = c.replace(/\+/g, "_");
            return l + q
        }
        function ca(a) {
            if (null == a)
                return "";
            a = H(a);
            return F(a) ? a : ""
        }
        function Jc(a) {
            if (!a)
                return "";
            var b = "";
            try {
                b = a.getAttribute("name")
            } catch (c) {}
            return b ? b : a.name && !a.name.type ? a.name : ""
        }
        function Kc(a) {
            if (!a)
                return "";
            var b = "";
            try {
                b = a.getAttribute("id")
            } catch (c) {}
            return b ? b : a.id && !a.id.type ? a.id : ""
        }
        function Vb(a, b) {
            if (a.elements) {
                var c = ""
                  , f = 0;
                nc = [];
                xb = [];
                ja = [];
                ab = [];
                try {
                    for (var l = Math.min(100, a.elements.length), d = 0, g = 0; g < a.elements.length && d < l; g++) {
                        var k = a.elements[g];
                        if (k && (F(k.name) || F(k.id)) && !Na(k.id)) {
                            var n = ""
                              , q = "" + k.type
                              , m = 0;
                            if (k.type) {
                                d++;
                                var p = ca(k.type) + ";" + ca(k.name) + ";" + ca(k.id) + ";"
                                  , v = Wb[p]
                                  , r = ""
                                  , w = "";
                                if ("hidden" == q.toLowerCase()) {
                                    var w = "" + k.value
                                      , r = "hidden"
                                      , E = va(k);
                                    if (!(w.length >= Da)) {
                                        var t = Xb(r, k.name, k.id, E, "", w);
                                        "block" != t && ("0" == t ? kb ? n = w : "" != w && (n = "***") : n = t.filteredValueString,
                                        F(v) ? ja[ja.length] = v + ";" + H(n) + ";" : ab[ab.length] = ca(k.type) + ";" + ca(k.name) + ";" + ca(k.id) + ";" + H(n) + ";")
                                    }
                                } else {
                                    switch (q.toLowerCase()) {
                                    case "submit":
                                    case "reset":
                                    case "button":
                                        continue;
                                    case "select-one":
                                        -1 < k.selectedIndex ? n = k.options[k.selectedIndex].text : m = 1;
                                        r = "select";
                                        w = n;
                                        break;
                                    case "select-multiple":
                                        if (-1 < k.selectedIndex)
                                            for (var z = 0, D = k.options.length; z < D; z++)
                                                k.options[z].selected && (n += k.options[z].text + "<dlm>");
                                        else
                                            m = 1;
                                        r = "select";
                                        w = n;
                                        break;
                                    case "checkbox":
                                        k.checked ? n = k.value : m = 1;
                                        r = "select";
                                        w = n;
                                        break;
                                    case "radio":
                                        k.checked ? n = k.value : m = 1;
                                        r = "select";
                                        w = n;
                                        break;
                                    case "password":
                                        "" != k.value && (n = "***");
                                        r = "textchange";
                                        w = n;
                                        break;
                                    case "text":
                                    case "textarea":
                                    case "search":
                                    case "email":
                                    case "url":
                                    case "number":
                                    case "range":
                                    case "date":
                                    case "month":
                                    case "week":
                                    case "time":
                                    case "datetime":
                                    case "datetime-local":
                                    case "color":
                                        w = "" + k.value;
                                        kb ? n = "" + k.value : (n = "",
                                        "" + k.value != n && (n = "***"));
                                        r = "textchange";
                                        break;
                                    default:
                                        continue
                                    }
                                    1450 <= n.length || 0 == n.length || (E = va(k),
                                    t = Xb(r, k.name, k.id, E, "", w),
                                    "block" == t ? m = !0 : "0" == t ? "select" == r ? ua ? n = w : m = !0 : "textchange" == r && (fa ? kb ? n = w : "" != w && (n = "***") : m = !0) : n = t.filteredValueString,
                                    m || (F(v) ? (nc[f] = v + ";" + H(n) + ";",
                                    f++) : xb[xb.length] = ca(k.type) + ";" + ca(k.name) + ";" + ca(k.id) + ";" + H(n) + ";"))
                                }
                            }
                        }
                    }
                    var x = Jc(a)
                      , G = Kc(a)
                      , f = "";
                    b && (f = "&up=true");
                    var f = f + "&ap=formvalues&at=FORM", f = e(f, "an", x, 1), f = e(f, "ai", G, 1), x = "", u, y, G = "";
                    jb ? (u = "lookup;" + nc.join("&"),
                    c = Fb(u),
                    0 < xb.length && (x = H(xb.join("&"))),
                    f = e(f, "cs", c, 0),
                    x && (f = e(f, "uh", x, 0)),
                    f.length < Da && 0 < ja.length && (y = ja.join("&"),
                    y = Fb("lookup;" + y),
                    f = e(f, "uf", y, 0),
                    Be = !0,
                    f.length < Da && 0 < ab.length && (0 < ab.length && (G = H(ab.join("&"))),
                    G && (f = e(f, "un", G, 0))))) : (u = xb.join("&"),
                    c = H(u),
                    c.length < Da && (c += H("&" + ja.join("&"))),
                    c.length < Da && (c += H("&" + ab.join("&"))),
                    f = e(f, "cs", c, 0));
                    nb && Za && (Rb = !0);
                    L("S", f);
                    Gc()
                } catch (C) {
                    A(C, "processForm")
                }
            }
        }
        function Eg() {
            Pd = !0;
            if (window[d + "doSubmitForm"] && window[d + "doSubmitForm"][d + "Submit"])
                window[d + "doSubmitForm"][d + "Submit"]()
        }
        function Fg() {
            Vb(this);
            if (this[d + "Submit"])
                if (nb && Za) {
                    var a = !0;
                    try {
                        t && !xe(document.domain, "" + this.action) && (a = !1)
                    } catch (b) {}
                    if (a)
                        this[d + "Submit"] ? window.setTimeout && (window[d + "doSubmitForm"] = this,
                        window[d + "fTO"] = window.setTimeout(Eg, 500)) : ba("processSubmitFunction", "Original submit function for form unavailable");
                    else
                        this[d + "Submit"]()
                } else
                    this[d + "Submit"]();
            else
                ba("processSubmitFunction", "Original submit function for form unavailable")
        }
        function jf(a) {
            var b = window;
            a || (a = b.event);
            a.srcElement ? Vb(a.srcElement) : a.target ? Vb(a.target) : ba("processOnSubmit", "Unrecognised event format - no srcElement or target properties available")
        }
        function kf(a, b, c) {
            c = e("&ap=formlookup&at=FORM", "ai", c, 1);
            c = e(c, "an", b, 1);
            c = e(c, "ud", a, 0);
            L("X", c)
        }
        function lf(a) {
            if (null != a && a.elements) {
                var b = Jc(a)
                  , c = Kc(a);
                a = a.elements;
                for (var f = [], l = 0, d = 0, e = Math.min(100, a.length), k = 0, g = 0; g < a.length && k < e; g++) {
                    var q = a[g];
                    if ((F(q.name) || F(q.id)) && F(q.type)) {
                        var m = ("" + q.type).toLowerCase();
                        if ("submit" != m && "reset" != m && "button" != m) {
                            k++;
                            var m = ca(q.type)
                              , p = ca(q.name)
                              , q = ca(q.id)
                              , q = m + ";" + p + ";" + q + ";";
                            Wb[q] || (Wb[q] = Qd,
                            Qd++);
                            for (var q = Wb[q] + ";" + q, v = p = m = 0, r = q.length; v < r; v++) {
                                var w = q.charAt(v);
                                -1 < "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".indexOf(w) ? m++ : p++
                            }
                            1500 < d + m + Math.floor(1.2 * (p + 1)) && (0 < f.length && (f = Fb(f.join("&")),
                            kf(f, b, c)),
                            d = 0,
                            f = [],
                            l = 0);
                            f[l] = q;
                            d += m + Math.floor(1.2 * (p + 1));
                            l++
                        }
                    }
                }
                f = Fb(f.join("&"));
                kf(f, b, c)
            }
        }
        function mf() {
            try {
                if (0 < document.forms.length)
                    try {
                        for (var a = document, b = 0, c = a.forms.length; b < c; b++) {
                            var f = a.forms[b];
                            if (f && d + "navForm" != f.id && !f[nf]) {
                                f[nf] = 1;
                                Oe(f);
                                jb && lf(f);
                                Rd && f.addEventListener("change", Gg, !1);
                                if (mb) {
                                    bb ? f.attachEvent("onsubmit", jf) : Lc && f.addEventListener("submit", jf, cb);
                                    try {
                                        var l = f.submit
                                          , h = "";
                                        try {
                                            h = l.type
                                        } catch (e) {
                                            A(e, "exception detecting form submit type")
                                        }
                                        h || (f[d + "Submit"] = l,
                                        f.submit = Fg)
                                    } catch (e) {
                                        A(e, "exception attaching to submit() function")
                                    }
                                }
                                (ua || Pa) && of(f);
                                if (fa && f.elements)
                                    for (var J = f.elements, h = 0, k = J.length; h < k; h++) {
                                        var n = J[h]
                                          , q = ("" + n.tagName).toLowerCase();
                                        if ("input" == q) {
                                            var m = ("" + n.type).toLowerCase();
                                            Ga(m) && "password" != m && (D(n, "blur", yb),
                                            D(n, "change", yb),
                                            D(n, "input", yb));
                                            D(n, "focus", pf)
                                        } else
                                            "textarea" == q && (D(n, "blur", yb),
                                            D(n, "focus", pf))
                                    }
                            }
                        }
                    } catch (e) {
                        A(e, "processFormsArray")
                    }
            } catch (e) {}
            V || g.setTimeout(mf, 500)
        }
        function P(a) {
            return Math.round(100 * a) / 100
        }
        function zb(a) {
            a = a.getElementsByTagName("EMBED");
            return 0 < a.length ? a[0] : null
        }
        function Hg(a, b) {
            try {
                b = a.GetTime();
                var c = a.GetTimeScale();
                return b /= c
            } catch (f) {
                try {
                    return a = zb(a),
                    b = a.GetTime(),
                    c = a.GetTimeScale(),
                    b / c
                } catch (l) {
                    return null
                }
            }
        }
        function Ig(a, b) {
            try {
                b = a.GetDuration();
                var c = a.GetTimeScale();
                return b /= c
            } catch (f) {
                try {
                    return a = zb(a),
                    b = a.GetDuration(),
                    c = a.GetTimeScale(),
                    b / c
                } catch (l) {
                    return null
                }
            }
        }
        function Jg(a) {
            try {
                var b = a.GetURL();
                return b
            } catch (c) {
                try {
                    return a = zb(a),
                    b = a.GetURL()
                } catch (f) {
                    return null
                }
            }
        }
        function db(a, b, c, f, l, d, g, k, n) {
            var q = document.getElementById(a);
            n && (q = n);
            n = "&ap=SC";
            try {
                if (q) {
                    if ("QT" == b)
                        l = Hg(q),
                        d = Jg(q),
                        g = Ig(q),
                        Ha(a, d, l);
                    else if ("YT" == b) {
                        l = q.getCurrentTime();
                        d = q.getVideoUrl();
                        a: {
                            b = d;
                            try {
                                var m = b.indexOf("?");
                                if (-1 === m) {
                                    d = b;
                                    break a
                                }
                                var p = b.substring(m + 1).split("&")
                                  , v = b.substring(0, m)
                                  , m = "?";
                                f = 0;
                                for (var r = p.length; f < r; f++) {
                                    var w = p[f];
                                    0 !== w.indexOf("t=") && (m = "?" === m ? m + w : m + "&" + w)
                                }
                                "?" !== m && (v += m);
                                d = v;
                                break a
                            } catch (t) {}
                            d = b
                        }
                        var E = d.indexOf("#");
                        -1 < E && (d = d.substring(0, E));
                        g = q.getDuration();
                        "playing" == c && l == g && (l = 0);
                        Ha(a, d, l)
                    } else if ("WMP" == b)
                        try {
                            l = q.controls.currentPosition,
                            d = q.URL,
                            g = q.currentMedia.duration,
                            "mediaEnded" == c && (l = g),
                            f && (l = f),
                            Ha(a, d, l)
                        } catch (t) {
                            return ""
                        }
                    else
                        "RP" == b ? (l || (l = q.GetPosition()),
                        l && (l /= 1E3),
                        d = q.GetSource(),
                        (g = q.GetLength()) && (g /= 1E3)) : "H5V" == b && ((l = q.currentTime) && k && (l = k),
                        d = q.currentSrc,
                        d || (d = q.src),
                        g = q.duration,
                        f && (l = f),
                        Ha(a, d, l));
                    n = e(n, "te", P(l), 1);
                    n = e(n, "ah", d, 1);
                    n = e(n, "an", q.name, 1);
                    n = e(n, "ai", a, 1);
                    n = e(n, "to", P(g), 1);
                    Mc[a] == d && (n = e(n, "tf", P(eb[a]), 1))
                }
            } catch (t) {
                A(t, "retrievePlayerState")
            }
            return n
        }
        function Ha(a, b, c) {
            Mc[a] != b ? (Mc[a] = b,
            eb[a] = c) : eb[a] < c && (eb[a] = c)
        }
        function Kg(a) {
            var b = a.id
              , c = a.classid;
            !b || a.attachEvent && !c || (c = function(a) {
                a: {
                    a = Yb[a.type];
                    var c = db(b, "QT", a)
                      , c = e(c, "td", a, 1);
                    if ("seeking" == a)
                        if (Nc = c,
                        Sd)
                            break a;
                        else
                            Sd = !0;
                    else
                        Sd = !1,
                        "" != Nc && (L("A", Nc),
                        Nc = "");
                    L("A", c)
                }
            }
            ,
            D(a, "qt_play", c),
            D(a, "qt_pause", c),
            D(a, "qt_ended", c),
            D(a, "qt_timechanged", c))
        }
        function Lg(a) {
            var b = a.id;
            b && (D(a, "statechange", function(a, f) {
                var d = qf[f]
                  , h = db(b, "RP", d)
                  , h = e(h, "td", d, 1);
                L("A", h)
            }),
            D(a, "positionChange", function(a, f) {
                var d = document.getElementById(b)
                  , h = "";
                try {
                    h = d.GetSource(),
                    Ha(b, h, a / 1E3)
                } catch (e) {
                    A(e, "RealPlayer positionChange function")
                }
            }))
        }
        function Td(a, b, c) {
            try {
                var f = document;
                if (f.body) {
                    var d = f.createElement("DIV");
                    d.setAttribute("style", "position:absolute;width:0;height:0;overflow:hidden");
                    if (document.attachEvent || Object.hasOwnProperty.call(window, "ActiveXObject")) {
                        var h = document.createElement("SCRIPT");
                        h.type = "text/javascript";
                        h.setAttribute("for", b);
                        h.setAttribute("event", c);
                        h[void 0 === h.innerText ? "textContent" : "innerText"] = a;
                        d.appendChild(h)
                    } else
                        d.innerHTML = a;
                    f.body.appendChild(d)
                }
            } catch (e) {
                A(e, "attach_to_wmp")
            }
        }
        function Mg(a) {
            var b = a.id;
            if (b)
                if (a.attachEvent)
                    a.attachEvent("PlayStateChange", function(a) {
                        a = Ng[a];
                        var f = db(b, "WMP", a)
                          , f = e(f, "td", a, 1);
                        L("A", f)
                    }),
                    a.attachEvent("PositionChange", function(a, f) {
                        var d = P(a)
                          , d = db(b, "WMP", "seeking", d)
                          , d = e(d, "td", "seeking", 1);
                        L("A", d)
                    }),
                    a.attachEvent("MarkerHit", function(a) {
                        var f = document.getElementById(b);
                        try {
                            if (f && f.currentMedia) {
                                var d = f.currentMedia.getMarkerName(a)
                                  , h = db(b, "WMP", "marker")
                                  , h = e(h, "td", "marker", 1)
                                  , h = e(h, "tw", d, 1);
                                L("A", h)
                            }
                        } catch (g) {
                            A(g, "Windows Media Player marker hit function")
                        }
                    });
                else
                    try {
                        a = "",
                        Object.hasOwnProperty.call(window, "ActiveXObject") || (a = "<SCRIPT FOR=" + b + " EVENT=PlayStateChange(NewState)>"),
                        a = a + "var " + d + "State;var " + d + "URL;var " + d + "Player;try{" + d + "Player = document.getElementById('" + b + "');}catch(e){}try{" + d + "URL=" + d + "Player.URL;}catch(e){}switch (NewState){case 1:" + d + "State = 'stopped';break;case 2:" + d + "State = 'paused';break;case 3:" + d + "State = 'playing';break;case 4:case 5:" + d + "State = 'seeking';break;case 6:" + d + "State = 'buffering';break;case 7:" + d + "State = 'waiting';break;case 8:" + d + "State = 'mediaEnded';break;case 9:" + d + "State = 'transitioning';break;case 10:" + d + "State = 'ready';break;case 11:" + d + "State = 'reconnecting';break;default:" + d + "State = null;}if(" + d + "State != null){try{var " + d + "Name = " + d + "Player.name;var " + d + "currentPosition = -1; try{" + d + "currentPosition = " + d + "Player.controls.currentPosition}catch(e){}var " + d + "movieLen = -1; try{" + d + "movieLen = " + d + "Player.currentMedia.duration}catch(e){}window." + d + "mediaEvent(" + d + "State," + d + "currentPosition," + d + "URL," + d + "Name,'" + b + "'," + d + "movieLen);}catch(e){}}",
                        Object.hasOwnProperty.call(window, "ActiveXObject") || (a += "\x3c/SCRIPT>"),
                        Td(a, b, "PlayStateChange(NewState)"),
                        a = "",
                        Object.hasOwnProperty.call(window, "ActiveXObject") || (a = "<SCRIPT FOR=" + b + " EVENT=PositionChange(oldPosition)>"),
                        a = a + "try{var " + d + "Player = document.getElementById('" + b + "');var " + d + "Name = " + d + "Player.name;var " + d + "URL=" + d + "Player.URL;var " + d + "currentPosition = -1; try{" + d + "currentPosition = " + d + "Player.controls.currentPosition}catch(e){}var " + d + "movieLen = -1; try{" + d + "movieLen = " + d + "Player.currentMedia.duration}catch(e){}window." + d + "mediaEvent('seeking'," + d + "currentPosition," + d + "URL," + d + "Name,'" + b + "'," + d + "movieLen, oldPosition);}catch(e){}",
                        Object.hasOwnProperty.call(window, "ActiveXObject") || (a += "\x3c/SCRIPT>"),
                        Td(a, b, "PositionChange(oldPosition)"),
                        a = "",
                        Object.hasOwnProperty.call(window, "ActiveXObject") || (a = "<SCRIPT FOR=" + b + " EVENT=MarkerHit(markerNum)>"),
                        a = a + "try{var " + d + "Player = document.getElementById('" + b + "');var " + d + "Name = " + d + "Player.name;var " + d + "URL=" + d + "Player.URL;var " + d + "currentPosition = -1; try{" + d + "currentPosition = " + d + "Player.controls.currentPosition}catch(e){}var " + d + "movieLen = -1; try{" + d + "movieLen = " + d + "Player.currentMedia.duration}catch(e){}var " + d + "movieMarker; try{" + d + "movieMarker = " + d + "Player.currentMedia.getMarkerName(markerNum)}catch(e){}window." + d + "mediaEvent('marker'," + d + "currentPosition," + d + "URL," + d + "Name,'" + b + "'," + d + "movieLen,-1," + d + "movieMarker);}catch(e){}",
                        Object.hasOwnProperty.call(window, "ActiveXObject") || (a += "\x3c/SCRIPT>"),
                        Td(a, b, "MarkerHit(markerNum)")
                    } catch (c) {
                        A(c, "attach_to_wmp")
                    }
        }
        function Oc(a, b, c, f) {
            var d = a.name;
            d || (d = a.id);
            d || (d = "default");
            var h = a.CurrentState
              , h = h.toLowerCase();
            if (!f || "playing" == h) {
                var g, k;
                try {
                    b || (b = a.Position.Seconds);
                    b = P(b);
                    g = a.source;
                    k = a.NaturalDuration.Seconds;
                    a = d;
                    "mediaEnded" == h && (b = k);
                    Ha(a, g, b);
                    var n, d = "&ap=SC";
                    "seeking" == h && (d = e(d, "tp", P(b), 1));
                    d = e(d, "te", P(b), 1);
                    d = e(d, "ah", g, 1);
                    d = e(d, "ai", a, 1);
                    d = e(d, "to", P(k), 1);
                    Mc[a] == g && (d = e(d, "tf", P(eb[a]), 1));
                    n = d;
                    c && (h = "marker",
                    n = e(n, "tw", c, 1));
                    n = e(n, "td", h, 1);
                    f && (n = e(n, "ua", "true", 1));
                    L("A", n)
                } catch (q) {
                    A(q, "sendSilverlightEventForMediaElement")
                }
            }
        }
        function Og(a) {
            var b = "";
            try {
                b = a.id
            } catch (c) {}
            if (!b)
                try {
                    b = a.name
                } catch (c) {}
            a = e("", "tr", "Silverlight", 1);
            a = e(a, "ts", "no info", 1);
            a = e(a, "ai", b, 1);
            K("O", a)
        }
        function Pg(a, b) {
            try {
                for (var c in Pc) {
                    var f = a.findName(Pc[c]);
                    Oc(f, 0, 0, !0)
                }
            } catch (d) {}
        }
        function rf(a, b, c) {
            if (null != a)
                try {
                    var f = null
                      , d = 0;
                    try {
                        f = a.children
                    } catch (e) {}
                    if (null == f)
                        try {
                            f = a.Content.children
                        } catch (e) {}
                    if (null != f) {
                        try {
                            d = f.count
                        } catch (e) {}
                        for (a = 0; a < d; a++) {
                            var h;
                            h = f.getItem(a);
                            if ("MediaElement" == h.toString()) {
                                var g = h.name;
                                Pc[g + " - " + b] || (Pc[g + " - " + b] = g,
                                Og(h),
                                Oc(h),
                                h.addEventListener("CurrentStateChanged", function(a, b) {
                                    var c = a.findName(g);
                                    Oc(c)
                                }),
                                h.addEventListener("MarkerReached", function(a, b) {
                                    var c = a.findName(g)
                                      , f = b.Marker
                                      , d = f.Time.Seconds
                                      , f = f.Text;
                                    try {
                                        Oc(c, d, f)
                                    } catch (l) {}
                                }))
                            } else
                                rf(h, b, c)
                        }
                    }
                } catch (e) {}
        }
        function sf(a, b, c) {
            try {
                if (-1 != b) {
                    var f = Qg[b];
                    if ("paused" == f) {
                        if (Ud)
                            return;
                        Ud = !0
                    } else
                        Ud = !1;
                    var d = db(a, "YT", f, "", "", "", "", "", c)
                      , d = e(d, "td", f, 1);
                    L("A", d)
                }
            } catch (h) {
                A(h, "error sending YouTube event - newState")
            }
        }
        function Rg(a, b) {
            if (sc)
                try {
                    if ("1" != Zb[b]) {
                        var c = ""
                          , c = e(c, "tr", "YouTube", 1)
                          , c = e(c, "ai", b, 1);
                        K("O", c);
                        c = d + "ytEvent" + Qc;
                        window[c] = function(a) {
                            sf(b, a.data, a.target)
                        }
                        ;
                        try {
                            a.addEventListener("onStateChange", c),
                            Zb[b] = "1",
                            Qc++
                        } catch (f) {
                            A(f, "error adding YouTube state change listener")
                        }
                    }
                } catch (f) {}
        }
        function tf(a, b) {
            if ("1" != Zb[b]) {
                var c = d + "ytEvent" + Qc;
                window[c] = function(a) {
                    sf(b, a)
                }
                ;
                try {
                    a.addEventListener("onStateChange", "window." + c),
                    Zb[b] = "1",
                    Qc++
                } catch (f) {
                    A(f, "error adding YouTube state change listener")
                }
            }
        }
        function Sg(a) {
            if (!a)
                return !1;
            var b = "" + a.data;
            if (0 == b.indexOf("http://www.youtube.com") || 0 == b.indexOf("https://www.youtube.com"))
                return !0;
            a = a.getElementsByTagName("PARAM");
            for (var c = 0; c < a.length; c++)
                if (b = a[c],
                "movie" == b.name && (b = "" + b.value,
                0 == b.indexOf("http://www.youtube.com") || 0 == b.indexOf("https://www.youtube.com")))
                    return !0;
            return !1
        }
        function Tg() {
            try {
                window.onYouTubePlayerReady && (window[d + "ytReadyOriginal"] = window.onYouTubePlayerReady)
            } catch (a) {
                A(a, "error attching to existing onYouTubePlayerReady function");
                return
            }
            uf = !0;
            window.onYouTubePlayerReady = function(a) {
                try {
                    var b = document.getElementById(a);
                    b && !Zb[a] && (tf(b, a),
                    b = "",
                    b = e(b, "tr", "YouTube", 1),
                    b = e(b, "ai", a, 1),
                    K("O", b))
                } catch (c) {}
                if (window[d + "ytReadyOriginal"])
                    window[d + "ytReadyOriginal"](a)
            }
        }
        function Vd(a, b) {
            var c = !1, d = !1, l = !1, h = !1, g = !1, k = "", n = "", q;
            q = a.id;
            try {
                var m;
                a: {
                    var p = a;
                    try {
                        if (p.GetQuickTimeVersion()) {
                            m = p;
                            break a
                        }
                    } catch (t) {}
                    try {
                        if (zb(p).GetQuickTimeVersion()) {
                            m = p;
                            break a
                        }
                    } catch (t) {}
                    m = null
                }
                if (null != m)
                    a: {
                        l = !0,
                        k = "Quicktime",
                        m = a;
                        p = void 0;
                        try {
                            p = m.GetQuickTimeVersion()
                        } catch (t) {
                            try {
                                m = zb(m),
                                p = m.GetQuickTimeVersion()
                            } catch (A) {
                                n = null;
                                break a
                            }
                        }
                        n = p
                    }
            } catch (t) {}
            if (!k)
                try {
                    var v = "" + a.type;
                    v && (g = 0 == v.indexOf("application/x-silverlight"));
                    g && (k = "Silverlight",
                    a.name && (q = a.name))
                } catch (t) {}
            if (!k)
                try {
                    !a.GetVersionInfo() || 1 != a.GetIsPlus() && 0 != a.GetIsPlus() || (d = !0,
                    k = "RealPlayer",
                    n = a.GetVersionInfo())
                } catch (t) {}
            if (!k)
                try {
                    var r;
                    a: {
                        try {
                            if (a.currentMedia) {
                                r = a;
                                break a
                            }
                        } catch (t) {}
                        try {
                            var w = zb(a);
                            if (w.currentMedia) {
                                r = w;
                                break a
                            }
                        } catch (t) {}
                        r = null
                    }
                    r && (c = !0,
                    a = r,
                    k = "Windows Media Player",
                    n = a.versionInfo)
                } catch (t) {}
            if (!k)
                try {
                    (h = Sg(a)) && (k = "YouTube")
                } catch (t) {}
            v = e("", "tr", k, 1);
            v = e(v, "ts", n, 1);
            v = e(v, "ai", q, 1);
            if (l) {
                if (!b)
                    return;
                Kg(a)
            } else if (h) {
                if (b || uf)
                    return;
                tf(a, a.id)
            } else {
                if (g) {
                    k = a.name;
                    "" == k && (k = a.id);
                    "" == k && (k = "default");
                    if (!b)
                        return;
                    Wd[k] = a;
                    if (a.isLoaded)
                        try {
                            a.silverlightSpeedTrapMouseUpFlag || (a.Content.Root.AddEventListener("MouseLeftButtonUp", Pg),
                            a.silverlightSpeedTrapMouseUpFlag = "1"),
                            rf(a.Content.Root, k, a)
                        } catch (t) {}
                    else
                        la.push(a);
                    return
                }
                if (c) {
                    if (b)
                        return;
                    Mg(a)
                } else if (d) {
                    if (b)
                        return;
                    a.attachEvent && Lg(a)
                }
            }
            c = a.id;
            d = a.name;
            null == Rc[c + d] && ((k || n) && K("O", v),
            Rc[c + d] = "1")
        }
        function vf() {
            try {
                for (playerObj in Wd) {
                    var a = Wd[playerObj];
                    null != a && Vd(a, !0)
                }
            } catch (b) {}
            V || setTimeout(vf, 5E3)
        }
        function wf() {
            var a = [];
            try {
                for (var b = 0, c = la.length; b < c; b++)
                    la[b].isLoaded && (Vd(la[b], !0),
                    a.push(la[b]));
                if (0 < a.length)
                    for (b = 0,
                    c = a.length; b < c; b++)
                        for (var d = a[b], l = 0, h = la.length; l < h; l++)
                            d == la[l] && la.splice(l, 1)
            } catch (e) {}
            !V && 0 < la.length && setTimeout(wf, 5E3)
        }
        function Sc(a) {
            var b;
            b = document.getElementsByTagName("OBJECT");
            for (var c = 0; c < b.length; c++)
                try {
                    Vd(b[c], a)
                } catch (d) {}
            a && !Ce(Ab) && (xf(),
            yf());
            a && 0 < la.length && setTimeout(wf, 300)
        }
        function zf() {
            Sc(!0)
        }
        function $b(a) {
            var b = "";
            a && (b = "" + a.tagName,
            a.id && (b += a.id),
            a.name && (b += a.name));
            return b
        }
        function ac(a) {
            a || (a = window.event);
            var b = a.target;
            b || (b = a.srcElement);
            return b
        }
        function Ia(a, b, c) {
            try {
                var d = ac(a);
                if (d) {
                    var l = db(d.id, "H5V", b, "", "", "", "", c)
                      , l = e(l, "td", b, 1);
                    L("A", l);
                    var h = $b(d);
                    Tc[h] = b
                }
            } catch (g) {
                A(g, "sendMediaTageEvent - " + b)
            }
        }
        function Af(a, b) {
            Ia(a, "playing", b)
        }
        function Ug(a) {
            Ia(a, "paused")
        }
        function Vg(a) {
            var b = ac(a);
            if (b) {
                var c = $b(b)
                  , d = (new Date).valueOf()
                  , l = bc[c];
                l ? 500 < d - l && Ia(a, "seeking") : Ia(a, "seeking");
                bc[c] = d;
                Xd[c] = b.currentTime
            }
        }
        function Wg(a) {
            var b = ac(a);
            if (b) {
                var c = $b(b)
                  , d = (new Date).valueOf()
                  , l = bc[c];
                l ? 500 < d - l && Ia(a, "seeking") : Ia(a, "seeking");
                bc[c] = d;
                Tc[c] = "seeked";
                Xd[c] = b.currentTime
            }
        }
        function Xg(a) {
            var b = ac(a);
            b && (b = $b(b),
            b = Tc[b],
            "stopped" != b && "seeked" != b && Ia(a, "stopped"))
        }
        function Yg(a) {
            var b = ac(a);
            if (b) {
                var c = $b(b);
                if ("seeked" != Tc[c])
                    return !1;
                var b = (new Date).valueOf()
                  , d = bc[c]
                  , c = Xd[c];
                d && 500 < b - d && Af(a, c)
            }
            return !0
        }
        function Bf(a, b) {
            if (a && b)
                for (var c = 0; c < a.length; c++)
                    try {
                        var d = a[c]
                          , l = !d.paused && 4 == d.readyState;
                        if (d.addEventListener) {
                            d.addEventListener("play", Af, !1);
                            d.addEventListener("pause", Ug, !1);
                            d.addEventListener("seeking", Vg, !1);
                            d.addEventListener("seeked", Wg, !1);
                            d.addEventListener("ended", Xg, !1);
                            d.addEventListener("timeupdate", Yg, !1);
                            var h = ""
                              , g = d.id
                              , k = d.name
                              , h = e(h, "tr", b, 1)
                              , h = e(h, "ai", g, 1)
                              , h = e(h, "an", k, 1);
                            null == Rc[g + k] && (K("O", h),
                            Rc[g + k] = "1");
                            l && (h = {},
                            h.target = d,
                            Ia(h, "playing"))
                        }
                    } catch (n) {}
        }
        function xf() {
            var a = document.getElementsByTagName("VIDEO");
            0 == a.length ? window.setTimeout(xf, 1E3) : Bf(a, "HTML5Video")
        }
        function yf() {
            var a = document.getElementsByTagName("AUDIO");
            0 == a.length ? window.setTimeout(yf, 1E3) : Bf(a, "HTML5Audio")
        }
        function Zg() {
            function a(a) {
                try {
                    "-1" == a && (a = "");
                    for (var b = 0; b < Y.length; b++) {
                        var c = Y[b]
                          , c = e(c, "vc", a, 1);
                        od(c);
                        ia(c)
                    }
                } catch (d) {}
                Y.length = 0
            }
            function b(b) {
                try {
                    var c = "&ap=facebook"
                      , d = ""
                      , f = window.sessionStorage ? x("fbD") : "";
                    "connected" === b.status ? (d = b.authResponse.userID,
                    c = e(c, "ve", "true", 1),
                    c = e(c, "vc", d, 1),
                    window.sessionStorage && z("fbD", "" + d)) : (c = "not_authorized" === b.status ? e(c, "ve", "true", 1) : e(c, "ve", "false", 1),
                    window.sessionStorage && z("fbD", "-1"));
                    "" != f && f == d || "-1" == f && !d || K("t", c)
                } catch (g) {}
                a(window.sessionStorage ? x("fbD") : "")
            }
            function c() {
                try {
                    window.sessionStorage ? Yd ? FB.getLoginStatus(function(a) {
                        b(a)
                    }) : a() : a()
                } catch (c) {}
            }
            if (Yd) {
                var d;
                d = window.fbAsyncInit && !window.fbAsyncInit.hasRun ? !1 : !0;
                if (!d) {
                    cc = !1;
                    window.setTimeout(Uc, 1E3);
                    return
                }
            }
            FB.Event.subscribe("edge.create", function(a) {
                try {
                    var b = "&ap=facebook";
                    "" + a != location.href && (b = e(b, "ah", "" + a));
                    b = Fa("k", b);
                    Y[Y.length] = b;
                    c()
                } catch (d) {}
            });
            FB.Event.subscribe("edge.remove", function(a) {
                try {
                    var b = "&ap=facebook";
                    "" + a != location.href && (b = e(b, "ah", "" + a));
                    unlikeEvent = Fa("g", b);
                    Y[Y.length] = unlikeEvent;
                    c()
                } catch (d) {}
            });
            FB.Event.subscribe("comment.create", function(a) {
                try {
                    var b = "&ap=facebook"
                      , b = e(b, "vd", "" + a.commentID);
                    a.href != location.href && (b = e(b, "ah", "" + a.href));
                    b = Fa("h", b);
                    Y[Y.length] = b;
                    c()
                } catch (d) {}
            });
            FB.Event.subscribe("comment.remove", function(a) {
                try {
                    var b = "&ap=facebook"
                      , b = e(b, "vd", "" + a.commentID);
                    a.href != location.href && (b = e(b, "ah", "" + a.href));
                    b = Fa("i", b);
                    Y[Y.length] = b;
                    c()
                } catch (d) {}
            });
            FB.Event.subscribe("message.send", function(a) {
                try {
                    var b = "&ap=facebook";
                    "" + a != location.href && (b = e(b, "ah", "" + a));
                    b = Fa("j", b);
                    Y[Y.length] = b;
                    c()
                } catch (d) {}
            });
            Yd && FB.Event.subscribe("auth.authResponseChange", function(a) {
                b(a)
            });
            c()
        }
        function Uc() {
            try {
                FB && FB.Event && !cc ? (cc = !0,
                Zg()) : cc || window.setTimeout(Uc, 1E3);
                return
            } catch (a) {}
            cc || window.setTimeout(Uc, 1E3)
        }
        function Cf(a) {
            try {
                var b = window.sessionStorage ? x("twD") : ""
                  , c = a.data("id");
                if (b != c) {
                    var d = a.data("name")
                      , l = a.data("followers_count");
                    a = "&ap=twitter";
                    a = e(a, "vc", c, 1);
                    a = e(a, "vk", d, 1);
                    a = e(a, "vi", l, 1);
                    a = e(a, "ve", "true", 1);
                    K("t", a);
                    window.sessionStorage && z("twD", "" + c)
                }
            } catch (h) {}
        }
        function $g() {
            try {
                var a = function(a) {
                    try {
                        if (a) {
                            var b = "&ap=twitter"
                              , b = e(b, "vf", "" + a.data.user_id);
                            K("v", b)
                        }
                    } catch (c) {}
                }
                  , b = function(a) {
                    try {
                        if (a) {
                            var b = "&ap=twitter"
                              , b = e(b, "vf", "" + a.data.user_id);
                            K("o", b)
                        }
                    } catch (c) {}
                }
                  , c = function(a) {
                    try {
                        if (a) {
                            var b = "&ap=twitter"
                              , b = e(b, "vg", a.data.source_tweet_id);
                            K("n", b)
                        }
                    } catch (c) {}
                }
                  , d = function(a) {
                    a && K("m", "&ap=twitter")
                };
                if (twttr && twttr.anywhere) {
                    if (ah)
                        try {
                            bh(),
                            twttr.anywhere(function(a) {
                                try {
                                    a.bind("authComplete", function(a, b) {
                                        Cf(b)
                                    })
                                } catch (b) {}
                            })
                        } catch (l) {}
                } else
                    twttr && twttr.events && (twttr.events.bind("tweet", d),
                    twttr.events.bind("retweet", c),
                    twttr.events.bind("follow", b),
                    twttr.events.bind("unfollow", a))
            } catch (l) {}
        }
        function Zd() {
            try {
                twttr && !$d ? ($d = !0,
                $g()) : window.setTimeout(Zd, 1E3);
                return
            } catch (a) {}
            $d || window.setTimeout(Zd, 1E3)
        }
        function bh() {
            if (window.sessionStorage)
                try {
                    twttr.anywhere(function(a) {
                        a.isConnected() && Cf(a.currentUser)
                    })
                } catch (a) {}
        }
        function Df() {
            if (window.sessionStorage)
                try {
                    if (gapi && gapi.client)
                        if (Vc && ae) {
                            var a = {};
                            a.client_id = Vc;
                            a.scope = "https://www.googleapis.com/auth/plus.me";
                            a.immediate = !0;
                            gapi.client.setApiKey(ae);
                            window.setTimeout(function() {
                                try {
                                    gapi.auth.authorize(a, window[d + "gplusAuthResponse"])
                                } catch (b) {}
                            }, 1)
                        } else
                            Bb();
                    else
                        Bb()
                } catch (b) {}
            else
                Bb()
        }
        function Bb(a) {
            try {
                "-1" == a && (a = "");
                for (var b = 0; b < dc.length; b++) {
                    var c = dc[b]
                      , c = e(c, "vc", a, 1);
                    od(c);
                    ia(c)
                }
                dc.length = 0
            } catch (d) {}
        }
        function ch() {
            try {
                gapi && gapi.client ? gapi.client.load("plus", "v1", function() {
                    gapi.client.plus.people.get({
                        userId: "me"
                    }).execute(function(a) {
                        var b;
                        b = window.sessionStorage ? x("gpD") : "";
                        var c = a.id;
                        b != c && (a = a.displayName,
                        b = e("&ap=googleplus", "vc", c, 1),
                        b = e(b, "vk", a, 1),
                        b = e(b, "ve", "true", 1),
                        K("t", b),
                        window.sessionStorage && z("gpD", "" + c));
                        Bb(c)
                    })
                }) : Bb()
            } catch (a) {}
        }
        function be() {
            if (ec && 0 != ec.length) {
                try {
                    gapi && gapi.client && !ce ? (ce = !0,
                    Df()) : window.setTimeout(be, 1E3);
                    return
                } catch (a) {}
                ce || window.setTimeout(be, 1E3)
            }
        }
        function dh() {
            Za = !0
        }
        function A(a, b) {
            try {
                a || (a = g.event),
                ba(a.message, b)
            } catch (c) {}
        }
        function ba(a, b) {
            try {
                if (!Ef && !V && !Wa) {
                    Ef = 1;
                    oa || (oa = 3);
                    var c = oa;
                    oa++;
                    c = "" + da + "!" + aa + "!" + c + "!";
                    200 < a.length && (a = a.substring(0, 200));
                    200 < b.length && (b = b.substring(0, 200));
                    var d = g.encodeURIComponent;
                    d || (d = g.escape);
                    if (d) {
                        c += "aE=E&aD=" + (new Date).valueOf() + "&a7=" + d(a) + "&ap=csaerror&av=" + d(b);
                        window.CelebrusLoggingUtils && window.CelebrusLoggingUtils.logEventQueued(c);
                        var c = c.replace(/q/g, "%71")
                          , c = Ed(c)
                          , c = "/" + S + "/" + B + "/UYT76TBX45GD/uw2jde932.bmp?" + c
                          , e = new Image;
                        "https:" == location.protocol.toLowerCase() ? e.src = Cc + c : e.src = tb + c
                    }
                }
            } catch (h) {}
        }
        function Ff() {
            try {
                if (0 < document.images.length)
                    try {
                        var a = document;
                        fc = a.images.length;
                        if (de != fc)
                            for (var b = 0; b < fc; b++) {
                                var c = a.images[b];
                                if (c && c.complete && !c[Gf]) {
                                    var d = fc;
                                    if (c)
                                        try {
                                            c[Gf] = 1,
                                            de++,
                                            Kb && de == d && L("J", "&ap=imagesloaded&bt=" + fc)
                                        } catch (e) {
                                            A(e, "imageLoadEvent")
                                        }
                                }
                            }
                    } catch (e) {
                        A(e, "checkImageLoads")
                    }
            } catch (e) {}
            V || g.setTimeout(Ff, 500)
        }
        function of(a) {
            if (a.elements) {
                a = a.elements;
                for (var b = 0, c = a.length; b < c; b++) {
                    var d = a[b];
                    if (-1 != ("" + d.type).toLowerCase().indexOf("select")) {
                        if (ua || ee)
                            bb ? d.attachEvent("onchange", Wc) : Lc ? d.addEventListener("change", Wc, cb) : ba("collectSelectValues", "Unrecognised event format - no srcElement or target properties available");
                        if (Pa || Hf) {
                            var l;
                            l = d;
                            var h = []
                              , g = []
                              , k = 0
                              , n = l.options.length
                              , q = l.selectedIndex;
                            if (-1 == q)
                                l = "";
                            else {
                                for (; q < n; q++)
                                    l.options[q].selected && (h[k] = l.options[q].text,
                                    g[k] = q,
                                    k++);
                                k = void 0;
                                k = e("&at=SELECT", "an", l.name, 1);
                                k = e(k, "ai", l.id, 1);
                                k = e(k, "aT", l.type, 1);
                                k = e(k, "bf", g.join(","), 1);
                                k = e(k, "bg", h.join("<dlm>"), 1);
                                l = k = e(k, "av", l.value, 1)
                            }
                            "" != l && (h = va(d),
                            d = Xb("defaultselect", d.name, d.id, h, l, ""),
                            "0" != d ? "block" != d && L("D", l) : Pa && L("D", l))
                        }
                    }
                }
            }
        }
        function Ga(a) {
            if (!a)
                return !1;
            try {
                a = a.toLowerCase()
            } catch (b) {
                A(b, "isTextElement")
            }
            return -1 < ",text,textarea,password,email,url,number,range,search,color,date,month,week,time,datetime,datetime-local,tel,".indexOf("," + a + ",")
        }
        function If(a, b, c, d, l) {
            var h = document
              , g = h.body;
            h.compatMode && "css1compat" == ("" + h.compatMode).toLowerCase() && (g = h.documentElement);
            var h = "", k;
            k = (k = (k = (k = g.scrollWidth == Xc) && g.scrollHeight == Yc) && g.clientWidth == Zc) && g.clientHeight == $c;
            var n = window.innerWidth ? window.innerWidth : g.offsetWidth;
            k = k && n == ad;
            n = window.innerHeight ? window.innerHeight : g.offsetHeight;
            k = (k = (k = (k = (k = k && n == bd) && a == cd) && b == dd) && window.outerHeight == ed) && window.outerWidth == fd;
            c && (k = k && 1 >= Math.abs(c - gd));
            d && (k = k && 1 >= Math.abs(d - hd));
            if (!k || l)
                l = g,
                Yc = l.scrollHeight,
                Xc = l.scrollWidth,
                $c = l.clientHeight,
                Zc = l.clientWidth,
                bd = window.innerHeight ? window.innerHeight : l.offsetHeight,
                ad = window.innerWidth ? window.innerWidth : l.offsetWidth,
                ed = window.outerHeight,
                fd = window.outerWidth,
                c && (gd = c),
                d && (hd = d),
                cd = a,
                dd = b,
                a = e("", "a1", Xc),
                a = e(a, "a2", Yc),
                a = e(a, "a3", Zc),
                a = e(a, "a4", $c),
                a = e(a, "a5", ad),
                a = e(a, "a6", bd),
                a = e(a, "ax", gd),
                a = e(a, "ay", hd),
                a = e(a, "aU", cd),
                a = e(a, "aV", dd),
                a = e(a, "vp", ed),
                h = a = e(a, "vr", fd);
            return h
        }
        function Xb(a, b, c, d, l, h, g, k) {
            for (var n = 0, q = fe.length; n < q; n++) {
                var m = fe[n]
                  , p = m.sourceID
                  , v = m.sourceClass
                  , r = m.configFlags;
                (m = W(b, m.sourceName)) && (m = W(c, p));
                m && (m = W(d, v));
                if (m)
                    switch (p = {
                        fullEventString: e(l, "av", h, 1),
                        filteredValueString: h
                    },
                    v = {
                        fullEventString: e(l, "av", "***", 1),
                        filteredValueString: "***"
                    },
                    g && (p.fullEventString = e(p.fullEventString, "cb", g),
                    k && (p.fullEventString = Jf(p.fullEventString, k))),
                    a) {
                    case "mousedown":
                    case "mouseup":
                        return pc || rd ? 0 < (r & fb) ? p : v : "block";
                    case "click":
                    case "doubleclick":
                        if (0 < (r & Kf))
                            return 0 < (r & fb) ? p : v;
                        if (oc)
                            return "block";
                        break;
                    case "textchange":
                        if (0 < (r & ge))
                            return 0 < (r & fb) ? p : v;
                        if (fa)
                            return "block";
                        break;
                    case "hidden":
                        return 0 < (r & fb) ? p : v;
                    case "submit":
                    case "reset":
                        if (0 < (r & Lf))
                            return p;
                        if (qc)
                            return "block";
                        break;
                    case "keyup":
                        if (0 < (r & he))
                            return 0 < (r & fb) ? p : v;
                        if (ea)
                            return "block";
                        break;
                    case "select":
                    case "change":
                        if (0 < (r & ie))
                            return p;
                        if (ua)
                            return "block";
                        break;
                    case "defaultselect":
                        if (0 < (r & je))
                            return p;
                        if (Pa)
                            return "block";
                        break;
                    case "mouseover":
                        if (0 < (r & ke))
                            return 0 < (r & fb) ? p : v;
                        if (Jb)
                            return "block"
                    }
            }
            return "0"
        }
        function eh(a, b, c, d) {
            b && (b = b.toLowerCase());
            d && (d = d.toLowerCase());
            if ("password" == b)
                return "T" == a && ea ? !0 : !1;
            switch (a) {
            case "C":
            case "F":
                if ("reset" == b || "submit" == b)
                    return qc;
                if ("checkbox" == b || "radio" == b)
                    return ua;
                if ("image" == b && "input" == c)
                    return qc;
                if ("select" == c || "option" == c)
                    if (!b || "undefined" == b)
                        return !1;
                return -1 != b.indexOf("select") ? lb : oc;
            case "T":
                return ea;
            case "M":
                return "mouseover" == d ? Jb : pc;
            case "G":
                return lb;
            default:
                return !0
            }
        }
        function fh(a, b, c) {
            if ("https:" != Ra() && !Mf && !c)
                if (Sa || rc)
                    if (rc)
                        Sa = Mf = !0;
                    else
                        return !1;
                else
                    return ba("Detected flash mixed-mode environment", "Configuration prevents mixed-mode collection"),
                    !1;
            b && (b = ("" + b).toLowerCase());
            switch (a) {
            case "B":
                return Oa;
            case "C":
            case "F":
                return "chk" == b || "rdo" == b || "mi" == b || "mu" == b || "dtg" == b || "ns" == b || "df" == b ? ua : "cbo" == b ? lb : oc;
            case "K":
                return ea;
            case "T":
                return fa;
            case "V":
                return sc;
            default:
                return !0
            }
        }
        function gh(a, b) {
            a = ("" + a).toLowerCase();
            b = ("" + b).toLowerCase();
            if ("reset" == a || "submit" == a || "image" == a)
                return "submit";
            if ("checkbox" == a || "radio" == a)
                return "select";
            if ("select" == b || "option" == b)
                if (!a || "undefined" == a)
                    return "";
            return -1 != a.indexOf("select") ? "select" : "click"
        }
        function Jf(a, b) {
            var c = 0;
            try {
                if ("keyup" != "" + b.type)
                    return a;
                b.altKey && (c |= hh);
                b.ctrlKey && (c |= ih);
                b.shiftKey && (c |= jh)
            } catch (d) {
                A(d, "appendModifiers")
            }
            return e(a, "MD", c)
        }
        function Nf(a) {
            return -1 < gb.indexOf(";" + a + ";") ? !1 : !0
        }
        function Ad(a, b, c) {
            var f, l;
            f = l = " ";
            var h = a
              , g = ""
              , k = "";
            try {
                for (; h; ) {
                    f = "/" + f;
                    l = "/" + l;
                    g || !h.href || "a" != ("" + h.tagName).toLowerCase() && "area" != ("" + h.tagName).toLowerCase() || (g = h.href);
                    h.name && (f = h.name + f);
                    h.id && (l = h.id + l);
                    if (!k) {
                        var n = h;
                        if (n) {
                            var q = !1
                              , m = {};
                            n[d + "contentActionIdentifier"] && (m.contentActionId = n[d + "contentActionIdentifier"],
                            q = !0);
                            n[d + "ruleIdentifier"] && (m.ruleId = n[d + "ruleIdentifier"],
                            q = !0);
                            n[d + "contentIdentifier"] && (m.contentId = n[d + "contentIdentifier"],
                            q = !0);
                            n[d + "customIdentifier"] && (m.customId = n[d + "customIdentifier"],
                            q = !0);
                            k = q ? m : null
                        } else
                            k = null
                    }
                    if (h === ib(h))
                        break;
                    h = ib(h)
                }
            } catch (p) {
                A(p, "error traversing event hierarchy")
            }
            g || (g = "");
            b = e(b, "aN", f, 1);
            b = e(b, "aI", l, 1);
            k && (b = e(b, "uy", k.contentActionId, 1),
            b = e(b, "uz", k.ruleId, 1),
            b = e(b, "va", k.contentId, 1),
            b = e(b, "we", k.customId, 1));
            c && g && a && !a.alt && !a.title && a.innerHTML && (a = le(a),
            b = e(b, "ie", a, 1));
            return {
                updatedProperties: b,
                parentAnchor: g
            }
        }
        function le(a) {
            if (!a)
                return "";
            (a = a.innerHTML) && 80 < a.length && (a = a.substring(0, 80) + "...");
            return a
        }
        function Ja(a, b, c, f) {
            if (a) {
                var l = window, h, g, k, n, q, m;
                h = g = k = n = q = m = "";
                var p, v;
                p = v = 0;
                var r, w, E, z, x, y;
                r = w = E = z = x = y = 0;
                var D = (new Date).valueOf()
                  , G = "";
                try {
                    c || (c = "");
                    a || (a = l.event);
                    var u = ""
                      , C = ""
                      , B = "";
                    if (a) {
                        var u = a.srcElement, L = [], R = [], Q = 0, M = document, O = M.body, P;
                        if (u) {
                            if (!Nf(("" + u.scopeName).toLowerCase()) || "G" == b && -1 == u.type.indexOf("select") || Na(u.id))
                                return;
                            M.compatMode && "css1compat" == ("" + M.compatMode).toLowerCase() && M.documentElement && (O = M.documentElement);
                            O.scrollLeft && (x = O.scrollLeft);
                            O.scrollTop && (y = O.scrollTop);
                            try {
                                a.screenX && (p = a.screenX),
                                a.screenY && (v = a.screenY)
                            } catch (I) {}
                            if (a.pageX || a.pageY) {
                                if (E = a.pageX,
                                z = a.pageY,
                                r = E,
                                w = z,
                                a.clientX || a.clientY)
                                    p -= a.clientX,
                                    v -= a.clientY
                            } else
                                a.clientX || a.clientY ? (E = a.clientX,
                                z = a.clientY) : (r = Hb(u),
                                w = Ib(u),
                                a.offsetX && (E = r + a.offsetX),
                                a.offsetY && (z = w + a.offsetY)),
                                p -= E,
                                v -= z,
                                r = x + E,
                                w = y + z;
                            c = a.offsetX ? c + ("&aX=" + (r - a.offsetX)) : c + ("&aX=" + Hb(u));
                            c = a.offsetY ? c + ("&aY=" + (w - a.offsetY)) : c + ("&aY=" + Ib(u))
                        } else if (a.target) {
                            u = a.target;
                            if ("G" == b && -1 == u.type.indexOf("select") || Na(u.id))
                                return;
                            x = l.pageXOffset;
                            y = l.pageYOffset;
                            try {
                                l.screenX && (p = l.screenX),
                                l.screenY && (v = l.screenY)
                            } catch (I) {}
                            r = a.pageX;
                            x && (r += x);
                            r && "keyup" != a.type && "change" != a.type || (r = Hb(u));
                            w = a.pageY;
                            y && (w += y);
                            w && "keyup" != a.type && "change" != a.type || (w = Ib(u));
                            c += "&aX=" + Hb(u);
                            c += "&aY=" + Ib(u)
                        }
                        if (u) {
                            if (!Nf(("" + u.scopeName).toLowerCase()))
                                return;
                            c = e(c, "af", u.sourceIndex);
                            if ("mouseover" == a.type) {
                                if (Of == u)
                                    return;
                                Of = u
                            }
                            h = ("" + u.tagName).toLowerCase();
                            if ("option" == h)
                                return;
                            c = e(c, "at", u.tagName, 1);
                            l = u;
                            if (ua || ee)
                                try {
                                    -1 != ("" + l.type).toLowerCase().indexOf("select") && (bb && l.attachEvent ? l.attachEvent("onchange", Wc) : l.addEventListener && l.addEventListener("change", Wc, cb))
                                } catch (I) {
                                    A(I, "Error screening for select control change hander")
                                }
                            l = u;
                            if (fa || me)
                                try {
                                    Ga("" + l.type) && (bb && l.attachEvent ? l.attachEvent("onchange", yb) : l.addEventListener && l.addEventListener("change", yb, cb))
                                } catch (I) {
                                    A(I, "Error screening for text control change hander")
                                }
                            if ("select" == h && "click" == a.type)
                                return;
                            k = ("" + u.type).toLowerCase();
                            c = e(c, "aT", u.type, 1);
                            g = u.name;
                            n = u.id;
                            "form" == h && (g = Jc(u),
                            n = Kc(u));
                            c = e(c, "an", g, 1);
                            c = e(c, "ai", n, 1);
                            m = va(u);
                            c = e(c, "ux", m, 1);
                            "password" == k ? q = C = "***" : u.value && (q = u.value,
                            C = "textarea" == h ? Pf("" + h + g + k + n, a.type, q) : u.value);
                            c = e(c, "ah", u.src, 1);
                            c = e(c, "ah", u.href, 1);
                            if (0 <= u.selectedIndex) {
                                for (var V = u.options.length, l = 0, S = u.selectedIndex; S < V && 50 > l; S++)
                                    u.options[S].selected && (R[Q] = u.options[S].text,
                                    L[Q] = S,
                                    Q++,
                                    l++);
                                c = e(c, "bf", L.join(","), 1);
                                c = e(c, "bg", R.join("<dlm>"), 1)
                            }
                            c = e(c, "ac", u.checked);
                            "checkbox" != k || u.checked || (c += "&ac=false");
                            if (u.title || u.alt)
                                G = u.title ? u.title : u.alt,
                                80 < G.length && (G = G.substring(0, 80) + "..."),
                                c = e(c, "ie", G, 1);
                            "button" == h && (C = le(u))
                        }
                        if (u.form) {
                            var X = Jc(u.form)
                              , Y = Kc(u.form);
                            c = e(c, "tu", X, 1);
                            c = e(c, "uv", Y, 1)
                        }
                        if (jb) {
                            var ba = ca(u.type) + ";" + ca(u.name) + ";" + ca(u.id) + ";"
                              , aa = Wb[ba];
                            F(aa) && (c = e(c, "uw", aa, 1))
                        }
                    }
                    try {
                        !G && u && u.childNodes && 1 == u.childNodes.length && 3 == u.childNodes[0].nodeType && (G = le(u),
                        c = e(c, "ie", G, 1))
                    } catch (I) {}
                    c = e(c, "al", r);
                    c = e(c, "am", w);
                    var W, ha = Ad(u, c, !0);
                    c = ha.updatedProperties;
                    W = ha.parentAnchor;
                    c = e(c, "aH", W, 1);
                    if (Ge)
                        if (u) {
                            r = "";
                            var ga = u.attributes;
                            if (ga)
                                for (var u = 0, da = ga.length; u < da; u++)
                                    0 == ga[u].nodeName.indexOf("data-") && (r = r + H(ga[u].nodeName) + "=" + H(ga[u].nodeValue) + ";");
                            B = r
                        } else
                            B = "";
                    c = e(c, "wk", B, 1);
                    c = f ? e(c, "ap", "textchange") : e(c, "ap", a.type);
                    var T = a.type;
                    "blur" != T && (c += If(x, y, p, v));
                    k || (k = "");
                    h || (h = "");
                    f && (T = "textchange");
                    P = a.keyCode;
                    if (fa || me) {
                        !Ga(k) || "blur" != T && "change" != T && "input" != T || (T = "keyup");
                        a: {
                            B = T;
                            p = h;
                            v = n;
                            x = g;
                            y = m;
                            var ga = k, da = c, u = "", U;
                            if (Ga(ga) || 13 == P) {
                                var ja;
                                if (B) {
                                    try {
                                        B = B.toLowerCase()
                                    } catch (I) {
                                        A(I, "isTextEvent")
                                    }
                                    ja = "keypress" == B || "keydown" == B || "keyup" == B || "textchange" == B || "input" == B
                                } else
                                    ja = !1;
                                if (ja)
                                    if ("" == Ka) {
                                        Ka = da;
                                        N = "" + p + x + v + y;
                                        U = pa[N];
                                        q != U && (La[N] = 1);
                                        Z = q;
                                        qa = x;
                                        ta = p;
                                        ra = v;
                                        sa = y;
                                        xa = ga;
                                        Ma.elementIdentifier = N;
                                        Ma.textValue = q;
                                        break a
                                    } else if (N == "" + p + x + v + y && 13 != P) {
                                        Z = q;
                                        U = pa[N];
                                        q != U && (La[N] = 1);
                                        qa = x;
                                        ta = p;
                                        ra = v;
                                        sa = y;
                                        xa = ga;
                                        Ma.elementIdentifier = N;
                                        Ma.textValue = q;
                                        break a
                                    } else
                                        u = da;
                                else if (Qf(ga) && N == "" + p + x + v + y) {
                                    Z = q;
                                    U = pa[N];
                                    q != U && (La[N] = 1);
                                    qa = x;
                                    ta = p;
                                    ra = v;
                                    sa = y;
                                    xa = ga;
                                    Ma.elementIdentifier = N;
                                    Ma.textValue = q;
                                    break a
                                }
                            }
                            if ("" != Ka) {
                                var ma = Ka.replace("&ap=keyup", "&ap=textchange"), ea;
                                U = pa["" + ta + qa + ra + sa];
                                var ka = La["" + ta + qa + ra + sa];
                                if ("password" == xa || Z != U || ka)
                                    ea = Xb("textchange", qa, ra, sa, ma, Z),
                                    -1 != Ka.indexOf("&at=TEXTAREA") && (Z = Pf("" + ta + qa + xa + ra + sa, "textchange", Z)),
                                    "0" != ea ? "block" != ea && (Z != pa[N] || "password" == xa || ka) && K("T", ea.fullEventString) : fa && (kb || (Z = "***"),
                                    (Z != pa[N] || "password" == xa || ka) && K("T", ma, Z)),
                                    La["" + ta + qa + ra + sa] = 0;
                                "" != u && 13 != P ? (Ka = u,
                                N = p + x + v + y,
                                U = pa[N],
                                q != U && (La[N] = 1),
                                Z = q,
                                qa = x,
                                ta = p,
                                ra = v,
                                xa = ga,
                                sa = y) : (N = Ka = "",
                                La["" + ta + qa + ra + sa] = 0,
                                sa = xa = ra = ta = qa = Z = "")
                            }
                        }
                        if ("blur" == a.type || "change" == a.type && (f || Ga(k)) || "input" == a.type)
                            return
                    }
                    var ia;
                    if ("keyup" != "" + a.type)
                        ia = "";
                    else {
                        var la = Rf(a)
                          , oa = gc[la];
                        F(gc[la]) && delete gc[la];
                        ia = F(oa) ? D - oa : -1
                    }
                    -1 != ia && (c += "&ui=" + ia);
                    if ("click" == a.type || "dblclick" == a.type)
                        T = gh(k, h);
                    var na = Xb(T, g, n, m, c, C, P, a);
                    "0" != na ? "block" != na && K(b, na.fullEventString) : eh(b, k, h, T) && (Ga(k) && (kb && "password" != k ? (c = e(c, "cb", P),
                    c = Jf(c, a)) : C = "***"),
                    K(b, c, C));
                    "C" == b && (W ? (ne = !0,
                    nb && Za && (a = !0,
                    t && !xe(document.domain, W) && (a = !1),
                    a && (window[d + "navSent"] = !0,
                    ya = W))) : ne = !1)
                } catch (I) {
                    A(I, "handle_event")
                }
            }
        }
        function Pf(a, b, c) {
            if (null == c || null == b)
                return "#N";
            var d = "#N";
            try {
                if ("textchange" == b) {
                    var e = Sf[a]
                      , d = null == e ? "#V" + c : Tf(e, c);
                    Sf[a] = c
                } else
                    "keyup" == b && (e = Uf[a],
                    d = null == e ? "#V" + c : Tf(e, c),
                    Uf[a] = c)
            } catch (h) {
                A(h, "compressTextEvent")
            }
            return d
        }
        function Tf(a, b) {
            for (var c = "#N", d = a.length, e = b.length, h = 0, h = 0; h != d && h != e && a.charAt(h) == b.charAt(h); h++)
                ;
            if (h == d)
                h != e && (c = "#A" + b.substring(h, b.length));
            else {
                for (c = c = 0; d - c > h && e - c > h && a.charAt(d - c - 1) == b.charAt(e - c - 1); c++)
                    ;
                e -= c;
                d -= c;
                c = "";
                e > h && (c = b.substring(h, e));
                c = "#I" + h + "-" + d + "-" + c
            }
            return c
        }
        function kh(a) {
            Wa = 1;
            Oa && K("B", "&ap=beforeunload");
            Gc();
            Xa() || Sb(!0)
        }
        function Vf() {
            if (X) {
                try {
                    Q[d + "sACW"].active = !1
                } catch (a) {}
                if (td)
                    try {
                        Q[d + "sACW"][B] = !1
                    } catch (a) {}
            }
        }
        function lh(a) {
            try {
                t && $e(),
                V = 1,
                g[qb] = !1,
                Vf()
            } catch (b) {}
        }
        function Wf(a, b) {
            var c = a;
            try {
                for (; c; ) {
                    if (c.href && ("a" == ("" + c.tagName).toLowerCase() || "area" == ("" + c.tagName).toLowerCase()))
                        return b ? c.href : c;
                    if (c === ib(c))
                        break;
                    c = ib(c)
                }
            } catch (d) {}
            return null
        }
        function mh(a) {
            if ("_blank" == a)
                return null;
            if ("_top" == a)
                return window.top;
            if ("_parent" == a)
                return window.parent;
            if ("_self" == a)
                return window;
            var b = window;
            if (a == b.name)
                return b;
            try {
                for (; b != window.top; ) {
                    if (a == b.name)
                        return b;
                    b = b.parent
                }
            } catch (c) {}
            return null
        }
        function ff() {
            try {
                if (ya)
                    window[d + "tGW"] && (window[d + "tGW"].location.href = ya);
                else {
                    var a = window[d + "tGW"].document.getElementById(d + "navForm");
                    a && a.submit()
                }
            } catch (b) {
                A(b, "executeNavigation")
            }
        }
        function nh() {
            Pd = !0;
            ff()
        }
        function oh(a, b) {
            if (!a)
                return !1;
            var c = ("" + a).toLowerCase();
            if (0 == c.indexOf("javascript:") || 0 == c.indexOf("mailto:") || 0 == a.indexOf("javascript:") || -1 != a.indexOf("#") && (c = a.indexOf("#"),
            -1 == c ? c = !1 : (c = a.substring(0, c),
            c = 0 == ("" + location.href).indexOf(c) ? !0 : !1),
            c))
                return !1;
            window[d + "tGW"] = b;
            if (!document.attachEvent)
                return !0;
            c = "";
            try {
                ya = null;
                c = b.document.createElement("FORM");
                if (!c)
                    return !1;
                c.id = d + "navForm";
                c.method = "GET";
                b.document.body.appendChild(c);
                var f, e = "", h, g = a.indexOf("?");
                -1 < g ? (f = a.substring(0, g),
                e = a.substring(g + 1, a.length)) : f = a;
                if (f)
                    c.action = f;
                else
                    return b.document.body.removeChild(c),
                    !1;
                if (e)
                    for (h = e.split("&"),
                    f = 0; f < h.length; f++) {
                        var k = h[f];
                        if (k) {
                            var n = k.split("=");
                            if (2 != n.length)
                                return document.body.removeChild(c),
                                !1;
                            var q = b.document.createElement("INPUT");
                            q.type = "HIDDEN";
                            q.name = n[0];
                            q.value = n[1];
                            c.appendChild(q)
                        }
                    }
                return !0
            } catch (m) {
                try {
                    b.document.body.removeChild(c)
                } catch (p) {}
                return !1
            }
        }
        function oe(a, b) {
            if (!(a && a.which && 1 < a.which || (Ja(a, "C", b),
            a && a.metaKey || a && a.ctrlKey || !nb || !Za)))
                a: {
                    var c = a;
                    try {
                        if (Za && (c || (c = window.event),
                        c)) {
                            var f = "";
                            c.target ? f = c.target : c.srcElement && (f = c.srcElement);
                            if (f && window[d + "navSent"]) {
                                var e = Wf(f, !1);
                                if (!e || e && e.onclick)
                                    window[d + "navSent"] = !1,
                                    ya = "";
                                else {
                                    var h;
                                    if (e.target) {
                                        if (h = mh(e.target),
                                        null == h)
                                            break a
                                    } else
                                        h = window;
                                    ya == Wf(f, !0) && (oh(ya, h) ? (c.preventDefault ? c.preventDefault() : c.returnValue = !1,
                                    window[d + "dTO"] = window.setTimeout(nh, 500)) : (window[d + "navSent"] = !1,
                                    ya = ""))
                                }
                            }
                        }
                    } catch (g) {
                        window[d + "navSent"] = !1,
                        ya = ""
                    }
                }
        }
        function ph(a, b) {
            Ja(a, "F", b)
        }
        function Wc(a) {
            Ja(a, "G")
        }
        function Gg(a) {
            a || (a = window.event);
            var b = a.srcElement;
            b || (b = a.target);
            b && Ga(b.type) && Ja(a, "T", "", !0)
        }
        function Rf(a, b) {
            if (a.target)
                b = a.target;
            else if (a.srcElement)
                b = a.srcElement;
            else
                return "";
            return "" + a.keyCode + b.name + b.id + b.type
        }
        function Cb(a, b, c) {
            a || (a = window.event);
            a && ("keydown" == ("" + a.type).toLowerCase() ? (b = Rf(a),
            gc[b] || (gc[b] = (new Date).valueOf())) : (b = a.keyCode,
            qh != b && rh != b && sh != b && Ja(a, "T", c)))
        }
        function id(a) {
            "mouseover" == a.type && th ? Ja(a, "M") : "mousedown" != a.type && "mouseup" != a.type || Ja(a, "M")
        }
        function uh() {
            try {
                try {
                    var a = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");
                    try {
                        a.AllowScriptAccess = "always"
                    } catch (b) {
                        return "6,0,0"
                    }
                } catch (b) {}
                return (new ActiveXObject("ShockwaveFlash.ShockwaveFlash")).GetVariable("$version")
            } catch (b) {
                try {
                    if (navigator.mimeTypes["application/x-shockwave-flash"].enabledPlugin)
                        return (navigator.plugins["Shockwave Flash 2.0"] || navigator.plugins["Shockwave Flash"]).description
                } catch (c) {}
            }
            return "0,0,0"
        }
        function Xf() {
            var a = window
              , b = "";
            try {
                if (a[hc] && "AUTOSET" == a[hc])
                    try {
                        a.top.name || (a.top.name = pe),
                        a[hc] = a.top.name
                    } catch (d) {
                        b += "&ck=" + H(d.message)
                    }
                var c = -1
                  , f = document
                  , l = f.body
                  , h = l
                  , g = "not_available";
                f.compatMode && "css1compat" == ("" + f.compatMode).toLowerCase() && (h = f.documentElement);
                try {
                    g = a == a.top
                } catch (d) {}
                var k = [];
                try {
                    k = a.parent.frames
                } catch (d) {}
                try {
                    for (var n = k.length, q = 0; q < n; q++)
                        if (k[q] == a) {
                            c = q;
                            break
                        }
                } catch (d) {}
                b += "&bu=" + g;
                b = e(b, "ap", "loaddocument");
                k = g = 0;
                try {
                    a.screenLeft ? g = a.screenLeft : a.screenX && (g = a.screenX),
                    a.screenTop ? k = a.screenTop : a.screenY && (k = a.screenY)
                } catch (d) {}
                b = e(b, "ax", g);
                b = e(b, "ay", k);
                b = e(b, "aO", c, 1);
                b = e(b, "aQ", a.name, 1);
                try {
                    a.opener && (b = e(b, "aR", a.opener[hc], 1))
                } catch (d) {}
                try {
                    h && (b = e(b, "ao", h.scrollLeft),
                    b = e(b, "aA", h.scrollWidth),
                    b = e(b, "a%71", h.scrollTop),
                    b = e(b, "aC", h.scrollHeight),
                    b = e(b, "ad", h.clientLeft),
                    b = e(b, "ag", h.clientTop),
                    b = e(b, "aj", h.clientWidth),
                    b = e(b, "ak", h.clientHeight),
                    b = e(b, "aS", h.offsetLeft),
                    b = e(b, "aa", h.offsetTop),
                    b = e(b, "ab", window.innerHeight ? window.innerHeight : h.offsetHeight),
                    b = e(b, "aZ", window.innerWidth ? window.innerWidth : h.offsetWidth),
                    b = e(b, "vp", window.outerHeight),
                    b = e(b, "vr", window.outerWidth))
                } catch (d) {}
                b = e(b, "cg", f.domain, 1);
                l && (b = e(b, "ch", l.lang, 1));
                var b = e(b, "cp", f.lastModified, 1)
                  , b = e(b, "aW", a[hc], 1)
                  , a = 0
                  , m = f.documentElement
                  , c = "";
                if (m)
                    try {
                        (c = m.innerHTML) && (a = c.length + 13)
                    } catch (d) {}
                b = e(b, "cc", a);
                if (f.getElementsByTagName)
                    try {
                        b = e(b, "cj", 0 < f.getElementsByTagName("FRAMESET").length)
                    } catch (d) {}
                b = e(b, "vt", Cd);
                Oa && K("L", b);
                if (Oa && qe) {
                    var m = document
                      , b = navigator
                      , p = window.screen;
                    try {
                        f = "no info";
                        if (m.body)
                            try {
                                m.body.addBehavior && (m.body.addBehavior("#default#clientCaps"),
                                m.body.connectionType && (f = m.body.connectionType))
                            } catch (d) {}
                        m = "";
                        m = b.browserLanguage ? e(m, "aF", b.browserLanguage, 1) : e(m, "aF", b.language, 1);
                        m = b.userLanguage ? e(m, "aJ", b.userLanguage, 1) : e(m, "aJ", b.language, 1);
                        m = e(m, "bd", b.cookieEnabled, 1);
                        m = e(m, "ba", f, 1);
                        m += "&ap=navigatorinfo";
                        m = e(m, "ci", (new Date).getTimezoneOffset(), 1);
                        p && (m = e(m, "cl", p.height),
                        m = e(m, "cm", p.width),
                        m = e(m, "cn", p.availHeight),
                        m = e(m, "co", p.availWidth),
                        m = e(m, "zv", p.colorDepth, 1));
                        var v = uh()
                          , m = e(m, "vo", v, 1);
                        K("N", m)
                    } catch (d) {
                        A(d, "eN")
                    }
                }
            } catch (d) {
                A(d, "load_page_event")
            }
        }
        function vh(a, b, c) {
            if (!(9 < Yf || Wa || V || Ce(Ab) && t && ne)) {
                Yf++;
                var d = "&ap=error";
                try {
                    a && (d = a.message ? e(d, "a7", a.message, 1) : e(d, "a7", a, 1)),
                    d = e(d, "a8", b, 1),
                    d = e(d, "a9", c, 1),
                    K("E", d)
                } catch (l) {}
            }
        }
        function Zf() {
            "complete" != document.readyState || 10 <= $f || ($f++,
            K("R", "&ap=documentcomplete"))
        }
        function wh() {
            var a = document
              , b = a.body;
            a.compatMode && "css1compat" == ("" + a.compatMode).toLowerCase() && (b = a.documentElement);
            a = If(b.scrollLeft, b.scrollTop, null, null, !0);
            K("Z", a + "&ap=resize")
        }
        function D(a, b, c, d) {
            bb ? a.attachEvent("on" + b, c) : a.addEventListener && (d ? a.addEventListener(b, c, !1) : a.addEventListener(b, c, cb))
        }
        function ag(a, b) {
            var c = document
              , d = c.getElementsByTagName("*");
            d || (d = c.all);
            if (d)
                for (var c = 0, e = d.length; c < e; c++)
                    -1 < ",B,BODY,BLOCKQUOTE,DIV,EM,FONT,HR,HTML,I,LI,P,STRONG,TABLE,TR,TD,TH,TBODY,LABEL,PRE,UL,OL,SPAN,AREA,CENTER,SCROLLBAR,BR,H1,H2,H3,H4,H5,H6,VIDEO,AUDIO,CANVAS,".indexOf("," + d[c].tagName.toUpperCase() + ",") || D(d[c], a, b)
        }
        function yb(a) {
            a || (a = window.event);
            var b = a.target;
            b || (b = a.srcElement);
            if (b) {
                var c = bg(b)
                  , b = b.value;
                Ma.elementIdentifier == c && b == Ma.textValue || Ja(a, "T")
            }
        }
        function Qf(a) {
            a = ("," + a + ",").toLowerCase();
            return -1 < ",email,url,number,range,search,color,date,month,week,time,datetime,datetime-local,tel,".indexOf(a)
        }
        function pf(a) {
            try {
                a || (a = window.event);
                var b = a.srcElement;
                b || (b = a.target);
                if (b) {
                    var c = "" + ("" + b.tagName).toLowerCase() + b.name + b.id + va(b);
                    "password" == b.type ? pa[c] = "***" : Ga(b.type) && (Qf(b.type) && xh ? pa[c] = "" : pa[c] = b.value)
                }
            } catch (d) {}
        }
        function za(a, b) {
            b && (a += H(b));
            return a + ";"
        }
        function cg(a) {
            try {
                if (!a.addressType)
                    throw new Exception("address type not included");
                var b = H(a.addressType) + ";"
                  , b = za(b, a.company)
                  , b = za(b, a.line1)
                  , b = za(b, a.line2)
                  , b = za(b, a.line3)
                  , b = za(b, a.line4)
                  , b = za(b, a.city)
                  , b = za(b, a.region)
                  , b = za(b, a.postCode);
                return b = za(b, a.country)
            } catch (c) {
                A(c, "error processing client address object")
            }
        }
        function bg(a) {
            if (!a)
                return "";
            var b;
            b = "" + ("" + a.tagName).toLowerCase();
            b += a.name;
            b += a.id;
            return b += va(a)
        }
        function re() {
            try {
                Q[d + "sACW"][B] = !0
            } catch (c) {}
            if (X) {
                var a = "";
                try {
                    for (var b in Q[d + "sACW"])
                        "active" != b && 1 == Q[d + "sACW"][b] && (a = a + "," + b)
                } catch (c) {}
                "," == a.charAt(0) && (a = a.substring(1));
                a = e("", "ul", a, 1);
                K("c", a)
            }
            g.setTimeout(re, 1E4)
        }
        function dg(a) {
            try {
                return a.parent
            } catch (b) {
                return g
            }
        }
        function eg(a) {
            try {
                return a.sessionStorage.getItem(d + "test"),
                a.location.hostname != window.location.hostname || a.location.protocol != window.location.protocol || a.location.port != window.location.port ? !1 : !0
            } catch (b) {
                return !1
            }
        }
        function We() {
            if (t) {
                try {
                    if (Q && !Q.closed && Q[d + "sACW"] && 1 == Q[d + "sACW"].active)
                        return
                } catch (c) {}
                var a = g
                  , b = dg(a);
                for (eg(b) || (b = a); a != b; )
                    a = b,
                    b = dg(a),
                    eg(b) || (b = a);
                try {
                    Q = a,
                    Q == window ? (X = !0,
                    Q[d + "sACW"] = {
                        active: !0
                    }) : (X = !1,
                    Q[d + "sACW"] = {
                        active: !1
                    })
                } catch (c) {
                    X = !0,
                    Q = g,
                    Q[d + "sACW"] = {
                        active: !0
                    }
                }
            } else
                X = !0,
                Q = g
        }
        function fg() {
            if (window[d + "cfgAlreadyDirectedHandlerUse"])
                Xf(!0);
            else {
                window[d + "cfgAlreadyDirectedHandlerUse"] = !0;
                try {
                    if (t) {
                        try {
                            window.sessionStorage && window.sessionStorage.setItem(d + "useCors", g[d + "useCors"])
                        } catch (e) {
                            "Security error" == e.message && M()
                        }
                        We()
                    }
                    var a = (new Date).valueOf();
                    if (t) {
                        var b = x("eventQueueOwnerID");
                        af(!0);
                        !b && X && (z("eventsInPacketCounter", "0"),
                        yc(0, 0, 0, 0, 0, a, a, !0))
                    } else
                        yc(0, 0, 0, 0, 0, a, a, !0);
                    Xf(!0);
                    if (g[d + "pendingManualEvents"] && 0 < g[d + "pendingManualEvents"].length) {
                        for (var c = 0, f = g[d + "pendingManualEvents"].length; c < f; c++) {
                            var l = g[d + "pendingManualEvents"][c];
                            if ("basket" == l.eventTypeIdentifier)
                                window[d + "event"](l.payload);
                            else if ("click" == l.eventTypeIdentifier)
                                window[d + "click"](l.payload);
                            else if ("textchange" == l.eventTypeIdentifier)
                                window[d + "textchange"](l.payload);
                            else if ("formsubmit" == l.eventTypeIdentifier)
                                window[d + "formsubmit"](l.payload);
                            else
                                "jsondata" == l.eventTypeIdentifier && window.HSBCHKSendJsonData(l.payload)
                        }
                        g[d + "pendingManualEvents"] = []
                    }
                    if (window[d + "ContentIdArray"])
                        for (c = 0; c < window[d + "ContentIdArray"].length; c++) {
                            var h = window[d + "ContentIdArray"][c];
                            if (h) {
                                a = typeof h;
                                try {
                                    if ("string" == a)
                                        g[d + "variableStateChange"](d + "_RTP_ACTION", null, h, null, null, null, null, null, null, null, null, null, "f");
                                    else
                                        g[d + "reportContentAction"](h.actionId, h.ruleId, h.contentId, h.customId)
                                } catch (e) {}
                            }
                        }
                    if (sc) {
                        if (g[d + "queuedYoutubeReferences"] && 0 < g[d + "queuedYoutubeReferences"].length)
                            for (c = 0,
                            f = g[d + "queuedYoutubeReferences"].length; c < f; c++)
                                l = g[d + "queuedYoutubeReferences"][c],
                                window[d + "trackYouTubeIframePlayer"](l.playerRef, l.playerIdentifier);
                        try {
                            Tg()
                        } catch (e) {}
                        document.readyState ? ("complete" == document.readyState ? Sc(!0) : D(g, "load", zf, void 0),
                        Sc(!1),
                        g.setTimeout(vf, 5E3)) : (D(g, "load", zf, void 0),
                        Sc(!1))
                    }
                    Kb && g.setTimeout(Ff, 200);
                    (Pa || mb || ua || ea || fa) && g.setTimeout(mf, 200);
                    D(g, "beforeunload", kh, void 0);
                    D(g, "unload", lh, void 0);
                    Fe && D(g, "error", vh, void 0);
                    Kb && D(g, "resize", wh, void 0)
                } catch (e) {
                    A(e, "attachBasicHandlers")
                }
                try {
                    var J = g[d + "collectExclude"];
                    if (J) {
                        c = J;
                        c = c.replace(/\*/g, "%2a");
                        try {
                            for (var k = c.split(","), n = k.length, c = 0; c < n; c++) {
                                var q = k[c], q = pd(q), f = q = q.replace(/%2a/g, "*"), m, l = q;
                                m = "*" == l.charAt(l.length - 1) ? {
                                    isWildcard: !0,
                                    searchVal: l.substring(0, l.length - 1)
                                } : {
                                    isWildcard: !1,
                                    searchVal: l
                                };
                                qd[f] = m
                            }
                        } catch (e) {
                            A(e, "processExclusions detail")
                        }
                    }
                } catch (e) {
                    A(e, "processExclusions")
                }
                y = document;
                if (y.body) {
                    try {
                        Kb && ("complete" == y.readyState ? Zf() : D(y, "readystatechange", Zf, !0));
                        D(y, "click", oe, void 0);
                        D(y, "dblclick", ph, void 0);
                        if (ea || fa)
                            D(y, "keyup", Cb, void 0),
                            D(y, "keydown", Cb, void 0);
                        pc && D(y, "mousedown", id, void 0);
                        Jb && ag("mouseover", id);
                        rd && D(y, "mouseup", id, void 0);
                        sd && (Je(),
                        vd(),
                        yd(),
                        "complete" == y.readyState ? zd() : D(g, "load", zd, void 0));
                        Mb && (Uc(),
                        Zd(),
                        be());
                        for (var k = 0, p = jd.length; k < p; k++)
                            C(jd[k]) || yh.push(jd[k]);
                        for (var p = n = k = !1, q = 0, v = kd.length; q < v; q++)
                            if ("" != kd[q]) {
                                var r = kd[q].split(":");
                                m = 0;
                                try {
                                    m = parseInt(r[3])
                                } catch (e) {}
                                fe.push({
                                    sourceName: r[0],
                                    sourceID: r[1],
                                    sourceClass: r[2],
                                    configFlags: m
                                });
                                0 < (m & ge) && (ea || fa || (n = !0),
                                me = !0);
                                0 < (m & he) && (ea || fa || (n = !0));
                                0 < (m & ie) && (lb || (k = !0),
                                ee = !0);
                                0 < (m & je) && (Pa || (k = !0),
                                Hf = !0);
                                0 < (m & ke) && (Jb || (p = !0))
                            }
                        n && (D(y, "keyup", Cb, void 0),
                        D(y, "keydown", Cb, void 0));
                        if (k)
                            for (var v = 0, w = y.forms.length; v < w; v++)
                                lb || of(y.forms[v]);
                        p && ag("mouseover", id)
                    } catch (e) {
                        A(e, "addEventHandlers")
                    }
                    td && ("complete" == y.readyState ? re() : D(g, "load", re, void 0));
                    U(!0);
                    Ye()
                }
            }
        }
        var d = svn
          , g = window
          , y = document
          , tb = stcp
          , Cc = sssl
          , aa = g[d + "sn"]
          , B = g[d + "wid"]
          , da = g[d + "ln"]
          , pe = g[d + "windowID"]
          , S = g[d + "svId"];
        window[d + "isReinit"] = !1;
        if (!g[d + "nCSd"])
            if (window[d + "doCelebrusInsertInvocation"] = function() {
                if (!window[d + "celebrusInsertInvocationToken"])
                    if (window[d + "celebrusInsertInvocationToken"] = !0,
                    window[d + "isReinit"]) {
                        if (window[d + "pollForReset"])
                            window[d + "pollForReset"](!0)
                    } else
                        CelebrusCsa(!0)
            }
            ,
            !(F(aa, 0) && F(B, 0) && F(da, 0) && F(pe) || window[d + "celebrusInsertInvocationToken"]))
                g.setTimeout(CelebrusCsa, 50);
            else if (ve || !window[d + "celebrusInsertInvocationToken"])
                if (0 <= aa && 0 <= B)
                    if (we(),
                    g[d + "TCP"] && tb != g[d + "TCP"])
                        ba("Mismatch between TCP Collection URLs for SpeedTrapInsert and JavascriptInsert", "Detected Illegal State");
                    else if (g[d + "SSL"] && Cc != g[d + "SSL"])
                        ba("Mismatch between SSL Collection URLs for SpeedTrapInsert and JavascriptInsert", "Detected Illegal State");
                    else {
                        var Ya = g[d + "aCI"]
                          , qb = d + "oTP";
                        g[qb] = !0;
                        window[d + "lstActv"] = (new Date).valueOf();
                        var zh = location, wa = d + "iAy", Qe = g[d + "dbId"], Gb = g[d + "contentKey"], Yf = 0, Mf = !1, Nd = g[d + "idl"], Od = g[d + "sST"], ef = g[d + "mST"], ya;
                        window[d + "navSent"] = !1;
                        var oa = 3
                          , Ab = "" + navigator.userAgent
                          , Cd = !1
                          , $f = 0
                          , ee = !1
                          , Hf = !1
                          , og = /^[a-z0-9]+$/i
                          , V = 0
                          , Rb = 0
                          , Wa = 0
                          , qd = {};
                        if (g[d + "getInputs"] || g[d + "multiAttribJsRules"] || g[d + "jsRules"] || g[d + "contentRules"] || g[d + "regExRules"])
                            Cd = !0;
                        var Ae = ["tz=", "ud="]
                          , Ba = g[d + "cfg"];
                        g[d + "getConfig"] = function() {
                            return F(da, 0) ? Ba : -2
                        }
                        ;
                        var Oa, oc, ea, kb, Jb, pc, rd, lb, ua, sd, qc, fa, Kb, Lb, Fe, Pa, mb, rc, sc, jb, td, nb, t, Mb, Ge, Ca = 1900, ma = Ca - 10, Da = Ca, Ee = Da;
                        De();
                        window[d + "deleteSessionCookie"] = function() {
                            window.CelebrusLoggingUtils && window.CelebrusLoggingUtils.logApiCall("deleteSessionCookie");
                            if (document.cookie) {
                                var a = new Date;
                                a.setFullYear(a.getFullYear() - 1);
                                if (window[d + "SC"])
                                    window[d + "SC"](Ya + "=0", a.toGMTString(), "", "", "", "", "", !0)
                            } else
                                try {
                                    window.sessionStorage && window.sessionStorage.removeItem(Ya)
                                } catch (b) {}
                        }
                        ;
                        for (var ic = g[d + "jsRules"], ic = Eb(ic), ic = R(ic), gg = ic.split(";"), tc = [], ug = R("%5E%5C*%2B%24"), O = 0, jc = gg.length; O < jc; O++) {
                            var I = gg[O].split("?");
                            if (4 == I.length) {
                                I[0] = R(I[0]);
                                I[1] = R(I[1]);
                                I[2] = R(I[2]);
                                I[3] = R(I[3]);
                                var Ah = I[2].split(".")
                                  , hg = {
                                    accessMethod: I[0],
                                    identifierString: I[1],
                                    watchPropertyArray: Ah,
                                    watchProperty: I[2],
                                    isJsonStringify: "true" == I[3]
                                };
                                sg(hg) && (tc[O] = hg)
                            }
                        }
                        for (var xd = [], Qa = [], Ie = {}, kc = g[d + "regExRules"], kc = Eb(kc), kc = R(kc), ig = kc.split(";"), Bd = [], O = 0, jc = ig.length; O < jc; O++) {
                            var Aa = ig[O].split("?");
                            if (4 == Aa.length) {
                                Aa[1] = R(Aa[1]);
                                Aa[3] = R(Aa[3]);
                                for (var se = 0, jg = [], kg = [], lg = Aa[3].split("&"), te = 0, Bh = lg.length; te < Bh; te++) {
                                    var mg = lg[te].split("="), ld;
                                    try {
                                        var md = mg[1];
                                        md && (md = pd(md));
                                        var Ch = parseInt(md);
                                        (ld = mg[0]) && (ld = pd(ld));
                                        jg[se] = Ch;
                                        kg[se] = ld;
                                        se++
                                    } catch (a) {}
                                }
                                Bd[O] = {
                                    expressionString: Aa[1],
                                    attributeString: Aa[2],
                                    idString: Aa[0],
                                    returnIndicesArray: jg,
                                    returnNamesArray: kg
                                }
                            }
                        }
                        var lc = g[d + "contentRules"]
                          , lc = Eb(lc)
                          , lc = R(lc)
                          , uc = lc.split(";")
                          , Ke = {}
                          , T = [];
                        g[d + "variableStateChange"] = function(a, b, c, d, g, h, t, k, n, q, m, p, v) {
                            v || (v = "P");
                            try {
                                var r = ""
                                  , r = e(r, "an", a, 1)
                                  , r = e(r, "ai", b, 1)
                                  , r = e(r, "av", c, 1)
                                  , r = e(r, "at", d, 1)
                                  , r = e(r, "ub", g, 1)
                                  , r = e(r, "aT", h, 1)
                                  , r = e(r, "ux", t, 1)
                                  , r = e(r, "tu", k, 1)
                                  , r = e(r, "uv", n, 1)
                                  , r = e(r, "uy", q, 1)
                                  , r = e(r, "uz", m, 1)
                                  , r = e(r, "va", p, 1);
                                L(v, r)
                            } catch (w) {}
                        }
                        ;
                        var Ac = 0
                          , Fd = 0
                          , Gd = 0
                          , Hd = 0
                          , Ua = 0
                          , Va = 0
                          , Fc = 0
                          , pb = 0
                          , ka = "tcp";
                        "https:" == Ra() && (ka = "ssl");
                        var ob = {}
                          , ha = new Me("lastQueuePointer")
                          , na = new Me("lastProcessPointer");
                        g[wa] = [];
                        var Ec = !1, Ue = 0, Of = -1, Ob = "", Rd = -1 < Ab.indexOf("Opera Mini") || -1 < Ab.indexOf("Opera Mobi"), Dc = Rd || -1 < Ab.indexOf("Bolt"), Ld = !Rd, X = !0, Q, zc = 0, ne = !1, Pb = 0, df = !1, Ne = d + "ForceSecure", Sa = 0, Ef = 0, Nb = !1, xc = "https";
                        if ("http:" == zh.protocol.toLowerCase())
                            for (jc = y.forms.length,
                            O = 0; O < jc && !Sa; O++) {
                                var ng = y.forms[O];
                                ng && Oe(ng)
                            }
                        "http:" == Ra() && (xc = "http");
                        if (!g[Ne] && Sa && !rc)
                            throw g[qb] = !1,
                            ba("Detected mixed-mode environment", "Configuration prevents mixed-mode collection"),
                            Error("Detected mixed-mode environment - configuration prevents mixed-mode collection");
                        var yg = tb + "/" + B + "/"
                          , zg = "" + da + "!" + aa
                          , Fc = (new Date).valueOf()
                          , Va = (new Date).valueOf()
                          , Kd = ""
                          , ub = [];
                        window[d + "eQI"] = function() {
                            window.CelebrusLoggingUtils && window.CelebrusLoggingUtils.logApiCall("eventQueueIdle");
                            return Bc() ? !1 : !0
                        }
                        ;
                        window[d + "dCB"] = function(a, b) {
                            try {
                                if (0 < a)
                                    if (b) {
                                        var c = b - (new Date).valueOf() + a;
                                        0 >= c ? Tb() : window.setTimeout(Tb, c)
                                    } else
                                        window.setTimeout(Tb, a);
                                else
                                    Tb()
                            } catch (d) {}
                        }
                        ;
                        if (window[d + "dCBVal"])
                            window[d + "dCB"](window[d + "dCBVal"], window[d + "dCBValTS"]);
                        var rb = !1
                          , sb = !1
                          , vb = ""
                          , Hc = 0
                          , Ub = -1;
                        window[d + "flushEvents"] = function(a, b, c) {
                            window.CelebrusLoggingUtils && window.CelebrusLoggingUtils.logApiCall("flushEvents");
                            try {
                                rb = !0;
                                vb = a;
                                sb = !1;
                                Ub = (new Date).valueOf();
                                Hc = b;
                                if (c && (a = 0,
                                Bc()))
                                    for (; Bc(1) && 50 > a; )
                                        Jd(),
                                        a++;
                                Gc();
                                vb && -1 != Ub && window.setTimeout(hf, 10)
                            } catch (d) {}
                        }
                        ;
                        var nf = d + "fAP"
                          , Wb = {}
                          , Qd = 0;
                        window[d + "pollForReset"] = function(a) {
                            var b = window;
                            if (a || !window[d + "celebrusInsertInvocationToken"]) {
                                b[d + "isReady"] = 1;
                                aa = b[d + "sn"];
                                B = b[d + "wid"];
                                S = b[d + "svId"];
                                we();
                                da = b[d + "ln"];
                                Ba = b[d + "cfg"];
                                Nd = b[d + "idl"];
                                window[d + "isReinit"] = !1;
                                De();
                                pe = b[d + "windowID"];
                                oa = 3;
                                Qe = b[d + "dbId"];
                                Gb = b[d + "contentKey"];
                                b[d + "oTP"] = !0;
                                Pb = 0;
                                0 != Ba && fg();
                                if (0 < ub.length) {
                                    a = ub;
                                    for (var b = 0, c = a.length; b < c; b++) {
                                        var e = a[b];
                                        ia(e.sendVal, e.isLoadPageEvt, e.evtCode)
                                    }
                                    ub = []
                                }
                                if (jb)
                                    for (Qd = 0,
                                    a = document,
                                    b = 0,
                                    c = a.forms.length; b < c; b++)
                                        (e = a.forms[b]) && d + "navForm" != e.id && lf(e);
                                sd && (xd = [],
                                Qa = [],
                                a = T && 0 == T.length,
                                T = [],
                                Je(),
                                vd(),
                                a && yd(),
                                zd());
                                af()
                            }
                        }
                        ;
                        window[d + "doResetCSA"] = function() {
                            window[d + "isReinit"] = !0;
                            window[d + "celebrusInsertInvocationToken"] = !1;
                            g[d + "cfgAlreadyDirectedHandlerUse"] = !1;
                            changeControlTracker = {};
                            textChangeControlTracker = {};
                            g[d + "isReady"] = 0;
                            aa = g[d + "sn"] = -1;
                            B = g[d + "wid"] = -1;
                            da = g[d + "ln"] = -1;
                            Vf()
                        }
                        ;
                        window[d + "stopEvents"] = function() {
                            window.CelebrusLoggingUtils && window.CelebrusLoggingUtils.logApiCall("stopEvents");
                            g[d + "oTP"] = !1
                        }
                        ;
                        var Dg = new RegExp(R("(%5Ba-zA-Z0-9%5D*)"),"g")
                          , Be = !1
                          , nc = []
                          , xb = []
                          , ab = []
                          , ja = [];
                        window[d + "formsubmit"] = function(a) {
                            try {
                                mb && Vb(a, !0)
                            } catch (b) {}
                        }
                        ;
                        var Yb = [];
                        Yb.qt_play = "playing";
                        Yb.qt_pause = "paused";
                        Yb.qt_ended = "stopped";
                        Yb.qt_timechanged = "seeking";
                        var Ng = [, "stopped", "paused", "playing", "seeking", "seeking", "buffering", "waiting", "mediaEnded", "transitioning", "ready", "reconnecting"]
                          , qf = "stopped contacting buffering playing paused seeking busy".split(" ");
                        qf.trans = "transitioning";
                        var Qg = ["stopped", "playing", "paused", "buffering", , "ready"]
                          , Zb = {}
                          , uf = !1
                          , Mc = []
                          , eb = []
                          , Rc = []
                          , la = []
                          , Sd = !1
                          , Nc = ""
                          , Wd = {}
                          , Pc = {}
                          , nd = {};
                        g[d + "mediaEvent"] = function(a, b, c, d, g, h, t, k) {
                            null != nd[g + d] && "paused" == nd[g + d].eventType && "playing" == a && (b = nd[g + d].playheadVal);
                            nd[g + d] = {
                                eventType: a,
                                playheadVal: b
                            };
                            var n = "&ap=SC";
                            "mediaEnded" == a && (b = h);
                            t && -1 != t && (b = t);
                            t = b;
                            g ? Ha(g, c, P(t)) : d && Ha(d, c, P(t));
                            t = null;
                            g ? t = eb[g] : d && (t = eb[d]);
                            n = e(n, "tf", P(t), 1);
                            n = e(n, "td", a, 1);
                            n = e(n, "te", P(b), 1);
                            n = e(n, "ah", c, 1);
                            n = e(n, "an", d, 1);
                            n = e(n, "ai", g, 1);
                            n = e(n, "to", P(h), 1);
                            k && (n = e(n, "tw", k, 1));
                            L("A", n)
                        }
                        ;
                        var Ud = !1
                          , Qc = 0;
                        window[d + "trackYouTubeIframePlayer"] = function(a, b) {
                            Rg(a, b)
                        }
                        ;
                        var Tc = {}
                          , bc = {}
                          , Xd = {}
                          , Yd = g[d + "fbRules"]
                          , hb = g[d + "gpRules"];
                        hb || (hb = "");
                        var hb = Eb(hb)
                          , hb = R(hb)
                          , ec = hb.split(";")
                          , Vc = ""
                          , ae = "";
                        if (0 < ec.length)
                            for (O = 0; O < ec.length && !Vc; O++)
                                try {
                                    var ue = ec[O].split("&");
                                    2 == ue.length && (Vc = ue[0],
                                    ae = ue[1])
                                } catch (a) {}
                        var ah = g[d + "twRules"]
                          , Y = []
                          , dc = []
                          , cc = !1
                          , $d = !1;
                        g[d + "twitterAnywhereTweet"] = function(a, b) {
                            try {
                                if (Mb) {
                                    var c = "&ap=twitter"
                                      , d = window.sessionStorage ? x("twD") : "";
                                    d && "-1" != d && (c = e(c, "vc", d, 1));
                                    K("m", c, a)
                                }
                            } catch (g) {}
                        }
                        ;
                        g[d + "gplusAuthResponse"] = function(a) {
                            try {
                                a ? ch() : Bb()
                            } catch (b) {}
                        }
                        ;
                        var ce = !1;
                        g[d + "plusOne"] = function(a) {
                            window.CelebrusLoggingUtils && window.CelebrusLoggingUtils.logApiCall("plusOne event");
                            try {
                                if (Mb) {
                                    var b = "&ap=googleplus";
                                    "" + a.href != location.href && (b = e(b, "ah", "" + a.href));
                                    b = Fa("r", b, "" + a.state);
                                    dc[dc.length] = b;
                                    Df()
                                }
                            } catch (c) {}
                        }
                        ;
                        g[d + "linkedInShare"] = function(a) {
                            window.CelebrusLoggingUtils && window.CelebrusLoggingUtils.logApiCall("linkedInShare event");
                            try {
                                if (Mb) {
                                    var b = "&ap=linkedin";
                                    "" + a != location.href && (b = e(b, "ah", "" + a));
                                    K("s", b)
                                }
                            } catch (c) {}
                        }
                        ;
                        var Za = !1
                          , Pd = !1
                          , cb = g[d + "doCapture"]
                          , Lc = F(y.addEventListener)
                          , Dh = F(y.attachEvent)
                          , bb = !Lc && F(y.attachEvent);
                        Dh && !cb && (bb = !0,
                        Lc = !1);
                        try {
                            g.setTimeout(dh, 10)
                        } catch (a) {}
                        try {
                            g[d + "cct"] && g.setTimeout(Tb, g[d + "cct"])
                        } catch (a) {}
                        var ih = 1
                          , jh = 2
                          , hh = 4
                          , qh = 16
                          , rh = 17
                          , sh = 18
                          , gc = {};
                        if (Oa)
                            try {
                                g[d + "cOP"] = g.open,
                                "" != "" + g.open && (g.open = function(a, b, c, e) {
                                    var l = arguments.length
                                      , h = "blocked"
                                      , t = "&au="
                                      , t = a ? t + H(a) : t + "none"
                                      , t = t + "&ap=popup"
                                      , l = 0 == l ? g[d + "cOP"]() : 1 == l ? g[d + "cOP"](a) : 2 == l ? g[d + "cOP"](a, b) : 3 == l ? g[d + "cOP"](a, b, c) : g[d + "cOP"](a, b, c, e);
                                    try {
                                        l.closed || (h = "visible")
                                    } catch (k) {}
                                    L && Oa && L("L", t + ("&cu=" + h));
                                    return l
                                }
                                )
                            } catch (a) {
                                ba(a.message, "Exception wrapping open function")
                            }
                        var hc = d + "TWID"
                          , qe = !1;
                        F(g[d + "qNI"]) ? g[d + "qNI"] && (qe = !0) : g[d + "set"] && (qe = !0);
                        var de = 0, fc = 0, Gf = d + "iAP", Ic, Eh = d + "queueUserEvent", Fh = d + "flashEvent", Sf = {}, Uf = {}, pa = {}, Ma = {
                            elementIdentifier: 0,
                            textValue: ""
                        }, La = {}, Ka = "", N = "", Z = "", qa = "", ta = "", ra = "", sa = "", xa = "", me = !1, th = !0, Yc, Xc, $c, Zc, bd, ad, gd, hd, cd, dd, ed, fd;
                        Yc = Xc = $c = Zc = bd = ad = gd = hd = cd = dd = ed = fd = -1;
                        var Db = g[d + "exceptionRules"]
                          , Db = Eb(Db)
                          , Db = R(Db)
                          , kd = [];
                        "" != Db && (kd = Db.split(";"));
                        var Kf = 2, ge = 65536, Lf = 32768, he = 8, fb = 16, ie = 2048, je = 33554432, ke = 256, jd;
                        jd = [Kf, ge, Lf, he, fb, ie, 4096, je, ke];
                        var yh = []
                          , fe = []
                          , xh = -1 < Ab.indexOf("Opera")
                          , gb = window[d + "ExcludeNameSpace"]
                          , gb = gb ? gb + ";v;cvml;gm_v;" : ";v;cvml;gm_v;";
                        0 == !gb.indexOf(";") && (gb = ";" + gb);
                        g[Eh] = function(a, b) {
                            window.CelebrusLoggingUtils && window.CelebrusLoggingUtils.logApiCall("userEvent");
                            L("V", "&ap=client&ct=" + H(b), a)
                        }
                        ;
                        g[d + "SendJsonData"] = function(a) {
                            window.CelebrusLoggingUtils && window.CelebrusLoggingUtils.logApiCall("jsonData");
                            var b = a;
                            if ("string" !== typeof a) {
                                if ("undefined" === typeof JSON) {
                                    window.CelebrusLoggingUtils && window.CelebrusLoggingUtils.error("Cannot convert JavaScript object to JSON; no data will be sent");
                                    return
                                }
                                b = JSON.stringify(a)
                            }
                            L("x", "&ap=client&ct=" + H(b))
                        }
                        ;
                        g[Fh] = function(a, b, c, d) {
                            if (0 == Ba)
                                return "true";
                            fh(a, c, d) && ia("FE=F" + b);
                            return "true"
                        }
                        ;
                        g[d + "reportContentAction"] = function(a, b, c, d) {
                            a = e("", "uy", a, 1);
                            a = e(a, "uz", b, 1);
                            a = e(a, "va", c, 1);
                            a = e(a, "we", d, 1);
                            L("f", a)
                        }
                        ;
                        window[d + "event"] = function(a) {
                            window.CelebrusLoggingUtils && window.CelebrusLoggingUtils.logApiCall("basket API Event");
                            try {
                                var b = "FE=T", b = e(b, "aD", (new Date).valueOf()), c = !1, d;
                                for (d in a) {
                                    var g = d, h;
                                    "shippingAddress" == d ? (g = "vv",
                                    h = cg(a[d])) : "billingAddress" == d ? (g = "vw",
                                    h = cg(a[d])) : ("targetContainer" == d && (g = "ap"),
                                    h = a[d]);
                                    var t = H(g)
                                      , k = e(b, t, h, 1);
                                    k.length < Ee ? b = k : c = !0
                                }
                                c && (b += "&ic=true");
                                ia(b)
                            } catch (n) {
                                A(n, "client tag event")
                            }
                        }
                        ;
                        window[d + "click"] = function(a) {
                            if (a) {
                                window.CelebrusLoggingUtils && window.CelebrusLoggingUtils.logApiCall("Click Event");
                                try {
                                    var b = {
                                        type: "click"
                                    };
                                    b.target = a;
                                    a.tagName || (a.tagName = "BODY");
                                    oe(b, "&up=true")
                                } catch (c) {}
                            }
                        }
                        ;
                        window[d + "textchange"] = function(a) {
                            if (a) {
                                window.CelebrusLoggingUtils && window.CelebrusLoggingUtils.logApiCall("Text Change Event");
                                try {
                                    var b = {
                                        type: "keyup"
                                    };
                                    b.target = a;
                                    var c = bg(a);
                                    pa[c] = "";
                                    La[c] = 1;
                                    N == c && (Z = Ka = "");
                                    Cb(b, "", "&up=true")
                                } catch (d) {}
                            }
                        }
                        ;
                        window[d + "formsubmit"] = function(a) {
                            window.CelebrusLoggingUtils && window.CelebrusLoggingUtils.logApiCall("Form Submit Event");
                            try {
                                mb && Vb(a, !0)
                            } catch (b) {}
                        }
                        ;
                        if (bb || !cb)
                            window[d + "captureEvent"] = function(a) {
                                try {
                                    var b = ("" + a.type).toLowerCase();
                                    "click" == b ? oe(a) : "keyup" != b && "keydown" != b || !ea && !fa || Cb(a)
                                } catch (c) {}
                            }
                            ;
                        window[d + "gHW"] = function() {
                            if (Q)
                                return Q
                        }
                        ;
                        0 != Ba && fg();
                        g[d + "isReady"] = 1
                    }
                else
                    0 > aa && window.CelebrusLoggingUtils && window.CelebrusLoggingUtils.logUnlicensedPage(location.href)
    }
    if (CelebrusCsa)
        try {
            CelebrusCsa()
        } catch (ve) {}
    ;
}
HSBCHKiBd();
