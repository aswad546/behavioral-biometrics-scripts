/* dd: 2022-02-06__10-27-58 */
//Script found on https://internetbanking.tsb.co.uk/personal/logon/login/#/registration/step1-help-us-to-identify-tpl 
//Found on June 12
!function(e) {
    "use strict";
    self.cdApi = {
        configurationKeys: {
            wupServerURL: "wupServerURL",
            logServerURL: "logServerURL",
            clientSettings: "clientSettings"
        },
        getConfigurations: function(e) {
            var t = {};
            t[cdApi.configurationKeys.wupServerURL] = "https://wup-f4e48049.eu.v2.we-stats.com/client/v3/web/wup?cid=yama",
            t[cdApi.configurationKeys.logServerURL] = "https://logs-f4e48049.eu.v2.we-stats.com/api/v1/sendLogs",
            t[cdApi.configurationKeys.clientSettings] = {
                enableFlush: !0
            },
            e(t)
        },
        changeContext: function(e) {
            window.postMessage({
                type: "ContextChange",
                context: e
            }, window.location.href)
        },
        setCustomerSessionId: function(e) {
            window.postMessage({
                type: "cdSetCsid",
                csid: e
            }, window.location.href)
        }
    }
}();
var cdwpb;
!function() {
    var n = {
        534: function(e, t, n) {
            "use strict";
            n.d(t, {
                default: function() {
                    return Ii
                }
            });
            var r = {};
            n.r(r),
            n.d(r, {
                O: function() {
                    return de
                }
            });
            var i = {};
            n.r(i),
            n.d(i, {
                h: function() {
                    return Ee
                }
            });
            var o = {};
            n.r(o),
            n.d(o, {
                L: function() {
                    return Nt
                }
            });
            var s = {};
            n.r(s);
            var a = {};
            n.r(a);
            var u = {};
            n.r(u);
            var c = {};
            function apply(e) {
                function _e(e, t) {
                    for (var n = 0, r = o.length, i = []; n < r; n++)
                        o[n][e] == t && i.push(o[n]);
                    return i
                }
                function af(e, t) {
                    for (var n, r = o.length; r--; )
                        (n = o[r]).entryType != e || void 0 !== t && n.name != t || o.splice(r, 1)
                }
                var t = Date.now ? Date.now() : +new Date
                  , r = e.performance || {}
                  , o = []
                  , i = {};
                r.now || (r.now = r.webkitNow || r.mozNow || r.msNow || function() {
                    return (Date.now ? Date.now() : +new Date) - t
                }
                ),
                r.mark || (r.mark = r.webkitMark || function(e) {
                    var t = {
                        name: e,
                        entryType: "mark",
                        startTime: r.now(),
                        duration: 0
                    };
                    o.push(t),
                    i[e] = t
                }
                ),
                r.measure || (r.measure = r.webkitMeasure || function(e, t, n) {
                    if (void 0 !== n && void 0 === i[n])
                        throw new SyntaxError("Failed to execute 'measure' on 'Performance': The mark '" + n + "' does not exist.");
                    if (void 0 !== t && void 0 === i[t])
                        throw new SyntaxError("Failed to execute 'measure' on 'Performance': The mark '" + t + "' does not exist.");
                    t = i[t] ? i[t].startTime : 0,
                    n = i[n] ? i[n].startTime : r.now(),
                    o.push({
                        name: e,
                        entryType: "measure",
                        startTime: t,
                        duration: n - t
                    })
                }
                ),
                r.getEntriesByType || (r.getEntriesByType = r.webkitGetEntriesByType || function(e) {
                    return _e("entryType", e)
                }
                ),
                r.getEntriesByName || (r.getEntriesByName = r.webkitGetEntriesByName || function(e) {
                    return _e("name", e)
                }
                ),
                r.clearMarks || (r.clearMarks = r.webkitClearMarks || function(e) {
                    af("mark", e)
                }
                ),
                r.clearMeasures || (r.clearMeasures = r.webkitClearMeasures || function(e) {
                    af("measure", e)
                }
                ),
                e.performance = r,
                "function" == typeof define && n.amdO && define("performance", [], function() {
                    return r
                })
            }
            function _typeof(e) {
                return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function _typeof(e) {
                    return typeof e
                }
                : function _typeof(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }
                )(e)
            }
            function Polyfills_apply() {
                var r, t, n;
                function dg(e) {
                    return "function" == typeof e || "[object Function]" === t.call(e)
                }
                function eg(e) {
                    return e = Number(e),
                    isNaN(e) ? 0 : 0 !== e && isFinite(e) ? (0 < e ? 1 : -1) * Math.floor(Math.abs(e)) : e
                }
                function gg(e) {
                    return e = eg(e),
                    Math.min(Math.max(e, 0), n)
                }
                Object.getOwnPropertyNames || (Object.getOwnPropertyNames = function(e) {
                    var t, n = [];
                    for (t in e)
                        Object.prototype.hasOwnProperty.call(e, t) && n.push(t);
                    return n
                }
                ),
                Object.defineProperty && function() {
                    try {
                        return Object.defineProperty({}, "x", {}),
                        1
                    } catch (e) {
                        return
                    }
                }() || (r = Object.defineProperty,
                Object.defineProperty = function(e, t, n) {
                    if (r)
                        try {
                            return r(e, t, n)
                        } catch (e) {}
                    if (e !== Object(e))
                        throw TypeError("Object.defineProperty called on non-object");
                    return Object.prototype.__defineGetter__ && "get"in n && Object.prototype.__defineGetter__.call(e, t, n.get),
                    Object.prototype.__defineSetter__ && "set"in n && Object.prototype.__defineSetter__.call(e, t, n.set),
                    "value"in n && (e[t] = n.value),
                    e
                }
                ),
                "function" != typeof Object.defineProperties && (Object.defineProperties = function(e, t) {
                    if (e !== Object(e))
                        throw TypeError("Object.defineProperties called on non-object");
                    for (var n in t)
                        Object.prototype.hasOwnProperty.call(t, n) && Object.defineProperty(e, n, t[n]);
                    return e
                }
                ),
                "function" != typeof Object.create && (Object.create = function(e, t) {
                    if ("object" !== _typeof(e))
                        throw TypeError();
                    function Ctor() {}
                    Ctor.prototype = e;
                    var n = new Ctor;
                    if (e && (n.constructor = Ctor),
                    void 0 !== t) {
                        if (t !== Object(t))
                            throw TypeError();
                        Object.defineProperties(n, t)
                    }
                    return n
                }
                ),
                Object.keys || (Object.keys = function(e) {
                    if (e !== Object(e))
                        throw TypeError("Object.keys called on non-object");
                    var t, n = [];
                    for (t in e)
                        Object.prototype.hasOwnProperty.call(e, t) && n.push(t);
                    return n
                }
                ),
                Array.prototype.forEach || (Array.prototype.forEach = function(e, t) {
                    var n, r;
                    if (null == this)
                        throw new TypeError(" this is null or not defined");
                    var i, o = Object(this), s = o.length >>> 0;
                    if ("function" != typeof e)
                        throw new TypeError(e + " is not a function");
                    for (1 < arguments.length && (n = t),
                    r = 0; r < s; )
                        r in o && (i = o[r],
                        e.call(n, i, r, o)),
                        r++
                }
                ),
                Array.isArray || (Array.isArray = function(e) {
                    return "[object Array]" === Object.prototype.toString.call(e)
                }
                ),
                Function.prototype.bind || (Function.prototype.bind = function(e) {
                    if ("function" != typeof this)
                        throw TypeError("Bind must be called on a function");
                    function bg() {
                        return r.apply(this.prototype && this instanceof nop ? this : e, n.concat(t.call(arguments)))
                    }
                    var t = [].slice
                      , n = t.call(arguments, 1)
                      , r = this;
                    function nop() {}
                    return nop.prototype = r.prototype,
                    bg.prototype = new nop,
                    bg
                }
                ),
                "function" != typeof String.prototype.trim && (String.prototype.trim = function() {
                    return this.replace(/^\s+|\s+$/g, "")
                }
                ),
                Array.from || (Array.from = (t = Object.prototype.toString,
                n = Math.pow(2, 53) - 1,
                function from(e) {
                    var t = Object(e);
                    if (null == e)
                        throw new TypeError("Array.from requires an array-like object - not null or undefined");
                    var n, r = 1 < arguments.length ? arguments[1] : void 0;
                    if (void 0 !== r) {
                        if (!dg(r))
                            throw new TypeError("Array.from: when provided, the second argument must be a function");
                        2 < arguments.length && (n = arguments[2])
                    }
                    for (var i, o = gg(t.length), s = dg(this) ? Object(new this(o)) : new Array(o), a = 0; a < o; )
                        i = t[a],
                        s[a] = r ? void 0 === n ? r(i, a) : r.call(n, i, a) : i,
                        a += 1;
                    return s.length = o,
                    s
                }
                )),
                Array.prototype.find || Object.defineProperty(Array.prototype, "find", {
                    value: function value(e) {
                        if (null == this)
                            throw new TypeError('"this" is null or not defined');
                        var t = Object(this)
                          , n = t.length >>> 0;
                        if ("function" != typeof e)
                            throw new TypeError("predicate must be a function");
                        for (var r = arguments[1], i = 0; i < n; ) {
                            var o = t[i];
                            if (e.call(r, o, i, t))
                                return o;
                            i++
                        }
                    },
                    configurable: !0,
                    writable: !0
                }),
                Array.prototype.includes || Object.defineProperty(Array.prototype, "includes", {
                    value: function value(e, t) {
                        if (null == this)
                            throw new TypeError('"this" is null or not defined');
                        var n = Object(this)
                          , r = n.length >>> 0;
                        if (0 == r)
                            return !1;
                        var t = 0 | t
                          , i = Math.max(0 <= t ? t : r - Math.abs(t), 0);
                        for (; i < r; ) {
                            if (function sameValueZero(e, t) {
                                return e === t || "number" == typeof e && "number" == typeof t && isNaN(e) && isNaN(t)
                            }(n[i], e))
                                return !0;
                            i++
                        }
                        return !1
                    },
                    configurable: !0,
                    writable: !0
                }),
                Element.prototype.matches || (Element.prototype.matches = Element.prototype.matchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector || Element.prototype.webkitMatchesSelector || function(e) {
                    for (var t = (this.document || this.ownerDocument).querySelectorAll(e), n = t.length; 0 <= --n && t.item(n) !== this; )
                        ;
                    return -1 < n
                }
                ),
                "function" != typeof Object.assign && Object.defineProperty(Object, "assign", {
                    value: function assign(e, t) {
                        if (null == e)
                            throw new TypeError("Cannot convert undefined or null to object");
                        for (var n = Object(e), r = 1; r < arguments.length; r++) {
                            var i = arguments[r];
                            if (null != i)
                                for (var o in i)
                                    Object.prototype.hasOwnProperty.call(i, o) && (n[o] = i[o])
                        }
                        return n
                    },
                    writable: !0,
                    configurable: !0
                }),
                String.prototype.startsWith || (String.prototype.startsWith = function(e, t) {
                    return this.substr(!t || t < 0 ? 0 : +t, e.length) === e
                }
                ),
                String.prototype.includes || (String.prototype.includes = function(e, t) {
                    if (e instanceof RegExp)
                        throw TypeError("first argument must not be a RegExp");
                    return void 0 === t && (t = 0),
                    -1 !== this.indexOf(e, t)
                }
                ),
                self.MutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver
            }
            function WeakMapPolyfill_typeof(e) {
                return (WeakMapPolyfill_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function _typeof(e) {
                    return typeof e
                }
                : function _typeof(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }
                )(e)
            }
            function WeakMapPolyfill_apply(e) {
                var n, r;
                function isObject(e) {
                    return Object(e) === e
                }
                function checkInstance(e, t) {
                    if (!isObject(e) || !n.call(e, "_id"))
                        throw new TypeError(t + " method called on incompatible receiver " + WeakMapPolyfill_typeof(e))
                }
                function rand() {
                    return Math.random().toString().substring(2)
                }
                function WeakMap() {
                    if (void 0 === this)
                        throw new TypeError("Constructor WeakMap requires 'new'");
                    if (r(this, "_id", function genId(e) {
                        return e + "_" + rand() + "." + rand()
                    }("_WeakMap")),
                    0 < arguments.length)
                        throw new TypeError("WeakMap iterable is not supported")
                }
                e.WeakMap || (n = Object.prototype.hasOwnProperty,
                r = function defineProperty(e, t, n) {
                    Object.defineProperty ? Object.defineProperty(e, t, {
                        configurable: !0,
                        writable: !0,
                        value: n
                    }) : e[t] = n
                }
                ,
                e.WeakMap = (r(WeakMap.prototype, "delete", function(e) {
                    if (checkInstance(this, "delete"),
                    !isObject(e))
                        return !1;
                    var t = e[this._id];
                    return !(!t || t[0] !== e) && (delete e[this._id],
                    !0)
                }),
                r(WeakMap.prototype, "get", function(e) {
                    if (checkInstance(this, "get"),
                    isObject(e)) {
                        var t = e[this._id];
                        return t && t[0] === e ? t[1] : void 0
                    }
                }),
                r(WeakMap.prototype, "has", function(e) {
                    if (checkInstance(this, "has"),
                    !isObject(e))
                        return !1;
                    var t = e[this._id];
                    return !(!t || t[0] !== e)
                }),
                r(WeakMap.prototype, "set", function(e, t) {
                    if (checkInstance(this, "set"),
                    !isObject(e))
                        throw new TypeError("Invalid value used as weak map key");
                    var n = e[this._id];
                    return n && n[0] === e ? n[1] = t : r(e, this._id, [e, t]),
                    this
                }),
                r(WeakMap, "_polyfill", !0),
                WeakMap))
            }
            function _defineProperties(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            n.r(c);
            var l = function() {
                function HttpRequestFactory() {
                    !function _classCallCheck(e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, HttpRequestFactory)
                }
                return function _createClass(e, t, n) {
                    t && _defineProperties(e.prototype, t),
                    n && _defineProperties(e, n)
                }(HttpRequestFactory, null, [{
                    key: "create",
                    value: function create() {
                        if (self.XMLHttpRequest && Object.prototype.hasOwnProperty.call(XMLHttpRequest.prototype, "withCredentials"))
                            return new XMLHttpRequest;
                        if (self.XDomainRequest)
                            return new XDomainRequest;
                        if (!self.XMLHttpRequest)
                            throw new Error("There is no supported http request object");
                        return new XMLHttpRequest
                    }
                }]),
                HttpRequestFactory
            }();
            function CDUtils_defineProperties(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            function _defineProperty(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n,
                e
            }
            var f, d = (f = null,
            function(i, e, o) {
                function Sh() {
                    return e
                }
                var s, t;
                (function testNativeCode() {
                    return -1 < e.toString().indexOf("[native code]")
                }
                )() ? o(Sh()) : (s = 0,
                t = function timerFunction() {
                    if (f.contentWindow) {
                        for (var e = f.contentWindow, t = i.split("."), n = e, r = 0; r < t.length; r++)
                            n = n[t[r]];
                        o(n)
                    } else
                        s < 45 ? (setTimeout(timerFunction, s),
                        s++) : o(Sh())
                }
                ,
                f || (f = document.createElement("IFRAME"),
                this._iframe.setAttribute("sandbox", "allow-same-origin"),
                f.style.display = "none",
                document.documentElement.appendChild(f)),
                t())
            }
            ), h = function() {
                function CDUtils() {
                    !function CDUtils_classCallCheck(e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, CDUtils)
                }
                return function CDUtils_createClass(e, t, n) {
                    t && CDUtils_defineProperties(e.prototype, t),
                    n && CDUtils_defineProperties(e, n)
                }(CDUtils, null, [{
                    key: "isUndefinedNull",
                    value: function isUndefinedNull(e) {
                        return null == e || void 0 === e
                    }
                }, {
                    key: "addEventListener",
                    value: function addEventListener(e, t, n) {
                        var r = 3 < arguments.length && void 0 !== arguments[3] && arguments[3]
                          , i = !(4 < arguments.length && void 0 !== arguments[4]) || arguments[4]
                          , o = 5 < arguments.length && void 0 !== arguments[5] && arguments[5];
                        this.isPassiveSupported ? e.addEventListener(t, n, {
                            capture: r,
                            passive: i,
                            once: o
                        }) : e.addEventListener ? e.addEventListener(t, n, r) : e.attachEvent("on" + t, n)
                    }
                }, {
                    key: "removeEventListener",
                    value: function removeEventListener(e, t, n) {
                        var r = 3 < arguments.length && void 0 !== arguments[3] && arguments[3];
                        e.removeEventListener ? e.removeEventListener(t, n, r) : e.detachEvent("on" + t, n)
                    }
                }, {
                    key: "hasProtocol",
                    value: function hasProtocol(e) {
                        return e.toLowerCase().startsWith("http://") || e.toLowerCase().startsWith("https://")
                    }
                }, {
                    key: "clearTextFromNumbers",
                    value: function clearTextFromNumbers(e) {
                        return e ? e.replace(/(\d)/g, "*") : ""
                    }
                }, {
                    key: "maskText",
                    value: function maskText(e) {
                        return this.isUndefinedNull(e) ? "" : e.replace(/[\d]/g, "1").replace(/[a-zA-Z]/g, "a").replace(/[^a-zA-Z\d\u0000-\u0080]/g, "*")
                    }
                }, {
                    key: "getDropDownListValues",
                    value: function getDropDownListValues(e) {
                        for (var t = [], n = 0; n < e.length; n++) {
                            var r = e.options[n].text || e.options[n].value || "";
                            t.push(CDUtils.maskText(r))
                        }
                        return t
                    }
                }, {
                    key: "getDocUrl",
                    value: function getDocUrl() {
                        var e = window.location;
                        return e.protocol + "//" + e.hostname + (e.port ? ":" + e.port : "") + CDUtils.clearTextFromNumbers(e.pathname)
                    }
                }, {
                    key: "getHash",
                    value: function getHash(e) {
                        for (var t = 0, n = 0, r = e.length; n < r; n++)
                            t = (t << 5) - t + e.charCodeAt(n),
                            t &= t;
                        return t
                    }
                }, {
                    key: "getTruncatedHash",
                    value: function getTruncatedHash(e, t) {
                        return e ? this.murmurhash3(e).toString().substring(t) : ""
                    }
                }, {
                    key: "murmurhash3",
                    value: function murmurhash3(e, t) {
                        for (var n, r, i = 3 & e.length, o = e.length - i, s = t, a = 3432918353, u = 461845907, c = 0; c < o; )
                            r = 255 & e.charCodeAt(c) | (255 & e.charCodeAt(++c)) << 8 | (255 & e.charCodeAt(++c)) << 16 | (255 & e.charCodeAt(++c)) << 24,
                            ++c,
                            s = 27492 + (65535 & (n = 5 * (65535 & (s = (s ^= r = (65535 & (r = (r = (65535 & r) * a + (((r >>> 16) * a & 65535) << 16) & 4294967295) << 15 | r >>> 17)) * u + (((r >>> 16) * u & 65535) << 16) & 4294967295) << 13 | s >>> 19)) + ((5 * (s >>> 16) & 65535) << 16) & 4294967295)) + ((58964 + (n >>> 16) & 65535) << 16);
                        switch (r = 0,
                        i) {
                        case 3:
                            r ^= (255 & e.charCodeAt(c + 2)) << 16;
                            break;
                        case 2:
                            r ^= (255 & e.charCodeAt(c + 1)) << 8;
                            break;
                        case 1:
                            s ^= r = (65535 & (r = (r = (65535 & (r ^= 255 & e.charCodeAt(c))) * a + (((r >>> 16) * a & 65535) << 16) & 4294967295) << 15 | r >>> 17)) * u + (((r >>> 16) * u & 65535) << 16) & 4294967295
                        }
                        return s ^= e.length,
                        s = 2246822507 * (65535 & (s ^= s >>> 16)) + ((2246822507 * (s >>> 16) & 65535) << 16) & 4294967295,
                        s = 3266489909 * (65535 & (s ^= s >>> 13)) + ((3266489909 * (s >>> 16) & 65535) << 16) & 4294967295,
                        (s ^= s >>> 16) >>> 0
                    }
                }, {
                    key: "generateUUID",
                    value: function generateUUID() {
                        var n = CDUtils.dateNow();
                        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(e) {
                            var t = (n + 16 * Math.random()) % 16 | 0;
                            return n = Math.floor(n / 16),
                            ("x" === e ? t : 3 & t | 8).toString(16)
                        })
                    }
                }, {
                    key: "convertToArrayByMap",
                    value: function convertToArrayByMap(e, t) {
                        for (var n = [null], r = 0, i = e.length; r < i; r++)
                            n[r + 1] = t[e[r]];
                        return n
                    }
                }, {
                    key: "getPostUrl",
                    value: function getPostUrl(e, t, n, r, i, o, s) {
                        var a = l.create();
                        a instanceof self.XMLHttpRequest ? (a.open(t, e, !0),
                        void 0 !== s && (a.timeout = s),
                        a.withCredentials = !1 !== o,
                        "POST" === t && a.setRequestHeader("Content-Type", "application/json; charset=utf-8"),
                        a.onreadystatechange = function() {
                            4 === a.readyState && 204 !== a.status && (200 === a.status ? r && r(a.responseText) : i && i(a.responseText))
                        }
                        ,
                        a.ontimeout = function() {
                            i && i("timeout", n)
                        }
                        ,
                        a.send(n)) : (a.onload = function() {
                            r && r(a.responseText)
                        }
                        ,
                        a.onerror = function() {
                            i && i()
                        }
                        ,
                        a.onprogress = function() {}
                        ,
                        a.ontimeout = function() {}
                        ,
                        a.open(t, e, !0),
                        setTimeout(function() {
                            a.send(n)
                        }, 0))
                    }
                }, {
                    key: "minutesToMilliseconds",
                    value: function minutesToMilliseconds(e) {
                        return 60 * e * 1e3
                    }
                }, {
                    key: "cutDecimalPointDigits",
                    value: function cutDecimalPointDigits(e, t) {
                        t = Math.pow(10, t);
                        return Math.round(e * t) / t
                    }
                }]),
                CDUtils
            }();
            function CDCallAsync_apply() {
                var t, n, s = (t = [],
                n = "Window_" + h.generateUUID(),
                h.addEventListener(window, "message", function receiveMessage(e) {
                    e.data === n && (e.stopPropagation && e.stopPropagation(),
                    e.returnValue && (e.returnValue = !1),
                    e.cancelBubble && (e.cancelBubble = !0),
                    t.shift()())
                }, !0),
                function(e) {
                    t.push(e),
                    window.postMessage(n, self.location.href)
                }
                );
                Function.prototype.cdCallAsync = function(e) {
                    for (var t = arguments.length, n = new Array(1 < t ? t - 1 : 0), r = 1; r < t; r++)
                        n[r - 1] = arguments[r];
                    var i = this;
                    s(function() {
                        i.apply(e || window, n)
                    })
                }
                ,
                Function.prototype.cdCallAsyncWithErrorHandling = function(e, t) {
                    for (var n = arguments.length, r = new Array(2 < n ? n - 2 : 0), i = 2; i < n; i++)
                        r[i - 2] = arguments[i];
                    var o = this;
                    s(function() {
                        try {
                            o.apply(e || window, r)
                        } catch (e) {
                            t && t(e)
                        }
                    })
                }
            }
            _defineProperty(h, "scriptVersion", "2.21.1.702.b35a966"),
            _defineProperty(h, "isPassiveSupported", function isPassiveSupported() {
                var e = !1;
                try {
                    var t = Object.defineProperty({}, "passive", {
                        get: function get() {
                            e = !0
                        }
                    });
                    window.addEventListener("test", null, t)
                } catch (e) {}
                return e
            }()),
            _defineProperty(h, "dateNow", Date.now),
            _defineProperty(h, "StorageUtils", {
                counter: 0,
                getAndUpdateEventSequenceNumber: function getAndUpdateEventSequenceNumber() {
                    return this.counter++
                },
                deserialize: function deserialize(t) {
                    if ("string" != typeof t)
                        return null;
                    try {
                        return JSON.parse(t)
                    } catch (e) {
                        return t || null
                    }
                },
                getFromLocalStorage: function getFromLocalStorage(e, t) {
                    try {
                        var n = this.deserialize(window.localStorage.getItem(e));
                        return n ? n.exp && h.dateNow() - n.time > n.exp ? null : void 0 === t || t ? n.val : n : null
                    } catch (e) {
                        return null
                    }
                },
                saveToLocalStorage: function saveToLocalStorage(e, t, n) {
                    var r = {
                        val: t
                    };
                    n && (r.exp = n,
                    r.time = h.dateNow());
                    try {
                        window.localStorage.setItem(e, JSON.stringify(r))
                    } catch (e) {
                        return null
                    }
                    return r
                },
                removeFromLocalStorage: function removeFromLocalStorage(e) {
                    try {
                        window.localStorage.removeItem(e)
                    } catch (e) {
                        return null
                    }
                },
                getFromSessionStorage: function getFromSessionStorage(e) {
                    try {
                        var t = this.deserialize(window.sessionStorage.getItem(e));
                        return t ? t : null
                    } catch (e) {
                        return null
                    }
                },
                saveToSessionStorage: function saveToSessionStorage(e, t) {
                    try {
                        return t ? (window.sessionStorage.setItem(e, JSON.stringify(t)),
                        t) : window.sessionStorage.removeItem(e)
                    } catch (e) {
                        return null
                    }
                },
                removeFromSessionStorage: function removeFromSessionStorage(e) {
                    try {
                        window.sessionStorage.removeItem(e)
                    } catch (e) {
                        return null
                    }
                },
                getCookie: function getCookie(e) {
                    e = new RegExp("(?:^|; )" + encodeURIComponent(e) + "=([^;]*)").exec(document.cookie);
                    return e ? decodeURIComponent(e[1]) : ""
                },
                setCookie: function setCookie(e, t, n, r) {
                    var i, o = "";
                    n && ((i = new Date).setTime(i.getTime() + n),
                    o = "; expires=" + i.toUTCString());
                    for (var s = 0, a = location.hostname, u = a.split("."), c = "", l = !1; s <= u.length - 1 && !l; )
                        "localhost" === (a = u.slice(-1 - ++s).join(".")) ? c = "" : "" !== a && (c = "; domain=." + a),
                        l = this.setCookieWithAttributes(e, t, o, c, r);
                    return l || (c = "",
                    l = this.setCookieWithAttributes(e, t, o, c, r)),
                    l
                },
                setCookieWithAttributes: function setCookieWithAttributes(e, t, n, r, i) {
                    r = encodeURIComponent(e) + "=" + encodeURIComponent(t) + n + r + "; path=/;";
                    return document.cookie = i ? r + " ".concat("SameSite=None;", " ").concat("Secure") : r,
                    this.getCookie(e) === t
                },
                validateBcId: function validateBcId(e) {
                    return /^([0-9]{13,}-)?[0-9a-f]{8}-[0-9a-f]{4}-[4][0-9a-f]{3}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(e) ? e : null
                }
            }),
            _defineProperty(h, "getNativeWindowFn", d),
            _defineProperty(h, "JQueryUtils", {
                isJQueryAvailable: function isJQueryAvailable() {
                    return void 0 !== window.jQuery
                },
                addEventListener: function addEventListener(e, t, n) {
                    jQuery(e).on(t, n)
                },
                removeEventListener: function removeEventListener(e, t, n) {
                    jQuery(e).off(t, n)
                }
            }),
            function dateNowFixer() {
                Date.now ? d("Date.now", Date.now, function(e) {
                    h.dateNow = e
                }) : h.dateNow = function now() {
                    return (new Date).getTime()
                }
            }();
            var p = "getConfigurations"
              , v = "client"
              , _ = {
                resetSessionApiThreshold: "resetSessionApiThreshold",
                dataWupDispatchRateSettings: "dataWupDispatchRateSettings",
                logWupDispatchRateSettings: "logWupDispatchRateSettings",
                forceDynamicDataWupDispatchSettings: "forceDynamicDataWupDispatchSettings",
                wupStatisticsLogIntervalMs: "wupStatisticsLogIntervalMs",
                serverCommunicationSettings: "serverCommunicationSettings",
                wupResponseTimeout: "wupResponseTimeout",
                wupMessageRequestTimeout: "wupMessageRequestTimeout",
                logMessageRequestTimeout: "logMessageRequestTimeout",
                collectKeyRegionValue: "collectKeyRegionValue",
                crossDomainsList: "crossDomainsList",
                crossDomainsTimeout: "crossDomainsTimeout",
                isMutationObserver: "isMutationObserver",
                isEnabled: "isEnabled",
                slaveChannelHandshakeTimeout: "slaveChannelHandshakeTimeout",
                slaveAliveMessageInterval: "slaveAliveMessageInterval",
                collectCustomElementAttribute: "collectCustomElementAttribute",
                customElementAttribute: "customElementAttribute",
                enableFramesProcessing: "enableFramesProcessing",
                enableSameSiteNoneAndSecureCookies: "enableSameSiteNoneAndSecureCookies",
                wupServerURL: "wupServerURL",
                logAddress: "logAddress",
                shouldMaskClickEventValueField: "shouldMaskClickEventValueField",
                isCaptureKeyEvents: "isCaptureKeyEvents",
                locationEventsTimeoutMsec: "locationEventsTimeoutMsec",
                heartBeatMessageInterval: "heartBeatMessageInterval",
                isMotionAroundTouchEnabled: "isMotionAroundTouchEnabled",
                motionPaddingAroundTouchMSec: "motionPaddingAroundTouchMSec",
                isMotionOnSessionStart: "isMotionOnSessionStart",
                motionPaddingOnSessionStartMSec: "motionPaddingOnSessionStartMSec",
                isVMDetection: "isVMDetection",
                isScrollCollect: "isScrollCollect",
                isContextPropsFeature: "isContextPropsFeature",
                isCrossDomain: "isCrossdomain",
                gyroEventsThreshold: "gyroEventsThreshold",
                gyroEventsSamplePeriod: "gyroEventsSamplePeriod",
                dataQPassWorkerInterval: "dataQPassWorkerInterval",
                accelerometerEventsSamplePeriod: "accelerometerEventsSamplePeriod",
                orientationEventsThreshold: "orientationEventsThreshold",
                orientationEventsSamplePeriod: "orientationEventsSamplePeriod",
                isAudioDetection: "isAudioDetection",
                stateChangeEnabled: "stateChangeEnabled",
                logLevel: "logLevel",
                enableCustomElementsProcessing: "enableCustomElementsProcessing",
                keyEventsMaskSpecialChars: "keyEventsMaskSpecialChars",
                collectSelectElementBlurAndFocusEvents: "collectSelectElementBlurAndFocusEvents",
                allowedUnmaskedValuesList: "allowedUnmaskedValuesList",
                enableUnmaskedValues: "enableUnmaskedValues"
            };
            function ElementSettings_defineProperties(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            var m = function() {
                function ElementSettings(e) {
                    !function ElementSettings_classCallCheck(e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, ElementSettings),
                    this._customElementAttribute = e ? e[_.customElementAttribute] : null
                }
                return function ElementSettings_createClass(e, t, n) {
                    t && ElementSettings_defineProperties(e.prototype, t),
                    n && ElementSettings_defineProperties(e, n)
                }(ElementSettings, [{
                    key: "getCustomElementAttribute",
                    value: function getCustomElementAttribute() {
                        return this._customElementAttribute
                    }
                }]),
                ElementSettings
            }()
              , g = {
                wupServerURL: "wupServerURL",
                logServerURL: "logServerURL",
                enableFramesProcessing: "enableFramesProcessing",
                enableCustomElementsProcessing: "enableCustomElementsProcessing",
                enableSameSiteNoneAndSecureCookies: "enableSameSiteNoneAndSecureCookies",
                serverURL: "serverURL",
                customerID: "customerID",
                useUrlWorker: "useUrlWorker",
                workerUrl: "workerUrl",
                clientSettings: "clientSettings",
                collectionSettings: "collectionSettings",
                elementSettings: "elementSettings"
            };
            function CollectionSettings_defineProperties(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            var y = function() {
                function CollectionSettings(e) {
                    !function CollectionSettings_classCallCheck(e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, CollectionSettings),
                    this._elementSettings = new m(e && e[g.elementSettings])
                }
                return function CollectionSettings_createClass(e, t, n) {
                    t && CollectionSettings_defineProperties(e.prototype, t),
                    n && CollectionSettings_defineProperties(e, n)
                }(CollectionSettings, [{
                    key: "getElementSettings",
                    value: function getElementSettings() {
                        return this._elementSettings
                    }
                }]),
                CollectionSettings
            }();
            function StartupConfigurations_defineProperties(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            var b = function() {
                function StartupConfigurations(e, t, n, r, i, o, s, a, u) {
                    !function StartupConfigurations_classCallCheck(e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, StartupConfigurations),
                    this._wupServerURL = e,
                    this._logServerURL = t,
                    this._enableFramesProcessing = n,
                    this._enableCustomElementsProcessing = r,
                    this._enableSameSiteNoneAndSecureCookies = i,
                    this._useUrlWorker = o,
                    this._workerUrl = s,
                    this._clientSettings = a,
                    this._collectionSettings = u || new y
                }
                return function StartupConfigurations_createClass(e, t, n) {
                    t && StartupConfigurations_defineProperties(e.prototype, t),
                    n && StartupConfigurations_defineProperties(e, n)
                }(StartupConfigurations, [{
                    key: "getWupServerURL",
                    value: function getWupServerURL() {
                        return this._wupServerURL
                    }
                }, {
                    key: "getLogServerURL",
                    value: function getLogServerURL() {
                        return this._logServerURL
                    }
                }, {
                    key: "getEnableFramesProcessing",
                    value: function getEnableFramesProcessing() {
                        return this._enableFramesProcessing
                    }
                }, {
                    key: "getEnableCustomElementsProcessing",
                    value: function getEnableCustomElementsProcessing() {
                        return this._enableCustomElementsProcessing
                    }
                }, {
                    key: "getEnableSameSiteNoneAndSecureCookies",
                    value: function getEnableSameSiteNoneAndSecureCookies() {
                        return this._enableSameSiteNoneAndSecureCookies
                    }
                }, {
                    key: "getUseUrlWorker",
                    value: function getUseUrlWorker() {
                        return this._useUrlWorker
                    }
                }, {
                    key: "getWorkerUrl",
                    value: function getWorkerUrl() {
                        return this._workerUrl
                    }
                }, {
                    key: "getClientSettings",
                    value: function getClientSettings() {
                        return this._clientSettings
                    }
                }, {
                    key: "getCollectionSettings",
                    value: function getCollectionSettings() {
                        return this._collectionSettings
                    }
                }]),
                StartupConfigurations
            }()
              , E = {
                DEBUG: 10,
                INFO: 20,
                WARN: 30,
                ERROR: 40,
                CRITICAL: 50,
                OFF: 80
            };
            function Logger_classCallCheck(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }
            function Logger_defineProperties(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            function Logger_createClass(e, t, n) {
                return t && Logger_defineProperties(e.prototype, t),
                n && Logger_defineProperties(e, n),
                e
            }
            var C = function() {
                function Log() {
                    Logger_classCallCheck(this, Log)
                }
                return Logger_createClass(Log, null, [{
                    key: "setLogger",
                    value: function setLogger(e) {
                        this._logger = e
                    }
                }, {
                    key: "isDebug",
                    value: function isDebug() {
                        if (this._logger)
                            return this._logger.isDebug()
                    }
                }, {
                    key: "error",
                    value: function error(e, t) {
                        this._logger && this._logger.error(e, t || null)
                    }
                }, {
                    key: "warn",
                    value: function warn(e, t) {
                        this._logger && this._logger.warn(e, t || null)
                    }
                }, {
                    key: "trace",
                    value: function trace(e) {
                        this._logger && this._logger.trace(e)
                    }
                }, {
                    key: "debug",
                    value: function debug(e) {
                        this._logger && this._logger.debug(e)
                    }
                }, {
                    key: "info",
                    value: function info(e) {
                        this._logger && this._logger.info(e)
                    }
                }]),
                Log
            }()
              , S = function() {
                function Logger(e, t) {
                    Logger_classCallCheck(this, Logger),
                    this._logBridge = e,
                    this._logLevel = t || E.INFO
                }
                return Logger_createClass(Logger, [{
                    key: "trace",
                    value: function trace(e) {
                        this._sendToLogBridge(e, E.DEBUG)
                    }
                }, {
                    key: "debug",
                    value: function debug(e) {
                        this._sendToLogBridge(e, E.DEBUG)
                    }
                }, {
                    key: "info",
                    value: function info(e) {
                        this._sendToLogBridge(e, E.INFO)
                    }
                }, {
                    key: "warn",
                    value: function warn(e, t) {
                        this._sendToLogBridge(e, E.WARN, t)
                    }
                }, {
                    key: "error",
                    value: function error(e, t) {
                        this._sendToLogBridge(e, E.ERROR, t)
                    }
                }, {
                    key: "isDebug",
                    value: function isDebug() {
                        return this._logLevel === E.DEBUG
                    }
                }, {
                    key: "updateLogConfig",
                    value: function updateLogConfig(e) {
                        this._logLevel = e.get(_.logLevel) || this._logLevel
                    }
                }, {
                    key: "_sendToLogBridge",
                    value: function _sendToLogBridge(e, t, n) {
                        t >= this._logLevel && (n && n.stack && (e += " ;stack: ".concat(n.stack)),
                        this._logBridge.log(e, t))
                    }
                }]),
                Logger
            }();
            function URLFieldsExtractor_defineProperties(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            var w = function() {
                function URLFieldsExtractor() {
                    !function URLFieldsExtractor_classCallCheck(e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, URLFieldsExtractor)
                }
                return function URLFieldsExtractor_createClass(e, t, n) {
                    t && URLFieldsExtractor_defineProperties(e.prototype, t),
                    n && URLFieldsExtractor_defineProperties(e, n)
                }(URLFieldsExtractor, null, [{
                    key: "extract",
                    value: function extract(e) {
                        if (!e)
                            throw new Error("Invalid wupServerURL. Parameter is empty");
                        var t = {};
                        if (t.cid = this.getCID(e),
                        t.serverURL = this.getServerURL(e),
                        !t.serverURL)
                            throw new Error("Invalid field. Failed extracting the address parameter: ".concat(e));
                        if (!t.cid)
                            throw new Error("Invalid field. Failed extracting the cid parameter: ".concat(e));
                        return t
                    }
                }, {
                    key: "getCID",
                    value: function getCID(e) {
                        e = URLFieldsExtractor.extractCid(e);
                        return e || null
                    }
                }, {
                    key: "extractCid",
                    value: function extractCid(e) {
                        var t = e.indexOf("cid=");
                        if (-1 === t)
                            return null;
                        t += 4;
                        var n = -1 === (n = e.indexOf("&", t)) ? void 0 : n;
                        return e.substring(t, n)
                    }
                }, {
                    key: "getServerURL",
                    value: function getServerURL(e) {
                        var t = e.indexOf("/client/v", e);
                        return (t = -1 === t ? null : t) ? e.substring(0, t) : null
                    }
                }]),
                URLFieldsExtractor
            }();
            function URLBuilder_defineProperties(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            var k = function() {
                function URLBuilder() {
                    !function URLBuilder_classCallCheck(e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, URLBuilder)
                }
                return function URLBuilder_createClass(e, t, n) {
                    t && URLBuilder_defineProperties(e.prototype, t),
                    n && URLBuilder_defineProperties(e, n)
                }(URLBuilder, null, [{
                    key: "build",
                    value: function build(e, t) {
                        var n = "/client/v3.1/web/wup";
                        if (!e)
                            throw new Error("Invalid server URL. Parameter is empty");
                        return (h.hasProtocol(e) ? "" : "".concat("https", "://")).concat(e).concat(n, "?cid=").concat(t)
                    }
                }]),
                URLBuilder
            }();
            function CDAPIException_typeof(e) {
                return (CDAPIException_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function _typeof(e) {
                    return typeof e
                }
                : function _typeof(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }
                )(e)
            }
            function _createSuper(n) {
                var r = _isNativeReflectConstruct();
                return function _createSuperInternal() {
                    var e, t = _getPrototypeOf(n);
                    return function _possibleConstructorReturn(e, t) {
                        return !t || "object" !== CDAPIException_typeof(t) && "function" != typeof t ? function _assertThisInitialized(e) {
                            if (void 0 !== e)
                                return e;
                            throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
                        }(e) : t
                    }(this, r ? (e = _getPrototypeOf(this).constructor,
                    Reflect.construct(t, arguments, e)) : t.apply(this, arguments))
                }
            }
            function _wrapNativeSuper(e) {
                var t = "function" == typeof Map ? new Map : void 0;
                return (_wrapNativeSuper = function _wrapNativeSuper(e) {
                    if (null === e || !function _isNativeFunction(e) {
                        return -1 !== Function.toString.call(e).indexOf("[native code]")
                    }(e))
                        return e;
                    if ("function" != typeof e)
                        throw new TypeError("Super expression must either be null or a function");
                    if (void 0 !== t) {
                        if (t.has(e))
                            return t.get(e);
                        t.set(e, Wrapper)
                    }
                    function Wrapper() {
                        return _construct(e, arguments, _getPrototypeOf(this).constructor)
                    }
                    return Wrapper.prototype = Object.create(e.prototype, {
                        constructor: {
                            value: Wrapper,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }),
                    _setPrototypeOf(Wrapper, e)
                }
                )(e)
            }
            function _construct(e, t, n) {
                return (_construct = _isNativeReflectConstruct() ? Reflect.construct : function _construct(e, t, n) {
                    var r = [null];
                    r.push.apply(r, t);
                    r = new (Function.bind.apply(e, r));
                    return n && _setPrototypeOf(r, n.prototype),
                    r
                }
                ).apply(null, arguments)
            }
            function _isNativeReflectConstruct() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})),
                    !0
                } catch (e) {
                    return !1
                }
            }
            function _setPrototypeOf(e, t) {
                return (_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(e, t) {
                    return e.__proto__ = t,
                    e
                }
                )(e, t)
            }
            function _getPrototypeOf(e) {
                return (_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                }
                )(e)
            }
            var P = function() {
                !function _inherits(e, t) {
                    if ("function" != typeof t && null !== t)
                        throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }),
                    t && _setPrototypeOf(e, t)
                }(CDAPIException, _wrapNativeSuper(Error));
                var e = _createSuper(CDAPIException);
                function CDAPIException() {
                    return function CDAPIException_classCallCheck(e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, CDAPIException),
                    e.apply(this, arguments)
                }
                return CDAPIException
            }()
              , O = "enableRestart"
              , R = "enableFlush"
              , F = "enableCustomElements";
            function CdApiFacade_defineProperties(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            var D = function() {
                function CdApiFacade(e) {
                    !function CdApiFacade_classCallCheck(e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, CdApiFacade),
                    this._utils = e
                }
                return function CdApiFacade_createClass(e, t, n) {
                    t && CdApiFacade_defineProperties(e.prototype, t),
                    n && CdApiFacade_defineProperties(e, n)
                }(CdApiFacade, [{
                    key: "getCustomerSessionID",
                    value: function getCustomerSessionID(t) {
                        this._getFromApiOrEmpty("getCustomerSessionID", function(e) {
                            t(e)
                        })
                    }
                }, {
                    key: "getLogServerAddress",
                    value: function getLogServerAddress(t) {
                        this._getFromApiOrEmpty("getLogServerAddress", function(e) {
                            t(e)
                        })
                    }
                }, {
                    key: "getServerAddress",
                    value: function getServerAddress(t) {
                        this._getFromApiOrEmpty("getCustomerConfigLocation", function(e) {
                            t(e)
                        })
                    }
                }, {
                    key: "getConfigurations",
                    value: function getConfigurations(r) {
                        var e = this
                          , i = null;
                        this.isApiAvailable(p) ? this._getFromApiOrEmpty(p, function(e) {
                            var t = null;
                            if (e) {
                                if (e[g.wupServerURL]) {
                                    var n = w.extract(e[g.wupServerURL]);
                                    i = k.build(n.serverURL, n.cid)
                                } else {
                                    if (!e[g.customerID] || !e[g.serverURL])
                                        throw new Error("Invalid serverURL or cid. Parameter is empty");
                                    i = k.build(e[g.serverURL], e[g.customerID])
                                }
                                t = new b(i,e[g.logServerURL],e[g.enableFramesProcessing],e[g.enableCustomElementsProcessing],e[g.enableSameSiteNoneAndSecureCookies],e[g.useUrlWorker] || !1,e[g.workerUrl] || "",e[g.clientSettings],new y(e[g.collectionSettings]))
                            }
                            r(t)
                        }) : this.getLogServerAddress(function(t) {
                            e.getServerAddress(function(e) {
                                e = w.extract(e);
                                i = k.build(e.serverURL, e.cid),
                                r(new b(i,t,null,!1,"",null))
                            })
                        })
                    }
                }, {
                    key: "createClientInterface",
                    value: function createClientInterface(t, e) {
                        if (!this.isCDAPIAvailable())
                            throw C.error("Failed setting client facade. cdApi is unavailable."),
                            new P("Failed setting client facade. cdApi is unavailable.");
                        var n = {};
                        e[O] && (n.restart = function() {
                            t.restart()
                        }
                        ),
                        e[R] && (n.flush = function() {
                            t.flush()
                        }
                        ),
                        e[F] && (n.submitCustomElement = function(e) {
                            t.submitCustomElement(e)
                        }
                        ),
                        window.cdApi[v] = n
                    }
                }, {
                    key: "isCDAPIAvailable",
                    value: function isCDAPIAvailable() {
                        return !!window.cdApi
                    }
                }, {
                    key: "isApiAvailable",
                    value: function isApiAvailable(e) {
                        return !!window.cdApi && !!window.cdApi[e]
                    }
                }, {
                    key: "_getFromApiOrEmpty",
                    value: function _getFromApiOrEmpty(t, e) {
                        var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : 0;
                        if (!window.cdApi)
                            return 20 <= n ? void C.error("Failed getting cdApi after all retries.") : (0 === n && C.warn("cdApi not found in retry ".concat(n)),
                            n++,
                            void setTimeout(this._getFromApiOrEmpty.bind(this, t, e, n), 100));
                        if (!window.cdApi[t])
                            return C.warn("User did not implement cdApi method: ".concat(t)),
                            void e("");
                        try {
                            window.cdApi[t](e)
                        } catch (e) {
                            throw C.error("An error has occurred while calling cdApi ".concat(t, " function. Exception was thrown from client implementation."), e),
                            e
                        }
                    }
                }]),
                CdApiFacade
            }();
            function SupportedBrowserChecker_defineProperties(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            var M = function() {
                function SupportedBrowserChecker() {
                    !function SupportedBrowserChecker_classCallCheck(e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, SupportedBrowserChecker)
                }
                return function SupportedBrowserChecker_createClass(e, t, n) {
                    t && SupportedBrowserChecker_defineProperties(e.prototype, t),
                    n && SupportedBrowserChecker_defineProperties(e, n)
                }(SupportedBrowserChecker, null, [{
                    key: "isSupported",
                    value: function isSupported() {
                        return !("undefined" == typeof WeakMap || !window.Worker || !window.MutationObserver)
                    }
                }]),
                SupportedBrowserChecker
            }()
              , T = "startNewSessionCommand"
              , B = "resumeSessionCommand"
              , x = "changeContextCommand"
              , I = "updateCsidCommand"
              , A = "updatePsidCommand"
              , L = "updateLogUrl"
              , U = "sendDataCommand"
              , N = "sendLogCommand"
              , W = {
                stopped: "stopped",
                starting: "starting",
                started: "started",
                paused: "paused",
                faulted: "faulted"
            }
              , j = n(198)
              , H = n.n(j);
            function CDPort_defineProperties(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            var Q = function() {
                function CDPort(e) {
                    !function CDPort_classCallCheck(e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, CDPort),
                    this._portNativeWorker = e
                }
                return function CDPort_createClass(e, t, n) {
                    t && CDPort_defineProperties(e.prototype, t),
                    n && CDPort_defineProperties(e, n)
                }(CDPort, [{
                    key: "postMessage",
                    value: function postMessage() {
                        this._portNativeWorker.postMessage.apply(this._portNativeWorker, arguments)
                    }
                }, {
                    key: "close",
                    value: function close() {
                        this._portNativeWorker.terminate()
                    }
                }, {
                    key: "setonmessage",
                    value: function setonmessage(e) {
                        this._portNativeWorker.onmessage = e
                    }
                }]),
                CDPort
            }();
            function WorkerWrapper_defineProperties(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            var z = function() {
                function WorkerWrapper(e) {
                    !function WorkerWrapper_classCallCheck(e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, WorkerWrapper),
                    this._nativeWorker = e,
                    this.port = new Q(this._nativeWorker)
                }
                return function WorkerWrapper_createClass(e, t, n) {
                    t && WorkerWrapper_defineProperties(e.prototype, t),
                    n && WorkerWrapper_defineProperties(e, n)
                }(WorkerWrapper, [{
                    key: "close",
                    value: function close() {
                        this.port.close()
                    }
                }]),
                WorkerWrapper
            }();
            function WorkerWrapperFactory_defineProperties(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            var q = function() {
                function WorkerWrapperFactory(e, t) {
                    !function WorkerWrapperFactory_classCallCheck(e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, WorkerWrapperFactory),
                    this._useUrlWorker = e,
                    this._workerUrl = t
                }
                return function WorkerWrapperFactory_createClass(e, t, n) {
                    t && WorkerWrapperFactory_defineProperties(e.prototype, t),
                    n && WorkerWrapperFactory_defineProperties(e, n)
                }(WorkerWrapperFactory, [{
                    key: "create",
                    value: function create() {
                        return this._useUrlWorker ? this._createWorkerFromUrl() : this._createInlineWorker()
                    }
                }, {
                    key: "_createInlineWorker",
                    value: function _createInlineWorker() {
                        var e = new (H());
                        return C.info("Created a dedicated worker."),
                        new z(e)
                    }
                }, {
                    key: "_createWorkerFromUrl",
                    value: function _createWorkerFromUrl() {
                        try {
                            var e = new Worker(this._workerUrl);
                            return C.info("Created worker from url - ".concat(this._workerUrl)),
                            new z(e)
                        } catch (e) {
                            throw C.error("Failed to construct worker from url."),
                            e
                        }
                    }
                }]),
                WorkerWrapperFactory
            }();
            function CDMap_defineProperties(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            var K = function() {
                function CDMap() {
                    !function CDMap_classCallCheck(e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, CDMap),
                    this._pairs = [],
                    this.size = 0
                }
                return function CDMap_createClass(e, t, n) {
                    t && CDMap_defineProperties(e.prototype, t),
                    n && CDMap_defineProperties(e, n)
                }(CDMap, [{
                    key: "has",
                    value: function has(e) {
                        return -1 < this._indexOf(e)
                    }
                }, {
                    key: "get",
                    value: function get(e) {
                        e = this._indexOf(e);
                        if (-1 < e)
                            return this._pairs[e][1]
                    }
                }, {
                    key: "set",
                    value: function set(e, t) {
                        var n = this._indexOf(e);
                        -1 < n ? this._pairs[n][1] = t : (this._pairs.push([e, t]),
                        this.size++)
                    }
                }, {
                    key: "delete",
                    value: function _delete(e) {
                        e = this._indexOf(e);
                        return -1 < e && (this._pairs.splice(e, 1),
                        this.size--,
                        !0)
                    }
                }, {
                    key: "forEach",
                    value: function forEach(e) {
                        for (var t = 0; t < this._pairs.length; t++)
                            e(this._pairs[t][1], this._pairs[t][0])
                    }
                }, {
                    key: "clear",
                    value: function clear() {
                        this._pairs = []
                    }
                }, {
                    key: "_indexOf",
                    value: function _indexOf(e) {
                        for (var t = 0; t < this._pairs.length; t++)
                            if (this._pairs[t][0] === e)
                                return t;
                        return -1
                    }
                }]),
                CDMap
            }()
              , V = function create() {
                return new (self.Map || K)
            };
            function CDSet_defineProperties(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            var G = function() {
                function CDSet() {
                    !function CDSet_classCallCheck(e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, CDSet),
                    this._set = [],
                    this.size = 0
                }
                return function CDSet_createClass(e, t, n) {
                    t && CDSet_defineProperties(e.prototype, t),
                    n && CDSet_defineProperties(e, n)
                }(CDSet, [{
                    key: "add",
                    value: function add(e) {
                        return this._set.push(e),
                        this.size++,
                        this
                    }
                }, {
                    key: "has",
                    value: function has(e) {
                        return -1 < this._set.indexOf(e)
                    }
                }, {
                    key: "delete",
                    value: function _delete(e) {
                        for (var t = 0; t < this._set.length; t++)
                            if (this._set[t] === e)
                                return this._set.splice(t, 1),
                                this.size--,
                                !0;
                        return !1
                    }
                }, {
                    key: "forEach",
                    value: function forEach(e) {
                        for (var t = 0; t < this._set.length; t++)
                            e(this._set[t])
                    }
                }, {
                    key: "clear",
                    value: function clear() {
                        this._set = []
                    }
                }]),
                CDSet
            }()
              , Y = function create() {
                for (var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : [], t = new (self.Set || G), n = 0; n < e.length; n++)
                    t.add(e[n]);
                return t
            };
            function WorkerCommunicator_defineProperties(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            var Z = function() {
                function WorkerCommunicator() {
                    !function WorkerCommunicator_classCallCheck(e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, WorkerCommunicator),
                    this._msgListeners = V()
                }
                return function WorkerCommunicator_createClass(e, t, n) {
                    t && WorkerCommunicator_defineProperties(e.prototype, t),
                    n && WorkerCommunicator_defineProperties(e, n)
                }(WorkerCommunicator, [{
                    key: "setMessagingPort",
                    value: function setMessagingPort(e) {
                        var i = this;
                        (this._messagePort = e).setonmessage(function(e) {
                            var t = e.data
                              , n = []
                              , r = i._msgListeners.get(t.msgType);
                            r && r.forEach(function(e) {
                                e.callback(t.data),
                                e.isOneTime && n.push(e)
                            }),
                            n.forEach(function(e) {
                                r.delete(e)
                            })
                        })
                    }
                }, {
                    key: "sendAsync",
                    value: function sendAsync(e, t, n, r, i) {
                        r && n && this.addMessageListener(n, r, i),
                        this._messagePort.postMessage({
                            msgType: e,
                            data: t
                        })
                    }
                }, {
                    key: "addMessageListener",
                    value: function addMessageListener(e, t, n) {
                        var r = null;
                        this._msgListeners.has(e) ? r = this._msgListeners.get(e) : (r = Y(),
                        this._msgListeners.set(e, r)),
                        r.add({
                            callback: t,
                            isOneTime: n
                        })
                    }
                }]),
                WorkerCommunicator
            }();
            function DataQ_defineProperties(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            var X = function() {
                function DataQ(e, t, n, r, i, o) {
                    var s = this;
                    !function DataQ_classCallCheck(e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, DataQ),
                    this._serverWorkerCommunicator = t,
                    this._contextManager = n,
                    this._passToWorkerInterval = o || 0,
                    this._intervalConfigKey = r,
                    this._msgToWorker = i,
                    this._Q = [],
                    this._passToWorkerInterval && (this._intervalId = setInterval(this._sendQToServerWorker.bind(this), this._passToWorkerInterval)),
                    e.addEventListener(window, "beforeunload", function() {
                        s._onUnload()
                    }, !0)
                }
                return function DataQ_createClass(e, t, n) {
                    t && DataQ_defineProperties(e.prototype, t),
                    n && DataQ_defineProperties(e, n)
                }(DataQ, [{
                    key: "addToQueue",
                    value: function addToQueue(e, t, n, r) {
                        (n = !(null != n && !0 !== n)) && t.push && (t[0] = this._contextManager.contextId),
                        0 !== this._passToWorkerInterval ? (this._Q.push({
                            eventName: e,
                            data: t,
                            shouldFlush: r
                        }),
                        r && this._sendQToServerWorker()) : this._serverWorkerCommunicator.sendAsync(this._msgToWorker, {
                            eventName: e,
                            data: t,
                            shouldFlush: r
                        })
                    }
                }, {
                    key: "updateWithConfig",
                    value: function updateWithConfig(e) {
                        e = e.get(this._intervalConfigKey);
                        void 0 !== e && e !== this._passToWorkerInterval && (this._passToWorkerInterval = e,
                        clearInterval(this._intervalId),
                        this._intervalId = null,
                        0 !== this._passToWorkerInterval && (this._intervalId = setInterval(this._sendQToServerWorker.bind(this), this._passToWorkerInterval)))
                    }
                }, {
                    key: "flushAllMessages",
                    value: function flushAllMessages() {
                        this._Q.push({
                            eventName: "flushData"
                        }),
                        this._sendQToServerWorker()
                    }
                }, {
                    key: "_sendQToServerWorker",
                    value: function _sendQToServerWorker() {
                        try {
                            this._Q.length && (this._serverWorkerCommunicator.sendAsync(this._msgToWorker, this._Q),
                            this._Q = [])
                        } catch (e) {
                            C.error("Failed sending data to worker. ".concat(e)),
                            this._sendQInSingleMessagesToServerWorker()
                        }
                    }
                }, {
                    key: "_sendQInSingleMessagesToServerWorker",
                    value: function _sendQInSingleMessagesToServerWorker() {
                        for (var e = 0; e < this._Q.length; e++)
                            try {
                                this._serverWorkerCommunicator.sendAsync(this._msgToWorker, this._Q[e])
                            } catch (e) {
                                C.error("Failed sending single message data to worker. ".concat(e))
                            }
                        this._Q = []
                    }
                }, {
                    key: "_onUnload",
                    value: function _onUnload() {
                        this.flushAllMessages()
                    }
                }]),
                DataQ
            }();
            function PerfMonitor_defineProperties(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            var J = function() {
                function PerfMonitor(e) {
                    !function PerfMonitor_classCallCheck(e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, PerfMonitor),
                    this._perfDataQ = e,
                    this._now = window.performance && window.performance.now ? window.performance.now.bind(window.performance) : h.dateNow.bind(Date),
                    this._monitors = V()
                }
                return function PerfMonitor_createClass(e, t, n) {
                    t && PerfMonitor_defineProperties(e.prototype, t),
                    n && PerfMonitor_defineProperties(e, n)
                }(PerfMonitor, [{
                    key: "startMonitor",
                    value: function startMonitor(e) {
                        C.debug("PerfMonitor:startMonitor on ".concat(e)),
                        this._monitors.set(e, this._now())
                    }
                }, {
                    key: "stopMonitor",
                    value: function stopMonitor(e) {
                        var t, n = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "main";
                        this._monitors.has(e) && (t = this._now() - this._monitors.get(e),
                        this._perfDataQ.addToQueue("perf", {
                            orig: n,
                            name: e,
                            val: t
                        }),
                        C.debug("PerfMonitor:stopMonitor on ".concat(e, ": time = ").concat(t)),
                        this._monitors.delete(e))
                    }
                }, {
                    key: "cancelMonitor",
                    value: function cancelMonitor(e) {
                        C.debug("PerfMonitor:cancelMonitor on ".concat(e)),
                        this._monitors.has(e) && this._monitors.delete(e)
                    }
                }, {
                    key: "reportMonitor",
                    value: function reportMonitor(e, t) {
                        var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : "main";
                        C.debug("PerfMonitor:reportMonitor on ".concat(e)),
                        this._perfDataQ.addToQueue("perf", {
                            orig: n,
                            name: e,
                            val: t
                        })
                    }
                }]),
                PerfMonitor
            }();
            function SiteMapper_defineProperties(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            var $ = function() {
                function SiteMapper(e, t, n, r, i) {
                    var o = !(5 < arguments.length && void 0 !== arguments[5]) || arguments[5];
                    !function SiteMapper_classCallCheck(e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, SiteMapper),
                    this._mutationObserver = e,
                    this._siteMapKey = r,
                    this._keyUrl = r + "_isUrlNonMasked",
                    this._stopOnFirstMappingMatch = o,
                    this._siteMap = null,
                    this._observers = [],
                    this._utils = t,
                    this._domUtils = n,
                    this._onMatchCB = i,
                    this._maxMappings = 200,
                    this._maxTriggers = 10
                }
                return function SiteMapper_createClass(e, t, n) {
                    t && SiteMapper_defineProperties(e.prototype, t),
                    n && SiteMapper_defineProperties(e, n)
                }(SiteMapper, [{
                    key: "updateObserver",
                    value: function updateObserver(e) {
                        this._onMatchCB = e
                    }
                }, {
                    key: "_observeChange",
                    value: function _observeChange(e, t) {
                        if (e)
                            try {
                                var n, r = window.document.querySelector(e);
                                r ? ((n = new this._mutationObserver(function(e) {
                                    0 < e.length && t()
                                }
                                )).observe(r, {
                                    childList: !0,
                                    characterData: !0,
                                    attributes: !0,
                                    subtree: !0
                                }),
                                this._observers.push(n)) : C.error("Selector:".concat(JSON.stringify(e), " not found on page. Check ").concat(this._siteMapKey, " configuration"))
                            } catch (e) {
                                C.error("SiteMapper._observeChange: ".concat(e.message), e)
                            }
                    }
                }, {
                    key: "initTracking",
                    value: function initTracking() {
                        function Qq() {
                            try {
                                for (var e = 0; e < r._siteMap.mappings.length; e++) {
                                    var t = r._siteMap.mappings[e];
                                    if (!t.url || -1 < r._url.indexOf(t.url))
                                        if (t.selector) {
                                            var n = window.document.querySelector(t.selector);
                                            if (n)
                                                if (t.byText) {
                                                    if ((void 0 !== n.innerText && -1 !== n.innerText.indexOf(t.byText) || n.value === t.byText || n.textContent === t.byText) && (r._onMatchCB(t),
                                                    r._stopOnFirstMappingMatch))
                                                        return
                                                } else if (r._onMatchCB(t),
                                                r._stopOnFirstMappingMatch)
                                                    return
                                        } else if (-1 < r._url.indexOf(t.url) && (r._onMatchCB(t),
                                        r._stopOnFirstMappingMatch))
                                            return
                                }
                            } catch (e) {
                                C.error("SiteMapper:testQuerySelector failed. ex: ".concat(e.message), e)
                            }
                        }
                        var e, r = this;
                        this._siteMap || ((e = this._utils.StorageUtils.getFromSessionStorage(this._siteMapKey)) && e.triggers.length <= this._maxTriggers && e.mappings.length <= this._maxMappings && (this._siteMap = e),
                        this._isNonMaskedUrl = this._utils.StorageUtils.getFromSessionStorage(this._keyUrl)),
                        this._siteMap && (this._url = this._isNonMaskedUrl ? window.document.location.href : this._utils.getDocUrl(),
                        this._domUtils.onDocumentBody(window, function() {
                            r._mutationObserver && r._siteMap.triggers.forEach(function(e) {
                                (!e.url || -1 < r._url.indexOf(e.url)) && r._observeChange(e.selector, Qq)
                            }),
                            Qq()
                        }))
                    }
                }, {
                    key: "onConfigUpdate",
                    value: function onConfigUpdate(e) {
                        try {
                            var t;
                            !this._siteMap && e.get(this._siteMapKey) && (this.stopTracking(),
                            t = e.get(this._siteMapKey) && JSON.parse(e.get(this._siteMapKey)),
                            this._isNonMaskedUrl = e.get("useNonMaskedUrlInMappings"),
                            t && t.triggers.length <= this._maxTriggers && t.mappings.length <= this._maxMappings ? (this._siteMap = t,
                            this._utils.StorageUtils.saveToSessionStorage(this._siteMapKey, this._siteMap),
                            this._utils.StorageUtils.saveToSessionStorage(this._keyUrl, this._isNonMaskedUrl),
                            this.initTracking()) : C.warn("Configuration ".concat(this._siteMapKey, " contains an illegal amount of triggers or mappings. Max Allowed Triggers: ").concat(this._maxTriggers, ", ") + "Max Allowed Mappings: ".concat(this._maxMappings)))
                        } catch (e) {
                            C.error("An error occurred while loading ".concat(this._siteMapKey, " configuration. Make sure the configuration value is valid. ").concat(e.message), e)
                        }
                    }
                }, {
                    key: "stopTracking",
                    value: function stopTracking() {
                        for (var e = 0; e < this._observers.length; e++)
                            this._observers[e].disconnect();
                        this._observers = [],
                        this._siteMap = null
                    }
                }]),
                SiteMapper
            }();
            function CDEvent_defineProperties(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            var ee = function() {
                function CDEvent() {
                    !function CDEvent_classCallCheck(e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, CDEvent),
                    this._listeners = []
                }
                return function CDEvent_createClass(e, t, n) {
                    t && CDEvent_defineProperties(e.prototype, t),
                    n && CDEvent_defineProperties(e, n)
                }(CDEvent, [{
                    key: "subscribe",
                    value: function subscribe(e) {
                        this._listeners.push(e)
                    }
                }, {
                    key: "publish",
                    value: function publish(e) {
                        for (var t = 0, n = this._listeners.length; t < n; t++)
                            this._listeners[t](e)
                    }
                }, {
                    key: "unsubscribe",
                    value: function unsubscribe(e) {
                        for (var t = 0, n = this._listeners.length; t < n; t++)
                            if (e === this._listeners[t]) {
                                this._listeners.splice(t, 1);
                                break
                            }
                    }
                }]),
                CDEvent
            }();
            function ContextMgr_defineProperties(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            var te = function() {
                function ContextMgr(e, t, n, r) {
                    !function ContextMgr_classCallCheck(e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, ContextMgr),
                    this._utils = e,
                    this._storageUtilsWrapper = r,
                    this._contextSiteMapper = t,
                    this.contextName = "",
                    this.referrer = "",
                    this.historyLen = -1,
                    this.onContextChange = new ee,
                    this._contextSiteMapper.updateObserver(this.onSiteMapperMatch.bind(this)),
                    this._workerComm = n,
                    this._contextIdKey = "cdContextId"
                }
                return function ContextMgr_createClass(e, t, n) {
                    t && ContextMgr_defineProperties(e.prototype, t),
                    n && ContextMgr_defineProperties(e, n)
                }(ContextMgr, [{
                    key: "contextData",
                    value: function contextData() {
                        return {
                            contextId: this.contextId,
                            url: this.url,
                            name: this.contextName,
                            referrer: this.referrer,
                            hLength: this.historyLen,
                            timestamp: this.timestamp
                        }
                    }
                }, {
                    key: "setContext",
                    value: function setContext(e) {
                        this.contextName = e.name,
                        this._genContext(),
                        this.url = e.url,
                        this.referrer = e.referrer,
                        this.historyLen = e.hLength,
                        this.timestamp = e.timestamp,
                        this._publishContext()
                    }
                }, {
                    key: "changeContext",
                    value: function changeContext(e) {
                        e ? e !== this.contextName ? (this.contextName = e,
                        this._updateContext(),
                        this._publishContext(),
                        C.info("Context changed to ".concat(e))) : C.warn("Received context ".concat(e, " but this is already the current context. Aborting operation.")) : C.error("Received an invalid context name ".concat(e, ". Aborting context change operation"))
                    }
                }, {
                    key: "onSiteMapperMatch",
                    value: function onSiteMapperMatch(e) {
                        e.contextName !== this.contextName && this.changeContext(e.contextName)
                    }
                }, {
                    key: "_updateContext",
                    value: function _updateContext() {
                        this._genContext(),
                        this.url = this._utils.getDocUrl(),
                        this.referrer = this._utils.clearTextFromNumbers(document.referrer),
                        this.historyLen = window.history.length,
                        this.timestamp = this._utils.dateNow()
                    }
                }, {
                    key: "_genContext",
                    value: function _genContext() {
                        this.contextId = this._storageUtilsWrapper.getCookie(this._contextIdKey),
                        this.contextId && !isNaN(this.contextId) || (this.contextId = this._storageUtilsWrapper.getFromLocalStorage(this._contextIdKey),
                        this.contextId && !isNaN(this.contextId) || (this.contextId = 0)),
                        this.contextId = parseInt(this.contextId);
                        var e = this.contextId + 1;
                        this._storageUtilsWrapper.saveToLocalStorage(this._contextIdKey, e) || C.error("Failed saving contextId ".concat(this.contextId, " to local storage.")),
                        this._storageUtilsWrapper.setCookie(this._contextIdKey, e.toString()) || C.error("Failed saving contextId ".concat(this.contextId, " to cookie."))
                    }
                }, {
                    key: "_publishContext",
                    value: function _publishContext() {
                        var e = {
                            contextName: this.contextName
                        };
                        this._workerComm.sendAsync(x, e),
                        this.onContextChange.publish(this.contextData())
                    }
                }, {
                    key: "initContextHandling",
                    value: function initContextHandling() {
                        this._contextSiteMapper.initTracking()
                    }
                }, {
                    key: "clearContextHandling",
                    value: function clearContextHandling() {
                        this._contextSiteMapper.stopTracking()
                    }
                }, {
                    key: "onConfigUpdate",
                    value: function onConfigUpdate(e) {
                        this._contextSiteMapper.onConfigUpdate(e)
                    }
                }, {
                    key: "onSessionReset",
                    value: function onSessionReset() {
                        this._publishContext()
                    }
                }]),
                ContextMgr
            }();
            function GlobalExceptionHandler_defineProperties(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            var ne = function() {
                function GlobalExceptionHandler(e, t) {
                    !function GlobalExceptionHandler_classCallCheck(e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, GlobalExceptionHandler),
                    this._cdUtils = e,
                    this._scriptName = t,
                    this._cdUtils.addEventListener(window, "error", this._handleException.bind(this))
                }
                return function GlobalExceptionHandler_createClass(e, t, n) {
                    t && GlobalExceptionHandler_defineProperties(e.prototype, t),
                    n && GlobalExceptionHandler_defineProperties(e, n)
                }(GlobalExceptionHandler, [{
                    key: "_handleException",
                    value: function _handleException(e) {
                        this._scriptName && this._scriptName === e.filename && (e = this._buildErrorMessage(e),
                        C.error("caught unhandled exception. ".concat(e)))
                    }
                }, {
                    key: "_buildErrorMessage",
                    value: function _buildErrorMessage(e) {
                        if (!e.error)
                            return e.message;
                        var t = e.error.toString()
                          , n = e.error.stack || "";
                        return "".concat(t, ", Line: ").concat(e.lineno, ", Column: ").concat(e.colno, ". Stacktrace: ").concat(n)
                    }
                }]),
                GlobalExceptionHandler
            }();
            function MessageBus_defineProperties(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            var re = function() {
                function MessageBus() {
                    !function MessageBus_classCallCheck(e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, MessageBus),
                    this.subscribers = V()
                }
                return function MessageBus_createClass(e, t, n) {
                    t && MessageBus_defineProperties(e.prototype, t),
                    n && MessageBus_defineProperties(e, n)
                }(MessageBus, [{
                    key: "subscribe",
                    value: function subscribe(e, t) {
                        var n, r = 2 < arguments.length && void 0 !== arguments[2] && arguments[2], i = !1;
                        this.subscribers.has(e) ? (n = this.subscribers.get(e)) && n.forEach(function(e) {
                            t === e.handler && (i = !0)
                        }) : (n = Y(),
                        this.subscribers.set(e, n)),
                        i || n.add({
                            handler: t,
                            isOneTime: r
                        })
                    }
                }, {
                    key: "unsubscribe",
                    value: function unsubscribe(e, t) {
                        var n;
                        e && this.subscribers.has(e) && ((n = this.subscribers.get(e)) && n.forEach(function(e) {
                            t === e.handler && n.delete(e)
                        }),
                        0 === n.size && this.subscribers.delete(e))
                    }
                }, {
                    key: "publish",
                    value: function publish(e, t) {
                        if (!e)
                            throw new Error("invalid argument messageType must be defined");
                        this._notifySubscribers(e, t)
                    }
                }, {
                    key: "_notifySubscribers",
                    value: function _notifySubscribers(e, t) {
                        var n = this.subscribers.get(e);
                        n && n.forEach(function(e) {
                            e.handler(t),
                            e.isOneTime && n.delete(e)
                        })
                    }
                }]),
                MessageBus
            }();
            function CidCache_defineProperties(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            var ie = function() {
                function CidCache() {
                    !function CidCache_classCallCheck(e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, CidCache),
                    this._cid = null
                }
                return function CidCache_createClass(e, t, n) {
                    t && CidCache_defineProperties(e.prototype, t),
                    n && CidCache_defineProperties(e, n)
                }(CidCache, [{
                    key: "get",
                    value: function get() {
                        return this._cid
                    }
                }, {
                    key: "set",
                    value: function set(e) {
                        if (!e)
                            throw new Error("Invalid cid value of undefined");
                        this._cid = e
                    }
                }]),
                CidCache
            }()
              , oe = {
                NewSessionStartedEvent: "NewSessionStartedEvent",
                ConfigurationLoadedEvent: "ConfigurationLoadedEvent",
                ServerStateUpdatedEvent: "ServerStateUpdatedEvent",
                HeartBeatStatusEvent: "HeartBeatStatusEvent"
            };
            function ServerStateMgr_defineProperties(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            var se = function() {
                function ServerStateMgr(e, t) {
                    !function ServerStateMgr_classCallCheck(e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, ServerStateMgr),
                    this._workerComm = e,
                    this._utils = t,
                    this._currState = null,
                    e.addMessageListener(oe.ServerStateUpdatedEvent, this._onStateUpdateFromWorker.bind(this)),
                    t.addEventListener(window, "storage", this._onStateUpdateFromStorage.bind(this), !0)
                }
                return function ServerStateMgr_createClass(e, t, n) {
                    t && ServerStateMgr_defineProperties(e.prototype, t),
                    n && ServerStateMgr_defineProperties(e, n)
                }(ServerStateMgr, [{
                    key: "getServerState",
                    value: function getServerState(e) {
                        if (this._utils.isUndefinedNull(e))
                            throw new Error("Invalid sid param of ".concat(e));
                        return this._currState = this._currState || this._utils.StorageUtils.getFromLocalStorage("cdSrvrState"),
                        this._currState && this._currState.sid !== e ? null : this._currState
                    }
                }, {
                    key: "onSessionIdChange",
                    value: function onSessionIdChange() {
                        this._utils.StorageUtils.removeFromLocalStorage("cdSrvrState"),
                        this._currState = null
                    }
                }, {
                    key: "_onStateUpdateFromWorker",
                    value: function _onStateUpdateFromWorker(e) {
                        this._updateServerState(e)
                    }
                }, {
                    key: "_updateServerState",
                    value: function _updateServerState(e) {
                        this._currState = e,
                        this._utils.StorageUtils.saveToLocalStorage("cdSrvrState", e)
                    }
                }, {
                    key: "_onStateUpdateFromStorage",
                    value: function _onStateUpdateFromStorage(e) {
                        e && e.storageArea && e.storageArea.cdSrvrState && (e = JSON.parse(e.storageArea.cdSrvrState),
                        this._workerComm.sendAsync("stateUpdateFromStorage", {
                            requestId: e.val.requestId,
                            sts: e.val.sts,
                            std: e.val.std
                        }))
                    }
                }]),
                ServerStateMgr
            }();
            function ConfigurationRepository_defineProperties(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            var ae = {
                defaultDynamicWupDispatchRateConfiguration: {
                    type: "dynamic"
                },
                defaultIncrementalWupDispatchRateConfiguration: {
                    type: "incremental",
                    initialRateValueMs: 500,
                    incrementStepMs: 500,
                    incrementStopMs: 5e3,
                    incrementStartWupSendCount: 20
                }
            }
              , ue = function() {
                function ConfigurationRepository() {
                    !function ConfigurationRepository_classCallCheck(e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, ConfigurationRepository),
                    this._requireParseFields = V(),
                    this._requireParseFields.set(_.dataWupDispatchRateSettings, _.dataWupDispatchRateSettings),
                    this._requireParseFields.set(_.logWupDispatchRateSettings, _.logWupDispatchRateSettings),
                    this._requireParseFields.set(_.serverCommunicationSettings, _.serverCommunicationSettings),
                    this._requireParseFields.set(_.crossDomainsList, _.crossDomainsList),
                    this._requireParseFields.set(_.allowedUnmaskedValuesList, _.allowedUnmaskedValuesList),
                    this._configurationList = {},
                    this.configDefault = {
                        logLevel: E.INFO,
                        isCrossdomain: !1,
                        crossDomainsList: [],
                        crossDomainsTimeout: 5e3,
                        orientationEventsSamplePeriod: 300,
                        orientationEventsThreshold: 1,
                        stateChangeEnabled: !1,
                        accelerometerEventsSamplePeriod: 0,
                        dataQPassWorkerInterval: 500,
                        gyroEventsSamplePeriod: 0,
                        gyroEventsThreshold: .3,
                        isContextPropsFeature: !0,
                        isEnabled: !0,
                        isResetEveryLoad: !1,
                        isScrollCollect: !0,
                        isVMDetection: !0,
                        isAudioDetection: !1,
                        wupStatisticsLogIntervalMs: 3e4,
                        heartBeatMessageInterval: 5e3,
                        resetSessionApiThreshold: 2e4,
                        wupMessageRequestTimeout: 5e3,
                        logMessageRequestTimeout: 5e3,
                        slaveChannelHandshakeTimeout: 6e4,
                        slaveAliveMessageInterval: 100,
                        forceDynamicDataWupDispatchSettings: !0,
                        dataWupDispatchRateSettings: ae.defaultDynamicWupDispatchRateConfiguration,
                        logWupDispatchRateSettings: {
                            type: "constant",
                            initialRateValueMs: 2500
                        },
                        serverCommunicationSettings: {
                            sendRetryRate: 1e3,
                            queueLoadThreshold: 100
                        },
                        collectKeyRegionValue: !1,
                        isMutationObserver: !0,
                        collectCustomElementAttribute: !0,
                        shouldMaskClickEventValueField: !0,
                        isCaptureKeyEvents: !1,
                        locationEventsTimeoutMsec: 1e4,
                        isMotionAroundTouchEnabled: !0,
                        motionPaddingAroundTouchMSec: 3e3,
                        isMotionOnSessionStart: !0,
                        motionPaddingOnSessionStartMSec: 2e4,
                        keyEventsMaskSpecialChars: !1,
                        collectSelectElementBlurAndFocusEvents: !1,
                        enableUnmaskedValues: !1,
                        allowedUnmaskedValuesList: []
                    },
                    this.loadConfigurations(this.configDefault)
                }
                return function ConfigurationRepository_createClass(e, t, n) {
                    t && ConfigurationRepository_defineProperties(e.prototype, t),
                    n && ConfigurationRepository_defineProperties(e, n)
                }(ConfigurationRepository, [{
                    key: "isConfigurationUpdatedFromServer",
                    value: function isConfigurationUpdatedFromServer() {
                        return !this._isDefaultConfiguration
                    }
                }, {
                    key: "loadConfigurations",
                    value: function loadConfigurations(r) {
                        var i = this;
                        r && (this._isDefaultConfiguration = r === this.configDefault,
                        Object.keys(r).forEach(function(e) {
                            var t, n = r[e];
                            !i._requireParseFields.has(e) || (t = i._tryParseConfigurationValue(n)) && (n = t),
                            i._configurationList[e] = n
                        }))
                    }
                }, {
                    key: "get",
                    value: function get(e) {
                        return this._configurationList[e]
                    }
                }, {
                    key: "set",
                    value: function set(e, t) {
                        this._configurationList[e] = t
                    }
                }, {
                    key: "getAll",
                    value: function getAll() {
                        return this._configurationList
                    }
                }, {
                    key: "_tryParseConfigurationValue",
                    value: function _tryParseConfigurationValue(e) {
                        if ("string" != typeof e)
                            return null;
                        try {
                            return JSON.parse(e)
                        } catch (e) {}
                        return null
                    }
                }]),
                ConfigurationRepository
            }()
              , ce = {
                TouchEvent: "touchEvent",
                KeyEvent: "keyEvent",
                ConfigurationLoadedEvent: "ConfigurationLoadedEvent",
                NewSessionStartedEvent: "NewSessionStartedEvent",
                WupDispatchRateUpdatedEvent: "WupDispatchRateUpdatedEvent",
                ApiContextChangeEvent: "ApiContextChangeEvent",
                ApiResetSessionEvent: "ApiResetSessionEvent",
                ApiCustomerMetadataEvent: "ApiCustomerMetadataEvent",
                ApiChangeStateEvent: "ApiChangeStateEvent",
                ApiSetCsidEvent: "ApiSetCsidEvent",
                ApiSetPsidEvent: "ApiSetPsidEvent",
                ServerStateUpdatedEvent: "ServerStateUpdatedEvent",
                StateChangedEvent: "StateChangedEvent",
                MutationSingleEvent: "MutationSingleEvent",
                MutationAddedNodes: "MutationAddedNodes",
                MutationRemovedNodes: "MutationRemovedNodes",
                StandardInputEvent: "StandardInputEvent",
                StandardInputFocusEvent: "StandardInputFocusEvent",
                StandardInputBlurEvent: "StandardInputBlurEvent",
                StandardOnClickEvent: "StandardOnClickEvent",
                StandardOnSelectEvent: "StandardOnSelectEvent",
                ElementFocusEvent: "ElementFocusEvent",
                ElementBlurEvent: "ElementBlurEvent",
                StandardOnFormSubmitEvent: "StandardOnFormSubmitEvent",
                SyntheticInputMaskEvent: "SyntheticInputMaskEvent",
                CutEvent: "CutEvent",
                CopyEvent: "CopyEvent",
                PasteEvent: "PasteEvent",
                DeviceOrientationEvent: "DeviceOrientationEvent",
                BeforeInstallPromptEvent: "BeforeInstallPromptEvent",
                FocusEvent: "FocusEvent",
                BlurEvent: "BlurEvent",
                ResizeEvent: "ResizeEvent",
                DOMContentLoadedEvent: "DOMContentLoadedEvent",
                VisibilityChangeEvent: "VisibilityChangeEvent",
                ScrollEvent: "ScrollEvent",
                WindowMessageEvent: "WindowMessageEvent",
                WorkerSystemStatusEvent: "WorkerSystemStatusEvent",
                CustomElementDetectedEvent: "CustomElementDetectedEvent",
                CustomElementAddedEvent: "CustomElementAddedEvent",
                CustomElementRemovedEvent: "CustomElementRemovedEvent",
                CustomElementInaccessible: "CustomElementInaccessible",
                CustomElementSubmitted: "CustomElementSubmitted",
                BrowserContextAdded: "BrowserContextAdded",
                RunDefaultFeatures: "RunDefaultFeatures",
                StopDefaultFeatures: "StopDefaultFeatures"
            };
            function ConfigurationService_defineProperties(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            var le = function() {
                function ConfigurationService(e, t, n, r, i) {
                    if (!function ConfigurationService_classCallCheck(e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, ConfigurationService),
                    !n)
                        throw new Error("messageBus param must be defined");
                    this._configurationLoadedCallback = null,
                    this._utils = e,
                    this._configurationRepository = t,
                    this._messageBus = n,
                    this._cidCache = r,
                    i && i.addMessageListener(oe.ConfigurationLoadedEvent, this._onConfigurationLoadedEvent.bind(this))
                }
                return function ConfigurationService_createClass(e, t, n) {
                    t && ConfigurationService_defineProperties(e.prototype, t),
                    n && ConfigurationService_defineProperties(e, n)
                }(ConfigurationService, [{
                    key: "updateLogUrlToWorker",
                    value: function updateLogUrlToWorker(e, t, n, r) {
                        r && this._configurationRepository.set("logAddress", r),
                        this._configurationRepository.get("logAddress") && (t = {
                            logAddress: "".concat(this._configurationRepository.get("logAddress"), "?cid=").concat(this._cidCache.get(), "&cdsnum=").concat(e, "&csid=").concat(t, "&ds=js&sdkVer=").concat(this._utils.scriptVersion)
                        },
                        n.sendAsync(L, t))
                    }
                }, {
                    key: "setServerUrl",
                    value: function setServerUrl(e) {
                        this._configurationRepository.set("serverAddress", e);
                        var t = e.indexOf("cid=") + 4
                          , n = -1 === (n = e.indexOf("&", t)) ? void 0 : n;
                        this._cidCache.set(e.substring(t, n))
                    }
                }, {
                    key: "setConfigurationLoadedCallback",
                    value: function setConfigurationLoadedCallback(e) {
                        this._configurationLoadedCallback = e
                    }
                }, {
                    key: "_onConfigurationLoadedEvent",
                    value: function _onConfigurationLoadedEvent(e) {
                        this._configurationRepository.loadConfigurations(e),
                        this._configurationLoadedCallback && this._configurationLoadedCallback(this._configurationRepository.get(_.isEnabled)),
                        this._messageBus.publish(ce.ConfigurationLoadedEvent, this._configurationRepository)
                    }
                }]),
                ConfigurationService
            }();
            function DataCollector_defineProperties(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            var fe = function() {
                function DataCollector() {
                    !function DataCollector_classCallCheck(e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, DataCollector)
                }
                return function DataCollector_createClass(e, t, n) {
                    t && DataCollector_defineProperties(e.prototype, t),
                    n && DataCollector_defineProperties(e, n)
                }(DataCollector, [{
                    key: "startFeature",
                    value: function startFeature() {}
                }, {
                    key: "stopFeature",
                    value: function stopFeature() {}
                }, {
                    key: "updateFeatureConfig",
                    value: function updateFeatureConfig() {}
                }, {
                    key: "sendToQueue",
                    value: function sendToQueue() {}
                }, {
                    key: "getEventTimestamp",
                    value: function getEventTimestamp() {
                        return h.dateNow()
                    }
                }, {
                    key: "getTimestampFromEvent",
                    value: function getTimestampFromEvent(e) {
                        return e.timeStamp ? h.cutDecimalPointDigits(e.timeStamp, 3) : 0
                    }
                }]),
                DataCollector
            }()
              , de = {
                false: 0,
                true: 1,
                undefined: 2,
                null: 2
            };
            function TouchEventCollector_typeof(e) {
                return (TouchEventCollector_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function _typeof(e) {
                    return typeof e
                }
                : function _typeof(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }
                )(e)
            }
            function TouchEventCollector_defineProperties(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            function TouchEventCollector_setPrototypeOf(e, t) {
                return (TouchEventCollector_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(e, t) {
                    return e.__proto__ = t,
                    e
                }
                )(e, t)
            }
            function TouchEventCollector_createSuper(n) {
                var r = function TouchEventCollector_isNativeReflectConstruct() {
                    if ("undefined" == typeof Reflect || !Reflect.construct)
                        return !1;
                    if (Reflect.construct.sham)
                        return !1;
                    if ("function" == typeof Proxy)
                        return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})),
                        !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function _createSuperInternal() {
                    var e, t = TouchEventCollector_getPrototypeOf(n);
                    return function TouchEventCollector_possibleConstructorReturn(e, t) {
                        return !t || "object" !== TouchEventCollector_typeof(t) && "function" != typeof t ? TouchEventCollector_assertThisInitialized(e) : t
                    }(this, r ? (e = TouchEventCollector_getPrototypeOf(this).constructor,
                    Reflect.construct(t, arguments, e)) : t.apply(this, arguments))
                }
            }
            function TouchEventCollector_assertThisInitialized(e) {
                if (void 0 === e)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }
            function TouchEventCollector_getPrototypeOf(e) {
                return (TouchEventCollector_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                }
                )(e)
            }
            var he = {
                configKey: "isTouchEvents",
                isDefault: !0,
                shouldRunPerContext: !1,
                shouldRunPerSession: !1,
                shouldRun: !0,
                isFrameRelated: !0,
                runInSlave: !0,
                runInUns: !1,
                isRunning: !1,
                instance: null
            }
              , pe = {
                pointerdown: "touchstart",
                pointerup: "touchend",
                pointermove: "touchmove",
                MSPointerDown: "touchstart",
                MSPointerUp: "touchend",
                MSPointerMove: "touchmove"
            }
              , ve = {
                touchstart: 0,
                touchmove: 1,
                touchend: 2,
                touchcancel: 3
            }
              , me = ["eventSequence", "timestamp", "eventType", "isTrusted", "elementHash", "clientX", "clientY", "touchIndex", "touchSizeMajor", "touchSizeMinor", "pageX", "pageY", "screenX", "screenY", "relativeTime", "touchPressure"]
              , ge = function() {
                !function TouchEventCollector_inherits(e, t) {
                    if ("function" != typeof t && null !== t)
                        throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }),
                    t && TouchEventCollector_setPrototypeOf(e, t)
                }(TouchEventCollector, fe);
                var o = TouchEventCollector_createSuper(TouchEventCollector);
                function TouchEventCollector(e, t, n, r) {
                    var i;
                    return function TouchEventCollector_classCallCheck(e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, TouchEventCollector),
                    (i = o.call(this))._utils = e,
                    i._dataQ = n,
                    i._elements = t,
                    i._msgBus = r,
                    i._onAllBrowsersTouchEventBinded = i._onAllBrowsersTouchEvent.bind(TouchEventCollector_assertThisInitialized(i)),
                    i
                }
                return function TouchEventCollector_createClass(e, t, n) {
                    t && TouchEventCollector_defineProperties(e.prototype, t),
                    n && TouchEventCollector_defineProperties(e, n)
                }(TouchEventCollector, [{
                    key: "startFeature",
                    value: function startFeature(e) {
                        this._bind(e)
                    }
                }, {
                    key: "stopFeature",
                    value: function stopFeature(e) {
                        this._unbind(e)
                    }
                }, {
                    key: "_addToCommunicationQueue",
                    value: function _addToCommunicationQueue(e, t, n, r) {
                        e !== ve.touchstart && e !== ve.touchend || this._msgBus.publish(ce.TouchEvent, {
                            action: e
                        });
                        var i = this.getEventTimestamp(r)
                          , o = de[r.isTrusted]
                          , s = this._elements.getElement(r.target)
                          , a = this._utils.StorageUtils.getAndUpdateEventSequenceNumber();
                        this._utils.isUndefinedNull(e) && (e = -1),
                        this._utils.isUndefinedNull(t) && (t = -1);
                        r = this.getTimestampFromEvent(r);
                        this._dataQ.addToQueue("touch_events", this._utils.convertToArrayByMap(me, {
                            eventSequence: a,
                            timestamp: i,
                            eventType: e,
                            isTrusted: o,
                            elementHash: s,
                            clientX: n.clientX ? Math.round(n.clientX) : 0,
                            clientY: n.clientY ? Math.round(n.clientY) : 0,
                            touchIndex: t,
                            touchSizeMajor: n.radiusX ? 2 * n.radiusX : 0,
                            touchSizeMinor: n.radiusY ? 2 * n.radiusY : 0,
                            pageX: n.pageX || 0,
                            pageY: n.pageY || 0,
                            screenX: n.screenX || 0,
                            screenY: n.screenY || 0,
                            relativeTime: r,
                            touchPressure: n.force || -1
                        }))
                    }
                }, {
                    key: "_bind",
                    value: function _bind(e) {
                        var t, n = e.getDocument();
                        if (window.TouchEvent ? t = ["touchstart", "touchmove", "touchend", "touchcancel"] : window.PointerEvent && (t = ["pointerdown", "pointermove", "pointerup"]),
                        this._listeningToEvents = t,
                        this._listeningToEvents)
                            for (var r = 0; r < this._listeningToEvents.length; r++)
                                this._utils.addEventListener(n, this._listeningToEvents[r], this._onAllBrowsersTouchEventBinded)
                    }
                }, {
                    key: "_unbind",
                    value: function _unbind(e) {
                        var t = e.getDocument();
                        if (this._listeningToEvents)
                            for (var n = 0; n < this._listeningToEvents.length; n++)
                                this._utils.removeEventListener(t, this._listeningToEvents[n], this._onAllBrowsersTouchEventBinded)
                    }
                }, {
                    key: "_onAllBrowsersTouchEvent",
                    value: function _onAllBrowsersTouchEvent(e) {
                        return this._onIeTouchEvent(e),
                        this._onTouchEvent(e),
                        !0
                    }
                }, {
                    key: "_onTouchEvent",
                    value: function _onTouchEvent(e) {
                        if ((null === e.pointerType || void 0 === e.pointerType) && void 0 !== e.changedTouches)
                            for (var t = ve[e.type], n = 0; n < e.changedTouches.length; n++) {
                                var r = e.changedTouches[n]
                                  , i = r.identifier % 1e4;
                                this._addToCommunicationQueue(t, i, r, e)
                            }
                    }
                }, {
                    key: "_onIeTouchEvent",
                    value: function _onIeTouchEvent(e) {
                        var t, n;
                        null != e.pointerType && ("touch" !== e.pointerType && "pen" !== e.pointerType && e.pointerType !== e.MSPOINTER_TYPE_TOUCH && e.pointerType !== e.MSPOINTER_TYPE_PEN || (n = pe[e.type] || "touchcancel",
                        t = e.pointerId ? e.pointerId % 1e4 : 0,
                        n = ve[n],
                        this._addToCommunicationQueue(n, t, e, e)))
                    }
                }], [{
                    key: "getDefaultSettings",
                    value: function getDefaultSettings() {
                        return he
                    }
                }]),
                TouchEventCollector
            }();
            function SameCharService_defineProperties(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            var ye = {
                true: 1,
                false: 0,
                undefined: -1
            }
              , be = function() {
                function SameCharService() {
                    !function SameCharService_classCallCheck(e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, SameCharService),
                    this._elementList = new WeakMap
                }
                return function SameCharService_createClass(e, t, n) {
                    t && SameCharService_defineProperties(e.prototype, t),
                    n && SameCharService_defineProperties(e, n)
                }(SameCharService, [{
                    key: "update",
                    value: function update(e, t) {
                        this._elementList.set(e, t)
                    }
                }, {
                    key: "compare",
                    value: function compare(e, t) {
                        return ye[t === this._elementList.get(e)]
                    }
                }]),
                SameCharService
            }()
              , Ee = {
                IntlBackslash: "0",
                Digit1: "0",
                Digit2: "0",
                Digit3: "0",
                Digit4: "1",
                Digit5: "1",
                Digit6: "1",
                Digit7: "1",
                Digit8: "2",
                Digit9: "2",
                Digit0: "2",
                KeyQ: "3",
                KeyW: "3",
                KeyE: "3",
                KeyA: "3",
                KeyS: "3",
                KeyD: "3",
                KeyZ: "3",
                KeyX: "3",
                KeyC: "3",
                KeyR: "4",
                KeyT: "4",
                KeyF: "4",
                KeyG: "4",
                KeyV: "4",
                KeyB: "4",
                KeyY: "5",
                KeyU: "5",
                KeyH: "5",
                KeyJ: "5",
                KeyN: "5",
                KeyM: "5",
                KeyI: "6",
                KeyO: "6",
                KeyP: "6",
                KeyK: "6",
                KeyL: "6",
                Comma: "6",
                Period: "6",
                Semicolon: "7",
                Minus: "7",
                Equal: "7",
                Slash: "7",
                BracketLeft: "7",
                Backslash: "7",
                BracketRight: "7",
                Quote: "7",
                NumLock: "8",
                NumpadDivide: "8",
                NumpadMultiply: "8",
                NumpadSubtract: "8",
                NumpadAdd: "8",
                NumpadEnter: "8",
                NumpadDecimal: "8",
                Numpad0: "8",
                Numpad1: "8",
                Numpad2: "8",
                Numpad3: "8",
                Numpad4: "8",
                Numpad5: "8",
                Numpad6: "8",
                Numpad7: "8",
                Numpad8: "8",
                Numpad9: "8"
            };
            function KeyEventCollector_typeof(e) {
                return (KeyEventCollector_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function _typeof(e) {
                    return typeof e
                }
                : function _typeof(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }
                )(e)
            }
            function KeyEventCollector_defineProperties(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            function KeyEventCollector_setPrototypeOf(e, t) {
                return (KeyEventCollector_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(e, t) {
                    return e.__proto__ = t,
                    e
                }
                )(e, t)
            }
            function KeyEventCollector_createSuper(n) {
                var r = function KeyEventCollector_isNativeReflectConstruct() {
                    if ("undefined" == typeof Reflect || !Reflect.construct)
                        return !1;
                    if (Reflect.construct.sham)
                        return !1;
                    if ("function" == typeof Proxy)
                        return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})),
                        !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function _createSuperInternal() {
                    var e, t = KeyEventCollector_getPrototypeOf(n);
                    return function KeyEventCollector_possibleConstructorReturn(e, t) {
                        return !t || "object" !== KeyEventCollector_typeof(t) && "function" != typeof t ? KeyEventCollector_assertThisInitialized(e) : t
                    }(this, r ? (e = KeyEventCollector_getPrototypeOf(this).constructor,
                    Reflect.construct(t, arguments, e)) : t.apply(this, arguments))
                }
            }
            function KeyEventCollector_assertThisInitialized(e) {
                if (void 0 === e)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }
            function KeyEventCollector_getPrototypeOf(e) {
                return (KeyEventCollector_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                }
                )(e)
            }
            var Ce = {
                configKey: "isKeyEvents",
                isDefault: !0,
                shouldRunPerContext: !1,
                shouldRunPerSession: !1,
                shouldRun: !0,
                isFrameRelated: !0,
                runInSlave: !0,
                runInUns: !1,
                isRunning: !1,
                instance: null
            }
              , Se = {
                keyup: 0,
                keydown: 1,
                keypress: 2
            }
              , we = ["eventSequence", "timestamp", "eventType", "isTrusted", "elementHash", "charCode", "character", "keyComboType", "isCtrl", "isShift", "isAlt", "isMetaKey", "keyLocation", "code", "key", "isRepeat", "keyRegion", "relativeTime", "isSameKey"]
              , ke = function() {
                !function KeyEventCollector_inherits(e, t) {
                    if ("function" != typeof t && null !== t)
                        throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }),
                    t && KeyEventCollector_setPrototypeOf(e, t)
                }(KeyEventCollector, fe);
                var u = KeyEventCollector_createSuper(KeyEventCollector);
                function KeyEventCollector(e, t, n, r, i, o, s) {
                    var a;
                    return function KeyEventCollector_classCallCheck(e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, KeyEventCollector),
                    (a = u.call(this))._configurationRepository = e,
                    a._utils = t,
                    a._elements = n,
                    a._dataQueue = r,
                    a._msgBus = i,
                    a._sameCharService = o,
                    a._maskingService = s,
                    a.comboCodes = ["c", "v", "a", "x", "z", "p", "s"],
                    a._onKeyEvent = a._onKeyEvent.bind(KeyEventCollector_assertThisInitialized(a)),
                    a._useCaptureEvents = a._configurationRepository.get(_.isCaptureKeyEvents),
                    a
                }
                return function KeyEventCollector_createClass(e, t, n) {
                    t && KeyEventCollector_defineProperties(e.prototype, t),
                    n && KeyEventCollector_defineProperties(e, n)
                }(KeyEventCollector, [{
                    key: "startFeature",
                    value: function startFeature(e) {
                        try {
                            var t = e.getDocument();
                            this._bind(t, this._onKeyEvent, this._useCaptureEvents)
                        } catch (e) {
                            C.error("KeyEvents:startFeature failed, msg: ".concat(e.message), e)
                        }
                    }
                }, {
                    key: "stopFeature",
                    value: function stopFeature(e) {
                        try {
                            var t = e.getDocument();
                            this._unbind(t, this._onKeyEvent, this._useCaptureEvents)
                        } catch (e) {
                            C.error("KeyEvents:stopFeature failed, msg: ".concat(e.message), e)
                        }
                    }
                }, {
                    key: "updateFeatureConfig",
                    value: function updateFeatureConfig(e) {
                        try {
                            var t, n;
                            this._configurationRepository.get(_.isCaptureKeyEvents) !== this._useCaptureEvents && (t = e.getDocument(),
                            n = this._configurationRepository.get(_.isCaptureKeyEvents),
                            this._unbind(t, this._onKeyEvent, this._useCaptureEvents),
                            this._bind(t, this._onKeyEvent, n),
                            this._useCaptureEvents = n)
                        } catch (e) {
                            C.error("KeyEvents:startFeature failed, msg: ".concat(e.message), e)
                        }
                    }
                }, {
                    key: "_bind",
                    value: function _bind(e, t, n) {
                        e.addEventListener("keyup", t, n),
                        e.addEventListener("keydown", t, n),
                        e.addEventListener("keypress", t, n)
                    }
                }, {
                    key: "_unbind",
                    value: function _unbind(e, t, n) {
                        e.removeEventListener("keyup", t, n),
                        e.removeEventListener("keydown", t, n),
                        e.removeEventListener("keypress", t, n)
                    }
                }, {
                    key: "_onKeyEvent",
                    value: function _onKeyEvent(e) {
                        var t = Se[e.type];
                        t !== Se.keydown && t !== Se.keyup || this._msgBus.publish(ce.KeyEvent, {
                            action: t
                        }),
                        this._handleKeyEvent(e, "key_events")
                    }
                }, {
                    key: "_handleKeyEvent",
                    value: function _handleKeyEvent(e, t) {
                        var n = Se[e.type];
                        this._utils.isUndefinedNull(n) && (n = -1);
                        var r = this._utils.StorageUtils.getAndUpdateEventSequenceNumber()
                          , i = this.getEventTimestamp(e)
                          , o = e.key || this._maskingService.getKeyFromLegacyProperties(e)
                          , s = e.code || ""
                          , a = this._maskingService.maskKey(o, s)
                          , u = 1 < a.key.length ? "" : a.key
                          , c = this._elements.getElement(e.target)
                          , l = this._getComboType(e, o)
                          , f = de[e.isTrusted]
                          , d = "Meta" === e.key || "OS" === e.key || "Win" === e.key || e.metaKey || 91 === e.keyCode || 92 === e.keyCode
                          , h = this._configurationRepository.get(_.collectKeyRegionValue) ? this._getKeyRegion(s) : "-1"
                          , o = this.getTimestampFromEvent(e)
                          , s = ye.undefined;
                        "keypress" === e.type && (s = this._sameCharService.compare(e.target, e.key),
                        this._sameCharService.update(e.target, e.key)),
                        C.isDebug() && C.trace("onKeyEvent: got event: ".concat(n, ", at time:").concat(i, ", key: ").concat(a.key, ", code:").concat(a.code, ", old charCode:").concat(a.charCode)),
                        this._dataQueue.addToQueue(t, this._utils.convertToArrayByMap(we, {
                            eventType: n,
                            eventSequence: r,
                            timestamp: i,
                            charCode: a.charCode,
                            character: u,
                            elementHash: c,
                            keyComboType: l,
                            isTrusted: f,
                            isCtrl: e.ctrlKey || !1,
                            isShift: e.shiftKey || !1,
                            isAlt: e.altKey || !1,
                            isMetaKey: d || !1,
                            keyLocation: e.location || 0,
                            code: a.code || "",
                            key: a.key || "",
                            location: e.location || "",
                            isRepeat: e.repeat || !1,
                            keyRegion: h,
                            relativeTime: o,
                            isSameKey: s
                        }))
                    }
                }, {
                    key: "_getKeyRegion",
                    value: function _getKeyRegion(e) {
                        return Ee[e] || "-1"
                    }
                }, {
                    key: "_getComboType",
                    value: function _getComboType(e, t) {
                        return (e.ctrlKey || e.metaKey) && void 0 !== t ? this.comboCodes.indexOf(t) : -1
                    }
                }], [{
                    key: "getDefaultSettings",
                    value: function getDefaultSettings() {
                        return Ce
                    }
                }]),
                KeyEventCollector
            }();
            function SensorsDataQueue_defineProperties(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            var Pe = function() {
                function SensorsDataQueue(e, t, n, r, i) {
                    !function SensorsDataQueue_classCallCheck(e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, SensorsDataQueue),
                    this._historyBuffer = [],
                    this._isTouchInProgress = !1,
                    this._touchStartCount = 0,
                    this._isPostTouch = !1,
                    this._touchEndTime = 0,
                    this._sensorGateKeeper = i,
                    this._dataQueue = t,
                    this._configurationRepository = e,
                    this._msgBus = n,
                    this._utils = r,
                    this._msgBus.subscribe(ce.TouchEvent, this._onTouch.bind(this)),
                    this._msgBus.subscribe(ce.KeyEvent, this._onTouch.bind(this)),
                    this._isMotionAroundTouchEnabled = this._configurationRepository.get(_.isMotionAroundTouchEnabled),
                    this._aroundTouchInterval = this._configurationRepository.get(_.motionPaddingAroundTouchMSec)
                }
                return function SensorsDataQueue_createClass(e, t, n) {
                    t && SensorsDataQueue_defineProperties(e.prototype, t),
                    n && SensorsDataQueue_defineProperties(e, n)
                }(SensorsDataQueue, [{
                    key: "addToQueue",
                    value: function addToQueue(e, t, n, r) {
                        var i = this._utils.dateNow();
                        if (this._isPostTouch && i - this._touchEndTime > this._aroundTouchInterval && (C.debug("SensorsDataQueue: stopped post touch events, time has passed (".concat(this._aroundTouchInterval, " millisec)")),
                        this._isPostTouch = !1),
                        !this._isMotionAroundTouchEnabled || this._isTouchInProgress || this._isPostTouch || this._sensorGateKeeper.isOpen())
                            this._dataQueue.addToQueue(e, t, n, r);
                        else {
                            this._historyBuffer.push({
                                name: e,
                                data: t,
                                addCtxId: n,
                                isImmediateWup: r,
                                timestamp: i
                            });
                            for (var o = 0, s = this._historyBuffer.length; o < s; o++) {
                                if (!(i - this._historyBuffer[0].timestamp > this._aroundTouchInterval))
                                    break;
                                this._historyBuffer.shift()
                            }
                        }
                    }
                }, {
                    key: "onConfigUpdate",
                    value: function onConfigUpdate() {
                        this._aroundTouchInterval = void 0 !== this._configurationRepository.get(_.motionPaddingAroundTouchMSec) ? this._configurationRepository.get(_.motionPaddingAroundTouchMSec) : this._aroundTouchInterval,
                        this._isMotionAroundTouchEnabled = void 0 !== this._configurationRepository.get(_.isMotionAroundTouchEnabled) ? this._configurationRepository.get(_.isMotionAroundTouchEnabled) : this._isMotionAroundTouchEnabled
                    }
                }, {
                    key: "_sendBuffer",
                    value: function _sendBuffer() {
                        var e = this._utils.dateNow();
                        C.debug("sending history sensors buffer ts=".concat(e));
                        for (var t = 0, n = this._historyBuffer.length; t < n; t++)
                            e - this._historyBuffer[t].timestamp <= this._aroundTouchInterval && this._dataQueue.addToQueue(this._historyBuffer[t].name, this._historyBuffer[t].data, this._historyBuffer[t].addCtxId, this._historyBuffer[t].isImmediateWup);
                        this._historyBuffer = []
                    }
                }, {
                    key: "_onTouch",
                    value: function _onTouch(e) {
                        return this._isMotionAroundTouchEnabled && (this._isTouchInProgress || e.action !== ve.touchstart && e.action !== Se.keydown ? e.action === ve.touchend || e.action === Se.keyup ? (this._touchStartCount--,
                        this._touchStartCount <= 0 && (this._isTouchInProgress = !1,
                        this._isPostTouch = !0,
                        this._touchEndTime = this._utils.dateNow(),
                        C.debug("stopped touch event in sensors data q ts=".concat(this._utils.dateNow())))) : e.action !== ve.touchstart && e.action !== Se.keydown || this._touchStartCount++ : (C.debug("Started touch event in sensors data q ts=".concat(this._utils.dateNow())),
                        this._isTouchInProgress = !0,
                        this._touchStartCount = 1,
                        this._sendBuffer())),
                        !1
                    }
                }]),
                SensorsDataQueue
            }();
            function XPathHashProducer_defineProperties(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            var Oe = function() {
                function XPathHashProducer() {
                    !function XPathHashProducer_classCallCheck(e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, XPathHashProducer),
                    this._initialize()
                }
                return function XPathHashProducer_createClass(e, t, n) {
                    t && XPathHashProducer_defineProperties(e.prototype, t),
                    n && XPathHashProducer_defineProperties(e, n)
                }(XPathHashProducer, [{
                    key: "_initialize",
                    value: function _initialize() {
                        this._nodeParentHash = new WeakMap,
                        this._nodeNameOccurencesPerParent = [],
                        this._nodeNameOccurencesPerParent.push({})
                    }
                }, {
                    key: "getUniqueElementName",
                    value: function getUniqueElementName(e) {
                        return e.nodeName.toLowerCase() + (e.id || "") + (e.name || "") + (e.href || "") + (e.getAttribute && e.getAttribute("class") || "") + (e.title || "")
                    }
                }, {
                    key: "produce",
                    value: function produce(e) {
                        var t, n = [], r = e, i = (e.id || "") + (e.name || "") + (e.nodeName || "") + (e.className || "") + (e.title || "") + (e.href || "");
                        if (e.parentNode && this._nodeParentHash.has(e.parentNode)) {
                            var o = e.nodeName.toLowerCase()
                              , s = this._nodeParentHash.get(e.parentNode)
                              , a = s.occurrencesIndex
                              , u = 0;
                            return this._nodeNameOccurencesPerParent[a] && (void 0 !== this._nodeNameOccurencesPerParent[a][o] ? (u = ++this._nodeNameOccurencesPerParent[a][o],
                            this._nodeNameOccurencesPerParent[a][o] = u) : this._nodeNameOccurencesPerParent[a][o] = 0),
                            i += s.hash + "," + this.getUniqueElementName(e) + (u || "")
                        }
                        t = e.parentNode || !1;
                        for (var c = 0; e && 1 === e.nodeType; e = e.parentNode) {
                            for (var l = 0, f = e.previousSibling; f; f = f.previousSibling)
                                f.nodeType !== Node.DOCUMENT_TYPE_NODE && f.nodeName === e.nodeName && (c = ++l);
                            var d = this.getUniqueElementName(e)
                              , h = l || "";
                            n.splice(0, 0, d + h)
                        }
                        i += n.length ? "/" + n.join() : "";
                        s = [];
                        return 0 < n.length && (s = n.slice(0, n.length - 1)),
                        t && ((u = {})[r.nodeName.toLowerCase()] = c,
                        u = this._nodeNameOccurencesPerParent.push(u) - 1,
                        this._nodeParentHash.set(t, {
                            hash: "/" + s.join(),
                            occurrencesIndex: u
                        })),
                        i
                    }
                }]),
                XPathHashProducer
            }();
            function ElementsCollector_typeof(e) {
                return (ElementsCollector_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function _typeof(e) {
                    return typeof e
                }
                : function _typeof(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }
                )(e)
            }
            function ElementsCollector_defineProperties(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            function ElementsCollector_setPrototypeOf(e, t) {
                return (ElementsCollector_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(e, t) {
                    return e.__proto__ = t,
                    e
                }
                )(e, t)
            }
            function ElementsCollector_createSuper(n) {
                var r = function ElementsCollector_isNativeReflectConstruct() {
                    if ("undefined" == typeof Reflect || !Reflect.construct)
                        return !1;
                    if (Reflect.construct.sham)
                        return !1;
                    if ("function" == typeof Proxy)
                        return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})),
                        !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function _createSuperInternal() {
                    var e, t = ElementsCollector_getPrototypeOf(n);
                    return function ElementsCollector_possibleConstructorReturn(e, t) {
                        return !t || "object" !== ElementsCollector_typeof(t) && "function" != typeof t ? function ElementsCollector_assertThisInitialized(e) {
                            if (void 0 !== e)
                                return e;
                            throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
                        }(e) : t
                    }(this, r ? (e = ElementsCollector_getPrototypeOf(this).constructor,
                    Reflect.construct(t, arguments, e)) : t.apply(this, arguments))
                }
            }
            function ElementsCollector_getPrototypeOf(e) {
                return (ElementsCollector_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                }
                )(e)
            }
            var Re = function() {
                !function ElementsCollector_inherits(e, t) {
                    if ("function" != typeof t && null !== t)
                        throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }),
                    t && ElementsCollector_setPrototypeOf(e, t)
                }(ElementsCollector, fe);
                var o = ElementsCollector_createSuper(ElementsCollector);
                function ElementsCollector(e, t, n, r) {
                    var i;
                    return function ElementsCollector_classCallCheck(e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, ElementsCollector),
                    (i = o.call(this))._configurationRepository = e,
                    i._utils = t,
                    i._dataQueue = n,
                    i._contextMgr = r,
                    i._elementHashWMap = new WeakMap,
                    i._collectPosition = !0,
                    i._collectClassName = !0,
                    i._collectTitle = !0,
                    i._collectHref = !0,
                    i._collectCustomElementAttribute = !0,
                    i._customElementAttribute = i._configurationRepository.get(_.customElementAttribute),
                    i._maxElemValLength = 30,
                    i._XPathHashProducer = new Oe,
                    i._allowedUnmaskedValuesList = i._configurationRepository.get(_.allowedUnmaskedValuesList),
                    i._enableUnmaskedValues = i._configurationRepository.get(_.enableUnmaskedValues),
                    i
                }
                return function ElementsCollector_createClass(e, t, n) {
                    t && ElementsCollector_defineProperties(e.prototype, t),
                    n && ElementsCollector_defineProperties(e, n)
                }(ElementsCollector, [{
                    key: "getElement",
                    value: function getElement(e) {
                        if (this._utils.isUndefinedNull(e) || e === document || e === document.body)
                            return -1;
                        var t, n = -1;
                        return this._elementHashWMap.has(e) ? n = this._elementHashWMap.get(e).hash : (n = (t = this._XPathHashProducer.produce(e)) ? this._utils.getHash(t) : -1,
                        this._elementHashWMap.set(e, {
                            hash: n,
                            contextList: [this._contextMgr.contextName]
                        }),
                        this._sendElementToServer(e, n)),
                        n
                    }
                }, {
                    key: "resendElementPerContext",
                    value: function resendElementPerContext(e) {
                        var t, n;
                        this._elementHashWMap.has(e) ? (n = (t = this._elementHashWMap.get(e)).hash,
                        t.contextList.indexOf(this._contextMgr.contextName) < 0 && (t.contextList.push(this._contextMgr.contextName),
                        this._elementHashWMap.set(e, {
                            hash: t.hash,
                            contextList: t.contextList
                        }),
                        this._sendElementToServer(e, n))) : C.error("received for resendElementPerContext bad element, not in hash map. id=".concat(e.id))
                    }
                }, {
                    key: "isListed",
                    value: function isListed(e) {
                        return this._elementHashWMap.has(e)
                    }
                }, {
                    key: "getElementData",
                    value: function getElementData(e) {
                        return this._elementHashWMap.get(e)
                    }
                }, {
                    key: "getElementContextList",
                    value: function getElementContextList(e) {
                        return this._elementHashWMap.get(e).contextList
                    }
                }, {
                    key: "_sendElementToServer",
                    value: function _sendElementToServer(e, t) {
                        var n = this._collectPosition ? e.getBoundingClientRect && e.getBoundingClientRect() : null
                          , r = -1
                          , i = -1
                          , o = -1
                          , s = -1;
                        n && (r = Math.round(n.left),
                        i = Math.round(n.top),
                        o = Math.round(n.right - n.left),
                        s = Math.round(n.bottom - n.top));
                        var a = this._verifyNoPrivateData(e.id || "")
                          , u = this._verifyNoPrivateData(e.name || "")
                          , c = this._collectClassName && e.getAttribute && this._verifyNoPrivateData(e.getAttribute("class")) || ""
                          , l = this._collectTitle && this._verifyNoPrivateData(e.title) || ""
                          , f = this._verifyNoPrivateData(e.nodeName) || ""
                          , d = this._collectHref && this._verifyNoPrivateData(e.href) || "";
                        0 < d.length && (d = this._utils.clearTextFromNumbers(d));
                        var h = this._collectCustomElementAttribute && e.getAttribute && this._verifyNoPrivateData(e.getAttribute(this._customElementAttribute)) || ""
                          , p = "";
                        "SELECT" === e.nodeName && (p = this._utils.getDropDownListValues(e).join(";"));
                        var v = e.value || e.textContent || e.innerHTML || ""
                          , _ = "";
                        this._enableUnmaskedValues && Array.isArray(this._allowedUnmaskedValuesList) && 0 < this._allowedUnmaskedValuesList.length && this._allowedUnmaskedValuesList.forEach(function(e) {
                            "string" != typeof e ? C.error("Unsupported allowedUnmaksedValuesList value was provided: ".concat(e.toString())) : e.toLowerCase() === v.trim().toLowerCase() && (_ = e)
                        }),
                        v = v.length > this._maxElemValLength ? "" : this._utils.maskText(v.toString());
                        var m = this._utils.isUndefinedNull(e.checked) ? -1 : e.checked ? 1 : 0
                          , n = this.getEventTimestamp();
                        this._dataQueue.addToQueue("elements", [this._contextMgr.contextId, t, f || "", a || "", u || "", e.type || "", r || 0, i || 0, o || 0, s || 0, c || "", d || "", l || "", e.alt || "", p || "", v || "", m, n, h, _], !1),
                        C.isDebug() && C.debug("adding element id:" + a + ", name:" + u + ", type:" + e.type + ", width:" + o + ", height:" + s + ", left:" + r + ", top:" + i + ", hash: " + t)
                    }
                }, {
                    key: "_verifyNoPrivateData",
                    value: function _verifyNoPrivateData(e) {
                        return /\d\d\d/.test(e) ? this._utils.clearTextFromNumbers(e) : e
                    }
                }, {
                    key: "updateFeatureConfig",
                    value: function updateFeatureConfig() {
                        this._collectPosition = "boolean" == typeof this._configurationRepository.get("isElementsPosition") ? this._configurationRepository.get("isElementsPosition") : this._collectPosition,
                        this._collectClassName = "boolean" == typeof this._configurationRepository.get("isElementsClassName") ? this._configurationRepository.get("isElementsClassName") : this._collectClassName,
                        this._collectTitle = "boolean" == typeof this._configurationRepository.get("isElementsTitle") ? this._configurationRepository.get("isElementsTitle") : this._collectTitle,
                        this._collectHref = "boolean" == typeof this._configurationRepository.get("isElementsHref") ? this._configurationRepository.get("isElementsHref") : this._collectHref,
                        this._collectCustomElementAttribute = "boolean" == typeof this._configurationRepository.get(_.collectCustomElementAttribute) ? this._configurationRepository.get(_.collectCustomElementAttribute) : this._collectCustomElementAttribute,
                        this._customElementAttribute = "string" == typeof this._configurationRepository.get(_.customElementAttribute) ? this._configurationRepository.get(_.customElementAttribute) : this._customElementAttribute,
                        this._maxElemValLength = this._configurationRepository.get("maxElValLen") ? this._configurationRepository.get("maxElValLen") : this._maxElemValLength,
                        this._allowedUnmaskedValuesList = this._configurationRepository.get("allowedUnmaskedValuesList") ? this._configurationRepository.get("allowedUnmaskedValuesList") : this._allowedUnmaskedValuesList,
                        this._enableUnmaskedValues = this._configurationRepository.get("enableUnmaskedValues") ? this._configurationRepository.get("enableUnmaskedValues") : this._enableUnmaskedValues
                    }
                }]),
                ElementsCollector
            }()
              , Fe = {
                rtcframe: "cd__rtcframe",
                fontDetectionFrame: "cd__fontDetectionFrame",
                ignorePrefixFrame: "cd__frame__"
            };
            function FramesDetector_defineProperties(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            var De = function() {
                function FramesDetector(e, t) {
                    !function FramesDetector_classCallCheck(e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, FramesDetector),
                    this._elementsMutationObserverFactory = e,
                    this._domUtils = t,
                    this._windowMutationObservers = V(),
                    this._loadedFrames = V(),
                    this._framesToIgnore = Y(),
                    this._frameSelector = "frame, iframe",
                    this._frameLoadedCallback = this._onFrameLoad.bind(this),
                    this.frameAdded = new ee,
                    this.frameRemoved = new ee,
                    this.frameInaccessible = new ee
                }
                return function FramesDetector_createClass(e, t, n) {
                    t && FramesDetector_defineProperties(e.prototype, t),
                    n && FramesDetector_defineProperties(e, n)
                }(FramesDetector, [{
                    key: "frames",
                    get: function get() {
                        var n = [];
                        return this._loadedFrames.forEach(function(e, t) {
                            n.push(t)
                        }),
                        n
                    }
                }, {
                    key: "start",
                    value: function start(e) {
                        var t = this;
                        this._monitorWindow(e),
                        this._findFrames(e.document).forEach(function(e) {
                            t._processNewFrame(e)
                        })
                    }
                }, {
                    key: "stop",
                    value: function stop() {
                        this._windowMutationObservers.forEach(function(e) {
                            e.disconnect()
                        }),
                        this._windowMutationObservers.clear(),
                        this._loadedFrames.clear(),
                        this._framesToIgnore.clear()
                    }
                }, {
                    key: "addToIgnoreList",
                    value: function addToIgnoreList(e) {
                        this._framesToIgnore.add(e)
                    }
                }, {
                    key: "_monitorWindow",
                    value: function _monitorWindow(e) {
                        var t;
                        this._windowMutationObservers.has(e) || ((t = new this._elementsMutationObserverFactory.create(e,self.MutationObserver)).observe(e.document),
                        t.nodeAdded.subscribe(this._processAddedNode.bind(this)),
                        t.nodeRemoved.subscribe(this._processRemovedNode.bind(this)),
                        this._windowMutationObservers.set(e, t))
                    }
                }, {
                    key: "_unMonitorWindow",
                    value: function _unMonitorWindow(e) {
                        var t = this._windowMutationObservers.get(e);
                        t && t.disconnect(),
                        this._windowMutationObservers.delete(e)
                    }
                }, {
                    key: "_processAddedNode",
                    value: function _processAddedNode(e) {
                        var t = this;
                        this._domUtils.matches(e, this._frameSelector) ? this._processNewFrame(e) : e.hasChildNodes() && this._findFrames(e).forEach(function(e) {
                            t._processNewFrame(e)
                        })
                    }
                }, {
                    key: "_processNewFrame",
                    value: function _processNewFrame(e) {
                        this._framesToIgnore.has(e.id) || e.id.startsWith(Fe.ignorePrefixFrame) || this._loadedFrames.has(e) || (this._domUtils.addEventListener(e, "load", this._frameLoadedCallback),
                        this._domUtils.canAccessIFrame(e) ? this._domUtils.isWindowDocumentReady(e.contentWindow) && this._addFrame(e) : this.frameInaccessible.publish(e))
                    }
                }, {
                    key: "_addFrame",
                    value: function _addFrame(e) {
                        var t = this;
                        this._monitorWindow(e.contentWindow),
                        this._findFrames(e.contentWindow.document).forEach(function(e) {
                            t._processNewFrame(e)
                        }),
                        this._loadedFrames.set(e, e.contentDocument),
                        this.frameAdded.publish(e)
                    }
                }, {
                    key: "_processRemovedNode",
                    value: function _processRemovedNode(e) {
                        var t = this;
                        this._domUtils.matches(e, this._frameSelector) ? this._removeFrame(e) : e.hasChildNodes() && this._findFrames(e).forEach(function(e) {
                            t._removeFrame(e)
                        })
                    }
                }, {
                    key: "_removeFrame",
                    value: function _removeFrame(e) {
                        this._unMonitorWindow(e.contentWindow),
                        this._domUtils.removeEventListener(e, "load", this._frameLoadedCallback),
                        this._loadedFrames.delete(e) && this.frameRemoved.publish(e)
                    }
                }, {
                    key: "_onFrameLoad",
                    value: function _onFrameLoad(e) {
                        e = e.target;
                        this._loadedFrames.has(e) && this._removeFrame(e),
                        this._processNewFrame(e)
                    }
                }, {
                    key: "_findFrames",
                    value: function _findFrames(e) {
                        for (var t = [], n = [], r = e.querySelectorAll(this._frameSelector), i = 0; i < r.length; i++)
                            n.push(r[i]);
                        for (var o = 0; o < n.length; o++) {
                            var s, a = n[o];
                            t.push(a),
                            this._domUtils.canAccessIFrame(a) ? 0 < (s = this._findFrames(a.contentWindow.document)).length && (t = t.concat(s)) : this.frameInaccessible.publish(a)
                        }
                        return t
                    }
                }]),
                FramesDetector
            }();
            function FramesHandlerBase_defineProperties(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            var Me = function() {
                function FramesHandlerBase() {
                    !function FramesHandlerBase_classCallCheck(e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, FramesHandlerBase)
                }
                return function FramesHandlerBase_createClass(e, t, n) {
                    t && FramesHandlerBase_defineProperties(e.prototype, t),
                    n && FramesHandlerBase_defineProperties(e, n)
                }(FramesHandlerBase, [{
                    key: "startFeatures",
                    value: function startFeatures() {}
                }, {
                    key: "startFeature",
                    value: function startFeature() {}
                }, {
                    key: "stopFeatures",
                    value: function stopFeatures() {}
                }, {
                    key: "stopFeature",
                    value: function stopFeature() {}
                }, {
                    key: "updateFeatureConfig",
                    value: function updateFeatureConfig() {}
                }]),
                FramesHandlerBase
            }();
            function BrowserContext_defineProperties(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            var Te = function() {
                function BrowserContext(e) {
                    !function BrowserContext_classCallCheck(e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, BrowserContext),
                    this.context = e || window.self
                }
                return function BrowserContext_createClass(e, t, n) {
                    t && BrowserContext_defineProperties(e.prototype, t),
                    n && BrowserContext_defineProperties(e, n)
                }(BrowserContext, [{
                    key: "Context",
                    get: function get() {
                        return this.context
                    }
                }, {
                    key: "getDocument",
                    value: function getDocument() {
                        return this.context.document
                    }
                }]),
                BrowserContext
            }();
            function FrameContext_typeof(e) {
                return (FrameContext_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function _typeof(e) {
                    return typeof e
                }
                : function _typeof(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }
                )(e)
            }
            function FrameContext_defineProperties(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            function FrameContext_setPrototypeOf(e, t) {
                return (FrameContext_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(e, t) {
                    return e.__proto__ = t,
                    e
                }
                )(e, t)
            }
            function FrameContext_createSuper(n) {
                var r = function FrameContext_isNativeReflectConstruct() {
                    if ("undefined" == typeof Reflect || !Reflect.construct)
                        return !1;
                    if (Reflect.construct.sham)
                        return !1;
                    if ("function" == typeof Proxy)
                        return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})),
                        !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function _createSuperInternal() {
                    var e, t = FrameContext_getPrototypeOf(n);
                    return function FrameContext_possibleConstructorReturn(e, t) {
                        return !t || "object" !== FrameContext_typeof(t) && "function" != typeof t ? function FrameContext_assertThisInitialized(e) {
                            if (void 0 !== e)
                                return e;
                            throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
                        }(e) : t
                    }(this, r ? (e = FrameContext_getPrototypeOf(this).constructor,
                    Reflect.construct(t, arguments, e)) : t.apply(this, arguments))
                }
            }
            function FrameContext_getPrototypeOf(e) {
                return (FrameContext_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                }
                )(e)
            }
            var Be = function() {
                !function FrameContext_inherits(e, t) {
                    if ("function" != typeof t && null !== t)
                        throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }),
                    t && FrameContext_setPrototypeOf(e, t)
                }(FrameContext, Te);
                var e = FrameContext_createSuper(FrameContext);
                function FrameContext() {
                    return function FrameContext_classCallCheck(e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, FrameContext),
                    e.apply(this, arguments)
                }
                return function FrameContext_createClass(e, t, n) {
                    t && FrameContext_defineProperties(e.prototype, t),
                    n && FrameContext_defineProperties(e, n)
                }(FrameContext, [{
                    key: "getDocument",
                    value: function getDocument() {
                        return this.context.document || this.context.contentDocument
                    }
                }]),
                FrameContext
            }();
            function FramesHandler_typeof(e) {
                return (FramesHandler_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function _typeof(e) {
                    return typeof e
                }
                : function _typeof(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }
                )(e)
            }
            function FramesHandler_defineProperties(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            function FramesHandler_setPrototypeOf(e, t) {
                return (FramesHandler_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(e, t) {
                    return e.__proto__ = t,
                    e
                }
                )(e, t)
            }
            function FramesHandler_createSuper(n) {
                var r = function FramesHandler_isNativeReflectConstruct() {
                    if ("undefined" == typeof Reflect || !Reflect.construct)
                        return !1;
                    if (Reflect.construct.sham)
                        return !1;
                    if ("function" == typeof Proxy)
                        return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})),
                        !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function _createSuperInternal() {
                    var e, t = FramesHandler_getPrototypeOf(n);
                    return function FramesHandler_possibleConstructorReturn(e, t) {
                        return !t || "object" !== FramesHandler_typeof(t) && "function" != typeof t ? FramesHandler_assertThisInitialized(e) : t
                    }(this, r ? (e = FramesHandler_getPrototypeOf(this).constructor,
                    Reflect.construct(t, arguments, e)) : t.apply(this, arguments))
                }
            }
            function FramesHandler_assertThisInitialized(e) {
                if (void 0 === e)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }
            function FramesHandler_getPrototypeOf(e) {
                return (FramesHandler_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                }
                )(e)
            }
            var xe = function() {
                !function FramesHandler_inherits(e, t) {
                    if ("function" != typeof t && null !== t)
                        throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }),
                    t && FramesHandler_setPrototypeOf(e, t)
                }(FramesHandler, Me);
                var i = FramesHandler_createSuper(FramesHandler);
                function FramesHandler(e, t, n) {
                    var r;
                    return function FramesHandler_classCallCheck(e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, FramesHandler),
                    (r = i.call(this))._framesCache = e,
                    r._framesDetector = t,
                    r._framesDetector.frameAdded.subscribe(r._onFrameAdded.bind(FramesHandler_assertThisInitialized(r))),
                    r._framesDetector.frameRemoved.subscribe(r._onFrameRemoved.bind(FramesHandler_assertThisInitialized(r))),
                    r._framesDetector.frameInaccessible.subscribe(r._onFrameInaccessible.bind(FramesHandler_assertThisInitialized(r))),
                    r._featuresList = [],
                    r._domUtils = n,
                    r._framesDetector.addToIgnoreList(Fe.rtcframe),
                    r._framesDetector.addToIgnoreList(Fe.fontDetectionFrame),
                    r._framesDetector.start(window.self),
                    r._buildFramesCache(),
                    r
                }
                return function FramesHandler_createClass(e, t, n) {
                    t && FramesHandler_defineProperties(e.prototype, t),
                    n && FramesHandler_defineProperties(e, n)
                }(FramesHandler, [{
                    key: "startFeatures",
                    value: function startFeatures(e) {
                        try {
                            if (this._buildFeaturesMap(e),
                            0 === this._featuresList.length)
                                return;
                            C.debug("startFeatures:Running features on ".concat(this._framesCache.count, " frames")),
                            this._startFeaturesOnFrames(this._framesCache.contexts, e)
                        } catch (e) {
                            C.debug("Failed to start features in FrameHandler.startFeatures: ".concat(e.message), e)
                        }
                    }
                }, {
                    key: "startFeature",
                    value: function startFeature(e) {
                        try {
                            this._featuresList.push(e),
                            e.isRunning = !0,
                            this._startFeaturesOnFrames(this._framesCache.contexts, [e])
                        } catch (e) {
                            C.debug("Failed to start feature in FrameHandler.startFeature: ".concat(e.message), e)
                        }
                    }
                }, {
                    key: "stopFeatures",
                    value: function stopFeatures(e) {
                        try {
                            this._stopFeaturesOnFrames(e, this._framesCache.contexts)
                        } catch (e) {
                            C.debug("Failed to stop features in FrameHandler.stopFeatures: ".concat(e.message), e)
                        }
                    }
                }, {
                    key: "stopFeature",
                    value: function stopFeature(e) {
                        try {
                            e.isRunning = !1,
                            this._stopFeaturesOnFrames([e], this._framesCache.contexts)
                        } catch (e) {
                            C.debug("Failed to stop feature in FrameHandler.stopFeature: ".concat(e.message), e)
                        }
                    }
                }, {
                    key: "updateFeatureConfig",
                    value: function updateFeatureConfig(e) {
                        e.instance.updateFeatureConfig && this._updateFeaturesConfigOnFrames([e], this._framesCache.contexts)
                    }
                }, {
                    key: "_onFrameAdded",
                    value: function _onFrameAdded(t) {
                        try {
                            C.debug("Frame:".concat(t.name, ", id:").concat(t.id, ". was loaded.")),
                            this._framesCache.exists(t) ? this._framesCache.unRegisterContextFeatures(t, this._featuresList) : this._framesCache.add(t),
                            this._startFeaturesOnFrames([t], this._featuresList)
                        } catch (e) {
                            C.warn("Failed to start features on frame ".concat(t.id, ": ").concat(e.message), e)
                        }
                    }
                }, {
                    key: "_onFrameRemoved",
                    value: function _onFrameRemoved(t) {
                        try {
                            C.debug("Frame:".concat(t.name, ", id:").concat(t.id, ". was removed.")),
                            this._stopFeaturesOnFrames(this._featuresList, [t])
                        } catch (e) {
                            C.warn("Failed to stop features on frame ".concat(t.id, ": ").concat(e.message), e)
                        }
                    }
                }, {
                    key: "_onFrameInaccessible",
                    value: function _onFrameInaccessible(e) {
                        C.debug("Frame:".concat(e.name, ", id:").concat(e.id, ". was detected as inaccessible."))
                    }
                }, {
                    key: "_buildFeaturesMap",
                    value: function _buildFeaturesMap(e) {
                        var t = this;
                        this._featuresList = [],
                        e.forEach(function(e) {
                            t._featuresList.push(e)
                        })
                    }
                }, {
                    key: "_buildFramesCache",
                    value: function _buildFramesCache() {
                        var t = this;
                        this._framesDetector.frames.forEach(function(e) {
                            t._framesCache.exists(e) || t._framesCache.add(e)
                        })
                    }
                }, {
                    key: "_startFeaturesOnFrames",
                    value: function _startFeaturesOnFrames(e, r) {
                        var i = this;
                        e.forEach(function(t) {
                            try {
                                if (!i._domUtils.canAccessIFrame(t))
                                    return;
                                for (var e = 0; e < r.length; e++) {
                                    var n = r[e];
                                    n.shouldRun && !i._framesCache.hasFeature(t, n) && (i._framesCache.registerContextFeature(t, n),
                                    i._domUtils.isWindowDocumentReady(t.contentWindow) && (C.debug("_startFeaturesOnFrames: run feature on frame:".concat(t.name, ", id:").concat(t.id, ". feature:").concat(n.configKey)),
                                    i._runFeatureOnFrame.cdCallAsync(i, t, n),
                                    n.isRunning = !0))
                                }
                            } catch (e) {
                                C.error("An error has occurred while starting features on frame ".concat(t.name, " with id: ").concat(t.id, ". Error: ").concat(e.message), e)
                            }
                        })
                    }
                }, {
                    key: "_runFeatureOnFrame",
                    value: function _runFeatureOnFrame(t, n) {
                        try {
                            this._domUtils.canAccessIFrame(t) ? n.instance.startFeature(new Be(t.contentWindow)) : C.debug("Not starting features on frame ".concat(t.name, " with id: ").concat(t.id, " as it is not accessible"))
                        } catch (e) {
                            C.error("An error has occurred while starting feature ".concat(n.configKey, " on frame ").concat(t.name, " with id: ").concat(t.id, ". Error: ").concat(e.message), e)
                        }
                    }
                }, {
                    key: "_stopFeaturesOnFrames",
                    value: function _stopFeaturesOnFrames(r, e) {
                        var i = this;
                        try {
                            e.forEach(function(t) {
                                try {
                                    if (!i._domUtils.canAccessIFrame(t))
                                        return;
                                    if (t.contentWindow && t.contentWindow.document)
                                        for (var e = 0, n = r.length; e < n; e++)
                                            i._framesCache.hasFeature(t, r[e]) && i._stopFeatureOnFrame.cdCallAsync(i, t, r[e]),
                                            r[e].isRunning = !1
                                } catch (e) {
                                    C.error("An error has occurred while stopping features on frame ".concat(t.name, " with id: ").concat(t.id, ". Error: ").concat(e.message), e)
                                }
                                i._framesCache.exists(t) && i._framesCache.unRegisterContextFeatures(t, r),
                                i._framesCache.remove(t)
                            })
                        } catch (e) {
                            C.warn("Failed stopping features on frames ".concat(e.message), e)
                        }
                    }
                }, {
                    key: "_stopFeatureOnFrame",
                    value: function _stopFeatureOnFrame(t, n) {
                        try {
                            this._domUtils.canAccessIFrame(t) ? n.instance.stopFeature(new Be(t.contentWindow)) : C.debug("Not stopping feature ".concat(n.configKey, " on frame ").concat(t.name, " with id: ").concat(t.id, " as it is not accessible"))
                        } catch (e) {
                            C.error("An error has occurred while stopping feature ".concat(n.configKey, " ").concat(func, " on frame ").concat(t.name, " with id: ").concat(t.id, ". Error: ").concat(e.message), e)
                        }
                    }
                }, {
                    key: "_updateFeaturesConfigOnFrames",
                    value: function _updateFeaturesConfigOnFrames(r, e) {
                        var i = this;
                        e.forEach(function(t) {
                            try {
                                if (!i._domUtils.canAccessIFrame(t))
                                    return;
                                for (var e = 0, n = r.length; e < n; e++)
                                    i._framesCache.hasFeature(t, r[e]) && i._updateFeatureConfigOnFrame.cdCallAsync(i, t, r[e])
                            } catch (e) {
                                C.error("An error has occurred while updating features configuration on frame ".concat(t.name, " with id: ").concat(t.id, ". Error: ").concat(e.message), e)
                            }
                        })
                    }
                }, {
                    key: "_updateFeatureConfigOnFrame",
                    value: function _updateFeatureConfigOnFrame(t, n) {
                        try {
                            this._domUtils.canAccessIFrame(t) ? n.instance.updateFeatureConfig(new Be(t.contentWindow)) : C.debug("Not updating feature ".concat(n.configKey, " config on frame ").concat(t.name, " with id: ").concat(t.id, " as it is not accessible"))
                        } catch (e) {
                            C.error("An error has occurred while updating feature ".concat(n.configKey, " config on frame ").concat(t.name, " with id: ").concat(t.id, ". Error: ").concat(e.message), e)
                        }
                    }
                }]),
                FramesHandler
            }();
            function NullFramesHandler_typeof(e) {
                return (NullFramesHandler_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function _typeof(e) {
                    return typeof e
                }
                : function _typeof(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }
                )(e)
            }
            function NullFramesHandler_setPrototypeOf(e, t) {
                return (NullFramesHandler_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(e, t) {
                    return e.__proto__ = t,
                    e
                }
                )(e, t)
            }
            function NullFramesHandler_createSuper(n) {
                var r = function NullFramesHandler_isNativeReflectConstruct() {
                    if ("undefined" == typeof Reflect || !Reflect.construct)
                        return !1;
                    if (Reflect.construct.sham)
                        return !1;
                    if ("function" == typeof Proxy)
                        return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})),
                        !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function _createSuperInternal() {
                    var e, t = NullFramesHandler_getPrototypeOf(n);
                    return function NullFramesHandler_possibleConstructorReturn(e, t) {
                        return !t || "object" !== NullFramesHandler_typeof(t) && "function" != typeof t ? function NullFramesHandler_assertThisInitialized(e) {
                            if (void 0 !== e)
                                return e;
                            throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
                        }(e) : t
                    }(this, r ? (e = NullFramesHandler_getPrototypeOf(this).constructor,
                    Reflect.construct(t, arguments, e)) : t.apply(this, arguments))
                }
            }
            function NullFramesHandler_getPrototypeOf(e) {
                return (NullFramesHandler_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                }
                )(e)
            }
            var Ie = function() {
                !function NullFramesHandler_inherits(e, t) {
                    if ("function" != typeof t && null !== t)
                        throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }),
                    t && NullFramesHandler_setPrototypeOf(e, t)
                }(NullFramesHandler, Me);
                var e = NullFramesHandler_createSuper(NullFramesHandler);
                function NullFramesHandler() {
                    return function NullFramesHandler_classCallCheck(e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, NullFramesHandler),
                    e.apply(this, arguments)
                }
                return NullFramesHandler
            }();
            function BrowserContextsCache_defineProperties(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            var Ae = function() {
                function BrowserContextsCache() {
                    !function BrowserContextsCache_classCallCheck(e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, BrowserContextsCache),
                    this._contexts = V()
                }
                return function BrowserContextsCache_createClass(e, t, n) {
                    t && BrowserContextsCache_defineProperties(e.prototype, t),
                    n && BrowserContextsCache_defineProperties(e, n)
                }(BrowserContextsCache, [{
                    key: "contexts",
                    get: function get() {
                        var n = [];
                        return this._contexts.forEach(function(e, t) {
                            n.push(t)
                        }),
                        n
                    }
                }, {
                    key: "browserContexts",
                    get: function get() {
                        var t = [];
                        return this._contexts.forEach(function(e) {
                            t.push(e.browserContext)
                        }),
                        t
                    }
                }, {
                    key: "count",
                    get: function get() {
                        return this._contexts.size
                    }
                }, {
                    key: "add",
                    value: function add(e) {
                        this._contexts.set(e, {
                            registered: !0,
                            features: V()
                        })
                    }
                }, {
                    key: "addBrowserContext",
                    value: function addBrowserContext(e) {
                        this._contexts.set(e.Context, {
                            registered: !0,
                            features: V(),
                            browserContext: e
                        })
                    }
                }, {
                    key: "remove",
                    value: function remove(e) {
                        this.exists(e) && 0 === this._contexts.get(e).features.size && this._contexts.delete(e)
                    }
                }, {
                    key: "get",
                    value: function get(e) {
                        return this._contexts.get(e)
                    }
                }, {
                    key: "exists",
                    value: function exists(e) {
                        return this._contexts.has(e) && this._contexts.get(e).registered
                    }
                }, {
                    key: "registerContextFeature",
                    value: function registerContextFeature(e, t) {
                        this.exists(e) && this._contexts.get(e).features.set(t.configKey, !0)
                    }
                }, {
                    key: "unRegisterContextFeature",
                    value: function unRegisterContextFeature(e, t) {
                        this.exists(e, t) && this._contexts.get(e).features.delete(t.configKey)
                    }
                }, {
                    key: "unRegisterContextFeatures",
                    value: function unRegisterContextFeatures(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var r = t[n];
                            this.unRegisterContextFeature(e, r)
                        }
                    }
                }, {
                    key: "hasFeature",
                    value: function hasFeature(e, t) {
                        return this.exists(e) && this._contexts.get(e).features.has(t.configKey)
                    }
                }]),
                BrowserContextsCache
            }();
            function Fa(e, t) {
                !function NodesRemovedMutationEvent_classCallCheck(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, Fa),
                this.browserContext = e,
                this.removedNodes = t
            }
            function Ga(e, t) {
                !function NodesAddedMutationEvent_classCallCheck(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, Ga),
                this.browserContext = e,
                this.addedNodes = t
            }
            function ElementsMutationObserver_defineProperties(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            var Le = function() {
                function ElementsMutationObserver(e, t) {
                    !function ElementsMutationObserver_classCallCheck(e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, ElementsMutationObserver),
                    function ElementsMutationObserver_defineProperty(e, t, n) {
                        t in e ? Object.defineProperty(e, t, {
                            value: n,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : e[t] = n
                    }(this, "ignoreNodeTypes", Y([Node.COMMENT_NODE, Node.TEXT_NODE, Node.ATTRIBUTE_NODE, Node.CDATA_SECTION_NODE])),
                    this._mutationObserver = new t(this._mutationObserved.bind(this, e)),
                    this.nodesAdded = new ee,
                    this.nodesRemoved = new ee,
                    this.nodeAdded = new ee,
                    this.nodeRemoved = new ee
                }
                return function ElementsMutationObserver_createClass(e, t, n) {
                    t && ElementsMutationObserver_defineProperties(e.prototype, t),
                    n && ElementsMutationObserver_defineProperties(e, n)
                }(ElementsMutationObserver, [{
                    key: "observe",
                    value: function observe(e) {
                        this._mutationObserver.observe(e, {
                            childList: !0,
                            subtree: !0
                        })
                    }
                }, {
                    key: "disconnect",
                    value: function disconnect() {
                        this._mutationObserver.disconnect()
                    }
                }, {
                    key: "_mutationObserved",
                    value: function _mutationObserved(t, e) {
                        var n = this;
                        e.forEach(function(e) {
                            n._processMutation(t, e)
                        })
                    }
                }, {
                    key: "_processMutation",
                    value: function _processMutation(e, t) {
                        var n = this._processNodes(t.addedNodes, this.nodeAdded)
                          , t = this._processNodes(t.removedNodes, this.nodeRemoved);
                        this._publishNodesMutationEvents(e, n, t)
                    }
                }, {
                    key: "_publishNodesMutationEvents",
                    value: function _publishNodesMutationEvents(e, t, n) {
                        0 < t.length && this.nodesAdded.publish(new Ga(e,t)),
                        0 < n.length && this.nodesRemoved.publish(new Fa(e,n))
                    }
                }, {
                    key: "_processNodes",
                    value: function _processNodes(e, t) {
                        for (var n = [], r = 0; r < e.length; r++) {
                            var i = e[r];
                            this._isValidNodeType(i) && (n.push(i),
                            t.publish(i))
                        }
                        return n
                    }
                }, {
                    key: "_isValidNodeType",
                    value: function _isValidNodeType(e) {
                        return !1 === this.ignoreNodeTypes.has(e.nodeType)
                    }
                }]),
                ElementsMutationObserver
            }();
            function ElementsMutationObserverFactory_defineProperties(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            var Ue = function() {
                function ElementsMutationObserverFactory() {
                    !function ElementsMutationObserverFactory_classCallCheck(e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, ElementsMutationObserverFactory)
                }
                return function ElementsMutationObserverFactory_createClass(e, t, n) {
                    t && ElementsMutationObserverFactory_defineProperties(e.prototype, t),
                    n && ElementsMutationObserverFactory_defineProperties(e, n)
                }(ElementsMutationObserverFactory, [{
                    key: "create",
                    value: function create(e, t) {
                        return new Le(e,t)
                    }
                }]),
                ElementsMutationObserverFactory
            }();
            function FramesHandlerFactory_defineProperties(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            var Ne = function() {
                function FramesHandlerFactory(e, t) {
                    !function FramesHandlerFactory_classCallCheck(e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, FramesHandlerFactory),
                    this._configurationRepository = e,
                    this._domUtils = t
                }
                return function FramesHandlerFactory_createClass(e, t, n) {
                    t && FramesHandlerFactory_defineProperties(e.prototype, t),
                    n && FramesHandlerFactory_defineProperties(e, n)
                }(FramesHandlerFactory, [{
                    key: "create",
                    value: function create() {
                        if (this._configurationRepository.get(_.enableFramesProcessing)) {
                            var e = new Ae
                              , t = new De(new Ue,this._domUtils);
                            return new xe(e,t,this._domUtils)
                        }
                        return new Ie
                    }
                }]),
                FramesHandlerFactory
            }();
            function FeatureService_defineProperties(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            var We = function() {
                function FeatureService(e, t, n, r, i) {
                    !function FeatureService_classCallCheck(e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, FeatureService),
                    this._features = e,
                    this._frameHandler = t,
                    this._configurationRepository = n,
                    this._domUtils = r,
                    this._browserContextsCache = i,
                    this.buildFrameRelatedLists()
                }
                return function FeatureService_createClass(e, t, n) {
                    t && FeatureService_defineProperties(e.prototype, t),
                    n && FeatureService_defineProperties(e, n)
                }(FeatureService, [{
                    key: "buildFrameRelatedLists",
                    value: function buildFrameRelatedLists() {
                        this._frameRelatedDefaultFeatures = this._collectFrameRelated(this._features.getDefaultFeatures()),
                        this._frameRelatedNonDefaultFeatures = this._collectFrameRelated(this._features.getNonDefaultFeatures())
                    }
                }, {
                    key: "runDefault",
                    value: function runDefault() {
                        C.info("Running default features"),
                        this._runFeatures(this._features.getDefaultFeatures(), this._frameRelatedDefaultFeatures)
                    }
                }, {
                    key: "stopDefault",
                    value: function stopDefault() {
                        C.info("Stopping default features"),
                        this._stopFeatures(this._features.getDefaultFeatures(), this._frameRelatedDefaultFeatures)
                    }
                }, {
                    key: "runPerSessionFeatures",
                    value: function runPerSessionFeatures() {
                        C.info("Running per session features"),
                        this._configurationRepository.isConfigurationUpdatedFromServer() ? this._startFeatures(this._features.getPerSessionFeatures()) : C.info("We didn't receive configurations from the server yet. Skipping per session features start until configuration arrives.")
                    }
                }, {
                    key: "stopPerSessionFeatures",
                    value: function stopPerSessionFeatures() {
                        C.info("Stopping per session features"),
                        this._stopFeatures(this._features.getPerSessionFeatures())
                    }
                }, {
                    key: "runNonDefault",
                    value: function runNonDefault() {
                        C.info("Running non default features"),
                        this._configurationRepository.isConfigurationUpdatedFromServer() ? this._runFeatures(this._features.getNonDefaultFeatures(), this._frameRelatedNonDefaultFeatures) : C.info("We didn't receive configurations from the server yet. Skipping non default features start until configuration arrives.")
                    }
                }, {
                    key: "stopNonDefault",
                    value: function stopNonDefault() {
                        C.info("Stopping non default features"),
                        this._stopFeatures(this._features.getNonDefaultFeatures(), this._frameRelatedNonDefaultFeatures)
                    }
                }, {
                    key: "runPerContextFeatures",
                    value: function runPerContextFeatures(e) {
                        C.info("Running per context features"),
                        this._configurationRepository.isConfigurationUpdatedFromServer() ? (this._runFeatures(this._features.getPerContextFeatures()),
                        "cd_auto" !== e.name && this._frameRelatedDefaultFeatures && this._frameHandler.startFeatures(this._frameRelatedDefaultFeatures)) : C.info("We didn't receive configurations from the server yet. Skipping per context features start until configuration arrives.")
                    }
                }, {
                    key: "stopPerContextFeatures",
                    value: function stopPerContextFeatures() {
                        C.info("Stopping per context features"),
                        this._stopFeatures(this._features.getPerContextFeatures())
                    }
                }, {
                    key: "stopAllFeatures",
                    value: function stopAllFeatures() {
                        C.info("Stopping all features"),
                        this.stopDefault(),
                        this.stopNonDefault(),
                        this.stopPerSessionFeatures(),
                        this.stopPerContextFeatures()
                    }
                }, {
                    key: "updateRunByConfig",
                    value: function updateRunByConfig(e) {
                        C.info("Updating features configuration"),
                        this._updateFeatures(this._features.getDefaultFeatures(), e),
                        this._updateFeatures(this._features.getNonDefaultFeatures(), e),
                        this._updateFeatures(this._features.getPerContextFeatures(), e)
                    }
                }, {
                    key: "runFeaturesOnBrowserContext",
                    value: function runFeaturesOnBrowserContext(t) {
                        var n = this._features.getDefaultFeatures();
                        n && (this._browserContextsCache.unRegisterContextFeatures(t.Context, n),
                        Object.keys(n).forEach(function(e) {
                            e = n[e];
                            e.shouldRun && e.isFrameRelated && (e.isRunning = !0,
                            e.instance && e.instance.startFeature.cdCallAsync(e.instance, t))
                        }))
                    }
                }, {
                    key: "stopFeaturesOnBrowserContextRemove",
                    value: function stopFeaturesOnBrowserContextRemove(t) {
                        var n = this._features.getDefaultFeatures();
                        n && (this._browserContextsCache.unRegisterContextFeatures(t.Context, n),
                        Object.keys(n).forEach(function(e) {
                            e = n[e];
                            e.shouldRun && e.isFrameRelated && e.isRunning && e.instance && e.instance.stopFeature.cdCallAsync(e.instance, t)
                        }))
                    }
                }, {
                    key: "_runFeatures",
                    value: function _runFeatures(t, e) {
                        var n = this;
                        t && Object.keys(t).forEach(function(e) {
                            e = t[e];
                            e.shouldRun && (e.instance.startFeature.cdCallAsync(e.instance, new Te(window.self)),
                            e.isRunning = !0)
                        }),
                        e && (this._frameHandler.startFeatures(e),
                        this._domUtils.onPageLoad(window, function() {
                            n._frameHandler.startFeatures(e)
                        }))
                    }
                }, {
                    key: "_stopFeatures",
                    value: function _stopFeatures(t, e) {
                        t && Object.keys(t).forEach(function(e) {
                            e = t[e];
                            e.instance.stopFeature && e.instance.stopFeature.cdCallAsync(e.instance, new Te(window.self)),
                            e.isRunning = !1
                        }),
                        e && this._frameHandler.stopFeatures(e)
                    }
                }, {
                    key: "_actOnFeature",
                    value: function _actOnFeature(e, t) {
                        e.isFrameRelated && this._frameHandler[t](e),
                        e.instance[t] && e.instance[t].cdCallAsync(e.instance, new Te(window.self))
                    }
                }, {
                    key: "_startFeatures",
                    value: function _startFeatures(n) {
                        var r = this;
                        n && Object.keys(n).forEach(function(e) {
                            var t = n[e]
                              , e = r._configurationRepository.get(t.configKey);
                            "boolean" == typeof e && (t.shouldRun = e),
                            t.shouldRun && (r._actOnFeature(t, "startFeature"),
                            t.isRunning = !0)
                        })
                    }
                }, {
                    key: "_startFeatureOnBrowserContexts",
                    value: function _startFeatureOnBrowserContexts(t) {
                        var n = this;
                        t.isFrameRelated && this._browserContextsCache.browserContexts.forEach(function(e) {
                            t.shouldRun && !n._browserContextsCache.hasFeature(e.Context, t) && (n._browserContextsCache.registerContextFeature(e.Context, t),
                            t.instance.startFeature.cdCallAsync(t.instance, e),
                            t.isRunning = !0)
                        })
                    }
                }, {
                    key: "_stopFeatureOnBrowserContexts",
                    value: function _stopFeatureOnBrowserContexts(t) {
                        var n = this;
                        t.isFrameRelated && this._browserContextsCache.browserContexts.forEach(function(e) {
                            n._browserContextsCache.hasFeature(e.Context, t) && t.instance.stopFeature.cdCallAsync(t.instance, e),
                            t.isRunning = !1,
                            n._browserContextsCache.exists(e.Context) && n._browserContextsCache.unRegisterContextFeature(e.Context, t),
                            n._browserContextsCache.remove(e.Context)
                        })
                    }
                }, {
                    key: "_updateFeatureConfigOnBrowserContexts",
                    value: function _updateFeatureConfigOnBrowserContexts(t) {
                        var n = this;
                        t.isFrameRelated && this._browserContextsCache.browserContexts.forEach(function(e) {
                            n._browserContextsCache.hasFeature(e.Context, t) && t.instance.updateFeatureConfig.cdCallAsync(t.instance, e)
                        })
                    }
                }, {
                    key: "_updateFeatures",
                    value: function _updateFeatures(n, r) {
                        var i = this;
                        n && Object.keys(n).forEach(function(e) {
                            var t = n[e]
                              , e = r.get(t.configKey);
                            "boolean" == typeof e && (t.shouldRun = e),
                            t.isRunning && !t.shouldRun ? (i._actOnFeature(t, "stopFeature"),
                            i._stopFeatureOnBrowserContexts(t),
                            t.isRunning = !1) : !t.isRunning && t.shouldRun && (i._actOnFeature(t, "startFeature"),
                            i._startFeatureOnBrowserContexts(t),
                            t.isRunning = !0),
                            t.isRunning && (i._actOnFeature(t, "updateFeatureConfig"),
                            i._updateFeatureConfigOnBrowserContexts(t))
                        })
                    }
                }, {
                    key: "_collectFrameRelated",
                    value: function _collectFrameRelated(t) {
                        var n = [];
                        return t && Object.keys(t).forEach(function(e) {
                            e = t[e];
                            e.isFrameRelated && n.push(e)
                        }),
                        n
                    }
                }]),
                FeatureService
            }();
            function PauseResumeManager_defineProperties(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            var je = {
                RUNNING: 0,
                PAUSED: 1
            }
              , He = function() {
                function PauseResumeManager(e, t, n) {
                    !function PauseResumeManager_classCallCheck(e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, PauseResumeManager),
                    this._featureMgr = e,
                    this._dataQ = n,
                    this._configurationRepository = t,
                    this._pauseResumeEnabled = t.get(_.stateChangeEnabled) || !1,
                    this._sdkState = je.RUNNING
                }
                return function PauseResumeManager_createClass(e, t, n) {
                    t && PauseResumeManager_defineProperties(e.prototype, t),
                    n && PauseResumeManager_defineProperties(e, n)
                }(PauseResumeManager, [{
                    key: "onResume",
                    value: function onResume() {
                        this._sdkState === je.PAUSED ? (C.info("Resuming JS SDK"),
                        this._featureMgr.updateRunByConfig(this._configurationRepository),
                        this._sdkState = je.RUNNING) : C.warn("PauseResumeManager:onResume - resume api called when SDK already running")
                    }
                }, {
                    key: "onPause",
                    value: function onPause() {
                        this._sdkState === je.RUNNING ? (C.info("Pausing JS SDK"),
                        this._featureMgr.stopAllFeatures(),
                        this._sdkState = je.PAUSED) : C.warn("Pause api called when SDK already paused")
                    }
                }, {
                    key: "onStateChange",
                    value: function onStateChange(e) {
                        e.toState && this._verifyApiAllowed(e.toState) && ("pause" === e.toState ? this.onPause() : "run" === e.toState ? this.onResume() : C.warn("stateChange api called with non valid toState: " + e.toState))
                    }
                }, {
                    key: "isCustomerApiEnabled",
                    value: function isCustomerApiEnabled() {
                        return this._sdkState === je.RUNNING
                    }
                }, {
                    key: "_verifyApiAllowed",
                    value: function _verifyApiAllowed(e) {
                        return !!this._pauseResumeEnabled || (this._dataQ.addToQueue("forbidden_api_call", [null, e]),
                        !1)
                    }
                }, {
                    key: "onConfigUpdate",
                    value: function onConfigUpdate() {
                        this._pauseResumeEnabled = this._configurationRepository.get(_.stateChangeEnabled) || !1,
                        !1 === this._configurationRepository.get("isEnabled") && this.onPause()
                    }
                }]),
                PauseResumeManager
            }()
              , Qe = "ContextChange"
              , ze = "ResetSession"
              , qe = "cdCustomerMetadata"
              , Ke = "cdChangeState"
              , Ve = "cdSetCsid"
              , Ge = "cdSetPsid";
            function CustomerApiBridge_defineProperties(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            var Ye = function() {
                function CustomerApiBridge(e, t, n, r) {
                    !function CustomerApiBridge_classCallCheck(e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, CustomerApiBridge),
                    this._pauseResumeMgr = e,
                    this._messageBus = t,
                    this._cdApiFacade = n,
                    this._utils = r,
                    this._createCommandToBusMessageMapping()
                }
                return function CustomerApiBridge_createClass(e, t, n) {
                    t && CustomerApiBridge_defineProperties(e.prototype, t),
                    n && CustomerApiBridge_defineProperties(e, n)
                }(CustomerApiBridge, [{
                    key: "enableApi",
                    value: function enableApi() {
                        C.info("Enabling api calls"),
                        this._onApiMessageBinded = this._onApiMessage.bind(this),
                        this._utils.addEventListener(window, "message", this._onApiMessageBinded, !0)
                    }
                }, {
                    key: "disableApi",
                    value: function disableApi() {
                        C.info("Disabling api calls"),
                        this._utils.removeEventListener(window, "message", this._onApiMessageBinded, !0)
                    }
                }, {
                    key: "getCustomerSessionID",
                    value: function getCustomerSessionID(t) {
                        this._cdApiFacade.getCustomerSessionID(function(e) {
                            t(e)
                        })
                    }
                }, {
                    key: "getLogServerAddress",
                    value: function getLogServerAddress(t) {
                        this._cdApiFacade.getLogServerAddress(function(e) {
                            t(e)
                        })
                    }
                }, {
                    key: "getServerAddress",
                    value: function getServerAddress(t) {
                        this._cdApiFacade.getServerAddress(function(e) {
                            t(e)
                        })
                    }
                }, {
                    key: "getConfigurations",
                    value: function getConfigurations(t) {
                        this._cdApiFacade.getConfigurations(function(e) {
                            t(e)
                        })
                    }
                }, {
                    key: "notifySessionReset",
                    value: function notifySessionReset(e) {
                        this._pauseResumeMgr.isCustomerApiEnabled() && window.postMessage({
                            type: "SNumNotification",
                            cdSNum: e
                        }, window.location.href)
                    }
                }, {
                    key: "isApiAvailable",
                    value: function isApiAvailable(e) {
                        return this._cdApiFacade.isApiAvailable(e)
                    }
                }, {
                    key: "_onApiMessage",
                    value: function _onApiMessage(e) {
                        var t = e.data
                          , n = t.type;
                        if (void 0 === n)
                            try {
                                n = (t = JSON.parse(t)).type
                            } catch (e) {}
                        (n === Ke || this._pauseResumeMgr.isCustomerApiEnabled() && this._apiCommandToBusMessageMapping[n]) && (e.preventDefault && e.preventDefault(),
                        e.stopPropagation && e.stopPropagation(),
                        this._messageBus.publish(this._apiCommandToBusMessageMapping[n], t))
                    }
                }, {
                    key: "_createCommandToBusMessageMapping",
                    value: function _createCommandToBusMessageMapping() {
                        this._apiCommandToBusMessageMapping = {},
                        this._apiCommandToBusMessageMapping[Qe] = ce.ApiContextChangeEvent,
                        this._apiCommandToBusMessageMapping[ze] = ce.ApiResetSessionEvent,
                        this._apiCommandToBusMessageMapping[qe] = ce.ApiCustomerMetadataEvent,
                        this._apiCommandToBusMessageMapping[Ke] = ce.ApiChangeStateEvent,
                        this._apiCommandToBusMessageMapping[Ve] = ce.ApiSetCsidEvent,
                        this._apiCommandToBusMessageMapping[Ge] = ce.ApiSetPsidEvent
                    }
                }]),
                CustomerApiBridge
            }();
            function MuidManager_defineProperties(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            var Ze = function() {
                function MuidManager(e, t, n) {
                    !function MuidManager_classCallCheck(e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, MuidManager),
                    this.muid = null,
                    this._utils = e,
                    this._storageUtilsWrapper = n,
                    this._dataQ = t,
                    this.EXPIRATION = e.minutesToMilliseconds(525600)
                }
                return function MuidManager_createClass(e, t, n) {
                    t && MuidManager_defineProperties(e.prototype, t),
                    n && MuidManager_defineProperties(e, n)
                }(MuidManager, [{
                    key: "initMuid",
                    value: function initMuid() {
                        var e = this._storageUtilsWrapper.getCookie("bmuid")
                          , t = this._storageUtilsWrapper.getFromLocalStorage("bmuid");
                        this.muid = e || t,
                        this.muid = this._utils.StorageUtils.validateBcId(this.muid),
                        this.muid || (this.muid = this._utils.dateNow() + "-" + this._utils.generateUUID().toUpperCase(),
                        C.info("Generated a new muid: ".concat(this.muid))),
                        this._storageUtilsWrapper.setCookie("bmuid", this.muid, this.EXPIRATION),
                        this._storageUtilsWrapper.saveToLocalStorage("bmuid", this.muid),
                        this._dataQ.addToQueue("static_fields", ["muid", this.muid], !1),
                        C.info("Muid is: ".concat(this.muid))
                    }
                }]),
                MuidManager
            }();
            function PsidCache_defineProperties(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            var Xe = function() {
                function PsidCache() {
                    !function PsidCache_classCallCheck(e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, PsidCache),
                    this._psid = null
                }
                return function PsidCache_createClass(e, t, n) {
                    t && PsidCache_defineProperties(e.prototype, t),
                    n && PsidCache_defineProperties(e, n)
                }(PsidCache, [{
                    key: "get",
                    value: function get() {
                        return this._psid
                    }
                }, {
                    key: "set",
                    value: function set(e) {
                        if (void 0 === e)
                            throw new Error("Invalid psid value of undefined");
                        this._psid = e
                    }
                }]),
                PsidCache
            }();
            function PsidService_defineProperties(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            var Je = function() {
                function PsidService(e, t) {
                    !function PsidService_classCallCheck(e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, PsidService),
                    this._psidCache = e,
                    this._workerCommunicator = t
                }
                return function PsidService_createClass(e, t, n) {
                    t && PsidService_defineProperties(e.prototype, t),
                    n && PsidService_defineProperties(e, n)
                }(PsidService, [{
                    key: "set",
                    value: function set(e) {
                        if (void 0 === e)
                            throw new Error("Invalid psid value of undefined");
                        this._psidCache.set(e),
                        this._workerCommunicator.sendAsync(A, {
                            psid: e
                        })
                    }
                }]),
                PsidService
            }();
            function SidRepository_defineProperties(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            var $e = function() {
                function SidRepository(e, t) {
                    !function SidRepository_classCallCheck(e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, SidRepository),
                    this.sidKey = "cdSNum",
                    this._utils = e,
                    this._storageUtilsWrapper = t,
                    this.COOKIE_EXPIRATION_IN_MILLISECONDS = this._utils.minutesToMilliseconds(525600)
                }
                return function SidRepository_createClass(e, t, n) {
                    t && SidRepository_defineProperties(e.prototype, t),
                    n && SidRepository_defineProperties(e, n)
                }(SidRepository, [{
                    key: "get",
                    value: function get() {
                        var e = this._storageUtilsWrapper.getCookie(this.sidKey);
                        if (!(t = this._validateSid(e))) {
                            C.info("Sid was not found in cookie. Trying to get it from the local storage.");
                            var t, e = this._storageUtilsWrapper.getFromLocalStorage(this.sidKey);
                            if (!(t = this._validateSid(e)))
                                return C.info("Sid was not found in local storage."),
                                null
                        }
                        return t
                    }
                }, {
                    key: "set",
                    value: function set(e) {
                        var t = e;
                        (t = this._validateSid(t)) ? (this._storageUtilsWrapper.saveToLocalStorage(this.sidKey, t) || C.error("Failed saving sid ".concat(e, " to local storage.")),
                        this._storageUtilsWrapper.setCookie(this.sidKey, t, this.COOKIE_EXPIRATION_IN_MILLISECONDS) || C.error("Failed saving sid ".concat(e, " to cookie."))) : C.error("Sid ".concat(e, " is invalid. Will not save it."))
                    }
                }, {
                    key: "_validateSid",
                    value: function _validateSid(e) {
                        return e || null
                    }
                }]),
                SidRepository
            }();
            function CsidCache_defineProperties(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            var et = function() {
                function CsidCache() {
                    !function CsidCache_classCallCheck(e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, CsidCache),
                    this._csid = null
                }
                return function CsidCache_createClass(e, t, n) {
                    t && CsidCache_defineProperties(e.prototype, t),
                    n && CsidCache_defineProperties(e, n)
                }(CsidCache, [{
                    key: "get",
                    value: function get() {
                        return this._csid
                    }
                }, {
                    key: "set",
                    value: function set(e) {
                        if (void 0 === e)
                            throw new Error("Invalid csid value of undefined");
                        this._csid = e
                    }
                }]),
                CsidCache
            }();
            function CsidService_defineProperties(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            var tt = function() {
                function CsidService(e, t, n) {
                    !function CsidService_classCallCheck(e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, CsidService),
                    this._customerApi = e,
                    this._csidCache = t,
                    this._workerCommunicator = n
                }
                return function CsidService_createClass(e, t, n) {
                    t && CsidService_defineProperties(e.prototype, t),
                    n && CsidService_defineProperties(e, n)
                }(CsidService, [{
                    key: "set",
                    value: function set(e) {
                        if (void 0 === e)
                            throw new Error("Invalid csid value of undefined");
                        this._csidCache.set(e),
                        this._workerCommunicator.sendAsync(I, {
                            csid: e
                        })
                    }
                }, {
                    key: "get",
                    value: function get(e) {
                        this._customerApi.isApiAvailable("getCustomerSessionID") ? this._getCsidWithRetries(0, e) : C.debug("getCustomerSessionID API is unavailable. Hopefully this is because the setCustomerSessionId API is being used")
                    }
                }, {
                    key: "_getCsidWithRetries",
                    value: function _getCsidWithRetries(t, n) {
                        var r = this;
                        try {
                            this._customerApi.getCustomerSessionID(function(e) {
                                return e ? (C.debug("Got csid after ".concat(t, " retries. csid: ").concat(e)),
                                r._csidCache.set(e),
                                void n()) : 20 <= t ? void C.info("Did not get a csid after all retries.") : (t++,
                                void setTimeout(r._getCsidWithRetries.bind(r, t, n), 200))
                            })
                        } catch (e) {
                            C.error("Failed to get csid: ".concat(e.message, ". retryCount: ").concat(t, "."), e),
                            ++t <= 20 && setTimeout(this._getCsidWithRetries.bind(this, t, n), 200)
                        }
                    }
                }]),
                CsidService
            }()
              , nt = {
                none: "none",
                init: "init",
                configuration: "config",
                configurationFromSlave: "configFromSlave",
                customerApi: "customerApi",
                pageTimeout: "timeout",
                unknown: "unknown"
            };
            function SessionService_defineProperties(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            var rt = function() {
                function SessionService(e, t, n, r, i, o, s, a, u, c, l, f, d, h) {
                    !function SessionService_classCallCheck(e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, SessionService),
                    this._messageBus = e,
                    this._configurationService = t,
                    this._configurationRepository = n,
                    this._utils = r,
                    this._domUtils = i,
                    this._workerComm = o,
                    this._contextMgr = s,
                    this._muidMgr = a,
                    this._serverStateMgr = u,
                    this._resetSessionSiteMapper = c,
                    this._sidRepository = l,
                    this._csidService = f,
                    this._csidCache = d,
                    this._psidCache = h,
                    this.lastExternalResetCallTime = null,
                    this.sessionId = null,
                    this._resetSessionSiteMapper.updateObserver(this._onSiteMapperMatch.bind(this)),
                    o.addMessageListener(oe.NewSessionStartedEvent, this._onNewSessionStartedEvent.bind(this))
                }
                return function SessionService_createClass(e, t, n) {
                    t && SessionService_defineProperties(e.prototype, t),
                    n && SessionService_defineProperties(e, n)
                }(SessionService, [{
                    key: "resumeOrStartSession",
                    value: function resumeOrStartSession() {
                        var e = this._getSessionId();
                        e ? this._resumeSession(e) : this._startNewSession()
                    }
                }, {
                    key: "onConfigUpdate",
                    value: function onConfigUpdate(e) {
                        this._resetSessionSiteMapper.onConfigUpdate(e),
                        this._configurationRepository.get("logAddress") && this._configurationService.updateLogUrlToWorker(this.sessionId, this._csidCache.get(), this._workerComm)
                    }
                }, {
                    key: "resetSession",
                    value: function resetSession(e) {
                        this.onResetSession(e)
                    }
                }, {
                    key: "onResetSession",
                    value: function onResetSession(e) {
                        e = e.resetReason || nt.unknown;
                        nt.hasOwnProperty(e) || (e = nt.customerApi),
                        C.info("Received a Reset Session event, reason: ".concat(e)),
                        this._utils.dateNow() - this.lastExternalResetCallTime > this._configurationRepository.get(_.resetSessionApiThreshold) ? (this._startNewSession(),
                        this._configurationService.updateLogUrlToWorker(this.sessionId, this._csidCache.get(), this._workerComm),
                        this.lastExternalResetCallTime = this._utils.dateNow()) : C.info("Ignoring external reset session call since resetSessionApiThreshold hasn't passed")
                    }
                }, {
                    key: "_startNewSession",
                    value: function _startNewSession() {
                        C.info("Starting a new session. Previous session was ".concat(this.sessionId)),
                        this.sessionId = null,
                        this._csidCache.set(null),
                        this._psidCache.set(null),
                        this._serverStateMgr.onSessionIdChange(),
                        this._onStartedNewSession()
                    }
                }, {
                    key: "_resumeSession",
                    value: function _resumeSession(e) {
                        C.info("Resuming an existing session with sid ".concat(e)),
                        this.sessionId = e,
                        this._saveSidToStorage(this.sessionId),
                        this._onResumedSession(),
                        this._handleCsid()
                    }
                }, {
                    key: "_getSessionId",
                    value: function _getSessionId() {
                        C.info("Attempting to get sid from storage");
                        var e = this._sidRepository.get();
                        return e && C.info("Read sid ".concat(e, " from storage")),
                        e
                    }
                }, {
                    key: "_saveSidToStorage",
                    value: function _saveSidToStorage(e) {
                        C.info("Saving sid ".concat(e, " to storage")),
                        this._sidRepository.set(e)
                    }
                }, {
                    key: "_onStartedNewSession",
                    value: function _onStartedNewSession() {
                        var e;
                        this._configurationRepository.get("serverAddress") && (e = {
                            serverAddress: this._configurationRepository.get("serverAddress"),
                            csid: this._csidCache.get(),
                            psid: this._psidCache.get(),
                            muid: this._muidMgr.muid,
                            context_name: this._contextMgr.contextName
                        },
                        this._workerComm.sendAsync(T, e),
                        this._configurationService.updateLogUrlToWorker(this.sessionId, this._csidCache.get(), this._workerComm))
                    }
                }, {
                    key: "_onResumedSession",
                    value: function _onResumedSession() {
                        var e;
                        this._configurationRepository.get("serverAddress") && (e = this._serverStateMgr.getServerState(this.sessionId),
                        e = {
                            serverAddress: this._configurationRepository.get("serverAddress"),
                            csid: this._csidCache.get(),
                            psid: this._psidCache.get(),
                            cdsnum: this.sessionId,
                            muid: this._muidMgr.muid,
                            context_name: this._contextMgr.contextName,
                            serverState: e
                        },
                        this._workerComm.sendAsync(B, e),
                        this._configurationService.updateLogUrlToWorker(this.sessionId, this._csidCache.get(), this._workerComm))
                    }
                }, {
                    key: "_handleCsid",
                    value: function _handleCsid() {
                        var e = this;
                        this._domUtils.onDocumentBody(self, function() {
                            C.debug("SessionService:_sessionIdRegeneration, onDocumentBody callback: cdSNum: ".concat(e.sessionId)),
                            e._csidService.get(function() {
                                C.info("Received csid from client. csid: ".concat(e._csidCache.get(), ", sid:").concat(e.sessionId)),
                                e._sendCsidToServer()
                            })
                        })
                    }
                }, {
                    key: "_sendCsidToServer",
                    value: function _sendCsidToServer() {
                        this._configurationRepository.get("serverAddress") && (C.info("Sending csid to worker. csid: ".concat(this._csidCache.get(), ", sid:").concat(this.sessionId)),
                        this._workerComm.sendAsync(I, {
                            csid: this._csidCache.get()
                        }),
                        this._configurationService.updateLogUrlToWorker(this.sessionId, this._csidCache.get(), this._workerComm))
                    }
                }, {
                    key: "_onSiteMapperMatch",
                    value: function _onSiteMapperMatch() {
                        this.onResetSession({
                            resetReason: nt.configuration
                        })
                    }
                }, {
                    key: "_onNewSessionStartedEvent",
                    value: function _onNewSessionStartedEvent(e) {
                        this.sessionId = e,
                        this._saveSidToStorage(this.sessionId),
                        this._configurationService.updateLogUrlToWorker(this.sessionId, this._csidCache.get(), this._workerComm),
                        this._notifyNewSessionStarted(),
                        this._handleCsid(),
                        C.info("A new session ".concat(e, " has started"))
                    }
                }, {
                    key: "_notifyNewSessionStarted",
                    value: function _notifyNewSessionStarted() {
                        this._messageBus.publish(ce.NewSessionStartedEvent, this.sessionId)
                    }
                }]),
                SessionService
            }();
            function MetadataService_defineProperties(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            var it = function() {
                function MetadataService(e, t) {
                    !function MetadataService_classCallCheck(e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, MetadataService),
                    function MetadataService_defineProperty(e, t, n) {
                        t in e ? Object.defineProperty(e, t, {
                            value: n,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : e[t] = n
                    }(this, "_dataQ", void 0),
                    this._configurationRepository = e,
                    this._dataQ = t,
                    this._isEnabled = this._configurationRepository.get("isCustMetadata")
                }
                return function MetadataService_createClass(e, t, n) {
                    t && MetadataService_defineProperties(e.prototype, t),
                    n && MetadataService_defineProperties(e, n)
                }(MetadataService, [{
                    key: "onCustomerMetadata",
                    value: function onCustomerMetadata(e) {
                        void 0 !== this._isEnabled && null != this._isEnabled && !0 !== this._isEnabled || (C.debug("HandleMetadata:onCustomerMetadata. data=" + JSON.stringify(e.data)),
                        e.data && this._dataQ.addToQueue("customer_metadata", [null, e.data]))
                    }
                }, {
                    key: "onConfigUpdate",
                    value: function onConfigUpdate() {
                        this._isEnabled = this._configurationRepository.get("isCustMetadata")
                    }
                }]),
                MetadataService
            }()
              , ot = "updateSlaveConf"
              , st = "updateSlaveState";
            function SlaveListener_defineProperties(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            var at = function() {
                function SlaveListener(e, t, n, r, i, o) {
                    !function SlaveListener_classCallCheck(e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, SlaveListener),
                    this._slaves = [],
                    this._dataQ = e,
                    this._configurationRepository = t,
                    this._utils = n,
                    this._logPerfDataQ = r,
                    this._contextMgr = i,
                    this._sessionService = o,
                    this.onResetSessionTrigger = new ee,
                    this.onMouseChallengeTrigger = new ee,
                    this._msgRouter = {
                        dataFromSlave: this._onDataFromSlave,
                        registerSlave: this._onRegisterSlave,
                        logPerfSlave: this._onLogPerfSlave,
                        updateMasterContext: this._onUpdateMasterContext,
                        resetSessionTriggerFromSlave: this._onResetSessionTriggerFromSlave,
                        mouseChallengeTriggerFromSlave: this._onMouseChallengeTriggerFromSlave
                    }
                }
                return function SlaveListener_createClass(e, t, n) {
                    t && SlaveListener_defineProperties(e.prototype, t),
                    n && SlaveListener_defineProperties(e, n)
                }(SlaveListener, [{
                    key: "listen",
                    value: function listen() {
                        var n = this;
                        C.debug("SlaveListener:listen"),
                        this._utils.addEventListener(window, "message", function(e) {
                            var t = e.data.msgType;
                            t && n._msgRouter[t] && n._msgRouter[t].call(n, e)
                        })
                    }
                }, {
                    key: "sendToSlaves",
                    value: function sendToSlaves(t, n) {
                        C.debug("SlaveListener:sendToSlaves"),
                        this._slaves.forEach(function(e) {
                            e.source.postMessage({
                                msgType: t,
                                data: n
                            }, e.origin)
                        })
                    }
                }, {
                    key: "onConfigUpdate",
                    value: function onConfigUpdate() {
                        C.debug("SlaveListener:onConfigUpdate, updating ".concat(this._slaves.length, " slaves")),
                        this.sendToSlaves(ot, this._configurationRepository.getAll())
                    }
                }, {
                    key: "notifyStateChange",
                    value: function notifyStateChange(e) {
                        C.info("SlaveListener:notifyStateChange, updating ".concat(this._slaves.length, " slaves that the new state is ").concat(e.toState)),
                        this.sendToSlaves(st, e)
                    }
                }, {
                    key: "_onDataFromSlave",
                    value: function _onDataFromSlave(e) {
                        e = e.data;
                        "flushData" !== e.data.eventName && e.data.eventName && this._dataQ.addToQueue(e.data.eventName, e.data.data)
                    }
                }, {
                    key: "_onRegisterSlave",
                    value: function _onRegisterSlave(e) {
                        C.info("SlaveListener:_onRegisterSlave - slave registered, origin ".concat(e.origin)),
                        this._slaves.push({
                            source: e.source,
                            origin: e.origin
                        }),
                        e.source.postMessage({
                            msgType: "updateSlaveConf",
                            data: this._configurationRepository.getAll()
                        }, e.origin)
                    }
                }, {
                    key: "_onLogPerfSlave",
                    value: function _onLogPerfSlave(e) {
                        e = e.data;
                        "flushData" !== e.data.eventName && e.data.eventName && this._logPerfDataQ.addToQueue(e.data.eventName, e.data.data)
                    }
                }, {
                    key: "_onUpdateMasterContext",
                    value: function _onUpdateMasterContext(e) {
                        C.debug("SlaveListener:_onUpdateMasterContext");
                        e = e.data;
                        this._contextMgr.setContext(e.data)
                    }
                }, {
                    key: "_onResetSessionTriggerFromSlave",
                    value: function _onResetSessionTriggerFromSlave(e) {
                        C.debug("SlaveListener:_onResetSessionTriggerFromSlave");
                        e = e.data;
                        this.onResetSessionTrigger.publish(e.data)
                    }
                }, {
                    key: "_onMouseChallengeTriggerFromSlave",
                    value: function _onMouseChallengeTriggerFromSlave(e) {
                        C.debug("SlaveListener:_onMouseChallengeTriggerFromSlave");
                        e = e.data;
                        this.onMouseChallengeTrigger.publish(e.data)
                    }
                }]),
                SlaveListener
            }();
            function FeaturesBuilder_defineProperties(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            var ut = function() {
                function FeaturesBuilder(e, t, n, r, i, o, s, a, u, c, l, f, d, h) {
                    !function FeaturesBuilder_classCallCheck(e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, FeaturesBuilder),
                    this._features = e,
                    this._configurationRepository = t,
                    this._utils = n,
                    this._elements = r,
                    this._mutationObserver = i,
                    this._dataQ = o,
                    this._sessionService = s,
                    this._muidMgr = a,
                    this._perfMonitor = u,
                    this._sensorDataQ = c,
                    this._msgBus = l,
                    this._cidCache = f,
                    this._sameCharService = d,
                    this._maskingService = h
                }
                return function FeaturesBuilder_createClass(e, t, n) {
                    t && FeaturesBuilder_defineProperties(e.prototype, t),
                    n && FeaturesBuilder_defineProperties(e, n)
                }(FeaturesBuilder, [{
                    key: "buildFeatures",
                    value: function buildFeatures() {
                        var n = this;
                        !function buildFeaturesInList(t) {
                            t && Object.keys(t).forEach(function(e) {
                                t[e].init.apply(n)
                            })
                        }(this._features.list)
                    }
                }]),
                FeaturesBuilder
            }();
            function ContextApiHandler_defineProperties(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            var ct = function() {
                function ContextApiHandler(e, t) {
                    !function ContextApiHandler_classCallCheck(e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, ContextApiHandler),
                    this._contextMgr = e,
                    this._dataQ = t,
                    this._contextMgr.onContextChange.subscribe(this.sendContextToServer.bind(this)),
                    this.handleContextChange({
                        context: "cd_auto"
                    })
                }
                return function ContextApiHandler_createClass(e, t, n) {
                    t && ContextApiHandler_defineProperties(e.prototype, t),
                    n && ContextApiHandler_defineProperties(e, n)
                }(ContextApiHandler, [{
                    key: "handleContextChange",
                    value: function handleContextChange(e) {
                        this._contextMgr.changeContext(e.context || e.activityType)
                    }
                }, {
                    key: "sendContextToServer",
                    value: function sendContextToServer(e) {
                        e && this._dataQ.addToQueue("contextChange", [null, e.url, e.name, e.timestamp, e.referrer, e.hLength])
                    }
                }]),
                ContextApiHandler
            }();
            function StateService_defineProperties(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            ct.apiName = "ContextChange";
            var lt = function() {
                function StateService(e) {
                    !function StateService_classCallCheck(e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, StateService),
                    this._messageBus = e,
                    this._state = W.stopped
                }
                return function StateService_createClass(e, t, n) {
                    t && StateService_defineProperties(e.prototype, t),
                    n && StateService_defineProperties(e, n)
                }(StateService, [{
                    key: "getState",
                    value: function getState() {
                        return this._state
                    }
                }, {
                    key: "updateState",
                    value: function updateState(e) {
                        var t = W[e];
                        if (!t)
                            throw new Error("Unknown state ".concat(e));
                        this._state = t,
                        this._messageBus.publish(ce.StateChangedEvent, {
                            state: t
                        })
                    }
                }]),
                StateService
            }()
              , ft = "cdNewSessionStartedEvent"
              , dt = "cdStateChangedEvent"
              , ht = "cdHeartbeat";
            function ClientEventService_defineProperties(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            var pt = function() {
                function ClientEventService() {
                    !function ClientEventService_classCallCheck(e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, ClientEventService)
                }
                return function ClientEventService_createClass(e, t, n) {
                    t && ClientEventService_defineProperties(e.prototype, t),
                    n && ClientEventService_defineProperties(e, n)
                }(ClientEventService, [{
                    key: "publishNewSessionStartedEvent",
                    value: function publishNewSessionStartedEvent(e) {
                        window.postMessage({
                            type: ft,
                            event: {
                                sessionID: e
                            }
                        }, window.location.href)
                    }
                }, {
                    key: "publishStateChangedEvent",
                    value: function publishStateChangedEvent(e) {
                        window.postMessage({
                            type: dt,
                            event: {
                                state: e
                            }
                        }, window.location.href)
                    }
                }]),
                ClientEventService
            }();
            function ApiContextChangeEventHandler_defineProperties(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            var vt = function() {
                function ApiContextChangeEventHandler(e, t) {
                    !function ApiContextChangeEventHandler_classCallCheck(e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, ApiContextChangeEventHandler),
                    this._messageBus = e,
                    this._contextMgr = t,
                    this._messageBus.subscribe(ce.ApiContextChangeEvent, this._handle.bind(this))
                }
                return function ApiContextChangeEventHandler_createClass(e, t, n) {
                    t && ApiContextChangeEventHandler_defineProperties(e.prototype, t),
                    n && ApiContextChangeEventHandler_defineProperties(e, n)
                }(ApiContextChangeEventHandler, [{
                    key: "_handle",
                    value: function _handle(e) {
                        this._contextMgr.changeContext(e.context || e.activityType)
                    }
                }]),
                ApiContextChangeEventHandler
            }();
            function ApiResetSessionEventHandler_defineProperties(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            var _t = function() {
                function ApiResetSessionEventHandler(e, t) {
                    !function ApiResetSessionEventHandler_classCallCheck(e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, ApiResetSessionEventHandler),
                    this._messageBus = e,
                    this._sessionService = t,
                    this._messageBus.subscribe(ce.ApiResetSessionEvent, this._handle.bind(this))
                }
                return function ApiResetSessionEventHandler_createClass(e, t, n) {
                    t && ApiResetSessionEventHandler_defineProperties(e.prototype, t),
                    n && ApiResetSessionEventHandler_defineProperties(e, n)
                }(ApiResetSessionEventHandler, [{
                    key: "_handle",
                    value: function _handle(e) {
                        this._sessionService.onResetSession(e)
                    }
                }]),
                ApiResetSessionEventHandler
            }();
            function ApiCustomerMetadataEventHandler_defineProperties(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            var mt = function() {
                function ApiCustomerMetadataEventHandler(e, t) {
                    !function ApiCustomerMetadataEventHandler_classCallCheck(e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, ApiCustomerMetadataEventHandler),
                    this._messageBus = e,
                    this._handleMetadata = t,
                    this._messageBus.subscribe(ce.ApiCustomerMetadataEvent, this._handle.bind(this))
                }
                return function ApiCustomerMetadataEventHandler_createClass(e, t, n) {
                    t && ApiCustomerMetadataEventHandler_defineProperties(e.prototype, t),
                    n && ApiCustomerMetadataEventHandler_defineProperties(e, n)
                }(ApiCustomerMetadataEventHandler, [{
                    key: "_handle",
                    value: function _handle(e) {
                        this._handleMetadata.onCustomerMetadata(e)
                    }
                }]),
                ApiCustomerMetadataEventHandler
            }();
            function ApiChangeStateEventHandler_defineProperties(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            var gt = function() {
                function ApiChangeStateEventHandler(e, t, n) {
                    !function ApiChangeStateEventHandler_classCallCheck(e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, ApiChangeStateEventHandler),
                    this._messageBus = e,
                    this._pauseResumeManager = t,
                    this._slaveListener = n,
                    this._messageBus.subscribe(ce.ApiChangeStateEvent, this._handle.bind(this))
                }
                return function ApiChangeStateEventHandler_createClass(e, t, n) {
                    t && ApiChangeStateEventHandler_defineProperties(e.prototype, t),
                    n && ApiChangeStateEventHandler_defineProperties(e, n)
                }(ApiChangeStateEventHandler, [{
                    key: "_handle",
                    value: function _handle(e) {
                        this._pauseResumeManager.onStateChange(e),
                        this._slaveListener.notifyStateChange(e)
                    }
                }]),
                ApiChangeStateEventHandler
            }();
            function ApiSetCsidEventHandler_defineProperties(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            var yt = function() {
                function ApiSetCsidEventHandler(e, t) {
                    !function ApiSetCsidEventHandler_classCallCheck(e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, ApiSetCsidEventHandler),
                    this._messageBus = e,
                    this._csidService = t,
                    this._messageBus.subscribe(ce.ApiSetCsidEvent, this._handle.bind(this))
                }
                return function ApiSetCsidEventHandler_createClass(e, t, n) {
                    t && ApiSetCsidEventHandler_defineProperties(e.prototype, t),
                    n && ApiSetCsidEventHandler_defineProperties(e, n)
                }(ApiSetCsidEventHandler, [{
                    key: "_handle",
                    value: function _handle(e) {
                        e.csid ? this._csidService.set(e.csid) : C.warn("Received an invalid csid of ".concat(e.csid, ". Ignoring api call"))
                    }
                }]),
                ApiSetCsidEventHandler
            }();
            function ApiSetPsidEventHandler_defineProperties(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            var bt = function() {
                function ApiSetPsidEventHandler(e, t) {
                    !function ApiSetPsidEventHandler_classCallCheck(e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, ApiSetPsidEventHandler),
                    this._messageBus = e,
                    this._psidService = t,
                    this._messageBus.subscribe(ce.ApiSetPsidEvent, this._handle.bind(this))
                }
                return function ApiSetPsidEventHandler_createClass(e, t, n) {
                    t && ApiSetPsidEventHandler_defineProperties(e.prototype, t),
                    n && ApiSetPsidEventHandler_defineProperties(e, n)
                }(ApiSetPsidEventHandler, [{
                    key: "_handle",
                    value: function _handle(e) {
                        e.psid ? this._psidService.set(e.psid) : C.warn("Received an invalid psid of ".concat(e.psid, ". Ignoring api call"))
                    }
                }]),
                ApiSetPsidEventHandler
            }();
            function NewSessionStartedEventHandler_defineProperties(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            var Et = function() {
                function NewSessionStartedEventHandler(e, t, n, r, i, o) {
                    !function NewSessionStartedEventHandler_classCallCheck(e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, NewSessionStartedEventHandler),
                    this._messageBus = e,
                    this._featureService = t,
                    this._customerApiBridge = n,
                    this._contextMgr = r,
                    this._clientEventService = i,
                    this._sessionInfoService = o,
                    this._messageBus.subscribe(ce.NewSessionStartedEvent, this._handle.bind(this))
                }
                return function NewSessionStartedEventHandler_createClass(e, t, n) {
                    t && NewSessionStartedEventHandler_defineProperties(e.prototype, t),
                    n && NewSessionStartedEventHandler_defineProperties(e, n)
                }(NewSessionStartedEventHandler, [{
                    key: "_handle",
                    value: function _handle(e) {
                        this._sessionInfoService.markStartTime(),
                        this._featureService.runPerSessionFeatures(),
                        this._customerApiBridge.notifySessionReset(e),
                        this._contextMgr.onSessionReset(),
                        this._clientEventService.publishNewSessionStartedEvent(e)
                    }
                }]),
                NewSessionStartedEventHandler
            }();
            function ConfigurationLoadedEventHandler_defineProperties(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            var Ct = function() {
                function ConfigurationLoadedEventHandler(e, t, n, r, i, o, s, a, u, c, l, f, d, h) {
                    !function ConfigurationLoadedEventHandler_classCallCheck(e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, ConfigurationLoadedEventHandler),
                    this._messageBus = e,
                    this._featureService = t,
                    this._dataQ = n,
                    this._pauseResumeMgr = r,
                    this._handleMetadata = i,
                    this._logger = o,
                    this._contextMgr = s,
                    this._sessionService = a,
                    this._sensorDataQ = u,
                    this._slaveListener = c,
                    this._stateService = l,
                    this._performanceMonitor = f,
                    this._heartBeatMessageService = d,
                    this._sensorGateKeeper = h,
                    this._messageBus.subscribe(ce.ConfigurationLoadedEvent, this._handle.bind(this))
                }
                return function ConfigurationLoadedEventHandler_createClass(e, t, n) {
                    t && ConfigurationLoadedEventHandler_defineProperties(e.prototype, t),
                    n && ConfigurationLoadedEventHandler_defineProperties(e, n)
                }(ConfigurationLoadedEventHandler, [{
                    key: "_handle",
                    value: function _handle(e) {
                        C.info("Configurations were loaded from the server."),
                        this._performanceMonitor.stopMonitor("t.timeTillServerConfig"),
                        this._featureService.updateRunByConfig(e),
                        this._dataQ.updateWithConfig(e),
                        this._pauseResumeMgr.onConfigUpdate(e),
                        this._handleMetadata.onConfigUpdate(e),
                        this._logger.updateLogConfig(e),
                        this._contextMgr.onConfigUpdate(e),
                        this._sessionService.onConfigUpdate(e),
                        this._sensorDataQ.onConfigUpdate(e),
                        this._slaveListener.onConfigUpdate(e),
                        this._heartBeatMessageService.updateConfig(e),
                        this._sensorGateKeeper.configure(),
                        this._stateService.updateState(W.started),
                        C.info("Successfully configured system")
                    }
                }]),
                ConfigurationLoadedEventHandler
            }();
            function StateChangedEventHandler_defineProperties(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            var St = function() {
                function StateChangedEventHandler(e, t) {
                    !function StateChangedEventHandler_classCallCheck(e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, StateChangedEventHandler),
                    this._messageBus = e,
                    this._clientEventService = t,
                    this._messageBus.subscribe(ce.StateChangedEvent, this._handle.bind(this))
                }
                return function StateChangedEventHandler_createClass(e, t, n) {
                    t && StateChangedEventHandler_defineProperties(e.prototype, t),
                    n && StateChangedEventHandler_defineProperties(e, n)
                }(StateChangedEventHandler, [{
                    key: "_handle",
                    value: function _handle(e) {
                        C.info("SDK state changed to ".concat(e.state)),
                        this._clientEventService.publishStateChangedEvent(e.state)
                    }
                }]),
                StateChangedEventHandler
            }();
            function DOMUtils_defineProperties(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            var wt = function() {
                function DOMUtils() {
                    !function DOMUtils_classCallCheck(e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, DOMUtils)
                }
                return function DOMUtils_createClass(e, t, n) {
                    t && DOMUtils_defineProperties(e.prototype, t),
                    n && DOMUtils_defineProperties(e, n)
                }(DOMUtils, null, [{
                    key: "addEventListener",
                    value: function addEventListener(e, t, n) {
                        var r = 3 < arguments.length && void 0 !== arguments[3] && arguments[3]
                          , i = !(4 < arguments.length && void 0 !== arguments[4]) || arguments[4]
                          , o = 5 < arguments.length && void 0 !== arguments[5] && arguments[5];
                        this.isPassiveSupported ? e.addEventListener(t, n, {
                            capture: r,
                            passive: i,
                            once: o
                        }) : e.addEventListener ? e.addEventListener(t, n, r) : e.attachEvent("on" + t, n)
                    }
                }, {
                    key: "removeEventListener",
                    value: function removeEventListener(e, t, n) {
                        var r = 3 < arguments.length && void 0 !== arguments[3] && arguments[3];
                        e.removeEventListener ? e.removeEventListener(t, n, r) : e.detachEvent("on" + t, n)
                    }
                }, {
                    key: "outerHTML",
                    value: function outerHTML(e) {
                        return e.outerHTML || (new XMLSerializer).serializeToString(e)
                    }
                }, {
                    key: "onDocumentBody",
                    value: function onDocumentBody(e, t) {
                        e.document.body ? t() : window.addEventListener ? window.addEventListener("DOMContentLoaded", t, !0) : window.attachEvent("onload", t)
                    }
                }, {
                    key: "onPageLoad",
                    value: function onPageLoad(e, t) {
                        DOMUtils.addEventListener(e, "load", t, !0),
                        (e.contentWindow && "complete" === e.contentWindow.document.readyState || e.document && "complete" === e.document.readyState) && t()
                    }
                }, {
                    key: "waitUntilDocumentIsReady",
                    value: function waitUntilDocumentIsReady(n) {
                        var r = this;
                        return new Promise(function(e, t) {
                            try {
                                r.onWindowDocumentReady(n, function() {
                                    e()
                                })
                            } catch (e) {
                                t(e)
                            }
                        }
                        )
                    }
                }, {
                    key: "onWindowDocumentReady",
                    value: function onWindowDocumentReady(e, t) {
                        var n, r = window.addEventListener ? "DOMContentLoaded" : "load";
                        "complete" === e.document.readyState || "interactive" === e.document.readyState ? t() : (n = function onLoadedWindowEvent() {
                            DOMUtils.removeEventListener(e, r, n, !0),
                            t()
                        }
                        ,
                        DOMUtils.addEventListener(e, r, n, !0))
                    }
                }, {
                    key: "isWindowDocumentReady",
                    value: function isWindowDocumentReady(e) {
                        return e && "complete" === e.document.readyState
                    }
                }, {
                    key: "canAccessIFrame",
                    value: function canAccessIFrame(e) {
                        var t = null;
                        try {
                            t = (e.contentDocument || e.contentWindow.document).body.innerHTML
                        } catch (e) {}
                        return null !== t
                    }
                }, {
                    key: "matches",
                    value: function matches(e, t) {
                        return (e.matches || e.matchesSelector || e.mozMatchesSelector || e.msMatchesSelector || e.oMatchesSelector || e.webkitMatchesSelector || function(e) {
                            var t = this.document || this.ownerDocument;
                            if (!t)
                                return !1;
                            for (var n = t.querySelectorAll(e), r = n.length; 0 <= --r; )
                                if ((n.item ? n.item(r) : n[r]) === this)
                                    break;
                            return -1 < r
                        }
                        ).call(e, t)
                    }
                }]),
                DOMUtils
            }();
            function HeartBeatService_defineProperties(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            !function DOMUtils_defineProperty(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n
            }(wt, "isPassiveSupported", function DOMUtils_isPassiveSupported() {
                var e = !1;
                try {
                    var t = Object.defineProperty({}, "passive", {
                        get: function get() {
                            e = !0
                        }
                    });
                    window.addEventListener("test", null, t)
                } catch (e) {}
                return e
            }());
            var kt = function() {
                function HeartBeatService(e, t, n) {
                    !function HeartBeatService_classCallCheck(e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, HeartBeatService),
                    this._heartBeatErrorsState = t,
                    this._heartBeatPostMessageInterval = n,
                    e.addMessageListener(oe.HeartBeatStatusEvent, this._handle.bind(this))
                }
                return function HeartBeatService_createClass(e, t, n) {
                    t && HeartBeatService_defineProperties(e.prototype, t),
                    n && HeartBeatService_defineProperties(e, n)
                }(HeartBeatService, [{
                    key: "start",
                    value: function start() {
                        this._clear(),
                        this._periodicPostMessageIntervalId = setInterval(this._postHeartBeatMessage.bind(this), this._heartBeatPostMessageInterval)
                    }
                }, {
                    key: "stop",
                    value: function stop() {
                        this._clear()
                    }
                }, {
                    key: "updateConfig",
                    value: function updateConfig(e) {
                        this._heartBeatPostMessageInterval = e.get(_.heartBeatMessageInterval),
                        this.start()
                    }
                }, {
                    key: "_clear",
                    value: function _clear() {
                        this._periodicPostMessageIntervalId && clearInterval(this._periodicPostMessageIntervalId)
                    }
                }, {
                    key: "_handle",
                    value: function _handle(e) {
                        this._heartBeatErrorsState.updateState(e)
                    }
                }, {
                    key: "_postHeartBeatMessage",
                    value: function _postHeartBeatMessage() {
                        this._heartBeatErrorsState.hasErrors() ? window.postMessage({
                            type: ht,
                            data: this._heartBeatErrorsState.getErrors()
                        }, window.location.href) : window.postMessage({
                            type: ht,
                            data: "Ok"
                        }, window.location.href)
                    }
                }]),
                HeartBeatService
            }();
            var Pt = "oK"
              , Ot = "Error";
            function HeartBeatErrorsState_defineProperties(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            var Rt = function() {
                function HeartBeatErrorsState() {
                    !function HeartBeatErrorsState_classCallCheck(e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, HeartBeatErrorsState),
                    this.errors = {}
                }
                return function HeartBeatErrorsState_createClass(e, t, n) {
                    t && HeartBeatErrorsState_defineProperties(e.prototype, t),
                    n && HeartBeatErrorsState_defineProperties(e, n)
                }(HeartBeatErrorsState, [{
                    key: "updateState",
                    value: function updateState(e) {
                        var t = e.category
                          , n = e.status;
                        this._isErrorRecovery(t, n) ? (C.info("Received heart beat recovery event", e),
                        delete this.errors[t]) : this._isNewError(t, n) && (C.info("Received heart beat error event", e),
                        this.errors[t] = t)
                    }
                }, {
                    key: "_isErrorRecovery",
                    value: function _isErrorRecovery(e, t) {
                        return void 0 !== this.errors[e] && t === Pt
                    }
                }, {
                    key: "_isNewError",
                    value: function _isNewError(e, t) {
                        return void 0 === this.errors[e] && t === Ot
                    }
                }, {
                    key: "getErrors",
                    value: function getErrors() {
                        var t = this;
                        return Object.keys(this.errors).map(function(e) {
                            return "ERROR(".concat(t.errors[e], ")")
                        })
                    }
                }, {
                    key: "hasErrors",
                    value: function hasErrors() {
                        return 0 < Object.keys(this.errors).length
                    }
                }]),
                HeartBeatErrorsState
            }();
            function SessionInfoService_defineProperties(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            var Ft = function() {
                function SessionInfoService() {
                    !function SessionInfoService_classCallCheck(e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, SessionInfoService),
                    this.markStartTime()
                }
                return function SessionInfoService_createClass(e, t, n) {
                    t && SessionInfoService_defineProperties(e.prototype, t),
                    n && SessionInfoService_defineProperties(e, n)
                }(SessionInfoService, [{
                    key: "markStartTime",
                    value: function markStartTime() {
                        this.startTime = h.dateNow()
                    }
                }, {
                    key: "getStartTime",
                    value: function getStartTime() {
                        return this.startTime
                    }
                }]),
                SessionInfoService
            }();
            function SensorGateKeeper_defineProperties(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            var Dt = function() {
                function SensorGateKeeper(e, t) {
                    !function SensorGateKeeper_classCallCheck(e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, SensorGateKeeper),
                    this.configurationRepository = t,
                    this.sessionInfoService = e,
                    this.isMotionOnSessionStart = this.configurationRepository.get(_.isMotionOnSessionStart),
                    this.motionPaddingOnSessionStartMSec = this.configurationRepository.get(_.motionPaddingOnSessionStartMSec)
                }
                return function SensorGateKeeper_createClass(e, t, n) {
                    t && SensorGateKeeper_defineProperties(e.prototype, t),
                    n && SensorGateKeeper_defineProperties(e, n)
                }(SensorGateKeeper, [{
                    key: "configure",
                    value: function configure() {
                        this.isMotionOnSessionStart = this.configurationRepository.get(_.isMotionOnSessionStart),
                        this.motionPaddingOnSessionStartMSec = this.configurationRepository.get(_.motionPaddingOnSessionStartMSec),
                        this.isMotionOnSessionStart && C.info("Motion on session start is enabled, collecting motion events for ".concat(this.motionPaddingOnSessionStartMSec / 1e3, " seconds."))
                    }
                }, {
                    key: "isOpen",
                    value: function isOpen() {
                        return this.isMotionOnSessionStart && h.dateNow() - this.motionPaddingOnSessionStartMSec < this.sessionInfoService.getStartTime()
                    }
                }]),
                SensorGateKeeper
            }();
            function CustomElementsOpenContext_typeof(e) {
                return (CustomElementsOpenContext_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function _typeof(e) {
                    return typeof e
                }
                : function _typeof(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }
                )(e)
            }
            function CustomElementsOpenContext_defineProperties(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            function CustomElementsOpenContext_setPrototypeOf(e, t) {
                return (CustomElementsOpenContext_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(e, t) {
                    return e.__proto__ = t,
                    e
                }
                )(e, t)
            }
            function CustomElementsOpenContext_createSuper(n) {
                var r = function CustomElementsOpenContext_isNativeReflectConstruct() {
                    if ("undefined" == typeof Reflect || !Reflect.construct)
                        return !1;
                    if (Reflect.construct.sham)
                        return !1;
                    if ("function" == typeof Proxy)
                        return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})),
                        !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function _createSuperInternal() {
                    var e, t = CustomElementsOpenContext_getPrototypeOf(n);
                    return function CustomElementsOpenContext_possibleConstructorReturn(e, t) {
                        return !t || "object" !== CustomElementsOpenContext_typeof(t) && "function" != typeof t ? function CustomElementsOpenContext_assertThisInitialized(e) {
                            if (void 0 !== e)
                                return e;
                            throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
                        }(e) : t
                    }(this, r ? (e = CustomElementsOpenContext_getPrototypeOf(this).constructor,
                    Reflect.construct(t, arguments, e)) : t.apply(this, arguments))
                }
            }
            function CustomElementsOpenContext_getPrototypeOf(e) {
                return (CustomElementsOpenContext_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                }
                )(e)
            }
            var Mt = function() {
                !function CustomElementsOpenContext_inherits(e, t) {
                    if ("function" != typeof t && null !== t)
                        throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }),
                    t && CustomElementsOpenContext_setPrototypeOf(e, t)
                }(CustomElementsOpenContext, Te);
                var e = CustomElementsOpenContext_createSuper(CustomElementsOpenContext);
                function CustomElementsOpenContext() {
                    return function CustomElementsOpenContext_classCallCheck(e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, CustomElementsOpenContext),
                    e.apply(this, arguments)
                }
                return function CustomElementsOpenContext_createClass(e, t, n) {
                    t && CustomElementsOpenContext_defineProperties(e.prototype, t),
                    n && CustomElementsOpenContext_defineProperties(e, n)
                }(CustomElementsOpenContext, [{
                    key: "getDocument",
                    value: function getDocument() {
                        return this.context.shadowRoot
                    }
                }]),
                CustomElementsOpenContext
            }();
            function CustomElementsClosedContext_typeof(e) {
                return (CustomElementsClosedContext_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function _typeof(e) {
                    return typeof e
                }
                : function _typeof(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }
                )(e)
            }
            function CustomElementsClosedContext_defineProperties(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            function CustomElementsClosedContext_setPrototypeOf(e, t) {
                return (CustomElementsClosedContext_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(e, t) {
                    return e.__proto__ = t,
                    e
                }
                )(e, t)
            }
            function CustomElementsClosedContext_createSuper(n) {
                var r = function CustomElementsClosedContext_isNativeReflectConstruct() {
                    if ("undefined" == typeof Reflect || !Reflect.construct)
                        return !1;
                    if (Reflect.construct.sham)
                        return !1;
                    if ("function" == typeof Proxy)
                        return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})),
                        !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function _createSuperInternal() {
                    var e, t = CustomElementsClosedContext_getPrototypeOf(n);
                    return function CustomElementsClosedContext_possibleConstructorReturn(e, t) {
                        return !t || "object" !== CustomElementsClosedContext_typeof(t) && "function" != typeof t ? function CustomElementsClosedContext_assertThisInitialized(e) {
                            if (void 0 !== e)
                                return e;
                            throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
                        }(e) : t
                    }(this, r ? (e = CustomElementsClosedContext_getPrototypeOf(this).constructor,
                    Reflect.construct(t, arguments, e)) : t.apply(this, arguments))
                }
            }
            function CustomElementsClosedContext_getPrototypeOf(e) {
                return (CustomElementsClosedContext_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                }
                )(e)
            }
            var Tt = function() {
                !function CustomElementsClosedContext_inherits(e, t) {
                    if ("function" != typeof t && null !== t)
                        throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }),
                    t && CustomElementsClosedContext_setPrototypeOf(e, t)
                }(CustomElementsClosedContext, Te);
                var e = CustomElementsClosedContext_createSuper(CustomElementsClosedContext);
                function CustomElementsClosedContext() {
                    return function CustomElementsClosedContext_classCallCheck(e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, CustomElementsClosedContext),
                    e.apply(this, arguments)
                }
                return function CustomElementsClosedContext_createClass(e, t, n) {
                    t && CustomElementsClosedContext_defineProperties(e.prototype, t),
                    n && CustomElementsClosedContext_defineProperties(e, n)
                }(CustomElementsClosedContext, [{
                    key: "getDocument",
                    value: function getDocument() {
                        return this.context
                    }
                }]),
                CustomElementsClosedContext
            }();
            function BrowserContextMutationObserver_defineProperties(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            var Bt = function() {
                function BrowserContextMutationObserver(e, t, n) {
                    !function BrowserContextMutationObserver_classCallCheck(e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, BrowserContextMutationObserver),
                    this._elementsMutationObserverFactory = e,
                    this._windowMutationObservers = t,
                    this._messageBus = n,
                    this._messageBus.subscribe(ce.BrowserContextAdded, this._processNewContext.bind(this))
                }
                return function BrowserContextMutationObserver_createClass(e, t, n) {
                    t && BrowserContextMutationObserver_defineProperties(e.prototype, t),
                    n && BrowserContextMutationObserver_defineProperties(e, n)
                }(BrowserContextMutationObserver, [{
                    key: "_processNewContext",
                    value: function _processNewContext(e) {
                        this.monitorWindow(e)
                    }
                }, {
                    key: "monitorWindow",
                    value: function monitorWindow(e) {
                        var t;
                        this._windowMutationObservers.has(e) || ((t = new this._elementsMutationObserverFactory(e,self.MutationObserver)).observe(e.getDocument()),
                        t.nodesAdded.subscribe(this._nodesAddedMutationObserved.bind(this)),
                        t.nodesRemoved.subscribe(this._nodesRemovedMutationObserved.bind(this)),
                        this._windowMutationObservers.set(e, t))
                    }
                }, {
                    key: "unMonitorWindow",
                    value: function unMonitorWindow(e) {
                        var t = this._windowMutationObservers.get(e);
                        t && (t.nodesAdded.unsubscribe(this._nodesAddedMutationObserved.bind(this)),
                        t.nodesRemoved.unsubscribe(this._nodesRemovedMutationObserved.bind(this)),
                        t.disconnect()),
                        this._windowMutationObservers.delete(e)
                    }
                }, {
                    key: "_nodesAddedMutationObserved",
                    value: function _nodesAddedMutationObserved(e) {
                        this._messageBus.publish(ce.MutationAddedNodes, e)
                    }
                }, {
                    key: "_nodesRemovedMutationObserved",
                    value: function _nodesRemovedMutationObserved(e) {
                        this._messageBus.publish(ce.MutationRemovedNodes, e)
                    }
                }]),
                BrowserContextMutationObserver
            }();
            function xb(e, t) {
                !function CustomElementEventMessage_classCallCheck(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, xb),
                this.browserContext = e,
                this.message = t
            }
            var xt = "added"
              , It = "removed";
            function CustomElementsDetector_defineProperties(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            var At = function() {
                function CustomElementsDetector(e, t, n) {
                    !function CustomElementsDetector_classCallCheck(e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, CustomElementsDetector),
                    this._domUtils = t,
                    this._messageBus = n,
                    this._loadedCustomElements = V(),
                    this._windowMutationObservers = V(),
                    this._messageBus.subscribe(ce.MutationAddedNodes, this._processAddedNodes.bind(this)),
                    this._messageBus.subscribe(ce.MutationRemovedNodes, this._processRemovedNodes.bind(this)),
                    this._messageBus.subscribe(ce.CustomElementSubmitted, this._processSubmittedCustomElement.bind(this)),
                    this._browserContextMutationObserver = new Bt(e,this._windowMutationObservers,this._messageBus)
                }
                return function CustomElementsDetector_createClass(e, t, n) {
                    t && CustomElementsDetector_defineProperties(e.prototype, t),
                    n && CustomElementsDetector_defineProperties(e, n)
                }(CustomElementsDetector, [{
                    key: "customElements",
                    get: function get() {
                        var n = [];
                        return this._loadedCustomElements.forEach(function(e, t) {
                            n.push(t)
                        }),
                        n
                    }
                }, {
                    key: "hasCustomElement",
                    value: function hasCustomElement(e) {
                        return !!this._loadedCustomElements.has(e)
                    }
                }, {
                    key: "addCustomElementToLoadedList",
                    value: function addCustomElementToLoadedList(e, t) {
                        this._loadedCustomElements.set(e, t)
                    }
                }, {
                    key: "start",
                    value: function start(e) {
                        var t = this;
                        this._browserContextMutationObserver.monitorWindow(e),
                        this._findCustomElementsInBrowserContext(e.getDocument()).forEach(function(e) {
                            t._processNewElement(e)
                        })
                    }
                }, {
                    key: "stop",
                    value: function stop() {
                        this._windowMutationObservers.forEach(function(e) {
                            e.disconnect()
                        })
                    }
                }, {
                    key: "_processSubmittedCustomElement",
                    value: function _processSubmittedCustomElement(e) {
                        this._loadedCustomElements.has(e) || this._addCustomElement(e, new Tt(e), "closed")
                    }
                }, {
                    key: "_processNewElement",
                    value: function _processNewElement(e) {
                        this._loadedCustomElements.has(e) || (null != e.shadowRoot ? this._addCustomElement(e, new Mt(e)) : this._messageBus.publish(ce.CustomElementInaccessible, e))
                    }
                }, {
                    key: "_addCustomElement",
                    value: function _addCustomElement(e, t) {
                        "open" === (2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : "open") && this._browserContextMutationObserver.monitorWindow(t),
                        this._loadedCustomElements.set(e, t),
                        this._messageBus.publish(ce.CustomElementDetectedEvent, new xb(t,xt))
                    }
                }, {
                    key: "_removeCustomElement",
                    value: function _removeCustomElement(e) {
                        var t = this._loadedCustomElements.get(e);
                        this._browserContextMutationObserver.unMonitorWindow(e.shadowRoot),
                        this._loadedCustomElements.delete(e) && this._messageBus.publish(ce.CustomElementDetectedEvent, new xb(t,It))
                    }
                }, {
                    key: "_processAddedNodes",
                    value: function _processAddedNodes(e) {
                        var t = this;
                        this._findCustomElementsInBrowserContext(e.browserContext.getDocument()).forEach(function(e) {
                            t._processNewElement(e)
                        })
                    }
                }, {
                    key: "_processRemovedNodes",
                    value: function _processRemovedNodes(e) {
                        for (var t = this, n = e.removedNodes, r = [], i = 0; i < n.length; i++) {
                            var o, s = n[i];
                            s.hasChildNodes() ? 0 < (o = this._findCustomElementsInBrowserContext(s)).length && (r = r.concat(o)) : this._isCustomElement(s) && s.shadowRoot && r.push(s)
                        }
                        0 !== r.length && r.forEach(function(e) {
                            t._removeCustomElement(e)
                        })
                    }
                }, {
                    key: "_isCustomElement",
                    value: function _isCustomElement(e) {
                        return "string" == typeof e.localName && 0 < e.localName.indexOf("-")
                    }
                }, {
                    key: "_findCustomElementsInBrowserContext",
                    value: function _findCustomElementsInBrowserContext(e) {
                        var t = []
                          , n = e.querySelectorAll("*");
                        if (0 === n.length)
                            return t;
                        for (var r = 0; r < n.length; r++) {
                            var i, o = n[r];
                            this._isCustomElement(o) && (t.push(o),
                            o.shadowRoot ? (i = this._findCustomElementsInBrowserContext(o.shadowRoot),
                            t = t.concat(i)) : this._messageBus.publish(ce.CustomElementInaccessible, o))
                        }
                        return t
                    }
                }]),
                CustomElementsDetector
            }();
            function CustomElementDetectedEventHandler_defineProperties(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            var Lt = function() {
                function CustomElementDetectedEventHandler(e, t, n) {
                    !function CustomElementDetectedEventHandler_classCallCheck(e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, CustomElementDetectedEventHandler),
                    this._browserContextsCache = e,
                    this._messageBus = n,
                    this._featureService = t,
                    this._messageBus.subscribe(ce.CustomElementDetectedEvent, this._handle.bind(this))
                }
                return function CustomElementDetectedEventHandler_createClass(e, t, n) {
                    t && CustomElementDetectedEventHandler_defineProperties(e.prototype, t),
                    n && CustomElementDetectedEventHandler_defineProperties(e, n)
                }(CustomElementDetectedEventHandler, [{
                    key: "_handle",
                    value: function _handle(e) {
                        var t = e.browserContext
                          , e = e.message;
                        e === xt ? this._handleCustomElementAdded(t) : e === It && this._handleCustomElementRemoved(t)
                    }
                }, {
                    key: "_handleCustomElementAdded",
                    value: function _handleCustomElementAdded(e) {
                        this._browserContextsCache.exists(e.Context) || this._browserContextsCache.addBrowserContext(e),
                        this._featureService.runFeaturesOnBrowserContext(e)
                    }
                }, {
                    key: "_handleCustomElementRemoved",
                    value: function _handleCustomElementRemoved(e) {
                        this._featureService.stopFeaturesOnBrowserContextRemove(e),
                        this._browserContextsCache.remove(e.Context)
                    }
                }]),
                CustomElementDetectedEventHandler
            }();
            function StartupConfigurationLoader_defineProperties(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            var Ut = function() {
                function StartupConfigurationLoader(e, t) {
                    !function StartupConfigurationLoader_classCallCheck(e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, StartupConfigurationLoader),
                    this._configurationRepository = e,
                    this._startUpConfigurations = t
                }
                return function StartupConfigurationLoader_createClass(e, t, n) {
                    t && StartupConfigurationLoader_defineProperties(e.prototype, t),
                    n && StartupConfigurationLoader_defineProperties(e, n)
                }(StartupConfigurationLoader, [{
                    key: "loadStartUpConfigurations",
                    value: function loadStartUpConfigurations() {
                        this._setConfigurationOrDefault(_.enableFramesProcessing, this._startUpConfigurations.getEnableFramesProcessing(), !0),
                        this._setConfigurationOrDefault(_.enableCustomElementsProcessing, this._startUpConfigurations.getEnableCustomElementsProcessing(), !1),
                        this._setConfigurationOrDefault(_.customElementAttribute, this._startUpConfigurations.getCollectionSettings().getElementSettings().getCustomElementAttribute(), "data-automation-id"),
                        this._setConfigurationOrDefault(_.enableSameSiteNoneAndSecureCookies, this._startUpConfigurations.getEnableSameSiteNoneAndSecureCookies(), !0)
                    }
                }, {
                    key: "_setConfigurationOrDefault",
                    value: function _setConfigurationOrDefault(e, t, n) {
                        h.isUndefinedNull(t) ? this._configurationRepository.set(e, n) : this._configurationRepository.set(e, t)
                    }
                }]),
                StartupConfigurationLoader
            }()
              , Nt = {
                Enter: 13,
                ArrowUp: 38,
                ArrowDown: 40,
                ArrowLeft: 37,
                ArrowRight: 39,
                Escape: 27,
                " ": 32,
                Control: 17,
                Alt: 18,
                Tab: 9,
                Shift: 16,
                CapsLock: 20,
                Meta: 91,
                Backspace: 8,
                Home: 36,
                End: 35,
                Insert: 45,
                Delete: 46,
                PageUp: 33,
                PageDown: 34,
                NumLock: 144,
                Clear: 144,
                F1: 112,
                F2: 113,
                F3: 114,
                F4: 115,
                F5: 116,
                F6: 117,
                F7: 118,
                F8: 119,
                F9: 120,
                10: 121,
                F11: 122,
                F12: 123
            };
            function MaskingService_defineProperties(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            var Wt = function() {
                function MaskingService(e) {
                    !function MaskingService_classCallCheck(e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, MaskingService),
                    this._configurationRepository = e,
                    this.specailConfigurationChars = Y([",", ".", " ", "@", ";", ":", "-", "+", "$"]),
                    this.specailChars = Y(["_", "!", "%", "^", "&", "*", "#", "(", ")", "=", "{", "}", "[", "]", "’", "\\", "|", "/", "?", ">", "<", "~", '"', "±", "§"]),
                    this.kanjiNumbers = Y(["〇", "零", "一", "二", "三", "四", "五", "六", "七", "八", "九", "十", "百", "千", "万"]),
                    this.chineseCapitalNumbers = Y(["零", "壹", "貳", "贰", "參", "叁", "肆", "伍", "陸", "陆", "柒", "捌", "玖", "拾", "佰", "仟", "萬"]),
                    this.suzhouNumbers = Y(["〇", "〡", "〢", "〣", "〤", "〥", "〦", "〧", "〨", "〩", "〸", "〹", "〺"]),
                    this.maskedCodeMapping = {
                        original: function original(e, t, n) {
                            return {
                                code: e,
                                charCode: t,
                                key: n
                            }
                        },
                        numpadKey: function numpadKey(e) {
                            return {
                                code: "Numpad",
                                charCode: 96,
                                key: e
                            }
                        },
                        letter: function letter() {
                            return {
                                code: "Key",
                                charCode: 65,
                                key: "A"
                            }
                        },
                        digit: function digit() {
                            return {
                                code: "Digit",
                                charCode: 49,
                                key: "1"
                            }
                        },
                        specialChar: function specialChar() {
                            return {
                                code: "SpecialChar",
                                charCode: 42,
                                key: "*"
                            }
                        },
                        other: function other() {
                            return {
                                code: "Other",
                                charCode: 66,
                                key: "B"
                            }
                        }
                    }
                }
                return function MaskingService_createClass(e, t, n) {
                    t && MaskingService_defineProperties(e.prototype, t),
                    n && MaskingService_defineProperties(e, n)
                }(MaskingService, [{
                    key: "maskKey",
                    value: function maskKey(e, t) {
                        if (Nt[e]) {
                            var n = Nt[e];
                            return this.maskedCodeMapping.original(t, n, e)
                        }
                        return this._isANumberOrDigit(e) ? t.includes("Numpad") ? this.maskedCodeMapping.numpadKey("1") : this.maskedCodeMapping.digit() : this._isALetter(e) ? this.maskedCodeMapping.letter() : !this._configurationRepository.get(_.keyEventsMaskSpecialChars) && this.specailConfigurationChars.has(e) ? this.maskedCodeMapping.original(t, e.charCodeAt(0), e) : this.specailChars.has(e) || this.specailConfigurationChars.has(e) ? t.includes("Numpad") ? this.maskedCodeMapping.numpadKey("*") : this.maskedCodeMapping.specialChar() : this.maskedCodeMapping.other()
                    }
                }, {
                    key: "getKeyFromLegacyProperties",
                    value: function getKeyFromLegacyProperties(e) {
                        e = e.keyCode || e.which;
                        return 0 === e || void 0 === e ? "" : String.fromCharCode(e)
                    }
                }, {
                    key: "_isALetter",
                    value: function _isALetter(e) {
                        return /^[a-zA-Z]$/.test(e) || this._isJapaneseOrChineseLetter(e)
                    }
                }, {
                    key: "_isANumberOrDigit",
                    value: function _isANumberOrDigit(e) {
                        return /[0-9]/.test(e) || this.kanjiNumbers.has(e) || this.chineseCapitalNumbers.has(e) || this.suzhouNumbers.has(e)
                    }
                }, {
                    key: "_isJapaneseOrChineseLetter",
                    value: function _isJapaneseOrChineseLetter(e) {
                        return this._isCJKUnifiedIdeographs(e) || this._isCJKUnifiedIdeographsExtenA(e) || this._isCJKUnifiedIdeographsExtenB(e) || this._isSmallKatakanaLetter(e)
                    }
                }, {
                    key: "_isCJKUnifiedIdeographsExtenB",
                    value: function _isCJKUnifiedIdeographsExtenB(e) {
                        return /[\u3041-\u309F]/.test(e)
                    }
                }, {
                    key: "_isSmallKatakanaLetter",
                    value: function _isSmallKatakanaLetter(e) {
                        return /[\u30A1-\u30FF]/.test(e)
                    }
                }, {
                    key: "_isCJKUnifiedIdeographsExtenA",
                    value: function _isCJKUnifiedIdeographsExtenA(e) {
                        return /[\u3400-\u4DB5]/.test(e)
                    }
                }, {
                    key: "_isCJKUnifiedIdeographs",
                    value: function _isCJKUnifiedIdeographs(e) {
                        return /[\u4E00-\u9FCC]/.test(e)
                    }
                }, {
                    key: "maskText",
                    value: function maskText(e) {
                        if (h.isUndefinedNull(e))
                            return "";
                        e = e.replace(/[\d]/g, "1").replace(/[\u3007\u4E00\u4E8C\u4E09\u56DB\u4E94\u516D\u4E03\u516B\u4E5D\u5341\u767E\u5343\u4E07]/g, "1").replace(/[\u96F6\u58F9\u8CB3\u8D30\u53C3\u53C1\u8086\u4F0D\u9678\u9646\u67D2\u634C\u7396\u62FE\u4F70\u4EDF\u842C\u3021-\u3029\u3038\u3039\u303A]/g, "1").replace(/[a-zA-Z]/g, "a").replace(/[\u4E00-\u9FCC\u3400-\u4DB5\u3041-\u309F\u30A1-\u30FF]/g, "a").replace(/[\\_!%^&*#()={}\[\]’|/?><~"±§`'׳]/g, "*");
                        return this._configurationRepository.get(_.keyEventsMaskSpecialChars) ? e.replace(/[,.@;:+$ -]/g, "*").replace(/[^a1*]/g, "B") : e.replace(/[^a1*,.@;:+$ -]/g, "B")
                    }
                }]),
                MaskingService
            }();
            function StorageUtilsWrapper_defineProperties(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            var jt = function() {
                function StorageUtilsWrapper(e, t) {
                    !function StorageUtilsWrapper_classCallCheck(e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, StorageUtilsWrapper),
                    this.isSecureSameSite = t.get(_.enableSameSiteNoneAndSecureCookies),
                    this._utils = e
                }
                return function StorageUtilsWrapper_createClass(e, t, n) {
                    t && StorageUtilsWrapper_defineProperties(e.prototype, t),
                    n && StorageUtilsWrapper_defineProperties(e, n)
                }(StorageUtilsWrapper, [{
                    key: "getCookie",
                    value: function getCookie(e) {
                        return this._utils.StorageUtils.getCookie(e)
                    }
                }, {
                    key: "setCookie",
                    value: function setCookie(e, t, n) {
                        return this._utils.StorageUtils.setCookie(e, t, n, this.isSecureSameSite)
                    }
                }, {
                    key: "getFromLocalStorage",
                    value: function getFromLocalStorage(e) {
                        return this._utils.StorageUtils.getFromLocalStorage(e)
                    }
                }, {
                    key: "saveToLocalStorage",
                    value: function saveToLocalStorage(e, t, n) {
                        return this._utils.StorageUtils.saveToLocalStorage(e, t, n)
                    }
                }, {
                    key: "removeFromLocalStorage",
                    value: function removeFromLocalStorage(e) {
                        return this._utils.StorageUtils.removeFromLocalStorage(e)
                    }
                }]),
                StorageUtilsWrapper
            }();
            function SystemBootstrapper_classCallCheck(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }
            function SystemBootstrapper_defineProperties(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            function SystemBootstrapper_createClass(e, t, n) {
                return t && SystemBootstrapper_defineProperties(e.prototype, t),
                n && SystemBootstrapper_defineProperties(e, n),
                e
            }
            var Ht = function() {
                function SystemBootstrapper() {
                    SystemBootstrapper_classCallCheck(this, SystemBootstrapper),
                    this._serverWorker = null,
                    this._serverWorkerCommunicator = null,
                    this._configurationService = null,
                    this._featureBuilder = null,
                    this._featureService = null,
                    this._dataQ = null,
                    this._frameHandler = null,
                    this._eventHandlers = [],
                    this._runWorker = function(e) {
                        return new q(e.getUseUrlWorker(),e.getWorkerUrl()).create()
                    }
                }
                return SystemBootstrapper_createClass(SystemBootstrapper, [{
                    key: "start",
                    value: function start(e, t, n) {
                        this._loadSystem(e, t, n)
                    }
                }, {
                    key: "stop",
                    value: function stop() {
                        this._serverWorker && this._serverWorker.close(),
                        this.heartBeatService && this.heartBeatService.stop()
                    }
                }, {
                    key: "registerPostLoadEvents",
                    value: function registerPostLoadEvents() {
                        this._slaveListener.onResetSessionTrigger.subscribe(this._sessionService.resetSession.bind(this._sessionService))
                    }
                }, {
                    key: "flushAllMessages",
                    value: function flushAllMessages() {
                        this._dataQ.flushAllMessages()
                    }
                }, {
                    key: "getServerWorkerCommunicator",
                    value: function getServerWorkerCommunicator() {
                        return this._serverWorkerCommunicator
                    }
                }, {
                    key: "getFeatureBuilder",
                    value: function getFeatureBuilder() {
                        return this._featureBuilder
                    }
                }, {
                    key: "getFeatureService",
                    value: function getFeatureService() {
                        return this._featureService
                    }
                }, {
                    key: "getConfigurationService",
                    value: function getConfigurationService() {
                        return this._configurationService
                    }
                }, {
                    key: "getConfigurationRepository",
                    value: function getConfigurationRepository() {
                        return this._configurationRepository
                    }
                }, {
                    key: "getSessionService",
                    value: function getSessionService() {
                        return this._sessionService
                    }
                }, {
                    key: "getContextMgr",
                    value: function getContextMgr() {
                        return this._contextMgr
                    }
                }, {
                    key: "getMuidMgr",
                    value: function getMuidMgr() {
                        return this._muidManager
                    }
                }, {
                    key: "getApiBridge",
                    value: function getApiBridge() {
                        return this._customerApiBridge
                    }
                }, {
                    key: "getPerfMonitor",
                    value: function getPerfMonitor() {
                        return this._perfMonitor
                    }
                }, {
                    key: "getServerStateMgr",
                    value: function getServerStateMgr() {
                        return this._serverStateMgr
                    }
                }, {
                    key: "getMessageBus",
                    value: function getMessageBus() {
                        return this._msgBus
                    }
                }, {
                    key: "_loadSystem",
                    value: function _loadSystem(e, t, n) {
                        this._runServerWorker(n),
                        this._serverWorkerCommunicator = new Z,
                        this._serverWorkerCommunicator.setMessagingPort(this._serverWorker.port);
                        var r = new X(wt,this._serverWorkerCommunicator,null,"logPerfQPassWorkerInterval",N);
                        this._perfMonitor = new J(r),
                        this._configurationRepository = new ue,
                        new Ut(this._configurationRepository,n).loadStartUpConfigurations();
                        var i = new jt(h,this._configurationRepository)
                          , o = new $(self.MutationObserver,h,wt,"contextConfiguration");
                        this._contextMgr = new te(h,o,this._serverWorkerCommunicator,i);
                        var s = this._contextMgr
                          , a = new (function() {
                            function _class() {
                                SystemBootstrapper_classCallCheck(this, _class)
                            }
                            return SystemBootstrapper_createClass(_class, [{
                                key: "log",
                                value: function log(e, t) {
                                    r.addToQueue("log", {
                                        msg: e,
                                        url: s.url,
                                        level: t,
                                        sn: this.sn++
                                    })
                                }
                            }]),
                            _class
                        }());
                        a.sn = 0;
                        var u = new S(a);
                        C.setLogger(u),
                        this._currScriptName = document.currentScript ? document.currentScript.src : "",
                        this._globalexceptionHandler = new ne(h,this._currScriptName),
                        this._msgBus = new re,
                        this._dataQ = new X(wt,this._serverWorkerCommunicator,this._contextMgr,"dataQPassWorkerInterval",U),
                        this._cidCache = new ie,
                        this._serverStateMgr = new se(this._serverWorkerCommunicator,h),
                        this._sessionInfoService = new Ft,
                        this._sensorGateKeeper = new Dt(this._sessionInfoService,this._configurationRepository),
                        this._configurationService = new le(h,this._configurationRepository,this._msgBus,this._cidCache,this._serverWorkerCommunicator),
                        this._sensorDataQ = new Pe(this._configurationRepository,this._dataQ,this._msgBus,h,this._sensorGateKeeper),
                        this._elementsUtils = new Re(this._configurationRepository,h,this._dataQ,this._contextMgr);
                        var c = new Ae
                          , l = new Ne(this._configurationRepository,wt);
                        this._frameHandler = l.create(),
                        this._featureService = new We(e,this._frameHandler,this._configurationRepository,wt,c);
                        o = new At(Le,h,this._msgBus);
                        this._pauseResumeMgr = new He(this._featureService,this._configurationRepository,this._dataQ),
                        this._customerApiBridge = new Ye(this._pauseResumeMgr,this._msgBus,t,h),
                        this._muidManager = new Ze(h,this._dataQ,i),
                        this._psidCache = new Xe;
                        a = new Je(this._psidCache,this._serverWorkerCommunicator),
                        l = new $(self.MutationObserver,h,wt,"resetSessionConfig"),
                        t = new $e(h,i);
                        this._csidCache = new et;
                        i = new tt(this._customerApiBridge,this._csidCache,this._serverWorkerCommunicator);
                        this._sessionService = new rt(this._msgBus,this._configurationService,this._configurationRepository,h,wt,this._serverWorkerCommunicator,this._contextMgr,this._muidManager,this._serverStateMgr,l,t,i,this._csidCache,this._psidCache),
                        this._metadataService = new it(this._configurationRepository,this._dataQ),
                        this._slaveListener = new at(this._dataQ,this._configurationRepository,h,r,this._contextMgr),
                        this._slaveListener.listen(),
                        this._sameChar = new be,
                        this._maskingService = new Wt(this._configurationRepository),
                        this._featureBuilder = new ut(e,this._configurationRepository,h,this._elementsUtils,self.MutationObserver,this._dataQ,this._sessionService,this._muidManager,this._perfMonitor,this._sensorDataQ,this._msgBus,this._cidCache,this._sameChar,this._maskingService),
                        this._contextApiHandler = new ct(this._contextMgr,this._dataQ),
                        this._contextMgr.onContextChange.subscribe(this._featureService.runPerContextFeatures.bind(this._featureService)),
                        this._stateService = new lt(this._msgBus);
                        e = new pt;
                        this.heartBeatService = new kt(this._serverWorkerCommunicator,new Rt,this._configurationRepository.get(_.heartBeatMessageInterval)),
                        this.heartBeatService.start(),
                        this._eventHandlers.push(new vt(this._msgBus,this._contextMgr)),
                        this._eventHandlers.push(new _t(this._msgBus,this._sessionService)),
                        this._eventHandlers.push(new mt(this._msgBus,this._metadataService)),
                        this._eventHandlers.push(new gt(this._msgBus,this._pauseResumeMgr,this._slaveListener)),
                        this._eventHandlers.push(new yt(this._msgBus,i)),
                        this._eventHandlers.push(new bt(this._msgBus,a)),
                        this._eventHandlers.push(new St(this._msgBus,e)),
                        this._eventHandlers.push(new Ct(this._msgBus,this._featureService,this._dataQ,this._pauseResumeMgr,this._metadataService,u,this._contextMgr,this._sessionService,this._sensorDataQ,this._slaveListener,this._stateService,this._perfMonitor,this.heartBeatService,this._sensorGateKeeper)),
                        this._eventHandlers.push(new Et(this._msgBus,this._featureService,this._customerApiBridge,this._contextMgr,e,this._sessionInfoService)),
                        this._configurationRepository.get(_.enableCustomElementsProcessing) && (o.start(new Te(window.self)),
                        this._eventHandlers.push(new Lt(c,this._featureService,this._msgBus))),
                        n.getLogServerURL() && this._configurationService.updateLogUrlToWorker(this._sessionService.sessionId, this._csidCache.get(), this._serverWorkerCommunicator, n.getLogServerURL()),
                        this._stateService.updateState(W.starting)
                    }
                }, {
                    key: "_runServerWorker",
                    value: function _runServerWorker(e) {
                        this._serverWorker = this._runWorker(e)
                    }
                }]),
                SystemBootstrapper
            }();
            function ElementEventCollector_typeof(e) {
                return (ElementEventCollector_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function _typeof(e) {
                    return typeof e
                }
                : function _typeof(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }
                )(e)
            }
            function ownKeys(t, e) {
                var n, r = Object.keys(t);
                return Object.getOwnPropertySymbols && (n = Object.getOwnPropertySymbols(t),
                e && (n = n.filter(function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                })),
                r.push.apply(r, n)),
                r
            }
            function _objectSpread(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? ownKeys(Object(n), !0).forEach(function(e) {
                        ElementEventCollector_defineProperty(t, e, n[e])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : ownKeys(Object(n)).forEach(function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    })
                }
                return t
            }
            function ElementEventCollector_classCallCheck(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }
            function ElementEventCollector_defineProperties(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            function ElementEventCollector_createClass(e, t, n) {
                return t && ElementEventCollector_defineProperties(e.prototype, t),
                n && ElementEventCollector_defineProperties(e, n),
                e
            }
            function ElementEventCollector_setPrototypeOf(e, t) {
                return (ElementEventCollector_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(e, t) {
                    return e.__proto__ = t,
                    e
                }
                )(e, t)
            }
            function ElementEventCollector_createSuper(n) {
                var r = function ElementEventCollector_isNativeReflectConstruct() {
                    if ("undefined" == typeof Reflect || !Reflect.construct)
                        return !1;
                    if (Reflect.construct.sham)
                        return !1;
                    if ("function" == typeof Proxy)
                        return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})),
                        !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function _createSuperInternal() {
                    var e, t = ElementEventCollector_getPrototypeOf(n);
                    return function ElementEventCollector_possibleConstructorReturn(e, t) {
                        return !t || "object" !== ElementEventCollector_typeof(t) && "function" != typeof t ? ElementEventCollector_assertThisInitialized(e) : t
                    }(this, r ? (e = ElementEventCollector_getPrototypeOf(this).constructor,
                    Reflect.construct(t, arguments, e)) : t.apply(this, arguments))
                }
            }
            function ElementEventCollector_assertThisInitialized(e) {
                if (void 0 === e)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }
            function ElementEventCollector_getPrototypeOf(e) {
                return (ElementEventCollector_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                }
                )(e)
            }
            function ElementEventCollector_defineProperty(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n,
                e
            }
            var Qt = {
                configKey: "isElementsEvent",
                isDefault: !0,
                shouldRunPerContext: !0,
                shouldRunPerSession: !1,
                shouldRun: !0,
                isFrameRelated: !0,
                runInUns: !1,
                runInSlave: !0,
                isRunning: !1,
                instance: null
            }
              , zt = {
                input: 0,
                initial: 1,
                focus: 2,
                blur: 3,
                change: 4,
                click: 5,
                submit: 6
            }
              , qt = ["eventSequence", "timestamp", "eventType", "isTrusted", "elementHash", "length", "elementValues", "selected", "hashedValue", "relativeTime"]
              , Kt = function() {
                !function ElementEventCollector_inherits(e, t) {
                    if ("function" != typeof t && null !== t)
                        throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }),
                    t && ElementEventCollector_setPrototypeOf(e, t)
                }(ElementEventCollector, fe);
                var t = ElementEventCollector_createSuper(ElementEventCollector);
                function ElementEventCollector(e) {
                    var r;
                    return ElementEventCollector_classCallCheck(this, ElementEventCollector),
                    ElementEventCollector_defineProperty(ElementEventCollector_assertThisInitialized(r = t.call(this)), "mutationMessageHandler", function(e) {
                        e.browserContext && (r._inputEvents.addOnLoadInputData(e.browserContext, !0),
                        r._inputEvents.bind(e.browserContext),
                        r._clickEvents.bind(e.browserContext),
                        r._selectElementEvents.bind(e.browserContext),
                        r._formEvents.bind(e.browserContext))
                    }),
                    ElementEventCollector_defineProperty(ElementEventCollector_assertThisInitialized(r), "startFeature", function(e) {
                        r._inputEvents.addOnLoadInputData(e, !1),
                        r._inputEvents.bind(e),
                        r._clickEvents.bind(e),
                        r._selectElementEvents.bind(e),
                        r._formEvents.bind(e),
                        r._configurationRepository.get(_.isMutationObserver) && r._mutationEmitter && (r._mutationEmitter.startObserver(e),
                        r._jQueryElementListenerSiteMapper.initTracking())
                    }),
                    ElementEventCollector_defineProperty(ElementEventCollector_assertThisInitialized(r), "_onSiteMapperMatch", function(e) {
                        var t = e.selector;
                        if (t)
                            try {
                                var n = window.document.querySelector(t);
                                if (!n)
                                    return void C.error("ElementEvents._onSiteMapperMatch - selector:".concat(JSON.stringify(t), " not found on page"));
                                r._domUtils.matches(n, r._inputSelectors) ? r._jqueryEventHandler.bindInputEvents(n) : r._domUtils.matches(n, r._onClickSelectors) ? r._jqueryEventHandler.bindOnClickEvents(n) : r._domUtils.matches(n, r._onSelectSelectors) ? r._jqueryEventHandler.bindOnChangeEvents(n) : r._domUtils.matches(n, r._onFormSelectors) ? r._jqueryEventHandler.bindOnFormsEvents(n) : C.error("ElementEvents._onSiteMapperMatch - Unable to match the element with selector:\n                ".concat(JSON.stringify(t), " to any selectors group. Aborting jQuery element listening process."))
                            } catch (e) {
                                C.error("ElementEvents._onSiteMapperMatch - ".concat(e.message), e)
                            }
                        else
                            C.warn("ElementEvents._onSiteMapperMatch - No selector defined for match. Aborting jQuery element listening process.")
                    }),
                    r._configurationRepository = e.configurationRepository,
                    r._utils = e.utils,
                    r._domUtils = e.domUtils,
                    r._dataQ = e.dataQ,
                    r._elements = e.elements,
                    r._jQueryElementListenerSiteMapper = e.jQueryElementListenerSiteMapper,
                    r._jQueryElementListenerSiteMapper.updateObserver(r._onSiteMapperMatch),
                    r._messageBus = e.messageBus,
                    r._mutationEmitter = e.mutationEmitter,
                    r._messageBus.subscribe(ce.MutationSingleEvent, r.mutationMessageHandler),
                    r._StandardInputEventsEmitter = e.StandardInputEventsEmitter,
                    r._SyntheticMaskInputEventsHandler = e.SyntheticMaskInputEventsHandler,
                    r._SyntheticAutotabInputEventsHandler = e.SyntheticAutotabInputEventsHandler,
                    r._maskingService = e.maskingService,
                    r._inputEvents = new e.InputEvents(r._elements,r.sendToQueue.bind(ElementEventCollector_assertThisInitialized(r)),r._utils,r._messageBus,r._StandardInputEventsEmitter,r._SyntheticMaskInputEventsHandler,r._SyntheticAutotabInputEventsHandler,r._maskingService),
                    r._inputSelectors = e.inputSelectors,
                    r._StandardOnClickEventsEmitter = e.StandardOnClickEventsEmitter,
                    r._clickEvents = new e.ClickEvents(r.sendToQueue.bind(ElementEventCollector_assertThisInitialized(r)),r._utils,r._messageBus,r._configurationRepository,r._StandardOnClickEventsEmitter),
                    r._onClickSelectors = e.onClickSelectors,
                    r._StandardOnChangeEventsEmitter = e.StandardOnChangeEventsEmitter,
                    r._elementFocusEventEmitter = e.ElementFocusEventsEmitter,
                    r._elementBlurEventEmitter = e.ElementBlurEventsEmitter,
                    r._selectElementEvents = new e.SelectElementEvents(r.sendToQueue.bind(ElementEventCollector_assertThisInitialized(r)),r._utils,r._messageBus,r._StandardOnChangeEventsEmitter,r._elementFocusEventEmitter,r._elementBlurEventEmitter,r._configurationRepository),
                    r._onSelectSelectors = e.onSelectSelectors,
                    r._StandardOnFormEventsEmitter = e.StandardOnFormEventsEmitter,
                    r._formEvents = new e.FormEvents(r.sendToQueue.bind(ElementEventCollector_assertThisInitialized(r)),r._messageBus,r._StandardOnFormEventsEmitter),
                    r._onFormSelectors = e.onFormSelectors,
                    r._jqueryEventHandler = e.JqueryElementsHandler,
                    r._maxElemValLength = 200,
                    r._isHashedValue = r._configurationRepository.get("isElementHashedValue") || !1,
                    r._hashTruncationLength = r._configurationRepository.get("elementHashTruncationLength") || 2,
                    r
                }
                return ElementEventCollector_createClass(ElementEventCollector, [{
                    key: "stopFeature",
                    value: function stopFeature(e) {
                        this._inputEvents.unbind(e),
                        this._clickEvents.unbind(e),
                        this._selectElementEvents.unbind(e),
                        this._formEvents.unbind(e),
                        this._jQueryElementListenerSiteMapper.stopTracking(),
                        this._mutationEmitter.stopObserver(e)
                    }
                }, {
                    key: "updateFeatureConfig",
                    value: function updateFeatureConfig(e) {
                        this._configurationRepository.get("isMutationObserver") && this._mutationEmitter && (this._mutationEmitter.startObserver(e),
                        this._jQueryElementListenerSiteMapper.onConfigUpdate(this._configurationRepository)),
                        this._isHashedValue = void 0 !== this._configurationRepository.get("isElementHashedValue") ? this._configurationRepository.get("isElementHashedValue") : this._isHashedValue,
                        this._hashTruncationLength = void 0 !== this._configurationRepository.get("elementHashTruncationLength") ? this._configurationRepository.get("elementHashTruncationLength") : this._hashTruncationLength,
                        this._elements.updateFeatureConfig(),
                        this._clickEvents.updateSettings(),
                        this._selectElementEvents.updateSettings(e)
                    }
                }, {
                    key: "sendToQueue",
                    value: function sendToQueue(e, t) {
                        var n = de[e.isTrusted]
                          , r = this.getEventTimestamp(e)
                          , i = this.getTimestampFromEvent(e)
                          , o = zt[e.type];
                        this._utils.isUndefinedNull(o) && (o = -1);
                        var s = this._elements.getElement(e.target)
                          , a = this._utils.StorageUtils.getAndUpdateEventSequenceNumber();
                        (t = t || {}).elementValues && t.elementValues.length > this._maxElemValLength && (t.elementValues = "");
                        e = (this._isHashedValue ? e.target.value || e.target.innerHTML : "") ? this._utils.getTruncatedHash(e.target.value, this._hashTruncationLength) : "",
                        i = _objectSpread(_objectSpread({}, t), {
                            eventType: o,
                            eventSequence: a,
                            timestamp: r,
                            elementHash: s,
                            isTrusted: n,
                            hashedValue: e,
                            relativeTime: i
                        });
                        this._dataQ.addToQueue("element_events", this._utils.convertToArrayByMap(qt, i), !0)
                    }
                }], [{
                    key: "getDefaultSettings",
                    value: function getDefaultSettings() {
                        return Qt
                    }
                }, {
                    key: "Builder",
                    get: function get() {
                        return function() {
                            function Builder(e, t, n, r, i) {
                                ElementEventCollector_classCallCheck(this, Builder),
                                this.configurationRepository = e,
                                this.utils = t,
                                this.domUtils = n,
                                this.elements = r,
                                this.dataQ = i
                            }
                            return ElementEventCollector_createClass(Builder, [{
                                key: "withMessageBus",
                                value: function withMessageBus(e) {
                                    return this.messageBus = e,
                                    this
                                }
                            }, {
                                key: "withMutationEmitter",
                                value: function withMutationEmitter(e) {
                                    return this.mutationEmitter = e,
                                    this
                                }
                            }, {
                                key: "withjQueryElementListenerSiteMapper",
                                value: function withjQueryElementListenerSiteMapper(e) {
                                    return this.jQueryElementListenerSiteMapper = e,
                                    this
                                }
                            }, {
                                key: "withjQueryElementsHandler",
                                value: function withjQueryElementsHandler(e) {
                                    return this.JqueryElementsHandler = e,
                                    this
                                }
                            }, {
                                key: "withInputEvents",
                                value: function withInputEvents(e, t, n) {
                                    return this.InputEvents = e,
                                    this.inputSelectors = t,
                                    this.maskingService = n,
                                    this
                                }
                            }, {
                                key: "withStandardInputEventsEmitter",
                                value: function withStandardInputEventsEmitter(e) {
                                    return this.StandardInputEventsEmitter = e,
                                    this
                                }
                            }, {
                                key: "withSyntheticMaskInputEventsHandler",
                                value: function withSyntheticMaskInputEventsHandler(e) {
                                    return this.SyntheticMaskInputEventsHandler = e,
                                    this
                                }
                            }, {
                                key: "withSyntheticAutotabInputEventsHandler",
                                value: function withSyntheticAutotabInputEventsHandler(e) {
                                    return this.SyntheticAutotabInputEventsHandler = e,
                                    this
                                }
                            }, {
                                key: "withClickEvents",
                                value: function withClickEvents(e, t) {
                                    return this.ClickEvents = e,
                                    this.onClickSelectors = t,
                                    this
                                }
                            }, {
                                key: "withStandardOnClickEventsEmitter",
                                value: function withStandardOnClickEventsEmitter(e) {
                                    return this.StandardOnClickEventsEmitter = e,
                                    this
                                }
                            }, {
                                key: "withSelectElementEvents",
                                value: function withSelectElementEvents(e, t) {
                                    return this.SelectElementEvents = e,
                                    this.onSelectSelectors = t,
                                    this
                                }
                            }, {
                                key: "withStandardOnChangeEventsEmitter",
                                value: function withStandardOnChangeEventsEmitter(e) {
                                    return this.StandardOnChangeEventsEmitter = e,
                                    this
                                }
                            }, {
                                key: "withElementFocusEventsEmitter",
                                value: function withElementFocusEventsEmitter(e) {
                                    return this.ElementFocusEventsEmitter = e,
                                    this
                                }
                            }, {
                                key: "withElementBlurEventsEmitter",
                                value: function withElementBlurEventsEmitter(e) {
                                    return this.ElementBlurEventsEmitter = e,
                                    this
                                }
                            }, {
                                key: "withFormEvents",
                                value: function withFormEvents(e, t) {
                                    return this.FormEvents = e,
                                    this.onFormSelectors = t,
                                    this
                                }
                            }, {
                                key: "withStandardOnFormEventsEmitter",
                                value: function withStandardOnFormEventsEmitter(e) {
                                    return this.StandardOnFormEventsEmitter = e,
                                    this
                                }
                            }, {
                                key: "build",
                                value: function build() {
                                    return new ElementEventCollector(this)
                                }
                            }]),
                            Builder
                        }()
                    }
                }]),
                ElementEventCollector
            }();
            function ClipboardEventCollector_typeof(e) {
                return (ClipboardEventCollector_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function _typeof(e) {
                    return typeof e
                }
                : function _typeof(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }
                )(e)
            }
            function ClipboardEventCollector_classCallCheck(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }
            function ClipboardEventCollector_defineProperties(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            function ClipboardEventCollector_createClass(e, t, n) {
                return t && ClipboardEventCollector_defineProperties(e.prototype, t),
                n && ClipboardEventCollector_defineProperties(e, n),
                e
            }
            function ClipboardEventCollector_setPrototypeOf(e, t) {
                return (ClipboardEventCollector_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(e, t) {
                    return e.__proto__ = t,
                    e
                }
                )(e, t)
            }
            function ClipboardEventCollector_createSuper(n) {
                var r = function ClipboardEventCollector_isNativeReflectConstruct() {
                    if ("undefined" == typeof Reflect || !Reflect.construct)
                        return !1;
                    if (Reflect.construct.sham)
                        return !1;
                    if ("function" == typeof Proxy)
                        return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})),
                        !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function _createSuperInternal() {
                    var e, t = ClipboardEventCollector_getPrototypeOf(n);
                    return function ClipboardEventCollector_possibleConstructorReturn(e, t) {
                        return !t || "object" !== ClipboardEventCollector_typeof(t) && "function" != typeof t ? ClipboardEventCollector_assertThisInitialized(e) : t
                    }(this, r ? (e = ClipboardEventCollector_getPrototypeOf(this).constructor,
                    Reflect.construct(t, arguments, e)) : t.apply(this, arguments))
                }
            }
            function ClipboardEventCollector_assertThisInitialized(e) {
                if (void 0 === e)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }
            function ClipboardEventCollector_getPrototypeOf(e) {
                return (ClipboardEventCollector_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                }
                )(e)
            }
            function ClipboardEventCollector_defineProperty(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n,
                e
            }
            var Vt = {
                configKey: "isClipboardEvent",
                isDefault: !0,
                shouldRunPerContext: !1,
                shouldRunPerSession: !1,
                shouldRun: !0,
                isFrameRelated: !0,
                runInUns: !1,
                runInSlave: !0,
                isRunning: !1,
                instance: null
            }
              , Gt = {
                copy: 0,
                paste: 1,
                cut: 2
            }
              , Yt = ["eventSequence", "timestamp", "clipboardEventType", "elementHash", "copiedText"]
              , Zt = function() {
                !function ClipboardEventCollector_inherits(e, t) {
                    if ("function" != typeof t && null !== t)
                        throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }),
                    t && ClipboardEventCollector_setPrototypeOf(e, t)
                }(ClipboardEventCollector, fe);
                var t = ClipboardEventCollector_createSuper(ClipboardEventCollector);
                function ClipboardEventCollector(e) {
                    var s;
                    return ClipboardEventCollector_classCallCheck(this, ClipboardEventCollector),
                    ClipboardEventCollector_defineProperty(ClipboardEventCollector_assertThisInitialized(s = t.call(this)), "startFeature", function(e) {
                        try {
                            var t = e.getDocument();
                            s._cutEventEmitter.start(t),
                            s._messageBus.subscribe(ce.CutEvent, s._handleClipboardEvent),
                            s._copyEventEmitter.start(t),
                            s._messageBus.subscribe(ce.CopyEvent, s._handleClipboardEvent),
                            s._pasteEventEmitter.start(t),
                            s._messageBus.subscribe(ce.PasteEvent, s._handleClipboardEvent)
                        } catch (e) {
                            C.error("Failed starting the ClipboardEvents feature. msg: ".concat(e.message), e)
                        }
                    }),
                    ClipboardEventCollector_defineProperty(ClipboardEventCollector_assertThisInitialized(s), "_handleClipboardEvent", function(e) {
                        s._sendToQueue(e)
                    }),
                    ClipboardEventCollector_defineProperty(ClipboardEventCollector_assertThisInitialized(s), "_sendToQueue", function(e) {
                        try {
                            var t = s.getEventTimestamp(e)
                              , n = s._elements.getElement(e.target)
                              , r = s._utils.StorageUtils.getAndUpdateEventSequenceNumber()
                              , i = e.clipboardData ? e.clipboardData.getData("text") : window.clipboardData ? window.clipboardData.getData("text") : "";
                            "" !== (i = i || "") && (i = i.replace(/[\d]/g, "1").replace(/[a-zA-Z]/g, "a").replace(/[^a-zA-Z\d]/g, "*"));
                            var o = Gt[e.type];
                            s._utils.isUndefinedNull(o) && (o = -1),
                            s._dataQueue.addToQueue("clipboard_events", s._utils.convertToArrayByMap(Yt, {
                                eventSequence: r,
                                timestamp: t,
                                elementHash: n,
                                copiedText: i,
                                clipboardEventType: o
                            }))
                        } catch (e) {
                            C.error("Failed handling ClipboardEvent. msg: ".concat(e.message), e)
                        }
                    }),
                    s._utils = e.utils,
                    s._dataQueue = e.dataQueue,
                    s._elements = e.elements,
                    s._messageBus = e.messageBus,
                    s._cutEventEmitter = e.cutEventEmitter,
                    s._copyEventEmitter = e.copyEventEmitter,
                    s._pasteEventEmitter = e.pasteEventEmitter,
                    s
                }
                return ClipboardEventCollector_createClass(ClipboardEventCollector, [{
                    key: "stopFeature",
                    value: function stopFeature(e) {
                        try {
                            var t = e.getDocument();
                            this._cutEventEmitter.stop(t),
                            this._messageBus.unsubscribe(ce.CutEvent, this._handleClipboardEvent),
                            this._copyEventEmitter.stop(t),
                            this._messageBus.unsubscribe(ce.CopyEvent, this._handleClipboardEvent),
                            this._pasteEventEmitter.stop(t),
                            this._messageBus.unsubscribe(ce.PasteEvent, this._handleClipboardEvent)
                        } catch (e) {
                            C.error("Failed stopping the ClipboardEvents feature. msg: ".concat(e.message), e)
                        }
                    }
                }], [{
                    key: "getDefaultSettings",
                    value: function getDefaultSettings() {
                        return Vt
                    }
                }, {
                    key: "Builder",
                    get: function get() {
                        return function() {
                            function Builder(e, t, n) {
                                ClipboardEventCollector_classCallCheck(this, Builder),
                                this.utils = e,
                                this.dataQueue = n,
                                this.elements = t
                            }
                            return ClipboardEventCollector_createClass(Builder, [{
                                key: "withMessageBus",
                                value: function withMessageBus(e) {
                                    return this.messageBus = e,
                                    this
                                }
                            }, {
                                key: "withCutEventEmitter",
                                value: function withCutEventEmitter(e) {
                                    return this.cutEventEmitter = e,
                                    this
                                }
                            }, {
                                key: "withCopyEventEmitter",
                                value: function withCopyEventEmitter(e) {
                                    return this.copyEventEmitter = e,
                                    this
                                }
                            }, {
                                key: "withPasteEventEmitter",
                                value: function withPasteEventEmitter(e) {
                                    return this.pasteEventEmitter = e,
                                    this
                                }
                            }, {
                                key: "build",
                                value: function build() {
                                    return new ClipboardEventCollector(this)
                                }
                            }]),
                            Builder
                        }()
                    }
                }]),
                ClipboardEventCollector
            }();
            function OrientationEventCollector_typeof(e) {
                return (OrientationEventCollector_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function _typeof(e) {
                    return typeof e
                }
                : function _typeof(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }
                )(e)
            }
            function OrientationEventCollector_defineProperties(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            function OrientationEventCollector_setPrototypeOf(e, t) {
                return (OrientationEventCollector_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(e, t) {
                    return e.__proto__ = t,
                    e
                }
                )(e, t)
            }
            function OrientationEventCollector_createSuper(n) {
                var r = function OrientationEventCollector_isNativeReflectConstruct() {
                    if ("undefined" == typeof Reflect || !Reflect.construct)
                        return !1;
                    if (Reflect.construct.sham)
                        return !1;
                    if ("function" == typeof Proxy)
                        return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})),
                        !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function _createSuperInternal() {
                    var e, t = OrientationEventCollector_getPrototypeOf(n);
                    return function OrientationEventCollector_possibleConstructorReturn(e, t) {
                        return !t || "object" !== OrientationEventCollector_typeof(t) && "function" != typeof t ? OrientationEventCollector_assertThisInitialized(e) : t
                    }(this, r ? (e = OrientationEventCollector_getPrototypeOf(this).constructor,
                    Reflect.construct(t, arguments, e)) : t.apply(this, arguments))
                }
            }
            function OrientationEventCollector_assertThisInitialized(e) {
                if (void 0 === e)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }
            function OrientationEventCollector_getPrototypeOf(e) {
                return (OrientationEventCollector_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                }
                )(e)
            }
            var Xt = {
                configKey: "isOrientationEvents",
                isDefault: !1,
                shouldRunPerContext: !1,
                shouldRunPerSession: !1,
                shouldRun: !0,
                isFrameRelated: !1,
                runInSlave: !1,
                runInUns: !1,
                isRunning: !1,
                instance: null
            }
              , Jt = function() {
                !function OrientationEventCollector_inherits(e, t) {
                    if ("function" != typeof t && null !== t)
                        throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }),
                    t && OrientationEventCollector_setPrototypeOf(e, t)
                }(OrientationEventCollector, fe);
                var o = OrientationEventCollector_createSuper(OrientationEventCollector);
                function OrientationEventCollector(e, t, n, r, i) {
                    var s;
                    return function OrientationEventCollector_classCallCheck(e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, OrientationEventCollector),
                    function OrientationEventCollector_defineProperty(e, t, n) {
                        t in e ? Object.defineProperty(e, t, {
                            value: n,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : e[t] = n
                    }(OrientationEventCollector_assertThisInitialized(s = o.call(this)), "_handleDeviceOrientationEvent", function(e) {
                        var t, n, r, i, o = s._utils.dateNow();
                        e && o - s._lastTime > s._samplePeriod && (t = e.absolute || !1,
                        n = s._utils.isUndefinedNull(e.alpha) ? 0 : s._utils.cutDecimalPointDigits(e.alpha, 4),
                        r = s._utils.isUndefinedNull(e.beta) ? 0 : s._utils.cutDecimalPointDigits(e.beta, 4),
                        i = s._utils.isUndefinedNull(e.gamma) ? 0 : s._utils.cutDecimalPointDigits(e.gamma, 4),
                        n === s._lastAlpha && r === s._lastBeta && i === s._lastGamma || (C.isDebug() && C.debug("OrientationEvents:_onOrientationEvent, sending data: timestamp: ".concat(o, "\n                alpha,betta,gamma: ").concat(n, ",").concat(r, ",").concat(i, ",prevTime:").concat(s._lastTime)),
                        s._lastTime = o,
                        s._lastAlpha = n,
                        s._lastBeta = r,
                        s._lastGamma = i,
                        e = s._utils.StorageUtils.getAndUpdateEventSequenceNumber(),
                        s._dataQ.addToQueue("orientation_events", [null, e, o, t, n, r, i])))
                    }),
                    s._dataQ = n,
                    s._configurationRepository = e,
                    s._utils = t,
                    s._samplePeriod = s._configurationRepository.get(_.orientationEventsSamplePeriod) || 0,
                    s._lastAlpha = 0,
                    s._lastBeta = 0,
                    s._lastGamma = 0,
                    s._lastTime = 0,
                    s._messageBus = r,
                    s._deviceOrientationEventEmitter = i,
                    s
                }
                return function OrientationEventCollector_createClass(e, t, n) {
                    t && OrientationEventCollector_defineProperties(e.prototype, t),
                    n && OrientationEventCollector_defineProperties(e, n)
                }(OrientationEventCollector, [{
                    key: "startFeature",
                    value: function startFeature() {
                        window.DeviceOrientationEvent && (this._deviceOrientationEventEmitter.start(),
                        this._messageBus.subscribe(ce.DeviceOrientationEvent, this._handleDeviceOrientationEvent))
                    }
                }, {
                    key: "stopFeature",
                    value: function stopFeature() {
                        window.DeviceOrientationEvent && (this._deviceOrientationEventEmitter.stop(),
                        this._messageBus.unsubscribe(ce.DeviceOrientationEvent, this._handleDeviceOrientationEvent))
                    }
                }, {
                    key: "updateFeatureConfig",
                    value: function updateFeatureConfig() {
                        var e = this._configurationRepository.get(_.orientationEventsSamplePeriod);
                        this._samplePeriod = void 0 !== e ? e : this._samplePeriod
                    }
                }], [{
                    key: "getDefaultSettings",
                    value: function getDefaultSettings() {
                        return Xt
                    }
                }]),
                OrientationEventCollector
            }();
            function BeforeInstallPromptEventCollector_typeof(e) {
                return (BeforeInstallPromptEventCollector_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function _typeof(e) {
                    return typeof e
                }
                : function _typeof(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }
                )(e)
            }
            function BeforeInstallPromptEventCollector_defineProperties(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            function BeforeInstallPromptEventCollector_setPrototypeOf(e, t) {
                return (BeforeInstallPromptEventCollector_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(e, t) {
                    return e.__proto__ = t,
                    e
                }
                )(e, t)
            }
            function BeforeInstallPromptEventCollector_createSuper(n) {
                var r = function BeforeInstallPromptEventCollector_isNativeReflectConstruct() {
                    if ("undefined" == typeof Reflect || !Reflect.construct)
                        return !1;
                    if (Reflect.construct.sham)
                        return !1;
                    if ("function" == typeof Proxy)
                        return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})),
                        !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function _createSuperInternal() {
                    var e, t = BeforeInstallPromptEventCollector_getPrototypeOf(n);
                    return function BeforeInstallPromptEventCollector_possibleConstructorReturn(e, t) {
                        return !t || "object" !== BeforeInstallPromptEventCollector_typeof(t) && "function" != typeof t ? BeforeInstallPromptEventCollector_assertThisInitialized(e) : t
                    }(this, r ? (e = BeforeInstallPromptEventCollector_getPrototypeOf(this).constructor,
                    Reflect.construct(t, arguments, e)) : t.apply(this, arguments))
                }
            }
            function BeforeInstallPromptEventCollector_assertThisInitialized(e) {
                if (void 0 === e)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }
            function BeforeInstallPromptEventCollector_getPrototypeOf(e) {
                return (BeforeInstallPromptEventCollector_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                }
                )(e)
            }
            var $t = {
                configKey: "isBeforeInstallPrompt",
                isDefault: !1,
                shouldRunPerContext: !1,
                shouldRunPerSession: !1,
                shouldRun: !1,
                isFrameRelated: !1,
                runInUns: !1,
                isRunning: !1,
                instance: null
            }
              , en = ["eventSequence", "timestamp", "platforms", "relativeTime"]
              , tn = function() {
                !function BeforeInstallPromptEventCollector_inherits(e, t) {
                    if ("function" != typeof t && null !== t)
                        throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }),
                    t && BeforeInstallPromptEventCollector_setPrototypeOf(e, t)
                }(BeforeInstallPromptEventCollector, fe);
                var o = BeforeInstallPromptEventCollector_createSuper(BeforeInstallPromptEventCollector);
                function BeforeInstallPromptEventCollector(e, t, n, r) {
                    var i;
                    return function BeforeInstallPromptEventCollector_classCallCheck(e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, BeforeInstallPromptEventCollector),
                    function BeforeInstallPromptEventCollector_defineProperty(e, t, n) {
                        t in e ? Object.defineProperty(e, t, {
                            value: n,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : e[t] = n
                    }(BeforeInstallPromptEventCollector_assertThisInitialized(i = o.call(this)), "_onBeforeInstallPrompt", function(e) {
                        var t = i._utils.StorageUtils.getAndUpdateEventSequenceNumber()
                          , n = i.getEventTimestamp()
                          , r = i.getTimestampFromEvent(e)
                          , e = e.platforms ? e.platforms.join(",") : "";
                        i._dataQueue.addToQueue("before_install_prompt", i._utils.convertToArrayByMap(en, {
                            eventSequence: t,
                            timestamp: n,
                            platforms: e,
                            relativeTime: r
                        }))
                    }),
                    i._messageBus = n,
                    i._eventEmitter = r,
                    i._dataQueue = e,
                    i._utils = t,
                    i
                }
                return function BeforeInstallPromptEventCollector_createClass(e, t, n) {
                    t && BeforeInstallPromptEventCollector_defineProperties(e.prototype, t),
                    n && BeforeInstallPromptEventCollector_defineProperties(e, n)
                }(BeforeInstallPromptEventCollector, [{
                    key: "startFeature",
                    value: function startFeature() {
                        this._eventEmitter.start(window),
                        this._messageBus.subscribe(ce.BeforeInstallPromptEvent, this._onBeforeInstallPrompt)
                    }
                }, {
                    key: "stopFeature",
                    value: function stopFeature() {
                        this._eventEmitter.stop(window),
                        this._messageBus.unsubscribe(ce.BeforeInstallPromptEvent, this._onBeforeInstallPrompt)
                    }
                }], [{
                    key: "getDefaultSettings",
                    value: function getDefaultSettings() {
                        return $t
                    }
                }]),
                BeforeInstallPromptEventCollector
            }();
            function WindowEventCollector_typeof(e) {
                return (WindowEventCollector_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function _typeof(e) {
                    return typeof e
                }
                : function _typeof(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }
                )(e)
            }
            function WindowEventCollector_classCallCheck(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }
            function WindowEventCollector_defineProperties(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            function WindowEventCollector_createClass(e, t, n) {
                return t && WindowEventCollector_defineProperties(e.prototype, t),
                n && WindowEventCollector_defineProperties(e, n),
                e
            }
            function WindowEventCollector_setPrototypeOf(e, t) {
                return (WindowEventCollector_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(e, t) {
                    return e.__proto__ = t,
                    e
                }
                )(e, t)
            }
            function WindowEventCollector_createSuper(n) {
                var r = function WindowEventCollector_isNativeReflectConstruct() {
                    if ("undefined" == typeof Reflect || !Reflect.construct)
                        return !1;
                    if (Reflect.construct.sham)
                        return !1;
                    if ("function" == typeof Proxy)
                        return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})),
                        !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function _createSuperInternal() {
                    var e, t = WindowEventCollector_getPrototypeOf(n);
                    return function WindowEventCollector_possibleConstructorReturn(e, t) {
                        return !t || "object" !== WindowEventCollector_typeof(t) && "function" != typeof t ? WindowEventCollector_assertThisInitialized(e) : t
                    }(this, r ? (e = WindowEventCollector_getPrototypeOf(this).constructor,
                    Reflect.construct(t, arguments, e)) : t.apply(this, arguments))
                }
            }
            function WindowEventCollector_assertThisInitialized(e) {
                if (void 0 === e)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }
            function WindowEventCollector_getPrototypeOf(e) {
                return (WindowEventCollector_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                }
                )(e)
            }
            function WindowEventCollector_defineProperty(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n,
                e
            }
            var nn = {
                configKey: "isWindowEvents",
                isDefault: !0,
                shouldRunPerContext: !1,
                shouldRunPerSession: !1,
                shouldRun: !0,
                isFrameRelated: !1,
                runInUns: !1,
                runInSlave: !1,
                isRunning: !1,
                instance: null
            }
              , rn = {
                DOMContentLoaded: 0,
                scroll: 1,
                resize: 2,
                focus: 3,
                blur: 4,
                tabFocus: 5,
                tabBlur: 6
            }
              , on = ["eventSequence", "timestamp", "eventType", "isTrusted", "screenWidth", "screenHeight", "clientWidth", "clientHeight", "documentWidth", "documentHeight", "scrollTop", "scrollLeft", "windowInnerWidth", "windowInnerHeight", "windowOuterWidth", "windowOuterHeight"]
              , sn = function() {
                !function WindowEventCollector_inherits(e, t) {
                    if ("function" != typeof t && null !== t)
                        throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }),
                    t && WindowEventCollector_setPrototypeOf(e, t)
                }(WindowEventCollector, fe);
                var t = WindowEventCollector_createSuper(WindowEventCollector);
                function WindowEventCollector(e) {
                    var i;
                    return WindowEventCollector_classCallCheck(this, WindowEventCollector),
                    WindowEventCollector_defineProperty(WindowEventCollector_assertThisInitialized(i = t.call(this)), "startFeature", function(e) {
                        try {
                            i._resizeEventEmitter.start(e.Context),
                            i._messageBus.subscribe(ce.ResizeEvent, i._onWindowEvent),
                            i._focusEventEmitter.start(e.Context),
                            i._messageBus.subscribe(ce.FocusEvent, i._onWindowEvent),
                            i._blurEventEmitter.start(e.Context),
                            i._messageBus.subscribe(ce.BlurEvent, i._onWindowEvent),
                            i._domContentLoadedEventEmitter.start(e.getDocument()),
                            i._messageBus.subscribe(ce.DOMContentLoadedEvent, i._onWindowEvent),
                            i._visibilityChangeEventEmitter.start(e.getDocument()),
                            i._messageBus.subscribe(ce.VisibilityChangeEvent, i._onWindowEvent),
                            i._configurationRepository.get(_.isScrollCollect) && (i._scrollEventEmitter.start(e.Context),
                            i._messageBus.subscribe(ce.ScrollEvent, i._onWindowEvent))
                        } catch (e) {
                            C.error("Failed starting the WindowEventCollector. msg: ".concat(e.message), e)
                        }
                    }),
                    WindowEventCollector_defineProperty(WindowEventCollector_assertThisInitialized(i), "stopFeature", function(e) {
                        try {
                            i._resizeEventEmitter.stop(e.Context),
                            i._messageBus.unsubscribe(ce.ResizeEvent, i._onWindowEvent),
                            i._focusEventEmitter.stop(e.Context),
                            i._messageBus.unsubscribe(ce.FocusEvent, i._onWindowEvent),
                            i._blurEventEmitter.stop(e.Context),
                            i._messageBus.unsubscribe(ce.BlurEvent, i._onWindowEvent),
                            i._domContentLoadedEventEmitter.stop(e.getDocument()),
                            i._messageBus.unsubscribe(ce.DOMContentLoadedEvent, i._onWindowEvent),
                            i._visibilityChangeEventEmitter.stop(e.getDocument()),
                            i._messageBus.unsubscribe(ce.VisibilityChangeEvent, i._onWindowEvent),
                            i._configurationRepository.get(_.isScrollCollect) && (i._scrollEventEmitter.stop(e.Context),
                            i._messageBus.unsubscribe(ce.ScrollEvent, i._onWindowEvent))
                        } catch (e) {
                            C.error("Failed stopping the ClipboardEvents feature. msg: ".concat(e.message), e)
                        }
                    }),
                    WindowEventCollector_defineProperty(WindowEventCollector_assertThisInitialized(i), "updateFeatureConfig", function(e) {
                        i._configurationRepository.get(_.isScrollCollect) ? i._configurationRepository.get(_.isScrollCollect) && (i._scrollEventEmitter.start(e.Context),
                        i._messageBus.subscribe(ce.ScrollEvent, i._onWindowEvent)) : (i._scrollEventEmitter.stop(e.Context),
                        i._messageBus.unsubscribe(ce.ScrollEvent, i._onWindowEvent))
                    }),
                    WindowEventCollector_defineProperty(WindowEventCollector_assertThisInitialized(i), "_onWindowEvent", function(e) {
                        try {
                            i._sendToQueue(e)
                        } catch (e) {
                            C.error("An error has occurred while sending window event. ".concat(e.message), e)
                        }
                    }),
                    WindowEventCollector_defineProperty(WindowEventCollector_assertThisInitialized(i), "_sendToQueue", function(e) {
                        if (!e)
                            throw new Error("Invalid window event received.");
                        var t, n = de[void 0];
                        "DOMContentLoaded" === e.type ? t = (new Date).getTime() : (t = i.getEventTimestamp(e),
                        n = de[e.isTrusted]),
                        C.isDebug() && (C.trace("got event " + e.type + " at time " + t),
                        C.trace("adding to queue - screen(width,height): " + screen.width + "," + screen.height + " window(width,height): " + window.innerWidth + "," + window.innerHeight));
                        var r = i._utils.StorageUtils.getAndUpdateEventSequenceNumber()
                          , e = "visibilitychange" !== e.type ? e.type : "hidden" === document.visibilityState ? "tabBlur" : "tabFocus"
                          , e = rn[e];
                        null != e && void 0 !== e || (e = -1),
                        i._dataQueue.addToQueue("window_events", i._utils.convertToArrayByMap(on, {
                            eventType: e,
                            eventSequence: r,
                            timestamp: t,
                            screenWidth: screen.width ? Math.round(screen.width) : -1,
                            screenHeight: screen.height ? Math.round(screen.height) : -1,
                            clientWidth: window.innerWidth ? Math.round(window.innerWidth) : -1,
                            clientHeight: window.innerHeight ? Math.round(window.innerHeight) : -1,
                            documentWidth: document.body && document.body.clientWidth ? Math.round(document.body.clientWidth) : -1,
                            documentHeight: document.body && document.body.clientHeight ? Math.round(document.body.clientHeight) : -1,
                            scrollTop: document.body && document.body.scrollTop ? Math.round(document.body.scrollTop) : 0,
                            scrollLeft: document.body && document.body.scrollLeft ? Math.round(document.body.scrollLeft) : 0,
                            windowInnerWidth: window.innerWidth ? Math.round(window.innerWidth) : -1,
                            windowInnerHeight: window.innerHeight ? Math.round(window.innerHeight) : -1,
                            windowOuterWidth: window.outerWidth ? Math.round(window.outerWidth) : -1,
                            windowOuterHeight: window.outerHeight ? Math.round(window.outerHeight) : -1,
                            isTrusted: n
                        }))
                    }),
                    i._configurationRepository = e.configurationRepository,
                    i._utils = e.utils,
                    i._dataQueue = e.dataQueue,
                    i._messageBus = e.messageBus,
                    i._focusEventEmitter = e.focusEventEmitter,
                    i._blurEventEmitter = e.blurEventEmitter,
                    i._resizeEventEmitter = e.resizeEventEmitter,
                    i._domContentLoadedEventEmitter = e.domContentLoadedEventEmitter,
                    i._visibilityChangeEventEmitter = e.visibilityChangeEventEmitter,
                    i._scrollEventEmitter = e.scrollEventEmitter,
                    i
                }
                return WindowEventCollector_createClass(WindowEventCollector, null, [{
                    key: "getDefaultSettings",
                    value: function getDefaultSettings() {
                        return nn
                    }
                }, {
                    key: "Builder",
                    get: function get() {
                        return function() {
                            function Builder(e, t, n) {
                                WindowEventCollector_classCallCheck(this, Builder),
                                this.configurationRepository = e,
                                this.utils = t,
                                this.dataQueue = n
                            }
                            return WindowEventCollector_createClass(Builder, [{
                                key: "withMessageBus",
                                value: function withMessageBus(e) {
                                    return this.messageBus = e,
                                    this
                                }
                            }, {
                                key: "withFocusEventEmitter",
                                value: function withFocusEventEmitter(e) {
                                    return this.focusEventEmitter = e,
                                    this
                                }
                            }, {
                                key: "withBlurEventEmitter",
                                value: function withBlurEventEmitter(e) {
                                    return this.blurEventEmitter = e,
                                    this
                                }
                            }, {
                                key: "withResizeEventEmitter",
                                value: function withResizeEventEmitter(e) {
                                    return this.resizeEventEmitter = e,
                                    this
                                }
                            }, {
                                key: "withDOMContentLoadedEventEmitter",
                                value: function withDOMContentLoadedEventEmitter(e) {
                                    return this.domContentLoadedEventEmitter = e,
                                    this
                                }
                            }, {
                                key: "withVisibilityChangeEventEmitter",
                                value: function withVisibilityChangeEventEmitter(e) {
                                    return this.visibilityChangeEventEmitter = e,
                                    this
                                }
                            }, {
                                key: "withScrollEventEmitter",
                                value: function withScrollEventEmitter(e) {
                                    return this.scrollEventEmitter = e,
                                    this
                                }
                            }, {
                                key: "build",
                                value: function build() {
                                    return new WindowEventCollector(this)
                                }
                            }]),
                            Builder
                        }()
                    }
                }]),
                WindowEventCollector
            }();
            function AccelerometerEventCollector_typeof(e) {
                return (AccelerometerEventCollector_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function _typeof(e) {
                    return typeof e
                }
                : function _typeof(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }
                )(e)
            }
            function AccelerometerEventCollector_defineProperties(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            function AccelerometerEventCollector_setPrototypeOf(e, t) {
                return (AccelerometerEventCollector_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(e, t) {
                    return e.__proto__ = t,
                    e
                }
                )(e, t)
            }
            function AccelerometerEventCollector_createSuper(n) {
                var r = function AccelerometerEventCollector_isNativeReflectConstruct() {
                    if ("undefined" == typeof Reflect || !Reflect.construct)
                        return !1;
                    if (Reflect.construct.sham)
                        return !1;
                    if ("function" == typeof Proxy)
                        return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})),
                        !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function _createSuperInternal() {
                    var e, t = AccelerometerEventCollector_getPrototypeOf(n);
                    return function AccelerometerEventCollector_possibleConstructorReturn(e, t) {
                        return !t || "object" !== AccelerometerEventCollector_typeof(t) && "function" != typeof t ? AccelerometerEventCollector_assertThisInitialized(e) : t
                    }(this, r ? (e = AccelerometerEventCollector_getPrototypeOf(this).constructor,
                    Reflect.construct(t, arguments, e)) : t.apply(this, arguments))
                }
            }
            function AccelerometerEventCollector_assertThisInitialized(e) {
                if (void 0 === e)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }
            function AccelerometerEventCollector_getPrototypeOf(e) {
                return (AccelerometerEventCollector_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                }
                )(e)
            }
            var an = {
                configKey: "isAccelerometerEvents",
                isDefault: !1,
                shouldRunPerContext: !1,
                shouldRunPerSession: !1,
                shouldRun: !0,
                isFrameRelated: !1,
                runInSlave: !1,
                runInUns: !1,
                isRunning: !1,
                instance: null
            }
              , un = function() {
                !function AccelerometerEventCollector_inherits(e, t) {
                    if ("function" != typeof t && null !== t)
                        throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }),
                    t && AccelerometerEventCollector_setPrototypeOf(e, t)
                }(AccelerometerEventCollector, fe);
                var i = AccelerometerEventCollector_createSuper(AccelerometerEventCollector);
                function AccelerometerEventCollector(e, t, n) {
                    var r;
                    return function AccelerometerEventCollector_classCallCheck(e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, AccelerometerEventCollector),
                    (r = i.call(this))._configurationRepository = e,
                    r._utils = t,
                    r._dataQueue = n,
                    r._storageUtils = r._utils.StorageUtils,
                    r._samplePeriod = r._configurationRepository.get(_.accelerometerEventsSamplePeriod) || 0,
                    r._samplePeriodGyro = r._configurationRepository.get(_.gyroEventsSamplePeriod) || 0,
                    r._lastX = 0,
                    r._lastY = 0,
                    r._lastZ = 0,
                    r._lastTime = 0,
                    r._lastAlpha = 0,
                    r._lastBeta = 0,
                    r._lastGamma = 0,
                    r._lastTimeGyro = 0,
                    r._onAccelerometerventFunc = r._onAccelerometerEvent.bind(AccelerometerEventCollector_assertThisInitialized(r)),
                    r
                }
                return function AccelerometerEventCollector_createClass(e, t, n) {
                    t && AccelerometerEventCollector_defineProperties(e.prototype, t),
                    n && AccelerometerEventCollector_defineProperties(e, n)
                }(AccelerometerEventCollector, [{
                    key: "_onAccelerometerEvent",
                    value: function _onAccelerometerEvent(e) {
                        var t, n, r, i, o = this._utils.dateNow();
                        return e && e.accelerationIncludingGravity && o - this._lastTime > this._samplePeriod && (r = e.accelerationIncludingGravity.x,
                        i = e.accelerationIncludingGravity.y,
                        t = e.accelerationIncludingGravity.z,
                        this._utils.isUndefinedNull(r) && this._utils.isUndefinedNull(i) && this._utils.isUndefinedNull(t) || (r = this._utils.isUndefinedNull(r) ? -1 : this._utils.cutDecimalPointDigits(r, 4),
                        i = this._utils.isUndefinedNull(i) ? -1 : this._utils.cutDecimalPointDigits(i, 4),
                        t = this._utils.isUndefinedNull(t) ? -1 : this._utils.cutDecimalPointDigits(t, 4),
                        r === this._lastX && i === this._lastY && t === this._lastZ || (n = this._storageUtils.getAndUpdateEventSequenceNumber(),
                        this._lastTime = o,
                        this._lastX = r,
                        this._lastY = i,
                        this._lastZ = t,
                        this._dataQueue.addToQueue("accelerometer_events", [null, n, o, r, i, t]),
                        C.isDebug() && C.debug("AccelerometerEvents:_onAccelerometerEvent, sending data: timestamp:".concat(o, " x,y,z:").concat(r, ",").concat(i, ",").concat(t, ", prevTime:").concat(this._lastTime))))),
                        e && e.rotationRate && o - this._lastTimeGyro > this._samplePeriodGyro && (n = e.rotationRate.alpha,
                        r = e.rotationRate.beta,
                        i = e.rotationRate.gamma,
                        this._utils.isUndefinedNull(n) && this._utils.isUndefinedNull(r) && this._utils.isUndefinedNull(i) || (t = e.absolute || !1,
                        n = this._utils.isUndefinedNull(n) ? 0 : this._utils.cutDecimalPointDigits(n, 4),
                        r = this._utils.isUndefinedNull(r) ? 0 : this._utils.cutDecimalPointDigits(r, 4),
                        i = this._utils.isUndefinedNull(i) ? 0 : this._utils.cutDecimalPointDigits(i, 4),
                        n === this._lastAlpha && r === this._lastBeta && i === this._lastGamma || (this._lastTimeGyro = o,
                        this._lastAlpha = n,
                        this._lastBeta = r,
                        this._lastGamma = i,
                        e = this._utils.StorageUtils.getAndUpdateEventSequenceNumber(),
                        this._dataQueue.addToQueue("gyro_events", [null, e, o, t, n, r, i]),
                        C.isDebug() && C.debug("GyroEvents:_onGyroEvent, sending data: timestamp:".concat(o, " alpha,betta,gamma:").concat(n, ",").concat(r, ",").concat(i, ", prevTime: ").concat(this._lastTimeGyro))))),
                        !0
                    }
                }, {
                    key: "startFeature",
                    value: function startFeature() {
                        window.DeviceMotionEvent && this._utils.addEventListener(window, "devicemotion", this._onAccelerometerventFunc)
                    }
                }, {
                    key: "stopFeature",
                    value: function stopFeature() {
                        window.DeviceMotionEvent && this._utils.removeEventListener(window, "devicemotion", this._onAccelerometerventFunc)
                    }
                }, {
                    key: "updateFeatureConfig",
                    value: function updateFeatureConfig() {
                        this._samplePeriod = void 0 !== this._configurationRepository.get(_.accelerometerEventsSamplePeriod) ? this._configurationRepository.get(_.accelerometerEventsSamplePeriod) : this._samplePeriod,
                        this._samplePeriodGyro = void 0 !== this._configurationRepository.get(_.gyroEventsSamplePeriod) ? this._configurationRepository.get(_.gyroEventsSamplePeriod) : this._samplePeriodGyro
                    }
                }], [{
                    key: "getDefaultSettings",
                    value: function getDefaultSettings() {
                        return an
                    }
                }]),
                AccelerometerEventCollector
            }();
            function PinchZoomEventCollector_typeof(e) {
                return (PinchZoomEventCollector_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function _typeof(e) {
                    return typeof e
                }
                : function _typeof(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }
                )(e)
            }
            function PinchZoomEventCollector_defineProperties(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            function PinchZoomEventCollector_setPrototypeOf(e, t) {
                return (PinchZoomEventCollector_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(e, t) {
                    return e.__proto__ = t,
                    e
                }
                )(e, t)
            }
            function PinchZoomEventCollector_createSuper(n) {
                var r = function PinchZoomEventCollector_isNativeReflectConstruct() {
                    if ("undefined" == typeof Reflect || !Reflect.construct)
                        return !1;
                    if (Reflect.construct.sham)
                        return !1;
                    if ("function" == typeof Proxy)
                        return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})),
                        !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function _createSuperInternal() {
                    var e, t = PinchZoomEventCollector_getPrototypeOf(n);
                    return function PinchZoomEventCollector_possibleConstructorReturn(e, t) {
                        return !t || "object" !== PinchZoomEventCollector_typeof(t) && "function" != typeof t ? PinchZoomEventCollector_assertThisInitialized(e) : t
                    }(this, r ? (e = PinchZoomEventCollector_getPrototypeOf(this).constructor,
                    Reflect.construct(t, arguments, e)) : t.apply(this, arguments))
                }
            }
            function PinchZoomEventCollector_assertThisInitialized(e) {
                if (void 0 === e)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }
            function PinchZoomEventCollector_getPrototypeOf(e) {
                return (PinchZoomEventCollector_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                }
                )(e)
            }
            function fc(e, t, r) {
                function getDistance(e, t) {
                    var n = t[r[0]] - e[r[0]]
                      , e = t[r[1]] - e[r[1]];
                    return Math.sqrt(n * n + e * e)
                }
                return {
                    getScale: function _getScale() {
                        return getDistance(e[0], e[1]) / getDistance(t[0], t[1])
                    },
                    getFocusPoint: function getFocusPoint() {
                        return function _getFocusPoint(e, t) {
                            return {
                                x: (e[r[0]] + t[r[0]]) / 2,
                                y: (e[r[1]] + t[r[1]]) / 2
                            }
                        }(e[1], e[0])
                    }
                }
            }
            var cn = ["clientX", "clientY"]
              , ln = ["screenX", "screenY"]
              , fn = {
                pointerdown: 0,
                pointermove: 1,
                pointerup: 2
            }
              , dn = {
                configKey: "isPinchZoomEvents",
                isDefault: !1,
                shouldRunPerContext: !1,
                shouldRunPerSession: !1,
                shouldRun: !0,
                isFrameRelated: !0,
                runInSlave: !0,
                runInUns: !1,
                isRunning: !1,
                instance: null
            }
              , hn = ["eventSequence", "timestamp", "focusX", "focusY", "scaleFactor"]
              , pn = function() {
                !function PinchZoomEventCollector_inherits(e, t) {
                    if ("function" != typeof t && null !== t)
                        throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }),
                    t && PinchZoomEventCollector_setPrototypeOf(e, t)
                }(PinchZoomEventCollector, fe);
                var o = PinchZoomEventCollector_createSuper(PinchZoomEventCollector);
                function PinchZoomEventCollector(e, t, n, r) {
                    var i;
                    return function PinchZoomEventCollector_classCallCheck(e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, PinchZoomEventCollector),
                    (i = o.call(this))._utils = e,
                    i._dataQ = n,
                    i._elements = t,
                    i._msgBus = r,
                    i._evGesturesCache = [],
                    i._prevEventDiff = -1,
                    i._prevEvGestureSet = [],
                    i._prevTouchEvents = [],
                    i._onAllBrowsersPinchZoomEventBinded = i._onAllBrowsersPinchZoomEvent.bind(PinchZoomEventCollector_assertThisInitialized(i)),
                    i
                }
                return function PinchZoomEventCollector_createClass(e, t, n) {
                    t && PinchZoomEventCollector_defineProperties(e.prototype, t),
                    n && PinchZoomEventCollector_defineProperties(e, n)
                }(PinchZoomEventCollector, [{
                    key: "startFeature",
                    value: function startFeature(e) {
                        this._bind(e)
                    }
                }, {
                    key: "stopFeature",
                    value: function stopFeature(e) {
                        this._unbind(e)
                    }
                }, {
                    key: "_addToCommunicationQueue",
                    value: function _addToCommunicationQueue(e, t, n, r) {
                        e !== fn.pointerdown && e !== fn.pointerup || this._msgBus.publish("pinchEvent", {
                            action: e
                        });
                        e = this.getEventTimestamp(r),
                        r = this._utils.StorageUtils.getAndUpdateEventSequenceNumber();
                        this._dataQ.addToQueue("pinch_events", this._utils.convertToArrayByMap(hn, {
                            eventSequence: r,
                            timestamp: e,
                            focusX: n.x,
                            focusY: n.y,
                            scaleFactor: t
                        }))
                    }
                }, {
                    key: "_bind",
                    value: function _bind(e) {
                        var t, n = e.getDocument();
                        if (window.PointerEvent ? t = ["pointerdown", "pointermove", "pointerup"] : window.TouchEvent && (t = ["touchstart", "touchend", "touchcancel", "touchmove"]),
                        this._listeningToEvents = t,
                        this._listeningToEvents)
                            for (var r = 0; r < this._listeningToEvents.length; r++)
                                this._utils.addEventListener(n, this._listeningToEvents[r], this._onAllBrowsersPinchZoomEventBinded)
                    }
                }, {
                    key: "_unbind",
                    value: function _unbind(e) {
                        var t = e.getDocument();
                        if (this._listeningToEvents)
                            for (var n = 0; n < this._listeningToEvents.length; n++)
                                this._utils.removeEventListener(t, this._listeningToEvents[n], this._onAllBrowsersPinchZoomEventBinded);
                        this._evGesturesCache = [],
                        this._prevEventDiff = -1
                    }
                }, {
                    key: "_onAllBrowsersPinchZoomEvent",
                    value: function _onAllBrowsersPinchZoomEvent(e) {
                        switch (e.type) {
                        case "pointerdown":
                            this._onPointerDownEvent(e);
                            break;
                        case "pointermove":
                            this._onPointerMoveEvent(e);
                            break;
                        case "pointerup":
                            this._onPointerUpEvent(e);
                            break;
                        case "touchstart":
                            this._onTouchStartEvent(e);
                            break;
                        case "touchend":
                            this._onTouchEndEvent();
                            break;
                        case "touchmove":
                            this._onTouchMoveEvent(e)
                        }
                        return !0
                    }
                }, {
                    key: "_onPointerDownEvent",
                    value: function _onPointerDownEvent(e) {
                        this._evGesturesCache.push(e)
                    }
                }, {
                    key: "_onPointerMoveEvent",
                    value: function _onPointerMoveEvent(e) {
                        for (var t, n, r, i = 0; i < this._evGesturesCache.length; i++)
                            if (e.pointerId === this._evGesturesCache[i].pointerId) {
                                this._evGesturesCache[i] = e;
                                break
                            }
                        2 === this._evGesturesCache.length && this._evGesturesCache[0].pointerId !== this._evGesturesCache[1].pointerId ? (t = Math.abs(this._evGesturesCache[0].clientX - this._evGesturesCache[1].clientX),
                        0 < this._prevEventDiff && (this._prevEventDiff,
                        this._prevEventDiff,
                        2 === this._prevEvGestureSet.length && (r = (n = fc(this._evGesturesCache, this._prevEvGestureSet, cn)).getScale(),
                        this._addToCommunicationQueue(fn[e.type], r, n.getFocusPoint(), e))),
                        this._prevEventDiff = t,
                        this._prevEvGestureSet = this._evGesturesCache.slice(0)) : 2 < this._evGesturesCache.length && (this._evGesturesCache = [],
                        this._prevEvGestureSet = [])
                    }
                }, {
                    key: "_onPointerUpEvent",
                    value: function _onPointerUpEvent(e) {
                        for (var t = 0; t < this._evGesturesCache.length; t++)
                            if (this._evGesturesCache[t].pointerId === e.pointerId) {
                                this._evGesturesCache.splice(t, 1);
                                break
                            }
                        this._evGesturesCache.length < 2 && (this._prevEventDiff = -1,
                        this._prevEvGestureSet = [])
                    }
                }, {
                    key: "_onTouchStartEvent",
                    value: function _onTouchStartEvent(e) {
                        this._prevTouchEvents[0] = e.touches.item(0),
                        this._prevTouchEvents[1] = e.touches.item(1)
                    }
                }, {
                    key: "_onTouchEndEvent",
                    value: function _onTouchEndEvent() {
                        this._prevTouchEvents = []
                    }
                }, {
                    key: "_onTouchMoveEvent",
                    value: function _onTouchMoveEvent(e) {
                        var t, n;
                        2 === e.touches.length && (2 === this._prevTouchEvents.length && (n = [e.touches.item(0), e.touches.item(1)],
                        n = (t = fc(n, this._prevTouchEvents.splice(0), ln)).getScale(),
                        this._addToCommunicationQueue(fn[e.type], n, t.getFocusPoint(), e)),
                        this._prevTouchEvents[0] = e.touches.item(0),
                        this._prevTouchEvents[1] = e.touches.item(1))
                    }
                }], [{
                    key: "getDefaultSettings",
                    value: function getDefaultSettings() {
                        return dn
                    }
                }]),
                PinchZoomEventCollector
            }();
            function ScriptEventCollector_typeof(e) {
                return (ScriptEventCollector_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function _typeof(e) {
                    return typeof e
                }
                : function _typeof(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }
                )(e)
            }
            function ScriptEventCollector_defineProperties(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            function ScriptEventCollector_setPrototypeOf(e, t) {
                return (ScriptEventCollector_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(e, t) {
                    return e.__proto__ = t,
                    e
                }
                )(e, t)
            }
            function ScriptEventCollector_createSuper(n) {
                var r = function ScriptEventCollector_isNativeReflectConstruct() {
                    if ("undefined" == typeof Reflect || !Reflect.construct)
                        return !1;
                    if (Reflect.construct.sham)
                        return !1;
                    if ("function" == typeof Proxy)
                        return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})),
                        !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function _createSuperInternal() {
                    var e, t = ScriptEventCollector_getPrototypeOf(n);
                    return function ScriptEventCollector_possibleConstructorReturn(e, t) {
                        return !t || "object" !== ScriptEventCollector_typeof(t) && "function" != typeof t ? ScriptEventCollector_assertThisInitialized(e) : t
                    }(this, r ? (e = ScriptEventCollector_getPrototypeOf(this).constructor,
                    Reflect.construct(t, arguments, e)) : t.apply(this, arguments))
                }
            }
            function ScriptEventCollector_assertThisInitialized(e) {
                if (void 0 === e)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }
            function ScriptEventCollector_getPrototypeOf(e) {
                return (ScriptEventCollector_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                }
                )(e)
            }
            var vn = {
                load: 0
            }
              , _n = {
                configKey: "isScriptExecuteEve",
                isDefault: !1,
                shouldRunPerContext: !1,
                shouldRunPerSession: !1,
                shouldRun: !0,
                isFrameRelated: !1,
                runInSlave: !1,
                runInUns: !1,
                isRunning: !1,
                instance: null
            }
              , mn = ["eventSequence", "timestamp", "eventType", "scriptId", "namespaceURI", "outerHTML", "scriptSource", "scriptType"]
              , gn = function() {
                !function ScriptEventCollector_inherits(e, t) {
                    if ("function" != typeof t && null !== t)
                        throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }),
                    t && ScriptEventCollector_setPrototypeOf(e, t)
                }(ScriptEventCollector, fe);
                var r = ScriptEventCollector_createSuper(ScriptEventCollector);
                function ScriptEventCollector(e, t) {
                    var n;
                    return function ScriptEventCollector_classCallCheck(e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, ScriptEventCollector),
                    (n = r.call(this))._onScriptExecuteEventFunc = n._onScriptExecuteEvent.bind(ScriptEventCollector_assertThisInitialized(n)),
                    n._dataQueue = t,
                    n._utils = e,
                    n
                }
                return function ScriptEventCollector_createClass(e, t, n) {
                    t && ScriptEventCollector_defineProperties(e.prototype, t),
                    n && ScriptEventCollector_defineProperties(e, n)
                }(ScriptEventCollector, [{
                    key: "_onScriptExecuteEvent",
                    value: function _onScriptExecuteEvent(e) {
                        if (e && e.target && ("load" !== e.type || "script" === e.target.nodeName.toLowerCase()))
                            try {
                                var t = this.getEventTimestamp(e)
                                  , n = this._utils.StorageUtils.getAndUpdateEventSequenceNumber()
                                  , r = vn[e.type];
                                this._utils.isUndefinedNull(r) && (r = -1),
                                C.isDebug() && C.trace("got event " + e.type + ", " + r + ", scriptSrc: " + e.target.src + " at time " + t),
                                this._dataQueue.addToQueue("script_events", this._utils.convertToArrayByMap(mn, {
                                    eventSequence: n,
                                    timestamp: t,
                                    eventType: r,
                                    scriptId: e.target.id || "",
                                    namespaceURI: e.target.namespaceURI || "",
                                    outerHTML: e.target.outerHTML || "",
                                    scriptSource: e.target.src || "",
                                    scriptType: e.target.type || ""
                                }))
                            } catch (e) {
                                C.error("error on getScriptExecuteEvent ".concat(e.toString()))
                            }
                    }
                }, {
                    key: "startFeature",
                    value: function startFeature() {
                        this._utils.addEventListener(document, "load", this._onScriptExecuteEventFunc, !0)
                    }
                }, {
                    key: "stopFeature",
                    value: function stopFeature() {
                        this._utils.removeEventListener(document, "load", this._onScriptExecuteEventFunc, !0)
                    }
                }], [{
                    key: "getDefaultSettings",
                    value: function getDefaultSettings() {
                        return _n
                    }
                }]),
                ScriptEventCollector
            }();
            function NetInfoEventCollector_typeof(e) {
                return (NetInfoEventCollector_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function _typeof(e) {
                    return typeof e
                }
                : function _typeof(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }
                )(e)
            }
            function NetInfoEventCollector_defineProperties(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            function NetInfoEventCollector_setPrototypeOf(e, t) {
                return (NetInfoEventCollector_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(e, t) {
                    return e.__proto__ = t,
                    e
                }
                )(e, t)
            }
            function NetInfoEventCollector_createSuper(n) {
                var r = function NetInfoEventCollector_isNativeReflectConstruct() {
                    if ("undefined" == typeof Reflect || !Reflect.construct)
                        return !1;
                    if (Reflect.construct.sham)
                        return !1;
                    if ("function" == typeof Proxy)
                        return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})),
                        !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function _createSuperInternal() {
                    var e, t = NetInfoEventCollector_getPrototypeOf(n);
                    return function NetInfoEventCollector_possibleConstructorReturn(e, t) {
                        return !t || "object" !== NetInfoEventCollector_typeof(t) && "function" != typeof t ? function NetInfoEventCollector_assertThisInitialized(e) {
                            if (void 0 !== e)
                                return e;
                            throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
                        }(e) : t
                    }(this, r ? (e = NetInfoEventCollector_getPrototypeOf(this).constructor,
                    Reflect.construct(t, arguments, e)) : t.apply(this, arguments))
                }
            }
            function NetInfoEventCollector_getPrototypeOf(e) {
                return (NetInfoEventCollector_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                }
                )(e)
            }
            var yn = {
                configKey: "isNetInfoEvents",
                isDefault: !1,
                shouldRunPerContext: !1,
                shouldRunPerSession: !1,
                shouldRun: !0,
                isFrameRelated: !1,
                runInSlave: !1,
                runInUns: !1,
                isRunning: !1,
                instance: null
            }
              , bn = ["eventSequence", "timestamp", "connectionType", "effectiveType", "downlinkMax", "downlink", "rtt", "isSaveData"]
              , En = function() {
                !function NetInfoEventCollector_inherits(e, t) {
                    if ("function" != typeof t && null !== t)
                        throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }),
                    t && NetInfoEventCollector_setPrototypeOf(e, t)
                }(NetInfoEventCollector, fe);
                var r = NetInfoEventCollector_createSuper(NetInfoEventCollector);
                function NetInfoEventCollector(e, t) {
                    var n;
                    return function NetInfoEventCollector_classCallCheck(e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, NetInfoEventCollector),
                    (n = r.call(this))._dataQueue = t,
                    n._utils = e,
                    n._connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection,
                    n
                }
                return function NetInfoEventCollector_createClass(e, t, n) {
                    t && NetInfoEventCollector_defineProperties(e.prototype, t),
                    n && NetInfoEventCollector_defineProperties(e, n)
                }(NetInfoEventCollector, [{
                    key: "onChangeNetworkInfo",
                    value: function onChangeNetworkInfo() {
                        C.debug("NetInfoEvents:onChangeNetworkInfo");
                        var e = this._utils.isUndefinedNull(this._connection.saveData) ? "" : this._connection.saveData.toString()
                          , t = this.getEventTimestamp()
                          , n = this._utils.StorageUtils.getAndUpdateEventSequenceNumber();
                        this._dataQueue.addToQueue("net_info_events", this._utils.convertToArrayByMap(bn, {
                            eventSequence: n,
                            timestamp: t,
                            connectionType: this._connection.type || "",
                            effectiveType: this._connection.effectiveType || "",
                            downlinkMax: this._connection.downlinkMax ? this._connection.downlinkMax.toString() : "",
                            downlink: this._connection.downlink ? this._connection.downlink.toString() : "",
                            rtt: this._connection.rtt ? this._connection.rtt.toString() : "",
                            isSaveData: e
                        }))
                    }
                }, {
                    key: "startFeature",
                    value: function startFeature() {
                        this._connection && (this._connection.addEventListener("change", this.onChangeNetworkInfo.bind(this), !0),
                        this.onChangeNetworkInfo())
                    }
                }, {
                    key: "stopFeature",
                    value: function stopFeature() {
                        this._connection && this._connection.removeEventListener("change", this.onChangeNetworkInfo.bind(this))
                    }
                }], [{
                    key: "getDefaultSettings",
                    value: function getDefaultSettings() {
                        return yn
                    }
                }]),
                NetInfoEventCollector
            }();
            function DeviceOrientationCollector_typeof(e) {
                return (DeviceOrientationCollector_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function _typeof(e) {
                    return typeof e
                }
                : function _typeof(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }
                )(e)
            }
            function DeviceOrientationCollector_defineProperties(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            function DeviceOrientationCollector_setPrototypeOf(e, t) {
                return (DeviceOrientationCollector_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(e, t) {
                    return e.__proto__ = t,
                    e
                }
                )(e, t)
            }
            function DeviceOrientationCollector_createSuper(n) {
                var r = function DeviceOrientationCollector_isNativeReflectConstruct() {
                    if ("undefined" == typeof Reflect || !Reflect.construct)
                        return !1;
                    if (Reflect.construct.sham)
                        return !1;
                    if ("function" == typeof Proxy)
                        return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})),
                        !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function _createSuperInternal() {
                    var e, t = DeviceOrientationCollector_getPrototypeOf(n);
                    return function DeviceOrientationCollector_possibleConstructorReturn(e, t) {
                        return !t || "object" !== DeviceOrientationCollector_typeof(t) && "function" != typeof t ? DeviceOrientationCollector_assertThisInitialized(e) : t
                    }(this, r ? (e = DeviceOrientationCollector_getPrototypeOf(this).constructor,
                    Reflect.construct(t, arguments, e)) : t.apply(this, arguments))
                }
            }
            function DeviceOrientationCollector_assertThisInitialized(e) {
                if (void 0 === e)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }
            function DeviceOrientationCollector_getPrototypeOf(e) {
                return (DeviceOrientationCollector_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                }
                )(e)
            }
            var Cn = {
                configKey: "isDeviceOrientationEvents",
                isDefault: !1,
                shouldRunPerContext: !1,
                shouldRunPerSession: !1,
                shouldRun: !0,
                isFrameRelated: !1,
                runInSlave: !1,
                runInUns: !1,
                isRunning: !1,
                instance: null
            }
              , Sn = {
                undefined: 0,
                "portrait-primary": 1,
                "landscape-primary": 2,
                "portrait-secondary": 3,
                "landscape-secondary": 4
            }
              , wn = ["eventSequence", "timestamp", "orientation"]
              , kn = function() {
                !function DeviceOrientationCollector_inherits(e, t) {
                    if ("function" != typeof t && null !== t)
                        throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }),
                    t && DeviceOrientationCollector_setPrototypeOf(e, t)
                }(DeviceOrientationCollector, fe);
                var r = DeviceOrientationCollector_createSuper(DeviceOrientationCollector);
                function DeviceOrientationCollector(e, t) {
                    var n;
                    return function DeviceOrientationCollector_classCallCheck(e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, DeviceOrientationCollector),
                    (n = r.call(this))._dataQ = t,
                    n._utils = e,
                    n._onDeviceOrientationEventFunc = n._onDeviceOrientationEvent.bind(DeviceOrientationCollector_assertThisInitialized(n)),
                    screen.mozOrientation && screen.addEventListener ? (n._eventTarget = screen,
                    n._eventName = "mozorientationchange") : screen.msOrientation && screen.addEventListener ? (n._eventTarget = screen,
                    n._eventName = "msorientationchange") : (n._eventTarget = window,
                    n._eventName = "orientationchange"),
                    n
                }
                return function DeviceOrientationCollector_createClass(e, t, n) {
                    t && DeviceOrientationCollector_defineProperties(e.prototype, t),
                    n && DeviceOrientationCollector_defineProperties(e, n)
                }(DeviceOrientationCollector, [{
                    key: "startFeature",
                    value: function startFeature() {
                        this._utils.addEventListener(this._eventTarget, this._eventName, this._onDeviceOrientationEventFunc),
                        this._handleDeviceOrientationEvent(screen)
                    }
                }, {
                    key: "stopFeature",
                    value: function stopFeature() {
                        this._utils.removeEventListener(this._eventTarget, this._eventName, this._onDeviceOrientationEventFunc)
                    }
                }, {
                    key: "_onDeviceOrientationEvent",
                    value: function _onDeviceOrientationEvent(e) {
                        e = e && e.target ? e.target.screen || e.target : screen;
                        this._handleDeviceOrientationEvent(e)
                    }
                }, {
                    key: "_handleDeviceOrientationEvent",
                    value: function _handleDeviceOrientationEvent(e) {
                        var t, n, r = e.mozOrientation || e.msOrientation || e.orientation;
                        void 0 !== r ? (t = r.type || r,
                        void 0 !== (n = Sn[t]) ? this._lastDeviceOrientationType !== n && (e = this.getEventTimestamp(),
                        r = this._utils.StorageUtils.getAndUpdateEventSequenceNumber(),
                        this._lastDeviceOrientationType = n,
                        C.trace("onDeviceOrientationEvent: Orientation changed to ".concat(n, " at time ").concat(e)),
                        this._dataQ.addToQueue("screen_orientation", this._utils.convertToArrayByMap(wn, {
                            eventSequence: r,
                            timestamp: e,
                            orientation: n
                        }))) : C.error("onDeviceOrientationEvent: Unknown orientation ".concat(t, " value."))) : C.debug("onDeviceOrientationEvent: Unable to find orientation data.")
                    }
                }], [{
                    key: "getDefaultSettings",
                    value: function getDefaultSettings() {
                        return Cn
                    }
                }]),
                DeviceOrientationCollector
            }();
            function TapEventCollector_typeof(e) {
                return (TapEventCollector_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function _typeof(e) {
                    return typeof e
                }
                : function _typeof(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }
                )(e)
            }
            function TapEventCollector_defineProperties(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            function TapEventCollector_setPrototypeOf(e, t) {
                return (TapEventCollector_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(e, t) {
                    return e.__proto__ = t,
                    e
                }
                )(e, t)
            }
            function TapEventCollector_createSuper(n) {
                var r = function TapEventCollector_isNativeReflectConstruct() {
                    if ("undefined" == typeof Reflect || !Reflect.construct)
                        return !1;
                    if (Reflect.construct.sham)
                        return !1;
                    if ("function" == typeof Proxy)
                        return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})),
                        !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function _createSuperInternal() {
                    var e, t = TapEventCollector_getPrototypeOf(n);
                    return function TapEventCollector_possibleConstructorReturn(e, t) {
                        return !t || "object" !== TapEventCollector_typeof(t) && "function" != typeof t ? TapEventCollector_assertThisInitialized(e) : t
                    }(this, r ? (e = TapEventCollector_getPrototypeOf(this).constructor,
                    Reflect.construct(t, arguments, e)) : t.apply(this, arguments))
                }
            }
            function TapEventCollector_assertThisInitialized(e) {
                if (void 0 === e)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }
            function TapEventCollector_getPrototypeOf(e) {
                return (TapEventCollector_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                }
                )(e)
            }
            var Pn = {
                configKey: "isTapEvents",
                isDefault: !1,
                shouldRunPerContext: !1,
                shouldRunPerSession: !1,
                shouldRun: !0,
                isFrameRelated: !0,
                runInSlave: !0,
                runInUns: !1,
                isRunning: !1,
                instance: null
            }
              , On = 20
              , Rn = 500
              , Fn = ["eventSequence", "timestamp", "screenX", "screenY", "pageX", "pageY", "clientX", "clientY", "isTrusted", "elementHash", "touchIndex", "touchSizeMajor", "touchSizeMinor"]
              , Dn = ["eventSequence", "timestamp", "screenX", "screenY", "pageX", "pageY", "clientX", "clientY", "isTrusted", "elementHash", "touchIndex", "touchSizeMajor", "touchSizeMinor"]
              , Mn = function() {
                !function TapEventCollector_inherits(e, t) {
                    if ("function" != typeof t && null !== t)
                        throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }),
                    t && TapEventCollector_setPrototypeOf(e, t)
                }(TapEventCollector, fe);
                var o = TapEventCollector_createSuper(TapEventCollector);
                function TapEventCollector(e, t, n, r) {
                    var i;
                    return function TapEventCollector_classCallCheck(e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, TapEventCollector),
                    (i = o.call(this))._configurationRepository = e,
                    i._utils = t,
                    i._dataQ = r,
                    i._elements = n,
                    i._activeTouchActions = {},
                    i._tapMaxSlop = i._configurationRepository.get("tapEventsTapMaxSlop") || On,
                    i._longPressTimeout = i._configurationRepository.get("tapEventsLongPressTimeout") || Rn,
                    i._handleStartEventBind = i._handleStartEvent.bind(TapEventCollector_assertThisInitialized(i)),
                    i._handleMoveEventBind = i._handleMoveEvent.bind(TapEventCollector_assertThisInitialized(i)),
                    i._handleEndEventBind = i._handleEndEvent.bind(TapEventCollector_assertThisInitialized(i)),
                    i._handleCancelEventBind = i._handleCancelEvent.bind(TapEventCollector_assertThisInitialized(i)),
                    i._eventDefinitions = TapEventCollector.getSupportedTouchEvents(),
                    i
                }
                return function TapEventCollector_createClass(e, t, n) {
                    t && TapEventCollector_defineProperties(e.prototype, t),
                    n && TapEventCollector_defineProperties(e, n)
                }(TapEventCollector, [{
                    key: "startFeature",
                    value: function startFeature(e) {
                        this._bind(e)
                    }
                }, {
                    key: "stopFeature",
                    value: function stopFeature(e) {
                        this._unbind(e)
                    }
                }, {
                    key: "updateFeatureConfig",
                    value: function updateFeatureConfig() {
                        this._tapMaxSlop = void 0 !== this._configurationRepository.get("tapEventsTapMaxSlop") ? this._configurationRepository.get("tapEventsTapMaxSlop") : this._tapMaxSlop,
                        this._longPressTimeout = void 0 !== this._configurationRepository.get("tapEventsLongPressTimeout") ? this._configurationRepository.get("tapEventsLongPressTimeout") : this._longPressTimeout
                    }
                }, {
                    key: "_bind",
                    value: function _bind(e) {
                        this._eventDefinitions ? (e = e.getDocument(),
                        this._utils.addEventListener(e, this._eventDefinitions.startEvent, this._handleStartEventBind),
                        this._utils.addEventListener(e, this._eventDefinitions.moveEvent, this._handleMoveEventBind),
                        this._utils.addEventListener(e, this._eventDefinitions.endEvent, this._handleEndEventBind),
                        this._utils.addEventListener(e, this._eventDefinitions.cancelEvent, this._handleCancelEventBind)) : C.debug("TapEvents:_bind - No event definitions. Might be a legacy browser. Aborting bind operation.")
                    }
                }, {
                    key: "_unbind",
                    value: function _unbind(e) {
                        this._eventDefinitions && (e = e.getDocument(),
                        this._utils.removeEventListener(e, this._eventDefinitions.startEvent, this._handleStartEventBind),
                        this._utils.removeEventListener(e, this._eventDefinitions.moveEvent, this._handleMoveEventBind),
                        this._utils.removeEventListener(e, this._eventDefinitions.endEvent, this._handleEndEventBind),
                        this._utils.removeEventListener(e, this._eventDefinitions.cancelEvent, this._handleCancelEventBind))
                    }
                }, {
                    key: "_handleStartEvent",
                    value: function _handleStartEvent(e) {
                        for (var t = this._getEventData(e), n = 0; n < t.length; n++)
                            this._activeTouchActions[t[n].identifier] = {
                                startTime: this.getEventTimestamp(),
                                startX: t[n].touchData.pageX,
                                startY: t[n].touchData.pageY,
                                offsetX: 0,
                                offsetY: 0
                            }
                    }
                }, {
                    key: "_handleMoveEvent",
                    value: function _handleMoveEvent(e) {
                        for (var t = this._getEventData(e), n = 0; n < t.length; n++) {
                            var r = this._activeTouchActions[t[n].identifier];
                            r && (r.offsetX = Math.abs(t[n].touchData.pageX - r.startX),
                            r.offsetY = Math.abs(t[n].touchData.pageY - r.startY))
                        }
                    }
                }, {
                    key: "_handleEndEvent",
                    value: function _handleEndEvent(e) {
                        for (var t = this._getEventData(e), n = 0; n < t.length; n++) {
                            var r = this._activeTouchActions[t[n].identifier];
                            r && (r.offsetX < this._tapMaxSlop && r.offsetY < this._tapMaxSlop && (this.getEventTimestamp() - r.startTime < this._longPressTimeout ? this._sendEvent("tap_events", Fn, t[n].identifier, t[n].touchData, t[n].eventArgs) : this._sendEvent("longpress_events", Dn, t[n].identifier, t[n].touchData, t[n].eventArgs)),
                            delete this._activeTouchActions[t[n].identifier])
                        }
                    }
                }, {
                    key: "_handleCancelEvent",
                    value: function _handleCancelEvent(e) {
                        for (var t = this._getEventData(e), n = 0; n < t.length; n++)
                            delete this._activeTouchActions[t[n].identifier]
                    }
                }, {
                    key: "_getEventData",
                    value: function _getEventData(e) {
                        if (void 0 !== e.changedTouches) {
                            for (var t = [], n = 0; n < e.changedTouches.length; n++) {
                                var r = e.changedTouches[n]
                                  , i = r.identifier;
                                t.push({
                                    identifier: i,
                                    touchData: r,
                                    eventArgs: e
                                })
                            }
                            return t
                        }
                        if (null != e.pointerType && ("touch" === e.pointerType || "pen" === e.pointerType || e.pointerType === e.MSPOINTER_TYPE_TOUCH || e.pointerType === e.MSPOINTER_TYPE_PEN))
                            return [{
                                identifier: e.pointerId || 0,
                                touchData: e,
                                eventArgs: e
                            }];
                        return []
                    }
                }, {
                    key: "_sendEvent",
                    value: function _sendEvent(e, t, n, r, i) {
                        var o = this.getEventTimestamp()
                          , s = de[i.isTrusted]
                          , a = this._elements.getElement(i.target)
                          , i = this._utils.StorageUtils.getAndUpdateEventSequenceNumber();
                        this._utils.isUndefinedNull(n) && (n = 0),
                        this._dataQ.addToQueue(e, this._utils.convertToArrayByMap(t, {
                            eventSequence: i,
                            timestamp: o,
                            screenX: r.screenX ? Math.round(r.screenX) : 0,
                            screenY: r.screenY ? Math.round(r.screenY) : 0,
                            pageX: r.pageX || 0,
                            pageY: r.pageY || 0,
                            clientX: r.clientX || 0,
                            clientY: r.clientY || 0,
                            isTrusted: s,
                            elementHash: a,
                            touchIndex: n % 1e4,
                            touchSizeMajor: r.radiusX ? 2 * r.radiusX : 0,
                            touchSizeMinor: r.radiusY ? 2 * r.radiusY : 0
                        }))
                    }
                }], [{
                    key: "getDefaultSettings",
                    value: function getDefaultSettings() {
                        return Pn
                    }
                }, {
                    key: "getSupportedTouchEvents",
                    value: function getSupportedTouchEvents() {
                        return window.TouchEvent ? {
                            startEvent: "touchstart",
                            moveEvent: "touchmove",
                            endEvent: "touchend",
                            cancelEvent: "touchcancel"
                        } : window.PointerEvent ? {
                            startEvent: "pointerdown",
                            moveEvent: "pointermove",
                            endEvent: "pointerup",
                            cancelEvent: "pointercancel"
                        } : void C.debug("TapEvents:_createEventsToListenList - No touch support for browser.")
                    }
                }]),
                TapEventCollector
            }();
            function StorageEventCollector_typeof(e) {
                return (StorageEventCollector_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function _typeof(e) {
                    return typeof e
                }
                : function _typeof(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }
                )(e)
            }
            function StorageEventCollector_defineProperties(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            function StorageEventCollector_setPrototypeOf(e, t) {
                return (StorageEventCollector_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(e, t) {
                    return e.__proto__ = t,
                    e
                }
                )(e, t)
            }
            function StorageEventCollector_createSuper(n) {
                var r = function StorageEventCollector_isNativeReflectConstruct() {
                    if ("undefined" == typeof Reflect || !Reflect.construct)
                        return !1;
                    if (Reflect.construct.sham)
                        return !1;
                    if ("function" == typeof Proxy)
                        return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})),
                        !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function _createSuperInternal() {
                    var e, t = StorageEventCollector_getPrototypeOf(n);
                    return function StorageEventCollector_possibleConstructorReturn(e, t) {
                        return !t || "object" !== StorageEventCollector_typeof(t) && "function" != typeof t ? StorageEventCollector_assertThisInitialized(e) : t
                    }(this, r ? (e = StorageEventCollector_getPrototypeOf(this).constructor,
                    Reflect.construct(t, arguments, e)) : t.apply(this, arguments))
                }
            }
            function StorageEventCollector_assertThisInitialized(e) {
                if (void 0 === e)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }
            function StorageEventCollector_getPrototypeOf(e) {
                return (StorageEventCollector_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                }
                )(e)
            }
            var Tn = {
                configKey: "isStorageEvents",
                isDefault: !1,
                shouldRunPerContext: !1,
                shouldRunPerSession: !1,
                shouldRun: !1,
                isFrameRelated: !1,
                runInSlave: !1,
                runInUns: !1,
                isRunning: !1,
                instance: null
            }
              , Bn = 0
              , xn = ["eventSequence", "timestamp", "keys", "action", "tabsOpened"]
              , In = function() {
                !function StorageEventCollector_inherits(e, t) {
                    if ("function" != typeof t && null !== t)
                        throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }),
                    t && StorageEventCollector_setPrototypeOf(e, t)
                }(StorageEventCollector, fe);
                var o = StorageEventCollector_createSuper(StorageEventCollector);
                function StorageEventCollector(e, t, n, r) {
                    var i;
                    return function StorageEventCollector_classCallCheck(e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, StorageEventCollector),
                    (i = o.call(this))._utils = e,
                    i._dataQ = n,
                    i._elements = t,
                    i._msgBus = r,
                    i._onAllStorageEventBinded = i._onAllStorageEvent.bind(StorageEventCollector_assertThisInitialized(i)),
                    i
                }
                return function StorageEventCollector_createClass(e, t, n) {
                    t && StorageEventCollector_defineProperties(e.prototype, t),
                    n && StorageEventCollector_defineProperties(e, n)
                }(StorageEventCollector, [{
                    key: "startFeature",
                    value: function startFeature(e) {
                        this._bind(e)
                    }
                }, {
                    key: "stopFeature",
                    value: function stopFeature(e) {
                        this._unbind(e)
                    }
                }, {
                    key: "_addToCommunicationQueue",
                    value: function _addToCommunicationQueue(e, t, n, r, i) {
                        e === Bn && this._msgBus.publish("storageEvent", {
                            action: e
                        });
                        e = this.getEventTimestamp(i),
                        i = this._utils.StorageUtils.getAndUpdateEventSequenceNumber();
                        this._dataQ.addToQueue("storage_events", this._utils.convertToArrayByMap(xn, {
                            eventSequence: i,
                            timestamp: e,
                            keys: t,
                            action: n,
                            tabsOpened: r
                        }))
                    }
                }, {
                    key: "_bind",
                    value: function _bind(e) {
                        var t, n = e.Context;
                        if ((n.localStorage || n.sessionStorage) && (t = ["storage"]),
                        this._listeningToEvents = t,
                        0 < this._listeningToEvents.length)
                            for (var r = 0; r < this._listeningToEvents.length; r++)
                                this._utils.addEventListener(n, this._listeningToEvents[r], this._onAllStorageEventBinded, !0)
                    }
                }, {
                    key: "_unbind",
                    value: function _unbind(e) {
                        if (this._listeningToEvents)
                            for (var t = 0; t < this._listeningToEvents.length; t++)
                                this._utils.removeEventListener(e.Context, this._listeningToEvents[t], this._onAllStorageEventBinded, !0)
                    }
                }, {
                    key: "_onAllStorageEvent",
                    value: function _onAllStorageEvent(e) {
                        return "storage" === e.type && this._onStorageEvent(e),
                        !0
                    }
                }, {
                    key: "_onStorageEvent",
                    value: function _onStorageEvent(e) {
                        var t = !1
                          , n = null
                          , r = null;
                        null === e.key && (n = null),
                        r = "string" == typeof e.key && null === e.newValue ? (n = e.key,
                        "delete") : (n = e.key,
                        "update");
                        var i = this._utils.StorageUtils.getFromLocalStorage("cdTabList");
                        i && "object" === StorageEventCollector_typeof(i[0]) && (t = !0),
                        t = t ? 1 : 0,
                        this._addToCommunicationQueue(e.type, n, r, t, e)
                    }
                }], [{
                    key: "getDefaultSettings",
                    value: function getDefaultSettings() {
                        return Tn
                    }
                }]),
                StorageEventCollector
            }();
            function PrintEventCollector_typeof(e) {
                return (PrintEventCollector_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function _typeof(e) {
                    return typeof e
                }
                : function _typeof(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }
                )(e)
            }
            function PrintEventCollector_defineProperties(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            function PrintEventCollector_setPrototypeOf(e, t) {
                return (PrintEventCollector_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(e, t) {
                    return e.__proto__ = t,
                    e
                }
                )(e, t)
            }
            function PrintEventCollector_createSuper(n) {
                var r = function PrintEventCollector_isNativeReflectConstruct() {
                    if ("undefined" == typeof Reflect || !Reflect.construct)
                        return !1;
                    if (Reflect.construct.sham)
                        return !1;
                    if ("function" == typeof Proxy)
                        return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})),
                        !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function _createSuperInternal() {
                    var e, t = PrintEventCollector_getPrototypeOf(n);
                    return function PrintEventCollector_possibleConstructorReturn(e, t) {
                        return !t || "object" !== PrintEventCollector_typeof(t) && "function" != typeof t ? PrintEventCollector_assertThisInitialized(e) : t
                    }(this, r ? (e = PrintEventCollector_getPrototypeOf(this).constructor,
                    Reflect.construct(t, arguments, e)) : t.apply(this, arguments))
                }
            }
            function PrintEventCollector_assertThisInitialized(e) {
                if (void 0 === e)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }
            function PrintEventCollector_getPrototypeOf(e) {
                return (PrintEventCollector_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                }
                )(e)
            }
            var An = {
                configKey: "isPrintEvents",
                isDefault: !1,
                shouldRunPerContext: !1,
                shouldRunPerSession: !1,
                shouldRun: !1,
                isFrameRelated: !1,
                runInSlave: !1,
                runInUns: !1,
                isRunning: !1,
                instance: null
            }
              , Ln = 1
              , Un = 0
              , Nn = ["eventSequence", "timestamp", "printDialogState"]
              , Wn = function() {
                !function PrintEventCollector_inherits(e, t) {
                    if ("function" != typeof t && null !== t)
                        throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }),
                    t && PrintEventCollector_setPrototypeOf(e, t)
                }(PrintEventCollector, fe);
                var r = PrintEventCollector_createSuper(PrintEventCollector);
                function PrintEventCollector(e, t) {
                    var n;
                    return function PrintEventCollector_classCallCheck(e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, PrintEventCollector),
                    (n = r.call(this))._utils = e,
                    n._dataQueue = t,
                    n._addToEventQueueFunc = n._addToEventQueue.bind(PrintEventCollector_assertThisInitialized(n)),
                    n._myAfterPrintFunc = n._myAfterPrint.bind(PrintEventCollector_assertThisInitialized(n)),
                    n
                }
                return function PrintEventCollector_createClass(e, t, n) {
                    t && PrintEventCollector_defineProperties(e.prototype, t),
                    n && PrintEventCollector_defineProperties(e, n)
                }(PrintEventCollector, [{
                    key: "_myAfterPrint",
                    value: function _myAfterPrint() {
                        this._addToEventQueueFunc(Un),
                        window.removeEventListener("focus", this._myAfterPrintFunc)
                    }
                }, {
                    key: "_onBeforePrintEvent",
                    value: function _onBeforePrintEvent() {
                        this._addToEventQueueFunc(Ln),
                        this._utils.addEventListener(window, "focus", this._myAfterPrintFunc.bind(this))
                    }
                }, {
                    key: "_addToEventQueue",
                    value: function _addToEventQueue(e) {
                        var t = this.getEventTimestamp()
                          , n = this._utils.StorageUtils.getAndUpdateEventSequenceNumber();
                        this._dataQueue.addToQueue("print_events", this._utils.convertToArrayByMap(Nn, {
                            eventSequence: n,
                            timestamp: t,
                            printDialogState: e
                        }))
                    }
                }, {
                    key: "startFeature",
                    value: function startFeature() {
                        this._utils.addEventListener(window, "beforeprint", this._onBeforePrintEvent.bind(this))
                    }
                }, {
                    key: "stopFeature",
                    value: function stopFeature() {
                        this._utils.removeEventListener(window, "beforeprint", this._onBeforePrintEvent.bind(this), !0)
                    }
                }], [{
                    key: "getDefaultSettings",
                    value: function getDefaultSettings() {
                        return An
                    }
                }]),
                PrintEventCollector
            }();
            function LightSensorEventCollector_typeof(e) {
                return (LightSensorEventCollector_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function _typeof(e) {
                    return typeof e
                }
                : function _typeof(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }
                )(e)
            }
            function LightSensorEventCollector_defineProperties(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            function LightSensorEventCollector_setPrototypeOf(e, t) {
                return (LightSensorEventCollector_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(e, t) {
                    return e.__proto__ = t,
                    e
                }
                )(e, t)
            }
            function LightSensorEventCollector_createSuper(n) {
                var r = function LightSensorEventCollector_isNativeReflectConstruct() {
                    if ("undefined" == typeof Reflect || !Reflect.construct)
                        return !1;
                    if (Reflect.construct.sham)
                        return !1;
                    if ("function" == typeof Proxy)
                        return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})),
                        !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function _createSuperInternal() {
                    var e, t = LightSensorEventCollector_getPrototypeOf(n);
                    return function LightSensorEventCollector_possibleConstructorReturn(e, t) {
                        return !t || "object" !== LightSensorEventCollector_typeof(t) && "function" != typeof t ? function LightSensorEventCollector_assertThisInitialized(e) {
                            if (void 0 !== e)
                                return e;
                            throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
                        }(e) : t
                    }(this, r ? (e = LightSensorEventCollector_getPrototypeOf(this).constructor,
                    Reflect.construct(t, arguments, e)) : t.apply(this, arguments))
                }
            }
            function LightSensorEventCollector_getPrototypeOf(e) {
                return (LightSensorEventCollector_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                }
                )(e)
            }
            var jn = {
                configKey: "isLightSensor",
                isDefault: !1,
                shouldRunPerContext: !1,
                shouldRunPerSession: !1,
                shouldRun: !1,
                isFrameRelated: !1,
                runInSlave: !1,
                runInUns: !1,
                isRunning: !1,
                instance: null
            }
              , Hn = 5e3
              , Qn = ["eventSequence", "timestamp", "illuminance"]
              , zn = function() {
                !function LightSensorEventCollector_inherits(e, t) {
                    if ("function" != typeof t && null !== t)
                        throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }),
                    t && LightSensorEventCollector_setPrototypeOf(e, t)
                }(LightSensorEvents, fe);
                var i = LightSensorEventCollector_createSuper(LightSensorEvents);
                function LightSensorEvents(e, t, n) {
                    var r;
                    return function LightSensorEventCollector_classCallCheck(e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, LightSensorEvents),
                    (r = i.call(this))._dataQueue = e,
                    r._utils = t,
                    r._configurationRepository = n,
                    r._eventThreshold = r._configurationRepository.get("lightSensorEventThreshold") || Hn,
                    r._lastTime = 0,
                    r
                }
                return function LightSensorEventCollector_createClass(e, t, n) {
                    t && LightSensorEventCollector_defineProperties(e.prototype, t),
                    n && LightSensorEventCollector_defineProperties(e, n)
                }(LightSensorEvents, [{
                    key: "_onReadingSensor",
                    value: function _onReadingSensor() {
                        var e, t = this.getEventTimestamp();
                        t - this._lastTime > this._eventThreshold && (e = this._utils.StorageUtils.getAndUpdateEventSequenceNumber(),
                        this._lastTime = t,
                        this._dataQueue.addToQueue("ambient_light_level", this._utils.convertToArrayByMap(Qn, {
                            eventSequence: e,
                            timestamp: t,
                            illuminance: this._sensor.illuminance
                        })))
                    }
                }, {
                    key: "startFeature",
                    value: function startFeature() {
                        window.AmbientLightSensor ? (C.info("AmbientLightSensor exists and collected"),
                        this._sensor = new AmbientLightSensor,
                        this._utils.addEventListener(this._sensor, "reading", this._onReadingSensor.bind(this)),
                        this._utils.addEventListener(this._sensor, "error", LightSensorEvents._onSensorError),
                        this._sensor.start()) : C.debug("LightSensor does not exist, not collecting")
                    }
                }, {
                    key: "stopFeature",
                    value: function stopFeature() {
                        this._sensor && (this._utils.removeEventListener(this._sensor, "reading", this._onReadingSensor.bind(this)),
                        this._utils.removeEventListener(this._sensor, "error", LightSensorEvents._onSensorError),
                        this._sensor = null)
                    }
                }, {
                    key: "updateFeatureConfig",
                    value: function updateFeatureConfig() {
                        this._eventThreshold = this._configurationRepository.get("lightSensorEventThreshold") ? this._configurationRepository.get("lightSensorEventThreshold") : this._eventThreshold
                    }
                }], [{
                    key: "getDefaultSettings",
                    value: function getDefaultSettings() {
                        return jn
                    }
                }, {
                    key: "_onSensorError",
                    value: function _onSensorError(e) {
                        C.debug("Error connecting LightSensor ".concat(e.error))
                    }
                }]),
                LightSensorEvents
            }();
            function MouseEventCollector_typeof(e) {
                return (MouseEventCollector_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function _typeof(e) {
                    return typeof e
                }
                : function _typeof(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }
                )(e)
            }
            function MouseEventCollector_defineProperties(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            function MouseEventCollector_setPrototypeOf(e, t) {
                return (MouseEventCollector_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(e, t) {
                    return e.__proto__ = t,
                    e
                }
                )(e, t)
            }
            function MouseEventCollector_createSuper(n) {
                var r = function MouseEventCollector_isNativeReflectConstruct() {
                    if ("undefined" == typeof Reflect || !Reflect.construct)
                        return !1;
                    if (Reflect.construct.sham)
                        return !1;
                    if ("function" == typeof Proxy)
                        return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})),
                        !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function _createSuperInternal() {
                    var e, t = MouseEventCollector_getPrototypeOf(n);
                    return function MouseEventCollector_possibleConstructorReturn(e, t) {
                        return !t || "object" !== MouseEventCollector_typeof(t) && "function" != typeof t ? MouseEventCollector_assertThisInitialized(e) : t
                    }(this, r ? (e = MouseEventCollector_getPrototypeOf(this).constructor,
                    Reflect.construct(t, arguments, e)) : t.apply(this, arguments))
                }
            }
            function MouseEventCollector_assertThisInitialized(e) {
                if (void 0 === e)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }
            function MouseEventCollector_getPrototypeOf(e) {
                return (MouseEventCollector_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                }
                )(e)
            }
            function MouseEventCollector_defineProperty(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n,
                e
            }
            var qn = {
                configKey: "isMouseEvents",
                isDefault: !0,
                shouldRunPerContext: !1,
                shouldRunPerSession: !1,
                shouldRun: !0,
                isFrameRelated: !0,
                runInSlave: !0,
                runInUns: !1,
                isRunning: !1,
                instance: null
            }
              , Kn = {
                mousemove: 0,
                mousedown: 1,
                mouseup: 2,
                click: 3,
                dblclick: 4,
                mouseleave: 5,
                mouseenter: 6,
                wheel: 7,
                mouseout: 8,
                mouseover: 9
            }
              , Vn = function() {
                !function MouseEventCollector_inherits(e, t) {
                    if ("function" != typeof t && null !== t)
                        throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }),
                    t && MouseEventCollector_setPrototypeOf(e, t)
                }(MouseEventCollector, fe);
                var i = MouseEventCollector_createSuper(MouseEventCollector);
                function MouseEventCollector(e, t, n, r) {
                    var o;
                    return function MouseEventCollector_classCallCheck(e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, MouseEventCollector),
                    MouseEventCollector_defineProperty(MouseEventCollector_assertThisInitialized(o = i.call(this)), "_lastButton", void 0),
                    MouseEventCollector_defineProperty(MouseEventCollector_assertThisInitialized(o), "_getMouseEvent", function(e) {
                        var t = e.which;
                        "mouseup" === e.type ? o._lastButton = t : "click" === e.type && 0 === t && (t = o._lastButton);
                        var n = Kn[e.type];
                        o._utils.isUndefinedNull(n) && (n = -1);
                        var r = e.deltaY || e.deltaX || e.deltaZ || e.wheelDelta || 0
                          , i = o.getTimestampFromEvent(e);
                        o._dataQueue.addToQueue("mouse_events", [null, o._utils.StorageUtils.getAndUpdateEventSequenceNumber(), o.getEventTimestamp(e), n, de[e.isTrusted], "mousemove" === e.type ? 0 : o._elements.getElement(e.target), e.pageX ? Math.round(e.pageX) : -1, e.pageY ? Math.round(e.pageY) : -1, e.screenX ? Math.round(e.screenX) : -1, e.screenY ? Math.round(e.screenY) : -1, null == t ? -1 : t, Math.round(r), e.clientX ? Math.round(e.clientX) : -1, e.clientY ? Math.round(e.clientY) : -1, e.detail || 0, null === e.button || void 0 === e.button ? -1 : e.button, i])
                    }),
                    o._utils = e,
                    o._domUtils = t,
                    o._elements = n,
                    o._dataQueue = r,
                    o
                }
                return function MouseEventCollector_createClass(e, t, n) {
                    t && MouseEventCollector_defineProperties(e.prototype, t),
                    n && MouseEventCollector_defineProperties(e, n)
                }(MouseEventCollector, [{
                    key: "startFeature",
                    value: function startFeature(e) {
                        var t = this;
                        try {
                            var n = e.getDocument();
                            this._domUtils.addEventListener(n, "mousemove", this._getMouseEvent, !0),
                            this._domUtils.addEventListener(n, "mousedown", this._getMouseEvent, !0),
                            this._domUtils.addEventListener(n, "mouseup", this._getMouseEvent, !0),
                            this._domUtils.addEventListener(n, "click", this._getMouseEvent, !0),
                            this._domUtils.addEventListener(n, "dblclick", this._getMouseEvent, !0),
                            this._isIE = !!n.documentMode || /edge/.test(window.navigator.userAgent.toLowerCase()),
                            this._isIE ? this._domUtils.onDocumentBody(e.Context, function() {
                                t._domUtils.addEventListener(n.body, "mouseleave", t._getMouseEvent),
                                t._domUtils.addEventListener(n.body, "mouseenter", t._getMouseEvent)
                            }) : (this._domUtils.addEventListener(n, "mouseleave", this._getMouseEvent),
                            this._domUtils.addEventListener(n, "mouseenter", this._getMouseEvent)),
                            this._domUtils.addEventListener(n, "wheel", this._getMouseEvent, !0)
                        } catch (e) {
                            C.error("MouseEvents:startFeature failed. msg: ".concat(e.message), e)
                        }
                    }
                }, {
                    key: "stopFeature",
                    value: function stopFeature(e) {
                        try {
                            var t = e.getDocument();
                            this._domUtils.removeEventListener(t, "mousemove", this._getMouseEvent, !0),
                            this._domUtils.removeEventListener(t, "mousedown", this._getMouseEvent, !0),
                            this._domUtils.removeEventListener(t, "mouseup", this._getMouseEvent, !0),
                            this._domUtils.removeEventListener(t, "click", this._getMouseEvent, !0),
                            this._domUtils.removeEventListener(t, "dblclick", this._getMouseEvent, !0),
                            this._isIE ? (this._domUtils.removeEventListener(t.body, "mouseleave", this._getMouseEvent),
                            this._domUtils.removeEventListener(t.body, "mouseenter", this._getMouseEvent)) : (this._domUtils.removeEventListener(t, "mouseleave", this._getMouseEvent),
                            this._domUtils.removeEventListener(t, "mouseenter", this._getMouseEvent)),
                            this._domUtils.removeEventListener(t, "wheel", this._getMouseEvent, !0)
                        } catch (e) {
                            C.error("MouseEvents:stopFeature failed. msg: ".concat(e.message), e)
                        }
                    }
                }], [{
                    key: "getDefaultSettings",
                    value: function getDefaultSettings() {
                        return qn
                    }
                }]),
                MouseEventCollector
            }();
            function TabEventCollector_typeof(e) {
                return (TabEventCollector_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function _typeof(e) {
                    return typeof e
                }
                : function _typeof(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }
                )(e)
            }
            function TabEventCollector_defineProperties(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            function TabEventCollector_setPrototypeOf(e, t) {
                return (TabEventCollector_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(e, t) {
                    return e.__proto__ = t,
                    e
                }
                )(e, t)
            }
            function TabEventCollector_createSuper(n) {
                var r = function TabEventCollector_isNativeReflectConstruct() {
                    if ("undefined" == typeof Reflect || !Reflect.construct)
                        return !1;
                    if (Reflect.construct.sham)
                        return !1;
                    if ("function" == typeof Proxy)
                        return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})),
                        !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function _createSuperInternal() {
                    var e, t = TabEventCollector_getPrototypeOf(n);
                    return function TabEventCollector_possibleConstructorReturn(e, t) {
                        return !t || "object" !== TabEventCollector_typeof(t) && "function" != typeof t ? function TabEventCollector_assertThisInitialized(e) {
                            if (void 0 !== e)
                                return e;
                            throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
                        }(e) : t
                    }(this, r ? (e = TabEventCollector_getPrototypeOf(this).constructor,
                    Reflect.construct(t, arguments, e)) : t.apply(this, arguments))
                }
            }
            function TabEventCollector_getPrototypeOf(e) {
                return (TabEventCollector_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                }
                )(e)
            }
            var Gn = {
                configKey: "isTabsEvents",
                isDefault: !0,
                shouldRunPerContext: !1,
                shouldRunPerSession: !1,
                shouldRun: !0,
                isFrameRelated: !1,
                runInSlave: !1,
                runInUns: !1,
                isRunning: !1,
                instance: null
            }
              , Yn = 0
              , Zn = 1
              , Xn = 2
              , Jn = ["eventSequence", "timestamp", "type", "id", "href", "referrer", "currentTabsList"]
              , $n = function() {
                !function TabEventCollector_inherits(e, t) {
                    if ("function" != typeof t && null !== t)
                        throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }),
                    t && TabEventCollector_setPrototypeOf(e, t)
                }(TabEventCollector, fe);
                var r = TabEventCollector_createSuper(TabEventCollector);
                function TabEventCollector(e, t) {
                    var n;
                    return function TabEventCollector_classCallCheck(e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, TabEventCollector),
                    (n = r.call(this))._utils = e,
                    n._currState = null,
                    n._dataQueue = t,
                    n._tabData = {
                        id: "",
                        openTabTS: 0
                    },
                    n
                }
                return function TabEventCollector_createClass(e, t, n) {
                    t && TabEventCollector_defineProperties(e.prototype, t),
                    n && TabEventCollector_defineProperties(e, n)
                }(TabEventCollector, [{
                    key: "startFeature",
                    value: function startFeature() {
                        C.info("Starting tab events feature"),
                        this._initTabInfo(),
                        this._utils.addEventListener(window, "beforeunload", this._onUnloadTab.bind(this))
                    }
                }, {
                    key: "stopFeature",
                    value: function stopFeature() {
                        C.info("Stopping tab events feature"),
                        this._utils.removeEventListener(window, "beforeunload", this._onUnloadTab.bind(this))
                    }
                }, {
                    key: "_initTabInfo",
                    value: function _initTabInfo() {
                        var e = (e = this._utils.StorageUtils.getFromLocalStorage("cdTabList")) || []
                          , t = Yn;
                        this._tabData = this._utils.StorageUtils.getFromSessionStorage("cdTabData") || this._tabData.id,
                        this._tabData || (this._updateTabData(),
                        t = Zn);
                        for (var n = -1, r = 0, i = e.length; r < i; r++)
                            if (e[r][0] === this._tabData.id) {
                                n = r;
                                break
                            }
                        -1 !== n && n !== e.length || (e.push([this._tabData.id, this._tabData.openTabTS]),
                        this._utils.StorageUtils.saveToLocalStorage("cdTabList", e),
                        C.debug("added tab to list. " + this._tabData.id + ", tab index=" + e.length));
                        var o = this._utils.getDocUrl()
                          , s = this._utils.StorageUtils.getAndUpdateEventSequenceNumber()
                          , a = JSON.stringify(e);
                        this._dataQueue.addToQueue("tab_events", this._utils.convertToArrayByMap(Jn, {
                            eventSequence: s,
                            timestamp: this._tabData.openTabTS,
                            type: t,
                            id: this._tabData.id || "",
                            href: o || "",
                            referrer: this._utils.clearTextFromNumbers(document.referrer),
                            currentTabsList: a || ""
                        }))
                    }
                }, {
                    key: "_onUnloadTab",
                    value: function _onUnloadTab() {
                        var e = (e = this._utils.StorageUtils.getFromLocalStorage("cdTabList")) || []
                          , t = this.getEventTimestamp()
                          , n = this._utils.StorageUtils.getAndUpdateEventSequenceNumber()
                          , r = this._utils.getDocUrl()
                          , i = Xn
                          , o = JSON.stringify(e);
                        C.debug("removing tab from list. id:".concat(this._tabData.id, ", timestamp:").concat(t)),
                        this._dataQueue.addToQueue("tab_events", this._utils.convertToArrayByMap(Jn, {
                            eventSequence: n,
                            timestamp: t,
                            type: i,
                            id: this._tabData.id || "",
                            href: r || "",
                            referrer: this._utils.clearTextFromNumbers(document.referrer),
                            currentTabsList: o || ""
                        }), !0, !0);
                        for (var s = 0, a = e.length; s < a; s++)
                            if (e[s][0] === this._tabData.id) {
                                e.splice(s, 1);
                                break
                            }
                        this._utils.StorageUtils.saveToLocalStorage("cdTabList", e)
                    }
                }, {
                    key: "_updateTabData",
                    value: function _updateTabData() {
                        this._tabData = {},
                        this._tabData = {
                            id: this._utils.generateUUID(),
                            openTabTS: this.getEventTimestamp()
                        },
                        C.debug("initialize tab data: id:".concat(this._tabData.id, ", timestamp:").concat(this._tabData.openTabTS)),
                        this._utils.StorageUtils.saveToSessionStorage("cdTabData", this._tabData)
                    }
                }], [{
                    key: "getDefaultSettings",
                    value: function getDefaultSettings() {
                        return Gn
                    }
                }]),
                TabEventCollector
            }();
            function LocationCollector_typeof(e) {
                return (LocationCollector_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function _typeof(e) {
                    return typeof e
                }
                : function _typeof(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }
                )(e)
            }
            function LocationCollector_defineProperties(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            function LocationCollector_setPrototypeOf(e, t) {
                return (LocationCollector_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(e, t) {
                    return e.__proto__ = t,
                    e
                }
                )(e, t)
            }
            function LocationCollector_createSuper(n) {
                var r = function LocationCollector_isNativeReflectConstruct() {
                    if ("undefined" == typeof Reflect || !Reflect.construct)
                        return !1;
                    if (Reflect.construct.sham)
                        return !1;
                    if ("function" == typeof Proxy)
                        return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})),
                        !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function _createSuperInternal() {
                    var e, t = LocationCollector_getPrototypeOf(n);
                    return function LocationCollector_possibleConstructorReturn(e, t) {
                        return !t || "object" !== LocationCollector_typeof(t) && "function" != typeof t ? LocationCollector_assertThisInitialized(e) : t
                    }(this, r ? (e = LocationCollector_getPrototypeOf(this).constructor,
                    Reflect.construct(t, arguments, e)) : t.apply(this, arguments))
                }
            }
            function LocationCollector_assertThisInitialized(e) {
                if (void 0 === e)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }
            function LocationCollector_getPrototypeOf(e) {
                return (LocationCollector_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                }
                )(e)
            }
            function LocationCollector_defineProperty(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n,
                e
            }
            var er = {
                configKey: "isLocationEvents",
                isDefault: !1,
                shouldRunPerContext: !1,
                shouldRunPerSession: !0,
                shouldRun: !1,
                isFrameRelated: !1,
                runInSlave: !1,
                runInUns: !1,
                isRunning: !1,
                instance: null
            }
              , tr = ["eventSequence", "timestamp", "longitude", "latitude", "accuracy", "speed", "provider"]
              , nr = function() {
                !function LocationCollector_inherits(e, t) {
                    if ("function" != typeof t && null !== t)
                        throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }),
                    t && LocationCollector_setPrototypeOf(e, t)
                }(LocationCollector, fe);
                var o = LocationCollector_createSuper(LocationCollector);
                function LocationCollector(e, t, n) {
                    var r, i = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : window.navigator;
                    return function LocationCollector_classCallCheck(e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, LocationCollector),
                    LocationCollector_defineProperty(LocationCollector_assertThisInitialized(r = o.call(this)), "_subscribeForLocationEvents", function() {
                        r._unsubscribeFromLocationEvents(),
                        r._watcherID = r._navigator.geolocation.watchPosition(r._onGeoLocationPositionEvent, r._onGeoLocationPositionError),
                        r._clearLocationEventsTimeout(),
                        r._locationEventsTimeoutID = setTimeout(function() {
                            r._unsubscribeFromLocationEvents()
                        })
                    }),
                    LocationCollector_defineProperty(LocationCollector_assertThisInitialized(r), "_unsubscribeFromLocationEvents", function() {
                        r._clearLocationEventsTimeout(),
                        r._watcherID && (r._navigator.geolocation.clearWatch(r._watcherID),
                        r._watcherID = null)
                    }),
                    LocationCollector_defineProperty(LocationCollector_assertThisInitialized(r), "_onGeoLocationPositionEvent", function(e) {
                        r._sendData(e)
                    }),
                    LocationCollector_defineProperty(LocationCollector_assertThisInitialized(r), "_onGeoLocationPositionError", function(e) {
                        C.warn("Failed getting geolocation with code ".concat(e.code, ". ").concat(e.message))
                    }),
                    r._configurationRepository = n,
                    r._locationEventsTimeoutMsec = r._configurationRepository.get(_.locationEventsTimeoutMsec),
                    r._utils = t,
                    r._dataQ = e,
                    r._navigator = i,
                    r._watcherID = null,
                    r._locationEventsTimeoutID = null,
                    r
                }
                return function LocationCollector_createClass(e, t, n) {
                    t && LocationCollector_defineProperties(e.prototype, t),
                    n && LocationCollector_defineProperties(e, n)
                }(LocationCollector, [{
                    key: "startFeature",
                    value: function startFeature() {
                        this._subscribeForLocationIfPermissionGranted()
                    }
                }, {
                    key: "stopFeature",
                    value: function stopFeature() {
                        this._unsubscribeFromLocationEvents()
                    }
                }, {
                    key: "updateFeatureConfig",
                    value: function updateFeatureConfig() {
                        try {
                            this._configurationRepository.get(_.locationEventsTimeoutMsec) !== this._locationEventsTimeoutMsec && (this._locationEventsTimeoutMsec = this._configurationRepository.get(_.locationEventsTimeoutMsec))
                        } catch (e) {
                            C.error("LocationEvents: updateFeatureConfig failed, msg: ".concat(e.message), e)
                        }
                    }
                }, {
                    key: "_subscribeForLocationIfPermissionGranted",
                    value: function _subscribeForLocationIfPermissionGranted() {
                        var t = this;
                        this._navigator.permissions && this._navigator.permissions.query && this._navigator.permissions.query({
                            name: "geolocation"
                        }).then(function(e) {
                            "granted" === e.state ? t._subscribeForLocationEvents() : C.info("location permission is denied. Location data will not be collected")
                        }).catch(function(e) {
                            C.error("Failed querying for geolocation permission. ".concat(e.message))
                        })
                    }
                }, {
                    key: "_clearLocationEventsTimeout",
                    value: function _clearLocationEventsTimeout() {
                        this._locationEventsTimeoutID && clearTimeout(this._locationEventsTimeoutID),
                        this._locationEventsTimeoutID = null
                    }
                }, {
                    key: "_sendData",
                    value: function _sendData(e) {
                        var t = e.coords
                          , n = this._utils.StorageUtils.getAndUpdateEventSequenceNumber()
                          , e = this.getEventTimestamp();
                        this._dataQ.addToQueue("location_events", this._utils.convertToArrayByMap(tr, {
                            eventSequence: n,
                            timestamp: e,
                            longitude: t.longitude || -1,
                            latitude: t.latitude || -1,
                            accuracy: t.accuracy || -1,
                            speed: t.speed || -1,
                            provider: ""
                        }))
                    }
                }], [{
                    key: "getDefaultSettings",
                    value: function getDefaultSettings() {
                        return er
                    }
                }]),
                LocationCollector
            }();
            function Event_defineProperties(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            var rr = function() {
                function Event() {
                    !function Event_classCallCheck(e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, Event)
                }
                return function Event_createClass(e, t, n) {
                    t && Event_defineProperties(e.prototype, t),
                    n && Event_defineProperties(e, n)
                }(Event, [{
                    key: "getEventTimestamp",
                    value: function getEventTimestamp() {
                        return h.dateNow()
                    }
                }, {
                    key: "getTimestampFromEvent",
                    value: function getTimestampFromEvent(e) {
                        return e.timeStamp ? h.cutDecimalPointDigits(e.timeStamp, 3) : 0
                    }
                }, {
                    key: "updateFeatureConfig",
                    value: function updateFeatureConfig() {}
                }]),
                Event
            }();
            function SelectElementEvents_typeof(e) {
                return (SelectElementEvents_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function _typeof(e) {
                    return typeof e
                }
                : function _typeof(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }
                )(e)
            }
            function SelectElementEvents_defineProperties(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            function SelectElementEvents_setPrototypeOf(e, t) {
                return (SelectElementEvents_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(e, t) {
                    return e.__proto__ = t,
                    e
                }
                )(e, t)
            }
            function SelectElementEvents_createSuper(n) {
                var r = function SelectElementEvents_isNativeReflectConstruct() {
                    if ("undefined" == typeof Reflect || !Reflect.construct)
                        return !1;
                    if (Reflect.construct.sham)
                        return !1;
                    if ("function" == typeof Proxy)
                        return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})),
                        !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function _createSuperInternal() {
                    var e, t = SelectElementEvents_getPrototypeOf(n);
                    return function SelectElementEvents_possibleConstructorReturn(e, t) {
                        return !t || "object" !== SelectElementEvents_typeof(t) && "function" != typeof t ? SelectElementEvents_assertThisInitialized(e) : t
                    }(this, r ? (e = SelectElementEvents_getPrototypeOf(this).constructor,
                    Reflect.construct(t, arguments, e)) : t.apply(this, arguments))
                }
            }
            function SelectElementEvents_assertThisInitialized(e) {
                if (void 0 === e)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }
            function SelectElementEvents_getPrototypeOf(e) {
                return (SelectElementEvents_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                }
                )(e)
            }
            function SelectElementEvents_defineProperty(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n,
                e
            }
            var ir = function() {
                !function SelectElementEvents_inherits(e, t) {
                    if ("function" != typeof t && null !== t)
                        throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }),
                    t && SelectElementEvents_setPrototypeOf(e, t)
                }(SelectElementEvents, rr);
                var u = SelectElementEvents_createSuper(SelectElementEvents);
                function SelectElementEvents(e, t, n, r, i, o, s) {
                    var a;
                    return function SelectElementEvents_classCallCheck(e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, SelectElementEvents),
                    SelectElementEvents_defineProperty(SelectElementEvents_assertThisInitialized(a = u.call(this)), "handleOnChangeEvents", function(e) {
                        var t = a._CDUtils.getDropDownListValues(e.target).join(";")
                          , t = a._CDUtils.clearTextFromNumbers(t)
                          , n = e.target.selectedIndex
                          , r = e.target.value.length;
                        a._sendToQueue(e, {
                            length: r,
                            selected: n,
                            elementValues: t
                        })
                    }),
                    SelectElementEvents_defineProperty(SelectElementEvents_assertThisInitialized(a), "handleBlurEvent", function(e) {
                        a._sendToQueue(e, {
                            length: 0,
                            selected: -1,
                            elementValues: ""
                        })
                    }),
                    SelectElementEvents_defineProperty(SelectElementEvents_assertThisInitialized(a), "handleFocusEvent", function(e) {
                        a._sendToQueue(e, {
                            length: 0,
                            selected: -1,
                            elementValues: ""
                        })
                    }),
                    a._sendToQueue = e,
                    a._CDUtils = t,
                    a._messageBus = n,
                    a._StandardOnChangeEventsEmitter = r,
                    a._elementFocusEventEmitter = i,
                    a._elementBlurEventEmitter = o,
                    a._configurationRepository = s,
                    a._collectSelectElementBlurAndFocusEvents = a._configurationRepository.get(_.collectSelectElementBlurAndFocusEvents),
                    a
                }
                return function SelectElementEvents_createClass(e, t, n) {
                    t && SelectElementEvents_defineProperties(e.prototype, t),
                    n && SelectElementEvents_defineProperties(e, n)
                }(SelectElementEvents, [{
                    key: "bind",
                    value: function bind(e) {
                        e = e.getDocument();
                        this._messageBus.subscribe(ce.StandardOnSelectEvent, this.handleOnChangeEvents),
                        this._messageBus.subscribe(ce.ElementFocusEvent, this.handleFocusEvent),
                        this._messageBus.subscribe(ce.ElementBlurEvent, this.handleBlurEvent),
                        this.addListenersBySelector(e)
                    }
                }, {
                    key: "unbind",
                    value: function unbind(e) {
                        e = e.getDocument(),
                        e = this._getSelectElementsFromDoc(e);
                        this._StandardOnChangeEventsEmitter.stop(e),
                        this._elementFocusEventEmitter.stop(e),
                        this._elementBlurEventEmitter.stop(e),
                        this._messageBus.unsubscribe(ce.StandardOnSelectEvent, this.handleOnChangeEvents),
                        this._messageBus.unsubscribe(ce.ElementFocusEvent, this.handleFocusEvent),
                        this._messageBus.unsubscribe(ce.ElementBlurEvent, this.handleBlurEvent)
                    }
                }, {
                    key: "addListenersBySelector",
                    value: function addListenersBySelector(e) {
                        e = this._getSelectElementsFromDoc(e);
                        this._StandardOnChangeEventsEmitter.start(e),
                        this._collectSelectElementBlurAndFocusEvents && (this._elementFocusEventEmitter.start(e),
                        this._elementBlurEventEmitter.start(e))
                    }
                }, {
                    key: "updateSettings",
                    value: function updateSettings(e) {
                        this._collectSelectElementBlurAndFocusEvents = this._configurationRepository.get(_.collectSelectElementBlurAndFocusEvents),
                        this._collectSelectElementBlurAndFocusEvents || (e = e.getDocument(),
                        e = this._getSelectElementsFromDoc(e),
                        this._elementFocusEventEmitter.stop(e),
                        this._elementBlurEventEmitter.stop(e))
                    }
                }, {
                    key: "_getSelectElementsFromDoc",
                    value: function _getSelectElementsFromDoc(e) {
                        for (var t = [], n = e.querySelectorAll("select"), r = 0; r < n.length; r++)
                            t.push(n[r]);
                        return t
                    }
                }]),
                SelectElementEvents
            }();
            function InputEvents_typeof(e) {
                return (InputEvents_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function _typeof(e) {
                    return typeof e
                }
                : function _typeof(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }
                )(e)
            }
            function InputEvents_defineProperties(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            function InputEvents_setPrototypeOf(e, t) {
                return (InputEvents_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(e, t) {
                    return e.__proto__ = t,
                    e
                }
                )(e, t)
            }
            function InputEvents_createSuper(n) {
                var r = function InputEvents_isNativeReflectConstruct() {
                    if ("undefined" == typeof Reflect || !Reflect.construct)
                        return !1;
                    if (Reflect.construct.sham)
                        return !1;
                    if ("function" == typeof Proxy)
                        return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})),
                        !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function _createSuperInternal() {
                    var e, t = InputEvents_getPrototypeOf(n);
                    return function InputEvents_possibleConstructorReturn(e, t) {
                        return !t || "object" !== InputEvents_typeof(t) && "function" != typeof t ? InputEvents_assertThisInitialized(e) : t
                    }(this, r ? (e = InputEvents_getPrototypeOf(this).constructor,
                    Reflect.construct(t, arguments, e)) : t.apply(this, arguments))
                }
            }
            function InputEvents_assertThisInitialized(e) {
                if (void 0 === e)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }
            function InputEvents_getPrototypeOf(e) {
                return (InputEvents_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                }
                )(e)
            }
            function InputEvents_defineProperty(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n,
                e
            }
            function bd(s) {
                return {
                    applyAction: function _applyAction(e, t, n) {
                        if (!["start", "stop"].includes(t))
                            return !1;
                        for (var r = [], i = e.getDocument().querySelectorAll(or), o = 0; o < i.length; o++)
                            r.push(i[o]);
                        0 < r.length && s[t](r, e.Context, n)
                    }
                }
            }
            var or = "input:not([type='color']):not([type='hidden']):not([type='file']):not([type='image']):not([type='button']):not([type='radio']):not([type='checkbox']), textarea"
              , sr = function() {
                !function InputEvents_inherits(e, t) {
                    if ("function" != typeof t && null !== t)
                        throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }),
                    t && InputEvents_setPrototypeOf(e, t)
                }(InputEvents, rr);
                var c = InputEvents_createSuper(InputEvents);
                function InputEvents(e, t, n, r, i, o, s, a) {
                    var u;
                    return function InputEvents_classCallCheck(e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, InputEvents),
                    InputEvents_defineProperty(InputEvents_assertThisInitialized(u = c.call(this)), "handleInputEvents", function(e) {
                        "InputEvent" === e.constructor.name && u._inputEventsPerElement.set(e.target, {});
                        var t = e.target.value || "";
                        "" !== t && (t = u._maskingService.maskText(t)),
                        u._sendToQueue(e, {
                            length: t ? t.length : 0,
                            elementValues: t,
                            selected: -1
                        })
                    }),
                    InputEvents_defineProperty(InputEvents_assertThisInitialized(u), "handleFocusBlurEvents", function(e) {
                        u._sendToQueue(e, {
                            length: 0,
                            selected: -1,
                            elementValues: ""
                        })
                    }),
                    InputEvents_defineProperty(InputEvents_assertThisInitialized(u), "handleSyntheticInputEvents", function(e) {
                        var t;
                        u._inputEventsPerElement.has(e.target) && (void 0 === e.jQueryMask || "autotab" !== e.jQueryMask && "prasleyValidator" !== e.jQueryMask) || ("" !== (t = e.target.value || "") && (t = u._maskingService.maskText(t)),
                        u._sendToQueue(e, {
                            length: t ? t.length : 0,
                            elementValues: t,
                            selected: -1
                        }))
                    }),
                    u._elements = e,
                    u._sendToQueue = t,
                    u._messageBus = r,
                    u._CDUtils = n,
                    u._StandardInputEventsEmitter = i,
                    u._SyntheticMaskInputEventsHandler = o,
                    u._SyntheticAutotabInputEventsHandler = s,
                    u._maskingService = a,
                    u._inputEventsPerElement = new WeakMap,
                    u
                }
                return function InputEvents_createClass(e, t, n) {
                    t && InputEvents_defineProperties(e.prototype, t),
                    n && InputEvents_defineProperties(e, n)
                }(InputEvents, [{
                    key: "bind",
                    value: function bind(e) {
                        this._messageBus.subscribe(ce.StandardInputEvent, this.handleInputEvents),
                        this._messageBus.subscribe(ce.StandardInputFocusEvent, this.handleFocusBlurEvents),
                        this._messageBus.subscribe(ce.StandardInputBlurEvent, this.handleFocusBlurEvents),
                        this._messageBus.subscribe(ce.SyntheticInputMaskEvent, this.handleSyntheticInputEvents),
                        bd(this._StandardInputEventsEmitter).applyAction(e, "start"),
                        bd(this._SyntheticMaskInputEventsHandler).applyAction(e, "start"),
                        bd(this._SyntheticAutotabInputEventsHandler).applyAction(e, "start")
                    }
                }, {
                    key: "unbind",
                    value: function unbind(e) {
                        bd(this._StandardInputEventsEmitter).applyAction(e, "stop"),
                        bd(this._SyntheticMaskInputEventsHandler).applyAction(e, "stop"),
                        bd(this._SyntheticAutotabInputEventsHandler).applyAction(e, "stop"),
                        this._messageBus.unsubscribe(ce.StandardInputEvent, this.handleInputEvents),
                        this._messageBus.unsubscribe(ce.StandardInputFocusEvent, this.handleFocusBlurEvents),
                        this._messageBus.unsubscribe(ce.StandardInputBlurEvent, this.handleFocusBlurEvents),
                        this._messageBus.unsubscribe(ce.SyntheticInputMaskEvent, this.handleSyntheticInputEvents)
                    }
                }, {
                    key: "addOnLoadInputData",
                    value: function addOnLoadInputData(e, t) {
                        for (var n = e.getDocument().querySelectorAll(or), r = 0; r < n.length; r++) {
                            var i = n[r];
                            this._elements.isListed(i) ? t || this._elements.resendElementPerContext(i) : this._elements.getElement(i, !1)
                        }
                    }
                }]),
                InputEvents
            }();
            function FormEvents_typeof(e) {
                return (FormEvents_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function _typeof(e) {
                    return typeof e
                }
                : function _typeof(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }
                )(e)
            }
            function FormEvents_defineProperties(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            function FormEvents_setPrototypeOf(e, t) {
                return (FormEvents_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(e, t) {
                    return e.__proto__ = t,
                    e
                }
                )(e, t)
            }
            function FormEvents_createSuper(n) {
                var r = function FormEvents_isNativeReflectConstruct() {
                    if ("undefined" == typeof Reflect || !Reflect.construct)
                        return !1;
                    if (Reflect.construct.sham)
                        return !1;
                    if ("function" == typeof Proxy)
                        return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})),
                        !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function _createSuperInternal() {
                    var e, t = FormEvents_getPrototypeOf(n);
                    return function FormEvents_possibleConstructorReturn(e, t) {
                        return !t || "object" !== FormEvents_typeof(t) && "function" != typeof t ? FormEvents_assertThisInitialized(e) : t
                    }(this, r ? (e = FormEvents_getPrototypeOf(this).constructor,
                    Reflect.construct(t, arguments, e)) : t.apply(this, arguments))
                }
            }
            function FormEvents_assertThisInitialized(e) {
                if (void 0 === e)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }
            function FormEvents_getPrototypeOf(e) {
                return (FormEvents_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                }
                )(e)
            }
            var ar = "form"
              , ur = function() {
                !function FormEvents_inherits(e, t) {
                    if ("function" != typeof t && null !== t)
                        throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }),
                    t && FormEvents_setPrototypeOf(e, t)
                }(FormEvents, rr);
                var i = FormEvents_createSuper(FormEvents);
                function FormEvents(e, t, n) {
                    var r;
                    return function FormEvents_classCallCheck(e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, FormEvents),
                    function FormEvents_defineProperty(e, t, n) {
                        t in e ? Object.defineProperty(e, t, {
                            value: n,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : e[t] = n
                    }(FormEvents_assertThisInitialized(r = i.call(this)), "handleOnFormEvents", function(e) {
                        C.trace("ElementEvents:_onFormSubmitEvent"),
                        r._sendToQueue(e, {
                            length: 0,
                            selected: -1,
                            elementValues: ""
                        })
                    }),
                    r._sendToQueue = e,
                    r._messageBus = t,
                    r._StandardOnFormEventsEmitter = n,
                    r
                }
                return function FormEvents_createClass(e, t, n) {
                    t && FormEvents_defineProperties(e.prototype, t),
                    n && FormEvents_defineProperties(e, n)
                }(FormEvents, [{
                    key: "bind",
                    value: function bind(e) {
                        e = e.getDocument();
                        this._messageBus.subscribe(ce.StandardOnFormSubmitEvent, this.handleOnFormEvents),
                        this.addListenersBySelector(e)
                    }
                }, {
                    key: "unbind",
                    value: function unbind(e) {
                        for (var t = [], n = e.getDocument().querySelectorAll(ar), r = 0; r < n.length; r++)
                            t.push(n[r]);
                        this._StandardOnFormEventsEmitter.stop(t),
                        this._messageBus.unsubscribe(ce.StandardOnFormSubmitEvent, this.handleOnFormEvents)
                    }
                }, {
                    key: "addListenersBySelector",
                    value: function addListenersBySelector(e) {
                        for (var t = [], n = e.querySelectorAll(ar), r = 0; r < n.length; r++)
                            t.push(n[r]);
                        this._StandardOnFormEventsEmitter.start(t)
                    }
                }]),
                FormEvents
            }();
            function ClickEvents_typeof(e) {
                return (ClickEvents_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function _typeof(e) {
                    return typeof e
                }
                : function _typeof(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }
                )(e)
            }
            function ClickEvents_defineProperties(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            function ClickEvents_setPrototypeOf(e, t) {
                return (ClickEvents_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(e, t) {
                    return e.__proto__ = t,
                    e
                }
                )(e, t)
            }
            function ClickEvents_createSuper(n) {
                var r = function ClickEvents_isNativeReflectConstruct() {
                    if ("undefined" == typeof Reflect || !Reflect.construct)
                        return !1;
                    if (Reflect.construct.sham)
                        return !1;
                    if ("function" == typeof Proxy)
                        return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})),
                        !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function _createSuperInternal() {
                    var e, t = ClickEvents_getPrototypeOf(n);
                    return function ClickEvents_possibleConstructorReturn(e, t) {
                        return !t || "object" !== ClickEvents_typeof(t) && "function" != typeof t ? ClickEvents_assertThisInitialized(e) : t
                    }(this, r ? (e = ClickEvents_getPrototypeOf(this).constructor,
                    Reflect.construct(t, arguments, e)) : t.apply(this, arguments))
                }
            }
            function ClickEvents_assertThisInitialized(e) {
                if (void 0 === e)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }
            function ClickEvents_getPrototypeOf(e) {
                return (ClickEvents_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                }
                )(e)
            }
            var cr = "input[type='button'], input[type='radio'], input[type='checkbox'], button"
              , lr = function() {
                !function ClickEvents_inherits(e, t) {
                    if ("function" != typeof t && null !== t)
                        throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }),
                    t && ClickEvents_setPrototypeOf(e, t)
                }(ClickEvents, rr);
                var s = ClickEvents_createSuper(ClickEvents);
                function ClickEvents(e, t, n, r, i) {
                    var o;
                    return function ClickEvents_classCallCheck(e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, ClickEvents),
                    function ClickEvents_defineProperty(e, t, n) {
                        t in e ? Object.defineProperty(e, t, {
                            value: n,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : e[t] = n
                    }(ClickEvents_assertThisInitialized(o = s.call(this)), "handleOnClickEvents", function(e) {
                        var t = e.target
                          , n = t.value || t.innerHTML || ""
                          , n = o._shouldMaskValueField ? o._CDUtils.maskText(n) : o._CDUtils.clearTextFromNumbers(n);
                        o._sendToQueue(e, {
                            length: n.length,
                            elementValues: n,
                            selected: void 0 === t.checked ? -1 : t.checked ? 1 : 0
                        })
                    }),
                    o._sendToQueue = e,
                    o._CDUtils = t,
                    o._messageBus = n,
                    o._StandardOnClickEventsEmitter = i,
                    o._configurationRepository = r,
                    o._shouldMaskValueField = r.get(_.shouldMaskClickEventValueField),
                    o
                }
                return function ClickEvents_createClass(e, t, n) {
                    t && ClickEvents_defineProperties(e.prototype, t),
                    n && ClickEvents_defineProperties(e, n)
                }(ClickEvents, [{
                    key: "bind",
                    value: function bind(e) {
                        e = e.getDocument();
                        this._messageBus.subscribe(ce.StandardOnClickEvent, this.handleOnClickEvents),
                        this.addListenersBySelector(e)
                    }
                }, {
                    key: "unbind",
                    value: function unbind(e) {
                        for (var t = [], n = e.getDocument().querySelectorAll(cr), r = 0; r < n.length; r++)
                            t.push(n[r]);
                        this._StandardOnClickEventsEmitter.stop(t),
                        this._messageBus.unsubscribe(ce.StandardOnClickEvent, this.handleOnClickEvents)
                    }
                }, {
                    key: "addListenersBySelector",
                    value: function addListenersBySelector(e) {
                        for (var t = [], n = e.querySelectorAll(cr), r = 0; r < n.length; r++)
                            t.push(n[r]);
                        this._StandardOnClickEventsEmitter.start(t)
                    }
                }, {
                    key: "updateSettings",
                    value: function updateSettings() {
                        this._shouldMaskValueField = this._configurationRepository.get(_.shouldMaskClickEventValueField)
                    }
                }]),
                ClickEvents
            }();
            function BrowserDetect_typeof(e) {
                return (BrowserDetect_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function _typeof(e) {
                    return typeof e
                }
                : function _typeof(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }
                )(e)
            }
            function BrowserDetect_defineProperties(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            function BrowserDetect_setPrototypeOf(e, t) {
                return (BrowserDetect_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(e, t) {
                    return e.__proto__ = t,
                    e
                }
                )(e, t)
            }
            function BrowserDetect_createSuper(n) {
                var r = function BrowserDetect_isNativeReflectConstruct() {
                    if ("undefined" == typeof Reflect || !Reflect.construct)
                        return !1;
                    if (Reflect.construct.sham)
                        return !1;
                    if ("function" == typeof Proxy)
                        return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})),
                        !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function _createSuperInternal() {
                    var e, t = BrowserDetect_getPrototypeOf(n);
                    return function BrowserDetect_possibleConstructorReturn(e, t) {
                        return !t || "object" !== BrowserDetect_typeof(t) && "function" != typeof t ? function BrowserDetect_assertThisInitialized(e) {
                            if (void 0 !== e)
                                return e;
                            throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
                        }(e) : t
                    }(this, r ? (e = BrowserDetect_getPrototypeOf(this).constructor,
                    Reflect.construct(t, arguments, e)) : t.apply(this, arguments))
                }
            }
            function BrowserDetect_getPrototypeOf(e) {
                return (BrowserDetect_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                }
                )(e)
            }
            var fr = {
                configKey: "isBrowserDetect",
                isDefault: !1,
                shouldRunPerContext: !1,
                shouldRunPerSession: !0,
                shouldRun: !0,
                isFrameRelated: !1,
                runInUns: !0,
                runInSlave: !1,
                isRunning: !1,
                instance: null
            }
              , dr = function() {
                !function BrowserDetect_inherits(e, t) {
                    if ("function" != typeof t && null !== t)
                        throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }),
                    t && BrowserDetect_setPrototypeOf(e, t)
                }(BrowserDetect, fe);
                var n = BrowserDetect_createSuper(BrowserDetect);
                function BrowserDetect(e) {
                    var t;
                    return function BrowserDetect_classCallCheck(e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, BrowserDetect),
                    (t = n.call(this))._dataQ = e,
                    t
                }
                return function BrowserDetect_createClass(e, t, n) {
                    t && BrowserDetect_defineProperties(e.prototype, t),
                    n && BrowserDetect_defineProperties(e, n)
                }(BrowserDetect, [{
                    key: "startFeature",
                    value: function startFeature() {
                        var e = !!window.opr && !!opr.addons || !!window.opera || 0 <= navigator.userAgent.indexOf(" OPR/")
                          , t = "undefined" != typeof InstallTrigger
                          , n = /constructor/i.test(window.HTMLElement) || "[object SafariRemoteNotification]" === (!window.safari || "undefined" != typeof safari && safari.pushNotification).toString()
                          , r = !!document.documentMode
                          , i = !r && !!window.StyleMedia
                          , o = !!window.chrome && !!window.chrome.webstore
                          , s = (o || e) && !!window.CSS;
                        this._dataQ.addToQueue("static_fields", ["browser_spoofing", [o, t, i, r, n, e, s]], !1)
                    }
                }], [{
                    key: "getDefaultSettings",
                    value: function getDefaultSettings() {
                        return fr
                    }
                }]),
                BrowserDetect
            }();
            function BrowserPropsFeature_typeof(e) {
                return (BrowserPropsFeature_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function _typeof(e) {
                    return typeof e
                }
                : function _typeof(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }
                )(e)
            }
            function BrowserPropsFeature_defineProperties(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            function BrowserPropsFeature_setPrototypeOf(e, t) {
                return (BrowserPropsFeature_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(e, t) {
                    return e.__proto__ = t,
                    e
                }
                )(e, t)
            }
            function BrowserPropsFeature_createSuper(n) {
                var r = function BrowserPropsFeature_isNativeReflectConstruct() {
                    if ("undefined" == typeof Reflect || !Reflect.construct)
                        return !1;
                    if (Reflect.construct.sham)
                        return !1;
                    if ("function" == typeof Proxy)
                        return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})),
                        !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function _createSuperInternal() {
                    var e, t = BrowserPropsFeature_getPrototypeOf(n);
                    return function BrowserPropsFeature_possibleConstructorReturn(e, t) {
                        return !t || "object" !== BrowserPropsFeature_typeof(t) && "function" != typeof t ? function BrowserPropsFeature_assertThisInitialized(e) {
                            if (void 0 !== e)
                                return e;
                            throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
                        }(e) : t
                    }(this, r ? (e = BrowserPropsFeature_getPrototypeOf(this).constructor,
                    Reflect.construct(t, arguments, e)) : t.apply(this, arguments))
                }
            }
            function BrowserPropsFeature_getPrototypeOf(e) {
                return (BrowserPropsFeature_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                }
                )(e)
            }
            var hr = {
                configKey: "collectBrowserProps",
                isDefault: !1,
                shouldRunPerContext: !1,
                shouldRunPerSession: !0,
                shouldRun: !0,
                isFrameRelated: !1,
                runInUns: !0,
                runInSlave: !1,
                isRunning: !1,
                instance: null
            }
              , pr = function() {
                !function BrowserPropsFeature_inherits(e, t) {
                    if ("function" != typeof t && null !== t)
                        throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }),
                    t && BrowserPropsFeature_setPrototypeOf(e, t)
                }(BrowserPropsFeature, fe);
                var o = BrowserPropsFeature_createSuper(BrowserPropsFeature);
                function BrowserPropsFeature(e, t, n, r) {
                    var i;
                    return function BrowserPropsFeature_classCallCheck(e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, BrowserPropsFeature),
                    (i = o.call(this))._dataQ = e,
                    i._pointerHoverDetector = t,
                    i._utils = n,
                    i._configurationRepository = r,
                    i
                }
                return function BrowserPropsFeature_createClass(e, t, n) {
                    t && BrowserPropsFeature_defineProperties(e.prototype, t),
                    n && BrowserPropsFeature_defineProperties(e, n)
                }(BrowserPropsFeature, [{
                    key: "startFeature",
                    value: function startFeature() {
                        var t = this;
                        C.info("Collecting Browser Props"),
                        this._dataQ.addToQueue("static_fields", ["version_client", this._utils.scriptVersion], !1),
                        this._dataQ.addToQueue("static_fields", ["device_source", "js"], !1),
                        C.info("SDK Version is ".concat(this._utils.scriptVersion));
                        var e = BrowserPropsFeature.getLanguage();
                        e && (this._configurationRepository.get("browserPropsShouldHashLanguageField") && (C.debug("Hashing language field according to configuration"),
                        e = this._utils.getHash(e).toString()),
                        this._dataQ.addToQueue("static_fields", ["main_lang", e], !1)),
                        this._dataQ.addToQueue("static_fields", ["os", window.navigator.platform], !1);
                        e = BrowserPropsFeature.getOperatingSystem();
                        this._dataQ.addToQueue("static_fields", ["os_version", e.version], !1),
                        this._dataQ.addToQueue("static_fields", ["os_family", e.name], !1);
                        e = this._pointerHoverDetector.getPointerHover();
                        this._dataQ.addToQueue("static_fields", ["input_mech", [e.pointer, e.hover]], !1),
                        this._dataQ.addToQueue("static_fields", ["cores", window.navigator.hardwareConcurrency || 0], !1),
                        navigator.languages && (n = navigator.languages,
                        this._configurationRepository.get("browserPropsShouldHashLanguageField") && (C.debug("Hashing languages field according to configuration"),
                        n = Array.from(n, function(e) {
                            return t._utils.getHash(e).toString()
                        })),
                        this._dataQ.addToQueue("static_fields", ["languages", n], !1));
                        var n = BrowserPropsFeature.getPlugins();
                        n && 0 < n.length && this._dataQ.addToQueue("static_fields", ["plugins", n], !1),
                        this._dataQ.addToQueue("static_fields", ["js_ua", navigator.userAgent], !1);
                        n = -1 * (new Date).getTimezoneOffset();
                        this._dataQ.addToQueue("static_fields", ["time_zone", n], !1);
                        n = BrowserPropsFeature.checkCookie();
                        this._dataQ.addToQueue("static_fields", ["cookie_enabled", n], !1);
                        n = navigator.deviceMemory || 0;
                        this._dataQ.addToQueue("static_fields", ["device_memory", n], !1),
                        C.info("Browser Props collected")
                    }
                }], [{
                    key: "getDefaultSettings",
                    value: function getDefaultSettings() {
                        return hr
                    }
                }, {
                    key: "getLanguage",
                    value: function getLanguage() {
                        if (navigator) {
                            if (navigator.language)
                                return navigator.language;
                            if (navigator.userLanguage)
                                return navigator.userLanguage
                        }
                    }
                }, {
                    key: "getPlugins",
                    value: function getPlugins() {
                        try {
                            var e = [];
                            if (window.navigator.plugins && 0 < window.navigator.plugins.length)
                                for (var t = 0, n = window.navigator.plugins.length; t < n; t++)
                                    e.push([navigator.plugins[t].name, navigator.plugins[t].filename, navigator.plugins[t].description, navigator.plugins[t].version || ""]);
                            else if (window.navigator.mimeTypes && 0 < window.navigator.mimeTypes.length)
                                for (var r = 0; r < window.navigator.mimeTypes.length; r++)
                                    e.push([window.navigator.mimeTypes[r].type, "", window.navigator.mimeTypes[r].description, ""]);
                            return e
                        } catch (e) {
                            C.warn("getPlugins error: ".concat(e.message), e)
                        }
                    }
                }, {
                    key: "checkCookie",
                    value: function checkCookie() {
                        var e = navigator.cookieEnabled;
                        return e || (this._utils.StorageUtils.setCookie("testcookie", "1", 6e4),
                        e = -1 !== document.cookie.indexOf("testcookie")),
                        e
                    }
                }, {
                    key: "getOperatingSystem",
                    value: function getOperatingSystem() {
                        for (var e, t, n = [{
                            name: "Windows Phone",
                            value: "Windows Phone",
                            version: "OS"
                        }, {
                            name: "Windows",
                            value: "Win",
                            version: "NT"
                        }, {
                            name: "iPhone",
                            value: "iPhone",
                            version: "OS"
                        }, {
                            name: "iPad",
                            value: "iPad",
                            version: "OS"
                        }, {
                            name: "Kindle",
                            value: "Silk",
                            version: "Silk"
                        }, {
                            name: "Android",
                            value: "Android",
                            version: "Android"
                        }, {
                            name: "PlayBook",
                            value: "PlayBook",
                            version: "OS"
                        }, {
                            name: "BlackBerry",
                            value: "BlackBerry",
                            version: "/"
                        }, {
                            name: "Macintosh",
                            value: "Mac",
                            version: "OS X"
                        }, {
                            name: "Linux",
                            value: "Linux",
                            version: "rv"
                        }, {
                            name: "Palm",
                            value: "Palm",
                            version: "PalmOS"
                        }], r = [navigator.platform, navigator.oscpu || navigator.appVersion].join(" "), i = "", o = "Unknown", s = 0; s < n.length; s++)
                            if (new RegExp(n[s].value,"i").test(r)) {
                                if (e = new RegExp(n[s].version + "[- /:;]([\\d._]+)","i"),
                                t = r.match(e)) {
                                    t[1] && (t = t[1]),
                                    t = t.split(/[._]+/);
                                    for (var a = 0; a < t.length; a++)
                                        i += 0 === a ? t[a] + "." : t[a]
                                }
                                o = n[s].name;
                                break
                            }
                        return {
                            version: parseFloat(i) || null,
                            name: o
                        }
                    }
                }]),
                BrowserPropsFeature
            }();
            function DoNotTrackFeature_typeof(e) {
                return (DoNotTrackFeature_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function _typeof(e) {
                    return typeof e
                }
                : function _typeof(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }
                )(e)
            }
            function DoNotTrackFeature_defineProperties(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            function DoNotTrackFeature_setPrototypeOf(e, t) {
                return (DoNotTrackFeature_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(e, t) {
                    return e.__proto__ = t,
                    e
                }
                )(e, t)
            }
            function DoNotTrackFeature_createSuper(n) {
                var r = function DoNotTrackFeature_isNativeReflectConstruct() {
                    if ("undefined" == typeof Reflect || !Reflect.construct)
                        return !1;
                    if (Reflect.construct.sham)
                        return !1;
                    if ("function" == typeof Proxy)
                        return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})),
                        !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function _createSuperInternal() {
                    var e, t = DoNotTrackFeature_getPrototypeOf(n);
                    return function DoNotTrackFeature_possibleConstructorReturn(e, t) {
                        return !t || "object" !== DoNotTrackFeature_typeof(t) && "function" != typeof t ? function DoNotTrackFeature_assertThisInitialized(e) {
                            if (void 0 !== e)
                                return e;
                            throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
                        }(e) : t
                    }(this, r ? (e = DoNotTrackFeature_getPrototypeOf(this).constructor,
                    Reflect.construct(t, arguments, e)) : t.apply(this, arguments))
                }
            }
            function DoNotTrackFeature_getPrototypeOf(e) {
                return (DoNotTrackFeature_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                }
                )(e)
            }
            var vr = {
                configKey: "isDoNotTrack",
                isDefault: !1,
                shouldRunPerContext: !1,
                shouldRunPerSession: !0,
                shouldRun: !0,
                isFrameRelated: !1,
                runInUns: !0,
                runInSlave: !1,
                isRunning: !1,
                instance: null
            }
              , _r = function() {
                !function DoNotTrackFeature_inherits(e, t) {
                    if ("function" != typeof t && null !== t)
                        throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }),
                    t && DoNotTrackFeature_setPrototypeOf(e, t)
                }(DoNotTrackFeature, fe);
                var n = DoNotTrackFeature_createSuper(DoNotTrackFeature);
                function DoNotTrackFeature(e) {
                    var t;
                    return function DoNotTrackFeature_classCallCheck(e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, DoNotTrackFeature),
                    (t = n.call(this))._dataQ = e,
                    t
                }
                return function DoNotTrackFeature_createClass(e, t, n) {
                    t && DoNotTrackFeature_defineProperties(e.prototype, t),
                    n && DoNotTrackFeature_defineProperties(e, n)
                }(DoNotTrackFeature, [{
                    key: "startFeature",
                    value: function startFeature() {
                        var e = navigator.doNotTrack;
                        void 0 === e && void 0 === (e = window.doNotTrack) && (e = navigator.msDoNotTrack),
                        e = null === e || "unspecified" === e || "0" === e ? 0 : "1" === e ? 1 : 2,
                        this._dataQ.addToQueue("static_fields", ["dnt", e], !1)
                    }
                }], [{
                    key: "getDefaultSettings",
                    value: function getDefaultSettings() {
                        return vr
                    }
                }]),
                DoNotTrackFeature
            }();
            function GraphicDetectFeature_typeof(e) {
                return (GraphicDetectFeature_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function _typeof(e) {
                    return typeof e
                }
                : function _typeof(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }
                )(e)
            }
            function GraphicDetectFeature_defineProperties(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            function GraphicDetectFeature_setPrototypeOf(e, t) {
                return (GraphicDetectFeature_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(e, t) {
                    return e.__proto__ = t,
                    e
                }
                )(e, t)
            }
            function GraphicDetectFeature_createSuper(n) {
                var r = function GraphicDetectFeature_isNativeReflectConstruct() {
                    if ("undefined" == typeof Reflect || !Reflect.construct)
                        return !1;
                    if (Reflect.construct.sham)
                        return !1;
                    if ("function" == typeof Proxy)
                        return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})),
                        !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function _createSuperInternal() {
                    var e, t = GraphicDetectFeature_getPrototypeOf(n);
                    return function GraphicDetectFeature_possibleConstructorReturn(e, t) {
                        return !t || "object" !== GraphicDetectFeature_typeof(t) && "function" != typeof t ? function GraphicDetectFeature_assertThisInitialized(e) {
                            if (void 0 !== e)
                                return e;
                            throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
                        }(e) : t
                    }(this, r ? (e = GraphicDetectFeature_getPrototypeOf(this).constructor,
                    Reflect.construct(t, arguments, e)) : t.apply(this, arguments))
                }
            }
            function GraphicDetectFeature_getPrototypeOf(e) {
                return (GraphicDetectFeature_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                }
                )(e)
            }
            var mr = {
                configKey: "isVMDetection",
                isDefault: !1,
                shouldRunPerContext: !1,
                shouldRunPerSession: !0,
                shouldRun: !0,
                isFrameRelated: !1,
                runInUns: !1,
                runInSlave: !1,
                isRunning: !1,
                instance: null
            }
              , gr = function() {
                !function GraphicDetectFeature_inherits(e, t) {
                    if ("function" != typeof t && null !== t)
                        throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }),
                    t && GraphicDetectFeature_setPrototypeOf(e, t)
                }(GraphicDetectFeature, fe);
                var n = GraphicDetectFeature_createSuper(GraphicDetectFeature);
                function GraphicDetectFeature(e) {
                    var t;
                    return function GraphicDetectFeature_classCallCheck(e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, GraphicDetectFeature),
                    (t = n.call(this))._dataQ = e,
                    t.canvasId = "cd_canvas",
                    t
                }
                return function GraphicDetectFeature_createClass(e, t, n) {
                    t && GraphicDetectFeature_defineProperties(e.prototype, t),
                    n && GraphicDetectFeature_defineProperties(e, n)
                }(GraphicDetectFeature, [{
                    key: "startFeature",
                    value: function startFeature() {
                        try {
                            this._getMappedRenderInfo()
                        } catch (e) {
                            C.error("Failed collecting Graphic Card information. ".concat(e))
                        }
                    }
                }, {
                    key: "_getMappedRenderInfo",
                    value: function _getMappedRenderInfo() {
                        C.info("Collecting Graphic Card props");
                        var e, t, n = {
                            renderer: "unknown",
                            vendor: "",
                            version: "unknown"
                        };
                        (window.WebGLRenderingContext || window.WebGL2RenderingContext) && ((t = document.createElement("canvas")).id = this.canvasId,
                        !(e = t.getContext("experimental-webgl")) || null != (t = e.getExtension("WEBGL_debug_renderer_info")) && (n.renderer = e.getParameter(t.UNMASKED_RENDERER_WEBGL),
                        n.vendor = e.getParameter(t.UNMASKED_VENDOR_WEBGL),
                        -1 < n.renderer.indexOf("Intel") && -1 < n.renderer.indexOf("HD Graphics") && ((t = n.renderer.match(/\d+/g)) && (500 < (t = t[0]) && t < 599 && (n.version = "SKL (6th gen core)"),
                        5300 < t && t < 6999 && (n.version = "BDW (5th gen core)"))))),
                        this._dataQ.addToQueue("static_fields", ["grph_card", [n.renderer, n.vendor, n.version]], !1),
                        C.info("Graphic Card props collected")
                    }
                }], [{
                    key: "getDefaultSettings",
                    value: function getDefaultSettings() {
                        return mr
                    }
                }]),
                GraphicDetectFeature
            }();
            function MediaDevicesFeature_typeof(e) {
                return (MediaDevicesFeature_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function _typeof(e) {
                    return typeof e
                }
                : function _typeof(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }
                )(e)
            }
            function MediaDevicesFeature_defineProperties(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            function MediaDevicesFeature_setPrototypeOf(e, t) {
                return (MediaDevicesFeature_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(e, t) {
                    return e.__proto__ = t,
                    e
                }
                )(e, t)
            }
            function MediaDevicesFeature_createSuper(n) {
                var r = function MediaDevicesFeature_isNativeReflectConstruct() {
                    if ("undefined" == typeof Reflect || !Reflect.construct)
                        return !1;
                    if (Reflect.construct.sham)
                        return !1;
                    if ("function" == typeof Proxy)
                        return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})),
                        !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function _createSuperInternal() {
                    var e, t = MediaDevicesFeature_getPrototypeOf(n);
                    return function MediaDevicesFeature_possibleConstructorReturn(e, t) {
                        return !t || "object" !== MediaDevicesFeature_typeof(t) && "function" != typeof t ? function MediaDevicesFeature_assertThisInitialized(e) {
                            if (void 0 !== e)
                                return e;
                            throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
                        }(e) : t
                    }(this, r ? (e = MediaDevicesFeature_getPrototypeOf(this).constructor,
                    Reflect.construct(t, arguments, e)) : t.apply(this, arguments))
                }
            }
            function MediaDevicesFeature_getPrototypeOf(e) {
                return (MediaDevicesFeature_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                }
                )(e)
            }
            var yr = {
                configKey: "isMediaDevices",
                isDefault: !1,
                shouldRunPerContext: !1,
                shouldRunPerSession: !0,
                shouldRun: !0,
                isFrameRelated: !1,
                runInUns: !1,
                runInSlave: !1,
                isRunning: !1,
                instance: null
            }
              , br = function() {
                !function MediaDevicesFeature_inherits(e, t) {
                    if ("function" != typeof t && null !== t)
                        throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }),
                    t && MediaDevicesFeature_setPrototypeOf(e, t)
                }(MediaDevicesFeature, fe);
                var r = MediaDevicesFeature_createSuper(MediaDevicesFeature);
                function MediaDevicesFeature(e) {
                    var t, n = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : window.navigator;
                    return function MediaDevicesFeature_classCallCheck(e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, MediaDevicesFeature),
                    (t = r.call(this))._dataQ = e,
                    t._navigator = n,
                    t._metric = "MediaDevicesFeature",
                    t
                }
                return function MediaDevicesFeature_createClass(e, t, n) {
                    t && MediaDevicesFeature_defineProperties(e.prototype, t),
                    n && MediaDevicesFeature_defineProperties(e, n)
                }(MediaDevicesFeature, [{
                    key: "startFeature",
                    value: function startFeature() {
                        var n = this;
                        this._navigator.mediaDevices && this._navigator.mediaDevices.enumerateDevices && this._navigator.mediaDevices.enumerateDevices().then(function(e) {
                            var t = [];
                            e.forEach(function(e) {
                                e = [e.kind || "", e.label || "", e.deviceId || "", e.groupId || ""];
                                t.push(e)
                            }),
                            n._dataQ.addToQueue("static_fields", ["media_devices", t], !1)
                        }).catch(function(e) {
                            n.cancelMonitor(n._metric),
                            C.error("MediaDevicesFeature:startFeature failed to enumerateDevices: ".concat(e.message))
                        })
                    }
                }], [{
                    key: "getDefaultSettings",
                    value: function getDefaultSettings() {
                        return yr
                    }
                }]),
                MediaDevicesFeature
            }();
            function UserPermissions_typeof(e) {
                return (UserPermissions_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function _typeof(e) {
                    return typeof e
                }
                : function _typeof(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }
                )(e)
            }
            function UserPermissions_defineProperties(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            function UserPermissions_setPrototypeOf(e, t) {
                return (UserPermissions_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(e, t) {
                    return e.__proto__ = t,
                    e
                }
                )(e, t)
            }
            function UserPermissions_createSuper(n) {
                var r = function UserPermissions_isNativeReflectConstruct() {
                    if ("undefined" == typeof Reflect || !Reflect.construct)
                        return !1;
                    if (Reflect.construct.sham)
                        return !1;
                    if ("function" == typeof Proxy)
                        return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})),
                        !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function _createSuperInternal() {
                    var e, t = UserPermissions_getPrototypeOf(n);
                    return function UserPermissions_possibleConstructorReturn(e, t) {
                        return !t || "object" !== UserPermissions_typeof(t) && "function" != typeof t ? function UserPermissions_assertThisInitialized(e) {
                            if (void 0 !== e)
                                return e;
                            throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
                        }(e) : t
                    }(this, r ? (e = UserPermissions_getPrototypeOf(this).constructor,
                    Reflect.construct(t, arguments, e)) : t.apply(this, arguments))
                }
            }
            function UserPermissions_getPrototypeOf(e) {
                return (UserPermissions_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                }
                )(e)
            }
            var Er = {
                configKey: "isUserPermissions",
                isDefault: !1,
                shouldRunPerContext: !1,
                shouldRunPerSession: !0,
                shouldRun: !0,
                isFrameRelated: !1,
                runInUns: !1,
                runInSlave: !1,
                isRunning: !1,
                instance: null
            }
              , Cr = function() {
                !function UserPermissions_inherits(e, t) {
                    if ("function" != typeof t && null !== t)
                        throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }),
                    t && UserPermissions_setPrototypeOf(e, t)
                }(UserPermissions, fe);
                var r = UserPermissions_createSuper(UserPermissions);
                function UserPermissions(e) {
                    var t, n = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : window.navigator;
                    return function UserPermissions_classCallCheck(e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, UserPermissions),
                    (t = r.call(this))._permDefs = {
                        granted: 1,
                        prompt: 2,
                        denied: 3,
                        true: 1,
                        false: 3
                    },
                    t._permissions = ["geolocation", "midi", "notifications", "push"],
                    t._dataQ = e,
                    t._navigator = n,
                    t
                }
                return function UserPermissions_createClass(e, t, n) {
                    t && UserPermissions_defineProperties(e.prototype, t),
                    n && UserPermissions_defineProperties(e, n)
                }(UserPermissions, [{
                    key: "startFeature",
                    value: function startFeature() {
                        this._reportQueryPermissions(),
                        this._reportStoragePermission(),
                        this._reportMicCameraPermissions()
                    }
                }, {
                    key: "_reportQueryPermissions",
                    value: function _reportQueryPermissions() {
                        var r = this;
                        this._navigator.permissions && this._navigator.permissions.query && function() {
                            for (var n = C, e = function _loop(e) {
                                var t = r._permissions[e];
                                r._navigator.permissions.query({
                                    name: t
                                }).then(function(e) {
                                    e = r._permDefs[e.state] || -1;
                                    r._dataQ.addToQueue("static_fields", ["per_".concat(t), e], !1)
                                }).catch(function(e) {
                                    n.debug("Failed querying for ".concat(t, " permissions ").concat(e.message))
                                })
                            }, t = 0; t < r._permissions.length; t++)
                                e(t)
                        }()
                    }
                }, {
                    key: "_reportStoragePermission",
                    value: function _reportStoragePermission() {
                        var t = this;
                        this._navigator.storage && this._navigator.storage.persisted && this._navigator.storage.persisted().then(function(e) {
                            t._dataQ.addToQueue("static_fields", ["per_storage", t._permDefs[e] || -1], !1)
                        }).catch(function(e) {
                            C.debug("Failed to check storage persisted: ".concat(e.message))
                        })
                    }
                }, {
                    key: "_reportMicCameraPermissions",
                    value: function _reportMicCameraPermissions() {
                        var n = this
                          , r = {
                            audio: !1,
                            video: !1
                        };
                        this._navigator.mediaDevices && this._navigator.mediaDevices.enumerateDevices && this._navigator.mediaDevices.enumerateDevices().then(function(e) {
                            e.forEach(function(e) {
                                var t;
                                !function isAlreadyReported(e) {
                                    return e.includes("audio") && r.audio || e.includes("video") && r.video
                                }(e.kind) && (t = function updateReported(e) {
                                    return e.includes("audio") ? (r.audio = !0,
                                    "audio") : e.includes("video") ? (r.video = !0,
                                    "video") : void 0
                                }(e.kind),
                                e = "" !== e.label ? n._permDefs.granted : n._permDefs.denied,
                                n._dataQ.addToQueue("static_fields", ["per_".concat(t), e], !1))
                            })
                        }).catch(function(e) {
                            C.debug("UserPermissions:startFeature failed to enumerateDevices: ".concat(e.message))
                        })
                    }
                }], [{
                    key: "getDefaultSettings",
                    value: function getDefaultSettings() {
                        return Er
                    }
                }]),
                UserPermissions
            }();
            function IsPrivateBrowsingFeature_typeof(e) {
                return (IsPrivateBrowsingFeature_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function _typeof(e) {
                    return typeof e
                }
                : function _typeof(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }
                )(e)
            }
            function IsPrivateBrowsingFeature_defineProperties(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            function IsPrivateBrowsingFeature_setPrototypeOf(e, t) {
                return (IsPrivateBrowsingFeature_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(e, t) {
                    return e.__proto__ = t,
                    e
                }
                )(e, t)
            }
            function IsPrivateBrowsingFeature_createSuper(n) {
                var r = function IsPrivateBrowsingFeature_isNativeReflectConstruct() {
                    if ("undefined" == typeof Reflect || !Reflect.construct)
                        return !1;
                    if (Reflect.construct.sham)
                        return !1;
                    if ("function" == typeof Proxy)
                        return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})),
                        !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function _createSuperInternal() {
                    var e, t = IsPrivateBrowsingFeature_getPrototypeOf(n);
                    return function IsPrivateBrowsingFeature_possibleConstructorReturn(e, t) {
                        return !t || "object" !== IsPrivateBrowsingFeature_typeof(t) && "function" != typeof t ? function IsPrivateBrowsingFeature_assertThisInitialized(e) {
                            if (void 0 !== e)
                                return e;
                            throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
                        }(e) : t
                    }(this, r ? (e = IsPrivateBrowsingFeature_getPrototypeOf(this).constructor,
                    Reflect.construct(t, arguments, e)) : t.apply(this, arguments))
                }
            }
            function IsPrivateBrowsingFeature_getPrototypeOf(e) {
                return (IsPrivateBrowsingFeature_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                }
                )(e)
            }
            var Sr = {
                configKey: "isPrivateBrowsing",
                isDefault: !1,
                shouldRunPerContext: !1,
                shouldRunPerSession: !0,
                shouldRun: !0,
                isFrameRelated: !1,
                runInUns: !0,
                runInSlave: !1,
                isRunning: !1,
                instance: null
            }
              , wr = function() {
                !function IsPrivateBrowsingFeature_inherits(e, t) {
                    if ("function" != typeof t && null !== t)
                        throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }),
                    t && IsPrivateBrowsingFeature_setPrototypeOf(e, t)
                }(IsPrivateBrowsingFeature, fe);
                var r = IsPrivateBrowsingFeature_createSuper(IsPrivateBrowsingFeature);
                function IsPrivateBrowsingFeature(e, t) {
                    var n;
                    return function IsPrivateBrowsingFeature_classCallCheck(e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, IsPrivateBrowsingFeature),
                    (n = r.call(this))._dataQ = e,
                    n._privateBrowsingDetector = t,
                    n
                }
                return function IsPrivateBrowsingFeature_createClass(e, t, n) {
                    t && IsPrivateBrowsingFeature_defineProperties(e.prototype, t),
                    n && IsPrivateBrowsingFeature_defineProperties(e, n)
                }(IsPrivateBrowsingFeature, [{
                    key: "startFeature",
                    value: function startFeature() {
                        var t = this;
                        this._privateBrowsingDetector.detectPrivateMode(function(e) {
                            t._dataQ.addToQueue("static_fields", ["is_private_browsing", e], !1)
                        })
                    }
                }], [{
                    key: "getDefaultSettings",
                    value: function getDefaultSettings() {
                        return Sr
                    }
                }]),
                IsPrivateBrowsingFeature
            }();
            function FontsDetectionFeature_typeof(e) {
                return (FontsDetectionFeature_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function _typeof(e) {
                    return typeof e
                }
                : function _typeof(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }
                )(e)
            }
            function FontsDetectionFeature_defineProperties(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            function FontsDetectionFeature_setPrototypeOf(e, t) {
                return (FontsDetectionFeature_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(e, t) {
                    return e.__proto__ = t,
                    e
                }
                )(e, t)
            }
            function FontsDetectionFeature_createSuper(n) {
                var r = function FontsDetectionFeature_isNativeReflectConstruct() {
                    if ("undefined" == typeof Reflect || !Reflect.construct)
                        return !1;
                    if (Reflect.construct.sham)
                        return !1;
                    if ("function" == typeof Proxy)
                        return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})),
                        !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function _createSuperInternal() {
                    var e, t = FontsDetectionFeature_getPrototypeOf(n);
                    return function FontsDetectionFeature_possibleConstructorReturn(e, t) {
                        return !t || "object" !== FontsDetectionFeature_typeof(t) && "function" != typeof t ? function FontsDetectionFeature_assertThisInitialized(e) {
                            if (void 0 !== e)
                                return e;
                            throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
                        }(e) : t
                    }(this, r ? (e = FontsDetectionFeature_getPrototypeOf(this).constructor,
                    Reflect.construct(t, arguments, e)) : t.apply(this, arguments))
                }
            }
            function FontsDetectionFeature_getPrototypeOf(e) {
                return (FontsDetectionFeature_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                }
                )(e)
            }
            var kr = {
                configKey: "isFonts",
                isDefault: !1,
                shouldRunPerContext: !1,
                shouldRunPerSession: !0,
                shouldRun: !0,
                isFrameRelated: !1,
                runInUns: !0,
                runInSlave: !1,
                isRunning: !1,
                instance: null
            }
              , Pr = function() {
                !function FontsDetectionFeature_inherits(e, t) {
                    if ("function" != typeof t && null !== t)
                        throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }),
                    t && FontsDetectionFeature_setPrototypeOf(e, t)
                }(FontsDetectionFeature, fe);
                var o = FontsDetectionFeature_createSuper(FontsDetectionFeature);
                function FontsDetectionFeature(e, t, n, r) {
                    var i;
                    return function FontsDetectionFeature_classCallCheck(e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, FontsDetectionFeature),
                    (i = o.call(this))._utils = e,
                    i._domUtils = t,
                    i._dataQ = n,
                    i._fontDetectorCtor = r,
                    i._storageKeyName = "detectedFonts_2.1.5",
                    i._legacyStorageKeyName = "detectedFonts",
                    i._serif_fonts = ["adobe jenson", "adobe text", "albertus", "aldus", "alexandria", "algerian", "american typewriter", "antiqua", "arno", "aster", "aurora", "baskerville", "bell", "bembo", "bembo schoolbook", "benguiat", "berkeley old style", "bernhard modern", "bodoni", "book antiqua", "bookman", "bordeaux roman", "californian fb", "calisto", "capitals", "cambria", "cartier", "caslon", "caslon antique", "catull", "centaur", "century old style", "century schoolbook", "new century schoolbook", "chaparral", "charis sil", "cheltenham", "clearface", "cochin", "colonna", "computer modern", "concrete roman", "constantia", "cooper black", "corona", "dejavu fonts", "ecotype", "elephant", "espy serif", "excelsior", "fairfield", "ff scala", "footlight", "freeserif", "friz quadrata", "garamond", "gentium", "georgia", "gloucester", "goudy old style", "goudy schoolbook", "goudy pro font", "granjon", "heather", "hercules", "high tower text", "hiroshige", "hoefler text", "humana serif", "imprint", "ionic no. 5", "janson", "jenson", "joanna", "korinna", "kursivschrift", "legacy serif", "lexicon", "liberation fonts", "linux libertine", "literaturnaya", "lucida", "melior", "memphis", "miller", "minion", "didone", "mona lisa", "mrs eaves", "ms serif", "new york", "nimbus roman", "nps rawlinson roadway", "ocr a extended", "palatino", "perpetua", "plantin", "plantin schoolbook", "playbill", "poor richard", "rawlinson roadway", "renault", "requiem", "roman", "rotis serif", "sabon", "seagull", "sistina", "souvenir", "stix", "stone informal", "stone serif", "sylfaen", "times new roman", "times", "trajan", "trinité", "trump mediaeval", "utopia", "vale type", "bitstream vera", "versailles", "wanted", "weiss", "wide latin", "windsor", "xits", "apex", "archer", "athens", "city", "cholla slab", "clarendon", "courier", "egyptienne", "guardian egyptian", "lexia", "museo slab", "rockwell", "nilland", "skeleton antique", "tower"],
                    i._sans_serif_fonts = ["abadi", "agency fb", "akzidenz grotesk", "aptifer", "arial", "arial unicode ms", "avant garde", "avenir", "bank gothic", "barmeno", "bauhaus", "bell centennial", "bell gothic", "benguiat gothic", "berlin sans", "beteckna", "brandon grotesque", "cabin", "cafeteria", "calibri", "century gothic", "charcoal", "chicago", "clearface gothic", "clearview", "co headline", "co text", "compacta", "corbel", "ff dax", "dotum", "droid", "dyslexie", "ecofont", "eras", "espy sans", "nu sans", "eurocrat", "eurostile", "ff meta", "flama", "formata", "freesans", "franklin gothic", "frutiger", "futura", "geneva", "gill sans", "gill sans schoolbook", "gotham", "handel gothic", "denmark", "haettenschweiler", "hei", "helvetica", "helvetica neue", "swiss 721", "highway gothic", "hiroshige sans", "hobo", "impact", "industria", "interstate", "johnston", "kabel", "lato", "legacy sans", "lexia readable", "meiryo", "microgramma", "motorway", "ms sans serif", "museo sans", "myriad", "neutraface", "neuzeit s", "news gothic", "nimbus sans l", "nina", "optima", "parisine", "pricedown", "prima sans", "pt sans", "rail alphabet", "revue", "roboto", "rotis sans", "ff scala sans", "segoe", "skia", "souvenir gothic", "stone sans", "syntax", "tahoma", "template gothic", "tiresias", "trade gothic", "transport alphabet", "trebuchet ms", "trump gothic", "tw cen", "twentieth century", "ubuntu font family", "univers", "zurich", "verdana", "virtue"],
                    i._monospace_fonts = ["andale mono", "anonymous", "consolas", "courierhp", "courier new", "courierps", "fontcraft courier", "everson mono", "fedra mono", "fixed", "fixedsys", "fixedsys excelsior", "inconsolata", "hyperfont", "letter gothic", "magnetic ink character recognition", "menlo", "miriam fixed", "monaco", "monofur", "monospace", "ms gothic", "ms mincho", "nimbus mono l", "ocr-a", "ocr-b", "orator", "ormaxx", "pragmatapro", "prestige elite", "profont", "proggy programming fonts", "small fonts", "sydnie", "terminal", "tex gyre cursor", "um typewriter", "william monospace", "balloon", "brush script", "dragonwick", "choc", "dom casual", "mistral", "papyrus", "tempus sans", "amazone", "ams euler", "apple chancery", "aristocrat", "bickley script", "civitype", "codex", "edwardian script", "forte", "french script", "kuenstler script", "monotype corsiva", "old english text mt", "palace script", "park avenue", "scriptina", "shelley volante", "vivaldi", "vladimir script", "zapf chancery", "zapfino", "andy", "ashley script", "chalkboard", "comic sans", "cezanne", "fontoon", "irregularis", "jefferson", "kristen", "lucida handwriting", "rage italic", "rufscript", "scribble", "soupbone", "tekton", "alecko", "cinderella", "cupola", "curlz", "magnificat", "script", "american text", "cloister black", "fraktur", "goudy text", "old english text", "wedding text", "aegyptus", "aharoni", "aisha", "amienne", "batak script", "chandas", "hanacaraka", "japanese gothic typeface", "jomolhari", "kochi font", "lontara script", "maiola", "minchō", "mona font", "nassim", "nastaliq navees", "neacademia", "perpetua greek", "simsun", "skolar", "skolar devanagari", "sundanese unicode", "sutturah", "tai le valentinium", "tengwar", "tibetan machine uni", "tunga", "wadalab", "apple symbols", "bookshelf symbol 7", "braille", "commercial pi", "corel", "erler dingbats", "hm phonetic", "mathematical pi", "morse code", "opensymbol", "richstyle", "symbol", "symbolps", "wingdings", "wingdings 2", "wingdings 3", "webdings", "zapf dingbats", "abracadabra", "ad lib", "allegro", "andreas", "arnold böcklin", "astur", "balloon pop outlaw black", "banco", "beat", "braggadocio", "broadway", "ellington", "exablock", "exocet", "fig script", "gigi", "harlow solid", "harrington", "horizon", "jim crow", "jokerman", "juice", "lo-type", "magneto", "megadeth", "neuland", "peignot", "ravie", "san francisco", "showcard gothic", "snap", "stencil", "umbra", "westminster", "willow", "bagel", "lithos", "aldhabi", "andalus", "angsana new", "angsanaupc", "aparajita", "arabic typesetting", "arial black", "arial narrow", "arial rounded mt bold", "baskerville old face", "batang", "batangche", "bauhaus 93", "bell mt", "berlin sans fb", "berlin sans fb demi", "bernard mt condensed", "blackadder itc", "bodoni mt", "bodoni mt black", "bodoni mt condensed", "bodoni mt poster compressed", "bookman old style", "bradley hand itc", "britannic bold", "browallia new", "browalliaupc", "brush script mt", "buxton sketch", "calibri light", "calisto mt", "cambria math", "candara", "castellar", "century", "chiller", "colonna mt", "comic sans ms", "copperplate gothic bold", "copperplate gothic light", "cordia new", "cordiaupc", "curlz mt", "daunpenh", "david", "dfkai-sb", "dilleniaupc", "dokchampa", "dotumche", "ebrima", "edwardian script itc", "engravers mt", "eras bold itc", "eras demi itc", "eras light itc", "eras medium itc", "estrangelo edessa", "eucrosiaupc", "euphemia", "fangsong", "felix titling", "footlight mt light", "franklin gothic book", "franklin gothic demi", "franklin gothic demi cond", "franklin gothic heavy", "franklin gothic medium", "franklin gothic medium cond", "frankruehl", "freesiaupc", "freestyle script", "french script mt", "gabriola", "gadugi", "gautami", "gill sans mt", "gill sans mt condensed", "gill sans mt ext condensed bold", "gill sans ultra bold", "gill sans ultra bold condensed", "gisha", "gloucester mt extra condensed", "goudy stout", "gulim", "gulimche", "gungsuh", "gungsuhche", "harlow solid italic", "imprint mt shadow", "informal roman", "irisupc", "iskoola pota", "jasmineupc", "javanese text", "juice itc", "kaiti", "kalinga", "kartika", "khmer ui", "kodchiangupc", "kokila", "kristen itc", "kunstler script", "lao ui", "latha", "leelawadee", "leelawadee ui", "leelawadee ui semilight", "levenim mt", "lilyupc", "lucida bright", "lucida calligraphy", "lucida console", "lucida fax", "lucida sans", "lucida sans typewriter", "lucida sans unicode", "maiandra gd", "malgun gothic", "mangal", "marlett", "matura mt script capitals", "meiryo ui", "microsoft himalaya", "microsoft jhenghei", "microsoft jhenghei light", "microsoft jhenghei ui", "microsoft jhenghei ui light", "microsoft new tai lue", "microsoft phagspa", "microsoft sans serif", "microsoft tai le", "microsoft uighur", "microsoft yahei", "microsoft yahei light", "microsoft yahei ui", "microsoft yahei ui light", "microsoft yi baiti", "mingliu", "mingliu-extb", "mingliu_hkscs", "mingliu_hkscs-extb", "miriam", "modern", "modern no. 20", "mongolian baiti", "moolboran", "ms outlook", "ms pgothic", "ms pmincho", "ms reference sans serif", "ms reference specialty", "ms ui gothic", "mt extra", "mv boli", "myanmar text", "narkisim", "niagara engraved", "niagara solid", "nirmala ui", "nirmala ui semilight", "nsimsun", "nyala", "onyx", "palace script mt", "palatino linotype", "parchment", "perpetua titling mt", "plantagenet cherokee", "pmingliu", "pmingliu-extb", "pristina", "raavi", "rockwell condensed", "rockwell extra bold", "rod", "sakkal majalla", "script mt bold", "segoe marker", "segoe print", "segoe script", "segoe ui", "segoe ui black", "segoe ui emoji", "segoe ui light", "segoe ui semibold", "segoe ui semilight", "segoe ui symbol", "shonar bangla", "shruti", "simhei", "simplified arabic", "simplified arabic fixed", "simsun-extb", "sitka banner", "sitka display", "sitka heading", "sitka small", "sitka subheading", "sitka text", "sketchflow print", "snap itc", "system", "tempus sans itc", "traditional arabic", "tw cen mt", "tw cen mt condensed", "tw cen mt condensed extra bold", "urdu typesetting", "utsaah", "vani", "vijaya", "viner hand itc", "vrinda", "yu gothic", "yu gothic light", "yu mincho", "yu mincho demibold", "yu mincho light"],
                    i
                }
                return function FontsDetectionFeature_createClass(e, t, n) {
                    t && FontsDetectionFeature_defineProperties(e.prototype, t),
                    n && FontsDetectionFeature_defineProperties(e, n)
                }(FontsDetectionFeature, [{
                    key: "startFeature",
                    value: function startFeature() {
                        var t = this;
                        C.info("Collecting Fonts");
                        var n = (n = this._utils.StorageUtils.getFromLocalStorage(this._storageKeyName)) || this._utils.StorageUtils.getFromLocalStorage(this._legacyStorageKeyName)
                          , r = this._utils.StorageUtils.getFromLocalStorage(this._legacyStorageKeyName, !1);
                        r && C.info("Detected legacy fonts data in the local storage. Will send them to server."),
                        n && this._utils.StorageUtils.saveToLocalStorage(this._storageKeyName, n),
                        this._detectFonts(function(e) {
                            (!n || 600 <= n.split(",").length) && (n = e,
                            t._utils.StorageUtils.saveToLocalStorage(t._storageKeyName, n)),
                            t._updateFonts(n, e, r),
                            C.info("Fonts collected")
                        })
                    }
                }, {
                    key: "_detectFonts",
                    value: function _detectFonts(i) {
                        var e = this;
                        this._domUtils.onDocumentBody(window, function() {
                            var r = new e._fontDetectorCtor(e._domUtils);
                            r.init(function() {
                                var t, n = e;
                                r.detectByChunksWithIndex.cdCallAsync(r, n._serif_fonts, 2, function(e) {
                                    t = e,
                                    r.detectByChunksWithIndex.cdCallAsync(r, n._sans_serif_fonts, 1, function(e) {
                                        t = t.concat(e),
                                        r.detectByChunksWithIndex.cdCallAsync(r, n._monospace_fonts, 0, function(e) {
                                            600 <= (t = t.concat(e)).length ? (e = r.getAllFontsDiffs(),
                                            n._dataQ.addToQueue("static_fields", ["problematic_fonts", e], !1)) : i(t.toString()),
                                            r.clear()
                                        })
                                    })
                                })
                            })
                        })
                    }
                }, {
                    key: "_updateFonts",
                    value: function _updateFonts(e, t, n) {
                        this._dataQ.addToQueue("static_fields", ["fonts", e], !1),
                        this._dataQ.addToQueue("static_fields", ["fonts_not_cached", t], !1),
                        n && this._dataQ.addToQueue("static_fields", ["legacy_fonts", n], !1)
                    }
                }], [{
                    key: "getDefaultSettings",
                    value: function getDefaultSettings() {
                        return kr
                    }
                }]),
                FontsDetectionFeature
            }();
            function PrivateBrowsingDetector_defineProperties(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            var Or = function() {
                function PrivateBrowsingDetector() {
                    !function PrivateBrowsingDetector_classCallCheck(e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, PrivateBrowsingDetector)
                }
                return function PrivateBrowsingDetector_createClass(e, t, n) {
                    t && PrivateBrowsingDetector_defineProperties(e.prototype, t),
                    n && PrivateBrowsingDetector_defineProperties(e, n)
                }(PrivateBrowsingDetector, [{
                    key: "detectPrivateMode",
                    value: function detectPrivateMode(e) {
                        this._isWebkitBrowser() ? this._detectPrivateBrowsingOnWebkit(e) : this._isMozillaBrowser() ? this._detectPrivateBrowsingOnMozilla(e) : this._isIE10OrLater(window.navigator.userAgent) ? this._detectPrivateBrowsingOnIESinceVersion10(e) : window.localStorage && /Safari/.test(window.navigator.userAgent) ? this._detectPrivateBrowsingOnSafari(e) : e(null)
                    }
                }, {
                    key: "_isWebkitBrowser",
                    value: function _isWebkitBrowser() {
                        return !!window.webkitRequestFileSystem
                    }
                }, {
                    key: "_isMozillaBrowser",
                    value: function _isMozillaBrowser() {
                        return "MozAppearance"in document.documentElement.style
                    }
                }, {
                    key: "_isIE10OrLater",
                    value: function _isIE10OrLater(e) {
                        var t = e.toLowerCase();
                        if (0 === t.indexOf("msie") && 0 === t.indexOf("trident"))
                            return !1;
                        var n = /(?:msie|rv:)\s?([\d\.]+)/.exec(t);
                        if (n && 10 <= parseInt(n[1], 10))
                            return !0;
                        if ((n = "documentElement"in document && ("filters"in document.documentElement || "documentMode"in document),
                        n && document.documentMode) && 10 <= parseFloat((t.match(/.+(?:ie|rv)[\/: ]([\d.]+)/) || [])[1]))
                            return !0;
                        n = /edge/.test(t);
                        e = !!t.match(/trident\/7\./);
                        if ((n || e) && 10 <= parseFloat((t.match(/.+(?:edge|rv)[\/: ]([\d.]+)/) || [])[1]))
                            return !0;
                        return !1
                    }
                }, {
                    key: "_detectPrivateBrowsingOnWebkit",
                    value: function _detectPrivateBrowsingOnWebkit(e) {
                        void 0 !== navigator.storage && "function" == typeof navigator.storage.estimate ? this._storageEstimateDetectionOnWebkit(e) : this._fileSystemDetectionOnWebkit(e)
                    }
                }, {
                    key: "_fileSystemDetectionOnWebkit",
                    value: function _fileSystemDetectionOnWebkit(e) {
                        window.webkitRequestFileSystem(window.TEMPORARY, 1, function() {
                            e(!1)
                        }, function() {
                            e(!0)
                        })
                    }
                }, {
                    key: "_storageEstimateDetectionOnWebkit",
                    value: function _storageEstimateDetectionOnWebkit(t) {
                        navigator.storage.estimate().then(function(e) {
                            e = e.quota;
                            t(e < 12e7)
                        }).catch(function(e) {
                            C.error("failed to detect private browsing", e)
                        })
                    }
                }, {
                    key: "_detectPrivateBrowsingOnMozilla",
                    value: function _detectPrivateBrowsingOnMozilla(t) {
                        try {
                            var e = (indexedDB || window.indexedDB).open("test");
                            e.onerror = function() {
                                t(!0)
                            }
                            ,
                            e.onsuccess = function() {
                                t(!1)
                            }
                        } catch (e) {
                            t(!0)
                        }
                    }
                }, {
                    key: "_detectPrivateBrowsingOnIESinceVersion10",
                    value: function _detectPrivateBrowsingOnIESinceVersion10(e) {
                        var t = !1;
                        try {
                            window.indexedDB || (t = !0)
                        } catch (e) {
                            t = !0
                        }
                        e(t)
                    }
                }, {
                    key: "_detectPrivateBrowsingOnSafari",
                    value: function _detectPrivateBrowsingOnSafari(e) {
                        var t;
                        try {
                            window.openDatabase(null, null, null, null)
                        } catch (e) {
                            t = !0
                        }
                        try {
                            window.localStorage.setItem("test", 1)
                        } catch (e) {
                            t = !0
                        }
                        t || (t = !1,
                        window.localStorage.removeItem("test")),
                        e(t)
                    }
                }]),
                PrivateBrowsingDetector
            }();
            function PointerHoverDetector_defineProperties(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            var Rr = 1
              , Fr = 2
              , Dr = 3
              , Mr = 4
              , Tr = 5
              , Br = 1
              , xr = 2
              , Ir = 3
              , Ar = 4
              , Lr = function() {
                function PointerHoverDetector() {
                    !function PointerHoverDetector_classCallCheck(e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, PointerHoverDetector)
                }
                return function PointerHoverDetector_createClass(e, t, n) {
                    t && PointerHoverDetector_defineProperties(e.prototype, t),
                    n && PointerHoverDetector_defineProperties(e, n)
                }(PointerHoverDetector, null, [{
                    key: "getPointerHover",
                    value: function getPointerHover() {
                        var e, t = {
                            pointer: Tr,
                            hover: Tr
                        };
                        return window.matchMedia && ((e = window.matchMedia)("( any-pointer: fine )").matches ? t.pointer = Rr : e("( any-pointer: coarse )").matches ? t.pointer = Fr : e("( any-pointer: none )").matches ? t.pointer = Dr : e("( any-pointer )").matches && (t.pointer = Mr),
                        e("( any-hover: hover )").matches ? t.hover = Br : e("( any-hover: on-demand )").matches ? t.hover = xr : e("( any-hove: none )").matches ? t.hover = Ir : window.matchMedia("( any-hover )").matches && (t.hover = Ar)),
                        t
                    }
                }]),
                PointerHoverDetector
            }();
            function FontsDetector_defineProperties(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            var Ur = function() {
                function FontsDetector(e) {
                    !function FontsDetector_classCallCheck(e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, FontsDetector),
                    this._domUtils = e,
                    this._baseFonts = ["monospace", "sans-serif", "serif"],
                    this._testString = "mmmmmmmmmmlli",
                    this._testSize = "72px",
                    this._chunkSize = 30,
                    this._defaultWidth = {},
                    this._defaultHeight = {},
                    this._body = null,
                    this._iframe = null,
                    this._spanArray = null,
                    this._allFontsDiffs = []
                }
                return function FontsDetector_createClass(e, t, n) {
                    t && FontsDetector_defineProperties(e.prototype, t),
                    n && FontsDetector_defineProperties(e, n)
                }(FontsDetector, [{
                    key: "clear",
                    value: function clear() {
                        this._body.removeChild(this._iframe),
                        this._iframe = null,
                        this._spanArray = null,
                        this._allFontsDiffs = []
                    }
                }, {
                    key: "init",
                    value: function init(e) {
                        var t = this;
                        if (this._body = document.body,
                        !this._body)
                            return "";
                        this._iframe = document.createElement("iframe"),
                        this._iframe.setAttribute("sandbox", "allow-same-origin"),
                        this._iframe.id = Fe.fontDetectionFrame,
                        this._iframe.style.visibility = "hidden",
                        this._iframe.style.zIndex = "-1",
                        this._iframe.style.width = 0,
                        this._iframe.style.height = 0,
                        this._body.appendChild(this._iframe),
                        this._iframe.contentDocument.body || (this._iframe.style.width = null,
                        this._iframe.style.height = null,
                        this._iframe.contentDocument.appendChild(document.createElement("body"))),
                        this._domUtils.onWindowDocumentReady(this._iframe.contentWindow, function() {
                            t._createCalculationElements(e)
                        })
                    }
                }, {
                    key: "_createCalculationElements",
                    value: function _createCalculationElements(e) {
                        var t = document.createElement("span");
                        t.style.fontSize = this._testSize,
                        t.style.visibility = "hidden",
                        t.style.position = "absolute",
                        t.style.zIndex = "-1",
                        t.style.lineHeight = "normal",
                        t.innerHTML = this._testString;
                        for (var n = 0; n < this._baseFonts.length; n++)
                            t.style.fontFamily = this._baseFonts[n],
                            this._iframe.contentDocument.body.appendChild(t),
                            this._defaultWidth[this._baseFonts[n]] = t.offsetWidth,
                            this._defaultHeight[this._baseFonts[n]] = t.offsetHeight,
                            this._iframe.contentDocument.body.removeChild(t);
                        C.debug("FontsDetector:init - base fonts width: \n                ".concat(this._baseFonts[0], ":").concat(this._defaultWidth[this._baseFonts[0]], ";\n                ").concat(this._baseFonts[1], ":").concat(this._defaultWidth[this._baseFonts[1]], ";\n                ").concat(this._baseFonts[2], ":").concat(this._defaultWidth[this._baseFonts[2]])),
                        C.debug("FontsDetector:init - base fonts height: \n                ".concat(this._baseFonts[0], ":").concat(this._defaultHeight[this._baseFonts[0]], ";\n                ").concat(this._baseFonts[1], ":").concat(this._defaultHeight[this._baseFonts[1]], ";\n                ").concat(this._baseFonts[2], ":").concat(this._defaultHeight[this._baseFonts[2]])),
                        this._createSpanArray(),
                        e()
                    }
                }, {
                    key: "_createSpanArray",
                    value: function _createSpanArray() {
                        var e = document.createElement("div");
                        e.id = "currentDiv",
                        e.style.position = "absolute",
                        e.style.visibility = "hidden";
                        for (var t = 0; t < this._chunkSize; t++) {
                            var n = document.createElement("span");
                            n.style.lineHeight = "normal",
                            n.style.position = "absolute",
                            n.style.zIndex = "-1",
                            n.style.fontSize = this._testSize,
                            n.innerHTML = this._testString,
                            e.appendChild(n);
                            n = document.createElement("br");
                            e.appendChild(n)
                        }
                        this._iframe.contentDocument.body.appendChild(e),
                        this._spanArray = e
                    }
                }, {
                    key: "detectByChunksWithIndex",
                    value: function detectByChunksWithIndex(e, t, n) {
                        var r = []
                          , i = 0
                          , o = 0;
                        if (!this._spanArray)
                            return r;
                        for (var s = this._spanArray.getElementsByTagName("span"), a = this._defaultWidth[this._baseFonts[t]], u = this._defaultHeight[this._baseFonts[t]], c = 0; c < e.length; c++) {
                            if (o >= this._chunkSize)
                                for (var l = o = 0; l < s.length; l++) {
                                    var f = Math.abs(s[l].offsetWidth - a)
                                      , d = Math.abs(s[l].offsetHeight - u);
                                    this._allFontsDiffs.push([s[l].id, f, d]),
                                    (1 < f || 1 < d) && (r[i] = s[l].id,
                                    i++)
                                }
                            s[o].style.fontFamily = e[c] + "," + this._baseFonts[t],
                            s[o].id = e[c],
                            o++
                        }
                        n(r)
                    }
                }, {
                    key: "getAllFontsDiffs",
                    value: function getAllFontsDiffs() {
                        return this._allFontsDiffs
                    }
                }]),
                FontsDetector
            }();
            function ContextPropsFeature_typeof(e) {
                return (ContextPropsFeature_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function _typeof(e) {
                    return typeof e
                }
                : function _typeof(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }
                )(e)
            }
            function ContextPropsFeature_defineProperties(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            function ContextPropsFeature_setPrototypeOf(e, t) {
                return (ContextPropsFeature_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(e, t) {
                    return e.__proto__ = t,
                    e
                }
                )(e, t)
            }
            function ContextPropsFeature_createSuper(n) {
                var r = function ContextPropsFeature_isNativeReflectConstruct() {
                    if ("undefined" == typeof Reflect || !Reflect.construct)
                        return !1;
                    if (Reflect.construct.sham)
                        return !1;
                    if ("function" == typeof Proxy)
                        return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})),
                        !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function _createSuperInternal() {
                    var e, t = ContextPropsFeature_getPrototypeOf(n);
                    return function ContextPropsFeature_possibleConstructorReturn(e, t) {
                        return !t || "object" !== ContextPropsFeature_typeof(t) && "function" != typeof t ? function ContextPropsFeature_assertThisInitialized(e) {
                            if (void 0 !== e)
                                return e;
                            throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
                        }(e) : t
                    }(this, r ? (e = ContextPropsFeature_getPrototypeOf(this).constructor,
                    Reflect.construct(t, arguments, e)) : t.apply(this, arguments))
                }
            }
            function ContextPropsFeature_getPrototypeOf(e) {
                return (ContextPropsFeature_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                }
                )(e)
            }
            var Nr = {
                configKey: "isContextPropsFeature",
                isDefault: !1,
                shouldRunPerContext: !0,
                shouldRunPerSession: !1,
                shouldRun: !0,
                isFrameRelated: !1,
                runInUns: !0,
                runInSlave: !1,
                isRunning: !1,
                instance: null
            }
              , Wr = function() {
                !function ContextPropsFeature_inherits(e, t) {
                    if ("function" != typeof t && null !== t)
                        throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }),
                    t && ContextPropsFeature_setPrototypeOf(e, t)
                }(ContextPropsFeature, fe);
                var i = ContextPropsFeature_createSuper(ContextPropsFeature);
                function ContextPropsFeature(e, t, n) {
                    var r;
                    return function ContextPropsFeature_classCallCheck(e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, ContextPropsFeature),
                    (r = i.call(this))._dataQ = e,
                    r._domUtils = t,
                    r._perfMonitor = n,
                    r
                }
                return function ContextPropsFeature_createClass(e, t, n) {
                    t && ContextPropsFeature_defineProperties(e.prototype, t),
                    n && ContextPropsFeature_defineProperties(e, n)
                }(ContextPropsFeature, [{
                    key: "startFeature",
                    value: function startFeature() {
                        var e, t;
                        self.screen && (e = window.devicePixelRatio || -1,
                        t = window.devicePixelRatio || -1,
                        this._dataQ.addToQueue("static_fields", ["display", [screen.colorDepth, screen.width, screen.height, screen.availHeight || -1, screen.availWidth || -1, e, t]], !1)),
                        this.reportPageLoadTime()
                    }
                }, {
                    key: "reportPageLoadTime",
                    value: function reportPageLoadTime() {
                        var e, t = this;
                        window.performance && window.performance.timing && (e = function calcTime() {
                            window.performance.timing.loadEventEnd && window.performance.timing.navigationStart && t._perfMonitor.reportMonitor("t.timeTillPageLoad", window.performance.timing.loadEventEnd - window.performance.timing.navigationStart)
                        }
                        ,
                        window.performance.timing.loadEventEnd ? e() : this._domUtils.onPageLoad(self, e))
                    }
                }], [{
                    key: "getDefaultSettings",
                    value: function getDefaultSettings() {
                        return Nr
                    }
                }]),
                ContextPropsFeature
            }();
            function ScriptsFeature_typeof(e) {
                return (ScriptsFeature_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function _typeof(e) {
                    return typeof e
                }
                : function _typeof(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }
                )(e)
            }
            function ScriptsFeature_defineProperties(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            function ScriptsFeature_setPrototypeOf(e, t) {
                return (ScriptsFeature_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(e, t) {
                    return e.__proto__ = t,
                    e
                }
                )(e, t)
            }
            function ScriptsFeature_createSuper(n) {
                var r = function ScriptsFeature_isNativeReflectConstruct() {
                    if ("undefined" == typeof Reflect || !Reflect.construct)
                        return !1;
                    if (Reflect.construct.sham)
                        return !1;
                    if ("function" == typeof Proxy)
                        return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})),
                        !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function _createSuperInternal() {
                    var e, t = ScriptsFeature_getPrototypeOf(n);
                    return function ScriptsFeature_possibleConstructorReturn(e, t) {
                        return !t || "object" !== ScriptsFeature_typeof(t) && "function" != typeof t ? ScriptsFeature_assertThisInitialized(e) : t
                    }(this, r ? (e = ScriptsFeature_getPrototypeOf(this).constructor,
                    Reflect.construct(t, arguments, e)) : t.apply(this, arguments))
                }
            }
            function ScriptsFeature_assertThisInitialized(e) {
                if (void 0 === e)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }
            function ScriptsFeature_getPrototypeOf(e) {
                return (ScriptsFeature_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                }
                )(e)
            }
            var jr = {
                configKey: "isScriptsFeature",
                isDefault: !1,
                shouldRunPerContext: !0,
                shouldRunPerSession: !1,
                shouldRun: !0,
                isFrameRelated: !1,
                runInUns: !0,
                runInSlave: !1,
                isRunning: !1,
                instance: null
            }
              , Hr = function() {
                !function ScriptsFeature_inherits(e, t) {
                    if ("function" != typeof t && null !== t)
                        throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }),
                    t && ScriptsFeature_setPrototypeOf(e, t)
                }(ScriptsFeature, fe);
                var r = ScriptsFeature_createSuper(ScriptsFeature);
                function ScriptsFeature(e, t) {
                    var n;
                    return function ScriptsFeature_classCallCheck(e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, ScriptsFeature),
                    (n = r.call(this))._dataQ = e,
                    n._timeoutValue = 1e3,
                    n._scriptsRepository = t,
                    n._runDetectionLoopBinded = n._runDetectionLoop.bind(ScriptsFeature_assertThisInitialized(n)),
                    n
                }
                return function ScriptsFeature_createClass(e, t, n) {
                    t && ScriptsFeature_defineProperties(e.prototype, t),
                    n && ScriptsFeature_defineProperties(e, n)
                }(ScriptsFeature, [{
                    key: "_checkScriptsData",
                    value: function _checkScriptsData() {
                        for (var e = document.scripts, t = 0; t < e.length; t++) {
                            var n = {
                                src: e[t].src,
                                text: e[t].text
                            };
                            this._scriptsRepository.exists(n) || (this._scriptsRepository.add(n),
                            this._dataQ.addToQueue("scripts", [null, n.src, n.textHash]))
                        }
                    }
                }, {
                    key: "_runDetectionLoop",
                    value: function _runDetectionLoop() {
                        this._checkScriptsData(),
                        this._timer = setTimeout(this._runDetectionLoopBinded, this._timeoutValue),
                        this._timeoutValue < 536870911 && (this._timeoutValue *= 4)
                    }
                }, {
                    key: "startFeature",
                    value: function startFeature() {
                        this._runDetectionLoop()
                    }
                }, {
                    key: "stopFeature",
                    value: function stopFeature() {
                        this._timer && clearTimeout(this._timer)
                    }
                }], [{
                    key: "getDefaultSettings",
                    value: function getDefaultSettings() {
                        return jr
                    }
                }]),
                ScriptsFeature
            }();
            function ScriptsRepository_defineProperties(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            var Qr = function() {
                function ScriptsRepository(e) {
                    !function ScriptsRepository_classCallCheck(e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, ScriptsRepository),
                    this._utils = e,
                    this._scriptList = []
                }
                return function ScriptsRepository_createClass(e, t, n) {
                    t && ScriptsRepository_defineProperties(e.prototype, t),
                    n && ScriptsRepository_defineProperties(e, n)
                }(ScriptsRepository, [{
                    key: "count",
                    value: function count() {
                        return this._scriptList.length
                    }
                }, {
                    key: "exists",
                    value: function exists(e) {
                        /\d\d\d/.test(e.src) && (e.src = this._utils.clearTextFromNumbers(e.src));
                        for (var t = this._utils.getHash(e.text), n = 0; n < this._scriptList.length; n++)
                            if (e.src && e.src === this._scriptList[n].src || t && t === this._scriptList[n].textHash)
                                return !0;
                        return !1
                    }
                }, {
                    key: "add",
                    value: function add(e) {
                        e.textHash = this._utils.getHash(e.text),
                        /\d\d\d/.test(e.src) && (e.src = this._utils.clearTextFromNumbers(e.src)),
                        this._scriptList.push({
                            src: e.src,
                            textHash: e.textHash
                        })
                    }
                }]),
                ScriptsRepository
            }();
            function FilesFeature_typeof(e) {
                return (FilesFeature_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function _typeof(e) {
                    return typeof e
                }
                : function _typeof(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }
                )(e)
            }
            function FilesFeature_defineProperties(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            function FilesFeature_setPrototypeOf(e, t) {
                return (FilesFeature_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(e, t) {
                    return e.__proto__ = t,
                    e
                }
                )(e, t)
            }
            function FilesFeature_createSuper(n) {
                var r = function FilesFeature_isNativeReflectConstruct() {
                    if ("undefined" == typeof Reflect || !Reflect.construct)
                        return !1;
                    if (Reflect.construct.sham)
                        return !1;
                    if ("function" == typeof Proxy)
                        return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})),
                        !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function _createSuperInternal() {
                    var e, t = FilesFeature_getPrototypeOf(n);
                    return function FilesFeature_possibleConstructorReturn(e, t) {
                        return !t || "object" !== FilesFeature_typeof(t) && "function" != typeof t ? function FilesFeature_assertThisInitialized(e) {
                            if (void 0 !== e)
                                return e;
                            throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
                        }(e) : t
                    }(this, r ? (e = FilesFeature_getPrototypeOf(this).constructor,
                    Reflect.construct(t, arguments, e)) : t.apply(this, arguments))
                }
            }
            function FilesFeature_getPrototypeOf(e) {
                return (FilesFeature_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                }
                )(e)
            }
            var zr = {
                configKey: "isFilesFeature",
                isDefault: !1,
                shouldRunPerContext: !1,
                shouldRunPerSession: !0,
                shouldRun: !0,
                isFrameRelated: !1,
                runInUns: !1,
                runInSlave: !1,
                isRunning: !1,
                instance: null
            }
              , t = function() {
                !function FilesFeature_inherits(e, t) {
                    if ("function" != typeof t && null !== t)
                        throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }),
                    t && FilesFeature_setPrototypeOf(e, t)
                }(FilesFeature, fe);
                var s = FilesFeature_createSuper(FilesFeature);
                function FilesFeature(e, t, n, r, i) {
                    var o;
                    return function FilesFeature_classCallCheck(e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, FilesFeature),
                    (o = s.call(this))._utils = t,
                    o._configurationRepository = e,
                    o._sessionService = n,
                    o._muidMgr = r,
                    o._cidCache = i,
                    o
                }
                return function FilesFeature_createClass(e, t, n) {
                    t && FilesFeature_defineProperties(e.prototype, t),
                    n && FilesFeature_defineProperties(e, n)
                }(FilesFeature, [{
                    key: "getFiles",
                    value: function getFiles() {
                        if (this._customerId && this._muid && this._sid && this._addrList && 0 < this._addrList.length)
                            for (var e, t = 0; t < this._addrList.length; t++)
                                e = this._addrList[t] + "?cid=" + this._customerId + "&snum=" + this._sid + "&muid=" + this._muid,
                                this._utils.getPostUrl(e, "GET", null, null, null),
                                this._isSent = !0
                    }
                }, {
                    key: "startFeature",
                    value: function startFeature() {
                        this._isSent = !1;
                        try {
                            this._addrList = JSON.parse(this._configurationRepository.get("getAddrList"))
                        } catch (e) {
                            this._addrList = ""
                        }
                        this._customerId = this._cidCache.get() || "",
                        this._muid = this._muidMgr.muid || "",
                        this._sid = this._sessionService.sessionId || "",
                        this.getFiles()
                    }
                }, {
                    key: "updateFeatureConfig",
                    value: function updateFeatureConfig() {
                        try {
                            this._addrList = JSON.parse(this._configurationRepository.get("getAddrList"))
                        } catch (e) {
                            this._addrList = ""
                        }
                        this._customerId = this._cidCache.get() || "",
                        this._muid = this._muidMgr.muid || "",
                        this._sid = this._sessionService.sessionId || "",
                        this._isSent || this.getFiles()
                    }
                }], [{
                    key: "getDefaultSettings",
                    value: function getDefaultSettings() {
                        return zr
                    }
                }]),
                FilesFeature
            }();
            function MetadataCollector_typeof(e) {
                return (MetadataCollector_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function _typeof(e) {
                    return typeof e
                }
                : function _typeof(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }
                )(e)
            }
            function MetadataCollector_defineProperties(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            function MetadataCollector_setPrototypeOf(e, t) {
                return (MetadataCollector_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(e, t) {
                    return e.__proto__ = t,
                    e
                }
                )(e, t)
            }
            function MetadataCollector_createSuper(n) {
                var r = function MetadataCollector_isNativeReflectConstruct() {
                    if ("undefined" == typeof Reflect || !Reflect.construct)
                        return !1;
                    if (Reflect.construct.sham)
                        return !1;
                    if ("function" == typeof Proxy)
                        return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})),
                        !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function _createSuperInternal() {
                    var e, t = MetadataCollector_getPrototypeOf(n);
                    return function MetadataCollector_possibleConstructorReturn(e, t) {
                        return !t || "object" !== MetadataCollector_typeof(t) && "function" != typeof t ? MetadataCollector_assertThisInitialized(e) : t
                    }(this, r ? (e = MetadataCollector_getPrototypeOf(this).constructor,
                    Reflect.construct(t, arguments, e)) : t.apply(this, arguments))
                }
            }
            function MetadataCollector_assertThisInitialized(e) {
                if (void 0 === e)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }
            function MetadataCollector_getPrototypeOf(e) {
                return (MetadataCollector_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                }
                )(e)
            }
            var qr = {
                configKey: "isMetadataCollect",
                isDefault: !0,
                shouldRunPerContext: !1,
                shouldRunPerSession: !1,
                shouldRun: !0,
                isFrameRelated: !1,
                runInSlave: !0,
                runInUns: !1,
                isRunning: !1,
                instance: null
            }
              , j = function() {
                !function MetadataCollector_inherits(e, t) {
                    if ("function" != typeof t && null !== t)
                        throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }),
                    t && MetadataCollector_setPrototypeOf(e, t)
                }(MetadataCollector, fe);
                var o = MetadataCollector_createSuper(MetadataCollector);
                function MetadataCollector(e, t, n, r) {
                    var i;
                    return function MetadataCollector_classCallCheck(e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, MetadataCollector),
                    (i = o.call(this))._configurationRepository = e,
                    i._dataQ = t,
                    i._metaDataSiteMapper = n,
                    i._utils = r,
                    i._metaDataSiteMapper.updateObserver(i.onSiteMapperMatch.bind(MetadataCollector_assertThisInitialized(i))),
                    i
                }
                return function MetadataCollector_createClass(e, t, n) {
                    t && MetadataCollector_defineProperties(e.prototype, t),
                    n && MetadataCollector_defineProperties(e, n)
                }(MetadataCollector, [{
                    key: "startFeature",
                    value: function startFeature() {
                        this._metaDataSiteMapper.initTracking()
                    }
                }, {
                    key: "stopFeature",
                    value: function stopFeature() {
                        this._metaDataSiteMapper.stopTracking()
                    }
                }, {
                    key: "onSiteMapperMatch",
                    value: function onSiteMapperMatch(e) {
                        C.debug("Metadata Collector mapper match - ".concat(JSON.stringify(e))),
                        e.metaVal && this._dataQ.addToQueue("metadata_map", [null, e.metaVal, this._utils.dateNow()])
                    }
                }, {
                    key: "updateFeatureConfig",
                    value: function updateFeatureConfig() {
                        this._metaDataSiteMapper.onConfigUpdate(this._configurationRepository)
                    }
                }], [{
                    key: "getDefaultSettings",
                    value: function getDefaultSettings() {
                        return qr
                    }
                }]),
                MetadataCollector
            }()
              , Kr = null
              , Vr = null
              , Gr = null
              , Yr = null;
            function _bindInputEvents(e) {
                Kr.removeElementEvents(e),
                Kr.addElementEvents(e, !0)
            }
            function _bindOnClickEvents(e) {
                Vr.removeElementEvents(e),
                Vr.addElementEvents(e, !0)
            }
            function _bindOnChangeEvents(e) {
                Gr.removeElementEvents(e),
                Gr.addElementEvents(e, !0)
            }
            function _bindOnFormsEvents(e) {
                Yr.removeElementEvents(e),
                Yr.addElementEvents(e, !0)
            }
            function CrossDomainMuidCollector_ownKeys(t, e) {
                var n, r = Object.keys(t);
                return Object.getOwnPropertySymbols && (n = Object.getOwnPropertySymbols(t),
                e && (n = n.filter(function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                })),
                r.push.apply(r, n)),
                r
            }
            function CrossDomainMuidCollector_objectSpread(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? CrossDomainMuidCollector_ownKeys(Object(n), !0).forEach(function(e) {
                        CrossDomainMuidCollector_defineProperty(t, e, n[e])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : CrossDomainMuidCollector_ownKeys(Object(n)).forEach(function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    })
                }
                return t
            }
            function CrossDomainMuidCollector_typeof(e) {
                return (CrossDomainMuidCollector_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function _typeof(e) {
                    return typeof e
                }
                : function _typeof(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }
                )(e)
            }
            function CrossDomainMuidCollector_classCallCheck(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }
            function CrossDomainMuidCollector_defineProperties(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            function CrossDomainMuidCollector_createClass(e, t, n) {
                return t && CrossDomainMuidCollector_defineProperties(e.prototype, t),
                n && CrossDomainMuidCollector_defineProperties(e, n),
                e
            }
            function CrossDomainMuidCollector_setPrototypeOf(e, t) {
                return (CrossDomainMuidCollector_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(e, t) {
                    return e.__proto__ = t,
                    e
                }
                )(e, t)
            }
            function CrossDomainMuidCollector_createSuper(n) {
                var r = function CrossDomainMuidCollector_isNativeReflectConstruct() {
                    if ("undefined" == typeof Reflect || !Reflect.construct)
                        return !1;
                    if (Reflect.construct.sham)
                        return !1;
                    if ("function" == typeof Proxy)
                        return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})),
                        !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function _createSuperInternal() {
                    var e, t = CrossDomainMuidCollector_getPrototypeOf(n);
                    return function CrossDomainMuidCollector_possibleConstructorReturn(e, t) {
                        return !t || "object" !== CrossDomainMuidCollector_typeof(t) && "function" != typeof t ? CrossDomainMuidCollector_assertThisInitialized(e) : t
                    }(this, r ? (e = CrossDomainMuidCollector_getPrototypeOf(this).constructor,
                    Reflect.construct(t, arguments, e)) : t.apply(this, arguments))
                }
            }
            function CrossDomainMuidCollector_assertThisInitialized(e) {
                if (void 0 === e)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }
            function CrossDomainMuidCollector_getPrototypeOf(e) {
                return (CrossDomainMuidCollector_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                }
                )(e)
            }
            function CrossDomainMuidCollector_defineProperty(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n,
                e
            }
            var Zr = {
                configKey: "isCrossdomain",
                isDefault: !1,
                shouldRunPerContext: !1,
                shouldRunPerSession: !1,
                shouldRun: !0,
                isFrameRelated: !1,
                runInUns: !1,
                runInSlave: !1,
                isRunning: !1,
                instance: null
            }
              , Xr = {
                found: 0,
                new: 1
            }
              , Jr = /(?=(child\-src)|(frame\-src))([^;]+)/gi
              , $r = /http[s]?:\/\/([^\/]+)/gi
              , ei = {
                resource: null,
                iframeElement: !1,
                blockedByCSP: !1,
                iframeLoaded: !1,
                ACKMessageSent: !1,
                ACKMessageRecieved: !1,
                unavailable: !1
            }
              , ti = ["eventSequence", "timestamp", "eventType", "domainUrl", "muid"]
              , ni = function() {
                !function CrossDomainMuidCollector_inherits(e, t) {
                    if ("function" != typeof t && null !== t)
                        throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }),
                    t && CrossDomainMuidCollector_setPrototypeOf(e, t)
                }(CrossDomainMuidCollector, fe);
                var t = CrossDomainMuidCollector_createSuper(CrossDomainMuidCollector);
                function CrossDomainMuidCollector(e) {
                    var o;
                    return CrossDomainMuidCollector_classCallCheck(this, CrossDomainMuidCollector),
                    CrossDomainMuidCollector_defineProperty(CrossDomainMuidCollector_assertThisInitialized(o = t.call(this)), "startFeature", function(e) {
                        o._domainsResources = o._configurationRepository.get(_.crossDomainsList),
                        o._crossDomainsTimeout = o._configurationRepository.get(_.crossDomainsTimeout),
                        Array.isArray(o._domainsResources) && 0 < o._domainsResources.length && (o._windowMessageEmitter.startObserver(e),
                        o._domainsResources.forEach(function(e) {
                            var t = e.match($r);
                            null !== t && "string" == typeof t[0] && (t = t[0],
                            "object" !== CrossDomainMuidCollector_typeof(o._domainsStates[t]) && (o._domainsStates[t] = CrossDomainMuidCollector_objectSpread({}, ei),
                            o._domainsStates[t].resource = e,
                            o._domains.push(t)))
                        }),
                        Array.isArray(o._domains) && 0 < o._domains.length && (o.isBlockedByCSP(e, o._domains),
                        o._domUtils.onDocumentBody(e.Context, function() {
                            o.connectDomains(e)
                        })))
                    }),
                    CrossDomainMuidCollector_defineProperty(CrossDomainMuidCollector_assertThisInitialized(o), "stopFeature", function(e) {
                        o._clearFeaturesObjects(e)
                    }),
                    CrossDomainMuidCollector_defineProperty(CrossDomainMuidCollector_assertThisInitialized(o), "_clearFeaturesObjects", function(t) {
                        o._windowMessageEmitter.stopObserver(t),
                        Array.isArray(o._domains) && 0 < o._domains.length && (o._domains.forEach(function(e) {
                            o.clearDomElements(t, e)
                        }),
                        o._domains = [],
                        o._domainsStates = {})
                    }),
                    CrossDomainMuidCollector_defineProperty(CrossDomainMuidCollector_assertThisInitialized(o), "connectDomains", function(t) {
                        Array.isArray(o._domains) && 0 < o._domains.length && (o._domains.forEach(function(e) {
                            o._domainsStates[e].blockedByCSP || !1 !== o._domainsStates[e].iframeElement || o.createIframe(t, e)
                        }),
                        setTimeout(function() {
                            o._domains.forEach(function(e) {
                                "object" === CrossDomainMuidCollector_typeof(o._domainsStates[e]) && !1 === o._domainsStates[e].ACKMessageRecieved && !1 === o._domainsStates[e].unavailable && (C.warn("Cross Domain feature - domain ".concat(e, " is unavailable")),
                                o._domainsStates[e].unavailable = !0,
                                o.clearDomElements(t, e))
                            })
                        }, o._crossDomainsTimeout))
                    }),
                    CrossDomainMuidCollector_defineProperty(CrossDomainMuidCollector_assertThisInitialized(o), "createIframe", function(e, t) {
                        var n = e.getDocument().createElement("iframe");
                        n.onload = function() {
                            o.postNextMessage(t)
                        }
                        ,
                        n.id = Fe.ignorePrefixFrame + CrossDomainMuidCollector.generateRandomID(),
                        n.src = o._domainsStates[t].resource,
                        n.style.display = "none",
                        n.style.opacity = "0",
                        n.width = "1",
                        n.height = "1",
                        e.getDocument().body.appendChild(n),
                        o._domainsStates[t].iframeElement = n
                    }),
                    CrossDomainMuidCollector_defineProperty(CrossDomainMuidCollector_assertThisInitialized(o), "clearDomElements", function(e, t) {
                        var n = o._domainsStates[t].iframeElement;
                        "object" === CrossDomainMuidCollector_typeof(n) && null !== e.getDocument().getElementById(o._domainsStates[t].iframeElement.id) && e.getDocument().body.removeChild(n)
                    }),
                    CrossDomainMuidCollector_defineProperty(CrossDomainMuidCollector_assertThisInitialized(o), "postNextMessage", function(e) {
                        var t;
                        !o._domainsStates[e].ACKMessageRecieved && o._domainsStates[e].iframeElement && (t = {
                            muid: o._generatedMUID
                        },
                        o._domainsStates[e].iframeElement.contentWindow.postMessage(JSON.stringify(t), e),
                        o._domainsStates[e].ACKMessageSent = !0)
                    }),
                    CrossDomainMuidCollector_defineProperty(CrossDomainMuidCollector_assertThisInitialized(o), "isBlockedByCSP", function(e, n) {
                        if (!Array.isArray(n) || n.length < 1)
                            throw new Error("Domains are expected for content security policy assertion");
                        var r = !1;
                        [].slice.call(e.getDocument().getElementsByTagName("meta")).forEach(function(e) {
                            var t;
                            if ("Content-Security-Policy" === e.getAttribute("http-equiv") && (r = !0,
                            t = e.getAttribute("content").match(Jr),
                            n.forEach(function(e) {
                                t && -1 === t[0].indexOf(e) && "object" === CrossDomainMuidCollector_typeof(o._domainsStates[e]) && (o._domainsStates[e].blockedByCSP = !0,
                                C.warn("Cross Domain feature - domain ".concat(e, " is blocked by CSP")))
                            })),
                            r)
                                return !1
                        })
                    }),
                    CrossDomainMuidCollector_defineProperty(CrossDomainMuidCollector_assertThisInitialized(o), "windowMessageHandler", function(e) {
                        var t = e.message.origin;
                        o._domainsStates.hasOwnProperty(t) && !0 !== o._domainsStates[t].ACKMessageRecieved && (o._domainsStates[t].ACKMessageRecieved = !0,
                        o.clearDomElements(new Te(e.message.currentTarget), t),
                        e = e.message.data,
                        o.sendToQueue(t, e))
                    }),
                    CrossDomainMuidCollector_defineProperty(CrossDomainMuidCollector_assertThisInitialized(o), "sendToQueue", function(e, r) {
                        var i = e.replace(/http[s]?:\/\//i, "");
                        "object" === CrossDomainMuidCollector_typeof(r.found) && Object.keys(r.found).forEach(function(e) {
                            var t = o._utils.StorageUtils.getAndUpdateEventSequenceNumber()
                              , n = i
                              , e = r.found[e].split("__")
                              , e = {
                                eventType: o._eventType.found,
                                eventSequence: t,
                                domainUrl: n,
                                muid: e[0],
                                timestamp: e[1]
                            };
                            o._dataQ.addToQueue("crossmuid_event", o._utils.convertToArrayByMap(ti, e), !0)
                        }),
                        "object" === CrossDomainMuidCollector_typeof(r.new) && Object.keys(r.new).forEach(function(e) {
                            var t = o._utils.StorageUtils.getAndUpdateEventSequenceNumber()
                              , n = i
                              , e = r.new[e].split("__")
                              , e = {
                                eventType: o._eventType.new,
                                eventSequence: t,
                                domainUrl: n,
                                muid: e[0],
                                timestamp: e[1]
                            };
                            o._dataQ.addToQueue("crossmuid_event", o._utils.convertToArrayByMap(ti, e))
                        }),
                        "object" === CrossDomainMuidCollector_typeof(r.error_message) && C.warn("Cross Domain feature - domain ".concat(i, " error. Error Message: \n                ").concat(r.error_message, " Code: ").concat(r.error_code))
                    }),
                    CrossDomainMuidCollector_defineProperty(CrossDomainMuidCollector_assertThisInitialized(o), "updateFeatureConfig", function(e) {
                        o._domainsResources = o._configurationRepository.get("crossDomainsList"),
                        o.updateDomainStates(e)
                    }),
                    CrossDomainMuidCollector_defineProperty(CrossDomainMuidCollector_assertThisInitialized(o), "updateDomainStates", function(e) {
                        Array.isArray(o._domainsResources) && 0 < o._domainsResources.length && (o._domains = [],
                        o._domainsResources.forEach(function(e) {
                            var t = e.match($r);
                            null !== t && "string" == typeof t[0] && (t = t[0],
                            "object" !== CrossDomainMuidCollector_typeof(o._domainsStates[t]) && (o._domainsStates[t] = CrossDomainMuidCollector_objectSpread({}, ei),
                            o._domainsStates[t].resource = e),
                            o._domains.push(t))
                        }),
                        Array.isArray(o._domains) && 0 < o._domains.length && (o.isBlockedByCSP(e, o._domains),
                        o._domUtils.onDocumentBody(e.Context, function() {
                            o.connectDomains(e)
                        })))
                    }),
                    o._configurationRepository = e.configurationRepository,
                    o._dataQ = e.dataQ,
                    o._utils = e.utils,
                    o._domUtils = e.domUtils,
                    o._eventType = e.eventType,
                    o._messageBus = e.messageBus,
                    o._windowMessageEmitter = e.windowMessageEventEmitter,
                    o._messageBus.subscribe(ce.WindowMessageEvent, o.windowMessageHandler),
                    o._generatedMUID = o._utils.dateNow() + "-" + o._utils.generateUUID().toUpperCase(),
                    o._domainsStates = {},
                    o._domainsResources = [],
                    o._domains = [],
                    o
                }
                return CrossDomainMuidCollector_createClass(CrossDomainMuidCollector, null, [{
                    key: "getDefaultSettings",
                    value: function getDefaultSettings() {
                        return Zr
                    }
                }, {
                    key: "Builder",
                    get: function get() {
                        return function() {
                            function Builder(e, t, n, r, i) {
                                CrossDomainMuidCollector_classCallCheck(this, Builder),
                                this.configurationRepository = e,
                                this.dataQ = t,
                                this.utils = n,
                                this.domUtils = r,
                                this.eventType = i
                            }
                            return CrossDomainMuidCollector_createClass(Builder, [{
                                key: "withMessageBus",
                                value: function withMessageBus(e) {
                                    return this.messageBus = e,
                                    this
                                }
                            }, {
                                key: "withWindowMessageEventEmitter",
                                value: function withWindowMessageEventEmitter(e) {
                                    return this.windowMessageEventEmitter = e,
                                    this
                                }
                            }, {
                                key: "build",
                                value: function build() {
                                    return new CrossDomainMuidCollector(this)
                                }
                            }]),
                            Builder
                        }()
                    }
                }, {
                    key: "generateRandomID",
                    value: function generateRandomID() {
                        for (var e = "abcdefghijklmnopqrstuvwxyz0123456789", t = "", n = 0; n < 16; n++)
                            t += e.charAt(Math.floor(Math.random() * e.length));
                        return t
                    }
                }]),
                CrossDomainMuidCollector
            }();
            function MutationEmitter_typeof(e) {
                return (MutationEmitter_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function _typeof(e) {
                    return typeof e
                }
                : function _typeof(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }
                )(e)
            }
            function MutationEmitter_defineProperties(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            var ri = function() {
                function MutationEmitter(e) {
                    var n = this;
                    if (!function MutationEmitter_classCallCheck(e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, MutationEmitter),
                    function MutationEmitter_defineProperty(e, t, n) {
                        t in e ? Object.defineProperty(e, t, {
                            value: n,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : e[t] = n
                    }(this, "handleMutationEvent", function(e, t) {
                        e && t && n._messageBus.publish(ce.MutationSingleEvent, {
                            mutation: e,
                            browserContext: t
                        })
                    }),
                    this._messageBus = e,
                    "object" !== MutationEmitter_typeof(this._messageBus))
                        throw new Error("Bootstrap aborted! MessageBus missing for MutationEmitter");
                    this._documentObservers = new WeakMap
                }
                return function MutationEmitter_createClass(e, t, n) {
                    t && MutationEmitter_defineProperties(e.prototype, t),
                    n && MutationEmitter_defineProperties(e, n)
                }(MutationEmitter, [{
                    key: "startObserver",
                    value: function startObserver(r) {
                        var e, i = this, t = r.getDocument();
                        this._documentObservers.has(t) || ((e = new window.MutationObserver(function(e) {
                            try {
                                for (var t = 0; t < e.length; t++) {
                                    var n = e[t];
                                    if (0 < n.addedNodes.length) {
                                        i.handleMutationEvent(n, r);
                                        break
                                    }
                                }
                            } catch (e) {
                                C.error("An error has occurred: ".concat(e.message))
                            }
                        }
                        )).observe(t, {
                            childList: !0,
                            subtree: !0
                        }),
                        this._documentObservers.set(t, {
                            instance: e
                        }))
                    }
                }, {
                    key: "stopObserver",
                    value: function stopObserver(e) {
                        var t, e = e.getDocument();
                        this._documentObservers.has(e) && (t = this._documentObservers.get(e)) && (t.instance && t.instance.disconnect(),
                        this._documentObservers.delete(e))
                    }
                }]),
                MutationEmitter
            }();
            function StandardInputEventsEmitter_defineProperties(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            function StandardInputEventsEmitter_defineProperty(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n,
                e
            }
            var ii = function() {
                function StandardInputEventsEmitter(e, t, n) {
                    var r = this;
                    !function StandardInputEventsEmitter_classCallCheck(e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, StandardInputEventsEmitter),
                    StandardInputEventsEmitter_defineProperty(this, "handleInputEvents", function(e) {
                        r._messageBus.publish(ce.StandardInputEvent, e)
                    }),
                    StandardInputEventsEmitter_defineProperty(this, "handleFocusEvents", function(e) {
                        r._messageBus.publish(ce.StandardInputFocusEvent, e)
                    }),
                    StandardInputEventsEmitter_defineProperty(this, "handleBlurEvents", function(e) {
                        r._messageBus.publish(ce.StandardInputBlurEvent, e)
                    }),
                    this._messageBus = e,
                    this._eventAggregator = t,
                    this._elementBindingWMap = new WeakMap,
                    this._utils = n,
                    this.defaultInputEventListener = [{
                        event: "input",
                        handler: this.handleInputEvents
                    }, {
                        event: "focus",
                        handler: this.handleFocusEvents
                    }, {
                        event: "blur",
                        handler: this.handleBlurEvents
                    }]
                }
                return function StandardInputEventsEmitter_createClass(e, t, n) {
                    t && StandardInputEventsEmitter_defineProperties(e.prototype, t),
                    n && StandardInputEventsEmitter_defineProperties(e, n)
                }(StandardInputEventsEmitter, [{
                    key: "start",
                    value: function start(e, r, i) {
                        var o = this;
                        e.forEach(function(t) {
                            var n;
                            o._elementBindingWMap.has(t) || (n = [],
                            void 0 !== i ? "function" == typeof i.func && Array.isArray(i.allowedEvents) && 0 < i.allowedEvents.length && (i.func(r, t) ? o.defaultInputEventListener.forEach(function(e) {
                                i.allowedEvents.includes(e.event) && n.push(e)
                            }) : n = Array.from(o.defaultInputEventListener)) : n = Array.from(o.defaultInputEventListener),
                            n.forEach(function(e) {
                                o._eventAggregator.addEventListener(t, e.event, e.handler)
                            }),
                            o._elementBindingWMap.set(t, {
                                isBinded: !0,
                                listeners: [o.handleInputEvents, o.handleFocusEvents, o.handleBlurEvents],
                                isUsingJQuery: !1
                            }))
                        })
                    }
                }, {
                    key: "stop",
                    value: function stop(e) {
                        var n = this;
                        e.forEach(function(t) {
                            var e = n._elementBindingWMap.get(t);
                            e && e.isBinded && (n.defaultInputEventListener.forEach(function(e) {
                                n._eventAggregator.removeEventListener(t, e.event, e.handler)
                            }),
                            n._elementBindingWMap.delete(t))
                        })
                    }
                }, {
                    key: "addElementEvents",
                    value: function addElementEvents(t) {
                        var n = this
                          , e = 1 < arguments.length && void 0 !== arguments[1] && arguments[1];
                        if (!this._elementBindingWMap.has(t)) {
                            if (e) {
                                if (!this._utils.JQueryUtils.isJQueryAvailable())
                                    return void C.error("Unable to add event listeners for element using jQuery because jQuery is not available");
                                this.defaultInputEventListener.forEach(function(e) {
                                    n._utils.JQueryUtils.addEventListener(t, e.event, e.handler)
                                })
                            } else
                                this.defaultInputEventListener.forEach(function(e) {
                                    n._eventAggregator.addEventListener(t, e.event, e.handler)
                                });
                            this._elementBindingWMap.set(t, {
                                isBinded: !0,
                                listeners: [this.handleInputEvents, this.handleFocusEvents, this.handleBlurEvents],
                                isUsingJQuery: e
                            })
                        }
                    }
                }, {
                    key: "removeElementEvents",
                    value: function removeElementEvents(t) {
                        var n = this
                          , e = this._elementBindingWMap.get(t);
                        if (e && e.isBinded) {
                            if (e.isUsingJQuery) {
                                if (!this._utils.JQueryUtils.isJQueryAvailable())
                                    return void C.error("Unable to remove event listeners for element using jQuery because jQuery is not available");
                                this.defaultInputEventListener.forEach(function(e) {
                                    n._utils.JQueryUtils.removeEventListener(t, e.event, e.handler)
                                })
                            } else
                                this.defaultInputEventListener.forEach(function(e) {
                                    n._eventAggregator.removeEventListener(elements, e.event, e.handler)
                                });
                            this._elementBindingWMap.delete(t)
                        }
                    }
                }]),
                StandardInputEventsEmitter
            }();
            function EventAggregator_defineProperties(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            var oi = !1;
            !function() {
                try {
                    var e = Object.defineProperty({}, "passive", {
                        get: function get() {
                            oi = !0
                        }
                    });
                    window.addEventListener("test", null, e)
                } catch (e) {}
            }();
            var si = function() {
                function EventAggregator() {
                    !function EventAggregator_classCallCheck(e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, EventAggregator)
                }
                return function EventAggregator_createClass(e, t, n) {
                    t && EventAggregator_defineProperties(e.prototype, t),
                    n && EventAggregator_defineProperties(e, n)
                }(EventAggregator, null, [{
                    key: "addEventListener",
                    value: function addEventListener(e, t, n) {
                        var r = 3 < arguments.length && void 0 !== arguments[3] && arguments[3]
                          , i = !(4 < arguments.length && void 0 !== arguments[4]) || arguments[4]
                          , o = 5 < arguments.length && void 0 !== arguments[5] && arguments[5];
                        oi ? e.addEventListener(t, n, {
                            capture: r,
                            passive: i,
                            once: o
                        }) : e.addEventListener ? e.addEventListener(t, n, r) : e.attachEvent("on" + t, n)
                    }
                }, {
                    key: "removeEventListener",
                    value: function removeEventListener(e, t, n) {
                        var r = 3 < arguments.length && void 0 !== arguments[3] && arguments[3];
                        e.removeEventListener ? e.removeEventListener(t, n, r) : e.detachEvent("on" + t, n)
                    }
                }]),
                EventAggregator
            }();
            function StandardOnClickEventsEmitter_defineProperties(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            var ai = function() {
                function StandardOnClickEventsEmitter(e, t, n) {
                    var r = this;
                    !function StandardOnClickEventsEmitter_classCallCheck(e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, StandardOnClickEventsEmitter),
                    function StandardOnClickEventsEmitter_defineProperty(e, t, n) {
                        t in e ? Object.defineProperty(e, t, {
                            value: n,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : e[t] = n
                    }(this, "handleOnClickEvents", function(e) {
                        r._messageBus.publish(ce.StandardOnClickEvent, e)
                    }),
                    this._messageBus = e,
                    this._eventAggregator = t,
                    this._elementBindingWMap = new WeakMap,
                    this._utils = n,
                    this.defaultOnClickEventListener = [{
                        event: "click",
                        handler: this.handleOnClickEvents
                    }]
                }
                return function StandardOnClickEventsEmitter_createClass(e, t, n) {
                    t && StandardOnClickEventsEmitter_defineProperties(e.prototype, t),
                    n && StandardOnClickEventsEmitter_defineProperties(e, n)
                }(StandardOnClickEventsEmitter, [{
                    key: "start",
                    value: function start(e) {
                        var n = this;
                        e.forEach(function(t) {
                            n._elementBindingWMap.has(t) || (n.defaultOnClickEventListener.forEach(function(e) {
                                n._eventAggregator.addEventListener(t, e.event, e.handler)
                            }),
                            n._elementBindingWMap.set(t, {
                                isBinded: !0,
                                listeners: [n.handleOnClickEvents],
                                isUsingJQuery: !1
                            }))
                        })
                    }
                }, {
                    key: "stop",
                    value: function stop(e) {
                        var n = this;
                        e.forEach(function(t) {
                            var e = n._elementBindingWMap.get(t);
                            e && e.isBinded && (n.defaultOnClickEventListener.forEach(function(e) {
                                n._eventAggregator.removeEventListener(t, e.event, e.handler)
                            }),
                            n._elementBindingWMap.delete(t))
                        })
                    }
                }, {
                    key: "addElementEvents",
                    value: function addElementEvents(t) {
                        var n = this
                          , e = 1 < arguments.length && void 0 !== arguments[1] && arguments[1];
                        if (!this._elementBindingWMap.has(t)) {
                            if (e) {
                                if (!this._utils.JQueryUtils.isJQueryAvailable())
                                    return void C.error("Unable to add event listeners for element using jQuery because jQuery is not available");
                                this.defaultOnClickEventListener.forEach(function(e) {
                                    n._utils.JQueryUtils.addEventListener(t, e.event, e.handler)
                                })
                            } else
                                this.defaultOnClickEventListener.forEach(function(e) {
                                    n._eventAggregator.addEventListener(t, e.event, e.handler)
                                });
                            this._elementBindingWMap.set(t, {
                                isBinded: !0,
                                listeners: [this.handleOnClickEvents],
                                isUsingJQuery: e
                            })
                        }
                    }
                }, {
                    key: "removeElementEvents",
                    value: function removeElementEvents(t) {
                        var n = this
                          , e = this._elementBindingWMap.get(t);
                        if (e && e.isBinded) {
                            if (e.isUsingJQuery) {
                                if (!this._utils.JQueryUtils.isJQueryAvailable())
                                    return void C.error("Unable to remove event listeners for element using jQuery because jQuery is not available");
                                this.defaultOnClickEventListener.forEach(function(e) {
                                    n._utils.JQueryUtils.removeEventListener(t, e.event, e.handler)
                                })
                            } else
                                this.defaultOnClickEventListener.forEach(function(e) {
                                    n._eventAggregator.removeEventListener(elements, e.event, e.handler)
                                });
                            this._elementBindingWMap.delete(t)
                        }
                    }
                }]),
                StandardOnClickEventsEmitter
            }();
            function StandardOnChangeEventsEmitter_defineProperties(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            var ui = function() {
                function StandardOnChangeEventsEmitter(e, t, n) {
                    var r = this;
                    !function StandardOnChangeEventsEmitter_classCallCheck(e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, StandardOnChangeEventsEmitter),
                    function StandardOnChangeEventsEmitter_defineProperty(e, t, n) {
                        t in e ? Object.defineProperty(e, t, {
                            value: n,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : e[t] = n
                    }(this, "handleOnChangeEvents", function(e) {
                        r._messageBus.publish(ce.StandardOnSelectEvent, e)
                    }),
                    this._messageBus = e,
                    this._eventAggregator = t,
                    this._elementBindingWMap = new WeakMap,
                    this._utils = n,
                    this.defaultOnChangeEventListener = [{
                        event: "change",
                        handler: this.handleOnChangeEvents
                    }]
                }
                return function StandardOnChangeEventsEmitter_createClass(e, t, n) {
                    t && StandardOnChangeEventsEmitter_defineProperties(e.prototype, t),
                    n && StandardOnChangeEventsEmitter_defineProperties(e, n)
                }(StandardOnChangeEventsEmitter, [{
                    key: "start",
                    value: function start(e) {
                        var n = this;
                        e.forEach(function(t) {
                            n._elementBindingWMap.has(t) || (n.defaultOnChangeEventListener.forEach(function(e) {
                                n._eventAggregator.addEventListener(t, e.event, e.handler)
                            }),
                            n._elementBindingWMap.set(t, {
                                isBinded: !0,
                                listeners: [n.handleOnChangeEvents],
                                isUsingJQuery: !1
                            }))
                        })
                    }
                }, {
                    key: "stop",
                    value: function stop(e) {
                        var n = this;
                        e.forEach(function(t) {
                            var e = n._elementBindingWMap.get(t);
                            e && e.isBinded && (n.defaultOnChangeEventListener.forEach(function(e) {
                                n._eventAggregator.removeEventListener(t, e.event, e.handler)
                            }),
                            n._elementBindingWMap.delete(t))
                        })
                    }
                }, {
                    key: "addElementEvents",
                    value: function addElementEvents(t) {
                        var n = this
                          , e = 1 < arguments.length && void 0 !== arguments[1] && arguments[1];
                        if (!this._elementBindingWMap.has(t)) {
                            if (e) {
                                if (!this._utils.JQueryUtils.isJQueryAvailable())
                                    return void C.error("Unable to add event listeners for element using jQuery because jQuery is not available");
                                this.defaultOnChangeEventListener.forEach(function(e) {
                                    n._utils.JQueryUtils.addEventListener(t, e.event, e.handler)
                                })
                            } else
                                this.defaultOnChangeEventListener.forEach(function(e) {
                                    n._eventAggregator.addEventListener(t, e.event, e.handler)
                                });
                            this._elementBindingWMap.set(t, {
                                isBinded: !0,
                                listeners: [this.handleOnChangeEvents],
                                isUsingJQuery: e
                            })
                        }
                    }
                }, {
                    key: "removeElementEvents",
                    value: function removeElementEvents(t) {
                        var n = this
                          , e = this._elementBindingWMap.get(t);
                        if (e && e.isBinded) {
                            if (e.isUsingJQuery) {
                                if (!this._utils.JQueryUtils.isJQueryAvailable())
                                    return void C.error("Unable to remove event listeners for element using jQuery because jQuery is not available");
                                this.defaultOnChangeEventListener.forEach(function(e) {
                                    n._utils.JQueryUtils.removeEventListener(t, e.event, e.handler)
                                })
                            } else
                                this.defaultOnChangeEventListener.forEach(function(e) {
                                    n._eventAggregator.removeEventListener(elements, e.event, e.handler)
                                });
                            this._elementBindingWMap.delete(t)
                        }
                    }
                }]),
                StandardOnChangeEventsEmitter
            }();
            function StandardOnFormEventsEmitter_defineProperties(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            var ci = function() {
                function StandardOnFormEventsEmitter(e, t, n) {
                    var r = this;
                    !function StandardOnFormEventsEmitter_classCallCheck(e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, StandardOnFormEventsEmitter),
                    function StandardOnFormEventsEmitter_defineProperty(e, t, n) {
                        t in e ? Object.defineProperty(e, t, {
                            value: n,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : e[t] = n
                    }(this, "handleOnFormSubmitEvents", function(e) {
                        r._messageBus.publish(ce.StandardOnFormSubmitEvent, e)
                    }),
                    this._messageBus = e,
                    this._eventAggregator = t,
                    this._elementBindingWMap = new WeakMap,
                    this._utils = n,
                    this.defaultOnFormEventListener = [{
                        event: "submit",
                        handler: this.handleOnFormSubmitEvents
                    }]
                }
                return function StandardOnFormEventsEmitter_createClass(e, t, n) {
                    t && StandardOnFormEventsEmitter_defineProperties(e.prototype, t),
                    n && StandardOnFormEventsEmitter_defineProperties(e, n)
                }(StandardOnFormEventsEmitter, [{
                    key: "start",
                    value: function start(e) {
                        var n = this;
                        e.forEach(function(t) {
                            n._elementBindingWMap.has(t) || (n.defaultOnFormEventListener.forEach(function(e) {
                                n._eventAggregator.addEventListener(t, e.event, e.handler)
                            }),
                            n._elementBindingWMap.set(t, {
                                isBinded: !0,
                                listeners: [n.handleOnFormSubmitEvents],
                                isUsingJQuery: !1
                            }))
                        })
                    }
                }, {
                    key: "stop",
                    value: function stop(e) {
                        var n = this;
                        e.forEach(function(t) {
                            var e = n._elementBindingWMap.get(t);
                            e && e.isBinded && (n.defaultOnFormEventListener.forEach(function(e) {
                                n._eventAggregator.removeEventListener(t, e.event, e.handler)
                            }),
                            n._elementBindingWMap.delete(t))
                        })
                    }
                }, {
                    key: "addElementEvents",
                    value: function addElementEvents(t) {
                        var n = this
                          , e = 1 < arguments.length && void 0 !== arguments[1] && arguments[1];
                        if (!this._elementBindingWMap.has(t)) {
                            if (e) {
                                if (!this._utils.JQueryUtils.isJQueryAvailable())
                                    return void C.error("Unable to add event listeners for element using jQuery because jQuery is not available");
                                this.defaultOnFormEventListener.forEach(function(e) {
                                    n._utils.JQueryUtils.addEventListener(t, e.event, e.handler)
                                })
                            } else
                                this.defaultOnFormEventListener.forEach(function(e) {
                                    n._eventAggregator.addEventListener(t, e.event, e.handler)
                                });
                            this._elementBindingWMap.set(t, {
                                isBinded: !0,
                                listeners: [this.handleOnFormSubmitEvents],
                                isUsingJQuery: e
                            })
                        }
                    }
                }, {
                    key: "removeElementEvents",
                    value: function removeElementEvents(t) {
                        var n = this
                          , e = this._elementBindingWMap.get(t);
                        if (e && e.isBinded) {
                            if (e.isUsingJQuery) {
                                if (!this._utils.JQueryUtils.isJQueryAvailable())
                                    return void C.error("Unable to remove event listeners for element using jQuery because jQuery is not available");
                                this.defaultOnFormEventListener.forEach(function(e) {
                                    n._utils.JQueryUtils.removeEventListener(t, e.event, e.handler)
                                })
                            } else
                                this.defaultOnFormEventListener.forEach(function(e) {
                                    n._eventAggregator.removeEventListener(elements, e.event, e.handler)
                                });
                            this._elementBindingWMap.delete(t)
                        }
                    }
                }]),
                StandardOnFormEventsEmitter
            }();
            function SyntheticInputEventsHandlerBase_defineProperties(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            var li = function() {
                function SyntheticInputEventsHandlerBase(e, t, n) {
                    !function SyntheticInputEventsHandlerBase_classCallCheck(e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, SyntheticInputEventsHandlerBase),
                    function SyntheticInputEventsHandlerBase_defineProperty(e, t, n) {
                        t in e ? Object.defineProperty(e, t, {
                            value: n,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : e[t] = n
                    }(this, "isJQueryDataSupported", function(e) {
                        return !(!e.jQuery || !e.jQuery._data)
                    }),
                    this._messageBus = e,
                    this._eventAggregator = t,
                    this._elementBindingWMap = new WeakMap,
                    this._utils = n,
                    this.defaultEventListener = [{
                        event: "keypress",
                        handler: this.handleKeypressEvents
                    }]
                }
                return function SyntheticInputEventsHandlerBase_createClass(e, t, n) {
                    t && SyntheticInputEventsHandlerBase_defineProperties(e.prototype, t),
                    n && SyntheticInputEventsHandlerBase_defineProperties(e, n)
                }(SyntheticInputEventsHandlerBase, [{
                    key: "registerElement",
                    value: function registerElement(e, n) {
                        var r, i = this;
                        this._elementBindingWMap.has(e) || (r = {},
                        this.defaultEventListener.forEach(function(t) {
                            function $ta(e) {
                                t.handler(e, n)
                            }
                            r[t.event] = $ta,
                            i._eventAggregator.addEventListener(e, t.event, $ta)
                        }),
                        this._elementBindingWMap.set(e, {
                            isBinded: !0,
                            listeners: r
                        }))
                    }
                }, {
                    key: "unregisterElements",
                    value: function unregisterElements(e) {
                        var r = this;
                        e.forEach(function(t) {
                            var n = r._elementBindingWMap.get(t);
                            n && n.isBinded && (r.defaultEventListener.forEach(function(e) {
                                r._eventAggregator.removeEventListener(t, e.event, n.listeners[e.event])
                            }),
                            r._elementBindingWMap.delete(t))
                        })
                    }
                }, {
                    key: "publishEvent",
                    value: function publishEvent(e, t, n, r) {
                        e = {
                            bubbles: !0,
                            cancelBubble: !1,
                            cancelable: !1,
                            composed: !0,
                            currentTarget: null,
                            data: r,
                            dataTransfer: null,
                            defaultPrevented: !1,
                            detail: 0,
                            eventPhase: 0,
                            inputType: n,
                            isComposing: !1,
                            isTrusted: !0,
                            jqueryMask: t,
                            returnValue: !0,
                            sourceCapabilities: null,
                            srcElement: Object.assign(e.target || e.srcElement, {}),
                            target: Object.assign(e.target, {}),
                            timeStamp: e.timeStamp,
                            type: "input",
                            view: null,
                            which: 0
                        };
                        this._messageBus.publish(ce.SyntheticInputMaskEvent, e)
                    }
                }]),
                SyntheticInputEventsHandlerBase
            }();
            function SyntheticMaskInputEventsHandler_typeof(e) {
                return (SyntheticMaskInputEventsHandler_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function _typeof(e) {
                    return typeof e
                }
                : function _typeof(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }
                )(e)
            }
            function SyntheticMaskInputEventsHandler_defineProperties(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            function SyntheticMaskInputEventsHandler_setPrototypeOf(e, t) {
                return (SyntheticMaskInputEventsHandler_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(e, t) {
                    return e.__proto__ = t,
                    e
                }
                )(e, t)
            }
            function SyntheticMaskInputEventsHandler_createSuper(n) {
                var r = function SyntheticMaskInputEventsHandler_isNativeReflectConstruct() {
                    if ("undefined" == typeof Reflect || !Reflect.construct)
                        return !1;
                    if (Reflect.construct.sham)
                        return !1;
                    if ("function" == typeof Proxy)
                        return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})),
                        !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function _createSuperInternal() {
                    var e, t = SyntheticMaskInputEventsHandler_getPrototypeOf(n);
                    return function SyntheticMaskInputEventsHandler_possibleConstructorReturn(e, t) {
                        return !t || "object" !== SyntheticMaskInputEventsHandler_typeof(t) && "function" != typeof t ? SyntheticMaskInputEventsHandler_assertThisInitialized(e) : t
                    }(this, r ? (e = SyntheticMaskInputEventsHandler_getPrototypeOf(this).constructor,
                    Reflect.construct(t, arguments, e)) : t.apply(this, arguments))
                }
            }
            function SyntheticMaskInputEventsHandler_assertThisInitialized(e) {
                if (void 0 === e)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }
            function SyntheticMaskInputEventsHandler_getPrototypeOf(e) {
                return (SyntheticMaskInputEventsHandler_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                }
                )(e)
            }
            var fi = function() {
                !function SyntheticMaskInputEventsHandler_inherits(e, t) {
                    if ("function" != typeof t && null !== t)
                        throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }),
                    t && SyntheticMaskInputEventsHandler_setPrototypeOf(e, t)
                }(SyntheticMaskInputEventsHandler, li);
                var i = SyntheticMaskInputEventsHandler_createSuper(SyntheticMaskInputEventsHandler);
                function SyntheticMaskInputEventsHandler() {
                    var n;
                    !function SyntheticMaskInputEventsHandler_classCallCheck(e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, SyntheticMaskInputEventsHandler);
                    for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
                        t[r] = arguments[r];
                    return function SyntheticMaskInputEventsHandler_defineProperty(e, t, n) {
                        t in e ? Object.defineProperty(e, t, {
                            value: n,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : e[t] = n
                    }(SyntheticMaskInputEventsHandler_assertThisInitialized(n = i.call.apply(i, [this].concat(t))), "handleKeypressEvents", function(e, t) {
                        n.isJQueryDataSupported(t) && n.hasMaskEventSupported(e.target, t) && (t = e.key,
                        n.publishEvent(e, "maskedInput", "insertText", t))
                    }),
                    n
                }
                return function SyntheticMaskInputEventsHandler_createClass(e, t, n) {
                    t && SyntheticMaskInputEventsHandler_defineProperties(e.prototype, t),
                    n && SyntheticMaskInputEventsHandler_defineProperties(e, n)
                }(SyntheticMaskInputEventsHandler, [{
                    key: "start",
                    value: function start(e, t) {
                        var n = this;
                        t = t || window.self,
                        e.forEach(function(e) {
                            n.isJQueryDataSupported(t) && n.hasMaskEventSupported(e, t) && n.registerElement(e, t)
                        })
                    }
                }, {
                    key: "stop",
                    value: function stop(e) {
                        this.unregisterElements(e)
                    }
                }, {
                    key: "hasMaskEventSupported",
                    value: function hasMaskEventSupported(e, t) {
                        e = t.jQuery._data(e, "events");
                        if (void 0 === e)
                            return !1;
                        for (var n = Object.keys(e), r = 0; r < n.length; r++)
                            if ("unmask" === n[r])
                                return !0;
                        return !1
                    }
                }]),
                SyntheticMaskInputEventsHandler
            }();
            function SyntheticAutotabInputEventsHandler_typeof(e) {
                return (SyntheticAutotabInputEventsHandler_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function _typeof(e) {
                    return typeof e
                }
                : function _typeof(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }
                )(e)
            }
            function SyntheticAutotabInputEventsHandler_defineProperties(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            function SyntheticAutotabInputEventsHandler_setPrototypeOf(e, t) {
                return (SyntheticAutotabInputEventsHandler_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(e, t) {
                    return e.__proto__ = t,
                    e
                }
                )(e, t)
            }
            function SyntheticAutotabInputEventsHandler_createSuper(n) {
                var r = function SyntheticAutotabInputEventsHandler_isNativeReflectConstruct() {
                    if ("undefined" == typeof Reflect || !Reflect.construct)
                        return !1;
                    if (Reflect.construct.sham)
                        return !1;
                    if ("function" == typeof Proxy)
                        return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})),
                        !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function _createSuperInternal() {
                    var e, t = SyntheticAutotabInputEventsHandler_getPrototypeOf(n);
                    return function SyntheticAutotabInputEventsHandler_possibleConstructorReturn(e, t) {
                        return !t || "object" !== SyntheticAutotabInputEventsHandler_typeof(t) && "function" != typeof t ? SyntheticAutotabInputEventsHandler_assertThisInitialized(e) : t
                    }(this, r ? (e = SyntheticAutotabInputEventsHandler_getPrototypeOf(this).constructor,
                    Reflect.construct(t, arguments, e)) : t.apply(this, arguments))
                }
            }
            function SyntheticAutotabInputEventsHandler_assertThisInitialized(e) {
                if (void 0 === e)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }
            function SyntheticAutotabInputEventsHandler_getPrototypeOf(e) {
                return (SyntheticAutotabInputEventsHandler_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                }
                )(e)
            }
            var di = function() {
                !function SyntheticAutotabInputEventsHandler_inherits(e, t) {
                    if ("function" != typeof t && null !== t)
                        throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }),
                    t && SyntheticAutotabInputEventsHandler_setPrototypeOf(e, t)
                }(SyntheticAutotabInputEventsHandler, li);
                var i = SyntheticAutotabInputEventsHandler_createSuper(SyntheticAutotabInputEventsHandler);
                function SyntheticAutotabInputEventsHandler() {
                    var n;
                    !function SyntheticAutotabInputEventsHandler_classCallCheck(e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, SyntheticAutotabInputEventsHandler);
                    for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
                        t[r] = arguments[r];
                    return function SyntheticAutotabInputEventsHandler_defineProperty(e, t, n) {
                        t in e ? Object.defineProperty(e, t, {
                            value: n,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : e[t] = n
                    }(SyntheticAutotabInputEventsHandler_assertThisInitialized(n = i.call.apply(i, [this].concat(t))), "handleKeypressEvents", function(e, t) {
                        n.isJQueryDataSupported(t) && n.hasjQueryAutoTab(e.target, t) && (t = e.key,
                        8 !== e.keyCode && n.publishEvent(e, "autotab", "insertText", t))
                    }),
                    n
                }
                return function SyntheticAutotabInputEventsHandler_createClass(e, t, n) {
                    t && SyntheticAutotabInputEventsHandler_defineProperties(e.prototype, t),
                    n && SyntheticAutotabInputEventsHandler_defineProperties(e, n)
                }(SyntheticAutotabInputEventsHandler, [{
                    key: "start",
                    value: function start(e, t) {
                        var n = this;
                        e.forEach(function(e) {
                            n.isJQueryDataSupported(t) && n.hasjQueryAutoTab(e, t) && n.registerElement(e, t)
                        })
                    }
                }, {
                    key: "stop",
                    value: function stop(e) {
                        this.unregisterElements(e)
                    }
                }, {
                    key: "hasjQueryAutoTab",
                    value: function hasjQueryAutoTab(e, t) {
                        if (void 0 === t.jQuery._data(e, "events"))
                            return !1;
                        for (var n = Object.keys(t.jQuery._data(e, "events")), r = 0; r < n.length; r++)
                            if (-1 !== n[r].indexOf("autotab"))
                                return !0;
                        return !1
                    }
                }]),
                SyntheticAutotabInputEventsHandler
            }();
            function FocusEventEmitter_defineProperties(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            var hi = function() {
                function FocusEventEmitter(e, t) {
                    var n = this;
                    !function FocusEventEmitter_classCallCheck(e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, FocusEventEmitter),
                    function FocusEventEmitter_defineProperty(e, t, n) {
                        t in e ? Object.defineProperty(e, t, {
                            value: n,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : e[t] = n
                    }(this, "handleFocusEvent", function(e) {
                        n._messageBus.publish(ce.FocusEvent, e)
                    }),
                    this._messageBus = e,
                    this._eventAggregator = t
                }
                return function FocusEventEmitter_createClass(e, t, n) {
                    t && FocusEventEmitter_defineProperties(e.prototype, t),
                    n && FocusEventEmitter_defineProperties(e, n)
                }(FocusEventEmitter, [{
                    key: "start",
                    value: function start(e) {
                        if (!e)
                            throw new Error("invalid window parameter");
                        this._eventAggregator.addEventListener(e, "focus", this.handleFocusEvent, !1, !0)
                    }
                }, {
                    key: "stop",
                    value: function stop(e) {
                        if (!e)
                            throw new Error("invalid window parameter");
                        this._eventAggregator.removeEventListener(e, "focus", this.handleFocusEvent)
                    }
                }]),
                FocusEventEmitter
            }();
            function BlurEventEmitter_defineProperties(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            var pi = function() {
                function BlurEventEmitter(e, t) {
                    var n = this;
                    !function BlurEventEmitter_classCallCheck(e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, BlurEventEmitter),
                    function BlurEventEmitter_defineProperty(e, t, n) {
                        t in e ? Object.defineProperty(e, t, {
                            value: n,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : e[t] = n
                    }(this, "handleBlurEvent", function(e) {
                        n._messageBus.publish(ce.BlurEvent, e)
                    }),
                    this._messageBus = e,
                    this._eventAggregator = t
                }
                return function BlurEventEmitter_createClass(e, t, n) {
                    t && BlurEventEmitter_defineProperties(e.prototype, t),
                    n && BlurEventEmitter_defineProperties(e, n)
                }(BlurEventEmitter, [{
                    key: "start",
                    value: function start(e) {
                        if (!e)
                            throw new Error("invalid window parameter");
                        this._eventAggregator.addEventListener(e, "blur", this.handleBlurEvent, !1, !0)
                    }
                }, {
                    key: "stop",
                    value: function stop(e) {
                        if (!e)
                            throw new Error("invalid window parameter");
                        this._eventAggregator.removeEventListener(e, "blur", this.handleBlurEvent)
                    }
                }]),
                BlurEventEmitter
            }();
            function ResizeEventEmitter_defineProperties(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            var vi = function() {
                function ResizeEventEmitter(e, t) {
                    var n = this;
                    !function ResizeEventEmitter_classCallCheck(e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, ResizeEventEmitter),
                    function ResizeEventEmitter_defineProperty(e, t, n) {
                        t in e ? Object.defineProperty(e, t, {
                            value: n,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : e[t] = n
                    }(this, "handleResizeEvent", function(e) {
                        n._messageBus.publish(ce.ResizeEvent, e)
                    }),
                    this._messageBus = e,
                    this._eventAggregator = t
                }
                return function ResizeEventEmitter_createClass(e, t, n) {
                    t && ResizeEventEmitter_defineProperties(e.prototype, t),
                    n && ResizeEventEmitter_defineProperties(e, n)
                }(ResizeEventEmitter, [{
                    key: "start",
                    value: function start(e) {
                        if (!e)
                            throw new Error("invalid window parameter");
                        this._eventAggregator.addEventListener(e, "resize", this.handleResizeEvent, !1, !0)
                    }
                }, {
                    key: "stop",
                    value: function stop(e) {
                        if (!e)
                            throw new Error("invalid window parameter");
                        this._eventAggregator.removeEventListener(e, "resize", this.handleResizeEvent)
                    }
                }]),
                ResizeEventEmitter
            }();
            function DOMContentLoadedEventEmitter_defineProperties(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            var _i = function() {
                function DOMContentLoadedEventEmitter(e, t) {
                    var n = this;
                    !function DOMContentLoadedEventEmitter_classCallCheck(e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, DOMContentLoadedEventEmitter),
                    function DOMContentLoadedEventEmitter_defineProperty(e, t, n) {
                        t in e ? Object.defineProperty(e, t, {
                            value: n,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : e[t] = n
                    }(this, "handleDOMContentLoadedEvent", function(e) {
                        n._messageBus.publish(ce.DOMContentLoadedEvent, e)
                    }),
                    this._messageBus = e,
                    this._eventAggregator = t
                }
                return function DOMContentLoadedEventEmitter_createClass(e, t, n) {
                    t && DOMContentLoadedEventEmitter_defineProperties(e.prototype, t),
                    n && DOMContentLoadedEventEmitter_defineProperties(e, n)
                }(DOMContentLoadedEventEmitter, [{
                    key: "start",
                    value: function start(e) {
                        if (!e)
                            throw new Error("invalid document parameter");
                        this._eventAggregator.addEventListener(e, "DOMContentLoaded", this.handleDOMContentLoadedEvent)
                    }
                }, {
                    key: "stop",
                    value: function stop(e) {
                        if (!e)
                            throw new Error("invalid document parameter");
                        this._eventAggregator.removeEventListener(e, "DOMContentLoaded", this.handleDOMContentLoadedEvent)
                    }
                }]),
                DOMContentLoadedEventEmitter
            }();
            function VisibilityChangeEventEmitter_defineProperties(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            var mi = function() {
                function VisibilityChangeEventEmitter(e, t) {
                    var n = this;
                    !function VisibilityChangeEventEmitter_classCallCheck(e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, VisibilityChangeEventEmitter),
                    function VisibilityChangeEventEmitter_defineProperty(e, t, n) {
                        t in e ? Object.defineProperty(e, t, {
                            value: n,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : e[t] = n
                    }(this, "handleVisibilityChangeEvent", function(e) {
                        n._messageBus.publish(ce.VisibilityChangeEvent, e)
                    }),
                    this._messageBus = e,
                    this._eventAggregator = t
                }
                return function VisibilityChangeEventEmitter_createClass(e, t, n) {
                    t && VisibilityChangeEventEmitter_defineProperties(e.prototype, t),
                    n && VisibilityChangeEventEmitter_defineProperties(e, n)
                }(VisibilityChangeEventEmitter, [{
                    key: "start",
                    value: function start(e) {
                        if (!e)
                            throw new Error("invalid document parameter");
                        this._eventAggregator.addEventListener(e, "visibilitychange", this.handleVisibilityChangeEvent, !1, !0)
                    }
                }, {
                    key: "stop",
                    value: function stop(e) {
                        if (!e)
                            throw new Error("invalid document parameter");
                        this._eventAggregator.removeEventListener(e, "visibilitychange", this.handleVisibilityChangeEvent)
                    }
                }]),
                VisibilityChangeEventEmitter
            }();
            function ScrollEventEmitter_defineProperties(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            var gi = function() {
                function ScrollEventEmitter(e, t) {
                    var n = this;
                    !function ScrollEventEmitter_classCallCheck(e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, ScrollEventEmitter),
                    function ScrollEventEmitter_defineProperty(e, t, n) {
                        t in e ? Object.defineProperty(e, t, {
                            value: n,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : e[t] = n
                    }(this, "handleScrollEvent", function(e) {
                        n._messageBus.publish(ce.ScrollEvent, e)
                    }),
                    this._messageBus = e,
                    this._eventAggregator = t
                }
                return function ScrollEventEmitter_createClass(e, t, n) {
                    t && ScrollEventEmitter_defineProperties(e.prototype, t),
                    n && ScrollEventEmitter_defineProperties(e, n)
                }(ScrollEventEmitter, [{
                    key: "start",
                    value: function start(e) {
                        if (!e)
                            throw new Error("invalid window parameter");
                        this._eventAggregator.addEventListener(e, "scroll", this.handleScrollEvent, !1, !0)
                    }
                }, {
                    key: "stop",
                    value: function stop(e) {
                        if (!e)
                            throw new Error("invalid window parameter");
                        this._eventAggregator.removeEventListener(e, "scroll", this.handleScrollEvent)
                    }
                }]),
                ScrollEventEmitter
            }();
            function WindowMessageEventEmitter_defineProperties(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            var yi = function() {
                function WindowMessageEventEmitter(e, t) {
                    var n = this;
                    !function WindowMessageEventEmitter_classCallCheck(e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, WindowMessageEventEmitter),
                    function WindowMessageEventEmitter_defineProperty(e, t, n) {
                        t in e ? Object.defineProperty(e, t, {
                            value: n,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : e[t] = n
                    }(this, "handleWindowMessage", function(e) {
                        e && n._messageBus.publish(ce.WindowMessageEvent, {
                            message: e
                        })
                    }),
                    this._messageBus = e,
                    this._EventAggregator = t,
                    this._windowListeners = new WeakMap,
                    this.defaultPostMessageEventListener = [{
                        event: "message",
                        handler: this.handleWindowMessage
                    }]
                }
                return function WindowMessageEventEmitter_createClass(e, t, n) {
                    t && WindowMessageEventEmitter_defineProperties(e.prototype, t),
                    n && WindowMessageEventEmitter_defineProperties(e, n)
                }(WindowMessageEventEmitter, [{
                    key: "startObserver",
                    value: function startObserver(t) {
                        var n = this;
                        this._windowListeners.has(t.Context) || (this.defaultPostMessageEventListener.forEach(function(e) {
                            n._EventAggregator.addEventListener(t.Context, e.event, e.handler)
                        }),
                        this._windowListeners.set(t.Context, {
                            isBinded: !0,
                            listeners: [this.handleWindowMessage]
                        }))
                    }
                }, {
                    key: "stopObserver",
                    value: function stopObserver(t) {
                        var n = this
                          , e = this._windowListeners.get(t.Context);
                        e && e.isBinded && (this.defaultPostMessageEventListener.forEach(function(e) {
                            n._EventAggregator.removeEventListener(t.Context, e.event, e.handler)
                        }),
                        this._windowListeners.delete(t.Context))
                    }
                }]),
                WindowMessageEventEmitter
            }();
            function DeviceOrientationEventEmitter_defineProperties(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            var bi = function() {
                function DeviceOrientationEventEmitter(e, t) {
                    var n = this;
                    !function DeviceOrientationEventEmitter_classCallCheck(e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, DeviceOrientationEventEmitter),
                    function DeviceOrientationEventEmitter_defineProperty(e, t, n) {
                        t in e ? Object.defineProperty(e, t, {
                            value: n,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : e[t] = n
                    }(this, "handleDeviceOrientationEvent", function(e) {
                        n._messageBus.publish(ce.DeviceOrientationEvent, e)
                    }),
                    this._messageBus = e,
                    this._eventAggregator = t
                }
                return function DeviceOrientationEventEmitter_createClass(e, t, n) {
                    t && DeviceOrientationEventEmitter_defineProperties(e.prototype, t),
                    n && DeviceOrientationEventEmitter_defineProperties(e, n)
                }(DeviceOrientationEventEmitter, [{
                    key: "start",
                    value: function start() {
                        this._eventAggregator.addEventListener(window, "deviceorientation", this.handleDeviceOrientationEvent)
                    }
                }, {
                    key: "stop",
                    value: function stop() {
                        this._eventAggregator.removeEventListener(window, "deviceorientation", this.handleDeviceOrientationEvent)
                    }
                }]),
                DeviceOrientationEventEmitter
            }();
            function BeforeInstallPromptEventEmitter_defineProperties(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            var Ei = function() {
                function BeforeInstallPromptEventEmitter(e, t) {
                    var n = this;
                    !function BeforeInstallPromptEventEmitter_classCallCheck(e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, BeforeInstallPromptEventEmitter),
                    function BeforeInstallPromptEventEmitter_defineProperty(e, t, n) {
                        t in e ? Object.defineProperty(e, t, {
                            value: n,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : e[t] = n
                    }(this, "handleBeforeInstallPrompt", function(e) {
                        n._messageBus.publish(ce.BeforeInstallPromptEvent, e)
                    }),
                    this._messageBus = e,
                    this._eventAggregator = t
                }
                return function BeforeInstallPromptEventEmitter_createClass(e, t, n) {
                    t && BeforeInstallPromptEventEmitter_defineProperties(e.prototype, t),
                    n && BeforeInstallPromptEventEmitter_defineProperties(e, n)
                }(BeforeInstallPromptEventEmitter, [{
                    key: "start",
                    value: function start(e) {
                        if (!e)
                            throw new Error("invalid window parameter");
                        this._eventAggregator.addEventListener(e, "beforeinstallprompt", this.handleBeforeInstallPrompt)
                    }
                }, {
                    key: "stop",
                    value: function stop(e) {
                        if (!e)
                            throw new Error("invalid window parameter");
                        this._eventAggregator.removeEventListener(e, "beforeinstallprompt", this.handleBeforeInstallPrompt)
                    }
                }]),
                BeforeInstallPromptEventEmitter
            }();
            function CutEventEmitter_defineProperties(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            var Ci = function() {
                function CutEventEmitter(e, t) {
                    var n = this;
                    !function CutEventEmitter_classCallCheck(e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, CutEventEmitter),
                    function CutEventEmitter_defineProperty(e, t, n) {
                        t in e ? Object.defineProperty(e, t, {
                            value: n,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : e[t] = n
                    }(this, "handleCutEvent", function(e) {
                        n._messageBus.publish(ce.CutEvent, e)
                    }),
                    this._messageBus = e,
                    this._eventAggregator = t
                }
                return function CutEventEmitter_createClass(e, t, n) {
                    t && CutEventEmitter_defineProperties(e.prototype, t),
                    n && CutEventEmitter_defineProperties(e, n)
                }(CutEventEmitter, [{
                    key: "start",
                    value: function start(e) {
                        if (!e)
                            throw new Error("invalid document parameter");
                        this._eventAggregator.addEventListener(e, "cut", this.handleCutEvent)
                    }
                }, {
                    key: "stop",
                    value: function stop(e) {
                        if (!e)
                            throw new Error("invalid document parameter");
                        this._eventAggregator.removeEventListener(e, "cut", this.handleCutEvent)
                    }
                }]),
                CutEventEmitter
            }();
            function CopyEventEmitter_defineProperties(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            var Si = function() {
                function CopyEventEmitter(e, t) {
                    var n = this;
                    !function CopyEventEmitter_classCallCheck(e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, CopyEventEmitter),
                    function CopyEventEmitter_defineProperty(e, t, n) {
                        t in e ? Object.defineProperty(e, t, {
                            value: n,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : e[t] = n
                    }(this, "handleCopyEvent", function(e) {
                        n._messageBus.publish(ce.CopyEvent, e)
                    }),
                    this._messageBus = e,
                    this._eventAggregator = t
                }
                return function CopyEventEmitter_createClass(e, t, n) {
                    t && CopyEventEmitter_defineProperties(e.prototype, t),
                    n && CopyEventEmitter_defineProperties(e, n)
                }(CopyEventEmitter, [{
                    key: "start",
                    value: function start(e) {
                        if (!e)
                            throw new Error("invalid document parameter");
                        this._eventAggregator.addEventListener(e, "copy", this.handleCopyEvent)
                    }
                }, {
                    key: "stop",
                    value: function stop(e) {
                        if (!e)
                            throw new Error("invalid document parameter");
                        this._eventAggregator.removeEventListener(e, "copy", this.handleCopyEvent)
                    }
                }]),
                CopyEventEmitter
            }();
            function PasteEventEmitter_defineProperties(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            var wi = function() {
                function PasteEventEmitter(e, t) {
                    var n = this;
                    !function PasteEventEmitter_classCallCheck(e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, PasteEventEmitter),
                    function PasteEventEmitter_defineProperty(e, t, n) {
                        t in e ? Object.defineProperty(e, t, {
                            value: n,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : e[t] = n
                    }(this, "handlePasteEvent", function(e) {
                        n._messageBus.publish(ce.PasteEvent, e)
                    }),
                    this._messageBus = e,
                    this._eventAggregator = t
                }
                return function PasteEventEmitter_createClass(e, t, n) {
                    t && PasteEventEmitter_defineProperties(e.prototype, t),
                    n && PasteEventEmitter_defineProperties(e, n)
                }(PasteEventEmitter, [{
                    key: "start",
                    value: function start(e) {
                        if (!e)
                            throw new Error("invalid document parameter");
                        this._eventAggregator.addEventListener(e, "paste", this.handlePasteEvent)
                    }
                }, {
                    key: "stop",
                    value: function stop(e) {
                        if (!e)
                            throw new Error("invalid document parameter");
                        this._eventAggregator.removeEventListener(e, "paste", this.handlePasteEvent)
                    }
                }]),
                PasteEventEmitter
            }();
            function ElementFocusEventEmitter_defineProperties(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            var ki = function() {
                function ElementFocusEventEmitter(e, t) {
                    var n = this;
                    !function ElementFocusEventEmitter_classCallCheck(e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, ElementFocusEventEmitter),
                    function ElementFocusEventEmitter_defineProperty(e, t, n) {
                        t in e ? Object.defineProperty(e, t, {
                            value: n,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : e[t] = n
                    }(this, "handleElementFocusEvents", function(e) {
                        n._messageBus.publish(ce.ElementFocusEvent, e)
                    }),
                    this._messageBus = e,
                    this._eventAggregator = t
                }
                return function ElementFocusEventEmitter_createClass(e, t, n) {
                    t && ElementFocusEventEmitter_defineProperties(e.prototype, t),
                    n && ElementFocusEventEmitter_defineProperties(e, n)
                }(ElementFocusEventEmitter, [{
                    key: "start",
                    value: function start(e) {
                        var t = this;
                        e.forEach(function(e) {
                            t._eventAggregator.addEventListener(e, "focus", t.handleElementFocusEvents)
                        })
                    }
                }, {
                    key: "stop",
                    value: function stop(e) {
                        var t = this;
                        e.forEach(function(e) {
                            t._eventAggregator.removeEventListener(e, "focus", t.handleElementFocusEvents)
                        })
                    }
                }]),
                ElementFocusEventEmitter
            }();
            function ElementBlurEventEmitter_defineProperties(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            var Pi = function() {
                function ElementBlurEventEmitter(e, t) {
                    var n = this;
                    !function ElementBlurEventEmitter_classCallCheck(e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, ElementBlurEventEmitter),
                    function ElementBlurEventEmitter_defineProperty(e, t, n) {
                        t in e ? Object.defineProperty(e, t, {
                            value: n,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : e[t] = n
                    }(this, "handleElementBlurEvents", function(e) {
                        n._messageBus.publish(ce.ElementBlurEvent, e)
                    }),
                    this._messageBus = e,
                    this._eventAggregator = t
                }
                return function ElementBlurEventEmitter_createClass(e, t, n) {
                    t && ElementBlurEventEmitter_defineProperties(e.prototype, t),
                    n && ElementBlurEventEmitter_defineProperties(e, n)
                }(ElementBlurEventEmitter, [{
                    key: "start",
                    value: function start(e) {
                        var t = this;
                        e.forEach(function(e) {
                            t._eventAggregator.addEventListener(e, "blur", t.handleElementBlurEvents)
                        })
                    }
                }, {
                    key: "stop",
                    value: function stop(e) {
                        var t = this;
                        e.forEach(function(e) {
                            t._eventAggregator.removeEventListener(e, "blur", t.handleElementBlurEvents)
                        })
                    }
                }]),
                ElementBlurEventEmitter
            }();
            function FeaturesList_defineProperties(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            var Oi = {};
            Oi.Index = s.default,
            Oi.XPathHashProducer = Oe,
            Oi.WindowEventCollector = sn,
            Oi.TouchEventCollector = ge,
            Oi.TapEventCollector = Mn,
            Oi.TabEventCollector = $n,
            Oi.StorageEventCollector = In,
            Oi.SensorsDataQueue = Pe,
            Oi.SelectElementEvents = ir,
            Oi.ScriptEventCollector = gn,
            Oi.PrintEventCollector = Wn,
            Oi.PinchZoomEventCollector = pn,
            Oi.OrientationEventCollector = Jt,
            Oi.NetInfoEventCollector = En,
            Oi.MouseEventCollector = Vn,
            Oi.LocationCollector = nr,
            Oi.LightSensorEventCollector = zn,
            Oi.KeyRegionsStringTable = i.default,
            Oi.KeyEventCollector = ke,
            Oi.IsTrustedValue = r.default,
            Oi.InputEvents = sr,
            Oi.FormEvents = ur,
            Oi.Event = rr,
            Oi.ElementsCollector = Re,
            Oi.ElementEventCollector = Kt,
            Oi.DeviceOrientationCollector = kn,
            Oi.ControlsKeyTable = o.default,
            Oi.ClipboardEventCollector = Zt,
            Oi.ClickEvents = lr,
            Oi.BeforeInstallPromptEventCollector = tn,
            Oi.AccelerometerEventCollector = un;
            var Ri = {};
            Ri.Index = a.default,
            Ri.UserPermissions = Cr,
            Ri.PrivateBrowsingDetector = Or,
            Ri.PointerHoverDetector = Lr,
            Ri.MediaDevicesFeature = br,
            Ri.IsPrivateBrowsingFeature = wr,
            Ri.GraphicDetectFeature = gr,
            Ri.FontsDetector = Ur,
            Ri.FontsDetectionFeature = Pr,
            Ri.DoNotTrackFeature = _r,
            Ri.BrowserPropsFeature = pr,
            Ri.BrowserDetect = dr;
            var Fi = {};
            Fi.Index = u.default,
            Fi.ScriptsRepository = Qr,
            Fi.ScriptsFeature = Hr,
            Fi.ContextPropsFeature = Wr;
            var Di = {};
            Di.Index = c.default,
            Di.MetadataCollector = j,
            Di.FilesFeature = t;
            var Mi = [{
                name: "MouseEvents",
                className: Oi.MouseEventCollector,
                init: function init() {
                    return function() {
                        this._features.list.MouseEvents.instance = new Oi.MouseEventCollector(this._utils,wt,this._elements,this._dataQ)
                    }
                }
            }, {
                name: "KeyEvents",
                className: Oi.KeyEventCollector,
                init: function init() {
                    return function() {
                        this._features.list.KeyEvents.instance = new Oi.KeyEventCollector(this._configurationRepository,this._utils,this._elements,this._dataQ,this._msgBus,this._sameCharService,this._maskingService)
                    }
                }
            }, {
                name: "TouchEvents",
                className: Oi.TouchEventCollector,
                init: function init() {
                    return function() {
                        this._features.list.TouchEvents.instance = new Oi.TouchEventCollector(this._utils,this._elements,this._dataQ,this._msgBus)
                    }
                }
            }, {
                name: "ClipboardEvents",
                className: Oi.ClipboardEventCollector,
                init: function init() {
                    return function() {
                        var e = new Oi.ClipboardEventCollector.Builder(this._utils,this._elements,this._dataQ)
                          , t = new Ci(this._msgBus,si)
                          , n = new Si(this._msgBus,si)
                          , r = new wi(this._msgBus,si);
                        e.withMessageBus(this._msgBus).withCutEventEmitter(t).withCopyEventEmitter(n).withPasteEventEmitter(r),
                        this._features.list.ClipboardEvents.instance = e.build()
                    }
                }
            }, {
                name: "ElementEvents",
                className: Oi.ElementEventCollector,
                init: function init() {
                    return function() {
                        var e = new ii(this._msgBus,si,this._utils)
                          , t = new ai(this._msgBus,si,this._utils)
                          , n = new ui(this._msgBus,si,this._utils)
                          , r = new ki(this._msgBus,si,this._utils)
                          , i = new Pi(this._msgBus,si,this._utils)
                          , o = new ci(this._msgBus,si,this._utils)
                          , s = new $(MutationObserver,this._utils,wt,"jQueryElementListenerConfig",null,!1)
                          , a = function JqueryElementsHandler(e, t, n, r) {
                            return Kr = e,
                            Vr = t,
                            Gr = n,
                            Yr = r,
                            {
                                bindInputEvents: _bindInputEvents,
                                bindOnClickEvents: _bindOnClickEvents,
                                bindOnChangeEvents: _bindOnChangeEvents,
                                bindOnFormsEvents: _bindOnFormsEvents
                            }
                        }(e, t, n, o)
                          , u = new Oi.ElementEventCollector.Builder(this._configurationRepository,this._utils,wt,this._elements,this._dataQ)
                          , c = new ri(this._msgBus)
                          , l = new fi(this._msgBus,si,this._utils)
                          , f = new di(this._msgBus,si,this._utils);
                        u.withjQueryElementListenerSiteMapper(s),
                        u.withMessageBus(this._msgBus),
                        u.withMutationEmitter(c),
                        u.withjQueryElementsHandler(a),
                        u.withInputEvents(sr, or, this._maskingService),
                        u.withStandardInputEventsEmitter(e),
                        u.withSyntheticMaskInputEventsHandler(l),
                        u.withSyntheticAutotabInputEventsHandler(f),
                        u.withClickEvents(lr, cr),
                        u.withStandardOnClickEventsEmitter(t),
                        u.withSelectElementEvents(ir, "select"),
                        u.withElementFocusEventsEmitter(r),
                        u.withElementBlurEventsEmitter(i),
                        u.withStandardOnChangeEventsEmitter(n),
                        u.withFormEvents(ur, ar),
                        u.withStandardOnFormEventsEmitter(o),
                        this._features.list.ElementEvents.instance = u.build()
                    }
                }
            }, {
                name: "WindowEvents",
                className: Oi.WindowEventCollector,
                init: function init() {
                    return function() {
                        var e = new Oi.WindowEventCollector.Builder(this._configurationRepository,h,this._dataQ)
                          , t = new hi(this._msgBus,si)
                          , n = new pi(this._msgBus,si)
                          , r = new vi(this._msgBus,si)
                          , i = new _i(this._msgBus,si)
                          , o = new mi(this._msgBus,si)
                          , s = new gi(this._msgBus,si);
                        e.withMessageBus(this._msgBus),
                        e.withFocusEventEmitter(t),
                        e.withBlurEventEmitter(n),
                        e.withResizeEventEmitter(r),
                        e.withDOMContentLoadedEventEmitter(i),
                        e.withVisibilityChangeEventEmitter(o),
                        e.withScrollEventEmitter(s),
                        this._features.list.WindowEvents.instance = e.build()
                    }
                }
            }, {
                name: "MetadataCollector",
                className: Di.MetadataCollector,
                init: function init() {
                    return function() {
                        var e = new $(MutationObserver,this._utils,wt,"metadataConfig",null,!1);
                        this._features.list.MetadataCollector.instance = new Di.MetadataCollector(this._configurationRepository,this._dataQ,e,this._utils)
                    }
                }
            }, {
                name: "TabsEvents",
                className: Oi.TabEventCollector,
                init: function init() {
                    return function() {
                        this._features.list.TabsEvents.instance = new Oi.TabEventCollector(this._utils,this._dataQ)
                    }
                }
            }, {
                name: "DoNotTrack",
                className: Ri.DoNotTrackFeature,
                init: function init() {
                    return function() {
                        this._features.list.DoNotTrack.instance = new Ri.DoNotTrackFeature(this._dataQ)
                    }
                }
            }, {
                name: "BrowserProps",
                className: Ri.BrowserPropsFeature,
                init: function init() {
                    return function() {
                        this._features.list.BrowserProps.instance = new Ri.BrowserPropsFeature(this._dataQ,Lr,this._utils,this._configurationRepository)
                    }
                }
            }, {
                name: "IsPrivateBrowsing",
                className: Ri.IsPrivateBrowsingFeature,
                init: function init() {
                    return function() {
                        var e = new Or;
                        this._features.list.IsPrivateBrowsing.instance = new Ri.IsPrivateBrowsingFeature(this._dataQ,e)
                    }
                }
            }, {
                name: "FontsDetectionFeature",
                className: Ri.FontsDetectionFeature,
                init: function init() {
                    return function() {
                        this._features.list.FontsDetectionFeature.instance = new Ri.FontsDetectionFeature(h,wt,this._dataQ,Ur)
                    }
                }
            }, {
                name: "GraphicDetectFeature",
                className: Ri.GraphicDetectFeature,
                init: function init() {
                    return function() {
                        this._features.list.GraphicDetectFeature.instance = new Ri.GraphicDetectFeature(this._dataQ)
                    }
                }
            }, {
                name: "BrowserDetect",
                className: Ri.BrowserDetect,
                init: function init() {
                    return function() {
                        this._features.list.BrowserDetect.instance = new Ri.BrowserDetect(this._dataQ)
                    }
                }
            }, {
                name: "FilesFeature",
                className: Di.FilesFeature,
                init: function init() {
                    return function() {
                        this._features.list.FilesFeature.instance = new Di.FilesFeature(this._configurationRepository,this._utils,this._sessionService,this._muidMgr,this._cidCache)
                    }
                }
            }, {
                name: "UserPermissions",
                className: Ri.UserPermissions,
                init: function init() {
                    return function() {
                        this._features.list.UserPermissions.instance = new Ri.UserPermissions(this._dataQ)
                    }
                }
            }, {
                name: "MediaDevicesFeature",
                className: Ri.MediaDevicesFeature,
                init: function init() {
                    return function() {
                        this._features.list.MediaDevicesFeature.instance = new Ri.MediaDevicesFeature(this._dataQ)
                    }
                }
            }, {
                name: "ContextPropsFeature",
                className: Fi.ContextPropsFeature,
                init: function init() {
                    return function() {
                        this._features.list.ContextPropsFeature.instance = new Fi.ContextPropsFeature(this._dataQ,wt,this._perfMonitor)
                    }
                }
            }, {
                name: "ScriptsFeature",
                className: Fi.ScriptsFeature,
                init: function init() {
                    return function() {
                        var e = new Qr(this._utils);
                        this._features.list.ScriptsFeature.instance = new Fi.ScriptsFeature(this._dataQ,e)
                    }
                }
            }, {
                name: "AccelerometerEvents",
                className: Oi.AccelerometerEventCollector,
                init: function init() {
                    return function() {
                        this._features.list.AccelerometerEvents.instance = new Oi.AccelerometerEventCollector(this._configurationRepository,this._utils,this._sensorDataQ)
                    }
                }
            }, {
                name: "PinchZoomEvents",
                className: Oi.PinchZoomEventCollector,
                init: function init() {
                    return function() {
                        this._features.list.PinchZoomEvents.instance = new Oi.PinchZoomEventCollector(this._utils,this._elements,this._dataQ,this._msgBus)
                    }
                }
            }, {
                name: "ScriptEvents",
                className: Oi.ScriptEventCollector,
                init: function init() {
                    return function() {
                        this._features.list.ScriptEvents.instance = new Oi.ScriptEventCollector(this._utils,this._dataQ)
                    }
                }
            }, {
                name: "NetInfoEvents",
                className: Oi.NetInfoEventCollector,
                init: function init() {
                    return function() {
                        this._features.list.NetInfoEvents.instance = new Oi.NetInfoEventCollector(this._utils,this._dataQ)
                    }
                }
            }, {
                name: "DeviceOrientationCollector",
                className: Oi.DeviceOrientationCollector,
                init: function init() {
                    return function() {
                        this._features.list.DeviceOrientationCollector.instance = new Oi.DeviceOrientationCollector(this._utils,this._dataQ)
                    }
                }
            }, {
                name: "TapEvents",
                className: Oi.TapEventCollector,
                init: function init() {
                    return function() {
                        this._features.list.TapEvents.instance = new Oi.TapEventCollector(this._configurationRepository,this._utils,this._elements,this._dataQ)
                    }
                }
            }, {
                name: "LocationEvents",
                className: Oi.LocationCollector,
                init: function init() {
                    return function() {
                        this._features.list.LocationEvents.instance = new Oi.LocationCollector(this._dataQ,this._utils,this._configurationRepository)
                    }
                }
            }, {
                name: "StorageEvents",
                className: Oi.StorageEventCollector,
                init: function init() {
                    return function() {
                        this._features.list.StorageEvents.instance = new Oi.StorageEventCollector(this._utils,this._elements,this._dataQ,this._msgBus)
                    }
                }
            }, {
                name: "PrintEvents",
                className: Oi.PrintEventCollector,
                init: function init() {
                    return function() {
                        this._features.list.PrintEvents.instance = new Oi.PrintEventCollector(this._utils,this._dataQ)
                    }
                }
            }, {
                name: "LightSensorEvents",
                className: Oi.LightSensorEventCollector,
                init: function init() {
                    return function() {
                        this._features.list.LightSensorEvents.instance = new Oi.LightSensorEventCollector(this._dataQ,this._utils,this._configurationRepository)
                    }
                }
            }, {
                name: "CrossDomain",
                className: ni,
                init: function init() {
                    return function() {
                        var e = new ni.Builder(this._configurationRepository,this._dataQ,this._utils,wt,Xr)
                          , t = new yi(this._msgBus,si);
                        e.withMessageBus(this._msgBus),
                        e.withWindowMessageEventEmitter(t),
                        this._features.list.CrossDomain.instance = e.build()
                    }
                }
            }, {
                name: "OrientationEvents",
                className: Oi.OrientationEventCollector,
                init: function init() {
                    return function() {
                        var e = new bi(this._msgBus,si);
                        this._features.list.OrientationEvents.instance = new Oi.OrientationEventCollector(this._configurationRepository,this._utils,this._sensorDataQ,this._msgBus,e)
                    }
                }
            }, {
                name: "BeforeInstallPromptEvents",
                className: Oi.BeforeInstallPromptEventCollector,
                init: function init() {
                    return function() {
                        var e = new Ei(this._msgBus,si);
                        this._features.list.BeforeInstallPromptEvents.instance = new Oi.BeforeInstallPromptEventCollector(this._dataQ,this._utils,this._msgBus,e)
                    }
                }
            }]
              , Ti = function() {
                function FeaturesList() {
                    !function FeaturesList_classCallCheck(e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, FeaturesList)
                }
                return function FeaturesList_createClass(e, t, n) {
                    t && FeaturesList_defineProperties(e.prototype, t),
                    n && FeaturesList_defineProperties(e, n)
                }(FeaturesList, null, [{
                    key: "register",
                    value: function register() {
                        var t = this;
                        FeaturesList.list = {},
                        Mi.forEach(function(e) {
                            t._addFeature(e)
                        })
                    }
                }, {
                    key: "getDefaultFeatures",
                    value: function getDefaultFeatures() {
                        return this.getFeaturesByCondition(function(e) {
                            return e.isDefault
                        })
                    }
                }, {
                    key: "getPerContextFeatures",
                    value: function getPerContextFeatures() {
                        return this.getFeaturesByCondition(function(e) {
                            return e.shouldRunPerContext
                        })
                    }
                }, {
                    key: "getPerSessionFeatures",
                    value: function getPerSessionFeatures() {
                        return this.getFeaturesByCondition(function(e) {
                            return e.shouldRunPerSession
                        })
                    }
                }, {
                    key: "getNonDefaultFeatures",
                    value: function getNonDefaultFeatures() {
                        return this.getFeaturesByCondition(function(e) {
                            return !e.isDefault && !e.shouldRunPerContext && !e.shouldRunPerSession
                        })
                    }
                }, {
                    key: "getFeaturesByCondition",
                    value: function getFeaturesByCondition(n) {
                        var r = {};
                        return Object.keys(FeaturesList.list).forEach(function(e) {
                            var t = FeaturesList.list[e];
                            n(t) && (r[e] = t)
                        }),
                        r
                    }
                }, {
                    key: "_addFeature",
                    value: function _addFeature(e) {
                        var t = e.className.getDefaultSettings()
                          , n = e.name;
                        t.init = e.init(),
                        FeaturesList.list[n] = t
                    }
                }]),
                FeaturesList
            }();
            function Client_defineProperties(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            !function FeaturesList_defineProperty(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n
            }(Ti, "list", void 0);
            var Bi = function() {
                function Client() {
                    !function Client_classCallCheck(e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, Client)
                }
                return function Client_createClass(e, t, n) {
                    t && Client_defineProperties(e.prototype, t),
                    n && Client_defineProperties(e, n)
                }(Client, [{
                    key: "start",
                    value: function start(e, t, n) {
                        this._cdApiFacade = e,
                        this._startupConfigurations = t,
                        this._configurationLoadedCallback = n,
                        this.systemBootstrapper = new Ht,
                        Ti.register(),
                        this.systemBootstrapper.start(Ti, e, t),
                        C.info("Got server address: ".concat(t.getWupServerURL()));
                        e = this.systemBootstrapper.getPerfMonitor();
                        e.startMonitor("t.timeTillServerConfig"),
                        e.startMonitor("t.timeTillDataCollect"),
                        this.configurationService = this.systemBootstrapper.getConfigurationService(),
                        this.sessionService = this.systemBootstrapper.getSessionService(),
                        this.configurationService.setConfigurationLoadedCallback(n),
                        this.systemBootstrapper.getFeatureService().buildFrameRelatedLists(),
                        this.systemBootstrapper.getFeatureBuilder().buildFeatures(),
                        C.info("Started default features collection"),
                        this.systemBootstrapper.getFeatureService().runDefault(),
                        this.systemBootstrapper.getApiBridge().enableApi(),
                        this.systemBootstrapper.getContextMgr().initContextHandling(),
                        this.systemBootstrapper.registerPostLoadEvents(),
                        this.systemBootstrapper.getMuidMgr().initMuid(),
                        this.configurationService.setServerUrl(t.getWupServerURL()),
                        this.sessionService.resumeOrStartSession()
                    }
                }, {
                    key: "stop",
                    value: function stop() {
                        this.systemBootstrapper.stop()
                    }
                }, {
                    key: "restart",
                    value: function restart() {
                        this.stop(),
                        CDCallAsync_apply.apply(),
                        this.start(this._cdApiFacade, this._startupConfigurations, this._configurationLoadedCallback)
                    }
                }, {
                    key: "flush",
                    value: function flush() {
                        this.systemBootstrapper.flushAllMessages()
                    }
                }, {
                    key: "submitCustomElement",
                    value: function submitCustomElement(e) {
                        this.systemBootstrapper.getMessageBus().publish(ce.CustomElementSubmitted, e)
                    }
                }]),
                Client
            }();
            function StartPoint_defineProperties(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            var xi = function() {
                function StartPoint() {
                    !function StartPoint_classCallCheck(e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, StartPoint)
                }
                return function StartPoint_createClass(e, t, n) {
                    t && StartPoint_defineProperties(e.prototype, t),
                    n && StartPoint_defineProperties(e, n)
                }(StartPoint, [{
                    key: "start",
                    value: function start(e, n) {
                        if (M.isSupported()) {
                            var r = new D
                              , i = new Bi;
                            return r.getConfigurations(function(e) {
                                if (!e)
                                    throw C.error("Failed starting the JS SDK. Received invalid start configurations"),
                                    new Error("Failed starting the JS SDK. Received invalid start configurations");
                                if (!e.getWupServerURL())
                                    throw C.error("Missing server URL. Unable to start the library."),
                                    new Error("Missing server URL. Unable to start the library.");
                                if (e.getUseUrlWorker() && "" === e.getWorkerUrl())
                                    throw C.error("Failed starting the JS SDK. Received invalid WorkerUrl configuration"),
                                    new Error("Failed starting the JS SDK. Received invalid WorkerUrl configuration");
                                var t = e.getClientSettings();
                                t && r.createClientInterface(i, t),
                                i.start(r, e, n)
                            }),
                            i.systemBootstrapper
                        }
                    }
                }]),
                StartPoint
            }();
            function Application_defineProperties(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            var Ii = {
                Application: function() {
                    function Application() {
                        !function Application_classCallCheck(e, t) {
                            if (!(e instanceof t))
                                throw new TypeError("Cannot call a class as a function")
                        }(this, Application),
                        function PolyfillsApplier_apply() {
                            CDCallAsync_apply(),
                            apply(self),
                            Polyfills_apply(),
                            WeakMapPolyfill_apply("undefined" != typeof self ? self : "undefined" != typeof window ? window : this)
                        }()
                    }
                    return function Application_createClass(e, t, n) {
                        t && Application_defineProperties(e.prototype, t),
                        n && Application_defineProperties(e, n)
                    }(Application, [{
                        key: "start",
                        value: function start(e, t) {
                            return (new xi).start(e, t)
                        }
                    }]),
                    Application
                }()
            }
        },
        198: function(e, t, n) {
            e.exports = function() {
                return n(855)('!function(){var r={764:function(e,t,m){var g,S;function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function _typeof(e){return typeof e}:function _typeof(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}S=function(){return function t(s,a,o){function i(r,e){if(!a[r]){if(!s[r]){if(0,u)return u(r,!0);var n=new Error("Cannot find module \'"+r+"\'");throw n.code="MODULE_NOT_FOUND",n}n=a[r]={exports:{}};s[r][0].call(n.exports,function(e){var t=s[r][1][e];return i(t||e)},n,n.exports,t,s,a,o)}return a[r].exports}for(var u=void 0,e=0;e<o.length;e++)i(o[e]);return i}({1:[function(e,t,r){r.encode=e("./encode").encode,r.decode=e("./decode").decode,r.Encoder=e("./encoder").Encoder,r.Decoder=e("./decoder").Decoder,r.createCodec=e("./ext").createCodec,r.codec=e("./codec").codec},{"./codec":10,"./decode":12,"./decoder":13,"./encode":15,"./encoder":16,"./ext":20}],2:[function(e,r,n){(function(e){function t(e){return e&&e.isBuffer&&e}r.exports=t(void 0!==e&&e)||t(this.Buffer)||t("undefined"!=typeof window&&window.Buffer)||this.Buffer}).call(this,e("buffer").Buffer)},{buffer:29}],3:[function(e,t,r){r.copy=function o(e,t,r,n){var i;r=r||0,n||0===n||(n=this.length),t=t||0;var s=n-r;if(e===this&&r<t&&t<n)for(i=s-1;0<=i;i--)e[i+t]=this[i+r];else for(i=0;i<s;i++)e[i+t]=this[i+r];return s},r.toString=function i(e,t,r){var n=this,s=0|t;r=r||n.length;for(var a="",o=0;s<r;)(o=n[s++])<128?a+=String.fromCharCode(o):(192==(224&o)?o=(31&o)<<6|63&n[s++]:224==(240&o)?o=(15&o)<<12|(63&n[s++])<<6|63&n[s++]:240==(248&o)&&(o=(7&o)<<18|(63&n[s++])<<12|(63&n[s++])<<6|63&n[s++]),65536<=o?(o-=65536,a+=String.fromCharCode(55296+(o>>>10),56320+(1023&o))):a+=String.fromCharCode(o));return a},r.write=function n(e,t){for(var r=this,i=t||(t|=0),s=e.length,a=0,o=0;o<s;)(a=e.charCodeAt(o++))<128?r[i++]=a:(a<2048?r[i++]=192|a>>>6:(a<55296||57343<a?r[i++]=224|a>>>12:(a=65536+(a-55296<<10|e.charCodeAt(o++)-56320),r[i++]=240|a>>>18,r[i++]=128|a>>>12&63),r[i++]=128|a>>>6&63),r[i++]=128|63&a);return i-t}},{}],4:[function(e,t,r){function n(e){return new Array(e)}var s=e("./bufferish");(r=t.exports=n(0)).alloc=n,r.concat=s.concat,r.from=function i(e){if(!s.isBuffer(e)&&s.isView(e))e=s.Uint8Array.from(e);else if(s.isArrayBuffer(e))e=new Uint8Array(e);else{if("string"==typeof e)return s.from.call(r,e);if("number"==typeof e)throw new TypeError(\'"value" argument must not be a number\')}return Array.prototype.slice.call(e)}},{"./bufferish":8}],5:[function(e,t,r){function n(e){return new a(e)}var s=e("./bufferish"),a=s.global;(r=t.exports=s.hasBuffer?n(0):[]).alloc=s.hasBuffer&&a.alloc||n,r.concat=s.concat,r.from=function i(e){if(!s.isBuffer(e)&&s.isView(e))e=s.Uint8Array.from(e);else if(s.isArrayBuffer(e))e=new Uint8Array(e);else{if("string"==typeof e)return s.from.call(r,e);if("number"==typeof e)throw new TypeError(\'"value" argument must not be a number\')}return a.from&&1!==a.from.length?a.from(e):new a(e)}},{"./bufferish":8}],6:[function(e,t,s){function n(e,t,r,n){var s=c.isBuffer(this),a=c.isBuffer(e);if(s&&a)return this.copy(e,t,r,n);if(l||s||a||!c.isView(this)||!c.isView(e))return u.copy.call(this,e,t,r,n);n=r||null!=n?i.call(this,r,n):this;return e.set(n,t),n.length}function i(e,t){var r=this.slice||!l&&this.subarray;if(r)return r.call(this,e,t);r=c.alloc.call(this,t-e);return n.call(this,r,0,e,t),r}var u=e("./buffer-lite");s.copy=n,s.slice=i,s.toString=function o(e,t,r){return(!a&&c.isBuffer(this)?this:u).toString.apply(this,arguments)},s.write=function f(e){return function r(){return(this[e]||u[e]).apply(this,arguments)}}("write");var c=e("./bufferish"),e=c.global,a=c.hasBuffer&&"TYPED_ARRAY_SUPPORT"in e,l=a&&!e.TYPED_ARRAY_SUPPORT},{"./buffer-lite":3,"./bufferish":8}],7:[function(e,t,s){function n(e){return new Uint8Array(e)}var a=e("./bufferish");(s=t.exports=a.hasArrayBuffer?n(0):[]).alloc=n,s.concat=a.concat,s.from=function i(e){if(a.isView(e)){var t=e.byteOffset,r=e.byteLength;(e=e.buffer).byteLength!==r&&(e.slice?e=e.slice(t,t+r):(e=new Uint8Array(e)).byteLength!==r&&(e=Array.prototype.slice.call(e,t,t+r)))}else{if("string"==typeof e)return a.from.call(s,e);if("number"==typeof e)throw new TypeError(\'"value" argument must not be a number\')}return new Uint8Array(e)}},{"./bufferish":8}],8:[function(e,t,l){function i(e){return a(this).alloc(e)}function a(e){return _(e)?m:g(e)?y:p(e)?v:h?m:d?y:v}function s(){return!1}function c(t,r){return t="[object "+t+"]",function(e){return null!=e&&{}.toString.call(r?e[r]:e)===t}}var r=l.global=e("./buffer-global"),h=l.hasBuffer=r&&!!r.isBuffer,d=l.hasArrayBuffer="undefined"!=typeof ArrayBuffer,p=l.isArray=e("isarray");l.isArrayBuffer=d?function f(e){return e instanceof ArrayBuffer||b(e)}:s;var _=l.isBuffer=h?r.isBuffer:s,g=l.isView=d?ArrayBuffer.isView||c("ArrayBuffer","buffer"):s;l.alloc=i,l.concat=function o(e,t){t||(t=0,Array.prototype.forEach.call(e,function n(e){t+=e.length}));var r=this!==l&&this||e[0],s=i.call(r,t),a=0;return Array.prototype.forEach.call(e,function o(e){a+=S.copy.call(e,s,a)}),s},l.from=function n(e){return"string"==typeof e?function u(e){var t=3*e.length,r=i.call(this,t),e=S.write.call(r,e);return t!==e&&(r=S.slice.call(r,0,e)),r}.call(this,e):a(this).from(e)};var v=l.Array=e("./bufferish-array"),m=l.Buffer=e("./bufferish-buffer"),y=l.Uint8Array=e("./bufferish-uint8array"),S=l.prototype=e("./bufferish-proto"),b=c("ArrayBuffer")},{"./buffer-global":2,"./bufferish-array":4,"./bufferish-buffer":5,"./bufferish-proto":6,"./bufferish-uint8array":7,isarray:34}],9:[function(e,t,r){function n(e){return this instanceof n?(this.options=e,void this.init()):new n(e)}function a(e){return new n(e)}var s=e("isarray");r.createCodec=a,r.install=function i(e){for(var t in e)n.prototype[t]=function o(t,r){return t&&r?function e(){return t.apply(this,arguments),r.apply(this,arguments)}:t||r}(n.prototype[t],e[t])},r.filter=function u(e){return s(e)?function f(t){function r(e,t){return t(e)}return t=t.slice(),function(e){return t.reduce(r,e)}}(e):e};var o=e("./bufferish");n.prototype.init=function(){var e=this.options;return e&&e.uint8array&&(this.bufferish=o.Uint8Array),this},r.preset=a({preset:!0})},{"./bufferish":8,isarray:34}],10:[function(e,t,r){e("./read-core"),e("./write-core"),r.codec={preset:e("./codec-base").preset}},{"./codec-base":9,"./read-core":22,"./write-core":25}],11:[function(e,t,r){function n(e){if(!(this instanceof n))return new n(e);e&&(this.options=e).codec&&((e=this.codec=e.codec).bufferish&&(this.bufferish=e.bufferish))}r.DecodeBuffer=n;r=e("./read-core").preset;e("./flex-buffer").FlexDecoder.mixin(n.prototype),n.prototype.codec=r,n.prototype.fetch=function(){return this.codec.decode(this)}},{"./flex-buffer":21,"./read-core":22}],12:[function(e,t,r){r.decode=function n(e,t){return(t=new i(t)).write(e),t.read()};var i=e("./decode-buffer").DecodeBuffer},{"./decode-buffer":11}],13:[function(e,t,r){function n(e){return this instanceof n?void i.call(this,e):new n(e)}r.Decoder=n;var r=e("event-lite"),i=e("./decode-buffer").DecodeBuffer;n.prototype=new i,r.mixin(n.prototype),n.prototype.decode=function(e){arguments.length&&this.write(e),this.flush()},n.prototype.push=function(e){this.emit("data",e)},n.prototype.end=function(e){this.decode(e),this.emit("end")}},{"./decode-buffer":11,"event-lite":31}],14:[function(e,t,r){function n(e){if(!(this instanceof n))return new n(e);e&&(this.options=e).codec&&((e=this.codec=e.codec).bufferish&&(this.bufferish=e.bufferish))}r.EncodeBuffer=n;r=e("./write-core").preset;e("./flex-buffer").FlexEncoder.mixin(n.prototype),n.prototype.codec=r,n.prototype.write=function(e){this.codec.encode(this,e)}},{"./flex-buffer":21,"./write-core":25}],15:[function(e,t,r){r.encode=function n(e,t){return(t=new i(t)).write(e),t.read()};var i=e("./encode-buffer").EncodeBuffer},{"./encode-buffer":14}],16:[function(e,t,r){function n(e){return this instanceof n?void i.call(this,e):new n(e)}r.Encoder=n;var r=e("event-lite"),i=e("./encode-buffer").EncodeBuffer;n.prototype=new i,r.mixin(n.prototype),n.prototype.encode=function(e){this.write(e),this.emit("data",this.read())},n.prototype.end=function(e){arguments.length&&this.encode(e),this.flush(),this.emit("end")}},{"./encode-buffer":14,"event-lite":31}],17:[function(e,t,r){r.ExtBuffer=function n(e,t){return this instanceof n?(this.buffer=i.from(e),void(this.type=t)):new n(e,t)};var i=e("./bufferish")},{"./bufferish":8}],18:[function(t,e,r){function i(e){return(s=s||t("./encode").encode)(e)}function o(e){return e.valueOf()}function f(e){(e=RegExp.prototype.toString.call(e).split("/")).shift();var t=[e.pop()];return t.unshift(e.join("/")),t}function u(e){var t,r={};for(t in h)r[t]=e[t];return r}r.setExtPackers=function n(e){e.addExtPacker(14,Error,[u,i]),e.addExtPacker(1,EvalError,[u,i]),e.addExtPacker(2,RangeError,[u,i]),e.addExtPacker(3,ReferenceError,[u,i]),e.addExtPacker(4,SyntaxError,[u,i]),e.addExtPacker(5,TypeError,[u,i]),e.addExtPacker(6,URIError,[u,i]),e.addExtPacker(10,RegExp,[f,i]),e.addExtPacker(11,Boolean,[o,i]),e.addExtPacker(12,String,[o,i]),e.addExtPacker(13,Date,[Number,i]),e.addExtPacker(15,Number,[o,i]),"undefined"!=typeof Uint8Array&&(e.addExtPacker(17,Int8Array,l),e.addExtPacker(18,Uint8Array,l),e.addExtPacker(19,Int16Array,l),e.addExtPacker(20,Uint16Array,l),e.addExtPacker(21,Int32Array,l),e.addExtPacker(22,Uint32Array,l),e.addExtPacker(23,Float32Array,l),"undefined"!=typeof Float64Array&&e.addExtPacker(24,Float64Array,l),"undefined"!=typeof Uint8ClampedArray&&e.addExtPacker(25,Uint8ClampedArray,l),e.addExtPacker(26,ArrayBuffer,l),e.addExtPacker(29,DataView,l)),a.hasBuffer&&e.addExtPacker(27,c,a.from)};var s,a=t("./bufferish"),c=a.global,l=a.Uint8Array.from,h={name:1,message:1,stack:1,columnNumber:1,fileName:1,lineNumber:1}},{"./bufferish":8,"./encode":15}],19:[function(t,e,r){function i(e){return(s=s||t("./decode").decode)(e)}function o(e){return RegExp.apply(null,e)}function f(n){return function(e){var t,r=new n;for(t in h)r[t]=e[t];return r}}function u(t){return function(e){return new t(e)}}function a(e){return new Uint8Array(e).buffer}r.setExtUnpackers=function n(e){e.addExtUnpacker(14,[i,f(Error)]),e.addExtUnpacker(1,[i,f(EvalError)]),e.addExtUnpacker(2,[i,f(RangeError)]),e.addExtUnpacker(3,[i,f(ReferenceError)]),e.addExtUnpacker(4,[i,f(SyntaxError)]),e.addExtUnpacker(5,[i,f(TypeError)]),e.addExtUnpacker(6,[i,f(URIError)]),e.addExtUnpacker(10,[i,o]),e.addExtUnpacker(11,[i,u(Boolean)]),e.addExtUnpacker(12,[i,u(String)]),e.addExtUnpacker(13,[i,u(Date)]),e.addExtUnpacker(15,[i,u(Number)]),"undefined"!=typeof Uint8Array&&(e.addExtUnpacker(17,u(Int8Array)),e.addExtUnpacker(18,u(Uint8Array)),e.addExtUnpacker(19,[a,u(Int16Array)]),e.addExtUnpacker(20,[a,u(Uint16Array)]),e.addExtUnpacker(21,[a,u(Int32Array)]),e.addExtUnpacker(22,[a,u(Uint32Array)]),e.addExtUnpacker(23,[a,u(Float32Array)]),"undefined"!=typeof Float64Array&&e.addExtUnpacker(24,[a,u(Float64Array)]),"undefined"!=typeof Uint8ClampedArray&&e.addExtUnpacker(25,u(Uint8ClampedArray)),e.addExtUnpacker(26,a),e.addExtUnpacker(29,[a,u(DataView)])),c.hasBuffer&&e.addExtUnpacker(27,u(l))};var s,c=t("./bufferish"),l=c.global,h={name:1,message:1,stack:1,columnNumber:1,fileName:1,lineNumber:1}},{"./bufferish":8,"./decode":12}],20:[function(e,t,r){e("./read-core"),e("./write-core"),r.createCodec=e("./codec-base").createCodec},{"./codec-base":9,"./read-core":22,"./write-core":25}],21:[function(d,p,_){function n(){if(!(this instanceof n))return new n}function i(){if(!(this instanceof i))return new i}function u(){throw new Error("method not implemented: write()")}function a(){throw new Error("method not implemented: fetch()")}function s(){return this.buffers&&this.buffers.length?(this.flush(),this.pull()):this.fetch()}function c(e){(this.buffers||(this.buffers=[])).push(e)}function h(){return(this.buffers||(this.buffers=[])).shift()}function l(n){return function r(e){for(var t in n)e[t]=n[t];return e}}_.FlexDecoder=n,_.FlexEncoder=i;var g=d("./bufferish"),v="BUFFER_SHORTAGE";n.mixin=l(function o(){return{bufferish:g,write:function t(e){var r=this.offset?g.prototype.slice.call(this.buffer,this.offset):this.buffer;this.buffer=r?e?this.bufferish.concat([r,e]):r:e,this.offset=0},fetch:a,flush:function r(){for(;this.offset<this.buffer.length;){var e,t=this.offset;try{e=this.fetch()}catch(e){if(e&&e.message!=v)throw e;this.offset=t;break}this.push(e)}},push:c,pull:h,read:s,reserve:function e(t){var r=this.offset;if((t=r+t)>this.buffer.length)throw new Error(v);return this.offset=t,r},offset:0}}()),n.mixin(n.prototype),i.mixin=l(function f(){return{bufferish:g,write:u,fetch:function t(){var e=this.start;if(e<this.offset){var r=this.start=this.offset;return g.prototype.slice.call(this.buffer,e,r)}},flush:function r(){for(;this.start<this.offset;){var e=this.fetch();e&&this.push(e)}},push:c,pull:function e(){var t=this.buffers||(this.buffers=[]),r=1<t.length?this.bufferish.concat(t):t[0];return t.length=0,r},read:s,reserve:function n(e){var t=0|e;if(this.buffer){var r=this.buffer.length,i=0|this.offset,s=i+t;if(s<r)return this.offset=s,i;this.flush(),e=Math.max(e,Math.min(2*r,this.maxBufferSize))}return e=Math.max(e,this.minBufferSize),this.buffer=this.bufferish.alloc(e),this.start=0,this.offset=t,0},send:function i(e){var t=e.length;t>this.minBufferSize?(this.flush(),this.push(e)):(t=this.reserve(t),g.prototype.copy.call(e,this.buffer,t))},maxBufferSize:65536,minBufferSize:2048,offset:0,start:0}}()),i.mixin(i.prototype)},{"./bufferish":8}],22:[function(e,t,s){function n(e){var i=l.getReadToken(e);return function r(e){var t=c(e),n=i[t];if(!n)throw new Error("Invalid type: "+(t&&"0x"+t.toString(16)));return n(e)}}function i(){var e=this.options;return this.decode=n(e),e&&e.preset&&u.setExtUnpackers(this),this}var a=e("./ext-buffer").ExtBuffer,u=e("./ext-unpacker"),c=e("./read-format").readUint8,l=e("./read-token"),h=e("./codec-base");h.install({addExtUnpacker:function o(e,t){(this.extUnpackers||(this.extUnpackers=[]))[e]=h.filter(t)},getExtUnpacker:function f(t){return(this.extUnpackers||(this.extUnpackers=[]))[t]||function r(e){return new a(e,t)}},init:i}),s.preset=i.call(h.preset)},{"./codec-base":9,"./ext-buffer":17,"./ext-unpacker":19,"./read-format":23,"./read-token":24}],23:[function(e,t,r){function i(e,t){for(var r={},n=new Array(t),i=new Array(t),s=e.codec.decode,a=0;a<t;a++)n[a]=s(e),i[a]=s(e);for(a=0;a<t;a++)r[n[a]]=i[a];return r}function o(e,t){for(var r=new Map,n=new Array(t),i=new Array(t),s=e.codec.decode,a=0;a<t;a++)n[a]=s(e),i[a]=s(e);for(a=0;a<t;a++)r.set(n[a],i[a]);return r}function f(e,t){for(var r=new Array(t),n=e.codec.decode,i=0;i<t;i++)r[i]=n(e);return r}function u(e,t){var r=e.reserve(t),t=r+t;return B.toString.call(e.buffer,"utf-8",r,t)}function a(e,t){var r=e.reserve(t),t=r+t,t=B.slice.call(e.buffer,r,t);return R.from(t)}function s(e,t){var r=e.reserve(t),t=r+t,t=B.slice.call(e.buffer,r,t);return R.Uint8Array.from(t).buffer}function c(e,t){var r=e.reserve(t+1),n=e.buffer[r++],i=r+t,t=e.codec.getExtUnpacker(n);if(!t)throw new Error("Invalid ext type: "+(n&&"0x"+n.toString(16)));return t(B.slice.call(e.buffer,r,i))}function h(e){var t=e.reserve(1);return e.buffer[t]}function l(e){var t=e.reserve(1),t=e.buffer[t];return 128&t?t-256:t}function p(e){var t=e.reserve(2),e=e.buffer;return e[t++]<<8|e[t]}function d(e){var t=e.reserve(2),e=e.buffer,t=e[t++]<<8|e[t];return 32768&t?t-65536:t}function y(e){var t=e.reserve(4),e=e.buffer;return 16777216*e[t++]+(e[t++]<<16)+(e[t++]<<8)+e[t]}function v(e){var t=e.reserve(4),e=e.buffer;return e[t++]<<24|e[t++]<<16|e[t++]<<8|e[t]}function g(r,n){return function(e){var t=e.reserve(r);return n.call(e.buffer,t,D)}}function b(e){return new k(this,e).toNumber()}function w(e){return new C(this,e).toNumber()}function E(e){return new k(this,e)}function A(e){return new C(this,e)}function m(e){return _.read(this,e,!1,23,4)}function x(e){return _.read(this,e,!1,52,8)}var _=e("ieee754"),S=e("int64-buffer"),k=S.Uint64BE,C=S.Int64BE;r.getReadFormat=function n(e){var t=R.hasArrayBuffer&&e&&e.binarraybuffer,r=e&&e.int64;return{map:P&&e&&e.usemap?o:i,array:f,str:u,bin:t?s:a,ext:c,uint8:h,uint16:p,uint32:y,uint64:g(8,r?E:b),int8:l,int16:d,int32:v,int64:g(8,r?A:w),float32:g(4,m),float64:g(8,x)}},r.readUint8=h;var R=e("./bufferish"),B=e("./bufferish-proto"),P="undefined"!=typeof Map,D=!0},{"./bufferish":8,"./bufferish-proto":6,ieee754:32,"int64-buffer":33}],24:[function(e,t,r){function i(e){for(var t=new Array(256),r=0;r<=127;r++)t[r]=f(r);for(r=128;r<=143;r++)t[r]=a(r-128,e.map);for(r=144;r<=159;r++)t[r]=a(r-144,e.array);for(r=160;r<=191;r++)t[r]=a(r-160,e.str);for(t[192]=f(null),t[193]=null,t[194]=f(!1),t[195]=f(!0),t[196]=u(e.uint8,e.bin),t[197]=u(e.uint16,e.bin),t[198]=u(e.uint32,e.bin),t[199]=u(e.uint8,e.ext),t[200]=u(e.uint16,e.ext),t[201]=u(e.uint32,e.ext),t[202]=e.float32,t[203]=e.float64,t[204]=e.uint8,t[205]=e.uint16,t[206]=e.uint32,t[207]=e.uint64,t[208]=e.int8,t[209]=e.int16,t[210]=e.int32,t[211]=e.int64,t[212]=a(1,e.ext),t[213]=a(2,e.ext),t[214]=a(4,e.ext),t[215]=a(8,e.ext),t[216]=a(16,e.ext),t[217]=u(e.uint8,e.str),t[218]=u(e.uint16,e.str),t[219]=u(e.uint32,e.str),t[220]=u(e.uint16,e.array),t[221]=u(e.uint32,e.array),t[222]=u(e.uint16,e.map),t[223]=u(e.uint32,e.map),r=224;r<=255;r++)t[r]=f(r-256);return t}function f(e){return function(){return e}}function u(r,n){return function(e){var t=r(e);return n(e,t)}}function a(t,r){return function(e){return r(e,t)}}var s=e("./read-format");r.getReadToken=function n(e){var t=s.getReadFormat(e);return(e&&e.useraw?function o(e){var t,r=i(e).slice();for(r[217]=r[196],r[218]=r[197],r[219]=r[198],t=160;t<=191;t++)r[t]=a(t-160,e.bin);return r}:i)(t)}},{"./read-format":23}],25:[function(e,t,r){function n(e){var i=u.getWriteType(e);return function r(e,t){var n=i[_typeof(t)];if(!n)throw new Error(\'Unsupported type "\'+_typeof(t)+\'": \'+t);n(e,t)}}function i(){var e=this.options;return this.encode=n(e),e&&e.preset&&a.setExtPackers(this),this}var s=e("./ext-buffer").ExtBuffer,a=e("./ext-packer"),u=e("./write-type"),f=e("./codec-base");f.install({addExtPacker:function o(t,e,r){function n(e){return r&&(e=r(e)),new s(e,t)}r=f.filter(r);var i=e.name;i&&"Object"!==i?(this.extPackers||(this.extPackers={}))[i]=n:(this.extEncoderList||(this.extEncoderList=[])).unshift([e,n])},getExtPacker:function f(e){var t=this.extPackers||(this.extPackers={}),r=e.constructor;if(t=r&&r.name&&t[r.name])return t;for(var n=this.extEncoderList||(this.extEncoderList=[]),i=n.length,s=0;s<i;s++){var a=n[s];if(r===a[0])return a[1]}},init:i}),r.preset=i.call(f.preset)},{"./codec-base":9,"./ext-buffer":17,"./ext-packer":18,"./write-type":27}],26:[function(e,t,r){function o(){var e=y.slice();return e[196]=u(196),e[197]=a(197),e[198]=s(198),e[199]=u(199),e[200]=a(200),e[201]=s(201),e[202]=c(202,4,k.writeFloatBE||p,!0),e[203]=c(203,8,k.writeDoubleBE||d,!0),e[204]=u(204),e[205]=a(205),e[206]=s(206),e[207]=c(207,8,h),e[208]=u(208),e[209]=a(209),e[210]=s(210),e[211]=c(211,8,l),e[217]=u(217),e[218]=a(218),e[219]=s(219),e[220]=a(220),e[221]=s(221),e[222]=a(222),e[223]=s(223),e}function u(n){return function(e,t){var r=e.reserve(2),e=e.buffer;e[r++]=n,e[r]=t}}function a(n){return function(e,t){var r=e.reserve(3),e=e.buffer;e[r++]=n,e[r++]=t>>>8,e[r]=t}}function s(n){return function(e,t){var r=e.reserve(5),e=e.buffer;e[r++]=n,e[r++]=t>>>24,e[r++]=t>>>16,e[r++]=t>>>8,e[r]=t}}function c(n,i,s,a){return function(e,t){var r=e.reserve(i+1);e.buffer[r++]=n,s.call(e.buffer,t,r,a)}}function h(e,t){new v(this,t,e)}function l(e,t){new m(this,t,e)}function p(e,t){_.write(this,e,t,!1,23,4)}function d(e,t){_.write(this,e,t,!1,52,8)}var _=e("ieee754"),g=e("int64-buffer"),v=g.Uint64BE,m=g.Int64BE,y=e("./write-uint8").uint8,S=e("./bufferish"),b=S.global,w=S.hasBuffer&&"TYPED_ARRAY_SUPPORT"in b&&!b.TYPED_ARRAY_SUPPORT,k=S.hasBuffer&&b.prototype||{};r.getWriteToken=function n(e){return(e&&e.uint8array?function i(){var e=o();return e[202]=c(202,4,p),e[203]=c(203,8,d),e}:w||S.hasBuffer&&e&&e.safe?function f(){var e=y.slice();return e[196]=c(196,1,b.prototype.writeUInt8),e[197]=c(197,2,b.prototype.writeUInt16BE),e[198]=c(198,4,b.prototype.writeUInt32BE),e[199]=c(199,1,b.prototype.writeUInt8),e[200]=c(200,2,b.prototype.writeUInt16BE),e[201]=c(201,4,b.prototype.writeUInt32BE),e[202]=c(202,4,b.prototype.writeFloatBE),e[203]=c(203,8,b.prototype.writeDoubleBE),e[204]=c(204,1,b.prototype.writeUInt8),e[205]=c(205,2,b.prototype.writeUInt16BE),e[206]=c(206,4,b.prototype.writeUInt32BE),e[207]=c(207,8,h),e[208]=c(208,1,b.prototype.writeInt8),e[209]=c(209,2,b.prototype.writeInt16BE),e[210]=c(210,4,b.prototype.writeInt32BE),e[211]=c(211,8,l),e[217]=c(217,1,b.prototype.writeUInt8),e[218]=c(218,2,b.prototype.writeUInt16BE),e[219]=c(219,4,b.prototype.writeUInt32BE),e[220]=c(220,2,b.prototype.writeUInt16BE),e[221]=c(221,4,b.prototype.writeUInt32BE),e[222]=c(222,2,b.prototype.writeUInt16BE),e[223]=c(223,4,b.prototype.writeUInt32BE),e}:o)()}},{"./bufferish":8,"./write-uint8":28,ieee754:32,"int64-buffer":33}],27:[function(e,t,i){var l=e("isarray"),s=e("int64-buffer"),h=s.Uint64BE,d=s.Int64BE,p=e("./bufferish"),_=e("./bufferish-proto"),g=e("./write-token"),v=e("./write-uint8").uint8,y=e("./ext-buffer").ExtBuffer,S="undefined"!=typeof Uint8Array,C="undefined"!=typeof Map,D=[];D[1]=212,D[2]=213,D[4]=214,D[8]=215,D[16]=216,i.getWriteType=function n(t){function w(e,t){if(null===t)return A(e,t);if(a(t))return u(e,t);if(l(t))return function m(e,t){var r=t.length;f[r<16?144+r:r<=65535?220:221](e,r);for(var n=e.codec.encode,i=0;i<r;i++)n(e,t[i])}(e,t);if(h.isUint64BE(t))return function n(e,t){f[207](e,t.toArray())}(e,t);if(d.isInt64BE(t))return function o(e,t){f[211](e,t.toArray())}(e,t);var r=e.codec.getExtPacker(t);return r&&(t=r(t)),t instanceof y?function U(e,t){var r=t.buffer,n=r.length,i=D[n]||(n<255?199:n<=65535?200:201);f[i](e,n),v[t.type](e),e.send(r)}(e,t):void c(e,t)}function A(e,t){f[192](e,t)}function x(e,t){var r=t.length;f[r<255?196:r<=65535?197:198](e,r),e.send(t)}function P(t,r){var e=Object.keys(r),n=e.length;f[n<16?128+n:n<=65535?222:223](t,n);var i=t.codec.encode;e.forEach(function(e){i(t,e),i(t,r[e])})}var f=g.getWriteToken(t),i=t&&t.useraw,s=S&&t&&t.binarraybuffer,a=s?p.isArrayBuffer:p.isBuffer,u=s?function B(e,t){x(e,new Uint8Array(t))}:x,c=C&&t&&t.usemap?function R(n,e){if(!(e instanceof Map))return P(n,e);var t=e.size;f[t<16?128+t:t<=65535?222:223](n,t);var i=n.codec.encode;e.forEach(function(e,t,r){i(n,t),i(n,e)})}:P;return{boolean:function r(e,t){f[t?195:194](e,t)},function:A,number:function e(t,r){var n=0|r;return r!==n?void f[203](t,r):void f[-32<=n&&n<=127?255&n:0<=n?n<=255?204:n<=65535?205:206:-128<=n?208:-32768<=n?209:210](t,n)},object:i?function E(e,t){return a(t)?function k(e,t){var r=t.length;f[r<32?160+r:r<=65535?218:219](e,r),e.send(t)}(e,t):void w(e,t)}:w,string:function b(u){return function r(e,t){var n=5+3*(o=t.length);e.offset=e.reserve(n);var i=e.buffer,s=u(o),a=e.offset+s,o=_.write.call(i,t,a),n=u(o);s!==n&&(t=a+n-s,s=a+o,_.copy.call(i,i,t,a,s)),f[1===n?160+o:n<=3?215+n:219](e,o),e.offset+=o}}(i?function g(e){return e<32?1:e<=65535?3:5}:function v(e){return e<32?1:e<=255?2:e<=65535?3:5}),symbol:A,undefined:A}}},{"./bufferish":8,"./bufferish-proto":6,"./ext-buffer":17,"./write-token":26,"./write-uint8":28,"int64-buffer":33,isarray:34}],28:[function(e,t,r){for(var n=r.uint8=new Array(256),i=0;i<=255;i++)n[i]=function n(r){return function(e){var t=e.reserve(1);e.buffer[t]=r}}(i)},{}],29:[function(r,e,n){(function(e){"use strict";function i(){return Buffer.TYPED_ARRAY_SUPPORT?2147483647:1073741823}function o(e,t){if(i()<t)throw new RangeError("Invalid typed array length");return Buffer.TYPED_ARRAY_SUPPORT?(e=new Uint8Array(t)).__proto__=Buffer.prototype:(null===e&&(e=new Buffer(t)),e.length=t),e}function Buffer(e,t,r){if(!(Buffer.TYPED_ARRAY_SUPPORT||this instanceof Buffer))return new Buffer(e,t,r);if("number"!=typeof e)return f(this,e,t,r);if("string"==typeof t)throw new Error("If encoding is specified then the first argument must be a string");return s(this,e)}function f(e,t,r,n){if("number"==typeof t)throw new TypeError(\'"value" argument must not be a number\');return"undefined"!=typeof ArrayBuffer&&t instanceof ArrayBuffer?function l(e,t,r,n){if(t.byteLength,r<0||t.byteLength<r)throw new RangeError("\'offset\' is out of bounds");if(t.byteLength<r+(n||0))throw new RangeError("\'length\' is out of bounds");return t=void 0===r&&void 0===n?new Uint8Array(t):void 0===n?new Uint8Array(t,r):new Uint8Array(t,r,n),Buffer.TYPED_ARRAY_SUPPORT?(e=t).__proto__=Buffer.prototype:e=h(e,t),e}(e,t,r,n):"string"==typeof t?function c(e,t,r){if("string"==typeof r&&""!==r||(r="utf8"),!Buffer.isEncoding(r))throw new TypeError(\'"encoding" must be a valid string encoding\');var n=0|v(t,r),r=(e=o(e,n)).write(t,r);return r!==n&&(e=e.slice(0,r)),e}(e,t,r):function p(e,t){if(Buffer.isBuffer(t)){var r=0|d(t.length);return 0===(e=o(e,r)).length||t.copy(e,0,0,r),e}if(t){if("undefined"!=typeof ArrayBuffer&&t.buffer instanceof ArrayBuffer||"length"in t)return"number"!=typeof t.length||function H(e){return e!=e}(t.length)?o(e,0):h(e,t);if("Buffer"===t.type&&A(t.data))return h(e,t.data)}throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")}(e,t)}function u(e){if("number"!=typeof e)throw new TypeError(\'"size" argument must be a number\');if(e<0)throw new RangeError(\'"size" argument must not be negative\')}function s(e,t){if(u(t),e=o(e,t<0?0:0|d(t)),!Buffer.TYPED_ARRAY_SUPPORT)for(var r=0;r<t;++r)e[r]=0;return e}function h(e,t){var r=t.length<0?0:0|d(t.length);e=o(e,r);for(var n=0;n<r;n+=1)e[n]=255&t[n];return e}function d(e){if(e>=i())throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+i().toString(16)+" bytes");return 0|e}function v(e,t){if(Buffer.isBuffer(e))return e.length;if("undefined"!=typeof ArrayBuffer&&"function"==typeof ArrayBuffer.isView&&(ArrayBuffer.isView(e)||e instanceof ArrayBuffer))return e.byteLength;"string"!=typeof e&&(e=""+e);var r=e.length;if(0===r)return 0;for(var n=!1;;)switch(t){case"ascii":case"latin1":case"binary":return r;case"utf8":case"utf-8":case void 0:return q(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*r;case"hex":return r>>>1;case"base64":return X(e).length;default:if(n)return q(e).length;t=(""+t).toLowerCase(),n=!0}}function g(e,t,r){var n=!1;if((void 0===t||t<0)&&(t=0),t>this.length)return"";if((void 0===r||r>this.length)&&(r=this.length),r<=0)return"";if((r>>>=0)<=(t>>>=0))return"";for(e=e||"utf8";;)switch(e){case"hex":return function I(e,t,r){var n=e.length;(!t||t<0)&&(t=0),(!r||r<0||n<r)&&(r=n);for(var i="",s=t;s<r;++s)i+=function V(e){return e<16?"0"+e.toString(16):e.toString(16)}(e[s]);return i}(this,t,r);case"utf8":case"utf-8":return k(this,t,r);case"ascii":return function T(e,t,r){var n="";r=Math.min(e.length,r);for(var i=t;i<r;++i)n+=String.fromCharCode(127&e[i]);return n}(this,t,r);case"latin1":case"binary":return function S(e,t,r){var n="";r=Math.min(e.length,r);for(var i=t;i<r;++i)n+=String.fromCharCode(e[i]);return n}(this,t,r);case"base64":return function R(e,t,r){return 0===t&&r===e.length?S.fromByteArray(e):S.fromByteArray(e.slice(t,r))}(this,t,r);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return function Y(e,t,r){for(var n=e.slice(t,r),i="",s=0;s<n.length;s+=2)i+=String.fromCharCode(n[s]+256*n[s+1]);return i}(this,t,r);default:if(n)throw new TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),n=!0}}function b(e,t,r){var n=e[t];e[t]=e[r],e[r]=n}function w(e,t,r,n,i){if(0===e.length)return-1;if("string"==typeof r?(n=r,r=0):2147483647<r?r=2147483647:r<-2147483648&&(r=-2147483648),r=+r,isNaN(r)&&(r=i?0:e.length-1),r<0&&(r=e.length+r),r>=e.length){if(i)return-1;r=e.length-1}else if(r<0){if(!i)return-1;r=0}if("string"==typeof t&&(t=Buffer.from(t,n)),Buffer.isBuffer(t))return 0===t.length?-1:E(e,t,r,n,i);if("number"==typeof t)return t&=255,Buffer.TYPED_ARRAY_SUPPORT&&"function"==typeof Uint8Array.prototype.indexOf?(i?Uint8Array.prototype.indexOf:Uint8Array.prototype.lastIndexOf).call(e,t,r):E(e,[t],r,n,i);throw new TypeError("val must be string, number or Buffer")}function E(e,t,r,n,i){function o(e,t){return 1===s?e[t]:e.readUInt16BE(t*s)}var s=1,a=e.length,u=t.length;if(void 0!==n&&("ucs2"===(n=String(n).toLowerCase())||"ucs-2"===n||"utf16le"===n||"utf-16le"===n)){if(e.length<2||t.length<2)return-1;a/=s=2,u/=2,r/=2}if(i)for(var f=-1,c=r;c<a;c++)if(o(e,c)===o(t,-1===f?0:c-f)){if(-1===f&&(f=c),c-f+1===u)return f*s}else-1!==f&&(c-=c-f),f=-1;else for(a<r+u&&(r=a-u),c=r;0<=c;c--){for(var l=!0,h=0;h<u;h++)if(o(e,c+h)!==o(t,h)){l=!1;break}if(l)return c}return-1}function x(e,t,r,n){return G(function W(e){for(var t=[],r=0;r<e.length;++r)t.push(255&e.charCodeAt(r));return t}(t),e,r,n)}function P(e,t,r,n){return G(function J(e,t){for(var r,n,i=[],s=0;s<e.length&&!((t-=2)<0);++s)n=e.charCodeAt(s),r=n>>8,n=n%256,i.push(n),i.push(r);return i}(t,e.length-r),e,r,n)}function k(e,t,r){r=Math.min(e.length,r);for(var n=[],i=t;i<r;){var s,a,o,u,f=e[i],c=null,l=239<f?4:223<f?3:191<f?2:1;if(i+l<=r)switch(l){case 1:f<128&&(c=f);break;case 2:128==(192&(s=e[i+1]))&&(127<(u=(31&f)<<6|63&s)&&(c=u));break;case 3:s=e[i+1],a=e[i+2],128==(192&s)&&128==(192&a)&&(2047<(u=(15&f)<<12|(63&s)<<6|63&a)&&(u<55296||57343<u)&&(c=u));break;case 4:s=e[i+1],a=e[i+2],o=e[i+3],128==(192&s)&&128==(192&a)&&128==(192&o)&&(65535<(u=(15&f)<<18|(63&s)<<12|(63&a)<<6|63&o)&&u<1114112&&(c=u))}null===c?(c=65533,l=1):65535<c&&(c-=65536,n.push(c>>>10&1023|55296),c=56320|1023&c),n.push(c),i+=l}return function _(e){var t=e.length;if(t<=I)return String.fromCharCode.apply(String,e);for(var r="",n=0;n<t;)r+=String.fromCharCode.apply(String,e.slice(n,n+=I));return r}(n)}function C(e,t,r){if(e%1!=0||e<0)throw new RangeError("offset is not uint");if(r<e+t)throw new RangeError("Trying to access beyond buffer length")}function D(e,t,r,n,i,s){if(!Buffer.isBuffer(e))throw new TypeError(\'"buffer" argument must be a Buffer instance\');if(i<t||t<s)throw new RangeError(\'"value" argument is out of bounds\');if(r+n>e.length)throw new RangeError("Index out of range")}function O(e,t,r,n){t<0&&(t=65535+t+1);for(var i=0,s=Math.min(e.length-r,2);i<s;++i)e[r+i]=(t&255<<8*(n?i:1-i))>>>8*(n?i:1-i)}function L(e,t,r,n){t<0&&(t=4294967295+t+1);for(var i=0,s=Math.min(e.length-r,4);i<s;++i)e[r+i]=t>>>8*(n?i:3-i)&255}function M(e,t,r,n){if(r+n>e.length)throw new RangeError("Index out of range");if(r<0)throw new RangeError("Index out of range")}function N(e,t,r,n,i){return i||M(e,0,r,4),B.write(e,t,r,n,23,4),r+4}function F(e,t,r,n,i){return i||M(e,0,r,8),B.write(e,t,r,n,52,8),r+8}function j(e){if((e=function z(e){return e.trim?e.trim():e.replace(/^\\s+|\\s+$/g,"")}(e).replace(t,"")).length<2)return"";for(;e.length%4!=0;)e+="=";return e}function q(e,t){t=t||1/0;for(var r,n=e.length,i=null,s=[],a=0;a<n;++a){if(55295<(r=e.charCodeAt(a))&&r<57344){if(!i){if(56319<r){-1<(t-=3)&&s.push(239,191,189);continue}if(a+1===n){-1<(t-=3)&&s.push(239,191,189);continue}i=r;continue}if(r<56320){-1<(t-=3)&&s.push(239,191,189),i=r;continue}r=65536+(i-55296<<10|r-56320)}else i&&-1<(t-=3)&&s.push(239,191,189);if(i=null,r<128){if(--t<0)break;s.push(r)}else if(r<2048){if((t-=2)<0)break;s.push(r>>6|192,63&r|128)}else if(r<65536){if((t-=3)<0)break;s.push(r>>12|224,r>>6&63|128,63&r|128)}else{if(!(r<1114112))throw new Error("Invalid code point");if((t-=4)<0)break;s.push(r>>18|240,r>>12&63|128,r>>6&63|128,63&r|128)}}return s}function X(e){return S.toByteArray(j(e))}function G(e,t,r,n){for(var i=0;i<n&&!(i+r>=t.length||i>=e.length);++i)t[i+r]=e[i];return i}var S=r("base64-js"),B=r("ieee754"),A=r("isarray");n.Buffer=Buffer,n.SlowBuffer=function y(e){return+e!=e&&(e=0),Buffer.alloc(+e)},n.INSPECT_MAX_BYTES=50,Buffer.TYPED_ARRAY_SUPPORT=void 0!==e.TYPED_ARRAY_SUPPORT?e.TYPED_ARRAY_SUPPORT:function n(){try{var e=new Uint8Array(1);return e.__proto__={__proto__:Uint8Array.prototype,foo:function foo(){return 42}},42===e.foo()&&"function"==typeof e.subarray&&0===e.subarray(1,1).byteLength}catch(e){return!1}}(),n.kMaxLength=i(),Buffer.poolSize=8192,Buffer._augment=function(e){return e.__proto__=Buffer.prototype,e},Buffer.from=function(e,t,r){return f(null,e,t,r)},Buffer.TYPED_ARRAY_SUPPORT&&(Buffer.prototype.__proto__=Uint8Array.prototype,Buffer.__proto__=Uint8Array,"undefined"!=typeof Symbol&&Symbol.species&&Buffer[Symbol.species]===Buffer&&Object.defineProperty(Buffer,Symbol.species,{value:null,configurable:!0})),Buffer.alloc=function(e,t,r){return function a(e,t,r,n){return u(t),!(t<=0)&&void 0!==r?"string"==typeof n?o(e,t).fill(r,n):o(e,t).fill(r):o(e,t)}(null,e,t,r)},Buffer.allocUnsafe=function(e){return s(null,e)},Buffer.allocUnsafeSlow=function(e){return s(null,e)},Buffer.isBuffer=function(e){return!(null==e||!e._isBuffer)},Buffer.compare=function(e,t){if(!Buffer.isBuffer(e)||!Buffer.isBuffer(t))throw new TypeError("Arguments must be Buffers");if(e===t)return 0;for(var r=e.length,n=t.length,i=0,s=Math.min(r,n);i<s;++i)if(e[i]!==t[i]){r=e[i],n=t[i];break}return r<n?-1:n<r?1:0},Buffer.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},Buffer.concat=function(e,t){if(!A(e))throw new TypeError(\'"list" argument must be an Array of Buffers\');if(0===e.length)return Buffer.alloc(0);if(void 0===t)for(i=t=0;i<e.length;++i)t+=e[i].length;for(var r=Buffer.allocUnsafe(t),n=0,i=0;i<e.length;++i){var s=e[i];if(!Buffer.isBuffer(s))throw new TypeError(\'"list" argument must be an Array of Buffers\');s.copy(r,n),n+=s.length}return r},Buffer.byteLength=v,Buffer.prototype._isBuffer=!0,Buffer.prototype.swap16=function(){var e=this.length;if(e%2!=0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var t=0;t<e;t+=2)b(this,t,t+1);return this},Buffer.prototype.swap32=function(){var e=this.length;if(e%4!=0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var t=0;t<e;t+=4)b(this,t,t+3),b(this,t+1,t+2);return this},Buffer.prototype.swap64=function(){var e=this.length;if(e%8!=0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var t=0;t<e;t+=8)b(this,t,t+7),b(this,t+1,t+6),b(this,t+2,t+5),b(this,t+3,t+4);return this},Buffer.prototype.toString=function(){var e=0|this.length;return 0==e?"":0===arguments.length?k(this,0,e):g.apply(this,arguments)},Buffer.prototype.equals=function(e){if(!Buffer.isBuffer(e))throw new TypeError("Argument must be a Buffer");return this===e||0===Buffer.compare(this,e)},Buffer.prototype.inspect=function(){var e="",t=n.INSPECT_MAX_BYTES;return 0<this.length&&(e=this.toString("hex",0,t).match(/.{2}/g).join(" "),this.length>t&&(e+=" ... ")),"<Buffer "+e+">"},Buffer.prototype.compare=function(e,t,r,n,i){if(!Buffer.isBuffer(e))throw new TypeError("Argument must be a Buffer");if(void 0===t&&(t=0),void 0===r&&(r=e?e.length:0),void 0===n&&(n=0),void 0===i&&(i=this.length),t<0||r>e.length||n<0||i>this.length)throw new RangeError("out of range index");if(i<=n&&r<=t)return 0;if(i<=n)return-1;if(r<=t)return 1;if(this===e)return 0;for(var s=(i>>>=0)-(n>>>=0),a=(r>>>=0)-(t>>>=0),o=Math.min(s,a),u=this.slice(n,i),f=e.slice(t,r),c=0;c<o;++c)if(u[c]!==f[c]){s=u[c],a=f[c];break}return s<a?-1:a<s?1:0},Buffer.prototype.includes=function(e,t,r){return-1!==this.indexOf(e,t,r)},Buffer.prototype.indexOf=function(e,t,r){return w(this,e,t,r,!0)},Buffer.prototype.lastIndexOf=function(e,t,r){return w(this,e,t,r,!1)},Buffer.prototype.write=function(e,t,r,n){if(void 0===t)n="utf8",r=this.length,t=0;else if(void 0===r&&"string"==typeof t)n=t,r=this.length,t=0;else{if(!isFinite(t))throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");t|=0,isFinite(r)?(r|=0,void 0===n&&(n="utf8")):(n=r,r=void 0)}var i=this.length-t;if((void 0===r||i<r)&&(r=i),0<e.length&&(r<0||t<0)||t>this.length)throw new RangeError("Attempt to write outside buffer bounds");n=n||"utf8";for(var s=!1;;)switch(n){case"hex":return function A(e,t,r,n){r=Number(r)||0;var i=e.length-r;if(n?i<(n=Number(n))&&(n=i):n=i,(i=t.length)%2!=0)throw new TypeError("Invalid hex string");i/2<n&&(n=i/2);for(var s=0;s<n;++s){var a=parseInt(t.substr(2*s,2),16);if(isNaN(a))return s;e[r+s]=a}return s}(this,e,t,r);case"utf8":case"utf-8":return function m(e,t,r,n){return G(q(t,e.length-r),e,r,n)}(this,e,t,r);case"ascii":return x(this,e,t,r);case"latin1":case"binary":return x(this,e,t,r);case"base64":return function U(e,t,r,n){return G(X(t),e,r,n)}(this,e,t,r);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return P(this,e,t,r);default:if(s)throw new TypeError("Unknown encoding: "+n);n=(""+n).toLowerCase(),s=!0}},Buffer.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};var I=4096;Buffer.prototype.slice=function(e,t){var r=this.length;if((e=~~e)<0?(e+=r)<0&&(e=0):r<e&&(e=r),(t=void 0===t?r:~~t)<0?(t+=r)<0&&(t=0):r<t&&(t=r),t<e&&(t=e),Buffer.TYPED_ARRAY_SUPPORT)(i=this.subarray(e,t)).__proto__=Buffer.prototype;else for(var n=t-e,i=new Buffer(n,void 0),s=0;s<n;++s)i[s]=this[s+e];return i},Buffer.prototype.readUIntLE=function(e,t,r){e|=0,t|=0,r||C(e,t,this.length);for(var n=this[e],i=1,s=0;++s<t&&(i*=256);)n+=this[e+s]*i;return n},Buffer.prototype.readUIntBE=function(e,t,r){e|=0,t|=0,r||C(e,t,this.length);for(var n=this[e+--t],i=1;0<t&&(i*=256);)n+=this[e+--t]*i;return n},Buffer.prototype.readUInt8=function(e,t){return t||C(e,1,this.length),this[e]},Buffer.prototype.readUInt16LE=function(e,t){return t||C(e,2,this.length),this[e]|this[e+1]<<8},Buffer.prototype.readUInt16BE=function(e,t){return t||C(e,2,this.length),this[e]<<8|this[e+1]},Buffer.prototype.readUInt32LE=function(e,t){return t||C(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+16777216*this[e+3]},Buffer.prototype.readUInt32BE=function(e,t){return t||C(e,4,this.length),16777216*this[e]+(this[e+1]<<16|this[e+2]<<8|this[e+3])},Buffer.prototype.readIntLE=function(e,t,r){e|=0,t|=0,r||C(e,t,this.length);for(var n=this[e],i=1,s=0;++s<t&&(i*=256);)n+=this[e+s]*i;return(i*=128)<=n&&(n-=Math.pow(2,8*t)),n},Buffer.prototype.readIntBE=function(e,t,r){e|=0,t|=0,r||C(e,t,this.length);for(var n=t,i=1,s=this[e+--n];0<n&&(i*=256);)s+=this[e+--n]*i;return(i*=128)<=s&&(s-=Math.pow(2,8*t)),s},Buffer.prototype.readInt8=function(e,t){return t||C(e,1,this.length),128&this[e]?-1*(255-this[e]+1):this[e]},Buffer.prototype.readInt16LE=function(e,t){t||C(e,2,this.length);e=this[e]|this[e+1]<<8;return 32768&e?4294901760|e:e},Buffer.prototype.readInt16BE=function(e,t){t||C(e,2,this.length);e=this[e+1]|this[e]<<8;return 32768&e?4294901760|e:e},Buffer.prototype.readInt32LE=function(e,t){return t||C(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24},Buffer.prototype.readInt32BE=function(e,t){return t||C(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]},Buffer.prototype.readFloatLE=function(e,t){return t||C(e,4,this.length),B.read(this,e,!0,23,4)},Buffer.prototype.readFloatBE=function(e,t){return t||C(e,4,this.length),B.read(this,e,!1,23,4)},Buffer.prototype.readDoubleLE=function(e,t){return t||C(e,8,this.length),B.read(this,e,!0,52,8)},Buffer.prototype.readDoubleBE=function(e,t){return t||C(e,8,this.length),B.read(this,e,!1,52,8)},Buffer.prototype.writeUIntLE=function(e,t,r,n){e=+e,t|=0,r|=0,n||D(this,e,t,r,Math.pow(2,8*r)-1,0);var i=1,s=0;for(this[t]=255&e;++s<r&&(i*=256);)this[t+s]=e/i&255;return t+r},Buffer.prototype.writeUIntBE=function(e,t,r,n){e=+e,t|=0,r|=0,n||D(this,e,t,r,Math.pow(2,8*r)-1,0);var i=r-1,s=1;for(this[t+i]=255&e;0<=--i&&(s*=256);)this[t+i]=e/s&255;return t+r},Buffer.prototype.writeUInt8=function(e,t,r){return e=+e,t|=0,r||D(this,e,t,1,255,0),Buffer.TYPED_ARRAY_SUPPORT||(e=Math.floor(e)),this[t]=255&e,t+1},Buffer.prototype.writeUInt16LE=function(e,t,r){return e=+e,t|=0,r||D(this,e,t,2,65535,0),Buffer.TYPED_ARRAY_SUPPORT?(this[t]=255&e,this[t+1]=e>>>8):O(this,e,t,!0),t+2},Buffer.prototype.writeUInt16BE=function(e,t,r){return e=+e,t|=0,r||D(this,e,t,2,65535,0),Buffer.TYPED_ARRAY_SUPPORT?(this[t]=e>>>8,this[t+1]=255&e):O(this,e,t,!1),t+2},Buffer.prototype.writeUInt32LE=function(e,t,r){return e=+e,t|=0,r||D(this,e,t,4,4294967295,0),Buffer.TYPED_ARRAY_SUPPORT?(this[t+3]=e>>>24,this[t+2]=e>>>16,this[t+1]=e>>>8,this[t]=255&e):L(this,e,t,!0),t+4},Buffer.prototype.writeUInt32BE=function(e,t,r){return e=+e,t|=0,r||D(this,e,t,4,4294967295,0),Buffer.TYPED_ARRAY_SUPPORT?(this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e):L(this,e,t,!1),t+4},Buffer.prototype.writeIntLE=function(e,t,r,n){e=+e,t|=0,n||D(this,e,t,r,(n=Math.pow(2,8*r-1))-1,-n);var i=0,s=1,a=0;for(this[t]=255&e;++i<r&&(s*=256);)e<0&&0===a&&0!==this[t+i-1]&&(a=1),this[t+i]=(e/s>>0)-a&255;return t+r},Buffer.prototype.writeIntBE=function(e,t,r,n){e=+e,t|=0,n||D(this,e,t,r,(n=Math.pow(2,8*r-1))-1,-n);var i=r-1,s=1,a=0;for(this[t+i]=255&e;0<=--i&&(s*=256);)e<0&&0===a&&0!==this[t+i+1]&&(a=1),this[t+i]=(e/s>>0)-a&255;return t+r},Buffer.prototype.writeInt8=function(e,t,r){return e=+e,t|=0,r||D(this,e,t,1,127,-128),Buffer.TYPED_ARRAY_SUPPORT||(e=Math.floor(e)),e<0&&(e=255+e+1),this[t]=255&e,t+1},Buffer.prototype.writeInt16LE=function(e,t,r){return e=+e,t|=0,r||D(this,e,t,2,32767,-32768),Buffer.TYPED_ARRAY_SUPPORT?(this[t]=255&e,this[t+1]=e>>>8):O(this,e,t,!0),t+2},Buffer.prototype.writeInt16BE=function(e,t,r){return e=+e,t|=0,r||D(this,e,t,2,32767,-32768),Buffer.TYPED_ARRAY_SUPPORT?(this[t]=e>>>8,this[t+1]=255&e):O(this,e,t,!1),t+2},Buffer.prototype.writeInt32LE=function(e,t,r){return e=+e,t|=0,r||D(this,e,t,4,2147483647,-2147483648),Buffer.TYPED_ARRAY_SUPPORT?(this[t]=255&e,this[t+1]=e>>>8,this[t+2]=e>>>16,this[t+3]=e>>>24):L(this,e,t,!0),t+4},Buffer.prototype.writeInt32BE=function(e,t,r){return e=+e,t|=0,r||D(this,e,t,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),Buffer.TYPED_ARRAY_SUPPORT?(this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e):L(this,e,t,!1),t+4},Buffer.prototype.writeFloatLE=function(e,t,r){return N(this,e,t,!0,r)},Buffer.prototype.writeFloatBE=function(e,t,r){return N(this,e,t,!1,r)},Buffer.prototype.writeDoubleLE=function(e,t,r){return F(this,e,t,!0,r)},Buffer.prototype.writeDoubleBE=function(e,t,r){return F(this,e,t,!1,r)},Buffer.prototype.copy=function(e,t,r,n){if(r=r||0,n||0===n||(n=this.length),t>=e.length&&(t=e.length),t=t||0,0<n&&n<r&&(n=r),n===r)return 0;if(0===e.length||0===this.length)return 0;if(t<0)throw new RangeError("targetStart out of bounds");if(r<0||r>=this.length)throw new RangeError("sourceStart out of bounds");if(n<0)throw new RangeError("sourceEnd out of bounds");n>this.length&&(n=this.length),e.length-t<n-r&&(n=e.length-t+r);var i,s=n-r;if(this===e&&r<t&&t<n)for(i=s-1;0<=i;--i)e[i+t]=this[i+r];else if(s<1e3||!Buffer.TYPED_ARRAY_SUPPORT)for(i=0;i<s;++i)e[i+t]=this[i+r];else Uint8Array.prototype.set.call(e,this.subarray(r,r+s),t);return s},Buffer.prototype.fill=function(e,t,r,n){if("string"==typeof e){var i;if("string"==typeof t?(n=t,t=0,r=this.length):"string"==typeof r&&(n=r,r=this.length),1===e.length&&(i=e.charCodeAt(0))<256&&(e=i),void 0!==n&&"string"!=typeof n)throw new TypeError("encoding must be a string");if("string"==typeof n&&!Buffer.isEncoding(n))throw new TypeError("Unknown encoding: "+n)}else"number"==typeof e&&(e&=255);if(t<0||this.length<t||this.length<r)throw new RangeError("Out of range index");if(r<=t)return this;if(t>>>=0,r=void 0===r?this.length:r>>>0,"number"==typeof(e=e||0))for(o=t;o<r;++o)this[o]=e;else for(var s=Buffer.isBuffer(e)?e:q(new Buffer(e,n).toString()),a=s.length,o=0;o<r-t;++o)this[o+t]=s[o%a];return this};var t=/[^+\\/0-9A-Za-z-_]/g}).call(this,void 0!==m.g?m.g:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"base64-js":30,ieee754:32,isarray:34}],30:[function(e,t,r){"use strict";function n(e){var t=e.length;if(0<t%4)throw new Error("Invalid string. Length must be a multiple of 4");return"="===e[t-2]?2:"="===e[t-1]?1:0}function u(e,t,r){for(var n,i=[],s=t;s<r;s+=3)n=(e[s]<<16)+(e[s+1]<<8)+e[s+2],i.push(function f(e){return c[e>>18&63]+c[e>>12&63]+c[e>>6&63]+c[63&e]}(n));return i.join("")}r.byteLength=function i(e){return 3*e.length/4-n(e)},r.toByteArray=function o(e){for(var t,r=e.length,i=n(e),s=new h(3*r/4-i),a=0<i?r-4:r,u=0,f=0;f<a;f+=4,0)t=l[e.charCodeAt(f)]<<18|l[e.charCodeAt(f+1)]<<12|l[e.charCodeAt(f+2)]<<6|l[e.charCodeAt(f+3)],s[u++]=t>>16&255,s[u++]=t>>8&255,s[u++]=255&t;return 2===i?(t=l[e.charCodeAt(f)]<<2|l[e.charCodeAt(f+1)]>>4,s[u++]=255&t):1===i&&(t=l[e.charCodeAt(f)]<<10|l[e.charCodeAt(f+1)]<<4|l[e.charCodeAt(f+2)]>>2,s[u++]=t>>8&255,s[u++]=255&t),s},r.fromByteArray=function a(e){for(var t,r=e.length,n=r%3,i="",s=[],o=0,f=r-n;o<f;o+=16383)s.push(u(e,o,f<o+16383?f:o+16383));return 1==n?(t=e[r-1],i+=c[t>>2],i+=c[t<<4&63],i+="=="):2==n&&(t=(e[r-2]<<8)+e[r-1],i+=c[t>>10],i+=c[t>>4&63],i+=c[t<<2&63],i+="="),s.push(i),s.join("")};for(var c=[],l=[],h="undefined"!=typeof Uint8Array?Uint8Array:Array,s="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",d=0,p=s.length;d<p;++d)c[d]=s[d],l[s.charCodeAt(d)]=d;l["-".charCodeAt(0)]=62,l["_".charCodeAt(0)]=63},{}],31:[function(t,a,r){!function(t){function e(e){for(var t in r)e[t]=r[t];return e}function o(t,r){var n,i=this;if(arguments.length){if(r){if(n=u(i,t,!0)){if(!(n=n.filter(function e(t){return t!==r&&t.originalListener!==r})).length)return o.call(i,t);i[s][t]=n}}else if((n=i[s])&&(delete n[t],!Object.keys(n).length))return o.call(i)}else delete i[s];return i}function u(e,t,r){if(!r||e[s]){e=e[s]||(e[s]={});return e[t]||(e[t]=[])}}void 0!==a&&(a.exports=t);var s="listeners",r={on:function n(e,t){return u(this,e).push(t),this},once:function i(t,r){function e(){o.call(n,t,e),r.apply(this,arguments)}var n=this;return e.originalListener=r,u(n,t).push(e),n},off:o,emit:function f(t,r){var s=this,a=u(s,t,!0);if(!a)return!1;var o,c=arguments.length;return 1===c?a.forEach(function e(t){t.call(s)}):2===c?a.forEach(function n(e){e.call(s,r)}):(o=Array.prototype.slice.call(arguments,1),a.forEach(function i(e){e.apply(s,o)})),!!a.length}};e(t.prototype),t.mixin=e}(function n(){if(!(this instanceof n))return new n})},{}],32:[function(e,t,r){r.read=function(e,t,r,n,i){var s,a,o=8*i-n-1,u=(1<<o)-1,f=u>>1,c=-7,l=r?i-1:0,h=r?-1:1,r=e[t+l];for(l+=h,s=r&(1<<-c)-1,r>>=-c,c+=o;0<c;s=256*s+e[t+l],l+=h,c-=8);for(a=s&(1<<-c)-1,s>>=-c,c+=n;0<c;a=256*a+e[t+l],l+=h,c-=8);if(0===s)s=1-f;else{if(s===u)return a?NaN:1/0*(r?-1:1);a+=Math.pow(2,n),s-=f}return(r?-1:1)*a*Math.pow(2,s-n)},r.write=function(e,t,r,n,i,s){var a,o,u=8*s-i-1,f=(1<<u)-1,c=f>>1,l=23===i?Math.pow(2,-24)-Math.pow(2,-77):0,h=n?0:s-1,d=n?1:-1,s=t<0||0===t&&1/t<0?1:0;for(t=Math.abs(t),isNaN(t)||t===1/0?(o=isNaN(t)?1:0,a=f):(a=Math.floor(Math.log(t)/Math.LN2),t*(n=Math.pow(2,-a))<1&&(a--,n*=2),2<=(t+=1<=a+c?l/n:l*Math.pow(2,1-c))*n&&(a++,n/=2),f<=a+c?(o=0,a=f):1<=a+c?(o=(t*n-1)*Math.pow(2,i),a+=c):(o=t*Math.pow(2,c-1)*Math.pow(2,i),a=0));8<=i;e[r+h]=255&o,h+=d,o/=256,i-=8);for(a=a<<i|o,u+=i;0<u;e[r+h]=255&a,h+=d,a/=256,u-=8);e[r+h-d]|=128*s}},{}],33:[function(e,t,r){(function(n){var A,I,T,M,W,U,L,g,O;function o(e,t,g){function i(e,t,r,n){return this instanceof i?function v(e,t,r,n,i){if(W&&U&&(t instanceof U&&(t=new W(t)),n instanceof U&&(n=new W(n))),!(t||r||n||I))return void(e.buffer=h(L,0));{var a;s(t,r)||(a=I||Array,i=r,n=t,r=0,t=new a(8))}e.buffer=t,e.offset=r|=0,T!==_typeof(n)&&("string"==typeof n?function x(e,t,r,n){var i=0,s=r.length,a=0,o=0;"-"===r[0]&&i++;for(var u=i;i<s;){var f=parseInt(r[i++],n);if(!(0<=f))break;o=o*n+f,a=a*n+Math.floor(o/O),o%=O}u&&(a=~a,o?o=O-o:a++),k(e,t+m,a),k(e,t+S,o)}(t,r,n,i||10):s(n,i)?c(t,r,n,i):"number"==typeof i?(k(t,r+m,n),k(t,r+S,i)):0<n?E(t,r,n):n<0?B(t,r,n):c(t,r,L,0))}(this,e,t,r,n):new i(e,t,r,n)}function P(){var e=this.buffer,t=this.offset,r=_(e,t+m),t=_(e,t+S);return g||(r|=0),r?r*O+t:t}function k(e,t,r){e[t+C]=255&r,r>>=8,e[t+w]=255&r,r>>=8,e[t+b]=255&r,r>>=8,e[t+n]=255&r}function _(e,t){return 16777216*e[t+n]+(e[t+b]<<16)+(e[t+w]<<8)+e[t+C]}var m=t?0:4,S=t?4:0,n=t?0:3,b=t?1:2,w=t?2:1,C=t?3:0,E=t?l:d,B=t?p:y,r=i.prototype,t="is"+e,D="_"+t;return r.buffer=void 0,r.offset=0,r[D]=!0,r.toNumber=P,r.toString=function R(e){var t=this.buffer,r=this.offset,n=_(t,r+m),i=_(t,r+S),s="";for((r=!g&&2147483648&n)&&(n=~n,i=O-i),e=e||10;;){var a=n%e*O+i,n=Math.floor(n/e),i=Math.floor(a/e),s=(a%e).toString(e)+s;if(!n&&!i)break}return r&&(s="-"+s),s},r.toJSON=P,r.toArray=f,M&&(r.toBuffer=u),W&&(r.toArrayBuffer=a),i[t]=function o(e){return!(!e||!e[D])},A[e]=i}function f(e){var t=this.buffer,r=this.offset;return I=null,!1!==e&&0===r&&8===t.length&&g(t)?t:h(t,r)}function u(e){var t=this.buffer,r=this.offset;if(I=M,!1!==e&&0===r&&8===t.length&&n.isBuffer(t))return t;e=new M(8);return c(e,0,t,r),e}function a(e){var t=this.buffer,r=this.offset,n=t.buffer;if(I=W,!1!==e&&0===r&&n instanceof U&&8===n.byteLength)return n;n=new W(8);return c(n,0,t,r),n.buffer}function s(e,t){var r=e&&e.length;return t|=0,r&&t+8<=r&&"string"!=typeof e[t]}function c(e,t,r,n){t|=0,n|=0;for(var i=0;i<8;i++)e[t++]=255&r[n++]}function h(e,t){return Array.prototype.slice.call(e,t,t+8)}function l(e,t,r){for(var n=t+8;t<n;)e[--n]=255&r,r/=256}function p(e,t,r){var n=t+8;for(r++;t<n;)e[--n]=255&-r^255,r/=256}function d(e,t,r){for(var n=t+8;t<n;)e[t++]=255&r,r/=256}function y(e,t,r){var n=t+8;for(r++;t<n;)e[t++]=255&-r^255,r/=256}A="object"==_typeof(r)&&"string"!=typeof r.nodeName?r:this||{},M=(T="undefined")!==_typeof(n)&&n,W=T!==("undefined"==typeof Uint8Array?"undefined":_typeof(Uint8Array))&&Uint8Array,U=T!==("undefined"==typeof ArrayBuffer?"undefined":_typeof(ArrayBuffer))&&ArrayBuffer,L=[0,0,0,0,0,0,0,0],g=Array.isArray||function v(e){return!!e&&"[object Array]"==Object.prototype.toString.call(e)},O=4294967296,o("Uint64BE",!0,!0),o("Int64BE",!0,!1),o("Uint64LE",!1,!0),o("Int64LE",!1,!1)}).call(this,e("buffer").Buffer)},{buffer:29}],34:[function(e,t,r){var n={}.toString;t.exports=Array.isArray||function(e){return"[object Array]"==n.call(e)}},{}]},{},[1])(1)},"object"==_typeof(t)?e.exports=S():(g=[],void 0===(S="function"==typeof(S=S)?S.apply(t,g):S)||(e.exports=S))},284:function(e,t){var r,n;function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function _typeof(e){return typeof e}:function _typeof(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}n=function(){return function r(i,s,a){function h(t,e){if(!s[t]){if(!i[t]){if(0,o)return o(t,!0);var n=new Error("Cannot find module \'"+t+"\'");throw n.code="MODULE_NOT_FOUND",n}n=s[t]={exports:{}};i[t][0].call(n.exports,function(e){return h(i[t][1][e]||e)},n,n.exports,r,i,s,a)}return s[t].exports}for(var o=void 0,e=0;e<a.length;e++)h(a[e]);return h}({1:[function(e,t,r){"use strict";var a=e("./zlib/deflate"),o=e("./utils/common"),u=e("./utils/strings"),n=e("./zlib/messages"),s=e("./zlib/zstream"),f=Object.prototype.toString,l=0,h=-1,d=0,p=8;function c(e){if(!(this instanceof c))return new c(e);this.options=o.assign({level:h,method:p,chunkSize:16384,windowBits:15,memLevel:8,strategy:d,to:""},e||{});var t=this.options;t.raw&&0<t.windowBits?t.windowBits=-t.windowBits:t.gzip&&0<t.windowBits&&t.windowBits<16&&(t.windowBits+=16),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new s,this.strm.avail_out=0;e=a.deflateInit2(this.strm,t.level,t.method,t.windowBits,t.memLevel,t.strategy);if(e!==l)throw new Error(n[e]);if(t.header&&a.deflateSetHeader(this.strm,t.header),t.dictionary){t="string"==typeof t.dictionary?u.string2buf(t.dictionary):"[object ArrayBuffer]"===f.call(t.dictionary)?new Uint8Array(t.dictionary):t.dictionary;if((e=a.deflateSetDictionary(this.strm,t))!==l)throw new Error(n[e]);this._dict_set=!0}}function i(e,t){t=new c(t);if(t.push(e,!0),t.err)throw t.msg||n[t.err];return t.result}c.prototype.push=function(e,t){var r,n,i=this.strm,s=this.options.chunkSize;if(this.ended)return!1;n=t===~~t?t:!0===t?4:0,"string"==typeof e?i.input=u.string2buf(e):"[object ArrayBuffer]"===f.call(e)?i.input=new Uint8Array(e):i.input=e,i.next_in=0,i.avail_in=i.input.length;do{if(0===i.avail_out&&(i.output=new o.Buf8(s),i.next_out=0,i.avail_out=s),1!==(r=a.deflate(i,n))&&r!==l)return this.onEnd(r),!(this.ended=!0)}while(0!==i.avail_out&&(0!==i.avail_in||4!==n&&2!==n)||("string"===this.options.to?this.onData(u.buf2binstring(o.shrinkBuf(i.output,i.next_out))):this.onData(o.shrinkBuf(i.output,i.next_out))),(0<i.avail_in||0===i.avail_out)&&1!==r);return 4===n?(r=a.deflateEnd(this.strm),this.onEnd(r),this.ended=!0,r===l):2!==n||(this.onEnd(l),!(i.avail_out=0))},c.prototype.onData=function(e){this.chunks.push(e)},c.prototype.onEnd=function(e){e===l&&("string"===this.options.to?this.result=this.chunks.join(""):this.result=o.flattenChunks(this.chunks)),this.chunks=[],this.err=e,this.msg=this.strm.msg},r.Deflate=c,r.deflate=i,r.deflateRaw=function(e,t){return(t=t||{}).raw=!0,i(e,t)},r.gzip=function(e,t){return(t=t||{}).gzip=!0,i(e,t)}},{"./utils/common":3,"./utils/strings":4,"./zlib/deflate":8,"./zlib/messages":13,"./zlib/zstream":15}],2:[function(e,t,r){"use strict";var l=e("./zlib/inflate"),h=e("./utils/common"),d=e("./utils/strings"),p=e("./zlib/constants"),n=e("./zlib/messages"),i=e("./zlib/zstream"),a=e("./zlib/gzheader"),_=Object.prototype.toString;function s(e){if(!(this instanceof s))return new s(e);this.options=h.assign({chunkSize:16384,windowBits:0,to:""},e||{});var t=this.options;t.raw&&0<=t.windowBits&&t.windowBits<16&&(t.windowBits=-t.windowBits,0===t.windowBits&&(t.windowBits=-15)),!(0<=t.windowBits&&t.windowBits<16)||e&&e.windowBits||(t.windowBits+=32),15<t.windowBits&&t.windowBits<48&&0==(15&t.windowBits)&&(t.windowBits|=15),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new i,this.strm.avail_out=0;e=l.inflateInit2(this.strm,t.windowBits);if(e!==p.Z_OK)throw new Error(n[e]);if(this.header=new a,l.inflateGetHeader(this.strm,this.header),t.dictionary&&("string"==typeof t.dictionary?t.dictionary=d.string2buf(t.dictionary):"[object ArrayBuffer]"===_.call(t.dictionary)&&(t.dictionary=new Uint8Array(t.dictionary)),t.raw&&(e=l.inflateSetDictionary(this.strm,t.dictionary))!==p.Z_OK))throw new Error(n[e])}function o(e,t){t=new s(t);if(t.push(e,!0),t.err)throw t.msg||n[t.err];return t.result}s.prototype.push=function(e,t){var r,n,i,s,a,o=this.strm,u=this.options.chunkSize,f=this.options.dictionary,c=!1;if(this.ended)return!1;n=t===~~t?t:!0===t?p.Z_FINISH:p.Z_NO_FLUSH,"string"==typeof e?o.input=d.binstring2buf(e):"[object ArrayBuffer]"===_.call(e)?o.input=new Uint8Array(e):o.input=e,o.next_in=0,o.avail_in=o.input.length;do{if(0===o.avail_out&&(o.output=new h.Buf8(u),o.next_out=0,o.avail_out=u),(r=l.inflate(o,p.Z_NO_FLUSH))===p.Z_NEED_DICT&&f&&(r=l.inflateSetDictionary(this.strm,f)),r===p.Z_BUF_ERROR&&!0===c&&(r=p.Z_OK,c=!1),r!==p.Z_STREAM_END&&r!==p.Z_OK)return this.onEnd(r),!(this.ended=!0)}while(o.next_out&&(0!==o.avail_out&&r!==p.Z_STREAM_END&&(0!==o.avail_in||n!==p.Z_FINISH&&n!==p.Z_SYNC_FLUSH)||("string"===this.options.to?(i=d.utf8border(o.output,o.next_out),s=o.next_out-i,a=d.buf2string(o.output,i),o.next_out=s,o.avail_out=u-s,s&&h.arraySet(o.output,o.output,i,s,0),this.onData(a)):this.onData(h.shrinkBuf(o.output,o.next_out)))),0===o.avail_in&&0===o.avail_out&&(c=!0),(0<o.avail_in||0===o.avail_out)&&r!==p.Z_STREAM_END);return r===p.Z_STREAM_END&&(n=p.Z_FINISH),n===p.Z_FINISH?(r=l.inflateEnd(this.strm),this.onEnd(r),this.ended=!0,r===p.Z_OK):n!==p.Z_SYNC_FLUSH||(this.onEnd(p.Z_OK),!(o.avail_out=0))},s.prototype.onData=function(e){this.chunks.push(e)},s.prototype.onEnd=function(e){e===p.Z_OK&&("string"===this.options.to?this.result=this.chunks.join(""):this.result=h.flattenChunks(this.chunks)),this.chunks=[],this.err=e,this.msg=this.strm.msg},r.Inflate=s,r.inflate=o,r.inflateRaw=function(e,t){return(t=t||{}).raw=!0,o(e,t)},r.ungzip=o},{"./utils/common":3,"./utils/strings":4,"./zlib/constants":6,"./zlib/gzheader":9,"./zlib/inflate":11,"./zlib/messages":13,"./zlib/zstream":15}],3:[function(e,t,r){"use strict";var n="undefined"!=typeof Uint8Array&&"undefined"!=typeof Uint16Array&&"undefined"!=typeof Int32Array;r.assign=function(e){for(var t=Array.prototype.slice.call(arguments,1);t.length;){var r=t.shift();if(r){if("object"!=_typeof(r))throw new TypeError(r+"must be non-object");for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}return e},r.shrinkBuf=function(e,t){return e.length===t?e:e.subarray?e.subarray(0,t):(e.length=t,e)};var i={arraySet:function arraySet(e,t,r,n,i){if(t.subarray&&e.subarray)e.set(t.subarray(r,r+n),i);else for(var s=0;s<n;s++)e[i+s]=t[r+s]},flattenChunks:function flattenChunks(e){for(var t,r,n,i,s=t=0,a=e.length;s<a;s++)t+=e[s].length;for(i=new Uint8Array(t),s=r=0,a=e.length;s<a;s++)n=e[s],i.set(n,r),r+=n.length;return i}},s={arraySet:function arraySet(e,t,r,n,i){for(var s=0;s<n;s++)e[i+s]=t[r+s]},flattenChunks:function flattenChunks(e){return[].concat.apply([],e)}};r.setTyped=function(e){e?(r.Buf8=Uint8Array,r.Buf16=Uint16Array,r.Buf32=Int32Array,r.assign(r,i)):(r.Buf8=Array,r.Buf16=Array,r.Buf32=Array,r.assign(r,s))},r.setTyped(n)},{}],4:[function(e,t,r){"use strict";var u=e("./common"),i=!0,s=!0;try{String.fromCharCode.apply(null,[0])}catch(e){i=!1}try{String.fromCharCode.apply(null,new Uint8Array(1))}catch(e){s=!1}for(var f=new u.Buf8(256),n=0;n<256;n++)f[n]=252<=n?6:248<=n?5:240<=n?4:224<=n?3:192<=n?2:1;function d(e,t){if(t<65534&&(e.subarray&&s||!e.subarray&&i))return String.fromCharCode.apply(null,u.shrinkBuf(e,t));for(var r="",n=0;n<t;n++)r+=String.fromCharCode(e[n]);return r}f[254]=f[254]=1,r.string2buf=function(e){for(var t,r,n,i,s=e.length,a=0,o=0;o<s;o++)55296==(64512&(r=e.charCodeAt(o)))&&o+1<s&&56320==(64512&(n=e.charCodeAt(o+1)))&&(r=65536+(r-55296<<10)+(n-56320),o++),a+=r<128?1:r<2048?2:r<65536?3:4;for(t=new u.Buf8(a),o=i=0;i<a;o++)55296==(64512&(r=e.charCodeAt(o)))&&o+1<s&&56320==(64512&(n=e.charCodeAt(o+1)))&&(r=65536+(r-55296<<10)+(n-56320),o++),r<128?t[i++]=r:(r<2048?t[i++]=192|r>>>6:(r<65536?t[i++]=224|r>>>12:(t[i++]=240|r>>>18,t[i++]=128|r>>>12&63),t[i++]=128|r>>>6&63),t[i++]=128|63&r);return t},r.buf2binstring=function(e){return d(e,e.length)},r.binstring2buf=function(e){for(var t=new u.Buf8(e.length),r=0,n=t.length;r<n;r++)t[r]=e.charCodeAt(r);return t},r.buf2string=function(e,t){for(var r,n,i,s=t||e.length,a=new Array(2*s),o=r=0;o<s;)if((n=e[o++])<128)a[r++]=n;else if(4<(i=f[n]))a[r++]=65533,o+=i-1;else{for(n&=2===i?31:3===i?15:7;1<i&&o<s;)n=n<<6|63&e[o++],i--;1<i?a[r++]=65533:n<65536?a[r++]=n:(n-=65536,a[r++]=55296|n>>10&1023,a[r++]=56320|1023&n)}return d(a,r)},r.utf8border=function(e,t){var r;for((t=t||e.length)>e.length&&(t=e.length),r=t-1;0<=r&&128==(192&e[r]);)r--;return!(r<0)&&0!==r&&r+f[e[r]]>t?r:t}},{"./common":3}],5:[function(e,t,r){"use strict";t.exports=function(e,t,r,n){for(var i=65535&e|0,s=e>>>16&65535|0,a=0;0!==r;){for(r-=a=2e3<r?2e3:r;s=s+(i=i+t[n++]|0)|0,--a;);i%=65521,s%=65521}return i|s<<16|0}},{}],6:[function(e,t,r){"use strict";t.exports={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8}},{}],7:[function(e,t,r){"use strict";var o=function(){for(var e,t=[],r=0;r<256;r++){e=r;for(var n=0;n<8;n++)e=1&e?3988292384^e>>>1:e>>>1;t[r]=e}return t}();t.exports=function(e,t,r,n){var i=o,s=n+r;e^=-1;for(var a=n;a<s;a++)e=e>>>8^i[255&(e^t[a])];return-1^e}},{}],8:[function(e,t,r){"use strict";var o,l=e("../utils/common"),u=e("./trees"),h=e("./adler32"),d=e("./crc32"),n=e("./messages"),f=0,c=0,p=-2,i=2,_=8,s=286,a=30,g=19,v=2*s+1,m=15,y=3,S=258,b=S+y+1,w=42,k=113;function N(e,t){return e.msg=n[t],t}function O(e){return(e<<1)-(4<e?9:0)}function D(e){for(var t=e.length;0<=--t;)e[t]=0}function I(e){var t=e.state,r=t.pending;r>e.avail_out&&(r=e.avail_out),0!==r&&(l.arraySet(e.output,t.pending_buf,t.pending_out,r,e.next_out),e.next_out+=r,t.pending_out+=r,e.total_out+=r,e.avail_out-=r,t.pending-=r,0===t.pending&&(t.pending_out=0))}function U(e,t){u._tr_flush_block(e,0<=e.block_start?e.block_start:-1,e.strstart-e.block_start,t),e.block_start=e.strstart,I(e.strm)}function T(e,t){e.pending_buf[e.pending++]=t}function F(e,t){e.pending_buf[e.pending++]=t>>>8&255,e.pending_buf[e.pending++]=255&t}function L(e,t){var r,n,i=e.max_chain_length,s=e.strstart,a=e.prev_length,o=e.nice_match,u=e.strstart>e.w_size-b?e.strstart-(e.w_size-b):0,f=e.window,c=e.w_mask,l=e.prev,h=e.strstart+S,d=f[s+a-1],p=f[s+a];e.prev_length>=e.good_match&&(i>>=2),o>e.lookahead&&(o=e.lookahead);do{if(f[(r=t)+a]===p&&f[r+a-1]===d&&f[r]===f[s]&&f[++r]===f[s+1]){for(s+=2,r++;f[++s]===f[++r]&&f[++s]===f[++r]&&f[++s]===f[++r]&&f[++s]===f[++r]&&f[++s]===f[++r]&&f[++s]===f[++r]&&f[++s]===f[++r]&&f[++s]===f[++r]&&s<h;);if(n=S-(h-s),s=h-S,a<n){if(e.match_start=t,o<=(a=n))break;d=f[s+a-1],p=f[s+a]}}}while((t=l[t&c])>u&&0!=--i);return a<=e.lookahead?a:e.lookahead}function H(e){var t,r,n,i,s,a,o,u,f,c=e.w_size;do{if(i=e.window_size-e.lookahead-e.strstart,e.strstart>=c+(c-b)){for(l.arraySet(e.window,e.window,c,c,0),e.match_start-=c,e.strstart-=c,e.block_start-=c,t=r=e.hash_size;n=e.head[--t],e.head[t]=c<=n?n-c:0,--r;);for(t=r=c;n=e.prev[--t],e.prev[t]=c<=n?n-c:0,--r;);i+=c}if(0===e.strm.avail_in)break;if(a=e.strm,o=e.window,u=e.strstart+e.lookahead,f=void 0,i<(f=a.avail_in)&&(f=i),r=0===f?0:(a.avail_in-=f,l.arraySet(o,a.input,a.next_in,f,u),1===a.state.wrap?a.adler=h(a.adler,o,f,u):2===a.state.wrap&&(a.adler=d(a.adler,o,f,u)),a.next_in+=f,a.total_in+=f,f),e.lookahead+=r,e.lookahead+e.insert>=y)for(s=e.strstart-e.insert,e.ins_h=e.window[s],e.ins_h=(e.ins_h<<e.hash_shift^e.window[s+1])&e.hash_mask;e.insert&&(e.ins_h=(e.ins_h<<e.hash_shift^e.window[s+y-1])&e.hash_mask,e.prev[s&e.w_mask]=e.head[e.ins_h],e.head[e.ins_h]=s,s++,e.insert--,!(e.lookahead+e.insert<y)););}while(e.lookahead<b&&0!==e.strm.avail_in)}function j(e,t){for(var r,n;;){if(e.lookahead<b){if(H(e),e.lookahead<b&&t===f)return 1;if(0===e.lookahead)break}if(r=0,e.lookahead>=y&&(e.ins_h=(e.ins_h<<e.hash_shift^e.window[e.strstart+y-1])&e.hash_mask,r=e.prev[e.strstart&e.w_mask]=e.head[e.ins_h],e.head[e.ins_h]=e.strstart),0!==r&&e.strstart-r<=e.w_size-b&&(e.match_length=L(e,r)),e.match_length>=y)if(n=u._tr_tally(e,e.strstart-e.match_start,e.match_length-y),e.lookahead-=e.match_length,e.match_length<=e.max_lazy_match&&e.lookahead>=y){for(e.match_length--;e.strstart++,e.ins_h=(e.ins_h<<e.hash_shift^e.window[e.strstart+y-1])&e.hash_mask,r=e.prev[e.strstart&e.w_mask]=e.head[e.ins_h],e.head[e.ins_h]=e.strstart,0!=--e.match_length;);e.strstart++}else e.strstart+=e.match_length,e.match_length=0,e.ins_h=e.window[e.strstart],e.ins_h=(e.ins_h<<e.hash_shift^e.window[e.strstart+1])&e.hash_mask;else n=u._tr_tally(e,0,e.window[e.strstart]),e.lookahead--,e.strstart++;if(n&&(U(e,!1),0===e.strm.avail_out))return 1}return e.insert=e.strstart<y-1?e.strstart:y-1,4===t?(U(e,!0),0===e.strm.avail_out?3:4):e.last_lit&&(U(e,!1),0===e.strm.avail_out)?1:2}function K(e,t){for(var r,n,i;;){if(e.lookahead<b){if(H(e),e.lookahead<b&&t===f)return 1;if(0===e.lookahead)break}if(r=0,e.lookahead>=y&&(e.ins_h=(e.ins_h<<e.hash_shift^e.window[e.strstart+y-1])&e.hash_mask,r=e.prev[e.strstart&e.w_mask]=e.head[e.ins_h],e.head[e.ins_h]=e.strstart),e.prev_length=e.match_length,e.prev_match=e.match_start,e.match_length=y-1,0!==r&&e.prev_length<e.max_lazy_match&&e.strstart-r<=e.w_size-b&&(e.match_length=L(e,r),e.match_length<=5&&(1===e.strategy||e.match_length===y&&4096<e.strstart-e.match_start)&&(e.match_length=y-1)),e.prev_length>=y&&e.match_length<=e.prev_length){for(i=e.strstart+e.lookahead-y,n=u._tr_tally(e,e.strstart-1-e.prev_match,e.prev_length-y),e.lookahead-=e.prev_length-1,e.prev_length-=2;++e.strstart<=i&&(e.ins_h=(e.ins_h<<e.hash_shift^e.window[e.strstart+y-1])&e.hash_mask,r=e.prev[e.strstart&e.w_mask]=e.head[e.ins_h],e.head[e.ins_h]=e.strstart),0!=--e.prev_length;);if(e.match_available=0,e.match_length=y-1,e.strstart++,n&&(U(e,!1),0===e.strm.avail_out))return 1}else if(e.match_available){if((n=u._tr_tally(e,0,e.window[e.strstart-1]))&&U(e,!1),e.strstart++,e.lookahead--,0===e.strm.avail_out)return 1}else e.match_available=1,e.strstart++,e.lookahead--}return e.match_available&&(n=u._tr_tally(e,0,e.window[e.strstart-1]),e.match_available=0),e.insert=e.strstart<y-1?e.strstart:y-1,4===t?(U(e,!0),0===e.strm.avail_out?3:4):e.last_lit&&(U(e,!1),0===e.strm.avail_out)?1:2}function M(e,t,r,n,i){this.good_length=e,this.max_lazy=t,this.nice_length=r,this.max_chain=n,this.func=i}function P(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=_,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new l.Buf16(2*v),this.dyn_dtree=new l.Buf16(2*(2*a+1)),this.bl_tree=new l.Buf16(2*(2*g+1)),D(this.dyn_ltree),D(this.dyn_dtree),D(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new l.Buf16(m+1),this.heap=new l.Buf16(2*s+1),D(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new l.Buf16(2*s+1),D(this.depth),this.l_buf=0,this.lit_bufsize=0,this.last_lit=0,this.d_buf=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}function Y(e){var t;return e&&e.state?(e.total_in=e.total_out=0,e.data_type=i,(t=e.state).pending=0,t.pending_out=0,t.wrap<0&&(t.wrap=-t.wrap),t.status=t.wrap?w:k,e.adler=2===t.wrap?0:1,t.last_flush=f,u._tr_init(t),c):N(e,p)}function q(e){var t=Y(e);return t===c&&((e=e.state).window_size=2*e.w_size,D(e.head),e.max_lazy_match=o[e.level].max_lazy,e.good_match=o[e.level].good_length,e.nice_match=o[e.level].nice_length,e.max_chain_length=o[e.level].max_chain,e.strstart=0,e.block_start=0,e.lookahead=0,e.insert=0,e.match_length=e.prev_length=y-1,e.match_available=0,e.ins_h=0),t}function G(e,t,r,n,i,s){if(!e)return p;var a=1;if(-1===t&&(t=6),n<0?(a=0,n=-n):15<n&&(a=2,n-=16),i<1||9<i||r!==_||n<8||15<n||t<0||9<t||s<0||4<s)return N(e,p);8===n&&(n=9);var o=new P;return(e.state=o).strm=e,o.wrap=a,o.gzhead=null,o.w_bits=n,o.w_size=1<<o.w_bits,o.w_mask=o.w_size-1,o.hash_bits=i+7,o.hash_size=1<<o.hash_bits,o.hash_mask=o.hash_size-1,o.hash_shift=~~((o.hash_bits+y-1)/y),o.window=new l.Buf8(2*o.w_size),o.head=new l.Buf16(o.hash_size),o.prev=new l.Buf16(o.w_size),o.lit_bufsize=1<<i+6,o.pending_buf_size=4*o.lit_bufsize,o.pending_buf=new l.Buf8(o.pending_buf_size),o.d_buf=+o.lit_bufsize,o.l_buf=3*o.lit_bufsize,o.level=t,o.strategy=s,o.method=r,q(e)}o=[new M(0,0,0,0,function(e,t){var r=65535;for(r>e.pending_buf_size-5&&(r=e.pending_buf_size-5);;){if(e.lookahead<=1){if(H(e),0===e.lookahead&&t===f)return 1;if(0===e.lookahead)break}e.strstart+=e.lookahead,e.lookahead=0;var n=e.block_start+r;if((0===e.strstart||e.strstart>=n)&&(e.lookahead=e.strstart-n,e.strstart=n,U(e,!1),0===e.strm.avail_out))return 1;if(e.strstart-e.block_start>=e.w_size-b&&(U(e,!1),0===e.strm.avail_out))return 1}return e.insert=0,4===t?(U(e,!0),0===e.strm.avail_out?3:4):(e.strstart>e.block_start&&(U(e,!1),e.strm.avail_out),1)}),new M(4,4,8,4,j),new M(4,5,16,8,j),new M(4,6,32,32,j),new M(4,4,16,16,K),new M(8,16,32,32,K),new M(8,16,128,128,K),new M(8,32,128,256,K),new M(32,128,258,1024,K),new M(32,258,258,4096,K)],r.deflateInit=function(e,t){return G(e,t,_,15,8,0)},r.deflateInit2=G,r.deflateReset=q,r.deflateResetKeep=Y,r.deflateSetHeader=function(e,t){return!e||!e.state||2!==e.state.wrap?p:(e.state.gzhead=t,c)},r.deflate=function(e,t){var r,n,i,s;if(!e||!e.state||5<t||t<0)return e?N(e,p):p;if(r=e.state,!e.output||!e.input&&0!==e.avail_in||666===r.status&&4!==t)return N(e,0===e.avail_out?-5:p);if(r.strm=e,a=r.last_flush,r.last_flush=t,r.status===w&&(2===r.wrap?(e.adler=0,T(r,31),T(r,139),T(r,8),r.gzhead?(T(r,(r.gzhead.text?1:0)+(r.gzhead.hcrc?2:0)+(r.gzhead.extra?4:0)+(r.gzhead.name?8:0)+(r.gzhead.comment?16:0)),T(r,255&r.gzhead.time),T(r,r.gzhead.time>>8&255),T(r,r.gzhead.time>>16&255),T(r,r.gzhead.time>>24&255),T(r,9===r.level?2:2<=r.strategy||r.level<2?4:0),T(r,255&r.gzhead.os),r.gzhead.extra&&r.gzhead.extra.length&&(T(r,255&r.gzhead.extra.length),T(r,r.gzhead.extra.length>>8&255)),r.gzhead.hcrc&&(e.adler=d(e.adler,r.pending_buf,r.pending,0)),r.gzindex=0,r.status=69):(T(r,0),T(r,0),T(r,0),T(r,0),T(r,0),T(r,9===r.level?2:2<=r.strategy||r.level<2?4:0),T(r,3),r.status=k)):(s=_+(r.w_bits-8<<4)<<8,s|=(2<=r.strategy||r.level<2?0:r.level<6?1:6===r.level?2:3)<<6,0!==r.strstart&&(s|=32),s+=31-s%31,r.status=k,F(r,s),0!==r.strstart&&(F(r,e.adler>>>16),F(r,65535&e.adler)),e.adler=1)),69===r.status)if(r.gzhead.extra){for(n=r.pending;r.gzindex<(65535&r.gzhead.extra.length)&&(r.pending!==r.pending_buf_size||(r.gzhead.hcrc&&r.pending>n&&(e.adler=d(e.adler,r.pending_buf,r.pending-n,n)),I(e),n=r.pending,r.pending!==r.pending_buf_size));)T(r,255&r.gzhead.extra[r.gzindex]),r.gzindex++;r.gzhead.hcrc&&r.pending>n&&(e.adler=d(e.adler,r.pending_buf,r.pending-n,n)),r.gzindex===r.gzhead.extra.length&&(r.gzindex=0,r.status=73)}else r.status=73;if(73===r.status)if(r.gzhead.name){n=r.pending;do{if(r.pending===r.pending_buf_size&&(r.gzhead.hcrc&&r.pending>n&&(e.adler=d(e.adler,r.pending_buf,r.pending-n,n)),I(e),n=r.pending,r.pending===r.pending_buf_size)){i=1;break}}while(T(r,i=r.gzindex<r.gzhead.name.length?255&r.gzhead.name.charCodeAt(r.gzindex++):0),0!==i);r.gzhead.hcrc&&r.pending>n&&(e.adler=d(e.adler,r.pending_buf,r.pending-n,n)),0===i&&(r.gzindex=0,r.status=91)}else r.status=91;if(91===r.status)if(r.gzhead.comment){n=r.pending;do{if(r.pending===r.pending_buf_size&&(r.gzhead.hcrc&&r.pending>n&&(e.adler=d(e.adler,r.pending_buf,r.pending-n,n)),I(e),n=r.pending,r.pending===r.pending_buf_size)){i=1;break}}while(T(r,i=r.gzindex<r.gzhead.comment.length?255&r.gzhead.comment.charCodeAt(r.gzindex++):0),0!==i);r.gzhead.hcrc&&r.pending>n&&(e.adler=d(e.adler,r.pending_buf,r.pending-n,n)),0===i&&(r.status=103)}else r.status=103;if(103===r.status&&(r.gzhead.hcrc?(r.pending+2>r.pending_buf_size&&I(e),r.pending+2<=r.pending_buf_size&&(T(r,255&e.adler),T(r,e.adler>>8&255),e.adler=0,r.status=k)):r.status=k),0!==r.pending){if(I(e),0===e.avail_out)return r.last_flush=-1,c}else if(0===e.avail_in&&O(t)<=O(a)&&4!==t)return N(e,-5);if(666===r.status&&0!==e.avail_in)return N(e,-5);if(0!==e.avail_in||0!==r.lookahead||t!==f&&666!==r.status){var a=2===r.strategy?function(e,t){for(var r;;){if(0===e.lookahead&&(H(e),0===e.lookahead)){if(t===f)return 1;break}if(e.match_length=0,r=u._tr_tally(e,0,e.window[e.strstart]),e.lookahead--,e.strstart++,r&&(U(e,!1),0===e.strm.avail_out))return 1}return e.insert=0,4===t?(U(e,!0),0===e.strm.avail_out?3:4):e.last_lit&&(U(e,!1),0===e.strm.avail_out)?1:2}(r,t):3===r.strategy?function(e,t){for(var r,n,i,s,a=e.window;;){if(e.lookahead<=S){if(H(e),e.lookahead<=S&&t===f)return 1;if(0===e.lookahead)break}if(e.match_length=0,e.lookahead>=y&&0<e.strstart&&(n=a[i=e.strstart-1])===a[++i]&&n===a[++i]&&n===a[++i]){for(s=e.strstart+S;n===a[++i]&&n===a[++i]&&n===a[++i]&&n===a[++i]&&n===a[++i]&&n===a[++i]&&n===a[++i]&&n===a[++i]&&i<s;);e.match_length=S-(s-i),e.match_length>e.lookahead&&(e.match_length=e.lookahead)}if(e.match_length>=y?(r=u._tr_tally(e,1,e.match_length-y),e.lookahead-=e.match_length,e.strstart+=e.match_length,e.match_length=0):(r=u._tr_tally(e,0,e.window[e.strstart]),e.lookahead--,e.strstart++),r&&(U(e,!1),0===e.strm.avail_out))return 1}return e.insert=0,4===t?(U(e,!0),0===e.strm.avail_out?3:4):e.last_lit&&(U(e,!1),0===e.strm.avail_out)?1:2}(r,t):o[r.level].func(r,t);if(3!==a&&4!==a||(r.status=666),1===a||3===a)return 0===e.avail_out&&(r.last_flush=-1),c;if(2===a&&(1===t?u._tr_align(r):5!==t&&(u._tr_stored_block(r,0,0,!1),3===t&&(D(r.head),0===r.lookahead&&(r.strstart=0,r.block_start=0,r.insert=0))),I(e),0===e.avail_out))return r.last_flush=-1,c}return 4!==t?c:r.wrap<=0?1:(2===r.wrap?(T(r,255&e.adler),T(r,e.adler>>8&255),T(r,e.adler>>16&255),T(r,e.adler>>24&255),T(r,255&e.total_in),T(r,e.total_in>>8&255),T(r,e.total_in>>16&255),T(r,e.total_in>>24&255)):(F(r,e.adler>>>16),F(r,65535&e.adler)),I(e),0<r.wrap&&(r.wrap=-r.wrap),0!==r.pending?c:1)},r.deflateEnd=function(e){var t;return e&&e.state?(t=e.state.status)!==w&&69!==t&&73!==t&&91!==t&&103!==t&&t!==k&&666!==t?N(e,p):(e.state=null,t===k?N(e,-3):c):p},r.deflateSetDictionary=function(e,t){var r,n,i,s,a,o,u,f=t.length;if(!e||!e.state)return p;if(2===(s=(r=e.state).wrap)||1===s&&r.status!==w||r.lookahead)return p;for(1===s&&(e.adler=h(e.adler,t,f,0)),r.wrap=0,f>=r.w_size&&(0===s&&(D(r.head),r.strstart=0,r.block_start=0,r.insert=0),u=new l.Buf8(r.w_size),l.arraySet(u,t,f-r.w_size,r.w_size,0),t=u,f=r.w_size),a=e.avail_in,o=e.next_in,u=e.input,e.avail_in=f,e.next_in=0,e.input=t,H(r);r.lookahead>=y;){for(n=r.strstart,i=r.lookahead-(y-1);r.ins_h=(r.ins_h<<r.hash_shift^r.window[n+y-1])&r.hash_mask,r.prev[n&r.w_mask]=r.head[r.ins_h],r.head[r.ins_h]=n,n++,--i;);r.strstart=n,r.lookahead=y-1,H(r)}return r.strstart+=r.lookahead,r.block_start=r.strstart,r.insert=r.lookahead,r.lookahead=0,r.match_length=r.prev_length=y-1,r.match_available=0,e.next_in=o,e.input=u,e.avail_in=a,r.wrap=s,c},r.deflateInfo="pako deflate (from Nodeca project)"},{"../utils/common":3,"./adler32":5,"./crc32":7,"./messages":13,"./trees":14}],9:[function(e,t,r){"use strict";t.exports=function(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1}},{}],10:[function(e,t,r){"use strict";t.exports=function(e,t){var r,n,i,s,a,o,u=e.state,f=e.next_in,c=e.input,l=f+(e.avail_in-5),h=e.next_out,d=e.output,p=h-(t-e.avail_out),_=h+(e.avail_out-257),g=u.dmax,v=u.wsize,m=u.whave,y=u.wnext,S=u.window,b=u.hold,w=u.bits,k=u.lencode,C=u.distcode,E=(1<<u.lenbits)-1,R=(1<<u.distbits)-1;e:do{w<15&&(b+=c[f++]<<w,w+=8,b+=c[f++]<<w,w+=8),r=k[b&E];t:for(;;){if(b>>>=n=r>>>24,w-=n,0==(n=r>>>16&255))d[h++]=65535&r;else{if(!(16&n)){if(0==(64&n)){r=k[(65535&r)+(b&(1<<n)-1)];continue t}if(32&n){u.mode=12;break e}e.msg="invalid literal/length code",u.mode=30;break e}i=65535&r,(n&=15)&&(w<n&&(b+=c[f++]<<w,w+=8),i+=b&(1<<n)-1,b>>>=n,w-=n),w<15&&(b+=c[f++]<<w,w+=8,b+=c[f++]<<w,w+=8),r=C[b&R];r:for(;;){if(b>>>=n=r>>>24,w-=n,!(16&(n=r>>>16&255))){if(0==(64&n)){r=C[(65535&r)+(b&(1<<n)-1)];continue r}e.msg="invalid distance code",u.mode=30;break e}if(s=65535&r,w<(n&=15)&&(b+=c[f++]<<w,(w+=8)<n&&(b+=c[f++]<<w,w+=8)),g<(s+=b&(1<<n)-1)){e.msg="invalid distance too far back",u.mode=30;break e}if(b>>>=n,w-=n,(n=h-p)<s){if(m<(n=s-n)&&u.sane){e.msg="invalid distance too far back",u.mode=30;break e}if(o=S,(a=0)===y){if(a+=v-n,n<i){for(i-=n;d[h++]=S[a++],--n;);a=h-s,o=d}}else if(y<n){if(a+=v+y-n,(n-=y)<i){for(i-=n;d[h++]=S[a++],--n;);if(a=0,y<i){for(i-=n=y;d[h++]=S[a++],--n;);a=h-s,o=d}}}else if(a+=y-n,n<i){for(i-=n;d[h++]=S[a++],--n;);a=h-s,o=d}for(;2<i;)d[h++]=o[a++],d[h++]=o[a++],d[h++]=o[a++],i-=3;i&&(d[h++]=o[a++],1<i&&(d[h++]=o[a++]))}else{for(a=h-s;d[h++]=d[a++],d[h++]=d[a++],d[h++]=d[a++],2<(i-=3););i&&(d[h++]=d[a++],1<i&&(d[h++]=d[a++]))}break}}break}}while(f<l&&h<_);f-=i=w>>3,b&=(1<<(w-=i<<3))-1,e.next_in=f,e.next_out=h,e.avail_in=f<l?l-f+5:5-(f-l),e.avail_out=h<_?_-h+257:257-(h-_),u.hold=b,u.bits=w}},{}],11:[function(e,t,n){"use strict";var D=e("../utils/common"),x=e("./adler32"),A=e("./crc32"),I=e("./inffast"),T=e("./inftrees"),M=1,W=2,U=0,O=-2,N=1,i=852,a=592;function L(e){return(e>>>24&255)+(e>>>8&65280)+((65280&e)<<8)+((255&e)<<24)}function r(){this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new D.Buf16(320),this.work=new D.Buf16(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}function s(e){var t;return e&&e.state?(t=e.state,e.total_in=e.total_out=t.total=0,e.msg="",t.wrap&&(e.adler=1&t.wrap),t.mode=N,t.last=0,t.havedict=0,t.dmax=32768,t.head=null,t.hold=0,t.bits=0,t.lencode=t.lendyn=new D.Buf32(i),t.distcode=t.distdyn=new D.Buf32(a),t.sane=1,t.back=-1,U):O}function o(e){var t;return e&&e.state?((t=e.state).wsize=0,t.whave=0,t.wnext=0,s(e)):O}function l(e,t){var r,n;return e&&e.state?(n=e.state,t<0?(r=0,t=-t):(r=1+(t>>4),t<48&&(t&=15)),t&&(t<8||15<t)?O:(null!==n.window&&n.wbits!==t&&(n.window=null),n.wrap=r,n.wbits=t,o(e))):O}function h(e,t){var n;return e?(n=new r,(e.state=n).window=null,(t=l(e,t))!==U&&(e.state=null),t):O}var F,q,z=!0;function j(e,t,r,n){var i=e.state;return null===i.window&&(i.wsize=1<<i.wbits,i.wnext=0,i.whave=0,i.window=new D.Buf8(i.wsize)),n>=i.wsize?(D.arraySet(i.window,t,r-i.wsize,i.wsize,0),i.wnext=0,i.whave=i.wsize):(n<(e=i.wsize-i.wnext)&&(e=n),D.arraySet(i.window,t,r-n,e,i.wnext),(n-=e)?(D.arraySet(i.window,t,r-n,n,0),i.wnext=n,i.whave=i.wsize):(i.wnext+=e,i.wnext===i.wsize&&(i.wnext=0),i.whave<i.wsize&&(i.whave+=e))),0}n.inflateReset=o,n.inflateReset2=l,n.inflateResetKeep=s,n.inflateInit=function(e){return h(e,15)},n.inflateInit2=h,n.inflate=function(e,t){var r,n,i,s,a,o,u,f,c,l,h,d,p,_,g,v,m,y,S,b,w,k,C,E,R=0,B=new D.Buf8(4),P=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];if(!e||!e.state||!e.output||!e.input&&0!==e.avail_in)return O;12===(r=e.state).mode&&(r.mode=13),a=e.next_out,i=e.output,u=e.avail_out,s=e.next_in,n=e.input,o=e.avail_in,f=r.hold,c=r.bits,l=o,h=u,k=U;e:for(;;)switch(r.mode){case N:if(0===r.wrap){r.mode=13;break}for(;c<16;){if(0===o)break e;o--,f+=n[s++]<<c,c+=8}if(2&r.wrap&&35615===f){B[r.check=0]=255&f,B[1]=f>>>8&255,r.check=A(r.check,B,2,0),c=f=0,r.mode=2;break}if(r.flags=0,r.head&&(r.head.done=!1),!(1&r.wrap)||(((255&f)<<8)+(f>>8))%31){e.msg="incorrect header check",r.mode=30;break}if(8!=(15&f)){e.msg="unknown compression method",r.mode=30;break}if(c-=4,w=8+(15&(f>>>=4)),0===r.wbits)r.wbits=w;else if(w>r.wbits){e.msg="invalid window size",r.mode=30;break}r.dmax=1<<w,e.adler=r.check=1,r.mode=512&f?10:12,c=f=0;break;case 2:for(;c<16;){if(0===o)break e;o--,f+=n[s++]<<c,c+=8}if(r.flags=f,8!=(255&r.flags)){e.msg="unknown compression method",r.mode=30;break}if(57344&r.flags){e.msg="unknown header flags set",r.mode=30;break}r.head&&(r.head.text=f>>8&1),512&r.flags&&(B[0]=255&f,B[1]=f>>>8&255,r.check=A(r.check,B,2,0)),c=f=0,r.mode=3;case 3:for(;c<32;){if(0===o)break e;o--,f+=n[s++]<<c,c+=8}r.head&&(r.head.time=f),512&r.flags&&(B[0]=255&f,B[1]=f>>>8&255,B[2]=f>>>16&255,B[3]=f>>>24&255,r.check=A(r.check,B,4,0)),c=f=0,r.mode=4;case 4:for(;c<16;){if(0===o)break e;o--,f+=n[s++]<<c,c+=8}r.head&&(r.head.xflags=255&f,r.head.os=f>>8),512&r.flags&&(B[0]=255&f,B[1]=f>>>8&255,r.check=A(r.check,B,2,0)),c=f=0,r.mode=5;case 5:if(1024&r.flags){for(;c<16;){if(0===o)break e;o--,f+=n[s++]<<c,c+=8}r.length=f,r.head&&(r.head.extra_len=f),512&r.flags&&(B[0]=255&f,B[1]=f>>>8&255,r.check=A(r.check,B,2,0)),c=f=0}else r.head&&(r.head.extra=null);r.mode=6;case 6:if(1024&r.flags&&(o<(d=r.length)&&(d=o),d&&(r.head&&(w=r.head.extra_len-r.length,r.head.extra||(r.head.extra=new Array(r.head.extra_len)),D.arraySet(r.head.extra,n,s,d,w)),512&r.flags&&(r.check=A(r.check,n,d,s)),o-=d,s+=d,r.length-=d),r.length))break e;r.length=0,r.mode=7;case 7:if(2048&r.flags){if(0===o)break e;for(d=0;w=n[s+d++],r.head&&w&&r.length<65536&&(r.head.name+=String.fromCharCode(w)),w&&d<o;);if(512&r.flags&&(r.check=A(r.check,n,d,s)),o-=d,s+=d,w)break e}else r.head&&(r.head.name=null);r.length=0,r.mode=8;case 8:if(4096&r.flags){if(0===o)break e;for(d=0;w=n[s+d++],r.head&&w&&r.length<65536&&(r.head.comment+=String.fromCharCode(w)),w&&d<o;);if(512&r.flags&&(r.check=A(r.check,n,d,s)),o-=d,s+=d,w)break e}else r.head&&(r.head.comment=null);r.mode=9;case 9:if(512&r.flags){for(;c<16;){if(0===o)break e;o--,f+=n[s++]<<c,c+=8}if(f!==(65535&r.check)){e.msg="header crc mismatch",r.mode=30;break}c=f=0}r.head&&(r.head.hcrc=r.flags>>9&1,r.head.done=!0),e.adler=r.check=0,r.mode=12;break;case 10:for(;c<32;){if(0===o)break e;o--,f+=n[s++]<<c,c+=8}e.adler=r.check=L(f),c=f=0,r.mode=11;case 11:if(0===r.havedict)return e.next_out=a,e.avail_out=u,e.next_in=s,e.avail_in=o,r.hold=f,r.bits=c,2;e.adler=r.check=1,r.mode=12;case 12:if(5===t||6===t)break e;case 13:if(r.last){f>>>=7&c,c-=7&c,r.mode=27;break}for(;c<3;){if(0===o)break e;o--,f+=n[s++]<<c,c+=8}switch(r.last=1&f,--c,3&(f>>>=1)){case 0:r.mode=14;break;case 1:if(function H(e){if(z){var t;for(F=new D.Buf32(512),q=new D.Buf32(32),t=0;t<144;)e.lens[t++]=8;for(;t<256;)e.lens[t++]=9;for(;t<280;)e.lens[t++]=7;for(;t<288;)e.lens[t++]=8;for(T(M,e.lens,0,288,F,0,e.work,{bits:9}),t=0;t<32;)e.lens[t++]=5;T(W,e.lens,0,32,q,0,e.work,{bits:5}),z=!1}e.lencode=F,e.lenbits=9,e.distcode=q,e.distbits=5}(r),r.mode=20,6!==t)break;f>>>=2,c-=2;break e;case 2:r.mode=17;break;case 3:e.msg="invalid block type",r.mode=30}f>>>=2,c-=2;break;case 14:for(f>>>=7&c,c-=7&c;c<32;){if(0===o)break e;o--,f+=n[s++]<<c,c+=8}if((65535&f)!=(f>>>16^65535)){e.msg="invalid stored block lengths",r.mode=30;break}if(r.length=65535&f,c=f=0,r.mode=15,6===t)break e;case 15:r.mode=16;case 16:if(d=r.length){if(o<d&&(d=o),u<d&&(d=u),0===d)break e;D.arraySet(i,n,s,d,a),o-=d,s+=d,u-=d,a+=d,r.length-=d;break}r.mode=12;break;case 17:for(;c<14;){if(0===o)break e;o--,f+=n[s++]<<c,c+=8}if(r.nlen=257+(31&f),f>>>=5,c-=5,r.ndist=1+(31&f),f>>>=5,c-=5,r.ncode=4+(15&f),f>>>=4,c-=4,286<r.nlen||30<r.ndist){e.msg="too many length or distance symbols",r.mode=30;break}r.have=0,r.mode=18;case 18:for(;r.have<r.ncode;){for(;c<3;){if(0===o)break e;o--,f+=n[s++]<<c,c+=8}r.lens[P[r.have++]]=7&f,f>>>=3,c-=3}for(;r.have<19;)r.lens[P[r.have++]]=0;if(r.lencode=r.lendyn,r.lenbits=7,C={bits:r.lenbits},k=T(0,r.lens,0,19,r.lencode,0,r.work,C),r.lenbits=C.bits,k){e.msg="invalid code lengths set",r.mode=30;break}r.have=0,r.mode=19;case 19:for(;r.have<r.nlen+r.ndist;){for(;v=(R=r.lencode[f&(1<<r.lenbits)-1])>>>16&255,m=65535&R,!((g=R>>>24)<=c);){if(0===o)break e;o--,f+=n[s++]<<c,c+=8}if(m<16)f>>>=g,c-=g,r.lens[r.have++]=m;else{if(16===m){for(E=g+2;c<E;){if(0===o)break e;o--,f+=n[s++]<<c,c+=8}if(f>>>=g,c-=g,0===r.have){e.msg="invalid bit length repeat",r.mode=30;break}w=r.lens[r.have-1],d=3+(3&f),f>>>=2,c-=2}else if(17===m){for(E=g+3;c<E;){if(0===o)break e;o--,f+=n[s++]<<c,c+=8}c-=g,w=0,d=3+(7&(f>>>=g)),f>>>=3,c-=3}else{for(E=g+7;c<E;){if(0===o)break e;o--,f+=n[s++]<<c,c+=8}c-=g,w=0,d=11+(127&(f>>>=g)),f>>>=7,c-=7}if(r.have+d>r.nlen+r.ndist){e.msg="invalid bit length repeat",r.mode=30;break}for(;d--;)r.lens[r.have++]=w}}if(30===r.mode)break;if(0===r.lens[256]){e.msg="invalid code -- missing end-of-block",r.mode=30;break}if(r.lenbits=9,C={bits:r.lenbits},k=T(M,r.lens,0,r.nlen,r.lencode,0,r.work,C),r.lenbits=C.bits,k){e.msg="invalid literal/lengths set",r.mode=30;break}if(r.distbits=6,r.distcode=r.distdyn,C={bits:r.distbits},k=T(W,r.lens,r.nlen,r.ndist,r.distcode,0,r.work,C),r.distbits=C.bits,k){e.msg="invalid distances set",r.mode=30;break}if(r.mode=20,6===t)break e;case 20:r.mode=21;case 21:if(6<=o&&258<=u){e.next_out=a,e.avail_out=u,e.next_in=s,e.avail_in=o,r.hold=f,r.bits=c,I(e,h),a=e.next_out,i=e.output,u=e.avail_out,s=e.next_in,n=e.input,o=e.avail_in,f=r.hold,c=r.bits,12===r.mode&&(r.back=-1);break}for(r.back=0;v=(R=r.lencode[f&(1<<r.lenbits)-1])>>>16&255,m=65535&R,!((g=R>>>24)<=c);){if(0===o)break e;o--,f+=n[s++]<<c,c+=8}if(v&&0==(240&v)){for(y=g,S=v,b=m;v=(R=r.lencode[b+((f&(1<<y+S)-1)>>y)])>>>16&255,m=65535&R,!(y+(g=R>>>24)<=c);){if(0===o)break e;o--,f+=n[s++]<<c,c+=8}f>>>=y,c-=y,r.back+=y}if(f>>>=g,c-=g,r.back+=g,r.length=m,0===v){r.mode=26;break}if(32&v){r.back=-1,r.mode=12;break}if(64&v){e.msg="invalid literal/length code",r.mode=30;break}r.extra=15&v,r.mode=22;case 22:if(r.extra){for(E=r.extra;c<E;){if(0===o)break e;o--,f+=n[s++]<<c,c+=8}r.length+=f&(1<<r.extra)-1,f>>>=r.extra,c-=r.extra,r.back+=r.extra}r.was=r.length,r.mode=23;case 23:for(;v=(R=r.distcode[f&(1<<r.distbits)-1])>>>16&255,m=65535&R,!((g=R>>>24)<=c);){if(0===o)break e;o--,f+=n[s++]<<c,c+=8}if(0==(240&v)){for(y=g,S=v,b=m;v=(R=r.distcode[b+((f&(1<<y+S)-1)>>y)])>>>16&255,m=65535&R,!(y+(g=R>>>24)<=c);){if(0===o)break e;o--,f+=n[s++]<<c,c+=8}f>>>=y,c-=y,r.back+=y}if(f>>>=g,c-=g,r.back+=g,64&v){e.msg="invalid distance code",r.mode=30;break}r.offset=m,r.extra=15&v,r.mode=24;case 24:if(r.extra){for(E=r.extra;c<E;){if(0===o)break e;o--,f+=n[s++]<<c,c+=8}r.offset+=f&(1<<r.extra)-1,f>>>=r.extra,c-=r.extra,r.back+=r.extra}if(r.offset>r.dmax){e.msg="invalid distance too far back",r.mode=30;break}r.mode=25;case 25:if(0===u)break e;if(d=h-u,r.offset>d){if((d=r.offset-d)>r.whave&&r.sane){e.msg="invalid distance too far back",r.mode=30;break}p=d>r.wnext?(d-=r.wnext,r.wsize-d):r.wnext-d,d>r.length&&(d=r.length),_=r.window}else _=i,p=a-r.offset,d=r.length;for(u<d&&(d=u),u-=d,r.length-=d;i[a++]=_[p++],--d;);0===r.length&&(r.mode=21);break;case 26:if(0===u)break e;i[a++]=r.length,u--,r.mode=21;break;case 27:if(r.wrap){for(;c<32;){if(0===o)break e;o--,f|=n[s++]<<c,c+=8}if(h-=u,e.total_out+=h,r.total+=h,h&&(e.adler=r.check=(r.flags?A:x)(r.check,i,h,a-h)),h=u,(r.flags?f:L(f))!==r.check){e.msg="incorrect data check",r.mode=30;break}c=f=0}r.mode=28;case 28:if(r.wrap&&r.flags){for(;c<32;){if(0===o)break e;o--,f+=n[s++]<<c,c+=8}if(f!==(4294967295&r.total)){e.msg="incorrect length check",r.mode=30;break}c=f=0}r.mode=29;case 29:k=1;break e;case 30:k=-3;break e;case 31:return-4;case 32:default:return O}return e.next_out=a,e.avail_out=u,e.next_in=s,e.avail_in=o,r.hold=f,r.bits=c,(r.wsize||h!==e.avail_out&&r.mode<30&&(r.mode<27||4!==t))&&j(e,e.output,e.next_out,h-e.avail_out)?(r.mode=31,-4):(l-=e.avail_in,h-=e.avail_out,e.total_in+=l,e.total_out+=h,r.total+=h,r.wrap&&h&&(e.adler=r.check=(r.flags?A:x)(r.check,i,h,e.next_out-h)),e.data_type=r.bits+(r.last?64:0)+(12===r.mode?128:0)+(20===r.mode||15===r.mode?256:0),(0==l&&0===h||4===t)&&k===U&&(k=-5),k)},n.inflateEnd=function(e){if(!e||!e.state)return O;var t=e.state;return t.window&&(t.window=null),e.state=null,U},n.inflateGetHeader=function(e,t){var r;return!e||!e.state||0==(2&(r=e.state).wrap)?O:((r.head=t).done=!1,U)},n.inflateSetDictionary=function(e,t){var r,n=t.length;return!e||!e.state||0!==(r=e.state).wrap&&11!==r.mode?O:11===r.mode&&x(1,t,n,0)!==r.check?-3:j(e,t,n,n)?(r.mode=31,-4):(r.havedict=1,U)},n.inflateInfo="pako inflate (from Nodeca project)"},{"../utils/common":3,"./adler32":5,"./crc32":7,"./inffast":10,"./inftrees":12}],12:[function(e,t,r){"use strict";var M=e("../utils/common"),W=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],U=[16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78],L=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0],O=[16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64];t.exports=function(e,t,r,n,i,s,a,o){for(var u,f,c,l,h,d,p,_,g,v=o.bits,m=0,y=0,S=0,b=0,w=0,k=0,C=0,E=0,R=0,B=0,P=null,D=0,x=new M.Buf16(16),A=new M.Buf16(16),I=null,T=0,m=0;m<=15;m++)x[m]=0;for(y=0;y<n;y++)x[t[r+y]]++;for(w=v,b=15;1<=b&&0===x[b];b--);if(b<w&&(w=b),0===b)return i[s++]=20971520,i[s++]=20971520,o.bits=1,0;for(S=1;S<b&&0===x[S];S++);for(w<S&&(w=S),m=E=1;m<=15;m++)if(E<<=1,(E-=x[m])<0)return-1;if(0<E&&(0===e||1!==b))return-1;for(A[1]=0,m=1;m<15;m++)A[m+1]=A[m]+x[m];for(y=0;y<n;y++)0!==t[r+y]&&(a[A[t[r+y]]++]=y);if(d=0===e?(P=I=a,19):1===e?(P=W,D-=257,I=U,T-=257,256):(P=L,I=O,-1),m=S,h=s,C=y=B=0,c=-1,l=(R=1<<(k=w))-1,1===e&&852<R||2===e&&592<R)return 1;for(;;){for(p=m-C,g=a[y]<d?(_=0,a[y]):a[y]>d?(_=I[T+a[y]],P[D+a[y]]):(_=96,0),u=1<<m-C,S=f=1<<k;i[h+(B>>C)+(f-=u)]=p<<24|_<<16|g|0,0!==f;);for(u=1<<m-1;B&u;)u>>=1;if(0!==u?(B&=u-1,B+=u):B=0,y++,0==--x[m]){if(m===b)break;m=t[r+a[y]]}if(w<m&&(B&l)!==c){for(0===C&&(C=w),h+=S,E=1<<(k=m-C);k+C<b&&!((E-=x[k+C])<=0);)k++,E<<=1;if(R+=1<<k,1===e&&852<R||2===e&&592<R)return 1;i[c=B&l]=w<<24|k<<16|h-s|0}}return 0!==B&&(i[h+B]=m-C<<24|64<<16|0),o.bits=w,0}},{"../utils/common":3}],13:[function(e,t,r){"use strict";t.exports={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"}},{}],14:[function(e,t,n){"use strict";var s=e("../utils/common");function i(e){for(var t=e.length;0<=--t;)e[t]=0}var g=15,a=16,u=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],f=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],o=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],c=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],l=new Array(576);i(l);var h=new Array(60);i(h);var d=new Array(512);i(d);var p=new Array(256);i(p);var _=new Array(29);i(_);var v,m,y,S=new Array(30);function I(e,t,r,n,i){this.static_tree=e,this.extra_bits=t,this.extra_base=r,this.elems=n,this.max_length=i,this.has_stree=e&&e.length}function r(e,t){this.dyn_tree=e,this.max_code=0,this.stat_desc=t}function U(e){return e<256?d[e]:d[256+(e>>>7)]}function T(e,t){e.pending_buf[e.pending++]=255&t,e.pending_buf[e.pending++]=t>>>8&255}function F(e,t,r){e.bi_valid>a-r?(e.bi_buf|=t<<e.bi_valid&65535,T(e,e.bi_buf),e.bi_buf=t>>a-e.bi_valid,e.bi_valid+=r-a):(e.bi_buf|=t<<e.bi_valid&65535,e.bi_valid+=r)}function L(e,t,r){F(e,r[2*t],r[2*t+1])}function H(e,t){for(var r=0;r|=1&e,e>>>=1,r<<=1,0<--t;);return r>>>1}function j(e,t,r){for(var n,i=new Array(g+1),s=0,a=1;a<=g;a++)i[a]=s=s+r[a-1]<<1;for(n=0;n<=t;n++){var o=e[2*n+1];0!==o&&(e[2*n]=H(i[o]++,o))}}function K(e){for(var t=0;t<286;t++)e.dyn_ltree[2*t]=0;for(t=0;t<30;t++)e.dyn_dtree[2*t]=0;for(t=0;t<19;t++)e.bl_tree[2*t]=0;e.dyn_ltree[512]=1,e.opt_len=e.static_len=0,e.last_lit=e.matches=0}function M(e){8<e.bi_valid?T(e,e.bi_buf):0<e.bi_valid&&(e.pending_buf[e.pending++]=e.bi_buf),e.bi_buf=0,e.bi_valid=0}function P(e,t,r,n){var i=2*t,s=2*r;return e[i]<e[s]||e[i]===e[s]&&n[t]<=n[r]}function Y(e,t,r){for(var n=e.heap[r],i=r<<1;i<=e.heap_len&&(i<e.heap_len&&P(t,e.heap[i+1],e.heap[i],e.depth)&&i++,!P(t,n,e.heap[i],e.depth));)e.heap[r]=e.heap[i],r=i,i<<=1;e.heap[r]=n}function q(e,t,r){var n,i,s,a,o=0;if(0!==e.last_lit)for(;n=e.pending_buf[e.d_buf+2*o]<<8|e.pending_buf[e.d_buf+2*o+1],i=e.pending_buf[e.l_buf+o],o++,0==n?L(e,i,t):(L(e,(s=p[i])+256+1,t),0!==(a=u[s])&&F(e,i-=_[s],a),L(e,s=U(--n),r),0!==(a=f[s])&&F(e,n-=S[s],a)),o<e.last_lit;);L(e,256,t)}function G(e,_){var t,r,n,i=_.dyn_tree,s=_.stat_desc.static_tree,a=_.stat_desc.has_stree,o=_.stat_desc.elems,u=-1;for(e.heap_len=0,e.heap_max=573,t=0;t<o;t++)0!==i[2*t]?(e.heap[++e.heap_len]=u=t,e.depth[t]=0):i[2*t+1]=0;for(;e.heap_len<2;)i[2*(n=e.heap[++e.heap_len]=u<2?++u:0)]=1,e.depth[n]=0,e.opt_len--,a&&(e.static_len-=s[2*n+1]);for(_.max_code=u,t=e.heap_len>>1;1<=t;t--)Y(e,i,t);for(n=o;t=e.heap[1],e.heap[1]=e.heap[e.heap_len--],Y(e,i,1),r=e.heap[1],e.heap[--e.heap_max]=t,e.heap[--e.heap_max]=r,i[2*n]=i[2*t]+i[2*r],e.depth[n]=(e.depth[t]>=e.depth[r]?e.depth[t]:e.depth[r])+1,i[2*t+1]=i[2*r+1]=n,e.heap[1]=n++,Y(e,i,1),2<=e.heap_len;);e.heap[--e.heap_max]=e.heap[1],function(e){for(var t,r,n,i,s,a=_.dyn_tree,o=_.max_code,u=_.stat_desc.static_tree,f=_.stat_desc.has_stree,c=_.stat_desc.extra_bits,l=_.stat_desc.extra_base,h=_.stat_desc.max_length,d=0,p=0;p<=g;p++)e.bl_count[p]=0;for(a[2*e.heap[e.heap_max]+1]=0,t=e.heap_max+1;t<573;t++)h<(p=a[2*a[2*(r=e.heap[t])+1]+1]+1)&&(p=h,d++),a[2*r+1]=p,o<r||(e.bl_count[p]++,i=0,l<=r&&(i=c[r-l]),s=a[2*r],e.opt_len+=s*(p+i),f&&(e.static_len+=s*(u[2*r+1]+i)));if(0!==d){do{for(p=h-1;0===e.bl_count[p];)p--}while(e.bl_count[p]--,e.bl_count[p+1]+=2,e.bl_count[h]--,0<(d-=2));for(p=h;0!==p;p--)for(r=e.bl_count[p];0!==r;)o<(n=e.heap[--t])||(a[2*n+1]!==p&&(e.opt_len+=(p-a[2*n+1])*a[2*n],a[2*n+1]=p),r--)}}(e),j(i,u,e.bl_count)}function X(e,t,r){var n,i,s=-1,a=t[1],o=0,u=7,f=4;for(0===a&&(u=138,f=3),t[2*(r+1)+1]=65535,n=0;n<=r;n++)i=a,a=t[2*(n+1)+1],++o<u&&i===a||(o<f?e.bl_tree[2*i]+=o:0!==i?(i!==s&&e.bl_tree[2*i]++,e.bl_tree[32]++):o<=10?e.bl_tree[34]++:e.bl_tree[36]++,s=i,f=(o=0)===a?(u=138,3):i===a?(u=6,3):(u=7,4))}function W(e,t,r){var n,i,s=-1,a=t[1],o=0,u=7,f=4;for(0===a&&(u=138,f=3),n=0;n<=r;n++)if(i=a,a=t[2*(n+1)+1],!(++o<u&&i===a)){if(o<f)for(;L(e,i,e.bl_tree),0!=--o;);else 0!==i?(i!==s&&(L(e,i,e.bl_tree),o--),L(e,16,e.bl_tree),F(e,o-3,2)):o<=10?(L(e,17,e.bl_tree),F(e,o-3,3)):(L(e,18,e.bl_tree),F(e,o-11,7));s=i,f=(o=0)===a?(u=138,3):i===a?(u=6,3):(u=7,4)}}i(S);var b=!1;function Q(e,t,r,n){F(e,0+(n?1:0),3),t=t,r=r,M(e=e),T(e,r),T(e,~r),s.arraySet(e.pending_buf,e.window,t,r,e.pending),e.pending+=r}n._tr_init=function(e){b||(function(){for(var e,t,r,n,i=new Array(g+1),s=r=0;s<28;s++)for(_[s]=r,e=0;e<1<<u[s];e++)p[r++]=s;for(p[r-1]=s,s=n=0;s<16;s++)for(S[s]=n,e=0;e<1<<f[s];e++)d[n++]=s;for(n>>=7;s<30;s++)for(S[s]=n<<7,e=0;e<1<<f[s]-7;e++)d[256+n++]=s;for(t=0;t<=g;t++)i[t]=0;for(e=0;e<=143;)l[2*e+1]=8,e++,i[8]++;for(;e<=255;)l[2*e+1]=9,e++,i[9]++;for(;e<=279;)l[2*e+1]=7,e++,i[7]++;for(;e<=287;)l[2*e+1]=8,e++,i[8]++;for(j(l,287,i),e=0;e<30;e++)h[2*e+1]=5,h[2*e]=H(e,5);v=new I(l,u,257,286,g),m=new I(h,f,0,30,g),y=new I(new Array(0),o,0,19,7)}(),b=!0),e.l_desc=new r(e.dyn_ltree,v),e.d_desc=new r(e.dyn_dtree,m),e.bl_desc=new r(e.bl_tree,y),e.bi_buf=0,e.bi_valid=0,K(e)},n._tr_stored_block=Q,n._tr_flush_block=function(e,t,r,n){var i,s,a=0;0<e.level?(2===e.strm.data_type&&(e.strm.data_type=function(e){for(var t=4093624447,r=0;r<=31;r++,t>>>=1)if(1&t&&0!==e.dyn_ltree[2*r])return 0;if(0!==e.dyn_ltree[18]||0!==e.dyn_ltree[20]||0!==e.dyn_ltree[26])return 1;for(r=32;r<256;r++)if(0!==e.dyn_ltree[2*r])return 1;return 0}(e)),G(e,e.l_desc),G(e,e.d_desc),a=function(e){var t;for(X(e,e.dyn_ltree,e.l_desc.max_code),X(e,e.dyn_dtree,e.d_desc.max_code),G(e,e.bl_desc),t=18;3<=t&&0===e.bl_tree[2*c[t]+1];t--);return e.opt_len+=3*(t+1)+5+5+4,t}(e),i=e.opt_len+3+7>>>3,(s=e.static_len+3+7>>>3)<=i&&(i=s)):i=s=r+5,r+4<=i&&-1!==t?Q(e,t,r,n):4===e.strategy||s===i?(F(e,2+(n?1:0),3),q(e,l,h)):(F(e,4+(n?1:0),3),function(e,t,r,n){var i;for(F(e,t-257,5),F(e,r-1,5),F(e,n-4,4),i=0;i<n;i++)F(e,e.bl_tree[2*c[i]+1],3);W(e,e.dyn_ltree,t-1),W(e,e.dyn_dtree,r-1)}(e,e.l_desc.max_code+1,e.d_desc.max_code+1,a+1),q(e,e.dyn_ltree,e.dyn_dtree)),K(e),n&&M(e)},n._tr_tally=function(e,t,r){return e.pending_buf[e.d_buf+2*e.last_lit]=t>>>8&255,e.pending_buf[e.d_buf+2*e.last_lit+1]=255&t,e.pending_buf[e.l_buf+e.last_lit]=255&r,e.last_lit++,0===t?e.dyn_ltree[2*r]++:(e.matches++,t--,e.dyn_ltree[2*(p[r]+256+1)]++,e.dyn_dtree[2*U(t)]++),e.last_lit===e.lit_bufsize-1},n._tr_align=function(e){F(e,2,3),L(e,256,l),16===(e=e).bi_valid?(T(e,e.bi_buf),e.bi_buf=0,e.bi_valid=0):8<=e.bi_valid&&(e.pending_buf[e.pending++]=255&e.bi_buf,e.bi_buf>>=8,e.bi_valid-=8)}},{"../utils/common":3}],15:[function(e,t,r){"use strict";t.exports=function(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0}},{}],"/":[function(e,t,r){"use strict";var n={};(0,e("./lib/utils/common").assign)(n,e("./lib/deflate"),e("./lib/inflate"),e("./lib/zlib/constants")),t.exports=n},{"./lib/deflate":1,"./lib/inflate":2,"./lib/utils/common":3,"./lib/zlib/constants":6}]},{},[])("/")},"object"==_typeof(t)?e.exports=n():(r=[],void 0===(n="function"==typeof(n=n)?n.apply(t,r):n)||(e.exports=n))}},n={};function __webpack_require__(e){var t=n[e];if(void 0!==t)return t.exports;t=n[e]={exports:{}};return r[e](t,t.exports,__webpack_require__),t.exports}__webpack_require__.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),function(){"use strict";function _defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var e=function(){function CDMap(){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,CDMap),this._pairs=[],this.size=0}return function _createClass(e,t,r){t&&_defineProperties(e.prototype,t),r&&_defineProperties(e,r)}(CDMap,[{key:"has",value:function has(e){return-1<this._indexOf(e)}},{key:"get",value:function get(e){e=this._indexOf(e);if(-1<e)return this._pairs[e][1]}},{key:"set",value:function set(e,t){var r=this._indexOf(e);-1<r?this._pairs[r][1]=t:(this._pairs.push([e,t]),this.size++)}},{key:"delete",value:function _delete(e){e=this._indexOf(e);return-1<e&&(this._pairs.splice(e,1),this.size--,!0)}},{key:"forEach",value:function forEach(e){for(var t=0;t<this._pairs.length;t++)e(this._pairs[t][1],this._pairs[t][0])}},{key:"clear",value:function clear(){this._pairs=[]}},{key:"_indexOf",value:function _indexOf(e){for(var t=0;t<this._pairs.length;t++)if(this._pairs[t][0]===e)return t;return-1}}]),CDMap}(),t=function create(){return new(self.Map||e)};function CDSet_defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function GI(){for(var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:[],t=new(self.Set||n),r=0;r<e.length;r++)t.add(e[r]);return t}var n=function(){function CDSet(){!function CDSet_classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,CDSet),this._set=[],this.size=0}return function CDSet_createClass(e,t,r){t&&CDSet_defineProperties(e.prototype,t),r&&CDSet_defineProperties(e,r)}(CDSet,[{key:"add",value:function add(e){return this._set.push(e),this.size++,this}},{key:"has",value:function has(e){return-1<this._set.indexOf(e)}},{key:"delete",value:function _delete(e){for(var t=0;t<this._set.length;t++)if(this._set[t]===e)return this._set.splice(t,1),this.size--,!0;return!1}},{key:"forEach",value:function forEach(e){for(var t=0;t<this._set.length;t++)e(this._set[t])}},{key:"clear",value:function clear(){this._set=[]}}]),CDSet}();function WorkerCommunicator_defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var i=function(){function WorkerCommunicator(){!function WorkerCommunicator_classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,WorkerCommunicator),this._msgListeners=t()}return function WorkerCommunicator_createClass(e,t,r){t&&WorkerCommunicator_defineProperties(e.prototype,t),r&&WorkerCommunicator_defineProperties(e,r)}(WorkerCommunicator,[{key:"setMessagingPort",value:function setMessagingPort(e){var i=this;(this._messagePort=e).setonmessage(function(e){var t=e.data,r=[],n=i._msgListeners.get(t.msgType);n&&n.forEach(function(e){e.callback(t.data),e.isOneTime&&r.push(e)}),r.forEach(function(e){n.delete(e)})})}},{key:"sendAsync",value:function sendAsync(e,t,r,n,i){n&&r&&this.addMessageListener(r,n,i),this._messagePort.postMessage({msgType:e,data:t})}},{key:"addMessageListener",value:function addMessageListener(e,t,r){var n=null;this._msgListeners.has(e)?n=this._msgListeners.get(e):(n=GI(),this._msgListeners.set(e,n)),n.add({callback:t,isOneTime:r})}}]),WorkerCommunicator}(),o={resetSessionApiThreshold:"resetSessionApiThreshold",dataWupDispatchRateSettings:"dataWupDispatchRateSettings",logWupDispatchRateSettings:"logWupDispatchRateSettings",forceDynamicDataWupDispatchSettings:"forceDynamicDataWupDispatchSettings",wupStatisticsLogIntervalMs:"wupStatisticsLogIntervalMs",serverCommunicationSettings:"serverCommunicationSettings",wupResponseTimeout:"wupResponseTimeout",wupMessageRequestTimeout:"wupMessageRequestTimeout",logMessageRequestTimeout:"logMessageRequestTimeout",collectKeyRegionValue:"collectKeyRegionValue",crossDomainsList:"crossDomainsList",crossDomainsTimeout:"crossDomainsTimeout",isMutationObserver:"isMutationObserver",isEnabled:"isEnabled",slaveChannelHandshakeTimeout:"slaveChannelHandshakeTimeout",slaveAliveMessageInterval:"slaveAliveMessageInterval",collectCustomElementAttribute:"collectCustomElementAttribute",customElementAttribute:"customElementAttribute",enableFramesProcessing:"enableFramesProcessing",enableSameSiteNoneAndSecureCookies:"enableSameSiteNoneAndSecureCookies",wupServerURL:"wupServerURL",logAddress:"logAddress",shouldMaskClickEventValueField:"shouldMaskClickEventValueField",isCaptureKeyEvents:"isCaptureKeyEvents",locationEventsTimeoutMsec:"locationEventsTimeoutMsec",heartBeatMessageInterval:"heartBeatMessageInterval",isMotionAroundTouchEnabled:"isMotionAroundTouchEnabled",motionPaddingAroundTouchMSec:"motionPaddingAroundTouchMSec",isMotionOnSessionStart:"isMotionOnSessionStart",motionPaddingOnSessionStartMSec:"motionPaddingOnSessionStartMSec",isVMDetection:"isVMDetection",isScrollCollect:"isScrollCollect",isContextPropsFeature:"isContextPropsFeature",isCrossDomain:"isCrossdomain",gyroEventsThreshold:"gyroEventsThreshold",gyroEventsSamplePeriod:"gyroEventsSamplePeriod",dataQPassWorkerInterval:"dataQPassWorkerInterval",accelerometerEventsSamplePeriod:"accelerometerEventsSamplePeriod",orientationEventsThreshold:"orientationEventsThreshold",orientationEventsSamplePeriod:"orientationEventsSamplePeriod",isAudioDetection:"isAudioDetection",stateChangeEnabled:"stateChangeEnabled",logLevel:"logLevel",enableCustomElementsProcessing:"enableCustomElementsProcessing",keyEventsMaskSpecialChars:"keyEventsMaskSpecialChars",collectSelectElementBlurAndFocusEvents:"collectSelectElementBlurAndFocusEvents",allowedUnmaskedValuesList:"allowedUnmaskedValuesList",enableUnmaskedValues:"enableUnmaskedValues"},r="NewSessionStartedEvent",s="ConfigurationLoadedEvent",a="ServerStateUpdatedEvent",u="HeartBeatStatusEvent",f={DEBUG:10,INFO:20,WARN:30,ERROR:40,CRITICAL:50,OFF:80};function ConfigurationRepository_defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var c={defaultDynamicWupDispatchRateConfiguration:{type:"dynamic"},defaultIncrementalWupDispatchRateConfiguration:{type:"incremental",initialRateValueMs:500,incrementStepMs:500,incrementStopMs:5e3,incrementStartWupSendCount:20}},l=function(){function ConfigurationRepository(){!function ConfigurationRepository_classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,ConfigurationRepository),this._requireParseFields=t(),this._requireParseFields.set(o.dataWupDispatchRateSettings,o.dataWupDispatchRateSettings),this._requireParseFields.set(o.logWupDispatchRateSettings,o.logWupDispatchRateSettings),this._requireParseFields.set(o.serverCommunicationSettings,o.serverCommunicationSettings),this._requireParseFields.set(o.crossDomainsList,o.crossDomainsList),this._requireParseFields.set(o.allowedUnmaskedValuesList,o.allowedUnmaskedValuesList),this._configurationList={},this.configDefault={logLevel:f.INFO,isCrossdomain:!1,crossDomainsList:[],crossDomainsTimeout:5e3,orientationEventsSamplePeriod:300,orientationEventsThreshold:1,stateChangeEnabled:!1,accelerometerEventsSamplePeriod:0,dataQPassWorkerInterval:500,gyroEventsSamplePeriod:0,gyroEventsThreshold:.3,isContextPropsFeature:!0,isEnabled:!0,isResetEveryLoad:!1,isScrollCollect:!0,isVMDetection:!0,isAudioDetection:!1,wupStatisticsLogIntervalMs:3e4,heartBeatMessageInterval:5e3,resetSessionApiThreshold:2e4,wupMessageRequestTimeout:5e3,logMessageRequestTimeout:5e3,slaveChannelHandshakeTimeout:6e4,slaveAliveMessageInterval:100,forceDynamicDataWupDispatchSettings:!0,dataWupDispatchRateSettings:c.defaultDynamicWupDispatchRateConfiguration,logWupDispatchRateSettings:{type:"constant",initialRateValueMs:2500},serverCommunicationSettings:{sendRetryRate:1e3,queueLoadThreshold:100},collectKeyRegionValue:!1,isMutationObserver:!0,collectCustomElementAttribute:!0,shouldMaskClickEventValueField:!0,isCaptureKeyEvents:!1,locationEventsTimeoutMsec:1e4,isMotionAroundTouchEnabled:!0,motionPaddingAroundTouchMSec:3e3,isMotionOnSessionStart:!0,motionPaddingOnSessionStartMSec:2e4,keyEventsMaskSpecialChars:!1,collectSelectElementBlurAndFocusEvents:!1,enableUnmaskedValues:!1,allowedUnmaskedValuesList:[]},this.loadConfigurations(this.configDefault)}return function ConfigurationRepository_createClass(e,t,r){t&&ConfigurationRepository_defineProperties(e.prototype,t),r&&ConfigurationRepository_defineProperties(e,r)}(ConfigurationRepository,[{key:"isConfigurationUpdatedFromServer",value:function isConfigurationUpdatedFromServer(){return!this._isDefaultConfiguration}},{key:"loadConfigurations",value:function loadConfigurations(n){var i=this;n&&(this._isDefaultConfiguration=n===this.configDefault,Object.keys(n).forEach(function(e){var t,r=n[e];!i._requireParseFields.has(e)||(t=i._tryParseConfigurationValue(r))&&(r=t),i._configurationList[e]=r}))}},{key:"get",value:function get(e){return this._configurationList[e]}},{key:"set",value:function set(e,t){this._configurationList[e]=t}},{key:"getAll",value:function getAll(){return this._configurationList}},{key:"_tryParseConfigurationValue",value:function _tryParseConfigurationValue(e){if("string"!=typeof e)return null;try{return JSON.parse(e)}catch(e){}return null}}]),ConfigurationRepository}();function CDEvent_defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var h=function(){function CDEvent(){!function CDEvent_classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,CDEvent),this._listeners=[]}return function CDEvent_createClass(e,t,r){t&&CDEvent_defineProperties(e.prototype,t),r&&CDEvent_defineProperties(e,r)}(CDEvent,[{key:"subscribe",value:function subscribe(e){this._listeners.push(e)}},{key:"publish",value:function publish(e){for(var t=0,r=this._listeners.length;t<r;t++)this._listeners[t](e)}},{key:"unsubscribe",value:function unsubscribe(e){for(var t=0,r=this._listeners.length;t<r;t++)if(e===this._listeners[t]){this._listeners.splice(t,1);break}}}]),CDEvent}();function Logger_classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Logger_defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function Logger_createClass(e,t,r){return t&&Logger_defineProperties(e.prototype,t),r&&Logger_defineProperties(e,r),e}var d=function(){function Log(){Logger_classCallCheck(this,Log)}return Logger_createClass(Log,null,[{key:"setLogger",value:function setLogger(e){this._logger=e}},{key:"isDebug",value:function isDebug(){if(this._logger)return this._logger.isDebug()}},{key:"error",value:function error(e,t){this._logger&&this._logger.error(e,t||null)}},{key:"warn",value:function warn(e,t){this._logger&&this._logger.warn(e,t||null)}},{key:"trace",value:function trace(e){this._logger&&this._logger.trace(e)}},{key:"debug",value:function debug(e){this._logger&&this._logger.debug(e)}},{key:"info",value:function info(e){this._logger&&this._logger.info(e)}}]),Log}(),p=function(){function Logger(e,t){Logger_classCallCheck(this,Logger),this._logBridge=e,this._logLevel=t||f.INFO}return Logger_createClass(Logger,[{key:"trace",value:function trace(e){this._sendToLogBridge(e,f.DEBUG)}},{key:"debug",value:function debug(e){this._sendToLogBridge(e,f.DEBUG)}},{key:"info",value:function info(e){this._sendToLogBridge(e,f.INFO)}},{key:"warn",value:function warn(e,t){this._sendToLogBridge(e,f.WARN,t)}},{key:"error",value:function error(e,t){this._sendToLogBridge(e,f.ERROR,t)}},{key:"isDebug",value:function isDebug(){return this._logLevel===f.DEBUG}},{key:"updateLogConfig",value:function updateLogConfig(e){this._logLevel=e.get(o.logLevel)||this._logLevel}},{key:"_sendToLogBridge",value:function _sendToLogBridge(e,t,r){t>=this._logLevel&&(r&&r.stack&&(e+=" ;stack: ".concat(r.stack)),this._logBridge.log(e,t))}}]),Logger}();function WupServerSessionState_defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var _=function(){function WupServerSessionState(){!function WupServerSessionState_classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,WupServerSessionState),this.onServerStateUpdated=new h,this.reset()}return function WupServerSessionState_createClass(e,t,r){t&&WupServerSessionState_defineProperties(e.prototype,t),r&&WupServerSessionState_defineProperties(e,r)}(WupServerSessionState,[{key:"getSts",value:function getSts(){return this._sts}},{key:"getStd",value:function getStd(){return this._std}},{key:"getSid",value:function getSid(){return this._sid}},{key:"getCsid",value:function getCsid(){return this._csid}},{key:"getPsid",value:function getPsid(){return this._psid}},{key:"getMuid",value:function getMuid(){return this._muid}},{key:"getContextName",value:function getContextName(){return this._contextName}},{key:"getRequestId",value:function getRequestId(){return this._requestId}},{key:"getWupDispatchRate",value:function getWupDispatchRate(){return this._wupDispatchRate}},{key:"setSts",value:function setSts(e){this._sts=e}},{key:"setStd",value:function setStd(e){this._std=e}},{key:"setSid",value:function setSid(e){this._sid=e}},{key:"setCsid",value:function setCsid(e){this._csid=e}},{key:"setPsid",value:function setPsid(e){this._psid=e}},{key:"setMuid",value:function setMuid(e){this._muid=e}},{key:"setContextName",value:function setContextName(e){this._contextName=e}},{key:"setRequestId",value:function setRequestId(e){var t=!(1<arguments.length&&void 0!==arguments[1])||arguments[1];return this._requestId=e,t&&this._publish(),this._requestId}},{key:"setWupDispatchRate",value:function setWupDispatchRate(e){e?this._wupDispatchRate=e:d.warn("Wup dispatch rate of ".concat(e," is invalid. Ignoring update"))}},{key:"markConfigurationRequested",value:function markConfigurationRequested(){this._hasConfiguration?d.warn("We already have configuration. Ignoring the attempt to mark a pending configuration request."):this._hasPendingConfigurationRequest=!0}},{key:"markConfigurationReceived",value:function markConfigurationReceived(){this._hasConfiguration?d.warn("Marking that we received configuration although we already received configuration from the server. We shouldn\'t have received it again."):this._hasPendingConfigurationRequest||d.warn("Marking that we received configurations although we didn\'t have a pending request for configurations."),this._hasPendingConfigurationRequest=!1,this._hasConfiguration=!0}},{key:"getHasConfiguration",value:function getHasConfiguration(){return this._hasConfiguration}},{key:"getHasPendingConfigurationRequest",value:function getHasPendingConfigurationRequest(){return this._hasPendingConfigurationRequest}},{key:"incrementRequestId",value:function incrementRequestId(){return this._requestId++,this._publish(),this._requestId}},{key:"resetRequestId",value:function resetRequestId(){this._requestId=0}},{key:"reset",value:function reset(){this._sts=null,this._std=null,this._sid=null,this._csid=null,this._muid=null,this._contextName=null,this._requestId=0,this._wupDispatchRate=5e3,this._hasConfiguration=!1,this._hasPendingConfigurationRequest=!1}},{key:"_publish",value:function _publish(){this.onServerStateUpdated.publish({requestId:this._requestId,sid:this._sid,sts:this._sts,std:this._std})}}]),WupServerSessionState}();function LogRequestBodyBuilder_defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var g=function(){function LogRequestBodyBuilder(){!function LogRequestBodyBuilder_classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,LogRequestBodyBuilder)}return function LogRequestBodyBuilder_createClass(e,t,r){t&&LogRequestBodyBuilder_defineProperties(e.prototype,t),r&&LogRequestBodyBuilder_defineProperties(e,r)}(LogRequestBodyBuilder,[{key:"build",value:function build(e){return e.getInternalMessage()}}]),LogRequestBodyBuilder}();function Queue_defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var v=function(){function Queue(){!function Queue_classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Queue),this._buffer=[]}return function Queue_createClass(e,t,r){t&&Queue_defineProperties(e.prototype,t),r&&Queue_defineProperties(e,r)}(Queue,[{key:"hasItems",value:function hasItems(){return 0<this.length()}},{key:"length",value:function length(){return this._buffer.length}},{key:"enqueue",value:function enqueue(e){this._buffer.push(e)}},{key:"enqueueToHead",value:function enqueueToHead(e){this._buffer.unshift(e)}},{key:"dequeue",value:function dequeue(){return this._buffer.shift()}},{key:"getItem",value:function getItem(e){return this._buffer[e]}}]),Queue}();function ServerCommunicator_defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var m=function(){function ServerCommunicator(e,t,r){var n=3<arguments.length&&void 0!==arguments[3]&&arguments[3],i=4<arguments.length&&void 0!==arguments[4]?arguments[4]:"";!function ServerCommunicator_classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,ServerCommunicator),this._requestBodyBuilder=e,this.updateSettings(t),this._workerUtils=r,this._acceptNoResponse=n,this._messageDescriptor=i,this._dataQueue=new v,this._awaitingServerResponse=!1,this._currentMessageNumberOfSendFailures=0,this._currentSentItem=null,this._sendRetryTimeoutId=null,this._messageIdentifier=0}return function ServerCommunicator_createClass(e,t,r){t&&ServerCommunicator_defineProperties(e.prototype,t),r&&ServerCommunicator_defineProperties(e,r)}(ServerCommunicator,[{key:"setServerUrl",value:function setServerUrl(e){this.wupUrl=e}},{key:"updateSettings",value:function updateSettings(e){this._sendRetryRate=e.sendRetryRate,this._queueLoadThershold=e.queueLoadThreshold}},{key:"sendMessage",value:function sendMessage(e,t,r,n,i,s,a){function qN(e){o._onMessageSendSuccess(e,i)}function rN(e,t,r){o._onMessageSendFailure(e,t,r,s,a)}var o=this;this._enqueueMessage(e,t,r,n,qN,rN)}},{key:"flush",value:function flush(){this._flushData()}},{key:"isReadyToSendData",value:function isReadyToSendData(){return!!this.wupUrl}},{key:"_onMessageSendSuccess",value:function _onMessageSendSuccess(e,t){this._awaitingServerResponse=!1,this._currentMessageNumberOfSendFailures=0,this._currentSentItem=null,t(e),this._processNextQueueItem()}},{key:"_onMessageSendFailure",value:function _onMessageSendFailure(e,t,r,n,i){if(!this._currentSentItem)return d.error("An unexpected error has occurred while handling a ".concat(this._messageDescriptor," message send failure. Could not find sent item value. Moving to next queued item")),void this._processNextQueueItem();d.warn("Failed sending ".concat(this._messageDescriptor," message #").concat(this._currentSentItem.identifier,". ").concat(this._buildFailureLog(e,t,r))),this._awaitingServerResponse=!1,this._currentMessageNumberOfSendFailures++,0===this._currentSentItem.maxNumberOfSendAttempts||this._currentMessageNumberOfSendFailures<this._currentSentItem.maxNumberOfSendAttempts?(d.info("Trying to send ".concat(this._messageDescriptor," message #").concat(this._currentSentItem.identifier," again. Number of send failures is ").concat(this._currentMessageNumberOfSendFailures)),this._prepareMessageForSendRetry(this._currentSentItem.identifier,this._currentSentItem.messageToSend,this._currentSentItem.timeout,this._currentSentItem.maxNumberOfSendAttempts,this._currentSentItem.onSuccess,this._currentSentItem.onError),n&&n(this._currentMessageNumberOfSendFailures)):(d.warn("Discarding ".concat(this._messageDescriptor," message #").concat(this._currentSentItem.identifier," after ").concat(this._currentMessageNumberOfSendFailures," failed send attempts.")),n&&n(this._currentMessageNumberOfSendFailures),this._currentMessageNumberOfSendFailures=0,this._currentSentItem=null,i&&i(e),this._processNextQueueItem())}},{key:"_enqueueMessage",value:function _enqueueMessage(e,t,r,n,i,s){this._dataQueue.enqueue({identifier:this._messageIdentifier++,messageToSend:e,onSuccess:i,onError:s,timeout:t,maxNumberOfSendAttempts:r}),this._clearRetryTimeout(),n&&this._flushData(),this._awaitingServerResponse||this._processNextQueueItem(n)}},{key:"_processNextQueueItem",value:function _processNextQueueItem(){var e=0<arguments.length&&void 0!==arguments[0]&&arguments[0];if(this._dataQueue.hasItems()){var t=this._dataQueue.dequeue(),r=this._requestBodyBuilder.build(t.messageToSend);if(e&&navigator.sendBeacon)return d.debug("Data was sent by beacon"),void navigator.sendBeacon(this.wupUrl,r);this._awaitingServerResponse=!0,this._currentSentItem=t,this._workerUtils.getPostUrl(this.wupUrl,"POST",r,t.onSuccess,t.onError,this._acceptNoResponse,t.timeout),this._dataQueue.length()>this._queueLoadThershold&&d.warn("Data queue has ".concat(this._dataQueue.length()," items in queue. Might indicate slow\\\\unstable communication issues."))}}},{key:"_flushData",value:function _flushData(){for(;this._dataQueue.hasItems();)this._processNextQueueItem(!0)}},{key:"_prepareMessageForSendRetry",value:function _prepareMessageForSendRetry(e,t,r,n,i,s){this._dataQueue.enqueueToHead({identifier:e,messageToSend:t,onSuccess:i,onError:s,timeout:r,maxNumberOfSendAttempts:n}),this._setRetryTimeout()}},{key:"_clearRetryTimeout",value:function _clearRetryTimeout(){this._sendRetryTimeoutId&&clearTimeout(this._sendRetryTimeoutId)}},{key:"_setRetryTimeout",value:function _setRetryTimeout(){var e=this;this._clearRetryTimeout(),this._sendRetryTimeoutId=setTimeout(function(){e._processNextQueueItem()},this._sendRetryRate)}},{key:"_buildFailureLog",value:function _buildFailureLog(e,t,r){var n="";return e&&(n+="Response Text: ".concat(e,".")),t&&(n+="Status: ".concat(t,".")),r&&(n+="Status Text: ".concat(r,".")),n}}]),ServerCommunicator}();function LogMessage_defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var y=function(){function LogMessage(){!function LogMessage_classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,LogMessage)}return function LogMessage_createClass(e,t,r){t&&LogMessage_defineProperties(e.prototype,t),r&&LogMessage_defineProperties(e,r)}(LogMessage,[{key:"setData",value:function setData(e){this._data=e}},{key:"getInternalMessage",value:function getInternalMessage(){return this._data}}]),LogMessage}();function LogMessageBuilder_defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var S=function(){function LogMessageBuilder(e){!function LogMessageBuilder_classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,LogMessageBuilder),this._dataPacker=e}return function LogMessageBuilder_createClass(e,t,r){t&&LogMessageBuilder_defineProperties(e.prototype,t),r&&LogMessageBuilder_defineProperties(e,r)}(LogMessageBuilder,[{key:"build",value:function build(e){var t=new y;return t.setData(this._dataPacker.pack(e)),t}}]),LogMessageBuilder}(),b=self.btoa?self.btoa.bind(self):function(e){for(var t,r,n=String(e),i="",s=0,a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";n.charAt(0|s)||(a="=",s%1);i+=a.charAt(63&t>>8-s%1*8)){if(255<(r=n.charCodeAt(s+=.75)))throw new Error("\'btoa\' failed: The string to be encoded contains characters outside of the Latin1 range.");t=t<<8|r}return i};function DataPacker_defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var w=__webpack_require__(764),k=__webpack_require__(284),C=function(){function DataPacker(){!function DataPacker_classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,DataPacker),this._compressData=function(e){e=w.encode(e),e=k.deflateRaw(e,{to:"string"});return b(e)}}return function DataPacker_createClass(e,t,r){t&&DataPacker_defineProperties(e.prototype,t),r&&DataPacker_defineProperties(e,r)}(DataPacker,[{key:"pack",value:function pack(e){return this._getCompressedData(e)}},{key:"_getCompressedData",value:function _getCompressedData(e){return this._compressData(e)}}]),DataPacker}();function LogServerClient_defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var E=function(){function LogServerClient(e,t,r){!function LogServerClient_classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,LogServerClient),this._serverCommunicator=e,this._logMessageBuilder=t,this._configurationRepository=r,this._MESSAGE_SEND_RETRIES=5,this._requestTimeout=this._configurationRepository.get(o.logMessageRequestTimeout)}return function LogServerClient_createClass(e,t,r){t&&LogServerClient_defineProperties(e.prototype,t),r&&LogServerClient_defineProperties(e,r)}(LogServerClient,[{key:"setServerUrl",value:function setServerUrl(e){this._serverCommunicator.setServerUrl(e)}},{key:"sendData",value:function sendData(e){var t=1<arguments.length&&void 0!==arguments[1]&&arguments[1],e=this._logMessageBuilder.build(e);this._serverCommunicator.sendMessage(e,this._requestTimeout,this._MESSAGE_SEND_RETRIES,t,this._onSendDataSuccess.bind(this),this._onSendDataFailure.bind(this)),t&&this._serverCommunicator.flush()}},{key:"isReady",value:function isReady(){return this._serverCommunicator.isReadyToSendData()}},{key:"setRequestTimeout",value:function setRequestTimeout(e){this._requestTimeout=e}},{key:"_onSendDataSuccess",value:function _onSendDataSuccess(){}},{key:"_onSendDataFailure",value:function _onSendDataFailure(e){d.warn("Failed sending log message. Error: ".concat(e,"."))}}]),LogServerClient}();function WupStatisticsService_defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var R=function(){function WupStatisticsService(e){!function WupStatisticsService_classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,WupStatisticsService),this._statisticsLogIntervalMs=e,this.resetCounters(),this._setPeriodicStatisticsLog()}return function WupStatisticsService_createClass(e,t,r){t&&WupStatisticsService_defineProperties(e.prototype,t),r&&WupStatisticsService_defineProperties(e,r)}(WupStatisticsService,[{key:"getSentWupsCount",value:function getSentWupsCount(){return this._sentWupsCount}},{key:"incrementSentWupCount",value:function incrementSentWupCount(){this._sentWupsCount++,this._sentWupsInCurrentIntervalCount++}},{key:"updateSettings",value:function updateSettings(e){this._statisticsLogIntervalMs=e,this._setPeriodicStatisticsLog()}},{key:"resetCounters",value:function resetCounters(){this._sentWupsCount=0,this._sentWupsInCurrentIntervalCount=0}},{key:"stop",value:function stop(){this._stopPeriodicStatisticsLog()}},{key:"_writeStatisticsLog",value:function _writeStatisticsLog(){0!==this._sentWupsInCurrentIntervalCount&&(d.info("Sent ".concat(this._sentWupsInCurrentIntervalCount," wup in the last ").concat(this._statisticsLogIntervalMs," ms. Sent a total of ").concat(this._sentWupsCount," in the session")),this._sentWupsInCurrentIntervalCount=0)}},{key:"_stopPeriodicStatisticsLog",value:function _stopPeriodicStatisticsLog(){this._periodicLogIntervalId&&clearInterval(this._periodicLogIntervalId)}},{key:"_setPeriodicStatisticsLog",value:function _setPeriodicStatisticsLog(){this._stopPeriodicStatisticsLog(),this._periodicLogIntervalId=setInterval(this._writeStatisticsLog.bind(this),this._statisticsLogIntervalMs)}}]),WupStatisticsService}(),B="incremental",P="constant",D="dynamic";function WupDispatchConstantRateCalculator_defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var x=function(){function WupDispatchConstantRateCalculator(e){!function WupDispatchConstantRateCalculator_classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,WupDispatchConstantRateCalculator),this.updateSettings(e)}return function WupDispatchConstantRateCalculator_createClass(e,t,r){t&&WupDispatchConstantRateCalculator_defineProperties(e.prototype,t),r&&WupDispatchConstantRateCalculator_defineProperties(e,r)}(WupDispatchConstantRateCalculator,[{key:"getRate",value:function getRate(){return this._currentRate}},{key:"updateSettings",value:function updateSettings(e){if(e.type!==P)throw new Error("Invalid settings provided to constant calculator");this._currentRate=e.initialRateValueMs}}]),WupDispatchConstantRateCalculator}();function WupDispatchIncrementalRateCalculator_defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var A=function(){function WupDispatchIncrementalRateCalculator(e,t){!function WupDispatchIncrementalRateCalculator_classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,WupDispatchIncrementalRateCalculator),this._wupStatisticsService=t,this.updateSettings(e)}return function WupDispatchIncrementalRateCalculator_createClass(e,t,r){t&&WupDispatchIncrementalRateCalculator_defineProperties(e.prototype,t),r&&WupDispatchIncrementalRateCalculator_defineProperties(e,r)}(WupDispatchIncrementalRateCalculator,[{key:"getRate",value:function getRate(){if(this._wupStatisticsService.getSentWupsCount()<this._incrementStartWupSendCount)return this._currentRate;var e=this._currentRate+this._incrementStepMs;return e<=this._incrementStopMs&&(this._currentRate=e),this._currentRate}},{key:"updateSettings",value:function updateSettings(e){if(e.type!==B)throw new Error("Invalid settings provided to incremental calculator");this._currentRate=e.initialRateValueMs,this._incrementStepMs=e.incrementStepMs,this._incrementStopMs=e.incrementStopMs,this._incrementStartWupSendCount=e.incrementStartWupSendCount}}]),WupDispatchIncrementalRateCalculator}();function WupDispatchDynamicRateCalculator_defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var I=function(){function WupDispatchDynamicRateCalculator(e){!function WupDispatchDynamicRateCalculator_classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,WupDispatchDynamicRateCalculator),this._wupServerSessionState=e}return function WupDispatchDynamicRateCalculator_createClass(e,t,r){t&&WupDispatchDynamicRateCalculator_defineProperties(e.prototype,t),r&&WupDispatchDynamicRateCalculator_defineProperties(e,r)}(WupDispatchDynamicRateCalculator,[{key:"getRate",value:function getRate(){return this._wupServerSessionState.getWupDispatchRate()}},{key:"updateSettings",value:function updateSettings(){}}]),WupDispatchDynamicRateCalculator}();function WupDispatchRateCalculatorFactory_defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var T=function(){function WupDispatchRateCalculatorFactory(e,t){!function WupDispatchRateCalculatorFactory_classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,WupDispatchRateCalculatorFactory),this._wupStatisticsService=e,this._wupServerSessionState=t}return function WupDispatchRateCalculatorFactory_createClass(e,t,r){t&&WupDispatchRateCalculatorFactory_defineProperties(e.prototype,t),r&&WupDispatchRateCalculatorFactory_defineProperties(e,r)}(WupDispatchRateCalculatorFactory,[{key:"create",value:function create(e){if(e.type===P)return new x(e);if(e.type===B)return new A(e,this._wupStatisticsService);if(e.type===D)return new I(this._wupServerSessionState);throw new Error("Unsupported dispatch rate type ".concat(e.type))}}]),WupDispatchRateCalculatorFactory}();function DataDispatcher_defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var M=function(){function DataDispatcher(e,t,r,n){!function DataDispatcher_classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,DataDispatcher),this._serverClient=e,this._aggregator=t,this._wupDispatchRateCalculatorFactory=r,this._wupDispatchRateSettings=n,this._wupDispatchRateCalculator=this._wupDispatchRateCalculatorFactory.create(this._wupDispatchRateSettings),this._sendToServerInterval=this._wupDispatchRateCalculator.getRate(),this._setDispatchInterval(this._sendToServerInterval)}return function DataDispatcher_createClass(e,t,r){t&&DataDispatcher_defineProperties(e.prototype,t),r&&DataDispatcher_defineProperties(e,r)}(DataDispatcher,[{key:"add",value:function add(e){this._aggregator.add(e)}},{key:"sendIfRequired",value:function sendIfRequired(){var e=0<arguments.length&&void 0!==arguments[0]&&arguments[0];0!==this._sendToServerInterval&&!e||this._sendToServer(e)}},{key:"updateByConfig",value:function updateByConfig(e){e&&(e.type!==this._wupDispatchRateSettings.type?this._wupDispatchRateCalculator=this._wupDispatchRateCalculatorFactory.create(e):this._wupDispatchRateCalculator.updateSettings(e),this._sendToServerInterval=this._wupDispatchRateCalculator.getRate(),this._setDispatchInterval(this._sendToServerInterval),this._wupDispatchRateSettings=e)}},{key:"scheduleNextDispatching",value:function scheduleNextDispatching(){var e=this._wupDispatchRateCalculator.getRate();e!==this._sendToServerInterval&&(this._sendToServerInterval=e,this._setDispatchInterval(this._sendToServerInterval))}},{key:"_sendToServer",value:function _sendToServer(){var e=0<arguments.length&&void 0!==arguments[0]&&arguments[0];d.debug("Sending a message to the server"),this._serverClient.isReady()?this._aggregator.isEmpty()||(this._serverClient.sendData(this._aggregator.take(),e),this.scheduleNextDispatching()):d.info("".concat(this._serverClient.constructor.name," is not ready. Message will not be sent to server"))}},{key:"_setDispatchInterval",value:function _setDispatchInterval(e){this._sendIntervalId&&(clearInterval(this._sendIntervalId),this._sendIntervalId=null),0!==e&&(this._sendIntervalId=setInterval(this._sendToServer.bind(this),e))}}]),DataDispatcher}();function LogAggregator_defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var W=function(){function LogAggregator(){!function LogAggregator_classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,LogAggregator),this.reset()}return function LogAggregator_createClass(e,t,r){t&&LogAggregator_defineProperties(e.prototype,t),r&&LogAggregator_defineProperties(e,r)}(LogAggregator,[{key:"add",value:function add(e){e=e.data;if(!e)throw new Error("Unable to add log message. Missing data field");this._Q.push(e)}},{key:"take",value:function take(){var e=this._Q;return this.reset(),e}},{key:"reset",value:function reset(){this._Q=[]}},{key:"isEmpty",value:function isEmpty(){return 0===this._Q.length}}]),LogAggregator}();function MessageProcessor_defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var U=function(){function MessageProcessor(e){!function MessageProcessor_classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,MessageProcessor),this._dataDispatcher=e}return function MessageProcessor_createClass(e,t,r){t&&MessageProcessor_defineProperties(e.prototype,t),r&&MessageProcessor_defineProperties(e,r)}(MessageProcessor,[{key:"process",value:function process(e){if(!e)throw new Error("Invalid message received for processing.");var t=!1;if(Array.isArray(e))for(var r=0,n=e.length;r<n;r++)t=this._processSingleMessage(e[r])||t;else t=this._processSingleMessage(e)||t;this._dataDispatcher.sendIfRequired(t)}},{key:"_processSingleMessage",value:function _processSingleMessage(e){if(this._isEmptyFlushMessage(e))return!0;var t=!1;if(e.shouldFlush&&(t=!0),this._isDataValid(e))return this._dataDispatcher.add(e),t;t="Received a message with invalid structure. Missing eventName or Data fields";throw d.error(t),new Error(t)}},{key:"_isEmptyFlushMessage",value:function _isEmptyFlushMessage(e){return"flushData"===e.eventName}},{key:"_isDataValid",value:function _isDataValid(e){return e.eventName&&e.data}}]),MessageProcessor}();function WupMessage_defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var L=function(){function WupMessage(){!function WupMessage_classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,WupMessage),this._messageStruct={ds:"js"}}return function WupMessage_createClass(e,t,r){t&&WupMessage_defineProperties(e.prototype,t),r&&WupMessage_defineProperties(e,r)}(WupMessage,[{key:"getDataSource",value:function getDataSource(){return this._messageStruct.ds}},{key:"getSid",value:function getSid(){return this._messageStruct.cdsnum}},{key:"setSid",value:function setSid(e){this._messageStruct.cdsnum=e}},{key:"getCsid",value:function getCsid(){return this._messageStruct.csid}},{key:"setCsid",value:function setCsid(e){this._messageStruct.csid=e}},{key:"getPsid",value:function getPsid(){return this._messageStruct.psid}},{key:"setPsid",value:function setPsid(e){this._messageStruct.psid=e}},{key:"getMuid",value:function getMuid(){return this._messageStruct.muid}},{key:"setMuid",value:function setMuid(e){this._messageStruct.muid=e}},{key:"getContextName",value:function getContextName(){return this._messageStruct.context_name}},{key:"setContextName",value:function setContextName(e){this._messageStruct.context_name=e}},{key:"getRequestId",value:function getRequestId(){return this._messageStruct.requestId}},{key:"setRequestId",value:function setRequestId(e){this._messageStruct.requestId=e}},{key:"getSts",value:function getSts(){return this._messageStruct.sts}},{key:"setSts",value:function setSts(e){this._messageStruct.sts=e}},{key:"getStd",value:function getStd(){return this._messageStruct.std}},{key:"setStd",value:function setStd(e){this._messageStruct.std=e}},{key:"getConfigurationName",value:function getConfigurationName(){return this._messageStruct.c}},{key:"setConfigurationName",value:function setConfigurationName(e){this._messageStruct.c=e}},{key:"getData",value:function getData(){return this._messageStruct.d}},{key:"setData",value:function setData(e){this._messageStruct.d=e}},{key:"getInternalMessage",value:function getInternalMessage(){return this._messageStruct}}]),WupMessage}();function WupMessageBuilder_defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var O=function(){function WupMessageBuilder(e,t){!function WupMessageBuilder_classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,WupMessageBuilder),this._wupServerSessionState=e,this._dataPacker=t}return function WupMessageBuilder_createClass(e,t,r){t&&WupMessageBuilder_defineProperties(e.prototype,t),r&&WupMessageBuilder_defineProperties(e,r)}(WupMessageBuilder,[{key:"build",value:function build(e,t){var r=new L;return r.setSid(this._wupServerSessionState.getSid()),r.setCsid(this._wupServerSessionState.getCsid()),r.setPsid(this._wupServerSessionState.getPsid()),r.setMuid(this._wupServerSessionState.getMuid()),r.setContextName(this._wupServerSessionState.getContextName()),r.setRequestId(this._wupServerSessionState.getRequestId()),this._wupServerSessionState.getSts()&&this._wupServerSessionState.getStd()&&(r.setSts(this._wupServerSessionState.getSts()),r.setStd(this._wupServerSessionState.getStd())),"0"===e?r.setData([this._dataPacker.pack(t)]):r.setConfigurationName(e),r}}]),WupMessageBuilder}();function WupRequestBodyBuilder_defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var N=function(){function WupRequestBodyBuilder(e){!function WupRequestBodyBuilder_classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,WupRequestBodyBuilder),this._wupServerSessionState=e}return function WupRequestBodyBuilder_createClass(e,t,r){t&&WupRequestBodyBuilder_defineProperties(e.prototype,t),r&&WupRequestBodyBuilder_defineProperties(e,r)}(WupRequestBodyBuilder,[{key:"build",value:function build(e){return e.setSid(this._wupServerSessionState.getSid()),e.setSts(this._wupServerSessionState.getSts()),e.setStd(this._wupServerSessionState.getStd()),JSON.stringify(e.getInternalMessage())}}]),WupRequestBodyBuilder}(),F={TouchEvent:"touchEvent",KeyEvent:"keyEvent",ConfigurationLoadedEvent:"ConfigurationLoadedEvent",NewSessionStartedEvent:"NewSessionStartedEvent",WupDispatchRateUpdatedEvent:"WupDispatchRateUpdatedEvent",ApiContextChangeEvent:"ApiContextChangeEvent",ApiResetSessionEvent:"ApiResetSessionEvent",ApiCustomerMetadataEvent:"ApiCustomerMetadataEvent",ApiChangeStateEvent:"ApiChangeStateEvent",ApiSetCsidEvent:"ApiSetCsidEvent",ApiSetPsidEvent:"ApiSetPsidEvent",ServerStateUpdatedEvent:"ServerStateUpdatedEvent",StateChangedEvent:"StateChangedEvent",MutationSingleEvent:"MutationSingleEvent",MutationAddedNodes:"MutationAddedNodes",MutationRemovedNodes:"MutationRemovedNodes",StandardInputEvent:"StandardInputEvent",StandardInputFocusEvent:"StandardInputFocusEvent",StandardInputBlurEvent:"StandardInputBlurEvent",StandardOnClickEvent:"StandardOnClickEvent",StandardOnSelectEvent:"StandardOnSelectEvent",ElementFocusEvent:"ElementFocusEvent",ElementBlurEvent:"ElementBlurEvent",StandardOnFormSubmitEvent:"StandardOnFormSubmitEvent",SyntheticInputMaskEvent:"SyntheticInputMaskEvent",CutEvent:"CutEvent",CopyEvent:"CopyEvent",PasteEvent:"PasteEvent",DeviceOrientationEvent:"DeviceOrientationEvent",BeforeInstallPromptEvent:"BeforeInstallPromptEvent",FocusEvent:"FocusEvent",BlurEvent:"BlurEvent",ResizeEvent:"ResizeEvent",DOMContentLoadedEvent:"DOMContentLoadedEvent",VisibilityChangeEvent:"VisibilityChangeEvent",ScrollEvent:"ScrollEvent",WindowMessageEvent:"WindowMessageEvent",WorkerSystemStatusEvent:"WorkerSystemStatusEvent",CustomElementDetectedEvent:"CustomElementDetectedEvent",CustomElementAddedEvent:"CustomElementAddedEvent",CustomElementRemovedEvent:"CustomElementRemovedEvent",CustomElementInaccessible:"CustomElementInaccessible",CustomElementSubmitted:"CustomElementSubmitted",BrowserContextAdded:"BrowserContextAdded",RunDefaultFeatures:"RunDefaultFeatures",StopDefaultFeatures:"StopDefaultFeatures"};function WupResponseProcessor_defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var q=function(){function WupResponseProcessor(e,t,r){!function WupResponseProcessor_classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,WupResponseProcessor),this._wupServerSessionState=e,this._messageBus=t,this._configurationRepository=r}return function WupResponseProcessor_createClass(e,t,r){t&&WupResponseProcessor_defineProperties(e.prototype,t),r&&WupResponseProcessor_defineProperties(e,r)}(WupResponseProcessor,[{key:"process",value:function process(e,t){var r=!1;t&&(this._wupServerSessionState.markConfigurationReceived(),this._configurationRepository.loadConfigurations(e),r=!0),e.sts&&this._wupServerSessionState.setSts(e.sts),e.std&&this._wupServerSessionState.setStd(e.std),e.reset_session&&e.new_sid&&this._wupServerSessionState.setSid(e.new_sid),this._messageBus.publish(F.ServerStateUpdatedEvent,{requestId:this._wupServerSessionState.getRequestId(),sid:this._wupServerSessionState.getSid(),sts:this._wupServerSessionState.getSts(),std:this._wupServerSessionState.getStd()}),r&&this._messageBus.publish(F.ConfigurationLoadedEvent,this._configurationRepository),e.reset_session&&(e.new_sid?this._messageBus.publish(F.NewSessionStartedEvent,e.new_sid):d.warn("Received a reset session flag from the server without a new sid. Ignoring reset.")),e.nextWupInterval?e.nextWupInterval!==this._wupServerSessionState.getWupDispatchRate()&&(this._wupServerSessionState.setWupDispatchRate(e.nextWupInterval),this._messageBus.publish(F.WupDispatchRateUpdatedEvent,this._wupServerSessionState.getWupDispatchRate())):d.warn("Received an invalid nextWupInterval value of ".concat(e.nextWupInterval,". Ignoring value."))}}]),WupResponseProcessor}(),z="701",H="702",j="703",Y="704";function rJ(e,t){!function HeartBeatEvent_classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,rJ),this.category=e,this.status=t}var Z="oK",V="Error";function WupServerClient_defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var Q=function(){function WupServerClient(e,t,r,n,i,s,a){!function WupServerClient_classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,WupServerClient),this._serverCommunicator=e,this._wupMessageBuilder=t,this._wupServerSessionState=r,this._wupStatisticsService=n,this._wupResponseProcessor=i,this._configurationRepository=s,this._msgBus=a,this._MESSAGE_SEND_RETRIES=3,this._INFINITE_MESSAGE_SEND_RETRIES=0,this._requestTimeout=this._configurationRepository.get(o.wupMessageRequestTimeout)}return function WupServerClient_createClass(e,t,r){t&&WupServerClient_defineProperties(e.prototype,t),r&&WupServerClient_defineProperties(e,r)}(WupServerClient,[{key:"startNewSession",value:function startNewSession(e,t,r,n,i){this._validateCommonSessionRelatedParameters(r,i),this._wupServerSessionState.setRequestId(0),this._sendSessionMessage(null,e,t,r,n,i,null,this._wupServerSessionState.getRequestId())}},{key:"_sendSessionMessage",value:function _sendSessionMessage(e,t,r,n,i,s,a,o){var u=this;this._initSession(e,t,r,n,i,s,a,o);var a=this._createStaticFieldsPart(),f=!this._wupServerSessionState.getHasConfiguration()&&!this._wupServerSessionState.getHasPendingConfigurationRequest();f&&this._wupServerSessionState.markConfigurationRequested();o=this._wupMessageBuilder.build(f?"js":"0",a),a=function onSendSuccess(e){u._onSendDataSuccess(e,f)};this._serverCommunicator.sendMessage(o,this._requestTimeout,f?this._INFINITE_MESSAGE_SEND_RETRIES:this._MESSAGE_SEND_RETRIES,!1,a,this._onSendDataRetryFailure.bind(this),this._onSendDataFailure.bind(this))}},{key:"resumeSession",value:function resumeSession(e,t,r,n,i,s,a){this._validateResumeSessionRelatedParameters(e,n,s);var o=a&&a.requestId?this._wupServerSessionState.setRequestId(a.requestId+1):this._wupServerSessionState.setRequestId(0);this._sendSessionMessage(e,t,r,n,i,s,a,o)}},{key:"sendData",value:function sendData(e){var t=1<arguments.length&&void 0!==arguments[1]&&arguments[1];this._wupServerSessionState.getSts()&&this._wupServerSessionState.getStd()?this._sendMessage(e,t):d.error("Unable to send data. sts or std are undefined")}},{key:"setRequestTimeout",value:function setRequestTimeout(e){this._requestTimeout=e}},{key:"_initSession",value:function _initSession(e,t,r,n,i,s,a,o){d.debug("Initializing session. wupUrl:".concat(s,", sid:").concat(e)),this._serverCommunicator.setServerUrl(s),this._wupServerSessionState.setSid(e),this._wupServerSessionState.setCsid(t),this._wupServerSessionState.setPsid(r),this._wupServerSessionState.setMuid(n),this._wupServerSessionState.setContextName(i||""),this._wupServerSessionState.setRequestId(o,!1),a?(this._wupServerSessionState.setSts(a.sts),this._wupServerSessionState.setStd(a.std)):(d.info("Resetting server state of server communicator. Deleting sts and std"),this._wupServerSessionState.setSts(null),this._wupServerSessionState.setStd(null),this._wupStatisticsService.resetCounters())}},{key:"updateCsid",value:function updateCsid(e){var t=this._wupServerSessionState.incrementRequestId()||0;this._wupServerSessionState.setCsid(e);e={static_fields:[]};e.static_fields.push(["requestId",t],["contextId",this._wupServerSessionState.getContextName()],["sessionId",this._wupServerSessionState.getSid()],["customerSessionId",this._wupServerSessionState.getCsid()],["partnerSessionId",this._wupServerSessionState.getPsid()],["muid",this._wupServerSessionState.getMuid()]),this._sendMessage(e)}},{key:"updatePsid",value:function updatePsid(e){var t=this._wupServerSessionState.incrementRequestId()||0;this._wupServerSessionState.setPsid(e);e={static_fields:[]};e.static_fields.push(["requestId",t],["contextId",this._wupServerSessionState.getContextName()],["sessionId",this._wupServerSessionState.getSid()],["customerSessionId",this._wupServerSessionState.getCsid()],["partnerSessionId",this._wupServerSessionState.getPsid()],["muid",this._wupServerSessionState.getMuid()]),this._sendMessage(e)}},{key:"isReady",value:function isReady(){return!!(this._serverCommunicator.isReadyToSendData()&&this._wupServerSessionState.getStd()&&this._wupServerSessionState.getSts())}},{key:"_validateResumeSessionRelatedParameters",value:function _validateResumeSessionRelatedParameters(e,t,r){if(!e)throw new Error("Invalid sid parameter ".concat(e,". Unable to start new session"));this._validateCommonSessionRelatedParameters(t,r)}},{key:"_validateCommonSessionRelatedParameters",value:function _validateCommonSessionRelatedParameters(e,t){if(!e)throw new Error("Invalid muid parameter ".concat(e,". Unable to start new session"));if(!t)throw new Error("Invalid serverAddress parameter ".concat(t,". Unable to start new session"))}},{key:"_createStaticFieldsPart",value:function _createStaticFieldsPart(){var e={static_fields:[]};return e.static_fields.push(["requestId",this._wupServerSessionState.getRequestId()],["contextId",this._wupServerSessionState.getContextName()],["sessionId",this._wupServerSessionState.getSid()],["customerSessionId",this._wupServerSessionState.getCsid()],["partnerSessionId",this._wupServerSessionState.getPsid()],["muid",this._wupServerSessionState.getMuid()]),e}},{key:"_sendMessage",value:function _sendMessage(e){var t=1<arguments.length&&void 0!==arguments[1]&&arguments[1],e=this._wupMessageBuilder.build("0",e);this._serverCommunicator.sendMessage(e,this._requestTimeout,this._MESSAGE_SEND_RETRIES,t,this._onSendDataSuccess.bind(this),this._onSendDataRetryFailure.bind(this),this._onSendDataFailure.bind(this))}},{key:"_onSendDataSuccess",value:function _onSendDataSuccess(e,t){t=t||!1,this._publishWorkerSystemStatus(Y,Z),this._publishWorkerSystemStatus(Y,Z),this._handleSuccessResponse(e,t),this._wupStatisticsService.incrementSentWupCount()}},{key:"_onSendDataRetryFailure",value:function _onSendDataRetryFailure(e){e===this._MESSAGE_SEND_RETRIES&&this._publishWorkerSystemStatus(Y,V)}},{key:"_onSendDataFailure",value:function _onSendDataFailure(){}},{key:"_handleSuccessResponse",value:function _handleSuccessResponse(e,t){var r=t?H:j;try{var n=JSON.parse(e);this._wupResponseProcessor.process(n,t),this._publishWorkerSystemStatus(r,Z)}catch(e){this._publishWorkerSystemStatus(r,V);var i="Failed to parse message from server: ".concat(e.message);d.error(i,e)}}},{key:"_publishWorkerSystemStatus",value:function _publishWorkerSystemStatus(e,t){this._msgBus.publish(F.WorkerSystemStatusEvent,new rJ(e,t))}}]),WupServerClient}();function DataAggregator_defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var G=function(){function DataAggregator(e){!function DataAggregator_classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,DataAggregator),this._wupServerSessionState=e,this.reset()}return function DataAggregator_createClass(e,t,r){t&&DataAggregator_defineProperties(e.prototype,t),r&&DataAggregator_defineProperties(e,r)}(DataAggregator,[{key:"add",value:function add(e){var t=e.eventName,e=e.data;if(!t)throw new Error("Unable to add data message. Missing eventName field");if(!e)throw new Error("Unable to add data message. Missing data field");this._isEmpty=!1,this._dataObj[t]=this._dataObj[t]||[],this._dataObj[t].push(e)}},{key:"take",value:function take(){this._isEmpty||this._dataObj.static_fields.push(["requestId",this._wupServerSessionState.incrementRequestId()]);var e=this._dataObj;return this.reset(),e}},{key:"reset",value:function reset(){this._isEmpty=!0,this._dataObj=this.getFreshDataObj()}},{key:"isEmpty",value:function isEmpty(){return this._isEmpty}},{key:"getFreshDataObj",value:function getFreshDataObj(){return{static_fields:[],key_events:[],mouse_events:[]}}}]),DataAggregator}();function WorkerConfigurationLoadedEventHandler_defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var K=function(){function WorkerConfigurationLoadedEventHandler(e,t,r,n,i,s,a,o,u){!function WorkerConfigurationLoadedEventHandler_classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,WorkerConfigurationLoadedEventHandler),this._messageBus=e,this._wupStatisticsService=t,this._dataDispatcher=r,this._logDataDispatcher=n,this._serverCommunicator=i,this._wupServerClient=s,this._logServerClient=a,this._logger=o,this._mainCommunicator=u,this._messageBus.subscribe(F.ConfigurationLoadedEvent,this._handle.bind(this))}return function WorkerConfigurationLoadedEventHandler_createClass(e,t,r){t&&WorkerConfigurationLoadedEventHandler_defineProperties(e.prototype,t),r&&WorkerConfigurationLoadedEventHandler_defineProperties(e,r)}(WorkerConfigurationLoadedEventHandler,[{key:"_handle",value:function _handle(e){this._wupStatisticsService.updateSettings(e.get(o.wupStatisticsLogIntervalMs));var t=e.get(o.forceDynamicDataWupDispatchSettings)?c.defaultDynamicWupDispatchRateConfiguration:e.get(o.dataWupDispatchRateSettings);this._dataDispatcher.updateByConfig(t),this._logDataDispatcher.updateByConfig(e.get(o.logWupDispatchRateSettings)),this._serverCommunicator.updateSettings(e.get(o.serverCommunicationSettings)),this._logger.updateLogConfig(e),this._wupServerClient.setRequestTimeout(e.get(o.wupMessageRequestTimeout)||e.get(o.wupResponseTimeout)),this._logServerClient.setRequestTimeout(e.get(o.logMessageRequestTimeout)),this._mainCommunicator.sendAsync(s,e.getAll())}}]),WorkerConfigurationLoadedEventHandler}();function WorkerNewSessionStartedEventHandler_defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var X=function(){function WorkerNewSessionStartedEventHandler(e,t,r){!function WorkerNewSessionStartedEventHandler_classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,WorkerNewSessionStartedEventHandler),this._messageBus=e,this._logger=t,this._mainCommunicator=r,this._messageBus.subscribe(F.NewSessionStartedEvent,this._handle.bind(this))}return function WorkerNewSessionStartedEventHandler_createClass(e,t,r){t&&WorkerNewSessionStartedEventHandler_defineProperties(e.prototype,t),r&&WorkerNewSessionStartedEventHandler_defineProperties(e,r)}(WorkerNewSessionStartedEventHandler,[{key:"_handle",value:function _handle(e){this._logger.info("Worker received a new session id ".concat(e," from server.")),this._mainCommunicator.sendAsync(r,e)}}]),WorkerNewSessionStartedEventHandler}();function WorkerServerStateUpdatedEventHandler_defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var J=function(){function WorkerServerStateUpdatedEventHandler(e,t,r){!function WorkerServerStateUpdatedEventHandler_classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,WorkerServerStateUpdatedEventHandler),this._messageBus=e,this._logger=t,this._mainCommunicator=r,this._messageBus.subscribe(F.ServerStateUpdatedEvent,this._handle.bind(this))}return function WorkerServerStateUpdatedEventHandler_createClass(e,t,r){t&&WorkerServerStateUpdatedEventHandler_defineProperties(e.prototype,t),r&&WorkerServerStateUpdatedEventHandler_defineProperties(e,r)}(WorkerServerStateUpdatedEventHandler,[{key:"_handle",value:function _handle(e){this._logger.debug("Worker received an updated server state."),this._mainCommunicator.sendAsync(a,e)}}]),WorkerServerStateUpdatedEventHandler}();function WorkerWupDispatchRateUpdatedEventHandler_defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var $=function(){function WorkerWupDispatchRateUpdatedEventHandler(e,t,r){!function WorkerWupDispatchRateUpdatedEventHandler_classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,WorkerWupDispatchRateUpdatedEventHandler),this._messageBus=e,this._dataDispatcher=t,this._logger=r,this._messageBus.subscribe(F.WupDispatchRateUpdatedEvent,this._handle.bind(this))}return function WorkerWupDispatchRateUpdatedEventHandler_createClass(e,t,r){t&&WorkerWupDispatchRateUpdatedEventHandler_defineProperties(e.prototype,t),r&&WorkerWupDispatchRateUpdatedEventHandler_defineProperties(e,r)}(WorkerWupDispatchRateUpdatedEventHandler,[{key:"_handle",value:function _handle(e){this._logger.info("Worker received a wup dispatch rate ".concat(e," from server.")),this._dataDispatcher.scheduleNextDispatching()}}]),WorkerWupDispatchRateUpdatedEventHandler}(),ee="startNewSessionCommand",te="resumeSessionCommand",re="changeContextCommand",ne="updateCsidCommand",ie="updatePsidCommand",se="updateLogUrl",ae="sendDataCommand",oe="sendLogCommand";function WorkerService_defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var ue=function(){function WorkerService(e,t,r,n,i,s,a){!function WorkerService_classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,WorkerService),this._mainCommunicator=e,this._wupServerClient=t,this._logServerClient=r,this._configurationRepository=n,this._messageProcessor=i,this._logMessageProcessor=s,this._wupServerSessionState=a}return function WorkerService_createClass(e,t,r){t&&WorkerService_defineProperties(e.prototype,t),r&&WorkerService_defineProperties(e,r)}(WorkerService,[{key:"start",value:function start(){d.debug("Starting Worker Service"),this._mainCommunicator.addMessageListener(ee,this._onStartNewSessionCommand.bind(this)),this._mainCommunicator.addMessageListener(te,this._onResumeSessionCommand.bind(this)),this._mainCommunicator.addMessageListener(re,this._onChangeContextCommand.bind(this)),this._mainCommunicator.addMessageListener(ne,this._onUpdateCsidCommand.bind(this)),this._mainCommunicator.addMessageListener(ie,this._onUpdatePsidCommand.bind(this)),this._mainCommunicator.addMessageListener(se,this._onUpdateLogUrlCommand.bind(this)),this._mainCommunicator.addMessageListener(ae,this._onSendDataCommand.bind(this)),this._mainCommunicator.addMessageListener(oe,this._onSendLogCommand.bind(this))}},{key:"_onStartNewSessionCommand",value:function _onStartNewSessionCommand(e){this._wupServerClient.startNewSession(e.csid,e.psid,e.muid,e.contextName,e.serverAddress)}},{key:"_onResumeSessionCommand",value:function _onResumeSessionCommand(e){this._wupServerClient.resumeSession(e.cdsnum,e.csid,e.psid,e.muid,e.contextName,e.serverAddress,e.serverState)}},{key:"_onChangeContextCommand",value:function _onChangeContextCommand(e){d.debug("Worker received a ChangeContextCommand from main."),this._wupServerSessionState.setContextName(e.contextName)}},{key:"_onUpdateCsidCommand",value:function _onUpdateCsidCommand(e){d.debug("Worker received an UpdateCsidCommand from main. CSID: ".concat(e.csid,".")),this._wupServerClient.updateCsid(e.csid)}},{key:"_onUpdatePsidCommand",value:function _onUpdatePsidCommand(e){d.debug("Worker received an UpdatePsidCommand from main. PSID: ".concat(e.psid,".")),this._wupServerClient.updatePsid(e.psid)}},{key:"_onUpdateLogUrlCommand",value:function _onUpdateLogUrlCommand(e){this._logServerClient.setServerUrl(e.logAddress)}},{key:"_onSendDataCommand",value:function _onSendDataCommand(e){this._messageProcessor.process(e)}},{key:"_onSendLogCommand",value:function _onSendLogCommand(e){this._logMessageProcessor.process(e)}}]),WorkerService}();function HttpRequestFactory_defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var fe=function(){function HttpRequestFactory(){!function HttpRequestFactory_classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,HttpRequestFactory)}return function HttpRequestFactory_createClass(e,t,r){t&&HttpRequestFactory_defineProperties(e.prototype,t),r&&HttpRequestFactory_defineProperties(e,r)}(HttpRequestFactory,null,[{key:"create",value:function create(){if(self.XMLHttpRequest&&Object.prototype.hasOwnProperty.call(XMLHttpRequest.prototype,"withCredentials"))return new XMLHttpRequest;if(self.XDomainRequest)return new XDomainRequest;if(!self.XMLHttpRequest)throw new Error("There is no supported http request object");return new XMLHttpRequest}}]),HttpRequestFactory}();function WorkerUtils_defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var ce=function(){function WorkerUtils(){!function WorkerUtils_classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,WorkerUtils)}return function WorkerUtils_createClass(e,t,r){t&&WorkerUtils_defineProperties(e.prototype,t),r&&WorkerUtils_defineProperties(e,r)}(WorkerUtils,null,[{key:"isUndefinedNull",value:function isUndefinedNull(e){return null==e||void 0===e}},{key:"getPostUrl",value:function getPostUrl(t,e,r,n,i,s,a){var o=fe.create();try{o instanceof self.XMLHttpRequest?(o.open(e,t,!0),o.timeout=a||12e3,o.onload=function(){200===o.status||204===o.status&&s?n&&n(o.responseText):i&&i(o.responseText,o.status,o.statusText)},o.onerror=function(){i&&i(o.responseText,o.status,o.statusText)},o.ontimeout=function(){i&&i("timeout")},o.onabort=function(){i&&i("abort")},o.send(r)):(o.onload=function(){n&&o.responseText&&n(o.responseText)},o.onerror=function(){i&&i(o.responseText,o.status,o.statusText)},o.onprogress=function(){},o.ontimeout=function(){i&&i("timeout")},o.open(e,t,!0),o.timeout=a||12e3,setTimeout(function(){o.send(r)},0))}catch(e){throw console.log("ERROR ERROR ERROR. URL: ".concat(t,". ").concat(e,".")),e}}}]),WorkerUtils}();function WorkerSystemStatusEventHandler_defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var le=function(){function WorkerSystemStatusEventHandler(e,t,r){!function WorkerSystemStatusEventHandler_classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,WorkerSystemStatusEventHandler),this._mainCommunicator=e,this._messageBus=t,this._logger=r,this.errors={},this._messageBus.subscribe(F.WorkerSystemStatusEvent,this._handle.bind(this))}return function WorkerSystemStatusEventHandler_createClass(e,t,r){t&&WorkerSystemStatusEventHandler_defineProperties(e.prototype,t),r&&WorkerSystemStatusEventHandler_defineProperties(e,r)}(WorkerSystemStatusEventHandler,[{key:"_handle",value:function _handle(e){this._logger.debug("Sending new HeartBeatStatusEvent - ".concat(e.category,", ").concat(e.status)),this._mainCommunicator.sendAsync(u,e)}}]),WorkerSystemStatusEventHandler}();function WorkerSysLoader_classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function WorkerSysLoader_defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function WorkerSysLoader_createClass(e,t,r){return t&&WorkerSysLoader_defineProperties(e.prototype,t),r&&WorkerSysLoader_defineProperties(e,r),e}var he=function(){function WorkerSysLoader(e,t){WorkerSysLoader_classCallCheck(this,WorkerSysLoader),this._mainCommunicator=e,this._msgBus=t,this._eventHandlers=[]}return WorkerSysLoader_createClass(WorkerSysLoader,[{key:"loadSystem",value:function loadSystem(){var t=this;this._configurationRepository=new l,this._wupServerSessionState=new _,this._logRequestBodyBuilder=new g,this._logServerCommunicator=new m(this._logRequestBodyBuilder,this._configurationRepository.get(o.serverCommunicationSettings),ce,!0,"log"),this._logMessageBuilder=new S(new C),this._logServerClient=new E(this._logServerCommunicator,this._logMessageBuilder,this._configurationRepository),this._wupStatisticsService=new R(this._configurationRepository.get(o.wupStatisticsLogIntervalMs)),this._wupDispatchRateCalculatorFactory=new T(this._wupStatisticsService,this._wupServerSessionState),this._logDataDispatcher=new M(this._logServerClient,new W,this._wupDispatchRateCalculatorFactory,this._configurationRepository.get(o.logWupDispatchRateSettings));var r=this._logDataDispatcher,e=new(function(){function _class(){WorkerSysLoader_classCallCheck(this,_class)}return WorkerSysLoader_createClass(_class,[{key:"log",value:function log(e,t){r.add({eventName:"log",data:{msg:e,url:"worker",level:t,sn:this.sn++}})}}]),_class}());this._logMessageProcessor=new U(this._logDataDispatcher),e.sn=0;var n=new p(e);d.setLogger(n),this._wupMessageBuilder=new O(this._wupServerSessionState,new C),this._wupRequestBodyBuilder=new N(this._wupServerSessionState),this._dataServerCommunicator=new m(this._wupRequestBodyBuilder,this._configurationRepository.get(o.serverCommunicationSettings),ce,!1,"wup"),this._wupResponseProcessor=new q(this._wupServerSessionState,this._msgBus,this._configurationRepository),this._wupServerClient=new Q(this._dataServerCommunicator,this._wupMessageBuilder,this._wupServerSessionState,this._wupStatisticsService,this._wupResponseProcessor,this._configurationRepository,this._msgBus);e=this._configurationRepository.get(o.forceDynamicDataWupDispatchSettings)?c.defaultDynamicWupDispatchRateConfiguration:this._configurationRepository.get(o.dataWupDispatchRateSettings);this._dataDispatcher=new M(this._wupServerClient,new G(this._wupServerSessionState),this._wupDispatchRateCalculatorFactory,e),this._messageProcessor=new U(this._dataDispatcher),this._eventHandlers.push(new K(this._msgBus,this._wupStatisticsService,this._dataDispatcher,this._logDataDispatcher,this._dataServerCommunicator,this._wupServerClient,this._logServerClient,n,this._mainCommunicator)),this._eventHandlers.push(new X(this._msgBus,n,this._mainCommunicator)),this._eventHandlers.push(new J(this._msgBus,n,this._mainCommunicator)),this._eventHandlers.push(new $(this._msgBus,this._dataDispatcher,n)),this._eventHandlers.push(new le(this._mainCommunicator,this._msgBus,n)),this._wupServerSessionState.onServerStateUpdated.subscribe(function(e){t._mainCommunicator.sendAsync(a,e)}),this._mainCommunicator.addMessageListener("stateUpdateFromStorage",function(e){e&&e.requestId&&e.sts&&(t._wupServerSessionState.setRequestId(e.requestId,!1),t._wupServerSessionState.setSts(e.sts),t._wupServerSessionState.setStd(e.std))}),this._workerService=new ue(this._mainCommunicator,this._wupServerClient,this._logServerClient,this._configurationRepository,this._messageProcessor,this._logMessageProcessor,this._wupServerSessionState),this._workerService.start(),d.info("Loaded worker")}}]),WorkerSysLoader}();function MessageBus_defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var de=function(){function MessageBus(){!function MessageBus_classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,MessageBus),this.subscribers=t()}return function MessageBus_createClass(e,t,r){t&&MessageBus_defineProperties(e.prototype,t),r&&MessageBus_defineProperties(e,r)}(MessageBus,[{key:"subscribe",value:function subscribe(e,t){var r,n=2<arguments.length&&void 0!==arguments[2]&&arguments[2],i=!1;this.subscribers.has(e)?(r=this.subscribers.get(e))&&r.forEach(function(e){t===e.handler&&(i=!0)}):(r=GI(),this.subscribers.set(e,r)),i||r.add({handler:t,isOneTime:n})}},{key:"unsubscribe",value:function unsubscribe(e,t){var r;e&&this.subscribers.has(e)&&((r=this.subscribers.get(e))&&r.forEach(function(e){t===e.handler&&r.delete(e)}),0===r.size&&this.subscribers.delete(e))}},{key:"publish",value:function publish(e,t){if(!e)throw new Error("invalid argument messageType must be defined");this._notifySubscribers(e,t)}},{key:"_notifySubscribers",value:function _notifySubscribers(e,t){var r=this.subscribers.get(e);r&&r.forEach(function(e){e.handler(t),e.isOneTime&&r.delete(e)})}}]),MessageBus}();function CDPort_defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var pe=function(){function CDPort(e){!function CDPort_classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,CDPort),this._portNativeWorker=e}return function CDPort_createClass(e,t,r){t&&CDPort_defineProperties(e.prototype,t),r&&CDPort_defineProperties(e,r)}(CDPort,[{key:"postMessage",value:function postMessage(){this._portNativeWorker.postMessage.apply(this._portNativeWorker,arguments)}},{key:"close",value:function close(){this._portNativeWorker.terminate()}},{key:"setonmessage",value:function setonmessage(e){this._portNativeWorker.onmessage=e}}]),CDPort}();function WorkerStartPoint_defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var _e=function(){function WorkerStartPoint(){!function WorkerStartPoint_classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,WorkerStartPoint)}return function WorkerStartPoint_createClass(e,t,r){t&&WorkerStartPoint_defineProperties(e.prototype,t),r&&WorkerStartPoint_defineProperties(e,r)}(WorkerStartPoint,[{key:"start",value:function start(){var e=new i,t=new de,r=new he(e,t);this._loadWorkerSystem(e,t,r,new pe(self))}},{key:"_loadWorkerSystem",value:function _loadWorkerSystem(e,t,r,n){try{e.setMessagingPort(n),r.loadSystem(),t.publish(F.WorkerSystemStatusEvent,new rJ(z,Z))}catch(e){t.publish(F.WorkerSystemStatusEvent,new rJ(z,V))}}}]),WorkerStartPoint}();function Application_defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}(new(function(){function Application(){!function Application_classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Application)}return function Application_createClass(e,t,r){t&&Application_defineProperties(e.prototype,t),r&&Application_defineProperties(e,r)}(Application,[{key:"start",value:function start(){(new _e).start()}}]),Application}())).start()}()}();', null)
            }
        },
        855: function(e) {
            "use strict";
            var i = window.URL || window.webkitURL;
            e.exports = function(t, n) {
                try {
                    try {
                        var r;
                        try {
                            (r = new (window.BlobBuilder || window.WebKitBlobBuilder || window.MozBlobBuilder || window.MSBlobBuilder)).append(t),
                            r = r.getBlob()
                        } catch (e) {
                            r = new Blob([t])
                        }
                        return new Worker(i.createObjectURL(r))
                    } catch (e) {
                        return new Worker("data:application/javascript," + encodeURIComponent(t))
                    }
                } catch (e) {
                    if (!n)
                        throw Error("Inline worker is not supported");
                    return new Worker(n)
                }
            }
        }
    }
      , r = {};
    function __webpack_require__(e) {
        var t = r[e];
        if (void 0 !== t)
            return t.exports;
        t = r[e] = {
            exports: {}
        };
        return n[e](t, t.exports, __webpack_require__),
        t.exports
    }
    __webpack_require__.amdO = {},
    __webpack_require__.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        }
        : function() {
            return e
        }
        ;
        return __webpack_require__.d(t, {
            a: t
        }),
        t
    }
    ,
    __webpack_require__.d = function(e, t) {
        for (var n in t)
            __webpack_require__.o(t, n) && !__webpack_require__.o(e, n) && Object.defineProperty(e, n, {
                enumerable: !0,
                get: t[n]
            })
    }
    ,
    __webpack_require__.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }
    ,
    __webpack_require__.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }
    ;
    var e = {};
    !function() {
        "use strict";
        __webpack_require__.r(e),
        (new (__webpack_require__(534).default.Application)).start()
    }(),
    cdwpb = e
}();
