"use strict";
(self.webpackChunkapp = self.webpackChunkapp || []).push([[4035, 1044], {
    55060: (de,K,a)=>{
        a.d(K, {
            k: ()=>L
        });
        var l = a(36362)
          , p = a(87514)
          , h = a(37226)
          , U = a(3184);
        let L = (()=>{
            class N {
            }
            return N.\u0275fac = function(v) {
                return new (v || N)
            }
            ,
            N.\u0275mod = U.\u0275\u0275defineNgModule({
                type: N
            }),
            N.\u0275inj = U.\u0275\u0275defineInjector({
                imports: [[l.ez, p.aw.forChild(), h.X8]]
            }),
            N
        }
        )()
    }
    ,
    72919: (de,K,a)=>{
        a.d(K, {
            o: ()=>F
        });
        var l = a(30406)
          , p = a(37226)
          , h = a(3184)
          , U = a(50318)
          , L = a(72613)
          , N = a(48595)
          , C = a(19720)
          , v = a(93581);
        let F = (()=>{
            class y extends p.N0 {
                constructor(w, _, I, T, g, A, R) {
                    super(w, _, T, I, A),
                    this.nativeManagerService = g,
                    this.inAppBrowserService = R,
                    this.canShare = !1,
                    this.dismissDialog = !1,
                    this.useHref = !1
                }
                ngOnInit() {
                    super.ngOnInit(),
                    (!this.platformInfoService.isNative || this.platformInfoService.isMobileBrowser) && (this.useHref = !0)
                }
                openURL(w) {
                    var _;
                    !super.preNavigationCheck(w) || this.browserUrl && !this.useHref && (this.nativeManagerService.setCurrentOpenedLink(null !== (_ = this.id) && void 0 !== _ ? _ : ""),
                    this.inAppBrowserService.openURL({
                        url: this.browserUrl,
                        canShare: this.canShare,
                        dismissDialog: this.dismissDialog,
                        title: this.browserTitle
                    }))
                }
            }
            return y.\u0275fac = function(w) {
                return new (w || y)(h.\u0275\u0275directiveInject(U.DomSanitizer),h.\u0275\u0275directiveInject(h.ChangeDetectorRef),h.\u0275\u0275directiveInject(l.U),h.\u0275\u0275directiveInject(L.t),h.\u0275\u0275directiveInject(N._t),h.\u0275\u0275directiveInject(C.F0),h.\u0275\u0275directiveInject(v.q))
            }
            ,
            y.\u0275cmp = h.\u0275\u0275defineComponent({
                type: y,
                selectors: [["app-multi-platform-link"]],
                inputs: {
                    linkText: "linkText",
                    canShare: "canShare",
                    dismissDialog: "dismissDialog",
                    browserTitle: "browserTitle",
                    browserUrl: "browserUrl"
                },
                features: [h.\u0275\u0275InheritDefinitionFeature],
                decls: 2,
                vars: 15,
                consts: [[3, "type", "target", "icon", "iconSize", "iconColor", "iconLocation", "size", "id", "label", "href", "title", "ariaLabel", "inline", "useMaxHeight", "click", "linkCallBack"], [3, "innerHTML"]],
                template: function(w, _) {
                    1 & w && (h.\u0275\u0275elementStart(0, "fdc-link", 0),
                    h.\u0275\u0275listener("click", function(T) {
                        return _.openURL(T)
                    })("linkCallBack", function(T) {
                        return _.onClick(T)
                    }),
                    h.\u0275\u0275element(1, "span", 1),
                    h.\u0275\u0275elementEnd()),
                    2 & w && (h.\u0275\u0275property("type", _.type)("target", _.target)("icon", _.icon)("iconSize", _.iconSize)("iconColor", _.iconColor)("iconLocation", _.iconLocation)("size", _.size)("id", _.id)("label", _.label)("href", _.useHref ? _.browserUrl : "")("title", _.title)("ariaLabel", _.ariaLabel)("inline", !0)("useMaxHeight", _.useMaxHeight),
                    h.\u0275\u0275advance(1),
                    h.\u0275\u0275property("innerHTML", _.linkText, h.\u0275\u0275sanitizeHtml))
                },
                directives: [p.N0],
                encapsulation: 2,
                changeDetection: 0
            }),
            y
        }
        )()
    }
    ,
    8723: (de,K,a)=>{
        a.d(K, {
            Pl: ()=>R,
            qL: ()=>_,
            tw: ()=>I,
            uD: ()=>g,
            uq: ()=>w
        });
        var l = a(35585)
          , p = a(65508)
          , h = a(95158)
          , U = a(58881);
        const L = (0,
        l.ZF)(p.lA)
          , c = (0,
        l.P1)(L, P=>P.$api)
          , w = (0,
        l.P1)(c, P=>P && P[h.wF])
          , _ = (0,
        l.P1)(c, P=>P && P[h.Tn])
          , I = (0,
        l.P1)(c, P=>P && P[h.k0])
          , g = ((0,
        l.P1)(L, ({ccToken: P})=>P),
        (0,
        l.P1)(c, P=>P && P[h.zQ]))
          , A = (0,
        l.ZF)(U.v)
          , R = (0,
        l.P1)(A, P=>P)
    }
    ,
    84035: (de,K,a)=>{
        a.r(K),
        a.d(K, {
            LoginPageModule: ()=>kr
        });
        var l = a(36362)
          , p = a(90587)
          , h = a(87514)
          , U = a(45188)
          , L = a(19720)
          , N = a(29399)
          , C = a(50635)
          , v = a(59295)
          , F = a(60116)
          , y = a(19337)
          , c = a(61341)
          , w = a(25232)
          , _ = a(50354)
          , I = a(84211)
          , T = a(88812)
          , g = a(36922)
          , A = a(72747)
          , R = a(26368)
          , P = a(22748)
          , re = a(58125)
          , b = a(24550)
          , k = a(85746)
          , m = a(30055)
          , S = a(85288)
          , f = a(86145)
          , ce = a(43743)
          , e = a(3184)
          , We = a(70465)
          , M = a(35585)
          , B = a(78678)
          , ft = a(72716)
          , $e = a(34706)
          , vt = a(1072)
          , H = a(10745)
          , x = a(53158)
          , Et = a(28784);
        let _t = (()=>{
            class n {
                constructor(t, i) {
                    this.httpClient = t,
                    this.document = i,
                    this.missingVersion = "local"
                }
                isAppVersionStale() {
                    const t = this.extractVersionFromMeta(this.document.head.querySelectorAll("meta"));
                    return console.log("App build version:", t),
                    t && t.build !== this.missingVersion ? this.httpClient.get(`${vt.V.baseURL}lastbuild.txt`, {
                        responseType: "text"
                    }).pipe((0,
                    v.q)(1), (0,
                    C.U)(i=>this.extractVersionFromLastBuild(i)), (0,
                    y.b)(i=>console.log("Last build version:", i)), (0,
                    C.U)(i=>!!i && !this.areVersionsSame(t, i)), (0,
                    x.K)(()=>(0,
                    H.of)(!1))) : (0,
                    H.of)(!1)
                }
                areVersionsSame(t, i) {
                    return t.build === i.build && t.release === i.release
                }
                extractVersionFromMeta(t) {
                    let i, r;
                    if (t.forEach(s=>{
                        "version" === s.name ? i = s.content : "build" === s.name && (r = s.content)
                    }
                    ),
                    i && r)
                        return {
                            build: r,
                            release: i
                        }
                }
                extractVersionFromLastBuild(t) {
                    const i = this.buildVersionRegex(t)
                      , r = t.split("\n").find(s=>i.test(s));
                    if (r) {
                        const s = r.match(i);
                        return !s || s.length < 3 ? void 0 : {
                            build: s[2],
                            release: s[1]
                        }
                    }
                }
                buildVersionRegex(t) {
                    return -1 === t.indexOf("CDB_") ? /olb-ui-(\d+.\d+\.\d+).*-(\d+).war/ : /CDB_62623_(\d+.\d+.\d+)_.*_([A-Za-z\d]+).war/
                }
            }
            return n.\u0275fac = function(t) {
                return new (t || n)(e.\u0275\u0275inject(Et.eN),e.\u0275\u0275inject(l.K0))
            }
            ,
            n.\u0275prov = e.\u0275\u0275defineInjectable({
                token: n,
                factory: n.\u0275fac,
                providedIn: "root"
            }),
            n
        }
        )();
        var ae = a(72613)
          , Qe = a(86352)
          , Ye = a(51323)
          , bt = a(9777)
          , Xe = a(39910)
          , St = a(93581)
          , $ = a(49378)
          , j = a(38299)
          , fe = a(37226)
          , ye = a(48606)
          , Ct = a(70679)
          , Tt = a(95570)
          , Je = a(63853)
          , Ze = a(10538)
          , G = a(32673)
          , X = a(20591)
          , Q = a(25474)
          , Pt = a(37400)
          , ee = a(38088)
          , Ae = a(57216)
          , yt = a(33346)
          , O = a(52021)
          , V = a(12065)
          , At = a(8617)
          , ve = a(97553)
          , Ee = a(27260)
          , oe = a(7612)
          , J = a(45536)
          , Le = a(89796)
          , Lt = a(4179)
          , qe = a(88550)
          , Re = a(30693)
          , et = a(10523)
          , tt = a(20775)
          , W = a(88194)
          , Rt = a(80599)
          , it = a(88691)
          , Mt = a(38917)
          , z = a(60559)
          , It = a(62596)
          , nt = a(61546)
          , Ot = a(10974);
        let pe = (()=>{
            class n {
                constructor(t, i, r, s) {
                    this.rsaService = t,
                    this.translationsService = i,
                    this.bosCommon = r,
                    this.httpClientService = s
                }
                getGateKeeperParams() {
                    return this.httpClientService.get("/banking/servlet/SigninRequestManager?action=Get").pipe((0,
                    C.U)(r=>r.body))
                }
                getPilotStatus(t) {
                    return this.bosCommon.makeBosRequest("PilotStatusRq", "/signin/getPilotStatus", {
                        cardNo: t
                    }).pipe((0,
                    C.U)(r=>this.handleHttpResponse(r)))
                }
                useUiLangForGateKeeperParams(t) {
                    var i;
                    if (null === (i = t.params) || void 0 === i ? void 0 : i.uiLang) {
                        const r = t.params.uiLang === B.lI.FRENCH ? z.Ie.FR : z.Ie.EN;
                        return Object.assign(Object.assign({}, t), {
                            params: Object.assign(Object.assign({}, t.params), {
                                lang: r
                            })
                        })
                    }
                    return t
                }
                submitToOLBSSOSignOn(t, i, r, s) {
                    const d = null == t ? void 0 : t.nativeElement;
                    if (!d)
                        throw new Error("Missing GateKeeper OLB Form");
                    d.action = encodeURI(s) + "/onlinebanking/cgi-bin/netbnx/NBmain/SSOSignOn",
                    d.innerHTML = "",
                    this.rsaService.getDeviceFingerprint().pipe((0,
                    v.q)(1)).subscribe(u=>{
                        this.addHiddenInputToForm(d, "state", i),
                        this.addHiddenInputToForm(d, "TGT", r),
                        this.addHiddenInputToForm(d, "landed ", "yes"),
                        this.addHiddenInputToForm(d, "pm_fp", u),
                        this.addHiddenInputToForm(d, "product", this.setOLBProduct()),
                        this.setCDBSSOLanguage(),
                        d.submit()
                    }
                    )
                }
                removeCookieFromLegacyOLB(t) {
                    return this.httpClientService.get(`/onlinebanking/cdb/ExpressSignInKey?action=Remove&expSigninToken=${t}`)
                }
                addHiddenInputToForm(t, i, r) {
                    let s = document.createElement("input");
                    s.setAttribute("type", "hidden"),
                    s.setAttribute("name", i),
                    s.setAttribute("value", r),
                    t.appendChild(s)
                }
                handleHttpResponse(t) {
                    var i;
                    return (null === (i = null == t ? void 0 : t.GetPilotStatusRs) || void 0 === i ? void 0 : i.BodyRs) || {}
                }
                setOLBProduct() {
                    return "fr-CA" === this.translationsService.getCurrentLanguage() ? "6" : "5"
                }
                setCDBSSOLanguage() {
                    const t = this.translationsService.getCurrentLanguage();
                    sessionStorage.setItem("CDBSSOLanguage", t)
                }
            }
            return n.\u0275fac = function(t) {
                return new (t || n)(e.\u0275\u0275inject(It.YZ),e.\u0275\u0275inject(B.fA),e.\u0275\u0275inject(nt.nt),e.\u0275\u0275inject(Ot.Y))
            }
            ,
            n.\u0275prov = e.\u0275\u0275defineInjectable({
                token: n,
                factory: n.\u0275fac,
                providedIn: "root"
            }),
            n
        }
        )();
        var Nt = a(31241)
          , Bt = a(16368)
          , rt = a(60814)
          , wt = a(30303)
          , se = a(43523)
          , me = a(67160)
          , ue = a(26271)
          , at = a(94091)
          , Me = a(31707);
        const Ft = ["gatekeeperForm"]
          , xt = ["username"]
          , Dt = ["password"]
          , kt = ["submitButton"];
        function Ht(n, o) {
            if (1 & n && (e.\u0275\u0275elementStart(0, "div", 26),
            e.\u0275\u0275element(1, "fdc-icon", 27)(2, "h2", 28),
            e.\u0275\u0275elementEnd()),
            2 & n) {
                const t = e.\u0275\u0275nextContext(2);
                e.\u0275\u0275advance(2),
                e.\u0275\u0275property("innerHTML", t.title, e.\u0275\u0275sanitizeHtml)
            }
        }
        function Ut(n, o) {
            if (1 & n && e.\u0275\u0275element(0, "fdc-dropdown-item", 32),
            2 & n) {
                const t = o.$implicit;
                e.\u0275\u0275property("value", t.nickname)("label", t.nickname)
            }
        }
        function Gt(n, o) {
            if (1 & n) {
                const t = e.\u0275\u0275getCurrentView();
                e.\u0275\u0275elementStart(0, "div")(1, "fdc-link", 33),
                e.\u0275\u0275listener("click", function() {
                    return e.\u0275\u0275restoreView(t),
                    e.\u0275\u0275nextContext(3).setForgetCardConfirmation(!0)
                }),
                e.\u0275\u0275element(2, "span", 18),
                e.\u0275\u0275pipe(3, "translate"),
                e.\u0275\u0275elementEnd()()
            }
            if (2 & n) {
                const t = e.\u0275\u0275nextContext(3);
                e.\u0275\u0275advance(1),
                e.\u0275\u0275property("analytics", t.id + " remove card details link"),
                e.\u0275\u0275attribute("id", t.id + "-remove-card-link"),
                e.\u0275\u0275advance(1),
                e.\u0275\u0275property("innerHTML", e.\u0275\u0275pipeBind1(3, 3, "PAGE.LOGIN.REMOVE_CARD.TITLE"), e.\u0275\u0275sanitizeHtml)
            }
        }
        function Vt(n, o) {
            if (1 & n) {
                const t = e.\u0275\u0275getCurrentView();
                e.\u0275\u0275elementStart(0, "div"),
                e.\u0275\u0275element(1, "p", 34),
                e.\u0275\u0275pipe(2, "translate"),
                e.\u0275\u0275element(3, "p", 35),
                e.\u0275\u0275pipe(4, "translate"),
                e.\u0275\u0275elementStart(5, "div", 36)(6, "fdc-button", 37),
                e.\u0275\u0275listener("buttonClick", function() {
                    return e.\u0275\u0275restoreView(t),
                    e.\u0275\u0275nextContext(3).setForgetCardConfirmation(!1)
                }),
                e.\u0275\u0275element(7, "span", 18),
                e.\u0275\u0275pipe(8, "translate"),
                e.\u0275\u0275elementEnd(),
                e.\u0275\u0275elementStart(9, "fdc-button", 38),
                e.\u0275\u0275listener("buttonClick", function() {
                    return e.\u0275\u0275restoreView(t),
                    e.\u0275\u0275nextContext(3).onForgetCard()
                }),
                e.\u0275\u0275element(10, "span", 18),
                e.\u0275\u0275pipe(11, "translate"),
                e.\u0275\u0275elementEnd()(),
                e.\u0275\u0275element(12, "hr", 39),
                e.\u0275\u0275elementEnd()
            }
            if (2 & n) {
                const t = e.\u0275\u0275nextContext(3);
                e.\u0275\u0275advance(1),
                e.\u0275\u0275property("innerHTML", e.\u0275\u0275pipeBind1(2, 7, "PAGE.LOGIN.REMOVE_CARD.MESSAGE"), e.\u0275\u0275sanitizeHtml),
                e.\u0275\u0275advance(2),
                e.\u0275\u0275property("innerHTML", e.\u0275\u0275pipeBind1(4, 9, "PAGE.LOGIN.REMOVE_CARD.DESC"), e.\u0275\u0275sanitizeHtml),
                e.\u0275\u0275advance(3),
                e.\u0275\u0275property("analytics", t.id + " remember card button"),
                e.\u0275\u0275advance(1),
                e.\u0275\u0275property("innerHTML", e.\u0275\u0275pipeBind1(8, 11, "PAGE.LOGIN.NOT_FORGET_CARD_CTA"), e.\u0275\u0275sanitizeHtml),
                e.\u0275\u0275advance(2),
                e.\u0275\u0275property("analytics", t.id + " forget card button")("hasMargin", !1),
                e.\u0275\u0275advance(1),
                e.\u0275\u0275property("innerHTML", e.\u0275\u0275pipeBind1(11, 13, "PAGE.LOGIN.FORGET_CARD_CTA"), e.\u0275\u0275sanitizeHtml)
            }
        }
        function Kt(n, o) {
            if (1 & n) {
                const t = e.\u0275\u0275getCurrentView();
                e.\u0275\u0275elementStart(0, "div")(1, "fdc-dropdown", 29),
                e.\u0275\u0275listener("valueChange", function(r) {
                    return e.\u0275\u0275restoreView(t),
                    e.\u0275\u0275nextContext(2).onSavedCardsChange(r)
                }),
                e.\u0275\u0275pipe(2, "translate"),
                e.\u0275\u0275template(3, Ut, 1, 2, "fdc-dropdown-item", 30),
                e.\u0275\u0275pipe(4, "async"),
                e.\u0275\u0275element(5, "fdc-dropdown-item", 31),
                e.\u0275\u0275pipe(6, "translate"),
                e.\u0275\u0275elementEnd(),
                e.\u0275\u0275template(7, Gt, 4, 5, "div", 8),
                e.\u0275\u0275template(8, Vt, 13, 15, "div", 8),
                e.\u0275\u0275elementEnd()
            }
            if (2 & n) {
                const t = e.\u0275\u0275nextContext(2);
                e.\u0275\u0275advance(1),
                e.\u0275\u0275property("label", e.\u0275\u0275pipeBind1(2, 8, "PAGE.LOGIN.CHOOSE_CARD"))("analytics", t.id + " saved cards dropdown")("isDisabled", t.disabledMode),
                e.\u0275\u0275attribute("id", t.id + "-saved-cards-dropdown"),
                e.\u0275\u0275advance(2),
                e.\u0275\u0275property("ngForOf", e.\u0275\u0275pipeBind1(4, 10, t.savedCards$)),
                e.\u0275\u0275advance(2),
                e.\u0275\u0275property("label", e.\u0275\u0275pipeBind1(6, 12, "PAGE.LOGIN.REMEMBER_CARD_LABEL")),
                e.\u0275\u0275advance(2),
                e.\u0275\u0275property("ngIf", !t.showForgetSavedCardConfirmation && !t.isUseDifferentCardOption()),
                e.\u0275\u0275advance(1),
                e.\u0275\u0275property("ngIf", t.showForgetSavedCardConfirmation)
            }
        }
        function jt(n, o) {
            if (1 & n && (e.\u0275\u0275elementStart(0, "div"),
            e.\u0275\u0275pipe(1, "async"),
            e.\u0275\u0275pipe(2, "async"),
            e.\u0275\u0275element(3, "fdc-input", 40, 41),
            e.\u0275\u0275pipe(5, "translate"),
            e.\u0275\u0275pipe(6, "translate"),
            e.\u0275\u0275elementEnd()),
            2 & n) {
                const t = e.\u0275\u0275nextContext(2);
                e.\u0275\u0275classProp("mt-16p", e.\u0275\u0275pipeBind1(1, 9, t.hasSavedCards$) && t.isUseDifferentCardOption() && !t.isMobile2)("mt-8p", e.\u0275\u0275pipeBind1(2, 11, t.hasSavedCards$) && t.isUseDifferentCardOption() && t.isMobile2),
                e.\u0275\u0275advance(3),
                e.\u0275\u0275property("errorMessages", t.usernameErrors)("helperText", t.usernameInstructionText || e.\u0275\u0275pipeBind1(5, 13, "PAGE.LOGIN.USERNAME.HELPER"))("label", e.\u0275\u0275pipeBind1(6, 15, "PAGE.LOGIN.USERNAME.LABEL"))("analytics", "card number input")("disabled", t.disabledMode)
            }
        }
        function zt(n, o) {
            if (1 & n) {
                const t = e.\u0275\u0275getCurrentView();
                e.\u0275\u0275elementStart(0, "div", 16)(1, "fdc-checkbox-refresh", 42),
                e.\u0275\u0275text(2),
                e.\u0275\u0275pipe(3, "translate"),
                e.\u0275\u0275elementEnd(),
                e.\u0275\u0275elementStart(4, "fdc-popover", 43),
                e.\u0275\u0275listener("popoverOpened", function() {
                    return e.\u0275\u0275restoreView(t),
                    e.\u0275\u0275nextContext(2).trackInteraction("remember card info icon button")
                })("popoverClosed", function() {
                    return e.\u0275\u0275restoreView(t),
                    e.\u0275\u0275nextContext(2).trackInteraction("remember card info close button")
                }),
                e.\u0275\u0275pipe(5, "translate"),
                e.\u0275\u0275elementStart(6, "div", 44),
                e.\u0275\u0275element(7, "span", 18),
                e.\u0275\u0275pipe(8, "translate"),
                e.\u0275\u0275elementEnd()()()
            }
            if (2 & n) {
                const t = e.\u0275\u0275nextContext(2);
                e.\u0275\u0275classProp("remember-me-stacked", t.isZoom),
                e.\u0275\u0275advance(1),
                e.\u0275\u0275property("id", "yes")("analytics", t.id + " remember me checkbox")("disabled", t.disabledMode),
                e.\u0275\u0275advance(1),
                e.\u0275\u0275textInterpolate1(" ", e.\u0275\u0275pipeBind1(3, 9, "PAGE.LOGIN.REMEMBER_CHECK"), " "),
                e.\u0275\u0275advance(2),
                e.\u0275\u0275property("id", "remember-card-info")("buttonAriaLabel", e.\u0275\u0275pipeBind1(5, 11, "PAGE.LOGIN.REMEMBER_POPOVER.ARIA_LABEL")),
                e.\u0275\u0275advance(3),
                e.\u0275\u0275property("innerHTML", e.\u0275\u0275pipeBind1(8, 13, "PAGE.LOGIN.REMEMBER_POPOVER"), e.\u0275\u0275sanitizeHtml)
            }
        }
        function Wt(n, o) {
            if (1 & n && (e.\u0275\u0275elementStart(0, "div", 12),
            e.\u0275\u0275element(1, "fdc-input", 45),
            e.\u0275\u0275pipe(2, "translate"),
            e.\u0275\u0275elementEnd()),
            2 & n) {
                const t = e.\u0275\u0275nextContext(2);
                e.\u0275\u0275advance(1),
                e.\u0275\u0275property("errorMessages", t.nickNameErrors)("maxLength", 6)("label", e.\u0275\u0275pipeBind1(2, 5, "PAGE.LOGIN.NICKNAME"))("analytics", t.id + " nickname input")("disabled", t.disabledMode)
            }
        }
        function $t(n, o) {
            1 & n && (e.\u0275\u0275element(0, "span", 46),
            e.\u0275\u0275pipe(1, "translate")),
            2 & n && e.\u0275\u0275property("innerHTML", e.\u0275\u0275pipeBind1(1, 1, "PAGE.LOGIN.SUBMIT.TEXT"), e.\u0275\u0275sanitizeHtml)
        }
        function Qt(n, o) {
            if (1 & n) {
                const t = e.\u0275\u0275getCurrentView();
                e.\u0275\u0275elementStart(0, "div", 47)(1, "fdc-button", 48),
                e.\u0275\u0275listener("click", function() {
                    return e.\u0275\u0275restoreView(t),
                    e.\u0275\u0275nextContext(2).onUseBiometricsButton()
                }),
                e.\u0275\u0275element(2, "span", 18),
                e.\u0275\u0275elementEnd()()
            }
            if (2 & n) {
                const t = e.\u0275\u0275nextContext(2);
                e.\u0275\u0275advance(1),
                e.\u0275\u0275property("color", t.buttonSecondary)("disabled", !t.allowSubmit)("analytics", t.id + " biometric button")("trackDynatrace", !0)("hasMargin", !1),
                e.\u0275\u0275attribute("id", "login-usefaceid"),
                e.\u0275\u0275advance(1),
                e.\u0275\u0275property("innerHTML", t.biometricButtonLabel, e.\u0275\u0275sanitizeHtml)
            }
        }
        function Yt(n, o) {
            if (1 & n) {
                const t = e.\u0275\u0275getCurrentView();
                e.\u0275\u0275elementStart(0, "fdc-card", 2),
                e.\u0275\u0275element(1, "h1", 3),
                e.\u0275\u0275pipe(2, "translate"),
                e.\u0275\u0275elementStart(3, "form", 4)(4, "div", 5),
                e.\u0275\u0275template(5, Ht, 3, 1, "div", 6),
                e.\u0275\u0275elementStart(6, "div", 7),
                e.\u0275\u0275template(7, Kt, 9, 14, "div", 8),
                e.\u0275\u0275pipe(8, "async"),
                e.\u0275\u0275template(9, jt, 7, 17, "div", 9),
                e.\u0275\u0275pipe(10, "async"),
                e.\u0275\u0275elementEnd(),
                e.\u0275\u0275template(11, zt, 9, 15, "div", 10),
                e.\u0275\u0275pipe(12, "async"),
                e.\u0275\u0275pipe(13, "async"),
                e.\u0275\u0275template(14, Wt, 3, 7, "div", 11),
                e.\u0275\u0275elementStart(15, "div", 12),
                e.\u0275\u0275element(16, "fdc-input", 13, 14),
                e.\u0275\u0275pipe(18, "translate"),
                e.\u0275\u0275elementEnd(),
                e.\u0275\u0275elementStart(19, "div", 15)(20, "div", 16)(21, "fdc-link", 17),
                e.\u0275\u0275listener("click", function() {
                    return e.\u0275\u0275restoreView(t),
                    e.\u0275\u0275nextContext().onCustomForgotPassword()
                })("preNavigationConditionFailCallback", function() {
                    return e.\u0275\u0275restoreView(t),
                    e.\u0275\u0275nextContext().handleOfflineNavigation()
                }),
                e.\u0275\u0275element(22, "span", 18),
                e.\u0275\u0275pipe(23, "translate"),
                e.\u0275\u0275elementEnd()()(),
                e.\u0275\u0275elementStart(24, "div", 19)(25, "fdc-button", 20, 21),
                e.\u0275\u0275listener("buttonClick", function() {
                    return e.\u0275\u0275restoreView(t),
                    e.\u0275\u0275nextContext().onFormSubmit()
                }),
                e.\u0275\u0275pipe(27, "translate"),
                e.\u0275\u0275template(28, $t, 2, 3, "span", 22),
                e.\u0275\u0275elementEnd()(),
                e.\u0275\u0275template(29, Qt, 3, 7, "div", 23),
                e.\u0275\u0275pipe(30, "async"),
                e.\u0275\u0275elementEnd()(),
                e.\u0275\u0275element(31, "form", 24, 25),
                e.\u0275\u0275elementEnd()
            }
            if (2 & n) {
                const t = e.\u0275\u0275nextContext();
                e.\u0275\u0275property("hasPadding", !1),
                e.\u0275\u0275advance(1),
                e.\u0275\u0275property("innerHTML", e.\u0275\u0275pipeBind1(2, 25, "PAGE.LOGIN.TITLE"), e.\u0275\u0275sanitizeHtml),
                e.\u0275\u0275advance(2),
                e.\u0275\u0275property("formGroup", t.loginForm),
                e.\u0275\u0275advance(2),
                e.\u0275\u0275property("ngIf", t.title),
                e.\u0275\u0275advance(2),
                e.\u0275\u0275property("ngIf", e.\u0275\u0275pipeBind1(8, 27, t.hasSavedCards$) && t.allowRememberCard),
                e.\u0275\u0275advance(2),
                e.\u0275\u0275property("ngIf", !1 === e.\u0275\u0275pipeBind1(10, 29, t.hasSavedCards$) || t.isUseDifferentCardOption() || !t.allowRememberCard),
                e.\u0275\u0275advance(2),
                e.\u0275\u0275property("ngIf", (e.\u0275\u0275pipeBind1(12, 31, t.hasSavedCards$) && t.isUseDifferentCardOption() || !1 === e.\u0275\u0275pipeBind1(13, 33, t.hasSavedCards$)) && t.allowRememberCard),
                e.\u0275\u0275advance(3),
                e.\u0275\u0275property("ngIf", t.loginForm.controls.shouldRemember.value),
                e.\u0275\u0275advance(2),
                e.\u0275\u0275property("maxLength", t.maxPasswordLength)("errorMessages", t.passwordErrors)("label", e.\u0275\u0275pipeBind1(18, 35, "PAGE.LOGIN.PASSWORD.LABEL"))("analytics", t.id + " password input")("disabled", t.disabledMode),
                e.\u0275\u0275advance(5),
                e.\u0275\u0275property("limitLineHeight", t.isZoom)("preNavigationCondition", t.isOnline || !t.isNative),
                e.\u0275\u0275advance(1),
                e.\u0275\u0275property("innerHTML", e.\u0275\u0275pipeBind1(23, 37, "PAGE.LOGIN.FORGOT_PASSWORD.TEXT"), e.\u0275\u0275sanitizeHtml),
                e.\u0275\u0275advance(3),
                e.\u0275\u0275property("disabled", !t.allowSubmit)("isLoading", t.isLoading)("loadingLabel", e.\u0275\u0275pipeBind1(27, 39, "PAGE.LOGIN.SUBMIT.LOADING_LABEL"))("analytics", t.id + " submit button")("trackDynatrace", !0)("hasMargin", !1),
                e.\u0275\u0275attribute("id", "login-submit"),
                e.\u0275\u0275advance(3),
                e.\u0275\u0275property("ngIf", !t.isLoading),
                e.\u0275\u0275advance(1),
                e.\u0275\u0275property("ngIf", e.\u0275\u0275pipeBind1(30, 41, t.hasSavedCards$) && t.displayUseBiometricButton)
            }
        }
        function Xt(n, o) {
            if (1 & n) {
                const t = e.\u0275\u0275getCurrentView();
                e.\u0275\u0275elementStart(0, "fdc-modal", 49),
                e.\u0275\u0275listener("modalClosed", function() {
                    return e.\u0275\u0275restoreView(t),
                    e.\u0275\u0275nextContext().dismissModal()
                }),
                e.\u0275\u0275elementStart(1, "div", 50),
                e.\u0275\u0275text(2),
                e.\u0275\u0275pipe(3, "translate"),
                e.\u0275\u0275elementEnd(),
                e.\u0275\u0275elementStart(4, "div", 51)(5, "div")(6, "p", 52),
                e.\u0275\u0275text(7),
                e.\u0275\u0275elementEnd(),
                e.\u0275\u0275element(8, "p", 53),
                e.\u0275\u0275pipe(9, "translate"),
                e.\u0275\u0275elementEnd(),
                e.\u0275\u0275elementStart(10, "div", 54)(11, "fdc-button", 55),
                e.\u0275\u0275listener("click", function() {
                    return e.\u0275\u0275restoreView(t),
                    e.\u0275\u0275nextContext().onForgetCard()
                }),
                e.\u0275\u0275element(12, "span", 18),
                e.\u0275\u0275pipe(13, "translate"),
                e.\u0275\u0275elementEnd(),
                e.\u0275\u0275elementStart(14, "fdc-button", 56),
                e.\u0275\u0275listener("click", function() {
                    return e.\u0275\u0275restoreView(t),
                    e.\u0275\u0275nextContext().dismissModal()
                }),
                e.\u0275\u0275element(15, "span", 18),
                e.\u0275\u0275pipe(16, "translate"),
                e.\u0275\u0275elementEnd()()()()
            }
            if (2 & n) {
                const t = e.\u0275\u0275nextContext();
                let i;
                e.\u0275\u0275property("id", t.id)("showModal", !0)("variant", "fullHeight")("isBorderless", !1)("hasCloseButton", !0)("useAriaLive", !0),
                e.\u0275\u0275advance(2),
                e.\u0275\u0275textInterpolate(e.\u0275\u0275pipeBind1(3, 17, "PAGE.LOGIN.REMOVE_CARD.MESSAGE")),
                e.\u0275\u0275advance(5),
                e.\u0275\u0275textInterpolate(null == (i = t.loginForm.get("savedcards")) ? null : i.value),
                e.\u0275\u0275advance(1),
                e.\u0275\u0275property("innerHTML", e.\u0275\u0275pipeBind1(9, 19, "PAGE.LOGIN.REMOVE_CARD.DESC"), e.\u0275\u0275sanitizeHtml),
                e.\u0275\u0275advance(3),
                e.\u0275\u0275property("analytics", t.id + " forget card button")("hasMargin", !1)("minWidth", 256),
                e.\u0275\u0275advance(1),
                e.\u0275\u0275property("innerHTML", e.\u0275\u0275pipeBind1(13, 21, "PAGE.LOGIN.FORGET_CARD_CTA"), e.\u0275\u0275sanitizeHtml),
                e.\u0275\u0275advance(2),
                e.\u0275\u0275property("hasMargin", !1)("minWidth", 256)("analytics", t.id + " remember card button"),
                e.\u0275\u0275advance(1),
                e.\u0275\u0275property("innerHTML", e.\u0275\u0275pipeBind1(16, 23, "PAGE.LOGIN.NOT_FORGET_CARD_CTA"), e.\u0275\u0275sanitizeHtml)
            }
        }
        var Z = (()=>{
            return (n = Z || (Z = {})).YES = "Y",
            n.NO = "N",
            Z;
            var n
        }
        )();
        let ot = (()=>{
            class n extends ((0,
            Ee.L)()) {
                constructor(t, i, r, s, d, u, E, D, Y, ie, ne, q, Te, ze, Pe, Hr) {
                    super(),
                    this.document = t,
                    this.fb = i,
                    this.store = r,
                    this.changeDetector = s,
                    this.translateService = d,
                    this.gateKeeperService = u,
                    this.appConfigService = E,
                    this.breakpointObserver = D,
                    this.platformInfo = Y,
                    this.biometricLoginService = ie,
                    this.appService = ne,
                    this.dynamicFontScalingService = q,
                    this.networkService = Te,
                    this.forcedUpgradeService = ze,
                    this.bioCatchService = Pe,
                    this.tmxService = Hr,
                    this.allowRememberCard = !1,
                    this.id = "",
                    this.title = "",
                    this.usernameInstructionText = "",
                    this.allowSubmit = !0,
                    this.disabledMode = !1,
                    this.loadingChange = new e.EventEmitter,
                    this.errorNotification = new e.EventEmitter,
                    this.forgotPasswordClick = new e.EventEmitter,
                    this.ctaClicked = new e.EventEmitter,
                    this.gateKeeperParams = {},
                    this.loginForm = this.fb.group(O.g2),
                    this.isLoading = !1,
                    this.maxPasswordLength = Ae.JJ.PASSWORD_MAX_LEN,
                    this.templateTranslations$ = this.translateService.stream([O.cp, O.di, O.ix, O.Rn]),
                    this.usernameErrors = {
                        required: "",
                        pattern: ""
                    },
                    this.nickNameErrors = {
                        pattern: ""
                    },
                    this.passwordErrors = {
                        required: ""
                    },
                    this.showForgetSavedCardConfirmation = !1,
                    this.savedCards$ = this.store.select(g.sK),
                    this.hasSavedCards$ = this.store.select(g.MO),
                    this.isMobile2 = !1,
                    this.isShowModal$ = this.store.select(re.ie),
                    this.isShowModal = !1,
                    this.isOnline$ = this.store.select(S.GI),
                    this.isOnline = !0,
                    this.isNative = this.platformInfo.isNative,
                    this.displayUseBiometricButton = !1,
                    this.temporarilyHideBiometricButton = !1,
                    this.biometricButtonLabel = "",
                    this.isBiometricBlockedByAdmin = !1,
                    this.isZoom = !1,
                    this.buttonSecondary = J.rp.SECONDARY
                }
                ngOnInit() {
                    this.subscriptions.add(this.templateTranslations$.subscribe(t=>this.onTranslationStreamed(t))),
                    this.breakpointObserver.observe(`(max-width: ${N.cG.VIEWPORTS.MOBILE_2.MAX_WIDTH})`).pipe((0,
                    C.U)(t=>t.matches)).subscribe(t=>{
                        this.isMobile2 = t,
                        this.showForgetCardModal()
                    }
                    ),
                    this.subscriptions.add(this.store.select(g.Ff).pipe((0,
                    F.h)(({isLoaded: t})=>!0 === t), (0,
                    y.b)(t=>{
                        this.gateKeeperParams = t || {},
                        this.gateKeeperParams.isSecureKeyLogin || this.store.dispatch((0,
                        T.ps)())
                    }
                    )).subscribe()),
                    this.subscriptions.add(this.store.select(g.wi).pipe((0,
                    C.U)(t=>b.KI.projectErrorCode(t) || _.b$.projectErrorCode(t)), (0,
                    y.b)(t=>{
                        _.b$.isErrorRemovesRememberedCard(t.serverCode) && this.store.dispatch((0,
                        f.SI)())
                    }
                    )).subscribe(t=>{
                        "" !== (null == t ? void 0 : t.serverCode) && this.emitError(t)
                    }
                    )),
                    this.subscriptions.add(this.isOnline$.subscribe(t=>this.isOnline = t)),
                    this.initTmxAtLogin(),
                    this.subscriptions.add(this.store.select(S.Jc).subscribe(t=>{
                        t && this.bioCatchService.updateSessionId()
                    }
                    )),
                    this.isZoom = this.dynamicFontScalingService.uiZoomLevel >= tt.ez
                }
                ngAfterViewInit() {
                    const t = this.appService.getInitialAuth();
                    this.appService.setInitialAuth(!1),
                    this.subscriptions.add(this.store.select(g.sK).pipe((0,
                    v.q)(1)).subscribe(i=>{
                        const r = i && i[0];
                        r && this.allowRememberCard && "YES" === t && setTimeout(()=>{
                            this.promptForBiometric(r, !0)
                        }
                        , 0)
                    }
                    )),
                    this.subscriptions.add(this.store.select(g.sK).subscribe(i=>{
                        this.savedCards = i;
                        const r = i && i[0];
                        this.resetForm(),
                        r && this.allowRememberCard && (this.loginForm.controls.savedcards.setValue(r.nickname),
                        this.onSavedCardsChange(null))
                    }
                    )),
                    this.clearNicknameValueOnDontRemember(),
                    this.subscriptions.add(this.hasSavedCards$.subscribe(i=>{
                        !this.isShowModal && i ? this.loginForm.controls.username.removeValidators([p.Validators.required]) : !this.isShowModal && !i && this.loginForm.controls.username.setValidators([p.Validators.required]),
                        this.loginForm.controls.username.reset(),
                        this.loginForm.controls.username.updateValueAndValidity()
                    }
                    ))
                }
                clearNicknameValueOnDontRemember() {
                    this.subscriptions.add(this.loginForm.controls.shouldRemember.valueChanges.pipe((0,
                    Ct.G)(), (0,
                    F.h)(t=>t.length > 1), (0,
                    F.h)(t=>t[0] && !t[1])).subscribe(()=>{
                        this.loginForm.controls.nickName.setValue("")
                    }
                    ))
                }
                onCustomForgotPassword() {
                    const t = (0,
                    P.FC)("forgot your password", "bmo:cdb:sign in", "customLink");
                    this.store.dispatch((0,
                    P.V_)({
                        data: t
                    })),
                    this.forgotPasswordClick.emit()
                }
                resetForm() {
                    var t;
                    null === (t = this.loginInputs) || void 0 === t || t.toArray().forEach(i=>i.blur()),
                    this.loginForm.reset(),
                    this.allowRememberCard && this.resetFormForRememberCard(),
                    this.store.dispatch((0,
                    Re.S1)({
                        isDisable: !1
                    })),
                    this.changeDetector.markForCheck()
                }
                resetFormForRememberCard() {
                    var t, i, r;
                    const s = null === (t = this.loginForm.get("savedcards")) || void 0 === t ? void 0 : t.value;
                    if (null === (i = this.loginForm.get("shouldRemember")) || void 0 === i || i.setValue(!1),
                    this.setForgetCardConfirmation(!1),
                    this.savedCards) {
                        let d;
                        if (s !== O.Nq) {
                            const u = this.savedCards.findIndex(E=>E.nickname === s);
                            d = this.savedCards[u > -1 ? u : 0]
                        } else
                            d = this.savedCards[0];
                        d && (null === (r = this.loginForm.get("savedcards")) || void 0 === r || r.setValue(d.nickname))
                    }
                }
                onFormSubmit(t) {
                    if (this.submitButton.unfocus(),
                    this.platformInfo.isNative && et.N1.hide(),
                    this.onlineCheck()) {
                        if (!t) {
                            if (this.a11yToggleDirective.hidePassword(),
                            !this.allowSubmit)
                                return;
                            if (ee.f.validateAllFormFields(this.loginForm),
                            !this.loginForm.valid)
                                return void setTimeout(()=>{
                                    this.focusUsernameOrPassword()
                                }
                                , this.platformInfo.isIos ? 200 : 0)
                        }
                        this.platformInfo.isNative && this.store.dispatch((0,
                        V.Cl)()),
                        this.watchLoadingStatus(),
                        this.ctaClicked.emit(),
                        this.forcedUpgradeService.checkForForcedUpgrade().pipe((0,
                        Tt.V)(this.bioCatchService.flushNative()), (0,
                        v.q)(1), (0,
                        F.h)(([i])=>!i), (0,
                        Je.b)(()=>this.submitRequest(t).pipe((0,
                        v.q)(1), (0,
                        x.K)(i=>(this.store.dispatch((0,
                        V.nN)()),
                        i && this.emitError(i),
                        (0,
                        H.of)(void 0)))))).subscribe()
                    }
                }
                submitRequest(t) {
                    const i = null == t ? void 0 : t.userToken
                      , r = null == t ? void 0 : t.authToken
                      , s = null == t ? void 0 : t.nonce;
                    return this.validateSubmitRequest(t).pipe((0,
                    v.q)(1), (0,
                    y.b)(d=>{
                        this.platformInfo.isNative ? (this.setLoadingStatus(!1),
                        this.continueToLogin(d, i, r, s)) : (this.setLoadingStatus(!0),
                        this.gateKeeperService.getPilotStatus(d.username).pipe((0,
                        v.q)(1), (0,
                        y.b)({
                            next: u=>{
                                const {cardInPilot: E} = u;
                                E && (this.setLoadingStatus(!1),
                                this.continueToLogin(d, i, r, s))
                            }
                        }), (0,
                        x.K)(u=>{
                            var E;
                            return null === (E = window.dtrum) || void 0 === E || E.reportError(u),
                            this.setLoadingStatus(!1),
                            this.continueToLogin(d, i, r, s),
                            X.E
                        }
                        )).subscribe())
                    }
                    ))
                }
                continueToLogin(t, i, r, s) {
                    this.addTMXValues(t),
                    this.store.dispatch(i && r && s ? (0,
                    f.wf)(Object.assign(Object.assign({}, t), {
                        userToken: i,
                        authToken: r,
                        nonce: s
                    })) : (0,
                    f.ty)(t))
                }
                validateSubmitRequest(t) {
                    var i, r;
                    if (this.isLoading)
                        return (0,
                        Q._)(void 0);
                    const s = this.loginForm.controls
                      , d = null === (i = s.savedcards) || void 0 === i ? void 0 : i.value
                      , u = (null === (r = s.nickName) || void 0 === r ? void 0 : r.value) || (d !== O.Nq ? d : void 0);
                    return (0,
                    Pt.D)(this.store.select(g.sK)).pipe((0,
                    Ze.M)(this.store.select(g.l8, {
                        nickname: u
                    })), (0,
                    G.w)(([E,D])=>{
                        var Y, ie, ne;
                        const q = {
                            username: null === (Y = s.username.value) || void 0 === Y ? void 0 : Y.replace(/\s/g, ""),
                            password: null === (ie = s.password.value) || void 0 === ie ? void 0 : ie.substring(0, this.maxPasswordLength),
                            nickname: u,
                            shouldRemember: Z.NO
                        };
                        return this.updateValidatorsForExpressSignin(E),
                        s.username.updateValueAndValidity(),
                        !t && (ee.f.validateAllFormFields(this.loginForm),
                        this.loginForm.invalid) ? (0,
                        Q._)(void 0) : (q.shouldRemember = (null === (ne = this.loginForm.get("shouldRemember")) || void 0 === ne ? void 0 : ne.value) ? Z.YES : Z.NO,
                        this.allowRememberCard && q.shouldRemember === Z.YES && E && E.length > 9 ? (0,
                        Q._)({
                            serverCode: "",
                            code: c.jK.REM_CARD_ERROR
                        }) : (this.allowRememberCard && this.saveNickname(q, D),
                        (0,
                        H.of)(q)))
                    }
                    ))
                }
                updateValidatorsForExpressSignin(t) {
                    this.allowRememberCard && t && t.length > 0 && !this.isUseDifferentCardOption() ? this.loginForm.controls.username.removeValidators([p.Validators.required]) : this.loginForm.controls.username.setValidators([p.Validators.required])
                }
                saveNickname(t, i) {
                    if (t.shouldRemember === Z.YES) {
                        const r = yt.D.formatNickname(t.username, t.nickname);
                        t.nickname = r,
                        this.store.dispatch((0,
                        f.uw)({
                            nickname: r
                        }))
                    } else
                        i && (t.nickname = i.nickname,
                        t.username = i.expSigninToken,
                        this.store.dispatch((0,
                        f.uw)({
                            nickname: i.nickname
                        })))
                }
                isUseDifferentCardOption() {
                    var t;
                    return (null === (t = this.loginForm.get("savedcards")) || void 0 === t ? void 0 : t.value) === O.Nq
                }
                onSavedCardsChange(t) {
                    var i, r, s, d, u;
                    this.setForgetCardConfirmation(!1),
                    null === (i = this.loginForm.get("shouldRemember")) || void 0 === i || i.reset(),
                    null === (r = this.loginForm.get("password")) || void 0 === r || r.reset(),
                    t === O.Nq ? (this.loginForm.controls.username.setValidators([p.Validators.required]),
                    null === (s = this.loginForm.get("username")) || void 0 === s || s.reset(),
                    null === (d = this.loginForm.get("nickName")) || void 0 === d || d.reset()) : null === t ? (null === (u = this.loginForm.get("username")) || void 0 === u || u.reset(),
                    this.username ? this.loginForm.controls.username.setValidators([p.Validators.required]) : this.loginForm.controls.username.removeValidators([p.Validators.required])) : this.loginForm.controls.username.removeValidators([p.Validators.required]),
                    this.loginForm.controls.username.updateValueAndValidity(),
                    this.store.dispatch((0,
                    Re.S1)({
                        isDisable: !1
                    })),
                    this.checkIfDisplayBiometricButton(t)
                }
                onForgetCard() {
                    var t;
                    const i = null === (t = this.loginForm.get("savedcards")) || void 0 === t ? void 0 : t.value;
                    this.store.select(g.l8, {
                        nickname: i
                    }).pipe((0,
                    v.q)(1)).subscribe(r=>{
                        r && (this.setForgetCardConfirmation(!1),
                        this.store.dispatch((0,
                        f.I6)({
                            nickname: r.nickname
                        })))
                    }
                    )
                }
                setForgetCardConfirmation(t) {
                    this.showForgetSavedCardConfirmation = t,
                    this.showForgetCardModal()
                }
                dismissModal() {
                    this.setForgetCardConfirmation(!1),
                    setTimeout(()=>{
                        this.focusForgetYourCardLink()
                    }
                    , 200)
                }
                focusForgetYourCardLink() {
                    this.document.querySelector("#login-remove-card-link a").focus()
                }
                showForgetCardModal() {
                    this.store.dispatch((0,
                    V.VZ)({
                        isShowFullModal: this.isMobile2 && this.showForgetSavedCardConfirmation
                    }))
                }
                onTranslationStreamed(t) {
                    (t[O.cp] || t[O.di]) && (this.usernameErrors = {
                        required: t[O.cp],
                        pattern: t[O.di]
                    }),
                    t[O.ix] && (this.passwordErrors = {
                        required: t[O.ix]
                    }),
                    t[O.Rn] && (this.nickNameErrors = {
                        pattern: t[O.Rn]
                    })
                }
                onlineCheck() {
                    return !(!this.isOnline && this.isNative && (this.handleOfflineNavigation(),
                    1))
                }
                handleOfflineNavigation() {
                    this.networkService.openOfflineDialog()
                }
                watchLoadingStatus() {
                    this.selectLoginLoadingSubscription || (this.selectLoginLoadingSubscription = this.store.select(g.vU).subscribe(t=>{
                        this.isLoading && !1 === t && this.resetForm(),
                        this.setLoadingStatus(t)
                    }
                    ),
                    this.subscriptions.add(this.selectLoginLoadingSubscription))
                }
                setLoadingStatus(t) {
                    this.isLoading = t,
                    this.loadingChange.emit(t),
                    this.changeDetector.detectChanges()
                }
                emitError(t, i=!1) {
                    var r, s, d, u;
                    null === (r = this.loginForm.get("username")) || void 0 === r || r.reset(),
                    null === (s = this.loginForm.get("password")) || void 0 === s || s.reset(),
                    null === (d = this.loginForm.get("shouldRemember")) || void 0 === d || d.reset(),
                    null === (u = this.loginForm.get("nickName")) || void 0 === u || u.reset(),
                    this.setLoadingStatus(!1),
                    O.V5.includes(t.code) && this.store.dispatch((0,
                    Re.S1)({
                        isDisable: !0,
                        errorCode: t.code
                    })),
                    this.isBiometricBlockedByAdmin = t.code === c.jK.BIOMETRIC_BANNED_CARD_NUMBER_ERROR,
                    O.YD.includes(t.code) && (this.temporarilyHideBiometricButton = !0,
                    this.checkIfDisplayBiometricButton(),
                    this.changeDetector.markForCheck()),
                    i ? setTimeout(()=>{
                        this.errorNotification.emit(t)
                    }
                    , Rt.e) : this.errorNotification.emit(t)
                }
                focusUsername() {
                    this.username && this.username.inputRef.nativeElement.focus()
                }
                focusUsernameOrPassword() {
                    var t, i;
                    let r;
                    this.username && (null === (t = this.loginForm.get("username")) || void 0 === t ? void 0 : t.invalid) ? r = this.username.inputRef.nativeElement : this.password && (null === (i = this.loginForm.get("password")) || void 0 === i ? void 0 : i.invalid) && (r = this.password.inputRef.nativeElement),
                    setTimeout(()=>{
                        r.focus(),
                        et.N1.show()
                    }
                    )
                }
                trackInteraction(t) {
                    this.store.dispatch((0,
                    P.LW)({
                        data: {
                            interaction: t
                        }
                    }))
                }
                promptForBiometric(t, i=!1) {
                    this.platformInfo.isNative && !this.isLoading && t && t.isBiometricEnabled && this.store.select(At.kD).pipe((0,
                    v.q)(1), (0,
                    y.b)(r=>{
                        this.biometricLoginService.getBiometricState().then(s=>{
                            this.biometricLoginService.isEligibleToInvokeBiometric(s) ? (this.store.dispatch((0,
                            V.Cl)()),
                            this.biometricLoginService.getBiometricTokens(t, null != r ? r : "").then(u=>{
                                this.store.dispatch((0,
                                V.nN)()),
                                this.handleBiometricTokensData(u, i)
                            }
                            ).catch(u=>{
                                this.handleBiometricError(u, i)
                            }
                            )) : this.emitError({
                                code: c.jK.BIOMETRIC_DISABLED,
                                serverCode: ""
                            }, i)
                        }
                        )
                    }
                    )).subscribe()
                }
                handleBiometricError(t, i=!1) {
                    const r = b.KI.projectErrorCode(t) || _.b$.projectErrorCode(t);
                    this.store.dispatch((0,
                    V.nN)()),
                    c.Oq.includes(r.code) ? this.store.dispatch((0,
                    W.Bv)(Object.assign(Object.assign({}, t), {
                        redirectTo: c.iM.ERROR_PAGE
                    }))) : r && (r.code === c.jK.BIOMETRIC_PASSWORD_CHANGED && this.platformInfo.isNativeIos && Mt.M.focusElementByIdIos({
                        id: ce.V
                    }),
                    setTimeout(()=>{
                        this.emitError(r, i)
                    }
                    , 50))
                }
                handleBiometricTokensData(t, i=!1) {
                    const r = this.biometricLoginService.handleBiometricTokensData(t)
                      , s = (null == r ? void 0 : r.resultCode) || "0";
                    if ((null == r ? void 0 : r.userToken) && (null == r ? void 0 : r.authToken) && (null == r ? void 0 : r.nonce))
                        this.onFormSubmit({
                            userToken: r.userToken,
                            authToken: r.authToken,
                            nonce: r.nonce
                        });
                    else if (!i || s !== ve.mI.ERROR_TEMP_LOCKOUT && s !== ve.mI.ERROR_PERM_LOCKOUT) {
                        const d = this.biometricLoginService.handleBiometricTokensErrorCode(s);
                        d && this.emitError(d, i),
                        this.triggerFocusPassword(s)
                    }
                }
                onUseBiometricsButton() {
                    this.promptForBiometric(this.getSelectedSavedCard())
                }
                getSelectedSavedCard(t) {
                    var i, r;
                    return t || (t = null === (i = this.loginForm.get("savedcards")) || void 0 === i ? void 0 : i.value),
                    null === (r = this.savedCards) || void 0 === r ? void 0 : r.find(s=>s.nickname === t)
                }
                checkIfDisplayBiometricButton(t) {
                    const i = this.getSelectedSavedCard(t);
                    this.biometricButtonLabel || (this.biometricButtonLabel = this.biometricLoginService.getBiometricTypeButtonLabel()),
                    this.displayUseBiometricButton = this.platformInfo.isNative && !!(null == i ? void 0 : i.isBiometricEnabled) && this.biometricLoginService.biometricType !== ve.Oc.NOT_AVAILABLE && !this.temporarilyHideBiometricButton,
                    this.changeDetector.markForCheck()
                }
                triggerFocusPassword(t) {
                    t === ve.mI.ERROR_ENTER_PASSWORD && setTimeout(()=>{
                        this.password.inputRef.nativeElement.focus()
                    }
                    , 0)
                }
                isWealthSSO({client_id: t, redirect_uri: i}) {
                    return t && i
                }
                redirectToWealth(t) {
                    window.location.href = t
                }
                initTmxAtLogin() {
                    if (this.appConfigService.featureToggleTmxAtSignIn)
                        if (this.platformInfo.isNative) {
                            const t = {
                                tranSessionId: Le.h.generateTransSessionId()
                            };
                            this.store.dispatch((0,
                            it.n_)(t))
                        } else {
                            const t = {
                                tmxOrgId: this.appConfigService.bmoTmxOrgId,
                                tmxPageId: Lt.Io,
                                tranSessionId: Le.h.generateTransSessionId()
                            };
                            this.store.dispatch((0,
                            it.IG)(t))
                        }
                }
                addTMXValues(t) {
                    this.appConfigService.featureToggleTmxAtSignIn && (Object.assign(t, {
                        loginTmxSessionId: this.tmxService.getSessionId()
                    }),
                    this.subscriptions.add(this.store.select(g.lK).subscribe(i=>{
                        const r = Le.h.getLoginCustomerEventType(this.platformInfo.isNative ? i.deeplinkParams : i.gateKeeperParams);
                        Object.assign(t, {
                            loginTmxCustomerEventType: r
                        })
                    }
                    )))
                }
            }
            return n.\u0275fac = function(t) {
                return new (t || n)(e.\u0275\u0275directiveInject(l.K0),e.\u0275\u0275directiveInject(p.FormBuilder),e.\u0275\u0275directiveInject(M.yh),e.\u0275\u0275directiveInject(e.ChangeDetectorRef),e.\u0275\u0275directiveInject(B.fA),e.\u0275\u0275directiveInject(pe),e.\u0275\u0275directiveInject(We._),e.\u0275\u0275directiveInject(Xe.Yg),e.\u0275\u0275directiveInject(ae.t),e.\u0275\u0275directiveInject($e._),e.\u0275\u0275directiveInject(Nt.z),e.\u0275\u0275directiveInject(tt.NS),e.\u0275\u0275directiveInject(Ye.S),e.\u0275\u0275directiveInject(Bt.T),e.\u0275\u0275directiveInject(rt.Eq),e.\u0275\u0275directiveInject(wt.a))
            }
            ,
            n.\u0275cmp = e.\u0275\u0275defineComponent({
                type: n,
                selectors: [["app-login-form"]],
                viewQuery: function(t, i) {
                    if (1 & t && (e.\u0275\u0275viewQuery(Ft, 5),
                    e.\u0275\u0275viewQuery(xt, 5),
                    e.\u0275\u0275viewQuery(Dt, 5),
                    e.\u0275\u0275viewQuery(kt, 5),
                    e.\u0275\u0275viewQuery(qe.N, 5),
                    e.\u0275\u0275viewQuery(oe.a, 5)),
                    2 & t) {
                        let r;
                        e.\u0275\u0275queryRefresh(r = e.\u0275\u0275loadQuery()) && (i.gateKeeperForm = r.first),
                        e.\u0275\u0275queryRefresh(r = e.\u0275\u0275loadQuery()) && (i.username = r.first),
                        e.\u0275\u0275queryRefresh(r = e.\u0275\u0275loadQuery()) && (i.password = r.first),
                        e.\u0275\u0275queryRefresh(r = e.\u0275\u0275loadQuery()) && (i.submitButton = r.first),
                        e.\u0275\u0275queryRefresh(r = e.\u0275\u0275loadQuery()) && (i.a11yToggleDirective = r.first),
                        e.\u0275\u0275queryRefresh(r = e.\u0275\u0275loadQuery()) && (i.loginInputs = r)
                    }
                },
                inputs: {
                    allowRememberCard: "allowRememberCard",
                    id: "id",
                    title: "title",
                    usernameInstructionText: "usernameInstructionText",
                    allowSubmit: "allowSubmit",
                    disabledMode: "disabledMode"
                },
                outputs: {
                    loadingChange: "loadingChange",
                    errorNotification: "errorNotification",
                    forgotPasswordClick: "forgotPasswordClick",
                    ctaClicked: "ctaClicked"
                },
                features: [e.\u0275\u0275InheritDefinitionFeature],
                decls: 4,
                vars: 6,
                consts: [[3, "hasPadding", 4, "ngIf"], [3, "id", "showModal", "variant", "isBorderless", "hasCloseButton", "useAriaLive", "modalClosed", 4, "ngIf"], [3, "hasPadding"], [1, "heading-tablet-mobile", "ml-32p", "ml-md-16p", "mt-md-16p", 3, "innerHTML"], ["id", "login-form", 3, "formGroup"], [1, "login-form", "p-32p"], ["class", "mb-16p flex ai-center jc-center", 4, "ngIf"], [1, "mb-8p"], [4, "ngIf"], [3, "mt-16p", "mt-8p", 4, "ngIf"], ["class", "flex ai-center", 3, "remember-me-stacked", 4, "ngIf"], ["class", "mt-16p mt-md-8p", 4, "ngIf"], [1, "mt-16p", "mt-md-8p"], ["appA11yToggleInputAnalytics", "", "id", "password", "name", "password-input", "type", "password", "formControlName", "password", 3, "maxLength", "errorMessages", "label", "analytics", "disabled"], ["password", ""], [1, "login-form__actions"], [1, "flex", "ai-center"], ["iconColor", "tertiary", "type", "primary", 3, "limitLineHeight", "preNavigationCondition", "click", "preNavigationConditionFailCallback"], [3, "innerHTML"], [1, "flex", "jc-center", "ai-center", "mt-24p"], ["type", "submit", "name", "login-submit", 3, "disabled", "isLoading", "loadingLabel", "analytics", "trackDynatrace", "hasMargin", "buttonClick"], ["submitButton", ""], ["name", "login-submit", 3, "innerHTML", 4, "ngIf"], ["class", "flex jc-center ai-center mt-8p", 4, "ngIf"], ["id", "gatekeeperForm", "method", "post", "action", ""], ["gatekeeperForm", ""], [1, "mb-16p", "flex", "ai-center", "jc-center"], ["size", "medium", "name", "lock"], [1, "fdc-title1", "secure__title-text", 3, "innerHTML"], ["name", "choose-card-dropdown", "formControlName", "savedcards", 3, "label", "analytics", "isDisabled", "valueChange"], [3, "value", "label", 4, "ngFor", "ngForOf"], ["value", "1", 3, "label"], [3, "value", "label"], ["iconColor", "blue", 3, "analytics", "click"], [1, "fdc-subtitle2", "bold", "mt-8p", 3, "innerHTML"], [1, "fdc-body2", 3, "innerHTML"], [1, "align-right", "mt-24p", "mb-24p"], ["color", "secondary", "size", "small", 1, "inline-block", "mr-8p", 3, "analytics", "buttonClick"], ["size", "small", 1, "inline-block", 3, "analytics", "hasMargin", "buttonClick"], [1, "divider"], ["id", "username", "name", "username-input", "type", "tel", "formControlName", "username", "maskFormat", "0000 0000 0000 0000", 3, "errorMessages", "helperText", "label", "analytics", "disabled"], ["username", ""], ["name", "remember", "value", "Y", "formControlName", "shouldRemember", 1, "remember-me-checkbox", 3, "id", "analytics", "disabled"], ["containerLocation", "right-alignTop", 1, "ml-8p", "mb-4p", 3, "id", "buttonAriaLabel", "popoverOpened", "popoverClosed"], ["popoverContent", ""], ["id", "nickname", "name", "nickname-input", "type", "text", "formControlName", "nickName", 3, "errorMessages", "maxLength", "label", "analytics", "disabled"], ["name", "login-submit", 3, "innerHTML"], [1, "flex", "jc-center", "ai-center", "mt-8p"], ["type", "button", 3, "color", "disabled", "analytics", "trackDynatrace", "hasMargin", "click"], [3, "id", "showModal", "variant", "isBorderless", "hasCloseButton", "useAriaLive", "modalClosed"], ["modalHeader", ""], ["modalContent", "", 1, "modal-content", "flex", "flow-column", "jc-between"], [1, "fdc-body1"], [1, "fdc-body1", "mt-24p", 3, "innerHTML"], [1, "align-center", "flex", "flow-column"], ["size", "medium", 3, "analytics", "hasMargin", "minWidth", "click"], ["color", "tertiary", "size", "medium", 1, "mt-16p", 3, "hasMargin", "minWidth", "analytics", "click"]],
                template: function(t, i) {
                    1 & t && (e.\u0275\u0275template(0, Yt, 33, 43, "fdc-card", 0),
                    e.\u0275\u0275pipe(1, "async"),
                    e.\u0275\u0275template(2, Xt, 17, 25, "fdc-modal", 1),
                    e.\u0275\u0275pipe(3, "async")),
                    2 & t && (e.\u0275\u0275property("ngIf", !1 === e.\u0275\u0275pipeBind1(1, 2, i.isShowModal$)),
                    e.\u0275\u0275advance(2),
                    e.\u0275\u0275property("ngIf", e.\u0275\u0275pipeBind1(3, 4, i.isShowModal$)))
                },
                directives: [l.O5, se.Ak, p.\u0275NgNoValidate, p.NgControlStatusGroup, p.FormGroupDirective, ye.oJ, me.JO, p.NgControlStatus, p.FormControlName, j.v, l.sg, me.N5, fe.N0, J.r0, oe.a, ue.z, at.U$, qe.N, p.NgForm, Me.zS],
                pipes: [l.Ov, h.X$],
                styles: ["[_nghost-%COMP%]   .mt-2p[_ngcontent-%COMP%]{margin-top:2px}[_nghost-%COMP%]     .form-field{padding-bottom:8px!important}[_nghost-%COMP%]   .login-form[_ngcontent-%COMP%]{padding:32px}[_nghost-%COMP%]   .is-zoom[_ngcontent-%COMP%]{margin-top:8px;line-height:1.25rem}[_nghost-%COMP%]   .secure__title[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center}[_nghost-%COMP%]   .secure__title-text[_ngcontent-%COMP%]{padding:0 0 4px 10px}@media only screen and (max-width: 374px){[_nghost-%COMP%]   .remember-me-stacked[_ngcontent-%COMP%]{flex-direction:column}}[_nghost-%COMP%]   .divider[_ngcontent-%COMP%]{box-sizing:border-box;height:1px;border-bottom:1px solid var(--bmo-light-grey)}[_nghost-%COMP%]   .modal-content[_ngcontent-%COMP%]{height:100%}[_nghost-%COMP%]   .heading-tablet-mobile[_ngcontent-%COMP%]{display:none}@media only screen and (min-width: 1280px){[_nghost-%COMP%]   fdc-modal[_ngcontent-%COMP%]{display:none}}@media only screen and (max-width: 599px){[_nghost-%COMP%]   .heading-tablet-mobile[_ngcontent-%COMP%]{display:block;font-size:1.8rem;line-height:2.4rem;font-weight:var(--font-weight-bold1)}[_nghost-%COMP%]   .login-form[_ngcontent-%COMP%]{padding:6px 16px 32px}}@media only screen and (max-width: 599px) and (min-width: 1280px){__actions[_nghost-%COMP%]{flex-direction:column;align-items:center}}"],
                changeDetection: 0
            }),
            n
        }
        )();
        var Jt = a(72919);
        function Zt(n, o) {
            if (1 & n && (e.\u0275\u0275elementStart(0, "button", 17),
            e.\u0275\u0275element(1, "span", 13),
            e.\u0275\u0275elementEnd()),
            2 & n) {
                const t = e.\u0275\u0275nextContext(2);
                e.\u0275\u0275property("routerLink", t.notification.routerLink)("analytics", "login notification action button"),
                e.\u0275\u0275advance(1),
                e.\u0275\u0275property("innerHTML", t.notification.actionLabel, e.\u0275\u0275sanitizeHtml)
            }
        }
        function qt(n, o) {
            if (1 & n && (e.\u0275\u0275elementStart(0, "fdc-link", 18),
            e.\u0275\u0275element(1, "span", 13),
            e.\u0275\u0275elementEnd()),
            2 & n) {
                const t = e.\u0275\u0275nextContext(2);
                e.\u0275\u0275property("href", t.notification.hrefLink)("analytics", "login notification action button"),
                e.\u0275\u0275attribute("id", "lp-banner-action-link"),
                e.\u0275\u0275advance(1),
                e.\u0275\u0275property("innerHTML", t.notification.actionLabel, e.\u0275\u0275sanitizeHtml)
            }
        }
        const ei = function(n) {
            return {
                additionInfo: n
            }
        }
          , ti = function(n, o) {
            return {
                additionInfo: n,
                errorCode: o
            }
        };
        function ii(n, o) {
            if (1 & n) {
                const t = e.\u0275\u0275getCurrentView();
                e.\u0275\u0275elementStart(0, "div", 10)(1, "div", 5),
                e.\u0275\u0275text(2, " \xa0 "),
                e.\u0275\u0275elementEnd(),
                e.\u0275\u0275elementStart(3, "div", 11)(4, "fdc-notification-banner", 12),
                e.\u0275\u0275listener("willShow", function() {
                    return e.\u0275\u0275restoreView(t),
                    e.\u0275\u0275nextContext().trackNotification()
                })("notificationClosed", function() {
                    return e.\u0275\u0275restoreView(t),
                    e.\u0275\u0275nextContext().clearNotification()
                }),
                e.\u0275\u0275pipe(5, "translate"),
                e.\u0275\u0275element(6, "p", 13),
                e.\u0275\u0275pipe(7, "translate"),
                e.\u0275\u0275elementStart(8, "div"),
                e.\u0275\u0275element(9, "p", 14),
                e.\u0275\u0275pipe(10, "translate"),
                e.\u0275\u0275template(11, Zt, 2, 3, "button", 15),
                e.\u0275\u0275template(12, qt, 2, 4, "fdc-link", 16),
                e.\u0275\u0275elementEnd()()(),
                e.\u0275\u0275elementStart(13, "div", 5),
                e.\u0275\u0275text(14, " \xa0 "),
                e.\u0275\u0275elementEnd()()
            }
            if (2 & n) {
                const t = e.\u0275\u0275nextContext();
                e.\u0275\u0275advance(4),
                e.\u0275\u0275property("type", t.notification.type)("hasClose", t.notification.hasClose)("closeAriaLabel", e.\u0275\u0275pipeBind1(5, 8, "APP.GENERAL.CLOSE")),
                e.\u0275\u0275attribute("id", "lp-banner-" + t.notification.type),
                e.\u0275\u0275advance(2),
                e.\u0275\u0275property("innerHTML", e.\u0275\u0275pipeBind2(7, 10, t.notification.title, e.\u0275\u0275pureFunction1(16, ei, t.notification.additionInfo)), e.\u0275\u0275sanitizeHtml),
                e.\u0275\u0275advance(3),
                e.\u0275\u0275property("innerHTML", e.\u0275\u0275pipeBind2(10, 13, t.notification.message, e.\u0275\u0275pureFunction2(18, ti, t.notification.additionInfo, t.notification.errorCode)), e.\u0275\u0275sanitizeHtml),
                e.\u0275\u0275advance(2),
                e.\u0275\u0275property("ngIf", t.notification.routerLink),
                e.\u0275\u0275advance(1),
                e.\u0275\u0275property("ngIf", t.notification.hrefLink)
            }
        }
        function ni(n, o) {
            1 & n && (e.\u0275\u0275elementStart(0, "div", 19)(1, "div", 20),
            e.\u0275\u0275element(2, "fdc-icon", 21),
            e.\u0275\u0275elementEnd(),
            e.\u0275\u0275element(3, "h1", 22),
            e.\u0275\u0275pipe(4, "translate"),
            e.\u0275\u0275elementEnd()),
            2 & n && (e.\u0275\u0275advance(2),
            e.\u0275\u0275property("hoverColorChange", !1),
            e.\u0275\u0275advance(1),
            e.\u0275\u0275property("innerHTML", e.\u0275\u0275pipeBind1(4, 2, "PAGE.LOGIN.TITLE"), e.\u0275\u0275sanitizeHtml))
        }
        function ri(n, o) {
            if (1 & n) {
                const t = e.\u0275\u0275getCurrentView();
                e.\u0275\u0275elementStart(0, "app-login-form", 23),
                e.\u0275\u0275listener("loadingChange", function(r) {
                    return e.\u0275\u0275restoreView(t),
                    e.\u0275\u0275nextContext().onLoadingChange(r)
                })("forgotPasswordClick", function() {
                    return e.\u0275\u0275restoreView(t),
                    e.\u0275\u0275nextContext().onForgotPasswordClick()
                })("errorNotification", function(r) {
                    return e.\u0275\u0275restoreView(t),
                    e.\u0275\u0275nextContext().onErrorReceived(r)
                })("ctaClicked", function() {
                    return e.\u0275\u0275restoreView(t),
                    e.\u0275\u0275nextContext().clearNotification()
                }),
                e.\u0275\u0275elementEnd()
            }
            if (2 & n) {
                const t = e.\u0275\u0275nextContext();
                e.\u0275\u0275property("allowRememberCard", !0)("allowSubmit", !t.disableLoginForm)("disabledMode", t.disableLoginForm)
            }
        }
        function ai(n, o) {
            if (1 & n) {
                const t = e.\u0275\u0275getCurrentView();
                e.\u0275\u0275elementStart(0, "fdc-card", 24)(1, "div", 25),
                e.\u0275\u0275element(2, "h2", 26),
                e.\u0275\u0275pipe(3, "translate"),
                e.\u0275\u0275element(4, "p", 27),
                e.\u0275\u0275pipe(5, "translate"),
                e.\u0275\u0275elementStart(6, "p", 28)(7, "fdc-button", 29),
                e.\u0275\u0275listener("buttonClick", function() {
                    return e.\u0275\u0275restoreView(t),
                    e.\u0275\u0275nextContext().onOlbbClick()
                }),
                e.\u0275\u0275pipe(8, "async"),
                e.\u0275\u0275element(9, "span", 13),
                e.\u0275\u0275pipe(10, "translate"),
                e.\u0275\u0275elementEnd()()()()
            }
            if (2 & n) {
                const t = e.\u0275\u0275nextContext();
                e.\u0275\u0275property("hasPadding", !1),
                e.\u0275\u0275advance(2),
                e.\u0275\u0275property("innerHTML", e.\u0275\u0275pipeBind1(3, 9, "PAGE.LOGIN.EMT_OLBB.TITLE"), e.\u0275\u0275sanitizeHtml),
                e.\u0275\u0275advance(2),
                e.\u0275\u0275property("innerHTML", e.\u0275\u0275pipeBind1(5, 11, "PAGE.LOGIN.EMT_OLBB.DESCRIPTION"), e.\u0275\u0275sanitizeHtml),
                e.\u0275\u0275advance(3),
                e.\u0275\u0275property("analytics", "Link to online banking for business")("trackDynatrace", !0)("isLoading", t.isOlbbLoading)("languageFormat", e.\u0275\u0275pipeBind1(8, 13, t.currentLang$)),
                e.\u0275\u0275attribute("id", "emt-olbb-redirect"),
                e.\u0275\u0275advance(2),
                e.\u0275\u0275property("innerHTML", e.\u0275\u0275pipeBind1(10, 15, "PAGE.LOGIN.EMT_OLBB.CTA"), e.\u0275\u0275sanitizeHtml)
            }
        }
        function oi(n, o) {
            if (1 & n) {
                const t = e.\u0275\u0275getCurrentView();
                e.\u0275\u0275elementStart(0, "fdc-card", 38)(1, "div", 39)(2, "div", 40),
                e.\u0275\u0275element(3, "fdc-icon", 41)(4, "h2", 42),
                e.\u0275\u0275pipe(5, "async"),
                e.\u0275\u0275pipe(6, "translate"),
                e.\u0275\u0275elementEnd(),
                e.\u0275\u0275element(7, "p", 43),
                e.\u0275\u0275pipe(8, "translate"),
                e.\u0275\u0275elementStart(9, "fdc-link", 44),
                e.\u0275\u0275listener("preNavigationConditionFailCallback", function() {
                    return e.\u0275\u0275restoreView(t),
                    e.\u0275\u0275nextContext(2).handleOfflineNavigation()
                }),
                e.\u0275\u0275pipe(10, "async"),
                e.\u0275\u0275element(11, "span", 13),
                e.\u0275\u0275pipe(12, "translate"),
                e.\u0275\u0275elementEnd()()()
            }
            if (2 & n) {
                const t = e.\u0275\u0275nextContext(2);
                e.\u0275\u0275property("hasPadding", !1),
                e.\u0275\u0275advance(4),
                e.\u0275\u0275property("ngClass", e.\u0275\u0275pipeBind1(5, 13, t.isMobileView$) ? "fdc-subtitle1" : "fdc-title1")("innerHTML", e.\u0275\u0275pipeBind1(6, 15, "PAGE.LOGIN.SECURE_CARD.TITLE"), e.\u0275\u0275sanitizeHtml),
                e.\u0275\u0275advance(3),
                e.\u0275\u0275property("innerHTML", e.\u0275\u0275pipeBind1(8, 17, "PAGE.LOGIN.SECURE_CARD.DESCRIPTION"), e.\u0275\u0275sanitizeHtml),
                e.\u0275\u0275advance(2),
                e.\u0275\u0275property("inline", !0)("type", "secondary")("href", e.\u0275\u0275pipeBind1(10, 19, t.appConfigService.getUrl$("PAGE.LOGIN.SECURE_CARD.MORE_LINK")))("preNavigationCondition", t.isOnline || !t.isNative)("icon", "external-link")("iconSize", "small")("iconLocation", "end")("useMaxHeight", !1),
                e.\u0275\u0275advance(2),
                e.\u0275\u0275property("innerHTML", e.\u0275\u0275pipeBind1(12, 21, "PAGE.LOGIN.SECURE_CARD.MORE"), e.\u0275\u0275sanitizeHtml)
            }
        }
        function si(n, o) {
            if (1 & n) {
                const t = e.\u0275\u0275getCurrentView();
                e.\u0275\u0275elementStart(0, "div", 30)(1, "fdc-card", 31)(2, "div", 25),
                e.\u0275\u0275element(3, "h2", 32),
                e.\u0275\u0275pipe(4, "async"),
                e.\u0275\u0275pipe(5, "translate"),
                e.\u0275\u0275elementStart(6, "p", 33)(7, "fdc-link", 34),
                e.\u0275\u0275listener("preNavigationConditionFailCallback", function() {
                    return e.\u0275\u0275restoreView(t),
                    e.\u0275\u0275nextContext().handleOfflineNavigation()
                }),
                e.\u0275\u0275pipe(8, "async"),
                e.\u0275\u0275pipe(9, "uppercase"),
                e.\u0275\u0275pipe(10, "translate"),
                e.\u0275\u0275element(11, "span", 13),
                e.\u0275\u0275pipe(12, "uppercase"),
                e.\u0275\u0275pipe(13, "translate"),
                e.\u0275\u0275elementEnd(),
                e.\u0275\u0275element(14, "span", 35),
                e.\u0275\u0275pipe(15, "translate"),
                e.\u0275\u0275elementStart(16, "app-multi-platform-link", 36),
                e.\u0275\u0275listener("preNavigationConditionFailCallback", function() {
                    return e.\u0275\u0275restoreView(t),
                    e.\u0275\u0275nextContext().handleOfflineNavigation()
                }),
                e.\u0275\u0275pipe(17, "async"),
                e.\u0275\u0275pipe(18, "uppercase"),
                e.\u0275\u0275pipe(19, "translate"),
                e.\u0275\u0275pipe(20, "uppercase"),
                e.\u0275\u0275pipe(21, "translate"),
                e.\u0275\u0275elementEnd()()()(),
                e.\u0275\u0275template(22, oi, 13, 23, "fdc-card", 37),
                e.\u0275\u0275pipe(23, "async"),
                e.\u0275\u0275elementEnd()
            }
            if (2 & n) {
                const t = e.\u0275\u0275nextContext();
                e.\u0275\u0275advance(1),
                e.\u0275\u0275property("hasPadding", !1),
                e.\u0275\u0275advance(2),
                e.\u0275\u0275property("ngClass", e.\u0275\u0275pipeBind1(4, 15, t.isMobileView$) ? "fdc-subtitle1" : "fdc-title1")("innerHTML", e.\u0275\u0275pipeBind1(5, 17, "PAGE.LOGIN.NEW_CARD.TITLE"), e.\u0275\u0275sanitizeHtml),
                e.\u0275\u0275advance(4),
                e.\u0275\u0275property("internalRouterLink", t.adeRouterLink)("href", e.\u0275\u0275pipeBind1(8, 19, t.appConfigService.getUrl$("PAGE.LOGIN.DEBIT_CARD.HREF")))("ariaLabel", e.\u0275\u0275pipeBind1(9, 21, e.\u0275\u0275pipeBind1(10, 23, "PAGE.LOGIN.NEW_CARD.DEBIT_CARD.ARIA_LABEL")))("preNavigationCondition", t.isOnline || !t.isNative),
                e.\u0275\u0275advance(4),
                e.\u0275\u0275property("innerHTML", e.\u0275\u0275pipeBind1(12, 25, e.\u0275\u0275pipeBind1(13, 27, "PAGE.LOGIN.NEW_CARD.DEBIT_CARD.TEXT")), e.\u0275\u0275sanitizeHtml),
                e.\u0275\u0275advance(3),
                e.\u0275\u0275property("innerHTML", e.\u0275\u0275pipeBind1(15, 29, "PAGE.LOGIN.NEW_CARD.OR"), e.\u0275\u0275sanitizeHtml),
                e.\u0275\u0275advance(2),
                e.\u0275\u0275property("id", "credit-card-registration-link")("browserUrl", e.\u0275\u0275pipeBind1(17, 31, t.ccRegUrl$))("linkText", e.\u0275\u0275pipeBind1(18, 33, e.\u0275\u0275pipeBind1(19, 35, "PAGE.LOGIN.NEW_CARD.CREDIT_CARD.TEXT")))("ariaLabel", e.\u0275\u0275pipeBind1(20, 37, e.\u0275\u0275pipeBind1(21, 39, "PAGE.LOGIN.NEW_CARD.CREDIT_CARD.ARIA_LABEL")))("preNavigationCondition", t.isOnline || !t.isNative),
                e.\u0275\u0275advance(6),
                e.\u0275\u0275property("ngIf", e.\u0275\u0275pipeBind1(23, 41, t.allowLoginSecurity$))
            }
        }
        let li = (()=>{
            class n extends ((0,
            A.Q)()) {
                constructor(t, i, r, s, d, u, E, D, Y, ie, ne, q, Te, ze) {
                    super(),
                    this.document = t,
                    this.appConfigService = i,
                    this.changeDetector = r,
                    this.store = s,
                    this.translationService = d,
                    this.reloadService = u,
                    this.biometricLoginService = E,
                    this.buildVersionService = D,
                    this.platformInfoService = Y,
                    this.permanentStorage = ie,
                    this.networkService = ne,
                    this.titleService = q,
                    this.breakpointObserver = Te,
                    this.inAppBrowserService = ze,
                    this.isLoading = !1,
                    this.shouldShowForm = !1,
                    this.isAuthenticated$ = this.store.select(g.gs),
                    this.showOlbbBox = !1,
                    this.olbbUrl = "",
                    this.isOlbbLoading = !1,
                    this.currentLang$ = this.translationService.getCurrentLanguageFormat$(),
                    this.disableLoginForm = !1,
                    this.isShowModal$ = this.store.select(re.ie),
                    this.adeRouterLink = void 0,
                    this.allowLoginSecurity$ = this.store.select(m.KT),
                    this.isOnline$ = this.store.select(S.GI),
                    this.isOnline = !0,
                    this.isNative = this.platformInfoService.isNative,
                    this.ccRegUrl$ = this.appConfigService.getUrl$("PAGE.LOGIN.CREDIT_CARD.HREF").pipe((0,
                    C.U)(Pe=>Pe + this.getCCRegSource())),
                    this.focusListener = ()=>{
                        this.refreshAppIfStale()
                    }
                }
                ngOnInit() {
                    this.subscriptions.add(this.store.select(w.e).subscribe(t=>{
                        this.notification = t.notification,
                        this.changeDetector.markForCheck()
                    }
                    )),
                    this.subscriptions.add(this.store.select(m.Qp).subscribe(t=>{
                        t && (this.adeRouterLink = `/${k.Ow.ADE_BASE_PATH}`)
                    }
                    )),
                    this.subscriptions.add(this.isOnline$.subscribe(t=>this.isOnline = t)),
                    this.isMobileView$ = this.breakpointObserver.observe([`(max-width: ${N.cG.VIEWPORTS.MOBILE_3.MAX_WIDTH})`]).pipe((0,
                    C.U)(t=>t.matches))
                }
                ionViewWillEnter() {
                    var t;
                    if (!(null === (t = this.document.getElementById(ce.V)) || void 0 === t ? void 0 : t.innerHTML)) {
                        const i = this.translationService.instant("PAGE.LOGIN.TITLEKEY");
                        this.titleService.setTitle(i + " - BMO")
                    }
                    this.disableLoginForm = this.reloadService.isReloading(),
                    this.shouldShowForm = !0,
                    this.changeDetector.markForCheck(),
                    this.ionSubscriptions.add(this.store.select(g.Ff).subscribe(i=>{
                        this.showOlbbBox = !1;
                        const r = i.params || {}
                          , s = this.appConfigService.emtOlbbUrl;
                        if (s) {
                            const d = this.translationService.getCurrentLanguageKey().toLowerCase();
                            r.uP2PrpId ? (this.showOlbbBox = !0,
                            this.olbbUrl = s + "/Receive?eaiLocaleString=" + d + "&uP2PrpId=" + r.uP2PrpId) : r.uP2PcpId ? (this.showOlbbBox = !0,
                            this.olbbUrl = s + "/Cancel?eaiLocaleString=" + d + "&uP2PrpId=" + r.uP2PcpId) : r.uP2PfpId && (this.showOlbbBox = !0,
                            this.olbbUrl = s + "/Fulfill?eaiLocaleString=" + d + "&uP2PrpId=" + r.uP2PfpId),
                            this.changeDetector.markForCheck()
                        }
                    }
                    )),
                    this.ionSubscriptions.add(this.isAuthenticated$.pipe((0,
                    v.q)(1)).subscribe(i=>{
                        this.permanentStorage.remove("hideFraudAlertWU"),
                        i && this.store.dispatch(T.hv({}))
                    }
                    )),
                    this.appConfigService.featureRefreshAppVersion && !this.platformInfoService.isNative && this.document.defaultView && this.document.defaultView.addEventListener("focus", this.focusListener)
                }
                refreshAppIfStale() {
                    this.isTimeToCheck(this.lastAppStaleCheck) && (this.buildVersionService.isAppVersionStale().pipe((0,
                    F.h)(t=>t), (0,
                    v.q)(1)).subscribe(()=>{
                        this.reloadService.reloadLoginPage()
                    }
                    ),
                    this.lastAppStaleCheck = new Date)
                }
                isTimeToCheck(t) {
                    return !t || (new Date).getTime() > t.getTime() + this.appConfigService.settingAppStaleCheckWait
                }
                ionViewDidLeave() {
                    this.appConfigService.featureRefreshAppVersion && !this.platformInfoService.isNative && this.document.defaultView && this.document.defaultView.removeEventListener("focus", this.focusListener),
                    this.notification = void 0,
                    this.shouldShowForm = !1,
                    this.isOlbbLoading = !1,
                    this.changeDetector.markForCheck(),
                    super.ionViewDidLeave()
                }
                clearNotification() {
                    this.notification && (this.notification = void 0,
                    this.store.dispatch(T.g6()),
                    this.store.dispatch((0,
                    f.uz)({
                        isShowing: !1
                    })))
                }
                projectNotificationError(t) {
                    if (c.Oq.includes(t.code))
                        return;
                    let i;
                    const r = I.D9.includes(t.code);
                    return i = r ? b.KI.mapErrorMessage(t, this.biometricLoginService.biometricType) : _.b$.mapErrorMessage(t),
                    {
                        title: i.title,
                        message: i.message,
                        errorCode: t.serverCode,
                        additionInfo: r ? this.biometricLoginService.getBiometricTypeBannerLabel() : "",
                        type: t.code === c.jK.BIOMETRIC_ENABLE_BANNED_CARD_NUMBER_ERROR || t.code === c.jK.BIOMETRIC_BANNED_CARD_NUMBER_ERROR ? R.$.WARNING : R.$.DANGER,
                        hasClose: !0
                    }
                }
                onErrorReceived(t) {
                    if (this.isLoading)
                        return;
                    setTimeout(()=>{
                        this.resetScroll()
                    }
                    , 0);
                    const i = this.projectNotificationError(t);
                    i && (this.notification = i),
                    this.changeDetector.markForCheck()
                }
                resetScroll() {
                    const t = this.document.querySelectorAll("#login_page_container > div");
                    t.length && (t[0].scrollTop = 0)
                }
                trackNotification() {
                    var t, i;
                    this.store.dispatch((0,
                    f.uz)({
                        isShowing: !0
                    })),
                    (null === (t = this.notification) || void 0 === t ? void 0 : t.type) === R.$.DANGER && this.store.dispatch((0,
                    P.tz)({
                        data: [{
                            errorType: "error",
                            code: (null === (i = this.notification) || void 0 === i ? void 0 : i.errorCode) || "",
                            displayType: "banner"
                        }]
                    }))
                }
                onForgotPasswordClick() {
                    this.ionSubscriptions.add(this.appConfigService.getUrl$("RESET_PASSWORD_URL").pipe((0,
                    F.h)(t=>!!t), (0,
                    v.q)(1), (0,
                    y.b)(t=>{
                        var i;
                        this.appConfigService.isOpeningWebViewAllowedBasedOnChannel ? this.inAppBrowserService.openURL({
                            url: t,
                            dismissDialog: !1,
                            title: this.translationService.translate("APP.CHANGE_PASSWORD.TITLE")
                        }) : null === (i = this.document.defaultView) || void 0 === i || i.open(t, "_self")
                    }
                    )).subscribe())
                }
                handleOfflineNavigation() {
                    this.networkService.openOfflineDialog()
                }
                onLoadingChange(t) {
                    this.isLoading = t
                }
                onOlbbClick() {
                    var t;
                    this.isOlbbLoading = !0,
                    null === (t = this.document.defaultView) || void 0 === t || t.open(this.olbbUrl, "_self"),
                    this.changeDetector.markForCheck()
                }
                getCCRegSource() {
                    if (this.platformInfoService.isNative)
                        return "&ccRegSource=MAPP"
                }
            }
            return n.\u0275fac = function(t) {
                return new (t || n)(e.\u0275\u0275directiveInject(l.K0),e.\u0275\u0275directiveInject(We._),e.\u0275\u0275directiveInject(e.ChangeDetectorRef),e.\u0275\u0275directiveInject(M.yh),e.\u0275\u0275directiveInject(B.fA),e.\u0275\u0275directiveInject(ft.f),e.\u0275\u0275directiveInject($e._),e.\u0275\u0275directiveInject(_t),e.\u0275\u0275directiveInject(ae.t),e.\u0275\u0275directiveInject(Qe.n2),e.\u0275\u0275directiveInject(Ye.S),e.\u0275\u0275directiveInject(bt.Z),e.\u0275\u0275directiveInject(Xe.Yg),e.\u0275\u0275directiveInject(St.q))
            }
            ,
            n.\u0275cmp = e.\u0275\u0275defineComponent({
                type: n,
                selectors: [["app-login"]],
                features: [e.\u0275\u0275InheritDefinitionFeature],
                decls: 18,
                vars: 14,
                consts: [[3, "useSticky", "useMobileFooter"], ["class", "fdc-row flow-wrap mb-24p mb-sm-0p", 4, "ngIf"], ["fdcPrint", "", 1, "login", "mb-80p", "mb-md-16p"], ["class", "login__title mt-16p", 4, "ngIf"], [1, "fdc-row", "flow-wrap", "mt-16p", "mt-md-0p"], [1, "tablet-gutter", "fdc-lg-col-2"], [1, "fdc-col-6", "fdc-lg-col-8", "fdc-sm-col-4", "mb-lg-16p", "mt-lg-16p", "mt-md-16p", "mt-xs-16p", "mt-sm-16p"], ["id", "login", 3, "allowRememberCard", "allowSubmit", "disabledMode", "loadingChange", "forgotPasswordClick", "errorNotification", "ctaClicked", 4, "ngIf"], ["class", "block mt-24p", 3, "hasPadding", 4, "ngIf"], ["class", "fdc-col-6 fdc-lg-col-8 fdc-sm-col-4 hack__force-small-gutter", 4, "ngIf"], [1, "fdc-row", "flow-wrap", "mb-24p", "mb-sm-0p"], [1, "fdc-lg-col-8", "fdc-col-12", "fdc-sm-col-4"], [3, "type", "hasClose", "closeAriaLabel", "willShow", "notificationClosed"], [3, "innerHTML"], [1, "light", "text--wrap", 3, "innerHTML"], ["id", "lp-banner-action-button", "class", "primary micro", 3, "routerLink", "analytics", 4, "ngIf"], [3, "href", "analytics", 4, "ngIf"], ["id", "lp-banner-action-button", 1, "primary", "micro", 3, "routerLink", "analytics"], [3, "href", "analytics"], [1, "login__title", "mt-16p"], [1, "login__title-icon"], ["size", "medium", "name", "lock", 3, "hoverColorChange"], [1, "fdc-heading1", "bold", 3, "innerHTML"], ["id", "login", 3, "allowRememberCard", "allowSubmit", "disabledMode", "loadingChange", "forgotPasswordClick", "errorNotification", "ctaClicked"], [1, "block", "mt-24p", 3, "hasPadding"], [1, "banking"], [1, "fdc-body1", "bold", "banking__title", "mt-16p", 3, "innerHTML"], [1, "fdc-body2", "banking__description", 3, "innerHTML"], [1, "banking__tray", "olbb"], ["type", "submit", 3, "analytics", "trackDynatrace", "isLoading", "languageFormat", "buttonClick"], [1, "fdc-col-6", "fdc-lg-col-8", "fdc-sm-col-4", "hack__force-small-gutter"], [1, "block", "mb-24p", "mb-lg-16p", 3, "hasPadding"], [1, "bold", "banking__title", "mt-16p", 3, "ngClass", "innerHTML"], [1, "banking__tray"], [1, "mr-10p", 3, "internalRouterLink", "href", "ariaLabel", "preNavigationCondition", "preNavigationConditionFailCallback"], [1, "fdc-body1", 3, "innerHTML"], [1, "ml-10p", 3, "id", "browserUrl", "linkText", "ariaLabel", "preNavigationCondition", "preNavigationConditionFailCallback"], ["type", "flat", "class", "mb-24p", 3, "hasPadding", 4, "ngIf"], ["type", "flat", 1, "mb-24p", 3, "hasPadding"], [1, "secure"], [1, "secure__title", "pb-4p"], ["size", "medium", "name", "lock", "color", "black"], [1, "bold", "pl-8p", "pt-4p", 3, "ngClass", "innerHTML"], [1, "fdc-body2", "secure__description", 3, "innerHTML"], ["target", "_blank", 3, "inline", "type", "href", "preNavigationCondition", "icon", "iconSize", "iconLocation", "useMaxHeight", "preNavigationConditionFailCallback"]],
                template: function(t, i) {
                    1 & t && (e.\u0275\u0275elementStart(0, "app-centered-layout-container", 0),
                    e.\u0275\u0275template(1, ii, 15, 21, "div", 1),
                    e.\u0275\u0275pipe(2, "async"),
                    e.\u0275\u0275elementStart(3, "main", 2),
                    e.\u0275\u0275template(4, ni, 5, 4, "div", 3),
                    e.\u0275\u0275pipe(5, "async"),
                    e.\u0275\u0275elementStart(6, "div", 4)(7, "div", 5),
                    e.\u0275\u0275text(8, " \xa0 "),
                    e.\u0275\u0275elementEnd(),
                    e.\u0275\u0275elementStart(9, "div", 6),
                    e.\u0275\u0275template(10, ri, 1, 3, "app-login-form", 7),
                    e.\u0275\u0275template(11, ai, 11, 17, "fdc-card", 8),
                    e.\u0275\u0275elementEnd(),
                    e.\u0275\u0275elementStart(12, "div", 5),
                    e.\u0275\u0275text(13, " \xa0 "),
                    e.\u0275\u0275elementEnd(),
                    e.\u0275\u0275elementStart(14, "div", 5),
                    e.\u0275\u0275text(15, " \xa0 "),
                    e.\u0275\u0275elementEnd(),
                    e.\u0275\u0275template(16, si, 24, 43, "div", 9),
                    e.\u0275\u0275pipe(17, "async"),
                    e.\u0275\u0275elementEnd()()()),
                    2 & t && (e.\u0275\u0275property("useSticky", !1)("useMobileFooter", !0),
                    e.\u0275\u0275attribute("id", "login_page_container"),
                    e.\u0275\u0275advance(1),
                    e.\u0275\u0275property("ngIf", i.notification && !1 === e.\u0275\u0275pipeBind1(2, 8, i.isShowModal$)),
                    e.\u0275\u0275advance(3),
                    e.\u0275\u0275property("ngIf", !1 === e.\u0275\u0275pipeBind1(5, 10, i.isShowModal$)),
                    e.\u0275\u0275advance(6),
                    e.\u0275\u0275property("ngIf", i.shouldShowForm),
                    e.\u0275\u0275advance(1),
                    e.\u0275\u0275property("ngIf", i.showOlbbBox),
                    e.\u0275\u0275advance(5),
                    e.\u0275\u0275property("ngIf", !1 === e.\u0275\u0275pipeBind1(17, 12, i.isShowModal$)))
                },
                directives: [$.v, l.O5, R.B1, L.rH, U.YI, j.v, fe.N0, ye.oJ, ot, se.Ak, J.r0, l.mk, Jt.o],
                pipes: [l.Ov, h.X$, l.gd],
                styles: ['[_ngcontent-%COMP%]:root{--global-font-color: var(--bmo-slate);--global-bg-color: var(--bmo-albicant);--global-bg-color-raised: var(--brand-white);--global-link-color: var(--brand-pri);--global-link-color-over: var(--brand-pri-over);--global-focus-shadow-max-spread: 3px;--global-focus-shadow: 0 0 0 2px #bedceb, 0 0 0 var(--global-focus-shadow-max-spread) #005587;--global-focus-shadow-inset: inset 0 0 0 2px #bedceb, inset 0 0 0 var(--global-focus-shadow-max-spread) #005587;--global-font: "Heebo", sans-serif;--bmo-bluea: #0075be;--bmo-blue-active: #bce4fb;--bmo-ultramarine: #005587;--bmo-slate: #001928;--bmo-slate-50alpha: #00192880;--bmo-granite: #646c76;--bmo-grey: #929ba9;--bmo-light-grey: #d9dce1;--bmo-albicant: #f5f6f7;--bmo-white: #ffffff;--bmo-cerulean: #73c3eb;--bmo-azure: #e6f9fe;--bmo-grey-info: #efeff1;--bmo-negative: #c81414;--bmo-positive: #0b8224;--bmo-warning: #d07704;--bmo-disabled: #ececee;--bmo-reminder: #fdf1f1;--bmo-sky-blue: #009ec9;--bmo-sky-blue-lighter: #96dfee;--bmo-sky-blue-light: #00bddd;--bmo-sky-blue-dark: #0085ac;--bmo-sky-blue-darker: #00698b;--bmo-olive: #c3c070;--bmo-olive-lighter: #eae9ca;--bmo-olive-light: #d5d393;--bmo-olive-dark: #9b9f58;--bmo-olive-darker: #737e4e;--bmo-poolside: #2cbfc1;--bmo-poolside-lighter: #a7ebeb;--bmo-poolside-light: #36d5d4;--bmo-poolside-dark: #00a0a4;--bmo-poolside-darker: #007e85;--bmo-sunflower: #ffc700;--bmo-sunflower-lightest: #fffaeb;--bmo-sunflower-lighter: #ffecac;--bmo-sunflower-light: #ffd84d;--bmo-sunflower-dark: #d3a400;--bmo-sunflower-darker: #9d8200;--bmo-lilac: #6a88c3;--bmo-lilac-lighter: #c9d6ec;--bmo-lilac-light: #91abd9;--bmo-lilac-dark: #4d71a8;--bmo-lilac-darker: #375b89;--bmo-retrospect: #00e7b4;--bmo-retrospect-lighter: #8bfae4;--bmo-retrospect-light: #00f3c8;--bmo-retrospect-dark: #00c196;--bmo-retrospect-darker: #00977b;--bmo-orchid: #d061a1;--bmo-orchid-lighter: #f3d8e8;--bmo-orchid-light: #e29dc5;--bmo-orchid-dark: #b1357d;--bmo-orchid-darker: #762353;--bmo-ice-blue: #b1e5fe;--bmo-denim: #2a90cb;--bmo-goldenrod: #b67a02;--bmo-viridian: #558b6e;--bmo-violet: #4e345b;--bmo-coral: #e06775;--brand-pri: var(--bmo-bluea);--brand-pri-text: var(--bmo-bluea);--brand-pri-over: var(--bmo-ultramarine);--brand-dark-blue: var(--bmo-ultramarine);--brand-black: var(--bmo-slate);--brand-white: var(--bmo-white);--brand-highlight: var(--bmo-cerulean);--brand-grey: var(--bmo-grey);--brand-dark-grey: var(--bmo-granite);--brand-light-grey: var(--bmo-light-grey);--brand-lightest-grey: var(--bmo-albicant);--brand-pri-filter: brightness(0) saturate(100%) invert(30%) sepia(98%) saturate(1103%) hue-rotate(177deg) brightness(94%) contrast(102%);--brand-pri-filter-over: brightness(0) saturate(100%) brightness(70%) invert(19%) sepia(33%) saturate(6007%) hue-rotate(185deg) brightness(95%) contrast(101%);--brand-white-filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(350deg) brightness(105%) contrast(104%);--brand-dark-grey-filter: invert(44%) sepia(18%) saturate(261%) hue-rotate(173deg) brightness(89%) contrast(89%);--brand-dark-grey-filter-over: invert(44%) sepia(18%) saturate(261%) hue-rotate(173deg) brightness(92%) contrast(800%);--brand-goldenrod-filter: invert(63%) sepia(48%) saturate(7494%) hue-rotate(24deg) brightness(96%) contrast(98%);--brand-negative: var(--bmo-negative);--brand-negative-text: var(--bmo-negative);--brand-positive: var(--bmo-positive);--brand-positive-text: var(--bmo-positive-text);--brand-warning: var(--bmo-warning);--brand-positive-filter: invert(23%) invert(28%) sepia(89%) saturate(1542%) hue-rotate(114deg) brightness(89%) contrast(91%);--brand-negative-filter: invert(14%) sepia(96%) saturate(2849%) hue-rotate(349deg) brightness(108%) contrast(106%);--brand-warning-filter: invert(39%) sepia(83%) saturate(893%) hue-rotate(7deg) brightness(104%) contrast(97%);--brand-disabled: var(--bmo-disabled);--card-disabled-state: #ebecee;--disabled-bg: var(--bmo-disabled);--disabled-text: var(--bmo-granite);--disabled-icon-filter: invert(45%) sepia(12%) saturate(374%) hue-rotate(173deg) brightness(90%) contrast(93%);--primary-disabled-icon-filter: invert(45%) sepia(12%) saturate(374%) hue-rotate(173deg) brightness(90%) contrast(93%);--primary-bg-color: var(--brand-pri);--primary-bg-color-disabled: var(--disabled-bg);--primary-bg-color-over: var(--brand-dark-blue);--primary-text-color: var(--brand-white);--primary-text-color-disabled: var(--disabled-text);--primary-text-color-over: var(--brand-white);--primary-border-color: var(--brand-pri);--primary-border-color-over: var(--brand-dark-blue);--primary-border-color-disabled: var(--disabled-bg);--secondary-bg-color: transparent;--secondary-bg-color-disabled: transparent;--secondary-bg-color-over: var(--bmo-azure);--secondary-text-color: var(--brand-pri);--secondary-text-color-disabled: var(--disabled-text);--secondary-text-color-over: var(--brand-dark-blue);--secondary-border-color: var(--brand-pri);--secondary-border-color-over: var(--brand-dark-blue);--secondary-border-color-disabled: var(--disabled-bg);--tertiary-bg-color: transparent;--tertiary-bg-color-disabled: transparent;--tertiary-bg-color-over: var(--bmo-azure);--tertiary-text-color: var(--brand-pri);--tertiary-text-color-over: var(--brand-dark-blue);--tertiary-text-color-disabled: var(--disabled-text);--micro-text-color: var(--brand-pri);--micro-text-color-over: var(--brand-dark-blue);--micro-text-color-disabled: var(--disabled-text);--micro-bg-color-over: var(--bmo-azure)}[theme=dark][_ngcontent-%COMP%]{--global-font-color: #ffffff;--global-bg-color: #121212;--global-bg-color-raised: #292929;--global-link-color: var(--brand-pri);--global-link-color-over: var(--brand-pri-over);--global-focus-shadow: 0 0 0 2px #007587, 0 0 0 3px #ffffff;--global-font: "Heebo", sans-serif;--bmo-bluea: #82d5fc;--bmo-ultramarine: #bedceb;--bmo-slate: #ffffff;--bmo-granite: #f5f6f7;--bmo-grey: #d9dce1;--bmo-light-grey: #929ba9;--bmo-albicant: #646c76;--bmo-white: #121212;--bmo-cerulean: #005587;--bmo-azure: #0075be;--bmo-negative: #ff9090;--bmo-positive: #0b8224;--bmo-warning: #d07704;--bmo-disabled: #ececee;--brand-pri: var(--bmo-bluea);--brand-pri-text: var(--bmo-bluea);--brand-pri-over: var(--bmo-ultramarine);--brand-dark-blue: var(--bmo-ultramarine);--brand-black: var(--bmo-slate);--brand-white: var(--bmo-white);--brand-highlight: var(--bmo-cerulean);--brand-grey: var(--bmo-grey);--brand-dark-grey: var(--bmo-granite);--brand-light-grey: var(--bmo-light-grey);--brand-lightest-grey: var(--bmo-albicant);--brand-negative: var(--bmo-negative);--brand-negative-text: var(--bmo-negative);--brand-positive: var(--bmo-positive);--brand-positive-text: var(--bmo-positive-text);--brand-warning: var(--bmo-warning);--brand-pri-filter: invert(87%) sepia(5%) saturate(6619%) hue-rotate(169deg) brightness(98%) contrast(102%);--brand-pri-filter-over: invert(92%) sepia(2%) saturate(4486%) hue-rotate(171deg) brightness(99%) contrast(87%);--brand-white-filter: invert(9%) sepia(6%) saturate(7%) hue-rotate(314deg) brightness(102%) contrast(104%);--brand-dark-grey-filter: invert(44%) sepia(18%) saturate(261%) hue-rotate(173deg) brightness(89%) contrast(89%);--brand-dark-grey-filter-over: invert(44%) sepia(18%) saturate(261%) hue-rotate(173deg) brightness(100%) contrast(800%)}[_ngcontent-%COMP%]:root{--gutter-width: 32px;--each-grid-gutter: calc(var(--gutter-width) / 2);--md-each-grid-gutter: calc(var(--gutter-width) / 2.66);--default-screen-max: 1280px;--cdb-gutter-width: 24px;--cdb-sm-grid-gutter: 16px;--cdb-each-grid-gutter: calc(var(--cdb-gutter-width) / 2);--cdb-sm-each-grid-gutter: calc(var(--cdb-sm-grid-gutter) / 2);--zindex-sticky: 1020;--zindex-fixed: 1030;--zindex-overlay: 1040;--zindex-dropdown: 1045;--zindex-calendar: 1045;--zindex-modal: 1050;--zindex-popover-overlay: 1055;--zindex-popover: 1060;--zindex-popover-overlay-above: 1065;--zindex-popover-above: 1070;--zindex-loading-screen: 1075;--zindex-cta-overlay: 1080}[_ngcontent-%COMP%]:root{--button-border-radius: 28px;--button-border-radius-default: 32px;--button-border-radius-small: 28px;--button-border-radius-micro: 4px;--button-border-radius-icon: 4px;--button-padding: 0 32px;--button-font-size: 1.4rem}[_nghost-%COMP%]{background-color:#f5f6f7;background-color:var(--global-bg-color)}[_nghost-%COMP%]   .notifications[_ngcontent-%COMP%]{max-width:1016px;margin:0 auto}[_nghost-%COMP%]   .text--wrap[_ngcontent-%COMP%]{white-space:pre-wrap}[_nghost-%COMP%]   .login__title[_ngcontent-%COMP%]{display:flex;justify-content:center}[_nghost-%COMP%]   .login__title-icon[_ngcontent-%COMP%]{margin-top:2px;margin-right:8px}[_nghost-%COMP%]   .login__title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{line-height:3.2rem}[_nghost-%COMP%]   .banking[_ngcontent-%COMP%]{padding:0 16px}[_nghost-%COMP%]   .banking__description[_ngcontent-%COMP%]{line-height:2.4rem}[_nghost-%COMP%]   .banking__tray[_ngcontent-%COMP%]{padding:0 0 16px}[_nghost-%COMP%]   .secure[_ngcontent-%COMP%]{padding:16px 24px}[_nghost-%COMP%]   .secure__title[_ngcontent-%COMP%]{display:flex;align-items:center}[_nghost-%COMP%]   .secure__description[_ngcontent-%COMP%]{line-height:2.4rem}[_nghost-%COMP%]   .olbb[_ngcontent-%COMP%]{padding:16px;flex:1;margin-top:24px;display:flex;justify-content:center;align-items:center;margin-left:20px}[_nghost-%COMP%]   .tablet-gutter[_ngcontent-%COMP%]{display:none}@media only screen and (max-width: 1023px){[_nghost-%COMP%]   .tablet-gutter[_ngcontent-%COMP%]{display:flex}}@media only screen and (max-width: 600px){[_nghost-%COMP%]   .tablet-gutter[_ngcontent-%COMP%]{display:none}[_nghost-%COMP%]   .login__title[_ngcontent-%COMP%]{display:none}}'],
                changeDetection: 0
            }),
            n
        }
        )();
        var di = a(985)
          , ci = a(53694)
          , pi = a(15289);
        let Ie = (()=>{
            class n {
                constructor(t, i, r, s, d, u, E) {
                    this.store = t,
                    this.gateKeeperService = i,
                    this.activatedRoute = r,
                    this.sessionStorageService = s,
                    this.cookieService = d,
                    this.platformInfoService = u,
                    this.errorHandlerService = E
                }
                canActivate() {
                    return this.store.select(g.lK).pipe((0,
                    y.b)(({gateKeeperParams: t, deeplinkParams: i})=>{
                        t.params || i.params || this.getGatekeeperParams()
                    }
                    ), (0,
                    v.q)(1), (0,
                    G.w)(()=>(0,
                    H.of)(!0)), (0,
                    x.K)(()=>(0,
                    H.of)(!0)))
                }
                getGatekeeperParams() {
                    return this.sessionStorageService.get("gatekeeperParams").then(t=>{
                        t ? (this.storeDeeplinkParams(t.params),
                        this.storeGatekeeperParams(t)) : this.retrieveFromRemote()
                    }
                    )
                }
                retrieveFromRemote() {
                    this.gateKeeperService.getGateKeeperParams().pipe((0,
                    v.q)(1), (0,
                    y.b)(t=>{
                        if (this.platformInfoService.isBrowser) {
                            const r = this.activatedRoute.snapshot.queryParams || {};
                            let s = t || {
                                params: {}
                            };
                            s.params = Object.assign(Object.assign({}, s.params), r),
                            (0,
                            di.SI)(s.params) || this.storeDeeplinkParams(s.params),
                            this.storeGatekeeperParams(s)
                        }
                        const i = this.cookieService.get("cdbbossiteId");
                        this.cookieService.delete("cdbbossiteId", "/"),
                        console.log("cdbbossiteId cookie:", i, "deleted!")
                    }
                    ), (0,
                    x.K)(t=>{
                        const i = this.cookieService.get("cdbbossiteId");
                        return this.cookieService.delete("cdbbossiteId", "/"),
                        console.log("cdbbossiteId cookie:", i, "deleted!"),
                        this.errorHandlerService.checkAndHandleException(t),
                        X.E
                    }
                    )).subscribe()
                }
                storeGatekeeperParams(t) {
                    this.store.dispatch((0,
                    f.fm)({
                        data: t
                    })),
                    this.sessionStorageService.remove("gatekeeperParams")
                }
                storeDeeplinkParams(t) {
                    this.store.dispatch((0,
                    f.go)({
                        queryString: location.search,
                        path: location.pathname,
                        params: t
                    }))
                }
            }
            return n.\u0275fac = function(t) {
                return new (t || n)(e.\u0275\u0275inject(M.yh),e.\u0275\u0275inject(pe),e.\u0275\u0275inject(L.gz),e.\u0275\u0275inject(Qe.Gf),e.\u0275\u0275inject(ci.N),e.\u0275\u0275inject(ae.t),e.\u0275\u0275inject(pi.q))
            }
            ,
            n.\u0275prov = e.\u0275\u0275defineInjectable({
                token: n,
                factory: n.\u0275fac,
                providedIn: "root"
            }),
            n
        }
        )();
        var le = a(81008)
          , _e = a(10947);
        const mi = function(n, o, t) {
            return {
                required: n,
                incorrectAnswer: o,
                pattern: t
            }
        };
        function ui(n, o) {
            if (1 & n) {
                const t = e.\u0275\u0275getCurrentView();
                e.\u0275\u0275elementStart(0, "fdc-input", 13),
                e.\u0275\u0275listener("valueChange", function() {
                    return e.\u0275\u0275restoreView(t),
                    e.\u0275\u0275nextContext().onAnswerChange()
                }),
                e.\u0275\u0275pipe(1, "translate"),
                e.\u0275\u0275pipe(2, "translate"),
                e.\u0275\u0275pipe(3, "translate"),
                e.\u0275\u0275elementEnd()
            }
            if (2 & n) {
                const t = o.ngIf;
                e.\u0275\u0275property("errorMessages", e.\u0275\u0275pureFunction3(9, mi, e.\u0275\u0275pipeBind1(1, 3, "APP.MFA_CHALLENGE_QUESTION.LEFT_BLANK"), e.\u0275\u0275pipeBind1(2, 5, "APP.MFA_CHALLENGE_QUESTION.INCORRECT_ANSWER"), e.\u0275\u0275pipeBind1(3, 7, "APP.MFA_ENROLLMENT.STEPS.STEP_1.ERROR_HANDLING.ANSWER_SPECIAL_CHAR")))("label", t.challengeQuestion)("analytics", "mfa answer input")
            }
        }
        let hi = (()=>{
            class n extends ((0,
            Ee.L)()) {
                constructor(t, i, r) {
                    super(),
                    this.fb = t,
                    this.store = i,
                    this.loginService = r,
                    this.isLoading = !1,
                    this.hasReturnedToLogin = !1,
                    this.INITIAL_FORM_STATE = {
                        mfaChallengeAnswer: ["", [p.Validators.required, this.failedQuestionValidator(), p.Validators.pattern(Ae.F.ALPHANUMERIC_WITH_FRENCH_SPACE_ONLY)]],
                        trustThisDevice: !0
                    },
                    this.isChallengeQuestionFailed = !1,
                    this.userMfaDetails$ = this.store.select(g.hp),
                    this.mfaAction$ = this.store.select(g.a4),
                    this.challengeQuestionForm = this.fb.group(this.INITIAL_FORM_STATE)
                }
                ngOnInit() {
                    let t = this.userMfaDetails$.pipe().subscribe(i=>{
                        this.onChallengeQuestion(i)
                    }
                    );
                    this.subscriptions.add(t),
                    this.subscriptions.add(this.mfaAction$.pipe((0,
                    v.q)(1)).subscribe(i=>{
                        i || (this.store.dispatch((0,
                        T.gd)({})),
                        this.hasReturnedToLogin = !0)
                    }
                    ))
                }
                ionViewWillEnter() {
                    this.subscriptions.add(this.loginService.redirectToLogin().subscribe(()=>this.hasReturnedToLogin = !0))
                }
                ionViewDidEnter() {
                    this.store.dispatch((0,
                    V.nN)())
                }
                ionViewWillLeave() {
                    this.isLoading = !1,
                    this.challengeQuestionForm.reset({
                        mfaChallengeAnswer: "",
                        trustThisDevice: !0
                    }),
                    (0,
                    le.Xn)(window.location.pathname) && !this.hasReturnedToLogin && this.store.dispatch((0,
                    T.gd)({})),
                    this.hasReturnedToLogin = !1
                }
                failedQuestionValidator() {
                    return t=>this.isChallengeQuestionFailed ? {
                        incorrectAnswer: t.value
                    } : null
                }
                onAnswerChange() {
                    this.store.dispatch(f.gl())
                }
                onChallengeQuestion(t) {
                    this.isChallengeQuestionFailed = t.challengeQuestionFailed,
                    this.isChallengeQuestionFailed && (this.isLoading = !1,
                    this.challengeQuestionForm.controls.mfaChallengeAnswer.setValue(""),
                    ee.f.validateAllFormFields(this.challengeQuestionForm))
                }
                onSubmit() {
                    this.challengeQuestionForm.invalid ? ee.f.validateAllFormFields(this.challengeQuestionForm) : this.userMfaDetails$.pipe((0,
                    v.q)(1)).subscribe(t=>{
                        this.isLoading = !0,
                        t.isBiometricAuthentication ? this.invokeBiometricAuthenticateAction(t) : this.invokeAuthenticateAction(t)
                    }
                    )
                }
                invokeAuthenticateAction(t) {
                    this.store.dispatch(f.ob({
                        credential: t.credential,
                        mfaChallengeAnswer: this.challengeQuestionForm.controls.mfaChallengeAnswer.value,
                        trustThisDevice: this.challengeQuestionForm.controls.trustThisDevice.value
                    }))
                }
                invokeBiometricAuthenticateAction(t) {
                    this.store.dispatch(f.Ki({
                        credential: t.credential,
                        mfaChallengeAnswer: this.challengeQuestionForm.controls.mfaChallengeAnswer.value,
                        trustThisDevice: this.challengeQuestionForm.controls.trustThisDevice.value
                    }))
                }
            }
            return n.\u0275fac = function(t) {
                return new (t || n)(e.\u0275\u0275directiveInject(p.FormBuilder),e.\u0275\u0275directiveInject(M.yh),e.\u0275\u0275directiveInject(_e.r))
            }
            ,
            n.\u0275cmp = e.\u0275\u0275defineComponent({
                type: n,
                selectors: [["app-mfa-challenge-question"]],
                features: [e.\u0275\u0275InheritDefinitionFeature],
                decls: 21,
                vars: 29,
                consts: [[3, "useMobileFooter"], [1, "fdc-row", "mb-80p"], [1, "mfa-container-width", "fdc-sm-col-4"], [1, "fdc-heading1", "bold", "mt-40p", "mb-32p", 3, "innerHTML"], [1, "fdc-body1", "mb-16p", 3, "innerHTML"], [3, "id", "hasPadding"], [3, "formGroup", "ngSubmit"], [1, "mt-32p", "mb-56p", "ml-32p", "mr-mfa"], ["id", "mcq-answer", "type", "text", "formControlName", "mfaChallengeAnswer", "maxLength", "50", 3, "errorMessages", "label", "analytics", "valueChange", 4, "ngIf"], [1, "mb-32p"], ["name", "checkbox", "formControlName", "trustThisDevice", 3, "id", "analytics"], [1, "footer-btn", "mb-32p"], [3, "isCentered", "isLoading", "loadingLabel", "analytics", "trackDynatrace"], ["id", "mcq-answer", "type", "text", "formControlName", "mfaChallengeAnswer", "maxLength", "50", 3, "errorMessages", "label", "analytics", "valueChange"]],
                template: function(t, i) {
                    1 & t && (e.\u0275\u0275elementStart(0, "app-centered-layout-container", 0)(1, "div", 1)(2, "div", 2),
                    e.\u0275\u0275element(3, "h1", 3),
                    e.\u0275\u0275pipe(4, "translate"),
                    e.\u0275\u0275element(5, "p", 4),
                    e.\u0275\u0275pipe(6, "translate"),
                    e.\u0275\u0275elementStart(7, "fdc-card", 5)(8, "form", 6),
                    e.\u0275\u0275listener("ngSubmit", function() {
                        return i.onSubmit()
                    }),
                    e.\u0275\u0275elementStart(9, "div", 7),
                    e.\u0275\u0275template(10, ui, 4, 13, "fdc-input", 8),
                    e.\u0275\u0275pipe(11, "async"),
                    e.\u0275\u0275elementStart(12, "div", 9)(13, "fdc-checkbox-refresh", 10),
                    e.\u0275\u0275text(14),
                    e.\u0275\u0275pipe(15, "translate"),
                    e.\u0275\u0275elementEnd()()(),
                    e.\u0275\u0275elementStart(16, "div", 11)(17, "fdc-button", 12),
                    e.\u0275\u0275pipe(18, "translate"),
                    e.\u0275\u0275text(19),
                    e.\u0275\u0275pipe(20, "translate"),
                    e.\u0275\u0275elementEnd()()()()()()()),
                    2 & t && (e.\u0275\u0275property("useMobileFooter", !0),
                    e.\u0275\u0275advance(3),
                    e.\u0275\u0275property("innerHTML", e.\u0275\u0275pipeBind1(4, 17, "APP.MFA_CHALLENGE_QUESTION.TITLE"), e.\u0275\u0275sanitizeHtml),
                    e.\u0275\u0275advance(2),
                    e.\u0275\u0275property("innerHTML", e.\u0275\u0275pipeBind1(6, 19, "APP.MFA_CHALLENGE_QUESTION.SECONDARY_MESSAGE"), e.\u0275\u0275sanitizeHtml),
                    e.\u0275\u0275advance(2),
                    e.\u0275\u0275property("id", "mcq-card")("hasPadding", !1),
                    e.\u0275\u0275advance(1),
                    e.\u0275\u0275property("formGroup", i.challengeQuestionForm),
                    e.\u0275\u0275advance(2),
                    e.\u0275\u0275property("ngIf", e.\u0275\u0275pipeBind1(11, 21, i.userMfaDetails$)),
                    e.\u0275\u0275advance(3),
                    e.\u0275\u0275property("id", "mcq-trust-device")("analytics", "mfa trust-device checkbox"),
                    e.\u0275\u0275advance(1),
                    e.\u0275\u0275textInterpolate1(" ", e.\u0275\u0275pipeBind1(15, 23, "APP.MFA_CHALLENGE_QUESTION.TRUST_DEVICE"), " "),
                    e.\u0275\u0275advance(3),
                    e.\u0275\u0275property("isCentered", !0)("isLoading", i.isLoading)("loadingLabel", e.\u0275\u0275pipeBind1(18, 25, "APP.MFA_CHALLENGE_QUESTION.LOADING_LABEL"))("analytics", "mfa submit button")("trackDynatrace", !0),
                    e.\u0275\u0275attribute("id", "mcq-submit"),
                    e.\u0275\u0275advance(2),
                    e.\u0275\u0275textInterpolate1(" ", e.\u0275\u0275pipeBind1(20, 27, "APP.MFA_CHALLENGE_QUESTION.CTA"), " "))
                },
                directives: [$.v, se.Ak, p.\u0275NgNoValidate, p.NgControlStatusGroup, p.FormGroupDirective, l.O5, oe.a, p.NgControlStatus, p.FormControlName, j.v, ue.z, J.r0],
                pipes: [h.X$, l.Ov],
                styles: ["[_nghost-%COMP%]   .footer-btn[_ngcontent-%COMP%]{display:flex;justify-content:center}@media only screen and (min-width: 0px) and (max-width: 599px){[_nghost-%COMP%]   .footer-btn[_ngcontent-%COMP%]{display:flex;justify-content:center}[_nghost-%COMP%]   .mfa-container-width[_ngcontent-%COMP%]{flex:0 0 100%;max-width:100%}[_nghost-%COMP%]   .mr-mfa[_ngcontent-%COMP%]{margin-right:32px}}@media only screen and (min-width: 600px) and (max-width: 1023px){[_nghost-%COMP%]   .takeover-container-wrapper[_ngcontent-%COMP%]{margin-left:24px;margin-right:24px}[_nghost-%COMP%]   .mfa-container-width[_ngcontent-%COMP%]{flex:0 0 75%;max-width:75%}[_nghost-%COMP%]   .footer-btn[_ngcontent-%COMP%]{justify-content:center}[_nghost-%COMP%]   .mr-mfa[_ngcontent-%COMP%]{margin-right:209px}}@media only screen and (min-width: 1024px){[_nghost-%COMP%]   .footer-btn[_ngcontent-%COMP%]{justify-content:center}[_nghost-%COMP%]   .mfa-container-width[_ngcontent-%COMP%]{flex:0 0 600px;max-width:600px}[_nghost-%COMP%]   .mr-mfa[_ngcontent-%COMP%]{margin-right:209px}}"],
                changeDetection: 0
            }),
            n
        }
        )();
        var te = a(70699);
        let gi = (()=>{
            class n extends ((0,
            A.Q)()) {
                constructor(t, i, r) {
                    super(),
                    this.store = t,
                    this.cdr = i,
                    this.translate = r,
                    this.isLoading = !1,
                    this.mfaAction$ = this.store.select(g.a4),
                    this.hasReturnedToLogin = !1,
                    this.ionSubscriptions.add(this.mfaAction$.pipe((0,
                    v.q)(1)).subscribe(s=>{
                        s !== te._.NOT_ENROLLED_IN_MFA && (this.store.dispatch((0,
                        T.gd)({})),
                        this.hasReturnedToLogin = !0)
                    }
                    )),
                    this.currentLanguage$ = r.getCurrentLanguageStream()
                }
                ionViewDidLeave() {
                    this.isLoading = !1,
                    (0,
                    le.Xn)(window.location.pathname) && !this.hasReturnedToLogin && this.store.dispatch((0,
                    T.gd)({})),
                    this.hasReturnedToLogin = !1,
                    this.cdr.markForCheck(),
                    super.ionViewDidLeave()
                }
                ionViewDidEnter() {
                    this.store.dispatch((0,
                    V.nN)())
                }
                onClick() {
                    this.isLoading = !0,
                    this.store.dispatch(f.Et())
                }
            }
            return n.\u0275fac = function(t) {
                return new (t || n)(e.\u0275\u0275directiveInject(M.yh),e.\u0275\u0275directiveInject(e.ChangeDetectorRef),e.\u0275\u0275directiveInject(B.fA))
            }
            ,
            n.\u0275cmp = e.\u0275\u0275defineComponent({
                type: n,
                selectors: [["app-mfa-enrollment-intro"]],
                features: [e.\u0275\u0275InheritDefinitionFeature],
                decls: 13,
                vars: 19,
                consts: [[3, "useMobileFooter"], [1, "fdc-row", "mt-40p", "mb-56p"], [1, "fdc-col-6", "fdc-md-col-12"], [3, "hasPadding"], [1, "mb-32p", "ml-24p", "mr-24p"], [1, "fdc-heading1", "bold", "mt-32p", "mb-16p", 3, "innerHTML"], [1, "fdc-body1", "mb-24p", 3, "innerHTML"], [3, "isCentered", "isLoading", "analytics", "trackDynatrace", "languageFormat", "buttonClick"], [1, "btn-text", 3, "innerHTML"]],
                template: function(t, i) {
                    1 & t && (e.\u0275\u0275elementStart(0, "app-centered-layout-container", 0)(1, "div", 1)(2, "div", 2)(3, "fdc-card", 3)(4, "div", 4),
                    e.\u0275\u0275element(5, "h1", 5),
                    e.\u0275\u0275pipe(6, "translate"),
                    e.\u0275\u0275element(7, "p", 6),
                    e.\u0275\u0275pipe(8, "translate"),
                    e.\u0275\u0275elementStart(9, "fdc-button", 7),
                    e.\u0275\u0275listener("buttonClick", function() {
                        return i.onClick()
                    }),
                    e.\u0275\u0275pipe(10, "async"),
                    e.\u0275\u0275element(11, "span", 8),
                    e.\u0275\u0275pipe(12, "translate"),
                    e.\u0275\u0275elementEnd()()()()()()),
                    2 & t && (e.\u0275\u0275property("useMobileFooter", !0),
                    e.\u0275\u0275advance(3),
                    e.\u0275\u0275property("hasPadding", !1),
                    e.\u0275\u0275advance(2),
                    e.\u0275\u0275property("innerHTML", e.\u0275\u0275pipeBind1(6, 11, "APP.MFA_ENROLLMENT.PAGE_TITLE"), e.\u0275\u0275sanitizeHtml),
                    e.\u0275\u0275advance(2),
                    e.\u0275\u0275property("innerHTML", e.\u0275\u0275pipeBind1(8, 13, "APP.MFA_ENROLLMENT.SECURITY_SETTINGS_EXPLANATION"), e.\u0275\u0275sanitizeHtml),
                    e.\u0275\u0275advance(2),
                    e.\u0275\u0275property("isCentered", !0)("isLoading", i.isLoading)("analytics", "mfa-intro enroll button")("trackDynatrace", !0)("languageFormat", e.\u0275\u0275pipeBind1(10, 15, i.currentLanguage$)),
                    e.\u0275\u0275attribute("id", "me-get-started"),
                    e.\u0275\u0275advance(2),
                    e.\u0275\u0275property("innerHTML", e.\u0275\u0275pipeBind1(12, 17, "APP.MFA_ENROLLMENT.CTA"), e.\u0275\u0275sanitizeHtml))
                },
                directives: [$.v, se.Ak, J.r0, j.v],
                pipes: [h.X$, l.Ov],
                styles: ["[_nghost-%COMP%]   .btn-text[_ngcontent-%COMP%]{display:block;margin:1.4rem 0;line-height:2.4rem;white-space:normal;white-space:initial}"],
                changeDetection: 0
            }),
            n
        }
        )();
        var Oe = a(79005)
          , fi = a(96429)
          , vi = a(95156)
          , he = a(39609);
        function Ei(n, o) {
            if (1 & n && e.\u0275\u0275element(0, "fdc-dropdown-item", 21),
            2 & n) {
                const t = o.$implicit;
                e.\u0275\u0275property("value", t.id)("label", t.text)
            }
        }
        function _i(n, o) {
            if (1 & n && e.\u0275\u0275element(0, "fdc-dropdown-item", 21),
            2 & n) {
                const t = o.$implicit;
                e.\u0275\u0275property("value", t.id)("label", t.text)
            }
        }
        function bi(n, o) {
            if (1 & n && e.\u0275\u0275element(0, "fdc-dropdown-item", 21),
            2 & n) {
                const t = o.$implicit;
                e.\u0275\u0275property("value", t.id)("label", t.text)
            }
        }
        function Si(n, o) {
            1 & n && (e.\u0275\u0275elementStart(0, "div"),
            e.\u0275\u0275element(1, "hr", 22)(2, "h2", 23),
            e.\u0275\u0275pipe(3, "translate"),
            e.\u0275\u0275element(4, "p", 24),
            e.\u0275\u0275pipe(5, "translate"),
            e.\u0275\u0275elementStart(6, "fdc-checkbox-refresh", 25),
            e.\u0275\u0275text(7),
            e.\u0275\u0275pipe(8, "translate"),
            e.\u0275\u0275elementEnd()()),
            2 & n && (e.\u0275\u0275advance(2),
            e.\u0275\u0275property("innerHTML", e.\u0275\u0275pipeBind1(3, 5, "APP.MFA_ENROLLMENT.STEPS.STEP_1.BIND_DEVICE_HEADER"), e.\u0275\u0275sanitizeHtml),
            e.\u0275\u0275advance(2),
            e.\u0275\u0275property("innerHTML", e.\u0275\u0275pipeBind1(5, 7, "APP.MFA_ENROLLMENT.STEPS.STEP_1.BIND_DEVICE_TEXT"), e.\u0275\u0275sanitizeHtml),
            e.\u0275\u0275advance(2),
            e.\u0275\u0275property("id", "mes-trust-device")("analytics", "mfa-enrollment trust-device checkbox"),
            e.\u0275\u0275advance(1),
            e.\u0275\u0275textInterpolate1("", e.\u0275\u0275pipeBind1(8, 9, "APP.MFA_CHALLENGE_QUESTION.TRUST_DEVICE"), " "))
        }
        const Ne = function(n, o) {
            return {
                required: n,
                duplicate: o
            }
        }
          , Be = function(n, o, t) {
            return {
                required: n,
                minlength: o,
                pattern: t
            }
        };
        function Ci(n, o) {
            if (1 & n && (e.\u0275\u0275elementStart(0, "div", 5)(1, "div", 6),
            e.\u0275\u0275element(2, "h2", 7),
            e.\u0275\u0275pipe(3, "translate"),
            e.\u0275\u0275elementStart(4, "div", 8)(5, "fdc-dropdown", 9),
            e.\u0275\u0275pipe(6, "translate"),
            e.\u0275\u0275pipe(7, "translate"),
            e.\u0275\u0275pipe(8, "translate"),
            e.\u0275\u0275element(9, "fdc-dropdown-item", 10),
            e.\u0275\u0275pipe(10, "translate"),
            e.\u0275\u0275template(11, Ei, 1, 2, "fdc-dropdown-item", 11),
            e.\u0275\u0275elementEnd()(),
            e.\u0275\u0275elementStart(12, "div", 12),
            e.\u0275\u0275element(13, "fdc-input", 13),
            e.\u0275\u0275pipe(14, "translate"),
            e.\u0275\u0275pipe(15, "translate"),
            e.\u0275\u0275pipe(16, "translate"),
            e.\u0275\u0275pipe(17, "translate"),
            e.\u0275\u0275elementEnd(),
            e.\u0275\u0275elementStart(18, "div", 8)(19, "fdc-dropdown", 14),
            e.\u0275\u0275pipe(20, "translate"),
            e.\u0275\u0275pipe(21, "translate"),
            e.\u0275\u0275pipe(22, "translate"),
            e.\u0275\u0275element(23, "fdc-dropdown-item", 10),
            e.\u0275\u0275pipe(24, "translate"),
            e.\u0275\u0275template(25, _i, 1, 2, "fdc-dropdown-item", 11),
            e.\u0275\u0275elementEnd()(),
            e.\u0275\u0275elementStart(26, "div", 12),
            e.\u0275\u0275element(27, "fdc-input", 15),
            e.\u0275\u0275pipe(28, "translate"),
            e.\u0275\u0275pipe(29, "translate"),
            e.\u0275\u0275pipe(30, "translate"),
            e.\u0275\u0275pipe(31, "translate"),
            e.\u0275\u0275elementEnd(),
            e.\u0275\u0275elementStart(32, "div", 8)(33, "fdc-dropdown", 16),
            e.\u0275\u0275pipe(34, "translate"),
            e.\u0275\u0275pipe(35, "translate"),
            e.\u0275\u0275pipe(36, "translate"),
            e.\u0275\u0275element(37, "fdc-dropdown-item", 10),
            e.\u0275\u0275pipe(38, "translate"),
            e.\u0275\u0275template(39, bi, 1, 2, "fdc-dropdown-item", 11),
            e.\u0275\u0275elementEnd()(),
            e.\u0275\u0275elementStart(40, "div"),
            e.\u0275\u0275element(41, "fdc-input", 17),
            e.\u0275\u0275pipe(42, "translate"),
            e.\u0275\u0275pipe(43, "translate"),
            e.\u0275\u0275pipe(44, "translate"),
            e.\u0275\u0275pipe(45, "translate"),
            e.\u0275\u0275elementEnd(),
            e.\u0275\u0275template(46, Si, 9, 11, "div", 18),
            e.\u0275\u0275elementEnd(),
            e.\u0275\u0275elementStart(47, "div", 19),
            e.\u0275\u0275element(48, "img", 20),
            e.\u0275\u0275elementEnd()()),
            2 & n) {
                const t = e.\u0275\u0275nextContext();
                e.\u0275\u0275advance(2),
                e.\u0275\u0275property("innerHTML", e.\u0275\u0275pipeBind1(3, 35, "APP.MFA_ENROLLMENT.STEPS.STEP_1.QUESTION_HEADER"), e.\u0275\u0275sanitizeHtml),
                e.\u0275\u0275advance(3),
                e.\u0275\u0275property("label", e.\u0275\u0275pipeBind1(6, 37, "APP.MFA_ENROLLMENT.STEPS.STEP_1.QUESTION_1"))("errorMessages", e.\u0275\u0275pureFunction2(85, Ne, e.\u0275\u0275pipeBind1(7, 39, "APP.MFA_ENROLLMENT.STEPS.STEP_1.ERROR_HANDLING.QUESTION_MANDATORY"), e.\u0275\u0275pipeBind1(8, 41, "APP.MFA_ENROLLMENT.STEPS.STEP_1.ERROR_HANDLING.DUPLICATE_QUESTION")))("analytics", "mfa-enrollment question-1 dropdown"),
                e.\u0275\u0275attribute("id", "mes-dd1"),
                e.\u0275\u0275advance(4),
                e.\u0275\u0275property("label", e.\u0275\u0275pipeBind1(10, 43, "APP.MFA_ENROLLMENT.STEPS.STEP_1.DROPDOWN_HELPER_TEXT")),
                e.\u0275\u0275advance(2),
                e.\u0275\u0275property("ngForOf", t.mfaEnrollmentQuestions.listOfQuestions1),
                e.\u0275\u0275advance(2),
                e.\u0275\u0275property("errorMessages", e.\u0275\u0275pureFunction3(88, Be, e.\u0275\u0275pipeBind1(14, 45, "APP.MFA_ENROLLMENT.STEPS.STEP_1.ERROR_HANDLING.ANSWER_MANDATORY"), e.\u0275\u0275pipeBind1(15, 47, "APP.MFA_ENROLLMENT.STEPS.STEP_1.ERROR_HANDLING.ANSWER_LENGTH"), e.\u0275\u0275pipeBind1(16, 49, "APP.MFA_ENROLLMENT.STEPS.STEP_1.ERROR_HANDLING.ANSWER_SPECIAL_CHAR")))("showAllMessages", !0)("label", e.\u0275\u0275pipeBind1(17, 51, "APP.MFA_ENROLLMENT.STEPS.STEP_1.ANSWER1_LABEL"))("analytics", "mfa-enrollment answer-1 input")("maxLength", 30),
                e.\u0275\u0275advance(6),
                e.\u0275\u0275property("label", e.\u0275\u0275pipeBind1(20, 53, "APP.MFA_ENROLLMENT.STEPS.STEP_1.QUESTION_2"))("errorMessages", e.\u0275\u0275pureFunction2(92, Ne, e.\u0275\u0275pipeBind1(21, 55, "APP.MFA_ENROLLMENT.STEPS.STEP_1.ERROR_HANDLING.QUESTION_MANDATORY"), e.\u0275\u0275pipeBind1(22, 57, "APP.MFA_ENROLLMENT.STEPS.STEP_1.ERROR_HANDLING.DUPLICATE_QUESTION")))("analytics", "mfa-enrollment question-2 dropdown"),
                e.\u0275\u0275attribute("id", "mes-dd2"),
                e.\u0275\u0275advance(4),
                e.\u0275\u0275property("label", e.\u0275\u0275pipeBind1(24, 59, "APP.MFA_ENROLLMENT.STEPS.STEP_1.DROPDOWN_HELPER_TEXT")),
                e.\u0275\u0275advance(2),
                e.\u0275\u0275property("ngForOf", t.mfaEnrollmentQuestions.listOfQuestions2),
                e.\u0275\u0275advance(2),
                e.\u0275\u0275property("errorMessages", e.\u0275\u0275pureFunction3(95, Be, e.\u0275\u0275pipeBind1(28, 61, "APP.MFA_ENROLLMENT.STEPS.STEP_1.ERROR_HANDLING.ANSWER_MANDATORY"), e.\u0275\u0275pipeBind1(29, 63, "APP.MFA_ENROLLMENT.STEPS.STEP_1.ERROR_HANDLING.ANSWER_LENGTH"), e.\u0275\u0275pipeBind1(30, 65, "APP.MFA_ENROLLMENT.STEPS.STEP_1.ERROR_HANDLING.ANSWER_SPECIAL_CHAR")))("showAllMessages", !0)("label", e.\u0275\u0275pipeBind1(31, 67, "APP.MFA_ENROLLMENT.STEPS.STEP_1.ANSWER1_LABEL"))("analytics", "mfa-enrollment answer-2 input")("maxLength", 30),
                e.\u0275\u0275advance(6),
                e.\u0275\u0275property("label", e.\u0275\u0275pipeBind1(34, 69, "APP.MFA_ENROLLMENT.STEPS.STEP_1.QUESTION_3"))("errorMessages", e.\u0275\u0275pureFunction2(99, Ne, e.\u0275\u0275pipeBind1(35, 71, "APP.MFA_ENROLLMENT.STEPS.STEP_1.ERROR_HANDLING.QUESTION_MANDATORY"), e.\u0275\u0275pipeBind1(36, 73, "APP.MFA_ENROLLMENT.STEPS.STEP_1.ERROR_HANDLING.DUPLICATE_QUESTION")))("analytics", "mfa-enrollment question-3 dropdown"),
                e.\u0275\u0275attribute("id", "mes-dd3"),
                e.\u0275\u0275advance(4),
                e.\u0275\u0275property("label", e.\u0275\u0275pipeBind1(38, 75, "APP.MFA_ENROLLMENT.STEPS.STEP_1.DROPDOWN_HELPER_TEXT")),
                e.\u0275\u0275advance(2),
                e.\u0275\u0275property("ngForOf", t.mfaEnrollmentQuestions.listOfQuestions3),
                e.\u0275\u0275advance(2),
                e.\u0275\u0275property("errorMessages", e.\u0275\u0275pureFunction3(102, Be, e.\u0275\u0275pipeBind1(42, 77, "APP.MFA_ENROLLMENT.STEPS.STEP_1.ERROR_HANDLING.ANSWER_MANDATORY"), e.\u0275\u0275pipeBind1(43, 79, "APP.MFA_ENROLLMENT.STEPS.STEP_1.ERROR_HANDLING.ANSWER_LENGTH"), e.\u0275\u0275pipeBind1(44, 81, "APP.MFA_ENROLLMENT.STEPS.STEP_1.ERROR_HANDLING.ANSWER_SPECIAL_CHAR")))("showAllMessages", !0)("label", e.\u0275\u0275pipeBind1(45, 83, "APP.MFA_ENROLLMENT.STEPS.STEP_1.ANSWER1_LABEL"))("analytics", "mfa-enrollment answer-3 input")("maxLength", 30),
                e.\u0275\u0275advance(5),
                e.\u0275\u0275property("ngIf", !t.isPartiallyEnrolled)
            }
        }
        function Ti(n, o) {
            1 & n && (e.\u0275\u0275elementStart(0, "div"),
            e.\u0275\u0275element(1, "hr", 31),
            e.\u0275\u0275elementEnd())
        }
        function Pi(n, o) {
            if (1 & n && (e.\u0275\u0275elementStart(0, "div"),
            e.\u0275\u0275element(1, "p", 28),
            e.\u0275\u0275pipe(2, "translate"),
            e.\u0275\u0275element(3, "p", 32),
            e.\u0275\u0275pipe(4, "translate"),
            e.\u0275\u0275elementEnd()),
            2 & n) {
                const t = e.\u0275\u0275nextContext(2);
                e.\u0275\u0275advance(1),
                e.\u0275\u0275property("innerHTML", e.\u0275\u0275pipeBind1(2, 2, "APP.MFA_ENROLLMENT.STEPS.STEP_2.BIND_DEVICE_OPTION"), e.\u0275\u0275sanitizeHtml),
                e.\u0275\u0275advance(2),
                e.\u0275\u0275property("innerHTML", e.\u0275\u0275pipeBind1(4, 4, null != t.form.value && t.form.value.trustThisDevice ? "APP.MFA_ENROLLMENT.STEPS.STEP_2.BIND_DEVICE_OPTION_YES" : "APP.MFA_ENROLLMENT.STEPS.STEP_2.BIND_DEVICE_OPTION_NO"), e.\u0275\u0275sanitizeHtml)
            }
        }
        function yi(n, o) {
            if (1 & n && (e.\u0275\u0275elementStart(0, "div", 26)(1, "div", 27),
            e.\u0275\u0275element(2, "p", 28),
            e.\u0275\u0275pipe(3, "translate"),
            e.\u0275\u0275element(4, "p", 29)(5, "p", 28),
            e.\u0275\u0275pipe(6, "translate"),
            e.\u0275\u0275element(7, "p", 29)(8, "p", 28),
            e.\u0275\u0275pipe(9, "translate"),
            e.\u0275\u0275element(10, "p", 29)(11, "p", 28),
            e.\u0275\u0275pipe(12, "translate"),
            e.\u0275\u0275element(13, "p", 29)(14, "p", 28),
            e.\u0275\u0275pipe(15, "translate"),
            e.\u0275\u0275element(16, "p", 29)(17, "p", 28),
            e.\u0275\u0275pipe(18, "translate"),
            e.\u0275\u0275element(19, "p", 29),
            e.\u0275\u0275template(20, Ti, 2, 0, "div", 18),
            e.\u0275\u0275elementStart(21, "div", 30),
            e.\u0275\u0275template(22, Pi, 5, 6, "div", 18),
            e.\u0275\u0275elementEnd()(),
            e.\u0275\u0275elementStart(23, "div", 19),
            e.\u0275\u0275element(24, "img", 20),
            e.\u0275\u0275elementEnd()()),
            2 & n) {
                const t = e.\u0275\u0275nextContext();
                e.\u0275\u0275advance(2),
                e.\u0275\u0275property("innerHTML", e.\u0275\u0275pipeBind1(3, 14, "APP.MFA_ENROLLMENT.STEPS.STEP_2.QUESTION_1_LABEL"), e.\u0275\u0275sanitizeHtml),
                e.\u0275\u0275advance(2),
                e.\u0275\u0275property("innerHTML", t.getQuestionFromId(t.form.value.question1), e.\u0275\u0275sanitizeHtml),
                e.\u0275\u0275advance(1),
                e.\u0275\u0275property("innerHTML", e.\u0275\u0275pipeBind1(6, 16, "APP.MFA_ENROLLMENT.STEPS.STEP_2.ANSWER_1_LABEL"), e.\u0275\u0275sanitizeHtml),
                e.\u0275\u0275advance(2),
                e.\u0275\u0275property("innerHTML", t.form.value.answer1, e.\u0275\u0275sanitizeHtml),
                e.\u0275\u0275advance(1),
                e.\u0275\u0275property("innerHTML", e.\u0275\u0275pipeBind1(9, 18, "APP.MFA_ENROLLMENT.STEPS.STEP_2.QUESTION_2_LABEL"), e.\u0275\u0275sanitizeHtml),
                e.\u0275\u0275advance(2),
                e.\u0275\u0275property("innerHTML", t.getQuestionFromId(t.form.value.question2), e.\u0275\u0275sanitizeHtml),
                e.\u0275\u0275advance(1),
                e.\u0275\u0275property("innerHTML", e.\u0275\u0275pipeBind1(12, 20, "APP.MFA_ENROLLMENT.STEPS.STEP_2.ANSWER_2_LABEL"), e.\u0275\u0275sanitizeHtml),
                e.\u0275\u0275advance(2),
                e.\u0275\u0275property("innerHTML", t.form.value.answer2, e.\u0275\u0275sanitizeHtml),
                e.\u0275\u0275advance(1),
                e.\u0275\u0275property("innerHTML", e.\u0275\u0275pipeBind1(15, 22, "APP.MFA_ENROLLMENT.STEPS.STEP_2.QUESTION_3_LABEL"), e.\u0275\u0275sanitizeHtml),
                e.\u0275\u0275advance(2),
                e.\u0275\u0275property("innerHTML", t.getQuestionFromId(t.form.value.question3), e.\u0275\u0275sanitizeHtml),
                e.\u0275\u0275advance(1),
                e.\u0275\u0275property("innerHTML", e.\u0275\u0275pipeBind1(18, 24, "APP.MFA_ENROLLMENT.STEPS.STEP_2.ANSWER_3_LABEL"), e.\u0275\u0275sanitizeHtml),
                e.\u0275\u0275advance(2),
                e.\u0275\u0275property("innerHTML", t.form.value.answer3, e.\u0275\u0275sanitizeHtml),
                e.\u0275\u0275advance(1),
                e.\u0275\u0275property("ngIf", !t.isPartiallyEnrolled),
                e.\u0275\u0275advance(2),
                e.\u0275\u0275property("ngIf", !t.isPartiallyEnrolled)
            }
        }
        function Ai(n, o) {
            1 & n && (e.\u0275\u0275elementStart(0, "div", 33)(1, "div", 6),
            e.\u0275\u0275element(2, "p", 34),
            e.\u0275\u0275pipe(3, "translate"),
            e.\u0275\u0275element(4, "p", 23),
            e.\u0275\u0275pipe(5, "translate"),
            e.\u0275\u0275element(6, "p", 32),
            e.\u0275\u0275pipe(7, "translate"),
            e.\u0275\u0275elementEnd(),
            e.\u0275\u0275elementStart(8, "div", 19),
            e.\u0275\u0275element(9, "img", 35),
            e.\u0275\u0275elementEnd()()),
            2 & n && (e.\u0275\u0275advance(2),
            e.\u0275\u0275property("innerHTML", e.\u0275\u0275pipeBind1(3, 3, "APP.MFA_ENROLLMENT.STEPS.STEP_3.SUCCESS_HEADING"), e.\u0275\u0275sanitizeHtml),
            e.\u0275\u0275advance(2),
            e.\u0275\u0275property("innerHTML", e.\u0275\u0275pipeBind1(5, 5, "APP.MFA_ENROLLMENT.STEPS.STEP_3.SUCCESS_H2"), e.\u0275\u0275sanitizeHtml),
            e.\u0275\u0275advance(2),
            e.\u0275\u0275property("innerHTML", e.\u0275\u0275pipeBind1(7, 7, "APP.MFA_ENROLLMENT.STEPS.STEP_3.SUCCESS_MESSAGE"), e.\u0275\u0275sanitizeHtml))
        }
        const we = function(n, o) {
            return {
                label: n,
                name: o
            }
        }
          , Li = function(n, o, t) {
            return [n, o, t]
        };
        let Ri = (()=>{
            class n extends ((0,
            A.Q)()) {
                constructor(t, i, r, s, d, u) {
                    super(),
                    this.formBuilder = t,
                    this.cdr = i,
                    this.store = r,
                    this.router = s,
                    this.loginService = d,
                    this.formService = u,
                    this.form = this.formBuilder.group({}),
                    this.hasReturnedToLogin = !1,
                    this.steps = [],
                    this.stepperActiveStep = 1,
                    this.MfaAction = te._,
                    this.isPartiallyEnrolled = !1,
                    this.userRole$ = this.store.select(fi.oM).pipe((0,
                    y.b)(E=>this.userRole = E)),
                    this.mfaAction$ = this.store.select(g.a4).pipe((0,
                    y.b)(E=>this.isPartiallyEnrolled = E === te._.PARTIALLY_ENROLLED)),
                    this.mfaEnrollmentQuestionsObs$ = this.store.select(g.gx).pipe((0,
                    y.b)(E=>{
                        this.mfaEnrollmentQuestions = E,
                        this.formService.setFormForEnrollment(),
                        this.form = this.formService.form
                    }
                    )),
                    this.isLoading = !1,
                    this.isLoggedInObs$ = this.store.select(g.gs).pipe((0,
                    y.b)(E=>{
                        var D;
                        E && (this.stepperActiveStep = 3,
                        this.isLoading = !1,
                        this.setPageTitle(),
                        this.store.dispatch((0,
                        P.DK)({
                            data: {
                                name: "setup security questions:success",
                                section: null === (D = Oe.t6.data) || void 0 === D ? void 0 : D.routeName
                            }
                        })),
                        this.cdr.markForCheck())
                    }
                    )),
                    this.credentialSelector$ = this.store.select(g.aA),
                    this.subscriptions.add(this.mfaAction$.pipe((0,
                    v.q)(1)).subscribe(E=>{
                        E || (this.store.dispatch((0,
                        T.gd)({})),
                        this.hasReturnedToLogin = !0)
                    }
                    )),
                    this.subscriptions.add(this.userRole$.subscribe()),
                    this.subscriptions.add(this.mfaAction$.subscribe()),
                    this.subscriptions.add(this.mfaEnrollmentQuestionsObs$.subscribe()),
                    this.subscriptions.add(this.isLoggedInObs$.subscribe())
                }
                ionViewWillEnter() {
                    this.setPageTitle(),
                    this.ionSubscriptions.add(this.loginService.redirectToLogin().subscribe(()=>this.hasReturnedToLogin = !0))
                }
                ionViewDidEnter() {
                    this.store.dispatch((0,
                    V.nN)())
                }
                ionViewDidLeave() {
                    this.isLoading = !1,
                    (0,
                    le.Xn)(window.location.pathname) && !this.hasReturnedToLogin && this.store.dispatch((0,
                    T.gd)({})),
                    this.hasReturnedToLogin = !1,
                    this.cdr.markForCheck(),
                    super.ionViewDidLeave()
                }
                getPrimaryButtonLabel() {
                    return 1 === this.stepperActiveStep ? "APP.MFA_ENROLLMENT.STEPS.STEP_1.CTA" : 2 === this.stepperActiveStep ? "APP.MFA_ENROLLMENT.STEPS.STEP_2.CTA" : "APP.MFA_ENROLLMENT.STEPS.STEP_3.CTA"
                }
                onCancel() {
                    this.store.dispatch((0,
                    T.gd)({})),
                    this.hasReturnedToLogin = !0
                }
                submitForm() {
                    var t;
                    if (this.form.invalid)
                        return ee.f.validateAllFormFields(this.form),
                        void this.store.dispatch((0,
                        P.tz)({
                            data: [{
                                errorType: "error",
                                displayType: "inline",
                                code: "nomfachallengeanswer"
                            }]
                        }));
                    this.stepperActiveStep = 2,
                    this.setPageTitle(),
                    this.store.dispatch((0,
                    P.DK)({
                        data: {
                            name: "setup security questions:step 2",
                            section: null === (t = Oe.t6.data) || void 0 === t ? void 0 : t.routeName
                        }
                    }))
                }
                onSubmit() {
                    1 === this.stepperActiveStep ? this.submitForm() : 2 === this.stepperActiveStep ? this.submitSecurityQuestions() : this.continueToOnlineBanking()
                }
                getQuestionFromId(t) {
                    let i = [];
                    i = i.concat(this.mfaEnrollmentQuestions.listOfQuestions1).concat(this.mfaEnrollmentQuestions.listOfQuestions2).concat(this.mfaEnrollmentQuestions.listOfQuestions3);
                    const r = i.find(s=>s.id === t);
                    return null == r ? void 0 : r.text
                }
                goBackToStep1() {
                    this.stepperActiveStep = 1,
                    this.setPageTitle()
                }
                submitSecurityQuestions() {
                    this.credentialSelector$.pipe((0,
                    v.q)(1)).subscribe(t=>{
                        this.isLoading = !0,
                        this.store.dispatch((0,
                        f.Mp)({
                            questionsWithAnswers: this.formService.getQuestionsWithAnswersForSubmitRequest(),
                            credential: t,
                            mfaBindingFlag: this.getMfaDeviceBindingFlag()
                        }))
                    }
                    )
                }
                continueToOnlineBanking() {
                    this.router.navigate([`/${Oe.mT.path}`])
                }
                getMfaDeviceBindingFlag() {
                    return !(this.isPartiallyEnrolled || !this.form.controls.trustThisDevice.value)
                }
                setPageTitle() {
                    this.store.dispatch((0,
                    V.Iw)({
                        titleKey: this.getTitleKeys(this.stepperActiveStep)
                    }))
                }
                getTitleKeys(t) {
                    return ["APP.MFA_ENROLLMENT.STEPS.PAGE_TITLE_KEY", `COMMON.STEPPER.STEP_${t}.TITLE`]
                }
            }
            return n.\u0275fac = function(t) {
                return new (t || n)(e.\u0275\u0275directiveInject(p.FormBuilder),e.\u0275\u0275directiveInject(e.ChangeDetectorRef),e.\u0275\u0275directiveInject(M.yh),e.\u0275\u0275directiveInject(L.F0),e.\u0275\u0275directiveInject(_e.r),e.\u0275\u0275directiveInject(vi.y))
            }
            ,
            n.\u0275cmp = e.\u0275\u0275defineComponent({
                type: n,
                selectors: [["app-mfa-enrollment-steps"]],
                features: [e.\u0275\u0275InheritDefinitionFeature],
                decls: 15,
                vars: 49,
                consts: [["id", "mfa-enrollment-flow", "secondaryButtonIcon", "edit", 3, "isSinglePage", "title", "primaryButtonVisible", "primaryButtonLabel", "secondaryButtonVisible", "secondaryButtonLabel", "primaryLoading", "isStepperVisible", "linkVisible", "linkLabel", "activeStep", "steps", "primaryButtonClicked", "secondaryButtonClicked", "linkClicked"], [3, "formGroup", "ngSubmit"], ["class", "fdc-row flow-row mb-56p", 4, "ngIf"], ["class", "fdc-row flow-row", 4, "ngIf"], ["class", "fdc-row flow-row mt-40p mb-56p", 4, "ngIf"], [1, "fdc-row", "flow-row", "mb-56p"], [1, "fdc-col-7", "fdc-sm-col-4"], [1, "fdc-title1", "mt-24p", "mb-24p", 3, "innerHTML"], [1, "mb-24p"], ["name", "dropdown1", "formControlName", "question1", 3, "label", "errorMessages", "analytics"], ["value", "", 3, "label"], [3, "value", "label", 4, "ngFor", "ngForOf"], [1, "mb-8p"], ["id", "mes-awnser-1", "type", "text", "formControlName", "answer1", 3, "errorMessages", "showAllMessages", "label", "analytics", "maxLength"], ["name", "dropdown2", "formControlName", "question2", 3, "label", "errorMessages", "analytics"], ["id", "mes-awnser-2", "type", "text", "formControlName", "answer2", 3, "errorMessages", "showAllMessages", "label", "analytics", "maxLength"], ["name", "dropdown3", "formControlName", "question3", 3, "label", "errorMessages", "analytics"], ["id", "mes-awnser-3", "type", "text", "formControlName", "answer3", 3, "errorMessages", "showAllMessages", "label", "analytics", "maxLength"], [4, "ngIf"], [1, "fdc-col-5", "display-sm-none"], ["src", "assets/images/mfa-enrollment-step-1.svg", "id", "mes-step1-image", "alt", "", 1, "pull-right"], [3, "value", "label"], [1, "mt-24p", "mb-24p", "light-grey-separator"], [1, "fdc-title1", "mb-16p", 3, "innerHTML"], [1, "fdc-body2", "mb-24p", 3, "innerHTML"], ["name", "checkbox", "formControlName", "trustThisDevice", 3, "id", "analytics"], [1, "fdc-row", "flow-row"], [1, "fdc-col-7", "mt-40p", "fdc-sm-col-4"], [1, "fdc-body1", "mb-8p", "bmo-granite-color", 3, "innerHTML"], [1, "fdc-body1", "mb-24p", 3, "innerHTML"], [1, "mb-56p"], [1, "mb-24p", "light-grey-separator"], [1, "fdc-body1", 3, "innerHTML"], [1, "fdc-row", "flow-row", "mt-40p", "mb-56p"], [1, "fdc-heading1", "light", "mb-16p", 3, "innerHTML"], ["src", "assets/images/request_success.svg", "id", "mes-step3-image", "alt", "", 1, "pull-right"]],
                template: function(t, i) {
                    1 & t && (e.\u0275\u0275elementStart(0, "app-inline-takeover", 0),
                    e.\u0275\u0275listener("primaryButtonClicked", function() {
                        return i.onSubmit()
                    })("secondaryButtonClicked", function() {
                        return i.goBackToStep1()
                    })("linkClicked", function() {
                        return i.onCancel()
                    }),
                    e.\u0275\u0275pipe(1, "translate"),
                    e.\u0275\u0275pipe(2, "translate"),
                    e.\u0275\u0275pipe(3, "translate"),
                    e.\u0275\u0275pipe(4, "translate"),
                    e.\u0275\u0275pipe(5, "translate"),
                    e.\u0275\u0275pipe(6, "translate"),
                    e.\u0275\u0275pipe(7, "translate"),
                    e.\u0275\u0275pipe(8, "translate"),
                    e.\u0275\u0275pipe(9, "translate"),
                    e.\u0275\u0275pipe(10, "translate"),
                    e.\u0275\u0275elementStart(11, "form", 1),
                    e.\u0275\u0275listener("ngSubmit", function() {
                        return i.onSubmit()
                    }),
                    e.\u0275\u0275template(12, Ci, 49, 106, "div", 2),
                    e.\u0275\u0275template(13, yi, 25, 26, "div", 3),
                    e.\u0275\u0275template(14, Ai, 10, 9, "div", 4),
                    e.\u0275\u0275elementEnd()()),
                    2 & t && (e.\u0275\u0275property("isSinglePage", !1)("title", e.\u0275\u0275pipeBind1(1, 16, "APP.MFA_ENROLLMENT.STEPS.PAGE_TITLE"))("primaryButtonVisible", !0)("primaryButtonLabel", e.\u0275\u0275pipeBind1(2, 18, i.getPrimaryButtonLabel()))("secondaryButtonVisible", 2 === i.stepperActiveStep)("secondaryButtonLabel", e.\u0275\u0275pipeBind1(3, 20, "APP.MFA_ENROLLMENT.STEPS.STEP_2.GO_BACK_CTA"))("primaryLoading", i.isLoading)("isStepperVisible", !0)("linkVisible", 1 === i.stepperActiveStep || 2 === i.stepperActiveStep)("linkLabel", e.\u0275\u0275pipeBind1(4, 22, "COMMON.CANCEL"))("activeStep", i.stepperActiveStep)("steps", e.\u0275\u0275pureFunction3(45, Li, e.\u0275\u0275pureFunction2(36, we, e.\u0275\u0275pipeBind1(5, 24, "COMMON.STEPPER.STEP_1.LABEL"), e.\u0275\u0275pipeBind1(6, 26, "APP.MFA_ENROLLMENT.STEPS.STEP_1.NAME")), e.\u0275\u0275pureFunction2(39, we, e.\u0275\u0275pipeBind1(7, 28, "COMMON.STEPPER.STEP_2.LABEL"), e.\u0275\u0275pipeBind1(8, 30, "APP.MFA_ENROLLMENT.STEPS.STEP_2.NAME")), e.\u0275\u0275pureFunction2(42, we, e.\u0275\u0275pipeBind1(9, 32, "COMMON.STEPPER.STEP_3.LABEL"), e.\u0275\u0275pipeBind1(10, 34, "APP.MFA_ENROLLMENT.STEPS.STEP_3.NAME")))),
                    e.\u0275\u0275advance(11),
                    e.\u0275\u0275property("formGroup", i.form),
                    e.\u0275\u0275advance(1),
                    e.\u0275\u0275property("ngIf", 1 === i.stepperActiveStep),
                    e.\u0275\u0275advance(1),
                    e.\u0275\u0275property("ngIf", 2 === i.stepperActiveStep),
                    e.\u0275\u0275advance(1),
                    e.\u0275\u0275property("ngIf", 3 === i.stepperActiveStep))
                },
                directives: [he.h, p.\u0275NgNoValidate, p.NgControlStatusGroup, p.FormGroupDirective, l.O5, me.JO, p.NgControlStatus, p.FormControlName, j.v, me.N5, l.sg, oe.a, ue.z],
                pipes: [h.X$],
                styles: ["[_nghost-%COMP%]   .fill-white[_ngcontent-%COMP%]{background-color:var(--bmo-white)}[_nghost-%COMP%]   hr.keyline[_ngcontent-%COMP%]{margin-top:56px;margin-bottom:32px}[_nghost-%COMP%]   .bmo-granite-color[_ngcontent-%COMP%]{color:var(--bmo-granite)}[_nghost-%COMP%]   fdc-dropdown[_ngcontent-%COMP%]{--dropdown-bottom-padding: 0}[_nghost-%COMP%]   .no-margin[_ngcontent-%COMP%]{margin-top:0;margin-bottom:0}"],
                changeDetection: 0
            }),
            n
        }
        )();
        var Mi = a(32313)
          , st = a(55665)
          , Ii = a(37283)
          , lt = a(8165);
        let Fe = (()=>{
            class n {
                constructor(t, i) {
                    this.translationsService = t,
                    this.transitionOverlayService = i
                }
                openSecureKeyTransferOverlay() {
                    return this.createTransitionOverlay("PAGE.LOGIN_SECUREKEY.TRANSFERRING")
                }
                openOtpSigninTransferOverlay() {
                    return this.createTransitionOverlay("PAGE.LOGIN_OTP.INITIALIZING")
                }
                createTransitionOverlay(t) {
                    return this.translationsService.stream(t).pipe((0,
                    v.q)(1), (0,
                    C.U)(i=>this.transitionOverlayService.open(i)))
                }
            }
            return n.\u0275fac = function(t) {
                return new (t || n)(e.\u0275\u0275inject(B.fA),e.\u0275\u0275inject(lt.B))
            }
            ,
            n.\u0275prov = e.\u0275\u0275defineInjectable({
                token: n,
                factory: n.\u0275fac,
                providedIn: "root"
            }),
            n
        }
        )();
        var dt = a(358)
          , ge = a(3509)
          , Bi = a(13212);
        function wi(n, o) {
            if (1 & n) {
                const t = e.\u0275\u0275getCurrentView();
                e.\u0275\u0275elementStart(0, "div")(1, "fdc-card", 8)(2, "div", 9)(3, "app-otp-inline", 10),
                e.\u0275\u0275listener("OtpSuccess", function(r) {
                    return e.\u0275\u0275restoreView(t),
                    e.\u0275\u0275nextContext(2).onOtpSuccess(r)
                })("OtpExit", function() {
                    return e.\u0275\u0275restoreView(t),
                    e.\u0275\u0275nextContext(2).returnToLogin()
                })("OtpAnalytics", function(r) {
                    return e.\u0275\u0275restoreView(t),
                    e.\u0275\u0275nextContext(2).onOtpAnalytics(r)
                }),
                e.\u0275\u0275elementEnd()()()()
            }
            if (2 & n) {
                const t = e.\u0275\u0275nextContext().ngIf;
                e.\u0275\u0275advance(1),
                e.\u0275\u0275property("hasPadding", !1),
                e.\u0275\u0275advance(2),
                e.\u0275\u0275property("otpData", t)("hideHeader", !0)
            }
        }
        function Fi(n, o) {
            if (1 & n) {
                const t = e.\u0275\u0275getCurrentView();
                e.\u0275\u0275elementStart(0, "fdc-card", 8)(1, "div", 11)(2, "form", 12),
                e.\u0275\u0275listener("ngSubmit", function() {
                    return e.\u0275\u0275restoreView(t),
                    e.\u0275\u0275nextContext(2).authenticate()
                }),
                e.\u0275\u0275element(3, "h2", 13),
                e.\u0275\u0275pipe(4, "translate"),
                e.\u0275\u0275element(5, "p", 14),
                e.\u0275\u0275pipe(6, "translate"),
                e.\u0275\u0275elementStart(7, "div", 15)(8, "fdc-checkbox-refresh", 16),
                e.\u0275\u0275text(9),
                e.\u0275\u0275pipe(10, "translate"),
                e.\u0275\u0275elementEnd()(),
                e.\u0275\u0275elementStart(11, "div", 17)(12, "fdc-button", 18),
                e.\u0275\u0275pipe(13, "async"),
                e.\u0275\u0275text(14),
                e.\u0275\u0275pipe(15, "translate"),
                e.\u0275\u0275elementEnd()()()()()
            }
            if (2 & n) {
                const t = e.\u0275\u0275nextContext(2);
                e.\u0275\u0275property("hasPadding", !1),
                e.\u0275\u0275advance(2),
                e.\u0275\u0275property("formGroup", t.trustDeviceForm),
                e.\u0275\u0275advance(1),
                e.\u0275\u0275property("innerHTML", e.\u0275\u0275pipeBind1(4, 12, "PAGE.LOGIN_OTP.TRUST_DEVICE.HEADER"), e.\u0275\u0275sanitizeHtml),
                e.\u0275\u0275advance(2),
                e.\u0275\u0275property("innerHTML", e.\u0275\u0275pipeBind1(6, 14, "PAGE.LOGIN_OTP.TRUST_DEVICE.BODY"), e.\u0275\u0275sanitizeHtml),
                e.\u0275\u0275advance(3),
                e.\u0275\u0275property("analytics", "mfa trust device checkbox"),
                e.\u0275\u0275advance(1),
                e.\u0275\u0275textInterpolate1(" ", e.\u0275\u0275pipeBind1(10, 16, "PAGE.LOGIN_OTP.TRUST_DEVICE.CHECKBOX"), " "),
                e.\u0275\u0275advance(3),
                e.\u0275\u0275property("isLoading", t.isLoading)("isCentered", !0)("languageFormat", e.\u0275\u0275pipeBind1(13, 18, t.currentLanguage$))("analytics", "otp-signin trust device CTA submit button")("trackDynatrace", !0),
                e.\u0275\u0275advance(2),
                e.\u0275\u0275textInterpolate1(" ", e.\u0275\u0275pipeBind1(15, 20, "COMMON.CONTINUE"), " ")
            }
        }
        function xi(n, o) {
            if (1 & n) {
                const t = e.\u0275\u0275getCurrentView();
                e.\u0275\u0275elementStart(0, "fdc-details-page", 1),
                e.\u0275\u0275pipe(1, "translate"),
                e.\u0275\u0275elementStart(2, "fdc-breadcrumb", 2),
                e.\u0275\u0275listener("click", function() {
                    return e.\u0275\u0275restoreView(t),
                    e.\u0275\u0275nextContext().returnToLogin()
                }),
                e.\u0275\u0275element(3, "span", 3),
                e.\u0275\u0275pipe(4, "translate"),
                e.\u0275\u0275elementEnd(),
                e.\u0275\u0275elementStart(5, "div", 4)(6, "div", 5),
                e.\u0275\u0275template(7, wi, 4, 3, "div", 6),
                e.\u0275\u0275template(8, Fi, 16, 22, "ng-template", null, 7, e.\u0275\u0275templateRefExtractor),
                e.\u0275\u0275elementEnd()()()
            }
            if (2 & n) {
                const t = e.\u0275\u0275reference(9)
                  , i = e.\u0275\u0275nextContext();
                e.\u0275\u0275property("title", e.\u0275\u0275pipeBind1(1, 6, "PAGE.LOGIN_OTP.PAGE_TITLE")),
                e.\u0275\u0275advance(2),
                e.\u0275\u0275property("analytics", "otp-signin return link")("trackDynatrace", !0),
                e.\u0275\u0275advance(1),
                e.\u0275\u0275property("innerHTML", e.\u0275\u0275pipeBind1(4, 8, "PAGE.LOGIN_OTP.BACK_TO_SIGNIN"), e.\u0275\u0275sanitizeHtml),
                e.\u0275\u0275advance(4),
                e.\u0275\u0275property("ngIf", !i.showTrustDevicePrompt)("ngIfElse", t)
            }
        }
        const Di = {
            trustThisDevice: !0
        };
        let Ui = (()=>{
            class n extends ((0,
            A.Q)()) {
                constructor(t, i, r, s, d, u, E, D) {
                    super(),
                    this.loginService = t,
                    this.store = i,
                    this.cdr = r,
                    this.fb = s,
                    this.analyticsService = d,
                    this.overlayService = u,
                    this.translationsService = E,
                    this.biocatchService = D,
                    this.showTrustDevicePrompt = !1,
                    this.trustDeviceForm = this.fb.group(Di),
                    this.authenticateDetails$ = this.store.select(g.hp),
                    this.isLoading = !1,
                    this.mfaAction$ = this.store.select(g.a4),
                    this.currentLanguage$ = this.translationsService.getCurrentLanguageStream(),
                    this.hasReturnedToLogin = !1
                }
                returnToLogin() {
                    this.hasReturnedToLogin = !0,
                    this.store.dispatch((0,
                    T.gd)({}))
                }
                ionViewDidEnter() {
                    this.store.dispatch((0,
                    V.nN)())
                }
                ionViewWillEnter() {
                    this.ionSubscriptions.add(this.loginService.redirectToLogin().subscribe(()=>this.hasReturnedToLogin = !0)),
                    this.ionSubscriptions.add(this.mfaAction$.pipe((0,
                    v.q)(1)).subscribe(t=>{
                        var i;
                        t !== te._.CHALLENGE && !this.hasReturnedToLogin && (null === (i = this.transitionOverlay) || void 0 === i || i.close(),
                        this.store.dispatch((0,
                        T.gd)({})),
                        this.hasReturnedToLogin = !0),
                        t === te._.CHALLENGE && (this.ionSubscriptions.add(this.overlayService.openOtpSigninTransferOverlay().subscribe(r=>{
                            this.transitionOverlay = r
                        }
                        )),
                        this.otpData$ = this.loginService.otpSignin().pipe((0,
                        x.K)(r=>this.handleError(r)), (0,
                        Mi.x)(()=>{
                            var r;
                            null === (r = this.transitionOverlay) || void 0 === r || r.close()
                        }
                        )),
                        this.cdr.markForCheck())
                    }
                    ))
                }
                ionViewWillLeave() {
                    this.otpData$ = X.E,
                    this.showTrustDevicePrompt = !1,
                    (0,
                    le.Xn)(window.location.pathname) && !this.hasReturnedToLogin && this.store.dispatch((0,
                    T.gd)({})),
                    this.hasReturnedToLogin = !1
                }
                onOtpSuccess(t) {
                    if (t.UnknownRs) {
                        const r = Ii.N.normalizeResponseBody("UnknownRs", t);
                        this.store.dispatch((0,
                        W.Bv)(Object.assign(Object.assign({}, r), {
                            redirectTo: c.iM.ERROR_PAGE
                        })))
                    } else
                        t.SignOnOTPRs.BodyRs.deviceBound ? this.authenticate() : (this.showTrustDevicePrompt = !0,
                        this.biocatchService.changeContext("ADD_TRUST_DEVICE"))
                }
                onOtpAnalytics(t) {
                    this.analyticsService.trackAction(t, st.$D.INLINE, "Sign-in")
                }
                authenticate() {
                    this.isLoading = !0,
                    this.authenticateDetails$.pipe((0,
                    v.q)(1)).subscribe(t=>{
                        const i = {
                            credential: t.credential,
                            trustThisDevice: this.trustDeviceForm.controls.trustThisDevice.value
                        }
                          , r = t.isBiometricAuthentication ? (0,
                        f.Ki)(i) : (0,
                        f.ob)(i);
                        this.store.dispatch(r)
                    }
                    )
                }
                handleError(t) {
                    return this.store.select(g.Z9).pipe((0,
                    v.q)(1), (0,
                    y.b)(i=>{
                        this.store.dispatch((0,
                        W.Bv)({
                            overriddenErrorCode: t.code,
                            redirectTo: c.a1[i]
                        }))
                    }
                    )).subscribe(),
                    X.E
                }
            }
            return n.\u0275fac = function(t) {
                return new (t || n)(e.\u0275\u0275directiveInject(_e.r),e.\u0275\u0275directiveInject(M.yh),e.\u0275\u0275directiveInject(e.ChangeDetectorRef),e.\u0275\u0275directiveInject(p.FormBuilder),e.\u0275\u0275directiveInject(st.QM),e.\u0275\u0275directiveInject(Fe),e.\u0275\u0275directiveInject(B.fA),e.\u0275\u0275directiveInject(rt.Eq))
            }
            ,
            n.\u0275cmp = e.\u0275\u0275defineComponent({
                type: n,
                selectors: [["app-otp-signin"]],
                features: [e.\u0275\u0275InheritDefinitionFeature],
                decls: 3,
                vars: 3,
                consts: [[3, "title", 4, "ngIf"], [3, "title"], [1, "mb-40p", 3, "analytics", "trackDynatrace", "click"], [3, "innerHTML"], ["slot", "content", 1, "mb-80p"], [1, "fdc-col-6", "fdc-md-col-12", "mb-80p", "mt-32p"], [4, "ngIf", "ngIfElse"], ["trustDevice", ""], [3, "hasPadding"], [1, "mt-48p"], [3, "otpData", "hideHeader", "OtpSuccess", "OtpExit", "OtpAnalytics"], [1, "trust-device-card-content"], [3, "formGroup", "ngSubmit"], [1, "fdc-title2", "mb-16p", 3, "innerHTML"], [1, "fdc-body1", "mb-16p", 3, "innerHTML"], [1, "mb-48p"], ["name", "checkbox", "formControlName", "trustThisDevice", 3, "analytics"], [1, "flex", "jc-center", "ai-center"], [3, "isLoading", "isCentered", "languageFormat", "analytics", "trackDynatrace"]],
                template: function(t, i) {
                    1 & t && (e.\u0275\u0275elementStart(0, "app-centered-layout-container"),
                    e.\u0275\u0275template(1, xi, 10, 10, "fdc-details-page", 0),
                    e.\u0275\u0275pipe(2, "async"),
                    e.\u0275\u0275elementEnd()),
                    2 & t && (e.\u0275\u0275advance(1),
                    e.\u0275\u0275property("ngIf", e.\u0275\u0275pipeBind1(2, 1, i.otpData$)))
                },
                directives: [$.v, l.O5, dt.U, ge.L, j.v, se.Ak, Bi.$, p.\u0275NgNoValidate, p.NgControlStatusGroup, p.FormGroupDirective, ue.z, p.NgControlStatus, p.FormControlName, J.r0],
                pipes: [h.X$, l.Ov],
                styles: ["[_nghost-%COMP%]   .trust-device-card-content[_ngcontent-%COMP%]{margin:48px}[_nghost-%COMP%]   .login__title[_ngcontent-%COMP%]{display:flex;justify-content:center}[_nghost-%COMP%]   .login__title-icon[_ngcontent-%COMP%]{margin-right:8px}[_nghost-%COMP%]   .login__title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{line-height:3.2rem}"],
                changeDetection: 0
            }),
            n
        }
        )();
        var be = (()=>{
            return (n = be || (be = {})).USER = "user",
            n.ERROR = "error",
            be;
            var n
        }
        )();
        const Gi = {
            [c.jK.SECURE_KEY_BAD_TIMESTAMP]: "BAD_TIMESTAMP",
            [c.jK.SECURE_KEY_BAD_MBUN_GENERATION]: "BAD_MBUN_GENERATION",
            [c.jK.SECURE_KEY_BAD_SIGNATURE]: "BAD_SIGNATURE",
            [c.jK.SECURE_KEY_UNPARSABLE_REQUEST]: "UNPARSABLE_REQUEST",
            [c.jK.SECURE_KEY_BAD_RESPONSE_URL]: "BAD_RESPONSE_URL",
            [c.jK.SECURE_KEY_BAD_ISSUER]: "BAD_ISSUER",
            [c.jK.SECURE_KEY_BAD_KEY_STORE]: "BAD_KEY_STORE",
            [c.jK.SECURE_KEY_BAD_MBUN_GENERATION_DB]: "BAD_MBUN_GENERATION_DB",
            [c.jK.SECURE_KEY_RESPONSE_BUILD_FAILURE]: "RESPONSE_BUILD_FAILURE",
            [c.jK.SECURE_KEY_REPLAY]: "REPLAY",
            [c.jK.SECURE_KEY_REPLAY_DB_ERROR]: "REPLAY_DB_ERROR",
            [c.jK.SECURE_KEY_BAD_ASSURANCE_LEVEL]: "BAD_ASSURANCE_LEVEL",
            [c.jK.SECURE_KEY_BAD_LANGUAGE]: "BAD_LANGUAGE",
            [c.jK.SECURE_KEY_BAD_BROWSER]: "BAD_BROWSER",
            [c.jK.SECURE_KEY_COOKIES_DISABLED]: "COOKIES_DISABLED",
            [c.jK.SECURE_KEY_EMPTY_SAML_REQUEST]: "SECUREKEYERROR_EMPTYSAMLREQUEST",
            [c.jK.SECURE_KEY_CSP_DISABLED]: "SECUREKEYERROR_CSPDISABLED",
            [c.jK.SECURE_KEY_INVALID_CARD_TYPE]: "SECUREKEYERROR_INVALIDCARDTYPE",
            [c.jK.SECURE_KEY_MFA_ENROLLMENT_REQUIRED]: "SECUREKEYERROR_MFA_ENROLL",
            [c.jK.SECURE_KEY_TEMP_PASSWORD_USED]: "SECUREKEYERROR_TEMP_PWD_CODE",
            [c.jK.SECURE_KEY_CARD_DISABLED]: "SECUREKEYERROR_MFA_OPEN96"
        };
        let xe = (()=>{
            class n {
                constructor(t) {
                    this.bosCommon = t,
                    this.preVerifySamlRequestPath = "/secureKey/preVerifySAMLRequest",
                    this.preVerifySamlRequestWrapper = "PreVerifySAMLRequestRq",
                    this.verifySamlRequestPath = "/secureKey/verifySAMLRequest",
                    this.verifySamlRequestWrapper = "VerifySAMLRequestRq",
                    this.cancelSamlRequestPath = "/secureKey/cancelSAMLRequest",
                    this.cancelSamlRequestWrapper = "CancelSAMLRequestRq"
                }
                preVerifySamlRequest(t, i) {
                    return this.bosCommon.makeBosRequest(this.preVerifySamlRequestWrapper, this.preVerifySamlRequestPath, {
                        lang: t,
                        SAMLRequest: i
                    }).pipe((0,
                    C.U)(r=>{
                        var s;
                        return null === (s = r.VerifySAMLRequestRs) || void 0 === s ? void 0 : s.BodyRs
                    }
                    ), (0,
                    C.U)(r=>this.projectVerifySamlResponse(r)), (0,
                    x.K)(r=>(0,
                    Q._)(r.error)))
                }
                verifySamlRequest(t, i) {
                    return this.bosCommon.makeBosRequest(this.verifySamlRequestWrapper, this.verifySamlRequestPath, {
                        lang: t,
                        SAMLRequest: i
                    }).pipe((0,
                    C.U)(r=>{
                        var s;
                        return null === (s = r.VerifySAMLRequestRs) || void 0 === s ? void 0 : s.BodyRs
                    }
                    ), (0,
                    C.U)(r=>this.projectVerifySamlResponse(r)), (0,
                    x.K)(r=>(0,
                    Q._)(r.error)))
                }
                cancelSamlRequest(t, i, r) {
                    const s = r ? Gi[r] : "USER_CANCELLED";
                    return this.bosCommon.makeBosRequest(this.cancelSamlRequestWrapper, this.cancelSamlRequestPath, {
                        lang: t,
                        SAMLRequest: i,
                        authenticationState: null != s ? s : ""
                    }).pipe((0,
                    C.U)(d=>{
                        var u;
                        return null === (u = d.CancelSAMLRequestRs) || void 0 === u ? void 0 : u.BodyRs
                    }
                    ), (0,
                    C.U)(d=>this.projectVerifySamlResponse(d)), (0,
                    x.K)(d=>(0,
                    Q._)(d.error)))
                }
                projectVerifySamlResponse(t) {
                    return t ? {
                        data: {
                            disabled: t.disabled,
                            responseURL: t.responseURL,
                            elapsedTime: t.elapsedTime,
                            SAMLResponse: t.SAMLResponse
                        }
                    } : {}
                }
            }
            return n.\u0275fac = function(t) {
                return new (t || n)(e.\u0275\u0275inject(nt.nt))
            }
            ,
            n.\u0275prov = e.\u0275\u0275defineInjectable({
                token: n,
                factory: n.\u0275fac,
                providedIn: "root"
            }),
            n
        }
        )();
        const Vi = ["securekeyForm"];
        let Ki = (()=>{
            class n extends ((0,
            A.Q)()) {
                constructor(t, i, r, s, d) {
                    super(),
                    this.route = t,
                    this.store = i,
                    this.secureKeyAdapter = r,
                    this.gateKeeperService = s,
                    this.overlayService = d
                }
                ionViewDidEnter() {
                    this.ionSubscriptions.add(this.store.select(g.Rr).pipe((0,
                    G.w)(({lang: t, samlRequest: i, errorCode: r})=>this.cancelKey(t, i, r)), (0,
                    x.K)(t=>(this.onSamlCancellationError(t),
                    X.E))).subscribe()),
                    this.ionSubscriptions.add(this.overlayService.openSecureKeyTransferOverlay().subscribe(t=>{
                        this.transitionOverlay = t
                    }
                    ))
                }
                ionViewWillLeave() {
                    var t;
                    null === (t = this.transitionOverlay) || void 0 === t || t.close()
                }
                cancelKey(t, i, r) {
                    const s = "fr" === t ? z.Ie.FR : z.Ie.EN
                      , {reason: d} = this.route.snapshot.params;
                    return this.secureKeyAdapter.cancelSamlRequest(s, i, d === be.ERROR ? r : void 0).pipe((0,
                    C.U)(E=>null == E ? void 0 : E.data), (0,
                    G.w)(E=>this.returnToOrigin(s, E)))
                }
                onSamlCancellationError(t) {
                    this.store.dispatch((0,
                    W.Bv)(Object.assign(Object.assign({}, t), {
                        redirectTo: c.iM.CUSTOM_SECUREKEY_ERROR_PAGE
                    })))
                }
                returnToOrigin(t, i) {
                    var r;
                    const s = null === (r = this.securekeyForm) || void 0 === r ? void 0 : r.nativeElement
                      , {elapsedTime: d, responseURL: u, SAMLResponse: E} = null != i ? i : {};
                    return void 0 !== d && u && E ? s ? (s.innerHTML = "",
                    s.action = u,
                    this.gateKeeperService.addHiddenInputToForm(s, "elapsedTime", d.toString()),
                    this.gateKeeperService.addHiddenInputToForm(s, "SAMLResponse", E),
                    this.gateKeeperService.addHiddenInputToForm(s, "lang", t),
                    s.submit(),
                    (0,
                    H.of)()) : (0,
                    Q._)({
                        message: "Missing SecureKey Form"
                    }) : (0,
                    Q._)({
                        message: "Missing Response"
                    })
                }
            }
            return n.\u0275fac = function(t) {
                return new (t || n)(e.\u0275\u0275directiveInject(L.gz),e.\u0275\u0275directiveInject(M.yh),e.\u0275\u0275directiveInject(xe),e.\u0275\u0275directiveInject(pe),e.\u0275\u0275directiveInject(Fe))
            }
            ,
            n.\u0275cmp = e.\u0275\u0275defineComponent({
                type: n,
                selectors: [["app-cancel-login-page"]],
                viewQuery: function(t, i) {
                    if (1 & t && e.\u0275\u0275viewQuery(Vi, 5),
                    2 & t) {
                        let r;
                        e.\u0275\u0275queryRefresh(r = e.\u0275\u0275loadQuery()) && (i.securekeyForm = r.first)
                    }
                },
                features: [e.\u0275\u0275InheritDefinitionFeature],
                decls: 8,
                vars: 6,
                consts: [[1, "fdc-row", "flow-wrap", "mb-80p"], [1, "fdc-col-12", "align-center", "mt-32p", "mb-80p", "provider-logo"], ["id", "securekey-logo", "height", "94", 3, "src", "alt"], ["id", "securekey", "method", "post", "action", ""], ["securekeyForm", ""]],
                template: function(t, i) {
                    1 & t && (e.\u0275\u0275elementStart(0, "app-centered-layout-container")(1, "div", 0)(2, "div", 1),
                    e.\u0275\u0275element(3, "img", 2),
                    e.\u0275\u0275pipe(4, "translate"),
                    e.\u0275\u0275pipe(5, "translate"),
                    e.\u0275\u0275elementEnd()(),
                    e.\u0275\u0275element(6, "form", 3, 4),
                    e.\u0275\u0275elementEnd()),
                    2 & t && (e.\u0275\u0275advance(3),
                    e.\u0275\u0275property("src", e.\u0275\u0275pipeBind1(4, 2, "PAGE.LOGIN_SECUREKEY.VERIFIEDME_LOGO.SRC"), e.\u0275\u0275sanitizeUrl)("alt", e.\u0275\u0275pipeBind1(5, 4, "PAGE.LOGIN_SECUREKEY.VERIFIEDME_LOGO.ALT")))
                },
                directives: [$.v, p.\u0275NgNoValidate, p.NgControlStatusGroup, p.NgForm],
                pipes: [h.X$],
                styles: ["[_nghost-%COMP%]{background:var(--global-bg-color)}[_nghost-%COMP%]   main[_ngcontent-%COMP%]{min-height:100%}"],
                changeDetection: 0
            }),
            n
        }
        )();
        var ct = a(25104)
          , ji = a(67690);
        const zi = function() {
            return {
                reason: "error"
            }
        }
          , Wi = function(n) {
            return ["/login/secure-key/cancel", n]
        };
        function $i(n, o) {
            1 & n && (e.\u0275\u0275elementStart(0, "div", 7)(1, "fdc-breadcrumb", 8),
            e.\u0275\u0275element(2, "span", 9),
            e.\u0275\u0275pipe(3, "translate"),
            e.\u0275\u0275elementEnd()()),
            2 & n && (e.\u0275\u0275advance(1),
            e.\u0275\u0275property("internalRouterLink", e.\u0275\u0275pureFunction1(6, Wi, e.\u0275\u0275pureFunction0(5, zi)))("trackDynatrace", !0),
            e.\u0275\u0275advance(1),
            e.\u0275\u0275property("innerHTML", e.\u0275\u0275pipeBind1(3, 3, "PAGE.LOGIN_SECUREKEY.BREADCRUMB_BACK.LABEL"), e.\u0275\u0275sanitizeHtml))
        }
        function Qi(n, o) {
            if (1 & n) {
                const t = e.\u0275\u0275getCurrentView();
                e.\u0275\u0275elementStart(0, "fdc-button", 12),
                e.\u0275\u0275listener("buttonClick", function() {
                    return e.\u0275\u0275restoreView(t),
                    e.\u0275\u0275nextContext(2).backToSignIn()
                }),
                e.\u0275\u0275element(1, "span", 9),
                e.\u0275\u0275pipe(2, "translate"),
                e.\u0275\u0275element(3, "span", 13),
                e.\u0275\u0275pipe(4, "translate"),
                e.\u0275\u0275elementEnd()
            }
            2 & n && (e.\u0275\u0275property("trackDynatrace", !0),
            e.\u0275\u0275advance(1),
            e.\u0275\u0275property("innerHTML", e.\u0275\u0275pipeBind1(2, 3, "PAGE.LOGIN_SECUREKEY.BREADCRUMB_BACK.LABEL_SIGNIN"), e.\u0275\u0275sanitizeHtml),
            e.\u0275\u0275advance(2),
            e.\u0275\u0275property("innerHTML", e.\u0275\u0275pipeBind1(4, 5, "PAGE.LOGIN_SECUREKEY.BREADCRUMB_BACK.LABEL_SIGNIN_AC"), e.\u0275\u0275sanitizeHtml))
        }
        const Yi = function(n) {
            return {
                errorCode: n
            }
        };
        function Xi(n, o) {
            if (1 & n && (e.\u0275\u0275elementStart(0, "app-contextual-error", 10),
            e.\u0275\u0275pipe(1, "translate"),
            e.\u0275\u0275pipe(2, "translate"),
            e.\u0275\u0275template(3, Qi, 5, 7, "fdc-button", 11),
            e.\u0275\u0275pipe(4, "async"),
            e.\u0275\u0275elementEnd()),
            2 & n) {
                const t = o.ngIf
                  , i = e.\u0275\u0275nextContext();
                e.\u0275\u0275property("title", e.\u0275\u0275pipeBind1(1, 5, t.title))("errorBody", e.\u0275\u0275pipeBind2(2, 7, t.message, e.\u0275\u0275pureFunction1(12, Yi, t.code)))("errorCode", t.code)("image", t.imagePath),
                e.\u0275\u0275advance(3),
                e.\u0275\u0275property("ngIf", e.\u0275\u0275pipeBind1(4, 10, i.showBackSignInButton$))
            }
        }
        let Ji = (()=>{
            class n {
                constructor(t, i) {
                    this.store = t,
                    this.router = i,
                    this.errorState$ = this.store.select(ct.J),
                    this.unsupportedReturnLinkCodes = [c.jK.SECURE_KEY_BAD_MBUN_GENERATION, c.jK.SECURE_KEY_BAD_SIGNATURE, c.jK.SECURE_KEY_UNPARSABLE_REQUEST, c.jK.SECURE_KEY_BAD_RESPONSE_URL, c.jK.SECURE_KEY_BAD_ISSUER, c.jK.SECURE_KEY_BAD_KEY_STORE, c.jK.SECURE_KEY_BAD_MBUN_GENERATION_DB, c.jK.SECURE_KEY_RESPONSE_BUILD_FAILURE, c.jK.SECURE_KEY_REPLAY, c.jK.SECURE_KEY_REPLAY_DB_ERROR, c.jK.SECURE_KEY_BAD_ASSURANCE_LEVEL, c.jK.SECURE_KEY_BAD_LANGUAGE, c.jK.SECURE_KEY_BAD_BROWSER, c.jK.SECURE_KEY_COOKIES_DISABLED, c.jK.SECURE_KEY_EMPTY_SAML_REQUEST],
                    this.error$ = this.errorState$.pipe((0,
                    C.U)(r=>this.projectErrorFromCode(r))),
                    this.allowReturn$ = this.errorState$.pipe((0,
                    Ze.M)(this.store.select(g.Ff)), (0,
                    C.U)(([r,s])=>this.projectAllowReturn(r, s))),
                    this.showBackSignInButton$ = this.errorState$.pipe((0,
                    C.U)(r=>this.projectIsPasswordResetDisallowed(r)))
                }
                ionViewWillEnter() {
                    this.error$.pipe((0,
                    v.q)(1)).subscribe(t=>{
                        this.store.dispatch((0,
                        P.DK)({
                            data: {
                                name: "secure key error",
                                eventData: {
                                    notifyData: [{
                                        display: "page",
                                        code: t.code,
                                        type: "error"
                                    }]
                                }
                            }
                        }))
                    }
                    )
                }
                projectErrorFromCode(t) {
                    return _.b$.mapErrorMessage({
                        code: t.code,
                        serverCode: t.serverCode,
                        snapshot: t.snapshot
                    })
                }
                projectAllowReturn(t, i) {
                    var r;
                    return !!(null === (r = i.params) || void 0 === r ? void 0 : r.SAMLRequest) && !this.unsupportedReturnLinkCodes.includes(t.code)
                }
                projectIsPasswordResetDisallowed(t) {
                    return t.code === c.jK.RESET_PASSWORD_DISALLOWED || t.code === c.jK.RSA_DENY
                }
                backToSignIn() {
                    this.router.navigateByUrl("/login/secure-key")
                }
            }
            return n.\u0275fac = function(t) {
                return new (t || n)(e.\u0275\u0275directiveInject(M.yh),e.\u0275\u0275directiveInject(L.F0))
            }
            ,
            n.\u0275cmp = e.\u0275\u0275defineComponent({
                type: n,
                selectors: [["app-securekey-error"]],
                decls: 12,
                vars: 12,
                consts: [[1, "bmo-container-flex", "flow-column"], [1, "fdc-row", "flow-wrap"], ["class", "fdc-col-12 mt-32p", 4, "ngIf"], [1, "fdc-col-12", "align-center", "mt-32p", "provider-logo"], ["id", "securekey-logo", "height", "94", 3, "src", "alt"], [1, "fdc-col-12", "mt-48p", "mb-56p"], ["class", "mt-48p", 3, "title", "errorBody", "errorCode", "image", 4, "ngIf"], [1, "fdc-col-12", "mt-32p"], ["analytics", "secure-key-error return-to-verifyme link", 3, "internalRouterLink", "trackDynatrace"], [3, "innerHTML"], [1, "mt-48p", 3, "title", "errorBody", "errorCode", "image"], ["analytics", "secure-key-error return-to-signin button", 3, "trackDynatrace", "buttonClick", 4, "ngIf"], ["analytics", "secure-key-error return-to-signin button", 3, "trackDynatrace", "buttonClick"], [1, "sr-only", 3, "innerHTML"]],
                template: function(t, i) {
                    1 & t && (e.\u0275\u0275elementStart(0, "app-centered-layout-container")(1, "div", 0)(2, "div", 1),
                    e.\u0275\u0275template(3, $i, 4, 8, "div", 2),
                    e.\u0275\u0275pipe(4, "async"),
                    e.\u0275\u0275elementStart(5, "div", 3),
                    e.\u0275\u0275element(6, "img", 4),
                    e.\u0275\u0275pipe(7, "translate"),
                    e.\u0275\u0275pipe(8, "translate"),
                    e.\u0275\u0275elementEnd(),
                    e.\u0275\u0275elementStart(9, "div", 5),
                    e.\u0275\u0275template(10, Xi, 5, 14, "app-contextual-error", 6),
                    e.\u0275\u0275pipe(11, "async"),
                    e.\u0275\u0275elementEnd()()()()),
                    2 & t && (e.\u0275\u0275advance(3),
                    e.\u0275\u0275property("ngIf", e.\u0275\u0275pipeBind1(4, 4, i.allowReturn$)),
                    e.\u0275\u0275advance(3),
                    e.\u0275\u0275property("src", e.\u0275\u0275pipeBind1(7, 6, "PAGE.LOGIN_SECUREKEY.VERIFIEDME_LOGO.SRC"), e.\u0275\u0275sanitizeUrl)("alt", e.\u0275\u0275pipeBind1(8, 8, "PAGE.LOGIN_SECUREKEY.VERIFIEDME_LOGO.ALT")),
                    e.\u0275\u0275advance(4),
                    e.\u0275\u0275property("ngIf", e.\u0275\u0275pipeBind1(11, 10, i.error$)))
                },
                directives: [$.v, l.O5, ge.L, j.v, ji.P, J.r0],
                pipes: [l.Ov, h.X$],
                styles: ["[_nghost-%COMP%]{background:var(--global-bg-color)}[_nghost-%COMP%]   main[_ngcontent-%COMP%]{min-height:100%}"],
                changeDetection: 0
            }),
            n
        }
        )();
        var pt = a(64055)
          , Zi = a(50253);
        const qi = function(n) {
            return {
                errorCode: n
            }
        };
        function en(n, o) {
            if (1 & n) {
                const t = e.\u0275\u0275getCurrentView();
                e.\u0275\u0275elementStart(0, "fdc-notification-banner", 13),
                e.\u0275\u0275listener("notificationClosed", function() {
                    return e.\u0275\u0275restoreView(t),
                    e.\u0275\u0275nextContext().clearErrorNotification()
                }),
                e.\u0275\u0275pipe(1, "translate"),
                e.\u0275\u0275element(2, "p", 3),
                e.\u0275\u0275pipe(3, "translate"),
                e.\u0275\u0275elementStart(4, "div"),
                e.\u0275\u0275element(5, "p", 14),
                e.\u0275\u0275pipe(6, "translate"),
                e.\u0275\u0275elementEnd()()
            }
            if (2 & n) {
                const t = o.ngIf;
                e.\u0275\u0275property("showNotification", !0)("hasClose", t.hasClose)("type", t.type)("closeAriaLabel", e.\u0275\u0275pipeBind1(1, 7, "APP.GENERAL.CLOSE")),
                e.\u0275\u0275attribute("id", "securekey-error-banner"),
                e.\u0275\u0275advance(2),
                e.\u0275\u0275property("innerHTML", e.\u0275\u0275pipeBind1(3, 9, t.title), e.\u0275\u0275sanitizeHtml),
                e.\u0275\u0275advance(3),
                e.\u0275\u0275property("innerHTML", e.\u0275\u0275pipeBind2(6, 11, t.message, e.\u0275\u0275pureFunction1(14, qi, t.errorCode)), e.\u0275\u0275sanitizeHtml)
            }
        }
        let tn = (()=>{
            class n extends ((0,
            A.Q)()) {
                constructor(t, i, r, s, d) {
                    super(),
                    this.store = t,
                    this.translateService = i,
                    this.secureKeyAdapter = r,
                    this.changeDetector = s,
                    this.router = d,
                    this.isLoading = !1,
                    this.notification$ = new Zi.x,
                    this.allowSubmit = !1,
                    this.isAuthenticated$ = this.store.select(g.gs)
                }
                ionViewWillEnter() {
                    this.isLoading = !1,
                    this.ionSubscriptions.add(this.store.select(g.Ff).pipe((0,
                    pt.n)(({isLoaded: t})=>!0 !== t), (0,
                    C.U)(({params: t})=>Object.assign({}, t)), (0,
                    G.w)(({lang: t, SAMLRequest: i, uiLang: r})=>(this.setLanguage(r || t),
                    this.validateKey(t = t === z.Ie.FR || t === B.lI.FRENCH ? z.Ie.FR : z.Ie.EN, i))), (0,
                    y.b)(()=>this.enableSignin()), (0,
                    x.K)(t=>(this.onSAMLValidationError(t),
                    X.E))).subscribe()),
                    this.ionSubscriptions.add(this.isAuthenticated$.pipe((0,
                    v.q)(1)).subscribe(t=>{
                        t && this.store.dispatch(T.hv({
                            preventRedirect: !0
                        }))
                    }
                    )),
                    this.ionSubscriptions.add(this.store.select(w.e).subscribe(({notification: t})=>{
                        t && this.notification$.next(t)
                    }
                    ))
                }
                onForgotPasswordClick() {
                    this.store.dispatch((0,
                    W.Bv)({
                        overriddenErrorCode: c.jK.RESET_PASSWORD_DISALLOWED,
                        redirectTo: c.iM.CUSTOM_SECUREKEY_ERROR_PAGE
                    }))
                }
                onLoadingChange(t) {
                    this.isLoading = t
                }
                validateKey(t, i) {
                    return this.secureKeyAdapter.preVerifySamlRequest(t, i)
                }
                setLanguage(t) {
                    this.translateService.setPreferredLanguage(t !== z.Ie.FR && t !== B.lI.FRENCH ? B.lI.ENGLISH : B.lI.FRENCH)
                }
                onSAMLValidationError(t) {
                    this.store.dispatch((0,
                    W.Bv)(Object.assign(Object.assign({}, t), {
                        redirectTo: c.iM.CUSTOM_SECUREKEY_ERROR_PAGE
                    })))
                }
                onErrorReceived(t) {
                    if (this.isLoading || c.Oq.includes(t.code))
                        return;
                    const i = _.b$.mapErrorMessage(t);
                    this.notification$.next({
                        title: i.title,
                        message: i.message,
                        errorCode: t.serverCode,
                        type: R.$.DANGER,
                        hasClose: !0
                    }),
                    this.changeDetector.markForCheck()
                }
                clearErrorNotification() {
                    this.notification$.next()
                }
                enableSignin() {
                    this.allowSubmit = !0,
                    this.changeDetector.markForCheck()
                }
                returnToGovernmentSite() {
                    this.router.navigate(["/login/secure-key/cancel", {
                        reason: "user"
                    }])
                }
            }
            return n.\u0275fac = function(t) {
                return new (t || n)(e.\u0275\u0275directiveInject(M.yh),e.\u0275\u0275directiveInject(B.fA),e.\u0275\u0275directiveInject(xe),e.\u0275\u0275directiveInject(e.ChangeDetectorRef),e.\u0275\u0275directiveInject(L.F0))
            }
            ,
            n.\u0275cmp = e.\u0275\u0275defineComponent({
                type: n,
                selectors: [["app-secure-key-login"]],
                features: [e.\u0275\u0275InheritDefinitionFeature],
                decls: 23,
                vars: 28,
                consts: [[1, "fdc-row", "flow-wrap", "mb-80p"], [1, "fdc-col-12", "mt-32p"], [3, "analytics", "trackDynatrace", "click"], [3, "innerHTML"], [1, "fdc-col-12", "mt-16p"], [3, "showNotification", "hasClose", "type", "closeAriaLabel", "notificationClosed", 4, "ngIf"], [1, "fdc-col-12", "align-center", "mt-32p", "provider-logo"], ["id", "securekey-logo", "height", "94", 3, "src", "alt"], [1, "fdc-col-6", "fdc-md-col-12", "center-self"], ["id", "securekey", 3, "allowRememberCard", "allowSubmit", "title", "usernameInstructionText", "forgotPasswordClick", "loadingChange", "errorNotification", "ctaClicked"], [1, "fdc-col-8", "fdc-col-md-12", "center-self", "mt-32p"], [1, "fdc-subtitle1", "bold", "mb-16p", 3, "innerText"], [1, "fdc-body2", 3, "innerHTML"], [3, "showNotification", "hasClose", "type", "closeAriaLabel", "notificationClosed"], [1, "light", "text--wrap", 3, "innerHTML"]],
                template: function(t, i) {
                    1 & t && (e.\u0275\u0275elementStart(0, "app-centered-layout-container")(1, "div", 0)(2, "div", 1)(3, "fdc-breadcrumb", 2),
                    e.\u0275\u0275listener("click", function() {
                        return i.returnToGovernmentSite()
                    }),
                    e.\u0275\u0275element(4, "span", 3),
                    e.\u0275\u0275pipe(5, "translate"),
                    e.\u0275\u0275elementEnd()(),
                    e.\u0275\u0275elementStart(6, "div", 4),
                    e.\u0275\u0275template(7, en, 7, 16, "fdc-notification-banner", 5),
                    e.\u0275\u0275pipe(8, "async"),
                    e.\u0275\u0275elementEnd(),
                    e.\u0275\u0275elementStart(9, "div", 6)(10, "h1"),
                    e.\u0275\u0275element(11, "img", 7),
                    e.\u0275\u0275pipe(12, "translate"),
                    e.\u0275\u0275pipe(13, "translate"),
                    e.\u0275\u0275elementEnd()(),
                    e.\u0275\u0275elementStart(14, "div", 8)(15, "app-login-form", 9),
                    e.\u0275\u0275listener("forgotPasswordClick", function() {
                        return i.onForgotPasswordClick()
                    })("loadingChange", function(s) {
                        return i.onLoadingChange(s)
                    })("errorNotification", function(s) {
                        return i.onErrorReceived(s)
                    })("ctaClicked", function() {
                        return i.clearErrorNotification()
                    }),
                    e.\u0275\u0275pipe(16, "translate"),
                    e.\u0275\u0275pipe(17, "translate"),
                    e.\u0275\u0275elementEnd()(),
                    e.\u0275\u0275elementStart(18, "div", 10),
                    e.\u0275\u0275element(19, "h3", 11),
                    e.\u0275\u0275pipe(20, "translate"),
                    e.\u0275\u0275element(21, "p", 12),
                    e.\u0275\u0275pipe(22, "translate"),
                    e.\u0275\u0275elementEnd()()()),
                    2 & t && (e.\u0275\u0275advance(3),
                    e.\u0275\u0275property("analytics", "securekey return-to-verifyme link")("trackDynatrace", !0),
                    e.\u0275\u0275advance(1),
                    e.\u0275\u0275property("innerHTML", e.\u0275\u0275pipeBind1(5, 12, "PAGE.LOGIN_SECUREKEY.BREADCRUMB_BACK.LABEL"), e.\u0275\u0275sanitizeHtml),
                    e.\u0275\u0275advance(3),
                    e.\u0275\u0275property("ngIf", e.\u0275\u0275pipeBind1(8, 14, i.notification$)),
                    e.\u0275\u0275advance(4),
                    e.\u0275\u0275property("src", e.\u0275\u0275pipeBind1(12, 16, "PAGE.LOGIN_SECUREKEY.VERIFIEDME_LOGO.SRC"), e.\u0275\u0275sanitizeUrl)("alt", e.\u0275\u0275pipeBind1(13, 18, "PAGE.LOGIN_SECUREKEY.VERIFIEDME_LOGO.ALT")),
                    e.\u0275\u0275advance(4),
                    e.\u0275\u0275property("allowRememberCard", !1)("allowSubmit", i.allowSubmit)("title", e.\u0275\u0275pipeBind1(16, 20, "PAGE.LOGIN_SECUREKEY.TITLE"))("usernameInstructionText", e.\u0275\u0275pipeBind1(17, 22, "PAGE.LOGIN_SECUREKEY.USERNAME_HINT")),
                    e.\u0275\u0275advance(4),
                    e.\u0275\u0275property("innerText", e.\u0275\u0275pipeBind1(20, 24, "PAGE.LOGIN_SECUREKEY.SECURITY.TITLE")),
                    e.\u0275\u0275advance(2),
                    e.\u0275\u0275property("innerHTML", e.\u0275\u0275pipeBind1(22, 26, "PAGE.LOGIN_SECUREKEY.SECURITY.MESSAGE"), e.\u0275\u0275sanitizeHtml))
                },
                directives: [$.v, ge.L, j.v, l.O5, R.B1, ot],
                pipes: [h.X$, l.Ov],
                styles: ["[_nghost-%COMP%]   .provider-logo[_ngcontent-%COMP%]{margin-bottom:10px}[_nghost-%COMP%]   .text--wrap[_ngcontent-%COMP%]{white-space:pre-wrap}"],
                changeDetection: 0
            }),
            n
        }
        )();
        const nn = ["securekeyForm"]
          , rn = function() {
            return {
                reason: "user"
            }
        }
          , an = function(n) {
            return ["/login/secure-key/cancel", n]
        };
        let on = (()=>{
            class n extends ((0,
            A.Q)()) {
                constructor(t, i, r, s, d) {
                    super(),
                    this.store = t,
                    this.secureKeyAdapter = i,
                    this.gateKeeperService = r,
                    this.overlayService = s,
                    this.translationsService = d
                }
                ionViewDidEnter() {
                    this.ionSubscriptions.add(this.store.select(g.Ff).pipe((0,
                    C.U)(({params: t})=>Object.assign({}, t)), (0,
                    G.w)(({lang: t, SAMLRequest: i})=>this.validateKey(t, i)), (0,
                    x.K)(t=>(this.onSamlValidationError(t),
                    X.E))).subscribe()),
                    this.ionSubscriptions.add(this.overlayService.openSecureKeyTransferOverlay().subscribe(t=>{
                        this.transitionOverlay = t
                    }
                    ))
                }
                ionViewWillLeave() {
                    var t;
                    null === (t = this.transitionOverlay) || void 0 === t || t.close()
                }
                validateKey(t, i) {
                    return this.secureKeyAdapter.verifySamlRequest(t, i).pipe((0,
                    C.U)(r=>null == r ? void 0 : r.data), (0,
                    G.w)(r=>this.returnToOrigin(r)))
                }
                onSamlValidationError(t) {
                    this.store.dispatch((0,
                    W.Bv)(Object.assign(Object.assign({}, t), {
                        redirectTo: c.iM.CUSTOM_SECUREKEY_ERROR_PAGE
                    })))
                }
                returnToOrigin(t) {
                    var i;
                    const r = null === (i = this.securekeyForm) || void 0 === i ? void 0 : i.nativeElement
                      , {elapsedTime: s, responseURL: d, SAMLResponse: u} = null != t ? t : {};
                    if (void 0 === s || !d || !u)
                        return (0,
                        Q._)({
                            message: "Missing Response"
                        });
                    if (!r)
                        return (0,
                        Q._)({
                            message: "Missing SecureKey Form"
                        });
                    const E = "fr-CA" === this.translationsService.getCurrentLanguage() ? "fr" : "en";
                    return r.innerHTML = "",
                    r.action = d,
                    this.gateKeeperService.addHiddenInputToForm(r, "elapsedTime", s.toString()),
                    this.gateKeeperService.addHiddenInputToForm(r, "SAMLResponse", u),
                    this.gateKeeperService.addHiddenInputToForm(r, "lang", E),
                    r.submit(),
                    (0,
                    H.of)()
                }
            }
            return n.\u0275fac = function(t) {
                return new (t || n)(e.\u0275\u0275directiveInject(M.yh),e.\u0275\u0275directiveInject(xe),e.\u0275\u0275directiveInject(pe),e.\u0275\u0275directiveInject(Fe),e.\u0275\u0275directiveInject(B.fA))
            }
            ,
            n.\u0275cmp = e.\u0275\u0275defineComponent({
                type: n,
                selectors: [["app-verify-secure-key-request"]],
                viewQuery: function(t, i) {
                    if (1 & t && e.\u0275\u0275viewQuery(nn, 5),
                    2 & t) {
                        let r;
                        e.\u0275\u0275queryRefresh(r = e.\u0275\u0275loadQuery()) && (i.securekeyForm = r.first)
                    }
                },
                features: [e.\u0275\u0275InheritDefinitionFeature],
                decls: 12,
                vars: 15,
                consts: [[1, "fdc-row", "flow-wrap", "mb-80p"], [1, "fdc-col-12", "mt-32p"], [3, "internalRouterLink", "analytics", "trackDynatrace"], [3, "innerHTML"], [1, "fdc-col-12", "align-center", "mt-32p", "mb-80p", "provider-logo"], ["id", "securekey-logo", "height", "94", 3, "src", "alt"], ["id", "securekey", "method", "post", "action", ""], ["securekeyForm", ""]],
                template: function(t, i) {
                    1 & t && (e.\u0275\u0275elementStart(0, "app-centered-layout-container")(1, "div", 0)(2, "div", 1)(3, "fdc-breadcrumb", 2),
                    e.\u0275\u0275element(4, "span", 3),
                    e.\u0275\u0275pipe(5, "translate"),
                    e.\u0275\u0275elementEnd()(),
                    e.\u0275\u0275elementStart(6, "div", 4),
                    e.\u0275\u0275element(7, "img", 5),
                    e.\u0275\u0275pipe(8, "translate"),
                    e.\u0275\u0275pipe(9, "translate"),
                    e.\u0275\u0275elementEnd()(),
                    e.\u0275\u0275element(10, "form", 6, 7),
                    e.\u0275\u0275elementEnd()),
                    2 & t && (e.\u0275\u0275advance(3),
                    e.\u0275\u0275property("internalRouterLink", e.\u0275\u0275pureFunction1(13, an, e.\u0275\u0275pureFunction0(12, rn)))("analytics", "secure-key-verify return-to-verifyme link")("trackDynatrace", !0),
                    e.\u0275\u0275advance(1),
                    e.\u0275\u0275property("innerHTML", e.\u0275\u0275pipeBind1(5, 6, "PAGE.LOGIN_SECUREKEY.BREADCRUMB_BACK.LABEL"), e.\u0275\u0275sanitizeHtml),
                    e.\u0275\u0275advance(3),
                    e.\u0275\u0275property("src", e.\u0275\u0275pipeBind1(8, 8, "PAGE.LOGIN_SECUREKEY.VERIFIEDME_LOGO.SRC"), e.\u0275\u0275sanitizeUrl)("alt", e.\u0275\u0275pipeBind1(9, 10, "PAGE.LOGIN_SECUREKEY.VERIFIEDME_LOGO.ALT")))
                },
                directives: [$.v, ge.L, j.v, p.\u0275NgNoValidate, p.NgControlStatusGroup, p.NgForm],
                pipes: [h.X$],
                styles: ["[_nghost-%COMP%]{background:var(--global-bg-color)}[_nghost-%COMP%]   main[_ngcontent-%COMP%]{min-height:100%}"],
                changeDetection: 0
            }),
            n
        }
        )();
        var mn = a(28181);
        const un = ["ssoLoginForm"];
        let hn = (()=>{
            class n extends ((0,
            A.Q)()) {
                constructor(t, i, r, s, d) {
                    super(),
                    this.translationsService = t,
                    this.transitionOverlayService = i,
                    this.store = r,
                    this.cookieService = s,
                    this.gateKeeperService = d
                }
                ionViewDidEnter() {
                    this.ionSubscriptions.add(this.openTransitionOverlay().pipe((0,
                    G.w)(t=>(this.overlay = t,
                    this.store.select(g.Ff).pipe((0,
                    pt.n)(({isLoaded: i})=>!0 !== i))))).subscribe(t=>{
                        var i, r, s;
                        const d = null !== (i = null == t ? void 0 : t.params.state) && void 0 !== i ? i : ""
                          , u = null !== (r = null == t ? void 0 : t.params.TGT) && void 0 !== r ? r : ""
                          , E = null !== (s = null == t ? void 0 : t.hostname) && void 0 !== s ? s : "";
                        this.cookieService.get("CardInPilot").then((D="true")=>{
                            "false" === D ? this.gateKeeperService.submitToOLBSSOSignOn(this.ssoLoginForm, d, u, E) : this.store.dispatch((0,
                            f.Gb)({
                                tgt: u
                            }))
                        }
                        )
                    }
                    ))
                }
                ionViewDidLeave() {
                    var t;
                    null === (t = this.overlay) || void 0 === t || t.close(),
                    super.ionViewDidLeave()
                }
                openTransitionOverlay() {
                    return this.translationsService.stream("TRANSITIONS.DEFAULT").pipe((0,
                    v.q)(1), (0,
                    C.U)(t=>this.transitionOverlayService.open(t)))
                }
            }
            return n.\u0275fac = function(t) {
                return new (t || n)(e.\u0275\u0275directiveInject(B.fA),e.\u0275\u0275directiveInject(lt.B),e.\u0275\u0275directiveInject(M.yh),e.\u0275\u0275directiveInject(mn.N),e.\u0275\u0275directiveInject(pe))
            }
            ,
            n.\u0275cmp = e.\u0275\u0275defineComponent({
                type: n,
                selectors: [["app-sso-login"]],
                viewQuery: function(t, i) {
                    if (1 & t && e.\u0275\u0275viewQuery(un, 5),
                    2 & t) {
                        let r;
                        e.\u0275\u0275queryRefresh(r = e.\u0275\u0275loadQuery()) && (i.ssoLoginForm = r.first)
                    }
                },
                features: [e.\u0275\u0275InheritDefinitionFeature],
                decls: 3,
                vars: 0,
                consts: [["id", "ssoLoginForm", "method", "post", "action", ""], ["ssoLoginForm", ""]],
                template: function(t, i) {
                    1 & t && (e.\u0275\u0275elementStart(0, "app-centered-layout-container"),
                    e.\u0275\u0275element(1, "form", 0, 1),
                    e.\u0275\u0275elementEnd())
                },
                directives: [$.v, p.\u0275NgNoValidate, p.NgControlStatusGroup, p.NgForm],
                encapsulation: 2
            }),
            n
        }
        )();
        var gn = a(76317)
          , mt = a(18332)
          , De = a(57693)
          , vn = a(19011)
          , ut = a(92769)
          , En = a(70885);
        const _n = ["toggleSwitch"]
          , bn = ["changePassword"];
        function Sn(n, o) {
            if (1 & n) {
                const t = e.\u0275\u0275getCurrentView();
                e.\u0275\u0275elementStart(0, "fdc-notification-banner", 15),
                e.\u0275\u0275listener("notificationClosed", function() {
                    return e.\u0275\u0275restoreView(t),
                    e.\u0275\u0275nextContext(2).onErrorNotificationClosed()
                }),
                e.\u0275\u0275pipe(1, "translate"),
                e.\u0275\u0275element(2, "div", 16),
                e.\u0275\u0275pipe(3, "translate"),
                e.\u0275\u0275elementEnd()
            }
            if (2 & n) {
                const t = e.\u0275\u0275nextContext(2);
                e.\u0275\u0275property("isErrorVisible", t.showErrorNotification)("showNotification", t.showErrorNotification)("errorCode", t.errorNotification.errorCode)("errorBody", e.\u0275\u0275pipeBind1(1, 6, t.errorNotification.message)),
                e.\u0275\u0275attribute("id", "lp-banner-err"),
                e.\u0275\u0275advance(2),
                e.\u0275\u0275property("innerHTML", e.\u0275\u0275pipeBind1(3, 8, t.errorNotification.title), e.\u0275\u0275sanitizeHtml)
            }
        }
        function Cn(n, o) {
            if (1 & n && (e.\u0275\u0275elementStart(0, "div", 12)(1, "div", 13),
            e.\u0275\u0275template(2, Sn, 4, 10, "fdc-notification-banner", 14),
            e.\u0275\u0275elementEnd()()),
            2 & n) {
                const t = e.\u0275\u0275nextContext();
                e.\u0275\u0275advance(2),
                e.\u0275\u0275property("ngIf", t.errorNotification)
            }
        }
        const Tn = function(n, o, t) {
            return {
                required: n,
                invalidFrenchCharacter: o,
                invalidSpecialCharacter: t
            }
        };
        let Pn = (()=>{
            class n extends ((0,
            Ee.L)()) {
                constructor(t, i, r, s, d) {
                    super(),
                    this.fb = t,
                    this.store = i,
                    this.actions$ = r,
                    this.changeDetector = s,
                    this.platformInfoService = d,
                    this.isLoading = !1,
                    this.changePasswordForm = this.fb.group({
                        changePassword: ["", De.l5]
                    }),
                    this.inputType = z.oP.PASSWORD,
                    this.inputTypes = z.oP,
                    this.inputType$ = new gn.X(z.oP.PASSWORD),
                    this.resetTempPassword = {
                        id: "resetTempPassword"
                    },
                    this.showErrorNotification = !0,
                    this.maxPasswordLength = Ae.JJ.PASSWORD_MAX_LEN,
                    this.mfaAction$ = this.store.select(g.a4),
                    this.hasReturnedToLogin = !1,
                    this.isMobileApp = !1,
                    this.newPasswordErrorSorter = De.SS,
                    this.subscriptions.add(this.mfaAction$.pipe((0,
                    v.q)(1)).subscribe(u=>{
                        u || (this.store.dispatch((0,
                        T.gd)({})),
                        this.hasReturnedToLogin = !0)
                    }
                    ))
                }
                ngOnInit() {
                    this.subscriptions.add(this.actions$.pipe((0,
                    mt.l4)(f.TX)).subscribe(t=>this.onChangeTemporaryPasswordFail(t))),
                    this.isMobileApp = this.platformInfoService.isNative
                }
                ionViewDidLeave() {
                    this.isLoading = !1,
                    (0,
                    le.Xn)(window.location.pathname) && !this.hasReturnedToLogin && this.store.dispatch((0,
                    T.gd)({})),
                    this.hasReturnedToLogin = !1,
                    this.changeDetector.detectChanges()
                }
                ionViewDidEnter() {
                    this.store.dispatch((0,
                    V.nN)())
                }
                onSubmit() {
                    if (this.changePasswordForm.invalid)
                        return ee.f.validateAllFormFields(this.changePasswordForm),
                        this.errorNotification = this.generateLocalValidationError(),
                        this.showErrorNotification = !0,
                        void (this.changePassword && this.changePassword.inputRef.nativeElement.focus());
                    this.errorNotification = void 0,
                    this.showErrorNotification = !1;
                    const {value: t} = this.changePasswordForm.controls.changePassword;
                    this.isLoading = !0,
                    this.onErrorNotificationClosed(),
                    this.store.dispatch(f.jE({
                        currentPassword: "",
                        newPassword: t,
                        repeatedNewPassword: t
                    }))
                }
                generateLocalValidationError() {
                    let t = this.projectNotificationError({
                        validationErrors: [{
                            code: "SI/LOCAL/PWR/001"
                        }]
                    });
                    return null == t || delete t.errorCode,
                    t
                }
                onChangeTemporaryPasswordFail(t) {
                    this.errorNotification = this.projectNotificationError(t),
                    this.showErrorNotification = !0,
                    this.inputType = z.oP.PASSWORD,
                    this.changePasswordForm.reset(),
                    this.changePasswordForm.controls.changePassword.setErrors(De.bK),
                    this.changeDetector.markForCheck()
                }
                projectNotificationError(t) {
                    const i = _.b$.projectErrorCode(t)
                      , r = _.b$.mapErrorMessage(i);
                    return this.isLoading = !1,
                    i.code === c.jK.PWD_MAXATTEMPTS ? (this.store.dispatch((0,
                    W.Bv)(Object.assign(Object.assign({}, t), {
                        redirectTo: c.iM.LOGIN_ERROR_BANNER
                    }))),
                    void (this.hasReturnedToLogin = !0)) : (c.Oq.includes(i.code) && this.store.dispatch((0,
                    W.Bv)(Object.assign(Object.assign({}, t), {
                        redirectTo: c.iM.ERROR_PAGE
                    }))),
                    r ? {
                        title: r.title,
                        message: r.message,
                        errorCode: i.serverCode,
                        type: R.$.DANGER
                    } : void 0)
                }
                onErrorNotificationClosed() {
                    this.showErrorNotification = !1
                }
            }
            return n.\u0275fac = function(t) {
                return new (t || n)(e.\u0275\u0275directiveInject(p.FormBuilder),e.\u0275\u0275directiveInject(M.yh),e.\u0275\u0275directiveInject(mt.eX),e.\u0275\u0275directiveInject(e.ChangeDetectorRef),e.\u0275\u0275directiveInject(ae.t))
            }
            ,
            n.\u0275cmp = e.\u0275\u0275defineComponent({
                type: n,
                selectors: [["app-reset-temp-password"]],
                viewQuery: function(t, i) {
                    if (1 & t && (e.\u0275\u0275viewQuery(_n, 5, e.ElementRef),
                    e.\u0275\u0275viewQuery(bn, 5)),
                    2 & t) {
                        let r;
                        e.\u0275\u0275queryRefresh(r = e.\u0275\u0275loadQuery()) && (i.toggleSwitch = r.first),
                        e.\u0275\u0275queryRefresh(r = e.\u0275\u0275loadQuery()) && (i.changePassword = r.first)
                    }
                },
                features: [e.\u0275\u0275InheritDefinitionFeature],
                decls: 19,
                vars: 39,
                consts: [["fdcPopstateWarning", "", 3, "id", "title", "primaryButtonLabel", "primaryButtonVisible", "secondaryButtonVisible", "isStepperVisible", "linkVisible", "primaryButtonDisable", "primaryLoading", "primaryButtonClicked"], [3, "formGroup", "ngSubmit"], ["class", "fdc-row flow-row", 4, "ngIf"], [1, "fdc-row", "flow-wrap", "mt-40p", "mt-sm-24p", "flex", "body-1"], [1, "fdc-col-8", "fdc-lg-col-8", "fdc-sm-col-4", "fdc-xsm-col-4", "fdc-sub-grid-col-8", "fdc-sub-grid-sm-col-4"], [1, "fdc-body1", 3, "innerHTML"], [1, "input-container"], ["id", "change-password", "name", "change-password-input", "fdcA11yToggleInput", "", "formControlName", "changePassword", 1, "fdc-input--show-valid", 3, "ariaDescribedBy", "type", "maxLength", "errorMessages", "errorKeySorter", "label", "analytics"], ["changePassword", ""], [3, "id", "errors"], [1, "fdc-col-4", "fdc-lg-col-4", "fdc-sm-col-4", "fdc-xsm-col-4"], [1, "credential-image", "pull-right"], [1, "fdc-row", "flow-row"], [1, "fdc-col-12", "mt-8p"], ["type", "danger", "analyticsError", "", 3, "isErrorVisible", "showNotification", "errorCode", "errorBody", "notificationClosed", 4, "ngIf"], ["type", "danger", "analyticsError", "", 3, "isErrorVisible", "showNotification", "errorCode", "errorBody", "notificationClosed"], ["heading", "", 3, "innerHTML"]],
                template: function(t, i) {
                    if (1 & t && (e.\u0275\u0275elementStart(0, "app-inline-takeover", 0),
                    e.\u0275\u0275listener("primaryButtonClicked", function() {
                        return i.onSubmit()
                    }),
                    e.\u0275\u0275pipe(1, "translate"),
                    e.\u0275\u0275pipe(2, "translate"),
                    e.\u0275\u0275elementStart(3, "form", 1),
                    e.\u0275\u0275listener("ngSubmit", function() {
                        return i.onSubmit()
                    }),
                    e.\u0275\u0275template(4, Cn, 3, 1, "div", 2),
                    e.\u0275\u0275elementStart(5, "div", 3)(6, "div", 4),
                    e.\u0275\u0275element(7, "p", 5),
                    e.\u0275\u0275pipe(8, "translate"),
                    e.\u0275\u0275elementStart(9, "div", 6),
                    e.\u0275\u0275element(10, "fdc-input", 7, 8),
                    e.\u0275\u0275pipe(12, "translate"),
                    e.\u0275\u0275pipe(13, "translate"),
                    e.\u0275\u0275pipe(14, "translate"),
                    e.\u0275\u0275pipe(15, "translate"),
                    e.\u0275\u0275elementEnd(),
                    e.\u0275\u0275element(16, "app-new-password-criteria", 9),
                    e.\u0275\u0275elementEnd(),
                    e.\u0275\u0275elementStart(17, "div", 10),
                    e.\u0275\u0275element(18, "div", 11),
                    e.\u0275\u0275elementEnd()()()()),
                    2 & t) {
                        let r;
                        e.\u0275\u0275property("id", i.resetTempPassword.id + "-takeover")("title", e.\u0275\u0275pipeBind1(1, 21, "APP.CHANGE_PASSWORD.TITLE"))("primaryButtonLabel", e.\u0275\u0275pipeBind1(2, 23, "APP.CHANGE_PASSWORD.CTA"))("primaryButtonVisible", !0)("secondaryButtonVisible", !1)("isStepperVisible", !1)("linkVisible", !1)("primaryButtonDisable", !1)("primaryLoading", i.isLoading),
                        e.\u0275\u0275advance(3),
                        e.\u0275\u0275property("formGroup", i.changePasswordForm),
                        e.\u0275\u0275advance(1),
                        e.\u0275\u0275property("ngIf", i.errorNotification),
                        e.\u0275\u0275advance(3),
                        e.\u0275\u0275property("innerHTML", e.\u0275\u0275pipeBind1(8, 25, "APP.CHANGE_PASSWORD.DESC"), e.\u0275\u0275sanitizeHtml),
                        e.\u0275\u0275advance(3),
                        e.\u0275\u0275property("ariaDescribedBy", "reset-password-criteria")("type", i.inputType)("maxLength", i.maxPasswordLength)("errorMessages", e.\u0275\u0275pureFunction3(35, Tn, e.\u0275\u0275pipeBind1(12, 27, "APP.CHANGE_PASSWORD_TAKEOVER.NEW_PASSWORD_REQUIRED"), e.\u0275\u0275pipeBind1(13, 29, "APP.CHANGE_PASSWORD.FRENCH_CHAR_NOT_ALLOWED"), e.\u0275\u0275pipeBind1(14, 31, "APP.CHANGE_PASSWORD.FRENCH_CHAR_NOT_ALLOWED")))("errorKeySorter", i.newPasswordErrorSorter)("label", e.\u0275\u0275pipeBind1(15, 33, "APP.CHANGE_PASSWORD.LABEL"))("analytics", "reset-temporary-password password input"),
                        e.\u0275\u0275advance(6),
                        e.\u0275\u0275property("id", "reset-password-criteria")("errors", null == (r = i.changePasswordForm.get("changePassword")) ? null : r.errors)
                    }
                },
                directives: [he.h, p.\u0275NgNoValidate, p.NgControlStatusGroup, p.FormGroupDirective, l.O5, R.B1, vn.z, oe.a, ut.M4, p.NgControlStatus, p.FormControlName, j.v, En.b],
                pipes: [h.X$],
                styles: ["[_nghost-%COMP%]   .fill-white[_ngcontent-%COMP%]{background-color:var(--bmo-white)}[_nghost-%COMP%]   .divider--single[_ngcontent-%COMP%]{border-bottom:1px solid var(--bmo-light-grey)}[_nghost-%COMP%]   .input-container[_ngcontent-%COMP%]{margin-top:16px;max-width:415px}[_nghost-%COMP%]   .credential-image[_ngcontent-%COMP%]{width:100%;max-width:240px;height:200px;background-size:contain;background-repeat:no-repeat;background-image:url(resources/credentials.bdbe303ca03980a0.svg)}@media only screen and (max-width: 599px){[_nghost-%COMP%]   .credential-image[_ngcontent-%COMP%]{display:none}}[_nghost-%COMP%]   .mask-toggle[_ngcontent-%COMP%]{cursor:pointer}[_nghost-%COMP%]   .mask-toggle_glyph[_ngcontent-%COMP%]{height:24px;width:24px;background-repeat:no-repeat;background-position:center;margin-right:4px}[_nghost-%COMP%]   .mask-toggle_glyph.password[_ngcontent-%COMP%]{background-image:url(resources/Show.04ed7b5ea4071bf6.svg)}[_nghost-%COMP%]   .mask-toggle_glyph.text[_ngcontent-%COMP%]{background-image:url(resources/Hide.c9fc1cd1cd574448.svg)}[_nghost-%COMP%]   .cta-wrapper[_ngcontent-%COMP%]{align-self:center;max-width:none}"]
            }),
            n
        }
        )();
        const yn = ["confirmationPassword"];
        let An = (()=>{
            class n extends ((0,
            A.Q)()) {
                constructor(t, i, r) {
                    super(),
                    this.store = t,
                    this.loginService = i,
                    this.platformInfoService = r,
                    this.mfaAction = "",
                    this.isMobile = this.platformInfoService.isIos || this.platformInfoService.isAndroid,
                    this.resetTempPasswordConfirmation = {
                        id: "resetTempPasswordConfirmation"
                    }
                }
                ngOnInit() {
                    this.subscriptions.add(this.store.select(g.a4).subscribe(t=>{
                        this.mfaAction = t
                    }
                    ))
                }
                ionViewWillEnter() {
                    var t;
                    this.ionSubscriptions.add(this.loginService.redirectToLogin().subscribe()),
                    null === (t = this.confirmationPassword) || void 0 === t || t.nativeElement.focus()
                }
                continueToOnlineBanking() {
                    if (this.mfaAction === te._.NOT_ENROLLED_IN_MFA)
                        this.store.dispatch(f.mg());
                    else {
                        if (this.mfaAction !== te._.PARTIALLY_ENROLLED)
                            return this.store.dispatch(f.pP());
                        this.store.dispatch(f.Et())
                    }
                }
            }
            return n.\u0275fac = function(t) {
                return new (t || n)(e.\u0275\u0275directiveInject(M.yh),e.\u0275\u0275directiveInject(_e.r),e.\u0275\u0275directiveInject(ae.t))
            }
            ,
            n.\u0275cmp = e.\u0275\u0275defineComponent({
                type: n,
                selectors: [["app-reset-temp-password-confirmation"]],
                viewQuery: function(t, i) {
                    if (1 & t && e.\u0275\u0275viewQuery(yn, 5),
                    2 & t) {
                        let r;
                        e.\u0275\u0275queryRefresh(r = e.\u0275\u0275loadQuery()) && (i.confirmationPassword = r.first)
                    }
                },
                features: [e.\u0275\u0275InheritDefinitionFeature],
                decls: 14,
                vars: 22,
                consts: [["fdcPopstateWarning", "", 3, "id", "title", "primaryButtonLabel", "primaryButtonVisible", "secondaryButtonVisible", "isStepperVisible", "linkVisible", "primaryButtonDisable", "primaryButtonClicked"], [1, "fdc-row", "flow-row", "mb-64p", "mt-32p"], [1, "fdc-col-7", "fdc-sm-col-4"], [1, "fdc-heading1", "light", "mb-16p", 3, "innerHTML"], [1, "fdc-title1", "mb-16p", "non-interactive-focus", 3, "innerHTML"], ["confirmationPassword", ""], [1, "fdc-body1", 3, "innerHTML"], [1, "fdc-col-4", "fdc-lg-col-4", "fdc-sm-col-4", "fdc-xsm-col-4"], [1, "done-image", "pull-right"]],
                template: function(t, i) {
                    1 & t && (e.\u0275\u0275elementStart(0, "app-inline-takeover", 0),
                    e.\u0275\u0275listener("primaryButtonClicked", function() {
                        return i.continueToOnlineBanking()
                    }),
                    e.\u0275\u0275pipe(1, "translate"),
                    e.\u0275\u0275pipe(2, "translate"),
                    e.\u0275\u0275elementStart(3, "div", 1)(4, "div", 2),
                    e.\u0275\u0275element(5, "h1", 3),
                    e.\u0275\u0275pipe(6, "translate"),
                    e.\u0275\u0275element(7, "p", 4, 5),
                    e.\u0275\u0275pipe(9, "translate"),
                    e.\u0275\u0275element(10, "p", 6),
                    e.\u0275\u0275pipe(11, "translate"),
                    e.\u0275\u0275elementEnd(),
                    e.\u0275\u0275elementStart(12, "div", 7),
                    e.\u0275\u0275element(13, "div", 8),
                    e.\u0275\u0275elementEnd()()()),
                    2 & t && (e.\u0275\u0275property("id", i.resetTempPasswordConfirmation.id + "-takeover")("title", e.\u0275\u0275pipeBind1(1, 12, "APP.CHANGE_PASSWORD.TITLE"))("primaryButtonLabel", e.\u0275\u0275pipeBind1(2, 14, "APP.CHANGE_PASSWORD.CONFIRMATION_CTA"))("primaryButtonVisible", !0)("secondaryButtonVisible", !1)("isStepperVisible", !1)("linkVisible", !1)("primaryButtonDisable", !1),
                    e.\u0275\u0275advance(5),
                    e.\u0275\u0275property("innerHTML", e.\u0275\u0275pipeBind1(6, 16, "APP.CHANGE_PASSWORD.DONE"), e.\u0275\u0275sanitizeHtml),
                    e.\u0275\u0275advance(2),
                    e.\u0275\u0275property("innerHTML", e.\u0275\u0275pipeBind1(9, 18, "APP.CHANGE_PASSWORD.CONFIRMATION_MESSAGE"), e.\u0275\u0275sanitizeHtml),
                    e.\u0275\u0275attribute("tabindex", i.isMobile ? -1 : null),
                    e.\u0275\u0275advance(3),
                    e.\u0275\u0275property("innerHTML", e.\u0275\u0275pipeBind1(11, 20, "APP.CHANGE_PASSWORD.CONFIRMATION_TEXT"), e.\u0275\u0275sanitizeHtml))
                },
                directives: [he.h],
                pipes: [h.X$],
                styles: ["[_nghost-%COMP%]   .fill-white[_ngcontent-%COMP%]{background-color:var(--bmo-white)}[_nghost-%COMP%]   .divider--single[_ngcontent-%COMP%]{border-bottom:1px solid var(--bmo-light-grey)}[_nghost-%COMP%]   .done-image[_ngcontent-%COMP%]{width:100%;max-width:240px;height:200px;background-size:contain;background-repeat:no-repeat;background-image:url(resources/request_success.d7bc7b5d1a1a79e0.svg)}@media only screen and (max-width: 599px){[_nghost-%COMP%]   .done-image[_ngcontent-%COMP%]{display:none}}[_nghost-%COMP%]   .cta-wrapper[_ngcontent-%COMP%]{align-self:center;max-width:none}"],
                changeDetection: 0
            }),
            n
        }
        )()
          , Ln = (()=>{
            class n {
                constructor(t) {
                    this.store = t
                }
                canActivate() {
                    return this.store.select(g.sK).pipe((0,
                    y.b)(t=>this.retrieveFromStorage(t)), (0,
                    v.q)(1), (0,
                    G.w)(()=>(0,
                    H.of)(!0)), (0,
                    x.K)(()=>(0,
                    H.of)(!0)))
                }
                retrieveFromStorage(t) {
                    t || this.store.dispatch((0,
                    f.X3)())
                }
            }
            return n.\u0275fac = function(t) {
                return new (t || n)(e.\u0275\u0275inject(M.yh))
            }
            ,
            n.\u0275prov = e.\u0275\u0275defineInjectable({
                token: n,
                factory: n.\u0275fac,
                providedIn: "root"
            }),
            n
        }
        )();
        var ke = a(26828)
          , Rn = a(37361)
          , Mn = a(5592)
          , He = a(9854)
          , Ue = a(61977)
          , ht = a(20744);
        function In(n, o) {
            1 & n && e.\u0275\u0275element(0, "div")
        }
        function On(n, o) {
            if (1 & n && (e.\u0275\u0275element(0, "fdc-radio-button", 7),
            e.\u0275\u0275pipe(1, "slice")),
            2 & n) {
                const t = o.$implicit;
                e.\u0275\u0275property("value", t.accountIndex)("label", t.productName + " " + e.\u0275\u0275pipeBind2(1, 2, t.accountNumber, -4))
            }
        }
        const Nn = function(n) {
            return {
                required: n
            }
        };
        function Bn(n, o) {
            if (1 & n && (e.\u0275\u0275elementStart(0, "form", 4)(1, "fdc-radio-button-group", 5),
            e.\u0275\u0275pipe(2, "translate"),
            e.\u0275\u0275pipe(3, "translate"),
            e.\u0275\u0275template(4, On, 2, 5, "fdc-radio-button", 6),
            e.\u0275\u0275elementEnd()()),
            2 & n) {
                const t = e.\u0275\u0275nextContext();
                e.\u0275\u0275property("formGroup", t.form),
                e.\u0275\u0275advance(1),
                e.\u0275\u0275property("legend", e.\u0275\u0275pipeBind1(2, 4, "CONTAINER.REWARDS.SELECT.PICK_ONE"))("errorMessages", e.\u0275\u0275pureFunction1(8, Nn, e.\u0275\u0275pipeBind1(3, 6, "CONTAINER.REWARDS.SELECT.INLINE_ERROR"))),
                e.\u0275\u0275advance(3),
                e.\u0275\u0275property("ngForOf", t.cards)
            }
        }
        function wn(n, o) {
            if (1 & n) {
                const t = e.\u0275\u0275getCurrentView();
                e.\u0275\u0275elementStart(0, "fdc-in-page-error", 8),
                e.\u0275\u0275pipe(1, "translate"),
                e.\u0275\u0275pipe(2, "translate"),
                e.\u0275\u0275elementStart(3, "app-in-page-error-link", 9),
                e.\u0275\u0275listener("clickHandler", function() {
                    return e.\u0275\u0275restoreView(t),
                    e.\u0275\u0275nextContext().onPrimaryButtonClick()
                }),
                e.\u0275\u0275pipe(4, "translate"),
                e.\u0275\u0275elementEnd()()
            }
            2 & n && (e.\u0275\u0275property("title", e.\u0275\u0275pipeBind1(1, 3, "CONTAINER.REWARDS.ERROR_NOTIFICATION.TITLE"))("errorBody", e.\u0275\u0275pipeBind1(2, 5, "CONTAINER.REWARDS.ERROR_NOTIFICATION.BMO_REWARDS")),
            e.\u0275\u0275advance(3),
            e.\u0275\u0275property("contents", e.\u0275\u0275pipeBind1(4, 7, "CONTAINER.REWARDS.ERROR_CTA")))
        }
        let Fn = (()=>{
            class n extends ((0,
            Ee.L)()) {
                constructor(t, i, r, s) {
                    super(),
                    this.fb = t,
                    this.cdr = i,
                    this.store = r,
                    this.rewardsService = s,
                    this.showError = !1,
                    this.form = this.fb.group({
                        reward: ["", p.Validators.required]
                    })
                }
                onPrimaryButtonClick() {
                    this.showError ? this.navigateToBmoRewards() : (ee.f.validateAllFormFields(this.form),
                    this.form.valid && this.subscriptions.add(this.openBmoReward(this.form.controls.reward.value).subscribe()))
                }
                navigateToBmoRewards() {
                    this.rewardsService.openBmoRewardsHomePage()
                }
                openBmoReward(t) {
                    return this.rewardsService.openRewardTransitionOverlay().pipe((0,
                    G.w)(i=>this.rewardsService.openBmoRewardsProgram(t, "_self").pipe((0,
                    v.q)(1), (0,
                    x.K)(()=>(i.close(),
                    this.showErrorMessage(),
                    X.E)))))
                }
                showErrorMessage() {
                    this.showError = !0,
                    this.cdr.markForCheck(),
                    this.store.dispatch((0,
                    P.tz)({
                        data: [{
                            errorType: "error",
                            displayType: "page",
                            code: ""
                        }]
                    }))
                }
            }
            return n.\u0275fac = function(t) {
                return new (t || n)(e.\u0275\u0275directiveInject(p.FormBuilder),e.\u0275\u0275directiveInject(e.ChangeDetectorRef),e.\u0275\u0275directiveInject(M.yh),e.\u0275\u0275directiveInject(ke.d))
            }
            ,
            n.\u0275cmp = e.\u0275\u0275defineComponent({
                type: n,
                selectors: [["app-rewards-select"]],
                inputs: {
                    cards: "cards"
                },
                features: [e.\u0275\u0275InheritDefinitionFeature],
                decls: 9,
                vars: 18,
                consts: [["id", "select-rewards-card", "secondaryButtonColor", "secondary", "fdcPopstateWarning", "", 3, "isStepperVisible", "title", "primaryButtonVisible", "primaryButtonLabel", "secondaryButtonVisible", "secondaryButtonLabel", "hideBottomSeparator", "fdcRefreshWarning", "showPopstateWarning", "primaryButtonClicked", "secondaryButtonClicked"], [4, "ngIf", "ngIfThen", "ngIfElse"], ["formBlock", ""], ["errorBlock", ""], [3, "formGroup"], ["formControlName", "reward", 1, "reward-group", "mt-32p", 3, "legend", "errorMessages"], ["name", "reward-option", 3, "value", "label", 4, "ngFor", "ngForOf"], ["name", "reward-option", 3, "value", "label"], [3, "title", "errorBody"], ["analytics", "rewards-jump-error return-to-bmorewards button", 3, "contents", "clickHandler"]],
                template: function(t, i) {
                    if (1 & t && (e.\u0275\u0275elementStart(0, "app-inline-takeover", 0),
                    e.\u0275\u0275listener("primaryButtonClicked", function() {
                        return i.onPrimaryButtonClick()
                    })("secondaryButtonClicked", function() {
                        return i.navigateToBmoRewards()
                    }),
                    e.\u0275\u0275pipe(1, "translate"),
                    e.\u0275\u0275pipe(2, "translate"),
                    e.\u0275\u0275pipe(3, "translate"),
                    e.\u0275\u0275template(4, In, 1, 0, "div", 1),
                    e.\u0275\u0275template(5, Bn, 5, 10, "ng-template", null, 2, e.\u0275\u0275templateRefExtractor),
                    e.\u0275\u0275template(7, wn, 5, 9, "ng-template", null, 3, e.\u0275\u0275templateRefExtractor),
                    e.\u0275\u0275elementEnd()),
                    2 & t) {
                        const r = e.\u0275\u0275reference(6)
                          , s = e.\u0275\u0275reference(8);
                        e.\u0275\u0275property("isStepperVisible", !1)("title", e.\u0275\u0275pipeBind1(1, 12, "CONTAINER.REWARDS.SELECT.TITLE"))("primaryButtonVisible", !i.showError)("primaryButtonLabel", e.\u0275\u0275pipeBind1(2, 14, "COMMON.CONTINUE"))("secondaryButtonVisible", !i.showError)("secondaryButtonLabel", e.\u0275\u0275pipeBind1(3, 16, "CONTAINER.REWARDS.BACK_CTA"))("hideBottomSeparator", i.showError)("fdcRefreshWarning", !0)("showPopstateWarning", !0),
                        e.\u0275\u0275advance(4),
                        e.\u0275\u0275property("ngIf", i.showError)("ngIfThen", s)("ngIfElse", r)
                    }
                },
                directives: [he.h, Rn.gi, Mn.k, l.O5, p.\u0275NgNoValidate, p.NgControlStatusGroup, p.FormGroupDirective, He.Cw, p.NgControlStatus, p.FormControlName, l.sg, He._5, Ue.m, ht.x, j.v],
                pipes: [h.X$, l.OU],
                styles: ["[_nghost-%COMP%]   .reward-group[_ngcontent-%COMP%]{display:block}"],
                changeDetection: 0
            }),
            n
        }
        )();
        function xn(n, o) {
            if (1 & n && e.\u0275\u0275element(0, "app-rewards-select", 1),
            2 & n) {
                const t = e.\u0275\u0275nextContext();
                e.\u0275\u0275property("cards", t.rewards)
            }
        }
        let Dn = (()=>{
            class n extends ((0,
            A.Q)()) {
                constructor(t, i, r) {
                    super(),
                    this.store = t,
                    this.rewardsService = i,
                    this.cdr = r
                }
                ionViewDidEnter() {
                    this.ionSubscriptions.add(this.getEligibleRewards().subscribe())
                }
                ionViewDidLeave() {
                    var t;
                    null === (t = this.overlay) || void 0 === t || t.close(),
                    super.ionViewDidLeave()
                }
                getEligibleRewards() {
                    return this.rewardsService.openRewardTransitionOverlay().pipe((0,
                    G.w)(t=>(this.overlay = t,
                    this.rewardsService.getEligibleRewards().pipe((0,
                    v.q)(1), (0,
                    G.w)(i=>{
                        const r = i.cards.length;
                        if (0 === r)
                            return this.rewardsService.openStaticLink(i.emptyCardSsoLink, "_self");
                        if (1 === r) {
                            const {accountIndex: s} = i.cards[0];
                            return this.rewardsService.openBmoRewardsProgram(s, "_self").pipe((0,
                            x.K)(()=>this.raiseError(c.jK.REWARDS_MY_REWARDS_ISAM, t)))
                        }
                        return t.close(),
                        this.rewards = i.cards,
                        this.cdr.detectChanges(),
                        (0,
                        H.of)(!0)
                    }
                    ), (0,
                    x.K)(()=>this.raiseError(c.jK.REWARDS_LOAD_CARDS, t))))))
                }
                raiseError(t, i) {
                    return (0,
                    H.of)(!1).pipe((0,
                    y.b)(()=>{
                        i.close(),
                        this.store.dispatch((0,
                        W.Bv)({
                            overriddenErrorCode: t,
                            redirectTo: c.iM.CUSTOM_REWARDS_JUMP_ERROR_PAGE
                        }))
                    }
                    ))
                }
            }
            return n.\u0275fac = function(t) {
                return new (t || n)(e.\u0275\u0275directiveInject(M.yh),e.\u0275\u0275directiveInject(ke.d),e.\u0275\u0275directiveInject(e.ChangeDetectorRef))
            }
            ,
            n.\u0275cmp = e.\u0275\u0275defineComponent({
                type: n,
                selectors: [["app-rewards-jump"]],
                features: [e.\u0275\u0275InheritDefinitionFeature],
                decls: 1,
                vars: 1,
                consts: [[3, "cards", 4, "ngIf"], [3, "cards"]],
                template: function(t, i) {
                    1 & t && e.\u0275\u0275template(0, xn, 1, 1, "app-rewards-select", 0),
                    2 & t && e.\u0275\u0275property("ngIf", i.rewards)
                },
                directives: [l.O5, Fn],
                encapsulation: 2,
                changeDetection: 0
            }),
            n
        }
        )();
        function kn(n, o) {
            if (1 & n) {
                const t = e.\u0275\u0275getCurrentView();
                e.\u0275\u0275elementStart(0, "fdc-in-page-error", 4),
                e.\u0275\u0275pipe(1, "translate"),
                e.\u0275\u0275pipe(2, "translate"),
                e.\u0275\u0275elementStart(3, "app-in-page-error-link", 5),
                e.\u0275\u0275listener("clickHandler", function() {
                    return e.\u0275\u0275restoreView(t),
                    e.\u0275\u0275nextContext().navigateToBmoRewards()
                }),
                e.\u0275\u0275pipe(4, "translate"),
                e.\u0275\u0275elementEnd()()
            }
            if (2 & n) {
                const t = o.ngIf;
                e.\u0275\u0275property("title", e.\u0275\u0275pipeBind1(1, 3, t.title))("errorBody", e.\u0275\u0275pipeBind1(2, 5, t.message)),
                e.\u0275\u0275advance(3),
                e.\u0275\u0275property("contents", e.\u0275\u0275pipeBind1(4, 7, "CONTAINER.REWARDS.ERROR_CTA"))
            }
        }
        let Hn = (()=>{
            class n {
                constructor(t, i) {
                    this.store = t,
                    this.rewardsService = i,
                    this.error$ = this.store.select(ct.J).pipe((0,
                    C.U)(r=>this.projectErrorFromCode(r)))
                }
                ionViewWillEnter() {
                    this.error$.pipe((0,
                    v.q)(1)).subscribe(t=>{
                        this.store.dispatch((0,
                        P.DK)({
                            data: {
                                name: "rewards jump error",
                                eventData: {
                                    notifyData: [{
                                        display: "page",
                                        code: t.code,
                                        type: "error"
                                    }]
                                }
                            }
                        }))
                    }
                    )
                }
                projectErrorFromCode(t) {
                    return _.b$.mapErrorMessage({
                        code: t.code,
                        serverCode: t.serverCode,
                        snapshot: t.snapshot
                    })
                }
                navigateToBmoRewards() {
                    this.rewardsService.openBmoRewardsHomePage()
                }
            }
            return n.\u0275fac = function(t) {
                return new (t || n)(e.\u0275\u0275directiveInject(M.yh),e.\u0275\u0275directiveInject(ke.d))
            }
            ,
            n.\u0275cmp = e.\u0275\u0275defineComponent({
                type: n,
                selectors: [["app-rewards-jump-error"]],
                decls: 6,
                vars: 3,
                consts: [[1, "flow-column"], [1, "fdc-row", "flow-wrap"], [1, "fdc-col-12", "mt-48p", "mb-56p"], ["class", "mt-48p", 3, "title", "errorBody", 4, "ngIf"], [1, "mt-48p", 3, "title", "errorBody"], ["analytics", "rewards-sso-error return-to-bmorewards button", 3, "contents", "clickHandler"]],
                template: function(t, i) {
                    1 & t && (e.\u0275\u0275elementStart(0, "app-centered-layout-container")(1, "div", 0)(2, "div", 1)(3, "div", 2),
                    e.\u0275\u0275template(4, kn, 5, 9, "fdc-in-page-error", 3),
                    e.\u0275\u0275pipe(5, "async"),
                    e.\u0275\u0275elementEnd()()()()),
                    2 & t && (e.\u0275\u0275advance(4),
                    e.\u0275\u0275property("ngIf", e.\u0275\u0275pipeBind1(5, 1, i.error$)))
                },
                directives: [$.v, l.O5, Ue.m, ht.x, j.v],
                pipes: [h.X$, l.Ov],
                styles: ["[_nghost-%COMP%]{background:var(--global-bg-color)}"],
                changeDetection: 0
            }),
            n
        }
        )();
        var Un = a(26562)
          , Gn = a(76234)
          , Vn = a(87580)
          , Kn = a(8504)
          , Ge = a(95158)
          , Ve = a(8723)
          , Ke = a(65508)
          , je = a(57516)
          , jn = a(99378)
          , zn = a(64177);
        let Qn = (()=>{
            class n extends ((0,
            A.Q)()) {
                constructor(t, i, r, s) {
                    super(),
                    this.store = t,
                    this.ssoJumpService = i,
                    this.ssoService = r,
                    this.activatedRoute = s
                }
                ionViewDidEnter() {
                    this.ionSubscriptions.add(this.handleSsoJump().subscribe())
                }
                ionViewDidLeave() {
                    var t;
                    null === (t = this.overlay) || void 0 === t || t.close(),
                    super.ionViewDidLeave()
                }
                handleSsoJump() {
                    return (0,
                    Un.a)([this.ssoJumpService.openSsoJumpTransitionOverlay(), this.activatedRoute.queryParams]).pipe((0,
                    G.w)(([t,i])=>{
                        if (this.overlay = t,
                        this.params = i || {},
                        je.l8.find(r=>"Y" === this.params[r]))
                            this.handleSsoAppJump(Ve.tw, Ke.Mo, Object.assign({}, this.params.linkmeta === Ge.AF && {
                                launchUrlLang: B.lI.FRENCH
                            }));
                        else if (je.m1.find(r=>"Y" === this.params[r])) {
                            const {magicId: r, trackingCode: s, offerCode: d, OFFERCODE: u, applyEDB: E="Y", applyFamilyBundle: D, prodList: Y} = this.params || {};
                            this.handleSsoAppJump(Ve.qL, Ke.NL, Object.assign(Object.assign({}, this.params.linkmeta === Ge.$D && {
                                launchUrlLang: B.lI.FRENCH
                            }), {
                                request: {
                                    magicId: r,
                                    trackingCode: s,
                                    additionalData: {
                                        prodList: Y,
                                        offerCode: d || u,
                                        applyEDB: E,
                                        applyFamilyBundle: D
                                    }
                                }
                            }), "Y" === D)
                        } else
                            je.O6.find(r=>"Y" === this.params[r]) ? this.handleSsoAppJump(Ve.uq, Ke.t_, Object.assign({}, this.params.product === Ge.Lw && {
                                launchUrlLang: B.lI.FRENCH
                            })) : this.params.client_id && this.handleWealthJump();
                        return (0,
                        H.of)(!0)
                    }
                    ))
                }
                handleSsoAppJump(t, i, r, s=!1) {
                    this.ionSubscriptions.add(this.store.select(t).subscribe(d=>{
                        (null == d ? void 0 : d.error) && this.raiseError(c.jK.SSO_JUMP, s && d.error.error)
                    }
                    )),
                    this.store.dispatch(i(Object.assign({
                        target: "_self",
                        extraParams: new URLSearchParams(this.params).toString()
                    }, r)))
                }
                handleWealthJump() {
                    this.ionSubscriptions.add(this.store.select(g.Eq).pipe((0,
                    Gn.g)(500), (0,
                    F.h)(t=>!0 === t), (0,
                    Vn.V)({
                        each: 1e3,
                        with: ()=>(0,
                        H.of)(!1)
                    }), (0,
                    Je.b)(()=>this.ssoService.getAznCode(this.params).pipe((0,
                    Kn.X)(3)))).subscribe({
                        next: t=>{
                            this.ssoJumpService.redirectToWealth(t)
                        }
                        ,
                        error: ()=>this.raiseError(c.jK.SSO_JUMP)
                    }))
                }
                raiseError(t, i) {
                    this.store.dispatch((0,
                    W.Bv)(Object.assign({
                        redirectTo: c.iM.CUSTOM_SSO_JUMP_ERROR_PAGE
                    }, i || {
                        overriddenErrorCode: t
                    })))
                }
            }
            return n.\u0275fac = function(t) {
                return new (t || n)(e.\u0275\u0275directiveInject(M.yh),e.\u0275\u0275directiveInject(jn.H),e.\u0275\u0275directiveInject(zn.d),e.\u0275\u0275directiveInject(L.gz))
            }
            ,
            n.\u0275cmp = e.\u0275\u0275defineComponent({
                type: n,
                selectors: [["app-sso-jump"]],
                features: [e.\u0275\u0275InheritDefinitionFeature],
                decls: 0,
                vars: 0,
                template: function(t, i) {},
                encapsulation: 2,
                changeDetection: 0
            }),
            n
        }
        )();
        var Se = a(42248)
          , Yn = a(97368)
          , Xn = a(58058)
          , Jn = a(14129)
          , gt = a(60121)
          , Zn = a(88923)
          , qn = a(53958);
        let er = (()=>{
            class n {
                constructor(t) {
                    this.bill96LanguageFormat = t.bill96LanguageFormat
                }
                close() {
                    var t;
                    null === (t = this.modalRef) || void 0 === t || t.close(null, gt.CF.OVERLAY_CONTAINER)
                }
            }
            return n.\u0275fac = function(t) {
                return new (t || n)(e.\u0275\u0275directiveInject(Zn.x))
            }
            ,
            n.\u0275cmp = e.\u0275\u0275defineComponent({
                type: n,
                selectors: [["app-business-agreement-french-terms-conditions"]],
                decls: 5,
                vars: 7,
                consts: [["id", "business-agreement-terms-conditions", "type", "small", 3, "showModal", "modalClosed"], ["modalHeader", "", 3, "innerHTML"], ["modalContent", ""], [3, "bgColor", "templateId", "languageFormat"]],
                template: function(t, i) {
                    1 & t && (e.\u0275\u0275elementStart(0, "fdc-modal", 0),
                    e.\u0275\u0275listener("modalClosed", function() {
                        return i.close()
                    }),
                    e.\u0275\u0275element(1, "div", 1),
                    e.\u0275\u0275pipe(2, "translate"),
                    e.\u0275\u0275elementStart(3, "div", 2),
                    e.\u0275\u0275element(4, "app-template-external", 3),
                    e.\u0275\u0275elementEnd()()),
                    2 & t && (e.\u0275\u0275property("showModal", !0),
                    e.\u0275\u0275advance(1),
                    e.\u0275\u0275property("innerHTML", e.\u0275\u0275pipeBind1(2, 5, "APP.BUSINESS_AGREEMENT.PART1.FRENCH_TC_HEADSUP_PART3"), e.\u0275\u0275sanitizeHtml),
                    e.\u0275\u0275advance(3),
                    e.\u0275\u0275property("bgColor", "white")("templateId", "business-agreement-terms")("languageFormat", i.bill96LanguageFormat))
                },
                directives: [Me.zS, qn.n],
                pipes: [h.X$],
                encapsulation: 2,
                changeDetection: 0
            }),
            n
        }
        )();
        var tr = a(84531);
        let ir = (()=>{
            class n {
            }
            return n.\u0275fac = function(t) {
                return new (t || n)
            }
            ,
            n.\u0275cmp = e.\u0275\u0275defineComponent({
                type: n,
                selectors: [["app-business-agreement-french-content"]],
                inputs: {
                    businessAgreementId: "businessAgreementId"
                },
                decls: 71,
                vars: 108,
                consts: [["id", "french-contents"], [1, "ml-32p", "mt-40p"], [1, "fdc-title1", 3, "innerHTML"], [1, "ml-32p", "pt-sm-32p"], [1, "fdc-body1", "mt-16p", 3, "innerHTML"], [1, "fdc-body1", 3, "innerHTML"], [1, "ml-16p"], [1, "ml-32p", "mt-16p"], [1, "ml-32p", "mt-16p", "mb-56p"]],
                template: function(t, i) {
                    1 & t && (e.\u0275\u0275elementStart(0, "div", 0)(1, "div", 1),
                    e.\u0275\u0275element(2, "h2", 2),
                    e.\u0275\u0275pipe(3, "translate"),
                    e.\u0275\u0275elementEnd(),
                    e.\u0275\u0275elementStart(4, "div", 3),
                    e.\u0275\u0275element(5, "p", 4),
                    e.\u0275\u0275pipe(6, "translate"),
                    e.\u0275\u0275element(7, "p", 5),
                    e.\u0275\u0275pipe(8, "translate"),
                    e.\u0275\u0275element(9, "p", 5),
                    e.\u0275\u0275pipe(10, "translate"),
                    e.\u0275\u0275element(11, "p", 5),
                    e.\u0275\u0275pipe(12, "translate"),
                    e.\u0275\u0275element(13, "p", 5),
                    e.\u0275\u0275pipe(14, "translate"),
                    e.\u0275\u0275element(15, "p", 5),
                    e.\u0275\u0275pipe(16, "translate"),
                    e.\u0275\u0275elementStart(17, "div", 6),
                    e.\u0275\u0275element(18, "p", 5),
                    e.\u0275\u0275pipe(19, "translate"),
                    e.\u0275\u0275element(20, "p", 5),
                    e.\u0275\u0275pipe(21, "translate"),
                    e.\u0275\u0275elementEnd(),
                    e.\u0275\u0275element(22, "p", 5),
                    e.\u0275\u0275pipe(23, "translate"),
                    e.\u0275\u0275element(24, "p", 5),
                    e.\u0275\u0275pipe(25, "translate"),
                    e.\u0275\u0275elementStart(26, "div", 6),
                    e.\u0275\u0275element(27, "p", 5),
                    e.\u0275\u0275pipe(28, "translate"),
                    e.\u0275\u0275element(29, "p", 5),
                    e.\u0275\u0275pipe(30, "translate"),
                    e.\u0275\u0275element(31, "p", 5),
                    e.\u0275\u0275pipe(32, "translate"),
                    e.\u0275\u0275elementEnd(),
                    e.\u0275\u0275element(33, "p", 5),
                    e.\u0275\u0275pipe(34, "translate"),
                    e.\u0275\u0275elementEnd(),
                    e.\u0275\u0275elementStart(35, "div", 1),
                    e.\u0275\u0275element(36, "h2", 2),
                    e.\u0275\u0275pipe(37, "translate"),
                    e.\u0275\u0275elementEnd(),
                    e.\u0275\u0275elementStart(38, "div", 7),
                    e.\u0275\u0275element(39, "p", 4),
                    e.\u0275\u0275pipe(40, "translate"),
                    e.\u0275\u0275elementEnd(),
                    e.\u0275\u0275elementStart(41, "div", 1),
                    e.\u0275\u0275element(42, "h2", 2),
                    e.\u0275\u0275pipe(43, "translate"),
                    e.\u0275\u0275elementEnd(),
                    e.\u0275\u0275elementStart(44, "div", 7),
                    e.\u0275\u0275element(45, "p", 4),
                    e.\u0275\u0275pipe(46, "translate"),
                    e.\u0275\u0275elementEnd(),
                    e.\u0275\u0275elementStart(47, "div", 1),
                    e.\u0275\u0275element(48, "h2", 2),
                    e.\u0275\u0275pipe(49, "translate"),
                    e.\u0275\u0275elementEnd(),
                    e.\u0275\u0275elementStart(50, "div", 7),
                    e.\u0275\u0275element(51, "p", 4),
                    e.\u0275\u0275pipe(52, "translate"),
                    e.\u0275\u0275elementEnd(),
                    e.\u0275\u0275elementStart(53, "div", 7),
                    e.\u0275\u0275element(54, "p", 4),
                    e.\u0275\u0275pipe(55, "translate"),
                    e.\u0275\u0275elementEnd(),
                    e.\u0275\u0275elementStart(56, "div", 7),
                    e.\u0275\u0275element(57, "p", 4),
                    e.\u0275\u0275pipe(58, "translate"),
                    e.\u0275\u0275elementEnd(),
                    e.\u0275\u0275elementStart(59, "div", 7),
                    e.\u0275\u0275element(60, "p", 4),
                    e.\u0275\u0275pipe(61, "translate"),
                    e.\u0275\u0275elementEnd(),
                    e.\u0275\u0275elementStart(62, "div", 7),
                    e.\u0275\u0275element(63, "p", 4),
                    e.\u0275\u0275pipe(64, "translate"),
                    e.\u0275\u0275elementEnd(),
                    e.\u0275\u0275elementStart(65, "div", 7),
                    e.\u0275\u0275element(66, "p", 4),
                    e.\u0275\u0275pipe(67, "translate"),
                    e.\u0275\u0275elementEnd(),
                    e.\u0275\u0275elementStart(68, "div", 8),
                    e.\u0275\u0275element(69, "p", 4),
                    e.\u0275\u0275pipe(70, "translate"),
                    e.\u0275\u0275elementEnd()()),
                    2 & t && (e.\u0275\u0275advance(2),
                    e.\u0275\u0275property("innerHTML", e.\u0275\u0275pipeBind1(3, 54, "APP.BUSINESS_AGREEMENT.SESSION2.MAIN_TITLE_FR"), e.\u0275\u0275sanitizeHtml),
                    e.\u0275\u0275attribute("id", i.businessAgreementId + "-part1-title-main-header-fr"),
                    e.\u0275\u0275advance(3),
                    e.\u0275\u0275property("innerHTML", e.\u0275\u0275pipeBind1(6, 56, "APP.BUSINESS_AGREEMENT.PART1.TITLE_FR"), e.\u0275\u0275sanitizeHtml),
                    e.\u0275\u0275attribute("id", i.businessAgreementId + "-part1-title-fr"),
                    e.\u0275\u0275advance(2),
                    e.\u0275\u0275property("innerHTML", e.\u0275\u0275pipeBind1(8, 58, "APP.BUSINESS_AGREEMENT.PART1_1_FR"), e.\u0275\u0275sanitizeHtml),
                    e.\u0275\u0275attribute("id", i.businessAgreementId + "-part1-1-fr"),
                    e.\u0275\u0275advance(2),
                    e.\u0275\u0275property("innerHTML", e.\u0275\u0275pipeBind1(10, 60, "APP.BUSINESS_AGREEMENT.PART1_2_FR"), e.\u0275\u0275sanitizeHtml),
                    e.\u0275\u0275attribute("id", i.businessAgreementId + "-part1-2-fr"),
                    e.\u0275\u0275advance(2),
                    e.\u0275\u0275property("innerHTML", e.\u0275\u0275pipeBind1(12, 62, "APP.BUSINESS_AGREEMENT.PART1_3_FR"), e.\u0275\u0275sanitizeHtml),
                    e.\u0275\u0275attribute("id", i.businessAgreementId + "-part1-3-fr"),
                    e.\u0275\u0275advance(2),
                    e.\u0275\u0275property("innerHTML", e.\u0275\u0275pipeBind1(14, 64, "APP.BUSINESS_AGREEMENT.PART1_4_FR"), e.\u0275\u0275sanitizeHtml),
                    e.\u0275\u0275attribute("id", i.businessAgreementId + "-part1-4-fr"),
                    e.\u0275\u0275advance(2),
                    e.\u0275\u0275property("innerHTML", e.\u0275\u0275pipeBind1(16, 66, "APP.BUSINESS_AGREEMENT.PART1_5_FR"), e.\u0275\u0275sanitizeHtml),
                    e.\u0275\u0275attribute("id", i.businessAgreementId + "-part1-5-fr"),
                    e.\u0275\u0275advance(3),
                    e.\u0275\u0275property("innerHTML", e.\u0275\u0275pipeBind1(19, 68, "APP.BUSINESS_AGREEMENT.PART1_5_a_FR"), e.\u0275\u0275sanitizeHtml),
                    e.\u0275\u0275attribute("id", i.businessAgreementId + "-part1-5a-fr"),
                    e.\u0275\u0275advance(2),
                    e.\u0275\u0275property("innerHTML", e.\u0275\u0275pipeBind1(21, 70, "APP.BUSINESS_AGREEMENT.PART1_5_b_FR"), e.\u0275\u0275sanitizeHtml),
                    e.\u0275\u0275attribute("id", i.businessAgreementId + "-part1-5b-fr"),
                    e.\u0275\u0275advance(2),
                    e.\u0275\u0275property("innerHTML", e.\u0275\u0275pipeBind1(23, 72, "APP.BUSINESS_AGREEMENT.PART1_6_FR"), e.\u0275\u0275sanitizeHtml),
                    e.\u0275\u0275attribute("id", i.businessAgreementId + "-part1-6-fr"),
                    e.\u0275\u0275advance(2),
                    e.\u0275\u0275property("innerHTML", e.\u0275\u0275pipeBind1(25, 74, "APP.BUSINESS_AGREEMENT.PART1_7_FR"), e.\u0275\u0275sanitizeHtml),
                    e.\u0275\u0275attribute("id", i.businessAgreementId + "-part1-7-fr"),
                    e.\u0275\u0275advance(3),
                    e.\u0275\u0275property("innerHTML", e.\u0275\u0275pipeBind1(28, 76, "APP.BUSINESS_AGREEMENT.PART1_7_a_FR"), e.\u0275\u0275sanitizeHtml),
                    e.\u0275\u0275attribute("id", i.businessAgreementId + "-part1-7a-fr"),
                    e.\u0275\u0275advance(2),
                    e.\u0275\u0275property("innerHTML", e.\u0275\u0275pipeBind1(30, 78, "APP.BUSINESS_AGREEMENT.PART1_7_b_FR"), e.\u0275\u0275sanitizeHtml),
                    e.\u0275\u0275attribute("id", i.businessAgreementId + "-part1-7b-fr"),
                    e.\u0275\u0275advance(2),
                    e.\u0275\u0275property("innerHTML", e.\u0275\u0275pipeBind1(32, 80, "APP.BUSINESS_AGREEMENT.PART1_7_c_FR"), e.\u0275\u0275sanitizeHtml),
                    e.\u0275\u0275attribute("id", i.businessAgreementId + "-part1-7c-fr"),
                    e.\u0275\u0275advance(2),
                    e.\u0275\u0275property("innerHTML", e.\u0275\u0275pipeBind1(34, 82, "APP.BUSINESS_AGREEMENT.PART1_8_FR"), e.\u0275\u0275sanitizeHtml),
                    e.\u0275\u0275attribute("id", i.businessAgreementId + "-part1-8-fr"),
                    e.\u0275\u0275advance(3),
                    e.\u0275\u0275property("innerHTML", e.\u0275\u0275pipeBind1(37, 84, "APP.BUSINESS_AGREEMENT.SESSION2.TITLE_FR"), e.\u0275\u0275sanitizeHtml),
                    e.\u0275\u0275attribute("id", i.businessAgreementId + "-session2-title-fr"),
                    e.\u0275\u0275advance(3),
                    e.\u0275\u0275property("innerHTML", e.\u0275\u0275pipeBind1(40, 86, "APP.BUSINESS_AGREEMENT.PART2.TITLE_FR"), e.\u0275\u0275sanitizeHtml),
                    e.\u0275\u0275attribute("id", i.businessAgreementId + "-part2-title-fr"),
                    e.\u0275\u0275advance(3),
                    e.\u0275\u0275property("innerHTML", e.\u0275\u0275pipeBind1(43, 88, "APP.BUSINESS_AGREEMENT.SESSION3.TITLE_FR"), e.\u0275\u0275sanitizeHtml),
                    e.\u0275\u0275attribute("id", i.businessAgreementId + "-session3-title-fr"),
                    e.\u0275\u0275advance(3),
                    e.\u0275\u0275property("innerHTML", e.\u0275\u0275pipeBind1(46, 90, "APP.BUSINESS_AGREEMENT.PART3.TITLE_FR"), e.\u0275\u0275sanitizeHtml),
                    e.\u0275\u0275attribute("id", i.businessAgreementId + "-part3-title-fr"),
                    e.\u0275\u0275advance(3),
                    e.\u0275\u0275property("innerHTML", e.\u0275\u0275pipeBind1(49, 92, "APP.BUSINESS_AGREEMENT.SESSION4.TITLE_FR"), e.\u0275\u0275sanitizeHtml),
                    e.\u0275\u0275attribute("id", i.businessAgreementId + "-session4-title-fr"),
                    e.\u0275\u0275advance(3),
                    e.\u0275\u0275property("innerHTML", e.\u0275\u0275pipeBind1(52, 94, "APP.BUSINESS_AGREEMENT.PART4.TITLE_FR"), e.\u0275\u0275sanitizeHtml),
                    e.\u0275\u0275attribute("id", i.businessAgreementId + "-part4-title-fr"),
                    e.\u0275\u0275advance(3),
                    e.\u0275\u0275property("innerHTML", e.\u0275\u0275pipeBind1(55, 96, "APP.BUSINESS_AGREEMENT.PART5.TITLE_FR"), e.\u0275\u0275sanitizeHtml),
                    e.\u0275\u0275attribute("id", i.businessAgreementId + "-part5-title-fr"),
                    e.\u0275\u0275advance(3),
                    e.\u0275\u0275property("innerHTML", e.\u0275\u0275pipeBind1(58, 98, "APP.BUSINESS_AGREEMENT.PART6.TITLE_FR"), e.\u0275\u0275sanitizeHtml),
                    e.\u0275\u0275attribute("id", i.businessAgreementId + "-part6-title-fr"),
                    e.\u0275\u0275advance(3),
                    e.\u0275\u0275property("innerHTML", e.\u0275\u0275pipeBind1(61, 100, "APP.BUSINESS_AGREEMENT.PART7.TITLE_FR"), e.\u0275\u0275sanitizeHtml),
                    e.\u0275\u0275attribute("id", i.businessAgreementId + "-part7-title-fr"),
                    e.\u0275\u0275advance(3),
                    e.\u0275\u0275property("innerHTML", e.\u0275\u0275pipeBind1(64, 102, "APP.BUSINESS_AGREEMENT.PART8.TITLE_FR"), e.\u0275\u0275sanitizeHtml),
                    e.\u0275\u0275attribute("id", i.businessAgreementId + "-part8-title-fr"),
                    e.\u0275\u0275advance(3),
                    e.\u0275\u0275property("innerHTML", e.\u0275\u0275pipeBind1(67, 104, "APP.BUSINESS_AGREEMENT.PART9.TITLE_FR"), e.\u0275\u0275sanitizeHtml),
                    e.\u0275\u0275attribute("id", i.businessAgreementId + "-part9-title-fr"),
                    e.\u0275\u0275advance(3),
                    e.\u0275\u0275property("innerHTML", e.\u0275\u0275pipeBind1(70, 106, "APP.BUSINESS_AGREEMENT.PART10.TITLE_FR"), e.\u0275\u0275sanitizeHtml),
                    e.\u0275\u0275attribute("id", i.businessAgreementId + "-part10-title-fr"))
                },
                pipes: [h.X$],
                encapsulation: 2,
                changeDetection: 0
            }),
            n
        }
        )();
        function nr(n, o) {
            if (1 & n && (e.\u0275\u0275element(0, "span", 10),
            e.\u0275\u0275pipe(1, "translate")),
            2 & n) {
                const t = e.\u0275\u0275nextContext(2);
                e.\u0275\u0275property("innerHTML", e.\u0275\u0275pipeBind1(1, 2, "APP.BUSINESS_AGREEMENT.PART1.FRENCH_TC_HEADSUP_PART2"), e.\u0275\u0275sanitizeHtml),
                e.\u0275\u0275attribute("id", t.businessAgreement.id + "-french-tc-headsup-part2")
            }
        }
        function rr(n, o) {
            if (1 & n && (e.\u0275\u0275element(0, "span", 10),
            e.\u0275\u0275pipe(1, "translate")),
            2 & n) {
                const t = e.\u0275\u0275nextContext(2);
                e.\u0275\u0275property("innerHTML", e.\u0275\u0275pipeBind1(1, 2, "APP.BUSINESS_AGREEMENT.PART1.FRENCH_TC_HEADSUP_PART4"), e.\u0275\u0275sanitizeHtml),
                e.\u0275\u0275attribute("id", t.businessAgreement.id + "-french-tc-headsup-part4")
            }
        }
        function ar(n, o) {
            if (1 & n) {
                const t = e.\u0275\u0275getCurrentView();
                e.\u0275\u0275elementContainerStart(0),
                e.\u0275\u0275element(1, "span", 10),
                e.\u0275\u0275pipe(2, "translate"),
                e.\u0275\u0275pipe(3, "translate"),
                e.\u0275\u0275template(4, nr, 2, 4, "span", 17),
                e.\u0275\u0275elementStart(5, "fdc-link", 18),
                e.\u0275\u0275listener("linkClick", function() {
                    e.\u0275\u0275restoreView(t);
                    const r = e.\u0275\u0275nextContext();
                    return r.platformService.isNative ? r.openTermsAndConditions(!0) : r.focusFrenchContent()
                }),
                e.\u0275\u0275element(6, "span", 19),
                e.\u0275\u0275pipe(7, "translate"),
                e.\u0275\u0275elementEnd(),
                e.\u0275\u0275template(8, rr, 2, 4, "span", 17),
                e.\u0275\u0275elementContainerEnd()
            }
            if (2 & n) {
                const t = e.\u0275\u0275nextContext();
                e.\u0275\u0275advance(1),
                e.\u0275\u0275property("innerHTML", t.platformService.isNative ? e.\u0275\u0275pipeBind1(2, 9, "APP.BUSINESS_AGREEMENT.PART1.FRENCH_TC_HEADSUP_PART1_MOBILE") : e.\u0275\u0275pipeBind1(3, 11, "APP.BUSINESS_AGREEMENT.PART1.FRENCH_TC_HEADSUP_PART1"), e.\u0275\u0275sanitizeHtml),
                e.\u0275\u0275attribute("id", t.businessAgreement.id + "-french-tc-headsup-part1"),
                e.\u0275\u0275advance(3),
                e.\u0275\u0275property("ngIf", !t.platformService.isNative),
                e.\u0275\u0275advance(1),
                e.\u0275\u0275property("id", t.businessAgreement.id + "-terms-and-conditions-link-fr-id")("type", "secondary"),
                e.\u0275\u0275attribute("id", t.businessAgreement.id + "-terms-and-conditions-fr-link"),
                e.\u0275\u0275advance(1),
                e.\u0275\u0275property("innerHTML", e.\u0275\u0275pipeBind1(7, 13, "APP.BUSINESS_AGREEMENT.PART1.FRENCH_TC_HEADSUP_PART3"), e.\u0275\u0275sanitizeHtml),
                e.\u0275\u0275attribute("id", t.businessAgreement.id + "-french-tc-headsup-part3"),
                e.\u0275\u0275advance(2),
                e.\u0275\u0275property("ngIf", !t.platformService.isNative)
            }
        }
        function or(n, o) {
            if (1 & n && e.\u0275\u0275element(0, "app-business-agreement-french-content", 20),
            2 & n) {
                const t = e.\u0275\u0275nextContext();
                e.\u0275\u0275property("businessAgreementId", t.businessAgreement.id)
            }
        }
        let sr = (()=>{
            class n extends ((0,
            A.Q)()) {
                constructor(t, i, r, s, d) {
                    super(),
                    this.store = t,
                    this.cdr = i,
                    this.translationsService = r,
                    this.platformService = s,
                    this.modalService = d,
                    this.businessAgreement = {
                        id: "businessAgreement"
                    },
                    this.isPrimaryButtonVisible = !0,
                    this.isSecondaryButtonVisible = !1,
                    this.isLinkVisible = !0,
                    this.isStepperVisible = !1,
                    this.isSubmitPending = !1,
                    this.isStopUnload = !1,
                    this.AccordionVariants = Se.u4,
                    this.mfaAction$ = this.store.select(g.a4),
                    this.hasReturnedToLogin = !1,
                    this.isLoading = !1,
                    this.subscriptions.add(this.mfaAction$.pipe((0,
                    v.q)(1)).subscribe(u=>{
                        u || (this.store.dispatch((0,
                        T.gd)({})),
                        this.hasReturnedToLogin = !0)
                    }
                    ))
                }
                ionViewDidEnter() {
                    this.store.dispatch((0,
                    Xn.F9)()),
                    this.showFrenchTc$ = this.translationsService.getCurrentLanguageStream().pipe((0,
                    Yn.z)(t=>this.store.select((0,
                    Jn.ab)(t)))),
                    this.cdr.markForCheck(),
                    this.store.dispatch((0,
                    V.nN)())
                }
                ionViewDidLeave() {
                    this.isLoading = !1,
                    (0,
                    le.Xn)(window.location.pathname) && !this.hasReturnedToLogin && this.store.dispatch((0,
                    T.gd)({})),
                    this.hasReturnedToLogin = !1,
                    this.cdr.markForCheck(),
                    super.ionViewDidLeave()
                }
                onSubmit() {
                    this.isLoading = !0,
                    this.store.dispatch(f.e2())
                }
                onCancel() {
                    this.store.dispatch((0,
                    T.yw)({})),
                    this.hasReturnedToLogin = !0
                }
                focusFrenchContent() {
                    var t;
                    null === (t = document.getElementById("french-contents")) || void 0 === t || t.scrollIntoView({
                        behavior: "smooth"
                    })
                }
                openTermsAndConditions(t=!1) {
                    const i = (0,
                    P.UV)({
                        interactionName: "business agreement",
                        path: "bmo:cdb:business agreement",
                        linkLocation: "page"
                    });
                    this.store.dispatch((0,
                    P.V_)({
                        data: i
                    })),
                    this.modalService.create(er, {
                        modalComponentType: gt.kv.MODAL,
                        bill96LanguageFormat: t ? "fr-ca" : void 0
                    })
                }
            }
            return n.\u0275fac = function(t) {
                return new (t || n)(e.\u0275\u0275directiveInject(M.yh),e.\u0275\u0275directiveInject(e.ChangeDetectorRef),e.\u0275\u0275directiveInject(B.fA),e.\u0275\u0275directiveInject(ae.t),e.\u0275\u0275directiveInject(tr.X))
            }
            ,
            n.\u0275cmp = e.\u0275\u0275defineComponent({
                type: n,
                selectors: [["app-business-agreement"]],
                features: [e.\u0275\u0275InheritDefinitionFeature],
                decls: 87,
                vars: 149,
                consts: [["fdcPopstateWarning", "", 3, "id", "title", "primaryButtonLabel", "linkLabel", "primaryButtonVisible", "secondaryButtonVisible", "isStepperVisible", "linkVisible", "primaryButtonDisable", "primaryLoading", "primaryButtonClicked", "linkClicked"], [1, "mt-56p", "mt-32p"], [1, "fdc-title1", "mb-16p", 3, "innerHTML"], [1, "mt-16p", "mb-4p"], [1, "fdc-body1", "mt-16p", 3, "innerHTML"], [1, "pt-sm-32p"], ["isAlignedWithContent", "true", "noPadding", "true"], ["isCompact", "true", 3, "ariaLabel", "hasBottomBorder", "hasShortBorder", "label", "isOpen", "labelSize", "noPadding", "variant"], [1, "ml-32p", "pt-sm-32p"], [4, "ngIf"], [1, "fdc-body1", 3, "innerHTML"], [1, "ml-16p"], [1, "ml-32p", "mt-40p"], [1, "fdc-title1", 3, "innerHTML"], [1, "ml-32p", "mt-16p"], [1, "ml-32p", "mt-16p", "mb-56p"], [3, "businessAgreementId", 4, "ngIf"], ["class", "fdc-body1", 3, "innerHTML", 4, "ngIf"], [3, "id", "type", "linkClick"], [1, "fdc-link", 3, "innerHTML"], [3, "businessAgreementId"]],
                template: function(t, i) {
                    1 & t && (e.\u0275\u0275elementStart(0, "app-inline-takeover", 0),
                    e.\u0275\u0275listener("primaryButtonClicked", function() {
                        return i.onSubmit()
                    })("linkClicked", function() {
                        return i.onCancel()
                    }),
                    e.\u0275\u0275pipe(1, "translate"),
                    e.\u0275\u0275pipe(2, "translate"),
                    e.\u0275\u0275pipe(3, "translate"),
                    e.\u0275\u0275pipe(4, "async"),
                    e.\u0275\u0275elementStart(5, "div", 1),
                    e.\u0275\u0275element(6, "h2", 2),
                    e.\u0275\u0275pipe(7, "translate"),
                    e.\u0275\u0275elementEnd(),
                    e.\u0275\u0275elementStart(8, "div", 3),
                    e.\u0275\u0275element(9, "p", 4),
                    e.\u0275\u0275pipe(10, "translate"),
                    e.\u0275\u0275elementEnd(),
                    e.\u0275\u0275elementStart(11, "div", 5)(12, "fdc-accordion", 6)(13, "fdc-accordion-panel", 7),
                    e.\u0275\u0275pipe(14, "translate"),
                    e.\u0275\u0275pipe(15, "translate"),
                    e.\u0275\u0275elementStart(16, "div", 8),
                    e.\u0275\u0275template(17, ar, 9, 15, "ng-container", 9),
                    e.\u0275\u0275pipe(18, "async"),
                    e.\u0275\u0275element(19, "p", 4),
                    e.\u0275\u0275pipe(20, "translate"),
                    e.\u0275\u0275element(21, "p", 10),
                    e.\u0275\u0275pipe(22, "translate"),
                    e.\u0275\u0275element(23, "p", 10),
                    e.\u0275\u0275pipe(24, "translate"),
                    e.\u0275\u0275element(25, "p", 10),
                    e.\u0275\u0275pipe(26, "translate"),
                    e.\u0275\u0275element(27, "p", 10),
                    e.\u0275\u0275pipe(28, "translate"),
                    e.\u0275\u0275element(29, "p", 10),
                    e.\u0275\u0275pipe(30, "translate"),
                    e.\u0275\u0275elementStart(31, "div", 11),
                    e.\u0275\u0275element(32, "p", 10),
                    e.\u0275\u0275pipe(33, "translate"),
                    e.\u0275\u0275element(34, "p", 10),
                    e.\u0275\u0275pipe(35, "translate"),
                    e.\u0275\u0275elementEnd(),
                    e.\u0275\u0275element(36, "p", 10),
                    e.\u0275\u0275pipe(37, "translate"),
                    e.\u0275\u0275element(38, "p", 10),
                    e.\u0275\u0275pipe(39, "translate"),
                    e.\u0275\u0275elementStart(40, "div", 11),
                    e.\u0275\u0275element(41, "p", 10),
                    e.\u0275\u0275pipe(42, "translate"),
                    e.\u0275\u0275element(43, "p", 10),
                    e.\u0275\u0275pipe(44, "translate"),
                    e.\u0275\u0275element(45, "p", 10),
                    e.\u0275\u0275pipe(46, "translate"),
                    e.\u0275\u0275elementEnd(),
                    e.\u0275\u0275element(47, "p", 10),
                    e.\u0275\u0275pipe(48, "translate"),
                    e.\u0275\u0275elementEnd(),
                    e.\u0275\u0275elementStart(49, "div", 12),
                    e.\u0275\u0275element(50, "h2", 13),
                    e.\u0275\u0275pipe(51, "translate"),
                    e.\u0275\u0275elementEnd(),
                    e.\u0275\u0275elementStart(52, "div", 14),
                    e.\u0275\u0275element(53, "p", 4),
                    e.\u0275\u0275pipe(54, "translate"),
                    e.\u0275\u0275elementEnd(),
                    e.\u0275\u0275elementStart(55, "div", 12),
                    e.\u0275\u0275element(56, "h2", 13),
                    e.\u0275\u0275pipe(57, "translate"),
                    e.\u0275\u0275elementEnd(),
                    e.\u0275\u0275elementStart(58, "div", 14),
                    e.\u0275\u0275element(59, "p", 4),
                    e.\u0275\u0275pipe(60, "translate"),
                    e.\u0275\u0275elementEnd(),
                    e.\u0275\u0275elementStart(61, "div", 12),
                    e.\u0275\u0275element(62, "h2", 13),
                    e.\u0275\u0275pipe(63, "translate"),
                    e.\u0275\u0275elementEnd(),
                    e.\u0275\u0275elementStart(64, "div", 14),
                    e.\u0275\u0275element(65, "p", 4),
                    e.\u0275\u0275pipe(66, "translate"),
                    e.\u0275\u0275elementEnd(),
                    e.\u0275\u0275elementStart(67, "div", 14),
                    e.\u0275\u0275element(68, "p", 4),
                    e.\u0275\u0275pipe(69, "translate"),
                    e.\u0275\u0275elementEnd(),
                    e.\u0275\u0275elementStart(70, "div", 14),
                    e.\u0275\u0275element(71, "p", 4),
                    e.\u0275\u0275pipe(72, "translate"),
                    e.\u0275\u0275elementEnd(),
                    e.\u0275\u0275elementStart(73, "div", 14),
                    e.\u0275\u0275element(74, "p", 4),
                    e.\u0275\u0275pipe(75, "translate"),
                    e.\u0275\u0275elementEnd(),
                    e.\u0275\u0275elementStart(76, "div", 14),
                    e.\u0275\u0275element(77, "p", 4),
                    e.\u0275\u0275pipe(78, "translate"),
                    e.\u0275\u0275elementEnd(),
                    e.\u0275\u0275elementStart(79, "div", 14),
                    e.\u0275\u0275element(80, "p", 4),
                    e.\u0275\u0275pipe(81, "translate"),
                    e.\u0275\u0275elementEnd(),
                    e.\u0275\u0275elementStart(82, "div", 15),
                    e.\u0275\u0275element(83, "p", 4),
                    e.\u0275\u0275pipe(84, "translate"),
                    e.\u0275\u0275elementEnd(),
                    e.\u0275\u0275template(85, or, 1, 1, "app-business-agreement-french-content", 16),
                    e.\u0275\u0275pipe(86, "async"),
                    e.\u0275\u0275elementEnd()()()()),
                    2 & t && (e.\u0275\u0275property("id", i.businessAgreement.id + "-takeover")("title", e.\u0275\u0275pipeBind1(1, 77, "APP.BUSINESS_AGREEMENT.PAGE.TITLE"))("primaryButtonLabel", e.\u0275\u0275pipeBind1(2, 79, "APP.BUSINESS_AGREEMENT.CTA.AGREE"))("linkLabel", e.\u0275\u0275pipeBind1(3, 81, "APP.BUSINESS_AGREEMENT.CTA.DISAGREE"))("primaryButtonVisible", i.isPrimaryButtonVisible)("secondaryButtonVisible", i.isSecondaryButtonVisible)("isStepperVisible", i.isStepperVisible)("linkVisible", i.isLinkVisible)("primaryButtonDisable", e.\u0275\u0275pipeBind1(4, 83, i.isPrimaryButtonDisabled))("primaryLoading", i.isLoading),
                    e.\u0275\u0275advance(6),
                    e.\u0275\u0275property("innerHTML", e.\u0275\u0275pipeBind1(7, 85, "APP.BUSINESS_AGREEMENT.TITLE"), e.\u0275\u0275sanitizeHtml),
                    e.\u0275\u0275attribute("id", i.businessAgreement.id + "-title"),
                    e.\u0275\u0275advance(3),
                    e.\u0275\u0275property("innerHTML", e.\u0275\u0275pipeBind1(10, 87, "APP.BUSINESS_AGREEMENT.HEADER"), e.\u0275\u0275sanitizeHtml),
                    e.\u0275\u0275attribute("id", i.businessAgreement.id + "-header"),
                    e.\u0275\u0275advance(4),
                    e.\u0275\u0275property("ariaLabel", e.\u0275\u0275pipeBind1(14, 89, "APP.BUSINESS_AGREEMENT.SESSION1.TITLE"))("hasBottomBorder", !1)("hasShortBorder", !1)("label", e.\u0275\u0275pipeBind1(15, 91, "APP.BUSINESS_AGREEMENT.SESSION1.TITLE"))("isOpen", !0)("labelSize", "medium")("noPadding", !0)("variant", i.AccordionVariants.MOBILE),
                    e.\u0275\u0275attribute("id", "terms-conditition-details"),
                    e.\u0275\u0275advance(4),
                    e.\u0275\u0275property("ngIf", e.\u0275\u0275pipeBind1(18, 93, i.showFrenchTc$)),
                    e.\u0275\u0275advance(2),
                    e.\u0275\u0275property("innerHTML", e.\u0275\u0275pipeBind1(20, 95, "APP.BUSINESS_AGREEMENT.PART1.TITLE"), e.\u0275\u0275sanitizeHtml),
                    e.\u0275\u0275attribute("id", i.businessAgreement.id + "-part1-title"),
                    e.\u0275\u0275advance(2),
                    e.\u0275\u0275property("innerHTML", e.\u0275\u0275pipeBind1(22, 97, "APP.BUSINESS_AGREEMENT.PART1_1"), e.\u0275\u0275sanitizeHtml),
                    e.\u0275\u0275attribute("id", i.businessAgreement.id + "-part1-1"),
                    e.\u0275\u0275advance(2),
                    e.\u0275\u0275property("innerHTML", e.\u0275\u0275pipeBind1(24, 99, "APP.BUSINESS_AGREEMENT.PART1_2"), e.\u0275\u0275sanitizeHtml),
                    e.\u0275\u0275attribute("id", i.businessAgreement.id + "-part1-2"),
                    e.\u0275\u0275advance(2),
                    e.\u0275\u0275property("innerHTML", e.\u0275\u0275pipeBind1(26, 101, "APP.BUSINESS_AGREEMENT.PART1_3"), e.\u0275\u0275sanitizeHtml),
                    e.\u0275\u0275attribute("id", i.businessAgreement.id + "-part1-3"),
                    e.\u0275\u0275advance(2),
                    e.\u0275\u0275property("innerHTML", e.\u0275\u0275pipeBind1(28, 103, "APP.BUSINESS_AGREEMENT.PART1_4"), e.\u0275\u0275sanitizeHtml),
                    e.\u0275\u0275attribute("id", i.businessAgreement.id + "-part1-4"),
                    e.\u0275\u0275advance(2),
                    e.\u0275\u0275property("innerHTML", e.\u0275\u0275pipeBind1(30, 105, "APP.BUSINESS_AGREEMENT.PART1_5"), e.\u0275\u0275sanitizeHtml),
                    e.\u0275\u0275attribute("id", i.businessAgreement.id + "-part1-5"),
                    e.\u0275\u0275advance(3),
                    e.\u0275\u0275property("innerHTML", e.\u0275\u0275pipeBind1(33, 107, "APP.BUSINESS_AGREEMENT.PART1_5_a"), e.\u0275\u0275sanitizeHtml),
                    e.\u0275\u0275attribute("id", i.businessAgreement.id + "-part1-5a"),
                    e.\u0275\u0275advance(2),
                    e.\u0275\u0275property("innerHTML", e.\u0275\u0275pipeBind1(35, 109, "APP.BUSINESS_AGREEMENT.PART1_5_b"), e.\u0275\u0275sanitizeHtml),
                    e.\u0275\u0275attribute("id", i.businessAgreement.id + "-part1-5b"),
                    e.\u0275\u0275advance(2),
                    e.\u0275\u0275property("innerHTML", e.\u0275\u0275pipeBind1(37, 111, "APP.BUSINESS_AGREEMENT.PART1_6"), e.\u0275\u0275sanitizeHtml),
                    e.\u0275\u0275attribute("id", i.businessAgreement.id + "-part1-6"),
                    e.\u0275\u0275advance(2),
                    e.\u0275\u0275property("innerHTML", e.\u0275\u0275pipeBind1(39, 113, "APP.BUSINESS_AGREEMENT.PART1_7"), e.\u0275\u0275sanitizeHtml),
                    e.\u0275\u0275attribute("id", i.businessAgreement.id + "-part1-7"),
                    e.\u0275\u0275advance(3),
                    e.\u0275\u0275property("innerHTML", e.\u0275\u0275pipeBind1(42, 115, "APP.BUSINESS_AGREEMENT.PART1_7_a"), e.\u0275\u0275sanitizeHtml),
                    e.\u0275\u0275attribute("id", i.businessAgreement.id + "-part1-7a"),
                    e.\u0275\u0275advance(2),
                    e.\u0275\u0275property("innerHTML", e.\u0275\u0275pipeBind1(44, 117, "APP.BUSINESS_AGREEMENT.PART1_7_b"), e.\u0275\u0275sanitizeHtml),
                    e.\u0275\u0275attribute("id", i.businessAgreement.id + "-part1-7b"),
                    e.\u0275\u0275advance(2),
                    e.\u0275\u0275property("innerHTML", e.\u0275\u0275pipeBind1(46, 119, "APP.BUSINESS_AGREEMENT.PART1_7_c"), e.\u0275\u0275sanitizeHtml),
                    e.\u0275\u0275attribute("id", i.businessAgreement.id + "-part1-7c"),
                    e.\u0275\u0275advance(2),
                    e.\u0275\u0275property("innerHTML", e.\u0275\u0275pipeBind1(48, 121, "APP.BUSINESS_AGREEMENT.PART1_8"), e.\u0275\u0275sanitizeHtml),
                    e.\u0275\u0275attribute("id", i.businessAgreement.id + "-part1-8"),
                    e.\u0275\u0275advance(3),
                    e.\u0275\u0275property("innerHTML", e.\u0275\u0275pipeBind1(51, 123, "APP.BUSINESS_AGREEMENT.SESSION2.TITLE"), e.\u0275\u0275sanitizeHtml),
                    e.\u0275\u0275attribute("id", i.businessAgreement.id + "-session2-title"),
                    e.\u0275\u0275advance(3),
                    e.\u0275\u0275property("innerHTML", e.\u0275\u0275pipeBind1(54, 125, "APP.BUSINESS_AGREEMENT.PART2.TITLE"), e.\u0275\u0275sanitizeHtml),
                    e.\u0275\u0275attribute("id", i.businessAgreement.id + "-part2-title"),
                    e.\u0275\u0275advance(3),
                    e.\u0275\u0275property("innerHTML", e.\u0275\u0275pipeBind1(57, 127, "APP.BUSINESS_AGREEMENT.SESSION3.TITLE"), e.\u0275\u0275sanitizeHtml),
                    e.\u0275\u0275attribute("id", i.businessAgreement.id + "-session3-title"),
                    e.\u0275\u0275advance(3),
                    e.\u0275\u0275property("innerHTML", e.\u0275\u0275pipeBind1(60, 129, "APP.BUSINESS_AGREEMENT.PART3.TITLE"), e.\u0275\u0275sanitizeHtml),
                    e.\u0275\u0275attribute("id", i.businessAgreement.id + "-part3-title"),
                    e.\u0275\u0275advance(3),
                    e.\u0275\u0275property("innerHTML", e.\u0275\u0275pipeBind1(63, 131, "APP.BUSINESS_AGREEMENT.SESSION4.TITLE"), e.\u0275\u0275sanitizeHtml),
                    e.\u0275\u0275attribute("id", i.businessAgreement.id + "-session4-title"),
                    e.\u0275\u0275advance(3),
                    e.\u0275\u0275property("innerHTML", e.\u0275\u0275pipeBind1(66, 133, "APP.BUSINESS_AGREEMENT.PART4.TITLE"), e.\u0275\u0275sanitizeHtml),
                    e.\u0275\u0275attribute("id", i.businessAgreement.id + "-part4-title"),
                    e.\u0275\u0275advance(3),
                    e.\u0275\u0275property("innerHTML", e.\u0275\u0275pipeBind1(69, 135, "APP.BUSINESS_AGREEMENT.PART5.TITLE"), e.\u0275\u0275sanitizeHtml),
                    e.\u0275\u0275attribute("id", i.businessAgreement.id + "-part5-title"),
                    e.\u0275\u0275advance(3),
                    e.\u0275\u0275property("innerHTML", e.\u0275\u0275pipeBind1(72, 137, "APP.BUSINESS_AGREEMENT.PART6.TITLE"), e.\u0275\u0275sanitizeHtml),
                    e.\u0275\u0275attribute("id", i.businessAgreement.id + "-part6-title"),
                    e.\u0275\u0275advance(3),
                    e.\u0275\u0275property("innerHTML", e.\u0275\u0275pipeBind1(75, 139, "APP.BUSINESS_AGREEMENT.PART7.TITLE"), e.\u0275\u0275sanitizeHtml),
                    e.\u0275\u0275attribute("id", i.businessAgreement.id + "-part7-title"),
                    e.\u0275\u0275advance(3),
                    e.\u0275\u0275property("innerHTML", e.\u0275\u0275pipeBind1(78, 141, "APP.BUSINESS_AGREEMENT.PART8.TITLE"), e.\u0275\u0275sanitizeHtml),
                    e.\u0275\u0275attribute("id", i.businessAgreement.id + "-part8-title"),
                    e.\u0275\u0275advance(3),
                    e.\u0275\u0275property("innerHTML", e.\u0275\u0275pipeBind1(81, 143, "APP.BUSINESS_AGREEMENT.PART9.TITLE"), e.\u0275\u0275sanitizeHtml),
                    e.\u0275\u0275attribute("id", i.businessAgreement.id + "-part9-title"),
                    e.\u0275\u0275advance(3),
                    e.\u0275\u0275property("innerHTML", e.\u0275\u0275pipeBind1(84, 145, "APP.BUSINESS_AGREEMENT.PART10.TITLE"), e.\u0275\u0275sanitizeHtml),
                    e.\u0275\u0275attribute("id", i.businessAgreement.id + "-part10-title"),
                    e.\u0275\u0275advance(2),
                    e.\u0275\u0275property("ngIf", e.\u0275\u0275pipeBind1(86, 147, i.showFrenchTc$) && !i.platformService.isNative))
                },
                directives: [he.h, Se.Zf, Se.U_, l.O5, fe.N0, ir],
                pipes: [h.X$, l.Ov],
                encapsulation: 2,
                changeDetection: 0
            }),
            n
        }
        )();
        var Ce = a(33208);
        const _r = [{
            path: "",
            component: li,
            canActivate: [Ln, Ie]
        }, {
            path: I.kU.MFA,
            canActivateChild: [Ce.h],
            children: [{
                path: "challenge-question",
                component: hi,
                data: {
                    routeName: "challenge question",
                    logoOnlyHeader: !0,
                    titleKey: "APP.MFA_CHALLENGE_QUESTION.TITLEKEY"
                }
            }, {
                path: "enrollment",
                children: [{
                    path: "intro",
                    component: gi,
                    data: {
                        routeName: "setup security questions",
                        hideHeader: !0,
                        titleKey: "APP.MFA_ENROLLMENT.INTRO.PAGE_TITLE_KEY"
                    }
                }, {
                    path: "steps",
                    component: Ri,
                    data: {
                        routeName: "setup security questions:step 1",
                        hideHeader: !0
                    }
                }]
            }]
        }, {
            path: I.kU.SSO,
            component: hn,
            canActivate: [Ie],
            data: {
                routeName: "sign in sso",
                logoOnlyHeader: !0
            }
        }, {
            path: "bil",
            loadChildren: ()=>a.e(1847).then(a.bind(a, 81847)).then(n=>n.BilLoginModule),
            data: {
                routeName: "sign in sso",
                logoOnlyHeader: !0
            }
        }, {
            path: I.kU.REWARDS,
            children: [{
                path: "",
                canActivate: [Ce.h],
                component: Dn,
                data: {
                    routeName: "bmo rewards jump",
                    hideHeader: !0,
                    titleKey: "CONTAINER.REWARDS.TITLEKEY"
                }
            }, {
                path: "error",
                component: Hn,
                data: {
                    routeName: "bmo rewards jump error",
                    hideHeader: !0
                }
            }]
        }, {
            path: I.kU.SSO_JUMP,
            canActivateChild: [Ce.h],
            children: [{
                path: "",
                component: Qn,
                data: {
                    routeName: "sso jump",
                    hideHeader: !0,
                    titleKey: "SSO Jump Title"
                }
            }]
        }, {
            path: I.kU.SECURE_KEY,
            data: {
                routeName: "secure key",
                titleKey: "PAGE.LOGIN_SECUREKEY.TITLEKEY",
                securityContextName: "GOVSIGN_IN_BMO"
            },
            children: [{
                path: "verify",
                component: on,
                data: {
                    routeName: "secure key verify"
                }
            }, {
                path: "error",
                component: Ji,
                data: {
                    disablePageTracking: !0,
                    routeName: "secure key error",
                    logoOnlyHeader: !0
                }
            }, {
                path: "cancel",
                component: Ki,
                data: {
                    routeName: "secure key cancel"
                }
            }, {
                path: "",
                component: tn,
                canActivate: [Ie]
            }]
        }, {
            path: I.kU.OTP_SIGNIN,
            component: Ui,
            data: {
                routeName: "otp signin",
                logoOnlyHeader: !0,
                titleKey: "PAGE.LOGIN_OTP.TITLEKEY"
            }
        }, {
            path: "reset-temporary-password",
            children: [{
                path: "form",
                canActivate: [Ce.h],
                component: Pn,
                data: {
                    routeName: "temporary password reset",
                    hideHeader: !0,
                    titleKey: "APP.CHANGE_PASSWORD.PASSWORD_TEMP_TITLEKEY",
                    securityContextName: "RESET_TEMP_PASSWORD"
                }
            }, {
                path: "confirmation",
                component: An,
                data: {
                    routeName: "new password success",
                    logoOnlyHeader: !0,
                    securityContextName: "SUCCESS_RESET_TEMP_PASSWORD"
                }
            }]
        }, {
            path: "bil-sso-get-started",
            loadChildren: ()=>a.e(3650).then(a.bind(a, 73650)).then(n=>n.BilSsoSetupModule),
            data: {
                routeName: "bmo:cdb:sso:set up",
                logoOnlyHeader: !0
            }
        }, {
            path: "business-agreement",
            children: [{
                path: "",
                component: sr,
                data: {
                    routeName: "terms and conditions",
                    hideHeader: !0,
                    titleKey: "APP.BUSINESS_AGREEMENT.PAGE.TITLE"
                }
            }]
        }];
        let br = (()=>{
            class n {
            }
            return n.\u0275fac = function(t) {
                return new (t || n)
            }
            ,
            n.\u0275mod = e.\u0275\u0275defineNgModule({
                type: n
            }),
            n.\u0275inj = e.\u0275\u0275defineInjector({
                imports: [[L.Bz.forChild(_r)], L.Bz]
            }),
            n
        }
        )()
          , Sr = (()=>{
            class n {
            }
            return n.\u0275fac = function(t) {
                return new (t || n)
            }
            ,
            n.\u0275mod = e.\u0275\u0275defineNgModule({
                type: n
            }),
            n.\u0275inj = e.\u0275\u0275defineInjector({
                imports: [[l.ez, U.Pc]]
            }),
            n
        }
        )();
        var Cr = a(99097)
          , Tr = a(45392)
          , Pr = a(49047)
          , yr = a(77809)
          , Ar = a(40631)
          , Lr = a(91080)
          , Rr = a(29391)
          , Mr = a(14617)
          , Ir = a(2089)
          , Or = a(67092)
          , Nr = a(29454)
          , Br = a(88254)
          , wr = a(2755)
          , Fr = a(18536)
          , xr = a(55060)
          , Dr = a(56282);
        let kr = (()=>{
            class n {
            }
            return n.\u0275fac = function(t) {
                return new (t || n)
            }
            ,
            n.\u0275mod = e.\u0275\u0275defineNgModule({
                type: n
            }),
            n.\u0275inj = e.\u0275\u0275defineInjector({
                imports: [[l.ez, p.FormsModule, p.ReactiveFormsModule, br, Sr, h.aw.forChild(), se.GX, me.nJ, ue.V, Rr.UY, Tr.I, Pr.z, yr.T, Mr.W0, Cr.Z, Ir.A, He.wk, at.VU, oe.v, J.aK, ye.As, R.v8, Ue.H, fe.X8, U.Pc, ge.n, dt.k, Ar.D, ut.Pi, Lr.D, Or.J, Me.kt, Nr._, Br.I, wr.K, Fr.F, xr.k, Se.Xw, Dr.s]]
            }),
            n
        }
        )()
    }
    ,
    8504: (de,K,a)=>{
        a.d(K, {
            X: ()=>N
        });
        var l = a(41944)
          , p = a(93945)
          , h = a(89173)
          , U = a(78947)
          , L = a(54987);
        function N(C=1 / 0) {
            let v;
            v = C && "object" == typeof C ? C : {
                count: C
            };
            const {count: F=1 / 0, delay: y, resetOnSuccess: c=!1} = v;
            return F <= 0 ? h.y : (0,
            l.e)((w,_)=>{
                let T, I = 0;
                const g = ()=>{
                    let A = !1;
                    T = w.subscribe((0,
                    p.x)(_, R=>{
                        c && (I = 0),
                        _.next(R)
                    }
                    , void 0, R=>{
                        if (I++ < F) {
                            const P = ()=>{
                                T ? (T.unsubscribe(),
                                T = null,
                                g()) : A = !0
                            }
                            ;
                            if (null != y) {
                                const re = "number" == typeof y ? (0,
                                U.H)(y) : (0,
                                L.Xf)(y(R, I))
                                  , b = (0,
                                p.x)(_, ()=>{
                                    b.unsubscribe(),
                                    P()
                                }
                                , ()=>{
                                    _.complete()
                                }
                                );
                                re.subscribe(b)
                            } else
                                P()
                        } else
                            _.error(R)
                    }
                    )),
                    A && (T.unsubscribe(),
                    T = null,
                    g())
                }
                ;
                g()
            }
            )
        }
    }
    ,
    26271: (de,K,a)=>{
        a.d(K, {
            V: ()=>re,
            z: ()=>P
        });
        var l = a(3184)
          , p = a(58664)
          , h = a(76317)
          , U = a(90587)
          , L = a(72613)
          , N = a(70800)
          , C = a(36362);
        const v = ["input"];
        function F(b, k) {
            if (1 & b && (l.\u0275\u0275elementContainerStart(0),
            l.\u0275\u0275text(1),
            l.\u0275\u0275elementContainerEnd()),
            2 & b) {
                const m = l.\u0275\u0275nextContext(2);
                l.\u0275\u0275advance(1),
                l.\u0275\u0275textInterpolate(m.label)
            }
        }
        function y(b, k) {
            1 & b && l.\u0275\u0275elementContainer(0)
        }
        function c(b, k) {
            if (1 & b && (l.\u0275\u0275elementContainerStart(0),
            l.\u0275\u0275elementStart(1, "span"),
            l.\u0275\u0275template(2, F, 2, 1, "ng-container", 9),
            l.\u0275\u0275template(3, y, 1, 0, "ng-container", 10),
            l.\u0275\u0275elementEnd(),
            l.\u0275\u0275elementContainerEnd()),
            2 & b) {
                const m = l.\u0275\u0275nextContext()
                  , S = l.\u0275\u0275reference(11);
                l.\u0275\u0275advance(2),
                l.\u0275\u0275property("ngIf", m.label),
                l.\u0275\u0275advance(1),
                l.\u0275\u0275property("ngTemplateOutlet", S)
            }
        }
        function w(b, k) {
            if (1 & b) {
                const m = l.\u0275\u0275getCurrentView();
                l.\u0275\u0275elementStart(0, "fdc-inline-error", 11),
                l.\u0275\u0275listener("displayErrorMessageIdsChange", function(f) {
                    return l.\u0275\u0275restoreView(m),
                    l.\u0275\u0275nextContext().errorMessageIds.next(f.trim())
                }),
                l.\u0275\u0275elementEnd()
            }
            if (2 & b) {
                const m = l.\u0275\u0275nextContext();
                l.\u0275\u0275property("id", "inline-error-" + m.id)("errorMessages", m.errorMessages)("control", m.formControl)
            }
        }
        function _(b, k) {
            if (1 & b && l.\u0275\u0275element(0, "div", 14),
            2 & b) {
                const m = l.\u0275\u0275nextContext(2);
                l.\u0275\u0275property("innerHTML", m.label, l.\u0275\u0275sanitizeHtml)
            }
        }
        function I(b, k) {
            1 & b && l.\u0275\u0275elementContainer(0)
        }
        function T(b, k) {
            if (1 & b && (l.\u0275\u0275elementStart(0, "span", 12),
            l.\u0275\u0275template(1, _, 1, 1, "div", 13),
            l.\u0275\u0275template(2, I, 1, 0, "ng-container", 10),
            l.\u0275\u0275elementEnd()),
            2 & b) {
                const m = l.\u0275\u0275nextContext()
                  , S = l.\u0275\u0275reference(11);
                l.\u0275\u0275advance(1),
                l.\u0275\u0275property("ngIf", m.label),
                l.\u0275\u0275advance(1),
                l.\u0275\u0275property("ngTemplateOutlet", S)
            }
        }
        function g(b, k) {
            1 & b && l.\u0275\u0275projection(0)
        }
        const A = function(b) {
            return {
                "invalid checkbox-input--error": b
            }
        }
          , R = ["*"];
        let P = (()=>{
            class b {
                constructor(m, S, f) {
                    this._ngControl = m,
                    this._cdr = S,
                    this.platformInfoService = f,
                    this.checked = !1,
                    this.showAllMessages = !1,
                    this.errorMessageIds = new h.X(""),
                    this._disabled = !1,
                    this._indeterminate = !1,
                    this.indeterminateChange = new l.EventEmitter,
                    this.id = (0,
                    p.Z)(),
                    this.ariaControls = "",
                    this.ariaLabelledby = null,
                    this.errorMessages = {},
                    this.manualShowErrorState = !1,
                    this.checkedChange = new l.EventEmitter,
                    this.boxFocused = new l.EventEmitter,
                    this.boxBlurred = new l.EventEmitter,
                    this._hasError = !1,
                    this.onChange = ()=>{}
                    ,
                    this.onTouched = ()=>{}
                    ,
                    this.isIos = this.platformInfoService.isIos,
                    this.isMobile = this.platformInfoService.isIos || this.platformInfoService.isAndroid,
                    this._ngControl && (this._ngControl.valueAccessor = this)
                }
                get disabled() {
                    return this._disabled
                }
                set disabled(m) {
                    const S = this.coerceBooleanProp(m);
                    S !== this.disabled && (this._disabled = S,
                    this._cdr.markForCheck())
                }
                get indeterminate() {
                    return this._indeterminate
                }
                set indeterminate(m) {
                    if (m != this._indeterminate) {
                        const f = this.coerceBooleanProp(m);
                        this._indeterminate = f,
                        this._cdr.markForCheck(),
                        this.indeterminateChange.emit(f),
                        this._inputElement && (this._inputElement.nativeElement.indeterminate = f)
                    }
                }
                set ariaDescribedby(m) {
                    this.errorMessageIds.next(m.trim())
                }
                ngOnInit() {
                    this._ngControl && (this.formControl = this._ngControl.control)
                }
                ngOnChanges(m) {
                    m.checked && (this.checked = m.checked.currentValue,
                    this._inputElement.nativeElement.checked = this.checked)
                }
                writeValue(m) {
                    this.checked = !!m,
                    this.onChange(this.checked),
                    this.checkedChange.emit(this.checked)
                }
                registerOnChange(m) {
                    this.onChange = m
                }
                registerOnTouched(m) {
                    this.onTouched = m
                }
                setDisabledState(m) {
                    this.disabled = m
                }
                onInteractionEvent(m) {
                    var S, f;
                    m.stopPropagation(),
                    this.checked = null !== (f = null === (S = null == m ? void 0 : m.target) || void 0 === S ? void 0 : S.checked) && void 0 !== f && f,
                    this.onChange(this.checked),
                    this.checkedChange.emit(this.checked)
                }
                onFocus() {
                    var m;
                    this._hasFocus = !0,
                    null === (m = this._inputElement) || void 0 === m || m.nativeElement.focus(),
                    this.boxFocused.emit()
                }
                onBlur() {
                    this.onTouched(),
                    this._hasFocus = !1,
                    this.boxBlurred.emit()
                }
                coerceBooleanProp(m) {
                    return null != m && "false" != `${m}`
                }
                getAriaChecked() {
                    return this.checked ? "true" : this.indeterminate ? "mixed" : "false"
                }
                getErrors() {
                    if (this.formControl) {
                        const m = this.formControl.validator ? this.formControl.validator({}) : void 0;
                        return !(!m || !m.required || this.checked || !this.formControl.touched || this.disabled)
                    }
                    return this.manualShowErrorState && !this.disabled && !this.checked || !1
                }
            }
            return b.\u0275fac = function(m) {
                return new (m || b)(l.\u0275\u0275directiveInject(U.NgControl, 10),l.\u0275\u0275directiveInject(l.ChangeDetectorRef),l.\u0275\u0275directiveInject(L.t))
            }
            ,
            b.\u0275cmp = l.\u0275\u0275defineComponent({
                type: b,
                selectors: [["fdc-checkbox-refresh"]],
                viewQuery: function(m, S) {
                    if (1 & m && l.\u0275\u0275viewQuery(v, 7),
                    2 & m) {
                        let f;
                        l.\u0275\u0275queryRefresh(f = l.\u0275\u0275loadQuery()) && (S._inputElement = f.first)
                    }
                },
                inputs: {
                    checked: "checked",
                    disabled: "disabled",
                    indeterminate: "indeterminate",
                    value: "value",
                    id: "id",
                    name: "name",
                    required: "required",
                    ariaControls: ["aria-controls", "ariaControls"],
                    ariaDescribedby: ["aria-describedby", "ariaDescribedby"],
                    ariaLabelledby: ["aria-labelledby", "ariaLabelledby"],
                    errorMessages: "errorMessages",
                    manualShowErrorState: "manualShowErrorState",
                    label: "label"
                },
                outputs: {
                    indeterminateChange: "indeterminateChange",
                    checkedChange: "checkedChange",
                    boxFocused: "boxFocused",
                    boxBlurred: "boxBlurred"
                },
                features: [l.\u0275\u0275NgOnChangesFeature],
                ngContentSelectors: R,
                decls: 12,
                vars: 22,
                consts: [[1, "form-field", "mercury"], [1, "form-check"], [1, "checkbox-layout", "fdc-body1", "regular"], ["type", "checkbox", 1, "checkbox-input", "block", 3, "ngClass", "required", "disabled", "checked", "change", "blur", "focus"], ["input", ""], [4, "ngIf", "ngIfElse"], [3, "id", "errorMessages", "control", "displayErrorMessageIdsChange", 4, "ngIf"], ["desktopLabel", ""], ["contentLabel", ""], [4, "ngIf"], [4, "ngTemplateOutlet"], [3, "id", "errorMessages", "control", "displayErrorMessageIdsChange"], [1, "checkbox-label"], [3, "innerHTML", 4, "ngIf"], [3, "innerHTML"]],
                template: function(m, S) {
                    if (1 & m && (l.\u0275\u0275projectionDef(),
                    l.\u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "label", 2)(3, "input", 3, 4),
                    l.\u0275\u0275listener("change", function(ce) {
                        return S.onInteractionEvent(ce)
                    })("blur", function() {
                        return S.onBlur()
                    })("focus", function() {
                        return S.onFocus()
                    }),
                    l.\u0275\u0275pipe(5, "async"),
                    l.\u0275\u0275elementEnd(),
                    l.\u0275\u0275template(6, c, 4, 2, "ng-container", 5),
                    l.\u0275\u0275elementEnd()(),
                    l.\u0275\u0275template(7, w, 1, 3, "fdc-inline-error", 6),
                    l.\u0275\u0275elementEnd(),
                    l.\u0275\u0275template(8, T, 3, 2, "ng-template", null, 7, l.\u0275\u0275templateRefExtractor),
                    l.\u0275\u0275template(10, g, 1, 0, "ng-template", null, 8, l.\u0275\u0275templateRefExtractor)),
                    2 & m) {
                        const f = l.\u0275\u0275reference(9);
                        l.\u0275\u0275advance(2),
                        l.\u0275\u0275classProp("checkbox-layout--disabled", !!S.disabled),
                        l.\u0275\u0275attribute("for", S.id),
                        l.\u0275\u0275advance(1),
                        l.\u0275\u0275property("ngClass", l.\u0275\u0275pureFunction1(20, A, S.getErrors()))("required", S.required)("disabled", S.disabled)("checked", S.checked),
                        l.\u0275\u0275attribute("id", S.id)("value", S.value)("name", S.name)("aria-controls", S.ariaControls)("aria-labelledby", S.ariaLabelledby)("aria-describedby", l.\u0275\u0275pipeBind1(5, 18, S.errorMessageIds))("aria-checked", S.getAriaChecked())("aria-invalid", S.getErrors() && !S.isIos),
                        l.\u0275\u0275advance(3),
                        l.\u0275\u0275property("ngIf", S.isMobile)("ngIfElse", f),
                        l.\u0275\u0275advance(1),
                        l.\u0275\u0275property("ngIf", S.formControl)
                    }
                },
                directives: [N.yn, C.mk, C.O5, C.tP],
                pipes: [C.Ov],
                styles: ['[_nghost-%COMP%]   .form-check[_ngcontent-%COMP%]{display:inline-flex;margin-top:2px;margin-bottom:2px}[_nghost-%COMP%]   .checkbox-input[_ngcontent-%COMP%]{height:2.4rem;width:2.4rem;min-width:2.4rem;vertical-align:top;background-repeat:no-repeat;background-position:center;background-size:contain;-webkit-appearance:none;-moz-appearance:none;appearance:none;margin-right:1.4rem;border-radius:.4rem;border:2px solid var(--brand-dark-grey)}[_nghost-%COMP%]   .checkbox-input--error[_ngcontent-%COMP%]{border:2px solid var(--brand-negative)}[_nghost-%COMP%]   .checkbox-input[_ngcontent-%COMP%]:checked{background-color:var(--brand-pri);border-color:var(--brand-pri);background-size:80%}[_nghost-%COMP%]   .checkbox-input[_ngcontent-%COMP%]:checked:hover{background-color:var(--bmo-ultramarine)}[_nghost-%COMP%]   .checkbox-input[_ngcontent-%COMP%]:checked:hover:disabled{background-color:var(--brand-light-grey)}[_nghost-%COMP%]   .checkbox-input[_ngcontent-%COMP%]:disabled{pointer-events:none;filter:none;opacity:.5;background-color:var(--brand-light-grey);border:2px solid var(--brand-dark-grey);cursor:default}[_nghost-%COMP%]   .checkbox-input[_ngcontent-%COMP%]:indeterminate{background-color:var(--brand-pri);border-color:var(--brand-pri);background-image:url("data:image/svg+xml,%3Csvg height%3D%2216%22 viewBox%3D%220 0 16 16%22 width%3D%2216%22 xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%3E%3Cdefs%3E%3Crect id%3D%22a%22 height%3D%222%22 rx%3D%221%22 width%3D%2214%22 x%3D%221%22 y%3D%227%22%2F%3E%3Cmask id%3D%22b%22 fill%3D%22%23fff%22%3E%3Cuse fill%3D%22%23fff%22 fill-rule%3D%22evenodd%22 xlink%3Ahref%3D%22%23a%22%2F%3E%3C%2Fmask%3E%3C%2Fdefs%3E%3Cg fill%3D%22%23fff%22 fill-rule%3D%22evenodd%22%3E%3Cuse xlink%3Ahref%3D%22%23a%22%2F%3E%3Cg mask%3D%22url(%23b)%22%3E%3Cpath d%3D%22m0 0h16v16h-16z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E");background-size:80%}[_nghost-%COMP%]   .checkbox-input[_ngcontent-%COMP%]:indeterminate:hover{background-color:var(--bmo-ultramarine)}[_nghost-%COMP%]   .checkbox-layout[_ngcontent-%COMP%]{-webkit-user-select:none;-moz-user-select:none;user-select:none;display:inline-flex;color:var(--brand-black);position:relative}[_nghost-%COMP%]   .checkbox-layout--disabled[_ngcontent-%COMP%]{color:var(--brand-dark-grey);cursor:default}[_nghost-%COMP%]   .checkbox-label[_ngcontent-%COMP%]{-webkit-user-select:auto;-moz-user-select:auto;user-select:auto}'],
                changeDetection: 0
            }),
            b
        }
        )()
          , re = (()=>{
            class b {
            }
            return b.\u0275fac = function(m) {
                return new (m || b)
            }
            ,
            b.\u0275mod = l.\u0275\u0275defineNgModule({
                type: b
            }),
            b.\u0275inj = l.\u0275\u0275defineInjector({
                imports: [[C.ez, N.o$]]
            }),
            b
        }
        )()
    }
}]);
