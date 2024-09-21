// Found on airasia.com/en/gb on date of commit

!function() {
    "use strict";
    var commonjsGlobal = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
    function getDefaultExportFromCjs(e) {
        return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
    }
    var _typeof$1 = {
        exports: {}
    }, check = function(e) {
        return e && e.Math == Math && e
    }, global$n = check("object" == typeof globalThis && globalThis) || check("object" == typeof window && window) || check("object" == typeof self && self) || check("object" == typeof commonjsGlobal && commonjsGlobal) || function() {
        return this
    }() || Function("return this")(), objectGetOwnPropertyDescriptor = {}, fails$o = function(e) {
        try {
            return !!e()
        } catch (e) {
            return !0
        }
    }, fails$n = fails$o, descriptors = !fails$n(function() {
        return 7 != Object.defineProperty({}, 1, {
            get: function() {
                return 7
            }
        })[1]
    }), objectPropertyIsEnumerable = {}, $propertyIsEnumerable$1 = {}.propertyIsEnumerable, getOwnPropertyDescriptor$6 = Object.getOwnPropertyDescriptor, NASHORN_BUG = getOwnPropertyDescriptor$6 && !$propertyIsEnumerable$1.call({
        1: 2
    }, 1), createPropertyDescriptor$7 = (objectPropertyIsEnumerable.f = NASHORN_BUG ? function(e) {
        e = getOwnPropertyDescriptor$6(this, e);
        return !!e && e.enumerable
    }
    : $propertyIsEnumerable$1,
    function(e, t) {
        return {
            enumerable: !(1 & e),
            configurable: !(2 & e),
            writable: !(4 & e),
            value: t
        }
    }
    ), toString$d = {}.toString, classofRaw$1 = function(e) {
        return toString$d.call(e).slice(8, -1)
    }, fails$m = fails$o, classof$8 = classofRaw$1, split = "".split, indexedObject = fails$m(function() {
        return !Object("z").propertyIsEnumerable(0)
    }) ? function(e) {
        return "String" == classof$8(e) ? split.call(e, "") : Object(e)
    }
    : Object, requireObjectCoercible$9 = function(e) {
        if (null == e)
            throw TypeError("Can't call method on " + e);
        return e
    }, IndexedObject$3 = indexedObject, requireObjectCoercible$8 = requireObjectCoercible$9, toIndexedObject$9 = function(e) {
        return IndexedObject$3(requireObjectCoercible$8(e))
    }, isObject$i = function(e) {
        return "object" == typeof e ? null !== e : "function" == typeof e
    }, path$m = {}, path$l = path$m, global$m = global$n, aFunction$b = function(e) {
        return "function" == typeof e ? e : void 0
    }, getBuiltIn$c = function(e, t) {
        return arguments.length < 2 ? aFunction$b(path$l[e]) || aFunction$b(global$m[e]) : path$l[e] && path$l[e][t] || global$m[e] && global$m[e][t]
    }, getBuiltIn$b = getBuiltIn$c, engineUserAgent = getBuiltIn$b("navigator", "userAgent") || "", global$l = global$n, userAgent$7 = engineUserAgent, process$3 = global$l.process, Deno = global$l.Deno, versions = process$3 && process$3.versions || Deno && Deno.version, v8 = versions && versions.v8, match, version, engineV8Version = (v8 ? (match = v8.split("."),
    version = match[0] < 4 ? 1 : match[0] + match[1]) : userAgent$7 && (match = userAgent$7.match(/Edge\/(\d+)/),
    (!match || 74 <= match[1]) && (match = userAgent$7.match(/Chrome\/(\d+)/),
    match && (version = match[1]))),
    version && +version), V8_VERSION$3 = engineV8Version, fails$l = fails$o, nativeSymbol = !!Object.getOwnPropertySymbols && !fails$l(function() {
        var e = Symbol();
        return !String(e) || !(Object(e)instanceof Symbol) || !Symbol.sham && V8_VERSION$3 && V8_VERSION$3 < 41
    }), NATIVE_SYMBOL$2 = nativeSymbol, useSymbolAsUid = NATIVE_SYMBOL$2 && !Symbol.sham && "symbol" == typeof Symbol.iterator, getBuiltIn$a = getBuiltIn$c, USE_SYMBOL_AS_UID$1 = useSymbolAsUid, isSymbol$4 = USE_SYMBOL_AS_UID$1 ? function(e) {
        return "symbol" == typeof e
    }
    : function(e) {
        var t = getBuiltIn$a("Symbol");
        return "function" == typeof t && Object(e)instanceof t
    }
    , isObject$h = isObject$i, ordinaryToPrimitive$1 = function(e, t) {
        var r, n;
        if ("string" === t && "function" == typeof (r = e.toString) && !isObject$h(n = r.call(e)))
            return n;
        if ("function" == typeof (r = e.valueOf) && !isObject$h(n = r.call(e)))
            return n;
        if ("string" === t || "function" != typeof (r = e.toString) || isObject$h(n = r.call(e)))
            throw TypeError("Can't convert object to primitive value");
        return n
    }, shared$4 = {
        exports: {}
    }, isPure = !0, global$k = global$n, setGlobal$1 = function(t, r) {
        try {
            Object.defineProperty(global$k, t, {
                value: r,
                configurable: !0,
                writable: !0
            })
        } catch (e) {
            global$k[t] = r
        }
        return r
    }, global$j = global$n, setGlobal = setGlobal$1, SHARED = "DV__core-js_shared__", store$5 = global$j[SHARED] || setGlobal(SHARED, {}), sharedStore = store$5, store$4 = sharedStore, requireObjectCoercible$7 = ((shared$4.exports = function(e, t) {
        return store$4[e] || (store$4[e] = void 0 !== t ? t : {})
    }
    )("versions", []).push({
        version: "3.17.2",
        mode: "pure",
        copyright: "© 2021 Denis Pushkarev (zloirock.ru)"
    }),
    requireObjectCoercible$9), toObject$d = function(e) {
        return Object(requireObjectCoercible$7(e))
    }, toObject$c = toObject$d, hasOwnProperty = {}.hasOwnProperty, has$c = Object.hasOwn || function(e, t) {
        return hasOwnProperty.call(toObject$c(e), t)
    }
    , id$1 = 0, postfix = Math.random(), uid$4 = function(e) {
        return "Symbol(" + String(void 0 === e ? "" : e) + ")_" + (++id$1 + postfix).toString(36)
    }, global$i = global$n, shared$3 = shared$4.exports, has$b = has$c, uid$3 = uid$4, NATIVE_SYMBOL$1 = nativeSymbol, USE_SYMBOL_AS_UID = useSymbolAsUid, WellKnownSymbolsStore$1 = shared$3("wks"), Symbol$1 = global$i.Symbol, createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol$1 : Symbol$1 && Symbol$1.withoutSetter || uid$3, wellKnownSymbol$n = function(e) {
        return has$b(WellKnownSymbolsStore$1, e) && (NATIVE_SYMBOL$1 || "string" == typeof WellKnownSymbolsStore$1[e]) || (NATIVE_SYMBOL$1 && has$b(Symbol$1, e) ? WellKnownSymbolsStore$1[e] = Symbol$1[e] : WellKnownSymbolsStore$1[e] = createWellKnownSymbol("Symbol." + e)),
        WellKnownSymbolsStore$1[e]
    }, isObject$g = isObject$i, isSymbol$3 = isSymbol$4, ordinaryToPrimitive = ordinaryToPrimitive$1, wellKnownSymbol$m = wellKnownSymbol$n, TO_PRIMITIVE$1 = wellKnownSymbol$m("toPrimitive"), toPrimitive$1 = function(e, t) {
        if (!isObject$g(e) || isSymbol$3(e))
            return e;
        var r = e[TO_PRIMITIVE$1];
        if (void 0 === r)
            return ordinaryToPrimitive(e, t = void 0 === t ? "number" : t);
        if (r = r.call(e, t = void 0 === t ? "default" : t),
        !isObject$g(r) || isSymbol$3(r))
            return r;
        throw TypeError("Can't convert object to primitive value")
    }, toPrimitive = toPrimitive$1, isSymbol$2 = isSymbol$4, toPropertyKey$4 = function(e) {
        e = toPrimitive(e, "string");
        return isSymbol$2(e) ? e : String(e)
    }, global$h = global$n, isObject$f = isObject$i, document$3 = global$h.document, EXISTS = isObject$f(document$3) && isObject$f(document$3.createElement), documentCreateElement$1 = function(e) {
        return EXISTS ? document$3.createElement(e) : {}
    }, DESCRIPTORS$e = descriptors, fails$k = fails$o, createElement$1 = documentCreateElement$1, ie8DomDefine = !DESCRIPTORS$e && !fails$k(function() {
        return 7 != Object.defineProperty(createElement$1("div"), "a", {
            get: function() {
                return 7
            }
        }).a
    }), DESCRIPTORS$d = descriptors, propertyIsEnumerableModule$2 = objectPropertyIsEnumerable, createPropertyDescriptor$6 = createPropertyDescriptor$7, toIndexedObject$8 = toIndexedObject$9, toPropertyKey$3 = toPropertyKey$4, has$a = has$c, IE8_DOM_DEFINE$1 = ie8DomDefine, $getOwnPropertyDescriptor$1 = Object.getOwnPropertyDescriptor, fails$j = (objectGetOwnPropertyDescriptor.f = DESCRIPTORS$d ? $getOwnPropertyDescriptor$1 : function(e, t) {
        if (e = toIndexedObject$8(e),
        t = toPropertyKey$3(t),
        IE8_DOM_DEFINE$1)
            try {
                return $getOwnPropertyDescriptor$1(e, t)
            } catch (e) {}
        if (has$a(e, t))
            return createPropertyDescriptor$6(!propertyIsEnumerableModule$2.f.call(e, t), e[t])
    }
    ,
    fails$o), replacement = /#|\.prototype\./, isForced$2 = function(e, t) {
        e = data[normalize(e)];
        return e == POLYFILL || e != NATIVE && ("function" == typeof t ? fails$j(t) : !!t)
    }, normalize = isForced$2.normalize = function(e) {
        return String(e).replace(replacement, ".").toLowerCase()
    }
    , data = isForced$2.data = {}, NATIVE = isForced$2.NATIVE = "N", POLYFILL = isForced$2.POLYFILL = "P", isForced_1 = isForced$2, aFunction$a = function(e) {
        if ("function" != typeof e)
            throw TypeError(String(e) + " is not a function");
        return e
    }, aFunction$9 = aFunction$a, functionBindContext = function(n, o, e) {
        if (aFunction$9(n),
        void 0 === o)
            return n;
        switch (e) {
        case 0:
            return function() {
                return n.call(o)
            }
            ;
        case 1:
            return function(e) {
                return n.call(o, e)
            }
            ;
        case 2:
            return function(e, t) {
                return n.call(o, e, t)
            }
            ;
        case 3:
            return function(e, t, r) {
                return n.call(o, e, t, r)
            }
        }
        return function() {
            return n.apply(o, arguments)
        }
    }, objectDefineProperty = {}, isObject$e = isObject$i, anObject$e = function(e) {
        if (isObject$e(e))
            return e;
        throw TypeError(String(e) + " is not an object")
    }, DESCRIPTORS$c = descriptors, IE8_DOM_DEFINE = ie8DomDefine, anObject$d = anObject$e, toPropertyKey$2 = toPropertyKey$4, $defineProperty$1 = Object.defineProperty, DESCRIPTORS$b = (objectDefineProperty.f = DESCRIPTORS$c ? $defineProperty$1 : function(e, t, r) {
        if (anObject$d(e),
        t = toPropertyKey$2(t),
        anObject$d(r),
        IE8_DOM_DEFINE)
            try {
                return $defineProperty$1(e, t, r)
            } catch (e) {}
        if ("get"in r || "set"in r)
            throw TypeError("Accessors not supported");
        return "value"in r && (e[t] = r.value),
        e
    }
    ,
    descriptors), definePropertyModule$4 = objectDefineProperty, createPropertyDescriptor$5 = createPropertyDescriptor$7, createNonEnumerableProperty$a = DESCRIPTORS$b ? function(e, t, r) {
        return definePropertyModule$4.f(e, t, createPropertyDescriptor$5(1, r))
    }
    : function(e, t, r) {
        return e[t] = r,
        e
    }
    , global$g = global$n, getOwnPropertyDescriptor$5 = objectGetOwnPropertyDescriptor.f, isForced$1 = isForced_1, path$k = path$m, bind$8 = functionBindContext, createNonEnumerableProperty$9 = createNonEnumerableProperty$a, has$9 = has$c, wrapConstructor = function(n) {
        function e(e, t, r) {
            if (this instanceof n) {
                switch (arguments.length) {
                case 0:
                    return new n;
                case 1:
                    return new n(e);
                case 2:
                    return new n(e,t)
                }
                return new n(e,t,r)
            }
            return n.apply(this, arguments)
        }
        return e.prototype = n.prototype,
        e
    }, _export = function(e, t) {
        var r, n, o, a, i, s = e.target, l = e.global, c = e.stat, u = e.proto, p = l ? global$g : c ? global$g[s] : (global$g[s] || {}).prototype, d = l ? path$k : path$k[s] || createNonEnumerableProperty$9(path$k, s, {})[s], f = d.prototype;
        for (r in t)
            a = !isForced$1(l ? r : s + (c ? "." : "#") + r, e.forced) && p && has$9(p, r),
            o = d[r],
            a && (i = e.noTargetGet ? (i = getOwnPropertyDescriptor$5(p, r)) && i.value : p[r]),
            n = a && i ? i : t[r],
            a && typeof o == typeof n || (a = e.bind && a ? bind$8(n, global$g) : e.wrap && a ? wrapConstructor(n) : u && "function" == typeof n ? bind$8(Function.call, n) : n,
            (e.sham || n && n.sham || o && o.sham) && createNonEnumerableProperty$9(a, "sham", !0),
            createNonEnumerableProperty$9(d, r, a),
            u && (has$9(path$k, o = s + "Prototype") || createNonEnumerableProperty$9(path$k, o, {}),
            createNonEnumerableProperty$9(path$k[o], r, n),
            e.real && f && !f[r] && createNonEnumerableProperty$9(f, r, n)))
    }, classof$7 = classofRaw$1, isArray$9 = Array.isArray || function(e) {
        return "Array" == classof$7(e)
    }
    , ceil$1 = Math.ceil, floor$3 = Math.floor, toInteger$5 = function(e) {
        return isNaN(e = +e) ? 0 : (0 < e ? floor$3 : ceil$1)(e)
    }, toInteger$4 = toInteger$5, min$4 = Math.min, toLength$d = function(e) {
        return 0 < e ? min$4(toInteger$4(e), 9007199254740991) : 0
    }, toPropertyKey$1 = toPropertyKey$4, definePropertyModule$3 = objectDefineProperty, createPropertyDescriptor$4 = createPropertyDescriptor$7, createProperty$5 = function(e, t, r) {
        t = toPropertyKey$1(t);
        t in e ? definePropertyModule$3.f(e, t, createPropertyDescriptor$4(0, r)) : e[t] = r
    }, isObject$d = isObject$i, isArray$8 = isArray$9, wellKnownSymbol$l = wellKnownSymbol$n, SPECIES$5 = wellKnownSymbol$l("species"), arraySpeciesConstructor$1 = function(e) {
        var t;
        return void 0 === (t = isArray$8(e) && ("function" == typeof (t = e.constructor) && (t === Array || isArray$8(t.prototype)) || isObject$d(t) && null === (t = t[SPECIES$5])) ? void 0 : t) ? Array : t
    }, arraySpeciesConstructor = arraySpeciesConstructor$1, arraySpeciesCreate$3 = function(e, t) {
        return new (arraySpeciesConstructor(e))(0 === t ? 0 : t)
    }, fails$i = fails$o, wellKnownSymbol$k = wellKnownSymbol$n, V8_VERSION$2 = engineV8Version, SPECIES$4 = wellKnownSymbol$k("species"), arrayMethodHasSpeciesSupport$5 = function(t) {
        return 51 <= V8_VERSION$2 || !fails$i(function() {
            var e = [];
            return (e.constructor = {})[SPECIES$4] = function() {
                return {
                    foo: 1
                }
            }
            ,
            1 !== e[t](Boolean).foo
        })
    }, $$F = _export, fails$h = fails$o, isArray$7 = isArray$9, isObject$c = isObject$i, toObject$b = toObject$d, toLength$c = toLength$d, createProperty$4 = createProperty$5, arraySpeciesCreate$2 = arraySpeciesCreate$3, arrayMethodHasSpeciesSupport$4 = arrayMethodHasSpeciesSupport$5, wellKnownSymbol$j = wellKnownSymbol$n, V8_VERSION$1 = engineV8Version, IS_CONCAT_SPREADABLE = wellKnownSymbol$j("isConcatSpreadable"), MAX_SAFE_INTEGER$1 = 9007199254740991, MAXIMUM_ALLOWED_INDEX_EXCEEDED = "Maximum allowed index exceeded", IS_CONCAT_SPREADABLE_SUPPORT = 51 <= V8_VERSION$1 || !fails$h(function() {
        var e = [];
        return e[IS_CONCAT_SPREADABLE] = !1,
        e.concat()[0] !== e
    }), SPECIES_SUPPORT = arrayMethodHasSpeciesSupport$4("concat"), isConcatSpreadable = function(e) {
        if (!isObject$c(e))
            return !1;
        var t = e[IS_CONCAT_SPREADABLE];
        return void 0 !== t ? !!t : isArray$7(e)
    }, FORCED$5 = !IS_CONCAT_SPREADABLE_SUPPORT || !SPECIES_SUPPORT, isSymbol$1 = ($$F({
        target: "Array",
        proto: !0,
        forced: FORCED$5
    }, {
        concat: function(e) {
            for (var t, r, n, o = toObject$b(this), a = arraySpeciesCreate$2(o, 0), i = 0, s = -1, l = arguments.length; s < l; s++)
                if (isConcatSpreadable(n = -1 === s ? o : arguments[s])) {
                    if (r = toLength$c(n.length),
                    MAX_SAFE_INTEGER$1 < i + r)
                        throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
                    for (t = 0; t < r; t++,
                    i++)
                        t in n && createProperty$4(a, i, n[t])
                } else {
                    if (MAX_SAFE_INTEGER$1 <= i)
                        throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
                    createProperty$4(a, i++, n)
                }
            return a.length = i,
            a
        }
    }),
    isSymbol$4), toString$c = function(e) {
        if (isSymbol$1(e))
            throw TypeError("Cannot convert a Symbol value to a string");
        return String(e)
    }, toInteger$3 = toInteger$5, max$2 = Math.max, min$3 = Math.min, toAbsoluteIndex$4 = function(e, t) {
        e = toInteger$3(e);
        return e < 0 ? max$2(e + t, 0) : min$3(e, t)
    }, toIndexedObject$7 = toIndexedObject$9, toLength$b = toLength$d, toAbsoluteIndex$3 = toAbsoluteIndex$4, createMethod$5 = function(s) {
        return function(e, t, r) {
            var n, o = toIndexedObject$7(e), a = toLength$b(o.length), i = toAbsoluteIndex$3(r, a);
            if (s && t != t) {
                for (; i < a; )
                    if ((n = o[i++]) != n)
                        return !0
            } else
                for (; i < a; i++)
                    if ((s || i in o) && o[i] === t)
                        return s || i || 0;
            return !s && -1
        }
    }, arrayIncludes$1 = {
        includes: createMethod$5(!0),
        indexOf: createMethod$5(!1)
    }, hiddenKeys$6 = {}, has$8 = has$c, toIndexedObject$6 = toIndexedObject$9, indexOf$4 = arrayIncludes$1.indexOf, hiddenKeys$5 = hiddenKeys$6, objectKeysInternal = function(e, t) {
        var r, n = toIndexedObject$6(e), o = 0, a = [];
        for (r in n)
            !has$8(hiddenKeys$5, r) && has$8(n, r) && a.push(r);
        for (; t.length > o; )
            !has$8(n, r = t[o++]) || ~indexOf$4(a, r) || a.push(r);
        return a
    }, enumBugKeys$3 = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"], internalObjectKeys$1 = objectKeysInternal, enumBugKeys$2 = enumBugKeys$3, objectKeys$3 = Object.keys || function(e) {
        return internalObjectKeys$1(e, enumBugKeys$2)
    }
    , DESCRIPTORS$a = descriptors, definePropertyModule$2 = objectDefineProperty, anObject$c = anObject$e, objectKeys$2 = objectKeys$3, objectDefineProperties = DESCRIPTORS$a ? Object.defineProperties : function(e, t) {
        anObject$c(e);
        for (var r, n = objectKeys$2(t), o = n.length, a = 0; a < o; )
            definePropertyModule$2.f(e, r = n[a++], t[r]);
        return e
    }
    , getBuiltIn$9 = getBuiltIn$c, html$2 = getBuiltIn$9("document", "documentElement"), shared$2 = shared$4.exports, uid$2 = uid$4, keys$3 = shared$2("keys"), sharedKey$4 = function(e) {
        return keys$3[e] || (keys$3[e] = uid$2(e))
    }, anObject$b = anObject$e, defineProperties$1 = objectDefineProperties, enumBugKeys$1 = enumBugKeys$3, hiddenKeys$4 = hiddenKeys$6, html$1 = html$2, documentCreateElement = documentCreateElement$1, sharedKey$3 = sharedKey$4, GT = ">", LT = "<", PROTOTYPE$1 = "prototype", SCRIPT = "script", IE_PROTO$1 = sharedKey$3("IE_PROTO"), EmptyConstructor = function() {}, scriptTag = function(e) {
        return LT + SCRIPT + GT + e + LT + "/" + SCRIPT + GT
    }, NullProtoObjectViaActiveX = function(e) {
        e.write(scriptTag("")),
        e.close();
        var t = e.parentWindow.Object;
        return e = null,
        t
    }, NullProtoObjectViaIFrame = function() {
        var e = documentCreateElement("iframe")
          , t = "java" + SCRIPT + ":";
        return e.style.display = "none",
        html$1.appendChild(e),
        e.src = String(t),
        (t = e.contentWindow.document).open(),
        t.write(scriptTag("document.F=Object")),
        t.close(),
        t.F
    }, activeXDocument, NullProtoObject = function() {
        try {
            activeXDocument = new ActiveXObject("htmlfile")
        } catch (e) {}
        NullProtoObject = "undefined" == typeof document || document.domain && activeXDocument ? NullProtoObjectViaActiveX(activeXDocument) : NullProtoObjectViaIFrame();
        for (var e = enumBugKeys$1.length; e--; )
            delete NullProtoObject[PROTOTYPE$1][enumBugKeys$1[e]];
        return NullProtoObject()
    }, objectCreate = (hiddenKeys$4[IE_PROTO$1] = !0,
    Object.create || function(e, t) {
        var r;
        return null !== e ? (EmptyConstructor[PROTOTYPE$1] = anObject$b(e),
        r = new EmptyConstructor,
        EmptyConstructor[PROTOTYPE$1] = null,
        r[IE_PROTO$1] = e) : r = NullProtoObject(),
        void 0 === t ? r : defineProperties$1(r, t)
    }
    ), objectGetOwnPropertyNames = {}, internalObjectKeys = objectKeysInternal, enumBugKeys = enumBugKeys$3, hiddenKeys$3 = enumBugKeys.concat("length", "prototype"), objectGetOwnPropertyNamesExternal = (objectGetOwnPropertyNames.f = Object.getOwnPropertyNames || function(e) {
        return internalObjectKeys(e, hiddenKeys$3)
    }
    ,
    {}), toIndexedObject$5 = toIndexedObject$9, $getOwnPropertyNames$1 = objectGetOwnPropertyNames.f, toString$b = {}.toString, windowNames = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [], getWindowNames = function(e) {
        try {
            return $getOwnPropertyNames$1(e)
        } catch (e) {
            return windowNames.slice()
        }
    }, objectGetOwnPropertySymbols = (objectGetOwnPropertyNamesExternal.f = function(e) {
        return windowNames && "[object Window]" == toString$b.call(e) ? getWindowNames(e) : $getOwnPropertyNames$1(toIndexedObject$5(e))
    }
    ,
    {}), createNonEnumerableProperty$8 = (objectGetOwnPropertySymbols.f = Object.getOwnPropertySymbols,
    createNonEnumerableProperty$a), redefine$5 = function(e, t, r, n) {
        n && n.enumerable ? e[t] = r : createNonEnumerableProperty$8(e, t, r)
    }, wellKnownSymbolWrapped = {}, wellKnownSymbol$i = wellKnownSymbol$n, path$j = (wellKnownSymbolWrapped.f = wellKnownSymbol$i,
    path$m), has$7 = has$c, wrappedWellKnownSymbolModule$1 = wellKnownSymbolWrapped, defineProperty$b = objectDefineProperty.f, defineWellKnownSymbol$l = function(e) {
        var t = path$j.Symbol || (path$j.Symbol = {});
        has$7(t, e) || defineProperty$b(t, e, {
            value: wrappedWellKnownSymbolModule$1.f(e)
        })
    }, wellKnownSymbol$h = wellKnownSymbol$n, TO_STRING_TAG$3 = wellKnownSymbol$h("toStringTag"), test$1 = {}, toStringTagSupport = (test$1[TO_STRING_TAG$3] = "z",
    "[object z]" === String(test$1)), TO_STRING_TAG_SUPPORT$2 = toStringTagSupport, classofRaw = classofRaw$1, wellKnownSymbol$g = wellKnownSymbol$n, TO_STRING_TAG$2 = wellKnownSymbol$g("toStringTag"), CORRECT_ARGUMENTS = "Arguments" == classofRaw(function() {
        return arguments
    }()), tryGet = function(e, t) {
        try {
            return e[t]
        } catch (e) {}
    }, classof$6 = TO_STRING_TAG_SUPPORT$2 ? classofRaw : function(e) {
        var t;
        return void 0 === e ? "Undefined" : null === e ? "Null" : "string" == typeof (t = tryGet(e = Object(e), TO_STRING_TAG$2)) ? t : CORRECT_ARGUMENTS ? classofRaw(e) : "Object" == (t = classofRaw(e)) && "function" == typeof e.callee ? "Arguments" : t
    }
    , TO_STRING_TAG_SUPPORT$1 = toStringTagSupport, classof$5 = classof$6, objectToString = TO_STRING_TAG_SUPPORT$1 ? {}.toString : function() {
        return "[object " + classof$5(this) + "]"
    }
    , TO_STRING_TAG_SUPPORT = toStringTagSupport, defineProperty$a = objectDefineProperty.f, createNonEnumerableProperty$7 = createNonEnumerableProperty$a, has$6 = has$c, toString$a = objectToString, wellKnownSymbol$f = wellKnownSymbol$n, TO_STRING_TAG$1 = wellKnownSymbol$f("toStringTag"), setToStringTag$8 = function(e, t, r, n) {
        e && (r = r ? e : e.prototype,
        has$6(r, TO_STRING_TAG$1) || defineProperty$a(r, TO_STRING_TAG$1, {
            configurable: !0,
            value: t
        }),
        n && !TO_STRING_TAG_SUPPORT && createNonEnumerableProperty$7(r, "toString", toString$a))
    }, store$3 = sharedStore, functionToString = Function.toString, inspectSource$2 = ("function" != typeof store$3.inspectSource && (store$3.inspectSource = function(e) {
        return functionToString.call(e)
    }
    ),
    store$3.inspectSource), global$f = global$n, inspectSource$1 = inspectSource$2, WeakMap$2 = global$f.WeakMap, nativeWeakMap = "function" == typeof WeakMap$2 && /native code/.test(inspectSource$1(WeakMap$2)), NATIVE_WEAK_MAP = nativeWeakMap, global$e = global$n, isObject$b = isObject$i, createNonEnumerableProperty$6 = createNonEnumerableProperty$a, objectHas = has$c, shared$1 = sharedStore, sharedKey$2 = sharedKey$4, hiddenKeys$2 = hiddenKeys$6, OBJECT_ALREADY_INITIALIZED = "Object already initialized", WeakMap$1 = global$e.WeakMap, set$4, get, has$5, enforce = function(e) {
        return has$5(e) ? get(e) : set$4(e, {})
    }, getterFor = function(t) {
        return function(e) {
            if (isObject$b(e) && (e = get(e)).type === t)
                return e;
            throw TypeError("Incompatible receiver, " + t + " required")
        }
    }, store$2, wmget, wmhas, wmset, set$4, get, has$5, STATE, internalState = (has$5 = NATIVE_WEAK_MAP || shared$1.state ? (store$2 = shared$1.state || (shared$1.state = new WeakMap$1),
    wmget = store$2.get,
    wmhas = store$2.has,
    wmset = store$2.set,
    set$4 = function(e, t) {
        if (wmhas.call(store$2, e))
            throw new TypeError(OBJECT_ALREADY_INITIALIZED);
        return t.facade = e,
        wmset.call(store$2, e, t),
        t
    }
    ,
    get = function(e) {
        return wmget.call(store$2, e) || {}
    }
    ,
    function(e) {
        return wmhas.call(store$2, e)
    }
    ) : (STATE = sharedKey$2("state"),
    hiddenKeys$2[STATE] = !0,
    set$4 = function(e, t) {
        if (objectHas(e, STATE))
            throw new TypeError(OBJECT_ALREADY_INITIALIZED);
        return t.facade = e,
        createNonEnumerableProperty$6(e, STATE, t),
        t
    }
    ,
    get = function(e) {
        return objectHas(e, STATE) ? e[STATE] : {}
    }
    ,
    function(e) {
        return objectHas(e, STATE)
    }
    ),
    {
        set: set$4,
        get: get,
        has: has$5,
        enforce: enforce,
        getterFor: getterFor
    }), bind$7 = functionBindContext, IndexedObject$2 = indexedObject, toObject$a = toObject$d, toLength$a = toLength$d, arraySpeciesCreate$1 = arraySpeciesCreate$3, push = [].push, createMethod$4 = function(d) {
        var f = 1 == d
          , h = 2 == d
          , g = 3 == d
          , m = 4 == d
          , y = 6 == d
          , S = 7 == d
          , v = 5 == d || y;
        return function(e, t, r, n) {
            for (var o, a, i = toObject$a(e), s = IndexedObject$2(i), l = bind$7(t, r, 3), c = toLength$a(s.length), u = 0, t = n || arraySpeciesCreate$1, p = f ? t(e, c) : h || S ? t(e, 0) : void 0; u < c; u++)
                if ((v || u in s) && (a = l(o = s[u], u, i),
                d))
                    if (f)
                        p[u] = a;
                    else if (a)
                        switch (d) {
                        case 3:
                            return !0;
                        case 5:
                            return o;
                        case 6:
                            return u;
                        case 2:
                            push.call(p, o)
                        }
                    else
                        switch (d) {
                        case 4:
                            return !1;
                        case 7:
                            push.call(p, o)
                        }
            return y ? -1 : g || m ? m : p
        }
    }, arrayIteration = {
        forEach: createMethod$4(0),
        map: createMethod$4(1),
        filter: createMethod$4(2),
        some: createMethod$4(3),
        every: createMethod$4(4),
        find: createMethod$4(5),
        findIndex: createMethod$4(6),
        filterReject: createMethod$4(7)
    }, $$E = _export, global$d = global$n, getBuiltIn$8 = getBuiltIn$c, DESCRIPTORS$9 = descriptors, NATIVE_SYMBOL = nativeSymbol, fails$g = fails$o, has$4 = has$c, isArray$6 = isArray$9, isObject$a = isObject$i, isSymbol = isSymbol$4, anObject$a = anObject$e, toObject$9 = toObject$d, toIndexedObject$4 = toIndexedObject$9, toPropertyKey = toPropertyKey$4, $toString$2 = toString$c, createPropertyDescriptor$3 = createPropertyDescriptor$7, nativeObjectCreate = objectCreate, objectKeys$1 = objectKeys$3, getOwnPropertyNamesModule$2 = objectGetOwnPropertyNames, getOwnPropertyNamesExternal = objectGetOwnPropertyNamesExternal, getOwnPropertySymbolsModule$2 = objectGetOwnPropertySymbols, getOwnPropertyDescriptorModule$1 = objectGetOwnPropertyDescriptor, definePropertyModule$1 = objectDefineProperty, propertyIsEnumerableModule$1 = objectPropertyIsEnumerable, createNonEnumerableProperty$5 = createNonEnumerableProperty$a, redefine$4 = redefine$5, shared = shared$4.exports, sharedKey$1 = sharedKey$4, hiddenKeys$1 = hiddenKeys$6, uid$1 = uid$4, wellKnownSymbol$e = wellKnownSymbol$n, wrappedWellKnownSymbolModule = wellKnownSymbolWrapped, defineWellKnownSymbol$k = defineWellKnownSymbol$l, setToStringTag$7 = setToStringTag$8, InternalStateModule$7 = internalState, $forEach = arrayIteration.forEach, HIDDEN = sharedKey$1("hidden"), SYMBOL = "Symbol", PROTOTYPE = "prototype", TO_PRIMITIVE = wellKnownSymbol$e("toPrimitive"), setInternalState$7 = InternalStateModule$7.set, getInternalState$3 = InternalStateModule$7.getterFor(SYMBOL), ObjectPrototype$1 = Object[PROTOTYPE], $Symbol = global$d.Symbol, $stringify$1 = getBuiltIn$8("JSON", "stringify"), nativeGetOwnPropertyDescriptor$1 = getOwnPropertyDescriptorModule$1.f, nativeDefineProperty = definePropertyModule$1.f, nativeGetOwnPropertyNames = getOwnPropertyNamesExternal.f, nativePropertyIsEnumerable = propertyIsEnumerableModule$1.f, AllSymbols = shared("symbols"), ObjectPrototypeSymbols = shared("op-symbols"), StringToSymbolRegistry = shared("string-to-symbol-registry"), SymbolToStringRegistry = shared("symbol-to-string-registry"), WellKnownSymbolsStore = shared("wks"), QObject = global$d.QObject, USE_SETTER = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild, setSymbolDescriptor = DESCRIPTORS$9 && fails$g(function() {
        return 7 != nativeObjectCreate(nativeDefineProperty({}, "a", {
            get: function() {
                return nativeDefineProperty(this, "a", {
                    value: 7
                }).a
            }
        })).a
    }) ? function(e, t, r) {
        var n = nativeGetOwnPropertyDescriptor$1(ObjectPrototype$1, t);
        n && delete ObjectPrototype$1[t],
        nativeDefineProperty(e, t, r),
        n && e !== ObjectPrototype$1 && nativeDefineProperty(ObjectPrototype$1, t, n)
    }
    : nativeDefineProperty, wrap$1 = function(e, t) {
        var r = AllSymbols[e] = nativeObjectCreate($Symbol[PROTOTYPE]);
        return setInternalState$7(r, {
            type: SYMBOL,
            tag: e,
            description: t
        }),
        DESCRIPTORS$9 || (r.description = t),
        r
    }, $defineProperty = function(e, t, r) {
        e === ObjectPrototype$1 && $defineProperty(ObjectPrototypeSymbols, t, r),
        anObject$a(e);
        t = toPropertyKey(t);
        return anObject$a(r),
        has$4(AllSymbols, t) ? (r.enumerable ? (has$4(e, HIDDEN) && e[HIDDEN][t] && (e[HIDDEN][t] = !1),
        r = nativeObjectCreate(r, {
            enumerable: createPropertyDescriptor$3(0, !1)
        })) : (has$4(e, HIDDEN) || nativeDefineProperty(e, HIDDEN, createPropertyDescriptor$3(1, {})),
        e[HIDDEN][t] = !0),
        setSymbolDescriptor(e, t, r)) : nativeDefineProperty(e, t, r)
    }, $defineProperties = function(t, e) {
        anObject$a(t);
        var r = toIndexedObject$4(e)
          , e = objectKeys$1(r).concat($getOwnPropertySymbols(r));
        return $forEach(e, function(e) {
            DESCRIPTORS$9 && !$propertyIsEnumerable.call(r, e) || $defineProperty(t, e, r[e])
        }),
        t
    }, $create = function(e, t) {
        return void 0 === t ? nativeObjectCreate(e) : $defineProperties(nativeObjectCreate(e), t)
    }, $propertyIsEnumerable = function(e) {
        var e = toPropertyKey(e)
          , t = nativePropertyIsEnumerable.call(this, e);
        return !(this === ObjectPrototype$1 && has$4(AllSymbols, e) && !has$4(ObjectPrototypeSymbols, e)) && (!(t || !has$4(this, e) || !has$4(AllSymbols, e) || has$4(this, HIDDEN) && this[HIDDEN][e]) || t)
    }, $getOwnPropertyDescriptor = function(e, t) {
        var r, e = toIndexedObject$4(e), t = toPropertyKey(t);
        if (e !== ObjectPrototype$1 || !has$4(AllSymbols, t) || has$4(ObjectPrototypeSymbols, t))
            return r = nativeGetOwnPropertyDescriptor$1(e, t),
            !r || !has$4(AllSymbols, t) || has$4(e, HIDDEN) && e[HIDDEN][t] || (r.enumerable = !0),
            r
    }, $getOwnPropertyNames = function(e) {
        var e = nativeGetOwnPropertyNames(toIndexedObject$4(e))
          , t = [];
        return $forEach(e, function(e) {
            has$4(AllSymbols, e) || has$4(hiddenKeys$1, e) || t.push(e)
        }),
        t
    }, $getOwnPropertySymbols = function(e) {
        var t = e === ObjectPrototype$1
          , e = nativeGetOwnPropertyNames(t ? ObjectPrototypeSymbols : toIndexedObject$4(e))
          , r = [];
        return $forEach(e, function(e) {
            !has$4(AllSymbols, e) || t && !has$4(ObjectPrototype$1, e) || r.push(AllSymbols[e])
        }),
        r
    }, FORCED_JSON_STRINGIFY, defineWellKnownSymbol$j = (NATIVE_SYMBOL || ($Symbol = function() {
        if (this instanceof $Symbol)
            throw TypeError("Symbol is not a constructor");
        var e = arguments.length && void 0 !== arguments[0] ? $toString$2(arguments[0]) : void 0
          , t = uid$1(e)
          , r = function(e) {
            this === ObjectPrototype$1 && r.call(ObjectPrototypeSymbols, e),
            has$4(this, HIDDEN) && has$4(this[HIDDEN], t) && (this[HIDDEN][t] = !1),
            setSymbolDescriptor(this, t, createPropertyDescriptor$3(1, e))
        };
        return DESCRIPTORS$9 && USE_SETTER && setSymbolDescriptor(ObjectPrototype$1, t, {
            configurable: !0,
            set: r
        }),
        wrap$1(t, e)
    }
    ,
    redefine$4($Symbol[PROTOTYPE], "toString", function() {
        return getInternalState$3(this).tag
    }),
    redefine$4($Symbol, "withoutSetter", function(e) {
        return wrap$1(uid$1(e), e)
    }),
    propertyIsEnumerableModule$1.f = $propertyIsEnumerable,
    definePropertyModule$1.f = $defineProperty,
    getOwnPropertyDescriptorModule$1.f = $getOwnPropertyDescriptor,
    getOwnPropertyNamesModule$2.f = getOwnPropertyNamesExternal.f = $getOwnPropertyNames,
    getOwnPropertySymbolsModule$2.f = $getOwnPropertySymbols,
    wrappedWellKnownSymbolModule.f = function(e) {
        return wrap$1(wellKnownSymbol$e(e), e)
    }
    ,
    DESCRIPTORS$9 && nativeDefineProperty($Symbol[PROTOTYPE], "description", {
        configurable: !0,
        get: function() {
            return getInternalState$3(this).description
        }
    })),
    $$E({
        global: !0,
        wrap: !0,
        forced: !NATIVE_SYMBOL,
        sham: !NATIVE_SYMBOL
    }, {
        Symbol: $Symbol
    }),
    $forEach(objectKeys$1(WellKnownSymbolsStore), function(e) {
        defineWellKnownSymbol$k(e)
    }),
    $$E({
        target: SYMBOL,
        stat: !0,
        forced: !NATIVE_SYMBOL
    }, {
        for: function(e) {
            e = $toString$2(e);
            if (has$4(StringToSymbolRegistry, e))
                return StringToSymbolRegistry[e];
            var t = $Symbol(e);
            return StringToSymbolRegistry[e] = t,
            SymbolToStringRegistry[t] = e,
            t
        },
        keyFor: function(e) {
            if (!isSymbol(e))
                throw TypeError(e + " is not a symbol");
            if (has$4(SymbolToStringRegistry, e))
                return SymbolToStringRegistry[e]
        },
        useSetter: function() {
            USE_SETTER = !0
        },
        useSimple: function() {
            USE_SETTER = !1
        }
    }),
    $$E({
        target: "Object",
        stat: !0,
        forced: !NATIVE_SYMBOL,
        sham: !DESCRIPTORS$9
    }, {
        create: $create,
        defineProperty: $defineProperty,
        defineProperties: $defineProperties,
        getOwnPropertyDescriptor: $getOwnPropertyDescriptor
    }),
    $$E({
        target: "Object",
        stat: !0,
        forced: !NATIVE_SYMBOL
    }, {
        getOwnPropertyNames: $getOwnPropertyNames,
        getOwnPropertySymbols: $getOwnPropertySymbols
    }),
    $$E({
        target: "Object",
        stat: !0,
        forced: fails$g(function() {
            getOwnPropertySymbolsModule$2.f(1)
        })
    }, {
        getOwnPropertySymbols: function(e) {
            return getOwnPropertySymbolsModule$2.f(toObject$9(e))
        }
    }),
    $stringify$1 && (FORCED_JSON_STRINGIFY = !NATIVE_SYMBOL || fails$g(function() {
        var e = $Symbol();
        return "[null]" != $stringify$1([e]) || "{}" != $stringify$1({
            a: e
        }) || "{}" != $stringify$1(Object(e))
    }),
    $$E({
        target: "JSON",
        stat: !0,
        forced: FORCED_JSON_STRINGIFY
    }, {
        stringify: function(e, t, r) {
            for (var n, o = [e], a = 1; a < arguments.length; )
                o.push(arguments[a++]);
            if ((isObject$a(n = t) || void 0 !== e) && !isSymbol(e))
                return isArray$6(t) || (t = function(e, t) {
                    if ("function" == typeof n && (t = n.call(this, e, t)),
                    !isSymbol(t))
                        return t
                }
                ),
                o[1] = t,
                $stringify$1.apply(null, o)
        }
    })),
    $Symbol[PROTOTYPE][TO_PRIMITIVE] || createNonEnumerableProperty$5($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf),
    setToStringTag$7($Symbol, SYMBOL),
    hiddenKeys$1[HIDDEN] = !0,
    defineWellKnownSymbol$l), defineWellKnownSymbol$i = (defineWellKnownSymbol$j("asyncIterator"),
    defineWellKnownSymbol$l), defineWellKnownSymbol$h = (defineWellKnownSymbol$i("hasInstance"),
    defineWellKnownSymbol$l), defineWellKnownSymbol$g = (defineWellKnownSymbol$h("isConcatSpreadable"),
    defineWellKnownSymbol$l), defineWellKnownSymbol$f = (defineWellKnownSymbol$g("iterator"),
    defineWellKnownSymbol$l), defineWellKnownSymbol$e = (defineWellKnownSymbol$f("match"),
    defineWellKnownSymbol$l), defineWellKnownSymbol$d = (defineWellKnownSymbol$e("matchAll"),
    defineWellKnownSymbol$l), defineWellKnownSymbol$c = (defineWellKnownSymbol$d("replace"),
    defineWellKnownSymbol$l), defineWellKnownSymbol$b = (defineWellKnownSymbol$c("search"),
    defineWellKnownSymbol$l), defineWellKnownSymbol$a = (defineWellKnownSymbol$b("species"),
    defineWellKnownSymbol$l), defineWellKnownSymbol$9 = (defineWellKnownSymbol$a("split"),
    defineWellKnownSymbol$l), defineWellKnownSymbol$8 = (defineWellKnownSymbol$9("toPrimitive"),
    defineWellKnownSymbol$l), defineWellKnownSymbol$7 = (defineWellKnownSymbol$8("toStringTag"),
    defineWellKnownSymbol$l), global$c = (defineWellKnownSymbol$7("unscopables"),
    global$n), setToStringTag$6 = setToStringTag$8, path$i = (setToStringTag$6(global$c.JSON, "JSON", !0),
    path$m), symbol$4 = path$i.Symbol, iterators = {}, fails$f = fails$o, correctPrototypeGetter = !fails$f(function() {
        function e() {}
        return e.prototype.constructor = null,
        Object.getPrototypeOf(new e) !== e.prototype
    }), has$3 = has$c, toObject$8 = toObject$d, sharedKey = sharedKey$4, CORRECT_PROTOTYPE_GETTER$1 = correctPrototypeGetter, IE_PROTO = sharedKey("IE_PROTO"), ObjectPrototype = Object.prototype, objectGetPrototypeOf = CORRECT_PROTOTYPE_GETTER$1 ? Object.getPrototypeOf : function(e) {
        return e = toObject$8(e),
        has$3(e, IE_PROTO) ? e[IE_PROTO] : "function" == typeof e.constructor && e instanceof e.constructor ? e.constructor.prototype : e instanceof Object ? ObjectPrototype : null
    }
    , fails$e = fails$o, getPrototypeOf$7 = objectGetPrototypeOf, createNonEnumerableProperty$4 = createNonEnumerableProperty$a, has$2 = has$c, wellKnownSymbol$d = wellKnownSymbol$n, ITERATOR$6 = wellKnownSymbol$d("iterator"), BUGGY_SAFARI_ITERATORS$1 = !1, returnThis$2 = function() {
        return this
    }, IteratorPrototype$2, PrototypeOfArrayIteratorPrototype, arrayIterator, NEW_ITERATOR_PROTOTYPE = ([].keys && (arrayIterator = [].keys(),
    "next"in arrayIterator ? (PrototypeOfArrayIteratorPrototype = getPrototypeOf$7(getPrototypeOf$7(arrayIterator)),
    PrototypeOfArrayIteratorPrototype !== Object.prototype && (IteratorPrototype$2 = PrototypeOfArrayIteratorPrototype)) : BUGGY_SAFARI_ITERATORS$1 = !0),
    null == IteratorPrototype$2 || fails$e(function() {
        var e = {};
        return IteratorPrototype$2[ITERATOR$6].call(e) !== e
    })), iteratorsCore = (NEW_ITERATOR_PROTOTYPE && (IteratorPrototype$2 = {}),
    NEW_ITERATOR_PROTOTYPE && !has$2(IteratorPrototype$2, ITERATOR$6) && createNonEnumerableProperty$4(IteratorPrototype$2, ITERATOR$6, returnThis$2),
    {
        IteratorPrototype: IteratorPrototype$2,
        BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS$1
    }), IteratorPrototype$1 = iteratorsCore.IteratorPrototype, create$9 = objectCreate, createPropertyDescriptor$2 = createPropertyDescriptor$7, setToStringTag$5 = setToStringTag$8, Iterators$5 = iterators, returnThis$1 = function() {
        return this
    }, createIteratorConstructor$2 = function(e, t, r) {
        t += " Iterator";
        return e.prototype = create$9(IteratorPrototype$1, {
            next: createPropertyDescriptor$2(1, r)
        }),
        setToStringTag$5(e, t, !1, !0),
        Iterators$5[t] = returnThis$1,
        e
    }, isObject$9 = isObject$i, aPossiblePrototype$1 = function(e) {
        if (isObject$9(e) || null === e)
            return e;
        throw TypeError("Can't set " + String(e) + " as a prototype")
    }, anObject$9 = anObject$e, aPossiblePrototype = aPossiblePrototype$1, objectSetPrototypeOf = Object.setPrototypeOf || ("__proto__"in {} ? function() {
        var r, n = !1, e = {};
        try {
            (r = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set).call(e, []),
            n = e instanceof Array
        } catch (e) {}
        return function(e, t) {
            return anObject$9(e),
            aPossiblePrototype(t),
            n ? r.call(e, t) : e.__proto__ = t,
            e
        }
    }() : void 0), $$D = _export, createIteratorConstructor$1 = createIteratorConstructor$2, getPrototypeOf$6 = objectGetPrototypeOf, setToStringTag$4 = setToStringTag$8, createNonEnumerableProperty$3 = createNonEnumerableProperty$a, redefine$3 = redefine$5, wellKnownSymbol$c = wellKnownSymbol$n, Iterators$4 = iterators, IteratorsCore = iteratorsCore, IteratorPrototype = IteratorsCore.IteratorPrototype, BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS, ITERATOR$5 = wellKnownSymbol$c("iterator"), KEYS = "keys", VALUES = "values", ENTRIES = "entries", returnThis = function() {
        return this
    }, defineIterator$3 = function(e, t, r, n, o, a, i) {
        createIteratorConstructor$1(r, t, n);
        function s(e) {
            if (e === o && f)
                return f;
            if (!BUGGY_SAFARI_ITERATORS && e in p)
                return p[e];
            switch (e) {
            case KEYS:
            case VALUES:
            case ENTRIES:
                return function() {
                    return new r(this,e)
                }
            }
            return function() {
                return new r(this)
            }
        }
        var l, c, n = t + " Iterator", u = !1, p = e.prototype, d = p[ITERATOR$5] || p["@@iterator"] || o && p[o], f = !BUGGY_SAFARI_ITERATORS && d || s(o), h = "Array" == t && p.entries || d;
        if (h && (h = getPrototypeOf$6(h.call(new e)),
        IteratorPrototype !== Object.prototype && h.next && (setToStringTag$4(h, n, !0, !0),
        Iterators$4[n] = returnThis)),
        o == VALUES && d && d.name !== VALUES && (u = !0,
        f = function() {
            return d.call(this)
        }
        ),
        i && p[ITERATOR$5] !== f && createNonEnumerableProperty$3(p, ITERATOR$5, f),
        Iterators$4[t] = f,
        o)
            if (l = {
                values: s(VALUES),
                keys: a ? f : s(KEYS),
                entries: s(ENTRIES)
            },
            i)
                for (c in l)
                    !BUGGY_SAFARI_ITERATORS && !u && c in p || redefine$3(p, c, l[c]);
            else
                $$D({
                    target: t,
                    proto: !0,
                    forced: BUGGY_SAFARI_ITERATORS || u
                }, l);
        return l
    }, toIndexedObject$3 = toIndexedObject$9, Iterators$3 = iterators, InternalStateModule$6 = internalState, defineIterator$2 = defineIterator$3, ARRAY_ITERATOR = "Array Iterator", setInternalState$6 = InternalStateModule$6.set, getInternalState$2 = InternalStateModule$6.getterFor(ARRAY_ITERATOR), domIterables = (defineIterator$2(Array, "Array", function(e, t) {
        setInternalState$6(this, {
            type: ARRAY_ITERATOR,
            target: toIndexedObject$3(e),
            index: 0,
            kind: t
        })
    }, function() {
        var e = getInternalState$2(this)
          , t = e.target
          , r = e.kind
          , n = e.index++;
        return !t || n >= t.length ? {
            value: e.target = void 0,
            done: !0
        } : "keys" == r ? {
            value: n,
            done: !1
        } : "values" == r ? {
            value: t[n],
            done: !1
        } : {
            value: [n, t[n]],
            done: !1
        }
    }, "values"),
    Iterators$3.Arguments = Iterators$3.Array,
    {
        CSSRuleList: 0,
        CSSStyleDeclaration: 0,
        CSSValueList: 0,
        ClientRectList: 0,
        DOMRectList: 0,
        DOMStringList: 0,
        DOMTokenList: 1,
        DataTransferItemList: 0,
        FileList: 0,
        HTMLAllCollection: 0,
        HTMLCollection: 0,
        HTMLFormElement: 0,
        HTMLSelectElement: 0,
        MediaList: 0,
        MimeTypeArray: 0,
        NamedNodeMap: 0,
        NodeList: 1,
        PaintRequestList: 0,
        Plugin: 0,
        PluginArray: 0,
        SVGLengthList: 0,
        SVGNumberList: 0,
        SVGPathSegList: 0,
        SVGPointList: 0,
        SVGStringList: 0,
        SVGTransformList: 0,
        SourceBufferList: 0,
        StyleSheetList: 0,
        TextTrackCueList: 0,
        TextTrackList: 0,
        TouchList: 0
    }), DOMIterables = domIterables, global$b = global$n, classof$4 = classof$6, createNonEnumerableProperty$2 = createNonEnumerableProperty$a, Iterators$2 = iterators, wellKnownSymbol$b = wellKnownSymbol$n, TO_STRING_TAG = wellKnownSymbol$b("toStringTag"), COLLECTION_NAME;
    for (COLLECTION_NAME in DOMIterables) {
        var Collection$1 = global$b[COLLECTION_NAME]
          , CollectionPrototype = Collection$1 && Collection$1.prototype;
        CollectionPrototype && classof$4(CollectionPrototype) !== TO_STRING_TAG && createNonEnumerableProperty$2(CollectionPrototype, TO_STRING_TAG, COLLECTION_NAME),
        Iterators$2[COLLECTION_NAME] = Iterators$2.Array
    }
    var parent$K = symbol$4
      , symbol$3 = parent$K
      , defineWellKnownSymbol$6 = defineWellKnownSymbol$l
      , defineWellKnownSymbol$5 = (defineWellKnownSymbol$6("asyncDispose"),
    defineWellKnownSymbol$l)
      , defineWellKnownSymbol$4 = (defineWellKnownSymbol$5("dispose"),
    defineWellKnownSymbol$l)
      , defineWellKnownSymbol$3 = (defineWellKnownSymbol$4("matcher"),
    defineWellKnownSymbol$l)
      , defineWellKnownSymbol$2 = (defineWellKnownSymbol$3("metadata"),
    defineWellKnownSymbol$l)
      , defineWellKnownSymbol$1 = (defineWellKnownSymbol$2("observable"),
    defineWellKnownSymbol$l)
      , defineWellKnownSymbol = (defineWellKnownSymbol$1("patternMatch"),
    defineWellKnownSymbol$l)
      , parent$J = (defineWellKnownSymbol("replaceAll"),
    symbol$3)
      , symbol$2 = parent$J
      , symbol$1 = symbol$2
      , toInteger$2 = toInteger$5
      , toString$9 = toString$c
      , requireObjectCoercible$6 = requireObjectCoercible$9
      , createMethod$3 = function(o) {
        return function(e, t) {
            var r, e = toString$9(requireObjectCoercible$6(e)), t = toInteger$2(t), n = e.length;
            return t < 0 || n <= t ? o ? "" : void 0 : (r = e.charCodeAt(t)) < 55296 || 56319 < r || t + 1 === n || (n = e.charCodeAt(t + 1)) < 56320 || 57343 < n ? o ? e.charAt(t) : r : o ? e.slice(t, t + 2) : n - 56320 + (r - 55296 << 10) + 65536
        }
    }
      , stringMultibyte = {
        codeAt: createMethod$3(!1),
        charAt: createMethod$3(!0)
    }
      , charAt = stringMultibyte.charAt
      , toString$8 = toString$c
      , InternalStateModule$5 = internalState
      , defineIterator$1 = defineIterator$3
      , STRING_ITERATOR = "String Iterator"
      , setInternalState$5 = InternalStateModule$5.set
      , getInternalState$1 = InternalStateModule$5.getterFor(STRING_ITERATOR)
      , WrappedWellKnownSymbolModule = (defineIterator$1(String, "String", function(e) {
        setInternalState$5(this, {
            type: STRING_ITERATOR,
            string: toString$8(e),
            index: 0
        })
    }, function() {
        var e = getInternalState$1(this)
          , t = e.string
          , r = e.index;
        return r >= t.length ? {
            value: void 0,
            done: !0
        } : (t = charAt(t, r),
        e.index += t.length,
        {
            value: t,
            done: !1
        })
    }),
    wellKnownSymbolWrapped)
      , iterator$3 = WrappedWellKnownSymbolModule.f("iterator")
      , parent$I = iterator$3
      , iterator$2 = parent$I
      , parent$H = iterator$2
      , iterator$1 = parent$H
      , iterator = iterator$1
      , _typeof = (!function(t) {
        var r = symbol$1
          , n = iterator;
        function o(e) {
            return t.exports = o = "function" == typeof r && "symbol" == typeof n ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof r && e.constructor === r && e !== r.prototype ? "symbol" : typeof e
            }
            ,
            t.exports.default = t.exports,
            t.exports.__esModule = !0,
            o(e)
        }
        t.exports = o,
        t.exports.default = t.exports,
        t.exports.__esModule = !0
    }(_typeof$1),
    getDefaultExportFromCjs(_typeof$1.exports))
      , asyncToGenerator = {
        exports: {}
    }
      , wellKnownSymbol$a = wellKnownSymbol$n
      , Iterators$1 = iterators
      , ITERATOR$4 = wellKnownSymbol$a("iterator")
      , ArrayPrototype$c = Array.prototype
      , isArrayIteratorMethod$2 = function(e) {
        return void 0 !== e && (Iterators$1.Array === e || ArrayPrototype$c[ITERATOR$4] === e)
    }
      , classof$3 = classof$6
      , Iterators = iterators
      , wellKnownSymbol$9 = wellKnownSymbol$n
      , ITERATOR$3 = wellKnownSymbol$9("iterator")
      , getIteratorMethod$8 = function(e) {
        if (null != e)
            return e[ITERATOR$3] || e["@@iterator"] || Iterators[classof$3(e)]
    }
      , anObject$8 = anObject$e
      , getIteratorMethod$7 = getIteratorMethod$8
      , getIterator$3 = function(e, t) {
        t = arguments.length < 2 ? getIteratorMethod$7(e) : t;
        if ("function" != typeof t)
            throw TypeError(String(e) + " is not iterable");
        return anObject$8(t.call(e))
    }
      , anObject$7 = anObject$e
      , iteratorClose$2 = function(e, t, r) {
        var n, o;
        anObject$7(e);
        try {
            if (void 0 === (n = e.return)) {
                if ("throw" === t)
                    throw r;
                return r
            }
            n = n.call(e)
        } catch (e) {
            o = !0,
            n = e
        }
        if ("throw" === t)
            throw r;
        if (o)
            throw n;
        return anObject$7(n),
        r
    }
      , anObject$6 = anObject$e
      , isArrayIteratorMethod$1 = isArrayIteratorMethod$2
      , toLength$9 = toLength$d
      , bind$6 = functionBindContext
      , getIterator$2 = getIterator$3
      , getIteratorMethod$6 = getIteratorMethod$8
      , iteratorClose$1 = iteratorClose$2
      , Result = function(e, t) {
        this.stopped = e,
        this.result = t
    }
      , iterate$6 = function(e, t, r) {
        function n(e) {
            return a && iteratorClose$1(a, "normal", e),
            new Result(!0,e)
        }
        function o(e) {
            return d ? (anObject$6(e),
            h ? g(e[0], e[1], n) : g(e[0], e[1])) : h ? g(e, n) : g(e)
        }
        var a, i, s, l, c, u, p = r && r.that, d = !(!r || !r.AS_ENTRIES), f = !(!r || !r.IS_ITERATOR), h = !(!r || !r.INTERRUPTED), g = bind$6(t, p, 1 + d + h);
        if (f)
            a = e;
        else {
            if ("function" != typeof (r = getIteratorMethod$6(e)))
                throw TypeError("Target is not iterable");
            if (isArrayIteratorMethod$1(r)) {
                for (i = 0,
                s = toLength$9(e.length); i < s; i++)
                    if ((l = o(e[i])) && l instanceof Result)
                        return l;
                return new Result(!1)
            }
            a = getIterator$2(e, r)
        }
        for (c = a.next; !(u = c.call(a)).done; ) {
            try {
                l = o(u.value)
            } catch (e) {
                iteratorClose$1(a, "throw", e)
            }
            if ("object" == typeof l && l && l instanceof Result)
                return l
        }
        return new Result(!1)
    }
      , $$C = _export
      , getPrototypeOf$5 = objectGetPrototypeOf
      , setPrototypeOf$6 = objectSetPrototypeOf
      , create$8 = objectCreate
      , createNonEnumerableProperty$1 = createNonEnumerableProperty$a
      , createPropertyDescriptor$1 = createPropertyDescriptor$7
      , iterate$5 = iterate$6
      , toString$7 = toString$c
      , $AggregateError = function(e, t) {
        var r = this;
        if (!(r instanceof $AggregateError))
            return new $AggregateError(e,t);
        setPrototypeOf$6 && (r = setPrototypeOf$6(new Error(void 0), getPrototypeOf$5(r))),
        void 0 !== t && createNonEnumerableProperty$1(r, "message", toString$7(t));
        t = [];
        return iterate$5(e, t.push, {
            that: t
        }),
        createNonEnumerableProperty$1(r, "errors", t),
        r
    }
      , global$a = ($AggregateError.prototype = create$8(Error.prototype, {
        constructor: createPropertyDescriptor$1(5, $AggregateError),
        message: createPropertyDescriptor$1(5, ""),
        name: createPropertyDescriptor$1(5, "AggregateError")
    }),
    $$C({
        global: !0
    }, {
        AggregateError: $AggregateError
    }),
    global$n)
      , nativePromiseConstructor = global$a.Promise
      , redefine$2 = redefine$5
      , redefineAll$3 = function(e, t, r) {
        for (var n in t)
            r && r.unsafe && e[n] ? e[n] = t[n] : redefine$2(e, n, t[n], r);
        return e
    }
      , getBuiltIn$7 = getBuiltIn$c
      , definePropertyModule = objectDefineProperty
      , wellKnownSymbol$8 = wellKnownSymbol$n
      , DESCRIPTORS$8 = descriptors
      , SPECIES$3 = wellKnownSymbol$8("species")
      , setSpecies$2 = function(e) {
        var e = getBuiltIn$7(e)
          , t = definePropertyModule.f;
        DESCRIPTORS$8 && e && !e[SPECIES$3] && t(e, SPECIES$3, {
            configurable: !0,
            get: function() {
                return this
            }
        })
    }
      , anInstance$5 = function(e, t, r) {
        if (e instanceof t)
            return e;
        throw TypeError("Incorrect " + (r ? r + " " : "") + "invocation")
    }
      , wellKnownSymbol$7 = wellKnownSymbol$n
      , ITERATOR$2 = wellKnownSymbol$7("iterator")
      , SAFE_CLOSING = !1;
    try {
        var called = 0
          , iteratorWithReturn = {
            next: function() {
                return {
                    done: !!called++
                }
            },
            return: function() {
                SAFE_CLOSING = !0
            }
        };
        iteratorWithReturn[ITERATOR$2] = function() {
            return this
        }
        ,
        Array.from(iteratorWithReturn, function() {
            throw 2
        })
    } catch (error) {}
    var checkCorrectnessOfIteration$2 = function(e, t) {
        if (!t && !SAFE_CLOSING)
            return !1;
        var r = !1;
        try {
            var n = {};
            n[ITERATOR$2] = function() {
                return {
                    next: function() {
                        return {
                            done: r = !0
                        }
                    }
                }
            }
            ,
            e(n)
        } catch (e) {}
        return r
    }, anObject$5 = anObject$e, aFunction$8 = aFunction$a, wellKnownSymbol$6 = wellKnownSymbol$n, SPECIES$2 = wellKnownSymbol$6("species"), speciesConstructor$2 = function(e, t) {
        var e = anObject$5(e).constructor;
        return void 0 === e || null == (e = anObject$5(e)[SPECIES$2]) ? t : aFunction$8(e)
    }, userAgent$6 = engineUserAgent, engineIsIos = /(?:ipad|iphone|ipod).*applewebkit/i.test(userAgent$6), classof$2 = classofRaw$1, global$9 = global$n, engineIsNode = "process" == classof$2(global$9.process), global$8 = global$n, fails$d = fails$o, bind$5 = functionBindContext, html = html$2, createElement = documentCreateElement$1, IS_IOS$1 = engineIsIos, IS_NODE$3 = engineIsNode, set$3 = global$8.setImmediate, clear = global$8.clearImmediate, process$2 = global$8.process, MessageChannel = global$8.MessageChannel, Dispatch = global$8.Dispatch, counter = 0, queue = {}, ONREADYSTATECHANGE = "onreadystatechange", location, defer, channel, port;
    try {
        location = global$8.location
    } catch (error) {}
    var run = function(e) {
        var t;
        queue.hasOwnProperty(e) && (t = queue[e],
        delete queue[e],
        t())
    }, runner = function(e) {
        return function() {
            run(e)
        }
    }, listener = function(e) {
        run(e.data)
    }, post = function(e) {
        global$8.postMessage(String(e), location.protocol + "//" + location.host)
    }, task$1 = (set$3 && clear || (set$3 = function(e) {
        for (var t = [], r = arguments.length, n = 1; n < r; )
            t.push(arguments[n++]);
        return queue[++counter] = function() {
            ("function" == typeof e ? e : Function(e)).apply(void 0, t)
        }
        ,
        defer(counter),
        counter
    }
    ,
    clear = function(e) {
        delete queue[e]
    }
    ,
    IS_NODE$3 ? defer = function(e) {
        process$2.nextTick(runner(e))
    }
    : Dispatch && Dispatch.now ? defer = function(e) {
        Dispatch.now(runner(e))
    }
    : MessageChannel && !IS_IOS$1 ? (channel = new MessageChannel,
    port = channel.port2,
    channel.port1.onmessage = listener,
    defer = bind$5(port.postMessage, port, 1)) : global$8.addEventListener && "function" == typeof postMessage && !global$8.importScripts && location && "file:" !== location.protocol && !fails$d(post) ? (defer = post,
    global$8.addEventListener("message", listener, !1)) : defer = ONREADYSTATECHANGE in createElement("script") ? function(e) {
        html.appendChild(createElement("script"))[ONREADYSTATECHANGE] = function() {
            html.removeChild(this),
            run(e)
        }
    }
    : function(e) {
        setTimeout(runner(e), 0)
    }
    ),
    {
        set: set$3,
        clear: clear
    }), userAgent$5 = engineUserAgent, global$7 = global$n, engineIsIosPebble = /ipad|iphone|ipod/i.test(userAgent$5) && void 0 !== global$7.Pebble, userAgent$4 = engineUserAgent, engineIsWebosWebkit = /web0s(?!.*chrome)/i.test(userAgent$4), global$6 = global$n, getOwnPropertyDescriptor$4 = objectGetOwnPropertyDescriptor.f, macrotask = task$1.set, IS_IOS = engineIsIos, IS_IOS_PEBBLE = engineIsIosPebble, IS_WEBOS_WEBKIT = engineIsWebosWebkit, IS_NODE$2 = engineIsNode, MutationObserver = global$6.MutationObserver || global$6.WebKitMutationObserver, document$2 = global$6.document, process$1 = global$6.process, Promise$1 = global$6.Promise, queueMicrotaskDescriptor = getOwnPropertyDescriptor$4(global$6, "queueMicrotask"), queueMicrotask = queueMicrotaskDescriptor && queueMicrotaskDescriptor.value, flush, head, last, notify$1, toggle, node, promise$5, then, microtask$1 = (queueMicrotask || (flush = function() {
        var e, t;
        for (IS_NODE$2 && (e = process$1.domain) && e.exit(); head; ) {
            t = head.fn,
            head = head.next;
            try {
                t()
            } catch (e) {
                throw head ? notify$1() : last = void 0,
                e
            }
        }
        last = void 0,
        e && e.enter()
    }
    ,
    notify$1 = IS_IOS || IS_NODE$2 || IS_WEBOS_WEBKIT || !MutationObserver || !document$2 ? !IS_IOS_PEBBLE && Promise$1 && Promise$1.resolve ? (promise$5 = Promise$1.resolve(void 0),
    promise$5.constructor = Promise$1,
    then = promise$5.then,
    function() {
        then.call(promise$5, flush)
    }
    ) : IS_NODE$2 ? function() {
        process$1.nextTick(flush)
    }
    : function() {
        macrotask.call(global$6, flush)
    }
    : (toggle = !0,
    node = document$2.createTextNode(""),
    new MutationObserver(flush).observe(node, {
        characterData: !0
    }),
    function() {
        node.data = toggle = !toggle
    }
    )),
    queueMicrotask || function(e) {
        e = {
            fn: e,
            next: void 0
        };
        last && (last.next = e),
        head || (head = e,
        notify$1()),
        last = e
    }
    ), newPromiseCapability$2 = {}, aFunction$7 = aFunction$a, PromiseCapability = function(e) {
        var r, n;
        this.promise = new e(function(e, t) {
            if (void 0 !== r || void 0 !== n)
                throw TypeError("Bad Promise constructor");
            r = e,
            n = t
        }
        ),
        this.resolve = aFunction$7(r),
        this.reject = aFunction$7(n)
    }, anObject$4 = (newPromiseCapability$2.f = function(e) {
        return new PromiseCapability(e)
    }
    ,
    anObject$e), isObject$8 = isObject$i, newPromiseCapability$1 = newPromiseCapability$2, promiseResolve$2 = function(e, t) {
        if (anObject$4(e),
        isObject$8(t) && t.constructor === e)
            return t;
        e = newPromiseCapability$1.f(e);
        return (0,
        e.resolve)(t),
        e.promise
    }, global$5 = global$n, hostReportErrors$1 = function(e, t) {
        var r = global$5.console;
        r && r.error && (1 === arguments.length ? r.error(e) : r.error(e, t))
    }, perform$4 = function(e) {
        try {
            return {
                error: !1,
                value: e()
            }
        } catch (e) {
            return {
                error: !0,
                value: e
            }
        }
    }, engineIsBrowser = "object" == typeof window, $$B = _export, IS_PURE$1 = isPure, global$4 = global$n, getBuiltIn$6 = getBuiltIn$c, NativePromise$1 = nativePromiseConstructor, redefineAll$2 = redefineAll$3, setToStringTag$3 = setToStringTag$8, setSpecies$1 = setSpecies$2, isObject$7 = isObject$i, aFunction$6 = aFunction$a, anInstance$4 = anInstance$5, inspectSource = inspectSource$2, iterate$4 = iterate$6, checkCorrectnessOfIteration$1 = checkCorrectnessOfIteration$2, speciesConstructor$1 = speciesConstructor$2, task = task$1.set, microtask = microtask$1, promiseResolve$1 = promiseResolve$2, hostReportErrors = hostReportErrors$1, newPromiseCapabilityModule$3 = newPromiseCapability$2, perform$3 = perform$4, InternalStateModule$4 = internalState, isForced = isForced_1, wellKnownSymbol$5 = wellKnownSymbol$n, IS_BROWSER = engineIsBrowser, IS_NODE$1 = engineIsNode, V8_VERSION = engineV8Version, SPECIES$1 = wellKnownSymbol$5("species"), PROMISE = "Promise", getInternalState = InternalStateModule$4.get, setInternalState$4 = InternalStateModule$4.set, getInternalPromiseState = InternalStateModule$4.getterFor(PROMISE), NativePromisePrototype = NativePromise$1 && NativePromise$1.prototype, PromiseConstructor = NativePromise$1, PromiseConstructorPrototype = NativePromisePrototype, TypeError$1 = global$4.TypeError, document$1 = global$4.document, process = global$4.process, newPromiseCapability = newPromiseCapabilityModule$3.f, newGenericPromiseCapability = newPromiseCapability, DISPATCH_EVENT = !!(document$1 && document$1.createEvent && global$4.dispatchEvent), NATIVE_REJECTION_EVENT = "function" == typeof PromiseRejectionEvent, UNHANDLED_REJECTION = "unhandledrejection", REJECTION_HANDLED = "rejectionhandled", PENDING = 0, FULFILLED = 1, REJECTED = 2, HANDLED = 1, UNHANDLED = 2, SUBCLASSING = !1, Internal, OwnPromiseCapability, PromiseWrapper, FORCED$4 = isForced(PROMISE, function() {
        var e = inspectSource(PromiseConstructor)
          , t = e !== String(PromiseConstructor);
        if (!t && 66 === V8_VERSION)
            return !0;
        if (!PromiseConstructorPrototype.finally)
            return !0;
        if (51 <= V8_VERSION && /native code/.test(e))
            return !1;
        function r(e) {
            e(function() {}, function() {})
        }
        e = new PromiseConstructor(function(e) {
            e(1)
        }
        );
        return (e.constructor = {})[SPECIES$1] = r,
        !(SUBCLASSING = e.then(function() {})instanceof r) || !t && IS_BROWSER && !NATIVE_REJECTION_EVENT
    }), INCORRECT_ITERATION$1 = FORCED$4 || !checkCorrectnessOfIteration$1(function(e) {
        PromiseConstructor.all(e).catch(function() {})
    }), isThenable = function(e) {
        var t;
        return !(!isObject$7(e) || "function" != typeof (t = e.then)) && t
    }, notify = function(p, d) {
        var f;
        p.notified || (p.notified = !0,
        f = p.reactions,
        microtask(function() {
            for (var e = p.value, t = p.state == FULFILLED, r = 0; f.length > r; ) {
                var n, o, a, i = f[r++], s = t ? i.ok : i.fail, l = i.resolve, c = i.reject, u = i.domain;
                try {
                    s ? (t || (p.rejection === UNHANDLED && onHandleUnhandled(p),
                    p.rejection = HANDLED),
                    !0 === s ? n = e : (u && u.enter(),
                    n = s(e),
                    u && (u.exit(),
                    a = !0)),
                    n === i.promise ? c(TypeError$1("Promise-chain cycle")) : (o = isThenable(n)) ? o.call(n, l, c) : l(n)) : c(e)
                } catch (e) {
                    u && !a && u.exit(),
                    c(e)
                }
            }
            p.reactions = [],
            p.notified = !1,
            d && !p.rejection && onUnhandled(p)
        }))
    }, dispatchEvent = function(e, t, r) {
        var n;
        DISPATCH_EVENT ? ((n = document$1.createEvent("Event")).promise = t,
        n.reason = r,
        n.initEvent(e, !1, !0),
        global$4.dispatchEvent(n)) : n = {
            promise: t,
            reason: r
        },
        !NATIVE_REJECTION_EVENT && (t = global$4["on" + e]) ? t(n) : e === UNHANDLED_REJECTION && hostReportErrors("Unhandled promise rejection", r)
    }, onUnhandled = function(n) {
        task.call(global$4, function() {
            var e = n.facade
              , t = n.value
              , r = isUnhandled(n);
            if (r && (r = perform$3(function() {
                IS_NODE$1 ? process.emit("unhandledRejection", t, e) : dispatchEvent(UNHANDLED_REJECTION, e, t)
            }),
            n.rejection = IS_NODE$1 || isUnhandled(n) ? UNHANDLED : HANDLED,
            r.error))
                throw r.value
        })
    }, isUnhandled = function(e) {
        return e.rejection !== HANDLED && !e.parent
    }, onHandleUnhandled = function(t) {
        task.call(global$4, function() {
            var e = t.facade;
            IS_NODE$1 ? process.emit("rejectionHandled", e) : dispatchEvent(REJECTION_HANDLED, e, t.value)
        })
    }, bind$4 = function(t, r, n) {
        return function(e) {
            t(r, e, n)
        }
    }, internalReject = function(e, t, r) {
        e.done || (e.done = !0,
        (e = r ? r : e).value = t,
        e.state = REJECTED,
        notify(e, !0))
    }, internalResolve = function(r, e, t) {
        if (!r.done) {
            r.done = !0,
            t && (r = t);
            try {
                if (r.facade === e)
                    throw TypeError$1("Promise can't be resolved itself");
                var n = isThenable(e);
                n ? microtask(function() {
                    var t = {
                        done: !1
                    };
                    try {
                        n.call(e, bind$4(internalResolve, t, r), bind$4(internalReject, t, r))
                    } catch (e) {
                        internalReject(t, e, r)
                    }
                }) : (r.value = e,
                r.state = FULFILLED,
                notify(r, !1))
            } catch (e) {
                internalReject({
                    done: !1
                }, e, r)
            }
        }
    }, $$A = (FORCED$4 && (PromiseConstructor = function(e) {
        anInstance$4(this, PromiseConstructor, PROMISE),
        aFunction$6(e),
        Internal.call(this);
        var t = getInternalState(this);
        try {
            e(bind$4(internalResolve, t), bind$4(internalReject, t))
        } catch (e) {
            internalReject(t, e)
        }
    }
    ,
    PromiseConstructorPrototype = PromiseConstructor.prototype,
    Internal = function(e) {
        setInternalState$4(this, {
            type: PROMISE,
            done: !1,
            notified: !1,
            parent: !1,
            reactions: [],
            rejection: !1,
            state: PENDING,
            value: void 0
        })
    }
    ,
    Internal.prototype = redefineAll$2(PromiseConstructorPrototype, {
        then: function(e, t) {
            var r = getInternalPromiseState(this)
              , n = newPromiseCapability(speciesConstructor$1(this, PromiseConstructor));
            return n.ok = "function" != typeof e || e,
            n.fail = "function" == typeof t && t,
            n.domain = IS_NODE$1 ? process.domain : void 0,
            r.parent = !0,
            r.reactions.push(n),
            r.state != PENDING && notify(r, !1),
            n.promise
        },
        catch: function(e) {
            return this.then(void 0, e)
        }
    }),
    OwnPromiseCapability = function() {
        var e = new Internal
          , t = getInternalState(e);
        this.promise = e,
        this.resolve = bind$4(internalResolve, t),
        this.reject = bind$4(internalReject, t)
    }
    ,
    newPromiseCapabilityModule$3.f = newPromiseCapability = function(e) {
        return e === PromiseConstructor || e === PromiseWrapper ? new OwnPromiseCapability(e) : newGenericPromiseCapability(e)
    }
    ),
    $$B({
        global: !0,
        wrap: !0,
        forced: FORCED$4
    }, {
        Promise: PromiseConstructor
    }),
    setToStringTag$3(PromiseConstructor, PROMISE, !1, !0),
    setSpecies$1(PROMISE),
    PromiseWrapper = getBuiltIn$6(PROMISE),
    $$B({
        target: PROMISE,
        stat: !0,
        forced: FORCED$4
    }, {
        reject: function(e) {
            var t = newPromiseCapability(this);
            return t.reject.call(void 0, e),
            t.promise
        }
    }),
    $$B({
        target: PROMISE,
        stat: !0,
        forced: IS_PURE$1
    }, {
        resolve: function(e) {
            return promiseResolve$1(this === PromiseWrapper ? PromiseConstructor : this, e)
        }
    }),
    $$B({
        target: PROMISE,
        stat: !0,
        forced: INCORRECT_ITERATION$1
    }, {
        all: function(e) {
            var s = this
              , t = newPromiseCapability(s)
              , l = t.resolve
              , c = t.reject
              , r = perform$3(function() {
                var n = aFunction$6(s.resolve)
                  , o = []
                  , a = 0
                  , i = 1;
                iterate$4(e, function(e) {
                    var t = a++
                      , r = !1;
                    o.push(void 0),
                    i++,
                    n.call(s, e).then(function(e) {
                        r || (r = !0,
                        o[t] = e,
                        --i || l(o))
                    }, c)
                }),
                --i || l(o)
            });
            return r.error && c(r.value),
            t.promise
        },
        race: function(e) {
            var r = this
              , n = newPromiseCapability(r)
              , o = n.reject
              , t = perform$3(function() {
                var t = aFunction$6(r.resolve);
                iterate$4(e, function(e) {
                    t.call(r, e).then(n.resolve, o)
                })
            });
            return t.error && o(t.value),
            n.promise
        }
    }),
    _export), aFunction$5 = aFunction$a, newPromiseCapabilityModule$2 = newPromiseCapability$2, perform$2 = perform$4, iterate$3 = iterate$6, $$z = ($$A({
        target: "Promise",
        stat: !0
    }, {
        allSettled: function(e) {
            var s = this
              , t = newPromiseCapabilityModule$2.f(s)
              , l = t.resolve
              , r = t.reject
              , n = perform$2(function() {
                var n = aFunction$5(s.resolve)
                  , o = []
                  , a = 0
                  , i = 1;
                iterate$3(e, function(e) {
                    var t = a++
                      , r = !1;
                    o.push(void 0),
                    i++,
                    n.call(s, e).then(function(e) {
                        r || (r = !0,
                        o[t] = {
                            status: "fulfilled",
                            value: e
                        },
                        --i || l(o))
                    }, function(e) {
                        r || (r = !0,
                        o[t] = {
                            status: "rejected",
                            reason: e
                        },
                        --i || l(o))
                    })
                }),
                --i || l(o)
            });
            return n.error && r(n.value),
            t.promise
        }
    }),
    _export), aFunction$4 = aFunction$a, getBuiltIn$5 = getBuiltIn$c, newPromiseCapabilityModule$1 = newPromiseCapability$2, perform$1 = perform$4, iterate$2 = iterate$6, PROMISE_ANY_ERROR = "No one promise resolved", $$y = ($$z({
        target: "Promise",
        stat: !0
    }, {
        any: function(e) {
            var l = this
              , t = newPromiseCapabilityModule$1.f(l)
              , c = t.resolve
              , u = t.reject
              , r = perform$1(function() {
                var n = aFunction$4(l.resolve)
                  , o = []
                  , a = 0
                  , i = 1
                  , s = !1;
                iterate$2(e, function(e) {
                    var t = a++
                      , r = !1;
                    o.push(void 0),
                    i++,
                    n.call(l, e).then(function(e) {
                        r || s || (s = !0,
                        c(e))
                    }, function(e) {
                        r || s || (r = !0,
                        o[t] = e,
                        --i || u(new (getBuiltIn$5("AggregateError"))(o,PROMISE_ANY_ERROR)))
                    })
                }),
                --i || u(new (getBuiltIn$5("AggregateError"))(o,PROMISE_ANY_ERROR))
            });
            return r.error && u(r.value),
            t.promise
        }
    }),
    _export), NativePromise = nativePromiseConstructor, fails$c = fails$o, getBuiltIn$4 = getBuiltIn$c, speciesConstructor = speciesConstructor$2, promiseResolve = promiseResolve$2, NON_GENERIC = !!NativePromise && fails$c(function() {
        NativePromise.prototype.finally.call({
            then: function() {}
        }, function() {})
    }), path$h = ($$y({
        target: "Promise",
        proto: !0,
        real: !0,
        forced: NON_GENERIC
    }, {
        finally: function(t) {
            var r = speciesConstructor(this, getBuiltIn$4("Promise"))
              , e = "function" == typeof t;
            return this.then(e ? function(e) {
                return promiseResolve(r, t()).then(function() {
                    return e
                })
            }
            : t, e ? function(e) {
                return promiseResolve(r, t()).then(function() {
                    throw e
                })
            }
            : t)
        }
    }),
    path$m), promise$4 = path$h.Promise, parent$G = promise$4, promise$3 = parent$G, $$x = _export, newPromiseCapabilityModule = newPromiseCapability$2, perform = perform$4, parent$F = ($$x({
        target: "Promise",
        stat: !0
    }, {
        try: function(e) {
            var t = newPromiseCapabilityModule.f(this)
              , e = perform(e);
            return (e.error ? t.reject : t.resolve)(e.value),
            t.promise
        }
    }),
    promise$3), promise$2 = parent$F, promise$1 = promise$2, _asyncToGenerator = (!function(e) {
        var c = promise$1;
        function l(e, t, r, n, o, a, i) {
            try {
                var s = e[a](i)
                  , l = s.value
            } catch (e) {
                return void r(e)
            }
            s.done ? t(l) : c.resolve(l).then(n, o)
        }
        e.exports = function(s) {
            return function() {
                var e = this
                  , i = arguments;
                return new c(function(t, r) {
                    var n = s.apply(e, i);
                    function o(e) {
                        l(n, t, r, o, a, "next", e)
                    }
                    function a(e) {
                        l(n, t, r, o, a, "throw", e)
                    }
                    o(void 0)
                }
                )
            }
        }
        ,
        e.exports.default = e.exports,
        e.exports.__esModule = !0
    }(asyncToGenerator),
    getDefaultExportFromCjs(asyncToGenerator.exports)), classCallCheck = {
        exports: {}
    }, _classCallCheck = (!function(e) {
        e.exports = function(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        ,
        e.exports.default = e.exports,
        e.exports.__esModule = !0
    }(classCallCheck),
    getDefaultExportFromCjs(classCallCheck.exports)), createClass = {
        exports: {}
    }, defineProperty$9 = {
        exports: {}
    }, $$w = _export, DESCRIPTORS$7 = descriptors, objectDefinePropertyModile = objectDefineProperty, path$g = ($$w({
        target: "Object",
        stat: !0,
        forced: !DESCRIPTORS$7,
        sham: !DESCRIPTORS$7
    }, {
        defineProperty: objectDefinePropertyModile.f
    }),
    path$m), Object$3 = path$g.Object, defineProperty$8 = defineProperty$9.exports = function(e, t, r) {
        return Object$3.defineProperty(e, t, r)
    }
    , parent$E = (Object$3.defineProperty.sham && (defineProperty$8.sham = !0),
    defineProperty$9.exports), defineProperty$7 = parent$E, parent$D = defineProperty$7, defineProperty$6 = parent$D, defineProperty$5 = defineProperty$6, _createClass = (!function(e) {
        var o = defineProperty$5;
        function n(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                o(e, n.key, n)
            }
        }
        e.exports = function(e, t, r) {
            return t && n(e.prototype, t),
            r && n(e, r),
            e
        }
        ,
        e.exports.default = e.exports,
        e.exports.__esModule = !0
    }(createClass),
    getDefaultExportFromCjs(createClass.exports)), runtime = {
        exports: {}
    }, regenerator = (!function() {
        var t = function(i) {
            var l, e = Object.prototype, c = e.hasOwnProperty, t = "function" == typeof Symbol ? Symbol : {}, n = t.iterator || "@@iterator", r = t.asyncIterator || "@@asyncIterator", o = t.toStringTag || "@@toStringTag";
            function a(e, t, r) {
                return Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }),
                e[t]
            }
            try {
                a({}, "")
            } catch (e) {
                a = function(e, t, r) {
                    return e[t] = r
                }
            }
            function s(e, t, r, n) {
                var o, a, i, s, t = t && t.prototype instanceof m ? t : m, t = Object.create(t.prototype), n = new _(n || []);
                return t._invoke = (o = e,
                a = r,
                i = n,
                s = p,
                function(e, t) {
                    if (s === f)
                        throw new Error("Generator is already running");
                    if (s === h) {
                        if ("throw" === e)
                            throw t;
                        return O()
                    }
                    for (i.method = e,
                    i.arg = t; ; ) {
                        var r = i.delegate;
                        if (r) {
                            r = function e(t, r) {
                                var n = t.iterator[r.method];
                                if (n === l) {
                                    if (r.delegate = null,
                                    "throw" === r.method) {
                                        if (t.iterator.return && (r.method = "return",
                                        r.arg = l,
                                        e(t, r),
                                        "throw" === r.method))
                                            return g;
                                        r.method = "throw",
                                        r.arg = new TypeError("The iterator does not provide a 'throw' method")
                                    }
                                    return g
                                }
                                n = u(n, t.iterator, r.arg);
                                if ("throw" === n.type)
                                    return r.method = "throw",
                                    r.arg = n.arg,
                                    r.delegate = null,
                                    g;
                                n = n.arg;
                                if (!n)
                                    return r.method = "throw",
                                    r.arg = new TypeError("iterator result is not an object"),
                                    r.delegate = null,
                                    g;
                                {
                                    if (!n.done)
                                        return n;
                                    r[t.resultName] = n.value,
                                    r.next = t.nextLoc,
                                    "return" !== r.method && (r.method = "next",
                                    r.arg = l)
                                }
                                r.delegate = null;
                                return g
                            }(r, i);
                            if (r) {
                                if (r === g)
                                    continue;
                                return r
                            }
                        }
                        if ("next" === i.method)
                            i.sent = i._sent = i.arg;
                        else if ("throw" === i.method) {
                            if (s === p)
                                throw s = h,
                                i.arg;
                            i.dispatchException(i.arg)
                        } else
                            "return" === i.method && i.abrupt("return", i.arg);
                        s = f;
                        r = u(o, a, i);
                        if ("normal" === r.type) {
                            if (s = i.done ? h : d,
                            r.arg !== g)
                                return {
                                    value: r.arg,
                                    done: i.done
                                }
                        } else
                            "throw" === r.type && (s = h,
                            i.method = "throw",
                            i.arg = r.arg)
                    }
                }
                ),
                t
            }
            function u(e, t, r) {
                try {
                    return {
                        type: "normal",
                        arg: e.call(t, r)
                    }
                } catch (e) {
                    return {
                        type: "throw",
                        arg: e
                    }
                }
            }
            i.wrap = s;
            var p = "suspendedStart"
              , d = "suspendedYield"
              , f = "executing"
              , h = "completed"
              , g = {};
            function m() {}
            function y() {}
            function S() {}
            var t = {}
              , v = (a(t, n, function() {
                return this
            }),
            Object.getPrototypeOf)
              , v = v && v(v(w([])))
              , b = (v && v !== e && c.call(v, n) && (t = v),
            S.prototype = m.prototype = Object.create(t));
            function E(e) {
                ["next", "throw", "return"].forEach(function(t) {
                    a(e, t, function(e) {
                        return this._invoke(t, e)
                    })
                })
            }
            function $(i, s) {
                var t;
                this._invoke = function(r, n) {
                    function e() {
                        return new s(function(e, t) {
                            !function t(e, r, n, o) {
                                var a, e = u(i[e], i, r);
                                if ("throw" !== e.type)
                                    return (r = (a = e.arg).value) && "object" == typeof r && c.call(r, "__await") ? s.resolve(r.__await).then(function(e) {
                                        t("next", e, n, o)
                                    }, function(e) {
                                        t("throw", e, n, o)
                                    }) : s.resolve(r).then(function(e) {
                                        a.value = e,
                                        n(a)
                                    }, function(e) {
                                        return t("throw", e, n, o)
                                    });
                                o(e.arg)
                            }(r, n, e, t)
                        }
                        )
                    }
                    return t = t ? t.then(e, e) : e()
                }
            }
            function T(e) {
                var t = {
                    tryLoc: e[0]
                };
                1 in e && (t.catchLoc = e[1]),
                2 in e && (t.finallyLoc = e[2],
                t.afterLoc = e[3]),
                this.tryEntries.push(t)
            }
            function I(e) {
                var t = e.completion || {};
                t.type = "normal",
                delete t.arg,
                e.completion = t
            }
            function _(e) {
                this.tryEntries = [{
                    tryLoc: "root"
                }],
                e.forEach(T, this),
                this.reset(!0)
            }
            function w(t) {
                if (t) {
                    var r, e = t[n];
                    if (e)
                        return e.call(t);
                    if ("function" == typeof t.next)
                        return t;
                    if (!isNaN(t.length))
                        return r = -1,
                        (e = function e() {
                            for (; ++r < t.length; )
                                if (c.call(t, r))
                                    return e.value = t[r],
                                    e.done = !1,
                                    e;
                            return e.value = l,
                            e.done = !0,
                            e
                        }
                        ).next = e
                }
                return {
                    next: O
                }
            }
            function O() {
                return {
                    value: l,
                    done: !0
                }
            }
            return a(b, "constructor", y.prototype = S),
            a(S, "constructor", y),
            y.displayName = a(S, o, "GeneratorFunction"),
            i.isGeneratorFunction = function(e) {
                e = "function" == typeof e && e.constructor;
                return !!e && (e === y || "GeneratorFunction" === (e.displayName || e.name))
            }
            ,
            i.mark = function(e) {
                return Object.setPrototypeOf ? Object.setPrototypeOf(e, S) : (e.__proto__ = S,
                a(e, o, "GeneratorFunction")),
                e.prototype = Object.create(b),
                e
            }
            ,
            i.awrap = function(e) {
                return {
                    __await: e
                }
            }
            ,
            E($.prototype),
            a($.prototype, r, function() {
                return this
            }),
            i.AsyncIterator = $,
            i.async = function(e, t, r, n, o) {
                void 0 === o && (o = Promise);
                var a = new $(s(e, t, r, n),o);
                return i.isGeneratorFunction(t) ? a : a.next().then(function(e) {
                    return e.done ? e.value : a.next()
                })
            }
            ,
            E(b),
            a(b, o, "Generator"),
            a(b, n, function() {
                return this
            }),
            a(b, "toString", function() {
                return "[object Generator]"
            }),
            i.keys = function(r) {
                var e, n = [];
                for (e in r)
                    n.push(e);
                return n.reverse(),
                function e() {
                    for (; n.length; ) {
                        var t = n.pop();
                        if (t in r)
                            return e.value = t,
                            e.done = !1,
                            e
                    }
                    return e.done = !0,
                    e
                }
            }
            ,
            i.values = w,
            _.prototype = {
                constructor: _,
                reset: function(e) {
                    if (this.prev = 0,
                    this.next = 0,
                    this.sent = this._sent = l,
                    this.done = !1,
                    this.delegate = null,
                    this.method = "next",
                    this.arg = l,
                    this.tryEntries.forEach(I),
                    !e)
                        for (var t in this)
                            "t" === t.charAt(0) && c.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = l)
                },
                stop: function() {
                    this.done = !0;
                    var e = this.tryEntries[0].completion;
                    if ("throw" === e.type)
                        throw e.arg;
                    return this.rval
                },
                dispatchException: function(r) {
                    if (this.done)
                        throw r;
                    var n = this;
                    function e(e, t) {
                        return a.type = "throw",
                        a.arg = r,
                        n.next = e,
                        t && (n.method = "next",
                        n.arg = l),
                        !!t
                    }
                    for (var t = this.tryEntries.length - 1; 0 <= t; --t) {
                        var o = this.tryEntries[t]
                          , a = o.completion;
                        if ("root" === o.tryLoc)
                            return e("end");
                        if (o.tryLoc <= this.prev) {
                            var i = c.call(o, "catchLoc")
                              , s = c.call(o, "finallyLoc");
                            if (i && s) {
                                if (this.prev < o.catchLoc)
                                    return e(o.catchLoc, !0);
                                if (this.prev < o.finallyLoc)
                                    return e(o.finallyLoc)
                            } else if (i) {
                                if (this.prev < o.catchLoc)
                                    return e(o.catchLoc, !0)
                            } else {
                                if (!s)
                                    throw new Error("try statement without catch or finally");
                                if (this.prev < o.finallyLoc)
                                    return e(o.finallyLoc)
                            }
                        }
                    }
                },
                abrupt: function(e, t) {
                    for (var r = this.tryEntries.length - 1; 0 <= r; --r) {
                        var n = this.tryEntries[r];
                        if (n.tryLoc <= this.prev && c.call(n, "finallyLoc") && this.prev < n.finallyLoc) {
                            var o = n;
                            break
                        }
                    }
                    var a = (o = o && ("break" === e || "continue" === e) && o.tryLoc <= t && t <= o.finallyLoc ? null : o) ? o.completion : {};
                    return a.type = e,
                    a.arg = t,
                    o ? (this.method = "next",
                    this.next = o.finallyLoc,
                    g) : this.complete(a)
                },
                complete: function(e, t) {
                    if ("throw" === e.type)
                        throw e.arg;
                    return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg,
                    this.method = "return",
                    this.next = "end") : "normal" === e.type && t && (this.next = t),
                    g
                },
                finish: function(e) {
                    for (var t = this.tryEntries.length - 1; 0 <= t; --t) {
                        var r = this.tryEntries[t];
                        if (r.finallyLoc === e)
                            return this.complete(r.completion, r.afterLoc),
                            I(r),
                            g
                    }
                },
                catch: function(e) {
                    for (var t = this.tryEntries.length - 1; 0 <= t; --t) {
                        var r, n, o = this.tryEntries[t];
                        if (o.tryLoc === e)
                            return "throw" === (r = o.completion).type && (n = r.arg,
                            I(o)),
                            n
                    }
                    throw new Error("illegal catch attempt")
                },
                delegateYield: function(e, t, r) {
                    return this.delegate = {
                        iterator: w(e),
                        resultName: t,
                        nextLoc: r
                    },
                    "next" === this.method && (this.arg = l),
                    g
                }
            },
            i
        }(runtime.exports);
        try {
            DVregeneratorRuntime = t
        } catch (e) {
            "object" == typeof globalThis ? globalThis.DVregeneratorRuntime = t : Function("r", "DVregeneratorRuntime = r")(t)
        }
    }(),
    runtime.exports), $$v = _export, $includes = arrayIncludes$1.includes, path$f = ($$v({
        target: "Array",
        proto: !0
    }, {
        includes: function(e) {
            return $includes(this, e, 1 < arguments.length ? arguments[1] : void 0)
        }
    }),
    path$m), entryVirtual$h = function(e) {
        return path$f[e + "Prototype"]
    }, entryVirtual$g = entryVirtual$h, includes$4 = entryVirtual$g("Array").includes, isObject$6 = isObject$i, classof$1 = classofRaw$1, wellKnownSymbol$4 = wellKnownSymbol$n, MATCH$1 = wellKnownSymbol$4("match"), isRegexp = function(e) {
        var t;
        return isObject$6(e) && (void 0 !== (t = e[MATCH$1]) ? !!t : "RegExp" == classof$1(e))
    }, isRegExp = isRegexp, notARegexp = function(e) {
        if (isRegExp(e))
            throw TypeError("The method doesn't accept regular expressions");
        return e
    }, wellKnownSymbol$3 = wellKnownSymbol$n, MATCH = wellKnownSymbol$3("match"), correctIsRegexpLogic = function(t) {
        var r = /./;
        try {
            "/./"[t](r)
        } catch (e) {
            try {
                return r[MATCH] = !1,
                "/./"[t](r)
            } catch (e) {}
        }
        return !1
    }, $$u = _export, notARegExp$2 = notARegexp, requireObjectCoercible$5 = requireObjectCoercible$9, toString$6 = toString$c, correctIsRegExpLogic$2 = correctIsRegexpLogic, entryVirtual$f = ($$u({
        target: "String",
        proto: !0,
        forced: !correctIsRegExpLogic$2("includes")
    }, {
        includes: function(e) {
            return !!~toString$6(requireObjectCoercible$5(this)).indexOf(toString$6(notARegExp$2(e)), 1 < arguments.length ? arguments[1] : void 0)
        }
    }),
    entryVirtual$h), includes$3 = entryVirtual$f("String").includes, arrayIncludes = includes$4, stringIncludes = includes$3, ArrayPrototype$b = Array.prototype, StringPrototype$4 = String.prototype, includes$2 = function(e) {
        var t = e.includes;
        return e === ArrayPrototype$b || e instanceof Array && t === ArrayPrototype$b.includes ? arrayIncludes : "string" == typeof e || e === StringPrototype$4 || e instanceof String && t === StringPrototype$4.includes ? stringIncludes : t
    }, parent$C = includes$2, includes$1 = parent$C, includes = includes$1, $$t = _export, $filter = arrayIteration.filter, arrayMethodHasSpeciesSupport$3 = arrayMethodHasSpeciesSupport$5, HAS_SPECIES_SUPPORT$3 = arrayMethodHasSpeciesSupport$3("filter"), entryVirtual$e = ($$t({
        target: "Array",
        proto: !0,
        forced: !HAS_SPECIES_SUPPORT$3
    }, {
        filter: function(e) {
            return $filter(this, e, 1 < arguments.length ? arguments[1] : void 0)
        }
    }),
    entryVirtual$h), filter$3 = entryVirtual$e("Array").filter, filter$2 = filter$3, ArrayPrototype$a = Array.prototype, filter_1 = function(e) {
        var t = e.filter;
        return e === ArrayPrototype$a || e instanceof Array && t === ArrayPrototype$a.filter ? filter$2 : t
    }, parent$B = filter_1, filter$1 = parent$B, filter = filter$1, $$s = _export, toObject$7 = toObject$d, nativeKeys = objectKeys$3, fails$b = fails$o, FAILS_ON_PRIMITIVES$2 = fails$b(function() {
        nativeKeys(1)
    }), path$e = ($$s({
        target: "Object",
        stat: !0,
        forced: FAILS_ON_PRIMITIVES$2
    }, {
        keys: function(e) {
            return nativeKeys(toObject$7(e))
        }
    }),
    path$m), keys$2 = path$e.Object.keys, parent$A = keys$2, keys$1 = parent$A, keys = keys$1, toConsumableArray = {
        exports: {}
    }, arrayWithoutHoles = {
        exports: {}
    }, $$r = _export, isArray$5 = isArray$9, path$d = ($$r({
        target: "Array",
        stat: !0
    }, {
        isArray: isArray$5
    }),
    path$m), isArray$4 = path$d.Array.isArray, parent$z = isArray$4, isArray$3 = parent$z, parent$y = isArray$3, isArray$2 = parent$y, isArray$1 = isArray$2, arrayLikeToArray = {
        exports: {}
    }, iterableToArray = (!function(e) {
        e.exports = function(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var r = 0, n = new Array(t); r < t; r++)
                n[r] = e[r];
            return n
        }
        ,
        e.exports.default = e.exports,
        e.exports.__esModule = !0
    }(arrayLikeToArray),
    !function(e) {
        var t = isArray$1
          , r = arrayLikeToArray.exports;
        e.exports = function(e) {
            if (t(e))
                return r(e)
        }
        ,
        e.exports.default = e.exports,
        e.exports.__esModule = !0
    }(arrayWithoutHoles),
    {
        exports: {}
    }), getIteratorMethod$5 = getIteratorMethod$8, getIteratorMethod_1 = getIteratorMethod$5, parent$x = getIteratorMethod_1, getIteratorMethod$4 = parent$x, parent$w = getIteratorMethod$4, getIteratorMethod$3 = parent$w, getIteratorMethod$2 = getIteratorMethod$3, anObject$3 = anObject$e, iteratorClose = iteratorClose$2, callWithSafeIterationClosing$1 = function(t, e, r, n) {
        try {
            return n ? e(anObject$3(r)[0], r[1]) : e(r)
        } catch (e) {
            iteratorClose(t, "throw", e)
        }
    }, bind$3 = functionBindContext, toObject$6 = toObject$d, callWithSafeIterationClosing = callWithSafeIterationClosing$1, isArrayIteratorMethod = isArrayIteratorMethod$2, toLength$8 = toLength$d, createProperty$3 = createProperty$5, getIterator$1 = getIterator$3, getIteratorMethod$1 = getIteratorMethod$8, arrayFrom$1 = function(e) {
        var t, r, n, o, a, i, s = toObject$6(e), e = "function" == typeof this ? this : Array, l = arguments.length, c = 1 < l ? arguments[1] : void 0, u = void 0 !== c, p = getIteratorMethod$1(s), d = 0;
        if (u && (c = bind$3(c, 2 < l ? arguments[2] : void 0, 2)),
        null == p || e == Array && isArrayIteratorMethod(p))
            for (r = new e(t = toLength$8(s.length)); d < t; d++)
                i = u ? c(s[d], d) : s[d],
                createProperty$3(r, d, i);
        else
            for (a = (o = getIterator$1(s, p)).next,
            r = new e; !(n = a.call(o)).done; d++)
                i = u ? callWithSafeIterationClosing(o, c, [n.value, d], !0) : n.value,
                createProperty$3(r, d, i);
        return r.length = d,
        r
    }, $$q = _export, from$5 = arrayFrom$1, checkCorrectnessOfIteration = checkCorrectnessOfIteration$2, INCORRECT_ITERATION = !checkCorrectnessOfIteration(function(e) {
        Array.from(e)
    }), path$c = ($$q({
        target: "Array",
        stat: !0,
        forced: INCORRECT_ITERATION
    }, {
        from: from$5
    }),
    path$m), from$4 = path$c.Array.from, parent$v = from$4, from$3 = parent$v, parent$u = from$3, from$2 = parent$u, from$1 = from$2, unsupportedIterableToArray = (!function(e) {
        var t = symbol$1
          , r = getIteratorMethod$2
          , n = from$1;
        e.exports = function(e) {
            if (void 0 !== t && null != r(e) || null != e["@@iterator"])
                return n(e)
        }
        ,
        e.exports.default = e.exports,
        e.exports.__esModule = !0
    }(iterableToArray),
    {
        exports: {}
    }), $$p = _export, isObject$5 = isObject$i, isArray = isArray$9, toAbsoluteIndex$2 = toAbsoluteIndex$4, toLength$7 = toLength$d, toIndexedObject$2 = toIndexedObject$9, createProperty$2 = createProperty$5, wellKnownSymbol$2 = wellKnownSymbol$n, arrayMethodHasSpeciesSupport$2 = arrayMethodHasSpeciesSupport$5, HAS_SPECIES_SUPPORT$2 = arrayMethodHasSpeciesSupport$2("slice"), SPECIES = wellKnownSymbol$2("species"), nativeSlice = [].slice, max$1 = Math.max, entryVirtual$d = ($$p({
        target: "Array",
        proto: !0,
        forced: !HAS_SPECIES_SUPPORT$2
    }, {
        slice: function(e, t) {
            var r, n, o, a = toIndexedObject$2(this), i = toLength$7(a.length), s = toAbsoluteIndex$2(e, i), l = toAbsoluteIndex$2(void 0 === t ? i : t, i);
            if (isArray(a) && ((r = "function" == typeof (r = a.constructor) && (r === Array || isArray(r.prototype)) || isObject$5(r) && null === (r = r[SPECIES]) ? void 0 : r) === Array || void 0 === r))
                return nativeSlice.call(a, s, l);
            for (n = new (void 0 === r ? Array : r)(max$1(l - s, 0)),
            o = 0; s < l; s++,
            o++)
                s in a && createProperty$2(n, o, a[s]);
            return n.length = o,
            n
        }
    }),
    entryVirtual$h), slice$7 = entryVirtual$d("Array").slice, slice$6 = slice$7, ArrayPrototype$9 = Array.prototype, slice_1 = function(e) {
        var t = e.slice;
        return e === ArrayPrototype$9 || e instanceof Array && t === ArrayPrototype$9.slice ? slice$6 : t
    }, parent$t = slice_1, slice$5 = parent$t, parent$s = slice$5, slice$4 = parent$s, slice$3 = slice$4, nonIterableSpread = (!function(e) {
        var n = slice$3
          , o = from$1
          , a = arrayLikeToArray.exports;
        e.exports = function(e, t) {
            if (e) {
                if ("string" == typeof e)
                    return a(e, t);
                var r = n(r = Object.prototype.toString.call(e)).call(r, 8, -1);
                return "Map" === (r = "Object" === r && e.constructor ? e.constructor.name : r) || "Set" === r ? o(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? a(e, t) : void 0
            }
        }
        ,
        e.exports.default = e.exports,
        e.exports.__esModule = !0
    }(unsupportedIterableToArray),
    {
        exports: {}
    }), _toConsumableArray = (!function(e) {
        e.exports = function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }
        ,
        e.exports.default = e.exports,
        e.exports.__esModule = !0
    }(nonIterableSpread),
    !function(e) {
        var t = arrayWithoutHoles.exports
          , r = iterableToArray.exports
          , n = unsupportedIterableToArray.exports
          , o = nonIterableSpread.exports;
        e.exports = function(e) {
            return t(e) || r(e) || n(e) || o()
        }
        ,
        e.exports.default = e.exports,
        e.exports.__esModule = !0
    }(toConsumableArray),
    getDefaultExportFromCjs(toConsumableArray.exports)), $$o = _export, $map = arrayIteration.map, arrayMethodHasSpeciesSupport$1 = arrayMethodHasSpeciesSupport$5, HAS_SPECIES_SUPPORT$1 = arrayMethodHasSpeciesSupport$1("map"), entryVirtual$c = ($$o({
        target: "Array",
        proto: !0,
        forced: !HAS_SPECIES_SUPPORT$1
    }, {
        map: function(e) {
            return $map(this, e, 1 < arguments.length ? arguments[1] : void 0)
        }
    }),
    entryVirtual$h), map$6 = entryVirtual$c("Array").map, map$5 = map$6, ArrayPrototype$8 = Array.prototype, map_1 = function(e) {
        var t = e.map;
        return e === ArrayPrototype$8 || e instanceof Array && t === ArrayPrototype$8.map ? map$5 : t
    }, parent$r = map_1, map$4 = parent$r, map$3 = map$4, entryVirtual$b = entryVirtual$h, concat$3 = entryVirtual$b("Array").concat, concat$2 = concat$3, ArrayPrototype$7 = Array.prototype, concat_1 = function(e) {
        var t = e.concat;
        return e === ArrayPrototype$7 || e instanceof Array && t === ArrayPrototype$7.concat ? concat$2 : t
    }, parent$q = concat_1, concat$1 = parent$q, concat = concat$1, enable$1 = !1;
    try {
        var _context, enable$1 = !!localStorage.getItem(map$3(_context = [68, 65, 84, 65, 86, 73, 83, 79, 82, 68, 69, 66, 85, 71]).call(_context, function(e) {
            return String.fromCharCode(e)
        }).join(""))
    } catch (error) {}
    function getTime() {
        var e = new Date
          , t = "000" + e.getHours().toString()
          , r = "000" + e.getMinutes().toString()
          , n = "000" + e.getSeconds().toString()
          , e = "000" + e.getMilliseconds().toString();
        return t.substr(t.length - 2) + ":" + r.substr(r.length - 2) + ":" + n.substr(n.length - 2) + "." + e.substr(e.length - 3)
    }
    var logger = {
        log: function() {
            if (enable$1) {
                for (var e, t = arguments.length, r = new Array(t), n = 0; n < t; n++)
                    r[n] = arguments[n];
                console.log.apply(window, concat(e = [getTime()]).call(e, r))
            }
        },
        warn: function() {
            if (enable$1) {
                for (var e, t = arguments.length, r = new Array(t), n = 0; n < t; n++)
                    r[n] = arguments[n];
                console.warn.apply(window, concat(e = [getTime()]).call(e, r))
            }
        },
        highlight: function() {
            if (enable$1) {
                for (var e, t = arguments.length, r = new Array(t), n = 0; n < t; n++)
                    r[n] = arguments[n];
                var o = concat(o = [getTime()]).call(o, r)
                  , a = "%c";
                o.forEach(function(e) {
                    "string" == typeof e ? a += "%s\t" : "number" == typeof e ? a += "%f\t" : "object" == _typeof(e) && (a += "%o\t")
                }),
                console.log.apply(window, concat(e = [a, "background: #0f0;color:#000"]).call(e, _toConsumableArray(o)))
            }
        },
        error: function() {
            if (enable$1) {
                for (var e, t = arguments.length, r = new Array(t), n = 0; n < t; n++)
                    r[n] = arguments[n];
                console.error.apply(window, concat(e = [getTime()]).call(e, r))
            }
        }
    }, msg, ERROR_MSG, from = (!function(e) {
        e.VALUE_LONG = "value is too long",
        e.SUCCESS = "success",
        e.PARA_ERR = "para_err",
        e.EMPTY = "empty",
        e.DEFAULT = "default",
        e.NO_PERMISSON = "no_permission",
        e.EXCEPTION = "exception",
        e.NOT_SUPPORT = "not_supported",
        e.CONNECTION_FAILED = "connection_failed",
        e.CONNECTING = "connecting",
        e.TIMEOUT = "time_out",
        e.WS_TIMEOUT = "ws_timeout",
        e.RUNNING = "running"
    }(msg = msg || {}),
    !function(e) {
        e.sqljs_failed_to_start = "Sqljs failed to start",
        e.zangodb_failed_to_start = "Zangodb failed to start",
        e.support_only_select_grammar = "Support only select grammar",
        e.failed_to_parse_sql_code = "Failed to parse sql code",
        e.failed_to_exec_sql = "Failed to execute sqlcode",
        e.script_not_exists = "Script not exists",
        e.failed_to_delete_in_sqljs = "Failed to delete in sqljs",
        e.failed_to_delete_in_zangodb = "Failed to delete in zangodb",
        e.invalid_response_from_worker = "Invalid response from worker",
        e.parameter_error = "Parameter error",
        e.unknown_error = "Unknown error",
        e.worker_failed_to_start = "Worker failed to start",
        e.failed_to_hot_update_script = "Failed to hot update script",
        e.failed_to_update_dv_field = "Failed to update dv field",
        e.zangodb_execution_error = "zangodb execution error",
        e.zangodb_failed_to_handle_result = "zangodb failed to handle result",
        e.failed_to_parse_data_before_send = "Failed to parse data before send",
        e.website_is_in_backend = "Website is in backend",
        e.failed_to_create_worker = "Failed to create worker",
        e.failed_to_create_db_for_sqljs = "Failed to create db for sqljs",
        e.failed_to_get_worker_file_for_sqljs = "Failed to get worker file",
        e.xhr_status_not_200 = "xhr status not 200",
        e.xdr_failed_to_send_request = "xdr failed to send request",
        e.xhr_not_supported = "xhr not supported",
        e.xhr_failed_to_open_url = "xhr failed to open url",
        e.no_dvid_in_response = "no dvid in response"
    }(ERROR_MSG = ERROR_MSG || {}),
    from$3), symbol = symbol$3, slicedToArray = {
        exports: {}
    }, arrayWithHoles = {
        exports: {}
    }, iterableToArrayLimit = (!function(e) {
        var t = isArray$1;
        e.exports = function(e) {
            if (t(e))
                return e
        }
        ,
        e.exports.default = e.exports,
        e.exports.__esModule = !0
    }(arrayWithHoles),
    {
        exports: {}
    }), nonIterableRest = (!function(e) {
        var l = symbol$1
          , c = getIteratorMethod$2;
        e.exports = function(e, t) {
            var r = null == e ? null : void 0 !== l && c(e) || e["@@iterator"];
            if (null != r) {
                var n, o, a = [], i = !0, s = !1;
                try {
                    for (r = r.call(e); !(i = (n = r.next()).done) && (a.push(n.value),
                    !t || a.length !== t); i = !0)
                        ;
                } catch (e) {
                    s = !0,
                    o = e
                } finally {
                    try {
                        i || null == r.return || r.return()
                    } finally {
                        if (s)
                            throw o
                    }
                }
                return a
            }
        }
        ,
        e.exports.default = e.exports,
        e.exports.__esModule = !0
    }(iterableToArrayLimit),
    {
        exports: {}
    }), _slicedToArray = (!function(e) {
        e.exports = function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }
        ,
        e.exports.default = e.exports,
        e.exports.__esModule = !0
    }(nonIterableRest),
    !function(e) {
        var r = arrayWithHoles.exports
          , n = iterableToArrayLimit.exports
          , o = unsupportedIterableToArray.exports
          , a = nonIterableRest.exports;
        e.exports = function(e, t) {
            return r(e) || n(e, t) || o(e, t) || a()
        }
        ,
        e.exports.default = e.exports,
        e.exports.__esModule = !0
    }(slicedToArray),
    getDefaultExportFromCjs(slicedToArray.exports)), $$n = _export, toLength$6 = toLength$d, toString$5 = toString$c, notARegExp$1 = notARegexp, requireObjectCoercible$4 = requireObjectCoercible$9, correctIsRegExpLogic$1 = correctIsRegexpLogic, $startsWith = "".startsWith, min$2 = Math.min, CORRECT_IS_REGEXP_LOGIC$1 = correctIsRegExpLogic$1("startsWith"), entryVirtual$a = ($$n({
        target: "String",
        proto: !0,
        forced: !CORRECT_IS_REGEXP_LOGIC$1
    }, {
        startsWith: function(e) {
            var t = toString$5(requireObjectCoercible$4(this))
              , r = (notARegExp$1(e),
            toLength$6(min$2(1 < arguments.length ? arguments[1] : void 0, t.length)))
              , e = toString$5(e);
            return $startsWith ? $startsWith.call(t, e, r) : t.slice(r, r + e.length) === e
        }
    }),
    entryVirtual$h), startsWith$3 = entryVirtual$a("String").startsWith, startsWith$2 = startsWith$3, StringPrototype$3 = String.prototype, startsWith_1 = function(e) {
        var t = e.startsWith;
        return "string" == typeof e || e === StringPrototype$3 || e instanceof String && t === StringPrototype$3.startsWith ? startsWith$2 : t
    }, parent$p = startsWith_1, startsWith$1 = parent$p, startsWith = startsWith$1, promise = promise$3, $$m = _export, global$3 = global$n, userAgent$3 = engineUserAgent, slice$2 = [].slice, MSIE = /MSIE .\./.test(userAgent$3), wrap = function(o) {
        return function(e, t) {
            var r = 2 < arguments.length
              , n = r ? slice$2.call(arguments, 2) : void 0;
            return o(r ? function() {
                ("function" == typeof e ? e : Function(e)).apply(this, n)
            }
            : e, t)
        }
    }, path$b = ($$m({
        global: !0,
        bind: !0,
        forced: MSIE
    }, {
        setTimeout: wrap(global$3.setTimeout),
        setInterval: wrap(global$3.setInterval)
    }),
    path$m), setTimeout$2 = path$b.setTimeout, setTimeout$1 = setTimeout$2, $$l = _export, getBuiltIn$3 = getBuiltIn$c, fails$a = fails$o, $stringify = getBuiltIn$3("JSON", "stringify"), re = /[\uD800-\uDFFF]/g, low = /^[\uD800-\uDBFF]$/, hi = /^[\uDC00-\uDFFF]$/, fix = function(e, t, r) {
        var n = r.charAt(t - 1)
          , r = r.charAt(t + 1);
        return low.test(e) && !hi.test(r) || hi.test(e) && !low.test(n) ? "\\u" + e.charCodeAt(0).toString(16) : e
    }, FORCED$3 = fails$a(function() {
        return '"\\udf06\\ud834"' !== $stringify("\udf06\ud834") || '"\\udead"' !== $stringify("\udead")
    }), core = ($stringify && $$l({
        target: "JSON",
        stat: !0,
        forced: FORCED$3
    }, {
        stringify: function(e, t, r) {
            var n = $stringify.apply(null, arguments);
            return "string" == typeof n ? n.replace(re, fix) : n
        }
    }),
    path$m), stringify$2 = (core.JSON || (core.JSON = {
        stringify: JSON.stringify
    }),
    function(e, t, r) {
        return core.JSON.stringify.apply(null, arguments)
    }
    ), parent$o = stringify$2, stringify$1 = parent$o, stringify = stringify$1, slice$1 = slice$5, whitespaces$2 = "\t\n\v\f\r                　\u2028\u2029\ufeff", requireObjectCoercible$3 = requireObjectCoercible$9, toString$4 = toString$c, whitespaces$1 = whitespaces$2, whitespace = "[" + whitespaces$1 + "]", ltrim = RegExp("^" + whitespace + whitespace + "*"), rtrim = RegExp(whitespace + whitespace + "*$"), createMethod$2 = function(t) {
        return function(e) {
            e = toString$4(requireObjectCoercible$3(e));
            return 1 & t && (e = e.replace(ltrim, "")),
            e = 2 & t ? e.replace(rtrim, "") : e
        }
    }, stringTrim = {
        start: createMethod$2(1),
        end: createMethod$2(2),
        trim: createMethod$2(3)
    }, fails$9 = fails$o, whitespaces = whitespaces$2, non = "​᠎", stringTrimForced = function(e) {
        return fails$9(function() {
            return !!whitespaces[e]() || non[e]() != non || whitespaces[e].name !== e
        })
    }, $$k = _export, $trim = stringTrim.trim, forcedStringTrimMethod = stringTrimForced, entryVirtual$9 = ($$k({
        target: "String",
        proto: !0,
        forced: forcedStringTrimMethod("trim")
    }, {
        trim: function() {
            return $trim(this)
        }
    }),
    entryVirtual$h), trim$3 = entryVirtual$9("String").trim, trim$2 = trim$3, StringPrototype$2 = String.prototype, trim_1 = function(e) {
        var t = e.trim;
        return "string" == typeof e || e === StringPrototype$2 || e instanceof String && t === StringPrototype$2.trim ? trim$2 : t
    }, parent$n = trim_1, trim$1 = parent$n, trim = trim$1, $$j = _export, toLength$5 = toLength$d, toString$3 = toString$c, notARegExp = notARegexp, requireObjectCoercible$2 = requireObjectCoercible$9, correctIsRegExpLogic = correctIsRegexpLogic, $endsWith = "".endsWith, min$1 = Math.min, CORRECT_IS_REGEXP_LOGIC = correctIsRegExpLogic("endsWith"), entryVirtual$8 = ($$j({
        target: "String",
        proto: !0,
        forced: !CORRECT_IS_REGEXP_LOGIC
    }, {
        endsWith: function(e) {
            var t = toString$3(requireObjectCoercible$2(this))
              , r = (notARegExp(e),
            1 < arguments.length ? arguments[1] : void 0)
              , n = toLength$5(t.length)
              , r = void 0 === r ? n : min$1(toLength$5(r), n)
              , n = toString$3(e);
            return $endsWith ? $endsWith.call(t, n, r) : t.slice(r - n.length, r) === n
        }
    }),
    entryVirtual$h), endsWith$3 = entryVirtual$8("String").endsWith, endsWith$2 = endsWith$3, StringPrototype$1 = String.prototype, endsWith_1 = function(e) {
        var t = e.endsWith;
        return "string" == typeof e || e === StringPrototype$1 || e instanceof String && t === StringPrototype$1.endsWith ? endsWith$2 : t
    }, parent$m = endsWith_1, endsWith$1 = parent$m, endsWith = endsWith$1, globalVariable = {
        VERSION: "9.5.1",
        POST_DATA_FREEZING_PERIOD: 6e4,
        INIT_TOKEN_TIMEOUT: 6e4,
        INIT_LONG_TOKEN_TIMEOUT: 2e4,
        URL_IFRAME: "/dedge/zd/zd-service.html",
        DEFAULT_DVTTL_SECOND: 31536e4,
        DV_DEFAULT_TOKEN: "",
        URL_CS: "https://airasia.ck123.io",
        ENV: "https://airasia.gw-dv.vip",
        ACK: "com.airasia.mobile-g5DPBstmdcBL8",
        RAPHAEL_EIP: "[]",
        ZHENGDAO_EIP: "[]",
        initTokenStartTime: 0,
        nativeCallbackIndex: 0,
        tempDVID: "",
        tempDVUUID: "",
        tempDVCJ: "",
        dvLastDecryptErrCode: 0,
        dvWaitingResponse: !1,
        initTokenTimeoutReason: "",
        tempDVPreTokens: [],
        tempDVPreTokensIndex: 0,
        strTokenReturned: "",
        tempDVLongToken: "",
        tempDVLongTokenExpire: 0
    }, initTokenProgress, api = (!function(e) {
        e.syncCollecting = "syncCollecting",
        e.asyncCollecting = "asyncCollecting",
        e.collectionDone = "collectionDone",
        e.encrypting = "encrypting",
        e.reporting = "reporting",
        e.decrypting = "decrypting"
    }(initTokenProgress = initTokenProgress || {}),
    {
        POST_DATA: {
            url: "/raphael_data_v8",
            method: "POST"
        },
        SECOND_REQUEST: {
            url: "/raphael_data_v8",
            method: "PUT"
        },
        PATCH_REQUEST: {
            url: "/raphael_data_v8",
            method: "PATCH"
        },
        CONFIG_REQUEST: {
            url: "/raphael_config",
            method: "POST"
        },
        SIMPLE_REQUEST: {
            url: "/ping",
            method: "GET"
        },
        CS_GET: {
            url: "/raphael_cs",
            method: "GET"
        },
        CS_POST: {
            url: "/raphael_cs",
            method: "POST"
        }
    });
    function _createForOfIteratorHelper(e, t) {
        var r, n = void 0 !== symbol && getIteratorMethod$2(e) || e["@@iterator"];
        if (!n) {
            if (Array.isArray(e) || (n = _unsupportedIterableToArray(e)) || t && e && "number" == typeof e.length)
                return n && (e = n),
                r = 0,
                {
                    s: t = function() {}
                    ,
                    n: function() {
                        return r >= e.length ? {
                            done: !0
                        } : {
                            done: !1,
                            value: e[r++]
                        }
                    },
                    e: function(e) {
                        throw e
                    },
                    f: t
                };
            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }
        var o, a = !0, i = !1;
        return {
            s: function() {
                n = n.call(e)
            },
            n: function() {
                var e = n.next();
                return a = e.done,
                e
            },
            e: function(e) {
                i = !0,
                o = e
            },
            f: function() {
                try {
                    a || null == n.return || n.return()
                } finally {
                    if (i)
                        throw o
                }
            }
        }
    }
    function _unsupportedIterableToArray(e, t) {
        if (e) {
            if ("string" == typeof e)
                return _arrayLikeToArray(e, t);
            var r = slice$1(r = Object.prototype.toString.call(e)).call(r, 8, -1);
            return "Map" === (r = "Object" === r && e.constructor ? e.constructor.name : r) || "Set" === r ? from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? _arrayLikeToArray(e, t) : void 0
        }
    }
    function _arrayLikeToArray(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++)
            n[r] = e[r];
        return n
    }
    var xhrStatusNot200Prefix = msg.CONNECTION_FAILED + ": " + ERROR_MSG.xhr_status_not_200 + ": ", LOCAL_STORAGE_ITEM;
    function isValidDvid(e) {
        return !(!startsWith(e).call(e, "JD_") && !startsWith(e).call(e, "DD_") || 46 != e.length)
    }
    !function(e) {
        e.DVID = "DVID",
        e.DVUUID = "DVUUID",
        e.DVMA = "DVMA",
        e.DVTokenExpiration = "DVTokenExpiration",
        e.DVDecryptErrCode = "DVDecryptErrCode",
        e.DVLastPutSpendTime = "DVLastPutSpendTime",
        e.DVFONTCOUNT = "DVFONTCOUNT",
        e.DVFONTRESULT = "DVFONTRESULT",
        e.DVJ34 = "DVJ34",
        e.DVJ35 = "DVJ35",
        e.DVJ75 = "DVJ75",
        e.DVJ85 = "DVJ85",
        e.DVE1 = "DVE1",
        e.DVLowPerformance = "DVLowPerformance",
        e.DVPostCount = "DVPostCount",
        e.DVPreTokens = "DVPreTokens",
        e.DVPreTokensIndex = "DVPreTokensIndex",
        e.DVLastUpdateData = "DVLastUpdateData",
        e.DVZDconfig = "DVZDconfig",
        e.DVRaphaelEIP = "DVRaphaelEIP",
        e.DVZhengdaoEIP = "DVZhengdaoEIP",
        e.DVRaphaelConfig = "DVRaphaelConfig",
        e.DVZDScriptDB = "DVZDScriptDB",
        e.DVZDReplayData = "DVZDReplayData"
    }(LOCAL_STORAGE_ITEM = LOCAL_STORAGE_ITEM || {});
    var tool = {
        getFromLocalStorage: function(e) {
            try {
                return localStorage.getItem(e) || ""
            } catch (e) {
                return ""
            }
        },
        getFromLocalStorageAndDecrypt: function(r) {
            return new promise(function(t) {
                var e = tool.getFromLocalStorage(r);
                if (r === LOCAL_STORAGE_ITEM.DVID) {
                    if (isValidDvid(e))
                        return t(e);
                    tool.decryptAES(e).then(function(e) {
                        return t(isValidDvid(e) ? e : "")
                    }).catch(function() {
                        return t("")
                    })
                }
            }
            )
        },
        setLocalStorage: function(e, t) {
            try {
                localStorage.setItem(e, t)
            } catch (e) {}
        },
        setLocalStorageAfterEncrypt: function(r, n) {
            return _asyncToGenerator(regenerator.mark(function e() {
                var t;
                return regenerator.wrap(function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return t = n,
                            e.prev = 1,
                            e.next = 4,
                            tool.encryptAES(n);
                        case 4:
                            t = e.sent,
                            e.next = 9;
                            break;
                        case 7:
                            e.prev = 7,
                            e.t0 = e.catch(1);
                        case 9:
                            return tool.setLocalStorage(r, t),
                            e.abrupt("return", t);
                        case 11:
                        case "end":
                            return e.stop()
                        }
                }, e, null, [[1, 7]])
            }))()
        },
        removeFromLocalStorage: function(e) {
            try {
                localStorage.removeItem(e)
            } catch (e) {}
        },
        now: function() {
            return (new Date).getTime()
        },
        isArray: function(e) {
            return Array.isArray ? Array.isArray(e) : "[object Array]" === Object.prototype.toString.call(e)
        },
        waituntil: function(o) {
            var a = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 20
              , i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : 3e3
              , s = tool.now();
            return new promise(function(r, n) {
                !function t() {
                    if (tool.now() - s > i)
                        return n(msg.TIMEOUT);
                    var e = o();
                    "boolean" == typeof e ? e ? r() : setTimeout$1(t, a) : e instanceof promise && e.then(function(e) {
                        return e ? r() : setTimeout$1(t, a)
                    }).catch(function() {
                        return setTimeout$1(t, a)
                    })
                }()
            }
            )
        },
        createXmlHttp: function() {
            var e = null;
            try {
                e = new XMLHttpRequest
            } catch (e) {
                return null
            }
            return e
        },
        createXDomainRequest: function() {
            var e = null;
            try {
                e = new window.XDomainRequest
            } catch (e) {
                return null
            }
            return e
        },
        ajax: function(e, a, i, s, l, c) {
            return new promise(function(r, n) {
                var t = tool.createXDomainRequest();
                if (t)
                    try {
                        t.open(e, a, !0),
                        t.send(i),
                        t.onload = function() {
                            var e = "";
                            try {
                                e = t.responseText || ""
                            } catch (e) {}
                            r(s ? {
                                response: e,
                                headers: {}
                            } : e)
                        }
                    } catch (e) {
                        n(ERROR_MSG.xdr_failed_to_send_request)
                    }
                else {
                    var o = tool.createXmlHttp();
                    if (!o)
                        return console.error("The version of browser is too old to support raphael"),
                        void n(msg.CONNECTION_FAILED + ": " + ERROR_MSG.xhr_not_supported);
                    try {
                        o.open(e, a, !0)
                    } catch (e) {
                        return void n(msg.CONNECTION_FAILED + ": " + ERROR_MSG.xhr_failed_to_open_url)
                    }
                    c && (o.withCredentials = !0),
                    o.setRequestHeader && "function" == typeof o.setRequestHeader && (o.setRequestHeader("Content-Type", "application/json"),
                    o.setRequestHeader("Accept", "application/json"),
                    l && keys(l).forEach(function(e) {
                        var t = l[e];
                        o.setRequestHeader(e, t)
                    })),
                    o.send(i),
                    o.onreadystatechange = function() {
                        var t, e;
                        4 == o.readyState && (200 != o.status ? n(xhrStatusNot200Prefix + stringify({
                            status: o.status,
                            headers: "function" == typeof o.getAllResponseHeaders ? o.getAllResponseHeaders() : msg.NOT_SUPPORT,
                            body: o.response
                        })) : s ? (t = {},
                        (e = o.getAllResponseHeaders()) && e.split("\r\n").forEach(function(e) {
                            includes(e).call(e, ": ") && (e = e.split(": "),
                            t[e[0]] = e[1])
                        }),
                        r({
                            response: o.response,
                            headers: t
                        })) : r(o.response))
                    }
                }
            }
            )
        },
        on: function(t, e, r, n) {
            n = !!n,
            t.addEventListener ? t.addEventListener(e, r, n) : t.attachEvent("on" + e, function(e) {
                return r.call(t, e)
            }, n)
        },
        getRndInteger: function(e, t) {
            return Math.floor(Math.random() * (t - e)) + e
        },
        getRndString: function(e, t) {
            t = t || "abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
            for (var r = "", n = 0; n < e; n++)
                r += t[Math.floor(tool.getRndInteger(0, t.length))];
            return r
        },
        clearTimeout: function(t) {
            function e(e) {
                return t.apply(this, arguments)
            }
            return e.toString = function() {
                return t.toString()
            }
            ,
            e
        }(function(e) {
            try {
                clearTimeout(e)
            } catch (e) {}
        }),
        MD5: function(e) {
            function s(e, t) {
                var r = 2147483648 & e
                  , n = 2147483648 & t
                  , o = 1073741824 & e
                  , a = 1073741824 & t
                  , e = (1073741823 & e) + (1073741823 & t);
                return o & a ? 2147483648 ^ e ^ r ^ n : o | a ? 1073741824 & e ? 3221225472 ^ e ^ r ^ n : 1073741824 ^ e ^ r ^ n : e ^ r ^ n
            }
            function t(e, t, r, n, o, a, i) {
                return e = s(e, s(s(t & r | ~t & n, o), i)),
                s(e << a | e >>> 32 - a, t)
            }
            function r(e, t, r, n, o, a, i) {
                return e = s(e, s(s(t & n | r & ~n, o), i)),
                s(e << a | e >>> 32 - a, t)
            }
            function n(e, t, r, n, o, a, i) {
                return e = s(e, s(s(t ^ r ^ n, o), i)),
                s(e << a | e >>> 32 - a, t)
            }
            function o(e, t, r, n, o, a, i) {
                return e = s(e, s(s(r ^ (t | ~n), o), i)),
                s(e << a | e >>> 32 - a, t)
            }
            function a(e) {
                for (var t = "", r = "", n = 0; n <= 3; n++)
                    t += (r = "0" + (r = e >>> 8 * n & 255).toString(16)).substr(r.length - 2, 2);
                return t
            }
            var i, l, c, u, p = function(e) {
                for (var t, r = e.length, n = r + 8, o = 16 * ((n - n % 64) / 64 + 1), a = Array(o - 1), i = 0; i < r; )
                    t = i % 4 * 8,
                    a[n = (i - i % 4) / 4] |= e.charCodeAt(i) << t,
                    i++;
                return a[n = (i - i % 4) / 4] |= 128 << i % 4 * 8,
                a[o - 2] = r << 3,
                a[o - 1] = r >>> 29,
                a
            }(e = function(e) {
                e = e.replace(/\r\n/g, "\n");
                for (var t = "", r = 0; r < e.length; r++) {
                    var n = e.charCodeAt(r);
                    n < 128 ? t += String.fromCharCode(n) : (127 < n && n < 2048 ? t += String.fromCharCode(n >> 6 | 192) : t = (t += String.fromCharCode(n >> 12 | 224)) + String.fromCharCode(n >> 6 & 63 | 128),
                    t += String.fromCharCode(63 & n | 128))
                }
                return t
            }(e)), d = 1732584193, f = 4023233417, h = 2562383102, g = 271733878;
            for (e = 0; e < p.length; e += 16)
                d = t(i = d, l = f, c = h, u = g, p[e + 0], 7, 3614090360),
                g = t(g, d, f, h, p[e + 1], 12, 3905402710),
                h = t(h, g, d, f, p[e + 2], 17, 606105819),
                f = t(f, h, g, d, p[e + 3], 22, 3250441966),
                d = t(d, f, h, g, p[e + 4], 7, 4118548399),
                g = t(g, d, f, h, p[e + 5], 12, 1200080426),
                h = t(h, g, d, f, p[e + 6], 17, 2821735955),
                f = t(f, h, g, d, p[e + 7], 22, 4249261313),
                d = t(d, f, h, g, p[e + 8], 7, 1770035416),
                g = t(g, d, f, h, p[e + 9], 12, 2336552879),
                h = t(h, g, d, f, p[e + 10], 17, 4294925233),
                f = t(f, h, g, d, p[e + 11], 22, 2304563134),
                d = t(d, f, h, g, p[e + 12], 7, 1804603682),
                g = t(g, d, f, h, p[e + 13], 12, 4254626195),
                h = t(h, g, d, f, p[e + 14], 17, 2792965006),
                d = r(d, f = t(f, h, g, d, p[e + 15], 22, 1236535329), h, g, p[e + 1], 5, 4129170786),
                g = r(g, d, f, h, p[e + 6], 9, 3225465664),
                h = r(h, g, d, f, p[e + 11], 14, 643717713),
                f = r(f, h, g, d, p[e + 0], 20, 3921069994),
                d = r(d, f, h, g, p[e + 5], 5, 3593408605),
                g = r(g, d, f, h, p[e + 10], 9, 38016083),
                h = r(h, g, d, f, p[e + 15], 14, 3634488961),
                f = r(f, h, g, d, p[e + 4], 20, 3889429448),
                d = r(d, f, h, g, p[e + 9], 5, 568446438),
                g = r(g, d, f, h, p[e + 14], 9, 3275163606),
                h = r(h, g, d, f, p[e + 3], 14, 4107603335),
                f = r(f, h, g, d, p[e + 8], 20, 1163531501),
                d = r(d, f, h, g, p[e + 13], 5, 2850285829),
                g = r(g, d, f, h, p[e + 2], 9, 4243563512),
                h = r(h, g, d, f, p[e + 7], 14, 1735328473),
                d = n(d, f = r(f, h, g, d, p[e + 12], 20, 2368359562), h, g, p[e + 5], 4, 4294588738),
                g = n(g, d, f, h, p[e + 8], 11, 2272392833),
                h = n(h, g, d, f, p[e + 11], 16, 1839030562),
                f = n(f, h, g, d, p[e + 14], 23, 4259657740),
                d = n(d, f, h, g, p[e + 1], 4, 2763975236),
                g = n(g, d, f, h, p[e + 4], 11, 1272893353),
                h = n(h, g, d, f, p[e + 7], 16, 4139469664),
                f = n(f, h, g, d, p[e + 10], 23, 3200236656),
                d = n(d, f, h, g, p[e + 13], 4, 681279174),
                g = n(g, d, f, h, p[e + 0], 11, 3936430074),
                h = n(h, g, d, f, p[e + 3], 16, 3572445317),
                f = n(f, h, g, d, p[e + 6], 23, 76029189),
                d = n(d, f, h, g, p[e + 9], 4, 3654602809),
                g = n(g, d, f, h, p[e + 12], 11, 3873151461),
                h = n(h, g, d, f, p[e + 15], 16, 530742520),
                d = o(d, f = n(f, h, g, d, p[e + 2], 23, 3299628645), h, g, p[e + 0], 6, 4096336452),
                g = o(g, d, f, h, p[e + 7], 10, 1126891415),
                h = o(h, g, d, f, p[e + 14], 15, 2878612391),
                f = o(f, h, g, d, p[e + 5], 21, 4237533241),
                d = o(d, f, h, g, p[e + 12], 6, 1700485571),
                g = o(g, d, f, h, p[e + 3], 10, 2399980690),
                h = o(h, g, d, f, p[e + 10], 15, 4293915773),
                f = o(f, h, g, d, p[e + 1], 21, 2240044497),
                d = o(d, f, h, g, p[e + 8], 6, 1873313359),
                g = o(g, d, f, h, p[e + 15], 10, 4264355552),
                h = o(h, g, d, f, p[e + 6], 15, 2734768916),
                f = o(f, h, g, d, p[e + 13], 21, 1309151649),
                d = o(d, f, h, g, p[e + 4], 6, 4149444226),
                g = o(g, d, f, h, p[e + 11], 10, 3174756917),
                h = o(h, g, d, f, p[e + 2], 15, 718787259),
                f = o(f, h, g, d, p[e + 9], 21, 3951481745),
                d = s(d, i),
                f = s(f, l),
                h = s(h, c),
                g = s(g, u);
            return (a(d) + a(f) + a(h) + a(g)).toLowerCase()
        },
        transformCdnDomain: function(e) {
            var e = e.split(".")
              , t = e[e.length - 1]
              , e = e[e.length - 2];
            return "gw-dv" === e ? "https://ls.cdn-gw-dv.vip" : concat(e = "https://ls.cdn-".concat(e, ".")).call(e, t)
        },
        generateDomain: function(t, e, r) {
            var n = concat(n = []).call(n, _toConsumableArray(t), [e])
              , e = e.split(".");
            if (e.length < 2)
                return n;
            var o, a, i = e[e.length - 1], s = e[e.length - 2], l = null;
            return includes(i).call(i, ":") && (a = i.split(":"),
            o = (a = _slicedToArray(a, 2))[0],
            a = a[1],
            i = o,
            l = parseInt(a)),
            "gw-dv" === s ? (r && n.push(concat(o = slice$1(e).call(e, 0, e.length - 2)).call(o, ["cdn-gw-dv", "vip"]).join(".")),
            "vip" !== i && n.push(concat(a = []).call(a, _toConsumableArray(slice$1(e).call(e, 0, e.length - 1)), ["vip"]).join(".")),
            "io" !== i && n.push(concat(o = []).call(o, _toConsumableArray(slice$1(e).call(e, 0, e.length - 1)), ["io"]).join(".")),
            "xyz" !== i && n.push(concat(a = []).call(a, _toConsumableArray(slice$1(e).call(e, 0, e.length - 1)), ["xyz"]).join("."))) : r && (e[e.length - 2] = "cdn-".concat(s),
            n.push(e.join("."))),
            l ? map$3(n).call(n, function(e) {
                return includes(t).call(t, e) || includes(e).call(e, ":") ? e : concat(e = "".concat(e, ":")).call(e, l)
            }) : n
        },
        isCdnDomain: function(e) {
            e = e.split(".");
            if (e.length < 2)
                return !1;
            e = e[e.length - 2];
            return !!startsWith(e).call(e, "cdn-")
        },
        compareTwoObjs: function(e, t) {
            if (null == e || null == t)
                return e === t;
            if (Object.prototype.toString.call(e) !== Object.prototype.toString.call(t))
                return !1;
            if (Array.isArray(e) && Array.isArray(t)) {
                if (e.length !== t.length)
                    return !1;
                for (var r = 0; r < e.length; r++)
                    if (!this.compareTwoObjs(e[r], t[r]))
                        return !1;
                return !0
            }
            if ("object" !== _typeof(e) || "object" !== _typeof(t))
                return e === t;
            var n = keys(e)
              , o = keys(t);
            if (n.length !== o.length)
                return !1;
            var a, i = _createForOfIteratorHelper(n);
            try {
                for (i.s(); !(a = i.n()).done; ) {
                    var s = a.value;
                    if (!this.compareTwoObjs(e[s], t[s]))
                        return !1
                }
            } catch (e) {
                i.e(e)
            } finally {
                i.f()
            }
            return !0
        },
        deepClone: function(e) {
            if (null == e)
                return e;
            if (Array.isArray(e))
                for (var t = [], r = 0; r < e.length; r++)
                    t[r] = this.deepClone(e[r]);
            else {
                if ("object" !== _typeof(e))
                    return e;
                t = {};
                var n, o = _createForOfIteratorHelper(keys(e));
                try {
                    for (o.s(); !(n = o.n()).done; ) {
                        var a = n.value;
                        e[a] && (t[a] = this.deepClone(e[a]))
                    }
                } catch (e) {
                    o.e(e)
                } finally {
                    o.f()
                }
            }
            return t
        },
        encryptXOR: function(e) {
            if (!("string" == typeof e && 0 < e.length))
                return "";
            try {
                for (var t = encodeURIComponent(e), r = [], n = 0; n < t.length; n++)
                    "%" === t[n] ? (r.push(parseInt(t.substring(n + 1, n + 3), 16)),
                    n += 2) : r.push(t.charCodeAt(n));
                var o = [68, 65, 84, 65, 86, 73, 83, 79, 82]
                  , a = map$3(r).call(r, function(e, t) {
                    return e ^ o[t % o.length]
                })
                  , i = (a.unshift(0),
                "");
                return a.forEach(function(e) {
                    i += String.fromCharCode(e)
                }),
                this.urlSafeBase64Convert(btoa(i))
            } catch (e) {
                return ""
            }
        },
        urlSafeBase64Convert: function(e) {
            return e.replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "")
        },
        getEIPFromStorage: function(e, t) {
            e = localStorage.getItem(e);
            if (e) {
                e = filter(e = e.split(",")).call(e, function(e) {
                    return "" !== trim(e).call(e)
                });
                if (0 < e.length)
                    return e
            }
            if ("string" != typeof t)
                return [];
            try {
                var r = JSON.parse(t);
                return Array.isArray(r) ? r : []
            } catch (e) {
                return []
            }
        },
        getRaphaelEIP: function() {
            return tool.getEIPFromStorage(LOCAL_STORAGE_ITEM.DVRaphaelEIP, globalVariable.RAPHAEL_EIP)
        },
        getZhengdaoEIP: function() {
            return tool.getEIPFromStorage(LOCAL_STORAGE_ITEM.DVZhengdaoEIP, globalVariable.ZHENGDAO_EIP)
        },
        toSafeBase64: function(e) {
            return btoa(e).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "")
        },
        sleep: function(t) {
            return new promise(function(e) {
                return setTimeout$1(e, t)
            }
            )
        },
        getURLWithoutQueryString: function() {
            return window.location.protocol + "//" + window.location.host + window.location.pathname
        },
        cryptoEnable: function() {
            try {
                return !!(atob && btoa && Uint8Array && ArrayBuffer && TextDecoder && crypto && "function" == typeof crypto.getRandomValues && crypto.subtle && "function" == typeof crypto.subtle.generateKey && "function" == typeof crypto.subtle.exportKey && "function" == typeof crypto.subtle.encrypt && "function" == typeof crypto.subtle.importKey && "function" == typeof crypto.subtle.decrypt)
            } catch (e) {
                return !1
            }
        },
        decryptAES: function(c) {
            return _asyncToGenerator(regenerator.mark(function e() {
                var t, r, n, o, a, i, s, l;
                return regenerator.wrap(function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            if (tool.cryptoEnable()) {
                                e.next = 2;
                                break
                            }
                            throw 6;
                        case 2:
                            e.prev = 2,
                            t = "DATAVISORDEDGE",
                            n = atob(c),
                            r = new Uint8Array(new ArrayBuffer(n.length)),
                            n.split("").forEach(function(e, t) {
                                return r[t] = e.charCodeAt(0)
                            }),
                            n = [],
                            o = [],
                            a = [],
                            i = 0;
                        case 11:
                            if (!(i < r.length)) {
                                e.next = 19;
                                break
                            }
                            if (i < r.length - 32)
                                return a.push(r[i]),
                                e.abrupt("continue", 16);
                            e.next = 15;
                            break;
                        case 15:
                            (i % 2 ? o : n).push(r[i]);
                        case 16:
                            i++,
                            e.next = 11;
                            break;
                        case 19:
                            return e.next = 21,
                            crypto.subtle.importKey("raw", new Uint8Array(n), {
                                name: "AES-CBC"
                            }, !1, ["decrypt"]);
                        case 21:
                            return s = e.sent,
                            e.next = 24,
                            crypto.subtle.decrypt({
                                name: "AES-CBC",
                                iv: new Uint8Array(o)
                            }, s, new Uint8Array(a));
                        case 24:
                            if (s = e.sent,
                            l = (new TextDecoder).decode(s),
                            startsWith(l).call(l, t) && endsWith(l).call(l, t))
                                return e.abrupt("return", slice$1(l).call(l, t.length, l.length - t.length));
                            e.next = 30;
                            break;
                        case 30:
                            throw new Error("Failed to decrypt");
                        case 31:
                            e.next = 36;
                            break;
                        case 33:
                            throw e.prev = 33,
                            e.t0 = e.catch(2),
                            8;
                        case 36:
                        case "end":
                            return e.stop()
                        }
                }, e, null, [[2, 33]])
            }))()
        },
        encryptAES: function(p) {
            return _asyncToGenerator(regenerator.mark(function e() {
                var t, r, n, o, a, i, s, l, c, u;
                return regenerator.wrap(function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            if (tool.cryptoEnable()) {
                                e.next = 2;
                                break
                            }
                            throw 6;
                        case 2:
                            return e.prev = 2,
                            t = "DATAVISORDEDGE",
                            e.next = 6,
                            crypto.subtle.generateKey({
                                name: "AES-CBC",
                                length: 128
                            }, !0, ["encrypt", "decrypt"]);
                        case 6:
                            return r = e.sent,
                            e.next = 9,
                            crypto.subtle.exportKey("raw", r);
                        case 9:
                            if (n = e.sent,
                            16 != (o = crypto.getRandomValues(new Uint8Array(16))).byteLength || 16 != n.byteLength)
                                throw new Error("Invalid length");
                            e.next = 13;
                            break;
                        case 13:
                            return e.next = 15,
                            crypto.subtle.encrypt({
                                name: "AES-CBC",
                                iv: o
                            }, r, (new TextEncoder).encode(t + p + t));
                        case 15:
                            for (a = e.sent,
                            i = "",
                            s = new Uint8Array(a),
                            l = 0; l < s.length; l++)
                                i += String.fromCharCode(s[l]);
                            for (c = new Uint8Array(n),
                            u = 0; u < 32; u++)
                                i += u % 2 ? String.fromCharCode(o[Math.floor(u / 2)]) : String.fromCharCode(c[u / 2]);
                            return e.abrupt("return", btoa(i));
                        case 24:
                            throw e.prev = 24,
                            e.t0 = e.catch(2),
                            8;
                        case 27:
                        case "end":
                            return e.stop()
                        }
                }, e, null, [[2, 24]])
            }))()
        }
    }
      , $$i = _export
      , toAbsoluteIndex$1 = toAbsoluteIndex$4
      , toInteger$1 = toInteger$5
      , toLength$4 = toLength$d
      , toObject$5 = toObject$d
      , arraySpeciesCreate = arraySpeciesCreate$3
      , createProperty$1 = createProperty$5
      , arrayMethodHasSpeciesSupport = arrayMethodHasSpeciesSupport$5
      , HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport("splice")
      , max = Math.max
      , min = Math.min
      , MAX_SAFE_INTEGER = 9007199254740991
      , MAXIMUM_ALLOWED_LENGTH_EXCEEDED = "Maximum allowed length exceeded"
      , entryVirtual$7 = ($$i({
        target: "Array",
        proto: !0,
        forced: !HAS_SPECIES_SUPPORT
    }, {
        splice: function(e, t) {
            var r, n, o, a, i, s, l = toObject$5(this), c = toLength$4(l.length), u = toAbsoluteIndex$1(e, c), e = arguments.length;
            if (0 === e ? r = n = 0 : n = 1 === e ? (r = 0,
            c - u) : (r = e - 2,
            min(max(toInteger$1(t), 0), c - u)),
            MAX_SAFE_INTEGER < c + r - n)
                throw TypeError(MAXIMUM_ALLOWED_LENGTH_EXCEEDED);
            for (o = arraySpeciesCreate(l, n),
            a = 0; a < n; a++)
                (i = u + a)in l && createProperty$1(o, a, l[i]);
            if (r < (o.length = n)) {
                for (a = u; a < c - n; a++)
                    s = a + r,
                    (i = a + n)in l ? l[s] = l[i] : delete l[s];
                for (a = c; c - n + r < a; a--)
                    delete l[a - 1]
            } else if (n < r)
                for (a = c - n; u < a; a--)
                    s = a + r - 1,
                    (i = a + n - 1)in l ? l[s] = l[i] : delete l[s];
            for (a = 0; a < r; a++)
                l[a + u] = arguments[a + 2];
            return l.length = c - n + r,
            o
        }
    }),
    entryVirtual$h)
      , splice$3 = entryVirtual$7("Array").splice
      , splice$2 = splice$3
      , ArrayPrototype$6 = Array.prototype
      , splice_1 = function(e) {
        var t = e.splice;
        return e === ArrayPrototype$6 || e instanceof Array && t === ArrayPrototype$6.splice ? splice$2 : t
    }
      , parent$l = splice_1
      , splice$1 = parent$l
      , splice = splice$1
      , $$h = _export
      , maxSafeInteger$2 = ($$h({
        target: "Number",
        stat: !0
    }, {
        MAX_SAFE_INTEGER: 9007199254740991
    }),
    9007199254740991)
      , parent$k = maxSafeInteger$2
      , maxSafeInteger$1 = parent$k
      , maxSafeInteger = maxSafeInteger$1
      , store$1 = {}
      , AsyncFunctionQueue = function() {
        function e() {
            _classCallCheck(this, e),
            this.queue = [],
            this.isRunning = !1
        }
        var t, r;
        return _createClass(e, [{
            key: "enqueue",
            value: (r = _asyncToGenerator(regenerator.mark(function e(r) {
                var t, n, o, a = this, i = arguments;
                return regenerator.wrap(function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            for (t = i.length,
                            n = new Array(1 < t ? t - 1 : 0),
                            o = 1; o < t; o++)
                                n[o - 1] = i[o];
                            return e.abrupt("return", new promise(function(e, t) {
                                a.queue.push({
                                    func: r,
                                    args: n,
                                    resolve: e,
                                    reject: t
                                }),
                                a.dequeue()
                            }
                            ));
                        case 2:
                        case "end":
                            return e.stop()
                        }
                }, e)
            })),
            function(e) {
                return r.apply(this, arguments)
            }
            )
        }, {
            key: "dequeue",
            value: (t = _asyncToGenerator(regenerator.mark(function e() {
                var t, r, n, o;
                return regenerator.wrap(function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            if (this.isRunning || 0 === this.queue.length)
                                return e.abrupt("return");
                            e.next = 2;
                            break;
                        case 2:
                            return n = this.queue.shift(),
                            o = n.func,
                            t = n.args,
                            r = n.resolve,
                            n = n.reject,
                            this.isRunning = !0,
                            e.prev = 4,
                            e.next = 7,
                            o.apply(void 0, _toConsumableArray(t));
                        case 7:
                            o = e.sent,
                            r(o),
                            e.next = 14;
                            break;
                        case 11:
                            e.prev = 11,
                            e.t0 = e.catch(4),
                            n(e.t0);
                        case 14:
                            return e.prev = 14,
                            this.isRunning = !1,
                            this.dequeue(),
                            e.finish(14);
                        case 18:
                        case "end":
                            return e.stop()
                        }
                }, e, this, [[4, 11, 14, 18]])
            })),
            function() {
                return t.apply(this, arguments)
            }
            )
        }]),
        e
    }();
    function judgeDVMA() {
        var e = tool.getFromLocalStorage(LOCAL_STORAGE_ITEM.DVMA)
          , e = e && !isNaN(parseInt(e)) ? parseInt(e) : null
          , t = tool.now();
        return !e || e < t
    }
    var patchDataQueue = new AsyncFunctionQueue;
    function doPatchDataAfterConfig(e, t, r) {
        return _doPatchDataAfterConfig.apply(this, arguments)
    }
    function _doPatchDataAfterConfig() {
        return (_doPatchDataAfterConfig = _asyncToGenerator(regenerator.mark(function e(t, r, n) {
            var o, a;
            return regenerator.wrap(function(e) {
                for (; ; )
                    switch (e.prev = e.next) {
                    case 0:
                        return e.next = 2,
                        store$1.dataCollection.collectConfigPatchData();
                    case 2:
                        return a = e.sent,
                        (o = {}).app_access_key = r,
                        o.origin_token = n,
                        o.pre_token = t,
                        o.update_data = preHandleData(a),
                        e.next = 10,
                        store$1.dataPoster.sendPatchRequest(o);
                    case 10:
                        a = e.sent,
                        logger.log("doPatchDataAfterConfig", a);
                    case 12:
                    case "end":
                        return e.stop()
                    }
            }, e)
        }))).apply(this, arguments)
    }
    function patchDataAfterConfig() {
        var e, t, r = globalVariable.tempDVPreTokens;
        r.length <= 1 || (e = r[1],
        t = globalVariable.ACK,
        r = r[0],
        patchDataQueue.enqueue(doPatchDataAfterConfig, e, t, r))
    }
    function patchDataToServer(e, t, r, n, o) {
        return _patchDataToServer.apply(this, arguments)
    }
    function _patchDataToServer() {
        return (_patchDataToServer = _asyncToGenerator(regenerator.mark(function e(t, r, n, o, a) {
            var i, s, l, c, u;
            return regenerator.wrap(function(e) {
                for (; ; )
                    switch (e.prev = e.next) {
                    case 0:
                        return e.next = 2,
                        store$1.dataCollection.collectPatchData();
                    case 2:
                        if (i = e.sent,
                        l = tool.getFromLocalStorage(LOCAL_STORAGE_ITEM.DVLastUpdateData),
                        u = null,
                        l)
                            try {
                                s = function(e, t) {
                                    return "Infinity" === t ? 1 / 0 : "-Infinity" === t ? -1 / 0 : t
                                }
                                ,
                                u = JSON.parse(l, s)
                            } catch (e) {}
                        if (l = !tool.compareTwoObjs(i, u),
                        (u = {}).app_access_key = o,
                        u.origin_token = a,
                        u.pre_token = n,
                        1 != r && l ? (u.update_data = preHandleData(i),
                        t && (u.user_session_id = t)) : t ? u.user_session_id = t : u = null,
                        c = function(e, t) {
                            return t === 1 / 0 ? "Infinity" : t === -1 / 0 ? "-Infinity" : t
                        }
                        ,
                        null != u)
                            return e.next = 16,
                            store$1.dataPoster.sendPatchRequest(u);
                        e.next = 20;
                        break;
                    case 16:
                        if (u = e.sent,
                        (1 == r || u) && l)
                            try {
                                tool.setLocalStorage(LOCAL_STORAGE_ITEM.DVLastUpdateData, stringify(i, c))
                            } catch (e) {}
                        e.next = 21;
                        break;
                    case 20:
                        if (l)
                            try {
                                tool.setLocalStorage(LOCAL_STORAGE_ITEM.DVLastUpdateData, stringify(i, c))
                            } catch (e) {}
                    case 21:
                    case "end":
                        return e.stop()
                    }
            }, e)
        }))).apply(this, arguments)
    }
    function retTokenToUser(e) {
        try {
            var t = judgeTTL()
              , r = globalVariable.tempDVPreTokens;
            if (t || r.length <= 1 || globalVariable.tempDVPreTokensIndex >= r.length || globalVariable.tempDVPreTokensIndex < 1)
                return globalVariable.strTokenReturned = "";
            var n = globalVariable.tempDVPreTokensIndex
              , o = globalVariable.tempDVPreTokens[n]
              , a = globalVariable.ACK
              , i = globalVariable.tempDVPreTokens[0];
            return patchDataQueue.enqueue(patchDataToServer, e, n, o, a, i),
            globalVariable.strTokenReturned = r[globalVariable.tempDVPreTokensIndex],
            globalVariable.tempDVPreTokensIndex++,
            tool.setLocalStorage(LOCAL_STORAGE_ITEM.DVPreTokensIndex, "".concat(globalVariable.tempDVPreTokensIndex)),
            globalVariable.strTokenReturned
        } catch (e) {
            return logger.log("Error getting inner DVToken:", e),
            ""
        }
    }
    function judgeTTL() {
        try {
            var e = tool.now()
              , t = tool.getFromLocalStorage(LOCAL_STORAGE_ITEM.DVTokenExpiration)
              , r = parseInt(t);
            return !(!t || isNaN(r)) && r < e
        } catch (e) {
            return logger.log("Error judging TTL:", e),
            !1
        }
    }
    function runCallback(e, t, r, n) {
        _runCallback.apply(this, arguments)
    }
    function _runCallback() {
        return (_runCallback = _asyncToGenerator(regenerator.mark(function e(t, r, n, o) {
            var a;
            return regenerator.wrap(function(e) {
                for (; ; )
                    switch (e.prev = e.next) {
                    case 0:
                        if (e.prev = 0,
                        a = retTokenToUser(o)) {
                            e.next = 12;
                            break
                        }
                        if (n)
                            return e.next = 6,
                            getLongToken();
                        e.next = 9;
                        break;
                    case 6:
                        a = e.sent,
                        e.next = 10;
                        break;
                    case 9:
                        a = globalVariable.DV_DEFAULT_TOKEN;
                    case 10:
                        e.next = 13;
                        break;
                    case 12:
                        setCurrentPageToken(a);
                    case 13:
                        t.safeSlowCb(a, r),
                        e.next = 20;
                        break;
                    case 16:
                        e.prev = 16,
                        e.t0 = e.catch(0),
                        logger.log("Error in getInnerTokenHandler:", e.t0),
                        t.safeSlowCb(globalVariable.DV_DEFAULT_TOKEN, r);
                    case 20:
                    case "end":
                        return e.stop()
                    }
            }, e, null, [[0, 16]])
        }))).apply(this, arguments)
    }
    function getDVToken() {
        try {
            return globalVariable.strTokenReturned ? globalVariable.strTokenReturned : retTokenToUser(null) || globalVariable.DV_DEFAULT_TOKEN
        } catch (e) {
            return globalVariable.DV_DEFAULT_TOKEN
        }
    }
    function hasCachedTokens(e) {
        try {
            var t = globalVariable.tempDVPreTokens;
            return Array.isArray(t) && 0 < t.length && globalVariable.tempDVPreTokensIndex + e < t.length
        } catch (e) {
            return void logger.log("Error checking token cache:", e)
        }
    }
    function getFormalToken() {
        try {
            var e = globalVariable.tempDVPreTokens;
            return Array.isArray(e) && 0 < e.length ? e[0] : msg.EMPTY
        } catch (e) {
            return logger.log("Error getting originToken:", e),
            msg.EMPTY
        }
    }
    function getLongTokenSync() {
        try {
            var e = getLongTokenCache();
            if (e)
                return e;
            store$1.dataCollection.collect();
            var t = {};
            t.v28 = 1;
            for (var r = 0, n = ["v1", "v2", "v3", "d15", "u1", "j1", "j2", "j3", "j5", "j6", "j7", "j10", "j11", "j12", "j15", "j16", "j17", "j34", "j35", "j39", "j42", "j43", "j46", "j49", "j53", "j55", "j61", "j62", "j64", "j71", "j76", "j78", "j80", "j85", "j88", "j89", "j92"]; r < n.length; r++) {
                var o = n[r];
                void 0 !== store$1.dataCollection.raphaelInfo[o] && (t[o] = tool.deepClone(store$1.dataCollection.raphaelInfo[o]))
            }
            t.v29 = tool.MD5(stringify(t));
            var a = stringify(preHandleData(t))
              , i = tool.encryptXOR(a);
            return i ? "LJ" + i : ""
        } catch (e) {
            return ""
        }
    }
    function getLongToken() {
        return _getLongToken.apply(this, arguments)
    }
    function _getLongToken() {
        return (_getLongToken = _asyncToGenerator(regenerator.mark(function e() {
            var t, r, n, o, a, i, s, l, c, u, p;
            return regenerator.wrap(function(e) {
                for (; ; )
                    switch (e.prev = e.next) {
                    case 0:
                        if (i = getLongTokenCache())
                            return e.abrupt("return", i);
                        e.next = 3;
                        break;
                    case 3:
                        if (store$1.dataCollection)
                            return e.next = 6,
                            store$1.dataCollection.collect();
                        e.next = 6;
                        break;
                    case 6:
                        for (t = {
                            v28: 1
                        },
                        r = 0,
                        n = ["v1", "v2", "v3", "d15", "u1", "j1", "j2", "j3", "j5", "j6", "j7", "j10", "j11", "j12", "j15", "j16", "j17", "j34", "j35", "j39", "j42", "j43", "j46", "j49", "j53", "j55", "j61", "j62", "j64", "j71", "j76", "j78", "j80", "j85", "j88", "j89", "j92"]; r < n.length; r++)
                            o = n[r],
                            void 0 !== store$1.dataCollection.raphaelInfo[o] && (t[o] = tool.deepClone(store$1.dataCollection.raphaelInfo[o]));
                        return t.v29 = tool.MD5(stringify(t)),
                        a = stringify(preHandleData(t)),
                        e.prev = 12,
                        e.next = 15,
                        tool.encryptAES(a);
                    case 15:
                        for (i = e.sent,
                        s = atob(i),
                        l = [1],
                        c = 0; c < s.length; c++)
                            l.push(s.charCodeAt(c));
                        return u = "",
                        l.forEach(function(e) {
                            u += String.fromCharCode(e)
                        }),
                        p = tool.urlSafeBase64Convert(btoa(u)),
                        globalVariable.tempDVLongToken = "LJ" + p,
                        globalVariable.tempDVLongTokenExpire = tool.now() + 864e5,
                        e.abrupt("return", globalVariable.tempDVLongToken);
                    case 27:
                        return e.prev = 27,
                        e.t0 = e.catch(12),
                        console.error("Error get long long token:", e.t0),
                        e.abrupt("return", _generateBaseDVLongToken(a));
                    case 31:
                    case "end":
                        return e.stop()
                    }
            }, e, null, [[12, 27]])
        }))).apply(this, arguments)
    }
    function getLongTokenCache() {
        try {
            var e = globalVariable.tempDVLongToken
              , t = globalVariable.tempDVLongTokenExpire;
            return !isNaN(t) && tool.now() <= t && e ? e : ""
        } catch (e) {
            return console.error("Error getting long token cache:", e),
            ""
        }
    }
    function _generateBaseDVLongToken(e) {
        e = tool.encryptXOR(e);
        return e ? (globalVariable.tempDVLongToken = "LJ" + e,
        globalVariable.tempDVLongTokenExpire = tool.now() + 864e5,
        globalVariable.tempDVLongToken) : ""
    }
    function preHandleData(t) {
        var r = {};
        return keys(t).forEach(function(e) {
            switch (_typeof(t[e])) {
            case "boolean":
                r[e] = t[e] ? "true" : "false";
                break;
            case "object":
                r[e] = stringify(t[e]);
                break;
            case "number":
                r[e] = t[e] + "";
                break;
            case "string":
                "" !== t[e] && (r[e] = t[e]);
                break;
            case "undefined":
                break;
            default:
                r[e] = t[e]
            }
        }),
        r
    }
    function getUUid() {
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(e) {
            var t = 16 * Math.random() | 0;
            return ("x" == e ? t : 3 & t | 8).toString(16)
        })
    }
    function getDVUUID() {
        var e = "";
        return globalVariable.tempDVUUID ? e = globalVariable.tempDVUUID : tool.getFromLocalStorage(LOCAL_STORAGE_ITEM.DVUUID) ? (e = tool.getFromLocalStorage(LOCAL_STORAGE_ITEM.DVUUID),
        globalVariable.tempDVUUID = e) : (e = getUUid(),
        globalVariable.tempDVUUID = e,
        tool.setLocalStorage(LOCAL_STORAGE_ITEM.DVUUID, e)),
        e || msg.EMPTY
    }
    function getDvidAsync(e) {
        return _getDvidAsync.apply(this, arguments)
    }
    function _getDvidAsync() {
        return (_getDvidAsync = _asyncToGenerator(regenerator.mark(function e(t) {
            var r, n;
            return regenerator.wrap(function(e) {
                for (; ; )
                    switch (e.prev = e.next) {
                    case 0:
                        if (globalVariable.tempDVID)
                            return e.abrupt("return", globalVariable.tempDVID);
                        e.next = 2;
                        break;
                    case 2:
                        return e.next = 4,
                        tool.getFromLocalStorageAndDecrypt(LOCAL_STORAGE_ITEM.DVID);
                    case 4:
                        if (r = e.sent)
                            return e.abrupt("return", r);
                        e.next = 7;
                        break;
                    case 7:
                        if (t) {
                            e.next = 9;
                            break
                        }
                        return e.abrupt("return", msg.EMPTY);
                    case 9:
                        if (store$1.iframe) {
                            e.next = 11;
                            break
                        }
                        return e.abrupt("return", msg.EMPTY);
                    case 11:
                        return e.next = 13,
                        store$1.iframe.get("dvid", !1, 3e3);
                    case 13:
                        if (n = e.sent) {
                            e.next = 16;
                            break
                        }
                        return e.abrupt("return", msg.EMPTY);
                    case 16:
                        if (isValidDvid(n))
                            return e.abrupt("return", n);
                        e.next = 18;
                        break;
                    case 18:
                        return e.prev = 18,
                        e.next = 21,
                        tool.decryptAES(n);
                    case 21:
                        return e.abrupt("return", e.sent);
                    case 24:
                        return e.prev = 24,
                        e.t0 = e.catch(18),
                        e.abrupt("return", msg.EMPTY);
                    case 27:
                    case "end":
                        return e.stop()
                    }
            }, e, null, [[18, 24]])
        }))).apply(this, arguments)
    }
    function setDvidAsync(e) {
        _setDvidAsync.apply(this, arguments)
    }
    function _setDvidAsync() {
        return (_setDvidAsync = _asyncToGenerator(regenerator.mark(function e(t) {
            var r;
            return regenerator.wrap(function(e) {
                for (; ; )
                    switch (e.prev = e.next) {
                    case 0:
                        return e.next = 2,
                        tool.setLocalStorageAfterEncrypt(LOCAL_STORAGE_ITEM.DVID, t);
                    case 2:
                        r = e.sent,
                        store$1.iframe && store$1.iframe.set("dvid", r, !1);
                    case 4:
                    case "end":
                        return e.stop()
                    }
            }, e)
        }))).apply(this, arguments)
    }
    function setDecryptErrCode(e) {
        globalVariable.dvLastDecryptErrCode = e,
        tool.setLocalStorage(LOCAL_STORAGE_ITEM.DVDecryptErrCode, e + "")
    }
    function getDecryptErrCode() {
        var e;
        return globalVariable.dvLastDecryptErrCode && "number" == typeof globalVariable.dvLastDecryptErrCode ? globalVariable.dvLastDecryptErrCode : (e = parseInt(tool.getFromLocalStorage(LOCAL_STORAGE_ITEM.DVDecryptErrCode)),
        isNaN(e) ? 0 : e)
    }
    function getDVE1() {
        var e = tool.getFromLocalStorage(LOCAL_STORAGE_ITEM.DVE1);
        if (!e)
            return null;
        try {
            return JSON.parse(e)
        } catch (e) {
            return null
        }
    }
    function setDVE1(e) {
        try {
            tool.setLocalStorage(LOCAL_STORAGE_ITEM.DVE1, stringify(e))
        } catch (e) {}
    }
    function getElementType(e) {
        return e instanceof HTMLInputElement ? e.type : e instanceof HTMLButtonElement ? "button" : "A" === e.tagName ? "link" : void 0
    }
    function isDesiredElement(n, e) {
        return e.some(function(e) {
            var t = e.tagName
              , e = e.types
              , r = getElementType(n);
            return n.tagName === t && (!e || r && includes(e).call(e, r))
        })
    }
    function getMatchingAncestor(e, t, r) {
        for (var n = e.parentElement, o = 0; n && o < t; ) {
            if (isDesiredElement(n, r))
                return n;
            n = n.parentElement,
            o++
        }
        return null
    }
    function getElementInfo(e) {
        for (var t = e.getAttribute("id") || "", r = e.getAttribute("class") || "", n = e.getAttribute("href") || "", o = e.getAttribute("src") || "", a = e.getAttribute("role") || "", i = e.getAttribute("type") || "", s = {}, l = {}, c = 0, u = from(e.attributes); c < u.length; c++) {
            var p, d = u[c];
            startsWith(p = d.name).call(p, "data-") ? s[d.name] = d.value : startsWith(p = d.name).call(p, "aria-") && (l[d.name] = d.value)
        }
        return new ElementInfo(e.tagName,t,r,e.innerText,n,o,a,i,s,l)
    }
    var ElementInfo = function() {
        function u() {
            var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : ""
              , t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : ""
              , r = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : ""
              , n = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : ""
              , o = 4 < arguments.length && void 0 !== arguments[4] ? arguments[4] : ""
              , a = 5 < arguments.length && void 0 !== arguments[5] ? arguments[5] : ""
              , i = 6 < arguments.length && void 0 !== arguments[6] ? arguments[6] : ""
              , s = 7 < arguments.length && void 0 !== arguments[7] ? arguments[7] : ""
              , l = 8 < arguments.length && void 0 !== arguments[8] ? arguments[8] : {}
              , c = 9 < arguments.length && void 0 !== arguments[9] ? arguments[9] : {};
            _classCallCheck(this, u),
            this.tagName = e,
            this.id = t,
            this.class = r,
            this.innerText = n,
            this.href = o,
            this.src = a,
            this.role = i,
            this.type = s,
            this.dataAttributes = l,
            this.ariaAttributes = c
        }
        return _createClass(u, [{
            key: "toJSONString",
            value: function() {
                return stringify(this)
            }
        }]),
        u
    }()
      , previousPageTokens = []
      , previousPageTokensMaxStoreCount = 5
      , previousPageTokensInitFinished = !1;
    function initPreviousPageTokens() {
        _initPreviousPageTokens.apply(this, arguments)
    }
    function _initPreviousPageTokens() {
        return (_initPreviousPageTokens = _asyncToGenerator(regenerator.mark(function e() {
            var t, r, n, o, a;
            return regenerator.wrap(function(e) {
                for (; ; )
                    switch (e.prev = e.next) {
                    case 0:
                        if (e.prev = 0,
                        store$1.iframe) {
                            e.next = 3;
                            break
                        }
                        return e.abrupt("return", !1);
                    case 3:
                        return e.next = 5,
                        store$1.iframe.get("previousPageReturnedToken");
                    case 5:
                        if (t = e.sent) {
                            e.next = 8;
                            break
                        }
                        return e.abrupt("return", !1);
                    case 8:
                        e.prev = 8,
                        r = JSON.parse(t),
                        e.next = 15;
                        break;
                    case 12:
                        return e.prev = 12,
                        e.t0 = e.catch(8),
                        e.abrupt("return", !1);
                    case 15:
                        if (Array.isArray(r)) {
                            e.next = 17;
                            break
                        }
                        return e.abrupt("return", !1);
                    case 17:
                        n = 0;
                    case 18:
                        if (!(n < r.length)) {
                            e.next = 25;
                            break
                        }
                        if (o = r[n],
                        "object" !== _typeof(o) || "string" != typeof o.ack || "string" != typeof o.host || "string" != typeof o.uri || "string" != typeof o.token)
                            return e.abrupt("return", !1);
                        e.next = 22;
                        break;
                    case 22:
                        n++,
                        e.next = 18;
                        break;
                    case 25:
                        if (!(previousPageTokens.length <= 0)) {
                            e.next = 29;
                            break
                        }
                        previousPageTokens = r,
                        e.next = 42;
                        break;
                    case 29:
                        a = r.length - 1;
                    case 30:
                        if (!(0 <= a)) {
                            e.next = 41;
                            break
                        }
                        if (tokenBelongToSamePage(r[a], previousPageTokens[0]))
                            return e.abrupt("continue", 38);
                        e.next = 33;
                        break;
                    case 33:
                        if (!(previousPageTokens.length < previousPageTokensMaxStoreCount)) {
                            e.next = 37;
                            break
                        }
                        previousPageTokens.unshift(r[a]),
                        e.next = 38;
                        break;
                    case 37:
                        return e.abrupt("break", 41);
                    case 38:
                        a--,
                        e.next = 30;
                        break;
                    case 41:
                        store$1.iframe && store$1.iframe.set("previousPageReturnedToken", stringify(previousPageTokens));
                    case 42:
                        return e.abrupt("return", !0);
                    case 43:
                        return e.prev = 43,
                        previousPageTokensInitFinished = !0,
                        e.finish(43);
                    case 46:
                    case "end":
                        return e.stop()
                    }
            }, e, null, [[0, , 43, 46], [8, 12]])
        }))).apply(this, arguments)
    }
    function tokenBelongToSamePage(e, t) {
        return e.ack == t.ack && e.host == t.host && e.uri == t.uri
    }
    function tokenBelongToCurrentPage(e) {
        try {
            return e.ack == globalVariable.ACK && e.host == window.location.host && e.uri == window.location.pathname
        } catch (e) {
            return
        }
    }
    function setCurrentPageToken(e) {
        try {
            previousPageTokens && Array.isArray(previousPageTokens) || (previousPageTokens = []);
            var t = {
                ack: globalVariable.ACK,
                host: window.location.host,
                uri: window.location.pathname,
                token: e
            };
            !(previousPageTokens.length <= 0) && tokenBelongToCurrentPage(previousPageTokens[previousPageTokens.length - 1]) ? previousPageTokens[previousPageTokens.length - 1].token = t.token : previousPageTokens.push(t),
            previousPageTokens.length > previousPageTokensMaxStoreCount && splice(previousPageTokens).call(previousPageTokens, 0, previousPageTokens.length - previousPageTokensMaxStoreCount),
            tool.waituntil(function() {
                return previousPageTokensInitFinished
            }, 100, maxSafeInteger).then(function() {
                store$1.iframe && store$1.iframe.set("previousPageReturnedToken", stringify(previousPageTokens))
            })
        } catch (e) {}
    }
    function getLastPageToken() {
        if (!previousPageTokens || !Array.isArray(previousPageTokens) || previousPageTokens.length <= 0)
            return "";
        for (var e = previousPageTokens.length - 1; 0 <= e; e--) {
            var t = previousPageTokens[e];
            if (!tokenBelongToCurrentPage(t))
                return t.token || ""
        }
        return ""
    }
    var fails$8 = fails$o
      , arrayMethodIsStrict$3 = function(e, t) {
        var r = [][e];
        return !!r && fails$8(function() {
            r.call(null, t || function() {
                throw 1
            }
            , 1)
        })
    }
      , $$g = _export
      , $indexOf = arrayIncludes$1.indexOf
      , arrayMethodIsStrict$2 = arrayMethodIsStrict$3
      , nativeIndexOf = [].indexOf
      , NEGATIVE_ZERO = !!nativeIndexOf && 1 / [1].indexOf(1, -0) < 0
      , STRICT_METHOD$2 = arrayMethodIsStrict$2("indexOf")
      , entryVirtual$6 = ($$g({
        target: "Array",
        proto: !0,
        forced: NEGATIVE_ZERO || !STRICT_METHOD$2
    }, {
        indexOf: function(e) {
            return NEGATIVE_ZERO ? nativeIndexOf.apply(this, arguments) || 0 : $indexOf(this, e, 1 < arguments.length ? arguments[1] : void 0)
        }
    }),
    entryVirtual$h)
      , indexOf$3 = entryVirtual$6("Array").indexOf
      , indexOf$2 = indexOf$3
      , ArrayPrototype$5 = Array.prototype
      , indexOf_1 = function(e) {
        var t = e.indexOf;
        return e === ArrayPrototype$5 || e instanceof Array && t === ArrayPrototype$5.indexOf ? indexOf$2 : t
    }
      , parent$j = indexOf_1
      , indexOf$1 = parent$j
      , indexOf = indexOf$1
      , floor$2 = Math.floor
      , mergeSort = function(e, t) {
        var r = e.length
          , n = floor$2(r / 2);
        return r < 8 ? insertionSort(e, t) : merge(mergeSort(e.slice(0, n), t), mergeSort(e.slice(n), t), t)
    }
      , insertionSort = function(e, t) {
        for (var r, n, o = e.length, a = 1; a < o; ) {
            for (r = e[n = a]; n && 0 < t(e[n - 1], r); )
                e[n] = e[--n];
            n !== a++ && (e[n] = r)
        }
        return e
    }
      , merge = function(e, t, r) {
        for (var n = e.length, o = t.length, a = 0, i = 0, s = []; a < n || i < o; )
            a < n && i < o ? s.push(r(e[a], t[i]) <= 0 ? e[a++] : t[i++]) : s.push(a < n ? e[a++] : t[i++]);
        return s
    }
      , arraySort = mergeSort
      , userAgent$2 = engineUserAgent
      , firefox = userAgent$2.match(/firefox\/(\d+)/i)
      , engineFfVersion = !!firefox && +firefox[1]
      , UA = engineUserAgent
      , engineIsIeOrEdge = /MSIE|Trident/.test(UA)
      , userAgent$1 = engineUserAgent
      , webkit = userAgent$1.match(/AppleWebKit\/(\d+)\./)
      , engineWebkitVersion = !!webkit && +webkit[1]
      , $$f = _export
      , aFunction$3 = aFunction$a
      , toObject$4 = toObject$d
      , toLength$3 = toLength$d
      , toString$2 = toString$c
      , fails$7 = fails$o
      , internalSort = arraySort
      , arrayMethodIsStrict$1 = arrayMethodIsStrict$3
      , FF = engineFfVersion
      , IE_OR_EDGE = engineIsIeOrEdge
      , V8 = engineV8Version
      , WEBKIT = engineWebkitVersion
      , test = []
      , nativeSort = test.sort
      , FAILS_ON_UNDEFINED = fails$7(function() {
        test.sort(void 0)
    })
      , FAILS_ON_NULL = fails$7(function() {
        test.sort(null)
    })
      , STRICT_METHOD$1 = arrayMethodIsStrict$1("sort")
      , STABLE_SORT = !fails$7(function() {
        if (V8)
            return V8 < 70;
        if (!(FF && 3 < FF)) {
            if (IE_OR_EDGE)
                return !0;
            if (WEBKIT)
                return WEBKIT < 603;
            for (var e, t, r, n = "", o = 65; o < 76; o++) {
                switch (e = String.fromCharCode(o),
                o) {
                case 66:
                case 69:
                case 70:
                case 72:
                    t = 3;
                    break;
                case 68:
                case 71:
                    t = 4;
                    break;
                default:
                    t = 2
                }
                for (r = 0; r < 47; r++)
                    test.push({
                        k: e + r,
                        v: t
                    })
            }
            for (test.sort(function(e, t) {
                return t.v - e.v
            }),
            r = 0; r < test.length; r++)
                e = test[r].k.charAt(0),
                n.charAt(n.length - 1) !== e && (n += e);
            return "DGBEFHACIJK" !== n
        }
    })
      , FORCED$2 = FAILS_ON_UNDEFINED || !FAILS_ON_NULL || !STRICT_METHOD$1 || !STABLE_SORT
      , getSortCompare = function(r) {
        return function(e, t) {
            return void 0 === t ? -1 : void 0 === e ? 1 : void 0 !== r ? +r(e, t) || 0 : toString$2(e) > toString$2(t) ? 1 : -1
        }
    }
      , entryVirtual$5 = ($$f({
        target: "Array",
        proto: !0,
        forced: FORCED$2
    }, {
        sort: function(e) {
            void 0 !== e && aFunction$3(e);
            var t = toObject$4(this);
            if (STABLE_SORT)
                return void 0 === e ? nativeSort.call(t) : nativeSort.call(t, e);
            for (var r, n = [], o = toLength$3(t.length), a = 0; a < o; a++)
                a in t && n.push(t[a]);
            for (r = (n = internalSort(n, getSortCompare(e))).length,
            a = 0; a < r; )
                t[a] = n[a++];
            for (; a < o; )
                delete t[a++];
            return t
        }
    }),
    entryVirtual$h)
      , sort$3 = entryVirtual$5("Array").sort
      , sort$2 = sort$3
      , ArrayPrototype$4 = Array.prototype
      , sort_1 = function(e) {
        var t = e.sort;
        return e === ArrayPrototype$4 || e instanceof Array && t === ArrayPrototype$4.sort ? sort$2 : t
    }
      , parent$i = sort_1
      , sort$1 = parent$i
      , sort = sort$1
      , internalMetadata = {
        exports: {}
    }
      , fails$6 = fails$o
      , freezing = !fails$6(function() {
        return Object.isExtensible(Object.preventExtensions({}))
    })
      , $$e = _export
      , hiddenKeys = hiddenKeys$6
      , isObject$4 = isObject$i
      , has$1 = has$c
      , defineProperty$4 = objectDefineProperty.f
      , getOwnPropertyNamesModule$1 = objectGetOwnPropertyNames
      , getOwnPropertyNamesExternalModule = objectGetOwnPropertyNamesExternal
      , uid = uid$4
      , FREEZING = freezing
      , REQUIRED = !1
      , METADATA = uid("meta")
      , id = 0
      , isExtensible = Object.isExtensible || function() {
        return !0
    }
      , setMetadata = function(e) {
        defineProperty$4(e, METADATA, {
            value: {
                objectID: "O" + id++,
                weakData: {}
            }
        })
    }
      , fastKey$1 = function(e, t) {
        if (!isObject$4(e))
            return "symbol" == typeof e ? e : ("string" == typeof e ? "S" : "P") + e;
        if (!has$1(e, METADATA)) {
            if (!isExtensible(e))
                return "F";
            if (!t)
                return "E";
            setMetadata(e)
        }
        return e[METADATA].objectID
    }
      , getWeakData = function(e, t) {
        if (!has$1(e, METADATA)) {
            if (!isExtensible(e))
                return !0;
            if (!t)
                return !1;
            setMetadata(e)
        }
        return e[METADATA].weakData
    }
      , onFreeze = function(e) {
        return FREEZING && REQUIRED && isExtensible(e) && !has$1(e, METADATA) && setMetadata(e),
        e
    }
      , enable = function() {
        meta.enable = function() {}
        ,
        REQUIRED = !0;
        var o = getOwnPropertyNamesModule$1.f
          , a = [].splice
          , e = {};
        e[METADATA] = 1,
        o(e).length && (getOwnPropertyNamesModule$1.f = function(e) {
            for (var t = o(e), r = 0, n = t.length; r < n; r++)
                if (t[r] === METADATA) {
                    a.call(t, r, 1);
                    break
                }
            return t
        }
        ,
        $$e({
            target: "Object",
            stat: !0,
            forced: !0
        }, {
            getOwnPropertyNames: getOwnPropertyNamesExternalModule.f
        }))
    }
      , meta = internalMetadata.exports = {
        enable: enable,
        fastKey: fastKey$1,
        getWeakData: getWeakData,
        onFreeze: onFreeze
    }
      , $$d = (hiddenKeys[METADATA] = !0,
    _export)
      , global$2 = global$n
      , InternalMetadataModule = internalMetadata.exports
      , fails$5 = fails$o
      , createNonEnumerableProperty = createNonEnumerableProperty$a
      , iterate$1 = iterate$6
      , anInstance$3 = anInstance$5
      , isObject$3 = isObject$i
      , setToStringTag$2 = setToStringTag$8
      , defineProperty$3 = objectDefineProperty.f
      , forEach = arrayIteration.forEach
      , DESCRIPTORS$6 = descriptors
      , InternalStateModule$3 = internalState
      , setInternalState$3 = InternalStateModule$3.set
      , internalStateGetterFor$1 = InternalStateModule$3.getterFor
      , collection$2 = function(r, e, t) {
        var a, i, n = -1 !== r.indexOf("Map"), s = -1 !== r.indexOf("Weak"), o = n ? "set" : "add", l = global$2[r], c = l && l.prototype, u = {};
        return DESCRIPTORS$6 && "function" == typeof l && (s || c.forEach && !fails$5(function() {
            (new l).entries().next()
        })) ? (a = e(function(e, t) {
            setInternalState$3(anInstance$3(e, a, r), {
                type: r,
                collection: new l
            }),
            null != t && iterate$1(t, e[o], {
                that: e,
                AS_ENTRIES: n
            })
        }),
        i = internalStateGetterFor$1(r),
        forEach(["add", "clear", "delete", "forEach", "get", "has", "set", "keys", "values", "entries"], function(n) {
            var o = "add" == n || "set" == n;
            n in c && (!s || "clear" != n) && createNonEnumerableProperty(a.prototype, n, function(e, t) {
                var r = i(this).collection;
                if (!o && s && !isObject$3(e))
                    return "get" == n && void 0;
                r = r[n](0 === e ? 0 : e, t);
                return o ? this : r
            })
        }),
        s || defineProperty$3(a.prototype, "size", {
            configurable: !0,
            get: function() {
                return i(this).collection.size
            }
        })) : (a = t.getConstructor(e, r, n, o),
        InternalMetadataModule.enable()),
        setToStringTag$2(a, r, !1, !0),
        u[r] = a,
        $$d({
            global: !0,
            forced: !0
        }, u),
        s || t.setStrong(a, r, n),
        a
    }
      , defineProperty$2 = objectDefineProperty.f
      , create$7 = objectCreate
      , redefineAll$1 = redefineAll$3
      , bind$2 = functionBindContext
      , anInstance$2 = anInstance$5
      , iterate = iterate$6
      , defineIterator = defineIterator$3
      , setSpecies = setSpecies$2
      , DESCRIPTORS$5 = descriptors
      , fastKey = internalMetadata.exports.fastKey
      , InternalStateModule$2 = internalState
      , setInternalState$2 = InternalStateModule$2.set
      , internalStateGetterFor = InternalStateModule$2.getterFor
      , collectionStrong$2 = {
        getConstructor: function(e, r, n, o) {
            function a(e, t, r) {
                var n, o = l(e), a = i(e, t);
                return a ? a.value = r : (o.last = a = {
                    index: n = fastKey(t, !0),
                    key: t,
                    value: r,
                    previous: t = o.last,
                    next: void 0,
                    removed: !1
                },
                o.first || (o.first = a),
                t && (t.next = a),
                DESCRIPTORS$5 ? o.size++ : e.size++,
                "F" !== n && (o.index[n] = a)),
                e
            }
            function i(e, t) {
                var r, e = l(e), n = fastKey(t);
                if ("F" !== n)
                    return e.index[n];
                for (r = e.first; r; r = r.next)
                    if (r.key == t)
                        return r
            }
            var s = e(function(e, t) {
                anInstance$2(e, s, r),
                setInternalState$2(e, {
                    type: r,
                    index: create$7(null),
                    first: void 0,
                    last: void 0,
                    size: 0
                }),
                DESCRIPTORS$5 || (e.size = 0),
                null != t && iterate(t, e[o], {
                    that: e,
                    AS_ENTRIES: n
                })
            })
              , l = internalStateGetterFor(r);
            return redefineAll$1(s.prototype, {
                clear: function() {
                    for (var e = l(this), t = e.index, r = e.first; r; )
                        r.removed = !0,
                        r.previous && (r.previous = r.previous.next = void 0),
                        delete t[r.index],
                        r = r.next;
                    e.first = e.last = void 0,
                    DESCRIPTORS$5 ? e.size = 0 : this.size = 0
                },
                delete: function(e) {
                    var t, r, n = l(this), e = i(this, e);
                    return e && (t = e.next,
                    r = e.previous,
                    delete n.index[e.index],
                    e.removed = !0,
                    r && (r.next = t),
                    t && (t.previous = r),
                    n.first == e && (n.first = t),
                    n.last == e && (n.last = r),
                    DESCRIPTORS$5 ? n.size-- : this.size--),
                    !!e
                },
                forEach: function(e) {
                    for (var t, r = l(this), n = bind$2(e, 1 < arguments.length ? arguments[1] : void 0, 3); t = t ? t.next : r.first; )
                        for (n(t.value, t.key, this); t && t.removed; )
                            t = t.previous
                },
                has: function(e) {
                    return !!i(this, e)
                }
            }),
            redefineAll$1(s.prototype, n ? {
                get: function(e) {
                    e = i(this, e);
                    return e && e.value
                },
                set: function(e, t) {
                    return a(this, 0 === e ? 0 : e, t)
                }
            } : {
                add: function(e) {
                    return a(this, e = 0 === e ? 0 : e, e)
                }
            }),
            DESCRIPTORS$5 && defineProperty$2(s.prototype, "size", {
                get: function() {
                    return l(this).size
                }
            }),
            s
        },
        setStrong: function(e, t, r) {
            var n = t + " Iterator"
              , o = internalStateGetterFor(t)
              , a = internalStateGetterFor(n);
            defineIterator(e, t, function(e, t) {
                setInternalState$2(this, {
                    type: n,
                    target: e,
                    state: o(e),
                    kind: t,
                    last: void 0
                })
            }, function() {
                for (var e = a(this), t = e.kind, r = e.last; r && r.removed; )
                    r = r.previous;
                return e.target && (e.last = r = r ? r.next : e.state.first) ? "keys" == t ? {
                    value: r.key,
                    done: !1
                } : "values" == t ? {
                    value: r.value,
                    done: !1
                } : {
                    value: [r.key, r.value],
                    done: !1
                } : {
                    value: e.target = void 0,
                    done: !0
                }
            }, r ? "entries" : "values", !r, !0),
            setSpecies(t)
        }
    }
      , collection$1 = collection$2
      , collectionStrong$1 = collectionStrong$2
      , path$a = (collection$1("Set", function(e) {
        return function() {
            return e(this, arguments.length ? arguments[0] : void 0)
        }
    }, collectionStrong$1),
    path$m)
      , set$2 = path$a.Set
      , parent$h = set$2
      , set$1 = parent$h
      , set = set$1
      , toObject$3 = toObject$d
      , toAbsoluteIndex = toAbsoluteIndex$4
      , toLength$2 = toLength$d
      , arrayFill = function(e) {
        for (var t = toObject$3(this), r = toLength$2(t.length), n = arguments.length, o = toAbsoluteIndex(1 < n ? arguments[1] : void 0, r), n = 2 < n ? arguments[2] : void 0, a = void 0 === n ? r : toAbsoluteIndex(n, r); o < a; )
            t[o++] = e;
        return t
    }
      , $$c = _export
      , fill$4 = arrayFill
      , entryVirtual$4 = ($$c({
        target: "Array",
        proto: !0
    }, {
        fill: fill$4
    }),
    entryVirtual$h)
      , fill$3 = entryVirtual$4("Array").fill
      , fill$2 = fill$3
      , ArrayPrototype$3 = Array.prototype
      , fill_1 = function(e) {
        var t = e.fill;
        return e === ArrayPrototype$3 || e instanceof Array && t === ArrayPrototype$3.fill ? fill$2 : t
    }
      , parent$g = fill_1
      , fill$1 = parent$g
      , fill = fill$1
      , aFunction$2 = aFunction$a
      , toObject$2 = toObject$d
      , IndexedObject$1 = indexedObject
      , toLength$1 = toLength$d
      , createMethod$1 = function(c) {
        return function(e, t, r, n) {
            aFunction$2(t);
            var o = toObject$2(e)
              , a = IndexedObject$1(o)
              , i = toLength$1(o.length)
              , s = c ? i - 1 : 0
              , l = c ? -1 : 1;
            if (r < 2)
                for (; ; ) {
                    if (s in a) {
                        n = a[s],
                        s += l;
                        break
                    }
                    if (s += l,
                    c ? s < 0 : i <= s)
                        throw TypeError("Reduce of empty array with no initial value")
                }
            for (; c ? 0 <= s : s < i; s += l)
                s in a && (n = t(n, a[s], s, o));
            return n
        }
    }
      , arrayReduce = {
        left: createMethod$1(!1),
        right: createMethod$1(!0)
    }
      , $$b = _export
      , $reduce = arrayReduce.left
      , arrayMethodIsStrict = arrayMethodIsStrict$3
      , CHROME_VERSION = engineV8Version
      , IS_NODE = engineIsNode
      , STRICT_METHOD = arrayMethodIsStrict("reduce")
      , CHROME_BUG = !IS_NODE && 79 < CHROME_VERSION && CHROME_VERSION < 83
      , entryVirtual$3 = ($$b({
        target: "Array",
        proto: !0,
        forced: !STRICT_METHOD || CHROME_BUG
    }, {
        reduce: function(e) {
            return $reduce(this, e, arguments.length, 1 < arguments.length ? arguments[1] : void 0)
        }
    }),
    entryVirtual$h)
      , reduce$3 = entryVirtual$3("Array").reduce
      , reduce$2 = reduce$3
      , ArrayPrototype$2 = Array.prototype
      , reduce_1 = function(e) {
        var t = e.reduce;
        return e === ArrayPrototype$2 || e instanceof Array && t === ArrayPrototype$2.reduce ? reduce$2 : t
    }
      , parent$f = reduce_1
      , reduce$1 = parent$f
      , reduce = reduce$1
      , shortFontList = [".Al Bayan PUA", ".Al Nile PUA", ".SF NS Rounded", "ADOBE GARAMOND PRO", "AMGDT", "AR PL UKai HK", "AR PL UKai TW", "AR PL UKai TW MBE", "AR PL UMing CN", "AR PL UMing HK", "AR PL UMing TW", "AR PL UMing TW MBE", "ARCHER", "AVENIR", "Abadi MT Condensed Light", "Abyssinica SIL", "AcadEref", "Adobe Devanagari", "Adobe Fan Heiti Std B", "Adobe Garamond Pro", "Adobe Kaiti Std R", "Aharoni", "Aharoni Bold", "Aharoni CLM", "Al Bayan Bold", "Al Bayan Plain", "AlBattar", "AlManzomah", "Albertus Extra Bold", "Aldhabi", "Alexandra Script", "Algerian", "Amadeus", "Amazone BT", "AmdtSymbols", "AmerType Md BT", "American Typewriter", "Amiri Quran", "AnastasiaScript", "Andika", "Android Emoji", "Angsana New", "Angsana New Bold Italic", "Angsana New Italic", "AngsanaUPC", "AngsanaUPC Bold Italic", "AngsanaUPC Italic", "Ani", "Antique Olive", "Aparajita", "Aparajita Italic", "Apple LiGothic Medium", "Apple LiSung", "Apple SD Gothic Neo", "Arabic Typesetting", "Arial Baltic", "Arial Nova Bold", "Arial Nova Bold Italic", "Arial Nova Cond", "Arial Nova Cond Bold Italic", "Arial Nova Cond Light Italic", "Arimo", "Ariston", "Arno Pro Caption", "Arno Pro Display", "Arno Pro Light Display", "Arno Pro Smbd", "Arno Pro Subhead", "Arrus BT", "AvantGarde Bk BT", "AvantGarde Md BT", "Avenir", "Avenir Next Condensed Regular", "Avenir Next Demi Bold", "Avenir Next DemiBoldItalic", "Avenir Next Heavy", "BIZ UDGothic Bold", "BIZ UDMincho", "BPG Courier S GPL&GNU", "BPG Excelsior Condencerd GPL&GNU", "BankGothic Lt BT", "Baskerville Bold", "Bell Gothic Std Light", "Bell MT", "Berlin Sans FB", "BernhardMod BT", "BiauKai", "Bickham Script Pro Semibold", "Bickham Script Two", "Big Caslon", "Bitstream Vera Sans Mono", "Blackadder ITC", "Britannic Bold", "Browallia New Bold Italic", "Browallia New Italic", "BrowalliaUPC", "BrowalliaUPC Bold Italic", "Caladings CLM", "Californian FB", "Calligrapher", "Cambria", "Cambria Italic", "Cambria Math", "Candara Italic", "Cantarell Extra Bold", "Carlito", "Castellar", "Ceremonious Two", "Charter Black", "ChelthmITC Bk BT", "Chilanka", "Clarendon BT", "Clarendon Blk BT", "Clarendon Lt BT", "Cochin", "Comfortaa Light", "Comic Sans", "Cordia New Bold Italic", "Cordia New Italic", "CordiaUPC Bold Italic", "CordiaUPC Italic", "Cornerstone", "Corsiva Hebrew", "Curlz MT", "DIN Alternate", "David", "DecoType Naskh Regular", "Decor", "DejaVu Sans", "DengXian Bold", "DengXian Light", "DilleniaUPC Bold Italic", "Diwan Kufi", "Droid Arabic Naskh", "Droid Naskh Shift Alt", "Droid Sans Arabic", "Droid Sans Devanagari", "Droid Sans Georgian", "Droid Sans Japanese", "Droid Sans Tamil", "Drugulin CLM", "Ebrima", "Edwardian Script ITC", "Engravers MT", "Exotc350 Bd BT", "Ezra SIL SR", "FangSong", "Fixedsys", "FontAwesome", "Footlight MT Light", "Free Chancery", "FreeMono", "Futura Md BT", "GB18030 Bitmap", "GOTHAM BOLD", "Gayathri", "Gentium Basic", "GeoSlab 703 Lt BT", "Geometr231 Hv BT", "Geometr231 Lt BT", "Georgia Pro Cond", "Georgia Pro Cond Light Italic", "Georgia Pro Cond Semibold Italic", "Gill Sans SemiBold", "Gill Sans Ultra Bold Condensed", "Gill Sans UltraBold", "Granada", "Hannotate TC Regular", "HanziPen SC", "Hershey-Gothic-Italian", "High Tower Text", "Hor", "Ink Free", "Kaiti TC Regular", "Kozuka Gothic Pr6N B", "Leelawadee", "Leelawadee Bold", "Letter Gothic Std", "LingWai TC", "Linux Biolinum O", "Lithos Pro Regular", "Lohit Tamil", "MONO", "Malgun Gothic Semilight", "Marion", "Matura MT Script Capitals", "Montserrat Alternates", "Montserrat Black", "Mshtakan Bold", "Myriad Arabic", "NEVIS", "NanumGothicCoding", "NanumGothicExtraBold", "NanumSquare", "NanumSquareRound", "Narkisim", "New Peninim MT", "News GothicMT", "Nimbus Sans", "Nimbus Sans Narrow", "Noto Naskh Arabic", "Noto Sans Adlam", "Noto Sans Anatolian Hieroglyphs", "Noto Sans CJK HK Light", "Noto Sans CJK JP Medium", "Noto Sans CJK JP Thin", "Noto Sans CJK KR", "Noto Sans CJK KR Medium", "Noto Sans CJK SC", "Noto Sans CJK SC Light", "Noto Sans CJK SC Medium", "Noto Sans CJK SC Thin", "Noto Sans Devanagari", "Noto Sans Duployan", "Noto Sans Gujarati", "Noto Sans Mono CJK HK", "Noto Sans Old Italic", "Noto Serif Ahom", "Noto Serif CJK KR Medium", "Noto Serif CJK TC", "Noto Serif CJK TC Medium", "Noto Serif Khmer", "Ouverture script", "PakTypeNaqsh", "Playbill", "Quicksand Light", "Roboto Condensed", "STFangsong", "STIX Math", "STIX Two Text", "STIX Two Text Bold", "Segoe UI Bold Italic", "Serifa Th BT", "Sherwood", "Sitka Small Italic", "Source Code Pro Black", "Source Han Sans CN Bold", "Source Han Sans CN ExtraLight", "Source Han Serif TW", "Square721 BT", "Stam Ashkenaz CLM", "Standard Symbols PS", "Tlwg Mono", "URW Palladio L", "Ubuntu", "Ubuntu Condensed", "Ubuntu Thin", "Univers CE 55 Medium", "WP MultinationalA Roman", "WP MultinationalB Roman", "WenQuanYi Zen Hei", "Yu Mincho Demibold", "Zapf Dingbats ITC", "aakar", "msam10", "Droid Sans Mono Dotted for Powerline", "Lucida Bright Demibold", "News Gothic MT Bold"]
      , DataCollection = function() {
        function e() {
            _classCallCheck(this, e),
            this.raphaelInfo = {},
            this.collectPromise = null,
            this.raphaelInfo.j101 = getSDKOrigin()
        }
        var t;
        return _createClass(e, [{
            key: "setCustomFields",
            value: function(e, t) {
                var r = this;
                null === e && null === t || [e, t].forEach(function(e, t) {
                    "object" !== _typeof(e) || tool.isArray(e) ? r.raphaelInfo[t ? "e5" : "e1"] = msg.PARA_ERR : "{}" === stringify(e) || null === e ? r.raphaelInfo[t ? "e5" : "e1"] = msg.EMPTY : r.raphaelInfo[t ? "e5" : "e1"] = 2048 < stringify(e).length ? msg.VALUE_LONG : e
                })
            }
        }, {
            key: "addInfo",
            value: function(e, t) {
                this.raphaelInfo[e] = t
            }
        }, {
            key: "collectConfigPatchData",
            value: function() {
                return new promise(function(t) {
                    var r = {};
                    getCandidate().then(function(e) {
                        r.j92 = e.externalUdpIp,
                        t(r)
                    })
                }
                )
            }
        }, {
            key: "collectPatchData",
            value: function() {
                var e, t, a = {};
                for (e in RaphaelFieldMapForUpdate)
                    Object.prototype.hasOwnProperty.call(RaphaelFieldMapForUpdate, e) && (t = RaphaelFieldMapForUpdate[e],
                    a[e] = t());
                return new promise(function(o) {
                    promise.all([getBattery(), getAdBlockAsync(), isPrivateMode(), getCandidate()]).then(function(e) {
                        var e = _slicedToArray(e, 4)
                          , t = e[0]
                          , r = e[1]
                          , n = e[2]
                          , e = e[3];
                        a.j50 = t,
                        a.j54 = r,
                        a.j89 = n,
                        a.j92 = e.externalUdpIp,
                        o(a)
                    })
                }
                )
            }
        }, {
            key: "collect",
            value: function() {
                var u = this;
                if (this.collectPromise)
                    return this.collectPromise;
                globalVariable.initTokenTimeoutReason = initTokenProgress.syncCollecting;
                var e, t, r, p = tool.now(), n = {};
                for (e in RaphaelFieldMap)
                    Object.prototype.hasOwnProperty.call(RaphaelFieldMap, e) && (t = RaphaelFieldMap[e],
                    r = tool.now(),
                    this.raphaelInfo[e] = t(),
                    n[e] = tool.now() - r);
                return this.raphaelInfo.j81 = n,
                globalVariable.initTokenTimeoutReason = initTokenProgress.asyncCollecting,
                this.collectPromise = new promise(function(c) {
                    promise.all([getBattery(), getCandidate(), getAudioFP(), getQuotaOfStorage(), getFontFP(), getDvidAsync(!1), isPrivateMode(), getMediaDevices(), getAdBlockAsync()]).then(function(e) {
                        var e = _slicedToArray(e, 9)
                          , t = e[0]
                          , r = e[1]
                          , n = e[2]
                          , o = e[3]
                          , a = e[4]
                          , i = e[5]
                          , s = e[6]
                          , l = e[7]
                          , e = e[8];
                        u.raphaelInfo.j50 = t,
                        u.raphaelInfo.j54 = e,
                        u.raphaelInfo.j49 = n,
                        u.raphaelInfo.j77 = o,
                        u.raphaelInfo.v1 = i,
                        u.raphaelInfo.j89 = s,
                        u.raphaelInfo.j85 = a.hash,
                        u.raphaelInfo.j84 = a.count,
                        u.raphaelInfo.j81.j85 = a.timeSpent,
                        u.raphaelInfo.j81.j84 = a.timeSpent,
                        u.raphaelInfo.j70 = r.localDescription,
                        u.raphaelInfo.j71 = r.candidate,
                        u.raphaelInfo.j91 = r.internalIp,
                        u.raphaelInfo.j92 = r.externalUdpIp,
                        u.raphaelInfo.j93 = r.foundation,
                        u.raphaelInfo.j66 = tool.now() - p + "",
                        u.raphaelInfo.j100 = l,
                        globalVariable.initTokenTimeoutReason = initTokenProgress.collectionDone,
                        tool.waituntil(function() {
                            return !!u.raphaelInfo.j88
                        }, 10, 1e3).then(function() {
                            c()
                        }).catch(function() {
                            u.raphaelInfo.j88 || (u.raphaelInfo.j88 = msg.EMPTY),
                            c()
                        })
                    })
                }
                ),
                this.collectPromise
            }
        }, {
            key: "getRaphaelInfoForZhengdao",
            value: (t = _asyncToGenerator(regenerator.mark(function e() {
                var r;
                return regenerator.wrap(function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2,
                            this.collect();
                        case 2:
                            if (r = JSON.parse(stringify(this.raphaelInfo)),
                            this.raphaelInfo.v1 == msg.EMPTY)
                                return e.next = 6,
                                tool.waituntil(_asyncToGenerator(regenerator.mark(function e() {
                                    var t;
                                    return regenerator.wrap(function(e) {
                                        for (; ; )
                                            switch (e.prev = e.next) {
                                            case 0:
                                                return e.next = 2,
                                                getDvidAsync(!0);
                                            case 2:
                                                if ((t = e.sent) === msg.EMPTY || "" === globalVariable.strTokenReturned)
                                                    return e.abrupt("return", !1);
                                                e.next = 7;
                                                break;
                                            case 7:
                                                return r.v1 = t,
                                                r.v3 = globalVariable.strTokenReturned,
                                                e.abrupt("return", !0);
                                            case 10:
                                            case "end":
                                                return e.stop()
                                            }
                                    }, e)
                                })), 100, maxSafeInteger);
                            e.next = 8;
                            break;
                        case 6:
                            e.next = 10;
                            break;
                        case 8:
                            return e.next = 10,
                            tool.waituntil(_asyncToGenerator(regenerator.mark(function e() {
                                return regenerator.wrap(function(e) {
                                    for (; ; )
                                        switch (e.prev = e.next) {
                                        case 0:
                                            if ("" === globalVariable.strTokenReturned)
                                                return e.abrupt("return", !1);
                                            e.next = 4;
                                            break;
                                        case 4:
                                            return r.v3 = globalVariable.strTokenReturned,
                                            e.abrupt("return", !0);
                                        case 6:
                                        case "end":
                                            return e.stop()
                                        }
                                }, e)
                            })), 100, maxSafeInteger);
                        case 10:
                            return e.abrupt("return", r);
                        case 11:
                        case "end":
                            return e.stop()
                        }
                }, e, this)
            })),
            function() {
                return t.apply(this, arguments)
            }
            )
        }, {
            key: "getValueForField",
            value: function(o) {
                return "j50" == o ? getBattery() : "j49" == o ? getAudioFP() : "j77" == o ? getQuotaOfStorage() : "j54" == o ? getAdBlockAsync() : new promise(function(t, r) {
                    var n;
                    if ("j70" == o || "j71" == o)
                        return n = {
                            j70: "localDescription",
                            j71: "candidate"
                        },
                        void getCandidate().then(function(e) {
                            "object" != _typeof(e) ? r(e) : n[o]in e ? t(e[n[o]]) : r(msg.NOT_SUPPORT)
                        });
                    o in RaphaelFieldMap ? t(RaphaelFieldMap[o]()) : r(msg.NOT_SUPPORT)
                }
                )
            }
        }]),
        e
    }()
      , RaphaelFieldMapForUpdate = {
        j10: getLanguage,
        j11: getLanguages,
        j18: getCookies,
        j52: getDoNotTrack,
        j57: getHasLiedLanguages,
        j58: getHasLiedScreen,
        j59: getHasLiedOs,
        j60: function() {
            return getHasLiedBrowser() || getHasLiedOs()
        },
        j73: getScreenResolution,
        j76: getClientRects,
        j97: detectVm,
        j201: getWebDriver,
        j203: isConsoleOpened
    }
      , RaphaelFieldMap = {
        d15: function() {
            return "web"
        },
        u1: function() {
            return globalVariable.ACK
        },
        v2: getSDKVersion,
        v13: getDecryptErrCode,
        v3: getFormalToken,
        j1: getUAofBrowser,
        j2: getPlugins,
        j3: getLocationUrl,
        j4: getReferrer,
        j5: getScreenWidth,
        j6: getScreenHeight,
        j7: getColorDepth,
        j8: getStatusOfConnection,
        j10: getLanguage,
        j11: getLanguages,
        j12: getPlatform,
        j15: getTimezone,
        j16: getLocalTime,
        j17: getFlashInfo,
        j18: getCookies,
        j34: getCanvasFP,
        j35: getWebglFP,
        j36: hasIndexedDB,
        j37: hasSessionStorage,
        j38: hasLocalStorage,
        j39: getHardwareConcurrency,
        j40: getNavigatorCpuClass,
        j41: getDeviceMemory,
        j42: getPixelRatio,
        j43: getAvailableScreenResolution.bind(window, "height"),
        j44: getAvailableScreenResolution.bind(window, "width"),
        j45: getAvailableScreenResolution.bind(window, "top"),
        j46: getAvailableScreenResolution.bind(window, "left"),
        j51: getJavaEabled,
        j52: getDoNotTrack,
        j53: getTouchSupport,
        j55: judgeIE,
        j56: hasSwfObjectLoaded,
        j57: getHasLiedLanguages,
        j58: getHasLiedScreen,
        j59: getHasLiedOs,
        j60: function() {
            return getHasLiedBrowser() || getHasLiedOs()
        },
        j61: getWebglVendorAndRender,
        j62: getDVUUID,
        j63: getWholeConnection,
        j64: getOS,
        j69: tool.getFromLocalStorage.bind(window, LOCAL_STORAGE_ITEM.DVLastPutSpendTime),
        j73: getScreenResolution,
        j76: getClientRects,
        j78: getNavigatorSort,
        j79: getNavigatorMineType,
        j80: getSensors,
        j87: getMinCpuStep,
        j90: getPostCount,
        j95: calculateTrigonometry,
        j96: getScreenOrientation,
        j97: detectVm,
        j98: getVoiceList,
        j99: getVoiceSampleRate,
        j102: getFunctionHash,
        j103: codeIsOneLine,
        j201: getWebDriver,
        j203: isConsoleOpened
    }
      , mynavigator = navigator
      , mywindow = window;
    function getSDKVersion() {
        return globalVariable.VERSION
    }
    function getUAofBrowser() {
        try {
            if (navigator)
                return {
                    name: navigator.appName,
                    version: navigator.appVersion,
                    code: navigator.appCodeName,
                    Agent: navigator.userAgent
                };
            throw ""
        } catch (e) {}
        return msg.NOT_SUPPORT
    }
    function getPlugins() {
        try {
            if (!navigator)
                throw "";
            var e = navigator.plugins;
            if (e) {
                for (var t = [], r = 0, n = e.length; r < n; r++) {
                    var o = {
                        name: e[r].name,
                        filename: e[r].filename,
                        description: e[r].description,
                        version: e[r].version || ""
                    };
                    t.push(o)
                }
                return t
            }
        } catch (e) {}
        return msg.NOT_SUPPORT
    }
    function getLanguage() {
        try {
            if (navigator)
                return navigator.language || msg.NOT_SUPPORT;
            throw ""
        } catch (e) {}
        return msg.NOT_SUPPORT
    }
    function getLanguages() {
        try {
            if (navigator)
                return navigator.languages || msg.NOT_SUPPORT;
            throw ""
        } catch (e) {}
        return msg.NOT_SUPPORT
    }
    function getLocationUrl() {
        try {
            return window.location.href
        } catch (e) {
            return msg.NOT_SUPPORT
        }
    }
    function getReferrer() {
        return document.referrer
    }
    function getScreenWidth() {
        return window.screen.width
    }
    function getScreenHeight() {
        return window.screen.height
    }
    function getColorDepth() {
        return window.screen.colorDepth
    }
    function getStatusOfConnection() {
        try {
            if (navigator)
                return "onLine"in navigator ? navigator.onLine : msg.NOT_SUPPORT;
            throw ""
        } catch (e) {}
        return msg.NOT_SUPPORT
    }
    function getPlatform() {
        try {
            if (navigator)
                return navigator.platform ? navigator.platform.toLowerCase() : msg.NOT_SUPPORT;
            throw ""
        } catch (e) {}
        return msg.NOT_SUPPORT
    }
    function getTimezone() {
        return (new Date).getTimezoneOffset() / 60
    }
    function getLocalTime() {
        return tool.now()
    }
    function getFlashInfo() {
        var e, t, r = 0, n = 0;
        try {
            document.all ? (e = new ActiveXObject("ShockwaveFlash.ShockwaveFlash")) && (r = 1,
            n = e.GetVariable("$version")) : navigator.plugins && 0 < navigator.plugins.length && ((t = navigator.plugins["Shockwave Flash"]) && (r = 1,
            n = t.description))
        } catch (e) {}
        return {
            hasFlash: r,
            version: n
        }
    }
    function getCookies() {
        var e = !1;
        if (navigator.cookieEnabled)
            return !0;
        document.cookie = "dvTest=yes;";
        var t = document.cookie
          , t = (-1 < indexOf(t).call(t, "dvTest=yes") && (e = !0),
        new Date);
        return t.setTime(t.getTime() - 6e4),
        document.cookie = ";expires=" + t.toUTCString(),
        e
    }
    function hasIndexedDB() {
        try {
            return !!window.indexedDB
        } catch (e) {
            return msg.NOT_SUPPORT
        }
    }
    function hasSessionStorage() {
        try {
            return !!window.sessionStorage
        } catch (e) {
            return msg.NOT_SUPPORT
        }
    }
    function hasLocalStorage() {
        try {
            return !!window.localStorage
        } catch (e) {
            return msg.NOT_SUPPORT
        }
    }
    function getHardwareConcurrency() {
        try {
            if (navigator && navigator.hardwareConcurrency)
                return navigator.hardwareConcurrency;
            throw ""
        } catch (e) {}
        return msg.NOT_SUPPORT
    }
    function getNavigatorCpuClass() {
        try {
            if (navigator)
                return mynavigator.cpuClass || msg.NOT_SUPPORT;
            throw ""
        } catch (e) {}
        return msg.NOT_SUPPORT
    }
    function getDeviceMemory() {
        try {
            if (navigator)
                return mynavigator.deviceMemory || msg.NOT_SUPPORT;
            throw ""
        } catch (e) {}
        return msg.NOT_SUPPORT
    }
    function getPixelRatio() {
        return window.devicePixelRatio || msg.NOT_SUPPORT
    }
    function getAvailableScreenResolution(e) {
        var t, r = window.screen;
        switch (e) {
        case "height":
            t = 0 == window.screen.availHeight ? 0 : window.screen.availHeight || msg.NOT_SUPPORT;
            break;
        case "width":
            t = 0 == window.screen.availWidth ? 0 : window.screen.availWidth || msg.NOT_SUPPORT;
            break;
        case "top":
            t = 0 == r.availTop ? 0 : r.availTop || msg.NOT_SUPPORT;
            break;
        case "left":
            t = 0 == r.availLeft ? 0 : r.availLeft || msg.NOT_SUPPORT
        }
        return t
    }
    function getJavaEabled() {
        try {
            if (navigator && navigator.javaEnabled)
                return navigator.javaEnabled();
            throw ""
        } catch (e) {}
        return msg.NOT_SUPPORT
    }
    function getDoNotTrack() {
        try {
            if (navigator)
                return navigator.doNotTrack || mynavigator.msDoNotTrack || mywindow.doNotTrack || msg.NOT_SUPPORT;
            throw ""
        } catch (e) {}
        return msg.NOT_SUPPORT
    }
    function getTouchSupport() {
        var t, e = 0;
        void 0 !== navigator.maxTouchPoints ? e = navigator.maxTouchPoints : void 0 !== mynavigator.msMaxTouchPoints && (e = mynavigator.msMaxTouchPoints);
        try {
            document.createEvent("TouchEvent"),
            t = !0
        } catch (e) {
            t = !1
        }
        return [e, t, "ontouchstart"in window]
    }
    function judgeIE() {
        try {
            if (navigator)
                return "Microsoft Internet Explorer" === navigator.appName || !("Netscape" !== navigator.appName || !/Trident/.test(navigator.userAgent));
            throw ""
        } catch (e) {}
        return msg.NOT_SUPPORT
    }
    function hasSwfObjectLoaded() {
        return void 0 !== mywindow.swfobject
    }
    function getHasLiedLanguages() {
        try {
            if (navigator && void 0 !== navigator.languages)
                try {
                    if (navigator.languages[0].substr(0, 2) !== navigator.language.substr(0, 2))
                        return !0
                } catch (e) {
                    return !0
                }
        } catch (e) {}
        return !1
    }
    function getHasLiedScreen() {
        var e = [window.screen.availWidth, window.screen.availHeight]
          , t = (sort(e).call(e).reverse(),
        [window.screen.width, window.screen.height]);
        return sort(t).call(t).reverse(),
        t[0] < e[0] || t[1] < e[1]
    }
    function getHasLiedOs() {
        var e = navigator.userAgent ? navigator.userAgent.toLowerCase() : ""
          , t = mynavigator.oscpu
          , r = navigator.platform ? navigator.platform.toLowerCase() : ""
          , n = 0 <= indexOf(e).call(e, "windows phone") ? "Windows Phone" : 0 <= indexOf(e).call(e, "windows") || 0 <= indexOf(e).call(e, "win16") || 0 <= indexOf(e).call(e, "win32") || 0 <= indexOf(e).call(e, "win64") || 0 <= indexOf(e).call(e, "win95") || 0 <= indexOf(e).call(e, "win98") || 0 <= indexOf(e).call(e, "winnt") || 0 <= indexOf(e).call(e, "wow64") ? "Windows" : 0 <= indexOf(e).call(e, "android") ? "Android" : 0 <= indexOf(e).call(e, "linux") || 0 <= indexOf(e).call(e, "cros") || 0 <= indexOf(e).call(e, "x11") ? "Linux" : 0 <= indexOf(e).call(e, "iphone") || 0 <= indexOf(e).call(e, "ipad") || 0 <= indexOf(e).call(e, "ipod") || 0 <= indexOf(e).call(e, "crios") || 0 <= indexOf(e).call(e, "fxios") ? "iOS" : 0 <= indexOf(e).call(e, "macintosh") || 0 <= indexOf(e).call(e, "mac_powerpc)") ? "Mac" : "Other";
        if (("ontouchstart"in window || 0 < mynavigator.maxTouchPoints || 0 < mynavigator.msMaxTouchPoints) && "Windows" !== n && "Windows Phone" !== n && "Android" !== n && "iOS" !== n && "Other" !== n && -1 === indexOf(e).call(e, "cros"))
            return !0;
        if ("string" == typeof t) {
            if (t = t.toLowerCase(),
            0 <= indexOf(t).call(t, "win") && "Windows" !== n && "Windows Phone" !== n)
                return !0;
            if (0 <= indexOf(t).call(t, "linux") && "Linux" !== n && "Android" !== n)
                return !0;
            if (0 <= indexOf(t).call(t, "mac") && "Mac" !== n && "iOS" !== n)
                return !0;
            if ((-1 === indexOf(t).call(t, "win") && -1 === indexOf(t).call(t, "linux") && -1 === indexOf(t).call(t, "mac")) != ("Other" === n))
                return !0
        }
        return 0 <= indexOf(r).call(r, "win") && "Windows" !== n && "Windows Phone" !== n || ((0 <= indexOf(r).call(r, "linux") || 0 <= indexOf(r).call(r, "android") || 0 <= indexOf(r).call(r, "pike")) && "Linux" !== n && "Android" !== n || ((0 <= indexOf(r).call(r, "mac") || 0 <= indexOf(r).call(r, "ipad") || 0 <= indexOf(r).call(r, "ipod") || 0 <= indexOf(r).call(r, "iphone")) && "Mac" !== n && "iOS" !== n || !(0 <= indexOf(r).call(r, "arm") && "Windows Phone" === n) && (!(0 <= indexOf(r).call(r, "pike") && 0 <= indexOf(e).call(e, "opera mini")) && ((indexOf(r).call(r, "win") < 0 && indexOf(r).call(r, "linux") < 0 && indexOf(r).call(r, "mac") < 0 && indexOf(r).call(r, "iphone") < 0 && indexOf(r).call(r, "ipad") < 0 && indexOf(r).call(r, "ipod") < 0) != ("Other" === n) || void 0 === navigator.plugins && "Windows" !== n && "Windows Phone" !== n))))
    }
    function getHasLiedBrowser() {
        var e = navigator.userAgent.toLowerCase()
          , t = navigator.productSub;
        if (0 <= indexOf(e).call(e, "edge/") || 0 <= indexOf(e).call(e, "iemobile/"))
            return !1;
        if (0 <= indexOf(e).call(e, "opera mini"))
            return !1;
        if (("Chrome" === (e = 0 <= indexOf(e).call(e, "firefox/") ? "Firefox" : 0 <= indexOf(e).call(e, "opera/") || 0 <= indexOf(e).call(e, " opr/") ? "Opera" : 0 <= indexOf(e).call(e, "chrome/") ? "Chrome" : 0 <= indexOf(e).call(e, "safari/") ? 0 <= indexOf(e).call(e, "android 1.") || 0 <= indexOf(e).call(e, "android 2.") || 0 <= indexOf(e).call(e, "android 3.") || 0 <= indexOf(e).call(e, "android 4.") ? "AOSP" : "Safari" : 0 <= indexOf(e).call(e, "trident/") ? "Internet Explorer" : "Other") || "Safari" === e || "Opera" === e) && "20030107" !== t)
            return !0;
        var r, t = Function.toString().length;
        if (41 === t && "Safari" !== e && "Firefox" !== e && "Other" !== e)
            return !0;
        if (43 === t && "Internet Explorer" !== e && "Other" !== e)
            return !0;
        if (37 === t && "Chrome" !== e && "AOSP" !== e && "Opera" !== e && "Other" !== e)
            return !0;
        try {
            throw "a"
        } catch (e) {
            try {
                e.toSource(),
                r = !0
            } catch (e) {
                r = !1
            }
        }
        return r && "Firefox" !== e && "Other" !== e
    }
    function getWebglCanvas() {
        var e = document.createElement("canvas")
          , t = null;
        try {
            t = e.getContext("webgl") || e.getContext("experimental-webgl")
        } catch (e) {}
        return t = t || null
    }
    function loseWebglContext(e) {
        e = e.getExtension("WEBGL_lose_context");
        null != e && e.loseContext()
    }
    function getWebglVendorAndRender() {
        try {
            var e = getWebglCanvas()
              , t = e.getExtension("WEBGL_debug_renderer_info")
              , r = e.getParameter(t.UNMASKED_VENDOR_WEBGL) + "~" + e.getParameter(t.UNMASKED_RENDERER_WEBGL);
            return loseWebglContext(e),
            r
        } catch (e) {
            return msg.NOT_SUPPORT
        }
    }
    function getWholeConnection() {
        var e = {};
        try {
            return navigator && mynavigator.connection ? (e.downlink = mynavigator.connection.downlink,
            e.effectiveType = mynavigator.connection.effectiveType,
            e.rtt = mynavigator.connection.rtt,
            e.saveData = mynavigator.connection.saveData,
            e) : msg.NOT_SUPPORT
        } catch (e) {
            return msg.NOT_SUPPORT
        }
    }
    function getOS() {
        var e = navigator.userAgent.toLowerCase()
          , e = 0 <= indexOf(e).call(e, "windows phone") || 0 <= indexOf(e).call(e, "windows") || 0 <= indexOf(e).call(e, "win16") || 0 <= indexOf(e).call(e, "win32") || 0 <= indexOf(e).call(e, "win64") || 0 <= indexOf(e).call(e, "win95") || 0 <= indexOf(e).call(e, "win98") || 0 <= indexOf(e).call(e, "winnt") || 0 <= indexOf(e).call(e, "wow64") ? "Windows" : 0 <= indexOf(e).call(e, "android") ? "Android" : 0 <= indexOf(e).call(e, "linux") || 0 <= indexOf(e).call(e, "cros") || 0 <= indexOf(e).call(e, "x11") ? "Others" : 0 <= indexOf(e).call(e, "iphone") || 0 <= indexOf(e).call(e, "ipad") || 0 <= indexOf(e).call(e, "ipod") || 0 <= indexOf(e).call(e, "crios") || 0 <= indexOf(e).call(e, "fxios") ? "iOS" : 0 <= indexOf(e).call(e, "macintosh") || 0 <= indexOf(e).call(e, "mac_powerpc)") ? "Mac" : "Others";
        return e
    }
    function getScreenResolution() {
        var e = getScreenWidth()
          , t = getScreenHeight()
          , r = getPixelRatio()
          , r = r == msg.NOT_SUPPORT ? 1 : r;
        return Math.round(Math.max(e * r, t * r)) + "*" + Math.round(Math.min(e * r, t * r))
    }
    function getAdBlockAsync() {
        return new promise(function(r) {
            try {
                var n = document.createElement("div");
                n.setAttribute("class", "pub_300x250 pub_300x250m pub_728x90 text-ad textAd text_ad text_ads text-ads text-ad-links ad ad-banner ads ad-container adsbox bottom-ad"),
                n.setAttribute("style", "width: 1px !important; height: 1px !important; position: absolute !important; left: -10000px !important; top: -1000px !important;"),
                window.document.body.appendChild(n),
                setTimeout$1(function() {
                    var e, t = !1;
                    try {
                        null !== n.offsetParent && 0 != n.offsetHeight && 0 != n.offsetLeft && 0 != n.offsetTop && 0 != n.offsetWidth && 0 != n.clientHeight && 0 != n.clientWidth || (t = !0),
                        void 0 === window.getComputedStyle || !(e = window.getComputedStyle(n, null)) || "none" != e.getPropertyValue("display") && "hidden" != e.getPropertyValue("visibility") || (t = !0),
                        document.body.removeChild(n),
                        r(t)
                    } catch (e) {
                        r(t)
                    }
                }, 350)
            } catch (e) {
                r(!1)
            }
        }
        )
    }
    function getBattery() {
        return new promise(function(t) {
            try {
                navigator && mynavigator.getBattery ? (mynavigator.getBattery().then(function(e) {
                    return t({
                        charging: e.charging,
                        level: e.level,
                        chargingTime: e.chargingTime,
                        dischargingTime: e.dischargingTime
                    })
                }),
                setTimeout$1(function() {
                    t(msg.TIMEOUT)
                }, 100)) : t(msg.NOT_SUPPORT)
            } catch (e) {
                t(msg.NOT_SUPPORT)
            }
        }
        )
    }
    function getCandidate() {
        return new promise(function(t) {
            var e = window.RTCPeerConnection || mywindow.mozRTCPeerConnection || mywindow.webkitRTCPeerConnection
              , c = []
              , u = []
              , p = []
              , d = ""
              , f = "";
            function h(e) {
                t({
                    candidate: e || d || msg.EMPTY,
                    localDescription: e || f || msg.EMPTY,
                    foundation: sort(e = from(new set(p))).call(e, function(e, t) {
                        return t < e ? 1 : -1
                    }),
                    internalIp: sort(e = from(new set(c))).call(e, function(e, t) {
                        return t < e ? 1 : -1
                    }),
                    externalUdpIp: sort(e = from(new set(u))).call(e, function(e, t) {
                        return t < e ? 1 : -1
                    })
                })
            }
            e || h(msg.NOT_SUPPORT),
            setTimeout$1(function() {
                d && f ? h() : h(msg.TIMEOUT)
            }, 2e3);
            var r = ["stun:stun.l.google.com:19302", "stun:stun1.l.google.com:19302", "stun:stun2.l.google.com:19302", "stun:stun3.l.google.com:19302", "stun:stun4.l.google.com:19302", "stun:stun.antisip.com:3478", "stun:stun.1und1.de:3478", "stun:stun.12voip.com:3478", "stun:stun.1und1.de:3478", "stun:stun.aa.net.uk:3478", "stun:stun.acrobits.cz:3478", "stun:stun.actionvoip.com:3478", "stun:stun.bluesip.net:3478", "stun:stun.cablenet-as.net:3478", "stun:stun.callromania.ro:3478", "stun:stun.tel.lu:3478", "stun:stun.telbo.com:3478", "stun:stun.twt.it:3478", "stun:stun.uls.co.za:3478", "stun:stun.usfamily.net:3478"]
              , n = store$1.configManager.getInfoByName("iceServers");
            "object" === _typeof(n) && n && Array.isArray(n.urls) && 0 < n.urls.length && (r = n.urls);
            try {
                var g = new e({
                    iceServers: [{
                        urls: r
                    }]
                });
                g.createDataChannel(""),
                g.onicecandidate = function(e) {
                    if (!e.candidate)
                        return h();
                    try {
                        d = d || e.candidate.candidate,
                        f = f || g.localDescription;
                        var t, r, n, o, a = e.candidate, i = a.protocol, s = a.address, l = a.type;
                        if ("string" == typeof e.candidate.candidate && (t = e.candidate.candidate,
                        i = i || (includes(r = t.toLowerCase()).call(r, "udp") ? "udp" : "tcp"),
                        s || ((n = t.match("[a-zA-Z0-9-]+.local")) && n[0] ? s = n[0] : (o = t.match("(\\d+\\.){3}[\\d]+")) && o[0] && (s = o[0])),
                        l = l || (includes(t).call(t, "srflx") ? "srflx" : includes(t).call(t, "host") ? "host" : "unknown")),
                        new RegExp("(\\d+\\.){3}[\\d]+").test(s) && ("host" == l ? c.push(s) : "srflx" == l && "string" == typeof i && "udp" == i.toLowerCase() && "0.0.0.0" !== s && u.push(s)),
                        e.candidate.foundation && p.push(e.candidate.foundation),
                        0 < u.length)
                            return h()
                    } catch (e) {}
                }
                ,
                g.createOffer().then(function(e) {
                    g.setLocalDescription(e)
                })
            } catch (e) {
                h(msg.NOT_SUPPORT)
            }
        }
        )
    }
    function isCanvasSupported() {
        try {
            var e = document.createElement("canvas");
            return e.getContext && e.getContext("2d")
        } catch (e) {
            return
        }
    }
    function canvasFpKey() {
        var e = []
          , t = document.createElement("canvas")
          , r = (t.width = 2e3,
        t.height = 200,
        t.style.display = "inline",
        t.getContext("2d"));
        return r.rect(0, 0, 10, 10),
        r.rect(2, 2, 6, 6),
        e.push("canvas winding:" + (!1 === r.isPointInPath(5, 5, "evenodd") ? "yes" : "no")),
        r.textBaseline = "alphabetic",
        r.fillStyle = "#f60",
        r.fillRect(125, 1, 62, 20),
        r.fillStyle = "#069",
        r.font = "11pt no-real-font-123",
        r.fillText("Cwm fjordbank glyphs vext quiz, 😃", 2, 15),
        r.fillStyle = "rgba(102, 204, 0, 0.2)",
        r.font = "18pt Arial",
        r.fillText("Cwm fjordbank glyphs vext quiz, 😃", 4, 45),
        r.globalCompositeOperation = "multiply",
        r.fillStyle = "rgb(255,0,255)",
        r.beginPath(),
        r.arc(50, 50, 50, 0, 2 * Math.PI, !0),
        r.closePath(),
        fill(r).call(r),
        r.fillStyle = "rgb(0,255,255)",
        r.beginPath(),
        r.arc(100, 50, 50, 0, 2 * Math.PI, !0),
        r.closePath(),
        fill(r).call(r),
        r.fillStyle = "rgb(255,255,0)",
        r.beginPath(),
        r.arc(75, 100, 50, 0, 2 * Math.PI, !0),
        r.closePath(),
        fill(r).call(r),
        r.fillStyle = "rgb(255,0,255)",
        r.arc(75, 75, 75, 0, 2 * Math.PI, !0),
        r.arc(75, 75, 25, 0, 2 * Math.PI, !0),
        fill(r).call(r, "evenodd"),
        t.toDataURL && e.push("canvas fp:" + t.toDataURL()),
        e.join(",")
    }
    function WebglFpKey() {
        var a = getWebglCanvas();
        if (!a)
            return null;
        function e(e) {
            return a.clearColor(0, 0, 0, 1),
            a.enable(a.DEPTH_TEST),
            a.depthFunc(a.LEQUAL),
            a.clear(a.COLOR_BUFFER_BIT | a.DEPTH_BUFFER_BIT),
            "[" + e[0] + ", " + e[1] + "]"
        }
        var i = []
          , t = a.createBuffer()
          , r = (a.bindBuffer(a.ARRAY_BUFFER, t),
        new Float32Array([-.2, -.9, 0, .4, -.26, 0, 0, .732134444, 0]))
          , r = (a.bufferData(a.ARRAY_BUFFER, r, a.STATIC_DRAW),
        t.itemSize = 3,
        t.numItems = 3,
        a.createProgram())
          , n = a.createShader(a.VERTEX_SHADER)
          , o = (a.shaderSource(n, "attribute vec2 attrVertex;varying vec2 varyinTexCoordinate;uniform vec2 uniformOffset;void main(){varyinTexCoordinate=attrVertex+uniformOffset;gl_Position=vec4(attrVertex,0,1);}"),
        a.compileShader(n),
        a.createShader(a.FRAGMENT_SHADER));
        a.shaderSource(o, "precision mediump float;varying vec2 varyinTexCoordinate;void main() {gl_FragColor=vec4(varyinTexCoordinate,0,1);}"),
        a.compileShader(o),
        a.attachShader(r, n),
        a.attachShader(r, o),
        a.linkProgram(r),
        a.useProgram(r),
        r.vertexPosAttrib = a.getAttribLocation(r, "attrVertex"),
        r.offsetUniform = a.getUniformLocation(r, "uniformOffset"),
        a.enableVertexAttribArray(r.vertexPosArray),
        a.vertexAttribPointer(r.vertexPosAttrib, t.itemSize, a.FLOAT, !1, 0, 0),
        a.uniform2f(r.offsetUniform, 1, 1),
        a.drawArrays(a.TRIANGLE_STRIP, 0, t.numItems);
        try {
            var s = a.canvas;
            i.push(s.toDataURL())
        } catch (e) {}
        i.push("extensions:" + (a.getSupportedExtensions() || []).join(";")),
        i.push("webgl aliased line width range:" + e(a.getParameter(a.ALIASED_LINE_WIDTH_RANGE))),
        i.push("webgl aliased point size range:" + e(a.getParameter(a.ALIASED_POINT_SIZE_RANGE))),
        i.push("webgl alpha bits:" + a.getParameter(a.ALPHA_BITS)),
        i.push("webgl antialiasing:" + (a.getContextAttributes().antialias ? "yes" : "no")),
        i.push("webgl blue bits:" + a.getParameter(a.BLUE_BITS)),
        i.push("webgl depth bits:" + a.getParameter(a.DEPTH_BITS)),
        i.push("webgl green bits:" + a.getParameter(a.GREEN_BITS)),
        i.push("webgl max anisotropy:" + ((o = (n = a).getExtension("EXT_texture_filter_anisotropic") || n.getExtension("WEBKIT_EXT_texture_filter_anisotropic") || n.getExtension("MOZ_EXT_texture_filter_anisotropic")) ? 0 === (n = n.getParameter(o.MAX_TEXTURE_MAX_ANISOTROPY_EXT)) ? 2 : n : null)),
        i.push("webgl max combined texture image units:" + a.getParameter(a.MAX_COMBINED_TEXTURE_IMAGE_UNITS)),
        i.push("webgl max cube map texture size:" + a.getParameter(a.MAX_CUBE_MAP_TEXTURE_SIZE)),
        i.push("webgl max fragment uniform vectors:" + a.getParameter(a.MAX_FRAGMENT_UNIFORM_VECTORS)),
        i.push("webgl max render buffer size:" + a.getParameter(a.MAX_RENDERBUFFER_SIZE)),
        i.push("webgl max texture image units:" + a.getParameter(a.MAX_TEXTURE_IMAGE_UNITS)),
        i.push("webgl max texture size:" + a.getParameter(a.MAX_TEXTURE_SIZE)),
        i.push("webgl max varying vectors:" + a.getParameter(a.MAX_VARYING_VECTORS)),
        i.push("webgl max vertex attribs:" + a.getParameter(a.MAX_VERTEX_ATTRIBS)),
        i.push("webgl max vertex texture image units:" + a.getParameter(a.MAX_VERTEX_TEXTURE_IMAGE_UNITS)),
        i.push("webgl max vertex uniform vectors:" + a.getParameter(a.MAX_VERTEX_UNIFORM_VECTORS)),
        i.push("webgl max viewport dims:" + e(a.getParameter(a.MAX_VIEWPORT_DIMS))),
        i.push("webgl red bits:" + a.getParameter(a.RED_BITS)),
        i.push("webgl renderer:" + a.getParameter(a.RENDERER)),
        i.push("webgl shading language version:" + a.getParameter(a.SHADING_LANGUAGE_VERSION)),
        i.push("webgl stencil bits:" + a.getParameter(a.STENCIL_BITS)),
        i.push("webgl vendor:" + a.getParameter(a.VENDOR)),
        i.push("webgl version:" + a.getParameter(a.VERSION));
        try {
            var l = a.getExtension("WEBGL_debug_renderer_info");
            l && (i.push("webgl unmasked vendor:" + a.getParameter(l.UNMASKED_VENDOR_WEBGL)),
            i.push("webgl unmasked renderer:" + a.getParameter(l.UNMASKED_RENDERER_WEBGL)))
        } catch (e) {}
        return a.getShaderPrecisionFormat && ["FLOAT", "INT"].forEach(function(o) {
            ["VERTEX", "FRAGMENT"].forEach(function(n) {
                ["HIGH", "MEDIUM", "LOW"].forEach(function(r) {
                    ["precision", "rangeMin", "rangeMax"].forEach(function(e) {
                        var t = a.getShaderPrecisionFormat(a[n + "_SHADER"], a[r + "_" + o])[e]
                          , e = ("precision" !== e && (e = "precision " + e),
                        ["webgl ", n.toLowerCase(), " shader ", r.toLowerCase(), " ", o.toLowerCase(), " ", e, ":", t].join(""));
                        i.push(e)
                    })
                })
            })
        }),
        loseWebglContext(a),
        i
    }
    var isLowPerformanceDevice = !1;
    function getCanvasFP() {
        var e = tool.getFromLocalStorage(LOCAL_STORAGE_ITEM.DVJ34);
        if (e)
            return isLowPerformanceDevice = "2466.781" == tool.getFromLocalStorage(LOCAL_STORAGE_ITEM.DVLowPerformance),
            e;
        var e = tool.now()
          , t = function() {
            try {
                return isCanvasSupported() ? tool.MD5(canvasFpKey()) : msg.NOT_SUPPORT
            } catch (e) {
                return msg.EXCEPTION
            }
        }()
          , e = tool.now() - e;
        return isLowPerformanceDevice = 300 < e,
        tool.setLocalStorage(LOCAL_STORAGE_ITEM.DVJ34, t),
        tool.setLocalStorage(LOCAL_STORAGE_ITEM.DVLowPerformance, isLowPerformanceDevice ? "2446.781" : "1830"),
        t
    }
    function getWebglFP() {
        var e = tool.getFromLocalStorage(LOCAL_STORAGE_ITEM.DVJ35);
        if (e)
            return e;
        e = function() {
            try {
                var e;
                return isCanvasSupported() ? null == (e = WebglFpKey()) ? msg.EXCEPTION : tool.MD5(stringify(e)) : msg.NOT_SUPPORT
            } catch (e) {
                return msg.EXCEPTION
            }
        }();
        return tool.setLocalStorage(LOCAL_STORAGE_ITEM.DVJ35, e),
        e
    }
    function audioKey() {
        var o, a, e = new promise(function(e, t) {
            o = e,
            a = t
        }
        );
        if (navigator.userAgent.match(/OS 11.+Version\/11.+Safari/))
            return a("EXCLUDED");
        var t = window.OfflineAudioContext || window.webkitOfflineAudioContext;
        if (!t)
            return a(msg.NOT_SUPPORT);
        var r = new t(1,44100,44100)
          , i = r.createOscillator()
          , s = (i.type = "triangle",
        i.frequency.setValueAtTime(1e4, r.currentTime),
        r.createDynamicsCompressor())
          , l = ([["threshold", -50], ["knee", 40], ["ratio", 12], ["reduction", -20], ["attack", 0], ["release", .25]].forEach(function(e) {
            void 0 !== s[e[0]] && "function" == typeof s[e[0]].setValueAtTime && s[e[0]].setValueAtTime(e[1], r.currentTime)
        }),
        i.connect(s),
        s.connect(r.destination),
        i.start(0),
        r.startRendering(),
        setTimeout$1(function() {
            return r.oncomplete = function() {}
            ,
            r = null,
            a(msg.TIMEOUT)
        }, 1e3));
        return r.oncomplete = function(t) {
            var e, r, n;
            try {
                clearTimeout(l),
                e = reduce(r = slice$1(n = t.renderedBuffer.getChannelData(0)).call(n, 4500, 5e3)).call(r, function(e, t) {
                    return e + Math.abs(t)
                }, 0).toString(),
                i.disconnect(),
                s.disconnect()
            } catch (e) {
                t = "Unknown Error";
                return e && "string" == typeof e.message && "" != e.message ? t = e.message : e && "string" == typeof e && "" != e && (t = e),
                void a(t)
            }
            o(e)
        }
        ,
        e
    }
    function getAudioFP() {
        return new promise(function(t) {
            try {
                setTimeout$1(function() {
                    t(msg.TIMEOUT)
                }, 1e3),
                audioKey().then(function(e) {
                    return t(tool.MD5(e))
                }).catch(function(e) {
                    return t(e)
                })
            } catch (e) {
                t(msg.NOT_SUPPORT)
            }
        }
        )
    }
    function jsFontKeyAsync(i) {
        var e, s, l = tool.now(), t = new promise(function(e) {
            return s = e
        }
        ), c = fill(e = Array(i.length)).call(e, 0), u = 0, p = ["monospace", "sans-serif", "serif"], r = "mmmmmmmmmmlli", n = "72px", d = document.getElementsByTagName("body")[0], f = document.createElement("div"), h = document.createElement("div"), g = {}, m = {}, y = function() {
            var e = document.createElement("span");
            return e.style.position = "absolute",
            e.style.left = "-9999px",
            e.style.fontSize = n,
            e.style.fontStyle = "normal",
            e.style.fontWeight = "normal",
            e.style.letterSpacing = "normal",
            e.style.lineBreak = "auto",
            e.style.lineHeight = "normal",
            e.style.textTransform = "none",
            e.style.textAlign = "left",
            e.style.textDecoration = "none",
            e.style.textShadow = "none",
            e.style.whiteSpace = "normal",
            e.style.wordBreak = "normal",
            e.style.wordSpacing = "normal",
            e.innerText = r,
            e
        }, o = function() {
            for (var e = [], t = 0, r = p.length; t < r; t++) {
                var n = y();
                n.style.fontFamily = p[t],
                f.appendChild(n),
                e.push(n)
            }
            return e
        }();
        d.appendChild(f);
        for (var a = 0, S = p.length; a < S; a++)
            g[p[a]] = o[a].offsetWidth,
            m[p[a]] = o[a].offsetHeight;
        d.appendChild(h);
        var v = tool.now();
        return function e() {
            if (u >= i.length) {
                try {
                    d.removeChild(h),
                    d.removeChild(f)
                } catch (e) {}
                return s([c, tool.now() - l])
            }
            for (var t, r, n = 0; n < p.length; n++) {
                var o = p[n]
                  , a = (a = i[u],
                t = o,
                r = void 0,
                (r = y()).style.fontFamily = "'" + a + "'," + t,
                r);
                if (h.appendChild(a),
                a.offsetWidth !== g[o] || a.offsetHeight !== m[o]) {
                    c[u] = 1,
                    h.removeChild(a);
                    break
                }
                h.removeChild(a)
            }
            u++,
            10 < tool.now() - v ? requestAnimationFrame(function() {
                v = tool.now(),
                e()
            }) : e()
        }(),
        t
    }
    var syncFontsKeyResult = null
      , shortFontSpend = 0;
    function jsFontsKey() {
        if (syncFontsKeyResult)
            return syncFontsKeyResult;
        var c = ["monospace", "sans-serif", "serif"]
          , u = shortFontList
          , t = "mmmmmmmmmmlli"
          , r = "72px"
          , e = document.getElementsByTagName("body")[0]
          , o = document.createElement("div")
          , p = document.createElement("div")
          , n = {}
          , a = {}
          , d = function() {
            var e = document.createElement("span");
            return e.style.position = "absolute",
            e.style.left = "-9999px",
            e.style.fontSize = r,
            e.style.fontStyle = "normal",
            e.style.fontWeight = "normal",
            e.style.letterSpacing = "normal",
            e.style.lineBreak = "auto",
            e.style.lineHeight = "normal",
            e.style.textTransform = "none",
            e.style.textAlign = "left",
            e.style.textDecoration = "none",
            e.style.textShadow = "none",
            e.style.whiteSpace = "normal",
            e.style.wordBreak = "normal",
            e.style.wordSpacing = "normal",
            e.innerText = t,
            e
        }
          , i = function() {
            for (var e = [], t = 0, r = c.length; t < r; t++) {
                var n = d();
                n.style.fontFamily = c[t],
                o.appendChild(n),
                e.push(n)
            }
            return e
        }();
        e.appendChild(o);
        for (var s = 0, l = c.length; s < l; s++)
            n[c[s]] = i[s].offsetWidth,
            a[c[s]] = i[s].offsetHeight;
        for (var f = function() {
            for (var e, t, r = {}, n = 0, o = u.length; n < o; n++) {
                for (var a = [], i = 0, s = c.length; i < s; i++) {
                    l = u[n],
                    e = c[i],
                    t = void 0,
                    (t = d()).style.fontFamily = "'" + l + "'," + e;
                    var l = t;
                    p.appendChild(l),
                    a.push(l)
                }
                r[u[n]] = a
            }
            return r
        }(), h = (e.appendChild(p),
        []), g = 0, m = u.length; g < m; g++)
            !function(e) {
                for (var t = !1, r = 0; r < c.length; r++)
                    if (t = e[r].offsetWidth !== n[c[r]] || e[r].offsetHeight !== a[c[r]])
                        return t;
                return t
            }(f[u[g]]) || h.push(u[g]);
        return e.removeChild(p),
        e.removeChild(o),
        syncFontsKeyResult = h
    }
    function getFontFPWrapper() {
        return new promise(function(n) {
            tool.waituntil(function() {
                return 0 < document.getElementsByTagName("body").length
            }, 20, maxSafeInteger).then(function() {
                var e, t;
                isLowPerformanceDevice ? jsFontKeyAsync(shortFontList).then(function(e) {
                    var e = _slicedToArray(e, 2)
                      , t = e[0]
                      , e = e[1]
                      , r = [];
                    t.forEach(function(e, t) {
                        e && r.push(shortFontList[t])
                    }),
                    n({
                        result: r,
                        spent: shortFontSpend = e
                    })
                }) : (e = tool.now(),
                t = jsFontsKey(),
                shortFontSpend = tool.now() - e,
                n({
                    result: t,
                    spent: shortFontSpend
                }))
            })
        }
        )
    }
    function getFontFP() {
        var t = tool.now();
        return new promise(function(n) {
            var e = tool.getFromLocalStorage(LOCAL_STORAGE_ITEM.DVJ85);
            if (e)
                return n({
                    hash: e,
                    count: msg.DEFAULT,
                    timeSpent: tool.now() - t
                });
            setTimeout$1(function() {
                n({
                    hash: msg.EMPTY,
                    count: msg.DEFAULT,
                    timeSpent: -1
                })
            }, 1e3),
            getFontFPWrapper().then(function(e) {
                var t = e.result
                  , r = tool.MD5(stringify(t));
                tool.setLocalStorage(LOCAL_STORAGE_ITEM.DVJ85, r),
                n({
                    hash: r,
                    count: t.length,
                    timeSpent: e.spent || 0
                })
            })
        }
        )
    }
    function getClientRects() {
        try {
            var e = document.body.getClientRects()[0];
            return stringify(e)
        } catch (e) {
            return msg.NOT_SUPPORT
        }
    }
    function getWebDriver() {
        try {
            return navigator.webdriver
        } catch (e) {
            return msg.NOT_SUPPORT
        }
    }
    function getQuotaOfStorage() {
        return new promise(function(t) {
            try {
                if (setTimeout$1(function() {
                    t(msg.TIMEOUT)
                }, 1e3),
                !navigator.storage)
                    return t(msg.NOT_SUPPORT);
                navigator.storage.estimate().then(function(e) {
                    return t(e.quota)
                }).catch(function() {
                    return t(msg.EXCEPTION)
                })
            } catch (e) {
                return t(msg.EXCEPTION)
            }
        }
        )
    }
    function isConsoleOpened() {
        try {
            return 120 < window.outerHeight - window.innerHeight || 30 < window.outerWidth - window.innerWidth ? !0 : !1
        } catch (e) {
            return msg.NOT_SUPPORT
        }
    }
    function getNavigatorSort() {
        try {
            var e, t = [];
            for (e in navigator)
                t.push(e);
            return tool.MD5(stringify(t))
        } catch (e) {
            return msg.NOT_SUPPORT
        }
    }
    function getNavigatorMineType() {
        try {
            for (var e = [], t = navigator.mimeTypes, r = 0; r < t.length; r++)
                e.push({
                    description: t[r].description,
                    suffixes: t[r].suffixes,
                    type: t[r].type
                });
            return e
        } catch (e) {
            return msg.NOT_SUPPORT
        }
    }
    function getSensors() {
        try {
            var t = [];
            return ["AbsoluteOrientationSensor", "Accelerometer", "AmbientLightSensor", "GravitySensor", "Gyroscope", "LinearAccelerationSensor", "Magnetometer", "RelativeOrientationSensor", "OrientationSensor"].forEach(function(e) {
                window[e] && "function" == typeof window[e] && t.push(e)
            }),
            tool.MD5(stringify(t))
        } catch (e) {
            return msg.NOT_SUPPORT
        }
    }
    function getMinCpuStep() {
        try {
            var e = window.performance;
            if (null == e || null == e.now())
                return msg.NOT_SUPPORT;
            for (var t, r, n = 1, o = 1, a = e.now(), i = 0; i < 5e4; i++)
                (r = a) < (a = e.now()) && (n < (t = a - r) ? t < o && (o = t) : t < n && (o = n,
                n = t));
            return [n, o]
        } catch (e) {
            return msg.NOT_SUPPORT
        }
    }
    function trueCount(e) {
        return filter(e).call(e, function(e) {
            return e
        }).length
    }
    function isChromium() {
        try {
            var e;
            return 5 <= trueCount(["webkitPersistentStorage"in navigator, "webkitTemporaryStorage"in navigator, "string" == typeof navigator.vendor && 0 == indexOf(e = navigator.vendor).call(e, "Google"), "webkitResolveLocalFileSystemURL"in window, "BatteryManager"in window, "webkitMediaStream"in window, "webkitSpeechGrammar"in window])
        } catch (e) {
            return
        }
    }
    function isNewVersionChromium() {
        try {
            return 2 <= trueCount(["ClipboardItem"in window, "PerformanceEventTiming"in window, "RTCSctpTransport"in window])
        } catch (e) {
            return
        }
    }
    function isSafari() {
        try {
            var e;
            return 4 <= trueCount(["ApplePayError"in window, "CSSPrimitiveValue"in window, "Counter"in window, "string" == typeof navigator.vendor && 0 == indexOf(e = navigator.vendor).call(e, "Apple"), "getStorageUpdates"in navigator, "WebKitMediaKeys"in window])
        } catch (e) {
            return
        }
    }
    function isNewVersionSafari() {
        try {
            return 4 <= trueCount(["maxTouchPoints"in navigator, "mediaCapabilities"in navigator, "PointerEvent"in window, "visualViewport"in window, "onafterprint"in window])
        } catch (e) {
            return
        }
    }
    function isFirefox() {
        try {
            return 4 <= trueCount(["buildID"in navigator, document.documentElement && document.documentElement.style && "MozAppearance"in document.documentElement.style, "onmozfullscreenchange"in window, "mozInnerScreenX"in window, "CSSMozDocumentRule"in window, "CanvasCaptureMediaStream"in window])
        } catch (e) {
            return
        }
    }
    function isIE() {
        try {
            var e = 3 <= trueCount(["msWriteProfilerMark"in window, "MSStream"in window, "msLaunchUri"in navigator, "msSaveBlob"in navigator])
              , t = 4 <= trueCount(["MSCSSMatrix"in window, "msSetImmediate"in window, "msIndexedDB"in window, "msMaxTouchPoints"in navigator, "msPointerEnabled"in navigator]);
            return e || t
        } catch (e) {
            return
        }
    }
    function isPrivateMode() {
        return new promise(function(n) {
            if (setTimeout$1(function() {
                n(!1)
            }, 1e3),
            isChromium())
                if (isNewVersionChromium()) {
                    if (!navigator.webkitTemporaryStorage || "function" != typeof navigator.webkitTemporaryStorage.queryUsageAndQuota)
                        return n(!1);
                    navigator.webkitTemporaryStorage.queryUsageAndQuota(function(e, t) {
                        if (!(window.performance && window.performance.memory && "jsHeapSizeLimit"in window.performance.memory))
                            return n(!1);
                        var r = window.performance.memory.jsHeapSizeLimit;
                        return n(t < r)
                    })
                } else {
                    if ("function" != typeof window.webkitRequestFileSystem)
                        return n(!1);
                    window.webkitRequestFileSystem("TEMPORARY"in window ? window.TEMPORARY : 0, 1, function() {
                        return n(!1)
                    }, function() {
                        return n(!0)
                    })
                }
            else if (isSafari())
                if (isNewVersionSafari()) {
                    if (!window.indexedDB || "function" != typeof window.indexedDB.open)
                        return n(!1);
                    var t = tool.getRndString(16);
                    window.indexedDB.open(t, 1).onupgradeneeded = function(e) {
                        e = e.target.result;
                        try {
                            return e.createObjectStore("-", {
                                autoIncrement: !0
                            }).put(new Blob),
                            n(!1)
                        } catch (e) {
                            return new RegExp("BlobURLs are not yet supported").test(e.message) ? n(!0) : n(!1)
                        } finally {
                            e.close(),
                            window.indexedDB.deleteDatabase(t)
                        }
                    }
                } else {
                    try {
                        window.openDatabase(null, null, null, null)
                    } catch (e) {
                        return n(!0)
                    }
                    try {
                        return window.localStorage.setItem("test", "1"),
                        window.localStorage.removeItem("test"),
                        n(!1)
                    } catch (e) {
                        return n(!0)
                    }
                }
            else {
                if (!isFirefox()) {
                    if (isIE()) {
                        try {
                            if (!window.indexedDB)
                                return n(!0)
                        } catch (e) {
                            return n(!0)
                        }
                        return n(!1)
                    }
                    return n(!1)
                }
                try {
                    var e = window.indexedDB.open("test");
                    e.onerror = function() {
                        n(!0)
                    }
                    ,
                    e.onsuccess = function() {
                        n(!1)
                    }
                } catch (e) {
                    return n(!0)
                }
            }
        }
        )
    }
    function getPostCount() {
        return parseInt(tool.getFromLocalStorage(LOCAL_STORAGE_ITEM.DVPostCount)) || 1
    }
    function calculateTrigonometry() {
        var e = [["asinh", 1, function(e) {
            return Math.log(e + Math.sqrt(e * e + 1))
        }
        ], ["atanh", .5, function(e) {
            return Math.log((1 + e) / (1 - e)) / 2
        }
        ], ["expm1", 1, function(e) {
            return Math.exp(e) - 1
        }
        ], ["log1p", 10, function(e) {
            return Math.log(1 + e)
        }
        ], ["sinh", 1, function(e) {
            e = Math.exp(e);
            return (e - 1 / e) / 2
        }
        ], ["cosh", 10, function(e) {
            e = Math.exp(e);
            return (e + 1 / e) / 2
        }
        ], ["tanh", 1, function(e) {
            e = Math.exp(2 * e);
            return (e - 1) / (e + 1)
        }
        ], ["tan", -1e300, function(e) {
            return Math.tan(e)
        }
        ], ["powPI", -100, function(e) {
            return Math.pow(Math.PI, e)
        }
        ]];
        try {
            return map$3(e).call(e, function(e) {
                var e = _slicedToArray(e, 3)
                  , t = e[0]
                  , r = e[1]
                  , e = e[2];
                return concat(t = concat(t = "".concat(t, "(")).call(t, r, "):")).call(t, e(r))
            }).join(",")
        } catch (e) {
            return msg.NOT_SUPPORT
        }
    }
    function getScreenOrientation() {
        try {
            var e = window.screen.orientation;
            return e ? stringify({
                type: e.type,
                angle: e.angle
            }) : msg.EMPTY
        } catch (e) {
            return msg.NOT_SUPPORT
        }
    }
    function detectVm() {
        var e = getWebglVendorAndRender();
        return new RegExp("vmware|virtualbox|parallels|android emulator").test(e.toLowerCase())
    }
    function getVoiceList() {
        try {
            var e;
            return speechSynthesis && "function" == typeof speechSynthesis.getVoices ? map$3(e = speechSynthesis.getVoices()).call(e, function(e) {
                var t;
                return concat(t = "".concat(e.name, ";")).call(t, e.lang)
            }) : msg.NOT_SUPPORT
        } catch (e) {
            return msg.NOT_SUPPORT
        }
    }
    function getVoiceSampleRate() {
        try {
            return AudioContext ? (new AudioContext).sampleRate : msg.NOT_SUPPORT
        } catch (e) {
            return msg.NOT_SUPPORT
        }
    }
    function getMediaDevices() {
        return new promise(function(t) {
            setTimeout$1(function() {
                t(msg.TIMEOUT)
            }, 1e3);
            try {
                if (!navigator || !navigator.mediaDevices || "function" != typeof navigator.mediaDevices.enumerateDevices)
                    return t(msg.NOT_SUPPORT);
                navigator.mediaDevices.enumerateDevices().then(function(e) {
                    try {
                        return t({
                            videoinput: filter(e).call(e, function(e) {
                                return "videoinput" == e.kind
                            }).length,
                            audioinput: filter(e).call(e, function(e) {
                                return "audioinput" == e.kind
                            }).length,
                            audiooutput: filter(e).call(e, function(e) {
                                return "audiooutput" == e.kind
                            }).length
                        })
                    } catch (e) {
                        return t(msg.NOT_SUPPORT)
                    }
                }).catch(function() {
                    return t(msg.NOT_SUPPORT)
                })
            } catch (e) {
                return t(msg.NOT_SUPPORT)
            }
        }
        )
    }
    function getSDKOrigin() {
        try {
            if (!document.currentScript)
                throw "";
            var e = document.currentScript.getAttribute("src");
            if ("string" == typeof e && "" != e)
                return e;
            throw ""
        } catch (e) {
            return msg.NOT_SUPPORT
        }
    }
    var toDetectCodeFunArr = [];
    function addDetectCodeFun(e) {
        e.forEach(function(e) {
            includes(toDetectCodeFunArr).call(toDetectCodeFunArr, e) || toDetectCodeFunArr.push(e)
        })
    }
    function getKeyFunctionCode() {
        var e, t = [];
        function r(e) {
            "function" == typeof e.toString ? "string" == typeof (e = e.toString()) ? t.push(e) : t.push(msg.EMPTY) : t.push(msg.NOT_SUPPORT)
        }
        for (e in RaphaelFieldMap)
            Object.prototype.hasOwnProperty.call(RaphaelFieldMap, e) && r(RaphaelFieldMap[e]);
        return toDetectCodeFunArr.forEach(function(e) {
            r(e)
        }),
        t
    }
    function getFunctionHash() {
        return tool.MD5(getKeyFunctionCode().join(""))
    }
    function codeIsOneLine() {
        var e;
        return !includes(e = getKeyFunctionCode().join("")).call(e, "\n")
    }
    var typesAllRequests = {
        POST: api.POST_DATA,
        PUT: api.SECOND_REQUEST,
        PATCH: api.PATCH_REQUEST,
        CONFIG: api.CONFIG_REQUEST
    }, DataPoster = function() {
        function e() {
            _classCallCheck(this, e),
            this.domainIndexOfLastSuccessRequest = 0,
            this.ack = globalVariable.ACK,
            this.env = globalVariable.ENV
        }
        var n, o;
        return _createClass(e, [{
            key: "getEnv",
            value: function() {
                return this.env
            }
        }, {
            key: "getAck",
            value: function() {
                return this.ack
            }
        }, {
            key: "reportData",
            value: function(o) {
                var a = this;
                return new promise(function(r, n) {
                    var e = preHandleData(o);
                    a._transformBeforeSend(e, !0).then(function(e) {
                        return a.reportByHttp(e)
                    }).then(function(e) {
                        return a._transformAfterRecive(e.responseStr, e.encrypted)
                    }).then(function(e) {
                        var t;
                        e.DVID && e.DVToken ? (t = 1 / 24 / 6,
                        e.DVMA && 0 < e.DVMA && (t = Math.min(Math.max(1 / 24 / 6, e.DVMA), 10)),
                        tool.setLocalStorage(LOCAL_STORAGE_ITEM.DVMA, tool.now() + 864e5 * t + ""),
                        globalVariable.tempDVID = e.DVID || "",
                        setDvidAsync(globalVariable.tempDVID),
                        t = [e.DVToken],
                        Array.isArray(e.DVPreTokens) && (t = concat(t).call(t, e.DVPreTokens)),
                        globalVariable.tempDVPreTokens = t,
                        globalVariable.tempDVPreTokensIndex = 1,
                        tool.setLocalStorage(LOCAL_STORAGE_ITEM.DVPreTokens, globalVariable.tempDVPreTokens.join(",")),
                        tool.setLocalStorage(LOCAL_STORAGE_ITEM.DVPreTokensIndex, "".concat(globalVariable.tempDVPreTokensIndex)),
                        t = globalVariable.DEFAULT_DVTTL_SECOND,
                        e.DVTTL && "number" == typeof e.DVTTL && (t = Math.max(e.DVTTL - 10800, 86400)),
                        tool.setLocalStorage(LOCAL_STORAGE_ITEM.DVTokenExpiration, "".concat(tool.now() + 1e3 * t)),
                        e && e.DVIP && tool.setLocalStorage(LOCAL_STORAGE_ITEM.DVRaphaelEIP, e.DVIP),
                        e && e.DVZDIP && tool.setLocalStorage(LOCAL_STORAGE_ITEM.DVZhengdaoEIP, e.DVZDIP),
                        a.sendSecondRequest(globalVariable.tempDVID, getFormalToken(), o.u1, e.UT || "", tool.now() - globalVariable.initTokenStartTime),
                        r(globalVariable.tempDVPreTokens[0])) : n(msg.EXCEPTION + ": " + ERROR_MSG.no_dvid_in_response)
                    }).catch(function(e) {
                        if ("string" == typeof e && startsWith(e).call(e, msg.CONNECTION_FAILED))
                            n(e);
                        else {
                            var t, r = "";
                            try {
                                e && e.message && "string" == typeof e.message ? r = e.message : "string" == typeof e ? r = e : "object" == _typeof(e) ? r = stringify(e) : e && "function" == typeof e.toString && "string" == typeof e.toString() && (r = e.toString())
                            } catch (e) {}
                            n(r ? concat(t = "".concat(msg.EXCEPTION, ": ")).call(t, r) : msg.EXCEPTION)
                        }
                    })
                }
                )
            }
        }, {
            key: "reportByHttp",
            value: function(o) {
                var a = this
                  , e = (globalVariable.initTokenTimeoutReason = initTokenProgress.reporting,
                parseInt(tool.getFromLocalStorage(LOCAL_STORAGE_ITEM.DVPostCount)) || 1);
                return tool.setLocalStorage(LOCAL_STORAGE_ITEM.DVPostCount, "".concat(e + 1)),
                new promise(function(r, t) {
                    var n = tool.now()
                      , e = "{" !== o[0];
                    a.reportByOriginOrCdn("POST", o, e ? {
                        c: "1",
                        pretoken: "1"
                    } : {
                        pretoken: "1"
                    }).then(function(e) {
                        var t;
                        a.postDataSpendTime = tool.now() - n;
                        try {
                            t = "1" == e.headers.cv
                        } catch (e) {
                            t = !1
                        }
                        r({
                            responseStr: e.response,
                            encrypted: t
                        })
                    }).catch(function(e) {
                        return t(e)
                    })
                }
                )
            }
        }, {
            key: "reportByOriginOrCdn",
            value: (o = _asyncToGenerator(regenerator.mark(function e(t, r, n) {
                var o, a, i, s, l, c, u, p, d, f, h, g;
                return regenerator.wrap(function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            o = 2,
                            a = tool.getRaphaelEIP(),
                            s = this.getEnv(),
                            a = tool.generateDomain(a, s, !0),
                            s = typesAllRequests[t],
                            i = s.method,
                            s = s.url,
                            c = this.domainIndexOfLastSuccessRequest;
                        case 6:
                            if (c < o * a.length)
                                return p = c % a.length,
                                d = a[p],
                                globalVariable.initTokenTimeoutReason = concat(u = concat(u = "".concat(initTokenProgress.reporting, ",trying ")).call(u, c + 1, " times, current domain:")).call(u, d),
                                e.prev = 10,
                                e.next = 13,
                                tool.ajax(i, d + s, r, !!n, n || void 0);
                            e.next = 45;
                            break;
                        case 13:
                            return l = e.sent,
                            this.domainIndexOfLastSuccessRequest = p,
                            e.abrupt("break", 45);
                        case 18:
                            if (e.prev = 18,
                            e.t0 = e.catch(10),
                            c == o * a.length - 1)
                                throw e.t0;
                            e.next = 22;
                            break;
                        case 22:
                            if ("string" != typeof e.t0 || !startsWith(e.t0).call(e.t0, xhrStatusNot200Prefix)) {
                                e.next = 40;
                                break
                            }
                            f = void 0;
                            try {
                                h = JSON.parse(e.t0.replace(xhrStatusNot200Prefix, "")),
                                f = h.status
                            } catch (e) {
                                f = 0
                            }
                            g = 0;
                        case 26:
                            if (!(g < 1)) {
                                e.next = 40;
                                break
                            }
                            if (550 != f || tool.isCdnDomain(d)) {
                                e.next = 31;
                                break
                            }
                            return e.next = 30,
                            tool.sleep(6e3);
                        case 30:
                            return e.abrupt("break", 40);
                        case 31:
                            if (400 <= f && f <= 499)
                                throw e.t0;
                            e.next = 33;
                            break;
                        case 33:
                            if (500 <= f && f <= 599)
                                throw e.t0;
                            e.next = 35;
                            break;
                        case 35:
                            if (304 == f)
                                throw e.t0;
                            e.next = 37;
                            break;
                        case 37:
                            g++,
                            e.next = 26;
                            break;
                        case 40:
                            return e.next = 42,
                            tool.sleep(4e3);
                        case 42:
                            c++,
                            e.next = 6;
                            break;
                        case 45:
                            return e.abrupt("return", l);
                        case 46:
                        case "end":
                            return e.stop()
                        }
                }, e, this, [[10, 18]])
            })),
            function(e, t, r) {
                return o.apply(this, arguments)
            }
            )
        }, {
            key: "_transformBeforeSend",
            value: function(r) {
                var n = 1 < arguments.length && void 0 !== arguments[1] && arguments[1];
                return n && (globalVariable.initTokenTimeoutReason = initTokenProgress.encrypting),
                new promise(function(t) {
                    tool.encryptAES(stringify(r)).then(function(e) {
                        return t(e)
                    }).catch(function(e) {
                        n && (r.v12 = (e || 3) + ""),
                        t(stringify(r))
                    })
                }
                )
            }
        }, {
            key: "_transformAfterRecive",
            value: function(n, e) {
                return globalVariable.initTokenTimeoutReason = initTokenProgress.decrypting,
                new promise(function(t) {
                    var r = {};
                    if (e)
                        tool.decryptAES(n).then(function(e) {
                            try {
                                r = JSON.parse(e || n)
                            } catch (e) {}
                            t(r)
                        }).catch(function(e) {
                            setDecryptErrCode(e);
                            try {
                                r = JSON.parse(n)
                            } catch (e) {}
                            t(r)
                        });
                    else {
                        try {
                            r = JSON.parse(n)
                        } catch (e) {}
                        t(r)
                    }
                }
                )
            }
        }, {
            key: "sendSecondRequest",
            value: function(e, t, r, n, o, a, i) {
                var s = this
                  , e = {
                    v1: e,
                    v3: t,
                    u1: r,
                    ut: n,
                    j74: o
                }
                  , l = (a && (e.j82 = a),
                i && (e.j83 = i),
                e.j68 = this.postDataSpendTime,
                tool.now());
                this._transformBeforeSend(e).then(function(e) {
                    var t = "{" !== e[0];
                    return s.reportByOriginOrCdn("PUT", e, t ? {
                        c: "1"
                    } : {})
                }).then(function() {
                    return tool.setLocalStorage(LOCAL_STORAGE_ITEM.DVLastPutSpendTime, tool.now() - l + "")
                }).catch(function(e) {
                    return logger.log(e)
                }).finally(function() {
                    store$1.configManager.updateData().then(function() {
                        patchDataAfterConfig()
                    }).catch(function(e) {
                        return logger.log(e)
                    })
                })
            }
        }, {
            key: "sendSimpleRequest",
            value: function() {
                tool.ajax(api.SIMPLE_REQUEST.method, this.getEnv() + api.SIMPLE_REQUEST.url, "").catch(function(e) {
                    return logger.log(e)
                })
            }
        }, {
            key: "sendReplayData",
            value: (n = _asyncToGenerator(regenerator.mark(function e(t, r, n) {
                var o, a, i, s;
                return regenerator.wrap(function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            if (t) {
                                e.next = 2;
                                break
                            }
                            throw "binaryString is empty";
                        case 2:
                            for (o = new Uint8Array(t.length),
                            a = 0; a < t.length; a++)
                                o[a] = t.charCodeAt(a);
                            return i = new Blob([o],{
                                type: "application/octet-stream"
                            }),
                            e.next = 7,
                            fetch(n, {
                                method: r,
                                headers: {
                                    "Content-Type": "application/octet-stream"
                                },
                                body: i
                            });
                        case 7:
                            if ((s = e.sent).ok) {
                                e.next = 10;
                                break
                            }
                            throw "response is not ok";
                        case 10:
                            return e.next = 12,
                            s.text();
                        case 12:
                            if ("success" !== e.sent.substring(0, 7))
                                throw "response text is not success";
                            e.next = 15;
                            break;
                        case 15:
                        case "end":
                            return e.stop()
                        }
                }, e)
            })),
            function(e, t, r) {
                return n.apply(this, arguments)
            }
            )
        }, {
            key: "sendPatchRequest",
            value: function(t) {
                var r = this;
                return new promise(function(e) {
                    r._transformBeforeSend(t).then(function(e) {
                        var t = "{" !== e[0];
                        return r.reportByOriginOrCdn("PATCH", e, t ? {
                            c: "1"
                        } : {})
                    }).then(function() {
                        return e(!0)
                    }).catch(function() {
                        return e(!1)
                    })
                }
                )
            }
        }, {
            key: "sendConfigRequest",
            value: function(e, n) {
                var o = this;
                return new promise(function(t, r) {
                    o._transformBeforeSend(e).then(function(e) {
                        var t = "{" !== e[0];
                        return o.reportByOriginOrCdn("CONFIG", e, t ? {
                            c: "1",
                            confv: "" + n
                        } : {
                            confv: "" + n
                        })
                    }).then(function(e) {
                        var t;
                        try {
                            t = "1" == e.headers.cv
                        } catch (e) {
                            t = !1
                        }
                        return o._transformAfterRecive(e.response, t)
                    }).then(function(e) {
                        "number" == typeof e.confv ? t(e) : r("response error")
                    }).catch(function(e) {
                        r(e)
                    })
                }
                )
            }
        }]),
        e
    }(), collection = collection$2, collectionStrong = collectionStrong$2, path$9 = (collection("Map", function(e) {
        return function() {
            return e(this, arguments.length ? arguments[0] : void 0)
        }
    }, collectionStrong),
    path$m), map$2 = path$9.Map, parent$e = map$2, map$1 = parent$e, map = map$1, IFRAME_STATUS, dvidMask = (!function(e) {
        e[e.loading = 0] = "loading",
        e[e.running = 1] = "running"
    }(IFRAME_STATUS = IFRAME_STATUS || {}),
    "common_config"), DvIframe = function() {
        function e() {
            var r = this;
            _classCallCheck(this, e),
            this.fetchMap = new map,
            this.iframe = document.createElement("iframe"),
            this.iframe.id = "dv_iframe",
            this.iframe.src = tool.transformCdnDomain(globalVariable.ENV) + globalVariable.URL_IFRAME,
            this.iframe.style.display = "none",
            "complete" == document.readyState || "interactive" == document.readyState ? document.body.appendChild(this.iframe) : tool.on(document, "DOMContentLoaded", function() {
                document.body.appendChild(r.iframe)
            }),
            this.status = IFRAME_STATUS.loading,
            this.iframe.onload = function() {
                initPreviousPageTokens(),
                r.status = IFRAME_STATUS.running
            }
            ,
            tool.on(window, "message", function(e) {
                if ("string" == typeof e.data) {
                    var t = null;
                    try {
                        t = JSON.parse(e.data)
                    } catch (e) {}
                    t && "string" == typeof t.key && startsWith(e = t.key).call(e, "DV_IFRAME_MSG") && ((e = r.fetchMap.get(t.key)) && (r.fetchMap.delete(t.key),
                    !e.needBeFresh || tool.now() - t.time < 1e4 ? e.resolve(t.value || null) : e.resolve(null)))
                }
            })
        }
        return _createClass(e, [{
            key: "get",
            value: function(e) {
                var r, n = this, o = 1 < arguments.length && void 0 !== arguments[1] && arguments[1], t = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : 0, a = e, e = ("dvid" == e && (a = dvidMask),
                new promise(function(e) {
                    r = e
                }
                ));
                return tool.waituntil(function() {
                    return n.status == IFRAME_STATUS.running
                }, 100, t || maxSafeInteger).then(function() {
                    for (var t; t = "DV_IFRAME_MSG_" + Math.round(1e6 * Math.random()),
                    n.fetchMap.has(t); )
                        ;
                    n.fetchMap.set(t, {
                        needBeFresh: o,
                        resolve: r
                    }),
                    setTimeout$1(function() {
                        var e = n.fetchMap.get(t);
                        e && (e.resolve(null),
                        n.fetchMap.delete(t))
                    }, 1e3);
                    var e = {
                        key: t,
                        get: a
                    };
                    n.iframe.contentWindow.postMessage(stringify(e), "*")
                }, function() {
                    r(null)
                }),
                e
            }
        }, {
            key: "set",
            value: function(e, t) {
                var r = this
                  , n = 2 < arguments.length && void 0 !== arguments[2] && arguments[2]
                  , o = "dvid" == e ? dvidMask : e;
                tool.waituntil(function() {
                    return r.status == IFRAME_STATUS.running
                }, 100, maxSafeInteger).then(function() {
                    var e = {
                        key: "DV_IFRAME_MSG",
                        set: {
                            key: o,
                            value: t,
                            keepFresh: !!n
                        }
                    };
                    r.iframe.contentWindow.postMessage(stringify(e), "*")
                })
            }
        }]),
        e
    }(), NativeManager = function() {
        function e() {
            _classCallCheck(this, e),
            this.msgId = 1,
            this.callbackMapper = new map;
            var a = this;
            window.dvEdgeRapahel_GetNativeToken = function(e, t, r, n) {
                var o = a.callbackMapper.get(n = +n);
                o && o({
                    token: e,
                    dvid: t,
                    error: r
                }),
                a.callbackMapper.delete(n)
            }
        }
        return _createClass(e, [{
            key: "isInNative",
            get: function() {
                return this.isIniOS() || this.isInAndroid()
            }
        }, {
            key: "initTokenFromNative",
            value: function(e, t) {
                return this.initTokenFromNativeGeneral(e, t, !1)
            }
        }, {
            key: "initLongTokenFromNative",
            value: function(e, t) {
                return this.initTokenFromNativeGeneral(e, t, !0)
            }
        }, {
            key: "initTokenFromNativeGeneral",
            value: function(o, a, i) {
                var s = this
                  , l = this;
                return new promise(function(e, t) {
                    if (l.isInNative) {
                        var r, n = s.msgId++, e = (s.callbackMapper.set(n, e),
                        "");
                        if (a)
                            try {
                                e = stringify(a)
                            } catch (e) {}
                        l.isInAndroid() ? i ? window.dvEdgeRapahelJs2native2.initLongToken(n, o, e) : window.dvEdgeRapahelJs2native2.initToken(n, o, e) : (r = "initToken",
                        r = {
                            cmd: r = i ? "initLongToken" : r,
                            index: n,
                            env: o,
                            userParam: e
                        },
                        window.webkit.messageHandlers.dvEdgeRapahelJSAction2.postMessage(r)),
                        setTimeout$1(function() {
                            s.callbackMapper.get(n) && (s.callbackMapper.delete(n),
                            t("timeout"))
                        }, globalVariable.INIT_TOKEN_TIMEOUT)
                    } else
                        t("not in native")
                }
                )
            }
        }, {
            key: "isIniOS",
            value: function() {
                try {
                    return window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.dvEdgeRapahelJSAction2
                } catch (e) {
                    return !1
                }
            }
        }, {
            key: "isInAndroid",
            value: function() {
                try {
                    return window.dvEdgeRapahelJs2native2 && window.dvEdgeRapahelJs2native2.initToken && window.dvEdgeRapahelJs2native2.initLongToken
                } catch (e) {
                    return !1
                }
            }
        }]),
        e
    }(), ConfigManager = function() {
        function r() {
            _classCallCheck(this, r),
            this.configData = {};
            var e = tool.getFromLocalStorage(LOCAL_STORAGE_ITEM.DVRaphaelConfig)
              , t = null;
            if (e)
                try {
                    t = JSON.parse(e)
                } catch (e) {}
            this.configData = t || {
                confv: 1,
                iceServers: {
                    urls: ["stun:stun.l.google.com:19302", "stun:stun1.l.google.com:19302", "stun:stun2.l.google.com:19302", "stun:stun3.l.google.com:19302", "stun:stun4.l.google.com:19302", "stun:stun.antisip.com:3478", "stun:stun.1und1.de:3478", "stun:stun.12voip.com:3478", "stun:stun.1und1.de:3478", "stun:stun.aa.net.uk:3478", "stun:stun.acrobits.cz:3478", "stun:stun.actionvoip.com:3478", "stun:stun.bluesip.net:3478", "stun:stun.cablenet-as.net:3478", "stun:stun.callromania.ro:3478", "stun:stun.tel.lu:3478", "stun:stun.telbo.com:3478", "stun:stun.twt.it:3478", "stun:stun.uls.co.za:3478", "stun:stun.usfamily.net:3478"]
                }
            }
        }
        return _createClass(r, [{
            key: "updateData",
            value: function() {
                var o = this;
                return new promise(function(t, r) {
                    var e = {}
                      , n = (e.app_access_key = globalVariable.ACK,
                    e.sdk_version = globalVariable.VERSION,
                    e.os = "web",
                    o.configData.confv);
                    store$1.dataPoster.sendConfigRequest(e, n = "number" != typeof n ? 1 : n).then(function(e) {
                        o.configData = e;
                        try {
                            tool.setLocalStorage(LOCAL_STORAGE_ITEM.DVRaphaelConfig, stringify(o.configData))
                        } catch (e) {}
                        t()
                    }).catch(function(e) {
                        logger.log(e),
                        r(e)
                    })
                }
                )
            }
        }, {
            key: "getInfoByName",
            value: function(e) {
                return "string" == typeof e && e ? this.configData[e] : null
            }
        }]),
        r
    }(), Raphael = function() {
        function r() {
            var t = this;
            _classCallCheck(this, r),
            this.memoryStore = {},
            this.nativeManager = new NativeManager,
            this.sendCSGetRequest(),
            store$1.dataPoster = new DataPoster,
            store$1.iframe = new DvIframe,
            store$1.configManager = new ConfigManager,
            addDetectCodeFun([store$1.dataPoster.sendSimpleRequest, store$1.dataPoster.reportData, store$1.iframe.get, store$1.iframe.set, this.initToken, this.getInfoForZhengdao]),
            store$1.dataCollection = new DataCollection;
            try {
                window.addEventListener("unload", this.onUnload.bind(this))
            } catch (e) {}
            store$1.dataPoster.sendSimpleRequest();
            var e = tool.getFromLocalStorage(LOCAL_STORAGE_ITEM.DVPreTokens)
              , e = (globalVariable.tempDVPreTokens = e ? e.split(",") : [],
            parseInt(tool.getFromLocalStorage(LOCAL_STORAGE_ITEM.DVPreTokensIndex), 10));
            globalVariable.tempDVPreTokensIndex = isNaN(e) || 0 === e ? 1 : e,
            globalVariable.tempDVUUID = tool.getFromLocalStorage(LOCAL_STORAGE_ITEM.DVUUID),
            [LOCAL_STORAGE_ITEM.DVJ34, LOCAL_STORAGE_ITEM.DVJ35, LOCAL_STORAGE_ITEM.DVJ85].forEach(function(e) {
                return t.memoryStore[e] = tool.getFromLocalStorage(e)
            })
        }
        var e, t, n;
        return _createClass(r, [{
            key: "getInfoForZhengdao",
            value: (n = _asyncToGenerator(regenerator.mark(function e() {
                var t, r, n;
                return regenerator.wrap(function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2,
                            store$1.dataCollection.getRaphaelInfoForZhengdao();
                        case 2:
                            if (t = e.sent,
                            store$1.iframe)
                                return e.next = 6,
                                store$1.iframe.get("ptt", !0, 3e3);
                            e.next = 8;
                            break;
                        case 6:
                            (n = e.sent) && (r = parseInt(n, 10));
                        case 8:
                            return r = r || tool.getRndInteger(0, Math.pow(10, 8)),
                            this.setPttToIframe(r),
                            e.abrupt("return", {
                                info: t,
                                ptt: r
                            });
                        case 11:
                        case "end":
                            return e.stop()
                        }
                }, e, this)
            })),
            function() {
                return n.apply(this, arguments)
            }
            )
        }, {
            key: "getValueForField",
            value: (t = _asyncToGenerator(regenerator.mark(function e(t) {
                return regenerator.wrap(function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return e.abrupt("return", store$1.dataCollection.getValueForField(t));
                        case 1:
                        case "end":
                            return e.stop()
                        }
                }, e)
            })),
            function(e) {
                return t.apply(this, arguments)
            }
            )
        }, {
            key: "getDataCollection",
            get: function() {
                return store$1.dataCollection
            }
        }, {
            key: "setPttToIframe",
            value: function(e) {
                store$1.iframe && store$1.iframe.set("ptt", e + "", !0)
            }
        }, {
            key: "getEnv",
            value: function() {
                return store$1.dataPoster.getEnv() || msg.EMPTY
            }
        }, {
            key: "getAccessKey",
            value: function() {
                return store$1.dataPoster.getAck() || msg.EMPTY
            }
        }, {
            key: "masterProcess",
            value: function(e, t, r, n, o) {
                globalVariable.initTokenStartTime = tool.now();
                var a, i, s = judgeDVMA(), l = getDVE1(), l = tool.compareTwoObjs(l, e);
                globalVariable.dvWaitingResponse ? o.safeSlowCb("", msg.RUNNING) : !s && hasCachedTokens(5) && l ? runCallback(o, "", n, r) : (store$1.dataCollection.setCustomFields(e, t),
                globalVariable.dvWaitingResponse = !0,
                l || setDVE1(e),
                s = n ? globalVariable.INIT_LONG_TOKEN_TIMEOUT : globalVariable.INIT_TOKEN_TIMEOUT,
                a = !1,
                i = setTimeout$1(function() {
                    var e;
                    a || (a = !0,
                    globalVariable.dvWaitingResponse = !1,
                    e = msg.TIMEOUT,
                    globalVariable.initTokenTimeoutReason && (e += ": ".concat(globalVariable.initTokenTimeoutReason)),
                    runCallback(o, e, n, r))
                }, s),
                store$1.dataCollection.collect().then(function() {
                    return store$1.dataPoster.reportData(store$1.dataCollection.raphaelInfo)
                }).then(function() {
                    return ""
                }, function(e) {
                    return e
                }).then(function(e) {
                    a || (a = !0,
                    globalVariable.dvWaitingResponse = !1,
                    tool.clearTimeout(i),
                    runCallback(o, e, n, r))
                }))
            }
        }, {
            key: "initToken",
            value: function(e) {
                var t, r = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : null, n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
                if (this.getAccessKey() == msg.EMPTY || this.getEnv() == msg.EMPTY)
                    return msg.NO_PERMISSON;
                try {
                    t = new InitTokenCallback(e)
                } catch (e) {
                    return e
                }
                t.safeFastCb && t.safeFastCb("", msg.NOT_SUPPORT);
                var o = null;
                if (r && "object" == _typeof(r) && Object.prototype.hasOwnProperty.call(r, "dvUserSessionIdKey") && (o = r.dvUserSessionIdKey,
                delete r.dvUserSessionIdKey),
                this.nativeManager.isInNative) {
                    e = null;
                    if (r && "object" == _typeof(r))
                        try {
                            e = JSON.parse(stringify(r)),
                            o && (e.dvUserSessionIdKey = o)
                        } catch (e) {}
                    var a = this;
                    this.nativeManager.initTokenFromNative(this.getEnv(), e).then(function(e) {
                        return "string" == typeof e.token && e.token ? {
                            success: !0,
                            token: e.token,
                            dvid: e.dvid,
                            error: e.error
                        } : {
                            success: !1,
                            token: "",
                            dvid: e.dvid,
                            error: e.error
                        }
                    }, function(e) {
                        return {
                            success: !1,
                            token: "",
                            dvid: "",
                            error: e
                        }
                    }).then(function(e) {
                        e.success ? (globalVariable.strTokenReturned = e.token || "",
                        globalVariable.tempDVID = e.dvid || "",
                        setDvidAsync(globalVariable.tempDVID),
                        t.safeSlowCb && t.safeSlowCb(e.token || "", e.error || "")) : a.masterProcess(r, n, o, !1, t)
                    })
                } else
                    this.masterProcess(r, n, o, !1, t)
            }
        }, {
            key: "initDeviceToken",
            value: function(e) {
                var t, r = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : null, n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
                if (this.getAccessKey() == msg.EMPTY || this.getEnv() == msg.EMPTY)
                    return msg.NO_PERMISSON;
                try {
                    t = new InitTokenCallback(e)
                } catch (e) {
                    return e
                }
                t.safeFastCb && t.safeFastCb("", msg.NOT_SUPPORT);
                var o = null;
                if (r && "object" == _typeof(r) && Object.prototype.hasOwnProperty.call(r, "dvUserSessionIdKey") && (o = r.dvUserSessionIdKey,
                delete r.dvUserSessionIdKey),
                this.nativeManager.isInNative) {
                    e = null;
                    if (r && "object" == _typeof(r))
                        try {
                            e = JSON.parse(stringify(r)),
                            o && (e.dvUserSessionIdKey = o)
                        } catch (e) {}
                    var a = this;
                    this.nativeManager.initLongTokenFromNative(this.getEnv(), e).then(function(e) {
                        return "string" == typeof e.token && e.token ? {
                            success: !0,
                            token: e.token,
                            dvid: e.dvid,
                            error: e.error
                        } : {
                            success: !1,
                            token: "",
                            dvid: e.dvid,
                            error: e.error
                        }
                    }, function(e) {
                        return {
                            success: !1,
                            token: "",
                            dvid: "",
                            error: e
                        }
                    }).then(function(e) {
                        e.success ? (46 == e.token.length && (globalVariable.strTokenReturned = e.token,
                        globalVariable.tempDVID = e.dvid || "",
                        setDvidAsync(globalVariable.tempDVID)),
                        t.safeSlowCb && t.safeSlowCb(e.token || "", e.error || "")) : a.masterProcess(r, n, o, !0, t)
                    })
                } else
                    this.masterProcess(r, n, o, !0, t)
            }
        }, {
            key: "onUnload",
            value: function() {
                for (var e in globalVariable.tempDVID && !tool.getFromLocalStorage(LOCAL_STORAGE_ITEM.DVID) && tool.setLocalStorage(LOCAL_STORAGE_ITEM.DVID, globalVariable.tempDVID),
                Array.isArray(globalVariable.tempDVPreTokens) && 0 < globalVariable.tempDVPreTokens.length && !tool.getFromLocalStorage(LOCAL_STORAGE_ITEM.DVPreTokens) && (tool.setLocalStorage(LOCAL_STORAGE_ITEM.DVPreTokens, globalVariable.tempDVPreTokens.join(",")),
                tool.setLocalStorage(LOCAL_STORAGE_ITEM.DVPreTokensIndex, "".concat(globalVariable.tempDVPreTokensIndex))),
                globalVariable.tempDVUUID && !tool.getFromLocalStorage(LOCAL_STORAGE_ITEM.DVUUID) && tool.setLocalStorage(LOCAL_STORAGE_ITEM.DVUUID, globalVariable.tempDVUUID),
                this.memoryStore) {
                    var t;
                    !Object.prototype.hasOwnProperty.call(this.memoryStore, e) || (t = this.memoryStore[e]) && !tool.getFromLocalStorage(LOCAL_STORAGE_ITEM[e]) && tool.setLocalStorage(LOCAL_STORAGE_ITEM[e], t)
                }
                this.sendCSPostRequest()
            }
        }, {
            key: "sendCSGetRequest",
            value: (e = _asyncToGenerator(regenerator.mark(function e() {
                var t, r;
                return regenerator.wrap(function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            if (startsWith(t = globalVariable.URL_CS).call(t, "empty") && endsWith(t = globalVariable.URL_CS).call(t, "empty"))
                                return e.abrupt("return");
                            e.next = 2;
                            break;
                        case 2:
                            return e.prev = 2,
                            e.next = 5,
                            tool.ajax(api.CS_GET.method, globalVariable.URL_CS + api.CS_GET.url, "", !1, void 0, !0);
                        case 5:
                            t = e.sent,
                            r = JSON.parse(t).j88,
                            store$1.dataCollection.addInfo("j88", r),
                            e.next = 13;
                            break;
                        case 10:
                            e.prev = 10,
                            e.t0 = e.catch(2),
                            store$1.dataCollection.addInfo("j88", msg.EXCEPTION);
                        case 13:
                        case "end":
                            return e.stop()
                        }
                }, e, null, [[2, 10]])
            })),
            function() {
                return e.apply(this, arguments)
            }
            )
        }, {
            key: "sendCSPostRequest",
            value: function() {
                var e, t;
                if (!startsWith(e = globalVariable.URL_CS).call(e, "empty") || !endsWith(e = globalVariable.URL_CS).call(e, "empty"))
                    try {
                        navigator && navigator.sendBeacon && (t = {
                            token: getFormalToken()
                        },
                        globalVariable.tempDVID && (t.dvid = globalVariable.tempDVID),
                        navigator.sendBeacon(globalVariable.URL_CS + api.CS_POST.url, stringify(t)))
                    } catch (e) {}
            }
        }], [{
            key: "getInstance",
            value: function() {
                return this.instance || (this.instance = new r),
                this.instance
            }
        }]),
        r
    }(), InitTokenCallback = function() {
        function n(e) {
            _classCallCheck(this, n);
            var t = null
              , r = null;
            if ("function" == typeof e)
                t = e;
            else {
                if (!("object" === _typeof(e) && "fastCb"in e && "realCb"in e && "function" == typeof e.fastCb && "function" == typeof e.realCb))
                    throw msg.PARA_ERR;
                r = e.fastCb,
                t = e.realCb
            }
            this.safeFastCb = this.safetyCallback(r),
            this.safeSlowCb = this.safetyCallback(t)
        }
        return _createClass(n, [{
            key: "safetyCallback",
            value: function(e) {
                var t = !1;
                return e ? function() {
                    if (!t) {
                        t = !0;
                        try {
                            e.apply(window, arguments)
                        } catch (e) {
                            console.error(e)
                        }
                    }
                }
                : null
            }
        }]),
        n
    }(), path$8 = path$m, setInterval$1 = path$8.setInterval, setInterval = setInterval$1, $$a = _export, $find = arrayIteration.find, FIND = "find", SKIPS_HOLES$1 = !0, entryVirtual$2 = (FIND in [] && Array(1)[FIND](function() {
        SKIPS_HOLES$1 = !1
    }),
    $$a({
        target: "Array",
        proto: !0,
        forced: SKIPS_HOLES$1
    }, {
        find: function(e) {
            return $find(this, e, 1 < arguments.length ? arguments[1] : void 0)
        }
    }),
    entryVirtual$h), find$4 = entryVirtual$2("Array").find, find$3 = find$4, ArrayPrototype$1 = Array.prototype, find_1 = function(e) {
        var t = e.find;
        return e === ArrayPrototype$1 || e instanceof Array && t === ArrayPrototype$1.find ? find$3 : t
    }, parent$d = find_1, find$2 = parent$d, find$1 = find$2, $$9 = _export, $findIndex = arrayIteration.findIndex, FIND_INDEX = "findIndex", SKIPS_HOLES = !0, entryVirtual$1 = (FIND_INDEX in [] && Array(1)[FIND_INDEX](function() {
        SKIPS_HOLES = !1
    }),
    $$9({
        target: "Array",
        proto: !0,
        forced: SKIPS_HOLES
    }, {
        findIndex: function(e) {
            return $findIndex(this, e, 1 < arguments.length ? arguments[1] : void 0)
        }
    }),
    entryVirtual$h), findIndex$3 = entryVirtual$1("Array").findIndex, findIndex$2 = findIndex$3, ArrayPrototype = Array.prototype, findIndex_1 = function(e) {
        var t = e.findIndex;
        return e === ArrayPrototype || e instanceof Array && t === ArrayPrototype.findIndex ? findIndex$2 : t
    }, parent$c = findIndex_1, findIndex$1 = parent$c, findIndex = findIndex$1, globalValues = {
        VERSION: "4.1.1",
        CONNECTION_MAX_TIME: 1e4,
        CONTECTION_INTERVAL: 1e4,
        TO_BE_SEND_QUEUE_MAX_VALUE: 1024,
        HEART_BEAT_INTERVAL: 1e4,
        DISCONNECT_TIMER: 3e4,
        OPEN_TIME: 0,
        SQLJS_WORKER_URL: "/dedge/zd/sql-worker.min.js",
        WORKER_MESSAGE_TIMEOUT: 5e3,
        DATABASE_CLEAR_TIME_INTERVAL: 1e4,
        DATABASE_MAX_EVENT_COUNT: 1e4,
        ZDENV: "airasia-ec.gw-dv.vip",
        ZD_REPLAY_ENV: "replay-sg.gw-dv.vip"
    }, zdApi = {
        POST_REPLAY: {
            url: "/replay",
            method: "POST"
        }
    };
    function getPageTitle() {
        return document.title || ""
    }
    function getPageUrl() {
        return window.location.href || ""
    }
    function getWindowSize() {
        var e;
        return concat(e = "(".concat(window.innerWidth, ",")).call(e, window.innerHeight, ")")
    }
    function getAppDuration(e) {
        return null == e ? tool.now() - globalValues.OPEN_TIME : e - globalValues.OPEN_TIME
    }
    function number2ByteArr(e, t) {
        if ((t = Math.round(t)) <= 0)
            return [];
        var r = [];
        do {
            var n = e % 256
        } while (e = (e - n) / 256,
        r.unshift(n),
        r.length != t);
        return r
    }
    function byteArr2Number(r) {
        var n = 0;
        return r.forEach(function(e, t) {
            n += e * Math.pow(256, r.length - 1 - t)
        }),
        n
    }
    function string2Utf8Arr(e) {
        for (var t, r = [], n = encodeURIComponent(e), o = 0; o < n.length; o++)
            "%" == n[o] ? (t = n[o + 1] + n[o + 2],
            r.push(parseInt(t, 16)),
            o += 2) : r.push(n[o].charCodeAt(0));
        return r
    }
    function utf8Arr2String(e) {
        for (var t = "", r = 0; r < e.length; r++)
            t = (t = (t += "%") + "".concat(((e[r] - e[r] % 16) / 16).toString(16)[0])) + "".concat((e[r] % 16).toString(16)[0]);
        try {
            t = decodeURIComponent(t)
        } catch (e) {
            t = ""
        }
        return t
    }
    var inherits = {
        exports: {}
    }
      , $$8 = _export
      , DESCRIPTORS$4 = descriptors
      , create$6 = objectCreate
      , path$7 = ($$8({
        target: "Object",
        stat: !0,
        sham: !DESCRIPTORS$4
    }, {
        create: create$6
    }),
    path$m)
      , Object$2 = path$7.Object
      , create$5 = function(e, t) {
        return Object$2.create(e, t)
    }
      , parent$b = create$5
      , create$4 = parent$b
      , parent$a = create$4
      , create$3 = parent$a
      , create$2 = create$3
      , setPrototypeOf$5 = {
        exports: {}
    }
      , $$7 = _export
      , setPrototypeOf$4 = objectSetPrototypeOf
      , path$6 = ($$7({
        target: "Object",
        stat: !0
    }, {
        setPrototypeOf: setPrototypeOf$4
    }),
    path$m)
      , setPrototypeOf$3 = path$6.Object.setPrototypeOf
      , parent$9 = setPrototypeOf$3
      , setPrototypeOf$2 = parent$9
      , parent$8 = setPrototypeOf$2
      , setPrototypeOf$1 = parent$8
      , setPrototypeOf = setPrototypeOf$1
      , _inherits = (!function(r) {
        var n = setPrototypeOf;
        function o(e, t) {
            return r.exports = o = n || function(e, t) {
                return e.__proto__ = t,
                e
            }
            ,
            r.exports.default = r.exports,
            r.exports.__esModule = !0,
            o(e, t)
        }
        r.exports = o,
        r.exports.default = r.exports,
        r.exports.__esModule = !0
    }(setPrototypeOf$5),
    !function(e) {
        var r = create$2
          , n = setPrototypeOf$5.exports;
        e.exports = function(e, t) {
            if ("function" != typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function");
            e.prototype = r(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && n(e, t)
        }
        ,
        e.exports.default = e.exports,
        e.exports.__esModule = !0
    }(inherits),
    getDefaultExportFromCjs(inherits.exports))
      , possibleConstructorReturn = {
        exports: {}
    }
      , assertThisInitialized = {
        exports: {}
    }
      , _possibleConstructorReturn = (!function(e) {
        e.exports = function(e) {
            if (void 0 === e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }
        ,
        e.exports.default = e.exports,
        e.exports.__esModule = !0
    }(assertThisInitialized),
    !function(e) {
        var r = _typeof$1.exports.default
          , n = assertThisInitialized.exports;
        e.exports = function(e, t) {
            if (t && ("object" === r(t) || "function" == typeof t))
                return t;
            if (void 0 !== t)
                throw new TypeError("Derived constructors may only return object or undefined");
            return n(e)
        }
        ,
        e.exports.default = e.exports,
        e.exports.__esModule = !0
    }(possibleConstructorReturn),
    getDefaultExportFromCjs(possibleConstructorReturn.exports))
      , getPrototypeOf$4 = {
        exports: {}
    }
      , $$6 = _export
      , fails$4 = fails$o
      , toObject$1 = toObject$d
      , nativeGetPrototypeOf = objectGetPrototypeOf
      , CORRECT_PROTOTYPE_GETTER = correctPrototypeGetter
      , FAILS_ON_PRIMITIVES$1 = fails$4(function() {
        nativeGetPrototypeOf(1)
    })
      , path$5 = ($$6({
        target: "Object",
        stat: !0,
        forced: FAILS_ON_PRIMITIVES$1,
        sham: !CORRECT_PROTOTYPE_GETTER
    }, {
        getPrototypeOf: function(e) {
            return nativeGetPrototypeOf(toObject$1(e))
        }
    }),
    path$m)
      , getPrototypeOf$3 = path$5.Object.getPrototypeOf
      , parent$7 = getPrototypeOf$3
      , getPrototypeOf$2 = parent$7
      , parent$6 = getPrototypeOf$2
      , getPrototypeOf$1 = parent$6
      , getPrototypeOf = getPrototypeOf$1
      , _getPrototypeOf = (!function(t) {
        var r = setPrototypeOf
          , n = getPrototypeOf;
        function o(e) {
            return t.exports = o = r ? n : function(e) {
                return e.__proto__ || n(e)
            }
            ,
            t.exports.default = t.exports,
            t.exports.__esModule = !0,
            o(e)
        }
        t.exports = o,
        t.exports.default = t.exports,
        t.exports.__esModule = !0
    }(getPrototypeOf$4),
    getDefaultExportFromCjs(getPrototypeOf$4.exports))
      , defineProperty$1 = {
        exports: {}
    }
      , _defineProperty = (!function(e) {
        var n = defineProperty$5;
        e.exports = function(e, t, r) {
            return t in e ? n(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = r,
            e
        }
        ,
        e.exports.default = e.exports,
        e.exports.__esModule = !0
    }(defineProperty$1),
    getDefaultExportFromCjs(defineProperty$1.exports))
      , path$4 = path$m
      , getOwnPropertySymbols$2 = path$4.Object.getOwnPropertySymbols
      , parent$5 = getOwnPropertySymbols$2
      , getOwnPropertySymbols$1 = parent$5
      , getOwnPropertySymbols = getOwnPropertySymbols$1
      , getOwnPropertyDescriptor$3 = {
        exports: {}
    }
      , $$5 = _export
      , fails$3 = fails$o
      , toIndexedObject$1 = toIndexedObject$9
      , nativeGetOwnPropertyDescriptor = objectGetOwnPropertyDescriptor.f
      , DESCRIPTORS$3 = descriptors
      , FAILS_ON_PRIMITIVES = fails$3(function() {
        nativeGetOwnPropertyDescriptor(1)
    })
      , FORCED$1 = !DESCRIPTORS$3 || FAILS_ON_PRIMITIVES
      , path$3 = ($$5({
        target: "Object",
        stat: !0,
        forced: FORCED$1,
        sham: !DESCRIPTORS$3
    }, {
        getOwnPropertyDescriptor: function(e, t) {
            return nativeGetOwnPropertyDescriptor(toIndexedObject$1(e), t)
        }
    }),
    path$m)
      , Object$1 = path$3.Object
      , getOwnPropertyDescriptor$2 = getOwnPropertyDescriptor$3.exports = function(e, t) {
        return Object$1.getOwnPropertyDescriptor(e, t)
    }
      , parent$4 = (Object$1.getOwnPropertyDescriptor.sham && (getOwnPropertyDescriptor$2.sham = !0),
    getOwnPropertyDescriptor$3.exports)
      , getOwnPropertyDescriptor$1 = parent$4
      , getOwnPropertyDescriptor = getOwnPropertyDescriptor$1
      , getBuiltIn$2 = getBuiltIn$c
      , getOwnPropertyNamesModule = objectGetOwnPropertyNames
      , getOwnPropertySymbolsModule$1 = objectGetOwnPropertySymbols
      , anObject$2 = anObject$e
      , ownKeys$2 = getBuiltIn$2("Reflect", "ownKeys") || function(e) {
        var t = getOwnPropertyNamesModule.f(anObject$2(e))
          , r = getOwnPropertySymbolsModule$1.f;
        return r ? t.concat(r(e)) : t
    }
      , $$4 = _export
      , DESCRIPTORS$2 = descriptors
      , ownKeys$1 = ownKeys$2
      , toIndexedObject = toIndexedObject$9
      , getOwnPropertyDescriptorModule = objectGetOwnPropertyDescriptor
      , createProperty = createProperty$5
      , path$2 = ($$4({
        target: "Object",
        stat: !0,
        sham: !DESCRIPTORS$2
    }, {
        getOwnPropertyDescriptors: function(e) {
            for (var t, r, n = toIndexedObject(e), o = getOwnPropertyDescriptorModule.f, a = ownKeys$1(n), i = {}, s = 0; a.length > s; )
                void 0 !== (r = o(n, t = a[s++])) && createProperty(i, t, r);
            return i
        }
    }),
    path$m)
      , getOwnPropertyDescriptors$2 = path$2.Object.getOwnPropertyDescriptors
      , parent$3 = getOwnPropertyDescriptors$2
      , getOwnPropertyDescriptors$1 = parent$3
      , getOwnPropertyDescriptors = getOwnPropertyDescriptors$1
      , aFunction$1 = aFunction$a
      , isObject$2 = isObject$i
      , slice = [].slice
      , factories = {}
      , construct$3 = function(e, t, r) {
        if (!(t in factories)) {
            for (var n = [], o = 0; o < t; o++)
                n[o] = "a[" + o + "]";
            factories[t] = Function("C,a", "return new C(" + n.join(",") + ")")
        }
        return factories[t](e, r)
    }
      , functionBind = Function.bind || function(t) {
        var r = aFunction$1(this)
          , n = slice.call(arguments, 1)
          , o = function() {
            var e = n.concat(slice.call(arguments));
            return this instanceof o ? construct$3(r, e.length, e) : r.apply(t, e)
        };
        return isObject$2(r.prototype) && (o.prototype = r.prototype),
        o
    }
      , $$3 = _export
      , getBuiltIn$1 = getBuiltIn$c
      , aFunction = aFunction$a
      , anObject$1 = anObject$e
      , isObject$1 = isObject$i
      , create$1 = objectCreate
      , bind$1 = functionBind
      , fails$2 = fails$o
      , nativeConstruct = getBuiltIn$1("Reflect", "construct")
      , NEW_TARGET_BUG = fails$2(function() {
        function e() {}
        return !(nativeConstruct(function() {}, [], e)instanceof e)
    })
      , ARGS_BUG = !fails$2(function() {
        nativeConstruct(function() {})
    })
      , FORCED = NEW_TARGET_BUG || ARGS_BUG
      , path$1 = ($$3({
        target: "Reflect",
        stat: !0,
        forced: FORCED,
        sham: FORCED
    }, {
        construct: function(e, t) {
            aFunction(e),
            anObject$1(t);
            var r = arguments.length < 3 ? e : aFunction(arguments[2]);
            if (ARGS_BUG && !NEW_TARGET_BUG)
                return nativeConstruct(e, t, r);
            if (e == r) {
                switch (t.length) {
                case 0:
                    return new e;
                case 1:
                    return new e(t[0]);
                case 2:
                    return new e(t[0],t[1]);
                case 3:
                    return new e(t[0],t[1],t[2]);
                case 4:
                    return new e(t[0],t[1],t[2],t[3])
                }
                var n = [null];
                return n.push.apply(n, t),
                new (bind$1.apply(e, n))
            }
            n = r.prototype,
            r = create$1(isObject$1(n) ? n : Object.prototype),
            n = Function.apply.call(e, r, t);
            return isObject$1(n) ? n : r
        }
    }),
    path$m)
      , construct$2 = path$1.Reflect.construct
      , parent$2 = construct$2
      , construct$1 = parent$2
      , construct = construct$1
      , store = {};
    function _createSuper(r) {
        var n = _isNativeReflectConstruct();
        return function() {
            var e, t = _getPrototypeOf(r);
            return e = n ? (e = _getPrototypeOf(this).constructor,
            construct(t, arguments, e)) : t.apply(this, arguments),
            _possibleConstructorReturn(this, e)
        }
    }
    function _isNativeReflectConstruct() {
        if ("undefined" == typeof Reflect || !construct)
            return !1;
        if (construct.sham)
            return !1;
        if ("function" == typeof Proxy)
            return !0;
        try {
            return Boolean.prototype.valueOf.call(construct(Boolean, [], function() {})),
            !0
        } catch (e) {
            return !1
        }
    }
    function ownKeys(t, e) {
        var r, n = keys(t);
        return getOwnPropertySymbols && (r = getOwnPropertySymbols(t),
        e && (r = filter(r).call(r, function(e) {
            return getOwnPropertyDescriptor(t, e).enumerable
        })),
        n.push.apply(n, r)),
        n
    }
    function _objectSpread(t) {
        for (var e = 1; e < arguments.length; e++) {
            var r = null != arguments[e] ? arguments[e] : {};
            e % 2 ? ownKeys(Object(r), !0).forEach(function(e) {
                _defineProperty(t, e, r[e])
            }) : getOwnPropertyDescriptors ? Object.defineProperties(t, getOwnPropertyDescriptors(r)) : ownKeys(Object(r)).forEach(function(e) {
                Object.defineProperty(t, e, getOwnPropertyDescriptor(r, e))
            })
        }
        return t
    }
    var ZdHeartBeat = function() {
        function e() {
            _classCallCheck(this, e),
            this.postDataType = POST_DATA_TYPE.heartbeat,
            this.seq = 0,
            this.timestamp = tool.now()
        }
        return _createClass(e, [{
            key: "getPostData",
            value: function() {
                return []
            }
        }]),
        e
    }(), ZdCommonAck = function() {
        function t(e) {
            _classCallCheck(this, t),
            this.postDataType = POST_DATA_TYPE.commonAck,
            this.seq = e,
            this.timestamp = tool.now()
        }
        return _createClass(t, [{
            key: "getPostData",
            value: function() {
                return []
            }
        }]),
        t
    }(), ZdUserInfo = function() {
        function r(e, t) {
            _classCallCheck(this, r),
            this.ptt = e,
            this.userid = t,
            this.postDataType = POST_DATA_TYPE.userInfo,
            this.seq = 0,
            this.timestamp = tool.now()
        }
        return _createClass(r, [{
            key: "updateScriptStatus",
            value: function(e) {
                this.scriptStatus = "object" == _typeof(e) ? stringify(e) : e
            }
        }, {
            key: "getPostData",
            value: function() {
                var e, t = {
                    ptt: (this.ptt || 0) + "",
                    u: this.userid || ""
                }, t = (this.scriptStatus && (t.script_status = this.scriptStatus),
                string2Utf8Arr(stringify(t)));
                return t.unshift.apply(t, concat(e = [0, 5]).call(e, _toConsumableArray(number2ByteArr(this.timestamp, 8)))),
                t
            }
        }]),
        r
    }(), ZdManualEvent = function() {
        function o(e, t, r, n) {
            _classCallCheck(this, o),
            this.eventName = e,
            this.eventContent = t,
            this.url = r,
            this.v3 = n,
            this.postDataType = POST_DATA_TYPE.manualEvent,
            this.timestamp = tool.now()
        }
        return _createClass(o, [{
            key: "updateScriptStatus",
            value: function(e) {
                this.scriptStatus = "object" == _typeof(e) ? stringify(e) : e
            }
        }, {
            key: "getPostData",
            value: function() {
                var e, t = {
                    event_name: this.eventName,
                    ud: this.eventContent,
                    v3: this.v3,
                    last_page_token: getLastPageToken(),
                    web_page_url: getPageUrl(),
                    web_page_title: getPageTitle()
                }, t = (this.scriptStatus && (t.script_status = this.scriptStatus),
                string2Utf8Arr(stringify(t)));
                return t.unshift.apply(t, concat(e = [0, 5]).call(e, _toConsumableArray(number2ByteArr(getAppDuration(this.timestamp), 4)), _toConsumableArray(number2ByteArr(this.timestamp, 8)), _toConsumableArray(number2ByteArr(this.pttIndex || 0, 4)))),
                t
            }
        }]),
        o
    }(), ZdAutoEvent = function() {
        function o(e, t, r, n) {
            _classCallCheck(this, o),
            this.eventType = e,
            this.timestamp = t,
            this.url = r,
            this.getEventJson = n,
            this.postDataType = POST_DATA_TYPE.autoEvent,
            this.seq = 0,
            this.v3 = globalVariable.strTokenReturned || ""
        }
        return _createClass(o, [{
            key: "updateScriptStatus",
            value: function(e) {
                this.scriptStatus = "object" === _typeof(e) ? stringify(e) : e
            }
        }, {
            key: "getPostData",
            value: function() {
                try {
                    var e, t, r = this.getEventJson(), n = [];
                    return this.eventType == EVENT_TYPE.ZDEN_TouchMove ? n = this.getEventJson() : "object" === _typeof(r) && (t = _objectSpread(_objectSpread({}, r), {}, {
                        v3: this.v3,
                        last_page_token: getLastPageToken()
                    }),
                    n = string2Utf8Arr(stringify(t))),
                    n.unshift.apply(n, concat(e = [this.eventType, 5]).call(e, _toConsumableArray(number2ByteArr(getAppDuration(this.timestamp), 4)), _toConsumableArray(number2ByteArr(this.timestamp, 8)), _toConsumableArray(number2ByteArr(this.pttIndex || 0, 4)))),
                    n
                } catch (e) {
                    console.error("Error in getPostData:", e)
                }
            }
        }]),
        o
    }(), ZdTouchEvent = function() {
        _inherits(o, ZdAutoEvent);
        var n = _createSuper(o);
        function o(e, t) {
            var r;
            return _classCallCheck(this, o),
            (r = n.call(this, EVENT_TYPE.ZDEN_TouchMove, e[e.length - 1][2].t, t, function() {
                var t = [];
                return t.push.apply(t, _toConsumableArray(number2ByteArr(e.length, 1))),
                r.touchPoints.forEach(function(e) {
                    e.forEach(function(e) {
                        t = concat(t).call(t, number2ByteArr(e.x, 2), number2ByteArr(e.y, 2), number2ByteArr(e.t, 2))
                    })
                }),
                t
            })).touchPoints = e,
            r.url = t,
            r
        }
        return o
    }(), ZdClickEvent = function() {
        _inherits(c, ZdAutoEvent);
        var l = _createSuper(c);
        function c(e, t, r, n, o, a, i) {
            var s;
            return _classCallCheck(this, c),
            (s = l.call(this, EVENT_TYPE.ZDEN_Click, o, i, function() {
                var e = {
                    x: s.x,
                    y: s.y,
                    target: s.target,
                    elementInfo: s.elementInfo.toJSONString()
                };
                return s.scriptStatus && (e.script_status = s.scriptStatus),
                e
            })).x = e,
            s.y = t,
            s.target = r,
            s.tgtLength = n,
            s.timestamp = o,
            s.elementInfo = a,
            s.url = i,
            s
        }
        return c
    }(), ZdTypingEvent = function() {
        _inherits(l, ZdAutoEvent);
        var s = _createSuper(l);
        function l(e, t, r, n, o, a) {
            var i;
            return _classCallCheck(this, l),
            (i = s.call(this, e, n, a, function() {
                var e = {};
                return i.length && (e.text_length = i.length),
                i.scriptStatus && (e.script_status = i.scriptStatus),
                i.elementInfo && (e.elementInfo = i.elementInfo.toJSONString()),
                e.target = i.target,
                e
            })).type = e,
            i.target = t,
            i.length = r,
            i.timestamp = n,
            i.elementInfo = o,
            i.url = a,
            i
        }
        return l
    }(), ZdFocusEvent = function() {
        _inherits(s, ZdAutoEvent);
        var i = _createSuper(s);
        function s(e, t, r, n, o) {
            var a;
            return _classCallCheck(this, s),
            (a = i.call(this, e, r, o, function() {
                var e = {};
                return a.scriptStatus && (e.script_status = a.scriptStatus),
                a.elementInfo && (e.elementInfo = a.elementInfo.toJSONString()),
                e.target = a.target,
                e
            })).type = e,
            a.target = t,
            a.timestamp = r,
            a.elementInfo = n,
            a.url = o,
            a
        }
        return s
    }(), ZdBlurEvent = function() {
        _inherits(s, ZdAutoEvent);
        var i = _createSuper(s);
        function s(e, t, r, n, o) {
            var a;
            return _classCallCheck(this, s),
            (a = i.call(this, e, r, o, function() {
                var e = {};
                return a.scriptStatus && (e.script_status = a.scriptStatus),
                a.elementInfo && (e.elementInfo = a.elementInfo.toJSONString()),
                e.target = a.target,
                e
            })).type = e,
            a.target = t,
            a.timestamp = r,
            a.elementInfo = n,
            a.url = o,
            a
        }
        return s
    }(), ZdAutofillEvent = function() {
        _inherits(c, ZdAutoEvent);
        var l = _createSuper(c);
        function c(e, t, r, n, o, a, i) {
            var s;
            return _classCallCheck(this, c),
            (s = l.call(this, e, o, i, function() {
                var e = {
                    autofill_type: s.autofill_type
                };
                return s.length && (e.text_length = s.length),
                s.scriptStatus && (e.script_status = s.scriptStatus),
                s.elementInfo && (e.elementInfo = s.elementInfo.toJSONString()),
                e.target = s.target,
                e
            })).type = e,
            s.target = t,
            s.length = r,
            s.autofill_type = n,
            s.timestamp = o,
            s.elementInfo = a,
            s.url = i,
            s
        }
        return c
    }(), ZdPageEvent = function() {
        _inherits(i, ZdAutoEvent);
        var a = _createSuper(i);
        function i(e, t, r, n) {
            var o;
            return _classCallCheck(this, i),
            (o = a.call(this, e, n, r, function() {
                var e = {
                    web_page_url: o.url,
                    web_page_title: o.pageTitle
                };
                return o.scriptStatus && (e.script_status = o.scriptStatus),
                e
            })).type = e,
            o.pageTitle = t,
            o.url = r,
            o.timestamp = n,
            o
        }
        return i
    }(), ZdResizeEvent = function() {
        _inherits(a, ZdAutoEvent);
        var o = _createSuper(a);
        function a(e, t, r) {
            var n;
            return _classCallCheck(this, a),
            (n = o.call(this, EVENT_TYPE.ZDEN_Resize, t, r, function() {
                var e = {
                    web_winsize: n.windowSize,
                    j43: getAvailableScreenResolution("height"),
                    j44: getAvailableScreenResolution("width"),
                    j45: getAvailableScreenResolution("top"),
                    j46: getAvailableScreenResolution("left")
                };
                return n.scriptStatus && (e.script_status = n.scriptStatus),
                e
            })).windowSize = e,
            n.timestamp = t,
            n.url = r,
            n
        }
        return a
    }(), ZdAjaxEvent = function() {
        _inherits(a, ZdAutoEvent);
        var o = _createSuper(a);
        function a(e, t, r) {
            var n;
            return _classCallCheck(this, a),
            (n = o.call(this, EVENT_TYPE.ZDEN_NetworkRequest, r, t, function() {
                var e = {
                    web_req_uri: n.url,
                    web_req_mothed: n.method
                };
                return n.scriptStatus && (e.script_status = n.scriptStatus),
                e
            })).method = e,
            n.url = t,
            n.timestamp = r,
            n
        }
        return a
    }(), ZdBatteryEvent = function() {
        _inherits(a, ZdAutoEvent);
        var o = _createSuper(a);
        function a(e, t, r) {
            var n;
            return _classCallCheck(this, a),
            (n = o.call(this, EVENT_TYPE.ZDEN_BatteryChange, t, r, function() {
                var e = {
                    j50: n.batteryInfo
                };
                return n.scriptStatus && (e.script_status = n.scriptStatus),
                e
            })).batteryInfo = e,
            n.timestamp = t,
            n.url = r,
            n
        }
        return a
    }(), ZdBasicInfoEvent = function() {
        function t(e) {
            _classCallCheck(this, t),
            this.postDataType = POST_DATA_TYPE.deviceBasicInfo,
            this.seq = 0,
            this.info = preHandleData(e.info),
            this.info.scriptv = store.scriptVersion,
            this.timestamp = e.timestamp || tool.now()
        }
        return _createClass(t, [{
            key: "getPostData",
            value: function() {
                var e = this.info;
                try {
                    e = stringify(this.info)
                } catch (e) {}
                logger.log("Basic info", this.info);
                e = string2Utf8Arr(e);
                return e.unshift(0, 5),
                e
            }
        }]),
        t
    }(), CalculateResult = function() {
        function r(e, t) {
            _classCallCheck(this, r),
            this.data = e,
            this.timestamp = t,
            this.postDataType = POST_DATA_TYPE.calCmdUp,
            this.seq = 0
        }
        return _createClass(r, [{
            key: "getPostData",
            value: function() {
                var e, t = this.data;
                try {
                    t = stringify(t)
                } catch (e) {}
                t = string2Utf8Arr(t);
                return t.unshift.apply(t, concat(e = [0, 5]).call(e, _toConsumableArray(number2ByteArr(this.timestamp, 8)))),
                t
            }
        }]),
        r
    }(), InternalEvent = function() {
        _inherits(a, ZdAutoEvent);
        var o = _createSuper(a);
        function a(e, t, r) {
            var n;
            return _classCallCheck(this, a),
            (n = o.call(this, EVENT_TYPE.ZDEN_Inner, t, r, function() {
                return n.fieldData
            })).fieldData = e,
            n.timestamp = t,
            n.url = r,
            n.fieldData = preHandleData(n.fieldData),
            n
        }
        return a
    }(), POST_DATA_TYPE, DOWN_DATA_TYPE, EVENT_TYPE, DESIRED_CLICK_EVENT_ELEMENTS = (!function(e) {
        e[e.heartbeat = 0] = "heartbeat",
        e[e.deviceBasicInfo = 1] = "deviceBasicInfo",
        e[e.autoEvent = 2] = "autoEvent",
        e[e.manualEvent = 3] = "manualEvent",
        e[e.userInfo = 4] = "userInfo",
        e[e.calCmdUp = 7] = "calCmdUp",
        e[e.edgeCalUp = 9] = "edgeCalUp",
        e[e.commonAck = 10] = "commonAck"
    }(POST_DATA_TYPE = POST_DATA_TYPE || {}),
    !function(e) {
        e[e.configDown = 5] = "configDown",
        e[e.calCmdDown = 6] = "calCmdDown",
        e[e.edgeCalDown = 8] = "edgeCalDown",
        e[e.commonAck = 10] = "commonAck",
        e[e.heartbeatAck = 11] = "heartbeatAck",
        e[e.dynamicSwitch = 12] = "dynamicSwitch",
        e[e.authFailed = 13] = "authFailed"
    }(DOWN_DATA_TYPE = DOWN_DATA_TYPE || {}),
    !function(e) {
        e[e.ZDEN_Onload = 12] = "ZDEN_Onload",
        e[e.ZDEN_BeforeUnload = 13] = "ZDEN_BeforeUnload",
        e[e.ZDEN_PageJumpManual = 14] = "ZDEN_PageJumpManual",
        e[e.ZDEN_PageJumpH5 = 15] = "ZDEN_PageJumpH5",
        e[e.ZDEN_Click = 16] = "ZDEN_Click",
        e[e.ZDEN_TouchMove = 11] = "ZDEN_TouchMove",
        e[e.ZDEN_Typing = 9] = "ZDEN_Typing",
        e[e.ZDEN_Paste = 18] = "ZDEN_Paste",
        e[e.ZDEN_Resize = 19] = "ZDEN_Resize",
        e[e.ZDEN_NetworkRequest = 17] = "ZDEN_NetworkRequest",
        e[e.ZDEN_BatteryChange = 20] = "ZDEN_BatteryChange",
        e[e.ZDEN_GoBack = 4] = "ZDEN_GoBack",
        e[e.ZDEN_GoFront = 5] = "ZDEN_GoFront",
        e[e.ZDEN_Autofill = 21] = "ZDEN_Autofill",
        e[e.ZDEN_Inner = 100] = "ZDEN_Inner",
        e[e.ZDEN_Focus = 22] = "ZDEN_Focus",
        e[e.ZDEN_Blur = 23] = "ZDEN_Blur"
    }(EVENT_TYPE = EVENT_TYPE || {}),
    [{
        tagName: "BUTTON"
    }, {
        tagName: "A"
    }, {
        tagName: "INPUT",
        types: ["button", "submit", "password", "text"]
    }]), DESIRED_INPUT_EVENT_ELEMENTS = [{
        tagName: "INPUT",
        types: ["text", "password", "email", "search", "url", "tel", "number", "checkbox"]
    }, {
        tagName: "TEXTAREA"
    }], Collection = function() {
        function e() {
            _classCallCheck(this, e),
            this.listenOnLoad(),
            this.listenBeforeUnload(),
            this.listenPopstate(),
            this.listenPushstate(),
            this.listenClick(),
            this.listenFocus(),
            this.listenBlur(),
            this.listenTouch(),
            this.listenTyping(),
            this.listenPaste(),
            this.listenResize(),
            this.listenAjax(),
            this.listenBatteryChange(),
            this.listenPageVisibilityChange(),
            this.listenAutofill(),
            this.listenMouseMove()
        }
        return _createClass(e, [{
            key: "listenOnLoad",
            value: function() {
                "complete" == document.readyState || "interactive" == document.readyState ? store.eventCenter.addAutoEvent(new ZdPageEvent(EVENT_TYPE.ZDEN_Onload,getPageTitle(),getPageUrl(),tool.now())) : tool.on(document, "DOMContentLoaded", function() {
                    return store.eventCenter.addAutoEvent(new ZdPageEvent(EVENT_TYPE.ZDEN_Onload,getPageTitle(),getPageUrl(),tool.now()))
                })
            }
        }, {
            key: "listenBeforeUnload",
            value: function() {
                tool.on(window, "beforeunload", function() {
                    return store.eventCenter.addAutoEvent(new ZdPageEvent(EVENT_TYPE.ZDEN_BeforeUnload,getPageTitle(),getPageUrl(),tool.now()))
                })
            }
        }, {
            key: "listenPopstate",
            value: function() {
                tool.on(window, "popstate", function() {
                    var e = tool.now()
                      , t = getPageUrl();
                    setTimeout$1(function() {
                        store.eventCenter.addAutoEvent(new ZdPageEvent(EVENT_TYPE.ZDEN_PageJumpManual,getPageTitle(),t,e))
                    }, 0)
                }, !0)
            }
        }, {
            key: "listenPushstate",
            value: function() {
                var r = null
                  , n = "";
                try {
                    r = window.history.replaceState
                } catch (e) {}
                r && (window.history.replaceState = function() {
                    var e = r.apply(window.history, arguments)
                      , t = getPageUrl() || arguments[2];
                    return t !== n && (n = t,
                    store.eventCenter.addAutoEvent(new ZdPageEvent(EVENT_TYPE.ZDEN_PageJumpH5,getPageTitle(),t,tool.now()))),
                    e
                }
                );
                var o = null;
                try {
                    o = window.history.pushState
                } catch (e) {}
                o && (window.history.pushState = function() {
                    var e = o.apply(window.history, arguments)
                      , t = getPageUrl() || arguments[2];
                    return t !== n && (n = t,
                    store.eventCenter.addAutoEvent(new ZdPageEvent(EVENT_TYPE.ZDEN_PageJumpH5,getPageTitle(),t,tool.now()))),
                    e
                }
                )
            }
        }, {
            key: "listenClick",
            value: function() {
                var n = this;
                tool.on(window, "click", function(e) {
                    var t = 0;
                    try {
                        t = e.target.value.length
                    } catch (e) {}
                    var r = e.target
                      , r = n.getUsefulElementInfo(r, DESIRED_CLICK_EVENT_ELEMENTS, 5);
                    store.eventCenter.addAutoEvent(new ZdClickEvent(e.pageX,e.pageY,n.getTargetDescription(e.target),t,tool.now(),r,window.location.href))
                }, !0)
            }
        }, {
            key: "getUsefulElementInfo",
            value: function(e, t, r) {
                var n = null;
                isDesiredElement(e, t) && (logger.log("Found a useful current element:", e),
                n = e),
                n || ((e = getMatchingAncestor(e, r, t)) ? (logger.log("Found a useful ancestor:", e),
                n = e) : logger.log("No useful ancestor found."));
                r = new ElementInfo;
                return n ? (r = getElementInfo(n),
                logger.log("ElementInfo of useful element:", r)) : logger.log("No useful element found."),
                r
            }
        }, {
            key: "listenTouch",
            value: function() {
                var t = new TouchPoints;
                function e(e) {
                    e.changedTouches && t.removePoints(e.changedTouches),
                    0 == e.touches.length && 0 < (e = t.calculate()).length && store.eventCenter.addAutoEvent(new ZdTouchEvent(e,window.location.href))
                }
                tool.on(window, "touchstart", function(e) {
                    e.changedTouches && t.addPoints(e.changedTouches)
                }, !0),
                tool.on(window, "touchmove", function(e) {
                    e.changedTouches && t.logMoveForMultPoints(e.changedTouches)
                }, !0),
                tool.on(window, "touchend", e, !0),
                tool.on(window, "touchcancel", e, !0)
            }
        }, {
            key: "listenTyping",
            value: function() {
                var n = this;
                tool.on(window, "keyup", function(e) {
                    var t = 0;
                    try {
                        t = e.target.value.length
                    } catch (e) {}
                    var r = e.target
                      , r = n.getUsefulElementInfo(r, DESIRED_INPUT_EVENT_ELEMENTS, 5);
                    store.eventCenter.addAutoEvent(new ZdTypingEvent(EVENT_TYPE.ZDEN_Typing,n.getTargetDescription(e.target),t,tool.now(),r,window.location.href))
                }, !0)
            }
        }, {
            key: "listenFocus",
            value: function() {
                var r = this;
                tool.on(window, "focusin", function(e) {
                    try {
                        e.target.value.length
                    } catch (e) {}
                    var t = e.target
                      , t = r.getUsefulElementInfo(t, DESIRED_INPUT_EVENT_ELEMENTS, 5);
                    store.eventCenter.addAutoEvent(new ZdFocusEvent(EVENT_TYPE.ZDEN_Focus,r.getTargetDescription(e.target),tool.now(),t,window.location.href))
                })
            }
        }, {
            key: "listenBlur",
            value: function() {
                var r = this;
                tool.on(window, "focusout", function(e) {
                    try {
                        e.target.value.length
                    } catch (e) {}
                    var t = e.target
                      , t = r.getUsefulElementInfo(t, DESIRED_INPUT_EVENT_ELEMENTS, 5);
                    store.eventCenter.addAutoEvent(new ZdBlurEvent(EVENT_TYPE.ZDEN_Blur,r.getTargetDescription(e.target),tool.now(),t,window.location.href))
                })
            }
        }, {
            key: "listenPaste",
            value: function() {
                var n = this;
                tool.on(window, "paste", function(r) {
                    setTimeout$1(function() {
                        var e = 0;
                        try {
                            e = r.target.value.length
                        } catch (e) {}
                        var t = r.target
                          , t = n.getUsefulElementInfo(t, DESIRED_INPUT_EVENT_ELEMENTS, 5);
                        store.eventCenter.addAutoEvent(new ZdTypingEvent(EVENT_TYPE.ZDEN_Paste,n.getTargetDescription(r.target),e,tool.now(),t,window.location.href))
                    }, 0)
                }, !0)
            }
        }, {
            key: "listenResize",
            value: function() {
                var t;
                tool.on(window, "resize", function() {
                    try {
                        clearTimeout(t)
                    } catch (e) {}
                    var e = tool.now();
                    t = setTimeout$1(function() {
                        store.eventCenter.addAutoEvent(new ZdResizeEvent(getWindowSize(),e,window.location.href))
                    }, 1e3)
                })
            }
        }, {
            key: "listenAjax",
            value: function() {
                try {
                    var t = window.XMLHttpRequest.prototype.open;
                    t && (window.XMLHttpRequest.prototype.open = function() {
                        var e = t.apply(this, arguments);
                        try {
                            store.eventCenter.addAutoEvent(new ZdAjaxEvent(arguments[0],arguments[1],tool.now()))
                        } catch (e) {}
                        return e
                    }
                    )
                } catch (e) {}
                try {
                    var n = window.fetch;
                    n && (window.fetch = function() {
                        var e = n.apply(this, arguments);
                        try {
                            var t = ""
                              , r = ""
                              , r = "string" == typeof arguments[0] ? (t = arguments[0],
                            arguments[1] && arguments[1].method || "GET") : (t = arguments[0] && arguments[0].url || "",
                            arguments[0] ? arguments[0].method || "GET" : "");
                            store.eventCenter.addAutoEvent(new ZdAjaxEvent(r,t,tool.now()))
                        } catch (e) {}
                        return e
                    }
                    )
                } catch (e) {}
            }
        }, {
            key: "listenBatteryChange",
            value: function() {
                var n = "";
                setInterval(function() {
                    getBattery().then(function(t) {
                        var r = "";
                        if ("string" == typeof t)
                            r = t;
                        else
                            try {
                                r = stringify(t)
                            } catch (e) {
                                r = t
                            }
                        n != r && (n = r,
                        store.eventCenter.addAutoEvent(new ZdBatteryEvent(r,tool.now(),window.location.href)))
                    })
                }, 6e4),
                getBattery().then(function(e) {
                    return n = stringify(e)
                })
            }
        }, {
            key: "getTargetDescription",
            value: function(e) {
                var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 0;
                if (!e)
                    return "";
                var r = (e.tagName || "").toLowerCase();
                if (e.id && (r += "#" + e.id),
                e.classList && e.classList.length && e.classList.item) {
                    var n = 0;
                    do {
                        var o = e.classList.item(n++)
                    } while (o.length < 50 && (r += "." + o),
                    n < e.classList.length && r.split(".").length < 4)
                }
                return r = t < 4 && "body" != e.tagName.toLowerCase() && "html" != e.tagName.toLowerCase() ? this.getTargetDescription(e.parentElement, t + 1) + ">" + r : r
            }
        }, {
            key: "listenPageVisibilityChange",
            value: function() {
                tool.on(document, "visibilitychange", function() {
                    "visible" == document.visibilityState ? store.eventCenter.addAutoEvent(new ZdPageEvent(EVENT_TYPE.ZDEN_GoFront,getPageTitle(),getPageUrl(),tool.now())) : store.eventCenter.addAutoEvent(new ZdPageEvent(EVENT_TYPE.ZDEN_GoBack,getPageTitle(),getPageUrl(),tool.now()))
                })
            }
        }, {
            key: "listenAutofill",
            value: function() {
                function i(e, t) {
                    var r = n.getUsefulElementInfo(e, DESIRED_INPUT_EVENT_ELEMENTS, 5);
                    store.eventCenter.addAutoEvent(new ZdAutofillEvent(EVENT_TYPE.ZDEN_Autofill,n.getTargetDescription(e),(e.value || "").length,t,tool.now(),r,window.location.href))
                }
                var n = this
                  , s = new map;
                tool.on(window, "paste", function(e) {
                    var t;
                    e && e.target && (e = {
                        value: (t = e.target).value || "",
                        pasting: !0
                    },
                    s.has(t) && (e.value = s.get(t).value),
                    s.set(t, e),
                    setTimeout$1(function() {
                        s.has(t) && s.set(t, {
                            value: s.get(t).value,
                            pasting: !1
                        })
                    }, 20))
                }, !0),
                tool.on(window, "beforeinput", function(e) {
                    var t;
                    e && e.target && (e = e.target,
                    t = {
                        value: s.has(e) ? s.get(e).value : e.value || "",
                        pasting: !!s.has(e) && s.get(e).pasting
                    },
                    s.set(e, t))
                }),
                tool.on(window, "input", function(e) {
                    try {
                        if ("input" != e.type.toLowerCase() || !includes(n = ["text", "password"]).call(n, e.target.type))
                            return
                    } catch (e) {
                        return void logger.error("autofill detection error -> native params error", e)
                    }
                    var t, r, n = e.target, o = n.value || "";
                    try {
                        if (!s.has(n))
                            return void (!e.inputType && 1 < o.length && i(n, 1));
                        if (s.get(n).pasting)
                            return;
                        var a = s.get(n).value;
                        if (1 < o.length - a.length && startsWith(o).call(o, a) && 1 < trim(t = o.replace(a, "")).call(t).length)
                            return i(n, 2);
                        if (!includes(o).call(o, a) && !includes(a).call(a, o) && 1 < o.length && 0 == filter(r = o.split("")).call(r, function(e) {
                            return 128 <= e.charCodeAt(0)
                        }).length)
                            return i(n, 3)
                    } catch (e) {
                        logger.error("autofill detection error", e)
                    } finally {
                        s.set(n, {
                            value: o,
                            pasting: !1
                        })
                    }
                }, !0),
                setInterval(function() {
                    s.forEach(function(e, t) {
                        document.contains(t) || s.delete(t)
                    })
                }, 1e4)
            }
        }, {
            key: "listenMouseMove",
            value: function() {
                tool.on(window, "mousemove", function(e) {
                    store.mouseMoveDb.save({
                        x: e.screenX,
                        y: e.screenY,
                        time: tool.now()
                    })
                })
            }
        }]),
        e
    }(), TouchPoints = function() {
        function e() {
            _classCallCheck(this, e),
            this.list = [],
            this.moveList = []
        }
        return _createClass(e, [{
            key: "findPoint",
            value: function(t) {
                var e;
                return find$1(e = this.list).call(e, function(e) {
                    return e.identifier == t.identifier
                })
            }
        }, {
            key: "pointExisted",
            value: function(t) {
                var e;
                return -1 != findIndex(e = this.list).call(e, function(e) {
                    return e.identifier == t.identifier
                })
            }
        }, {
            key: "addPoint",
            value: function(e) {
                this.pointExisted(e) || this.list.push(e)
            }
        }, {
            key: "addPoints",
            value: function(e) {
                for (var t = 0; t < e.length; t++)
                    this.addPoint(e[t])
            }
        }, {
            key: "removePoint",
            value: function(t) {
                var e;
                this.pointExisted(t) && splice(e = this.list).call(e, findIndex(e = this.list).call(e, function(e) {
                    return e.identifier == t.identifier
                }), 1)
            }
        }, {
            key: "removePoints",
            value: function(e) {
                for (var t = 0; t < e.length; t++)
                    this.removePoint(e[t])
            }
        }, {
            key: "logMove",
            value: function(t) {
                var e;
                this.pointExisted(t) && (e = findIndex(e = this.list).call(e, function(e) {
                    return e.identifier == t.identifier
                }),
                this.moveList[e] || (this.moveList[e] = []),
                this.moveList[e].push({
                    x: Math.round(t.clientX),
                    y: Math.round(t.clientY),
                    t: tool.now()
                }))
            }
        }, {
            key: "logMoveForMultPoints",
            value: function(e) {
                for (var t = 0; t < e.length; t++)
                    this.logMove(e[t])
            }
        }, {
            key: "calculate",
            value: function() {
                for (var n = this, o = [], e = 0; e < this.moveList.length; e++)
                    !function(e) {
                        e = n.moveList[e];
                        if (!e || 0 == e.length)
                            return;
                        var t = e[0].t
                          , r = (e.forEach(function(e) {
                            return e.t -= t
                        }),
                        Math.ceil(e.length / 2) - 1);
                        o.push([e[0], e[r], e[e.length - 1]])
                    }(e);
                return this.list = [],
                this.moveList = [],
                o
            }
        }]),
        e
    }(), BasicInfo = function() {
        function n(e, t, r) {
            _classCallCheck(this, n),
            this.field = ["ptt", "web_page_url", "web_page_title", "web_winsize", "zdv", "etcv", "u", "client", "v1", "v2", "v3", "u1", "j1", "j2", "j3", "j5", "j6", "j7", "j10", "j11", "j12", "j15", "j16", "j17", "j18", "j36", "j37", "j38", "j39", "j40", "j41", "j42", "j43", "j44", "j45", "j46", "j50", "j51", "j52", "j53", "j54", "j55", "j56", "j57", "j58", "j59", "j60", "j61", "j62", "j63", "j64", "j70", "j71", "j73"],
            this.ptt = t,
            this.userId = r,
            this.updateInfo(e)
        }
        return _createClass(n, [{
            key: "updateInfo",
            value: function(e) {
                e = e || (this.info || {}),
                this.info = {};
                var t, r, n = JSON.parse(stringify(e));
                for (t in this.fillBasicInfo(n),
                n)
                    includes(r = this.field).call(r, t) && (this.info[t] = n[t]);
                return this.info
            }
        }, {
            key: "fillBasicInfo",
            value: function(e) {
                e.web_page_url = getPageUrl(),
                e.web_page_title = getPageTitle(),
                e.web_winsize = getWindowSize(),
                e.ptt = this.ptt,
                e.zdv = globalValues.VERSION,
                e.client = concat(t = "".concat(window.location.protocol, "//")).call(t, window.location.host);
                var t = 1
                  , r = tool.getFromLocalStorage(LOCAL_STORAGE_ITEM.DVZDconfig);
                if (r)
                    try {
                        var n = JSON.parse(r);
                        "etcv"in n && "zdv"in n && n.zdv == globalValues.VERSION && (t = n.etcv)
                    } catch (e) {}
                e.etcv = t,
                this.userId && (e.u = this.userId)
            }
        }, {
            key: "getBasicEvent",
            value: function() {
                return this.updateInfo(),
                new ZdBasicInfoEvent({
                    info: this.info
                })
            }
        }, {
            key: "updatePtt",
            value: function(e) {
                this.ptt = e
            }
        }, {
            key: "updateUserId",
            value: function(e) {
                this.userId = e
            }
        }]),
        n
    }(), ColumnType, eventColumnsRaphael = (!function(e) {
        e.INTEGER = "INTEGER",
        e.DATETIME = "DATETIME",
        e.TEXT = "TEXT",
        e.FLOAT = "FLOAT"
    }(ColumnType = ColumnType || {}),
    ["e1", "e5", "d15", "v1", "v2", "v3", "v8", "v10", "v11", "v12", "v13", "u1", "j1", "j2", "j3", "j4", "j5", "j6", "j7", "j8", "j10", "j11", "j12", "j15", "j16", "j17", "j18", "j34", "j35", "j36", "j37", "j38", "j39", "j40", "j41", "j42", "j43", "j44", "j45", "j46", "j50", "j51", "j52", "j53", "j54", "j55", "j56", "j57", "j58", "j59", "j60", "j61", "j62", "j63", "j64", "j66", "j69", "j70", "j71", "j73"]), eventColumnsMap = new map, DvEvent = (eventColumnsMap.set("event_type", ColumnType.INTEGER),
    eventColumnsMap.set("event_code", ColumnType.INTEGER),
    eventColumnsMap.set("event_source", ColumnType.INTEGER),
    eventColumnsMap.set("event_ptt", ColumnType.INTEGER),
    eventColumnsMap.set("event_time", ColumnType.DATETIME),
    eventColumnsMap.set("event_app_duration", ColumnType.INTEGER),
    eventColumnsMap.set("event_index", ColumnType.INTEGER),
    eventColumnsMap.set("event_name", ColumnType.TEXT),
    eventColumnsMap.set("ud", ColumnType.TEXT),
    eventColumnsMap.set("u", ColumnType.TEXT),
    eventColumnsMap.set("click_x", ColumnType.INTEGER),
    eventColumnsMap.set("click_y", ColumnType.INTEGER),
    eventColumnsMap.set("tc_info", ColumnType.TEXT),
    eventColumnsMap.set("target", ColumnType.TEXT),
    eventColumnsMap.set("autofill_type", ColumnType.TEXT),
    eventColumnsMap.set("text_length", ColumnType.INTEGER),
    eventColumnsMap.set("web_page_url", ColumnType.TEXT),
    eventColumnsMap.set("web_page_title", ColumnType.TEXT),
    eventColumnsMap.set("web_winsize", ColumnType.TEXT),
    eventColumnsMap.set("web_req_uri", ColumnType.TEXT),
    eventColumnsMap.set("web_req_mothed", ColumnType.TEXT),
    eventColumnsMap.set("script_status", ColumnType.TEXT),
    eventColumnsMap.set("elementInfo", ColumnType.TEXT),
    eventColumnsMap.set("url", ColumnType.TEXT),
    eventColumnsMap.set("v3", ColumnType.TEXT),
    eventColumnsRaphael.forEach(function(e) {
        return eventColumnsMap.set(e, ColumnType.TEXT)
    }),
    function() {
        function r(e, t) {
            _classCallCheck(this, r),
            this.event_source = 5,
            this.event_ptt = e,
            this.event_time = t.timestamp,
            this.event_type = t.postDataType,
            this.event_app_duration = getAppDuration(this.event_time),
            this.fieldsInRaphael = {},
            t instanceof ZdAutoEvent ? this.parseFromAutoEvent(t) : t instanceof ZdBasicInfoEvent ? this.parseFromBasicInfo(t) : t instanceof ZdManualEvent ? this.parseFromManualEvent(t) : t instanceof ZdUserInfo && this.parseFromUserInfo(t)
        }
        return _createClass(r, [{
            key: "updatePtt",
            value: function(e) {
                this.event_ptt = e
            }
        }, {
            key: "getPtt",
            value: function() {
                return this.event_ptt
            }
        }, {
            key: "parseFromAutoEvent",
            value: function(e) {
                this.event_code = e.eventType,
                this.event_index = e.pttIndex,
                this.event_name = EVENT_TYPE[e.eventType],
                this.url = e.url,
                this.v3 = e.v3,
                e instanceof ZdTouchEvent ? this.tc_info = stringify(e.touchPoints) : e instanceof ZdClickEvent ? (this.click_x = e.x,
                this.click_y = e.y,
                this.text_length = e.tgtLength,
                this.target = e.target,
                this.elementInfo = stringify(e.elementInfo)) : e instanceof ZdTypingEvent ? (this.target = e.target,
                this.text_length = e.length,
                this.elementInfo = stringify(e.elementInfo)) : e instanceof ZdAutofillEvent ? (this.target = e.target,
                this.text_length = e.length,
                this.autofill_type = e.autofill_type,
                this.elementInfo = stringify(e.elementInfo)) : e instanceof ZdPageEvent ? (this.web_page_url = e.url,
                this.web_page_title = e.pageTitle) : e instanceof ZdResizeEvent ? this.web_winsize = e.windowSize : e instanceof ZdAjaxEvent ? (this.web_req_uri = e.url,
                this.web_req_mothed = e.method) : e instanceof ZdBatteryEvent ? this.fieldsInRaphael.j50 = e.batteryInfo : e instanceof InternalEvent ? (this.event_name += "_".concat(keys(e.fieldData).join("_")),
                this.fieldsInRaphael = e.fieldData) : (e instanceof ZdFocusEvent || e instanceof ZdBlurEvent) && (this.target = e.target,
                this.elementInfo = stringify(e.elementInfo))
            }
        }, {
            key: "parseFromBasicInfo",
            value: function(e) {
                this.event_name = "ZDEN_DeviceInfo";
                var t, r = eventColumnsRaphael;
                for (t in e.info)
                    !includes(r).call(r, t) || "string" != typeof e.info[t] && "number" != typeof e.info[t] || (this.fieldsInRaphael[t] = e.info[t])
            }
        }, {
            key: "parseFromManualEvent",
            value: function(e) {
                this.event_name = e.eventName,
                this.event_index = e.pttIndex,
                this.ud = e.eventContent,
                this.url = e.url,
                this.v3 = e.v3
            }
        }, {
            key: "parseFromUserInfo",
            value: function(e) {
                this.event_name = "ZDEN_UserChange",
                this.u = e.userid,
                this.event_ptt = e.ptt
            }
        }, {
            key: "updateScriptStatus",
            value: function(e) {
                null == e || "object" == _typeof(e) && 0 == keys(e).length ? this.script_status = "" : (e = !Array.isArray(e) && "object" == _typeof(e) ? stringify(e) : stringify({
                    data: e
                }),
                this.script_status = e)
            }
        }, {
            key: "getScriptStatus",
            value: function() {
                var e;
                return null != (e = this.script_status) ? e : null
            }
        }, {
            key: "getPostData",
            value: function() {
                var e, t = {};
                for (e in JSON.parse(stringify(this)))
                    !eventColumnsMap.has(e) || "number" != typeof this[e] && "string" != typeof this[e] || (t[e] = this[e]);
                if (this.fieldsInRaphael) {
                    var r, n = eventColumnsRaphael;
                    for (r in this.fieldsInRaphael) {
                        var o = this.fieldsInRaphael[r];
                        !includes(n).call(n, r) || "string" != typeof o && "number" != typeof o || (t[r] = o)
                    }
                }
                return t
            }
        }]),
        r
    }()), EdgeCalculation = function() {
        function t() {
            var e = this;
            _classCallCheck(this, t),
            this.inBackend = !1,
            tool.on(window, "focus", function() {
                return e.inBackend = !1
            }, !0),
            tool.on(window, "blur", function() {
                return e.inBackend = !0
            }, !0)
        }
        var o, a, i, s, l, r;
        return _createClass(t, [{
            key: "parseCalCmd",
            value: (r = _asyncToGenerator(regenerator.mark(function e(t) {
                var r, n, o, a, i;
                return regenerator.wrap(function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            if (t) {
                                e.next = 2;
                                break
                            }
                            return e.abrupt("return");
                        case 2:
                            if (logger.highlight("receive calculate command", JSON.parse(stringify(t))),
                            r = t.method,
                            n = t.uri,
                            o = t.headers,
                            a = t.body,
                            i = t.uuid,
                            r && n && i) {
                                e.next = 6;
                                break
                            }
                            return e.abrupt("return");
                        case 6:
                            e.prev = 6,
                            e.t0 = r.toUpperCase(),
                            e.next = "GET" === e.t0 ? 10 : "PUT" === e.t0 ? 13 : "DEL" === e.t0 ? 16 : "EXEC" === e.t0 ? 19 : 27;
                            break;
                        case 10:
                            return e.next = 12,
                            this.onGet(n, o, a, i);
                        case 12:
                            return e.abrupt("break", 28);
                        case 13:
                            return e.next = 15,
                            this.onPut(n, o, a, i);
                        case 15:
                            return e.abrupt("break", 28);
                        case 16:
                            return e.next = 18,
                            this.onDel(n, o, a, i);
                        case 18:
                            return e.abrupt("break", 28);
                        case 19:
                            if (this.inBackend)
                                throw logger.log("website is in backend, do not execute"),
                                ERROR_MSG.website_is_in_backend;
                            e.next = 24;
                            break;
                        case 24:
                            return e.next = 26,
                            this.onExec(n, o, a, i);
                        case 26:
                        case 27:
                            return e.abrupt("break", 28);
                        case 28:
                            e.next = 33;
                            break;
                        case 30:
                            e.prev = 30,
                            e.t1 = e.catch(6),
                            this.handleErrorOnCalcuteCommond(e.t1, r, i, n);
                        case 33:
                        case "end":
                            return e.stop()
                        }
                }, e, this, [[6, 30]])
            })),
            function(e) {
                return r.apply(this, arguments)
            }
            )
        }, {
            key: "parseUri",
            value: function(e) {
                var t = e.split("/");
                return t = startsWith(e).call(e, "/") ? slice$1(t).call(t, 1, t.length) : t
            }
        }, {
            key: "onPut",
            value: (l = _asyncToGenerator(regenerator.mark(function e(t, r, n, o) {
                var a, i, s, l, c;
                return regenerator.wrap(function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            if (c = this.parseUri(t),
                            i = r.version,
                            s = n,
                            l = c[0],
                            c = c[1],
                            s && "string" == typeof s && l && "string" == typeof l && c && "string" == typeof c && null != i && null != i) {
                                e.next = 7;
                                break
                            }
                            throw ERROR_MSG.parameter_error;
                        case 7:
                            if (0 == store.scriptManager.updateScript(c, l, s))
                                throw ERROR_MSG.failed_to_hot_update_script;
                            e.next = 10;
                            break;
                        case 10:
                            store.dvdb.saveScript(c, l, i, s),
                            includes(a = ["dv", "event", "feature", "library"]).call(a, l) && (store.scriptVersion[l][c] = i),
                            logger.log("successful save script", l, c),
                            this.sendSuccessCalculateResult("PUT", o, t);
                        case 14:
                        case "end":
                            return e.stop()
                        }
                }, e, this)
            })),
            function(e, t, r, n) {
                return l.apply(this, arguments)
            }
            )
        }, {
            key: "onExec",
            value: (s = _asyncToGenerator(regenerator.mark(function e(t, r, n, o) {
                var a, i, s;
                return regenerator.wrap(function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            if (i = this.parseUri(t),
                            a = i[0],
                            i = i[1],
                            a && "string" == typeof a && i && "string" == typeof i) {
                                e.next = 5;
                                break
                            }
                            throw ERROR_MSG.parameter_error;
                        case 5:
                            return e.next = 7,
                            store.scriptManager.onFeature(a, i, n);
                        case 7:
                            if ((s = e.sent).error)
                                throw s.error;
                            e.next = 10;
                            break;
                        case 10:
                            if (this.sendSuccessCalculateResult("EXEC", o, t, s.result),
                            s.result && s.result.virtual_call && "object" == _typeof(s.result.virtual_call) && "uri"in s.result.virtual_call && "string" == typeof s.result.virtual_call.uri && "headers"in s.result.virtual_call && "object" == _typeof(s.result.virtual_call.headers))
                                return s.result.virtual_call.headers.type = 1,
                                e.prev = 13,
                                e.next = 16,
                                this.onGet(s.result.virtual_call.uri, s.result.virtual_call.headers, null, null);
                            e.next = 21;
                            break;
                        case 16:
                            e.next = 21;
                            break;
                        case 18:
                            e.prev = 18,
                            e.t0 = e.catch(13),
                            logger.error(e.t0);
                        case 21:
                        case "end":
                            return e.stop()
                        }
                }, e, this, [[13, 18]])
            })),
            function(e, t, r, n) {
                return s.apply(this, arguments)
            }
            )
        }, {
            key: "onDel",
            value: (i = _asyncToGenerator(regenerator.mark(function e(t, r, n, o) {
                var a, i, s;
                return regenerator.wrap(function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            if (i = this.parseUri(t),
                            a = i[0],
                            i = i[1],
                            a && "string" == typeof a && i && "string" == typeof i) {
                                e.next = 5;
                                break
                            }
                            throw ERROR_MSG.parameter_error;
                        case 5:
                            if ("event" == a && store.scriptManager.deleteEventScript(i),
                            void 0 === (s = store.dvdb.deleteScript(i, a)))
                                throw ERROR_MSG.script_not_exists;
                            e.next = 9;
                            break;
                        case 9:
                            logger.log("successful delete script", a, i, s),
                            this.sendSuccessCalculateResult("DEL", o, t, {
                                version: s,
                                result: "success"
                            });
                        case 11:
                        case "end":
                            return e.stop()
                        }
                }, e, this)
            })),
            function(e, t, r, n) {
                return i.apply(this, arguments)
            }
            )
        }, {
            key: "onGet",
            value: (a = _asyncToGenerator(regenerator.mark(function e(t, r, n, o) {
                var a, i, s, l, c, u, p, d, f;
                return regenerator.wrap(function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            if (l = this.parseUri(t),
                            a = l[0],
                            i = l[1],
                            a && "string" == typeof a && i && "string" == typeof i) {
                                e.next = 5;
                                break
                            }
                            throw ERROR_MSG.parameter_error;
                        case 5:
                            if ("DI" != a.toUpperCase()) {
                                e.next = 22;
                                break
                            }
                            if ((s = null == r ? void 0 : r.type) && "number" == typeof s) {
                                e.next = 9;
                                break
                            }
                            throw ERROR_MSG.parameter_error;
                        case 9:
                            return l = s.toString(2),
                            f = "1" == l[l.length - 1],
                            c = "1" == l[l.length - 2],
                            u = null == r ? void 0 : r.interval,
                            d = null == r ? void 0 : r.times,
                            ("number" != typeof u || u < 1) && (u = 1),
                            "number" != typeof d ? d = 1 : 86400 < d && (d = 86400),
                            e.next = 18,
                            this.setIntervalCollection(i, u, d, f);
                        case 18:
                            u = e.sent,
                            c && (logger.log("need to report protocol 7", u),
                            this.sendSuccessCalculateResult("GET", o, t, u)),
                            e.next = 28;
                            break;
                        case 22:
                            if ((p = store.dvdb.queryScripts(function(e) {
                                return e.script_name == i && e.script_type == a
                            })).length <= 0)
                                throw ERROR_MSG.script_not_exists;
                            e.next = 25;
                            break;
                        case 25:
                            d = p[0].script_value,
                            f = p[0].script_version,
                            this.sendSuccessCalculateResult("GET", o, t, {
                                code: d,
                                version: f
                            });
                        case 28:
                        case "end":
                            return e.stop()
                        }
                }, e, this)
            })),
            function(e, t, r, n) {
                return a.apply(this, arguments)
            }
            )
        }, {
            key: "handleErrorOnCalcuteCommond",
            value: function(t, e, r, n) {
                var o;
                if ("string" == typeof t ? o = t : t.toString && t.toString instanceof Function && (o = t.toString(),
                t.stack && "string" == typeof t.stack && (o += t.stack)),
                "string" != typeof o && (o = ERROR_MSG.unknown_error),
                logger.error("error on", e, o),
                r && "string" == typeof r) {
                    t = new CalculateResult({
                        method: e,
                        uuid: r,
                        uri: n,
                        status: 404,
                        error: o
                    },tool.now());
                    try {
                        store.network.postEvent(t),
                        logger.log("send protocol 7 with error reporting", t)
                    } catch (e) {
                        e == ERROR_MSG.failed_to_parse_data_before_send && this.sendErrorBodyTooBig(t)
                    }
                }
            }
        }, {
            key: "sendSuccessCalculateResult",
            value: function(e, t, r, n) {
                var o = {
                    result: "success"
                }
                  , n = (n && ("object" == _typeof(n) ? o = n : o.result = n),
                new CalculateResult({
                    method: e.toUpperCase(),
                    uuid: t,
                    uri: r,
                    status: 200,
                    body: o
                },tool.now()));
                try {
                    store.network.postEvent(n),
                    logger.log("send protocol 7 with success reporting", n)
                } catch (e) {
                    e == ERROR_MSG.failed_to_parse_data_before_send && this.sendErrorBodyTooBig(n)
                }
            }
        }, {
            key: "sendErrorBodyTooBig",
            value: function(e) {
                e.data.body = "body size > 32M",
                logger.error("protocol 7 with over size", e),
                store.network.postEvent(e)
            }
        }, {
            key: "setIntervalCollection",
            value: (o = _asyncToGenerator(regenerator.mark(function e(t, r, n, o) {
                var a, i, s, l;
                return regenerator.wrap(function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            a = [],
                            i = 0;
                        case 2:
                            if (i < n)
                                return e.next = 5,
                                Raphael.getInstance().getValueForField(t);
                            e.next = 14;
                            break;
                        case 5:
                            if (s = e.sent,
                            a.push(s),
                            o && ((l = {})[t] = s,
                            store.eventCenter.addAutoEvent(new InternalEvent(l,tool.now(),window.location.href))),
                            i < n - 1)
                                return e.next = 11,
                                tool.sleep(1e3 * r);
                            e.next = 11;
                            break;
                        case 11:
                            i++,
                            e.next = 2;
                            break;
                        case 14:
                            return logger.highlight("resultArr:", a),
                            e.abrupt("return", a);
                        case 16:
                        case "end":
                            return e.stop()
                        }
                }, e)
            })),
            function(e, t, r, n) {
                return o.apply(this, arguments)
            }
            )
        }]),
        t
    }(), PROTOCOL_PREFIX_LENGTH = 9, PROTOCOL_SUFFIX_LENGTH = 1, Network = function() {
        function r(e) {
            var t = this;
            _classCallCheck(this, r),
            this.updateConfig = e,
            this.sendQueue = [],
            this.ackQueue = [],
            this.status = NETWORK_STATUS.notConnectYet,
            this.sendSeq = 0,
            this.lastConnectTime = 0,
            this.heartbeat_interval_ratio = 0,
            this.reconnectAble = !0,
            this.authState = !0,
            this.edge = new EdgeCalculation,
            setInterval(function() {
                logger.highlight("sendQueue", JSON.parse(stringify(t.sendQueue))),
                logger.highlight("ackQueue", JSON.parse(stringify(t.ackQueue)))
            }, 5e3)
        }
        var t;
        return _createClass(r, [{
            key: "sendAble",
            get: function() {
                return this.status == NETWORK_STATUS.generatingDvid || this.status == NETWORK_STATUS.waitingBasicInfoAck || this.status == NETWORK_STATUS.running
            }
        }, {
            key: "status",
            get: function() {
                return this._status
            },
            set: function(e) {
                var t = this._status;
                logger.log(concat(t = "Network status from ".concat(NETWORK_STATUS[t], " to ")).call(t, NETWORK_STATUS[e])),
                this._status = e
            }
        }, {
            key: "startConnect",
            value: function() {
                var e = this;
                if (tool.now() > this.lastConnectTime && tool.now() - this.lastConnectTime < globalValues.CONTECTION_INTERVAL) {
                    var t = globalValues.CONTECTION_INTERVAL - (tool.now() - this.lastConnectTime);
                    logger.warn("delay reconnection " + t + "ms"),
                    setTimeout$1(function() {
                        e.startConnect()
                    }, t)
                } else if (this.status == NETWORK_STATUS.notConnectYet || this.status == NETWORK_STATUS.disconnected) {
                    logger.log("start connect ws"),
                    this.lastConnectTime = tool.now();
                    try {
                        this.ws = new WebSocket(getWsLink()),
                        this.status = NETWORK_STATUS.connecting,
                        this.ws.onclose = this.wsOnClose.bind(this),
                        this.ws.onmessage = this.wsOnMessage.bind(this),
                        this.ws.onopen = this.wsOnOpen.bind(this),
                        this.ws.onerror = this.wsOnError.bind(this),
                        this.sendSeq = 0,
                        this.disConnectTimer = setTimeout$1(function() {
                            e.sendAble || (logger.warn("connect failed"),
                            e.closeConnect())
                        }, globalValues.CONNECTION_MAX_TIME)
                    } catch (e) {
                        console.error(e),
                        this.closeConnect()
                    }
                }
            }
        }, {
            key: "resetHeartbeatTimer",
            value: function() {
                var e = this
                  , t = (logger.log("reset heartbeat"),
                tool.clearTimeout(this.heartbeatTimer),
                globalValues.HEART_BEAT_INTERVAL);
                this.heartbeat_interval_ratio && (t = Math.min(36e5, this.heartbeat_interval_ratio * globalValues.HEART_BEAT_INTERVAL)),
                this.heartbeatTimer = setTimeout$1(function() {
                    if (e.sendAble) {
                        e.heartbeat_interval_ratio *= t < 36e5 ? 2 : 1,
                        logger.log("send heartbeat");
                        try {
                            e.sendData(new ZdHeartBeat)
                        } catch (e) {}
                    } else
                        e.resetHeartbeatTimer()
                }, t)
            }
        }, {
            key: "wsOnOpen",
            value: function() {
                if (logger.log("ws be opened"),
                this.resetHeartbeatTimer(),
                tool.clearTimeout(this.disConnectTimer),
                0 < this.sendQueue.length && this.sendQueue[0].postDataType == POST_DATA_TYPE.deviceBasicInfo) {
                    this.status = NETWORK_STATUS.waitingBasicInfoAck,
                    logger.log("connect success, send basic info in waiting queue");
                    try {
                        this.sendData(this.sendQueue[0])
                    } catch (e) {}
                } else
                    logger.log("connect success, waiting for basic info"),
                    this.status = NETWORK_STATUS.generatingDvid
            }
        }, {
            key: "wsOnError",
            value: function(e) {
                switch (logger.error("ws error happened", this.ws.readyState, this.ws.url, e),
                this.ws.readyState) {
                case WebSocket.CONNECTING:
                    this.status = NETWORK_STATUS.connecting;
                    break;
                case WebSocket.OPEN:
                    break;
                case WebSocket.CLOSING:
                case WebSocket.CLOSED:
                    this.wsOnClose()
                }
            }
        }, {
            key: "wsOnClose",
            value: function() {
                if (logger.log("ws be closed"),
                logger.log("sendQueue", this.sendQueue),
                logger.log("ackQueue", this.ackQueue),
                tool.clearTimeout(this.disConnectTimer),
                !(this.status == NETWORK_STATUS.disconnected || this.status == NETWORK_STATUS.connecting && tool.now() - this.lastConnectTime < 10)) {
                    for (this.status = NETWORK_STATUS.disconnected; 0 < this.ackQueue.length; ) {
                        var e = this.ackQueue.pop();
                        tool.clearTimeout(e.disconnectTimer),
                        e.postDataType != POST_DATA_TYPE.heartbeat && (this.sendQueue.length <= globalValues.TO_BE_SEND_QUEUE_MAX_VALUE ? (this.sendQueue.unshift(e),
                        logger.log("put msg back:", e.timestamp, e.postDataType)) : (this.ackQueue.forEach(function(e) {
                            return tool.clearTimeout(e.disconnectTimer)
                        }),
                        this.ackQueue.length = 0))
                    }
                    0 != this.sendQueue.length && this.sendQueue[0].postDataType === POST_DATA_TYPE.deviceBasicInfo || this.postBasicEvent(),
                    this.authState && this.reconnectAble && this.startConnect()
                }
            }
        }, {
            key: "wsOnMessage",
            value: (t = _asyncToGenerator(regenerator.mark(function e(t) {
                var r, n, o, a, i, s, l, c;
                return regenerator.wrap(function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return e.prev = 0,
                            e.next = 3,
                            readBlob(t.data);
                        case 3:
                            if (r = e.sent,
                            r = new Uint8Array(r),
                            n = byteArr2Number([r[0]]),
                            o = byteArr2Number([r[1], r[2], r[3], r[4]]),
                            byteArr2Number([r[5], r[6], r[7], r[8]]) != r.length - PROTOCOL_PREFIX_LENGTH)
                                return logger.error("Message length mismatch"),
                                e.abrupt("return");
                            e.next = 11;
                            break;
                        case 11:
                            e.next = 17;
                            break;
                        case 13:
                            return e.prev = 13,
                            e.t0 = e.catch(0),
                            logger.error(e.t0),
                            e.abrupt("return");
                        case 17:
                            e.t1 = n,
                            e.next = e.t1 === DOWN_DATA_TYPE.calCmdDown ? 20 : e.t1 === DOWN_DATA_TYPE.edgeCalDown ? 25 : e.t1 === DOWN_DATA_TYPE.dynamicSwitch || e.t1 === DOWN_DATA_TYPE.configDown ? 26 : e.t1 === DOWN_DATA_TYPE.heartbeatAck || e.t1 === DOWN_DATA_TYPE.commonAck ? 38 : e.t1 === DOWN_DATA_TYPE.authFailed ? 41 : 44;
                            break;
                        case 20:
                            s = null;
                            try {
                                a = new Uint8Array(r.buffer,PROTOCOL_PREFIX_LENGTH + 10,r.length - PROTOCOL_PREFIX_LENGTH - PROTOCOL_SUFFIX_LENGTH - 10),
                                s = JSON.parse(utf8Arr2String(a))
                            } catch (e) {}
                            return this.edge.parseCalCmd(s),
                            this.sendDataSimply(new ZdCommonAck(o)),
                            e.abrupt("break", 45);
                        case 25:
                            return e.abrupt("break", 45);
                        case 26:
                            e.prev = 26,
                            s = new Uint8Array(r.buffer,PROTOCOL_PREFIX_LENGTH + 2,r.length - PROTOCOL_PREFIX_LENGTH - PROTOCOL_SUFFIX_LENGTH - 2),
                            i = JSON.parse(utf8Arr2String(s)),
                            e.next = 34;
                            break;
                        case 31:
                            return e.prev = 31,
                            e.t2 = e.catch(26),
                            e.abrupt("return");
                        case 34:
                            return logger.log("receive config", i),
                            n == DOWN_DATA_TYPE.dynamicSwitch ? this.updateConfig(i) : "zdv"in i && i.zdv == globalValues.VERSION && (this.updateConfig(i),
                            tool.setLocalStorage(LOCAL_STORAGE_ITEM.DVZDconfig, stringify(i))),
                            this.sendDataSimply(new ZdCommonAck(o)),
                            e.abrupt("break", 45);
                        case 38:
                            for (logger.log("ack  seq:", o); 0 < this.ackQueue.length && this.ackQueue[0].seq <= o; )
                                if (c = this.ackQueue.shift(),
                                tool.clearTimeout(c.disconnectTimer),
                                logger.log("waiting ack:", map$3(l = this.ackQueue).call(l, function(e) {
                                    return e.seq
                                })),
                                c.postDataType == POST_DATA_TYPE.deviceBasicInfo && this.status == NETWORK_STATUS.waitingBasicInfoAck)
                                    for (this.status = NETWORK_STATUS.running; 0 < this.sendQueue.length; )
                                        try {
                                            this.sendData(this.sendQueue[0])
                                        } catch (e) {}
                            return e.abrupt("break", 45);
                        case 41:
                            return this.authState = !1,
                            this.closeConnect(),
                            e.abrupt("break", 45);
                        case 44:
                            return e.abrupt("break", 45);
                        case 45:
                        case "end":
                            return e.stop()
                        }
                }, e, this, [[0, 13], [26, 31]])
            })),
            function(e) {
                return t.apply(this, arguments)
            }
            )
        }, {
            key: "closeConnect",
            value: function() {
                logger.log("close connection");
                try {
                    this.ws.close(),
                    this.wsOnClose()
                } catch (e) {
                    console.error(e)
                }
            }
        }, {
            key: "postBasicEvent",
            value: function(e) {
                if (e && (this.basicInfo = e),
                this.basicInfo) {
                    e = this.basicInfo.getBasicEvent();
                    if (this.status == NETWORK_STATUS.generatingDvid) {
                        logger.log("send basic info immediately"),
                        this.status = NETWORK_STATUS.waitingBasicInfoAck;
                        try {
                            this.sendData(e)
                        } catch (e) {}
                    } else
                        logger.log("ws not ready, unshift the basic info to send queue"),
                        this.sendQueue.unshift(e)
                }
            }
        }, {
            key: "postEvent",
            value: function(t) {
                if (this.status == NETWORK_STATUS.running)
                    try {
                        this.sendData(t)
                    } catch (e) {
                        if (t instanceof CalculateResult)
                            throw e
                    }
                else
                    for (logger.log("event not send, push to send queue, because network status now: ", NETWORK_STATUS[this.status]),
                    this.sendQueue.push(t); this.sendQueue.length > globalValues.TO_BE_SEND_QUEUE_MAX_VALUE; )
                        this.sendQueue.shift()
            }
        }, {
            key: "sendData",
            value: function(t) {
                var e = this
                  , r = (t.seq = this.sendSeq++,
                includes(r = this.sendQueue).call(r, t) && splice(r = this.sendQueue).call(r, indexOf(r = this.sendQueue).call(r, t), 1),
                null);
                try {
                    r = parseEventData(t)
                } catch (e) {
                    if (t.postDataType == POST_DATA_TYPE.calCmdUp)
                        throw e;
                    return
                }
                this.ackQueue.push(t),
                t.disconnectTimer = setTimeout$1(function() {
                    logger.warn(t.timestamp, POST_DATA_TYPE[t.postDataType], "time is out for waiting ack, disconnect ws"),
                    e.closeConnect()
                }, globalValues.DISCONNECT_TIMER),
                this.resetHeartbeatTimer(),
                logger.log("send", "seq: ", t.seq, ", timestamp:", t.timestamp, ", data type:", POST_DATA_TYPE[t.postDataType]),
                this.ws.send(r)
            }
        }, {
            key: "sendDataSimply",
            value: function(e) {
                if (this.sendAble)
                    try {
                        this.resetHeartbeatTimer(),
                        this.ws.send(parseEventData(e))
                    } catch (e) {}
            }
        }, {
            key: "entryBackend",
            value: function() {
                this.heartbeat_interval_ratio = 1,
                this.reconnectAble = !1
            }
        }, {
            key: "entryFrontend",
            value: function() {
                this.heartbeat_interval_ratio = 0,
                this.reconnectAble = !0,
                this.status == NETWORK_STATUS.disconnected && this.startConnect()
            }
        }]),
        r
    }(), NETWORK_STATUS;
    function readBlob(e) {
        return _readBlob.apply(this, arguments)
    }
    function _readBlob() {
        return (_readBlob = _asyncToGenerator(regenerator.mark(function e(r) {
            return regenerator.wrap(function(e) {
                for (; ; )
                    switch (e.prev = e.next) {
                    case 0:
                        if (r.arrayBuffer)
                            return e.abrupt("return", r.arrayBuffer());
                        e.next = 4;
                        break;
                    case 4:
                        return e.abrupt("return", new promise(function(e) {
                            var t = new FileReader;
                            t.readAsArrayBuffer(r),
                            t.onload = function() {
                                return e(t.result)
                            }
                        }
                        ));
                    case 5:
                    case "end":
                        return e.stop()
                    }
            }, e)
        }))).apply(this, arguments)
    }
    !function(e) {
        e[e.notConnectYet = 0] = "notConnectYet",
        e[e.connecting = 1] = "connecting",
        e[e.generatingDvid = 2] = "generatingDvid",
        e[e.waitingBasicInfoAck = 3] = "waitingBasicInfoAck",
        e[e.running = 4] = "running",
        e[e.disconnected = 5] = "disconnected"
    }(NETWORK_STATUS = NETWORK_STATUS || {});
    var domainList = []
      , lastDomainIndex = -1;
    function getWsLink() {
        var e = tool.getZhengdaoEIP()
          , e = map$3(e).call(e, function(e) {
            return e.replace("https://", "")
        })
          , e = (0 === domainList.length && (domainList = tool.generateDomain(e, globalValues.ZDENV, !1)),
        (lastDomainIndex + 1) % domainList.length)
          , t = domainList[e];
        return includes(t).call(t, ":") || (t += ":11949"),
        lastDomainIndex = e,
        "wss://".concat(t, "/zdv3")
    }
    function parseEventData(e) {
        var t = e.getPostData()
          , r = new ArrayBuffer(PROTOCOL_PREFIX_LENGTH + t.length + PROTOCOL_SUFFIX_LENGTH)
          , n = new Uint8Array(r)
          , e = (n[0] = e.postDataType,
        number2ByteArr(e.seq, 4))
          , e = (n[1] = e[0],
        n[2] = e[1],
        n[3] = e[2],
        n[4] = e[3],
        number2ByteArr(r.byteLength - PROTOCOL_PREFIX_LENGTH, 4));
        if (33554432 < r.byteLength - PROTOCOL_PREFIX_LENGTH)
            throw ERROR_MSG.failed_to_parse_data_before_send;
        n[5] = e[0],
        n[6] = e[1],
        n[7] = e[2],
        n[8] = e[3];
        for (var o = 0; o < t.length; o++)
            n[PROTOCOL_PREFIX_LENGTH + o] = t[o];
        return n[r.byteLength - 1] = 10,
        r
    }
    var EventCenter = function() {
        function r() {
            _classCallCheck(this, r),
            this.indexDurPtt = 0,
            this.manblk = [],
            this.eventToSave = [];
            var e = tool.getFromLocalStorage(LOCAL_STORAGE_ITEM.DVZDconfig);
            if (e)
                try {
                    var t = JSON.parse(e);
                    "zdv"in t && t.zdv == globalValues.VERSION && this.resetConfig(t)
                } catch (e) {}
            store.network = new Network(this.resetConfig.bind(this))
        }
        var n;
        return _createClass(r, [{
            key: "addAutoEvent",
            value: function(e) {
                e.eventType == EVENT_TYPE.ZDEN_GoBack && store.network.entryBackend(),
                e.eventType == EVENT_TYPE.ZDEN_GoFront && store.network.entryFrontend(),
                default_sw[EVENT_TYPE[e.eventType]] && (e.pttIndex = this.indexDurPtt++,
                logger.log("got auto event", EVENT_TYPE[e.eventType], e),
                this.handleSaveAndUpload(e))
            }
        }, {
            key: "addBasicInfo",
            value: function(e) {
                var t = this
                  , e = (this.ptt = e.ptt,
                store.network.postBasicEvent(e),
                this.eventToSave.forEach(function(e) {
                    e.updatePtt(t.ptt),
                    store.dvdb.saveEvent(e),
                    store.scriptManager.saveEventToMemory(e)
                }),
                this.eventToSave.length = 0,
                new DvEvent(this.ptt,e.getBasicEvent()));
                store.scriptManager.onEvent(e).need_to_save && (store.dvdb.saveEvent(e),
                store.scriptManager.saveEventToMemory(e))
            }
        }, {
            key: "postUserEvent",
            value: function(e) {
                logger.log("got UC event"),
                this.handleSaveAndUpload(e)
            }
        }, {
            key: "postManualEvent",
            value: function(e) {
                var t = globalVariable.strTokenReturned;
                if (!t)
                    try {
                        t = getLongTokenSync()
                    } catch (e) {
                        t = ""
                    }
                if (!t)
                    return "";
                if (logger.log("got manual event", e.eventName),
                !default_sw.man)
                    return t;
                if (includes(r = this.manblk).call(r, e.eventName))
                    return t;
                e.pttIndex = this.indexDurPtt++;
                var r = null;
                try {
                    r = this.handleSaveAndUpload(e)
                } catch (e) {
                    r = null
                }
                if (!Array.isArray(r))
                    return t;
                try {
                    var n = t + "ROSIVATAD" + tool.toSafeBase64(stringify(r));
                    return this.collectAndUploadReplay(n, t).catch(function(e) {
                        return logger.log(e)
                    }),
                    n
                } catch (e) {
                    return t
                }
            }
        }, {
            key: "collectAndUploadReplay",
            value: (n = _asyncToGenerator(regenerator.mark(function e(t, r) {
                var n;
                return regenerator.wrap(function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return getDvidAsync(!(e.next = 2));
                        case 2:
                            return n = e.sent,
                            e.next = 5,
                            store.replayManager.getReplayData(n, r, t, globalVariable.ACK);
                        case 5:
                            return (n = e.sent) && tool.setLocalStorage(LOCAL_STORAGE_ITEM.DVZDReplayData, btoa(n)),
                            e.prev = 7,
                            e.next = 10,
                            store$1.dataPoster.sendReplayData(n, zdApi.POST_REPLAY.method, "https://" + globalValues.ZD_REPLAY_ENV + zdApi.POST_REPLAY.url);
                        case 10:
                            tool.removeFromLocalStorage(LOCAL_STORAGE_ITEM.DVZDReplayData),
                            e.next = 15;
                            break;
                        case 13:
                            e.prev = 13,
                            e.t0 = e.catch(7);
                        case 15:
                        case "end":
                            return e.stop()
                        }
                }, e, null, [[7, 13]])
            })),
            function(e, t) {
                return n.apply(this, arguments)
            }
            )
        }, {
            key: "handleSaveAndUpload",
            value: function(e) {
                var t = null;
                try {
                    var r = new DvEvent(this.ptt,e)
                      , n = store.scriptManager.onEvent(r)
                      , o = r.getScriptStatus() || "";
                    if (o && e.updateScriptStatus && e.updateScriptStatus(o),
                    o)
                        try {
                            var a = JSON.parse(o);
                            a.dvzd_all_features && (t = a.dvzd_all_features,
                            delete a.dvzd_all_features,
                            e.updateScriptStatus && e.updateScriptStatus(stringify(a)),
                            r.updateScriptStatus && r.updateScriptStatus(a))
                        } catch (e) {}
                    !n.need_to_upload || e instanceof InternalEvent || store.network.postEvent(e),
                    n.need_to_save && (void 0 === r.getPtt() ? this.eventToSave.push(r) : (store.dvdb.saveEvent(r),
                    store.scriptManager.saveEventToMemory(r)))
                } catch (e) {}
                return t
            }
        }, {
            key: "resetConfig",
            value: function(e) {
                if ("ht"in e && "object" == _typeof(e.ht) && ("conn"in e.ht && "number" == typeof e.ht.conn && (globalValues.DISCONNECT_TIMER = e.ht.conn),
                "send"in e.ht && "number" == typeof e.ht.send && (globalValues.HEART_BEAT_INTERVAL = e.ht.send)),
                "sw"in e && "object" == _typeof(e.sw)) {
                    for (var t in e.sw)
                        default_sw[t] = e.sw[t];
                    logger.highlight("update switch", default_sw)
                }
                "manblk"in e && Array.isArray(e.manblk) && (this.manblk = e.manblk || []);
                var r = "replay"in e && !!e.replay;
                store.replayManager.startRecordOrStop(r)
            }
        }]),
        r
    }(), EVENT_CENTER_STATUS, default_sw = (!function(e) {
        e[e.notConnectYet = 0] = "notConnectYet",
        e[e.connecting = 1] = "connecting",
        e[e.generatingDvid = 2] = "generatingDvid",
        e[e.waitingBasicInfoAck = 3] = "waitingBasicInfoAck",
        e[e.running = 4] = "running",
        e[e.disconnected = 5] = "disconnected"
    }(EVENT_CENTER_STATUS = EVENT_CENTER_STATUS || {}),
    {
        man: 1,
        ZDEN_Onload: 1,
        ZDEN_BeforeUnload: 1,
        ZDEN_PageJumpManual: 1,
        ZDEN_PageJumpH5: 1,
        ZDEN_Click: 1,
        ZDEN_TouchMove: 0,
        ZDEN_Typing: 1,
        ZDEN_Paste: 1,
        ZDEN_Resize: 1,
        ZDEN_NetworkRequest: 0,
        ZDEN_BatteryChange: 1,
        ZDEN_GoBack: 1,
        ZDEN_GoFront: 1,
        ZDEN_Autofill: 1,
        ZDEN_Inner: 1,
        ZDEN_Focus: 1,
        ZDEN_Blur: 1
    }), DVEventIndexDB = function() {
        function n(e, t, r) {
            _classCallCheck(this, n),
            this.dbName = e,
            this.tableName = t,
            this.onUpgradeNeeded = r,
            this.db = null,
            this.status = EventDVStatus.initing
        }
        var e, o, t, r, a, i, s;
        return _createClass(n, [{
            key: "open",
            value: (s = _asyncToGenerator(regenerator.mark(function e() {
                var a = this;
                return regenerator.wrap(function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            if (indexedDB && IDBKeyRange) {
                                e.next = 3;
                                break
                            }
                            return this.status = EventDVStatus.failed,
                            e.abrupt("return");
                        case 3:
                            if (this.db && this.status == EventDVStatus.ready)
                                return e.abrupt("return");
                            e.next = 5;
                            break;
                        case 5:
                            return e.prev = 5,
                            e.next = 8,
                            new promise(function(t, r) {
                                var n = !1;
                                setTimeout$1(function() {
                                    n = !0,
                                    r(new Error("The open request was blocked and timed out"))
                                }, 1e4);
                                try {
                                    var o = indexedDB.open(a.dbName);
                                    o.onerror = function() {
                                        return r(o.error)
                                    }
                                    ,
                                    o.onupgradeneeded = function(e) {
                                        try {
                                            n ? (o.transaction.abort(),
                                            e.target.result.close()) : a.onUpgradeNeeded && a.onUpgradeNeeded(e)
                                        } catch (e) {}
                                    }
                                    ,
                                    o.onsuccess = function(e) {
                                        e = e.target.result;
                                        if (n)
                                            try {
                                                e.close()
                                            } catch (e) {}
                                        else
                                            t(e)
                                    }
                                } catch (e) {
                                    r(e)
                                }
                            }
                            );
                        case 8:
                            this.db = e.sent,
                            this.status = this.db ? EventDVStatus.ready : EventDVStatus.failed,
                            e.next = 15;
                            break;
                        case 12:
                            e.prev = 12,
                            e.t0 = e.catch(5),
                            this.status = EventDVStatus.failed;
                        case 15:
                        case "end":
                            return e.stop()
                        }
                }, e, this, [[5, 12]])
            })),
            function() {
                return s.apply(this, arguments)
            }
            )
        }, {
            key: "saveEvent",
            value: (i = _asyncToGenerator(regenerator.mark(function e(o) {
                var a;
                return regenerator.wrap(function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return e.prev = 0,
                            e.next = 3,
                            this.checkStatus();
                        case 3:
                            e.next = 8;
                            break;
                        case 5:
                            return e.prev = 5,
                            e.t0 = e.catch(0),
                            e.abrupt("return");
                        case 8:
                            if (o && "object" == _typeof(o)) {
                                e.next = 10;
                                break
                            }
                            return e.abrupt("return");
                        case 10:
                            return a = this,
                            e.prev = 11,
                            e.next = 14,
                            this.transaction([this.tableName], "readwrite", function(e, t, r) {
                                try {
                                    var n = e.objectStore(a.tableName).add(o);
                                    n.onsuccess = function(e) {
                                        t(e.target.result)
                                    }
                                    ,
                                    n.onerror = function(e) {
                                        r(e.target.error)
                                    }
                                } catch (e) {
                                    throw e
                                }
                            });
                        case 14:
                            return e.abrupt("return", e.sent);
                        case 17:
                            return e.prev = 17,
                            e.t1 = e.catch(11),
                            logger.error("db reports error during event storing", e.t1),
                            e.abrupt("return");
                        case 21:
                        case "end":
                            return e.stop()
                        }
                }, e, this, [[0, 5], [11, 17]])
            })),
            function(e) {
                return i.apply(this, arguments)
            }
            )
        }, {
            key: "getAllEvents",
            value: (a = _asyncToGenerator(regenerator.mark(function e() {
                var o;
                return regenerator.wrap(function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2,
                            this.checkStatus();
                        case 2:
                            return o = this,
                            e.next = 5,
                            this.transaction([this.tableName], "readonly", function(e, t, r) {
                                try {
                                    var n = e.objectStore(o.tableName).getAll();
                                    n.onsuccess = function(e) {
                                        t(e.target.result)
                                    }
                                    ,
                                    n.onerror = function(e) {
                                        r(e.target.error)
                                    }
                                } catch (e) {
                                    throw e
                                }
                            });
                        case 5:
                            return e.abrupt("return", e.sent);
                        case 6:
                        case "end":
                            return e.stop()
                        }
                }, e, this)
            })),
            function() {
                return a.apply(this, arguments)
            }
            )
        }, {
            key: "getAllEventsCount",
            value: (r = _asyncToGenerator(regenerator.mark(function e() {
                var o;
                return regenerator.wrap(function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2,
                            this.checkStatus();
                        case 2:
                            return o = this,
                            e.next = 5,
                            this.transaction([this.tableName], "readonly", function(e, t, r) {
                                try {
                                    var n = e.objectStore(o.tableName).count();
                                    n.onsuccess = function(e) {
                                        t(e.target.result)
                                    }
                                    ,
                                    n.onerror = function(e) {
                                        r(e.target.error)
                                    }
                                } catch (e) {
                                    throw e
                                }
                            });
                        case 5:
                            return e.abrupt("return", e.sent);
                        case 6:
                        case "end":
                            return e.stop()
                        }
                }, e, this)
            })),
            function() {
                return r.apply(this, arguments)
            }
            )
        }, {
            key: "removeOldEvents",
            value: (t = _asyncToGenerator(regenerator.mark(function e(i) {
                var s;
                return regenerator.wrap(function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return e.prev = 0,
                            e.next = 3,
                            this.checkStatus();
                        case 3:
                            e.next = 8;
                            break;
                        case 5:
                            return e.prev = 5,
                            e.t0 = e.catch(0),
                            e.abrupt("return");
                        case 8:
                            if ("number" == typeof i && i) {
                                e.next = 10;
                                break
                            }
                            return e.abrupt("return");
                        case 10:
                            return s = this,
                            e.prev = 11,
                            e.next = 14,
                            this.transaction([this.tableName], "readwrite", function(e, t, r) {
                                try {
                                    var n = e.objectStore(s.tableName)
                                      , o = n.index("event_time").openCursor()
                                      , a = 0;
                                    o.onsuccess = function(e) {
                                        e = e.target.result;
                                        if (e && a < i)
                                            try {
                                                n.delete(e.primaryKey),
                                                a++,
                                                e.continue()
                                            } catch (e) {
                                                r(e)
                                            }
                                        else
                                            t("success remove old events")
                                    }
                                    ,
                                    o.onerror = function(e) {
                                        r(e.target.error)
                                    }
                                } catch (e) {
                                    throw e
                                }
                            });
                        case 14:
                            return e.abrupt("return", e.sent);
                        case 17:
                            e.prev = 17,
                            e.t1 = e.catch(11),
                            logger.error("failed to clear db", e.t1);
                        case 20:
                        case "end":
                            return e.stop()
                        }
                }, e, this, [[0, 5], [11, 17]])
            })),
            function(e) {
                return t.apply(this, arguments)
            }
            )
        }, {
            key: "transaction",
            value: (o = _asyncToGenerator(regenerator.mark(function e(n, o, a) {
                var i = this;
                return regenerator.wrap(function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return e.abrupt("return", new promise(function(t, r) {
                                if (i.db)
                                    try {
                                        var e = i.db.transaction(n, o);
                                        e.onabort = function(e) {
                                            return r(e.target.error)
                                        }
                                        ,
                                        e.oncomplete = function() {
                                            return t(void 0)
                                        }
                                        ,
                                        a && a(e, function(e) {
                                            return t(e)
                                        }, function(e) {
                                            return r(e)
                                        })
                                    } catch (e) {
                                        r(e)
                                    }
                                else
                                    r("db is null")
                            }
                            ));
                        case 1:
                        case "end":
                            return e.stop()
                        }
                }, e)
            })),
            function(e, t, r) {
                return o.apply(this, arguments)
            }
            )
        }, {
            key: "checkStatus",
            value: (e = _asyncToGenerator(regenerator.mark(function e() {
                var t = this;
                return regenerator.wrap(function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2,
                            tool.waituntil(function() {
                                return t.status != EventDVStatus.initing
                            }, 50, maxSafeInteger);
                        case 2:
                            if (this.status == EventDVStatus.failed)
                                throw "IndexDB failed to start";
                            e.next = 4;
                            break;
                        case 4:
                            return e.abrupt("return");
                        case 5:
                        case "end":
                            return e.stop()
                        }
                }, e, this)
            })),
            function() {
                return e.apply(this, arguments)
            }
            )
        }]),
        n
    }(), EventDVStatus, toInteger = (!function(e) {
        e[e.initing = 0] = "initing",
        e[e.ready = 1] = "ready",
        e[e.failed = 2] = "failed"
    }(EventDVStatus = EventDVStatus || {}),
    toInteger$5), toString$1 = toString$c, requireObjectCoercible$1 = requireObjectCoercible$9, stringRepeat = function(e) {
        var t = toString$1(requireObjectCoercible$1(this))
          , r = ""
          , n = toInteger(e);
        if (n < 0 || n == 1 / 0)
            throw RangeError("Wrong number of repetitions");
        for (; 0 < n; (n >>>= 1) && (t += t))
            1 & n && (r += t);
        return r
    }, toLength = toLength$d, toString = toString$c, repeat = stringRepeat, requireObjectCoercible = requireObjectCoercible$9, ceil = Math.ceil, createMethod = function(o) {
        return function(e, t, r) {
            var e = toString(requireObjectCoercible(e))
              , n = e.length
              , r = void 0 === r ? " " : toString(r)
              , t = toLength(t);
            return t <= n || "" == r ? e : ((n = repeat.call(r, ceil((t = t - n) / r.length))).length > t && (n = n.slice(0, t)),
            o ? e + n : n + e)
        }
    }, stringPad = {
        start: createMethod(!1),
        end: createMethod(!0)
    }, userAgent = engineUserAgent, stringPadWebkitBug = /Version\/10(?:\.\d+){1,2}(?: [\w./]+)?(?: Mobile\/\w+)? Safari\//.test(userAgent), $$2 = _export, $padStart = stringPad.start, WEBKIT_BUG = stringPadWebkitBug, entryVirtual = ($$2({
        target: "String",
        proto: !0,
        forced: WEBKIT_BUG
    }, {
        padStart: function(e) {
            return $padStart(this, e, 1 < arguments.length ? arguments[1] : void 0)
        }
    }),
    entryVirtual$h), padStart$3 = entryVirtual("String").padStart, padStart$2 = padStart$3, StringPrototype = String.prototype, padStart_1 = function(e) {
        var t = e.padStart;
        return "string" == typeof e || e === StringPrototype || e instanceof String && t === StringPrototype.padStart ? padStart$2 : t
    }, parent$1 = padStart_1, padStart$1 = parent$1, padStart = padStart$1, ScriptLSDB = function() {
        function e() {
            _classCallCheck(this, e),
            this.loadScriptFromLS()
        }
        return _createClass(e, [{
            key: "getScriptsByFilter",
            value: function(e) {
                var t;
                return filter(t = this.scriptInMem).call(t, e)
            }
        }, {
            key: "deleteScript",
            value: function(t, r) {
                var e, n = find$1(n = this.scriptInMem).call(n, function(e) {
                    return e.script_name == t && e.script_type == r
                }), n = n ? n.script_version : void 0;
                if (void 0 !== n)
                    return this.scriptInMem = filter(e = this.scriptInMem).call(e, function(e) {
                        return !(e.script_name == t && e.script_type == r)
                    }),
                    this.saveScriptToLS(),
                    n
            }
        }, {
            key: "saveScript",
            value: function(t, r, e, n) {
                var o;
                this.scriptInMem = filter(o = this.scriptInMem).call(o, function(e) {
                    return !(e.script_name == t && e.script_type == r)
                }),
                this.scriptInMem.push({
                    script_name: t,
                    script_type: r,
                    script_version: e,
                    script_value: n
                }),
                this.saveScriptToLS()
            }
        }, {
            key: "loadScriptFromLS",
            value: function() {
                this.scriptInMem = [];
                var e = tool.getFromLocalStorage(LOCAL_STORAGE_ITEM.DVZDScriptDB);
                if (e)
                    try {
                        var t, r = this.decriptAllScripts(e);
                        r && (t = JSON.parse(r),
                        Array.isArray(t) && (this.scriptInMem = t))
                    } catch (e) {}
            }
        }, {
            key: "saveScriptToLS",
            value: function() {
                try {
                    var e, t = stringify(this.scriptInMem);
                    !t || (e = this.encryptAllScripts(t)) && tool.setLocalStorage(LOCAL_STORAGE_ITEM.DVZDScriptDB, e)
                } catch (e) {}
            }
        }, {
            key: "encryptAllScripts",
            value: function(e) {
                if (!("string" == typeof e && 0 < e.length))
                    return "";
                try {
                    for (var t = encodeURIComponent(e), r = [], n = 0; n < t.length; n++)
                        "%" === t[n] ? (r.push(parseInt(t.substring(n + 1, n + 3), 16)),
                        n += 2) : r.push(t.charCodeAt(n));
                    var o = [68, 65, 84, 65, 86, 73, 83, 79, 82]
                      , a = map$3(r).call(r, function(e, t) {
                        return e ^ o[t % o.length]
                    })
                      , i = "";
                    return a.forEach(function(e) {
                        i += String.fromCharCode(e)
                    }),
                    btoa(i)
                } catch (e) {
                    return ""
                }
            }
        }, {
            key: "decriptAllScripts",
            value: function(e) {
                if (!("string" == typeof e && 0 < e.length))
                    return "";
                try {
                    for (var t = atob(e), r = [], n = 0; n < t.length; n++)
                        r.push(t.charCodeAt(n));
                    var o = [68, 65, 84, 65, 86, 73, 83, 79, 82]
                      , a = map$3(r).call(r, function(e, t) {
                        return e ^ o[t % o.length]
                    })
                      , i = "";
                    return a.forEach(function(e) {
                        i += "%" + padStart(e = e.toString(16)).call(e, 2, "0")
                    }),
                    decodeURIComponent(i)
                } catch (e) {
                    return ""
                }
            }
        }]),
        e
    }(), EVENT_TABLE_NAME = "event", DVDatabase = function() {
        function e() {
            _classCallCheck(this, e),
            this.eventIndexDB = new DVEventIndexDB("datavisorzhengdaoevent",EVENT_TABLE_NAME,function(e) {
                var r, e = e.target.result;
                e.objectStoreNames.contains(EVENT_TABLE_NAME) || (r = e.createObjectStore(EVENT_TABLE_NAME, {
                    keyPath: "_id",
                    autoIncrement: !0
                }),
                eventColumnsMap.forEach(function(e, t) {
                    r.createIndex(t, t, {
                        unique: !1
                    })
                }))
            }
            ),
            this.eventIndexDB.open(),
            this.scheduleNextDetectOverflow(),
            this.scriptDB = new ScriptLSDB
        }
        var t, r, n;
        return _createClass(e, [{
            key: "saveEvent",
            value: (n = _asyncToGenerator(regenerator.mark(function e(t) {
                var r;
                return regenerator.wrap(function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return r = t.getPostData(),
                            e.abrupt("return", this.eventIndexDB.saveEvent(r));
                        case 2:
                        case "end":
                            return e.stop()
                        }
                }, e, this)
            })),
            function(e) {
                return n.apply(this, arguments)
            }
            )
        }, {
            key: "getAllEvent",
            value: (r = _asyncToGenerator(regenerator.mark(function e() {
                return regenerator.wrap(function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return e.abrupt("return", this.eventIndexDB.getAllEvents());
                        case 1:
                        case "end":
                            return e.stop()
                        }
                }, e, this)
            })),
            function() {
                return r.apply(this, arguments)
            }
            )
        }, {
            key: "saveScript",
            value: function(e, t, r, n) {
                this.scriptDB.saveScript(e, t, r, n)
            }
        }, {
            key: "queryScripts",
            value: function(e) {
                return this.scriptDB.getScriptsByFilter(e)
            }
        }, {
            key: "deleteScript",
            value: function(e, t) {
                return this.scriptDB.deleteScript(e, t)
            }
        }, {
            key: "scheduleNextDetectOverflow",
            value: function() {
                var e = this;
                setTimeout$1(function() {
                    e.detectEventsOverflow()
                }, globalValues.DATABASE_CLEAR_TIME_INTERVAL)
            }
        }, {
            key: "detectEventsOverflow",
            value: (t = _asyncToGenerator(regenerator.mark(function e() {
                var t, r, n;
                return regenerator.wrap(function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return e.prev = 0,
                            e.next = 3,
                            this.eventIndexDB.getAllEventsCount();
                        case 3:
                            if ("number" != typeof (t = e.sent))
                                return e.abrupt("return");
                            e.next = 6;
                            break;
                        case 6:
                            if (r = globalValues.DATABASE_MAX_EVENT_COUNT,
                            t <= r)
                                return e.abrupt("return");
                            e.next = 9;
                            break;
                        case 9:
                            return n = t - r + Math.round(.1 * r),
                            e.next = 12,
                            this.eventIndexDB.removeOldEvents(n);
                        case 12:
                            e.next = 17;
                            break;
                        case 14:
                            e.prev = 14,
                            e.t0 = e.catch(0),
                            logger.error("failed to clear db", e.t0);
                        case 17:
                            return e.prev = 17,
                            this.scheduleNextDetectOverflow(),
                            e.finish(17);
                        case 20:
                        case "end":
                            return e.stop()
                        }
                }, e, this, [[0, 14, 17, 20]])
            })),
            function() {
                return t.apply(this, arguments)
            }
            )
        }]),
        e
    }(), maxCircleCount = 1e5, MouseMovementDb = function() {
        function e() {
            _classCallCheck(this, e),
            this.circle = new Array(maxCircleCount),
            this.index = 0,
            this.full = !1
        }
        return _createClass(e, [{
            key: "save",
            value: function(e) {
                var t = this.index;
                t == maxCircleCount - 1 && (this.full = !0),
                this.index = (this.index + 1) % maxCircleCount,
                this.circle[t] = e
            }
        }, {
            key: "get",
            value: function(e, t) {
                try {
                    if (t < e)
                        return [];
                    var r, n, o, a;
                    if (this.full)
                        r = this.index,
                        n = this.index - 1,
                        0 == this.index && (r = 0,
                        n = maxCircleCount - 1);
                    else if (r = 0,
                    n = this.index - 1,
                    0 == this.index)
                        return [];
                    n < r && (n += maxCircleCount);
                    var i = this.circle[r % maxCircleCount].time
                      , s = this.circle[n % maxCircleCount].time;
                    if (s <= e)
                        return e == s ? [this.circle[n % maxCircleCount]] : [];
                    if (t <= i)
                        return t == i ? [this.circle[r % maxCircleCount]] : [];
                    do {
                        if (e <= i) {
                            o = r;
                            break
                        }
                        var l = 0
                          , c = r
                          , u = n;
                        do {
                            if (100 < l++)
                                throw "";
                            var p = c + Math.round((u - c) / 2)
                              , d = this.circle[p % maxCircleCount].time
                              , f = this.circle[(p - 1) % maxCircleCount].time;
                            if (f < e && d < e)
                                c = p;
                            else {
                                if (!(e < f && e < d)) {
                                    o = d != e && f == e ? p - 1 : p;
                                    break
                                }
                                u = p
                            }
                        } while (2 <= u - c);
                        if (this.circle[o % maxCircleCount].time > t)
                            return [];
                        if (this.circle[o % maxCircleCount].time == t)
                            return [this.circle[o % maxCircleCount]]
                    } while (0);
                    do {
                        if (s <= t) {
                            a = n;
                            break
                        }
                        var h = 0
                          , g = r
                          , m = n;
                        do {
                            if (100 < h++)
                                throw "";
                            var y = g + Math.round((m - g) / 2)
                              , S = this.circle[y % maxCircleCount].time
                              , v = this.circle[(y + 1) % maxCircleCount].time;
                            if (t < v && t < S)
                                m = y;
                            else {
                                if (!(v < t && S < t)) {
                                    a = S != t && v == t ? y + 1 : y;
                                    break
                                }
                                g = y
                            }
                        } while (2 <= m - g);
                        if (this.circle[a % maxCircleCount].time < e)
                            return [];
                        if (this.circle[a % maxCircleCount].time == e)
                            return [this.circle[a % maxCircleCount]]
                    } while (0);
                    for (var b = [], E = o; E <= a; E++) {
                        var $ = this.circle[E % maxCircleCount];
                        $ && b.push($)
                    }
                    return b
                } catch (e) {
                    return []
                }
            }
        }]),
        e
    }(), dv = {
        mods: {
            event: {}
        }
    }, dbInMem = [], ScriptManager = function() {
        function ScriptManager() {
            _classCallCheck(this, ScriptManager);
            try {
                this.loadAllDVScripts(),
                dv.init(),
                store.dvdb.getAllEvent().then(function(e) {
                    Array.isArray(e) && dbInMem.unshift.apply(dbInMem, _toConsumableArray(e))
                }).catch(function(e) {
                    logger.log(e)
                })
            } catch (e) {
                logger.log(e)
            }
        }
        return _createClass(ScriptManager, [{
            key: "saveEventToMemory",
            value: function(e) {
                try {
                    dbInMem.push(e.getPostData());
                    var t, r = dbInMem.length, n = globalValues.DATABASE_MAX_EVENT_COUNT;
                    n < r && (t = r - n + Math.round(.1 * n),
                    splice(dbInMem).call(dbInMem, 0, t))
                } catch (e) {
                    logger.log(e)
                }
            }
        }, {
            key: "onEvent",
            value: function(e) {
                try {
                    var t, r = dv.on_event(e.getPostData());
                    return "need_to_save"in r && "need_to_upload"in r ? (delete (t = JSON.parse(stringify(r))).need_to_save,
                    delete t.need_to_upload,
                    e.updateScriptStatus(t),
                    r) : {
                        need_to_save: !0,
                        need_to_upload: !1
                    }
                } catch (e) {
                    return {
                        need_to_save: !0,
                        need_to_upload: !1
                    }
                }
            }
        }, {
            key: "onFeature",
            value: function() {
                var _onFeature = _asyncToGenerator(regenerator.mark(function _callee(scriptType, scriptName, event) {
                    var response, result, script, fun, funResult;
                    return regenerator.wrap(function _callee$(_context) {
                        for (; ; )
                            switch (_context.prev = _context.next) {
                            case 0:
                                response = {
                                    error: "",
                                    result: null
                                };
                                try {
                                    result = store.dvdb.queryScripts(function(e) {
                                        return e.script_type == scriptType && e.script_name == scriptName
                                    })
                                } catch (e) {}
                                if (Array.isArray(result)) {
                                    _context.next = 5;
                                    break
                                }
                                return response.error = "Failed when read db",
                                _context.abrupt("return", response);
                            case 5:
                                if (result.length <= 0)
                                    return response.error = "Failed to get script",
                                    _context.abrupt("return", response);
                                _context.next = 8;
                                break;
                            case 8:
                                script = result[0].script_value,
                                _context.prev = 9,
                                eval("fun=" + script),
                                _context.next = 17;
                                break;
                            case 13:
                                return _context.prev = 13,
                                _context.t0 = _context.catch(9),
                                response.error = "Failed to parse function:" + script,
                                _context.abrupt("return", response);
                            case 17:
                                return funResult = fun(event, from(dbInMem)),
                                response.result = funResult.result,
                                response.error = funResult.error,
                                _context.abrupt("return", response);
                            case 21:
                            case "end":
                                return _context.stop()
                            }
                    }, _callee, null, [[9, 13]])
                }));
                function onFeature(e, t, r) {
                    return _onFeature.apply(this, arguments)
                }
                return onFeature
            }()
        }, {
            key: "updateScript",
            value: function updateScript(scriptName, scriptType, scriptCode) {
                if ("string" != typeof scriptName || "string" != typeof scriptType || "string" != typeof scriptCode || !scriptName || !scriptType || !scriptCode)
                    return !1;
                if ("feature" == scriptType)
                    return !0;
                if ("event" != scriptType && "dv" != scriptType && "library" != scriptType)
                    return !1;
                var success = !1, fun;
                try {
                    eval("fun=".concat(scriptCode))
                } catch (e) {}
                return fun instanceof Function && ("event" == scriptType ? dv.mods.event[scriptName] = fun : dv[scriptName] = fun,
                success = !0),
                success
            }
        }, {
            key: "deleteEventScript",
            value: function(e) {
                return !("string" != typeof e || !e) && (delete dv.mods.event[e],
                !0)
            }
        }, {
            key: "getCustomScriptVersion",
            value: function() {
                return dv.custom_script_verisons
            }
        }, {
            key: "loadAllDVScripts",
            value: function() {
                this.loadDVScripts(),
                this.loadLibs(),
                this.lockContent(),
                this.loadCustomScripts()
            }
        }, {
            key: "lockContent",
            value: function() {
                Object.defineProperties(dv, {
                    init: {
                        writable: !1,
                        configurable: !1
                    },
                    on_event: {
                        writable: !1,
                        configurable: !1
                    },
                    mods: {
                        writable: !1,
                        configurable: !1
                    },
                    lib_mouse: {
                        writable: !1,
                        configurable: !1
                    },
                    lib_keyboard: {
                        writable: !1,
                        configurable: !1
                    }
                }),
                Object.defineProperty(dv.mods, "event", {
                    writable: !1,
                    configurable: !1
                })
            }
        }, {
            key: "loadDVScripts",
            value: function loadDVScripts() {
                dv.init = function() {
                    try {
                        var results = store.dvdb.queryScripts(function(e) {
                            var t;
                            return includes(t = ["event", "dv", "library"]).call(t, e.script_type)
                        });
                        Array.isArray(results) && results.forEach(function(script) {
                            try {
                                var _context3;
                                "event" == script.script_type ? eval("dv.mods.event[script.script_name] = " + script.script_value) : includes(_context3 = ["dv", "library"]).call(_context3, script.script_type) && eval("dv[script.script_name] = " + script.script_value)
                            } catch (e1) {
                                logger.log(e1)
                            }
                        })
                    } catch (e2) {
                        logger.log(e2)
                    }
                }
                ,
                dv.need_to_upload = function(e) {
                    return 2 != e.event_type
                }
                ,
                dv.need_to_save = function(e) {
                    return !0
                }
                ,
                dv.onEventDefaultReturn = function(e) {
                    var t = {};
                    return "function" == typeof dv.need_to_save ? t.need_to_save = dv.need_to_save(e) : t.need_to_save = !0,
                    "function" == typeof dv.need_to_upload ? t.need_to_upload = dv.need_to_upload(e) : t.need_to_upload = !1,
                    t
                }
                ,
                dv.on_event = function(t) {
                    var e = "on_" + t.event_name;
                    if (!(e in dv.mods.event))
                        return dv.onEventDefaultReturn(t);
                    try {
                        var r = dv.mods.event[e](t, from(dbInMem));
                        return "need_to_save"in (r = r || {}) || (r.need_to_save = dv.need_to_save(t)),
                        "need_to_upload"in r || (r.need_to_upload = dv.need_to_upload(t)),
                        r
                    } catch (e) {
                        return dv.onEventDefaultReturn(t)
                    }
                }
                ,
                dv.isOneLineBasic = function(e, t, r) {
                    if (e.length <= 2)
                        return !1;
                    try {
                        var n = e[0]
                          , o = e[e.length - 1];
                        if (o.x == n.x) {
                            if (o.y == n.y)
                                return !1;
                            s = function(e) {
                                return Math.abs(e.x - n.x) < t
                            }
                        } else
                            var a = (o.y - n.y) / (o.x - n.x)
                              , i = n.y - a * n.x
                              , s = function(e) {
                                return Math.abs(a * e.x + i - e.y) < t
                            };
                        var l = 0;
                        return e.forEach(function(e) {
                            s(e) && l++
                        }),
                        l / e.length >= r
                    } catch (e) {
                        return !1
                    }
                }
                ,
                dv.isOneLine = function(e) {
                    return dv.isOneLineBasic(e, 2, .95)
                }
                ,
                dv.getMouseMovementEvents = function(e, t) {
                    if ("number" != typeof e || "number" != typeof t)
                        return [];
                    e = store.mouseMoveDb.get(e, t);
                    return Array.isArray(e) ? e : []
                }
            }
        }, {
            key: "loadLibs",
            value: function() {
                dv.lib_mouse = {},
                dv.lib_mouse.getMouseMovementEvents = function(e, t, r) {
                    e = dv.getMouseMovementEvents(e, t);
                    return "number" == typeof r ? slice$1(e).call(e, -r) : e
                }
                ,
                dv.lib_mouse.calcMouseDistance = function(e) {
                    if (!Array.isArray(e) || e.length < 2)
                        return 0;
                    for (var t = 0, r = 0; r < e.length - 1; r++) {
                        var n = e[r]
                          , o = e[r + 1];
                        t += Math.sqrt(Math.pow(o.x - n.x, 2) + Math.pow(o.y - n.y, 2))
                    }
                    return t /= 96,
                    Math.floor(t)
                }
                ,
                dv.lib_mouse.calcMouseSpeed = function(e) {
                    if (!Array.isArray(e) || e.length < 2)
                        return 0;
                    var t = dv.lib_mouse.calcMouseDistance(e)
                      , e = e[e.length - 1].time - e[0].time;
                    return e <= 0 ? 0 : parseFloat((t / e * 1e3).toFixed(2))
                }
                ,
                dv.lib_mouse.inOneLine = function(e) {
                    return dv.isOneLine(e)
                }
                ,
                dv.lib_mouse.isSuspiciousMouseMovement = function(t, e, r) {
                    try {
                        var n, o = filter(dbInMem).call(dbInMem, function(e) {
                            return "ZDEN_Click" == e.event_name && e.event_time >= t
                        }), a = sort(n = filter(o).call(o, function(e) {
                            var t;
                            try {
                                t = JSON.parse(e.elementInfo)
                            } catch (e) {
                                return !1
                            }
                            return !!(t && t.id && includes(r).call(r, t.id))
                        })).call(n, function(e, t) {
                            return t.event_time - e.event_time
                        });
                        if (0 == a.length)
                            return !1;
                        var i = a[0];
                        if (!i)
                            return !1;
                        var s = i.event_time
                          , l = dv.lib_mouse.getMouseMovementEvents(s, e);
                        return dv.lib_mouse.inOneLine(l)
                    } catch (e) {
                        return !1
                    }
                }
                ,
                dv.lib_keyboard = {},
                dv.lib_keyboard.calcTypingSpeed = function(e) {
                    if (0 === e.length)
                        return -1;
                    if (1 === e.length)
                        try {
                            return -100 - e[0].text_length
                        } catch (e) {
                            return -2
                        }
                    var t = [];
                    sort(e).call(e, function(e, t) {
                        return e.event_time - t.event_time
                    });
                    for (var r = 1; r < e.length; r++)
                        t.push(e[r].event_time - e[r - 1].event_time);
                    try {
                        var n = reduce(t).call(t, function(e, t) {
                            return e + t
                        }) / t.length;
                        return parseFloat((1e3 / n).toFixed(2))
                    } catch (e) {
                        return -3
                    }
                }
                ,
                dv.lib_keyboard.getTypingData = function(e) {
                    try {
                        if (!Array.isArray(e))
                            return [];
                        for (var t = [], r = 0; r < e.length; r++) {
                            var n = e[r];
                            "object" == _typeof(n) && n && "number" == typeof n.text_length && "number" == typeof n.event_time && t.push({
                                length: n.text_length,
                                time: n.event_time
                            })
                        }
                        return t
                    } catch (e) {
                        return []
                    }
                }
            }
        }, {
            key: "loadCustomScripts",
            value: function loadCustomScripts() {
                var code = "dv.mods.event.on_payment_manual = (function () {\nconst INPUT_TYPE_WHITE_LIST = [\n'text',\n'email',\n'password',\n'search',\n'tel',\n'url',\n];\nconst MOUSE_MOVEMENT_TARGETS = [\n'contact-mobile-number',\n'card-number-heatmap',\n'card-name-heatmap',\n];\n\nreturn function (event, dbInMem) {\nlet res = {\npage_title: '',\npage_duration: -1,\nbutton_click_time: 0,\nautofill_or_not: false,\npaste_or_not: false,\navg_typing_speed: 0,\nmax_typing_speed: 0,\nmin_typing_speed: 0,\ntext_box_focus_on_time: [],\ncount_of_clicks_on_empty_space: 0,\nsuspicious_mouse_movement: false\n};\n\ntry {\nconst pageEvents = dbInMem.filter(item => ['ZDEN_Onload', 'ZDEN_PageJumpManual', 'ZDEN_PageJumpH5'].includes(item.event_name)).sort((a, b) => b.event_time - a.event_time);\nif (pageEvents.length == 0) {\nthrow 'fail to find ZDEN_PageJumpH5 ZDEN_PageJumpManual ZDEN_Onload event';\n}\n\nconst startTime = pageEvents[0].event_time;\nres.page_title = pageEvents[0].web_page_title;\nres.button_click_time = event.event_time;\nres.page_duration = event.event_time - startTime;\n\nconst resultAutoFillPasteTyping = dbInMem.filter(item => ['ZDEN_Autofill', 'ZDEN_Paste', 'ZDEN_Typing'].includes(item.event_name) && item.event_time >= startTime);\nconst autofillEvents = resultAutoFillPasteTyping.filter(item => item.event_name == 'ZDEN_Autofill');\nconst pasteEvents = resultAutoFillPasteTyping.filter(item => item.event_name == 'ZDEN_Paste');\nconst typingEvents = resultAutoFillPasteTyping.filter(item => item.event_name == 'ZDEN_Typing');\nres.autofill_or_not = autofillEvents.length > 0;\nres.paste_or_not = pasteEvents.length > 0;\n\nlet totalTypingSpeed = 0;\nlet maxTypingSpeed = -Infinity;\nlet minTypingSpeed = Infinity;\nconst mapTyping = {};\nfor (const oneTypingEvent of typingEvents) {\nlet elementInfo = {};\ntry {\nelementInfo = JSON.parse(oneTypingEvent.elementInfo);\n} catch (error) {\ncontinue;\n}\nif (!elementInfo || !elementInfo.id) {\ncontinue;\n}\nmapTyping[elementInfo.id] = mapTyping[elementInfo.id] || [];\nmapTyping[elementInfo.id].push(oneTypingEvent);\n}\n\nif (Object.keys(mapTyping).length > 0) {\nconst mapTypingSpeed = {}\nfor (const oneId in mapTyping) {\nconst typingEventsForOneId = mapTyping[oneId];\nconst oneTypingSpeed = dv.lib_keyboard.calcTypingSpeed(typingEventsForOneId);\nif (oneTypingSpeed >= 0) {\nmapTypingSpeed[oneId] = oneTypingSpeed;\n}\n}\n\nconst numOfIdsWithSpeed = Object.keys(mapTypingSpeed).length;\nif (numOfIdsWithSpeed > 0) {\nfor (const oneIdWithSpeed in mapTypingSpeed) {\nconst oneSpeed = mapTypingSpeed[oneIdWithSpeed];\nmaxTypingSpeed = Math.max(oneSpeed, maxTypingSpeed);\nminTypingSpeed = Math.min(oneSpeed, minTypingSpeed);\ntotalTypingSpeed += oneSpeed;\n}\nconst avgTypingSpeed = totalTypingSpeed / numOfIdsWithSpeed;\nres.avg_typing_speed = avgTypingSpeed;\nres.max_typing_speed = maxTypingSpeed;\nres.min_typing_speed = minTypingSpeed;\n}\n} \n\nconst resultFocus = dbInMem.filter(item => item.event_name == 'ZDEN_Focus' && item.event_time >= startTime);\nlet focusOnTime = [];\nfor (const oneFocusEvent of resultFocus) {\nlet elementInfo = {};\ntry {\nelementInfo = JSON.parse(oneFocusEvent.elementInfo);\n} catch (error) {\ncontinue;\n}\nif (!elementInfo || !elementInfo.tagName || typeof elementInfo.tagName !== 'string' || !elementInfo.type || typeof elementInfo.type !== 'string') {\ncontinue;\n}\nconst tagName = elementInfo.tagName;\nconst type = elementInfo.type;\nif (tagName.toUpperCase() === 'INPUT' && INPUT_TYPE_WHITE_LIST.includes(type.toLowerCase())) {\nfocusOnTime.push(oneFocusEvent.event_time);\n}\n}\nres.text_box_focus_on_time = focusOnTime;\n\nconst resultClick = dbInMem.filter(item => item.event_name == 'ZDEN_Click' && item.event_time >= startTime);\nlet clickCount = 0;\nfor (const oneClickEvent of resultClick) {\nlet elementInfo = {};\ntry {\nelementInfo = JSON.parse(oneClickEvent.elementInfo);\n} catch (error) {\ncontinue;\n}\nif (!elementInfo || typeof elementInfo.tagName !== 'string') {\ncontinue;\n}\nif (elementInfo.tagName.toUpperCase() !== 'INPUT' && elementInfo.tagName.toUpperCase() !== 'BUTTON') {\nclickCount++;\n}\n}\nres.count_of_clicks_on_empty_space = clickCount;\n\nres.suspicious_mouse_movement = dv.lib_mouse.isSuspiciousMouseMovement(startTime, event.event_time, MOUSE_MOVEMENT_TARGETS);\n} catch (error) {\nif (error instanceof Error) {\nerror = error.message;\n}\nres.error = (typeof error == 'string' && error != '') ? error : 'Unknown Error';\n}\n\nres.dvzd_all_features = [\n1, \nevent.event_name,\nnew Date().toISOString(),\nres.page_title,\nres.page_duration,\nres.button_click_time,\nres.autofill_or_not,\nres.paste_or_not,\nres.avg_typing_speed,\nres.max_typing_speed,\nres.min_typing_speed,\nres.text_box_focus_on_time,\nres.count_of_clicks_on_empty_space,\nres.suspicious_mouse_movement\n];\nreturn res;\n}\n})();\n\ndv.mods.event.on_ZDEN_Click = (function () {\n\nconst ELEMENT_ID_WHITE_LIST = [\n'confirm-booking-heatmap',\n];\nconst INPUT_TYPE_WHITE_LIST = [\n'text',\n'email',\n'password',\n'search',\n'tel',\n'url',\n];\nconst MOUSE_MOVEMENT_TARGETS = [\n'contact-mobile-number',\n'card-number-heatmap',\n'card-name-heatmap',\n];\n\nreturn function (event, dbInMem) {\nlet res = {\npage_title: '',\npage_duration: -1,\nbutton_click_time: 0,\nautofill_or_not: false,\npaste_or_not: false,\navg_typing_speed: 0,\nmax_typing_speed: 0,\nmin_typing_speed: 0,\ntext_box_focus_on_time: [],\ncount_of_clicks_on_empty_space: 0,\nsuspicious_mouse_movement: false\n};\n\ntry {\nif (!event || !event.elementInfo) {\nres = {};\nreturn res;\n}\n\nlet elementInfo = null;\ntry {\nelementInfo = JSON.parse(event.elementInfo);\n} catch (error) {\n}\n\nif (!elementInfo || !elementInfo.id || typeof elementInfo.id !== 'string') {\nres = {};\nreturn res;\n}\n\nif (!ELEMENT_ID_WHITE_LIST.includes(elementInfo.id)) {\nres = {};\nreturn res;\n}\n\nconst pageEvents = dbInMem.filter(item => ['ZDEN_Onload', 'ZDEN_PageJumpManual', 'ZDEN_PageJumpH5'].includes(item.event_name)).sort((a, b) => b.event_time - a.event_time);\nif (pageEvents.length == 0) {\nthrow 'fail to find ZDEN_PageJumpH5 ZDEN_PageJumpManual ZDEN_Onload event';\n}\n\nconst startTime = pageEvents[0].event_time;\nres.page_title = pageEvents[0].web_page_title;\nres.button_click_time = event.event_time;\nres.page_duration = event.event_time - startTime;\n\nconst resultAutoFillPasteTyping = dbInMem.filter(item => ['ZDEN_Autofill', 'ZDEN_Paste', 'ZDEN_Typing'].includes(item.event_name) && item.event_time >= startTime);\nconst autofillEvents = resultAutoFillPasteTyping.filter(item => item.event_name == 'ZDEN_Autofill');\nconst pasteEvents = resultAutoFillPasteTyping.filter(item => item.event_name == 'ZDEN_Paste');\nconst typingEvents = resultAutoFillPasteTyping.filter(item => item.event_name == 'ZDEN_Typing');\nres.autofill_or_not = autofillEvents.length > 0;\nres.paste_or_not = pasteEvents.length > 0;\n\nlet totalTypingSpeed = 0;\nlet maxTypingSpeed = -Infinity;\nlet minTypingSpeed = Infinity;\nconst mapTyping = {};\nfor (const oneTypingEvent of typingEvents) {\nlet elementInfo = {};\ntry {\nelementInfo = JSON.parse(oneTypingEvent.elementInfo);\n} catch (error) {\ncontinue;\n}\nif (!elementInfo || !elementInfo.id) {\ncontinue;\n}\nmapTyping[elementInfo.id] = mapTyping[elementInfo.id] || [];\nmapTyping[elementInfo.id].push(oneTypingEvent);\n}\n\nif (Object.keys(mapTyping).length > 0) {\nconst mapTypingSpeed = {}\nfor (const oneId in mapTyping) {\nconst typingEventsForOneId = mapTyping[oneId];\nconst oneTypingSpeed = dv.lib_keyboard.calcTypingSpeed(typingEventsForOneId);\nif (oneTypingSpeed >= 0) {\nmapTypingSpeed[oneId] = oneTypingSpeed;\n}\n}\n\nconst numOfIdsWithSpeed = Object.keys(mapTypingSpeed).length;\nif (numOfIdsWithSpeed > 0) {\nfor (const oneIdWithSpeed in mapTypingSpeed) {\nconst oneSpeed = mapTypingSpeed[oneIdWithSpeed];\nmaxTypingSpeed = Math.max(oneSpeed, maxTypingSpeed);\nminTypingSpeed = Math.min(oneSpeed, minTypingSpeed);\ntotalTypingSpeed += oneSpeed;\n}\nconst avgTypingSpeed = totalTypingSpeed / numOfIdsWithSpeed;\nres.avg_typing_speed = avgTypingSpeed;\nres.max_typing_speed = maxTypingSpeed;\nres.min_typing_speed = minTypingSpeed;\n}\n}\n\nconst resultFocus = dbInMem.filter(item => item.event_name == 'ZDEN_Focus' && item.event_time >= startTime);\nlet focusOnTime = [];\nfor (const oneFocusEvent of resultFocus) {\nlet elementInfo = {};\ntry {\nelementInfo = JSON.parse(oneFocusEvent.elementInfo);\n} catch (error) {\ncontinue;\n}\nif (!elementInfo || !elementInfo.tagName || typeof elementInfo.tagName !== 'string' || !elementInfo.type || typeof elementInfo.type !== 'string') {\ncontinue;\n}\nconst tagName = elementInfo.tagName;\nconst type = elementInfo.type;\nif (tagName.toUpperCase() === 'INPUT' && INPUT_TYPE_WHITE_LIST.includes(type.toLowerCase())) {\nfocusOnTime.push(oneFocusEvent.event_time);\n}\n}\nres.text_box_focus_on_time = focusOnTime;\n\nconst resultClick = dbInMem.filter(item => item.event_name == 'ZDEN_Click' && item.event_time >= startTime);\nlet clickCount = 0;\nfor (const oneClickEvent of resultClick) {\nlet elementInfo = {};\ntry {\nelementInfo = JSON.parse(oneClickEvent.elementInfo);\n} catch (error) {\ncontinue;\n}\nif (!elementInfo || typeof elementInfo.tagName !== 'string') {\ncontinue;\n}\nif (elementInfo.tagName.toUpperCase() !== 'INPUT' && elementInfo.tagName.toUpperCase() !== 'BUTTON') {\nclickCount++;\n}\n}\nres.count_of_clicks_on_empty_space = clickCount;\n\nres.suspicious_mouse_movement = dv.lib_mouse.isSuspiciousMouseMovement(startTime, event.event_time, MOUSE_MOVEMENT_TARGETS);\n} catch (error) {\nif (error instanceof Error) {\nerror = error.message;\n}\nres.error = (typeof error == 'string' && error != '') ? error : 'Unknown Error';\n}\nreturn res;\n}\n})();\n\ndv.need_to_upload = (function () {\nconst ELEMENT_ID_WHITE_LIST = [\n'confirm-booking-heatmap',\n];\n\nreturn function (event) {\nif (event.event_type == 1 || event.event_type == 3 || event.event_type == 4) {\nreturn true;\n} else if (event.event_type == 2) {\nif (event.event_name !== 'ZDEN_Click') {\nreturn false;\n}\n\nlet elementInfo = {};\ntry {\nelementInfo = JSON.parse(event.elementInfo);\n} catch (error) {\nreturn false;\n}\n\nif (!elementInfo || !elementInfo.id || typeof elementInfo.id !== 'string') {\nreturn false;\n}\n\nif (!ELEMENT_ID_WHITE_LIST.includes(elementInfo.id)) {\nreturn false;\n}\nreturn true;\n} else {\nreturn false;\n}\n}\n})();\n\ndv.custom_script_verisons = {\ndv:{\nneed_to_upload:'10'\n},\nevent:{\non_ZDEN_Click:'10'\n}\n}";
                if (!startsWith(code).call(code, "empty") || !endsWith(code).call(code, "empty"))
                    try {
                        eval(code)
                    } catch (e) {}
            }
        }]),
        ScriptManager
    }(), __defProp = Object.defineProperty, __defNormalProp = (e, t, r) => t in e ? __defProp(e, t, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: r
    }) : e[t] = r, __publicField = (e, t, r) => (__defNormalProp(e, "symbol" != typeof t ? t + "" : t, r),
    r), _a, __defProp$1 = Object.defineProperty, __defNormalProp$1 = (e, t, r) => t in e ? __defProp$1(e, t, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: r
    }) : e[t] = r, __publicField$1 = (e, t, r) => (__defNormalProp$1(e, "symbol" != typeof t ? t + "" : t, r),
    r), NodeType$2 = (e => (e[e.Document = 0] = "Document",
    e[e.DocumentType = 1] = "DocumentType",
    e[e.Element = 2] = "Element",
    e[e.Text = 3] = "Text",
    e[e.CDATA = 4] = "CDATA",
    e[e.Comment = 5] = "Comment",
    e))(NodeType$2 || {});
    function isElement(e) {
        return e.nodeType === e.ELEMENT_NODE
    }
    function isShadowRoot(e) {
        var t = null == e ? void 0 : e.host;
        return Boolean((null == t ? void 0 : t.shadowRoot) === e)
    }
    function isNativeShadowDom(e) {
        return "[object ShadowRoot]" === Object.prototype.toString.call(e)
    }
    function fixBrowserCompatibilityIssuesInCSS(e) {
        return e = e.includes(" background-clip: text;") && !e.includes(" -webkit-background-clip: text;") ? e.replace(/\sbackground-clip:\s*text;/g, " -webkit-background-clip: text; background-clip: text;") : e
    }
    function escapeImportStatement(e) {
        const t = e["cssText"];
        if (t.split('"').length < 3)
            return t;
        const r = ["@import", `url(${JSON.stringify(e.href)})`];
        return "" === e.layerName ? r.push("layer") : e.layerName && r.push(`layer(${e.layerName})`),
        e.supportsText && r.push(`supports(${e.supportsText})`),
        e.media.length && r.push(e.media.mediaText),
        r.join(" ") + ";"
    }
    function stringifyStylesheet(e) {
        try {
            var t = e.rules || e.cssRules;
            return t ? fixBrowserCompatibilityIssuesInCSS(Array.from(t, stringifyRule).join("")) : null
        } catch (e) {
            return null
        }
    }
    function stringifyRule(e) {
        let t;
        if (isCSSImportRule(e))
            try {
                t = stringifyStylesheet(e.styleSheet) || escapeImportStatement(e)
            } catch (e) {}
        else if (isCSSStyleRule(e) && e.selectorText.includes(":"))
            return fixSafariColons(e.cssText);
        return t || e.cssText
    }
    function fixSafariColons(e) {
        return e.replace(/(\[(?:[\w-]+)[^\\])(:(?:[\w-]+)\])/gm, "$1\\$2")
    }
    function isCSSImportRule(e) {
        return "styleSheet"in e
    }
    function isCSSStyleRule(e) {
        return "selectorText"in e
    }
    class Mirror {
        constructor() {
            __publicField$1(this, "idNodeMap", new Map),
            __publicField$1(this, "nodeMetaMap", new WeakMap)
        }
        getId(e) {
            return e ? (null == (e = this.getMeta(e)) ? void 0 : e.id) ?? -1 : -1
        }
        getNode(e) {
            return this.idNodeMap.get(e) || null
        }
        getIds() {
            return Array.from(this.idNodeMap.keys())
        }
        getMeta(e) {
            return this.nodeMetaMap.get(e) || null
        }
        removeNodeFromMap(e) {
            var t = this.getId(e);
            this.idNodeMap.delete(t),
            e.childNodes && e.childNodes.forEach(e => this.removeNodeFromMap(e))
        }
        has(e) {
            return this.idNodeMap.has(e)
        }
        hasNode(e) {
            return this.nodeMetaMap.has(e)
        }
        add(e, t) {
            var r = t.id;
            this.idNodeMap.set(r, e),
            this.nodeMetaMap.set(e, t)
        }
        replace(e, t) {
            var r = this.getNode(e);
            r && (r = this.nodeMetaMap.get(r)) && this.nodeMetaMap.set(t, r),
            this.idNodeMap.set(e, t)
        }
        reset() {
            this.idNodeMap = new Map,
            this.nodeMetaMap = new WeakMap
        }
    }
    function createMirror$2() {
        return new Mirror
    }
    function maskInputValue({element: e, maskInputOptions: t, tagName: r, type: n, value: o, maskInputFn: a}) {
        let i = o || "";
        o = n && toLowerCase(n);
        return i = t[r.toLowerCase()] || o && t[o] ? a ? a(i, e) : "*".repeat(i.length) : i
    }
    function toLowerCase(e) {
        return e.toLowerCase()
    }
    const ORIGINAL_ATTRIBUTE_NAME = "__rrweb_original__";
    function is2DCanvasBlank(r) {
        var n = r.getContext("2d");
        if (!n)
            return 1;
        for (let t = 0; t < r.width; t += 50)
            for (let e = 0; e < r.height; e += 50) {
                var o = n.getImageData;
                const a = ORIGINAL_ATTRIBUTE_NAME in o ? o[ORIGINAL_ATTRIBUTE_NAME] : o
                  , i = new Uint32Array(a.call(n, t, e, Math.min(50, r.width - t), Math.min(50, r.height - e)).data.buffer);
                if (i.some(e => 0 !== e))
                    return
            }
        return 1
    }
    function getInputType(e) {
        var t = e.type;
        return e.hasAttribute("data-rr-is-password") ? "password" : t ? toLowerCase(t) : null
    }
    function extractFileExtension(e, t) {
        let r;
        try {
            r = new URL(e,t ?? window.location.href)
        } catch (e) {
            return null
        }
        e = r.pathname.match(/\.([0-9a-z]+)(?:$)/i);
        return (null == e ? void 0 : e[1]) ?? null
    }
    let _id = 1;
    const tagNameRegex = new RegExp("[^a-z0-9-_:]")
      , IGNORED_NODE = -2;
    function genId() {
        return _id++
    }
    function getValidTagName$1(e) {
        if (e instanceof HTMLFormElement)
            return "form";
        e = toLowerCase(e.tagName);
        return tagNameRegex.test(e) ? "div" : e
    }
    function extractOrigin(e) {
        let t = "";
        return t = (t = -1 < e.indexOf("//") ? e.split("/").slice(0, 3).join("/") : e.split("/")[0]).split("?")[0]
    }
    let canvasService, canvasCtx;
    const URL_IN_CSS_REF = /url\((?:(')([^']*)'|(")(.*?)"|([^)]*))\)/gm
      , URL_PROTOCOL_MATCH = /^(?:[a-z+]+:)?\/\//i
      , URL_WWW_MATCH = /^www\..*/i
      , DATA_URI = /^(data:)([^,]*),(.*)/i;
    function absoluteToStylesheet(e, c) {
        return (e || "").replace(URL_IN_CSS_REF, (e, t, r, n, o, a) => {
            const i = r || o || a;
            r = t || n || "";
            if (!i)
                return e;
            if (URL_PROTOCOL_MATCH.test(i) || URL_WWW_MATCH.test(i))
                return `url(${r}${i}${r})`;
            if (DATA_URI.test(i))
                return `url(${r}${i}${r})`;
            if ("/" === i[0])
                return `url(${r}${extractOrigin(c) + i}${r})`;
            const s = c.split("/");
            o = i.split("/");
            s.pop();
            for (const l of o)
                "." !== l && (".." === l ? s.pop() : s.push(l));
            return `url(${r}${s.join("/")}${r})`
        }
        )
    }
    const SRCSET_NOT_SPACES = /^[^ \t\n\r\u000c]+/
      , SRCSET_COMMAS_OR_SPACES = /^[, \t\n\r\u000c]+/;
    function getAbsoluteSrcsetString(n, o) {
        if ("" === o.trim())
            return o;
        let a = 0;
        function e(e) {
            var e = e.exec(o.substring(a));
            return e ? (e = e[0],
            a += e.length,
            e) : ""
        }
        const i = [];
        for (; ; ) {
            if (e(SRCSET_COMMAS_OR_SPACES),
            a >= o.length)
                break;
            let r = e(SRCSET_NOT_SPACES);
            if ("," === r.slice(-1))
                r = absoluteToDoc(n, r.substring(0, r.length - 1)),
                i.push(r);
            else {
                let e = ""
                  , t = (r = absoluteToDoc(n, r),
                !1);
                for (; ; ) {
                    var s = o.charAt(a);
                    if ("" === s) {
                        i.push((r + e).trim());
                        break
                    }
                    if (t)
                        ")" === s && (t = !1);
                    else {
                        if ("," === s) {
                            a += 1,
                            i.push((r + e).trim());
                            break
                        }
                        "(" === s && (t = !0)
                    }
                    e += s,
                    a += 1
                }
            }
        }
        return i.join(", ")
    }
    const cachedDocument = new WeakMap;
    function absoluteToDoc(e, t) {
        return t && "" !== t.trim() ? getHref(e, t) : t
    }
    function isSVGElement(e) {
        return Boolean("svg" === e.tagName || e.ownerSVGElement)
    }
    function getHref(e, t) {
        let r = cachedDocument.get(e);
        if (r || (r = e.createElement("a"),
        cachedDocument.set(e, r)),
        t) {
            if (t.startsWith("blob:") || t.startsWith("data:"))
                return t
        } else
            t = "";
        return r.setAttribute("href", t),
        r.href
    }
    function transformAttribute(e, t, r, n) {
        return n && ("src" !== r && ("href" !== r || "use" === t && "#" === n[0]) && ("xlink:href" !== r || "#" === n[0]) && ("background" !== r || "table" !== t && "td" !== t && "th" !== t) ? "srcset" === r ? getAbsoluteSrcsetString(e, n) : "style" === r ? absoluteToStylesheet(n, getHref(e)) : "object" === t && "data" === r ? absoluteToDoc(e, n) : n : absoluteToDoc(e, n))
    }
    function ignoreAttribute(e, t, r) {
        return ("video" === e || "audio" === e) && "autoplay" === t
    }
    function _isBlockedElement(t, r, e) {
        try {
            if ("string" == typeof r) {
                if (t.classList.contains(r))
                    return !0
            } else
                for (let e = t.classList.length; e--; ) {
                    var n = t.classList[e];
                    if (r.test(n))
                        return !0
                }
            if (e)
                return t.matches(e)
        } catch (e) {}
        return !1
    }
    function classMatchesRegex(t, r, e) {
        if (!t)
            return !1;
        if (t.nodeType !== t.ELEMENT_NODE)
            return !!e && classMatchesRegex(t.parentNode, r, e);
        for (let e = t.classList.length; e--; ) {
            var n = t.classList[e];
            if (r.test(n))
                return !0
        }
        return !!e && classMatchesRegex(t.parentNode, r, e)
    }
    function needMaskingText(e, t, r, n) {
        try {
            const o = e.nodeType === e.ELEMENT_NODE ? e : e.parentElement;
            if (null === o)
                return !1;
            if ("string" == typeof t) {
                if (n) {
                    if (o.closest("." + t))
                        return !0
                } else if (o.classList.contains(t))
                    return !0
            } else if (classMatchesRegex(o, t, n))
                return !0;
            if (r)
                if (n) {
                    if (o.closest(r))
                        return !0
                } else if (o.matches(r))
                    return !0
        } catch (e) {}
        return !1
    }
    function onceIframeLoaded(r, n, o) {
        var a = r.contentWindow;
        if (a) {
            let e = !1, t;
            try {
                t = a.document.readyState
            } catch (e) {
                return
            }
            if ("complete" !== t) {
                const i = setTimeout( () => {
                    e || (n(),
                    e = !0)
                }
                , o);
                void r.addEventListener("load", () => {
                    clearTimeout(i),
                    e = !0,
                    n()
                }
                )
            } else {
                o = "about:blank";
                if (a.location.href !== o || r.src === o || "" === r.src)
                    return setTimeout(n, 0),
                    r.addEventListener("load", n);
                r.addEventListener("load", n)
            }
        }
    }
    function onceStylesheetLoaded(e, t, r) {
        let n = !1, o;
        try {
            o = e.sheet
        } catch (e) {
            return
        }
        if (!o) {
            const a = setTimeout( () => {
                n || (t(),
                n = !0)
            }
            , r);
            e.addEventListener("load", () => {
                clearTimeout(a),
                n = !0,
                t()
            }
            )
        }
    }
    function serializeNode(e, t) {
        var {doc: r, mirror: t, blockClass: n, blockSelector: o, needsMask: a, inlineStylesheet: i, maskInputOptions: s={}, maskTextFn: l, maskInputFn: c, dataURLOptions: u={}, inlineImages: p, recordCanvas: d, keepIframeSrcFn: f, newlyAddedElement: h=!1} = t
          , g = getRootId(r, t);
        switch (e.nodeType) {
        case e.DOCUMENT_NODE:
            return "CSS1Compat" !== e.compatMode ? {
                type: NodeType$2.Document,
                childNodes: [],
                compatMode: e.compatMode
            } : {
                type: NodeType$2.Document,
                childNodes: []
            };
        case e.DOCUMENT_TYPE_NODE:
            return {
                type: NodeType$2.DocumentType,
                name: e.name,
                publicId: e.publicId,
                systemId: e.systemId,
                rootId: g
            };
        case e.ELEMENT_NODE:
            return serializeElementNode(e, {
                doc: r,
                blockClass: n,
                blockSelector: o,
                inlineStylesheet: i,
                maskInputOptions: s,
                maskInputFn: c,
                dataURLOptions: u,
                inlineImages: p,
                recordCanvas: d,
                keepIframeSrcFn: f,
                newlyAddedElement: h,
                rootId: g
            });
        case e.TEXT_NODE:
            return serializeTextNode(e, {
                doc: r,
                needsMask: a,
                maskTextFn: l,
                rootId: g
            });
        case e.CDATA_SECTION_NODE:
            return {
                type: NodeType$2.CDATA,
                textContent: "",
                rootId: g
            };
        case e.COMMENT_NODE:
            return {
                type: NodeType$2.Comment,
                textContent: e.textContent || "",
                rootId: g
            };
        default:
            return !1
        }
    }
    function getRootId(e, t) {
        if (t.hasNode(e))
            return t = t.getId(e),
            1 === t ? void 0 : t
    }
    function serializeTextNode(t, e) {
        var r;
        const {needsMask: n, maskTextFn: o, rootId: a} = e;
        var i = t.parentNode && t.parentNode.tagName;
        let s = t.textContent;
        var l = "STYLE" === i || void 0
          , i = "SCRIPT" === i || void 0;
        if (l && s) {
            try {
                t.nextSibling || t.previousSibling || null != (r = t.parentNode.sheet) && r.cssRules && (s = stringifyStylesheet(t.parentNode.sheet))
            } catch (e) {
                console.warn("Cannot get CSS styles from text's parentNode. Error: " + e, t)
            }
            s = absoluteToStylesheet(s, getHref(e.doc))
        }
        return i && (s = "SCRIPT_PLACEHOLDER"),
        !l && !i && s && n && (s = o ? o(s, t.parentElement) : s.replace(/[\S]/g, "*")),
        {
            type: NodeType$2.Text,
            textContent: s || "",
            isStyle: l,
            rootId: a
        }
    }
    function serializeElementNode(t, e) {
        const {doc: r, blockClass: n, blockSelector: o, inlineStylesheet: a, maskInputOptions: i={}, maskInputFn: s, dataURLOptions: l={}, inlineImages: c, recordCanvas: u, keepIframeSrcFn: p, newlyAddedElement: d=!1, rootId: f} = e;
        var e = _isBlockedElement(t, n, o)
          , h = getValidTagName$1(t);
        let g = {};
        var m, y = t.attributes.length;
        for (let e = 0; e < y; e++) {
            var S = t.attributes[e];
            ignoreAttribute(h, S.name, S.value) || (g[S.name] = transformAttribute(r, h, toLowerCase(S.name), S.value))
        }
        if ("link" === h && a) {
            var v = Array.from(r.styleSheets).find(e => e.href === t.href);
            let e = null;
            (e = v ? stringifyStylesheet(v) : e) && (delete g.rel,
            delete g.href,
            g._cssText = absoluteToStylesheet(e, v.href))
        }
        if ("style" !== h || !t.sheet || (t.innerText || t.textContent || "").trim().length || (v = stringifyStylesheet(t.sheet)) && (g._cssText = absoluteToStylesheet(v, getHref(r))),
        "input" !== h && "textarea" !== h && "select" !== h || (v = t.value,
        m = t.checked,
        "radio" !== g.type && "checkbox" !== g.type && "submit" !== g.type && "button" !== g.type && v ? g.value = maskInputValue({
            element: t,
            type: getInputType(t),
            tagName: h,
            value: v,
            maskInputOptions: i,
            maskInputFn: s
        }) : m && (g.checked = m)),
        "option" === h && (t.selected && !i.select ? g.selected = !0 : delete g.selected),
        "canvas" === h && u)
            if ("2d" === t.__context)
                is2DCanvasBlank(t) || (g.rr_dataURL = t.toDataURL(l.type, l.quality));
            else if (!("__context"in t)) {
                var v = t.toDataURL(l.type, l.quality);
                const E = r.createElement("canvas");
                E.width = t.width,
                E.height = t.height,
                v !== E.toDataURL(l.type, l.quality) && (g.rr_dataURL = v)
            }
        if ("img" === h && c) {
            canvasService || (canvasService = r.createElement("canvas"),
            canvasCtx = canvasService.getContext("2d"));
            const $ = t
              , T = $.currentSrc || $.getAttribute("src") || "<unknown-src>"
              , I = $.crossOrigin
              , _ = () => {
                $.removeEventListener("load", _);
                try {
                    canvasService.width = $.naturalWidth,
                    canvasService.height = $.naturalHeight,
                    canvasCtx.drawImage($, 0, 0),
                    g.rr_dataURL = canvasService.toDataURL(l.type, l.quality)
                } catch (e) {
                    if ("anonymous" !== $.crossOrigin)
                        return $.crossOrigin = "anonymous",
                        void ($.complete && 0 !== $.naturalWidth ? _() : $.addEventListener("load", _));
                    console.warn(`Cannot inline img src=${T}! Error: ` + e)
                }
                "anonymous" === $.crossOrigin && (I ? g.crossOrigin = I : $.removeAttribute("crossorigin"))
            }
            ;
            $.complete && 0 !== $.naturalWidth ? _() : $.addEventListener("load", _)
        }
        if ("audio" === h || "video" === h) {
            const w = g;
            w.rr_mediaState = t.paused ? "paused" : "played",
            w.rr_mediaCurrentTime = t.currentTime,
            w.rr_mediaPlaybackRate = t.playbackRate,
            w.rr_mediaMuted = t.muted,
            w.rr_mediaLoop = t.loop,
            w.rr_mediaVolume = t.volume
        }
        d || (t.scrollLeft && (g.rr_scrollLeft = t.scrollLeft),
        t.scrollTop && (g.rr_scrollTop = t.scrollTop)),
        e && ({width: m, height: v} = t.getBoundingClientRect(),
        g = {
            class: g.class,
            rr_width: m + "px",
            rr_height: v + "px"
        }),
        "iframe" !== h || p(g.src) || (t.contentDocument || (g.rr_src = g.src),
        delete g.src);
        let b;
        try {
            customElements.get(h) && (b = !0)
        } catch (e) {}
        return {
            type: NodeType$2.Element,
            tagName: h,
            attributes: g,
            childNodes: [],
            isSVG: isSVGElement(t) || void 0,
            needBlock: e,
            rootId: f,
            isCustom: b
        }
    }
    function lowerIfExists(e) {
        return null == e ? "" : e.toLowerCase()
    }
    function slimDOMExcluded(e, t) {
        if (t.comment && e.type === NodeType$2.Comment)
            return 1;
        if (e.type === NodeType$2.Element) {
            if (t.script && ("script" === e.tagName || "link" === e.tagName && ("preload" === e.attributes.rel || "modulepreload" === e.attributes.rel) && "script" === e.attributes.as || "link" === e.tagName && "prefetch" === e.attributes.rel && "string" == typeof e.attributes.href && "js" === extractFileExtension(e.attributes.href)))
                return 1;
            if (t.headFavicon && ("link" === e.tagName && "shortcut icon" === e.attributes.rel || "meta" === e.tagName && (lowerIfExists(e.attributes.name).match(/^msapplication-tile(image|color)$/) || "application-name" === lowerIfExists(e.attributes.name) || "icon" === lowerIfExists(e.attributes.rel) || "apple-touch-icon" === lowerIfExists(e.attributes.rel) || "shortcut icon" === lowerIfExists(e.attributes.rel))))
                return 1;
            if ("meta" === e.tagName) {
                if (t.headMetaDescKeywords && lowerIfExists(e.attributes.name).match(/^description|keywords$/))
                    return 1;
                if (t.headMetaSocial && (lowerIfExists(e.attributes.property).match(/^(og|twitter|fb):/) || lowerIfExists(e.attributes.name).match(/^(og|twitter):/) || "pinterest" === lowerIfExists(e.attributes.name)))
                    return 1;
                if (t.headMetaRobots && ("robots" === lowerIfExists(e.attributes.name) || "googlebot" === lowerIfExists(e.attributes.name) || "bingbot" === lowerIfExists(e.attributes.name)))
                    return 1;
                if (t.headMetaHttpEquiv && void 0 !== e.attributes["http-equiv"])
                    return 1;
                if (t.headMetaAuthorship && ("author" === lowerIfExists(e.attributes.name) || "generator" === lowerIfExists(e.attributes.name) || "framework" === lowerIfExists(e.attributes.name) || "publisher" === lowerIfExists(e.attributes.name) || "progid" === lowerIfExists(e.attributes.name) || lowerIfExists(e.attributes.property).match(/^article:/) || lowerIfExists(e.attributes.property).match(/^product:/)))
                    return 1;
                if (t.headMetaVerification && ("google-site-verification" === lowerIfExists(e.attributes.name) || "yandex-verification" === lowerIfExists(e.attributes.name) || "csrf-token" === lowerIfExists(e.attributes.name) || "p:domain_verify" === lowerIfExists(e.attributes.name) || "verify-v1" === lowerIfExists(e.attributes.name) || "verification" === lowerIfExists(e.attributes.name) || "shopify-checkout-api-token" === lowerIfExists(e.attributes.name)))
                    return 1
            }
        }
    }
    function serializeNodeWithId(t, e) {
        const {doc: r, mirror: n, blockClass: o, blockSelector: a, maskTextClass: i, maskTextSelector: s, skipChild: l=!1, inlineStylesheet: c=!0, maskInputOptions: u={}, maskTextFn: p, maskInputFn: d, slimDOMOptions: f, dataURLOptions: h={}, inlineImages: g=!1, recordCanvas: m=!1, onSerialize: y, onIframeLoad: S, iframeLoadTimeout: v=5e3, onStylesheetLoad: b, stylesheetLoadTimeout: E=5e3, keepIframeSrcFn: $= () => !1, newlyAddedElement: T=!1} = e;
        let I = e["needsMask"]
          , {preserveWhiteSpace: _=!0} = e;
        !I && t.childNodes && (e = void 0 === I,
        I = needMaskingText(t, i, s, e));
        const w = serializeNode(t, {
            doc: r,
            mirror: n,
            blockClass: o,
            blockSelector: a,
            needsMask: I,
            inlineStylesheet: c,
            maskInputOptions: u,
            maskTextFn: p,
            maskInputFn: d,
            dataURLOptions: h,
            inlineImages: g,
            recordCanvas: m,
            keepIframeSrcFn: $,
            newlyAddedElement: T
        });
        if (!w)
            return console.warn(t, "not serialized"),
            null;
        let O;
        O = n.hasNode(t) ? n.getId(t) : slimDOMExcluded(w, f) || !_ && w.type === NodeType$2.Text && !w.isStyle && !w.textContent.replace(/^\s+|\s+$/gm, "").length ? IGNORED_NODE : genId();
        const C = Object.assign(w, {
            id: O
        });
        if (n.add(t, C),
        O === IGNORED_NODE)
            return null;
        y && y(t);
        let A = !l;
        if (C.type === NodeType$2.Element && (A = A && !C.needBlock,
        delete C.needBlock,
        (e = t.shadowRoot) && isNativeShadowDom(e) && (C.isShadowHost = !0)),
        (C.type === NodeType$2.Document || C.type === NodeType$2.Element) && A) {
            f.headWhitespace && C.type === NodeType$2.Element && "head" === C.tagName && (_ = !1);
            var R = {
                doc: r,
                mirror: n,
                blockClass: o,
                blockSelector: a,
                needsMask: I,
                maskTextClass: i,
                maskTextSelector: s,
                skipChild: l,
                inlineStylesheet: c,
                maskInputOptions: u,
                maskTextFn: p,
                maskInputFn: d,
                slimDOMOptions: f,
                dataURLOptions: h,
                inlineImages: g,
                recordCanvas: m,
                preserveWhiteSpace: _,
                onSerialize: y,
                onIframeLoad: S,
                iframeLoadTimeout: v,
                onStylesheetLoad: b,
                stylesheetLoadTimeout: E,
                keepIframeSrcFn: $
            };
            if (C.type !== NodeType$2.Element || "textarea" !== C.tagName || void 0 === C.attributes.value)
                for (const D of Array.from(t.childNodes)) {
                    var P = serializeNodeWithId(D, R);
                    P && C.childNodes.push(P)
                }
            if (isElement(t) && t.shadowRoot)
                for (const k of Array.from(t.shadowRoot.childNodes)) {
                    const M = serializeNodeWithId(k, R);
                    M && (isNativeShadowDom(t.shadowRoot) && (M.isShadow = !0),
                    C.childNodes.push(M))
                }
        }
        return t.parentNode && isShadowRoot(t.parentNode) && isNativeShadowDom(t.parentNode) && (C.isShadow = !0),
        C.type === NodeType$2.Element && "iframe" === C.tagName && onceIframeLoaded(t, () => {
            var e = t.contentDocument;
            e && S && ((e = serializeNodeWithId(e, {
                doc: e,
                mirror: n,
                blockClass: o,
                blockSelector: a,
                needsMask: I,
                maskTextClass: i,
                maskTextSelector: s,
                skipChild: !1,
                inlineStylesheet: c,
                maskInputOptions: u,
                maskTextFn: p,
                maskInputFn: d,
                slimDOMOptions: f,
                dataURLOptions: h,
                inlineImages: g,
                recordCanvas: m,
                preserveWhiteSpace: _,
                onSerialize: y,
                onIframeLoad: S,
                iframeLoadTimeout: v,
                onStylesheetLoad: b,
                stylesheetLoadTimeout: E,
                keepIframeSrcFn: $
            })) && S(t, e))
        }
        , v),
        C.type === NodeType$2.Element && "link" === C.tagName && "string" == typeof C.attributes.rel && ("stylesheet" === C.attributes.rel || "preload" === C.attributes.rel && "string" == typeof C.attributes.href && "css" === extractFileExtension(C.attributes.href)) && onceStylesheetLoaded(t, () => {
            var e;
            b && (e = serializeNodeWithId(t, {
                doc: r,
                mirror: n,
                blockClass: o,
                blockSelector: a,
                needsMask: I,
                maskTextClass: i,
                maskTextSelector: s,
                skipChild: !1,
                inlineStylesheet: c,
                maskInputOptions: u,
                maskTextFn: p,
                maskInputFn: d,
                slimDOMOptions: f,
                dataURLOptions: h,
                inlineImages: g,
                recordCanvas: m,
                preserveWhiteSpace: _,
                onSerialize: y,
                onIframeLoad: S,
                iframeLoadTimeout: v,
                onStylesheetLoad: b,
                stylesheetLoadTimeout: E,
                keepIframeSrcFn: $
            })) && b(t, e)
        }
        , E),
        C
    }
    function snapshot(e, t) {
        var {mirror: t=new Mirror, blockClass: r="rr-block", blockSelector: n=null, maskTextClass: o="rr-mask", maskTextSelector: a=null, inlineStylesheet: i=!0, inlineImages: s=!1, recordCanvas: l=!1, maskAllInputs: c=!1, maskTextFn: u, maskInputFn: p, slimDOM: d=!1, dataURLOptions: f, preserveWhiteSpace: h, onSerialize: g, onIframeLoad: m, iframeLoadTimeout: y, onStylesheetLoad: S, stylesheetLoadTimeout: v, keepIframeSrcFn: b= () => !1} = t || {};
        return serializeNodeWithId(e, {
            doc: e,
            mirror: t,
            blockClass: r,
            blockSelector: n,
            maskTextClass: o,
            maskTextSelector: a,
            skipChild: !1,
            inlineStylesheet: i,
            maskInputOptions: !0 === c ? {
                color: !0,
                date: !0,
                "datetime-local": !0,
                email: !0,
                month: !0,
                number: !0,
                range: !0,
                search: !0,
                tel: !0,
                text: !0,
                time: !0,
                url: !0,
                week: !0,
                textarea: !0,
                select: !0,
                password: !0
            } : !1 === c ? {
                password: !0
            } : c,
            maskTextFn: u,
            maskInputFn: p,
            slimDOMOptions: !0 === d || "all" === d ? {
                script: !0,
                comment: !0,
                headFavicon: !0,
                headWhitespace: !0,
                headMetaDescKeywords: "all" === d,
                headMetaSocial: !0,
                headMetaRobots: !0,
                headMetaHttpEquiv: !0,
                headMetaAuthorship: !0,
                headMetaVerification: !0
            } : !1 === d ? {} : d,
            dataURLOptions: f,
            inlineImages: s,
            recordCanvas: l,
            preserveWhiteSpace: h,
            onSerialize: g,
            onIframeLoad: m,
            iframeLoadTimeout: y,
            onStylesheetLoad: S,
            stylesheetLoadTimeout: v,
            keepIframeSrcFn: b,
            newlyAddedElement: !1
        })
    }
    function on(e, t, r=document) {
        const n = {
            capture: !0,
            passive: !0
        };
        return r.addEventListener(e, t, n),
        () => r.removeEventListener(e, t, n)
    }
    const DEPARTED_MIRROR_ACCESS_WARNING = "Please stop import mirror directly. Instead of that,\r\nnow you can use replayer.getMirror() to access the mirror instance of a replayer,\r\nor you can use record.mirror to access the mirror instance during recording.";
    let _mirror = {
        map: {},
        getId() {
            return console.error(DEPARTED_MIRROR_ACCESS_WARNING),
            -1
        },
        getNode() {
            return console.error(DEPARTED_MIRROR_ACCESS_WARNING),
            null
        },
        removeNodeFromMap() {
            console.error(DEPARTED_MIRROR_ACCESS_WARNING)
        },
        has() {
            return console.error(DEPARTED_MIRROR_ACCESS_WARNING),
            !1
        },
        reset() {
            console.error(DEPARTED_MIRROR_ACCESS_WARNING)
        }
    };
    function throttle(o, a, i={}) {
        let s = null
          , l = 0;
        return function(...e) {
            var t = Date.now()
              , r = (l || !1 !== i.leading || (l = t),
            a - (t - l));
            const n = this;
            r <= 0 || a < r ? (s && (clearTimeout(s),
            s = null),
            l = t,
            o.apply(n, e)) : s || !1 === i.trailing || (s = setTimeout( () => {
                l = !1 === i.leading ? 0 : Date.now(),
                s = null,
                o.apply(n, e)
            }
            , r))
        }
    }
    function hookSetter(e, t, r, n, o=window) {
        const a = o.Object.getOwnPropertyDescriptor(e, t);
        return o.Object.defineProperty(e, t, n ? r : {
            set(e) {
                setTimeout( () => {
                    r.set.call(this, e)
                }
                , 0),
                a && a.set && a.set.call(this, e)
            }
        }),
        () => hookSetter(e, t, a || {}, !0)
    }
    function patch(e, t, r) {
        try {
            if (!(t in e))
                return () => {}
                ;
            const n = e[t]
              , o = r(n);
            return "function" == typeof o && (o.prototype = o.prototype || {},
            Object.defineProperties(o, {
                __rrweb_original__: {
                    enumerable: !1,
                    value: n
                }
            })),
            e[t] = o,
            () => {
                e[t] = n
            }
        } catch {
            return () => {}
        }
    }
    "undefined" != typeof window && window.Proxy && window.Reflect && (_mirror = new Proxy(_mirror,{
        get(e, t, r) {
            return "map" === t && console.error(DEPARTED_MIRROR_ACCESS_WARNING),
            Reflect.get(e, t, r)
        }
    }));
    let nowTimestamp = Date.now;
    function getWindowScroll(e) {
        var t, r = e.document;
        return {
            left: r.scrollingElement ? r.scrollingElement.scrollLeft : void 0 !== e.pageXOffset ? e.pageXOffset : (null == r ? void 0 : r.documentElement.scrollLeft) || (null == (t = null == (t = null == r ? void 0 : r.body) ? void 0 : t.parentElement) ? void 0 : t.scrollLeft) || (null == (t = null == r ? void 0 : r.body) ? void 0 : t.scrollLeft) || 0,
            top: r.scrollingElement ? r.scrollingElement.scrollTop : void 0 !== e.pageYOffset ? e.pageYOffset : (null == r ? void 0 : r.documentElement.scrollTop) || (null == (e = null == (t = null == r ? void 0 : r.body) ? void 0 : t.parentElement) ? void 0 : e.scrollTop) || (null == (t = null == r ? void 0 : r.body) ? void 0 : t.scrollTop) || 0
        }
    }
    function getWindowHeight() {
        return window.innerHeight || document.documentElement && document.documentElement.clientHeight || document.body && document.body.clientHeight
    }
    function getWindowWidth() {
        return window.innerWidth || document.documentElement && document.documentElement.clientWidth || document.body && document.body.clientWidth
    }
    function closestElementOfNode(e) {
        return e ? e.nodeType === e.ELEMENT_NODE ? e : e.parentElement : null
    }
    function isBlocked(e, t, r, n) {
        if (!e)
            return !1;
        const o = closestElementOfNode(e);
        if (!o)
            return !1;
        try {
            if ("string" == typeof t) {
                if (o.classList.contains(t))
                    return !0;
                if (n && null !== o.closest("." + t))
                    return !0
            } else if (classMatchesRegex(o, t, n))
                return !0
        } catch (e) {}
        if (r) {
            if (o.matches(r))
                return !0;
            if (n && null !== o.closest(r))
                return !0
        }
        return !1
    }
    function isSerialized(e, t) {
        return -1 !== t.getId(e)
    }
    function isIgnored(e, t, r) {
        return "TITLE" === e.tagName && r.headTitleMutations || t.getId(e) === IGNORED_NODE
    }
    function isAncestorRemoved(e, t) {
        if (isShadowRoot(e))
            return !1;
        var r = t.getId(e);
        return !t.has(r) || (!e.parentNode || e.parentNode.nodeType !== e.DOCUMENT_NODE) && (!e.parentNode || isAncestorRemoved(e.parentNode, t))
    }
    function legacy_isTouchEvent(e) {
        return Boolean(e.changedTouches)
    }
    function polyfill$1(e=window) {
        "NodeList"in e && !e.NodeList.prototype.forEach && (e.NodeList.prototype.forEach = Array.prototype.forEach),
        "DOMTokenList"in e && !e.DOMTokenList.prototype.forEach && (e.DOMTokenList.prototype.forEach = Array.prototype.forEach),
        Node.prototype.contains || (Node.prototype.contains = (...e) => {
            let t = e[0];
            if (!(0 in e))
                throw new TypeError("1 argument is required");
            do {
                if (this === t)
                    return !0
            } while (t = t && t.parentNode);
            return !1
        }
        )
    }
    function isSerializedIframe(e, t) {
        return Boolean("IFRAME" === e.nodeName && t.getMeta(e))
    }
    function isSerializedStylesheet(e, t) {
        return Boolean("LINK" === e.nodeName && e.nodeType === e.ELEMENT_NODE && e.getAttribute && "stylesheet" === e.getAttribute("rel") && t.getMeta(e))
    }
    function hasShadowRoot(e) {
        return Boolean(null == e ? void 0 : e.shadowRoot)
    }
    /[1-9][0-9]{12}/.test(Date.now().toString()) || (nowTimestamp = () => (new Date).getTime());
    class StyleSheetMirror {
        constructor() {
            __publicField(this, "id", 1),
            __publicField(this, "styleIDMap", new WeakMap),
            __publicField(this, "idStyleMap", new Map)
        }
        getId(e) {
            return this.styleIDMap.get(e) ?? -1
        }
        has(e) {
            return this.styleIDMap.has(e)
        }
        add(e, t) {
            if (this.has(e))
                return this.getId(e);
            let r;
            return r = void 0 === t ? this.id++ : t,
            this.styleIDMap.set(e, r),
            this.idStyleMap.set(r, e),
            r
        }
        getStyle(e) {
            return this.idStyleMap.get(e) || null
        }
        reset() {
            this.styleIDMap = new WeakMap,
            this.idStyleMap = new Map,
            this.id = 1
        }
        generateId() {
            return this.id++
        }
    }
    function getShadowHost(e) {
        var t;
        let r = null;
        return r = (null == (t = null == (t = e.getRootNode) ? void 0 : t.call(e)) ? void 0 : t.nodeType) === Node.DOCUMENT_FRAGMENT_NODE && e.getRootNode().host ? e.getRootNode().host : r
    }
    function getRootShadowHost(e) {
        let t = e;
        for (var r; r = getShadowHost(t); )
            t = r;
        return t
    }
    function shadowHostInDom(e) {
        const t = e.ownerDocument;
        if (!t)
            return !1;
        e = getRootShadowHost(e);
        return t.contains(e)
    }
    function inDom(e) {
        const t = e.ownerDocument;
        return t && (t.contains(e) || shadowHostInDom(e))
    }
    var EventType = (e => (e[e.DomContentLoaded = 0] = "DomContentLoaded",
    e[e.Load = 1] = "Load",
    e[e.FullSnapshot = 2] = "FullSnapshot",
    e[e.IncrementalSnapshot = 3] = "IncrementalSnapshot",
    e[e.Meta = 4] = "Meta",
    e[e.Custom = 5] = "Custom",
    e[e.Plugin = 6] = "Plugin",
    e))(EventType || {})
      , IncrementalSource = (e => (e[e.Mutation = 0] = "Mutation",
    e[e.MouseMove = 1] = "MouseMove",
    e[e.MouseInteraction = 2] = "MouseInteraction",
    e[e.Scroll = 3] = "Scroll",
    e[e.ViewportResize = 4] = "ViewportResize",
    e[e.Input = 5] = "Input",
    e[e.TouchMove = 6] = "TouchMove",
    e[e.MediaInteraction = 7] = "MediaInteraction",
    e[e.StyleSheetRule = 8] = "StyleSheetRule",
    e[e.CanvasMutation = 9] = "CanvasMutation",
    e[e.Font = 10] = "Font",
    e[e.Log = 11] = "Log",
    e[e.Drag = 12] = "Drag",
    e[e.StyleDeclaration = 13] = "StyleDeclaration",
    e[e.Selection = 14] = "Selection",
    e[e.AdoptedStyleSheet = 15] = "AdoptedStyleSheet",
    e[e.CustomElement = 16] = "CustomElement",
    e))(IncrementalSource || {})
      , MouseInteractions = (e => (e[e.MouseUp = 0] = "MouseUp",
    e[e.MouseDown = 1] = "MouseDown",
    e[e.Click = 2] = "Click",
    e[e.ContextMenu = 3] = "ContextMenu",
    e[e.DblClick = 4] = "DblClick",
    e[e.Focus = 5] = "Focus",
    e[e.Blur = 6] = "Blur",
    e[e.TouchStart = 7] = "TouchStart",
    e[e.TouchMove_Departed = 8] = "TouchMove_Departed",
    e[e.TouchEnd = 9] = "TouchEnd",
    e[e.TouchCancel = 10] = "TouchCancel",
    e))(MouseInteractions || {})
      , PointerTypes = (e => (e[e.Mouse = 0] = "Mouse",
    e[e.Pen = 1] = "Pen",
    e[e.Touch = 2] = "Touch",
    e))(PointerTypes || {})
      , CanvasContext = (e => (e[e["2D"] = 0] = "2D",
    e[e.WebGL = 1] = "WebGL",
    e[e.WebGL2 = 2] = "WebGL2",
    e))(CanvasContext || {})
      , MediaInteractions = (e => (e[e.Play = 0] = "Play",
    e[e.Pause = 1] = "Pause",
    e[e.Seeked = 2] = "Seeked",
    e[e.VolumeChange = 3] = "VolumeChange",
    e[e.RateChange = 4] = "RateChange",
    e))(MediaInteractions || {});
    function isNodeInLinkedList(e) {
        return "__ln"in e
    }
    class DoubleLinkedList {
        constructor() {
            __publicField(this, "length", 0),
            __publicField(this, "head", null),
            __publicField(this, "tail", null)
        }
        get(t) {
            if (t >= this.length)
                throw new Error("Position outside of list range");
            let r = this.head;
            for (let e = 0; e < t; e++)
                r = (null == r ? void 0 : r.next) || null;
            return r
        }
        addNode(e) {
            const t = {
                value: e,
                previous: null,
                next: null
            };
            if (e.__ln = t,
            e.previousSibling && isNodeInLinkedList(e.previousSibling)) {
                const r = e.previousSibling.__ln.next;
                t.next = r,
                t.previous = e.previousSibling.__ln,
                e.previousSibling.__ln.next = t,
                r && (r.previous = t)
            } else if (e.nextSibling && isNodeInLinkedList(e.nextSibling) && e.nextSibling.__ln.previous) {
                const n = e.nextSibling.__ln.previous;
                t.previous = n,
                t.next = e.nextSibling.__ln,
                e.nextSibling.__ln.previous = t,
                n && (n.next = t)
            } else
                this.head && (this.head.previous = t),
                t.next = this.head,
                this.head = t;
            null === t.next && (this.tail = t),
            this.length++
        }
        removeNode(e) {
            const t = e.__ln;
            this.head && (t.previous ? (t.previous.next = t.next,
            t.next ? t.next.previous = t.previous : this.tail = t.previous) : (this.head = t.next,
            this.head ? this.head.previous = null : this.tail = null),
            e.__ln && delete e.__ln,
            this.length--)
        }
    }
    const moveKey = (e, t) => e + "@" + t;
    class MutationBuffer {
        constructor() {
            __publicField(this, "frozen", !1),
            __publicField(this, "locked", !1),
            __publicField(this, "texts", []),
            __publicField(this, "attributes", []),
            __publicField(this, "attributeMap", new WeakMap),
            __publicField(this, "removes", []),
            __publicField(this, "mapRemoves", []),
            __publicField(this, "movedMap", {}),
            __publicField(this, "addedSet", new Set),
            __publicField(this, "movedSet", new Set),
            __publicField(this, "droppedSet", new Set),
            __publicField(this, "mutationCb"),
            __publicField(this, "blockClass"),
            __publicField(this, "blockSelector"),
            __publicField(this, "maskTextClass"),
            __publicField(this, "maskTextSelector"),
            __publicField(this, "inlineStylesheet"),
            __publicField(this, "maskInputOptions"),
            __publicField(this, "maskTextFn"),
            __publicField(this, "maskInputFn"),
            __publicField(this, "keepIframeSrcFn"),
            __publicField(this, "recordCanvas"),
            __publicField(this, "inlineImages"),
            __publicField(this, "slimDOMOptions"),
            __publicField(this, "dataURLOptions"),
            __publicField(this, "doc"),
            __publicField(this, "mirror"),
            __publicField(this, "iframeManager"),
            __publicField(this, "stylesheetManager"),
            __publicField(this, "shadowDomManager"),
            __publicField(this, "canvasManager"),
            __publicField(this, "processedNodeManager"),
            __publicField(this, "unattachedDoc"),
            __publicField(this, "processMutations", e => {
                e.forEach(this.processMutation),
                this.emit()
            }
            ),
            __publicField(this, "emit", () => {
                if (!this.frozen && !this.locked) {
                    const l = []
                      , c = new Set
                      , u = new DoubleLinkedList
                      , p = e => {
                        let t = e
                          , r = IGNORED_NODE;
                        for (; r === IGNORED_NODE; )
                            t = t && t.nextSibling,
                            r = t && this.mirror.getId(t);
                        return r
                    }
                    ;
                    for (var r, n, o = t => {
                        if (t.parentNode && inDom(t) && "TEXTAREA" !== t.parentNode.tagName) {
                            var e = isShadowRoot(t.parentNode) ? this.mirror.getId(getShadowHost(t)) : this.mirror.getId(t.parentNode)
                              , r = p(t);
                            if (-1 === e || -1 === r)
                                return u.addNode(t);
                            var n = serializeNodeWithId(t, {
                                doc: this.doc,
                                mirror: this.mirror,
                                blockClass: this.blockClass,
                                blockSelector: this.blockSelector,
                                maskTextClass: this.maskTextClass,
                                maskTextSelector: this.maskTextSelector,
                                skipChild: !0,
                                newlyAddedElement: !0,
                                inlineStylesheet: this.inlineStylesheet,
                                maskInputOptions: this.maskInputOptions,
                                maskTextFn: this.maskTextFn,
                                maskInputFn: this.maskInputFn,
                                slimDOMOptions: this.slimDOMOptions,
                                dataURLOptions: this.dataURLOptions,
                                recordCanvas: this.recordCanvas,
                                inlineImages: this.inlineImages,
                                onSerialize: e => {
                                    isSerializedIframe(e, this.mirror) && this.iframeManager.addIframe(e),
                                    isSerializedStylesheet(e, this.mirror) && this.stylesheetManager.trackLinkElement(e),
                                    hasShadowRoot(t) && this.shadowDomManager.addShadowRoot(t.shadowRoot, this.doc)
                                }
                                ,
                                onIframeLoad: (e, t) => {
                                    this.iframeManager.attachIframe(e, t),
                                    this.shadowDomManager.observeAttachShadow(e)
                                }
                                ,
                                onStylesheetLoad: (e, t) => {
                                    this.stylesheetManager.attachLinkElement(e, t)
                                }
                            });
                            n && (l.push({
                                parentId: e,
                                nextId: r,
                                node: n
                            }),
                            c.add(n.id))
                        }
                    }
                    ; this.mapRemoves.length; )
                        this.mirror.removeNodeFromMap(this.mapRemoves.shift());
                    for (const d of this.movedSet)
                        isParentRemoved(this.removes, d, this.mirror) && !this.movedSet.has(d.parentNode) || o(d);
                    for (const f of this.addedSet)
                        !isAncestorInSet(this.droppedSet, f) && !isParentRemoved(this.removes, f, this.mirror) || isAncestorInSet(this.movedSet, f) ? o(f) : this.droppedSet.add(f);
                    let e = null;
                    for (; u.length; ) {
                        let t = null;
                        if (e && (r = this.mirror.getId(e.value.parentNode),
                        n = p(e.value),
                        -1 !== r && -1 !== n && (t = e)),
                        !t) {
                            let e = u.tail;
                            for (; e; ) {
                                var a = e;
                                if (e = e.previous,
                                a) {
                                    var i = this.mirror.getId(a.value.parentNode)
                                      , s = p(a.value);
                                    if (-1 !== s) {
                                        if (-1 !== i) {
                                            t = a;
                                            break
                                        }
                                        s = a.value;
                                        if (s.parentNode && s.parentNode.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
                                            i = s.parentNode.host;
                                            if (-1 !== this.mirror.getId(i)) {
                                                t = a;
                                                break
                                            }
                                        }
                                    }
                                }
                            }
                        }
                        if (!t) {
                            for (; u.head; )
                                u.removeNode(u.head.value);
                            break
                        }
                        e = t.previous,
                        u.removeNode(t.value),
                        o(t.value)
                    }
                    var t = {
                        texts: this.texts.map(e => {
                            var t = e.node;
                            return t.parentNode && "TEXTAREA" === t.parentNode.tagName && this.genTextAreaValueMutation(t.parentNode),
                            {
                                id: this.mirror.getId(t),
                                value: e.value
                            }
                        }
                        ).filter(e => !c.has(e.id)).filter(e => this.mirror.has(e.id)),
                        attributes: this.attributes.map(e => {
                            const t = e["attributes"];
                            var r, n;
                            return "string" == typeof t.style && (r = JSON.stringify(e.styleDiff),
                            n = JSON.stringify(e._unchangedStyles),
                            r.length < t.style.length && (r + n).split("var(").length === t.style.split("var(").length && (t.style = e.styleDiff)),
                            {
                                id: this.mirror.getId(e.node),
                                attributes: t
                            }
                        }
                        ).filter(e => !c.has(e.id)).filter(e => this.mirror.has(e.id)),
                        removes: this.removes,
                        adds: l
                    };
                    (t.texts.length || t.attributes.length || t.removes.length || t.adds.length) && (this.texts = [],
                    this.attributes = [],
                    this.attributeMap = new WeakMap,
                    this.removes = [],
                    this.addedSet = new Set,
                    this.movedSet = new Set,
                    this.droppedSet = new Set,
                    this.movedMap = {},
                    this.mutationCb(t))
                }
            }
            ),
            __publicField(this, "genTextAreaValueMutation", e => {
                let t = this.attributeMap.get(e);
                t || (t = {
                    node: e,
                    attributes: {},
                    styleDiff: {},
                    _unchangedStyles: {}
                },
                this.attributes.push(t),
                this.attributeMap.set(e, t)),
                t.attributes.value = Array.from(e.childNodes, e => e.textContent || "").join("")
            }
            ),
            __publicField(this, "processMutation", n => {
                if (!isIgnored(n.target, this.mirror, this.slimDOMOptions))
                    switch (n.type) {
                    case "characterData":
                        {
                            const e = n.target.textContent;
                            isBlocked(n.target, this.blockClass, this.blockSelector, !1) || e === n.oldValue || this.texts.push({
                                value: needMaskingText(n.target, this.maskTextClass, this.maskTextSelector, !0) && e ? this.maskTextFn ? this.maskTextFn(e, closestElementOfNode(n.target)) : e.replace(/[\S]/g, "*") : e,
                                node: n.target
                            });
                            break
                        }
                    case "attributes":
                        {
                            const s = n.target;
                            let e = n.attributeName
                              , t = n.target.getAttribute(e);
                            var o;
                            if ("value" === e && (o = getInputType(s),
                            t = maskInputValue({
                                element: s,
                                maskInputOptions: this.maskInputOptions,
                                tagName: s.tagName,
                                type: o,
                                value: t,
                                maskInputFn: this.maskInputFn
                            })),
                            isBlocked(n.target, this.blockClass, this.blockSelector, !1) || t === n.oldValue)
                                return;
                            let r = this.attributeMap.get(n.target);
                            if ("IFRAME" === s.tagName && "src" === e && !this.keepIframeSrcFn(t)) {
                                if (s.contentDocument)
                                    return;
                                e = "rr_src"
                            }
                            if (r || (r = {
                                node: n.target,
                                attributes: {},
                                styleDiff: {},
                                _unchangedStyles: {}
                            },
                            this.attributes.push(r),
                            this.attributeMap.set(n.target, r)),
                            "type" === e && "INPUT" === s.tagName && "password" === (n.oldValue || "").toLowerCase() && s.setAttribute("data-rr-is-password", "true"),
                            !ignoreAttribute(s.tagName, e) && (r.attributes[e] = transformAttribute(this.doc, toLowerCase(s.tagName), toLowerCase(e), t),
                            "style" === e)) {
                                if (!this.unattachedDoc)
                                    try {
                                        this.unattachedDoc = document.implementation.createHTMLDocument()
                                    } catch (e) {
                                        this.unattachedDoc = this.doc
                                    }
                                const l = this.unattachedDoc.createElement("span");
                                n.oldValue && l.setAttribute("style", n.oldValue);
                                for (const c of Array.from(s.style)) {
                                    var a = s.style.getPropertyValue(c)
                                      , i = s.style.getPropertyPriority(c);
                                    a !== l.style.getPropertyValue(c) || i !== l.style.getPropertyPriority(c) ? r.styleDiff[c] = "" === i ? a : [a, i] : r._unchangedStyles[c] = [a, i]
                                }
                                for (const u of Array.from(l.style))
                                    "" === s.style.getPropertyValue(u) && (r.styleDiff[u] = !1)
                            }
                            break
                        }
                    case "childList":
                        if (isBlocked(n.target, this.blockClass, this.blockSelector, !0))
                            return;
                        if ("TEXTAREA" === n.target.tagName)
                            return void this.genTextAreaValueMutation(n.target);
                        n.addedNodes.forEach(e => this.genAdds(e, n.target)),
                        n.removedNodes.forEach(e => {
                            var t = this.mirror.getId(e)
                              , r = isShadowRoot(n.target) ? this.mirror.getId(n.target.host) : this.mirror.getId(n.target);
                            isBlocked(n.target, this.blockClass, this.blockSelector, !1) || isIgnored(e, this.mirror, this.slimDOMOptions) || !isSerialized(e, this.mirror) || (this.addedSet.has(e) ? (deepDelete(this.addedSet, e),
                            this.droppedSet.add(e)) : this.addedSet.has(n.target) && -1 === t || isAncestorRemoved(n.target, this.mirror) || (this.movedSet.has(e) && this.movedMap[moveKey(t, r)] ? deepDelete(this.movedSet, e) : this.removes.push({
                                parentId: r,
                                id: t,
                                isShadow: !(!isShadowRoot(n.target) || !isNativeShadowDom(n.target)) || void 0
                            })),
                            this.mapRemoves.push(e))
                        }
                        )
                    }
            }
            ),
            __publicField(this, "genAdds", (t, r) => {
                if (!this.processedNodeManager.inOtherBuffer(t, this) && !this.addedSet.has(t) && !this.movedSet.has(t)) {
                    if (this.mirror.hasNode(t)) {
                        if (isIgnored(t, this.mirror, this.slimDOMOptions))
                            return;
                        this.movedSet.add(t);
                        let e = null;
                        (e = r && this.mirror.hasNode(r) ? this.mirror.getId(r) : e) && -1 !== e && (this.movedMap[moveKey(this.mirror.getId(t), e)] = !0)
                    } else
                        this.addedSet.add(t),
                        this.droppedSet.delete(t);
                    isBlocked(t, this.blockClass, this.blockSelector, !1) || (t.childNodes.forEach(e => this.genAdds(e)),
                    hasShadowRoot(t) && t.shadowRoot.childNodes.forEach(e => {
                        this.processedNodeManager.add(e, this),
                        this.genAdds(e, t)
                    }
                    ))
                }
            }
            )
        }
        init(t) {
            ["mutationCb", "blockClass", "blockSelector", "maskTextClass", "maskTextSelector", "inlineStylesheet", "maskInputOptions", "maskTextFn", "maskInputFn", "keepIframeSrcFn", "recordCanvas", "inlineImages", "slimDOMOptions", "dataURLOptions", "doc", "mirror", "iframeManager", "stylesheetManager", "shadowDomManager", "canvasManager", "processedNodeManager"].forEach(e => {
                this[e] = t[e]
            }
            )
        }
        freeze() {
            this.frozen = !0,
            this.canvasManager.freeze()
        }
        unfreeze() {
            this.frozen = !1,
            this.canvasManager.unfreeze(),
            this.emit()
        }
        isFrozen() {
            return this.frozen
        }
        lock() {
            this.locked = !0,
            this.canvasManager.lock()
        }
        unlock() {
            this.locked = !1,
            this.canvasManager.unlock(),
            this.emit()
        }
        reset() {
            this.shadowDomManager.reset(),
            this.canvasManager.reset()
        }
    }
    function deepDelete(t, e) {
        t.delete(e),
        e.childNodes.forEach(e => deepDelete(t, e))
    }
    function isParentRemoved(e, t, r) {
        return 0 !== e.length && _isParentRemoved(e, t, r)
    }
    function _isParentRemoved(e, t, r) {
        let n = t.parentNode;
        for (; n; ) {
            const o = r.getId(n);
            if (e.some(e => e.id === o))
                return !0;
            n = n.parentNode
        }
        return !1
    }
    function isAncestorInSet(e, t) {
        return 0 !== e.size && _isAncestorInSet(e, t)
    }
    function _isAncestorInSet(e, t) {
        t = t.parentNode;
        return !!t && (!!e.has(t) || _isAncestorInSet(e, t))
    }
    let errorHandler;
    function registerErrorHandler(e) {
        errorHandler = e
    }
    function unregisterErrorHandler() {
        errorHandler = void 0
    }
    const callbackWrapper = t => {
        if (!errorHandler)
            return t;
        return (...e) => {
            try {
                return t(...e)
            } catch (e) {
                if (errorHandler && !0 === errorHandler(e))
                    return;
                throw e
            }
        }
    }
      , mutationBuffers = [];
    function getEventTarget(e) {
        try {
            if ("composedPath"in e) {
                var t = e.composedPath();
                if (t.length)
                    return t[0]
            } else if ("path"in e && e.path.length)
                return e.path[0]
        } catch {}
        return e && e.target
    }
    function initMutationObserver(e, t) {
        const r = new MutationBuffer;
        mutationBuffers.push(r),
        r.init(e);
        let n = window.MutationObserver || window.__rrMutationObserver;
        var o = null == (o = null == (e = null == window ? void 0 : window.Zone) ? void 0 : e.__symbol__) ? void 0 : o.call(e, "MutationObserver");
        const a = new (n = o && window[o] ? window[o] : n)(callbackWrapper(r.processMutations.bind(r)));
        return a.observe(t, {
            attributes: !0,
            attributeOldValue: !0,
            characterData: !0,
            characterDataOldValue: !0,
            childList: !0,
            subtree: !0
        }),
        a
    }
    function initMoveObserver({mousemoveCb: r, sampling: e, doc: t, mirror: o}) {
        if (!1 === e.mousemove)
            return () => {}
            ;
        var n = "number" == typeof e.mousemove ? e.mousemove : 50
          , e = "number" == typeof e.mousemoveCallback ? e.mousemoveCallback : 500;
        let a = [], i;
        const s = throttle(callbackWrapper(e => {
            const t = Date.now() - i;
            r(a.map(e => (e.timeOffset -= t,
            e)), e),
            a = [],
            i = null
        }
        ), e);
        e = callbackWrapper(throttle(callbackWrapper(e => {
            var t = getEventTarget(e)
              , {clientX: r, clientY: n} = legacy_isTouchEvent(e) ? e.changedTouches[0] : e;
            i = i || nowTimestamp(),
            a.push({
                x: r,
                y: n,
                id: o.getId(t),
                timeOffset: nowTimestamp() - i
            }),
            s("undefined" != typeof DragEvent && e instanceof DragEvent ? IncrementalSource.Drag : e instanceof MouseEvent ? IncrementalSource.MouseMove : IncrementalSource.TouchMove)
        }
        ), n, {
            trailing: !1
        }));
        const l = [on("mousemove", e, t), on("touchmove", e, t), on("drag", e, t)];
        return callbackWrapper( () => {
            l.forEach(e => e())
        }
        )
    }
    function initMouseInteractionObserver({mouseInteractionCb: i, doc: n, mirror: s, blockClass: l, blockSelector: c, sampling: e}) {
        if (!1 === e.mouseInteraction)
            return () => {}
            ;
        const t = !0 === e.mouseInteraction || void 0 === e.mouseInteraction ? {} : e.mouseInteraction
          , o = [];
        let u = null;
        return Object.keys(MouseInteractions).filter(e => Number.isNaN(Number(e)) && !e.endsWith("_Departed") && !1 !== t[e]).forEach(e => {
            let t = toLowerCase(e);
            a = e;
            var a, r = r => {
                var n = getEventTarget(r);
                if (!isBlocked(n, l, c, !0)) {
                    let e = null
                      , t = a;
                    if ("pointerType"in r) {
                        switch (r.pointerType) {
                        case "mouse":
                            e = PointerTypes.Mouse;
                            break;
                        case "touch":
                            e = PointerTypes.Touch;
                            break;
                        case "pen":
                            e = PointerTypes.Pen
                        }
                        e === PointerTypes.Touch ? MouseInteractions[a] === MouseInteractions.MouseDown ? t = "TouchStart" : MouseInteractions[a] === MouseInteractions.MouseUp && (t = "TouchEnd") : (e,
                        PointerTypes.Pen)
                    } else
                        legacy_isTouchEvent(r) && (e = PointerTypes.Touch);
                    null !== e ? (u = e,
                    (t.startsWith("Touch") && e === PointerTypes.Touch || t.startsWith("Mouse") && e === PointerTypes.Mouse) && (e = null)) : MouseInteractions[a] === MouseInteractions.Click && (e = u,
                    u = null);
                    var o, r = legacy_isTouchEvent(r) ? r.changedTouches[0] : r;
                    r && (n = s.getId(n),
                    {clientX: r, clientY: o} = r,
                    callbackWrapper(i)({
                        type: MouseInteractions[t],
                        id: n,
                        x: r,
                        y: o,
                        ...null !== e && {
                            pointerType: e
                        }
                    }))
                }
            }
            ;
            if (window.PointerEvent)
                switch (MouseInteractions[e]) {
                case MouseInteractions.MouseDown:
                case MouseInteractions.MouseUp:
                    t = t.replace("mouse", "pointer");
                    break;
                case MouseInteractions.TouchStart:
                case MouseInteractions.TouchEnd:
                    return
                }
            o.push(on(t, r, n))
        }
        ),
        callbackWrapper( () => {
            o.forEach(e => e())
        }
        )
    }
    function initScrollObserver({scrollCb: n, doc: o, mirror: a, blockClass: i, blockSelector: s, sampling: e}) {
        return on("scroll", callbackWrapper(throttle(callbackWrapper(e => {
            var t, r, e = getEventTarget(e);
            e && !isBlocked(e, i, s, !0) && (t = a.getId(e),
            e === o && o.defaultView ? (r = getWindowScroll(o.defaultView),
            n({
                id: t,
                x: r.left,
                y: r.top
            })) : n({
                id: t,
                x: e.scrollLeft,
                y: e.scrollTop
            }))
        }
        ), e.scroll || 100)), o)
    }
    function initViewportResizeObserver({viewportResizeCb: r}, {win: e}) {
        let n = -1
          , o = -1;
        return on("resize", callbackWrapper(throttle(callbackWrapper( () => {
            var e = getWindowHeight()
              , t = getWindowWidth();
            n === e && o === t || (r({
                width: Number(t),
                height: Number(e)
            }),
            n = e,
            o = t)
        }
        ), 200)), e)
    }
    const INPUT_TAGS = ["INPUT", "TEXTAREA", "SELECT"]
      , lastInputValueMap = new WeakMap;
    function initInputObserver({inputCb: n, doc: i, mirror: o, blockClass: e, blockSelector: r, ignoreClass: s, ignoreSelector: l, maskInputOptions: c, maskInputFn: u, sampling: t, userTriggeredOnInput: p}) {
        function a(t) {
            let n = getEventTarget(t);
            t = t.isTrusted;
            const o = n && n.tagName;
            if ((n = n && "OPTION" === o ? n.parentElement : n) && o && !(INPUT_TAGS.indexOf(o) < 0) && !isBlocked(n, e, r, !0) && !(n.classList.contains(s) || l && n.matches(l))) {
                let e = n.value
                  , r = !1;
                var a = getInputType(n) || ""
                  , t = ("radio" === a || "checkbox" === a ? r = n.checked : (c[o.toLowerCase()] || c[a]) && (e = maskInputValue({
                    element: n,
                    maskInputOptions: c,
                    tagName: o,
                    type: a,
                    value: e,
                    maskInputFn: u
                })),
                d(n, p ? {
                    text: e,
                    isChecked: r,
                    userTriggered: t
                } : {
                    text: e,
                    isChecked: r
                }),
                n.name);
                "radio" === a && t && r && i.querySelectorAll(`input[type="radio"][name="${t}"]`).forEach(e => {
                    var t;
                    e !== n && (t = e.value,
                    d(e, p ? {
                        text: t,
                        isChecked: !r,
                        userTriggered: !1
                    } : {
                        text: t,
                        isChecked: !r
                    }))
                }
                )
            }
        }
        function d(e, t) {
            var r = lastInputValueMap.get(e);
            r && r.text === t.text && r.isChecked === t.isChecked || (lastInputValueMap.set(e, t),
            r = o.getId(e),
            callbackWrapper(n)({
                ...t,
                id: r
            }))
        }
        const f = "last" === t.input ? ["change"] : ["input", "change"]
          , h = f.map(e => on(e, callbackWrapper(a), i))
          , g = i.defaultView;
        if (!g)
            return () => {
                h.forEach(e => e())
            }
            ;
        t = g.Object.getOwnPropertyDescriptor(g.HTMLInputElement.prototype, "value");
        const m = [[g.HTMLInputElement.prototype, "value"], [g.HTMLInputElement.prototype, "checked"], [g.HTMLSelectElement.prototype, "value"], [g.HTMLTextAreaElement.prototype, "value"], [g.HTMLSelectElement.prototype, "selectedIndex"], [g.HTMLOptionElement.prototype, "selected"]];
        return t && t.set && h.push(...m.map(e => hookSetter(e[0], e[1], {
            set() {
                callbackWrapper(a)({
                    target: this,
                    isTrusted: !1
                })
            }
        }, !1, g))),
        callbackWrapper( () => {
            h.forEach(e => e())
        }
        )
    }
    function getNestedCSSRulePositions(e) {
        var t = [];
        if (hasNestedCSSRule("CSSGroupingRule") && e.parentRule instanceof CSSGroupingRule || hasNestedCSSRule("CSSMediaRule") && e.parentRule instanceof CSSMediaRule || hasNestedCSSRule("CSSSupportsRule") && e.parentRule instanceof CSSSupportsRule || hasNestedCSSRule("CSSConditionRule") && e.parentRule instanceof CSSConditionRule) {
            const n = Array.from(e.parentRule.cssRules);
            var r = n.indexOf(e);
            t.unshift(r)
        } else if (e.parentStyleSheet) {
            const o = Array.from(e.parentStyleSheet.cssRules);
            r = o.indexOf(e);
            t.unshift(r)
        }
        return t
    }
    function getIdAndStyleId(e, t, r) {
        let n, o;
        return e ? (e.ownerNode ? n = t.getId(e.ownerNode) : o = r.getId(e),
        {
            styleId: o,
            id: n
        }) : {}
    }
    function initStyleSheetObserver({styleSheetRuleCb: s, mirror: l, stylesheetManager: c}, {win: e}) {
        if (!e.CSSStyleSheet || !e.CSSStyleSheet.prototype)
            return () => {}
            ;
        const t = e.CSSStyleSheet.prototype.insertRule
          , r = (e.CSSStyleSheet.prototype.insertRule = new Proxy(t,{
            apply: callbackWrapper( (e, t, r) => {
                var [n,o] = r
                  , {id: a, styleId: i} = getIdAndStyleId(t, l, c.styleMirror);
                return (a && -1 !== a || i && -1 !== i) && s({
                    id: a,
                    styleId: i,
                    adds: [{
                        rule: n,
                        index: o
                    }]
                }),
                e.apply(t, r)
            }
            )
        }),
        e.CSSStyleSheet.prototype.deleteRule);
        e.CSSStyleSheet.prototype.deleteRule = new Proxy(r,{
            apply: callbackWrapper( (e, t, r) => {
                var [n] = r
                  , {id: o, styleId: a} = getIdAndStyleId(t, l, c.styleMirror);
                return (o && -1 !== o || a && -1 !== a) && s({
                    id: o,
                    styleId: a,
                    removes: [{
                        index: n
                    }]
                }),
                e.apply(t, r)
            }
            )
        });
        let n;
        e.CSSStyleSheet.prototype.replace && (n = e.CSSStyleSheet.prototype.replace,
        e.CSSStyleSheet.prototype.replace = new Proxy(n,{
            apply: callbackWrapper( (e, t, r) => {
                var [n] = r
                  , {id: o, styleId: a} = getIdAndStyleId(t, l, c.styleMirror);
                return (o && -1 !== o || a && -1 !== a) && s({
                    id: o,
                    styleId: a,
                    replace: n
                }),
                e.apply(t, r)
            }
            )
        }));
        let o;
        e.CSSStyleSheet.prototype.replaceSync && (o = e.CSSStyleSheet.prototype.replaceSync,
        e.CSSStyleSheet.prototype.replaceSync = new Proxy(o,{
            apply: callbackWrapper( (e, t, r) => {
                var [n] = r
                  , {id: o, styleId: a} = getIdAndStyleId(t, l, c.styleMirror);
                return (o && -1 !== o || a && -1 !== a) && s({
                    id: o,
                    styleId: a,
                    replaceSync: n
                }),
                e.apply(t, r)
            }
            )
        }));
        const a = {}
          , i = (canMonkeyPatchNestedCSSRule("CSSGroupingRule") ? a.CSSGroupingRule = e.CSSGroupingRule : (canMonkeyPatchNestedCSSRule("CSSMediaRule") && (a.CSSMediaRule = e.CSSMediaRule),
        canMonkeyPatchNestedCSSRule("CSSConditionRule") && (a.CSSConditionRule = e.CSSConditionRule),
        canMonkeyPatchNestedCSSRule("CSSSupportsRule") && (a.CSSSupportsRule = e.CSSSupportsRule)),
        {});
        return Object.entries(a).forEach( ([e,t]) => {
            i[e] = {
                insertRule: t.prototype.insertRule,
                deleteRule: t.prototype.deleteRule
            },
            t.prototype.insertRule = new Proxy(i[e].insertRule,{
                apply: callbackWrapper( (e, t, r) => {
                    var [n,o] = r
                      , {id: a, styleId: i} = getIdAndStyleId(t.parentStyleSheet, l, c.styleMirror);
                    return (a && -1 !== a || i && -1 !== i) && s({
                        id: a,
                        styleId: i,
                        adds: [{
                            rule: n,
                            index: [...getNestedCSSRulePositions(t), o || 0]
                        }]
                    }),
                    e.apply(t, r)
                }
                )
            }),
            t.prototype.deleteRule = new Proxy(i[e].deleteRule,{
                apply: callbackWrapper( (e, t, r) => {
                    var [n] = r
                      , {id: o, styleId: a} = getIdAndStyleId(t.parentStyleSheet, l, c.styleMirror);
                    return (o && -1 !== o || a && -1 !== a) && s({
                        id: o,
                        styleId: a,
                        removes: [{
                            index: [...getNestedCSSRulePositions(t), n]
                        }]
                    }),
                    e.apply(t, r)
                }
                )
            })
        }
        ),
        callbackWrapper( () => {
            e.CSSStyleSheet.prototype.insertRule = t,
            e.CSSStyleSheet.prototype.deleteRule = r,
            n && (e.CSSStyleSheet.prototype.replace = n),
            o && (e.CSSStyleSheet.prototype.replaceSync = o),
            Object.entries(a).forEach( ([e,t]) => {
                t.prototype.insertRule = i[e].insertRule,
                t.prototype.deleteRule = i[e].deleteRule
            }
            )
        }
        )
    }
    function initAdoptedStyleSheetObserver({mirror: e, stylesheetManager: r}, t) {
        let n = null;
        n = "#document" === t.nodeName ? e.getId(t) : e.getId(t.host);
        e = "#document" === t.nodeName ? null == (e = t.defaultView) ? void 0 : e.Document : null == (e = null == (e = t.ownerDocument) ? void 0 : e.defaultView) ? void 0 : e.ShadowRoot;
        const o = null != e && e.prototype ? Object.getOwnPropertyDescriptor(null == e ? void 0 : e.prototype, "adoptedStyleSheets") : void 0;
        return null !== n && -1 !== n && e && o ? (Object.defineProperty(t, "adoptedStyleSheets", {
            configurable: o.configurable,
            enumerable: o.enumerable,
            get() {
                var e;
                return null == (e = o.get) ? void 0 : e.call(this)
            },
            set(e) {
                var t = null == (t = o.set) ? void 0 : t.call(this, e);
                if (null !== n && -1 !== n)
                    try {
                        r.adoptStyleSheets(e, n)
                    } catch (e) {}
                return t
            }
        }),
        callbackWrapper( () => {
            Object.defineProperty(t, "adoptedStyleSheets", {
                configurable: o.configurable,
                enumerable: o.enumerable,
                get: o.get,
                set: o.set
            })
        }
        )) : () => {}
    }
    function initStyleDeclarationObserver({styleDeclarationCb: l, mirror: c, ignoreCSSAttributes: u, stylesheetManager: p}, {win: e}) {
        const d = e.CSSStyleDeclaration.prototype.setProperty
          , i = (e.CSSStyleDeclaration.prototype.setProperty = new Proxy(d,{
            apply: callbackWrapper( (e, t, r) => {
                var [n,o,a] = r;
                if (u.has(n))
                    return d.apply(t, [n, o, a]);
                var {id: i, styleId: s} = getIdAndStyleId(null == (i = t.parentRule) ? void 0 : i.parentStyleSheet, c, p.styleMirror);
                return (i && -1 !== i || s && -1 !== s) && l({
                    id: i,
                    styleId: s,
                    set: {
                        property: n,
                        value: o,
                        priority: a
                    },
                    index: getNestedCSSRulePositions(t.parentRule)
                }),
                e.apply(t, r)
            }
            )
        }),
        e.CSSStyleDeclaration.prototype.removeProperty);
        return e.CSSStyleDeclaration.prototype.removeProperty = new Proxy(i,{
            apply: callbackWrapper( (e, t, r) => {
                var [n] = r;
                if (u.has(n))
                    return i.apply(t, [n]);
                var {id: o, styleId: a} = getIdAndStyleId(null == (o = t.parentRule) ? void 0 : o.parentStyleSheet, c, p.styleMirror);
                return (o && -1 !== o || a && -1 !== a) && l({
                    id: o,
                    styleId: a,
                    remove: {
                        property: n
                    },
                    index: getNestedCSSRulePositions(t.parentRule)
                }),
                e.apply(t, r)
            }
            )
        }),
        callbackWrapper( () => {
            e.CSSStyleDeclaration.prototype.setProperty = d,
            e.CSSStyleDeclaration.prototype.removeProperty = i
        }
        )
    }
    function initMediaInteractionObserver({mediaInteractionCb: s, blockClass: l, blockSelector: c, mirror: u, sampling: e, doc: t}) {
        const r = callbackWrapper(i => throttle(callbackWrapper(e => {
            var t, r, n, o, a, e = getEventTarget(e);
            e && !isBlocked(e, l, c, !0) && ({currentTime: t, volume: r, muted: n, playbackRate: o, loop: a} = e,
            s({
                type: i,
                id: u.getId(e),
                currentTime: t,
                volume: r,
                muted: n,
                playbackRate: o,
                loop: a
            }))
        }
        ), e.media || 500))
          , n = [on("play", r(MediaInteractions.Play), t), on("pause", r(MediaInteractions.Pause), t), on("seeked", r(MediaInteractions.Seeked), t), on("volumechange", r(MediaInteractions.VolumeChange), t), on("ratechange", r(MediaInteractions.RateChange), t)];
        return callbackWrapper( () => {
            n.forEach(e => e())
        }
        )
    }
    function initFontObserver({fontCb: r, doc: e}) {
        const t = e.defaultView;
        if (!t)
            return () => {}
            ;
        const n = []
          , o = new WeakMap
          , a = t.FontFace;
        t.FontFace = function(e, t, r) {
            var n = new a(e,t,r);
            return o.set(n, {
                family: e,
                buffer: "string" != typeof t,
                descriptors: r,
                fontSource: "string" == typeof t ? t : JSON.stringify(Array.from(new Uint8Array(t)))
            }),
            n
        }
        ;
        e = patch(e.fonts, "add", function(e) {
            return function(t) {
                return setTimeout(callbackWrapper( () => {
                    var e = o.get(t);
                    e && (r(e),
                    o.delete(t))
                }
                ), 0),
                e.apply(this, [t])
            }
        });
        return n.push( () => {
            t.FontFace = a
        }
        ),
        n.push(e),
        callbackWrapper( () => {
            n.forEach(e => e())
        }
        )
    }
    function initSelectionObserver(e) {
        const {doc: l, mirror: c, blockClass: u, blockSelector: p, selectionCb: d} = e;
        let f = !0;
        const t = callbackWrapper( () => {
            const t = l.getSelection();
            if (!(!t || f && null != t && t.isCollapsed)) {
                f = t.isCollapsed || !1;
                const s = [];
                var r = t.rangeCount || 0;
                for (let e = 0; e < r; e++) {
                    var {startContainer: n, startOffset: o, endContainer: a, endOffset: i} = t.getRangeAt(e);
                    isBlocked(n, u, p, !0) || isBlocked(a, u, p, !0) || s.push({
                        start: c.getId(n),
                        startOffset: o,
                        end: c.getId(a),
                        endOffset: i
                    })
                }
                d({
                    ranges: s
                })
            }
        }
        );
        return t(),
        on("selectionchange", t)
    }
    function initCustomElementObserver({doc: e, customElementCb: o}) {
        e = e.defaultView;
        return e && e.customElements ? patch(e.customElements, "define", function(n) {
            return function(t, e, r) {
                try {
                    o({
                        define: {
                            name: t
                        }
                    })
                } catch (e) {
                    console.warn("Custom element callback failed for " + t)
                }
                return n.apply(this, [t, e, r])
            }
        }) : () => {}
    }
    function mergeHooks(e, t) {
        const {mutationCb: r, mousemoveCb: n, mouseInteractionCb: o, scrollCb: a, viewportResizeCb: i, inputCb: s, mediaInteractionCb: l, styleSheetRuleCb: c, styleDeclarationCb: u, canvasMutationCb: p, fontCb: d, selectionCb: f, customElementCb: h} = e;
        e.mutationCb = (...e) => {
            t.mutation && t.mutation(...e),
            r(...e)
        }
        ,
        e.mousemoveCb = (...e) => {
            t.mousemove && t.mousemove(...e),
            n(...e)
        }
        ,
        e.mouseInteractionCb = (...e) => {
            t.mouseInteraction && t.mouseInteraction(...e),
            o(...e)
        }
        ,
        e.scrollCb = (...e) => {
            t.scroll && t.scroll(...e),
            a(...e)
        }
        ,
        e.viewportResizeCb = (...e) => {
            t.viewportResize && t.viewportResize(...e),
            i(...e)
        }
        ,
        e.inputCb = (...e) => {
            t.input && t.input(...e),
            s(...e)
        }
        ,
        e.mediaInteractionCb = (...e) => {
            t.mediaInteaction && t.mediaInteaction(...e),
            l(...e)
        }
        ,
        e.styleSheetRuleCb = (...e) => {
            t.styleSheetRule && t.styleSheetRule(...e),
            c(...e)
        }
        ,
        e.styleDeclarationCb = (...e) => {
            t.styleDeclaration && t.styleDeclaration(...e),
            u(...e)
        }
        ,
        e.canvasMutationCb = (...e) => {
            t.canvasMutation && t.canvasMutation(...e),
            p(...e)
        }
        ,
        e.fontCb = (...e) => {
            t.font && t.font(...e),
            d(...e)
        }
        ,
        e.selectionCb = (...e) => {
            t.selection && t.selection(...e),
            f(...e)
        }
        ,
        e.customElementCb = (...e) => {
            t.customElement && t.customElement(...e),
            h(...e)
        }
    }
    function initObservers(e, t={}) {
        var r = e.doc.defaultView;
        if (!r)
            return () => {}
            ;
        mergeHooks(e, t);
        let n;
        e.recordDOM && (n = initMutationObserver(e, e.doc));
        const o = initMoveObserver(e)
          , a = initMouseInteractionObserver(e)
          , i = initScrollObserver(e)
          , s = initViewportResizeObserver(e, {
            win: r
        })
          , l = initInputObserver(e)
          , c = initMediaInteractionObserver(e);
        let u = () => {}
          , p = () => {}
          , d = () => {}
          , f = () => {}
        ;
        e.recordDOM && (u = initStyleSheetObserver(e, {
            win: r
        }),
        p = initAdoptedStyleSheetObserver(e, e.doc),
        d = initStyleDeclarationObserver(e, {
            win: r
        }),
        e.collectFonts && (f = initFontObserver(e)));
        const h = initSelectionObserver(e)
          , g = initCustomElementObserver(e)
          , m = [];
        for (const y of e.plugins)
            m.push(y.observer(y.callback, r, y.options));
        return callbackWrapper( () => {
            mutationBuffers.forEach(e => e.reset()),
            null != n && n.disconnect(),
            o(),
            a(),
            i(),
            s(),
            l(),
            c(),
            u(),
            p(),
            d(),
            f(),
            h(),
            g(),
            m.forEach(e => e())
        }
        )
    }
    function hasNestedCSSRule(e) {
        return void 0 !== window[e]
    }
    function canMonkeyPatchNestedCSSRule(e) {
        return Boolean(void 0 !== window[e] && window[e].prototype && "insertRule"in window[e].prototype && "deleteRule"in window[e].prototype)
    }
    class CrossOriginIframeMirror {
        constructor(e) {
            __publicField(this, "iframeIdToRemoteIdMap", new WeakMap),
            __publicField(this, "iframeRemoteIdToIdMap", new WeakMap),
            this.generateIdFn = e
        }
        getId(e, t, r, n) {
            const o = r || this.getIdToRemoteIdMap(e)
              , a = n || this.getRemoteIdToIdMap(e);
            let i = o.get(t);
            return i || (i = this.generateIdFn(),
            o.set(t, i),
            a.set(i, t)),
            i
        }
        getIds(t, e) {
            const r = this.getIdToRemoteIdMap(t)
              , n = this.getRemoteIdToIdMap(t);
            return e.map(e => this.getId(t, e, r, n))
        }
        getRemoteId(e, t, r) {
            const n = r || this.getRemoteIdToIdMap(e);
            if ("number" != typeof t)
                return t;
            r = n.get(t);
            return r || -1
        }
        getRemoteIds(t, e) {
            const r = this.getRemoteIdToIdMap(t);
            return e.map(e => this.getRemoteId(t, e, r))
        }
        reset(e) {
            if (!e)
                return this.iframeIdToRemoteIdMap = new WeakMap,
                void (this.iframeRemoteIdToIdMap = new WeakMap);
            this.iframeIdToRemoteIdMap.delete(e),
            this.iframeRemoteIdToIdMap.delete(e)
        }
        getIdToRemoteIdMap(e) {
            let t = this.iframeIdToRemoteIdMap.get(e);
            return t || (t = new Map,
            this.iframeIdToRemoteIdMap.set(e, t)),
            t
        }
        getRemoteIdToIdMap(e) {
            let t = this.iframeRemoteIdToIdMap.get(e);
            return t || (t = new Map,
            this.iframeRemoteIdToIdMap.set(e, t)),
            t
        }
    }
    class IframeManager {
        constructor(e) {
            __publicField(this, "iframes", new WeakMap),
            __publicField(this, "crossOriginIframeMap", new WeakMap),
            __publicField(this, "crossOriginIframeMirror", new CrossOriginIframeMirror(genId)),
            __publicField(this, "crossOriginIframeStyleMirror"),
            __publicField(this, "crossOriginIframeRootIdMap", new WeakMap),
            __publicField(this, "mirror"),
            __publicField(this, "mutationCb"),
            __publicField(this, "wrappedEmit"),
            __publicField(this, "loadListener"),
            __publicField(this, "stylesheetManager"),
            __publicField(this, "recordCrossOriginIframes"),
            this.mutationCb = e.mutationCb,
            this.wrappedEmit = e.wrappedEmit,
            this.stylesheetManager = e.stylesheetManager,
            this.recordCrossOriginIframes = e.recordCrossOriginIframes,
            this.crossOriginIframeStyleMirror = new CrossOriginIframeMirror(this.stylesheetManager.styleMirror.generateId.bind(this.stylesheetManager.styleMirror)),
            this.mirror = e.mirror,
            this.recordCrossOriginIframes && window.addEventListener("message", this.handleMessage.bind(this))
        }
        addIframe(e) {
            this.iframes.set(e, !0),
            e.contentWindow && this.crossOriginIframeMap.set(e.contentWindow, e)
        }
        addLoadListener(e) {
            this.loadListener = e
        }
        attachIframe(e, t) {
            this.mutationCb({
                adds: [{
                    parentId: this.mirror.getId(e),
                    nextId: null,
                    node: t
                }],
                removes: [],
                texts: [],
                attributes: [],
                isAttachIframe: !0
            }),
            this.recordCrossOriginIframes && null != (t = e.contentWindow) && t.addEventListener("message", this.handleMessage.bind(this)),
            null != (t = this.loadListener) && t.call(this, e),
            e.contentDocument && e.contentDocument.adoptedStyleSheets && 0 < e.contentDocument.adoptedStyleSheets.length && this.stylesheetManager.adoptStyleSheets(e.contentDocument.adoptedStyleSheets, this.mirror.getId(e.contentDocument))
        }
        handleMessage(e) {
            var t = e;
            "rrweb" === t.data.type && t.origin === t.data.origin && e.source && (e = this.crossOriginIframeMap.get(e.source)) && (e = this.transformCrossOriginEvent(e, t.data.event)) && this.wrappedEmit(e, t.data.isCheckout)
        }
        transformCrossOriginEvent(r, e) {
            var t;
            switch (e.type) {
            case EventType.FullSnapshot:
                this.crossOriginIframeMirror.reset(r),
                this.crossOriginIframeStyleMirror.reset(r),
                this.replaceIdOnNode(e.data.node, r);
                var n = e.data.node.id;
                return this.crossOriginIframeRootIdMap.set(r, n),
                this.patchRootIdOnNode(e.data.node, n),
                {
                    timestamp: e.timestamp,
                    type: EventType.IncrementalSnapshot,
                    data: {
                        source: IncrementalSource.Mutation,
                        adds: [{
                            parentId: this.mirror.getId(r),
                            nextId: null,
                            node: e.data.node
                        }],
                        removes: [],
                        texts: [],
                        attributes: [],
                        isAttachIframe: !0
                    }
                };
            case EventType.Meta:
            case EventType.Load:
            case EventType.DomContentLoaded:
                return !1;
            case EventType.Plugin:
                return e;
            case EventType.Custom:
                return this.replaceIds(e.data.payload, r, ["id", "parentId", "previousId", "nextId"]),
                e;
            case EventType.IncrementalSnapshot:
                switch (e.data.source) {
                case IncrementalSource.Mutation:
                    return e.data.adds.forEach(e => {
                        this.replaceIds(e, r, ["parentId", "nextId", "previousId"]),
                        this.replaceIdOnNode(e.node, r);
                        var t = this.crossOriginIframeRootIdMap.get(r);
                        t && this.patchRootIdOnNode(e.node, t)
                    }
                    ),
                    e.data.removes.forEach(e => {
                        this.replaceIds(e, r, ["parentId", "id"])
                    }
                    ),
                    e.data.attributes.forEach(e => {
                        this.replaceIds(e, r, ["id"])
                    }
                    ),
                    e.data.texts.forEach(e => {
                        this.replaceIds(e, r, ["id"])
                    }
                    ),
                    e;
                case IncrementalSource.Drag:
                case IncrementalSource.TouchMove:
                case IncrementalSource.MouseMove:
                    return e.data.positions.forEach(e => {
                        this.replaceIds(e, r, ["id"])
                    }
                    ),
                    e;
                case IncrementalSource.ViewportResize:
                    return !1;
                case IncrementalSource.MediaInteraction:
                case IncrementalSource.MouseInteraction:
                case IncrementalSource.Scroll:
                case IncrementalSource.CanvasMutation:
                case IncrementalSource.Input:
                    return this.replaceIds(e.data, r, ["id"]),
                    e;
                case IncrementalSource.StyleSheetRule:
                case IncrementalSource.StyleDeclaration:
                    return this.replaceIds(e.data, r, ["id"]),
                    this.replaceStyleIds(e.data, r, ["styleId"]),
                    e;
                case IncrementalSource.Font:
                    return e;
                case IncrementalSource.Selection:
                    return e.data.ranges.forEach(e => {
                        this.replaceIds(e, r, ["start", "end"])
                    }
                    ),
                    e;
                case IncrementalSource.AdoptedStyleSheet:
                    return this.replaceIds(e.data, r, ["id"]),
                    this.replaceStyleIds(e.data, r, ["styleIds"]),
                    null != (t = e.data.styles) && t.forEach(e => {
                        this.replaceStyleIds(e, r, ["styleId"])
                    }
                    ),
                    e
                }
            }
            return !1
        }
        replace(e, t, r, n) {
            for (const o of n)
                !Array.isArray(t[o]) && "number" != typeof t[o] || (Array.isArray(t[o]) ? t[o] = e.getIds(r, t[o]) : t[o] = e.getId(r, t[o]));
            return t
        }
        replaceIds(e, t, r) {
            return this.replace(this.crossOriginIframeMirror, e, t, r)
        }
        replaceStyleIds(e, t, r) {
            return this.replace(this.crossOriginIframeStyleMirror, e, t, r)
        }
        replaceIdOnNode(e, t) {
            this.replaceIds(e, t, ["id", "rootId"]),
            "childNodes"in e && e.childNodes.forEach(e => {
                this.replaceIdOnNode(e, t)
            }
            )
        }
        patchRootIdOnNode(e, t) {
            e.type === NodeType$2.Document || e.rootId || (e.rootId = t),
            "childNodes"in e && e.childNodes.forEach(e => {
                this.patchRootIdOnNode(e, t)
            }
            )
        }
    }
    class ShadowDomManager {
        constructor(e) {
            __publicField(this, "shadowDoms", new WeakSet),
            __publicField(this, "mutationCb"),
            __publicField(this, "scrollCb"),
            __publicField(this, "bypassOptions"),
            __publicField(this, "mirror"),
            __publicField(this, "restoreHandlers", []),
            this.mutationCb = e.mutationCb,
            this.scrollCb = e.scrollCb,
            this.bypassOptions = e.bypassOptions,
            this.mirror = e.mirror,
            this.init()
        }
        init() {
            this.reset(),
            this.patchAttachShadow(Element, document)
        }
        addShadowRoot(e, t) {
            if (isNativeShadowDom(e) && !this.shadowDoms.has(e)) {
                this.shadowDoms.add(e);
                const r = initMutationObserver({
                    ...this.bypassOptions,
                    doc: t,
                    mutationCb: this.mutationCb,
                    mirror: this.mirror,
                    shadowDomManager: this
                }, e);
                this.restoreHandlers.push( () => r.disconnect()),
                this.restoreHandlers.push(initScrollObserver({
                    ...this.bypassOptions,
                    scrollCb: this.scrollCb,
                    doc: e,
                    mirror: this.mirror
                })),
                setTimeout( () => {
                    e.adoptedStyleSheets && 0 < e.adoptedStyleSheets.length && this.bypassOptions.stylesheetManager.adoptStyleSheets(e.adoptedStyleSheets, this.mirror.getId(e.host)),
                    this.restoreHandlers.push(initAdoptedStyleSheetObserver({
                        mirror: this.mirror,
                        stylesheetManager: this.bypassOptions.stylesheetManager
                    }, e))
                }
                , 0)
            }
        }
        observeAttachShadow(e) {
            e.contentWindow && e.contentDocument && this.patchAttachShadow(e.contentWindow.Element, e.contentDocument)
        }
        patchAttachShadow(e, r) {
            const n = this;
            this.restoreHandlers.push(patch(e.prototype, "attachShadow", function(t) {
                return function(e) {
                    e = t.call(this, e);
                    return this.shadowRoot && inDom(this) && n.addShadowRoot(this.shadowRoot, r),
                    e
                }
            }))
        }
        reset() {
            this.restoreHandlers.forEach(e => {
                try {
                    e()
                } catch (e) {}
            }
            ),
            this.restoreHandlers = [],
            this.shadowDoms = new WeakSet
        }
    }
    for (var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", lookup = "undefined" == typeof Uint8Array ? [] : new Uint8Array(256), i$1 = 0; i$1 < chars.length; i$1++)
        lookup[chars.charCodeAt(i$1)] = i$1;
    var encode$1 = function(e) {
        for (var t = new Uint8Array(e), r = t.length, n = "", o = 0; o < r; o += 3)
            n = (n = (n = (n += chars[t[o] >> 2]) + chars[(3 & t[o]) << 4 | t[o + 1] >> 4]) + chars[(15 & t[o + 1]) << 2 | t[o + 2] >> 6]) + chars[63 & t[o + 2]];
        return r % 3 == 2 ? n = n.substring(0, n.length - 1) + "=" : r % 3 == 1 && (n = n.substring(0, n.length - 2) + "=="),
        n
    }, n;
    const canvasVarMap = new Map;
    function variableListFor$1(e, t) {
        let r = canvasVarMap.get(e);
        return r || (r = new Map,
        canvasVarMap.set(e, r)),
        r.has(t) || r.set(t, []),
        r.get(t)
    }
    const saveWebGLVar = (t, e, r) => {
        if (t && (isInstanceOfWebGLObject(t, e) || "object" == typeof t)) {
            const n = variableListFor$1(r, t.constructor.name);
            let e = n.indexOf(t);
            return -1 === e && (e = n.length,
            n.push(t)),
            e
        }
    }
    ;
    function serializeArg(e, t, r) {
        return e instanceof Array ? e.map(e => serializeArg(e, t, r)) : null === e ? e : e instanceof Float32Array || e instanceof Float64Array || e instanceof Int32Array || e instanceof Uint32Array || e instanceof Uint8Array || e instanceof Uint16Array || e instanceof Int16Array || e instanceof Int8Array || e instanceof Uint8ClampedArray ? {
            rr_type: e.constructor.name,
            args: [Object.values(e)]
        } : e instanceof ArrayBuffer ? {
            rr_type: e.constructor.name,
            base64: encode$1(e)
        } : e instanceof DataView ? {
            rr_type: e.constructor.name,
            args: [serializeArg(e.buffer, t, r), e.byteOffset, e.byteLength]
        } : e instanceof HTMLImageElement ? (n = e["src"],
        {
            rr_type: e.constructor.name,
            src: n
        }) : e instanceof HTMLCanvasElement ? {
            rr_type: "HTMLImageElement",
            src: e.toDataURL()
        } : e instanceof ImageData ? {
            rr_type: e.constructor.name,
            args: [serializeArg(e.data, t, r), e.width, e.height]
        } : isInstanceOfWebGLObject(e, t) || "object" == typeof e ? {
            rr_type: e.constructor.name,
            index: saveWebGLVar(e, t, r)
        } : e;
        var n
    }
    const serializeArgs = (e, t, r) => e.map(e => serializeArg(e, t, r))
      , isInstanceOfWebGLObject = (t, r) => {
        const e = ["WebGLActiveInfo", "WebGLBuffer", "WebGLFramebuffer", "WebGLProgram", "WebGLRenderbuffer", "WebGLShader", "WebGLShaderPrecisionFormat", "WebGLTexture", "WebGLUniformLocation", "WebGLVertexArrayObject", "WebGLVertexArrayObjectOES"].filter(e => "function" == typeof r[e]);
        return Boolean(e.find(e => t instanceof r[e]))
    }
    ;
    function initCanvas2DMutationObserver(r, n, o, a) {
        const e = [];
        for (const s of Object.getOwnPropertyNames(n.CanvasRenderingContext2D.prototype))
            try {
                if ("function" != typeof n.CanvasRenderingContext2D.prototype[s])
                    continue;
                var t = patch(n.CanvasRenderingContext2D.prototype, s, function(e) {
                    return function(...t) {
                        return isBlocked(this.canvas, o, a, !0) || setTimeout( () => {
                            var e = serializeArgs(t, n, this);
                            r(this.canvas, {
                                type: CanvasContext["2D"],
                                property: s,
                                args: e
                            })
                        }
                        , 0),
                        e.apply(this, t)
                    }
                });
                e.push(t)
            } catch {
                var i = hookSetter(n.CanvasRenderingContext2D.prototype, s, {
                    set(e) {
                        r(this.canvas, {
                            type: CanvasContext["2D"],
                            property: s,
                            args: [e],
                            setter: !0
                        })
                    }
                });
                e.push(i)
            }
        return () => {
            e.forEach(e => e())
        }
    }
    function getNormalizedContextName(e) {
        return "experimental-webgl" === e ? "webgl" : e
    }
    function initCanvasContextObserver(e, a, i, s) {
        const t = [];
        try {
            var r = patch(e.HTMLCanvasElement.prototype, "getContext", function(o) {
                return function(e, ...t) {
                    if (!isBlocked(this, a, i, !0)) {
                        var r = getNormalizedContextName(e);
                        if ("__context"in this || (this.__context = r),
                        s && ["webgl", "webgl2"].includes(r))
                            if (t[0] && "object" == typeof t[0]) {
                                const n = t[0];
                                n.preserveDrawingBuffer || (n.preserveDrawingBuffer = !0)
                            } else
                                t.splice(0, 1, {
                                    preserveDrawingBuffer: !0
                                })
                    }
                    return o.apply(this, [e, ...t])
                }
            });
            t.push(r)
        } catch {
            console.error("failed to patch HTMLCanvasElement.prototype.getContext")
        }
        return () => {
            t.forEach(e => e())
        }
    }
    function patchGLPrototype(e, n, o, a, i, t, s) {
        const r = [];
        for (const u of Object.getOwnPropertyNames(e))
            if (!["isContextLost", "canvas", "drawingBufferWidth", "drawingBufferHeight"].includes(u))
                try {
                    if ("function" != typeof e[u])
                        continue;
                    var l = patch(e, u, function(r) {
                        return function(...e) {
                            var t = r.apply(this, e);
                            return saveWebGLVar(t, s, this),
                            "tagName"in this.canvas && !isBlocked(this.canvas, a, i, !0) && (e = serializeArgs(e, s, this),
                            e = {
                                type: n,
                                property: u,
                                args: e
                            },
                            o(this.canvas, e)),
                            t
                        }
                    });
                    r.push(l)
                } catch {
                    var c = hookSetter(e, u, {
                        set(e) {
                            o(this.canvas, {
                                type: n,
                                property: u,
                                args: [e],
                                setter: !0
                            })
                        }
                    });
                    r.push(c)
                }
        return r
    }
    function initCanvasWebGLMutationObserver(e, t, r, n, o) {
        const a = [];
        return a.push(...patchGLPrototype(t.WebGLRenderingContext.prototype, CanvasContext.WebGL, e, r, n, o, t)),
        void 0 !== t.WebGL2RenderingContext && a.push(...patchGLPrototype(t.WebGL2RenderingContext.prototype, CanvasContext.WebGL2, e, r, n, o, t)),
        () => {
            a.forEach(e => e())
        }
    }
    const encodedJs = "KGZ1bmN0aW9uKCkgewogICJ1c2Ugc3RyaWN0IjsKICB2YXIgY2hhcnMgPSAiQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODkrLyI7CiAgdmFyIGxvb2t1cCA9IHR5cGVvZiBVaW50OEFycmF5ID09PSAidW5kZWZpbmVkIiA/IFtdIDogbmV3IFVpbnQ4QXJyYXkoMjU2KTsKICBmb3IgKHZhciBpID0gMDsgaSA8IGNoYXJzLmxlbmd0aDsgaSsrKSB7CiAgICBsb29rdXBbY2hhcnMuY2hhckNvZGVBdChpKV0gPSBpOwogIH0KICB2YXIgZW5jb2RlID0gZnVuY3Rpb24oYXJyYXlidWZmZXIpIHsKICAgIHZhciBieXRlcyA9IG5ldyBVaW50OEFycmF5KGFycmF5YnVmZmVyKSwgaTIsIGxlbiA9IGJ5dGVzLmxlbmd0aCwgYmFzZTY0ID0gIiI7CiAgICBmb3IgKGkyID0gMDsgaTIgPCBsZW47IGkyICs9IDMpIHsKICAgICAgYmFzZTY0ICs9IGNoYXJzW2J5dGVzW2kyXSA+PiAyXTsKICAgICAgYmFzZTY0ICs9IGNoYXJzWyhieXRlc1tpMl0gJiAzKSA8PCA0IHwgYnl0ZXNbaTIgKyAxXSA+PiA0XTsKICAgICAgYmFzZTY0ICs9IGNoYXJzWyhieXRlc1tpMiArIDFdICYgMTUpIDw8IDIgfCBieXRlc1tpMiArIDJdID4+IDZdOwogICAgICBiYXNlNjQgKz0gY2hhcnNbYnl0ZXNbaTIgKyAyXSAmIDYzXTsKICAgIH0KICAgIGlmIChsZW4gJSAzID09PSAyKSB7CiAgICAgIGJhc2U2NCA9IGJhc2U2NC5zdWJzdHJpbmcoMCwgYmFzZTY0Lmxlbmd0aCAtIDEpICsgIj0iOwogICAgfSBlbHNlIGlmIChsZW4gJSAzID09PSAxKSB7CiAgICAgIGJhc2U2NCA9IGJhc2U2NC5zdWJzdHJpbmcoMCwgYmFzZTY0Lmxlbmd0aCAtIDIpICsgIj09IjsKICAgIH0KICAgIHJldHVybiBiYXNlNjQ7CiAgfTsKICBjb25zdCBsYXN0QmxvYk1hcCA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgTWFwKCk7CiAgY29uc3QgdHJhbnNwYXJlbnRCbG9iTWFwID0gLyogQF9fUFVSRV9fICovIG5ldyBNYXAoKTsKICBhc3luYyBmdW5jdGlvbiBnZXRUcmFuc3BhcmVudEJsb2JGb3Iod2lkdGgsIGhlaWdodCwgZGF0YVVSTE9wdGlvbnMpIHsKICAgIGNvbnN0IGlkID0gYCR7d2lkdGh9LSR7aGVpZ2h0fWA7CiAgICBpZiAoIk9mZnNjcmVlbkNhbnZhcyIgaW4gZ2xvYmFsVGhpcykgewogICAgICBpZiAodHJhbnNwYXJlbnRCbG9iTWFwLmhhcyhpZCkpCiAgICAgICAgcmV0dXJuIHRyYW5zcGFyZW50QmxvYk1hcC5nZXQoaWQpOwogICAgICBjb25zdCBvZmZzY3JlZW4gPSBuZXcgT2Zmc2NyZWVuQ2FudmFzKHdpZHRoLCBoZWlnaHQpOwogICAgICBvZmZzY3JlZW4uZ2V0Q29udGV4dCgiMmQiKTsKICAgICAgY29uc3QgYmxvYiA9IGF3YWl0IG9mZnNjcmVlbi5jb252ZXJ0VG9CbG9iKGRhdGFVUkxPcHRpb25zKTsKICAgICAgY29uc3QgYXJyYXlCdWZmZXIgPSBhd2FpdCBibG9iLmFycmF5QnVmZmVyKCk7CiAgICAgIGNvbnN0IGJhc2U2NCA9IGVuY29kZShhcnJheUJ1ZmZlcik7CiAgICAgIHRyYW5zcGFyZW50QmxvYk1hcC5zZXQoaWQsIGJhc2U2NCk7CiAgICAgIHJldHVybiBiYXNlNjQ7CiAgICB9IGVsc2UgewogICAgICByZXR1cm4gIiI7CiAgICB9CiAgfQogIGNvbnN0IHdvcmtlciA9IHNlbGY7CiAgd29ya2VyLm9ubWVzc2FnZSA9IGFzeW5jIGZ1bmN0aW9uKGUpIHsKICAgIGlmICgiT2Zmc2NyZWVuQ2FudmFzIiBpbiBnbG9iYWxUaGlzKSB7CiAgICAgIGNvbnN0IHsgaWQsIGJpdG1hcCwgd2lkdGgsIGhlaWdodCwgZGF0YVVSTE9wdGlvbnMgfSA9IGUuZGF0YTsKICAgICAgY29uc3QgdHJhbnNwYXJlbnRCYXNlNjQgPSBnZXRUcmFuc3BhcmVudEJsb2JGb3IoCiAgICAgICAgd2lkdGgsCiAgICAgICAgaGVpZ2h0LAogICAgICAgIGRhdGFVUkxPcHRpb25zCiAgICAgICk7CiAgICAgIGNvbnN0IG9mZnNjcmVlbiA9IG5ldyBPZmZzY3JlZW5DYW52YXMod2lkdGgsIGhlaWdodCk7CiAgICAgIGNvbnN0IGN0eCA9IG9mZnNjcmVlbi5nZXRDb250ZXh0KCIyZCIpOwogICAgICBjdHguZHJhd0ltYWdlKGJpdG1hcCwgMCwgMCk7CiAgICAgIGJpdG1hcC5jbG9zZSgpOwogICAgICBjb25zdCBibG9iID0gYXdhaXQgb2Zmc2NyZWVuLmNvbnZlcnRUb0Jsb2IoZGF0YVVSTE9wdGlvbnMpOwogICAgICBjb25zdCB0eXBlID0gYmxvYi50eXBlOwogICAgICBjb25zdCBhcnJheUJ1ZmZlciA9IGF3YWl0IGJsb2IuYXJyYXlCdWZmZXIoKTsKICAgICAgY29uc3QgYmFzZTY0ID0gZW5jb2RlKGFycmF5QnVmZmVyKTsKICAgICAgaWYgKCFsYXN0QmxvYk1hcC5oYXMoaWQpICYmIGF3YWl0IHRyYW5zcGFyZW50QmFzZTY0ID09PSBiYXNlNjQpIHsKICAgICAgICBsYXN0QmxvYk1hcC5zZXQoaWQsIGJhc2U2NCk7CiAgICAgICAgcmV0dXJuIHdvcmtlci5wb3N0TWVzc2FnZSh7IGlkIH0pOwogICAgICB9CiAgICAgIGlmIChsYXN0QmxvYk1hcC5nZXQoaWQpID09PSBiYXNlNjQpCiAgICAgICAgcmV0dXJuIHdvcmtlci5wb3N0TWVzc2FnZSh7IGlkIH0pOwogICAgICB3b3JrZXIucG9zdE1lc3NhZ2UoewogICAgICAgIGlkLAogICAgICAgIHR5cGUsCiAgICAgICAgYmFzZTY0LAogICAgICAgIHdpZHRoLAogICAgICAgIGhlaWdodAogICAgICB9KTsKICAgICAgbGFzdEJsb2JNYXAuc2V0KGlkLCBiYXNlNjQpOwogICAgfSBlbHNlIHsKICAgICAgcmV0dXJuIHdvcmtlci5wb3N0TWVzc2FnZSh7IGlkOiBlLmRhdGEuaWQgfSk7CiAgICB9CiAgfTsKfSkoKTsKLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW1hZ2UtYml0bWFwLWRhdGEtdXJsLXdvcmtlci1CWjFyN1JKRC5qcy5tYXAK"
      , decodeBase64 = e => Uint8Array.from(atob(e), e => e.charCodeAt(0))
      , blob = "undefined" != typeof window && window.Blob && new Blob([decodeBase64(encodedJs)],{
        type: "text/javascript;charset=utf-8"
    });
    function WorkerWrapper(t) {
        let e;
        try {
            if (!(e = blob && (window.URL || window.webkitURL).createObjectURL(blob)))
                throw "";
            const r = new Worker(e,{
                name: null == t ? void 0 : t.name
            });
            return r.addEventListener("error", () => {
                (window.URL || window.webkitURL).revokeObjectURL(e)
            }
            ),
            r
        } catch (e) {
            return new Worker("data:text/javascript;base64," + encodedJs,{
                name: null == t ? void 0 : t.name
            })
        } finally {
            e && (window.URL || window.webkitURL).revokeObjectURL(e)
        }
    }
    class CanvasManager {
        constructor(e) {
            __publicField(this, "pendingCanvasMutations", new Map),
            __publicField(this, "rafStamps", {
                latestId: 0,
                invokeId: null
            }),
            __publicField(this, "mirror"),
            __publicField(this, "mutationCb"),
            __publicField(this, "resetObservers"),
            __publicField(this, "frozen", !1),
            __publicField(this, "locked", !1),
            __publicField(this, "processMutation", (e, t) => {
                (this.rafStamps.invokeId && this.rafStamps.latestId !== this.rafStamps.invokeId || !this.rafStamps.invokeId) && (this.rafStamps.invokeId = this.rafStamps.latestId),
                this.pendingCanvasMutations.has(e) || this.pendingCanvasMutations.set(e, []),
                this.pendingCanvasMutations.get(e).push(t)
            }
            );
            var {sampling: t="all", win: r, blockClass: n, blockSelector: o, recordCanvas: a, dataURLOptions: i} = e;
            this.mutationCb = e.mutationCb,
            this.mirror = e.mirror,
            a && "all" === t && this.initCanvasMutationObserver(r, n, o),
            a && "number" == typeof t && this.initCanvasFPSObserver(t, r, n, o, {
                dataURLOptions: i
            })
        }
        reset() {
            this.pendingCanvasMutations.clear(),
            this.resetObservers && this.resetObservers()
        }
        freeze() {
            this.frozen = !0
        }
        unfreeze() {
            this.frozen = !1
        }
        lock() {
            this.locked = !0
        }
        unlock() {
            this.locked = !1
        }
        initCanvasFPSObserver(e, r, n, o, a) {
            const t = initCanvasContextObserver(r, n, o, !0)
              , i = new Map
              , s = new WorkerWrapper
              , l = (s.onmessage = e => {
                var t, r, n, o = e.data["id"];
                i.set(o, !1),
                "base64"in e.data && ({base64: e, type: t, width: r, height: n} = e.data,
                this.mutationCb({
                    id: o,
                    type: CanvasContext["2D"],
                    commands: [{
                        property: "clearRect",
                        args: [0, 0, r, n]
                    }, {
                        property: "drawImage",
                        args: [{
                            rr_type: "ImageBitmap",
                            args: [{
                                rr_type: "Blob",
                                data: [{
                                    rr_type: "ArrayBuffer",
                                    base64: e
                                }],
                                type: t
                            }]
                        }, 0, 0]
                    }]
                }))
            }
            ,
            1e3 / e);
            let c = 0, u;
            const p = () => {
                const t = [];
                return r.document.querySelectorAll("canvas").forEach(e => {
                    isBlocked(e, n, o, !0) || t.push(e)
                }
                ),
                t
            }
              , d = e => {
                u = (c && e - c < l || (c = e,
                p().forEach(async e => {
                    var t = this.mirror.getId(e);
                    if (!i.get(t) && 0 !== e.width && 0 !== e.height) {
                        if (i.set(t, !0),
                        ["webgl", "webgl2"].includes(e.__context)) {
                            const n = e.getContext(e.__context);
                            !1 === (null == (r = null == n ? void 0 : n.getContextAttributes()) ? void 0 : r.preserveDrawingBuffer) && n.clear(n.COLOR_BUFFER_BIT)
                        }
                        var r = await createImageBitmap(e);
                        s.postMessage({
                            id: t,
                            bitmap: r,
                            width: e.width,
                            height: e.height,
                            dataURLOptions: a.dataURLOptions
                        }, [r])
                    }
                }
                )),
                requestAnimationFrame(d))
            }
            ;
            u = requestAnimationFrame(d),
            this.resetObservers = () => {
                t(),
                cancelAnimationFrame(u)
            }
        }
        initCanvasMutationObserver(e, t, r) {
            this.startRAFTimestamping(),
            this.startPendingCanvasMutationFlusher();
            const n = initCanvasContextObserver(e, t, r, !1)
              , o = initCanvas2DMutationObserver(this.processMutation.bind(this), e, t, r)
              , a = initCanvasWebGLMutationObserver(this.processMutation.bind(this), e, t, r, this.mirror);
            this.resetObservers = () => {
                n(),
                o(),
                a()
            }
        }
        startPendingCanvasMutationFlusher() {
            requestAnimationFrame( () => this.flushPendingCanvasMutations())
        }
        startRAFTimestamping() {
            const t = e => {
                this.rafStamps.latestId = e,
                requestAnimationFrame(t)
            }
            ;
            requestAnimationFrame(t)
        }
        flushPendingCanvasMutations() {
            this.pendingCanvasMutations.forEach( (e, t) => {
                var r = this.mirror.getId(t);
                this.flushPendingCanvasMutationFor(t, r)
            }
            ),
            requestAnimationFrame( () => this.flushPendingCanvasMutations())
        }
        flushPendingCanvasMutationFor(e, t) {
            if (!this.frozen && !this.locked) {
                const o = this.pendingCanvasMutations.get(e);
                var r, n;
                o && -1 !== t && (r = o.map(e => {
                    const {type: t, ...r} = e;
                    return r
                }
                ),
                n = o[0]["type"],
                this.mutationCb({
                    id: t,
                    type: n,
                    commands: r
                }),
                this.pendingCanvasMutations.delete(e))
            }
        }
    }
    class StylesheetManager {
        constructor(e) {
            __publicField(this, "trackedLinkElements", new WeakSet),
            __publicField(this, "mutationCb"),
            __publicField(this, "adoptedStyleSheetCb"),
            __publicField(this, "styleMirror", new StyleSheetMirror),
            this.mutationCb = e.mutationCb,
            this.adoptedStyleSheetCb = e.adoptedStyleSheetCb
        }
        attachLinkElement(e, t) {
            "_cssText"in t.attributes && this.mutationCb({
                adds: [],
                removes: [],
                texts: [],
                attributes: [{
                    id: t.id,
                    attributes: t.attributes
                }]
            }),
            this.trackLinkElement(e)
        }
        trackLinkElement(e) {
            this.trackedLinkElements.has(e) || (this.trackedLinkElements.add(e),
            this.trackStylesheetInLinkElement(e))
        }
        adoptStyleSheets(e, t) {
            if (0 !== e.length) {
                const r = {
                    id: t,
                    styleIds: []
                }
                  , n = [];
                for (const o of e) {
                    let e;
                    this.styleMirror.has(o) ? e = this.styleMirror.getId(o) : (e = this.styleMirror.add(o),
                    n.push({
                        styleId: e,
                        rules: Array.from(o.rules || CSSRule, (e, t) => ({
                            rule: stringifyRule(e),
                            index: t
                        }))
                    })),
                    r.styleIds.push(e)
                }
                0 < n.length && (r.styles = n),
                this.adoptedStyleSheetCb(r)
            }
        }
        reset() {
            this.styleMirror.reset(),
            this.trackedLinkElements = new WeakSet
        }
        trackStylesheetInLinkElement(e) {}
    }
    class ProcessedNodeManager {
        constructor() {
            __publicField(this, "nodeMap", new WeakMap),
            __publicField(this, "active", !1)
        }
        inOtherBuffer(e, t) {
            e = this.nodeMap.get(e);
            return e && Array.from(e).some(e => e !== t)
        }
        add(e, t) {
            this.active || (this.active = !0,
            requestAnimationFrame( () => {
                this.nodeMap = new WeakMap,
                this.active = !1
            }
            )),
            this.nodeMap.set(e, (this.nodeMap.get(e) || new Set).add(t))
        }
        destroy() {}
    }
    let wrappedEmit, takeFullSnapshot, canvasManager, recording = !1;
    try {
        if (2 !== Array.from([1], e => 2 * e)[0]) {
            const cleanFrame = document.createElement("iframe");
            document.body.appendChild(cleanFrame),
            Array.from = (null == (_a = cleanFrame.contentWindow) ? void 0 : _a.Array.from) || Array.from,
            document.body.removeChild(cleanFrame)
        }
    } catch (err) {
        console.debug("Unable to override Array.from", err)
    }
    const mirror = createMirror$2();
    function record(e={}) {
        const {emit: n, checkoutEveryNms: o, checkoutEveryNth: a, blockClass: r="rr-block", blockSelector: i=null, ignoreClass: N="rr-ignore", ignoreSelector: L=null, maskTextClass: s="rr-mask", maskTextSelector: l=null, inlineStylesheet: c=!0, maskAllInputs: j, maskInputOptions: t, slimDOMOptions: u, maskInputFn: p, maskTextFn: d, hooks: F, packFn: f, sampling: h={}, dataURLOptions: g={}, mousemoveWait: m, recordDOM: y=!0, recordCanvas: S=!1, recordCrossOriginIframes: U=!1, recordAfter: V="DOMContentLoaded" === e.recordAfter ? e.recordAfter : "load", userTriggeredOnInput: G=!1, collectFonts: B=!1, inlineImages: v=!1, plugins: b, keepIframeSrcFn: E= () => !1, ignoreCSSAttributes: W=new Set([]), errorHandler: H} = e
          , $ = (registerErrorHandler(H),
        !U || window.parent === window);
        let T = !1;
        if (!$)
            try {
                window.parent.document && (T = !1)
            } catch (e) {
                T = !0
            }
        if ($ && !n)
            throw new Error("emit function is required");
        if (!$ && !T)
            return () => {}
            ;
        void 0 !== m && void 0 === h.mousemove && (h.mousemove = m),
        mirror.reset();
        const I = !0 === j ? {
            color: !0,
            date: !0,
            "datetime-local": !0,
            email: !0,
            month: !0,
            number: !0,
            range: !0,
            search: !0,
            tel: !0,
            text: !0,
            time: !0,
            url: !0,
            week: !0,
            textarea: !0,
            select: !0,
            password: !0
        } : void 0 !== t ? t : {
            password: !0
        }
          , _ = !0 === u || "all" === u ? {
            script: !0,
            comment: !0,
            headFavicon: !0,
            headWhitespace: !0,
            headMetaSocial: !0,
            headMetaRobots: !0,
            headMetaHttpEquiv: !0,
            headMetaVerification: !0,
            headMetaAuthorship: "all" === u,
            headMetaDescKeywords: "all" === u,
            headTitleMutations: "all" === u
        } : u || {};
        polyfill$1();
        let K, w = 0;
        const Y = e => {
            for (const t of b || [])
                t.eventProcessor && (e = t.eventProcessor(e));
            return e = f && !T ? f(e) : e
        }
          , O = (wrappedEmit = (e, t) => {
            const r = e;
            r.timestamp = nowTimestamp(),
            null == (e = mutationBuffers[0]) || !e.isFrozen() || r.type === EventType.FullSnapshot || r.type === EventType.IncrementalSnapshot && r.data.source === IncrementalSource.Mutation || mutationBuffers.forEach(e => e.unfreeze()),
            $ ? null != n && n(Y(r), t) : T && (e = {
                type: "rrweb",
                event: Y(r),
                origin: window.location.origin,
                isCheckout: t
            },
            window.parent.postMessage(e, "*")),
            r.type === EventType.FullSnapshot ? (K = r,
            w = 0) : r.type !== EventType.IncrementalSnapshot || r.data.source === IncrementalSource.Mutation && r.data.isAttachIframe || (w++,
            t = a && w >= a,
            e = o && r.timestamp - K.timestamp > o,
            (t || e) && takeFullSnapshot(!0))
        }
        ,
        e => {
            wrappedEmit({
                type: EventType.IncrementalSnapshot,
                data: {
                    source: IncrementalSource.Mutation,
                    ...e
                }
            })
        }
        )
          , Z = e => wrappedEmit({
            type: EventType.IncrementalSnapshot,
            data: {
                source: IncrementalSource.Scroll,
                ...e
            }
        })
          , z = e => wrappedEmit({
            type: EventType.IncrementalSnapshot,
            data: {
                source: IncrementalSource.CanvasMutation,
                ...e
            }
        });
        const C = new StylesheetManager({
            mutationCb: O,
            adoptedStyleSheetCb: e => wrappedEmit({
                type: EventType.IncrementalSnapshot,
                data: {
                    source: IncrementalSource.AdoptedStyleSheet,
                    ...e
                }
            })
        })
          , A = new IframeManager({
            mirror: mirror,
            mutationCb: O,
            stylesheetManager: C,
            recordCrossOriginIframes: U,
            wrappedEmit: wrappedEmit
        });
        for (const D of b || [])
            D.getMirror && D.getMirror({
                nodeMirror: mirror,
                crossOriginIframeMirror: A.crossOriginIframeMirror,
                crossOriginIframeStyleMirror: A.crossOriginIframeStyleMirror
            });
        const R = new ProcessedNodeManager
          , P = (canvasManager = new CanvasManager({
            recordCanvas: S,
            mutationCb: z,
            win: window,
            blockClass: r,
            blockSelector: i,
            mirror: mirror,
            sampling: h.canvas,
            dataURLOptions: g
        }),
        new ShadowDomManager({
            mutationCb: O,
            scrollCb: Z,
            bypassOptions: {
                blockClass: r,
                blockSelector: i,
                maskTextClass: s,
                maskTextSelector: l,
                inlineStylesheet: c,
                maskInputOptions: I,
                dataURLOptions: g,
                maskTextFn: d,
                maskInputFn: p,
                recordCanvas: S,
                inlineImages: v,
                sampling: h,
                slimDOMOptions: _,
                iframeManager: A,
                stylesheetManager: C,
                canvasManager: canvasManager,
                keepIframeSrcFn: E,
                processedNodeManager: R
            },
            mirror: mirror
        }));
        takeFullSnapshot = (e=!1) => {
            if (y) {
                wrappedEmit({
                    type: EventType.Meta,
                    data: {
                        href: window.location.href,
                        width: getWindowWidth(),
                        height: getWindowHeight()
                    }
                }, e),
                C.reset(),
                P.init(),
                mutationBuffers.forEach(e => e.lock());
                var t = snapshot(document, {
                    mirror: mirror,
                    blockClass: r,
                    blockSelector: i,
                    maskTextClass: s,
                    maskTextSelector: l,
                    inlineStylesheet: c,
                    maskAllInputs: I,
                    maskTextFn: d,
                    slimDOM: _,
                    dataURLOptions: g,
                    recordCanvas: S,
                    inlineImages: v,
                    onSerialize: e => {
                        isSerializedIframe(e, mirror) && A.addIframe(e),
                        isSerializedStylesheet(e, mirror) && C.trackLinkElement(e),
                        hasShadowRoot(e) && P.addShadowRoot(e.shadowRoot, document)
                    }
                    ,
                    onIframeLoad: (e, t) => {
                        A.attachIframe(e, t),
                        P.observeAttachShadow(e)
                    }
                    ,
                    onStylesheetLoad: (e, t) => {
                        C.attachLinkElement(e, t)
                    }
                    ,
                    keepIframeSrcFn: E
                });
                if (!t)
                    return console.warn("Failed to snapshot the document");
                wrappedEmit({
                    type: EventType.FullSnapshot,
                    data: {
                        node: t,
                        initialOffset: getWindowScroll(window)
                    }
                }, e),
                mutationBuffers.forEach(e => e.unlock()),
                document.adoptedStyleSheets && 0 < document.adoptedStyleSheets.length && C.adoptStyleSheets(document.adoptedStyleSheets, mirror.getId(document))
            }
        }
        ;
        try {
            const k = []
              , M = e => {
                return callbackWrapper(initObservers)({
                    mutationCb: O,
                    mousemoveCb: (e, t) => wrappedEmit({
                        type: EventType.IncrementalSnapshot,
                        data: {
                            source: t,
                            positions: e
                        }
                    }),
                    mouseInteractionCb: e => wrappedEmit({
                        type: EventType.IncrementalSnapshot,
                        data: {
                            source: IncrementalSource.MouseInteraction,
                            ...e
                        }
                    }),
                    scrollCb: Z,
                    viewportResizeCb: e => wrappedEmit({
                        type: EventType.IncrementalSnapshot,
                        data: {
                            source: IncrementalSource.ViewportResize,
                            ...e
                        }
                    }),
                    inputCb: e => wrappedEmit({
                        type: EventType.IncrementalSnapshot,
                        data: {
                            source: IncrementalSource.Input,
                            ...e
                        }
                    }),
                    mediaInteractionCb: e => wrappedEmit({
                        type: EventType.IncrementalSnapshot,
                        data: {
                            source: IncrementalSource.MediaInteraction,
                            ...e
                        }
                    }),
                    styleSheetRuleCb: e => wrappedEmit({
                        type: EventType.IncrementalSnapshot,
                        data: {
                            source: IncrementalSource.StyleSheetRule,
                            ...e
                        }
                    }),
                    styleDeclarationCb: e => wrappedEmit({
                        type: EventType.IncrementalSnapshot,
                        data: {
                            source: IncrementalSource.StyleDeclaration,
                            ...e
                        }
                    }),
                    canvasMutationCb: z,
                    fontCb: e => wrappedEmit({
                        type: EventType.IncrementalSnapshot,
                        data: {
                            source: IncrementalSource.Font,
                            ...e
                        }
                    }),
                    selectionCb: e => {
                        wrappedEmit({
                            type: EventType.IncrementalSnapshot,
                            data: {
                                source: IncrementalSource.Selection,
                                ...e
                            }
                        })
                    }
                    ,
                    customElementCb: e => {
                        wrappedEmit({
                            type: EventType.IncrementalSnapshot,
                            data: {
                                source: IncrementalSource.CustomElement,
                                ...e
                            }
                        })
                    }
                    ,
                    blockClass: r,
                    ignoreClass: N,
                    ignoreSelector: L,
                    maskTextClass: s,
                    maskTextSelector: l,
                    maskInputOptions: I,
                    inlineStylesheet: c,
                    sampling: h,
                    recordDOM: y,
                    recordCanvas: S,
                    inlineImages: v,
                    userTriggeredOnInput: G,
                    collectFonts: B,
                    doc: e,
                    maskInputFn: p,
                    maskTextFn: d,
                    keepIframeSrcFn: E,
                    blockSelector: i,
                    slimDOMOptions: _,
                    dataURLOptions: g,
                    mirror: mirror,
                    iframeManager: A,
                    stylesheetManager: C,
                    shadowDomManager: P,
                    processedNodeManager: R,
                    canvasManager: canvasManager,
                    ignoreCSSAttributes: W,
                    plugins: (null == (e = null == b ? void 0 : b.filter(e => e.observer)) ? void 0 : e.map(t => ({
                        observer: t.observer,
                        options: t.options,
                        callback: e => wrappedEmit({
                            type: EventType.Plugin,
                            data: {
                                plugin: t.name,
                                payload: e
                            }
                        })
                    }))) || []
                }, F)
            }
              , x = (A.addLoadListener(e => {
                try {
                    k.push(M(e.contentDocument))
                } catch (e) {
                    console.warn(e)
                }
            }
            ),
            () => {
                takeFullSnapshot(),
                k.push(M(document)),
                recording = !0
            }
            );
            return "interactive" === document.readyState || "complete" === document.readyState ? x() : (k.push(on("DOMContentLoaded", () => {
                wrappedEmit({
                    type: EventType.DomContentLoaded,
                    data: {}
                }),
                "DOMContentLoaded" === V && x()
            }
            )),
            k.push(on("load", () => {
                wrappedEmit({
                    type: EventType.Load,
                    data: {}
                }),
                "load" === V && x()
            }
            , window))),
            () => {
                k.forEach(e => e()),
                R.destroy(),
                recording = !1,
                unregisterErrorHandler()
            }
        } catch (e) {
            console.warn(e)
        }
    }
    record.addCustomEvent = (e, t) => {
        if (!recording)
            throw new Error("please add custom event after start recording");
        wrappedEmit({
            type: EventType.Custom,
            data: {
                tag: e,
                payload: t
            }
        })
    }
    ,
    record.freezePage = () => {
        mutationBuffers.forEach(e => e.freeze())
    }
    ,
    record.takeFullSnapshot = e => {
        if (!recording)
            throw new Error("please take full snapshot after start recording");
        takeFullSnapshot(e)
    }
    ,
    record.mirror = mirror,
    !function(e) {
        e[e.NotStarted = 0] = "NotStarted",
        e[e.Running = 1] = "Running",
        e[e.Stopped = 2] = "Stopped"
    }(n = n || {});
    var ReplayManager = function() {
        function e() {
            _classCallCheck(this, e),
            this.aryAllRecordData = [],
            this.isRecording = !1,
            this.stopFunc = null
        }
        var o;
        return _createClass(e, [{
            key: "startRecordOrStop",
            value: function(e) {
                if (e != this.isRecording)
                    if (e)
                        try {
                            this.aryAllRecordData = [];
                            var t = this;
                            this.stopFunc = record({
                                emit: function(e) {
                                    4 == e.type && (t.aryAllRecordData.push([]),
                                    3 < t.aryAllRecordData.length && t.aryAllRecordData.shift()),
                                    0 < t.aryAllRecordData.length && t.aryAllRecordData[t.aryAllRecordData.length - 1].push(e)
                                },
                                checkoutEveryNms: 1e4,
                                recordAfter: "DOMContentLoaded",
                                slimDOMOptions: "all"
                            }),
                            this.isRecording = !0
                        } catch (e) {
                            logger.log(e)
                        }
                    else {
                        if ("function" == typeof this.stopFunc && this.stopFunc) {
                            try {
                                this.stopFunc()
                            } catch (e) {
                                logger.log(e)
                            }
                            this.stopFunc = null
                        }
                        this.aryAllRecordData = [],
                        this.isRecording = !1
                    }
            }
        }, {
            key: "getReplayData",
            value: (o = _asyncToGenerator(regenerator.mark(function e(t, r, n, o) {
                var a;
                return regenerator.wrap(function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            if (this.isRecording) {
                                e.next = 2;
                                break
                            }
                            throw "recording is not open";
                        case 2:
                            return e.next = 4,
                            store.worker.handleReplayData(this.aryAllRecordData, t, r, n, o);
                        case 4:
                            if (a = e.sent)
                                return e.abrupt("return", a);
                            e.next = 9;
                            break;
                        case 9:
                            throw "fail to get replay data";
                        case 10:
                        case "end":
                            return e.stop()
                        }
                }, e, this)
            })),
            function(e, t, r, n) {
                return o.apply(this, arguments)
            }
            )
        }]),
        e
    }(), fails$1 = fails$o, wellKnownSymbol$1 = wellKnownSymbol$n, IS_PURE = isPure, ITERATOR$1 = wellKnownSymbol$1("iterator"), nativeUrl = !fails$1(function() {
        var e = new URL("b?a=1&b=2&c=3","http://a")
          , r = e.searchParams
          , n = "";
        return e.pathname = "c%20d",
        r.forEach(function(e, t) {
            r.delete("b"),
            n += t + e
        }),
        IS_PURE && !e.toJSON || !r.sort || "http://a/c%20d?a=1&c=3" !== e.href || "3" !== r.get("c") || "a=1" !== String(new URLSearchParams("?a=1")) || !r[ITERATOR$1] || "a" !== new URL("https://a@b").username || "b" !== new URLSearchParams(new URLSearchParams("a=b")).get("a") || "xn--e1aybc" !== new URL("http://тест").host || "#%D0%B1" !== new URL("http://a#б").hash || "a1c3" !== n || "x" !== new URL("http://x",void 0).host
    }), DESCRIPTORS$1 = descriptors, fails = fails$o, objectKeys = objectKeys$3, getOwnPropertySymbolsModule = objectGetOwnPropertySymbols, propertyIsEnumerableModule = objectPropertyIsEnumerable, toObject = toObject$d, IndexedObject = indexedObject, $assign = Object.assign, defineProperty = Object.defineProperty, objectAssign = !$assign || fails(function() {
        if (DESCRIPTORS$1 && 1 !== $assign({
            b: 1
        }, $assign(defineProperty({}, "a", {
            enumerable: !0,
            get: function() {
                defineProperty(this, "b", {
                    value: 3,
                    enumerable: !1
                })
            }
        }), {
            b: 2
        })).b)
            return !0;
        var e = {}
          , t = {}
          , r = Symbol()
          , n = "abcdefghijklmnopqrst";
        return e[r] = 7,
        n.split("").forEach(function(e) {
            t[e] = e
        }),
        7 != $assign({}, e)[r] || objectKeys($assign({}, t)).join("") != n
    }) ? function(e, t) {
        for (var r = toObject(e), n = arguments.length, o = 1, a = getOwnPropertySymbolsModule.f, i = propertyIsEnumerableModule.f; o < n; )
            for (var s, l = IndexedObject(arguments[o++]), c = a ? objectKeys(l).concat(a(l)) : objectKeys(l), u = c.length, p = 0; p < u; )
                s = c[p++],
                DESCRIPTORS$1 && !i.call(l, s) || (r[s] = l[s]);
        return r
    }
    : $assign, maxInt = 2147483647, base = 36, tMin = 1, tMax = 26, skew = 38, damp = 700, initialBias = 72, initialN = 128, delimiter = "-", regexNonASCII = /[^\0-\u007E]/, regexSeparators = /[.\u3002\uFF0E\uFF61]/g, OVERFLOW_ERROR = "Overflow: input needs wider integers to process", baseMinusTMin = base - tMin, floor$1 = Math.floor, stringFromCharCode = String.fromCharCode, ucs2decode = function(e) {
        for (var t = [], r = 0, n = e.length; r < n; ) {
            var o, a = e.charCodeAt(r++);
            55296 <= a && a <= 56319 && r < n ? 56320 == (64512 & (o = e.charCodeAt(r++))) ? t.push(((1023 & a) << 10) + (1023 & o) + 65536) : (t.push(a),
            r--) : t.push(a)
        }
        return t
    }, digitToBasic = function(e) {
        return e + 22 + 75 * (e < 26)
    }, adapt = function(e, t, r) {
        var n = 0;
        for (e = r ? floor$1(e / damp) : e >> 1,
        e += floor$1(e / t); baseMinusTMin * tMax >> 1 < e; n += base)
            e = floor$1(e / baseMinusTMin);
        return floor$1(n + (baseMinusTMin + 1) * e / (e + skew))
    }, encode = function(e) {
        var t, r = [], n = (e = ucs2decode(e)).length, o = initialN, a = 0, i = initialBias;
        for (u = 0; u < e.length; u++)
            (t = e[u]) < 128 && r.push(stringFromCharCode(t));
        var s = r.length
          , l = s;
        for (s && r.push(delimiter); l < n; ) {
            for (var c = maxInt, u = 0; u < e.length; u++)
                o <= (t = e[u]) && t < c && (c = t);
            var p = l + 1;
            if (c - o > floor$1((maxInt - a) / p))
                throw RangeError(OVERFLOW_ERROR);
            for (a += (c - o) * p,
            o = c,
            u = 0; u < e.length; u++) {
                if ((t = e[u]) < o && ++a > maxInt)
                    throw RangeError(OVERFLOW_ERROR);
                if (t == o) {
                    for (var d = a, f = base; ; f += base) {
                        var h = f <= i ? tMin : i + tMax <= f ? tMax : f - i;
                        if (d < h)
                            break;
                        var g = d - h
                          , m = base - h;
                        r.push(stringFromCharCode(digitToBasic(h + g % m))),
                        d = floor$1(g / m)
                    }
                    r.push(stringFromCharCode(digitToBasic(d))),
                    i = adapt(a, p, l == s),
                    a = 0,
                    ++l
                }
            }
            ++a,
            ++o
        }
        return r.join("")
    }, stringPunycodeToAscii = function(e) {
        for (var t, r = [], n = e.toLowerCase().replace(regexSeparators, ".").split("."), o = 0; o < n.length; o++)
            t = n[o],
            r.push(regexNonASCII.test(t) ? "xn--" + encode(t) : t);
        return r.join(".")
    }, $$1 = _export, getBuiltIn = getBuiltIn$c, USE_NATIVE_URL$1 = nativeUrl, redefine$1 = redefine$5, redefineAll = redefineAll$3, setToStringTag$1 = setToStringTag$8, createIteratorConstructor = createIteratorConstructor$2, InternalStateModule$1 = internalState, anInstance$1 = anInstance$5, hasOwn = has$c, bind = functionBindContext, classof = classof$6, anObject = anObject$e, isObject = isObject$i, $toString$1 = toString$c, create = objectCreate, createPropertyDescriptor = createPropertyDescriptor$7, getIterator = getIterator$3, getIteratorMethod = getIteratorMethod$8, wellKnownSymbol = wellKnownSymbol$n, nativeFetch = getBuiltIn("fetch"), NativeRequest = getBuiltIn("Request"), RequestPrototype = NativeRequest && NativeRequest.prototype, Headers = getBuiltIn("Headers"), ITERATOR = wellKnownSymbol("iterator"), URL_SEARCH_PARAMS = "URLSearchParams", URL_SEARCH_PARAMS_ITERATOR = URL_SEARCH_PARAMS + "Iterator", setInternalState$1 = InternalStateModule$1.set, getInternalParamsState = InternalStateModule$1.getterFor(URL_SEARCH_PARAMS), getInternalIteratorState = InternalStateModule$1.getterFor(URL_SEARCH_PARAMS_ITERATOR), plus = /\+/g, sequences = Array(4), percentSequence = function(e) {
        return sequences[e - 1] || (sequences[e - 1] = RegExp("((?:%[\\da-f]{2}){" + e + "})", "gi"))
    }, percentDecode = function(t) {
        try {
            return decodeURIComponent(t)
        } catch (e) {
            return t
        }
    }, deserialize = function(e) {
        var t = e.replace(plus, " ")
          , r = 4;
        try {
            return decodeURIComponent(t)
        } catch (e) {
            for (; r; )
                t = t.replace(percentSequence(r--), percentDecode);
            return t
        }
    }, find = /[!'()~]|%20/g, replace = {
        "!": "%21",
        "'": "%27",
        "(": "%28",
        ")": "%29",
        "~": "%7E",
        "%20": "+"
    }, replacer = function(e) {
        return replace[e]
    }, serialize = function(e) {
        return encodeURIComponent(e).replace(find, replacer)
    }, parseSearchParams = function(e, t) {
        if (t)
            for (var r, n = t.split("&"), o = 0; o < n.length; )
                (r = n[o++]).length && (r = r.split("="),
                e.push({
                    key: deserialize(r.shift()),
                    value: deserialize(r.join("="))
                }))
    }, updateSearchParams = function(e) {
        this.entries.length = 0,
        parseSearchParams(this.entries, e)
    }, validateArgumentsLength = function(e, t) {
        if (e < t)
            throw TypeError("Not enough arguments")
    }, URLSearchParamsIterator = createIteratorConstructor(function(e, t) {
        setInternalState$1(this, {
            type: URL_SEARCH_PARAMS_ITERATOR,
            iterator: getIterator(getInternalParamsState(e).entries),
            kind: t
        })
    }, "Iterator", function() {
        var e = getInternalIteratorState(this)
          , t = e.kind
          , e = e.iterator.next()
          , r = e.value;
        return e.done || (e.value = "keys" === t ? r.key : "values" === t ? r.value : [r.key, r.value]),
        e
    }), URLSearchParamsConstructor = function() {
        anInstance$1(this, URLSearchParamsConstructor, URL_SEARCH_PARAMS);
        var e, t, r, n, o, a, i, s, l = 0 < arguments.length ? arguments[0] : void 0, c = [];
        if (setInternalState$1(this, {
            type: URL_SEARCH_PARAMS,
            entries: c,
            updateURL: function() {},
            updateSearchParams: updateSearchParams
        }),
        void 0 !== l)
            if (isObject(l))
                if ("function" == typeof (e = getIteratorMethod(l)))
                    for (r = (t = getIterator(l, e)).next; !(n = r.call(t)).done; ) {
                        if ((a = (o = (n = getIterator(anObject(n.value))).next).call(n)).done || (i = o.call(n)).done || !o.call(n).done)
                            throw TypeError("Expected sequence with length 2");
                        c.push({
                            key: $toString$1(a.value),
                            value: $toString$1(i.value)
                        })
                    }
                else
                    for (s in l)
                        hasOwn(l, s) && c.push({
                            key: s,
                            value: $toString$1(l[s])
                        });
            else
                parseSearchParams(c, "string" == typeof l ? "?" === l.charAt(0) ? l.slice(1) : l : $toString$1(l))
    }, URLSearchParamsPrototype = URLSearchParamsConstructor.prototype, wrapRequestOptions, RequestConstructor, web_urlSearchParams = (redefineAll(URLSearchParamsPrototype, {
        append: function(e, t) {
            validateArgumentsLength(arguments.length, 2);
            var r = getInternalParamsState(this);
            r.entries.push({
                key: $toString$1(e),
                value: $toString$1(t)
            }),
            r.updateURL()
        },
        delete: function(e) {
            validateArgumentsLength(arguments.length, 1);
            for (var t = getInternalParamsState(this), r = t.entries, n = $toString$1(e), o = 0; o < r.length; )
                r[o].key === n ? r.splice(o, 1) : o++;
            t.updateURL()
        },
        get: function(e) {
            validateArgumentsLength(arguments.length, 1);
            for (var t = getInternalParamsState(this).entries, r = $toString$1(e), n = 0; n < t.length; n++)
                if (t[n].key === r)
                    return t[n].value;
            return null
        },
        getAll: function(e) {
            validateArgumentsLength(arguments.length, 1);
            for (var t = getInternalParamsState(this).entries, r = $toString$1(e), n = [], o = 0; o < t.length; o++)
                t[o].key === r && n.push(t[o].value);
            return n
        },
        has: function(e) {
            validateArgumentsLength(arguments.length, 1);
            for (var t = getInternalParamsState(this).entries, r = $toString$1(e), n = 0; n < t.length; )
                if (t[n++].key === r)
                    return !0;
            return !1
        },
        set: function(e, t) {
            validateArgumentsLength(arguments.length, 1);
            for (var r, n = getInternalParamsState(this), o = n.entries, a = !1, i = $toString$1(e), s = $toString$1(t), l = 0; l < o.length; l++)
                (r = o[l]).key === i && (a ? o.splice(l--, 1) : (a = !0,
                r.value = s));
            a || o.push({
                key: i,
                value: s
            }),
            n.updateURL()
        },
        sort: function() {
            for (var e, t, r = getInternalParamsState(this), n = r.entries, o = n.slice(), a = n.length = 0; a < o.length; a++) {
                for (e = o[a],
                t = 0; t < a; t++)
                    if (n[t].key > e.key) {
                        n.splice(t, 0, e);
                        break
                    }
                t === a && n.push(e)
            }
            r.updateURL()
        },
        forEach: function(e) {
            for (var t, r = getInternalParamsState(this).entries, n = bind(e, 1 < arguments.length ? arguments[1] : void 0, 3), o = 0; o < r.length; )
                n((t = r[o++]).value, t.key, this)
        },
        keys: function() {
            return new URLSearchParamsIterator(this,"keys")
        },
        values: function() {
            return new URLSearchParamsIterator(this,"values")
        },
        entries: function() {
            return new URLSearchParamsIterator(this,"entries")
        }
    }, {
        enumerable: !0
    }),
    redefine$1(URLSearchParamsPrototype, ITERATOR, URLSearchParamsPrototype.entries),
    redefine$1(URLSearchParamsPrototype, "toString", function() {
        for (var e, t = getInternalParamsState(this).entries, r = [], n = 0; n < t.length; )
            e = t[n++],
            r.push(serialize(e.key) + "=" + serialize(e.value));
        return r.join("&")
    }, {
        enumerable: !0
    }),
    setToStringTag$1(URLSearchParamsConstructor, URL_SEARCH_PARAMS),
    $$1({
        global: !0,
        forced: !USE_NATIVE_URL$1
    }, {
        URLSearchParams: URLSearchParamsConstructor
    }),
    USE_NATIVE_URL$1 || "function" != typeof Headers || (wrapRequestOptions = function(e) {
        if (isObject(e)) {
            var t, r = e.body;
            if (classof(r) === URL_SEARCH_PARAMS)
                return (t = e.headers ? new Headers(e.headers) : new Headers).has("content-type") || t.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"),
                create(e, {
                    body: createPropertyDescriptor(0, String(r)),
                    headers: createPropertyDescriptor(0, t)
                })
        }
        return e
    }
    ,
    "function" == typeof nativeFetch && $$1({
        global: !0,
        enumerable: !0,
        forced: !0
    }, {
        fetch: function(e) {
            return nativeFetch(e, 1 < arguments.length ? wrapRequestOptions(arguments[1]) : {})
        }
    }),
    "function" == typeof NativeRequest && (RequestConstructor = function(e) {
        return anInstance$1(this, RequestConstructor, "Request"),
        new NativeRequest(e,1 < arguments.length ? wrapRequestOptions(arguments[1]) : {})
    }
    ,
    RequestPrototype.constructor = RequestConstructor,
    RequestConstructor.prototype = RequestPrototype,
    $$1({
        global: !0,
        forced: !0
    }, {
        Request: RequestConstructor
    }))),
    {
        URLSearchParams: URLSearchParamsConstructor,
        getState: getInternalParamsState
    }), $ = _export, DESCRIPTORS = descriptors, USE_NATIVE_URL = nativeUrl, global$1 = global$n, defineProperties = objectDefineProperties, redefine = redefine$5, anInstance = anInstance$5, has = has$c, assign = objectAssign, arrayFrom = arrayFrom$1, codeAt = stringMultibyte.codeAt, toASCII = stringPunycodeToAscii, $toString = toString$c, setToStringTag = setToStringTag$8, URLSearchParamsModule = web_urlSearchParams, InternalStateModule = internalState, NativeURL = global$1.URL, URLSearchParams$1 = URLSearchParamsModule.URLSearchParams, getInternalSearchParamsState = URLSearchParamsModule.getState, setInternalState = InternalStateModule.set, getInternalURLState = InternalStateModule.getterFor("URL"), floor = Math.floor, pow = Math.pow, INVALID_AUTHORITY = "Invalid authority", INVALID_SCHEME = "Invalid scheme", INVALID_HOST = "Invalid host", INVALID_PORT = "Invalid port", ALPHA = /[A-Za-z]/, ALPHANUMERIC = /[\d+-.A-Za-z]/, DIGIT = /\d/, HEX_START = /^0x/i, OCT = /^[0-7]+$/, DEC = /^\d+$/, HEX = /^[\dA-Fa-f]+$/, FORBIDDEN_HOST_CODE_POINT = /[\0\t\n\r #%/:<>?@[\\\]^|]/, FORBIDDEN_HOST_CODE_POINT_EXCLUDING_PERCENT = /[\0\t\n\r #/:<>?@[\\\]^|]/, LEADING_AND_TRAILING_C0_CONTROL_OR_SPACE = /^[\u0000-\u0020]+|[\u0000-\u0020]+$/g, TAB_AND_NEW_LINE = /[\t\n\r]/g, EOF, parseHost = function(e, t) {
        var r, n, o;
        if ("[" == t.charAt(0))
            return "]" == t.charAt(t.length - 1) && (r = parseIPv6(t.slice(1, -1))) ? void (e.host = r) : INVALID_HOST;
        if (isSpecial(e))
            return t = toASCII(t),
            FORBIDDEN_HOST_CODE_POINT.test(t) || null === (r = parseIPv4(t)) ? INVALID_HOST : void (e.host = r);
        if (FORBIDDEN_HOST_CODE_POINT_EXCLUDING_PERCENT.test(t))
            return INVALID_HOST;
        for (r = "",
        n = arrayFrom(t),
        o = 0; o < n.length; o++)
            r += percentEncode(n[o], C0ControlPercentEncodeSet);
        e.host = r
    }, parseIPv4 = function(e) {
        var t, r, n, o, a, i, s, l = e.split(".");
        if (l.length && "" == l[l.length - 1] && l.pop(),
        4 < (t = l.length))
            return e;
        for (r = [],
        n = 0; n < t; n++) {
            if ("" == (o = l[n]))
                return e;
            if (a = 10,
            1 < o.length && "0" == o.charAt(0) && (a = HEX_START.test(o) ? 16 : 8,
            o = o.slice(8 == a ? 1 : 2)),
            "" === o)
                i = 0;
            else {
                if (!(10 == a ? DEC : 8 == a ? OCT : HEX).test(o))
                    return e;
                i = parseInt(o, a)
            }
            r.push(i)
        }
        for (n = 0; n < t; n++)
            if (i = r[n],
            n == t - 1) {
                if (i >= pow(256, 5 - t))
                    return null
            } else if (255 < i)
                return null;
        for (s = r.pop(),
        n = 0; n < r.length; n++)
            s += r[n] * pow(256, 3 - n);
        return s
    }, parseIPv6 = function(e) {
        function t() {
            return e.charAt(d)
        }
        var r, n, o, a, i, s, l, c = [0, 0, 0, 0, 0, 0, 0, 0], u = 0, p = null, d = 0;
        if (":" == t()) {
            if (":" != e.charAt(1))
                return;
            d += 2,
            p = ++u
        }
        for (; t(); ) {
            if (8 == u)
                return;
            if (":" == t()) {
                if (null !== p)
                    return;
                d++,
                p = ++u
            } else {
                for (r = n = 0; n < 4 && HEX.test(t()); )
                    r = 16 * r + parseInt(t(), 16),
                    d++,
                    n++;
                if ("." == t()) {
                    if (0 == n)
                        return;
                    if (d -= n,
                    6 < u)
                        return;
                    for (o = 0; t(); ) {
                        if (a = null,
                        0 < o) {
                            if (!("." == t() && o < 4))
                                return;
                            d++
                        }
                        if (!DIGIT.test(t()))
                            return;
                        for (; DIGIT.test(t()); ) {
                            if (i = parseInt(t(), 10),
                            null === a)
                                a = i;
                            else {
                                if (0 == a)
                                    return;
                                a = 10 * a + i
                            }
                            if (255 < a)
                                return;
                            d++
                        }
                        c[u] = 256 * c[u] + a,
                        2 != ++o && 4 != o || u++
                    }
                    if (4 != o)
                        return;
                    break
                }
                if (":" == t()) {
                    if (d++,
                    !t())
                        return
                } else if (t())
                    return;
                c[u++] = r
            }
        }
        if (null !== p)
            for (s = u - p,
            u = 7; 0 != u && 0 < s; )
                l = c[u],
                c[u--] = c[p + s - 1],
                c[p + --s] = l;
        else if (8 != u)
            return;
        return c
    }, findLongestZeroSequence = function(e) {
        for (var t = null, r = 1, n = null, o = 0, a = 0; a < 8; a++)
            0 !== e[a] ? (r < o && (t = n,
            r = o),
            n = null,
            o = 0) : (null === n && (n = a),
            ++o);
        return r < o && (t = n,
        r = o),
        t
    }, serializeHost = function(e) {
        var t, r, n, o;
        if ("number" == typeof e) {
            for (t = [],
            r = 0; r < 4; r++)
                t.unshift(e % 256),
                e = floor(e / 256);
            return t.join(".")
        }
        if ("object" != typeof e)
            return e;
        for (t = "",
        n = findLongestZeroSequence(e),
        r = 0; r < 8; r++)
            o && 0 === e[r] || (o = o && !1,
            n === r ? (t += r ? ":" : "::",
            o = !0) : (t += e[r].toString(16),
            r < 7 && (t += ":")));
        return "[" + t + "]"
    }, C0ControlPercentEncodeSet = {}, fragmentPercentEncodeSet = assign({}, C0ControlPercentEncodeSet, {
        " ": 1,
        '"': 1,
        "<": 1,
        ">": 1,
        "`": 1
    }), pathPercentEncodeSet = assign({}, fragmentPercentEncodeSet, {
        "#": 1,
        "?": 1,
        "{": 1,
        "}": 1
    }), userinfoPercentEncodeSet = assign({}, pathPercentEncodeSet, {
        "/": 1,
        ":": 1,
        ";": 1,
        "=": 1,
        "@": 1,
        "[": 1,
        "\\": 1,
        "]": 1,
        "^": 1,
        "|": 1
    }), percentEncode = function(e, t) {
        var r = codeAt(e, 0);
        return 32 < r && r < 127 && !has(t, e) ? e : encodeURIComponent(e)
    }, specialSchemes = {
        ftp: 21,
        file: null,
        http: 80,
        https: 443,
        ws: 80,
        wss: 443
    }, isSpecial = function(e) {
        return has(specialSchemes, e.scheme)
    }, includesCredentials = function(e) {
        return "" != e.username || "" != e.password
    }, cannotHaveUsernamePasswordPort = function(e) {
        return !e.host || e.cannotBeABaseURL || "file" == e.scheme
    }, isWindowsDriveLetter = function(e, t) {
        return 2 == e.length && ALPHA.test(e.charAt(0)) && (":" == (e = e.charAt(1)) || !t && "|" == e)
    }, startsWithWindowsDriveLetter = function(e) {
        return 1 < e.length && isWindowsDriveLetter(e.slice(0, 2)) && (2 == e.length || "/" === (e = e.charAt(2)) || "\\" === e || "?" === e || "#" === e)
    }, shortenURLsPath = function(e) {
        var t = e.path
          , r = t.length;
        !r || "file" == e.scheme && 1 == r && isWindowsDriveLetter(t[0], !0) || t.pop()
    }, isSingleDot = function(e) {
        return "." === e || "%2e" === e.toLowerCase()
    }, isDoubleDot = function(e) {
        return ".." === (e = e.toLowerCase()) || "%2e." === e || ".%2e" === e || "%2e%2e" === e
    }, SCHEME_START = {}, SCHEME = {}, NO_SCHEME = {}, SPECIAL_RELATIVE_OR_AUTHORITY = {}, PATH_OR_AUTHORITY = {}, RELATIVE = {}, RELATIVE_SLASH = {}, SPECIAL_AUTHORITY_SLASHES = {}, SPECIAL_AUTHORITY_IGNORE_SLASHES = {}, AUTHORITY = {}, HOST = {}, HOSTNAME = {}, PORT = {}, FILE = {}, FILE_SLASH = {}, FILE_HOST = {}, PATH_START = {}, PATH = {}, CANNOT_BE_A_BASE_URL_PATH = {}, QUERY = {}, FRAGMENT = {}, parseURL = function(e, t, r, n) {
        var o, a, i, s = r || SCHEME_START, l = 0, c = "", u = !1, p = !1, d = !1;
        for (r || (e.scheme = "",
        e.username = "",
        e.password = "",
        e.host = null,
        e.port = null,
        e.path = [],
        e.query = null,
        e.fragment = null,
        e.cannotBeABaseURL = !1,
        t = t.replace(LEADING_AND_TRAILING_C0_CONTROL_OR_SPACE, "")),
        t = t.replace(TAB_AND_NEW_LINE, ""),
        o = arrayFrom(t); l <= o.length; ) {
            switch (a = o[l],
            s) {
            case SCHEME_START:
                if (!a || !ALPHA.test(a)) {
                    if (r)
                        return INVALID_SCHEME;
                    s = NO_SCHEME;
                    continue
                }
                c += a.toLowerCase(),
                s = SCHEME;
                break;
            case SCHEME:
                if (a && (ALPHANUMERIC.test(a) || "+" == a || "-" == a || "." == a))
                    c += a.toLowerCase();
                else {
                    if (":" != a) {
                        if (r)
                            return INVALID_SCHEME;
                        c = "",
                        s = NO_SCHEME,
                        l = 0;
                        continue
                    }
                    if (r && (isSpecial(e) != has(specialSchemes, c) || "file" == c && (includesCredentials(e) || null !== e.port) || "file" == e.scheme && !e.host))
                        return;
                    if (e.scheme = c,
                    r)
                        return void (isSpecial(e) && specialSchemes[e.scheme] == e.port && (e.port = null));
                    c = "",
                    "file" == e.scheme ? s = FILE : isSpecial(e) && n && n.scheme == e.scheme ? s = SPECIAL_RELATIVE_OR_AUTHORITY : isSpecial(e) ? s = SPECIAL_AUTHORITY_SLASHES : "/" == o[l + 1] ? (s = PATH_OR_AUTHORITY,
                    l++) : (e.cannotBeABaseURL = !0,
                    e.path.push(""),
                    s = CANNOT_BE_A_BASE_URL_PATH)
                }
                break;
            case NO_SCHEME:
                if (!n || n.cannotBeABaseURL && "#" != a)
                    return INVALID_SCHEME;
                if (n.cannotBeABaseURL && "#" == a) {
                    e.scheme = n.scheme,
                    e.path = n.path.slice(),
                    e.query = n.query,
                    e.fragment = "",
                    e.cannotBeABaseURL = !0,
                    s = FRAGMENT;
                    break
                }
                s = "file" == n.scheme ? FILE : RELATIVE;
                continue;
            case SPECIAL_RELATIVE_OR_AUTHORITY:
                if ("/" != a || "/" != o[l + 1]) {
                    s = RELATIVE;
                    continue
                }
                s = SPECIAL_AUTHORITY_IGNORE_SLASHES,
                l++;
                break;
            case PATH_OR_AUTHORITY:
                if ("/" == a) {
                    s = AUTHORITY;
                    break
                }
                s = PATH;
                continue;
            case RELATIVE:
                if (e.scheme = n.scheme,
                a == EOF)
                    e.username = n.username,
                    e.password = n.password,
                    e.host = n.host,
                    e.port = n.port,
                    e.path = n.path.slice(),
                    e.query = n.query;
                else if ("/" == a || "\\" == a && isSpecial(e))
                    s = RELATIVE_SLASH;
                else if ("?" == a)
                    e.username = n.username,
                    e.password = n.password,
                    e.host = n.host,
                    e.port = n.port,
                    e.path = n.path.slice(),
                    e.query = "",
                    s = QUERY;
                else {
                    if ("#" != a) {
                        e.username = n.username,
                        e.password = n.password,
                        e.host = n.host,
                        e.port = n.port,
                        e.path = n.path.slice(),
                        e.path.pop(),
                        s = PATH;
                        continue
                    }
                    e.username = n.username,
                    e.password = n.password,
                    e.host = n.host,
                    e.port = n.port,
                    e.path = n.path.slice(),
                    e.query = n.query,
                    e.fragment = "",
                    s = FRAGMENT
                }
                break;
            case RELATIVE_SLASH:
                if (!isSpecial(e) || "/" != a && "\\" != a) {
                    if ("/" != a) {
                        e.username = n.username,
                        e.password = n.password,
                        e.host = n.host,
                        e.port = n.port,
                        s = PATH;
                        continue
                    }
                    s = AUTHORITY
                } else
                    s = SPECIAL_AUTHORITY_IGNORE_SLASHES;
                break;
            case SPECIAL_AUTHORITY_SLASHES:
                if (s = SPECIAL_AUTHORITY_IGNORE_SLASHES,
                "/" != a || "/" != c.charAt(l + 1))
                    continue;
                l++;
                break;
            case SPECIAL_AUTHORITY_IGNORE_SLASHES:
                if ("/" == a || "\\" == a)
                    break;
                s = AUTHORITY;
                continue;
            case AUTHORITY:
                if ("@" == a) {
                    u && (c = "%40" + c);
                    for (var u = !0, f = arrayFrom(c), h = 0; h < f.length; h++) {
                        var g = f[h];
                        ":" != g || d ? (g = percentEncode(g, userinfoPercentEncodeSet),
                        d ? e.password += g : e.username += g) : d = !0
                    }
                    c = ""
                } else if (a == EOF || "/" == a || "?" == a || "#" == a || "\\" == a && isSpecial(e)) {
                    if (u && "" == c)
                        return INVALID_AUTHORITY;
                    l -= arrayFrom(c).length + 1,
                    c = "",
                    s = HOST
                } else
                    c += a;
                break;
            case HOST:
            case HOSTNAME:
                if (r && "file" == e.scheme) {
                    s = FILE_HOST;
                    continue
                }
                if (":" != a || p) {
                    if (a == EOF || "/" == a || "?" == a || "#" == a || "\\" == a && isSpecial(e)) {
                        if (isSpecial(e) && "" == c)
                            return INVALID_HOST;
                        if (r && "" == c && (includesCredentials(e) || null !== e.port))
                            return;
                        if (i = parseHost(e, c))
                            return i;
                        if (c = "",
                        s = PATH_START,
                        r)
                            return;
                        continue
                    }
                    "[" == a ? p = !0 : "]" == a && (p = !1),
                    c += a
                } else {
                    if ("" == c)
                        return INVALID_HOST;
                    if (i = parseHost(e, c))
                        return i;
                    if (c = "",
                    s = PORT,
                    r == HOSTNAME)
                        return
                }
                break;
            case PORT:
                if (!DIGIT.test(a)) {
                    if (a == EOF || "/" == a || "?" == a || "#" == a || "\\" == a && isSpecial(e) || r) {
                        if ("" != c) {
                            var m = parseInt(c, 10);
                            if (65535 < m)
                                return INVALID_PORT;
                            e.port = isSpecial(e) && m === specialSchemes[e.scheme] ? null : m,
                            c = ""
                        }
                        if (r)
                            return;
                        s = PATH_START;
                        continue
                    }
                    return INVALID_PORT
                }
                c += a;
                break;
            case FILE:
                if (e.scheme = "file",
                "/" == a || "\\" == a)
                    s = FILE_SLASH;
                else {
                    if (!n || "file" != n.scheme) {
                        s = PATH;
                        continue
                    }
                    if (a == EOF)
                        e.host = n.host,
                        e.path = n.path.slice(),
                        e.query = n.query;
                    else if ("?" == a)
                        e.host = n.host,
                        e.path = n.path.slice(),
                        e.query = "",
                        s = QUERY;
                    else {
                        if ("#" != a) {
                            startsWithWindowsDriveLetter(o.slice(l).join("")) || (e.host = n.host,
                            e.path = n.path.slice(),
                            shortenURLsPath(e)),
                            s = PATH;
                            continue
                        }
                        e.host = n.host,
                        e.path = n.path.slice(),
                        e.query = n.query,
                        e.fragment = "",
                        s = FRAGMENT
                    }
                }
                break;
            case FILE_SLASH:
                if ("/" == a || "\\" == a) {
                    s = FILE_HOST;
                    break
                }
                n && "file" == n.scheme && !startsWithWindowsDriveLetter(o.slice(l).join("")) && (isWindowsDriveLetter(n.path[0], !0) ? e.path.push(n.path[0]) : e.host = n.host),
                s = PATH;
                continue;
            case FILE_HOST:
                if (a == EOF || "/" == a || "\\" == a || "?" == a || "#" == a) {
                    if (!r && isWindowsDriveLetter(c))
                        s = PATH;
                    else if ("" == c) {
                        if (e.host = "",
                        r)
                            return;
                        s = PATH_START
                    } else {
                        if (i = parseHost(e, c))
                            return i;
                        if ("localhost" == e.host && (e.host = ""),
                        r)
                            return;
                        c = "",
                        s = PATH_START
                    }
                    continue
                }
                c += a;
                break;
            case PATH_START:
                if (isSpecial(e)) {
                    if (s = PATH,
                    "/" != a && "\\" != a)
                        continue
                } else if (r || "?" != a)
                    if (r || "#" != a) {
                        if (a != EOF && (s = PATH,
                        "/" != a))
                            continue
                    } else
                        e.fragment = "",
                        s = FRAGMENT;
                else
                    e.query = "",
                    s = QUERY;
                break;
            case PATH:
                if (a == EOF || "/" == a || "\\" == a && isSpecial(e) || !r && ("?" == a || "#" == a)) {
                    if (isDoubleDot(c) ? (shortenURLsPath(e),
                    "/" == a || "\\" == a && isSpecial(e) || e.path.push("")) : isSingleDot(c) ? "/" == a || "\\" == a && isSpecial(e) || e.path.push("") : ("file" == e.scheme && !e.path.length && isWindowsDriveLetter(c) && (e.host && (e.host = ""),
                    c = c.charAt(0) + ":"),
                    e.path.push(c)),
                    c = "",
                    "file" == e.scheme && (a == EOF || "?" == a || "#" == a))
                        for (; 1 < e.path.length && "" === e.path[0]; )
                            e.path.shift();
                    "?" == a ? (e.query = "",
                    s = QUERY) : "#" == a && (e.fragment = "",
                    s = FRAGMENT)
                } else
                    c += percentEncode(a, pathPercentEncodeSet);
                break;
            case CANNOT_BE_A_BASE_URL_PATH:
                "?" == a ? (e.query = "",
                s = QUERY) : "#" == a ? (e.fragment = "",
                s = FRAGMENT) : a != EOF && (e.path[0] += percentEncode(a, C0ControlPercentEncodeSet));
                break;
            case QUERY:
                r || "#" != a ? a != EOF && ("'" == a && isSpecial(e) ? e.query += "%27" : e.query += "#" == a ? "%23" : percentEncode(a, C0ControlPercentEncodeSet)) : (e.fragment = "",
                s = FRAGMENT);
                break;
            case FRAGMENT:
                a != EOF && (e.fragment += percentEncode(a, fragmentPercentEncodeSet))
            }
            l++
        }
    }, URLConstructor = function(e) {
        var t, r, n = anInstance(this, URLConstructor, "URL"), o = 1 < arguments.length ? arguments[1] : void 0, e = $toString(e), a = setInternalState(n, {
            type: "URL"
        });
        if (void 0 !== o)
            if (o instanceof URLConstructor)
                t = getInternalURLState(o);
            else if (r = parseURL(t = {}, $toString(o)))
                throw TypeError(r);
        if (r = parseURL(a, e, null, t))
            throw TypeError(r);
        var i = a.searchParams = new URLSearchParams$1
          , o = getInternalSearchParamsState(i);
        o.updateSearchParams(a.query),
        o.updateURL = function() {
            a.query = String(i) || null
        }
        ,
        DESCRIPTORS || (n.href = serializeURL.call(n),
        n.origin = getOrigin.call(n),
        n.protocol = getProtocol.call(n),
        n.username = getUsername.call(n),
        n.password = getPassword.call(n),
        n.host = getHost.call(n),
        n.hostname = getHostname.call(n),
        n.port = getPort.call(n),
        n.pathname = getPathname.call(n),
        n.search = getSearch.call(n),
        n.searchParams = getSearchParams.call(n),
        n.hash = getHash.call(n))
    }, URLPrototype = URLConstructor.prototype, serializeURL = function() {
        var e = getInternalURLState(this)
          , t = e.scheme
          , r = e.username
          , n = e.password
          , o = e.host
          , a = e.port
          , i = e.path
          , s = e.query
          , l = e.fragment
          , c = t + ":";
        return null !== o ? (c += "//",
        includesCredentials(e) && (c += r + (n ? ":" + n : "") + "@"),
        c += serializeHost(o),
        null !== a && (c += ":" + a)) : "file" == t && (c += "//"),
        c += e.cannotBeABaseURL ? i[0] : i.length ? "/" + i.join("/") : "",
        null !== s && (c += "?" + s),
        null !== l && (c += "#" + l),
        c
    }, getOrigin = function() {
        var e = getInternalURLState(this)
          , t = e.scheme
          , r = e.port;
        if ("blob" == t)
            try {
                return new URLConstructor(t.path[0]).origin
            } catch (e) {
                return "null"
            }
        return "file" != t && isSpecial(e) ? t + "://" + serializeHost(e.host) + (null !== r ? ":" + r : "") : "null"
    }, getProtocol = function() {
        return getInternalURLState(this).scheme + ":"
    }, getUsername = function() {
        return getInternalURLState(this).username
    }, getPassword = function() {
        return getInternalURLState(this).password
    }, getHost = function() {
        var e = getInternalURLState(this)
          , t = e.host
          , e = e.port;
        return null === t ? "" : null === e ? serializeHost(t) : serializeHost(t) + ":" + e
    }, getHostname = function() {
        var e = getInternalURLState(this).host;
        return null === e ? "" : serializeHost(e)
    }, getPort = function() {
        var e = getInternalURLState(this).port;
        return null === e ? "" : String(e)
    }, getPathname = function() {
        var e = getInternalURLState(this)
          , t = e.path;
        return e.cannotBeABaseURL ? t[0] : t.length ? "/" + t.join("/") : ""
    }, getSearch = function() {
        var e = getInternalURLState(this).query;
        return e ? "?" + e : ""
    }, getSearchParams = function() {
        return getInternalURLState(this).searchParams
    }, getHash = function() {
        var e = getInternalURLState(this).fragment;
        return e ? "#" + e : ""
    }, accessorDescriptor = function(e, t) {
        return {
            get: e,
            set: t,
            configurable: !0,
            enumerable: !0
        }
    }, nativeCreateObjectURL, nativeRevokeObjectURL, path = (DESCRIPTORS && defineProperties(URLPrototype, {
        href: accessorDescriptor(serializeURL, function(e) {
            var t = getInternalURLState(this)
              , e = $toString(e)
              , e = parseURL(t, e);
            if (e)
                throw TypeError(e);
            getInternalSearchParamsState(t.searchParams).updateSearchParams(t.query)
        }),
        origin: accessorDescriptor(getOrigin),
        protocol: accessorDescriptor(getProtocol, function(e) {
            var t = getInternalURLState(this);
            parseURL(t, $toString(e) + ":", SCHEME_START)
        }),
        username: accessorDescriptor(getUsername, function(e) {
            var t = getInternalURLState(this)
              , r = arrayFrom($toString(e));
            if (!cannotHaveUsernamePasswordPort(t)) {
                t.username = "";
                for (var n = 0; n < r.length; n++)
                    t.username += percentEncode(r[n], userinfoPercentEncodeSet)
            }
        }),
        password: accessorDescriptor(getPassword, function(e) {
            var t = getInternalURLState(this)
              , r = arrayFrom($toString(e));
            if (!cannotHaveUsernamePasswordPort(t)) {
                t.password = "";
                for (var n = 0; n < r.length; n++)
                    t.password += percentEncode(r[n], userinfoPercentEncodeSet)
            }
        }),
        host: accessorDescriptor(getHost, function(e) {
            var t = getInternalURLState(this);
            t.cannotBeABaseURL || parseURL(t, $toString(e), HOST)
        }),
        hostname: accessorDescriptor(getHostname, function(e) {
            var t = getInternalURLState(this);
            t.cannotBeABaseURL || parseURL(t, $toString(e), HOSTNAME)
        }),
        port: accessorDescriptor(getPort, function(e) {
            var t = getInternalURLState(this);
            cannotHaveUsernamePasswordPort(t) || ("" == (e = $toString(e)) ? t.port = null : parseURL(t, e, PORT))
        }),
        pathname: accessorDescriptor(getPathname, function(e) {
            var t = getInternalURLState(this);
            t.cannotBeABaseURL || (t.path = [],
            parseURL(t, $toString(e), PATH_START))
        }),
        search: accessorDescriptor(getSearch, function(e) {
            var t = getInternalURLState(this);
            "" == (e = $toString(e)) ? t.query = null : ("?" == e.charAt(0) && (e = e.slice(1)),
            t.query = "",
            parseURL(t, e, QUERY)),
            getInternalSearchParamsState(t.searchParams).updateSearchParams(t.query)
        }),
        searchParams: accessorDescriptor(getSearchParams),
        hash: accessorDescriptor(getHash, function(e) {
            var t = getInternalURLState(this);
            "" == (e = $toString(e)) ? t.fragment = null : ("#" == e.charAt(0) && (e = e.slice(1)),
            t.fragment = "",
            parseURL(t, e, FRAGMENT))
        })
    }),
    redefine(URLPrototype, "toJSON", function() {
        return serializeURL.call(this)
    }, {
        enumerable: !0
    }),
    redefine(URLPrototype, "toString", function() {
        return serializeURL.call(this)
    }, {
        enumerable: !0
    }),
    NativeURL && (nativeCreateObjectURL = NativeURL.createObjectURL,
    nativeRevokeObjectURL = NativeURL.revokeObjectURL,
    nativeCreateObjectURL && redefine(URLConstructor, "createObjectURL", function(e) {
        return nativeCreateObjectURL.apply(NativeURL, arguments)
    }),
    nativeRevokeObjectURL && redefine(URLConstructor, "revokeObjectURL", function(e) {
        return nativeRevokeObjectURL.apply(NativeURL, arguments)
    })),
    setToStringTag(URLConstructor, "URL"),
    $({
        global: !0,
        forced: !USE_NATIVE_URL,
        sham: !DESCRIPTORS
    }, {
        URL: URLConstructor
    }),
    path$m), url$2 = path.URL, parent = url$2, url$1 = parent, url = url$1, WORKER_STATUS, DVWorkerManager = (!function(e) {
        e[e.initing = 0] = "initing",
        e[e.ready = 1] = "ready",
        e[e.failed = 2] = "failed"
    }(WORKER_STATUS = WORKER_STATUS || {}),
    function() {
        function t() {
            _classCallCheck(this, t),
            this.status = WORKER_STATUS.initing,
            this.msgId = 1,
            this.callbackMapper = new map;
            try {
                if (!Blob || !url || !Worker)
                    throw "";
                var e = new Blob(["const util = {\nasync compress(data) {\n\nconst compressionStream = new CompressionStream('gzip');\nconst readableStream = new ReadableStream({\nstart(controller) {\ncontroller.enqueue(new TextEncoder().encode(data));  \ncontroller.close();  \n}\n});\n\nconst compressedStream = readableStream.pipeThrough(compressionStream);\nconst reader = compressedStream.getReader();\n\nconst chunks = [];  \nlet totalSize = 0;\n\n\n\nwhile (true) {\nconst { done, value } = await reader.read();\nif (done) break;\nchunks.push(value);\ntotalSize += value.length;\n}\n\n\nconst concatenatedArray = new Uint8Array(totalSize);\nlet offset = 0;\nfor (let chunk of chunks) {\nconcatenatedArray.set(chunk, offset);\noffset += chunk.length;\n}\n\nlet binaryString = '';\nconcatenatedArray.forEach((byte) => {\nbinaryString += String.fromCharCode(byte);\n});\n\nreturn binaryString;\n},\n\nsimpleEncrypt(strOirgin) {\nif (typeof strOirgin === 'string' && strOirgin.length > 0) {\ntry {\nconst encodedURIComponent = encodeURIComponent(strOirgin);\nconst utf8Bytes = [];\nfor (let i = 0; i < encodedURIComponent.length; i++) {\nif (encodedURIComponent[i] === '%') {\nutf8Bytes.push(parseInt(encodedURIComponent.substring(i + 1, i + 3), 16));\ni += 2; \n} else {\nutf8Bytes.push(encodedURIComponent.charCodeAt(i));\n}\n}\nconst secret = [68, 65, 84, 65, 86, 73, 83, 79, 82];\nconst xorResult = utf8Bytes.map((byte, index) => byte ^ secret[index % secret.length]);\n\nlet binaryString = '';\nxorResult.forEach((byte) => {\nbinaryString += String.fromCharCode(byte);\n});\nreturn binaryString;\n} catch (error) {\nreturn '';\n}\n} else {\nreturn '';\n}\n},\n\nurlSafeBase64Convert(base64String) {\nreturn base64String.split('+').join('-').split('/').join('_').replace(/=+$/, '');\n}\n};\n\nfunction sendMsg(msg) {\npostMessage(msg);\n}\n\nself.onmessage = async message => {\nif (!message || !message.data || typeof message.data != 'object') {\nreturn;\n}\nconst msg = message.data;\nif (!msg._msgId_) {\nreturn;\n}\nswitch (msg.type) {\ncase 'alive': {\nsendMsg({\n_msgId_: msg._msgId_,\nstatus: 'alive'\n});\nbreak;\n}\ncase 'handle_replay_data': {\nlet bSuccess = false;\nlet resultString = '';\ntry {\nconst aryReplay = msg.aryReplay;\nif (!Array.isArray(aryReplay)) {\nthrow 'msg data is not replay array';\n}\nlet resultEvents = [];\nfor (let i = 0; i < aryReplay.length; i++) {\nif (!Array.isArray(aryReplay[i])) {\nthrow 'array element is not replay array';\n}\nresultEvents = resultEvents.concat(aryReplay[i]);\n}\nif (0 == resultEvents.length) {\nthrow 'no replay data';\n}\nconst resultEventString = JSON.stringify(resultEvents);\nconst compressedEventString = await util.compress(resultEventString);\nconst base64CompressedEventString = util.urlSafeBase64Convert(btoa(compressedEventString));\n\nconst obj = {\ndvid: msg.dvid,\ntoken: msg.token,\nlongsession: msg.sessiontoken,\naccess_key: msg.ack,\ndom_record_data: base64CompressedEventString\n};\n\nconst objString = JSON.stringify(obj);\nconst encryptedObjData = util.simpleEncrypt(objString);\nif (!encryptedObjData) {\nthrow 'encrypt failed';\n}\n\nresultString = encryptedObjData;\nbSuccess = true;\n} catch (error) {\nbSuccess = false;\nresultString = '';\n}\nsendMsg({\n_msgId_: msg._msgId_,\nsuccess: bSuccess,\nresult: resultString\n});\nbreak;\n}\ndefault:\nbreak;\n}\n};\n\nsendMsg({type: 'created'});"]);
                this.url = url.createObjectURL(e),
                this.worker = new Worker(this.url),
                this.worker.onmessage = this.onWorkerMessage.bind(this)
            } catch (e) {
                this.status = WORKER_STATUS.failed
            }
        }
        var a, r;
        return _createClass(t, [{
            key: "onWorkerMessage",
            value: (r = _asyncToGenerator(regenerator.mark(function e(t) {
                var r, n;
                return regenerator.wrap(function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            if (t && t.data && "object" == _typeof(t.data)) {
                                e.next = 2;
                                break
                            }
                            return e.abrupt("return");
                        case 2:
                            if ("created" == (r = t.data).type)
                                return this.status = WORKER_STATUS.ready,
                                this.keepAlive(),
                                e.abrupt("return");
                            e.next = 7;
                            break;
                        case 7:
                            if (r._msgId_) {
                                e.next = 9;
                                break
                            }
                            return e.abrupt("return");
                        case 9:
                            n = this.callbackMapper.get(r._msgId_),
                            this.callbackMapper.delete(r._msgId_),
                            n && (delete r._msgId_,
                            n(r));
                        case 12:
                        case "end":
                            return e.stop()
                        }
                }, e, this)
            })),
            function(e) {
                return r.apply(this, arguments)
            }
            )
        }, {
            key: "keepAlive",
            value: function() {
                var t = this;
                setTimeout$1(_asyncToGenerator(regenerator.mark(function e() {
                    return regenerator.wrap(function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.prev = 0,
                                e.next = 3,
                                t.sendMessage({
                                    type: "alive"
                                });
                            case 3:
                                t.keepAlive(),
                                e.next = 9;
                                break;
                            case 6:
                                e.prev = 6,
                                e.t0 = e.catch(0),
                                "timeout" == e.t0 ? t.restart() : t.keepAlive();
                            case 9:
                            case "end":
                                return e.stop()
                            }
                    }, e, null, [[0, 6]])
                })), 1e4)
            }
        }, {
            key: "restart",
            value: function() {
                this.status = WORKER_STATUS.initing;
                try {
                    this.worker.terminate(),
                    this.worker = new Worker(this.url),
                    this.worker.onmessage = this.onWorkerMessage.bind(this)
                } catch (e) {
                    this.status = WORKER_STATUS.failed
                }
            }
        }, {
            key: "sendMessage",
            value: function(n) {
                var o = this;
                return new promise(function(e, t) {
                    o.status == WORKER_STATUS.failed && t(ERROR_MSG.worker_failed_to_start);
                    var r = o.msgId++;
                    n._msgId_ = r,
                    o.callbackMapper.set(r, e),
                    o.worker.postMessage(n),
                    setTimeout$1(function() {
                        o.callbackMapper.get(r) && (o.callbackMapper.delete(r),
                        t("timeout"))
                    }, globalValues.WORKER_MESSAGE_TIMEOUT)
                }
                )
            }
        }, {
            key: "handleReplayData",
            value: (a = _asyncToGenerator(regenerator.mark(function e(t, r, n, o, a) {
                var i;
                return regenerator.wrap(function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return e.prev = 0,
                            e.next = 3,
                            this.sendMessage({
                                type: "handle_replay_data",
                                aryReplay: t,
                                dvid: r,
                                token: n,
                                sessiontoken: o,
                                ack: a
                            });
                        case 3:
                            return i = e.sent,
                            e.abrupt("return", i.success ? i.result : "");
                        case 7:
                            return e.prev = 7,
                            e.t0 = e.catch(0),
                            e.abrupt("return", "");
                        case 10:
                        case "end":
                            return e.stop()
                        }
                }, e, this, [[0, 7]])
            })),
            function(e, t, r, n, o) {
                return a.apply(this, arguments)
            }
            )
        }]),
        t
    }()), Zhengdao = function() {
        function e() {
            _classCallCheck(this, e),
            globalValues.OPEN_TIME = performance && performance.timeOrigin && "number" == typeof performance.timeOrigin ? Math.round(performance.timeOrigin) : tool.now(),
            store.worker = new DVWorkerManager,
            store.dvdb = new DVDatabase,
            store.scriptManager = new ScriptManager,
            store.mouseMoveDb = new MouseMovementDb,
            store.replayManager = new ReplayManager,
            store.eventCenter = new EventCenter,
            store.scriptVersion = {
                dv: {},
                feature: {},
                event: {}
            },
            this.collection = new Collection,
            this.getBasicInfo(),
            this.uploadReplay()
        }
        var t, r;
        return _createClass(e, [{
            key: "resetPtt",
            value: function() {
                for (var e = this.ptt; this.ptt = tool.getRndInteger(0, Math.pow(10, 8)),
                this.ptt == e; )
                    ;
                Raphael.getInstance().setPttToIframe(this.ptt),
                this.basicInfo && this.basicInfo.updatePtt(this.ptt),
                store.eventCenter.postUserEvent(new ZdUserInfo(this.ptt,this.userId))
            }
        }, {
            key: "resetUserId",
            value: function(e) {
                if ("string" != typeof e)
                    return console.error("Argument type invalid!"),
                    msg.PARA_ERR;
                var t = this.userId;
                return this.userId = e,
                this.basicInfo && this.basicInfo.updateUserId(this.userId),
                t != this.userId && store.eventCenter.postUserEvent(new ZdUserInfo(this.ptt,this.userId)),
                msg.SUCCESS
            }
        }, {
            key: "postManualEvent",
            value: function(e, t) {
                if ("string" != typeof e || void 0 !== t && "string" != typeof t)
                    return console.error("Argument type invalid!"),
                    globalVariable.strTokenReturned || "";
                var r = globalVariable.strTokenReturned || "";
                return store.eventCenter.postManualEvent(new ZdManualEvent(e,t,window.location.href,r))
            }
        }, {
            key: "getBasicInfo",
            value: (r = _asyncToGenerator(regenerator.mark(function e() {
                var t, r, n, o, a;
                return regenerator.wrap(function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return t = this,
                            r = Raphael.getInstance(),
                            store.network.startConnect(),
                            e.next = 5,
                            r.getInfoForZhengdao();
                        case 5:
                            if (n = e.sent,
                            logger.highlight("basic info come from raphael", n.ptt, n.info),
                            t.ptt = n.ptt,
                            e.prev = 8,
                            !(o = store.dvdb.queryScripts(function(e) {
                                var t;
                                return includes(t = ["dv", "event", "library", "feature"]).call(t, e.script_type)
                            })) || o.length <= 0)
                                throw "";
                            e.next = 12;
                            break;
                        case 12:
                            ["dv", "feature", "event", "library"].forEach(function(t) {
                                filter(o).call(o, function(e) {
                                    return e.script_type == t
                                }).forEach(function(e) {
                                    return store.scriptVersion[t][e.script_name] = e.script_version
                                })
                            }),
                            e.next = 18;
                            break;
                        case 15:
                            e.prev = 15,
                            e.t0 = e.catch(8),
                            logger.log("there's no dv/event/feature script:", e.t0);
                        case 18:
                            (a = store.scriptManager.getCustomScriptVersion()) && "object" == _typeof(a) && ["dv", "event"].forEach(function(t) {
                                a[t] && "object" == _typeof(a[t]) && keys(a[t]).forEach(function(e) {
                                    void 0 === store.scriptVersion[t][e] && (store.scriptVersion[t][e] = a[t][e])
                                })
                            }),
                            t.basicInfo = new BasicInfo(n.info,t.ptt,t.userId),
                            store.eventCenter.addBasicInfo(t.basicInfo);
                        case 22:
                        case "end":
                            return e.stop()
                        }
                }, e, this, [[8, 15]])
            })),
            function() {
                return r.apply(this, arguments)
            }
            )
        }, {
            key: "uploadReplay",
            value: (t = _asyncToGenerator(regenerator.mark(function e() {
                var t, r;
                return regenerator.wrap(function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            if (t = tool.getFromLocalStorage(LOCAL_STORAGE_ITEM.DVZDReplayData)) {
                                e.next = 3;
                                break
                            }
                            return e.abrupt("return");
                        case 3:
                            if (r = atob(t)) {
                                e.next = 6;
                                break
                            }
                            return e.abrupt("return");
                        case 6:
                            return e.prev = 6,
                            e.next = 9,
                            store$1.dataPoster.sendReplayData(r, zdApi.POST_REPLAY.method, "https://" + globalValues.ZD_REPLAY_ENV + zdApi.POST_REPLAY.url);
                        case 9:
                            tool.removeFromLocalStorage(LOCAL_STORAGE_ITEM.DVZDReplayData),
                            e.next = 14;
                            break;
                        case 12:
                            e.prev = 12,
                            e.t0 = e.catch(6);
                        case 14:
                        case "end":
                            return e.stop()
                        }
                }, e, null, [[6, 12]])
            })),
            function() {
                return t.apply(this, arguments)
            }
            )
        }]),
        e
    }();
    !function() {
        var e, t;
        window.raphael ? console.error("Repeated integration raphael sdk!") : (e = Raphael.getInstance(),
        t = {
            initToken: e.initToken.bind(e),
            initDeviceToken: e.initDeviceToken.bind(e),
            setAccessKey: function() {
                return msg.SUCCESS
            },
            getAccessKey: e.getAccessKey.bind(e),
            setEnv: function() {
                return msg.SUCCESS
            },
            getEnv: e.getEnv.bind(e),
            setZdEnv: function() {
                return msg.SUCCESS
            },
            getZdEnv: function() {
                return msg.EMPTY
            },
            getDVToken: getDVToken,
            getNativeToken: function(e) {
                if (!e || "function" != typeof e)
                    return msg.PARA_ERR;
                e(msg.NOT_SUPPORT)
            }
        },
        window.raphael = function() {
            return t
        }
        )
    }(),
    !function() {
        if (window.dvZhengdao)
            return window.dvZhengdao;
        try {
            var e = new Zhengdao;
            window.dvZhengdao = {
                postManualEvent: e.postManualEvent.bind(e),
                riskCheckpoint: e.postManualEvent.bind(e),
                resetPtt: e.resetPtt.bind(e),
                storeUserId: e.resetUserId.bind(e)
            }
        } catch (e) {
            console.error("init zhengdao error", e)
        }
    }()
}();



