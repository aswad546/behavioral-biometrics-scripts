//Script found on NuData demo site June 12th
//https://interactivefidemo.nudatasecurity.com/signin
var ndjsStaticVersion = "sync-1"
  , nslyyidtyi = {};
function nsbopifkz() {
    var a = "";
    if (window._phantom || window.callPhantom || window.__phantomas)
        a += "p";
    window.Buffer && (a += "n");
    window.emit && (a += "c");
    window.spawn && (a += "r");
    window.webdriver && (a += "s");
    if (window.domAutomation || window.domAutomationController)
        a += "b";
    return a
}
var nslgf = {};
function nsgukkeb(a) {
    a = nstuk(a);
    var b = [], c = 0, d = {
        r: a.r,
        sid: a.sid,
        wt: a.wt
    }, e;
    for (e in a)
        if (a.hasOwnProperty(e))
            if (a[e]) {
                var f = a[e]
                  , g = e.length + f.toString().length;
                2E3 < g ? (g = {
                    r: a.r,
                    sid: a.sid,
                    wt: a.wt
                },
                g[e] = f,
                b.push(nsbopifkzi.stringify(g))) : 2E3 < g + c ? (b.push(nsbopifkzi.stringify(d)),
                d = {
                    r: a.r,
                    sid: a.sid,
                    wt: a.wt
                },
                d[e] = f,
                c = g) : (d[e] = f,
                c += g)
            } else
                delete a[e];
    0 < c && b.push(nsbopifkzi.stringify(d));
    return b
}
var nsdwhx, nsviymjoy = -1;
function getEnabledEvents() {
    if (null !== nslyyid)
        return nslyyid;
    var a = nds.getListeners();
    nslyyid = {};
    if (NDS_LISTEN_NONE in a)
        return nslyyid;
    var b = a.hasOwnProperty(NDS_LISTEN_ALL), c;
    for (c in nsbopif)
        if (b || a.hasOwnProperty(c))
            for (var d = !0 === b ? a[NDS_LISTEN_ALL] : a[c], e = nsbopif[c], f = 0; f < e.length; f++)
                nslyyid[e[f]] = d;
    return nslyyid
}
var nsbopifk = -1
  , nsbopi = {};
function nsgukkebkh(a) {
    for (var b in a)
        if (a.hasOwnProperty(b)) {
            var c = a[b];
            c && c.call && c.apply && (a[b] = function() {}
            )
        }
}
function nscavjydje() {
    return parseInt((new Date).getTime() / 1E3, 10)
}
var nsgukk = {}
  , nscav = {}
  , nsgukkebk = {}
  , nsviymjoyg = {}
  , nslyyidt = [];
function nseyqlyr(a) {
    var b = [41, 8, 49, 48, 51, 44, 63, 0, 19, 61, 43, 63, 57, 15, 34, 6, 42, 59, 41, 19, 10, 45, 54, 0, 44, 34, 57, 36, 48]
      , c = "";
    if ("NDX:" === a.substring(0, 4)) {
        var d = !0;
        a = a.substring(4)
    } else
        d = !1,
        c = "NDX:";
    for (var e = 0, f = 0; f < a.length; f += 1) {
        var g = a.charCodeAt(f) - 32;
        0 <= g && 94 > g && (d && 64 > g && (g ^= b[e % b.length]),
        g += 47 + (d ? -1 : 1) * e * 31,
        g = (g % 94 + 94) % 94,
        !d && 64 > g && (g ^= b[e % b.length]),
        e++);
        c += String.fromCharCode(g + 32)
    }
    return c
}
var nsfkgjo = !1
  , nscavjy = "default"
  , nscavj = null
  , nslyyid = null
  , nds = window.ndsapi || (window.ndsapi = {})
  , nsdwhxu = null
  , numQueries = 0;
function attachEventListener(a, b, c, d) {
    a = nds.common.addEventListener(a, b, c, getEnabledEvents());
    null !== a && d(a)
}
function nsyohyfq(a) {
    return !0 === nsgukk.useNdx ? nseyqlyr(a) : nsejsnfwmi(a)
}
var returned = []
  , version = "null";
"{@VER:SION@}".replace(":", "") !== ndjsStaticVersion && (version = ndjsStaticVersion);
var ndsWidgetVersion = "2.3.1", nsviym;
function nspkx(a, b) {
    nsbopi[a] = b
}
function nstuky(a) {
    return "object" === typeof a && null !== a && !nsyohyf(a)
}
var nsviy = "NDSASESS";
function nstnagvv(a) {
    return a.concat("nBCXNxbjl145j")
}
var nsfkgjoq = "3600"
  , nsdwhxurq = "ndsi" + ndjsStaticVersion
  , nsfkgjoqr = "ndsid"
  , nsdwhxur = "nds-pmd"
  , nsfkgj = "widgetData"
  , nsdwhxurqd = []
  , nslgfnp = {
    addCallback: function() {},
    callAllCallbacks: function() {}
}
  , nsguk = function(a, b) {};
