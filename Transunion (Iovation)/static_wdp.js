/*
 Copyright(c) 2023 TransUnion LLC. All Rights Reserved. 80808bae-d4c3-47ac-9929-5d77264d823c
*/
(function() {
    (function Za() {
        function $a() {
            var a = {
                optional: [{
                    RtpDataChannels: !0
                }]
            }, b;
            if (b = "function" === typeof v.RTCPeerConnection && v.RTCPeerConnection || "function" === typeof v.mozRTCPeerConnection && v.mozRTCPeerConnection || "function" === typeof v.webkitRTCPeerConnection && v.webkitRTCPeerConnection) {
                f.add("RTCT", b.name);
                var c = Fa();
                try {
                    if (c && c.ua) {
                        var d = new b(c.ua,a);
                        d.onicecandidate = function(g) {
                            var k = c.cb;
                            g && g.target && g.target.localDescription && g.target.localDescription.sdp && (g = g.target.localDescription.sdp) && (g = z.encode(I.Y(g.substring(0, 2E3))),
                            f.add("RTCSDP", g),
                            f.add("RTCH", k))
                        }
                        ;
                        d.onerror = Ga;
                        d.createDataChannel("");
                        d.createOffer && 0 === d.createOffer.length ? d.createOffer().then(function(g) {
                            "object" === typeof g && d.setLocalDescription(g).then(function() {}).catch(Ha)
                        }).catch(Ia) : d.createOffer && d.createOffer(function(g) {
                            "object" === typeof g && d.setLocalDescription(g, function() {}, Ha)
                        }, Ia)
                    } else
                        f.add("RTCERR", "RTCOptions failed to generate")
                } catch (g) {
                    f.add("RTCERR", t("pmc: ", g, !0))
                }
            } else
                try {
                    if (v.RTCIceGatherer) {
                        c = Fa();
                        var e = new v.RTCIceGatherer(c);
                        f.add("RTCT", "RTCIceGatherer");
                        e.onlocalcandidate = function(g) {
                            g.candidate && (Ja += JSON.stringify(g.candidate) + ";",
                            f.add("ORTCC", Ja))
                        }
                        ;
                        e.onerror = Ga
                    }
                } catch (g) {
                    f.add("RTCERR", t("rtcig: ", g, !0))
                }
        }
        function Ga(a) {
            f.add("RTCERR", a ? "onerror: " + a : "onerror")
        }
        function Ha(a) {
            f.add("RTCERR", a ? "sld: " + a : "sld")
        }
        function Ia(a) {
            f.add("RTCERR", a ? "co: " + a : "co")
        }
        function Fa() {
            if (m[l.Aa]) {
                var a = m[l.Aa].split(",");
                if (1 < a.length) {
                    var b = Math.floor(Math.random() * a.length);
                    a = a[b]
                } else
                    a = a[0];
                if (a) {
                    var c = {
                        iceServers: [{}]
                    };
                    var d = c.iceServers[0];
                    b = a.split("@");
                    if (1 < b.length) {
                        var e = z.decode(b[0]);
                        e[1] ? (d.username = e[0],
                        d.credential = e[1]) : e[0] && (d.credential = e[0]);
                        d.urls = b[1]
                    } else
                        d.urls = b[0]
                }
            }
            return {
                ab: a,
                ua: c
            }
        }
        function ab() {
            var a = !1;
            J.readyState && "loaded" !== J.readyState && "complete" !== J.readyState && "interactive" !== J.readyState || (oa() || 30 < Ka ? (ba.Ra && ba.Ua(),
            a = !0) : Ka++);
            return a
        }
        function pa(a, b) {
            var c = !1;
            "string" === typeof a && "object" === typeof b && (ca.push(a),
            wa[a] = b,
            c = !0);
            return c
        }
        function La(a) {
            var b = {
                isUnex: !0,
                scriptList: ""
            }, c, d, e = "static" === a;
            a = da;
            e && (qa = document.URL.split("/").splice(0, 3).join("/"));
            try {
                var g = (qa + "/").replace(/\/+$/, "/");
                var k = g.match(/^(http|https):\/\/([^:\/]+)(:[0-9]+)?(\/.*)$/);
                var p = k[1];
                var h = k[2].replace(/\./g, "\\.");
                var F = k[3] && ":80" !== k[3] && ":443" !== k[3] ? k[3] : "";
                var q = "^(" + p + ":)?//" + h + F + "/";
                var D = e ? "([^\\?]*\\/)?(static_)?(wdp)\\.js(\\?.*)?$" : "([^\\?]*\\/)?(dyn_)?wdp\\.js(\\?.*)?$";
                var G = new RegExp(q + D);
                D = new RegExp("^" + D);
                var N = document.getElementsByTagName("script");
                for (c = 0; c < N.length; c++)
                    if (d = N.item(c).getAttribute("src") || "") {
                        var C = d.split(":")[0];
                        "https" === C ? d = d.replace(":443/", "/") : "http" === C ? d = d.replace(":80/", "/") : C = "";
                        G.test(d) ? b.isUnex = !1 : qa && /^(?!(https?:)?\/\/).*$/i.test(d) && D.test(d) ? b.isUnex = !1 : D.test(d) && 0 > d.indexOf(a) && (b.scriptList += d.split("?")[0] + ";")
                    }
                b.scriptList = b.scriptList.replace(/;$/, "")
            } catch (B) {
                t("", B, !0)
            }
            return b
        }
        function Ma(a) {
            if (!f.g.ORPY) {
                var b = x.round(a.gamma, 4)
                  , c = x.round(a.beta, 4)
                  , d = x.round(a.alpha, 4);
                (b || 0 === b || c || 0 === c || d || 0 === d) && f.add("ORPY", b + ";" + c + ";" + d)
            }
            f.g.CMPAS || (b = x.round(a.$a || a.webkitCompassHeading, 4),
            a = x.round(a.Za || a.webkitCompassAccuracy, 4),
            (b || a) && f.add("CMPAS", (b + ";" + a).toString()));
            f.g.ORPY && f.g.CMPAS && U("deviceorientation", Ma)
        }
        function Na(a) {
            if (!f.g.AXEL && a && a.accelerationIncludingGravity) {
                var b = x.round(a.accelerationIncludingGravity.x, 4)
                  , c = x.round(a.accelerationIncludingGravity.y, 4)
                  , d = x.round(a.accelerationIncludingGravity.z, 4);
                (b || 0 === b || c || 0 === c || d || 0 === d) && f.add("AXEL", b + ";" + c + ";" + d)
            }
            !f.g.AXINT && a && a.interval && f.add("AXINT", x.round(a.interval, 2).toString());
            f.g.AXEL && f.g.AXINT && U("devicemotion", Na)
        }
        function bb() {
            if (navigator.getBattery)
                navigator.getBattery().then(function(b) {
                    b && b.level && f.add("BATL", b.level.toString())
                });
            else {
                var a = navigator.h || navigator.D || navigator.v;
                a && void 0 !== a.level && f.add("BATL", a.level.toString())
            }
        }
        function cb(a, b) {
            function c(d) {
                !f.g[b] && d && (f.add(b, (d.isTrusted || "undefined").toString()),
                U(a, c))
            }
            L(a, c)
        }
        function ra(a) {
            var b = "", c, d = a ? "cr" : "mr";
            try {
                if (a && v.Uint16Array && v.crypto) {
                    var e = new v.Uint16Array(8);
                    v.crypto.getRandomValues(e)
                } else
                    for (e = [],
                    c = 0; 8 > c; c++)
                        e.push(Math.floor(4096 * (1 + Math.random())));
                b = T(e[0]) + T(e[1]) + "-" + T(e[2]) + "-" + T(e[3]) + "-" + T(e[4]) + "-" + T(e[5]) + T(e[6]) + T(e[7])
            } catch (g) {
                t(d + " guid:", g, !0)
            }
            return b
        }
        function T(a) {
            a = "0000" + a.toString(16);
            return a.substr(a.length - 4)
        }
        function db() {
            var a = m.secure_websockets ? "wss:" : "ws:";
            xa = setTimeout(V, 5E3);
            try {
                if (v.WebSocket) {
                    var b = da.replace(/http(s)?:\/\//i, a + "//") + "/star";
                    var c = new v.WebSocket(b);
                    c.onmessage = function(e) {
                        e && e.data && e.target.close ? (f.add("WSTRIP", e.data.toString(), !0),
                        e.target.close()) : V()
                    }
                    ;
                    c.onerror = function(e) {
                        Oa = !0;
                        e && e.data && e.target.close ? e.target.close() : V();
                        t(z.decode("V1NUUklQIEVycm9yIEhhbmRsZXIgRmlyZWQ="), void 0, !0)
                    }
                    ;
                    c.onclose = function(e) {
                        if (e && Oa) {
                            var g = e.reason ? ": " + e.reason : "";
                            f.add("WSERR", e.code.toString() + g);
                            t(z.decode("V1NUUklQIFNvY2tldCBDbG9zaW5nIHcvIGNvZGUgLSA=") + e.code + g, void 0, !0)
                        }
                        V()
                    }
                } else {
                    var d = z.decode("d2luZG93LldlYlNvY2tldCBub3QgZGVmaW5lZA==");
                    f.add("WSERR", d);
                    V();
                    t(d, void 0, !0)
                }
            } catch (e) {
                c && c.close(),
                f.add("WSERR", t(z.decode("V1NUUklQIENhdGNoIFRyaWdnZXJlZDo="), e, !0)),
                V()
            }
        }
        function V() {
            xa && clearTimeout(xa);
            P.pa = !0;
            P.l = P.j && P.pa
        }
        function Pa(a) {
            try {
                var b = document.getElementsByTagName("head")[0]
                  , c = document.createElement("audio");
                ya = setTimeout(ia, 5E3);
                if (a) {
                    var d = "fp_ee746445-19b1-4818-9781-cc525c47b6de";
                    var e = "data:audio/mpeg;base64,/+NIZ" + R("A", 23) + "WGluZwAAAA8AAAAAAAACQAB" + R("AQEB", 7) + "AQEC" + R("AgIC", 8) + R("AwMD", 8) + "AwP" + R("/", 32) + "8AAAAKTEFNRTMuOThyBCgAAAAAAAAAABQIJAbALQABmgAAAkDGbPj" + R("A", 149) + "/+MYZAAAAAGkAAAAAAAAA0gAAAAATEFNRTMuOTguMl" + R("V", 54) + "/+MYZDMAAAGkAAAAAAAAA0gAAAAA" + R("V", 68) + "/+MYZGYAAAGkAAAAAAAAA0gAAAAA" + R("V", 68)
                } else
                    d = "fp_67f84468-5d35-41ea-945f-b0efd4e01d13",
                    e = da + m[l.ta] + "?nocache=" + Math.random().toString();
                if (b && c && da && (c.id = c.name = d,
                c.src = e,
                c.preload = "metadata",
                c.type = "audio/mp3",
                c.muted = !0,
                c.controls = !1,
                c.setAttribute)) {
                    var g = ja + ".fp." + l.va;
                    c.setAttribute("onloadedmetadata", g + "('" + d + "'," + !!a + ")");
                    b.appendChild(c)
                }
            } catch (k) {
                f.add("ATRIPERR", t("ATRIP init error:", k, !0)),
                ia()
            }
        }
        function R(a, b) {
            var c = "";
            a && "number" === typeof b && (c = Array(b + 1).join(a));
            return c
        }
        function ia() {
            ya && clearTimeout(ya);
            P.Fa = !0
        }
        function M(a) {
            var b = ""
              , c = ""
              , d = ""
              , e = ""
              , g = {};
            try {
                b = a.changedTouches.item(0).identifier
            } catch (E) {}
            try {
                c = 0 === a.button || a.button ? a.button : "";
                d = 0 === a.keyCode || a.keyCode ? a.keyCode : "";
                e = a.code || "";
                var k = b + ";" + c + ";" + d + ";" + e;
                if ("keydown" === a.type || "keyup" === a.type) {
                    var p = "kp";
                    g.M = "KEY"
                } else
                    "mousedown" === a.type || "mouseup" === a.type ? (p = "mc",
                    g.M = "CLICK") : "touchstart" === a.type || "touchend" === a.type ? (p = "tc",
                    g.M = "TOUCH") : p = a.type;
                if (p && -1 < p.toUpperCase().indexOf("MOVE"))
                    g.M = p.toUpperCase()[0] + "MOV";
                else if ("scroll" === p || "wheel" === p)
                    g.M = p.toUpperCase();
                S[p] || (S[p] = g);
                var h = S[p];
                h.I = (new Date).getTime();
                h.ga || (a.pointerType ? (f.g.PTYP || f.add("PTYP", a.pointerType),
                U("pointerdown", M),
                U("pointermove", M)) : (h.ga = h.I,
                h.isTrusted = a.isTrusted));
                if (/^(key|mouse)down$/.test(a.type) || "touchstart" === a.type)
                    h.H = "down",
                    h.fa = a.type.replace("down", "up");
                else if (/^(key|mouse)up$/.test(a.type) || "touchend" === a.type)
                    h.H = "up",
                    h.fa = a.type.replace("up", "down");
                h.count || (h.count = 0);
                S.ha && (S.la = !0);
                "wheel" !== p || 20 !== h.count + 1 || S.ha || (S.la = !1,
                S.ha = !0);
                var F = 20 > h.count || "scroll" === a.type && !S.la;
                if (F) {
                    if (h.H) {
                        b = !1;
                        try {
                            if ("" !== k)
                                if (h.i || (h.i = {}),
                                "down" === h.H)
                                    h.i[k] || (h.i[k] = []),
                                    h.T || (h.T = []),
                                    20 > h.i[k].length && h.i[k].push(h.I),
                                    b = !!(h.i[k] && 1 < h.i[k].length),
                                    b || (h.count += 1),
                                    20 > h.T.length ? (h.ca && !b && h.T.push(h.I - h.ca.time),
                                    1 === h.i[k].length && (h.ca = {
                                        time: h.I,
                                        id: k
                                    })) : (delete h.i,
                                    delete h.ca);
                                else if ("up" === h.H && h.i && h.i[k] && (h.P || (h.P = []),
                                20 > h.P.length && h.P.push(h.I - h.i[k][0]),
                                h.i)) {
                                    var q = h.i[k]
                                      , D = q.length;
                                    1 < D && (h.R || (h.R = []),
                                    20 > h.R.length && h.R.push(q[1] - q[0]),
                                    2 < D && (h.S || (h.S = []),
                                    20 > h.S.length && h.S.push(q[D - 1] - q[D - 2])));
                                    delete h.i[k]
                                }
                        } catch (E) {
                            t("hbde:", E, !0)
                        }
                    } else
                        h.count += 1;
                    "wheel" !== p && (h.H || "scroll" === p || (h.ya && (h.X || (h.X = []),
                    20 > h.X.length && h.X.push(h.I - h.ya)),
                    h.ya = h.I),
                    a.screenX && a.screenY && "up" !== h.H && (h.C || h.G || (h.C = [],
                    h.G = []),
                    20 > h.C.length && (h.C.push(a.screenX),
                    h.G.push(a.screenY))))
                } else
                    delete h.i,
                    delete h.ca,
                    U(a.type, M),
                    h.fa && U(h.fa, M),
                    Qa(h);
                if ("down" !== h.H) {
                    F && Qa(h);
                    if (h.P && 0 < h.P.length) {
                        var G = a.type[0].toUpperCase() + "DOWN";
                        f.add(G, Ra(h.P, 2))
                    }
                    if (h.T && 0 < h.T.length) {
                        var N = a.type[0].toUpperCase() + "BTWN";
                        f.add(N, Ra(h.T, 2))
                    }
                    if (h.R && 0 < h.R.length) {
                        var C = Math.round(x.ea(h.R));
                        f.add("KDEL", C.toString())
                    }
                    if (h.S && 0 < h.S.length) {
                        var B = Math.round(x.ea(h.S));
                        f.add("KREP", B.toString())
                    }
                }
            } catch (E) {
                t("re:", E, !0)
            }
        }
        function Qa(a) {
            try {
                if (a && a.M && a.ga && a.count) {
                    var b = a.ga - ka + ";" + a.isTrusted + ";" + a.count;
                    if (a.C && a.G) {
                        var c = x.round(x.K(a.C), 2);
                        var d = x.round(x.K(a.G), 2);
                        b += ";" + c + ";" + d;
                        if (a.X) {
                            var e = x.round(x.max(a.C), 2);
                            var g = x.round(x.max(a.G), 2);
                            var k = x.round(x.Ga({
                                C: a.C,
                                G: a.G
                            }), 4);
                            var p = Math.round(x.ea(a.X));
                            b += ";" + e + ";" + g + ";" + k + ";" + p
                        }
                    }
                    f.add(a.M, b)
                }
            } catch (h) {
                t("bfsss:", h, !0)
            }
        }
        function Ra(a, b) {
            var c = "";
            try {
                if (a && "number" === typeof b) {
                    var d = x.round(x.K(a), b);
                    var e = x.round(x.ea(a), b);
                    var g = x.round(x.ka(a), b);
                    c = d + ";" + e + ";" + g
                }
            } catch (k) {
                t("bsssfa:", k, !0)
            }
            return c
        }
        function Sa() {
            this.version = A.appVersion.trim();
            this.v = A.appName;
            this.D = void 0;
            this.h = [];
            this.Xa();
            "string" === typeof A.oscpu && 0 < A.oscpu.length ? this.U = A.oscpu : (this.U = A.platform,
            this.Wa());
            if (("string" !== typeof this.v || 1 > this.v.length) && this.D) {
                var a = this.D[0].split("/");
                a && (this.v = a[0],
                this.version = 1 < a.length ? a[1] : "")
            }
            this.Ta()
        }
        function Ta(a) {
            this.l = this.j = this.O = !1;
            this.name = "fp_" + a;
            this.h = "";
            this.label = "io_ls:" + a
        }
        function oa(a) {
            a = void 0 === a ? !1 : a;
            var b = !0;
            try {
                for (var c = ca.length, d = 0; d < c; d++) {
                    var e = wa[ca[d]];
                    if ("object" === typeof e && (!ba.Qa || e.Ea || a) && (!e.j || e.j && !e.O))
                        try {
                            e.aa()
                        } catch (g) {
                            e.j = !1,
                            t("performCollection: unable to complete handler setup", g, !0),
                            b = !1
                        }
                }
            } catch (g) {
                t("performCollection error:", g, !0)
            }
            return b && f.eb
        }
        function eb(a) {
            m[l.s] && (m[l.s] && J.getElementById(m[l.s]) ? J.getElementById(m[l.s]).value = a : t(l.za + '[ "' + l.s + '" ] or corresponding object is not defined', void 0, !0))
        }
        function la(a) {
            var b = /^(?:[A-Za-z0-9+\/]{4})*(?:[A-Za-z0-9+\/]{2}==|[A-Za-z0-9+\/]{3}=)?$/
              , c = !0;
            if (!a || "string" !== typeof a || 44 !== a.length && 50 !== a.length || !b.test(a))
                c = !1;
            return c
        }
        function za() {
            if (ka) {
                var a = (new Date).getTime();
                a = parseInt(a - ka, 10);
                f.add("JIFFY", a.toString());
                a = !0
            }
            return a
        }
        function L(a, b, c) {
            c = void 0 === c ? v : c;
            try {
                if (c && "string" === typeof a && "function" === typeof b) {
                    var d = m.ignore_events;
                    !d || d && -1 === d.indexOf(a) ? c.addEventListener ? c.addEventListener(a, b, sa) : c.attachEvent && c.attachEvent("on" + a, b) : d && -1 !== d.indexOf(a) && W(z.decode("ZXhjbHVkaW5nIA==") + a + z.decode("IGV2ZW50TGlzdGVuZXI="))
                }
            } catch (e) {
                t("", e, !0)
            }
        }
        function U(a, b, c) {
            if ((c = void 0 === c ? v : c) && "string" === typeof a && "function" === typeof b) {
                var d = m.ignore_events;
                if (!d || d && -1 === d.indexOf(a))
                    c.removeEventListener ? c.removeEventListener(a, b, sa) : c.detachEvent && c.detachEvent("on" + a, b)
            }
        }
        function Aa(a, b, c) {
            var d = !1;
            void 0 !== b && null !== b && (d = !0,
            "float" === c && isNaN(parseFloat(b)) || "int" === c && isNaN(parseInt(b, 10)) || "id" === c && !J.getElementById(b.toString()) || "Array" === c && b.constructor !== Array || c === l.B && typeof b !== l.B) && (d = !1,
            t('config "' + a + '" with a value of "' + b + '" did not match expected type of "' + c + '" or referenced element did not exist.', "", !0));
            return d
        }
        function t(a, b, c) {
            var d = ""
              , e = ""
              , g = ""
              , k = ""
              , p = ""
              , h = "";
            a = a ? a.toString() + " " : "";
            b && (d = b.name ? "[ name: " + b.name + " ] " : "",
            e = b.Ka ? "[ errorObj: " + b.Ka + " ] " : "",
            g = b.description ? "[ description: " + b.description + " ] " : "",
            k = b.message ? "[ message: " + b.message + " ] " : "",
            p = b.lineNumber ? "[ line: " + b.lineNumber + " ] " : "",
            h = b.fileName ? "[ file: " + b.fileName.split("?")[0] + " ] " : "");
            a = "fp " + a + d + e + g + k + p + h;
            K[l.da] = m[l.da] = a;
            ("boolean" === typeof c ? c : 1) && W(a.toString());
            return a.toString().slice(0, 400)
        }
        function ea(a) {
            var b, c = null !== a && void 0 !== a;
            !c || "1" !== a.toString() && "true" !== a.toString().toLowerCase() ? !c || "0" !== a.toString() && "false" !== a.toString().toLowerCase() || (b = !1) : b = !0;
            return b
        }
        function O(a, b, c, d) {
            var e = {};
            var g = (d = typeof d === l.o ? d : !0) ? "io_" + a : "fp_" + a;
            c === l.o ? typeof ea(m[a]) === l.o ? (e.source = "fp",
            m[a] = ea(m[a])) : d && typeof ea(K[a]) === l.o ? (e.source = ja,
            m[a] = ea(K[a])) : typeof ea(v[g]) === l.o ? (e.source = "window",
            m[a] = ea(v[g])) : (e.source = "default",
            m[a] = b) : (Aa(a, m[a], c) ? e.source = "fp" : d && Aa(a, K[a], c) ? (e.source = ja,
            m[a] = K[a]) : Aa(g, v[g], c) ? (e.source = "window",
            m[a] = v[g]) : (e.source = "default",
            m[a] = b),
            "float" === c ? m[a] = parseFloat(m[a]) : "int" === c && (m[a] = parseInt(m[a], 10)));
            e.value = m[a];
            e.sharable = d;
            e["default"] = b;
            m.configMeta[a] = e;
            m.configMeta.configIndex.push(a)
        }
        function Ua(a) {
            return a ? a.reduce(function(b, c) {
                var d = JSON.stringify(c.brand);
                c = JSON.stringify(c.version);
                return b + (0 < b.length ? ", " : "") + d + ";V=" + c
            }, "") : ""
        }
        function fb() {
            var a = navigator.userAgentData;
            return a && a.getHighEntropyValues ? a.getHighEntropyValues("platform platformVersion architecture model uaFullVersion fullVersionList bitness wow64".split(" ")).then(function(b) {
                var c = Ua(a.brands);
                f.add("chjua", c);
                var d;
                f.add("chjmob", null == (d = a.mobile) ? void 0 : d.toString());
                if (b) {
                    c = Ua(b.fullVersionList);
                    f.add("chjarch", b.architecture);
                    f.add("chjplat", b.platform);
                    f.add("chjplatv", b.platformVersion);
                    f.add("chjmodel", b.model);
                    f.add("chjbit", b.bitness);
                    f.add("chjvrlist", c);
                    var e;
                    f.add("chjwow64", null == (e = b.wow64) ? void 0 : e.toString());
                    f.add("chjbrvr", b.uaFullVersion)
                }
            }).catch(function(b) {
                b = t("getHighEntropyValues", b, !1);
                f.add("chjerr", b)
            }) : null
        }
        var v = window || this, ja = v.io_global_object_name || "IGLOO", K = v[ja] = v[ja] || {}, m = K.fp = K.fp || {}, ka = (new Date).getTime(), Va = "", Oa = !1, X = -1, wa = {}, ca = [], Y, fa, Wa = !1, qa, Ba = "", Ca, Da, Ja, xa, ya, sa, S = {
            la: !0,
            ha: !1
        }, ma, l = {
            ta: "atrip_resource_name",
            s: "bbout_element_id",
            o: "boolean",
            L: "combine_tp_fp_output",
            B: "function",
            va: "handleATRIPResponse",
            J: "invalid token: ",
            da: "last_error",
            u: "loader",
            za: "localNamespace",
            bb: "ripServerUrl",
            Ca: "staticMain",
            Z: "trace_handler",
            Aa: "rtcServerList"
        };
        var ha = m.staticVer = "5.7.0";
        var J = v.document
          , A = v.navigator;
        var ta = v.isSecureContext;
        (function() {
            var a = !1;
            try {
                var b = Object.defineProperty({}, "passive", {
                    get: function() {
                        a = !0
                    }
                });
                v.addEventListener("test", null, b)
            } catch (c) {}
            sa = a ? {
                passive: !0,
                capture: !1
            } : !1;
            try {
                Da = !(!A || !A.plugins)
            } catch (c) {
                Da = !1
            }
            String.prototype.trim || (String.prototype.trim = function() {
                return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")
            }
            );
            J.getElementById || (document.getElementById = function(c) {
                var d, e;
                if (J.getElementsByTagName) {
                    var g = J.getElementsByTagName("*");
                    var k = g.length;
                    for (e = 0; e < k; e++)
                        "object" !== typeof g[e] || g[e].id !== c && g[e].name !== c || (d = g[e])
                } else
                    "object" === typeof c && c.tagName && (d = c);
                return d
            }
            );
            Array.prototype.indexOf || (Array.prototype.indexOf = function(c, d) {
                var e = -1;
                if (null !== this) {
                    var g = Object(this);
                    var k = g.length >>> 0;
                    if (0 === k)
                        e = -1;
                    else if (d = Number(d) || 0,
                    Infinity === Math.abs(d) && (d = 0),
                    d >= k)
                        e = -1;
                    else
                        for (d = Math.max(0 <= d ? d : k - Math.abs(d), 0); d < k; )
                            if (d in g && g[d] === c) {
                                e = d;
                                break
                            } else
                                d++
                }
                return e
            }
            )
        }
        )();
        m[l.da] = "";
        m.configMeta = {
            configIndex: []
        };
        var I = {
            m: function(a, b) {
                var c = ""
                  , d = "";
                if (a && "number" === typeof b) {
                    a = a.toString();
                    for (b -= a.length; c.length < b; )
                        c += "0";
                    d = c + a
                }
                return d
            },
            fb: function(a) {
                var b = "";
                a && (b = a.replace(/\//g, "-").replace(" ", "T") + "Z");
                return b
            },
            La: function(a) {
                var b = "";
                a && (b = a.getUTCFullYear() + "/" + I.m((a.getUTCMonth() + 1).toString(), 2) + "/" + I.m(a.getUTCDate().toString(), 2) + " " + I.m(a.getUTCHours().toString(), 2) + ":" + I.m(a.getUTCMinutes().toString(), 2) + ":" + I.m(a.getUTCSeconds().toString(), 2) + "." + I.m(a.getUTCMilliseconds().toString(), 3));
                return b
            },
            na: function(a, b) {
                var c = "";
                "number" === typeof a && b && (a = a.toString(16),
                c = b ? I.m(a, b) : a);
                return c
            },
            Y: function(a) {
                var b = "", c;
                if (a) {
                    var d = a.length;
                    for (c = 0; c < d; c++) {
                        var e = a.charCodeAt(c);
                        if (128 > e)
                            b += String.fromCharCode(e);
                        else if (2048 > e)
                            b += String.fromCharCode(192 + (e >> 6)) + String.fromCharCode(128 + (e & 63));
                        else if (65536 > e) {
                            if (!(56320 <= e && 57344 > e)) {
                                if (55296 <= e && 56320 > e)
                                    if (c + 1 >= d)
                                        continue;
                                    else {
                                        var g = a.charCodeAt(++c);
                                        if (56320 > g || 56832 <= e)
                                            continue;
                                        else
                                            e = (e - 55296 << 10) + (e - 56320) + 65536
                                    }
                                b += String.fromCharCode(224 + (e >> 12)) + String.fromCharCode(128 + (e >> 6 & 63)) + String.fromCharCode(128 + (e & 63))
                            }
                        } else
                            b += String.fromCharCode(240 + (e >> 18)) + String.fromCharCode(128 + (e >> 12 & 63)) + String.fromCharCode(128 + (e >> 6 & 63)) + String.fromCharCode(128 + (e & 63))
                    }
                }
                return b
            }
        }
          , z = {
            F: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
            Pa: function(a) {
                var b = !1;
                if (a)
                    try {
                        b = /^(?:[A-Za-z0-9+\/]{4})*(?:[A-Za-z0-9+\/]{2}==|[A-Za-z0-9+\/]{3}=)?$/.test(a)
                    } catch (c) {
                        t("isBase64: ", c, !0)
                    }
                return b
            },
            encode: function(a) {
                var b, c = "";
                if (a)
                    if (v.btoa)
                        c = btoa(a);
                    else {
                        var d = a.length;
                        for (b = 0; b < d; b += 3) {
                            var e = a.charCodeAt(b);
                            var g = a.charCodeAt(b + 1);
                            var k = a.charCodeAt(b + 2);
                            var p = e >> 2;
                            e = (e & 3) << 4 | g >> 4;
                            var h = (g & 15) << 2 | k >> 6;
                            var F = k & 63;
                            isNaN(g) ? h = F = 64 : isNaN(k) && (F = 64);
                            c += z.F.charAt(p) + z.F.charAt(e) + z.F.charAt(h) + z.F.charAt(F)
                        }
                    }
                return c
            },
            decode: function(a) {
                var b = "", c = 0, d, e, g, k, p, h, F;
                if (a)
                    if (v.atob && z.Pa(a))
                        b = v.atob(a);
                    else
                        try {
                            var q = h = F = e = g = k = p = b = "";
                            for (d = a.length; c < d; )
                                e = z.F.indexOf(a.charAt(c++)),
                                g = z.F.indexOf(a.charAt(c++)),
                                k = z.F.indexOf(a.charAt(c++)),
                                p = z.F.indexOf(a.charAt(c++)),
                                q = e << 2 | g >> 4,
                                h = (g & 15) << 4 | k >> 2,
                                F = (k & 3) << 6 | p,
                                b += String.fromCharCode(q),
                                64 !== k && (b += String.fromCharCode(h)),
                                64 !== p && (b += String.fromCharCode(F)),
                                e = g = k = p = q = h = F = ""
                        } catch (D) {
                            t("", D, !0),
                            b = ""
                        }
                return b
            }
        };
        var W = function(a) {
            if (typeof m[l.Z] === l.B)
                try {
                    var b = new Date;
                    m[l.Z](I.m(b.getHours(), 2) + ":" + I.m(b.getMinutes(), 2) + ":" + I.m(b.getSeconds(), 2) + "." + I.m(b.getMilliseconds(), 3) + " fp_" + a)
                } catch (c) {
                    t("trace: ", c, !1)
                }
        };
        O(l.Z, "", l.B);
        O("enable_rip", !0, l.o);
        O("enable_atrip", !0, l.o);
        O("enable_wstrip", !0, l.o);
        O("enable_rtc", !1, l.o);
        O("enable_static_token", !0, l.o);
        O(l.ta, "/time.mp3");
        O("bb_max_len", 4E3, "int");
        O(l.L, !0, l.o);
        O("bb_callback", "", l.B, m[l.L]);
        O(l.s, "", "", m[l.L]);
        O("secure_websockets", !0, l.o);
        O("ignore_events", [], "Array");
        m[l.s] && !document.getElementById(m[l.s]) && t(z.decode("YmJvdXQgZWxlbWVudCBkaWQgbm90IGV4aXN0IGF0IHJ1bnRpbWU="), "", !0);
        O(l.u);
        if (m[l.u]) {
            var da = m[l.u].tp_host;
            Wa = m[l.u].url_dots_to_dashes || !1
        }
        da = da || z.decode("aHR0cHM6Ly9tcHNuYXJlLmllc25hcmUuY29t");
        if (m[l.u]) {
            m[l.u].uri_hook && (ma = m[l.u].uri_hook);
            var gb = !1 === K[l.u].fp_dyn;
            var hb = !1 === K[l.u].fp_static
        }
        ma = ma || "/iojs";
        if (hb || m[l.Ca])
            return t(z.decode("c3RhdGljIGV4aXRpbmcgYmVjYXVzZSBpdCBoYXMgYWxyZWFkeSBydW4gb3IgaXMgZGlzYWJsZWQ="), "", !0),
            !1;
        m[l.Ca] = Za;
        typeof m[l.Z] === l.B && W(z.decode("KioqOiBCZWdpbm5pbmcgZXhlY3V0aW9u"));
        (function() {
            try {
                var a = m[l.s]
                  , b = a && J.getElementById(a)
                  , c = b && b.form;
                c && L("submit", za, c)
            } catch (d) {
                t("", d, !0)
            }
        }
        )();
        var Z = {
            oa: function(a) {
                if (!a)
                    return "";
                a = a.toString();
                var b = a.length, c = "", d = 0, e = 0, g;
                for (g = 0; g < b; g++) {
                    var k = a.charCodeAt(g);
                    var p = null;
                    128 > k ? e++ : p = 127 < k && 2048 > k ? String.fromCharCode(k >> 6 | 192) + String.fromCharCode(k & 63 | 128) : String.fromCharCode(k >> 12 | 224) + String.fromCharCode(k >> 6 & 63 | 128) + String.fromCharCode(k & 63 | 128);
                    p && (e > d && (c += a.slice(d, e)),
                    c += p,
                    d = e = g + 1)
                }
                e > d && (c += a.slice(d, b));
                return c
            },
            Ba: function(a) {
                function b(u) {
                    var r = "", n;
                    for (n = 7; 0 <= n; n--) {
                        var w = u >>> 4 * n & 15;
                        r += w.toString(16)
                    }
                    return r
                }
                function c(u, r) {
                    return u << r | u >>> 32 - r
                }
                a = Z.oa(a);
                var d, e = Array(80), g = 1732584193, k = 4023233417, p = 2562383102, h = 271733878, F = 3285377520;
                var q = a.length;
                var D = [];
                for (d = 0; d < q - 3; d += 4) {
                    var G = a.charCodeAt(d) << 24 | a.charCodeAt(d + 1) << 16 | a.charCodeAt(d + 2) << 8 | a.charCodeAt(d + 3);
                    D.push(G)
                }
                switch (q % 4) {
                case 0:
                    d = 2147483648;
                    break;
                case 1:
                    d = a.charCodeAt(q - 1) << 24 | 8388608;
                    break;
                case 2:
                    d = a.charCodeAt(q - 2) << 24 | a.charCodeAt(q - 1) << 16 | 32768;
                    break;
                case 3:
                    d = a.charCodeAt(q - 3) << 24 | a.charCodeAt(q - 2) << 16 | a.charCodeAt(q - 1) << 8 | 128
                }
                for (D.push(d); 14 !== D.length % 16; )
                    D.push(0);
                D.push(q >>> 29);
                D.push(q << 3 & 4294967295);
                var N = D.length;
                for (a = 0; a < N; a += 16) {
                    for (d = 0; 16 > d; d++)
                        e[d] = D[a + d];
                    for (d = 16; 79 >= d; d++)
                        e[d] = c(e[d - 3] ^ e[d - 8] ^ e[d - 14] ^ e[d - 16], 1);
                    G = g;
                    q = k;
                    var C = p;
                    var B = h;
                    var E = F;
                    for (d = 0; 19 >= d; d++) {
                        var y = c(G, 5) + (q & C | ~q & B) + E + e[d] + 1518500249 & 4294967295;
                        E = B;
                        B = C;
                        C = c(q, 30);
                        q = G;
                        G = y
                    }
                    for (d = 20; 39 >= d; d++)
                        y = c(G, 5) + (q ^ C ^ B) + E + e[d] + 1859775393 & 4294967295,
                        E = B,
                        B = C,
                        C = c(q, 30),
                        q = G,
                        G = y;
                    for (d = 40; 59 >= d; d++)
                        y = c(G, 5) + (q & C | q & B | C & B) + E + e[d] + 2400959708 & 4294967295,
                        E = B,
                        B = C,
                        C = c(q, 30),
                        q = G,
                        G = y;
                    for (d = 60; 79 >= d; d++)
                        y = c(G, 5) + (q ^ C ^ B) + E + e[d] + 3395469782 & 4294967295,
                        E = B,
                        B = C,
                        C = c(q, 30),
                        q = G,
                        G = y;
                    g = g + G & 4294967295;
                    k = k + q & 4294967295;
                    p = p + C & 4294967295;
                    h = h + B & 4294967295;
                    F = F + E & 4294967295
                }
                y = b(g) + b(k) + b(p) + b(h) + b(F);
                return y.toLowerCase()
            },
            Ja: function(a, b) {
                var c = [16843776, 0, 65536, 16843780, 16842756, 66564, 4, 65536, 1024, 16843776, 16843780, 1024, 16778244, 16842756, 16777216, 4, 1028, 16778240, 16778240, 66560, 66560, 16842752, 16842752, 16778244, 65540, 16777220, 16777220, 65540, 0, 1028, 66564, 16777216, 65536, 16843780, 4, 16842752, 16843776, 16777216, 16777216, 1024, 16842756, 65536, 66560, 16777220, 1024, 4, 16778244, 66564, 16843780, 65540, 16842752, 16778244, 16777220, 1028, 66564, 16843776, 1028, 16778240, 16778240, 0, 65540, 66560, 0, 16842756]
                  , d = [-2146402272, -2147450880, 32768, 1081376, 1048576, 32, -2146435040, -2147450848, -2147483616, -2146402272, -2146402304, -2147483648, -2147450880, 1048576, 32, -2146435040, 1081344, 1048608, -2147450848, 0, -2147483648, 32768, 1081376, -2146435072, 1048608, -2147483616, 0, 1081344, 32800, -2146402304, -2146435072, 32800, 0, 1081376, -2146435040, 1048576, -2147450848, -2146435072, -2146402304, 32768, -2146435072, -2147450880, 32, -2146402272, 1081376, 32, 32768, -2147483648, 32800, -2146402304, 1048576, -2147483616, 1048608, -2147450848, -2147483616, 1048608, 1081344, 0, -2147450880, 32800, -2147483648, -2146435040, -2146402272, 1081344]
                  , e = [520, 134349312, 0, 134348808, 134218240, 0, 131592, 134218240, 131080, 134217736, 134217736, 131072, 134349320, 131080, 134348800, 520, 134217728, 8, 134349312, 512, 131584, 134348800, 134348808, 131592, 134218248, 131584, 131072, 134218248, 8, 134349320, 512, 134217728, 134349312, 134217728, 131080, 520, 131072, 134349312, 134218240, 0, 512, 131080, 134349320, 134218240, 134217736, 512, 0, 134348808, 134218248, 131072, 134217728, 134349320, 8, 131592, 131584, 134217736, 134348800, 134218248, 520, 134348800, 131592, 8, 134348808, 131584]
                  , g = [8396801, 8321, 8321, 128, 8396928, 8388737, 8388609, 8193, 0, 8396800, 8396800, 8396929, 129, 0, 8388736, 8388609, 1, 8192, 8388608, 8396801, 128, 8388608, 8193, 8320, 8388737, 1, 8320, 8388736, 8192, 8396928, 8396929, 129, 8388736, 8388609, 8396800, 8396929, 129, 0, 0, 8396800, 8320, 8388736, 8388737, 1, 8396801, 8321, 8321, 128, 8396929, 129, 1, 8192, 8388609, 8193, 8396928, 8388737, 8193, 8320, 8388608, 8396801, 128, 8388608, 8192, 8396928]
                  , k = [256, 34078976, 34078720, 1107296512, 524288, 256, 1073741824, 34078720, 1074266368, 524288, 33554688, 1074266368, 1107296512, 1107820544, 524544, 1073741824, 33554432, 1074266112, 1074266112, 0, 1073742080, 1107820800, 1107820800, 33554688, 1107820544, 1073742080, 0, 1107296256, 34078976, 33554432, 1107296256, 524544, 524288, 1107296512, 256, 33554432, 1073741824, 34078720, 1107296512, 1074266368, 33554688, 1073741824, 1107820544, 34078976, 1074266368, 256, 33554432, 1107820544, 1107820800, 524544, 1107296256, 1107820800, 34078720, 0, 1074266112, 1107296256, 524544, 33554688, 1073742080, 524288, 0, 1074266112, 34078976, 1073742080]
                  , p = [536870928, 541065216, 16384, 541081616, 541065216, 16, 541081616, 4194304, 536887296, 4210704, 4194304, 536870928, 4194320, 536887296, 536870912, 16400, 0, 4194320, 536887312, 16384, 4210688, 536887312, 16, 541065232, 541065232, 0, 4210704, 541081600, 16400, 4210688, 541081600, 536870912, 536887296, 16, 541065232, 4210688, 541081616, 4194304, 16400, 536870928, 4194304, 536887296, 536870912, 16400, 536870928, 541081616, 4210688, 541065216, 4210704, 541081600, 0, 541065232, 16, 16384, 541065216, 4210704, 16384, 4194320, 536887312, 0, 541081600, 536870912, 4194320, 536887312]
                  , h = [2097152, 69206018, 67110914, 0, 2048, 67110914, 2099202, 69208064, 69208066, 2097152, 0, 67108866, 2, 67108864, 69206018, 2050, 67110912, 2099202, 2097154, 67110912, 67108866, 69206016, 69208064, 2097154, 69206016, 2048, 2050, 69208066, 2099200, 2, 67108864, 2099200, 67108864, 2099200, 2097152, 67110914, 67110914, 69206018, 69206018, 2, 2097154, 67108864, 67110912, 2097152, 69208064, 2050, 2099202, 69208064, 2050, 67108866, 69208066, 69206016, 2099200, 0, 2, 69208066, 0, 2099202, 69206016, 2048, 67108866, 67110912, 2048, 2097154]
                  , F = [268439616, 4096, 262144, 268701760, 268435456, 268439616, 64, 268435456, 262208, 268697600, 268701760, 266240, 268701696, 266304, 4096, 64, 268697600, 268435520, 268439552, 4160, 266240, 262208, 268697664, 268701696, 4160, 0, 0, 268697664, 268435520, 268439552, 266304, 262144, 266304, 262144, 268701696, 4096, 64, 268697664, 4096, 266304, 268439552, 64, 268435520, 268697600, 268697664, 268435456, 262144, 268439616, 0, 268701760, 262208, 268435520, 268697600, 268439552, 268439616, 0, 268701760, 266240, 266240, 4160, 4160, 262208, 268435456, 268701696];
                a = Z.Ia(a);
                var q = 0, D = b.length, G = 0, N = [0, 32, 2], C, B, E = "", y = "";
                try {
                    for (b += "\x00\x00\x00\x00\x00\x00\x00\x00"; q < D; ) {
                        var u = b.charCodeAt(q++) << 24 ^ b.charCodeAt(q++) << 16 ^ b.charCodeAt(q++) << 8 ^ b.charCodeAt(q++);
                        var r = b.charCodeAt(q++) << 24 ^ b.charCodeAt(q++) << 16 ^ b.charCodeAt(q++) << 8 ^ b.charCodeAt(q++);
                        var n = (u >>> 4 ^ r) & 252645135;
                        r ^= n;
                        u ^= n << 4;
                        n = (u >>> 16 ^ r) & 65535;
                        r ^= n;
                        u ^= n << 16;
                        n = (r >>> 2 ^ u) & 858993459;
                        u ^= n;
                        r ^= n << 2;
                        n = (r >>> 8 ^ u) & 16711935;
                        u ^= n;
                        r ^= n << 8;
                        n = (u >>> 1 ^ r) & 1431655765;
                        r ^= n;
                        u ^= n << 1;
                        u = u << 1 | u >>> 31;
                        r = r << 1 | r >>> 31;
                        for (B = 0; 3 > B; B += 3) {
                            var w = N[B + 1];
                            var H = N[B + 2];
                            for (C = N[B]; C !== w; C += H) {
                                var aa = r ^ a[C];
                                var ua = (r >>> 4 | r << 28) ^ a[C + 1];
                                n = u;
                                u = r;
                                r = n ^ (d[aa >>> 24 & 63] | g[aa >>> 16 & 63] | p[aa >>> 8 & 63] | F[aa & 63] | c[ua >>> 24 & 63] | e[ua >>> 16 & 63] | k[ua >>> 8 & 63] | h[ua & 63])
                            }
                            n = u;
                            u = r;
                            r = n
                        }
                        u = u >>> 1 | u << 31;
                        r = r >>> 1 | r << 31;
                        n = (u >>> 1 ^ r) & 1431655765;
                        r ^= n;
                        u ^= n << 1;
                        n = (r >>> 8 ^ u) & 16711935;
                        u ^= n;
                        r ^= n << 8;
                        n = (r >>> 2 ^ u) & 858993459;
                        u ^= n;
                        r ^= n << 2;
                        n = (u >>> 16 ^ r) & 65535;
                        r ^= n;
                        u ^= n << 16;
                        n = (u >>> 4 ^ r) & 252645135;
                        r ^= n;
                        u ^= n << 4;
                        y += String.fromCharCode(u >>> 24, u >>> 16 & 255, u >>> 8 & 255, u & 255, r >>> 24, r >>> 16 & 255, r >>> 8 & 255, r & 255);
                        G += 8;
                        512 === G && (E += y,
                        y = "",
                        G = 0)
                    }
                } catch (ib) {
                    t("ioc: error while to encrypting", ib, !0)
                }
                return E + y
            },
            Ia: function(a) {
                var b = [0, 4, 536870912, 536870916, 65536, 65540, 536936448, 536936452, 512, 516, 536871424, 536871428, 66048, 66052, 536936960, 536936964], c = [0, 1, 1048576, 1048577, 67108864, 67108865, 68157440, 68157441, 256, 257, 1048832, 1048833, 67109120, 67109121, 68157696, 68157697], d = [0, 8, 2048, 2056, 16777216, 16777224, 16779264, 16779272, 0, 8, 2048, 2056, 16777216, 16777224, 16779264, 16779272], e = [0, 2097152, 134217728, 136314880, 8192, 2105344, 134225920, 136323072, 131072, 2228224, 134348800, 136445952, 139264, 2236416, 134356992, 136454144], g = [0, 262144, 16, 262160, 0, 262144, 16, 262160, 4096, 266240, 4112, 266256, 4096, 266240, 4112, 266256], k = [0, 1024, 32, 1056, 0, 1024, 32, 1056, 33554432, 33555456, 33554464, 33555488, 33554432, 33555456, 33554464, 33555488], p = [0, 268435456, 524288, 268959744, 2, 268435458, 524290, 268959746, 0, 268435456, 524288, 268959744, 2, 268435458, 524290, 268959746], h = [0, 65536, 2048, 67584, 536870912, 536936448, 536872960, 536938496, 131072, 196608, 133120, 198656, 537001984, 537067520, 537004032, 537069568], F = [0, 262144, 0, 262144, 2, 262146, 2, 262146, 33554432, 33816576, 33554432, 33816576, 33554434, 33816578, 33554434, 33816578], q = [0, 268435456, 8, 268435464, 0, 268435456, 8, 268435464, 1024, 268436480, 1032, 268436488, 1024, 268436480, 1032, 268436488], D = [0, 32, 0, 32, 1048576, 1048608, 1048576, 1048608, 8192, 8224, 8192, 8224, 1056768, 1056800, 1056768, 1056800], G = [0, 16777216, 512, 16777728, 2097152, 18874368, 2097664, 18874880, 67108864, 83886080, 67109376, 83886592, 69206016, 85983232, 69206528, 85983744], N = [0, 4096, 134217728, 134221824, 524288, 528384, 134742016, 134746112, 16, 4112, 134217744, 134221840, 524304, 528400, 134742032, 134746128], C = [0, 4, 256, 260, 0, 4, 256, 260, 1, 5, 257, 261, 1, 5, 257, 261], B = [32], E = [0, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0], y, u = y = 0, r, n = a.charCodeAt(y++) << 24 | a.charCodeAt(y++) << 16 | a.charCodeAt(y++) << 8 | a.charCodeAt(y++), w = a.charCodeAt(y++) << 24 | a.charCodeAt(y++) << 16 | a.charCodeAt(y++) << 8 | a.charCodeAt(y++);
                var H = (n >>> 4 ^ w) & 252645135;
                w ^= H;
                n ^= H << 4;
                H = (w >>> -16 ^ n) & 65535;
                n ^= H;
                w ^= H << -16;
                H = (n >>> 2 ^ w) & 858993459;
                w ^= H;
                n ^= H << 2;
                H = (w >>> -16 ^ n) & 65535;
                n ^= H;
                w ^= H << -16;
                H = (n >>> 1 ^ w) & 1431655765;
                w ^= H;
                n ^= H << 1;
                H = (w >>> 8 ^ n) & 16711935;
                n ^= H;
                w ^= H << 8;
                H = (n >>> 1 ^ w) & 1431655765;
                w ^= H;
                H = (n ^ H << 1) << 8 | w >>> 20 & 240;
                n = w << 24 | w << 8 & 16711680 | w >>> 8 & 65280 | w >>> 24 & 240;
                w = H;
                a = E.length;
                for (r = 0; r < a; r++) {
                    E[r] ? (n = n << 2 | n >>> 26,
                    w = w << 2 | w >>> 26) : (n = n << 1 | n >>> 27,
                    w = w << 1 | w >>> 27);
                    n &= -15;
                    w &= -15;
                    y = b[n >>> 28] | c[n >>> 24 & 15] | d[n >>> 20 & 15] | e[n >>> 16 & 15] | g[n >>> 12 & 15] | k[n >>> 8 & 15] | p[n >>> 4 & 15];
                    var aa = h[w >>> 28] | F[w >>> 24 & 15] | q[w >>> 20 & 15] | D[w >>> 16 & 15] | G[w >>> 12 & 15] | N[w >>> 8 & 15] | C[w >>> 4 & 15];
                    H = (aa >>> 16 ^ y) & 65535;
                    B[u++] = y ^ H;
                    B[u++] = aa ^ H << 16
                }
                return B
            }
        };
        var va = function() {
            var a, b = ca.length, c = !0, d = "";
            for (a = 0; a < b; a++) {
                var e = wa[ca[a]];
                d += ca[a] + ": " + e.l + "; ";
                "object" !== typeof e ? t(l.za + ".allComplete method not object: " + va.toString(), void 0, !0) : e.l || (c = !1)
            }
            W(d);
            return c
        };
        var Xa = function(a, b, c) {
            var d;
            K.io && K.io.getBlackbox && (d = K.io.getBlackbox(!0, c));
            d && d.blackbox && (a = d.blackbox + ";" + a,
            b = !0 === b && !0 === d.finished);
            return {
                blackbox: a,
                finished: b
            }
        };
        var f = {
            xa: "",
            N: "",
            ba: "",
            ia: void 0,
            $: !0,
            g: {},
            A: [],
            W: m.bb_max_len,
            Ya: function() {
                var a = 0, b = "", c, d;
                var e = f.W - 6;
                e = Math.floor(.75 * e);
                e = e - (e % 4 + 4) - 4;
                f.add("LOST", "0000;00000", 1);
                4E3 > f.W && f.remove("FFONTS");
                var g = f.A.length;
                var k = f.A.join("").length;
                for (d = c = 0; d < g; d++)
                    c += f.g[f.A[d]].length;
                k = 8 * g + k + c;
                for (d = 0; d < g; d++)
                    if (c = f.A[d],
                    "string" === typeof c && "string" === typeof f.g[c]) {
                        c = I.na(c.length, 4) + c.toUpperCase() + I.na(f.g[c].length, 4) + f.g[c];
                        var p = c.length;
                        if (0 >= f.W || b.length + p + 3 < e)
                            a++,
                            b += c
                    }
                b.length !== k || a !== g ? (d = k - b.length,
                g = I.m(g - a, 4) + ";" + I.m((99999 >= d ? d : "100k+").toString(), 5),
                b = b.replace("0004LOST000a0000;00000", "0004LOST000A" + g)) : (--a,
                b = b.replace("0004LOST000a0000;00000", ""));
                return I.na(a, 4) + b
            },
            ma: function() {
                var a = ""
                  , b = String.fromCharCode(124, 76, 69, 0, 99, 2, 200, 163);
                try {
                    var c = Z.Ja(b, f.Ya());
                    var d = "0400" + z.encode(c);
                    0 >= f.W || d.length <= f.W ? (a = d,
                    f.xa = d) : a = f.xa
                } catch (e) {
                    t("", e, !0)
                }
                return a
            },
            wa: function(a) {
                return a && "string" === typeof a && 0 < a.length
            },
            Ha: function(a, b) {
                var c = !1;
                a in f.g && (c = f.g[a] === b || f.g[a] === Z.oa(b));
                return c
            },
            add: function(a, b, c) {
                f.wa(a) && f.wa(b) && (b = b.replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, ""),
                b = Z.oa(b),
                0 > f.A.indexOf(a) && (c ? f.A.unshift(a) : f.A.push(a)),
                f.g[a] !== b && (f.g[a] = b,
                f.$ = !0,
                f.ja()))
            },
            remove: function(a) {
                var b;
                if (f.g[a]) {
                    delete f.g[a];
                    for (b = f.A.indexOf(a); 0 <= b; )
                        f.A.splice(b, 1),
                        b = f.A.indexOf(a);
                    f.$ = !0;
                    f.ja()
                }
            },
            ja: function() {
                "number" !== typeof f.ia && (f.ia = setTimeout(function() {
                    f.update()
                }, 100))
            },
            update: function() {
                var a = ""
                  , b = ""
                  , c = va();
                try {
                    if (f.$ || c) {
                        za();
                        f.add("JINT", f.N);
                        typeof m.bb_callback === l.B ? (f.N = "callback",
                        m.cbflag = !0,
                        a = f.ma(),
                        b = c,
                        f.ba = m.bb_callback) : m[l.s] && J.getElementById(m[l.s]) && (f.N = "form",
                        a = f.ma(),
                        b = c,
                        f.ba = eb);
                        if (!0 === m[l.L]) {
                            var d = Xa(a, b, f.N);
                            a = d.blackbox;
                            b = d.finished
                        }
                        f.ba && (f.ba(a, b),
                        m.cbflag = !1);
                        f.ia = void 0;
                        f.$ = !1
                    }
                    var e = !0
                } catch (g) {
                    t("io_bb.update", g, !0),
                    e = !1
                }
                return e
            }
        };
        f.ja();
        var ba = function() {
            var a = {
                sa: "OFF",
                ra: "STARTING",
                qa: "POLLING"
            };
            Object.freeze && Object.freeze(a);
            var b = a.sa
              , c = null;
            return {
                V: null,
                get Sa() {
                    return b === a.sa
                },
                get Ra() {
                    return b === a.ra
                },
                get Qa() {
                    return b === a.qa
                },
                Va: function() {
                    var d = a.ra;
                    this.V && (c && clearInterval(c),
                    c = setInterval(this.V, 100),
                    b = d)
                },
                Ua: function() {
                    var d = a.qa;
                    this.V && (c && clearInterval(c),
                    c = setInterval(this.V, 2E3),
                    b = d)
                }
            }
        }();
        m.getBlackbox = function(a, b) {
            var c;
            typeof a !== l.o && (a = !1);
            K.io && K.io.cbflag && (c = K.io.cbflag);
            if (m.cbflag || !b && c)
                b = {
                    blackbox: z.decode("SW52YWxpZCBJbnRlZ3JhdGlvbjogY2Fubm90IGNhbGwgZ2V0QmxhY2tib3ggZnJvbSBpbnNpZGUgYmJfY2FsbGJhY2su"),
                    finished: va()
                };
            else if (oa(),
            f.N = b || l.B,
            f.add("JINT", f.N),
            b = {
                blackbox: f.ma(),
                finished: va()
            },
            !a) {
                try {
                    za()
                } catch (d) {
                    t("", d, !0)
                }
                m[l.L] && (b = Xa(b.blackbox, b.finished, null))
            }
            return b
        }
        ;
        !0 === m[l.L] && (K.getBlackbox = m.getBlackbox);
        Ta.prototype = {
            aa: function() {
                this.j = !0;
                try {
                    if (v.localStorage) {
                        var a = v.localStorage.getItem(this.name) || v.localStorage.getItem("fp_temp");
                        if (a)
                            X && (la(a) ? (v.localStorage.getItem(this.name) || v.localStorage.setItem(this.name, a),
                            f.add("LSTOKEN", a, !0),
                            this.h = a) : f.add("LSERROR", l.J + I.Y(a)));
                        else if (1 === X)
                            if (la(this.h)) {
                                v.localStorage.setItem(this.name, this.h);
                                var b = v.localStorage.getItem(this.name);
                                la(b) ? f.add("LSTOKEN", b, !0) : f.add("LSERROR", z.decode("dG9rZW4gbm90IHBlcnNpc3Rpbmc="))
                            } else
                                f.add("LSERROR", l.J + I.Y(this.h))
                    }
                } catch (c) {
                    f.add("LSERROR", t("", c, !0)),
                    W(z.decode("bHNwOiBMb2NhbFN0b3JhZ2UgY29sbGVjdGlvbiBmYWlsZWQuLi4="))
                }
                this.l = !0;
                this.h && Y && (this.O = !0)
            }
        };
        Sa.prototype = {
            Xa: function() {
                var a, b, c;
                if (A && A.userAgent) {
                    var d = A.userAgent.match(/\([^\)]*\)/g);
                    var e = d.length;
                    if (d)
                        for (a = 0; a < e; a++)
                            if (c = d[a].match(/[^;]*;?/g)) {
                                var g = c.length;
                                for (b = 0; b < g; b++)
                                    if (0 < c[b].length && "undefined" !== typeof this.h) {
                                        var k = c[b].replace(/[\(\);]/g, "").trim();
                                        this.h.push(k)
                                    }
                            }
                    this.D = A.userAgent.match(/([\w]+\s )?[^\s\/]*\/[^\s]*/g)
                }
            },
            Ta: function() {
                var a = "MSIE Maxthon Minimo AOL Browser iCab Lunascape".split(" "), b = a.length, c, d;
                if (this.h) {
                    var e = this.h.length;
                    for (c = 0; c < b; c++) {
                        var g = new RegExp("^.*" + a[c] + " ?[^0-9.]*","g");
                        for (d = 0; d < e; d++)
                            if (0 <= this.h[d].toUpperCase().search(a[c].toUpperCase())) {
                                this.version = this.h[d].replace(g, "").replace(/\s+/g, "");
                                this.version === this.h[d] && (this.version = "");
                                0 < c ? (c = new RegExp(this.version + "$","g"),
                                this.v = this.h[d].replace(c, "")) : this.v = "Internet Explorer";
                                return
                            }
                    }
                }
                b = "Classilla;Gnuzilla;SeaMonkey;Maxthon;K-Meleon;Flock;Epic;Camino;Firebird;Conkeror;Fennec;Skyfire;MicroB;GranParadiso;Opera Mini;Netscape;Sleipnir;Browser;IceCat;weasel;iCab;Opera;OPR;OPiOS;Minimo;Konqueror;Galeon;Lunascape;Thunderbird;BonEcho;Navigator;Epiphany;Minefield;TizenBrowser;Namoroka;Shiretoko;NetFront;IEMobile;Puffin;Firefox;FxiOS;Edge;Edg;Chrome;CriOS;Safari;Mobile;Mobile Safari;Trident".split(";");
                g = b.length;
                if (this.D)
                    for (e = this.D.length,
                    c = 0; c < g; c++)
                        for (d = 0; d < e; d++)
                            if (a = this.D[d].split("/"))
                                if (this.v || (this.v = a[0],
                                this.version = a[1].replace(";$", "")),
                                0 <= a[0].toUpperCase().search(b[c].toUpperCase())) {
                                    this.v = a[0];
                                    this.version = a[1].replace(";$", "");
                                    return
                                }
            },
            Wa: function() {
                var a = "Linux;Windows Phone;Android;BSD;Ubuntu;Irix;MIDP;Xbox One;Xbox;Windows ;Mac OS X;Debian;Mac;Playstation;Wii;Win9;BlackBerry;WinNT;iPhone;iPad;OS".split(";"), b = a.length, c, d;
                if (this.h) {
                    var e = this.h.length;
                    for (c = 0; c < b; c++)
                        for (d = 0; d < e; d++)
                            if (0 <= this.h[d].toUpperCase().search(a[c].toUpperCase()) && (this.U = this.h[d],
                            0 < c))
                                return
                }
                a = "BlackBerry;MIDP;Debian;Ubuntu;BSD;AIX;Irix;Gentoo;Fedora;Red Hat;OS".split(";");
                b = a.length;
                if (e = this.D) {
                    var g = e.length;
                    for (c = 0; c < b; c++)
                        for (d = 0; d < g; d++)
                            if (0 <= e[d].toUpperCase().search(a[c].toUpperCase())) {
                                this.U = e[d].replace("/", " ").replace(/\s+/g, " ");
                                return
                            }
                }
            }
        };
        var x = {
            max: function(a) {
                return a.sort()[a.length - 1]
            },
            round: function(a, b) {
                if ("number" === typeof a && "number" === typeof b) {
                    b = parseInt(b, 10);
                    b = Math.pow(10, b);
                    var c = Math.round(a * b) / b
                }
                return c
            },
            ea: function(a) {
                a = a.slice();
                var b = Math.floor(a.length / 2);
                if (0 === a.length)
                    var c = null;
                else
                    a.sort(function(d, e) {
                        return d - e
                    }),
                    1 === a.length % 2 ? c = a[b] : c = (a[b - 1] + a[b]) / 2;
                return c
            },
            Da: function(a) {
                var b = 0, c = a.length, d;
                for (d = 0; d < c; d++) {
                    var e = a[d];
                    b += e
                }
                return b
            },
            K: function(a) {
                return x.Da(a) / a.length
            },
            ka: function(a) {
                a = a.slice();
                var b = x.K(a), c = [], d = a.length, e;
                for (e = 0; e < d; e++) {
                    var g = a[e];
                    g -= b;
                    g = Math.pow(g, 2);
                    c.push(g)
                }
                return Math.sqrt(x.Da(c) / d)
            },
            Ga: function(a) {
                var b = a.C;
                a = a.G;
                var c = x.K(b), d = x.K(a), e = x.ka(b), g = x.ka(a), k = b.length, p = 0, h;
                if (0 === e * g)
                    b = 1;
                else {
                    for (h = 0; h < k; h++) {
                        var F = (b[h] - c) / e;
                        var q = (a[h] - d) / g;
                        p += F * q
                    }
                    b = Math.abs(p / k)
                }
                return b
            }
        };
        m[l.va] = function(a, b) {
            try {
                var c = a && document.getElementById(a), d;
                c && (d = c.duration) && (b ? (f.add("ATRIP", Va + ";" + d.toString(), !0),
                ia()) : (Va = d.toString(),
                Pa(!0)))
            } catch (e) {
                f.add("ATRIPERR", t("ATRIP response error:", e, !0)),
                ia()
            }
        }
        ;
        var na = {
            l: !1,
            Ma: function(a) {
                var b = ""
                  , c = "cr";
                try {
                    var d = ra(!0);
                    d || (d = ra(!1),
                    c = "mr");
                    if (d) {
                        var e = a + ";" + d + ";" + c;
                        e += "?" + Z.Ba(e);
                        b = z.encode(e)
                    }
                } catch (g) {
                    t("sttkn.gen:", g, !0)
                }
                return b
            },
            validate: function(a, b) {
                var c = !1, d, e = /((1|2)[0-9]{3})\/((02)\/(0[1-9]|1[0-9]|2[0-9])|(0(1|3|5|7|8)|1(0|2))\/(0[1-9]|(1|2)[0-9]|3(0|1))|(0(4|6|9)|11)\/(0[1-9]|(1|2)[0-9]|30)) ((0|1)[0-9]|2[0-3]):([0-5][0-9]):([0-5][0-9])\.[0-9]{3}/, g = /[0-9a-f]{8}-([0-9a-f]{4}-){3}[0-9a-f]{12}/, k = /cr|mr/, p, h = !1;
                try {
                    if ((a = z.decode(a)) && (d = (p = a.split("?")[0]) && p.split(";")) && 3 === d.length) {
                        var F = a.split("?")[1];
                        var q = Z.Ba(p);
                        if (F && q === F) {
                            var D = e.test(d[0]);
                            var G = g.test(d[1]);
                            var N = k.test(d[2]);
                            if (D) {
                                var C = d[0];
                                var B = /([0-9]{4})\/([0-9]{2})\/([0-9]{2}) ([0-9]{2}):([0-9]{2}):([0-9]{2}).([0-9]{3})/;
                                var E = C.match(B);
                                var y = b.match(B);
                                var u = new Date(E[1],E[2],E[3],E[4],E[5],E[6],E[7]);
                                var r = new Date(y[1],y[2],y[3],y[4],y[5],y[6],y[7]);
                                h = u <= r
                            }
                            c = D && h && N && G
                        }
                    }
                } catch (n) {
                    t("sttkn.val:", n, !0)
                }
                return c
            },
            Na: function(a) {
                var b = "";
                try {
                    if (v.localStorage) {
                        var c = v.localStorage.getItem("28214019-fad0-4a25-8f60-19885fb32f22");
                        na.validate(c, a) ? b = c : (c && f.add("STERR", "found " + l.J + c),
                        c = na.Ma(a),
                        na.validate(c, a) ? v.localStorage.setItem("28214019-fad0-4a25-8f60-19885fb32f22", c) : c && f.add("STERR", "generated " + l.J + c),
                        c = v.localStorage.getItem("28214019-fad0-4a25-8f60-19885fb32f22"),
                        na.validate(c, a) ? b = c : c && f.add("STERR", "refound " + l.J + c))
                    }
                } catch (d) {
                    t("sttkn:", d, !0)
                }
                return b
            }
        }
          , P = {
            label: "io_sdp",
            l: !1,
            j: !1,
            O: !0,
            Fa: !1,
            pa: !1,
            Oa: function() {
                var a = new Date(2E3,0,1,0,0,0,0)
                  , b = a.toGMTString().split(" ");
                b = new Date(b.pop() && b.join(" "));
                var c = Math.round((b - a) / 6E4);
                a = new Date(2E3,6,1,0,0,0,0);
                b = a.toGMTString().split(" ");
                b = new Date(b.pop() && b.join(" "));
                a = Math.round((b - a) / 6E4);
                return c > a ? c : a
            },
            aa: function() {
                if (!P.j)
                    try {
                        P.j = !0;
                        var a, b = "";
                        var c = I.La(new Date);
                        J.URL ? f.add("INTLOC", J.URL.split("?")[0]) : J.documentURI && f.add("INTLOC", J.documentURI.split("?")[0]);
                        f.add("STVER", ha);
                        f.add("BBNS", "FP");
                        m.enable_static_token && f.add("STTKN", na.Na(c), !0);
                        f.add("TZON", P.Oa().toString());
                        A && A.userAgent && f.add("UAGT", A.userAgent.slice(0, 400));
                        screen && f.add("JRES", screen.height + "x" + screen.width);
                        f.add("JENBL", "1");
                        var d = new Sa;
                        f.add("JBRNM", d.v);
                        f.add("JBRVR", d.version);
                        f.add("JBROS", d.U);
                        if (A) {
                            if (Da) {
                                var e = A.plugins.length;
                                for (a = 0; a < e; a++)
                                    b += A.plugins[a].filename + ";";
                                f.add("JPLGNS", b)
                            }
                            f.add("JLANG", A.language || A.systemLanguage);
                            f.add("JCOX", A.cookieEnabled ? "" : "1")
                        }
                        if (d) {
                            var g = new RegExp("^.*" + d.U + ";? ?","g");
                            if (d.h) {
                                var k = d.h.join("; ");
                                f.add("JBRCM", k.replace(g, ""))
                            }
                        }
                        f.add("JSTIME", c.substr(0, 19), !0);
                        var p = La("static");
                        W(' { "staticStatus": ' + p.isUnex + ", 'scriptList': \"" + p.scriptList + '" }');
                        f.add("MIST", p.scriptList);
                        m.enable_atrip && -1 === A.userAgent.indexOf(z.decode("RmlyZWZveC80NQ==")) ? Pa(!1) : ia();
                        m.enable_wstrip ? db() : V();
                        A && (f.add("NPLAT", A.platform),
                        f.add("APVER", A.appVersion),
                        f.add("APNAM", A.appName),
                        f.add("OSCPU", A.oscpu),
                        f.add("CCUR", A.hardwareConcurrency && A.hardwareConcurrency.toString()),
                        f.add("ULANG", A.userLanguage),
                        f.add("BLANG", A.browserLanguage),
                        f.add("NLANG", A.language),
                        f.add("SLANG", A.systemLanguage));
                        f.add("JREFRR", J.referrer);
                        cb("offline", "OFFLN");
                        bb();
                        (ta || void 0 === ta) && L("devicemotion", Na);
                        (ta || void 0 === ta) && L("deviceorientation", Ma);
                        fb();
                        L("mousemove", M);
                        L("mousedown", M);
                        L("mouseup", M);
                        L("touchstart", M);
                        L("touchend", M);
                        L("keydown", M);
                        L("keyup", M);
                        L("wheel", M);
                        L("scroll", M);
                        L("pointermove", M);
                        L("pointerdown", M);
                        typeof m[l.Z] === l.B && f.add("TRACE", "1");
                        f.add("MRSID", z.encode(ra(!1)));
                        f.add("CRSID", z.encode(ra(!0)));
                        f.add("BBOUT", m[l.s])
                    } catch (h) {
                        f.add("EMSG", t("io_sdp:", h, !0))
                    }
                P.l = P.j && P.pa
            }
        }
          , Q = m.io_ddp = {
            label: "io_ddp",
            l: !1,
            j: !1,
            O: !1,
            aa: function() {
                var a = Y;
                if (a) {
                    Q.j = !0;
                    if (!Q.l) {
                        try {
                            var b = a.nuidIndex, c = b && b.length, d;
                            for (d = 0; d < c; d++) {
                                var e = a[b[d]];
                                var g = b[d].toUpperCase();
                                var k = -1 < g.indexOf("TOKEN") || "SVRTIME" === g;
                                f.add(g, e, k)
                            }
                            A.userAgent === f.g.SUAGT ? f.remove("SUAGT") : f.add("JDIFF", "1");
                            if (fa = f.g.JSTOKEN)
                                X ? la(fa) || (f.remove("JSTOKEN"),
                                f.add("JTERR", l.J + I.Y(fa))) : (f.remove("JSTOKEN"),
                                f.add("FLRTD", fa))
                        } catch (p) {
                            f.add("EMSG", t(z.decode("aW9fZGRwOiBlcnJvciBoYW5kbGluZyBkeW4gZGF0YQ=="), p, !0))
                        }
                        Q.l = !0
                    }
                    Q.O = !0
                } else
                    m[l.u] && m[l.u]["fp" + z.decode("X2R5bl93ZHBfbG9hZF9mYWlsdXJl")] ? Q.l = !0 : gb ? Q.l = !0 : t(z.decode("aW9fZGRwLmNvbGxlY3Q6IGlvX2R5bl9vYmogdW5kZWZpbmVk"), "", !0)
            },
            _if_ubb: function() {
                1 === X && Q && Q._CTOKEN && (la(Q._CTOKEN) ? f.add("CTOKEN", Q._CTOKEN, !0) : f.add("CTERR", l.J + I.Y(Q._CTOKEN)))
            }
        }
          , Ya = {
            label: "nidCollector",
            l: !0,
            j: !1,
            O: !1,
            Ea: !0,
            aa: function() {
                Ya.j = !0;
                var a = window.nid;
                if (a) {
                    var b = a.getUserId;
                    b && b() ? (b = b().toString(),
                    100 < b.length && (b = b.substring(0, 100)),
                    f.Ha("BAID", b) || (f.add("BAID", b),
                    f.remove("BAERR"),
                    ka && f.add("BADGER", ((new Date).getTime() - ka).toString()))) : f.add("BAERR", "userId is not defined but BA library is present");
                    var c;
                    a.getVersion ? c = a.getVersion() : a.version && (c = a.version);
                    c && f.add("BAVER", c)
                }
            }
        };
        try {
            pa("io_sdp", P);
            pa("io_ddp", m.io_ddp);
            var Ea = new Ta("f604be51-ccf5-4d26-9cc2-3c44e1fdceb9");
            pa("io_ls", Ea);
            pa("nidCollector", Ya)
        } catch (a) {
            t("io_collect", a, !0)
        }
        var Ka = 0;
        ba.Sa && (ba.V = ab,
        ba.Va());
        J.addEventListener && J.addEventListener("DOMContentLoaded", oa, sa);
        (function() {
            m.api = {
                io_bb: {
                    add: function(a, b) {
                        return f.add(a, b)
                    }
                },
                ds_cb: function(a) {
                    var b;
                    if (Y = a) {
                        var c = Y.jsver;
                        a = Y.jstoken;
                        Y.skey && (b = v.encodeURIComponent(Y.skey));
                        qa = (m.contentServerHost || "").replace(/\/+$/, "");
                        var d = ("/" + (m.contentServerPath || "")).replace(/\/\//g, "/").replace(/\/+$/, "");
                        Ca = ("/" + (m.ctokenScriptPath || "")).replace(/\/\//g, "/").replace(/\/+$/, "");
                        d && (Ba += d,
                        Ba = Ba.replace("/iojs", ma));
                        d = La("dyn");
                        W(' { "dynStatus": ' + d.isUnex + ", 'scriptList': \"" + d.scriptList + '" }');
                        X = !1 === d.isUnex ? 1 : 0;
                        d.isUnex && f.add("FULOC", d.scriptList);
                        d = /^\d+\.\d+\.\d+$/;
                        d.test(ha) && d.test(c) && ha.split(".")[0] === c.split(".")[0] || t("ver mismatch: ( S:" + ha + ", D:" + c + " )", void 0, !0);
                        try {
                            X && (fa = a,
                            Ea && (Ea.h = fa),
                            m.enable_rtc && $a())
                        } catch (p) {
                            t("", p, !0)
                        }
                        a = "";
                        c = ha;
                        Wa && (c = c.replace(/\./g, "-"));
                        try {
                            var e = J.getElementsByTagName("head")[0];
                            var g = J.createElement("script");
                            g.setAttribute("language", "javascript");
                            g.setAttribute("type", "text/javascript");
                            if (Ca) {
                                var k = Ca;
                                k = b ? k.replace("latest", c + "/" + b) : k.replace("latest", c);
                                a += k;
                                a = a.replace("/iojs", ma).replace(/\/\//g, "/");
                                g.setAttribute("src", a);
                                e.appendChild(g)
                            } else
                                t("unable to find logo.js url", void 0, !0)
                        } catch (p) {
                            t("", p, !0)
                        }
                    }
                    oa(!0)
                },
                sic: function() {
                    return 0 === X
                },
                logError: function(a, b, c) {
                    return t(a, b, c)
                },
                decode: function(a) {
                    return z.decode(a)
                },
                last_error: m[l.da],
                stver: ha
            }
        }
        )()
    }
    )();
}
).call(this);
