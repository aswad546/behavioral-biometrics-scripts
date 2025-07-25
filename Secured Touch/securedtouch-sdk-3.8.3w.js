! function(e) {
    e._securedTouchDependencies || (e._securedTouchDependencies = {})
}(window),
function(e, t) {
    "use strict";
    e.StPromiseQueue = function() {
        var e = function() {};

        function t(e, t, n) {
            this.options = n = n || {}, this.pendingPromises = 0, this.maxPendingPromises = void 0 !== e ? e : 1 / 0, this.maxQueuedPromises = void 0 !== t ? t : 1 / 0, this.queue = []
        }
        return t.prototype.add = function(t) {
            var n = this;
            return new Promise(function(i, r, o) {
                n.queue.length >= n.maxQueuedPromises ? r(new Error("Queue limit reached")) : (n.queue.push({
                    promiseGenerator: t,
                    resolve: i,
                    reject: r,
                    notify: o || e
                }), n._dequeue())
            })
        }, t.prototype.getPendingLength = function() {
            return this.pendingPromises
        }, t.prototype.getQueueLength = function() {
            return this.queue.length
        }, t.prototype._dequeue = function() {
            var e = this;
            if (this.pendingPromises >= this.maxPendingPromises) return !1;
            var t, n = this.queue.shift();
            if (!n) return this.options.onEmpty && this.options.onEmpty(), !1;
            try {
                this.pendingPromises++, (t = n.promiseGenerator(), t && "function" == typeof t.then ? t : new Promise(function(e) {
                    e(t)
                })).then(function(t) {
                    e.pendingPromises--, n.resolve(t), e._dequeue()
                }, function(t) {
                    e.pendingPromises--, n.reject(t), e._dequeue()
                }, function(e) {
                    n.notify(e)
                })
            } catch (t) {
                e.pendingPromises--, n.reject(t), e._dequeue()
            }
            return !0
        }, t
    }()
}(window._securedTouchDependencies),
function(root) {
    "use strict";
    var ERROR = "input is invalid type",
        NODE_JS = !1,
        ARRAY_BUFFER = !root.JS_SHA256_NO_ARRAY_BUFFER && "undefined" != typeof ArrayBuffer,
        HEX_CHARS = "0123456789abcdef".split(""),
        EXTRA = [-2147483648, 8388608, 32768, 128],
        SHIFT = [24, 16, 8, 0],
        K = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298],
        OUTPUT_TYPES = ["hex", "array", "digest", "arrayBuffer"],
        blocks = [];
    !root.JS_SHA256_NO_NODE_JS && Array.isArray || (Array.isArray = function(e) {
        return "[object Array]" === Object.prototype.toString.call(e)
    }), !ARRAY_BUFFER || !root.JS_SHA256_NO_ARRAY_BUFFER_IS_VIEW && ArrayBuffer.isView || (ArrayBuffer.isView = function(e) {
        return "object" == typeof e && e.buffer && e.buffer.constructor === ArrayBuffer
    });
    var createOutputMethod = function(e, t) {
            return function(n) {
                return new Sha256(t, !0).update(n)[e]()
            }
        },
        createMethod = function(e) {
            var t = createOutputMethod("hex", e);
            NODE_JS && (t = nodeWrap(t, e)), t.create = function() {
                return new Sha256(e)
            }, t.update = function(e) {
                return t.create().update(e)
            };
            for (var n = 0; n < OUTPUT_TYPES.length; ++n) {
                var i = OUTPUT_TYPES[n];
                t[i] = createOutputMethod(i, e)
            }
            return t
        },
        nodeWrap = function(method, is224) {
            var crypto = eval("require('crypto')"),
                Buffer = eval("require('buffer').Buffer"),
                algorithm = is224 ? "sha224" : "sha256",
                nodeMethod = function(e) {
                    if ("string" == typeof e) return crypto.createHash(algorithm).update(e, "utf8").digest("hex");
                    if (null === e || void 0 === e) throw new Error(ERROR);
                    return e.constructor === ArrayBuffer && (e = new Uint8Array(e)), Array.isArray(e) || ArrayBuffer.isView(e) || e.constructor === Buffer ? crypto.createHash(algorithm).update(new Buffer(e)).digest("hex") : method(e)
                };
            return nodeMethod
        },
        createHmacOutputMethod = function(e, t) {
            return function(n, i) {
                return new HmacSha256(n, t, !0).update(i)[e]()
            }
        },
        createHmacMethod = function(e) {
            var t = createHmacOutputMethod("hex", e);
            t.create = function(t) {
                return new HmacSha256(t, e)
            }, t.update = function(e, n) {
                return t.create(e).update(n)
            };
            for (var n = 0; n < OUTPUT_TYPES.length; ++n) {
                var i = OUTPUT_TYPES[n];
                t[i] = createHmacOutputMethod(i, e)
            }
            return t
        };

    function Sha256(e, t) {
        t ? (blocks[0] = blocks[16] = blocks[1] = blocks[2] = blocks[3] = blocks[4] = blocks[5] = blocks[6] = blocks[7] = blocks[8] = blocks[9] = blocks[10] = blocks[11] = blocks[12] = blocks[13] = blocks[14] = blocks[15] = 0, this.blocks = blocks) : this.blocks = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], e ? (this.h0 = 3238371032, this.h1 = 914150663, this.h2 = 812702999, this.h3 = 4144912697, this.h4 = 4290775857, this.h5 = 1750603025, this.h6 = 1694076839, this.h7 = 3204075428) : (this.h0 = 1779033703, this.h1 = 3144134277, this.h2 = 1013904242, this.h3 = 2773480762, this.h4 = 1359893119, this.h5 = 2600822924, this.h6 = 528734635, this.h7 = 1541459225), this.block = this.start = this.bytes = this.hBytes = 0, this.finalized = this.hashed = !1, this.first = !0, this.is224 = e
    }

    function HmacSha256(e, t, n) {
        var i, r = typeof e;
        if ("string" === r) {
            var o, a = [],
                s = e.length,
                c = 0;
            for (i = 0; i < s; ++i)(o = e.charCodeAt(i)) < 128 ? a[c++] = o : o < 2048 ? (a[c++] = 192 | o >> 6, a[c++] = 128 | 63 & o) : o < 55296 || o >= 57344 ? (a[c++] = 224 | o >> 12, a[c++] = 128 | o >> 6 & 63, a[c++] = 128 | 63 & o) : (o = 65536 + ((1023 & o) << 10 | 1023 & e.charCodeAt(++i)), a[c++] = 240 | o >> 18, a[c++] = 128 | o >> 12 & 63, a[c++] = 128 | o >> 6 & 63, a[c++] = 128 | 63 & o);
            e = a
        } else {
            if ("object" !== r) throw new Error(ERROR);
            if (null === e) throw new Error(ERROR);
            if (ARRAY_BUFFER && e.constructor === ArrayBuffer) e = new Uint8Array(e);
            else if (!(Array.isArray(e) || ARRAY_BUFFER && ArrayBuffer.isView(e))) throw new Error(ERROR)
        }
        e.length > 64 && (e = new Sha256(t, !0).update(e).array());
        var u = [],
            d = [];
        for (i = 0; i < 64; ++i) {
            var h = e[i] || 0;
            u[i] = 92 ^ h, d[i] = 54 ^ h
        }
        Sha256.call(this, t, n), this.update(d), this.oKeyPad = u, this.inner = !0, this.sharedMemory = n
    }
    Sha256.prototype.update = function(e) {
        if (!this.finalized) {
            var t, n = typeof e;
            if ("string" !== n) {
                if ("object" !== n) throw new Error(ERROR);
                if (null === e) throw new Error(ERROR);
                if (ARRAY_BUFFER && e.constructor === ArrayBuffer) e = new Uint8Array(e);
                else if (!(Array.isArray(e) || ARRAY_BUFFER && ArrayBuffer.isView(e))) throw new Error(ERROR);
                t = !0
            }
            for (var i, r, o = 0, a = e.length, s = this.blocks; o < a;) {
                if (this.hashed && (this.hashed = !1, s[0] = this.block, s[16] = s[1] = s[2] = s[3] = s[4] = s[5] = s[6] = s[7] = s[8] = s[9] = s[10] = s[11] = s[12] = s[13] = s[14] = s[15] = 0), t)
                    for (r = this.start; o < a && r < 64; ++o) s[r >> 2] |= e[o] << SHIFT[3 & r++];
                else
                    for (r = this.start; o < a && r < 64; ++o)(i = e.charCodeAt(o)) < 128 ? s[r >> 2] |= i << SHIFT[3 & r++] : i < 2048 ? (s[r >> 2] |= (192 | i >> 6) << SHIFT[3 & r++], s[r >> 2] |= (128 | 63 & i) << SHIFT[3 & r++]) : i < 55296 || i >= 57344 ? (s[r >> 2] |= (224 | i >> 12) << SHIFT[3 & r++], s[r >> 2] |= (128 | i >> 6 & 63) << SHIFT[3 & r++], s[r >> 2] |= (128 | 63 & i) << SHIFT[3 & r++]) : (i = 65536 + ((1023 & i) << 10 | 1023 & e.charCodeAt(++o)), s[r >> 2] |= (240 | i >> 18) << SHIFT[3 & r++], s[r >> 2] |= (128 | i >> 12 & 63) << SHIFT[3 & r++], s[r >> 2] |= (128 | i >> 6 & 63) << SHIFT[3 & r++], s[r >> 2] |= (128 | 63 & i) << SHIFT[3 & r++]);
                this.lastByteIndex = r, this.bytes += r - this.start, r >= 64 ? (this.block = s[16], this.start = r - 64, this.hash(), this.hashed = !0) : this.start = r
            }
            return this.bytes > 4294967295 && (this.hBytes += this.bytes / 4294967296 << 0, this.bytes = this.bytes % 4294967296), this
        }
    }, Sha256.prototype.finalize = function() {
        if (!this.finalized) {
            this.finalized = !0;
            var e = this.blocks,
                t = this.lastByteIndex;
            e[16] = this.block, e[t >> 2] |= EXTRA[3 & t], this.block = e[16], t >= 56 && (this.hashed || this.hash(), e[0] = this.block, e[16] = e[1] = e[2] = e[3] = e[4] = e[5] = e[6] = e[7] = e[8] = e[9] = e[10] = e[11] = e[12] = e[13] = e[14] = e[15] = 0), e[14] = this.hBytes << 3 | this.bytes >>> 29, e[15] = this.bytes << 3, this.hash()
        }
    }, Sha256.prototype.hash = function() {
        var e, t, n, i, r, o, a, s, c, u = this.h0,
            d = this.h1,
            h = this.h2,
            l = this.h3,
            p = this.h4,
            f = this.h5,
            g = this.h6,
            m = this.h7,
            _ = this.blocks;
        for (e = 16; e < 64; ++e) t = ((r = _[e - 15]) >>> 7 | r << 25) ^ (r >>> 18 | r << 14) ^ r >>> 3, n = ((r = _[e - 2]) >>> 17 | r << 15) ^ (r >>> 19 | r << 13) ^ r >>> 10, _[e] = _[e - 16] + t + _[e - 7] + n << 0;
        for (c = d & h, e = 0; e < 64; e += 4) this.first ? (this.is224 ? (o = 300032, m = (r = _[0] - 1413257819) - 150054599 << 0, l = r + 24177077 << 0) : (o = 704751109, m = (r = _[0] - 210244248) - 1521486534 << 0, l = r + 143694565 << 0), this.first = !1) : (t = (u >>> 2 | u << 30) ^ (u >>> 13 | u << 19) ^ (u >>> 22 | u << 10), i = (o = u & d) ^ u & h ^ c, m = l + (r = m + (n = (p >>> 6 | p << 26) ^ (p >>> 11 | p << 21) ^ (p >>> 25 | p << 7)) + (p & f ^ ~p & g) + K[e] + _[e]) << 0, l = r + (t + i) << 0), t = (l >>> 2 | l << 30) ^ (l >>> 13 | l << 19) ^ (l >>> 22 | l << 10), i = (a = l & u) ^ l & d ^ o, g = h + (r = g + (n = (m >>> 6 | m << 26) ^ (m >>> 11 | m << 21) ^ (m >>> 25 | m << 7)) + (m & p ^ ~m & f) + K[e + 1] + _[e + 1]) << 0, t = ((h = r + (t + i) << 0) >>> 2 | h << 30) ^ (h >>> 13 | h << 19) ^ (h >>> 22 | h << 10), i = (s = h & l) ^ h & u ^ a, f = d + (r = f + (n = (g >>> 6 | g << 26) ^ (g >>> 11 | g << 21) ^ (g >>> 25 | g << 7)) + (g & m ^ ~g & p) + K[e + 2] + _[e + 2]) << 0, t = ((d = r + (t + i) << 0) >>> 2 | d << 30) ^ (d >>> 13 | d << 19) ^ (d >>> 22 | d << 10), i = (c = d & h) ^ d & l ^ s, p = u + (r = p + (n = (f >>> 6 | f << 26) ^ (f >>> 11 | f << 21) ^ (f >>> 25 | f << 7)) + (f & g ^ ~f & m) + K[e + 3] + _[e + 3]) << 0, u = r + (t + i) << 0;
        this.h0 = this.h0 + u << 0, this.h1 = this.h1 + d << 0, this.h2 = this.h2 + h << 0, this.h3 = this.h3 + l << 0, this.h4 = this.h4 + p << 0, this.h5 = this.h5 + f << 0, this.h6 = this.h6 + g << 0, this.h7 = this.h7 + m << 0
    }, Sha256.prototype.hex = function() {
        this.finalize();
        var e = this.h0,
            t = this.h1,
            n = this.h2,
            i = this.h3,
            r = this.h4,
            o = this.h5,
            a = this.h6,
            s = this.h7,
            c = HEX_CHARS[e >> 28 & 15] + HEX_CHARS[e >> 24 & 15] + HEX_CHARS[e >> 20 & 15] + HEX_CHARS[e >> 16 & 15] + HEX_CHARS[e >> 12 & 15] + HEX_CHARS[e >> 8 & 15] + HEX_CHARS[e >> 4 & 15] + HEX_CHARS[15 & e] + HEX_CHARS[t >> 28 & 15] + HEX_CHARS[t >> 24 & 15] + HEX_CHARS[t >> 20 & 15] + HEX_CHARS[t >> 16 & 15] + HEX_CHARS[t >> 12 & 15] + HEX_CHARS[t >> 8 & 15] + HEX_CHARS[t >> 4 & 15] + HEX_CHARS[15 & t] + HEX_CHARS[n >> 28 & 15] + HEX_CHARS[n >> 24 & 15] + HEX_CHARS[n >> 20 & 15] + HEX_CHARS[n >> 16 & 15] + HEX_CHARS[n >> 12 & 15] + HEX_CHARS[n >> 8 & 15] + HEX_CHARS[n >> 4 & 15] + HEX_CHARS[15 & n] + HEX_CHARS[i >> 28 & 15] + HEX_CHARS[i >> 24 & 15] + HEX_CHARS[i >> 20 & 15] + HEX_CHARS[i >> 16 & 15] + HEX_CHARS[i >> 12 & 15] + HEX_CHARS[i >> 8 & 15] + HEX_CHARS[i >> 4 & 15] + HEX_CHARS[15 & i] + HEX_CHARS[r >> 28 & 15] + HEX_CHARS[r >> 24 & 15] + HEX_CHARS[r >> 20 & 15] + HEX_CHARS[r >> 16 & 15] + HEX_CHARS[r >> 12 & 15] + HEX_CHARS[r >> 8 & 15] + HEX_CHARS[r >> 4 & 15] + HEX_CHARS[15 & r] + HEX_CHARS[o >> 28 & 15] + HEX_CHARS[o >> 24 & 15] + HEX_CHARS[o >> 20 & 15] + HEX_CHARS[o >> 16 & 15] + HEX_CHARS[o >> 12 & 15] + HEX_CHARS[o >> 8 & 15] + HEX_CHARS[o >> 4 & 15] + HEX_CHARS[15 & o] + HEX_CHARS[a >> 28 & 15] + HEX_CHARS[a >> 24 & 15] + HEX_CHARS[a >> 20 & 15] + HEX_CHARS[a >> 16 & 15] + HEX_CHARS[a >> 12 & 15] + HEX_CHARS[a >> 8 & 15] + HEX_CHARS[a >> 4 & 15] + HEX_CHARS[15 & a];
        return this.is224 || (c += HEX_CHARS[s >> 28 & 15] + HEX_CHARS[s >> 24 & 15] + HEX_CHARS[s >> 20 & 15] + HEX_CHARS[s >> 16 & 15] + HEX_CHARS[s >> 12 & 15] + HEX_CHARS[s >> 8 & 15] + HEX_CHARS[s >> 4 & 15] + HEX_CHARS[15 & s]), c
    }, Sha256.prototype.toString = Sha256.prototype.hex, Sha256.prototype.digest = function() {
        this.finalize();
        var e = this.h0,
            t = this.h1,
            n = this.h2,
            i = this.h3,
            r = this.h4,
            o = this.h5,
            a = this.h6,
            s = this.h7,
            c = [e >> 24 & 255, e >> 16 & 255, e >> 8 & 255, 255 & e, t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, 255 & t, n >> 24 & 255, n >> 16 & 255, n >> 8 & 255, 255 & n, i >> 24 & 255, i >> 16 & 255, i >> 8 & 255, 255 & i, r >> 24 & 255, r >> 16 & 255, r >> 8 & 255, 255 & r, o >> 24 & 255, o >> 16 & 255, o >> 8 & 255, 255 & o, a >> 24 & 255, a >> 16 & 255, a >> 8 & 255, 255 & a];
        return this.is224 || c.push(s >> 24 & 255, s >> 16 & 255, s >> 8 & 255, 255 & s), c
    }, Sha256.prototype.array = Sha256.prototype.digest, Sha256.prototype.arrayBuffer = function() {
        this.finalize();
        var e = new ArrayBuffer(this.is224 ? 28 : 32),
            t = new DataView(e);
        return t.setUint32(0, this.h0), t.setUint32(4, this.h1), t.setUint32(8, this.h2), t.setUint32(12, this.h3), t.setUint32(16, this.h4), t.setUint32(20, this.h5), t.setUint32(24, this.h6), this.is224 || t.setUint32(28, this.h7), e
    }, HmacSha256.prototype = new Sha256, HmacSha256.prototype.finalize = function() {
        if (Sha256.prototype.finalize.call(this), this.inner) {
            this.inner = !1;
            var e = this.array();
            Sha256.call(this, this.is224, this.sharedMemory), this.update(this.oKeyPad), this.update(e), Sha256.prototype.finalize.call(this)
        }
    };
    var exports = createMethod();
    exports.sha256 = exports, exports.sha224 = createMethod(!0), exports.sha256.hmac = createHmacMethod(), exports.sha224.hmac = createHmacMethod(!0), root.sha256 = exports.sha256, root.sha224 = exports.sha224
}(window._securedTouchDependencies),
function(e, t, n) {
    "use strict";
    t.Fingerprint2 = function() {
        var e = function(e, t) {
                e = [e[0] >>> 16, 65535 & e[0], e[1] >>> 16, 65535 & e[1]], t = [t[0] >>> 16, 65535 & t[0], t[1] >>> 16, 65535 & t[1]];
                var n = [0, 0, 0, 0];
                return n[3] += e[3] + t[3], n[2] += n[3] >>> 16, n[3] &= 65535, n[2] += e[2] + t[2], n[1] += n[2] >>> 16, n[2] &= 65535, n[1] += e[1] + t[1], n[0] += n[1] >>> 16, n[1] &= 65535, n[0] += e[0] + t[0], n[0] &= 65535, [n[0] << 16 | n[1], n[2] << 16 | n[3]]
            },
            t = function(e, t) {
                e = [e[0] >>> 16, 65535 & e[0], e[1] >>> 16, 65535 & e[1]], t = [t[0] >>> 16, 65535 & t[0], t[1] >>> 16, 65535 & t[1]];
                var n = [0, 0, 0, 0];
                return n[3] += e[3] * t[3], n[2] += n[3] >>> 16, n[3] &= 65535, n[2] += e[2] * t[3], n[1] += n[2] >>> 16, n[2] &= 65535, n[2] += e[3] * t[2], n[1] += n[2] >>> 16, n[2] &= 65535, n[1] += e[1] * t[3], n[0] += n[1] >>> 16, n[1] &= 65535, n[1] += e[2] * t[2], n[0] += n[1] >>> 16, n[1] &= 65535, n[1] += e[3] * t[1], n[0] += n[1] >>> 16, n[1] &= 65535, n[0] += e[0] * t[3] + e[1] * t[2] + e[2] * t[1] + e[3] * t[0], n[0] &= 65535, [n[0] << 16 | n[1], n[2] << 16 | n[3]]
            },
            n = function(e, t) {
                return 32 === (t %= 64) ? [e[1], e[0]] : t < 32 ? [e[0] << t | e[1] >>> 32 - t, e[1] << t | e[0] >>> 32 - t] : (t -= 32, [e[1] << t | e[0] >>> 32 - t, e[0] << t | e[1] >>> 32 - t])
            },
            i = function(e, t) {
                return 0 === (t %= 64) ? e : t < 32 ? [e[0] << t | e[1] >>> 32 - t, e[1] << t] : [e[1] << t - 32, 0]
            },
            r = function(e, t) {
                return [e[0] ^ t[0], e[1] ^ t[1]]
            },
            o = function(e) {
                return e = r(e, [0, e[0] >>> 1]), e = t(e, [4283543511, 3981806797]), e = r(e, [0, e[0] >>> 1]), e = t(e, [3301882366, 444984403]), e = r(e, [0, e[0] >>> 1])
            },
            a = function(a, s) {
                a = a || "", s = s || 0;
                for (var c = a.length % 16, u = a.length - c, d = [0, s], h = [0, s], l = [0, 0], p = [0, 0], f = [2277735313, 289559509], g = [1291169091, 658871167], m = 0; m < u; m += 16) l = [255 & a.charCodeAt(m + 4) | (255 & a.charCodeAt(m + 5)) << 8 | (255 & a.charCodeAt(m + 6)) << 16 | (255 & a.charCodeAt(m + 7)) << 24, 255 & a.charCodeAt(m) | (255 & a.charCodeAt(m + 1)) << 8 | (255 & a.charCodeAt(m + 2)) << 16 | (255 & a.charCodeAt(m + 3)) << 24], p = [255 & a.charCodeAt(m + 12) | (255 & a.charCodeAt(m + 13)) << 8 | (255 & a.charCodeAt(m + 14)) << 16 | (255 & a.charCodeAt(m + 15)) << 24, 255 & a.charCodeAt(m + 8) | (255 & a.charCodeAt(m + 9)) << 8 | (255 & a.charCodeAt(m + 10)) << 16 | (255 & a.charCodeAt(m + 11)) << 24], l = t(l, f), l = n(l, 31), l = t(l, g), d = r(d, l), d = n(d, 27), d = e(d, h), d = e(t(d, [0, 5]), [0, 1390208809]), p = t(p, g), p = n(p, 33), p = t(p, f), h = r(h, p), h = n(h, 31), h = e(h, d), h = e(t(h, [0, 5]), [0, 944331445]);
                switch (l = [0, 0], p = [0, 0], c) {
                    case 15:
                        p = r(p, i([0, a.charCodeAt(m + 14)], 48));
                    case 14:
                        p = r(p, i([0, a.charCodeAt(m + 13)], 40));
                    case 13:
                        p = r(p, i([0, a.charCodeAt(m + 12)], 32));
                    case 12:
                        p = r(p, i([0, a.charCodeAt(m + 11)], 24));
                    case 11:
                        p = r(p, i([0, a.charCodeAt(m + 10)], 16));
                    case 10:
                        p = r(p, i([0, a.charCodeAt(m + 9)], 8));
                    case 9:
                        p = r(p, [0, a.charCodeAt(m + 8)]), p = t(p, g), p = n(p, 33), p = t(p, f), h = r(h, p);
                    case 8:
                        l = r(l, i([0, a.charCodeAt(m + 7)], 56));
                    case 7:
                        l = r(l, i([0, a.charCodeAt(m + 6)], 48));
                    case 6:
                        l = r(l, i([0, a.charCodeAt(m + 5)], 40));
                    case 5:
                        l = r(l, i([0, a.charCodeAt(m + 4)], 32));
                    case 4:
                        l = r(l, i([0, a.charCodeAt(m + 3)], 24));
                    case 3:
                        l = r(l, i([0, a.charCodeAt(m + 2)], 16));
                    case 2:
                        l = r(l, i([0, a.charCodeAt(m + 1)], 8));
                    case 1:
                        l = r(l, [0, a.charCodeAt(m)]), l = t(l, f), l = n(l, 31), l = t(l, g), d = r(d, l)
                }
                return d = r(d, [0, a.length]), h = r(h, [0, a.length]), d = e(d, h), h = e(h, d), d = o(d), h = o(h), d = e(d, h), h = e(h, d), ("00000000" + (d[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (d[1] >>> 0).toString(16)).slice(-8) + ("00000000" + (h[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (h[1] >>> 0).toString(16)).slice(-8)
            },
            s = {
                preprocessor: null,
                audio: {
                    timeout: 1e3,
                    excludeIOS11: !0
                },
                fonts: {
                    swfContainerId: "fingerprintjs2",
                    swfPath: "flash/compiled/FontList.swf",
                    userDefinedFonts: [],
                    extendedJsFonts: !1
                },
                screen: {
                    detectScreenOrientation: !0
                },
                plugins: {
                    sortPluginsFor: [/palemoon/i],
                    excludeIE: !1
                },
                extraComponents: [],
                excludes: {
                    enumerateDevices: !0,
                    pixelRatio: !0,
                    doNotTrack: !0,
                    fontsFlash: !0
                },
                NOT_AVAILABLE: "not available",
                ERROR: "error",
                EXCLUDED: "excluded"
            },
            c = function(e, t) {
                if (Array.prototype.forEach && e.forEach === Array.prototype.forEach) e.forEach(t);
                else if (e.length === +e.length)
                    for (var n = 0, i = e.length; n < i; n++) t(e[n], n, e);
                else
                    for (var r in e) e.hasOwnProperty(r) && t(e[r], r, e)
            },
            u = function(e, t) {
                var n = [];
                return null == e ? n : Array.prototype.map && e.map === Array.prototype.map ? e.map(t) : (c(e, function(e, i, r) {
                    n.push(t(e, i, r))
                }), n)
            },
            d = function() {
                return navigator.mediaDevices && navigator.mediaDevices.enumerateDevices
            },
            h = function(e) {
                var t = [window.screen.width, window.screen.height];
                return e.screen.detectScreenOrientation && t.sort().reverse(), t
            },
            l = function(e) {
                if (window.screen.availWidth && window.screen.availHeight) {
                    var t = [window.screen.availHeight, window.screen.availWidth];
                    return e.screen.detectScreenOrientation && t.sort().reverse(), t
                }
                return e.NOT_AVAILABLE
            },
            p = function(e) {
                if (null == navigator.plugins) return e.NOT_AVAILABLE;
                for (var t = [], n = 0, i = navigator.plugins.length; n < i; n++) navigator.plugins[n] && t.push(navigator.plugins[n]);
                return g(e) && (t = t.sort(function(e, t) {
                    return e.name > t.name ? 1 : e.name < t.name ? -1 : 0
                })), u(t, function(e) {
                    var t = u(e, function(e) {
                        return [e.type, e.suffixes]
                    });
                    return [e.name, e.description, t]
                })
            },
            f = function(e) {
                var t = [];
                if (Object.getOwnPropertyDescriptor && Object.getOwnPropertyDescriptor(window, "ActiveXObject") || "ActiveXObject" in window) {
                    t = u(["AcroPDF.PDF", "Adodb.Stream", "AgControl.AgControl", "DevalVRXCtrl.DevalVRXCtrl.1", "MacromediaFlashPaper.MacromediaFlashPaper", "Msxml2.DOMDocument", "Msxml2.XMLHTTP", "PDF.PdfCtrl", "QuickTime.QuickTime", "QuickTimeCheckObject.QuickTimeCheck.1", "RealPlayer", "RealPlayer.RealPlayer(tm) ActiveX Control (32-bit)", "RealVideo.RealVideo(tm) ActiveX Control (32-bit)", "Scripting.Dictionary", "SWCtl.SWCtl", "Shell.UIHelper", "ShockwaveFlash.ShockwaveFlash", "Skype.Detection", "TDCCtl.TDCCtl", "WMPlayer.OCX", "rmocx.RealPlayer G2 Control", "rmocx.RealPlayer G2 Control.1"], function(t) {
                        try {
                            return new window.ActiveXObject(t), t
                        } catch (t) {
                            return e.ERROR
                        }
                    })
                } else t.push(e.NOT_AVAILABLE);
                return navigator.plugins && (t = t.concat(p(e))), t
            },
            g = function(e) {
                for (var t = !1, n = 0, i = e.plugins.sortPluginsFor.length; n < i; n++) {
                    var r = e.plugins.sortPluginsFor[n];
                    if (navigator.userAgent.match(r)) {
                        t = !0;
                        break
                    }
                }
                return t
            },
            m = function(e) {
                try {
                    return !!window.sessionStorage
                } catch (t) {
                    return e.ERROR
                }
            },
            _ = function(e) {
                try {
                    return !!window.localStorage
                } catch (t) {
                    return e.ERROR
                }
            },
            v = function(e) {
                try {
                    return !!window.indexedDB
                } catch (t) {
                    return e.ERROR
                }
            },
            S = function(e) {
                return navigator.hardwareConcurrency ? navigator.hardwareConcurrency : e.NOT_AVAILABLE
            },
            T = function(e) {
                return navigator.cpuClass || e.NOT_AVAILABLE
            },
            b = function(e) {
                return navigator.platform ? navigator.platform : e.NOT_AVAILABLE
            },
            E = function(e) {
                return navigator.doNotTrack ? navigator.doNotTrack : navigator.msDoNotTrack ? navigator.msDoNotTrack : window.doNotTrack ? window.doNotTrack : e.NOT_AVAILABLE
            },
            y = function() {
                var e, t = 0;
                void 0 !== navigator.maxTouchPoints ? t = navigator.maxTouchPoints : void 0 !== navigator.msMaxTouchPoints && (t = navigator.msMaxTouchPoints);
                try {
                    document.createEvent("TouchEvent"), e = !0
                } catch (t) {
                    e = !1
                }
                var n = "ontouchstart" in window;
                return [t, e, n]
            },
            w = function(e) {
                var t = [],
                    n = document.createElement("canvas");
                n.width = 2e3, n.height = 200, n.style.display = "inline";
                var i = n.getContext("2d");
                return i.rect(0, 0, 10, 10), i.rect(2, 2, 6, 6), t.push("canvas winding:" + (!1 === i.isPointInPath(5, 5, "evenodd") ? "yes" : "no")), i.textBaseline = "alphabetic", i.fillStyle = "#f60", i.fillRect(125, 1, 62, 20), i.fillStyle = "#069", e.dontUseFakeFontInCanvas ? i.font = "11pt Arial" : i.font = "11pt no-real-font-123", i.fillText("Cwm fjordbank glyphs vext quiz, 😃", 2, 15), i.fillStyle = "rgba(102, 204, 0, 0.2)", i.font = "18pt Arial", i.fillText("Cwm fjordbank glyphs vext quiz, 😃", 4, 45), i.globalCompositeOperation = "multiply", i.fillStyle = "rgb(255,0,255)", i.beginPath(), i.arc(50, 50, 50, 0, 2 * Math.PI, !0), i.closePath(), i.fill(), i.fillStyle = "rgb(0,255,255)", i.beginPath(), i.arc(100, 50, 50, 0, 2 * Math.PI, !0), i.closePath(), i.fill(), i.fillStyle = "rgb(255,255,0)", i.beginPath(), i.arc(75, 100, 50, 0, 2 * Math.PI, !0), i.closePath(), i.fill(), i.fillStyle = "rgb(255,0,255)", i.arc(75, 75, 75, 0, 2 * Math.PI, !0), i.arc(75, 75, 25, 0, 2 * Math.PI, !0), i.fill("evenodd"), n.toDataURL && t.push("canvas fp:" + n.toDataURL()), t
            },
            A = function() {
                var e, t = function(t) {
                    return e.clearColor(0, 0, 0, 1), e.enable(e.DEPTH_TEST), e.depthFunc(e.LEQUAL), e.clear(e.COLOR_BUFFER_BIT | e.DEPTH_BUFFER_BIT), "[" + t[0] + ", " + t[1] + "]"
                };
                if (!(e = N())) return null;
                var n = [],
                    i = e.createBuffer();
                e.bindBuffer(e.ARRAY_BUFFER, i);
                var r = new Float32Array([-.2, -.9, 0, .4, -.26, 0, 0, .732134444, 0]);
                e.bufferData(e.ARRAY_BUFFER, r, e.STATIC_DRAW), i.itemSize = 3, i.numItems = 3;
                var o = e.createProgram(),
                    a = e.createShader(e.VERTEX_SHADER);
                e.shaderSource(a, "attribute vec2 attrVertex;varying vec2 varyinTexCoordinate;uniform vec2 uniformOffset;void main(){varyinTexCoordinate=attrVertex+uniformOffset;gl_Position=vec4(attrVertex,0,1);}"), e.compileShader(a);
                var s = e.createShader(e.FRAGMENT_SHADER);
                e.shaderSource(s, "precision mediump float;varying vec2 varyinTexCoordinate;void main() {gl_FragColor=vec4(varyinTexCoordinate,0,1);}"), e.compileShader(s), e.attachShader(o, a), e.attachShader(o, s), e.linkProgram(o), e.useProgram(o), o.vertexPosAttrib = e.getAttribLocation(o, "attrVertex"), o.offsetUniform = e.getUniformLocation(o, "uniformOffset"), e.enableVertexAttribArray(o.vertexPosArray), e.vertexAttribPointer(o.vertexPosAttrib, i.itemSize, e.FLOAT, !1, 0, 0), e.uniform2f(o.offsetUniform, 1, 1), e.drawArrays(e.TRIANGLE_STRIP, 0, i.numItems);
                try {
                    n.push(e.canvas.toDataURL())
                } catch (e) {}
                n.push("extensions:" + (e.getSupportedExtensions() || []).join(";")), n.push("webgl aliased line width range:" + t(e.getParameter(e.ALIASED_LINE_WIDTH_RANGE))), n.push("webgl aliased point size range:" + t(e.getParameter(e.ALIASED_POINT_SIZE_RANGE))), n.push("webgl alpha bits:" + e.getParameter(e.ALPHA_BITS)), n.push("webgl antialiasing:" + (e.getContextAttributes().antialias ? "yes" : "no")), n.push("webgl blue bits:" + e.getParameter(e.BLUE_BITS)), n.push("webgl depth bits:" + e.getParameter(e.DEPTH_BITS)), n.push("webgl green bits:" + e.getParameter(e.GREEN_BITS)), n.push("webgl max anisotropy:" + function(e) {
                    var t = e.getExtension("EXT_texture_filter_anisotropic") || e.getExtension("WEBKIT_EXT_texture_filter_anisotropic") || e.getExtension("MOZ_EXT_texture_filter_anisotropic");
                    if (t) {
                        var n = e.getParameter(t.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
                        return 0 === n && (n = 2), n
                    }
                    return null
                }(e)), n.push("webgl max combined texture image units:" + e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS)), n.push("webgl max cube map texture size:" + e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE)), n.push("webgl max fragment uniform vectors:" + e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS)), n.push("webgl max render buffer size:" + e.getParameter(e.MAX_RENDERBUFFER_SIZE)), n.push("webgl max texture image units:" + e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS)), n.push("webgl max texture size:" + e.getParameter(e.MAX_TEXTURE_SIZE)), n.push("webgl max varying vectors:" + e.getParameter(e.MAX_VARYING_VECTORS)), n.push("webgl max vertex attribs:" + e.getParameter(e.MAX_VERTEX_ATTRIBS)), n.push("webgl max vertex texture image units:" + e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS)), n.push("webgl max vertex uniform vectors:" + e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS)), n.push("webgl max viewport dims:" + t(e.getParameter(e.MAX_VIEWPORT_DIMS))), n.push("webgl red bits:" + e.getParameter(e.RED_BITS)), n.push("webgl renderer:" + e.getParameter(e.RENDERER)), n.push("webgl shading language version:" + e.getParameter(e.SHADING_LANGUAGE_VERSION)), n.push("webgl stencil bits:" + e.getParameter(e.STENCIL_BITS)), n.push("webgl vendor:" + e.getParameter(e.VENDOR)), n.push("webgl version:" + e.getParameter(e.VERSION));
                try {
                    var u = e.getExtension("WEBGL_debug_renderer_info");
                    u && (n.push("webgl unmasked vendor:" + e.getParameter(u.UNMASKED_VENDOR_WEBGL)), n.push("webgl unmasked renderer:" + e.getParameter(u.UNMASKED_RENDERER_WEBGL)))
                } catch (e) {}
                return e.getShaderPrecisionFormat ? (c(["FLOAT", "INT"], function(t) {
                    c(["VERTEX", "FRAGMENT"], function(i) {
                        c(["HIGH", "MEDIUM", "LOW"], function(r) {
                            c(["precision", "rangeMin", "rangeMax"], function(o) {
                                var a = e.getShaderPrecisionFormat(e[i + "_SHADER"], e[r + "_" + t])[o];
                                "precision" !== o && (o = "precision " + o);
                                var s = ["webgl ", i.toLowerCase(), " shader ", r.toLowerCase(), " ", t.toLowerCase(), " ", o, ":", a].join("");
                                n.push(s)
                            })
                        })
                    })
                }), n) : n
            },
            P = function() {
                try {
                    var e = N(),
                        t = e.getExtension("WEBGL_debug_renderer_info");
                    return e.getParameter(t.UNMASKED_VENDOR_WEBGL) + "~" + e.getParameter(t.UNMASKED_RENDERER_WEBGL)
                } catch (e) {
                    return null
                }
            },
            I = function() {
                var e = document.createElement("div");
                e.innerHTML = "&nbsp;", e.className = "adsbox";
                var t = !1;
                try {
                    document.body.appendChild(e), t = 0 === document.getElementsByClassName("adsbox")[0].offsetHeight, document.body.removeChild(e)
                } catch (e) {
                    t = !1
                }
                return t
            },
            C = function() {
                if (void 0 !== navigator.languages) try {
                    var e = navigator.languages[0].substr(0, 2);
                    if (e !== navigator.language.substr(0, 2)) return !0
                } catch (e) {
                    return !0
                }
                return !1
            },
            D = function() {
                return window.screen.width < window.screen.availWidth || window.screen.height < window.screen.availHeight
            },
            L = function() {
                var e, t = navigator.userAgent.toLowerCase(),
                    n = navigator.oscpu,
                    i = navigator.platform.toLowerCase();
                e = t.indexOf("windows phone") >= 0 ? "Windows Phone" : t.indexOf("win") >= 0 ? "Windows" : t.indexOf("android") >= 0 ? "Android" : t.indexOf("linux") >= 0 || t.indexOf("cros") >= 0 ? "Linux" : t.indexOf("iphone") >= 0 || t.indexOf("ipad") >= 0 ? "iOS" : t.indexOf("mac") >= 0 ? "Mac" : "Other";
                var r = "ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
                if (r && "Windows Phone" !== e && "Android" !== e && "iOS" !== e && "Other" !== e) return !0;
                if (void 0 !== n) {
                    if ((n = n.toLowerCase()).indexOf("win") >= 0 && "Windows" !== e && "Windows Phone" !== e) return !0;
                    if (n.indexOf("linux") >= 0 && "Linux" !== e && "Android" !== e) return !0;
                    if (n.indexOf("mac") >= 0 && "Mac" !== e && "iOS" !== e) return !0;
                    if ((-1 === n.indexOf("win") && -1 === n.indexOf("linux") && -1 === n.indexOf("mac")) != ("Other" === e)) return !0
                }
                if (i.indexOf("win") >= 0 && "Windows" !== e && "Windows Phone" !== e) return !0;
                if ((i.indexOf("linux") >= 0 || i.indexOf("android") >= 0 || i.indexOf("pike") >= 0) && "Linux" !== e && "Android" !== e) return !0;
                if ((i.indexOf("mac") >= 0 || i.indexOf("ipad") >= 0 || i.indexOf("ipod") >= 0 || i.indexOf("iphone") >= 0) && "Mac" !== e && "iOS" !== e) return !0;
                var o = i.indexOf("win") < 0 && i.indexOf("linux") < 0 && i.indexOf("mac") < 0 && i.indexOf("iphone") < 0 && i.indexOf("ipad") < 0;
                return o !== ("Other" === e) || void 0 === navigator.plugins && "Windows" !== e && "Windows Phone" !== e
            },
            O = function() {
                var e, t = navigator.userAgent.toLowerCase(),
                    n = navigator.productSub;
                if (("Chrome" === (e = t.indexOf("firefox") >= 0 ? "Firefox" : t.indexOf("opera") >= 0 || t.indexOf("opr") >= 0 ? "Opera" : t.indexOf("chrome") >= 0 ? "Chrome" : t.indexOf("safari") >= 0 ? "Safari" : t.indexOf("trident") >= 0 ? "Internet Explorer" : "Other") || "Safari" === e || "Opera" === e) && "20030107" !== n) return !0;
                var i, r = eval.toString().length;
                if (37 === r && "Safari" !== e && "Firefox" !== e && "Other" !== e) return !0;
                if (39 === r && "Internet Explorer" !== e && "Other" !== e) return !0;
                if (33 === r && "Chrome" !== e && "Opera" !== e && "Other" !== e) return !0;
                try {
                    throw "a"
                } catch (e) {
                    try {
                        e.toSource(), i = !0
                    } catch (e) {
                        i = !1
                    }
                }
                return i && "Firefox" !== e && "Other" !== e
            },
            M = function() {
                var e = document.createElement("canvas");
                return !(!e.getContext || !e.getContext("2d"))
            },
            R = function() {
                if (!M()) return !1;
                var e = N();
                return !!window.WebGLRenderingContext && !!e
            },
            k = function() {
                return "Microsoft Internet Explorer" === navigator.appName || !("Netscape" !== navigator.appName || !/Trident/.test(navigator.userAgent))
            },
            U = function() {
                return void 0 !== window.swfobject
            },
            x = function() {
                return window.swfobject.hasFlashPlayerVersion("9.0.0")
            },
            B = function(e, t) {
                window.___fp_swf_loaded = function(t) {
                    e(t)
                };
                var n = t.fonts.swfContainerId;
                ! function(e) {
                    var t = document.createElement("div");
                    t.setAttribute("id", e.fonts.swfContainerId), document.body.appendChild(t)
                }();
                var i = {
                    onReady: "___fp_swf_loaded"
                };
                window.swfobject.embedSWF(t.fonts.swfPath, n, "1", "1", "9.0.0", !1, i, {
                    allowScriptAccess: "always",
                    menu: "false"
                }, {})
            },
            N = function() {
                var e = document.createElement("canvas"),
                    t = null;
                try {
                    t = e.getContext("webgl") || e.getContext("experimental-webgl")
                } catch (e) {}
                return t || (t = null), t
            },
            H = [{
                key: "userAgent",
                getData: function(e) {
                    e(navigator.userAgent)
                }
            }, {
                key: "webdriver",
                getData: function(e, t) {
                    e(null == navigator.webdriver ? t.NOT_AVAILABLE : navigator.webdriver)
                }
            }, {
                key: "language",
                getData: function(e, t) {
                    e(navigator.language || navigator.userLanguage || navigator.browserLanguage || navigator.systemLanguage || t.NOT_AVAILABLE)
                }
            }, {
                key: "colorDepth",
                getData: function(e, t) {
                    e(window.screen.colorDepth || t.NOT_AVAILABLE)
                }
            }, {
                key: "deviceMemory",
                getData: function(e, t) {
                    e(navigator.deviceMemory || t.NOT_AVAILABLE)
                }
            }, {
                key: "pixelRatio",
                getData: function(e, t) {
                    e(window.devicePixelRatio || t.NOT_AVAILABLE)
                }
            }, {
                key: "hardwareConcurrency",
                getData: function(e, t) {
                    e(S(t))
                }
            }, {
                key: "screenResolution",
                getData: function(e, t) {
                    e(h(t))
                }
            }, {
                key: "availableScreenResolution",
                getData: function(e, t) {
                    e(l(t))
                }
            }, {
                key: "timezoneOffset",
                getData: function(e) {
                    e((new Date).getTimezoneOffset())
                }
            }, {
                key: "timezone",
                getData: function(e, t) {
                    window.Intl && window.Intl.DateTimeFormat ? e((new window.Intl.DateTimeFormat).resolvedOptions().timeZone) : e(t.NOT_AVAILABLE)
                }
            }, {
                key: "sessionStorage",
                getData: function(e, t) {
                    e(m(t))
                }
            }, {
                key: "localStorage",
                getData: function(e, t) {
                    e(_(t))
                }
            }, {
                key: "indexedDb",
                getData: function(e, t) {
                    e(v(t))
                }
            }, {
                key: "addBehavior",
                getData: function(e) {
                    e(!(!document.body || !document.body.addBehavior))
                }
            }, {
                key: "openDatabase",
                getData: function(e) {
                    e(!!window.openDatabase)
                }
            }, {
                key: "cpuClass",
                getData: function(e, t) {
                    e(T(t))
                }
            }, {
                key: "platform",
                getData: function(e, t) {
                    e(b(t))
                }
            }, {
                key: "doNotTrack",
                getData: function(e, t) {
                    e(E(t))
                }
            }, {
                key: "plugins",
                getData: function(e, t) {
                    k() ? t.plugins.excludeIE ? e(t.EXCLUDED) : e(f(t)) : e(p(t))
                }
            }, {
                key: "canvas",
                getData: function(e, t) {
                    if (M()) return void e(w(t));
                    e(t.NOT_AVAILABLE)
                }
            }, {
                key: "webgl",
                getData: function(e, t) {
                    if (R()) return void e(A());
                    e(t.NOT_AVAILABLE)
                }
            }, {
                key: "webglVendorAndRenderer",
                getData: function(e) {
                    if (R()) return void e(P());
                    e()
                }
            }, {
                key: "adBlock",
                getData: function(e) {
                    e(I())
                }
            }, {
                key: "hasLiedLanguages",
                getData: function(e) {
                    e(C())
                }
            }, {
                key: "hasLiedResolution",
                getData: function(e) {
                    e(D())
                }
            }, {
                key: "hasLiedOs",
                getData: function(e) {
                    e(L())
                }
            }, {
                key: "hasLiedBrowser",
                getData: function(e) {
                    e(O())
                }
            }, {
                key: "touchSupport",
                getData: function(e) {
                    e(y())
                }
            }, {
                key: "fonts",
                getData: function(e, t) {
                    var n = ["monospace", "sans-serif", "serif"],
                        i = ["Andale Mono", "Arial", "Arial Black", "Arial Hebrew", "Arial MT", "Arial Narrow", "Arial Rounded MT Bold", "Arial Unicode MS", "Bitstream Vera Sans Mono", "Book Antiqua", "Bookman Old Style", "Calibri", "Cambria", "Cambria Math", "Century", "Century Gothic", "Century Schoolbook", "Comic Sans", "Comic Sans MS", "Consolas", "Courier", "Courier New", "Geneva", "Georgia", "Helvetica", "Helvetica Neue", "Impact", "Lucida Bright", "Lucida Calligraphy", "Lucida Console", "Lucida Fax", "LUCIDA GRANDE", "Lucida Handwriting", "Lucida Sans", "Lucida Sans Typewriter", "Lucida Sans Unicode", "Microsoft Sans Serif", "Monaco", "Monotype Corsiva", "MS Gothic", "MS Outlook", "MS PGothic", "MS Reference Sans Serif", "MS Sans Serif", "MS Serif", "MYRIAD", "MYRIAD PRO", "Palatino", "Palatino Linotype", "Segoe Print", "Segoe Script", "Segoe UI", "Segoe UI Light", "Segoe UI Semibold", "Segoe UI Symbol", "Tahoma", "Times", "Times New Roman", "Times New Roman PS", "Trebuchet MS", "Verdana", "Wingdings", "Wingdings 2", "Wingdings 3"];
                    if (t.fonts.extendedJsFonts) {
                        i = i.concat(["Abadi MT Condensed Light", "Academy Engraved LET", "ADOBE CASLON PRO", "Adobe Garamond", "ADOBE GARAMOND PRO", "Agency FB", "Aharoni", "Albertus Extra Bold", "Albertus Medium", "Algerian", "Amazone BT", "American Typewriter", "American Typewriter Condensed", "AmerType Md BT", "Andalus", "Angsana New", "AngsanaUPC", "Antique Olive", "Aparajita", "Apple Chancery", "Apple Color Emoji", "Apple SD Gothic Neo", "Arabic Typesetting", "ARCHER", "ARNO PRO", "Arrus BT", "Aurora Cn BT", "AvantGarde Bk BT", "AvantGarde Md BT", "AVENIR", "Ayuthaya", "Bandy", "Bangla Sangam MN", "Bank Gothic", "BankGothic Md BT", "Baskerville", "Baskerville Old Face", "Batang", "BatangChe", "Bauer Bodoni", "Bauhaus 93", "Bazooka", "Bell MT", "Bembo", "Benguiat Bk BT", "Berlin Sans FB", "Berlin Sans FB Demi", "Bernard MT Condensed", "BernhardFashion BT", "BernhardMod BT", "Big Caslon", "BinnerD", "Blackadder ITC", "BlairMdITC TT", "Bodoni 72", "Bodoni 72 Oldstyle", "Bodoni 72 Smallcaps", "Bodoni MT", "Bodoni MT Black", "Bodoni MT Condensed", "Bodoni MT Poster Compressed", "Bookshelf Symbol 7", "Boulder", "Bradley Hand", "Bradley Hand ITC", "Bremen Bd BT", "Britannic Bold", "Broadway", "Browallia New", "BrowalliaUPC", "Brush Script MT", "Californian FB", "Calisto MT", "Calligrapher", "Candara", "CaslonOpnface BT", "Castellar", "Centaur", "Cezanne", "CG Omega", "CG Times", "Chalkboard", "Chalkboard SE", "Chalkduster", "Charlesworth", "Charter Bd BT", "Charter BT", "Chaucer", "ChelthmITC Bk BT", "Chiller", "Clarendon", "Clarendon Condensed", "CloisterBlack BT", "Cochin", "Colonna MT", "Constantia", "Cooper Black", "Copperplate", "Copperplate Gothic", "Copperplate Gothic Bold", "Copperplate Gothic Light", "CopperplGoth Bd BT", "Corbel", "Cordia New", "CordiaUPC", "Cornerstone", "Coronet", "Cuckoo", "Curlz MT", "DaunPenh", "Dauphin", "David", "DB LCD Temp", "DELICIOUS", "Denmark", "DFKai-SB", "Didot", "DilleniaUPC", "DIN", "DokChampa", "Dotum", "DotumChe", "Ebrima", "Edwardian Script ITC", "Elephant", "English 111 Vivace BT", "Engravers MT", "EngraversGothic BT", "Eras Bold ITC", "Eras Demi ITC", "Eras Light ITC", "Eras Medium ITC", "EucrosiaUPC", "Euphemia", "Euphemia UCAS", "EUROSTILE", "Exotc350 Bd BT", "FangSong", "Felix Titling", "Fixedsys", "FONTIN", "Footlight MT Light", "Forte", "FrankRuehl", "Fransiscan", "Freefrm721 Blk BT", "FreesiaUPC", "Freestyle Script", "French Script MT", "FrnkGothITC Bk BT", "Fruitger", "FRUTIGER", "Futura", "Futura Bk BT", "Futura Lt BT", "Futura Md BT", "Futura ZBlk BT", "FuturaBlack BT", "Gabriola", "Galliard BT", "Gautami", "Geeza Pro", "Geometr231 BT", "Geometr231 Hv BT", "Geometr231 Lt BT", "GeoSlab 703 Lt BT", "GeoSlab 703 XBd BT", "Gigi", "Gill Sans", "Gill Sans MT", "Gill Sans MT Condensed", "Gill Sans MT Ext Condensed Bold", "Gill Sans Ultra Bold", "Gill Sans Ultra Bold Condensed", "Gisha", "Gloucester MT Extra Condensed", "GOTHAM", "GOTHAM BOLD", "Goudy Old Style", "Goudy Stout", "GoudyHandtooled BT", "GoudyOLSt BT", "Gujarati Sangam MN", "Gulim", "GulimChe", "Gungsuh", "GungsuhChe", "Gurmukhi MN", "Haettenschweiler", "Harlow Solid Italic", "Harrington", "Heather", "Heiti SC", "Heiti TC", "HELV", "Herald", "High Tower Text", "Hiragino Kaku Gothic ProN", "Hiragino Mincho ProN", "Hoefler Text", "Humanst 521 Cn BT", "Humanst521 BT", "Humanst521 Lt BT", "Imprint MT Shadow", "Incised901 Bd BT", "Incised901 BT", "Incised901 Lt BT", "INCONSOLATA", "Informal Roman", "Informal011 BT", "INTERSTATE", "IrisUPC", "Iskoola Pota", "JasmineUPC", "Jazz LET", "Jenson", "Jester", "Jokerman", "Juice ITC", "Kabel Bk BT", "Kabel Ult BT", "Kailasa", "KaiTi", "Kalinga", "Kannada Sangam MN", "Kartika", "Kaufmann Bd BT", "Kaufmann BT", "Khmer UI", "KodchiangUPC", "Kokila", "Korinna BT", "Kristen ITC", "Krungthep", "Kunstler Script", "Lao UI", "Latha", "Leelawadee", "Letter Gothic", "Levenim MT", "LilyUPC", "Lithograph", "Lithograph Light", "Long Island", "Lydian BT", "Magneto", "Maiandra GD", "Malayalam Sangam MN", "Malgun Gothic", "Mangal", "Marigold", "Marion", "Marker Felt", "Market", "Marlett", "Matisse ITC", "Matura MT Script Capitals", "Meiryo", "Meiryo UI", "Microsoft Himalaya", "Microsoft JhengHei", "Microsoft New Tai Lue", "Microsoft PhagsPa", "Microsoft Tai Le", "Microsoft Uighur", "Microsoft YaHei", "Microsoft Yi Baiti", "MingLiU", "MingLiU_HKSCS", "MingLiU_HKSCS-ExtB", "MingLiU-ExtB", "Minion", "Minion Pro", "Miriam", "Miriam Fixed", "Mistral", "Modern", "Modern No. 20", "Mona Lisa Solid ITC TT", "Mongolian Baiti", "MONO", "MoolBoran", "Mrs Eaves", "MS LineDraw", "MS Mincho", "MS PMincho", "MS Reference Specialty", "MS UI Gothic", "MT Extra", "MUSEO", "MV Boli", "Nadeem", "Narkisim", "NEVIS", "News Gothic", "News GothicMT", "NewsGoth BT", "Niagara Engraved", "Niagara Solid", "Noteworthy", "NSimSun", "Nyala", "OCR A Extended", "Old Century", "Old English Text MT", "Onyx", "Onyx BT", "OPTIMA", "Oriya Sangam MN", "OSAKA", "OzHandicraft BT", "Palace Script MT", "Papyrus", "Parchment", "Party LET", "Pegasus", "Perpetua", "Perpetua Titling MT", "PetitaBold", "Pickwick", "Plantagenet Cherokee", "Playbill", "PMingLiU", "PMingLiU-ExtB", "Poor Richard", "Poster", "PosterBodoni BT", "PRINCETOWN LET", "Pristina", "PTBarnum BT", "Pythagoras", "Raavi", "Rage Italic", "Ravie", "Ribbon131 Bd BT", "Rockwell", "Rockwell Condensed", "Rockwell Extra Bold", "Rod", "Roman", "Sakkal Majalla", "Santa Fe LET", "Savoye LET", "Sceptre", "Script", "Script MT Bold", "SCRIPTINA", "Serifa", "Serifa BT", "Serifa Th BT", "ShelleyVolante BT", "Sherwood", "Shonar Bangla", "Showcard Gothic", "Shruti", "Signboard", "SILKSCREEN", "SimHei", "Simplified Arabic", "Simplified Arabic Fixed", "SimSun", "SimSun-ExtB", "Sinhala Sangam MN", "Sketch Rockwell", "Skia", "Small Fonts", "Snap ITC", "Snell Roundhand", "Socket", "Souvenir Lt BT", "Staccato222 BT", "Steamer", "Stencil", "Storybook", "Styllo", "Subway", "Swis721 BlkEx BT", "Swiss911 XCm BT", "Sylfaen", "Synchro LET", "System", "Tamil Sangam MN", "Technical", "Teletype", "Telugu Sangam MN", "Tempus Sans ITC", "Terminal", "Thonburi", "Traditional Arabic", "Trajan", "TRAJAN PRO", "Tristan", "Tubular", "Tunga", "Tw Cen MT", "Tw Cen MT Condensed", "Tw Cen MT Condensed Extra Bold", "TypoUpright BT", "Unicorn", "Univers", "Univers CE 55 Medium", "Univers Condensed", "Utsaah", "Vagabond", "Vani", "Vijaya", "Viner Hand ITC", "VisualUI", "Vivaldi", "Vladimir Script", "Vrinda", "Westminster", "WHITNEY", "Wide Latin", "ZapfEllipt BT", "ZapfHumnst BT", "ZapfHumnst Dm BT", "Zapfino", "Zurich BlkEx BT", "Zurich Ex BT", "ZWAdobeF"])
                    }
                    i = (i = i.concat(t.fonts.userDefinedFonts)).filter(function(e, t) {
                        return i.indexOf(e) === t
                    });
                    var r = document.getElementsByTagName("body")[0],
                        o = document.createElement("div"),
                        a = document.createElement("div"),
                        s = {},
                        c = {},
                        u = function() {
                            var e = document.createElement("span");
                            return e.style.position = "absolute", e.style.left = "-9999px", e.style.fontSize = "72px", e.style.fontStyle = "normal", e.style.fontWeight = "normal", e.style.letterSpacing = "normal", e.style.lineBreak = "auto", e.style.lineHeight = "normal", e.style.textTransform = "none", e.style.textAlign = "left", e.style.textDecoration = "none", e.style.textShadow = "none", e.style.whiteSpace = "normal", e.style.wordBreak = "normal", e.style.wordSpacing = "normal", e.innerHTML = "mmmmmmmmmmlli", e
                        },
                        d = function(e, t) {
                            var n = u();
                            return n.style.fontFamily = "'" + e + "'," + t, n
                        },
                        h = function(e) {
                            for (var t = !1, i = 0; i < n.length; i++)
                                if (t = e[i].offsetWidth !== s[n[i]] || e[i].offsetHeight !== c[n[i]]) return t;
                            return t
                        },
                        l = function() {
                            for (var e = [], t = 0, i = n.length; t < i; t++) {
                                var r = u();
                                r.style.fontFamily = n[t], o.appendChild(r), e.push(r)
                            }
                            return e
                        }();
                    r.appendChild(o);
                    for (var p = 0, f = n.length; p < f; p++) s[n[p]] = l[p].offsetWidth, c[n[p]] = l[p].offsetHeight;
                    var g = function() {
                        for (var e = {}, t = 0, r = i.length; t < r; t++) {
                            for (var o = [], s = 0, c = n.length; s < c; s++) {
                                var u = d(i[t], n[s]);
                                a.appendChild(u), o.push(u)
                            }
                            e[i[t]] = o
                        }
                        return e
                    }();
                    r.appendChild(a);
                    for (var m = [], _ = 0, v = i.length; _ < v; _++) h(g[i[_]]) && m.push(i[_]);
                    r.removeChild(a), r.removeChild(o), e(m)
                },
                pauseBefore: !0
            }, {
                key: "fontsFlash",
                getData: function(e, t) {
                    if (!U()) return e("swf object not loaded");
                    if (!x()) return e("flash not installed");
                    if (!t.fonts.swfPath) return e("missing options.fonts.swfPath");
                    B(function(t) {
                        e(t)
                    }, t)
                },
                pauseBefore: !0
            }, {
                key: "audio",
                getData: function(e, t) {
                    var n = t.audio;
                    if (n.excludeIOS11 && navigator.userAgent.match(/OS 11.+Version\/11.+Safari/)) return e(t.EXCLUDED);
                    var i = window.OfflineAudioContext || window.webkitOfflineAudioContext;
                    if (null == i) return e(t.NOT_AVAILABLE);
                    var r = new i(1, 44100, 44100),
                        o = r.createOscillator();
                    o.type = "triangle", o.frequency.setValueAtTime(1e4, r.currentTime);
                    var a = r.createDynamicsCompressor();
                    c([
                        ["threshold", -50],
                        ["knee", 40],
                        ["ratio", 12],
                        ["reduction", -20],
                        ["attack", 0],
                        ["release", .25]
                    ], function(e) {
                        void 0 !== a[e[0]] && "function" == typeof a[e[0]].setValueAtTime && a[e[0]].setValueAtTime(e[1], r.currentTime)
                    }), o.connect(a), a.connect(r.destination), o.start(0), r.startRendering();
                    var s = setTimeout(function() {
                        return console.warn('Audio fingerprint timed out. Please report bug at https://github.com/Valve/fingerprintjs2 with your user agent: "' + navigator.userAgent + '".'), r.oncomplete = function() {}, r = null, e("audioTimeout")
                    }, n.timeout);
                    r.oncomplete = function(t) {
                        var n;
                        try {
                            clearTimeout(s), n = t.renderedBuffer.getChannelData(0).slice(4500, 5e3).reduce(function(e, t) {
                                return e + Math.abs(t)
                            }, 0).toString(), o.disconnect(), a.disconnect()
                        } catch (t) {
                            return void e(t)
                        }
                        e(n)
                    }
                }
            }, {
                key: "enumerateDevices",
                getData: function(e, t) {
                    if (!d()) return e(t.NOT_AVAILABLE);
                    navigator.mediaDevices.enumerateDevices().then(function(t) {
                        e(t.map(function(e) {
                            return "id=" + e.deviceId + ";gid=" + e.groupId + ";" + e.kind + ";" + e.label
                        }))
                    }).catch(function(t) {
                        e(t)
                    })
                }
            }],
            F = function(e) {
                throw new Error("'new Fingerprint()' is deprecated, see https://github.com/Valve/fingerprintjs2#upgrade-guide-from-182-to-200")
            };
        return F.get = function(e, t) {
            t ? e || (e = {}) : (t = e, e = {}),
                function(e, t) {
                    if (null == t) return e;
                    var n, i;
                    for (i in t) null == (n = t[i]) || Object.prototype.hasOwnProperty.call(e, i) || (e[i] = n)
                }(e, s), e.components = e.extraComponents.concat(H);
            var n = {
                    data: [],
                    addPreprocessedComponent: function(t, i) {
                        "function" == typeof e.preprocessor && (i = e.preprocessor(t, i)), n.data.push({
                            key: t,
                            value: i
                        })
                    }
                },
                i = -1,
                r = function(o) {
                    if ((i += 1) >= e.components.length) t(n.data);
                    else {
                        var a = e.components[i];
                        if (e.excludes[a.key]) r(!1);
                        else {
                            if (!o && a.pauseBefore) return i -= 1, void setTimeout(function() {
                                r(!0)
                            }, 1);
                            try {
                                a.getData(function(e) {
                                    n.addPreprocessedComponent(a.key, e), r(!1)
                                }, e)
                            } catch (e) {
                                n.addPreprocessedComponent(a.key, String(e)), r(!1)
                            }
                        }
                    }
                };
            r(!1)
        }, F.getPromise = function(e) {
            return new Promise(function(t, n) {
                F.get(e, t)
            })
        }, F.getV18 = function(e, t) {
            return null == t && (t = e, e = {}), F.get(e, function(n) {
                for (var i = [], r = 0; r < n.length; r++) {
                    var o = n[r];
                    if (o.value === (e.NOT_AVAILABLE || "not available")) i.push({
                        key: o.key,
                        value: "unknown"
                    });
                    else if ("plugins" === o.key) i.push({
                        key: "plugins",
                        value: u(o.value, function(e) {
                            var t = u(e[2], function(e) {
                                return e.join ? e.join("~") : e
                            }).join(",");
                            return [e[0], e[1], t].join("::")
                        })
                    });
                    else if (-1 !== ["canvas", "webgl"].indexOf(o.key)) i.push({
                        key: o.key,
                        value: o.value.join("~")
                    });
                    else if (-1 !== ["sessionStorage", "localStorage", "indexedDb", "addBehavior", "openDatabase"].indexOf(o.key)) {
                        if (!o.value) continue;
                        i.push({
                            key: o.key,
                            value: 1
                        })
                    } else o.value ? i.push(o.value.join ? {
                        key: o.key,
                        value: o.value.join(";")
                    } : o) : i.push({
                        key: o.key,
                        value: o.value
                    })
                }
                var s = a(u(i, function(e) {
                    return e.value
                }).join("~~~"), 31);
                t(s, i)
            })
        }, F.x64hash128 = a, F.VERSION = "2.1.0", F
    }()
}(0, window._securedTouchDependencies),
function(e) {
    function t(e, n) {
        var i;
        n = n || {}, this._id = t._generateUUID(), this._promise = n.promise || Promise, this._frameId = n.frameId || "CrossStorageClient-" + this._id, this._origin = t._getOrigin(e), this._requests = {}, this._connected = !1, this._closed = !1, this._count = 0, this._timeout = n.timeout || 5e3, this._listener = null, this._installListener(), n.frameId && (i = document.getElementById(n.frameId)), i && this._poll(), i = i || this._createFrame(e), this._hub = i.contentWindow
    }
    t.frameStyle = {
        width: 0,
        height: 0,
        border: "none",
        display: "none",
        position: "absolute",
        top: "-999px",
        left: "-999px"
    }, t._getOrigin = function(e) {
        var t;
        return (t = document.createElement("a")).href = e, t.host || (t = window.location), ((t.protocol && ":" !== t.protocol ? t.protocol : window.location.protocol) + "//" + t.host).replace(/:80$|:443$/, "")
    }, t._generateUUID = function() {
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(e) {
            var t = 16 * Math.random() | 0;
            return ("x" == e ? t : 3 & t | 8).toString(16)
        })
    }, t.prototype.onConnect = function() {
        var e = this;
        return this._connected ? this._promise.resolve() : this._closed ? this._promise.reject(new Error("CrossStorageClient has closed")) : (this._requests.connect || (this._requests.connect = []), new this._promise(function(t, n) {
            var i = setTimeout(function() {
                n(new Error("CrossStorageClient could not connect"))
            }, e._timeout);
            e._requests.connect.push(function(e) {
                if (clearTimeout(i), e) return n(e);
                t()
            })
        }))
    }, t.prototype.set = function(e, t) {
        return this._request("set", {
            key: e,
            value: t
        })
    }, t.prototype.get = function(e) {
        var t = Array.prototype.slice.call(arguments);
        return this._request("get", {
            keys: t
        })
    }, t.prototype.del = function() {
        var e = Array.prototype.slice.call(arguments);
        return this._request("del", {
            keys: e
        })
    }, t.prototype.clear = function() {
        return this._request("clear")
    }, t.prototype.getKeys = function() {
        return this._request("getKeys")
    }, t.prototype.close = function() {
        var e = document.getElementById(this._frameId);
        e && e.parentNode.removeChild(e), window.removeEventListener ? window.removeEventListener("message", this._listener, !1) : window.detachEvent("onmessage", this._listener), this._connected = !1, this._closed = !0
    }, t.prototype._installListener = function() {
        var e = this;
        this._listener = function(t) {
            var n, i, r;
            if (!e._closed && t.data && "string" == typeof t.data && ("null" === t.origin ? "file://" : t.origin) === e._origin)
                if ("cross-storage:unavailable" !== t.data) {
                    if (-1 !== t.data.indexOf("cross-storage:") && !e._connected) {
                        if (e._connected = !0, !e._requests.connect) return;
                        for (n = 0; n < e._requests.connect.length; n++) e._requests.connect[n](i);
                        delete e._requests.connect
                    }
                    if ("cross-storage:ready" !== t.data) {
                        try {
                            r = JSON.parse(t.data)
                        } catch (e) {
                            return
                        }
                        r.id && e._requests[r.id] && e._requests[r.id](r.error, r.result)
                    }
                } else {
                    if (e._closed || e.close(), !e._requests.connect) return;
                    for (i = new Error("Closing client. Could not access localStorage in hub."), n = 0; n < e._requests.connect.length; n++) e._requests.connect[n](i)
                }
        }, window.addEventListener ? window.addEventListener("message", this._listener, !1) : window.attachEvent("onmessage", this._listener)
    }, t.prototype._poll = function() {
        var e, t, n;
        n = "file://" === (e = this)._origin ? "*" : e._origin, t = setInterval(function() {
            if (e._connected) return clearInterval(t);
            e._hub && e._hub.postMessage("cross-storage:poll", n)
        }, 1e3)
    }, t.prototype._createFrame = function(e) {
        var n, i;
        for (i in (n = window.document.createElement("iframe")).id = this._frameId, t.frameStyle) t.frameStyle.hasOwnProperty(i) && (n.style[i] = t.frameStyle[i]);
        return window.document.body.appendChild(n), n.src = e, n
    }, t.prototype._request = function(e, t) {
        var n, i;
        return this._closed ? this._promise.reject(new Error("CrossStorageClient has closed")) : ((i = this)._count++, n = {
            id: this._id + ":" + i._count,
            method: "cross-storage:" + e,
            params: t
        }, new this._promise(function(e, t) {
            var r, o, a;
            r = setTimeout(function() {
                i._requests[n.id] && (delete i._requests[n.id], t(new Error("Timeout: could not perform " + n.method)))
            }, i._timeout), i._requests[n.id] = function(o, a) {
                if (clearTimeout(r), delete i._requests[n.id], o) return t(new Error(o));
                e(a)
            }, Array.prototype.toJSON && (o = Array.prototype.toJSON, Array.prototype.toJSON = null), a = "file://" === i._origin ? "*" : i._origin, i._hub.postMessage(JSON.stringify(n), a), o && (Array.prototype.toJSON = o)
        }))
    }, e.CrossStorageClient = t
}(window),
function(e, t) {
    "use strict";
    "function" != typeof e.CustomEvent && (e.CustomEvent = function() {
        return function(e, t) {
            t = t || {
                bubbles: !1,
                cancelable: !1,
                detail: null
            };
            var n = document.createEvent("CustomEvent");
            return n.initCustomEvent(e, t.bubbles, t.cancelable, t.detail), n
        }
    }())
}(window),
function() {
    "use strict";
    "function" != typeof Object.assign && Object.defineProperty(Object, "assign", {
        value: function(e, t) {
            if (null === e || void 0 === e) throw new TypeError("Cannot convert undefined or null to object");
            for (var n = Object(e), i = 1; i < arguments.length; i++) {
                var r = arguments[i];
                if (null !== r && void 0 !== r)
                    for (var o in r) Object.prototype.hasOwnProperty.call(r, o) && (n[o] = r[o])
            }
            return n
        },
        writable: !0,
        configurable: !0
    })
}(),
function(e) {
    var t = e.history;
    if (t) {
        var n = t.pushState;
        n && (t.pushState = function(i) {
            "function" == typeof t.onpushstate && t.onpushstate({
                state: i
            });
            var r = n.apply(t, arguments);
            return e.dispatchEvent(new CustomEvent("_onlocationchange")), r
        })
    }
}(window), Array.from || (Array.from = function() {
        var e = Object.prototype.toString,
            t = function(t) {
                return "function" == typeof t || "[object Function]" === e.call(t)
            },
            n = Math.pow(2, 53) - 1,
            i = function(e) {
                var t = function(e) {
                    var t = Number(e);
                    return isNaN(t) ? 0 : 0 !== t && isFinite(t) ? (t > 0 ? 1 : -1) * Math.floor(Math.abs(t)) : t
                }(e);
                return Math.min(Math.max(t, 0), n)
            };
        return function(e) {
            var n = Object(e);
            if (null == e) throw new TypeError("Array.from requires an array-like object - not null or undefined");
            var r, o = arguments.length > 1 ? arguments[1] : void 0;
            if (void 0 !== o) {
                if (!t(o)) throw new TypeError("Array.from: when provided, the second argument must be a function");
                arguments.length > 2 && (r = arguments[2])
            }
            for (var a, s = i(n.length), c = t(this) ? Object(new this(s)) : new Array(s), u = 0; u < s;) a = n[u], c[u] = o ? void 0 === r ? o(a, u) : o.call(r, a, u) : a, u += 1;
            return c.length = s, c
        }
    }()),
    function(e) {
        "use strict";

        function t(e) {
            var t = this.constructor;
            return this.then(function(n) {
                return t.resolve(e()).then(function() {
                    return n
                })
            }, function(n) {
                return t.resolve(e()).then(function() {
                    return t.reject(n)
                })
            })
        }
        var n = setTimeout;

        function i(e) {
            return Boolean(e && void 0 !== e.length)
        }

        function r() {}

        function o(e) {
            if (!(this instanceof o)) throw new TypeError("Promises must be constructed via new");
            if ("function" != typeof e) throw new TypeError("not a function");
            this._state = 0, this._handled = !1, this._value = void 0, this._deferreds = [], d(e, this)
        }

        function a(e, t) {
            for (; 3 === e._state;) e = e._value;
            0 !== e._state ? (e._handled = !0, o._immediateFn(function() {
                var n = 1 === e._state ? t.onFulfilled : t.onRejected;
                if (null !== n) {
                    var i;
                    try {
                        i = n(e._value)
                    } catch (e) {
                        return void c(t.promise, e)
                    }
                    s(t.promise, i)
                } else(1 === e._state ? s : c)(t.promise, e._value)
            })) : e._deferreds.push(t)
        }

        function s(e, t) {
            try {
                if (t === e) throw new TypeError("A promise cannot be resolved with itself.");
                if (t && ("object" == typeof t || "function" == typeof t)) {
                    var n = t.then;
                    if (t instanceof o) return e._state = 3, e._value = t, void u(e);
                    if ("function" == typeof n) return void d((i = n, r = t, function() {
                        i.apply(r, arguments)
                    }), e)
                }
                e._state = 1, e._value = t, u(e)
            } catch (t) {
                c(e, t)
            }
            var i, r
        }

        function c(e, t) {
            e._state = 2, e._value = t, u(e)
        }

        function u(e) {
            2 === e._state && 0 === e._deferreds.length && o._immediateFn(function() {
                e._handled || o._unhandledRejectionFn(e._value)
            });
            for (var t = 0, n = e._deferreds.length; t < n; t++) a(e, e._deferreds[t]);
            e._deferreds = null
        }

        function d(e, t) {
            var n = !1;
            try {
                e(function(e) {
                    n || (n = !0, s(t, e))
                }, function(e) {
                    n || (n = !0, c(t, e))
                })
            } catch (e) {
                if (n) return;
                n = !0, c(t, e)
            }
        }
        o.prototype.catch = function(e) {
            return this.then(null, e)
        }, o.prototype.then = function(e, t) {
            var n = new this.constructor(r);
            return a(this, new function(e, t, n) {
                this.onFulfilled = "function" == typeof e ? e : null, this.onRejected = "function" == typeof t ? t : null, this.promise = n
            }(e, t, n)), n
        }, o.prototype.finally = t, o.all = function(e) {
            return new o(function(t, n) {
                if (!i(e)) return n(new TypeError("Promise.all accepts an array"));
                var r = Array.prototype.slice.call(e);
                if (0 === r.length) return t([]);
                var o = r.length;

                function a(e, i) {
                    try {
                        if (i && ("object" == typeof i || "function" == typeof i)) {
                            var s = i.then;
                            if ("function" == typeof s) return void s.call(i, function(t) {
                                a(e, t)
                            }, n)
                        }
                        r[e] = i, 0 == --o && t(r)
                    } catch (e) {
                        n(e)
                    }
                }
                for (var s = 0; s < r.length; s++) a(s, r[s])
            })
        }, o.resolve = function(e) {
            return e && "object" == typeof e && e.constructor === o ? e : new o(function(t) {
                t(e)
            })
        }, o.reject = function(e) {
            return new o(function(t, n) {
                n(e)
            })
        }, o.race = function(e) {
            return new o(function(t, n) {
                if (!i(e)) return n(new TypeError("Promise.race accepts an array"));
                for (var r = 0, a = e.length; r < a; r++) o.resolve(e[r]).then(t, n)
            })
        }, o._immediateFn = "function" == typeof setImmediate && function(e) {
            setImmediate(e)
        } || function(e) {
            n(e, 0)
        }, o._unhandledRejectionFn = function(e) {
            "undefined" != typeof console && console && console.warn("Possible Unhandled Promise Rejection:", e)
        }, "function" != typeof e.Promise ? e.Promise = o : e.Promise.prototype.finally || (e.Promise.prototype.finally = t)
    }(window),
    function(e, t) {
        "use strict";
        var n = "model",
            i = "name",
            r = "type",
            o = "vendor",
            a = "version",
            s = "mobile",
            c = "tablet",
            u = "smarttv",
            d = {
                extend: function(e, t) {
                    var n = {};
                    for (var i in e) t[i] && t[i].length % 2 == 0 ? n[i] = t[i].concat(e[i]) : n[i] = e[i];
                    return n
                },
                has: function(e, t) {
                    return "string" == typeof e && -1 !== t.toLowerCase().indexOf(e.toLowerCase())
                },
                lowerize: function(e) {
                    return e.toLowerCase()
                },
                major: function(e) {
                    return "string" == typeof e ? e.replace(/[^\d\.]/g, "").split(".")[0] : void 0
                },
                trim: function(e) {
                    return e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")
                }
            },
            h = {
                rgx: function(e, t) {
                    for (var n, i, r, o, a, s, c = 0; c < t.length && !a;) {
                        var u = t[c],
                            d = t[c + 1];
                        for (n = i = 0; n < u.length && !a;)
                            if (a = u[n++].exec(e))
                                for (r = 0; r < d.length; r++) s = a[++i], "object" == typeof(o = d[r]) && o.length > 0 ? 2 == o.length ? "function" == typeof o[1] ? this[o[0]] = o[1].call(this, s) : this[o[0]] = o[1] : 3 == o.length ? "function" != typeof o[1] || o[1].exec && o[1].test ? this[o[0]] = s ? s.replace(o[1], o[2]) : void 0 : this[o[0]] = s ? o[1].call(this, s, o[2]) : void 0 : 4 == o.length && (this[o[0]] = s ? o[3].call(this, s.replace(o[1], o[2])) : void 0) : this[o] = s || void 0;
                        c += 2
                    }
                },
                str: function(e, t) {
                    for (var n in t)
                        if ("object" == typeof t[n] && t[n].length > 0) {
                            for (var i = 0; i < t[n].length; i++)
                                if (d.has(t[n][i], e)) return "?" === n ? void 0 : n
                        } else if (d.has(t[n], e)) return "?" === n ? void 0 : n;
                    return e
                }
            },
            l = {
                browser: {
                    oldsafari: {
                        version: {
                            "1.0": "/8",
                            1.2: "/1",
                            1.3: "/3",
                            "2.0": "/412",
                            "2.0.2": "/416",
                            "2.0.3": "/417",
                            "2.0.4": "/419",
                            "?": "/"
                        }
                    }
                },
                device: {
                    amazon: {
                        model: {
                            "Fire Phone": ["SD", "KF"]
                        }
                    },
                    sprint: {
                        model: {
                            "Evo Shift 4G": "7373KT"
                        },
                        vendor: {
                            HTC: "APA",
                            Sprint: "Sprint"
                        }
                    }
                },
                os: {
                    windows: {
                        version: {
                            ME: "4.90",
                            "NT 3.11": "NT3.51",
                            "NT 4.0": "NT4.0",
                            2000: "NT 5.0",
                            XP: ["NT 5.1", "NT 5.2"],
                            Vista: "NT 6.0",
                            7: "NT 6.1",
                            8: "NT 6.2",
                            8.1: "NT 6.3",
                            10: ["NT 6.4", "NT 10.0"],
                            RT: "ARM"
                        }
                    }
                }
            },
            p = {
                browser: [
                    [/(opera\smini)\/([\w\.-]+)/i, /(opera\s[mobiletab]+).+version\/([\w\.-]+)/i, /(opera).+version\/([\w\.]+)/i, /(opera)[\/\s]+([\w\.]+)/i],
                    [i, a],
                    [/(opios)[\/\s]+([\w\.]+)/i],
                    [
                        [i, "Opera Mini"], a
                    ],
                    [/\s(opr)\/([\w\.]+)/i],
                    [
                        [i, "Opera"], a
                    ],
                    [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]*)/i, /(avant\s|iemobile|slim)(?:browser)?[\/\s]?([\w\.]*)/i, /(bidubrowser|baidubrowser)[\/\s]?([\w\.]+)/i, /(?:ms|\()(ie)\s([\w\.]+)/i, /(rekonq)\/([\w\.]*)/i, /(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon)\/([\w\.-]+)/i],
                    [i, a],
                    [/(konqueror)\/([\w\.]+)/i],
                    [
                        [i, "Konqueror"], a
                    ],
                    [/(trident).+rv[:\s]([\w\.]+).+like\sgecko/i],
                    [
                        [i, "IE"], a
                    ],
                    [/(edge|edgios|edga|edg)\/((\d+)?[\w\.]+)/i],
                    [
                        [i, "Edge"], a
                    ],
                    [/(yabrowser)\/([\w\.]+)/i],
                    [
                        [i, "Yandex"], a
                    ],
                    [/(Avast)\/([\w\.]+)/i],
                    [
                        [i, "Avast Secure Browser"], a
                    ],
                    [/(AVG)\/([\w\.]+)/i],
                    [
                        [i, "AVG Secure Browser"], a
                    ],
                    [/(puffin)\/([\w\.]+)/i],
                    [
                        [i, "Puffin"], a
                    ],
                    [/(focus)\/([\w\.]+)/i],
                    [
                        [i, "Firefox Focus"], a
                    ],
                    [/(opt)\/([\w\.]+)/i],
                    [
                        [i, "Opera Touch"], a
                    ],
                    [/((?:[\s\/])uc?\s?browser|(?:juc.+)ucweb)[\/\s]?([\w\.]+)/i],
                    [
                        [i, "UCBrowser"], a
                    ],
                    [/(comodo_dragon)\/([\w\.]+)/i],
                    [
                        [i, /_/g, " "], a
                    ],
                    [/(windowswechat qbcore)\/([\w\.]+)/i],
                    [
                        [i, "WeChat(Win) Desktop"], a
                    ],
                    [/(micromessenger)\/([\w\.]+)/i],
                    [
                        [i, "WeChat"], a
                    ],
                    [/(brave)\/([\w\.]+)/i],
                    [
                        [i, "Brave"], a
                    ],
                    [/(qqbrowserlite)\/([\w\.]+)/i],
                    [i, a],
                    [/(QQ)\/([\d\.]+)/i],
                    [i, a],
                    [/m?(qqbrowser)[\/\s]?([\w\.]+)/i],
                    [i, a],
                    [/(baiduboxapp)[\/\s]?([\w\.]+)/i],
                    [i, a],
                    [/(2345Explorer)[\/\s]?([\w\.]+)/i],
                    [i, a],
                    [/(MetaSr)[\/\s]?([\w\.]+)/i],
                    [i],
                    [/(LBBROWSER)/i],
                    [i],
                    [/xiaomi\/miuibrowser\/([\w\.]+)/i],
                    [a, [i, "MIUI Browser"]],
                    [/;fbav\/([\w\.]+);/i],
                    [a, [i, "Facebook"]],
                    [/safari\s(line)\/([\w\.]+)/i, /android.+(line)\/([\w\.]+)\/iab/i],
                    [i, a],
                    [/headlesschrome(?:\/([\w\.]+)|\s)/i],
                    [a, [i, "Chrome Headless"]],
                    [/\swv\).+(chrome)\/([\w\.]+)/i],
                    [
                        [i, /(.+)/, "$1 WebView"], a
                    ],
                    [/((?:oculus|samsung)browser)\/([\w\.]+)/i],
                    [
                        [i, /(.+(?:g|us))(.+)/, "$1 $2"], a
                    ],
                    [/android.+version\/([\w\.]+)\s+(?:mobile\s?safari|safari)*/i],
                    [a, [i, "Android Browser"]],
                    [/(sailfishbrowser)\/([\w\.]+)/i],
                    [
                        [i, "Sailfish Browser"], a
                    ],
                    [/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i],
                    [i, a],
                    [/(dolfin)\/([\w\.]+)/i],
                    [
                        [i, "Dolphin"], a
                    ],
                    [/(qihu|qhbrowser|qihoobrowser|360browser)/i],
                    [
                        [i, "360 Browser"]
                    ],
                    [/((?:android.+)crmo|crios)\/([\w\.]+)/i],
                    [
                        [i, "Chrome"], a
                    ],
                    [/(coast)\/([\w\.]+)/i],
                    [
                        [i, "Opera Coast"], a
                    ],
                    [/fxios\/([\w\.-]+)/i],
                    [a, [i, "Firefox"]],
                    [/version\/([\w\.]+).+?mobile\/\w+\s(safari)/i],
                    [a, [i, "Mobile Safari"]],
                    [/version\/([\w\.]+).+?(mobile\s?safari|safari)/i],
                    [a, i],
                    [/webkit.+?(gsa)\/([\w\.]+).+?(mobile\s?safari|safari)(\/[\w\.]+)/i],
                    [
                        [i, "GSA"], a
                    ],
                    [/webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i],
                    [i, [a, h.str, l.browser.oldsafari.version]],
                    [/(webkit|khtml)\/([\w\.]+)/i],
                    [i, a],
                    [/(navigator|netscape)\/([\w\.-]+)/i],
                    [
                        [i, "Netscape"], a
                    ],
                    [/(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i, /(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([\w\.-]+)$/i, /(mozilla)\/([\w\.]+).+rv\:.+gecko\/\d+/i, /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i, /(links)\s\(([\w\.]+)/i, /(gobrowser)\/?([\w\.]*)/i, /(ice\s?browser)\/v?([\w\._]+)/i, /(mosaic)[\/\s]([\w\.]+)/i],
                    [i, a]
                ],
                cpu: [
                    [/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i],
                    [
                        ["architecture", "amd64"]
                    ],
                    [/(ia32(?=;))/i],
                    [
                        ["architecture", d.lowerize]
                    ],
                    [/((?:i[346]|x)86)[;\)]/i],
                    [
                        ["architecture", "ia32"]
                    ],
                    [/windows\s(ce|mobile);\sppc;/i],
                    [
                        ["architecture", "arm"]
                    ],
                    [/((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i],
                    [
                        ["architecture", /ower/, "", d.lowerize]
                    ],
                    [/(sun4\w)[;\)]/i],
                    [
                        ["architecture", "sparc"]
                    ],
                    [/((?:avr32|ia64(?=;))|68k(?=\))|arm(?:64|(?=v\d+[;l]))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?(?=;)|pa-risc)/i],
                    [
                        ["architecture", d.lowerize]
                    ]
                ],
                device: [
                    [/\((ipad|playbook);[\w\s\),;-]+(rim|apple)/i],
                    [n, o, [r, c]],
                    [/applecoremedia\/[\w\.]+ \((ipad)/],
                    [n, [o, "Apple"],
                        [r, c]
                    ],
                    [/(apple\s{0,1}tv)/i],
                    [
                        [n, "Apple TV"],
                        [o, "Apple"],
                        [r, u]
                    ],
                    [/(archos)\s(gamepad2?)/i, /(hp).+(touchpad)/i, /(hp).+(tablet)/i, /(kindle)\/([\w\.]+)/i, /\s(nook)[\w\s]+build\/(\w+)/i, /(dell)\s(strea[kpr\s\d]*[\dko])/i],
                    [o, n, [r, c]],
                    [/(kf[A-z]+)\sbuild\/.+silk\//i],
                    [n, [o, "Amazon"],
                        [r, c]
                    ],
                    [/(sd|kf)[0349hijorstuw]+\sbuild\/.+silk\//i],
                    [
                        [n, h.str, l.device.amazon.model],
                        [o, "Amazon"],
                        [r, s]
                    ],
                    [/android.+aft([bms])\sbuild/i],
                    [n, [o, "Amazon"],
                        [r, u]
                    ],
                    [/\((ip[honed|\s\w*]+);.+(apple)/i],
                    [n, o, [r, s]],
                    [/\((ip[honed|\s\w*]+);/i],
                    [n, [o, "Apple"],
                        [r, s]
                    ],
                    [/(blackberry)[\s-]?(\w+)/i, /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[\s_-]?([\w-]*)/i, /(hp)\s([\w\s]+\w)/i, /(asus)-?(\w+)/i],
                    [o, n, [r, s]],
                    [/\(bb10;\s(\w+)/i],
                    [n, [o, "BlackBerry"],
                        [r, s]
                    ],
                    [/android.+(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus 7|padfone|p00c)/i],
                    [n, [o, "Asus"],
                        [r, c]
                    ],
                    [/(sony)\s(tablet\s[ps])\sbuild\//i, /(sony)?(?:sgp.+)\sbuild\//i],
                    [
                        [o, "Sony"],
                        [n, "Xperia Tablet"],
                        [r, c]
                    ],
                    [/android.+\s([c-g]\d{4}|so[-l]\w+)(?=\sbuild\/|\).+chrome\/(?![1-6]{0,1}\d\.))/i],
                    [n, [o, "Sony"],
                        [r, s]
                    ],
                    [/\s(ouya)\s/i, /(nintendo)\s([wids3u]+)/i],
                    [o, n, [r, "console"]],
                    [/android.+;\s(shield)\sbuild/i],
                    [n, [o, "Nvidia"],
                        [r, "console"]
                    ],
                    [/(playstation\s[34portablevi]+)/i],
                    [n, [o, "Sony"],
                        [r, "console"]
                    ],
                    [/(sprint\s(\w+))/i],
                    [
                        [o, h.str, l.device.sprint.vendor],
                        [n, h.str, l.device.sprint.model],
                        [r, s]
                    ],
                    [/(htc)[;_\s-]+([\w\s]+(?=\)|\sbuild)|\w+)/i, /(zte)-(\w*)/i, /(alcatel|geeksphone|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]*)/i],
                    [o, [n, /_/g, " "],
                        [r, s]
                    ],
                    [/(nexus\s9)/i],
                    [n, [o, "HTC"],
                        [r, c]
                    ],
                    [/d\/huawei([\w\s-]+)[;\)]/i, /(nexus\s6p|vog-l29|ane-lx1|eml-l29)/i],
                    [n, [o, "Huawei"],
                        [r, s]
                    ],
                    [/android.+(bah2?-a?[lw]\d{2})/i],
                    [n, [o, "Huawei"],
                        [r, c]
                    ],
                    [/(microsoft);\s(lumia[\s\w]+)/i],
                    [o, n, [r, s]],
                    [/[\s\(;](xbox(?:\sone)?)[\s\);]/i],
                    [n, [o, "Microsoft"],
                        [r, "console"]
                    ],
                    [/(kin\.[onetw]{3})/i],
                    [
                        [n, /\./g, " "],
                        [o, "Microsoft"],
                        [r, s]
                    ],
                    [/\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?:?(\s4g)?)[\w\s]+build\//i, /mot[\s-]?(\w*)/i, /(XT\d{3,4}) build\//i, /(nexus\s6)/i],
                    [n, [o, "Motorola"],
                        [r, s]
                    ],
                    [/android.+\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i],
                    [n, [o, "Motorola"],
                        [r, c]
                    ],
                    [/hbbtv\/\d+\.\d+\.\d+\s+\([\w\s]*;\s*(\w[^;]*);([^;]*)/i],
                    [
                        [o, d.trim],
                        [n, d.trim],
                        [r, u]
                    ],
                    [/hbbtv.+maple;(\d+)/i],
                    [
                        [n, /^/, "SmartTV"],
                        [o, "Samsung"],
                        [r, u]
                    ],
                    [/\(dtv[\);].+(aquos)/i],
                    [n, [o, "Sharp"],
                        [r, u]
                    ],
                    [/android.+((sch-i[89]0\d|shw-m380s|gt-p\d{4}|gt-n\d+|sgh-t8[56]9|nexus 10))/i, /((SM-T\w+))/i],
                    [
                        [o, "Samsung"], n, [r, c]
                    ],
                    [/smart-tv.+(samsung)/i],
                    [o, [r, u], n],
                    [/((s[cgp]h-\w+|gt-\w+|galaxy\snexus|sm-\w[\w\d]+))/i, /(sam[sung]*)[\s-]*(\w+-?[\w-]*)/i, /sec-((sgh\w+))/i],
                    [
                        [o, "Samsung"], n, [r, s]
                    ],
                    [/sie-(\w*)/i],
                    [n, [o, "Siemens"],
                        [r, s]
                    ],
                    [/(maemo|nokia).*(n900|lumia\s\d+)/i, /(nokia)[\s_-]?([\w-]*)/i],
                    [
                        [o, "Nokia"], n, [r, s]
                    ],
                    [/android[x\d\.\s;]+\s([ab][1-7]\-?[0178a]\d\d?)/i],
                    [n, [o, "Acer"],
                        [r, c]
                    ],
                    [/android.+([vl]k\-?\d{3})\s+build/i],
                    [n, [o, "LG"],
                        [r, c]
                    ],
                    [/android\s3\.[\s\w;-]{10}(lg?)-([06cv9]{3,4})/i],
                    [
                        [o, "LG"], n, [r, c]
                    ],
                    [/(lg) netcast\.tv/i],
                    [o, n, [r, u]],
                    [/(nexus\s[45])/i, /lg[e;\s\/-]+(\w*)/i, /android.+lg(\-?[\d\w]+)\s+build/i],
                    [n, [o, "LG"],
                        [r, s]
                    ],
                    [/(lenovo)\s?(s(?:5000|6000)(?:[\w-]+)|tab(?:[\s\w]+))/i],
                    [o, n, [r, c]],
                    [/android.+(ideatab[a-z0-9\-\s]+)/i],
                    [n, [o, "Lenovo"],
                        [r, c]
                    ],
                    [/(lenovo)[_\s-]?([\w-]+)/i],
                    [o, n, [r, s]],
                    [/linux;.+((jolla));/i],
                    [o, n, [r, s]],
                    [/((pebble))app\/[\d\.]+\s/i],
                    [o, n, [r, "wearable"]],
                    [/android.+;\s(oppo)\s?([\w\s]+)\sbuild/i],
                    [o, n, [r, s]],
                    [/crkey/i],
                    [
                        [n, "Chromecast"],
                        [o, "Google"],
                        [r, u]
                    ],
                    [/android.+;\s(glass)\s\d/i],
                    [n, [o, "Google"],
                        [r, "wearable"]
                    ],
                    [/android.+;\s(pixel c)[\s)]/i],
                    [n, [o, "Google"],
                        [r, c]
                    ],
                    [/android.+;\s(pixel( [23])?( xl)?)[\s)]/i],
                    [n, [o, "Google"],
                        [r, s]
                    ],
                    [/android.+;\s(\w+)\s+build\/hm\1/i, /android.+(hm[\s\-_]*note?[\s_]*(?:\d\w)?)\s+build/i, /android.+(mi[\s\-_]*(?:a\d|one|one[\s_]plus|note lte)?[\s_]*(?:\d?\w?)[\s_]*(?:plus)?)\s+build/i, /android.+(redmi[\s\-_]*(?:note)?(?:[\s_]*[\w\s]+))\s+build/i],
                    [
                        [n, /_/g, " "],
                        [o, "Xiaomi"],
                        [r, s]
                    ],
                    [/android.+(mi[\s\-_]*(?:pad)(?:[\s_]*[\w\s]+))\s+build/i],
                    [
                        [n, /_/g, " "],
                        [o, "Xiaomi"],
                        [r, c]
                    ],
                    [/android.+;\s(m[1-5]\snote)\sbuild/i],
                    [n, [o, "Meizu"],
                        [r, s]
                    ],
                    [/(mz)-([\w-]{2,})/i],
                    [
                        [o, "Meizu"], n, [r, s]
                    ],
                    [/android.+a000(1)\s+build/i, /android.+oneplus\s(a\d{4})[\s)]/i],
                    [n, [o, "OnePlus"],
                        [r, s]
                    ],
                    [/android.+[;\/]\s*(RCT[\d\w]+)\s+build/i],
                    [n, [o, "RCA"],
                        [r, c]
                    ],
                    [/android.+[;\/\s]+(Venue[\d\s]{2,7})\s+build/i],
                    [n, [o, "Dell"],
                        [r, c]
                    ],
                    [/android.+[;\/]\s*(Q[T|M][\d\w]+)\s+build/i],
                    [n, [o, "Verizon"],
                        [r, c]
                    ],
                    [/android.+[;\/]\s+(Barnes[&\s]+Noble\s+|BN[RT])(V?.*)\s+build/i],
                    [
                        [o, "Barnes & Noble"], n, [r, c]
                    ],
                    [/android.+[;\/]\s+(TM\d{3}.*\b)\s+build/i],
                    [n, [o, "NuVision"],
                        [r, c]
                    ],
                    [/android.+;\s(k88)\sbuild/i],
                    [n, [o, "ZTE"],
                        [r, c]
                    ],
                    [/android.+[;\/]\s*(gen\d{3})\s+build.*49h/i],
                    [n, [o, "Swiss"],
                        [r, s]
                    ],
                    [/android.+[;\/]\s*(zur\d{3})\s+build/i],
                    [n, [o, "Swiss"],
                        [r, c]
                    ],
                    [/android.+[;\/]\s*((Zeki)?TB.*\b)\s+build/i],
                    [n, [o, "Zeki"],
                        [r, c]
                    ],
                    [/(android).+[;\/]\s+([YR]\d{2})\s+build/i, /android.+[;\/]\s+(Dragon[\-\s]+Touch\s+|DT)(\w{5})\sbuild/i],
                    [
                        [o, "Dragon Touch"], n, [r, c]
                    ],
                    [/android.+[;\/]\s*(NS-?\w{0,9})\sbuild/i],
                    [n, [o, "Insignia"],
                        [r, c]
                    ],
                    [/android.+[;\/]\s*((NX|Next)-?\w{0,9})\s+build/i],
                    [n, [o, "NextBook"],
                        [r, c]
                    ],
                    [/android.+[;\/]\s*(Xtreme\_)?(V(1[045]|2[015]|30|40|60|7[05]|90))\s+build/i],
                    [
                        [o, "Voice"], n, [r, s]
                    ],
                    [/android.+[;\/]\s*(LVTEL\-)?(V1[12])\s+build/i],
                    [
                        [o, "LvTel"], n, [r, s]
                    ],
                    [/android.+;\s(PH-1)\s/i],
                    [n, [o, "Essential"],
                        [r, s]
                    ],
                    [/android.+[;\/]\s*(V(100MD|700NA|7011|917G).*\b)\s+build/i],
                    [n, [o, "Envizen"],
                        [r, c]
                    ],
                    [/android.+[;\/]\s*(Le[\s\-]+Pan)[\s\-]+(\w{1,9})\s+build/i],
                    [o, n, [r, c]],
                    [/android.+[;\/]\s*(Trio[\s\-]*.*)\s+build/i],
                    [n, [o, "MachSpeed"],
                        [r, c]
                    ],
                    [/android.+[;\/]\s*(Trinity)[\-\s]*(T\d{3})\s+build/i],
                    [o, n, [r, c]],
                    [/android.+[;\/]\s*TU_(1491)\s+build/i],
                    [n, [o, "Rotor"],
                        [r, c]
                    ],
                    [/android.+(KS(.+))\s+build/i],
                    [n, [o, "Amazon"],
                        [r, c]
                    ],
                    [/android.+(Gigaset)[\s\-]+(Q\w{1,9})\s+build/i],
                    [o, n, [r, c]],
                    [/\s(tablet|tab)[;\/]/i, /\s(mobile)(?:[;\/]|\ssafari)/i],
                    [
                        [r, d.lowerize], o, n
                    ],
                    [/[\s\/\(](smart-?tv)[;\)]/i],
                    [
                        [r, u]
                    ],
                    [/(android[\w\.\s\-]{0,9});.+build/i],
                    [n, [o, "Generic"]]
                ],
                engine: [
                    [/windows.+\sedge\/([\w\.]+)/i],
                    [a, [i, "EdgeHTML"]],
                    [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],
                    [a, [i, "Blink"]],
                    [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i, /(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i, /(icab)[\/\s]([23]\.[\d\.]+)/i],
                    [i, a],
                    [/rv\:([\w\.]{1,9}).+(gecko)/i],
                    [a, i]
                ],
                os: [
                    [/microsoft\s(windows)\s(vista|xp)/i],
                    [i, a],
                    [/(windows)\snt\s6\.2;\s(arm)/i, /(windows\sphone(?:\sos)*)[\s\/]?([\d\.\s\w]*)/i, /(windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i],
                    [i, [a, h.str, l.os.windows.version]],
                    [/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i],
                    [
                        [i, "Windows"],
                        [a, h.str, l.os.windows.version]
                    ],
                    [/\((bb)(10);/i],
                    [
                        [i, "BlackBerry"], a
                    ],
                    [/(blackberry)\w*\/?([\w\.]*)/i, /(tizen|kaios)[\/\s]([\w\.]+)/i, /(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|sailfish|contiki)[\/\s-]?([\w\.]*)/i],
                    [i, a],
                    [/(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]*)/i],
                    [
                        [i, "Symbian"], a
                    ],
                    [/\((series40);/i],
                    [i],
                    [/mozilla.+\(mobile;.+gecko.+firefox/i],
                    [
                        [i, "Firefox OS"], a
                    ],
                    [/(nintendo|playstation)\s([wids34portablevu]+)/i, /(mint)[\/\s\(]?(\w*)/i, /(mageia|vectorlinux)[;\s]/i, /(joli|[kxln]?ubuntu|debian|suse|opensuse|gentoo|(?=\s)arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[\/\s-]?(?!chrom)([\w\.-]*)/i, /(hurd|linux)\s?([\w\.]*)/i, /(gnu)\s?([\w\.]*)/i],
                    [i, a],
                    [/(cros)\s[\w]+\s([\w\.]+\w)/i],
                    [
                        [i, "Chromium OS"], a
                    ],
                    [/(sunos)\s?([\w\.\d]*)/i],
                    [
                        [i, "Solaris"], a
                    ],
                    [/\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]*)/i],
                    [i, a],
                    [/(haiku)\s(\w+)/i],
                    [i, a],
                    [/cfnetwork\/.+darwin/i, /ip[honead]{2,4}(?:.*os\s([\w]+)\slike\smac|;\sopera)/i],
                    [
                        [a, /_/g, "."],
                        [i, "iOS"]
                    ],
                    [/(mac\sos\sx)\s?([\w\s\.]*)/i, /(macintosh|mac(?=_powerpc)\s)/i],
                    [
                        [i, "Mac OS"],
                        [a, /_/g, "."]
                    ],
                    [/((?:open)?solaris)[\/\s-]?([\w\.]*)/i, /(aix)\s((\d)(?=\.|\)|\s)[\w\.])*/i, /(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms|fuchsia)/i, /(unix)\s?([\w\.]*)/i],
                    [i, a]
                ]
            },
            f = function(t, n) {
                if ("object" == typeof t && (n = t, t = void 0), !(this instanceof f)) return new f(t, n).getResult();
                var i = t || (e && e.navigator && e.navigator.userAgent ? e.navigator.userAgent : ""),
                    r = n ? d.extend(p, n) : p;
                return this.getBrowser = function() {
                    var e = {
                        name: void 0,
                        version: void 0
                    };
                    return h.rgx.call(e, i, r.browser), e.major = d.major(e.version), e
                }, this.getCPU = function() {
                    var e = {
                        architecture: void 0
                    };
                    return h.rgx.call(e, i, r.cpu), e
                }, this.getDevice = function() {
                    var e = {
                        vendor: void 0,
                        model: void 0,
                        type: void 0
                    };
                    return h.rgx.call(e, i, r.device), e
                }, this.getEngine = function() {
                    var e = {
                        name: void 0,
                        version: void 0
                    };
                    return h.rgx.call(e, i, r.engine), e
                }, this.getOS = function() {
                    var e = {
                        name: void 0,
                        version: void 0
                    };
                    return h.rgx.call(e, i, r.os), e
                }, this.getResult = function() {
                    return {
                        ua: this.getUA(),
                        browser: this.getBrowser(),
                        engine: this.getEngine(),
                        os: this.getOS(),
                        device: this.getDevice(),
                        cpu: this.getCPU()
                    }
                }, this.getUA = function() {
                    return i
                }, this.setUA = function(e) {
                    return i = e, this
                }, this
            };
        f.VERSION = "0.7.21", f.BROWSER = {
            NAME: i,
            MAJOR: "major",
            VERSION: a
        }, f.CPU = {
            ARCHITECTURE: "architecture"
        }, f.DEVICE = {
            MODEL: n,
            VENDOR: o,
            TYPE: r,
            CONSOLE: "console",
            MOBILE: s,
            SMARTTV: u,
            TABLET: c,
            WEARABLE: "wearable",
            EMBEDDED: "embedded"
        }, f.ENGINE = {
            NAME: i,
            VERSION: a
        }, f.OS = {
            NAME: i,
            VERSION: a
        }, e._securedTouchDependencies.UAParser = f
    }(window), window._securedTouchDependencies.pako = function e(t, n, i) {
        function r(a, s) {
            if (!n[a]) {
                if (!t[a]) {
                    var c = "function" == typeof require && require;
                    if (!s && c) return c(a, !0);
                    if (o) return o(a, !0);
                    var u = new Error("Cannot find module '" + a + "'");
                    throw u.code = "MODULE_NOT_FOUND", u
                }
                var d = n[a] = {
                    exports: {}
                };
                t[a][0].call(d.exports, function(e) {
                    var n = t[a][1][e];
                    return r(n || e)
                }, d, d.exports, e, t, n, i)
            }
            return n[a].exports
        }
        for (var o = "function" == typeof require && require, a = 0; a < i.length; a++) r(i[a]);
        return r
    }({
        1: [function(e, t, n) {
            "use strict";

            function i(e, t) {
                return Object.prototype.hasOwnProperty.call(e, t)
            }
            var r = "undefined" != typeof Uint8Array && "undefined" != typeof Uint16Array && "undefined" != typeof Int32Array;
            n.assign = function(e) {
                for (var t = Array.prototype.slice.call(arguments, 1); t.length;) {
                    var n = t.shift();
                    if (n) {
                        if ("object" != typeof n) throw new TypeError(n + "must be non-object");
                        for (var r in n) i(n, r) && (e[r] = n[r])
                    }
                }
                return e
            }, n.shrinkBuf = function(e, t) {
                return e.length === t ? e : e.subarray ? e.subarray(0, t) : (e.length = t, e)
            };
            var o = {
                    arraySet: function(e, t, n, i, r) {
                        if (t.subarray && e.subarray) e.set(t.subarray(n, n + i), r);
                        else
                            for (var o = 0; o < i; o++) e[r + o] = t[n + o]
                    },
                    flattenChunks: function(e) {
                        var t, n, i, r, o, a;
                        for (i = 0, t = 0, n = e.length; t < n; t++) i += e[t].length;
                        for (a = new Uint8Array(i), r = 0, t = 0, n = e.length; t < n; t++) o = e[t], a.set(o, r), r += o.length;
                        return a
                    }
                },
                a = {
                    arraySet: function(e, t, n, i, r) {
                        for (var o = 0; o < i; o++) e[r + o] = t[n + o]
                    },
                    flattenChunks: function(e) {
                        return [].concat.apply([], e)
                    }
                };
            n.setTyped = function(e) {
                e ? (n.Buf8 = Uint8Array, n.Buf16 = Uint16Array, n.Buf32 = Int32Array, n.assign(n, o)) : (n.Buf8 = Array, n.Buf16 = Array, n.Buf32 = Array, n.assign(n, a))
            }, n.setTyped(r)
        }, {}],
        2: [function(e, t, n) {
            "use strict";

            function i(e, t) {
                if (t < 65537 && (e.subarray && a || !e.subarray && o)) return String.fromCharCode.apply(null, r.shrinkBuf(e, t));
                for (var n = "", i = 0; i < t; i++) n += String.fromCharCode(e[i]);
                return n
            }
            var r = e("./common"),
                o = !0,
                a = !0;
            try {
                String.fromCharCode.apply(null, [0])
            } catch (e) {
                o = !1
            }
            try {
                String.fromCharCode.apply(null, new Uint8Array(1))
            } catch (e) {
                a = !1
            }
            for (var s = new r.Buf8(256), c = 0; c < 256; c++) s[c] = c >= 252 ? 6 : c >= 248 ? 5 : c >= 240 ? 4 : c >= 224 ? 3 : c >= 192 ? 2 : 1;
            s[254] = s[254] = 1, n.string2buf = function(e) {
                var t, n, i, o, a, s = e.length,
                    c = 0;
                for (o = 0; o < s; o++) 55296 == (64512 & (n = e.charCodeAt(o))) && o + 1 < s && 56320 == (64512 & (i = e.charCodeAt(o + 1))) && (n = 65536 + (n - 55296 << 10) + (i - 56320), o++), c += n < 128 ? 1 : n < 2048 ? 2 : n < 65536 ? 3 : 4;
                for (t = new r.Buf8(c), a = 0, o = 0; a < c; o++) 55296 == (64512 & (n = e.charCodeAt(o))) && o + 1 < s && 56320 == (64512 & (i = e.charCodeAt(o + 1))) && (n = 65536 + (n - 55296 << 10) + (i - 56320), o++), n < 128 ? t[a++] = n : n < 2048 ? (t[a++] = 192 | n >>> 6, t[a++] = 128 | 63 & n) : n < 65536 ? (t[a++] = 224 | n >>> 12, t[a++] = 128 | n >>> 6 & 63, t[a++] = 128 | 63 & n) : (t[a++] = 240 | n >>> 18, t[a++] = 128 | n >>> 12 & 63, t[a++] = 128 | n >>> 6 & 63, t[a++] = 128 | 63 & n);
                return t
            }, n.buf2binstring = function(e) {
                return i(e, e.length)
            }, n.binstring2buf = function(e) {
                for (var t = new r.Buf8(e.length), n = 0, i = t.length; n < i; n++) t[n] = e.charCodeAt(n);
                return t
            }, n.buf2string = function(e, t) {
                var n, r, o, a, c = t || e.length,
                    u = new Array(2 * c);
                for (r = 0, n = 0; n < c;)
                    if ((o = e[n++]) < 128) u[r++] = o;
                    else if ((a = s[o]) > 4) u[r++] = 65533, n += a - 1;
                else {
                    for (o &= 2 === a ? 31 : 3 === a ? 15 : 7; a > 1 && n < c;) o = o << 6 | 63 & e[n++], a--;
                    a > 1 ? u[r++] = 65533 : o < 65536 ? u[r++] = o : (o -= 65536, u[r++] = 55296 | o >> 10 & 1023, u[r++] = 56320 | 1023 & o)
                }
                return i(u, r)
            }, n.utf8border = function(e, t) {
                var n;
                for ((t = t || e.length) > e.length && (t = e.length), n = t - 1; n >= 0 && 128 == (192 & e[n]);) n--;
                return n < 0 ? t : 0 === n ? t : n + s[e[n]] > t ? n : t
            }
        }, {
            "./common": 1
        }],
        3: [function(e, t, n) {
            "use strict";
            t.exports = function(e, t, n, i) {
                for (var r = 65535 & e | 0, o = e >>> 16 & 65535 | 0, a = 0; 0 !== n;) {
                    n -= a = n > 2e3 ? 2e3 : n;
                    do {
                        o = o + (r = r + t[i++] | 0) | 0
                    } while (--a);
                    r %= 65521, o %= 65521
                }
                return r | o << 16 | 0
            }
        }, {}],
        4: [function(e, t, n) {
            "use strict";
            var i = function() {
                for (var e, t = [], n = 0; n < 256; n++) {
                    e = n;
                    for (var i = 0; i < 8; i++) e = 1 & e ? 3988292384 ^ e >>> 1 : e >>> 1;
                    t[n] = e
                }
                return t
            }();
            t.exports = function(e, t, n, r) {
                var o = i,
                    a = r + n;
                e ^= -1;
                for (var s = r; s < a; s++) e = e >>> 8 ^ o[255 & (e ^ t[s])];
                return -1 ^ e
            }
        }, {}],
        5: [function(e, t, n) {
            "use strict";

            function i(e, t) {
                return e.msg = I[t], t
            }

            function r(e) {
                return (e << 1) - (e > 4 ? 9 : 0)
            }

            function o(e) {
                for (var t = e.length; --t >= 0;) e[t] = 0
            }

            function a(e) {
                var t = e.state,
                    n = t.pending;
                n > e.avail_out && (n = e.avail_out), 0 !== n && (y.arraySet(e.output, t.pending_buf, t.pending_out, n, e.next_out), e.next_out += n, t.pending_out += n, e.total_out += n, e.avail_out -= n, t.pending -= n, 0 === t.pending && (t.pending_out = 0))
            }

            function s(e, t) {
                w._tr_flush_block(e, e.block_start >= 0 ? e.block_start : -1, e.strstart - e.block_start, t), e.block_start = e.strstart, a(e.strm)
            }

            function c(e, t) {
                e.pending_buf[e.pending++] = t
            }

            function u(e, t) {
                e.pending_buf[e.pending++] = t >>> 8 & 255, e.pending_buf[e.pending++] = 255 & t
            }

            function d(e, t, n, i) {
                var r = e.avail_in;
                return r > i && (r = i), 0 === r ? 0 : (e.avail_in -= r, y.arraySet(t, e.input, e.next_in, r, n), 1 === e.state.wrap ? e.adler = A(e.adler, t, r, n) : 2 === e.state.wrap && (e.adler = P(e.adler, t, r, n)), e.next_in += r, e.total_in += r, r)
            }

            function h(e, t) {
                var n, i, r = e.max_chain_length,
                    o = e.strstart,
                    a = e.prev_length,
                    s = e.nice_match,
                    c = e.strstart > e.w_size - z ? e.strstart - (e.w_size - z) : 0,
                    u = e.window,
                    d = e.w_mask,
                    h = e.prev,
                    l = e.strstart + K,
                    p = u[o + a - 1],
                    f = u[o + a];
                e.prev_length >= e.good_match && (r >>= 2), s > e.lookahead && (s = e.lookahead);
                do {
                    if (u[(n = t) + a] === f && u[n + a - 1] === p && u[n] === u[o] && u[++n] === u[o + 1]) {
                        o += 2, n++;
                        do {} while (u[++o] === u[++n] && u[++o] === u[++n] && u[++o] === u[++n] && u[++o] === u[++n] && u[++o] === u[++n] && u[++o] === u[++n] && u[++o] === u[++n] && u[++o] === u[++n] && o < l);
                        if (i = K - (l - o), o = l - K, i > a) {
                            if (e.match_start = t, a = i, i >= s) break;
                            p = u[o + a - 1], f = u[o + a]
                        }
                    }
                } while ((t = h[t & d]) > c && 0 != --r);
                return a <= e.lookahead ? a : e.lookahead
            }

            function l(e) {
                var t, n, i, r, o, a = e.w_size;
                do {
                    if (r = e.window_size - e.lookahead - e.strstart, e.strstart >= a + (a - z)) {
                        y.arraySet(e.window, e.window, a, a, 0), e.match_start -= a, e.strstart -= a, e.block_start -= a, t = n = e.hash_size;
                        do {
                            i = e.head[--t], e.head[t] = i >= a ? i - a : 0
                        } while (--n);
                        t = n = a;
                        do {
                            i = e.prev[--t], e.prev[t] = i >= a ? i - a : 0
                        } while (--n);
                        r += a
                    }
                    if (0 === e.strm.avail_in) break;
                    if (n = d(e.strm, e.window, e.strstart + e.lookahead, r), e.lookahead += n, e.lookahead + e.insert >= j)
                        for (o = e.strstart - e.insert, e.ins_h = e.window[o], e.ins_h = (e.ins_h << e.hash_shift ^ e.window[o + 1]) & e.hash_mask; e.insert && (e.ins_h = (e.ins_h << e.hash_shift ^ e.window[o + j - 1]) & e.hash_mask, e.prev[o & e.w_mask] = e.head[e.ins_h], e.head[e.ins_h] = o, o++, e.insert--, !(e.lookahead + e.insert < j)););
                } while (e.lookahead < z && 0 !== e.strm.avail_in)
            }

            function p(e, t) {
                for (var n, i;;) {
                    if (e.lookahead < z) {
                        if (l(e), e.lookahead < z && t === C) return Y;
                        if (0 === e.lookahead) break
                    }
                    if (n = 0, e.lookahead >= j && (e.ins_h = (e.ins_h << e.hash_shift ^ e.window[e.strstart + j - 1]) & e.hash_mask, n = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h], e.head[e.ins_h] = e.strstart), 0 !== n && e.strstart - n <= e.w_size - z && (e.match_length = h(e, n)), e.match_length >= j)
                        if (i = w._tr_tally(e, e.strstart - e.match_start, e.match_length - j), e.lookahead -= e.match_length, e.match_length <= e.max_lazy_match && e.lookahead >= j) {
                            e.match_length--;
                            do {
                                e.strstart++, e.ins_h = (e.ins_h << e.hash_shift ^ e.window[e.strstart + j - 1]) & e.hash_mask, n = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h], e.head[e.ins_h] = e.strstart
                            } while (0 != --e.match_length);
                            e.strstart++
                        } else e.strstart += e.match_length, e.match_length = 0, e.ins_h = e.window[e.strstart], e.ins_h = (e.ins_h << e.hash_shift ^ e.window[e.strstart + 1]) & e.hash_mask;
                    else i = w._tr_tally(e, 0, e.window[e.strstart]), e.lookahead--, e.strstart++;
                    if (i && (s(e, !1), 0 === e.strm.avail_out)) return Y
                }
                return e.insert = e.strstart < j - 1 ? e.strstart : j - 1, t === D ? (s(e, !0), 0 === e.strm.avail_out ? J : Q) : e.last_lit && (s(e, !1), 0 === e.strm.avail_out) ? Y : q
            }

            function f(e, t) {
                for (var n, i, r;;) {
                    if (e.lookahead < z) {
                        if (l(e), e.lookahead < z && t === C) return Y;
                        if (0 === e.lookahead) break
                    }
                    if (n = 0, e.lookahead >= j && (e.ins_h = (e.ins_h << e.hash_shift ^ e.window[e.strstart + j - 1]) & e.hash_mask, n = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h], e.head[e.ins_h] = e.strstart), e.prev_length = e.match_length, e.prev_match = e.match_start, e.match_length = j - 1, 0 !== n && e.prev_length < e.max_lazy_match && e.strstart - n <= e.w_size - z && (e.match_length = h(e, n), e.match_length <= 5 && (e.strategy === R || e.match_length === j && e.strstart - e.match_start > 4096) && (e.match_length = j - 1)), e.prev_length >= j && e.match_length <= e.prev_length) {
                        r = e.strstart + e.lookahead - j, i = w._tr_tally(e, e.strstart - 1 - e.prev_match, e.prev_length - j), e.lookahead -= e.prev_length - 1, e.prev_length -= 2;
                        do {
                            ++e.strstart <= r && (e.ins_h = (e.ins_h << e.hash_shift ^ e.window[e.strstart + j - 1]) & e.hash_mask, n = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h], e.head[e.ins_h] = e.strstart)
                        } while (0 != --e.prev_length);
                        if (e.match_available = 0, e.match_length = j - 1, e.strstart++, i && (s(e, !1), 0 === e.strm.avail_out)) return Y
                    } else if (e.match_available) {
                        if ((i = w._tr_tally(e, 0, e.window[e.strstart - 1])) && s(e, !1), e.strstart++, e.lookahead--, 0 === e.strm.avail_out) return Y
                    } else e.match_available = 1, e.strstart++, e.lookahead--
                }
                return e.match_available && (i = w._tr_tally(e, 0, e.window[e.strstart - 1]), e.match_available = 0), e.insert = e.strstart < j - 1 ? e.strstart : j - 1, t === D ? (s(e, !0), 0 === e.strm.avail_out ? J : Q) : e.last_lit && (s(e, !1), 0 === e.strm.avail_out) ? Y : q
            }

            function g(e, t) {
                for (var n, i, r, o, a = e.window;;) {
                    if (e.lookahead <= K) {
                        if (l(e), e.lookahead <= K && t === C) return Y;
                        if (0 === e.lookahead) break
                    }
                    if (e.match_length = 0, e.lookahead >= j && e.strstart > 0 && (r = e.strstart - 1, (i = a[r]) === a[++r] && i === a[++r] && i === a[++r])) {
                        o = e.strstart + K;
                        do {} while (i === a[++r] && i === a[++r] && i === a[++r] && i === a[++r] && i === a[++r] && i === a[++r] && i === a[++r] && i === a[++r] && r < o);
                        e.match_length = K - (o - r), e.match_length > e.lookahead && (e.match_length = e.lookahead)
                    }
                    if (e.match_length >= j ? (n = w._tr_tally(e, 1, e.match_length - j), e.lookahead -= e.match_length, e.strstart += e.match_length, e.match_length = 0) : (n = w._tr_tally(e, 0, e.window[e.strstart]), e.lookahead--, e.strstart++), n && (s(e, !1), 0 === e.strm.avail_out)) return Y
                }
                return e.insert = 0, t === D ? (s(e, !0), 0 === e.strm.avail_out ? J : Q) : e.last_lit && (s(e, !1), 0 === e.strm.avail_out) ? Y : q
            }

            function m(e, t) {
                for (var n;;) {
                    if (0 === e.lookahead && (l(e), 0 === e.lookahead)) {
                        if (t === C) return Y;
                        break
                    }
                    if (e.match_length = 0, n = w._tr_tally(e, 0, e.window[e.strstart]), e.lookahead--, e.strstart++, n && (s(e, !1), 0 === e.strm.avail_out)) return Y
                }
                return e.insert = 0, t === D ? (s(e, !0), 0 === e.strm.avail_out ? J : Q) : e.last_lit && (s(e, !1), 0 === e.strm.avail_out) ? Y : q
            }

            function _(e, t, n, i, r) {
                this.good_length = e, this.max_lazy = t, this.nice_length = n, this.max_chain = i, this.func = r
            }

            function v() {
                this.strm = null, this.status = 0, this.pending_buf = null, this.pending_buf_size = 0, this.pending_out = 0, this.pending = 0, this.wrap = 0, this.gzhead = null, this.gzindex = 0, this.method = x, this.last_flush = -1, this.w_size = 0, this.w_bits = 0, this.w_mask = 0, this.window = null, this.window_size = 0, this.prev = null, this.head = null, this.ins_h = 0, this.hash_size = 0, this.hash_bits = 0, this.hash_mask = 0, this.hash_shift = 0, this.block_start = 0, this.match_length = 0, this.prev_match = 0, this.match_available = 0, this.strstart = 0, this.match_start = 0, this.lookahead = 0, this.prev_length = 0, this.max_chain_length = 0, this.max_lazy_match = 0, this.level = 0, this.strategy = 0, this.good_match = 0, this.nice_match = 0, this.dyn_ltree = new y.Buf16(2 * G), this.dyn_dtree = new y.Buf16(2 * (2 * H + 1)), this.bl_tree = new y.Buf16(2 * (2 * F + 1)), o(this.dyn_ltree), o(this.dyn_dtree), o(this.bl_tree), this.l_desc = null, this.d_desc = null, this.bl_desc = null, this.bl_count = new y.Buf16(V + 1), this.heap = new y.Buf16(2 * N + 1), o(this.heap), this.heap_len = 0, this.heap_max = 0, this.depth = new y.Buf16(2 * N + 1), o(this.depth), this.l_buf = 0, this.lit_bufsize = 0, this.last_lit = 0, this.d_buf = 0, this.opt_len = 0, this.static_len = 0, this.matches = 0, this.insert = 0, this.bi_buf = 0, this.bi_valid = 0
            }

            function S(e) {
                var t;
                return e && e.state ? (e.total_in = e.total_out = 0, e.data_type = U, (t = e.state).pending = 0, t.pending_out = 0, t.wrap < 0 && (t.wrap = -t.wrap), t.status = t.wrap ? W : X, e.adler = 2 === t.wrap ? 0 : 1, t.last_flush = C, w._tr_init(t), L) : i(e, O)
            }

            function T(e) {
                var t = S(e);
                return t === L && function(e) {
                    e.window_size = 2 * e.w_size, o(e.head), e.max_lazy_match = E[e.level].max_lazy, e.good_match = E[e.level].good_length, e.nice_match = E[e.level].nice_length, e.max_chain_length = E[e.level].max_chain, e.strstart = 0, e.block_start = 0, e.lookahead = 0, e.insert = 0, e.match_length = e.prev_length = j - 1, e.match_available = 0, e.ins_h = 0
                }(e.state), t
            }

            function b(e, t, n, r, o, a) {
                if (!e) return O;
                var s = 1;
                if (t === M && (t = 6), r < 0 ? (s = 0, r = -r) : r > 15 && (s = 2, r -= 16), o < 1 || o > B || n !== x || r < 8 || r > 15 || t < 0 || t > 9 || a < 0 || a > k) return i(e, O);
                8 === r && (r = 9);
                var c = new v;
                return e.state = c, c.strm = e, c.wrap = s, c.gzhead = null, c.w_bits = r, c.w_size = 1 << c.w_bits, c.w_mask = c.w_size - 1, c.hash_bits = o + 7, c.hash_size = 1 << c.hash_bits, c.hash_mask = c.hash_size - 1, c.hash_shift = ~~((c.hash_bits + j - 1) / j), c.window = new y.Buf8(2 * c.w_size), c.head = new y.Buf16(c.hash_size), c.prev = new y.Buf16(c.w_size), c.lit_bufsize = 1 << o + 6, c.pending_buf_size = 4 * c.lit_bufsize, c.pending_buf = new y.Buf8(c.pending_buf_size), c.d_buf = 1 * c.lit_bufsize, c.l_buf = 3 * c.lit_bufsize, c.level = t, c.strategy = a, c.method = n, T(e)
            }
            var E, y = e("../utils/common"),
                w = e("./trees"),
                A = e("./adler32"),
                P = e("./crc32"),
                I = e("./messages"),
                C = 0,
                D = 4,
                L = 0,
                O = -2,
                M = -1,
                R = 1,
                k = 4,
                U = 2,
                x = 8,
                B = 9,
                N = 286,
                H = 30,
                F = 19,
                G = 2 * N + 1,
                V = 15,
                j = 3,
                K = 258,
                z = K + j + 1,
                W = 42,
                X = 113,
                Y = 1,
                q = 2,
                J = 3,
                Q = 4;
            E = [new _(0, 0, 0, 0, function(e, t) {
                var n = 65535;
                for (n > e.pending_buf_size - 5 && (n = e.pending_buf_size - 5);;) {
                    if (e.lookahead <= 1) {
                        if (l(e), 0 === e.lookahead && t === C) return Y;
                        if (0 === e.lookahead) break
                    }
                    e.strstart += e.lookahead, e.lookahead = 0;
                    var i = e.block_start + n;
                    if ((0 === e.strstart || e.strstart >= i) && (e.lookahead = e.strstart - i, e.strstart = i, s(e, !1), 0 === e.strm.avail_out)) return Y;
                    if (e.strstart - e.block_start >= e.w_size - z && (s(e, !1), 0 === e.strm.avail_out)) return Y
                }
                return e.insert = 0, t === D ? (s(e, !0), 0 === e.strm.avail_out ? J : Q) : (e.strstart > e.block_start && (s(e, !1), e.strm.avail_out), Y)
            }), new _(4, 4, 8, 4, p), new _(4, 5, 16, 8, p), new _(4, 6, 32, 32, p), new _(4, 4, 16, 16, f), new _(8, 16, 32, 32, f), new _(8, 16, 128, 128, f), new _(8, 32, 128, 256, f), new _(32, 128, 258, 1024, f), new _(32, 258, 258, 4096, f)], n.deflateInit = function(e, t) {
                return b(e, t, x, 15, 8, 0)
            }, n.deflateInit2 = b, n.deflateReset = T, n.deflateResetKeep = S, n.deflateSetHeader = function(e, t) {
                return e && e.state ? 2 !== e.state.wrap ? O : (e.state.gzhead = t, L) : O
            }, n.deflate = function(e, t) {
                var n, s, d, h;
                if (!e || !e.state || t > 5 || t < 0) return e ? i(e, O) : O;
                if (s = e.state, !e.output || !e.input && 0 !== e.avail_in || 666 === s.status && t !== D) return i(e, 0 === e.avail_out ? -5 : O);
                if (s.strm = e, n = s.last_flush, s.last_flush = t, s.status === W)
                    if (2 === s.wrap) e.adler = 0, c(s, 31), c(s, 139), c(s, 8), s.gzhead ? (c(s, (s.gzhead.text ? 1 : 0) + (s.gzhead.hcrc ? 2 : 0) + (s.gzhead.extra ? 4 : 0) + (s.gzhead.name ? 8 : 0) + (s.gzhead.comment ? 16 : 0)), c(s, 255 & s.gzhead.time), c(s, s.gzhead.time >> 8 & 255), c(s, s.gzhead.time >> 16 & 255), c(s, s.gzhead.time >> 24 & 255), c(s, 9 === s.level ? 2 : s.strategy >= 2 || s.level < 2 ? 4 : 0), c(s, 255 & s.gzhead.os), s.gzhead.extra && s.gzhead.extra.length && (c(s, 255 & s.gzhead.extra.length), c(s, s.gzhead.extra.length >> 8 & 255)), s.gzhead.hcrc && (e.adler = P(e.adler, s.pending_buf, s.pending, 0)), s.gzindex = 0, s.status = 69) : (c(s, 0), c(s, 0), c(s, 0), c(s, 0), c(s, 0), c(s, 9 === s.level ? 2 : s.strategy >= 2 || s.level < 2 ? 4 : 0), c(s, 3), s.status = X);
                    else {
                        var l = x + (s.w_bits - 8 << 4) << 8;
                        l |= (s.strategy >= 2 || s.level < 2 ? 0 : s.level < 6 ? 1 : 6 === s.level ? 2 : 3) << 6, 0 !== s.strstart && (l |= 32), l += 31 - l % 31, s.status = X, u(s, l), 0 !== s.strstart && (u(s, e.adler >>> 16), u(s, 65535 & e.adler)), e.adler = 1
                    } if (69 === s.status)
                    if (s.gzhead.extra) {
                        for (d = s.pending; s.gzindex < (65535 & s.gzhead.extra.length) && (s.pending !== s.pending_buf_size || (s.gzhead.hcrc && s.pending > d && (e.adler = P(e.adler, s.pending_buf, s.pending - d, d)), a(e), d = s.pending, s.pending !== s.pending_buf_size));) c(s, 255 & s.gzhead.extra[s.gzindex]), s.gzindex++;
                        s.gzhead.hcrc && s.pending > d && (e.adler = P(e.adler, s.pending_buf, s.pending - d, d)), s.gzindex === s.gzhead.extra.length && (s.gzindex = 0, s.status = 73)
                    } else s.status = 73;
                if (73 === s.status)
                    if (s.gzhead.name) {
                        d = s.pending;
                        do {
                            if (s.pending === s.pending_buf_size && (s.gzhead.hcrc && s.pending > d && (e.adler = P(e.adler, s.pending_buf, s.pending - d, d)), a(e), d = s.pending, s.pending === s.pending_buf_size)) {
                                h = 1;
                                break
                            }
                            h = s.gzindex < s.gzhead.name.length ? 255 & s.gzhead.name.charCodeAt(s.gzindex++) : 0, c(s, h)
                        } while (0 !== h);
                        s.gzhead.hcrc && s.pending > d && (e.adler = P(e.adler, s.pending_buf, s.pending - d, d)), 0 === h && (s.gzindex = 0, s.status = 91)
                    } else s.status = 91;
                if (91 === s.status)
                    if (s.gzhead.comment) {
                        d = s.pending;
                        do {
                            if (s.pending === s.pending_buf_size && (s.gzhead.hcrc && s.pending > d && (e.adler = P(e.adler, s.pending_buf, s.pending - d, d)), a(e), d = s.pending, s.pending === s.pending_buf_size)) {
                                h = 1;
                                break
                            }
                            h = s.gzindex < s.gzhead.comment.length ? 255 & s.gzhead.comment.charCodeAt(s.gzindex++) : 0, c(s, h)
                        } while (0 !== h);
                        s.gzhead.hcrc && s.pending > d && (e.adler = P(e.adler, s.pending_buf, s.pending - d, d)), 0 === h && (s.status = 103)
                    } else s.status = 103;
                if (103 === s.status && (s.gzhead.hcrc ? (s.pending + 2 > s.pending_buf_size && a(e), s.pending + 2 <= s.pending_buf_size && (c(s, 255 & e.adler), c(s, e.adler >> 8 & 255), e.adler = 0, s.status = X)) : s.status = X), 0 !== s.pending) {
                    if (a(e), 0 === e.avail_out) return s.last_flush = -1, L
                } else if (0 === e.avail_in && r(t) <= r(n) && t !== D) return i(e, -5);
                if (666 === s.status && 0 !== e.avail_in) return i(e, -5);
                if (0 !== e.avail_in || 0 !== s.lookahead || t !== C && 666 !== s.status) {
                    var p = 2 === s.strategy ? m(s, t) : 3 === s.strategy ? g(s, t) : E[s.level].func(s, t);
                    if (p !== J && p !== Q || (s.status = 666), p === Y || p === J) return 0 === e.avail_out && (s.last_flush = -1), L;
                    if (p === q && (1 === t ? w._tr_align(s) : 5 !== t && (w._tr_stored_block(s, 0, 0, !1), 3 === t && (o(s.head), 0 === s.lookahead && (s.strstart = 0, s.block_start = 0, s.insert = 0))), a(e), 0 === e.avail_out)) return s.last_flush = -1, L
                }
                return t !== D ? L : s.wrap <= 0 ? 1 : (2 === s.wrap ? (c(s, 255 & e.adler), c(s, e.adler >> 8 & 255), c(s, e.adler >> 16 & 255), c(s, e.adler >> 24 & 255), c(s, 255 & e.total_in), c(s, e.total_in >> 8 & 255), c(s, e.total_in >> 16 & 255), c(s, e.total_in >> 24 & 255)) : (u(s, e.adler >>> 16), u(s, 65535 & e.adler)), a(e), s.wrap > 0 && (s.wrap = -s.wrap), 0 !== s.pending ? L : 1)
            }, n.deflateEnd = function(e) {
                var t;
                return e && e.state ? (t = e.state.status) !== W && 69 !== t && 73 !== t && 91 !== t && 103 !== t && t !== X && 666 !== t ? i(e, O) : (e.state = null, t === X ? i(e, -3) : L) : O
            }, n.deflateSetDictionary = function(e, t) {
                var n, i, r, a, s, c, u, d, h = t.length;
                if (!e || !e.state) return O;
                if (n = e.state, 2 === (a = n.wrap) || 1 === a && n.status !== W || n.lookahead) return O;
                for (1 === a && (e.adler = A(e.adler, t, h, 0)), n.wrap = 0, h >= n.w_size && (0 === a && (o(n.head), n.strstart = 0, n.block_start = 0, n.insert = 0), d = new y.Buf8(n.w_size), y.arraySet(d, t, h - n.w_size, n.w_size, 0), t = d, h = n.w_size), s = e.avail_in, c = e.next_in, u = e.input, e.avail_in = h, e.next_in = 0, e.input = t, l(n); n.lookahead >= j;) {
                    i = n.strstart, r = n.lookahead - (j - 1);
                    do {
                        n.ins_h = (n.ins_h << n.hash_shift ^ n.window[i + j - 1]) & n.hash_mask, n.prev[i & n.w_mask] = n.head[n.ins_h], n.head[n.ins_h] = i, i++
                    } while (--r);
                    n.strstart = i, n.lookahead = j - 1, l(n)
                }
                return n.strstart += n.lookahead, n.block_start = n.strstart, n.insert = n.lookahead, n.lookahead = 0, n.match_length = n.prev_length = j - 1, n.match_available = 0, e.next_in = c, e.input = u, e.avail_in = s, n.wrap = a, L
            }, n.deflateInfo = "pako deflate (from Nodeca project)"
        }, {
            "../utils/common": 1,
            "./adler32": 3,
            "./crc32": 4,
            "./messages": 6,
            "./trees": 7
        }],
        6: [function(e, t, n) {
            "use strict";
            t.exports = {
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
        }, {}],
        7: [function(e, t, n) {
            "use strict";

            function i(e) {
                for (var t = e.length; --t >= 0;) e[t] = 0
            }

            function r(e, t, n, i, r) {
                this.static_tree = e, this.extra_bits = t, this.extra_base = n, this.elems = i, this.max_length = r, this.has_stree = e && e.length
            }

            function o(e, t) {
                this.dyn_tree = e, this.max_code = 0, this.stat_desc = t
            }

            function a(e) {
                return e < 256 ? K[e] : K[256 + (e >>> 7)]
            }

            function s(e, t) {
                e.pending_buf[e.pending++] = 255 & t, e.pending_buf[e.pending++] = t >>> 8 & 255
            }

            function c(e, t, n) {
                e.bi_valid > M - n ? (e.bi_buf |= t << e.bi_valid & 65535, s(e, e.bi_buf), e.bi_buf = t >> M - e.bi_valid, e.bi_valid += n - M) : (e.bi_buf |= t << e.bi_valid & 65535, e.bi_valid += n)
            }

            function u(e, t, n) {
                c(e, n[2 * t], n[2 * t + 1])
            }

            function d(e, t) {
                var n = 0;
                do {
                    n |= 1 & e, e >>>= 1, n <<= 1
                } while (--t > 0);
                return n >>> 1
            }

            function h(e, t, n) {
                var i, r, o = new Array(O + 1),
                    a = 0;
                for (i = 1; i <= O; i++) o[i] = a = a + n[i - 1] << 1;
                for (r = 0; r <= t; r++) {
                    var s = e[2 * r + 1];
                    0 !== s && (e[2 * r] = d(o[s]++, s))
                }
            }

            function l(e) {
                var t;
                for (t = 0; t < I; t++) e.dyn_ltree[2 * t] = 0;
                for (t = 0; t < C; t++) e.dyn_dtree[2 * t] = 0;
                for (t = 0; t < D; t++) e.bl_tree[2 * t] = 0;
                e.dyn_ltree[2 * k] = 1, e.opt_len = e.static_len = 0, e.last_lit = e.matches = 0
            }

            function p(e) {
                e.bi_valid > 8 ? s(e, e.bi_buf) : e.bi_valid > 0 && (e.pending_buf[e.pending++] = e.bi_buf), e.bi_buf = 0, e.bi_valid = 0
            }

            function f(e, t, n, i) {
                var r = 2 * t,
                    o = 2 * n;
                return e[r] < e[o] || e[r] === e[o] && i[t] <= i[n]
            }

            function g(e, t, n) {
                for (var i = e.heap[n], r = n << 1; r <= e.heap_len && (r < e.heap_len && f(t, e.heap[r + 1], e.heap[r], e.depth) && r++, !f(t, i, e.heap[r], e.depth));) e.heap[n] = e.heap[r], n = r, r <<= 1;
                e.heap[n] = i
            }

            function m(e, t, n) {
                var i, r, o, s, d = 0;
                if (0 !== e.last_lit)
                    do {
                        i = e.pending_buf[e.d_buf + 2 * d] << 8 | e.pending_buf[e.d_buf + 2 * d + 1], r = e.pending_buf[e.l_buf + d], d++, 0 === i ? u(e, r, t) : (u(e, (o = z[r]) + P + 1, t), 0 !== (s = N[o]) && c(e, r -= W[o], s), u(e, o = a(--i), n), 0 !== (s = H[o]) && c(e, i -= X[o], s))
                    } while (d < e.last_lit);
                u(e, k, t)
            }

            function _(e, t) {
                var n, i, r, o = t.dyn_tree,
                    a = t.stat_desc.static_tree,
                    s = t.stat_desc.has_stree,
                    c = t.stat_desc.elems,
                    u = -1;
                for (e.heap_len = 0, e.heap_max = L, n = 0; n < c; n++) 0 !== o[2 * n] ? (e.heap[++e.heap_len] = u = n, e.depth[n] = 0) : o[2 * n + 1] = 0;
                for (; e.heap_len < 2;) o[2 * (r = e.heap[++e.heap_len] = u < 2 ? ++u : 0)] = 1, e.depth[r] = 0, e.opt_len--, s && (e.static_len -= a[2 * r + 1]);
                for (t.max_code = u, n = e.heap_len >> 1; n >= 1; n--) g(e, o, n);
                r = c;
                do {
                    n = e.heap[1], e.heap[1] = e.heap[e.heap_len--], g(e, o, 1), i = e.heap[1], e.heap[--e.heap_max] = n, e.heap[--e.heap_max] = i, o[2 * r] = o[2 * n] + o[2 * i], e.depth[r] = (e.depth[n] >= e.depth[i] ? e.depth[n] : e.depth[i]) + 1, o[2 * n + 1] = o[2 * i + 1] = r, e.heap[1] = r++, g(e, o, 1)
                } while (e.heap_len >= 2);
                e.heap[--e.heap_max] = e.heap[1],
                    function(e, t) {
                        var n, i, r, o, a, s, c = t.dyn_tree,
                            u = t.max_code,
                            d = t.stat_desc.static_tree,
                            h = t.stat_desc.has_stree,
                            l = t.stat_desc.extra_bits,
                            p = t.stat_desc.extra_base,
                            f = t.stat_desc.max_length,
                            g = 0;
                        for (o = 0; o <= O; o++) e.bl_count[o] = 0;
                        for (c[2 * e.heap[e.heap_max] + 1] = 0, n = e.heap_max + 1; n < L; n++)(o = c[2 * c[2 * (i = e.heap[n]) + 1] + 1] + 1) > f && (o = f, g++), c[2 * i + 1] = o, i > u || (e.bl_count[o]++, a = 0, i >= p && (a = l[i - p]), s = c[2 * i], e.opt_len += s * (o + a), h && (e.static_len += s * (d[2 * i + 1] + a)));
                        if (0 !== g) {
                            do {
                                for (o = f - 1; 0 === e.bl_count[o];) o--;
                                e.bl_count[o]--, e.bl_count[o + 1] += 2, e.bl_count[f]--, g -= 2
                            } while (g > 0);
                            for (o = f; 0 !== o; o--)
                                for (i = e.bl_count[o]; 0 !== i;)(r = e.heap[--n]) > u || (c[2 * r + 1] !== o && (e.opt_len += (o - c[2 * r + 1]) * c[2 * r], c[2 * r + 1] = o), i--)
                        }
                    }(e, t), h(o, u, e.bl_count)
            }

            function v(e, t, n) {
                var i, r, o = -1,
                    a = t[1],
                    s = 0,
                    c = 7,
                    u = 4;
                for (0 === a && (c = 138, u = 3), t[2 * (n + 1) + 1] = 65535, i = 0; i <= n; i++) r = a, a = t[2 * (i + 1) + 1], ++s < c && r === a || (s < u ? e.bl_tree[2 * r] += s : 0 !== r ? (r !== o && e.bl_tree[2 * r]++, e.bl_tree[2 * U]++) : s <= 10 ? e.bl_tree[2 * x]++ : e.bl_tree[2 * B]++, s = 0, o = r, 0 === a ? (c = 138, u = 3) : r === a ? (c = 6, u = 3) : (c = 7, u = 4))
            }

            function S(e, t, n) {
                var i, r, o = -1,
                    a = t[1],
                    s = 0,
                    d = 7,
                    h = 4;
                for (0 === a && (d = 138, h = 3), i = 0; i <= n; i++)
                    if (r = a, a = t[2 * (i + 1) + 1], !(++s < d && r === a)) {
                        if (s < h)
                            do {
                                u(e, r, e.bl_tree)
                            } while (0 != --s);
                        else 0 !== r ? (r !== o && (u(e, r, e.bl_tree), s--), u(e, U, e.bl_tree), c(e, s - 3, 2)) : s <= 10 ? (u(e, x, e.bl_tree), c(e, s - 3, 3)) : (u(e, B, e.bl_tree), c(e, s - 11, 7));
                        s = 0, o = r, 0 === a ? (d = 138, h = 3) : r === a ? (d = 6, h = 3) : (d = 7, h = 4)
                    }
            }

            function T(e, t, n, i) {
                c(e, (w << 1) + (i ? 1 : 0), 3),
                    function(e, t, n, i) {
                        p(e), i && (s(e, n), s(e, ~n)), b.arraySet(e.pending_buf, e.window, t, n, e.pending), e.pending += n
                    }(e, t, n, !0)
            }
            var b = e("../utils/common"),
                E = 0,
                y = 1,
                w = 0,
                A = 29,
                P = 256,
                I = P + 1 + A,
                C = 30,
                D = 19,
                L = 2 * I + 1,
                O = 15,
                M = 16,
                R = 7,
                k = 256,
                U = 16,
                x = 17,
                B = 18,
                N = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0],
                H = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13],
                F = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7],
                G = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15],
                V = new Array(2 * (I + 2));
            i(V);
            var j = new Array(2 * C);
            i(j);
            var K = new Array(512);
            i(K);
            var z = new Array(256);
            i(z);
            var W = new Array(A);
            i(W);
            var X = new Array(C);
            i(X);
            var Y, q, J, Q = !1;
            n._tr_init = function(e) {
                Q || (function() {
                    var e, t, n, i, o, a = new Array(O + 1);
                    for (n = 0, i = 0; i < A - 1; i++)
                        for (W[i] = n, e = 0; e < 1 << N[i]; e++) z[n++] = i;
                    for (z[n - 1] = i, o = 0, i = 0; i < 16; i++)
                        for (X[i] = o, e = 0; e < 1 << H[i]; e++) K[o++] = i;
                    for (o >>= 7; i < C; i++)
                        for (X[i] = o << 7, e = 0; e < 1 << H[i] - 7; e++) K[256 + o++] = i;
                    for (t = 0; t <= O; t++) a[t] = 0;
                    for (e = 0; e <= 143;) V[2 * e + 1] = 8, e++, a[8]++;
                    for (; e <= 255;) V[2 * e + 1] = 9, e++, a[9]++;
                    for (; e <= 279;) V[2 * e + 1] = 7, e++, a[7]++;
                    for (; e <= 287;) V[2 * e + 1] = 8, e++, a[8]++;
                    for (h(V, I + 1, a), e = 0; e < C; e++) j[2 * e + 1] = 5, j[2 * e] = d(e, 5);
                    Y = new r(V, N, P + 1, I, O), q = new r(j, H, 0, C, O), J = new r(new Array(0), F, 0, D, R)
                }(), Q = !0), e.l_desc = new o(e.dyn_ltree, Y), e.d_desc = new o(e.dyn_dtree, q), e.bl_desc = new o(e.bl_tree, J), e.bi_buf = 0, e.bi_valid = 0, l(e)
            }, n._tr_stored_block = T, n._tr_flush_block = function(e, t, n, i) {
                var r, o, a = 0;
                e.level > 0 ? (2 === e.strm.data_type && (e.strm.data_type = function(e) {
                    var t, n = 4093624447;
                    for (t = 0; t <= 31; t++, n >>>= 1)
                        if (1 & n && 0 !== e.dyn_ltree[2 * t]) return E;
                    if (0 !== e.dyn_ltree[18] || 0 !== e.dyn_ltree[20] || 0 !== e.dyn_ltree[26]) return y;
                    for (t = 32; t < P; t++)
                        if (0 !== e.dyn_ltree[2 * t]) return y;
                    return E
                }(e)), _(e, e.l_desc), _(e, e.d_desc), a = function(e) {
                    var t;
                    for (v(e, e.dyn_ltree, e.l_desc.max_code), v(e, e.dyn_dtree, e.d_desc.max_code), _(e, e.bl_desc), t = D - 1; t >= 3 && 0 === e.bl_tree[2 * G[t] + 1]; t--);
                    return e.opt_len += 3 * (t + 1) + 5 + 5 + 4, t
                }(e), r = e.opt_len + 3 + 7 >>> 3, (o = e.static_len + 3 + 7 >>> 3) <= r && (r = o)) : r = o = n + 5, n + 4 <= r && -1 !== t ? T(e, t, n, i) : 4 === e.strategy || o === r ? (c(e, 2 + (i ? 1 : 0), 3), m(e, V, j)) : (c(e, 4 + (i ? 1 : 0), 3), function(e, t, n, i) {
                    var r;
                    for (c(e, t - 257, 5), c(e, n - 1, 5), c(e, i - 4, 4), r = 0; r < i; r++) c(e, e.bl_tree[2 * G[r] + 1], 3);
                    S(e, e.dyn_ltree, t - 1), S(e, e.dyn_dtree, n - 1)
                }(e, e.l_desc.max_code + 1, e.d_desc.max_code + 1, a + 1), m(e, e.dyn_ltree, e.dyn_dtree)), l(e), i && p(e)
            }, n._tr_tally = function(e, t, n) {
                return e.pending_buf[e.d_buf + 2 * e.last_lit] = t >>> 8 & 255, e.pending_buf[e.d_buf + 2 * e.last_lit + 1] = 255 & t, e.pending_buf[e.l_buf + e.last_lit] = 255 & n, e.last_lit++, 0 === t ? e.dyn_ltree[2 * n]++ : (e.matches++, t--, e.dyn_ltree[2 * (z[n] + P + 1)]++, e.dyn_dtree[2 * a(t)]++), e.last_lit === e.lit_bufsize - 1
            }, n._tr_align = function(e) {
                c(e, 2, 3), u(e, k, V),
                    function(e) {
                        16 === e.bi_valid ? (s(e, e.bi_buf), e.bi_buf = 0, e.bi_valid = 0) : e.bi_valid >= 8 && (e.pending_buf[e.pending++] = 255 & e.bi_buf, e.bi_buf >>= 8, e.bi_valid -= 8)
                    }(e)
            }
        }, {
            "../utils/common": 1
        }],
        8: [function(e, t, n) {
            "use strict";
            t.exports = function() {
                this.input = null, this.next_in = 0, this.avail_in = 0, this.total_in = 0, this.output = null, this.next_out = 0, this.avail_out = 0, this.total_out = 0, this.msg = "", this.state = null, this.data_type = 2, this.adler = 0
            }
        }, {}],
        "/lib/deflate.js": [function(e, t, n) {
            "use strict";

            function i(e) {
                if (!(this instanceof i)) return new i(e);
                this.options = a.assign({
                    level: l,
                    method: f,
                    chunkSize: 16384,
                    windowBits: 15,
                    memLevel: 8,
                    strategy: p,
                    to: ""
                }, e || {});
                var t = this.options;
                t.raw && t.windowBits > 0 ? t.windowBits = -t.windowBits : t.gzip && t.windowBits > 0 && t.windowBits < 16 && (t.windowBits += 16), this.err = 0, this.msg = "", this.ended = !1, this.chunks = [], this.strm = new u, this.strm.avail_out = 0;
                var n = o.deflateInit2(this.strm, t.level, t.method, t.windowBits, t.memLevel, t.strategy);
                if (n !== h) throw new Error(c[n]);
                if (t.header && o.deflateSetHeader(this.strm, t.header), t.dictionary) {
                    var r;
                    if (r = "string" == typeof t.dictionary ? s.string2buf(t.dictionary) : "[object ArrayBuffer]" === d.call(t.dictionary) ? new Uint8Array(t.dictionary) : t.dictionary, (n = o.deflateSetDictionary(this.strm, r)) !== h) throw new Error(c[n]);
                    this._dict_set = !0
                }
            }

            function r(e, t) {
                var n = new i(t);
                if (n.push(e, !0), n.err) throw n.msg || c[n.err];
                return n.result
            }
            var o = e("./zlib/deflate"),
                a = e("./utils/common"),
                s = e("./utils/strings"),
                c = e("./zlib/messages"),
                u = e("./zlib/zstream"),
                d = Object.prototype.toString,
                h = 0,
                l = -1,
                p = 0,
                f = 8;
            i.prototype.push = function(e, t) {
                var n, i, r = this.strm,
                    c = this.options.chunkSize;
                if (this.ended) return !1;
                i = t === ~~t ? t : !0 === t ? 4 : 0, "string" == typeof e ? r.input = s.string2buf(e) : "[object ArrayBuffer]" === d.call(e) ? r.input = new Uint8Array(e) : r.input = e, r.next_in = 0, r.avail_in = r.input.length;
                do {
                    if (0 === r.avail_out && (r.output = new a.Buf8(c), r.next_out = 0, r.avail_out = c), 1 !== (n = o.deflate(r, i)) && n !== h) return this.onEnd(n), this.ended = !0, !1;
                    0 !== r.avail_out && (0 !== r.avail_in || 4 !== i && 2 !== i) || ("string" === this.options.to ? this.onData(s.buf2binstring(a.shrinkBuf(r.output, r.next_out))) : this.onData(a.shrinkBuf(r.output, r.next_out)))
                } while ((r.avail_in > 0 || 0 === r.avail_out) && 1 !== n);
                return 4 === i ? (n = o.deflateEnd(this.strm), this.onEnd(n), this.ended = !0, n === h) : 2 !== i || (this.onEnd(h), r.avail_out = 0, !0)
            }, i.prototype.onData = function(e) {
                this.chunks.push(e)
            }, i.prototype.onEnd = function(e) {
                e === h && ("string" === this.options.to ? this.result = this.chunks.join("") : this.result = a.flattenChunks(this.chunks)), this.chunks = [], this.err = e, this.msg = this.strm.msg
            }, n.Deflate = i, n.deflate = r, n.deflateRaw = function(e, t) {
                return (t = t || {}).raw = !0, r(e, t)
            }, n.gzip = function(e, t) {
                return (t = t || {}).gzip = !0, r(e, t)
            }
        }, {
            "./utils/common": 1,
            "./utils/strings": 2,
            "./zlib/deflate": 5,
            "./zlib/messages": 6,
            "./zlib/zstream": 8
        }]
    }, {}, [])("/lib/deflate.js"), _securedTouchDependencies.evaluateModernizr = function() {
        ! function(e, t, n, i) {
            function r(e, t) {
                return typeof e === t
            }

            function o() {
                return "function" != typeof n.createElement ? n.createElement(arguments[0]) : b ? n.createElementNS.call(n, "http://www.w3.org/2000/svg", arguments[0]) : n.createElement.apply(n, arguments)
            }

            function a(e, t) {
                return !!~("" + e).indexOf(t)
            }

            function s(e, t, i, r) {
                var a, s, c, u, d = "modernizr",
                    h = o("div"),
                    l = function() {
                        var e = n.body;
                        return e || ((e = o(b ? "svg" : "body")).fake = !0), e
                    }();
                if (parseInt(i, 10))
                    for (; i--;)(c = o("div")).id = r ? r[i] : d + (i + 1), h.appendChild(c);
                return (a = o("style")).type = "text/css", a.id = "s" + d, (l.fake ? l : h).appendChild(a), l.appendChild(h), a.styleSheet ? a.styleSheet.cssText = e : a.appendChild(n.createTextNode(e)), h.id = d, l.fake && (l.style.background = "", l.style.overflow = "hidden", u = T.style.overflow, T.style.overflow = "hidden", T.appendChild(l)), s = t(h, e), l.fake ? (l.parentNode.removeChild(l), T.style.overflow = u, T.offsetHeight) : h.parentNode.removeChild(h), !!s
            }

            function c(e) {
                return e.replace(/([A-Z])/g, function(e, t) {
                    return "-" + t.toLowerCase()
                }).replace(/^ms-/, "-ms-")
            }

            function u(e, n, i) {
                var r;
                if ("getComputedStyle" in t) {
                    r = getComputedStyle.call(t, e, n);
                    var o = t.console;
                    if (null !== r) i && (r = r.getPropertyValue(i));
                    else if (o) {
                        o[o.error ? "error" : "log"].call(o, "getComputedStyle returning null, its possible modernizr test results are inaccurate")
                    }
                } else r = !n && e.currentStyle && e.currentStyle[i];
                return r
            }

            function d(e, n) {
                var r = e.length;
                if ("CSS" in t && "supports" in t.CSS) {
                    for (; r--;)
                        if (t.CSS.supports(c(e[r]), n)) return !0;
                    return !1
                }
                if ("CSSSupportsRule" in t) {
                    for (var o = []; r--;) o.push("(" + c(e[r]) + ":" + n + ")");
                    return s("@supports (" + (o = o.join(" or ")) + ") { #modernizr { position: absolute; } }", function(e) {
                        return "absolute" === u(e, null, "position")
                    })
                }
                return i
            }

            function h(e) {
                return e.replace(/([a-z])-([a-z])/g, function(e, t, n) {
                    return t + n.toUpperCase()
                }).replace(/^-/, "")
            }

            function l(e, t, n, s) {
                function c() {
                    l && (delete P.style, delete P.modElem)
                }
                if (s = !r(s, "undefined") && s, !r(n, "undefined")) {
                    var u = d(e, n);
                    if (!r(u, "undefined")) return u
                }
                for (var l, p, f, g, m, _ = ["modernizr", "tspan", "samp"]; !P.style && _.length;) l = !0, P.modElem = o(_.shift()), P.style = P.modElem.style;
                for (f = e.length, p = 0; p < f; p++)
                    if (g = e[p], m = P.style[g], a(g, "-") && (g = h(g)), P.style[g] !== i) {
                        if (s || r(n, "undefined")) return c(), "pfx" !== t || g;
                        try {
                            P.style[g] = n
                        } catch (e) {}
                        if (P.style[g] !== m) return c(), "pfx" !== t || g
                    } return c(), !1
            }

            function p(e, t) {
                return function() {
                    return e.apply(t, arguments)
                }
            }

            function f(e, t, n, i, o) {
                var a = e.charAt(0).toUpperCase() + e.slice(1),
                    s = (e + " " + w.join(a + " ") + a).split(" ");
                return r(t, "string") || r(t, "undefined") ? l(s, t, i, o) : function(e, t, n) {
                    var i;
                    for (var o in e)
                        if (e[o] in t) return !1 === n ? e[o] : r(i = t[e[o]], "function") ? p(i, n || t) : i;
                    return !1
                }(s = (e + " " + I.join(a + " ") + a).split(" "), t, n)
            }

            function g(e, t, n) {
                return f(e, i, i, t, n)
            }
            var m = [],
                _ = {
                    _version: "3.11.1",
                    _config: {
                        classPrefix: "",
                        enableClasses: !0,
                        enableJSClass: !0,
                        usePrefixes: !0
                    },
                    _q: [],
                    on: function(e, t) {
                        var n = this;
                        setTimeout(function() {
                            t(n[e])
                        }, 0)
                    },
                    addTest: function(e, t, n) {
                        m.push({
                            name: e,
                            fn: t,
                            options: n
                        })
                    },
                    addAsyncTest: function(e) {
                        m.push({
                            name: null,
                            fn: e
                        })
                    }
                },
                v = function() {};
            v.prototype = _, v = new v;
            var S = [],
                T = n.documentElement,
                b = "svg" === T.nodeName.toLowerCase(),
                E = function() {
                    var e = !("onblur" in T);
                    return function(t, n) {
                        var r;
                        return !!t && (n && "string" != typeof n || (n = o(n || "div")), !(r = (t = "on" + t) in n) && e && (n.setAttribute || (n = o("div")), n.setAttribute(t, ""), r = "function" == typeof n[t], n[t] !== i && (n[t] = i), n.removeAttribute(t)), r)
                    }
                }();
            _.hasEvent = E, v.addTest("ambientlight", E("devicelight", t)), v.addTest("applicationcache", "applicationCache" in t),
                function() {
                    var e = o("audio");
                    v.addTest("audio", function() {
                        var t = !1;
                        try {
                            (t = !!e.canPlayType) && (t = new Boolean(t))
                        } catch (e) {}
                        return t
                    });
                    try {
                        e.canPlayType && (v.addTest("audio.ogg", e.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, "")), v.addTest("audio.mp3", e.canPlayType('audio/mpeg; codecs="mp3"').replace(/^no$/, "")), v.addTest("audio.opus", e.canPlayType('audio/ogg; codecs="opus"') || e.canPlayType('audio/webm; codecs="opus"').replace(/^no$/, "")), v.addTest("audio.wav", e.canPlayType('audio/wav; codecs="1"').replace(/^no$/, "")), v.addTest("audio.m4a", (e.canPlayType("audio/x-m4a;") || e.canPlayType("audio/aac;")).replace(/^no$/, "")))
                    } catch (e) {}
                }();
            var y = "Moz O ms Webkit",
                w = _._config.usePrefixes ? y.split(" ") : [];
            _._cssomPrefixes = w;
            var A = {
                elem: o("modernizr")
            };
            v._q.push(function() {
                delete A.elem
            });
            var P = {
                style: A.elem.style
            };
            v._q.unshift(function() {
                delete P.style
            });
            var I = _._config.usePrefixes ? y.toLowerCase().split(" ") : [];
            _._domPrefixes = I, _.testAllProps = f;
            var C = function(e) {
                var n, r = M.length,
                    o = t.CSSRule;
                if (void 0 === o) return i;
                if (!e) return !1;
                if ((n = (e = e.replace(/^@/, "")).replace(/-/g, "_").toUpperCase() + "_RULE") in o) return "@" + e;
                for (var a = 0; a < r; a++) {
                    var s = M[a];
                    if (s.toUpperCase() + "_" + n in o) return "@-" + s.toLowerCase() + "-" + e
                }
                return !1
            };
            _.atRule = C;
            var D = _.prefixed = function(e, t, n) {
                return 0 === e.indexOf("@") ? C(e) : (-1 !== e.indexOf("-") && (e = h(e)), t ? f(e, t, n) : f(e, "pfx"))
            };
            v.addTest("batteryapi", !!D("battery", navigator) || !!D("getBattery", navigator), {
                aliases: ["battery-api"]
            }), v.addTest("blobconstructor", function() {
                try {
                    return !!new Blob
                } catch (e) {
                    return !1
                }
            }, {
                aliases: ["blob-constructor"]
            }), v.addTest("contextmenu", "contextMenu" in T && "HTMLMenuItemElement" in t), v.addTest("cors", "XMLHttpRequest" in t && "withCredentials" in new XMLHttpRequest);
            var L = D("crypto", t);
            v.addTest("crypto", !!D("subtle", L)), v.addTest("customelements", "customElements" in t), v.addTest("customprotocolhandler", function() {
                if (!navigator.registerProtocolHandler) return !1;
                try {
                    navigator.registerProtocolHandler("thisShouldFail")
                } catch (e) {
                    return e instanceof TypeError
                }
                return !1
            }), v.addTest("customevent", "CustomEvent" in t && "function" == typeof t.CustomEvent), v.addTest("dart", !!D("startDart", navigator)), v.addTest("dataview", "undefined" != typeof DataView && "getFloat64" in DataView.prototype), v.addTest("eventlistener", "addEventListener" in t), v.addTest("forcetouch", function() {
                return !!E(D("mouseforcewillbegin", t, !1), t) && MouseEvent.WEBKIT_FORCE_AT_MOUSE_DOWN && MouseEvent.WEBKIT_FORCE_AT_FORCE_MOUSE_DOWN
            }), v.addTest("fullscreen", !(!D("exitFullscreen", n, !1) && !D("cancelFullScreen", n, !1))), v.addTest("gamepads", !!D("getGamepads", navigator)), v.addTest("geolocation", "geolocation" in navigator), v.addTest("ie8compat", !t.addEventListener && !!n.documentMode && 7 === n.documentMode), v.addTest("intl", !!D("Intl", t)), v.addTest("json", "JSON" in t && "parse" in JSON && "stringify" in JSON), _.testAllProps = g, v.addTest("ligatures", g("fontFeatureSettings", '"liga" 1')), v.addTest("messagechannel", "MessageChannel" in t), v.addTest("notification", function() {
                if (!t.Notification || !t.Notification.requestPermission) return !1;
                if ("granted" === t.Notification.permission) return !0;
                try {
                    new t.Notification("")
                } catch (e) {
                    if ("TypeError" === e.name) return !1
                }
                return !0
            }), v.addTest("pagevisibility", !!D("hidden", n, !1)), v.addTest("performance", !!D("performance", t));
            var O = [""].concat(I);
            _._domPrefixesAll = O, v.addTest("pointerevents", function() {
                for (var e = 0, t = O.length; e < t; e++)
                    if (E(O[e] + "pointerdown")) return !0;
                return !1
            }), v.addTest("pointerlock", !!D("exitPointerLock", n)), v.addTest("queryselector", "querySelector" in n && "querySelectorAll" in n), v.addTest("quotamanagement", function() {
                var e = D("temporaryStorage", navigator),
                    t = D("persistentStorage", navigator);
                return !(!e || !t)
            }), v.addTest("requestanimationframe", !!D("requestAnimationFrame", t), {
                aliases: ["raf"]
            }), v.addTest("serviceworker", "serviceWorker" in navigator);
            var M = _._config.usePrefixes ? " -webkit- -moz- -o- -ms- ".split(" ") : ["", ""];
            _._prefixes = M;
            var R = function() {
                var e = t.matchMedia || t.msMatchMedia;
                return e ? function(t) {
                    var n = e(t);
                    return n && n.matches || !1
                } : function(e) {
                    var t = !1;
                    return s("@media " + e + " { #modernizr { position: absolute; } }", function(e) {
                        t = "absolute" === u(e, null, "position")
                    }), t
                }
            }();
            _.mq = R, v.addTest("touchevents", function() {
                    if ("ontouchstart" in t || t.TouchEvent || t.DocumentTouch && n instanceof DocumentTouch) return !0;
                    var e = ["(", M.join("touch-enabled),("), "heartz", ")"].join("");
                    return R(e)
                }), v.addTest("typedarrays", "ArrayBuffer" in t), v.addTest("vibrate", !!D("vibrate", navigator)),
                function() {
                    var e = o("video");
                    v.addTest("video", function() {
                        var t = !1;
                        try {
                            (t = !!e.canPlayType) && (t = new Boolean(t))
                        } catch (e) {}
                        return t
                    });
                    try {
                        e.canPlayType && (v.addTest("video.ogg", e.canPlayType('video/ogg; codecs="theora"').replace(/^no$/, "")), v.addTest("video.h264", e.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/, "")), v.addTest("video.h265", e.canPlayType('video/mp4; codecs="hev1"').replace(/^no$/, "")), v.addTest("video.webm", e.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/, "")), v.addTest("video.vp9", e.canPlayType('video/webm; codecs="vp9"').replace(/^no$/, "")), v.addTest("video.hls", e.canPlayType('application/x-mpegURL; codecs="avc1.42E01E"').replace(/^no$/, "")), v.addTest("video.av1", e.canPlayType('video/mp4; codecs="av01"').replace(/^no$/, "")))
                    } catch (e) {}
                }(), v.addTest("webgl", function() {
                    return "WebGLRenderingContext" in t
                });
            var k = !1;
            try {
                k = "WebSocket" in t && 2 === t.WebSocket.CLOSING
            } catch (e) {}
            v.addTest("websockets", k), v.addTest("xdomainrequest", "XDomainRequest" in t), v.addTest("matchmedia", !!D("matchMedia", t)),
                function() {
                    var e, t, n, i, o, a;
                    for (var s in m)
                        if (m.hasOwnProperty(s)) {
                            if (e = [], (t = m[s]).name && (e.push(t.name.toLowerCase()), t.options && t.options.aliases && t.options.aliases.length))
                                for (n = 0; n < t.options.aliases.length; n++) e.push(t.options.aliases[n].toLowerCase());
                            for (i = r(t.fn, "function") ? t.fn() : t.fn, o = 0; o < e.length; o++) 1 === (a = e[o].split(".")).length ? v[a[0]] = i : (v[a[0]] && (!v[a[0]] || v[a[0]] instanceof Boolean) || (v[a[0]] = new Boolean(v[a[0]])), v[a[0]][a[1]] = i), S.push((i ? "" : "no-") + a.join("-"))
                        }
                }(), delete _.addTest, delete _.addAsyncTest;
            for (var U = 0; U < v._q.length; U++) v._q[U]();
            e.Modernizr = v
        }(_securedTouchDependencies, window, document)
    };
var __awaiter = this && this.__awaiter || function(e, t, n, i) {
        return new(n || (n = Promise))(function(r, o) {
            function a(e) {
                try {
                    c(i.next(e))
                } catch (e) {
                    o(e)
                }
            }

            function s(e) {
                try {
                    c(i.throw(e))
                } catch (e) {
                    o(e)
                }
            }

            function c(e) {
                e.done ? r(e.value) : new n(function(t) {
                    t(e.value)
                }).then(a, s)
            }
            c((i = i.apply(e, t || [])).next())
        })
    },
    __generator = this && this.__generator || function(e, t) {
        var n, i, r, o, a = {
            label: 0,
            sent: function() {
                if (1 & r[0]) throw r[1];
                return r[1]
            },
            trys: [],
            ops: []
        };
        return o = {
            next: s(0),
            throw: s(1),
            return: s(2)
        }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
            return this
        }), o;

        function s(o) {
            return function(s) {
                return function(o) {
                    if (n) throw new TypeError("Generator is already executing.");
                    for (; a;) try {
                        if (n = 1, i && (r = 2 & o[0] ? i.return : o[0] ? i.throw || ((r = i.return) && r.call(i), 0) : i.next) && !(r = r.call(i, o[1])).done) return r;
                        switch (i = 0, r && (o = [2 & o[0], r.value]), o[0]) {
                            case 0:
                            case 1:
                                r = o;
                                break;
                            case 4:
                                return a.label++, {
                                    value: o[1],
                                    done: !1
                                };
                            case 5:
                                a.label++, i = o[1], o = [0];
                                continue;
                            case 7:
                                o = a.ops.pop(), a.trys.pop();
                                continue;
                            default:
                                if (!(r = (r = a.trys).length > 0 && r[r.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                    a = 0;
                                    continue
                                }
                                if (3 === o[0] && (!r || o[1] > r[0] && o[1] < r[3])) {
                                    a.label = o[1];
                                    break
                                }
                                if (6 === o[0] && a.label < r[1]) {
                                    a.label = r[1], r = o;
                                    break
                                }
                                if (r && a.label < r[2]) {
                                    a.label = r[2], a.ops.push(o);
                                    break
                                }
                                r[2] && a.ops.pop(), a.trys.pop();
                                continue
                        }
                        o = t.call(e, a)
                    } catch (e) {
                        o = [6, e], i = 0
                    } finally {
                        n = r = 0
                    }
                    if (5 & o[0]) throw o[1];
                    return {
                        value: o[0] ? o[1] : void 0,
                        done: !0
                    }
                }([o, s])
            }
        }
    },
    __extends = this && this.__extends || function() {
        var e = Object.setPrototypeOf || {
            __proto__: []
        }
        instanceof Array && function(e, t) {
            e.__proto__ = t
        } || function(e, t) {
            for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
        };
        return function(t, n) {
            function i() {
                this.constructor = t
            }
            e(t, n), t.prototype = null === n ? Object.create(n) : (i.prototype = n.prototype, new i)
        }
    }(),
    _securedTouchEntities, _securedTouchEntities, _securedTouchEntities, _securedTouchEntities, _securedTouchEntities, _securedTouchEntities, _securedTouchEntities, _securedTouchEntities, _securedTouchEntities, _securedTouchEntities, _securedTouchEntities, _securedTouchEntities, _securedTouchEntities, _securedTouchEntities, _securedTouchEntities, _securedTouchEntities, _securedTouchEntities, _securedTouchEntities, _securedTouchEntities, _securedTouchEntities, _securedTouchEntities, _securedTouchEntities, _securedTouchEntities, _securedTouchEntities, _securedTouchEntities, _securedTouchEntities, _securedTouchEntities, _securedTouchEntities, _securedTouchEntities, _securedTouchEntities, _securedTouchEntities, _securedTouchEntities, _securedTouchEntities, _securedTouchEntities, _securedTouchEntities, _securedTouchEntities, _securedTouchEntities, _securedTouchEntities, _securedTouchEntities, _securedTouchEntities;
! function(e) {
    ! function(e) {
        e[e.Unknown = 0] = "Unknown", e[e.FlingRight = 1] = "FlingRight", e[e.FlingLeft = 2] = "FlingLeft", e[e.FlingUp = 3] = "FlingUp", e[e.FlingDown = 4] = "FlingDown", e[e.Diagonal = 5] = "Diagonal", e[e.ScrollRight = 6] = "ScrollRight", e[e.ScrollLeft = 7] = "ScrollLeft", e[e.ScrollUp = 8] = "ScrollUp", e[e.ScrollDown = 9] = "ScrollDown", e[e.Tap = 10] = "Tap", e[e.DoubleTap = 11] = "DoubleTap"
    }(e.GestureType || (e.GestureType = {}))
}(_securedTouchEntities || (_securedTouchEntities = {})),
function(e) {
    var t = function() {
        function e() {}
        return Object.defineProperty(e, "isLogEnabled", {
            get: function() {
                return this._isLogEnabled || window["enable-logs-securedtouch"]
            },
            set: function(e) {
                this._isLogEnabled = e
            },
            enumerable: !0,
            configurable: !0
        }), e.debug = function(t) {
            for (var n = [], i = 1; i < arguments.length; i++) n[i - 1] = arguments[i];
            t = "[WebSDK] " + t, e.isLogEnabled && (n && n.length > 0 ? console.debug ? console.debug(t, n) : console.log(t, n) : console.debug ? console.debug(t) : console.log(t))
        }, e.error = function(t) {
            for (var n = [], i = 1; i < arguments.length; i++) n[i - 1] = arguments[i];
            t = "[WebSDK] " + t, e.isLogEnabled && (n && n.length > 0 ? console.error(t, n) : console.error(t))
        }, e.warn = function(t) {
            for (var n = [], i = 1; i < arguments.length; i++) n[i - 1] = arguments[i];
            t = "[WebSDK] " + t, e.isLogEnabled && (n && n.length > 0 ? console.warn(t, n) : console.warn(t))
        }, e.info = function(t) {
            for (var n = [], i = 1; i < arguments.length; i++) n[i - 1] = arguments[i];
            t = "[WebSDK] " + t, e.isLogEnabled && (n && n.length > 0 ? console.info(t, n) : console.info(t))
        }, e
    }();
    e.STLogger = t
}(_securedTouchEntities || (_securedTouchEntities = {})),
function(e) {
    var t = function() {
        function e() {}
        return Object.defineProperty(e, "CLIENT_VERSION", {
            get: function() {
                return "3.8.3w"
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e, "SALT", {
            get: function() {
                return "ST8irbd3bB"
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e, "WINDOW_ID_KEY", {
            get: function() {
                return "SecuredTouchWindowId"
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e, "OPS_KEY", {
            get: function() {
                return "Ops"
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e, "WEB_GL_KEY", {
            get: function() {
                return "WebGlId"
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e, "APP_SECRET_KEY", {
            get: function() {
                return "QXBwU2VjcmV0"
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e, "INIT_PARAMS_KEY", {
            get: function() {
                return "SecuredTouchInitParams"
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e, "INIT_PARAMS_KEY_V2", {
            get: function() {
                return "SecuredTouchPointerParams"
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e, "INIT_PARAMS_TS_KEY", {
            get: function() {
                return "SecuredTouchInitParamsTS"
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e, "INIT_PARAMS_TTL_KEY", {
            get: function() {
                return "SecuredTouchInitParamsTTL"
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e, "ST_INIT_KEY", {
            get: function() {
                return "SecuredTouchInitST"
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e, "TOTAL_GESTURE_COUNTER_KEY", {
            get: function() {
                return "SecuredTouchTotalGestureCounter"
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e, "APP_SESSION_ID_KEY", {
            get: function() {
                return "SecuredTouchAppSessionId"
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e, "LAST_DISPOSED_PAYLOAD_KEY", {
            get: function() {
                return "SecuredTouchDisposedPayload"
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e, "LAST_DISPOSED_TS_KEY", {
            get: function() {
                return "SecuredTouchDisposedTimestamp"
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e, "DEVICE_CREDENTIALS_KEY", {
            get: function() {
                return "U2VjdXJlZFRvdWNoRGV2aWNlU2VjcmV0"
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e, "DEVICE_ID_KEY", {
            get: function() {
                return "SecuredTouchDeviceId"
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e, "REMOTE_LOG_ENABLED_KEY", {
            get: function() {
                return "SecuredTouchRemoteLogEnabled"
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e, "USER_ID_KEY", {
            get: function() {
                return "SecuredTouchUserId"
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e, "USER_ID_TS_KEY", {
            get: function() {
                return "SecuredTouchUserIdTs"
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e, "CAPTURED_KEYBOARD_INTERACTIONS", {
            get: function() {
                return "SecuredTouchCapturedKeyboard"
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e, "CAPTURED_MOUSE_INTERACTIONS", {
            get: function() {
                return "SecuredTouchCapturedMouse"
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e, "CAPTURED_GESTURES", {
            get: function() {
                return "SecuredTouchCapturedGestures"
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e, "CAPTURED_INDIRECT", {
            get: function() {
                return "SecuredTouchCapturedIndirect"
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e, "CANCELED_INTERACTIONS", {
            get: function() {
                return "SecuredTouchCanceledInteractions"
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e, "CANCELED_GESTURES", {
            get: function() {
                return "SecuredTouchCanceledGestures"
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e, "SESSION_STORAGE_UPDATE_TS", {
            get: function() {
                return "SecuredTouchBufferPushedTs"
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e, "SESSION_STORAGE_TTL_MILLIS", {
            get: function() {
                return 1e4
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e, "METADATA_TTL_MILLIS", {
            get: function() {
                return 5184e5
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e, "HEART_BEAT_TAG", {
            get: function() {
                return "HeartBeat"
            },
            enumerable: !0,
            configurable: !0
        }), e
    }();
    e.SecuredTouchConstants = t
}(_securedTouchEntities || (_securedTouchEntities = {})),
function(e) {
    var t = function() {
        function t() {}
        return t.newGuid = function() {
            return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(e) {
                var t = 16 * Math.random() | 0;
                return ("x" === e ? t : 3 & t | 8).toString(16)
            })
        }, t.makeId = function(e) {
            for (var t = "", n = "abcdefghijklmnopqrstuvwxyz".length, i = 0; i < e; i++) t += "abcdefghijklmnopqrstuvwxyz".charAt(Math.floor(Math.random() * n));
            return t
        }, t.ieFix = function() {
            (-1 != navigator.userAgent.indexOf("MSIE") ? /MSIE (\d+\.\d+);/ : /Trident.*rv[ :]*(\d+\.\d+)/).test(navigator.userAgent) && (document.body.setAttribute("style", "-ms-touch-action:none;"), document.body.style.touchAction = "none", document.body.style.msTouchAction = "none")
        }, t.now = function() {
            var e = window.performance || {};
            return e.now = e.now || e.webkitNow || e.msNow || e.oNow || e.mozNow || function() {
                return (new Date).getTime()
            }, e.now()
        }, Object.defineProperty(t, "isMobile", {
            get: function() {
                var e, t = !1;
                return e = navigator.userAgent || navigator.vendor || window.opera, (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(e) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substr(0, 4))) && (t = !0), t
            },
            enumerable: !0,
            configurable: !0
        }), t.encodeBase64 = function(e) {
            var n, i, r, o, a, s, c, u = "",
                d = 0;
            for (e = t.utf8Encode(e); d < e.length;) o = (n = e.charCodeAt(d++)) >> 2, a = (3 & n) << 4 | (i = e.charCodeAt(d++)) >> 4, s = (15 & i) << 2 | (r = e.charCodeAt(d++)) >> 6, c = 63 & r, isNaN(i) ? s = c = 64 : isNaN(r) && (c = 64), u = u + t.keyStr.charAt(o) + t.keyStr.charAt(a) + t.keyStr.charAt(s) + t.keyStr.charAt(c);
            return u
        }, t.utf8Encode = function(e) {
            e = e.replace(/\r\n/g, "\n");
            for (var t = "", n = 0; n < e.length; n++) {
                var i = e.charCodeAt(n);
                i < 128 ? t += String.fromCharCode(i) : i > 127 && i < 2048 ? (t += String.fromCharCode(i >> 6 | 192), t += String.fromCharCode(63 & i | 128)) : (t += String.fromCharCode(i >> 12 | 224), t += String.fromCharCode(i >> 6 & 63 | 128), t += String.fromCharCode(63 & i | 128))
            }
            return t
        }, t.hash = function(n) {
            var i = t.hashCache.get(n);
            return i || (i = _securedTouchDependencies.sha256(n + e.SecuredTouchConstants.SALT), t.hashCache.set(n, i)), i
        }, t.utf8Decode = function(e) {
            for (var t = "", n = 0, i = 0, r = 0, o = 0; n < e.length;)(i = e.charCodeAt(n)) < 128 ? (t += String.fromCharCode(i), n++) : i > 191 && i < 224 ? (r = e.charCodeAt(n + 1), t += String.fromCharCode((31 & i) << 6 | 63 & r), n += 2) : (r = e.charCodeAt(n + 1), o = e.charCodeAt(n + 2), t += String.fromCharCode((15 & i) << 12 | (63 & r) << 6 | 63 & o), n += 3);
            return t
        }, t.decodeBase64 = function(e) {
            var n, i, r, o, a, s, c = "",
                u = 0;
            for (e = e.replace(/[^A-Za-z0-9\+\/\=]/g, ""); u < e.length;) n = t.keyStr.indexOf(e.charAt(u++)) << 2 | (o = t.keyStr.indexOf(e.charAt(u++))) >> 4, i = (15 & o) << 4 | (a = t.keyStr.indexOf(e.charAt(u++))) >> 2, r = (3 & a) << 6 | (s = t.keyStr.indexOf(e.charAt(u++))), c += String.fromCharCode(n), 64 != a && (c += String.fromCharCode(i)), 64 != s && (c += String.fromCharCode(r));
            return c = t.utf8Decode(c)
        }, t.hashCode = function(e) {
            var t = 0,
                n = e ? e.length : 0,
                i = 0;
            if (n > 0)
                for (; i < n;) t = (t << 5) - t + e.charCodeAt(i++) | 0;
            return t
        }, t.mod = function(e, n) {
            return (t.hashCode(e) % n + n) % n
        }, t.isEmail = function(t) {
            try {
                return t && /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(t.toLowerCase())
            } catch (t) {
                return e.STLogger.warn("isEmail function failed to parse string", t), !1
            }
        }, t.getEmailDomain = function(e) {
            return t.isEmail(e) ? e.substring(e.lastIndexOf("@") + 1) : ""
        }, t.extractEnv = function(e) {
            var t = e.indexOf("://");
            t > 0 && (t += "://".length);
            var n = e.indexOf(".securedtouch.com");
            return e.substring(t, n)
        }, t.extendPrimitiveValues = function(e, n, i) {
            for (var r = t.allKeys(n), o = 0; o < r.length;) t.isObject(n[r[o]]) || i && (!i || void 0 !== e[r[o]]) || (e[r[o]] = n[r[o]]), o++;
            return e
        }, t.extend = function(e, n, i) {
            for (var r = t.allKeys(n), o = 0; o < r.length;)(!i || i && void 0 === e[r[o]]) && (e[r[o]] = n[r[o]]), o++;
            return e
        }, t.flatten = function(e) {
            var n = {};
            return t.dive("", e, n), n
        }, t.dive = function(e, n, i) {
            for (var r in n)
                if (n.hasOwnProperty(r)) {
                    var o = r,
                        a = n[r];
                    e.length > 0 && (o = e + "." + r), t.isObject(a) ? t.dive(o, a, i) : i[o] = a
                }
        }, t.isObject = function(e) {
            var t = typeof e;
            return "function" === t || "object" === t && !!e
        }, t.isFunction = function(e) {
            return e && "function" == typeof e
        }, t.isPassiveSupported = function() {
            var e = !1,
                t = function() {};
            try {
                var n = {
                    get passive() {
                        return e = !0, !0
                    }
                };
                window.addEventListener("test", t, n), window.removeEventListener("test", t, !1)
            } catch (t) {
                e = !1
            }
            return e
        }, t.getAttribute = function(e, t) {
            try {
                if (e && this.isFunction(e.getAttribute)) return e.getAttribute(t) || ""
            } catch (e) {}
            return ""
        }, t.createInvisibleElement = function(t) {
            try {
                var n = document.createElement(t);
                return n.style.display = "none", n.style.border = "none", n.style.position = "absolute", n.style.top = "-999px", n.style.left = "-999px", n.style.width = "0", n.style.height = "0", n.style.visibility = "hidden", n
            } catch (t) {
                return e.STLogger.warn("Failed to create element", t), null
            }
        }, t.allKeys = function(e) {
            if (!t.isObject(e)) return [];
            var n = [];
            for (var i in e) n.push(i);
            return n
        }, t.values = function(e) {
            for (var n = t.allKeys(e), i = n.length, r = Array(i), o = 0; o < i; o++) r[o] = e[n[o]];
            return r
        }, t.getValuesOfMap = function(e) {
            if (this.isFunction(e.values)) return Array.from(e.values());
            var t = [];
            return e.forEach(function(e) {
                return t.push(e)
            }), t
        }, t.modifiersKeys = function(e) {
            var t = [];
            return e.getModifierState && ["Alt", "AltGraph", "CapsLock", "Control", "Fn", "FnLock", "Hyper", "Meta", "NumLock", "OS", "ScrollLock", "Shift", "Super", "Symbol", "SymbolLock"].forEach(function(n) {
                e.getModifierState(n.toString()) && t.push(n)
            }), t
        }, t.getKeyboardEvent = function(e) {
            return e || window.event
        }, t.getSrcElement = function(e) {
            return e.srcElement || e.target
        }, t.getObjectType = function(e) {
            try {
                var t = /function (.{1,})\(/.exec(e.constructor.toString());
                return t && t.length > 1 ? t[1] : ""
            } catch (e) {
                return ""
            }
        }, t.isSelectorMatches = function(e, t, n) {
            try {
                var i = Element.prototype,
                    r = i.matches || i.webkitMatchesSelector || i.mozMatchesSelector || i.msMatchesSelector,
                    o = 0;
                do {
                    if (r.call(e, t)) return !0;
                    e = e.parentElement || e.parentNode
                } while (null !== e && 1 === e.nodeType && o++ < n);
                return !1
            } catch (e) {
                return !1
            }
        }, t.isArray = function(e) {
            return Array.isArray ? Array.isArray(e) : "[object Array]" === Object.prototype.toString.call(e)
        }, t.safeJsonParse = function(t) {
            var n = null;
            try {
                t && (n = JSON.parse(t))
            } catch (t) {
                e.STLogger.warn("Failed to parse object " + t), n = null
            }
            return n
        }, t.getElementSelectionStart = function(e) {
            var t;
            try {
                t = e.selectionStart
            } catch (e) {
                t = ""
            }
            return t
        }, t.getElementSelectionEnd = function(e) {
            var t;
            try {
                t = e.selectionEnd
            } catch (e) {
                t = ""
            }
            return t
        }, t.getDeviceOrientation = function() {
            var e = screen.orientation || screen.mozOrientation || {},
                t = screen.msOrientation || e.type,
                n = e.angle;
            return {
                orientation: t ? t.toString() : "",
                angle: void 0 !== n && null !== n ? n.toString() : ""
            }
        }, t.getCurrentLocationUrl = function() {
            return e.SecuredTouchPointerConfig.instance.sendLocation ? window.location.href : ""
        }, t.getCookie = function(e) {
            var t = document.cookie.match("(^|;) ?" + e + "=([^;]*)(;|$)");
            return t ? t[2] : null
        }, t.setCookie = function(e, t, n) {
            var i = new Date;
            i.setTime(i.getTime() + 1e3 * n), document.cookie = e + "=" + t + ";path=/;secure;expires=" + i.toUTCString()
        }, t.deleteCookie = function(e) {
            t.setCookie(e, "", -1)
        }, t.delay = function(e) {
            return new Promise(function(t) {
                return setTimeout(t, e)
            })
        }, t.addEventListener = function(t, n, i, r) {
            e.SecuredTouchPointerConfig.instance.eventsBlackList.has(n) || t.addEventListener(n, i, r)
        }, t.getErrorAsString = function(e) {
            var t;
            if (e) try {
                t = "string" == typeof e || e instanceof String ? e : e instanceof Error ? e.toString() : JSON.stringify(e)
            } catch (n) {
                t = e.toString()
            }
            return t || ""
        }, t.getHostnameFromRegex = function(e) {
            if (e) {
                var t = e.match(/^https?\:\/\/([^\/?#]+)(?:[\/?#]|$)/i);
                return t && t[1]
            }
            return null
        }, t.inIframe = function() {
            try {
                return window.self !== window.top
            } catch (e) {
                return !0
            }
        }, t.promiseTimeout = function(e, t) {
            var n = new Promise(function(t, n) {
                var i = setTimeout(function() {
                    clearTimeout(i), n("Timed out in " + e + "ms.")
                }, e)
            });
            return Promise.race([t, n])
        }, t.hashCache = new Map, t.hasEnumBug = !{
            toString: null
        }.propertyIsEnumerable("toString"), t.keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", t
    }();
    e.SecuredTouchUtil = t
}(_securedTouchEntities || (_securedTouchEntities = {})),
function(e) {
    var t = function() {
        function t(e, t) {
            this.crossStorageClient = new CrossStorageClient(e, t)
        }
        return t.prototype.get = function(t) {
            var n = e.SecuredTouchUtil.hash(t);
            return this.crossStorageClient.get(n)
        }, t.prototype.del = function(t) {
            return this.crossStorageClient.del(e.SecuredTouchUtil.hash(t))
        }, t.prototype.set = function(t, n, i) {
            return this.crossStorageClient.set(e.SecuredTouchUtil.hash(t), n, i)
        }, t.prototype.onConnect = function() {
            return this.crossStorageClient.onConnect()
        }, t
    }();
    e.SecuredTouchCrossStorage = t;
    var n = function() {
        function e(e) {
            this.storage = e
        }
        return e.prototype.get = function(e) {
            return Promise.resolve(this.storage.getItem(e))
        }, e.prototype.del = function(e) {
            return this.storage.removeItem(e), Promise.resolve()
        }, e.prototype.set = function(e, t) {
            return this.storage.setItem(e, t), Promise.resolve()
        }, e.prototype.onConnect = function() {
            return Promise.resolve()
        }, e
    }();
    e.SecuredTouchCrossStorageFallback = n
}(_securedTouchEntities || (_securedTouchEntities = {})),
function(e) {
    var t = function() {
        function t(e) {
            this.storage = e
        }
        return t.prototype.getItem = function(t) {
            var n = e.SecuredTouchUtil.hash(t),
                i = this.storage.getItem(n);
            return i || (i = this.storage.getItem(t)) && (this.storage.setItem(n, i), this.storage.removeItem(t)), i
        }, t.prototype.removeItem = function(t) {
            return this.storage.removeItem(e.SecuredTouchUtil.hash(t))
        }, t.prototype.setItem = function(t, n) {
            return this.storage.setItem(e.SecuredTouchUtil.hash(t), n)
        }, t
    }();
    e.SecuredTouchStorageWrapper = t;
    var n = function() {
        function e() {
            this.internalStorageMap = new Map
        }
        return e.prototype.getItem = function(e) {
            return this.internalStorageMap.get(e)
        }, e.prototype.removeItem = function(e) {
            this.internalStorageMap.delete(e)
        }, e.prototype.setItem = function(e, t) {
            this.internalStorageMap.set(e, t)
        }, e
    }();
    e.SecuredTouchStorageFallback = n
}(_securedTouchEntities || (_securedTouchEntities = {})),
function(e) {
    var t = function() {
        function t() {
            this.appId = "";
            try {
                window.sessionStorage.setItem("_st_storage_enabled_check", "test"), window.sessionStorage.removeItem("_st_storage_enabled_check"), this.stSessionStorage = window.sessionStorage
            } catch (t) {
                e.STLogger.warn("session storage disabled"), this.stSessionStorage = new e.SecuredTouchStorageFallback
            }
            try {
                window.localStorage.setItem("_st_storage_enabled_check", "test"), window.localStorage.removeItem("_st_storage_enabled_check"), this.stLocalStorage = new e.SecuredTouchStorageWrapper(window.localStorage)
            } catch (t) {
                e.STLogger.warn("local storage disabled"), this.stLocalStorage = new e.SecuredTouchStorageWrapper(new e.SecuredTouchStorageFallback), this.crossStorage = new e.SecuredTouchCrossStorageFallback(this.stLocalStorage)
            }
        }
        return Object.defineProperty(t, "instance", {
            get: function() {
                return t._instance || (t._instance = new t), t._instance
            },
            enumerable: !0,
            configurable: !0
        }), t.prototype.initDeviceStorage = function(t) {
            return __awaiter(this, void 0, void 0, function() {
                var n;
                return __generator(this, function(i) {
                    switch (i.label) {
                        case 0:
                            return (n = {
                                deviceId: this.stLocalStorage.getItem(e.SecuredTouchConstants.DEVICE_ID_KEY),
                                deviceSecret: this.stLocalStorage.getItem(e.SecuredTouchConstants.DEVICE_CREDENTIALS_KEY)
                            }).deviceId ? (this.cachedDeviceId = n.deviceId, this.cachedDeviceSecret = n.deviceSecret || e.SecuredTouchUtil.hash(n.deviceId), this.crossStorage = new e.SecuredTouchCrossStorageFallback(this.stLocalStorage), [3, 3]) : [3, 1];
                        case 1:
                            return [4, this.initCrossStorage(t)];
                        case 2:
                            i.sent(), i.label = 3;
                        case 3:
                            return [2]
                    }
                })
            })
        }, t.prototype.initCrossStorage = function(t) {
            return __awaiter(this, void 0, void 0, function() {
                var n, i, r;
                return __generator(this, function(o) {
                    switch (o.label) {
                        case 0:
                            if (i = (t || "https://hub.securedtouch.com").replace(/\/$/, "") + "/hub.html", this.crossStorage) return [3, 6];
                            o.label = 1;
                        case 1:
                            return o.trys.push([1, 4, , 5]), this.crossStorage = new e.SecuredTouchCrossStorage(i, {
                                timeout: 1e4
                            }), [4, this.crossStorage.onConnect()];
                        case 2:
                            return o.sent(), [4, Promise.all([this.crossStorage.get(e.SecuredTouchConstants.DEVICE_ID_KEY), this.crossStorage.get(e.SecuredTouchConstants.DEVICE_CREDENTIALS_KEY).catch(function(e) {})])];
                        case 3:
                            return n = o.sent(), this.cachedDeviceId = n[0], this.cachedDeviceSecret = n[1], this.cachedDeviceId && this.stLocalStorage.setItem(e.SecuredTouchConstants.DEVICE_ID_KEY, this.cachedDeviceId), this.cachedDeviceSecret && this.stLocalStorage.setItem(e.SecuredTouchConstants.DEVICE_CREDENTIALS_KEY, this.cachedDeviceSecret), [3, 5];
                        case 4:
                            return r = o.sent(), e.STLogger.warn("SecuredTouchSession crossStorage failed to connect " + r), this.crossStorage = new e.SecuredTouchCrossStorageFallback(this.stLocalStorage), [3, 5];
                        case 5:
                            this.cachedDeviceId && !this.cachedDeviceSecret && (this.cachedDeviceSecret = e.SecuredTouchUtil.hash(this.cachedDeviceId)), o.label = 6;
                        case 6:
                            return [2]
                    }
                })
            })
        }, Object.defineProperty(t.prototype, "windowId", {
            get: function() {
                return this.cachedWindowId || (this.cachedWindowId = this.stSessionStorage.getItem(e.SecuredTouchConstants.WINDOW_ID_KEY), this.cachedWindowId || (this.cachedWindowId = e.SecuredTouchUtil.newGuid(), this.stSessionStorage.setItem(e.SecuredTouchConstants.WINDOW_ID_KEY, this.cachedWindowId))), this.cachedWindowId
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "sessionStorage", {
            get: function() {
                return this.stSessionStorage
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "localStorage", {
            get: function() {
                return this.stLocalStorage
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "ops", {
            get: function() {
                var t = Number(this.stSessionStorage.getItem(e.SecuredTouchConstants.OPS_KEY));
                return isNaN(t) ? null : t
            },
            set: function(t) {
                t ? this.stSessionStorage.setItem(e.SecuredTouchConstants.OPS_KEY, t.toString()) : this.stSessionStorage.removeItem(e.SecuredTouchConstants.OPS_KEY)
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "webGlID", {
            get: function() {
                return this.stSessionStorage.getItem(e.SecuredTouchConstants.WEB_GL_KEY)
            },
            set: function(t) {
                t ? this.stSessionStorage.setItem(e.SecuredTouchConstants.WEB_GL_KEY, t) : this.stSessionStorage.removeItem(e.SecuredTouchConstants.WEB_GL_KEY)
            },
            enumerable: !0,
            configurable: !0
        }), t.prototype.getInitParamsTTLInMinutes = function(t) {
            var n = e.SecuredTouchUtil.hash(e.SecuredTouchConstants.INIT_PARAMS_TTL_KEY + "-" + this.appId);
            return Number(this.stLocalStorage.getItem(n)) || t
        }, Object.defineProperty(t.prototype, "lastInitParamsTs", {
            get: function() {
                var t = e.SecuredTouchUtil.hash(e.SecuredTouchConstants.INIT_PARAMS_TS_KEY + "-" + this.appId);
                return Number(this.stLocalStorage.getItem(t)) || 0
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "initParams", {
            get: function() {
                var t = e.SecuredTouchUtil.hash(e.SecuredTouchConstants.INIT_PARAMS_KEY_V2 + "-" + this.appId),
                    n = this.stLocalStorage.getItem(t);
                try {
                    return n ? JSON.parse(n) : null
                } catch (t) {
                    return e.STLogger.debug("SecuredTouchSession FAILED to deserialize initParams!"), null
                }
            },
            enumerable: !0,
            configurable: !0
        }), t.prototype.setInitParams = function(t, n) {
            var i = t ? JSON.stringify(t) : null,
                r = e.SecuredTouchUtil.hash(e.SecuredTouchConstants.INIT_PARAMS_KEY_V2 + "-" + this.appId);
            this.stLocalStorage.setItem(r, i);
            var o = e.SecuredTouchUtil.hash(e.SecuredTouchConstants.INIT_PARAMS_TS_KEY + "-" + this.appId);
            this.stLocalStorage.setItem(o, (new Date).getTime());
            var a = e.SecuredTouchUtil.hash(e.SecuredTouchConstants.INIT_PARAMS_TTL_KEY + "-" + this.appId);
            this.stLocalStorage.setItem(a, n)
        }, t.prototype.removeInitParams = function() {
            var t = e.SecuredTouchUtil.hash(e.SecuredTouchConstants.INIT_PARAMS_KEY + "-" + this.appId),
                n = e.SecuredTouchUtil.hash(e.SecuredTouchConstants.INIT_PARAMS_KEY_V2 + "-" + this.appId);
            this.stLocalStorage.removeItem(t), this.stLocalStorage.removeItem(n)
        }, Object.defineProperty(t.prototype, "initST", {
            get: function() {
                return Boolean(this.stSessionStorage.getItem(e.SecuredTouchConstants.ST_INIT_KEY))
            },
            set: function(t) {
                this.stSessionStorage.setItem(e.SecuredTouchConstants.ST_INIT_KEY, t.toString())
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "applicationId", {
            set: function(e) {
                this.appId = e
            },
            enumerable: !0,
            configurable: !0
        }), t.prototype.getUsername = function() {
            return this.stSessionStorage.getItem(e.SecuredTouchConstants.USER_ID_KEY) || ""
        }, t.prototype.setUsername = function(t) {
            this.stSessionStorage.setItem(e.SecuredTouchConstants.USER_ID_TS_KEY, (new Date).getTime()), t ? this.stSessionStorage.setItem(e.SecuredTouchConstants.USER_ID_KEY, t) : this.stSessionStorage.removeItem(e.SecuredTouchConstants.USER_ID_KEY)
        }, Object.defineProperty(t.prototype, "usernameTs", {
            get: function() {
                return Number(this.stSessionStorage.getItem(e.SecuredTouchConstants.USER_ID_TS_KEY)) || 0
            },
            enumerable: !0,
            configurable: !0
        }), t.prototype.getMetadataTsKey = function() {
            return e.SecuredTouchUtil.hash("SecuredTouchMetadataTs-" + this.cachedDeviceId + "-" + this.appId)
        }, t.prototype.getLastMetadataTimeStamp = function() {
            return Number(this.stLocalStorage.getItem(this.getMetadataTsKey())) || 0
        }, t.prototype.setLastMetadataTimeStamp = function(e) {
            this.stLocalStorage.setItem(this.getMetadataTsKey(), e)
        }, Object.defineProperty(t.prototype, "appSessionId", {
            get: function() {
                return this.stSessionStorage.getItem(e.SecuredTouchConstants.APP_SESSION_ID_KEY) || ""
            },
            set: function(t) {
                t ? (e.STLogger.info("Set Session ID: " + t), this.stSessionStorage.setItem(e.SecuredTouchConstants.APP_SESSION_ID_KEY, t)) : this.stSessionStorage.removeItem(e.SecuredTouchConstants.APP_SESSION_ID_KEY)
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "lastDisposedPayload", {
            get: function() {
                var t = null;
                try {
                    var n = this.stSessionStorage.getItem(e.SecuredTouchConstants.LAST_DISPOSED_TS_KEY);
                    (new Date).getTime() - n <= e.SecuredTouchConstants.SESSION_STORAGE_TTL_MILLIS && (t = JSON.parse(this.stSessionStorage.getItem(e.SecuredTouchConstants.LAST_DISPOSED_PAYLOAD_KEY)))
                } catch (t) {
                    e.STLogger.warn("Failed to get last disposed payload", t)
                }
                return this.stSessionStorage.removeItem(e.SecuredTouchConstants.LAST_DISPOSED_PAYLOAD_KEY), this.stSessionStorage.removeItem(e.SecuredTouchConstants.LAST_DISPOSED_TS_KEY), t
            },
            set: function(t) {
                try {
                    t && (this.stSessionStorage.setItem(e.SecuredTouchConstants.LAST_DISPOSED_PAYLOAD_KEY, JSON.stringify(t)), this.stSessionStorage.setItem(e.SecuredTouchConstants.LAST_DISPOSED_TS_KEY, (new Date).getTime()))
                } catch (t) {
                    e.STLogger.warn("Failed to save last disposed payload", t)
                }
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "passedBufferTimeout", {
            get: function() {
                var t = this.stSessionStorage.getItem(e.SecuredTouchConstants.SESSION_STORAGE_UPDATE_TS) || 0;
                return (new Date).getTime() - t > e.SecuredTouchConstants.SESSION_STORAGE_TTL_MILLIS
            },
            enumerable: !0,
            configurable: !0
        }), t.prototype.resetDeviceCredentials = function() {
            this.cachedDeviceId = "Id-" + e.SecuredTouchUtil.newGuid(), this.cachedDeviceSecret = e.SecuredTouchUtil.hash(this.cachedDeviceId), this.crossStorage.set(e.SecuredTouchConstants.DEVICE_ID_KEY, this.cachedDeviceId), this.stLocalStorage.setItem(e.SecuredTouchConstants.DEVICE_ID_KEY, this.cachedDeviceId), this.crossStorage.del(e.SecuredTouchConstants.DEVICE_CREDENTIALS_KEY)
        }, t.prototype.getDeviceCredentials = function() {
            return this.cachedDeviceId && this.cachedDeviceSecret || this.resetDeviceCredentials(), {
                deviceSecret: this.cachedDeviceSecret,
                deviceId: this.cachedDeviceId
            }
        }, Object.defineProperty(t.prototype, "remoteLogEnabledByFactor", {
            get: function() {
                var t = this.stLocalStorage.getItem(e.SecuredTouchConstants.REMOTE_LOG_ENABLED_KEY);
                return null != t ? "true" === t : null
            },
            set: function(t) {
                this.stLocalStorage.setItem(e.SecuredTouchConstants.REMOTE_LOG_ENABLED_KEY, t)
            },
            enumerable: !0,
            configurable: !0
        }), t
    }();
    e.SecuredTouchSessionStorage = t
}(_securedTouchEntities || (_securedTouchEntities = {})),
function(e) {
    var t = function() {
        function t() {
            this._token = t.TOKEN_DEFAULT;
            var e = {
                urlWhitelist: t.SDK_PROPERTIES_DEFAULT.urlWhitelist,
                webRtcUrl: t.SDK_PROPERTIES_DEFAULT.webRtcUrl,
                eventsBlackList: t.SDK_PROPERTIES_DEFAULT.eventsBlackList,
                countOnlyEventsList: t.SDK_PROPERTIES_DEFAULT.countOnlyEventsList,
                indirectInterval: t.SDK_PROPERTIES_DEFAULT.indirectInterval,
                updateInterval: t.SDK_PROPERTIES_DEFAULT.updateInterval,
                idleTimeoutMs: t.SDK_PROPERTIES_DEFAULT.idleTimeoutMs,
                maxEventsCount: t.SDK_PROPERTIES_DEFAULT.maxEventsCount,
                fieldBlackList: t.SDK_PROPERTIES_DEFAULT.fieldBlackList,
                cssSelectors: t.SDK_PROPERTIES_DEFAULT.cssSelectors,
                tagsCssSelectors: t.SDK_PROPERTIES_DEFAULT.tagsCssSelectors,
                tagsConfig: t.SDK_PROPERTIES_DEFAULT.tagsConfig,
                obfuscatedValues: t.SDK_PROPERTIES_DEFAULT.obfuscatedValues,
                maxSelectorChildren: t.SDK_PROPERTIES_DEFAULT.maxSelectorChildren,
                maxRequestQueueSize: t.SDK_PROPERTIES_DEFAULT.maxRequestQueueSize,
                interactionExpirationTime: t.SDK_PROPERTIES_DEFAULT.interactionExpirationTime,
                requestTimeout: t.SDK_PROPERTIES_DEFAULT.requestTimeout,
                sendLocation: t.SDK_PROPERTIES_DEFAULT.sendLocation,
                heartBeatFrequencyMs: t.SDK_PROPERTIES_DEFAULT.heartBeatFrequencyMs,
                beforeunloadEnabled: t.SDK_PROPERTIES_DEFAULT.beforeunloadEnabled,
                devToolsEnabled: t.SDK_PROPERTIES_DEFAULT.devToolsEnabled,
                snapshotsReduceFactor: t.SDK_PROPERTIES_DEFAULT.snapshotsReduceFactor,
                eventsReduceFactorMap: t.SDK_PROPERTIES_DEFAULT.eventsReduceFactorMap,
                remoteLogsEnabled: t.SDK_PROPERTIES_DEFAULT.remoteLogsEnabled,
                maxRemoteLogs: t.SDK_PROPERTIES_DEFAULT.maxRemoteLogs,
                failuresAmountToReport: t.SDK_PROPERTIES_DEFAULT.failuresAmountToReport,
                metricsFrequency: t.SDK_PROPERTIES_DEFAULT.metricsFrequency,
                fingerPrintBlacklist: t.SDK_PROPERTIES_DEFAULT.fingerPrintBlacklist,
                pointerTTLMinutes: t.SDK_PROPERTIES_DEFAULT.pointerTTLMinutes,
                propertyDescriptorsConfig: t.SDK_PROPERTIES_DEFAULT.propertyDescriptorsConfig,
                additionalMediaCodecs: t.SDK_PROPERTIES_DEFAULT.additionalMediaCodecs,
                refreshTokenOnSessionChange: t.SDK_PROPERTIES_DEFAULT.refreshTokenOnSessionChange
            };
            this.pointerParams = {
                enabled: t.ENABLED_DEFAULT,
                url: t.URL_DEFAULT,
                clientDigest: t.CLIENT_DIGEST_DEFAULT,
                bufferSize: t.BUFFER_SIZE_DEFAULT,
                maxSensorSamples: t.MAX_SENSOR_SAMPLES_DEFAULT,
                maxSnapshotsCount: t.MAX_SNAPSHOTS_COUNT_DEFAULT,
                logMode: t.LOG_MODE_DEFAULT,
                shouldSendOnKeyboardUp: t.SHOULD_SEND_ON_KEYBOARD_UP_DEFAULT,
                sensorsTimestampDeltaInMillis: t.SENSORS_TIMESTAMP_DELTA_IN_MILLIS_DEFAULT,
                propertyBlackList: t.PROPERTY_BLACK_LIST_DEFAULT,
                behavioralBlacklist: t.BEHAVIORAL_BLACK_LIST_DEFAULT,
                tagsBlacklistRegex: t.TAGS_BLACK_LIST_REGEX_DEFAULT,
                tagsToFlushRegex: t.TAGS_TO_FLUSH_BLACK_LIST_REGEX_DEFAULT,
                version: t.VERSION_DEFAULT,
                sdkProperties: e
            }
        }
        return Object.defineProperty(t, "instance", {
            get: function() {
                return t._instance || (t._instance = new t), t._instance
            },
            enumerable: !0,
            configurable: !0
        }), t.prototype.cachePointer = function(n) {
            var i = e.SecuredTouchSessionStorage.instance;
            n.CLIENT_POINTER_VERSION = t.POINTER_VERSION, i.setInitParams(n, this.pointerTTLMinutes)
        }, t.prototype.loadPointerFromCache = function(e) {
            var n = 6e4 * e.getInitParamsTTLInMinutes(t.SDK_PROPERTIES_DEFAULT.pointerTTLMinutes);
            if (Date.now() - e.lastInitParamsTs < n) {
                var i = e.initParams;
                if (i)
                    if (i.CLIENT_POINTER_VERSION === t.POINTER_VERSION && this.refreshPointerParams(i)) return i
            }
            return e.removeInitParams(), null
        }, t.prototype.loadPointerFromServer = function(e, t, n) {
            return void 0 === n && (n = 0), __awaiter(this, void 0, void 0, function() {
                var i;
                return __generator(this, function(r) {
                    switch (r.label) {
                        case 0:
                            return [4, e.getPointer(t, n)];
                        case 1:
                            return i = r.sent(), this.refreshPointerParams(i) ? (this.cachePointer(i), [2, i]) : [2, Promise.reject("got invalid pointer config json")]
                    }
                })
            })
        }, t.prototype.refreshPointerParams = function(e) {
            this._token = e.token || t.TOKEN_DEFAULT;
            var n = e.clientConfiguration;
            return this.pointerParams.enabled = null != n.enabled ? Boolean(n.enabled) : t.ENABLED_DEFAULT, this.pointerParams.url = null != n.url ? n.url : t.URL_DEFAULT, this.pointerParams.clientDigest = null != n.clientDigest ? n.clientDigest : t.CLIENT_DIGEST_DEFAULT, this.pointerParams.bufferSize = null != n.bufferSize ? Number(n.bufferSize) : t.BUFFER_SIZE_DEFAULT, this.pointerParams.maxSensorSamples = null != n.maxSensorSamples ? Number(n.maxSensorSamples) : t.MAX_SENSOR_SAMPLES_DEFAULT, this.pointerParams.maxSnapshotsCount = null != n.maxSnapshotsCount ? Number(n.maxSnapshotsCount) : t.MAX_SNAPSHOTS_COUNT_DEFAULT, this.pointerParams.logMode = null != n.logMode ? Number(n.logMode) : t.LOG_MODE_DEFAULT, this.pointerParams.shouldSendOnKeyboardUp = null != n.shouldSendOnKeyboardUp ? Boolean(n.shouldSendOnKeyboardUp) : t.SHOULD_SEND_ON_KEYBOARD_UP_DEFAULT, this.pointerParams.sensorsTimestampDeltaInMillis = null != n.sensorsTimestampDeltaInMillis ? Number(n.sensorsTimestampDeltaInMillis) : t.SENSORS_TIMESTAMP_DELTA_IN_MILLIS_DEFAULT, this.pointerParams.propertyBlackList = null != n.propertyBlackList ? n.propertyBlackList : t.PROPERTY_BLACK_LIST_DEFAULT, this.pointerParams.behavioralBlacklist = null != n.behavioralBlacklist ? n.behavioralBlacklist : t.BEHAVIORAL_BLACK_LIST_DEFAULT, this.pointerParams.tagsBlacklistRegex = null != n.tagsBlacklistRegex ? n.tagsBlacklistRegex : t.TAGS_BLACK_LIST_REGEX_DEFAULT, this.pointerParams.tagsToFlushRegex = null != n.tagsToFlushRegex ? n.tagsToFlushRegex : t.TAGS_TO_FLUSH_BLACK_LIST_REGEX_DEFAULT, this.pointerParams.version = null != n.version ? n.version : t.VERSION_DEFAULT, this.populateSdkProperties(n.sdkProperties), Boolean(this.pointerParams.url) && Boolean(this._token)
        }, t.prototype.populateSdkProperties = function(n) {
            if (n) {
                n.web_sdk_url_whitelist ? this.pointerParams.sdkProperties.urlWhitelist = e.SecuredTouchUtil.safeJsonParse(n.web_sdk_url_whitelist) : this.pointerParams.sdkProperties.urlWhitelist = t.SDK_PROPERTIES_DEFAULT.urlWhitelist, n.web_sdk_web_rtc_url ? this.pointerParams.sdkProperties.webRtcUrl = n.web_sdk_web_rtc_url : this.pointerParams.sdkProperties.webRtcUrl = t.SDK_PROPERTIES_DEFAULT.webRtcUrl;
                var i = e.SecuredTouchUtil.safeJsonParse(n.web_sdk_events_black_list);
                this.pointerParams.sdkProperties.eventsBlackList = i ? new Set(i) : t.SDK_PROPERTIES_DEFAULT.eventsBlackList;
                var r = e.SecuredTouchUtil.safeJsonParse(n.web_sdk_events_count_only);
                this.pointerParams.sdkProperties.countOnlyEventsList = r ? new Set(r) : t.SDK_PROPERTIES_DEFAULT.countOnlyEventsList, n.web_sdk_indirect_interval ? this.pointerParams.sdkProperties.indirectInterval = Number(n.web_sdk_indirect_interval) : this.pointerParams.sdkProperties.indirectInterval = t.SDK_PROPERTIES_DEFAULT.indirectInterval, n.web_sdk_update_interval ? this.pointerParams.sdkProperties.updateInterval = Number(n.web_sdk_update_interval) : this.pointerParams.sdkProperties.updateInterval = t.SDK_PROPERTIES_DEFAULT.updateInterval, n.web_sdk_idle_timeout_ms ? this.pointerParams.sdkProperties.idleTimeoutMs = Number(n.web_sdk_idle_timeout_ms) : this.pointerParams.sdkProperties.idleTimeoutMs = t.SDK_PROPERTIES_DEFAULT.idleTimeoutMs, n.web_sdk_max_events_count ? this.pointerParams.sdkProperties.maxEventsCount = Number(n.web_sdk_max_events_count) : this.pointerParams.sdkProperties.maxEventsCount = t.SDK_PROPERTIES_DEFAULT.maxEventsCount;
                var o = e.SecuredTouchUtil.safeJsonParse(n.web_sdk_field_black_list);
                this.pointerParams.sdkProperties.fieldBlackList = o ? new Set(o) : t.SDK_PROPERTIES_DEFAULT.fieldBlackList, n.web_sdk_css_selectors ? this.pointerParams.sdkProperties.cssSelectors = n.web_sdk_css_selectors : this.pointerParams.sdkProperties.cssSelectors = t.SDK_PROPERTIES_DEFAULT.cssSelectors, n.web_sdk_tags_css_selectors ? this.pointerParams.sdkProperties.tagsCssSelectors = n.web_sdk_tags_css_selectors : this.pointerParams.sdkProperties.tagsCssSelectors = t.SDK_PROPERTIES_DEFAULT.tagsCssSelectors, n.web_sdk_tags_config ? this.pointerParams.sdkProperties.tagsConfig = n.web_sdk_tags_config : this.pointerParams.sdkProperties.tagsConfig = t.SDK_PROPERTIES_DEFAULT.tagsConfig, n.web_sdk_obfuscated_values ? this.pointerParams.sdkProperties.obfuscatedValues = n.web_sdk_obfuscated_values : this.pointerParams.sdkProperties.obfuscatedValues = t.SDK_PROPERTIES_DEFAULT.obfuscatedValues, n.web_sdk_max_selector_children ? this.pointerParams.sdkProperties.maxSelectorChildren = Number(n.web_sdk_max_selector_children) : this.pointerParams.sdkProperties.maxSelectorChildren = t.SDK_PROPERTIES_DEFAULT.maxSelectorChildren, n.interactions_queue_size ? this.pointerParams.sdkProperties.maxRequestQueueSize = Number(n.interactions_queue_size) : this.pointerParams.sdkProperties.maxRequestQueueSize = t.SDK_PROPERTIES_DEFAULT.maxRequestQueueSize, n.interaction_expiration_time ? this.pointerParams.sdkProperties.interactionExpirationTime = Number(n.interaction_expiration_time) : this.pointerParams.sdkProperties.interactionExpirationTime = t.SDK_PROPERTIES_DEFAULT.interactionExpirationTime, n.web_sdk_request_timeout ? this.pointerParams.sdkProperties.requestTimeout = Number(n.web_sdk_request_timeout) : this.pointerParams.sdkProperties.requestTimeout = t.SDK_PROPERTIES_DEFAULT.requestTimeout, n.web_sdk_send_location ? this.pointerParams.sdkProperties.sendLocation = "true" === n.web_sdk_send_location : this.pointerParams.sdkProperties.sendLocation = t.SDK_PROPERTIES_DEFAULT.sendLocation, n.heart_beat_frequency_ms ? this.pointerParams.sdkProperties.heartBeatFrequencyMs = Number(n.heart_beat_frequency_ms) : this.pointerParams.sdkProperties.heartBeatFrequencyMs = t.SDK_PROPERTIES_DEFAULT.heartBeatFrequencyMs, n.web_sdk_beforeunload_enabled ? this.pointerParams.sdkProperties.beforeunloadEnabled = "true" === n.web_sdk_beforeunload_enabled : this.pointerParams.sdkProperties.beforeunloadEnabled = t.SDK_PROPERTIES_DEFAULT.beforeunloadEnabled, n.web_sdk_devtools_enabled ? this.pointerParams.sdkProperties.devToolsEnabled = "true" === n.web_sdk_devtools_enabled : this.pointerParams.sdkProperties.devToolsEnabled = t.SDK_PROPERTIES_DEFAULT.devToolsEnabled, n.snapshots_reduce_factor ? this.pointerParams.sdkProperties.snapshotsReduceFactor = Number(n.snapshots_reduce_factor) : this.pointerParams.sdkProperties.snapshotsReduceFactor = t.SDK_PROPERTIES_DEFAULT.snapshotsReduceFactor, n.events_reduce_factor_map ? this.pointerParams.sdkProperties.eventsReduceFactorMap = n.events_reduce_factor_map : this.pointerParams.sdkProperties.eventsReduceFactorMap = t.SDK_PROPERTIES_DEFAULT.eventsReduceFactorMap, n.remote_logs_enabled ? this.pointerParams.sdkProperties.remoteLogsEnabled = "true" === n.remote_logs_enabled : this.pointerParams.sdkProperties.remoteLogsEnabled = t.SDK_PROPERTIES_DEFAULT.remoteLogsEnabled, n.max_remote_logs ? this.pointerParams.sdkProperties.maxRemoteLogs = Number(n.max_remote_logs) : this.pointerParams.sdkProperties.maxRemoteLogs = t.SDK_PROPERTIES_DEFAULT.maxRemoteLogs, n.failures_amount_to_report ? this.pointerParams.sdkProperties.failuresAmountToReport = Number(n.failures_amount_to_report) : this.pointerParams.sdkProperties.failuresAmountToReport = t.SDK_PROPERTIES_DEFAULT.failuresAmountToReport, n.metrics_frequency ? this.pointerParams.sdkProperties.metricsFrequency = Number(n.metrics_frequency) : this.pointerParams.sdkProperties.metricsFrequency = t.SDK_PROPERTIES_DEFAULT.metricsFrequency;
                var a = e.SecuredTouchUtil.safeJsonParse(n.web_sdk_fingerprint_black_list);
                this.pointerParams.sdkProperties.fingerPrintBlacklist = a || t.SDK_PROPERTIES_DEFAULT.fingerPrintBlacklist, n.pointer_cache_ttl_minutes ? this.pointerParams.sdkProperties.pointerTTLMinutes = Number(n.pointer_cache_ttl_minutes) : this.pointerParams.sdkProperties.pointerTTLMinutes = t.SDK_PROPERTIES_DEFAULT.pointerTTLMinutes;
                var s = e.SecuredTouchUtil.safeJsonParse(n.web_sdk_property_descriptors);
                this.pointerParams.sdkProperties.propertyDescriptorsConfig = s || t.SDK_PROPERTIES_DEFAULT.propertyDescriptorsConfig;
                var c = e.SecuredTouchUtil.safeJsonParse(n.web_sdk_media_codecs);
                this.pointerParams.sdkProperties.additionalMediaCodecs = c || t.SDK_PROPERTIES_DEFAULT.additionalMediaCodecs, n.pong_on_app_session_change ? this.pointerParams.sdkProperties.refreshTokenOnSessionChange = "true" === n.pong_on_app_session_change : this.pointerParams.sdkProperties.refreshTokenOnSessionChange = t.SDK_PROPERTIES_DEFAULT.refreshTokenOnSessionChange
            } else this.pointerParams.sdkProperties = t.SDK_PROPERTIES_DEFAULT
        }, Object.defineProperty(t.prototype, "token", {
            get: function() {
                return this._token
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "enabled", {
            get: function() {
                return this.pointerParams.enabled
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "url", {
            get: function() {
                return this.pointerParams.url
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "clientDigest", {
            get: function() {
                return this.pointerParams.clientDigest
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "bufferSize", {
            get: function() {
                return this.pointerParams.bufferSize
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "maxSensorSamples", {
            get: function() {
                return this.pointerParams.maxSensorSamples
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "maxSnapshotsCount", {
            get: function() {
                return this.pointerParams.maxSnapshotsCount
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "logMode", {
            get: function() {
                return this.pointerParams.logMode
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "shouldSendOnKeyboardUp", {
            get: function() {
                return this.pointerParams.shouldSendOnKeyboardUp
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "sensorsTimestampDeltaInMillis", {
            get: function() {
                return this.pointerParams.sensorsTimestampDeltaInMillis
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "propertyBlackList", {
            get: function() {
                return this.pointerParams.propertyBlackList
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "behavioralBlacklist", {
            get: function() {
                return this.pointerParams.behavioralBlacklist
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "tagsBlacklistRegex", {
            get: function() {
                return this.pointerParams.tagsBlacklistRegex
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "tagsToFlushRegex", {
            get: function() {
                return this.pointerParams.tagsToFlushRegex
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "version", {
            get: function() {
                return this.pointerParams.version
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "urlWhitelist", {
            get: function() {
                return this.pointerParams.sdkProperties.urlWhitelist
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "webRtcUrl", {
            get: function() {
                return this.pointerParams.sdkProperties.webRtcUrl
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "eventsBlackList", {
            get: function() {
                return this.pointerParams.sdkProperties.eventsBlackList
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "countOnlyEventsList", {
            get: function() {
                return this.pointerParams.sdkProperties.countOnlyEventsList
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "indirectInterval", {
            get: function() {
                return this.pointerParams.sdkProperties.indirectInterval
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "updateInterval", {
            get: function() {
                return this.pointerParams.sdkProperties.updateInterval
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "idleTimeoutMs", {
            get: function() {
                return this.pointerParams.sdkProperties.idleTimeoutMs
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "maxEventsCount", {
            get: function() {
                return this.pointerParams.sdkProperties.maxEventsCount
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "fieldBlackList", {
            get: function() {
                return this.pointerParams.sdkProperties.fieldBlackList
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "cssSelectors", {
            get: function() {
                return this.pointerParams.sdkProperties.cssSelectors
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "tagsCssSelectors", {
            get: function() {
                return this.pointerParams.sdkProperties.tagsCssSelectors
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "tagsConfig", {
            get: function() {
                return this.pointerParams.sdkProperties.tagsConfig
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "obfuscatedValues", {
            get: function() {
                return this.pointerParams.sdkProperties.obfuscatedValues
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "maxSelectorChildren", {
            get: function() {
                return this.pointerParams.sdkProperties.maxSelectorChildren
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "maxRequestQueueSize", {
            get: function() {
                return this.pointerParams.sdkProperties.maxRequestQueueSize
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "interactionExpirationTime", {
            get: function() {
                return this.pointerParams.sdkProperties.interactionExpirationTime
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "requestTimeout", {
            get: function() {
                return this.pointerParams.sdkProperties.requestTimeout
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "sendLocation", {
            get: function() {
                return this.pointerParams.sdkProperties.sendLocation
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "heartBeatFrequencyMs", {
            get: function() {
                return this.pointerParams.sdkProperties.heartBeatFrequencyMs
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "beforeUnloadEnabled", {
            get: function() {
                return this.pointerParams.sdkProperties.beforeunloadEnabled
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "devToolsEnabled", {
            get: function() {
                return this.pointerParams.sdkProperties.devToolsEnabled
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "snapshotsReduceFactor", {
            get: function() {
                return this.pointerParams.sdkProperties.snapshotsReduceFactor
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "eventsReduceFactorMap", {
            get: function() {
                return this.pointerParams.sdkProperties.eventsReduceFactorMap
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "remoteLogsEnabled", {
            get: function() {
                return this.pointerParams.sdkProperties.remoteLogsEnabled
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "maxRemoteLogs", {
            get: function() {
                return this.pointerParams.sdkProperties.maxRemoteLogs
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "failuresAmountToReport", {
            get: function() {
                return this.pointerParams.sdkProperties.failuresAmountToReport
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "metricsFrequency", {
            get: function() {
                return this.pointerParams.sdkProperties.metricsFrequency
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "fingerPrintBlacklist", {
            get: function() {
                return this.pointerParams.sdkProperties.fingerPrintBlacklist
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "pointerTTLMinutes", {
            get: function() {
                return this.pointerParams.sdkProperties.pointerTTLMinutes
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "propertyDescriptorsConfig", {
            get: function() {
                return this.pointerParams.sdkProperties.propertyDescriptorsConfig
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "additionalMediaCodecs", {
            get: function() {
                return this.pointerParams.sdkProperties.additionalMediaCodecs
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "refreshTokenOnSessionChange", {
            get: function() {
                return this.pointerParams.sdkProperties.refreshTokenOnSessionChange
            },
            enumerable: !0,
            configurable: !0
        }), t.POINTER_VERSION = 2, t.TOKEN_DEFAULT = "", t.ENABLED_DEFAULT = !0, t.URL_DEFAULT = "", t.CLIENT_DIGEST_DEFAULT = "", t.BUFFER_SIZE_DEFAULT = 4, t.MAX_SENSOR_SAMPLES_DEFAULT = 0, t.MAX_SNAPSHOTS_COUNT_DEFAULT = 500, t.LOG_MODE_DEFAULT = 0, t.SHOULD_SEND_ON_KEYBOARD_UP_DEFAULT = !0, t.SENSORS_TIMESTAMP_DELTA_IN_MILLIS_DEFAULT = 0, t.PROPERTY_BLACK_LIST_DEFAULT = [], t.BEHAVIORAL_BLACK_LIST_DEFAULT = null, t.TAGS_BLACK_LIST_REGEX_DEFAULT = "", t.TAGS_TO_FLUSH_BLACK_LIST_REGEX_DEFAULT = "", t.VERSION_DEFAULT = "", t.SDK_PROPERTIES_DEFAULT = {
            urlWhitelist: [],
            webRtcUrl: "",
            eventsBlackList: new Set,
            countOnlyEventsList: new Set,
            indirectInterval: 3e3,
            updateInterval: 1e3,
            idleTimeoutMs: 1e3,
            maxEventsCount: 500,
            fieldBlackList: new Set,
            cssSelectors: "",
            tagsCssSelectors: "",
            tagsConfig: "",
            obfuscatedValues: "",
            maxSelectorChildren: 2,
            maxRequestQueueSize: 10,
            interactionExpirationTime: 3e5,
            requestTimeout: 1e4,
            sendLocation: !0,
            heartBeatFrequencyMs: 6e5,
            beforeunloadEnabled: !1,
            devToolsEnabled: !0,
            snapshotsReduceFactor: 0,
            eventsReduceFactorMap: "",
            remoteLogsEnabled: !0,
            maxRemoteLogs: 2,
            failuresAmountToReport: 5,
            metricsFrequency: 5,
            fingerPrintBlacklist: [],
            pointerTTLMinutes: 8640,
            propertyDescriptorsConfig: {},
            additionalMediaCodecs: {},
            refreshTokenOnSessionChange: !0
        }, t
    }();
    e.SecuredTouchPointerConfig = t
}(_securedTouchEntities || (_securedTouchEntities = {})),
function(e) {
    var t = function() {
        function e() {}
        return Object.defineProperty(e, "METRIC_PREFIX", {
            get: function() {
                return "st.metrics"
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e, "METRICS_ENABLED", {
            get: function() {
                return "stMetricsEnabled"
            },
            enumerable: !0,
            configurable: !0
        }), e
    }();
    e.MetricsConstants = t
}(_securedTouchEntities || (_securedTouchEntities = {})),
function(e) {
    var t = function() {
        function e() {
            this._calcTime = void 0, this._skipped = void 0, this._calculated = void 0, this.calcStartTime = 0
        }
        return e.prototype.onCalcStarted = function() {
            this.calcStartTime = (new Date).getTime()
        }, e.prototype.onCalcEnded = function() {
            this.calcStartTime > 0 && (this._calcTime = (new Date).getTime() - this.calcStartTime, this.calcStartTime = 0)
        }, e.prototype.setMetadataSkipped = function(e) {
            this._skipped = e ? 1 : 0, this._calculated = 1 - this._skipped
        }, e.prototype.resetValues = function() {
            this._calcTime = void 0, this._skipped = void 0, this._calculated = void 0
        }, e.prototype.setMetrics = function(e) {
            var t = this;
            e.addMetric("count.metadata.calculated", this._calculated), e.addMetric("count.metadata.skip", this._skipped), e.addMetric("time.metadata.calculation.max", this._calcTime, function(e) {
                return !e || t._calcTime > e
            })
        }, e
    }();
    e.MetadataMetrics = t
}(_securedTouchEntities || (_securedTouchEntities = {})),
function(e) {
    var t = function() {
        function e() {
            this._initTime = void 0, this._pointerCached = void 0, this._pointerNotCached = void 0, this.initStartTime = 0
        }
        return e.prototype.onInitStarted = function() {
            this.initStartTime = (new Date).getTime()
        }, e.prototype.onInitEnded = function() {
            this.initStartTime > 0 && (this._initTime = (new Date).getTime() - this.initStartTime, this.initStartTime = 0)
        }, e.prototype.setPointerCached = function(e) {
            this._pointerCached = e ? 1 : 0, this._pointerNotCached = 1 - this._pointerCached
        }, e.prototype.resetValues = function() {
            this._initTime = void 0, this._pointerCached = void 0, this._pointerNotCached = void 0
        }, e.prototype.setMetrics = function(e) {
            var t = this;
            e.addMetric("time.init.flow.max", this._initTime, function(e) {
                return !e || t._initTime > e
            }), e.addMetric("count.pointer.cached", this._pointerCached), e.addMetric("count.pointer.not.cached", this._pointerNotCached)
        }, e
    }();
    e.InitMetrics = t
}(_securedTouchEntities || (_securedTouchEntities = {})),
function(e) {
    var t = function() {
        function e() {
            this._avgInteractionTime = 0, this._minTimeBetweenInteractions = 0, this._avgQueueSize = 0, this._avgAttempt = 0, this.attemptIncrement = 0, this.queueSizeIncrement = 0, this.timesMap = {}, this.increment = 0, this.lastInteractionTimestamp = 0
        }
        return e.prototype.onInteractionSent = function(e) {
            var t = (new Date).getTime();
            this.timesMap[e] = t, 0 === this.lastInteractionTimestamp ? this.lastInteractionTimestamp = t : (0 === this._minTimeBetweenInteractions || t - this.lastInteractionTimestamp < this._minTimeBetweenInteractions) && (this._minTimeBetweenInteractions = t - this.lastInteractionTimestamp, this.lastInteractionTimestamp = t)
        }, e.prototype.onInteractionSuccess = function(e) {
            if (this.timesMap[e]) {
                var t = (new Date).getTime() - this.timesMap[e];
                this.increment += 1, this._avgInteractionTime = (this._avgInteractionTime * (this.increment - 1) + t) / this.increment, delete this.timesMap[e]
            }
        }, e.prototype.onInteractionFailure = function(e) {
            this.timesMap[e] && delete this.timesMap[e]
        }, e.prototype.setQueueSize = function(e) {
            this.queueSizeIncrement += 1, this._avgQueueSize = (this._avgQueueSize * (this.queueSizeIncrement - 1) + e) / this.queueSizeIncrement
        }, e.prototype.setAttempt = function(e) {
            this.attemptIncrement += 1, this._avgAttempt = (this._avgAttempt * (this.attemptIncrement - 1) + e) / this.attemptIncrement
        }, e.prototype.resetValues = function() {
            this._avgInteractionTime = 0, this._minTimeBetweenInteractions = 0, this._avgQueueSize = 0, this._avgAttempt = 0
        }, e.prototype.setMetrics = function(e) {
            var t = this;
            this.increment = 0, e.addMetric("time.interactions.e2e.avg", this._avgInteractionTime), e.addMetric("time.between.interactions.min", this._minTimeBetweenInteractions, function(e) {
                return !e || t._minTimeBetweenInteractions < e
            }), this.queueSizeIncrement = 0, e.addMetric("count.queue.size.avg", this._avgQueueSize), this.attemptIncrement = 0, e.addMetric("count.request.attempt.avg", this._avgAttempt)
        }, e
    }();
    e.NetworkMetrics = t
}(_securedTouchEntities || (_securedTouchEntities = {})),
function(e) {
    var t = function() {
        function t() {
            this.enabledFactor = window._metricsEnabledFactor ? Number(window._metricsEnabledFactor) : .01, this.stSessionStorage = e.SecuredTouchSessionStorage.instance.sessionStorage, this.metadata = new e.MetadataMetrics, this.init = new e.InitMetrics, this.network = new e.NetworkMetrics;
            var t = this.stSessionStorage.getItem(e.MetricsConstants.METRICS_ENABLED);
            null != t ? this.enabled = "true" === t : (this.enabled = Math.random() <= this.enabledFactor, this.stSessionStorage.setItem(e.MetricsConstants.METRICS_ENABLED, this.enabled))
        }
        return Object.defineProperty(t, "instance", {
            get: function() {
                return t._instance || (t._instance = new t), t._instance
            },
            enumerable: !0,
            configurable: !0
        }), t.prototype.getMetricsData = function(t) {
            var n = {};
            try {
                if (this.enabled && t % e.SecuredTouchPointerConfig.instance.metricsFrequency == 0) {
                    var i = this,
                        r = {
                            addMetric: function(t, r, o) {
                                if (t && null != r) {
                                    var a = i.stSessionStorage.getItem(e.MetricsConstants.METRIC_PREFIX + "." + t);
                                    o && !o(a) || (i.stSessionStorage.setItem(e.MetricsConstants.METRIC_PREFIX + "." + t, r), n[t] = r)
                                }
                            }
                        };
                    this.metadata.setMetrics(r), this.init.setMetrics(r), this.network.setMetrics(r), this.metadata.resetValues(), this.init.resetValues(), this.network.resetValues()
                }
            } catch (t) {
                e.STLogger.warn("Failed to add metrics", t)
            }
            return n
        }, t
    }();
    e.SecuredTouchMetrics = t
}(_securedTouchEntities || (_securedTouchEntities = {})),
function(e) {
    var t = function() {
        function t(e, t) {
            this.clientVersion = e, this.customHeaders = new Map, this.customHeaders.set("clientVersion", this.clientVersion), this.customHeaders.set("instanceUUID", t)
        }
        return t.prototype.setHeader = function(e, t) {
            this.customHeaders.set(e, t)
        }, t.prototype.removeHeader = function(e) {
            this.customHeaders.delete(e)
        }, t.prototype.setCustomHeaders = function(e, t) {
            e.setRequestHeader("Accept", "application/json"), e.setRequestHeader("Content-Type", "application/json"), e.setRequestHeader("Attempt", "" + t), e.setRequestHeader("clientEpoch", "" + (new Date).getTime()), this.customHeaders.forEach(function(t, n) {
                e.setRequestHeader(n, t)
            })
        }, t.isGzipEnabled = function() {
            try {
                return !!_securedTouchDependencies.pako && !window["unzip-securedtouch"]
            } catch (e) {
                return !1
            }
        }, t.prototype.postJson = function(t, n, i, r, o, a) {
            var s = this;
            return new Promise(function(c, u) {
                if (o) {
                    var d = new XMLHttpRequest;
                    d.open("POST", t, !0), d.withCredentials = !0, d.timeout = i, d.setRequestHeader("Authorization", o), s.setCustomHeaders(d, r), d.onload = function() {
                        if (d.status >= 200 && d.status < 400) try {
                            var e = JSON.parse(d.responseText ? d.responseText : "{}");
                            c(e)
                        } catch (e) {
                            u(e)
                        } else u({
                            status: d.status,
                            statsText: d.statusText
                        })
                    }, d.ontimeout = function(e) {
                        u(e)
                    }, d.onerror = function(e) {
                        u({
                            status: d.status,
                            statsText: d.statusText
                        })
                    };
                    var h = JSON.stringify(n);
                    a && e.STHttpClient.isGzipEnabled() ? (d.setRequestHeader("Content-Encoding", "gzip"), d.send(_securedTouchDependencies.pako.gzip(h))) : d.send(h), e.SecuredTouchMetrics.instance.network.setAttempt(r)
                } else u({
                    status: 401,
                    statsText: "Aborted, Auth token is missing"
                })
            })
        }, t
    }();
    e.STHttpClient = t
}(_securedTouchEntities || (_securedTouchEntities = {})),
function(e) {
    var t = function() {
        function t(e) {
            this.mapKey = e
        }
        return Object.defineProperty(t.prototype, "asMap", {
            get: function() {
                var e = t.stSessionStorage.getItem(this.mapKey);
                return e || (e = JSON.stringify({})), JSON.parse(e)
            },
            enumerable: !0,
            configurable: !0
        }), t.prototype.set = function(n, i) {
            var r = this.asMap;
            r[n] = i, t.stSessionStorage.setItem(e.SecuredTouchConstants.SESSION_STORAGE_UPDATE_TS, (new Date).getTime()), t.stSessionStorage.setItem(this.mapKey, JSON.stringify(r))
        }, t.prototype.get = function(e) {
            return this.asMap[e]
        }, t.prototype.delete = function(e) {
            var n = this.asMap;
            delete n[e], t.stSessionStorage.setItem(this.mapKey, JSON.stringify(n))
        }, t.prototype.values = function() {
            var t = this.asMap;
            return e.SecuredTouchUtil.values(t)
        }, t.prototype.clear = function() {
            t.stSessionStorage.removeItem(this.mapKey)
        }, t.stSessionStorage = e.SecuredTouchSessionStorage.instance.sessionStorage, t
    }();
    e.SecuredTouchStorageMap = t
}(_securedTouchEntities || (_securedTouchEntities = {})),
function(e) {
    var t;
    ! function(e) {
        e[e.pointer = 0] = "pointer", e[e.interactions = 1] = "interactions", e[e.metadata = 2] = "metadata", e[e.initSession = 3] = "initSession"
    }(t || (t = {}));
    var n = function() {
        function n() {
            this.shouldResetMetadata = !1, this.canceledInteractions = new e.SecuredTouchStorageMap(e.SecuredTouchConstants.CANCELED_INTERACTIONS), this.pointerQueue = new _securedTouchDependencies.StPromiseQueue(1)
        }
        return n.prototype.init = function(t, n, i, r, o, a, s) {
            this.applicationId = t, this.appSecretBase64 = e.SecuredTouchUtil.encodeBase64(n), this.pointerUrlPrefix = i, this.clientVersion = r, this.deviceType = o, this.sessionStorage = s || e.SecuredTouchSessionStorage.instance, this.http = a || new e.STHttpClient(r, this.sessionStorage.windowId), this.interactionsQueue || (this.interactionsQueue = new _securedTouchDependencies.StPromiseQueue(1, e.SecuredTouchPointerConfig.instance.maxRequestQueueSize))
        }, n.prototype.enqueue = function(t) {
            return e.SecuredTouchMetrics.instance.network.setQueueSize(this.interactionsQueue.getQueueLength()), this.interactionsQueue.add(t)
        }, n.prototype.sendCanceledPayloads = function() {
            var t = this,
                n = this.canceledInteractions.values();
            this.canceledInteractions.clear(), n && n.length > 0 && n.forEach(function(n) {
                t.sendInteractions(n).catch(function(t) {
                    e.STLogger.warn("Failed to resend canceled interactions after page reload", t)
                })
            })
        }, n.prototype.clearCanceledPayloads = function() {
            this.canceledInteractions.clear()
        }, n.prototype.initSessionWithRetry = function(n, i) {
            var r = this;
            return new Promise(function(o, a) {
                r.http.postJson(e.SecuredTouchPointerConfig.instance.url + "initSession/", n, e.SecuredTouchPointerConfig.instance.requestTimeout, i, e.SecuredTouchPointerConfig.instance.token, !0).then(function(e) {
                    o(e)
                }).catch(function(e) {
                    r.handleNetworkFailure(e, t.initSession, i + 1).then(function() {
                        return r.initSessionWithRetry(n, i + 1)
                    }).then(function(e) {
                        o(e)
                    }).catch(function(e) {
                        a(e)
                    })
                })
            })
        }, n.prototype.initSession = function(e) {
            var t = this;
            return this.enqueue(function() {
                return t.initSessionWithRetry(e, 0)
            })
        }, n.prototype.getPointer = function(i, r) {
            return void 0 === r && (r = 0), __awaiter(this, void 0, void 0, function() {
                var o = this;
                return __generator(this, function(a) {
                    return [2, new Promise(function(a, s) {
                        o.http.postJson(o.pointerUrlPrefix + "/SecuredTouch/rest/services/" + o.applicationId + "/pointer", i, n.POINTER_TIMEOUT, r, o.appSecretBase64, !0).then(function(e) {
                            a(e)
                        }).catch(function(n) {
                            o.handleNetworkFailure(n, t.pointer, r + 1).then(function() {
                                var t = o.sessionStorage.getDeviceCredentials();
                                return e.SecuredTouchPointerConfig.instance.loadPointerFromServer(o, {
                                    device_id: t.deviceId,
                                    secret: t.deviceSecret,
                                    clientVersion: o.clientVersion,
                                    deviceType: o.deviceType,
                                    authToken: e.SecuredTouchPointerConfig.instance.token
                                }, r + 1)
                            }).then(function(t) {
                                a(t), o.shouldResetMetadata && o.lastMetadata && (o.shouldResetMetadata = !1, o.lastMetadata.deviceId = o.sessionStorage.getDeviceCredentials().deviceId, o.sendMetadata(o.lastMetadata).catch(function(t) {
                                    e.STLogger.warn("Failed to update metadata", t)
                                }))
                            }).catch(function(e) {
                                s(e)
                            })
                        })
                    })]
                })
            })
        }, n.prototype.sendMetadata = function(e) {
            var t = this;
            return this.lastMetadata = e, this.enqueue(function() {
                return t.sendMetadataWithRetry(e, 0)
            })
        }, n.prototype.sendMetadataWithRetry = function(n, i) {
            var r = this;
            return new Promise(function(o, a) {
                r.http.postJson(e.SecuredTouchPointerConfig.instance.url + "metadata/", n, e.SecuredTouchPointerConfig.instance.requestTimeout, i, e.SecuredTouchPointerConfig.instance.token, !0).then(function() {
                    o()
                }).catch(function(e) {
                    r.handleNetworkFailure(e, t.metadata, i + 1).then(function() {
                        return r.sendMetadataWithRetry(n, i + 1)
                    }).then(o).catch(function(e) {
                        a(e)
                    })
                })
            })
        }, n.prototype.sendInteractionsWithRetry = function(n, i, r) {
            var o = this,
                a = this;
            return n.deviceId !== this.sessionStorage.getDeviceCredentials().deviceId ? (e.STLogger.warn("Send Interactions failed, interaction's deviceID not matching the current deviceId"), this.canceledInteractions.delete(i), Promise.reject("Interaction's deviceID not matching the current deviceId")) : new Promise(function(s, c) {
                e.SecuredTouchMetrics.instance.network.onInteractionSent(i), a.http.postJson(e.SecuredTouchPointerConfig.instance.url + "interactions/", n, e.SecuredTouchPointerConfig.instance.requestTimeout, r, e.SecuredTouchPointerConfig.instance.token, !0).then(function(t) {
                    e.SecuredTouchMetrics.instance.network.onInteractionSuccess(i);
                    var r = n.keyboardInteractionPayloads ? n.keyboardInteractionPayloads.length : 0,
                        a = n.mouseInteractionPayloads ? n.mouseInteractionPayloads.length : 0,
                        c = n.gestures ? n.gestures.length : 0;
                    e.STLogger.info(r + " Keyboard Interactions, " + a + " Mouse interactions and " + c + " Gestures sent to server."), o.canceledInteractions.delete(i), s(t)
                }).catch(function(u) {
                    e.SecuredTouchMetrics.instance.network.onInteractionFailure(i), a.handleNetworkFailure(u, t.interactions, r + 1).then(function() {
                        return a.sendInteractionsWithRetry(n, i, r + 1)
                    }).then(function(e) {
                        s(e)
                    }).catch(function(e) {
                        o.canceledInteractions.delete(i), c(e)
                    })
                })
            })
        }, n.prototype.sendInteractions = function(t) {
            var n = this,
                i = e.SecuredTouchUtil.newGuid();
            this.canceledInteractions.set(i, t);
            var r = e.SecuredTouchUtil.now();
            return this.enqueue(function() {
                return e.SecuredTouchUtil.now() - r > e.SecuredTouchPointerConfig.instance.interactionExpirationTime ? Promise.reject("interaction expired") : n.sendInteractionsWithRetry(t, i, 0)
            })
        }, n.prototype.handleNetworkFailure = function(i, r, o) {
            return __awaiter(this, void 0, void 0, function() {
                var a, s;
                return __generator(this, function(c) {
                    switch (c.label) {
                        case 0:
                            if (o >= n.MAX_REQUEST_RETRIES) return [2, Promise.reject(i)];
                            c.label = 1;
                        case 1:
                            return c.trys.push([1, 6, , 7]), 401 != i.status && 403 != i.status ? [3, 2] : r == t.pointer ? (this.sessionStorage.resetDeviceCredentials(), this.shouldResetMetadata = !0, [2, Promise.resolve()]) : (a = this.sessionStorage.getDeviceCredentials(), [2, e.SecuredTouchPointerConfig.instance.loadPointerFromServer(this, {
                                device_id: a.deviceId,
                                secret: a.deviceSecret,
                                clientVersion: this.clientVersion,
                                deviceType: this.deviceType,
                                authToken: e.SecuredTouchPointerConfig.instance.token
                            })]);
                        case 2:
                            return i.status >= 400 && i.status < 500 && 408 !== i.status ? [2, Promise.reject(i)] : [3, 3];
                        case 3:
                            return [4, e.SecuredTouchUtil.delay(n.REQUESTS_COOL_DOWN[o] || n.REQUESTS_COOL_DOWN[n.REQUESTS_COOL_DOWN.length - 1])];
                        case 4:
                            return c.sent(), [2, Promise.resolve()];
                        case 5:
                            return [3, 7];
                        case 6:
                            return s = c.sent(), [2, Promise.reject(s)];
                        case 7:
                            return [2]
                    }
                })
            })
        }, n.POINTER_TIMEOUT = 1e4, n.MAX_REQUEST_RETRIES = 3, n.REQUESTS_COOL_DOWN = [0, 1e3, 2e3], n
    }();
    e.STServer = n
}(_securedTouchEntities || (_securedTouchEntities = {})),
function(e) {
    "use strict";
    var t = function() {
            function e(e, t) {
                this.handler = e, this.isOnce = t, this.isExecuted = !1
            }
            return e.prototype.execute = function(e, t, n) {
                if (!this.isOnce || !this.isExecuted) {
                    this.isExecuted = !0;
                    var i = this.handler;
                    e ? setTimeout(function() {
                        i.apply(t, n)
                    }, 1) : i.apply(t, n)
                }
            }, e
        }(),
        n = function() {
            function e() {
                this._wrap = new a(this), this._subscriptions = new Array
            }
            return e.prototype.subscribe = function(e) {
                e && this._subscriptions.push(new t(e, !1))
            }, e.prototype.sub = function(e) {
                this.subscribe(e)
            }, e.prototype.one = function(e) {
                e && this._subscriptions.push(new t(e, !0))
            }, e.prototype.has = function(e) {
                if (e)
                    for (var t = 0, n = this._subscriptions; t < n.length; t++) {
                        if (n[t].handler == e) return !0
                    }
                return !1
            }, e.prototype.unsubscribe = function(e) {
                if (e)
                    for (var t = 0; t < this._subscriptions.length; t++) {
                        if (this._subscriptions[t].handler == e) {
                            this._subscriptions.splice(t, 1);
                            break
                        }
                    }
            }, e.prototype.unsub = function(e) {
                this.unsubscribe(e)
            }, e.prototype._dispatch = function(e, t, n) {
                for (var i = 0; i < this._subscriptions.length; i++) {
                    var r = this._subscriptions[i];
                    if (r.isOnce) {
                        if (!0 === r.isExecuted) continue;
                        this._subscriptions.splice(i, 1), i--
                    }
                    r.execute(e, t, n)
                }
            }, e.prototype.asEvent = function() {
                return this._wrap
            }, e
        }();
    e.DispatcherBase = n;
    var i = function(e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }
        return __extends(t, e), t.prototype.dispatch = function(e, t) {
            this._dispatch(!1, this, arguments)
        }, t.prototype.dispatchAsync = function(e, t) {
            this._dispatch(!0, this, arguments)
        }, t
    }(n);
    e.EventDispatcher = i;
    var r = function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return __extends(t, e), t.prototype.dispatch = function(e) {
                this._dispatch(!1, this, arguments)
            }, t.prototype.dispatchAsync = function(e) {
                this._dispatch(!0, this, arguments)
            }, t
        }(n),
        o = function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return __extends(t, e), t.prototype.dispatch = function() {
                this._dispatch(!1, this, arguments)
            }, t.prototype.dispatchAsync = function() {
                this._dispatch(!0, this, arguments)
            }, t
        }(n),
        a = function() {
            function e(e) {
                this._subscribe = function(t) {
                    return e.subscribe(t)
                }, this._unsubscribe = function(t) {
                    return e.unsubscribe(t)
                }, this._one = function(t) {
                    return e.one(t)
                }, this._has = function(t) {
                    return e.has(t)
                }
            }
            return e.prototype.subscribe = function(e) {
                this._subscribe(e)
            }, e.prototype.sub = function(e) {
                this.subscribe(e)
            }, e.prototype.unsubscribe = function(e) {
                this._unsubscribe(e)
            }, e.prototype.unsub = function(e) {
                this.unsubscribe(e)
            }, e.prototype.one = function(e) {
                this._one(e)
            }, e.prototype.has = function(e) {
                return this._has(e)
            }, e
        }(),
        s = function() {
            function e() {
                this._events = {}
            }
            return e.prototype.get = function(e) {
                var t = this._events[e];
                return t || (t = this.createDispatcher(), this._events[e] = t, t)
            }, e.prototype.remove = function(e) {
                this._events[e] = null
            }, e
        }(),
        c = function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return __extends(t, e), t.prototype.createDispatcher = function() {
                return new i
            }, t
        }(s),
        u = function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return __extends(t, e), t.prototype.createDispatcher = function() {
                return new r
            }, t
        }(s),
        d = function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return __extends(t, e), t.prototype.createDispatcher = function() {
                return new o
            }, t
        }(s);
    (function() {
        function e() {
            this._events = new c
        }
        Object.defineProperty(e.prototype, "events", {
            get: function() {
                return this._events
            },
            enumerable: !0,
            configurable: !0
        }), e.prototype.subscribe = function(e, t) {
            this._events.get(e).subscribe(t)
        }, e.prototype.sub = function(e, t) {
            this.subscribe(e, t)
        }, e.prototype.unsubscribe = function(e, t) {
            this._events.get(e).unsubscribe(t)
        }, e.prototype.unsub = function(e, t) {
            this.unsubscribe(e, t)
        }, e.prototype.one = function(e, t) {
            this._events.get(e).one(t)
        }, e.prototype.has = function(e, t) {
            return this._events.get(e).has(t)
        }
    })(),
    function() {
        function e() {
            this._events = new u
        }
        Object.defineProperty(e.prototype, "events", {
            get: function() {
                return this._events
            },
            enumerable: !0,
            configurable: !0
        }), e.prototype.subscribe = function(e, t) {
            this._events.get(e).subscribe(t)
        }, e.prototype.sub = function(e, t) {
            this.subscribe(e, t)
        }, e.prototype.one = function(e, t) {
            this._events.get(e).one(t)
        }, e.prototype.has = function(e, t) {
            return this._events.get(e).has(t)
        }, e.prototype.unsubscribe = function(e, t) {
            this._events.get(e).unsubscribe(t)
        }, e.prototype.unsub = function(e, t) {
            this.unsubscribe(e, t)
        }
    }(),
    function() {
        function e() {
            this._events = new d
        }
        Object.defineProperty(e.prototype, "events", {
            get: function() {
                return this._events
            },
            enumerable: !0,
            configurable: !0
        }), e.prototype.one = function(e, t) {
            this._events.get(e).one(t)
        }, e.prototype.has = function(e, t) {
            return this._events.get(e).has(t)
        }, e.prototype.subscribe = function(e, t) {
            this._events.get(e).subscribe(t)
        }, e.prototype.sub = function(e, t) {
            this.subscribe(e, t)
        }, e.prototype.unsubscribe = function(e, t) {
            this._events.get(e).unsubscribe(t)
        }, e.prototype.unsub = function(e, t) {
            this.unsubscribe(e, t)
        }
    }()
}(_securedTouchEntities || (_securedTouchEntities = {})),
function(e) {
    var t = function() {
        function t(e) {
            this._isStarted = !1, this._isEventsStarted = !1, this._gestureTimestamps = [], this._maxSensorSamples = 0, this._sensorsTimestampDeltaInMillis = 0, this._accelerometerList = [], this._gyroscopeList = [], this._linearAccelerometerList = [], this._rotationList = [], this.orientationImplementationFix = 1, this.delegate = e, window.navigator.userAgent.match(/^.*(iPhone|iPad).*(OS\s[0-9]).*(CriOS|Version)\/[.0-9]*\sMobile.*$/i) && (this.orientationImplementationFix = -1), this.accelerometerUpdateHandle = this.accelerometerUpdate.bind(this), this.orientationUpdateHandle = this.orientationUpdate.bind(this)
        }
        return Object.defineProperty(t.prototype, "LAST_GESTURE_SENSOR_TIMEOUT_MILI_SECONDS", {
            get: function() {
                return 3e3
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "accX", {
            get: function() {
                return this._accX
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "accY", {
            get: function() {
                return this._accY
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "accZ", {
            get: function() {
                return this._accZ
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "lienarAccX", {
            get: function() {
                return this._lienarAccX
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "lienarAccY", {
            get: function() {
                return this._lienarAccY
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "lienarAccZ", {
            get: function() {
                return this._lienarAccZ
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "isStarted", {
            get: function() {
                return this._isStarted
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "rotX", {
            get: function() {
                return this._rotX
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "rotY", {
            get: function() {
                return this._rotY
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "rotZ", {
            get: function() {
                return this._rotZ
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "maxSensorSamples", {
            get: function() {
                return this._maxSensorSamples
            },
            set: function(e) {
                this._maxSensorSamples = e
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "sensorsTimestampDeltaInMillis", {
            get: function() {
                return this._sensorsTimestampDeltaInMillis
            },
            set: function(e) {
                this._sensorsTimestampDeltaInMillis = e
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "accelerometerList", {
            get: function() {
                return this.getRelevantSensorSamples(this._accelerometerList)
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "gyroscopeList", {
            get: function() {
                return this.getRelevantSensorSamples(this._gyroscopeList)
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "linearAccelerometerList", {
            get: function() {
                return this.getRelevantSensorSamples(this._linearAccelerometerList)
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "rotationList", {
            get: function() {
                return this._rotationList
            },
            enumerable: !0,
            configurable: !0
        }), t.prototype.getRelevantSensorSamples = function(t) {
            if (0 == t.length || this._sensorsTimestampDeltaInMillis < 1 || 0 == this._gestureTimestamps.length) return t;
            for (var n = new Map, i = null, r = 0, o = 0; o < t.length; o++)
                for (var a = 0; a < this._gestureTimestamps.length; a++)(r = t[o].timestamp) >= (i = this._gestureTimestamps[a]).start - this._sensorsTimestampDeltaInMillis && r <= i.end + this._sensorsTimestampDeltaInMillis && n.set(t[o].timestamp, t[o]);
            return e.SecuredTouchUtil.getValuesOfMap(n)
        }, t.prototype.getRotationListCopy = function() {
            return this._rotationList ? Array.from(this._rotationList) : []
        }, t.prototype.stopEvents = function() {
            this._isEventsStarted && (void 0 != window.DeviceMotionEvent && window.removeEventListener("devicemotion", this.accelerometerUpdateHandle, !0), window.DeviceOrientationEvent && window.removeEventListener("deviceorientation", this.orientationUpdateHandle, !0), this._isEventsStarted = !1, e.STLogger.debug("Sensor events stopped listening"))
        }, t.prototype.startEvents = function() {
            this._isEventsStarted || (void 0 != window.DeviceMotionEvent ? e.SecuredTouchUtil.addEventListener(window, "devicemotion", this.accelerometerUpdateHandle, !0) : e.STLogger.warn("DeviceMotion not supported!"), window.DeviceOrientationEvent ? e.SecuredTouchUtil.addEventListener(window, "deviceorientation", this.orientationUpdateHandle, !0) : e.STLogger.warn("DeviceOrientation not supported!"), e.STLogger.debug("Sensor events start listening..."), this._isEventsStarted = !0)
        }, t.prototype.start = function() {
            this._isStarted || (this._isStarted = !0, e.STLogger.debug("Sensor events started..."))
        }, t.prototype.stop = function() {
            this._isStarted && (void 0 != window.DeviceMotionEvent && window.removeEventListener("devicemotion", this.accelerometerUpdateHandle, !0), window.DeviceOrientationEvent && window.removeEventListener("deviceorientation", this.orientationUpdateHandle, !0), this._isStarted = !1, e.STLogger.debug("Sensor events stopped"))
        }, t.prototype.reset = function() {
            this._accelerometerList = [], this._gyroscopeList = [], this._linearAccelerometerList = [], this._rotationList = [], this._gestureTimestamps.length > 0 ? this._gestureTimestamps = [this._gestureTimestamps[this._gestureTimestamps.length - 1]] : this._gestureTimestamps = [], this._accX = 0, this._accY = 0, this._accZ = 0, this._rotX = 0, this._rotY = 0, this._rotZ = 0
        }, t.prototype.onGesture = function(e) {
            this._isEventsStarted || this.startEvents(), e.snapshots.length > 1 && this._gestureTimestamps.push({
                start: e.snapshots[0].timestamp,
                end: e.snapshots[e.snapshots.length - 1].timestamp
            })
        }, t.prototype.puaseSensorsCollectionIfNoActivity = function(e) {
            return (this._gestureTimestamps.length > 0 ? this._gestureTimestamps[this._gestureTimestamps.length - 1].end : 0) > 0 ? Math.abs(e - this._gestureTimestamps[this._gestureTimestamps.length - 1].end) > this.LAST_GESTURE_SENSOR_TIMEOUT_MILI_SECONDS && (this.stopEvents(), !0) : (this.stopEvents(), !0)
        }, t.prototype.getDeviceAcceleration = function(e) {
            return e && null != e.x && null != e.y && null != e.z ? e : null
        }, t.prototype.accelerometerUpdate = function(t) {
            try {
                if (!this.delegate.collectBehavioralData() || this.puaseSensorsCollectionIfNoActivity(e.SecuredTouchUtil.now())) return;
                var n = this.getDeviceAcceleration(t.accelerationIncludingGravity);
                n && (this._accX = n.x * this.orientationImplementationFix, this._accY = n.y * this.orientationImplementationFix, this._accZ = n.z, this.safeAddSensorSample({
                    x: this._accX,
                    y: this._accY,
                    z: this._accX,
                    timestamp: e.SecuredTouchUtil.now()
                }, this._accelerometerList));
                var i = this.getDeviceAcceleration(t.acceleration);
                i && (this._lienarAccX = i.x * this.orientationImplementationFix, this._lienarAccY = i.y * this.orientationImplementationFix, this._lienarAccZ = i.z, this.safeAddSensorSample({
                    x: this._lienarAccX,
                    y: this._lienarAccY,
                    z: this._lienarAccZ,
                    timestamp: e.SecuredTouchUtil.now()
                }, this._linearAccelerometerList)), t.rotationRate && null != t.rotationRate.alpha && null != t.rotationRate.beta && null != t.rotationRate.gamma && (this._rotX = t.rotationRate.alpha, this._rotY = t.rotationRate.beta, this._rotZ = t.rotationRate.gamma, this.safeAddSensorSample({
                    x: this._rotX,
                    y: this._rotY,
                    z: this._rotZ,
                    timestamp: e.SecuredTouchUtil.now()
                }, this._gyroscopeList))
            } catch (t) {
                e.STLogger.warn("error in accelerometer handler", t)
            }
        }, t.prototype.orientationUpdate = function(t) {
            try {
                if (!this.delegate.collectBehavioralData() || this.puaseSensorsCollectionIfNoActivity(e.SecuredTouchUtil.now())) return;
                null != t.alpha && null != t.beta && null != t.gamma && this.safeAddSensorSample({
                    x: t.alpha,
                    y: t.beta,
                    z: t.gamma,
                    timestamp: e.SecuredTouchUtil.now()
                }, this._rotationList)
            } catch (t) {
                e.STLogger.warn("error in orientation handler", t)
            }
        }, t.prototype.safeAddSensorSample = function(e, t) {
            this.maxSensorSamples > t.length && t.push(e)
        }, t
    }();
    e.SecuredTouchSensors = t
}(_securedTouchEntities || (_securedTouchEntities = {})),
function(e) {
    var t;
    ! function(e) {
        e[e.Up = 1] = "Up", e[e.Down = 2] = "Down", e[e.Left = 3] = "Left", e[e.Right = 4] = "Right"
    }(t || (t = {}));
    var n = function() {
        function n(t, n) {
            this.BEHAVIORAL_TYPE = "gestures", this._isStarted = !1, this._onGesture = new e.EventDispatcher, this.touchSnapshotsMap = new Map, this.snapshotStartTime = new Map, this.delegate = t, this.sensors = n, this.touchStartHandler = this.touchStart.bind(this), this.touchMoveHandler = this.touchMove.bind(this), this.touchEndHandler = this.touchEnd.bind(this), this.touchCancelHandler = this.touchCancel.bind(this)
        }
        return Object.defineProperty(n.prototype, "onGesture", {
            get: function() {
                return this._onGesture.asEvent()
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(n.prototype, "isStarted", {
            get: function() {
                return this._isStarted
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(n.prototype, "SCROLL_MIN_DURATION", {
            get: function() {
                return 500
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(n.prototype, "SWIPE_MAX_ANGLE", {
            get: function() {
                return 45
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(n.prototype, "TAP_MOVEMENT_TRESHOLD", {
            get: function() {
                return 10
            },
            enumerable: !0,
            configurable: !0
        }), n.prototype.clearTouchSnapshots = function(e) {
            this.touchSnapshotsMap.delete(e), this.snapshotStartTime.delete(e)
        }, n.prototype.getTouchSnapshots = function(e) {
            var t;
            return this.touchSnapshotsMap.has(e) ? t = this.touchSnapshotsMap.get(e) : (t = [], this.touchSnapshotsMap.set(e, t)), t
        }, n.prototype.isEmpty = function() {
            return 0 === this.touchSnapshotsMap.size
        }, n.prototype.start = function() {
            this._isStarted || (e.SecuredTouchUtil.addEventListener(document, "touchstart", this.touchStartHandler), e.SecuredTouchUtil.addEventListener(document, "touchmove", this.touchMoveHandler), e.SecuredTouchUtil.addEventListener(document, "touchend", this.touchEndHandler), e.SecuredTouchUtil.addEventListener(document, "touchcancel", this.touchCancelHandler), this._isStarted = !0)
        }, n.prototype.stop = function() {
            this._isStarted && (document.removeEventListener("touchstart", this.touchStartHandler), document.removeEventListener("touchmove", this.touchMoveHandler), document.removeEventListener("touchend", this.touchEndHandler), document.removeEventListener("touchcancel", this.touchCancelHandler), this._isStarted = !1)
        }, n.prototype.touchStart = function(t) {
            try {
                if (!this.delegate.collectBehavioralData(this.BEHAVIORAL_TYPE)) return;
                e.STLogger.debug("touchstart(" + t.changedTouches.length + ")", t), t.changedTouches.length > 0 && this.pushSnapshot(t)
            } catch (t) {
                e.STLogger.warn("error in touchStart handler", t)
            }
        }, n.prototype.touchMove = function(t) {
            try {
                if (!this.delegate.collectBehavioralData(this.BEHAVIORAL_TYPE)) return;
                e.STLogger.debug("touchmove(" + t.changedTouches.length + ")", t), t.changedTouches.length > 0 && this.pushSnapshot(t)
            } catch (t) {
                e.STLogger.warn("error in touchMove handler", t)
            }
        }, n.prototype.touchEnd = function(t) {
            try {
                if (!this.delegate.collectBehavioralData(this.BEHAVIORAL_TYPE)) return void this._onGesture.dispatch(this, null);
                e.STLogger.debug("touchend(" + t.changedTouches.length + ")", t), this.gestureEnd(t)
            } catch (t) {
                e.STLogger.warn("error in touchEnd handler", t)
            }
        }, n.prototype.touchCancel = function(t) {
            try {
                if (!this.delegate.collectBehavioralData(this.BEHAVIORAL_TYPE)) return void this._onGesture.dispatch(this, null);
                e.STLogger.debug("touchcancel(" + t.changedTouches.length + ")", t), this.gestureEnd(t)
            } catch (t) {
                e.STLogger.warn("error in touchCancel handler", t)
            }
        }, n.prototype.gestureEnd = function(t) {
            t.changedTouches.length > 0 && this.pushSnapshot(t);
            for (var n = 0; n < t.changedTouches.length; n++) {
                var i = t.changedTouches.item(n),
                    r = this.getTouchSnapshots(i.identifier);
                r.length > 0 && (this.isTap(r) ? this.dispatchGesture(e.GestureType.Tap, i.identifier) : this.dispatchGesture(this.calcGestureType(r), i.identifier))
            }
        }, n.prototype.calcGestureType = function(n) {
            var i, r = this.getDirection(n);
            if (this.isFling(n)) switch (r) {
                case t.Up:
                    i = e.GestureType.FlingUp;
                    break;
                case t.Right:
                    i = e.GestureType.FlingRight;
                    break;
                case t.Down:
                    i = e.GestureType.FlingDown;
                    break;
                case t.Left:
                    i = e.GestureType.FlingLeft
            } else if (this.isScroll(n)) switch (r) {
                case t.Up:
                    i = e.GestureType.ScrollUp;
                    break;
                case t.Right:
                    i = e.GestureType.ScrollRight;
                    break;
                case t.Down:
                    i = e.GestureType.ScrollDown;
                    break;
                case t.Left:
                    i = e.GestureType.ScrollLeft
            }
            return i
        }, n.prototype.pushSnapshot = function(t) {
            if (t.changedTouches && t.changedTouches.length > 0)
                for (var n = 0; n < t.changedTouches.length; n++) {
                    var i = t.changedTouches.item(n),
                        r = i.radiusX && i.radiusY ? (i.radiusX + i.radiusY) / 2 : null;
                    this.snapshotStartTime.has(i.identifier) || this.snapshotStartTime.set(i.identifier, (new Date).getTime());
                    var o = this.getTouchSnapshots(i.identifier);
                    o.length < e.SecuredTouchPointerConfig.instance.maxSnapshotsCount && o.push({
                        timestamp: e.SecuredTouchUtil.now(),
                        relativeX: i.screenX,
                        relativeY: i.screenY,
                        x: i.clientX,
                        y: i.clientY,
                        pressure: i.force,
                        size: r,
                        xaccelerometer: this.sensors.accX,
                        yaccelerometer: this.sensors.accY,
                        zaccelerometer: this.sensors.accZ,
                        xlinearaccelerometer: this.sensors.lienarAccX,
                        ylinearaccelerometer: this.sensors.lienarAccY,
                        zlinearaccelerometer: this.sensors.lienarAccZ,
                        xrotation: this.sensors.rotX,
                        yrotation: this.sensors.rotY,
                        zrotation: this.sensors.rotZ,
                        additionalData: {
                            radiusX: i.radiusX,
                            radiusY: i.radiusY,
                            rotationAngle: i.rotationAngle,
                            pageX: i.pageX,
                            pageY: i.pageY,
                            eventTimeStamp: t.timeStamp
                        }
                    })
                }
        }, n.prototype.dispatchGesture = function(t, n) {
            var i = this.touchSnapshotsMap.get(n) || [],
                r = e.SecuredTouchUtil.getDeviceOrientation();
            this._onGesture.dispatch(this, {
                timestamp: i.length > 0 ? i[0].timestamp : 0,
                epochTs: this.snapshotStartTime.get(n) || 0,
                counter: null,
                type: t,
                snapshots: i,
                vector: {},
                attributes: {},
                additionalData: {
                    width: screen.width,
                    height: screen.height,
                    availWidth: screen.availWidth,
                    availHeight: screen.availHeight,
                    deviceOrientation: r.orientation,
                    deviceAngle: r.angle,
                    locationHref: e.SecuredTouchUtil.getCurrentLocationUrl(),
                    windowOuterWidth: window.outerWidth,
                    windowOuterHeight: window.outerHeight,
                    windowInnerWidth: window.innerWidth,
                    windowInnerHeight: window.innerHeight,
                    bodyClientWidht: document.body.clientWidth,
                    bodyClientHeight: document.body.clientHeight,
                    devicePixelRatio: window.devicePixelRatio,
                    clientDigest: e.SecuredTouchPointerConfig.instance.clientDigest,
                    windowId: e.SecuredTouchSessionStorage.instance.windowId
                },
                identified: null
            }), this.clearTouchSnapshots(n)
        }, n.prototype.isTap = function(e) {
            var t = Math.abs(e[0].x - e[1].x),
                n = Math.abs(e[0].y - e[1].y);
            return 2 == e.length && t < this.TAP_MOVEMENT_TRESHOLD && n < this.TAP_MOVEMENT_TRESHOLD
        }, n.prototype.isFling = function(e) {
            return e.length > 1 && e[e.length - 1].timestamp - e[0].timestamp < this.SCROLL_MIN_DURATION
        }, n.prototype.isScroll = function(e) {
            return e.length > 1 && e[e.length - 1].timestamp - e[0].timestamp > this.SCROLL_MIN_DURATION
        }, n.prototype.getDirection = function(e) {
            var n = this.calcAngle(e[0], e[e.length - 1]);
            return n > 90 - this.SWIPE_MAX_ANGLE && n <= 90 + this.SWIPE_MAX_ANGLE ? t.Up : n > 180 - this.SWIPE_MAX_ANGLE && n <= 180 + this.SWIPE_MAX_ANGLE ? t.Right : n > 270 - this.SWIPE_MAX_ANGLE && n <= 270 + this.SWIPE_MAX_ANGLE ? t.Down : t.Left
        }, n.prototype.calcAngle = function(e, t) {
            return 180 * Math.atan2(t.y - e.y, t.x - e.x) / Math.PI + 180
        }, n
    }();
    e.SecuredTouchGestureEvents = n
}(_securedTouchEntities || (_securedTouchEntities = {})),
function(e) {
    var t = function() {
        function e() {}
        return e.isPrivateMode = function() {
            return new Promise(function(e) {
                var t, n, i = function() {
                        return e(!0)
                    },
                    r = function() {
                        return e(!1)
                    };
                try {
                    if ((n = navigator && /(?=.*(opera|chrome)).*/i.test(navigator.userAgent) && navigator.storage && navigator.storage.estimate) && navigator.storage.estimate().then(function(e) {
                            e.quota < 12e7 ? i() : r()
                        }).catch(function(e) {
                            r()
                        }), n) return;
                    if (function() {
                            var e = "MozAppearance" in document.documentElement.style;
                            if (e)
                                if (null == indexedDB) i();
                                else {
                                    var t = indexedDB.open("inPrivate");
                                    t.onsuccess = r, t.onerror = i
                                } return e
                        }()) return;
                    if (function() {
                            var e = navigator && navigator.userAgent && navigator.userAgent.match(/Version\/([0-9\._]+).*Safari/);
                            if (e) {
                                if (parseInt(e[1], 10) < 11) return function() {
                                    try {
                                        localStorage.length ? r() : (localStorage.setItem("inPrivate", "0"), localStorage.removeItem("inPrivate"), r())
                                    } catch (e) {
                                        navigator.cookieEnabled ? i() : r()
                                    }
                                    return !0
                                }();
                                try {
                                    window.openDatabase(null, null, null, null), r()
                                } catch (e) {
                                    i()
                                }
                            }
                            return !!e
                        }()) return;
                    if ((t = !window.indexedDB && (window.PointerEvent || window.MSPointerEvent)) && i(), t) return
                } catch (e) {}
                return r()
            })
        }, e
    }();
    e.SecuredTouchIncognito = t
}(_securedTouchEntities || (_securedTouchEntities = {})),
function(e) {
    var t = function() {
        function t(n, i, r) {
            this.enabledFactor = window._remoteLogEnabledFactor ? Number(window._remoteLogEnabledFactor) : .01, this._deviceId = "", this.counter = 0, this.enabledByHostingApp = !n.hasOwnProperty("externalLogsEnabled") || Boolean(n.externalLogsEnabled), this.logUrl = (n.externalLogsUrl || t.DEFAULT_LOGS_URL).replace(/\/$/, ""), this.applicationId = n.appId, this.pointerServerUrl = n.url, this.clientVersion = r, this.stMetadata = i, null == e.SecuredTouchSessionStorage.instance.remoteLogEnabledByFactor && (e.SecuredTouchSessionStorage.instance.remoteLogEnabledByFactor = Math.random() <= this.enabledFactor)
        }
        return Object.defineProperty(t.prototype, "deviceId", {
            set: function(e) {
                this._deviceId = e || ""
            },
            enumerable: !0,
            configurable: !0
        }), t.prototype.sendRemoteLog = function(t, n, i) {
            if (this.enabledByHostingApp && e.SecuredTouchPointerConfig.instance.remoteLogsEnabled && e.SecuredTouchSessionStorage.instance.remoteLogEnabledByFactor && this.counter < e.SecuredTouchPointerConfig.instance.maxRemoteLogs) {
                var r = {
                    appId: this.applicationId,
                    instanceUUID: e.SecuredTouchSessionStorage.instance.windowId,
                    pointerServerUrl: this.pointerServerUrl,
                    clientVersion: this.clientVersion,
                    packageName: e.SecuredTouchUtil.getHostnameFromRegex(location.href),
                    deviceId: this._deviceId,
                    deviceType: this.stMetadata.deviceType,
                    osName: this.stMetadata.osName,
                    osVersion: this.stMetadata.osVersion,
                    browserName: this.stMetadata.browserName,
                    browserVersion: this.stMetadata.browserVersion,
                    location: location.href,
                    logsCount: this.counter++,
                    errorCode: t,
                    message: n,
                    errorReason: e.SecuredTouchUtil.getErrorAsString(i),
                    enabledFactor: this.enabledFactor
                };
                this.postLog(r).catch(function(t) {
                    e.STLogger.warn("Failed to send log to SecuredTouch", t)
                })
            }
        }, t.prototype.postLog = function(e) {
            var t = this;
            return new Promise(function(n, i) {
                try {
                    var r = new XMLHttpRequest;
                    r.open("POST", t.logUrl + "/log", !0), r.timeout = 1e4, r.setRequestHeader("Content-Type", "application/json"), r.setRequestHeader("Accept", "application/json"), r.onload = function() {
                        r.status >= 200 && r.status < 400 ? n() : i({
                            status: r.status,
                            statsText: r.statusText
                        })
                    }, r.ontimeout = function(e) {
                        i(e)
                    }, r.onerror = function(e) {
                        i({
                            status: r.status,
                            statsText: r.statusText
                        })
                    };
                    var o = JSON.stringify(e),
                        a = void 0;
                    try {
                        a = Boolean(_securedTouchDependencies.pako) && !window["unzip-securedtouch"]
                    } catch (e) {
                        a = !1
                    }
                    a ? (r.setRequestHeader("Content-Encoding", "gzip"), r.send(_securedTouchDependencies.pako.gzip(o))) : r.send(o)
                } catch (e) {
                    i(e)
                }
            })
        }, t.DEFAULT_LOGS_URL = "https://logs.securedtouch.com", t
    }();
    e.SecuredTouchRemoteLogger = t
}(_securedTouchEntities || (_securedTouchEntities = {})),
function(e) {
    var t = function() {
        function e() {}
        return Object.defineProperty(e, "E_1000", {
            get: function() {
                return 1e3
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e, "E_1001", {
            get: function() {
                return 1001
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e, "E_1002", {
            get: function() {
                return 1002
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e, "E_3000", {
            get: function() {
                return 3e3
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e, "E_4000", {
            get: function() {
                return 4e3
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e, "E_4001", {
            get: function() {
                return 4001
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e, "E_5000", {
            get: function() {
                return 5e3
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e, "E_5001", {
            get: function() {
                return 5001
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e, "E_6000", {
            get: function() {
                return 6e3
            },
            enumerable: !0,
            configurable: !0
        }), e
    }();
    e.SecuredTouchErrorCodes = t
}(_securedTouchEntities || (_securedTouchEntities = {})),
function(e) {
    var t = function() {
        function t(e) {
            this.sessionData = e, this.hasMicrophone = null, this.hasSpeakers = null, this.hasWebcam = null, this.isBatterySupported = null, this.batteryLevel = null, this.batteryCharging = null, this.batteryChargingTime = null, this.batteryDischargingTime = null, this.isIphoneOrIPad = !1, this.headlessTests = new Map, this.gpsSupported = null, this.fingerPrintComponentKeys = new Set(["navigatorPlatform", "webdriver", "language", "colorDepth", "deviceMemory", "pixelRatio", "hardwareConcurrency", "screenResolution", "availableScreenResolution", "timezoneOffset", "timezone", "sessionStorage", "localStorage", "indexedDb", "addBehavior", "openDatabase", "cpuClass", "platform", "doNotTrack", "canvas", "webgl", "webglVendorAndRenderer", "adBlock", "hasLiedLanguages", "hasLiedResolution", "hasLiedOs", "hasLiedBrowser", "touchSupport", "fonts", "fontsFlash", "audio"]), this.webGlStatus = -1, this.numberOfVideoDevices = 0, this.numberOfAudioDevices = 0, this.videoInputDevices = [], this.audioInputDevices = [], this.audioOutputDevices = [], this.webRtcIps = new Map, this.isDelayPassed = !1, this.isAutoDeleteCookie = !1, (navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPod/i)) && (this.isIphoneOrIPad = !0)
        }
        return Object.defineProperty(t.prototype, "WEB_GL_ID", {
            get: function() {
                return this.isIphoneOrIPad, ""
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "OPS", {
            get: function() {
                if (!this.isIphoneOrIPad) return 0;
                var e = this.sessionData.ops;
                return e || (e = this.getOps(), this.sessionData.ops = e), e
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "deviceCategory", {
            get: function() {
                return this.userAgentData && this.userAgentData.device ? this.userAgentData.device.type : ""
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "browserName", {
            get: function() {
                return this.userAgentData && this.userAgentData.browser && this.userAgentData.browser.name ? this.userAgentData.browser.name.trim() : ""
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "browserVersion", {
            get: function() {
                return this.userAgentData && this.userAgentData.browser && this.userAgentData.browser.version ? this.userAgentData.browser.version.trim() : ""
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "osName", {
            get: function() {
                return this.userAgentData && this.userAgentData.os && this.userAgentData.os.name ? this.userAgentData.os.name.trim() : ""
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "osVersion", {
            get: function() {
                return this.userAgentData && this.userAgentData.os && this.userAgentData.os.version ? this.userAgentData.os.version.trim() : ""
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "deviceModel", {
            get: function() {
                return this.userAgentData && this.userAgentData.device && this.userAgentData.device.model ? this.userAgentData.device.model.trim() : ""
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "deviceVendor", {
            get: function() {
                return this.userAgentData && this.userAgentData.device && this.userAgentData.device.vendor ? this.userAgentData.device.vendor.trim() : ""
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "engineName", {
            get: function() {
                return this.userAgentData && this.userAgentData.engine && this.userAgentData.engine.name ? this.userAgentData.engine.name.trim() : ""
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "engineVersion", {
            get: function() {
                return this.userAgentData && this.userAgentData.engine && this.userAgentData.engine.version ? this.userAgentData.engine.version.trim() : ""
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "cpuArchitecture", {
            get: function() {
                return this.userAgentData && this.userAgentData.cpu && this.userAgentData.cpu.architecture ? this.userAgentData.cpu.architecture.trim() : ""
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "desktopType", {
            get: function() {
                var e = this.browserName;
                this.browserVersion && (e = e + "(" + this.browserVersion + ")");
                var t = this.osName;
                this.osVersion && (t = t + "(" + this.osVersion + ")");
                var n = e && t ? e + "-" + t : e || t;
                return n ? n.trim() : ""
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "mobileType", {
            get: function() {
                var e = this.deviceModel,
                    t = this.deviceVendor,
                    n = e && t ? e + " " + t : e || t;
                return n ? n.trim() : ""
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "deviceType", {
            get: function() {
                return this._deviceType || (e.SecuredTouchUtil.isMobile ? this._deviceType = this.mobileType || this.desktopType || t.UNKNOWN_DEVICE_TYPE : this._deviceType = this.desktopType || this.mobileType || t.UNKNOWN_DEVICE_TYPE), this._deviceType
            },
            enumerable: !0,
            configurable: !0
        }), t.prototype.initUAParser = function() {
            try {
                var t = new _securedTouchDependencies.UAParser;
                t.setUA(navigator.userAgent), this.userAgentData = t.getResult()
            } catch (t) {
                e.STLogger.warn("UAParser failure", t)
            }
        }, t.prototype.bluetoothInit = function() {
            var t = this;
            return new Promise(function(n, i) {
                navigator.bluetooth ? (t.bluetoothSupported = !0, n()) : (e.STLogger.debug("Bluetooth not supported!"), n())
            })
        }, t.prototype.batteryInit = function() {
            var t = this,
                n = this;
            return new Promise(function(i, r) {
                navigator.getBattery ? (t.isBatterySupported = !0, navigator.getBattery().then(function(e) {
                    e && (n.batteryLevel = e.level, n.batteryCharging = e.charging, n.batteryChargingTime = e.chargingTime, n.batteryDischargingTime = e.dischargingTime), i()
                }).catch(function(t) {
                    e.STLogger.warn("Battery " + t), i()
                })) : (e.STLogger.debug("Battery not supported!"), i())
            })
        }, t.prototype.enumerateDevicesEnabled = function() {
            var t = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
            return !e.SecuredTouchUtil.inIframe() || !t
        }, t.prototype.audioIntVideoInit = function() {
            var t = this,
                n = this;
            return new Promise(function(i, r) {
                return t.enumerateDevicesEnabled() ? navigator.mediaDevices && navigator.mediaDevices.enumerateDevices ? void navigator.mediaDevices.enumerateDevices().then(function(e) {
                    e.forEach(function(e) {
                        e.kind && ("audioinput" == e.kind.toLowerCase() ? (n.hasMicrophone = !0, n.numberOfAudioDevices++, e.label && n.audioInputDevices.push(e.label)) : "videoinput" == e.kind.toLowerCase() ? (n.hasWebcam = !0, n.numberOfVideoDevices++, e.label && n.videoInputDevices.push(e.label)) : "audiooutput" == e.kind.toLowerCase() && (n.hasSpeakers = !0, n.numberOfAudioDevices++, e.label && n.audioOutputDevices.push(e.label)))
                    }), i()
                }).catch(function(t) {
                    e.STLogger.warn("enumerateDevices failed", t), i()
                }) : (e.STLogger.debug("enumerateDevices() not supported."), void i()) : (e.STLogger.debug("enumerateDevices() cannot run within safari iframe"), void i())
            })
        }, t.prototype.getRTCPeerConnection = function() {
            var e = window.RTCPeerConnection || window.mozRTCPeerConnection || window.webkitRTCPeerConnection;
            if (!e) {
                var t = window["iframe.contentWindow"];
                t && (e = t.RTCPeerConnection || t.mozRTCPeerConnection || t.webkitRTCPeerConnection)
            }
            return e
        }, t.prototype.collectWebRtc = function() {
            var t = this;
            try {
                var n = {},
                    i = this.getRTCPeerConnection(),
                    r = new i({
                        iceServers: [{
                            urls: e.SecuredTouchPointerConfig.instance.webRtcUrl.trim()
                        }]
                    }, {
                        optional: [{
                            RtpDataChannels: !0
                        }]
                    });
                r.onicecandidate = function(e) {
                    if (e.candidate) {
                        var i = /([0-9]{1,3}(\.[0-9]{1,3}){3}|[a-f0-9]{1,4}(:[a-f0-9]{1,4}){7})/.exec(e.candidate.candidate)[1];
                        void 0 === n[i] && (e.candidate.candidate.indexOf("host") > 0 ? t.webRtcIps.set("WEB_RTC_HOST_IP", i) : e.candidate.candidate.indexOf("srflx") > 0 && t.webRtcIps.set("WEB_RTC_SRFLX_IP", i)), n[i] = !0
                    }
                }, r.createDataChannel(""), r.createOffer(function(e) {
                    r.setLocalDescription(e, function() {}, function() {})
                }, function() {})
            } catch (e) {}
        }, t.prototype.getDeviceMetadata = function(t) {
            return __awaiter(this, void 0, void 0, function() {
                var n, i, r, o, a, s, c;
                return __generator(this, function(u) {
                    switch (u.label) {
                        case 0:
                            return e.SecuredTouchMetrics.instance.metadata.onCalcStarted(), this.gpsSupported = null != navigator.geolocation, i = new Set(e.SecuredTouchPointerConfig.instance.propertyBlackList || []), r = [this.getFingerPrint(i).catch(function(n) {
                                e.STLogger.warn("failed to get fingerprint info", n), t && t.sendRemoteLog(e.SecuredTouchErrorCodes.E_4001, "getFingerPrint failed", n)
                            }), this.getPrivateMode().catch(function(t) {
                                return e.STLogger.warn("failed to get incognito info", t)
                            }), e.SecuredTouchIncognito.isPrivateMode().catch(function(t) {
                                return e.STLogger.warn("failed to get private mode info", t)
                            }), this.getPermissionsMetadata().catch(function(t) {
                                return e.STLogger.warn("failed to get permissions info", t)
                            }), new e.SecuredTouchDetectHeadless(i).getHeadlessResults().catch(function(t) {
                                return e.STLogger.warn("failed to get headless results", t)
                            }), this.bluetoothInit().catch(function(t) {
                                return e.STLogger.warn("failed to get bluetooth info", t)
                            }), this.audioIntVideoInit().catch(function(t) {
                                return e.STLogger.warn("failed to get audio-video info", t)
                            }), this.batteryInit().catch(function(t) {
                                return e.STLogger.warn("failed to get battery info", t)
                            })], [4, Promise.all(r)];
                        case 1:
                            return n = u.sent(), this.fingerPrint = n[0], this.isPrivateMode = n[1], this.isPrivateModeV2 = n[2], this.permissions = n[3], this.headlessTests = n[4], o = {
                                ops: this.OPS,
                                webGl: this.WEB_GL_ID,
                                devicePixelRatio: window.devicePixelRatio,
                                screenWidth: window.screen.width,
                                screenHeight: window.screen.height
                            }, e.SecuredTouchUtil.extendPrimitiveValues(o, screen, !1), a = (new Date).getTime(), c = {
                                deviceType: this.deviceType,
                                deviceId: this.sessionData.getDeviceCredentials().deviceId,
                                osVersion: (this.osName + " " + this.osVersion).trim() || "",
                                display: o,
                                sensorsMetadata: this.getSensorsMetadata()
                            }, [4, this.getIdentificationMetadata(i)];
                        case 2:
                            return c.identificationMetadata = u.sent(), c.ioMetadata = this.getIoMetadata(), c.baseTimestamp = a, c.epochTimeInMillis = a, s = c, e.SecuredTouchMetrics.instance.metadata.onCalcEnded(), [2, s]
                    }
                })
            })
        }, t.prototype.getFingerPrint = function(t) {
            return __awaiter(this, void 0, void 0, function() {
                var n, i, r, o = this;
                return __generator(this, function(a) {
                    switch (a.label) {
                        case 0:
                            return t.has("fingerprint") ? [2, Promise.resolve("")] : (n = this, i = new Promise(function(t, i) {
                                try {
                                    var r = {
                                        excludes: {
                                            enumerateDevices: !o.enumerateDevicesEnabled(),
                                            pixelRatio: !0,
                                            openDatabase: !0,
                                            addBehavior: !0
                                        }
                                    };
                                    try {
                                        for (var a = e.SecuredTouchPointerConfig.instance.fingerPrintBlacklist || [], s = 0, c = a; s < c.length; s++) {
                                            var u = c[s];
                                            r.excludes[u] = !0
                                        }
                                    } catch (t) {
                                        e.STLogger.warn("Failed to apply fingerPrint blacklist", t)
                                    }
                                    _securedTouchDependencies.Fingerprint2.get(r, function(r) {
                                        try {
                                            var a = r.map(function(e) {
                                                    return e.value
                                                }),
                                                s = _securedTouchDependencies.Fingerprint2.x64hash128(a.join(""), 31);
                                            n.fingerPrintComponents = r, o.fingerPrint = s, t(s)
                                        } catch (t) {
                                            e.STLogger.warn("Fingerprint callback failure " + t), i("Fingerprint callback failure " + t)
                                        }
                                    })
                                } catch (t) {
                                    e.STLogger.warn("Failed to get FingerPrint " + t), i("Failed to get FingerPrint " + t)
                                }
                            }), r = new Promise(function(t, n) {
                                return __awaiter(o, void 0, void 0, function() {
                                    return __generator(this, function(t) {
                                        switch (t.label) {
                                            case 0:
                                                return [4, e.SecuredTouchUtil.delay(3e3)];
                                            case 1:
                                                return t.sent(), n("Fingerprint timeout"), [2]
                                        }
                                    })
                                })
                            }), [4, Promise.race([i, r])]);
                        case 1:
                            return [2, a.sent()]
                    }
                })
            })
        }, t.prototype.getSensorsMetadata = function() {
            var e = {};
            return this.flatAndAddMetadata(e, "DEDVCE_LIGHT_SUPPORTED", function() {
                return "ondevicelight" in window
            }), this.flatAndAddMetadata(e, "IS_TOUCH_DEVICE", function() {
                return "ontouchstart" in window
            }), window.DeviceMotionEvent || this.flatAndAddMetadata(e, "ACCELEROMETER_SUPPORTED", function() {
                return !1
            }), window.DeviceOrientationEvent || this.flatAndAddMetadata(e, "GYROSCOPE_SUPPORTED", function() {
                return !1
            }), this.flatAndAddMetadata(e, "PROXIMITY_SUPPORTED", function() {
                return "ondeviceproximity" in window
            }), e
        }, t.prototype.getIdentificationMetadata = function(t) {
            return __awaiter(this, void 0, void 0, function() {
                var n, i, r, o, a, s, c, u, d, h, l, p, f = this;
                return __generator(this, function(g) {
                    switch (g.label) {
                        case 0:
                            return n = this, i = {}, this.flatAndAddMetadata(i, "FINGER_PRINT", function() {
                                return f.fingerPrint
                            }), this.userAgentData && (this.flatAndAddMetadata(i, "OS_NAME", function() {
                                return f.osName
                            }), this.flatAndAddMetadata(i, "OS_VERSION", function() {
                                return f.osVersion
                            })), this.userAgentData && (this.flatAndAddMetadata(i, "DEVICE_MODEL", function() {
                                return f.deviceModel
                            }), this.flatAndAddMetadata(i, "DEVICE_VENDOR", function() {
                                return f.deviceVendor
                            })), this.userAgentData && (this.flatAndAddMetadata(i, "BROWSER_ENGINE_NAME", function() {
                                return f.engineName
                            }), this.flatAndAddMetadata(i, "BROWSER_ENGINE_VERSION", function() {
                                return f.engineVersion
                            })), this.userAgentData && this.flatAndAddMetadata(i, "CPU_ARCHITECTURE", function() {
                                return f.cpuArchitecture
                            }), this.flatAndAddMetadata(i, "NAVIGATOR_VENDOR", function() {
                                return navigator.vendor
                            }), this.flatAndAddMetadata(i, "NAVIGATOR_PLUGINS_LENGTH", function() {
                                return navigator.plugins ? navigator.plugins.length : null
                            }), this.flatAndAddMetadata(i, "NAVIGATOR_MIME_TYPES_LENGTH", function() {
                                return navigator.mimeTypes ? navigator.mimeTypes.length : null
                            }), this.flatAndAddMetadata(i, "NAVIGATOR_LANGUAGE", function() {
                                return navigator.language
                            }), this.flatAndAddMetadata(i, "NAVIGATOR_LANGUAGES", function() {
                                return navigator.languages
                            }), this.flatAndAddMetadata(i, "NAVIGATOR_MAX_TOUCH_POINTS", function() {
                                return navigator.maxTouchPoints || navigator.msMaxTouchPoints
                            }), this.flatAndAddMetadata(i, "NAVIGATOR_POINTER_ENABLED", function() {
                                return navigator.pointerEnabled || navigator.msPointerEnabled
                            }), this.flatAndAddMetadata(i, "NAVIGATOR_WEB_DRIVER", function() {
                                return navigator.webdriver
                            }), this.flatAndAddMetadata(i, "NAVIGATOR_HARDWARE_CONCURRENCY", function() {
                                return navigator.hardwareConcurrency
                            }), this.flatAndAddMetadata(i, "NAVIGATOR_VIBRATE", function() {
                                return null != navigator.vibrate
                            }), this.flatAndAddMetadata(i, "PUSH_NOTIFICATIONS_SUPPORTED", function() {
                                return "Notification" in window
                            }), this.flatAndAddMetadata(i, "NAVIGATOR_APP_CODE_NAME", function() {
                                return navigator.appCodeName
                            }), this.flatAndAddMetadata(i, "NAVIGATOR_APP_NAME", function() {
                                return navigator.appName
                            }), this.flatAndAddMetadata(i, "NAVIGATOR_APP_VERSION", function() {
                                return navigator.appVersion
                            }), this.flatAndAddMetadata(i, "NAVIGATOR_ON_LINE", function() {
                                return navigator.onLine
                            }), this.flatAndAddMetadata(i, "NAVIGATOR_PLATFORM", function() {
                                return navigator.platform
                            }), this.flatAndAddMetadata(i, "NAVIGATOR_PRODUCT", function() {
                                return navigator.product
                            }), this.flatAndAddMetadata(i, "NAVIGATOR_USER_AGENT", function() {
                                return navigator.userAgent
                            }), this.flatAndAddMetadata(i, "NAVIGATOR_DEVICE_MEMORY", function() {
                                return navigator.deviceMemory
                            }), t.has("modernizr") ? [3, 2] : [4, this.safeAddModernizrFeatures(i)];
                        case 1:
                            g.sent(), g.label = 2;
                        case 2:
                            for (c in window._ST_PING ? this.flatAndAddMetadata(i, "JS_CHALLENGE", function() {
                                    return window._ST_PING
                                }) : this.flatAndAddMetadata(i, "JS_CHALLENGE", function() {
                                    return "unknown"
                                }), this.fingerPrintComponents && this.fingerPrintComponents.forEach(function(e, t) {
                                    "fonts" == e.key ? f.flatAndAddMetadata(i, "JS_FONTS", function() {
                                        return e.value.length
                                    }) : "webgl" == e.key ? f.flatAndAddMetadata(i, "IS_WEBGL", function() {
                                        return null != e.value
                                    }) : "canvas" == e.key ? f.flatAndAddMetadata(i, "IS_CANVAS", function() {
                                        return null != e.value
                                    }) : "screenResolution" == e.key && e.value && e.value.length ? f.flatAndAddMetadata(i, "RESOLUTION", function() {
                                        return e.value.join(",")
                                    }) : "availableScreenResolution" == e.key && e.value && e.value.length ? f.flatAndAddMetadata(i, "AVAILABLE_RESOLUTION", function() {
                                        return e.value.join(",")
                                    }) : "touchSupport" == e.key && e.value && e.value.length ? f.flatAndAddMetadata(i, "TOUCH_SUPPORT", function() {
                                        return e.value.join(",")
                                    }) : "audio" == e.key && e.value && e.value.length ? f.flatAndAddMetadata(i, "AUDIO_FINGERPRINT", function() {
                                        return e.value
                                    }) : "indexedDb" == e.key && e.value && e.value.length ? f.flatAndAddMetadata(i, "INDEXEDDB_FINGERPRINT", function() {
                                        return e.value
                                    }) : n.fingerPrintComponentKeys.has(e.key) && null != e.key && f.flatAndAddMetadata(i, e.key.toUpperCase(), function() {
                                        return e.value
                                    })
                                }), this.flatAndAddMetadata(i, "IS_INCOGNITO", function() {
                                    return f.isPrivateMode
                                }), this.flatAndAddMetadata(i, "IS_PRIVATE_MODE", function() {
                                    return f.isPrivateModeV2
                                }), this.flatAndAddMetadata(i, "IS_WEB_GLSTATUS", function() {
                                    return f.webGlStatus
                                }), r = {
                                    selenium: navigator.webdriver || e.SecuredTouchUtil.getAttribute(window.document.documentElement, "webdriver") || "",
                                    phantomjs: {
                                        _phantom: window._phantom || "",
                                        __phantomas: window.__phantomas || "",
                                        callPhantom: window.callPhantom || ""
                                    },
                                    nodejs: {
                                        Buffer: window.Buffer || ""
                                    },
                                    couchjs: {
                                        emit: window.emit || ""
                                    },
                                    rhino: {
                                        spawn: window.spawn || ""
                                    },
                                    chromium: {
                                        domAutomationController: window.domAutomationController || "",
                                        domAutomation: window.domAutomation || ""
                                    },
                                    outerWidth: window.outerWidth,
                                    outerHeight: window.outerHeight
                                }, this.flatAndAddMetadata(i, "HEADLESS", function() {
                                    return r
                                }), this.flatAndAddMetadata(i, "HEADLESS", function() {
                                    return f.headlessTests
                                }), this.flatAndAddMetadata(i, "REF_LINK", function() {
                                    return document.referrer
                                }), this.flatAndAddMetadata(i, "PLUGINS", function() {
                                    for (var e = {
                                            length: navigator.plugins.length,
                                            details: []
                                        }, t = 0; t < e.length; t++) e.details.push({
                                        length: navigator.plugins[t].length,
                                        name: navigator.plugins[t].name,
                                        version: navigator.plugins[t].version,
                                        filename: navigator.plugins[t].filename
                                    });
                                    return e
                                }), this.flatAndAddMetadata(i, "AUDIO", function() {
                                    return f.numberOfAudioDevices
                                }), this.flatAndAddMetadata(i, "VIDEO", function() {
                                    return f.numberOfVideoDevices
                                }), this.flatAndAddMetadata(i, "VIDEO_INPUT_DEVICES", function() {
                                    return f.videoInputDevices.toString()
                                }), this.flatAndAddMetadata(i, "AUDIO_INPUT_DEVICES", function() {
                                    return f.audioInputDevices.toString()
                                }), this.flatAndAddMetadata(i, "AUDIO_OUTPUT_DEVICES", function() {
                                    return f.audioOutputDevices.toString()
                                }), this.flatAndAddMetadata(i, "MEDIA_CODEC_MP4_AVC1", function() {
                                    return f.getMediaCodec('video/mp4;; codecs = "avc1.42E01E"')
                                }), this.flatAndAddMetadata(i, "MEDIA_CODEC_X_M4A", function() {
                                    return f.getMediaCodec("audio/x-m4a")
                                }), this.flatAndAddMetadata(i, "MEDIA_CODEC_AAC", function() {
                                    return f.getMediaCodec("audio/aac")
                                }), o = e.SecuredTouchPointerConfig.instance.additionalMediaCodecs, a = function(e) {
                                    if (!o.hasOwnProperty(e)) return "continue";
                                    s.flatAndAddMetadata(i, "MEDIA_CODEC_" + e, function() {
                                        return f.getMediaCodec(o[e])
                                    })
                                }, s = this, o) a(c);
                            for (l in window.performance && window.performance.memory && (this.flatAndAddMetadata(i, "MEMORY_HEAP_SIZE_LIMIT", function() {
                                    return window.performance.memory.jsHeapSizeLimit
                                }), this.flatAndAddMetadata(i, "MEMORY_TOTAL_HEAP_SIZE", function() {
                                    return window.performance.memory.totalJSHeapSize
                                }), this.flatAndAddMetadata(i, "MEMORY_USED_HEAP_SIZE", function() {
                                    return window.performance.memory.usedJSHeapSize
                                })), this.flatAndAddMetadata(i, "IS_ACCEPT_COOKIES", function() {
                                    return navigator.cookieEnabled
                                }), !t.has("cookieChallenge") && navigator.cookieEnabled && (u = 30, d = "ST-TEST", e.SecuredTouchUtil.setCookie(d, "TEST", u + 10), e.SecuredTouchUtil.delay(1e3 * u).then(function() {
                                    f.isDelayPassed = !0, f.isAutoDeleteCookie = !e.SecuredTouchUtil.getCookie(d), e.SecuredTouchUtil.deleteCookie(d)
                                })), this.flatAndAddMetadata(i, "selenium_in_document", function() {
                                    return f.seleniumInDocument()
                                }), this.flatAndAddMetadata(i, "selenium_in_window", function() {
                                    return f.seleniumInWindow()
                                }), this.flatAndAddMetadata(i, "selenium_sequentum", function() {
                                    return f.seleniumSequentum()
                                }), this.flatAndAddMetadata(i, "DOCUMENT_ELEMENT_SELENIUM", function() {
                                    return e.SecuredTouchUtil.getAttribute(window.document.documentElement, "selenium")
                                }), this.flatAndAddMetadata(i, "DOCUMENT_ELEMENT_WEBDRIVER", function() {
                                    return e.SecuredTouchUtil.getAttribute(window.document.documentElement, "webdriver")
                                }), this.flatAndAddMetadata(i, "DOCUMENT_ELEMENT_DRIVER", function() {
                                    return e.SecuredTouchUtil.getAttribute(window.document.documentElement, "driver")
                                }), this.flatAndAddMetadata(i, "WEB_RTC_ENABLED", function() {
                                    return !!f.getRTCPeerConnection()
                                }), e.SecuredTouchPointerConfig.instance.webRtcUrl && e.SecuredTouchPointerConfig.instance.webRtcUrl.length > 0 && (this.collectWebRtc(), this.webRtcIps.forEach(function(e, t) {
                                    null != t && null != e && f.flatAndAddMetadata(i, t, function() {
                                        return e
                                    })
                                }), this.webRtcIps.clear()), window.matchMedia && this.flatAndAddMetadata(i, "MQ_SCREEN", function() {
                                    var e = window.matchMedia("(min-width: " + (window.innerWidth - 1) + "px)");
                                    return {
                                        matches: e.matches,
                                        media: e.media
                                    }
                                }), this.flatAndAddMetadata(i, "IFRAME_CHROME", function() {
                                    var t = e.SecuredTouchUtil.createInvisibleElement("iframe");
                                    if (!t) return null;
                                    t.srcdoc = "blank page", document.body.appendChild(t);
                                    var n = typeof t.contentWindow.chrome;
                                    return t.remove(), n
                                }), window.Notification && this.flatAndAddMetadata(i, "NOTIFICATION_PERMISSION", function() {
                                    return window.Notification.permission
                                }), this.flatAndAddMetadata(i, "HAS_CHROME_APP", function() {
                                    return window.chrome && "app" in window.chrome
                                }), this.flatAndAddMetadata(i, "HAS_CHROME_CSI", function() {
                                    return window.chrome && "csi" in window.chrome
                                }), this.flatAndAddMetadata(i, "HAS_CHROME_LOADTIMES", function() {
                                    return window.chrome && "loadTimes" in window.chrome
                                }), this.flatAndAddMetadata(i, "HAS_CHROME_RUNTIME", function() {
                                    return window.chrome && "runtime" in window.chrome
                                }), h = e.SecuredTouchPointerConfig.instance.propertyDescriptorsConfig) h.hasOwnProperty(l) && (p = "window" === l ? window : window[l]) && this.addPropertyDescriptorInfo(p, l.toUpperCase() + "_PROPERTY_DESCRIPTOR", h[l], i);
                            return [2, i]
                    }
                })
            })
        }, t.prototype.addPropertyDescriptorInfo = function(t, n, i, r) {
            try {
                for (var o = function(e) {
                        a.flatAndAddMetadata(r, n + "_" + e.toUpperCase(), function() {
                            var n = Object.getOwnPropertyDescriptor(t, e);
                            return n ? JSON.stringify({
                                configurable: n.configurable,
                                enumerable: n.enumerable,
                                value: n.value,
                                writable: n.writable
                            }) : "undefined"
                        })
                    }, a = this, s = 0, c = i; s < c.length; s++) {
                    o(c[s])
                }
            } catch (t) {
                e.STLogger.warn("failed to add properties descriptor", t)
            }
        }, t.prototype.getPermissionsMetadata = function() {
            return __awaiter(this, void 0, void 0, function() {
                var t, n, i, r, o, a;
                return __generator(this, function(s) {
                    switch (s.label) {
                        case 0:
                            if (t = {}, n = ["accelerometer", "accessibility-events", "ambient-light-sensor", "background-sync", "camera", "clipboard-read", "clipboard-write", "geolocation", "gyroscope", "magnetometer", "microphone", "midi", "notifications", "payment-handler", "persistent-storage", "push"], i = [], navigator.permissions)
                                for (o in r = function(e) {
                                        var r = n[e];
                                        i.push(navigator.permissions.query({
                                            name: r
                                        }).then(function(e) {
                                            t[r] = e.state
                                        }).catch(function(e) {}))
                                    }, n) r(o);
                            s.label = 1;
                        case 1:
                            return s.trys.push([1, 3, , 4]), [4, Promise.all(i)];
                        case 2:
                            return s.sent(), [3, 4];
                        case 3:
                            return a = s.sent(), e.STLogger.warn(a), [3, 4];
                        case 4:
                            return [2, t]
                    }
                })
            })
        }, t.prototype.getMediaCodec = function(e) {
            var t = document.createElement("video");
            if (t && t.canPlayType) return t.canPlayType(e)
        }, t.prototype.safeAddModernizrFeatures = function(e) {
            return __awaiter(this, void 0, void 0, function() {
                var t, n, i, r, o, a;
                return __generator(this, function(s) {
                    switch (s.label) {
                        case 0:
                            return _securedTouchDependencies.evaluateModernizr(), t = this, n = _securedTouchDependencies.Modernizr, i = n.prefixed, r = n.hasEvent, this.flatAndAddMetadata(e, "ambient_light", function() {
                                return n.ambientlight
                            }), this.flatAndAddMetadata(e, "application_cache", function() {
                                return n.applicationcache
                            }), this.flatAndAddMetadata(e, "audio", function() {
                                return !!n.audio
                            }), n.audio && this.flatAndAddMetadata(e, "audio", function() {
                                return n.audio
                            }), this.flatAndAddMetadata(e, "battery_api", function() {
                                return !!i("battery", navigator) || !!i("getBattery", navigator)
                            }), this.flatAndAddMetadata(e, "blob_constructor", function() {
                                return n.blobconstructor
                            }), this.flatAndAddMetadata(e, "context_menu", function() {
                                return n.contextmenu
                            }), this.flatAndAddMetadata(e, "cors", function() {
                                return n.cors
                            }), this.flatAndAddMetadata(e, "cryptography", function() {
                                return n.cryptography
                            }), this.flatAndAddMetadata(e, "custom_elements", function() {
                                return n.customelements
                            }), this.flatAndAddMetadata(e, "custom_protocol_handler", function() {
                                return n.customprotocolhandler
                            }), this.flatAndAddMetadata(e, "custom_event", function() {
                                return n.customevent
                            }), this.flatAndAddMetadata(e, "dart", function() {
                                return n.dart
                            }), this.flatAndAddMetadata(e, "data_view", function() {
                                return n.dataview
                            }), this.flatAndAddMetadata(e, "event_listener", function() {
                                return n.eventlistener
                            }), [4, this.safeModernizrOn("exiforientation")];
                        case 1:
                            return o = s.sent(), t.flatAndAddMetadata(e, "exif_orientation", function() {
                                return o
                            }), this.flatAndAddMetadata(e, "force_touch", function() {
                                return n.forcetouch
                            }), n.forcetouch && (this.flatAndAddMetadata(e, "force_touch.mouse_force_will_begin", function() {
                                return r(i("mouseforcewillbegin", window, !1), window)
                            }), this.flatAndAddMetadata(e, "force_touch.webkit_force_at_mouse_down", function() {
                                return MouseEvent.WEBKIT_FORCE_AT_MOUSE_DOWN
                            }), this.flatAndAddMetadata(e, "force_touch.webkit_force_at_force_mouse_down", function() {
                                return MouseEvent.WEBKIT_FORCE_AT_FORCE_MOUSE_DOWN
                            })), this.flatAndAddMetadata(e, "full_screen", function() {
                                return n.fullscreen
                            }), this.flatAndAddMetadata(e, "game_pads", function() {
                                return n.gamepads
                            }), this.flatAndAddMetadata(e, "geo_location", function() {
                                return n.geolocation
                            }), this.flatAndAddMetadata(e, "ie8compat", function() {
                                return n.ie8compat
                            }), [4, this.safeModernizrOn("indexeddb")];
                        case 2:
                            return a = s.sent(), t.flatAndAddMetadata(e, "indexed_db", function() {
                                return a
                            }), this.flatAndAddMetadata(e, "indexed_db_blob", function() {
                                return n.indexeddbblob
                            }), this.flatAndAddMetadata(e, "internationalization", function() {
                                return n.intl
                            }), this.flatAndAddMetadata(e, "json", function() {
                                return n.json
                            }), this.flatAndAddMetadata(e, "ligatures", function() {
                                return n.ligatures
                            }), this.flatAndAddMetadata(e, "media_source", function() {
                                return "MediaSource" in window
                            }), this.flatAndAddMetadata(e, "message_channel", function() {
                                return n.messagechannel
                            }), this.flatAndAddMetadata(e, "notification", function() {
                                return n.notification
                            }), this.flatAndAddMetadata(e, "page_visibility", function() {
                                return n.pagevisibility
                            }), this.flatAndAddMetadata(e, "performance", function() {
                                return n.performance
                            }), this.flatAndAddMetadata(e, "pointer_events", function() {
                                return n.pointerevents
                            }), this.flatAndAddMetadata(e, "pointer_lock", function() {
                                return n.pointerlock
                            }), this.flatAndAddMetadata(e, "proximity", function() {
                                return n.proximity
                            }), this.flatAndAddMetadata(e, "query_selector", function() {
                                return n.queryselector
                            }), this.flatAndAddMetadata(e, "quota_management", function() {
                                return n.quotamanagement
                            }), this.flatAndAddMetadata(e, "request_animation_frame", function() {
                                return n.requestanimationframe
                            }), this.flatAndAddMetadata(e, "service_worker", function() {
                                return n.serviceworker
                            }), this.flatAndAddMetadata(e, "touch_events", function() {
                                return n.touchevents
                            }), this.flatAndAddMetadata(e, "typed_arrays", function() {
                                return n.typedarrays
                            }), this.flatAndAddMetadata(e, "vibrate", function() {
                                return n.vibrate
                            }), this.flatAndAddMetadata(e, "video", function() {
                                return !!n.video
                            }), n.video && this.flatAndAddMetadata(e, "video", function() {
                                return n.video
                            }), this.flatAndAddMetadata(e, "web_gl", function() {
                                return n.webgl
                            }), this.flatAndAddMetadata(e, "web_sockets", function() {
                                return n.websockets
                            }), this.flatAndAddMetadata(e, "x_domain_request", function() {
                                return n.xdomainrequest
                            }), this.flatAndAddMetadata(e, "matchmedia", function() {
                                return n.matchmedia
                            }), [2]
                    }
                })
            })
        }, t.prototype.getIoMetadata = function() {
            var t = this,
                n = {},
                i = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
            return this.flatAndAddMetadata(n, "NETWORK_TYPE", function() {
                return i ? i.type : null
            }), this.flatAndAddMetadata(n, "NETWORK_DOWNLOAD_MAX", function() {
                return i ? i.downlinkMax : null
            }), this.flatAndAddMetadata(n, "BLUTOOTH_SUPPORTED", function() {
                return t.bluetoothSupported
            }), this.flatAndAddMetadata(n, "BLUTOOTH_DEVICE_NAME", function() {
                return t.bluetoothDeviceName
            }), this.flatAndAddMetadata(n, "BLUTOOTH_DEVICE_ID", function() {
                return t.bluetoothDeviceId
            }), this.flatAndAddMetadata(n, "BLUTOOTH_IS_CONNECTED", function() {
                return t.bluetoothIsConnected
            }), this.flatAndAddMetadata(n, "HAS_SPEAKERS", function() {
                return t.hasSpeakers
            }), this.flatAndAddMetadata(n, "HAS_MICROPHONE", function() {
                return t.hasMicrophone
            }), this.flatAndAddMetadata(n, "HAS_CAMERA", function() {
                return t.hasWebcam
            }), this.flatAndAddMetadata(n, "BATTERY_SUPPORTED", function() {
                return t.isBatterySupported
            }), this.flatAndAddMetadata(n, "BATTERY_LEVEL", function() {
                return t.batteryLevel
            }), this.flatAndAddMetadata(n, "BATTERY_CHARGING", function() {
                return t.batteryCharging
            }), this.flatAndAddMetadata(n, "BATTERY_CHARGING_TIME", function() {
                return t.batteryChargingTime
            }), this.flatAndAddMetadata(n, "BATTERY_DISCHARGING_TIME", function() {
                return t.batteryDischargingTime
            }), this.flatAndAddMetadata(n, "GPS_SUPPORTED", function() {
                return t.gpsSupported
            }), this.flatAndAddMetadata(n, "IS_MOBILE", function() {
                return e.SecuredTouchUtil.isMobile
            }), this.flatAndAddMetadata(n, "HAS_TOUCH", function() {
                return "ontouchstart" in document.documentElement
            }), this.flatAndAddMetadata(n, "PERMISSIONS", function() {
                return t.permissions
            }), n
        }, t.prototype.safeAddMetadata = function(t, n, i) {
            try {
                var r = new Set(e.SecuredTouchPointerConfig.instance.propertyBlackList || []);
                null == n || null == i || r.has(n) || (t[n] = i)
            } catch (t) {
                e.STLogger.warn("Failed to add " + n + " -> " + i + ", " + t)
            }
        }, t.prototype.safeModernizrOn = function(t) {
            return __awaiter(this, void 0, void 0, function() {
                var n, i;
                return __generator(this, function(r) {
                    switch (r.label) {
                        case 0:
                            return n = new Promise(function(n) {
                                try {
                                    _securedTouchDependencies.Modernizr.on(t, function(e) {
                                        n(e)
                                    })
                                } catch (i) {
                                    n(null), e.STLogger.warn("Modernizr.on Failed with feature " + t, i)
                                }
                            }), i = e.SecuredTouchUtil.delay(1e3).then(function() {
                                return null
                            }), [4, Promise.race([n, i])];
                        case 1:
                            return [2, r.sent()]
                    }
                })
            })
        }, t.prototype.flatAndAddMetadata = function(t, n, i) {
            try {
                var r = new Set(e.SecuredTouchPointerConfig.instance.propertyBlackList || []);
                if (!n || r.has(n)) return;
                var o = i();
                if ("object" == typeof o && null !== o) {
                    var a = e.SecuredTouchUtil.flatten(o);
                    for (var s in a) this.safeAddMetadata(t, n + "." + s, a[s])
                } else this.safeAddMetadata(t, n, o)
            } catch (t) {
                e.STLogger.warn("Failed to add " + n, t)
            }
        }, t.prototype.getOps = function() {
            var t, n = new Date,
                i = 0;
            do {
                i++, t = (new Date).getTime() - n.getTime(), Math.sqrt(i * Math.random())
            } while (t < 500);
            var r = i / t;
            return e.STLogger.debug("Ops : " + r), r
        }, t.prototype.getWebGl = function() {
            var t = "",
                n = "";
            try {
                var i = document.createElement("canvas"),
                    r = i.getContext("webgl") ? i.getContext("webgl") : i.getContext("experimental-webgl") ? i.getContext("experimental-webgl") : i.getContext("moz-webgl") ? i.getContext("moz-webgl") : i.getContext("webkit-3d");
                if (r) {
                    var o = r.getExtension("WEBGL_debug_renderer_info");
                    t = r.getParameter(r.VERSION).toLowerCase(), o && (e.STLogger.debug("WegGl debugInfo: " + o), n = r.getParameter(o.UNMASKED_RENDERER_WEBGL).toLowerCase()), this.webGlStatus = 1
                } else e.STLogger.warn("WegGl failure, context is null"), this.webGlStatus = 0
            } catch (t) {
                e.STLogger.warn("WegGl discovery failure" + t)
            }
            return e.STLogger.debug("WegGl : " + n || t), n || t
        }, t.prototype.getPrivateMode = function() {
            return __awaiter(this, void 0, void 0, function() {
                var e;
                return __generator(this, function(t) {
                    return e = this, [2, new Promise(function(t, n) {
                        e.detectPrivateMode(function(e) {
                            t(e)
                        })
                    })]
                })
            })
        }, t.prototype.detectPrivateMode = function(e) {
            var t, n = e.bind(null, !0),
                i = e.bind(null, !1);
            window.webkitRequestFileSystem ? window.webkitRequestFileSystem(0, 0, i, n) : "MozAppearance" in document.documentElement.style ? ((t = indexedDB.open("test")).onerror = n, t.onsuccess = i) : /constructor/i.test(window.HTMLElement) || window.safari ? function() {
                try {
                    localStorage.length ? i() : (localStorage.x = 1, localStorage.removeItem("x"), i())
                } catch (e) {
                    navigator.cookieEnabled ? n() : i()
                }
            }() : window.indexedDB || !window.PointerEvent && !window.MSPointerEvent ? i() : n()
        }, t.prototype.seleniumInDocument = function() {
            for (var e = 0, t = ["__webdriver_evaluate", "__selenium_evaluate", "__webdriver_script_function", "__webdriver_script_func", "__webdriver_script_fn", "__fxdriver_evaluate", "__driver_unwrapped", "__webdriver_unwrapped", "__driver_evaluate", "__selenium_unwrapped", "__fxdriver_unwrapped"]; e < t.length; e++) {
                if (document[t[e]]) return !0
            }
            return !1
        }, t.prototype.seleniumInWindow = function() {
            for (var e = 0, t = ["_phantom", "__nightmare", "_selenium", "callPhantom", "callSelenium", "_Selenium_IDE_Recorder"]; e < t.length; e++) {
                if (window[t[e]]) return !0
            }
            return !1
        }, t.prototype.seleniumSequentum = function() {
            return window.external && window.external.toString() && -1 != window.external.toString().indexOf("Sequentum")
        }, t.UNKNOWN_DEVICE_TYPE = "unknown", t
    }();
    e.SecuredTouchMeatadata = t
}(_securedTouchEntities || (_securedTouchEntities = {})),
function(e) {
    var t = function() {
        function t() {
            this._tags = []
        }
        return Object.defineProperty(t, "instance", {
            get: function() {
                return t._instance || (t._instance = new t), t._instance
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "tags", {
            get: function() {
                return this._tags
            },
            enumerable: !0,
            configurable: !0
        }), t.prototype.getTagsCopy = function() {
            return this._tags ? Array.from(this._tags) : []
        }, t.prototype.setTag = function(t, n) {
            if (t) {
                var i = n ? t + ":" + n : t,
                    r = e.SecuredTouchPointerConfig.instance.tagsBlacklistRegex;
                if (!r || !i.match(r)) return this._tags.push({
                    name: i,
                    epochTs: Date.now(),
                    timestamp: Date.now()
                }), e.STLogger.info("Add tag: " + i), i;
                e.STLogger.info("Tag " + t + " is blacklisted")
            }
            return ""
        }, t.prototype.reset = function() {
            this._tags = []
        }, t
    }();
    e.SecuredTouchTags = t
}(_securedTouchEntities || (_securedTouchEntities = {})),
function(e) {
    var t;
    ! function(e) {
        e.tag = "TAG", e.refreshUser = "REFRESH_USER", e.indirect = "INDIRECT", e.flush = "FLUSH", e.appSession = "APP_SESSION_ID"
    }(t = e.ForceReason || (e.ForceReason = {}));
    var n = function() {
        function n(t, n) {
            this.dataRepository = t, this.sessionData = n, this._retryNumber = 1, this._pauseTimestamp = 0, this._isBehavioralDataPaused = !1, this.logWasSent = !1, this.started = !1, this.digestProcessing = !1, this.startTasks = [], this.modes = {}, this.lastRetryTimestamp = Date.now(), this.lastPayloadTimestamp = Date.now(), this.initQueue = new _securedTouchDependencies.StPromiseQueue(1), this.stMetadata = new e.SecuredTouchMeatadata(n)
        }
        return Object.defineProperty(n, "MAX_NUMBER_OF_TRIES", {
            get: function() {
                return 3
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(n, "RETRY_UPDATE_INTERVAL_MS", {
            get: function() {
                return 6e4
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(n, "RETRY_INTERVAL_MS", {
            get: function() {
                return 15e3
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(n, "START_INTERACTION_INTERVAL_MS", {
            get: function() {
                return 12e4
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(n.prototype, "initST", {
            get: function() {
                return this.sessionData.initST
            },
            enumerable: !0,
            configurable: !0
        }), n.prototype.isRunning = function(e) {
            return 0 === this._pauseTimestamp || Boolean(e && e <= this._pauseTimestamp)
        }, n.instance = function() {
            if (!this._instance) {
                var t = new e.STServer,
                    n = e.SecuredTouchSessionStorage.instance;
                if (!document.body) throw e.STLogger.error("Securedtouch can be started only after DOM Ready!"), "SecuredTouch can be started only after DOM Ready!";
                this._instance = new e.SecuredTouchClient(t, n)
            }
            return this._instance
        }, n.prototype.flush = function() {
            return this.started && this.isRunning() ? this.forceSendCapturedEvents(t.flush) : Promise.resolve()
        }, n.prototype.sendHeartBeat = function() {
            return (new Date).getTime() - this.lastPayloadTimestamp >= e.SecuredTouchPointerConfig.instance.heartBeatFrequencyMs ? (this.lastPayloadTimestamp = (new Date).getTime(), this.addTag(e.SecuredTouchConstants.HEART_BEAT_TAG), this.flush()) : Promise.resolve()
        }, n.prototype.addTag = function(t, n) {
            if (this.isRunning()) {
                var i = e.SecuredTouchTags.instance.setTag(t, n),
                    r = e.SecuredTouchPointerConfig.instance.tagsToFlushRegex;
                i && r && i.match(r) && this.flush()
            }
        }, n.prototype.setAppSessionId = function(e) {
            this.updateSessionId(e), this.started && this.isRunning() && this.forceSendCapturedEvents(t.appSession)
        }, n.prototype.updateSessionId = function(t) {
            e.SecuredTouchSessionStorage.instance.appSessionId = t, e.SecuredTouchPointerConfig.instance.refreshTokenOnSessionChange && window.dispatchEvent(new CustomEvent("_appsessionchange", {
                detail: {
                    appSessionId: t
                }
            }))
        }, n.prototype.locationInWhitelist = function() {
            var t = e.SecuredTouchPointerConfig.instance.urlWhitelist;
            if (0 === t.length) return !0;
            for (var n in t)
                if (window.location.href.match(t[n])) return !0;
            return !1
        }, n.prototype.isEnabled = function() {
            return e.SecuredTouchPointerConfig.instance.enabled && this.locationInWhitelist()
        }, Object.defineProperty(n.prototype, "isBehavioralDataPaused", {
            get: function() {
                return this._isBehavioralDataPaused
            },
            enumerable: !0,
            configurable: !0
        }), n.prototype.isInitAndEnabled = function() {
            return !(!this.isEnabled() || !this.sessionData.initST) || (this.sessionData.initST || this.tryRecconect(), !1)
        }, n.prototype.startNewSession = function() {
            var t = this,
                n = this.sessionData.getDeviceCredentials().deviceId;
            return this.dataRepository.initSession({
                username: this.sessionData.getUsername() || n,
                applicationId: this.startParams.appId,
                deviceType: this.stMetadata.deviceType,
                deviceId: n,
                modes: this.modes
            }).then(function(e) {
                e && e.clientDigest && t.updateDigest(e.clientDigest)
            }).catch(function(t) {
                e.STLogger.warn("Failed to init session", t)
            })
        }, n.prototype.doAfterSdkInit = function(e) {
            return this.started ? e() : (this.startTasks.push(e), Promise.resolve())
        }, n.prototype.login = function(t, n) {
            var i = this,
                r = e.SecuredTouchUtil.now();
            return this.doAfterSdkInit(function() {
                return void 0 !== n && i.updateSessionId(n), i.refreshUsernameAndModes(t, !1, r)
            })
        }, n.prototype.logout = function(t) {
            var n = this,
                i = e.SecuredTouchUtil.now();
            return this.doAfterSdkInit(function() {
                var e = n.refreshUsernameAndModes(null, !0, i);
                return n.updateSessionId(t), e
            })
        }, n.prototype.pauseSecuredTouch = function() {
            var t = this;
            this.addTag("SDK paused"), this.flush(), this._pauseTimestamp = e.SecuredTouchUtil.now(), this.doAfterSdkInit(function() {
                return t.stopListening(), Promise.resolve()
            })
        }, n.prototype.resumeSecuredTouch = function() {
            var e = this;
            this._pauseTimestamp = 0, this.addTag("SDK resumed"), this.doAfterSdkInit(function() {
                return e.refreshListening(), Promise.resolve()
            })
        }, n.prototype.pauseBehavioralData = function() {
            var e = this;
            this._isBehavioralDataPaused || (this._isBehavioralDataPaused = !0, this.addTag("SDK paused behaviorally"), this.doAfterSdkInit(function() {
                return e.flush()
            }))
        }, n.prototype.resumeBehavioralData = function() {
            this._isBehavioralDataPaused && (this._isBehavioralDataPaused = !1, this.addTag("SDK resumed behaviorally"))
        }, n.prototype.refreshUsernameAndModes = function(t, n, i) {
            return __awaiter(this, void 0, void 0, function() {
                return __generator(this, function(r) {
                    return this.sessionData.initST ? this.isEnabled() ? this.isRunning(i) ? n ? (e.STLogger.info("Logout user"), [2, this.resetSession()]) : (e.STLogger.info("Login with user: " + t), [2, this.updateUser(t)]) : (e.STLogger.info("SDK paused"), this.sessionData.setUsername(t), [2, Promise.resolve()]) : (e.STLogger.warn("Refresh User Name FAILED, SDK is disabled"), [2, Promise.resolve()]) : (e.STLogger.error("Refresh User Name FAILED, SDK wasn't initialized"), [2, Promise.resolve()])
                })
            })
        }, n.prototype.isIdentified = function() {
            var e = this.sessionData.getUsername();
            return e && e !== this.sessionData.getDeviceCredentials().deviceId
        }, n.prototype.resetSession = function() {
            return __awaiter(this, void 0, void 0, function() {
                return __generator(this, function(e) {
                    switch (e.label) {
                        case 0:
                            return this.isIdentified() && this.addTag("LOGOUT"), this.clearBuffer(), [4, this.forceSendCapturedEvents(t.refreshUser)];
                        case 1:
                            return e.sent(), [4, this.startNewSession()];
                        case 2:
                            return e.sent(), this.sessionData.setUsername(null), [2]
                    }
                })
            })
        }, n.prototype.updateUser = function(e) {
            return this.isIdentified() && this.sessionData.getUsername() === e || this.addTag("SUCCESS_LOGIN"), this.sessionData.setUsername(e), this.forceSendCapturedEvents(t.refreshUser)
        }, n.prototype.validateStartParams = function(t) {
            if (!t.appId) throw this.logWasSent = !0, e.STLogger.error("ApplicationId is mandatory (Start parameters)!"), "ApplicationId is mandatory (Start parameters)!";
            if (!t.appSecret) throw this.logWasSent = !0, e.STLogger.error("Application secret is mandatory (Start parameters)!"), "Application secret is mandatory (Start parameters)!";
            if (!document.body) throw this.logWasSent = !0, e.STLogger.error("Securedtouch can be started only after DOM Ready!"), "SecuredTouch can be started only after DOM Ready!"
        }, n.prototype.sendMetadata = function() {
            return __awaiter(this, void 0, void 0, function() {
                var t, n, i, r;
                return __generator(this, function(o) {
                    switch (o.label) {
                        case 0:
                            return o.trys.push([0, 4, , 5]), t = this.sessionData.getLastMetadataTimeStamp(), n = (new Date).getTime() - t > e.SecuredTouchConstants.METADATA_TTL_MILLIS, e.SecuredTouchMetrics.instance.metadata.setMetadataSkipped(!n), n ? (e.STLogger.debug("Updating Metadata"), [4, this.stMetadata.getDeviceMetadata(this.stRemoteLogger)]) : [3, 3];
                        case 1:
                            return i = o.sent(), [4, this.dataRepository.sendMetadata(i)];
                        case 2:
                            o.sent(), this.sessionData.setLastMetadataTimeStamp((new Date).getTime()), o.label = 3;
                        case 3:
                            return [3, 5];
                        case 4:
                            return r = o.sent(), this.sendRemoteLog(e.SecuredTouchErrorCodes.E_4000, "Failed to send metadata", r), e.STLogger.warn("Failed to update metadata", r), [3, 5];
                        case 5:
                            return [2]
                    }
                })
            })
        }, n.prototype.getStToken = function() {
            return window._securedTouchToken || ""
        }, n.prototype.sendRemoteLog = function(t, n, i) {
            try {
                this.stRemoteLogger && this.stRemoteLogger.sendRemoteLog(t, n, i)
            } catch (t) {
                e.STLogger.warn("sendRemoteLog failed", t)
            }
        }, n.prototype.setUsername = function(t) {
            try {
                t.hasOwnProperty("userId") ? this.sessionData.setUsername(t.userId) : t.hasOwnProperty("username") && this.sessionData.setUsername(t.username)
            } catch (t) {
                this.sendRemoteLog(e.SecuredTouchErrorCodes.E_1001, "Failed to update username", t), e.STLogger.warn("Failed to update username", t)
            }
        }, n.prototype.loadEventPromise = function() {
            return __awaiter(this, void 0, void 0, function() {
                return __generator(this, function(e) {
                    return [2, new Promise(function(e) {
                        "complete" === document.readyState ? e() : window.addEventListener("load", function(t) {
                            e()
                        })
                    })]
                })
            })
        }, n.prototype.startST = function(t) {
            return __awaiter(this, void 0, void 0, function() {
                var n, i = this;
                return __generator(this, function(r) {
                    switch (r.label) {
                        case 0:
                            this.logWasSent = !1, r.label = 1;
                        case 1:
                            return r.trys.push([1, 3, , 4]), [4, this.initQueue.add(function() {
                                return i.start(t)
                            })];
                        case 2:
                            return [2, r.sent()];
                        case 3:
                            throw n = r.sent(), this.logWasSent || this.sendRemoteLog(e.SecuredTouchErrorCodes.E_1000, "SDK initialization failed", n), n;
                        case 4:
                            return [2]
                    }
                })
            })
        }, n.prototype.start = function(t) {
            return __awaiter(this, void 0, void 0, function() {
                var n, i, r, o;
                return __generator(this, function(a) {
                    switch (a.label) {
                        case 0:
                            return t.waitForWindowLoad ? [4, this.loadEventPromise()] : [3, 2];
                        case 1:
                            a.sent(), a.label = 2;
                        case 2:
                            return this.startParams = t, this.validateStartParams(t), this.clientVersion = t.isDebugMode ? e.SecuredTouchConstants.CLIENT_VERSION + "-debug" : e.SecuredTouchConstants.CLIENT_VERSION, this.started ? (this.sessionData.initST = !0, [2, Promise.resolve("SDK already initialized")]) : (this.stMetadata.initUAParser(), this.stRemoteLogger = new e.SecuredTouchRemoteLogger(t, this.stMetadata, e.SecuredTouchConstants.CLIENT_VERSION), e.SecuredTouchMetrics.instance.init.onInitStarted(), t.isDebugMode && (this.modes.isDebugMode = 1), e.STLogger.isLogEnabled = t.enableLog, e.STLogger.info("Starting STClient..."), this.sessionData.applicationId = t.appId, [4, this.sessionData.initDeviceStorage(t.hubUrl)]);
                        case 3:
                            a.sent(), this.dataRepository.init(this.startParams.appId, this.startParams.appSecret, this.startParams.url, this.clientVersion, this.stMetadata.deviceType), n = this.sessionData.getDeviceCredentials(), this.stRemoteLogger.deviceId = n.deviceId, i = e.SecuredTouchPointerConfig.instance, r = i.loadPointerFromCache(this.sessionData), a.label = 4;
                        case 4:
                            return a.trys.push([4, 6, , 7]), e.SecuredTouchMetrics.instance.init.setPointerCached(!!r), [4, this.refreshInitParams(r)];
                        case 5:
                            return a.sent(), [3, 7];
                        case 6:
                            throw o = a.sent(), this.logWasSent = !0, this.sendRemoteLog(e.SecuredTouchErrorCodes.E_3000, "Send init failed", o), "Init failed. " + e.SecuredTouchUtil.getErrorAsString(o);
                        case 7:
                            return this.setUsername(t), this.updateSessionId(t.sessionId), this.isEnabled() ? [3, 8] : (e.STLogger.warn("StClient disabled!"), [3, 11]);
                        case 8:
                            return t.initSession ? [4, this.startNewSession().catch(function(t) {
                                e.STLogger.warn("failed to init session", t)
                            })] : [3, 10];
                        case 9:
                            a.sent(), a.label = 10;
                        case 10:
                            this.sendMetadata(), this.sessionData.passedBufferTimeout ? this.dataRepository.clearCanceledPayloads() : this.dataRepository.sendCanceledPayloads(), a.label = 11;
                        case 11:
                            return this.sessionData.initST = !0, this.refreshListening(), this.started = !0, e.SecuredTouchMetrics.instance.init.onInitEnded(), [4, this.postSdkInit()];
                        case 12:
                            return a.sent(), [2]
                    }
                })
            })
        }, n.prototype.postSdkInit = function() {
            return __awaiter(this, void 0, void 0, function() {
                var t, n, i, r;
                return __generator(this, function(o) {
                    switch (o.label) {
                        case 0:
                            for (n in o.trys.push([0, 2, , 3]), document.referrer && this.addTag("referrer", document.referrer), e.SecuredTouchPointerConfig.instance.sendLocation && this.addTag("location", window.location.href), this.addTag("SDK started"), t = [], this.startTasks) i = this.startTasks[n], e.SecuredTouchUtil.isFunction(i) && t.push(i());
                            return [4, Promise.all(t)];
                        case 1:
                            return o.sent(), [3, 3];
                        case 2:
                            return r = o.sent(), this.sendRemoteLog(e.SecuredTouchErrorCodes.E_1002, "Post init failed", r), e.STLogger.warn("SDK post init failed", r), [3, 3];
                        case 3:
                            return [2]
                    }
                })
            })
        }, n.prototype.updateDigest = function(t) {
            var n = this,
                i = Promise.resolve();
            return !this.digestProcessing && e.SecuredTouchPointerConfig.instance.clientDigest !== t && this.isRunning() && (this.digestProcessing = !0, i = this.refreshInitParams().then(function() {
                n.digestProcessing = !1, n.refreshListening()
            }).catch(function(t) {
                n.digestProcessing = !1, e.STLogger.warn("refreshInitParams failed", t)
            })), i
        }, n.prototype.refreshInitParams = function(t) {
            return void 0 === t && (t = null), __awaiter(this, void 0, void 0, function() {
                var n, i;
                return __generator(this, function(r) {
                    switch (r.label) {
                        case 0:
                            return n = e.SecuredTouchPointerConfig.instance.enabled, t ? [3, 2] : (i = this.sessionData.getDeviceCredentials(), [4, e.SecuredTouchPointerConfig.instance.loadPointerFromServer(this.dataRepository, {
                                device_id: i.deviceId,
                                secret: i.deviceSecret,
                                clientVersion: this.clientVersion,
                                deviceType: this.stMetadata.deviceType,
                                authToken: e.SecuredTouchPointerConfig.instance.token
                            })]);
                        case 1:
                            r.sent(), r.label = 2;
                        case 2:
                            return e.STLogger.debug("Refreshing pointer config"), n && !e.SecuredTouchPointerConfig.instance.enabled && e.STLogger.warn("ST client disabled by init params!"), [2]
                    }
                })
            })
        }, n.prototype.tryRecconect = function() {
            var t = this,
                i = this;
            !this.sessionData.initST && Date.now() - this.lastRetryTimestamp > n.RETRY_UPDATE_INTERVAL_MS && (this.lastRetryTimestamp = Date.now(), this.startST(this.startParams).catch(function(r) {
                "object" == typeof r && (r = JSON.stringify(r)), e.STLogger.error("FAILED to start STClient! (" + r + ")"), t._retryNumber < e.SecuredTouchClientBase.MAX_NUMBER_OF_TRIES ? (window.setTimeout(i.tryRecconect, n.RETRY_INTERVAL_MS), t._retryNumber++) : (e.STLogger.error("Connecting retries exhausted!"), t._retryNumber = 1)
            }), e.STLogger.debug("Reconnecting..."))
        }, n.prototype.getEnvironmentData = function() {
            return {
                ops: this.stMetadata.OPS,
                webGl: this.stMetadata.WEB_GL_ID,
                devicePixelRatio: window.devicePixelRatio,
                screenWidth: window.screen.width,
                screenHeight: window.screen.height
            }
        }, n.prototype.getDevToolsState = function() {
            var e = window.outerWidth - window.innerWidth > 160,
                t = window.outerHeight - window.innerHeight > 160,
                n = e ? "vertical" : "horizontal";
            return t && e || !(window.Firebug && window.Firebug.chrome && window.Firebug.chrome.isInitialized || e || t) ? {
                open: !1,
                orientation: null
            } : {
                open: !0,
                orientation: n
            }
        }, n.prototype.addCommonAdditionalData = function(t) {
            if (e.SecuredTouchPointerConfig.instance.devToolsEnabled) {
                var n = this.getDevToolsState();
                n && (n.open && (t.DEV_TOOLS_OPEN = n.open), n.orientation && (t.DEV_TOOLS_ORIENTATION = n.orientation))
            }
            this.stMetadata.isDelayPassed && (this.stMetadata.isDelayPassed = !1, t.IS_AUTODLTE_COOKIES = this.stMetadata.isAutoDeleteCookie)
        }, n
    }();
    e.SecuredTouchClientBase = n
}(_securedTouchEntities || (_securedTouchEntities = {})),
function(e) {
    var t = function() {
        function t(t) {
            this.BEHAVIORAL_TYPE = "indirect", this._isStarted = !1, this._onClipboardEvent = new e.EventDispatcher, this.delegate = t, this.onClipboardEventHandler = this.onEvent.bind(this)
        }
        return Object.defineProperty(t.prototype, "isStarted", {
            get: function() {
                return this._isStarted
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "onClipboardEvent", {
            get: function() {
                return this._onClipboardEvent.asEvent()
            },
            enumerable: !0,
            configurable: !0
        }), t.prototype.onEvent = function(t) {
            try {
                if (!this.delegate.collectBehavioralData(this.BEHAVIORAL_TYPE)) return;
                this._onClipboardEvent.dispatch(this, this.createClipboardEvent(t))
            } catch (t) {
                e.STLogger.warn("error in clipboard handler", t)
            }
        }, t.prototype.createClipboardEvent = function(t) {
            var n = e.SecuredTouchUtil.getSrcElement(t);
            return {
                category: "ClipboardEvent",
                type: t.type,
                eventTs: t.timeStamp,
                epochTs: (new Date).getTime(),
                additionalData: e.SecuredTouchUtil.flatten({
                    stId: e.SecuredTouchUtil.getAttribute(n, "data-st-field") || "",
                    elementId: n ? n.id : ""
                })
            }
        }, t.prototype.start = function() {
            this._isStarted || (this._isStarted = !0, e.SecuredTouchUtil.addEventListener(document, "cut", this.onClipboardEventHandler), e.SecuredTouchUtil.addEventListener(document, "copy", this.onClipboardEventHandler), e.SecuredTouchUtil.addEventListener(document, "paste", this.onClipboardEventHandler))
        }, t.prototype.stop = function() {
            this._isStarted && (this._isStarted = !1, document.removeEventListener("cut", this.onClipboardEventHandler), document.removeEventListener("copy", this.onClipboardEventHandler), document.removeEventListener("paste", this.onClipboardEventHandler))
        }, t
    }();
    e.SecuredTouchClipboardEvents = t
}(_securedTouchEntities || (_securedTouchEntities = {})),
function(e) {
    var t = function() {
        function t(t) {
            this.BEHAVIORAL_TYPE = "indirect", this._isStarted = !1, this._onDragEvent = new e.EventDispatcher, this.delegate = t, this.onDragEventHandler = this.onEvent.bind(this)
        }
        return Object.defineProperty(t.prototype, "isStarted", {
            get: function() {
                return this._isStarted
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "onDragEvent", {
            get: function() {
                return this._onDragEvent.asEvent()
            },
            enumerable: !0,
            configurable: !0
        }), t.prototype.createDataTransferObject = function(e) {
            var t = "",
                n = "",
                i = [],
                r = [];
            if (e && (t = e.dropEffect, n = e.effectAllowed, i = e.types || [], e.files && e.files.length > 0))
                for (var o in e.files) r.push({
                    lastModified: e.files[o].lastModified,
                    size: e.files[o].size,
                    type: e.files[o].type
                });
            return {
                dropEffect: t,
                effectAllowed: n,
                types: i.toString(),
                files: r
            }
        }, t.prototype.createDragEvent = function(t) {
            var n = e.SecuredTouchUtil.modifiersKeys(t),
                i = this.createDataTransferObject(t.dataTransfer);
            return {
                category: "DragEvent",
                type: t.type,
                eventTs: t.timeStamp,
                epochTs: (new Date).getTime(),
                additionalData: e.SecuredTouchUtil.flatten({
                    button: t.button,
                    buttons: t.buttons,
                    clientX: t.clientX,
                    clientY: t.clientY,
                    movementX: t.movementX,
                    movementY: t.movementY,
                    offsetX: t.offsetX,
                    offsetY: t.offsetY,
                    pageX: t.pageX,
                    pageY: t.pageY,
                    screenX: t.screenX,
                    screenY: t.screenY,
                    which: t.which,
                    modifierKeys: n.toString(),
                    dataTransfer: i
                })
            }
        }, t.prototype.onEvent = function(t) {
            try {
                if (!this.delegate.collectBehavioralData(this.BEHAVIORAL_TYPE)) return;
                this._onDragEvent.dispatch(this, this.createDragEvent(t))
            } catch (t) {
                e.STLogger.warn("error in drag handler", t)
            }
        }, t.prototype.start = function() {
            this._isStarted || (this._isStarted = !0, e.SecuredTouchUtil.addEventListener(document, "dragstart", this.onDragEventHandler), e.SecuredTouchUtil.addEventListener(document, "dragexit", this.onDragEventHandler), e.SecuredTouchUtil.addEventListener(document, "drop", this.onDragEventHandler), e.SecuredTouchUtil.addEventListener(document, "dragend", this.onDragEventHandler))
        }, t.prototype.stop = function() {
            this._isStarted && (this._isStarted = !1, document.removeEventListener("dragstart", this.onDragEventHandler), document.removeEventListener("dragexit", this.onDragEventHandler), document.removeEventListener("drop", this.onDragEventHandler), document.removeEventListener("dragend", this.onDragEventHandler))
        }, t
    }();
    e.SecuredTouchDragEvents = t
}(_securedTouchEntities || (_securedTouchEntities = {})),
function(e) {
    var t = function() {
        function t(t) {
            this.BEHAVIORAL_TYPE = "indirect", this._isStarted = !1, this._onFocusEvent = new e.EventDispatcher, this.delegate = t, this.onFocusEventHandler = this.onEvent.bind(this)
        }
        return Object.defineProperty(t.prototype, "isStarted", {
            get: function() {
                return this._isStarted
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "onFocusEvent", {
            get: function() {
                return this._onFocusEvent.asEvent()
            },
            enumerable: !0,
            configurable: !0
        }), t.prototype.getRelatedTarget = function(t) {
            if (!t.relatedTarget) return {
                type: "",
                stId: "",
                elementId: ""
            };
            var n = {
                type: e.SecuredTouchUtil.getObjectType(t.relatedTarget),
                stId: "",
                elementId: ""
            };
            t.relatedTarget.id && (n.elementId = t.relatedTarget.id);
            try {
                var i = t.relatedTarget;
                n.stId = e.SecuredTouchUtil.getAttribute(i, "data-st-field") || ""
            } catch (e) {}
            return n
        }, t.prototype.createFocusEvent = function(t) {
            var n = e.SecuredTouchUtil.getSrcElement(t),
                i = this.getRelatedTarget(t);
            return {
                category: "FocusEvent",
                type: t.type,
                eventTs: t.timeStamp,
                epochTs: (new Date).getTime(),
                additionalData: e.SecuredTouchUtil.flatten({
                    stId: e.SecuredTouchUtil.getAttribute(n, "data-st-field") || "",
                    elementId: n ? n.id : "",
                    relatedTarget: i
                })
            }
        }, t.prototype.onEvent = function(t) {
            try {
                if (!this.delegate.collectBehavioralData(this.BEHAVIORAL_TYPE)) return;
                this._onFocusEvent.dispatch(this, this.createFocusEvent(t))
            } catch (t) {
                e.STLogger.warn("error in focus handler", t)
            }
        }, t.prototype.start = function() {
            this._isStarted || (this._isStarted = !0, e.SecuredTouchUtil.addEventListener(document, "DOMFocusIn", this.onFocusEventHandler), e.SecuredTouchUtil.addEventListener(document, "DOMFocusOut", this.onFocusEventHandler), e.SecuredTouchUtil.addEventListener(document, "focus", this.onFocusEventHandler), e.SecuredTouchUtil.addEventListener(document, "focusin", this.onFocusEventHandler), e.SecuredTouchUtil.addEventListener(document, "focusout", this.onFocusEventHandler))
        }, t.prototype.stop = function() {
            this._isStarted && (this._isStarted = !1, document.removeEventListener("DOMFocusIn", this.onFocusEventHandler), document.removeEventListener("DOMFocusOut", this.onFocusEventHandler), document.removeEventListener("focus", this.onFocusEventHandler), document.removeEventListener("focusin", this.onFocusEventHandler), document.removeEventListener("focusout", this.onFocusEventHandler))
        }, t
    }();
    e.SecuredTouchFocusEvents = t
}(_securedTouchEntities || (_securedTouchEntities = {})),
function(e) {
    var t = function() {
        function t(t) {
            this.BEHAVIORAL_TYPE = "indirect", this._isStarted = !1, this._onUIEvent = new e.EventDispatcher, this.delegate = t, this.onUIEventHandler = this.onEvent.bind(this)
        }
        return Object.defineProperty(t.prototype, "isStarted", {
            get: function() {
                return this._isStarted
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "onUIEvent", {
            get: function() {
                return this._onUIEvent.asEvent()
            },
            enumerable: !0,
            configurable: !0
        }), t.prototype.createUIEvent = function(t) {
            return {
                category: "UIEvent",
                type: t.type,
                eventTs: t.timeStamp,
                epochTs: (new Date).getTime(),
                additionalData: e.SecuredTouchUtil.flatten({
                    detail: t.detail
                })
            }
        }, t.prototype.onEvent = function(t) {
            try {
                if (!this.delegate.collectBehavioralData(this.BEHAVIORAL_TYPE)) return;
                this._onUIEvent.dispatch(this, this.createUIEvent(t))
            } catch (t) {
                e.STLogger.warn("error in UIEvent handler", t)
            }
        }, t.prototype.start = function() {
            this._isStarted || (this._isStarted = !0, e.SecuredTouchUtil.addEventListener(document, "resize", this.onUIEventHandler), e.SecuredTouchUtil.addEventListener(document, "scroll", this.onUIEventHandler), e.SecuredTouchUtil.addEventListener(document, "select", this.onUIEventHandler))
        }, t.prototype.stop = function() {
            this._isStarted && (this._isStarted = !1, document.removeEventListener("resize", this.onUIEventHandler), document.removeEventListener("scroll", this.onUIEventHandler), document.removeEventListener("select", this.onUIEventHandler))
        }, t
    }();
    e.SecuredTouchUIEvents = t
}(_securedTouchEntities || (_securedTouchEntities = {})),
function(e) {
    var t = function() {
        function t(t) {
            this.BEHAVIORAL_TYPE = "indirect", this.visibilityChangeEventName = "visibilitychange", this.hiddenProperty = "hidden", this._isStarted = !1, this._onGeneralEvent = new e.EventDispatcher, this.delegate = t, this.onGeneralEventHandler = this.onEvent.bind(this), this.onLangChangeHandler = this.onLangChangeEvent.bind(this), this.onOrientationChangeHandler = this.onOrientationChangeEvent.bind(this), this.onVisibilityChangeHandler = this.onVisibilityChangeEvent.bind(this), void 0 !== document.msHidden ? (this.hiddenProperty = "msHidden", this.visibilityChangeEventName = "msvisibilitychange") : void 0 !== document.webkitHidden && (this.hiddenProperty = "webkitHidden", this.visibilityChangeEventName = "webkitvisibilitychange")
        }
        return Object.defineProperty(t.prototype, "isStarted", {
            get: function() {
                return this._isStarted
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "onGeneralEvent", {
            get: function() {
                return this._onGeneralEvent.asEvent()
            },
            enumerable: !0,
            configurable: !0
        }), t.prototype.onEvent = function(t) {
            try {
                if (!this.delegate.collectBehavioralData(this.BEHAVIORAL_TYPE)) return;
                this._onGeneralEvent.dispatch(this, this.createGeneralEvent(t))
            } catch (t) {
                e.STLogger.warn("error in general event handler", t)
            }
        }, t.prototype.onLangChangeEvent = function(t) {
            try {
                if (!this.delegate.collectBehavioralData(this.BEHAVIORAL_TYPE)) return;
                var n = this.createGeneralEvent(t);
                navigator && navigator.language && (n.additionalData["navigator.language"] = navigator.language), this._onGeneralEvent.dispatch(this, n)
            } catch (t) {
                e.STLogger.warn("error in LangChange event handler", t)
            }
        }, t.prototype.onOrientationChangeEvent = function(t) {
            try {
                if (!this.delegate.collectBehavioralData(this.BEHAVIORAL_TYPE)) return;
                var n = this.createGeneralEvent(t),
                    i = e.SecuredTouchUtil.getDeviceOrientation();
                n.additionalData.orientation = i.orientation, n.additionalData.angle = i.angle, this._onGeneralEvent.dispatch(this, n)
            } catch (t) {
                e.STLogger.warn("error in OrientationChange event handler", t)
            }
        }, t.prototype.onVisibilityChangeEvent = function(t) {
            try {
                if (!this.delegate.collectBehavioralData(this.BEHAVIORAL_TYPE)) return;
                var n = this.createGeneralEvent(t);
                n.additionalData.hidden = !!document[this.hiddenProperty], document.visibilityState && (n.additionalData.visibilityState = document.visibilityState.toString()), this._onGeneralEvent.dispatch(this, n)
            } catch (t) {
                e.STLogger.warn("error in VisibilityChange event handler", t)
            }
        }, t.prototype.createGeneralEvent = function(e) {
            return {
                category: "Event",
                type: e.type,
                eventTs: e.timeStamp,
                epochTs: (new Date).getTime(),
                additionalData: {}
            }
        }, t.prototype.start = function() {
            this._isStarted || (this._isStarted = !0, e.SecuredTouchUtil.addEventListener(document, this.visibilityChangeEventName, this.onVisibilityChangeHandler), e.SecuredTouchUtil.addEventListener(document, "change", this.onGeneralEventHandler), e.SecuredTouchUtil.addEventListener(document, "fullscreenchange", this.onGeneralEventHandler), e.SecuredTouchUtil.addEventListener(document, "invalid", this.onGeneralEventHandler), e.SecuredTouchUtil.addEventListener(window, "languagechange", this.onLangChangeHandler), e.SecuredTouchUtil.addEventListener(window, "orientationchange", this.onOrientationChangeHandler), e.SecuredTouchUtil.addEventListener(document, "seeked", this.onGeneralEventHandler), e.SecuredTouchUtil.addEventListener(document, "seeking", this.onGeneralEventHandler), e.SecuredTouchUtil.addEventListener(document, "selectstart", this.onGeneralEventHandler), e.SecuredTouchUtil.addEventListener(document, "selectionchange", this.onGeneralEventHandler), e.SecuredTouchUtil.addEventListener(document, "submit", this.onGeneralEventHandler), e.SecuredTouchUtil.addEventListener(document, "volumechange", this.onGeneralEventHandler), e.SecuredTouchUtil.addEventListener(document, "reset", this.onGeneralEventHandler))
        }, t.prototype.stop = function() {
            this._isStarted && (this._isStarted = !1, document.removeEventListener(this.visibilityChangeEventName, this.onVisibilityChangeHandler), document.removeEventListener("change", this.onGeneralEventHandler), document.removeEventListener("fullscreenchange", this.onGeneralEventHandler), document.removeEventListener("invalid", this.onGeneralEventHandler), window.removeEventListener("languagechange", this.onLangChangeHandler), window.removeEventListener("orientationchange", this.onOrientationChangeHandler), document.removeEventListener("seeked", this.onGeneralEventHandler), document.removeEventListener("seeking", this.onGeneralEventHandler), document.removeEventListener("selectstart", this.onGeneralEventHandler), document.removeEventListener("selectionchange", this.onGeneralEventHandler), document.removeEventListener("submit", this.onGeneralEventHandler), document.removeEventListener("volumechange", this.onGeneralEventHandler), document.removeEventListener("reset", this.onGeneralEventHandler))
        }, t
    }();
    e.SecuredTouchGeneralEvents = t
}(_securedTouchEntities || (_securedTouchEntities = {})),
function(e) {
    var t = function() {
        function t(t) {
            this.BEHAVIORAL_TYPE = "indirect", this._isStarted = !1, this._onUnloadEvent = new e.EventDispatcher, this.delegate = t, this.onUnloadEventHandler = this.onEvent.bind(this)
        }
        return Object.defineProperty(t.prototype, "isStarted", {
            get: function() {
                return this._isStarted
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "onUnloadEvent", {
            get: function() {
                return this._onUnloadEvent.asEvent()
            },
            enumerable: !0,
            configurable: !0
        }), t.prototype.createUnloadEvent = function(t) {
            return {
                category: "UIEvent",
                type: t.type,
                eventTs: t.timeStamp,
                epochTs: (new Date).getTime(),
                additionalData: e.SecuredTouchUtil.flatten({
                    detail: t.detail
                })
            }
        }, t.prototype.onEvent = function(t) {
            try {
                if (!this.delegate.collectBehavioralData(this.BEHAVIORAL_TYPE)) return void this._onUnloadEvent.dispatch(this, null);
                this._onUnloadEvent.dispatch(this, this.createUnloadEvent(t))
            } catch (t) {
                e.STLogger.warn("error in UnloadEvent handler", t)
            }
        }, t.prototype.start = function() {
            this._isStarted || (this._isStarted = !0, e.SecuredTouchPointerConfig.instance.beforeUnloadEnabled && e.SecuredTouchUtil.addEventListener(window, "beforeunload", this.onUnloadEventHandler))
        }, t.prototype.stop = function() {
            this._isStarted && (this._isStarted = !1, document.removeEventListener("beforeunload", this.onUnloadEventHandler))
        }, t
    }();
    e.SecuredTouchUnloadEvents = t
}(_securedTouchEntities || (_securedTouchEntities = {})),
function(e) {
    var t = function() {
        function t(t) {
            this.DEFAULT_INDIRECT_IDLE_INTERVAL = 1e3, this.MAX_INDIRECT_EVENTS = 500, this._onIndirect = new e.EventDispatcher, this._onWindowDispose = new e.EventDispatcher, this.indirectEvents = [], this.eventCounterByType = {}, this.idleTimeInMillis = this.DEFAULT_INDIRECT_IDLE_INTERVAL, this.lastIndirectEventTimestamp = 0, this._isStarted = !1, this.stClipboardEvents = new e.SecuredTouchClipboardEvents(t), this.stClipboardEvents.onClipboardEvent.subscribe(this.handleEvent.bind(this)), this.stDragEvents = new e.SecuredTouchDragEvents(t), this.stDragEvents.onDragEvent.subscribe(this.handleEvent.bind(this)), this.stFocusEvents = new e.SecuredTouchFocusEvents(t), this.stFocusEvents.onFocusEvent.subscribe(this.handleEvent.bind(this)), this.stUIEvents = new e.SecuredTouchUIEvents(t), this.stUIEvents.onUIEvent.subscribe(this.handleEvent.bind(this)), this.stGeneralEvents = new e.SecuredTouchGeneralEvents(t), this.stGeneralEvents.onGeneralEvent.subscribe(this.handleEvent.bind(this)), this.stUnloadEvent = new e.SecuredTouchUnloadEvents(t), this.stUnloadEvent.onUnloadEvent.subscribe(this.windowUnload.bind(this)), this.onTimeElapsedHandler = this.onTimeElapsed.bind(this)
        }
        return Object.defineProperty(t.prototype, "onIndirect", {
            get: function() {
                return this._onIndirect.asEvent()
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "onWindowDispose", {
            get: function() {
                return this._onWindowDispose.asEvent()
            },
            enumerable: !0,
            configurable: !0
        }), t.prototype.onTimeElapsed = function() {
            return __awaiter(this, void 0, void 0, function() {
                return __generator(this, function(e) {
                    return this.indirectEvents.length > 0 && (new Date).getTime() - this.lastIndirectEventTimestamp >= this.idleTimeInMillis && this.dispatch(), [2]
                })
            })
        }, t.prototype.handleEvent = function(e, t) {
            this.lastIndirectEventTimestamp = (new Date).getTime(), this.pushEvent(t)
        }, t.prototype.windowUnload = function(t, n) {
            n && e.SecuredTouchPointerConfig.instance.beforeUnloadEnabled && (this.lastIndirectEventTimestamp = (new Date).getTime(), this.pushEvent(n), this._onWindowDispose.dispatch(this, this.clearBuffer()))
        }, t.prototype.pushEvent = function(t) {
            e.SecuredTouchPointerConfig.instance.countOnlyEventsList.has(t.type) ? this.countEvent(t) : (t.additionalData.windowId = e.SecuredTouchSessionStorage.instance.windowId, t.additionalData.locationHref = e.SecuredTouchUtil.getCurrentLocationUrl(), t.additionalData.clientDigest = e.SecuredTouchPointerConfig.instance.clientDigest, this.indirectEvents.push(t), this.indirectEvents.length >= this.MAX_INDIRECT_EVENTS && this.dispatch())
        }, t.prototype.countEvent = function(e) {
            this.eventCounterByType[e.type] = Number(this.eventCounterByType[e.type]) + 1 || 1
        }, t.prototype.clearBuffer = function() {
            var e = {
                events: this.indirectEvents,
                eventCounters: this.eventCounterByType
            };
            return this.indirectEvents = [], this.eventCounterByType = {}, e
        }, t.prototype.dispatch = function() {
            try {
                clearInterval(this.updateIntervalHandle), this._onIndirect.dispatch(this, this.clearBuffer()), this.updateIntervalHandle = setInterval(this.onTimeElapsedHandler, e.SecuredTouchPointerConfig.instance.indirectInterval)
            } catch (t) {
                e.STLogger.warn("Failed to dispatch indirect events", t)
            }
        }, Object.defineProperty(t.prototype, "isStarted", {
            get: function() {
                return this._isStarted
            },
            enumerable: !0,
            configurable: !0
        }), t.prototype.start = function() {
            this._isStarted || (this.updateIntervalHandle = setInterval(this.onTimeElapsedHandler, e.SecuredTouchPointerConfig.instance.indirectInterval), this.stClipboardEvents.start(), this.stDragEvents.start(), this.stFocusEvents.start(), this.stUIEvents.start(), this.stGeneralEvents.start(), this.stUnloadEvent.start(), this._isStarted = !0)
        }, t.prototype.stop = function() {
            this._isStarted && (this.stClipboardEvents.stop(), this.stDragEvents.stop(), this.stFocusEvents.stop(), this.stUIEvents.stop(), this.stGeneralEvents.stop(), this.stUnloadEvent.stop(), clearInterval(this.updateIntervalHandle), this.updateIntervalHandle = null, this._isStarted = !1)
        }, t.prototype.unsubscribe = function() {
            this.stClipboardEvents.onClipboardEvent.unsubscribe(this.handleEvent.bind(this)), this.stDragEvents.onDragEvent.unsubscribe(this.handleEvent.bind(this)), this.stFocusEvents.onFocusEvent.unsubscribe(this.handleEvent.bind(this)), this.stUIEvents.onUIEvent.unsubscribe(this.handleEvent.bind(this)), this.stGeneralEvents.onGeneralEvent.unsubscribe(this.handleEvent.bind(this)), this.stUnloadEvent.onUnloadEvent.unsubscribe(this.windowUnload.bind(this))
        }, t
    }();
    e.SecuredTouchIndirectClient = t
}(_securedTouchEntities || (_securedTouchEntities = {})),
function(e) {
    var t = function() {
        function t() {
            this.config = {}, this.cacheHash = 0, this.cache = new Map
        }
        return t.prototype.refreshCssSelectors = function(t) {
            try {
                if (!t) return;
                var n = e.SecuredTouchUtil.hashCode(t);
                if (this.cacheHash === n) return;
                this.config = JSON.parse(t), this.cacheHash = n, this.cache = new Map
            } catch (t) {
                e.STLogger.warn("Failed to set css selectors", t)
            }
        }, t.prototype.getIdentification = function(t, n) {
            if (null === this.cache.get(t)) return null;
            if (void 0 !== this.cache.get(t)) return this.cache.get(t);
            for (var i in this.config) try {
                if (!this.config.hasOwnProperty(i)) continue;
                var r = this.config[i] || [];
                e.SecuredTouchUtil.isArray(r) || (r = [].concat(r));
                for (var o = 0, a = r; o < a.length; o++) {
                    var s = a[o];
                    if (e.SecuredTouchUtil.isSelectorMatches(t, s, n)) return this.cache.set(t, i), i
                }
            } catch (t) {
                e.STLogger.warn("Failed to find selector for " + i, t)
            }
            return this.cache.set(t, null), null
        }, t
    }();
    e.SecuredTouchElementsIdentifications = t
}(_securedTouchEntities || (_securedTouchEntities = {})),
function(e) {
    var t = function() {
        function t() {
            this.cacheHashCode = 0, this.fieldsOperations = new Map
        }
        return t.prototype.updateFieldsOperations = function(t) {
            try {
                if (!t) return void(this.fieldsOperations = new Map);
                var n = e.SecuredTouchUtil.hashCode(t);
                if (this.cacheHashCode === n) return;
                this.fieldsOperations = new Map;
                var i = JSON.parse(t);
                for (var r in i) try {
                    if (!i.hasOwnProperty(r)) continue;
                    var o = i[r];
                    e.SecuredTouchUtil.isArray(o) || (o = [].concat(o)), this.fieldsOperations.set(r, o)
                } catch (t) {
                    e.STLogger.warn("Failed to set operations for " + r, t)
                }
            } catch (t) {
                e.STLogger.warn("Failed to set obfuscated config", t)
            }
        }, t.prototype.performOperations = function(t, n, i) {
            t && n && i && (this.fieldsOperations.get(t) || []).forEach(function(r) {
                try {
                    switch (r) {
                        case "email_domain":
                            var o = e.SecuredTouchUtil.getEmailDomain(n);
                            o && i({
                                fieldKey: t + "_domain",
                                obfuscatedValue: o
                            });
                            break;
                        case "obfuscate":
                            i({
                                fieldKey: t + "_obfuscated",
                                obfuscatedValue: "" + e.SecuredTouchUtil.mod(n, 1e3)
                            })
                    }
                } catch (n) {
                    e.STLogger.warn("failed to perform operation on " + t)
                }
            })
        }, t
    }();
    e.SecuredTouchFieldValues = t
}(_securedTouchEntities || (_securedTouchEntities = {})),
function(e) {
    var t = function() {
        function t(t) {
            this.BEHAVIORAL_TYPE = "eventKeyboard", this._isStarted = !1, this._onInteraction = new e.EventDispatcher, this._onEnterPress = new e.EventDispatcher, this._onObfuscatedValue = new e.EventDispatcher, this.interactionsMap = new Map, this.fieldsIdentifications = new e.SecuredTouchElementsIdentifications, this.fieldValues = new e.SecuredTouchFieldValues, this.keyStrokeMap = new Map, this.delegate = t, this.onKeyDownHandle = this.onKeyDown.bind(this), this.onKeyUpHandle = this.onKeyUp.bind(this), this.onFocusHandle = this.onFocus.bind(this), this.onBlurHandle = this.onBlur.bind(this)
        }
        return Object.defineProperty(t.prototype, "isStarted", {
            get: function() {
                return this._isStarted
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "onInteraction", {
            get: function() {
                return this._onInteraction.asEvent()
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "onEnterPress", {
            get: function() {
                return this._onEnterPress.asEvent()
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "onObfuscatedValue", {
            get: function() {
                return this._onObfuscatedValue.asEvent()
            },
            enumerable: !0,
            configurable: !0
        }), t.prototype.refreshKeyboardCssSelectors = function(e) {
            this.fieldsIdentifications.refreshCssSelectors(e)
        }, t.prototype.refreshObfuscatedValues = function(e) {
            this.fieldValues.updateFieldsOperations(e)
        }, Object.defineProperty(t.prototype, "modifiersKeys", {
            get: function() {
                return ["Alt", "AltGraph", "CapsLock", "Control", "Fn", "FnLock", "Hyper", "Meta", "NumLock", "OS", "ScrollLock", "Shift", "Super", "Symbol", "SymbolLock"]
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "specialKeys", {
            get: function() {
                return ["Tab", "Shift", "Backspace", "Enter", "CapsLock", "Meta", "Delete", "Alt", "ArrowDown", "ArrowUp", "Control", "ArrowLeft", "End", "Unidentified", "Home", "ArrowRight", "Insert", "Pause", "PageDown", "PageUp", "F1", "F2", "F3", "F4", "F5", "F6", "F7", "F8", "F9", "F10", "F11", "F12", "AltGraph", "Escape"]
            },
            enumerable: !0,
            configurable: !0
        }), t.prototype.getInteractionFromElement = function(t) {
            var n = null,
                i = null,
                r = e.SecuredTouchUtil.getSrcElement(t);
            return r && e.SecuredTouchUtil.isFunction(r.getAttribute) && ((i = e.SecuredTouchUtil.getAttribute(r, "data-st-field")) || (i = this.fieldsIdentifications.getIdentification(r, 0)), i && !e.SecuredTouchPointerConfig.instance.fieldBlackList.has(i) && ((n = this.interactionsMap.get(r)) || (n = {
                stId: i,
                elementId: e.SecuredTouchUtil.getAttribute(r, "id"),
                name: e.SecuredTouchUtil.getAttribute(r, "name"),
                type: e.SecuredTouchUtil.getAttribute(r, "type"),
                events: [],
                identified: !1,
                counter: 0,
                additionalData: {
                    clientDigest: e.SecuredTouchPointerConfig.instance.clientDigest,
                    windowId: e.SecuredTouchSessionStorage.instance.windowId,
                    locationHref: e.SecuredTouchUtil.getCurrentLocationUrl()
                }
            }, this.interactionsMap.set(r, n)))), n
        }, t.prototype.getKeyCode = function(t) {
            return t.keyCode ? t.keyCode : t.which ? t.which : t.code ? e.SecuredTouchUtil.hashCode(t.code) : e.SecuredTouchUtil.hashCode(t.key) + (t.location || 0)
        }, t.prototype.getKeystrokeId = function(t, n) {
            var i, r = this.getKeyCode(t);
            return "keyup" === n && (this.keyStrokeMap.has(r) ? (i = this.keyStrokeMap.get(r), this.keyStrokeMap.delete(r)) : i = e.SecuredTouchUtil.newGuid()), "keydown" === n && (this.keyStrokeMap.has(r) && t.repeat ? i = this.keyStrokeMap.get(r) : (i = e.SecuredTouchUtil.newGuid(), this.keyStrokeMap.set(r, i))), i
        }, t.prototype.createKeyboardInteractionEvent = function(t, n) {
            var i = e.SecuredTouchUtil.getSrcElement(n),
                r = i.value ? i.value.toString().length : 0;
            return {
                type: t,
                eventTs: n.timeStamp,
                epochTs: (new Date).getTime(),
                modifierKeys: [],
                selectionStart: e.SecuredTouchUtil.getElementSelectionStart(i),
                selectionEnd: e.SecuredTouchUtil.getElementSelectionEnd(i),
                repeat: n.repeat,
                key: null,
                keyCode: null,
                keystrokeId: null,
                currentLength: r,
                location: n.location
            }
        }, t.prototype.enrichKeyboardEvent = function(t, n, i) {
            (this.modifiersKeys.indexOf(t.key) >= 0 || this.specialKeys.indexOf(t.key) >= 0) && (i.key = t.key, i.keyCode = t.keyCode), i.keystrokeId = this.getKeystrokeId(t, i.type);
            var r = e.SecuredTouchUtil.getSrcElement(t);
            i.currentLength = String(r.value).length, t.getModifierState && this.modifiersKeys.forEach(function(e) {
                t.getModifierState(e.toString()) && i.modifierKeys.push(e)
            })
        }, t.prototype.onFocus = function(t) {
            try {
                if (!this.delegate.collectBehavioralData(this.BEHAVIORAL_TYPE)) return void this._onInteraction.dispatch(this, null);
                t = e.SecuredTouchUtil.getKeyboardEvent(t);
                var n = this.getInteractionFromElement(t);
                if (n) {
                    var i = this.createKeyboardInteractionEvent("focus", t);
                    n.events.push(i)
                }
            } catch (t) {
                e.STLogger.warn("error in keyboard focus handler", t)
            }
        }, t.prototype.onKeyUp = function(t) {
            try {
                if (13 !== (t = e.SecuredTouchUtil.getKeyboardEvent(t)).keyCode && 13 !== t.which || this._onEnterPress.dispatch(this, e.SecuredTouchUtil.getSrcElement(t)), !this.delegate.collectBehavioralData(this.BEHAVIORAL_TYPE)) return void this._onInteraction.dispatch(this, null);
                var n = this.getInteractionFromElement(t);
                if (n) {
                    var i = this.createKeyboardInteractionEvent("keyup", t);
                    this.enrichKeyboardEvent(t, n, i), n.events.push(i)
                } else this.keyStrokeMap.delete(this.getKeyCode(t))
            } catch (t) {
                e.STLogger.warn("error in keyUp handler", t)
            }
        }, t.prototype.onKeyDown = function(t) {
            try {
                if (!this.delegate.collectBehavioralData(this.BEHAVIORAL_TYPE)) return void this._onInteraction.dispatch(this, null);
                t = e.SecuredTouchUtil.getKeyboardEvent(t);
                var n = this.getInteractionFromElement(t);
                if (n) {
                    var i = this.createKeyboardInteractionEvent("keydown", t);
                    this.enrichKeyboardEvent(t, n, i), n.events.push(i)
                }
            } catch (t) {
                e.STLogger.warn("error in keyDown handler", t)
            }
        }, t.prototype.onBlur = function(t) {
            try {
                t = e.SecuredTouchUtil.getKeyboardEvent(t);
                var n = this.getInteractionFromElement(t);
                if (this.dispatchValue(n, e.SecuredTouchUtil.getSrcElement(t)), !this.delegate.collectBehavioralData(this.BEHAVIORAL_TYPE)) return void this._onInteraction.dispatch(this, null);
                if (n) {
                    var i = this.createKeyboardInteractionEvent("blur", t);
                    n.events.push(i);
                    var r = e.SecuredTouchUtil.getSrcElement(t);
                    this.interactionsMap.delete(r), this._onInteraction.dispatch(this, n)
                }
            } catch (t) {
                e.STLogger.warn("error in blur handler", t)
            }
        }, t.prototype.dispatchValue = function(t, n) {
            var i = this;
            try {
                t && this.fieldValues.performOperations(t.stId, n.value, function(e) {
                    i._onObfuscatedValue.dispatch(i, e)
                })
            } catch (t) {
                e.STLogger.warn("error in blur dispatchValue", t)
            }
        }, t.prototype.clearBuffer = function() {
            var t = e.SecuredTouchUtil.getValuesOfMap(this.interactionsMap);
            return this.interactionsMap.clear(), t
        }, t.prototype.isEmpty = function() {
            return 0 === this.interactionsMap.size
        }, t.prototype.start = function() {
            this._isStarted ? e.STLogger.debug("Desktop Keyboard events already listening") : (e.SecuredTouchUtil.addEventListener(document, "keydown", this.onKeyDownHandle), e.SecuredTouchUtil.addEventListener(document, "keyup", this.onKeyUpHandle), e.SecuredTouchUtil.addEventListener(document, "focus", this.onFocusHandle, !0), e.SecuredTouchUtil.addEventListener(document, "blur", this.onBlurHandle, !0), this._isStarted = !0, e.STLogger.debug("Desktop Keyboard events start listening..."))
        }, t.prototype.stop = function() {
            this._isStarted ? (document.removeEventListener("keydown", this.onKeyDownHandle), document.removeEventListener("keyup", this.onKeyUpHandle), document.removeEventListener("focus", this.onFocusHandle, !0), document.removeEventListener("blur", this.onBlurHandle, !0), this._isStarted = !1, e.STLogger.debug("Desktop Keyboard events stop listening...")) : e.STLogger.debug("Desktop Keyboard events already stopped")
        }, t
    }();
    e.SecuredTouchKeyboard = t
}(_securedTouchEntities || (_securedTouchEntities = {})),
function(e) {
    var t = function() {
        function t(t) {
            this.BEHAVIORAL_TYPE = "mouse", this._isStarted = !1, this._onInteraction = new e.EventDispatcher, this._onClickEvent = new e.EventDispatcher, this.lastMouseInteractionTimestamp = null, this.mouseEventsCounter = 0, this.counterGroupByType = {}, this.delegate = t, this.wheelOptions = !!e.SecuredTouchUtil.isPassiveSupported() && {
                passive: !0
            }, this.onClickHandle = this.onClick.bind(this), this.onDblclickHandle = this.onMouseClickEvent.bind(this), this.onMousedownHandle = this.onMouseClickEvent.bind(this), this.onMousemoveHandle = this.onMouseEvent.bind(this), this.onMouseoutHandle = this.onMouseout.bind(this), this.onMouseoverHandle = this.onMouseEvent.bind(this), this.onMouseupHandle = this.onMouseClickEvent.bind(this), this.onWheelHandle = this.onMouseEvent.bind(this), this.interactionUpdateHandle = this.interactionUpdate.bind(this)
        }
        return Object.defineProperty(t.prototype, "isStarted", {
            get: function() {
                return this._isStarted
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "onInteraction", {
            get: function() {
                return this._onInteraction.asEvent()
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "onClickEvent", {
            get: function() {
                return this._onClickEvent.asEvent()
            },
            enumerable: !0,
            configurable: !0
        }), t.prototype.interactionUpdate = function() {
            this.lastMouseInteraction ? (new Date).getTime() - this.lastMouseInteractionTimestamp >= e.SecuredTouchPointerConfig.instance.idleTimeoutMs && this.dispatch() : !this.delegate.collectBehavioralData(this.BEHAVIORAL_TYPE) && (new Date).getTime() - this.lastMouseInteractionTimestamp <= e.SecuredTouchPointerConfig.instance.updateInterval && this.dispatch()
        }, t.prototype.dispatch = function() {
            try {
                this.lastMouseInteraction && (this.lastMouseInteraction.additionalData = Object.assign({}, this.lastMouseInteraction.additionalData, this.counterGroupByType)), this._onInteraction.dispatch(this, this.lastMouseInteraction), this.lastMouseInteraction = null, this.mouseEventsCounter = 0, this.counterGroupByType = {}
            } catch (t) {
                e.STLogger.warn("Failed to dispatch mouse events", t)
            }
        }, t.prototype.updateInteraction = function(t) {
            this.lastMouseInteraction || (this.lastMouseInteraction = {
                events: [],
                identified: !1,
                counter: 0,
                additionalData: {
                    clientDigest: e.SecuredTouchPointerConfig.instance.clientDigest,
                    windowId: e.SecuredTouchSessionStorage.instance.windowId,
                    locationHref: e.SecuredTouchUtil.getCurrentLocationUrl()
                }
            }), this.lastMouseInteraction.events.push(t), this.mouseEventsCounter++, this.mouseEventsCounter >= e.SecuredTouchPointerConfig.instance.maxEventsCount && this.dispatch()
        }, t.prototype.onClick = function(t) {
            try {
                if (this.lastMouseInteractionTimestamp = (new Date).getTime(), this._onClickEvent.dispatch(this, e.SecuredTouchUtil.getSrcElement(t)), !this.delegate.collectBehavioralData(this.BEHAVIORAL_TYPE)) return;
                if (e.SecuredTouchPointerConfig.instance.countOnlyEventsList.has(t.type)) return void this.countEvent(t);
                this.updateInteraction(this.createMouseClickEvent(t.type, t)), this.dispatch()
            } catch (n) {
                e.STLogger.warn("error in " + t.type + " handler", n)
            }
        }, t.prototype.onMouseout = function(t) {
            try {
                if (this.lastMouseInteractionTimestamp = (new Date).getTime(), !this.delegate.collectBehavioralData(this.BEHAVIORAL_TYPE)) return;
                if (e.SecuredTouchPointerConfig.instance.countOnlyEventsList.has(t.type)) return void this.countEvent(t);
                this.updateInteraction(this.createMouseEvent(t.type, t));
                var n = t.relatedTarget || t.toElement;
                n && "HTML" !== n.nodeName || this.dispatch()
            } catch (n) {
                e.STLogger.warn("error in " + t.type + " handler", n)
            }
        }, t.prototype.onMouseEvent = function(t) {
            try {
                if (this.lastMouseInteractionTimestamp = (new Date).getTime(), !this.delegate.collectBehavioralData(this.BEHAVIORAL_TYPE)) return;
                if (e.SecuredTouchPointerConfig.instance.countOnlyEventsList.has(t.type)) return void this.countEvent(t);
                this.updateInteraction(this.createMouseEvent(t.type, t))
            } catch (n) {
                e.STLogger.warn("error in " + t.type + " handler", n)
            }
        }, t.prototype.onMouseClickEvent = function(t) {
            try {
                if (this.lastMouseInteractionTimestamp = (new Date).getTime(), !this.delegate.collectBehavioralData(this.BEHAVIORAL_TYPE)) return;
                if (e.SecuredTouchPointerConfig.instance.countOnlyEventsList.has(t.type)) return void this.countEvent(t);
                this.updateInteraction(this.createMouseClickEvent(t.type, t))
            } catch (n) {
                e.STLogger.warn("error in " + t.type + " handler", n)
            }
        }, t.prototype.countEvent = function(e) {
            this.counterGroupByType[e.type] = Number(this.counterGroupByType[e.type]) + 1 || 1
        }, t.prototype.start = function() {
            this._isStarted ? e.STLogger.debug("Desktop Mouse events already listening") : (e.SecuredTouchUtil.addEventListener(document, "click", this.onClickHandle), e.SecuredTouchUtil.addEventListener(document, "dblclick", this.onDblclickHandle), e.SecuredTouchUtil.addEventListener(document, "mousedown", this.onMousedownHandle), e.SecuredTouchUtil.addEventListener(document, "mousemove", this.onMousemoveHandle), e.SecuredTouchUtil.addEventListener(document, "mouseout", this.onMouseoutHandle), e.SecuredTouchUtil.addEventListener(document, "mouseover", this.onMouseoverHandle), e.SecuredTouchUtil.addEventListener(document, "mouseup", this.onMouseupHandle), e.SecuredTouchUtil.addEventListener(document, "wheel", this.onWheelHandle, this.wheelOptions), this.updateIntervalHandle = setInterval(this.interactionUpdateHandle, e.SecuredTouchPointerConfig.instance.updateInterval), this._isStarted = !0, e.STLogger.debug("Desktop Mouse events start listening..."))
        }, t.prototype.stop = function() {
            this._isStarted ? (document.removeEventListener("click", this.onClickHandle), document.removeEventListener("dblclick", this.onDblclickHandle), document.removeEventListener("mousedown", this.onMousedownHandle), document.removeEventListener("mousemove", this.onMousemoveHandle), document.removeEventListener("mouseout", this.onMouseoutHandle), document.removeEventListener("mouseover", this.onMouseoverHandle), document.removeEventListener("mouseup", this.onMouseupHandle), document.removeEventListener("wheel", this.onWheelHandle, this.wheelOptions), clearInterval(this.updateIntervalHandle), this.updateIntervalHandle = null, this._isStarted = !1, e.STLogger.debug("Desktop Mouse events stop listening...")) : e.STLogger.debug("Desktop Mouse events already stopped")
        }, t.prototype.clearBuffer = function() {
            var e = null;
            return this.lastMouseInteraction && (e = this.lastMouseInteraction), this.lastMouseInteraction = null, e
        }, t.prototype.isEmpty = function() {
            return !this.lastMouseInteraction
        }, t.prototype.createMouseEvent = function(t, n) {
            var i = e.SecuredTouchUtil.modifiersKeys(n);
            return {
                type: t,
                eventTs: n.timeStamp,
                epochTs: (new Date).getTime(),
                button: n.button,
                buttons: n.buttons,
                clientX: n.clientX,
                clientY: n.clientY,
                movementX: n.movementX,
                movementY: n.movementY,
                offsetX: n.offsetX,
                offsetY: n.offsetY,
                pageX: n.pageX,
                pageY: n.pageY,
                screenX: n.screenX,
                screenY: n.screenY,
                which: n.which,
                modifierKeys: i
            }
        }, t.prototype.createMouseClickEvent = function(t, n) {
            var i = this.createMouseEvent(t, n);
            if (n.target && e.SecuredTouchUtil.isFunction(n.target.getBoundingClientRect)) {
                var r = n.target.getBoundingClientRect();
                i.targetBottom = r.bottom, i.targetHeight = r.height, i.targetLeft = r.left, i.targetRight = r.right, i.targetTop = r.top, i.targetWidth = r.width, i.targetX = r.x, i.targetY = r.y
            }
            return i
        }, t
    }();
    e.SecuredTouchMouse = t
}(_securedTouchEntities || (_securedTouchEntities = {})),
function(e) {
    var t = function() {
        function t(e) {
            this.key = e
        }
        return Object.defineProperty(t.prototype, "asArray", {
            get: function() {
                var e = t.stSessionStorage.getItem(this.key);
                return e || (e = JSON.stringify([])), JSON.parse(e)
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "length", {
            get: function() {
                return this.asArray.length
            },
            enumerable: !0,
            configurable: !0
        }), t.prototype.push = function(n) {
            var i = this.asArray,
                r = i.push(n);
            return t.stSessionStorage.setItem(this.key, JSON.stringify(i)), t.stSessionStorage.setItem(e.SecuredTouchConstants.SESSION_STORAGE_UPDATE_TS, (new Date).getTime()), r
        }, t.prototype.concat = function(e) {
            var n = this.asArray.concat(e);
            return t.stSessionStorage.setItem(this.key, JSON.stringify(n)), this
        }, t.prototype.clear = function() {
            t.stSessionStorage.removeItem(this.key)
        }, t.stSessionStorage = e.SecuredTouchSessionStorage.instance.sessionStorage, t
    }();
    e.SecuredTouchStorageArray = t
}(_securedTouchEntities || (_securedTouchEntities = {})),
function(e) {
    var t = function() {
        function t() {
            this.config = {}, this.cacheHash = 0, this.cache = new Map
        }
        return t.prototype.refreshConfig = function(t) {
            try {
                if (!t) return;
                var n = e.SecuredTouchUtil.hashCode(t);
                if (this.cacheHash === n) return;
                this.config = JSON.parse(t), this.cacheHash = n, this.cache = new Map
            } catch (t) {
                e.STLogger.warn("Failed to set css selectors", t)
            }
        }, t.prototype.getMatchingTags = function(t, n) {
            var i = this.cache.get(t);
            if (i) return i;
            var r = {};
            for (var o in this.config) try {
                if (!this.config.hasOwnProperty(o)) continue;
                var a = this.config[o].selector || [];
                e.SecuredTouchUtil.isArray(a) || (a = [].concat(a));
                for (var s = 0, c = a; s < c.length; s++) {
                    var u = c[s];
                    e.SecuredTouchUtil.isSelectorMatches(t, u, n) && (r[o] = this.config[o])
                }
            } catch (t) {
                e.STLogger.warn("Failed to get the config for " + o + " tag", t)
            }
            return this.cache.set(t, r), r
        }, t.prototype.getValue = function(t, n) {
            if (n && t) switch (n = n.trim(), t) {
                case "email_domain":
                    return e.SecuredTouchUtil.getEmailDomain(n);
                case "obfuscate":
                    return "" + e.SecuredTouchUtil.mod(n, 1e3);
                case "plain":
                    return n
            }
            return ""
        }, t
    }();
    e.SecuredTouchTagsIdentifications = t
}(_securedTouchEntities || (_securedTouchEntities = {})),
function(e) {
    var t = function() {
        function t() {
            this._reduceFactorMap = null, this._reduceMapHashCode = 0, this._snapshotsReduceFactor = 0
        }
        return Object.defineProperty(t.prototype, "reduceFactorMap", {
            set: function(t) {
                var n = e.SecuredTouchUtil.hashCode(t);
                this._reduceMapHashCode !== n && (this._reduceMapHashCode = n, this._reduceFactorMap = JSON.parse(t))
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "snapshotsReduceFactor", {
            get: function() {
                return this._snapshotsReduceFactor
            },
            set: function(e) {
                this._snapshotsReduceFactor = e
            },
            enumerable: !0,
            configurable: !0
        }), t.prototype.eventsWereReduced = function() {
            return 0 !== this._reduceMapHashCode
        }, t.prototype.reduceEvents = function(t) {
            var n = this;
            try {
                if (!t || 0 === t.length || !this._reduceFactorMap) return t;
                for (var i = new Map, r = [], o = 0; o < t.length; o++) i.get(t[o].type) ? i.get(t[o].type).push(o) : i.set(t[o].type, [o]);
                i.forEach(function(e, t) {
                    var i = n._reduceFactorMap[t] ? Number(n._reduceFactorMap[t]) : 0;
                    n.reduceByFactor(i, e, function(t) {
                        r[e[t]] = !0
                    })
                });
                var a = [];
                for (o = 0; o < t.length; o++) r[o] && a.push(t[o]);
                return t.length !== a.length && e.STLogger.debug(t.length - a.length + " events reduced out of " + t.length), a
            } catch (n) {
                return e.STLogger.warn("Failed to reduce events", n), t
            }
        }, t.prototype.reduceSnapshots = function(t) {
            try {
                if (!t || 0 === t.length || 0 === this._snapshotsReduceFactor) return t;
                var n = [];
                return this.reduceByFactor(this._snapshotsReduceFactor, t, function(e) {
                    n.push(t[e])
                }), e.STLogger.debug(t.length - n.length + " snapshots reduced out of " + t.length), n
            } catch (n) {
                return e.STLogger.warn("Failed to reduce events", n), t
            }
        }, t.prototype.reduceByFactor = function(e, t, n) {
            e = Math.min(e, 1);
            for (var i = Math.round(Math.max(t.length * (1 - e), 2)), r = (t.length - 1) / (i - 1), o = Math.min(t.length, i), a = 0; a < o; a++) {
                n(Math.round(a * r))
            }
        }, t
    }();
    e.SecuredTouchReduceFactor = t
}(_securedTouchEntities || (_securedTouchEntities = {})),
function(e) {
    var t = function(t) {
        function n(n, i) {
            var r = t.call(this, n, i) || this;
            return r.capturedKeyboardInteractions = new e.SecuredTouchStorageArray(e.SecuredTouchConstants.CAPTURED_KEYBOARD_INTERACTIONS), r.capturedMouseInteractions = new e.SecuredTouchStorageArray(e.SecuredTouchConstants.CAPTURED_MOUSE_INTERACTIONS), r.capturedGestures = new e.SecuredTouchStorageArray(e.SecuredTouchConstants.CAPTURED_GESTURES), r.capturedIndirectEvents = new e.SecuredTouchStorageArray(e.SecuredTouchConstants.CAPTURED_INDIRECT), r.indirectCounters = {}, r.tagsIdentifications = new e.SecuredTouchElementsIdentifications, r.tagsWithValueIdentifications = new e.SecuredTouchTagsIdentifications, r.reduceFactorManager = new e.SecuredTouchReduceFactor, r.payloadIndex = 0, r.totalMouseCounter = 0, r.totalKeyboardCounter = 0, r.totalGestureCounter = 0, r.lastGestureTimestamp = 0, r.currentBufferSize = 0, r.interactionFailuresCounter = 0, r.keyboard = new e.SecuredTouchKeyboard(r), r.keyboard.onInteraction.subscribe(r.handleKeyboardInteraction.bind(r)), r.keyboard.onEnterPress.subscribe(r.handleStTagOnEnter.bind(r)), r.keyboard.onObfuscatedValue.subscribe(r.handleTagValueOnBlur.bind(r)), r.mouse = new e.SecuredTouchMouse(r), r.mouse.onInteraction.subscribe(r.handleMouseInteraction.bind(r)), r.mouse.onClickEvent.subscribe(r.handleStTagOnClick.bind(r)), r.sensors = new e.SecuredTouchSensors(r), r.gesture = new e.SecuredTouchGestureEvents(r, r.sensors), r.gesture.onGesture.subscribe(r.handleGesture.bind(r)), r.indirect = new e.SecuredTouchIndirectClient(r), r.indirect.onIndirect.subscribe(r.handleIndirect.bind(r)), r.indirect.onWindowDispose.subscribe(r.handleWindowDispose.bind(r)), r.onUrlChangeHandler = r.onUrlChange.bind(r), r.onErrorHandler = r.onError.bind(r), r.sessionData.passedBufferTimeout && r.resetLists(), r
        }
        return __extends(n, t), n.prototype.dispose = function() {
            return __awaiter(this, void 0, void 0, function() {
                return __generator(this, function(e) {
                    return this.stopListening(), this.keyboard.onInteraction.unsubscribe(this.handleKeyboardInteraction.bind(this)), this.keyboard.onEnterPress.unsubscribe(this.handleStTagOnEnter.bind(this)), this.keyboard.onObfuscatedValue.unsubscribe(this.handleTagValueOnBlur.bind(this)), this.mouse.onInteraction.unsubscribe(this.handleMouseInteraction.bind(this)), this.mouse.onClickEvent.unsubscribe(this.handleStTagOnClick.bind(this)), this.gesture.onGesture.unsubscribe(this.handleGesture.bind(this)), this.indirect.unsubscribe(), this.indirect.onIndirect.unsubscribe(this.handleIndirect.bind(this)), this.indirect.onWindowDispose.unsubscribe(this.handleWindowDispose.bind(this)), this.clearMouseBuffer(), this.clearIndirectBuffer(), this.sessionData.lastDisposedPayload = this.createInteractionsPayload(), [2]
                })
            })
        }, n.prototype.collectBehavioralData = function(t) {
            if (this.isBehavioralDataPaused) return !1;
            var n = e.SecuredTouchPointerConfig.instance.behavioralBlacklist;
            return !(t && n && n[t]) || !Boolean(window.location.href.match(n[t]))
        }, n.prototype.isAboveBufferSize = function() {
            return this.currentBufferSize >= e.SecuredTouchPointerConfig.instance.bufferSize
        }, n.prototype.enrichMouseInteraction = function(e) {
            e.counter = this.totalMouseCounter++, this.enrichInteractionWithAdditionalData(e)
        }, n.prototype.addTagsWithValue = function(t) {
            var n = !1;
            for (var i in t) try {
                if (!t.hasOwnProperty(i)) continue;
                if (t[i].context && !Boolean(window.location.href.match(t[i].context))) continue;
                var r = "";
                if (t[i].operation && t[i].valueSelector) {
                    var o = document.querySelector(t[i].valueSelector);
                    if (o) {
                        var a = o instanceof HTMLInputElement ? o.value : o.innerText;
                        r = this.tagsWithValueIdentifications.getValue(t[i].operation, a)
                    }
                }
                this.addTag(i, r), n = !0
            } catch (t) {
                e.STLogger.warn("failed to add " + i + " tag", t)
            }
            return n
        }, n.prototype.handleStTagElement = function(t) {
            if (t) {
                var n = this.tagsWithValueIdentifications.getMatchingTags(t, e.SecuredTouchPointerConfig.instance.maxSelectorChildren),
                    i = this.addTagsWithValue(n),
                    r = e.SecuredTouchUtil.getAttribute(t, "data-st-tag"),
                    o = e.SecuredTouchUtil.getAttribute(t, "data-st-tag-value");
                r || i || (r = this.tagsIdentifications.getIdentification(t, e.SecuredTouchPointerConfig.instance.maxSelectorChildren)), r && this.addTag(r, o)
            }
        }, n.prototype.isClickableInput = function(e) {
            return e && ["button", "checkbox", "radio", "submit", "file", "reset"].indexOf(e.type) >= 0
        }, n.prototype.isTextInput = function(e) {
            return e && ["email", "number", "password", "search", "tel", "text", "url"].indexOf(e.type) >= 0
        }, n.prototype.handleStTagOnEnter = function(e, t) {
            t instanceof HTMLInputElement && this.isTextInput(t) && this.handleStTagElement(t)
        }, n.prototype.handleTagValueOnBlur = function(e, t) {
            t && this.addTag(t.fieldKey, t.obfuscatedValue)
        }, n.prototype.handleStTagOnClick = function(e, t) {
            t instanceof HTMLInputElement && !this.isClickableInput(t) || this.handleStTagElement(t)
        }, n.prototype.handleMouseInteraction = function(e, t) {
            this.isInitAndEnabled() && (t ? (this.addMouseInteractions(t), this.lastGestureTimestamp !== t.events[t.events.length - 1].eventTs && this.currentBufferSize++, this.isAboveBufferSize() && this.sendAllCapturedInteractions()) : this.sendHeartBeat())
        }, n.prototype.handleIndirect = function(e, t) {
            this.isInitAndEnabled() && (this.addIndirectEvents(t), this.isEmpty() && this.sendAllCapturedInteractions())
        }, n.prototype.handleWindowDispose = function(e, t) {
            this.isInitAndEnabled() && (this.addIndirectEvents(t), this.dispose())
        }, n.prototype.enrichKeyboardInteraction = function(e) {
            e.counter = this.totalKeyboardCounter++, this.enrichInteractionWithAdditionalData(e)
        }, n.prototype.handleKeyboardInteraction = function(e, t) {
            this.isInitAndEnabled() && (t ? (this.addKeyboardInteraction(t), this.currentBufferSize++, this.isAboveBufferSize() && this.sendAllCapturedInteractions()) : this.sendHeartBeat())
        }, n.prototype.handleGesture = function(e, t) {
            this.isInitAndEnabled() && (t ? (this.enrichInteractionWithAdditionalData(t), t.counter = this.totalGestureCounter++, this.reduceGestureSnapshots(t), this.capturedGestures.push(t), this.currentBufferSize++, this.lastGestureTimestamp = t.snapshots.length > 0 ? t.snapshots[t.snapshots.length - 1].additionalData.eventTimeStamp : t.timestamp, this.sensors.onGesture(t), this.isAboveBufferSize() && this.sendAllCapturedInteractions()) : this.sendHeartBeat())
        }, n.prototype.clearMouseBuffer = function() {
            var e = this.mouse.clearBuffer();
            e && this.addMouseInteractions(e)
        }, n.prototype.clearIndirectBuffer = function() {
            var e = this.indirect.clearBuffer();
            this.addIndirectEvents(e)
        }, n.prototype.clearKeyboardBuffer = function() {
            for (var e = 0, t = this.keyboard.clearBuffer(); e < t.length; e++) {
                var n = t[e];
                n && this.addKeyboardInteraction(n)
            }
        }, n.prototype.clearBuffer = function() {
            this.clearKeyboardBuffer(), this.clearMouseBuffer(), this.clearIndirectBuffer()
        }, n.prototype.addMouseInteractions = function(e) {
            this.enrichMouseInteraction(e), this.reduceMouseInteraction(e), this.capturedMouseInteractions.push(e)
        }, n.prototype.addKeyboardInteraction = function(e) {
            this.enrichKeyboardInteraction(e), this.reduceKeyboardInteraction(e), this.capturedKeyboardInteractions.push(e)
        }, n.prototype.addIndirectEvents = function(e) {
            e && e.events && e.events.length > 0 && this.capturedIndirectEvents.concat(e.events), e && e.eventCounters && this.addIndirectCounters(e.eventCounters)
        }, n.prototype.addIndirectCounters = function(e) {
            for (var t in e) e.hasOwnProperty(t) && (this.indirectCounters[t] = e[t] + (this.indirectCounters[t] || 0))
        }, n.prototype.reduceIndirectEvents = function(e) {
            return this.reduceFactorManager.reduceEvents(e)
        }, n.prototype.reduceMouseInteraction = function(e) {
            e.events = this.reduceFactorManager.reduceEvents(e.events)
        }, n.prototype.reduceKeyboardInteraction = function(e) {
            e.events = this.reduceFactorManager.reduceEvents(e.events)
        }, n.prototype.reduceGestureSnapshots = function(e) {
            e.snapshots = this.reduceFactorManager.reduceSnapshots(e.snapshots)
        }, n.prototype.isEmpty = function() {
            return 0 === this.capturedKeyboardInteractions.length && 0 === this.capturedMouseInteractions.length && 0 === this.capturedGestures.length && this.gesture.isEmpty() && this.keyboard.isEmpty() && this.mouse.isEmpty()
        }, n.prototype.forceSendCapturedEvents = function(e) {
            return this.clearMouseBuffer(), this.sendAllCapturedInteractions(e)
        }, n.prototype.onUrlChange = function() {
            e.SecuredTouchPointerConfig.instance.sendLocation && this.addTag("location", window.location.href)
        }, n.prototype.onError = function(t) {
            try {
                var n = t.colno,
                    i = t.filename,
                    r = t.lineno,
                    o = t.message || "",
                    a = t.error || {};
                i && i.toLowerCase().indexOf("securedtouch") >= 0 && this.sendRemoteLog(e.SecuredTouchErrorCodes.E_6000, "Unhandled error " + o, {
                    colNumber: n,
                    lineNumber: r,
                    stack: a.stack || ""
                })
            } catch (t) {
                e.STLogger.warn("error in error handler", t)
            }
        }, n.prototype.refreshListening = function() {
            if (this.sessionData.initST) {
                var t = e.SecuredTouchPointerConfig.instance;
                if (this.tagsIdentifications.refreshCssSelectors(t.tagsCssSelectors), this.tagsWithValueIdentifications.refreshConfig(t.tagsConfig), this.reduceFactorManager.reduceFactorMap = t.eventsReduceFactorMap, this.reduceFactorManager.snapshotsReduceFactor = t.snapshotsReduceFactor, this.keyboard.refreshKeyboardCssSelectors(t.cssSelectors), this.keyboard.refreshObfuscatedValues(t.obfuscatedValues), this.sensors.maxSensorSamples = t.maxSensorSamples, this.sensors.sensorsTimestampDeltaInMillis = t.sensorsTimestampDeltaInMillis, this.isEnabled()) {
                    this.mouse.start(), this.keyboard.start(), this.gesture.start(), this.indirect.start(), 0 == t.maxSensorSamples ? this.sensors.stop() : this.sensors.start();
                    var n = this.sessionData.lastDisposedPayload;
                    n && this.sendInteractions(n), e.SecuredTouchUtil.addEventListener(window, "_onlocationchange", this.onUrlChangeHandler), e.SecuredTouchUtil.addEventListener(window, "popstate", this.onUrlChangeHandler), e.SecuredTouchUtil.addEventListener(window, "error", this.onErrorHandler)
                } else this.stopListening(), e.STLogger.info("Securedtouch is disabled.")
            } else this.tryRecconect()
        }, n.prototype.stopListening = function() {
            this.keyboard.stop(), this.mouse.stop(), this.gesture.stop(), this.indirect.stop(), this.sensors.stop(), window.removeEventListener("_onlocationchange", this.onUrlChangeHandler), window.removeEventListener("popstate", this.onUrlChangeHandler), window.removeEventListener("error", this.onErrorHandler)
        }, n.prototype.resetLists = function() {
            this.capturedKeyboardInteractions.clear(), this.capturedMouseInteractions.clear(), this.capturedGestures.clear(), this.capturedIndirectEvents.clear(), this.indirectCounters = {}, this.sensors.reset(), e.SecuredTouchTags.instance.reset(), this.currentBufferSize = 0
        }, n.prototype.setUsernameToPayload = function(e) {
            var t = this.sessionData.getUsername();
            e.username = t || this.sessionData.getDeviceCredentials().deviceId, e.keyboardInteractionPayloads.forEach(function(e) {
                e.identified = Boolean(t)
            }), e.mouseInteractionPayloads.forEach(function(e) {
                e.identified = Boolean(t)
            }), e.gestures.forEach(function(e) {
                e.identified = Boolean(t)
            })
        }, n.prototype.isValidGestures = function() {
            return this.capturedGestures && this.capturedGestures.length > 0 && this.capturedGestures.length < e.SecuredTouchPointerConfig.instance.maxSnapshotsCount
        }, n.prototype.createInteractionsPayload = function() {
            var t = {
                applicationId: this.startParams.appId,
                deviceId: this.sessionData.getDeviceCredentials().deviceId,
                deviceType: this.stMetadata.deviceType,
                appSessionId: this.sessionData.appSessionId,
                stToken: this.getStToken(),
                keyboardInteractionPayloads: this.capturedKeyboardInteractions.asArray,
                mouseInteractionPayloads: this.capturedMouseInteractions.asArray,
                indirectEventsPayload: this.reduceIndirectEvents(this.capturedIndirectEvents.asArray),
                indirectEventsCounters: this.indirectCounters,
                gestures: this.isValidGestures() ? this.capturedGestures.asArray : [],
                metricsData: e.SecuredTouchMetrics.instance.getMetricsData(this.payloadIndex),
                accelerometerData: this.sensors.accelerometerList,
                gyroscopeData: this.sensors.gyroscopeList,
                linearAccelerometerData: this.sensors.linearAccelerometerList,
                rotationData: this.sensors.getRotationListCopy(),
                index: this.payloadIndex,
                payloadId: e.SecuredTouchUtil.newGuid(),
                modes: this.modes,
                tags: e.SecuredTouchTags.instance.getTagsCopy(),
                environment: this.getEnvironmentData(),
                isMobile: e.SecuredTouchUtil.isMobile,
                usernameTs: this.sessionData.usernameTs,
                username: ""
            };
            return this.payloadIndex++, this.resetLists(), this.setUsernameToPayload(t), t
        }, n.prototype.sendAllCapturedInteractions = function(t) {
            var n = this,
                i = Promise.resolve();
            return this.isEnabled() && (t || this.isAboveBufferSize() || e.SecuredTouchTags.instance.tags && e.SecuredTouchTags.instance.tags.length > 0 ? (this.clearIndirectBuffer(), i = this.sendInteractions(this.createInteractionsPayload())) : this.resetLists()), i.catch(function(t) {
                n.sendRemoteLog(e.SecuredTouchErrorCodes.E_5001, "failed to queue or create payload", t)
            })
        }, n.prototype.sendInteractions = function(t) {
            var n = this;
            return this.lastPayloadTimestamp = (new Date).getTime(), this.dataRepository.sendInteractions(t).then(function(e) {
                e && e.clientDigest && n.updateDigest(e.clientDigest), n.interactionFailuresCounter = 0
            }).catch(function(t) {
                e.STLogger.warn("Failed to send Interactions", t), ++n.interactionFailuresCounter >= e.SecuredTouchPointerConfig.instance.failuresAmountToReport && (n.interactionFailuresCounter = 0, n.sendRemoteLog(e.SecuredTouchErrorCodes.E_5000, "missed multiple interactions", t))
            })
        }, n.prototype.enrichInteractionWithAdditionalData = function(t) {
            try {
                var n = t.additionalData || {};
                this.addCommonAdditionalData(n), this.addWidthAndHeight(n), n.deviceCategory = this.stMetadata.deviceCategory, n.snapshotsReduceFactor = this.reduceFactorManager.snapshotsReduceFactor, n.eventsWereReduced = this.reduceFactorManager.eventsWereReduced(), t.additionalData = n
            } catch (t) {
                e.STLogger.warn("Failed to enrich interactions", t)
            }
        }, n.prototype.addWidthAndHeight = function(e) {
            e.innerWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth, e.innerHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight, e.outerWidth = window.outerWidth, e.outerHeight = window.outerHeight
        }, n
    }(e.SecuredTouchClientBase);
    e.SecuredTouchClient = t
}(_securedTouchEntities || (_securedTouchEntities = {}));
var _securedTouch = function() {
    function e() {}
    return Object.defineProperty(e, "isLogEnabled", {
        get: function() {
            return _securedTouchEntities.STLogger.isLogEnabled
        },
        set: function(e) {
            _securedTouchEntities.STLogger.isLogEnabled = e
        },
        enumerable: !0,
        configurable: !0
    }), e.login = function(e, t) {
        return _securedTouchEntities.SecuredTouchClientBase.instance().login(e, t)
    }, e.logout = function(e) {
        return _securedTouchEntities.SecuredTouchClientBase.instance().logout(e)
    }, e.addTag = function(e, t) {
        return _securedTouchEntities.SecuredTouchClientBase.instance().addTag(e, t), this
    }, e.setTag = function(e, t) {
        return _securedTouchEntities.SecuredTouchClientBase.instance().addTag(e, t), Promise.resolve()
    }, e.setSessionId = function(e) {
        _securedTouchEntities.SecuredTouchClientBase.instance().setAppSessionId(e)
    }, e.getSessionId = function() {
        return _securedTouchEntities.SecuredTouchSessionStorage.instance.appSessionId
    }, e.pauseSecuredTouch = function() {
        _securedTouchEntities.SecuredTouchClientBase.instance().pauseSecuredTouch()
    }, Object.defineProperty(e, "isRunning", {
        get: function() {
            return _securedTouchEntities.SecuredTouchClientBase.instance().isRunning()
        },
        enumerable: !0,
        configurable: !0
    }), e.resumeSecuredTouch = function() {
        _securedTouchEntities.SecuredTouchClientBase.instance().resumeSecuredTouch()
    }, e.pauseBehavioralData = function() {
        _securedTouchEntities.SecuredTouchClientBase.instance().pauseBehavioralData()
    }, e.resumeBehavioralData = function() {
        _securedTouchEntities.SecuredTouchClientBase.instance().resumeBehavioralData()
    }, e.flush = function() {
        return _securedTouchEntities.SecuredTouchClientBase.instance().flush()
    }, e.init = function(e) {
        return _securedTouchEntities.SecuredTouchUtil.ieFix(), _securedTouchEntities.SecuredTouchClientBase.instance().startST(e)
    }, e
}();
window._securedTouch = _securedTouch;
var onDomReady = function(e) {
        "loading" !== document.readyState ? e() : document.addEventListener("DOMContentLoaded", e)
    },
    _securedTouchEntities;
onDomReady(function() {
        var e = new CustomEvent("SecuredTouchReadyEvent");
        document.dispatchEvent(e), window._securedTouchReady = !0
    }),
    function(e) {
        var t = function() {
            function t(e) {
                this.propertyBlackList = e
            }
            return t.prototype.test = function(t, n, i) {
                return __awaiter(this, void 0, void 0, function() {
                    var r, o;
                    return __generator(this, function(a) {
                        switch (a.label) {
                            case 0:
                                return a.trys.push([0, 3, , 4]), this.propertyBlackList.has(n) ? [3, 2] : [4, e.SecuredTouchUtil.promiseTimeout(1500, i())];
                            case 1:
                                null != (r = a.sent()) && (t[n] = r), a.label = 2;
                            case 2:
                                return [3, 4];
                            case 3:
                                return o = a.sent(), e.STLogger.warn(n + " headless test was failed", o), [3, 4];
                            case 4:
                                return [2]
                        }
                    })
                })
            }, t.prototype.headlessResults = function(e) {
                return __awaiter(this, void 0, void 0, function() {
                    var t, n, i = this;
                    return __generator(this, function(r) {
                        switch (r.label) {
                            case 0:
                                return t = new Map, (n = []).push(this.test(t, "headless_chrome", function() {
                                    return __awaiter(i, void 0, void 0, function() {
                                        return __generator(this, function(t) {
                                            return [2, /HeadlessChrome/.test(e.navigator.userAgent)]
                                        })
                                    })
                                })), n.push(this.test(t, "navigator.webdriver_present", function() {
                                    return __awaiter(i, void 0, void 0, function() {
                                        return __generator(this, function(t) {
                                            return [2, "webdriver" in e.navigator]
                                        })
                                    })
                                })), n.push(this.test(t, "window.chrome_missing", function() {
                                    return __awaiter(i, void 0, void 0, function() {
                                        return __generator(this, function(t) {
                                            return [2, /Chrome/.test(e.navigator.userAgent) && !e.chrome]
                                        })
                                    })
                                })), n.push(this.test(t, "permissions_api", function() {
                                    return __awaiter(i, void 0, void 0, function() {
                                        var t;
                                        return __generator(this, function(n) {
                                            switch (n.label) {
                                                case 0:
                                                    return e.navigator.permissions && e.Notification ? [4, e.navigator.permissions.query({
                                                        name: "notifications"
                                                    })] : [3, 2];
                                                case 1:
                                                    return t = n.sent(), [2, "denied" === e.Notification.permission && "prompt" === t.state];
                                                case 2:
                                                    return [2]
                                            }
                                        })
                                    })
                                })), n.push(this.test(t, "permissions_api_overriden", function() {
                                    return __awaiter(i, void 0, void 0, function() {
                                        var t;
                                        return __generator(this, function(n) {
                                            return (t = e.navigator.permissions) ? "function query() { [native code] }" !== t.query.toString() ? [2, !0] : "function toString() { [native code] }" !== t.query.toString.toString() ? [2, !0] : t.query.toString.hasOwnProperty("[[Handler]]") && t.query.toString.hasOwnProperty("[[Target]]") && t.query.toString.hasOwnProperty("[[IsRevoked]]") ? [2, !0] : [2, t.hasOwnProperty("query")] : [2]
                                        })
                                    })
                                })), n.push(this.test(t, "navigator.plugins_empty", function() {
                                    return __awaiter(i, void 0, void 0, function() {
                                        return __generator(this, function(e) {
                                            return [2, 0 === navigator.plugins.length]
                                        })
                                    })
                                })), n.push(this.test(t, "navigator.languages_blank", function() {
                                    return __awaiter(i, void 0, void 0, function() {
                                        return __generator(this, function(e) {
                                            return [2, "" === navigator.languages]
                                        })
                                    })
                                })), [4, Promise.all(n)];
                            case 1:
                                return r.sent(), [2, t]
                        }
                    })
                })
            }, t.prototype.getHeadlessResults = function() {
                return __awaiter(this, void 0, void 0, function() {
                    var t, n = this;
                    return __generator(this, function(i) {
                        switch (i.label) {
                            case 0:
                                return [4, this.headlessResults(window)];
                            case 1:
                                return t = i.sent(), [4, this.test(t, "iframe_window", function() {
                                    return __awaiter(n, void 0, void 0, function() {
                                        var t, n;
                                        return __generator(this, function(i) {
                                            switch (i.label) {
                                                case 0:
                                                    return Object.getOwnPropertyDescriptors && (t = e.SecuredTouchUtil.createInvisibleElement("iframe")) ? (t.srcdoc = "page intentionally left blank", document.body.appendChild(t), "function get contentWindow() { [native code] }" !== Object.getOwnPropertyDescriptors(HTMLIFrameElement.prototype).contentWindow.get.toString() ? [2, !0] : t.contentWindow === window ? [2, !0] : [4, this.headlessResults(t.contentWindow)]) : [2];
                                                case 1:
                                                    return n = i.sent(), t.remove(), [2, n]
                                            }
                                        })
                                    })
                                })];
                            case 2:
                                return i.sent(), [2, t]
                        }
                    })
                })
            }, t
        }();
        e.SecuredTouchDetectHeadless = t
    }(_securedTouchEntities || (_securedTouchEntities = {}));

// SECUREDTOUCH INC. 
// � ALL RIGHTS RESERVED 
//Build: 32  Tue Jun 29 2021 11:24:23 GMT+0000 (Coordinated Universal Time) 