function nstna(a) {
    for (var b = [], c = 0; c < a.length; c++)
        -1 === b.indexOf(a[c]) && b.push(a[c]);
    return b
}
var nsgukke = function() {
    var a = new Date;
    return "ndsa" + Math.random().toString(36).substr(2, 16) + a.getTime().toString(36)
}
  , nslyyi = function() {
    for (var a = 0, b = document.domain, c = b.split("."), d = "_temp" + (new Date).getTime(); a < c.length - 1 && -1 === document.cookie.indexOf(d + "\x3d" + d); )
        b = c.slice(-1 - ++a).join("."),
        document.cookie = d + "\x3d" + d + ";domain\x3d" + b + ";";
    document.cookie = d + "\x3d; expires\x3dThu, 01 Jan 1970 00:00:01 GMT; domain\x3d" + b + ";";
    return b
};
function nseyqlyrf(a, b, c) {
    var d = nsukswwaaw([{
        type: "selector",
        value: 'input[name\x3d"' + b + '"]'
    }]);
    if (0 < d.length)
        for (a = 0; a < d.length; a++)
            d[a].value = c;
    else if (0 < a.length)
        for (var e = 0; e < a.length; ++e)
            d = a[e].querySelector("input[name\x3d" + b + "]"),
            null === d && (d = document.createElement("input"),
            d.setAttribute("name", b),
            d.setAttribute("type", "hidden"),
            a[e].appendChild(d)),
            d.setAttribute("value", c)
}
function nstuk(a) {
    var b = {
        r: Math.floor(1E6 * Math.random()) + 1E3,
        sid: nds.config.sessionId,
        p: nsbopifkz(),
        bd: nstnagv(),
        forceIP: nds.config.forceIP,
        dtrk: nds.config.doNotTrack,
        jsv: version,
        wt: "",
        wv: ndsWidgetVersion
    };
    nsgukk.gzrq && (b.gzrq = 1);
    switch (a) {
    case "i":
        b.ls = {};
        try {
            var c = window.localStorage.getItem("ndcd");
            null != c && (b.ls.ndcd = c)
        } catch (d) {}
        break;
    case "c":
        nslgf.hasOwnProperty("wt") && (b.wt = nslgf.wt);
        break;
    case "pmd":
        nslgf.hasOwnProperty("sid") && (b.sid = nslgf.sid),
        nsgukk.hasOwnProperty("pageModeConfig") && nsgukk.pageModeConfig.hasOwnProperty("wt") && (b.wt = nsgukk.pageModeConfig.wt)
    }
    nds.config.placement ? (b.wp = nds.config.placement,
    b.wpp = nds.config.placementPage) : b.href = window.location.href;
    nds.ndeb && (b.eb = nds.ndeb);
    nstukyivzx(a, b);
    "undefined" === typeof window.ndovStandaloneWidget || "c" !== a && "pmd" !== a || (b.gf = HashUtil.ndovGrabFields(nsviymjoyg));
    return b
}
function nsejsnf(a, b) {
    var c;
    if (nsyohyf(a) || nstukyi(a))
        for (c = 0; c < a.length; c += 1)
            b(a[c], c, a);
    else if (nstuky(a)) {
        for (e in a)
            Object.prototype.hasOwnProperty.call(a, e) && b(a[e], e, a);
        var d = nsejsnf.ie8extraEnums;
        for (c = 0; c < d.length; c += 1) {
            var e = d[c];
            Object.prototype.hasOwnProperty.call(a, e) && b(a[e], e, a)
        }
    }
}
nscavjydj && (ndwts = function() {}
);
nds.load = function(a) {
    if (nscavjydj)
        nsgukkebkh(nds),
        nsgukkebkh(nds.common),
        nsgukkebkh(nds.common.util),
        nds.send = function(a) {
            "function" === typeof a && a()
        }
        ;
    else {
        var b = function(a) {
            var b = {}, c;
            a = a.split("\x26");
            var d = 0;
            for (c = a.length; d < c; d++) {
                var e = a[d].split("\x3d");
                b[e[0]] = decodeURIComponent(e[1])
            }
            return b
        }
          , c = a.split("?");
        nds.config.queryParams = 1 < c.length ? b(c[1]) : {};
        "undefined" === typeof nsviym && (nsviym = c = c[0].replace(/\/sync\/js\/?$/, ""));
        c = nsviym;
        var d = function(a) {
            a = nstuk(a);
            for (var b in a)
                a.hasOwnProperty(b) && !a[b] && delete a[b];
            b = nsbopifkzi.stringify(a);
            b = nsyohyfq(b);
            return "q\x3d" + encodeURIComponent(b)
        }
          , e = function(a) {
            return (returned.length === g || -1 < returned.indexOf(!1)) && "function" === typeof a ? (a(),
            0 > returned.indexOf(!1) && (returned = []),
            !0) : !1
        };
        nds.getQueryArray = function(a) {
            var b = [];
            "string" === typeof a && "" !== a && (b = nsgukkeb(a));
            a = b.length;
            for (var c = [], d = 0; d < a; d++) {
                var e = nsyohyfq(b[d]);
                c.push(e)
            }
            return c
        }
        ;
        nds.config.sendTimeout = 5E3;
        nds.send = function(a) {
            nsamh("precomplete");
            if (!0 === nsgukk.eventModeEnabled) {
                returned = [];
                !1 === nsfkgjo && setTimeout(nds.init, 0);
                !0 === nsgukk.ndsidConfig.enable && nseyql();
                var b = nds.getQueryArray("c");
                g = b.length;
                for (var d = 0; d < g; d++)
                    (function() {
                        var n = "q\x3d" + encodeURIComponent(b[d])
                          , h = new Image
                          , k = null;
                        h.onerror = function() {
                            returned.push(!1);
                            !0 === e(a) && (a = null)
                        }
                        ;
                        h.onload = function() {
                            k && clearTimeout(k);
                            returned.push(!0);
                            !0 === e(a) && (a = null)
                        }
                        ;
                        nds.config.sendTimeout && (k = setTimeout(h.onerror, nds.config.sendTimeout));
                        h.src = c + "/complete/gif/?" + n
                    }
                    )()
            } else
                "function" === typeof a && a();
            nds.ndwtr()
        }
        ;
        nds.loadScript = function(a, b, c) {
            var d = document.getElementById(b);
            d && d.parentNode.removeChild(d);
            d = document.createElement("script");
            d.setAttribute("type", "text/javascript");
            d.setAttribute("src", a);
            d.setAttribute("id", b);
            nds.config.hasOwnProperty("cspNonce") && 0 < nds.config.cspNonce.length && d.setAttribute("nonce", nds.config.cspNonce);
            a = document.getElementsByTagName("script")[0];
            a.parentNode.insertBefore(d, a);
            "function" === typeof c && c(d)
        }
        ;
        nds.config.sessionId = null;
        nstukyiv(nds.config.q);
        null === nds.config.sessionId && ("undefined" !== typeof window.ndovStandaloneWidget ? nds.config.sessionId = nstukyivz(nsviy) : !0 === nsgukk.ndsidConfig.enable && (nsdwhxu = nstukyivz(nsfkgjoqr),
        nsejsn(nsdwhxu)));
        nds.init = function() {
            nslgfnp.callAllCallbacks();
            if ("application/json" === nscavjy)
                try {
                    var a = null;
                    null != XMLHttpRequest && (a = new XMLHttpRequest);
                    !0 === nsgukk.ndsidConfig.enable && nseyql();
                    a.open("GET", c + "/init/js/?" + d("i"));
                    a.setRequestHeader("Cache-Control", "max-age\x3d0");
                    a.setRequestHeader("Content-Type", "application/json");
                    a.send();
                    a.onreadystatechange = function() {
                        if (4 === a.readyState && 200 === a.status)
                            try {
                                var b = JSON.parse(a.response);
                                ndwti(b)
                            } catch (p) {}
                    }
                } catch (h) {}
            else
                !0 === nsgukk.ndsidConfig.enable && nseyql(),
                nds.loadScript(c + "/init/js/?" + d("i"), nsdwhxurq);
            nsfkgjo = !0;
            !0 === nsyohyf(nds.config.initCallbackList) && nsejsnf(nds.config.initCallbackList, function(a) {
                a()
            })
        }
        ;
        nds.reinit = function(a, b, c) {
            null != a && nds.setPlacement(a);
            b && nds.setPlacementPage(b);
            c && (nslyyidtyi.ipr.fm = c);
            nsuksw();
            nsamh("init");
            nstnag([]);
            nslyyidt && 0 !== nslyyidt.length ? n(nslyyidt) : nds.init()
        }
        ;
        if (nsgukkebk.hasOwnProperty("id") && 0 < nsyoh(nsgukkebk.id)) {
            returned = [];
            !0 === nsgukk.ndsidConfig.enable && nseyql();
            a = nsgukkeb("id");
            var f = null
              , g = a.length;
            for (b = 0; b < g; b++) {
                var m = nsyohyfq(a[b]);
                m = "rr\x3dsomething\x26q\x3d" + encodeURIComponent(m);
                var u = new Image;
                u.onerror = function() {
                    returned.push(!1);
                    !0 === e(cb) && (cb = null)
                }
                ;
                u.onload = function() {
                    f && clearTimeout(f);
                    returned.push(!0);
                    !0 === e(cb) && (cb = null)
                }
                ;
                nds.config.sendTimeout && (f = setTimeout(u.onerror, nds.config.sendTimeout));
                u.src = c + "/init/gif/?" + m
            }
        }
        var n = function(a) {
            nslgfnp.callAllCallbacks();
            nslgfnp = nds.common.createCallbackList();
            var b = -1;
            var c = nsukswwaaw(a);
            for (a = 0; a < c.length; a++)
                try {
                    var d = c[a];
                    var e = nds.common.addEventListener(d, "focus", nds.init);
                    nslgfnp.addCallback(e);
                    b++
                } catch (k) {}
            -1 < b && nseyq(c, nds.init);
            -1 === b && nds.init()
        };
        null == nslyyidt || 0 === nslyyidt.length ? nds.init() : n(nslyyidt)
    }
}
;
nds.getInputList = function() {
    return nslgf
}
;
nds.sendOnEvent = function(a, b) {
    a = document.getElementById(a);
    nds.common.addEventListener(a, b, nds.send)
}
;
nds.sendOnSubmit = function() {
    for (var a = document.getElementsByTagName("form"), b = 0; b < a.length; ++b)
        nds.common.addEventListener(a[b], "submit", nds.send)
}
;
nds.registerListeners = function(a) {
    function b(a, b) {
        !1 === nsbopif.hasOwnProperty(a) ? console.warn("Invalid event category used: '" + a + "'. Will be ignored.") : (null !== b && (!(b = parseInt(b)) || 0 >= b) && (console.warn("Invalid sampling rate used for event category: '" + a + "'. Default will be used."),
        b = null),
        !0 === nscavj.hasOwnProperty(a) && console.warn("Duplicate event category encountered: '" + a + "'."),
        nscavj[a] = b)
    }
    nscavj = {};
    nslyyid = null;
    !0 === nsyohyf(a) ? nsejsnf(a, function(a, d) {
        !0 === nstuky(a) ? nsejsnf(a, function(a, c) {
            b(c, a)
        }) : b(a, null)
    }) : null !== a && void 0 !== a && console.warn("Invalid event category argument used. No categories will be enabled.");
    0 === Object.keys(nscavj).length && (nscavj[NDS_LISTEN_NONE] = null)
}
;
nds.resetListeners = function() {
    nscavj = {};
    nslyyid = nscavj[NDS_LISTEN_ALL] = null
}
;
nds.getListeners = function() {
    null === nscavj && nds.resetListeners();
    return nscavj
}
;
nds.rebindListeners = function() {
    nsamh("rebind")
}
;
HashUtil.ndovGrabFields = function(a) {
    return "ndovGrabFields not initialized in default mode"
}
;
function nsuksw() {
    nds.config.hasOwnProperty("beforeInitQ") && nstukyiv(nds.config.beforeInitQ)
}
nds.setInitTargets = function(a) {
    nslyyidt = a
}
;
nds.addInitCallback = function(a) {
    !1 === nsyohyf(nds.config.initCallbackList) && (nds.config.initCallbackList = []);
    "function" === typeof a && -1 === nds.config.initCallbackList.indexOf(a) && nds.config.initCallbackList.push(a)
}
;
nds.removeAllInitCallbacks = function() {
    nds.config.initCallbackList = []
}
;
nds.setSessionId = function(a) {
    nds.config.sessionId = a
}
;
nds.setSessionIdFromCookie = function(a) {
    try {
        nds.setSessionId(nsamhnfki(a))
    } catch (b) {
        nds.setSessionId(null)
    }
}
;
nds.setSessionIdFromSessionStorage = function(a) {
    try {
        nds.setSessionId(window.sessionStorage.getItem(a))
    } catch (b) {
        nds.setSessionId(null)
    }
}
;
function validateSessionIdCookie(a) {
    if ("string" !== typeof a)
        return !1;
    for (var b = ["\x3d", ":", "\r", "\n"], c = 0; c < b.length; c++)
        if (-1 !== a.indexOf(b[c]))
            return !1;
    return !0
}
nds.setSessionIdFromURL = function(a) {
    "undefined" !== typeof nds.config.queryParams && a in nds.config.queryParams ? (a = nds.config.queryParams[a],
    nds.setSessionId(a ? a : null)) : nds.setSessionId(null)
}
;
function nsyohy(a, b) {
    if (0 < nsyoh(a)) {
        var c = nstnagvvl(b);
        0 === nsyoh(c) && (c = document.getElementsByTagName("form"));
        a.hasOwnProperty("sid") && null == a.sid && (a.sid = "");
        a = nsbopifkzi.stringify(a);
        nsgukk.hasOwnProperty("pageModeConfig") && !0 === nsgukk.pageModeConfig.encodeData && (a = nsyohyfq(a));
        nseyqlyrf(c, nsdwhxur, a);
        nsyohyfqpw(b)
    }
}
function nstnagv() {
    return nspkxyn() + ":" + nstnagvvln() + ":" + window.outerWidth + ":" + window.outerHeight + ":" + screen.availWidth + ":" + screen.availHeight
}
function nstukyivzx(a, b) {
    if (nsgukkebk.hasOwnProperty(a))
        for (var c in nsgukkebk[a])
            nsgukkebk[a].hasOwnProperty(c) && nslgf.hasOwnProperty(c) && nslgf[c] && (b[c] = nslgf[c])
}
nds.setSessionIdFromDOM = function(a) {
    try {
        nds.setSessionId(document.getElementById(a).value)
    } catch (b) {
        nds.setSessionId(null)
    }
}
;
function nsamh(a, b) {
    for (var c in nsbopi)
        if (nsbopi.hasOwnProperty(c)) {
            var d = nsbopi[c];
            if (d.hasOwnProperty(a))
                (0,
                d[a])(nslyyidtyi[c], b)
        }
}
nds.setSessionIdFromJS = function(a) {
    if (a in window) {
        var b = a = window[a];
        "function" === typeof a && (b = a());
        nds.setSessionId(b ? b : null)
    } else
        nds.setSessionId(null)
}
;
function HashUtil() {}
nds.setForceIP = function(a) {
    nds.config.forceIP = a
}
;
nds.setPlacement = function(a) {
    nds.config.placement = a
}
;
nds.setPlacementPage = function(a) {
    nds.config.placementPage = a
}
;
function nsyohyf(a) {
    return "[object Array]" === Object.prototype.toString.apply(a)
}
nds.setTimeout = function(a) {
    isNaN(a) ? nds.config.sendTimeout = null : nds.config.sendTimeout = +a
}
;
nds.setForceUA = function(a) {
    nds.config.forceUA = a
}
;
nds.setCspNonceForInit = function(a) {
    nds.config.cspNonce = a
}
;
nds.doNotTrack = function() {
    nds.config.doNotTrack = !0
}
;
nds.bindNewFields = function(a) {
    nsamh("bind", a);
    nstnag([])
}
;
nds.setPageModeFields = function(a) {
    if (null !== a && nsyohyf(a) && 0 < a.length) {
        for (var b = 0; b < nsdwhxurqd.length; b++)
            nsdwhxurqd[b].parentNode.removeChild(nsdwhxurqd[b]);
        nsdwhxurqd = [];
        nstnag(a)
    }
}
;
nds.clear = function() {
    nsamh("clear")
}
;
function nsuksww(a, b, c) {
    nsejsnf(a, function(d, e) {
        c = b(c, d, e, a)
    });
    return c
}
function nsamhnfk(a) {
    return (new Date(a)).getMinutes()
}
nds.stop = function() {
    nsamh("stop");
    nslgfnp.callAllCallbacks()
}
;
nds.ndwtr = function() {
    nsamh("reinit")
}
;
nds.setFormFieldData = function(a, b) {
    nslgf[a] = b
}
;
nds.setApiBaseUrl = function(a) {
    nsviym = a
}
;
nds.getApiBaseUrl = function() {
    return nsviym
}
;
"undefined" == typeof nds && (nds = window.ndsapi || (window.ndsapi = {}));
nds.common = {};
nds.common.util = {};
function nstnag(a) {
    if (nsgukk.hasOwnProperty("pageModeConfig") && !0 === nsgukk.pageModeConfig.enable) {
        var b = nsgukk.pageModeConfig
          , c = {};
        b.hasOwnProperty("options") && (c = b.options,
        null !== a && nsyohyf(a) && 0 < a.length && (c && !1 === c.hasOwnProperty("formbind") && (c.formbind = []),
        c.formbind = Array.prototype.concat.call(c.formbind, a)));
        a = nstuk("pmd");
        a = nsyohyfqp(a);
        nsyohy(a, c)
    }
}
nds.common.bi = {};
function nsejsn(a) {
    nslgf.sid = a;
    if (!0 === nsgukk.ndsidConfig.enable && null != a) {
        var b = nsgukk.ndsidConfig.options.hasOwnProperty("formbind") && nsgukk.ndsidConfig.options.formbind ? nsukswwaaw(nsgukk.ndsidConfig.options.formbind) : document.getElementsByTagName("form");
        nseyqlyrf(b, nsfkgjoqr, a)
    }
}
nds.common.querySelectorAll = function(a) {
    return document.querySelectorAll(a)
}
;
document.querySelectorAll || (nds.common.querySelectorAll = function(a) {
    return []
}
);
nds.common.addEventListener = function(a, b, c, d) {
    if ("object" === typeof d && !1 === d.hasOwnProperty(b))
        return null;
    try {
        a.addEventListener ? a.addEventListener(b, c, !1) : a.attachEvent && a.attachEvent("on" + b, c)
    } catch (e) {}
    return function() {
        nds.common.removeEventListener(a, b, c)
    }
}
;
function nsyohyfqp(a) {
    var b = {};
    b[nsfkgj] = {};
    var c;
    for (c in a)
        if (a.hasOwnProperty(c)) {
            var d = a[c];
            "sid" === c && c in nsgukkebk.pmd || "wt" === c || "gzrq" === c ? b[c] = d : c in nsgukkebk.pmd && (b[nsfkgj][c] = d)
        }
    nsgukkebk.hasOwnProperty("pmd") && "fmid"in nsgukkebk.pmd && (b.fmid = "nds-pmd");
    return b
}
nds.common.removeEventListener = function(a, b, c) {
    try {
        a.removeEventListener ? a.removeEventListener(b, c, !1) : a.detachEvent && a.detachEvent("on" + b, c)
    } catch (d) {}
}
;
nds.common.createCallbackList = function() {
    var a = [];
    return {
        addCallback: function(b) {
            b && a.push(b)
        },
        callAllCallbacks: function() {
            for (var b = 0; b < a.length; b += 1)
                (0,
                a[b])();
            a = []
        }
    }
}
;
nds.common.util.truncTo = function(a, b, c) {
    c = "undefined" !== typeof c ? c : "TRUNC";
    if ("string" !== typeof a)
        return a;
    var d = b - c.length;
    return 1 > d ? a.substring(0, b) : a.length > d ? a.substring(0, d) + c : a
}
;
nds.common.util.quickHash = function(a) {
    var b = 0, c = 0, d;
    if (0 === a.length)
        return "00000000";
    var e = 0;
    for (d = a.length; e < d; e++) {
        var f = a.charCodeAt(e);
        0 === e % 2 ? (b = (b << 5) - b + f,
        b |= 0) : (c = (c << 5) - c + f,
        c |= 0)
    }
    0 > b && (b = 4294967295 + b + 1);
    0 > c && (c = 4294967295 + c + 1);
    return b.toString(16) + c.toString(16)
}
;
nds.common.bi.getScreenFingerprint = function() {
    var a = "";
    window.screen && (a += [window.screen.width, window.screen.height].sort().join("x"),
    a += " " + window.screen.colorDepth);
    return a
}
;
function nsejsnfwm(a) {
    var b = nsgukke();
    if (!1 === validateSessionIdCookie(b))
        return null;
    if ("undefined" !== typeof window.ndovStandaloneWidget || !0 === nsgukk.clientSideCookie) {
        var c = "object" === typeof nsgukk.ndsidConfig && "boolean" === typeof nsgukk.ndsidConfig.secure ? nsgukk.ndsidConfig.secure : !1;
        if (null === nsamhnfki(a)) {
            var d = a + "\x3d" + b + ";max-age\x3d" + nsfkgjoq + "; domain\x3d ." + nslyyi() + " ; path\x3d/";
            !0 === c && (d += "; secure; SameSite\x3dNone");
            document.cookie = d
        }
        null === nsamhnfki(a) && nsuks(a, b)
    }
    return b
}
nds.common.util.getComputedStyle = function(a, b) {
    if (document.defaultView && document.defaultView.getComputedStyle)
        return document.defaultView.getComputedStyle(a, null).getPropertyValue(b);
    try {
        if (a.currentStyle)
            return b = b.replace(/-(\w)/g, function(a, b) {
                return b.toUpperCase()
            }),
            a.currentStyle[b]
    } catch (c) {}
}
;
nds.common.bi.getScreenInfo = function() {
    var a = "";
    "undefined" !== typeof window.screen && ("undefined" !== typeof window.screen.width && "undefined" !== typeof window.screen.height && (a += window.screen.width + "x" + window.screen.height),
    "undefined" !== typeof window.screen.availWidth && "undefined" !== typeof window.screen.availHeight && (a += " " + window.screen.availWidth + "x" + window.screen.availHeight),
    "undefined" !== typeof window.screen.colorDepth && (a += " " + window.screen.colorDepth),
    "undefined" !== typeof window.screen.pixelDepth && (a += " " + window.screen.pixelDepth));
    return a
}
;
nds.common.bi.isFlashInstalled = function() {
    try {
        return new ActiveXObject("ShockwaveFlash.ShockwaveFlash"),
        !0
    } catch (a) {}
    try {
        if (void 0 != navigator.mimeTypes["application/x-shockwave-flash"] && navigator.mimeTypes["application/x-shockwave-flash"].enabledPlugin)
            return !0
    } catch (a) {}
    return !1
}
;
nds.common.bi.getDeviceLanguage = function() {
    return window.navigator.userLanguage || window.navigator.language || window.navigator.browserLanguage
}
;
function nsukswwaaw(a) {
    var b = [], c;
    for (c in a)
        if (a.hasOwnProperty(c)) {
            var d = a[c];
            if ("string" === typeof d && document.getElementById(d))
                b.push(document.getElementById(d));
            else if (d.hasOwnProperty("type") && d.hasOwnProperty("value"))
                switch (d.type) {
                case "selector":
                    var e = [];
                    try {
                        e = nds.common.querySelectorAll(d.value)
                    } catch (f) {}
                    if (0 < e.length)
                        for (d.hasOwnProperty("index") && (e = [e[d.index]]),
                        d = 0; d < e.length; d += 1)
                            e[d] && b.push(e[d])
                }
        }
    return b
}
nds.common.bi.getDeviceTimezone = function() {
    var a = (new Date(2014,0,2)).getTimezoneOffset()
      , b = (new Date(2014,5,2)).getTimezoneOffset();
    return Math.max(a, b)
}
;
nds.common.bi.getPlugins = function() {
    var a = []
      , b = /([0-9]+)\.[0-9|.]+/g;
    if (window.ActiveXObject) {
        if (document.plugins && 0 < document.plugins.length)
            for (var c = 0; c < document.plugins.length; c++)
                a.push(document.plugins[c].src.replace(b, "$1"))
    } else
        try {
            if (navigator.plugins && 0 < navigator.plugins.length)
                for (c = 0; c < navigator.plugins.length; c++)
                    a.push(navigator.plugins[c].name.replace(b, "$1"))
        } catch (d) {
            a.push("denied")
        }
    0 < a.length && a.sort();
    b = "p";
    for (c = 0; c < a.length; c++)
        b += "," + a[c];
    return b
}
;
nds.common.bi.getWebGLInfo = function() {
    for (var a = {}, b = document.createElement("canvas"), c = ["webgl", "experimental-webgl", "moz-webgl", "webkit-3d"], d, e = 0; e < c.length; e++)
        try {
            if (d = b.getContext(c[e])) {
                a.ContextName = c[e];
                break
            }
        } catch (f) {}
    if (!(d && "getParameter"in d))
        return null;
    b = "VENDOR VERSION RENDERER SHADING_LANGUAGE_VERSION DEPTH_BITS MAX_VERTEX_ATTRIBS MAX_VERTEX_TEXTURE_IMAGE_UNITS MAX_VARYING_VECTORS MAX_VERTEX_UNIFORM_VECTORS MAX_COMBINED_TEXTURE_IMAGE_UNITS MAX_TEXTURE_SIZE MAX_CUBE_MAP_TEXTURE_SIZE NUM_COMPRESSED_TEXTURE_FORMATS MAX_RENDERBUFFER_SIZE MAX_VIEWPORT_DIMS ALIASED_LINE_WIDTH_RANGE ALIASED_POINT_SIZE_RANGE".split(" ");
    for (c = 0; c < b.length; c++)
        e = b[c],
        e in d && (a[e] = d.getParameter(d[e]));
    return a
}
;
function nstnagvvl(a) {
    var b = [];
    nsgukk.hasOwnProperty("pageModeConfig") && 0 < nsgukk.pageModeConfig.formbind.length && (b = Array.prototype.concat.call(b, nsukswwaaw(nsgukk.pageModeConfig.formbind)));
    a && a.hasOwnProperty("formbind") && a.formbind && (b = Array.prototype.concat.call(b, nsukswwaaw(a.formbind)));
    return b
}
nds.common.bi.getDeviceTouchSettings = function() {
    var a = {
        mtp: "NA"
    };
    "undefined" !== typeof navigator.maxTouchPoints ? a.mtp = navigator.maxTouchPoints : "undefined" !== typeof navigator.msMaxTouchPoints && (a.mtp = navigator.msMaxTouchPoints);
    a.ts = !1;
    "ontouchstart"in window && (a.ts = !0);
    a.te = !1;
    try {
        document.createEvent("TouchEvent"),
        a.te = !0
    } catch (b) {}
    return a
}
;
nds.common.bi.getCookiesEnabled = function(a) {
    var b = !0
      , c = "undefined" !== typeof navigator.cookieEnabled && navigator.cookieEnabled ? !0 : !1;
    if (1 == a)
        try {
            document.cookie = "ncookietest\x3d1; SameSite\x3dNone; Secure",
            b = -1 != document.cookie.indexOf("ncookietest\x3d"),
            document.cookie = "ncookietest\x3d1; expires\x3dThu, 01-Jan-1970 00:00:01 GMT; SameSite\x3dNone; Secure"
        } catch (d) {}
    return {
        tc: b,
        nc: c
    }
}
;
nds.common.bi.getHTML5CanvasSignature = function() {
    var a = "NA";
    try {
        var b = document.createElement("canvas");
        b.width = 200;
        b.height = 40;
        b.style.display = "inline";
        var c = b.getContext("2d");
        c.fillText("aBc#$efG~ \ude73\ud63d", 4, 10);
        c.fillStyle = "rgba(67, 92, 0, 0.5)";
        c.font = "18pt Arial";
        c.fillText("aBc#$~efG \ude73\ud63d", 8, 12);
        a = b.toDataURL()
    } catch (d) {}
    return a
}
;
nds.common.bi.getFontMetrics = function() {
    var a = [];
    try {
        for (var b = document.createElement("canvas").getContext("2d"), c = nds.common.bi.fontMetricsFontList, d = 0; d < c.length; d += 1) {
            b.font = '72px "' + c[d] + '"';
            var e = b.measureText("mmmmmmmmmmlli").width;
            a.push(e)
        }
    } catch (f) {}
    return a
}
;
nds.common.bi.getHTML5LocalStorage = function() {
    var a = !1;
    try {
        var b = window.localStorage;
        b.setItem("ndls", "ndls");
        b.removeItem("ndls");
        a = !0
    } catch (c) {}
    return a
}
;
nds.common.bi.getHTML5SupportedVideo = function() {
    var a = "fv";
    try {
        var b = document.createElement("video")
          , c = ["ogg", "mp4", "webm"];
        if ("undefined" !== typeof b)
            for (var d in c)
                c.hasOwnProperty(d) && "" != b.canPlayType("video/" + c[d]) && (a += "," + c[d])
    } catch (e) {}
    return a
}
;
function nstukyiv(a) {
    for (var b = 0; b < a.length; ++b) {
        var c = a[b];
        "function" === typeof c && c()
    }
}
nds.common.bi.getHTML5SupportedAudio = function() {
    var a = "fa";
    try {
        var b = document.createElement("audio")
          , c = ["mpeg", "ogg", "wav"];
        if ("undefined" !== typeof b)
            for (var d in c)
                c.hasOwnProperty(d) && "" != b.canPlayType("audio/" + c[d]) && (a += "," + c[d])
    } catch (e) {}
    return a
}
;
function nsyoh(a) {
    var b = 0;
    if (a instanceof Array)
        b = a.length;
    else
        for (var c in a)
            a.hasOwnProperty(c) && b++;
    return b
}
nds.common.bi.getPlatform = function() {
    var a = "NA";
    try {
        a = navigator.platform
    } catch (b) {}
    return a
}
;
nds.common.bi.getVendor = function() {
    var a = "NA";
    try {
        a = navigator.vendor
    } catch (b) {}
    return a
}
;
nds.common.bi.fontMetricsFontList = "monospace;sans-serif;serif;Andale Mono;Arial;Arial Black;Arial Hebrew;Arial MT;Arial Narrow;Arial Rounded MT Bold;Arial Unicode MS;Bitstream Vera Sans Mono;Book Antiqua;Bookman Old Style;Calibri;Cambria;Cambria Math;Century;Century Gothic;Century Schoolbook;Comic Sans;Comic Sans MS;Consolas;Courier;Courier New;Garamond;Geneva;Georgia;Helvetica;Helvetica Neue;Impact;Lucida Bright;Lucida Calligraphy;Lucida Console;Lucida Fax;LUCIDA GRANDE;Lucida Handwriting;Lucida Sans;Lucida Sans Typewriter;Lucida Sans Unicode;Microsoft Sans Serif;Monaco;Monotype Corsiva;MS Gothic;MS Outlook;MS PGothic;MS Reference Sans Serif;MS Sans Serif;MS Serif;MYRIAD;MYRIAD PRO;Palatino;Palatino Linotype;Segoe Print;Segoe Script;Segoe UI;Segoe UI Light;Segoe UI Semibold;Segoe UI Symbol;Tahoma;Times;Times New Roman;Times New Roman PS;Trebuchet MS;Verdana;Wingdings;Wingdings 2;Wingdings 3".split(";");
var nsbopifkzi;
nsbopifkzi || (nsbopifkzi = {});
Array.prototype.indexOf || (Array.prototype.indexOf = function(a, b) {
    var c = this.length >>> 0;
    b = Number(b) || 0;
    b = 0 > b ? Math.ceil(b) : Math.floor(b);
    for (0 > b && (b += c); b < c; b++)
        if (b in this && this[b] === a)
            return b;
    return -1
}
);
var nslyyidty = "ic"
  , NDS_LISTEN_FOCUS = "fc"
  , NDS_LISTEN_TOUCH = "to"
  , NDS_LISTEN_KEYBOARD = "kb"
  , NDS_LISTEN_DEVICE_MOTION_SENSORS = "dm"
  , NDS_LISTEN_MOUSE = "mo"
  , NDS_LISTEN_FORM = "fr"
  , NDS_LISTEN_ALL = "de"
  , NDS_LISTEN_NONE = "no";
