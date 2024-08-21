/*
  Found on https://hb.illimitybank.com/login Aug 21st 2024
*/

var tsPlatform = function(e) {
    "use strict";
    function t(e, t) {
        var i = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            t && (n = n.filter((function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }
            ))),
            i.push.apply(i, n)
        }
        return i
    }
    function i(e) {
        for (var i = 1; i < arguments.length; i++) {
            var n = null != arguments[i] ? arguments[i] : {};
            i % 2 ? t(Object(n), !0).forEach((function(t) {
                r(e, t, n[t])
            }
            )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : t(Object(n)).forEach((function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            }
            ))
        }
        return e
    }
    function n(e) {
        var t = function(e, t) {
            if ("object" != typeof e || !e)
                return e;
            var i = e[Symbol.toPrimitive];
            if (void 0 !== i) {
                var n = i.call(e, t || "default");
                if ("object" != typeof n)
                    return n;
                throw new TypeError("@@toPrimitive must return a primitive value.")
            }
            return ("string" === t ? String : Number)(e)
        }(e, "string");
        return "symbol" == typeof t ? t : String(t)
    }
    function r(e, t, i) {
        return (t = n(t))in e ? Object.defineProperty(e, t, {
            value: i,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = i,
        e
    }
    function a(e, t) {
        if (null == e)
            return {};
        var i, n, r = function(e, t) {
            if (null == e)
                return {};
            var i, n, r = {}, a = Object.keys(e);
            for (n = 0; n < a.length; n++)
                i = a[n],
                t.indexOf(i) >= 0 || (r[i] = e[i]);
            return r
        }(e, t);
        if (Object.getOwnPropertySymbols) {
            var a = Object.getOwnPropertySymbols(e);
            for (n = 0; n < a.length; n++)
                i = a[n],
                t.indexOf(i) >= 0 || Object.prototype.propertyIsEnumerable.call(e, i) && (r[i] = e[i])
        }
        return r
    }
    function o(e, t, i) {
        if (!t.has(e))
            throw new TypeError("attempted to get private field on non-instance");
        return i
    }
    function s(e, t) {
        !function(e, t) {
            if (t.has(e))
                throw new TypeError("Cannot initialize the same private elements twice on an object")
        }(e, t),
        t.add(e)
    }
    function l(e, t) {
        return Object.entries(t).reduce(((t,n)=>{
            let[r,a] = n;
            return i(i({}, t), {}, {
                [r]: c.isPrototypeOf(a) ? new a(e.slug) : "function" == typeof a ? a.bind(e) : "object" == typeof a && !Array.isArray(a) && a ? l(e, a) : a
            })
        }
        ), {})
    }
    class c {
        constructor(e) {
            this.slug = e
        }
        static create(e) {
            return class extends c {
                constructor(t) {
                    super(t),
                    Object.assign(this, l(this, e(this)))
                }
            }
        }
    }
    var u = Object.freeze({
        __proto__: null,
        Agent: c
    });
    const d = new Map;
    function h(e, t) {
        var i, n;
        null === (i = d.get(e)) || void 0 === i || i.forEach((n = e=>e(t),
        function() {
            try {
                return n(...arguments)
            } catch (e) {
                console.log(e)
            }
        }
        ))
    }
    const g = Symbol("MODULE_INITIALIZED");
    var p = Object.freeze({
        __proto__: null,
        MODULE_INITIALIZED: g,
        emit: h,
        off: function(e, t) {
            const i = d.get(e);
            if (!i)
                return;
            const n = i.indexOf(t);
            -1 !== n && i.splice(n, 1)
        },
        on: function(e, t) {
            var i;
            d.has(e) ? null === (i = d.get(e)) || void 0 === i || i.push(t) : d.set(e, [t])
        }
    });
    let f = null;
    function m(e) {
        f = e
    }
    var _ = Object.freeze({
        __proto__: null,
        getInitConfig: function() {
            return f
        },
        get initConfig() {
            return f
        },
        setInitConfig: m
    });
    function x(e) {
        m(e),
        h(g, void 0)
    }
    var v = Object.freeze({
        __proto__: null,
        initialize: x
    });
    function b(e, t) {
        const i = !e || "object" != typeof e || Array.isArray(e) ? {} : e;
        return [t.reduce(((e,t)=>{
            if (t in e) {
                const i = e[t];
                if (null !== i && "object" == typeof i && !Array.isArray(i))
                    return i
            }
            const i = {};
            return e[t] = i,
            i
        }
        ), i), i]
    }
    const y = "tsec"
      , w = "general";
    function A(e) {
        return e ? w : f.clientId
    }
    function k(e) {
        return function(e) {
            if (!e)
                return {};
            try {
                return JSON.parse(e)
            } catch (e) {
                return {}
            }
        }((e ? sessionStorage : localStorage).getItem(y))
    }
    function E(e, t) {
        const i = e ? sessionStorage : localStorage
          , n = t(k(e));
        i.setItem(y, JSON.stringify(n))
    }
    var C = Object.freeze({
        __proto__: null,
        COMMON_STORAGE_KEY: y,
        GENERAL_ID_KEY: w,
        getValue: function(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            const i = A(!!t.isGeneral)
              , n = k(!!t.sessionOnly)
              , [r] = b(n, [this.slug.toString(), i]);
            return r[e]
        },
        hasValue: function(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            const i = A(!!t.isGeneral);
            return function(e, t) {
                let i = e;
                return t.every((e=>!(!i || "object" != typeof i || Array.isArray(i) || !(e in i) || (i = i[e],
                0))), e)
            }(k(!!t.sessionOnly), [this.slug.toString(), i, e])
        },
        removeValue: function(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            const i = A(!!t.isGeneral);
            E(!!t.sessionOnly, (t=>{
                const [n,r] = b(t, [this.slug.toString(), i]);
                return delete n[e],
                r
            }
            ))
        },
        setValue: function(e, t) {
            let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            const n = A(!!i.isGeneral);
            E(!!i.sessionOnly, (i=>{
                const [r,a] = b(i, [this.slug.toString(), n]);
                return r[e] = t,
                a
            }
            ))
        }
    });
    const D = "RSA-OAEP"
      , S = "RSA-PSS"
      , I = async(e,t)=>await window.crypto.subtle.generateKey({
        name: e,
        modulusLength: 2048,
        publicExponent: new Uint8Array([1, 0, 1]),
        hash: "SHA-256"
    }, !1, t)
      , T = async()=>await I(D, ["encrypt", "decrypt"])
      , M = async()=>await I(S, ["sign"])
      , z = async(e,t)=>await window.crypto.subtle.encrypt({
        name: D
    }, t, e)
      , F = async(e,t)=>{
        const i = (new TextEncoder).encode(t);
        return await window.crypto.subtle.sign({
            name: S,
            saltLength: 32
        }, e, i)
    }
    ;
    class B {
        constructor(e, t, i) {
            this.slug = e,
            this.dbName = t,
            this.dbVersion = i
        }
        queryObjectStore(e, t) {
            let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            const n = (window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB || window.shimIndexedDB).open("".concat(this.slug, ":").concat(this.dbName), this.dbVersion || 1);
            n.onupgradeneeded = ()=>{
                var t;
                const i = n.result;
                (null === (t = null == i ? void 0 : i.objectStoreNames) || void 0 === t ? void 0 : t.contains) && !i.objectStoreNames.contains(e) && i.createObjectStore(e, {
                    keyPath: "key"
                })
            }
            ,
            n.onsuccess = ()=>{
                const r = n.result
                  , a = r.transaction(e, (null == i ? void 0 : i.operation) || "readwrite")
                  , o = a.objectStore(e);
                t(o),
                a.oncomplete = ()=>{
                    r.close()
                }
            }
        }
        put(e, t, i) {
            return new Promise(((n,r)=>{
                this.queryObjectStore(e, (e=>{
                    const a = e.put({
                        key: t,
                        value: i
                    });
                    a.onsuccess = ()=>{
                        n(a.result)
                    }
                    ,
                    a.onerror = e=>{
                        r("Failed adding item to objectStore, err: " + e)
                    }
                }
                ))
            }
            ))
        }
        get(e, t) {
            return new Promise(((i,n)=>{
                this.queryObjectStore(e, (e=>{
                    const r = e.get(t);
                    r.onsuccess = ()=>{
                        var e;
                        r.result ? i(null === (e = r.result) || void 0 === e ? void 0 : e.value) : i(void 0)
                    }
                    ,
                    r.onerror = e=>{
                        n("Failed adding item to objectStore, err: " + e)
                    }
                }
                ))
            }
            ))
        }
        getAll(e, t) {
            return new Promise(((i,n)=>{
                this.queryObjectStore(e, (e=>{
                    const r = e.getAll(null, t);
                    r.onsuccess = ()=>{
                        if (r.result) {
                            const e = r.result;
                            (null == e ? void 0 : e.length) ? i(e.map((e=>null == e ? void 0 : e.value))) : i(e)
                        } else
                            i([])
                    }
                    ,
                    r.onerror = e=>{
                        n("Failed getting items, err: " + e)
                    }
                }
                ))
            }
            ))
        }
        delete(e, t) {
            return new Promise(((i,n)=>{
                this.queryObjectStore(e, (e=>{
                    const r = e.delete(t);
                    r.onsuccess = ()=>{
                        i()
                    }
                    ,
                    r.onerror = e=>{
                        n("Failed deleting key: '".concat(t, "' from objectStore, err: ") + e)
                    }
                }
                ))
            }
            ))
        }
        clear(e) {
            return new Promise(((t,i)=>{
                this.queryObjectStore(e, (e=>{
                    const n = e.clear();
                    n.onsuccess = ()=>{
                        t()
                    }
                    ,
                    n.onerror = e=>{
                        i("Failed clearing objectStore, err: " + e)
                    }
                }
                ))
            }
            ))
        }
    }
    const R = "platform";
    class O {
        constructor(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "sign"
              , i = arguments.length > 2 ? arguments[2] : void 0;
            var n, r, a, o;
            this.agent = e,
            this.keysType = t,
            this.options = i;
            const s = !(null === (n = this.options) || void 0 === n ? void 0 : n.productScope);
            this.keysDatabaseName = s || !(null === (r = this.options) || void 0 === r ? void 0 : r.indexedDBName) ? "ts_crypto_binding" : this.options.indexedDBName,
            this.dbVersion = s ? 1 : (null === (a = this.options) || void 0 === a ? void 0 : a.dbVersion) || 1,
            this.keysStoreName = s || !(null === (o = this.options) || void 0 === o ? void 0 : o.keysStoreName) ? "identifiers_store" : this.options.keysStoreName,
            this.indexedDBClient = new B(s ? R : e.slug,this.keysDatabaseName,this.dbVersion),
            this.indexedDBClientFallback = new B((s ? R : e.slug) + ":".concat(f.clientId),this.keysDatabaseName,this.dbVersion)
        }
        getKeysRecordKey() {
            return "".concat(this.keysType, "_keys")
        }
        arrayBufferToBase64(e) {
            return window.btoa(String.fromCharCode(...new Uint8Array(e)))
        }
        async getPKRepresentations(e) {
            const t = await crypto.subtle.exportKey("spki", e);
            return {
                arrayBufferKey: t,
                base64Key: this.arrayBufferToBase64(t)
            }
        }
        async generateKeyPair() {
            return "sign" == this.keysType ? await M() : await T()
        }
        async calcKeyIdentifier(e) {
            const t = await crypto.subtle.digest("SHA-256", e);
            return Array.from(new Uint8Array(t)).map((e=>e.toString(16).padStart(2, "0"))).join("")
        }
        async extractKeysData() {
            const e = this.getKeysRecordKey();
            let t = await this.indexedDBClient.get(this.keysStoreName, e);
            if (!t) {
                if (t = await this.indexedDBClientFallback.get(this.keysStoreName, e),
                !t) {
                    const e = await this.generateKeyPair()
                      , {arrayBufferKey: n, base64Key: r} = await this.getPKRepresentations(e.publicKey);
                    this.publicKeyBase64 = r,
                    this.keyIdentifier = await this.calcKeyIdentifier(n),
                    t = i(i({}, e), {}, {
                        keyIdentifier: this.keyIdentifier
                    })
                }
                await this.indexedDBClient.put(this.keysStoreName, e, t)
            }
            if (!this.publicKeyBase64) {
                const {base64Key: e} = await this.getPKRepresentations(t.publicKey);
                this.publicKeyBase64 = e,
                this.keyIdentifier = t.keyIdentifier
            }
            return t
        }
        async getPublicData() {
            return this.publicKeyBase64 && this.keyIdentifier || await this.extractKeysData(),
            {
                publicKey: this.publicKeyBase64,
                keyIdentifier: this.keyIdentifier
            }
        }
        async sign(e) {
            if ("sign" == this.keysType) {
                const {privateKey: t} = await this.extractKeysData()
                  , i = await F(t, e);
                return this.arrayBufferToBase64(i)
            }
            throw new Error("keysType must be 'sign' in order to use sign keys")
        }
        async encrypt(e) {
            if ("encrypt" == this.keysType) {
                const {privateKey: t} = await this.extractKeysData();
                return await z(e, t)
            }
            throw new Error("keysType must be 'encrypt' in order to use encryption keys")
        }
        async clearKeys() {
            const e = this.getKeysRecordKey();
            await this.indexedDBClient.delete(this.keysStoreName, e)
        }
    }
    var P = Object.freeze({
        __proto__: null,
        createCryptoBinding: function() {
            return new O(this,arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "sign",arguments.length > 1 ? arguments[1] : void 0)
        },
        decryptAssymetric: async(e,t)=>new Uint8Array(await window.crypto.subtle.decrypt({
            name: D
        }, t, e)),
        encryptAssymetric: z,
        generateRSAKeyPair: T,
        generateRSASignKeyPair: M,
        signAssymetric: F,
        verifyAssymetric: async(e,t,i)=>{
            const n = (new TextEncoder).encode(t);
            return await window.crypto.subtle.verify(S, e, i, n)
        }
    })
      , N = Object.freeze({
        __proto__: null
    });
    const L = c.create((e=>{
        class t extends Error {
            constructor(t, i) {
                super("".concat(e.slug, "-").concat(t, " ").concat(i))
            }
        }
        return {
            TsError: t,
            TsInternalError: class extends t {
                constructor(e) {
                    super(e, "Internal error")
                }
            }
        }
    }
    ));
    var j = c.create((()=>i({
        exceptions: L
    }, u)));
    class U {
        constructor(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
            this.agent = e,
            this.middlewares = t,
            this.logs = []
        }
        info(e, t) {
            this.pushLog(3, e, t)
        }
        warn(e, t) {
            this.pushLog(4, e, t)
        }
        error(e, t) {
            this.pushLog(5, e, t)
        }
        pushLog(e, t) {
            let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            this.logs.push({
                timestamp: Date.now(),
                module: this.agent.slug,
                severity: e,
                fields: i,
                message: t
            });
            const n = this.middlewares.map((e=>e(this)));
            Promise.all(n).catch((()=>{}
            ))
        }
    }
    var q = Object.freeze({
        __proto__: null,
        consoleMiddleware: function(e) {
            const t = e.logs[e.logs.length - 1];
            console.log("".concat(t.severity, " ").concat(t.message), t.fields)
        },
        createSdkLogger: function() {
            return new U(this,arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [])
        }
    });
    function K(e, t) {
        if (!(null == e ? void 0 : e.trim()))
            return "";
        if (function(e) {
            try {
                return new URL(e),
                !0
            } catch (e) {
                return !1
            }
        }(e))
            return e;
        const i = "http://mock.com"
          , n = new URL(i);
        n.search = (null == t ? void 0 : t.toString()) || "",
        n.pathname = e;
        return n.href.replace(i, "")
    }
    const H = {
        "Content-Type": "application/json",
        "X-TS-client-time": (new Date).toUTCString(),
        "X-TS-ua": navigator.userAgent
    };
    function V(e, t, n) {
        var r;
        const a = (o = t || {},
        encodeURI(JSON.stringify(o)).split(/%..|./).length - 1);
        var o;
        return {
            method: e,
            headers: i(i(i({}, {
                "X-TS-body-size": String(a)
            }), H), n || {}),
            body: null !== (r = t && JSON.stringify(t || {})) && void 0 !== r ? r : void 0
        }
    }
    function G(e, t, i, n, r) {
        const a = K(e, n)
          , o = V(t, i, r);
        return fetch(a, o)
    }
    async function J(e, t, i, n, r) {
        let a;
        if (a = await G(e, t, i, n, r),
        !a.ok)
            throw new Error("Request failed");
        return a
    }
    var W = Object.freeze({
        __proto__: null,
        httpDelete: async function(e, t) {
            const n = await J(e, "DELETE", void 0, void 0, t);
            return i(i({
                data: await n.json()
            }, n), {}, {
                headers: n.headers
            })
        },
        httpGet: async function(e, t, n) {
            const r = await J(e, "GET", void 0, t, n);
            return i(i({
                data: await r.json()
            }, r), {}, {
                headers: r.headers
            })
        },
        httpPost: async function(e, t, n, r) {
            const a = await J(e, "POST", t, n, r);
            return i(i({
                data: await a.json()
            }, a), {}, {
                headers: a.headers
            })
        },
        httpPut: async function(e, t, n, r) {
            const a = await J(e, "PUT", t, n, r);
            return i(i({
                data: await a.json()
            }, a), {}, {
                headers: a.headers
            })
        },
        init: V
    })
      , Z = c.create((()=>({
        events: p,
        moduleMetadata: _,
        mainEntry: v,
        utils: j,
        storage: C,
        crypto: P,
        indexedDB: N,
        logger: q,
        http: W
    })))
      , Q = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
    function $(e) {
        return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
    }
    var Y = {}
      , X = {};
    function ee(e) {
        let t = e.length;
        for (; --t >= 0; )
            e[t] = 0
    }
    const te = 256
      , ie = 286
      , ne = 30
      , re = 15
      , ae = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0])
      , oe = new Uint8Array([0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13])
      , se = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7])
      , le = new Uint8Array([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15])
      , ce = new Array(576);
    ee(ce);
    const ue = new Array(60);
    ee(ue);
    const de = new Array(512);
    ee(de);
    const he = new Array(256);
    ee(he);
    const ge = new Array(29);
    ee(ge);
    const pe = new Array(ne);
    function fe(e, t, i, n, r) {
        this.static_tree = e,
        this.extra_bits = t,
        this.extra_base = i,
        this.elems = n,
        this.max_length = r,
        this.has_stree = e && e.length
    }
    let me, _e, xe;
    function ve(e, t) {
        this.dyn_tree = e,
        this.max_code = 0,
        this.stat_desc = t
    }
    ee(pe);
    const be = e=>e < 256 ? de[e] : de[256 + (e >>> 7)]
      , ye = (e,t)=>{
        e.pending_buf[e.pending++] = 255 & t,
        e.pending_buf[e.pending++] = t >>> 8 & 255
    }
      , we = (e,t,i)=>{
        e.bi_valid > 16 - i ? (e.bi_buf |= t << e.bi_valid & 65535,
        ye(e, e.bi_buf),
        e.bi_buf = t >> 16 - e.bi_valid,
        e.bi_valid += i - 16) : (e.bi_buf |= t << e.bi_valid & 65535,
        e.bi_valid += i)
    }
      , Ae = (e,t,i)=>{
        we(e, i[2 * t], i[2 * t + 1])
    }
      , ke = (e,t)=>{
        let i = 0;
        do {
            i |= 1 & e,
            e >>>= 1,
            i <<= 1
        } while (--t > 0);
        return i >>> 1
    }
      , Ee = (e,t,i)=>{
        const n = new Array(16);
        let r, a, o = 0;
        for (r = 1; r <= re; r++)
            n[r] = o = o + i[r - 1] << 1;
        for (a = 0; a <= t; a++) {
            let t = e[2 * a + 1];
            0 !== t && (e[2 * a] = ke(n[t]++, t))
        }
    }
      , Ce = e=>{
        let t;
        for (t = 0; t < ie; t++)
            e.dyn_ltree[2 * t] = 0;
        for (t = 0; t < ne; t++)
            e.dyn_dtree[2 * t] = 0;
        for (t = 0; t < 19; t++)
            e.bl_tree[2 * t] = 0;
        e.dyn_ltree[512] = 1,
        e.opt_len = e.static_len = 0,
        e.last_lit = e.matches = 0
    }
      , De = e=>{
        e.bi_valid > 8 ? ye(e, e.bi_buf) : e.bi_valid > 0 && (e.pending_buf[e.pending++] = e.bi_buf),
        e.bi_buf = 0,
        e.bi_valid = 0
    }
      , Se = (e,t,i,n)=>{
        const r = 2 * t
          , a = 2 * i;
        return e[r] < e[a] || e[r] === e[a] && n[t] <= n[i]
    }
      , Ie = (e,t,i)=>{
        const n = e.heap[i];
        let r = i << 1;
        for (; r <= e.heap_len && (r < e.heap_len && Se(t, e.heap[r + 1], e.heap[r], e.depth) && r++,
        !Se(t, n, e.heap[r], e.depth)); )
            e.heap[i] = e.heap[r],
            i = r,
            r <<= 1;
        e.heap[i] = n
    }
      , Te = (e,t,i)=>{
        let n, r, a, o, s = 0;
        if (0 !== e.last_lit)
            do {
                n = e.pending_buf[e.d_buf + 2 * s] << 8 | e.pending_buf[e.d_buf + 2 * s + 1],
                r = e.pending_buf[e.l_buf + s],
                s++,
                0 === n ? Ae(e, r, t) : (a = he[r],
                Ae(e, a + te + 1, t),
                o = ae[a],
                0 !== o && (r -= ge[a],
                we(e, r, o)),
                n--,
                a = be(n),
                Ae(e, a, i),
                o = oe[a],
                0 !== o && (n -= pe[a],
                we(e, n, o)))
            } while (s < e.last_lit);
        Ae(e, 256, t)
    }
      , Me = (e,t)=>{
        const i = t.dyn_tree
          , n = t.stat_desc.static_tree
          , r = t.stat_desc.has_stree
          , a = t.stat_desc.elems;
        let o, s, l, c = -1;
        for (e.heap_len = 0,
        e.heap_max = 573,
        o = 0; o < a; o++)
            0 !== i[2 * o] ? (e.heap[++e.heap_len] = c = o,
            e.depth[o] = 0) : i[2 * o + 1] = 0;
        for (; e.heap_len < 2; )
            l = e.heap[++e.heap_len] = c < 2 ? ++c : 0,
            i[2 * l] = 1,
            e.depth[l] = 0,
            e.opt_len--,
            r && (e.static_len -= n[2 * l + 1]);
        for (t.max_code = c,
        o = e.heap_len >> 1; o >= 1; o--)
            Ie(e, i, o);
        l = a;
        do {
            o = e.heap[1],
            e.heap[1] = e.heap[e.heap_len--],
            Ie(e, i, 1),
            s = e.heap[1],
            e.heap[--e.heap_max] = o,
            e.heap[--e.heap_max] = s,
            i[2 * l] = i[2 * o] + i[2 * s],
            e.depth[l] = (e.depth[o] >= e.depth[s] ? e.depth[o] : e.depth[s]) + 1,
            i[2 * o + 1] = i[2 * s + 1] = l,
            e.heap[1] = l++,
            Ie(e, i, 1)
        } while (e.heap_len >= 2);
        e.heap[--e.heap_max] = e.heap[1],
        ((e,t)=>{
            const i = t.dyn_tree
              , n = t.max_code
              , r = t.stat_desc.static_tree
              , a = t.stat_desc.has_stree
              , o = t.stat_desc.extra_bits
              , s = t.stat_desc.extra_base
              , l = t.stat_desc.max_length;
            let c, u, d, h, g, p, f = 0;
            for (h = 0; h <= re; h++)
                e.bl_count[h] = 0;
            for (i[2 * e.heap[e.heap_max] + 1] = 0,
            c = e.heap_max + 1; c < 573; c++)
                u = e.heap[c],
                h = i[2 * i[2 * u + 1] + 1] + 1,
                h > l && (h = l,
                f++),
                i[2 * u + 1] = h,
                u > n || (e.bl_count[h]++,
                g = 0,
                u >= s && (g = o[u - s]),
                p = i[2 * u],
                e.opt_len += p * (h + g),
                a && (e.static_len += p * (r[2 * u + 1] + g)));
            if (0 !== f) {
                do {
                    for (h = l - 1; 0 === e.bl_count[h]; )
                        h--;
                    e.bl_count[h]--,
                    e.bl_count[h + 1] += 2,
                    e.bl_count[l]--,
                    f -= 2
                } while (f > 0);
                for (h = l; 0 !== h; h--)
                    for (u = e.bl_count[h]; 0 !== u; )
                        d = e.heap[--c],
                        d > n || (i[2 * d + 1] !== h && (e.opt_len += (h - i[2 * d + 1]) * i[2 * d],
                        i[2 * d + 1] = h),
                        u--)
            }
        }
        )(e, t),
        Ee(i, c, e.bl_count)
    }
      , ze = (e,t,i)=>{
        let n, r, a = -1, o = t[1], s = 0, l = 7, c = 4;
        for (0 === o && (l = 138,
        c = 3),
        t[2 * (i + 1) + 1] = 65535,
        n = 0; n <= i; n++)
            r = o,
            o = t[2 * (n + 1) + 1],
            ++s < l && r === o || (s < c ? e.bl_tree[2 * r] += s : 0 !== r ? (r !== a && e.bl_tree[2 * r]++,
            e.bl_tree[32]++) : s <= 10 ? e.bl_tree[34]++ : e.bl_tree[36]++,
            s = 0,
            a = r,
            0 === o ? (l = 138,
            c = 3) : r === o ? (l = 6,
            c = 3) : (l = 7,
            c = 4))
    }
      , Fe = (e,t,i)=>{
        let n, r, a = -1, o = t[1], s = 0, l = 7, c = 4;
        for (0 === o && (l = 138,
        c = 3),
        n = 0; n <= i; n++)
            if (r = o,
            o = t[2 * (n + 1) + 1],
            !(++s < l && r === o)) {
                if (s < c)
                    do {
                        Ae(e, r, e.bl_tree)
                    } while (0 != --s);
                else
                    0 !== r ? (r !== a && (Ae(e, r, e.bl_tree),
                    s--),
                    Ae(e, 16, e.bl_tree),
                    we(e, s - 3, 2)) : s <= 10 ? (Ae(e, 17, e.bl_tree),
                    we(e, s - 3, 3)) : (Ae(e, 18, e.bl_tree),
                    we(e, s - 11, 7));
                s = 0,
                a = r,
                0 === o ? (l = 138,
                c = 3) : r === o ? (l = 6,
                c = 3) : (l = 7,
                c = 4)
            }
    }
    ;
    let Be = !1;
    const Re = (e,t,i,n)=>{
        we(e, 0 + (n ? 1 : 0), 3),
        ((e,t,i,n)=>{
            De(e),
            n && (ye(e, i),
            ye(e, ~i)),
            e.pending_buf.set(e.window.subarray(t, t + i), e.pending),
            e.pending += i
        }
        )(e, t, i, !0)
    }
    ;
    X._tr_init = e=>{
        Be || ((()=>{
            let e, t, i, n, r;
            const a = new Array(16);
            for (i = 0,
            n = 0; n < 28; n++)
                for (ge[n] = i,
                e = 0; e < 1 << ae[n]; e++)
                    he[i++] = n;
            for (he[i - 1] = n,
            r = 0,
            n = 0; n < 16; n++)
                for (pe[n] = r,
                e = 0; e < 1 << oe[n]; e++)
                    de[r++] = n;
            for (r >>= 7; n < ne; n++)
                for (pe[n] = r << 7,
                e = 0; e < 1 << oe[n] - 7; e++)
                    de[256 + r++] = n;
            for (t = 0; t <= re; t++)
                a[t] = 0;
            for (e = 0; e <= 143; )
                ce[2 * e + 1] = 8,
                e++,
                a[8]++;
            for (; e <= 255; )
                ce[2 * e + 1] = 9,
                e++,
                a[9]++;
            for (; e <= 279; )
                ce[2 * e + 1] = 7,
                e++,
                a[7]++;
            for (; e <= 287; )
                ce[2 * e + 1] = 8,
                e++,
                a[8]++;
            for (Ee(ce, 287, a),
            e = 0; e < ne; e++)
                ue[2 * e + 1] = 5,
                ue[2 * e] = ke(e, 5);
            me = new fe(ce,ae,257,ie,re),
            _e = new fe(ue,oe,0,ne,re),
            xe = new fe(new Array(0),se,0,19,7)
        }
        )(),
        Be = !0),
        e.l_desc = new ve(e.dyn_ltree,me),
        e.d_desc = new ve(e.dyn_dtree,_e),
        e.bl_desc = new ve(e.bl_tree,xe),
        e.bi_buf = 0,
        e.bi_valid = 0,
        Ce(e)
    }
    ,
    X._tr_stored_block = Re,
    X._tr_flush_block = (e,t,i,n)=>{
        let r, a, o = 0;
        e.level > 0 ? (2 === e.strm.data_type && (e.strm.data_type = (e=>{
            let t, i = 4093624447;
            for (t = 0; t <= 31; t++,
            i >>>= 1)
                if (1 & i && 0 !== e.dyn_ltree[2 * t])
                    return 0;
            if (0 !== e.dyn_ltree[18] || 0 !== e.dyn_ltree[20] || 0 !== e.dyn_ltree[26])
                return 1;
            for (t = 32; t < te; t++)
                if (0 !== e.dyn_ltree[2 * t])
                    return 1;
            return 0
        }
        )(e)),
        Me(e, e.l_desc),
        Me(e, e.d_desc),
        o = (e=>{
            let t;
            for (ze(e, e.dyn_ltree, e.l_desc.max_code),
            ze(e, e.dyn_dtree, e.d_desc.max_code),
            Me(e, e.bl_desc),
            t = 18; t >= 3 && 0 === e.bl_tree[2 * le[t] + 1]; t--)
                ;
            return e.opt_len += 3 * (t + 1) + 5 + 5 + 4,
            t
        }
        )(e),
        r = e.opt_len + 3 + 7 >>> 3,
        a = e.static_len + 3 + 7 >>> 3,
        a <= r && (r = a)) : r = a = i + 5,
        i + 4 <= r && -1 !== t ? Re(e, t, i, n) : 4 === e.strategy || a === r ? (we(e, 2 + (n ? 1 : 0), 3),
        Te(e, ce, ue)) : (we(e, 4 + (n ? 1 : 0), 3),
        ((e,t,i,n)=>{
            let r;
            for (we(e, t - 257, 5),
            we(e, i - 1, 5),
            we(e, n - 4, 4),
            r = 0; r < n; r++)
                we(e, e.bl_tree[2 * le[r] + 1], 3);
            Fe(e, e.dyn_ltree, t - 1),
            Fe(e, e.dyn_dtree, i - 1)
        }
        )(e, e.l_desc.max_code + 1, e.d_desc.max_code + 1, o + 1),
        Te(e, e.dyn_ltree, e.dyn_dtree)),
        Ce(e),
        n && De(e)
    }
    ,
    X._tr_tally = (e,t,i)=>(e.pending_buf[e.d_buf + 2 * e.last_lit] = t >>> 8 & 255,
    e.pending_buf[e.d_buf + 2 * e.last_lit + 1] = 255 & t,
    e.pending_buf[e.l_buf + e.last_lit] = 255 & i,
    e.last_lit++,
    0 === t ? e.dyn_ltree[2 * i]++ : (e.matches++,
    t--,
    e.dyn_ltree[2 * (he[i] + te + 1)]++,
    e.dyn_dtree[2 * be(t)]++),
    e.last_lit === e.lit_bufsize - 1),
    X._tr_align = e=>{
        we(e, 2, 3),
        Ae(e, 256, ce),
        (e=>{
            16 === e.bi_valid ? (ye(e, e.bi_buf),
            e.bi_buf = 0,
            e.bi_valid = 0) : e.bi_valid >= 8 && (e.pending_buf[e.pending++] = 255 & e.bi_buf,
            e.bi_buf >>= 8,
            e.bi_valid -= 8)
        }
        )(e)
    }
    ;
    var Oe = (e,t,i,n)=>{
        let r = 65535 & e | 0
          , a = e >>> 16 & 65535 | 0
          , o = 0;
        for (; 0 !== i; ) {
            o = i > 2e3 ? 2e3 : i,
            i -= o;
            do {
                r = r + t[n++] | 0,
                a = a + r | 0
            } while (--o);
            r %= 65521,
            a %= 65521
        }
        return r | a << 16 | 0
    }
    ;
    const Pe = new Uint32Array((()=>{
        let e, t = [];
        for (var i = 0; i < 256; i++) {
            e = i;
            for (var n = 0; n < 8; n++)
                e = 1 & e ? 3988292384 ^ e >>> 1 : e >>> 1;
            t[i] = e
        }
        return t
    }
    )());
    var Ne = (e,t,i,n)=>{
        const r = Pe
          , a = n + i;
        e ^= -1;
        for (let i = n; i < a; i++)
            e = e >>> 8 ^ r[255 & (e ^ t[i])];
        return -1 ^ e
    }
      , Le = {
        2: "need dictionary",
        1: "stream end",
        0: "",
        "-1": "file error",
        "-2": "stream error",
        "-3": "data error",
        "-4": "insufficient memory",
        "-5": "buffer error",
        "-6": "incompatible version"
    }
      , je = {
        Z_NO_FLUSH: 0,
        Z_PARTIAL_FLUSH: 1,
        Z_SYNC_FLUSH: 2,
        Z_FULL_FLUSH: 3,
        Z_FINISH: 4,
        Z_BLOCK: 5,
        Z_TREES: 6,
        Z_OK: 0,
        Z_STREAM_END: 1,
        Z_NEED_DICT: 2,
        Z_ERRNO: -1,
        Z_STREAM_ERROR: -2,
        Z_DATA_ERROR: -3,
        Z_MEM_ERROR: -4,
        Z_BUF_ERROR: -5,
        Z_NO_COMPRESSION: 0,
        Z_BEST_SPEED: 1,
        Z_BEST_COMPRESSION: 9,
        Z_DEFAULT_COMPRESSION: -1,
        Z_FILTERED: 1,
        Z_HUFFMAN_ONLY: 2,
        Z_RLE: 3,
        Z_FIXED: 4,
        Z_DEFAULT_STRATEGY: 0,
        Z_BINARY: 0,
        Z_TEXT: 1,
        Z_UNKNOWN: 2,
        Z_DEFLATED: 8
    };
    const {_tr_init: Ue, _tr_stored_block: qe, _tr_flush_block: Ke, _tr_tally: He, _tr_align: Ve} = X
      , Ge = Oe
      , Je = Ne
      , We = Le
      , {Z_NO_FLUSH: Ze, Z_PARTIAL_FLUSH: Qe, Z_FULL_FLUSH: $e, Z_FINISH: Ye, Z_BLOCK: Xe, Z_OK: et, Z_STREAM_END: tt, Z_STREAM_ERROR: it, Z_DATA_ERROR: nt, Z_BUF_ERROR: rt, Z_DEFAULT_COMPRESSION: at, Z_FILTERED: ot, Z_HUFFMAN_ONLY: st, Z_RLE: lt, Z_FIXED: ct, Z_DEFAULT_STRATEGY: ut, Z_UNKNOWN: dt, Z_DEFLATED: ht} = je
      , gt = 258
      , pt = 262
      , ft = 103
      , mt = 113
      , _t = 666
      , xt = (e,t)=>(e.msg = We[t],
    t)
      , vt = e=>(e << 1) - (e > 4 ? 9 : 0)
      , bt = e=>{
        let t = e.length;
        for (; --t >= 0; )
            e[t] = 0
    }
    ;
    let yt = (e,t,i)=>(t << e.hash_shift ^ i) & e.hash_mask;
    const wt = e=>{
        const t = e.state;
        let i = t.pending;
        i > e.avail_out && (i = e.avail_out),
        0 !== i && (e.output.set(t.pending_buf.subarray(t.pending_out, t.pending_out + i), e.next_out),
        e.next_out += i,
        t.pending_out += i,
        e.total_out += i,
        e.avail_out -= i,
        t.pending -= i,
        0 === t.pending && (t.pending_out = 0))
    }
      , At = (e,t)=>{
        Ke(e, e.block_start >= 0 ? e.block_start : -1, e.strstart - e.block_start, t),
        e.block_start = e.strstart,
        wt(e.strm)
    }
      , kt = (e,t)=>{
        e.pending_buf[e.pending++] = t
    }
      , Et = (e,t)=>{
        e.pending_buf[e.pending++] = t >>> 8 & 255,
        e.pending_buf[e.pending++] = 255 & t
    }
      , Ct = (e,t,i,n)=>{
        let r = e.avail_in;
        return r > n && (r = n),
        0 === r ? 0 : (e.avail_in -= r,
        t.set(e.input.subarray(e.next_in, e.next_in + r), i),
        1 === e.state.wrap ? e.adler = Ge(e.adler, t, r, i) : 2 === e.state.wrap && (e.adler = Je(e.adler, t, r, i)),
        e.next_in += r,
        e.total_in += r,
        r)
    }
      , Dt = (e,t)=>{
        let i, n, r = e.max_chain_length, a = e.strstart, o = e.prev_length, s = e.nice_match;
        const l = e.strstart > e.w_size - pt ? e.strstart - (e.w_size - pt) : 0
          , c = e.window
          , u = e.w_mask
          , d = e.prev
          , h = e.strstart + gt;
        let g = c[a + o - 1]
          , p = c[a + o];
        e.prev_length >= e.good_match && (r >>= 2),
        s > e.lookahead && (s = e.lookahead);
        do {
            if (i = t,
            c[i + o] === p && c[i + o - 1] === g && c[i] === c[a] && c[++i] === c[a + 1]) {
                a += 2,
                i++;
                do {} while (c[++a] === c[++i] && c[++a] === c[++i] && c[++a] === c[++i] && c[++a] === c[++i] && c[++a] === c[++i] && c[++a] === c[++i] && c[++a] === c[++i] && c[++a] === c[++i] && a < h);
                if (n = gt - (h - a),
                a = h - gt,
                n > o) {
                    if (e.match_start = t,
                    o = n,
                    n >= s)
                        break;
                    g = c[a + o - 1],
                    p = c[a + o]
                }
            }
        } while ((t = d[t & u]) > l && 0 != --r);
        return o <= e.lookahead ? o : e.lookahead
    }
      , St = e=>{
        const t = e.w_size;
        let i, n, r, a, o;
        do {
            if (a = e.window_size - e.lookahead - e.strstart,
            e.strstart >= t + (t - pt)) {
                e.window.set(e.window.subarray(t, t + t), 0),
                e.match_start -= t,
                e.strstart -= t,
                e.block_start -= t,
                n = e.hash_size,
                i = n;
                do {
                    r = e.head[--i],
                    e.head[i] = r >= t ? r - t : 0
                } while (--n);
                n = t,
                i = n;
                do {
                    r = e.prev[--i],
                    e.prev[i] = r >= t ? r - t : 0
                } while (--n);
                a += t
            }
            if (0 === e.strm.avail_in)
                break;
            if (n = Ct(e.strm, e.window, e.strstart + e.lookahead, a),
            e.lookahead += n,
            e.lookahead + e.insert >= 3)
                for (o = e.strstart - e.insert,
                e.ins_h = e.window[o],
                e.ins_h = yt(e, e.ins_h, e.window[o + 1]); e.insert && (e.ins_h = yt(e, e.ins_h, e.window[o + 3 - 1]),
                e.prev[o & e.w_mask] = e.head[e.ins_h],
                e.head[e.ins_h] = o,
                o++,
                e.insert--,
                !(e.lookahead + e.insert < 3)); )
                    ;
        } while (e.lookahead < pt && 0 !== e.strm.avail_in)
    }
      , It = (e,t)=>{
        let i, n;
        for (; ; ) {
            if (e.lookahead < pt) {
                if (St(e),
                e.lookahead < pt && t === Ze)
                    return 1;
                if (0 === e.lookahead)
                    break
            }
            if (i = 0,
            e.lookahead >= 3 && (e.ins_h = yt(e, e.ins_h, e.window[e.strstart + 3 - 1]),
            i = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h],
            e.head[e.ins_h] = e.strstart),
            0 !== i && e.strstart - i <= e.w_size - pt && (e.match_length = Dt(e, i)),
            e.match_length >= 3)
                if (n = He(e, e.strstart - e.match_start, e.match_length - 3),
                e.lookahead -= e.match_length,
                e.match_length <= e.max_lazy_match && e.lookahead >= 3) {
                    e.match_length--;
                    do {
                        e.strstart++,
                        e.ins_h = yt(e, e.ins_h, e.window[e.strstart + 3 - 1]),
                        i = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h],
                        e.head[e.ins_h] = e.strstart
                    } while (0 != --e.match_length);
                    e.strstart++
                } else
                    e.strstart += e.match_length,
                    e.match_length = 0,
                    e.ins_h = e.window[e.strstart],
                    e.ins_h = yt(e, e.ins_h, e.window[e.strstart + 1]);
            else
                n = He(e, 0, e.window[e.strstart]),
                e.lookahead--,
                e.strstart++;
            if (n && (At(e, !1),
            0 === e.strm.avail_out))
                return 1
        }
        return e.insert = e.strstart < 2 ? e.strstart : 2,
        t === Ye ? (At(e, !0),
        0 === e.strm.avail_out ? 3 : 4) : e.last_lit && (At(e, !1),
        0 === e.strm.avail_out) ? 1 : 2
    }
      , Tt = (e,t)=>{
        let i, n, r;
        for (; ; ) {
            if (e.lookahead < pt) {
                if (St(e),
                e.lookahead < pt && t === Ze)
                    return 1;
                if (0 === e.lookahead)
                    break
            }
            if (i = 0,
            e.lookahead >= 3 && (e.ins_h = yt(e, e.ins_h, e.window[e.strstart + 3 - 1]),
            i = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h],
            e.head[e.ins_h] = e.strstart),
            e.prev_length = e.match_length,
            e.prev_match = e.match_start,
            e.match_length = 2,
            0 !== i && e.prev_length < e.max_lazy_match && e.strstart - i <= e.w_size - pt && (e.match_length = Dt(e, i),
            e.match_length <= 5 && (e.strategy === ot || 3 === e.match_length && e.strstart - e.match_start > 4096) && (e.match_length = 2)),
            e.prev_length >= 3 && e.match_length <= e.prev_length) {
                r = e.strstart + e.lookahead - 3,
                n = He(e, e.strstart - 1 - e.prev_match, e.prev_length - 3),
                e.lookahead -= e.prev_length - 1,
                e.prev_length -= 2;
                do {
                    ++e.strstart <= r && (e.ins_h = yt(e, e.ins_h, e.window[e.strstart + 3 - 1]),
                    i = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h],
                    e.head[e.ins_h] = e.strstart)
                } while (0 != --e.prev_length);
                if (e.match_available = 0,
                e.match_length = 2,
                e.strstart++,
                n && (At(e, !1),
                0 === e.strm.avail_out))
                    return 1
            } else if (e.match_available) {
                if (n = He(e, 0, e.window[e.strstart - 1]),
                n && At(e, !1),
                e.strstart++,
                e.lookahead--,
                0 === e.strm.avail_out)
                    return 1
            } else
                e.match_available = 1,
                e.strstart++,
                e.lookahead--
        }
        return e.match_available && (n = He(e, 0, e.window[e.strstart - 1]),
        e.match_available = 0),
        e.insert = e.strstart < 2 ? e.strstart : 2,
        t === Ye ? (At(e, !0),
        0 === e.strm.avail_out ? 3 : 4) : e.last_lit && (At(e, !1),
        0 === e.strm.avail_out) ? 1 : 2
    }
    ;
    function Mt(e, t, i, n, r) {
        this.good_length = e,
        this.max_lazy = t,
        this.nice_length = i,
        this.max_chain = n,
        this.func = r
    }
    const zt = [new Mt(0,0,0,0,((e,t)=>{
        let i = 65535;
        for (i > e.pending_buf_size - 5 && (i = e.pending_buf_size - 5); ; ) {
            if (e.lookahead <= 1) {
                if (St(e),
                0 === e.lookahead && t === Ze)
                    return 1;
                if (0 === e.lookahead)
                    break
            }
            e.strstart += e.lookahead,
            e.lookahead = 0;
            const n = e.block_start + i;
            if ((0 === e.strstart || e.strstart >= n) && (e.lookahead = e.strstart - n,
            e.strstart = n,
            At(e, !1),
            0 === e.strm.avail_out))
                return 1;
            if (e.strstart - e.block_start >= e.w_size - pt && (At(e, !1),
            0 === e.strm.avail_out))
                return 1
        }
        return e.insert = 0,
        t === Ye ? (At(e, !0),
        0 === e.strm.avail_out ? 3 : 4) : (e.strstart > e.block_start && (At(e, !1),
        e.strm.avail_out),
        1)
    }
    )), new Mt(4,4,8,4,It), new Mt(4,5,16,8,It), new Mt(4,6,32,32,It), new Mt(4,4,16,16,Tt), new Mt(8,16,32,32,Tt), new Mt(8,16,128,128,Tt), new Mt(8,32,128,256,Tt), new Mt(32,128,258,1024,Tt), new Mt(32,258,258,4096,Tt)];
    function Ft() {
        this.strm = null,
        this.status = 0,
        this.pending_buf = null,
        this.pending_buf_size = 0,
        this.pending_out = 0,
        this.pending = 0,
        this.wrap = 0,
        this.gzhead = null,
        this.gzindex = 0,
        this.method = ht,
        this.last_flush = -1,
        this.w_size = 0,
        this.w_bits = 0,
        this.w_mask = 0,
        this.window = null,
        this.window_size = 0,
        this.prev = null,
        this.head = null,
        this.ins_h = 0,
        this.hash_size = 0,
        this.hash_bits = 0,
        this.hash_mask = 0,
        this.hash_shift = 0,
        this.block_start = 0,
        this.match_length = 0,
        this.prev_match = 0,
        this.match_available = 0,
        this.strstart = 0,
        this.match_start = 0,
        this.lookahead = 0,
        this.prev_length = 0,
        this.max_chain_length = 0,
        this.max_lazy_match = 0,
        this.level = 0,
        this.strategy = 0,
        this.good_match = 0,
        this.nice_match = 0,
        this.dyn_ltree = new Uint16Array(1146),
        this.dyn_dtree = new Uint16Array(122),
        this.bl_tree = new Uint16Array(78),
        bt(this.dyn_ltree),
        bt(this.dyn_dtree),
        bt(this.bl_tree),
        this.l_desc = null,
        this.d_desc = null,
        this.bl_desc = null,
        this.bl_count = new Uint16Array(16),
        this.heap = new Uint16Array(573),
        bt(this.heap),
        this.heap_len = 0,
        this.heap_max = 0,
        this.depth = new Uint16Array(573),
        bt(this.depth),
        this.l_buf = 0,
        this.lit_bufsize = 0,
        this.last_lit = 0,
        this.d_buf = 0,
        this.opt_len = 0,
        this.static_len = 0,
        this.matches = 0,
        this.insert = 0,
        this.bi_buf = 0,
        this.bi_valid = 0
    }
    const Bt = e=>{
        if (!e || !e.state)
            return xt(e, it);
        e.total_in = e.total_out = 0,
        e.data_type = dt;
        const t = e.state;
        return t.pending = 0,
        t.pending_out = 0,
        t.wrap < 0 && (t.wrap = -t.wrap),
        t.status = t.wrap ? 42 : mt,
        e.adler = 2 === t.wrap ? 0 : 1,
        t.last_flush = Ze,
        Ue(t),
        et
    }
      , Rt = e=>{
        const t = Bt(e);
        return t === et && (e=>{
            e.window_size = 2 * e.w_size,
            bt(e.head),
            e.max_lazy_match = zt[e.level].max_lazy,
            e.good_match = zt[e.level].good_length,
            e.nice_match = zt[e.level].nice_length,
            e.max_chain_length = zt[e.level].max_chain,
            e.strstart = 0,
            e.block_start = 0,
            e.lookahead = 0,
            e.insert = 0,
            e.match_length = e.prev_length = 2,
            e.match_available = 0,
            e.ins_h = 0
        }
        )(e.state),
        t
    }
      , Ot = (e,t,i,n,r,a)=>{
        if (!e)
            return it;
        let o = 1;
        if (t === at && (t = 6),
        n < 0 ? (o = 0,
        n = -n) : n > 15 && (o = 2,
        n -= 16),
        r < 1 || r > 9 || i !== ht || n < 8 || n > 15 || t < 0 || t > 9 || a < 0 || a > ct)
            return xt(e, it);
        8 === n && (n = 9);
        const s = new Ft;
        return e.state = s,
        s.strm = e,
        s.wrap = o,
        s.gzhead = null,
        s.w_bits = n,
        s.w_size = 1 << s.w_bits,
        s.w_mask = s.w_size - 1,
        s.hash_bits = r + 7,
        s.hash_size = 1 << s.hash_bits,
        s.hash_mask = s.hash_size - 1,
        s.hash_shift = ~~((s.hash_bits + 3 - 1) / 3),
        s.window = new Uint8Array(2 * s.w_size),
        s.head = new Uint16Array(s.hash_size),
        s.prev = new Uint16Array(s.w_size),
        s.lit_bufsize = 1 << r + 6,
        s.pending_buf_size = 4 * s.lit_bufsize,
        s.pending_buf = new Uint8Array(s.pending_buf_size),
        s.d_buf = 1 * s.lit_bufsize,
        s.l_buf = 3 * s.lit_bufsize,
        s.level = t,
        s.strategy = a,
        s.method = i,
        Rt(e)
    }
    ;
    Y.deflateInit = (e,t)=>Ot(e, t, ht, 15, 8, ut),
    Y.deflateInit2 = Ot,
    Y.deflateReset = Rt,
    Y.deflateResetKeep = Bt,
    Y.deflateSetHeader = (e,t)=>e && e.state ? 2 !== e.state.wrap ? it : (e.state.gzhead = t,
    et) : it,
    Y.deflate = (e,t)=>{
        let i, n;
        if (!e || !e.state || t > Xe || t < 0)
            return e ? xt(e, it) : it;
        const r = e.state;
        if (!e.output || !e.input && 0 !== e.avail_in || r.status === _t && t !== Ye)
            return xt(e, 0 === e.avail_out ? rt : it);
        r.strm = e;
        const a = r.last_flush;
        if (r.last_flush = t,
        42 === r.status)
            if (2 === r.wrap)
                e.adler = 0,
                kt(r, 31),
                kt(r, 139),
                kt(r, 8),
                r.gzhead ? (kt(r, (r.gzhead.text ? 1 : 0) + (r.gzhead.hcrc ? 2 : 0) + (r.gzhead.extra ? 4 : 0) + (r.gzhead.name ? 8 : 0) + (r.gzhead.comment ? 16 : 0)),
                kt(r, 255 & r.gzhead.time),
                kt(r, r.gzhead.time >> 8 & 255),
                kt(r, r.gzhead.time >> 16 & 255),
                kt(r, r.gzhead.time >> 24 & 255),
                kt(r, 9 === r.level ? 2 : r.strategy >= st || r.level < 2 ? 4 : 0),
                kt(r, 255 & r.gzhead.os),
                r.gzhead.extra && r.gzhead.extra.length && (kt(r, 255 & r.gzhead.extra.length),
                kt(r, r.gzhead.extra.length >> 8 & 255)),
                r.gzhead.hcrc && (e.adler = Je(e.adler, r.pending_buf, r.pending, 0)),
                r.gzindex = 0,
                r.status = 69) : (kt(r, 0),
                kt(r, 0),
                kt(r, 0),
                kt(r, 0),
                kt(r, 0),
                kt(r, 9 === r.level ? 2 : r.strategy >= st || r.level < 2 ? 4 : 0),
                kt(r, 3),
                r.status = mt);
            else {
                let t = ht + (r.w_bits - 8 << 4) << 8
                  , i = -1;
                i = r.strategy >= st || r.level < 2 ? 0 : r.level < 6 ? 1 : 6 === r.level ? 2 : 3,
                t |= i << 6,
                0 !== r.strstart && (t |= 32),
                t += 31 - t % 31,
                r.status = mt,
                Et(r, t),
                0 !== r.strstart && (Et(r, e.adler >>> 16),
                Et(r, 65535 & e.adler)),
                e.adler = 1
            }
        if (69 === r.status)
            if (r.gzhead.extra) {
                for (i = r.pending; r.gzindex < (65535 & r.gzhead.extra.length) && (r.pending !== r.pending_buf_size || (r.gzhead.hcrc && r.pending > i && (e.adler = Je(e.adler, r.pending_buf, r.pending - i, i)),
                wt(e),
                i = r.pending,
                r.pending !== r.pending_buf_size)); )
                    kt(r, 255 & r.gzhead.extra[r.gzindex]),
                    r.gzindex++;
                r.gzhead.hcrc && r.pending > i && (e.adler = Je(e.adler, r.pending_buf, r.pending - i, i)),
                r.gzindex === r.gzhead.extra.length && (r.gzindex = 0,
                r.status = 73)
            } else
                r.status = 73;
        if (73 === r.status)
            if (r.gzhead.name) {
                i = r.pending;
                do {
                    if (r.pending === r.pending_buf_size && (r.gzhead.hcrc && r.pending > i && (e.adler = Je(e.adler, r.pending_buf, r.pending - i, i)),
                    wt(e),
                    i = r.pending,
                    r.pending === r.pending_buf_size)) {
                        n = 1;
                        break
                    }
                    n = r.gzindex < r.gzhead.name.length ? 255 & r.gzhead.name.charCodeAt(r.gzindex++) : 0,
                    kt(r, n)
                } while (0 !== n);
                r.gzhead.hcrc && r.pending > i && (e.adler = Je(e.adler, r.pending_buf, r.pending - i, i)),
                0 === n && (r.gzindex = 0,
                r.status = 91)
            } else
                r.status = 91;
        if (91 === r.status)
            if (r.gzhead.comment) {
                i = r.pending;
                do {
                    if (r.pending === r.pending_buf_size && (r.gzhead.hcrc && r.pending > i && (e.adler = Je(e.adler, r.pending_buf, r.pending - i, i)),
                    wt(e),
                    i = r.pending,
                    r.pending === r.pending_buf_size)) {
                        n = 1;
                        break
                    }
                    n = r.gzindex < r.gzhead.comment.length ? 255 & r.gzhead.comment.charCodeAt(r.gzindex++) : 0,
                    kt(r, n)
                } while (0 !== n);
                r.gzhead.hcrc && r.pending > i && (e.adler = Je(e.adler, r.pending_buf, r.pending - i, i)),
                0 === n && (r.status = ft)
            } else
                r.status = ft;
        if (r.status === ft && (r.gzhead.hcrc ? (r.pending + 2 > r.pending_buf_size && wt(e),
        r.pending + 2 <= r.pending_buf_size && (kt(r, 255 & e.adler),
        kt(r, e.adler >> 8 & 255),
        e.adler = 0,
        r.status = mt)) : r.status = mt),
        0 !== r.pending) {
            if (wt(e),
            0 === e.avail_out)
                return r.last_flush = -1,
                et
        } else if (0 === e.avail_in && vt(t) <= vt(a) && t !== Ye)
            return xt(e, rt);
        if (r.status === _t && 0 !== e.avail_in)
            return xt(e, rt);
        if (0 !== e.avail_in || 0 !== r.lookahead || t !== Ze && r.status !== _t) {
            let i = r.strategy === st ? ((e,t)=>{
                let i;
                for (; ; ) {
                    if (0 === e.lookahead && (St(e),
                    0 === e.lookahead)) {
                        if (t === Ze)
                            return 1;
                        break
                    }
                    if (e.match_length = 0,
                    i = He(e, 0, e.window[e.strstart]),
                    e.lookahead--,
                    e.strstart++,
                    i && (At(e, !1),
                    0 === e.strm.avail_out))
                        return 1
                }
                return e.insert = 0,
                t === Ye ? (At(e, !0),
                0 === e.strm.avail_out ? 3 : 4) : e.last_lit && (At(e, !1),
                0 === e.strm.avail_out) ? 1 : 2
            }
            )(r, t) : r.strategy === lt ? ((e,t)=>{
                let i, n, r, a;
                const o = e.window;
                for (; ; ) {
                    if (e.lookahead <= gt) {
                        if (St(e),
                        e.lookahead <= gt && t === Ze)
                            return 1;
                        if (0 === e.lookahead)
                            break
                    }
                    if (e.match_length = 0,
                    e.lookahead >= 3 && e.strstart > 0 && (r = e.strstart - 1,
                    n = o[r],
                    n === o[++r] && n === o[++r] && n === o[++r])) {
                        a = e.strstart + gt;
                        do {} while (n === o[++r] && n === o[++r] && n === o[++r] && n === o[++r] && n === o[++r] && n === o[++r] && n === o[++r] && n === o[++r] && r < a);
                        e.match_length = gt - (a - r),
                        e.match_length > e.lookahead && (e.match_length = e.lookahead)
                    }
                    if (e.match_length >= 3 ? (i = He(e, 1, e.match_length - 3),
                    e.lookahead -= e.match_length,
                    e.strstart += e.match_length,
                    e.match_length = 0) : (i = He(e, 0, e.window[e.strstart]),
                    e.lookahead--,
                    e.strstart++),
                    i && (At(e, !1),
                    0 === e.strm.avail_out))
                        return 1
                }
                return e.insert = 0,
                t === Ye ? (At(e, !0),
                0 === e.strm.avail_out ? 3 : 4) : e.last_lit && (At(e, !1),
                0 === e.strm.avail_out) ? 1 : 2
            }
            )(r, t) : zt[r.level].func(r, t);
            if (3 !== i && 4 !== i || (r.status = _t),
            1 === i || 3 === i)
                return 0 === e.avail_out && (r.last_flush = -1),
                et;
            if (2 === i && (t === Qe ? Ve(r) : t !== Xe && (qe(r, 0, 0, !1),
            t === $e && (bt(r.head),
            0 === r.lookahead && (r.strstart = 0,
            r.block_start = 0,
            r.insert = 0))),
            wt(e),
            0 === e.avail_out))
                return r.last_flush = -1,
                et
        }
        return t !== Ye ? et : r.wrap <= 0 ? tt : (2 === r.wrap ? (kt(r, 255 & e.adler),
        kt(r, e.adler >> 8 & 255),
        kt(r, e.adler >> 16 & 255),
        kt(r, e.adler >> 24 & 255),
        kt(r, 255 & e.total_in),
        kt(r, e.total_in >> 8 & 255),
        kt(r, e.total_in >> 16 & 255),
        kt(r, e.total_in >> 24 & 255)) : (Et(r, e.adler >>> 16),
        Et(r, 65535 & e.adler)),
        wt(e),
        r.wrap > 0 && (r.wrap = -r.wrap),
        0 !== r.pending ? et : tt)
    }
    ,
    Y.deflateEnd = e=>{
        if (!e || !e.state)
            return it;
        const t = e.state.status;
        return 42 !== t && 69 !== t && 73 !== t && 91 !== t && t !== ft && t !== mt && t !== _t ? xt(e, it) : (e.state = null,
        t === mt ? xt(e, nt) : et)
    }
    ,
    Y.deflateSetDictionary = (e,t)=>{
        let i = t.length;
        if (!e || !e.state)
            return it;
        const n = e.state
          , r = n.wrap;
        if (2 === r || 1 === r && 42 !== n.status || n.lookahead)
            return it;
        if (1 === r && (e.adler = Ge(e.adler, t, i, 0)),
        n.wrap = 0,
        i >= n.w_size) {
            0 === r && (bt(n.head),
            n.strstart = 0,
            n.block_start = 0,
            n.insert = 0);
            let e = new Uint8Array(n.w_size);
            e.set(t.subarray(i - n.w_size, i), 0),
            t = e,
            i = n.w_size
        }
        const a = e.avail_in
          , o = e.next_in
          , s = e.input;
        for (e.avail_in = i,
        e.next_in = 0,
        e.input = t,
        St(n); n.lookahead >= 3; ) {
            let e = n.strstart
              , t = n.lookahead - 2;
            do {
                n.ins_h = yt(n, n.ins_h, n.window[e + 3 - 1]),
                n.prev[e & n.w_mask] = n.head[n.ins_h],
                n.head[n.ins_h] = e,
                e++
            } while (--t);
            n.strstart = e,
            n.lookahead = 2,
            St(n)
        }
        return n.strstart += n.lookahead,
        n.block_start = n.strstart,
        n.insert = n.lookahead,
        n.lookahead = 0,
        n.match_length = n.prev_length = 2,
        n.match_available = 0,
        e.next_in = o,
        e.input = s,
        e.avail_in = a,
        n.wrap = r,
        et
    }
    ,
    Y.deflateInfo = "pako deflate (from Nodeca project)";
    var Pt = {};
    const Nt = (e,t)=>Object.prototype.hasOwnProperty.call(e, t);
    Pt.assign = function(e) {
        const t = Array.prototype.slice.call(arguments, 1);
        for (; t.length; ) {
            const i = t.shift();
            if (i) {
                if ("object" != typeof i)
                    throw new TypeError(i + "must be non-object");
                for (const t in i)
                    Nt(i, t) && (e[t] = i[t])
            }
        }
        return e
    }
    ,
    Pt.flattenChunks = e=>{
        let t = 0;
        for (let i = 0, n = e.length; i < n; i++)
            t += e[i].length;
        const i = new Uint8Array(t);
        for (let t = 0, n = 0, r = e.length; t < r; t++) {
            let r = e[t];
            i.set(r, n),
            n += r.length
        }
        return i
    }
    ;
    var Lt = {};
    let jt = !0;
    try {
        String.fromCharCode.apply(null, new Uint8Array(1))
    } catch (e) {
        jt = !1
    }
    const Ut = new Uint8Array(256);
    for (let e = 0; e < 256; e++)
        Ut[e] = e >= 252 ? 6 : e >= 248 ? 5 : e >= 240 ? 4 : e >= 224 ? 3 : e >= 192 ? 2 : 1;
    Ut[254] = Ut[254] = 1,
    Lt.string2buf = e=>{
        if ("function" == typeof TextEncoder && TextEncoder.prototype.encode)
            return (new TextEncoder).encode(e);
        let t, i, n, r, a, o = e.length, s = 0;
        for (r = 0; r < o; r++)
            i = e.charCodeAt(r),
            55296 == (64512 & i) && r + 1 < o && (n = e.charCodeAt(r + 1),
            56320 == (64512 & n) && (i = 65536 + (i - 55296 << 10) + (n - 56320),
            r++)),
            s += i < 128 ? 1 : i < 2048 ? 2 : i < 65536 ? 3 : 4;
        for (t = new Uint8Array(s),
        a = 0,
        r = 0; a < s; r++)
            i = e.charCodeAt(r),
            55296 == (64512 & i) && r + 1 < o && (n = e.charCodeAt(r + 1),
            56320 == (64512 & n) && (i = 65536 + (i - 55296 << 10) + (n - 56320),
            r++)),
            i < 128 ? t[a++] = i : i < 2048 ? (t[a++] = 192 | i >>> 6,
            t[a++] = 128 | 63 & i) : i < 65536 ? (t[a++] = 224 | i >>> 12,
            t[a++] = 128 | i >>> 6 & 63,
            t[a++] = 128 | 63 & i) : (t[a++] = 240 | i >>> 18,
            t[a++] = 128 | i >>> 12 & 63,
            t[a++] = 128 | i >>> 6 & 63,
            t[a++] = 128 | 63 & i);
        return t
    }
    ;
    Lt.buf2string = (e,t)=>{
        const i = t || e.length;
        if ("function" == typeof TextDecoder && TextDecoder.prototype.decode)
            return (new TextDecoder).decode(e.subarray(0, t));
        let n, r;
        const a = new Array(2 * i);
        for (r = 0,
        n = 0; n < i; ) {
            let t = e[n++];
            if (t < 128) {
                a[r++] = t;
                continue
            }
            let o = Ut[t];
            if (o > 4)
                a[r++] = 65533,
                n += o - 1;
            else {
                for (t &= 2 === o ? 31 : 3 === o ? 15 : 7; o > 1 && n < i; )
                    t = t << 6 | 63 & e[n++],
                    o--;
                o > 1 ? a[r++] = 65533 : t < 65536 ? a[r++] = t : (t -= 65536,
                a[r++] = 55296 | t >> 10 & 1023,
                a[r++] = 56320 | 1023 & t)
            }
        }
        return ((e,t)=>{
            if (t < 65534 && e.subarray && jt)
                return String.fromCharCode.apply(null, e.length === t ? e : e.subarray(0, t));
            let i = "";
            for (let n = 0; n < t; n++)
                i += String.fromCharCode(e[n]);
            return i
        }
        )(a, r)
    }
    ,
    Lt.utf8border = (e,t)=>{
        (t = t || e.length) > e.length && (t = e.length);
        let i = t - 1;
        for (; i >= 0 && 128 == (192 & e[i]); )
            i--;
        return i < 0 || 0 === i ? t : i + Ut[e[i]] > t ? i : t
    }
    ;
    const qt = Y
      , Kt = Pt
      , Ht = Lt
      , Vt = Le
      , Gt = function() {
        this.input = null,
        this.next_in = 0,
        this.avail_in = 0,
        this.total_in = 0,
        this.output = null,
        this.next_out = 0,
        this.avail_out = 0,
        this.total_out = 0,
        this.msg = "",
        this.state = null,
        this.data_type = 2,
        this.adler = 0
    }
      , Jt = Object.prototype.toString
      , {Z_NO_FLUSH: Wt, Z_SYNC_FLUSH: Zt, Z_FULL_FLUSH: Qt, Z_FINISH: $t, Z_OK: Yt, Z_STREAM_END: Xt, Z_DEFAULT_COMPRESSION: ei, Z_DEFAULT_STRATEGY: ti, Z_DEFLATED: ii} = je;
    function ni(e) {
        this.options = Kt.assign({
            level: ei,
            method: ii,
            chunkSize: 16384,
            windowBits: 15,
            memLevel: 8,
            strategy: ti
        }, e || {});
        let t = this.options;
        t.raw && t.windowBits > 0 ? t.windowBits = -t.windowBits : t.gzip && t.windowBits > 0 && t.windowBits < 16 && (t.windowBits += 16),
        this.err = 0,
        this.msg = "",
        this.ended = !1,
        this.chunks = [],
        this.strm = new Gt,
        this.strm.avail_out = 0;
        let i = qt.deflateInit2(this.strm, t.level, t.method, t.windowBits, t.memLevel, t.strategy);
        if (i !== Yt)
            throw new Error(Vt[i]);
        if (t.header && qt.deflateSetHeader(this.strm, t.header),
        t.dictionary) {
            let e;
            if (e = "string" == typeof t.dictionary ? Ht.string2buf(t.dictionary) : "[object ArrayBuffer]" === Jt.call(t.dictionary) ? new Uint8Array(t.dictionary) : t.dictionary,
            i = qt.deflateSetDictionary(this.strm, e),
            i !== Yt)
                throw new Error(Vt[i]);
            this._dict_set = !0
        }
    }
    ni.prototype.push = function(e, t) {
        const i = this.strm
          , n = this.options.chunkSize;
        let r, a;
        if (this.ended)
            return !1;
        for (a = t === ~~t ? t : !0 === t ? $t : Wt,
        "string" == typeof e ? i.input = Ht.string2buf(e) : "[object ArrayBuffer]" === Jt.call(e) ? i.input = new Uint8Array(e) : i.input = e,
        i.next_in = 0,
        i.avail_in = i.input.length; ; )
            if (0 === i.avail_out && (i.output = new Uint8Array(n),
            i.next_out = 0,
            i.avail_out = n),
            (a === Zt || a === Qt) && i.avail_out <= 6)
                this.onData(i.output.subarray(0, i.next_out)),
                i.avail_out = 0;
            else {
                if (r = qt.deflate(i, a),
                r === Xt)
                    return i.next_out > 0 && this.onData(i.output.subarray(0, i.next_out)),
                    r = qt.deflateEnd(this.strm),
                    this.onEnd(r),
                    this.ended = !0,
                    r === Yt;
                if (0 !== i.avail_out) {
                    if (a > 0 && i.next_out > 0)
                        this.onData(i.output.subarray(0, i.next_out)),
                        i.avail_out = 0;
                    else if (0 === i.avail_in)
                        break
                } else
                    this.onData(i.output)
            }
        return !0
    }
    ,
    ni.prototype.onData = function(e) {
        this.chunks.push(e)
    }
    ,
    ni.prototype.onEnd = function(e) {
        e === Yt && (this.result = Kt.flattenChunks(this.chunks)),
        this.chunks = [],
        this.err = e,
        this.msg = this.strm.msg
    }
    ;
    var ri = function(e, t) {
        return (t = t || {}).gzip = !0,
        function(e, t) {
            const i = new ni(t);
            if (i.push(e, !0),
            i.err)
                throw i.msg || Vt[i.err];
            return i.result
        }(e, t)
    };
    const ai = ["enabled", "userId"];
    var oi, si, li = ["drs"];
    oi = li,
    si = 248,
    function(e) {
        for (; --e; )
            oi.push(oi.shift())
    }(++si);
    var ci, ui, di, hi = new Z((ci = "0x0",
    li[ci -= 0])), gi = ["setItemLocalStorageSafe", "removeItemLocalStorageSafe", "FALLBACK_SESSION_STORAGE", "FALLBACK_LOCAL_STORAGE", "clientId", "getFullStorageKey", "getItemSessionStorageSafe", "sessionStorage", "setItemSessionStorageSafe", "setItem", "removeItemSessionStorageSafe", "removeItem", "localStorage", "getItem"];
    ui = gi,
    di = 422,
    function(e) {
        for (; --e; )
            ui.push(ui.shift())
    }(++di);
    var pi = function(e, t) {
        return gi[e -= 0]
    };
    class fi {
        constructor(e) {
            this[pi("0x0")] = {},
            this[pi("0x1")] = {},
            this[pi("0x2")] = e
        }
        getClientId() {
            return this[pi("0x2")]
        }
        setClientId(e) {
            this[pi("0x2")] = e
        }
        [pi("0x3")](e) {
            return this[pi("0x2")] + "_" + e
        }
        [pi("0x4")](e) {
            const t = this[pi("0x3")](e);
            try {
                return window[pi("0x5")].getItem(t)
            } catch (e) {
                return this[pi("0x0")][t]
            }
        }
        [pi("0x6")](e, t) {
            const i = this[pi("0x3")](e);
            try {
                window.sessionStorage[pi("0x7")](i, t)
            } catch (e) {
                this[pi("0x0")][i] = t
            }
        }
        [pi("0x8")](e) {
            const t = this[pi("0x3")](e);
            try {
                window[pi("0x5")][pi("0x9")](t)
            } catch (e) {
                this[pi("0x0")][t] = void 0
            }
        }
        getItemLocalStorageSafe(e) {
            const t = this[pi("0x3")](e);
            try {
                return window[pi("0xa")][pi("0xb")](t)
            } catch (e) {
                return this[pi("0x1")][t]
            }
        }
        [pi("0xc")](e, t) {
            const i = this[pi("0x3")](e);
            try {
                window[pi("0xa")][pi("0x7")](i, t)
            } catch (e) {
                this[pi("0x1")][i] = t
            }
        }
        [pi("0xd")](e) {
            const t = this.getFullStorageKey(e);
            try {
                window.localStorage.removeItem(t)
            } catch (e) {
                this[pi("0x1")][t] = void 0
            }
        }
    }
    var mi, _i, xi = ["enabled", "[AccountProtection SDK]", "logs", "middlewares", "info", "warn", "pushLog", "flush", "logPrefix", "stringify", "push", "now", "formatter", "length", "logsLimit", "unshift", "map", "all", "catch"];
    mi = xi,
    _i = 323,
    function(e) {
        for (; --e; )
            mi.push(mi.shift())
    }(++_i);
    var vi = function(e, t) {
        return xi[e -= 0]
    };
    class bi {
        constructor() {
            let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            this[vi("0x0")] = e,
            this.logPrefix = vi("0x1"),
            this.logsLimit = 1e4,
            this[vi("0x2")] = [],
            this[vi("0x3")] = []
        }
        [vi("0x4")](e, t) {
            this.pushLog(3, e, t)
        }
        [vi("0x5")](e, t) {
            this[vi("0x6")](4, e, t)
        }
        error(e, t) {
            this.pushLog(5, e, t)
        }
        [vi("0x7")]() {
            const e = this[vi("0x2")];
            return this[vi("0x2")] = [],
            e
        }
        [vi("0x6")](e, t, n) {
            this.enabled && console.log("%s %s %s", this[vi("0x8")], t, JSON[vi("0x9")](n)),
            this[vi("0x2")][vi("0xa")]({
                timestamp: Date[vi("0xb")](),
                severity: e,
                text: JSON[vi("0x9")](i(i({}, n), {}, {
                    message: t
                }), this[vi("0xc")])
            }),
            this[vi("0x2")][vi("0xd")] > this[vi("0xe")] && this[vi("0x2")][vi("0xf")]();
            const r = this[vi("0x3")][vi("0x10")]((e=>e()));
            Promise[vi("0x11")](r)[vi("0x12")]((()=>{}
            ))
        }
        [vi("0xc")](e, t) {
            if (t instanceof Error) {
                const {name: e, stack: i, message: n} = t;
                return {
                    name: e,
                    stack: i,
                    message: n
                }
            }
            return t
        }
    }
    const yi = new bi;
    var wi, Ai, ki = ["device/conf?tenantId=", "requestsManager", "error", "error fetching config", "getItemLocalStorageSafe", "error loading config", "shouldUpdateConf", "getConfValue", "now", "refreshConf", "setItemLocalStorageSafe", "stringify", "timestamp", "ric", "storageManager", "conf", "loadConf", "fetchConf"];
    wi = ki,
    Ai = 498,
    function(e) {
        for (; --e; )
            wi.push(wi.shift())
    }(++Ai);
    var Ei = function(e, t) {
        return ki[e -= 0]
    };
    const Ci = Ei("0x0")
      , Di = Ei("0x1");
    class Si {
        constructor(e, t) {
            this[Ei("0x2")] = e,
            this.requestsManager = t,
            this[Ei("0x3")] = this[Ei("0x4")]()
        }
        async[Ei("0x5")](e) {
            try {
                const t = Ei("0x6") + e;
                return await this[Ei("0x7")].getData(t)
            } catch (t) {
                return yi[Ei("0x8")](Ei("0x9"), {
                    clientId: e,
                    error: t
                }),
                {}
            }
        }
        [Ei("0x4")]() {
            const e = this[Ei("0x2")][Ei("0xa")](Di);
            if (null != e)
                try {
                    return JSON.parse(e)
                } catch (e) {
                    yi[Ei("0x8")](Ei("0xb"), {
                        error: e
                    })
                }
            return {}
        }
        [Ei("0xc")]() {
            const e = this[Ei("0xd")](Ci, 0);
            return Date[Ei("0xe")]() - e > 36e5
        }
        async[Ei("0xf")](e) {
            if (!this[Ei("0xc")]())
                return !1;
            const t = await this[Ei("0x5")](e);
            return this.conf = t,
            this[Ei("0x2")][Ei("0x10")](Di, JSON[Ei("0x11")](t)),
            !0
        }
        [Ei("0xd")](e, t) {
            const i = void 0 !== this.conf ? this[Ei("0x3")][e] : void 0;
            return null != i ? i : t
        }
    }
    var Ii, Ti, Mi = ["device", "interaction", "EVENT_TYPE_IDENTIFICATION", "identification", "desktop_web", "mobile_web", "EVENT_TYPE_ACTION", "action", "EVENT_TYPE_DEVICE"];
    Ii = Mi,
    Ti = 168,
    function(e) {
        for (; --e; )
            Ii.push(Ii.shift())
    }(++Ti);
    var zi, Fi, Bi = function(e, t) {
        return Mi[e -= 0]
    };
    (Fi = zi || (zi = {}))[Bi("0x0")] = Bi("0x1"),
    Fi[Bi("0x2")] = Bi("0x3"),
    Fi.EVENT_TYPE_INTERACTION = Bi("0x4"),
    Fi[Bi("0x5")] = Bi("0x6");
    const Ri = Bi("0x7")
      , Oi = Bi("0x8");
    var Pi, Ni, Li = ["length", "splice", "push"];
    Pi = Li,
    Ni = 315,
    function(e) {
        for (; --e; )
            Pi.push(Pi.shift())
    }(++Ni);
    var ji = function(e, t) {
        return Li[e -= 0]
    };
    class Ui {
        static maintainLastXItems(e, t, i) {
            return e[ji("0x0")] === t && e[ji("0x1")](0, 1),
            e[ji("0x2")](i),
            e
        }
    }
    var qi, Ki, Hi = ["isTrusted", "cancelable", "view", "metaKey", "bufferSize", "composed", "location", "shiftKey", "inputType", "data", "buffer", "collect", "extractEventData", "getData", "extractButtonsPressedData", "buttons", "now", "detail", "offsetX", "offsetY", "sourceCapabilities", "firesTouchEvents", "target", "maintainLastXItems"];
    qi = Hi,
    Ki = 153,
    function(e) {
        for (; --e; )
            qi.push(qi.shift())
    }(++Ki);
    var Vi = function(e, t) {
        return Hi[e -= 0]
    };
    class Gi {
        constructor(e) {
            this[Vi("0x0")] = [],
            this[Vi("0x1")] = e
        }
        [Vi("0x2")](e) {
            const t = this[Vi("0x3")](e);
            Ui.maintainLastXItems(this[Vi("0x0")], this[Vi("0x1")], t)
        }
        [Vi("0x4")]() {
            return this[Vi("0x0")]
        }
        [Vi("0x3")](e) {
            return i({
                x: e.x,
                y: e.y,
                tspl: Date.now()
            }, this.extractButtonsPressedData(e))
        }
        [Vi("0x5")](e) {
            return i(i(i(i({}, e.ctrlKey && {
                ctrlKey: !0
            }), e.altKey && {
                altKey: !0
            }), e.shiftKey && {
                shiftKey: !0
            }), 0 != e[Vi("0x6")] && {
                buttons: e[Vi("0x6")]
            })
        }
    }
    class Ji {
        constructor(e) {
            this[Vi("0x0")] = [],
            this[Vi("0x1")] = e
        }
        [Vi("0x2")](e) {
            var t;
            const i = {
                x: e.x,
                y: e.y,
                timestamp: Date[Vi("0x7")](),
                mouseButtonType: e[Vi("0x8")],
                offsetX: e[Vi("0x9")],
                offsetY: e[Vi("0xa")],
                isPressed: null == (null === (t = e[Vi("0xb")]) || void 0 === t ? void 0 : t[Vi("0xc")]) ? null : !e.sourceCapabilities[Vi("0xc")],
                target_id: e[Vi("0xd")].id
            };
            Ui[Vi("0xe")](this[Vi("0x0")], this[Vi("0x1")], i)
        }
        getData() {
            const e = [...this[Vi("0x0")]];
            return this[Vi("0x0")] = [],
            e
        }
    }
    class Wi {
        constructor(e) {
            this[Vi("0x0")] = [],
            this.bufferSize = e
        }
        [Vi("0x2")](e) {
            var t;
            const i = {
                isTrusted: e[Vi("0xf")],
                cancelable: e[Vi("0x10")],
                composed: e.composed,
                isView: !!e[Vi("0x11")],
                shiftKey: e.shiftKey,
                metaKey: e[Vi("0x12")],
                firesTouchEvents: null === (t = e[Vi("0xb")]) || void 0 === t ? void 0 : t.firesTouchEvents,
                timestamp: Date[Vi("0x7")]()
            };
            Ui[Vi("0xe")](this[Vi("0x0")], this.bufferSize, i)
        }
        [Vi("0x4")]() {
            const e = [...this[Vi("0x0")]];
            return this[Vi("0x0")] = [],
            e
        }
    }
    class Zi {
        constructor(e) {
            this[Vi("0x0")] = [],
            this[Vi("0x13")] = e
        }
        [Vi("0x2")](e) {
            var t;
            const i = {
                isTrusted: e[Vi("0xf")],
                cancelable: e.cancelable,
                composed: e[Vi("0x14")],
                isView: !!e[Vi("0x11")],
                location: e[Vi("0x15")],
                shiftKey: e[Vi("0x16")],
                firesTouchEvents: null === (t = e[Vi("0xb")]) || void 0 === t ? void 0 : t.firesTouchEvents,
                timestamp: Date[Vi("0x7")]()
            };
            Ui[Vi("0xe")](this[Vi("0x0")], this[Vi("0x13")], i)
        }
        [Vi("0x4")]() {
            const e = this[Vi("0x0")];
            return this[Vi("0x0")] = [],
            e
        }
    }
    class Qi {
        constructor(e) {
            this.data = [],
            this[Vi("0x13")] = e
        }
        [Vi("0x2")](e) {
            const t = {
                isTrusted: e[Vi("0xf")],
                cancelable: e.cancelable,
                composed: e.composed,
                inputType: e[Vi("0x17")],
                isView: !!e[Vi("0x11")],
                timestamp: Date[Vi("0x7")]()
            };
            Ui[Vi("0xe")](this[Vi("0x0")], this[Vi("0x13")], t)
        }
        [Vi("0x4")]() {
            const e = this[Vi("0x0")];
            return this[Vi("0x0")] = [],
            e
        }
    }
    class $i {
        constructor(e) {
            this[Vi("0x0")] = [],
            this[Vi("0x13")] = e
        }
        [Vi("0x2")](e) {
            const t = {
                isTrusted: e.isTrusted,
                cancelable: e.cancelable,
                composed: e.composed,
                timestamp: Date[Vi("0x7")]()
            };
            Ui.maintainLastXItems(this[Vi("0x0")], this[Vi("0x13")], t)
        }
        [Vi("0x4")]() {
            const e = this.data;
            return this[Vi("0x0")] = [],
            e
        }
    }
    var Yi, Xi, en = ["error", "Error while adding listener", "filter", "forEach", "collect", "getGenericAttributes", "addSafeInteractionListener", "addEventListener", "handleEvent", "error adding interaction listener", "getData", "location", "href", "paste", "mouseup", "mousedown", "keyup", "focusout", "SELECT", "TEXTAREA", "deviceEventDataCollectionIgnoreList", "mouseEventsCollectionBuffer", "safeEventCallback", "detail", "firesTouchEvents", "sourceCapabilities", "offsetX", "offsetY", "target", "isTrusted", "clipboardData", "dropEffect", "effectAllowed", "inputTypeFilter", "keys", "dataset", "virtualKeyboard", "overlaysContent", "tagName", "interactionEventsCollectorsData"];
    Yi = en,
    Xi = 213,
    function(e) {
        for (; --e; )
            Yi.push(Yi.shift())
    }(++Xi);
    var tn = function(e, t) {
        return en[e -= 0]
    };
    const nn = "change"
      , rn = tn("0x0")
      , an = "mousemove"
      , on = tn("0x1")
      , sn = tn("0x2")
      , ln = tn("0x3")
      , cn = "keydown"
      , un = "input"
      , dn = tn("0x4")
      , hn = ["INPUT", tn("0x5"), tn("0x6")];
    class gn {
        constructor(e, t, n) {
            this[tn("0x7")] = e,
            this[tn("0x8")] = t,
            this[tn("0x9")] = n,
            this.interactionEventsCollectorsData = {
                click: {
                    eventTypesToAttach: [an, on, sn],
                    attributesMapper: e=>{
                        var t;
                        return {
                            x: e.x,
                            y: e.y,
                            mouseButtonType: e[tn("0xa")],
                            isPressed: null == (null === (t = e.sourceCapabilities) || void 0 === t ? void 0 : t[tn("0xb")]) ? null : !e[tn("0xc")][tn("0xb")],
                            offsetX: e[tn("0xd")],
                            offsetY: e[tn("0xe")],
                            target_id: e[tn("0xf")].id
                        }
                    }
                },
                [rn]: {
                    attributesMapper: e=>({
                        target_id: e[tn("0xf")].id,
                        isTrusted: e[tn("0x10")],
                        cancelable: e.cancelable,
                        composed: e.composed,
                        dropEffect: e[tn("0x11")][tn("0x12")],
                        effectAllowed: e[tn("0x11")][tn("0x13")]
                    })
                },
                submit: {
                    attributesMapper: e=>({
                        target_id: e.target.id
                    })
                },
                [an]: {
                    continousCollectors: [new Gi(this[tn("0x8")])]
                },
                [on]: {
                    continousCollectors: [new Ji(1)]
                },
                [sn]: {
                    continousCollectors: [new Ji(1)]
                },
                [dn]: {
                    eventTypesToAttach: [un, ln, cn, nn],
                    filter: this[tn("0x14")],
                    attributesMapper: e=>{
                        const {target: t, isTrusted: n, cancelable: r, composed: a} = e;
                        return i({
                            target_id: t.id,
                            dataset_keys: Object[tn("0x15")](t[tn("0x16")] || {}),
                            isTrusted: n,
                            cancelable: r,
                            composed: a
                        }, navigator[tn("0x17")] && {
                            navigator_virtualKeyboard: navigator[tn("0x17")][tn("0x18")]
                        })
                    }
                },
                [un]: {
                    filter: this[tn("0x14")],
                    continousCollectors: [new Qi(50)]
                },
                [ln]: {
                    filter: this[tn("0x14")],
                    continousCollectors: [new Zi(50)]
                },
                [cn]: {
                    filter: this[tn("0x14")],
                    continousCollectors: [new Wi(50)]
                },
                [nn]: {
                    continousCollectors: [new $i(50)]
                }
            }
        }
        [tn("0x14")](e) {
            var t;
            const i = null === (t = e[tn("0xf")]) || void 0 === t ? void 0 : t[tn("0x19")];
            return hn.includes(i)
        }
        registerEventListeners() {
            for (const [e,t] of Object.entries(this[tn("0x1a")]))
                if (!this.deviceEventDataCollectionIgnoreList.includes(e))
                    try {
                        this.addSafeInteractionListener(e, t)
                    } catch (t) {
                        yi[tn("0x1b")](tn("0x1c"), {
                            error: t,
                            eventType: e
                        })
                    }
        }
        [tn("0x1d")](e, t) {
            return !e[tn("0x1d")] || e[tn("0x1d")](t)
        }
        async handleEvent(e, t, n) {
            const {attributesMapper: r, continousCollectors: a} = e;
            if (!this[tn("0x1d")](e, t))
                return !1;
            if (a)
                a[tn("0x1e")]((e=>{
                    e[tn("0x1f")](t)
                }
                ));
            else {
                const e = this[tn("0x20")]()
                  , a = this.getAttachedData(n)
                  , o = i(i(i({}, e), r(t)), a && {
                    attachedEventsData: a
                });
                await this.safeEventCallback(n, o)
            }
            return !0
        }
        [tn("0x21")](e, t) {
            window[tn("0x22")](e, (async i=>{
                try {
                    await this[tn("0x23")](t, i, e)
                } catch (e) {
                    yi[tn("0x1b")](tn("0x24"), {
                        error: e
                    })
                }
            }
            ))
        }
        getAttachedData(e) {
            let t;
            const i = this[tn("0x1a")][e].eventTypesToAttach;
            return i && (t = {},
            i.forEach((e=>{
                const {continousCollectors: i} = this[tn("0x1a")][e];
                i && i[tn("0x1e")]((i=>t[e] = i[tn("0x25")]()))
            }
            ))),
            t
        }
        [tn("0x20")]() {
            return {
                location: window[tn("0x26")][tn("0x27")]
            }
        }
    }
    var pn, fn, mn = ["warn", "executor reached timeout", "userAgentData", "platform", "fullVersionList", "bitness", "mobile", "wow64", "setTimeout", "race", "catch"];
    pn = mn,
    fn = 398,
    function(e) {
        for (; --e; )
            pn.push(pn.shift())
    }(++fn);
    var _n = function(e, t) {
        return mn[e -= 0]
    };
    function xn() {
        var e;
        return null === (e = navigator[_n("0x0")]) || void 0 === e ? void 0 : e.getHighEntropyValues(["architecture", "model", _n("0x1"), "platformVersion", _n("0x2"), _n("0x3"), _n("0x4"), _n("0x5"), "uaFullVersion"])
    }
    function vn(e, t) {
        let i;
        const n = [Promise.resolve(e()).catch((()=>{}
        )), new Promise(((e,n)=>i = window[_n("0x6")](n, t)))];
        return Promise[_n("0x7")](n)[_n("0x8")]((()=>yi[_n("0x9")](_n("0xa"), {
            fnName: e.name
        }))).finally((()=>clearTimeout(i)))
    }
    var bn, yn, wn = ["sqrt", "exp", "acosh", "asin", "atan", "cos", "tan", "tanh", "expm1", "toString", "localStorage", "hasSequentum", "external", "indexOf", "Sequentum", "webdriver", "_WEBDRIVER_ELEM_CACHE", "ChromeDriverw", "driver-evaluate", "webdriver-evaluate", "selenium-evaluate", "webdriverCommand", "webdriver-evaluate-response", "__webdriverFunc", "__lastWatirAlert", "$cdc_asdjflasutopfhvcZLmcfl_", "filter", "product", "userAgent", "getNavigatorUAData", "userAgentData", "estimate", "navigatorOnLine", "onLine", "userActivation", "isActive", "permissions", "query", "state", "sendBeacon", "function", "getOwnPropertyDescriptor", "hardwareConcurrency", "get", "languages", "isArray", "map", "platform", "url", "referrer", "getPerformanceTiming", "timing", "memory", "indexedDB", "DocumentTouch", "maxTouchPoints", "msMaxTouchPoints", "ontouchstart", "length", "push", "type", "suffixes", "plugins", "description", "screen", "availHeight", "availWidth", "colorDepth", "height", "pixelDepth", "orientation", "angle", "hashCodeString", "charCodeAt", "outerWidth", "outerHeight", "cpuClass", "HTMLElement", "prototype", "addBehavior", "productSub", "getMediaDevices", "enumerateDevices", "label", "deviceId", "OfflineAudioContext", "webkitOfflineAudioContext", "createOscillator", "triangle", "frequency", "knee", "ratio", "attack", "connect", "destination", "start", "renderedBuffer", "startRendering", "subarray", "getHash", "createDynamicsCompressor", "threshold", "createAnalyser", "disconnect", "getFloatFrequencyData", "call", "getFloatTimeDomainData", "reduction", "monospace", "serif", "sans-serif-thin", "Agency FB", "Arabic Typesetting", "Arial Unicode MS", "BankGothic Md BT", "Batang", "Bitstream Vera Sans Mono", "Calibri", "Century", "Century Gothic", "Clarendon", "EUROSTILE", "Futura Bk BT", "Futura Md BT", "GOTHAM", "Gill Sans", "HELV", "Leelawadee", "Letter Gothic", "Lucida Bright", "Lucida Sans", "Menlo", "MS Mincho", "MS Reference Specialty", "MS UI Gothic", "MT Extra", "MYRIAD PRO", "Marlett", "Meiryo UI", "Microsoft Uighur", "Minion Pro", "Monotype Corsiva", "PMingLiU", "Pristina", "SCRIPTINA", "Serifa", "SimHei", "Small Fonts", "Staccato222 BT", "Univers CE 55 Medium", "Vrinda", "ZWAdobeF", "createElement", "style", "visibility", "span", "top", "left", "fontFamily", "fontSize", "some", "offsetWidth", "offsetHeight", "body", "removeChild", "getTimezoneOffset", "language", "__webdriver_script_function", "DateTimeFormat", "resolvedOptions", "timeZone", "vendor", "buildID", "fillStyle", "#f60", "fillRect", "#069", "font", '11pt "Times New Roman"', "Cwm fjordbank gly ", "fromCharCode", "fillText", "rgba(102, 204, 0, 0.2)", "18pt Arial", "toDataURL", "width", "globalCompositeOperation", "multiply", "#f2f", "#2ff", "#ff2", "arc", "closePath", "#f9c", "fill", "evenodd", "rect", "canvas", "chargingTime", "dischargingTime", "level", "brave", "isBrave", "getContext", "webgl", "webgl-experimental", "getExtension", "getParameter", "canPlayType", 'video/mp4; codecs="avc1.42E01E"', "video/mp4;;Codecs =avc1.42E01E", "getPublicData", "matchMedia", "only screen and (max-width: 600px)", "sdkDeviceDataCollectionIgnoreList", "deviceDataCalculationExpiry", "abs", "storageManager", "configManager", "cryptoBinding", "calculate", "getConfValue", "dataPointsExtractor", "lastDeviceData", "setItemLocalStorageSafe", "now", "getItemLocalStorageSafe", "dataPoints", "getBattery", "getBrave", "getCanvasFingerprint", "getCodesTests", "getConnection", "getCryptoRandomValues", "getDeviceMemory", "getDocumentBasedKeys", "getHardwareConcurrency", "getIndexedDB", "getFIDOEnabled", "getLanguages", "getLanguage", "getLocalStorage", "getNavigatorBasedKeys", "getNavigatorProduct", "getNavigatorUserAgent", "getNavigatorHighEntropyData", "navigatorStorageEstimation", "navigatorIsUserActive", "getOpenDatabase", "getWindowOrientation", "getPlatform", "getCpuClass", "getOsCpu", "getAddBehavior", "getProductSub", "getAudioFingerprintExtended", "getFonts", "getPerformanceMemory", "getPlugins", "getScreen", "getSessionStorage", "getReferrer", "getTimezone", "getTouchSupport", "getVendor", "getBuildID", "getWebDriver", "getWebGlRenderer", "getWindowBasedKeys", "getWindowOuter", "webRTCDisabled", "getCryptoBindingData", "bind", "getNavigatorPermissionsState", "notifications", "geolocation", "isGeoLocationExists", "isSendBeaconFunction", "getNavigatorPrototype", "getInstalledRelatedApps", "windowConstructorAliasTest", "windowDocumentAuxVarsTest", "CDPRuntimeDomainTest", "Error", "Object", "defineProperty", "stack", "console", "debug", "$chrome_asyncScriptInfo", "test", "getOwnPropertyDescriptors", "value", "cache_", "getPrototypeOf", "storeItem", "retrieveItem", "isNodeReachable_", "Array", "Promise", "Symbol", "name", "token", "startPromisesLoop", "collectPromisesData", "entries", "warn", "worker throw error", "resolve", "worker promise rejected", "credentials", "PublicKeyCredential", "isUserVerifyingPlatformAuthenticatorAvailable", "crypto", "getRandomValues", "from", "safari", "__crWeb", "__gCrWeb", "yandex", "__yb", "webkit", "ucweb", "UCShellJava", "puffinDevice", "__phantomas", "callPhantom", "emit", "spawn", "domAutomationController", "domAutomation", "__nightmare", "_selenium", "calledSelenium", "callSelenium", "_Selenium_IDE_Recorder", "__$webdriverAsyncExecutor", "__driver_evaluate", "__driver_unwrapped", "__fxdriver_evaluate", "__fxdriver_unwrapped", "__lastWatirConfirm", "__lastWatirPrompt", "__selenium_unwrapped", "__webdriver_evaluate", "__webdriver_script_fn", "__webdriver_script_func", "__webdriver_unwrapped", "__webdriverFuncgeb", "calledPhantom", "cdc_adoQpoasnfa76pfcZLmcfl_Array", "cdc_adoQpoasnfa76pfcZLmcfl_Promise", "cdc_adoQpoasnfa76pfcZLmcfl_Symbol", "chrome_asyncScriptInfo", "fmget_targets", "geb", "OSMJIF", "spynner_additional_js_loaded", "watinExpressionResult", "high", "standard", "reduce", "less", "1000", "active", "none", "inverted", "rec2020", "srgb", "replace", "matches", "getMathFingerprint", "log"];
    bn = wn,
    yn = 214,
    function(e) {
        for (; --e; )
            bn.push(bn.shift())
    }(++yn);
    var An = function(e, t) {
        return wn[e -= 0]
    };
    const kn = An("0x0")
      , En = An("0x1")
      , Cn = e=>e ? [...e].reduce(((e,t)=>e + Math[An("0x2")](t)), 0) : 0;
    class Dn {
        constructor(e, t, i) {
            this[An("0x3")] = e,
            this[An("0x4")] = t,
            this[An("0x5")] = i
        }
        async[An("0x6")]() {
            const e = this[An("0x4")][An("0x7")](kn, [])
              , t = this[An("0x4")][An("0x7")](En, 36e5)
              , i = await new Sn(e,this.cryptoBinding)[An("0x8")]();
            return this[An("0x9")] = i,
            this.storageManager[An("0xa")](En, Date[An("0xb")]() + t),
            i
        }
        async getDeviceData() {
            return Number(this[An("0x3")][An("0xc")](En)) < Date[An("0xb")]() || !this[An("0x9")] ? await this[An("0x6")]() : this[An("0x9")]
        }
    }
    class Sn {
        constructor(e, t) {
            this[An("0x0")] = e,
            this.cryptoBinding = t,
            this[An("0xd")] = {
                battery: this[An("0xe")],
                brave: this[An("0xf")],
                canvas: this[An("0x10")],
                codecs: this[An("0x11")],
                connection: this[An("0x12")],
                cookieEnabled: this.getCookieEnabled,
                cryptoRandomValues: this[An("0x13")],
                deviceMemory: this[An("0x14")],
                documentBasedKeys: this[An("0x15")],
                hardwareConcurrency: this[An("0x16")],
                indexedDB: this[An("0x17")],
                fidoEnabled: this[An("0x18")],
                languages: this[An("0x19")],
                language: this[An("0x1a")],
                timezoneOffset: this.getTimezoneOffset,
                localStorage: this[An("0x1b")],
                navigatorBasedKeys: this[An("0x1c")],
                navigatorProduct: this[An("0x1d")],
                navigatorUserAgent: this[An("0x1e")],
                navigatorUAData: this.getNavigatorUAData,
                navigatorHighEntropyData: this[An("0x1f")],
                navigatorStorageEstimation: this[An("0x20")],
                navigatorOnLine: this.navigatorOnLine,
                navigatorIsUserActive: this[An("0x21")],
                math: this.getMathFingerprint,
                mediaMatch: this.getMediaMatch,
                openDatabase: this[An("0x22")],
                windowOrientation: this[An("0x23")],
                platform: this[An("0x24")],
                cpuClass: this[An("0x25")],
                osClass: this[An("0x26")],
                addBehavior: this[An("0x27")],
                productSub: this[An("0x28")],
                mediaDevices: this.getMediaDevices,
                audioFingerprint: this.getAudioFingerprint,
                audioFingerprintExtended: this[An("0x29")],
                fonts: this[An("0x2a")],
                performanceTiming: this.getPerformanceTiming,
                performanceMemory: this[An("0x2b")],
                plugins: this[An("0x2c")],
                screen: this[An("0x2d")],
                sequentum: this.hasSequentum,
                sessionStorage: this[An("0x2e")],
                referrer: this[An("0x2f")],
                timezone: this[An("0x30")],
                touchSupport: this[An("0x31")],
                vendor: this[An("0x32")],
                buildID: this[An("0x33")],
                webdriver: this[An("0x34")],
                webGlRenderer: this[An("0x35")],
                windowBasedKeys: this[An("0x36")],
                windowOuter: this[An("0x37")],
                webRTCDisabled: this[An("0x38")],
                cryptoBindingData: this[An("0x39")][An("0x3a")](this),
                notificationState: this[An("0x3b")][An("0x3a")](this, An("0x3c")),
                geolocationState: this[An("0x3b")].bind(this, An("0x3d")),
                isGeoLocationExists: this[An("0x3e")],
                isSendBeaconExists: this[An("0x3f")],
                navigatorPrototype: this[An("0x40")],
                installedRelatedApps: this[An("0x41")],
                windowConstructorAliasTest: this[An("0x42")],
                windowDocumentAuxVarsTest: this[An("0x43")],
                CDPRuntimeDomainTest: this[An("0x44")]
            }
        }
        [An("0x44")]() {
            let e = !1;
            const t = new (window[An("0x45")]);
            return window[An("0x46")][An("0x47")](t, An("0x48"), {
                configurable: !1,
                enumerable: !1,
                get: function() {
                    return e = !0,
                    ""
                }
            }),
            window[An("0x49")][An("0x4a")](t),
            e
        }
        [An("0x43")]() {
            for (const e of window[An("0x46")].getOwnPropertyNames(window.document))
                if (e == An("0x4b") || /^\$cdc_[a-zA-Z0-9]{22}_$/[An("0x4c")](e))
                    return !0;
            for (const e of window[An("0x46")].values(window.Object[An("0x4d")](window.document))) {
                if (!e[An("0x4e")] || void 0 === e.value[An("0x4f")])
                    continue;
                const t = window[An("0x46")].getOwnPropertyNames(window[An("0x46")][An("0x50")](e[An("0x4e")]))
                  , i = [An("0x51"), An("0x52"), An("0x53")];
                if (t.sort(),
                i.sort(),
                t.every(((e,t)=>e == i[t])))
                    return !0
            }
            return !1
        }
        [An("0x42")]() {
            const e = window[An("0x46")].getOwnPropertyNames(window);
            for (const t of e) {
                if (/^cdc_[a-zA-Z0-9]{22}_(Array|Promise|Symbol)$/[An("0x4c")](t))
                    return !0;
                for (const e of [window[An("0x54")], window[An("0x55")], window[An("0x56")]])
                    if (t != (null == e ? void 0 : e[An("0x57")]) && t != An("0x58") && "getAsyncToken" != t && window[t] === e)
                        return !0
            }
            return !1
        }
        async[An("0x8")]() {
            const e = this[An("0x59")]();
            return await this[An("0x5a")](e)
        }
        [An("0x59")]() {
            const e = {};
            for (const [t,i] of Object[An("0x5b")](this.dataPoints))
                if (!this[An("0x0")].includes(t))
                    try {
                        e[t] = vn(i, 100)
                    } catch (i) {
                        yi[An("0x5c")](An("0x5d"), {
                            e: i,
                            key: t
                        }),
                        e[t] = Promise[An("0x5e")]()
                    }
            return e
        }
        async[An("0x5a")](e) {
            const t = {};
            for (const [i,n] of Object.entries(e))
                try {
                    t[i] = await n
                } catch (e) {
                    yi.warn(An("0x5f"), {
                        e: e,
                        key: i
                    }),
                    t[i] = void 0
                }
            return t
        }
        getCookieEnabled() {
            const e = navigator.cookieEnabled;
            return Promise[An("0x5e")](e)
        }
        async[An("0x18")]() {
            return !!navigator[An("0x60")] && await window[An("0x61")][An("0x62")]()
        }
        getCryptoRandomValues() {
            const e = window[An("0x63")][An("0x64")](new Uint8Array(16));
            return Array[An("0x65")](e)
        }
        [An("0x38")]() {
            const e = null == window.RTCPeerConnection;
            return Promise[An("0x5e")](e)
        }
        getWindowBasedKeys() {
            const e = ["chrome", An("0x66"), An("0x67"), An("0x68"), An("0x69"), An("0x6a"), "__ybro", "__firefox__", "__edgeTrackingPreventionStatistics", An("0x6b"), "oprt", "samsungAr", An("0x6c"), An("0x6d"), An("0x6e"), "_phantom", An("0x6f"), An("0x70"), "Buffer", An("0x71"), An("0x72"), An("0x73"), An("0x74"), An("0x75"), An("0x76"), An("0x77"), An("0x78"), An("0x79"), An("0x7a"), An("0x7b"), An("0x7c"), An("0x7d"), An("0x7e"), "__lastWatirAlert", An("0x7f"), An("0x80"), "__selenium_evaluate", An("0x81"), "__webdriver__chr", An("0x82"), An("0x83"), An("0x84"), "__webdriver_script_function", An("0x85"), An("0x86"), "awesomium", An("0x87"), An("0x88"), An("0x89"), An("0x8a"), An("0x8b"), An("0x8c"), An("0x8d"), An("0x8e"), An("0x8f"), "watinExpressionError", An("0x90")]
              , t = [];
            for (const i of e) {
                const e = window[i];
                void 0 !== e && null != e && t.push(i)
            }
            return Promise[An("0x5e")](t)
        }
        getMediaMatch() {
            const e = {
                "dynamic-range": [An("0x91"), An("0x92")],
                "prefers-reduced-motion": ["no-preference", An("0x93")],
                "prefers-contrast": ["no-preference", An("0x91"), "low", "more", An("0x94"), "forced"],
                "max-monochrome": ["0", "10", "100", An("0x95")],
                "forced-colors": [An("0x96"), An("0x97")],
                "inverted-colors": [An("0x98"), An("0x97")],
                "color-gamut": [An("0x99"), "p3", An("0x9a")]
            }
              , t = {};
            for (const [i,n] of Object[An("0x5b")](e))
                for (const e of n)
                    t[i[An("0x9b")](/-/g, "_") + "_" + e.replace(/-/g, "_")] = window.matchMedia("(" + i + ": " + e + ")")[An("0x9c")];
            return Promise[An("0x5e")](t)
        }
        [An("0x9d")]() {
            const e = [Math.acos(.12312423423423424), Math[An("0xa1")](1e308), (t = 1e154,
            Math[An("0x9e")](t + Math[An("0x9f")](t * t - 1))), Math[An("0xa2")](.12312423423423424), Math.asinh(1), Math[An("0x9e")](1 + Math[An("0x9f")](2)), Math.atanh(.5), Math[An("0x9e")](3) / 2, Math[An("0xa3")](.5), Math.sin(-1e300), Math.sinh(1), Math[An("0xa0")](1) - 1 / Math.exp(1) / 2, Math[An("0xa4")](10.000000000123), Math.cosh(1), (Math[An("0xa0")](1) + 1 / Math[An("0xa0")](1)) / 2, Math[An("0xa5")](-1e300), Math[An("0xa6")](1), (Math.exp(2) - 1) / (Math[An("0xa0")](2) + 1), Math[An("0xa0")](1), Math[An("0xa7")](1), Math[An("0xa0")](1) - 1, Math.log1p(10), Math[An("0x9e")](11), Math.PI ** -100];
            var t;
            let i = "";
            for (let t = 0; t < e.length; t++)
                i += e[t][An("0xa8")]();
            return Promise[An("0x5e")](Sn.hashCodeString(i))
        }
        getConnection() {
            const {connection: e} = navigator
              , t = (e=>{
                let {downlink: t, effectiveType: i, rtt: n, saveData: r} = e;
                return {
                    downlink: t,
                    effectiveType: i,
                    rtt: n,
                    saveData: r
                }
            }
            )(e);
            return Promise.resolve(t)
        }
        [An("0x2e")]() {
            return Promise[An("0x5e")](!!window.sessionStorage)
        }
        getLocalStorage() {
            return Promise[An("0x5e")](!!window[An("0xa9")])
        }
        [An("0xaa")]() {
            return -1 !== window[An("0xab")][An("0xa8")]()[An("0xac")](An("0xad"))
        }
        [An("0x1c")]() {
            return [An("0xae"), An("0x7b"), An("0x82"), "__selenium_evaluate", An("0x7d"), An("0x7c"), "__webdriver_unwrapped", An("0x81"), An("0x7e"), An("0x79"), An("0x76"), An("0x77"), An("0xaf"), An("0xb0"), An("0xb1"), An("0xb2"), An("0xb3"), An("0xb4"), An("0xb5"), An("0xb6"), "__webdriver_script_fn", An("0x7a"), An("0xb7"), An("0x7f"), An("0x80"), An("0x4b"), An("0xb8"), "serviceWorker"][An("0xb9")]((e=>navigator[e]))
        }
        getNavigatorProduct() {
            const e = navigator[An("0xba")];
            return Promise[An("0x5e")](e)
        }
        [An("0x1e")]() {
            return navigator[An("0xbb")]
        }
        [An("0xbc")]() {
            return navigator[An("0xbd")]
        }
        [An("0x1f")]() {
            return xn()
        }
        [An("0x20")]() {
            return navigator.storage[An("0xbe")]()
        }
        [An("0xbf")]() {
            return navigator[An("0xc0")]
        }
        [An("0x21")]() {
            return navigator[An("0xc1")][An("0xc2")]
        }
        async getNavigatorPermissionsState(e) {
            try {
                const t = await navigator[An("0xc3")][An("0xc4")]({
                    name: e
                });
                return null == t ? void 0 : t[An("0xc5")]
            } catch (e) {}
        }
        [An("0x3e")]() {
            return !!navigator[An("0x3d")]
        }
        isSendBeaconFunction() {
            return typeof navigator[An("0xc6")] === An("0xc7")
        }
        [An("0x40")]() {
            return {
                hardwareConcurrency: Object[An("0xc8")](Object[An("0x50")](navigator), An("0xc9"))[An("0xca")][An("0xa8")](),
                languages: Object[An("0xc8")](Object[An("0x50")](navigator), An("0xcb")).get[An("0xa8")]()
            }
        }
        async[An("0x41")]() {
            if (typeof navigator[An("0x41")] === An("0xc7"))
                try {
                    const {related_applications: e} = await navigator[An("0x41")]();
                    if (e && Array[An("0xcc")](e))
                        return e[An("0xcd")]((e=>({
                            platform: e[An("0xce")],
                            url: e[An("0xcf")]
                        })))
                } catch (e) {}
        }
        [An("0x2f")]() {
            return document[An("0xd0")]
        }
        [An("0xd1")]() {
            return performance[An("0xd2")]
        }
        [An("0x2b")]() {
            const {jsHeapSizeLimit: e, totalJSHeapSize: t, usedJSHeapSize: i} = performance[An("0xd3")];
            return {
                jsHeapSizeLimit: e,
                totalJSHeapSize: t,
                usedJSHeapSize: i
            }
        }
        [An("0x17")]() {
            return Promise[An("0x5e")](!!window[An("0xd4")])
        }
        [An("0x22")]() {
            const {openDatabase: e} = window;
            return Promise[An("0x5e")](!!e)
        }
        [An("0x31")]() {
            const e = window[An("0xd5")] && document instanceof DocumentTouch
              , t = {
                maxTouchPoints: navigator[An("0xd6")] || navigator[An("0xd7")] || 0,
                documentTouch: e,
                ontouchstart: An("0xd8")in window
            };
            return Promise[An("0x5e")](t)
        }
        [An("0x2c")]() {
            function e(e) {
                const t = [];
                for (let i = 0; i < e[An("0xd9")]; ++i)
                    t[An("0xda")]({
                        type: e[i][An("0xdb")],
                        suffixes: e[i][An("0xdc")]
                    });
                return t
            }
            const t = [];
            for (let i = 0; i < navigator.plugins[An("0xd9")]; ++i) {
                const n = navigator[An("0xdd")][i];
                n && t[An("0xda")]({
                    name: n[An("0x57")],
                    description: n[An("0xde")],
                    mimeTypes: e(n)
                })
            }
            return Promise[An("0x5e")](t)
        }
        [An("0x2d")]() {
            const e = window[An("0xdf")] || screen
              , {availLeft: t} = e
              , {availTop: i} = e
              , n = {
                availHeight: e[An("0xe0")],
                availLeft: t,
                availTop: i,
                availWidth: e[An("0xe1")],
                colorDepth: e[An("0xe2")],
                height: e[An("0xe3")],
                width: e.width,
                pixelDepth: e[An("0xe4")],
                orientationAngle: e[An("0xe5")] && e[An("0xe5")][An("0xe6")],
                orientationType: e.orientation && e[An("0xe5")].type,
                devicePixelRatio: window.devicePixelRatio
            };
            return Promise[An("0x5e")](n)
        }
        static[An("0xe7")](e) {
            if (null == e)
                return;
            let t = 0
              , i = 0;
            const n = e.length;
            for (; i < n; )
                t = (t << 5) - t + e[An("0xe8")](i++) | 0;
            return t
        }
        getWindowOuter() {
            const e = {
                outerWidth: window[An("0xe9")],
                outerHeight: window[An("0xea")]
            };
            return Promise[An("0x5e")](e)
        }
        getWebDriver() {
            const e = navigator[An("0xae")];
            return Promise[An("0x5e")](e)
        }
        [An("0x23")]() {
            const e = window[An("0xe5")];
            return Promise[An("0x5e")](e)
        }
        [An("0x24")]() {
            const e = navigator[An("0xce")];
            return Promise[An("0x5e")](e)
        }
        [An("0x25")]() {
            const e = navigator[An("0xeb")];
            return Promise[An("0x5e")](e)
        }
        [An("0x26")]() {
            const e = navigator.oscpu;
            return Promise.resolve(e)
        }
        getAddBehavior() {
            const e = !!window[An("0xec")][An("0xed")][An("0xee")];
            return Promise[An("0x5e")](e)
        }
        [An("0x28")]() {
            const e = navigator[An("0xef")];
            return Promise[An("0x5e")](e)
        }
        async[An("0xf0")]() {
            const e = await navigator.mediaDevices[An("0xf1")]()
              , t = [];
            for (const i of e)
                t[An("0xda")]({
                    kind: i.kind,
                    label: i[An("0xf2")],
                    deviceId: i[An("0xf3")],
                    groupId: i.groupId
                });
            return t
        }
        async getAudioFingerprint() {
            const e = window[An("0xf4")] || window[An("0xf5")];
            if (!e)
                return -1;
            const t = new e(1,5e3,44100)
              , i = t[An("0xf6")]();
            i[An("0xdb")] = An("0xf7"),
            i[An("0xf8")][An("0x4e")] = 1e4;
            const n = t.createDynamicsCompressor();
            n.threshold[An("0x4e")] = -50,
            n[An("0xf9")].value = 40,
            n[An("0xfa")][An("0x4e")] = 12,
            n[An("0xfb")][An("0x4e")] = 0,
            n.release[An("0x4e")] = .25,
            i.connect(n),
            n[An("0xfc")](t[An("0xfd")]),
            i[An("0xfe")](0);
            const r = new Promise((async(e,i)=>{
                t.oncomplete = t=>e(t[An("0xff")]);
                try {
                    await t[An("0x100")]()
                } catch (e) {
                    i(e)
                }
            }
            ))
              , a = (await r).getChannelData(0)[An("0x101")](4500);
            return Sn[An("0x102")](a)
        }
        async[An("0x29")]() {
            var e;
            const t = window[An("0xf4")] || window.webkitOfflineAudioContext;
            if (!t)
                return {};
            const i = new t(1,5e3,44100)
              , n = i[An("0xf6")]();
            n[An("0xdb")] = An("0xf7"),
            n[An("0xf8")][An("0x4e")] = 1e4;
            const r = i[An("0x103")]();
            r[An("0x104")][An("0x4e")] = -50,
            r.knee[An("0x4e")] = 40,
            r.attack[An("0x4e")] = 0;
            const a = i[An("0x105")]();
            n[An("0xfc")](r),
            r[An("0xfc")](a),
            r[An("0xfc")](i[An("0xfd")]),
            n[An("0xfe")](0);
            try {
                await i.startRendering(),
                r[An("0x106")](),
                n.disconnect();
                const t = new Float32Array(a.frequencyBinCount);
                null === (e = a[An("0x107")]) || void 0 === e || e[An("0x108")](a, t);
                const o = new Float32Array(a.fftSize);
                return "getFloatTimeDomainData"in a && a[An("0x109")](o),
                {
                    gain: r[An("0x10a")][An("0x4e")] || r[An("0x10a")],
                    freq: Cn(t),
                    time: Cn(o)
                }
            } catch (e) {
                return {}
            }
        }
        static[An("0x102")](e) {
            let t = 0;
            for (let i = 0; i < e[An("0xd9")]; ++i)
                t += Math[An("0x2")](e[i]);
            return t
        }
        getFonts() {
            const e = [An("0x10b"), "sans-serif", An("0x10c")]
              , t = [An("0x10d"), "ARNO PRO", An("0x10e"), An("0x10f"), An("0x110"), "AvantGarde Bk BT", An("0x111"), An("0x112"), An("0x113"), An("0x114"), An("0x115"), An("0x116"), An("0x117"), An("0x118"), "Franklin Gothic", An("0x119"), An("0x11a"), An("0x11b"), An("0x11c"), An("0x11d"), "Haettenschweiler", "Helvetica Neue", "Humanst521 BT", An("0x11e"), An("0x11f"), "Levenim MT", An("0x120"), An("0x121"), An("0x122"), An("0x123"), "MS Outlook", An("0x124"), An("0x125"), An("0x126"), An("0x127"), An("0x128"), An("0x129"), An("0x12a"), An("0x12b"), An("0x12c"), An("0x12d"), An("0x12e"), An("0x12f"), "Segoe UI Light", An("0x130"), An("0x131"), An("0x132"), An("0x133"), "TRAJAN PRO", An("0x134"), An("0x135"), An("0x136")]
              , i = document[An("0x137")]("div");
            i[An("0x138")][An("0x139")] = "hidden";
            const n = {}
              , r = {}
              , a = e=>{
                const t = document.createElement(An("0x13a"))
                  , {style: n} = t;
                return n.position = "absolute",
                n[An("0x13b")] = "0",
                n[An("0x13c")] = "0",
                n[An("0x13d")] = e,
                n[An("0x13e")] = "10px",
                t.textContent = "mmMwWLliI0O&1",
                i.appendChild(t),
                t
            }
              , o = (e,t)=>a("'" + e + "'," + t)
              , s = e.map(a)
              , l = (()=>{
                const i = {};
                for (const n of t)
                    i[n] = e.map((e=>o(n, e)));
                return i
            }
            )();
            document[An("0x142")].appendChild(i);
            try {
                for (let t = 0; t < e.length; t++)
                    n[e[t]] = s[t][An("0x140")],
                    r[e[t]] = s[t].offsetHeight;
                const i = t.filter((t=>{
                    return i = l[t],
                    e[An("0x13f")](((e,t)=>i[t][An("0x140")] !== n[e] || i[t][An("0x141")] !== r[e]));
                    var i
                }
                ));
                return Promise.resolve(i)
            } finally {
                document.body[An("0x143")](i)
            }
        }
        [An("0x144")]() {
            const e = (new Date)[An("0x144")]();
            return Promise.resolve(e)
        }
        [An("0x1a")]() {
            const e = navigator[An("0x145")];
            return Promise.resolve(e)
        }
        [An("0x19")]() {
            const e = navigator.languages;
            return Promise[An("0x5e")](e)
        }
        getHardwareConcurrency() {
            const e = navigator[An("0xc9")];
            return Promise[An("0x5e")](e)
        }
        [An("0x14")]() {
            const e = navigator.deviceMemory;
            return Promise[An("0x5e")](e)
        }
        [An("0x15")]() {
            return [An("0x82"), "__selenium_evaluate", An("0x146"), An("0x84"), "__webdriver_script_fn", An("0x7d"), "__driver_unwrapped", An("0x85"), "__driver_evaluate", An("0x81"), An("0x7e")][An("0xb9")]((e=>document[e]))
        }
        getTimezone() {
            const e = Intl[An("0x147")]()[An("0x148")]()[An("0x149")];
            return Promise[An("0x5e")](e)
        }
        [An("0x32")]() {
            const e = navigator[An("0x14a")];
            return Promise.resolve(e)
        }
        [An("0x33")]() {
            const e = navigator[An("0x14b")];
            return Promise[An("0x5e")](e)
        }
        async getCanvasFingerprint() {
            const e = document[An("0x137")](An("0x164"));
            e[An("0x158")] = 1,
            e[An("0xe3")] = 1;
            const t = e.getContext("2d")
              , i = {
                winding: function(e) {
                    return e[An("0x163")](0, 0, 10, 10),
                    e[An("0x163")](2, 2, 6, 6),
                    !e.isPointInPath(5, 5, An("0x162"))
                }(t),
                geometry: function(e, t) {
                    e[An("0x158")] = 122,
                    e[An("0xe3")] = 110,
                    t[An("0x159")] = An("0x15a");
                    const i = [[An("0x15b"), 40, 40], [An("0x15c"), 80, 40], [An("0x15d"), 60, 80]];
                    for (const [e,n,r] of i)
                        t[An("0x14c")] = e,
                        t.beginPath(),
                        t[An("0x15e")](n, r, 40, 0, 2 * Math.PI, !0),
                        t[An("0x15f")](),
                        t.fill();
                    return t[An("0x14c")] = An("0x160"),
                    t.arc(60, 60, 60, 0, 2 * Math.PI, !0),
                    t[An("0x15e")](60, 60, 20, 0, 2 * Math.PI, !0),
                    t[An("0x161")](An("0x162")),
                    Sn.hashCodeString(e[An("0x157")]())
                }(e, t),
                text: function(e, t) {
                    e.width = 240,
                    e[An("0xe3")] = 60,
                    t.textBaseline = "alphabetic",
                    t[An("0x14c")] = An("0x14d"),
                    t[An("0x14e")](100, 1, 62, 20),
                    t[An("0x14c")] = An("0x14f"),
                    t[An("0x150")] = An("0x151");
                    const i = An("0x152") + String[An("0x153")](55357, 56835);
                    return t[An("0x154")](i, 2, 15),
                    t[An("0x14c")] = An("0x155"),
                    t[An("0x150")] = An("0x156"),
                    t[An("0x154")](i, 4, 45),
                    Sn[An("0xe7")](e[An("0x157")]())
                }(e, t)
            };
            return Promise.resolve(i)
        }
        async getBattery() {
            const e = await navigator[An("0xe")]();
            return {
                charging: e.charging,
                chargingTime: e[An("0x165")],
                dischargingTime: e[An("0x166")],
                level: e[An("0x167")]
            }
        }
        async[An("0xf")]() {
            return !!navigator[An("0x168")] && await navigator[An("0x168")][An("0x169")]()
        }
        async[An("0x35")]() {
            const e = document[An("0x137")](An("0x164"))
              , t = e[An("0x16a")](An("0x16b")) || e[An("0x16a")](An("0x16c"))
              , i = t[An("0x16d")]("WEBGL_debug_renderer_info");
            return Promise[An("0x5e")](t[An("0x16e")](i.UNMASKED_RENDERER_WEBGL))
        }
        async getCodesTests() {
            const e = document[An("0x137")]("video")
              , t = {
                basic: "" === e[An("0x16f")](An("0x170")),
                advanced: "" === e[An("0x16f")](An("0x171"))
            };
            return Promise[An("0x5e")](t)
        }
        async getCryptoBindingData() {
            const {publicKey: e, keyIdentifier: t} = await this.cryptoBinding[An("0x172")]();
            return {
                publicKey: e,
                keyIdentifier: t
            }
        }
        static isMobile() {
            return /iPhone|iPad|iPod|Android|MiuiBrowser/i[An("0x4c")](navigator.userAgent) || null != window.orientation || window[An("0x173")](An("0x174")).matches
        }
    }
    var In, Tn, Mn = ["TRUST", "compress", "compressed", "uncompressed", "ALLOW", "CHALLENGE", "DENY"];
    In = Mn,
    Tn = 372,
    function(e) {
        for (; --e; )
            In.push(In.shift())
    }(++Tn);
    var zn, Fn, Bn, Rn, On = function(e, t) {
        return Mn[e -= 0]
    };
    class Pn extends Error {
    }
    (Fn = zn || (zn = {}))[On("0x0")] = On("0x1"),
    Fn[On("0x2")] = On("0x2"),
    (Rn = Bn || (Bn = {}))[On("0x3")] = "ALLOW",
    Rn[On("0x4")] = "CHALLENGE",
    Rn[On("0x5")] = On("0x5"),
    Rn.TRUST = On("0x6");
    var Nn, Ln, jn = ["stringify", "RSA-OAEP", "fromCharCode", "btoa", "importPublicKey", "importKey", "parse", "SHA-256", "crypto is not supported", "encryptSymKeyBundle", "configManager", "generateSymKey", "subtle", "generateKey", "AES-GCM", "encrypt", "decrypt", "encryptPayload", "string", "encode", "crypto", "getRandomValues", "arrayBufferToBase64", "exportKey", "raw"];
    Nn = jn,
    Ln = 135,
    function(e) {
        for (; --e; )
            Nn.push(Nn.shift())
    }(++Ln);
    var Un = function(e, t) {
        return jn[e -= 0]
    };
    class qn {
        constructor(e) {
            this[Un("0x0")] = e
        }
        [Un("0x1")]() {
            return window.crypto[Un("0x2")][Un("0x3")]({
                name: Un("0x4"),
                length: 256
            }, !0, [Un("0x5"), Un("0x6")])
        }
        async[Un("0x7")](e, t) {
            const i = typeof e === Un("0x8") ? (new TextEncoder)[Un("0x9")](e) : e
              , n = window[Un("0xa")][Un("0xb")](new Uint8Array(12))
              , r = {
                name: Un("0x4"),
                iv: n
            }
              , a = await window.crypto[Un("0x2")][Un("0x5")](r, t, i);
            return {
                payloadCipherText: this[Un("0xc")](a),
                iv: n
            }
        }
        async encryptSymKeyBundle(e, t, i) {
            const n = await window[Un("0xa")].subtle[Un("0xd")](Un("0xe"), e)
              , r = this[Un("0xc")](n)
              , a = this[Un("0xc")](t)
              , o = (new TextEncoder).encode(JSON[Un("0xf")]({
                symKey: r,
                iv: a
            }))
              , s = await window[Un("0xa")][Un("0x2")][Un("0x5")]({
                name: Un("0x10")
            }, i, o);
            return this.arrayBufferToBase64(s)
        }
        [Un("0xc")](e) {
            let t = "";
            const i = new Uint8Array(e)
              , n = i.byteLength;
            for (let e = 0; e < n; e++)
                t += String[Un("0x11")](i[e]);
            return window[Un("0x12")](t)
        }
        [Un("0x13")](e) {
            return window.crypto.subtle[Un("0x14")]("jwk", JSON[Un("0x15")](e), {
                name: Un("0x10"),
                hash: Un("0x16")
            }, !0, [Un("0x5")])
        }
        async[Un("0x5")](e, t) {
            if (!window[Un("0xa")] || !window[Un("0xa")].subtle)
                throw new Error(Un("0x17"));
            const i = await this[Un("0x1")]()
              , {payloadCipherText: n, iv: r} = await this[Un("0x7")](t, i)
              , a = await this[Un("0x13")](e);
            return {
                encryptedData: n,
                encryptedKey: await this[Un("0x18")](i, r, a)
            }
        }
    }
    var Kn, Hn, Vn = [", errorSpace: ", "errorSpace", "toLog", "CLIENT", "client", "COMMUNICATION", "communication", "error", "message", "name", "toString", "SDKError: "];
    Kn = Vn,
    Hn = 447,
    function(e) {
        for (; --e; )
            Kn.push(Kn.shift())
    }(++Hn);
    var Gn, Jn, Wn = function(e, t) {
        return Vn[e -= 0]
    };
    (Jn = Gn || (Gn = {}))[Wn("0x0")] = Wn("0x1"),
    Jn.SERVER = "server",
    Jn[Wn("0x2")] = Wn("0x3");
    class Zn extends Error {
        constructor(e, t) {
            var i, n;
            super(),
            this[Wn("0x4")] = e,
            this.errorSpace = t,
            this[Wn("0x5")] = (null === (i = this[Wn("0x4")]) || void 0 === i ? void 0 : i[Wn("0x5")]) || this.error.toString(),
            this[Wn("0x6")] = (null === (n = this[Wn("0x4")]) || void 0 === n ? void 0 : n[Wn("0x6")]) || Zn[Wn("0x6")]
        }
        [Wn("0x7")]() {
            return Wn("0x8") + this[Wn("0x5")] + (this.errorSpace ? Wn("0x9") + this[Wn("0xa")] : "")
        }
        [Wn("0xb")]() {
            return i({
                name: this[Wn("0x6")],
                message: this[Wn("0x5")]
            }, this[Wn("0xa")] && {
                errorSpace: this[Wn("0xa")]
            })
        }
    }
    var Qn, $n, Yn = ["compress", "uncompressed", "CLIENT", "compressData", "Failed to compress data, sending the data to the service uncompressed", "getItemLocalStorageSafe", "parseInt", "isNaN", "setItemLocalStorageSafe", "toString", "shouldSendDeviceEvent", "info", "no need to send device event", "getDeviceData", "EVENT_TYPE_DEVICE", "page_load", "includes", "extractWindowRespurces", "location", "href", "referrer", "history", "performance", "getEntriesByType", "resources", "isArray", "name", "initiatorType", "registerEventListeners", "interactionEventsManager", "ddls", "lastDeviceInDeviceEvent", "mouseEventsCollectionBuffer", "deviceEventDataCollectionIgnoreList", "publicKey", "flushBufferSize", "EVENT_TYPE_ACTION", "configManager", "storageManager", "deviceDataManager", "requestsManager", "identityManager", "cryptoBinding", "serverPath", "eventIndex", "EVENT_TYPE_INTERACTION", "emitEvent", "enableSessionToken", "eventsQueue", "crypto", "getConfValue", "safeEventCallback", "isMobile", "index", "increaseEventIndex", "platform", "sdkVersion", "tabId", "timestamp", "now", "enrichUADataIfDoesNotExist", "push", "length", "type", "flush", "error", "Error while emitting event", "getClientId", "toLog", "navigatorHighEntropyData", "attributes", "popAllEvents", "pop", "reverse", "clientId", "getDeviceId", "userId", "getUserId", "sdkPlatform", "events", "getPublicData", "Crypto-binding is not supported. ", "sessionToken", "postData", "device/events", "setDeviceId", "deviceId", "setSessionToken", "buildEncryptedRequestBody", "Encryption error - missing public key", "COMMUNICATION", "stringify", "encrypt"];
    Qn = Yn,
    $n = 309,
    function(e) {
        for (; --e; )
            Qn.push(Qn.shift())
    }(++$n);
    var Xn = function(e, t) {
        return Yn[e -= 0]
    };
    const er = Xn("0x0")
      , tr = Xn("0x1")
      , ir = Xn("0x2")
      , nr = Xn("0x3")
      , rr = Xn("0x4")
      , ar = Xn("0x5")
      , or = [zi[Xn("0x6")], zi.EVENT_TYPE_IDENTIFICATION];
    class sr {
        constructor(e, t, n, r, a, o, s, l) {
            this[Xn("0x7")] = e,
            this[Xn("0x8")] = t,
            this[Xn("0x9")] = n,
            this[Xn("0xa")] = r,
            this[Xn("0xb")] = a,
            this[Xn("0xc")] = o,
            this[Xn("0xd")] = s,
            this.enableSessionToken = l,
            this[Xn("0xe")] = null,
            this.safeEventCallback = async(e,t)=>{
                try {
                    const n = i({}, i({
                        interaction_type: e
                    }, t))
                      , r = {
                        type: zi[Xn("0xf")],
                        attributes: n
                    };
                    return await this[Xn("0x10")](r)
                } catch (e) {}
            }
            ,
            this[Xn("0x11")] = l,
            this[Xn("0x12")] = [],
            this[Xn("0x13")] = new qn(e),
            this.interactionEventsManager = new gn(this[Xn("0x7")][Xn("0x14")](nr, []),this[Xn("0x7")][Xn("0x14")](ir, 100),this[Xn("0x15")]),
            this[Xn("0x16")] = Sn[Xn("0x16")]()
        }
        async[Xn("0x10")](e) {
            var t;
            e[Xn("0x17")] = this[Xn("0x18")](),
            e.location = location.toString(),
            e.platform = navigator[Xn("0x19")],
            e[Xn("0x1a")] = "1.48.0",
            e[Xn("0xd")] = this[Xn("0xd")],
            e[Xn("0x1b")] = this[Xn("0xb")].getTabId(),
            e[Xn("0x1c")] = Date[Xn("0x1d")](),
            await this[Xn("0x1e")](e),
            this[Xn("0x12")][Xn("0x1f")](e);
            const i = this[Xn("0x7")].getConfValue(ar, 2);
            if (this.eventsQueue[Xn("0x20")] >= i || or.includes(e[Xn("0x21")]))
                try {
                    return await this[Xn("0x22")]()
                } catch (i) {
                    throw yi[Xn("0x23")](Xn("0x24"), {
                        clientId: this[Xn("0xb")][Xn("0x25")](),
                        eventType: e[Xn("0x21")],
                        error: (null === (t = i) || void 0 === t ? void 0 : t[Xn("0x26")]()) || i
                    }),
                    i
                }
            return {}
        }
        async enrichUADataIfDoesNotExist(e) {
            var t;
            if (!(null === (t = e.attributes) || void 0 === t ? void 0 : t[Xn("0x27")]))
                try {
                    e[Xn("0x28")][Xn("0x27")] = await xn()
                } catch (e) {}
        }
        [Xn("0x29")]() {
            const e = [];
            for (; this[Xn("0x12")][Xn("0x20")]; )
                e[Xn("0x1f")](this[Xn("0x12")][Xn("0x2a")]());
            return e[Xn("0x2b")]()
        }
        async flush() {
            const e = this.popAllEvents();
            if (0 === e[Xn("0x20")])
                return {};
            const t = {};
            t[Xn("0x2c")] = this[Xn("0xb")][Xn("0x25")](),
            t.deviceId = this[Xn("0xb")][Xn("0x2d")](),
            t[Xn("0x2e")] = this[Xn("0xb")][Xn("0x2f")](),
            t[Xn("0x30")] = this[Xn("0x16")] ? Oi : Ri,
            t[Xn("0x31")] = e;
            try {
                const {keyIdentifier: e} = await this[Xn("0xc")][Xn("0x32")]();
                t.keyIdentifier = e
            } catch (e) {
                yi.warn(Xn("0x33") + e)
            }
            this[Xn("0x11")] && (this.identityManager.getSessionToken() || (t[Xn("0x34")] = !0));
            const i = await this.buildEncryptedRequestBody(t);
            try {
                const e = await this[Xn("0xa")][Xn("0x35")](Xn("0x36"), i);
                return e.deviceId && this[Xn("0xb")][Xn("0x37")](e[Xn("0x38")]),
                e.sessionToken && this.identityManager[Xn("0x39")](e[Xn("0x34")]),
                e
            } catch (e) {
                throw new Zn(e,Gn.SERVER)
            }
        }
        async[Xn("0x3a")](e) {
            const t = this[Xn("0x7")][Xn("0x14")](rr, null);
            if (null === t) {
                const e = new Pn(Xn("0x3b"));
                throw new Zn(e,Gn[Xn("0x3c")])
            }
            try {
                const i = JSON[Xn("0x3d")](e)
                  , n = this.compressData(i)
                  , r = n || i
                  , {encryptedData: a, encryptedKey: o} = await this[Xn("0x13")][Xn("0x3e")](t, r);
                return {
                    data: a,
                    key: o,
                    dataType: n ? zn[Xn("0x3f")] : zn[Xn("0x40")]
                }
            } catch (e) {
                throw new Zn(e,Gn[Xn("0x41")])
            }
        }
        [Xn("0x42")](e) {
            try {
                return ri(e)
            } catch (e) {
                yi.error(Xn("0x43"), {
                    clientId: this[Xn("0xb")][Xn("0x25")](),
                    error: e
                })
            }
        }
        [Xn("0x18")]() {
            if (null === this.eventIndex) {
                const e = this[Xn("0x8")][Xn("0x44")]("rei")
                  , t = Number[Xn("0x45")](e);
                this[Xn("0xe")] = Number[Xn("0x46")](t) ? -1 : t
            }
            return this[Xn("0xe")]++,
            this[Xn("0x8")][Xn("0x47")]("rei", this[Xn("0xe")][Xn("0x48")]()),
            this[Xn("0xe")]
        }
        shouldSendDeviceEvent() {
            const e = this.storageManager[Xn("0x44")](er)
              , t = this[Xn("0x8")].getItemLocalStorageSafe(tr);
            return !e || !t || Date[Xn("0x1d")]() - e > 864e5 || t != this.identityManager[Xn("0x2d")]()
        }
        async sendDeviceDataEvent() {
            if (!this[Xn("0x49")]())
                return yi[Xn("0x4a")](Xn("0x4b")),
                !1;
            const e = await this.deviceDataManager[Xn("0x4c")]()
              , t = {
                type: zi[Xn("0x4d")],
                attributes: e
            }
              , i = await this[Xn("0x10")](t);
            return i && (this[Xn("0x8")][Xn("0x47")](er, Date.now()),
            this[Xn("0x8")][Xn("0x47")](tr, this[Xn("0xb")][Xn("0x2d")]())),
            i
        }
        async sendPageLoadEvent() {
            const e = Xn("0x4e");
            if (this[Xn("0x7")][Xn("0x14")](nr, [])[Xn("0x4f")](e))
                return !1;
            const t = this[Xn("0x50")]();
            return await this[Xn("0x10")]({
                type: zi[Xn("0xf")],
                attributes: i(i({
                    interaction_type: e,
                    location: window[Xn("0x51")][Xn("0x52")],
                    referrer: document[Xn("0x53")]
                }, window.history && {
                    window_historyLength: window[Xn("0x54")][Xn("0x20")]
                }), t && {
                    windowResources: t
                })
            }),
            !0
        }
        extractWindowRespurces() {
            try {
                const e = window[Xn("0x55")][Xn("0x56")](Xn("0x57"));
                return e && Array[Xn("0x58")](e) ? e.map((e=>({
                    name: e[Xn("0x59")],
                    initiatorType: e[Xn("0x5a")]
                }))) : void 0
            } catch (e) {}
        }
        [Xn("0x5b")]() {
            this[Xn("0x5c")][Xn("0x5b")](),
            this[Xn("0xb")][Xn("0x5b")]()
        }
    }
    var lr, cr, ur = ["setClientId", "loadDeviceId", "loadTabId", "addEventListener", "saveTabIdOnUnload", "getDeviceId", "deviceId", "setDeviceId", "info", "Updating DeviceId", "setItemLocalStorageSafe", "getItemSessionStorageSafe", "getItemLocalStorageSafe", "getClientId", "setItemSessionStorageSafe", "getUserId", "configManager", "getConfValue", "now", "setUserId", "userId", "removeUserId", "removeItemSessionStorageSafe", "removeItemLocalStorageSafe", "tabId", "floor", "random", "MAX_SAFE_INTEGER", "toString", "getTabId", "setSessionToken", "sessionToken", "rui", "rci", "rdi", "rdit", "rti", "deviceIdStorageExpiry", "storageManager", "clientId"];
    lr = ur,
    cr = 152,
    function(e) {
        for (; --e; )
            lr.push(lr.shift())
    }(++cr);
    var dr = function(e, t) {
        return ur[e -= 0]
    };
    const hr = dr("0x0")
      , gr = dr("0x1")
      , pr = dr("0x2")
      , fr = dr("0x3")
      , mr = dr("0x4")
      , _r = dr("0x5");
    class xr {
        constructor(e, t, i) {
            this[dr("0x6")] = e,
            this.configManager = t,
            this[dr("0x7")] = i,
            this[dr("0x8")](this.clientId)
        }
        load() {
            this[dr("0x9")](),
            this[dr("0xa")]()
        }
        registerEventListeners() {
            window[dr("0xb")]("beforeunload", (async()=>this[dr("0xc")]()))
        }
        [dr("0xd")]() {
            return this[dr("0xe")]
        }
        [dr("0xf")](e) {
            this.deviceId !== e && (yi[dr("0x10")](dr("0x11"), {
                deviceId: e
            }),
            this[dr("0xe")] = e,
            this.storageManager.setItemSessionStorageSafe(pr, e),
            this[dr("0x6")][dr("0x12")](pr, e))
        }
        [dr("0x9")]() {
            const e = this.storageManager[dr("0x13")](pr) || this[dr("0x6")][dr("0x14")](pr);
            return null != e && this[dr("0xf")](e),
            e
        }
        [dr("0x15")]() {
            return this[dr("0x7")]
        }
        [dr("0x8")](e) {
            this[dr("0x6")].getClientId() != e && this[dr("0x6")][dr("0x8")](e),
            this[dr("0x6")][dr("0x16")](gr, e)
        }
        [dr("0x17")]() {
            if (Number(this[dr("0x6")][dr("0x14")](fr)) + this[dr("0x18")][dr("0x19")](_r, 864e5) < Date[dr("0x1a")]())
                return this.removeUserId(),
                null;
            const e = this.storageManager.getItemSessionStorageSafe(hr);
            return null != e ? e : this[dr("0x6")].getItemLocalStorageSafe(hr)
        }
        [dr("0x1b")](e) {
            this[dr("0x1c")] = e,
            this[dr("0x6")].setItemSessionStorageSafe(hr, e),
            this[dr("0x6")][dr("0x12")](hr, e),
            this.storageManager[dr("0x12")](fr, Date[dr("0x1a")]())
        }
        [dr("0x1d")]() {
            this.storageManager[dr("0x1e")](hr),
            this[dr("0x6")][dr("0x1f")](hr),
            this.storageManager[dr("0x1f")](fr)
        }
        [dr("0xa")]() {
            const e = this[dr("0x6")][dr("0x13")](mr);
            e ? (this[dr("0x6")][dr("0x1e")](mr),
            this[dr("0x20")] = e) : this.tabId = Math[dr("0x21")](Math[dr("0x22")]() * Number[dr("0x23")])[dr("0x24")]()
        }
        [dr("0x25")]() {
            return this[dr("0x20")]
        }
        saveTabIdOnUnload() {
            this[dr("0x6")].setItemSessionStorageSafe(mr, this[dr("0x20")])
        }
        [dr("0x26")](e) {
            this[dr("0x27")] = e
        }
        getSessionToken() {
            return this[dr("0x27")]
        }
    }
    var vr, br, yr = ["status", "statusText", "serverPath", "postData", "postDataFromURL", "fetch", "CLIENT", "include", "stringify", "json", "GET", "SERVER", " returned status "];
    vr = yr,
    br = 246,
    function(e) {
        for (; --e; )
            vr.push(vr.shift())
    }(++br);
    var wr = function(e, t) {
        return yr[e -= 0]
    };
    const Ar = e=>e.url + wr("0x0") + e[wr("0x1")] + " " + e[wr("0x2")];
    class kr {
        constructor(e) {
            this[wr("0x3")] = e
        }
        async[wr("0x4")](e, t) {
            let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            return this[wr("0x5")](this[wr("0x3")] + e, t, i)
        }
        async[wr("0x5")](e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            if (!(wr("0x6")in window))
                throw new Zn("fetch-api is not supported",Gn[wr("0x7")]);
            const r = await fetch(e, {
                method: "POST",
                credentials: wr("0x8"),
                headers: new Headers(i({
                    "Content-Type": "application/json"
                }, n)),
                body: JSON[wr("0x9")](t)
            });
            if (r.ok)
                return await r[wr("0xa")]();
            throw new Zn(new Pn(Ar(r)),Gn.SERVER)
        }
        async getData(e) {
            if (!(wr("0x6")in window))
                throw new Zn("fetch-api is not supported",Gn.CLIENT);
            const t = await fetch(this[wr("0x3")] + e, {
                method: wr("0xb"),
                credentials: wr("0x8")
            });
            if (t.ok)
                return await t.json();
            throw new Zn(new Pn(Ar(t)),Gn[wr("0xc")])
        }
    }
    var Er, Cr, Dr = ["length", "stringify", "REQUIRED_SDK_PARAMS", "string", "info", "throwError", "validateSDKParams", "keys", "filter", "throwOrReturnResult"];
    Er = Dr,
    Cr = 262,
    function(e) {
        for (; --e; )
            Er.push(Er.shift())
    }(++Cr);
    var Sr = function(e, t) {
        return Dr[e -= 0]
    };
    class Ir {
        constructor() {
            this[Sr("0x0")] = {
                clientId: Sr("0x1")
            }
        }
        throwOrReturnResult(e, t, i) {
            if (!e && ((null == t ? void 0 : t.logIfInvalid) && yi[Sr("0x2")](i),
            null == t ? void 0 : t[Sr("0x3")]))
                throw new Error(i);
            return e
        }
        [Sr("0x4")](e, t) {
            const i = Object[Sr("0x5")](this.REQUIRED_SDK_PARAMS)[Sr("0x6")]((t=>typeof e[t] != this[Sr("0x0")][t]));
            return this[Sr("0x7")](0 == i[Sr("0x8")], t, "Invalid SDK params was provided: " + JSON[Sr("0x9")](i))
        }
    }
    var Tr, Mr, zr = ["postData", "device/logs", "requestsManager", "identityManager", "configManager", "lastTimeLogsSent", "logMiddleware", "push", "enableLogsReporting", "logsMinimumBatch", "getConfValue", "logsMinimumDelay", "length", "now", "flush", "getClientId", "floor", "platform"];
    Tr = zr,
    Mr = 182,
    function(e) {
        for (; --e; )
            Tr.push(Tr.shift())
    }(++Mr);
    var Fr = function(e, t) {
        return zr[e -= 0]
    };
    class Br {
        constructor(e, t, i) {
            this[Fr("0x0")] = e,
            this[Fr("0x1")] = t,
            this[Fr("0x2")] = i,
            this[Fr("0x3")] = 0,
            this[Fr("0x4")] = async()=>{
                try {
                    await this.reportLogs()
                } catch (e) {}
            }
            ,
            yi.middlewares[Fr("0x5")](this.logMiddleware)
        }
        async reportLogs() {
            if (!this[Fr("0x2")].getConfValue(Fr("0x6"), !1))
                return;
            const e = this[Fr("0x2")].getConfValue(Fr("0x7"), 6)
              , t = this[Fr("0x2")][Fr("0x8")](Fr("0x9"), 12e4);
            if (yi.logs[Fr("0xa")] < e || this.lastTimeLogsSent + t > Date[Fr("0xb")]())
                return;
            this[Fr("0x3")] = Date.now();
            const i = yi[Fr("0xc")]()
              , n = this[Fr("0x1")][Fr("0xd")]()
              , r = Math[Fr("0xe")](Date[Fr("0xb")]() / 1e3)
              , a = {
                sdkVersion: "1.48.0",
                platform: navigator[Fr("0xf")],
                clientId: n,
                timestamp: r,
                logEntries: i
            };
            await this[Fr("0x0")][Fr("0x10")](Fr("0x11"), a)
        }
    }
    var Rr, Or, Pr = ["deviceId", "storageManager", "setItemLocalStorageSafe", "rimd", "identityManager", "requestsManager", "migrateIdentifiers", "getItemLocalStorageSafe", "true", "getDeviceId", "getClientId", "postDataFromURL"];
    Rr = Pr,
    Or = 303,
    function(e) {
        for (; --e; )
            Rr.push(Rr.shift())
    }(++Or);
    var Nr = function(e, t) {
        return Pr[e -= 0]
    };
    const Lr = Nr("0x0");
    class jr {
        constructor(e, t, i) {
            this[Nr("0x1")] = e,
            this[Nr("0x2")] = t,
            this.storageManager = i
        }
        async[Nr("0x3")](e) {
            if (this.storageManager[Nr("0x4")](Lr) != Nr("0x5")) {
                const t = this[Nr("0x1")][Nr("0x6")]()
                  , i = this[Nr("0x1")][Nr("0x7")]()
                  , n = (e.endsWith("/") ? e : e + "/") + "device/migrate-identifiers"
                  , r = await this[Nr("0x2")][Nr("0x8")](n, {
                    deviceId: t,
                    clientId: i
                });
                r.deviceId && r[Nr("0x9")] == t && this[Nr("0xa")][Nr("0xb")](Lr, "true")
            }
        }
    }
    var Ur, qr, Kr = ["RiskIDReady", "dispatchEvent", "TSAccountProtectionReady", "undefined", "sdkEnabled", "enableIdentifiersMigration", "verbose", "actions", "https://collect.riskid.security/", "isSDKDisabled", "enableSessionToken", "identifiersMigrationEnabled", "firstPartyMigrationUrl", "validationManager", "SDK already initialized", "initializedInstance", "string", "options", "serverPath", "toString", "validateSDKParams", "initialize", "clientId", "storageManager", "crypto", "configManager", "requestsManager", "identityManager", "deviceDataManager", "cryptoBinding", "load", "migrationsManager", "eventsManager", "logsReporter", "getConfValue", "getActions", "isInitialized", "getSessionToken", "init", "object", "userId", "sdk init started", "initializationPromise", "refreshConf", "getClientId", "enabled", "sendDeviceDataEvent", "sendPageLoadEvent", "catch", "updateUserId", "registerEventListeners", "flush", "info", "triggerActionEvent", "now", "SDK disabled", "disabled_sdk_", "includes", "Invalid action type", "invalid_action_type_", "getDeviceData", "EVENT_TYPE_ACTION", "correlationId", "claimedUserId", "publicKey", "extensionMetadata", "extensionDeviceAttributes", "suspiciousSignals", "suspiciousContext", "downloadFile", "transactionData", "emitEvent", "Unhandled SDK error", "CLIENT", "errorSpace", "_error_", "identifyUser", "identifyUser called without a valid userid", "getUserId", "setUserId", "unidentifiedUser", "unidentifyUser called without set user", "removeUserId", "EVENT_TYPE_IDENTIFICATION", "deviceId", "setUser", "clearUser", "RiskID", "TSAccountProtection"];
    Ur = Kr,
    qr = 448,
    function(e) {
        for (; --e; )
            Ur.push(Ur.shift())
    }(++qr);
    var Hr = function(e, t) {
        return Kr[e -= 0]
    };
    const Vr = [null, void 0, Hr("0x0"), "", 0]
      , Gr = Hr("0x1")
      , Jr = Hr("0x2")
      , Wr = Hr("0x3")
      , Zr = Hr("0x4")
      , Qr = Hr("0x5");
    class $r {
        constructor(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            var i;
            if (this.initializationPromise = null,
            this[Hr("0x6")] = !1,
            this[Hr("0x7")] = !1,
            this[Hr("0x8")] = !1,
            this[Hr("0x9")] = null,
            this[Hr("0xa")] = new Ir,
            $r.initializedInstance)
                throw new Error(Hr("0xb"));
            $r[Hr("0xc")] = !0;
            const n = typeof t === Hr("0xd");
            this.clientId = n ? t : e,
            this.options = n ? {
                serverPath: e
            } : t,
            (i = this[Hr("0xe")])[Hr("0xf")] || (i[Hr("0xf")] = Qr),
            this[Hr("0xe")][Hr("0xf")] = new URL(this[Hr("0xe")][Hr("0xf")])[Hr("0x10")](),
            this.firstPartyMigrationUrl = this[Hr("0xe")][Hr("0x9")] || null,
            yi.enabled = !!this[Hr("0xe")][Hr("0x3")],
            this[Hr("0xa")][Hr("0x11")](this, {
                throwError: !0,
                logIfInvalid: !0
            }) || (this[Hr("0x6")] = !0),
            this[Hr("0x14")] = new fi(this[Hr("0x13")]),
            this.cryptoBinding = hi[Hr("0x15")].createCryptoBinding("sign"),
            this.requestsManager = new kr(this[Hr("0xe")].serverPath),
            this[Hr("0x16")] = new Si(this[Hr("0x14")],this[Hr("0x17")]),
            this[Hr("0x18")] = new xr(this[Hr("0x14")],this.configManager,this[Hr("0x13")]),
            this[Hr("0x19")] = new Dn(this[Hr("0x14")],this[Hr("0x16")],this[Hr("0x1a")]),
            this[Hr("0x18")][Hr("0x1b")](),
            this[Hr("0x1c")] = new jr(this.identityManager,this[Hr("0x17")],this.storageManager),
            this.enableSessionToken = this[Hr("0xe")][Hr("0x7")] || !1,
            this[Hr("0x1d")] = new sr(this.configManager,this[Hr("0x14")],this[Hr("0x19")],this.requestsManager,this[Hr("0x18")],this[Hr("0x1a")],this.options[Hr("0xf")],this[Hr("0x7")]),
            this[Hr("0x1e")] = new Br(this.requestsManager,this[Hr("0x18")],this[Hr("0x16")])
        }
        get actions() {
            return this[Hr("0x16")][Hr("0x1f")](Zr, [])
        }
        async[Hr("0x20")]() {
            return await this[Hr("0x21")](),
            this[Hr("0x4")]
        }
        async[Hr("0x22")]() {
            if (!this[Hr("0x7")])
                throw new Error("Session token is not enabled");
            return await this.isInitialized(),
            this[Hr("0x18")][Hr("0x22")]()
        }
        async[Hr("0x23")](e) {
            const t = typeof e !== Hr("0x24") ? e : null == e ? void 0 : e[Hr("0x25")];
            return yi.info(Hr("0x26")),
            this[Hr("0x27")] = (async()=>(await this[Hr("0x16")][Hr("0x28")](this[Hr("0x18")][Hr("0x29")]()),
            this[Hr("0x6")] = this[Hr("0x6")] || !this.configManager[Hr("0x1f")](Gr, !1),
            !this[Hr("0x6")] && (this[Hr("0x8")] = this[Hr("0x8")] || this[Hr("0x16")].getConfValue(Jr, !1),
            this.identifiersMigrationEnabled && this[Hr("0x9")] && await this[Hr("0x1c")].migrateIdentifiers(this[Hr("0x9")]),
            yi[Hr("0x2a")] = yi.enabled || !!this[Hr("0x16")][Hr("0x1f")](Wr, !1),
            await this[Hr("0x1d")][Hr("0x2b")]().catch((()=>{}
            )),
            await this[Hr("0x1d")][Hr("0x2c")]()[Hr("0x2d")]((()=>{}
            )),
            await this[Hr("0x2e")](t)[Hr("0x2d")]((()=>{}
            )),
            this[Hr("0x1d")][Hr("0x2f")](),
            await this[Hr("0x1d")][Hr("0x30")](),
            yi[Hr("0x31")]("sdk init done"),
            !0)))(),
            await this.initializationPromise
        }
        async[Hr("0x21")]() {
            return null !== this.initializationPromise && await this[Hr("0x27")]
        }
        async[Hr("0x32")](e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            var n;
            const r = Date[Hr("0x33")]();
            if (!await this[Hr("0x21")]())
                return yi.info(Hr("0x34")),
                {
                    actionToken: Hr("0x35") + r
                };
            if (!this[Hr("0x4")][Hr("0x36")](e))
                return yi.warn(Hr("0x37"), {
                    actionType: e
                }),
                {
                    actionToken: Hr("0x38") + e + "_" + r
                };
            let a;
            this.configManager[Hr("0x1f")]("enableDeviceAttributesInActions", !1) && (a = await this[Hr("0x19")][Hr("0x39")]());
            const o = {
                type: zi[Hr("0x3a")],
                attributes: i(i(i(i(i(i(i(i(i(i(i({
                    action_type: e
                }, (null == t ? void 0 : t.correlationId) && {
                    correlation_id: t[Hr("0x3b")]
                }), (null == t ? void 0 : t[Hr("0x3c")]) && {
                    claimed_user_id: t[Hr("0x3c")]
                }), (null == t ? void 0 : t[Hr("0x3d")]) && {
                    public_key: t[Hr("0x3d")]
                }), (null == t ? void 0 : t.extensionMetadata) && {
                    extension_metadata: t[Hr("0x3e")]
                }), (null == t ? void 0 : t[Hr("0x3f")]) && {
                    extension_device_attributes: t.extensionDeviceAttributes
                }), (null == t ? void 0 : t[Hr("0x40")]) && {
                    suspicious_signals: t.suspiciousSignals
                }), (null == t ? void 0 : t[Hr("0x41")]) && {
                    suspicious_context: t[Hr("0x41")]
                }), (null == t ? void 0 : t[Hr("0x42")]) && {
                    download_file: t[Hr("0x42")]
                }), (null == t ? void 0 : t.uploadFile) && {
                    upload_file: t.uploadFile
                }), (null == t ? void 0 : t.transactionData) && {
                    transactionData: t[Hr("0x43")]
                }), a)
            };
            try {
                const e = await this.eventsManager[Hr("0x44")](o)
                  , {actionToken: t} = e;
                if (!t)
                    throw new Zn(Hr("0x45"),Gn[Hr("0x46")]);
                return e
            } catch (t) {
                return {
                    actionToken: ((null === (n = t) || void 0 === n ? void 0 : n[Hr("0x47")]) || Gn[Hr("0x46")]) + Hr("0x48") + e + "_" + r
                }
            }
        }
        async[Hr("0x49")](e) {
            return await this.isInitialized() ? this.updateUserId(e) : (yi[Hr("0x31")](Hr("0x34")),
            !1)
        }
        async[Hr("0x2e")](e) {
            if (Vr[Hr("0x36")](e))
                return yi[Hr("0x31")](Hr("0x4a"), {
                    userId: e
                }),
                !1;
            e = e[Hr("0x10")](),
            yi[Hr("0x31")](Hr("0x49"), {
                userId: e
            });
            const t = this[Hr("0x18")][Hr("0x4b")]();
            return t === e || (this.identityManager[Hr("0x4c")](e),
            !!(await this[Hr("0x1d")][Hr("0x44")]({
                type: zi.EVENT_TYPE_IDENTIFICATION,
                attributes: {
                    previous_user_id: t,
                    user_id: e
                }
            })).deviceId)
        }
        async[Hr("0x4d")]() {
            if (!await this.isInitialized())
                return yi.info(Hr("0x34")),
                !1;
            const e = this[Hr("0x18")][Hr("0x4b")]();
            return null == e ? (yi[Hr("0x31")](Hr("0x4e")),
            !0) : (this[Hr("0x18")][Hr("0x4f")](),
            !!(await this[Hr("0x1d")][Hr("0x44")]({
                type: zi[Hr("0x50")],
                attributes: {
                    previous_user_id: e
                }
            }))[Hr("0x51")])
        }
        async setAuthenticatedUser(e) {
            return await this[Hr("0x49")](e)
        }
        async[Hr("0x52")](e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            return await this.setAuthenticatedUser(e, t)
        }
        async[Hr("0x53")]() {
            return await this[Hr("0x4d")]()
        }
    }
    $r.initializedInstance = !1,
    document[Hr("0x57")](new CustomEvent(Hr("0x58")));
    var Yr, Xr, ea = ["flush", "events", "MODULE_INITIALIZED", "moduleMetadata", "getInitConfig", "init", "utils", "exceptions", "not_initialized", "tsPlatform not initialized", "setUser", "setAuthenticatedUser", "clearUser", "identifyUser", "getActions", "identityManager", "getDeviceId", "getClientId", "eventsManager"];
    Yr = ea,
    Xr = 381,
    function(e) {
        for (; --e; )
            Yr.push(Yr.shift())
    }(++Xr);
    var ta = function(e, t) {
        return ea[e -= 0]
    };
    let ia = null;
    function na(e) {
        if (!e)
            throw new (hi[ta("0x5")][ta("0x6")].TsError)(ta("0x7"),ta("0x8"))
    }
    hi[ta("0x0")].on(hi[ta("0x0")][ta("0x1")], (()=>{
        const {clientId: e, drs: t} = hi[ta("0x2")][ta("0x3")]()
          , i = t || {}
          , {enabled: n, userId: r} = i
          , o = a(i, ai);
        !1 !== n && (ia = new $r(e,o),
        ia[ta("0x4")]({
            userId: r
        }))
    }
    ));
    const ra = function() {
        return na(ia),
        ia.getSessionToken()
    }
      , aa = {
        getDeviceId: ()=>ia[ta("0xe")][ta("0xf")](),
        getClientId: ()=>ia[ta("0xe")][ta("0x10")](),
        flush: ()=>ia[ta("0x11")][ta("0x12")]()
    };
    var oa = Object.freeze({
        __proto__: null,
        __internal: aa,
        clearUser: function() {
            return na(ia),
            ia[ta("0xb")](...arguments)
        },
        getActions: function() {
            return na(ia),
            ia[ta("0xd")]()
        },
        getSessionToken: ra,
        identifyUser: function() {
            return na(ia),
            ia[ta("0xc")](...arguments)
        },
        setAuthenticatedUser: function() {
            return na(ia),
            ia[ta("0xa")](...arguments)
        },
        setUser: function() {
            return na(ia),
            ia[ta("0x9")](...arguments)
        },
        triggerActionEvent: function() {
            return na(ia),
            ia.triggerActionEvent(...arguments)
        },
        unidentifiedUser: function() {
            return na(ia),
            ia.unidentifiedUser(...arguments)
        }
    });
    const sa = new Z("idv")
      , la = Symbol()
      , ca = Symbol()
      , ua = "verify-id-sdk";
    function da(e) {
        return sessionStorage.getItem(e)
    }
    const ha = new Map;
    function ga(e, t) {
        const i = ha.get(e);
        sa.events.emit(i, t)
    }
    function pa(e) {
        ga(la, e)
    }
    function fa(e, t, i, n, r) {
        pa({
            type: "verification-result",
            status: t,
            step: e,
            state: n,
            callbackUrl: r,
            sessionId: i
        })
    }
    function ma(e, t) {
        pa({
            type: "capture-error",
            errorCode: t,
            step: e
        })
    }
    ha.set(la, la),
    ha.set(ca, ca);
    class _a extends Error {
        constructor(e, t, i) {
            super(i),
            this.name = "ApiError",
            this.url = t.url,
            this.status = t.status,
            this.statusText = t.statusText,
            this.body = t.body,
            this.request = e
        }
    }
    const xa = {
        BASE: window.location.origin,
        VERSION: "",
        WITH_CREDENTIALS: !1,
        CREDENTIALS: "include",
        TOKEN: void 0,
        USERNAME: void 0,
        PASSWORD: void 0,
        HEADERS: void 0,
        ENCODE_PATH: void 0
    };
    var va, ba, ya, wa;
    !function(e) {
        var t;
        (t = e.feedback || (e.feedback = {})).OK = "ok",
        t.OTHER = "other",
        t.DOCUMENT_NOT_FOUND = "document_not_found",
        t.FACE_NOT_FOUND = "face_not_found",
        t.DOCUMENT_FACE_NOT_FOUND = "document_face_not_found",
        t.OBSTRUCTED = "obstructed",
        t.BLUR = "blur",
        t.GLARE = "glare",
        t.DOCUMENT_NOT_SUPPORTED = "document_not_supported",
        t.DOCUMENT_NOT_MATCHING = "document_not_matching",
        t.WRONG_DOCUMENT_SIDE = "wrong_document_side",
        t.GLARE_SELFIE = "glare_selfie",
        t.BLUR_SELFIE = "blur_selfie",
        t.MULTI_FACE = "multi_face",
        t.FACE_ROTATED = "face_rotated",
        t.FACE_TOO_SMALL = "face_too_small",
        t.FACE_TOO_CLOSE = "face_too_close",
        t.CLOSED_EYES = "closed_eyes",
        t.FACE_ANGLE_TOO_LARGE = "face_angle_too_large",
        t.FACE_CLOSE_TO_BORDER = "face_close_to_border",
        t.FACE_OCCLUDED = "face_occluded",
        t.FACE_CROPPED = "face_cropped",
        t.NO_FACE = "no_face",
        t.BARCODE_NOT_FOUND = "barcode_not_found",
        t.RESTRICTED_CRITERIA = "restricted_criteria"
    }(va || (va = {})),
    function(e) {
        var t;
        (t = e.image_type || (e.image_type = {})).DOCUMENT_FRONT = "document_front",
        t.DOCUMENT_BACK = "document_back",
        t.SELFIE = "selfie"
    }(ba || (ba = {})),
    function(e) {
        var t, i;
        (t = e.status || (e.status = {})).PENDING = "pending",
        t.CAPTURING = "capturing",
        t.PROCESSING = "processing",
        t.RECAPTURE = "recapture",
        t.COMPLETE = "complete",
        t.ERROR = "error",
        (i = e.recapture_reason || (e.recapture_reason = {})).IMAGE_MISSING = "image_missing",
        i.DOCUMENT_EXPIRED = "document_expired",
        i.DOCUMENT_NOT_SUPPORTED = "document_not_supported",
        i.DOCUMENT_DAMAGED = "document_damaged",
        i.POOR_IMAGE_QUALITY = "poor_image_quality",
        i.DOCUMENT_NOT_FOUND = "document_not_found",
        i.OBSTRUCTED = "obstructed",
        i.BLUR = "blur",
        i.GLARE = "glare",
        i.DOCUMENT_NOT_MATCHING = "document_not_matching",
        i.WRONG_DOCUMENT_SIDE = "wrong_document_side",
        i.FACE_NOT_FOUND = "face_not_found",
        i.DOCUMENT_FACE_NOT_FOUND = "document_face_not_found",
        i.INVALID_INPUT = "invalid_input",
        i.GLARE_SELFIE = "glare_selfie",
        i.BLUR_SELFIE = "blur_selfie",
        i.MULTI_FACE = "multi_face",
        i.FACE_ROTATED = "face_rotated",
        i.FACE_TOO_SMALL = "face_too_small",
        i.FACE_TOO_CLOSE = "face_too_close",
        i.CLOSED_EYES = "closed_eyes",
        i.FACE_ANGLE_TOO_LARGE = "face_angle_too_large",
        i.FACE_CLOSE_TO_BORDER = "face_close_to_border",
        i.FACE_OCCLUDED = "face_occluded",
        i.FACE_CROPPED = "face_cropped",
        i.NO_FACE = "no_face",
        i.BARCODE_NOT_FOUND = "barcode_not_found"
    }(ya || (ya = {})),
    function(e) {
        var t;
        (t = e.client_type || (e.client_type = {})).HOSTED_APP = "hosted_app",
        t.MOBILE_SDK = "mobile_sdk"
    }(wa || (wa = {}));
    var Aa = {
        setStep(e, t) {
            e.commit("setStep", t)
        },
        setSessionId(e, t) {
            e.commit("setSessionId", t)
        },
        setServerPath(e, t) {
            e.commit("setServerPath", t)
        },
        setStartToken(e, t) {
            e.commit("setStartToken", t)
        },
        setRootElement(e, t) {
            e.commit("setRootElement", t)
        },
        setLanguage(e, t) {
            e.commit("setLanguage", t)
        },
        setCallback(e, t) {
            e.commit("setCallback", t)
        },
        setUserToken(e, t) {
            e.commit("setUserToken", t)
        },
        setConsentVersion(e, t) {
            e.commit("setConsentVersion", t)
        },
        setMissingImages(e, t) {
            e.commit("setMissingImages", t)
        },
        setClientId(e, t) {
            e.commit("setClientId", t)
        },
        setStatus(e, t) {
            e.commit("setStatus", t)
        },
        setMarkdownSupportText(e, t) {
            e.commit("setMarkdownSupportText", t)
        },
        setVideoCaptureSettings(e, t) {
            e.commit("setVideoCaptureSettings", t)
        }
    }
      , ka = {
        setStep: (e,t)=>(e.step = t,
        e),
        setSessionId: (e,t)=>(e.sessionId = t,
        e),
        setServerPath: (e,t)=>(e.serverPath = t,
        e),
        setStartToken: (e,t)=>(e.startToken = t,
        e),
        setRootElement: (e,t)=>(e.rootElementId = t,
        e),
        setLanguage: (e,t)=>(e.language = t,
        e),
        setCallback: (e,t)=>(e.callback = t,
        e),
        setUserToken: (e,t)=>(e.userToken = t,
        e),
        setConsentVersion: (e,t)=>(e.consentVersion = t,
        e),
        setMissingImages: (e,t)=>(e.missingImages = t,
        e),
        setClientId: (e,t)=>(e.clientId = t,
        e),
        setStatus: (e,t)=>(e.verificationStatus = t,
        e),
        setMarkdownSupportText: (e,t)=>(e.markdownSupportText = t,
        e),
        setVideoCaptureSettings: (e,t)=>(e.videoCaptureSettings = t,
        e)
    };
    const Ea = new class {
        constructor(e) {
            this.actions = {},
            this.mutations = {},
            this.state = {},
            this.status = "resting",
            Object.prototype.hasOwnProperty.call(e, "actions") && (this.actions = e.actions),
            Object.prototype.hasOwnProperty.call(e, "mutations") && (this.mutations = e.mutations);
            const t = this;
            this.state = new Proxy(e.state || {},{
                get: function(e, t) {
                    return e[t]
                },
                set: function(e, i, n) {
                    return e[i] = n,
                    ga(ca, {
                        key: i,
                        state: e
                    }),
                    "mutation" !== t.status && console.warn("You should use a mutation to set ".concat(String(i))),
                    t.status = "resting",
                    !0
                }
            })
        }
        dispatch(e, t) {
            return "function" != typeof this.actions[e] ? (console.error('Action "'.concat(e, " doesn't exist.")),
            !1) : (this.status = "action",
            this.actions[e](this, t),
            !0)
        }
        commit(e, t) {
            if ("function" != typeof this.mutations[e])
                return console.info('Mutation "'.concat(e, "\" doesn't exist")),
                !1;
            this.status = "mutation";
            const i = this.mutations[e](this.state, t);
            return this.state = i,
            !0
        }
    }
    ({
        actions: Aa,
        mutations: ka,
        state: {
            step: "",
            sessionId: "",
            serverPath: "",
            startToken: "",
            rootElementId: "",
            language: "en",
            callback: ()=>null,
            userToken: "",
            missingImages: [],
            consentVersion: "",
            clientId: "",
            verificationStatus: "pending",
            markdownSupportText: ""
        }
    });
    const Ca = new class {
        createUploadImageEvent(e, t, i, n) {
            return {
                event_type: "upload_image",
                upload_image_req: {
                    process_result: "success",
                    image_type: e,
                    request_total_time_ms: String(t),
                    request_processing_time_ms: String(i),
                    request_build_time_ms: String(n)
                }
            }
        }
        createPageViewEvent(e) {
            return {
                event_type: "page_view",
                page_view_req: {
                    page_name: e
                }
            }
        }
        createProcessingCompleteEvent() {
            return {
                event_type: "processing_complete",
                processing_complete_req: {
                    status: "complete"
                }
            }
        }
        createUserActionEvent(e, t) {
            return {
                event_type: "user_action",
                user_action_req: {
                    user_action_type: e,
                    page_name: t
                }
            }
        }
        createCameraNotAllowedEvent(e, t) {
            return {
                event_type: "error",
                error_req: {
                    error_name: "camera_not_allowed",
                    error_description: e,
                    step: t
                }
            }
        }
        createDrsInitFailureEvent(e, t) {
            return {
                event_type: "error",
                error_req: {
                    error_name: "missing_drs_action_token",
                    error_description: e,
                    step: t
                }
            }
        }
    }
    ;
    var Da = {}
      , Sa = {
        get exports() {
            return Da
        },
        set exports(e) {
            Da = e
        }
    };
    !function(e, t) {
        !function(i, n) {
            var r = "function"
              , a = "undefined"
              , o = "object"
              , s = "string"
              , l = "major"
              , c = "model"
              , u = "name"
              , d = "type"
              , h = "vendor"
              , g = "version"
              , p = "architecture"
              , f = "console"
              , m = "mobile"
              , _ = "tablet"
              , x = "smarttv"
              , v = "wearable"
              , b = "embedded"
              , y = "Amazon"
              , w = "Apple"
              , A = "ASUS"
              , k = "BlackBerry"
              , E = "Browser"
              , C = "Chrome"
              , D = "Firefox"
              , S = "Google"
              , I = "Huawei"
              , T = "LG"
              , M = "Microsoft"
              , z = "Motorola"
              , F = "Opera"
              , B = "Samsung"
              , R = "Sharp"
              , O = "Sony"
              , P = "Xiaomi"
              , N = "Zebra"
              , L = "Facebook"
              , j = "Chromium OS"
              , U = "Mac OS"
              , q = function(e) {
                for (var t = {}, i = 0; i < e.length; i++)
                    t[e[i].toUpperCase()] = e[i];
                return t
            }
              , K = function(e, t) {
                return typeof e === s && -1 !== H(t).indexOf(H(e))
            }
              , H = function(e) {
                return e.toLowerCase()
            }
              , V = function(e, t) {
                if (typeof e === s)
                    return e = e.replace(/^\s\s*/, ""),
                    typeof t === a ? e : e.substring(0, 500)
            }
              , G = function(e, t) {
                for (var i, a, s, l, c, u, d = 0; d < t.length && !c; ) {
                    var h = t[d]
                      , g = t[d + 1];
                    for (i = a = 0; i < h.length && !c && h[i]; )
                        if (c = h[i++].exec(e))
                            for (s = 0; s < g.length; s++)
                                u = c[++a],
                                typeof (l = g[s]) === o && l.length > 0 ? 2 === l.length ? typeof l[1] == r ? this[l[0]] = l[1].call(this, u) : this[l[0]] = l[1] : 3 === l.length ? typeof l[1] !== r || l[1].exec && l[1].test ? this[l[0]] = u ? u.replace(l[1], l[2]) : n : this[l[0]] = u ? l[1].call(this, u, l[2]) : n : 4 === l.length && (this[l[0]] = u ? l[3].call(this, u.replace(l[1], l[2])) : n) : this[l] = u || n;
                    d += 2
                }
            }
              , J = function(e, t) {
                for (var i in t)
                    if (typeof t[i] === o && t[i].length > 0) {
                        for (var r = 0; r < t[i].length; r++)
                            if (K(t[i][r], e))
                                return "?" === i ? n : i
                    } else if (K(t[i], e))
                        return "?" === i ? n : i;
                return e
            }
              , W = {
                ME: "4.90",
                "NT 3.11": "NT3.51",
                "NT 4.0": "NT4.0",
                2e3: "NT 5.0",
                XP: ["NT 5.1", "NT 5.2"],
                Vista: "NT 6.0",
                7: "NT 6.1",
                8: "NT 6.2",
                8.1: "NT 6.3",
                10: ["NT 6.4", "NT 10.0"],
                RT: "ARM"
            }
              , Z = {
                browser: [[/\b(?:crmo|crios)\/([\w\.]+)/i], [g, [u, "Chrome"]], [/edg(?:e|ios|a)?\/([\w\.]+)/i], [g, [u, "Edge"]], [/(opera mini)\/([-\w\.]+)/i, /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i, /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i], [u, g], [/opios[\/ ]+([\w\.]+)/i], [g, [u, F + " Mini"]], [/\bop(?:rg)?x\/([\w\.]+)/i], [g, [u, F + " GX"]], [/\bopr\/([\w\.]+)/i], [g, [u, F]], [/\bb[ai]*d(?:uhd|[ub]*[aekoprswx]{5,6})[\/ ]?([\w\.]+)/i], [g, [u, "Baidu"]], [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i, /(avant|iemobile|slim)\s?(?:browser)?[\/ ]?([\w\.]*)/i, /(?:ms|\()(ie) ([\w\.]+)/i, /(flock|rockmelt|midori|epiphany|silk|skyfire|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|qq|duckduckgo)\/([-\w\.]+)/i, /(heytap|ovi)browser\/([\d\.]+)/i, /(weibo)__([\d\.]+)/i], [u, g], [/\bddg\/([\w\.]+)/i], [g, [u, "DuckDuckGo"]], [/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i], [g, [u, "UC" + E]], [/microm.+\bqbcore\/([\w\.]+)/i, /\bqbcore\/([\w\.]+).+microm/i, /micromessenger\/([\w\.]+)/i], [g, [u, "WeChat"]], [/konqueror\/([\w\.]+)/i], [g, [u, "Konqueror"]], [/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i], [g, [u, "IE"]], [/ya(?:search)?browser\/([\w\.]+)/i], [g, [u, "Yandex"]], [/slbrowser\/([\w\.]+)/i], [g, [u, "Smart Lenovo " + E]], [/(avast|avg)\/([\w\.]+)/i], [[u, /(.+)/, "$1 Secure " + E], g], [/\bfocus\/([\w\.]+)/i], [g, [u, D + " Focus"]], [/\bopt\/([\w\.]+)/i], [g, [u, F + " Touch"]], [/coc_coc\w+\/([\w\.]+)/i], [g, [u, "Coc Coc"]], [/dolfin\/([\w\.]+)/i], [g, [u, "Dolphin"]], [/coast\/([\w\.]+)/i], [g, [u, F + " Coast"]], [/miuibrowser\/([\w\.]+)/i], [g, [u, "MIUI " + E]], [/fxios\/([-\w\.]+)/i], [g, [u, D]], [/\bqihu|(qi?ho?o?|360)browser/i], [[u, "360 " + E]], [/(oculus|sailfish|huawei|vivo)browser\/([\w\.]+)/i], [[u, /(.+)/, "$1 " + E], g], [/samsungbrowser\/([\w\.]+)/i], [g, [u, B + " Internet"]], [/(comodo_dragon)\/([\w\.]+)/i], [[u, /_/g, " "], g], [/metasr[\/ ]?([\d\.]+)/i], [g, [u, "Sogou Explorer"]], [/(sogou)mo\w+\/([\d\.]+)/i], [[u, "Sogou Mobile"], g], [/(electron)\/([\w\.]+) safari/i, /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i, /m?(qqbrowser|2345Explorer)[\/ ]?([\w\.]+)/i], [u, g], [/(lbbrowser)/i, /\[(linkedin)app\]/i], [u], [/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i], [[u, L], g], [/(Klarna)\/([\w\.]+)/i, /(kakao(?:talk|story))[\/ ]([\w\.]+)/i, /(naver)\(.*?(\d+\.[\w\.]+).*\)/i, /safari (line)\/([\w\.]+)/i, /\b(line)\/([\w\.]+)\/iab/i, /(alipay)client\/([\w\.]+)/i, /(twitter)(?:and| f.+e\/([\w\.]+))/i, /(chromium|instagram|snapchat)[\/ ]([-\w\.]+)/i], [u, g], [/\bgsa\/([\w\.]+) .*safari\//i], [g, [u, "GSA"]], [/musical_ly(?:.+app_?version\/|_)([\w\.]+)/i], [g, [u, "TikTok"]], [/headlesschrome(?:\/([\w\.]+)| )/i], [g, [u, C + " Headless"]], [/ wv\).+(chrome)\/([\w\.]+)/i], [[u, C + " WebView"], g], [/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i], [g, [u, "Android " + E]], [/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i], [u, g], [/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i], [g, [u, "Mobile Safari"]], [/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i], [g, u], [/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i], [u, [g, J, {
                    "1.0": "/8",
                    1.2: "/1",
                    1.3: "/3",
                    "2.0": "/412",
                    "2.0.2": "/416",
                    "2.0.3": "/417",
                    "2.0.4": "/419",
                    "?": "/"
                }]], [/(webkit|khtml)\/([\w\.]+)/i], [u, g], [/(navigator|netscape\d?)\/([-\w\.]+)/i], [[u, "Netscape"], g], [/mobile vr; rv:([\w\.]+)\).+firefox/i], [g, [u, D + " Reality"]], [/ekiohf.+(flow)\/([\w\.]+)/i, /(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i, /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i, /(firefox)\/([\w\.]+)/i, /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i, /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i, /(links) \(([\w\.]+)/i, /panasonic;(viera)/i], [u, g], [/(cobalt)\/([\w\.]+)/i], [u, [g, /master.|lts./, ""]]],
                cpu: [[/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i], [[p, "amd64"]], [/(ia32(?=;))/i], [[p, H]], [/((?:i[346]|x)86)[;\)]/i], [[p, "ia32"]], [/\b(aarch64|arm(v?8e?l?|_?64))\b/i], [[p, "arm64"]], [/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i], [[p, "armhf"]], [/windows (ce|mobile); ppc;/i], [[p, "arm"]], [/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i], [[p, /ower/, "", H]], [/(sun4\w)[;\)]/i], [[p, "sparc"]], [/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i], [[p, H]]],
                device: [[/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i], [c, [h, B], [d, _]], [/\b((?:s[cgp]h|gt|sm)-\w+|sc[g-]?[\d]+a?|galaxy nexus)/i, /samsung[- ]([-\w]+)/i, /sec-(sgh\w+)/i], [c, [h, B], [d, m]], [/(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i], [c, [h, w], [d, m]], [/\((ipad);[-\w\),; ]+apple/i, /applecoremedia\/[\w\.]+ \((ipad)/i, /\b(ipad)\d\d?,\d\d?[;\]].+ios/i], [c, [h, w], [d, _]], [/(macintosh);/i], [c, [h, w]], [/\b(sh-?[altvz]?\d\d[a-ekm]?)/i], [c, [h, R], [d, m]], [/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i], [c, [h, I], [d, _]], [/(?:huawei|honor)([-\w ]+)[;\)]/i, /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i], [c, [h, I], [d, m]], [/\b(poco[\w ]+|m2\d{3}j\d\d[a-z]{2})(?: bui|\))/i, /\b; (\w+) build\/hm\1/i, /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i, /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i, /oid[^\)]+; (m?[12][0-389][01]\w{3,6}[c-y])( bui|; wv|\))/i, /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i], [[c, /_/g, " "], [h, P], [d, m]], [/oid[^\)]+; (2\d{4}(283|rpbf)[cgl])( bui|\))/i, /\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i], [[c, /_/g, " "], [h, P], [d, _]], [/; (\w+) bui.+ oppo/i, /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i], [c, [h, "OPPO"], [d, m]], [/\b(opd2\d{3}a?) bui/i], [c, [h, "OPPO"], [d, _]], [/vivo (\w+)(?: bui|\))/i, /\b(v[12]\d{3}\w?[at])(?: bui|;)/i], [c, [h, "Vivo"], [d, m]], [/\b(rmx[1-3]\d{3})(?: bui|;|\))/i], [c, [h, "Realme"], [d, m]], [/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i, /\bmot(?:orola)?[- ](\w*)/i, /((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i], [c, [h, z], [d, m]], [/\b(mz60\d|xoom[2 ]{0,2}) build\//i], [c, [h, z], [d, _]], [/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i], [c, [h, T], [d, _]], [/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i, /\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i, /\blg-?([\d\w]+) bui/i], [c, [h, T], [d, m]], [/(ideatab[-\w ]+)/i, /lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i], [c, [h, "Lenovo"], [d, _]], [/(?:maemo|nokia).*(n900|lumia \d+)/i, /nokia[-_ ]?([-\w\.]*)/i], [[c, /_/g, " "], [h, "Nokia"], [d, m]], [/(pixel c)\b/i], [c, [h, S], [d, _]], [/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i], [c, [h, S], [d, m]], [/droid.+ (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i], [c, [h, O], [d, m]], [/sony tablet [ps]/i, /\b(?:sony)?sgp\w+(?: bui|\))/i], [[c, "Xperia Tablet"], [h, O], [d, _]], [/ (kb2005|in20[12]5|be20[12][59])\b/i, /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i], [c, [h, "OnePlus"], [d, m]], [/(alexa)webm/i, /(kf[a-z]{2}wi|aeo[c-r]{2})( bui|\))/i, /(kf[a-z]+)( bui|\)).+silk\//i], [c, [h, y], [d, _]], [/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i], [[c, /(.+)/g, "Fire Phone $1"], [h, y], [d, m]], [/(playbook);[-\w\),; ]+(rim)/i], [c, h, [d, _]], [/\b((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10; (\w+)/i], [c, [h, k], [d, m]], [/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i], [c, [h, A], [d, _]], [/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i], [c, [h, A], [d, m]], [/(nexus 9)/i], [c, [h, "HTC"], [d, _]], [/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i, /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i, /(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i], [h, [c, /_/g, " "], [d, m]], [/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i], [c, [h, "Acer"], [d, _]], [/droid.+; (m[1-5] note) bui/i, /\bmz-([-\w]{2,})/i], [c, [h, "Meizu"], [d, m]], [/; ((?:power )?armor(?:[\w ]{0,8}))(?: bui|\))/i], [c, [h, "Ulefone"], [d, m]], [/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron|infinix|tecno)[-_ ]?([-\w]*)/i, /(hp) ([\w ]+\w)/i, /(asus)-?(\w+)/i, /(microsoft); (lumia[\w ]+)/i, /(lenovo)[-_ ]?([-\w]+)/i, /(jolla)/i, /(oppo) ?([\w ]+) bui/i], [h, c, [d, m]], [/(kobo)\s(ereader|touch)/i, /(archos) (gamepad2?)/i, /(hp).+(touchpad(?!.+tablet)|tablet)/i, /(kindle)\/([\w\.]+)/i, /(nook)[\w ]+build\/(\w+)/i, /(dell) (strea[kpr\d ]*[\dko])/i, /(le[- ]+pan)[- ]+(\w{1,9}) bui/i, /(trinity)[- ]*(t\d{3}) bui/i, /(gigaset)[- ]+(q\w{1,9}) bui/i, /(vodafone) ([\w ]+)(?:\)| bui)/i], [h, c, [d, _]], [/(surface duo)/i], [c, [h, M], [d, _]], [/droid [\d\.]+; (fp\du?)(?: b|\))/i], [c, [h, "Fairphone"], [d, m]], [/(u304aa)/i], [c, [h, "AT&T"], [d, m]], [/\bsie-(\w*)/i], [c, [h, "Siemens"], [d, m]], [/\b(rct\w+) b/i], [c, [h, "RCA"], [d, _]], [/\b(venue[\d ]{2,7}) b/i], [c, [h, "Dell"], [d, _]], [/\b(q(?:mv|ta)\w+) b/i], [c, [h, "Verizon"], [d, _]], [/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i], [c, [h, "Barnes & Noble"], [d, _]], [/\b(tm\d{3}\w+) b/i], [c, [h, "NuVision"], [d, _]], [/\b(k88) b/i], [c, [h, "ZTE"], [d, _]], [/\b(nx\d{3}j) b/i], [c, [h, "ZTE"], [d, m]], [/\b(gen\d{3}) b.+49h/i], [c, [h, "Swiss"], [d, m]], [/\b(zur\d{3}) b/i], [c, [h, "Swiss"], [d, _]], [/\b((zeki)?tb.*\b) b/i], [c, [h, "Zeki"], [d, _]], [/\b([yr]\d{2}) b/i, /\b(dragon[- ]+touch |dt)(\w{5}) b/i], [[h, "Dragon Touch"], c, [d, _]], [/\b(ns-?\w{0,9}) b/i], [c, [h, "Insignia"], [d, _]], [/\b((nxa|next)-?\w{0,9}) b/i], [c, [h, "NextBook"], [d, _]], [/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i], [[h, "Voice"], c, [d, m]], [/\b(lvtel\-)?(v1[12]) b/i], [[h, "LvTel"], c, [d, m]], [/\b(ph-1) /i], [c, [h, "Essential"], [d, m]], [/\b(v(100md|700na|7011|917g).*\b) b/i], [c, [h, "Envizen"], [d, _]], [/\b(trio[-\w\. ]+) b/i], [c, [h, "MachSpeed"], [d, _]], [/\btu_(1491) b/i], [c, [h, "Rotor"], [d, _]], [/(shield[\w ]+) b/i], [c, [h, "Nvidia"], [d, _]], [/(sprint) (\w+)/i], [h, c, [d, m]], [/(kin\.[onetw]{3})/i], [[c, /\./g, " "], [h, M], [d, m]], [/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i], [c, [h, N], [d, _]], [/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i], [c, [h, N], [d, m]], [/smart-tv.+(samsung)/i], [h, [d, x]], [/hbbtv.+maple;(\d+)/i], [[c, /^/, "SmartTV"], [h, B], [d, x]], [/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i], [[h, T], [d, x]], [/(apple) ?tv/i], [h, [c, w + " TV"], [d, x]], [/crkey/i], [[c, C + "cast"], [h, S], [d, x]], [/droid.+aft(\w+)( bui|\))/i], [c, [h, y], [d, x]], [/\(dtv[\);].+(aquos)/i, /(aquos-tv[\w ]+)\)/i], [c, [h, R], [d, x]], [/(bravia[\w ]+)( bui|\))/i], [c, [h, O], [d, x]], [/(mitv-\w{5}) bui/i], [c, [h, P], [d, x]], [/Hbbtv.*(technisat) (.*);/i], [h, c, [d, x]], [/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i, /hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i], [[h, V], [c, V], [d, x]], [/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i], [[d, x]], [/(ouya)/i, /(nintendo) ([wids3utch]+)/i], [h, c, [d, f]], [/droid.+; (shield) bui/i], [c, [h, "Nvidia"], [d, f]], [/(playstation [345portablevi]+)/i], [c, [h, O], [d, f]], [/\b(xbox(?: one)?(?!; xbox))[\); ]/i], [c, [h, M], [d, f]], [/((pebble))app/i], [h, c, [d, v]], [/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i], [c, [h, w], [d, v]], [/droid.+; (glass) \d/i], [c, [h, S], [d, v]], [/droid.+; (wt63?0{2,3})\)/i], [c, [h, N], [d, v]], [/(quest( \d| pro)?)/i], [c, [h, L], [d, v]], [/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i], [h, [d, b]], [/(aeobc)\b/i], [c, [h, y], [d, b]], [/droid .+?; ([^;]+?)(?: bui|; wv\)|\) applew).+? mobile safari/i], [c, [d, m]], [/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i], [c, [d, _]], [/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i], [[d, _]], [/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i], [[d, m]], [/(android[-\w\. ]{0,9});.+buil/i], [c, [h, "Generic"]]],
                engine: [[/windows.+ edge\/([\w\.]+)/i], [g, [u, "EdgeHTML"]], [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i], [g, [u, "Blink"]], [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i, /ekioh(flow)\/([\w\.]+)/i, /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i, /(icab)[\/ ]([23]\.[\d\.]+)/i, /\b(libweb)/i], [u, g], [/rv\:([\w\.]{1,9})\b.+(gecko)/i], [g, u]],
                os: [[/microsoft (windows) (vista|xp)/i], [u, g], [/(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i], [u, [g, J, W]], [/windows nt 6\.2; (arm)/i, /windows[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i, /(?:win(?=3|9|n)|win 9x )([nt\d\.]+)/i], [[g, J, W], [u, "Windows"]], [/ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i, /(?:ios;fbsv\/|iphone.+ios[\/ ])([\d\.]+)/i, /cfnetwork\/.+darwin/i], [[g, /_/g, "."], [u, "iOS"]], [/(mac os x) ?([\w\. ]*)/i, /(macintosh|mac_powerpc\b)(?!.+haiku)/i], [[u, U], [g, /_/g, "."]], [/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i], [g, u], [/(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i, /(blackberry)\w*\/([\w\.]*)/i, /(tizen|kaios)[\/ ]([\w\.]+)/i, /\((series40);/i], [u, g], [/\(bb(10);/i], [g, [u, k]], [/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i], [g, [u, "Symbian"]], [/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i], [g, [u, D + " OS"]], [/web0s;.+rt(tv)/i, /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i], [g, [u, "webOS"]], [/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i], [g, [u, "watchOS"]], [/crkey\/([\d\.]+)/i], [g, [u, C + "cast"]], [/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i], [[u, j], g], [/panasonic;(viera)/i, /(netrange)mmh/i, /(nettv)\/(\d+\.[\w\.]+)/i, /(nintendo|playstation) ([wids345portablevuch]+)/i, /(xbox); +xbox ([^\);]+)/i, /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i, /(mint)[\/\(\) ]?(\w*)/i, /(mageia|vectorlinux)[; ]/i, /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i, /(hurd|linux) ?([\w\.]*)/i, /(gnu) ?([\w\.]*)/i, /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i, /(haiku) (\w+)/i], [u, g], [/(sunos) ?([\w\.\d]*)/i], [[u, "Solaris"], g], [/((?:open)?solaris)[-\/ ]?([\w\.]*)/i, /(aix) ((\d)(?=\.|\)| )[\w\.])*/i, /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i, /(unix) ?([\w\.]*)/i], [u, g]]
            }
              , Q = function e(t, f) {
                if (typeof t === o && (f = t,
                t = n),
                !(this instanceof e))
                    return new e(t,f).getResult();
                var x = typeof i !== a && i.navigator ? i.navigator : n
                  , v = t || (x && x.userAgent ? x.userAgent : "")
                  , b = x && x.userAgentData ? x.userAgentData : n
                  , y = f ? function(e, t) {
                    var i = {};
                    for (var n in e)
                        t[n] && t[n].length % 2 == 0 ? i[n] = t[n].concat(e[n]) : i[n] = e[n];
                    return i
                }(Z, f) : Z
                  , w = x && x.userAgent == v;
                return this.getBrowser = function() {
                    var e = {};
                    return e[u] = n,
                    e[g] = n,
                    G.call(e, v, y.browser),
                    e[l] = function(e) {
                        return typeof e === s ? e.replace(/[^\d\.]/g, "").split(".")[0] : n
                    }(e[g]),
                    w && x && x.brave && typeof x.brave.isBrave == r && (e[u] = "Brave"),
                    e
                }
                ,
                this.getCPU = function() {
                    var e = {};
                    return e[p] = n,
                    G.call(e, v, y.cpu),
                    e
                }
                ,
                this.getDevice = function() {
                    var e = {};
                    return e[h] = n,
                    e[c] = n,
                    e[d] = n,
                    G.call(e, v, y.device),
                    w && !e[d] && b && b.mobile && (e[d] = m),
                    w && "Macintosh" == e[c] && x && typeof x.standalone !== a && x.maxTouchPoints && x.maxTouchPoints > 2 && (e[c] = "iPad",
                    e[d] = _),
                    e
                }
                ,
                this.getEngine = function() {
                    var e = {};
                    return e[u] = n,
                    e[g] = n,
                    G.call(e, v, y.engine),
                    e
                }
                ,
                this.getOS = function() {
                    var e = {};
                    return e[u] = n,
                    e[g] = n,
                    G.call(e, v, y.os),
                    w && !e[u] && b && b.platform && "Unknown" != b.platform && (e[u] = b.platform.replace(/chrome os/i, j).replace(/macos/i, U)),
                    e
                }
                ,
                this.getResult = function() {
                    return {
                        ua: this.getUA(),
                        browser: this.getBrowser(),
                        engine: this.getEngine(),
                        os: this.getOS(),
                        device: this.getDevice(),
                        cpu: this.getCPU()
                    }
                }
                ,
                this.getUA = function() {
                    return v
                }
                ,
                this.setUA = function(e) {
                    return v = typeof e === s && e.length > 500 ? V(e, 500) : e,
                    this
                }
                ,
                this.setUA(v),
                this
            };
            Q.VERSION = "1.0.38",
            Q.BROWSER = q([u, g, l]),
            Q.CPU = q([p]),
            Q.DEVICE = q([c, h, d, f, m, x, _, v, b]),
            Q.ENGINE = Q.OS = q([u, g]),
            e.exports && (t = e.exports = Q),
            t.UAParser = Q;
            var $ = typeof i !== a && (i.jQuery || i.Zepto);
            if ($ && !$.ua) {
                var Y = new Q;
                $.ua = Y.getResult(),
                $.ua.get = function() {
                    return Y.getUA()
                }
                ,
                $.ua.set = function(e) {
                    Y.setUA(e);
                    var t = Y.getResult();
                    for (var i in t)
                        $.ua[i] = t[i]
                }
            }
        }("object" == typeof window ? window : Q)
    }(Sa, Da);
    const Ia = "1.3.31"
      , Ta = Da.UAParser()
      , Ma = Ia;
    function za(e, t) {
        var i, n, r, a, o;
        return {
            Authorization: "Bearer ".concat(t),
            "ts-sdk-version": Ma,
            "ts-client-id": e,
            "ts-user-agent": navigator.userAgent,
            "ts-platform": "web-sdk",
            "ts-os": null === (i = null == Ta ? void 0 : Ta.os) || void 0 === i ? void 0 : i.name,
            "ts-os-version": null === (n = null == Ta ? void 0 : Ta.os) || void 0 === n ? void 0 : n.version,
            "ts-device-model": null === (r = null == Ta ? void 0 : Ta.device) || void 0 === r ? void 0 : r.model,
            "ts-manufacturer": null === (a = null == Ta ? void 0 : Ta.device) || void 0 === a ? void 0 : a.vendor,
            "ts-browser": null === (o = null == Ta ? void 0 : Ta.browser) || void 0 === o ? void 0 : o.name,
            "Content-Type": "application/json",
            "X-TS-client-time": (new Date).toUTCString(),
            "X-TS-ua": navigator.userAgent
        }
    }
    const Fa = e=>null != e
      , Ba = e=>"string" == typeof e
      , Ra = e=>Ba(e) && "" !== e
      , Oa = e=>"object" == typeof e && "string" == typeof e.type && "function" == typeof e.stream && "function" == typeof e.arrayBuffer && "function" == typeof e.constructor && "string" == typeof e.constructor.name && /^(Blob|File)$/.test(e.constructor.name) && /^(Blob|File)$/.test(e[Symbol.toStringTag])
      , Pa = e=>e instanceof FormData
      , Na = e=>{
        const t = []
          , i = (e,n)=>{
            Fa(n) && (Array.isArray(n) ? n.forEach((t=>{
                i(e, t)
            }
            )) : "object" == typeof n ? Object.entries(n).forEach((t=>{
                let[n,r] = t;
                i("".concat(e, "[").concat(n, "]"), r)
            }
            )) : ((e,i)=>{
                t.push("".concat(encodeURIComponent(e), "=").concat(encodeURIComponent(String(i))))
            }
            )(e, n))
        }
        ;
        return Object.entries(e).forEach((e=>{
            let[t,n] = e;
            i(t, n)
        }
        )),
        t.length > 0 ? "?".concat(t.join("&")) : ""
    }
      , La = async(e,t)=>"function" == typeof t ? t(e) : t
      , ja = async(e,t)=>{
        const n = await La(t, e.TOKEN)
          , r = await La(t, e.USERNAME)
          , a = await La(t, e.PASSWORD)
          , o = await La(t, e.HEADERS)
          , s = Object.entries(i(i({
            Accept: "application/json"
        }, o), t.headers)).filter((e=>{
            let[t,i] = e;
            return Fa(i)
        }
        )).reduce(((e,t)=>{
            let[n,r] = t;
            return i(i({}, e), {}, {
                [n]: String(r)
            })
        }
        ), {});
        if (Ra(n) && (s.Authorization = "Bearer ".concat(n)),
        Ra(r) && Ra(a)) {
            const e = (e=>{
                try {
                    return btoa(e)
                } catch (t) {
                    return Buffer.from(e).toString("base64")
                }
            }
            )("".concat(r, ":").concat(a));
            s.Authorization = "Basic ".concat(e)
        }
        return t.body && (t.mediaType ? s["Content-Type"] = t.mediaType : Oa(t.body) ? s["Content-Type"] = t.body.type || "application/octet-stream" : Ba(t.body) ? s["Content-Type"] = "text/plain" : Pa(t.body) || (s["Content-Type"] = "application/json")),
        new Headers(s)
    }
      , Ua = (e,t)=>new Promise((async(n,r)=>{
        try {
            const r = ((e,t)=>{
                const i = e.ENCODE_PATH || encodeURI
                  , n = t.url.replace("{api-version}", e.VERSION).replace(/{(.*?)}/g, ((e,n)=>{
                    var r;
                    return (null === (r = t.path) || void 0 === r ? void 0 : r.hasOwnProperty(n)) ? i(String(t.path[n])) : e
                }
                ))
                  , r = "".concat(e.BASE).concat(n);
                return t.query ? "".concat(r).concat(Na(t.query)) : r
            }
            )(e, t)
              , a = (e=>{
                if (e.formData) {
                    const t = new FormData
                      , i = (e,i)=>{
                        Ba(i) || Oa(i) ? t.append(e, i) : t.append(e, JSON.stringify(i))
                    }
                    ;
                    return Object.entries(e.formData).filter((e=>{
                        let[t,i] = e;
                        return Fa(i)
                    }
                    )).forEach((e=>{
                        let[t,n] = e;
                        Array.isArray(n) ? n.forEach((e=>i(t, e))) : i(t, n)
                    }
                    )),
                    t
                }
            }
            )(t)
              , o = (e=>{
                var t;
                if (void 0 !== e.body)
                    return (null === (t = e.mediaType) || void 0 === t ? void 0 : t.includes("/json")) ? JSON.stringify(e.body) : Ba(e.body) || Oa(e.body) || Pa(e.body) ? e.body : JSON.stringify(e.body)
            }
            )(t)
              , s = await ja(e, t)
              , l = await (async(e,t,i,n,r,a)=>{
                const o = new AbortController
                  , s = {
                    headers: a,
                    body: null != n ? n : r,
                    method: t.method,
                    signal: o.signal
                };
                return e.WITH_CREDENTIALS && (s.credentials = e.CREDENTIALS),
                await fetch(i, s)
            }
            )(e, t, r, o, a, s)
              , c = await (async e=>{
                if (204 !== e.status)
                    try {
                        const t = e.headers.get("Content-Type");
                        if (t)
                            return ["application/json", "application/problem+json"].some((e=>t.toLowerCase().startsWith(e))) ? await e.json() : await e.text()
                    } catch (e) {
                        console.error(e)
                    }
            }
            )(l)
              , u = ((e,t)=>{
                if (t) {
                    const i = e.headers.get(t);
                    if (Ba(i))
                        return i
                }
            }
            )(l, t.responseHeader)
              , d = {
                url: r,
                ok: l.ok,
                status: l.status,
                statusText: l.statusText,
                headers: l.headers,
                body: null != u ? u : c
            };
            ((e,t)=>{
                var n, r;
                const a = i({
                    400: "Bad Request",
                    401: "Unauthorized",
                    403: "Forbidden",
                    404: "Not Found",
                    500: "Internal Server Error",
                    502: "Bad Gateway",
                    503: "Service Unavailable"
                }, e.errors)[t.status];
                if (a)
                    throw new _a(e,t,a);
                if (!t.ok) {
                    const i = null !== (n = t.status) && void 0 !== n ? n : "unknown"
                      , a = null !== (r = t.statusText) && void 0 !== r ? r : "unknown"
                      , o = (()=>{
                        try {
                            return JSON.stringify(t.body, null, 2)
                        } catch (e) {
                            return
                        }
                    }
                    )();
                    throw new _a(e,t,"Generic Error: status: ".concat(i, "; status text: ").concat(a, "; body: ").concat(o))
                }
            }
            )(t, d),
            n(d)
        } catch (e) {
            r(e)
        }
    }
    ));
    function qa(e, t) {
        return Ua(xa, e).catch((e=>(function(e, t, i) {
            pa({
                type: "api-request-error",
                errorCode: t,
                step: e,
                error: i
            })
        }(t, "request-error", e.message),
        Promise.reject(e))))
    }
    async function Ka(e, t, i, n, r) {
        xa.HEADERS = za(n, t),
        await function(e, t, i) {
            return qa({
                keepalive: !0,
                method: "POST",
                url: "/verify/api/v1/verification/".concat(e, "/events"),
                path: {
                    sid: e
                },
                body: t
            }, i)
        }(i, r, e)
    }
    const Ha = new class {
        handelEventData(e) {
            if ("session-id-acquired" === e.type)
                this.sendRiskSessionToken()
        }
        sendRiskSessionToken() {
            try {
                const e = "".concat(xa.BASE, "/verify/api/v1/verification/").concat(Ea.state.sessionId, "/risk-session-token")
                  , t = Ea.state.clientId
                  , i = za(t, Ea.state.userToken);
                ra().then((t=>{
                    sa.http.httpPost(e, {
                        session_token: t
                    }, null, i).catch((t=>{
                        throw console.log("unable to send session token to IDV", e),
                        console.error(t),
                        t
                    }
                    ))
                }
                )).catch((t=>{
                    var i, n, r, a;
                    console.log("unable to get session token from DRS", e),
                    console.error(t);
                    const o = (null == t ? void 0 : t.message) || "failed to initialize DRS"
                      , s = Ca.createDrsInitFailureEvent(o, "init");
                    Ka(null === (i = Ea.state) || void 0 === i ? void 0 : i.step, null === (n = Ea.state) || void 0 === n ? void 0 : n.userToken, null === (r = Ea.state) || void 0 === r ? void 0 : r.sessionId, null === (a = Ea.state) || void 0 === a ? void 0 : a.clientId, s).then((()=>{
                        pa({
                            type: "failed-to-init-drs",
                            errorCode: "other",
                            step: "init"
                        })
                    }
                    ))
                }
                ))
            } catch (e) {
                throw console.log("Error sending risk session token"),
                console.error(e),
                e
            }
        }
    }
    ;
    const Va = e=>"function" == typeof e
      , Ga = function(e) {};
    sa.events.on(sa.events.MODULE_INITIALIZED, (function() {
        const {clientId: e, IDV: t} = sa.moduleMetadata.getInitConfig();
        if (!e || !t)
            return !1;
        const i = (null == t ? void 0 : t.serverPath) && (n = null == t ? void 0 : t.serverPath,
        r = "/verify",
        (null == n ? void 0 : n.endsWith(r)) ? n.slice(0, n.length - r.length) : n);
        var n, r;
        xa.BASE = i || window.location.origin,
        Ea.dispatch("setClientId", e),
        Ea.dispatch("setRootElement", (null == t ? void 0 : t.rootElement) || "root-element"),
        Ea.dispatch("setServerPath", null == t ? void 0 : t.serverPath),
        Ea.dispatch("setLanguage", null == t ? void 0 : t.language),
        Ea.dispatch("setCallback", null == t ? void 0 : t.callback),
        Ea.dispatch("setConsentVersion", null == t ? void 0 : t.consentVersion),
        Ea.dispatch("setMarkdownSupportText", null == t ? void 0 : t.markdownSupportText),
        Ea.dispatch("setVideoCaptureSettings", null == t ? void 0 : t.videoCaptureSettings),
        (null == t ? void 0 : t.callbacks) && eo(t);
        return function(e) {
            pa({
                type: "init",
                step: e
            })
        }("init"),
        !0
    }
    )),
    sa.events.on(la, (function(e) {
        switch (Ha.handelEventData(e),
        Xa(e),
        e.type) {
        case "session-id-acquired":
            Ja({
                session: Ea.state.sessionId
            });
            break;
        case "capture-image-result":
            Wa({
                session: Ea.state.sessionId
            }, e.imageType);
            break;
        case "start-verification-processing":
            Za({
                session: Ea.state.sessionId
            });
            break;
        case "verification-complete":
            Qa({
                session: Ea.state.sessionId
            });
            break;
        case "capture-error":
        case "failed-to-init-drs":
        case "api-request-error":
            Ya({
                session: Ea.state.sessionId
            }, e.errorCode, e.error);
            break;
        case "verification-recapture":
            $a({
                session: Ea.state.sessionId
            }, e.reason)
        }
    }
    ));
    let Ja = Ga
      , Wa = Ga
      , Za = Ga
      , Qa = Ga
      , $a = Ga
      , Ya = Ga
      , Xa = e=>{}
    ;
    const eo = e=>{
        let {callbacks: t, callback: i} = e;
        Va(t.sessionStarted) && (Ja = t.sessionStarted),
        Va(t.imageSubmitted) && (Wa = t.imageSubmitted),
        Va(t.processing) && (Za = t.processing),
        Va(t.completed) && (Qa = t.completed),
        Va(t.recapture) && ($a = t.recapture),
        Va(t.error) && (Ya = t.error),
        Va(i) && (Xa = i)
    }
    ;
    async function to(e, t, i) {
        xa.HEADERS = za(i, t);
        var n;
        return (await (n = e,
        qa({
            method: "GET",
            url: "/verify/api/v1/verification/".concat(n, "/status"),
            path: {
                sid: n
            },
            errors: {
                404: "Session not found"
            }
        }, "processing"))).body
    }
    function io(e) {
        try {
            return JSON.parse(e)
        } catch (e) {
            return console.error(e),
            null
        }
    }
    async function no(e, t, i) {
        xa.HEADERS = za(t);
        const n = await (r = {
            start_token: e,
            accessed_from_desktop: !1,
            client_type: wa.client_type.MOBILE_SDK,
            consent: {
                granted: !0,
                document_id: i
            }
        },
        qa({
            method: "POST",
            url: "/verify/api/v1/verification/start",
            headers: {},
            body: r,
            mediaType: "application/json"
        }, "init"));
        var r;
        return {
            sessionId: n.body.session_id,
            userToken: n.body.user_token,
            requiredImages: n.body.required_images
        }
    }
    async function ro(e, t, i) {
        let n, r, a;
        if (n)
            try {
                n = da(ua);
                const e = JSON.parse(n);
                r = e.sessionId,
                a = e.userToken
            } catch (e) {}
        try {
            let l;
            if (a) {
                l = (await to(r, a, i)).missing_images
            } else {
                const c = await no(e, i, t);
                r = c.sessionId,
                a = c.userToken,
                l = c.requiredImages,
                n = JSON.stringify({
                    sessionId: r,
                    userToken: a
                }),
                o = ua,
                s = n,
                sessionStorage.setItem(o, s)
            }
            return {
                requiredImages: l,
                sessionId: r.toString(),
                userToken: a.toString()
            }
        } catch (e) {
            throw console.log("Error starting session"),
            console.error(e),
            e
        }
        var o, s
    }
    function ao(e) {
        let {tagName: t, style: i, id: n="", className: r="", testid: a, options: o} = e;
        const s = document.createElement(t, o);
        return s.id = n,
        s.className = r,
        s.setAttribute("data-auto", a + "-auto"),
        Object.keys(i).forEach((e=>{
            s.style[e] = i[e]
        }
        )),
        s
    }
    function oo(e, t) {
        Array.isArray(t) ? t.forEach((t=>{
            e.appendChild(t)
        }
        )) : e.appendChild(t)
    }
    const so = {
        blur_message: "Please focus camera on the document before capturing",
        blur_title: "Blurred image",
        document_not_found_message: "Make sure you capture a valid government issued ID",
        document_not_found_title: "Document not detected",
        document_not_matching_message: "Please make sure to capture the back side of the document",
        document_not_matching_title: "Back image mismatch",
        document_not_supported_message: "Please use a different government issued ID instead",
        document_not_supported_title: "Document not supported",
        face_not_found_message: "Ensure your face is not covered and fully visible",
        face_not_found_title: "Face not detected",
        glare_message: "Avoid any direct light reflecting with glare",
        glare_title: "Glare detected",
        main_title_document_back: "Back side",
        main_title_document_face: "Take a selfie",
        main_title_document_front: "Front side",
        obstructed_message: "Some of the document parts are covered or missing",
        obstructed_title: "Missing information",
        other_error_code_message: "Please try again",
        other_error_code_title: "An error occurred",
        page_header_document: "Scan document",
        page_header_face: "Face Recognition",
        second_title_document_back: "Please place your document on a solid surface, back side up",
        second_title_document_face: "Please position your face in the center of the oval below",
        second_title_document_front: "Please place your document on a solid surface, photo side up",
        wrong_document_side_message: "The wrong document side has been detected",
        wrong_document_side_title: "Wrong document side detected",
        face_angle_too_large_title: "your face is not directly aligned with the camera",
        face_angle_too_large_message: "Please take another photo with your face fully visible for accurate detection",
        face_close_to_border_title: "Your face is too close to the edge",
        face_close_to_border_message: "Please adjust your position and make sure your entire face is within the frame",
        face_too_small_title: "Your face is too distant form the edge",
        face_too_small_message: "Please move closer to the camera so your face is clearer and easier to detect",
        face_too_close_title: "Your face is too close ",
        face_too_close_message: "Please adjust your position and make sure your entire face is within the frame",
        face_cropped_title: "Your face is partially cropped",
        face_cropped_message: "Please adjust your position and make sure your entire face is within the frame for optimal",
        no_face_title: "Face not found",
        no_face_message: "Please move closer to the camera or adjust your position so your face is clearer and easier to detect",
        multi_face_title: "Multiple faces detected",
        multi_face_message: "Please make sure only one face is visible in the frame to proceed",
        blur_selfie_title: "The selfie is out of focus",
        blur_selfie_message: "Please try taking another one with clearer focus for better detection",
        glare_selfie_title: "Too much reflection in your selfie",
        glare_selfie_message: "Please try taking another photo with better lighting and without glare for accurate detection",
        closed_eyes_title: "Your eyes appear to be closed in the selfie",
        closed_eyes_message: "Please retake the photo with your eyes open",
        face_occluded_title: "Your face is partially hidden in the selfie",
        face_occluded_message: "Please take another photo with your face fully visible for accurate detection",
        face_rotated_title: "Your face is not directly aligned with the camera",
        face_rotated_message: "Please take another photo with your face fully visible for accurate detection",
        barcode_not_found_title: "We are having trouble capturing some important elements of your document, Please try placing it in a clearer spot",
        barcode_not_found_message: "We are having trouble capturing some important elements of your document, Please try placing it in a clearer spot"
    };
    const lo = new class {
        constructor(e) {
            this.translations = e,
            this.translations = new Proxy(this.translations,{
                get: function(e, t) {
                    return e[t]
                },
                set: function(e, t, i) {
                    return e[t] = i,
                    !0
                }
            })
        }
        overrideLanguage(e) {
            Object.assign(this.translations, e)
        }
        translate(e) {
            for (var t = arguments.length, i = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++)
                i[n - 1] = arguments[n];
            let r = this.translations[e];
            return r || (r = e),
            r.replace(/{(\d+)}/g, (function(e, t) {
                return void 0 !== i[t] ? i[t] : e
            }
            ))
        }
    }
    (so)
      , co = {
        en: so,
        es: {
            blur_message: "Favor enfoca la cámara en tú cédula antes de la captura",
            blur_title: "Imagen borrosa",
            document_not_found_message: "Asegúrate de utilizar una cédula valida",
            document_not_found_title: "Cédula no detectada",
            document_not_matching_message: "Favor Asegúrate de capturar la parte trasera de tu cédula",
            document_not_matching_title: "Parte trasera no corresponde",
            document_not_supported_message: "Favor utliza tu cédula",
            document_not_supported_title: "Cédula no compatible",
            face_not_found_message: "Asegurase de no tapar su rostro",
            face_not_found_title: "Selfie no detectada",
            glare_message: "Evite luz directa que pueda generar brillo",
            glare_title: "Demasiado brillo",
            main_title_document_back: "Parte trasera de tu cédula",
            main_title_document_face: "Tómate un Selfie",
            main_title_document_front: "Parte frontal de tu cédula",
            obstructed_message: "Parte de la cédula documento no está visible o falta información",
            obstructed_title: "Falta información",
            other_error_code_message: "Intenta nuevamente",
            other_error_code_title: "Ha ocurrido un error",
            page_header_document: "Escanéa tu cédula",
            page_header_face: "Reconocimiento Facial",
            second_title_document_back: "Asegúrate de poner su cédula en una superfice plana con la parte trasera visible",
            second_title_document_face: "Asegúrate de posicionar tu rostro en el centro del circulo",
            second_title_document_front: "Asegúrate de poner su cédula en una superfice plana con la parte frontal visible",
            wrong_document_side_message: "Lado incorrecto de tu cédula ha sido detectado",
            wrong_document_side_title: "Lado de tu cédula incorrecto",
            face_angle_too_large_title: "Tu rostro no está directamente alineado con la cámara.",
            face_angle_too_large_message: "Por favor, toma otra foto con tu rostro completamente visible para una detección precisa.",
            face_close_to_border_title: "Tu rostro está demasiado cerca del borde.",
            face_close_to_border_message: "Por favor, cambia la posicion de tu rostro y asegúrate de que todo tu rostro esté dentro del marco.",
            face_too_small_title: "Tu rostro está demasiado lejos del borde.",
            face_too_small_message: "Por favor, acércate más a la cámara para que tu rostro esté más claro y sea más fácil de detectar.",
            face_too_close_title: "Tu rostro está demasiado cerca",
            face_too_close_message: "Acomode la posición y asegúrese de que toda su rostro esté dentro del marco.",
            face_cropped_title: "Tu rostro está parcialmente recortado.",
            face_cropped_message: "Por favor, cambia tu posición y asegúrate de que todo tu rostro esté dentro del marco para una detección óptima.",
            no_face_title: "Rostro no encontrado.",
            no_face_message: "Por favor, acércate más a la cámara o ajusta tu posición para que tu rostro esté más claro y sea más fácil de detectar.",
            multi_face_title: "Se detectaron múltiples rostros.",
            multi_face_message: "Por favor, asegúrate de que solo haya un rostro visible en el marco para continuar.",
            blur_selfie_title: "El autorretrato está fuera de foco.",
            blur_selfie_message: "Por favor, intenta tomar  una nueva imagen con un enfoque más claro para una mejor detección.",
            glare_selfie_title: "Demasiado reflejo en tu autorretrato.",
            glare_selfie_message: "Por favor, intenta tomar otra foto con una mejor iluminación y sin brillos para una detección precisa.",
            closed_eyes_title: "Tus ojos parecen estar cerrados en el autorretrato.",
            closed_eyes_message: "Por favor, vuelve a tomar la foto con los ojos abiertos.",
            face_occluded_title: "Tu rostro está parcialmente oculto en el autorretrato.",
            face_occluded_message: "Por favor, toma otra foto con tu rostro completamente visible para una detección precisa.",
            face_rotated_title: "Tu rostro está fuera de foco.",
            face_rotated_message: "Por favor, intenta tomar otro con un enfoque más claro para una mejor detección.",
            barcode_not_found_title: "Estamos teniendo problemas para capturar algunos elementos importantes de su documento, Intente colocarlo en un lugar más despejado.",
            barcode_not_found_message: "Estamos teniendo problemas para capturar algunos elementos importantes de su documento, Intente colocarlo en un lugar más despejado."
        },
        pr: {
            blur_message: "Por favor, foque a câmera no documento antes de capturar",
            blur_title: "Imagem borrada",
            document_not_found_message: "Certifique-se de capturar um documento válido emitido pelo governo",
            document_not_found_title: "Documento não detectado",
            document_not_matching_message: "Por favor, certifique-se de capturar o verso do documento",
            document_not_matching_title: "Imagem do verso incorreta",
            document_not_supported_message: "Por favor, utilize um documento diferente emitido pelo governo",
            document_not_supported_title: "Documento não suportado",
            face_not_found_message: "Certifique-se de que seu rosto não esteja coberto e esteja totalmente visível",
            face_not_found_title: "Rosto não detectado",
            glare_message: "Evite qualquer luz direta refletindo com brilho",
            glare_title: "Brilho detectado",
            main_title_document_back: "Verso",
            main_title_document_face: "Tire uma Selfie",
            main_title_document_front: "Frente",
            obstructed_message: "Algumas partes do documento estão encobertas ou ausentes",
            obstructed_title: "Informações incompletas",
            other_error_code_message: "Por favor, tente novamente",
            other_error_code_title: "Ocorreu um erro",
            page_header_document: "Digitalizar o documento",
            page_header_face: "Reconhecimento facial",
            second_title_document_back: "Coloque o documento em uma superfície sólida, com o verso voltado para cima",
            second_title_document_face: "Por favor, posicione seu rosto no centro do oval abaixo",
            second_title_document_front: "Coloque o documento em uma superfície sólida, com a foto voltada para cima",
            wrong_document_side_message: "O lado errado do documento foi detectado",
            wrong_document_side_title: "Lado incorreto do documento identificado",
            face_angle_too_large_title: "Seu rosto não está diretamente alinhado com a câmera.",
            face_angle_too_large_message: "Tire outra foto com seu rosto totalmente visível para uma detecção precisa.",
            face_close_to_border_title: "Seu rosto está muito próximo da borda.",
            face_close_to_border_message: "Por favor, reposicione seu rosto e certifique-se de que todo o seu rosto esteja dentro da moldura.",
            face_too_small_title: "Seu rosto está muito longe da borda.",
            face_too_small_message: "Aproxime-se da câmera para que seu rosto fique mais claro e fácil de detectar.",
            face_too_close_title: "Seu rosto está muito perto",
            face_too_close_message: "Ajuste a posição e certifique-se de que todo o seu rosto esteja dentro da moldura.",
            face_cropped_title: "Seu rosto está parcialmente cortado.",
            face_cropped_message: "Mude sua posição e certifique-se de que todo o seu rosto esteja dentro do enquadramento para uma detecção ideal.",
            no_face_title: "Rosto não encontrado..",
            no_face_message: "Aproxime-se da câmera ou ajuste sua posição para que seu rosto fique mais claro e fácil de detectar.",
            multi_face_title: "Vários rostos foram detectados.",
            multi_face_message: "Certifique-se de que haja apenas um rosto visível no quadro para continuar.",
            blur_selfie_title: "O autorretrato está fora de foco.",
            blur_selfie_message: "Tente tirar uma nova imagem com foco mais claro para melhor detecção.",
            glare_selfie_title: "Muita reflexão em seu autorretrato.",
            glare_selfie_message: "Tente tirar outra foto com melhor iluminação e sem brilho para uma detecção precisa.",
            closed_eyes_title: "Seus olhos parecem fechados no autorretrato.",
            closed_eyes_message: "Por favor, tire a foto novamente com os olhos abertos.",
            face_occluded_title: "Seu rosto está parcialmente escondido no autorretrato.",
            face_occluded_message: "Tire outra foto com seu rosto totalmente visível para uma detecção precisa.",
            face_rotated_title: "Seu rosto está fora de foco.",
            face_rotated_message: "Por favor, tente pegar outro com foco mais claro para melhor detecção.",
            barcode_not_found_title: "Estamos tendo problemas para capturar alguns elementos importantes do seu documento, Experimente colocá-lo em um local mais claro.",
            barcode_not_found_message: "Estamos tendo problemas para capturar alguns elementos importantes do seu documento, Experimente colocá-lo em um local mais claro."
        }
    };
    const uo = async(e,t,i,n,r,a)=>{
        var o, s, l, c, u, d, h;
        xa.HEADERS = za(i, t);
        const g = Da.UAParser()
          , p = await (f = e,
        m = {
            image: {
                format: n.format,
                image_type: a,
                content: n.data,
                capture_margins: n.captureMargins
            },
            device_info: {
                model: null === (o = null == g ? void 0 : g.device) || void 0 === o ? void 0 : o.model,
                type: null === (s = null == g ? void 0 : g.device) || void 0 === s ? void 0 : s.type,
                manufacturer: null === (l = null == g ? void 0 : g.device) || void 0 === l ? void 0 : l.vendor,
                os: null === (c = null == g ? void 0 : g.os) || void 0 === c ? void 0 : c.name,
                os_version: null === (u = null == g ? void 0 : g.os) || void 0 === u ? void 0 : u.version,
                browser: null === (d = null == g ? void 0 : g.browser) || void 0 === d ? void 0 : d.name,
                browser_version: null === (h = null == g ? void 0 : g.browser) || void 0 === h ? void 0 : h.version,
                used_camera: null == r ? void 0 : r.selectedCamera,
                cameras: null == r ? void 0 : r.camerasInfo
            }
        },
        qa({
            method: "POST",
            url: "/verify/api/v1/verification/{sid}/images",
            path: {
                sid: f
            },
            body: m,
            mediaType: "application/json",
            errors: {
                400: "Request is malformed or missing required fields",
                401: "Access token is malformed, missing data, or expired",
                404: "Session not found",
                409: "All required images were successfully submitted"
            }
        }, m.image.image_type));
        var f, m;
        const _ = function(e, t) {
            const i = [...e].find((e=>e.includes(t)));
            return void 0 !== i ? i[1] : void 0
        }(p.headers, "x-ts-processing-time-ms");
        return "ok" !== p.body.feedback && console.error("Error", p),
        {
            missing_images: p.body.missing_images,
            feedback: p.body.feedback,
            custom_feedback: p.body.custom_feedback,
            serverProcessingTime: _
        }
    }
      , ho = ()=>{
        const e = document.getElementById("overlay-frame");
        if (e) {
            const t = e.getBoundingClientRect()
              , i = (3840 - screen.width) / 2
              , n = (2160 - screen.height) / 2;
            return {
                top: n + t.top,
                bottom: n + t.bottom,
                right: i + t.right,
                left: i + t.left
            }
        }
    }
      , go = e=>["document_front", "document_back"].includes(e) ? "environment" : "user";
    function po(e) {
        switch (e) {
        case "document_front":
            return ba.image_type.DOCUMENT_FRONT;
        case "document_back":
            return ba.image_type.DOCUMENT_BACK;
        case "selfie":
            return ba.image_type.SELFIE
        }
    }
    var fo = {}
      , mo = {
        get exports() {
            return fo
        },
        set exports(e) {
            fo = e
        }
    };
    mo.exports = function(e) {
        function t(n) {
            if (i[n])
                return i[n].exports;
            var r = i[n] = {
                i: n,
                l: !1,
                exports: {}
            };
            return e[n].call(r.exports, r, r.exports, t),
            r.l = !0,
            r.exports
        }
        var i = {};
        return t.m = e,
        t.c = i,
        t.d = function(e, i, n) {
            t.o(e, i) || Object.defineProperty(e, i, {
                configurable: !1,
                enumerable: !0,
                get: n
            })
        }
        ,
        t.n = function(e) {
            var i = e && e.__esModule ? function() {
                return e.default
            }
            : function() {
                return e
            }
            ;
            return t.d(i, "a", i),
            i
        }
        ,
        t.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }
        ,
        t.p = "",
        t(t.s = 4)
    }([function(e, t, i) {
        i.d(t, "b", (function() {
            return a
        }
        )),
        i.d(t, "c", (function() {
            return o
        }
        ));
        var n = i(1)
          , r = i(7);
        i.d(t, "a", (function() {
            return r.a
        }
        )),
        i.d(t, "d", (function() {
            return n.b
        }
        ));
        var a = n.a.FACING_MODES
          , o = n.a.IMAGE_TYPES
    }
    , function(e, t, i) {
        var n = i(6);
        i.d(t, "a", (function() {
            return n.a
        }
        ));
        var r = i(2);
        i.d(t, "b", (function() {
            return r.a
        }
        ))
    }
    , function(e, t, i) {
        function n(e, t) {
            if (!(t >= 0 && t <= 1))
                throw new Error(t + " is invalid imageCompression, choose between: [0, 1]");
            if (!h.f.includes(e))
                throw new Error(e + " is invalid imageType, choose between: " + h.f.join(", "));
            return !0
        }
        function r(e, t) {
            var i = {};
            try {
                n(e, t),
                i.imageType = e,
                i.imageCompression = t
            } catch (e) {
                console.error(e),
                console.error("default value of " + h.c.PNG + " is used"),
                i.imageType = h.c.PNG,
                i.imageCompression = null
            }
            return i
        }
        function a() {
            var e = window.navigator.platform
              , t = window.navigator.userAgent;
            return e || t
        }
        function o() {
            return "ontouchend"in document
        }
        function s(e, t, i) {
            var n = e * parseFloat(i);
            return {
                imageWidth: n,
                imageHeight: t / (e / n)
            }
        }
        function l(e, t, i) {
            return r(t, i).imageType === h.c.JPG ? i ? e.toDataURL(h.b[h.c.JPG], i) : e.toDataURL(h.b[h.c.JPG]) : e.toDataURL(h.b[t])
        }
        function c(e, t) {
            return e || t
        }
        function u() {
            var e = a();
            if (/iPad|iPhone|iPod/.test(e))
                return !0;
            var t = o();
            return !(!/Mac/.test(e) || !t)
        }
        function d() {
            return {
                userAgent: window.navigator.userAgent,
                platform: window.navigator.platform,
                _getStringWithPlatform: a(),
                _getHasTouchEvents: o(),
                getIsIOS: u()
            }
        }
        t.c = s,
        t.b = l,
        t.e = c,
        t.d = u,
        t.a = d;
        var h = i(3)
    }
    , function(e, t, i) {
        function n(e, t, i) {
            return t in e ? Object.defineProperty(e, t, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = i,
            e
        }
        i.d(t, "e", (function() {
            return a
        }
        )),
        i.d(t, "a", (function() {
            return o
        }
        )),
        i.d(t, "f", (function() {
            return s
        }
        )),
        i.d(t, "c", (function() {
            return l
        }
        )),
        i.d(t, "b", (function() {
            return c
        }
        )),
        i.d(t, "d", (function() {
            return u
        }
        ));
        var r, a = ["user", "environment"], o = {
            USER: "user",
            ENVIRONMENT: "environment"
        }, s = ["jpg", "png"], l = {
            PNG: "png",
            JPG: "jpg"
        }, c = (n(r = {}, "jpg", "image/jpeg"),
        n(r, "png", "image/png"),
        r), u = {
            audio: !1,
            video: !0
        }
    }
    , function(e, t, i) {
        e.exports = i(5)
    }
    , function(e, t, i) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = i(0);
        i.d(t, "FACING_MODES", (function() {
            return n.b
        }
        )),
        i.d(t, "IMAGE_TYPES", (function() {
            return n.c
        }
        )),
        i.d(t, "_getDebugPlatformInfo", (function() {
            return n.d
        }
        ));
        var r = i(9);
        i.d(t, "downloadPhoto", (function() {
            return r.a
        }
        )),
        t.default = n.a
    }
    , function(e, t, i) {
        function n(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        i.d(t, "a", (function() {
            return s
        }
        ));
        var r = i(2)
          , a = i(3)
          , o = function() {
            function e(e, t) {
                for (var i = 0; i < t.length; i++) {
                    var n = t[i];
                    n.enumerable = n.enumerable || !1,
                    n.configurable = !0,
                    "value"in n && (n.writable = !0),
                    Object.defineProperty(e, n.key, n)
                }
            }
            return function(t, i, n) {
                return i && e(t.prototype, i),
                n && e(t, n),
                t
            }
        }()
          , s = function() {
            function e() {
                n(this, e)
            }
            return o(e, null, [{
                key: "getDataUri",
                value: function(e, t) {
                    var i = t.sizeFactor
                      , n = t.imageType
                      , a = t.imageCompression
                      , o = t.isImageMirror
                      , s = e.videoWidth
                      , l = e.videoHeight
                      , c = Object(r.c)(s, l, i)
                      , u = c.imageWidth
                      , d = c.imageHeight
                      , h = document.createElement("canvas");
                    h.width = u,
                    h.height = d;
                    var g = h.getContext("2d");
                    return o && g.setTransform(-1, 0, 0, 1, h.width, 0),
                    g.drawImage(e, 0, 0, u, d),
                    Object(r.b)(h, n, a)
                }
            }, {
                key: "getWindowURL",
                value: function() {
                    return window.URL || window.webkitURL || window.mozURL || window.msURL
                }
            }, {
                key: "getNavigatorMediaDevices",
                value: function() {
                    var e = null
                      , t = !(!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia)
                      , i = !(!navigator.mozGetUserMedia && !navigator.webkitGetUserMedia);
                    if (t)
                        e = navigator.mediaDevices;
                    else if (i) {
                        var n = navigator.mozGetUserMedia || navigator.webkitGetUserMedia
                          , r = {
                            getUserMedia: function(e) {
                                return new Promise((function(t, i) {
                                    n.call(navigator, e, t, i)
                                }
                                ))
                            }
                        };
                        e = Object.assign(n, r)
                    }
                    return e
                }
            }, {
                key: "isSupportedFacingMode",
                value: function() {
                    return e.getNavigatorMediaDevices().getSupportedConstraints().facingMode
                }
            }, {
                key: "getIdealConstraints",
                value: function(t, i) {
                    if (!Object(r.e)(t, i))
                        return a.d;
                    var n = e.getNavigatorMediaDevices().getSupportedConstraints();
                    if (!n.width || !n.height)
                        return console.error("Constraint width or height not supported! fallback to default resolution"),
                        a.d;
                    var o = void 0
                      , s = void 0;
                    return t && (a.e.includes(t) ? o = t : s = {
                        exact: t
                    }),
                    {
                        audio: !1,
                        video: {
                            facingMode: o,
                            deviceId: s,
                            width: i && i.width,
                            height: i && i.height
                        }
                    }
                }
            }, {
                key: "getMaxResolutionConstraints",
                value: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ""
                      , i = arguments[1];
                    console.warn("getMaxResolutionConstraints() numberOfMaxResolutionTry:", i);
                    var n = [{
                        width: {
                            min: 640
                        }
                    }, {
                        width: {
                            min: 800
                        }
                    }, {
                        width: {
                            min: 900
                        }
                    }, {
                        width: {
                            min: 1024
                        }
                    }, {
                        width: {
                            min: 1080
                        }
                    }, {
                        width: {
                            min: 1280
                        }
                    }, {
                        width: {
                            min: 1920
                        }
                    }, {
                        width: {
                            min: 2560
                        }
                    }, {
                        width: {
                            min: 3840
                        }
                    }]
                      , a = e.getIdealConstraints(t, {});
                    if (0 === i)
                        return Object(r.d)() ? (console.warn("fallback to iOS constraints"),
                        e.getIdealConstraints(t, {
                            width: {
                                min: 640,
                                ideal: 3840
                            },
                            height: {
                                min: 480,
                                ideal: 2160
                            }
                        })) : (a.video.advanced = n,
                        a);
                    if (i < n.length) {
                        var o = n.slice(0, -i);
                        return a.video.advanced = o,
                        a
                    }
                    return null
                }
            }, {
                key: "FACING_MODES",
                get: function() {
                    return a.a
                }
            }, {
                key: "IMAGE_TYPES",
                get: function() {
                    return a.c
                }
            }]),
            e
        }()
    }
    , function(e, t, i) {
        function n(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        i.d(t, "a", (function() {
            return l
        }
        ));
        var r = i(1)
          , a = i(8)
          , o = function() {
            function e(e, t) {
                for (var i = 0; i < t.length; i++) {
                    var n = t[i];
                    n.enumerable = n.enumerable || !1,
                    n.configurable = !0,
                    "value"in n && (n.writable = !0),
                    Object.defineProperty(e, n.key, n)
                }
            }
            return function(t, i, n) {
                return i && e(t.prototype, i),
                n && e(t, n),
                t
            }
        }()
          , s = r.a.IMAGE_TYPES.PNG
          , l = function() {
            function e(t) {
                n(this, e),
                this.videoElement = t,
                this.stream = null,
                this.numberOfMaxResolutionTry = 0,
                this.settings = null,
                this.cameras = [],
                this.windowURL = r.a.getWindowURL(),
                this.mediaDevices = r.a.getNavigatorMediaDevices()
            }
            return o(e, [{
                key: "_getStreamDevice",
                value: function(e, t) {
                    var i = this;
                    return new Promise((function(n, a) {
                        var o = r.a.getIdealConstraints(e, t);
                        i.mediaDevices.getUserMedia(o).then((function(e) {
                            i._gotStream(e),
                            n(e)
                        }
                        )).catch((function(e) {
                            a(e)
                        }
                        ))
                    }
                    ))
                }
            }, {
                key: "_getStreamDeviceMaxResolution",
                value: function(e) {
                    var t = this
                      , i = r.a.getMaxResolutionConstraints(e, this.numberOfMaxResolutionTry);
                    if (null == i) {
                        var n = {};
                        return this._getStreamDevice(e, n)
                    }
                    return new Promise((function(n, r) {
                        t.mediaDevices.getUserMedia(i).then((function(e) {
                            t._gotStream(e),
                            n(e)
                        }
                        )).catch((function(i) {
                            setTimeout((function() {
                                t.numberOfMaxResolutionTry += 1,
                                t._getStreamDeviceMaxResolution(e).catch((function() {
                                    r(i)
                                }
                                ))
                            }
                            ), 20)
                        }
                        ))
                    }
                    ))
                }
            }, {
                key: "_setVideoSrc",
                value: function(e) {
                    if ("srcObject"in this.videoElement)
                        this.videoElement.srcObject = e;
                    else {
                        var t = this.windowURL.createObjectURL(e);
                        this.videoElement.src = t
                    }
                }
            }, {
                key: "_setSettings",
                value: function(e) {
                    this.settings = null;
                    var t = e && e.getTracks ? e.getTracks() : [];
                    t.length > 0 && t[0].getSettings && (this.settings = t[0].getSettings())
                }
            }, {
                key: "_enumerateCamerasPromise",
                value: function() {
                    var e = this;
                    return new Promise((function(t, i) {
                        var n = [];
                        e.mediaDevices.enumerateDevices().then((function(e) {
                            e.forEach((function(e) {
                                "videoinput" === e.kind && e.deviceId && n.push(e)
                            }
                            )),
                            t(n)
                        }
                        )).catch((function(e) {
                            i(e)
                        }
                        ))
                    }
                    ))
                }
            }, {
                key: "_gotStream",
                value: function(e) {
                    this.stream = e,
                    this._setSettings(e),
                    this._setVideoSrc(e)
                }
            }, {
                key: "getCameraSettings",
                value: function() {
                    return this.settings
                }
            }, {
                key: "enumerateCameras",
                value: function() {
                    var e = this;
                    return this.stream ? this._enumerateCamerasPromise() : this.stopCamera().then((function() {}
                    )).catch((function() {}
                    )).then((function() {
                        var t = {
                            video: !0
                        };
                        return e.mediaDevices.getUserMedia(t).then((function(e) {
                            setTimeout((function() {
                                e.getTracks().forEach((function(e) {
                                    e.stop()
                                }
                                ))
                            }
                            ), 20)
                        }
                        )).then((function() {}
                        )).catch((function() {}
                        )).then((function() {
                            return e._enumerateCamerasPromise()
                        }
                        ))
                    }
                    ))
                }
            }, {
                key: "startCamera",
                value: function(e, t) {
                    var i = this;
                    return this.stopCamera().then((function() {}
                    )).catch((function() {}
                    )).then((function() {
                        return i._getStreamDevice(e, t)
                    }
                    ))
                }
            }, {
                key: "startCameraMaxResolution",
                value: function() {
                    var e = this
                      , t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
                    return this.numberOfMaxResolutionTry = 0,
                    this.stopCamera().then((function() {}
                    )).catch((function() {}
                    )).then((function() {
                        return e._getStreamDeviceMaxResolution(t)
                    }
                    ))
                }
            }, {
                key: "getDataUri",
                value: function(e) {
                    var t = {
                        sizeFactor: void 0 === e.sizeFactor ? a.c : e.sizeFactor,
                        imageType: void 0 === e.imageType ? s : e.imageType,
                        imageCompression: void 0 === e.imageCompression ? a.a : e.imageCompression,
                        isImageMirror: void 0 === e.isImageMirror ? a.b : e.isImageMirror
                    };
                    return r.a.getDataUri(this.videoElement, t)
                }
            }, {
                key: "stopCamera",
                value: function() {
                    var e = this;
                    return new Promise((function(t, i) {
                        e.stream && (e.stream.getTracks().forEach((function(e) {
                            e.stop()
                        }
                        )),
                        e.videoElement.src = "",
                        e.stream = null,
                        e._setSettings(null),
                        t()),
                        i(Error("no stream to stop!"))
                    }
                    ))
                }
            }]),
            e
        }()
    }
    , function(e, t, i) {
        i.d(t, "c", (function() {
            return n
        }
        )),
        i.d(t, "a", (function() {
            return r
        }
        )),
        i.d(t, "b", (function() {
            return a
        }
        ));
        var n = 1
          , r = null
          , a = !1
    }
    , function(e, t, i) {
        var n = i(10);
        i.d(t, "a", (function() {
            return n.a
        }
        ))
    }
    , function(e, t, i) {
        function n(e) {
            for (var t = atob(e.split(",")[1]), i = e.split(",")[0].split(":")[1].split(";")[0], n = new ArrayBuffer(t.length), r = new Uint8Array(n), a = 0; a < t.length; a++)
                r[a] = t.charCodeAt(a);
            return new Blob([n],{
                type: i
            })
        }
        function r(e, t) {
            return (e += "").length >= t ? e : new Array(t - e.length + 1).join("0") + e
        }
        function a(e) {
            var t = c.c.PNG;
            return "image/jpeg" === e && (t = c.c.JPG),
            t
        }
        function o(e, t, i) {
            return e + "-" + r(t, 4) + "." + a(i)
        }
        function s(e, t, i) {
            window.URL = window.webkitURL || window.URL;
            var n = document.createElement("a");
            n.download = o(t, i, e.type),
            n.href = window.URL.createObjectURL(e);
            var r = document.createEvent("MouseEvents");
            r.initMouseEvent("click", !0, !0, window, 1, 0, 0, 0, 0, !1, !1, !1, !1, 0, null),
            n.dispatchEvent(r)
        }
        function l(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "photo"
              , i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
            s(n(e), t, i)
        }
        t.a = l;
        var c = i(0)
    }
    ]);
    var _o = $(fo);
    const xo = [{
        os: {
            name: "Android"
        },
        label: "2 0"
    }];
    async function vo() {
        const e = (await async function() {
            let e = await navigator.mediaDevices.enumerateDevices();
            if (e.filter((e=>"videoinput" === e.kind)).every((e=>"" === e.label))) {
                const t = await navigator.mediaDevices.getUserMedia({
                    video: {
                        facingMode: {
                            ideal: "environment"
                        }
                    },
                    audio: !1
                });
                e = await navigator.mediaDevices.enumerateDevices(),
                t.getTracks().forEach((e=>e.stop()))
            }
            return e
        }()).filter((e=>{
            if (!(null == e ? void 0 : e.label) || "videoinput" !== e.kind || "" === e.label)
                return !1;
            const t = e.label.toLowerCase();
            return bo.some((e=>t.includes(e)))
        }
        ))
          , t = Da.UAParser()
          , i = e.find((e=>xo.find((i=>i.os.name === t.os.name && e.label.includes(i.label)))));
        return i ? {
            optionalCameras: e,
            selectedCamera: i
        } : {
            optionalCameras: e
        }
    }
    const bo = ["rear", "back", "rück", "arrière", "trasera", "trás", "traseira", "posteriore", "后面", "後面", "背面", "后置", "後置", "背置", "задней", "الخلفية", "후", "arka", "achterzijde", "หลัง", "baksidan", "bagside", "sau", "bak", "tylny", "takakamera", "belakang", "אחורית", "πίσω", "spate", "hátsó", "zadní", "darrere", "zadná", "задня", "stražnja", "belakang", "बैक", "camera2 0, facing back"]
      , yo = {
        width: {
            min: 640,
            max: 3840,
            ideal: 3840
        },
        height: {
            min: 480,
            max: 2160,
            ideal: 2160
        },
        frameRate: 30
    }
      , wo = {
        width: {
            min: 640,
            max: 1280,
            ideal: 1280
        },
        height: {
            min: 480,
            max: 720,
            ideal: 720
        },
        frameRate: 30
    }
      , Ao = e=>{
        const t = ao({
            tagName: "video",
            style: {
                position: "absolute",
                zIndex: "0",
                top: "0",
                width: "100%",
                height: "100%",
                objectFit: "cover"
            },
            id: "video",
            testid: "video"
        });
        return t.style.transform = "user" === e ? "scaleX(-1)" : "",
        t.autoplay = !0,
        t.muted = !0,
        t.setAttribute("playsinline", "true"),
        t
    }
      , ko = {
        title: "other_error_code_title",
        message: "other_error_code_message"
    }
      , Eo = {
        ok: ko,
        document_face_not_found: ko,
        restricted_criteria: ko,
        other: ko,
        glare: {
            title: "glare_title",
            message: "glare_message"
        },
        document_not_found: {
            title: "document_not_found_title",
            message: "document_not_found_message"
        },
        blur: {
            title: "blur_title",
            message: "blur_message"
        },
        document_not_supported: {
            title: "document_not_supported_title",
            message: "document_not_supported_message"
        },
        obstructed: {
            title: "obstructed_title",
            message: "obstructed_message"
        },
        document_not_matching: {
            title: "document_not_matching_title",
            message: "document_not_matching_message"
        },
        face_not_found: {
            title: "face_not_found_title",
            message: "face_not_found_message"
        },
        wrong_document_side: {
            title: "wrong_document_side_title",
            message: "wrong_document_side_message"
        },
        glare_selfie: {
            title: "glare_selfie_title",
            message: "glare_selfie_message"
        },
        blur_selfie: {
            title: "blur_selfie_title",
            message: "blur_selfie_message"
        },
        multi_face: {
            title: "multi_face_title",
            message: "multi_face_message"
        },
        face_rotated: {
            title: "face_rotated_title",
            message: "face_rotated_message"
        },
        face_too_small: {
            title: "face_too_small_title",
            message: "face_too_small_message"
        },
        face_too_close: {
            title: "face_too_close_title",
            message: "face_too_close_message"
        },
        closed_eyes: {
            title: "closed_eyes_title",
            message: "closed_eyes_message"
        },
        face_angle_too_large: {
            title: "face_angle_too_large_title",
            message: "face_angle_too_large_message"
        },
        face_close_to_border: {
            title: "face_close_to_border_title",
            message: "face_close_to_border_message"
        },
        face_occluded: {
            title: "face_occluded_title",
            message: "face_occluded_message"
        },
        face_cropped: {
            title: "face_cropped_title",
            message: "face_cropped_message"
        },
        no_face: {
            title: "no_face_title",
            message: "no_face_message"
        },
        barcode_not_found: {
            title: "barcode_not_found_title",
            message: "barcode_not_found_message"
        }
    }
      , Co = {
        document_front: {
            page: "page_header_document",
            title: "main_title_document_front",
            instructions: "second_title_document_front"
        },
        document_back: {
            page: "page_header_document",
            title: "main_title_document_back",
            instructions: "second_title_document_back"
        },
        selfie: {
            page: "page_header_face",
            title: "main_title_document_face",
            instructions: "second_title_document_face"
        }
    }
      , Do = (e,t)=>{
        const i = ao({
            tagName: "div",
            style: {
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "center",
                position: "relative",
                zIndex: "1",
                background: "transparent",
                boxShadow: "0 0 0 1000px rgb(0 0 0 / 50%)",
                borderStyle: "solid",
                borderWidth: "1px",
                borderColor: "white"
            },
            id: "overlay-frame ".concat(e),
            testid: "overlay-frame ".concat(e)
        });
        if ("environment" === e) {
            !function(e) {
                oo(e, ao({
                    tagName: "div",
                    style: {
                        position: "absolute",
                        top: "-2px",
                        left: "-2px",
                        width: "20px",
                        height: "20px",
                        backgroundColor: "transparent",
                        borderTopStyle: "solid",
                        borderRightStyle: "none",
                        borderBottomStyle: "none",
                        borderLeftStyle: "solid",
                        borderColor: "white",
                        borderWidth: "4px"
                    },
                    id: "overlay-frame__top-left",
                    testid: "overlay-frame__top-left"
                })),
                oo(e, ao({
                    tagName: "div",
                    style: {
                        position: "absolute",
                        top: "-2px",
                        right: "-2px",
                        width: "20px",
                        height: "20px",
                        backgroundColor: "transparent",
                        borderTopStyle: "solid",
                        borderRightStyle: "solid",
                        borderBottomStyle: "none",
                        borderLeftStyle: "none",
                        borderColor: "white",
                        borderWidth: "4px"
                    },
                    id: "overlay-frame__top-right",
                    testid: "overlay-frame__top-right"
                })),
                oo(e, ao({
                    tagName: "div",
                    style: {
                        position: "absolute",
                        bottom: "-2px",
                        right: "-2px",
                        width: "20px",
                        height: "20px",
                        backgroundColor: "transparent",
                        borderTopStyle: "none",
                        borderRightStyle: "solid",
                        borderBottomStyle: "solid",
                        borderLeftStyle: "none",
                        borderColor: "white",
                        borderWidth: "4px"
                    },
                    id: "overlay-frame__bottom-right",
                    testid: "overlay-frame__bottom-right"
                })),
                oo(e, ao({
                    tagName: "div",
                    style: {
                        position: "absolute",
                        bottom: "-2px",
                        left: "-2px",
                        width: "20px",
                        height: "20px",
                        backgroundColor: "transparent",
                        borderTopStyle: "none",
                        borderRightStyle: "none",
                        borderBottomStyle: "solid",
                        borderLeftStyle: "solid",
                        borderColor: "white",
                        borderWidth: "4px"
                    },
                    id: "overlay-frame__bottom-left",
                    testid: "overlay-frame__bottom-left"
                }))
            }(i);
            const e = .83 * t.clientWidth;
            i.style.width = "".concat(e, "px"),
            i.style.height = "".concat(.65 * e, "px"),
            i.style.maxHeight = "".concat(.5 * window.innerHeight, "px")
        } else {
            const e = .83 * t.clientWidth;
            i.style.width = "".concat(.8 * e, "px"),
            i.style.height = "".concat(e, "px"),
            i.style.minHeight = "".concat(.8 * e, "px"),
            i.style.maxHeight = "".concat(.5 * window.innerHeight, "px"),
            i.style.borderRadius = "50%",
            i.style.borderStyle = "none"
        }
        return i
    }
    ;
    function So() {
        const e = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        return e.setAttribute("width", "16px"),
        e.setAttribute("height", "16px"),
        e.innerHTML = '\n    <path d="M8 16C12.4187 16 16 12.4187 16 8C16 3.58125 12.4187 0 8 0C3.58125 0 0 3.58125 0 8C0 12.4187 3.58125 16 8 16ZM8 4C8.41562 4 8.75 4.33437 8.75 4.75V8.25C8.75 8.66562 8.41562 9 8 9C7.58437 9 7.25 8.66562 7.25 8.25V4.75C7.25 4.33437 7.58437 4 8 4ZM9 11C9 11.5531 8.55313 12 8 12C7.44688 12 7 11.5531 7 11C7 10.4469 7.44688 10 8 10C8.55313 10 9 10.4469 9 11Z" fill="#F2F2F2"/>\n  ',
        e
    }
    const Io = {
        all: {
            color: "black",
            margin: "0"
        },
        1: {
            color: "white",
            fontSize: "var(--font-size-4xl)",
            fontWeight: "var(--font-weight-bold)"
        },
        2: {
            color: "white",
            fontSize: "var(--font-size-2xl)",
            fontWeight: "var(--font-weight-semibold)"
        },
        3: {
            color: "white",
            fontSize: "var(--font-size-xl)",
            fontWeight: "var(--font-weight-medium)"
        },
        4: {
            fontSize: "var(--font-size-lg)",
            fontWeight: "var(--font-weight-regular)"
        },
        5: {
            fontSize: "var(--font-size-md)",
            fontWeight: "var(--font-weight-light)"
        }
    }
      , To = e=>{
        let {text: t, level: n=1, style: r={}, id: a, testid: o} = e;
        const s = ao({
            tagName: "h".concat(n),
            style: i(i(i({}, Io.all), Io[n]), r),
            id: a,
            testid: o
        });
        return s.textContent = t,
        s.id = a,
        s
    }
    ;
    function Mo() {
        return {
            async: !1,
            breaks: !1,
            extensions: null,
            gfm: !0,
            hooks: null,
            pedantic: !1,
            renderer: null,
            silent: !1,
            tokenizer: null,
            walkTokens: null
        }
    }
    let zo = {
        async: !1,
        breaks: !1,
        extensions: null,
        gfm: !0,
        hooks: null,
        pedantic: !1,
        renderer: null,
        silent: !1,
        tokenizer: null,
        walkTokens: null
    };
    function Fo(e) {
        zo = e
    }
    const Bo = /[&<>"']/
      , Ro = new RegExp(Bo.source,"g")
      , Oo = /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/
      , Po = new RegExp(Oo.source,"g")
      , No = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
    }
      , Lo = e=>No[e];
    function jo(e, t) {
        if (t) {
            if (Bo.test(e))
                return e.replace(Ro, Lo)
        } else if (Oo.test(e))
            return e.replace(Po, Lo);
        return e
    }
    const Uo = /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi;
    const qo = /(^|[^\[])\^/g;
    function Ko(e, t) {
        e = "string" == typeof e ? e : e.source,
        t = t || "";
        const i = {
            replace: (t,n)=>(n = (n = "object" == typeof n && "source"in n ? n.source : n).replace(qo, "$1"),
            e = e.replace(t, n),
            i),
            getRegex: ()=>new RegExp(e,t)
        };
        return i
    }
    function Ho(e) {
        try {
            e = encodeURI(e).replace(/%25/g, "%")
        } catch (e) {
            return null
        }
        return e
    }
    const Vo = {
        exec: ()=>null
    };
    function Go(e, t) {
        const i = e.replace(/\|/g, ((e,t,i)=>{
            let n = !1
              , r = t;
            for (; --r >= 0 && "\\" === i[r]; )
                n = !n;
            return n ? "|" : " |"
        }
        )).split(/ \|/);
        let n = 0;
        if (i[0].trim() || i.shift(),
        i.length > 0 && !i[i.length - 1].trim() && i.pop(),
        t)
            if (i.length > t)
                i.splice(t);
            else
                for (; i.length < t; )
                    i.push("");
        for (; n < i.length; n++)
            i[n] = i[n].trim().replace(/\\\|/g, "|");
        return i
    }
    function Jo(e, t, i) {
        const n = e.length;
        if (0 === n)
            return "";
        let r = 0;
        for (; r < n; ) {
            const a = e.charAt(n - r - 1);
            if (a !== t || i) {
                if (a === t || !i)
                    break;
                r++
            } else
                r++
        }
        return e.slice(0, n - r)
    }
    function Wo(e, t, i, n) {
        const r = t.href
          , a = t.title ? jo(t.title) : null
          , o = e[1].replace(/\\([\[\]])/g, "$1");
        if ("!" !== e[0].charAt(0)) {
            n.state.inLink = !0;
            const e = {
                type: "link",
                raw: i,
                href: r,
                title: a,
                text: o,
                tokens: n.inlineTokens(o)
            };
            return n.state.inLink = !1,
            e
        }
        return {
            type: "image",
            raw: i,
            href: r,
            title: a,
            text: jo(o)
        }
    }
    class Zo {
        constructor(e) {
            r(this, "options", void 0),
            r(this, "rules", void 0),
            r(this, "lexer", void 0),
            this.options = e || zo
        }
        space(e) {
            const t = this.rules.block.newline.exec(e);
            if (t && t[0].length > 0)
                return {
                    type: "space",
                    raw: t[0]
                }
        }
        code(e) {
            const t = this.rules.block.code.exec(e);
            if (t) {
                const e = t[0].replace(/^ {1,4}/gm, "");
                return {
                    type: "code",
                    raw: t[0],
                    codeBlockStyle: "indented",
                    text: this.options.pedantic ? e : Jo(e, "\n")
                }
            }
        }
        fences(e) {
            const t = this.rules.block.fences.exec(e);
            if (t) {
                const e = t[0]
                  , i = function(e, t) {
                    const i = e.match(/^(\s+)(?:```)/);
                    if (null === i)
                        return t;
                    const n = i[1];
                    return t.split("\n").map((e=>{
                        const t = e.match(/^\s+/);
                        if (null === t)
                            return e;
                        const [i] = t;
                        return i.length >= n.length ? e.slice(n.length) : e
                    }
                    )).join("\n")
                }(e, t[3] || "");
                return {
                    type: "code",
                    raw: e,
                    lang: t[2] ? t[2].trim().replace(this.rules.inline._escapes, "$1") : t[2],
                    text: i
                }
            }
        }
        heading(e) {
            const t = this.rules.block.heading.exec(e);
            if (t) {
                let e = t[2].trim();
                if (/#$/.test(e)) {
                    const t = Jo(e, "#");
                    this.options.pedantic ? e = t.trim() : t && !/ $/.test(t) || (e = t.trim())
                }
                return {
                    type: "heading",
                    raw: t[0],
                    depth: t[1].length,
                    text: e,
                    tokens: this.lexer.inline(e)
                }
            }
        }
        hr(e) {
            const t = this.rules.block.hr.exec(e);
            if (t)
                return {
                    type: "hr",
                    raw: t[0]
                }
        }
        blockquote(e) {
            const t = this.rules.block.blockquote.exec(e);
            if (t) {
                const e = Jo(t[0].replace(/^ *>[ \t]?/gm, ""), "\n")
                  , i = this.lexer.state.top;
                this.lexer.state.top = !0;
                const n = this.lexer.blockTokens(e);
                return this.lexer.state.top = i,
                {
                    type: "blockquote",
                    raw: t[0],
                    tokens: n,
                    text: e
                }
            }
        }
        list(e) {
            let t = this.rules.block.list.exec(e);
            if (t) {
                let i = t[1].trim();
                const n = i.length > 1
                  , r = {
                    type: "list",
                    raw: "",
                    ordered: n,
                    start: n ? +i.slice(0, -1) : "",
                    loose: !1,
                    items: []
                };
                i = n ? "\\d{1,9}\\".concat(i.slice(-1)) : "\\".concat(i),
                this.options.pedantic && (i = n ? i : "[*+-]");
                const a = new RegExp("^( {0,3}".concat(i, ")((?:[\t ][^\\n]*)?(?:\\n|$))"));
                let o = ""
                  , s = ""
                  , l = !1;
                for (; e; ) {
                    let i = !1;
                    if (!(t = a.exec(e)))
                        break;
                    if (this.rules.block.hr.test(e))
                        break;
                    o = t[0],
                    e = e.substring(o.length);
                    let n = t[2].split("\n", 1)[0].replace(/^\t+/, (e=>" ".repeat(3 * e.length)))
                      , c = e.split("\n", 1)[0]
                      , u = 0;
                    this.options.pedantic ? (u = 2,
                    s = n.trimStart()) : (u = t[2].search(/[^ ]/),
                    u = u > 4 ? 1 : u,
                    s = n.slice(u),
                    u += t[1].length);
                    let d = !1;
                    if (!n && /^ *$/.test(c) && (o += c + "\n",
                    e = e.substring(c.length + 1),
                    i = !0),
                    !i) {
                        const t = new RegExp("^ {0,".concat(Math.min(3, u - 1), "}(?:[*+-]|\\d{1,9}[.)])((?:[ \t][^\\n]*)?(?:\\n|$))"))
                          , i = new RegExp("^ {0,".concat(Math.min(3, u - 1), "}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)"))
                          , r = new RegExp("^ {0,".concat(Math.min(3, u - 1), "}(?:```|~~~)"))
                          , a = new RegExp("^ {0,".concat(Math.min(3, u - 1), "}#"));
                        for (; e; ) {
                            const l = e.split("\n", 1)[0];
                            if (c = l,
                            this.options.pedantic && (c = c.replace(/^ {1,4}(?=( {4})*[^ ])/g, "  ")),
                            r.test(c))
                                break;
                            if (a.test(c))
                                break;
                            if (t.test(c))
                                break;
                            if (i.test(e))
                                break;
                            if (c.search(/[^ ]/) >= u || !c.trim())
                                s += "\n" + c.slice(u);
                            else {
                                if (d)
                                    break;
                                if (n.search(/[^ ]/) >= 4)
                                    break;
                                if (r.test(n))
                                    break;
                                if (a.test(n))
                                    break;
                                if (i.test(n))
                                    break;
                                s += "\n" + c
                            }
                            d || c.trim() || (d = !0),
                            o += l + "\n",
                            e = e.substring(l.length + 1),
                            n = c.slice(u)
                        }
                    }
                    r.loose || (l ? r.loose = !0 : /\n *\n *$/.test(o) && (l = !0));
                    let h, g = null;
                    this.options.gfm && (g = /^\[[ xX]\] /.exec(s),
                    g && (h = "[ ] " !== g[0],
                    s = s.replace(/^\[[ xX]\] +/, ""))),
                    r.items.push({
                        type: "list_item",
                        raw: o,
                        task: !!g,
                        checked: h,
                        loose: !1,
                        text: s,
                        tokens: []
                    }),
                    r.raw += o
                }
                r.items[r.items.length - 1].raw = o.trimEnd(),
                r.items[r.items.length - 1].text = s.trimEnd(),
                r.raw = r.raw.trimEnd();
                for (let e = 0; e < r.items.length; e++)
                    if (this.lexer.state.top = !1,
                    r.items[e].tokens = this.lexer.blockTokens(r.items[e].text, []),
                    !r.loose) {
                        const t = r.items[e].tokens.filter((e=>"space" === e.type))
                          , i = t.length > 0 && t.some((e=>/\n.*\n/.test(e.raw)));
                        r.loose = i
                    }
                if (r.loose)
                    for (let e = 0; e < r.items.length; e++)
                        r.items[e].loose = !0;
                return r
            }
        }
        html(e) {
            const t = this.rules.block.html.exec(e);
            if (t) {
                return {
                    type: "html",
                    block: !0,
                    raw: t[0],
                    pre: "pre" === t[1] || "script" === t[1] || "style" === t[1],
                    text: t[0]
                }
            }
        }
        def(e) {
            const t = this.rules.block.def.exec(e);
            if (t) {
                const e = t[1].toLowerCase().replace(/\s+/g, " ")
                  , i = t[2] ? t[2].replace(/^<(.*)>$/, "$1").replace(this.rules.inline._escapes, "$1") : ""
                  , n = t[3] ? t[3].substring(1, t[3].length - 1).replace(this.rules.inline._escapes, "$1") : t[3];
                return {
                    type: "def",
                    tag: e,
                    raw: t[0],
                    href: i,
                    title: n
                }
            }
        }
        table(e) {
            const t = this.rules.block.table.exec(e);
            if (t) {
                if (!/[:|]/.test(t[2]))
                    return;
                const e = {
                    type: "table",
                    raw: t[0],
                    header: Go(t[1]).map((e=>({
                        text: e,
                        tokens: []
                    }))),
                    align: t[2].replace(/^\||\| *$/g, "").split("|"),
                    rows: t[3] && t[3].trim() ? t[3].replace(/\n[ \t]*$/, "").split("\n") : []
                };
                if (e.header.length === e.align.length) {
                    let t, i, n, r, a = e.align.length;
                    for (t = 0; t < a; t++) {
                        const i = e.align[t];
                        i && (/^ *-+: *$/.test(i) ? e.align[t] = "right" : /^ *:-+: *$/.test(i) ? e.align[t] = "center" : /^ *:-+ *$/.test(i) ? e.align[t] = "left" : e.align[t] = null)
                    }
                    for (a = e.rows.length,
                    t = 0; t < a; t++)
                        e.rows[t] = Go(e.rows[t], e.header.length).map((e=>({
                            text: e,
                            tokens: []
                        })));
                    for (a = e.header.length,
                    i = 0; i < a; i++)
                        e.header[i].tokens = this.lexer.inline(e.header[i].text);
                    for (a = e.rows.length,
                    i = 0; i < a; i++)
                        for (r = e.rows[i],
                        n = 0; n < r.length; n++)
                            r[n].tokens = this.lexer.inline(r[n].text);
                    return e
                }
            }
        }
        lheading(e) {
            const t = this.rules.block.lheading.exec(e);
            if (t)
                return {
                    type: "heading",
                    raw: t[0],
                    depth: "=" === t[2].charAt(0) ? 1 : 2,
                    text: t[1],
                    tokens: this.lexer.inline(t[1])
                }
        }
        paragraph(e) {
            const t = this.rules.block.paragraph.exec(e);
            if (t) {
                const e = "\n" === t[1].charAt(t[1].length - 1) ? t[1].slice(0, -1) : t[1];
                return {
                    type: "paragraph",
                    raw: t[0],
                    text: e,
                    tokens: this.lexer.inline(e)
                }
            }
        }
        text(e) {
            const t = this.rules.block.text.exec(e);
            if (t)
                return {
                    type: "text",
                    raw: t[0],
                    text: t[0],
                    tokens: this.lexer.inline(t[0])
                }
        }
        escape(e) {
            const t = this.rules.inline.escape.exec(e);
            if (t)
                return {
                    type: "escape",
                    raw: t[0],
                    text: jo(t[1])
                }
        }
        tag(e) {
            const t = this.rules.inline.tag.exec(e);
            if (t)
                return !this.lexer.state.inLink && /^<a /i.test(t[0]) ? this.lexer.state.inLink = !0 : this.lexer.state.inLink && /^<\/a>/i.test(t[0]) && (this.lexer.state.inLink = !1),
                !this.lexer.state.inRawBlock && /^<(pre|code|kbd|script)(\s|>)/i.test(t[0]) ? this.lexer.state.inRawBlock = !0 : this.lexer.state.inRawBlock && /^<\/(pre|code|kbd|script)(\s|>)/i.test(t[0]) && (this.lexer.state.inRawBlock = !1),
                {
                    type: "html",
                    raw: t[0],
                    inLink: this.lexer.state.inLink,
                    inRawBlock: this.lexer.state.inRawBlock,
                    block: !1,
                    text: t[0]
                }
        }
        link(e) {
            const t = this.rules.inline.link.exec(e);
            if (t) {
                const e = t[2].trim();
                if (!this.options.pedantic && /^</.test(e)) {
                    if (!/>$/.test(e))
                        return;
                    const t = Jo(e.slice(0, -1), "\\");
                    if ((e.length - t.length) % 2 == 0)
                        return
                } else {
                    const e = function(e, t) {
                        if (-1 === e.indexOf(t[1]))
                            return -1;
                        let i = 0;
                        for (let n = 0; n < e.length; n++)
                            if ("\\" === e[n])
                                n++;
                            else if (e[n] === t[0])
                                i++;
                            else if (e[n] === t[1] && (i--,
                            i < 0))
                                return n;
                        return -1
                    }(t[2], "()");
                    if (e > -1) {
                        const i = (0 === t[0].indexOf("!") ? 5 : 4) + t[1].length + e;
                        t[2] = t[2].substring(0, e),
                        t[0] = t[0].substring(0, i).trim(),
                        t[3] = ""
                    }
                }
                let i = t[2]
                  , n = "";
                if (this.options.pedantic) {
                    const e = /^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(i);
                    e && (i = e[1],
                    n = e[3])
                } else
                    n = t[3] ? t[3].slice(1, -1) : "";
                return i = i.trim(),
                /^</.test(i) && (i = this.options.pedantic && !/>$/.test(e) ? i.slice(1) : i.slice(1, -1)),
                Wo(t, {
                    href: i ? i.replace(this.rules.inline._escapes, "$1") : i,
                    title: n ? n.replace(this.rules.inline._escapes, "$1") : n
                }, t[0], this.lexer)
            }
        }
        reflink(e, t) {
            let i;
            if ((i = this.rules.inline.reflink.exec(e)) || (i = this.rules.inline.nolink.exec(e))) {
                let e = (i[2] || i[1]).replace(/\s+/g, " ");
                if (e = t[e.toLowerCase()],
                !e) {
                    const e = i[0].charAt(0);
                    return {
                        type: "text",
                        raw: e,
                        text: e
                    }
                }
                return Wo(i, e, i[0], this.lexer)
            }
        }
        emStrong(e, t) {
            let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ""
              , n = this.rules.inline.emStrong.lDelim.exec(e);
            if (!n)
                return;
            if (n[3] && i.match(/[0-9A-Za-z\xAA\xB2\xB3\xB5\xB9\xBA\xBC-\xBE\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u0660-\u0669\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07C0-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088E\u08A0-\u08C9\u0904-\u0939\u093D\u0950\u0958-\u0961\u0966-\u096F\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09E6-\u09F1\u09F4-\u09F9\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A66-\u0A6F\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AE6-\u0AEF\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B66-\u0B6F\u0B71-\u0B77\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0BE6-\u0BF2\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5D\u0C60\u0C61\u0C66-\u0C6F\u0C78-\u0C7E\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDD\u0CDE\u0CE0\u0CE1\u0CE6-\u0CEF\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D58-\u0D61\u0D66-\u0D78\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DE6-\u0DEF\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F20-\u0F33\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F-\u1049\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u1090-\u1099\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1369-\u137C\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u17E0-\u17E9\u17F0-\u17F9\u1810-\u1819\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19DA\u1A00-\u1A16\u1A20-\u1A54\u1A80-\u1A89\u1A90-\u1A99\u1AA7\u1B05-\u1B33\u1B45-\u1B4C\u1B50-\u1B59\u1B83-\u1BA0\u1BAE-\u1BE5\u1C00-\u1C23\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2070\u2071\u2074-\u2079\u207F-\u2089\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2150-\u2189\u2460-\u249B\u24EA-\u24FF\u2776-\u2793\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2CFD\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u3192-\u3195\u31A0-\u31BF\u31F0-\u31FF\u3220-\u3229\u3248-\u324F\u3251-\u325F\u3280-\u3289\u32B1-\u32BF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7CA\uA7D0\uA7D1\uA7D3\uA7D5-\uA7D9\uA7F2-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA830-\uA835\uA840-\uA873\uA882-\uA8B3\uA8D0-\uA8D9\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA900-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF-\uA9D9\uA9E0-\uA9E4\uA9E6-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA50-\uAA59\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC\u{10000}-\u{1000B}\u{1000D}-\u{10026}\u{10028}-\u{1003A}\u{1003C}\u{1003D}\u{1003F}-\u{1004D}\u{10050}-\u{1005D}\u{10080}-\u{100FA}\u{10107}-\u{10133}\u{10140}-\u{10178}\u{1018A}\u{1018B}\u{10280}-\u{1029C}\u{102A0}-\u{102D0}\u{102E1}-\u{102FB}\u{10300}-\u{10323}\u{1032D}-\u{1034A}\u{10350}-\u{10375}\u{10380}-\u{1039D}\u{103A0}-\u{103C3}\u{103C8}-\u{103CF}\u{103D1}-\u{103D5}\u{10400}-\u{1049D}\u{104A0}-\u{104A9}\u{104B0}-\u{104D3}\u{104D8}-\u{104FB}\u{10500}-\u{10527}\u{10530}-\u{10563}\u{10570}-\u{1057A}\u{1057C}-\u{1058A}\u{1058C}-\u{10592}\u{10594}\u{10595}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10600}-\u{10736}\u{10740}-\u{10755}\u{10760}-\u{10767}\u{10780}-\u{10785}\u{10787}-\u{107B0}\u{107B2}-\u{107BA}\u{10800}-\u{10805}\u{10808}\u{1080A}-\u{10835}\u{10837}\u{10838}\u{1083C}\u{1083F}-\u{10855}\u{10858}-\u{10876}\u{10879}-\u{1089E}\u{108A7}-\u{108AF}\u{108E0}-\u{108F2}\u{108F4}\u{108F5}\u{108FB}-\u{1091B}\u{10920}-\u{10939}\u{10980}-\u{109B7}\u{109BC}-\u{109CF}\u{109D2}-\u{10A00}\u{10A10}-\u{10A13}\u{10A15}-\u{10A17}\u{10A19}-\u{10A35}\u{10A40}-\u{10A48}\u{10A60}-\u{10A7E}\u{10A80}-\u{10A9F}\u{10AC0}-\u{10AC7}\u{10AC9}-\u{10AE4}\u{10AEB}-\u{10AEF}\u{10B00}-\u{10B35}\u{10B40}-\u{10B55}\u{10B58}-\u{10B72}\u{10B78}-\u{10B91}\u{10BA9}-\u{10BAF}\u{10C00}-\u{10C48}\u{10C80}-\u{10CB2}\u{10CC0}-\u{10CF2}\u{10CFA}-\u{10D23}\u{10D30}-\u{10D39}\u{10E60}-\u{10E7E}\u{10E80}-\u{10EA9}\u{10EB0}\u{10EB1}\u{10F00}-\u{10F27}\u{10F30}-\u{10F45}\u{10F51}-\u{10F54}\u{10F70}-\u{10F81}\u{10FB0}-\u{10FCB}\u{10FE0}-\u{10FF6}\u{11003}-\u{11037}\u{11052}-\u{1106F}\u{11071}\u{11072}\u{11075}\u{11083}-\u{110AF}\u{110D0}-\u{110E8}\u{110F0}-\u{110F9}\u{11103}-\u{11126}\u{11136}-\u{1113F}\u{11144}\u{11147}\u{11150}-\u{11172}\u{11176}\u{11183}-\u{111B2}\u{111C1}-\u{111C4}\u{111D0}-\u{111DA}\u{111DC}\u{111E1}-\u{111F4}\u{11200}-\u{11211}\u{11213}-\u{1122B}\u{1123F}\u{11240}\u{11280}-\u{11286}\u{11288}\u{1128A}-\u{1128D}\u{1128F}-\u{1129D}\u{1129F}-\u{112A8}\u{112B0}-\u{112DE}\u{112F0}-\u{112F9}\u{11305}-\u{1130C}\u{1130F}\u{11310}\u{11313}-\u{11328}\u{1132A}-\u{11330}\u{11332}\u{11333}\u{11335}-\u{11339}\u{1133D}\u{11350}\u{1135D}-\u{11361}\u{11400}-\u{11434}\u{11447}-\u{1144A}\u{11450}-\u{11459}\u{1145F}-\u{11461}\u{11480}-\u{114AF}\u{114C4}\u{114C5}\u{114C7}\u{114D0}-\u{114D9}\u{11580}-\u{115AE}\u{115D8}-\u{115DB}\u{11600}-\u{1162F}\u{11644}\u{11650}-\u{11659}\u{11680}-\u{116AA}\u{116B8}\u{116C0}-\u{116C9}\u{11700}-\u{1171A}\u{11730}-\u{1173B}\u{11740}-\u{11746}\u{11800}-\u{1182B}\u{118A0}-\u{118F2}\u{118FF}-\u{11906}\u{11909}\u{1190C}-\u{11913}\u{11915}\u{11916}\u{11918}-\u{1192F}\u{1193F}\u{11941}\u{11950}-\u{11959}\u{119A0}-\u{119A7}\u{119AA}-\u{119D0}\u{119E1}\u{119E3}\u{11A00}\u{11A0B}-\u{11A32}\u{11A3A}\u{11A50}\u{11A5C}-\u{11A89}\u{11A9D}\u{11AB0}-\u{11AF8}\u{11C00}-\u{11C08}\u{11C0A}-\u{11C2E}\u{11C40}\u{11C50}-\u{11C6C}\u{11C72}-\u{11C8F}\u{11D00}-\u{11D06}\u{11D08}\u{11D09}\u{11D0B}-\u{11D30}\u{11D46}\u{11D50}-\u{11D59}\u{11D60}-\u{11D65}\u{11D67}\u{11D68}\u{11D6A}-\u{11D89}\u{11D98}\u{11DA0}-\u{11DA9}\u{11EE0}-\u{11EF2}\u{11F02}\u{11F04}-\u{11F10}\u{11F12}-\u{11F33}\u{11F50}-\u{11F59}\u{11FB0}\u{11FC0}-\u{11FD4}\u{12000}-\u{12399}\u{12400}-\u{1246E}\u{12480}-\u{12543}\u{12F90}-\u{12FF0}\u{13000}-\u{1342F}\u{13441}-\u{13446}\u{14400}-\u{14646}\u{16800}-\u{16A38}\u{16A40}-\u{16A5E}\u{16A60}-\u{16A69}\u{16A70}-\u{16ABE}\u{16AC0}-\u{16AC9}\u{16AD0}-\u{16AED}\u{16B00}-\u{16B2F}\u{16B40}-\u{16B43}\u{16B50}-\u{16B59}\u{16B5B}-\u{16B61}\u{16B63}-\u{16B77}\u{16B7D}-\u{16B8F}\u{16E40}-\u{16E96}\u{16F00}-\u{16F4A}\u{16F50}\u{16F93}-\u{16F9F}\u{16FE0}\u{16FE1}\u{16FE3}\u{17000}-\u{187F7}\u{18800}-\u{18CD5}\u{18D00}-\u{18D08}\u{1AFF0}-\u{1AFF3}\u{1AFF5}-\u{1AFFB}\u{1AFFD}\u{1AFFE}\u{1B000}-\u{1B122}\u{1B132}\u{1B150}-\u{1B152}\u{1B155}\u{1B164}-\u{1B167}\u{1B170}-\u{1B2FB}\u{1BC00}-\u{1BC6A}\u{1BC70}-\u{1BC7C}\u{1BC80}-\u{1BC88}\u{1BC90}-\u{1BC99}\u{1D2C0}-\u{1D2D3}\u{1D2E0}-\u{1D2F3}\u{1D360}-\u{1D378}\u{1D400}-\u{1D454}\u{1D456}-\u{1D49C}\u{1D49E}\u{1D49F}\u{1D4A2}\u{1D4A5}\u{1D4A6}\u{1D4A9}-\u{1D4AC}\u{1D4AE}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D505}\u{1D507}-\u{1D50A}\u{1D50D}-\u{1D514}\u{1D516}-\u{1D51C}\u{1D51E}-\u{1D539}\u{1D53B}-\u{1D53E}\u{1D540}-\u{1D544}\u{1D546}\u{1D54A}-\u{1D550}\u{1D552}-\u{1D6A5}\u{1D6A8}-\u{1D6C0}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6FA}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D734}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D76E}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D7A8}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7CB}\u{1D7CE}-\u{1D7FF}\u{1DF00}-\u{1DF1E}\u{1DF25}-\u{1DF2A}\u{1E030}-\u{1E06D}\u{1E100}-\u{1E12C}\u{1E137}-\u{1E13D}\u{1E140}-\u{1E149}\u{1E14E}\u{1E290}-\u{1E2AD}\u{1E2C0}-\u{1E2EB}\u{1E2F0}-\u{1E2F9}\u{1E4D0}-\u{1E4EB}\u{1E4F0}-\u{1E4F9}\u{1E7E0}-\u{1E7E6}\u{1E7E8}-\u{1E7EB}\u{1E7ED}\u{1E7EE}\u{1E7F0}-\u{1E7FE}\u{1E800}-\u{1E8C4}\u{1E8C7}-\u{1E8CF}\u{1E900}-\u{1E943}\u{1E94B}\u{1E950}-\u{1E959}\u{1EC71}-\u{1ECAB}\u{1ECAD}-\u{1ECAF}\u{1ECB1}-\u{1ECB4}\u{1ED01}-\u{1ED2D}\u{1ED2F}-\u{1ED3D}\u{1EE00}-\u{1EE03}\u{1EE05}-\u{1EE1F}\u{1EE21}\u{1EE22}\u{1EE24}\u{1EE27}\u{1EE29}-\u{1EE32}\u{1EE34}-\u{1EE37}\u{1EE39}\u{1EE3B}\u{1EE42}\u{1EE47}\u{1EE49}\u{1EE4B}\u{1EE4D}-\u{1EE4F}\u{1EE51}\u{1EE52}\u{1EE54}\u{1EE57}\u{1EE59}\u{1EE5B}\u{1EE5D}\u{1EE5F}\u{1EE61}\u{1EE62}\u{1EE64}\u{1EE67}-\u{1EE6A}\u{1EE6C}-\u{1EE72}\u{1EE74}-\u{1EE77}\u{1EE79}-\u{1EE7C}\u{1EE7E}\u{1EE80}-\u{1EE89}\u{1EE8B}-\u{1EE9B}\u{1EEA1}-\u{1EEA3}\u{1EEA5}-\u{1EEA9}\u{1EEAB}-\u{1EEBB}\u{1F100}-\u{1F10C}\u{1FBF0}-\u{1FBF9}\u{20000}-\u{2A6DF}\u{2A700}-\u{2B739}\u{2B740}-\u{2B81D}\u{2B820}-\u{2CEA1}\u{2CEB0}-\u{2EBE0}\u{2EBF0}-\u{2EE5D}\u{2F800}-\u{2FA1D}\u{30000}-\u{3134A}\u{31350}-\u{323AF}]/u))
                return;
            if (!(n[1] || n[2] || "") || !i || this.rules.inline.punctuation.exec(i)) {
                const i = [...n[0]].length - 1;
                let r, a, o = i, s = 0;
                const l = "*" === n[0][0] ? this.rules.inline.emStrong.rDelimAst : this.rules.inline.emStrong.rDelimUnd;
                for (l.lastIndex = 0,
                t = t.slice(-1 * e.length + i); null != (n = l.exec(t)); ) {
                    if (r = n[1] || n[2] || n[3] || n[4] || n[5] || n[6],
                    !r)
                        continue;
                    if (a = [...r].length,
                    n[3] || n[4]) {
                        o += a;
                        continue
                    }
                    if ((n[5] || n[6]) && i % 3 && !((i + a) % 3)) {
                        s += a;
                        continue
                    }
                    if (o -= a,
                    o > 0)
                        continue;
                    a = Math.min(a, a + o + s);
                    const t = [...n[0]][0].length
                      , l = e.slice(0, i + n.index + t + a);
                    if (Math.min(i, a) % 2) {
                        const e = l.slice(1, -1);
                        return {
                            type: "em",
                            raw: l,
                            text: e,
                            tokens: this.lexer.inlineTokens(e)
                        }
                    }
                    const c = l.slice(2, -2);
                    return {
                        type: "strong",
                        raw: l,
                        text: c,
                        tokens: this.lexer.inlineTokens(c)
                    }
                }
            }
        }
        codespan(e) {
            const t = this.rules.inline.code.exec(e);
            if (t) {
                let e = t[2].replace(/\n/g, " ");
                const i = /[^ ]/.test(e)
                  , n = /^ /.test(e) && / $/.test(e);
                return i && n && (e = e.substring(1, e.length - 1)),
                e = jo(e, !0),
                {
                    type: "codespan",
                    raw: t[0],
                    text: e
                }
            }
        }
        br(e) {
            const t = this.rules.inline.br.exec(e);
            if (t)
                return {
                    type: "br",
                    raw: t[0]
                }
        }
        del(e) {
            const t = this.rules.inline.del.exec(e);
            if (t)
                return {
                    type: "del",
                    raw: t[0],
                    text: t[2],
                    tokens: this.lexer.inlineTokens(t[2])
                }
        }
        autolink(e) {
            const t = this.rules.inline.autolink.exec(e);
            if (t) {
                let e, i;
                return "@" === t[2] ? (e = jo(t[1]),
                i = "mailto:" + e) : (e = jo(t[1]),
                i = e),
                {
                    type: "link",
                    raw: t[0],
                    text: e,
                    href: i,
                    tokens: [{
                        type: "text",
                        raw: e,
                        text: e
                    }]
                }
            }
        }
        url(e) {
            let t;
            if (t = this.rules.inline.url.exec(e)) {
                let e, i;
                if ("@" === t[2])
                    e = jo(t[0]),
                    i = "mailto:" + e;
                else {
                    let n;
                    do {
                        n = t[0],
                        t[0] = this.rules.inline._backpedal.exec(t[0])[0]
                    } while (n !== t[0]);
                    e = jo(t[0]),
                    i = "www." === t[1] ? "http://" + t[0] : t[0]
                }
                return {
                    type: "link",
                    raw: t[0],
                    text: e,
                    href: i,
                    tokens: [{
                        type: "text",
                        raw: e,
                        text: e
                    }]
                }
            }
        }
        inlineText(e) {
            const t = this.rules.inline.text.exec(e);
            if (t) {
                let e;
                return e = this.lexer.state.inRawBlock ? t[0] : jo(t[0]),
                {
                    type: "text",
                    raw: t[0],
                    text: e
                }
            }
        }
    }
    const Qo = {
        newline: /^(?: *(?:\n|$))+/,
        code: /^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,
        fences: /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,
        hr: /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,
        heading: /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,
        blockquote: /^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,
        list: /^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/,
        html: "^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))",
        def: /^ {0,3}\[(label)\]: *(?:\n *)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/,
        table: Vo,
        lheading: /^(?!bull )((?:.|\n(?!\s*?\n|bull ))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
        _paragraph: /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,
        text: /^[^\n]+/,
        _label: /(?!\s*\])(?:\\.|[^\[\]\\])+/,
        _title: /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/
    };
    Qo.def = Ko(Qo.def).replace("label", Qo._label).replace("title", Qo._title).getRegex(),
    Qo.bullet = /(?:[*+-]|\d{1,9}[.)])/,
    Qo.listItemStart = Ko(/^( *)(bull) */).replace("bull", Qo.bullet).getRegex(),
    Qo.list = Ko(Qo.list).replace(/bull/g, Qo.bullet).replace("hr", "\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def", "\\n+(?=" + Qo.def.source + ")").getRegex(),
    Qo._tag = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",
    Qo._comment = /<!--(?!-?>)[\s\S]*?(?:-->|$)/,
    Qo.html = Ko(Qo.html, "i").replace("comment", Qo._comment).replace("tag", Qo._tag).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),
    Qo.lheading = Ko(Qo.lheading).replace(/bull/g, Qo.bullet).getRegex(),
    Qo.paragraph = Ko(Qo._paragraph).replace("hr", Qo.hr).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("|table", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", Qo._tag).getRegex(),
    Qo.blockquote = Ko(Qo.blockquote).replace("paragraph", Qo.paragraph).getRegex(),
    Qo.normal = i({}, Qo),
    Qo.gfm = i(i({}, Qo.normal), {}, {
        table: "^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)"
    }),
    Qo.gfm.table = Ko(Qo.gfm.table).replace("hr", Qo.hr).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("blockquote", " {0,3}>").replace("code", " {4}[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", Qo._tag).getRegex(),
    Qo.gfm.paragraph = Ko(Qo._paragraph).replace("hr", Qo.hr).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("table", Qo.gfm.table).replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", Qo._tag).getRegex(),
    Qo.pedantic = i(i({}, Qo.normal), {}, {
        html: Ko("^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:\"[^\"]*\"|'[^']*'|\\s[^'\"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))").replace("comment", Qo._comment).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),
        def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
        heading: /^(#{1,6})(.*)(?:\n+|$)/,
        fences: Vo,
        lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
        paragraph: Ko(Qo.normal._paragraph).replace("hr", Qo.hr).replace("heading", " *#{1,6} *[^\n]").replace("lheading", Qo.lheading).replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").getRegex()
    });
    const $o = {
        escape: /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,
        autolink: /^<(scheme:[^\s\x00-\x1f<>]*|email)>/,
        url: Vo,
        tag: "^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",
        link: /^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,
        reflink: /^!?\[(label)\]\[(ref)\]/,
        nolink: /^!?\[(ref)\](?:\[\])?/,
        reflinkSearch: "reflink|nolink(?!\\()",
        emStrong: {
            lDelim: /^(?:\*+(?:((?!\*)[punct])|[^\s*]))|^_+(?:((?!_)[punct])|([^\s_]))/,
            rDelimAst: /^[^_*]*?__[^_*]*?\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\*)[punct](\*+)(?=[\s]|$)|[^punct\s](\*+)(?!\*)(?=[punct\s]|$)|(?!\*)[punct\s](\*+)(?=[^punct\s])|[\s](\*+)(?!\*)(?=[punct])|(?!\*)[punct](\*+)(?!\*)(?=[punct])|[^punct\s](\*+)(?=[^punct\s])/,
            rDelimUnd: /^[^_*]*?\*\*[^_*]*?_[^_*]*?(?=\*\*)|[^_]+(?=[^_])|(?!_)[punct](_+)(?=[\s]|$)|[^punct\s](_+)(?!_)(?=[punct\s]|$)|(?!_)[punct\s](_+)(?=[^punct\s])|[\s](_+)(?!_)(?=[punct])|(?!_)[punct](_+)(?!_)(?=[punct])/
        },
        code: /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,
        br: /^( {2,}|\\)\n(?!\s*$)/,
        del: Vo,
        text: /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,
        punctuation: /^((?![*_])[\spunctuation])/,
        _punctuation: "\\p{P}$+<=>`^|~"
    };
    $o.punctuation = Ko($o.punctuation, "u").replace(/punctuation/g, $o._punctuation).getRegex(),
    $o.blockSkip = /\[[^[\]]*?\]\([^\(\)]*?\)|`[^`]*?`|<[^<>]*?>/g,
    $o.anyPunctuation = /\\[punct]/g,
    $o._escapes = /\\([punct])/g,
    $o._comment = Ko(Qo._comment).replace("(?:--\x3e|$)", "--\x3e").getRegex(),
    $o.emStrong.lDelim = Ko($o.emStrong.lDelim, "u").replace(/punct/g, $o._punctuation).getRegex(),
    $o.emStrong.rDelimAst = Ko($o.emStrong.rDelimAst, "gu").replace(/punct/g, $o._punctuation).getRegex(),
    $o.emStrong.rDelimUnd = Ko($o.emStrong.rDelimUnd, "gu").replace(/punct/g, $o._punctuation).getRegex(),
    $o.anyPunctuation = Ko($o.anyPunctuation, "gu").replace(/punct/g, $o._punctuation).getRegex(),
    $o._escapes = Ko($o._escapes, "gu").replace(/punct/g, $o._punctuation).getRegex(),
    $o._scheme = /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/,
    $o._email = /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/,
    $o.autolink = Ko($o.autolink).replace("scheme", $o._scheme).replace("email", $o._email).getRegex(),
    $o._attribute = /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/,
    $o.tag = Ko($o.tag).replace("comment", $o._comment).replace("attribute", $o._attribute).getRegex(),
    $o._label = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,
    $o._href = /<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/,
    $o._title = /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/,
    $o.link = Ko($o.link).replace("label", $o._label).replace("href", $o._href).replace("title", $o._title).getRegex(),
    $o.reflink = Ko($o.reflink).replace("label", $o._label).replace("ref", Qo._label).getRegex(),
    $o.nolink = Ko($o.nolink).replace("ref", Qo._label).getRegex(),
    $o.reflinkSearch = Ko($o.reflinkSearch, "g").replace("reflink", $o.reflink).replace("nolink", $o.nolink).getRegex(),
    $o.normal = i({}, $o),
    $o.pedantic = i(i({}, $o.normal), {}, {
        strong: {
            start: /^__|\*\*/,
            middle: /^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,
            endAst: /\*\*(?!\*)/g,
            endUnd: /__(?!_)/g
        },
        em: {
            start: /^_|\*/,
            middle: /^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,
            endAst: /\*(?!\*)/g,
            endUnd: /_(?!_)/g
        },
        link: Ko(/^!?\[(label)\]\((.*?)\)/).replace("label", $o._label).getRegex(),
        reflink: Ko(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", $o._label).getRegex()
    }),
    $o.gfm = i(i({}, $o.normal), {}, {
        escape: Ko($o.escape).replace("])", "~|])").getRegex(),
        _extended_email: /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,
        url: /^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,
        _backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,
        del: /^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,
        text: /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/
    }),
    $o.gfm.url = Ko($o.gfm.url, "i").replace("email", $o.gfm._extended_email).getRegex(),
    $o.breaks = i(i({}, $o.gfm), {}, {
        br: Ko($o.br).replace("{2,}", "*").getRegex(),
        text: Ko($o.gfm.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex()
    });
    class Yo {
        constructor(e) {
            r(this, "tokens", void 0),
            r(this, "options", void 0),
            r(this, "state", void 0),
            r(this, "tokenizer", void 0),
            r(this, "inlineQueue", void 0),
            this.tokens = [],
            this.tokens.links = Object.create(null),
            this.options = e || zo,
            this.options.tokenizer = this.options.tokenizer || new Zo,
            this.tokenizer = this.options.tokenizer,
            this.tokenizer.options = this.options,
            this.tokenizer.lexer = this,
            this.inlineQueue = [],
            this.state = {
                inLink: !1,
                inRawBlock: !1,
                top: !0
            };
            const t = {
                block: Qo.normal,
                inline: $o.normal
            };
            this.options.pedantic ? (t.block = Qo.pedantic,
            t.inline = $o.pedantic) : this.options.gfm && (t.block = Qo.gfm,
            this.options.breaks ? t.inline = $o.breaks : t.inline = $o.gfm),
            this.tokenizer.rules = t
        }
        static get rules() {
            return {
                block: Qo,
                inline: $o
            }
        }
        static lex(e, t) {
            return new Yo(t).lex(e)
        }
        static lexInline(e, t) {
            return new Yo(t).inlineTokens(e)
        }
        lex(e) {
            let t;
            for (e = e.replace(/\r\n|\r/g, "\n"),
            this.blockTokens(e, this.tokens); t = this.inlineQueue.shift(); )
                this.inlineTokens(t.src, t.tokens);
            return this.tokens
        }
        blockTokens(e) {
            let t, i, n, r, a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
            for (e = this.options.pedantic ? e.replace(/\t/g, "    ").replace(/^ +$/gm, "") : e.replace(/^( *)(\t+)/gm, ((e,t,i)=>t + "    ".repeat(i.length))); e; )
                if (!(this.options.extensions && this.options.extensions.block && this.options.extensions.block.some((i=>!!(t = i.call({
                    lexer: this
                }, e, a)) && (e = e.substring(t.raw.length),
                a.push(t),
                !0)))))
                    if (t = this.tokenizer.space(e))
                        e = e.substring(t.raw.length),
                        1 === t.raw.length && a.length > 0 ? a[a.length - 1].raw += "\n" : a.push(t);
                    else if (t = this.tokenizer.code(e))
                        e = e.substring(t.raw.length),
                        i = a[a.length - 1],
                        !i || "paragraph" !== i.type && "text" !== i.type ? a.push(t) : (i.raw += "\n" + t.raw,
                        i.text += "\n" + t.text,
                        this.inlineQueue[this.inlineQueue.length - 1].src = i.text);
                    else if (t = this.tokenizer.fences(e))
                        e = e.substring(t.raw.length),
                        a.push(t);
                    else if (t = this.tokenizer.heading(e))
                        e = e.substring(t.raw.length),
                        a.push(t);
                    else if (t = this.tokenizer.hr(e))
                        e = e.substring(t.raw.length),
                        a.push(t);
                    else if (t = this.tokenizer.blockquote(e))
                        e = e.substring(t.raw.length),
                        a.push(t);
                    else if (t = this.tokenizer.list(e))
                        e = e.substring(t.raw.length),
                        a.push(t);
                    else if (t = this.tokenizer.html(e))
                        e = e.substring(t.raw.length),
                        a.push(t);
                    else if (t = this.tokenizer.def(e))
                        e = e.substring(t.raw.length),
                        i = a[a.length - 1],
                        !i || "paragraph" !== i.type && "text" !== i.type ? this.tokens.links[t.tag] || (this.tokens.links[t.tag] = {
                            href: t.href,
                            title: t.title
                        }) : (i.raw += "\n" + t.raw,
                        i.text += "\n" + t.raw,
                        this.inlineQueue[this.inlineQueue.length - 1].src = i.text);
                    else if (t = this.tokenizer.table(e))
                        e = e.substring(t.raw.length),
                        a.push(t);
                    else if (t = this.tokenizer.lheading(e))
                        e = e.substring(t.raw.length),
                        a.push(t);
                    else {
                        if (n = e,
                        this.options.extensions && this.options.extensions.startBlock) {
                            let t = 1 / 0;
                            const i = e.slice(1);
                            let r;
                            this.options.extensions.startBlock.forEach((e=>{
                                r = e.call({
                                    lexer: this
                                }, i),
                                "number" == typeof r && r >= 0 && (t = Math.min(t, r))
                            }
                            )),
                            t < 1 / 0 && t >= 0 && (n = e.substring(0, t + 1))
                        }
                        if (this.state.top && (t = this.tokenizer.paragraph(n)))
                            i = a[a.length - 1],
                            r && "paragraph" === i.type ? (i.raw += "\n" + t.raw,
                            i.text += "\n" + t.text,
                            this.inlineQueue.pop(),
                            this.inlineQueue[this.inlineQueue.length - 1].src = i.text) : a.push(t),
                            r = n.length !== e.length,
                            e = e.substring(t.raw.length);
                        else if (t = this.tokenizer.text(e))
                            e = e.substring(t.raw.length),
                            i = a[a.length - 1],
                            i && "text" === i.type ? (i.raw += "\n" + t.raw,
                            i.text += "\n" + t.text,
                            this.inlineQueue.pop(),
                            this.inlineQueue[this.inlineQueue.length - 1].src = i.text) : a.push(t);
                        else if (e) {
                            const t = "Infinite loop on byte: " + e.charCodeAt(0);
                            if (this.options.silent) {
                                console.error(t);
                                break
                            }
                            throw new Error(t)
                        }
                    }
            return this.state.top = !0,
            a
        }
        inline(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
            return this.inlineQueue.push({
                src: e,
                tokens: t
            }),
            t
        }
        inlineTokens(e) {
            let t, i, n, r, a, o, s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [], l = e;
            if (this.tokens.links) {
                const e = Object.keys(this.tokens.links);
                if (e.length > 0)
                    for (; null != (r = this.tokenizer.rules.inline.reflinkSearch.exec(l)); )
                        e.includes(r[0].slice(r[0].lastIndexOf("[") + 1, -1)) && (l = l.slice(0, r.index) + "[" + "a".repeat(r[0].length - 2) + "]" + l.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))
            }
            for (; null != (r = this.tokenizer.rules.inline.blockSkip.exec(l)); )
                l = l.slice(0, r.index) + "[" + "a".repeat(r[0].length - 2) + "]" + l.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
            for (; null != (r = this.tokenizer.rules.inline.anyPunctuation.exec(l)); )
                l = l.slice(0, r.index) + "++" + l.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);
            for (; e; )
                if (a || (o = ""),
                a = !1,
                !(this.options.extensions && this.options.extensions.inline && this.options.extensions.inline.some((i=>!!(t = i.call({
                    lexer: this
                }, e, s)) && (e = e.substring(t.raw.length),
                s.push(t),
                !0)))))
                    if (t = this.tokenizer.escape(e))
                        e = e.substring(t.raw.length),
                        s.push(t);
                    else if (t = this.tokenizer.tag(e))
                        e = e.substring(t.raw.length),
                        i = s[s.length - 1],
                        i && "text" === t.type && "text" === i.type ? (i.raw += t.raw,
                        i.text += t.text) : s.push(t);
                    else if (t = this.tokenizer.link(e))
                        e = e.substring(t.raw.length),
                        s.push(t);
                    else if (t = this.tokenizer.reflink(e, this.tokens.links))
                        e = e.substring(t.raw.length),
                        i = s[s.length - 1],
                        i && "text" === t.type && "text" === i.type ? (i.raw += t.raw,
                        i.text += t.text) : s.push(t);
                    else if (t = this.tokenizer.emStrong(e, l, o))
                        e = e.substring(t.raw.length),
                        s.push(t);
                    else if (t = this.tokenizer.codespan(e))
                        e = e.substring(t.raw.length),
                        s.push(t);
                    else if (t = this.tokenizer.br(e))
                        e = e.substring(t.raw.length),
                        s.push(t);
                    else if (t = this.tokenizer.del(e))
                        e = e.substring(t.raw.length),
                        s.push(t);
                    else if (t = this.tokenizer.autolink(e))
                        e = e.substring(t.raw.length),
                        s.push(t);
                    else if (this.state.inLink || !(t = this.tokenizer.url(e))) {
                        if (n = e,
                        this.options.extensions && this.options.extensions.startInline) {
                            let t = 1 / 0;
                            const i = e.slice(1);
                            let r;
                            this.options.extensions.startInline.forEach((e=>{
                                r = e.call({
                                    lexer: this
                                }, i),
                                "number" == typeof r && r >= 0 && (t = Math.min(t, r))
                            }
                            )),
                            t < 1 / 0 && t >= 0 && (n = e.substring(0, t + 1))
                        }
                        if (t = this.tokenizer.inlineText(n))
                            e = e.substring(t.raw.length),
                            "_" !== t.raw.slice(-1) && (o = t.raw.slice(-1)),
                            a = !0,
                            i = s[s.length - 1],
                            i && "text" === i.type ? (i.raw += t.raw,
                            i.text += t.text) : s.push(t);
                        else if (e) {
                            const t = "Infinite loop on byte: " + e.charCodeAt(0);
                            if (this.options.silent) {
                                console.error(t);
                                break
                            }
                            throw new Error(t)
                        }
                    } else
                        e = e.substring(t.raw.length),
                        s.push(t);
            return s
        }
    }
    class Xo {
        constructor(e) {
            r(this, "options", void 0),
            this.options = e || zo
        }
        code(e, t, i) {
            var n;
            const r = null === (n = (t || "").match(/^\S*/)) || void 0 === n ? void 0 : n[0];
            return e = e.replace(/\n$/, "") + "\n",
            r ? '<pre><code class="language-' + jo(r) + '">' + (i ? e : jo(e, !0)) + "</code></pre>\n" : "<pre><code>" + (i ? e : jo(e, !0)) + "</code></pre>\n"
        }
        blockquote(e) {
            return "<blockquote>\n".concat(e, "</blockquote>\n")
        }
        html(e, t) {
            return e
        }
        heading(e, t, i) {
            return "<h".concat(t, ">").concat(e, "</h").concat(t, ">\n")
        }
        hr() {
            return "<hr>\n"
        }
        list(e, t, i) {
            const n = t ? "ol" : "ul";
            return "<" + n + (t && 1 !== i ? ' start="' + i + '"' : "") + ">\n" + e + "</" + n + ">\n"
        }
        listitem(e, t, i) {
            return "<li>".concat(e, "</li>\n")
        }
        checkbox(e) {
            return "<input " + (e ? 'checked="" ' : "") + 'disabled="" type="checkbox">'
        }
        paragraph(e) {
            return "<p>".concat(e, "</p>\n")
        }
        table(e, t) {
            return t && (t = "<tbody>".concat(t, "</tbody>")),
            "<table>\n<thead>\n" + e + "</thead>\n" + t + "</table>\n"
        }
        tablerow(e) {
            return "<tr>\n".concat(e, "</tr>\n")
        }
        tablecell(e, t) {
            const i = t.header ? "th" : "td";
            return (t.align ? "<".concat(i, ' align="').concat(t.align, '">') : "<".concat(i, ">")) + e + "</".concat(i, ">\n")
        }
        strong(e) {
            return "<strong>".concat(e, "</strong>")
        }
        em(e) {
            return "<em>".concat(e, "</em>")
        }
        codespan(e) {
            return "<code>".concat(e, "</code>")
        }
        br() {
            return "<br>"
        }
        del(e) {
            return "<del>".concat(e, "</del>")
        }
        link(e, t, i) {
            const n = Ho(e);
            if (null === n)
                return i;
            let r = '<a href="' + (e = n) + '"';
            return t && (r += ' title="' + t + '"'),
            r += ">" + i + "</a>",
            r
        }
        image(e, t, i) {
            const n = Ho(e);
            if (null === n)
                return i;
            let r = '<img src="'.concat(e = n, '" alt="').concat(i, '"');
            return t && (r += ' title="'.concat(t, '"')),
            r += ">",
            r
        }
        text(e) {
            return e
        }
    }
    class es {
        strong(e) {
            return e
        }
        em(e) {
            return e
        }
        codespan(e) {
            return e
        }
        del(e) {
            return e
        }
        html(e) {
            return e
        }
        text(e) {
            return e
        }
        link(e, t, i) {
            return "" + i
        }
        image(e, t, i) {
            return "" + i
        }
        br() {
            return ""
        }
    }
    class ts {
        constructor(e) {
            r(this, "options", void 0),
            r(this, "renderer", void 0),
            r(this, "textRenderer", void 0),
            this.options = e || zo,
            this.options.renderer = this.options.renderer || new Xo,
            this.renderer = this.options.renderer,
            this.renderer.options = this.options,
            this.textRenderer = new es
        }
        static parse(e, t) {
            return new ts(t).parse(e)
        }
        static parseInline(e, t) {
            return new ts(t).parseInline(e)
        }
        parse(e) {
            let t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]
              , i = "";
            for (let n = 0; n < e.length; n++) {
                const r = e[n];
                if (this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[r.type]) {
                    const e = r
                      , t = this.options.extensions.renderers[e.type].call({
                        parser: this
                    }, e);
                    if (!1 !== t || !["space", "hr", "heading", "code", "table", "blockquote", "list", "html", "paragraph", "text"].includes(e.type)) {
                        i += t || "";
                        continue
                    }
                }
                switch (r.type) {
                case "space":
                    continue;
                case "hr":
                    i += this.renderer.hr();
                    continue;
                case "heading":
                    {
                        const e = r;
                        i += this.renderer.heading(this.parseInline(e.tokens), e.depth, this.parseInline(e.tokens, this.textRenderer).replace(Uo, ((e,t)=>"colon" === (t = t.toLowerCase()) ? ":" : "#" === t.charAt(0) ? "x" === t.charAt(1) ? String.fromCharCode(parseInt(t.substring(2), 16)) : String.fromCharCode(+t.substring(1)) : "")));
                        continue
                    }
                case "code":
                    {
                        const e = r;
                        i += this.renderer.code(e.text, e.lang, !!e.escaped);
                        continue
                    }
                case "table":
                    {
                        const e = r;
                        let t = ""
                          , n = "";
                        for (let t = 0; t < e.header.length; t++)
                            n += this.renderer.tablecell(this.parseInline(e.header[t].tokens), {
                                header: !0,
                                align: e.align[t]
                            });
                        t += this.renderer.tablerow(n);
                        let a = "";
                        for (let t = 0; t < e.rows.length; t++) {
                            const i = e.rows[t];
                            n = "";
                            for (let t = 0; t < i.length; t++)
                                n += this.renderer.tablecell(this.parseInline(i[t].tokens), {
                                    header: !1,
                                    align: e.align[t]
                                });
                            a += this.renderer.tablerow(n)
                        }
                        i += this.renderer.table(t, a);
                        continue
                    }
                case "blockquote":
                    {
                        const e = r
                          , t = this.parse(e.tokens);
                        i += this.renderer.blockquote(t);
                        continue
                    }
                case "list":
                    {
                        const e = r
                          , t = e.ordered
                          , n = e.start
                          , a = e.loose;
                        let o = "";
                        for (let t = 0; t < e.items.length; t++) {
                            const i = e.items[t]
                              , n = i.checked
                              , r = i.task;
                            let s = "";
                            if (i.task) {
                                const e = this.renderer.checkbox(!!n);
                                a ? i.tokens.length > 0 && "paragraph" === i.tokens[0].type ? (i.tokens[0].text = e + " " + i.tokens[0].text,
                                i.tokens[0].tokens && i.tokens[0].tokens.length > 0 && "text" === i.tokens[0].tokens[0].type && (i.tokens[0].tokens[0].text = e + " " + i.tokens[0].tokens[0].text)) : i.tokens.unshift({
                                    type: "text",
                                    text: e + " "
                                }) : s += e + " "
                            }
                            s += this.parse(i.tokens, a),
                            o += this.renderer.listitem(s, r, !!n)
                        }
                        i += this.renderer.list(o, t, n);
                        continue
                    }
                case "html":
                    {
                        const e = r;
                        i += this.renderer.html(e.text, e.block);
                        continue
                    }
                case "paragraph":
                    {
                        const e = r;
                        i += this.renderer.paragraph(this.parseInline(e.tokens));
                        continue
                    }
                case "text":
                    {
                        let a = r
                          , o = a.tokens ? this.parseInline(a.tokens) : a.text;
                        for (; n + 1 < e.length && "text" === e[n + 1].type; )
                            a = e[++n],
                            o += "\n" + (a.tokens ? this.parseInline(a.tokens) : a.text);
                        i += t ? this.renderer.paragraph(o) : o;
                        continue
                    }
                default:
                    {
                        const e = 'Token with "' + r.type + '" type was not found.';
                        if (this.options.silent)
                            return console.error(e),
                            "";
                        throw new Error(e)
                    }
                }
            }
            return i
        }
        parseInline(e, t) {
            t = t || this.renderer;
            let i = "";
            for (let n = 0; n < e.length; n++) {
                const r = e[n];
                if (this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[r.type]) {
                    const e = this.options.extensions.renderers[r.type].call({
                        parser: this
                    }, r);
                    if (!1 !== e || !["escape", "html", "link", "image", "strong", "em", "codespan", "br", "del", "text"].includes(r.type)) {
                        i += e || "";
                        continue
                    }
                }
                switch (r.type) {
                case "escape":
                    {
                        const e = r;
                        i += t.text(e.text);
                        break
                    }
                case "html":
                    {
                        const e = r;
                        i += t.html(e.text);
                        break
                    }
                case "link":
                    {
                        const e = r;
                        i += t.link(e.href, e.title, this.parseInline(e.tokens, t));
                        break
                    }
                case "image":
                    {
                        const e = r;
                        i += t.image(e.href, e.title, e.text);
                        break
                    }
                case "strong":
                    {
                        const e = r;
                        i += t.strong(this.parseInline(e.tokens, t));
                        break
                    }
                case "em":
                    {
                        const e = r;
                        i += t.em(this.parseInline(e.tokens, t));
                        break
                    }
                case "codespan":
                    {
                        const e = r;
                        i += t.codespan(e.text);
                        break
                    }
                case "br":
                    i += t.br();
                    break;
                case "del":
                    {
                        const e = r;
                        i += t.del(this.parseInline(e.tokens, t));
                        break
                    }
                case "text":
                    {
                        const e = r;
                        i += t.text(e.text);
                        break
                    }
                default:
                    {
                        const e = 'Token with "' + r.type + '" type was not found.';
                        if (this.options.silent)
                            return console.error(e),
                            "";
                        throw new Error(e)
                    }
                }
            }
            return i
        }
    }
    class is {
        constructor(e) {
            r(this, "options", void 0),
            this.options = e || zo
        }
        preprocess(e) {
            return e
        }
        postprocess(e) {
            return e
        }
    }
    r(is, "passThroughHooks", new Set(["preprocess", "postprocess"]));
    var ns = new WeakSet
      , rs = new WeakSet;
    function as(e, t) {
        return (n,r)=>{
            const a = i({}, r)
              , s = i(i({}, this.defaults), a);
            !0 === this.defaults.async && !1 === a.async && (s.silent || console.warn("marked(): The async option was set to true by an extension. The async: false option sent to parse will be ignored."),
            s.async = !0);
            const l = o(this, rs, os).call(this, !!s.silent, !!s.async);
            if (null == n)
                return l(new Error("marked(): input parameter is undefined or null"));
            if ("string" != typeof n)
                return l(new Error("marked(): input parameter is of type " + Object.prototype.toString.call(n) + ", string expected"));
            if (s.hooks && (s.hooks.options = s),
            s.async)
                return Promise.resolve(s.hooks ? s.hooks.preprocess(n) : n).then((t=>e(t, s))).then((e=>s.walkTokens ? Promise.all(this.walkTokens(e, s.walkTokens)).then((()=>e)) : e)).then((e=>t(e, s))).then((e=>s.hooks ? s.hooks.postprocess(e) : e)).catch(l);
            try {
                s.hooks && (n = s.hooks.preprocess(n));
                const i = e(n, s);
                s.walkTokens && this.walkTokens(i, s.walkTokens);
                let r = t(i, s);
                return s.hooks && (r = s.hooks.postprocess(r)),
                r
            } catch (e) {
                return l(e)
            }
        }
    }
    function os(e, t) {
        return i=>{
            if (i.message += "\nPlease report this to https://github.com/markedjs/marked.",
            e) {
                const e = "<p>An error occurred:</p><pre>" + jo(i.message + "", !0) + "</pre>";
                return t ? Promise.resolve(e) : e
            }
            if (t)
                return Promise.reject(i);
            throw i
        }
    }
    const ss = new class {
        constructor() {
            s(this, rs),
            s(this, ns),
            r(this, "defaults", {
                async: !1,
                breaks: !1,
                extensions: null,
                gfm: !0,
                hooks: null,
                pedantic: !1,
                renderer: null,
                silent: !1,
                tokenizer: null,
                walkTokens: null
            }),
            r(this, "options", this.setOptions),
            r(this, "parse", o(this, ns, as).call(this, Yo.lex, ts.parse)),
            r(this, "parseInline", o(this, ns, as).call(this, Yo.lexInline, ts.parseInline)),
            r(this, "Parser", ts),
            r(this, "Renderer", Xo),
            r(this, "TextRenderer", es),
            r(this, "Lexer", Yo),
            r(this, "Tokenizer", Zo),
            r(this, "Hooks", is),
            this.use(...arguments)
        }
        walkTokens(e, t) {
            let i = [];
            for (const r of e)
                switch (i = i.concat(t.call(this, r)),
                r.type) {
                case "table":
                    {
                        const e = r;
                        for (const n of e.header)
                            i = i.concat(this.walkTokens(n.tokens, t));
                        for (const n of e.rows)
                            for (const e of n)
                                i = i.concat(this.walkTokens(e.tokens, t));
                        break
                    }
                case "list":
                    {
                        const e = r;
                        i = i.concat(this.walkTokens(e.items, t));
                        break
                    }
                default:
                    {
                        var n;
                        const e = r;
                        null !== (n = this.defaults.extensions) && void 0 !== n && null !== (n = n.childTokens) && void 0 !== n && n[e.type] ? this.defaults.extensions.childTokens[e.type].forEach((n=>{
                            i = i.concat(this.walkTokens(e[n], t))
                        }
                        )) : e.tokens && (i = i.concat(this.walkTokens(e.tokens, t)))
                    }
                }
            return i
        }
        use() {
            const e = this.defaults.extensions || {
                renderers: {},
                childTokens: {}
            };
            for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
                n[r] = arguments[r];
            return n.forEach((t=>{
                const n = i({}, t);
                if (n.async = this.defaults.async || n.async || !1,
                t.extensions && (t.extensions.forEach((t=>{
                    if (!t.name)
                        throw new Error("extension name required");
                    if ("renderer"in t) {
                        const i = e.renderers[t.name];
                        e.renderers[t.name] = i ? function() {
                            for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
                                n[r] = arguments[r];
                            let a = t.renderer.apply(this, n);
                            return !1 === a && (a = i.apply(this, n)),
                            a
                        }
                        : t.renderer
                    }
                    if ("tokenizer"in t) {
                        if (!t.level || "block" !== t.level && "inline" !== t.level)
                            throw new Error("extension level must be 'block' or 'inline'");
                        const i = e[t.level];
                        i ? i.unshift(t.tokenizer) : e[t.level] = [t.tokenizer],
                        t.start && ("block" === t.level ? e.startBlock ? e.startBlock.push(t.start) : e.startBlock = [t.start] : "inline" === t.level && (e.startInline ? e.startInline.push(t.start) : e.startInline = [t.start]))
                    }
                    "childTokens"in t && t.childTokens && (e.childTokens[t.name] = t.childTokens)
                }
                )),
                n.extensions = e),
                t.renderer) {
                    const e = this.defaults.renderer || new Xo(this.defaults);
                    for (const i in t.renderer) {
                        const n = t.renderer[i]
                          , r = i
                          , a = e[r];
                        e[r] = function() {
                            for (var t = arguments.length, i = new Array(t), r = 0; r < t; r++)
                                i[r] = arguments[r];
                            let o = n.apply(e, i);
                            return !1 === o && (o = a.apply(e, i)),
                            o || ""
                        }
                    }
                    n.renderer = e
                }
                if (t.tokenizer) {
                    const e = this.defaults.tokenizer || new Zo(this.defaults);
                    for (const i in t.tokenizer) {
                        const n = t.tokenizer[i]
                          , r = i
                          , a = e[r];
                        e[r] = function() {
                            for (var t = arguments.length, i = new Array(t), r = 0; r < t; r++)
                                i[r] = arguments[r];
                            let o = n.apply(e, i);
                            return !1 === o && (o = a.apply(e, i)),
                            o
                        }
                    }
                    n.tokenizer = e
                }
                if (t.hooks) {
                    const e = this.defaults.hooks || new is;
                    for (const i in t.hooks) {
                        const n = t.hooks[i]
                          , r = i
                          , a = e[r];
                        is.passThroughHooks.has(i) ? e[r] = t=>{
                            if (this.defaults.async)
                                return Promise.resolve(n.call(e, t)).then((t=>a.call(e, t)));
                            const i = n.call(e, t);
                            return a.call(e, i)
                        }
                        : e[r] = function() {
                            for (var t = arguments.length, i = new Array(t), r = 0; r < t; r++)
                                i[r] = arguments[r];
                            let o = n.apply(e, i);
                            return !1 === o && (o = a.apply(e, i)),
                            o
                        }
                    }
                    n.hooks = e
                }
                if (t.walkTokens) {
                    const e = this.defaults.walkTokens
                      , i = t.walkTokens;
                    n.walkTokens = function(t) {
                        let n = [];
                        return n.push(i.call(this, t)),
                        e && (n = n.concat(e.call(this, t))),
                        n
                    }
                }
                this.defaults = i(i({}, this.defaults), n)
            }
            )),
            this
        }
        setOptions(e) {
            return this.defaults = i(i({}, this.defaults), e),
            this
        }
        lexer(e, t) {
            return Yo.lex(e, null != t ? t : this.defaults)
        }
        parser(e, t) {
            return ts.parse(e, null != t ? t : this.defaults)
        }
    }
    ;
    function ls(e, t) {
        return ss.parse(e, t)
    }
    ls.options = ls.setOptions = function(e) {
        return ss.setOptions(e),
        ls.defaults = ss.defaults,
        Fo(ls.defaults),
        ls
    }
    ,
    ls.getDefaults = Mo,
    ls.defaults = zo,
    ls.use = function() {
        return ss.use(...arguments),
        ls.defaults = ss.defaults,
        Fo(ls.defaults),
        ls
    }
    ,
    ls.walkTokens = function(e, t) {
        return ss.walkTokens(e, t)
    }
    ,
    ls.parseInline = ss.parseInline,
    ls.Parser = ts,
    ls.parser = ts.parse,
    ls.Renderer = Xo,
    ls.TextRenderer = es,
    ls.Lexer = Yo,
    ls.lexer = Yo.lex,
    ls.Tokenizer = Zo,
    ls.Hooks = is,
    ls.parse = ls,
    ls.options,
    ls.setOptions,
    ls.use,
    ls.walkTokens,
    ls.parseInline,
    ts.parse,
    Yo.lex;
    const cs = e=>{
        let {text: t, id: i, testid: n} = e;
        const r = ao({
            tagName: "div",
            style: {
                position: "relative",
                zIndex: "2",
                width: "100%",
                height: "10%",
                textAlign: "center",
                backgroundColor: "#262626",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            },
            id: i,
            testid: n
        });
        return oo(r, To({
            text: t,
            level: 5,
            style: {
                color: "white"
            }
        })),
        r
    }
    ;
    const us = e=>{
        const t = function() {
            const e = document.createElementNS("http://www.w3.org/2000/svg", "svg");
            return e.setAttribute("width", "270"),
            e.setAttribute("height", "175"),
            e.setAttribute("viewBox", "40 60 250 140"),
            e.innerHTML = '\n    <g transform="matrix(1,0,0,1,0,0)"><g id="12" opacity="1" style="mix-blend-mode:normal"><g><defs><clipPath id="12_clipPath" x="-50%" y="-50%" width="200%" height="200%"><path d="M0,260v-260h333v260z" fill="white" clip-rule="nonzero"></path></clipPath></defs><g clip-path="url(#12_clipPath)"><g transform="matrix(1,0,0,1,48,60)"><g id="83287" opacity="1" style="mix-blend-mode:normal"><g><g><g transform="matrix(1,0,0,1,0,0)"><g id="83288" opacity="1" style="mix-blend-mode:normal"><g><g><path id="83288_fill_path" d="M4,140c-2.20914,0 -4,-1.79086 -4,-4v-132c0,-2.20914 1.79086,-4 4,-4h228c2.20914,0 4,1.79086 4,4v132c0,2.20914 -1.79086,4 -4,4z" fill-rule="nonzero" fill="rgb(255, 255, 255)" fill-opacity="1" style="mix-blend-mode:NORMAL"></path><defs><clipPath id="ligziij3rlyasnggflf" clipPathUnits="userSpaceOnUse"><path d="M4,140c-2.20914,0 -4,-1.79086 -4,-4v-132c0,-2.20914 1.79086,-4 4,-4h228c2.20914,0 4,1.79086 4,4v132c0,2.20914 -1.79086,4 -4,4z"></path></clipPath></defs><path id="83288_stroke_path" d="M4,140c-2.20914,0 -4,-1.79086 -4,-4v-132c0,-2.20914 1.79086,-4 4,-4h228c2.20914,0 4,1.79086 4,4v132c0,2.20914 -1.79086,4 -4,4z" fill="none" stroke="rgb(195, 205, 255)" stroke-width="4" stroke-linecap="butt" stroke-linejoin="butt" stroke-dasharray="0 0" stroke-opacity="1" clip-path="url(#ligziij3rlyasnggflf)"></path></g></g></g></g><g transform="matrix(1,0,0,1,97,116.5)"><g id="83289" opacity="0.4" style="mix-blend-mode:normal"><g><g><path id="83289_fill_path" d="M135,0l-135,23.5h135z" fill-rule="nonzero" fill="rgb(244, 247, 251)" fill-opacity="1" style="mix-blend-mode:NORMAL"></path></g></g></g></g><g transform="matrix(1,0,0,1,2,2)"><g id="83290" opacity="1" style="mix-blend-mode:normal"><g><g><path id="83290_fill_path" d="M0,2c0,-1 1,-2 2,-2h228c1,0 2,1 2,2v18h-232z" fill-rule="nonzero" fill="rgb(105, 129, 255)" fill-opacity="1" style="mix-blend-mode:NORMAL"></path></g></g></g></g><g transform="matrix(-1,0,0,-1,228.54000000000002,62.99940000000001)"><g id="83291" opacity="0.2" style="mix-blend-mode:lighten"><g><g><path id="83291_fill_path" d="M227,-0.00002l-227,60.99934l226.99998,0.00002z" fill-rule="nonzero" fill="rgb(255, 255, 255)" fill-opacity="1" style="mix-blend-mode:NORMAL"></path></g></g></g></g><g transform="matrix(1,0,0,1,24,42)"><g id="83292" opacity="1" style="mix-blend-mode:normal"><g><g><path id="83292_fill_path" d="M1,8c-0.55228,0 -1,-0.44772 -1,-1v-6c0,-0.55228 0.44772,-1 1,-1h109c0.55228,0 1,0.44772 1,1v6c0,0.55228 -0.44772,1 -1,1z" fill-rule="nonzero" fill="rgb(195, 205, 255)" fill-opacity="1" style="mix-blend-mode:NORMAL"></path></g></g></g></g><g transform="matrix(1,0,0,1,143,42)"><g id="83293" opacity="1" style="mix-blend-mode:normal"><g><g><path id="83293_fill_path" d="M1,8c-0.55228,0 -1,-0.44772 -1,-1v-6c0,-0.55228 0.44772,-1 1,-1h65c0.55228,0 1,0.44772 1,1v6c0,0.55228 -0.44772,1 -1,1z" fill-rule="nonzero" fill="rgb(195, 205, 255)" fill-opacity="1" style="mix-blend-mode:NORMAL"></path></g></g></g></g><g transform="matrix(1,0,0,1,24,58)"><g id="83294" opacity="1" style="mix-blend-mode:normal"><g><g><path id="83294_fill_path" d="M1,8c-0.55228,0 -1,-0.44772 -1,-1v-6c0,-0.55228 0.44772,-1 1,-1h64c0.55228,0 1,0.44772 1,1v6c0,0.55228 -0.44772,1 -1,1z" fill-rule="nonzero" fill="rgb(195, 205, 255)" fill-opacity="1" style="mix-blend-mode:NORMAL"></path></g></g></g></g><g transform="matrix(1,0,0,1,98,58)"><g id="83295" opacity="1" style="mix-blend-mode:normal"><g><g><path id="83295_fill_path" d="M1,8c-0.55228,0 -1,-0.44772 -1,-1v-6c0,-0.55228 0.44772,-1 1,-1h86c0.55228,0 1,0.44772 1,1v6c0,0.55228 -0.44772,1 -1,1z" fill-rule="nonzero" fill="rgb(195, 205, 255)" fill-opacity="1" style="mix-blend-mode:NORMAL"></path></g></g></g></g><g transform="matrix(1,0,0,1,194,58)"><g id="83296" opacity="1" style="mix-blend-mode:normal"><g><g><path id="83296_fill_path" d="M1,8c-0.55228,0 -1,-0.44772 -1,-1v-6c0,-0.55228 0.44772,-1 1,-1h14c0.55228,0 1,0.44772 1,1v6c0,0.55228 -0.44772,1 -1,1z" fill-rule="nonzero" fill="rgb(195, 205, 255)" fill-opacity="1" style="mix-blend-mode:NORMAL"></path></g></g></g></g><g transform="matrix(1,0,0,1,24,74)"><g id="83297" opacity="1" style="mix-blend-mode:normal"><g><g><path id="83297_fill_path" d="M1,6c-0.55228,0 -1,-0.44772 -1,-1v-4c0,-0.55228 0.44772,-1 1,-1h83c0.55228,0 1,0.44772 1,1v4c0,0.55228 -0.44772,1 -1,1z" fill-rule="nonzero" fill="rgb(244, 247, 251)" fill-opacity="1" style="mix-blend-mode:NORMAL"></path></g></g></g></g><g transform="matrix(1,0,0,1,117,74)"><g id="83298" opacity="1" style="mix-blend-mode:normal"><g><g><path id="83298_fill_path" d="M1,6c-0.55228,0 -1,-0.44772 -1,-1v-4c0,-0.55228 0.44772,-1 1,-1h38c0.55228,0 1,0.44772 1,1v4c0,0.55228 -0.44772,1 -1,1z" fill-rule="nonzero" fill="rgb(244, 247, 251)" fill-opacity="1" style="mix-blend-mode:NORMAL"></path></g></g></g></g><g transform="matrix(1,0,0,1,165,74)"><g id="83299" opacity="1" style="mix-blend-mode:normal"><g><g><path id="83299_fill_path" d="M1,6c-0.55228,0 -1,-0.44772 -1,-1v-4c0,-0.55228 0.44772,-1 1,-1h43c0.55228,0 1,0.44772 1,1v4c0,0.55228 -0.44772,1 -1,1z" fill-rule="nonzero" fill="rgb(105, 129, 255)" fill-opacity="1" style="mix-blend-mode:NORMAL"></path></g></g></g></g><g transform="matrix(6.123233995736766e-17,1,-1,6.123233995736766e-17,68,92)"><g id="83300" opacity="1" style="mix-blend-mode:normal"><g><g><path id="83300_fill_path" d="M1,4c-0.55228,0 -1,-0.44772 -1,-1v-2c0,-0.55228 0.44772,-1 1,-1h18c0.55228,0 1,0.44772 1,1v2c0,0.55228 -0.44772,1 -1,1z" fill-rule="nonzero" fill="rgb(105, 129, 255)" fill-opacity="1" style="mix-blend-mode:NORMAL"></path></g></g></g></g><g transform="matrix(6.123233995736766e-17,1,-1,6.123233995736766e-17,74,92)"><g id="83301" opacity="1" style="mix-blend-mode:normal"><g><g><path id="83301_fill_path" d="M1,4c-0.55228,0 -1,-0.44772 -1,-1v-2c0,-0.55228 0.44772,-1 1,-1h18c0.55228,0 1,0.44772 1,1v2c0,0.55228 -0.44772,1 -1,1z" fill-rule="nonzero" fill="rgb(105, 129, 255)" fill-opacity="1" style="mix-blend-mode:NORMAL"></path></g></g></g></g><g transform="matrix(6.123233995736766e-17,1,-1,6.123233995736766e-17,80,92)"><g id="83302" opacity="1" style="mix-blend-mode:normal"><g><g><path id="83302_fill_path" d="M1,4c-0.55228,0 -1,-0.44772 -1,-1v-2c0,-0.55228 0.44772,-1 1,-1h18c0.55228,0 1,0.44772 1,1v2c0,0.55228 -0.44772,1 -1,1z" fill-rule="nonzero" fill="rgb(105, 129, 255)" fill-opacity="1" style="mix-blend-mode:NORMAL"></path></g></g></g></g><g transform="matrix(6.123233995736766e-17,1,-1,6.123233995736766e-17,86,92)"><g id="83303" opacity="1" style="mix-blend-mode:normal"><g><g><path id="83303_fill_path" d="M1,4c-0.55228,0 -1,-0.44772 -1,-1v-2c0,-0.55228 0.44772,-1 1,-1h18c0.55228,0 1,0.44772 1,1v2c0,0.55228 -0.44772,1 -1,1z" fill-rule="nonzero" fill="rgb(105, 129, 255)" fill-opacity="1" style="mix-blend-mode:NORMAL"></path></g></g></g></g><g transform="matrix(6.123233995736766e-17,1,-1,6.123233995736766e-17,92,92)"><g id="83304" opacity="1" style="mix-blend-mode:normal"><g><g><path id="83304_fill_path" d="M1,4c-0.55228,0 -1,-0.44772 -1,-1v-2c0,-0.55228 0.44772,-1 1,-1h18c0.55228,0 1,0.44772 1,1v2c0,0.55228 -0.44772,1 -1,1z" fill-rule="nonzero" fill="rgb(105, 129, 255)" fill-opacity="1" style="mix-blend-mode:NORMAL"></path></g></g></g></g><g transform="matrix(6.123233995736766e-17,1,-1,6.123233995736766e-17,98,92)"><g id="83305" opacity="1" style="mix-blend-mode:normal"><g><g><path id="83305_fill_path" d="M1,4c-0.55228,0 -1,-0.44772 -1,-1v-2c0,-0.55228 0.44772,-1 1,-1h18c0.55228,0 1,0.44772 1,1v2c0,0.55228 -0.44772,1 -1,1z" fill-rule="nonzero" fill="rgb(105, 129, 255)" fill-opacity="1" style="mix-blend-mode:NORMAL"></path></g></g></g></g><g transform="matrix(6.123233995736766e-17,1,-1,6.123233995736766e-17,104,92)"><g id="83306" opacity="1" style="mix-blend-mode:normal"><g><g><path id="83306_fill_path" d="M1,4c-0.55228,0 -1,-0.44772 -1,-1v-2c0,-0.55228 0.44772,-1 1,-1h18c0.55228,0 1,0.44772 1,1v2c0,0.55228 -0.44772,1 -1,1z" fill-rule="nonzero" fill="rgb(105, 129, 255)" fill-opacity="1" style="mix-blend-mode:NORMAL"></path></g></g></g></g><g transform="matrix(6.123233995736766e-17,1,-1,6.123233995736766e-17,110,92)"><g id="83307" opacity="1" style="mix-blend-mode:normal"><g><g><path id="83307_fill_path" d="M1,4c-0.55228,0 -1,-0.44772 -1,-1v-2c0,-0.55228 0.44772,-1 1,-1h18c0.55228,0 1,0.44772 1,1v2c0,0.55228 -0.44772,1 -1,1z" fill-rule="nonzero" fill="rgb(105, 129, 255)" fill-opacity="1" style="mix-blend-mode:NORMAL"></path></g></g></g></g><g transform="matrix(6.123233995736766e-17,1,-1,6.123233995736766e-17,116,92)"><g id="83308" opacity="1" style="mix-blend-mode:normal"><g><g><path id="83308_fill_path" d="M1,4c-0.55228,0 -1,-0.44772 -1,-1v-2c0,-0.55228 0.44772,-1 1,-1h18c0.55228,0 1,0.44772 1,1v2c0,0.55228 -0.44772,1 -1,1z" fill-rule="nonzero" fill="rgb(105, 129, 255)" fill-opacity="1" style="mix-blend-mode:NORMAL"></path></g></g></g></g><g transform="matrix(6.123233995736766e-17,1,-1,6.123233995736766e-17,122,92)"><g id="83309" opacity="1" style="mix-blend-mode:normal"><g><g><path id="83309_fill_path" d="M1,4c-0.55228,0 -1,-0.44772 -1,-1v-2c0,-0.55228 0.44772,-1 1,-1h18c0.55228,0 1,0.44772 1,1v2c0,0.55228 -0.44772,1 -1,1z" fill-rule="nonzero" fill="rgb(105, 129, 255)" fill-opacity="1" style="mix-blend-mode:NORMAL"></path></g></g></g></g><g transform="matrix(6.123233995736766e-17,1,-1,6.123233995736766e-17,128,92)"><g id="83310" opacity="1" style="mix-blend-mode:normal"><g><g><path id="83310_fill_path" d="M1,4c-0.55228,0 -1,-0.44772 -1,-1v-2c0,-0.55228 0.44772,-1 1,-1h18c0.55228,0 1,0.44772 1,1v2c0,0.55228 -0.44772,1 -1,1z" fill-rule="nonzero" fill="rgb(105, 129, 255)" fill-opacity="1" style="mix-blend-mode:NORMAL"></path></g></g></g></g><g transform="matrix(6.123233995736766e-17,1,-1,6.123233995736766e-17,134,92)"><g id="83311" opacity="1" style="mix-blend-mode:normal"><g><g><path id="83311_fill_path" d="M1,4c-0.55228,0 -1,-0.44772 -1,-1v-2c0,-0.55228 0.44772,-1 1,-1h18c0.55228,0 1,0.44772 1,1v2c0,0.55228 -0.44772,1 -1,1z" fill-rule="nonzero" fill="rgb(105, 129, 255)" fill-opacity="1" style="mix-blend-mode:NORMAL"></path></g></g></g></g><g transform="matrix(6.123233995736766e-17,1,-1,6.123233995736766e-17,140,92)"><g id="83312" opacity="1" style="mix-blend-mode:normal"><g><g><path id="83312_fill_path" d="M1,4c-0.55228,0 -1,-0.44772 -1,-1v-2c0,-0.55228 0.44772,-1 1,-1h18c0.55228,0 1,0.44772 1,1v2c0,0.55228 -0.44772,1 -1,1z" fill-rule="nonzero" fill="rgb(105, 129, 255)" fill-opacity="1" style="mix-blend-mode:NORMAL"></path></g></g></g></g><g transform="matrix(6.123233995736766e-17,1,-1,6.123233995736766e-17,146,92)"><g id="83313" opacity="1" style="mix-blend-mode:normal"><g><g><path id="83313_fill_path" d="M1,4c-0.55228,0 -1,-0.44772 -1,-1v-2c0,-0.55228 0.44772,-1 1,-1h18c0.55228,0 1,0.44772 1,1v2c0,0.55228 -0.44772,1 -1,1z" fill-rule="nonzero" fill="rgb(105, 129, 255)" fill-opacity="1" style="mix-blend-mode:NORMAL"></path></g></g></g></g><g transform="matrix(6.123233995736766e-17,1,-1,6.123233995736766e-17,152,92)"><g id="83314" opacity="1" style="mix-blend-mode:normal"><g><g><path id="83314_fill_path" d="M1,4c-0.55228,0 -1,-0.44772 -1,-1v-2c0,-0.55228 0.44772,-1 1,-1h18c0.55228,0 1,0.44772 1,1v2c0,0.55228 -0.44772,1 -1,1z" fill-rule="nonzero" fill="rgb(105, 129, 255)" fill-opacity="1" style="mix-blend-mode:NORMAL"></path></g></g></g></g><g transform="matrix(6.123233995736766e-17,1,-1,6.123233995736766e-17,158,92)"><g id="83315" opacity="1" style="mix-blend-mode:normal"><g><g><path id="83315_fill_path" d="M1,4c-0.55228,0 -1,-0.44772 -1,-1v-2c0,-0.55228 0.44772,-1 1,-1h18c0.55228,0 1,0.44772 1,1v2c0,0.55228 -0.44772,1 -1,1z" fill-rule="nonzero" fill="rgb(105, 129, 255)" fill-opacity="1" style="mix-blend-mode:NORMAL"></path></g></g></g></g><g transform="matrix(6.123233995736766e-17,1,-1,6.123233995736766e-17,164,92)"><g id="83316" opacity="1" style="mix-blend-mode:normal"><g><g><path id="83316_fill_path" d="M1,4c-0.55228,0 -1,-0.44772 -1,-1v-2c0,-0.55228 0.44772,-1 1,-1h18c0.55228,0 1,0.44772 1,1v2c0,0.55228 -0.44772,1 -1,1z" fill-rule="nonzero" fill="rgb(105, 129, 255)" fill-opacity="1" style="mix-blend-mode:NORMAL"></path></g></g></g></g><g transform="matrix(6.123233995736766e-17,1,-1,6.123233995736766e-17,170,92)"><g id="83317" opacity="1" style="mix-blend-mode:normal"><g><g><path id="83317_fill_path" d="M1,4c-0.55228,0 -1,-0.44772 -1,-1v-2c0,-0.55228 0.44772,-1 1,-1h18c0.55228,0 1,0.44772 1,1v2c0,0.55228 -0.44772,1 -1,1z" fill-rule="nonzero" fill="rgb(105, 129, 255)" fill-opacity="1" style="mix-blend-mode:NORMAL"></path></g></g></g></g><g transform="matrix(1,0,0,1,97,116)"><g id="83318" opacity="1" style="mix-blend-mode:normal"><g><g><path id="83318_fill_path" d="M1,4c-0.55228,0 -1,-0.44772 -1,-1v-2c0,-0.55228 0.44772,-1 1,-1h38c0.55228,0 1,0.44772 1,1v2c0,0.55228 -0.44772,1 -1,1z" fill-rule="nonzero" fill="rgb(195, 205, 255)" fill-opacity="1" style="mix-blend-mode:NORMAL"></path></g></g></g></g><g transform="matrix(1,0,0,1,2,21)"><g id="83320" opacity="0.2" style="mix-blend-mode:normal"><g><g><path id="83320_fill_path" d="M0,118v-118h234v118z" fill-rule="nonzero" fill="rgb(255, 255, 255)" fill-opacity="1" style="mix-blend-mode:NORMAL"></path></g></g></g></g></g></g></g></g><g transform="matrix(1,0,0,1,48,60)"><g id="83268" opacity="1" style="mix-blend-mode:normal"><g><g><g transform="matrix(1,0,0,1,0,0)"><g id="83269" opacity="1" style="mix-blend-mode:normal"><g><g><path id="83269_fill_path" d="M4,140c-2.20914,0 -4,-1.79086 -4,-4v-132c0,-2.20914 1.79086,-4 4,-4h228c2.20914,0 4,1.79086 4,4v132c0,2.20914 -1.79086,4 -4,4z" fill-rule="nonzero" fill="rgb(255, 255, 255)" fill-opacity="1" style="mix-blend-mode:NORMAL"></path><defs><clipPath id="ligziij4hmxrv43iz67" clipPathUnits="userSpaceOnUse"><path d="M4,140c-2.20914,0 -4,-1.79086 -4,-4v-132c0,-2.20914 1.79086,-4 4,-4h228c2.20914,0 4,1.79086 4,4v132c0,2.20914 -1.79086,4 -4,4z"></path></clipPath></defs><path id="83269_stroke_path" d="M4,140c-2.20914,0 -4,-1.79086 -4,-4v-132c0,-2.20914 1.79086,-4 4,-4h228c2.20914,0 4,1.79086 4,4v132c0,2.20914 -1.79086,4 -4,4z" fill="none" stroke="rgb(195, 205, 255)" stroke-width="4" stroke-linecap="butt" stroke-linejoin="butt" stroke-dasharray="0 0" stroke-opacity="1" clip-path="url(#ligziij4hmxrv43iz67)"></path></g></g></g></g><g transform="matrix(1,0,0,1,196,100)"><g id="83270" opacity="0.4" style="mix-blend-mode:normal"><g><g><defs><clipPath id="ligziij4roiiqcgytn" clipPathUnits="userSpaceOnUse"><path d="M24,12c0,1.2588 -0.198,2.5104 -0.5868,3.708c-0.3888,1.1976 -0.9648,2.3268 -1.7052,3.3456c-0.7404,1.0188 -1.6356,1.914 -2.6544,2.6544c-1.0188,0.7404 -2.148,1.3164 -3.3456,1.7052c-1.1976,0.3888 -2.4492,0.5868 -3.708,0.5868c-1.2588,0 -2.5104,-0.198 -3.708,-0.5868c-1.1976,-0.3888 -2.3268,-0.9648 -3.3456,-1.7052c-1.0188,-0.7404 -1.914,-1.6356 -2.6544,-2.6544c-0.7404,-1.0188 -1.3164,-2.148 -1.7052,-3.3456c-0.3888,-1.1976 -0.5868,-2.4492 -0.5868,-3.708c0,-1.2588 0.198,-2.5104 0.5868,-3.708c0.3888,-1.1976 0.9648,-2.3268 1.7052,-3.3456c0.7404,-1.0188 1.6356,-1.914 2.6544,-2.6544c1.0188,-0.7404 2.148,-1.3164 3.3456,-1.7052c1.1976,-0.3888 2.4492,-0.5868 3.708,-0.5868c1.2588,0 2.5104,0.198 3.708,0.5868c1.1976,0.3888 2.3268,0.9648 3.3456,1.7052c1.0188,0.7404 1.914,1.6356 2.6544,2.6544c0.7404,1.0188 1.3164,2.148 1.7052,3.3456c0.3888,1.1976 0.5868,2.4492 0.5868,3.708z"></path></clipPath></defs><path id="83270_stroke_path" d="M24,12c0,1.2588 -0.198,2.5104 -0.5868,3.708c-0.3888,1.1976 -0.9648,2.3268 -1.7052,3.3456c-0.7404,1.0188 -1.6356,1.914 -2.6544,2.6544c-1.0188,0.7404 -2.148,1.3164 -3.3456,1.7052c-1.1976,0.3888 -2.4492,0.5868 -3.708,0.5868c-1.2588,0 -2.5104,-0.198 -3.708,-0.5868c-1.1976,-0.3888 -2.3268,-0.9648 -3.3456,-1.7052c-1.0188,-0.7404 -1.914,-1.6356 -2.6544,-2.6544c-0.7404,-1.0188 -1.3164,-2.148 -1.7052,-3.3456c-0.3888,-1.1976 -0.5868,-2.4492 -0.5868,-3.708c0,-1.2588 0.198,-2.5104 0.5868,-3.708c0.3888,-1.1976 0.9648,-2.3268 1.7052,-3.3456c0.7404,-1.0188 1.6356,-1.914 2.6544,-2.6544c1.0188,-0.7404 2.148,-1.3164 3.3456,-1.7052c1.1976,-0.3888 2.4492,-0.5868 3.708,-0.5868c1.2588,0 2.5104,0.198 3.708,0.5868c1.1976,0.3888 2.3268,0.9648 3.3456,1.7052c1.0188,0.7404 1.914,1.6356 2.6544,2.6544c0.7404,1.0188 1.3164,2.148 1.7052,3.3456c0.3888,1.1976 0.5868,2.4492 0.5868,3.708z" fill="none" stroke="rgb(195, 205, 255)" stroke-width="10" stroke-linecap="butt" stroke-linejoin="butt" stroke-dasharray="0 0" stroke-opacity="1" clip-path="url(#ligziij4roiiqcgytn)"></path></g></g></g></g><g transform="matrix(1,0,0,1,98,98)"><g id="83271" opacity="0.4" style="mix-blend-mode:normal"><g><g><path id="83271_fill_path" d="M135,0l-135,40h135z" fill-rule="nonzero" fill="rgb(244, 247, 251)" fill-opacity="1" style="mix-blend-mode:NORMAL"></path></g></g></g></g><g transform="matrix(1,0,0,1,1,1)"><g id="83272" opacity="1" style="mix-blend-mode:normal"><g><g><path id="83272_fill_path" d="M0,2c0,-1 1,-2 2,-2h229c1,0 2,1 2,2v18h-233z" fill-rule="nonzero" fill="rgb(105, 129, 255)" fill-opacity="1" style="mix-blend-mode:NORMAL"></path></g></g></g></g><g transform="matrix(1,0,0,1,42,74.4508)"><g id="83273" opacity="1" style="mix-blend-mode:normal"><g><g><path id="83273_fill_path" d="M18.00001,0h-8c-5.5225,0 -10.00001,4.47496 -10.00001,9.99992c0,1.09999 0.895,1.99998 2,1.99998h24.00002c1.1045,0 2,-0.89549 2,-1.99998c0,-5.52496 -4.475,-9.99992 -10.00001,-9.99992z" fill-rule="nonzero" fill="rgb(105, 129, 255)" fill-opacity="1" style="mix-blend-mode:NORMAL"></path></g></g></g></g><g transform="matrix(1,0,0,1,47.5999,54.4509)"><g id="83274" opacity="1" style="mix-blend-mode:normal"><g><g><path id="83274_fill_path" d="M17.306,8.653c0,0.9077 -0.1428,1.8102 -0.4232,2.6738c-0.2804,0.8636 -0.6957,1.6778 -1.2296,2.4124c-0.5339,0.7346 -1.1794,1.3801 -1.914,1.914c-0.7346,0.5339 -1.5488,0.9492 -2.4124,1.2296c-0.8636,0.2804 -1.7661,0.4232 -2.6738,0.4232c-0.9077,0 -1.8102,-0.1428 -2.6738,-0.4232c-0.8636,-0.2804 -1.6778,-0.6957 -2.4124,-1.2296c-0.7346,-0.5339 -1.3801,-1.1794 -1.914,-1.914c-0.5339,-0.7346 -0.9492,-1.5488 -1.2296,-2.4124c-0.2804,-0.8636 -0.4232,-1.7661 -0.4232,-2.6738c0,-0.9077 0.1428,-1.8102 0.4232,-2.6738c0.2804,-0.8636 0.6957,-1.6778 1.2296,-2.4124c0.5339,-0.7346 1.1794,-1.3801 1.914,-1.914c0.7346,-0.5339 1.5488,-0.9492 2.4124,-1.2296c0.8636,-0.2804 1.7661,-0.4232 2.6738,-0.4232c0.9077,0 1.8102,0.1428 2.6738,0.4232c0.8636,0.2804 1.6778,0.6957 2.4124,1.2296c0.7346,0.5339 1.3801,1.1794 1.914,1.914c0.5339,0.7346 0.9492,1.5488 1.2296,2.4124c0.2804,0.8636 0.4232,1.7661 0.4232,2.6738z" fill-rule="nonzero" fill="rgb(105, 129, 255)" fill-opacity="1" style="mix-blend-mode:NORMAL"></path></g></g></g></g><g transform="matrix(1,0,0,1,32,48)"><g id="83275" opacity="1" style="mix-blend-mode:normal"><g><g><path id="83275_fill_path" d="M12,0c0,0 -7.7348,0 -8,0c-0.2652,0 -0.5204,0.0252 -0.7804,0.0768c-0.26,0.0516 -0.5052,0.126 -0.7504,0.2276c-0.2452,0.1016 -0.4712,0.2224 -0.6916,0.3696c-0.2204,0.1472 -0.4184,0.31 -0.606,0.4976c-0.1876,0.1876 -0.3504,0.3856 -0.4976,0.606c-0.1472,0.2204 -0.268,0.4464 -0.3696,0.6916c-0.1016,0.2452 -0.176,0.4904 -0.2276,0.7504c-0.0516,0.26 -0.0768,0.5152 -0.0768,0.7804c0,0.2652 0,8 0,8" fill-rule="nonzero" fill="rgb(255, 255, 255)" fill-opacity="1" style="mix-blend-mode:NORMAL"></path><path id="83275_stroke_path" d="M12,0c0,0 -7.7348,0 -8,0c-0.2652,0 -0.5204,0.0252 -0.7804,0.0768c-0.26,0.0516 -0.5052,0.126 -0.7504,0.2276c-0.2452,0.1016 -0.4712,0.2224 -0.6916,0.3696c-0.2204,0.1472 -0.4184,0.31 -0.606,0.4976c-0.1876,0.1876 -0.3504,0.3856 -0.4976,0.606c-0.1472,0.2204 -0.268,0.4464 -0.3696,0.6916c-0.1016,0.2452 -0.176,0.4904 -0.2276,0.7504c-0.0516,0.26 -0.0768,0.5152 -0.0768,0.7804c0,0.2652 0,8 0,8" fill="none" stroke="rgb(195, 205, 255)" stroke-width="2" stroke-linecap="butt" stroke-linejoin="butt" stroke-dasharray="0 0" stroke-opacity="1"></path></g></g></g></g><g transform="matrix(6.123233995736766e-17,-1,1,6.123233995736766e-17,32,94)"><g id="83276" opacity="1" style="mix-blend-mode:normal"><g><g><path id="83276_fill_path" d="M12,0c0,0 -7.7348,0 -8,0c-0.2652,0 -0.5204,0.0252 -0.7804,0.0768c-0.26,0.0516 -0.5052,0.126 -0.7504,0.2276c-0.2452,0.1016 -0.4712,0.2224 -0.6916,0.3696c-0.2204,0.1472 -0.4184,0.31 -0.606,0.4976c-0.1876,0.1876 -0.3504,0.3856 -0.4976,0.606c-0.1472,0.2204 -0.268,0.4464 -0.3696,0.6916c-0.1016,0.2452 -0.176,0.4904 -0.2276,0.7504c-0.0516,0.26 -0.0768,0.5152 -0.0768,0.7804c0,0.2652 0,8 0,8" fill-rule="nonzero" fill="rgb(255, 255, 255)" fill-opacity="1" style="mix-blend-mode:NORMAL"></path><path id="83276_stroke_path" d="M12,0c0,0 -7.7348,0 -8,0c-0.2652,0 -0.5204,0.0252 -0.7804,0.0768c-0.26,0.0516 -0.5052,0.126 -0.7504,0.2276c-0.2452,0.1016 -0.4712,0.2224 -0.6916,0.3696c-0.2204,0.1472 -0.4184,0.31 -0.606,0.4976c-0.1876,0.1876 -0.3504,0.3856 -0.4976,0.606c-0.1472,0.2204 -0.268,0.4464 -0.3696,0.6916c-0.1016,0.2452 -0.176,0.4904 -0.2276,0.7504c-0.0516,0.26 -0.0768,0.5152 -0.0768,0.7804c0,0.2652 0,8 0,8" fill="none" stroke="rgb(195, 205, 255)" stroke-width="2" stroke-linecap="butt" stroke-linejoin="butt" stroke-dasharray="0 0" stroke-opacity="1"></path></g></g></g></g><g transform="matrix(-1,2.4492935982947064e-16,-2.4492935982947064e-16,-1,79,94)"><g id="83277" opacity="1" style="mix-blend-mode:normal"><g><g><path id="83277_fill_path" d="M12,0c0,0 -7.7348,0 -8,0c-0.2652,0 -0.5204,0.0252 -0.7804,0.0768c-0.26,0.0516 -0.5052,0.126 -0.7504,0.2276c-0.2452,0.1016 -0.4712,0.2224 -0.6916,0.3696c-0.2204,0.1472 -0.4184,0.31 -0.606,0.4976c-0.1876,0.1876 -0.3504,0.3856 -0.4976,0.606c-0.1472,0.2204 -0.268,0.4464 -0.3696,0.6916c-0.1016,0.2452 -0.176,0.4904 -0.2276,0.7504c-0.0516,0.26 -0.0768,0.5152 -0.0768,0.7804c0,0.2652 0,8 0,8" fill-rule="nonzero" fill="rgb(255, 255, 255)" fill-opacity="1" style="mix-blend-mode:NORMAL"></path><path id="83277_stroke_path" d="M12,0c0,0 -7.7348,0 -8,0c-0.2652,0 -0.5204,0.0252 -0.7804,0.0768c-0.26,0.0516 -0.5052,0.126 -0.7504,0.2276c-0.2452,0.1016 -0.4712,0.2224 -0.6916,0.3696c-0.2204,0.1472 -0.4184,0.31 -0.606,0.4976c-0.1876,0.1876 -0.3504,0.3856 -0.4976,0.606c-0.1472,0.2204 -0.268,0.4464 -0.3696,0.6916c-0.1016,0.2452 -0.176,0.4904 -0.2276,0.7504c-0.0516,0.26 -0.0768,0.5152 -0.0768,0.7804c0,0.2652 0,8 0,8" fill="none" stroke="rgb(195, 205, 255)" stroke-width="2" stroke-linecap="butt" stroke-linejoin="butt" stroke-dasharray="0 0" stroke-opacity="1"></path></g></g></g></g><g transform="matrix(6.123233995736766e-17,1,-1,6.123233995736766e-17,79,48)"><g id="83278" opacity="1" style="mix-blend-mode:normal"><g><g><path id="83278_fill_path" d="M12,0c0,0 -7.7348,0 -8,0c-0.2652,0 -0.5204,0.0252 -0.7804,0.0768c-0.26,0.0516 -0.5052,0.126 -0.7504,0.2276c-0.2452,0.1016 -0.4712,0.2224 -0.6916,0.3696c-0.2204,0.1472 -0.4184,0.31 -0.606,0.4976c-0.1876,0.1876 -0.3504,0.3856 -0.4976,0.606c-0.1472,0.2204 -0.268,0.4464 -0.3696,0.6916c-0.1016,0.2452 -0.176,0.4904 -0.2276,0.7504c-0.0516,0.26 -0.0768,0.5152 -0.0768,0.7804c0,0.2652 0,8 0,8" fill-rule="nonzero" fill="rgb(255, 255, 255)" fill-opacity="1" style="mix-blend-mode:NORMAL"></path><path id="83278_stroke_path" d="M12,0c0,0 -7.7348,0 -8,0c-0.2652,0 -0.5204,0.0252 -0.7804,0.0768c-0.26,0.0516 -0.5052,0.126 -0.7504,0.2276c-0.2452,0.1016 -0.4712,0.2224 -0.6916,0.3696c-0.2204,0.1472 -0.4184,0.31 -0.606,0.4976c-0.1876,0.1876 -0.3504,0.3856 -0.4976,0.606c-0.1472,0.2204 -0.268,0.4464 -0.3696,0.6916c-0.1016,0.2452 -0.176,0.4904 -0.2276,0.7504c-0.0516,0.26 -0.0768,0.5152 -0.0768,0.7804c0,0.2652 0,8 0,8" fill="none" stroke="rgb(195, 205, 255)" stroke-width="2" stroke-linecap="butt" stroke-linejoin="butt" stroke-dasharray="0 0" stroke-opacity="1"></path></g></g></g></g><g transform="matrix(1,0,0,1,100,47)"><g id="83279" opacity="1" style="mix-blend-mode:normal"><g><g><path id="83279_fill_path" d="M4,8c-2.20914,0 -4,-1.79086 -4,-4v0c0,-2.20914 1.79086,-4 4,-4v0c2.20914,0 4,1.79086 4,4v0c0,2.20914 -1.79086,4 -4,4z" fill-rule="nonzero" fill="rgb(105, 129, 255)" fill-opacity="1" style="mix-blend-mode:NORMAL"></path></g></g></g></g><g transform="matrix(1,0,0,1,116,47)"><g id="83280" opacity="1" style="mix-blend-mode:normal"><g><g><path id="83280_fill_path" d="M1,8c-0.55228,0 -1,-0.44772 -1,-1v-6c0,-0.55228 0.44772,-1 1,-1h86c0.55228,0 1,0.44772 1,1v6c0,0.55228 -0.44772,1 -1,1z" fill-rule="nonzero" fill="rgb(195, 205, 255)" fill-opacity="1" style="mix-blend-mode:NORMAL"></path></g></g></g></g><g transform="matrix(1,0,0,1,100,67)"><g id="83281" opacity="1" style="mix-blend-mode:normal"><g><g><path id="83281_fill_path" d="M4,8c-2.20914,0 -4,-1.79086 -4,-4v0c0,-2.20914 1.79086,-4 4,-4v0c2.20914,0 4,1.79086 4,4v0c0,2.20914 -1.79086,4 -4,4z" fill-rule="nonzero" fill="rgb(105, 129, 255)" fill-opacity="1" style="mix-blend-mode:NORMAL"></path></g></g></g></g><g transform="matrix(1,0,0,1,116,67)"><g id="83282" opacity="1" style="mix-blend-mode:normal"><g><g><path id="83282_fill_path" d="M1,8c-0.55228,0 -1,-0.44772 -1,-1v-6c0,-0.55228 0.44772,-1 1,-1h64c0.55228,0 1,0.44772 1,1v6c0,0.55228 -0.44772,1 -1,1z" fill-rule="nonzero" fill="rgb(195, 205, 255)" fill-opacity="1" style="mix-blend-mode:NORMAL"></path></g></g></g></g><g transform="matrix(1,0,0,1,100,87)"><g id="83283" opacity="1" style="mix-blend-mode:normal"><g><g><path id="83283_fill_path" d="M4,8c-2.20914,0 -4,-1.79086 -4,-4v0c0,-2.20914 1.79086,-4 4,-4v0c2.20914,0 4,1.79086 4,4v0c0,2.20914 -1.79086,4 -4,4z" fill-rule="nonzero" fill="rgb(105, 129, 255)" fill-opacity="1" style="mix-blend-mode:NORMAL"></path></g></g></g></g><g transform="matrix(1,0,0,1,116,87)"><g id="83284" opacity="1" style="mix-blend-mode:normal"><g><g><path id="83284_fill_path" d="M1,8c-0.55228,0 -1,-0.44772 -1,-1v-6c0,-0.55228 0.44772,-1 1,-1h51c0.55228,0 1,0.44772 1,1v6c0,0.55228 -0.44772,1 -1,1z" fill-rule="nonzero" fill="rgb(195, 205, 255)" fill-opacity="1" style="mix-blend-mode:NORMAL"></path></g></g></g></g><g transform="matrix(1,0,0,1,137,9)"><g id="83285" opacity="1" style="mix-blend-mode:normal"><g><g><path id="83285_fill_path" d="M1,4c-0.55228,0 -1,-0.44772 -1,-1v-2c0,-0.55228 0.44772,-1 1,-1h86c0.55228,0 1,0.44772 1,1v2c0,0.55228 -0.44772,1 -1,1z" fill-rule="nonzero" fill="rgb(244, 247, 251)" fill-opacity="1" style="mix-blend-mode:NORMAL"></path></g></g></g></g><g transform="matrix(-1,0,0,-1,92.4999,98.9985)"><g id="83286" opacity="0.2" style="mix-blend-mode:lighten"><g><g><path id="83286_fill_path" d="M90.49994,0l-90.49994,96.99852l90.49994,0.00002z" fill-rule="nonzero" fill="rgb(255, 255, 255)" fill-opacity="1" style="mix-blend-mode:NORMAL"></path></g></g></g></g><g transform="matrix(1,0,0,1,0,20)"><g id="83319" opacity="0" style="mix-blend-mode:normal"><g><g><path id="83319_fill_path" d="M0,118v-118h234v118z" fill-rule="nonzero" fill="rgb(255, 255, 255)" fill-opacity="1" style="mix-blend-mode:NORMAL"></path></g></g></g></g></g></g></g></g></g></g></g></g><animateTransform href="#83287" attributeName="transform" type="translate" values="118 70;118 70;118 70;118 70;118 70" dur="2.6s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.37;0.61;0.66;1" keySplines="0.0664 0.4423 0.15 1;0.0664 0.4423 0.1 1;0.0664 0.4423 0.1 1;0.5 0.35 0.1 1" additive="sum" fill="freeze"></animateTransform><animateTransform href="#83287" attributeName="transform" type="scale" values="0 1;0 1;1.02 1;1 1;1 1" dur="2.6s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.37;0.61;0.66;1" keySplines="0.0664 0.4423 0.15 1;0.0664 0.4423 0.1 1;0.0664 0.4423 0.1 1;0.5 0.35 0.1 1" additive="sum" fill="freeze"></animateTransform><animateTransform href="#83287" attributeName="transform" type="translate" values="-118 -70;-118 -70;-118 -70;-118 -70;-118 -70" dur="2.6s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.37;0.61;0.66;1" keySplines="0.0664 0.4423 0.15 1;0.0664 0.4423 0.1 1;0.0664 0.4423 0.1 1;0.5 0.35 0.1 1" additive="sum" fill="freeze"></animateTransform><animateTransform href="#83291" attributeName="transform" type="translate" values="0 0;0 0;9.018099999999999 -4;9.018099999999999 -4" dur="2.6s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.37;0.52;1" keySplines="0.42 0 0.15 1;0.42 0 0.15 1;0.5 0.35 0.15 1" additive="sum" fill="freeze"></animateTransform><animateTransform href="#83291" attributeName="transform" type="translate" values="113.5 30.4997;113.5 30.4997;113.5 30.4997;113.5 30.4997" dur="2.6s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.37;0.52;1" keySplines="0.5 0.35 0.15 1;0.5 0.35 0.15 1;0.5 0.35 0.15 1" additive="sum" fill="freeze"></animateTransform><animateTransform href="#83291" attributeName="transform" type="scale" values="-1 -1;-1 -1;-0.88 -0.88;-0.88 -0.88" dur="2.6s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.37;0.52;1" keySplines="0.5 0.35 0.15 1;0.5 0.35 0.15 1;0.5 0.35 0.15 1" additive="sum" fill="freeze"></animateTransform><animateTransform href="#83291" attributeName="transform" type="translate" values="-113.5 -30.4997;-113.5 -30.4997;-113.5 -30.4997;-113.5 -30.4997" dur="2.6s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.37;0.52;1" keySplines="0.5 0.35 0.15 1;0.5 0.35 0.15 1;0.5 0.35 0.15 1" additive="sum" fill="freeze"></animateTransform><animate href="#83320" attributeName="opacity" values="0.2;0.2;0;0" dur="2.6s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.39;0.43;1" keySplines="0.5 0.35 0.15 1;0.5 0.35 0.15 1;0.5 0.35 0.15 1" additive="sum" fill="freeze"></animate><animateTransform href="#83268" attributeName="transform" type="translate" values="117 75;117 75;117 75;117 75" dur="2.6s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.09;0.37;1" keySplines="0.5 0.35 0.15 1;0.5 0.35 0.8 0.15;0.5 0.35 0.8 0.15" additive="sum" fill="freeze"></animateTransform><animateTransform href="#83268" attributeName="transform" type="scale" values="1 1;1 1;0 1;0 1" dur="2.6s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.09;0.37;1" keySplines="0.5 0.35 0.15 1;0.5 0.35 0.8 0.15;0.5 0.35 0.8 0.15" additive="sum" fill="freeze"></animateTransform><animateTransform href="#83268" attributeName="transform" type="translate" values="-117 -75;-117 -75;-117 -75;-117 -75" dur="2.6s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.09;0.37;1" keySplines="0.5 0.35 0.15 1;0.5 0.35 0.8 0.15;0.5 0.35 0.8 0.15" additive="sum" fill="freeze"></animateTransform><animate href="#83271_fill_path" attributeName="d" values="M135,0l-135,40h135z;M135,0l-135,40h135z;M135,0l-135,40h135z;M135,0l-135,40h135z;M135,0l-135,40h135z;M135,0l-135,40h135z;M135,0l-135,40h135z;M135,0l-135,40h135z;M135,0l-135,40h135z;M135,0l-135,40h135z;M135,0l-135,40h135z;M135,0l-135,40h135z;M135,-0.0042l-135.0142,40.0042h135.0142z;M135,-0.0364l-135.1228,40.0364h135.1228z;M135,-0.0975l-135.3292,40.0975h135.3292z;M135,-0.1848l-135.6236,40.1848h135.6236z;M135,-0.2958l-135.9982,40.2958h135.9982z;M135,-0.4285l-136.4462,40.4285h136.4462z;M135,-0.5812l-136.9617,40.5812h136.9617z;M135,-0.7525l-137.5397,40.7525h137.5397z;M135,-0.941l-138.176,40.941h138.176z;M135,-1.1457l-138.8667,41.1457h138.8667z;M135,-1.3655l-139.6085,41.3655h139.6085z;M135,-1.5996l-140.3986,41.5996h140.3986z;M135,-1.8472l-141.2343,41.8472h141.2343z;M135,-2.1077l-142.1134,42.1077h142.1134z;M135,-2.3804l-143.0339,42.3804h143.0339z;M135,-2.6649l-143.994,42.6649h143.994z;M135,-2.9607l-144.9922,42.9607h144.9922z;M135,-3.2673l-146.0272,43.2673h146.0272z;M135,-3.5846l-147.0978,43.5846h147.0978z;M135,-3.9121l-148.2031,43.9121h148.2031z;M135,-4.2497l-149.3424,44.2497h149.3424z;M135,-4.5972l-150.5153,44.5972h150.5153z;M135,-4.9545l-151.7213,44.9545h151.7213z;M135,-5.3218l-152.9607,45.3218h152.9607z;M135,-5.6991l-154.2341,45.6991h154.2341z;M135,-6.0868l-155.5427,46.0868h155.5427z;M135,-6.4858l-156.8893,46.4858h156.8893z;M135,-6.898l-158.2804,46.898h158.2804z;M135,-7.1112l-159,47.1112h159z;M135,-7.1112l-159,47.1112h159z;M135,-7.1112l-159,47.1112h159z;M135,-7.1112l-159,47.1112h159z;M135,-7.1112l-159,47.1112h159z;M135,-7.1112l-159,47.1112h159z;M135,-7.1112l-159,47.1112h159z;M135,-7.1112l-159,47.1112h159z;M135,-7.1112l-159,47.1112h159z;M135,-7.1112l-159,47.1112h159z;M135,-7.1112l-159,47.1112h159z;M135,-7.1112l-159,47.1112h159z;M135,-7.1112l-159,47.1112h159z;M135,-7.1112l-159,47.1112h159z;M135,-7.1112l-159,47.1112h159z;M135,-7.1112l-159,47.1112h159z;M135,-7.1112l-159,47.1112h159z;M135,-7.1112l-159,47.1112h159z;M135,-7.1112l-159,47.1112h159z;M135,-7.1112l-159,47.1112h159z;M135,-7.1112l-159,47.1112h159z;M135,-7.1112l-159,47.1112h159z;M135,-7.1112l-159,47.1112h159z;M135,-7.1112l-159,47.1112h159z;M135,-7.1112l-159,47.1112h159z;M135,-7.1112l-159,47.1112h159z;M135,-7.1112l-159,47.1112h159z;M135,-7.1112l-159,47.1112h159z;M135,-7.1112l-159,47.1112h159z;M135,-7.1112l-159,47.1112h159z;M135,-7.1112l-159,47.1112h159z;M135,-7.1112l-159,47.1112h159z;M135,-7.1112l-159,47.1112h159z;M135,-7.1112l-159,47.1112h159z;M135,-7.1112l-159,47.1112h159z;M135,-7.1112l-159,47.1112h159z;M135,-7.1112l-159,47.1112h159z;M135,-7.1112l-159,47.1112h159z;M135,-7.1112l-159,47.1112h159z;M135,-7.1112l-159,47.1112h159z;M135,-7.1112l-159,47.1112h159z;M135,-7.1112l-159,47.1112h159z;M135,-7.1112l-159,47.1112h159z;M135,-7.1112l-159,47.1112h159z;M135,-7.1112l-159,47.1112h159z;M135,-7.1112l-159,47.1112h159z;M135,-7.1112l-159,47.1112h159z;M135,-7.1112l-159,47.1112h159z;M135,-7.1112l-159,47.1112h159z;M135,-7.1112l-159,47.1112h159z;M135,-7.1112l-159,47.1112h159z;M135,-7.1112l-159,47.1112h159z;M135,-7.1112l-159,47.1112h159z;M135,-7.1112l-159,47.1112h159z;M135,-7.1112l-159,47.1112h159z;M135,-7.1112l-159,47.1112h159z;M135,-7.1112l-159,47.1112h159z;M135,-7.1112l-159,47.1112h159z;M135,-7.1112l-159,47.1112h159z;M135,-7.1112l-159,47.1112h159z;M135,-7.1112l-159,47.1112h159z;M135,-7.1112l-159,47.1112h159z;M135,-7.1112l-159,47.1112h159z;M135,-7.1112l-159,47.1112h159z;M135,-7.1112l-159,47.1112h159z;M135,-7.1112l-159,47.1112h159z;M135,-7.1112l-159,47.1112h159z;M135,-7.1112l-159,47.1112h159z;M135,-7.1112l-159,47.1112h159z;M135,-7.1112l-159,47.1112h159z;M135,-7.1112l-159,47.1112h159z;M135,-7.1112l-159,47.1112h159z;M135,-7.1112l-159,47.1112h159z;M135,-7.1112l-159,47.1112h159z;M135,-7.1112l-159,47.1112h159z;M135,-7.1112l-159,47.1112h159z;M135,-7.1112l-159,47.1112h159z;M135,-7.1112l-159,47.1112h159z;M135,-7.1112l-159,47.1112h159z;M135,-7.1112l-159,47.1112h159z;M135,-7.1112l-159,47.1112h159z;M135,-7.1112l-159,47.1112h159z;M135,-7.1112l-159,47.1112h159z;M135,-7.1112l-159,47.1112h159z;M135,-7.1112l-159,47.1112h159z;M135,-7.1112l-159,47.1112h159z;M135,-7.1112l-159,47.1112h159z;M135,-7.1112l-159,47.1112h159z;M135,-7.1112l-159,47.1112h159z;M135,-7.1112l-159,47.1112h159z;M135,-7.1112l-159,47.1112h159z" dur="2.6s" repeatCount="indefinite" keyTimes="0;0.007692307692307693;0.015384615384615385;0.023076923076923078;0.03076923076923077;0.038461538461538464;0.046153846153846156;0.05384615384615385;0.06153846153846154;0.06923076923076923;0.07692307692307693;0.08461538461538462;0.09230769230769231;0.1;0.1076923076923077;0.11538461538461539;0.12307692307692308;0.13076923076923078;0.13846153846153847;0.14615384615384616;0.15384615384615385;0.16153846153846155;0.16923076923076924;0.17692307692307693;0.18461538461538463;0.19230769230769232;0.2;0.2076923076923077;0.2153846153846154;0.2230769230769231;0.23076923076923078;0.23846153846153847;0.24615384615384617;0.25384615384615383;0.26153846153846155;0.2692307692307692;0.27692307692307694;0.2846153846153846;0.2923076923076923;0.3;0.3076923076923077;0.3153846153846154;0.3230769230769231;0.33076923076923076;0.3384615384615385;0.34615384615384615;0.35384615384615387;0.36153846153846153;0.36923076923076925;0.3769230769230769;0.38461538461538464;0.3923076923076923;0.4;0.4076923076923077;0.4153846153846154;0.4230769230769231;0.4307692307692308;0.43846153846153846;0.4461538461538462;0.45384615384615384;0.46153846153846156;0.46923076923076923;0.47692307692307695;0.4846153846153846;0.49230769230769234;0.5;0.5076923076923077;0.5153846153846153;0.5230769230769231;0.5307692307692308;0.5384615384615384;0.5461538461538461;0.5538461538461539;0.5615384615384615;0.5692307692307692;0.5769230769230769;0.5846153846153846;0.5923076923076923;0.6;0.6076923076923076;0.6153846153846154;0.6230769230769231;0.6307692307692307;0.6384615384615384;0.6461538461538462;0.6538461538461539;0.6615384615384615;0.6692307692307692;0.676923076923077;0.6846153846153846;0.6923076923076923;0.7;0.7076923076923077;0.7153846153846154;0.7230769230769231;0.7307692307692307;0.7384615384615385;0.7461538461538462;0.7538461538461538;0.7615384615384615;0.7692307692307693;0.7769230769230769;0.7846153846153846;0.7923076923076923;0.8;0.8076923076923077;0.8153846153846154;0.823076923076923;0.8307692307692308;0.8384615384615385;0.8461538461538461;0.8538461538461538;0.8615384615384616;0.8692307692307693;0.8769230769230769;0.8846153846153846;0.8923076923076924;0.9;0.9076923076923077;0.9153846153846154;0.9230769230769231;0.9307692307692308;0.9384615384615385;0.9461538461538461;0.9538461538461539;0.9615384615384616;0.9692307692307692;0.9769230769230769;0.9846153846153847;0.9923076923076923;1" fill="freeze"></animate><animateTransform href="#83285" attributeName="transform" type="translate" values="88 2;88 2;88 2;88 2;88 2" dur="2.6s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.12;0.27;0.33;1" keySplines="0.42 0 0.15 1;0.42 0 0.48 1;0.42 0 0.48 1;0.5 0.35 0.48 1" additive="sum" fill="freeze"></animateTransform><animateTransform href="#83285" attributeName="transform" type="scale" values="0.98 1;0.98 1;1 1;0.96 1;0.96 1" dur="2.6s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.12;0.27;0.33;1" keySplines="0.42 0 0.15 1;0.42 0 0.48 1;0.42 0 0.48 1;0.5 0.35 0.48 1" additive="sum" fill="freeze"></animateTransform><animateTransform href="#83285" attributeName="transform" type="translate" values="-88 -2;-88 -2;-88 -2;-88 -2;-88 -2" dur="2.6s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.12;0.27;0.33;1" keySplines="0.42 0 0.15 1;0.42 0 0.48 1;0.42 0 0.48 1;0.5 0.35 0.48 1" additive="sum" fill="freeze"></animateTransform><animateTransform href="#83286" attributeName="transform" type="translate" values="0 0;0 0;0 0;0 0" dur="2.6s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.09;0.32;1" keySplines="0.42 0 0.15 1;0.42 0 1 1;0.5 0.35 1 1" additive="sum" fill="freeze"></animateTransform><animateTransform xlink:href="#83286" href="#83286" attributeName="transform" type="skewX" values="0;0;-4;-4" dur="2.6s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.09;0.32;1" keySplines="0.42 0 0.15 1;0.42 0 1 1;0.5 0.35 1 1" additive="sum" fill="freeze"></animateTransform><animateTransform xlink:href="#83286" href="#83286" attributeName="transform" type="skewY" values="0;0;0;0" dur="2.6s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.09;0.32;1" keySplines="0.42 0 0.15 1;0.42 0 1 1;0.5 0.35 1 1" additive="sum" fill="freeze"></animateTransform><animateTransform xlink:href="#83286" href="#83286" attributeName="transform" type="translate" values="0 0;0 0;0 0;0 0" dur="2.6s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.09;0.32;1" keySplines="0.42 0 0.15 1;0.42 0 1 1;0.5 0.35 1 1" additive="sum" fill="freeze"></animateTransform><animate href="#83319" attributeName="opacity" values="0;0;0.18;0.18" dur="2.6s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.31;0.36;1" keySplines="0.5 0.35 0.15 1;0.5 0.35 0.15 1;0.5 0.35 0.15 1" additive="sum" fill="freeze"></animate>\n  ',
            e
        }();
        return t.setAttribute("style", "position: absolute; z-index: 1; opacity: 0; transition: opacity 0.5s ease-in-out;"),
        "document_back" === e && (t.style.opacity = "1",
        setTimeout((()=>{
            t.style.opacity = "0"
        }
        ), 5e3)),
        t
    }
      , ds = e=>{
        let {step: t, setImage: i, camera: n} = e;
        const r = Co[t]
          , a = ((e,t)=>ao({
            tagName: "div",
            style: {
                display: "flex",
                height: "100%",
                justifyContent: "space-between",
                flexDirection: "column",
                alignItems: "center"
            },
            id: e,
            testid: "document-capture",
            className: t
        }))("document-capture", t)
          , o = ao({
            tagName: "div",
            style: {
                position: "relative",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center"
            },
            id: "camera-hint-section",
            testid: "camera-hint-section"
        })
          , s = document.getElementById(Ea.state.rootElementId);
        if (!s)
            throw new Error("Root element not found");
        const l = Do(go(t), s);
        oo(o, us(t)),
        oo(o, l);
        const c = (()=>{
            const e = ao({
                tagName: "div",
                style: {
                    zIndex: "2",
                    width: "80%",
                    height: "50px",
                    color: "white",
                    display: "flex",
                    alignItems: "center",
                    backgroundColor: "#2E2E2E",
                    justifyContent: "center",
                    opacity: ".9"
                },
                id: "loading-block",
                testid: "loading-block"
            })
              , t = So();
            return t.style.width = "16px",
            t.style.height = "16px",
            t.style.margin = "0 10px",
            oo(e, t),
            oo(e, To({
                text: "This may take a few seconds",
                level: 5,
                style: {
                    color: "white",
                    margin: "0",
                    width: "80%"
                },
                id: "image-loading-message"
            })),
            e
        }
        )();
        oo(l, c),
        c.style.visibility = "hidden";
        const u = cs({
            text: lo.translate(r.page),
            id: "page-header",
            testid: "page-header"
        })
          , d = (e=>{
            let {click: t, id: i, testid: n, color: r} = e;
            const a = ao({
                tagName: "button",
                style: {
                    width: "65px",
                    height: "65px",
                    zIndex: "1",
                    backgroundColor: "black",
                    padding: "0",
                    border: "solid 5px " + (r || "white"),
                    borderRadius: "40px"
                },
                id: i + "-outer",
                testid: n + "-outer"
            });
            return oo(a, ao({
                tagName: "div",
                style: {
                    width: "49px",
                    height: "49px",
                    backgroundColor: r || "white",
                    border: "none",
                    margin: "0 auto",
                    borderRadius: "40px"
                },
                id: i + "-inner",
                testid: n + "-inner"
            })),
            a.addEventListener("click", t),
            a
        }
        )({
            click: i,
            id: "submit-image",
            testid: "submit-image"
        })
          , h = (e=>{
            let {title: t, text: i} = e;
            const n = ao({
                tagName: "div",
                style: {
                    position: "relative",
                    zIndex: "2",
                    padding: "0 25px",
                    margin: "10px 0 20px 0"
                },
                id: "page-info",
                testid: "page-info"
            })
              , r = To({
                text: t,
                level: 1,
                style: {
                    color: "white",
                    textAlign: "center",
                    marginBottom: "10px"
                }
            })
              , a = To({
                text: i,
                level: 5,
                style: {
                    color: "white",
                    textAlign: "center"
                }
            });
            return oo(n, r),
            oo(n, a),
            n
        }
        )({
            text: lo.translate(r.instructions),
            title: lo.translate(r.title)
        })
          , g = (()=>{
            const e = ao({
                tagName: "div",
                style: {
                    zIndex: "2",
                    width: "90%",
                    minHeight: Ea.state.markdownSupportText ? "110px" : "50px",
                    maxHeight: "110px",
                    color: "white",
                    display: "flex",
                    flexDirection: Ea.state.markdownSupportText ? "column" : "row",
                    alignItems: "center",
                    backgroundColor: "#2E2E2E",
                    justifyContent: "center",
                    visibility: "hidden"
                },
                id: "error-block",
                testid: "error-block"
            })
              , t = ao({
                tagName: "div",
                style: {
                    display: "flex",
                    flexDirection: "row",
                    width: "100%",
                    height: "inherit",
                    alignItems: "center",
                    paddingTop: "25px"
                },
                id: "image-error-block",
                testid: "image-error-block"
            })
              , i = So();
            i.style.width = "16px",
            i.style.height = "16px",
            i.style.margin = "0 10px",
            Ea.state.markdownSupportText ? oo(t, i) : oo(e, i);
            const n = Ea.state.markdownSupportText ? ls.parse(Ea.state.markdownSupportText) : ""
              , r = To({
                text: "",
                level: 5,
                style: {
                    color: "white",
                    margin: "0",
                    width: "80%"
                },
                id: "image-error-message"
            })
              , a = To({
                text: "",
                level: 5,
                style: {
                    color: "white",
                    margin: "0",
                    width: "80%"
                },
                id: "image-error-support-message"
            });
            return n && (a.innerHTML = n,
            oo(t, r)),
            oo(e, n ? [t, a] : r),
            e
        }
        )()
          , p = function() {
            const e = document.createElementNS("http://www.w3.org/2000/svg", "svg");
            return e.setAttribute("width", "65"),
            e.setAttribute("height", "65"),
            e.setAttribute("viewBox", "0 0 24 24"),
            e.innerHTML = '\n    <path fill="#ffffff" d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" opacity=".25"/><path fill="#ffffff" d="M12,4a8,8,0,0,1,7.89,6.7A1.53,1.53,0,0,0,21.38,12h0a1.5,1.5,0,0,0,1.48-1.75,11,11,0,0,0-21.72,0A1.5,1.5,0,0,0,2.62,12h0a1.53,1.53,0,0,0,1.49-1.3A8,8,0,0,1,12,4Z"><animateTransform attributeName="transform" type="rotate" dur="0.75s" values="0 12 12;360 12 12" repeatCount="indefinite"/></path>\n  ',
            e
        }();
        p.style.display = "none",
        oo(a, u),
        oo(a, h),
        oo(a, o),
        oo(a, g);
        const f = ao({
            tagName: "div",
            style: {
                width: "100%",
                height: "70px",
                margin: "5% 0",
                position: "relative",
                zIndex: "1",
                display: "flex",
                justifyContent: "center"
            },
            id: "trigger-section",
            testid: "trigger-section"
        });
        oo(f, p),
        oo(f, d),
        oo(a, f),
        oo(a, n.videoElement);
        const m = ao({
            tagName: "img",
            style: {
                display: "block",
                position: "absolute",
                objectFit: "cover",
                height: "100%",
                width: "100%",
                transform: "user" === go(t) ? "scaleX(-1)" : ""
            },
            id: "image-preview",
            testid: "image-preview"
        });
        const _ = (e=>{
            const t = ao({
                tagName: "div",
                style: {
                    position: "absolute",
                    height: "100%",
                    width: "100%",
                    objectFit: "cover"
                },
                id: "image-preview-section",
                testid: "image-preview-section"
            });
            return t.appendChild(e),
            t
        }
        )(m);
        return oo(a, _),
        {
            component: a,
            setLoadingMode: e=>{
                d.style.display = "none",
                g.style.visibility = "hidden",
                p.style.display = "block",
                e && (c.style.visibility = "visible")
            }
            ,
            setPreviewImage: e=>{
                m.src = e,
                c.style.visibility = "hidden",
                n.videoElement.style.display = "none",
                d.style.display = "none",
                g.style.visibility = "hidden",
                _.style.display = "block",
                p.style.display = "block"
            }
            ,
            setLoadingComplete: ()=>{
                p.style.display = "none"
            }
            ,
            setCapturingShowErrorMode: (e,t)=>{
                d.style.display = "block",
                _.style.display = "none",
                n.videoElement.style.display = "block";
                const i = e == va.feedback.RESTRICTED_CRITERIA
                  , r = Eo[e] || Eo.other;
                document.getElementById("image-error-message").innerHTML = t && i ? ls.parse(t) : lo.translate(r.message),
                g.style.visibility = "visible",
                c.style.visibility = "hidden"
            }
        }
    }
    ;
    async function hs(e, t) {
        var i, n, r, a;
        let o = "camera-error";
        if ("NotAllowedError" === t.name) {
            o = "Permission dismissed" === t.message ? "camera-permission-dismissed" : "camera-permission-denied";
            const s = Ca.createCameraNotAllowedEvent(t.message, e);
            await Ka(null === (i = Ea.state) || void 0 === i ? void 0 : i.step, null === (n = Ea.state) || void 0 === n ? void 0 : n.userToken, null === (r = Ea.state) || void 0 === r ? void 0 : r.sessionId, null === (a = Ea.state) || void 0 === a ? void 0 : a.clientId, s)
        }
        ma(e, o)
    }
    function gs(e) {
        const t = (e=>{
            var t, i, n, r;
            const [a,o] = e.split(",");
            if (!a || !o)
                throw new Error("unable-to-parse-data-uri");
            const s = null === (n = null === (i = null === (t = a.split(";")) || void 0 === t ? void 0 : t[0]) || void 0 === i ? void 0 : i.split(":")) || void 0 === n ? void 0 : n[1];
            if (!s)
                throw new Error("unable-to-parse-data-uri");
            const l = null === (r = s.split("/")) || void 0 === r ? void 0 : r[1];
            if (!l)
                throw new Error("unable-to-parse-data-uri");
            return {
                data: o,
                format: l
            }
        }
        )(e);
        return {
            image: {
                data: t.data,
                format: t.format,
                captureMargins: ho()
            }
        }
    }
    const ps = e=>{
        let {step: t} = e;
        var i;
        let n = !1;
        const r = null === (i = Ea.state) || void 0 === i ? void 0 : i.videoCaptureSettings
          , a = ((e,t)=>{
            let i, n, r = !1;
            const a = Ao(e)
              , o = new _o(a)
              , s = async()=>{
                r && (await o.stopCamera(),
                o.stream && o.stream.getTracks().forEach((e=>{
                    "live" == e.readyState && e.stop()
                }
                )),
                r = !1)
            }
            ;
            return {
                videoStream: n,
                startVideoFeed: async e=>{
                    var a, l, c, u;
                    r && await s(),
                    "environment" == e && (i = await vo());
                    const d = null !== (l = null === (a = null == i ? void 0 : i.selectedCamera) || void 0 === a ? void 0 : a.deviceId) && void 0 !== l ? l : e
                      , h = "user" === e ? null !== (c = null == t ? void 0 : t.selfieVideoConstraints) && void 0 !== c ? c : wo : null !== (u = null == t ? void 0 : t.environmentVideoConstraints) && void 0 !== u ? u : yo;
                    n = await o.startCamera(d, h),
                    r = !0
                }
                ,
                stopVideoFeed: s,
                videoElement: o.videoElement,
                getDataUri: o.getDataUri,
                getCameraInfo: ()=>i
            }
        }
        )(go(t), r);
        !function(e) {
            pa({
                type: "page-load",
                step: e
            })
        }(t);
        const o = ds({
            step: t,
            setImage: async function() {
                var e, i, s, l;
                const c = Date.now()
                  , u = function(e) {
                    const t = e.getCameraInfo();
                    return {
                        selectedCamera: (null == t ? void 0 : t.selectedCamera) && {
                            label: t.selectedCamera.label
                        },
                        camerasInfo: (null == t ? void 0 : t.optionalCameras) && t.optionalCameras.map((e=>({
                            label: e.label
                        })))
                    }
                }(a);
                if (!n)
                    return;
                o.setLoadingMode(null == r ? void 0 : r.showLoadingBlock);
                const d = function(e) {
                    return e.getDataUri({
                        sizeFactor: 1,
                        imageType: "jpg",
                        imageCompression: 0,
                        isImageMirror: !1
                    })
                }(a);
                o.setPreviewImage(d);
                const h = Ca.createUserActionEvent("capture_image", t);
                await Ka(null === (e = Ea.state) || void 0 === e ? void 0 : e.step, null === (i = Ea.state) || void 0 === i ? void 0 : i.userToken, null === (s = Ea.state) || void 0 === s ? void 0 : s.sessionId, null === (l = Ea.state) || void 0 === l ? void 0 : l.clientId, h),
                function(e, t) {
                    pa({
                        type: "capture-image",
                        imageType: t,
                        step: e
                    })
                }(t, po(t));
                try {
                    const e = Date.now()
                      , i = gs(d);
                    await a.stopVideoFeed(),
                    n = !1;
                    const r = await uo(Ea.state.sessionId, Ea.state.userToken, Ea.state.clientId, null == i ? void 0 : i.image, u, po(t));
                    if (await async function(e) {
                        let {step: t, requestStartTime: i, imageProcessingStartTime: n, serverProcessingTime: r, userToken: a, sessionId: o, clientId: s} = e;
                        const l = Date.now() - i
                          , c = n ? i - n : 0
                          , u = Ca.createUploadImageEvent(t, String(l), String(r), String(c));
                        await Ka(t, a, o, s, u)
                    }({
                        step: t,
                        requestStartTime: e,
                        imageProcessingStartTime: c,
                        serverProcessingTime: r.serverProcessingTime,
                        userToken: Ea.state.userToken,
                        sessionId: Ea.state.sessionId,
                        clientId: Ea.state.clientId
                    }),
                    Ea.dispatch("setMissingImages", r.missing_images),
                    o.setLoadingComplete(),
                    function(e, t, i) {
                        pa({
                            type: "capture-image-result",
                            imageType: t,
                            feedback: i,
                            step: e
                        })
                    }(t, po(t), r.feedback),
                    "ok" !== r.feedback)
                        return o.setCapturingShowErrorMode(r.feedback, r.custom_feedback),
                        void a.startVideoFeed(go(t)).then((()=>{
                            n = !0
                        }
                        )).catch((async e=>{
                            throw await hs(t, e),
                            e
                        }
                        ));
                    Ea.dispatch("setStep", (e=>{
                        let t;
                        return t = e && e.length > 0 ? e.shift() : "processing",
                        t
                    }
                    )(Ea.state.missingImages))
                } catch (e) {
                    o.setLoadingComplete(),
                    o.setCapturingShowErrorMode(va.feedback.OTHER),
                    a.startVideoFeed(go(t)).then((()=>{
                        n = !0
                    }
                    )).catch((async e=>{
                        throw await hs(t, e),
                        e
                    }
                    )),
                    ma(t, "failed-to-submit-image")
                }
            },
            camera: a
        });
        return (async e=>{
            var t, i, n, r;
            const a = Ca.createPageViewEvent(e);
            await Ka(null === (t = Ea.state) || void 0 === t ? void 0 : t.step, null === (i = Ea.state) || void 0 === i ? void 0 : i.userToken, null === (n = Ea.state) || void 0 === n ? void 0 : n.sessionId, null === (r = Ea.state) || void 0 === r ? void 0 : r.clientId, a)
        }
        )(t).finally((()=>{
            a.startVideoFeed(go(t)).then((()=>{
                n = !0
            }
            )).catch((async e=>{
                throw await hs(t, e),
                e
            }
            ))
        }
        )),
        o.component
    }
      , fs = ()=>{
        pa({
            type: "start-verification-processing",
            step: Ea.state.step
        }),
        fa("processing", "processing", Ea.state.sessionId);
        const e = ms("processing-verification");
        oo(e, cs({
            text: "Processing Verification",
            id: "processing-verification-header",
            testid: "processing-verification-header"
        }));
        const t = async()=>{
            const e = await to(Ea.state.sessionId, Ea.state.userToken, Ea.state.clientId);
            r(e)
        }
          , i = ()=>{
            setTimeout(t, 3e3)
        }
          , n = async e=>{
            Ea.dispatch("setStep", e.status),
            Ea.dispatch("setStatus", e.status)
        }
          , r = async e=>{
            var t, r, a;
            if (Ea.dispatch("setMissingImages", e.missing_images),
            e.status)
                if ("complete" === (null == e ? void 0 : e.status)) {
                    const i = Ca.createProcessingCompleteEvent();
                    await Ka(Ea.state.step, Ea.state.userToken, null === (t = Ea.state) || void 0 === t ? void 0 : t.sessionId, null === (r = Ea.state) || void 0 === r ? void 0 : r.clientId, i),
                    n(e),
                    fa("complete", e.status, Ea.state.sessionId),
                    function(e, t, i) {
                        pa({
                            type: "verification-complete",
                            step: e,
                            sessionId: t,
                            callbackUrl: i
                        })
                    }("complete", Ea.state.sessionId, e.callback_url),
                    a = ua,
                    sessionStorage.removeItem(a)
                } else
                    "recapture" === (null == e ? void 0 : e.status) ? (n(e),
                    fa("recapture", e.status, Ea.state.sessionId),
                    function(e, t, i) {
                        pa({
                            type: "verification-recapture",
                            step: e,
                            sessionId: t,
                            reason: i
                        })
                    }("recapture", e.status, e.recapture_reason)) : i();
            else
                "processing" !== e.state && (n(e),
                i())
        }
        ;
        return t(),
        e
    }
      , ms = e=>ao({
        tagName: "div",
        style: {
            display: "flex",
            height: "100%",
            justifyContent: "space-between",
            flexDirection: "column",
            alignItems: "center"
        },
        id: e,
        testid: "processing-verification"
    });
    function _s(e, t) {
        var i;
        if (!e)
            return;
        null === (i = t.firstChild) || void 0 === i || i.remove();
        const n = function(e) {
            switch (e) {
            case "processing":
                return fs;
            case "document_front":
            case "document_back":
            case "selfie":
                return ps;
            default:
                throw new Error("Invalid step")
            }
        }(e);
        oo(t, n({
            step: e
        }))
    }
    function xs(e) {
        let {key: t, state: i} = e;
        const n = i.rootElementId
          , r = document.getElementById(n);
        "step" === t && "complete" !== i.step && "recapture" !== i.step && _s(i.step, r),
        r && "processing" === i.step && (r.style.visibility = "hidden")
    }
    function vs() {
        const e = io(da(ua));
        if (!io)
            throw console.log("Error restarting session, stored session data is invalid or missing"),
            new Error("Error restarting session, stored session data is invalid or missing");
        const t = e.sessionId
          , i = e.userToken;
        return Ea.dispatch("setSessionId", t),
        Ea.dispatch("setUserToken", i),
        {
            sessionId: t,
            userToken: i
        }
    }
    async function bs(e) {
        let {status: t, sessionId: i, userToken: n, missingImages: r, rootElementId: a, language: o} = e;
        Ea.dispatch("setStatus", t),
        Ea.dispatch("setSessionId", i),
        Ea.dispatch("setUserToken", n),
        Ea.dispatch("setMissingImages", r),
        Ea.dispatch("setRootElementId", a),
        Ea.dispatch("setLanguage", o),
        function(e, t) {
            pa({
                type: "session-id-acquired",
                step: e,
                sessionId: t
            })
        }("init", Ea.state.sessionId),
        async function(e, t) {
            let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "en";
            lo.overrideLanguage(co[i] || co.en);
            let n = document.getElementById(t);
            if (!n) {
                n = ao({
                    tagName: "div",
                    style: {
                        background: "#fff",
                        position: "absolute",
                        top: "0",
                        left: "0",
                        zIndex: "1",
                        width: "100%",
                        height: "100%",
                        font: "inherit"
                    },
                    id: t,
                    testid: "root"
                });
                const e = document.createElement("style");
                e.innerHTML = "\n      @media only screen and (max-height: 576px) {\n        #".concat(t, " #trigger-section {\n          margin: 0 !important;\n        }\n        #").concat(t, " #page-header {\n          height: 5% !important;\n        }\n      }\n    "),
                oo(document.head, e),
                oo(document.body, n)
            }
        }(Ea.state.sessionId, Ea.state.rootElementId, Ea.state.language),
        function() {
            try {
                sa.events.off(ca, xs)
            } catch (e) {}
            sa.events.on(ca, xs)
        }(),
        function(e, t, i) {
            const n = document.getElementById(i);
            n.style.visibility = "visible",
            _s(e.shift(), n)
        }(Ea.state.missingImages, Ea.state.sessionId, Ea.state.rootElementId)
    }
    async function ys(e) {
        if (Ea.state.sessionId)
            return void ma(Ea.state.step, "trying-to-initialize-active-session");
        let t, i;
        if (e) {
            const n = await async function(e) {
                let t, i;
                try {
                    const n = await ro(e, Ea.state.consentVersion, Ea.state.clientId);
                    return t = n.sessionId,
                    i = n.userToken,
                    Ea.dispatch("setSessionId", t),
                    Ea.dispatch("setUserToken", i),
                    {
                        sessionId: t,
                        userToken: i
                    }
                } catch (e) {
                    throw console.log("Error starting session"),
                    console.error(e),
                    e
                }
            }(e);
            t = n.sessionId,
            i = n.userToken
        } else {
            const e = vs();
            t = e.sessionId,
            i = e.userToken
        }
        if (!t)
            return void ma(Ea.state.step, "other");
        const {missing_images: n, status: r} = await to(t, i, Ea.state.clientId);
        return await bs({
            status: r,
            sessionId: t,
            userToken: i,
            missingImages: n,
            rootElementId: Ea.state.rootElementId,
            language: Ea.state.language
        }),
        !0
    }
    async function ws() {
        try {
            return await async function() {
                if ("recapture" === Ea.state.verificationStatus || "pending" === Ea.state.verificationStatus) {
                    const {sessionId: e, userToken: t} = vs()
                      , {missing_images: i, status: n} = await to(e, t, Ea.state.clientId);
                    return await bs({
                        status: n,
                        sessionId: e,
                        userToken: t,
                        missingImages: i,
                        rootElementId: Ea.state.rootElementId,
                        language: Ea.state.language
                    }),
                    !0
                }
                ma(Ea.state.step, "trying-to-initialize-active-session")
            }()
        } catch (e) {
            throw console.log("Error restarting session"),
            console.error(e),
            e
        }
    }
    var As = Object.freeze({
        __proto__: null,
        recapture: ws,
        restart: async function() {
            return ws()
        },
        start: async function(e) {
            try {
                return await ys(e)
            } catch (e) {
                throw console.log("Error starting session"),
                console.error(e),
                e
            }
        },
        version: ()=>Ia
    });
    class ks {
        static arrayBufferToBase64(e) {
            return btoa(String.fromCharCode(...new Uint8Array(e)))
        }
        static base64ToArrayBuffer(e) {
            return Uint8Array.from(atob(e), (e=>e.charCodeAt(0)))
        }
        static stringToBase64(e) {
            return btoa(e)
        }
        static jsonToBase64(e) {
            const t = JSON.stringify(e);
            return btoa(t)
        }
        static base64ToJson(e) {
            const t = atob(e);
            return JSON.parse(t)
        }
    }
    const Es = {
        log: console.log,
        error: console.error
    };
    var Cs, Ds;
    !function(e) {
        e.NotInitialized = "not_initialized",
        e.AuthenticationFailed = "authentication_failed",
        e.AuthenticationAbortedTimeout = "authentication_aborted_timeout",
        e.AuthenticationCanceled = "webauthn_authentication_canceled",
        e.RegistrationFailed = "registration_failed",
        e.RegistrationAbortedTimeout = "registration_aborted_timeout",
        e.RegistrationCanceled = "webauthn_registration_canceled",
        e.AutofillAuthenticationAborted = "autofill_authentication_aborted",
        e.AuthenticationProcessAlreadyActive = "authentication_process_already_active",
        e.InvalidApprovalData = "invalid_approval_data",
        e.FailedToInitCrossDeviceSession = "cross_device_init_failed",
        e.FailedToGetCrossDeviceStatus = "cross_device_status_failed",
        e.Unknown = "unknown"
    }(Cs || (Cs = {}));
    class Ss extends Error {
        constructor(e, t) {
            super(e),
            this.errorCode = Cs.NotInitialized,
            this.data = t
        }
    }
    class Is extends Ss {
        constructor(e, t) {
            super(null != e ? e : "WebAuthnSdk is not initialized", t),
            this.errorCode = Cs.NotInitialized
        }
    }
    class Ts extends Ss {
        constructor(e, t) {
            super(null != e ? e : "Authentication failed with an error", t),
            this.errorCode = Cs.AuthenticationFailed
        }
    }
    class Ms extends Ss {
        constructor(e, t) {
            super(null != e ? e : "Authentication was canceled by the user or got timeout", t),
            this.errorCode = Cs.AuthenticationCanceled
        }
    }
    class zs extends Ss {
        constructor(e, t) {
            super(null != e ? e : "Registration failed with an error", t),
            this.errorCode = Cs.RegistrationFailed
        }
    }
    class Fs extends Ss {
        constructor(e, t) {
            super(null != e ? e : "Registration was canceled by the user or got timeout", t),
            this.errorCode = Cs.RegistrationCanceled
        }
    }
    class Bs extends Ss {
        constructor(e) {
            super(null != e ? e : "Autofill flow was aborted"),
            this.errorCode = Cs.AutofillAuthenticationAborted
        }
    }
    class Rs extends Ss {
        constructor(e) {
            super(null != e ? e : "Operation was aborted by timeout"),
            this.errorCode = Cs.AutofillAuthenticationAborted
        }
    }
    class Os extends Ss {
        constructor(e, t) {
            super(null != e ? e : "Authentication process is already active", t),
            this.errorCode = Cs.AuthenticationProcessAlreadyActive
        }
    }
    class Ps extends Ss {
        constructor(e, t) {
            super(null != e ? e : "Invalid approval data", t),
            this.errorCode = Cs.InvalidApprovalData
        }
    }
    class Ns extends Ss {
        constructor(e, t) {
            super(null != e ? e : "Failed to init cross device authentication", t),
            this.errorCode = Cs.FailedToInitCrossDeviceSession
        }
    }
    class Ls extends Ss {
        constructor(e, t) {
            super(null != e ? e : "Failed to get cross device status", t),
            this.errorCode = Cs.FailedToGetCrossDeviceStatus
        }
    }
    function js(e) {
        return e.errorCode && Object.values(Cs).includes(e.errorCode)
    }
    !function(e) {
        e[e.persistent = 0] = "persistent",
        e[e.session = 1] = "session"
    }(Ds || (Ds = {}));
    class Us {
        static get(e) {
            return Us.getStorageMedium(Us.allowedKeys[e]).getItem(Us.getStorageKey(e)) || void 0
        }
        static set(e, t) {
            return Us.getStorageMedium(Us.allowedKeys[e]).setItem(Us.getStorageKey(e), t)
        }
        static remove(e) {
            Us.getStorageMedium(Us.allowedKeys[e]).removeItem(Us.getStorageKey(e))
        }
        static clear(e) {
            for (const [t,i] of Object.entries(Us.allowedKeys)) {
                const n = t;
                e && this.configurationKeys.includes(n) || Us.getStorageMedium(i).removeItem(Us.getStorageKey(n))
            }
        }
        static getStorageKey(e) {
            return "WebAuthnSdk:".concat(e)
        }
        static getStorageMedium(e) {
            return e === Ds.session ? sessionStorage : localStorage
        }
    }
    Us.allowedKeys = {
        clientId: Ds.session
    },
    Us.configurationKeys = ["clientId"];
    class qs {
        static dnsPrefetch(e) {
            const t = document.createElement("link");
            t.rel = "dns-prefetch",
            t.href = e,
            document.head.appendChild(t)
        }
        static preconnect(e, t) {
            const i = document.createElement("link");
            i.rel = "preconnect",
            i.href = e,
            t && (i.crossOrigin = "anonymous"),
            document.head.appendChild(i)
        }
        static warmupConnection(e) {
            this.dnsPrefetch(e),
            this.preconnect(e, !1),
            this.preconnect(e, !0)
        }
        static init(e, t) {
            var i, n;
            try {
                this._serverPath = new URL(t.serverPath),
                this.newApiDomains.includes(null === (i = this._serverPath) || void 0 === i ? void 0 : i.hostname) && this.warmupConnection(this._serverPath.origin),
                this._apiPaths = null !== (n = t.webauthnApiPaths) && void 0 !== n ? n : this.getDefaultPaths(),
                this._clientId = e,
                Us.set("clientId", e)
            } catch (e) {
                throw new Is("Invalid options.serverPath",{
                    error: e
                })
            }
        }
        static getDefaultPaths() {
            var e;
            const t = this.newApiDomains.includes(null === (e = this._serverPath) || void 0 === e ? void 0 : e.hostname) ? "/cis" : "";
            return {
                startAuthentication: "".concat(t, "/v1/auth/webauthn/authenticate/start"),
                startRegistration: "".concat(t, "/v1/auth/webauthn/register/start"),
                initCrossDeviceAuthentication: "".concat(t, "/v1/auth/webauthn/cross-device/authenticate/init"),
                startCrossDeviceAuthentication: "".concat(t, "/v1/auth/webauthn/cross-device/authenticate/start"),
                startCrossDeviceRegistration: "".concat(t, "/v1/auth/webauthn/cross-device/register/start"),
                getCrossDeviceTicketStatus: "".concat(t, "/v1/auth/webauthn/cross-device/status"),
                attachDeviceToCrossDeviceSession: "".concat(t, "/v1/auth/webauthn/cross-device/attach-device")
            }
        }
        static getApiPaths() {
            return this._apiPaths
        }
        static async sendRequest(e, t, i) {
            Es.log("[WebAuthn SDK] Calling ".concat(t.method, " ").concat(e, "..."));
            const n = new URL(this._serverPath);
            return n.pathname = e,
            i && (n.search = i),
            fetch(n.toString(), t)
        }
        static async startRegistration(e) {
            const t = await this.sendRequest(this._apiPaths.startRegistration, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(i(i({
                    client_id: this.getValidatedClientId(),
                    username: e.username,
                    display_name: e.displayName
                }, e.timeout && {
                    timeout: e.timeout
                }), e.limitSingleCredentialToDevice && {
                    limit_single_credential_to_device: e.limitSingleCredentialToDevice
                }))
            });
            if (!(null == t ? void 0 : t.ok))
                throw new Ts("Failed to start registration",null == t ? void 0 : t.body);
            return await t.json()
        }
        static async startAuthentication(e) {
            const t = await this.sendRequest(this._apiPaths.startAuthentication, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(i(i(i({
                    client_id: this.getValidatedClientId()
                }, e.username && {
                    username: e.username
                }), e.approvalData && {
                    approval_data: e.approvalData
                }), e.timeout && {
                    timeout: e.timeout
                }))
            });
            if (!(null == t ? void 0 : t.ok))
                throw new Ts("Failed to start authentication",null == t ? void 0 : t.body);
            return await t.json()
        }
        static async initCrossDeviceAuthentication(e) {
            const t = await this.sendRequest(this._apiPaths.initCrossDeviceAuthentication, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(i(i({
                    client_id: this.getValidatedClientId()
                }, e.username && {
                    username: e.username
                }), e.approvalData && {
                    approval_data: e.approvalData
                }))
            });
            if (!(null == t ? void 0 : t.ok))
                throw new Ns(void 0,null == t ? void 0 : t.body);
            return await t.json()
        }
        static async getCrossDeviceTicketStatus(e) {
            const t = await this.sendRequest(this._apiPaths.getCrossDeviceTicketStatus, {
                method: "GET"
            }, "cross_device_ticket_id=".concat(e.ticketId));
            if (!(null == t ? void 0 : t.ok))
                throw new Ls(void 0,null == t ? void 0 : t.body);
            return await t.json()
        }
        static async startCrossDeviceAuthentication(e) {
            const t = await this.sendRequest(this._apiPaths.startCrossDeviceAuthentication, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    cross_device_ticket_id: e.ticketId
                })
            });
            if (!(null == t ? void 0 : t.ok))
                throw new Ts("Failed to start cross device authentication",null == t ? void 0 : t.body);
            return await t.json()
        }
        static async startCrossDeviceRegistration(e) {
            const t = await this.sendRequest(this._apiPaths.startCrossDeviceRegistration, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    cross_device_ticket_id: e.ticketId
                })
            });
            if (!(null == t ? void 0 : t.ok))
                throw new zs("Failed to start cross device registration",null == t ? void 0 : t.body);
            return await t.json()
        }
        static async attachDeviceToCrossDeviceSession(e) {
            const t = await this.sendRequest(this._apiPaths.attachDeviceToCrossDeviceSession, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    cross_device_ticket_id: e.ticketId
                })
            });
            if (!(null == t ? void 0 : t.ok))
                throw new zs("Failed to attach device to cross device session",null == t ? void 0 : t.body);
            return await t.json()
        }
        static getValidatedClientId() {
            var e;
            const t = null !== (e = this._clientId) && void 0 !== e ? e : Us.get("clientId");
            if (!t)
                throw new Is("Missing clientId");
            return t
        }
    }
    var Ks, Hs, Vs, Gs;
    qs.newApiDomains = ["api.idsec-dev.com", "api.idsec-stg.com", "api.transmitsecurity.io", "api.eu.transmitsecurity.io", "api.ca.transmitsecurity.io", "api.au.transmitsecurity.io", "api.sbx.transmitsecurity.io"],
    function(e) {
        e.InputAutofill = "input-autofill",
        e.Modal = "modal"
    }(Ks || (Ks = {})),
    function(e) {
        e.Pending = "pending",
        e.Scanned = "scanned",
        e.Success = "success",
        e.Error = "error",
        e.Timeout = "timeout",
        e.Aborted = "aborted"
    }(Hs || (Hs = {})),
    function(e) {
        e.toAuthenticationError = e=>js(e) ? e : "NotAllowedError" === e.name ? new Ms : "OperationError" === e.name ? new Os(e.message) : "SecurityError" === e.name ? new Ts(e.message) : e === Cs.AuthenticationAbortedTimeout ? new Rs : "AbortError" === e.name || e === Cs.AutofillAuthenticationAborted ? new Bs : new Ts("Something went wrong during authentication",{
            error: e
        }),
        e.toRegistrationError = e=>js(e) ? e : "NotAllowedError" === e.name ? new Fs : "SecurityError" === e.name ? new zs(e.message) : e === Cs.RegistrationAbortedTimeout ? new Rs : new zs("Something went wrong during registration",{
            error: e
        })
    }(Vs || (Vs = {})),
    function(e) {
        e.processCredentialRequestOptions = e=>i(i({}, e), {}, {
            challenge: ks.base64ToArrayBuffer(e.challenge),
            allowCredentials: e.allowCredentials.map((e=>i(i({}, e), {}, {
                id: ks.base64ToArrayBuffer(e.id)
            })))
        }),
        e.processCredentialCreationOptions = (e,t)=>{
            var n;
            const r = JSON.parse(JSON.stringify(e));
            return r.challenge = ks.base64ToArrayBuffer(e.challenge),
            r.user.id = ks.base64ToArrayBuffer(e.user.id),
            (null == t ? void 0 : t.limitSingleCredentialToDevice) && (r.excludeCredentials = null === (n = e.excludeCredentials) || void 0 === n ? void 0 : n.map((e=>i(i({}, e), {}, {
                id: ks.base64ToArrayBuffer(e.id)
            })))),
            (null == t ? void 0 : t.registerAsDiscoverable) ? (r.authenticatorSelection.residentKey = "preferred",
            r.authenticatorSelection.requireResidentKey = !0) : (r.authenticatorSelection.residentKey = "discouraged",
            r.authenticatorSelection.requireResidentKey = !1),
            r.authenticatorSelection.authenticatorAttachment = (null == t ? void 0 : t.allowCrossPlatformAuthenticators) ? void 0 : "platform",
            r
        }
        ,
        e.encodeAuthenticationResult = e=>{
            const {authenticatorAttachment: t} = e
              , i = e.response;
            return {
                id: e.id,
                rawId: ks.arrayBufferToBase64(e.rawId),
                response: {
                    authenticatorData: ks.arrayBufferToBase64(i.authenticatorData),
                    clientDataJSON: ks.arrayBufferToBase64(i.clientDataJSON),
                    signature: ks.arrayBufferToBase64(i.signature),
                    userHandle: ks.arrayBufferToBase64(i.userHandle)
                },
                authenticatorAttachment: t,
                type: e.type
            }
        }
        ,
        e.encodeRegistrationResult = e=>{
            const {authenticatorAttachment: t} = e
              , i = e.response;
            return {
                id: e.id,
                rawId: ks.arrayBufferToBase64(e.rawId),
                response: {
                    attestationObject: ks.arrayBufferToBase64(i.attestationObject),
                    clientDataJSON: ks.arrayBufferToBase64(i.clientDataJSON)
                },
                authenticatorAttachment: t,
                type: e.type
            }
        }
    }(Gs || (Gs = {}));
    class Js {
        async modal(e) {
            try {
                const t = await this.performAuthentication(i(i({}, e), {}, {
                    mediationType: Ks.Modal
                }));
                return ks.jsonToBase64(t)
            } catch (e) {
                throw Vs.toAuthenticationError(e)
            }
        }
        activateAutofill(e, t) {
            const {onSuccess: i, onError: n, onReady: r} = e;
            this.performAuthentication({
                username: t,
                mediationType: Ks.InputAutofill,
                onReady: r
            }).then((e=>{
                i(ks.jsonToBase64(e))
            }
            )).catch((e=>{
                const t = Vs.toAuthenticationError(e);
                if (!n)
                    throw t;
                n(t)
            }
            ))
        }
        abortAutofill() {
            this.abortController && this.abortController.abort(Cs.AutofillAuthenticationAborted)
        }
        abortAuthentication() {
            this.abortController && this.abortController.abort(Cs.AuthenticationAbortedTimeout)
        }
        async performAuthentication(e) {
            var t, i;
            const n = "crossDeviceTicketId"in e ? await qs.startCrossDeviceAuthentication({
                ticketId: e.crossDeviceTicketId
            }) : await qs.startAuthentication({
                username: e.username,
                timeout: null === (t = e.options) || void 0 === t ? void 0 : t.timeout
            })
              , r = n.credential_request_options
              , a = Gs.processCredentialRequestOptions(r)
              , o = this.getMediatedCredentialRequest(a, e.mediationType);
            e.mediationType === Ks.InputAutofill && (null === (i = e.onReady) || void 0 === i || i.call(e));
            const s = await navigator.credentials.get(o).catch((e=>{
                throw Vs.toAuthenticationError(e)
            }
            ));
            return {
                webauthnSessionId: n.webauthn_session_id,
                publicKeyCredential: Gs.encodeAuthenticationResult(s),
                userAgent: navigator.userAgent
            }
        }
        getMediatedCredentialRequest(e, t) {
            const i = {
                publicKey: e
            };
            return this.abortController = new AbortController,
            i.signal = this.abortController && this.abortController.signal,
            t === Ks.InputAutofill ? i.mediation = "conditional" : e.timeout && setTimeout((()=>{
                this.abortAuthentication()
            }
            ), e.timeout),
            i
        }
    }
    class Ws {
        constructor(e, t) {
            this.handler = e,
            this.intervalInMs = t
        }
        begin() {
            var e;
            this.intervalId = window.setInterval((e = this.handler,
            async function() {
                e.isRunning || (e.isRunning = !0,
                await e(...arguments),
                e.isRunning = !1)
            }
            ), this.intervalInMs)
        }
        stop() {
            clearInterval(this.intervalId)
        }
    }
    const Zs = 10
      , Qs = /^[A-Za-z0-9\-_.]*$/;
    function $s(e) {
        if (e && (!function(e) {
            return Object.keys(e).length <= Zs
        }(e) || !function(e) {
            const t = e=>"string" == typeof e
              , i = e=>Qs.test(e);
            return Object.keys(e).every((n=>t(n) && t(e[n]) && i(n) && i(e[n])))
        }(e)))
            throw Es.error("Failed validating approval data"),
            new Ps("Provided approval data should have ".concat(Zs, " properties max. Also, it should contain only \n      alphanumeric characters, numbers, and the special characters: '-', '_', '.'"))
    }
    class Ys {
        constructor(e, t, n) {
            this.authenticationHandler = e,
            this.registrationHandler = t,
            this.approvalHandler = n,
            this.init = {
                registration: async e=>(this.ticketStatus = Hs.Pending,
                this.pollCrossDeviceSession(e.crossDeviceTicketId, e.handlers)),
                authentication: async e=>{
                    const {username: t} = e
                      , n = (await qs.initCrossDeviceAuthentication(i({}, t && {
                        username: t
                    }))).cross_device_ticket_id;
                    return this.ticketStatus = Hs.Pending,
                    this.pollCrossDeviceSession(n, e.handlers)
                }
                ,
                approval: async e=>{
                    const {username: t, approvalData: i} = e;
                    $s(i);
                    const n = (await qs.initCrossDeviceAuthentication({
                        username: t,
                        approvalData: i
                    })).cross_device_ticket_id;
                    return this.ticketStatus = Hs.Pending,
                    this.pollCrossDeviceSession(n, e.handlers)
                }
            },
            this.authenticate = {
                modal: async e=>this.authenticationHandler.modal({
                    crossDeviceTicketId: e
                })
            },
            this.approve = {
                modal: async e=>this.approvalHandler.modal({
                    crossDeviceTicketId: e
                })
            }
        }
        async register(e, t) {
            return this.registrationHandler.register({
                crossDeviceTicketId: e
            }, t)
        }
        async attachDevice(e) {
            const t = await qs.attachDeviceToCrossDeviceSession({
                ticketId: e
            });
            return i({
                status: t.status,
                startedAt: t.started_at
            }, t.approval_data && {
                approvalData: t.approval_data
            })
        }
        async pollCrossDeviceSession(e, t) {
            return this.poller = new Ws((async()=>{
                var i, n;
                const r = await qs.getCrossDeviceTicketStatus({
                    ticketId: e
                })
                  , a = r.status;
                if (a !== this.ticketStatus)
                    switch (this.ticketStatus = a,
                    a) {
                    case Hs.Scanned:
                        await t.onDeviceAttach();
                        break;
                    case Hs.Error:
                    case Hs.Timeout:
                    case Hs.Aborted:
                        await t.onFailure(r),
                        null === (i = this.poller) || void 0 === i || i.stop();
                        break;
                    case Hs.Success:
                        if ("onCredentialRegister"in t)
                            await t.onCredentialRegister();
                        else {
                            if (!r.session_id)
                                throw new Ls("Cross device session is complete without returning session_id",r);
                            await t.onCredentialAuthenticate(r.session_id)
                        }
                        null === (n = this.poller) || void 0 === n || n.stop()
                    }
            }
            ),1e3),
            this.poller.begin(),
            setTimeout((()=>{
                var e;
                null === (e = this.poller) || void 0 === e || e.stop(),
                t.onFailure({
                    status: Hs.Timeout
                })
            }
            ), 3e5),
            {
                crossDeviceTicketId: e,
                stop: ()=>{
                    var e;
                    null === (e = this.poller) || void 0 === e || e.stop()
                }
            }
        }
    }
    class Xs {
        async register(e, t) {
            this.abortController = new AbortController;
            const n = i({
                allowCrossPlatformAuthenticators: !("crossDeviceTicketId"in e),
                registerAsDiscoverable: !0
            }, t);
            try {
                const i = "crossDeviceTicketId"in e ? await qs.startCrossDeviceRegistration({
                    ticketId: e.crossDeviceTicketId
                }) : await qs.startRegistration({
                    username: e.username,
                    displayName: (null == t ? void 0 : t.displayName) || e.username,
                    timeout: null == t ? void 0 : t.timeout,
                    limitSingleCredentialToDevice: null == t ? void 0 : t.limitSingleCredentialToDevice
                })
                  , r = Gs.processCredentialCreationOptions(i.credential_creation_options, n);
                setTimeout((()=>{
                    this.abortRegistration()
                }
                ), r.timeout);
                const a = await this.registerCredential(r)
                  , o = {
                    webauthnSessionId: i.webauthn_session_id,
                    publicKeyCredential: a,
                    userAgent: navigator.userAgent
                };
                return ks.jsonToBase64(o)
            } catch (e) {
                throw Vs.toRegistrationError(e)
            }
        }
        abortRegistration() {
            this.abortController && this.abortController.abort(Cs.RegistrationAbortedTimeout)
        }
        async registerCredential(e) {
            const t = await navigator.credentials.create({
                publicKey: e,
                signal: this.abortController && this.abortController.signal
            }).catch((e=>{
                throw Vs.toRegistrationError(e)
            }
            ));
            return Gs.encodeRegistrationResult(t)
        }
    }
    class el {
        async modal(e) {
            try {
                const t = await this.performApproval(e);
                return ks.jsonToBase64(t)
            } catch (e) {
                throw Vs.toAuthenticationError(e)
            }
        }
        async performApproval(e) {
            "approvalData"in e && $s(e.approvalData);
            const t = "crossDeviceTicketId"in e ? await qs.startCrossDeviceAuthentication({
                ticketId: e.crossDeviceTicketId
            }) : await qs.startAuthentication({
                username: e.username,
                approvalData: e.approvalData
            })
              , i = t.credential_request_options
              , n = Gs.processCredentialRequestOptions(i)
              , r = await navigator.credentials.get({
                publicKey: n
            }).catch((e=>{
                throw Vs.toAuthenticationError(e)
            }
            ));
            return {
                webauthnSessionId: t.webauthn_session_id,
                publicKeyCredential: Gs.encodeAuthenticationResult(r),
                userAgent: navigator.userAgent
            }
        }
    }
    class tl {
        constructor() {
            this._initialized = !1,
            this._authenticationHandler = new Js,
            this._registrationHandler = new Xs,
            this._approvalHandler = new el,
            this._crossDeviceHandler = new Ys(this._authenticationHandler,this._registrationHandler,this._approvalHandler),
            this.authenticate = {
                modal: async(e,t)=>(this.initCheck(),
                this._authenticationHandler.modal({
                    username: e,
                    options: t
                })),
                autofill: {
                    activate: (e,t)=>(this.initCheck(),
                    this._authenticationHandler.activateAutofill(e, t)),
                    abort: ()=>this._authenticationHandler.abortAutofill()
                }
            },
            this.approve = {
                modal: async(e,t)=>(this.initCheck(),
                this._approvalHandler.modal({
                    username: e,
                    approvalData: t
                }))
            },
            this.register = async(e,t)=>(this.initCheck(),
            this._registrationHandler.register({
                username: e
            }, t)),
            this.crossDevice = {
                init: {
                    registration: async e=>(this.initCheck(),
                    this._crossDeviceHandler.init.registration(e)),
                    authentication: async e=>(this.initCheck(),
                    this._crossDeviceHandler.init.authentication(e)),
                    approval: async e=>(this.initCheck(),
                    this._crossDeviceHandler.init.approval(e))
                },
                authenticate: {
                    modal: async e=>(this.initCheck(),
                    this._crossDeviceHandler.authenticate.modal(e))
                },
                approve: {
                    modal: async e=>(this.initCheck(),
                    this._crossDeviceHandler.approve.modal(e))
                },
                register: async(e,t)=>(this.initCheck(),
                this._crossDeviceHandler.register(e, t)),
                attachDevice: async e=>(this.initCheck(),
                this._crossDeviceHandler.attachDevice(e))
            },
            this.isPlatformAuthenticatorSupported = async()=>{
                var e;
                try {
                    return await (null === (e = tl.StaticPublicKeyCredential) || void 0 === e ? void 0 : e.isUserVerifyingPlatformAuthenticatorAvailable())
                } catch (e) {
                    return !1
                }
            }
            ,
            this.isAutofillSupported = async()=>{
                var e, t;
                return !(!(null === (e = tl.StaticPublicKeyCredential) || void 0 === e ? void 0 : e.isConditionalMediationAvailable) || !await (null === (t = tl.StaticPublicKeyCredential) || void 0 === t ? void 0 : t.isConditionalMediationAvailable()))
            }
        }
        async init(e, t) {
            try {
                if (!e)
                    throw new Is("Invalid clientId",{
                        clientId: e
                    });
                if (t.webauthnApiPaths) {
                    const e = qs.getDefaultPaths();
                    if (function(e, t) {
                        const i = new Set(e)
                          , n = new Set(t);
                        return [...e.filter((e=>!n.has(e))), ...t.filter((e=>!i.has(e)))]
                    }(Object.keys(t.webauthnApiPaths), Object.keys(e)).length)
                        throw new Is("Invalid custom paths",{
                            customApiPaths: t.webauthnApiPaths
                        })
                }
                qs.init(e, t),
                this._initialized = !0
            } catch (e) {
                throw js(e) ? e : new Is("Failed to initialize SDK")
            }
        }
        getDefaultPaths() {
            return qs.getDefaultPaths()
        }
        getApiPaths() {
            return qs.getApiPaths()
        }
        initCheck() {
            if (!this._initialized)
                throw new Is
        }
    }
    tl.StaticPublicKeyCredential = window.PublicKeyCredential;
    const il = new Z("webauthn")
      , nl = new tl;
    il.events.on(il.events.MODULE_INITIALIZED, (()=>{
        var e;
        const t = il.moduleMetadata.getInitConfig();
        if (!(null === (e = null == t ? void 0 : t.webauthn) || void 0 === e ? void 0 : e.serverPath))
            return;
        const {clientId: n, webauthn: r} = t;
        nl.init(n, i({}, r))
    }
    ));
    const rl = {
        modal: async e=>(nl.initCheck(),
        nl.authenticate.modal(e)),
        autofill: {
            activate: (e,t)=>{
                nl.initCheck(),
                nl.authenticate.autofill.activate(e, t)
            }
            ,
            abort: ()=>{
                nl.initCheck(),
                nl.authenticate.autofill.abort()
            }
        }
    }
      , al = {
        modal: async(e,t)=>(nl.initCheck(),
        nl.approve.modal(e, t))
    };
    const {crossDevice: ol} = nl
      , {isPlatformAuthenticatorSupported: sl} = nl
      , {isAutofillSupported: ll} = nl
      , {getDefaultPaths: cl} = nl;
    window.localWebAuthnSDK = nl;
    var ul = Object.freeze({
        __proto__: null,
        get WebauthnCrossDeviceStatus() {
            return Hs
        },
        approve: al,
        authenticate: rl,
        crossDevice: ol,
        getDefaultPaths: cl,
        isAutofillSupported: ll,
        isPlatformAuthenticatorSupported: sl,
        register: async function(e, t) {
            return nl.initCheck(),
            nl.register(e, t)
        }
    });
    const dl = new Z("ido");
    var hl, gl, pl, fl, ml;
    !function(e) {
        e[e.Debug = 0] = "Debug",
        e[e.Info = 1] = "Info",
        e[e.Warning = 2] = "Warning",
        e[e.Error = 3] = "Error"
    }(hl || (hl = {})),
    function(e) {
        e.InvalidInitOptions = "invalid_initialization_options",
        e.NotInitialized = "not_initialized",
        e.NoActiveJourney = "no_active_journey",
        e.NetworkError = "network_error",
        e.ClientResponseNotValid = "client_response_not_valid",
        e.ServerError = "server_error",
        e.InvalidState = "invalid_state",
        e.InvalidCredentials = "invalid_credentials",
        e.ExpiredOTPPasscode = "expired_otp_passcode",
        e.ExpiredValidationPasscode = "expired_validation_passcode",
        e.MaxResendReached = "expired_otp_passcode"
    }(gl || (gl = {})),
    function(e) {
        e.ClientInput = "client_input",
        e.Cancel = "cancel",
        e.Fail = "failure",
        e.Custom = "custom",
        e.Resend = "resend"
    }(pl || (pl = {})),
    function(e) {
        e.JourneySuccess = "journey_success",
        e.ClientInputRequired = "client_input_required",
        e.ClientInputUpdateRequired = "client_input_update_required",
        e.JourneyRejection = "journey_rejection"
    }(fl || (fl = {})),
    function(e) {
        e.Rejection = "action:rejection",
        e.Success = "action:success",
        e.Information = "action:information",
        e.DebugBreak = "action:debug_break",
        e.WaitForAnotherDevice = "action:wait_for_another_device",
        e.CryptoBindingRegistration = "action:crypto_binding_registration",
        e.CryptoBindingValidation = "action:crypto_binding_validation",
        e.RegisterDeviceAction = "transmit_platform_device_registration",
        e.ValidateDeviceAction = "transmit_platform_device_validation",
        e.WebAuthnRegistration = "action:webauthn_registration",
        e.DrsTriggerAction = "action:drs_trigger_action",
        e.IdentityVerification = "action:id_verification",
        e.EmailOTPAuthentication = "transmit_platform_email_otp_authentication",
        e.SmsOTPAuthentication = "transmit_platform_sms_otp_authentication",
        e.EmailValidation = "transmit_platform_email_validation",
        e.SmsValidation = "transmit_platform_sms_validation",
        e.TotpRegistration = "transmit_platform_totp_registration",
        e.InvokeIDP = "invoke_idp"
    }(ml || (ml = {}));
    const _l = new class {
        constructor() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : hl.Info;
            this.logLevel = e
        }
        setLogLevel(e) {
            e < hl.Debug || e > hl.Error ? this.error("Invalid log level") : this.logLevel = e
        }
        debug(e) {
            this.logLevel <= hl.Debug && console.debug("[DEBUG] ".concat(e))
        }
        info(e) {
            this.logLevel <= hl.Info && console.info("[INFO] ".concat(e))
        }
        warning(e) {
            this.logLevel <= hl.Warning && console.warn("[WARNING] ".concat(e))
        }
        error(e) {
            this.logLevel <= hl.Error && console.error("[ERROR] ".concat(e))
        }
    }
      , xl = {
        [ml.CryptoBindingRegistration]: "input",
        [ml.CryptoBindingValidation]: "input",
        [ml.RegisterDeviceAction]: "data",
        [ml.ValidateDeviceAction]: "data"
    }
      , vl = "api/v2/"
      , bl = {
        path: "auth/sso"
    }
      , yl = {
        path: "auth/anonymous_invoke"
    }
      , wl = {
        path: "auth/assert"
    }
      , Al = {
        path: "auth/poll"
    }
      , kl = {
        path: "auth/create_debug_token"
    }
      , El = {
        headers: {
            mandatory: !0,
            dummy: [{
                type: "flow_id",
                flow_id: "337BFFE6BEE7D694B8FA41F42B00742CA537DC398F79369A3A60E04D0EB2E8E1"
            }]
        },
        data: {
            mandatory: !0,
            dummy: {
                collection_result: {
                    metadata: {
                        timestamp: (new Date).getTime()
                    },
                    content: {}
                },
                policy_request_id: "LoginWithMenu"
            },
            large_dummy: {
                metadata: {
                    timestamp: 1679422144431
                },
                content: {
                    device_details: {
                        logged_users: 1,
                        persistence_mode: "persistent",
                        device_id: "8951bd7b67a959e7b12b5018816f9ce4",
                        os_type: "Mac OS",
                        os_version: "10.15.7",
                        device_model: "Chrome 111.0.0.0"
                    },
                    location: {
                        enabled: !1
                    },
                    capabilities: {
                        fido2_user_verifying_platform_authenticator_available: !0,
                        audio_acquisition_supported: !0,
                        finger_print_supported: !1,
                        image_acquisition_supported: !1,
                        persistent_keys_supported: !0,
                        face_id_key_bio_protection_supported: !1,
                        fido_client_present: !1,
                        fido2_client_present: !0,
                        dyadic_present: !1,
                        installed_plugins: []
                    },
                    collector_state: {
                        accounts: "disabled",
                        devicedetails: "active",
                        contacts: "disabled",
                        owner: "disabled",
                        software: "disabled",
                        location: "disabled",
                        locationcountry: "disabled",
                        bluetooth: "disabled",
                        externalsdkdetails: "active",
                        hwauthenticators: "active",
                        capabilities: "active",
                        fidoauthenticators: "disabled",
                        largedata: "active",
                        localenrollments: "active",
                        devicefingerprint: "active",
                        apppermissions: "disabled"
                    },
                    local_enrollments: {}
                },
                fp2: {
                    user_agent: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36",
                    webdriver: !0,
                    language: "en-US",
                    color_depth: 30,
                    device_memory: 8,
                    pixel_ratio: 2,
                    hardware_concurrency: 12,
                    screen_resolution: [1680, 1050],
                    available_screen_resolution: [1680, 1025],
                    timezone_offset: 240,
                    timezone: "America/New_York",
                    session_storage: !0,
                    local_storage: !0,
                    indexed_db: !0,
                    add_behavior: !1,
                    open_database: !0,
                    cpu_class: "not available",
                    platform: "MacIntel",
                    do_not_track: "not available",
                    plugins: [["PDF Viewer", "Portable Document Format", [["application/pdf", "pdf"], ["text/pdf", "pdf"]]], ["Chrome PDF Viewer", "Portable Document Format", [["application/pdf", "pdf"], ["text/pdf", "pdf"]]], ["Chromium PDF Viewer", "Portable Document Format", [["application/pdf", "pdf"], ["text/pdf", "pdf"]]], ["Microsoft Edge PDF Viewer", "Portable Document Format", [["application/pdf", "pdf"], ["text/pdf", "pdf"]]], ["WebKit built-in PDF", "Portable Document Format", [["application/pdf", "pdf"], ["text/pdf", "pdf"]]]],
                    canvas: ["canvas winding:yes", "canvas fp:data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAB9AAAADICAYAAACwGnoBAAAAAXNSR0IArs4c6QAAIABJREFUeF7s3XeYXVW9//H3Omdaeu+FGgiE9BDAgmIBQRRQ4eIP0JCQmdC8YgHrZRQLAooSSjIpRMpVCZciiIAiKhoIpEMoUtILKaS3KWf/nu8+e0/2nDkzc+bMmckMfNbz8Ejm7L3W2q8zwT8++/tdjlY+PLz+wAhgKHA0MBjoB/QEDq9j+6uAzcAGYDXwFvA6sMzh1of3eHjtgWHA8ZH/7Qa0q+Mfu3VfHf9sA14Flof/63B7q/fn5fY5cAefo5V/hdqeBCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQggTYh4FrbLj2844BPAh8FTg4C81xucyewBygAeuRy4uhcrwF/6sx7Tw3lwMKT6LDtNDr7T2Sxf26GvRjwAvBP4G84Z0tmNLxivIwufJ9d5Mpodb/v7zNiPY4EJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAE2rRAqwgUPbyTgC8AnwMsQG+TYz7wEPAYUGeaPQr4MPCh4BWBQTl7VFvSln4I52wrdQ4F6Dkz10QSkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkMD7SOCQBegenlV/XwpMCtqzt0nWrcDdwKygR3yjH+IU4LPBqwPWqD43w8J029IcnLMt1hgK0HODrFkkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIIH3l0D9AXppaR6lpZX+I0f/vQkGHt5w4EqgJJNprNf4GnYzgA7EcWxhPz0pyuTWjK7ZxgG6UehfW0mCchK0J6/Be18G7gCmN3ilPYER5jd4JacDnw/CdDvpPXXsPQDxOBQ2vL/IrdOAO3HOtuwPC9C3056uHDyiveHNte0rttCRXmW7c/PCSH1/F+r6LJt72ja5di8BCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkIAEJCCBNidQO1CcNPNo4lU/Ak7AeTvwXAc8twbnHUdl3jhmT9qVzVN6eFZf/W3g4kzvf43tXMW/6EIBf2Ud/+YcRvAgD3E653F4ptOkve6fbOBbvEARcZ7lc3ydefyW//AHPsWZ1N1XfRlwM3Bfg6sngEWA5dZ2lHsjOtPb+wHWzN7C9C8DO3fD3Bdg4Ttw3blwZO8GV09zwb3ALUyZftyR3pbfn83L/IY/ZDNPm7vnGYbyKa6BWGI40y5/JesHmDTzMPIqLwGOwnPjgd9QVlLmzze5bAKxxEA8Z9+Y/ZpcR1nJarK5J+sN6kYJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhKQgAQkIAEJSKApAjUD9MllZ+K8J/DcNLZ3/W/mXlBOaWmMDX2/h+duIBHry8zJ7zZmQQ+vF3B9UHXemFv5DE9QwvF+oD2L15nAMfyOt/3wvEcOqtBLeI632MEznM1G9tKP+3iCM9MG6JuAHwdV55k/hIXoM4PDzhsRoEcXOAGYAHxmG9w2tykBejjrHeNLrrvyZFa1ugB9PV1ZS1fGszJz4gyutGr7uYyluPD8IqZ+7UAGt6S/ZHLZTJx3P2Ulz/qBufPuJq+yH55rT2XeLGYUn+Z3aljfbwUwl7KSb5DNPVlvUDdKQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAJNETgYoF9+Zzeq4quAFfTfMJrSUkt/D47JZc/iuYnMnGzhYEbDw7sK+CnQOaMbUi7qzN0NVoRnM294z38zD6tyf5qz2EE5XZmTNkC/Hfi+FYJntZidkN7ICvR06/TfBX1+B788F07LqgK9eta8kmv4CBt4thVVoO8jnzP4b67mWc5nYVbSDd3kymhaC/eSaU+SiC1hRvF3KJ4+FHgN532RRGwjzvs35QXdmHPpdoqn3w+Mo6zkWLK5p6EH0ecSkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAISkECzCBwMFIunX+6fle25S5lRPKfWapfNOI5YYj0wFRjmH/+diC3Eeb8hlojjuespK3ma4um39NhUOOL5x88teKRy5cfWsofx9OYuXuUIOvFTTuQJVnMfb/lnmc/k1Fpnmr/Bdn7CYu7jTT7NQAbRgV9wEovYwu94iy9zNKczkASeP6+1Y99DJcfSlR8yhnbEeYxVzOYNJnIsv+YVzmAgP2AMv+Zl/swaulHA62ynH+15MhKg38h4/sMO/sVGPs3R/IfR/IUYYDXo9u7APvDPDv8Y0A74D/AOcDzwFrANOBGqW8yHAfoQ8IPh7UBfwDrap+a5Nu/rwA7ACqUtKG8PWFZrnfN/B+3PhQsLoO+L0KcSThqS/OfNjfDnRfCpkbBtF7z4Fpx0DCx8GzZuh48Ng9NtTTt9/hpgC0f564xlLOuYzT104ABv+d/Vx/xK8G104G7mMMDfc3JUEqOEi1nCIE7jDW7hQd6hJ5O5hE/xOt/lz2yiE9/jPJYxgE/yOpfzDwbzHj/lLJ7jaH++…brB0xZVAGAtqpyy+87fNf4HUyf1sNzSz83GXvYnYKXM6qTDBVhJ29tL7uzrJF+rcOC5Dy8Hq5efB1QGSkNdigBLnWXzB/zn10h7RWRj1hcaCpHOK7cB1fwKc4cvBQCWL6UDjnPuTG//1SRguT7Vqy8CqoAWMXRFBQBWRaE0X3bu9kH/avgtoVv6ndkDVJq9tRY7wErc8bOvknxFBt+/csByS787LgGqxK1PMj2AlaStg6TOvmLQv3JLv9f+FVAlbnnS6QGspO0VOXerbBaF/PoNfwNUiVttIj2AlbjNZ2+W9l2XgVXiNptJD2CZsZpEUUC/AgBLv4dkgAJmFABYZqwmURTQrwDA0u8hGaCAGQUAlhmrSRQF9CsAsPR7SAYoYEYBgGXGahJFAf0K/B9qEBa1B23aowAAAABJRU5ErkJggg==", "extensions:ANGLE_instanced_arrays;EXT_blend_minmax;EXT_color_buffer_half_float;EXT_disjoint_timer_query;EXT_float_blend;EXT_frag_depth;EXT_shader_texture_lod;EXT_texture_compression_rgtc;EXT_texture_filter_anisotropic;EXT_sRGB;KHR_parallel_shader_compile;OES_element_index_uint;OES_fbo_render_mipmap;OES_standard_derivatives;OES_texture_float;OES_texture_float_linear;OES_texture_half_float;OES_texture_half_float_linear;OES_vertex_array_object;WEBGL_color_buffer_float;WEBGL_compressed_texture_s3tc;WEBGL_compressed_texture_s3tc_srgb;WEBGL_debug_renderer_info;WEBGL_debug_shaders;WEBGL_depth_texture;WEBGL_draw_buffers;WEBGL_lose_context;WEBGL_multi_draw", "webgl aliased line width range:[1, 1]", "webgl aliased point size range:[1, 8191]", "webgl alpha bits:8", "webgl antialiasing:yes", "webgl blue bits:8", "webgl depth bits:24", "webgl green bits:8", "webgl max anisotropy:16", "webgl max combined texture image units:32", "webgl max cube map texture size:16384", "webgl max fragment uniform vectors:1024", "webgl max render buffer size:16384", "webgl max texture image units:16", "webgl max texture size:16384", "webgl max varying vectors:32", "webgl max vertex attribs:16", "webgl max vertex texture image units:16", "webgl max vertex uniform vectors:1024", "webgl max viewport dims:[16384, 16384]", "webgl red bits:8", "webgl renderer:WebKit WebGL", "webgl shading language version:WebGL GLSL ES 1.0 (OpenGL ES GLSL ES 1.0 Chromium)", "webgl stencil bits:0", "webgl vendor:WebKit", "webgl version:WebGL 1.0 (OpenGL ES 2.0 Chromium)", "webgl unmasked vendor:Google Inc. (ATI Technologies Inc.)", "webgl unmasked renderer:ANGLE (ATI Technologies Inc., AMD Radeon Pro 560X OpenGL Engine, OpenGL 4.1)", "webgl vertex shader high float precision:23", "webgl vertex shader high float precision rangeMin:127", "webgl vertex shader high float precision rangeMax:127", "webgl vertex shader medium float precision:23", "webgl vertex shader medium float precision rangeMin:127", "webgl vertex shader medium float precision rangeMax:127", "webgl vertex shader low float precision:23", "webgl vertex shader low float precision rangeMin:127", "webgl vertex shader low float precision rangeMax:127", "webgl fragment shader high float precision:23", "webgl fragment shader high float precision rangeMin:127", "webgl fragment shader high float precision rangeMax:127", "webgl fragment shader medium float precision:23", "webgl fragment shader medium float precision rangeMin:127", "webgl fragment shader medium float precision rangeMax:127", "webgl fragment shader low float precision:23", "webgl fragment shader low float precision rangeMin:127", "webgl fragment shader low float precision rangeMax:127", "webgl vertex shader high int precision:0", "webgl vertex shader high int precision rangeMin:31", "webgl vertex shader high int precision rangeMax:30", "webgl vertex shader medium int precision:0", "webgl vertex shader medium int precision rangeMin:31", "webgl vertex shader medium int precision rangeMax:30", "webgl vertex shader low int precision:0", "webgl vertex shader low int precision rangeMin:31", "webgl vertex shader low int precision rangeMax:30", "webgl fragment shader high int precision:0", "webgl fragment shader high int precision rangeMin:31", "webgl fragment shader high int precision rangeMax:30", "webgl fragment shader medium int precision:0", "webgl fragment shader medium int precision rangeMin:31", "webgl fragment shader medium int precision rangeMax:30", "webgl fragment shader low int precision:0", "webgl fragment shader low int precision rangeMin:31", "webgl fragment shader low int precision rangeMax:30"],
                    webgl_vendor_and_renderer: "Google Inc. (ATI Technologies Inc.)~ANGLE (ATI Technologies Inc., AMD Radeon Pro 560X OpenGL Engine, OpenGL 4.1)",
                    ad_block: !1,
                    has_lied_languages: !1,
                    has_lied_resolution: !1,
                    has_lied_os: !1,
                    has_lied_browser: !1,
                    touch_support: [0, !1, !1],
                    fonts: ["Andale Mono", "Arial", "Arial Black", "Arial Hebrew", "Arial Narrow", "Arial Rounded MT Bold", "Arial Unicode MS", "Comic Sans MS", "Courier", "Courier New", "Geneva", "Georgia", "Helvetica", "Helvetica Neue", "Impact", "LUCIDA GRANDE", "Microsoft Sans Serif", "Monaco", "Palatino", "Tahoma", "Times", "Times New Roman", "Trebuchet MS", "Verdana", "Wingdings", "Wingdings 2", "Wingdings 3"],
                    fonts_flash: "swf object not loaded",
                    audio: "124.04347657808103",
                    enumerate_devices: ["id=;gid=;audioinput;", "id=;gid=;videoinput;", "id=;gid=;audiooutput;"]
                }
            },
            policy_request_id: "LoginWithMenu",
            params: {}
        }
    }
      , Cl = [{
        "control_flow.0": ["assertion_id", "type"]
    }];
    class Dl extends Error {
        constructor(e, t) {
            _l.error("[ERROR] ".concat(e)),
            super(e),
            this.description = e,
            this.errorCode = t
        }
        static convertFromAssertionError(e) {
            switch (e) {
            case 28:
                return gl.ClientResponseNotValid;
            case 29:
            case 31:
                return gl.InvalidCredentials;
            case 30:
                return gl.ExpiredOTPPasscode;
            case 32:
                return gl.ExpiredValidationPasscode;
            case 33:
                return gl.MaxResendReached;
            default:
                return gl.ServerError
            }
        }
    }
    var Sl, Il, Tl, Ml, zl;
    !function(e) {
        e.JsonRejection = "Json Rejection",
        e.TextRejection = "Text Rejection",
        e.UpdateAction = "Update Action",
        e.NextAction = "Next Action",
        e.JourneyEnd = "Journey End"
    }(Sl || (Sl = {})),
    function(e) {
        e.Pending = "pending",
        e.Completed = "completed",
        e.Rejected = "rejected"
    }(Il || (Il = {})),
    function(e) {
        e.Form = "form",
        e.LoginForm = "login_form",
        e.Rejection = "rejection",
        e.Information = "information",
        e.DebugBreak = "debug_break",
        e.WaitForTicket = "wait_for_ticket",
        e.DrsTriggerAction = "transmit_acp",
        e.IdentityVerification = "kyc",
        e.WebAuthnRegistration = "transmit_platform_web_authn_registration"
    }(Tl || (Tl = {}));
    class Fl {
        constructor(e) {
            this.urlBaseString = e + "/" + vl
        }
        convertHttpResponseToRawServiceResponse(e) {
            const {status: t, statusText: i, body: n} = e
              , {error_code: r, error_message: a, headers: o, data: s} = n;
            return {
                status: t,
                statusText: i,
                error_code: r,
                error_message: a,
                headers: o,
                data: this.buildAggregatedData(s)
            }
        }
        buildAggregatedData(e) {
            switch (null == e ? void 0 : e.state) {
            case Il.Pending:
                Cl.forEach((t=>{
                    const [[n,r]] = Object.entries(t)
                      , a = ((e,t,i)=>{
                        if (!e || "object" != typeof e)
                            return i;
                        const n = Array.isArray(t) ? t : t.split(".");
                        let r = e;
                        for (let e = 0; e < n.length; e++)
                            if (r = r[n[e]],
                            void 0 === r)
                                return i;
                        return r
                    }
                    )(e, n);
                    if (a) {
                        const t = {};
                        r.forEach((e=>{
                            e in a && (t[e] = a[e])
                        }
                        )),
                        e = i(i({}, e), t)
                    }
                }
                ));
                break;
            case Il.Rejected:
                e.type = Tl.Rejection
            }
            return e
        }
        async sendRequest(e, t, n) {
            if (!(this.urlBaseString.toString().length > 7 && e))
                throw new Error("bad input");
            const r = new URL(this.urlBaseString);
            r.pathname += e,
            console.log("Got Full URL: ".concat(r.toString())),
            Object.keys(t).map((e=>r.searchParams.append(e, t[e])));
            const a = JSON.stringify(n);
            return console.log("Request body: ".concat(a)),
            fetch(r.toString(), {
                method: "POST",
                credentials: "include",
                headers: {
                    "Content-type": "application/json;charset=UTF-8"
                },
                body: a
            }).then((e=>e.json().then((t=>this.convertHttpResponseToRawServiceResponse(i(i({}, e), {}, {
                body: t
            })))).catch((e=>{
                throw new Dl("Error occurred while retrieving response from server",gl.NetworkError)
            }
            ))))
        }
    }
    !function(e) {
        e.Active = "Active",
        e.Success = "Journey Ended with Success",
        e.Rejected = "Journey Ended with Rejection",
        e.Aborted = "Journey aborted by client"
    }(Ml || (Ml = {})),
    function(e) {
        e.ClientSdk = "Client SDK Journey",
        e.SSO = "SSO Journey"
    }(zl || (zl = {}));
    class Bl {
        constructor(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            this.journeyType = e,
            this.additionalParams = t,
            this.state = Ml.Active
        }
        getQueryParams() {
            let e = {};
            return this.deviceId && (e.did = this.deviceId),
            this.sessionId && (e.sid = this.sessionId),
            e
        }
        getInternalHeaders() {
            const e = [];
            return this.userId && e.push({
                type: "uid",
                uid: this.userId
            }),
            e
        }
        toJson() {
            return {
                journeyType: this.journeyType,
                challenge: this.challenge,
                assertionId: this.assertionId,
                userId: this.userId,
                sessionId: this.sessionId,
                deviceId: this.deviceId,
                actionType: this.actionType,
                additionalParams: this.additionalParams
            }
        }
        getInvocationData() {
            const e = El.data.dummy;
            return this.additionalParams && Object.keys(this.additionalParams).length > 0 && (e.params = this.additionalParams),
            e
        }
        complete() {
            if (this.isCompletedState())
                throw Error("Cannot complete an already completed journey. Current state: ".concat(this.state.toString()));
            this.challenge = void 0,
            this.state = Ml.Success
        }
        reject() {
            if (this.isCompletedState())
                throw Error("Cannot complete an already completed journey. Current state: ".concat(this.state.toString()));
            this.challenge = void 0,
            this.state = Ml.Rejected
        }
        abort() {
            if (this.isCompletedState())
                throw Error("Cannot complete an already completed journey. Current state: ".concat(this.state.toString()));
            this.challenge = void 0,
            this.state = Ml.Aborted
        }
        active() {
            if (this.isCompletedState())
                throw Error("Cannot run a completed journey. Current state: ".concat(this.state.toString()));
            this.state = Ml.Active
        }
        isCompletedState() {
            return this.state === Ml.Success || this.state === Ml.Rejected || this.state === Ml.Aborted
        }
    }
    class Rl extends Bl {
        constructor(e, t) {
            if (super(zl.ClientSdk, t),
            this.journeyId = e,
            !this.journeyId)
                throw Error("Journey ID must be provided")
        }
        getInvocationData() {
            const e = super.getInvocationData();
            return e.policy_request_id = this.journeyId,
            e
        }
        getInvocationPath() {
            return yl.path
        }
        toJson() {
            return i(i({}, super.toJson()), {}, {
                journeyId: this.journeyId
            })
        }
    }
    class Ol extends Bl {
        constructor(e) {
            super(zl.SSO),
            this.interactionId = e
        }
        getInvocationPath() {
            return bl.path
        }
        getQueryParams() {
            return i(i({}, super.getQueryParams()), {}, {
                ssoInteractionId: this.interactionId
            })
        }
        toJson() {
            return i(i({}, super.toJson()), {}, {
                interactionId: this.interactionId
            })
        }
    }
    const Pl = ["assertion_id", "type", "escapes", "form_id", "vendor_name"]
      , Nl = [...Pl, "challenge", "assertion_error_code", "assertion_error_message", "assertions_complete", "state", "control_flow", "rejection_data"]
      , Ll = {
        [pl.Cancel]: pl.Cancel,
        [pl.Fail]: pl.Fail
    }
      , jl = ["data"]
      , Ul = ["json_data"];
    class ql {
        constructor(e) {
            var t, i, n;
            this.rawResponse = e;
            const [{escapes: r, form_id: a}] = null !== (i = null === (t = e.data) || void 0 === t ? void 0 : t.control_flow) && void 0 !== i ? i : [{}];
            this.escapes = r,
            this.data = null !== (n = e.data) && void 0 !== n ? n : {},
            this.formId = a
        }
        generateServiceResponse(e, t) {
            var n, r;
            const a = this.getType()
              , o = this.getJourneyStepId(e);
            return i(i({
                type: a,
                journeyStepId: o,
                errorData: this.getErrorData(),
                data: this.getData(o),
                clientResponseOptions: this.getClientResponseActions()
            }, t), {}, {
                redirectUrl: null === (r = null === (n = this.data) || void 0 === n ? void 0 : n.data) || void 0 === r ? void 0 : r.url
            })
        }
        getActionType() {
            return this.data.type
        }
        getChallenge() {
            return this.data.challenge
        }
        getAssertionId() {
            return this.data.assertion_id
        }
        getJourneyState() {
            var e, t, i;
            let n;
            if ((null === (e = this.rawResponse) || void 0 === e ? void 0 : e.status) >= 400)
                n = Sl.TextRejection;
            else
                switch (this.data.state) {
                case Il.Completed:
                    n = Sl.JourneyEnd;
                    break;
                case Il.Rejected:
                    n = Sl.JsonRejection;
                    break;
                case Il.Pending:
                    n = (null === (i = null === (t = this.rawResponse) || void 0 === t ? void 0 : t.data) || void 0 === i ? void 0 : i.control_flow) ? Sl.NextAction : Sl.UpdateAction;
                    break;
                default:
                    n = Sl.JsonRejection
                }
            return n
        }
        getType() {
            let e = fl.JourneyRejection;
            return this.data.assertions_complete ? e = fl.JourneySuccess : this.data.state === Il.Pending ? e = fl.ClientInputRequired : 16 == this.data.assertion_error_code ? e = fl.ClientInputUpdateRequired : 4001 === this.rawResponse.error_code && (e = fl.JourneyRejection),
            e
        }
        getData(e) {
            var t, n;
            const [r] = null !== (t = this.data.control_flow) && void 0 !== t ? t : [{}]
              , o = null !== (n = this.data) && void 0 !== n ? n : {}
              , {data: s} = o
              , l = a(o, jl)
              , c = null != s ? s : {}
              , {json_data: u} = c
              , d = a(c, Ul);
            return this.removeFields(r, Pl),
            this.data = i(i(i(i(i({}, l), r), u && {
                json_data: u
            }), Object.keys(d).length && {
                data: d
            }), this.rejectionReason && {
                rejectionReason: this.rejectionReason
            }),
            this.removeFields(this.data, Nl),
            this.manipulateDataForJourneyStep(e),
            this.data
        }
        manipulateDataForJourneyStep(e) {
            e === ml.InvokeIDP && (this.data.authorization_url = this.generateAuthorizationUrlFromResponseData(this.data),
            delete this.data.authorization_parameters,
            delete this.data.authorization_endpoint)
        }
        generateAuthorizationUrlFromResponseData(e) {
            const {authorization_endpoint: t, authorization_parameters: i} = e
              , n = Object.keys(i).map((e=>{
                const t = i[e]instanceof Object ? JSON.stringify(i[e]) : i[e];
                return "".concat(e, "=").concat(encodeURIComponent(t))
            }
            )).join("&")
              , r = new URL(t);
            return r.search = n,
            r
        }
        getErrorData() {
            if (this.data.assertion_error_code && 0 != this.data.assertion_error_code) {
                const e = Dl.convertFromAssertionError(this.data.assertion_error_code);
                return new Dl(this.data.assertion_error_message,e)
            }
        }
        removeFields(e, t) {
            for (const i of t)
                i in e && delete e[i]
        }
        getJourneyStepId(e) {
            const t = this.getType();
            if (t === fl.JourneyRejection)
                return this.rejectionReason = this.rawResponse.error_message,
                ml.Rejection;
            if (t === fl.JourneySuccess)
                return ml.Success;
            switch (e) {
            case Tl.Form:
            case Tl.LoginForm:
                return this.formIdToStepId() || this.formId || e;
            case Tl.Information:
                return ml.Information;
            case Tl.DebugBreak:
                return ml.DebugBreak;
            case Tl.WaitForTicket:
                return ml.WaitForAnotherDevice;
            case Tl.Rejection:
                return ml.Rejection;
            case Tl.DrsTriggerAction:
                return ml.DrsTriggerAction;
            case Tl.IdentityVerification:
                return ml.IdentityVerification;
            case Tl.WebAuthnRegistration:
                return ml.WebAuthnRegistration;
            default:
                return e || ""
            }
        }
        formIdToStepId() {
            return this.formId
        }
        getClientResponseActions() {
            var e;
            const t = {
                [pl.ClientInput]: {
                    type: pl.ClientInput,
                    id: "client_input",
                    label: "Client Input"
                }
            };
            return null === (e = this.escapes) || void 0 === e || e.forEach((e=>{
                let {id: n, display_name: r, schema: a} = e;
                var o;
                const s = null !== (o = Ll[n]) && void 0 !== o ? o : pl.Custom;
                t[n] = i({
                    type: s,
                    id: n,
                    label: r || n
                }, a && {
                    schema: a
                })
            }
            )),
            t
        }
    }
    class Kl extends Error {
        constructor() {
            super("Missing response data")
        }
    }
    class Hl extends Error {
        constructor(e, t) {
            super("Action of type " + e + " cannot have response from type " + t)
        }
    }
    const Vl = new class {
        constructor() {
            this.flowId = "",
            this.getIdentifier = (e,t)=>{
                var i;
                const n = null === (i = e.headers.find((e=>t in e))) || void 0 === i ? void 0 : i[t];
                return _l.debug("Getting identifier ".concat(t, " from response, value: ").concat(n)),
                n
            }
        }
        async init(e, t) {
            if (!e || !t)
                throw new Dl("Invalid initialization configuration",gl.InvalidInitOptions);
            const {serverPath: i, logLevel: n, pollingTimeout: r, resource: a} = t;
            if (!i)
                throw new Dl("Invalid initialization options",gl.InvalidInitOptions);
            _l.setLogLevel(null != n ? n : hl.Info),
            this.pollingTimeout = null != r ? r : 3,
            this.clientId = e,
            a && (this.resource = a),
            this.serverPath = i,
            this.api = new Fl(this.serverPath),
            _l.info("IdoSdk initialized successfully")
        }
        async startJourney(e, t) {
            const {additionalParams: i, flowId: n} = null != t ? t : {};
            this.flowId = null != n ? n : function() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 32
                  , t = "";
                const i = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
                  , n = new Uint32Array(e);
                window.crypto.getRandomValues(n);
                for (let r = 0; r < e; r++)
                    t += i.charAt(n[r] % 36);
                return t
            }();
            const r = new Rl(e,i);
            return this.invokeJourney(r)
        }
        async startSsoJourney(e) {
            this.flowId = e;
            const t = new Ol(e);
            return this.invokeJourney(t)
        }
        async submitClientResponse(e, t) {
            var i, n, r, a, o, s, l;
            if (!this.journey)
                throw new Dl("Error occurred while trying to submit client response since no journey is active",gl.NoActiveJourney);
            const c = {
                assertion_id: null === (i = this.journey) || void 0 === i ? void 0 : i.assertionId,
                action: null === (n = this.journey) || void 0 === n ? void 0 : n.actionType,
                assert: "action",
                input: t
            };
            if ((null == t ? void 0 : t.fch) || (c.fch = null === (r = this.journey) || void 0 === r ? void 0 : r.challenge),
            e === pl.ClientInput)
                switch (null === (a = this.lastServiceResponse) || void 0 === a ? void 0 : a.journeyStepId) {
                case ml.CryptoBindingRegistration:
                case ml.RegisterDeviceAction:
                case ml.CryptoBindingValidation:
                case ml.ValidateDeviceAction:
                    await this.handleCryptoBindingStep(c);
                    break;
                case ml.WaitForAnotherDevice:
                    return await this.handleWaitForAnotherDeviceAction(c);
                case ml.DrsTriggerAction:
                case ml.IdentityVerification:
                case ml.WebAuthnRegistration:
                case ml.SmsOTPAuthentication:
                case ml.EmailOTPAuthentication:
                case ml.EmailValidation:
                case ml.SmsValidation:
                    this.handleDataAction(c, t);
                    break;
                case ml.TotpRegistration:
                    this.handleDataAction(c, {});
                    break;
                case ml.InvokeIDP:
                    this.handleDataAction(c, t)
                }
            else if (e === pl.Resend)
                switch (null === (o = this.lastServiceResponse) || void 0 === o ? void 0 : o.journeyStepId) {
                case ml.SmsOTPAuthentication:
                case ml.EmailOTPAuthentication:
                case ml.EmailValidation:
                case ml.SmsValidation:
                    this.handleResendAssertion(c);
                    break;
                default:
                    throw new Hl(null === (s = this.lastServiceResponse) || void 0 === s ? void 0 : s.journeyStepId,e)
                }
            else
                this.handleClientResponseOption(e, t, c);
            try {
                const e = await (null === (l = this.api) || void 0 === l ? void 0 : l.sendRequest(wl.path, this.getQueryParams(), {
                    headers: this.getInternalHeaders(),
                    data: c
                }));
                if (!e)
                    throw new Kl;
                return this.handleServiceResponse(e)
            } catch (e) {
                throw this.rejectJourney(),
                e
            }
        }
        handleClientResponseOption(e, t, i) {
            delete i.input,
            i.assert = "escape",
            i.data = {
                escape_id: e,
                escape_params: t
            }
        }
        handleResendAssertion(e) {
            delete e.input,
            delete e.data,
            e.assert = "resend"
        }
        async handleCryptoBindingStep(e) {
            const t = dl.crypto.createCryptoBinding("sign")
              , i = await this.handleCryptoBindingFieldValue(t);
            this.handleCryptoBindingActionPayload(e, i)
        }
        handleCryptoBindingActionPayload(e, t) {
            const n = xl[this.lastServiceResponse.journeyStepId];
            e[n] = i(i({}, e[n]), {}, {
                "ts:idosdk:device": t
            })
        }
        handleDataAction(e, t) {
            delete e.input,
            e.assert = "data",
            e.data = t
        }
        async handleCryptoBindingFieldValue(e) {
            var t, i, n, r, a, o, s, l, c;
            switch (null === (t = this.lastServiceResponse) || void 0 === t ? void 0 : t.journeyStepId) {
            case ml.CryptoBindingRegistration:
            case ml.RegisterDeviceAction:
                const {keyIdentifier: t, publicKey: u} = null !== (i = await e.getPublicData()) && void 0 !== i ? i : {};
                return {
                    platform_device_id: t,
                    platform_device_key: u
                };
            case ml.CryptoBindingValidation:
            case ml.ValidateDeviceAction:
                const {keyIdentifier: d} = null !== (n = await e.getPublicData()) && void 0 !== n ? n : {};
                return {
                    platform_device_id: d,
                    signature: await e.sign(null !== (s = null === (o = null === (a = null === (r = this.lastServiceResponse) || void 0 === r ? void 0 : r.data) || void 0 === a ? void 0 : a.app_data) || void 0 === o ? void 0 : o.challenge) && void 0 !== s ? s : null === (c = null === (l = this.lastServiceResponse) || void 0 === l ? void 0 : l.data) || void 0 === c ? void 0 : c.device_challenge)
                }
            }
        }
        async handleWaitForAnotherDeviceAction(e) {
            var t, i, n, r;
            const a = await (null === (t = this.api) || void 0 === t ? void 0 : t.sendRequest(Al.path, this.getQueryParams(), {
                headers: this.getInternalHeaders(),
                data: {
                    polling_timeout: this.pollingTimeout,
                    ticket_id: null === (i = this.lastServiceResponse) || void 0 === i ? void 0 : i.data.raw_ticket_id,
                    type: "ticket"
                }
            }));
            if (!0 === (null === (n = null == a ? void 0 : a.data) || void 0 === n ? void 0 : n.change_detected)) {
                const t = await (null === (r = this.api) || void 0 === r ? void 0 : r.sendRequest(wl.path, this.getQueryParams(), {
                    headers: this.getInternalHeaders(),
                    data: e
                }));
                if (!t)
                    throw new Kl;
                return this.handleServiceResponse(t)
            }
            return this.lastServiceResponse
        }
        async handleServiceResponse(e) {
            var t, i, n, r;
            const a = new ql(e)
              , o = a.getJourneyState();
            this.handleJourneyState(o),
            this.journey.assertionId = null !== (t = a.getAssertionId()) && void 0 !== t ? t : this.journey.assertionId,
            this.journey.actionType = null !== (i = a.getActionType()) && void 0 !== i ? i : this.journey.actionType,
            this.journey.challenge = null !== (n = a.getChallenge()) && void 0 !== n ? n : this.journey.challenge;
            const {clientResponseOptions: s, data: l} = null !== (r = this.lastServiceResponse) && void 0 !== r ? r : {}
              , c = o === Sl.UpdateAction ? {
                clientResponseOptions: s,
                data: l
            } : {};
            let u = a.generateServiceResponse(this.journey.actionType, c);
            switch (this.lastServiceResponse = u,
            u.journeyStepId) {
            case ml.ValidateDeviceAction:
            case ml.RegisterDeviceAction:
                if (o !== Sl.NextAction)
                    throw new Error("Journey rejected on ".concat(u.journeyStepId, " device action, with ").concat(u.errorData));
                u = await this.submitClientResponse(pl.ClientInput, u.data);
                break;
            default:
                this.handleJourneySuccess(u)
            }
            return u
        }
        handleJourneySuccess(e) {
            var t, i;
            null === (i = null === (t = e.data) || void 0 === t ? void 0 : t.data) || void 0 === i || i.url,
            e.type === fl.JourneySuccess && (e.token = e.data.token,
            delete e.data.token)
        }
        serializeState() {
            if (!this.lastServiceResponse || !this.journey)
                throw new Dl("Error occurred while trying to serialize state since no journey is active",gl.NoActiveJourney);
            return btoa(encodeURIComponent(JSON.stringify({
                journey: this.journey.toJson(),
                serviceResponse: this.lastServiceResponse
            })))
        }
        restoreFromSerializedState(e) {
            var t;
            const {journey: i, serviceResponse: n} = JSON.parse(decodeURIComponent(null !== (t = atob(e)) && void 0 !== t ? t : {}));
            if (!i || !n)
                throw new Dl("Invalid serialized state",gl.InvalidState);
            return this.lastServiceResponse = n,
            this.journey = function(e) {
                let t;
                switch (e.journeyType) {
                case zl.ClientSdk:
                    t = new Rl(e.journeyId,e.additionalParams);
                    break;
                case zl.SSO:
                    t = new Ol(e.interactionId);
                    break;
                default:
                    throw Error("error when trying to deserialize Journey Json - unknown journey type ".concat(e.journeyType))
                }
                return t.challenge = e.challenge,
                t.assertionId = e.assertionId,
                t.userId = e.userId,
                t.sessionId = e.sessionId,
                t.deviceId = e.deviceId,
                t.actionType = e.actionType,
                t
            }(i),
            this.flowId = i.flowId,
            n
        }
        getInternalHeaders() {
            const e = [];
            return this.journey && e.push(...this.journey.getInternalHeaders()),
            this.flowId && e.push({
                type: "flow_id",
                flow_id: this.flowId
            }),
            e
        }
        getQueryParams() {
            var e, t;
            const n = i({
                clientId: this.clientId,
                aid: "default_application",
                locale: window.navigator.language || "en-US"
            }, this.journey ? this.journey.getQueryParams() : {});
            return (null === (e = this.journey) || void 0 === e ? void 0 : e.deviceId) && (n.did = this.journey.deviceId),
            (null === (t = this.journey) || void 0 === t ? void 0 : t.sessionId) && (n.sid = this.journey.sessionId),
            this.resource && (n.resource = this.resource),
            n
        }
        async invokeJourney(e) {
            var t;
            this.journey = e;
            const i = {
                data: e.getInvocationData(),
                headers: this.getInternalHeaders()
            };
            try {
                const n = await (null === (t = this.api) || void 0 === t ? void 0 : t.sendRequest(e.getInvocationPath(), this.getQueryParams(), i));
                if (!n)
                    throw new Kl;
                return e.userId = this.getIdentifier(n, "uid"),
                e.sessionId = this.getIdentifier(n, "session_id"),
                e.deviceId = this.getIdentifier(n, "device_id"),
                e.active(),
                this.handleServiceResponse(n)
            } catch (e) {
                throw this.rejectJourney(),
                e
            }
        }
        handleJourneyState(e) {
            switch (e) {
            case Sl.TextRejection:
            case Sl.JsonRejection:
                this.rejectJourney();
                break;
            case Sl.JourneyEnd:
                this.completeJourney();
                break;
            case Sl.NextAction:
            case Sl.UpdateAction:
                break;
            default:
                throw Error("Unhandled service response state: ".concat(e))
            }
        }
        completeJourney() {
            var e;
            null === (e = this.journey) || void 0 === e || e.complete()
        }
        rejectJourney() {
            var e;
            null === (e = this.journey) || void 0 === e || e.reject()
        }
        async generateDebugPin() {
            var e;
            if (!this.journey)
                throw new Dl("Error occurred while trying to generate debug pin since no journey is active",gl.NoActiveJourney);
            const t = await (null === (e = this.api) || void 0 === e ? void 0 : e.sendRequest(kl.path, this.getQueryParams(), {
                headers: this.getInternalHeaders(),
                data: {}
            }));
            if (!t)
                throw new Kl;
            return t.data.debug_pin
        }
    }
    ;
    dl.events.on(dl.events.MODULE_INITIALIZED, (async()=>{
        var e;
        const t = dl.moduleMetadata.getInitConfig();
        if (!(null === (e = null == t ? void 0 : t.ido) || void 0 === e ? void 0 : e.serverPath))
            return;
        const {clientId: i, ido: n} = t;
        await Vl.init(i, n)
    }
    ));
    return e.PACKAGE_VERSION = "1.9.6",
    e.drs = oa,
    e.ido = Vl,
    e.idv = As,
    e.initialize = x,
    e.webauthn = ul,
    e
}({});