function nsuks(a, b) {
    try {
        window.sessionStorage.setItem(a, b)
    } catch (c) {}
}
var nslgfnpyxj = "focus";
function nstnagvvln() {
    return window.innerWidth ? window.innerHeight : document.documentElement && document.documentElement.clientHeight ? document.documentElement.clientHeight : document.body && document.body.clientHeight ? document.body.clientHeight : null
}
var nsviymjo = "blur"
  , nslgfn = "touchstart";
function nseyq(a, b) {
    var c = 10
      , d = setInterval(function() {
        for (var e = 0; e < a.length; e += 1)
            try {
                var f = a[e];
                if (f && f.value && f.value !== f.defaultValue) {
                    b();
                    clearInterval(d);
                    return
                }
            } catch (g) {}
        --c;
        1 > c && clearInterval(d)
    }, 250);
    nslgfnp.addCallback(function() {
        clearInterval(d)
    })
}
var nslgfnpyx = "keydown";
function nsamhnfki(a, b) {
    return (b = document.cookie.match("(^|;)\\s*" + a + "\\s*\x3d\\s*([^;]+)")) ? b.pop() : null
}
var nscavjyd = "keyup";
function nseyql() {
    null == nds.config.sessionId && nds.setSessionIdFromCookie(nsfkgjoqr);
    null == nds.config.sessionId && nds.setSessionIdFromSessionStorage(nsfkgjoqr);
    null == nds.config.sessionId && null !== nsdwhxu && (nds.setSessionId(nsdwhxu),
    nsuks(nsfkgjoqr, nsdwhxu))
}
var nsfkg = "devicemotion"
  , nsfkgjoqrf = "deviceorientation"
  , nslyy = "mousemove"
  , nsbop = "click";
function nsukswwa(a, b) {
    if ("string" === typeof b) {
        var c = b;
        b = function(a) {
            return a[c]
        }
    }
    var d = nsyohyf(a) ? [] : nstuky(a) ? {} : void 0;
    nsejsnf(a, function(c, f) {
        d[f] = b(c, f, a)
    });
    return d
}
var nslgfnpy = "submit"
  , nsviymj = "change"
  , nsdwh = "input"
  , nsbopif = {};
nsbopif[NDS_LISTEN_FOCUS] = [nslgfnpyxj, nsviymjo];
nsbopif[NDS_LISTEN_TOUCH] = [nslgfn];
nsbopif[NDS_LISTEN_KEYBOARD] = [nslgfnpyx, nscavjyd];
nsbopif[NDS_LISTEN_DEVICE_MOTION_SENSORS] = [nsfkg, nsfkgjoqrf];
nsbopif[NDS_LISTEN_MOUSE] = [nslyy, nsbop];
function nsejsnfwmi(a) {
    return a.replace(/[A-Za-z]/g, function(a) {
        return String.fromCharCode(a.charCodeAt(0) + ("M" >= a.toUpperCase() ? 13 : -13))
    })
}
nsbopif[NDS_LISTEN_FORM] = [nslgfnpy, nsviymj, nsdwh];
var ndoIsKeyIncluded = function(a, b, c) {
    return -1 !== b.indexOf(a.key) || -1 !== c.indexOf(a.keyCode) ? !0 : !1
}
  , ndoIsModifierKey = function(a) {
    return ndoIsKeyIncluded(a, ["Shift", "Control", "Meta", "Alt", "CapsLock"], [16, 17, 91, 93, 18, 20])
};
function nstukyivz(a) {
    if (null == nds.config.sessionId) {
        var b = nsamhnfki(a);
        if (null == b) {
            try {
                b = window.sessionStorage.getItem(a)
            } catch (c) {
                b = null
            }
            null == b && (b = nsejsnfwm(a))
        }
        return b
    }
    return nds.config.sessionId
}
var ndoIsNavigationKey = function(a) {
    return ndoIsKeyIncluded(a, "Tab PageUp PageDown End Home ArrowLeft Left ArrowUp Up ArrowRight Right ArrowDown Down".split(" "), [9, 33, 34, 35, 36, 37, 38, 39, 40])
}
  , ndoIsEditingKey = function(a) {
    return ndoIsKeyIncluded(a, ["Insert", "Delete", "Backspace", "Del"], [45, 46, 8])
};
function nsyohyfqpw(a) {
    nsdwhxurqd = nsukswwaaw([{
        type: "selector",
        value: 'input[name\x3d"' + nsdwhxur + '"]'
    }])
}
var KEYBOARD_LOCATION = {
    STANDARD: 0,
    LEFT: 1,
    RIGHT: 2,
    NUMPAD: 3
}
  , KEY_TYPE_AND_LOCATION = {
    NORMAL_STANDARD: 0,
    MODIFIER_STANDARD: 4,
    NAVIGATION_STANDARD: 8,
    EDITING_STANDARD: 12
};
function nseyqlyrfu(a, b) {
    return a === b ? !0 : !1
}
var ndoGetKeyboardLocation = function(a) {
    a = a.location;
    var b = Object.keys(KEYBOARD_LOCATION).map(function(a) {
        return KEYBOARD_LOCATION[a]
    });
    return "undefined" === typeof a || -1 === b.indexOf(a) ? KEYBOARD_LOCATION.STANDARD : a
}
  , ndoGetKeyTypeAndLocationIndicator = function(a) {
    var b = ndoGetKeyboardLocation(a);
    return !0 === ndoIsModifierKey(a) ? KEY_TYPE_AND_LOCATION.MODIFIER_STANDARD + b : !0 === ndoIsNavigationKey(a) ? KEY_TYPE_AND_LOCATION.NAVIGATION_STANDARD + b : !0 === ndoIsEditingKey(a) ? KEY_TYPE_AND_LOCATION.EDITING_STANDARD + b : KEY_TYPE_AND_LOCATION.NORMAL_STANDARD + b
};
nsejsnf.ie8extraEnums = function() {
    return {
        toString: null
    }.propertyIsEnumerable("toString") ? [] : "toString toLocaleString valueOf hasOwnProperty isPrototypeOf propertyIsEnumerable constructor".split(" ")
}();
var ndoGetObjectKeys = function() {
    var a = Object.prototype.hasOwnProperty
      , b = !{
        toString: null
    }.propertyIsEnumerable("toString")
      , c = "toString toLocaleString valueOf hasOwnProperty isPrototypeOf propertyIsEnumerable constructor".split(" ")
      , d = c.length;
    return function(e) {
        if ("object" !== typeof e && ("function" !== typeof e || null === e))
            throw new TypeError("ndoGetObjectKeys called on non-object");
        var f = [], g;
        for (g in e)
            a.call(e, g) && f.push(g);
        if (b)
            for (g = 0; g < d; g++)
                a.call(e, c[g]) && f.push(c[g]);
        return f
    }
}();
function nsejsnfw() {
    if (nsgukk.hasOwnProperty("pageModeConfig") && !0 === nsgukk.pageModeConfig.enable) {
        var a = nsgukk.pageModeConfig;
        a.hasOwnProperty("inputFieldName") && 0 < a.inputFieldName.length && (nsdwhxur = a.inputFieldName);
        !0 === nsgukk.ndsidConfig.enable && nseyql();
        !1 === nsgukkebk.hasOwnProperty("pmd") && (nsgukkebk.pmd = {
            pmdModuleMissing: !0
        })
    }
}
function ndwti(a) {
    nsviymjoy = nscavjydje();
    nsbopifk = nscavjydje();
    nslgf.wt = a.fd.wt;
    nsgukk.hasOwnProperty("pageModeConfig") && nsgukk.pageModeConfig.hasOwnProperty("wt") && 0 === nsgukk.pageModeConfig.wt.length && nsgukk.pageModeConfig.hasOwnProperty("requireWidgetToken") && !0 === nsgukk.pageModeConfig.requireWidgetToken && (nsgukk.pageModeConfig.wt = nslgf.wt,
    nstnag([]));
    nsviymjoyg = a.gf;
    if (null != a.wab) {
        var b = a.wab;
        b = nsukswwaaw(b);
        for (var c in b) {
            var d = b[c];
            if (null != d) {
                var e = "FORM" === d.tagName ? "submit" : "click";
                nds.common.addEventListener(d, e, nds.send)
            }
        }
    }
    if (null != a.ls && (e = a.ls,
    d = ndoGetObjectKeys(e),
    b = nsyoh(e),
    0 < b))
        for (c = 0; c < b; c++)
            window.localStorage.setItem(d[c], e[d[c]]);
    if (null != a.cwd) {
        if ("undefined" == typeof document.addEventListener)
            return null;
        a.cwd.websiteId = a.wi;
        var f = a.cwd;
        null != f.pr && null == f.cp && nds.config.placement && nds.config.placementPage && (a = nds.config.placement + "." + nds.config.placementPage,
        c = f.pr,
        c[a] && (f.cp = c[a],
        f.cp.placement = nds.config.placement,
        f.cp.page = nds.config.placementPage));
        if (null != f.cp)
            if (null != f.cp.bindmethod && "manual" == f.cp.bindmethod)
                nds.callApi = function(a) {
                    nsguk(f, a)
                }
                ,
                nds.completeAndCallApi = function(a) {
                    nds.send(function() {
                        nds.callApi(a)
                    })
                }
                ;
            else
                for (b = null == f.cp.autobind ? document.getElementsByTagName("form") : nsukswwaaw(f.cp.autobind),
                c = 0; c < b.length; c++)
                    if (d = b[c],
                    null != d) {
                        var g = (a = "function" === typeof d.onsubmit) ? d.onsubmit : function() {
                            return !0
                        }
                        ;
                        e = "FORM" === d.tagName ? "submit" : "click";
                        (function(a, b, c, d) {
                            var e = function(n) {
                                var h = n || window.event;
                                h.preventDefault ? h.preventDefault() : h.returnValue = !1;
                                nsguk(f, function(n, k) {
                                    if (1 == c) {
                                        a.onsubmit = function() {}
                                        ;
                                        try {
                                            b(h)
                                        } catch (q) {}
                                    } else
                                        nds.common.removeEventListener(a, d, e);
                                    if (a.submit)
                                        try {
                                            a.submit()
                                        } catch (q) {
                                            a.constructor.prototype.submit.call(a)
                                        }
                                    else
                                        a.click()
                                })
                            };
                            !0 === c ? a.onsubmit = e(d) : nds.common.addEventListener(a, d, e)
                        }
                        )(d, g, a, e)
                    }
    }
    !0 === nsgukk.ndsidConfig.enable && (a = nsamhnfki(nsfkgjoqr),
    null !== a && (nds.setSessionIdFromCookie(nsfkgjoqr),
    nsuks(nsfkgjoqr, a)),
    nsejsn(nstukyivz(nsfkgjoqr)))
}
var nscavjydj = !1;
document.querySelector || (nscavjydj = !0);
function nstukyi(a) {
    return null !== a && ("object" === typeof a || "function" === typeof a) && "number" === typeof a.length && "undefined" !== typeof a.item
}
function nspkxyn() {
    return window.innerWidth ? window.innerWidth : document.documentElement && document.documentElement.clientWidth ? document.documentElement.clientWidth : document.body && document.body.clientWidth ? document.body.clientWidth : null
}
(function() {
    function a(a) {
        var b = [];
        b.push(nds.common.bi.getScreenInfo());
        b.push(nds.common.bi.getDeviceTimezone());
        b.push(nds.common.bi.getDeviceLanguage());
        b.push("bp1-" + nds.common.util.quickHash(nds.common.bi.getPlugins()));
        b.push(nds.common.bi.isFlashInstalled().toString());
        var d = a.rt || 128;
        b.push(nds.common.util.truncTo(document.referrer.replace(/\|/g, ""), d));
        a = a.ut || 512;
        b.push(nds.common.util.truncTo(navigator.userAgent.replace(/\|/g, ""), a));
        a = nds.common.bi.getWebGLInfo();
        null === a ? b.push("Not Supported") : b.push("wg1-" + nds.common.util.quickHash(nsbopifkzi.stringify(a)));
        a = "b2";
        for (d = 0; d < b.length; d++)
            a += "|" + b[d];
        return a
    }
    nspkx("di", {
        init: function(b) {
            nds = window.ndsapi || (window.ndsapi = {});
            if (nds.config.doNotTrack)
                nds.setFormFieldData("dnt", !0);
            else {
                var c = {}
                  , d = "NotAvail";
                "undefined" !== typeof navigator && "undefined" !== typeof navigator.userAgent && (d = navigator.userAgent);
                var e = window.ndsapi || (window.ndsapi = {});
                e.config && e.config.forceUA && (d = e.config.forceUA);
                d = d.replace(/([0-9]+\.[0-9]+)\.[0-9]+\.[0-9]+/g, "$1").replace(/([0-9]+\.[0-9]+)\.[0-9]+/g, "$1");
                d = d.replace(/([0-9]+_[0-9]+)_[0-9]+_[0-9]+/g, "$1").replace(/([0-9]+_[0-9]+)_[0-9]+/g, "$1");
                c.ua = d;
                c.sr = nds.common.bi.getScreenFingerprint();
                c.didtz = nds.common.bi.getDeviceTimezone().toString();
                d = nds.common.bi.getPlugins();
                c.bp = nds.common.util.quickHash(d);
                c.rbp = d;
                c.flv = nds.common.bi.isFlashInstalled().toString();
                c.fv = nds.common.bi.getHTML5SupportedVideo();
                c.fa = nds.common.bi.getHTML5SupportedAudio();
                c.hf = nds.common.util.quickHash(nds.common.bi.getHTML5CanvasSignature());
                c.pl = nds.common.bi.getPlatform();
                c.ve = nds.common.bi.getVendor();
                c.ft = nsbopifkzi.stringify(nds.common.bi.getDeviceTouchSettings());
                c.fc = nsbopifkzi.stringify(nds.common.bi.getCookiesEnabled(b.ac));
                c.fs = nds.common.bi.getHTML5LocalStorage().toString();
                c.wg = nds.common.util.quickHash(nsbopifkzi.stringify(nds.common.bi.getWebGLInfo()));
                c.fm = nds.common.util.quickHash(nds.common.bi.getFontMetrics().join(","));
                for (var f in c)
                    c.hasOwnProperty(f) && nds.setFormFieldData(f, c[f])
            }
            nds.setFormFieldData("bi", a(b))
        }
    })
}
)();
function nsukswwaa() {
    return 692441607
}
(function() {
    function a(a) {
        d.lastIndex = 0;
        return d.test(a) ? '"' + a.replace(d, function(a) {
            var b = g[a];
            return "string" === typeof b ? b : "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
        }) + '"' : '"' + a + '"'
    }
    function b(a) {
        return 10 > a ? "0" + a : a
    }
    function c(b, d) {
        var n = e
          , h = d[b];
        h && "object" === typeof h && "function" === typeof h.toNDJSON && (h = h.toNDJSON(b));
        "function" === typeof m && (h = m.call(d, b, h));
        switch (typeof h) {
        case "string":
            return a(h);
        case "number":
            return isFinite(h) ? String(h) : "null";
        case "boolean":
        case "null":
            return String(h);
        case "object":
            if (!h)
                return "null";
            e += f;
            var p = [];
            if ("[object Array]" === Object.prototype.toString.apply(h)) {
                var l = h.length;
                for (b = 0; b < l; b += 1)
                    p[b] = c(b, h) || "null";
                d = 0 === p.length ? "[]" : e ? "[\n" + e + p.join(",\n" + e) + "\n" + n + "]" : "[" + p.join(",") + "]";
                e = n;
                return d
            }
            if (m && "object" === typeof m)
                for (l = m.length,
                b = 0; b < l; b += 1) {
                    if ("string" === typeof m[b]) {
                        var g = m[b];
                        (d = c(g, h)) && p.push(a(g) + (e ? ": " : ":") + d)
                    }
                }
            else
                for (g in h)
                    Object.prototype.hasOwnProperty.call(h, g) && (d = c(g, h)) && p.push(a(g) + (e ? ": " : ":") + d);
            d = 0 === p.length ? "{}" : e ? "{\n" + e + p.join(",\n" + e) + "\n" + n + "}" : "{" + p.join(",") + "}";
            e = n;
            return d
        }
    }
    "function" !== typeof Date.prototype.toNDJSON && (Date.prototype.toNDJSON = function(a) {
        return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + b(this.getUTCMonth() + 1) + "-" + b(this.getUTCDate()) + "T" + b(this.getUTCHours()) + ":" + b(this.getUTCMinutes()) + ":" + b(this.getUTCSeconds()) + "Z" : null
    }
    ,
    String.prototype.toNDJSON = Number.prototype.toNDJSON = Boolean.prototype.toNDJSON = function(a) {
        return this.valueOf()
    }
    );
    var d = /[\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, e, f, g = {
        "\b": "\\b",
        "\t": "\\t",
        "\n": "\\n",
        "\f": "\\f",
        "\r": "\\r",
        '"': '\\"',
        "\\": "\\\\"
    }, m;
    "function" !== typeof nsbopifkzi.stringify && (nsbopifkzi.stringify = function(a, b, d) {
        var h;
        f = e = "";
        if ("number" === typeof d)
            for (h = 0; h < d; h += 1)
                f += " ";
        else
            "string" === typeof d && (f = d);
        if ((m = b) && "function" !== typeof b && ("object" !== typeof b || "number" !== typeof b.length))
            throw Error("nsbopifkzi.stringify");
        return c("", {
            "": a
        })
    }
    );
    "function" !== typeof nsbopifkzi.parse && (nsbopifkzi.parse = function() {
        var a, b, c = {
            '"': '"',
            "\\": "\\",
            "/": "/",
            b: "\b",
            f: "\f",
            n: "\n",
            r: "\r",
            t: "\t"
        }, d, e = function(c) {
            if (c && c !== b)
                throw new SyntaxError('nsbopifkzi.parse - Expected "' + c + '" instead of "' + b + '"');
            b = d.charAt(a);
            a += 1;
            return b
        }, f = function() {
            var a = "";
            "-" === b && (a = "-",
            e("-"));
            for (; "0" <= b && "9" >= b; )
                a += b,
                e();
            if ("." === b)
                for (a += "."; e() && "0" <= b && "9" >= b; )
                    a += b;
            if ("e" === b || "E" === b) {
                a += b;
                e();
                if ("-" === b || "+" === b)
                    a += b,
                    e();
                for (; "0" <= b && "9" >= b; )
                    a += b,
                    e()
            }
            var c = +a;
            return isFinite(c) ? c : "-" === a.charAt(0) ? -Infinity : Infinity
        }, g = function() {
            var a, d = "", k;
            if ('"' === b)
                for (; e(); ) {
                    if ('"' === b)
                        return e(),
                        d;
                    if ("\\" === b)
                        if (e(),
                        "u" === b) {
                            for (a = k = 0; 4 > a; a += 1) {
                                var q = parseInt(e(), 16);
                                if (!isFinite(q))
                                    break;
                                k = 16 * k + q
                            }
                            d += String.fromCharCode(k)
                        } else if ("string" === typeof c[b])
                            d += c[b];
                        else
                            break;
                    else
                        d += b
                }
            throw new SyntaxError("nsbopifkzi.parse - Bad string");
        }, k = function() {
            for (; b && " " >= b; )
                e()
        }, q = function() {
            switch (b) {
            case "t":
                return e("t"),
                e("r"),
                e("u"),
                e("e"),
                !0;
            case "f":
                return e("f"),
                e("a"),
                e("l"),
                e("s"),
                e("e"),
                !1;
            case "n":
                return e("n"),
                e("u"),
                e("l"),
                e("l"),
                null
            }
            throw new SyntaxError('nsbopifkzi.parse - Unexpected "' + b + '"');
        };
        var y = function() {
            k();
            switch (b) {
            case "{":
                a: {
                    var a = {};
                    if ("{" === b) {
                        e("{");
                        k();
                        if ("}" === b) {
                            e("}");
                            var c = a;
                            break a
                        }
                        for (; b; ) {
                            c = g();
                            k();
                            e(":");
                            a[c] = y();
                            k();
                            if ("}" === b) {
                                e("}");
                                c = a;
                                break a
                            }
                            e(",");
                            k()
                        }
                    }
                    throw new SyntaxError("nsbopifkzi.parse - Bad object");
                }
                return c;
            case "[":
                a: {
                    c = [];
                    if ("[" === b) {
                        e("[");
                        k();
                        if ("]" === b) {
                            e("]");
                            break a
                        }
                        for (; b; ) {
                            c.push(y());
                            k();
                            if ("]" === b) {
                                e("]");
                                break a
                            }
                            e(",");
                            k()
                        }
                    }
                    throw new SyntaxError("nsbopifkzi.parse - Bad array");
                }
                return c;
            case '"':
                return g();
            case "-":
                return f();
            default:
                return "0" <= b && "9" >= b ? f() : q()
            }
        };
        return function(c, e) {
            d = c;
            a = 0;
            b = " ";
            c = y();
            k();
            if (b)
                throw new SyntaxError("nsbopifkzi.parse - Syntax error");
            return "function" === typeof e ? function z(a, b) {
                var c, d = a[b];
                if (d && "object" === typeof d)
                    for (c in d)
                        if (Object.prototype.hasOwnProperty.call(d, c)) {
                            var k = z(d, c);
                            void 0 !== k ? d[c] = k : delete d[c]
                        }
                return e.call(a, b, d)
            }({
                "": c
            }, "") : c
        }
    }())
}
)();
(function() {
    var a = window.ndsapi || (window.ndsapi = {})
      , b = null
      , c = null
      , d = null;
    a.configure3DS = function(b) {
        a.config = a.config || {};
        a.config.threeDSConfig = a.config.threeDSConfig || {};
        a.ThreeDS = {};
        nsejsnf(b, function(c, d) {
            !1 === Object.prototype.hasOwnProperty.call(a.config.threeDSConfig, d) && (a.config.threeDSConfig[d] = {});
            a.config.threeDSConfig[d] = b[d]
        })
    }
    ;
    a.start3DS = function(b) {
        if (e()) {
            var k = a.config.threeDSConfig;
            f(k);
            var y = function(a, b, c) {
                if ("undefined" !== typeof ThreeDS.ThreeDS2Widget) {
                    var d = m(a, b);
                    var e = "transaction.error"
                } else
                    "undefined" !== typeof ThreeDS.ThreeDS1Widget && (e = new ThreeDS.ErrorInformation,
                    e.setCause(ThreeDS.ErrorCause.INVALID_REQUEST),
                    e.setExplanation(a + ": " + b),
                    d = new ThreeDS.ThreeDSError,
                    d.setError(e),
                    d.setResult(ThreeDS.ErrorResult.ERROR),
                    e = ThreeDS.Flow.THREE_DS1_TRANSACTION_ERROR);
                g(e, [d], c)
            };
            if ("undefined" !== typeof ThreeDS)
                if (a.ThreeDS = ThreeDS,
                a.ThreeDS.Error = ThreeDS.ThreeDSError,
                0 !== d.length)
                    y("Missing Configuration", d.join(","), c.callbacks);
                else {
                    var r = u(k)
                      , x = n(r);
                    if (0 !== x.length)
                        y("Missing 3DS Widget", x.join(","), c.callbacks);
                    else if (y = p(r, c.notificationUrl))
                        y.start({
                            iframeElement: l(c.iframeElement),
                            callbacks: c.callbacks,
                            threeDSMethodNotificationURL: k.threeDSMethodNotificationURL,
                            authPayload: k.authPayload,
                            supportedVersionsResponse: b,
                            enableIDCIMode: k.enableIDCIMode
                        }),
                        h(r)
                }
        }
    }
    ;
    a.get3dsAuthenticationParameters = function(d) {
        if (e()) {
            var k = a.config.threeDSConfig;
            f(k);
            if ("undefined" !== typeof ThreeDS && (a.ThreeDS = ThreeDS,
            a.ThreeDS.Error = ThreeDS.ThreeDSError,
            x()))
                return b = new ThreeDS.ThreeDS2Widget(c.notificationUrl),
                b.getAuthenticationParameters(d, {
                    iframeElement: l(c.iframeElement),
                    callbacks: c.callbacks,
                    threeDSMethodNotificationURL: k.threeDSMethodNotificationURL,
                    authPayload: k.authPayload
                })
        }
    }
    ;
    a.perform3dsChallenge = function(d) {
        if (e()) {
            var k = a.config.threeDSConfig;
            f(k);
            if ("undefined" !== typeof ThreeDS && (a.ThreeDS = ThreeDS,
            a.ThreeDS.Error = ThreeDS.ThreeDSError,
            x()))
                return null === b && (b = new ThreeDS.ThreeDS2Widget(c.notificationUrl)),
                b.performChallenge(d, {
                    iframeElement: l(c.iframeElement),
                    callbacks: c.callbacks,
                    threeDSMethodNotificationURL: k.threeDSMethodNotificationURL,
                    authPayload: k.authPayload
                })
        }
    }
    ;
    var e = function() {
        return Object.prototype.hasOwnProperty.call(a, "config") && Object.prototype.hasOwnProperty.call(a.config, "threeDSConfig") && 0 < nsyoh(a.config.threeDSConfig)
    }
      , f = function(a) {
        c = {
            iframeElement: null,
            callbacks: null,
            notificationUrl: null
        };
        d = [];
        nsejsnf(c, function(b, e) {
            Object.prototype.hasOwnProperty.call(a, e) ? c[e] = a[e] : d.push(e)
        })
    }
      , g = function(a, b, c) {
        (a = r(c, a)) && a.apply(this, b)
    }
      , m = function(a, b) {
        var c = new ThreeDS.ThreeDSError;
        c.setErrorDescription(a);
        c.setErrorDetail(b);
        c.setMessageType(ThreeDS.MsgType.ERRO);
        c.setErrorCode(ThreeDS.ErrorCode.PERMANENT_SYSTEM_FAILURE);
        c.setErrorComponent(ThreeDS.ErrorComponent.THREEDS_SDK);
        return c
    }
      , u = function(a) {
        var b = "None";
        Object.prototype.hasOwnProperty.call(a, "interdictionType") && (b = a.interdictionType);
        return b
    }
      , n = function(a) {
        var b = [];
        nsejsnf({
            "3ds1": ["ThreeDS1Widget"],
            "3ds2": ["ThreeDS2Widget"],
            "3ds2First": ["ThreeDS1Widget", "ThreeDS2Widget"]
        }[a], function(a) {
            "undefined" === typeof ThreeDS[a] && b.push(a)
        });
        return b
    }
      , x = function() {
        if (0 !== d.length) {
            var a = d.join(",")
              , b = c.callbacks;
            if ("undefined" !== typeof ThreeDS.ThreeDS2Widget) {
                var e = m("Missing Configuration", a);
                var f = "transaction.error"
            }
            g(f, [e], b);
            return !1
        }
        return "undefined" === typeof ThreeDS.ThreeDS2Widget ? !1 : !0
    }
      , h = function(a) {
        nsejsnf({
            "3ds1": ["ThreeDSWidget", "ThreeDS2Widget"],
            "3ds2": ["ThreeDSWidget", "ThreeDS1Widget"],
            "3ds2First": ["ThreeDSWidget"]
        }[a], function(a) {
            delete ThreeDS[a]
        })
    }
      , p = function(a, b) {
        return "3ds1" === a ? new ThreeDS.ThreeDS1Widget(b) : "3ds2" === a || "3ds2First" === a ? new ThreeDS.ThreeDS2Widget(b) : "undefined" !== typeof ThreeDS ? new ThreeDS.ThreeDSWidget(b) : null
    }
      , l = function(a) {
        var b = a;
        if ("string" === typeof a || a instanceof String)
            b = nsukswwaaw([a]),
            b = 0 < b.length ? b[0] : null;
        return b
    }
      , r = function(a, b) {
        if ("object" !== typeof a)
            return !1;
        if ("string" === typeof b) {
            b = b.split(".");
            for (var c = b.length, d = 0; d < c; d++) {
                var e = b[d];
                if (Object.prototype.hasOwnProperty.call(a, e)) {
                    if (d === c - 1)
                        return "function" === typeof a[e] ? a[e] : !1;
                    a = a[e]
                } else
                    return !1
            }
        } else
            return Object.prototype.hasOwnProperty.call(a, b) && "function" === typeof a[b] ? a[b] : !1
    };
    "function" !== typeof a.load && (a.load = function() {
        if (nscavjydj)
            a.configure3DS = function() {}
            ,
            a.start3DS = function() {}
            ;
        else
            for (var b = a.config.q, c = 0; c < b.length; ++c) {
                var d = b[c];
                "function" === typeof d && d()
            }
    }
    )
}
)();
function ndwts(a) {
    nsgukkebk = a.ml;
    nsgukk = a.co;
    nslyyidtyi = a.wmd;
    nslgf = a.fd;
    nsdwhx = !0;
    nscavjy = a.wc;
    nsgukk.initId && (nsdwhxurq = nsgukk.initId);
    nsuksw();
    nsamh("init");
    "undefined" != typeof nsgukk.initBindings && nds.setInitTargets(nsgukk.initBindings);
    "undefined" !== typeof nsgukk.apiBaseUrl && nsgukk.apiBaseUrl && nds.setApiBaseUrl(nsgukk.apiBaseUrl);
    nsejsnfw();
    nstnag([])
}
(function() {
    nspkx("wk", {
        init: function(a) {
            nsdwhx && (a = Math.floor(1E6 * Math.random()) + 1E3,
            (window.ndsapi || (window.ndsapi = {})).setFormFieldData("wkr", a))
        }
    })
}
)();
(function() {
    var a = !1
      , b = 'input[type\x3d"text"],input[type\x3d"password"]'
      , c = 'input[name\x3d"remember-me"]'
      , d = function(b) {
        a && e.init()
    };
    nspkx("af", {
        init: function(d) {
            a = d.e;
            b = d.gtfs;
            c = d.rms;
            a && e.init()
        },
        precomplete: function(b) {
            a && e.findTech()
        },
        bind: d,
        rebind: d,
        stop: function(b) {
            a && (g.unsubscribeAll(),
            a = !1)
        }
    });
    var e = function() {
        return {
            init: function() {
                f.init();
                this.initFieldWatchers();
                this.findTech()
            },
            findTech: function() {
                try {
                    u.findTech(),
                    n.findTech(),
                    m.findTech()
                } catch (x) {}
            },
            initFieldWatchers: function() {
                g.unsubscribeAll();
                for (var a = this.getTargetFields(), b = 0; b < a.length; b += 1)
                    g.startWatchingField(a[b])
            },
            getTargetFields: function() {
                return nds.common.querySelectorAll(b)
            }
        }
    }()
      , f = function() {
        function a() {
            var a = ndoGetObjectKeys(b).join(",");
            nds.setFormFieldData("af", a)
        }
        var b = {};
        return {
            init: function() {
                b = {};
                a()
            },
            reportTech: function(c) {
                b[c] = !0;
                a()
            },
            reportFill: function() {
                b.filled = !0;
                a()
            }
        }
    }()
      , g = function() {
        function a() {
            var a = nds.common.createCallbackList()
              , d = ++c;
            b[d] = a;
            a.addCallback(function() {
                delete b[d]
            });
            return a
        }
        var b = {}
          , c = 0;
        return {
            unsubscribeAll: function() {
                for (var a in b)
                    Object.prototype.hasOwnProperty.call(b, a) && b[a].callAllCallbacks()
            },
            startWatchingField: function(b) {
                if (b)
                    if (b.value)
                        f.reportFill();
                    else {
                        var c = getEnabledEvents();
                        if (!1 !== c.hasOwnProperty(nslgfnpyxj) && !1 !== c.hasOwnProperty(nsdwh) && !1 !== c.hasOwnProperty(nsviymj)) {
                            var d = a();
                            attachEventListener(b, nslgfnpyxj, function() {
                                d.callAllCallbacks()
                            }, d.addCallback);
                            c = [nsviymj, nsdwh];
                            for (var e = 0; e < c.length; e += 1)
                                attachEventListener(b, c[e], function() {
                                    b.value && (f.reportFill(),
                                    d.callAllCallbacks())
                                }, d.addCallback)
                        }
                    }
            }
        }
    }()
      , m = function() {
        return {
            findTech: function() {
                try {
                    for (var a = nds.common.querySelectorAll(c), b = 0; b < a.length; b += 1)
                        a[b].checked && f.reportTech("rememberme")
                } catch (p) {}
            }
        }
    }()
      , u = function() {
        return {
            findTech: function() {
                try {
                    0 < nds.common.querySelectorAll(":-webkit-autofill").length && f.reportTech("webkit")
                } catch (x) {}
            }
        }
    }()
      , n = function() {
        var a = {
            "background-attachment": "scroll",
            "background-size": "16px 18px",
            "background-position": "98% 50%",
            "background-repeat": "no-repeat",
            "background-image": /^url\("data:image\/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAASCAYAAABSO15qAAAAAXNSR0IArs4c6QAAA..JREFUOB.*"\)$/
        };
        return {
            findTech: function(b) {
                b || (b = e.getTargetFields());
                for (var c = 0; c < b.length; c += 1) {
                    var d = b[c];
                    a: {
                        var g = void 0;
                        var k = d
                          , h = a;
                        for (g in h)
                            if (Object.prototype.hasOwnProperty.call(h, g)) {
                                var m = h[g]
                                  , n = nds.common.util.getComputedStyle(k, g);
                                if (m instanceof RegExp) {
                                    if (!m.test(n)) {
                                        g = !1;
                                        break a
                                    }
                                } else if (n !== m) {
                                    g = !1;
                                    break a
                                }
                            }
                        g = !0
                    }
                    if (!g) {
                        g = void 0;
                        d = d.id || d.name;
                        try {
                            g = document.querySelector('[id^\x3d"__lpform_' + d + '"]')
                        } catch (ra) {}
                        g = !!g
                    }
                    if (g) {
                        f.reportTech("lastpass");
                        break
                    }
                }
            }
        }
    }()
}
)();
(function() {
    function a(a, b, c) {
        a = Math.round(a * Math.pow(10, b));
        if ("undefined" === typeof c || !0 === c)
            a /= Math.pow(10, b);
        return a
    }
    function b(a) {
        va = a;
        A && (a = window.ndsapi || (window.ndsapi = {}),
        M += A,
        N = ra(M),
        !0 === ea && x(!1),
        A = "",
        0 < N.length ? a.setFormFieldData("ipr", N) : a.setFormFieldData("ipr", M))
    }
    function c() {
        return parseInt((new Date).getTime(), 10)
    }
    function d() {
        var a = c();
        var b = "";
        var d = nds.getListeners(), e;
        for (e in d)
            b += e + (d[e] || "");
        d = Math.floor((a - fa) / 1E3);
        O = 0 < Y && O.length > Y ? d.toString(16) + "," + wa + ";0," + b + ";" : O + (d.toString(16) + "," + b + ";");
        fa = a;
        nds.setFormFieldData(nslyyidty, O);
        x(!1)
    }
    function e(a) {
        a || (a = window.event);
        var b = null;
        a.target ? b = a.target : a.srcElement && (b = a.srcElement);
        3 == b.nodeType && (b = b.parentNode);
        if (a.keyCode)
            var c = a.keyCode;
        else
            a.which && (c = a.which);
        var d = !1;
        a.which ? d = 3 == a.which : a.button && (d = 2 == a.button);
        var e = g(a)
          , t = {};
        t.a = a;
        t[v] = b;
        t.c = d;
        t.d = c;
        t.e = e.x;
        t.f = e.y;
        return t
    }
    function f() {
        var b = c();
        if (!1 !== F) {
            var d = Math.abs(P.x - F.pos.x) * ua
              , e = Math.abs(P.y - F.pos.y) * ta
              , f = (b - F.time) / 1E3
              , g = a(d / f, 4, !0)
              , h = a(e / f, 4, !0);
            e = Math.sqrt(Math.pow(d, 2) + Math.pow(e, 2));
            d = a(e / f, 4, !0);
            (null === U || d < U) && 0 !== d && (B = [g, h],
            U = d);
            (null === V || d > V) && 0 !== d && (C = [g, h],
            V = d);
            H += d;
            I += e;
            null !== Z && (f = (d - Z) / f,
            (null === D || f < D) && 0 !== f && (D = f),
            (null === E || f > E) && 0 !== f && (E = f),
            Q += f);
            Z = d
        }
        0 !== J && 0 === J % R[w] && (f = 0 === aa ? 0 : b - aa,
        H = a(H / R[w], 4, !1),
        I = a(I, 4, !1),
        g = 0,
        0 === f && (g = -1),
        Q = a(Q / (R[w] + g), 4, !1),
        null === B && null === C && 0 === H && 0 === I ? l(ha, [f, R[w], "NOP"]) : (B[0] = a(B[0], 4, !1).toString(16),
        B[1] = a(B[1], 4, !1).toString(16),
        C[0] = a(C[0], 4, !1).toString(16),
        C[1] = a(C[1], 4, !1).toString(16),
        D = null !== D ? a(D, 4, !1) : 0,
        E = null !== E ? a(E, 4, !1) : 0,
        l(ha, [f, R[w], B[0] + " " + B[1], C[0] + " " + C[1], H, I, D, E, Q])),
        V = C = U = B = null,
        I = H = 0,
        E = D = null,
        Q = 0,
        aa = b);
        F = {
            pos: P,
            time: b
        };
        J >= xa[w] && n();
        J++
    }
    function g(a) {
        var b = 0
          , c = 0;
        if (a.pageX || a.pageY)
            b = a.pageX,
            c = a.pageY;
        else if (a.clientX || a.clientY)
            b = a.clientX + document.body.scrollLeft + document.documentElement.scrollLeft,
            c = a.clientY + document.body.scrollTop + document.documentElement.scrollTop;
        return {
            x: b,
            y: c
        }
    }
    function m() {
        var a = [];
        for (var b = 0; b < z.length; b++) {
            var c = z[b];
            c.type && c.type.match(sa) && (a.push(c.id),
            a.push(c.value.length))
        }
        a = a.join(",");
        l(Da, [a])
    }
    function u(a, b) {
        var c = S[a]
          , d = Date.now();
        return d - c > b ? (S[a] = d,
        !0) : !1
    }
    function n() {
        null !== K && (clearInterval(K),
        K = 0);
        null !== w && "undefined" !== typeof ia[w + 1] && (w++,
        K = setInterval(f, ia[w]),
        T.addCallback(function() {
            clearInterval(K)
        }),
        !1 === F ? (J = 1,
        F = {
            pos: P,
            time: c()
        }) : J = 0)
    }
    function x(a) {
        if (0 < nsdwhxurqd.length && nsdwhxurqd[0].value) {
            var b = nsdwhxurqd[0].value
              , c = ""
              , d = ""
              , e = ""
              , t = "";
            nsgukk.hasOwnProperty("pageModeConfig") && !0 === nsgukk.pageModeConfig.encodeData && (b = nsyohyfq(b));
            try {
                d = nsbopifkzi.parse(b);
                d[nsfkgj] || (d[nsfkgj] = {});
                var f = 0 < N.length ? N : M.toString()
                  , g = d[nsfkgj].hasOwnProperty("ipr") ? d[nsfkgj].ipr : "";
                b = O;
                !0 === a && (f.length !== g.length && (f = g),
                d[nsfkgj].hasOwnProperty(nslyyidty) && b.length !== d[nsfkgj][nslyyidty].length && (b = d[nsfkgj][nslyyidty]));
                var h = {
                    ipr: f,
                    forceIP: nds.config.forceIP,
                    wp: nds.config.placement,
                    wpp: nds.config.placementPage,
                    dtrk: nds.config.doNotTrack
                };
                h[nslyyidty] = b;
                "sid"in nsgukkebk.pmd && null != nds.config.sessionId && 0 < nds.config.sessionId.length && (d.sid = nds.config.sessionId);
                for (var k in nsgukkebk.pmd)
                    nsgukkebk.pmd.hasOwnProperty(k) && (e = k,
                    t = d[nsfkgj].hasOwnProperty(e) ? d[nsfkgj][e] : "",
                    h.hasOwnProperty(e) ? t = h[e] : nslgf.hasOwnProperty(e) && (t = nslgf[e]),
                    d[nsfkgj][e] = t);
                c = nsbopifkzi.stringify(d);
                nsgukk.hasOwnProperty("pageModeConfig") && !0 === nsgukk.pageModeConfig.encodeData && (c = nsyohyfq(c));
                for (a = 0; a < nsdwhxurqd.length; a++)
                    nsdwhxurqd[a].value = c
            } catch (Ta) {}
        }
    }
    function h(a, b) {
        var c, d = [];
        if (null === a || "undefined" === typeof a || 0 === a.length)
            d = document.documentElement.getElementsByTagName("input");
        else if (("object" === typeof a || "function" === typeof a) && "number" === typeof a.length) {
            for (c = 0; c < a.length; c++) {
                var e = a[c];
                "string" === typeof e ? (e = document.getElementById(e),
                "undefined" !== typeof e && null !== e && d.push(e)) : "object" === typeof e && null !== e && d.push(e)
            }
            null !== z && (d = d.concat(z))
        }
        a = [];
        for (c = 0; c < d.length; c++)
            e = d[c],
            e.type && e.type.match(sa) && (b || 0 !== e.offsetWidth || 0 !== e.offsetHeight) && (a.push(e),
            q(e, nslgfnpyx, Ea),
            q(e, nscavjyd, Fa),
            q(e, nslgfnpyxj, Ga),
            q(e, nsviymjo, Ha));
        z = nstna(a);
        q(document, nsbop, Ia);
        q(document, nslgfn, Ja);
        q(document, nslyy, Ka);
        q(window, nsfkg, La);
        q(window, nsfkgjoqrf, Ma)
    }
    function p(a) {
        for (var b = 0; b < a.length; b++)
            if (0 !== a[b])
                return !0;
        return !1
    }
    function l(a, d) {
        var e = c();
        if (null == G) {
            ja = G = ya = e;
            var t = [nscavjydje(), Na, ka];
            A = A + k("ncip", e, t) + ";";
            G = e
        }
        A = A + k(a, e, d) + ";";
        G = e;
        15E3 <= e - ja && (A = A + k("ts", e, [e - ya]) + ";",
        ja = G = e);
        switch (a) {
        case za:
        case Aa:
        case Oa:
        case la:
        case ha:
            b(e);
            break;
        default:
            2E3 < e - va && b(e)
        }
    }
    function r(a) {
        if (!(v in a))
            return null;
        "string" === typeof a[v].id && "" !== a[v].id ? a = a[v].id : "string" === typeof a[v].name && "" !== a[v].name ? a = a[v].name : (a = Array.prototype.slice.call(z).indexOf(a[v]),
        a = 0 <= a ? "ndiprinput" + a : "");
        return a
    }
    function k(a, b, c) {
        b -= G;
        1 < ka && (b = Math.round(b / ka));
        a = a + "," + b.toString(16);
        if (null != c && 0 < c.length) {
            a += ",";
            b = [];
            for (var d = 0; d < c.length; d++)
                "number" === typeof c[d] ? b.push(Math.round(c[d]).toString(16)) : null != c[d] && b.push(c[d].toString());
            c = b.join(",");
            a += c
        }
        return a
    }
    function q(a, b, c) {
        attachEventListener(a, b, c, T.addCallback)
    }
    function y(a) {
        var b = a.key;
        return "undefined" !== typeof b && "Unidentified" !== b && null !== b ? b : 229 !== a.keyCode ? String.fromCharCode(a.keyCode) : "NOP"
    }
    function ca() {
        N = M = A = "";
        G = null;
        O = "";
        fa = c();
        ma && (l(la, []),
        ma = !1)
    }
    function ra(a) {
        var b = c()
          , d = k(wa, b, [M.length]);
        if (0 === W || a.length + d.length <= W)
            return "";
        a = a.substring(0, W - d.length);
        var e = a.lastIndexOf(";");
        if (0 > e)
            return "";
        G = b;
        return a.substring(0, e + 1) + d + ";"
    }
    var da = 0
      , X = !1
      , ea = !0
      , z = null
      , sa = /^(text|password|email|url|search|tel)$/i
      , ta = 1 / window.screen.height
      , ua = 1 / window.screen.width
      , T = {
        addCallback: function() {},
        callAllCallbacks: function() {}
    }
      , ma = !1
      , ba = 0
      , L = {}
      , W = 0
      , Y = 25;
    nspkx("ipr", {
        init: function(a) {
            var b = window.ndsapi || (window.ndsapi = {})
              , c = a.hasOwnProperty("fm") ? a.fm : null;
            X = a.hasOwnProperty("bh") ? a.bh : !1;
            W = a.hasOwnProperty("tl") ? a.tl : W;
            Y = a.il || Y;
            da = 0;
            z = null;
            ta = 1 / window.screen.height;
            ua = 1 / window.screen.width;
            ea = !0;
            ba = 0;
            L = {};
            T.callAllCallbacks();
            T = nds.common.createCallbackList();
            K = P = null;
            F = w = !1;
            J = 0;
            ia = [100, 200, 2E3];
            xa = [100, 300, 150];
            R = [10, 50, 30];
            aa = 0;
            V = C = U = B = null;
            I = H = 0;
            E = D = Z = null;
            Q = 0;
            h(c, X);
            b.setFormFieldData("ipr", "");
            b.setFormFieldData(nslyyidty, "");
            ca();
            m();
            (a = document.activeElement) && -1 < z.indexOf(a) && (b = {},
            b[v] = a,
            l(Ba, [r(b)]));
            d()
        },
        reinit: function() {
            x(!0);
            !0 === nsgukk.eventModeEnabled && (ea = !1);
            ca()
        },
        bind: function(a, b) {
            h(b, X);
            m()
        },
        rebind: function(a, b) {
            T.callAllCallbacks();
            h(b, X);
            m();
            d()
        },
        clear: ca,
        stop: function() {
            T.callAllCallbacks();
            l(la, []);
            ma = !0
        }
    });
    var v = "b"
      , Ea = function(a) {
        e(a);
        var b = ndoGetKeyTypeAndLocationIndicator(a);
        a = y(a);
        "NOP" === a ? a = "N" : (!1 === L.hasOwnProperty(a) && (L[a] = ba++),
        a = L[a]);
        a = [a];
        0 !== b && a.push(b);
        l(Pa, a)
    }
      , Fa = function(a) {
        e(a);
        a = y(a);
        if ("NOP" !== a)
            if (!0 === L.hasOwnProperty(a)) {
                var b = L[a];
                delete L[a];
                0 < ba && ba--;
                a = b
            } else
                a = null;
        b = [];
        null !== a && "NOP" !== a && b.push(a);
        l(Qa, b)
    }
      , Ga = function(a) {
        a = e(a);
        l(Ra, [v in a && "undefined" !== typeof a[v].value ? a[v].value.length : null, r(a)]);
        l(Ba, [r(a)])
    }
      , Ha = function(a) {
        a = e(a);
        l(za, [r(a)])
    }
      , Ia = function(a) {
        a = e(a);
        l(Aa, [a.e, a.f, r(a)])
    }
      , Ma = function(a) {
        var b = [1E3 * a.alpha, 1E3 * a.beta, 1E3 * a.gamma];
        !0 === u(na, 200) && !0 === p(b) && (!0 === a.absolute && b.push(1),
        l(na, b))
    }
      , La = function(a) {
        if (!0 === u(oa, 200) && null !== a.rotationRate) {
            var b = [1E3 * a.rotationRate.beta, 1E3 * a.rotationRate.gamma, 1E3 * a.rotationRate.alpha];
            !0 === p(b) && l(oa, b)
        }
        !0 === u(pa, 50) && null !== a.accelerationIncludingGravity && (b = [1E3 * a.accelerationIncludingGravity.x, 1E3 * a.accelerationIncludingGravity.y, 1E3 * a.accelerationIncludingGravity.z],
        !0 === p(b) && l(pa, b));
        !0 === u(qa, 50) && null !== a.acceleration && (a = [1E3 * a.acceleration.x, 1E3 * a.acceleration.y, 1E3 * a.acceleration.z],
        !0 === p(a) && l(qa, a))
    }
      , Ja = function(a) {
        a = e(a);
        a.a && a.a.touches && a.a.touches[0] && "undefined" !== typeof a.a.touches[0].pageX ? l(Ca, [a.a.touches[0].pageX, a.a.touches[0].pageY, r(a)]) : l(Ca, [-1, -1, r(a)])
    }
      , Ka = function(a) {
        P = g(a);
        null === K && (w = -1,
        n());
        if (nscavjydje() < da)
            return !1;
        da = nscavjydje() + 5;
        a = e(a);
        l(Sa, [a.e, a.f, r(a)])
    }
      , P = null
      , K = null
      , w = !1
      , F = !1
      , J = 0
      , ia = [100, 200, 2E3]
      , xa = [100, 300, 150]
      , R = [10, 50, 30]
      , aa = 0
      , B = null
      , U = null
      , C = null
      , V = null
      , H = 0
      , I = 0
      , Z = null
      , D = null
      , E = null
      , Q = 0
      , Ba = "ff"
      , za = "fb"
      , Pa = "kd"
      , Qa = "ku"
      , Sa = "mm"
      , Aa = "mc"
      , Ca = "te"
      , Oa = "fs"
      , Ra = "kk"
      , Da = "st"
      , ha = "mms"
      , la = "so"
      , wa = "tr"
      , pa = "ac"
      , oa = "gy"
      , qa = "lac"
      , na = "or"
      , Na = 2
      , ka = 1
      , ya = null
      , G = null
      , va = null
      , ja = null
      , A = ""
      , M = ""
      , N = ""
      , fa = c()
      , O = ""
      , S = {};
    S[pa] = 0;
    S[oa] = 0;
    S[qa] = 0;
    S[na] = 0
}
)();
ndwts({
    "co": {
        "gzrq": false,
        "useNdx": false,
        "ndsidConfig": {
            "enable": false,
            "secure": false,
            "options": []
        },
        "clientSideCookie": false,
        "initBindings": null,
        "initId": "",
        "eventModeEnabled": false,
        "pageModeConfig": {
            "enable": true,
            "formbind": [],
            "inputFieldName": "nds-pmd",
            "encodeData": true,
            "options": [],
            "wt": "1.w-252422.1.2.y6Xiry5FkNq5ilFIHZEfiA,,.oXlFHrA1GUj2W9DbJtUTRuyAFtQToyaoLntn42xAcUyC_1BjBjqoB3sxH2d3w9OiXIOIaq3JA7NEtdJ1EJyM7sLnFjReCLz-Vpcoafn7uqD66rWx2MosOoc4pHwoQjcAhq68qaD8kgDM0YIHqGT92xJX5llhJAFVfkLyj3TyPYXuZ84rAga6DDzd-nzPQpwol3FfHALdbrvUqiNdkL4FSIoYSXIIn1613jFY66OKocW8sdPxo-IQQ64BDvtyK28k",
            "requireWidgetToken": true
        }
    },
    "ml": {
        "id": [],
        "i": {
            "bi": "bi",
            "ls": "ls"
        },
        "c": {
            "ua": "ua",
            "bp": "bp",
            "sr": "sr",
            "didtz": "didtz",
            "af": "af",
            "wkr": "wkr",
            "flv": "flv",
            "fv": "fv",
            "fa": "fa",
            "hf": "hf",
            "pl": "pl",
            "ft": "ft",
            "fc": "fc",
            "fs": "fs",
            "wg": "wg",
            "bd": "bd",
            "jsv": "jsv",
            "p": "p",
            "ipr": "ipr"
        },
        "pmd": {
            "bp": "bp",
            "sr": "sr",
            "didtz": "didtz",
            "af": "af",
            "wkr": "wkr",
            "flv": "flv",
            "fv": "fv",
            "fa": "fa",
            "hf": "hf",
            "pl": "pl",
            "ft": "ft",
            "fc": "fc",
            "fs": "fs",
            "wg": "wg",
            "fm": "fm",
            "bd": "bd",
            "jsv": "jsv",
            "dit": "dit",
            "ipr": "ipr",
            "mie": "mie",
            "mid": "mid"
        }
    },
    "wmd": {
        "ipr": {
            "fm": [],
            "lm": true,
            "bh": false,
            "tl": 20000,
            "il": 25
        },
        "wk": {
            "r": "test"
        },
        "di": {
            "rt": 128,
            "ut": 512,
            "ac": true
        },
        "af": {
            "e": false,
            "gtfs": "input[type=\"text\"],input[type=\"password\"]",
            "rms": "input[name=\"remember-me\"]"
        }
    },
    "fd": {
        "ipr": "p",
        "bi": "p"
    },
    "wc": "application\/javascript"
})
