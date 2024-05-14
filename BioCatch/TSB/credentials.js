!function() {
    "use strict";
    var a = angular.module("credentialsPublic", ["App.credentialsPublic", "tsb.journal-util"]);
    a.config(["$urlRouterProvider", "$translateProvider", function(a, b) {
        a.otherwise("/login"),
        b.useMissingTranslationHandlerLog(),
        b.useSanitizeValueStrategy("sanitizeParameters")
    }
    ]),
    a.run(["loginService", "$cookies", "uuid", "tsbJournalService", function(a, b, c, d) {
        function e() {
            var a = "PSSOTOKENID-" + c.v4();
            b.put("ssotoken", a, {
                path: "/"
            }),
            b.put("BzWCQCsViVVZnq91L03", a, {
                path: "/"
            }),
            d.newSession()
        }
        e()
    }
    ]),
    AppInit.setConfig({})
}(),
function() {
    "use strict";
    angular.module("App.credentialsPublic", ["appverse.cache", "ui.bootstrap", "proteo.invocation-service", "angularRipple", "ui.select", "ngSanitize", "angular.filter", "appverse.router", "appverse.translate", "appverse", "App.registration", "App.logOn", "App.recoverUser", "App.wobo", "proteo.consultive", "App.forgottenUserId", "App.log", "App.scaEnrollment"])
}(),
function() {
    "use strict";
    angular.module("App.forgottenUserId", ["proteo.ui.basics", "App.forgottenUserId.templates", "proteo.ui.basics.templates", "proteo.ui.compound-input-sortcode", "proteo.ui.compound-input-sortcode.templates", "proteo.ui.compound-input-account", "proteo.ui.compound-input-account.templates", "proteo.ui.date-picker", "proteo.ui.date-picker.templates"])
}(),
function() {
    "use strict";
    angular.module("App.activationCodeState", ["App.activationCodeState.templates", "angular-uuid"])
}(),
function() {
    "use strict";
    angular.module("App.captureImportantInformation", ["App.captureImportantInformation.templates"])
}(),
function() {
    "use strict";
    angular.module("App.captureMemorableInformation", ["App.captureMemorableInformation.templates", "proteo.ui.modal", "proteo.ui.modal.templates", "App.sca-modals.templates"])
}(),
function() {
    "use strict";
    angular.module("App.capturePassword", ["App.capturePassword.templates", "proteo.ui.collapse", "proteo.ui.collapse.templates"])
}(),
function() {
    "use strict";
    angular.module("App.capturePasswordAndOTP", ["App.capturePasswordAndOTP.templates", "proteo.ui.collapse", "proteo.ui.collapse.templates", "App.sca-enrollment-otp-panel", "App.sca-enrollment-otp-panel.templates", "proteo.ui.modal", "proteo.ui.modal.templates", "App.sca-modals.templates"])
}(),
function() {
    "use strict";
    angular.module("App.captureQuestions", ["App.captureQuestions.templates", "proteo.ui.collapse", "proteo.ui.collapse.templates"])
}(),
function() {
    "use strict";
    angular.module("App.changePassword", ["App.changePassword.templates", "proteo.ui.collapse", "proteo.ui.collapse.templates"])
}(),
function() {
    "use strict";
    angular.module("App.enterActivationCode", ["App.enterActivationCode.templates", "proteo.ui.authentication-panel", "proteo.ui.authentication-panel.templates", "proteo.ui.collapse", "proteo.ui.collapse.templates", "angular-uuid"])
}(),
function() {
    "use strict";
    angular.module("App.logOn", ["App.enterActivationCode", "App.activationCodeState", "App.login", "App.provideAddress", "App.memorableInformation", "App.migrateAccessCode", "App.captureMemorableInformation", "App.captureImportantInformation", "App.capturePassword", "App.capturePasswordAndOTP", "App.scaPhoneOTP", "App.mandatoryPage", "App.changePassword", "App.captureQuestions", "proteo.canal-invoker", "proteo.ui.basics", "proteo.ui.basics.templates", "proteo.ui.popover", "proteo.ui.popover.templates", "proteo.ui.marketing-area", "proteo.ui.marketing-area.templates"])
}(),
function() {
    "use strict";
    angular.module("App.login", ["App.login.templates", "proteo.ui.captcha"])
}(),
function() {
    "use strict";
    angular.module("App.mandatoryPage", ["App.mandatoryPage.templates"])
}(),
function() {
    "use strict";
    angular.module("App.memorableInformation", ["App.memorableInformation.templates", "ngCookies", "proteo.ui.modal", "proteo.ui.modal.templates"])
}(),
function() {
    "use strict";
    angular.module("App.migrateAccessCode", ["App.migrateAccessCode.templates"])
}(),
function() {
    "use strict";
    angular.module("App.provideAddress", ["App.provideAddress.templates", "ngCookies"])
}(),
function() {
    "use strict";
    angular.module("App.scaEnrollment.functions", ["appverse.cache", "ui.bootstrap", "angularRipple", "ui.select", "ngSanitize", "angular.filter", "appverse.router", "appverse.translate", "appverse", "proteo.invocation-service", "proteo.canal-invoker"])
}(),
function() {
    "use strict";
    angular.module("App.scaEnrollment", ["App.scaEnrollment.templates", "App.sca-enrollment-otp-panel", "App.sca-enrollment-otp-panel.templates", "App.scaEnrollment.functions", "proteo.ui.modal", "proteo.ui.modal.templates", "App.sca-modals.templates"])
}(),
function() {
    "use strict";
    angular.module("App.sca-enrollment-otp-panel", ["appverse.cache", "ui.bootstrap", "proteo.invocation-service", "angularRipple", "ui.select", "ngSanitize", "angular.filter", "appverse.router", "proteo.ui.respond-function", "proteo.ui.respond-function.templates", "proteo.ui.authentication-panel", "proteo.ui.authentication-panel-colleague", "App.globalErrorPage", "App.globalErrorPage.templates", "proteo.ui.authentication-panel-colleague.templates", "proteo.ui.authentication-panel-telephone", "proteo.ui.authentication-panel-telephone.templates", "proteo.ui.authentication-panel.templates", "proteo.ui.signature-panel.templates", "proteo.canal-invoker", "proteo.consultive", "angular-uuid", "appverse.translate", "appverse"])
}(),
function() {
    "use strict";
    angular.module("App.scaPhoneOTP", ["App.scaPhoneOTP.templates", "App.sca-enrollment-otp-panel", "App.sca-enrollment-otp-panel.templates"])
}(),
function() {
    "use strict";
    angular.module("App.applicationAlreadyReceived", [])
}(),
function() {
    "use strict";
    angular.module("App.challengeQuestions", ["App.challengeQuestions.templates", "proteo.ui.collapse", "proteo.ui.collapse.templates"])
}(),
function() {
    "use strict";
    angular.module("App.enterCustomerIdData", [])
}(),
function() {
    "use strict";
    angular.module("App.globalErrorPageReset", ["App.globalErrorPageReset.templates"])
}(),
function() {
    "use strict";
    angular.module("App.noSecretInformation", ["App.noSecretInformation.templates"])
}(),
function() {
    "use strict";
    angular.module("App.offLine", ["App.offLine.templates"])
}(),
function() {
    "use strict";
    angular.module("App.partialSuccess", [])
}(),
function() {
    "use strict";
    angular.module("App.phoneAuthenticationRequired", [])
}(),
function() {
    "use strict";
    angular.module("App.phoneAuthenticationRequiredSca", ["proteo.ui.signature-panel", "proteo.ui.signature-panel.templates", "proteo.ui.sca-signature-panel", "proteo.ui.sca-signature-panel.templates", "App.sca-modals-error.templates"])
}(),
function() {
    "use strict";
    angular.module("App.recoverUser", ["proteo.canal-invoker", "proteo.ui.basics", "proteo.ui.basics.templates", "App.enterCustomerIdData", "App.enterCustomerIdData.templates", "App.resetPasswordAndMI", "App.resetPasswordAndMI.templates", "App.applicationAlreadyReceived", "App.applicationAlreadyReceived.templates", "App.partialSuccess", "App.partialSuccess.templates", "App.phoneAuthenticationRequired", "App.phoneAuthenticationRequired.templates", "App.globalErrorPage", "App.globalErrorPage.templates", "App.phoneAuthenticationRequiredSca", "App.phoneAuthenticationRequiredSca.templates", "App.rpPhoneAuthenticationInProgress", "App.rpPhoneAuthenticationInProgress.templates", "App.rpPhoneAuthenticationFailed", "App.rpPhoneAuthenticationFailed.templates", "App.resetPasswordSuccess", "App.resetPasswordSuccess.templates", "App.challengeQuestions", "App.challengeQuestions.templates", "App.offLine", "App.offLine.templates", "App.globalErrorPageReset", "App.globalErrorPageReset.templates", "App.noSecretInformation", "App.noSecretInformation.templates", "App.userWithNoPhones", "App.userWithNoPhones.templates"])
}(),
function() {
    "use strict";
    angular.module("App.resetPasswordAndMI", [])
}(),
function() {
    "use strict";
    angular.module("App.resetPasswordSuccess", [])
}(),
function() {
    "use strict";
    angular.module("App.rpPhoneAuthenticationFailed", [])
}(),
function() {
    "use strict";
    angular.module("App.rpPhoneAuthenticationInProgress", [])
}(),
function() {
    "use strict";
    angular.module("App.userWithNoPhones", [])
}(),
function() {
    "use strict";
    angular.module("App.applicationExist", ["App.applicationExist.templates"])
}(),
function() {
    "use strict";
    angular.module("App.helpdeskAuthorisation", ["App.helpdeskAuthorisation.templates"])
}(),
function() {
    "use strict";
    angular.module("App.phoneAuthenticationFailed", ["App.phoneAuthenticationFailed.templates"])
}(),
function() {
    "use strict";
    angular.module("App.phoneAuthentication", ["App.phoneAuthentication.templates"])
}(),
function() {
    "use strict";
    angular.module("App.registrationAlreadyReceived", ["App.registrationAlreadyReceived.templates"])
}(),
function() {
    "use strict";
    angular.module("App.registration", ["App.applicationExist", "App.applicationExist.templates", "App.helpdeskAuthorisation", "App.helpdeskAuthorisation.templates", "App.phoneAuthentication", "App.phoneAuthentication.templates", "App.phoneAuthenticationFailed", "App.phoneAuthenticationFailed.templates", "App.registrationAlreadyReceived", "App.registrationAlreadyReceived.templates", "App.registrationSteps", "App.registrationSteps.templates", "App.challengeQuestions", "App.challengeQuestions.templates", "proteo.dynamic-states", "proteo.ui.basics", "proteo.ui.basics.templates", "proteo.ui.wizard-states", "proteo.ui.wizard-states.templates"])
}(),
function() {
    "use strict";
    angular.module("App.registrationSteps", ["App.globalErrorPage", "App.globalErrorPage.templates", "proteo.dynamic-states", "proteo.ui.basics", "proteo.ui.basics.templates", "proteo.ui.wizard-states", "proteo.ui.wizard-states.templates", "proteo.ui.date-picker", "proteo.ui.date-picker.templates", "proteo.ui.compound-input-sortcode", "proteo.ui.compound-input-sortcode.templates", "proteo.ui.signature-panel", "proteo.generic-functions", "proteo.consultive"])
}(),
function() {
    "use strict";
    angular.module("App.wobo", ["App.logOn"])
}(),
function() {
    "use strict";
    function a(a) {
        a.error("Consultive Error")
    }
    function b(a, b) {
        switch (a) {
        case "resetPassword":
            return b[1];
        case "resetPasswordAndMI":
            return b[2];
        case "resetPasswordAndMISca":
            return b[7];
        case "login":
            return b[3];
        case "loginSca":
            return b[6];
        case "registration":
            return b[4];
        case "forgottenUserId":
        case "enterCustomerIdData":
            return b[0];
        default:
            return b[0]
        }
    }
    function c(c, d, e, f, g, h, i) {
        function j(a) {
            function b(a) {
                a && e.setOperationID(a.operationID),
                f.resolve()
            }
            function c(a) {
                var b = {
                    description: k("COMMON_SERVICE_UNAVAILABLE"),
                    code: 0
                };
                a.exception ? f.reject(a.exception) : f.reject(b)
            }
            var f = d.defer();
            return g.invoke({
                service: h.validatePublicOperation,
                callback: b,
                fail: c,
                data: a
            }),
            f.promise
        }
        var k = f("translate")
          , l = {
            tcSelected: ""
        };
        return l.validateOperation = function(d) {
            l.tcSelected = b(d, c),
            l.validatePublicOperation(l.tcSelected).then(function(a) {
                return a
            })["catch"](function(b) {
                return a(i),
                b
            })
        }
        ,
        l.valitadeQuestionsCall = function(a, b, c) {
            b.valitadeQuestions(a.bodyParams.userId).then(function(a) {
                "OK" === a.returnCode && l.setQuestionsValidate(!0)
            }, function(a) {
                console.debug("Error: ", a),
                l.setQuestionsValidate(!1)
            })
        }
        ,
        l.setQuestionsValidate = function(a) {
            l.questionsValidate = a
        }
        ,
        l.getQuestionsValidate = function() {
            return l.questionsValidate
        }
        ,
        l.setOldRegistration = function(a) {
            l.oldRegistration = a
        }
        ,
        l.getOldRegistration = function() {
            return l.oldRegistration
        }
        ,
        l.setUserId = function(a) {
            l.userId = a
        }
        ,
        l.getUserId = function() {
            return l.userId
        }
        ,
        l.setUserBirth = function(a) {
            l.userBirth = a
        }
        ,
        l.getUserBirth = function() {
            return l.userBirth
        }
        ,
        l.setUserData = function(a) {
            l.userData = a
        }
        ,
        l.getUserData = function() {
            return l.userData
        }
        ,
        l.setQuestionsData = function(a) {
            l.questionsData = a
        }
        ,
        l.getQuestionsData = function() {
            return l.questionsData
        }
        ,
        l.setAllQuestions = function(a) {
            l.questions = a
        }
        ,
        l.getAllQuestions = function() {
            return l.questions
        }
        ,
        l.getValidateQuestions = function() {
            return l.validateQuestions
        }
        ,
        l.setValidateQuestions = function(a) {
            l.questions = a
        }
        ,
        l.getUserQuestions = function() {
            return l.questions
        }
        ,
        l.setUserQuestions = function(a) {
            l.questions = a
        }
        ,
        l.validatePublicOperation = function(a) {
            var b = {
                transactionCode: a
            };
            return j(b)
        }
        ,
        l
    }
    c.$inject = ["TRANSACTION_CODE", "$q", "consultiveFactory", "$filter", "proteocanalinvokerServices", "CONSULTIVE_WEBADAPTER", "$log"],
    angular.module("App.credentialsPublic").constant("TRANSACTION_CODE", ["RESCRE", "RESPWD", "RESMII", "WLOGON", "ONLREG", "ENROL2", "LOGSCA", "RESSCA"]).factory("ConsultiveProvider", c)
}(),
function() {
    "use strict";
    angular.module("App.credentialsPublic").factory("getUserGenericService", ["$q", "proteocanalinvokerServices", "CREDENTIALS_WEBADAPTER", "logOnFactory", function(a, b, c, d) {
        var e = {};
        return e.getUserDetails = function() {
            function e(a) {
                f.resolve(a)
            }
            var f = a.defer()
              , g = {
                params: {
                    authId: d.getAuthId(),
                    userId: d.getUserId()
                }
            }
              , h = Object.create(null);
            return h["HEADER.SAMPLE"] = "SAMPLE HEADER",
            b.invoke({
                service: c.getUserDetails,
                callback: e,
                data: g,
                headers: h,
                idLoader: "loaderGOEShere",
                bigLoader: !0
            }),
            f.promise
        }
        ,
        e
    }
    ])
}(),
function() {
    "use strict";
    function a() {
        var a = {};
        return a.step = 1,
        a.scaMode = !1,
        a.scaResetFlow = !1,
        a.incStep = function() {
            a.step++
        }
        ,
        a.decStep = function() {
            a.step--
        }
        ,
        a.steps = {
            validateUser: 1,
            validatePasswordAndMemorable: 2,
            scaEnrollment: 3,
            enterPasswordOtp: 2,
            changePassword: 3,
            captureMemorableInformation: 4,
            capturePassword: 2,
            scaPhoneOTP: 3,
            enterActivationCode: 3,
            captureQuestions: 7,
            setUserQuestions: 7
        },
        a.product = {
            validateUser: "login",
            validatePasswordAndMemorable: "login",
            scaEnrollment: "enrolment new",
            enterPasswordOtp: "enrolment new",
            changePassword: "enrolment new",
            captureMemorableInformation: "enrolment new",
            capturePassword: "login",
            scaPhoneOTP: "login",
            enterActivationCode: "login",
            captureQuestions: "logged",
            setUserQuestions: "logged"
        },
        a.resetCredentials = {
            enterCustomerIdData: {
                step_number: 1
            },
            noSecretInformationCaptured: {
                step_number: 2
            },
            resetPasswordAndMI: {
                step_number: 3
            },
            phoneAuthenticationRequired: {
                step_number: 4
            },
            resetPasswordSuccess: {
                step_number: 5
            },
            partialSuccess: {
                step_number: 6
            }
        },
        a.resetCredentialsSca = {
            enterCustomerIdData: {
                step_number: 1
            },
            challengeQuestions: {
                step_number: 2
            },
            offLine: {
                step_number: 3
            },
            phoneAuthenticationRequiredSca: {
                step_number: 4
            },
            resetPasswordAndMI: {
                step_number: 5
            },
            resetPasswordSuccess: {
                step_number: 6
            },
            partialSuccess: {
                step_number: 7
            }
        },
        a.errorType = {
            POPUP: "pop up",
            ERROR_PAGE: "error page",
            WARNING: "page warning"
        },
        a.sendResetCredentials = function(b) {
            var c = "no";
            a.scaMode && (c = "yes");
            var d = b;
            d.indexOf("_") >= 0 && (d = d.split("_")[0]);
            var e = "Retail"
              , f = {
                application_name: "Reset Password and MI",
                product_category: "SCA",
                operational_id: "SCARESETCREDENTIALS",
                sca_page: c,
                page_id: b,
                step_number: a.resetCredentials[b].step_number,
                site_segment: e,
                user_loginstatus: "Not Logged"
            };
            JSM._updateDataLayer(f)
        }
        ,
        a.sendResetCredentialsSca = function(b) {
            var c = "no";
            a.scaMode && (c = "yes");
            var d = b;
            d.indexOf("_") >= 0 && (d = d.split("_")[0]);
            var e = "Retail"
              , f = {
                application_name: "Reset Password and MI",
                product_category: "SCA",
                operational_id: "SCARESETCREDENTIALS",
                sca_page: c,
                page_id: b,
                step_number: a.resetCredentialsSca[b].step_number,
                site_segment: e,
                user_loginstatus: "Not Logged"
            };
            JSM._updateDataLayer(f)
        }
        ,
        a.updateScaDataLayer = function(b) {
            var c = "no";
            a.scaMode && (c = "yes"),
            "validateUser" === b ? a.step = 1 : a.incStep();
            var d = {
                application_name: "Log In",
                application_step: b,
                product_category: "SCA",
                sca_page: c,
                step_number: a.step,
                product_name: a.product[b]
            };
            JSM._updateDataLayer(d)
        }
        ,
        a.sendError = function(a) {
            JSM._updateDataLayer({
                error_message: a.message,
                error_code: a.code,
                error_type: a.type
            }),
            JSM.sendTLData(["error_message", "error_code", "error_type"])
        }
        ,
        a
    }
    angular.module("App.credentialsPublic").factory("DataLayerProvider", a)
}(),
function() {
    "use strict";
    angular.module("App.forgottenUserId").controller("forgottenUserIdController", ["$log", "$scope", "$state", "forgottenUserIdService", "$document", "tsbJournalService", "Consultive", function(a, b, c, d, e, f, g) {
        function h() {
            b.data = angular.copy(k)
        }
        function i() {
            h(),
            JSM._dataLayerSPAReady()
        }
        function j(a) {
            var e = {}
              , f = "1";
            switch (b.data.accountDetails.accountType) {
            case "current-saving":
                e.sortCode = b.data.sortCode,
                f = "CA";
                break;
            case "credit":
                e.cardNumber = b.data.accountDetails.accountNumber,
                f = "CC";
                break;
            case "loan":
                e.sortCode = b.data.sortCode,
                f = "PL";
                break;
            case "mortgage":
                e.sortCode = b.data.sortCode,
                f = "MG";
                break;
            default:
                e.sortCode = b.data.sortCode,
                f = "CA"
            }
            e.userDetails = {
                firstName: b.data.userDetails.firstName,
                lastName: b.data.userDetails.lastName,
                dateOfBirth: b.data.userDetails.dateOfBirth
            },
            e.accountDetails = {
                accountNumber: b.data.accountDetails.accountNumber,
                sortCode: b.data.accountDetails.sortCode,
                accountType: f
            },
            d.getForgottenIdService(e).then(function(a) {
                b.exceptionError = null,
                b.globalError = !1,
                angular.isDefined(a.userID) && c.go("forgottenUserIdSuccessful", {
                    userId: a.userID
                })
            }, function(c) {
                b.data = angular.copy(k),
                a.$setPristine(),
                a.$setUntouched(),
                b.globalError = !0,
                angular.isObject(c.exception) && (b.globalErrorTxt = angular.isDefined(c.exception) ? c.exception.description : "RETAIL_CREDENTIALS_PUBLIC_LOGON_MEMORABLEINFORMATION_ERRORSUBMITED")
            })
        }
        var k = {
            userDetails: {
                firstName: null,
                lastName: null,
                dateOfBirth: null
            },
            accountDetails: {
                accountType: "current-saving",
                sortCode: null,
                accountNumber: null
            }
        };
        b.exceptionError = null,
        b.globalError = null,
        b.globalErrorTxt = "RETAIL_CREDENTIALS_PUBLIC_LOGON_MEMORABLEINFORMATION_ERRORSUBMITED";
        var l = new Date;
        b.maxDate = new Date(l.getFullYear() - 10,l.getMonth(),l.getDate()),
        b.minDate = new Date(l.getFullYear() - 101,0,1),
        b.dataLayerFn = function(a, b) {
            JSM._updateDataLayer({
                event_name: "drop down menu; " + e[0].title,
                event_action: a,
                event_label: b
            })
        }
        ,
        b.isDatePickerTouched = function(a) {
            return a.selectedDay.$touched && a.selectedMonth.$touched && a.selectedYear.$touched
        }
        ,
        b.submit = function(b) {
            b.$valid ? j(b) : a.debug("Error: Form not valid")
        }
        ,
        i()
    }
    ])
}(),
function() {
    "use strict";
    angular.module("App.forgottenUserId").factory("forgottenUserIdService", ["$q", "$filter", "proteocanalinvokerServices", "CREDENTIALSPUBLIC_WEBADAPTER", function(a, b, c, d) {
        var e = {};
        return e.getForgottenIdService = function(e) {
            function f(a) {
                h.resolve(a)
            }
            function g(a) {
                h.reject(a)
            }
            var h = a.defer()
              , i = {}
              , j = {
                "HEADER.SERVICE_SCOPE": "PUBLIC"
            };
            return angular.isDate(e.userDetails.dateOfBirth) && (e.userDetails.dateOfBirth = b("date")(e.userDetails.dateOfBirth, "yyyy-MM-dd")),
            angular.extend(i, e),
            c.invoke({
                service: d.getForgottenId,
                callback: f,
                headers: j,
                fail: g,
                data: i
            }),
            h.promise
        }
        ,
        e
    }
    ])
}(),
function() {
    "use strict";
    angular.module("App.forgottenUserId").config(["$stateProvider", function(a) {
        a.state("forgottenUserId", {
            url: "/forgottenUserId",
            templateUrl: "/spasR46hfback/credentialsPublic/components/credentials-public/forgotten-user-id/forgotten-user-id-tpl.html",
            controller: "forgottenUserIdController",
            resolve: {
                Consultive: ["ConsultiveProvider", function(a) {
                    return a.validateOperation("forgottenUserId")
                }
                ]
            }
        })
    }
    ])
}(),
function() {
    "use strict";
    angular.module("App.forgottenUserId").controller("forgottenUserIdSuccessfulController", ["$scope", "$state", "$window", function(a, b, c) {
        function d() {
            b.params.userId ? (a.userId = b.params.userId,
            JSM._dataLayerSPAReady()) : b.go("forgottenUserId")
        }
        a.print = function() {
            c.print()
        }
        ,
        d()
    }
    ])
}(),
function() {
    "use strict";
    angular.module("App.forgottenUserId").config(["$stateProvider", function(a) {
        a.state("forgottenUserIdSuccessful", {
            url: "/forgottenUserIdSuccessful",
            templateUrl: "/spasR46hfback/credentialsPublic/components/credentials-public/forgotten-user-id/successful/forgotten-user-id-successful-tpl.html",
            controller: "forgottenUserIdSuccessfulController",
            params: {
                userId: null
            }
        })
    }
    ])
}(),
angular.module("App.forgottenUserId.templates", ["/spasR46hfback/credentialsPublic/components/credentials-public/forgotten-user-id/forgotten-user-id-tpl.html"]),
angular.module("/spasR46hfback/credentialsPublic/components/credentials-public/forgotten-user-id/forgotten-user-id-tpl.html", []).run(["$templateCache", function(a) {
    "use strict";
    a.put("/spasR46hfback/credentialsPublic/components/credentials-public/forgotten-user-id/forgotten-user-id-tpl.html", '<div class="row wrap-log-off-interstitial"><div class="col-xs-12"><h1 translate="RETAIL_CREDENTIALS_PUBLIC_FORGOTTENUSERID_TITLE"></h1></div><div class="col-xs-12"><div class="row"><div class="col-xs-12 lg-padding-left timeOutError" ng-if="forgottenUserIdForm.$invalid && forgottenUserIdForm.$submitted"><proteo-ui-icon class="sm-margin-right" icon-bg="red" icon="alert"></proteo-ui-icon><proteo-ui-text class="text-bold" translate="COMMON_MG_2672"></proteo-ui-text></div><div class="col-xs-12 lg-padding-left timeOutError" ng-show="exceptionError || globalError"><proteo-ui-icon class="sm-margin-right" icon-bg="red" icon="alert"></proteo-ui-icon><proteo-ui-text class="text-bold" ng-show="!globalError">{{exceptionError}}</proteo-ui-text><proteo-ui-text class="text-bold" ng-show="globalError" translate="{{globalErrorTxt}}"></proteo-ui-text></div></div><proteo-ui-text paragraph translate="RETAIL_CREDENTIALS_PUBLIC_FORGOTTENUSERID_VIEWIDINFORMATION_01"></proteo-ui-text></div><form name="forgottenUserIdForm" method="POST" ng-submit="submit(forgottenUserIdForm)" novalidate><div class="col-xs-12"><h2 class="no-margin xs-margin-top lg-margin-bottom" translate="RETAIL_CREDENTIALS_PUBLIC_FORGOTTENUSERID_YOURDETAILS"></h2><proteo-ui-form-group><label for="firstNameInput" translate="RETAIL_CREDENTIALS_PUBLIC_COMMON_FIRSTNAME_COLON"></label><proteo-ui-form-control><proteo-ui-input label="First name" id="firstNameInput" maxlength="30" id="firstName" name="firstName" ng-maxlength="30" ng-model="data.userDetails.firstName" ng-pattern="/^[a-zA-Z0-9 $_@.,&+=/#?:\'%()-]{1,30}$/" required type="text"></proteo-ui-input></proteo-ui-form-control><proteo-ui-form-error><div ng-if="forgottenUserIdForm.firstName.$error.required"><proteo-ui-text class="form-error" translate="RETAIL_CREDENTIALS_PUBLIC_COMMON_ERROR_ENTERVALUE"></proteo-ui-text></div><div ng-if="forgottenUserIdForm.firstName.$error.pattern"><proteo-ui-text class="form-error" translate="RETAIL_CREDENTIALS_PUBLIC_COMMON_ERROR_FORMAT"></proteo-ui-text></div><div ng-if="forgottenUserIdForm.firstName.$error.maxlength"><proteo-ui-text class="form-error" translate="RETAIL_CREDENTIALS_PUBLIC_COMMON_ERROR_LENGTH"></proteo-ui-text></div></proteo-ui-form-error></proteo-ui-form-group><proteo-ui-form-group><label for="lastNameInput" translate="RETAIL_CREDENTIALS_PUBLIC_COMMON_LASTNAME"></label><proteo-ui-form-control><proteo-ui-input label="Last name" id="lastNameInput" name="lastName" maxlength="30" ng-maxlength="30" ng-model="data.userDetails.lastName" ng-pattern="/^[a-zA-Z0-9 $_@.&+=\\-\\/#?:\'%()]{1,30}$/" required type="text"></proteo-ui-input></proteo-ui-form-control><proteo-ui-form-error><div ng-if="forgottenUserIdForm.lastName.$error.required"><proteo-ui-text class="form-error" translate="RETAIL_CREDENTIALS_PUBLIC_COMMON_ERROR_ENTERVALUE"></proteo-ui-text></div><div ng-if="forgottenUserIdForm.lastName.$error.pattern"><proteo-ui-text class="form-error" translate="RETAIL_CREDENTIALS_PUBLIC_COMMON_ERROR_FORMAT"></proteo-ui-text></div><div ng-if="forgottenUserIdForm.lastName.$error.maxlength"><proteo-ui-text class="form-error" translate="RETAIL_CREDENTIALS_PUBLIC_COMMON_ERROR_LENGTH"></proteo-ui-text></div></proteo-ui-form-error></proteo-ui-form-group><proteo-ui-form-group form-control-name="dateOfBirthdatePickerForm"><label for="dateOfBirth" translate="RETAIL_CREDENTIALS_PUBLIC_FORGOTTENUSERID_DATEOFBIRTH"></label><proteo-ui-form-control><proteo-ui-date-picker id="dateOfBirth" label="Date of birth" date-name="dateOfBirth" date-required="true" form-errors="true" hide-calendar="true" manual="true" max-date="maxDate" min-date="minDate" output="data.userDetails.dateOfBirth" size="12"></proteo-ui-date-picker></proteo-ui-form-control><proteo-ui-form-error><div ng-if="forgottenUserIdForm.dateOfBirthdatePickerForm.$error.required"><proteo-ui-text class="form-error" translate="RETAIL_CREDENTIALS_PUBLIC_COMMON_ERROR_ENTERVALUE"></proteo-ui-text></div><div ng-if="forgottenUserIdForm.dateOfBirthdatePickerForm.$error.outFromInterval"><proteo-ui-text class="form-error" translate="RETAIL_CREDENTIALS_PUBLIC_COMMON_ERROR_MINDATE_MAXDATE_DATA" translate-values="{minDate: minDate, maxDate: maxDate}"></proteo-ui-text></div></proteo-ui-form-error></proteo-ui-form-group></div><proteo-ui-thematic-break></proteo-ui-thematic-break><div class="col-xs-12"><h2 paragraph translate="RETAIL_CREDENTIALS_PUBLIC_FORGOTTENUSERID_YOURACCOUNTDETAILS"></h2><proteo-ui-text paragraph translate="RETAIL_CREDENTIALS_PUBLIC_FORGOTTENUSERID_MORETHANONE"></proteo-ui-text><proteo-ui-form-group><label for="accountTypeSelect" translate="RETAIL_CREDENTIALS_PUBLIC_COMMON_ACCOUNTTYPE_COLON"></label><proteo-ui-form-control><select ng-change="dataLayerFn(data.accountDetails.accountType, \'Your account details (account type)\')" class="form-control" id="accountTypeSelect" ng-model="data.accountDetails.accountType" ng-required="true"><option translate="RETAIL_CREDENTIALS_PUBLIC_FORGOTTENUSERID_DROPDOWNCURRENTSAVING" value="current-saving"><option translate="RETAIL_CREDENTIALS_PUBLIC_FORGOTTENUSERID_DROPDOWNCREDITCARD" value="credit"><option translate="RETAIL_CREDENTIALS_PUBLIC_FORGOTTENUSERID_DROPDOWNLOANS" value="loan"><option translate="RETAIL_CREDENTIALS_PUBLIC_FORGOTTENUSERID_DROPDOWNMORTGAGE" value="mortgage"></select></proteo-ui-form-control></proteo-ui-form-group><div class="row"><div class="col-xs-12"><ng-include src="\'/spasR46hfback/credentialsPublic/components/credentials-public/forgotten-user-id/select-templates/\'+data.accountDetails.accountType+\'.html\'"></ng-include></div></div></div><proteo-ui-thematic-break></proteo-ui-thematic-break><div class="clearfix"></div><div class="col-xs-12"><div class="row"><div class="col-xs-12 col-sm-6"><proteo-ui-link state="login"><proteo-ui-icon icon="cancel"></proteo-ui-icon><span translate="RETAIL_CREDENTIALS_PUBLIC_FORGOTTENUSERID_CANCEL"></span></proteo-ui-link></div><div class="col-xs-12 col-sm-6"><proteo-ui-button class="pull-right" ng-disabled="forgottenUserIdForm.$disabled" type="submit"><proteo-ui-text translate="RETAIL_CREDENTIALS_PUBLIC_FORGOTTENUSERID_SUBMIT"></proteo-ui-text></proteo-ui-button></div></div></div></form></div>')
}
]),
function() {
    "use strict";
    angular.module("App.activationCodeState").controller("activationCodeStateController", ["$scope", "$state", "$stateParams", "$filter", function(a, b, c, d) {
        a.model = {},
        a.model.success = c.data.success,
        a.model.errorMsg = c.data.errorMsg,
        0 == a.model.success && "" == a.model.errorMsg && (a.model.errorMsg = d("translate")("RETAIL_CREDENTIALS_PUBLIC_LOGON_ACTIVATIONCODESTATE_GLOBAL_ERROR")),
        a["continue"] = function() {
            b.go("login", {})
        }
        ,
        JSM._dataLayerSPAReady()
    }
    ])
}(),
function() {
    "use strict";
    angular.module("App.activationCodeState").config(["$stateProvider", function(a) {
        a.state("activationCodeState", {
            url: "/activationCodeState",
            templateUrl: "/spasR46hfback/credentialsPublic/components/credentials-public/log-on/activationCodeState/activation-code-state-tpl.html",
            controller: "activationCodeStateController",
            params: {
                data: null
            }
        })
    }
    ])
}(),
angular.module("App.activationCodeState.templates", ["/spasR46hfback/credentialsPublic/components/credentials-public/log-on/activationCodeState/activation-code-state-tpl.html"]),
angular.module("/spasR46hfback/credentialsPublic/components/credentials-public/log-on/activationCodeState/activation-code-state-tpl.html", []).run(["$templateCache", function(a) {
    "use strict";
    a.put("/spasR46hfback/credentialsPublic/components/credentials-public/log-on/activationCodeState/activation-code-state-tpl.html", '<div class="row"><div class="col-xs-12"><h1 class="no-margin-bottom" translate="RETAIL_CREDENTIALS_PUBLIC_LOGON_ACTIVATIONCODESTATE_TITLE"></h1></div><proteo-ui-thematic-break></proteo-ui-thematic-break><div class="row sm-margin-left md-margin-bottom"><div class="col-xs-12"><proteo-ui-text ng-if="!model.success" ng-bind="model.errorMsg"></proteo-ui-text><proteo-ui-text ng-if="model.success" translate="RETAIL_CREDENTIALS_PUBLIC_LOGON_ACTIVATIONCODESTATE_SUCCESS"></proteo-ui-text></div></div><proteo-ui-thematic-break></proteo-ui-thematic-break><div class="row"><div class="col-xs-12"><proteo-ui-button class="pull-right" ng-click="continue()"><proteo-ui-text translate="RETAIL_CREDENTIALS_PUBLIC_RECOVERUSER_RESETPWDANDMI_BACK_TO_LOGIN"></proteo-ui-text></proteo-ui-button></div></div></div>')
}
]),
function() {
    "use strict";
    angular.module("App.captureImportantInformation").controller("captureImportantInformationController", ["$log", "$scope", "$state", "captureImportantInformationService", function(a, b, c, d) {
        function e() {
            b.model = angular.copy(h),
            d.getInformationToShow().then(function(a) {
                angular.isDefined(a) && (b.showPanels = a)
            }, function(b) {
                a.debug("Error:", b)
            }),
            d.getCustomerPhoneList().then(function(a) {
                angular.isDefined(a) && (b.model = {
                    homePhoneNumber: angular.isDefined(a.phoneList.homePhoneNumber.number) ? a.phoneList.homePhoneNumber.number : null,
                    mobilePhoneNumber: angular.isDefined(a.phoneList.mobilePhoneNumber.number) ? a.phoneList.mobilePhoneNumber.number : null,
                    workPhoneNumber: angular.isDefined(a.phoneList.workPhoneNumber.number) ? a.phoneList.workPhoneNumber.number : null,
                    workExtensionNumber: angular.isDefined(a.phoneList.workPhoneNumber.extension) ? a.phoneList.workPhoneNumber.extension : null,
                    acceptTermsAndConditions: !1,
                    receiveMarketingEmails: "no",
                    keepUpToDate: "no",
                    emailAddress: ""
                },
                null !== a.phoneList.homePhoneNumber.number && null !== a.phoneList.mobilePhoneNumber.number && null !== a.phoneList.workPhoneNumber.number && (b.newContactDetails = !1)),
                g()
            }, function(b) {
                a.debug("Error:", b),
                g()
            })
        }
        function f() {
            e()
        }
        function g() {
            JSM._dataLayerSPAReady()
        }
        b.newContactDetails = !0,
        b.showPanels = {};
        var h = {
            homePhoneNumber: null,
            mobilePhoneNumber: null,
            workPhoneNumber: null,
            workExtensionNumber: null,
            acceptTermsAndConditions: !0,
            receiveMarketingEmails: null,
            keepUpToDate: null,
            emailAddress: null
        };
        b.submit = function(e) {
            if (e.$valid) {
                var f = {
                    acceptTermsAndConditions: b.model.acceptTermsAndConditions,
                    receiveMarketingEmails: b.model.receiveMarketingEmails,
                    keepUpToDate: b.model.keepUpToDate,
                    userContactDetails: {
                        homePhoneNumber: b.model.homePhoneNumber,
                        mobilePhoneNumber: b.model.mobilePhoneNumber,
                        workPhoneNumber: b.model.workPhoneNumber,
                        workExtensionNumber: b.model.workExtensionNumber
                    }
                };
                d.setImportantInformation(f).then(function(a) {
                    angular.isDefined(a) && a.isSuccessful && c.go("welcomeInternetBanking")
                }, function(b) {
                    a.debug("Error:", b)
                })
            }
        }
        ,
        b.cancel = function() {
            c.go("login")
        }
        ,
        f()
    }
    ])
}(),
function() {
    "use strict";
    angular.module("App.captureImportantInformation").factory("captureImportantInformationService", ["$log", "$q", "proteocanalinvokerServices", "CREDENTIALSPUBLIC_WEBADAPTER", function(a, b, c, d) {
        var e = {};
        return e.getCustomerPhoneList = function() {
            function a(a) {
                f.resolve(a)
            }
            function e(a) {
                f.reject(a)
            }
            var f = b.defer()
              , g = {};
            g.isMock = "true";
            var h = {
                "HEADER.SERVICE_SCOPE": "PUBLIC"
            };
            return c.invoke({
                service: d.getCustomerPhoneList,
                callback: a,
                fail: e,
                data: g,
                headers: h,
                idLoader: "loaderGOEShere",
                bigLoader: !0
            }),
            f.promise
        }
        ,
        e.setImportantInformation = function(a) {
            function e(a) {
                g.resolve(a)
            }
            function f(a) {
                g.reject(a)
            }
            var g = b.defer()
              , h = {};
            return h.isMock = "true",
            h.acceptTermsAndConditions = a.acceptTermsAndConditions,
            h.receiveMarketingEmails = a.receiveMarketingEmails,
            h.keepUpToDate = a.keepUpToDate,
            h.userContactDetails = a.userContactDetails,
            c.invoke({
                service: d.setImportantInformation,
                callback: e,
                fail: f,
                data: h,
                idLoader: "loaderGOEShere",
                bigLoader: !0
            }),
            g.promise
        }
        ,
        e.getInformationToShow = function() {
            function a(a) {
                f.resolve(a)
            }
            function e(a) {
                f.reject(a)
            }
            var f = b.defer()
              , g = {};
            return g.isMock = "true",
            c.invoke({
                service: d.getInformationToShow,
                callback: a,
                fail: e,
                data: g,
                idLoader: "loaderGOEShere",
                bigLoader: !0
            }),
            f.promise
        }
        ,
        e
    }
    ])
}(),
function() {
    "use strict";
    angular.module("App.captureImportantInformation").config(["$stateProvider", function(a) {
        a.state("captureImportantInformation", {
            url: "/captureImportantInformation",
            templateUrl: "/spasR46hfback/credentialsPublic/components/credentials-public/log-on/captureImportantInformation/capture-important-information-tpl.html",
            controller: "captureImportantInformationController"
        })
    }
    ])
}(),
angular.module("App.captureImportantInformation.templates", ["/spasR46hfback/credentialsPublic/components/credentials-public/log-on/captureImportantInformation/capture-important-information-tpl.html"]),
angular.module("/spasR46hfback/credentialsPublic/components/credentials-public/log-on/captureImportantInformation/capture-important-information-tpl.html", []).run(["$templateCache", function(a) {
    "use strict";
    a.put("/spasR46hfback/credentialsPublic/components/credentials-public/log-on/captureImportantInformation/capture-important-information-tpl.html", '<div class="row"><div class="col-xs-12"><h1 translate="RETAIL_CREDENTIALS_PUBLIC_LOGON_CAPTUREIMPORTANTINFORMATION_TITLE"></h1></div></div><div class="row"><form method="POST" name="importantInfoForm"><proteo-ui-panel class="col-xs-12"><div class="row"><div class="col-xs-12"><h2 translate="RETAIL_CREDENTIALS_PUBLIC_LOGON_CAPTUREIMPORTANTINFORMATION_TERMSANDCONDITIONS_TITLE"></h2></div><div class="col-xs-12"><proteo-ui-text translate="RETAIL_CREDENTIALS_PUBLIC_LOGON_CAPTUREIMPORTANTINFORMATION_TERMSANDCONDITIONS_TEXT"></proteo-ui-text></div><div class="col-xs-12 sm-margin-top"><proteo-ui-link><proteo-ui-icon icon="next"></proteo-ui-icon><proteo-ui-text translate="RETAIL_CREDENTIALS_PUBLIC_LOGON_CAPTUREIMPORTANTINFORMATION_TERMSANDCONDITIONS_TITLE"></proteo-ui-text></proteo-ui-link><proteo-ui-text class="md-margin-left" translate="RETAIL_CREDENTIALS_PUBLIC_LOGON_CAPTUREIMPORTANTINFORMATION_TERMSANDCONDITIONS_RECOMEND"></proteo-ui-text></div><div class="col-xs-12 sm-margin-top sm-margin-bottom"><div class="row"><proteo-ui-check-box check-box-id="captureImmInfoTermsAndConditions" value="model.acceptTermsAndConditions" output="model.acceptTermsAndConditions" validation-required="true"><proteo-ui-text class="text-bold" translate="RETAIL_CREDENTIALS_PUBLIC_LOGON_CAPTUREIMPORTANTINFORMATION_TERMSANDCONDITIONS_READTERMS"></proteo-ui-text></proteo-ui-check-box></div></div></div></proteo-ui-panel><proteo-ui-panel class="col-xs-12" ng-show="showPanels.showContactDetails"><div class="row"><div class="col-xs-12"><h2 ng-show="!newContactDetails" translate="RETAIL_CREDENTIALS_PUBLIC_LOGON_CAPTUREIMPORTANTINFORMATION_CONTACTDETAILS_TITLE"></h2><h2 ng-show="newContactDetails" translate="RETAIL_CREDENTIALS_PUBLIC_LOGON_CAPTUREIMPORTANTINFORMATION_CONTACTDETAILS_NODETAILSTITLE"></h2></div><div class="col-xs-12"><proteo-ui-text ng-show="!newContactDetails" translate="RETAIL_CREDENTIALS_PUBLIC_LOGON_CAPTUREIMPORTANTINFORMATION_CONTACTDETAILS_TEXT1"></proteo-ui-text><proteo-ui-text ng-show="newContactDetails" translate="RETAIL_CREDENTIALS_PUBLIC_LOGON_CAPTUREIMPORTANTINFORMATION_CONTACTDETAILS_NODETAILSTEXT1"></proteo-ui-text></div><div class="col-xs-12 sm-margin-top"><proteo-ui-text ng-show="!newContactDetails" translate="RETAIL_CREDENTIALS_PUBLIC_LOGON_CAPTUREIMPORTANTINFORMATION_CONTACTDETAILS_TEXT2"></proteo-ui-text><proteo-ui-text ng-show="newContactDetails" translate="RETAIL_CREDENTIALS_PUBLIC_LOGON_CAPTUREIMPORTANTINFORMATION_CONTACTDETAILS_NODETAILSTEXT2"></proteo-ui-text></div><div class="col-xs-12"><div class="row" ng-class="{\'error md-padding-bottom\': importantInfoForm.homePhoneNumber.$invalid && importantInfoForm.$submitted}"><div class="col-xs-12 lg-margin-top"><label class="label-std text-bold" for="changePhoneNumberHome" translate="RETAIL_CREDENTIALS_PUBLIC_COMMON_HOME_COLON"></label><label ng-show="newContactDetails" class="label-std sm-padding-left" translate="RETAIL_CREDENTIALS_PUBLIC_LOGON_CAPTUREIMPORTANTINFORMATION_CONTACTDETAILS_EXAMPLE"></label><div class="row"><div class="col-xs-12 col-sm-2 form-group" ng-class="{\'form-group has-error has-feedback\' :  importantInfoForm.homePhoneNumber.$invalid && (importantInfoForm.homePhoneNumber.$touched || importantInfoForm.$submitted)}"><proteo-ui-input id="changePhoneNumberHome" name="homePhoneNumber" ng-model="model.homePhoneNumber" ng-required="!model.mobilePhoneNumber && !model.workPhoneNumber"></proteo-ui-input></div><div class="col-xs-12 col-sm-4 lg-padding-left md-margin-bottom" id="erroremailAddressID" ng-show="importantInfoForm.homePhoneNumber.$invalid && (importantInfoForm.homePhoneNumber.$touched || importantInfoForm.$submitted)"><proteo-ui-icon icon-bg="red" icon="alert"></proteo-ui-icon><proteo-ui-text class="text-bold" ng-show="importantInfoForm.homePhoneNumber.$error.required" translate="RETAIL_CREDENTIALS_PUBLIC_COMMON_ERROR_ENTERVALUE"></proteo-ui-text></div></div></div></div><div class="row" ng-class="{\'error md-padding-bottom\': importantInfoForm.mobilePhoneNumber.$invalid && importantInfoForm.$submitted}"><div class="col-xs-12 md-margin-top"><label class="label-std text-bold" for="changePhoneNumberMobile" translate="RETAIL_CREDENTIALS_PUBLIC_COMMON_MOBILE_COLON"></label><div class="row"><div class="col-xs-12 col-sm-2 form-group" ng-class="{\'form-group has-error has-feedback\' :  importantInfoForm.mobilePhoneNumber.$invalid && (importantInfoForm.mobilePhoneNumber.$touched || importantInfoForm.$submitted)}"><proteo-ui-input id="changePhoneNumberMobile" name="mobilePhoneNumber" ng-model="model.mobilePhoneNumber" ng-required="!model.homePhoneNumber && !model.workPhoneNumber"></proteo-ui-input></div><div class="col-xs-12 col-sm-4 lg-padding-left md-margin-bottom" id="erroremailAddressID" ng-show="importantInfoForm.mobilePhoneNumber.$invalid && (importantInfoForm.mobilePhoneNumber.$touched || importantInfoForm.$submitted)"><proteo-ui-icon icon-bg="red" icon="alert"></proteo-ui-icon><proteo-ui-text class="text-bold" ng-show="importantInfoForm.mobilePhoneNumber.$error.required" translate="RETAIL_CREDENTIALS_PUBLIC_COMMON_ERROR_ENTERVALUE"></proteo-ui-text></div></div></div></div><div class="row" ng-class="{\'error md-padding-bottom\': importantInfoForm.workPhoneNumber.$invalid && importantInfoForm.$submitted}"><div class="col-xs-12 md-margin-top md-margin-bottom"><label class="label-std text-bold" for="changePhoneNumberWork" translate="RETAIL_CREDENTIALS_PUBLIC_COMMON_WORK_COLON"></label><div class="row"><div class="col-xs-12 col-sm-2 form-group"><proteo-ui-input id="changePhoneNumberWork" name="workPhoneNumber" ng-model="model.workPhoneNumber" ng-required="!model.mobilePhoneNumber && !model.homePhoneNumber"></proteo-ui-input></div><div class="col-xs-12 col-sm-2"><div class="input-group no-padding-left"><span class="input-group-addon"><label class="label-std text-bold" for="changePhoneNumberWorkExt" translate="RETAIL_CREDENTIALS_PUBLIC_COMMON_WORK_EXTENTION"></label></span><proteo-ui-input id="changePhoneworkExtensionNumber" name="workExtensionNumber" ng-model="model.workExtensionNumber"></proteo-ui-input></div></div></div></div></div></div></div></proteo-ui-panel><proteo-ui-panel class="col-xs-12" ng-show="showPanels.showMarketingConsent"><div class="row"><div class="col-xs-12"><h2 translate="RETAIL_CREDENTIALS_PUBLIC_LOGON_CAPTUREIMPORTANTINFORMATION_MARKETINGCONSENT_TITLE"></h2></div><div class="col-xs-12"><proteo-ui-text translate="RETAIL_CREDENTIALS_PUBLIC_LOGON_CAPTUREIMPORTANTINFORMATION_MARKETINGCONSENT_TEXT1"></proteo-ui-text></div><div class="col-xs-12 sm-margin-top"><proteo-ui-text translate="RETAIL_CREDENTIALS_PUBLIC_LOGON_CAPTUREIMPORTANTINFORMATION_MARKETINGCONSENT_TEXT2"></proteo-ui-text></div><div class="col-xs-12 no-margin-padding-radios"><proteo-ui-radio-button group-name="radioMarketing" output="model.receiveMarketingEmails" radio-id="yesMarketingId" value="yes" validation-required="true"><proteo-ui-text paragraph="true" translate="RETAIL_CREDENTIALS_PUBLIC_COMMON_YES"></proteo-ui-text></proteo-ui-radio-button><proteo-ui-radio-button group-name="radioMarketing" output="model.receiveMarketingEmails" radio-id="noMarketingId" value="no" validation-required="true"><proteo-ui-text paragraph="true" translate="RETAIL_CREDENTIALS_PUBLIC_COMMON_NO"></proteo-ui-text></proteo-ui-radio-button></div></div></proteo-ui-panel><proteo-ui-panel class="col-xs-12" ng-show="showPanels.showKeepUpToDate"><div class="row"><div class="col-xs-12"><h2 translate="RETAIL_CREDENTIALS_PUBLIC_LOGON_CAPTUREIMPORTANTINFORMATION_KEEPUPTODATE_TITLE"></h2></div><div class="col-xs-12"><proteo-ui-text translate="RETAIL_CREDENTIALS_PUBLIC_LOGON_CAPTUREIMPORTANTINFORMATION_KEEPUPTODATE_TEXT1"></proteo-ui-text></div><div class="col-xs-12 sm-margin-top"><proteo-ui-text translate="RETAIL_CREDENTIALS_PUBLIC_LOGON_CAPTUREIMPORTANTINFORMATION_KEEPUPTODATE_TEXT2"></proteo-ui-text></div><div class="col-xs-12 no-margin-padding-radios"><proteo-ui-radio-button group-name="radio" output="model.keepUpToDate" radio-id="yesId" value="yes" validation-required="true"><proteo-ui-text paragraph="true" translate="RETAIL_CREDENTIALS_PUBLIC_COMMON_YES"></proteo-ui-text></proteo-ui-radio-button><proteo-ui-radio-button group-name="radio" output="model.keepUpToDate" radio-id="noId" value="no" validation-required="true"><proteo-ui-text paragraph="true" translate="RETAIL_CREDENTIALS_PUBLIC_COMMON_NO"></proteo-ui-text></proteo-ui-radio-button></div><div class="col-xs-12 col-sm-4 md-margin-top" ng-class="{\'error md-padding-bottom\': importantInfoForm.emailAddress.$invalid && importantInfoForm.$submitted}"><label class="label-std text-bold" for="emailAddressId" translate="RETAIL_CREDENTIALS_PUBLIC_LOGON_CAPTUREIMPORTANTINFORMATION_KEEPUPTODATE_YOUREMAIL"></label><proteo-ui-input id="emailAddressId" name="emailAddress" ng-model="model.emailAddress" required></proteo-ui-input></div><div class="col-xs-12 col-sm-4 lg-padding-left md-margin-bottom" id="errorNewPassworConfdID" ng-show="importantInfoForm.emailAddress.$invalid && (importantInfoForm.emailAddress.$touched || importantInfoForm.$submitted)"><proteo-ui-icon icon-bg="red" icon="alert"></proteo-ui-icon><proteo-ui-text class="text-bold" ng-show="importantInfoForm.emailAddress.$error.required" translate="RETAIL_CREDENTIALS_PUBLIC_COMMON_ERROR_ENTERVALUE"></proteo-ui-text></div></div></proteo-ui-panel></form></div><div class="row"><proteo-ui-thematic-break></proteo-ui-thematic-break><div class="col-xs-12"><proteo-ui-link class="pull-left" ng-click="cancel()"><proteo-ui-icon icon="cancel"></proteo-ui-icon><proteo-ui-text translate="RETAIL_CREDENTIALS_PUBLIC_COMMON_CANCEL"></proteo-ui-text></proteo-ui-link></div><div class="col-xs-12"><proteo-ui-button class="pull-right" ng-click="submit(importantInfoForm)" ng-disabled="importantInfoForm.$invalid"><proteo-ui-text translate="RETAIL_CREDENTIALS_PUBLIC_COMMON_CONTINUE"></proteo-ui-text></proteo-ui-button></div></div>');
}
]),
function() {
    "use strict";
    angular.module("App.captureMemorableInformation").controller("captureMemorableInformationController", ["$scope", "$state", "$stateParams", "$timeout", "$filter", "logOnEnrollmentFactory", "captureMemorableInformationService", "tsbJournalService", "logOnFactory", "genericFunctions", "DataLayerProvider", function(a, b, c, d, e, f, g, h, i, j, k) {
        function l() {
            c.channel ? (m(),
            i.resetTimeout(),
            i.timeoutPromise = d(function() {
                a.modalTimeOutFTL.open()
            }, 3e5),
            k.updateScaDataLayer("captureMemorableInformation"),
            JSM._dataLayerSPAReady()) : b.go("login")
        }
        function m() {
            a.model = angular.copy(r)
        }
        function n(b) {
            a.exceptionLiteral = null,
            a.buttonDisabled = !0;
            var d = {
                memorableInfo: angular.copy(a.model.memorableInformation),
                firstLoginCode: i.getFirstLoginCode(),
                authId: c.data.authId,
                server: i.getServer(),
                username: i.getUserId(),
                tokenId: i.getTokenId()
            };
            g.setMemorableInformationSca(d, b).then(function(b) {
                h.newOperation(),
                a.exceptionLiteral = null,
                i.setServerFromResponse(b),
                f.enrollmentHandler(b, a, f.CAPTURE_MEMORABLE_SCREEN)
            }, function(b) {
                a.buttonDisabled = !1,
                a.model.memorableInformation = "",
                a.model.memorableInformationReentry = "";
                var c = i.getFirstLoginCode();
                1 === c ? f.enrollmentErrorHandler(b, a, f.CAPTURE_MEMORABLE_SCREEN) : 2 === c || 3 === c ? f.enrollmentErrorHandler(b, a, f.CAPTURE_MEMORABLE_SCREEN2) : (h.newOperation(),
                k.sendError({
                    message: q("ENROLLMENT_GLOBAL_ERROR"),
                    code: b && b.exception && b.exception.code ? b.exception.code : "",
                    type: k.errorType.ERROR_PAGE
                }),
                f.enrollmentError())
            })
        }
        function o() {
            var b = {
                acceptTermsAndConditions: a.model.acceptTermsAndConditions || !1,
                memorableInfo: angular.copy(a.model.memorableInformation),
                firstLoginCode: i.getFirstLoginCode(),
                authId: i.getAuthId(),
                server: i.getServer(),
                username: a.userId
            };
            console.log("params--", b, "$stateparams--", c),
            g.setMemorableInformation(b, "captureMemorableInformationLoaderId").then(function(b) {
                var c = "holdingList.holdingList"
                  , d = null;
                i.setServerFromResponse(b),
                b.firstLogin && (c = "documentation.registerPaperless",
                d = {
                    showTermsAndConditions: a.showTermsAndConditions
                })
            }, function(a) {
                p(a)
            })
        }
        function p(b) {
            a.serviceControl = {
                error: !0,
                message: b && b.exception && b.exception.description ? b.exception.description : null,
                defaultMessage: "COMMON_GLOBALERROR_TEXT",
                loading: !1
            }
        }
        var q = e("translate");
        a.isTipsOpen = !1,
        a.loading = !1,
        a.buttonDisabled = !1,
        a.model = null,
        a.channel = c && c.channel ? c.channel : null,
        a.username = c.data && c.data.username ? c.data.username : null,
        a.userId = c.data && c.data.userId ? c.data.userId : null,
        a.showTermsAndConditions = "branch" === a.channel ? !0 : !1,
        a.serviceControl = {
            error: !1,
            message: null,
            defaultMessage: "COMMON_GLOBALERROR_TEXT",
            loading: !1
        };
        var r = {
            memorableInformation: null,
            memorableInformationReentry: null
        };
        a.getErrorLiteral = function(a, b) {
            return a ? q(b ? a.memorableInformationNotEqual ? "RETAIL_CREDENTIALS_PUBLIC_COMMON_ERROR_MEMOINFO_EQUAL" : "RETAIL_CREDENTIALS_PUBLIC_COMMON_ERROR_ENTERVALUE" : "RETAIL_CREDENTIALS_PUBLIC_COMMON_ERROR_ENTERVALUE") : void 0
        }
        ,
        a.modalTimeOutFTL = {
            onClose: function() {
                location.reload(),
                b.go("login")
            }
        },
        a.memorableInformationValidation = function(b) {
            b.$setValidity("memorableInformationNotEqual", angular.equals(a.model.memorableInformation, a.model.memorableInformationReentry))
        }
        ,
        a.submit = function(b) {
            JSM.callbFlush(),
            console.log("Biocatch Flush"),
            b.$valid && (f.getScaMode() ? JSM.getTSID(function(a) {
                n(a)
            }) : (a.serviceControl.loading = !0,
            o()))
        }
        ,
        a.biocatchFlush = function() {
            JSM.callbFlush(),
            console.log("Biocatch Flush")
        }
        ,
        a.cancel = function() {
            h.newOperation(),
            b.go("login")
        }
        ,
        l()
    }
    ])
}(),
function() {
    "use strict";
    angular.module("App.captureMemorableInformation").factory("captureMemorableInformationService", ["$log", "$q", "proteocanalinvokerServices", "LOGIN_WEBADAPTER", function(a, b, c, d) {
        var e = {};
        return e.setMemorableInformationSca = function(a, e) {
            function f(a) {
                h.resolve(a)
            }
            function g(a) {
                h.reject(a)
            }
            var h = b.defer()
              , i = {
                "HEADER.USER_PROCEDENCE": "WR01",
                "HEADER.SERVICE_SCOPE": "PUBLIC"
            }
              , j = {};
            return angular.extend(j, a),
            c.invoke({
                service: d.setMemorableInformationSca,
                callback: f,
                headers: i,
                fail: g,
                data: j,
                idLoader: e
            }),
            h.promise
        }
        ,
        e.setMemorableInformation = function(a, e) {
            function f(a) {
                h.resolve(a)
            }
            function g(a) {
                h.reject(a)
            }
            var h = b.defer()
              , i = {
                "HEADER.USER_PROCEDENCE": "WR01",
                "HEADER.SERVICE_SCOPE": "PUBLIC"
            }
              , j = {};
            return angular.extend(j, a),
            c.invoke({
                service: d.setMemorableInformation,
                callback: f,
                headers: i,
                fail: g,
                data: j,
                idLoader: e
            }),
            h.promise
        }
        ,
        e
    }
    ])
}(),
function() {
    "use strict";
    angular.module("App.captureMemorableInformation").config(["$stateProvider", function(a) {
        a.state("captureMemorableInformation", {
            url: "/captureMemorableInformation",
            templateUrl: "/spasR46hfback/credentialsPublic/components/credentials-public/log-on/captureMemorableInformation/capture-memorable-information-tpl.html",
            controller: "captureMemorableInformationController",
            params: {
                data: null,
                channel: null
            }
        })
    }
    ])
}(),
angular.module("App.captureMemorableInformation.templates", ["/spasR46hfback/credentialsPublic/components/credentials-public/log-on/captureMemorableInformation/capture-memorable-information-tpl.html"]),
angular.module("/spasR46hfback/credentialsPublic/components/credentials-public/log-on/captureMemorableInformation/capture-memorable-information-tpl.html", []).run(["$templateCache", function(a) {
    "use strict";
    a.put("/spasR46hfback/credentialsPublic/components/credentials-public/log-on/captureMemorableInformation/capture-memorable-information-tpl.html", '<div class="row wrap-capture-memorable-information"><div class="col-xs-12"><div class="col-xs-12 lg-padding-left md-margin-bottom timeOutError" ng-if="serviceControl.error"><proteo-ui-icon class="sm-margin-right" icon-bg="red" icon="alert"></proteo-ui-icon><proteo-ui-text translate="{{serviceControl.message || serviceControl.defaultMessage}}"></proteo-ui-text></div><h1 class="col-xs-12 md-margin-bottom no-padding" translate="RETAIL_CREDENTIALS_PUBLIC_LOGON_CAPMEMORABLEINFORMATION_TITLE"></h1><div class="col-xs-12 no-padding-left md-margin-bottom timeOutError" id="errorException" ng-if="exceptionLiteral"><proteo-ui-icon icon-bg="red" icon="alert"></proteo-ui-icon><proteo-ui-text class="text-bold" ng-bind="exceptionLiteral"></proteo-ui-text></div><proteo-ui-text paragraph translate="RETAIL_CREDENTIALS_PUBLIC_LOGON_CAPMEMORABLEINFORMATION_MSG1"></proteo-ui-text><h3 translate="RETAIL_CREDENTIALS_PUBLIC_LOGON_CAPMEMORABLEINFORMATION_SUBTITLE"></h3><ul class="unordered-list lg-padding-left"><li class="list-element"><proteo-ui-text translate="RETAIL_CREDENTIALS_PUBLIC_LOGON_CAPMEMORABLEINFORMATION_LIST1"></proteo-ui-text><li class="list-element"><proteo-ui-text translate="RETAIL_CREDENTIALS_PUBLIC_LOGON_CAPMEMORABLEINFORMATION_LIST2"></proteo-ui-text><li class="list-element"><proteo-ui-text translate="RETAIL_CREDENTIALS_PUBLIC_LOGON_CAPMEMORABLEINFORMATION_LIST3"></proteo-ui-text></ul><proteo-ui-text paragraph translate="RETAIL_CREDENTIALS_PUBLIC_LOGON_CAPMEMORABLEINFORMATION_MSG2"></proteo-ui-text><h3 translate="RETAIL_CREDENTIALS_PUBLIC_LOGON_CAPMEMORABLEINFORMATION_SUBTITLE2"></h3><proteo-ui-simple-collapse-title label="Tips for a good memorable information" is-collapsed="isTipsOpen"><proteo-ui-text translate="RETAIL_CREDENTIALS_PUBLIC_LOGON_CAPMEMORABLEINFORMATION_TIP_TITLE"></proteo-ui-text></proteo-ui-simple-collapse-title><proteo-ui-simple-collapse is-collapsed="isTipsOpen"><div class="md-margin-top"><proteo-ui-text translate="RETAIL_CREDENTIALS_PUBLIC_LOGON_CAPMEMORABLEINFORMATION_TIP_SUBTITLE" paragraph class="text-bold"></proteo-ui-text><ul class="unordered-list lg-padding-left"><li><proteo-ui-text translate="RETAIL_CREDENTIALS_PUBLIC_LOGON_CAPMEMORABLEINFORMATION_TIP_LIST1"></proteo-ui-text><li><proteo-ui-text translate="RETAIL_CREDENTIALS_PUBLIC_LOGON_CAPMEMORABLEINFORMATION_TIP_LIST2"></proteo-ui-text></ul><proteo-ui-text paragraph translate="RETAIL_CREDENTIALS_PUBLIC_LOGON_CAPMEMORABLEINFORMATION_TIP_MSG"></proteo-ui-text></div></proteo-ui-simple-collapse><div class="clearfix"></div><form method="POST" ng-submit="submit(captureMemorableInformationForm)" name="captureMemorableInformationForm" novalidate><proteo-ui-form-group><label for="memoriableInformationField"><span class="text-bold sm-margin-right" translate="RETAIL_CREDENTIALS_PUBLIC_LOGON_CAPMEMORABLEINFORMATION_ENTER_MI"></span> <small translate="RETAIL_CREDENTIALS_PUBLIC_LOGON_CAPMEMORABLEINFORMATION_ENTER_MI_TIP"></small></label><proteo-ui-form-control><proteo-ui-input id="memoriableInformationField" name="memorableInformation" ng-change="memorableInformationValidation(captureMemorableInformationForm.memorableInformationReentry)" ng-pattern="/(?=(.*[0-9])+)(?=(.*[a-zA-Z]))[0-9a-zA-Z]*/" ng-minlength="6" maxlength="15" ng-maxlength="15" ng-model="model.memorableInformation" type="password" required></proteo-ui-input></proteo-ui-form-control><proteo-ui-form-error><proteo-ui-text class="form-error">{{getErrorLiteral(captureMemorableInformationForm.memorableInformation.$error, false)}}</proteo-ui-text></proteo-ui-form-error></proteo-ui-form-group><proteo-ui-form-group><label for="memoriableInformationReentryField"><span class="text-bold sm-margin-right" translate="RETAIL_CREDENTIALS_PUBLIC_LOGON_CAPMEMORABLEINFORMATION_REENTER_MI"></span></label><proteo-ui-form-control><proteo-ui-input id="memoriableInformationReentryField" name="memorableInformationReentry" ng-change="memorableInformationValidation(captureMemorableInformationForm.memorableInformationReentry)" ng-pattern="/(?=(.*[0-9])+)(?=(.*[a-zA-Z]))[0-9a-zA-Z]*/" ng-minlength="6" maxlength="15" ng-maxlength="15" ng-model="model.memorableInformationReentry" type="password" required></proteo-ui-input></proteo-ui-form-control><proteo-ui-form-error><proteo-ui-text class="form-error">{{getErrorLiteral(captureMemorableInformationForm.memorableInformationReentry.$error, true)}}</proteo-ui-text></proteo-ui-form-error></proteo-ui-form-group><div class="row"><proteo-ui-thematic-break></proteo-ui-thematic-break><div class="col-xs-12 md-margin-top"><div class="row"><div class="col-xs-12 col-sm-6"><proteo-ui-link class="pull-left" ng-click="cancel()"><proteo-ui-icon icon="cancel"></proteo-ui-icon><proteo-ui-text translate="RETAIL_CREDENTIALS_PUBLIC_COMMON_CANCEL"></proteo-ui-text></proteo-ui-link></div><div class="col-xs-12 col-sm-6"><proteo-ui-button id="captureMemorableInformationLoaderId" class="pull-right" type="submit" ng-disabled="buttonDisabled" ng-mouseover="biocatchFlush()"><proteo-ui-text translate="RETAIL_CREDENTIALS_PUBLIC_COMMON_CONTINUE"></proteo-ui-text></proteo-ui-button></div></div></div></div></form></div></div><div ng-include="\'/spasR46hfback/credentialsPublic/components/credentials-public/log-on/sca-modals/sca-modals-tpl.html\'"></div>')
}
]),
function() {
    "use strict";
    angular.module("App.capturePassword").controller("capturePasswordController", ["$scope", "$state", "$stateParams", "$filter", "capturePasswordService", "logOnFactory", "tsbJournalService", "logOnEnrollmentFactory", "loginService", "DataLayerProvider", function(a, b, c, d, e, f, g, h, i, j) {
        function k() {
            a.scaMode ? c.data && c.data.authId && c.data.userId ? (j.updateScaDataLayer("capturePassword"),
            JSM._dataLayerSPAReady()) : b.go("login") : (j.updateScaDataLayer("capturePassword"),
            JSM._dataLayerSPAReady())
        }
        function l(d) {
            a.buttonDisabled = !0,
            a.username = c.data.userId || null;
            var h = {
                username: f.getUserId(),
                authId: c.data.authId,
                password: a.data.password,
                server: f.getServer(),
                firstTimeLogin: c.data.firstTimeLogin
            };
            e.validatePassword(h, d).then(function(c) {
                a.exceptionLiteral = null,
                f.setServerFromResponse(c);
                var d = null;
                switch (f.getFirstLoginCode()) {
                case 1:
                    d = "enterActivationCode";
                    break;
                case 2:
                    d = "scaPhoneOTP"
                }
                b.go(d, {
                    data: h,
                    channel: a.channel
                })
            }, function(b) {
                g.newOperation(),
                a.buttonDisabled = !1,
                a.data.password = "";
                var c = angular.isDefined(b) && angular.isDefined(b.exception) && angular.isDefined(b.exception.description) ? b.exception.code + ": " + b.exception.description : n("COMMON_MG_SYSTEM_ERROR");
                a.exceptionLiteral = c,
                b.exception && "408" === b.exception.code && (a.exceptionLiteral = n("COMMON_TIMEOUT_ERROR"),
                $(".globalErrorClass").addClass("timeOutError marginBottom")),
                j.sendError({
                    message: c,
                    code: b && b.exception && b.exception.code ? b.exception.code : "",
                    type: j.errorType.WARNING
                })
            })
        }
        function m() {
            h.setScaMode(!1),
            a.buttonDisabled = !0,
            a.exceptionLiteral = null,
            a.username = c.data.userId || null;
            var d = {
                login: a.username,
                password: a.data.password,
                server: f.getServer()
            }
              , e = null
              , g = null
              , j = "";
            i.login(d).then(function(c) {
                if (c.isSuccessful)
                    if (f.setAuthId(c.authId),
                    f.setServerFromResponse(c),
                    g = {
                        authId: c.authId,
                        server: f.getServer()
                    },
                    j = "web",
                    c.firstLogin)
                        switch (f.setFirstLoginCode(c.firstLoginCode),
                        c.firstLoginCode) {
                        case 1:
                            e = "enterActivationCode",
                            angular.extend(g, {
                                firstTimeLogin: !0,
                                userId: a.username
                            });
                            break;
                        case 2:
                            e = "captureMemorableInformation",
                            angular.extend(g, {
                                firstTimeLogin: !0,
                                userId: a.username
                            });
                            break;
                        case 3:
                            e = "changePassword",
                            j = "branch",
                            angular.extend(g, {
                                firstTimeLogin: !0,
                                userId: a.username
                            })
                        }
                    else
                        e = "memorableInformation",
                        angular.extend(g, {
                            memorableInfoPositions: c.memorableInfoPositions,
                            userId: a.username
                        }),
                        h.setUserId(a.username);
                h.setData("MI_DATA", {
                    data: g,
                    channel: j
                }),
                b.go(e, {
                    data: g,
                    channel: j
                })
            }, function(b) {
                b.exception && ("9210358" === b.exception.code ? a.exceptionLiteral = angular.isDefined(b.exception) ? b.exception.code + ": " + b.exception.description : n("RETAIL_CREDENTIALS_PUBLIC_LOGON_LOGIN_LOGINERROR") : "ERR244" === b.exception.code ? (a.exceptionLiteral = angular.isDefined(b.exception) ? b.exception.code + ": " + b.exception.description : n("COMMON_MG_SYSTEM_ERROR"),
                a.fraudError = !0) : "408" === b.exception.code ? (a.exceptionLiteral = n("COMMON_TIMEOUT_ERROR"),
                $(".globalErrorClass").addClass("timeOutError marginBottom")) : a.exceptionLiteral = angular.isDefined(b.exception) ? b.exception.description : n("RETAIL_CREDENTIALS_PUBLIC_LOGON_LOGIN_LOGINERROR")),
                a.buttonDisabled = !1
            })
        }
        var n = d("translate");
        a.buttonDisabled = !1,
        a.channel = c.channel || null,
        a.scaMode = h.scaMode,
        a.exceptionLiteral = null,
        a.data = {},
        a.submit = function(b) {
            a.exceptionLiteral = null,
            b.$valid ? (a.buttonDisabled = !0,
            a.scaMode ? JSM.getTSID(function(a) {
                l(a)
            }) : m()) : (a.data.password = "",
            a.buttonDisabled = !1)
        }
        ,
        a.cancel = function() {
            g.newOperation(),
            b.go("login")
        }
        ,
        k()
    }
    ])
}(),
function() {
    "use strict";
    angular.module("App.capturePassword").factory("capturePasswordService", ["$q", "proteocanalinvokerServices", "LOGIN_WEBADAPTER", "$log", function(a, b, c, d) {
        var e = {};
        return e.callService = function(c, e, f) {
            function g(a) {
                i.resolve(a)
            }
            function h(a) {
                i.reject(a)
            }
            var i = a.defer();
            return b.error(function(a) {
                d.debug("Exception in capturePasswordService", a),
                i.reject(a)
            }),
            b.invoke({
                service: e,
                callback: g,
                fail: h,
                data: c,
                headers: f
            }),
            i.promise
        }
        ,
        e.validatePassword = function(a, b) {
            var d = c.validatePassword
              , f = {
                "HEADER.USER_AGENT": "userAgent",
                "HEADER.STARTDATETIME": 123,
                "HEADER.ALIAS": "alias",
                "HEADER.INSCRIPTION_KEY": "inscriptionKey",
                "HEADER.USER.PROCEDENCE": "WR01",
                "HEADER.FD_SESSION_ID1": b,
                "HEADER.SERVICE_SCOPE": "PUBLIC"
            };
            return e.callService(a, d, f)
        }
        ,
        e
    }
    ])
}(),
function() {
    "use strict";
    angular.module("App.capturePassword").config(["$stateProvider", function(a) {
        a.state("capturePassword", {
            url: "/capturePassword",
            templateUrl: "/spasR46hfback/credentialsPublic/components/credentials-public/log-on/capturePassword/capture-password-tpl.html",
            controller: "capturePasswordController",
            params: {
                data: null,
                channel: null
            }
        })
    }
    ])
}(),
angular.module("App.capturePassword.templates", ["/spasR46hfback/credentialsPublic/components/credentials-public/log-on/capturePassword/capture-password-tpl.html"]),
angular.module("/spasR46hfback/credentialsPublic/components/credentials-public/log-on/capturePassword/capture-password-tpl.html", []).run(["$templateCache", function(a) {
    "use strict";
    a.put("/spasR46hfback/credentialsPublic/components/credentials-public/log-on/capturePassword/capture-password-tpl.html", '<div class="row"><div class="col-xs-12"><h1 translate="RETAIL_CREDENTIALS_PUBLIC_CAPTUREPASSWORD_TITLE"></h1></div><div class="col-xs-12 no-padding-left globalErrorClass"><div id="errorException" ng-if="exceptionLiteral"><proteo-ui-icon icon-bg="red" icon="alert"></proteo-ui-icon><proteo-ui-text class="text-bold" translate="{{exceptionLiteral}}"></proteo-ui-text></div></div><div class="col-xs-12 md-padding-top md-padding-bottom"><proteo-ui-text class="text" translate="RETAIL_CREDENTIALS_PUBLIC_CAPTUREPASSWORD_TEXT1"></proteo-ui-text><proteo-ui-link state="enterCustomerIdData"><span translate="RETAIL_CREDENTIALS_PUBLIC_LOGON_LOGIN_FORGOTTENPASS"></span></proteo-ui-link><proteo-ui-text class="text" translate="RETAIL_CREDENTIALS_PUBLIC_LOGON_LOGIN_ENTERPASSWORD2"></proteo-ui-text></div><div class="col-xs-12"><form name="capturePasswordForm" method="POST"><div class="col-xs-12 xs-margin-top no-padding md-margin-bottom"><div class="row" ng-class="{\'error no-padding\' : capturePasswordForm.password.$invalid && (capturePasswordForm.password.$touched || capturePasswordForm.$submitted)}"><proteo-ui-text class="col-xs-12 xs-margin-top text-bold" translate="RETAIL_CREDENTIALS_PUBLIC_COMMON_PASSWORD"></proteo-ui-text><div class="col-xs-12 col-md-4 xs-margin-top xs-margin-bottom" id="password" ng-class="{\'has-error form-group has-feedback\' : capturePasswordForm.password.$invalid && (capturePasswordForm.password.$touched || capturePasswordForm.$submitted)}"><div class="input-group"><proteo-ui-input name="password" ng-maxlength="15" ng-minlength="6" ng-pattern="/^((?!.*[\\s])(?=.*[a-zA-Z0-9:$_@.&+=/#?:\'%()]).{1,})/" ng-model="data.password" required type="password"></proteo-ui-input><proteo-ui-icon ng-show="(capturePasswordForm.password.$touched || capturePasswordForm.$submitted) && capturePasswordForm.password.$invalid" class="input-group-addon" icon="alert"></proteo-ui-icon><proteo-ui-icon ng-show="capturePasswordForm.password.$valid && (capturePasswordForm.password.$touched || capturePasswordForm.$submitted)" class="input-group-addon" icon="check"></proteo-ui-icon></div></div></div><div class="has-error" id="errorPasswordID" ng-show="capturePasswordForm.password.$invalid && (capturePasswordForm.password.$touched || capturePasswordForm.$submitted)"><proteo-ui-text class="form-error" ng-show="capturePasswordForm.password.$error.required" translate="RETAIL_CREDENTIALS_PUBLIC_COMMON_ERROR_ENTERVALUE"></proteo-ui-text><proteo-ui-text class="form-error" ng-show="capturePasswordForm.password.$error.pattern" translate="RETAIL_CREDENTIALS_PUBLIC_COMMON_ERROR_FORMAT"></proteo-ui-text><proteo-ui-text class="form-error" ng-show="capturePasswordForm.password.$error.maxlength" translate="RETAIL_CREDENTIALS_PUBLIC_COMMON_ERROR_LENGTH"></proteo-ui-text><proteo-ui-text class="form-error" ng-show="capturePasswordForm.password.$error.minlength" translate="RETAIL_CREDENTIALS_PUBLIC_COMMON_ERROR_MINLENGTH"></proteo-ui-text></div></div><div class="col-xs-12 borderless-panel md-padding-top md-padding-bottom"><proteo-ui-link class="text" state="enterCustomerIdData"><proteo-ui-icon icon="next"></proteo-ui-icon><span translate="RETAIL_CREDENTIALS_PUBLIC_LOGON_LOGIN_FORGOTTENPASS"></span></proteo-ui-link></div><proteo-ui-thematic-break class="row"></proteo-ui-thematic-break><proteo-ui-link ng-click="cancel()"><proteo-ui-text><proteo-ui-icon icon="cancel"></proteo-ui-icon><span translate="RETAIL_CREDENTIALS_COMMON_CANCEL"></span></proteo-ui-text></proteo-ui-link><proteo-ui-button class="pull-right" type="submit" ng-click="submit(capturePasswordForm)" ng-disabled="buttonDisabled"><proteo-ui-text translate="RETAIL_CREDENTIALS_COMMON_CONTINUE"></proteo-ui-text></proteo-ui-button></form></div></div>')
}
]),
function() {
    "use strict";
    angular.module("App.capturePasswordAndOTP").controller("capturePasswordAndOTPController", ["$scope", "$state", "$stateParams", "LOGIN_WEBADAPTER", "$filter", "ConsultiveProvider", "tsbJournalService", "logOnEnrollmentFactory", "logOnFactory", "scaEnrollmentFunctionsFactory", "DataLayerProvider", function(a, b, c, d, e, f, g, h, i, j, k) {
        function l() {
            m(),
            a.FTLerror = !0,
            k.updateScaDataLayer("enterPasswordOtp"),
            JSM._dataLayerSPAReady()
        }
        function m() {
            a.operationData = {
                headers: angular.extend({}, j.getHeader(), i.getDefaultHeader()),
                getPhones: d.getPhonesLogin,
                params: {
                    authId: i.getAuthId(),
                    userId: i.getUserId()
                }
            }
        }
        var n = e("translate");
        a.buttonDisabled = !1,
        a.model = null,
        a.errorMessage = null,
        a.globalError = !1,
        a.continueButton = !1,
        a.otpComplete = !1,
        a.stateParams = c && c.data ? c.data : null,
        a.channel = c && c.channel ? c.channel : null,
        a.username = c.data && c.data.userId ? c.data.userId : null,
        a.consultive = {
            tcSelected: f.tcSelected
        },
        a.exceptionLiteral = null,
        a.userAuthenticated = function(c) {
            a.buttonDisabled = !0,
            a.exceptionLiteral = null,
            a.globalError = !1,
            a.otpComplete = !0;
            var d = "changePassword"
              , e = {
                username: i.getUserId(),
                server: i.getServer(),
                authId: a.stateParams.authId,
                temporaryPasswordLogin: !0
            };
            h.setCookie(c),
            b.go(d, {
                data: e,
                channel: a.channel
            })
        }
        ,
        a.invalidAuthentication = function(b) {
            a.buttonDisabled = !1,
            a.data.password = "",
            a.openAM = !1,
            angular.isDefined(b) && b.exception && "408" === b.exception.code && (a.errorMessage = n("COMMON_TIMEOUT_ERROR"),
            $(".globalErrorClass").addClass("timeOutError marginBottom marginTop padding"),
            a.openAM = !0),
            a.globalError = !0,
            angular.isDefined(b.exception.description) ? a.errorMessage = b.exception.description : a.errorMessage = void 0,
            b.exception && b.exception.code === h.ERR_OTP_NOT_MATCH_LA && (a.globalError = !1,
            h.setScaUserPiloted(!0),
            h.enrollmentErrorHandler(b, a, h.ERR_OTP_NOT_MATCH_LA)),
            angular.isDefined(b.exception.detail) && angular.isDefined(b.exception.detail.attempts) && !a.openAM && (a.globalError = !1,
            h.setScaUserPiloted(!0),
            h.enrollmentErrorHandler(b, a, h.PASSWORD_OTP_SCREEN))
        }
        ,
        a.previousStep = function() {
            a.data && a.data.password && (a.data.password = ""),
            a.globalError = !1,
            a.exceptionLiteral = !1,
            a.$broadcast("previousEvent", function() {
                b.go("login")
            })
        }
        ,
        a.showPassword = function() {
            var a = document.getElementById("tempPassword")
              , b = "password" === a.getAttribute("type") ? "text" : "password";
            a.setAttribute("type", b)
        }
        ,
        a.cancel = function() {
            g.newOperation(),
            b.go("login")
        }
        ,
        l()
    }
    ])
}(),
function() {
    "use strict";
    angular.module("App.capturePasswordAndOTP").factory("capturePasswordAndOTPService", ["$q", "proteocanalinvokerServices", "LOGIN_WEBADAPTER", function(a, b, c) {
        var d = {};
        return d.validatePasswordAndOTP = function(d) {
            function e(a) {
                g.resolve(a)
            }
            function f(a) {
                g.reject(a)
            }
            var g = a.defer()
              , h = {
                "HEADER.SERVICE_SCOPE": "PUBLIC"
            };
            return b.invoke({
                service: c.validatePasswordAndOtp,
                callback: e,
                fail: f,
                data: d,
                headers: h,
                idLoader: "validatePasswordAndOtp",
                bigLoader: !1
            }),
            g.promise
        }
        ,
        d
    }
    ])
}(),
function() {
    "use strict";
    angular.module("App.capturePasswordAndOTP").config(["$stateProvider", function(a) {
        a.state("capturePasswordAndOTP", {
            url: "/capturePasswordAndOTP",
            templateUrl: "/spasR46hfback/credentialsPublic/components/credentials-public/log-on/capturePasswordAndOTP/capture-password-and-otp-tpl.html",
            controller: "capturePasswordAndOTPController",
            params: {
                data: null,
                channel: null
            }
        })
    }
    ])
}(),
angular.module("App.capturePasswordAndOTP.templates", ["/spasR46hfback/credentialsPublic/components/credentials-public/log-on/capturePasswordAndOTP/capture-password-and-otp-tpl.html"]),
angular.module("/spasR46hfback/credentialsPublic/components/credentials-public/log-on/capturePasswordAndOTP/capture-password-and-otp-tpl.html", []).run(["$templateCache", function(a) {
    "use strict";
    a.put("/spasR46hfback/credentialsPublic/components/credentials-public/log-on/capturePasswordAndOTP/capture-password-and-otp-tpl.html", '<div class="row" ng-if="!selectedPhone"><div class="col-xs-12 md-margin-bottom"><h1 translate="RETAIL_CREDENTIALS_PUBLIC_CAPTUREPASSWORDANDOTP_TITLE"></h1></div><div sca-enrollment-otp-panel-error></div><div class="col-xs-12 error globalErrorClass timeOutError" ng-if="globalError"><div><proteo-ui-icon icon-bg="red" icon="alert"></proteo-ui-icon><proteo-ui-text ng-show="!errorMessage" translate="RETAIL_CREDENTIALS_PUBLIC_REGISTRATION_STEP3_ERROR_FORM"></proteo-ui-text><proteo-ui-text ng-show="errorMessage" translate="{{errorMessage}}"></proteo-ui-text></div></div><div class="col-xs-12 no-padding-left md-margin-bottom timeOutError" id="errorException" ng-if="exceptionLiteral"><proteo-ui-icon icon-bg="red" icon="alert"></proteo-ui-icon><proteo-ui-text class="text-bold" translate="{{exceptionLiteral}}"></proteo-ui-text></div><div class="col-xs-12 md-padding-top md-padding-bottom"><proteo-ui-text class="text-bold" translate="RETAIL_CREDENTIALS_PUBLIC_CAPTUREPASSWORD_TEXT1"></proteo-ui-text><proteo-ui-link state="registration"><span translate="RETAIL_CREDENTIALS_PUBLIC_LOGON_LOGIN_RE_REGISTER"></span></proteo-ui-link><proteo-ui-text class="text-bold" translate="RETAIL_CREDENTIALS_PUBLIC_LOGON_LOGIN_ENTERPASSWORD2"></proteo-ui-text></div></div><div class="row"><div class="col-xs-12"><form name="capturePasswordForm" method="POST" novalidate ng-show="!selectedPhone"><div class="row"><div class="col-xs-12 xs-margin-top md-margin-bottom"><div class="row" ng-class="{\'error\' : capturePasswordForm.password.$invalid && (capturePasswordForm.password.$touched || capturePasswordForm.$submitted)}"><proteo-ui-text class="col-xs-12 xs-margin-top text-bold" translate="RETAIL_CREDENTIALS_PUBLIC_COMMON_PASSWORD_TEMPORARY"></proteo-ui-text><div class="col-xs-12 col-md-6 xs-margin-top" id="password" ng-class="{\'form-group has-error has-feedback\' : capturePasswordForm.password.$invalid && (capturePasswordForm.password.$touched || capturePasswordForm.$submitted)}"><div class="input-group col-xs-12 col-md-5"><ng-transclude><proteo-ui-input name="password" ng-maxlength="15" ng-minlength="6" id="tempPassword" ng-pattern="/^((?!.*[\\s])(?=.*[a-zA-Z0-9:$_@.&+=/#?:\'%()]).{1,})/" ng-model="data.password" required type="password"></proteo-ui-input><proteo-ui-icon ng-click="showPassword()" id="eyeIcon" icon="eye" class="shift-icon input-group-addon ipadIcon"></proteo-ui-icon></ng-transclude><proteo-ui-icon ng-show="capturePasswordForm.password.$invalid && (capturePasswordForm.password.$touched || capturePasswordForm.$submitted)" class="input-group-addon" icon="alert"></proteo-ui-icon><proteo-ui-icon ng-show="capturePasswordForm.password.$valid && (capturePasswordForm.password.$touched || capturePasswordForm.$submitted)" class="input-group-addon" icon="check"></proteo-ui-icon></div></div></div><div id="errorPasswordID" class="has-error" ng-show="capturePasswordForm.password.$invalid && (capturePasswordForm.password.$touched || capturePasswordForm.$submitted)"><proteo-ui-text class="form-error" ng-show="capturePasswordForm.password.$error.required" translate="RETAIL_CREDENTIALS_PUBLIC_COMMON_ERROR_ENTERVALUE"></proteo-ui-text><proteo-ui-text class="form-error" ng-show="capturePasswordForm.password.$error.pattern" translate="RETAIL_CREDENTIALS_PUBLIC_COMMON_ERROR_FORMAT"></proteo-ui-text><proteo-ui-text class="form-error" ng-show="capturePasswordForm.password.$error.maxlength" translate="RETAIL_CREDENTIALS_PUBLIC_COMMON_ERROR_LENGTH"></proteo-ui-text><proteo-ui-text class="form-error" ng-show="capturePasswordForm.password.$error.minlength" translate="RETAIL_CREDENTIALS_PUBLIC_COMMON_ERROR_MINLENGTH"></proteo-ui-text></div></div></div></form><div class="row"><div class="col-xs-12 md-margin-bottom" ng-if="selectedPhone"><h1 translate="RETAIL_CREDENTIALS_PUBLIC_ENROLLMENT_OTP_TITLE"></h1><div sca-enrollment-otp-panel-error></div><div class="col-xs-12 error globalErrorClass timeOutError" ng-if="globalError"><div><proteo-ui-icon icon-bg="red" icon="alert"></proteo-ui-icon><proteo-ui-text ng-show="!errorMessage" translate="RETAIL_CREDENTIALS_PUBLIC_REGISTRATION_STEP3_ERROR_FORM"></proteo-ui-text><proteo-ui-text ng-show="errorMessage" translate="{{errorMessage}}"></proteo-ui-text></div></div></div><div class="col-xs-12 no-padding signaturePanel" sca-enrollment-otp id="signaturePanelId"><form name="signatureForm" method="POST" novalidate><sca-enrollment-otp-panel form-name="signatureForm" is-public-otp="true" operation-data="operationData"></sca-enrollment-otp-panel></form><proteo-ui-thematic-break></proteo-ui-thematic-break><div class="row md-margin-top"><div class="col-xs-12 col-sm-6"><proteo-ui-button ng-if="false" class="btn-white button-previous" ng-click="previousStep()" ng-disabled="otpComplete"><proteo-ui-text translate="RETAIL_CREDENTIALS_PUBLIC_COMMON_PREVIOUS"></proteo-ui-text></proteo-ui-button><proteo-ui-link class="pull-left mr-10" ng-click="cancel()"><proteo-ui-icon icon="cancel"></proteo-ui-icon><proteo-ui-text translate="RETAIL_CREDENTIALS_PUBLIC_COMMON_CANCEL"></proteo-ui-text></proteo-ui-link><proteo-ui-link class="pull-left" ng-if="selectedPhone" ng-click="previousStep()"><proteo-ui-icon icon="back"></proteo-ui-icon><proteo-ui-text translate="RETAIL_CREDENTIALS_PUBLIC_COMMON_PREVIOUS"></proteo-ui-text></proteo-ui-link></div><div class="col-xs-12 col-md-6 text-right"><sca-enrollment-otp-panel-button class="pull-right" is-invalid="invalidAuthentication(err)" is-valid="userAuthenticated(data)" ng-if="!continueButton && !signatureForm.authenticationPanelTelephoneForm" ng-disabled="!capturePasswordForm.$valid || !signatureForm.$valid || continueButton || signatureForm.authenticationPanelTelephoneForm || otpComplete"><proteo-ui-text translate="RETAIL_SIGNATUREPANEL_OTP_BUTTON"></proteo-ui-text></sca-enrollment-otp-panel-button></div></div></div></div></div></div><div ng-include="\'/spasR46hfback/credentialsPublic/components/credentials-public/log-on/sca-modals/sca-modals-tpl.html\'"></div>')
}
]),
function() {
    "use strict";
    angular.module("App.captureQuestions").controller("captureQuestionsController", ["$scope", "$state", "$stateParams", "logOnEnrollmentFactory", "tsbJournalService", "logOnFactory", "captureQuestionsService", "DataLayerProvider", "$filter", function(a, b, c, d, e, f, g, h, i) {
        function j(b) {
            var c = b.answer[0].replace(/ /g, "")
              , d = b.answer[1].replace(/ /g, "")
              , e = b.answer[2].replace(/ /g, "");
            return c.match(a.pattern01[0].rule.source) && d.match(a.pattern01[0].rule.source) && e.match(a.pattern01[0].rule.source) ? !0 : !1
        }
        function k(a) {
            return l(a.answer[0], a.copy[0]) && l(a.answer[1], a.copy[1]) && l(a.answer[2], a.copy[2]) ? !0 : !1
        }
        function l(a, b) {
            return null != a && a.length > 0 && null != b && b.length > 0 && a.replace(/ /g, "").toLowerCase() === b.replace(/ /g, "").toLowerCase() ? !0 : !1
        }
        function m() {
            var b = g.getAllFilters()
              , c = [{
                questionId: b.questionId[0],
                question: b.question[0],
                answer: b.answer[0]
            }, {
                questionId: b.questionId[1],
                question: b.question[1],
                answer: b.answer[1]
            }, {
                questionId: b.questionId[2],
                question: b.question[2],
                answer: b.answer[2]
            }]
              , d = {
                userId: f.getUserId(),
                questions: c
            };
            g.serviceCallSetQuestions(d).then(function(b) {
                e.newOperation();
                var c = "holdingList.holdingList"
                  , d = null;
                f.getFirstLoginCode() && (3 === f.getFirstLoginCode() ? (c = "documentation.registerPaperless",
                a.showTermsAndConditions = !0,
                d = {
                    showTermsAndConditions: a.showTermsAndConditions
                }) : (1 === f.getFirstLoginCode() || 2 === f.getFirstLoginCode()) && (c = "documentation.registerPaperless",
                d = {
                    showTermsAndConditions: a.showTermsAndConditions
                })),
                f.createCookie(f.getTokenId(), c, d)
            }, function(b) {
                e.newOperation(),
                n(b);
                var c = angular.isDefined(b) && angular.isDefined(b.exception) && angular.isDefined(b.exception.description) ? b.exception.description : p("COMMON_MG_SYSTEM_ERROR");
                a.exceptionLiteral = c,
                h.sendError({
                    message: a.exceptionLiteral,
                    code: b && b.exception && b.exception.code ? b.exception.code : "",
                    type: h.errorType.WARNING
                })
            })
        }
        function n(a) {
            var c = {
                template: "technicalError",
                title: "COMMON_GLOBALERROR_TITLE",
                backMessage: !1,
                backLink: !1,
                linkState: "login",
                technicalMessage: a,
                hideBackLinkButton: !1,
                goBackState: "login",
                linkText: "COMMON_GLOBALERROR_LOG_BACK_ACCOUNTS"
            };
            b.go("globalErrorPage", c)
        }
        function o() {
            f.userId ? (h.updateScaDataLayer("captureQuestions"),
            JSM._dataLayerSPAReady()) : b.go("login")
        }
        var p = i("translate");
        a.questions = [],
        a.captureQuestion = [],
        a.questions0 = [],
        a.questions1 = [],
        a.questions2 = [],
        a.buttonDisabled = !1,
        a.showTermsAndConditions = !1,
        a.questions = d.getQuestions(),
        a.lines = [{
            id: 1,
            label: "RETAIL_CREDENTIALS_PUBLIC_CAPTUREQUESTIONS_TITLE"
        }, {
            id: 2,
            label: "RETAIL_CREDENTIALS_PUBLIC_CAPTUREQUESTIONS_TITLE2"
        }, {
            id: 3,
            label: "RETAIL_CREDENTIALS_PUBLIC_CAPTUREQUESTIONS_TITLE3"
        }],
        a.captureQuestion = [{
            value: void 0,
            response: "",
            copy: "",
            label01: "RETAIL_CREDENTIALS_PUBLIC_LOGON_CAPTUREQUESTIONS_ENTER_ANSWER",
            label02: "RETAIL_CREDENTIALS_PUBLIC_LOGON_CAPTUREQUESTIONS_REPEAT_SECRET_INFORMATION",
            validResponse: !1,
            validCopy: !1
        }, {
            value: void 0,
            response: "",
            copy: "",
            label01: "RETAIL_CREDENTIALS_PUBLIC_LOGON_CAPTUREQUESTIONS_ENTER_ANSWER",
            label02: "RETAIL_CREDENTIALS_PUBLIC_LOGON_CAPTUREQUESTIONS_REPEAT_SECRET_INFORMATION",
            validResponse: !1,
            validCopy: !1
        }, {
            value: void 0,
            response: "",
            copy: "",
            label01: "RETAIL_CREDENTIALS_PUBLIC_LOGON_CAPTUREQUESTIONS_ENTER_ANSWER",
            label02: "RETAIL_CREDENTIALS_PUBLIC_LOGON_CAPTUREQUESTIONS_REPEAT_SECRET_INFORMATION",
            validResponse: !1,
            validCopy: !1
        }],
        a.questions0 = a.questions,
        a.questions1 = a.questions,
        a.questions2 = a.questions,
        a.pattern01 = [{
            rule: /^([^\x00-\x7F]|[\w\ .,-:;?!`^\*\+'\\&%\$"\|@#~=<>\(\)\{\}\[\]]){3,35}$/i,
            info: {
                icon: "dot",
                color: null,
                text: "RETAIL_CREDENTIALS_PUBLIC_LOGON_CAPTUREQUESTIONS_DYNAMIC_VAL_01"
            }
        }],
        a.patternErrorMatch = [{
            rule: "",
            footer: {
                icon: "alert",
                color: null,
                text: "RETAIL_CREDENTIALS_PUBLIC_LOGON_CAPTUREQUESTIONS_DYNAMIC_VAL_02"
            }
        }],
        a.pattern = [],
        a.pattern[0] = a.patternErrorMatch,
        a.pattern[1] = a.patternErrorMatch,
        a.pattern[2] = a.patternErrorMatch,
        a.getPattern = function(b) {
            a.patterns = a.pattern[b]
        }
        ,
        a.validationChecks = {
            questionsValidations: angular.copy(a.questionsValidations)
        },
        a.selectorDropdown = function(b) {
            g.setFilter(b, a.captureQuestion[b].value.questionId, a.captureQuestion[b].value.question)
        }
        ,
        a.setResponse = function(b) {
            angular.isDefined(a.captureQuestion[b].response) && a.captureQuestion[b].response.length > 0 && angular.isDefined(a.captureQuestion[b].copy) && a.captureQuestion[b].copy.length > 0 && (l(a.captureQuestion[b].response, a.captureQuestion[b].copy) ? a.pattern[b][0].footer.color = "" : a.pattern[b][0].footer.color = "red"),
            g.setAnswer(b, a.captureQuestion[b].response)
        }
        ,
        a.setResponseCopy = function(b) {
            g.setCopy(b, a.captureQuestion[b].copy)
        }
        ,
        a.formIsValid = function(a) {
            if (a.$valid) {
                var b = g.getAllFilters();
                if (b && b.answer.length > 0 && b.copy.length > 0 && b.answer.length === b.copy.length && 3 === b.answer.length && j(b) && k(b))
                    return !1
            }
            return !0
        }
        ,
        a.selectedQuestion = function(a) {
            var b = g.getFilter();
            return a.questionId !== b[1] && a.questionId !== b[2] ? !0 : !1
        }
        ,
        a.selectedQuestion1 = function(a) {
            var b = g.getFilter();
            return a.questionId !== b[0] && a.questionId !== b[2] ? !0 : !1
        }
        ,
        a.selectedQuestion2 = function(a) {
            var b = g.getFilter();
            return a.questionId !== b[0] && a.questionId !== b[1] ? !0 : !1
        }
        ,
        a.submit = function(a) {
            a.$valid && m()
        }
        ,
        o()
    }
    ])
}(),
function() {
    "use strict";
    angular.module("App.captureQuestions").factory("captureQuestionsService", ["$q", "proteocanalinvokerServices", "LOGIN_WEBADAPTER", function(a, b, c) {
        var d = {};
        return d.filterQuestions = [],
        d.filterLabels = [],
        d.filterAnswers = [],
        d.filterCopy = [],
        d.setFilter = function(a, b, c) {
            d.filterQuestions[a] = b,
            d.filterLabels[a] = c
        }
        ,
        d.setAnswer = function(a, b) {
            d.filterAnswers[a] = b
        }
        ,
        d.setCopy = function(a, b) {
            d.filterCopy[a] = b
        }
        ,
        d.getAllFilters = function() {
            return {
                questionId: d.filterQuestions,
                question: d.filterLabels,
                answer: d.filterAnswers,
                copy: d.filterCopy
            }
        }
        ,
        d.getFilter = function() {
            return d.filterQuestions
        }
        ,
        d.serviceCall = function(d) {
            function e(a) {
                g.resolve(a)
            }
            function f(a) {
                g.reject(a)
            }
            var g = a.defer()
              , h = {
                "HEADER.SERVICE_SCOPE": "PUBLIC"
            };
            return b.invoke({
                service: c.getUserQuestions,
                callback: e,
                fail: f,
                data: d,
                headers: h,
                idLoader: "captureQuestionsId",
                bigLoader: !1
            }),
            g.promise
        }
        ,
        d.serviceCallSetQuestions = function(d) {
            function e(a) {
                g.resolve(a)
            }
            function f(a) {
                g.reject(a)
            }
            var g = a.defer()
              , h = {
                "HEADER.SERVICE_SCOPE": "PUBLIC"
            };
            return b.invoke({
                service: c.setUserQuestions,
                callback: e,
                fail: f,
                data: d,
                headers: h,
                idLoader: "captureSetUserQuestions",
                bigLoader: !1
            }),
            g.promise
        }
        ,
        d.serviceCallgetAllQuestions = function(d) {
            function e(a) {
                g.resolve(a)
            }
            function f(a) {
                g.reject(a)
            }
            var g = a.defer()
              , h = {
                "HEADER.SERVICE_SCOPE": "PUBLIC"
            };
            return b.invoke({
                service: c.getAllQuestions,
                callback: e,
                fail: f,
                data: d,
                headers: h,
                idLoader: "captureAllQuestions",
                bigLoader: !1
            }),
            g.promise
        }
        ,
        d
    }
    ])
}(),
function() {
    "use strict";
    angular.module("App.captureQuestions").config(["$stateProvider", function(a) {
        a.state("captureQuestions", {
            url: "/captureQuestions",
            templateUrl: "/spasR46hfback/credentialsPublic/components/credentials-public/log-on/captureQuestions/capture-questions-tpl.html",
            controller: "captureQuestionsController",
            params: {
                data: null,
                firstTimeLogin: null,
                channel: null
            }
        })
    }
    ])
}(),
angular.module("App.captureQuestions.templates", ["/spasR46hfback/credentialsPublic/components/credentials-public/log-on/captureQuestions/capture-questions-error-tpl.html", "/spasR46hfback/credentialsPublic/components/credentials-public/log-on/captureQuestions/capture-questions-tpl.html"]),
angular.module("/spasR46hfback/credentialsPublic/components/credentials-public/log-on/captureQuestions/capture-questions-error-tpl.html", []).run(["$templateCache", function(a) {
    "use strict";
    a.put("/spasR46hfback/credentialsPublic/components/credentials-public/log-on/captureQuestions/capture-questions-error-tpl.html", '<div class="row"><div class="col-xs-12"><div ng-repeat="patternQ in patterns track by $index"><div ng-if="patternQ.footer && patternQ.footer.color==\'red\'"><proteo-ui-icon ng-if="patternQ.footer.icon" icon="{{patternQ.footer.icon}}"></proteo-ui-icon><proteo-ui-text class="ml-2 text-{{patternQ.footer.color}}" translate="{{patternQ.footer.text}}"></proteo-ui-text></div></div></div></div>')
}
]),
angular.module("/spasR46hfback/credentialsPublic/components/credentials-public/log-on/captureQuestions/capture-questions-tpl.html", []).run(["$templateCache", function(a) {
    "use strict";
    a.put("/spasR46hfback/credentialsPublic/components/credentials-public/log-on/captureQuestions/capture-questions-tpl.html", '<div class="row"><form name="captureQuestions" method="POST" ng-submit="submit(captureQuestions)" novalidate autocomplete="off"><div class="col-xs-12 mb-4"><div class="col-xs-12" ng-controller="captureQuestionsController"><div class="row"><proteo-ui-text class="col-xs-12 borderless-panel ng-scope" translate="RETAIL_CALLENGE_CUESTIONS_OVERTITLE"></proteo-ui-text></div><div class="row"><div class="col-xs-12 borderless-panel lg-margin-bottom lg-margin-top"><proteo-ui-text translate="RETAIL_CALLENGE_CUESTIONS_SECURITY_TEXT1"></proteo-ui-text></div></div><div class="row"><div class="text-bold col-xs-12 borderless-panel xs-margin-bottom"><proteo-ui-text translate="RETAIL_CALLENGE_CUESTIONS_SECURITY_TEXT2"></proteo-ui-text></div></div><br/><div class="col-xs-12 no-padding-left md-margin-bottom" id="errorException" ng-if="exceptionLiteral"><proteo-ui-icon icon-bg="red" icon="alert"></proteo-ui-icon><proteo-ui-text class="text-bold" translate="{{exceptionLiteral}}"></proteo-ui-text></div><h3 class="text-bold" translate="{{lines[0].label}}"></h3><proteo-ui-text paragraph translate="RETAIL_CREDENTIALS_PUBLIC_CAPTUREQUESTIONS_SUBTITLE"></proteo-ui-text><div class="row"><div class="col-md-6"><label for="ChooseQuestion0"></label><select class="form-control" ng-model="captureQuestion[0].value" required name="ChooseQuestion0" id="ChooseQuestion0" ng-change="selectorDropdown(0)" ng-options="qt0.question for qt0 in questions0 | filter:selectedQuestion"><option disabled value="" translate="RETAIL_CREDENTIALS_PUBLIC_CAPTUREQUESTIONS_CHOOSEYOURQUESTIONS"></select></div></div><div ng-if="captureQuestion[0].value" class="row xs-margin-left md-margin-top"><div class="col-xs-12 col-md-8"><div class="row" ng-repeat="questionValid in questionsValidations[0][0]"><div class="input-group col-xs-7"><proteo-ui-icon icon="{{questionValid.icon}}" icon-color="{{questionValid.color}}"></proteo-ui-icon><span class="input-group-addon"></span><proteo-ui-text ng-class="text-{{questionValid.color}}" translate="{{questionValid.text}}"></proteo-ui-text></div></div></div><tsb-password model="captureQuestion[0].response" copymodel="captureQuestion[0].copy" required label="{{captureQuestion[0].label01}}" name="response0" id="response{{0}}" patterns="pattern01" eye="true" valid="captureQuestion[0].validResponse" change="setResponse(0)"></tsb-password><tsb-password model="captureQuestion[0].copy" copymodel="captureQuestion[0].response" required label="{{captureQuestion[0].label02}}" name="copy0" id="copy{{0}}" patterns="patternErrorMatch" eye="true" valid="captureQuestion[0].validCopy" change="setResponseCopy(0)"></tsb-password><ng-include src="\'/spasR46hfback/credentialsPublic/components/credentials-public/log-on/captureQuestions/capture-questions-error-tpl.html\'" onload="getPattern(0)"></ng-include></div></div><div class="col-xs-12" ng-controller="captureQuestionsController"><h3 class="text-bold" translate="{{lines[1].label}}"></h3><proteo-ui-text paragraph translate="RETAIL_CREDENTIALS_PUBLIC_CAPTUREQUESTIONS_SUBTITLE"></proteo-ui-text><div class="row"><div class="col-md-6"><label for="ChooseQuestion1"></label><select class="form-control" ng-model="captureQuestion[1].value" name="ChooseQuestion1" id="ChooseQuestion1" required ng-change="selectorDropdown(1)" ng-options="qt1.question for qt1 in questions1 | filter:selectedQuestion1"><option disabled value="" translate="RETAIL_CREDENTIALS_PUBLIC_CAPTUREQUESTIONS_CHOOSEYOURQUESTIONS"></select></div></div><div ng-if="captureQuestion[1].value" class="row xs-margin-left md-margin-top"><div class="col-xs-12 col-md-8"><div class="row" ng-repeat="questionValid in questionsValidations[1][0]"><div class="input-group col-xs-7"><proteo-ui-icon icon="{{questionValid.icon}}" icon-color="{{questionValid.color}}"></proteo-ui-icon><span class="input-group-addon"></span><proteo-ui-text ng-class="text-{{questionValid.color}}" translate="{{questionValid.text}}"></proteo-ui-text></div></div></div><tsb-password model="captureQuestion[1].response" required copymodel="captureQuestion[1].copy" label="{{captureQuestion[1].label01}}" name="response1" id="response{{1}}" patterns="pattern01" eye="true" valid="captureQuestion[1].validResponse" change="setResponse(1)"></tsb-password><tsb-password model="captureQuestion[1].copy" required copymodel="captureQuestion[1].response" label="{{captureQuestion[1].label02}}" name="copy1" id="copy{{1}}" patterns="patternErrorMatch" eye="true" valid="captureQuestion[1].validCopy" change="setResponseCopy(1)"></tsb-password><ng-include src="\'/spasR46hfback/credentialsPublic/components/credentials-public/log-on/captureQuestions/capture-questions-error-tpl.html\'" onload="getPattern(1)"></ng-include></div></div><div class="col-xs-12" ng-controller="captureQuestionsController"><h3 class="text-bold" translate="{{lines[2].label}}"></h3><proteo-ui-text paragraph translate="RETAIL_CREDENTIALS_PUBLIC_CAPTUREQUESTIONS_SUBTITLE"></proteo-ui-text><div class="row"><div class="col-md-6"><label for="ChooseQuestion2"></label><select class="form-control" ng-model="captureQuestion[2].value" name="ChooseQuestion2" required id="ChooseQuestion2" ng-change="selectorDropdown(2)" ng-options="qt2.question for qt2 in questions2 | filter:selectedQuestion2"><option disabled translate="RETAIL_CREDENTIALS_PUBLIC_CAPTUREQUESTIONS_CHOOSEYOURQUESTIONS" value=""></select></div></div><div ng-if="captureQuestion[2].value" class="row xs-margin-left md-margin-top"><div class="col-xs-12 col-md-8"><div class="row" ng-repeat="questionValid in questionsValidations[2][0]"><div class="input-group col-xs-7"><proteo-ui-icon icon="{{questionValid.icon}}" icon-color="{{questionValid.color}}"></proteo-ui-icon><span class="input-group-addon"></span><proteo-ui-text ng-class="text-{{questionValid.color}}" translate="{{questionValid.text}}"></proteo-ui-text></div></div></div><tsb-password model="captureQuestion[2].response" copymodel="captureQuestion[2].copy" label="{{captureQuestion[2].label01}}" name="response2" required id="response{{2}}" patterns="pattern01" eye="true" valid="captureQuestion[2].validResponse" change="setResponse(2)"></tsb-password><tsb-password model="captureQuestion[2].copy" copymodel="captureQuestion[2].response" label="{{captureQuestion[2].label02}}" name="copy2" required id="copy{{2}}" patterns="patternErrorMatch" eye="true" valid="captureQuestion[2].validCopy" change="setResponseCopy(2)"></tsb-password><ng-include src="\'/spasR46hfback/credentialsPublic/components/credentials-public/log-on/captureQuestions/capture-questions-error-tpl.html\'" onload="getPattern(2)"></ng-include></div></div></div><proteo-ui-button ng-disabled="formIsValid(captureQuestions)" id="sendQuestions" class="pull-right" type="submit"><proteo-ui-text translate="RETAIL_CREDENTIALS_PUBLIC_CAPTUREQUESTIONS_SUBMIT"></proteo-ui-text></proteo-ui-button></form></div>')
}
]),
function() {
    "use strict";
    angular.module("App.changePassword").controller("changePasswordController", ["$filter", "$scope", "$timeout", "$state", "$stateParams", "logOnEnrollmentFactory", "tsbJournalService", "logOnFactory", "changePasswordService", "DataLayerProvider", "getUserGenericService", function(a, b, c, d, e, f, g, h, i, j, k) {
        function l() {
            e && e.data ? (m(),
            h.resetTimeout(),
            h.timeoutPromise = c(function() {
                b.modalTimeOutFTL.open()
            }, 3e5),
            j.updateScaDataLayer("changePassword"),
            JSM._dataLayerSPAReady()) : d.go("login")
        }
        function m() {
            b.model = angular.copy(r),
            b.model = {
                userDetails: {
                    firstName: "qxgfcfcfccgcgfcggfcfcccgfcfcfgcx",
                    lastName: "qxgfcfcfccgcgfcggfcfcccgfcfcfgcx",
                    dateOfBirth: "qxgfcfcfccgcgfcggfcfcccgfcfcfgcx"
                },
                loginDetails: {
                    username: h.getUserId()
                }
            }
        }
        function n(a) {
            o(a.repeatNewPassword)
        }
        function o(a) {
            a.$setValidity("passwordNotEqual", angular.equals(b.model.newPassword, b.model.repeatNewPassword))
        }
        function p(a) {
            b.serviceControl = {
                error: !0,
                message: a && a.exception && -1 !== a.exception.code.indexOf("ERR") && a.exception.description ? a.exception.description : "",
                defaultMessage: "COMMON_MG_SYSTEM_ERROR",
                loading: !1
            }
        }
        var q = a("translate")
          , r = {
            newPassword: null,
            repeatNewPassword: null
        };
        b.model = null,
        b.stateParams = e && e.data ? e.data : null,
        b.channel = e && e.channel ? e.channel : null,
        b.modalTimeOutFTL = {
            onClose: function() {
                location.reload(),
                d.go("login")
            }
        },
        b.checkEqualsPassword = function(a) {
            switch (a.$name) {
            case "repeatNewPassword":
                o(a);
                break;
            default:
                n(a)
            }
        }
        ,
        b.submit = function(a) {
            if (n(a),
            a.$valid) {
                var c = {
                    authId: h.getAuthId(),
                    password: b.model.newPassword,
                    server: h.getServer(),
                    tokenId: h.getTokenId()
                };
                f.getScaMode() ? i.changePasswordSca(c).then(function(a) {
                    h.setServerFromResponse(a),
                    d.go("captureMemorableInformation", {
                        channel: e.channel,
                        firstTimeLogin: !0,
                        data: e.data
                    })
                }, function(a) {
                    angular.isDefined(a) && angular.isDefined(a.exception) && angular.isDefined(a.exception.code);
                    g.newOperation(),
                    p(a),
                    j.sendError({
                        message: a && a.exception && a.exception.description ? a.exception.description : q("COMMON_MG_SYSTEM_ERROR"),
                        code: a && a.exception && a.exception.code ? a.exception.code : "",
                        type: j.errorType.WARNING
                    })
                }) : i.changePassword(c).then(function(a) {
                    h.setServerFromResponse(a),
                    d.go("captureMemorableInformation", {
                        channel: e.channel,
                        firstTimeLogin: !0,
                        data: e.data
                    })
                }, function(a) {
                    p(a)
                })
            }
        }
        ,
        b.cancel = function() {
            g.newOperation(),
            d.go("login")
        }
        ,
        l()
    }
    ])
}(),
function() {
    "use strict";
    angular.module("App.changePassword").factory("changePasswordService", ["$q", "proteocanalinvokerServices", "LOGIN_WEBADAPTER", function(a, b, c) {
        var d = {};
        return d.changePasswordSca = function(d) {
            function e(a) {
                g.resolve(a)
            }
            function f(a) {
                g.reject(a)
            }
            var g = a.defer()
              , h = {
                "HEADER.SERVICE_SCOPE": "PUBLIC"
            };
            return b.invoke({
                service: c.changeFirstPasswordSca,
                callback: e,
                fail: f,
                data: d,
                headers: h,
                idLoader: "changePasswordBtnId",
                bigLoader: !1
            }),
            g.promise
        }
        ,
        d.changePassword = function(d) {
            function e(a) {
                g.resolve(a)
            }
            function f(a) {
                g.reject(a)
            }
            var g = a.defer()
              , h = {
                "HEADER.SERVICE_SCOPE": "PUBLIC"
            };
            return b.invoke({
                service: c.changeFirstPassword,
                callback: e,
                fail: f,
                data: d,
                headers: h,
                idLoader: "changePasswordBtnId",
                bigLoader: !1
            }),
            g.promise
        }
        ,
        d
    }
    ])
}(),
function() {
    "use strict";
    angular.module("App.changePassword").config(["$stateProvider", function(a) {
        a.state("changePassword", {
            url: "/changePassword",
            templateUrl: "/spasR46hfback/credentialsPublic/components/credentials-public/log-on/changePassword/change-password-tpl.html",
            controller: "changePasswordController",
            params: {
                data: null,
                firstTimeLogin: null,
                channel: null
            }
        })
    }
    ])
}(),
angular.module("App.changePassword.templates", ["/spasR46hfback/credentialsPublic/components/credentials-public/log-on/changePassword/change-password-tpl.html"]),
angular.module("/spasR46hfback/credentialsPublic/components/credentials-public/log-on/changePassword/change-password-tpl.html", []).run(["$templateCache", function(a) {
    "use strict";
    a.put("/spasR46hfback/credentialsPublic/components/credentials-public/log-on/changePassword/change-password-tpl.html", '<div ng-include="\'/spasR46hfback/credentialsPublic/components/credentials-public/log-on/sca-modals/sca-modals-tpl.html\'"></div><div class="row"><div class="col-xs-12"><h1 translate="RETAIL_CREDENTIALS_PUBLIC_CHANGEPASSWORD_TITLE"></h1></div><div class="col-xs-12 lg-padding-left md-margin-bottom timeOutError" ng-if="resetPasswordForm.$invalid && resetPasswordForm.$submitted"><proteo-ui-icon icon-bg="red" icon="alert"></proteo-ui-icon><proteo-ui-text class="text-bold" translate="RETAIL_CREDENTIALS_PUBLIC_COMMON_ERROR_FORM"></proteo-ui-text></div><div class="col-xs-12 lg-padding-left md-margin-bottom timeOutError" ng-if="serviceControl.error"><proteo-ui-icon icon-bg="red" icon="alert"></proteo-ui-icon><proteo-ui-text class="text-bold">{{serviceControl.message || serviceControl.defaultMessage | translate}}</proteo-ui-text></div><div class="col-xs-12"><proteo-ui-text class="text-bold" paragraph="true" translate="RETAIL_CREDENTIALS_PUBLIC_CHANGEPASSWORD_TXT"></proteo-ui-text><ul class="unordered-list lg-padding-left"><li><proteo-ui-text translate="RETAIL_CREDENTIALS_PUBLIC_CHANGEPASSWORD_LIST_ONE"></proteo-ui-text><li><proteo-ui-text translate="RETAIL_CREDENTIALS_PUBLIC_CHANGEPASSWORD_LIST_TWO"></proteo-ui-text><li><proteo-ui-text translate="RETAIL_CREDENTIALS_PUBLIC_CHANGEPASSWORD_LIST_THREE"></proteo-ui-text><li><proteo-ui-text translate="RETAIL_CREDENTIALS_PUBLIC_CHANGEPASSWORD_LIST_FOUR"></proteo-ui-text></ul><proteo-ui-collapse action="Tips for a good password" one-at-a-time="false"><collapse-title><proteo-ui-text translate="RETAIL_CREDENTIALS_PUBLIC_CHANGEPASSWORD_COLLAPSE_TIPS_TITLE"></proteo-ui-text></collapse-title><collapse-body><proteo-ui-text paragraph="false" translate="RETAIL_CREDENTIALS_PUBLIC_CHANGEPASSWORD_COLLAPSE_TIPS_TEXT"></proteo-ui-text><ul class="unordered-list lg-padding-left"><li class="list-element"><proteo-ui-text translate="RETAIL_CREDENTIALS_PUBLIC_CHANGEPASSWORD_COLLAPSE_TIPS_01"></proteo-ui-text><li class="list-element"><proteo-ui-text translate="RETAIL_CREDENTIALS_PUBLIC_CHANGEPASSWORD_COLLAPSE_TIPS_02"></proteo-ui-text><li class="list-element"><proteo-ui-text translate="RETAIL_CREDENTIALS_PUBLIC_CHANGEPASSWORD_COLLAPSE_TIPS_03"></proteo-ui-text><li class="list-element"><proteo-ui-text translate="RETAIL_CREDENTIALS_PUBLIC_CHANGEPASSWORD_COLLAPSE_TIPS_04"></proteo-ui-text><li class="list-element"><proteo-ui-text translate="RETAIL_CREDENTIALS_PUBLIC_CHANGEPASSWORD_COLLAPSE_TIPS_05"></proteo-ui-text></ul></collapse-body></proteo-ui-collapse></div><div class="col-xs-12"><form name="resetPasswordForm" method="POST" ng-submit="submit(resetPasswordForm)" novalidate><proteo-ui-form-group><label for="newPassword"><proteo-ui-text class="text-bold" translate="RETAIL_CREDENTIALS_PUBLIC_CHANGEPASSWORD_PASSWORD"></proteo-ui-text></label><proteo-ui-form-control><proteo-ui-input id="newPassword" type="password" maxlength="15" name="newPassword" ng-maxlength="15" ng-model="model.newPassword" ng-minlength="6" ng-pattern="/^(?=.*\\d)(?=(.*[a-zA-Z]){3})[a-zA-Z0-9]{6,15}$/" required custom-password-validation></proteo-ui-input></proteo-ui-form-control><proteo-ui-form-error><div ng-if="resetPasswordForm.newPassword.$error.required"><proteo-ui-text class="form-error" translate="RETAIL_CREDENTIALS_PUBLIC_COMMON_ERROR_ENTERVALUE"></proteo-ui-text></div><div ng-if="resetPasswordForm.newPassword.$error.maxlength"><proteo-ui-text class="form-error" translate="RETAIL_CREDENTIALS_PUBLIC_COMMON_ERROR_LENGTH"></proteo-ui-text></div><div ng-if="resetPasswordForm.newPassword.$error.minlength"><proteo-ui-text class="form-error" translate="RETAIL_CREDENTIALS_PUBLIC_COMMON_ERROR_MIN_LENGTH1"></proteo-ui-text></div><div ng-show="resetPasswordForm.newPassword.$error.passwordNotEqual && !resetPasswordForm.newPassword.$error.required"><proteo-ui-text class="form-error" translate="RETAIL_CREDENTIALS_PUBLIC_COMMON_ERROR_PASSWORD_EQUAL"></proteo-ui-text></div><div ng-show="resetPasswordForm.newPassword.$error.pattern && !resetPasswordForm.newPassword.$error.minlength && !resetPasswordForm.newPassword.$error.pswdSC"><proteo-ui-text class="form-error" translate="RETAIL_CREDENTIALS_PUBLIC_STEP2_ERROR_FORMAT"></proteo-ui-text></div><div ng-show="resetPasswordForm.newPassword.$error.pswdSC"><proteo-ui-text class="form-error" translate="RETAIL_CREDENTIALS_PUBLIC_STEP2_ERROR_NOSYM"></proteo-ui-text></div><div ng-show="resetPasswordForm.newPassword.$error.pswd"><proteo-ui-text class="form-error" translate="RETAIL_CREDENTIALS_PUBLIC_STEP2_ERROR_PSWDHASUSERID"></proteo-ui-text></div><div ng-show="resetPasswordForm.newPassword.$error.pswdhasUD && !resetPasswordForm.newPassword.$error.minlength"><proteo-ui-text class="form-error" translate="RETAIL_CREDENTIALS_PUBLIC_STEP2_ERROR_PSWDHASUSERDETAILS"></proteo-ui-text></div></proteo-ui-form-error></proteo-ui-form-group><proteo-ui-text translate="RETAIL_CREDENTIALS_PUBLIC_CHANGEPASSWORD_PASSWORD_AUX"></proteo-ui-text><proteo-ui-form-group><label for="repeatNewPassword" translate="RETAIL_CREDENTIALS_PUBLIC_CHANGEPASSWORD_RE_ENTER_PASSWORD"></label><proteo-ui-form-control><proteo-ui-input id="repeatNewPassword" type="password" maxlength="15" name="repeatNewPassword" ng-blur="checkEqualsPassword(resetPasswordForm.repeatNewPassword)" ng-maxlength="15" ng-model="model.repeatNewPassword" required></proteo-ui-input></proteo-ui-form-control><proteo-ui-form-error><div ng-if="resetPasswordForm.repeatNewPassword.$error.required"><proteo-ui-text class="form-error" translate="RETAIL_CREDENTIALS_PUBLIC_COMMON_ERROR_ENTERVALUE"></proteo-ui-text></div><div ng-if="resetPasswordForm.repeatNewPassword.$error.maxlength"><proteo-ui-text class="form-error" translate="RETAIL_CREDENTIALS_PUBLIC_COMMON_ERROR_PASSWORD_EQUAL"></proteo-ui-text></div><div ng-if="resetPasswordForm.repeatNewPassword.$error.passwordNotEqual"><proteo-ui-text class="form-error" translate="RETAIL_CREDENTIALS_PUBLIC_COMMON_ERROR_PASSWORD_EQUAL"></proteo-ui-text></div></proteo-ui-form-error></proteo-ui-form-group><proteo-ui-thematic-break class="row"></proteo-ui-thematic-break><proteo-ui-link ng-click="cancel()"><proteo-ui-text><proteo-ui-icon icon="cancel"></proteo-ui-icon><span translate="RETAIL_CREDENTIALS_PUBLIC_CHANGEPASSWORD_CANCEL"></span></proteo-ui-text></proteo-ui-link><proteo-ui-button id="changePasswordBtnId" class="pull-right" type="submit" ng-disabled="serviceControl.loading"><proteo-ui-text translate="RETAIL_CREDENTIALS_PUBLIC_CHANGEPASSWORD_SUBMIT"></proteo-ui-text></proteo-ui-button></form></div></div>')
}
]),
function() {
    "use strict";
    angular.module("App.enterActivationCode").controller("enterActivationCodeController", ["$scope", "$state", "$stateParams", "enterActivationCodeService", "$filter", "consultive", "tsbJournalService", "LOGIN_WEBADAPTER", "logOnEnrollmentFactory", "logOnFactory", "DataLayerProvider", function(a, b, c, d, e, f, g, h, i, j, k) {
        function l() {
            k.updateScaDataLayer("enterActivationCode"),
            JSM._dataLayerSPAReady()
        }
        var m = e("translate");
        a.activationCode = "",
        a.error = !1,
        a.isOpen = !1,
        a.globalError = !1,
        a.model = {
            activationCode: null
        },
        a.attempts = !1,
        a.activationCodeButtonDissabled = !1,
        a.disabled = !1,
        a.cancel = function() {
            g.newOperation(),
            b.go("login")
        }
        ,
        a.invalidAuthentication = function() {
            a.error = !0
        }
        ,
        a.userAuthenticated = function(a) {
            var d = {
                channel: c.channel,
                data: c.data
            };
            i.setCookie(a),
            b.go("captureMemorableInformation", d)
        }
        ,
        a.submit = function() {
            a.activationCodeButtonDissabled = !0;
            var b = {
                authId: c.data.authId || null,
                activationCode: a.model.activationCode,
                server: j.getServer(),
                activationCodeLogin: !0
            };
            i.getScaMode() ? d.activationCode(h.validateActivationCodeSca, b).then(function(b) {
                b ? (j.setServerFromResponse(b),
                a.userAuthenticated(b)) : (a.globalError = !0,
                a.globalTxt = m("COMMON_MG_SYSTEM_ERROR"))
            }, function(b) {
                g.newOperation(),
                a.globalError = !0,
                b.exception && b.exception.code === i.ERR_ACT_NOT_MATCH_LA && (a.globalError = !1,
                i.setScaUserPiloted(!0),
                i.enrollmentErrorHandler(b, a, i.ERR_ACT_NOT_MATCH_LA)),
                a.openAM = !1,
                b.exception && "408" === b.exception.code ? (a.globalTxt = m("COMMON_TIMEOUT_ERROR"),
                a.openAM = !0) : a.globalTxt = b.exception.description || m("COMMON_MG_SYSTEM_ERROR"),
                angular.isDefined(b.exception.detail) && angular.isDefined(b.exception.detail.attempts) && !a.openAM && (a.attempts = !0,
                a.globalTxt = b.exception.description,
                i.setScaUserPiloted(!0),
                i.enrollmentErrorHandler(b, a, i.FTL)),
                k.sendError({
                    message: a.globalTxt,
                    code: b && b.exception && b.exception.code ? b.exception.code : "",
                    type: k.errorType.POPUP
                })
            }) : d.activationCode(h.validateActivationCode, b).then(function(b) {
                b ? (j.setServerFromResponse(b),
                a.userAuthenticated()) : (a.globalError = !0,
                a.globalTxt = b.description || m("COMMON_MG_SYSTEM_ERROR"))
            }, function(b) {
                a.globalError = !0,
                i.enrollmentErrorHandler(b, a, i.PASSWORD_OTP_SCREEN),
                b.exception && "408" === b.exception.code ? a.globalTxt = m("COMMON_TIMEOUT_ERROR") : a.globalTxt = b.exception.description || m("COMMON_MG_SYSTEM_ERROR"),
                k.sendError({
                    message: a.globalTxt,
                    code: b && b.exception && b.exception.code ? b.exception.code : "",
                    type: k.errorType.ERROR_PAGE
                })
            })
        }
        ,
        a.generateActivationCode = function() {
            var b = {
                userId: c.data.username,
                server: j.getServer()
            };
            d.activationCode(h.generateActivationCode, b).then(function(b) {
                b && (j.setServerFromResponse(b),
                a.userAuthenticated()),
                a.success = !0,
                a.goToActivationStatus()
            }, function(b) {
                a.success = !1,
                a.errorMsg = b.exception.description || m("COMMON_MG_SYSTEM_ERROR"),
                a.goToActivationStatus()
            })
        }
        ,
        a.goToActivationStatus = function() {
            var c = {
                success: a.success,
                errorMsg: a.errorMsg || ""
            };
            b.go("activationCodeState", {
                data: c
            })
        }
        ,
        l()
    }
    ])
}(),
function() {
    "use strict";
    angular.module("App.enterActivationCode").factory("enterActivationCodeService", ["$q", "proteocanalinvokerServices", "consultiveFactory", "uuid", function(a, b, c, d) {
        var e = {};
        return e.activationCode = function(c, e) {
            function f(a) {
                h.resolve(a)
            }
            function g(a) {
                h.reject(a)
            }
            var h = a.defer()
              , i = {
                "HEADER.USER.PROCEDENCE": "WR01",
                "HEADER.SERVICE_SCOPE": "PUBLIC",
                "HEADER.operationID": "ACTCOD-" + d.v4()
            };
            return b.error(function(a) {
                h.reject(a)
            }),
            b.invoke({
                service: c,
                callback: f,
                fail: g,
                headers: i,
                data: e,
                idLoader: "loaderGOEShere",
                bigLoader: !0
            }),
            h.promise
        }
        ,
        e
    }
    ])
}(),
function() {
    "use strict";
    angular.module("App.enterActivationCode").config(["$stateProvider", function(a) {
        a.state("enterActivationCode", {
            url: "/enterActivationCode",
            templateUrl: "/spasR46hfback/credentialsPublic/components/credentials-public/log-on/enterActivationCode/enter-activation-code-tpl.html",
            controller: "enterActivationCodeController",
            params: {
                data: null,
                channel: null
            }
        })
    }
    ])
}(),
angular.module("App.enterActivationCode.templates", ["/spasR46hfback/credentialsPublic/components/credentials-public/log-on/enterActivationCode/enter-activation-code-tpl.html"]),
angular.module("/spasR46hfback/credentialsPublic/components/credentials-public/log-on/enterActivationCode/enter-activation-code-tpl.html", []).run(["$templateCache", function(a) {
    "use strict";
    a.put("/spasR46hfback/credentialsPublic/components/credentials-public/log-on/enterActivationCode/enter-activation-code-tpl.html", '<div class="row"><div class="col-xs-12"><h1 class="no-margin-bottom" translate="RETAIL_CREDENTIALS_PUBLIC_LOGON_ENTERACTIVATIONCODE_TITLE"></h1></div><proteo-ui-thematic-break></proteo-ui-thematic-break><div class="row error globalErrorClass md-margin-bottom timeOutError" ng-if="globalError"><div><div class="col-xs-12" ng-if="!attempts"><proteo-ui-icon icon="error"></proteo-ui-icon><proteo-ui-text>{{globalTxt}}</proteo-ui-text></div></div></div><div class="col-xs-12"><form name="activationCodeForm" method="POST" ng-submit="submit(activationCodeForm)"><div class="row"><div class="col-xs-12 col-sm-7"><proteo-ui-text translate="RETAIL_CREDENTIALS_PUBLIC_LOGON_ENTERACTIVATIONCODE_TEXTLEFT"></proteo-ui-text><proteo-ui-popover class="text-std-size" content="RETAIL_CREDENTIALS_PUBLIC_LOGON_ENTERACTIVATIONCODE_FIRST_TEXT_TOOLTIPTITLE" placement="top-left">[?]</proteo-ui-popover><h3 class="text-bold" translate="RETAIL_CREDENTIALS_PUBLIC_LOGON_ENTERACTIVATIONCODE_YOURCODE"></h3><div class="row"><div class="col-xs-12"><proteo-ui-form-group><proteo-ui-form-control><proteo-ui-input name="activationCode" ng-model="model.activationCode" required type="password" ng-minlength="6" ng-maxlength="15" ng-pattern="/^[A-Za-z0-9]*$/"></proteo-ui-input></proteo-ui-form-control><proteo-ui-form-error><div ng-show="activationCodeForm.$error.required"><proteo-ui-text class="form-error" translate="RETAIL_CREDENTIALS_PUBLIC_COMMON_ERROR_ENTERVALUE"></proteo-ui-text></div><div ng-show="activationCodeForm.$error.pattern || activationCodeForm.$error.minlength || activationCodeForm.$error.maxlength"><proteo-ui-text class="form-error" translate="RETAIL_CREDENTIALS_PUBLIC_LOGON_ENTERACTIVATIONCODE_ERROR_PATTERN"></proteo-ui-text></div></proteo-ui-form-error></proteo-ui-form-group></div></div><div class="row sm-margin-top" style="margin-right:-210px"><div class="col-xs-12 col-sm-6 collapse-link"><proteo-ui-simple-collapse-title is-collapsed="isOpen"><proteo-ui-text translate="RETAIL_CREDENTIALS_PUBLIC_LOGON_ENTERACTIVATIONCODE_REQUESTANOTHER"></proteo-ui-text></proteo-ui-simple-collapse-title></div><div class="col-xs-12 col-sm-5 collapse-tooltip"><proteo-ui-popover class="text-std-size" content="RETAIL_CREDENTIALS_PUBLIC_LOGON_ENTERACTIVATIONCODE_COLLAPSE_TOOLTIPTEXT" placement="top-left" size="h4" title-popover="RETAIL_CREDENTIALS_PUBLIC_LOGON_ENTERACTIVATIONCODE_COLLAPSE_TOOLTIPTITLE">[?]</proteo-ui-popover></div></div><proteo-ui-simple-collapse id="simple-collapse" is-collapsed="isOpen"><div class="row panel sm-margin md-padding-top md-padding-bottom ng-scope"><div class="col-xs-8"><proteo-ui-text class="text-bold" translate="RETAIL_CREDENTIALS_PUBLIC_LOGON_ENTERACTIVATIONCODE_COLLAPSE_SENDME"></proteo-ui-text></div><div class="col-xs-4"><proteo-ui-button type="button" class="middle-panel" ng-disabled="disabled" ng-click="generateActivationCode()" style="margin-left: -65px"><proteo-ui-text translate="RETAIL_CREDENTIALS_PUBLIC_COMMON_SUBMIT"></proteo-ui-text></proteo-ui-button></div></div><proteo-ui-text paragraph="true" class="md-padding-left md-paddint-right"><span translate="RETAIL_CREDENTIALS_PUBLIC_LOGON_ENTERACTIVATIONCODE_COLLAPSE_TEXT_01"></span> <span translate="RETAIL_CREDENTIALS_PUBLIC_LOGON_ENTERACTIVATIONCODE_COLLAPSE_TEXT_02"></span></proteo-ui-text></proteo-ui-simple-collapse></div><proteo-ui-thematic-break></proteo-ui-thematic-break><div class="col-xs-12"><proteo-ui-link class="pull-left" ng-click="cancel()"><proteo-ui-icon icon="cancel"></proteo-ui-icon><proteo-ui-text translate="RETAIL_CREDENTIALS_PUBLIC_COMMON_CANCEL"></proteo-ui-text></proteo-ui-link><proteo-ui-button class="btn md-btn pull-right" ng-disabled="disabled" type="submit"><proteo-ui-text translate="RETAIL_CREDENTIALS_PUBLIC_COMMON_ACTIVATE"></proteo-ui-text></proteo-ui-button></div></div></form></div></div><div ng-include="\'/spasR46hfback/credentialsPublic/components/credentials-public/log-on/sca-modals/sca-modals-tpl.html\'"></div>')
}
]),
function() {
    "use strict";
    angular.module("App.logOn").factory("captchaFactory", ["proteoUiCaptchaService", "$log", function(a, b) {
        var c = {};
        return c.captcha = !1,
        c.captchaEnabled = !0,
        c.captchaShow = !1,
        c.response = null,
        c.widgetId = null,
        c.model = {
            key: "6LdE6aoUAAAAAM3z_ScNVVK31B3mmAFFX-ZvQcVb"
        },
        c.setResponse = function(a) {
            b.debug("Captcha - Response available"),
            c.response = a
        }
        ,
        c.setWidgetId = function(a) {
            b.debug("Captcha - Created widget ID"),
            c.widgetId = a
        }
        ,
        c.cbExpiration = function() {
            b.debug("Captcha expired. Resetting response object"),
            a.reload(c.widgetId),
            c.response = null
        }
        ,
        c.addCaptchaToRequest = function(a) {
            c.captchaEnabled && c.captcha && (angular.isDefined(a) && null != c.response ? angular.extend(a, {
                captchaResponse: c.response
            }) : b.error("Captcha - Error"))
        }
        ,
        c.captchaErrorHandler = function() {
            c.captchaEnabled && c.captcha && null !== c.widgetId && a.reload(c.widgetId)
        }
        ,
        c
    }
    ])
}(),
function() {
    "use strict";
    angular.module("App.logOn").directive("autofocus", ["$timeout", function(a) {
        return {
            restrict: "A",
            link: function(b, c) {
                a(function() {
                    c[0].focus()
                })
            }
        }
    }
    ])
}(),
function() {
    "use strict";
    angular.module("App.logOn").factory("logOnEnrollmentFactory", ["$state", "scaEnrollmentFunctionsFactory", "logOnFactory", "$filter", "DataLayerProvider", "tsbJournalService", "captureQuestionsService", function(a, b, c, d, e, f, g) {
        function h(a) {
            return angular.isDefined(a) && null !== a ? angular.isDefined(a.tokenId) && null !== a.tokenId && a.tokenId.length > 0 ? a.tokenId : !angular.isDefined(a.tokenId) || angular.isDefined(a.tokenId) && null === a.tokenId || 0 === a.tokenId.length ? "" : null : null
        }
        function i(a) {
            var b = ""
              , c = "";
            switch (a.code) {
            case "9210358":
                b = a.code + ": " + a.description;
                break;
            case "ERR61":
                b = a.code + ": " + a.description;
                break;
            case "ERR244":
            case "ERR225":
                c = !0,
                b = a.code + ": " + a.description;
                break;
            default:
                b = a.description
            }
            return e.sendError({
                message: a.description,
                code: a && a.code ? a.code : "",
                type: e.errorType.WARNING
            }),
            {
                fraudError: c,
                exceptionLiteral: b
            }
        }
        var j = d("translate")
          , k = {};
        return k.scaMode = !1,
        k.scaUserPiloted = !1,
        k.ENR_MODE = 1,
        k.PASSMI_SCREEN = 0,
        k.OTP_OK_SCREEN = 1,
        k.MODAL_CONFIRM = 2,
        k.PASSWORD_OTP_SCREEN = 3,
        k.CAPTURE_MEMORABLE_SCREEN = 4,
        k.FTL = 4,
        k.CAPTURE_MEMORABLE_SCREEN2 = 5,
        k.LOGIN_ERROR_MODAL = 10,
        k.DEVICE_MODAL = 11,
        k.ERR_BLOCKED_ATTEMPTS_RESET = "ERR390",
        k.ERR_BLOCKED_ATTEMPTS = "ERR61",
        k.ERR_BLOCKED_OTHER = "ERRSCA01",
        k.ERR_BLOCKED_FRAUD = "ERR244",
        k.ERR_REQ20 = "FR025",
        k.ERR_NO_USER = "ERR19",
        k.ERR_INCORECT_USER = "ERR1245",
        k.ERR_PASS_MI_NOT_MATCH = "ERRSCA03",
        k.ERR_PASS_MI_NOT_MATCH_FIRSTATTEMPT = "ERRSCA03B",
        k.ERR_PASS_MI_NOT_WORK = "ERRSCA05",
        k.ERR_PASS_MI_BLOCKED = "ERRSCA04",
        k.ERR_USER_CAPTCHA = "ERRSCA02B",
        k.ERR_USER_CAPTCHA_PERSNOL = "ERRSCA02B1245",
        k.ERR_CAPTURE_MEMORABLE_ERROR = "ERRSCA05",
        k.USER_NOT_QUESTIONS = "ERR1218",
        k.ERR_ACT_NOT_MATCH_FA = "ERRSCAFTL03B",
        k.ERR_ACT_NOT_MATCH = "ERRSCAFTL03",
        k.ERR_ACT_NOT_MATCH_LA = "ERRSCAFTL04",
        k.ERR_OTP_NOT_MATCH_FA = "ERRSCAFTL05B",
        k.ERR_OTP_NOT_MATCH = "ERRSCAFTL05",
        k.ERR_OTP_NOT_MATCH_LA = "ERRSCAFTL06",
        k.data = {},
        k.userID = null,
        k.b64data = "aW5jcmVtZW50YXJTZWd1cmlkYWRVcmw",
        k.getUserId = function() {
            return k.userID
        }
        ,
        k.setUserId = function(a) {
            k.userID = a
        }
        ,
        k.getData = function(a) {
            return k.data[a] || void 0
        }
        ,
        k.setData = function(a, b) {
            k.data[a] = angular.copy(b)
        }
        ,
        k.setScaMode = function(a) {
            k.scaMode = a,
            e.scaMode = k.scaMode
        }
        ,
        k.getScaMode = function() {
            return k.scaMode
        }
        ,
        k.setScaUserPiloted = function(a) {
            k.scaUserPiloted = a
        }
        ,
        k.getScaUserPiloted = function() {
            return k.scaUserPiloted
        }
        ,
        k.getValidateQuestions = function() {
            return k.questions
        }
        ,
        k.setValidateQuestions = function(a) {
            k.questions = a
        }
        ,
        k.validateQuestions = function() {
            return k.questions
        }
        ,
        k.getQuestions = function() {
            return k.questions
        }
        ,
        k.getAllQuestions = function() {
            var b = {
                userId: c.getUserId()
            };
            g.serviceCallgetAllQuestions(b).then(function(c) {
                k.setValidateQuestions(c.questions),
                a.go("captureQuestions", b)
            }, function(b) {
                f.newOperation();
                var c = {
                    template: "technicalError",
                    title: "COMMON_GLOBALERROR_TITLE",
                    backMessage: !1,
                    backLink: !1,
                    linkState: "login",
                    technicalMessage: b,
                    hideBackLinkButton: !1,
                    linkText: "COMMON_GLOBALERROR_LOG_BACK_ACCOUNTS",
                    goBackState: "login"
                };
                a.go("globalErrorPage", c)
            })
        }
        ,
        k.getUserQuestions = function(b, d) {
            b.buttonDisabled = !0;
            var e = {
                userId: c.getUserId()
            };
            g.serviceCall(e).then(function(a) {
                angular.isDefined(a.returnCode) && a.returnCode === k.USER_NOT_QUESTIONS ? (c.setTokenId(d),
                k.getAllQuestions()) : (f.newOperation(),
                c.createCookie(d))
            }, function(b) {
                f.newOperation();
                var c = {
                    template: "technicalError",
                    title: "COMMON_GLOBALERROR_TITLE",
                    goBackState: "login",
                    backMessage: !1,
                    backLink: !1,
                    linkState: "login",
                    technicalMessage: angular.isDefined(b.exception) && angular.isDefined(b.exception.description) ? b.exception.description : "COMMON_MG_SYSTEM_ERROR",
                    hideBackLinkButton: !1,
                    linkText: "COMMON_GLOBALERROR_LOG_BACK_ACCOUNTS"
                };
                a.go("globalErrorPage", c)
            })
        }
        ,
        k.enrollmentHandler = function(d, g, i, l) {
            var m;
            switch (i) {
            case k.PASSMI_SCREEN:
                if (m = h(d),
                null === m) {
                    k.enrollmentError();
                    break
                }
                if (0 === m.length && 1 === k.ENR_MODE || 2 === k.ENR_MODE) {
                    var n = {
                        userId: g.userID,
                        server: c.getServer()
                    };
                    a.go("scaEnrollmentOtp", {
                        data: n
                    })
                } else
                    m.length > 0 ? (f.newOperation(),
                    c.createCookieAux(m),
                    k.getUserQuestions(g, m)) : k.enrollmentError();
                break;
            case k.OTP_OK_SCREEN:
                m = h(d),
                null !== m && m.length > 0 && (c.setTokenId(m),
                k.openModalDevice(g, i));
                break;
            case k.CAPTURE_MEMORABLE_SCREEN:
                k.openModalDevice(g, i);
                break;
            case k.MODAL_CONFIRM:
                var o = {
                    userID: c.getUserId()
                };
                angular.isDefined(l) && l ? (c.createCookieAux(c.getTokenId()),
                b.enrollmentProcess(o, function() {
                    f.newOperation(),
                    k.getUserQuestions(g, c.getTokenId())
                }, function(b) {
                    f.newOperation(),
                    angular.isDefined(b) && angular.isDefined(b.exception) && b.exception.code === k.ERR_BLOCKED_FRAUD ? (g.fraudError = !0,
                    e.sendError({
                        message: k.getErrorMessage(b, !0),
                        code: b && b.exception && b.exception.code ? b.exception.code : "",
                        type: e.errorType.WARNING
                    }),
                    a.go("login", {
                        fraudError: g.fraudError,
                        exceptionLiteral: k.getErrorMessage(b, !0, j("COMMON_ENROLLMENT_FRAUD_ERR244"))
                    })) : angular.isDefined(b) && angular.isDefined(b.exception) && b.exception.code === k.ERR_REQ20 ? (g.fraudError = !0,
                    a.go("login", {
                        fraudError: g.fraudError,
                        exceptionLiteral: k.getErrorMessage(b, !0, j("COMMON_ENROLLMENT_THREAMETRIX_ERROR"))
                    })) : k.enrollmentError()
                })) : (f.newOperation(),
                c.createCookieAux(c.getTokenId()),
                k.getUserQuestions(g, c.getTokenId()))
            }
        }
        ,
        k.setCookie = function(a) {
            c.setServerFromResponse(a),
            angular.isDefined(a) && a.tokenId && (c.createFtlLoginCookie(a.tokenId),
            c.setTokenId(a.tokenId))
        }
        ,
        k.getFingerprint = function() {
            return b.getFingerprint()
        }
        ,
        k.enrollmentError = function(b) {
            f.newOperation();
            var c = {
                template: "technicalError",
                goBackState: "login",
                title: "COMMON_GLOBALERROR_TITLE_SP",
                backMessage: !1,
                backLink: !1,
                message: "ENROLLMENT_GLOBAL_ERROR",
                linkText: "COMMON_GLOBALERROR_BACK_TO_BANK_SP",
                linkState: "login",
                hideBackLinkButton: !1
            };
            a.go("globalErrorPage", c)
        }
        ,
        k.errorLogin = function(b, c, d) {
            if (b.exception && b.exception.code)
                if (d) {
                    var e = i(b.exception);
                    c.exceptionLiteral = e.exceptionLiteral,
                    c.fraudError = e.fraudError
                } else {
                    f.newOperation();
                    var g = i(b.exception);
                    a.go("login", {
                        exceptionLiteral: g.exceptionLiteral,
                        fraudError: g.fraudError
                    })
                }
            else
                c.exceptionLiteral = j("RETAIL_CREDENTIALS_PUBLIC_LOGON_LOGIN_LOGINERROR")
        }
        ,
        k.errorMI = function(b, c) {
            c.buttonDisabled = !1,
            c.reEnterMemorable = !0,
            c.attemptsMI++;
            var d = angular.isDefined(b) && angular.isDefined(b.exception) && "010" !== b.exception.code && angular.isDefined(b.exception.description) ? b.exception.code + ": " + b.exception.description : j("COMMON_MG_SYSTEM_ERROR");
            angular.isDefined(b.exception) && "8000067" !== b.exception.code ? (c.attemptsMI > 5 && (f.newOperation(),
            c.scaUserPiloted ? a.go("globalErrorPage", {
                template: "passwordAttemptsExceed",
                title: "There's a problem...",
                message: "COMMON_GLOBALERROR_TEXT_ERROR_GENERAL_SP",
                backMessage: "COMMON_GLOBALERROR_BACK_TO_BANK_SP",
                bankName: "tsb.co.uk",
                messageLinkState: "credentialsPublic.enterCustomerIdData",
                messageLink: "COMMON_GLOBALERROR_UNLOCK",
                hideBackLinkButton: !1,
                goBackState: "login"
            }) : a.go("login", {
                exceptionLiteral: c.exceptionLiteral
            })),
            c.exceptionLiteral = d,
            c.passViewOnly && k.scaUserPiloted && (c.passViewOnly = !1,
            c.data.password = "")) : (f.newOperation(),
            a.go("globalErrorPage", {
                template: "passwordAttemptsExceed",
                title: "There's a problem...",
                message: "COMMON_GLOBALERROR_TEXT_ERROR_GENERAL_SP",
                backMessage: "COMMON_GLOBALERROR_BACK_TO_BANK_SP",
                bankName: "tsb.co.uk",
                messageLinkState: "credentialsPublic.enterCustomerIdData",
                messageLink: "COMMON_GLOBALERROR_UNLOCK",
                goBackState: "login",
                hideBackLinkButton: !1
            }),
            c.exceptionLiteral = d)
        }
        ,
        k.enrollmentErrorHandler = function(b, d, g, h) {
            if (d.errorRemainingAttempts = null,
            angular.isDefined(b) && angular.isDefined(b.exception)) {
                if (k.scaMode && !k.scaUserPiloted)
                    "9210358" === b.exception.code || "ERR244" === b.exception.code || "ERR225" === b.exception.code || "ERR61" === b.exception.code ? k.errorLogin(b, d, h) : (d.passViewOnly = !0,
                    k.errorMI(b, d));
                else if (k.scaMode && k.scaUserPiloted)
                    if (b.exception.code === k.ERR_PASS_MI_NOT_MATCH)
                        d.errorRemainingAttempts = b.exception.description,
                        d.userID = c.getUserId(),
                        k.openModalError(d, g),
                        e.sendError({
                            message: d.errorRemainingAttempts,
                            code: b && b.exception && b.exception.code ? b.exception.code : "",
                            type: e.errorType.POPUP
                        });
                    else if (b.exception.code === k.ERR_ACT_NOT_MATCH_FA || b.exception.code === k.ERR_ACT_NOT_MATCH)
                        console.log("exception ", b.exception.description),
                        d.errorRemainingAttempts = b.exception.description,
                        d.userID = c.getUserId(),
                        d.isActivation = "true",
                        k.openModalError(d, g),
                        e.sendError({
                            message: b && b.exception && b.exception.description ? b.exception.description : "",
                            code: b && b.exception && b.exception.code ? b.exception.code : "",
                            type: e.errorType.POPUP
                        });
                    else if (b.exception.code === k.ERR_OTP_NOT_MATCH_FA || b.exception.code === k.ERR_OTP_NOT_MATCH)
                        d.errorRemainingAttempts = b.exception.description,
                        d.userID = c.getUserId(),
                        d.firstLoginOtpFlow = "true",
                        k.openModalError(d, g),
                        e.sendError({
                            message: b && b.exception && b.exception.description ? b.exception.description : "",
                            code: b && b.exception && b.exception.code ? b.exception.code : "",
                            type: e.errorType.POPUP
                        });
                    else if (b.exception.code === k.ERR_ACT_NOT_MATCH_LA || b.exception.code === k.ERR_OTP_NOT_MATCH_LA)
                        d.errorRemainingAttempts = "",
                        d.userID = c.getUserId(),
                        d.lastAttemptFlow = "true",
                        k.openModalError(d, g),
                        e.sendError({
                            message: b && b.exception && b.exception.description ? b.exception.description : "",
                            code: b && b.exception && b.exception.code ? b.exception.code : "",
                            type: e.errorType.POPUP
                        });
                    else if (b.exception.code === k.ERR_PASS_MI_NOT_MATCH_FIRSTATTEMPT)
                        d.errorRemainingAttempts = "",
                        d.userID = c.getUserId(),
                        k.openModalError(d, g),
                        e.sendError({
                            message: b && b.exception && b.exception.description ? b.exception.description : "",
                            code: b && b.exception && b.exception.code ? b.exception.code : "",
                            type: e.errorType.POPUP
                        });
                    else if (b.exception.code === k.ERR_PASS_MI_NOT_WORK) {
                        var i = angular.isDefined(b) && angular.isDefined(b.exception) && angular.isDefined(b.exception.description) ? b.exception.code + ": " + b.exception.description : j("COMMON_MG_SYSTEM_ERROR");
                        d.exceptionLiteral = i,
                        d.userID = c.getUserId(),
                        e.sendError({
                            message: d.exceptionLiteral,
                            code: b && b.exception && b.exception.code ? b.exception.code : "",
                            type: e.errorType.POPUP
                        })
                    } else
                        b.exception.code === k.ERR_PASS_MI_BLOCKED ? (f.newOperation(),
                        a.go("globalErrorPage", {
                            template: "scaCredentialsAttemptsExceed",
                            title: "COMMON_GLOBALERROR_TITLE_LOGIN_ATTEMPTS_EXCEEDED",
                            message: "COMMON_GLOBALERROR_TEXT_CREDENTIAL_ATTEMPTS_EXCEEDED",
                            backMessage: "COMMON_GLOBALERROR_BACK_TO_BANK_SP",
                            bankName: "tsb.co.uk",
                            messageLinkState: "credentialsPublic.enterCustomerIdData",
                            goBackState: "login",
                            messageLink: "COMMON_GLOBALERROR_BUTTON_RESET",
                            hideBackLinkButton: !1
                        }),
                        e.sendError({
                            message: j("COMMON_GLOBALERROR_TEXT_CREDENTIAL_ATTEMPTS_EXCEEDED"),
                            code: b && b.exception && b.exception.code ? b.exception.code : "",
                            type: e.errorType.ERROR_PAGE
                        })) : b.exception.code === k.ERR_BLOCKED_FRAUD ? (f.newOperation(),
                        e.sendError({
                            message: k.getErrorMessage(b, !0),
                            code: b && b.exception && b.exception.code ? b.exception.code : "",
                            type: e.errorType.ERROR_PAGE
                        }),
                        d.fraudError = !0,
                        a.go("login", {
                            fraudError: d.fraudError,
                            exceptionLiteral: k.getErrorMessage(b, !0, j("COMMON_ENROLLMENT_FRAUD_ERR244"))
                        })) : b.exception.code === k.ERR_REQ20 ? (f.newOperation(),
                        e.sendError({
                            message: k.getErrorMessage(b, !0, j("COMMON_ENROLLMENT_THREAMETRIX_ERROR")),
                            code: b && b.exception && b.exception.code ? b.exception.code : "",
                            type: e.errorType.ERROR_PAGE
                        }),
                        d.fraudError = !0,
                        a.go("login", {
                            fraudError: d.fraudError,
                            exceptionLiteral: k.getErrorMessage(b, !0, j("COMMON_ENROLLMENT_THREAMETRIX_ERROR"))
                        })) : (d.exceptionLiteral = k.getErrorMessage(b, !0),
                        e.sendError({
                            message: d.exceptionLiteral,
                            code: b && b.exception && b.exception.code ? b.exception.code : "",
                            type: e.errorType.WARNING
                        }))
            } else
                d.exceptionLiteral = k.getErrorMessage(b, !0),
                e.sendError({
                    message: d.exceptionLiteral,
                    code: b && b.exception && b.exception.code ? b.exception.code : "",
                    type: e.errorType.WARNING
                })
        }
        ,
        k.openModalError = function(a, b) {
            a.$broadcast("openModalPanel", {
                modal: k.LOGIN_ERROR_MODAL,
                step: b
            })
        }
        ,
        k.openModalDevice = function(a, b) {
            a.$broadcast("openModalPanel", {
                modal: k.DEVICE_MODAL,
                step: b
            })
        }
        ,
        k.getErrorMessage = function(a, b, c) {
            var d = angular.isDefined(c) ? c : j("COMMON_MG_SYSTEM_ERROR")
              , e = angular.isDefined(a) && angular.isDefined(a.exception) && angular.isDefined(a.exception.code)
              , f = e && angular.isDefined(a.exception.description) && "" !== a.exception.description;
            return f && a.exception.code.indexOf("ERR") > -1 && "ERRSCA02B" !== a.exception.code && "ERR19" !== a.exception.code && "ERR244" !== a.exception.code && "ERRSCA02B1245" !== a.exception.code && "ERR1245" !== a.exception.code ? b ? a.exception.code + ": " + a.exception.description : a.exception.description : (!e || "010" !== a.exception.code && "-1" !== a.exception.code) && e ? d : d
        }
        ,
        k
    }
    ])
}(),
function() {
    "use strict";
    angular.module("App.logOn").factory("logOnFactory", ["$cookies", "$http", "serviceTrackingId", "$rootScope", "APP_CONFIG", "$state", "$timeout", "$filter", function(a, b, c, d, e, f, g, h) {
        var i = {};
        return i.secureGateway = function(g, h, j) {
            a.remove("unread-messages", {
                path: "/"
            }),
            h = h || {};
            var k = {
                "HEADER.APPLICATIONID": e.APP_ID,
                "HEADER.TRACKING_ID": c.createUuid(),
                "HEADER.SERVICE_LANGUAGE": d.language.lang,
                "HEADER.SERVICE_COUNTRY": d.language.country,
                "HEADER.SERVICE_CHANNEL": e.Channel,
                "HEADER.SERVICE_PROCEDENCE": e.Procedence,
                BzWCQCsViVVZnq91L03: j
            };
            i.clearInboxCookies(),
            b({
                method: "GET",
                url: "/api-assured/login",
                headers: k
            }).then(function() {
                f.go(g, h)
            }, function() {
                f.go(g, h)
            })
        }
        ,
        i.setAuthId = function(a) {
            this.authId = a
        }
        ,
        i.getAuthId = function() {
            return this.authId
        }
        ,
        i.setIsTrusted = function(a) {
            this.trusted = a
        }
        ,
        i.isTrusted = function() {
            return this.trusted ? !0 : !1
        }
        ,
        i.setFirstLogin = function(a) {
            this.firstLogin = a
        }
        ,
        i.getFirstLogin = function() {
            return this.firstLogin ? !0 : !1
        }
        ,
        i.setFirstLoginCode = function(a) {
            this.firstLoginCode = a
        }
        ,
        i.getFirstLoginCode = function() {
            return this.firstLoginCode
        }
        ,
        i.setUserId = function(a) {
            this.userId = a
        }
        ,
        i.getUserId = function() {
            return this.userId
        }
        ,
        i.getChannel = function() {
            return this.channel
        }
        ,
        i.setChannel = function(a) {
            this.channel = a
        }
        ,
        i.setTokenId = function(a) {
            this.tokenId = a
        }
        ,
        i.getTokenId = function() {
            return this.tokenId
        }
        ,
        i.setServer = function(a) {
            this.server = a
        }
        ,
        i.setServerFromResponse = function(a) {
            angular.isDefined(a) && angular.isDefined(a.server) && (this.server = a.server)
        }
        ,
        i.getServer = function() {
            return this.server
        }
        ,
        i.resetTimeout = function() {
            null !== i.timeoutPromise && g.cancel(i.timeoutPromise)
        }
        ,
        i.timeoutPromise = null,
        i.createFtlLoginCookie = function(b) {
            i.clearCookies(),
            a.put("ssotoken", b, {
                path: "/"
            }),
            a.put("BzWCQCsViVVZnq91L03", b, {
                path: "/"
            })
        }
        ,
        i.createCookie = function(b, c, d) {
            var e = c || "holdingList.holdingList";
            d = d || null;
            var f = a.get("apiLoanData");
            f && (e = "onlineSalesProcesses.LOAN.private.apply");
            var g = a.get("ccAggrData");
            if (g && "null" != g)
                try {
                    var h = JSON.parse(g);
                    Object.keys(h).length && h.cardType && (e = "onlineSalesProcesses.CARD.private." + h.cardType + "?fd=" + h.fd)
                } catch (j) {
                    console.log(j)
                }
            var k = a.getObject("ccSftSerData");
            k && "null" != k && (e = "onlineSalesProcesses.CARD.private.apply"),
            i.clearCookies(),
            a.put("ssotoken", b, {
                path: "/"
            }),
            a.put("BzWCQCsViVVZnq91L03", b, {
                path: "/"
            }),
            this.secureGateway(e, d, b)
        }
        ,
        i.createCookieAux = function(b) {
            i.clearCookies(),
            a.put("ssotoken", b, {
                path: "/"
            }),
            a.put("BzWCQCsViVVZnq91L03", b, {
                path: "/"
            })
        }
        ,
        i.clearCookies = function() {
            a.remove("ssotoken", {
                path: "/"
            }),
            a.remove("BzWCQCsViVVZnq91L03", {
                path: "/"
            }),
            a.remove("moreThan18", {
                path: "/"
            })
        }
        ,
        i.clearInboxCookies = function() {
            a.remove("SESSION", {
                path: "/"
            }),
            a.remove("XSRF-TOKEN", {
                path: "/",
                domain: ".uk.tsb"
            }),
            a.remove("XSRF-TOKEN", {
                path: "/",
                domain: ".tsb.co.uk"
            })
        }
        ,
        i.getDefaultHeader = function() {
            var a = {
                "HEADER.USER.PROCEDENCE": "WR01"
            };
            return a
        }
        ,
        i
    }
    ])
}(),
function() {
    "use strict";
    function a(a, b, c, d) {
        function e(a, d, e) {
            function f(a) {
                h.reject(a)
            }
            function g(a) {
                h.resolve(a)
            }
            var h = c.defer()
              , i = angular.extend({}, d)
              , j = angular.extend({}, a);
            return b.error(f),
            b.invoke({
                service: e,
                headers: i,
                callback: g,
                fail: f,
                data: j
            }),
            h.promise
        }
        function f(b) {
            return e(b, {}, a.checkUseSca)
        }
        var g = {};
        return g.isPilotScaEnabled = function() {
            return f().then(function(a) {
                return angular.isDefined(a) && angular.isDefined(a.useSca) ? angular.isDefined(a) && angular.isDefined(a.useSca) && a.useSca ? !0 : !1 : null
            })["catch"](function(a) {
                return d.newOperation(),
                null
            })
        }
        ,
        g
    }
    a.$inject = ["PILOTSCA_WEBADAPTER", "proteocanalinvokerServices", "$q", "tsbJournalService"],
    angular.module("App.logOn").factory("ScaPilotProvider", a)
}(),
function() {
    "use strict";
    angular.module("App.login").controller("loginController", ["$scope", "$state", "$filter", "$cookies", "$location", "genericFunctions", "loginService", "logOnFactory", "versionService", "logOnEnrollmentFactory", "captchaFactory", "tsbJournalService", "DataLayerProvider", "scaEnrollmentFunctionsFactory", "ENVIRONMENT_URL", function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o) {
        function p() {
            h.resetTimeout(),
            null === j.scaMode && (b.params.exceptionLiteral = y("COMMON_MG_SYSTEM_ERROR"),
            j.scaMode = !1),
            a.scaMode = j.scaMode,
            j.scaMode && n.loadFingerprintSca(),
            a.captchaFactory = k,
            a.data = {
                userId: d.get("54b28ba495d07020391") || null,
                password: null,
                rememberID: d.get("54b28ba495d07020391") ? !0 : !1
            },
            a.fraudError = b.params.fraudError,
            a.exceptionLiteral = b.params.exceptionLiteral,
            a.existUserRegistrationError = b.params.existUserRegistrationError,
            m.scaMode = j.scaMode,
            m.updateScaDataLayer("validateUser"),
            JSM._dataLayerSPAReady()
        }
        function q() {
            i.success(function(b) {
                void 0 !== b && angular.isDefined(b.version) && (a.version = b.version)
            })
        }
        function r(a) {
            var b = new Date;
            b.setYear(9999),
            d.put("54b28ba495d07020391", a, {
                expires: b
            })
        }
        function s() {
            d.get("54b28ba495d07020391") == a.data.userId && d.remove("54b28ba495d07020391")
        }
        function t() {
            var b = {
                login: a.data.userId,
                password: a.data.password
            };
            g.login(b).then(function(b) {
                b.isSuccessful ? (h.setServerFromResponse(b),
                x(b),
                1 == a.data.rememberID ? r(a.data.userId) : s()) : a.exceptionLiteral = y("RETAIL_CREDENTIALS_PUBLIC_LOGON_LOGIN_LOGINERROR")
            }, function(b) {
                j.errorLogin(b, a, !0)
            })
        }
        function u() {
            var b = {
                login: a.data.userId
            };
            a.captchaFactory && k.addCaptchaToRequest(b),
            g.validateUser(b).then(function(b) {
                a.captchaFactory.captchaShow = !1,
                b.isSuccessful ? (b.trusted && h.setIsTrusted(b.trusted),
                b.firstLogin && h.setFirstLogin(b.firstLogin),
                h.setServerFromResponse(b),
                angular.isDefined(b.sca) && (j.setScaMode(!0),
                b.sca ? j.setScaUserPiloted(!0) : j.setScaUserPiloted(!1)),
                w(b),
                1 == a.data.rememberID ? r(a.data.userId) : s(),
                h.setUserId(a.data.userId)) : (a.data.userId = "",
                a.exceptionLiteral = y("RETAIL_CREDENTIALS_PUBLIC_LOGON_LOGIN_LOGINERROR"),
                v(),
                m.sendError({
                    message: a.exceptionLiteral,
                    code: "W1",
                    type: m.errorType.WARNING
                }))
            }, function(b) {
                l.newOperation(),
                a.captchaFactory.captchaShow = !1;
                var c = null;
                switch (angular.isDefined(b) && angular.isDefined(b.exception) && (c = b.exception.code),
                a.bloqued = !1,
                c) {
                case j.ERR_BLOCKED_ATTEMPTS_RESET:
                    a.bloqued = !0;
                    break;
                case j.ERR_BLOCKED_ATTEMPTS:
                case j.ERR_BLOCKED_OTHER:
                    a.exceptionLiteral = j.getErrorMessage(b, !1, y("RETAIL_CREDENTIALS_PUBLIC_LOGON_LOGIN_LOGINERROR"));
                    break;
                case j.ERR_NO_USER:
                    v(),
                    a.exceptionLiteral = j.getErrorMessage(b, !1, y("RETAIL_CREDENTIALS_PUBLIC_LOGON_LOGIN_LOGINERROR"));
                    break;
                case j.ERR_INCORECT_USER:
                    v(),
                    a.exceptionLiteral = j.getErrorMessage(b, !1, y("RETAIL_CREDENTIALS_PUBLIC_LOGON_LOGIN_LOGINERROR_3"));
                    break;
                case j.ERR_USER_CAPTCHA:
                    a.captchaFactory.captchaShow = !0,
                    v(),
                    a.exceptionLiteral = j.getErrorMessage(b, !1, y("RETAIL_CREDENTIALS_PUBLIC_LOGON_LOGIN_LOGINERROR"));
                    break;
                case j.ERR_USER_CAPTCHA_PERSNOL:
                    a.captchaFactory.captchaShow = !0,
                    v(),
                    a.exceptionLiteral = j.getErrorMessage(b, !1, y("RETAIL_CREDENTIALS_PUBLIC_LOGON_LOGIN_LOGINERROR_3"));
                    break;
                case j.ERR_BLOCKED_FRAUD:
                    a.exceptionLiteral = j.getErrorMessage(b, !0, y("COMMON_ENROLLMENT_FRAUD_ERR244")),
                    a.fraudError = !0;
                    break;
                default:
                    v(),
                    a.exceptionLiteral = j.getErrorMessage(b, !0, y("COMMON_MG_SYSTEM_ERROR"))
                }
                k.captchaErrorHandler(b),
                m.sendError({
                    message: j.getErrorMessage(b, !1, y("COMMON_MG_SYSTEM_ERROR")),
                    code: b && b.exception && b.exception.code ? b.exception.code : "",
                    type: m.errorType.WARNING
                })
            })
        }
        function v() {
            a.captchaFactory.captcha = !0,
            k.captchaErrorHandler()
        }
        function w(c) {
            h.setAuthId(c.authId);
            var d = null
              , e = {
                authId: c.authId,
                server: c.server
            }
              , f = "web";
            if (c.firstLogin)
                switch (h.setFirstLoginCode(c.firstLoginCode),
                c.firstLoginCode) {
                case 1:
                case 2:
                    d = "capturePassword",
                    angular.extend(e, {
                        firstTimeLogin: !0,
                        userId: a.data.userId
                    });
                    break;
                case 3:
                    d = "capturePasswordAndOTP",
                    f = "branch",
                    angular.extend(e, {
                        firstTimeLogin: !0,
                        userId: a.data.userId
                    })
                }
            else
                d = "memorableInformation",
                angular.extend(e, {
                    memorableInfoPositions: c.memorableInfoPositions,
                    userId: a.data.userId
                });
            h.setChannel(f),
            d ? (j.setData("MI_DATA", {
                data: e,
                channel: f
            }),
            b.go(d, {
                data: e,
                channel: f
            })) : a.exceptionLiteral = y("COMMON_MG_SYSTEM_ERROR")
        }
        function x(c) {
            h.setAuthId(c.authId);
            var d = null
              , e = {
                authId: c.authId,
                server: c.server
            }
              , f = "web";
            if (c.firstLogin)
                switch (h.setFirstLoginCode(c.firstLoginCode),
                c.firstLoginCode) {
                case 1:
                    d = "enterActivationCode",
                    angular.extend(e, {
                        userId: a.data.userId
                    });
                    break;
                case 2:
                    d = "captureMemorableInformation",
                    angular.extend(e, {
                        userId: a.data.userId
                    });
                    break;
                case 3:
                    d = "changePassword",
                    f = "branch",
                    angular.extend(e, {
                        firstTimeLogin: !0,
                        userId: a.data.userId
                    })
                }
            else
                d = "memorableInformation",
                angular.extend(e, {
                    memorableInfoPositions: c.memorableInfoPositions,
                    userId: a.data.userId
                }),
                j.setUserId(a.data.userId);
            d ? (j.setData("MI_DATA", {
                data: e,
                channel: f
            }),
            b.go(d, {
                data: e,
                channel: f
            })) : a.exceptionLiteral = y("COMMON_MG_SYSTEM_ERROR")
        }
        var y = c("translate");
        a.attemptsUserId = 0;
        var z = JSM.getSpaParameters() || null;
        a.blockUser = z ? z.blockUser : null,
        a.gotoPublicTsb = function() {
            f.goToInternalURL("/personal", "_self", "", !1, "public")
        }
        ,
        a.removeExceptionLiteral = function() {
            a.exceptionLiteral = null
        }
        ,
        a.version = "No Info",
        q(),
        a.submit = function(b) {
            a.fraudError = !1,
            b.$valid && (a.exceptionLiteral = null,
            null !== j.scaMode && j.scaMode ? u() : null !== j.scaMode ? t() : a.exceptionLiteral = y("COMMON_MG_SYSTEM_ERROR"))
        }
        ,
        a.deRegistration = function() {
            var c = {
                userId: a.data.userId
            };
            b.go("registration", c)
        }
        ;
        var A = e.host();
        console.log("host url", A),
        "online.int.uk.tsb" === A || "int.uk.tsb" === A ? a.bizLink = o["int"] + "businessbanking/business/logon/login/#/login " : "acc.uk.tsb" === A ? a.bizLink = o.acc + "businessbanking/business/logon/login/#/login " : a.bizLink = o.prodbiz + "business/logon/login/#/login",
        p()
    }
    ])
}(),
function() {
    "use strict";
    angular.module("App.login").factory("loginService", ["$log", "$q", "proteocanalinvokerServices", "LOGIN_WEBADAPTER", "logOnFactory", "scaEnrollmentFunctionsFactory", function(a, b, c, d, e, f) {
        function g(a, d, e) {
            function f(a) {
                h.resolve(a)
            }
            function g(a) {
                h.reject(a)
            }
            var h = b.defer()
              , i = angular.extend({}, a)
              , j = angular.extend({}, d);
            return c.error(g),
            c.invoke({
                service: e,
                headers: j,
                callback: f,
                fail: g,
                data: i
            }),
            h.promise
        }
        var h = {};
        return h.login = function(a) {
            var b = {
                "HEADER.USER.PROCEDENCE": "WR01",
                "HEADER.SERVICE_SCOPE": "PUBLIC"
            };
            return null !== f.getHeader() && angular.extend(b, f.headers, e.getDefaultHeader()),
            g(a, b, d.login)
        }
        ,
        h.validateUser = function(a) {
            var b = {
                "HEADER.USER.PROCEDENCE": "WR01",
                "HEADER.SERVICE_SCOPE": "PUBLIC"
            };
            return null !== f.getHeader() && angular.extend(b, f.headers, e.getDefaultHeader()),
            g(a, b, d.validateUser)
        }
        ,
        h
    }
    ])
}(),
function() {
    "use strict";
    angular.module("App.login").config(["$stateProvider", function(a) {
        a.state("login", {
            url: "/login",
            templateUrl: "/spasR46hfback/credentialsPublic/components/credentials-public/log-on/login/login-tpl.html",
            controller: "loginController",
            params: {
                fraudError: !1,
                exceptionLiteral: null,
                existUserRegistrationError: !1
            },
            resolve: {
                ScaPilotProvider: function() {
                    return !0
                },
                Init: ["ScaPilotProvider", "logOnEnrollmentFactory", function(a, b) {
                    null !== a && a ? b.scaMode = !0 : null !== a ? b.scaMode = !1 : b.scaMode = null
                }
                ],
                Consultive: ["ScaPilotProvider", "Init", "ConsultiveProvider", function(a, b, c) {
                    return null !== a && a ? c.validateOperation("loginSca") : c.validateOperation("login")
                }
                ]
            }
        })
    }
    ])
}(),
angular.module("App.login.templates", ["/spasR46hfback/credentialsPublic/components/credentials-public/log-on/login/login-tpl.html"]),
angular.module("/spasR46hfback/credentialsPublic/components/credentials-public/log-on/login/login-tpl.html", []).run(["$templateCache", function(a) {
    "use strict";
    a.put("/spasR46hfback/credentialsPublic/components/credentials-public/log-on/login/login-tpl.html", '<div class="row"><div class="col-xs-12"><proteo-ui-link ng-click="gotoPublicTsb();"><proteo-ui-icon icon="back"></proteo-ui-icon><proteo-ui-text translate="RETAIL_CREDENTIALS_PUBLIC_COMMON_GO_TO_TSB"></proteo-ui-text></proteo-ui-link></div></div><div class="row"><div class="col-xs-12"><form name="loginForm" method="POST" ng-submit="submit(loginForm)" novalidate autocomplete=" off"><div class="row"><div class="col-xs-12 md-margin-bottom"><h1 class="col-xs-12 md-margin-bottom no-padding"><proteo-ui-text translate="RETAIL_CREDENTIALS_PUBLIC_LOGON_LOGIN_TITLE"></proteo-ui-text></h1><proteo-ui-text><span translate="RETAIL_CREDENTIALS_PUBLIC_LOGON_LOGIN_SUBTITLE"></span>&nbsp;<proteo-ui-link state="registration"><span translate="RETAIL_CREDENTIALS_PUBLIC_LOGON_LOGIN_REGISTERONLINE"></span></proteo-ui-link>.</proteo-ui-text><br><proteo-ui-text><span translate="RETAIL_CREDENTIALS_PUBLIC_LOGON_LOGIN_SUBTITLE_2"></span>&nbsp;<proteo-ui-link url="{{bizLink}}"><span translate="RETAIL_CREDENTIALS_PUBLIC_LOGON_LOGIN_HERE"></span></proteo-ui-link>.</proteo-ui-text><br><br><div ng-if="captchaFactory.captchaShow"><proteo-ui-icon class="sm-margin-right" icon-bg="red" icon="alert"></proteo-ui-icon><proteo-ui-text class="text-bold" translate="RETAIL_CREDENTIALS_PUBLIC_LOGON_LOGIN_CAPTCHA"></proteo-ui-text></div><div ng-if="scaMode && attemptsUserId === 5"><p class="round md-margin-top" translate="RETAIL_CREDENTIALS_PUBLIC_LOGON_LOGIN_PROBLEMS_BROWSER_CACHE"></div></div><div class="col-xs-12 lg-padding-left md-margin-bottom" id="errorID" ng-if="exceptionLiteral || blockUser"><proteo-ui-icon icon-bg="red" icon="alert"></proteo-ui-icon><proteo-ui-text ng-if="fraudError || blockUser" class="text-bold text-std" translate="RETAIL_CREDENTIALS_PUBLIC_LOGON_LOGIN_LOGINERROR_FRAUD"></proteo-ui-text><proteo-ui-text ng-if="!fraudError && !blockUser" class="text-bold text-std">{{exceptionLiteral}}</proteo-ui-text><proteo-ui-text ng-if="fraudError || blockUser" paragraph="true" class="text-bold text-std md-margin-top">{{exceptionLiteral}}</proteo-ui-text><proteo-ui-text ng-if="blockUser" class="text-bold text-std" translate="COMMON_ENROLLMENT_THREAMETRIX_ERROR"></proteo-ui-text></div><div class="col-xs-12 lg-padding-left md-margin-bottom" id="errorID" ng-if="existUserRegistrationError"><proteo-ui-icon icon-bg="red" icon="alert"></proteo-ui-icon><proteo-ui-text translate="RETAIL_CREDENTIALS_PUBLIC_LOGON_ALREADYREGISTERED_ERROR_ERR152"></proteo-ui-text><proteo-ui-link state="enterCustomerIdData"><proteo-ui-text translate="RETAIL_CREDENTIALS_PUBLIC_LOGON_LOGIN_PROBLEMSLOGGIN_SCA"></proteo-ui-text></proteo-ui-link><proteo-ui-text class="sm-margin-left" translate="RETAIL_CREDENTIALS_PUBLIC_LOGON_ALREADYREGISTERED_ERROR_ERR152_PART2"></proteo-ui-text></div><div class="row md-margin-left" ng-if="bloqued"><div class="col-xs-12"><div><proteo-ui-text class="text-bold"><i translate="RETAIL_CREDENTIALS_COMMON_BLOCKED"></i></proteo-ui-text></div></div><div class="md-margin-top md-margin-left xs-padding-left md-margin-bottom"><ul class="unordered-list md-padding-left"><li class="list-element"><proteo-ui-text><i translate="COMMON_GLOBALERROR_TEXT_ATTEMPTS_EXCEEDED_OPTIONS_1"></i></proteo-ui-text>&nbsp;<proteo-ui-link ng-click="deRegistration()"><proteo-ui-text><i translate="RETAIL_CREDENTIALS_PUBLIC_LINK_TEXT1"></i></proteo-ui-text></proteo-ui-link><proteo-ui-text><i translate="COMMON_GLOBALERROR_TEXT_ATTEMPTS_EXCEEDED_OPTIONS_2"></i></proteo-ui-text><li class="list-element"><proteo-ui-text><i translate="COMMON_GLOBALERROR_TEXT_ATTEMPTS_EXCEEDED_OPTIONS_3"></i></proteo-ui-text></ul></div></div></div><div class="row no-margin section-lightblue"><div class="col-xs-12"><proteo-ui-form-group><label for="userId" translate="RETAIL_CREDENTIALS_PUBLIC_COMMON_USERID"></label><proteo-ui-form-control><proteo-ui-input id="userId" name="userId" ng-model="data.userId" required type="text" ng-maxlength="30" autofocus></proteo-ui-input></proteo-ui-form-control><proteo-ui-form-error><proteo-ui-text class="form-error" translate="RETAIL_CREDENTIALS_PUBLIC_COMMON_ERROR_ENTERVALUE"></proteo-ui-text></proteo-ui-form-error></proteo-ui-form-group></div><div class="col-xs-12 xs-margin-top" ng-if="!scaMode"><div class="row" ng-class="{\'error no-padding\' :  loginForm.password.$invalid &&\n                        (loginForm.password.$touched || loginForm.$submitted)}"><proteo-ui-text class="col-xs-12 text-bold xs-margin-top" translate="RETAIL_CREDENTIALS_PUBLIC_COMMON_PASSWORD"></proteo-ui-text><div class="col-xs-12 col-md-4 xs-margin-top" id="passwordInput" ng-class="{\'form-group has-error has-feedback\' :  loginForm.password.$invalid &&\n                            (loginForm.password.$touched || loginForm.$submitted)}"><proteo-ui-input name="password" ng-model="data.password" required type="password"></proteo-ui-input></div><div class="col-xs-12 col-md-4 no-margin sm-margin-bottom xs-margin-top-screen-md xs-margin-bottom-screen-sm" id="errorPasswordID" ng-show="loginForm.password.$invalid &&\n                            (loginForm.password.$touched || loginForm.$submitted)"><proteo-ui-icon icon-bg="red" icon="alert"></proteo-ui-icon><proteo-ui-text class="text-bold" translate="RETAIL_CREDENTIALS_PUBLIC_COMMON_ERROR_ENTERVALUE"></proteo-ui-text></div></div></div><div class="col-xs-12 xs-margin-top" ng-if="scaMode && captchaFactory.captchaEnabled"><div ng-if="captchaFactory.captchaShow"><div ng-if="captchaFactory.captcha" proteo-ui-captcha theme="\'light\'" key="captchaFactory.model.key" on-create="captchaFactory.setWidgetId(widgetId)" on-success="captchaFactory.setResponse(response)" on-expire="captchaFactory.cbExpiration()" lang="en-GB"></div></div></div><div class="col-xs-12 md-margin-top"><div class="d-flex"><proteo-ui-check-box check-box-id="rememberUserID" name="rememberID" output="data.rememberID" validation-required="false"><proteo-ui-text class="sm-margin-bottom" translate="RETAIL_CREDENTIALS_PUBLIC_LOGON_LOGIN_REMEMBERID"></proteo-ui-text></proteo-ui-check-box><proteo-ui-popover class="text-std-size" content="RETAIL_CREDENTIALS_PUBLIC_LOGON_LOGIN_TOOLTIPTEXT" placement="top-left" size="h6" title="{{\'RETAIL_CREDENTIALS_PUBLIC_LOGON_LOGIN_TOOLTIP_ATTR_TITLE\' | translate}}">[?]</proteo-ui-popover></div><div class="md-margin-top"><proteo-ui-text class="text-bold" translate="RETAIL_CREDENTIALS_PUBLIC_COMMON_WARNING">&nbsp;</proteo-ui-text>&nbsp;<proteo-ui-text translate="RETAIL_CREDENTIALS_PUBLIC_LOGON_LOGIN_WARNINGTEXT"></proteo-ui-text></div></div><div class="col-xs-12"><proteo-ui-thematic-break></proteo-ui-thematic-break><div class="login-info md-margin-bottom"><div class="links"><proteo-ui-link state="forgottenUserId"><proteo-ui-icon icon="next"></proteo-ui-icon><proteo-ui-text translate="RETAIL_CREDENTIALS_PUBLIC_LOGON_LOGIN_FORGOTTENID_SCA"></proteo-ui-text></proteo-ui-link><proteo-ui-link state="enterCustomerIdData"><proteo-ui-icon icon="next"></proteo-ui-icon><proteo-ui-text translate="RETAIL_CREDENTIALS_PUBLIC_LOGON_LOGIN_PROBLEMSLOGGIN_SCA"></proteo-ui-text></proteo-ui-link></div><div class="login mt-4"><proteo-ui-button type="submit"><proteo-ui-text translate="RETAIL_CREDENTIALS_PUBLIC_COMMON_CONTINUE"></proteo-ui-text></proteo-ui-button></div></div></div><div class="login-footer"><div class="login-image"><img alt="alert image" src="/spasR46hfback/credentialsPublic/styles/images/0701e81b.LoginPlaceHolder.png" title="{{version}}" width="128" height="128"></div><div class="login-text"><proteo-ui-text translate="RETAIL_CREDENTIALS_PUBLIC_LOGON_LOGIN_FRAUDMESSAGE"></proteo-ui-text>&nbsp;<proteo-ui-link url="http://www.tsb.co.uk/security/social-engineering/"><proteo-ui-text translate="RETAIL_CREDENTIALS_PUBLIC_COMMON_CLICKHERE"></proteo-ui-text></proteo-ui-link></div></div></div></form></div></div>')
}
]),
function() {
    "use strict";
    angular.module("App.login").factory("versionService", ["$log", "$q", "$http", function(a, b, c) {
        return c.get("/spasR46hfback/credentialsPublic/bower.json")
    }
    ])
}(),
function() {
    "use strict";
    angular.module("App.mandatoryPage").controller("mandatoryPageController", function() {
        JSM._dataLayerSPAReady()
    })
}(),
function() {
    "use strict";
    angular.module("App.mandatoryPage").config(["$stateProvider", function(a) {
        a.state("mandatoryPage", {
            url: "/mandatoryPage",
            templateUrl: "/spasR46hfback/credentialsPublic/components/credentials-public/log-on/mandatoryPage/mandatory-page-tpl.html",
            controller: "mandatoryPageController"
        })
    }
    ])
}(),
angular.module("App.mandatoryPage.templates", ["/spasR46hfback/credentialsPublic/components/credentials-public/log-on/mandatoryPage/mandatory-page-tpl.html"]),
angular.module("/spasR46hfback/credentialsPublic/components/credentials-public/log-on/mandatoryPage/mandatory-page-tpl.html", []).run(["$templateCache", function(a) {
    "use strict";
    a.put("/spasR46hfback/credentialsPublic/components/credentials-public/log-on/mandatoryPage/mandatory-page-tpl.html", '<div class="row"><div class="col-xs-12"><h1>MANDATORY PAGE</h1></div></div>')
}
]),
function() {
    "use strict";
    angular.module("App.memorableInformation").controller("memorableInformationController", ["$log", "$scope", "$state", "memorableInformationService", "$filter", "logOnEnrollmentFactory", "logOnFactory", "$document", "$timeout", "scaEnrollmentFunctionsFactory", "DataLayerProvider", "loginService", "tsbJournalService", function(a, b, c, d, e, f, g, h, i, j, k, l, m) {
        function n() {
            b.scaMode = f.scaMode,
            b.scaUserPiloted = f.scaUserPiloted,
            null === c.params.data ? c.go("login") : (f.scaMode && j.loadFingerprint(),
            c.params.data && c.params.data.memorableInfoPositions && c.params.data.userId ? u(c.params.data.memorableInfoPositions) : (a.debug("Do you try to enter memorableInformation but without params"),
            c.go("login")),
            k.updateScaDataLayer("validatePasswordAndMemorable"),
            JSM._dataLayerSPAReady(),
            g.resetTimeout(),
            g.timeoutPromise = i(function() {
                b.modalTimeOut.open()
            }, 6e5))
        }
        function o() {
            var a = "";
            return a = angular.isUndefined(c.params.data.authId) || null === c.params.data.authId ? "" : c.params.data.authId
        }
        function p(a) {
            b.buttonDisabled = !0,
            b.userID = c.params.data.userId;
            var d = {
                username: c.params.data.userId,
                authId: o(),
                position: {
                    x: b.chars.charXPos.toString(),
                    y: b.chars.charYPos.toString(),
                    z: b.chars.charZPos.toString()
                },
                value: {
                    x: b.chars.charXValue,
                    y: b.chars.charYValue,
                    z: b.chars.charZValue
                },
                server: g.getServer()
            };
            (f.scaMode || b.reEnterMemorable) && (d.password = b.data.password),
            f.scaMode ? r(d, a) : q(d, a)
        }
        function q(a, c) {
            d.checkMemorableInformation(a, c, b.reEnterMemorable).then(function(a) {
                if (g.setServerFromResponse(a),
                b.exceptionLiteral = null,
                a.tokenId) {
                    var c = a.tokenId;
                    g.createCookie(c)
                } else
                    b.buttonDisabled = !1,
                    b.reEnterMemorable = !0,
                    b.attemptsMI++
            }, function(a) {
                f.errorMI(a, b)
            })
        }
        function r(a, c) {
            d.validatePasswordAndMemorable(a, c).then(function(a) {
                b.exceptionLiteral = null,
                g.setServerFromResponse(a),
                f.getScaUserPiloted() ? f.enrollmentHandler(a, b, f.PASSMI_SCREEN) : a.tokenId && (b.biocatchFlush(),
                console.log("Biocatch Flush for continue"),
                m.newOperation(),
                g.createCookieAux(a.tokenId),
                f.getUserQuestions(b, a.tokenId))
            }, function(a) {
                b.buttonDisabled = !1,
                b.chars.charXValue = null,
                b.chars.charYValue = null,
                b.chars.charZValue = null,
                b.chars.testX = null,
                b.chars.testY = null,
                b.chars.testZ = null,
                f.enrollmentErrorHandler(a, b, f.PASSMI_SCREEN, !1)
            })
        }
        function s() {
            b.exceptionLiteral = null,
            b.username = c.params.data.userId || null;
            var a = {
                login: b.username,
                password: b.data.password,
                server: g.getServer()
            };
            l.login(a).then(function(a) {
                if (a.isSuccessful) {
                    g.setAuthId(a.authId),
                    g.setServerFromResponse(a);
                    var d = null
                      , e = {
                        authId: a.authId,
                        server: g.getServer()
                    }
                      , h = "web";
                    if (a.firstLogin) {
                        switch (g.setFirstLoginCode(a.firstLoginCode),
                        a.firstLoginCode) {
                        case 1:
                            d = "enterActivationCode",
                            angular.extend(e, {
                                userId: b.username
                            });
                            break;
                        case 2:
                            d = "captureMemorableInformation",
                            angular.extend(e, {
                                userId: b.username
                            });
                            break;
                        case 3:
                            d = "changePassword",
                            h = "branch",
                            angular.extend(e, {
                                firstTimeLogin: !0,
                                userId: b.username
                            })
                        }
                        f.setData("MI_DATA", {
                            data: e,
                            channel: h
                        }),
                        c.go(d, {
                            data: e,
                            channel: h
                        })
                    } else
                        c.params.data.memorableInfoPositions = a.memorableInfoPositions,
                        c.params.data.authId = a.authId,
                        u(c.params.data.memorableInfoPositions),
                        f.setUserId(b.username),
                        b.scamode2 = !1,
                        b.passViewOnly = !0
                }
            }, function(a) {
                b.data.password = "",
                a.exception && "9210358" === a.exception.code ? b.exceptionLiteral = angular.isDefined(a.exception) ? a.exception.code + ": " + a.exception.description : v("RETAIL_CREDENTIALS_PUBLIC_LOGON_LOGIN_LOGINERROR_2") : a.exception && "ERR244" === a.exception.code ? (b.exceptionLiteral = angular.isDefined(a.exception) ? a.exception.code + ": " + a.exception.description : v("COMMON_MG_SYSTEM_ERROR"),
                b.fraudError = !0) : b.exceptionLiteral = angular.isDefined(a.exception) && "010" !== a.exception.code ? a.exception.description : v("COMMON_MG_SYSTEM_ERROR"),
                b.buttonDisabled = !1
            })
        }
        function t(a, b) {
            a[b].$setValidity("notSelected", null != a[b].$viewValue)
        }
        function u(a) {
            a && (b.chars.charXPos = a.position1,
            b.chars.charYPos = a.position2,
            b.chars.charZPos = a.position3)
        }
        var v = e("translate");
        b.reEnterMemorable = !1,
        b.buttonDisabled = !1,
        b.attemptsMI = 0,
        b.data = {},
        b.isMasked = !0,
        b.chars = {
            charXPos: null,
            charYPos: null,
            charZPos: null,
            charXValue: null,
            charYValue: null,
            charZValue: null,
            testX: null,
            testY: null,
            testZ: null
        },
        b.exceptionLiteral = null,
        b.scamode2 = !1,
        b.passViewOnly = !1,
        b.showPassword = function() {
            var a = document.getElementById("loginPassword")
              , b = "password" === a.getAttribute("type") ? "text" : "password";
            a.setAttribute("type", b)
        }
        ,
        b.modalTimeOut = {
            onClose: function() {
                b.cancel()
            }
        },
        b.cancel = function() {
            m.newOperation(),
            c.go("login")
        }
        ,
        b.submit = function(a) {
            b.exceptionLiteral = null,
            b.scamode2 ? a.$valid && s() : (t(a, "charXPos"),
            t(a, "charYPos"),
            t(a, "charZPos"),
            a.$valid ? JSM.getTSID(function(a) {
                p(a)
            }) : f.scaMode && b.scaUserPiloted && (b.data.password = ""))
        }
        ,
        b.enterCustomerIdData = function() {
            g.resetTimeout(),
            c.go("enterCustomerIdData")
        }
        ,
        b.checkValidation = function(a, c, d) {
            "X" == d && b.chars.testX && "*" != b.chars.testX && (b.chars.charXValue = b.chars.testX,
            i(function() {
                b.chars.testX = "*"
            }, 1e3)),
            "Y" == d && b.chars.testY && "*" != b.chars.testY && (b.chars.charYValue = b.chars.testY,
            i(function() {
                b.chars.testY = "*"
            }, 1e3)),
            "Z" == d && b.chars.testZ && "*" != b.chars.testZ && (b.chars.charZValue = b.chars.testZ,
            i(function() {
                b.chars.testZ = "*"
            }, 1e3)),
            t(a, c),
            JSM._updateDataLayer({
                event_name: "drop down menu; " + h[0].title,
                event_action: a[c].$viewValue,
                event_label: c
            })
        }
        ,
        b.getOrdinal = function(a) {
            var b = ["th", "st", "nd", "rd"]
              , c = a % 100;
            return a + (b[(c - 20) % 10] || b[c] || b[0])
        }
        ,
        b.blockSpecialChar = function(a) {
            (a.charCode >= 32 && a.charCode <= 47 || a.charCode >= 58 && a.charCode <= 64 || a.charCode >= 91 && a.charCode <= 96 || a.charCode >= 123 && a.charCode <= 126) && a.preventDefault()
        }
        ,
        b.biocatchFlush = function() {
            g.isTrusted() && (JSM.callbFlush(),
            console.log("Biocatch Flush for mouse hover"))
        }
        ,
        n()
    }
    ])
}(),
function() {
    "use strict";
    angular.module("App.memorableInformation").factory("memorableInformationService", ["$log", "$q", "proteocanalinvokerServices", "LOGIN_WEBADAPTER", "scaEnrollmentFunctionsFactory", "logOnFactory", function(a, b, c, d, e, f) {
        var g = {};
        return g.callService = function(a, d, e) {
            function f(a) {
                h.resolve(a)
            }
            function g(a) {
                h.reject(a)
            }
            var h = b.defer();
            return c.error(g),
            c.invoke({
                service: d,
                callback: f,
                fail: g,
                data: a,
                headers: e
            }),
            h.promise
        }
        ,
        g.checkMemorableInformation = function(a, b, c) {
            var e = c ? d.checkMemorableInformationAndPassword : d.checkMemorableInformation
              , f = {
                "HEADER.USER_AGENT": "userAgent",
                "HEADER.STARTDATETIME": 123,
                "HEADER.ALIAS": "alias",
                "HEADER.INSCRIPTION_KEY": "inscriptionKey",
                "HEADER.USER.PROCEDENCE": "WR01",
                "HEADER.FD_SESSION_ID1": b,
                "HEADER.SERVICE_SCOPE": "PUBLIC"
            };
            return g.callService(a, e, f)
        }
        ,
        g.validatePasswordAndMemorable = function(b, c) {
            var h = d.validatePasswordAndMemorable
              , i = {
                "HEADER.USER_AGENT": "userAgent",
                "HEADER.STARTDATETIME": 123,
                "HEADER.ALIAS": "alias",
                "HEADER.INSCRIPTION_KEY": "inscriptionKey",
                "HEADER.USER.PROCEDENCE": "WR01",
                "HEADER.FD_SESSION_ID1": c,
                "HEADER.SERVICE_SCOPE": "PUBLIC"
            };
            return null !== e.getHeader() ? (angular.extend(i, e.headers, f.getDefaultHeader()),
            g.callService(b, h, i)) : void e.loadFingerprint(function() {
                return angular.extend(i, e.headers, f.getDefaultHeader()),
                g.callService(b, h, i)
            }, function(c) {
                return a.debug("Error fp"),
                g.callService(b, h, i)
            })
        }
        ,
        g
    }
    ])
}(),
function() {
    "use strict";
    angular.module("App.memorableInformation").config(["$stateProvider", function(a) {
        a.state("memorableInformation", {
            url: "/memorableInformation",
            templateUrl: "/spasR46hfback/credentialsPublic/components/credentials-public/log-on/memorableInformation/memorable-information-tpl.html",
            controller: "memorableInformationController",
            params: {
                data: null,
                exceptionLiteral: null
            }
        })
    }
    ])
}(),
angular.module("App.memorableInformation.templates", ["/spasR46hfback/credentialsPublic/components/credentials-public/log-on/memorableInformation/memorable-information-password-legacy-mode2-tpl.html", "/spasR46hfback/credentialsPublic/components/credentials-public/log-on/memorableInformation/memorable-information-password-legacy-tpl.html", "/spasR46hfback/credentialsPublic/components/credentials-public/log-on/memorableInformation/memorable-information-password-sca-tpl.html", "/spasR46hfback/credentialsPublic/components/credentials-public/log-on/memorableInformation/memorable-information-tpl.html"]),
angular.module("/spasR46hfback/credentialsPublic/components/credentials-public/log-on/memorableInformation/memorable-information-password-legacy-mode2-tpl.html", []).run(["$templateCache", function(a) {
    "use strict";
    a.put("/spasR46hfback/credentialsPublic/components/credentials-public/log-on/memorableInformation/memorable-information-password-legacy-mode2-tpl.html", '<div><h1 class="col-xs-12 md-margin-bottom no-padding"><proteo-ui-text translate="RETAIL_CREDENTIALS_PUBLIC_LOGON_MEMORABLEINFORMATION_TITLE_SCA"></proteo-ui-text></h1><div class="col-xs-12 no-padding-left md-margin-bottom timeOutError" id="errorException" ng-if="exceptionLiteral"><proteo-ui-icon icon-bg="red" icon="alert"></proteo-ui-icon><proteo-ui-text class="text-bold" translate="{{exceptionLiteral}}"></proteo-ui-text></div><div class="col-xs-12 xs-margin-top no-padding md-margin-bottom"><div class="row" ng-class="{\'error xs-padding-bottom\' : memorableInformationForm.password.$invalid && (memorableInformationForm.password.$touched || memorableInformationForm.$submitted)}"><proteo-ui-text class="col-xs-12 xs-margin-top text-bold" translate="RETAIL_CREDENTIALS_PUBLIC_COMMON_PASSWORD"></proteo-ui-text><div class="col-xs-12 col-md-4 xs-margin-top" id="passwordInput" ng-class="{\'form-group has-error has-feedback\' : memorableInformationForm.password.$invalid && (memorableInformationForm.password.$touched || memorableInformationForm.$submitted)}"><proteo-ui-input name="password" ng-maxlength="15" ng-minlength="6" ng-pattern="/^((?!.*[\\s])(?=.*[a-zA-Z0-9:$_@.&+=/#?:\'%()]).{1,})/" ng-model="data.password" required type="password" ng-disabled="passViewOnly"></proteo-ui-input></div><div class="col-xs-12 col-sm-6 col-lg-4 lg-padding-left md-margin-bottom" id="errorID" ng-show="memorableInformationForm.password.$invalid && (memorableInformationForm.password.$touched || memorableInformationForm.$submitted)"><proteo-ui-icon icon-bg="red" icon="alert"></proteo-ui-icon><proteo-ui-text class="text-bold" translate="RETAIL_CREDENTIALS_PUBLIC_COMMON_ERROR_ENTERVALUE"></proteo-ui-text></div></div></div><div ng-if="passViewOnly"><proteo-ui-text class="col-xs-12 text-bold sm-margin-bottom sm-margin-top no-padding" translate="RETAIL_CREDENTIALS_PUBLIC_LOGON_MEMORABLEINFORMATION_TEXT1" translate-values="{charXPos : chars.charXPos, charYPos : chars.charYPos, charZPos : chars.charZPos}"></proteo-ui-text><proteo-ui-text class="col-xs-12 text-bold sm-margin-bottom no-padding" translate="RETAIL_CREDENTIALS_PUBLIC_LOGON_MEMORABLEINFORMATION_TEXT2"></proteo-ui-text><proteo-ui-text class="col-xs-12 text-bold no-padding" translate="RETAIL_CREDENTIALS_PUBLIC_LOGON_MEMORABLEINFORMATION_TEXT3"></proteo-ui-text></div></div>')
}
]),
angular.module("/spasR46hfback/credentialsPublic/components/credentials-public/log-on/memorableInformation/memorable-information-password-legacy-tpl.html", []).run(["$templateCache", function(a) {
    "use strict";
    a.put("/spasR46hfback/credentialsPublic/components/credentials-public/log-on/memorableInformation/memorable-information-password-legacy-tpl.html", '<div ng-if="!reEnterMemorable"><h1 class="col-xs-12 md-margin-bottom no-padding"><proteo-ui-text translate="RETAIL_CREDENTIALS_PUBLIC_LOGON_MEMORABLEINFORMATION_TITLE"></proteo-ui-text></h1><proteo-ui-text class="col-xs-12 text-bold sm-margin-bottom no-padding" translate="RETAIL_CREDENTIALS_PUBLIC_LOGON_MEMORABLEINFORMATION_TEXT1" translate-values="{charXPos : chars.charXPos, charYPos : chars.charYPos, charZPos : chars.charZPos}"></proteo-ui-text><proteo-ui-text class="col-xs-12 text-bold sm-margin-bottom no-padding" translate="RETAIL_CREDENTIALS_PUBLIC_LOGON_MEMORABLEINFORMATION_TEXT2"></proteo-ui-text><proteo-ui-text class="col-xs-12 text-bold no-padding" translate="RETAIL_CREDENTIALS_PUBLIC_LOGON_MEMORABLEINFORMATION_TEXT3"></proteo-ui-text></div><div class="col-xs-12 no-padding" ng-if="reEnterMemorable"><h1 class="col-xs-12 md-margin-bottom no-padding"><proteo-ui-text translate="RETAIL_CREDENTIALS_PUBLIC_LOGON_MEMORABLEINFORMATION_TITLEINCORRECT"></proteo-ui-text></h1><div class="col-xs-12 no-padding-left md-margin-bottom" id="errorException" ng-if="exceptionLiteral"><proteo-ui-icon icon-bg="red" icon="alert"></proteo-ui-icon><proteo-ui-text class="text-bold" ng-bind="exceptionLiteral"></proteo-ui-text></div><div class="row"><proteo-ui-text class="col-xs-12 text-bold sm-margin-bottom" translate="RETAIL_CREDENTIALS_PUBLIC_COMMON_PASSWORD"></proteo-ui-text><div class="col-xs-12 col-sm-6 col-lg-4" id="passwordInput" ng-class="{\'form-group has-error has-feedback\' :  memorableInformationForm.password.$invalid && memorableInformationForm.password.$touched}"><proteo-ui-input name="password" ng-model="data.password" required type="password"></proteo-ui-input></div><div class="col-xs-12 col-sm-6 col-lg-4 lg-padding-left md-margin-bottom" id="errorID" ng-show="memorableInformationForm.password.$invalid && memorableInformationForm.password.$touched"><proteo-ui-icon icon-bg="red" icon="alert"></proteo-ui-icon><proteo-ui-text class="text-bold" translate="RETAIL_CREDENTIALS_PUBLIC_COMMON_ERROR_ENTERVALUE"></proteo-ui-text></div></div><proteo-ui-text class="col-xs-12 text-bold md-margin-top no-padding" translate="RETAIL_CREDENTIALS_PUBLIC_LOGON_MEMORABLEINFORMATION_TEXT1" translate-values="{charXPos : chars.charXPos, charYPos : chars.charYPos, charZPos : chars.charZPos}"></proteo-ui-text></div>')
}
]),
angular.module("/spasR46hfback/credentialsPublic/components/credentials-public/log-on/memorableInformation/memorable-information-password-sca-tpl.html", []).run(["$templateCache", function(a) {
    "use strict";
    a.put("/spasR46hfback/credentialsPublic/components/credentials-public/log-on/memorableInformation/memorable-information-password-sca-tpl.html", '<div><proteo-ui-form-group><label for="passwordInput" translate="RETAIL_CREDENTIALS_PUBLIC_COMMON_PASSWORD"></label><proteo-ui-form-control><proteo-ui-input id="loginPassword" name="password" ng-maxlength="15" ng-minlength="6" placeholder="Password" ng-pattern="/^((?!.*[\\s])(?=.*[a-zA-Z0-9:$_@.&+=/#?:\'%()]).{1,})/" ng-model="data.password" required type="password"></proteo-ui-input><proteo-ui-icon ng-click="showPassword()" id="eyeIcon" icon="eye" class="shift-icon input-group-addon ipadIcon"></proteo-ui-icon></proteo-ui-form-control><proteo-ui-form-error><div ng-if="memorableInformationForm.password.$error.required"><proteo-ui-text class="form-error" translate="RETAIL_CREDENTIALS_PUBLIC_COMMON_ERROR_ENTERVALUE"></proteo-ui-text></div><div ng-if="memorableInformationForm.password.$error.pattern"><proteo-ui-text class="form-error" translate="RETAIL_CREDENTIALS_PUBLIC_COMMON_ERROR_FORMAT"></proteo-ui-text></div><div ng-if="memorableInformationForm.password.$error.maxlength"><proteo-ui-text class="form-error" translate="RETAIL_CREDENTIALS_PUBLIC_COMMON_ERROR_LENGTH"></proteo-ui-text></div><div ng-if="memorableInformationForm.password.$error.minlength"><proteo-ui-text class="form-error" translate="RETAIL_CREDENTIALS_PUBLIC_COMMON_ERROR_MINLENGTH"></proteo-ui-text></div></proteo-ui-form-error></proteo-ui-form-group><proteo-ui-form-group ng-if="passViewOnly"><label for="passwordInput" translate="RETAIL_CREDENTIALS_PUBLIC_COMMON_PASSWORD"></label><proteo-ui-form-control><proteo-ui-input name="password" ng-maxlength="15" ng-minlength="6" ng-pattern="/^((?!.*[\\s])(?=.*[a-zA-Z0-9:$_@.&+=/#?:\'%()]).{1,})/" ng-model="data.password" required type="password" ng-disabled="passViewOnly"></proteo-ui-input><proteo-ui-icon class="input-group-addon" icon="alert"></proteo-ui-icon></proteo-ui-form-control></proteo-ui-form-group><div class="row"><proteo-ui-text class="col-xs-12 text-bold sm-margin-bottom" translate="RETAIL_CREDENTIALS_PUBLIC_LOGON_MEMORABLEINFORMATION_TEXT1" translate-values="{charXPos : chars.charXPos, charYPos : chars.charYPos, charZPos : chars.charZPos}"></proteo-ui-text><proteo-ui-text class="col-xs-12 text-bold sm-margin-bottom" translate="RETAIL_CREDENTIALS_PUBLIC_LOGON_MEMORABLEINFORMATION_TEXT2"></proteo-ui-text></div></div>')
}
]),
angular.module("/spasR46hfback/credentialsPublic/components/credentials-public/log-on/memorableInformation/memorable-information-tpl.html", []).run(["$templateCache", function(a) {
    "use strict";
    a.put("/spasR46hfback/credentialsPublic/components/credentials-public/log-on/memorableInformation/memorable-information-tpl.html", '<div class="row"><div ng-if="scaMode"><h1 class="col-xs-12 md-margin-bottom"><proteo-ui-text translate="RETAIL_CREDENTIALS_PUBLIC_LOGON_MEMORABLEINFORMATION_TITLE_SCA"></proteo-ui-text></h1><div class="col-xs-12-left md-margin-bottom" id="errorException" ng-if="exceptionLiteral"><proteo-ui-icon icon-bg="red" icon="alert"></proteo-ui-icon><proteo-ui-text class="text-bold" ng-bind="exceptionLiteral"></proteo-ui-text></div><div class="col-xs-12"><proteo-ui-text class="md-margin-bottom text-bold text-std" translate="RETAIL_AUTHENTICATION_ENTER_PASSWORD_TITLE"></proteo-ui-text></div></div><div class="col-xs-12"><form class="section-lightblue" name="memorableInformationForm" method="POST" novalidate><div class="row"><div class="col-xs-12"><div class="borderless-panel"><div ng-if="scaMode" ng-include="\'/spasR46hfback/credentialsPublic/components/credentials-public/log-on/memorableInformation/memorable-information-password-sca-tpl.html\'"></div><div ng-if="!scaMode" ng-include="\'/spasR46hfback/credentialsPublic/components/credentials-public/log-on/memorableInformation/memorable-information-password-legacy-tpl.html\'"></div></div></div></div><div class="row" ng-if="((memorableInformationForm.charXPos.$error && memorableInformationForm.charXPos.$error.required) || (memorableInformationForm.charYPos.$error && memorableInformationForm.charYPos.$error.required) || (memorableInformationForm.charZPos.$error && memorableInformationForm.charZPos.$error.required)) && memorableInformationForm.$submitted"><div class="col-xs-12 md-margin-top md-margin-bottom"><proteo-ui-icon icon-bg="red" icon="alert"></proteo-ui-icon><proteo-ui-text class="text-bold" translate="RETAIL_CREDENTIALS_PUBLIC_LOGON_MEMORABLEINFORMATION_ERRORSUBMITED"></proteo-ui-text></div></div><div ng-if="!scamode2" class="row" ng-class="{\'error has-error has-feedback xs-padding-bottom\' : !(!(memorableInformationForm.charZPos.$invalid)||!(memorableInformationForm.charYPos.$invalid)||!(memorableInformationForm.charXPos.$invalid || (memorableInformationForm.charXPos.$error && memorableInformationForm.charXPos.$error.required) || (memorableInformationForm.charYPos.$error && memorableInformationForm.charYPos.$error.required) || (memorableInformationForm.charZPos.$error && memorableInformationForm.charZPos.$error.required) )) && memorableInformationForm.$submitted && ((memorableInformationForm.charXPos.$error && memorableInformationForm.charXPos.$error.required) || (memorableInformationForm.charYPos.$error && memorableInformationForm.charYPos.$error.required) || (memorableInformationForm.charZPos.$error && memorableInformationForm.charZPos.$error.required))}"><div class="input-group adjustMI"><div class="col-sm-3 col-md-3 sm-margin-top memorable-information-select-size adjustMI"><div class="col-sm-12 col-md-12 adjustMI"><proteo-ui-text class="text-bold" translate="RETAIL_CREDENTIALS_PUBLIC_LOGON_MEMORABLEINFORMATION_CHARACTER1" translate-values="{charXPos : chars.charXPos}"></proteo-ui-text><label for="charXPos" style="display:none"></label><input class="col-xs-12 form-control" name="charXPos" id="charXPos" placeholder="{{getOrdinal(chars.charXPos)}}" maxlength="1" ng-change="checkValidation(memorableInformationForm, \'charXPos\',\'X\')" ng-keypress="blockSpecialChar($event)" ng-model="chars.testX" required/></div></div><div class="col-sm-3 col-md-3 sm-margin-top memorable-information-select-size adjustMI"><div class="col-md-12 col-sm-12 adjustMI"><proteo-ui-text class="text-bold" translate="RETAIL_CREDENTIALS_PUBLIC_LOGON_MEMORABLEINFORMATION_CHARACTER2" translate-values="{charYPos : chars.charYPos}"></proteo-ui-text><label for="charYPos" style="display:none"></label><input class="col-xs-12 form-control" id="charYPos" name="charYPos" placeholder="{{getOrdinal(chars.charYPos)}}" maxlength="1" ng-change="checkValidation(memorableInformationForm, \'charYPos\',\'Y\')" ng-keypress="blockSpecialChar($event)" ng-model="chars.testY" required/></div></div><div class="col-sm-3 col-md-3 sm-margin-top memorable-information-select-size adjustMI"><div class="col-sm-12 col-md-12 adjustMI"><proteo-ui-text class="text-bold" translate="RETAIL_CREDENTIALS_PUBLIC_LOGON_MEMORABLEINFORMATION_CHARACTER3" translate-values="{charZPos : chars.charZPos}"></proteo-ui-text><label for="charZPos" style="display:none"></label><input class="col-xs-12 form-control" id="charZPos" name="charZPos" placeholder="{{getOrdinal(chars.charZPos)}}" maxlength="1" ng-change="checkValidation(memorableInformationForm, \'charZPos\',\'Z\')" ng-keypress="blockSpecialChar($event)" ng-model="chars.testZ" required/></div></div><div class="input-group-addon mt-lg" ng-if="!((memorableInformationForm.charXPos.$error && memorableInformationForm.charXPos.$error.required) || (memorableInformationForm.charYPos.$error && memorableInformationForm.charYPos.$error.required) || (memorableInformationForm.charZPos.$error && memorableInformationForm.charZPos.$error.required)) && memorableInformationForm.$submitted"><proteo-ui-icon icon-bg="check" icon="check"></proteo-ui-icon></div><div class="input-group-addon mt-lg" ng-if="((memorableInformationForm.charXPos.$error && memorableInformationForm.charXPos.$error.required) || (memorableInformationForm.charYPos.$error && memorableInformationForm.charYPos.$error.required) || (memorableInformationForm.charZPos.$error && memorableInformationForm.charZPos.$error.required)) && memorableInformationForm.$submitted"><proteo-ui-icon icon-bg="red" icon="alert"></proteo-ui-icon></div></div><div class="col-xs-12 md-padding-left sm-margin-top"><proteo-ui-text class="text-bold" translate="MI_INFO_MESSAGE"></proteo-ui-text></div><div class="col-xs-12 md-padding-left" ng-if="((memorableInformationForm.charXPos.$error && memorableInformationForm.charXPos.$error.required) || (memorableInformationForm.charYPos.$error && memorableInformationForm.charYPos.$error.required) || (memorableInformationForm.charZPos.$error && memorableInformationForm.charZPos.$error.required)) && memorableInformationForm.$submitted"><proteo-ui-text class="text-mierror" translate="RETAIL_CREDENTIALS_PUBLIC_LOGON_MEMORABLEINFORMATION_COMPLETEFIELDS"></proteo-ui-text></div></div><div class="row"><div class="col-xs-12 md-margin-top"><proteo-ui-link state="enterCustomerIdData"><proteo-ui-icon icon="next"></proteo-ui-icon><proteo-ui-text ng-if="!scaMode" translate="RETAIL_CREDENTIALS_PUBLIC_LOGON_LOGIN_PROBLEMSLOGGIN"></proteo-ui-text><proteo-ui-text class="pl-xs" ng-if="scaMode" translate="RETAIL_CREDENTIALS_PUBLIC_LOGON_LOGIN_PROBLEMSLOGGIN_SCA"></proteo-ui-text></proteo-ui-link></div></div><div class="row"><div class="col-xs-12"><proteo-ui-link class="pull-left" ng-click="cancel()"><proteo-ui-icon icon="cancel"></proteo-ui-icon><proteo-ui-text class="ml-xs" translate="RETAIL_CREDENTIALS_PUBLIC_COMMON_CANCEL"></proteo-ui-text></proteo-ui-link></div><div class="col-xs-12 mb-xs pull-right"><proteo-ui-button class="pull-right" ng-click="submit(memorableInformationForm)" type="submit" ng-disabled="buttonDisabled" ng-mouseover="biocatchFlush()"><proteo-ui-text translate="RETAIL_CREDENTIALS_PUBLIC_COMMON_CONTINUE"></proteo-ui-text></proteo-ui-button></div></div></form></div></div><div ng-include="\'/spasR46hfback/credentialsPublic/components/credentials-public/log-on/sca-modals/sca-modals-tpl.html\'"></div>')
}
]),
function() {
    "use strict";
    angular.module("App.migrateAccessCode").controller("migrateAccessCodeController", ["$scope", "$state", function(a, b) {
        a.futureState = 1,
        a.showDemo = function() {
            b.go("demoOverlay")
        }
        ,
        a["continue"] = function() {
            switch (a.futureState) {
            case 1:
                b.go("captureImportantInformation");
                break;
            case 2:
                b.go("welcomeInternetBanking");
                break;
            case 3:
                b.go("IntersitialPage");
                break;
            case 4:
                b.go("welcomeGalaxy");
                break;
            case 5:
                b.go("mandatoryPage");
                break;
            case 6:
                b.go("accountOverview")
            }
        }
        ,
        JSM._dataLayerSPAReady()
    }
    ])
}(),
function() {
    "use strict";
    angular.module("App.migrateAccessCode").config(["$stateProvider", function(a) {
        a.state("migrateAccessCode", {
            url: "/migrateAccessCode",
            templateUrl: "/spasR46hfback/credentialsPublic/components/credentials-public/log-on/migrateAccessCode/migrate-access-code-tpl.html",
            controller: "migrateAccessCodeController"
        })
    }
    ])
}(),
angular.module("App.migrateAccessCode.templates", ["/spasR46hfback/credentialsPublic/components/credentials-public/log-on/migrateAccessCode/migrate-access-code-tpl.html"]),
angular.module("/spasR46hfback/credentialsPublic/components/credentials-public/log-on/migrateAccessCode/migrate-access-code-tpl.html", []).run(["$templateCache", function(a) {
    "use strict";
    a.put("/spasR46hfback/credentialsPublic/components/credentials-public/log-on/migrateAccessCode/migrate-access-code-tpl.html", '<div class="row"><div class="col-xs-12"><h1 translate="RETAIL_CREDENTIALS_PUBLIC_LOGON_MIGRATEACCESSCODE_TITLE"></h1></div><div class="col-xs-12"><h3 translate="RETAIL_CREDENTIALS_PUBLIC_LOGON_MIGRATEACCESSCODE_SUBTITLE"></h3></div><div class="col-xs-12"><proteo-ui-text translate="RETAIL_CREDENTIALS_PUBLIC_LOGON_MIGRATEACCESSCODE_TEXT1"></proteo-ui-text></div></div><div class="row"><proteo-ui-panel class="col-xs-12"><div class="row"><div class="col-xs-12"><h2 translate="RETAIL_CREDENTIALS_PUBLIC_LOGON_MIGRATEACCESSCODE_WHATHAPPENSNEXT"></h2></div><div class="col-xs-12"><proteo-ui-text class="text-bold" translate="RETAIL_CREDENTIALS_PUBLIC_LOGON_MIGRATEACCESSCODE_HAPPENS_TITLE1"></proteo-ui-text></div><div class="col-xs-12 sm-margin-bottom"><proteo-ui-text translate="RETAIL_CREDENTIALS_PUBLIC_LOGON_MIGRATEACCESSCODE_HAPPENS_TEXT1"></proteo-ui-text></div><div class="col-xs-12"><proteo-ui-text class="text-bold" translate="RETAIL_CREDENTIALS_PUBLIC_LOGON_MIGRATEACCESSCODE_HAPPENS_TITLE2"></proteo-ui-text></div><div class="col-xs-12 sm-margin-bottom"><proteo-ui-text translate="RETAIL_CREDENTIALS_PUBLIC_LOGON_MIGRATEACCESSCODE_HAPPENS_TEXT2"></proteo-ui-text></div><div class="col-xs-12"><proteo-ui-text class="text-bold" translate="RETAIL_CREDENTIALS_PUBLIC_LOGON_MIGRATEACCESSCODE_HAPPENS_TITLE3"></proteo-ui-text></div><div class="col-xs-12 sm-margin-bottom"><proteo-ui-text translate="RETAIL_CREDENTIALS_PUBLIC_LOGON_MIGRATEACCESSCODE_HAPPENS_TEXT3"></proteo-ui-text></div></div></proteo-ui-panel></div><div class="row"><proteo-ui-panel class="col-xs-12"><div class="row"><div class="col-xs-6 accesCodeTextImage"><div class="row"><div class="col-xs-12"><h2 translate="RETAIL_CREDENTIALS_PUBLIC_LOGON_MIGRATEACCESSCODE_WHATISACCESSCODE"></h2></div><div class="col-xs-12 md-margin-bottom"><proteo-ui-text translate="RETAIL_CREDENTIALS_PUBLIC_LOGON_MIGRATEACCESSCODE_TEXT2"></proteo-ui-text></div><div class="col-xs-12"><proteo-ui-link ng-click="showDemo()"><proteo-ui-text translate="RETAIL_CREDENTIALS_PUBLIC_LOGON_MIGRATEACCESSCODE_VIEWDEMO"></proteo-ui-text></proteo-ui-link></div></div></div><div class="col-xs-6 accessCodeImage"><image class="md-margin-top" src="/spasR46hfback/credentialsPublic/styles/images/theme/TSBAuthenticator.png"></image></div></div></proteo-ui-panel></div><div class="row"><div class="col-xs-12 sm-margin-top"><proteo-ui-text translate="RETAIL_CREDENTIALS_PUBLIC_LOGON_MIGRATEACCESSCODE_TEXT3"></proteo-ui-text></div><proteo-ui-thematic-break></proteo-ui-thematic-break><div class="col-xs-12"><proteo-ui-button class="pull-right" ng-click="continue()"><proteo-ui-text translate="RETAIL_CREDENTIALS_PUBLIC_COMMON_CONTINUE"></proteo-ui-text></proteo-ui-button></div></div>')
}
]),
function() {
    "use strict";
    angular.module("App.provideAddress").controller("provideAddressController", ["$scope", function(a) {
        a.data = {
            days: 5,
            bankAddress: "Weelington place 32"
        },
        JSM._dataLayerSPAReady()
    }
    ])
}(),
function() {
    "use strict";
    angular.module("App.provideAddress").config(["$stateProvider", function(a) {
        a.state("provideAddress", {
            url: "/provideAddress",
            templateUrl: "/spasR46hfback/credentialsPublic/components/credentials-public/log-on/provideAddress/provide-address-tpl.html",
            controller: "provideAddressController",
            params: {
                data: null
            }
        })
    }
    ])
}(),
angular.module("App.provideAddress.templates", ["/spasR46hfback/credentialsPublic/components/credentials-public/log-on/provideAddress/provide-address-tpl.html"]),
angular.module("/spasR46hfback/credentialsPublic/components/credentials-public/log-on/provideAddress/provide-address-tpl.html", []).run(["$templateCache", function(a) {
    "use strict";
    a.put("/spasR46hfback/credentialsPublic/components/credentials-public/log-on/provideAddress/provide-address-tpl.html", '<div class="row"><div class="col-xs-12"><div class="row"><div class="col-xs-12"><h1 translate="RETAIL_CREDENTIALS_PUBLIC_LOGON_PROVIDEADDRES_MAIN_TITLE"></h1></div><div class="col-xs-12"><h3 translate="RETAIL_CREDENTIALS_PUBLIC_LOGON_PROVIDEADDRES_INTRODUCEACCESSCODE_TITLE"></h3><proteo-ui-text translate="RETAIL_CREDENTIALS_PUBLIC_LOGON_PROVIDEADDRES_INTRODUCEACCESSCODE_INFO"></proteo-ui-text></div><div class="col-xs-12"><h2 translate="RETAIL_CREDENTIALS_PUBLIC_LOGON_PROVIDEADDRES_WHATS_NEXT_TITLE"></h2><proteo-ui-text class="text-bold" translate="RETAIL_CREDENTIALS_PUBLIC_LOGON_PROVIDEADDRES_WHATS_NEXT_SEND_1"></proteo-ui-text><proteo-ui-text paragraph="false" translate="RETAIL_CREDENTIALS_PUBLIC_LOGON_PROVIDEADDRES_WHATS_NEXT_SEND_1_INFO"></proteo-ui-text><ul class="unordered-list"><li class="list-element"><proteo-ui-text translate="RETAIL_CREDENTIALS_PUBLIC_LOGON_PROVIDEADDRES_WHATS_NEXT_SEND_1_LIST_1"></proteo-ui-text><li class="list-element"><proteo-ui-text translate="RETAIL_CREDENTIALS_PUBLIC_LOGON_PROVIDEADDRES_WHATS_NEXT_SEND_1_LIST_2"></proteo-ui-text><li class="list-element"><proteo-ui-text translate="RETAIL_CREDENTIALS_PUBLIC_LOGON_PROVIDEADDRES_WHATS_NEXT_SEND_1_LIST_3"></proteo-ui-text><li class="list-element"><proteo-ui-text translate="RETAIL_CREDENTIALS_PUBLIC_LOGON_PROVIDEADDRES_WHATS_NEXT_SEND_1_LIST_4"></proteo-ui-text></ul><proteo-ui-text paragraph="false" translate="RETAIL_CREDENTIALS_PUBLIC_LOGON_PROVIDEADDRES_WHATS_NEXT_SEND_1_INFO_2"></proteo-ui-text><proteo-ui-text class="text-bold" paragraph="false" translate="RETAIL_CREDENTIALS_PUBLIC_LOGON_PROVIDEADDRES_WHATS_NEXT_SEND_2"></proteo-ui-text><proteo-ui-text paragraph="false" translate="RETAIL_CREDENTIALS_PUBLIC_LOGON_PROVIDEADDRES_WHATS_NEXT_SEND_2_INFO"></proteo-ui-text><proteo-ui-text class="text-bold" paragraph="false" translate="RETAIL_CREDENTIALS_PUBLIC_LOGON_PROVIDEADDRES_WHATS_NEXT_SEND_3"></proteo-ui-text><proteo-ui-text paragraph="false" translate="RETAIL_CREDENTIALS_PUBLIC_LOGON_PROVIDEADDRES_WHATS_NEXT_SEND_3_INFO"></proteo-ui-text></div><div class="col-xs-12"><div class="row"><div class="col-xs-6 accesCodeTextImage"><h2 translate="RETAIL_CREDENTIALS_PUBLIC_LOGON_PROVIDEADDRES_WHATS_IS_DEV_TITLE"></h2><proteo-ui-text paragraph="true" translate="RETAIL_CREDENTIALS_PUBLIC_LOGON_PROVIDEADDRES_WHATS_IS_DEV_INFO"></proteo-ui-text><proteo-ui-link><proteo-ui-icon icon="next"></proteo-ui-icon><proteo-ui-text translate="RETAIL_CREDENTIALS_PUBLIC_LOGON_PROVIDEADDRES_STEP_BY_STEP_LINK"></proteo-ui-text></proteo-ui-link></div><div class="col-xs-6 accessCodeImage"><image class="md-margin-top" src="/spasR46hfback/credentialsPublic/styles/images/theme/TSBAuthenticator.png"></image></div></div></div><div class="col-xs-12 lg-margin-top"><proteo-ui-text paragraph="true" translate="RETAIL_CREDENTIALS_PUBLIC_LOGON_PROVIDEADDRES_FURTHER_INFO"></proteo-ui-text><proteo-ui-text paragraph="true" translate="RETAIL_CREDENTIALS_PUBLIC_LOGON_PROVIDEADDRES_THANK_YOU"></proteo-ui-text><proteo-ui-text class="text-bold" paragraph="true" translate="RETAIL_CREDENTIALS_PUBLIC_LOGON_PROVIDEADDRES_PREASE_NOTE"></proteo-ui-text></div><proteo-ui-thematic-break></proteo-ui-thematic-break><div class="col-xs-12"><proteo-ui-button class="pull-right"><proteo-ui-text translate="RETAIL_CREDENTIALS_PUBLIC_COMMON_CONTINUE"></proteo-ui-text></proteo-ui-button></div></div></div></div>')
}
]),
function() {
    "use strict";
    function a(a, b, c, d, e, f, g, h) {
        function i() {
            var a = h.navigator.userAgent;
            return a.toLowerCase().indexOf("firefox") > -1 ? "firefox" : a.toLowerCase().indexOf("chrome") > -1 && !a.contains("Edge") ? "chrome" : a.match(/Opera|OPR\//) ? "opera" : a.match(/Version\/[\d\. ]+.*Safari/) ? "safari" : a.indexOf("MSIE 10.") > -1 || a.indexOf("rv:11.0") > -1 && a.indexOf("Trident/7.0") > -1 ? "IE" : void 0
        }
        a.isOtp = !1,
        a.step = null,
        a.leave = function() {
            a.closeModalError(),
            b.go("login")
        }
        ,
        a.resetLogin = function() {
            a.closeModalError(),
            b.go("enterCustomerIdData")
        }
        ,
        a.tryAgainLogin = function() {
            if (a.closeModalError(),
            3 === a.step) {
                var c = g.getData("MI_DATA");
                b.go("capturePasswordAndOTP", {
                    data: c,
                    channel: "branch"
                }).then(b.reload())
            } else if (4 === a.step || 5 === a.step || a.step === g.ERR_PASS_MI_BLOCKED) {
                var c = g.getData("MI_DATA");
                b.go("capturePassword", c)
            } else {
                var c = g.getData("MI_DATA");
                b.go("memorableInformation", c)
            }
        }
        ,
        a.getActCode = function() {
            var b = {
                userId: d.data.username,
                server: e.getServer()
            };
            c.activationCode(f.generateActivationCode, b).then(function(b) {
                a.closeModalError(),
                b && (e.setServerFromResponse(b),
                a.userAuthenticated()),
                a.success = !0,
                a.goToActivationStatus()
            }, function(b) {
                a.closeModalError(),
                a.success = !1,
                a.errorMsg = b.exception.description || $translate("COMMON_MG_SYSTEM_ERROR"),
                a.goToActivationStatus()
            })
        }
        ,
        a.userAuthenticated = function(a) {
            var c = {
                channel: d.channel,
                data: d.data
            };
            g.setCookie(a),
            b.go("captureMemorableInformation", c)
        }
        ,
        a.goToActivationStatus = function() {
            var c = {
                success: a.success,
                errorMsg: a.errorMsg || ""
            };
            b.go("activationCodeState", {
                data: c
            })
        }
        ,
        a.dontTrust = function() {
            a.closeModalDevice(),
            a.browser = i(),
            void 0 === a.browser ? a.openModalBrowser() : g.enrollmentHandler(null, a, g.MODAL_CONFIRM, !1)
        }
        ,
        a.trust = function() {
            a.closeModalDevice(),
            a.browser = i(),
            void 0 === a.browser ? a.openModalBrowser() : g.enrollmentHandler(null, a, g.MODAL_CONFIRM, !0)
        }
        ,
        a.agree = function() {
            a.closeModalBrowser(),
            g.enrollmentHandler(null, a, g.MODAL_CONFIRM, !0)
        }
        ,
        a.$on("openModalPanel", function(b, c) {
            switch (a.step = c.step,
            c.modal) {
            case g.LOGIN_ERROR_MODAL:
                angular.isDefined(c.step) && (c.step === g.PASSWORD_OTP_SCREEN ? a.isPassAndOtp = !0 : c.step === g.OTP_OK_SCREEN || c.step === g.CAPTURE_MEMORABLE_SCREEN2 ? a.isOtp = !0 : c.step === g.FTL && a.openModalError(),
                c.step !== g.CAPTURE_MEMORABLE_SCREEN && a.openModalError());
                break;
            case g.DEVICE_MODAL:
                angular.isDefined(c.step) && c.step === g.PASSMI_SCREEN ? a.isOtp = !0 : a.isOtp = !1,
                a.openModalDevice()
            }
        }),
        a.closeModalError = function() {
            $("#addBlockModalError").off("hide.bs.modal"),
            $("#addBlockModalError").modal("hide")
        }
        ,
        a.closeModalDevice = function() {
            $("#addBlockModalDevice").off("hide.bs.modal"),
            $("#addBlockModalDevice").modal("hide");
        }
        ,
        a.openModalError = function() {
            $("#addBlockModalError").off("hide.bs.modal"),
            $("#addBlockModalError").modal("toggle")
        }
        ,
        a.openModalDevice = function() {
            $("#addBlockModalDevice").off("hide.bs.modal"),
            $("#addBlockModalDevice").modal("toggle")
        }
        ,
        a.openModalBrowser = function() {
            $("#addBlockModalBrowser").off("hide.bs.modal"),
            $("#addBlockModalBrowser").modal("toggle")
        }
        ,
        a.closeModalBrowser = function() {
            $("#addBlockModalBrowser").off("hide.bs.modal"),
            $("#addBlockModalBrowser").modal("hide")
        }
        ,
        a.enterCustomerIdData = function() {
            a.closeModalError(),
            b.go("enterCustomerIdData")
        }
    }
    a.$inject = ["$scope", "$state", "enterActivationCodeService", "$stateParams", "logOnFactory", "LOGIN_WEBADAPTER", "logOnEnrollmentFactory", "$window"],
    angular.module("App.logOn").controller("scaModalsController", a)
}(),
angular.module("App.sca-modals.templates", ["/spasR46hfback/credentialsPublic/components/credentials-public/log-on/sca-modals/sca-modals-tpl.html"]),
angular.module("/spasR46hfback/credentialsPublic/components/credentials-public/log-on/sca-modals/sca-modals-tpl.html", []).run(["$templateCache", function(a) {
    "use strict";
    a.put("/spasR46hfback/credentialsPublic/components/credentials-public/log-on/sca-modals/sca-modals-tpl.html", '<proteo-ui-modal modal-id="modalTimeOut" modal-size="md" modal-type="primary" component="modalTimeOut"><proteo-ui-modal-header><div class="row"><div class="col-md-12 lg-padding-left"><proteo-ui-icon icon="error" class="md-margin-top float-icon"></proteo-ui-icon><h2 class="text-bold md-margin-top lg-margin-left" paragraph="true" translate="ERROR_TIMEOUT_TITLE"></h2></div></div><proteo-ui-modal-body class="proteo-select-account-body"><div class="row"><div class="col-md-12"><proteo-ui-text paragraph="true" translate="ERROR_TIMEOUT_DESCRIPTION"></proteo-ui-text></div></div></proteo-ui-modal-body><proteo-ui-modal-footer class="center-button"><proteo-ui-button ng-click="modalTimeOut.close()"><proteo-ui-text translate="ERROR_TIMEOUT_BUTTON"></proteo-ui-text></proteo-ui-button></proteo-ui-modal-footer></proteo-ui-modal-header></proteo-ui-modal><proteo-ui-modal modal-id="modalTimeOutFTL" modal-size="md" modal-type="primary" component="modalTimeOutFTL"><proteo-ui-modal-header><div class="row"><div class="col-md-12 lg-padding-left"><proteo-ui-icon icon="error" class="md-margin-top float-icon"></proteo-ui-icon><h2 class="md-margin-top lg-margin-left" paragraph="true" translate="ERROR_TIMEOUT_TITLE_NEW"></h2></div></div><proteo-ui-modal-body class="proteo-select-account-body"><div class="row"><div class="col-md-12"><proteo-ui-text paragraph="true" translate="ERROR_TIMEOUT_DESCRIPTION_NEW"></proteo-ui-text></div></div></proteo-ui-modal-body><proteo-ui-modal-footer class="center-button"><proteo-ui-button ng-click="modalTimeOutFTL.close()"><proteo-ui-text translate="ERROR_TIMEOUT_BUTTON_NEW"></proteo-ui-text></proteo-ui-button></proteo-ui-modal-footer></proteo-ui-modal-header></proteo-ui-modal><div ng-controller="scaModalsController"><proteo-ui-modal modal-id="addBlockModalError" modal-size="md" modal-type="primary" data-backdrop="static" data-keyboard="false"><div class="row md-margin-top md-margin-left md-margin-right"><h2><div ng-show="(!isActivation.length > 0 && !firstLoginOtpFlow.length > 0 && !lastAttemptFlow.length > 0) "><proteo-ui-text class="text-bold" translate="RETAIL_CREDENTIALS_PUBLIC_LOGON_SCA_INVALID_AUTHENTICATION_MODAL_TITLE"></proteo-ui-text></div><div ng-show="(isActivation.length > 0 || firstLoginOtpFlow.length > 0)"><proteo-ui-text class="text-bold ml-10" translate="RETAIL_CREDENTIALS_PUBLIC_LOGON_SCA_INVALID_AUTHENTICATION_MODAL_TITLE_SSL"></proteo-ui-text></div><div ng-show="(lastAttemptFlow.length > 0)"><proteo-ui-text class="text-bold ml-10" translate="RETAIL_CREDENTIALS_PUBLIC_LOGON_SCA_INVALID_AUTHENTICATION_MODAL_TITLE_LA"></proteo-ui-text></div></h2></div><proteo-ui-modal-body class="md-margin-top md-margin-left md-margin-right" ng-show="(!isActivation.length > 0 && !firstLoginOtpFlow.length > 0 && !lastAttemptFlow.length > 0)"><div id="loginModalError" class="md-margin text-red text-bold" ng-show="errorRemainingAttempts !== null"><proteo-ui-text class="text-bold" ng-bind="errorRemainingAttempts"></proteo-ui-text></div><proteo-ui-text translate="RETAIL_CREDENTIALS_PUBLIC_LOGON_SCA_INVALID_AUTHENTICATION_MODAL_LOG_IN_TEXT1"></proteo-ui-text><div class="md-margin-top md-margin-bottom"><ul class="unordered-list md-padding-left"><li class="list-element"><proteo-ui-text translate="RETAIL_CREDENTIALS_PUBLIC_LOGON_SCA_INVALID_AUTHENTICATION_MODAL_LOG_IN_TEXT2"></proteo-ui-text><li class="list-element"><proteo-ui-text translate="RETAIL_CREDENTIALS_PUBLIC_LOGON_SCA_INVALID_AUTHENTICATION_MODAL_LOG_IN_TEXT3"></proteo-ui-text>&nbsp;<proteo-ui-link ng-click="enterCustomerIdData()"><proteo-ui-text translate="RETAIL_CREDENTIALS_PUBLIC_LOGON_SCA_INVALID_AUTHENTICATION_MODAL_LOG_IN_TEXT4"></proteo-ui-text></proteo-ui-link>&nbsp;<proteo-ui-text translate="RETAIL_CREDENTIALS_PUBLIC_LOGON_SCA_INVALID_AUTHENTICATION_MODAL_LOG_IN_TEXT5"></proteo-ui-text><li class="list-element" ng-if="isOtp || isPassAndOtp"><proteo-ui-text translate="RETAIL_CREDENTIALS_PUBLIC_LOGON_SCA_INVALID_AUTHENTICATION_MODAL_LOG_IN_TEXT6"></proteo-ui-text></ul><div class="md-margin-top"><proteo-ui-text translate="RETAIL_CREDENTIALS_PUBLIC_LOGON_SCA_INVALID_AUTHENTICATION_MODAL_LOG_IN_TEXT7"></proteo-ui-text></div></div></proteo-ui-modal-body><proteo-ui-modal-body class="md-margin-top md-margin-left md-margin-right" ng-show="(isActivation.length > 0) "><div class="unordered-list md-padding-left"><proteo-ui-text class="md-margin-txt" translate="RETAIL_CREDENTIALS_PUBLIC_LOGON_SCA_INVALID_AUTHENTICATION_MODAL_LOG_IN_TEXT1_ACTCODE"></proteo-ui-text><div id="loginModalError" class="text mt-20" ng-show="errorRemainingAttempts !== null"><proteo-ui-text class="md-margin-txt" ng-bind="errorRemainingAttempts"></proteo-ui-text></div></div><div class="md-margin-top md-margin-bottom"><div class="unordered-list md-padding-left"><proteo-ui-text class="md-margin-txt" translate="RETAIL_CREDENTIALS_PUBLIC_LOGON_SCA_INVALID_AUTHENTICATION_MODAL_LOG_IN_TEXT3_ACTCODE"></proteo-ui-text>&nbsp;<proteo-ui-link ng-click="enterCustomerIdData()"><proteo-ui-text class="md-margin-link" translate="RETAIL_CREDENTIALS_PUBLIC_LOGON_SCA_INVALID_AUTHENTICATION_MODAL_LOG_IN_TEXT4_ACTCODE"></proteo-ui-text></proteo-ui-link>&nbsp;</div></div></proteo-ui-modal-body><proteo-ui-modal-body class="md-margin-top md-margin-left md-margin-right" ng-show="(firstLoginOtpFlow.length > 0)"><div class="unordered-list md-padding-left"><proteo-ui-text class="md-margin-txt mt-20" translate="RETAIL_CREDENTIALS_PUBLIC_LOGON_SCA_INVALID_AUTHENTICATION_MODAL_LOG_IN_TEXT1_SSL"></proteo-ui-text></div><div class="unordered-list md-padding-left mt-20"><div id="loginModalError" class="text" ng-show="errorRemainingAttempts !== null"><proteo-ui-text class="md-margin-txt" ng-bind="errorRemainingAttempts"></proteo-ui-text></div><div class="mt-20"><proteo-ui-text class="md-margin-txt" translate="RETAIL_CREDENTIALS_PUBLIC_LOGON_SCA_INVALID_AUTHENTICATION_MODAL_LOG_IN_TEXT2_SSL"></proteo-ui-text></div></div><div class="md-margin-top md-margin-bottom"><div class="unordered-list md-padding-left"><proteo-ui-text class="md-margin-txt" translate="RETAIL_CREDENTIALS_PUBLIC_LOGON_SCA_INVALID_AUTHENTICATION_MODAL_LOG_IN_TEXT3_SSL"></proteo-ui-text>&nbsp;<proteo-ui-link ng-click="enterCustomerIdData()"><proteo-ui-text class="md-margin-link" translate="RETAIL_CREDENTIALS_PUBLIC_LOGON_SCA_INVALID_AUTHENTICATION_MODAL_LOG_IN_TEXT4_SSL"></proteo-ui-text></proteo-ui-link>&nbsp;</div></div></proteo-ui-modal-body><proteo-ui-modal-body class="md-margin-top md-margin-left md-margin-right" ng-show="lastAttemptFlow.length > 0"><div class="unordered-list md-padding-left"><proteo-ui-text class="md-margin-txt" id="last1" translate="RETAIL_CREDENTIALS_PUBLIC_LOGON_SCA_INVALID_AUTHENTICATION_MODAL_LOG_IN_TEXT1_LA"></proteo-ui-text><div class="mt-20"><proteo-ui-text class="md-margin-txt" id="last2" translate="RETAIL_CREDENTIALS_PUBLIC_LOGON_SCA_INVALID_AUTHENTICATION_MODAL_LOG_IN_TEXT1_LA2"></proteo-ui-text></div></div></proteo-ui-modal-body><proteo-ui-modal-footer class="md-margin-top md-margin-left md-margin-right" ng-show="(!isActivation.length > 0 && !firstLoginOtpFlow.length > 0 && !lastAttemptFlow.length > 0)"><proteo-ui-modal-call-back><div class="row"><proteo-ui-button class="center-block" ng-click="tryAgainLogin()" class="pull-right"><proteo-ui-text translate="RETAIL_CREDENTIALS_PUBLIC_LOGON_SCA_INVALID_AUTHENTICATION_MODAL_TRYAGAIN"></proteo-ui-text></proteo-ui-button></div></proteo-ui-modal-call-back></proteo-ui-modal-footer><proteo-ui-modal-footer class="md-margin-top md-margin-left md-margin-right" ng-show="isActivation.length > 0"><proteo-ui-modal-call-back><div class="row"><proteo-ui-button class="pull-right" ng-click="tryAgainLogin()" id="button"><proteo-ui-text translate="RETAIL_CREDENTIALS_PUBLIC_LOGON_SCA_INVALID_AUTHENTICATION_MODAL_TRYAGAIN_RESET"></proteo-ui-text></proteo-ui-button><div><proteo-ui-button class="pull-left" ng-click="getActCode()" ng-if="!lastAttempt" id="btn1"><proteo-ui-text id="fnt-color" translate="RETAIL_CREDENTIALS_PUBLIC_LOGON_SCA_INVALID_AUTHENTICATION_MODAL_GETACTCODE"></proteo-ui-text></proteo-ui-button></div></div></proteo-ui-modal-call-back></proteo-ui-modal-footer><proteo-ui-modal-footer class="md-margin-top md-margin-left md-margin-right" ng-show="firstLoginOtpFlow.length > 0"><proteo-ui-modal-call-back><div class="row" id="btnTryAgain"><proteo-ui-button ng-click="tryAgainLogin()" id="button"><proteo-ui-text translate="RETAIL_CREDENTIALS_PUBLIC_LOGON_SCA_INVALID_AUTHENTICATION_MODAL_TRYAGAIN_RESET"></proteo-ui-text></proteo-ui-button></div></proteo-ui-modal-call-back></proteo-ui-modal-footer><proteo-ui-modal-footer class="md-margin-top md-margin-left md-margin-right" ng-show="lastAttemptFlow.length > 0"><proteo-ui-modal-call-back><div class="row"><proteo-ui-button class="pull-right" ng-click="resetLogin()" id="button"><proteo-ui-text translate="RETAIL_CREDENTIALS_PUBLIC_LOGON_SCA_INVALID_AUTHENTICATION_MODAL_RESETLOGIN"></proteo-ui-text></proteo-ui-button><div><proteo-ui-button class="pull-left" ng-click="leave()" id="btn1"><proteo-ui-text id="fnt-color" translate="RETAIL_CREDENTIALS_PUBLIC_LOGON_SCA_INVALID_AUTHENTICATION_MODAL_GOBACKTOTSB"></proteo-ui-text></proteo-ui-button></div></div></proteo-ui-modal-call-back></proteo-ui-modal-footer></proteo-ui-modal><proteo-ui-modal modal-id="addBlockModalDevice" modal-size="md" modal-type="primary" data-backdrop="static" data-keyboard="false"><div class="row md-margin-top md-margin-left md-margin-right"><h2><proteo-ui-text class="text-bold" translate="RETAIL_CREDENTIALS_PUBLIC_LOGON_SCA_ENROLLDEVICE_MODAL_TITLE"></proteo-ui-text></h2></div><proteo-ui-modal-body class="md-margin-top md-margin-left md-margin-right"><proteo-ui-text translate="RETAIL_CREDENTIALS_PUBLIC_LOGON_SCA_ENROLLDEVICE_MODAL_TEXT1"></proteo-ui-text><div class="md-margin-top"><proteo-ui-text translate="RETAIL_CREDENTIALS_PUBLIC_LOGON_SCA_ENROLLDEVICE_MODAL_TEXT2"></proteo-ui-text></div></proteo-ui-modal-body><proteo-ui-modal-footer class="md-margin-top md-margin-left md-margin-right"><proteo-ui-modal-call-back><proteo-ui-button ng-click="trust()" class="pull-right"><proteo-ui-text translate="RETAIL_CREDENTIALS_PUBLIC_LOGON_SCA_ENROLLDEVICE_MODAL_BUTTON_TRUST"></proteo-ui-text></proteo-ui-button><proteo-ui-button ng-click="dontTrust()" class="mt-10 mt-sm-0 pull-left btn-white"><proteo-ui-text translate="RETAIL_CREDENTIALS_PUBLIC_LOGON_SCA_ENROLLDEVICE_MODAL_BUTTON_NOTTRUST"></proteo-ui-text></proteo-ui-button></proteo-ui-modal-call-back></proteo-ui-modal-footer></proteo-ui-modal><proteo-ui-modal modal-id="addBlockModalBrowser" modal-size="md" modal-type="primary" data-backdrop="static" data-keyboard="false"><div class="row md-margin-top md-margin-left md-margin-right"><h2><proteo-ui-text class="text-bold" translate="RETAIL_CREDENTIALS_PUBLIC_LOGON_SCA_BROWSER_MODAL_TITLE"></proteo-ui-text></h2></div><proteo-ui-modal-body class="md-margin-top md-margin-left md-margin-right"><div class="md-margin-top"><proteo-ui-text translate="RETAIL_CREDENTIALS_PUBLIC_LOGON_SCA_BROWSER_MODAL_TEXT1"></proteo-ui-text></div><div class="md-margin-top md-margin-bottom"><proteo-ui-text translate="RETAIL_CREDENTIALS_PUBLIC_LOGON_SCA_BROWSER_MODAL_TEXT2"></proteo-ui-text></div></proteo-ui-modal-body><proteo-ui-modal-footer class="md-margin-top md-margin-left md-margin-right"><proteo-ui-modal-call-back><proteo-ui-button ng-click="agree()" class="center-block"><proteo-ui-text translate="RETAIL_CREDENTIALS_PUBLIC_LOGON_SCA_BROWSER_MODAL_CLOSE"></proteo-ui-text></proteo-ui-button></proteo-ui-modal-call-back></proteo-ui-modal-footer></proteo-ui-modal></div>')
}
]),
function() {
    "use strict";
    angular.module("App.scaEnrollment.functions").factory("scaEnrollmentFunctionsFactory", ["$q", "$log", "scaEnrollmentFunctionsService", "logOnFactory", "ConsultiveProvider", "TRANSACTION_CODE", function(a, b, c, d, e, f) {
        function g(a, b) {
            try {
                var c, d, e, f, g = {
                    Chrome: [/Chrome\/(\S+)/],
                    Firefox: [/Firefox\/(\S+)/],
                    MSIE: [/MSIE (\S+);/],
                    Opera: [/Opera\/.*?Version\/(\S+)/, /Opera\/(\S+)/],
                    Safari: [/Version\/(\S+).*?Safari\//],
                    MSIE11: [/Trident\/(\S+)/]
                };
                void 0 === a && (a = navigator.userAgent),
                void 0 === b ? b = 2 : 0 === b && (b = 1337);
                for (e in g)
                    if (g.hasOwnProperty(e))
                        for (; c = g[e].shift(); )
                            if (d = a.match(c))
                                return f = d[1].match(new RegExp("[^.]+(?:.[^.]+){0," + --b + "}"))[0],
                                {
                                    browser: e,
                                    version: f
                                }
            } catch (h) {}
            return {
                browser: a,
                version: "0.0"
            }
        }
        var h = {};
        return h.FP_OK_CODE = "IP00",
        h.FP_KO_CODE = "IP01",
        h.fingerprint = null,
        h.headers = {},
        h.getHeader = function() {
            return null != h.fingerprint ? h.headers : null
        }
        ,
        h.setHeader = function(a) {
            var a = {
                "HEADER.FINGERPRINT": h.fingerprint
            };
            angular.extend(h.headers, a)
        }
        ,
        h.calculateFingerprint = function() {
            var b = a.defer();
            try {
                Fingerprint2.get(h.options, function(a) {
                    var c = a.map(function(a) {
                        return a.value
                    })
                      , d = Fingerprint2.x64hash128(c.join(""), 31);
                    void 0 !== d && null !== d ? (h.data = d,
                    b.resolve({
                        code: h.FP_OK_CODE,
                        fingerprint: d
                    })) : (h.data = null,
                    b.reject({
                        code: h.FP_KO_CODE,
                        message: "Fingerprint Error"
                    }))
                })
            } catch (c) {
                h.data = null,
                b.reject({
                    code: h.FP_KO_CODE,
                    message: "Fingerprint Error"
                })
            }
            return b.promise
        }
        ,
        h.loadFingerprint = function(a, c) {
            return null !== h.fingerprint && angular.isDefined(a) ? void a() : void (null === h.fingerprint && h.calculateFingerprint().then(function(b) {
                b.code === h.FP_OK_CODE ? (h.fingerprint = b.fingerprint,
                h.setHeader(),
                angular.isDefined(a) && a()) : (h.fingerprint = null,
                angular.isDefined(c) && c())
            }, function(a) {
                h.fingerprint = null,
                angular.isDefined(c) && c(a),
                b.debug(a)
            }))
        }
        ,
        h.loadFingerprintSca = function() {
            null === h.fingerprint && (h.options.excludes.userAgent = !0,
            h.options.excludes.canvas = !0,
            h.options.excludes.language = !0,
            h.calculateFingerprint().then(function(a) {
                a.code === h.FP_OK_CODE ? h.headers = {
                    "HEADER.FINGERPRINT.SCA": a.fingerprint
                } : b.debug("Error calculate fingerprint"),
                h.resetOptions(),
                h.loadFingerprint()
            }, function(a) {
                h.resetOptions(),
                b.debug(a)
            }))
        }
        ,
        h.enrollmentProcess = function(a, b, c) {
            h.loadFingerprint(function() {
                e.validatePublicOperation(f[5]).then(function(d) {
                    h.callEnrollmentProcess(a, b, c)
                })["catch"](function(a) {
                    c(a)
                })
            }, function(a) {
                c(a)
            })
        }
        ,
        h.getFingerprint = function() {
            return null != h.fingerprint ? h.fingerprint : null
        }
        ,
        h.callEnrollmentProcess = function(a, e, f) {
            var g = angular.extend({}, h.headers, d.getDefaultHeader(), {
                "HEADER.SERVICE_SCOPE": "PUBLIC"
            });
            c.enrollmentProcess(a, null, g).then(function(a) {
                angular.isDefined(e) && e()
            }, function(a) {
                b.error(a),
                angular.isDefined(f) && f(a)
            })
        }
        ,
        h.resetOptions = function() {
            h.options.excludes.userAgent = !1,
            h.options.excludes.canvas = !1,
            h.options.excludes.language = !1
        }
        ,
        h.options = {
            preprocessor: function(a, b) {
                if ("userAgent" == a) {
                    var c = g(b, 0)
                      , d = c.browser;
                    return d
                }
                return b
            },
            excludes: {
                userAgent: !1,
                webdriver: !0,
                language: !1,
                colorDepth: !1,
                deviceMemory: !0,
                pixelRatio: !0,
                hardwareConcurrency: !1,
                screenResolution: !0,
                availableScreenResolution: !0,
                timezoneOffset: !0,
                timezone: !0,
                sessionStorage: !0,
                localStorage: !0,
                indexedDb: !0,
                addBehavior: !0,
                openDatabase: !0,
                cpuClass: !1,
                platform: !1,
                doNotTrack: !0,
                plugins: !0,
                canvas: !1,
                webgl: !1,
                webglVendorAndRenderer: !1,
                adBlock: !0,
                hasLiedLanguages: !0,
                hasLiedResolution: !0,
                hasLiedOs: !0,
                hasLiedBrowser: !0,
                touchSupport: !0,
                fonts: !0,
                fontsFlash: !0,
                audio: !0,
                enumerateDevices: !0
            }
        },
        h
    }
    ])
}(),
function() {
    "use strict";
    angular.module("App.scaEnrollment.functions").factory("scaEnrollmentFunctionsService", ["$log", "proteocanalinvokerServices", "$q", "LOGIN_WEBADAPTER", "consultiveFactory", function(a, b, c, d, e) {
        a.debug("scaEnrollmentFunctionsService loading");
        var f = {};
        return f.callService = function(d, f, g, h) {
            function i(a) {
                k.resolve(a)
            }
            function j(a) {
                k.reject(a)
            }
            var k = c.defer();
            if (null !== e.getOperationID()) {
                b.error(j);
                var l = {
                    service: h,
                    callback: i,
                    fail: j,
                    headers: g,
                    data: d
                };
                angular.isDefined(f) && null !== f && (l = angular.extend(l, {
                    idLoader: f,
                    bigLoader: !0
                })),
                b.invoke(l)
            } else
                k.reject({}),
                a.error("Consultive error");
            return k.promise
        }
        ,
        f.enrollmentProcess = function(a, b, c) {
            return f.callService(a, b, c, d.enrollmentProcess)
        }
        ,
        f
    }
    ])
}(),
function() {
    "use strict";
    angular.module("App.scaEnrollment").controller("scaEnrollmentOtpController", ["$translate", "$scope", "ConsultiveProvider", "$state", "$timeout", "$stateParams", "logOnEnrollmentFactory", "tsbJournalService", "logOnFactory", "scaEnrollmentFunctionsFactory", "LOGIN_WEBADAPTER", "DataLayerProvider", function(a, b, c, d, e, f, g, h, i, j, k, l) {
        function m() {
            n(),
            i.resetTimeout(),
            i.timeoutPromise = e(function() {
                b.modalTimeOut.open()
            }, 6e5),
            l.updateScaDataLayer("scaEnrollment"),
            JSM._dataLayerSPAReady()
        }
        function n() {
            b.operationData = {
                headers: angular.extend({}, j.getHeader(), i.getDefaultHeader()),
                getPhones: k.getPhonesLogin,
                params: {
                    authId: i.getAuthId(),
                    userId: i.getUserId()
                }
            }
        }
        b.model = null,
        b.errorMessage = null,
        b.globalError = !1,
        b.continueButton = !1,
        b.stateParams = f && f.data ? f.data : null,
        b.otpComplete = !1,
        b.consultive = {
            tcSelected: c.tcSelected
        },
        b.modalTimeOut = {
            onClose: function() {
                b.cancel()
            }
        },
        b.cancel = function() {
            d.go("login")
        }
        ,
        b.previousStep = function() {
            b.globalError = !1,
            b.$broadcast("previousEvent", function() {
                var a = g.getData("MI_DATA");
                d.go("memorableInformation", a)
            })
        }
        ,
        b.userAuthenticated = function(a) {
            h.newOperation(),
            b.globalError = !1,
            g.enrollmentHandler(a, b, g.OTP_OK_SCREEN),
            b.otpComplete = !0
        }
        ,
        b.notPhones = function() {
            h.newOperation()
        }
        ,
        b.invalidAuthentication = function(a) {
            angular.isDefined(b.exceptionLiteral) && b.exceptionLiteral.length > 0 && (b.globalError = !0,
            b.errorMessage = b.exceptionLiteral),
            angular.isDefined(a.exception.description) && (b.globalError = !0,
            b.errorMessage = a.exception.description),
            !angular.isDefined(a) || "ERRSCA03" !== a.exception.code && "ERRSCA03B" !== a.exception.code && "ERRSCA04" !== a.exception.code || (b.globalError = !1,
            g.enrollmentErrorHandler(a, b, g.OTP_OK_SCREEN)),
            JSM._updateDataLayer({
                application_name: "OTP panel",
                application_step: "Error message",
                error_description: b.errorMessage
            })
        }
        ,
        m()
    }
    ])
}(),
function() {
    "use strict";
    angular.module("App.sca-enrollment-otp-panel").controller("scaEnrollmentOtpPanelController", ["scaEnrollmentOtpPanelDataFactory", "scaEnrollmentOtpPanelService", "logOnFactory", "scaEnrollmentOtpPanelFactory", "scaEnrollmentOtpPanelErrorFactory", "$filter", function(a, b, c, d, e, f) {
        function g(d, f, g) {
            var i = b.getOperationIDHeaders(a);
            b.checkValidationService(d, f, null, i).then(function(d) {
                c.setServerFromResponse(d),
                angular.isDefined(d) && d.tokenId ? (b.setError(null),
                a.exceptionLiteral = "isValid",
                g.isValid({
                    data: {
                        tokenId: d.tokenId
                    }
                })) : angular.isDefined(d) && d.authId ? (b.setError(null),
                a.exceptionLiteral = "isValid",
                g.isValid({})) : (a.restart(),
                JSM._updateDataLayer({
                    error_message: h("COMMON_SIGNATURE_PANEL_ERROR_INVALID")
                }),
                b.setError(h("COMMON_SIGNATURE_PANEL_ERROR_INVALID")),
                g.isInvalid())
            }, function(a) {
                e.checkValidationErrorHandler(a, g)
            })
        }
        var h = f("translate");
        this.watchers = {},
        this.init = function(b) {
            this.goWithActivation = b.goWithActivation,
            b.launchSignatureButton = function() {
                a.clickButton = !0
            }
            ,
            b.selectPhone = function(a) {
                d.selectPhone(a, b.memorableInfo, b)
            }
            ,
            b.templateName = "otp",
            a.setSignatureType(b.templateName),
            a.notAuthValidate = !1
        }
        ,
        this.initWatchers = function(b) {
            this.watchers.watcher1 = b.$watchCollection("data", function(b) {
                a.setData(b)
            }),
            this.watchers.watcher2 = b.$watchCollection(function() {
                return a.exceptionLiteral
            }, function(a) {
                "isValid" === a && (b.isValidFlag = !0),
                a && (b.exceptionLiteral = a)
            }, !0);
            var c = this;
            this.watchers.watcher3 = b.$watchCollection(function() {
                return a.reset
            }, function(d, e) {
                a.reset ? (b.resetDirective = !0,
                c.init(b),
                a.reset = !1,
                b.data.pass = null,
                b.data.otp = null) : b.resetDirective = !1
            }, !0),
            b.$on("previousEvent", function(e, f) {
                b.selectedPhone ? (a.initData(b, {
                    "public": b.isPublic
                }),
                d.initPhone(b),
                b.formName.OTPForm.OTPInput.$$lastCommittedViewValue = "",
                b.formName.OTPForm.OTPInput.$rollbackViewValue(),
                c.init(b)) : f()
            })
        }
        ,
        this.initButtonsWatchers = function(c) {
            this.watchers.watcher4 = c.$watchCollection(function() {
                return a.notAuthValidate
            }, function(a, d) {
                if (1 == a) {
                    b.setError(h("COMMON_SIGNATURE_PANEL_VALIDATION_ERROR"));
                    var e = {
                        err: {
                            authValidate: !1
                        }
                    };
                    c.isInvalid(e)
                }
            }, !0)
        }
        ,
        this.unregisterWatchers = function() {
            this.watchers.watcher1(),
            this.watchers.watcher2(),
            this.watchers.watcher3(),
            this.watchers.watcher4()
        }
        ,
        this.initButtonPanel = function(d) {
            d.checkValidation = function() {
                c.getFirstLogin() && c.getFirstLoginCode() || (JSM.callbFlush(),
                console.log("Biocatch Flush for mouse continue")),
                a.setOtpData(d.$parent.signatureForm.OTPForm.OTPInput.$viewValue),
                d.$parent.stateParams.firstTimeLogin && a.setFTLData(d.$parent.stateParams.firstTimeLogin);
                var e = b.getBodyParams(a, d.$parent)
                  , f = null;
                f = "branch" === c.getChannel() ? b.getEndPoint("informPasswordAndOtp", a) : b.getEndPoint(null, a),
                g(e, f, d)
            }
            ,
            d.biocatchFlush = function() {
                c.getFirstLogin() || (JSM.callbFlush(),
                console.log("Biocatch Flush for mouse continue"))
            }
        }
    }
    ])
}(),
function() {
    "use strict";
    angular.module("App.sca-enrollment-otp-panel").factory("scaEnrollmentOtpPanelDataFactory", ["scaEnrollmentOtpPanelService", "APP_CONFIG", "LOGIN_WEBADAPTER", function(a, b, c) {
        var d = {};
        return d.goWithActivation = function() {}
        ,
        d.setIsBiz = function(a) {
            d.isBiz = a
        }
        ,
        d.setPhone = function(a) {
            d.phone = a
        }
        ,
        d.getPhone = function() {
            return d.phone
        }
        ,
        d.getIsBiz = function() {
            return d.isBiz
        }
        ,
        d.setOtpData = function(a) {
            d.otp = a
        }
        ,
        d.getOtpData = function() {
            return d.otp
        }
        ,
        d.setFTLData = function(a) {
            d.firstTimeLogin = a
        }
        ,
        d.getFTLData = function() {
            return d.firstTimeLogin
        }
        ,
        d.setData = function(a) {
            d.data = a
        }
        ,
        d.getData = function() {
            return d.data
        }
        ,
        d.setSignatureType = function(a) {
            d.signatureType = a
        }
        ,
        d.getSignatureType = function() {
            return d.signatureType
        }
        ,
        d.sumOtpAttempts = function() {
            d.otpAttempts++
        }
        ,
        d.getOtpAttempts = function() {
            return d.otpAttempts
        }
        ,
        d.restart = function() {
            d.reset = !0
        }
        ,
        d.setOperationData = function(a) {
            d.operationData = a
        }
        ,
        d.getOperationData = function() {
            return d.operationData
        }
        ,
        d.initData = function(c, e) {
            d.signatureType = "",
            d.exceptionLiteral = "",
            d.data = {},
            d.reset = !1,
            d.publicHeaders = null,
            d.firstTimeLogin = "",
            d.isBiz = !1,
            d.phone = {},
            d.notAuthValidate = !1,
            d.otpAttempts = 0,
            d.clickButton = !1,
            d.operationData = {},
            c.data = {},
            c.data.otp = null,
            c.selectedPhone = c.$parent.selectedPhone = !1,
            c.phone = {},
            c.memorableInfo = {},
            c.displayedErrorAux = !1,
            c.exceptionLiteral = "",
            c.displayedError = !1,
            c.isValidFlag = !1,
            c.resetDirective = !1,
            a.setError(null),
            c.getPhoneHeaders = {},
            c.phoneData = {},
            c.spMinLength = c.spMinLength || null,
            c.spMaxLength = c.spMaxLength || null,
            c.isBiz = angular.isDefined(b.Procedence) && "WB01" === b.Procedence ? !0 : !1,
            c.isPublic = angular.isDefined(e["public"]) ? !0 : !1,
            d.setIsBiz(c.isBiz),
            c.getPhoneHeaders = a.getOperationIDHeaders(d),
            angular.isDefined(c.operationData) && d.setOperationData(c.operationData)
        }
        ,
        d
    }
    ])
}(),
function() {
    "use strict";
    angular.module("App.sca-enrollment-otp-panel").directive("scaEnrollmentOtp", function() {
        return {
            restrict: "A",
            scope: {},
            controller: "scaEnrollmentOtpPanelController"
        }
    }).directive("scaEnrollmentOtpPanelError", ["scaEnrollmentOtpPanelService", function(a) {
        return {
            restrict: "A",
            templateUrl: "/spasR46hfback/credentialsPublic/components/credentials-public/log-on/scaEnrollment/sca-enrollment-otp-panel/sca-enrollment-otp-panel-error.html",
            link: function(b) {
                b.$watchCollection(function() {
                    return a.getError()
                }, function(a) {
                    b.error = a
                }, !0)
            }
        }
    }
    ]).directive("scaEnrollmentOtpPanel", ["scaEnrollmentOtpPanelDataFactory", "scaEnrollmentOtpPanelFactory", function(a, b) {
        return {
            restrict: "E",
            require: "^scaEnrollmentOtp",
            scope: {
                formName: "=",
                data: "=?output",
                spMinLength: "=?",
                spMaxLength: "=?",
                operationData: "=?",
                goWithActivation: "&"
            },
            templateUrl: "/spasR46hfback/credentialsPublic/components/credentials-public/log-on/scaEnrollment/sca-enrollment-otp-panel/sca-enrollment-otp-panel-tpl.html",
            link: function(c, d, e, f) {
                a.initData(c, e),
                f.initWatchers(c),
                b.initPhone(c),
                f.init(c)
            }
        }
    }
    ]).directive("scaEnrollmentOtpPanelButton", function() {
        return {
            require: "^scaEnrollmentOtp",
            restrict: "E",
            transclude: !0,
            replace: !0,
            scope: {
                isValid: "&",
                isInvalid: "&"
            },
            template: '<button ng-click="checkValidation()" ng-mouseover="biocatchFlush()" class="btn md-btn" ng-transclude></button>',
            link: function(a, b, c, d) {
                d.initButtonsWatchers(a),
                d.initButtonPanel(a)
            }
        }
    })
}(),
function() {
    "use strict";
    angular.module("App.sca-enrollment-otp-panel").factory("scaEnrollmentOtpPanelErrorFactory", ["scaEnrollmentOtpPanelService", "APP_CONFIG", "$filter", "$log", "$state", "scaEnrollmentOtpPanelDataFactory", function(a, b, c, d, e, f) {
        function g(a) {
            a.displayedErrorAux || (a.formName.$setValidity("signaturePanelError", !1),
            a.displayedError = !0)
        }
        var h = {}
          , i = c("translate");
        return h.errorHandler = function(b, c) {
            var e = angular.isDefined(b) && angular.isDefined(b.exception) && angular.isDefined(b.exception.code)
              , f = e && angular.isDefined(b.exception.description) && "" !== b.exception.description;
            g(c),
            e && f && b.exception.code.indexOf("ERR") > -1 ? (a.setError(b.exception.description),
            d.debug(b.exception)) : b.exception && "408" === b.exception.code && (a.setTimeoutError(),
            $(".error").addClass("timeOutError"),
            $(".timeout-message").css("padding-left", "5px"),
            d.debug(b.exception),
            c.FTLerror = !0)
        }
        ,
        h.genericError = function() {
            var a = {
                template: "technicalError",
                title: "COMMON_GLOBALERROR_TITLE_SP",
                backMessage: !1,
                backLink: !1,
                message: "ENROLLMENT_GLOBAL_ERROR",
                linkText: "COMMON_GLOBALERROR_BACK_TO_BANK_SP",
                linkState: "login",
                hideBackLinkButton: !1,
                goBackState: "login",
                isBiz: "B" === b.Procedence[1] ? !0 : !1
            };
            JSM._updateDataLayer({
                error_message: i("COMMON_SIGNATURE_PANEL_ERROR_INVALID")
            }),
            e.go("globalErrorPage", a)
        }
        ,
        h.checkValidationErrorHandler = function(b, c) {
            angular.isDefined(b) && angular.isDefined(b.exception) ? c.isInvalid({
                err: b
            }) : (c.isInvalid(),
            JSM._updateDataLayer({
                error_message: i("COMMON_SIGNATURE_PANEL_ERROR_INVALID")
            }),
            a.setErrorSystem()),
            f.restart()
        }
        ,
        h
    }
    ])
}(),
function() {
    "use strict";
    angular.module("App.sca-enrollment-otp-panel").factory("scaEnrollmentOtpPanelFactory", ["scaEnrollmentOtpPanelDataFactory", "scaEnrollmentOtpPanelService", "scaEnrollmentOtpPanelErrorFactory", "tsbJournalService", "logOnFactory", function(a, b, c, d, e) {
        function f(a) {
            var b = a;
            return "+" !== a.charAt(0) && (b = "+" + a),
            b
        }
        var g = {};
        return g.selectPhone = function(g, h, i) {
            if (i.phone = g,
            "work" !== g.type || "" === g.extension || null === g.extension) {
                var j = b.getEndPoint("informOTP", a)
                  , k = {
                    authId: i.operationData.params.authId,
                    notificationType: g.type,
                    phoneNumber: f(g.number),
                    server: e.getServer()
                }
                  , l = b.getOperationIDHeaders(a);
                b.checkValidationService(k, j, null, l).then(function(a) {
                    e.setServerFromResponse(a),
                    i.selectedPhone = i.$parent.selectedPhone = !0,
                    b.setPhoneNumber(k.phoneNumber),
                    b.setPhoneType(k.notificationType)
                }, function(a) {
                    d.newOperation(),
                    c.errorHandler(a, i)
                })
            }
        }
        ,
        g.initPhone = function(a) {
            a.isDisabled = function(a) {
                return angular.equals(a, {})
            }
            ,
            angular.isDefined(a.operationData) && (a.phoneData.headers = a.operationData.headers,
            a.phoneData.getPhones = a.operationData.getPhones,
            a.phoneData.params = {
                userDetails: {
                    userId: a.operationData.params.userId
                }
            })
        }
        ,
        g
    }
    ])
}(),
function() {
    "use strict";
    angular.module("App.sca-enrollment-otp-panel").factory("scaEnrollmentOtpPanelService", ["$filter", "proteocanalinvokerServices", "$q", "LOGIN_WEBADAPTER", "logOnFactory", function(a, b, c, d, e) {
        var f = {}
          , g = null
          , h = a("translate");
        return f.setError = function(a) {
            g = a
        }
        ,
        f.setErrorSystem = function() {
            g = h("ERROR_SISTEMA")
        }
        ,
        f.setTimeoutError = function() {
            g = h("COMMON_TIMEOUT_ERROR")
        }
        ,
        f.getError = function() {
            return g
        }
        ,
        f.setPhoneNumber = function(a) {
            this.phoneNumber = a
        }
        ,
        f.setPhoneType = function(a) {
            this.notificationType = a
        }
        ,
        f.checkValidationService = function(a, d, e, f) {
            function g(a) {
                i.resolve(a)
            }
            function h(a) {
                i.reject(a)
            }
            var i = c.defer();
            b.error(h);
            var j = {
                service: d,
                callback: g,
                fail: h,
                headers: f,
                data: a
            };
            return angular.isDefined(e) && null !== e && (j = angular.extend(j, {
                idLoader: e,
                bigLoader: !0
            })),
            b.invoke(j),
            i.promise
        }
        ,
        f.getEndPoint = function(a) {
            return "informOTP" === a ? d.generateOtp : "informPasswordAndOtp" === a ? d.validatePasswordAndOtp : d.validateOtp
        }
        ,
        f.getOperationIDHeaders = function(a) {
            var b;
            return a.publicHeaders ? b = a.publicHeaders : (a.publicHeaders = angular.copy({
                "HEADER.SERVICE_SCOPE": "PUBLIC"
            }),
            b = a.publicHeaders),
            b
        }
        ,
        f.getBodyParams = function(a, b) {
            var c = {};
            return "branch" === b.channel ? c = {
                authId: e.getAuthId(),
                username: e.getUserId(),
                otpCode: a.getOtpData(),
                password: b.data.password,
                notificationType: this.notificationType,
                phoneNumber: this.phoneNumber,
                server: e.getServer(),
                temporaryPasswordLogin: !0
            } : (c = {
                authId: e.getAuthId(),
                userName: e.getUserId(),
                otpCode: a.getOtpData(),
                server: e.getServer()
            },
            a.getFTLData() && (c.firstTimeLogin = a.getFTLData())),
            c
        }
        ,
        f
    }
    ])
}(),
angular.module("App.sca-enrollment-otp-panel.templates", ["/spasR46hfback/credentialsPublic/components/credentials-public/log-on/scaEnrollment/sca-enrollment-otp-panel/sca-enrollment-otp-panel-error.html", "/spasR46hfback/credentialsPublic/components/credentials-public/log-on/scaEnrollment/sca-enrollment-otp-panel/sca-enrollment-otp-panel-tpl.html"]),
angular.module("/spasR46hfback/credentialsPublic/components/credentials-public/log-on/scaEnrollment/sca-enrollment-otp-panel/sca-enrollment-otp-panel-error.html", []).run(["$templateCache", function(a) {
    "use strict";
    a.put("/spasR46hfback/credentialsPublic/components/credentials-public/log-on/scaEnrollment/sca-enrollment-otp-panel/sca-enrollment-otp-panel-error.html", '<div class="col-xs-12 sm-padding md-margin-bottom" ng-if="error"><proteo-ui-icon icon-bg="red" icon="alert" class="timeout-message"></proteo-ui-icon><proteo-ui-text class="text-bold" ng-bind="error"></proteo-ui-text></div>')
}
]),
angular.module("/spasR46hfback/credentialsPublic/components/credentials-public/log-on/scaEnrollment/sca-enrollment-otp-panel/sca-enrollment-otp-panel-tpl.html", []).run(["$templateCache", function(a) {
    "use strict";
    a.put("/spasR46hfback/credentialsPublic/components/credentials-public/log-on/scaEnrollment/sca-enrollment-otp-panel/sca-enrollment-otp-panel-tpl.html", '<div id="signaturePanel"><div class="col-xs-12 md-margin-top md-padding error md-margin-bottom timeOutError" ng-if="globalError"><span class="icon"><proteo-ui-icon icon-bg="red" icon="error"></proteo-ui-icon></span><span class="error-text"><proteo-ui-text ng-show="globalError" translate="{{errorMessage}}"></proteo-ui-text></span></div><div ng-if="templatename === \'nosign\'"></div><div ng-if="templateName === \'otp\'"><div ng-if="!$parent.selectedPhone && !isValidFlag" class="col-xs-12"><proteo-ui-authentication-panel-telephone no-phones-atrieved="$parent.goWithActivation()" selected-phone="$parent.phone" custom-headers="$parent.getPhoneHeaders" login-get-phone-data="$parent.phoneData"></proteo-ui-authentication-panel-telephone><proteo-ui-button ng-disabled="isDisabled(phone)" class="pull-right" ng-click="$parent.selectPhone(phone)" type="button"><proteo-ui-text translate="RETAIL_SIGNATUREPANEL_OTP_CONTINUE_BUTTON"></proteo-ui-text></proteo-ui-button></div><div ng-show="$parent.selectedPhone" class="col-xs-12"><proteo-ui-sca-otp-authentication-panel is-sms="$parent.phone.type === \'mobile\'" reset-input="resetDirective" entered-otp="$parent.data.otp" is-sca="true"><span translate="AUTHENTICATION_DFLT_TXT"></span></proteo-ui-sca-otp-authentication-panel></div><div class="col-xs-12 error sm-padding error md-margin-bottom" id="literalException" ng-if="exceptionLiteral && exceptionLiteral != \'isValid\'"><proteo-ui-icon icon-bg="red" icon="alert"></proteo-ui-icon><proteo-ui-text class="text-bold" ng-bind="exceptionLiteral"></proteo-ui-text></div><div ng-if="displayedError && !FTLerror" class="col-xs-12 pb-10 error md-margin-bottom"><proteo-ui-icon icon-bg="red" icon="alert" id="alertIcoSignature"></proteo-ui-icon><proteo-ui-text class="text-bold" translate="COMMON_SIGNATURE_PANEL_ERROR_MESSAGE"></proteo-ui-text></div></div></div>')
}
]),
function() {
    "use strict";
    angular.module("App.scaEnrollment").config(["$stateProvider", function(a) {
        a.state("scaEnrollmentOtp", {
            url: "/scaEnrollmentOtp",
            templateUrl: "/spasR46hfback/credentialsPublic/components/credentials-public/log-on/scaEnrollment/sca-enrollment-otp-tpl.html",
            controller: "scaEnrollmentOtpController",
            params: {
                data: null,
                exceptionLiteral: null,
                fraudError: null
            }
        })
    }
    ])
}(),
angular.module("App.scaEnrollment.templates", ["/spasR46hfback/credentialsPublic/components/credentials-public/log-on/scaEnrollment/sca-enrollment-otp-tpl.html"]),
angular.module("/spasR46hfback/credentialsPublic/components/credentials-public/log-on/scaEnrollment/sca-enrollment-otp-tpl.html", []).run(["$templateCache", function(a) {
    "use strict";
    a.put("/spasR46hfback/credentialsPublic/components/credentials-public/log-on/scaEnrollment/sca-enrollment-otp-tpl.html", '<div ng-include="\'/spasR46hfback/credentialsPublic/components/credentials-public/log-on/sca-modals/sca-modals-tpl.html\'"></div><div class="row"><div class="col-xs-12 signaturePanel" sca-enrollment-otp id="signaturePanelId"><h1 class="no-margin-top sm-margin-top" translate="RETAIL_CREDENTIALS_PUBLIC_ENROLLMENT_OTP_TITLE"></h1><div class="col-xs-12 sm-padding md-margin-bottom" ng-if="globalError"><proteo-ui-icon icon-bg="red" icon="alert" class="timeout-message"></proteo-ui-icon><proteo-ui-text class="text-bold">{{errorMessage}}</proteo-ui-text></div><div sca-enrollment-otp-panel-error></div><form name="signatureForm" method="POST" novalidate><sca-enrollment-otp-panel form-name="signatureForm" is-public-otp="true" operation-data="operationData" go-with-activation="notPhones()"></sca-enrollment-otp-panel><proteo-ui-thematic-break></proteo-ui-thematic-break><div class="row md-margin-top"><div class="col-xs-12 col-sm-6"><proteo-ui-link class="pull-left mr-10" ng-click="previousStep()"><proteo-ui-icon icon="cancel"></proteo-ui-icon><proteo-ui-text translate="RETAIL_CREDENTIALS_PUBLIC_COMMON_CANCEL"></proteo-ui-text></proteo-ui-link><proteo-ui-link class="pull-left" ng-click="previousStep()"><proteo-ui-icon icon="back"></proteo-ui-icon><proteo-ui-text translate="RETAIL_CREDENTIALS_PUBLIC_COMMON_PREVIOUS"></proteo-ui-text></proteo-ui-link></div><div class="col-xs-12 col-md-6 text-right"><sca-enrollment-otp-panel-button class="pull-right" is-invalid="invalidAuthentication(err)" is-valid="userAuthenticated(data)" ng-disabled="!signatureForm.$valid || continueButton || \n                            signatureForm.authenticationPanelTelephoneForm || otpComplete" ng-if="!continueButton && !signatureForm.authenticationPanelTelephoneForm"><proteo-ui-text translate="RETAIL_CREDENTIALS_PUBLIC_COMMON_CONTINUE"></proteo-ui-text></sca-enrollment-otp-panel-button></div></div></form></div></div>')
}
]),
function() {
    "use strict";
    angular.module("App.scaPhoneOTP").controller("scaPhoneOTPController", ["$scope", "ConsultiveProvider", "$state", "$stateParams", "logOnFactory", "$filter", "logOnEnrollmentFactory", "tsbJournalService", "scaEnrollmentFunctionsFactory", "LOGIN_WEBADAPTER", "DataLayerProvider", function(a, b, c, d, e, f, g, h, i, j, k) {
        function l() {
            m(),
            k.updateScaDataLayer("scaPhoneOTP"),
            JSM._dataLayerSPAReady()
        }
        function m() {
            a.operationData = {
                headers: angular.extend({}, i.getHeader(), e.getDefaultHeader()),
                getPhones: j.getPhonesLogin,
                params: {
                    authId: e.getAuthId(),
                    userId: e.getUserId()
                }
            }
        }
        var n = f("translate");
        a.model = null,
        a.errorMessage = null,
        a.timeoutErrorMessage = null,
        a.globalError = !1,
        a.tokenIdError = !1,
        a.timeoutError = !1,
        a.continueButton = !1,
        a.otpComplete = !1,
        a.exceptionLiteral = null,
        a.hideError = !1,
        a.consultive = {
            tcSelected: b.tcSelected
        },
        a.stateParams = d.data,
        a.channel = d && d.channel ? d.channel : null,
        a.userAuthenticated = function(b) {
            a.globalError = !1,
            g.setCookie(b),
            void 0 === b ? (a.tokenIdError = !0,
            a.globalError = !0) : b && (a.tokenIdError = void 0 === b.tokenId || null === b.tokenId ? !0 : !1,
            a.globalError = !0),
            a.tokenIdError ? (a.errorMessage = n("COMMON_MG_SYSTEM_ERROR"),
            k.sendError({
                message: a.errorMessage,
                type: k.errorType.WARNING
            })) : (a.otpComplete = !0,
            angular.extend(a.stateParams, {
                otp: a.signatureForm.OTPForm.OTPInput.$viewValue
            }),
            g.setCookie(b),
            c.go("captureMemorableInformation", {
                data: a.stateParams,
                channel: a.channel
            }))
        }
        ,
        a.cancel = function() {
            h.newOperation(),
            c.go("login")
        }
        ,
        a.invalidAuthentication = function(b) {
            h.newOperation(),
            a.globalError = !0,
            a.openAM = !1,
            b.exception && "408" === b.exception.code && (a.timeoutError = !0,
            a.openAM = !0,
            a.timeoutErrorMessage = n("COMMON_TIMEOUT_ERROR")),
            b.exception && b.exception.code === g.ERR_OTP_NOT_MATCH_LA && (a.globalError = !1,
            g.setScaUserPiloted(!0),
            g.enrollmentErrorHandler(b, a, g.ERR_OTP_NOT_MATCH_LA)),
            angular.isDefined(b.exception.detail) && angular.isDefined(b.exception.detail.attempts) && !a.openAM && (a.hideError = !0,
            g.setScaUserPiloted(!0),
            g.enrollmentErrorHandler(b, a, g.FTL));
            var c = angular.isDefined(b) && angular.isDefined(b.exception) && angular.isDefined(b.exception.description) ? b.exception.code + ": " + b.exception.description : n("COMMON_MG_SYSTEM_ERROR");
            a.errorMessage = c,
            k.sendError({
                message: c,
                code: b && b.exception && b.exception.code ? b.exception.code : "",
                type: k.errorType.POPUP
            })
        }
        ,
        a.previousStep = function() {
            a.timeoutError = !1,
            a.globalError = !1,
            a.$broadcast("previousEvent", function() {
                var a = g.getData("MI_DATA");
                c.go("capturePassword", a)
            })
        }
        ,
        l()
    }
    ])
}(),
function() {
    "use strict";
    angular.module("App.scaPhoneOTP").config(["$stateProvider", function(a) {
        a.state("scaPhoneOTP", {
            url: "/scaPhoneOTP",
            templateUrl: "/spasR46hfback/credentialsPublic/components/credentials-public/log-on/scaPhoneOTP/sca-phone-otp-tpl.html",
            controller: "scaPhoneOTPController",
            params: {
                data: null,
                channel: null
            }
        })
    }
    ])
}(),
angular.module("App.scaPhoneOTP.templates", ["/spasR46hfback/credentialsPublic/components/credentials-public/log-on/scaPhoneOTP/sca-phone-otp-tpl.html"]),
angular.module("/spasR46hfback/credentialsPublic/components/credentials-public/log-on/scaPhoneOTP/sca-phone-otp-tpl.html", []).run(["$templateCache", function(a) {
    "use strict";
    a.put("/spasR46hfback/credentialsPublic/components/credentials-public/log-on/scaPhoneOTP/sca-phone-otp-tpl.html", '<div class="row no-padding"><div class="col-xs-12 signaturePanel" sca-enrollment-otp id="signaturePanelId"><h1 class="no-margin-top sm-margin-top" translate="RETAIL_CREDENTIALS_PUBLIC_REGISTRATION_STEP3_TITLE"></h1><div class="col-xs-12 timeOutError md-margin-bottom" ng-if="timeoutError"><proteo-ui-icon icon-bg="red" icon="alert"></proteo-ui-icon><proteo-ui-text class="text-bold">{{timeoutErrorMessage}}</proteo-ui-text></div><div class="col-xs-12 md-margin-top md-margin-bottom md-padding error" ng-if="globalError && !hideError && !timeoutError"><span class="icon"><proteo-ui-icon icon-bg="red" icon="error"></proteo-ui-icon></span><span class="error-text"><proteo-ui-text ng-show="!errorMessage" translate="RETAIL_CREDENTIALS_PUBLIC_REGISTRATION_STEP3_ERROR_FORM"></proteo-ui-text><proteo-ui-text ng-show="errorMessage" translate="{{errorMessage}}"></proteo-ui-text></span></div><div class="col-xs-12 md-padding error" ng-if="tokenIdError"><proteo-ui-icon icon-bg="red" icon="error"></proteo-ui-icon><proteo-ui-text ng-show="errorMessage" translate="{{errorMessage}}"></proteo-ui-text></div><div sca-enrollment-otp-panel-error></div><form name="signatureForm" method="POST" novalidate><sca-enrollment-otp-panel form-name="signatureForm" is-public-otp="true" operation-data="operationData"></sca-enrollment-otp-panel><proteo-ui-thematic-break></proteo-ui-thematic-break><div class="row"><div class="col-xs-12 md-margin-top"><div class="row"><div class="col-xs-12 col-md-6"><proteo-ui-link class="pull-left mr-10" ng-click="cancel()"><proteo-ui-icon icon="cancel"></proteo-ui-icon><proteo-ui-text translate="RETAIL_CREDENTIALS_PUBLIC_COMMON_CANCEL"></proteo-ui-text></proteo-ui-link><proteo-ui-link class="pull-left" ng-click="previousStep()" ng-disabled="otpComplete"><proteo-ui-icon icon="back"></proteo-ui-icon><proteo-ui-text translate="RETAIL_CREDENTIALS_PUBLIC_COMMON_PREVIOUS"></proteo-ui-text></proteo-ui-link></div><div class="col-xs-12 col-md-6 text-right"><sca-enrollment-otp-panel-button class="pull-right" is-invalid="invalidAuthentication(err)" is-valid="userAuthenticated(data)" ng-if="!continueButton && !signatureForm.authenticationPanelTelephoneForm" ng-disabled="!signatureForm.$valid || continueButton || signatureForm.authenticationPanelTelephoneForm || otpComplete"><proteo-ui-text translate="RETAIL_CREDENTIALS_PUBLIC_COMMON_CONTINUE"></proteo-ui-text></sca-enrollment-otp-panel-button></div></div></div></div></form></div></div><div ng-include="\'/spasR46hfback/credentialsPublic/components/credentials-public/log-on/sca-modals/sca-modals-tpl.html\'"></div>')
}
]),
angular.module("App.userWithNoPhones.templates", []),
function() {
    "use strict";
    function a() {
        var a = {};
        return a.pageID = {
            registration: 131,
            registrationBiz: 231,
            setUpStandingOrder: 132,
            setUpStandingOrderSbbi: 232,
            amendStandingOrder: 133,
            amendStandingOrderSbbi: 233,
            createFutureDatePayment: 134,
            createFutureDatePaymentBiz: 237,
            amendFutureDatePayment: 135,
            amendFutureDatePaymentBiz: 235,
            addNewPayee: 220,
            deletePayee: 221,
            MakeTransfer: 123,
            MakeTransferSbbi: 223,
            newDomesticPayment: 124,
            makePayment: 125,
            makePaymentBiz: 237,
            createInternationalRecipient: 126,
            MakeInternationalPayment: 127,
            MakeInternationalPaymentBiz: 227,
            makep2pPayment: 136,
            multiplePayments: 237
        },
        a.profilingParameters = function(b) {
            var c = a.pageID[b];
            JSM.getTSID(function(a) {
                JSM.getSPAProfiling(c, a)
            })
        }
        ,
        a
    }
    angular.module("App.credentialsPublic").factory("profilingProvider", a)
}(),
function() {
    "use strict";
    angular.module("App.applicationAlreadyReceived").controller("applicationAlreadyReceivedController", ["$scope", "$stateParams", "$filter", function(a, b, c) {
        function d() {
            a.applicationType = b.applicationType ? f("RETAIL_CREDENTIALS_PUBLIC_COMMON_APPLICATION_TYPE_" + b.applicationType) : "Application Type"
        }
        function e(a) {
            return a.substring(0, 1).toUpperCase() + a.substring(1)
        }
        var f = c("translate");
        a.referenceNumber = b.referenceNumber,
        a.code = b.code,
        a.capitalize = e,
        d(),
        JSM._dataLayerSPAReady()
    }
    ])
}(),
function() {
    "use strict";
    angular.module("App.applicationAlreadyReceived").config(["$stateProvider", function(a) {
        a.state("applicationAlreadyReceived", {
            url: "/applicationAlreadyReceived",
            templateUrl: "/spasR46hfback/credentialsPublic/components/credentials-public/recover-user/applicationAlreadyReceived/application-already-received-tpl.html",
            controller: "applicationAlreadyReceivedController",
            params: {
                applicationType: null,
                code: null,
                referenceNumber: null
            }
        })
    }
    ])
}(),
angular.module("App.applicationAlreadyReceived.templates", ["/spasR46hfback/credentialsPublic/components/credentials-public/recover-user/applicationAlreadyReceived/application-already-received-tpl.html"]),
angular.module("/spasR46hfback/credentialsPublic/components/credentials-public/recover-user/applicationAlreadyReceived/application-already-received-tpl.html", []).run(["$templateCache", function(a) {
    "use strict";
    a.put("/spasR46hfback/credentialsPublic/components/credentials-public/recover-user/applicationAlreadyReceived/application-already-received-tpl.html", '<div class="row"><div class="col-xs-12"><h1 translate="RETAIL_CREDENTIALS_PUBLIC_CHANGEUSERNAME_APPLYCATIONALREADYRECEIVED_TITLE"></h1><proteo-ui-text paragraph="false" translate="RETAIL_CREDENTIALS_PUBLIC_CHANGEUSERNAME_APPLYCATIONALREADYRECEIVED_TEXT" translate-values="{applicationType: applicationType}"></proteo-ui-text><proteo-ui-text paragraph="false"><span translate="RETAIL_CREDENTIALS_PUBLIC_CHANGEUSERNAME_APPLYCATIONALREADYRECEIVED_CALL_US"></span> <span class="text-bold">0845 3000 116</span>. <span translate="RETAIL_CREDENTIALS_PUBLIC_CHANGEUSERNAME_APPLYCATIONALREADYRECEIVED_CALL_US_SUP"></span></proteo-ui-text><proteo-ui-text class="md-text" paragraph="false"><span translate="RETAIL_CREDENTIALS_PUBLIC_CHANGEUSERNAME_APPLYCATIONALREADYRECEIVED_QUOTE_REF_NUM"></span> <span class="text-bold">{{referenceNumber}}</span></proteo-ui-text><div class="error no-padding no-margin xs-padding" ng-if="code"><proteo-ui-text class="text-bold" paragraph="false" translate="COMMON_MG_{{code}}" translate-values="{applicationType: capitalize(applicationType)}"></proteo-ui-text></div></div></div><proteo-ui-thematic-break></proteo-ui-thematic-break><div class="col-xs-12"><proteo-ui-link class="pull-right" url="http://www.tsb.co.uk/"><proteo-ui-text paragraph="false"><proteo-ui-icon icon="next"></proteo-ui-icon><span translate="RETAIL_CREDENTIALS_PUBLIC_COMMON_BACK_TO_HOME"></span></proteo-ui-text></proteo-ui-link></div>')
}
]),
function() {
    "use strict";
    angular.module("App.challengeQuestions").controller("challengeQuestionsController", ["$filter", "DataLayerProvider", "$scope", "ConsultiveProvider", "$state", "challangeQuestionsService", "tsbJournalService", function(a, b, c, d, e, f, g) {
        function h() {
            JSM._dataLayerSPAReady(),
            c.msgError = !1,
            c.msgErrorTxt = "",
            c.isOpen = !1,
            c.collap = !1,
            c.stateParams = {
                userId: d.getUserId(),
                dateOfBirth: d.getUserBirth(),
                firstName: "undefined",
                lastName: "undefined"
            },
            c.userData = c.stateParams,
            c.questions = d.getQuestionsData(),
            c.questionsList = [{
                id: 0,
                questionId: 0,
                question: "Pregunta 1",
                answer: "",
                valid: !0
            }, {
                id: 1,
                questionId: 1,
                question: "Pregunta 2",
                answer: "",
                valid: !0
            }],
            c.pattern = [],
            b.scaResetFlow = !0,
            b.sendResetCredentialsSca("challengeQuestions"),
            i()
        }
        function i() {
            c.questionsList[0].questionId = c.questions[0].questionId,
            c.questionsList[1].questionId = c.questions[1].questionId,
            c.questionsList[0].question = c.questions[0].question,
            c.questionsList[1].question = c.questions[1].question
        }
        function j() {
            return c.questions[0].answer = c.questionsList[0].answer,
            c.questions[1].answer = c.questionsList[1].answer,
            c.questions
        }
        var k = a("translate");
        c.cancel = function() {
            g.newOperation(),
            e.go("login")
        }
        ,
        c.expandCollapse = function() {
            c.collap ? c.collap = !1 : c.collap = !0
        }
        ,
        c.deRegistration = function() {
            var a = {
                userId: d.getUserId()
            };
            e.go("registration", a)
        }
        ,
        c["continue"] = function(a) {
            function h(a) {
                var d = a && a.exception && a.exception.code ? a.exception.code : ""
                  , e = a && a.exception && a.exception.description ? a.exception.description : k("COMMON_MG_SYSTEM_ERROR");
                c.msgError = !0,
                c.msgErrorTxt = e,
                b.sendError({
                    message: e,
                    code: d,
                    type: b.errorType.WARNING
                })
            }
            var i = {
                userDetails: {
                    userId: d.getUserId(),
                    dateOfBirth: d.getUserBirth(),
                    firstName: "undefined",
                    lastName: "undefined"
                }
            };
            c.stateParams.questions = c.questions;
            var l = {
                questions: c.questions,
                userId: d.getUserId()
            };
            a.$valid && c.questionsList[0].valid && c.questionsList[1].valid ? (d.setQuestionsValidate(j()),
            f.getPhones(i).then(function(a) {
                angular.isDefined(a.work) && a.work.active || angular.isDefined(a.mobile) && a.mobile.active || angular.isDefined(a.home) && a.home.active ? f.validateQuestions(l).then(function(a) {
                    e.go("phoneAuthenticationRequiredSca", {
                        data: c.stateParams
                    })
                }, function(a) {
                    g.newOperation(),
                    angular.isDefined(a) && angular.isDefined(a.exception) && angular.isDefined(a.exception.code) && "ERR1226" == a.exception.code ? e.go("phoneAuthenticationRequiredSca", {
                        data: c.stateParams
                    }) : h(a)
                }) : (g.newOperation(),
                e.go("offLine", {}))
            }, function(a) {
                g.newOperation(),
                h(a)
            })) : (c.msgError = !0,
            c.msgErrorTxt = "RETAIL_CREDENTIALS_PUBLIC_RECOVERUSER_ENTERCUSTOMERID_FORM_ERROR_MSG")
        }
        ,
        h()
    }
    ])
}(),
function() {
    "use strict";
    angular.module("App.challengeQuestions").factory("challangeQuestionsService", ["$q", "SIGNTATURE_WEBADAPTER", "proteocanalinvokerServices", "CREDENTIALSPUBLIC_WEBADAPTER", function(a, b, c, d) {
        var e = {};
        return e.getPhones = function(d) {
            function e(a) {
                g.resolve(a)
            }
            function f(a) {
                g.reject(a)
            }
            var g = a.defer()
              , h = {
                "HEADER.SERVICE_SCOPE": "PUBLIC"
            };
            return c.invoke({
                service: b.getPhones,
                callback: e,
                fail: f,
                data: d,
                headers: h,
                idLoader: "phoneinformedId",
                bigLoader: !1
            }),
            g.promise
        }
        ,
        e.validateQuestions = function(b) {
            function e(a) {
                g.resolve(a)
            }
            function f(a) {
                g.reject(a)
            }
            var g = a.defer()
              , h = {
                "HEADER.SERVICE_SCOPE": "PUBLIC"
            };
            return c.invoke({
                service: d.validateQuestions,
                callback: e,
                fail: f,
                data: b,
                headers: h,
                idLoader: "validateQuestions",
                bigLoader: !1
            }),
            g.promise
        }
        ,
        e.evaluateFraud = function(b) {
            function e(a) {
                g.resolve(a)
            }
            function f(a) {
                g.reject(a)
            }
            var g = a.defer()
              , h = {
                "HEADER.SERVICE_SCOPE": "PUBLIC"
            };
            return c.invoke({
                service: d.evaluateFraud,
                callback: e,
                fail: f,
                data: b,
                headers: h,
                idLoader: "evaluateFraud",
                bigLoader: !1
            }),
            g.promise
        }
        ,
        e
    }
    ])
}(),
function() {
    "use strict";
    angular.module("App.challengeQuestions").config(["$stateProvider", function(a) {
        a.state("challengeQuestions", {
            url: "/challengeQuestions",
            templateUrl: "/spasR46hfback/credentialsPublic/components/credentials-public/recover-user/challengeQuestions/challenge-questions-tpl.html",
            controller: "challengeQuestionsController",
            resolve: {
                Consultive: ["ConsultiveProvider", function(a) {
                    return a.validateOperation("resetPasswordAndMISca")
                }
                ]
            }
        })
    }
    ])
}(),
angular.module("App.challengeQuestions.templates", ["/spasR46hfback/credentialsPublic/components/credentials-public/recover-user/challengeQuestions/challenge-questions-tpl.html"]),
angular.module("/spasR46hfback/credentialsPublic/components/credentials-public/recover-user/challengeQuestions/challenge-questions-tpl.html", []).run(["$templateCache", function(a) {
    "use strict";
    a.put("/spasR46hfback/credentialsPublic/components/credentials-public/recover-user/challengeQuestions/challenge-questions-tpl.html", '<div class="row wrap-log-off-interstitial"><h1 class="col-xs-12" translate="RETAIL_CREDENTIALS_PUBLIC_CHALLENGE_QUESTIONS_TITLE"></h1></div><div class="row"><div class="col-xs-12 lg-margin-bottom lg-margin-top"><proteo-ui-text translate="RETAIL_CREDENTIALS_PUBLIC_CHALLENGE_QUESTIONS_SUBTITLE"></proteo-ui-text></div></div><div class="row" ng-if="!msg2Type && (msgError || globalError)"><div class="col-xs-12 col-sm-12 md-margin-bottom"><proteo-ui-icon class="md-margin-right" icon-bg="red" icon="alert"></proteo-ui-icon><proteo-ui-text class="text-bold" ng-show="msgError" translate="{{msgErrorTxt}}"></proteo-ui-text></div></div><form name="questionsForm" method="POST" novalidate><tsb-password ng-repeat="question in questionsList" model="question.answer" label="{{question.question}}" name="answer{{question.id}}" id="answer{{question.id}}" patterns="pattern" eye="true" valid="question.valid"></tsb-password><div class="lg-margin-top"><proteo-ui-collapse is-opened="collap"><collapse-title><span ng-click="expandCollapse()" translate="RETAIL_CREDENTIALS_PUBLIC_CHALLENGE_QUESTIONS_DONT_REMEMBER"></span></collapse-title><ul class="unordered-list md-padding-left"><li class="list-element"><proteo-ui-text class="text-bold"><i translate="COMMON_GLOBALERROR_TEXT_ATTEMPTS_EXCEEDED_OPTIONS_1"></i></proteo-ui-text>&nbsp;<proteo-ui-link ng-click="deRegistration()"><proteo-ui-text class="text-bold"><i class="text-underline" translate="RETAIL_CREDENTIALS_PUBLIC_LINK_TEXT1"></i></proteo-ui-text>&nbsp;</proteo-ui-link><li class="list-element"><proteo-ui-text class="text-bold"><i translate="COMMON_GLOBALERROR_TEXT_ATTEMPTS_EXCEEDED_OPTIONS_3"></i></proteo-ui-text></ul></proteo-ui-collapse></div><proteo-ui-thematic-break></proteo-ui-thematic-break><div class="row"><div class="col-xs-12 col-sm-6"><proteo-ui-link class="pull-left" ng-click="cancel()"><proteo-ui-icon icon="cancel"></proteo-ui-icon><proteo-ui-text><span translate="RETAIL_CREDENTIALS_PUBLIC_COMMON_CANCEL"></span></proteo-ui-text></proteo-ui-link></div></div><div class="row"><div class="col-xs-12"><proteo-ui-button class="pull-right" ng-click="continue(questionsForm)" type="submit"><proteo-ui-text translate="RETAIL_CREDENTIALS_PUBLIC_COMMON_CONTINUE"></proteo-ui-text></proteo-ui-button></div></div></form>')
}
]),
function() {
    "use strict";
    angular.module("App.enterCustomerIdData").controller("enterCustomerIdDataController", ["$scope", "$state", "enterCustomerIdDataService", "tsbJournalService", "DataLayerProvider", "ConsultiveProvider", "$filter", function(a, b, c, d, e, f, g) {
        function h() {
            a.msgErrorPlus = "",
            a.stepScreen = 1,
            a.msg2Type = !1,
            a.data = angular.copy(l),
            JSM._dataLayerSPAReady(),
            e.sendResetCredentials("enterCustomerIdData")
        }
        function i(b, c, d) {
            c = c || null,
            d = d || null;
            var f = b && b.exception && b.exception.code ? b.exception.code : ""
              , g = b && b.exception && b.exception.description ? b.exception.description : j("COMMON_MG_SYSTEM_ERROR");
            a.msgError = !0,
            a.msgErrorTxt = d || g,
            e.sendError({
                message: d || g,
                code: c || f,
                type: e.errorType.WARNING
            })
        }
        var j = g("translate")
          , k = new Date;
        a.maxDate = new Date(k.getFullYear() - 10,k.getMonth(),k.getDate()),
        a.minDate = new Date(k.getFullYear() - 101,0,1),
        a.msgError = !1,
        a.globalError = !1,
        a.oldRegistration = !1,
        a.bloqued = !1,
        a.required = !1;
        var l = {
            userName: null,
            dateBirth: null,
            firstName: null,
            lastName: null
        };
        a.deRegistration = function() {
            var a = {
                userId: f.getUserId()
            };
            b.go("registration", a)
        }
        ,
        a.cancel = function() {
            d.newOperation(),
            b.go("login")
        }
        ,
        a["continue"] = function(h) {
            var k = {
                userName: a.data.userName,
                dateOfBirth: g("date")(a.data.dateBirth, "yyyy-MM-dd"),
                firstName: "",
                lastName: ""
            }
              , m = {
                userId: a.data.userName,
                oldRegistration: !1
            };
            null !== h && h.$valid && 1 === a.stepScreen ? c.authenticationUser(k).then(function(e) {
                if (200 == e.returnCode)
                    f.setUserId(k.userName),
                    f.setUserBirth(k.dateOfBirth),
                    f.setOldRegistration(e.oldRegistration),
                    a.oldRegistration = e.oldRegistration,
                    m.oldRegistration = e.oldRegistration,
                    c.getUserQuestions(m).then(function(c) {
                        0 !== c.questions.length ? (f.setQuestionsData(c.questions),
                        b.go("challengeQuestions", {
                            data: k
                        })) : a.oldRegistration === !1 ? (d.newOperation(),
                        b.go("noSecretInformation", {})) : (a.stepScreen = 2,
                        a.required = !0,
                        a.msgError = !1)
                    })["catch"](function(a) {
                        d.newOperation(),
                        i(a)
                    });
                else {
                    var g = null;
                    "ERR390" === e.returnCode ? a.bloqued = !0 : (g = j("COMMON_MG_2673"),
                    a.bloqued = !1),
                    i(null, e.returnCode, g)
                }
            })["catch"](function(b) {
                if (!angular.isDefined(b) || "ERR83" !== b.exception.code && "ERR188" !== b.exception.code) {
                    d.newOperation();
                    var c = null
                      , e = null;
                    f.setUserId(k.userName),
                    angular.isDefined(b) && "ERR390" === b.exception.code ? a.bloqued = !0 : "ERR244" === b.exception.code || "ERR245" === b.exception.code ? (e = j("COMMON_MG_2673"),
                    a.bloqued = !1) : (e = j("COMMON_MG_2672"),
                    a.bloqued = !1)
                } else
                    e = j("COMMON_MG_2672"),
                    a.bloqued = !1;
                i(b, c, e)
            }) : null !== h && h.$valid && 2 === a.stepScreen ? (k = {
                userName: a.data.userName,
                dateOfBirth: g("date")(a.data.dateBirth, "yyyy-MM-dd"),
                firstName: a.data.firstName,
                lastName: a.data.lastName
            },
            f.setUserBirth(k.dateOfBirth),
            c.validateUser(k).then(function(c) {
                c.isSuccessful === !0 ? (f.setUserData(k),
                e.sendResetCredentials("enterCustomerIdData"),
                b.go("resetPasswordAndMI", {
                    data: k
                })) : (a.data = angular.copy(l),
                a.msgError = !0,
                a.msgErrorTxt = j("COMMON_MG_2672"))
            })["catch"](function(a) {
                d.newOperation(),
                i(a)
            })) : (a.msgError = !0,
            a.msgErrorTxt = j("COMMON_MG_2672"))
        }
        ,
        h()
    }
    ])
}(),
function() {
    "use strict";
    angular.module("App.enterCustomerIdData").factory("enterCustomerIdDataService", ["$q", "proteocanalinvokerServices", "CREDENTIALSPUBLIC_WEBADAPTER", function(a, b, c) {
        var d = {};
        return d.authenticationUser = function(d) {
            function e(a) {
                g.resolve(a)
            }
            function f(a) {
                g.reject(a)
            }
            var g = a.defer()
              , h = {
                "HEADER.SERVICE_SCOPE": "PUBLIC"
            };
            return b.invoke({
                service: c.authenticationUser,
                callback: e,
                fail: f,
                headers: h,
                data: d,
                idLoader: "validateUserBirth",
                bigLoader: !0
            }),
            g.promise
        }
        ,
        d.getUserQuestions = function(d) {
            function e(a) {
                g.resolve(a)
            }
            function f(a) {
                g.reject(a)
            }
            var g = a.defer()
              , h = {
                "HEADER.SERVICE_SCOPE": "PUBLIC"
            };
            return b.invoke({
                service: c.getUserQuestions,
                callback: e,
                fail: f,
                data: d,
                headers: h,
                idLoader: "getUserQuestions",
                bigLoader: !1
            }),
            g.promise
        }
        ,
        d.validateUser = function(d) {
            function e(a) {
                g.resolve(a)
            }
            function f(a) {
                g.reject(a)
            }
            var g = a.defer()
              , h = {
                "HEADER.SERVICE_SCOPE": "PUBLIC"
            };
            return b.invoke({
                service: c.validateUser,
                callback: e,
                fail: f,
                headers: h,
                data: d,
                idLoader: "loaderGOEShere",
                bigLoader: !0
            }),
            g.promise
        }
        ,
        d
    }
    ])
}(),
function() {
    "use strict";
    angular.module("App.enterCustomerIdData").config(["$stateProvider", function(a) {
        a.state("enterCustomerIdData", {
            url: "/enterCustomerIdData",
            templateUrl: "/spasR46hfback/credentialsPublic/components/credentials-public/recover-user/enterCustomerIdData/enter-customer-id-data-tpl.html",
            controller: "enterCustomerIdDataController",
            resolve: {
                Consultive: ["ConsultiveProvider", function(a) {
                    return a.validateOperation("enterCustomerIdData")
                }
                ]
            }
        })
    }
    ])
}(),
angular.module("App.enterCustomerIdData.templates", ["/spasR46hfback/credentialsPublic/components/credentials-public/recover-user/enterCustomerIdData/enter-customer-id-data-tpl.html"]),
angular.module("/spasR46hfback/credentialsPublic/components/credentials-public/recover-user/enterCustomerIdData/enter-customer-id-data-tpl.html", []).run(["$templateCache", function(a) {
    "use strict";
    a.put("/spasR46hfback/credentialsPublic/components/credentials-public/recover-user/enterCustomerIdData/enter-customer-id-data-tpl.html", '<div class="row wrap-log-off-interstitial"><div class="col-xs-12"><h1 class="col-xs-12 md-margin-bottom" translate="RETAIL_CREDENTIALS_PUBLIC_RECOVERUSER_ENTERCUSTOMERID_PROBLEMSLOGGIN"></h1><br><div class="col-xs-12"><div class="row" ng-if="bloqued"><div class="col-xs-12"><div><proteo-ui-text class="text-bold"><i translate="RETAIL_CREDENTIALS_COMMON_BLOCKED"></i></proteo-ui-text></div></div><div class="md-margin-top md-margin-left xs-padding-left md-margin-bottom"><ul class="unordered-list md-padding-left"><li class="list-element"><proteo-ui-text class="text-bold"><i translate="COMMON_GLOBALERROR_TEXT_ATTEMPTS_EXCEEDED_OPTIONS_1"></i></proteo-ui-text>&nbsp;<proteo-ui-link ng-click="deRegistration()"><proteo-ui-text class="text-bold"><i class="text-underline" translate="RETAIL_CREDENTIALS_PUBLIC_LINK_TEXT1"></i></proteo-ui-text>&nbsp;</proteo-ui-link><proteo-ui-text><i translate="COMMON_GLOBALERROR_TEXT_ATTEMPTS_EXCEEDED_OPTIONS_2"></i></proteo-ui-text><li class="list-element"><proteo-ui-text class="text-bold"><i translate="COMMON_GLOBALERROR_TEXT_ATTEMPTS_EXCEEDED_OPTIONS_3"></i></proteo-ui-text></ul></div></div><div class="row" ng-if="!msg2Type && (msgError || globalError) && !bloqued"><div class="col-xs-12 col-sm-12 md-margin-bottom"><proteo-ui-icon class="md-margin-right" icon-bg="red" icon="alert"></proteo-ui-icon><proteo-ui-text class="text-bold" ng-show="msgError" translate="{{msgErrorTxt}}"></proteo-ui-text><proteo-ui-text class="text-bold" ng-show="globalError" translate="{{globalErrorTxt}}"></proteo-ui-text></div><div class="col-xs-12 col-sm-12 md-margin-left"><ul ng-if="msgErrorPlus.length > 0"><li><span class="text-bold" translate="COMMON_GLOBALERROR_TEXT_ATTEMPTS_EXCEEDED_OPTIONS_1"></span>&nbsp;<proteo-ui-text><proteo-ui-link state="registration"><span translate="RETAIL_CREDENTIALS_PUBLIC_LINK_TEXT1"></span>&nbsp;</proteo-ui-link><span translate="COMMON_GLOBALERROR_TEXT_ATTEMPTS_EXCEEDED_OPTIONS_2"></span></proteo-ui-text><li><proteo-ui-text class="text-bold" translate="{{msgErrorPlus}}"></proteo-ui-text></ul></div></div><div class="row" ng-if="msg2Type && !bloqued"><div class="col-xs-12 col-sm-12 md-margin-bottom" ng-if="msgError || globalError"><proteo-ui-icon class="md-margin-left" icon-bg="red" icon="alert"></proteo-ui-icon><proteo-ui-text class="text-bold" ng-show="msgError" translate="{{msgErrorTxt}}"></proteo-ui-text><proteo-ui-link state="registration"><span translate="RETAIL_CREDENTIALS_PUBLIC_LINK_TEXT1"></span>.</proteo-ui-link><br><br><proteo-ui-icon class="md-margin-left" icon-bg="red" icon="alert"></proteo-ui-icon><proteo-ui-text class="text-bold" ng-show="msgError" translate="{{msgErrorPlus}}"></proteo-ui-text></div></div><div class="col-xs-12 borderless-panel md-margin-bottom"><proteo-ui-text><span translate="RETAIL_CREDENTIALS_PUBLIC_RECOVERUSER_ENTERCUSTOMERID_18_MONTHS_MSG"></span>&nbsp;<proteo-ui-link state="registration"><span translate="RETAIL_CREDENTIALS_PUBLIC_RECOVERUSER_ENTERCUSTOMERID_INTERNET_BANKING"></span></proteo-ui-link>.</proteo-ui-text></div><proteo-ui-text paragraph="false" translate="RETAIL_CREDENTIALS_PUBLIC_RECOVERUSER_ENTERCUSTOMERID_PROVIDEDETAILS"></proteo-ui-text><h2 paragraph translate="RETAIL_CREDENTIALS_PUBLIC_RECOVERUSER_ENTERCUSTOMERID_YOURDETAILS_COLON"></h2></div><form name="enterCustomerIdDataForm" method="POST" novalidate><div class="col-xs-12" ng-show="stepScreen == 1"><proteo-ui-form-group><label for="userID" translate="RETAIL_CREDENTIALS_PUBLIC_RECOVERUSER_ENTERCUSTOMERID_USERID_COLON"></label><proteo-ui-form-control class="enter-check-hide"><proteo-ui-input id="userID" label="Internet Banking user ID" maxlength="30" name="userName" ng-maxlength="30" ng-minlength="6" min-length="6" ng-model="data.userName" ng-pattern="/^[a-zA-Z0-9]*$/" required type="text"></proteo-ui-input></proteo-ui-form-control><proteo-ui-form-error><div ng-show="enterCustomerIdDataForm.$error && enterCustomerIdDataForm.userName.$invalid && (enterCustomerIdDataForm.userName.$touched || enterCustomerIdDataForm.$submitted)" ng-messages="enterCustomerIdDataForm.userName.$error"><div class="error-message" ng-message="required"><proteo-ui-text class="form-error" translate="RETAIL_CREDENTIALS_PUBLIC_COMMON_ERROR_ENTERVALUE"></proteo-ui-text></div><div class="error-message" ng-message="maxlength"><proteo-ui-text class="form-error" translate="RETAIL_CREDENTIALS_PUBLIC_COMMON_ERROR_FORMAT"></proteo-ui-text></div><div class="error-message" ng-message="minlength"><proteo-ui-text class="form-error" translate="RETAIL_CREDENTIALS_PUBLIC_COMMON_ENTER_ERROR_LENGTH"></proteo-ui-text></div><div class="error-message" ng-message="pattern"><proteo-ui-text class="form-error" translate="RETAIL_CREDENTIALS_PUBLIC_COMMON_ERROR_FORMAT_SEPECIAL"></proteo-ui-text></div></div></proteo-ui-form-error></proteo-ui-form-group><proteo-ui-form-group form-control-name="dateOfBirthdatePickerForm"><label for="dateOfBirth" translate="RETAIL_CREDENTIALS_PUBLIC_RECOVERUSER_ENTERCUSTOMERID_DATE_OF_BIRTH_COLON"></label><proteo-ui-form-control><proteo-ui-date-picker id="dateOfBirth" form-errors="true" label="Date of birth" date-name="dateOfBirth" date-required="true" hide-calendar="true" manual="true" max-date="maxDate" min-date="minDate" output="data.dateBirth" size="12"></proteo-ui-date-picker></proteo-ui-form-control><proteo-ui-form-error><div ng-if="enterCustomerIdDataForm.dateOfBirthdatePickerForm.$error.required"><proteo-ui-text class="form-error" translate="RETAIL_CREDENTIALS_PUBLIC_COMMON_ERROR_ENTERVALUE"></proteo-ui-text></div><div ng-if="enterCustomerIdDataForm.dateOfBirthdatePickerForm.$error.pattern"><proteo-ui-text class="form-error" translate="RETAIL_CREDENTIALS_PUBLIC_COMMON_ERROR_FORMAT"></proteo-ui-text></div><div ng-if="enterCustomerIdDataForm.dateOfBirthdatePickerForm.$error.maxlength"><proteo-ui-text class="form-error" translate="RETAIL_CREDENTIALS_PUBLIC_COMMON_ERROR_LENGTH"></proteo-ui-text></div></proteo-ui-form-error></proteo-ui-form-group></div><div class="col-xs-12" ng-show="stepScreen == 2"><div class="row" ng-class="{\'error no-padding\' :  enterCustomerIdDataForm.firstName.$invalid && $scope.stepScreen == 2 && (enterCustomerIdDataForm.firstName.$touched || enterCustomerIdDataForm.$submitted)}"><div class="col-xs-12 col-sm-5 col-lg-4 xs-padding-bottom xs-margin-top form-group" id="firstName"><proteo-ui-text class="text-bold sm-margin-bottom" translate="RETAIL_CREDENTIALS_PUBLIC_RECOVERUSER_ENTERCUSTOMERID_FIRST_NAME_COLON"></proteo-ui-text><proteo-ui-input label="First name" maxlength="30" name="firstName" ng-maxlength="30" ng-model="data.firstName" ng-pattern="/^[a-zA-Z0-9 $_@.&+=\\-\\/#?:\'%()]{1,30}$/" ng-required="required" type="text"></proteo-ui-input></div><div class="col-xs-12 col-sm-5 col-lg-4 no-margin lg-margin-top" ng-show="enterCustomerIdDataForm.firstName.$invalid && $scope.stepScreen == 2 && (enterCustomerIdDataForm.firstName.$touched || enterCustomerIdDataForm.$submitted)"><proteo-ui-icon class="sm-margin-right" icon-bg="red" icon="alert"></proteo-ui-icon><proteo-ui-text class="text-bold" ng-show="enterCustomerIdDataForm.firstName.$error.required" translate="RETAIL_CREDENTIALS_PUBLIC_COMMON_ERROR_ENTERVALUE"></proteo-ui-text><proteo-ui-text class="text-bold" ng-show="enterCustomerIdDataForm.firstName.$error.pattern" translate="RETAIL_CREDENTIALS_PUBLIC_COMMON_ERROR_FORMAT"></proteo-ui-text><proteo-ui-text class="text-bold" ng-show="enterCustomerIdDataForm.firstName.$error.maxLength" translate="RETAIL_CREDENTIALS_PUBLIC_COMMON_ERROR_LENGTH"></proteo-ui-text></div></div><div class="row" ng-class="{\'error no-padding\' :  enterCustomerIdDataForm.lastName.$invalid && $scope.stepScreen == 2 && (enterCustomerIdDataForm.lastName.$touched || enterCustomerIdDataForm.$submitted)}"><div class="col-xs-12 col-sm-5 col-lg-4 xs-padding-bottom xs-margin-top form-group" id="lastName"><proteo-ui-text class="text-bold sm-margin-bottom" translate="RETAIL_CREDENTIALS_PUBLIC_RECOVERUSER_ENTERCUSTOMERID_SURNAME_COLON"></proteo-ui-text><proteo-ui-input label="Last name" maxlength="30" name="lastName" ng-maxlength="30" ng-model="data.lastName" ng-pattern="/^[a-zA-Z0-9 $_@.&+=\\-\\/#?:\'%()]{1,30}$/" ng-required="required" type="text"></proteo-ui-input></div><div class="col-xs-12 col-sm-5 col-lg-4 no-margin lg-margin-top" ng-show="enterCustomerIdDataForm.lastName.$invalid && $scope.stepScreen == 2 && (enterCustomerIdDataForm.lastName.$touched || enterCustomerIdDataForm.$submitted)"><proteo-ui-icon class="sm-margin-right" icon-bg="red" icon="alert"></proteo-ui-icon><proteo-ui-text class="text-bold" ng-show="enterCustomerIdDataForm.lastName.$error.required" translate="RETAIL_CREDENTIALS_PUBLIC_COMMON_ERROR_ENTERVALUE"></proteo-ui-text><proteo-ui-text class="text-bold" ng-show="enterCustomerIdDataForm.lastName.$error.pattern" translate="RETAIL_CREDENTIALS_PUBLIC_COMMON_ERROR_FORMAT"></proteo-ui-text><proteo-ui-text class="text-bold" ng-show="enterCustomerIdDataForm.lastName.$error.maxLength" translate="RETAIL_CREDENTIALS_PUBLIC_COMMON_ERROR_LENGTH"></proteo-ui-text></div></div></div><div class="col-xs-12"><div class="row sm-margin-bottom"><div class="col-xs-12 col-sm-5 col-lg-4"><proteo-ui-link state="forgottenUserId"><proteo-ui-icon icon="next"></proteo-ui-icon><proteo-ui-text translate="RETAIL_CREDENTIALS_PUBLIC_RECOVERUSER_ENTERCUSTOMERID_FORGOTTEN_USERID_Q"></proteo-ui-text></proteo-ui-link></div></div></div><proteo-ui-thematic-break></proteo-ui-thematic-break><div class="col-xs-12 col-sm-6"><proteo-ui-link class="pull-left" ng-click="cancel()"><proteo-ui-text><proteo-ui-icon icon="cancel"></proteo-ui-icon><span translate="RETAIL_CREDENTIALS_PUBLIC_COMMON_CANCEL"></span></proteo-ui-text></proteo-ui-link></div><div class="col-xs-12 col-sm-6"><proteo-ui-button class="pull-right" ng-click="continue(enterCustomerIdDataForm)" type="submit"><proteo-ui-text translate="RETAIL_CREDENTIALS_PUBLIC_COMMON_CONTINUE"></proteo-ui-text></proteo-ui-button></div></form></div></div>');
}
]),
function() {
    "use strict";
    angular.module("App.globalErrorPageReset").controller("globalErrorPageResetController", ["$scope", "$state", "$translate", "DataLayerProvider", "ConsultiveProvider", "logOnFactory", function(a, b, c, d, e, f) {
        function g() {
            a.msgError = !1,
            a.msgErrorTxt = "",
            JSM._dataLayerSPAReady()
        }
        a.goToLogin = function() {
            b.go("login")
        }
        ,
        a.deRegistration = function() {
            var a = {
                userId: f.getUserId() || e.getUserId()
            };
            b.go("registration", a)
        }
        ,
        g()
    }
    ])
}(),
function() {
    "use strict";
    angular.module("App.globalErrorPageReset").config(["$stateProvider", function(a) {
        a.state("globalErrorPageReset", {
            url: "/globalErrorPageReset",
            templateUrl: "/spasR46hfback/credentialsPublic/components/credentials-public/recover-user/globalErrorPageReset/global-error-tpl.html",
            controller: "globalErrorPageResetController"
        })
    }
    ])
}(),
angular.module("App.globalErrorPageReset.templates", ["/spasR46hfback/credentialsPublic/components/credentials-public/recover-user/globalErrorPageReset/global-error-tpl.html"]),
angular.module("/spasR46hfback/credentialsPublic/components/credentials-public/recover-user/globalErrorPageReset/global-error-tpl.html", []).run(["$templateCache", function(a) {
    "use strict";
    a.put("/spasR46hfback/credentialsPublic/components/credentials-public/recover-user/globalErrorPageReset/global-error-tpl.html", '<div class="row"><div class="col-xs-12 sm-margin-bottom text-bold"><h1 translate="COMMON_GLOBALERROR_TITLE_LOGIN_ATTEMPTS_EXCEEDED"></h1></div></div><div class="row" ng-if="msgError"><div class="col-xs-12 col-sm-12 md-margin-bottom"><proteo-ui-icon class="md-margin-left" icon-bg="red" icon="alert"></proteo-ui-icon><proteo-ui-text class="text-bold" translate="{{msgErrorTxt}}"></proteo-ui-text></div></div><div class="row"><div class="col-xs-12"><div><proteo-ui-text translate="COMMON_GLOBALERROR_TEXT_CREDENTIAL_ATTEMPTS_EXCEEDED3"></proteo-ui-text></div><br/></div><div class="md-margin-top md-margin-bottom"><ul class="unordered-list md-padding-left"><li class="list-element"><proteo-ui-text translate="COMMON_GLOBALERROR_TEXT_ATTEMPTS_EXCEEDED_OPTIONS_1"></proteo-ui-text>&nbsp;<proteo-ui-link ng-click="deRegistration()"><proteo-ui-text translate="RETAIL_CREDENTIALS_PUBLIC_LINK_TEXT1"></proteo-ui-text></proteo-ui-link>&nbsp;<proteo-ui-text translate="COMMON_GLOBALERROR_TEXT_ATTEMPTS_EXCEEDED_OPTIONS_2_reset"></proteo-ui-text><li class="list-element"><proteo-ui-text translate="COMMON_GLOBALERROR_TEXT_ATTEMPTS_EXCEEDED_OPTIONS_3"></proteo-ui-text></ul></div></div><div class="row" ng-if="!pugepc.hideBackLinkButton"><div class="col-xs-12"><proteo-ui-thematic-break></proteo-ui-thematic-break></div></div><div class="row" ng-if="!pugepc.hideBackLinkButton"><div class="col-xs-12 col-sm-6 pull-right"><proteo-ui-button class="pull-right" ng-click="goToLogin()"><proteo-ui-text translate-values="{ bankName: pugepc.bankName}" translate="COMMON_GLOBALERROR_BACK_TO_BANK_SP"></proteo-ui-text></proteo-ui-button></div></div>')
}
]),
function() {
    "use strict";
    angular.module("App.noSecretInformation").controller("noSecretInformationController", ["$state", "$scope", "DataLayerProvider", "ConsultiveProvider", function(a, b, c, d) {
        function e() {
            c.sendResetCredentials("noSecretInformationCaptured"),
            JSM._dataLayerSPAReady()
        }
        b.deRegistration = function() {
            var b = {
                userId: d.getUserId()
            };
            a.go("registration", b)
        }
        ,
        e()
    }
    ])
}(),
function() {
    "use strict";
    angular.module("App.noSecretInformation").config(["$stateProvider", function(a) {
        a.state("noSecretInformation", {
            url: "/noSecretInformation",
            templateUrl: "/spasR46hfback/credentialsPublic/components/credentials-public/recover-user/noSecretInformation/no-secret-information-tpl.html",
            controller: "noSecretInformationController"
        })
    }
    ])
}(),
angular.module("App.noSecretInformation.templates", ["/spasR46hfback/credentialsPublic/components/credentials-public/recover-user/noSecretInformation/no-secret-information-tpl.html"]),
angular.module("/spasR46hfback/credentialsPublic/components/credentials-public/recover-user/noSecretInformation/no-secret-information-tpl.html", []).run(["$templateCache", function(a) {
    "use strict";
    a.put("/spasR46hfback/credentialsPublic/components/credentials-public/recover-user/noSecretInformation/no-secret-information-tpl.html", '<div class="row wrap-log-off-interstitial"><div class="col-xs-12"><h1 translate="COMMON_GLOBALERROR_TITLE_LOGIN_ATTEMPTS_EXCEEDED"></h1><div class="row borderless-panel lg-margin-bottom lg-margin-top"><proteo-ui-text class="col-xs-12" translate="RETAIL_CREDENTIALS_PUBLIC_RECOVERUSER_NOSECRETINFORMATION_SUBTITLE"></proteo-ui-text></div><div class="row" ng-if="!msg2Type && (msgError || globalError)"><div class="col-xs-12 col-sm-12 md-margin-bottom"><proteo-ui-icon class="md-margin-right" icon-bg="red" icon="alert"></proteo-ui-icon><proteo-ui-text class="text-bold" ng-show="msgError" translate="{{msgErrorTxt}}"></proteo-ui-text></div></div><div class="row"><div class="col-xs-12 col-sm-12 md-margin-left"><ul><li><span translate="COMMON_GLOBALERROR_TEXT_ATTEMPTS_EXCEEDED_OPTIONS_1"></span>&nbsp;<proteo-ui-text><proteo-ui-link ng-click="deRegistration()"><span translate="RETAIL_CREDENTIALS_PUBLIC_LINK_TEXT1"></span>&nbsp;</proteo-ui-link></proteo-ui-text><li><proteo-ui-text translate="COMMON_GLOBALERROR_TEXT_ATTEMPTS_EXCEEDED_OPTIONS_3"></proteo-ui-text></ul></div></div><proteo-ui-thematic-break></proteo-ui-thematic-break><div class="row"><div class="col-xs-12 col-sm-12"><proteo-ui-button class="pull-right" ui-sref="login"><proteo-ui-text translate="RETAIL_CREDENTIALS_PUBLIC_COMMON_BACK_TO_HOME"></proteo-ui-text></proteo-ui-button></div></div></div></div>')
}
]),
function() {
    "use strict";
    angular.module("App.offLine").controller("offLineController", ["DataLayerProvider", function(a) {
        function b() {
            JSM._dataLayerSPAReady(),
            a.scaResetFlow === !0 ? a.sendResetCredentialsSca("offLine") : a.sendResetCredentials("offLine")
        }
        b()
    }
    ])
}(),
function() {
    "use strict";
    angular.module("App.offLine").config(["$stateProvider", function(a) {
        a.state("offLine", {
            url: "/offLine",
            templateUrl: "/spasR46hfback/credentialsPublic/components/credentials-public/recover-user/offLine/off-line-tpl.html",
            controller: "offLineController",
            resolve: {
                Consultive: ["ConsultiveProvider", function(a) {
                    return a.validateOperation("offLine")
                }
                ]
            }
        })
    }
    ])
}(),
angular.module("App.offLine.templates", ["/spasR46hfback/credentialsPublic/components/credentials-public/recover-user/offLine/off-line-tpl.html"]),
angular.module("/spasR46hfback/credentialsPublic/components/credentials-public/recover-user/offLine/off-line-tpl.html", []).run(["$templateCache", function(a) {
    "use strict";
    a.put("/spasR46hfback/credentialsPublic/components/credentials-public/recover-user/offLine/off-line-tpl.html", '<div class="row wrap-log-off-interstitial"><div class="col-xs-12"><h1 class="col-xs-12" translate="RETAIL_CREDENTIALS_PUBLIC_OFFLINE_TITLE"></h1><div class="col-xs-12"><div class="col-xs-12 borderless-panel lg-margin-bottom lg-margin-top"><proteo-ui-text translate="RETAIL_CREDENTIALS_PUBLIC_OFFLINE_TXT_MESSAGE"></proteo-ui-text></div><div class="row" ng-if="!msg2Type && (msgError || globalError)"><div class="col-xs-12 col-sm-12 md-margin-bottom"><proteo-ui-icon class="md-margin-right" icon-bg="red" icon="alert"></proteo-ui-icon><proteo-ui-text class="text-bold" ng-show="msgError" translate="{{msgErrorTxt}}"></proteo-ui-text></div></div></div><proteo-ui-thematic-break></proteo-ui-thematic-break><div class="col-xs-12 col-sm-12"><proteo-ui-link class="pull-right" state="login"><proteo-ui-icon icon="chevron-left-blue"></proteo-ui-icon><proteo-ui-text><span translate="RETAIL_CREDENTIALS_PUBLIC_COMMON_BACK_TO_HOME"></span></proteo-ui-text></proteo-ui-link></div></div></div>')
}
]),
function() {
    "use strict";
    angular.module("App.partialSuccess").controller("partialSuccessController", ["DataLayerProvider", "$scope", "$stateParams", "$filter", "$window", function(a, b, c, d, e) {
        function f() {
            b.applicationType = c.applicationType ? g("RETAIL_CREDENTIALS_PUBLIC_COMMON_APPLICATION_TYPE_" + c.applicationType) : "Application Type"
        }
        var g = d("translate");
        switch (b.partialSuccessUrl = "no-response",
        b.code = c.code || null,
        b.code) {
        case "334":
        case "1128":
            b.partialSuccessUrl = "partial-success";
            break;
        case "FR007":
            b.partialSuccessUrl = "partial-success-fraud";
            break;
        case "1104":
            b.partialSuccessUrl = "code-entered-incorrectly";
            break;
        default:
            b.partialSuccessUrl = "no-response"
        }
        b.telePhoneNumber = "0845 3000 116",
        b.detailsHelpDesktTimes = "7am-10pm, Mon-Fri; 8am-6pm, Sat-Sun",
        a.scaResetFlow === !0 ? a.sendResetCredentialsSca("partialSuccess") : a.sendResetCredentials("partialSuccess"),
        f(),
        b.capitalize = function(a) {
            return a.substring(0, 1).toUpperCase() + a.substring(1)
        }
        ,
        b.goUrl = function(a) {
            e.location(a)
        }
        ,
        b.model = {
            referenceNumber: c.referenceNumber,
            customer: ""
        },
        JSM._dataLayerSPAReady()
    }
    ])
}(),
function() {
    "use strict";
    angular.module("App.partialSuccess").config(["$stateProvider", function(a) {
        a.state("partialSuccess", {
            url: "/partialSuccess",
            templateUrl: "/spasR46hfback/credentialsPublic/components/credentials-public/recover-user/partialSuccess/partial-success-tpl.html",
            controller: "partialSuccessController",
            params: {
                applicationType: null,
                reason: 0,
                code: null,
                referenceNumber: null
            }
        })
    }
    ])
}(),
angular.module("App.partialSuccess.templates", ["/spasR46hfback/credentialsPublic/components/credentials-public/recover-user/partialSuccess/partial-success-tpl.html", "/spasR46hfback/credentialsPublic/components/credentials-public/recover-user/partialSuccess/templates/code-entered-incorrectly.html", "/spasR46hfback/credentialsPublic/components/credentials-public/recover-user/partialSuccess/templates/no-response.html", "/spasR46hfback/credentialsPublic/components/credentials-public/recover-user/partialSuccess/templates/partial-success-fraud.html", "/spasR46hfback/credentialsPublic/components/credentials-public/recover-user/partialSuccess/templates/partial-success.html"]),
angular.module("/spasR46hfback/credentialsPublic/components/credentials-public/recover-user/partialSuccess/partial-success-tpl.html", []).run(["$templateCache", function(a) {
    "use strict";
    a.put("/spasR46hfback/credentialsPublic/components/credentials-public/recover-user/partialSuccess/partial-success-tpl.html", "<ng-include src=\"'/spasR46hfback/credentialsPublic/components/credentials-public/recover-user/partialSuccess/templates/' + partialSuccessUrl + '.html'\"></ng-include>")
}
]),
angular.module("/spasR46hfback/credentialsPublic/components/credentials-public/recover-user/partialSuccess/templates/code-entered-incorrectly.html", []).run(["$templateCache", function(a) {
    "use strict";
    a.put("/spasR46hfback/credentialsPublic/components/credentials-public/recover-user/partialSuccess/templates/code-entered-incorrectly.html", '<div class="wrap-partial-success row"><div class="col-xs-12"><h1 translate="RETAIL_CREDENTIALS_PUBLIC_RECOVERUSER_CODEENTEREDINCORRECTLY_TITLE"></h1><proteo-ui-text class="text-bold" paragraph="false" translate="RETAIL_CREDENTIALS_PUBLIC_RECOVERUSER_CODEENTEREDINCORRECTLY_SUBTITLE"></proteo-ui-text><proteo-ui-text paragraph translate="RETAIL_CREDENTIALS_PUBLIC_RECOVERUSER_PARTIALSUCCESS_INFO_COMPLETE_RESET_DATA" translate-values="{applicationType: applicationType, telePhoneNumber: telePhoneNumber, detailsHelpDesktTimes: detailsHelpDesktTimes}"></proteo-ui-text><proteo-ui-text paragraph translate="RETAIL_CREDENTIALS_PUBLIC_RECOVERUSER_PARTIALSUCCESS_QUOTE_REF_NUM_DATA" translate-values="{referenceNumber: model.referenceNumber}"></proteo-ui-text><proteo-ui-text paragraph translate="RETAIL_CREDENTIALS_PUBLIC_RECOVERUSER_PARTIALSUCCESS_HAVE_BANK_CARD_AVAILABLE"></proteo-ui-text><div class="row md-margin-top"><div class="col-xs-12"><proteo-ui-link class="btn md-btn pull-right" url="http://www.tsb.co.uk/"><proteo-ui-text translate="RETAIL_CREDENTIALS_PUBLIC_COMMON_BACK_TO_HOME"></proteo-ui-text></proteo-ui-link></div></div></div></div>')
}
]),
angular.module("/spasR46hfback/credentialsPublic/components/credentials-public/recover-user/partialSuccess/templates/no-response.html", []).run(["$templateCache", function(a) {
    "use strict";
    a.put("/spasR46hfback/credentialsPublic/components/credentials-public/recover-user/partialSuccess/templates/no-response.html", '<div class="wrap-partial-success row"><div class="col-xs-12"><h1 translate="RETAIL_CREDENTIALS_PUBLIC_RECOVERUSER_PARTIALSUCCESS_TITLE"></h1><proteo-ui-text class="text-bold" paragraph="false" translate="RETAIL_CREDENTIALS_PUBLIC_RECOVERUSER_PARTIALSUCCESS_INFO_COMPLETE_RESET_PASSANDMI" translate-values="{applicationType: applicationType}"></proteo-ui-text><br><br><proteo-ui-text paragraph="false" translate="RETAIL_CREDENTIALS_PUBLIC_RECOVERUSER_PARTIALSUCCESS_INFO_COMPLETE_RESET_PASSANDMI_TEXT2"></proteo-ui-text><proteo-ui-text paragraph="false" translate="RETAIL_CREDENTIALS_PUBLIC_RECOVERUSER_PARTIALSUCCESS_INFO_COMPLETE_RESET_PASSANDMI_TEXT3"></proteo-ui-text><proteo-ui-link url="http://www.tsb.co.uk/" class="btn md-btn pull-right"><proteo-ui-text><span translate="RETAIL_CREDENTIALS_PUBLIC_COMMON_BACK_TO_HOME"></span></proteo-ui-text></proteo-ui-link></div></div>')
}
]),
angular.module("/spasR46hfback/credentialsPublic/components/credentials-public/recover-user/partialSuccess/templates/partial-success-fraud.html", []).run(["$templateCache", function(a) {
    "use strict";
    a.put("/spasR46hfback/credentialsPublic/components/credentials-public/recover-user/partialSuccess/templates/partial-success-fraud.html", '<div class="wrap-partial-success row"><div class="col-xs-12"><h1 translate="RETAIL_CREDENTIALS_PUBLIC_RECOVERUSER_PARTIALSUCCESS_TITLE"></h1><br><br><proteo-ui-text class="text-bold" paragraph="false" translate="RETAIL_CREDENTIALS_PUBLIC_RECOVERUSER_PARTIALSUCCESS_FRAUD_INFO_" translate-values="{applicationType: applicationType}"></proteo-ui-text><br><proteo-ui-text paragraph="false" translate="RETAIL_CREDENTIALS_PUBLIC_RECOVERUSER_PARTIALSUCCESS_FRAUDD_INFO_2"></proteo-ui-text><proteo-ui-link url="http://www.tsb.co.uk/" class="btn md-btn pull-right"><proteo-ui-text><span translate="RETAIL_CREDENTIALS_PUBLIC_COMMON_BACK_TO_HOME"></span></proteo-ui-text></proteo-ui-link></div></div>')
}
]),
angular.module("/spasR46hfback/credentialsPublic/components/credentials-public/recover-user/partialSuccess/templates/partial-success.html", []).run(["$templateCache", function(a) {
    "use strict";
    a.put("/spasR46hfback/credentialsPublic/components/credentials-public/recover-user/partialSuccess/templates/partial-success.html", '<div class="wrap-partial-success row"><div class="col-xs-12"><h1 translate="RETAIL_CREDENTIALS_PUBLIC_RECOVERUSER_PARTIALSUCCESS_TITLE"></h1><proteo-ui-text class="text-bold" paragraph="false" translate="RETAIL_CREDENTIALS_PUBLIC_RECOVERUSER_PARTIALSUCCESS_RECEIVED_REQ_DATA" translate-values="{applicationType: applicationType}"></proteo-ui-text><proteo-ui-text class="text-bold" ng-if="code" paragraph="false" translate="COMMON_MG_{{code}}" translate-values="{applicationType: capitalize(applicationType)}"></proteo-ui-text><proteo-ui-text ng-if="model.customer !== \'loan\' && model.customer !== \'mortgage\'" paragraph="false" translate="RETAIL_CREDENTIALS_PUBLIC_RECOVERUSER_PARTIALSUCCESS_CALL_US_DATA" translate-values="{telePhoneNumber: telePhoneNumber, detailsHelpDesktTimes: detailsHelpDesktTimes}"></proteo-ui-text><proteo-ui-text ng-if="model.customer === \'loan\' || model.customer === \'mortgage\'" paragraph="false" translate="RETAIL_CREDENTIALS_PUBLIC_RECOVERUSER_PARTIALSUCCESS_SEND_LETTER"></proteo-ui-text><proteo-ui-text class="md-text" paragraph="false" translate="RETAIL_CREDENTIALS_PUBLIC_RECOVERUSER_PARTIALSUCCESS_QUOTE_REF_NUM_DATA" translate-values="{referenceNumber: model.referenceNumber}"></proteo-ui-text><proteo-ui-text paragraph="false" translate="RETAIL_CREDENTIALS_PUBLIC_RECOVERUSER_PARTIALSUCCESS_HAVE_BANK_CARD_AVAILABLE"></proteo-ui-text><proteo-ui-link url="http://www.tsb.co.uk/"><proteo-ui-text><proteo-ui-icon icon="next"></proteo-ui-icon><span translate="RETAIL_CREDENTIALS_PUBLIC_COMMON_BACK_TO_HOME"></span></proteo-ui-text></proteo-ui-link></div></div>')
}
]),
function() {
    "use strict";
    angular.module("App.phoneAuthenticationRequired").controller("phoneAuthenticationRequiredController", ["$scope", "$state", "$translate", "$stateParams", "$filter", "resetPasswordAndMIService", "tsbJournalService", "ConsultiveProvider", "DataLayerProvider", function(a, b, c, d, e, f, g, h, i) {
        function j(a) {
            var b = ["ERR154", "ERR53", "ERR52", "ERR153", "ERR92", "ERR93", "ERR50"];
            return a && -1 !== b.indexOf(a)
        }
        if (!d.data)
            return void b.go("login");
        a.consultive = {
            tcSelected: h.tcSelected
        },
        a.model = null,
        a.errorMessage = null,
        a.globalError = !1,
        a.data = d.data,
        a.applicationType = d.data.applicationType,
        a.consultiveCode = {
            PASSWORD: "RESPWD",
            PASSWORDANDMI: "RESMII"
        },
        a.userData = {
            lastName: d.data.lastName,
            firstName: d.data.firstName,
            dateOfBirth: d.data.dateOfBirth,
            userId: d.data.userId
        },
        i.sendResetCredentials("phoneAuthenticationRequired");
        var k = {
            newMemorableInformation: d.data.newMemorableInformation,
            newPassword: d.data.newPassword,
            userName: d.data.userId,
            firstName: d.data.firstName,
            lastName: d.data.lastName,
            dateBirth: d.data.dateOfBirth
        };
        a.goToPrevious = function(c) {
            var e = c && c.description ? c.description : null
              , f = c && c.code ? c.code : null
              , g = "PASSWORD" === a.applicationType ? "resetPassword" : "resetPasswordAndMI";
            b.go(g, {
                data: d.data,
                exception: e,
                exceptionIsMemo: j(f)
            })
        }
        ,
        a.cancel = function() {
            g.newOperation(),
            b.go("login")
        }
        ,
        a.goNoPhonesError = function() {
            g.newOperation(),
            b.go("userWithNoPhones")
        }
        ,
        a.userAuthenticated = function(c) {
            a.globalError = !1,
            f.resetPasswordAndMI(k).then(function(c) {
                g.newOperation(),
                c.isSuccessful ? (a.sysError = !1,
                b.go("resetPasswordSuccess", {
                    applicationType: a.applicationType
                }),
                a.globalError = !1) : (b.go("rpPhoneAuthenticationFailed", {
                    data: {
                        applicationType: a.applicationType
                    },
                    code: d.applicationType
                }),
                a.globalError = !0,
                a.globalErrorTxt = "COMMON_GLOBALERROR_TEXT")
            }, function(c) {
                g.newOperation(),
                a.globalError = !0,
                a.globalErrorTxt = angular.isDefined(c) && angular.isDefined(c.exception) && angular.isDefined(c.exception.description) ? c.exception.description : "COMMON_GLOBALERROR_TEXT";
                var d = c.exception[0] || c.exception
                  , e = null
                  , f = {
                    applicationType: a.applicationType
                };
                if (d)
                    switch (d.code) {
                    case "331":
                        e = "applicationAlreadyReceived",
                        f.referenceNumber = d.description,
                        f.code = d.code;
                        break;
                    case "334":
                    case "1128":
                        e = "partialSuccess",
                        f.referenceNumber = d.description,
                        f.code = d.code
                    }
                e ? b.go(e, f) : a.goToPrevious(c.exception),
                i.sendError({
                    message: a.globalErrorTxt,
                    code: c.exception.code,
                    type: i.errorType.WARNING
                })
            })
        }
        ,
        a.invalidAuthentication = function(b) {
            g.newOperation(),
            a.globalError = !0,
            a.globalErrorTxt = angular.isDefined(b) && angular.isDefined(b.exception) && angular.isDefined(b.exception.description) ? b.exception.description : "COMMON_GLOBALERROR_TEXT"
        }
        ,
        JSM._dataLayerSPAReady()
    }
    ])
}(),
function() {
    "use strict";
    angular.module("App.phoneAuthenticationRequired").config(["$stateProvider", function(a) {
        a.state("phoneAuthenticationRequired", {
            url: "/phoneAuthenticationRequired",
            templateUrl: "/spasR46hfback/credentialsPublic/components/credentials-public/recover-user/phoneAuthenticationRequired/phone-authentication-required-tpl.html",
            controller: "phoneAuthenticationRequiredController",
            params: {
                mockPhoneList: null,
                data: null,
                unsuccessful: !1,
                applicationType: null
            }
        })
    }
    ])
}(),
angular.module("App.phoneAuthenticationRequired.templates", ["/spasR46hfback/credentialsPublic/components/credentials-public/recover-user/phoneAuthenticationRequired/phone-authentication-required-tpl.html"]),
angular.module("/spasR46hfback/credentialsPublic/components/credentials-public/recover-user/phoneAuthenticationRequired/phone-authentication-required-tpl.html", []).run(["$templateCache", function(a) {
    "use strict";
    a.put("/spasR46hfback/credentialsPublic/components/credentials-public/recover-user/phoneAuthenticationRequired/phone-authentication-required-tpl.html", '<div class="row"><div signature-panel-error></div><div class="col-xs-12 signaturePanel" proteo-ui-signature><h1 class="no-margin-top sm-margin-top" translate="RETAIL_CREDENTIALS_PUBLIC_RECOVERUSER_PHONEAUTREQUIRED_TITLE"></h1><form name="signatureForm" method="POST" novalidate><proteo-ui-signature-panel go-with-activation="goNoPhonesError()" form-name="signatureForm" amount="0" user-data="userData" product="login" operation="{{consultive.tcSelected}}" use-operation-id="true"></proteo-ui-signature-panel></form><proteo-ui-thematic-break></proteo-ui-thematic-break><div class="row"><div class="col-xs-12 md-margin-top"><div class="row"><div class="col-xs-12 col-sm-6 col-lg-2"><proteo-ui-link class="pull-left" ng-click="cancel()"><proteo-ui-icon icon="cancel"></proteo-ui-icon><proteo-ui-text translate="RETAIL_CREDENTIALS_PUBLIC_COMMON_CANCEL"></proteo-ui-text></proteo-ui-link></div><div class="col-xs-12 col-sm-6 col-lg-2" ng-show="data.firstName != \'\'"><proteo-ui-button class="btn-white pull-left" ng-click="goToPrevious()"><proteo-ui-text translate="RETAIL_CREDENTIALS_PUBLIC_COMMON_PREVIOUS"></proteo-ui-text></proteo-ui-button></div><div class="col-xs-12 col-sm-6 col-lg-6 pull-right"><proteo-ui-signature-panel-button class="pull-right" is-invalid="invalidAuthentication(err)" is-valid="userAuthenticated(signatureForm)" ng-if="!continueButton && !signatureForm.authenticationPanelTelephoneForm" ng-disabled="!signatureForm.$valid || signatureForm.authenticationPanelTelephoneForm"><proteo-ui-text translate="RETAIL_CREDENTIALS_PUBLIC_COMMON_CONTINUE"></proteo-ui-text></proteo-ui-signature-panel-button></div></div></div></div></div></div>')
}
]),
function() {
    "use strict";
    angular.module("App.phoneAuthenticationRequiredSca").controller("phoneAuthenticationRequiredScaController", ["$scope", "tsbJournalService", "DataLayerProvider", "$state", "$stateParams", "$filter", "ConsultiveProvider", "challangeQuestionsService", "checkScaFactory", function(a, b, c, d, e, f, g, h, i) {
        var j = f("translate");
        if (!e.data)
            return void d.go("login");
        var k = "ERR1238";
        a.consultive = {
            tcSelected: g.tcSelected
        },
        a.operation = "RESSCA",
        a.errorRemainingAttempts = null,
        a.model = null,
        a.errorMessage = null,
        a.globalError = !1,
        a.data = e.data,
        a.userData = {
            lastName: a.data.lastName,
            firstName: a.data.firstName,
            dateOfBirth: a.data.dateOfBirth,
            userId: a.data.userId
        },
        c.sendResetCredentialsSca("phoneAuthenticationRequiredSca");
        var l = {
            userId: a.data.userId,
            firstName: a.data.firstName,
            lastName: a.data.lastName,
            dateOfBirth: a.data.dateOfBirth,
            questions: e.data.questions
        };
        a.goToPrevious = function() {
            d.go("challengeQuestions", {
                data: e.data
            })
        }
        ,
        a.cancel = function() {
            b.newOperation(),
            d.go("login")
        }
        ,
        a.goNoPhonesError = function() {
            b.newOperation(),
            d.go("userWithNoPhones")
        }
        ,
        a.userAuthenticated = function(e) {
            a.errorRemainingAttempts = null,
            a.globalError = !1,
            g.setUserQuestions(l.questions),
            h.evaluateFraud(l).then(function(a) {
                d.go("resetPasswordAndMI", {
                    data: l
                })
            }, function(e) {
                if (b.newOperation(),
                a.globalErrorTxt = angular.isDefined(e) && angular.isDefined(e.exception) && angular.isDefined(e.exception.description) ? e.exception.description : j("COMMON_GLOBALERROR_TEXT"),
                a.globalErrorTxt && "FR007" === e.exception.code)
                    d.go("partialSuccess", {
                        code: e.exception.code
                    });
                else {
                    var f = {
                        template: "technicalError",
                        title: "COMMON_GLOBALERROR_TITLE",
                        backMessage: !1,
                        backLink: !1,
                        linkState: "login",
                        technicalMessage: angular.isDefined(e.exception) && angular.isDefined(e.exception.description) ? e.exception.description : "COMMON_MG_SYSTEM_ERROR",
                        hideBackLinkButton: !1,
                        goBackState: "login",
                        linkText: "COMMON_GLOBALERROR_LOG_BACK_ACCOUNTS"
                    };
                    d.go("globalErrorPage", f)
                }
                c.sendError({
                    message: a.globalErrorTxt,
                    code: e.exception.code,
                    type: c.errorType.WARNING
                })
            })
        }
        ,
        a.invalidAuthentication = function(e) {
            a.globalError = !0,
            angular.isDefined(e) && angular.isDefined(e.code) && "ERR1240" === e.code ? (b.newOperation(),
            d.go("globalErrorPageReset", {})) : (angular.isDefined(e) && angular.isDefined(e.code) && e.code === k && (a.errorRemainingAttempts = e.description),
            a.$broadcast("openModalPanel")),
            c.sendError({
                message: e.description,
                code: e.code,
                type: c.errorType.POPUP
            })
        }
        ,
        JSM._dataLayerSPAReady()
    }
    ])
}(),
function() {
    "use strict";
    function a() {
        var a = {};
        return this.notFirstAttempt = !1,
        a.getNotFirstAttempt = function() {
            return this.notFirstAttempt
        }
        ,
        a.setNotFirstAttempt = function() {
            this.notFirstAttempt = !0
        }
        ,
        a
    }
    angular.module("App.phoneAuthenticationRequiredSca").factory("checkScaFactory", a)
}(),
function() {
    "use strict";
    angular.module("App.phoneAuthenticationRequiredSca").config(["$stateProvider", function(a) {
        a.state("phoneAuthenticationRequiredSca", {
            url: "/phoneAuthenticationRequiredSca",
            templateUrl: "/spasR46hfback/credentialsPublic/components/credentials-public/recover-user/phoneAuthenticationRequiredSca/phone-authentication-required-sca-tpl.html",
            controller: "phoneAuthenticationRequiredScaController",
            params: {
                mockPhoneList: null,
                data: null,
                unsuccessful: !1,
                applicationType: null
            }
        })
    }
    ])
}(),
angular.module("App.phoneAuthenticationRequiredSca.templates", ["/spasR46hfback/credentialsPublic/components/credentials-public/recover-user/phoneAuthenticationRequiredSca/phone-authentication-required-sca-tpl.html"]),
angular.module("/spasR46hfback/credentialsPublic/components/credentials-public/recover-user/phoneAuthenticationRequiredSca/phone-authentication-required-sca-tpl.html", []).run(["$templateCache", function(a) {
    "use strict";
    a.put("/spasR46hfback/credentialsPublic/components/credentials-public/recover-user/phoneAuthenticationRequiredSca/phone-authentication-required-sca-tpl.html", '<!DOCTYPE html><div class="row"><div ng-include="\'/spasR46hfback/credentialsPublic/components/credentials-public/recover-user/sca-modals-error/sca-modals-error-tpl.html\'"></div><div signature-panel-error></div><form name="validateSignature" novalidate><div proteo-ui-sca-signature id="signaturePanel"><div class="row md-margin-top"><div class="col-xs-12"><proteo-ui-sca-signature-panel go-with-activation="goNoPhonesError()" previous="goToPrevious()" operation="{{operation}}" form-name="validateSignature" amount="" user-data="userData" dl-data="dlData" use-operation-id="true"></proteo-ui-sca-signature-panel></div><proteo-ui-thematic-break></proteo-ui-thematic-break></div><div class="row"><div class="col-sm-6 col-xs-12"><proteo-ui-button type="button" class="btn-white" ng-click="goToPrevious()"><proteo-ui-text translate="RETAIL_CREDENTIALS_PUBLIC_COMMON_PREVIOUS"></proteo-ui-text></proteo-ui-button><proteo-ui-link class="hidden-sm hidden-md hidden-lg" ng-click="cancel()"><proteo-ui-icon icon="cancel"></proteo-ui-icon><proteo-ui-text translate="RETAIL_CREDENTIALS_PUBLIC_COMMON_CANCEL"></proteo-ui-text></proteo-ui-link><proteo-ui-link class="hidden-xs lg-margin-left" ng-click="cancel()"><proteo-ui-icon icon="cancel"></proteo-ui-icon><proteo-ui-text translate="RETAIL_CREDENTIALS_PUBLIC_COMMON_CANCEL"></proteo-ui-text></proteo-ui-link></div><div class="col-sm-6 col-xs-12 text-right"><proteo-ui-sca-signature-panel-button type="submit" is-invalid="invalidAuthentication(err)" is-valid="userAuthenticated()" ng-if="validateSignature.$valid" ng-disabled="!validateSignature.$valid"><proteo-ui-text translate="RETAIL_CREDENTIALS_PUBLIC_COMMON_CONTINUE"></proteo-ui-text></proteo-ui-sca-signature-panel-button></div></div></div></form></div>')
}
]),
function() {
    "use strict";
    angular.module("App.resetPasswordAndMI").controller("resetPasswordAndMIController", ["$scope", "$state", "$stateParams", "resetPasswordAndMIService", "tsbJournalService", "$filter", "DataLayerProvider", "ConsultiveProvider", "getUserGenericService", "logOnFactory", function(a, b, c, d, e, f, g, h, i, j) {
        function k(b) {
            r();
            var c = v.PASSWORD;
            return b ? (b.length < 6 || b.length > 15 || !b.match(/^[a-zA-Z0-9]+$/) ? (a.validationChecks[c].tip01.icon = "alert",
            a.validationChecks[c].tip01.color = "red") : (a.validationChecks[c].tip01.icon = "check",
            a.validationChecks[c].tip01.color = "green"),
            b.match(/[A-Za-z]/g) && b.match(/[0-9]/g) && b.match(/[A-Za-z]/g).length >= 3 ? (a.validationChecks[c].tip02.icon = "check",
            a.validationChecks[c].tip02.color = "green") : (a.validationChecks[c].tip02.icon = "alert",
            a.validationChecks[c].tip02.color = "red"),
            b != a.userId ? (a.validationChecks[c].tip03.icon = "check",
            a.validationChecks[c].tip03.color = "green") : (a.validationChecks[c].tip03.icon = "alert",
            a.validationChecks[c].tip03.color = "red"),
            void (b.match("password") || b.match("12345") ? (a.validationChecks[c].tip04.icon = "alert",
            a.validationChecks[c].tip04.color = "red") : (a.validationChecks[c].tip04.icon = "check",
            a.validationChecks[c].tip04.color = "green"))) : (a.validationChecks[c] = angular.copy(a.masterModel[c]),
            null)
        }
        function l(b) {
            r();
            var c = v.MI;
            return b ? (b.length < 6 || b.length > 15 ? (a.validationChecks[c].tip01.icon = "alert",
            a.validationChecks[c].tip01.color = "red") : (a.validationChecks[c].tip01.icon = "check",
            a.validationChecks[c].tip01.color = "green"),
            u.test(b) ? (a.validationChecks[c].tip02.icon = "check",
            a.validationChecks[c].tip02.color = "green") : (a.validationChecks[c].tip02.icon = "alert",
            a.validationChecks[c].tip02.color = "red"),
            void (b != a.userId ? (a.validationChecks[c].tip03.icon = "check",
            a.validationChecks[c].tip03.color = "green") : (a.validationChecks[c].tip03.icon = "alert",
            a.validationChecks[c].tip03.color = "red"))) : (a.validationChecks[c] = angular.copy(a.masterModel[c]),
            null)
        }
        function m() {
            n(),
            s(),
            JSM._dataLayerSPAReady(),
            g.scaResetFlow === !0 ? g.sendResetCredentialsSca("resetPasswordAndMI") : g.sendResetCredentials("resetPasswordAndMI")
        }
        function n() {
            a.model = angular.copy(w),
            a.data = c.data || null
        }
        function o(b) {
            b.$setValidity("passwordNotEqual", angular.equals(a.model.password, a.model.newPassword))
        }
        function p(b) {
            b.$setValidity("memorableInfoNotEqual", angular.equals(a.model.currentMemorableInfo, a.model.newMemorableInformation))
        }
        function q(b) {
            b.$setValidity("memorableInfoEqualPwd", !angular.equals(a.model.currentMemorableInfo, a.model.password)),
            angular.isDefined(a.model.userId) && b.$setValidity("memorableInfoEqualUserId", !angular.equals(a.model.currentMemorableInfo, a.model.userId))
        }
        function r() {
            a.globalError = !1,
            a.exception = null
        }
        function s() {
            i.getUserDetails().then(function(b) {
                a.model = {
                    userDetails: {
                        firstName: b.user.firstName,
                        lastName: b.user.lastName,
                        dateOfBirth: b.user.dateOfBirth
                    },
                    loginDetails: {
                        username: j.getUserId()
                    }
                }
            }, function(a) {
                console.log("getUser error" + a)
            })
        }
        var t = f("translate");
        c.data || b.go("login"),
        a.model = null,
        a.exception = c.exception || null,
        a.exceptionIsMemo = c.exceptionIsMemo,
        a.applicationType = "PASSWORDANDMI",
        a.globalError = !1,
        a.globalErrorTxt = "COMMON_GLOBALERROR_TEXT",
        a.errorValidations = ["ERR153", "ERR154"],
        a.passwordValidation = k,
        a.miValidation = l,
        a.masterModel = {
            passwordValidationChecks: {
                tip01: {
                    icon: "dot",
                    color: null
                },
                tip02: {
                    icon: "dot",
                    color: null
                },
                tip03: {
                    icon: "dot",
                    color: null
                },
                tip04: {
                    icon: "dot",
                    color: null
                }
            },
            miValidationChecks: {
                tip01: {
                    icon: "dot",
                    color: null
                },
                tip02: {
                    icon: "dot",
                    color: null
                },
                tip03: {
                    icon: "dot",
                    color: null
                }
            }
        },
        a.validationChecks = {
            passwordValidationChecks: angular.copy(a.masterModel.passwordValidationChecks),
            miValidationChecks: angular.copy(a.masterModel.miValidationChecks)
        },
        a.userId = h.getUserId();
        var u = new RegExp(/^[a-z0-9]+$/i)
          , v = {
            PASSWORD: "passwordValidationChecks",
            MI: "miValidationChecks"
        }
          , w = {
            userData: c.data,
            password: null,
            newPassword: null,
            currentMemorableInfo: null,
            newMemorableInformation: null
        };
        a.checkEqualsPassword = function(b) {
            o(b),
            a.resetPasswordAndMIForm && q(a.resetPasswordAndMIForm.currentMemorableInfo)
        }
        ,
        a.checkEqualsMemoInfo = function(a) {
            p(a)
        }
        ,
        a.checkMemoEqualsPass = function(a) {
            q(a)
        }
        ,
        a.cancel = function() {
            e.newOperation(),
            b.go("login")
        }
        ,
        a.handleError = function(c) {
            a.globalError = !0,
            a.globalErrorTxt = angular.isDefined(c) && angular.isDefined(c.exception) && angular.isDefined(c.exception.description) ? c.exception.description : "COMMON_GLOBALERROR_TEXT";
            var d = c.exception[0] || c.exception
              , e = null
              , f = {
                applicationType: "PASSWORDANDMI"
            };
            if (d)
                switch (d.code) {
                case "331":
                    e = "applicationAlreadyReceived",
                    f.referenceNumber = d.description,
                    f.code = d.code;
                    break;
                case "334":
                case "1128":
                    e = "partialSuccess",
                    f.referenceNumber = d.description,
                    f.code = d.code;
                    break;
                case "ERR153":
                case "ERR50":
                case "ERR93":
                case "ERR92":
                case "ERR154":
                case "ERR53":
                case "ERR52":
                    a.exception = angular.isDefined(c.exception.description) ? c.exception.description : null
                }
            e && b.go(e, f)
        }
        ,
        a.submit = function(c) {
            if (r(),
            o(c.newPassword),
            p(c.newMemorableInformation),
            q(c.currentMemorableInfo),
            c.$valid) {
                a.formError = !1;
                var f = {
                    newPassword: angular.isDefined(a.model.newPassword) ? a.model.newPassword : null,
                    newMemorableInformation: angular.isDefined(a.model.newMemorableInformation) ? a.model.newMemorableInformation : null,
                    userId: a.userId,
                    firstName: angular.isDefined(a.model.userData) && angular.isDefined(a.model.userData.firstName) ? a.model.userData.firstName : null,
                    lastName: angular.isDefined(a.model.userData) && angular.isDefined(a.model.userData.lastName) ? a.model.userData.lastName : null,
                    dateOfBirth: angular.isDefined(a.model.userData) && angular.isDefined(a.model.userData.dateOfBirth) ? a.model.userData.dateOfBirth : null,
                    applicationType: "PASSWORDANDMI",
                    questions: a.data.questions
                }
                  , i = {
                    newPassword: angular.isDefined(a.model.newPassword) ? a.model.newPassword : null,
                    newMemorableInformation: angular.isDefined(a.model.newMemorableInformation) ? a.model.newMemorableInformation : null,
                    userName: a.userId,
                    firstName: angular.isDefined(a.model.userData) && angular.isDefined(a.model.userData.firstName) ? a.model.userData.firstName : null,
                    lastName: angular.isDefined(a.model.userData) && angular.isDefined(a.model.userData.lastName) ? a.model.userData.lastName : null,
                    dateBirth: angular.isDefined(a.model.userData) && angular.isDefined(a.model.userData.dateOfBirth) ? a.model.userData.dateOfBirth : null
                };
                h.setUserBirth(i.dateOfBirth);
                var j = f.questions;
                angular.isUndefined(j) || 0 === j.length ? b.go("phoneAuthenticationRequired", {
                    data: f
                }) : d.resetPasswordAndMI(i).then(function(a) {
                    e.newOperation(),
                    angular.extend(i, {
                        applicationType: "PASSWORDANDMI"
                    }),
                    a.isSuccessful === !0 ? b.go("resetPasswordSuccess", i) : m()
                }, function(b) {
                    e.newOperation();
                    var c = b && b.exception && b.exception.code ? b.exception.code : ""
                      , d = b && b.exception && b.exception.description ? b.exception.description : t("COMMON_MG_SYSTEM_ERROR");
                    g.sendError({
                        message: d,
                        code: c,
                        type: g.errorType.WARNING
                    }),
                    a.handleError(b)
                })
            } else
                a.formError = !0
        }
        ,
        m()
    }
    ])
}(),
function() {
    "use strict";
    angular.module("App.resetPasswordAndMI").factory("resetPasswordAndMIService", ["$q", "proteocanalinvokerServices", "CREDENTIALSPUBLIC_WEBADAPTER", "consultiveFactory", function(a, b, c, d) {
        var e = {};
        return e.resetPasswordAndMI = function(e) {
            function f(a) {
                h.resolve(a)
            }
            function g(a) {
                h.reject(a)
            }
            var h = a.defer()
              , i = {
                "HEADER.operationID": d.getOperationID(),
                "HEADER.SERVICE_SCOPE": "PUBLIC"
            };
            return b.invoke({
                service: c.resetPasswordAndMI,
                callback: f,
                fail: g,
                data: e,
                headers: i
            }),
            h.promise
        }
        ,
        e
    }
    ])
}(),
function() {
    "use strict";
    angular.module("App.resetPasswordAndMI").config(["$stateProvider", function(a) {
        a.state("resetPasswordAndMI", {
            url: "/resetPasswordAndMI",
            templateUrl: "/spasR46hfback/credentialsPublic/components/credentials-public/recover-user/resetPasswordAndMI/reset-password-and-m-i-tpl.html",
            controller: "resetPasswordAndMIController",
            params: {
                data: null,
                exception: null,
                exceptionIsMemo: !1
            },
            resolve: {
                Consultive: ["ConsultiveProvider", function(a) {
                    return a.getUserQuestions() ? void 0 : a.validateOperation("resetPasswordAndMI")
                }
                ]
            }
        })
    }
    ])
}(),
angular.module("App.resetPasswordAndMI.templates", ["/spasR46hfback/credentialsPublic/components/credentials-public/recover-user/resetPasswordAndMI/reset-password-and-m-i-tpl.html"]),
angular.module("/spasR46hfback/credentialsPublic/components/credentials-public/recover-user/resetPasswordAndMI/reset-password-and-m-i-tpl.html", []).run(["$templateCache", function(a) {
    "use strict";
    a.put("/spasR46hfback/credentialsPublic/components/credentials-public/recover-user/resetPasswordAndMI/reset-password-and-m-i-tpl.html", '<div class="row"><div class="col-xs-12"><h1 translate="RETAIL_CREDENTIALS_PUBLIC_RECOVERUSER_RESETPWDANDMI_TITLE"></h1><proteo-ui-text paragraph="false" translate="RETAIL_CREDENTIALS_PUBLIC_RECOVERUSER_RESETPWDANDMI_TEXT_01_SHORT"></proteo-ui-text><proteo-ui-text paragraph="false" translate="RETAIL_CREDENTIALS_PUBLIC_RECOVERUSER_RESETPWDANDMI_TEXT_02"></proteo-ui-text><form name="resetPasswordAndMIForm" method="POST" ng-submit="submit(resetPasswordAndMIForm)" novalidate><h2 translate="RETAIL_CREDENTIALS_PUBLIC_RECOVERUSER_RESETPWDANDMI_SETP_01"></h2><div class="row"><div class="col-xs-12 lg-padding-left md-margin-bottom" ng-show="resetPasswordAndMIForm.password.$invalid && (formError || globalError)"><div class="row"><div class="col-xs-1"><proteo-ui-icon class="sm-margin-right no-padding-right" icon-bg="red" icon="alert"></proteo-ui-icon></div><proteo-ui-text class="no-padding-left col-xs-11" ng-show="resetPasswordAndMIForm.password.$invalid" translate="COMMON_MG_265"></proteo-ui-text><proteo-ui-text class="no-padding-left col-xs-11" ng-show="resetPasswordAndMIForm.password.$error.passwordNotEqual" translate="COMMON_MG_516"></proteo-ui-text><proteo-ui-text class="no-padding-left col-xs-11" ng-show="globalError">{{globalErrorTxt}}</proteo-ui-text></div></div><div class="col-xs-12 lg-padding-left md-margin-bottom" ng-show="exception && !exceptionIsMemo"><proteo-ui-icon class="sm-margin-right" icon-bg="red" icon="alert"></proteo-ui-icon><proteo-ui-text ng-show="exception">{{exception}}</proteo-ui-text></div></div><div class="d-flex"><div class="sm-margin-top md-padding-right"><span class="text-md">&#9432;</span></div><div class="md-padding panel gray-panel panel-header"><proteo-ui-text translate="RETAIL_CREDENTIALS_PUBLIC_RECOVERUSER_RESETPWDANDMI_PWD_DISCLAIMER"></proteo-ui-text></div></div><div class="row md-margin-bottom"><div class="col-md-11"><div class="sm-margin-bottom"><proteo-ui-icon icon="{{validationChecks.passwordValidationChecks.tip01.icon}}"></proteo-ui-icon><proteo-ui-text class="ml-2" ng-class="\'text-\' + validationChecks.passwordValidationChecks.tip01.color" translate="RETAIL_CREDENTIALS_PUBLIC_RECOVERUSER_RESETPWD_DYNAMIC_TIPS_01"></proteo-ui-text></div><div class="sm-margin-bottom"><proteo-ui-icon icon="{{validationChecks.passwordValidationChecks.tip02.icon}}"></proteo-ui-icon><proteo-ui-text class="ml-2" ng-class="\'text-\' + validationChecks.passwordValidationChecks.tip02.color" translate="RETAIL_CREDENTIALS_PUBLIC_RECOVERUSER_RESETPWD_DYNAMIC_TIPS_02"></proteo-ui-text></div><div class="sm-margin-bottom"><proteo-ui-icon icon="{{validationChecks.passwordValidationChecks.tip03.icon}}"></proteo-ui-icon><proteo-ui-text class="ml-2" ng-class="\'text-\' + validationChecks.passwordValidationChecks.tip03.color" translate="RETAIL_CREDENTIALS_PUBLIC_RECOVERUSER_RESETPWD_DYNAMIC_TIPS_03"></proteo-ui-text></div><div class="sm-margin-bottom"><proteo-ui-icon icon="{{validationChecks.passwordValidationChecks.tip04.icon}}"></proteo-ui-icon><proteo-ui-text class="ml-2" ng-class="\'text-\' + validationChecks.passwordValidationChecks.tip04.color" translate="RETAIL_CREDENTIALS_PUBLIC_RECOVERUSER_RESETPWD_DYNAMIC_TIPS_04"></proteo-ui-text></div></div></div><proteo-ui-form-group><label for="password" translate="RETAIL_CREDENTIALS_PUBLIC_RECOVERUSER_RESETPWD_COLLAPSE_ENTER_NEW_PASSWORD_COLON"></label><proteo-ui-form-control><proteo-ui-input id="password" minlength="6" maxlength="15" name="password" ng-blur="checkPasswordUserId(resetPasswordAndMIForm.password);" ng-maxlength="15" ng-model="model.password" ng-pattern="/^(?=.*\\d)(?=(.*[a-zA-Z]){3})[a-zA-Z0-9]{6,15}$/" pattern="/^(?=.*\\d)(?=(.*[a-zA-Z]){3})[a-zA-Z0-9]{6,15}$/" required ng-keyup="passwordValidation(resetPasswordAndMIForm.password.$viewValue)" type="password"></proteo-ui-input></proteo-ui-form-control><proteo-ui-form-error><div ng-if="resetPasswordAndMIForm.password.$error.required"><proteo-ui-text class="form-error" translate="RETAIL_CREDENTIALS_PUBLIC_COMMON_ERROR_ENTERVALUE"></proteo-ui-text></div><div ng-if="resetPasswordAndMIForm.password.$error.pattern"><proteo-ui-text class="form-error" translate="RETAIL_CREDENTIALS_PUBLIC_COMMON_ERROR_FORMAT_PWD"></proteo-ui-text></div><div ng-if="resetPasswordAndMIForm.password.$error.maxlength"><proteo-ui-text class="form-error" translate="RETAIL_CREDENTIALS_PUBLIC_COMMON_ERROR_LENGTH"></proteo-ui-text></div><div ng-if="resetPasswordAndMIForm.password.$error.pswdhasUD && !resetPasswordAndMIForm.password.$error.minlength"><proteo-ui-text class="form-error" translate="RETAIL_CREDENTIALS_PUBLIC_STEP2_ERROR_PSWDHASUSERDETAILS"></proteo-ui-text></div></proteo-ui-form-error></proteo-ui-form-group><proteo-ui-form-group><label for="repassword" translate="RETAIL_CREDENTIALS_PUBLIC_RECOVERUSER_RESETPWD_COLLAPSE_RE_ENTER_NEW_PASSWORD_COLON"></label><proteo-ui-form-control><proteo-ui-input id="repassword" maxlength="15" name="newPassword" ng-blur="checkEqualsPassword(resetPasswordAndMIForm.newPassword)" ng-maxlength="15" ng-model="model.newPassword" ng-pattern="/^(?=.*\\d)(?=(.*[a-zA-Z]){3})[a-zA-Z0-9]{6,15}$/" pattern="/^(?=.*\\d)(?=(.*[a-zA-Z]){3})[a-zA-Z0-9]{6,15}$/" required type="password"></proteo-ui-input></proteo-ui-form-control><proteo-ui-form-error><div ng-if="resetPasswordAndMIForm.newPassword.$error.required"><proteo-ui-text class="form-error" translate="RETAIL_CREDENTIALS_PUBLIC_COMMON_ERROR_ENTERVALUE"></proteo-ui-text></div><div ng-if="resetPasswordAndMIForm.newPassword.$error.pattern"><proteo-ui-text class="form-error" translate="RETAIL_CREDENTIALS_PUBLIC_COMMON_ERROR_FORMAT_PWD"></proteo-ui-text></div><div ng-if="resetPasswordAndMIForm.newPassword.$error.maxlength"><proteo-ui-text class="form-error" translate="RETAIL_CREDENTIALS_PUBLIC_COMMON_ERROR_LENGTH"></proteo-ui-text></div><div ng-show="!resetPasswordAndMIForm.newPassword.$error.required && resetPasswordAndMIForm.newPassword.$error.passwordNotEqual"><proteo-ui-text class="form-error" translate="RETAIL_CREDENTIALS_PUBLIC_COMMON_ERROR_PASSWORD_EQUAL"></proteo-ui-text></div></proteo-ui-form-error></proteo-ui-form-group><proteo-ui-thematic-break class="no-margin no-padding"></proteo-ui-thematic-break><h2 translate="RETAIL_CREDENTIALS_PUBLIC_RECOVERUSER_RESETPWDANDMI_SETP_02"></h2><div class="row"><div class="col-xs-12 lg-padding-left md-margin-bottom" ng-show="resetPasswordAndMIForm.currentMemorableInfo.$invalid && (formError || globalError)"><div class="row"><div class="col-xs-1"><proteo-ui-icon class="sm-margin-right no-padding-right" icon-bg="red" icon="alert"></proteo-ui-icon></div><proteo-ui-text class="no-padding-left col-xs-11" ng-show="resetPasswordAndMIForm.currentMemorableInfo.$invalid" translate="COMMON_MG_263"></proteo-ui-text></div></div><div class="col-xs-12 lg-padding-left md-margin-bottom" ng-show="exception && exceptionIsMemo"><proteo-ui-icon class="sm-margin-right" icon-bg="red" icon="alert"></proteo-ui-icon><proteo-ui-text ng-show="exception">{{exception}}</proteo-ui-text></div></div><div class="d-flex"><div class="sm-margin-top md-padding-right"><span class="text-md">&#9432;</span></div><div class="md-padding panel gray-panel panel-header"><proteo-ui-text translate="RETAIL_CREDENTIALS_PUBLIC_RECOVERUSER_RESETPWDANDMI_MI_DISCLAIMER"></proteo-ui-text></div></div><div class="row md-margin-bottom"><div class="col-md-9"><div class="sm-margin-bottom"><proteo-ui-icon icon="{{validationChecks.miValidationChecks.tip01.icon}}"></proteo-ui-icon><proteo-ui-text class="ml-2" ng-class="\'text-\' + validationChecks.miValidationChecks.tip01.color" translate="RETAIL_CREDENTIALS_PUBLIC_RECOVERUSER_RESETMI_DYNAMIC_TIPS_01"></proteo-ui-text></div><div class="sm-margin-bottom"><proteo-ui-icon icon="{{validationChecks.miValidationChecks.tip02.icon}}"></proteo-ui-icon><proteo-ui-text class="ml-2" ng-class="\'text-\' + validationChecks.miValidationChecks.tip02.color" translate="RETAIL_CREDENTIALS_PUBLIC_RECOVERUSER_RESETMI_DYNAMIC_TIPS_02"></proteo-ui-text></div><div class="sm-margin-bottom"><proteo-ui-icon icon="{{validationChecks.miValidationChecks.tip03.icon}}"></proteo-ui-icon><proteo-ui-text class="ml-2" ng-class="\'text-\' + validationChecks.miValidationChecks.tip03.color" translate="RETAIL_CREDENTIALS_PUBLIC_RECOVERUSER_RESETMI_DYNAMIC_TIPS_03"></proteo-ui-text></div></div></div><proteo-ui-form-group><label for="memorableInfoInput" translate="RETAIL_CREDENTIALS_PUBLIC_RECOVERUSER_RESETPWDANDMI_NEW_MI_COLON"></label><proteo-ui-form-control><proteo-ui-input id="memorableInfoInput" maxlength="15" name="currentMemorableInfo" ng-blur="checkMemoEqualsPass(resetPasswordAndMIForm.currentMemorableInfo); checkEqualsMemoInfo(resetPasswordAndMIForm.newMemorableInformation)" ng-maxlength="15" ng-model="model.currentMemorableInfo" ng-pattern="/^(?=.*\\d)(?=(.*[a-zA-Z]){3})[a-zA-Z0-9]{6,15}$/" pattern="/^(?=.*\\d)(?=(.*[a-zA-Z]){3})[a-zA-Z0-9]{6,15}$/" required type="password" ng-keyup="miValidation(resetPasswordAndMIForm.currentMemorableInfo.$viewValue)"></proteo-ui-input></proteo-ui-form-control><proteo-ui-form-error><div ng-if="resetPasswordAndMIForm.currentMemorableInfo.$error.required"><proteo-ui-text class="form-error" translate="RETAIL_CREDENTIALS_PUBLIC_COMMON_ERROR_ENTERVALUE"></proteo-ui-text></div><div ng-if="resetPasswordAndMIForm.currentMemorableInfo.$error.pattern"><proteo-ui-text class="form-error" translate="RETAIL_CREDENTIALS_PUBLIC_COMMON_ERROR_FORMAT_PWD"></proteo-ui-text></div><div ng-if="resetPasswordAndMIForm.currentMemorableInfo.$error.maxlength"><proteo-ui-text class="form-error" translate="RETAIL_CREDENTIALS_PUBLIC_COMMON_ERROR_LENGTH"></proteo-ui-text></div><div ng-show="resetPasswordAndMIForm.currentMemorableInfo.$error.memorableInfoEqualPwd || resetPasswordAndMIForm.currentMemorableInfo.$error.memorableInfoEqualUserId"><proteo-ui-text class="form-error" translate="RETAIL_CREDENTIALS_PUBLIC_COMMON_ERROR_MEMOINFO_EQUAL_PWD_ID2"></proteo-ui-text></div></proteo-ui-form-error></proteo-ui-form-group><proteo-ui-form-group><label for="rememorableInfoInput" translate="RETAIL_CREDENTIALS_PUBLIC_RECOVERUSER_RESETPWDANDMI_RE_NEW_MI_COLON"></label><proteo-ui-form-control><proteo-ui-input id="newMemorableInfoInput" maxlength="15" name="newMemorableInformation" ng-blur="checkEqualsMemoInfo(resetPasswordAndMIForm.newMemorableInformation)" ng-maxlength="15" ng-model="model.newMemorableInformation" ng-pattern="/^(?=.*\\d)(?=(.*[a-zA-Z]){3})[a-zA-Z0-9]{6,15}$/" pattern="/^(?=.*\\d)(?=(.*[a-zA-Z]){3})[a-zA-Z0-9]{6,15}$/" required type="password"></proteo-ui-input></proteo-ui-form-control><proteo-ui-form-error><div ng-if="resetPasswordAndMIForm.newMemorableInformation.$error.required"><proteo-ui-text class="form-error" translate="RETAIL_CREDENTIALS_PUBLIC_COMMON_ERROR_ENTERVALUE"></proteo-ui-text></div><div ng-if="resetPasswordAndMIForm.newMemorableInformation.$error.pattern"><proteo-ui-text class="form-error" translate="RETAIL_CREDENTIALS_PUBLIC_COMMON_ERROR_FORMAT_PWD"></proteo-ui-text></div><div ng-if="resetPasswordAndMIForm.newMemorableInformation.$error.maxlength"><proteo-ui-text class="form-error" translate="RETAIL_CREDENTIALS_PUBLIC_COMMON_ERROR_LENGTH"></proteo-ui-text></div><div ng-show="resetPasswordAndMIForm.newMemorableInformation.$error.memorableInfoNotEqual && !resetPasswordAndMIForm.newMemorableInformation.$error.required"><proteo-ui-text class="form-error" translate="RETAIL_CREDENTIALS_PUBLIC_COMMON_ERROR_MEMOINFO_EQUAL"></proteo-ui-text></div></proteo-ui-form-error></proteo-ui-form-group><div class="row"><proteo-ui-thematic-break></proteo-ui-thematic-break><div class="sm-margin-top col-xs-12 col-sm-6"><proteo-ui-link ng-click="cancel()"><proteo-ui-text><proteo-ui-icon icon="cancel"></proteo-ui-icon><span translate="RETAIL_CREDENTIALS_PUBLIC_COMMON_CANCEL"></span></proteo-ui-text></proteo-ui-link></div><div class="col-xs-12 col-sm-6"><proteo-ui-button class="pull-right" type="submit"><proteo-ui-text translate="RETAIL_CREDENTIALS_PUBLIC_COMMON_CONTINUE"></proteo-ui-text></proteo-ui-button></div></div></form></div></div>')
}
]),
function() {
    "use strict";
    angular.module("App.resetPasswordSuccess").controller("resetPasswordSuccessController", ["$scope", "$state", "$stateParams", "DataLayerProvider", function(a, b, c, d) {
        function e() {
            switch (c.applicationType) {
            case "PASSWORD":
                a.applicationType = "PASSWORD";
                break;
            case "PASSWORDANDMI":
                a.applicationType = "PASSWORDANDMI";
                break;
            default:
                JSM._dataLayerSPAReady(),
                a.goState("login")
            }
        }
        a.goState = function(a) {
            b.go(a)
        }
        ,
        e(),
        JSM._dataLayerSPAReady(),
        d.scaResetFlow === !0 ? d.sendResetCredentialsSca("resetPasswordSuccess") : d.sendResetCredentials("resetPasswordSuccess")
    }
    ])
}(),
function() {
    "use strict";
    angular.module("App.resetPasswordSuccess").config(["$stateProvider", function(a) {
        a.state("resetPasswordSuccess", {
            url: "/resetPasswordSuccess",
            templateUrl: "/spasR46hfback/credentialsPublic/components/credentials-public/recover-user/resetPasswordSuccess/reset-password-success-tpl.html",
            controller: "resetPasswordSuccessController",
            params: {
                applicationType: null
            }
        })
    }
    ])
}(),
angular.module("App.resetPasswordSuccess.templates", ["/spasR46hfback/credentialsPublic/components/credentials-public/recover-user/resetPasswordSuccess/reset-password-success-tpl.html"]),
angular.module("/spasR46hfback/credentialsPublic/components/credentials-public/recover-user/resetPasswordSuccess/reset-password-success-tpl.html", []).run(["$templateCache", function(a) {
    "use strict";
    a.put("/spasR46hfback/credentialsPublic/components/credentials-public/recover-user/resetPasswordSuccess/reset-password-success-tpl.html", '<div class="row"><div class="col-xs-12"><div class="row"><div class="col-xs-12"><h1 translate="RETAIL_CREDENTIALS_PUBLIC_RECOVERUSER_RESETPWDSUCCESS_TITLE_DATA" ng-if="applicationType == \'PASSWORD\'"></h1><h1 translate="RETAIL_CREDENTIALS_PUBLIC_RECOVERUSER_RESETPWDSUCCESS_TITLE_DATA_PASSMI" ng-if="applicationType == \'PASSWORDANDMI\'"></h1></div><div class="col-xs-12"><proteo-ui-text paragraph="false" translate="RETAIL_CREDENTIALS_PUBLIC_RECOVERUSER_RESETPWDSUCCESS_TEXT_DATA" ng-if="applicationType === \'PASSWORD\'"></proteo-ui-text><proteo-ui-text paragraph="false" translate="RETAIL_CREDENTIALS_PUBLIC_RECOVERUSER_RESETPWDSUCCESS_TEXT_DATA_PASSMI" ng-if="applicationType === \'PASSWORDANDMI\'"></proteo-ui-text></div><proteo-ui-thematic-break></proteo-ui-thematic-break><div class="col-xs-12"><proteo-ui-button class="pull-right" ng-click="goState(\'login\')"><proteo-ui-text translate="RETAIL_CREDENTIALS_PUBLIC_COMMON_LOG_INTO_INTERNET_BANKING"></proteo-ui-text></proteo-ui-button></div></div></div></div>')
}
]),
function() {
    "use strict";
    angular.module("App.rpPhoneAuthenticationFailed").controller("rpPhoneAuthenticationFailedController", ["$scope", "$stateParams", "genericFunctions", function(a, b, c) {
        function d() {
            e(),
            JSM._dataLayerSPAReady()
        }
        function e() {
            switch (a.phoneType) {
            case 1:
                a.phoneText = "RETAIL_CREDENTIALS_PUBLIC_COMMON_MOBILE_COLON";
                break;
            default:
                a.phoneText = "RETAIL_CREDENTIALS_PUBLIC_COMMON_MOBILE_COLON"
            }
        }
        a.phoneType = 1,
        a.phoneText = null,
        a.phoneNumber = "78912341234",
        a.code = b.code,
        a.gotoPublicTsb = function() {
            c.goToInternalURL("/personal", "_self", "", !1, "public")
        }
        ,
        d()
    }
    ])
}(),
function() {
    "use strict";
    angular.module("App.rpPhoneAuthenticationFailed").config(["$stateProvider", function(a) {
        a.state("rpPhoneAuthenticationFailed", {
            url: "/rpPhoneAuthenticationFailed",
            templateUrl: "/spasR46hfback/credentialsPublic/components/credentials-public/recover-user/rpPhoneAuthenticationFailed/rp-phone-authentication-failed-tpl.html",
            controller: "rpPhoneAuthenticationFailedController",
            params: {
                data: null,
                code: null
            }
        })
    }
    ])
}(),
angular.module("App.rpPhoneAuthenticationFailed.templates", ["/spasR46hfback/credentialsPublic/components/credentials-public/recover-user/rpPhoneAuthenticationFailed/rp-phone-authentication-failed-tpl.html"]),
angular.module("/spasR46hfback/credentialsPublic/components/credentials-public/recover-user/rpPhoneAuthenticationFailed/rp-phone-authentication-failed-tpl.html", []).run(["$templateCache", function(a) {
    "use strict";
    a.put("/spasR46hfback/credentialsPublic/components/credentials-public/recover-user/rpPhoneAuthenticationFailed/rp-phone-authentication-failed-tpl.html", '<div class="wrap-phone-authentication row"><div class="col-xs-12"><h1 translate="RETAIL_CREDENTIALS_PUBLIC_REGISTRATION_PHONEAUTHFAIL_TITLE"></h1><proteo-ui-text paragraph translate="RETAIL_CREDENTIALS_PUBLIC_RECOVERUSER_PHONEAUTFAILED_MG_1103"></proteo-ui-text><proteo-ui-text class="text-bold" ng-if="code" paragraph translate="COMMON_MG_{{code}}"></proteo-ui-text><proteo-ui-text paragraph translate="RETAIL_CREDENTIALS_PUBLIC_REGISTRATION_PHONEAUTHFAIL_INFO_TEXT_01"></proteo-ui-text><proteo-ui-text paragraph translate="RETAIL_CREDENTIALS_PUBLIC_REGISTRATION_PHONEAUTHFAIL_INFO_TEXT_02"></proteo-ui-text><div class="row md-margin-top"><div class="col-xs-12"><proteo-ui-link ng-click="gotoPublicTsb()" class="btn md-btn pull-right"><proteo-ui-text translate="RETAIL_CREDENTIALS_PUBLIC_COMMON_BACK_TO_HOME"></proteo-ui-text></proteo-ui-link></div></div></div></div>')
}
]),
function() {
    "use strict";
    angular.module("App.rpPhoneAuthenticationInProgress").controller("rpPhoneAuthenticationInProgressController", ["$scope", "$log", "$state", "$stateParams", "rpPhoneAuthenticationInProgressServices", function(a, b, c, d, e) {
        function f() {
            d.validationCode ? (a.phoneNumber = d.phone.number,
            a.validationCode = d.validationCode) : c.go("phoneAuthenticationRequired")
        }
        function g() {
            f(),
            i(),
            JSM._dataLayerSPAReady()
        }
        function h() {
            setTimeout(function() {
                a.stopCalling = !1,
                a.$apply()
            }, 5e3)
        }
        function i() {
            switch (a.phoneType) {
            case 1:
                a.phoneText = "RETAIL_CREDENTIALS_PUBLIC_COMMON_MOBILE_COLON";
                break;
            default:
                a.phoneText = "RETAIL_CREDENTIALS_PUBLIC_COMMON_MOBILE_COLON"
            }
        }
        a.phoneType = 1,
        a.phoneText = null,
        a.stopCalling = !0,
        h(),
        a["continue"] = function() {
            var f = {
                phoneNumber: d.phone.number,
                phoneCallAuthCode: a.validationCode
            };
            e.checkResetPhoneCall(f).then(function() {
                c.go("resetPasswordSuccess", {
                    applicationType: d.applicationType
                })
            }, function(e) {
                var f = e.exception;
                switch (f.code) {
                case "1":
                    c.go("partialSuccess", {
                        code: null
                    });
                    break;
                case "1104":
                    c.go("partialSuccess", {
                        code: f.code
                    });
                    break;
                case "2":
                    c.go("phoneAuthenticationRequired", {
                        data: d.data,
                        applicationType: d.applicationType,
                        unsuccessful: !0
                    });
                    break;
                case "577":
                case "802":
                case "803":
                case "808":
                    c.go("rpPhoneAuthenticationFailed", {
                        code: f.code,
                        data: a.data,
                        applicationType: d.applicationType
                    });
                    break;
                default:
                    b.debug("No exception match", f.code)
                }
            })
        }
        ,
        g()
    }
    ])
}(),
function() {
    angular.module("App.rpPhoneAuthenticationInProgress").factory("rpPhoneAuthenticationInProgressServices", ["$q", "proteocanalinvokerServices", "CREDENTIALSPUBLIC_WEBADAPTER", function(a, b, c) {
        var d = {};
        return d.checkResetPhoneCall = function(d) {
            function e(a) {
                g.resolve(a)
            }
            function f(a) {
                g.reject(a)
            }
            var g = a.defer()
              , h = {};
            h.isMock = "true";
            var i = {
                "HEADER.SERVICE_SCOPE": "PUBLIC"
            };
            return angular.extend(h, d),
            b.invoke({
                service: c.checkResetPhoneCall,
                callback: e,
                fail: f,
                headers: i,
                data: h,
                idLoader: "loaderGOEShere",
                bigLoader: !0
            }),
            g.promise
        }
        ,
        d
    }
    ])
}(),
function() {
    "use strict";
    angular.module("App.rpPhoneAuthenticationInProgress").config(["$stateProvider", function(a) {
        a.state("rpPhoneAuthenticationInProgress", {
            url: "/rpPhoneAuthenticationInProgress",
            templateUrl: "/spasR46hfback/credentialsPublic/components/credentials-public/recover-user/rpPhoneAuthenticationInProgress/rp-phone-authentication-in-progress-tpl.html",
            controller: "rpPhoneAuthenticationInProgressController",
            params: {
                data: null,
                applicationType: null,
                validationCode: null,
                phone: null
            }
        })
    }
    ])
}(),
angular.module("App.rpPhoneAuthenticationInProgress.templates", ["/spasR46hfback/credentialsPublic/components/credentials-public/recover-user/rpPhoneAuthenticationInProgress/rp-phone-authentication-in-progress-tpl.html"]),
angular.module("/spasR46hfback/credentialsPublic/components/credentials-public/recover-user/rpPhoneAuthenticationInProgress/rp-phone-authentication-in-progress-tpl.html", []).run(["$templateCache", function(a) {
    "use strict";
    a.put("/spasR46hfback/credentialsPublic/components/credentials-public/recover-user/rpPhoneAuthenticationInProgress/rp-phone-authentication-in-progress-tpl.html", '<div class="wrap-phone-authentication row"><div class="col-xs-12"><h1 translate="RETAIL_CREDENTIALS_PUBLIC_REGISTRATION_PHONEAUTH_TITLE"></h1><proteo-ui-panel class="clearfix col-xs-12 text-center gray-panel md-margin-top lg-margin-bottom md-padding-top md-padding-bottom xs-padding-left xs-padding-right"><proteo-ui-text paragraph translate="RETAIL_CREDENTIALS_PUBLIC_REGISTRATION_PHONEAUTH_AUTHENTICATION_NUMBER"></proteo-ui-text><h2 class="highlight-text" translate="{{validationCode}}"></h2><proteo-ui-text id="label1" paragraph translate="RETAIL_CREDENTIALS_PUBLIC_REGISTRATION_PHONEAUTH_MSG1"></proteo-ui-text><proteo-ui-text paragraph translate="RETAIL_CREDENTIALS_PUBLIC_REGISTRATION_PHONEAUTH_MSG2"></proteo-ui-text></proteo-ui-panel><div class="row clearfix"><div class="col-xs-12"><div class="row"><div class="col-xs-12 col-md-3"><div class="wrap-invoker-loader big"><div class="loading-spinner big"><span class="icon-spinner"><span class="blockG" id="rotateG_1"></span> <span class="blockG" id="rotateG_2"></span> <span class="blockG" id="rotateG_3"></span> <span class="blockG" id="rotateG_4"></span> <span class="blockG" id="rotateG_5"></span> <span class="blockG" id="rotateG_6"></span> <span class="blockG" id="rotateG_7"></span> <span class="blockG" id="rotateG_8"></span> <span class="blockG" id="rotateG_9"></span> <span class="blockG" id="rotateG_10"></span> <span class="blockG" id="rotateG_11"></span> <span class="blockG" id="rotateG_12"></span></span></div></div></div><div class="col-xs-12 col-md-9 md-padding-left"><proteo-ui-text paragraph translate="RETAIL_CREDENTIALS_PUBLIC_REGISTRATION_PHONEAUTH_MSG3"></proteo-ui-text><proteo-ui-text paragraph translate="RETAIL_CREDENTIALS_PUBLIC_REGISTRATION_PHONEAUTH_MSG4"></proteo-ui-text><proteo-ui-text paragraph><proteo-ui-text translate="RETAIL_CREDENTIALS_PUBLIC_REGISTRATION_PHONEAUTH_MSG5"></proteo-ui-text><proteo-ui-text ng-if="phoneText" translate="{{phoneText}}"></proteo-ui-text><proteo-ui-text>{{phoneNumber}}</proteo-ui-text></proteo-ui-text><proteo-ui-text paragraph><proteo-ui-icon icon-bg="red" icon="error"></proteo-ui-icon><proteo-ui-text translate="RETAIL_CREDENTIALS_PUBLIC_REGISTRATION_PHONEAUTH_MSG6"></proteo-ui-text></proteo-ui-text></div></div></div></div><h2 translate="RETAIL_CREDENTIALS_PUBLIC_RECOVERUSER_PHONEAUTINPRG_COMPLETED_AUTHENTICATION_Q"></h2><proteo-ui-text paragraph="false" translate="RETAIL_CREDENTIALS_PUBLIC_RECOVERUSER_PHONEAUTINPRG_COMPLETED_AUTHENTICATION_TEXT"></proteo-ui-text><proteo-ui-thematic-break></proteo-ui-thematic-break><proteo-ui-button ng-disabled="stopCalling" class="pull-right" ng-click="continue()"><proteo-ui-text translate="RETAIL_CREDENTIALS_PUBLIC_COMMON_CONTINUE"></proteo-ui-text></proteo-ui-button></div></div>')
}
]),
angular.module("App.rpregistrationAlreadyReceived.templates", []),
function() {
    "use strict";
    function a(a, b, c, d, e, f, g) {
        var h = a("translate");
        c.isOtp = !1,
        c.step = null,
        c.paramsGetQA = {
            userId: e.getUserId(),
            oldRegistration: e.getOldRegistration()
        },
        c.leave = function() {
            g.newOperation(),
            c.closeModalError(),
            d.go("login")
        }
        ,
        c.tryAgainLogin = function(a) {
            c.closeModalError(),
            f.getUserQuestions(c.paramsGetQA).then(function(b) {
                e.setQuestionsData(b.questions),
                d.go("challengeQuestions", {
                    data: a
                })
            })["catch"](function(a) {
                g.newOperation();
                var c = {
                    template: "technicalError",
                    title: "COMMON_GLOBALERROR_TITLE",
                    backMessage: !1,
                    backLink: !1,
                    goBackState: "login",
                    linkState: "login",
                    technicalMessage: angular.isDefined(a.exception) && angular.isDefined(a.exception.description) ? a.exception.description : h("COMMON_MG_SYSTEM_ERROR"),
                    hideBackLinkButton: !1,
                    linkText: "COMMON_GLOBALERROR_LOG_BACK_ACCOUNTS"
                };
                d.go("globalErrorPage", c),
                b.sendError({
                    message: a.exception.description,
                    code: a.exception.code,
                    type: b.errorType.WARNING
                })
            })
        }
        ,
        c.$on("openModalPanel", function() {
            c.openModalError()
        }),
        c.closeModalError = function() {
            $("#addBlockModalError").off("hide.bs.modal"),
            $("#addBlockModalError").modal("hide")
        }
        ,
        c.closeModalDevice = function() {
            $("#addBlockModalDevice").off("hide.bs.modal"),
            $("#addBlockModalDevice").modal("hide")
        }
        ,
        c.openModalError = function() {
            $("#addBlockModalError").off("hide.bs.modal"),
            $("#addBlockModalError").modal("toggle")
        }
        ,
        c.openModalDevice = function() {
            $("#addBlockModalDevice").off("hide.bs.modal"),
            $("#addBlockModalDevice").modal("toggle")
        }
        ,
        c.openModalBrowser = function() {
            $("#addBlockModalBrowser").off("hide.bs.modal"),
            $("#addBlockModalBrowser").modal("toggle")
        }
        ,
        c.closeModalBrowser = function() {
            $("#addBlockModalBrowser").off("hide.bs.modal"),
            $("#addBlockModalBrowser").modal("hide")
        }
    }
    a.$inject = ["$filter", "DataLayerProvider", "$scope", "$state", "ConsultiveProvider", "enterCustomerIdDataService", "tsbJournalService"],
    angular.module("App.recoverUser").controller("scaModalsErrorController", a)
}(),
angular.module("App.sca-modals-error.templates", ["/spasR46hfback/credentialsPublic/components/credentials-public/recover-user/sca-modals-error/sca-modals-error-tpl.html"]),
angular.module("/spasR46hfback/credentialsPublic/components/credentials-public/recover-user/sca-modals-error/sca-modals-error-tpl.html", []).run(["$templateCache", function(a) {
    "use strict";
    a.put("/spasR46hfback/credentialsPublic/components/credentials-public/recover-user/sca-modals-error/sca-modals-error-tpl.html", '<proteo-ui-modal modal-id="modalTimeOut" modal-size="md" modal-type="primary" component="modalTimeOut"><proteo-ui-modal-header><div class="row"><div class="col-md-12 lg-padding-left"><proteo-ui-icon icon="error" class="md-margin-top float-icon"></proteo-ui-icon><h2 class="md-margin-top lg-margin-left" paragraph="true" translate="ERROR_TIMEOUT_TITLE"></h2></div></div><proteo-ui-modal-body class="proteo-select-account-body"><div class="row"><div class="col-md-12"><proteo-ui-text paragraph="true" translate="ERROR_TIMEOUT_DESCRIPTION"></proteo-ui-text></div></div></proteo-ui-modal-body><proteo-ui-modal-footer class="center-button"><proteo-ui-button ng-click="modalTimeOut.close()"><proteo-ui-text translate="ERROR_TIMEOUT_BUTTON"></proteo-ui-text></proteo-ui-button></proteo-ui-modal-footer></proteo-ui-modal-header></proteo-ui-modal><div ng-controller="scaModalsErrorController"><proteo-ui-modal modal-id="addBlockModalError" modal-size="md" modal-type="primary" data-backdrop="static" data-keyboard="false"><div class="row md-margin-top md-margin-left md-margin-right"><h2><proteo-ui-text class="text-bold" translate="RETAIL_CREDENTIALS_PUBLIC_LOGON_SCA_INVALID_AUTHENTICATION_MODAL_TITLE"></proteo-ui-text></h2></div><proteo-ui-modal-body class="md-margin-top md-margin-left md-margin-right"><div class="md-margin-bottom text-red text-bold" ng-show="errorRemainingAttempts !== null"><proteo-ui-text class="text-bold" ng-bind="errorRemainingAttempts"></proteo-ui-text></div><proteo-ui-text translate="RETAIL_CREDENTIALS_PUBLIC_LOGON_SCA_INVALID_AUTHENTICATION_MODAL_LOG_IN_TEXT1" ng-if="errorRemainingAttempts !== null"></proteo-ui-text><proteo-ui-text translate="RETAIL_CREDENTIALS_PUBLIC_LOGON_SCA_INVALID_AUTHENTICATION_MODAL_TEXT1" ng-if="errorRemainingAttempts === null"></proteo-ui-text><div class="md-margin-top md-margin-bottom"><ul class="unordered-list md-padding-left"><li class="list-element"><proteo-ui-text translate="RETAIL_CREDENTIALS_PUBLIC_LOGON_SCA_INVALID_AUTHENTICATION_MODAL_LOG_IN_TEXT2_RESET"></proteo-ui-text><li class="list-element"><proteo-ui-text translate="RETAIL_CREDENTIALS_PUBLIC_LOGON_SCA_INVALID_AUTHENTICATION_MODAL_LOG_IN_TEXT3_RESET"></proteo-ui-text></ul><div class="md-margin-top"><proteo-ui-text translate="RETAIL_CREDENTIALS_PUBLIC_LOGON_SCA_INVALID_AUTHENTICATION_MODAL_LOG_IN_TEXT7"></proteo-ui-text></div></div></proteo-ui-modal-body><proteo-ui-modal-footer class="md-margin-top md-margin-left md-margin-right"><proteo-ui-modal-call-back><div class="row center-block"><proteo-ui-button ng-click="tryAgainLogin(userData)" class="pull-right"><proteo-ui-text translate="RETAIL_CREDENTIALS_PUBLIC_LOGON_SCA_INVALID_AUTHENTICATION_MODAL_TRYAGAIN_RESET"></proteo-ui-text></proteo-ui-button><proteo-ui-button ng-click="leave()" class="pull-left btn-white"><proteo-ui-text translate="RETAIL_CREDENTIALS_PUBLIC_LOGON_SCA_INVALID_AUTHENTICATION_MODAL_LEAVE"></proteo-ui-text></proteo-ui-button></div></proteo-ui-modal-call-back></proteo-ui-modal-footer></proteo-ui-modal><proteo-ui-modal modal-id="addBlockModalBrowser" modal-size="md" modal-type="primary" data-backdrop="static" data-keyboard="false"><div class="row md-margin-top md-margin-left md-margin-right"><h2><proteo-ui-text class="text-bold" translate="RETAIL_CREDENTIALS_PUBLIC_LOGON_SCA_BROWSER_MODAL_TITLE"></proteo-ui-text></h2></div><proteo-ui-modal-body class="md-margin-top md-margin-left md-margin-right"><div class="md-margin-top"><proteo-ui-text translate="RETAIL_CREDENTIALS_PUBLIC_LOGON_SCA_BROWSER_MODAL_TEXT1"></proteo-ui-text></div><div class="md-margin-top md-margin-bottom"><proteo-ui-text translate="RETAIL_CREDENTIALS_PUBLIC_LOGON_SCA_BROWSER_MODAL_TEXT2"></proteo-ui-text></div></proteo-ui-modal-body><proteo-ui-modal-footer class="md-margin-top md-margin-left md-margin-right"><proteo-ui-modal-call-back><proteo-ui-button ng-click="agree()" class="center-block"><proteo-ui-text translate="RETAIL_CREDENTIALS_PUBLIC_LOGON_SCA_BROWSER_MODAL_CLOSE"></proteo-ui-text></proteo-ui-button></proteo-ui-modal-call-back></proteo-ui-modal-footer></proteo-ui-modal></div>')
}
]),
angular.module("App.recoverUser.templates", []),
function() {
    "use strict";
    angular.module("App.userWithNoPhones").controller("userWithNoPhonesController", ["$scope", "$state", "$log", "userWithNoPhonesFunctions", function(a, b, c, d) {
        a.goBackBank = function() {
            d.goToBankURL()
        }
    }
    ])
}(),
function() {
    "use strict";
    angular.module("App.userWithNoPhones").factory("userWithNoPhonesFunctions", ["$location", "ENVIRONMENT_URL", function(a, b) {
        var c = {};
        return c.goToBankURL = function() {
            var c = null;
            switch (a.host()) {
            case "dev.online-business.intranet.uk.tsb":
            case "dev.uk.tsb":
                c = b.dev;
                break;
            case "int.uk.tsb":
                c = b["int"];
                break;
            case "acc.uk.tsb":
                c = b.acc;
                break;
            default:
                c = b["default"]
            }
            window.open(c)
        }
        ,
        c
    }
    ])
}(),
function() {
    "use strict";
    angular.module("App.userWithNoPhones").config(["$stateProvider", function(a) {
        a.state("userWithNoPhones", {
            url: "/userWithNoPhones",
            templateUrl: "/spasR46hfback/credentialsPublic/components/credentials-public/recover-user/userWithNoPhones/user-with-no-phones-tpl.html",
            controller: "userWithNoPhonesController"
        })
    }
    ])
}(),
function() {
    "use strict";
    angular.module("App.applicationExist").controller("applicationExistController", function() {
        JSM._dataLayerSPAReady()
    })
}(),
function() {
    "use strict";
    angular.module("App.applicationExist").config(["$stateProvider", function(a) {
        a.state("applicationExist", {
            url: "/applicationExist",
            templateUrl: "/spasR46hfback/credentialsPublic/components/credentials-public/registration/application-exist/application-exist-tpl.html",
            controller: "applicationExistController"
        })
    }
    ])
}(),
angular.module("App.applicationExist.templates", ["/spasR46hfback/credentialsPublic/components/credentials-public/registration/application-exist/application-exist-tpl.html"]),
angular.module("/spasR46hfback/credentialsPublic/components/credentials-public/registration/application-exist/application-exist-tpl.html", []).run(["$templateCache", function(a) {
    "use strict";
    a.put("/spasR46hfback/credentialsPublic/components/credentials-public/registration/application-exist/application-exist-tpl.html", '<div class="row"><div class="col-xs-12"><h1 translate="RETAIL_CREDENTIALS_PUBLIC_REGISTRATION_APPEXIST_TITLE"></h1><proteo-ui-text class="text-bold" paragraph translate="RETAIL_CREDENTIALS_PUBLIC_REGISTRATION_APPEXIST_MSG1"></proteo-ui-text><proteo-ui-text paragraph data-ng-bind-html="\'RETAIL_CREDENTIALS_PUBLIC_REGISTRATION_APPEXIST_MSG2\' | translate"></proteo-ui-text><proteo-ui-thematic-break></proteo-ui-thematic-break><div class="row md-margin-top"><div class="col-xs-12"><proteo-ui-link class="btn md-btn pull-right" ng-disabled="true"><proteo-ui-text translate="RETAIL_CREDENTIALS_PUBLIC_COMMON_BACK_TO_HOME"></proteo-ui-text></proteo-ui-link></div></div></div></div>')
}
]),
function() {
    "use strict";
    angular.module("App.helpdeskAuthorisation").controller("helpdeskAuthorisationController", ["$scope", function(a) {
        a.quoteReference = "testing",
        JSM._dataLayerSPAReady()
    }
    ])
}(),
function() {
    "use strict";
    angular.module("App.helpdeskAuthorisation").config(["$stateProvider", function(a) {
        a.state("helpdeskAuthorisation", {
            url: "/helpdeskAuthorisation",
            templateUrl: "/spasR46hfback/credentialsPublic/components/credentials-public/registration/helpdesk-authorisation/helpdesk-authorisation-tpl.html",
            controller: "helpdeskAuthorisationController"
        })
    }
    ])
}(),
angular.module("App.helpdeskAuthorisation.templates", ["/spasR46hfback/credentialsPublic/components/credentials-public/registration/helpdesk-authorisation/helpdesk-authorisation-tpl.html"]),
angular.module("/spasR46hfback/credentialsPublic/components/credentials-public/registration/helpdesk-authorisation/helpdesk-authorisation-tpl.html", []).run(["$templateCache", function(a) {
    "use strict";
    a.put("/spasR46hfback/credentialsPublic/components/credentials-public/registration/helpdesk-authorisation/helpdesk-authorisation-tpl.html", '<div class="row"><div class="col-xs-12"><h1 translate="RETAIL_CREDENTIALS_PUBLIC_REGISTRATION_HELPDESK_TITLE"></h1><proteo-ui-text class="text-bold" paragraph translate="RETAIL_CREDENTIALS_PUBLIC_REGISTRATION_HELPDESK_MSG1"></proteo-ui-text><proteo-ui-text paragraph data-ng-bind-html="\'RETAIL_CREDENTIALS_PUBLIC_REGISTRATION_HELPDESK_MSG2\' | translate"></proteo-ui-text><proteo-ui-text paragraph><proteo-ui-text translate="RETAIL_CREDENTIALS_PUBLIC_REGISTRATION_HELPDESK_QUOTE_REF_COLON"></proteo-ui-text><proteo-ui-text class="text-bold">{{quoteReference}}</proteo-ui-text></proteo-ui-text><proteo-ui-thematic-break></proteo-ui-thematic-break><div class="row md-margin-top"><div class="col-xs-12 col-sm-6"><proteo-ui-link><proteo-ui-icon icon="print" class="sm-margin-right"></proteo-ui-icon><proteo-ui-text translate="RETAIL_CREDENTIALS_PUBLIC_COMMON_PRINT_PAGE"></proteo-ui-text></proteo-ui-link></div><div class="col-xs-12 col-sm-6"><proteo-ui-link class="btn md-btn pull-right" ng-disabled="true"><proteo-ui-text translate="RETAIL_CREDENTIALS_PUBLIC_COMMON_BACK_TO_HOME"></proteo-ui-text></proteo-ui-link></div></div></div></div>')
}
]),
function() {
    "use strict";
    angular.module("App.phoneAuthenticationFailed").controller("phoneAuthenticationFailedController", function() {
        JSM._dataLayerSPAReady()
    })
}(),
function() {
    "use strict";
    angular.module("App.phoneAuthenticationFailed").config(["$stateProvider", function(a) {
        a.state("phoneAuthenticationFailed", {
            url: "/phoneAuthenticationFailed",
            templateUrl: "/spasR46hfback/credentialsPublic/components/credentials-public/registration/phone-authentication-failed/phone-authentication-failed-tpl.html",
            controller: "phoneAuthenticationFailedController"
        })
    }
    ])
}(),
angular.module("App.phoneAuthenticationFailed.templates", ["/spasR46hfback/credentialsPublic/components/credentials-public/registration/phone-authentication-failed/phone-authentication-failed-tpl.html"]),
angular.module("/spasR46hfback/credentialsPublic/components/credentials-public/registration/phone-authentication-failed/phone-authentication-failed-tpl.html", []).run(["$templateCache", function(a) {
    "use strict";
    a.put("/spasR46hfback/credentialsPublic/components/credentials-public/registration/phone-authentication-failed/phone-authentication-failed-tpl.html", '<div class="wrap-phone-authentication row"><div class="col-xs-12"><h1 translate="RETAIL_CREDENTIALS_PUBLIC_REGISTRATION_PHONEAUTHFAIL_TITLE"></h1><h2 translate="RETAIL_CREDENTIALS_PUBLIC_REGISTRATION_PHONEAUTHFAIL_SUBTITLE1"></h2><proteo-ui-text paragraph translate="RETAIL_CREDENTIALS_PUBLIC_REGISTRATION_PHONEAUTHFAIL_MSG1"></proteo-ui-text><h2 translate="RETAIL_CREDENTIALS_PUBLIC_REGISTRATION_PHONEAUTHFAIL_SUBTITLE2"></h2><proteo-ui-text paragraph translate="RETAIL_CREDENTIALS_PUBLIC_REGISTRATION_PHONEAUTHFAIL_MSG2"></proteo-ui-text><proteo-ui-text paragraph translate="RETAIL_CREDENTIALS_PUBLIC_REGISTRATION_PHONEAUTHFAIL_MSG3"></proteo-ui-text><div class="row md-margin-top"><div class="col-xs-12"><proteo-ui-link class="btn md-btn pull-right" ng-disabled="true"><proteo-ui-text translate="RETAIL_CREDENTIALS_PUBLIC_COMMON_BACK_TO_HOME"></proteo-ui-text></proteo-ui-link></div></div></div></div>')
}
]),
function() {
    "use strict";
    angular.module("App.phoneAuthentication").controller("phoneAuthenticationController", ["$log", "$scope", "$state", "wizardStatesEvent", "registrationService", "phoneAuthenticationService", "CREDENTIALSPUBLIC_WEBADAPTER", function(a, b, c, d, e, f, g) {
        function h() {
            i(),
            j(),
            k()
        }
        function i() {
            var a = d.getData("wizardStatesOut");
            a && (b.model = angular.copy(a.data),
            j(b.model.phoneSelected.id))
        }
        function j(a) {
            switch (a) {
            case "homePhoneNumber":
                b.phoneText = "RETAIL_CREDENTIALS_PUBLIC_COMMON_HOME_COLON";
                break;
            case "mobilePhoneNumber":
                b.phoneText = "RETAIL_CREDENTIALS_PUBLIC_COMMON_MOBILE_COLON";
                break;
            case "workPhoneNumber":
                b.phoneText = "RETAIL_CREDENTIALS_PUBLIC_COMMON_WORK_COLON";
                break;
            default:
                b.phoneText = "RETAIL_CREDENTIALS_PUBLIC_COMMON_MOBILE_COLON"
            }
        }
        function k() {
            if (b.model) {
                var c = {
                    phoneNumber: b.model.phoneSelected.number
                };
                e.registration(g.setResetPhoneCall, c).then(function(a) {
                    b.contentInfo.ready = !0,
                    b.contentInfo.error = !1,
                    b.validationCode = a.validationCode,
                    l()
                }, function() {
                    b.contentInfo.ready = !0,
                    b.contentInfo.error = !0,
                    l()
                })
            } else
                b.contentInfo.ready = !0,
                b.contentInfo.error = !0,
                a.debug("No params into phone-authentication"),
                l()
        }
        function l() {
            JSM._dataLayerSPAReady()
        }
        b.phoneText = null,
        b.model = null,
        b.validationCode = null,
        b.contentInfo = {
            error: !1,
            ready: !1
        },
        b.test = function() {
            c.go("registration", !0)
        }
        ,
        b["continue"] = function() {
            var a = {
                phoneNumber: "936543219",
                phoneCallAuthCode: "1234"
            };
            f.checkResetPhoneCall(a).then(function() {
                c.go("registration", !0)
            }, function() {
                c.go("phoneAuthenticationFailed")
            })
        }
        ,
        h()
    }
    ])
}(),
function() {
    "use strict";
    angular.module("App.phoneAuthentication").factory("phoneAuthenticationService", ["$q", "proteocanalinvokerServices", "CREDENTIALSPUBLIC_WEBADAPTER", function(a, b, c) {
        var d = {};
        return d.checkResetPhoneCall = function(d) {
            function e(a) {
                g.reject(a)
            }
            function f(a) {
                g.resolve(a)
            }
            var g = a.defer()
              , h = {
                "HEADER.SERVICE_SCOPE": "PUBLIC"
            }
              , i = {};
            return i.isMock = "true",
            angular.extend(i, d),
            b.invoke({
                service: c.checkResetPhoneCall,
                callback: f,
                fail: e,
                headers: h,
                data: i,
                idLoader: "loaderGOEShere",
                bigLoader: !0
            }),
            g.promise
        }
        ,
        d
    }
    ])
}(),
function() {
    "use strict";
    angular.module("App.phoneAuthentication").config(["$stateProvider", function(a) {
        a.state("phoneAuthentication", {
            url: "/phoneAuthentication",
            templateUrl: "/spasR46hfback/credentialsPublic/components/credentials-public/registration/phone-authentication/phone-authentication-tpl.html",
            controller: "phoneAuthenticationController"
        })
    }
    ])
}(),
angular.module("App.phoneAuthentication.templates", ["/spasR46hfback/credentialsPublic/components/credentials-public/registration/phone-authentication/phone-authentication-tpl.html"]),
angular.module("/spasR46hfback/credentialsPublic/components/credentials-public/registration/phone-authentication/phone-authentication-tpl.html", []).run(["$templateCache", function(a) {
    "use strict";
    a.put("/spasR46hfback/credentialsPublic/components/credentials-public/registration/phone-authentication/phone-authentication-tpl.html", '<div class="wrap-phone-authentication row"><div class="col-xs-12 md-margin-top md-margin-bottom md-padding error" ng-if="contentInfo.error && contentInfo.ready"><div class="icon"><proteo-ui-icon icon-bg="red" icon="error"></proteo-ui-icon></div><div class="error-text"><proteo-ui-text translate="COMMON_GLOBALERROR_TEXT"></proteo-ui-text></div></div><div class="col-xs-12" ng-if="!contentInfo.error && contentInfo.ready"><h1 translate="RETAIL_CREDENTIALS_PUBLIC_REGISTRATION_PHONEAUTH_TITLE"></h1><proteo-ui-panel class="clearfix col-xs-12 text-center gray-panel md-margin-top lg-margin-bottom md-padding-top md-padding-bottom xs-padding-left xs-padding-right"><proteo-ui-text paragraph translate="RETAIL_CREDENTIALS_PUBLIC_REGISTRATION_PHONEAUTH_AUTHENTICATION_NUMBER"></proteo-ui-text><h2 class="highlight-text" ng-if="validationCode">{{validationCode}}</h2><proteo-ui-text paragraph translate="RETAIL_CREDENTIALS_PUBLIC_REGISTRATION_PHONEAUTH_MSG1"></proteo-ui-text><proteo-ui-text paragraph translate="RETAIL_CREDENTIALS_PUBLIC_REGISTRATION_PHONEAUTH_MSG2"></proteo-ui-text></proteo-ui-panel><div class="row clearfix"><div class="col-xs-12"><div class="row"><div class="col-xs-12 col-md-3"><div class="wrap-invoker-loader big"><div class="loading-spinner big"><span class="icon-spinner"><span class="blockG" id="rotateG_1"></span> <span class="blockG" id="rotateG_2"></span> <span class="blockG" id="rotateG_3"></span> <span class="blockG" id="rotateG_4"></span> <span class="blockG" id="rotateG_5"></span> <span class="blockG" id="rotateG_6"></span> <span class="blockG" id="rotateG_7"></span> <span class="blockG" id="rotateG_8"></span> <span class="blockG" id="rotateG_9"></span> <span class="blockG" id="rotateG_10"></span> <span class="blockG" id="rotateG_11"></span> <span class="blockG" id="rotateG_12"></span></span></div></div></div><div class="col-xs-12 col-md-9 md-padding-left"><proteo-ui-text paragraph translate="RETAIL_CREDENTIALS_PUBLIC_REGISTRATION_PHONEAUTH_MSG3"></proteo-ui-text><proteo-ui-text paragraph translate="RETAIL_CREDENTIALS_PUBLIC_REGISTRATION_PHONEAUTH_MSG4"></proteo-ui-text><proteo-ui-text paragraph><proteo-ui-text translate="RETAIL_CREDENTIALS_PUBLIC_REGISTRATION_PHONEAUTH_MSG5"></proteo-ui-text><proteo-ui-text ng-if="phoneText" translate="{{phoneText}}"></proteo-ui-text><proteo-ui-text>{{model.phoneSelected.number}}</proteo-ui-text></proteo-ui-text><proteo-ui-text paragraph><proteo-ui-icon icon-bg="red" icon="error"></proteo-ui-icon><proteo-ui-text translate="RETAIL_CREDENTIALS_PUBLIC_REGISTRATION_PHONEAUTH_MSG6"></proteo-ui-text></proteo-ui-text></div></div></div></div><h2 translate="RETAIL_CREDENTIALS_PUBLIC_RECOVERUSER_PHONEAUTINPRG_COMPLETED_AUTHENTICATION_Q"></h2><proteo-ui-text paragraph="false" translate="RETAIL_CREDENTIALS_PUBLIC_RECOVERUSER_PHONEAUTINPRG_COMPLETED_AUTHENTICATION_TEXT"></proteo-ui-text><proteo-ui-thematic-break></proteo-ui-thematic-break><proteo-ui-button class="pull-right" ng-click="continue()" ng-disabled="stopCalling"><proteo-ui-text translate="RETAIL_CREDENTIALS_PUBLIC_COMMON_CONTINUE"></proteo-ui-text></proteo-ui-button></div></div>')
}
]),
function() {
    "use strict";
    angular.module("App.registrationAlreadyReceived").controller("registrationAlreadyReceivedController", function() {
        JSM._dataLayerSPAReady()
    })
}(),
function() {
    "use strict";
    angular.module("App.registrationAlreadyReceived").config(["$stateProvider", function(a) {
        a.state("registrationAlreadyReceived", {
            url: "/registrationAlreadyReceived",
            templateUrl: "/spasR46hfback/credentialsPublic/components/credentials-public/registration/registration-already-received/registration-already-received-tpl.html",
            controller: "registrationAlreadyReceivedController"
        })
    }
    ])
}(),
angular.module("App.registrationAlreadyReceived.templates", ["/spasR46hfback/credentialsPublic/components/credentials-public/registration/registration-already-received/registration-already-received-tpl.html"]),
angular.module("/spasR46hfback/credentialsPublic/components/credentials-public/registration/registration-already-received/registration-already-received-tpl.html", []).run(["$templateCache", function(a) {
    "use strict";
    a.put("/spasR46hfback/credentialsPublic/components/credentials-public/registration/registration-already-received/registration-already-received-tpl.html", '<div class="row"><div class="col-xs-12"><h1 translate="RETAIL_CREDENTIALS_PUBLIC_REGISTRATION_REGISTRATIONALREADYRECEIVED_TITLE"></h1></div><div class="col-xs-12 md-margin-top"><proteo-ui-text paragraph translate="RETAIL_CREDENTIALS_PUBLIC_REGISTRATION_REGISTRATIONALREADYRECEIVED_TEXT"></proteo-ui-text></div><div class="col-xs-12"><proteo-ui-text translate="RETAIL_CREDENTIALS_PUBLIC_REGISTRATION_REGISTRATIONALREADYRECEIVED_CALL_US"></proteo-ui-text><proteo-ui-text class="sm-margin-left" translate="RETAIL_CREDENTIALS_PUBLIC_REGISTRATION_REGISTRATIONALREADYRECEIVED_CALL_US2"></proteo-ui-text></div><proteo-ui-thematic-break></proteo-ui-thematic-break><div class="col-xs-12 sm-margin-top"><proteo-ui-link class="btn md-btn pull-right" url="http://www.tsb.co.uk"><proteo-ui-text translate="RETAIL_CREDENTIALS_PUBLIC_REGISTRATION_REGISTRATIONALREADYRECEIVED_RETURNBANKPAGE"></proteo-ui-text></proteo-ui-link></div></div>')
}
]),
function() {
    "use strict";
    angular.module("App.login").factory("registrationService", ["$log", "$q", "proteocanalinvokerServices", "CREDENTIALSPUBLIC_WEBADAPTER", function(a, b, c, d) {
        var e = {};
        return e.registration = function(d, e, f, g) {
            function h(a) {
                j.resolve(a)
            }
            function i(a) {
                j.reject(a)
            }
            var j = b.defer()
              , k = {};
            k.isMock = "false",
            k = angular.extend(k, e);
            var l = {
                "HEADER.SERVICE_SCOPE": "PUBLIC",
                "HEADER.operationID": g || null
            };
            c.error(function(b) {
                a.debug("Exception in registrationService call registrarion ->", d, b),
                j.reject(b)
            });
            var m = {
                service: d,
                callback: h,
                fail: i,
                headers: l,
                data: k
            };
            return f && angular.extend(m, {
                idLoader: f
            }),
            c.invoke(m),
            j.promise
        }
        ,
        e.deRegistration = function(a) {
            function e(a) {
                g.resolve(a)
            }
            function f(a) {
                g.reject(a)
            }
            var g = b.defer()
              , h = {
                "HEADER.SERVICE_SCOPE": "PUBLIC"
            };
            return c.invoke({
                service: d.deRegistration,
                callback: e,
                fail: f,
                headers: h,
                data: a,
                idLoader: "deRegistration",
                bigLoader: !0
            }),
            g.promise
        }
        ,
        e
    }
    ])
}(),
function() {
    "use strict";
    angular.module("App.registration").controller("registrationStepsController", ["$log", "$scope", "$http", "genericFunctions", "Consultive", function(a, b, c, d, e) {
        function f() {
            g()
        }
        function g() {
            c.get("/spasR46hfback/credentialsPublic/resources/static-data/9e207c7d.registration-steps.json").success(function(a) {
                b.wizardData = a
            }).error(function(b) {
                a.error("Error loading the wizard Json", b)
            })
        }
        b.wizardType = "arrow-step",
        b.backToHome = function() {
            d.goToInternalURL("", "_self")
        }
        ,
        f()
    }
    ])
}(),
function() {
    "use strict";
    var a = angular.module("App.registration");
    a.config(["$stateProvider", "statesGeneratorProvider", function(a, b) {
        a.state("registration", {
            url: "/registration",
            templateUrl: "/spasR46hfback/credentialsPublic/components/credentials-public/registration/registration-steps/registration-steps-tpl.html",
            controller: "registrationStepsController",
            params: {
                userId: null
            },
            resolve: {
                Consultive: ["ConsultiveProvider", function(a) {
                    return a.validateOperation("registration")
                }
                ]
            }
        }),
        b.setJsonUrl("/spasR46hfback/credentialsPublic/resources/static-data/9e207c7d.registration-steps.json", "registration")
    }
    ]),
    a.run(["statesGenerator", function(a) {
        a.setUpStatesFromJson("registration", "/spasR46hfback/credentialsPublic/components/credentials-public/registration/registration-steps/steps")
    }
    ])
}(),
function() {
    "use strict";
    angular.module("App.registration").controller("step1HelpUsToIdentifyController", ["$log", "$scope", "$state", "$stateParams", "$timeout", "$filter", "$location", "registrationService", "CREDENTIALSPUBLIC_WEBADAPTER", "wizardStatesEvent", "$document", "genericFunctions", "ENVIRONMENT_URL", function(a, b, c, d, e, f, g, h, i, j, k, l, m) {
        function n() {
            b.userId && r(),
            q(),
            JSM._dataLayerSPAReady()
        }
        function o() {
            b.model.userDetails.ukPostcode = b.model.userDetails.notLiveInUK ? null : b.model.userDetails.ukPostcode;
            var a = {
                userDetails: angular.copy(b.model.userDetails),
                accountDetails: angular.copy(b.model.accountDetails)
            };
            a.userDetails.dateOfBirth = f("date")(a.userDetails.dateOfBirth, "yyyy-MM-dd"),
            h.registration(i.setRegistrationCustomerDetails, a, "registrationStep1LoaderId").then(function(a) {
                a.successful && !angular.isDefined(a.userName) ? (b.serviceError = !1,
                b.model.codeCustomer = angular.isDefined(a.codeCustomer) ? a.codeCustomer : null,
                b.model.blockRegister = angular.isDefined(a.blockRegister) ? a.blockRegister : !1,
                j.setData("wizardStatesNextStep", b.model)) : angular.isDefined(a.userName) ? p(t("COMMON_ERROR_ALREADY_HAS_VIRTUAL_CONTRACT")) : b.serviceError = !0,
                b.loading = !1
            }, function(a) {
                angular.isDefined(a) && angular.isDefined(a.exception) && "ERR152" === a.exception.code && (b.existingUser = !0),
                b.serviceError = !0,
                b.loading = !1,
                a && a.exception && s(a.exception),
                window.scroll(0, 0)
            })
        }
        function p(a) {
            var b = {
                template: "technicalError",
                title: "COMMON_GLOBALERROR_TITLE",
                backMessage: !1,
                backLink: !1,
                linkState: "login",
                technicalMessage: a,
                goBackState: "login",
                hideBackLinkButton: !1,
                linkText: "COMMON_GLOBALERROR_LOG_BACK_ACCOUNTS"
            };
            c.go("globalErrorPage", b)
        }
        function q() {
            j.getData("wizardStatesPreviousStep") ? (b.model = angular.copy(j.getData("wizardStatesPreviousStep")),
            j.removeData()) : b.model = angular.copy(v)
        }
        function r() {
            var a = {
                userId: b.userId
            };
            h.deRegistration(a)["catch"](function(a) {
                angular.isDefined(a.exception) && angular.isDefined(a.exception.description) && (b.globalErrorTxt = a.exception.description,
                b.serviceError = !0)
            })
        }
        function s(c) {
            var d = angular.isDefined(c[0]) ? c[0] : c;
            if (d.description && JSM._updateDataLayer({
                application_name: "Registration",
                application_step: "Error message",
                page_id: "registration/step1-help-us-to-identify-tpl",
                error_message: d.description
            }),
            d.code)
                switch (d.code) {
                case "1100021":
                case "293":
                    b.existingUser = !0;
                    break;
                default:
                    a.error("An error appears trying to check the correct step in step1-helpus, code", d.code),
                    b.globalErrorTxt = d.description,
                    e(function() {}, 5e3)
                }
        }
        var t = f("translate")
          , u = new Date
          , v = {
            userDetails: {
                title: null,
                firstName: null,
                lastName: null,
                dateOfBirth: null,
                notLiveInUK: !1
            },
            accountDetails: {
                accountType: "1",
                sortCode: null,
                accountNumber: null
            },
            loginDetails: {
                username: null,
                password: null,
                retypePassword: null,
                email: null,
                retypeEmail: null
            },
            acceptTermsAndConditions: !1,
            receiveMarketingEmails: !1
        }
          , w = "(WC2A)|(SA99)|(GIR 0AA)|([A-Z]{1,2}[0-9][0-9A-Z]?\\s?[0-9][A-Z]{2})";
        b.userId = angular.isDefined(d.userId) ? d.userId : null,
        b.postCodeRegex = new RegExp(w,"gi"),
        b.serviceError = !1,
        b.existingUser = !1,
        b.model = null,
        b.maxDate = new Date(u.getFullYear() - 10,u.getMonth(),u.getDate()),
        b.minDate = new Date(u.getFullYear() - 101,0,1),
        b.accountTypeSelect = [{
            id: 1,
            name: "RETAIL_CREDENTIALS_PUBLIC_COMMON_ACCOUNTTYPE_CURRENT"
        }, {
            id: 2,
            name: "RETAIL_CREDENTIALS_PUBLIC_COMMON_ACCOUNTTYPE_CREDITCARD"
        }, {
            id: 3,
            name: "RETAIL_CREDENTIALS_PUBLIC_COMMON_ACCOUNTTYPE_LOAN"
        }, {
            id: 4,
            name: "RETAIL_CREDENTIALS_PUBLIC_COMMON_ACCOUNTTYPE_MORTGAGE"
        }],
        b.submit = function(a) {
            null != b.model.accountDetails.sortCode && b.registrationIdentityForm.credRegSortCodeIdForm.$error.pattern && JSM._updateDataLayer({
                application_name: "Registration",
                application_step: "SortCode Error message",
                page_id: "registration/step1-help-us-to-identify-tpl",
                error_message: t("RETAIL_CREDENTIALS_PUBLIC_COMMON_ERROR_FORMAT")
            }),
            null != b.model.accountDetails.sortCode && b.registrationIdentityForm.number1.$error.pattern && JSM._updateDataLayer({
                application_name: "Registration",
                application_step: "Account Number Error message",
                page_id: "registration/step1-help-us-to-identify-tpl",
                error_message: t("RETAIL_CREDENTIALS_PUBLIC_COMMON_ERROR_NUMBER")
            }),
            a.$valid && (b.loading = !0,
            b.model.exceptionCode && delete b.model.exceptionCode,
            "1" !== b.model.accountDetails.accountType && delete b.model.accountDetails.sortCode,
            o())
        }
        ,
        b.bizRegister = m["default"] + "/business/useful-information/internet-banking/",
        b.isDatePickerTouched = function(a) {
            return a.selectedDay.$touched && a.selectedMonth.$touched && a.selectedYear.$touched
        }
        ,
        b.resetForm = function(a, c) {
            a.$setUntouched(),
            a.$setPristine(),
            b.model.accountDetails.accountNumber = null,
            b.controlLimitAgeForProduct(b.model.userDetails.dateOfBirth, b.model.accountDetails.accountType);
            var d = t(b.accountTypeSelect[c - 1].name);
            JSM._updateDataLayer({
                event_name: "drop down menu; " + k[0].title,
                event_action: d,
                event_label: "Select account type"
            })
        }
        ,
        b.deleteZeroLeft = function() {
            angular.isDefined(b.model.accountDetails.accountNumber) && (b.model.accountDetails.accountNumber = b.model.accountDetails.accountNumber.replace(/^0+/, "")),
            JSM._updateDataLayer({
                event_name: "event_name",
                error_message: "errMsg"
            })
        }
        ,
        b.controlLimitAgeForProduct = function(a, c) {
            var d, e;
            switch (c) {
            case "1":
                d = 11,
                e = !1;
                break;
            case "2":
            case "3":
            case "4":
                e = !0,
                d = 18;
                break;
            default:
                e = !1
            }
            var f = new Date(u.getFullYear() - d,u.getMonth(),u.getDate());
            angular.isDate(a) && e ? b.registrationIdentityForm.$setValidity("limitAgeForProduct", f >= a) : b.registrationIdentityForm.$setValidity("limitAgeForProduct", !0)
        }
        ,
        b.goToInternalURL = function() {
            l.goToInternalURL("/business/accounts", "_self", "", !1, "public")
        }
        ,
        n()
    }
    ])
}(),
function() {
    "use strict";
    angular.module("App.registration").controller("step2LoginDetailsController", ["$log", "profilingProvider", "$scope", "$state", "wizardStatesEvent", "registrationService", "CREDENTIALSPUBLIC_WEBADAPTER", "genericFunctions", "$filter", function(a, b, c, d, e, f, g, h, i) {
        function j() {
            m(),
            b.profilingParameters("registration"),
            JSM._dataLayerSPAReady()
        }
        function k(a) {
            return "true" === a ? !0 : !1
        }
        function l() {
            e.setData("wizardStatesNextStep", c.model)
        }
        function m() {
            e.getData("wizardStatesPreviousStep"),
            e.getData("wizardStatesPreviousStep") ? (c.model = angular.copy(e.getData("wizardStatesPreviousStep")),
            e.removeData("wizardStatesPreviousStep")) : e.getData("wizardStatesNextStep") ? c.model = angular.copy(e.getData("wizardStatesNextStep")) : c.previousStep()
        }
        function n(a) {
            null !== c.model.loginDetails.retypePassword && a.$setValidity("passwordNotEqual", angular.equals(c.model.loginDetails.password, c.model.loginDetails.retypePassword))
        }
        function o(a) {
            null !== a.retypeEmail && a.retypeEmail.$setValidity("emailNotEqual", angular.equals(a.email.$viewValue, a.retypeEmail.$viewValue))
        }
        var p = i("translate");
        c.model = null,
        c.isOpen = [!1, !1],
        c.loading = !1,
        c.showSuggestions = !1,
        c.failedUsername = null,
        c.nameSuggestions = null;
        c.downloadPDF = function() {
            h.goToInternalURL("/internet-banking-terms-and-conditions.pdf", "internet-banking-terms-and-conditions.pdf", "", !1, "public")
        }
        ,
        c.getHtmlLiteral = function(a, b) {
            return p(a, b)
        }
        ,
        c.previousStep = function() {
            e.setData("wizardStatesPreviousStep", c.model)
        }
        ,
        c.passwordValidation = function(a) {
            n(a.password),
            n(a.retypePassword)
        }
        ,
        c.emailValidation = function(a) {
            o(a),
            o(a)
        }
        ,
        c.checkUserId = function(a) {
            if (c.model.loginDetails.username) {
                c.loading = !0;
                var b = {
                    userId: c.model.loginDetails.username
                };
                f.registration(g.checkUserId, b, "registrationStep2LoaderId").then(function(b) {
                    c.showSuggestionsError = !1,
                    !b.available && b.suggestedUserIdList ? (c.showSuggestions = !0,
                    c.nameSuggestions = b.suggestedUserIdList) : c.showSuggestions = !1,
                    a.$setValidity("userIdAlreadyUser", b.available),
                    c.loading = !1
                }, function() {
                    c.showSuggestionsError = !0,
                    c.failedUsername = angular.copy(c.model.loginDetails.username),
                    c.loading = !1
                })
            }
        }
        ,
        c.submit = function(b) {
            n(b.retypePassword),
            n(b.password),
            o(b),
            o(b),
            b.$valid ? (c.formServiceError = !1,
            c.model.receiveMarketingPhones = k(c.model.receiveMarketingPhones),
            c.model.receiveMarketingPosts = k(c.model.receiveMarketingPosts),
            c.model.receiveMarketingEmails = k(c.model.receiveMarketingEmails),
            c.model.receiveMarketingTextMsg = k(c.model.receiveMarketingTextMsg),
            l()) : (a.debug("Error in form..."),
            c.formServiceError = !0)
        }
        ,
        c.setUsername = function(a, b) {
            c.model.loginDetails.username = a,
            c.checkUserId(b)
        }
        ,
        j()
    }
    ])
}(),
function() {
    "use strict";
    angular.module("App.registration").controller("step3SecurityCntrl", ["$scope", "wizardStatesEvent", "$filter", "consultiveFactory", "registrationService", "CREDENTIALSPUBLIC_WEBADAPTER", "ConsultiveProvider", function(a, b, c, d, e, f, g) {
        function h() {
            j(),
            JSM._dataLayerSPAReady()
        }
        function i(g) {
            a.continueButton = !0,
            angular.isDefined(a.model.blockRegister) && delete a.model.blockRegister,
            a.model.username && (a.model.loginDetails.username = a.model.username,
            a.model.loginDetails.password = "mockpass123");
            var h = angular.copy(a.model);
            h.isValidOtp = !g;
            var i = d.getOperationID();
            h.userDetails.dateOfBirth = c("date")(h.userDetails.dateOfBirth, "yyyy-MM-dd"),
            e.registration(f.setRegistrationLoginDetails, h, "registrationStep2LoaderId", i).then(function(c) {
                angular.isDefined(c.codeContract) ? (b.setData("wizardStatesNextStep", a.model),
                a.globalError = !1) : (a.errorMessage = k("COMMON_GLOBALERROR_TEXT"),
                a.globalError = !0,
                a.continueButton = !1)
            }, function(b) {
                "ERR156" === b.exception.code ? (a.errorMessage = k("RETAIL_CREDENTIALS_PUBLIC_REGISTRATION_ERROR_NO_PHONES_RETRIEVED"),
                a.globalError = !0,
                a.continueButton = !1) : "FR030" === b.exception.code ? JSM.routing("credentialsPublic", "login", {
                    blockUser: !0
                }) : (a.errorMessage = k("COMMON_GLOBALERROR_TEXT"),
                a.globalError = !0,
                a.continueButton = !1)
            })
        }
        function j() {
            b.getData("wizardStatesPreviousStep") ? (a.model = angular.copy(b.getData("wizardStatesPreviousStep")),
            b.removeData("wizardStatesPreviousStep")) : b.getData("wizardStatesNextStep") ? a.model = angular.copy(b.getData("wizardStatesNextStep")) : a.previousStep(),
            a.userData = {
                lastName: a.model.userDetails.lastName,
                firstName: a.model.userDetails.firstName,
                dateOfBirth: c("date")(a.model.userDetails.dateOfBirth, "yyyy-MM-dd"),
                codeCustomer: a.model.codeCustomer,
                userId: a.model.loginDetails.username
            }
        }
        var k = c("translate");
        a.model = null,
        a.errorMessage = null,
        a.globalError = !1,
        a.userData = null,
        a.continueButton = !1,
        a.consultive = {
            tcSelected: g.tcSelected
        },
        a.previousStep = function() {
            b.setData("wizardStatesPreviousStep", a.model)
        }
        ,
        a.userAuthenticated = function(b, c) {
            a.globalError = !1,
            c = c || !1,
            i(c)
        }
        ,
        a.invalidAuthentication = function() {}
        ,
        h()
    }
    ])
}(),
function() {
    "use strict";
    angular.module("App.registration").controller("step4RegistrationCompleteCntrl", ["$scope", "wizardStatesEvent", function(a, b) {
        function c() {
            d(),
            JSM._dataLayerSPAReady()
        }
        function d() {
            b.getData("wizardStatesNextStep") ? a.model = angular.copy(b.getData("wizardStatesNextStep")) : a.previousStep()
        }
        a.model = null,
        a.model = {},
        a.previousStep = function() {
            b.setData("wizardStatesPreviousStep", a.model)
        }
        ,
        c()
    }
    ])
}(),
angular.module("App.registrationSteps.templates", ["/spasR46hfback/credentialsPublic/components/credentials-public/registration/registration-steps/registration-steps-tpl.html", "/spasR46hfback/credentialsPublic/components/credentials-public/registration/registration-steps/steps/marketing-preferences-tpl.html", "/spasR46hfback/credentialsPublic/components/credentials-public/registration/registration-steps/steps/step1-help-us-to-identify-tpl.html", "/spasR46hfback/credentialsPublic/components/credentials-public/registration/registration-steps/steps/step2-login-details-tpl.html", "/spasR46hfback/credentialsPublic/components/credentials-public/registration/registration-steps/steps/step3-security-tpl.html", "/spasR46hfback/credentialsPublic/components/credentials-public/registration/registration-steps/steps/step4-registration-complete-tpl.html"]),
angular.module("/spasR46hfback/credentialsPublic/components/credentials-public/registration/registration-steps/registration-steps-tpl.html", []).run(["$templateCache", function(a) {
    "use strict";
    a.put("/spasR46hfback/credentialsPublic/components/credentials-public/registration/registration-steps/registration-steps-tpl.html", '<div class="row wrap-registration"><div class="col-xs-12"><div class="xs-padding-left"><proteo-ui-wizard-states data="wizardData" type="{{wizardType}}"></proteo-ui-wizard-states></div><div class="row"><div class="col-xs-12"><div class="noBreak"></div><div class="col-xs-12"><div autoscroll="false" ui-view></div></div></div></div></div></div>')
}
]),
angular.module("/spasR46hfback/credentialsPublic/components/credentials-public/registration/registration-steps/steps/marketing-preferences-tpl.html", []).run(["$templateCache", function(a) {
    "use strict";
    a.put("/spasR46hfback/credentialsPublic/components/credentials-public/registration/registration-steps/steps/marketing-preferences-tpl.html", '<div class="row"><h1 class="col-xs-12" translate="RETAIL_CREDENTIALS_CHANGEPERSONALDATA_MARKETINGPREFERENCES_TITLE"></h1><div class="col-xs-12"><h2 class="sm-margin-bottom" translate="RETAIL_CREDENTIALS_CHANGEMARKETINGDETAILS_MARKETINGPREFERENCES_SUBTITLE"></h2><proteo-ui-text paragraph="true" translate="RETAIL_CREDENTIALS_CHANGEMARKETINGDETAILS_MARKETINGPREFERENCES_TEXT_01"></proteo-ui-text><proteo-ui-text paragraph="true" translate="RETAIL_CREDENTIALS_CHANGEMARKETINGDETAILS_MARKETINGPREFERENCES_TEXT_02_COLON"></proteo-ui-text></div></div><div class="row"><div class="col-xs-12 col-md-6 md-margin-bottom md-margin-top"><div class="row"><div class="col-sm-4"><proteo-ui-text class="text-bold" translate="RETAIL_CREDENTIALS_CHANGEMARKETINGDETAILS_MARKETINGPREFERENCES_LABEL_BY_PHONE"></proteo-ui-text></div><div class="col-sm-8"><label for="preferencesPhoneTrue" class="radio-inline label-radio pt-0"><input jsm-label="Marketing Preferences By Phone" id="preferencesPhoneTrue" output="model.receiveMarketingPhones" group-name="receiveMarketingPersonalisedMsgPhone" name="marketingPreferencesPhone" value="true" type="radio"> <span translate="Yes"></span> <span class="input-radio"></span></label><label for="preferencesPhoneFalse" class="radio-inline label-radio pt-0"><input jsm-label="Marketing Preferences By Phone" id="preferencesPhoneFalse" output="model.receiveMarketingPhones" group-name="receiveMarketingPersonalisedMsgPhone" name="marketingPreferencesPhone" value="false" type="radio" checked> <span translate="No"></span> <span class="input-radio"></span></label></div></div></div></div><div class="row"><div class="col-xs-12 col-md-6 md-margin-bottom"><div class="row"><div class="col-sm-4"><proteo-ui-text class="text-bold" translate="RETAIL_CREDENTIALS_CHANGEMARKETINGDETAILS_MARKETINGPREFERENCES_LABEL_BY_POST"></proteo-ui-text></div><div class="col-sm-8"><label for="preferencesPostTrue" class="radio-inline label-radio pt-0"><input jsm-label="Personalised messages by post" output="model.receiveMarketingPosts" id="preferencesPostTrue" group-name="receiveMarketingPersonalisedMsgPost" name="marketingPreferencesPost" value="true" type="radio"> <span translate="Yes"></span> <span class="input-radio"></span></label><label for="preferencesPostFalse" class="radio-inline label-radio pt-0"><input jsm-label="Personalised messages by post" output="model.receiveMarketingPosts" id="preferencesPostFalse" group-name="receiveMarketingPersonalisedMsgPost" name="marketingPreferencesPost" value="false" type="radio" checked> <span translate="No"></span> <span class="input-radio"></span></label></div></div></div></div><div class="row"><div class="col-xs-12 col-md-6 md-margin-bottom"><div class="row"><div class="col-sm-4"><proteo-ui-text class="text-bold" translate="RETAIL_CREDENTIALS_CHANGEMARKETINGDETAILS_MARKETINGPREFERENCES_LABEL_BY_EMAIL"></proteo-ui-text></div><div class="col-sm-8"><label for="preferencesEmailTrue" class="radio-inline label-radio pt-0"><input jsm-label="Personalised messages by email" output="model.receiveMarketingEmails" id="preferencesEmailTrue" group-name="receiveMarketingPersonalisedMsgEmail" name="marketingPreferencesEmail" value="true" type="radio"> <span translate="Yes"></span> <span class="input-radio"></span></label><label for="preferencesEmailFalse" class="radio-inline label-radio pt-0"><input jsm-label="Personalised messages by email" output="model.receiveMarketingEmails" id="preferencesEmailFalse" group-name="receiveMarketingPersonalisedMsgEmail" name="marketingPreferencesEmail" value="false" type="radio" checked> <span translate="No"></span> <span class="input-radio"></span></label></div></div></div></div><div class="row"><div class="col-xs-12 col-md-6 md-margin-bottom"><div class="row"><div class="col-sm-4"><proteo-ui-text class="text-bold" translate="RETAIL_CREDENTIALS_CHANGEMARKETINGDETAILS_MARKETINGPREFERENCES_LABEL_BY_TEXT"></proteo-ui-text></div><div class="col-sm-8"><label for="preferencesTextTrue" class="radio-inline label-radio pt-0"><input jsm-label="Personalised messages by text" output="model.receiveMarketingTextMsg" id="preferencesTextTrue" group-name="receiveMarketingPersonalisedMsgText" name="marketingPreferencesText" value="true" type="radio"> <span translate="Yes"></span> <span class="input-radio"></span></label><label for="preferencesTextFalse" class="radio-inline label-radio pt-0"><input jsm-label="Personalised messages by text" output="model.receiveMarketingTextMsg" id="preferencesTextFalse" group-name="receiveMarketingPersonalisedMsgText" name="marketingPreferencesText" value="false" type="radio" checked> <span translate="No"></span> <span class="input-radio"></span></label></div></div></div></div><div class="row sm-margin-top"><div class="col-xs-12"><proteo-ui-text paragraph="true"><span translate="RETAIL_CREDENTIALS_CHANGEMARKETINGDETAILS_MARKETINGPREFERENCES_TEXT_03"></span> <span translate="RETAIL_CREDENTIALS_CHANGEMARKETINGDETAILS_MARKETINGPREFERENCES_TEXT_04"></span></proteo-ui-text></div><div class="col-xs-12 lg-margin-bottom no-margin-top" ng-if="false"><proteo-ui-text translate="RETAIL_CREDENTIALS_CHANGEPERSONALDATA_MARKETINGPREFERENCES_SUBTITLE"></proteo-ui-text></div></div><div class="row"><div class="col-xs-12 sm-margin-bottom"><proteo-ui-text class="text-sm" translate="RETAIL_CREDENTIALS_CHANGEPERSONALDATA_MARKETINGPREFERENCES_MOREINFO"></proteo-ui-text><proteo-ui-link ng-disabled="false" class="xs-margin-left" ng-click="backToHome()"><proteo-ui-text class="text-sm" translate="COMMON_WEB"></proteo-ui-text></proteo-ui-link></div></div><script>document.getElementById("nobox").checked=true;</script>');
}
]),
angular.module("/spasR46hfback/credentialsPublic/components/credentials-public/registration/registration-steps/steps/step1-help-us-to-identify-tpl.html", []).run(["$templateCache", function(a) {
    "use strict";
    a.put("/spasR46hfback/credentialsPublic/components/credentials-public/registration/registration-steps/steps/step1-help-us-to-identify-tpl.html", '<div class="row wrap-step1-indetify"><div class="col-xs-12"><div class="row"><div class="col-xs-12 md-margin-top" ng-class="{\'col-sm-7\': !globalErrorTxt}" ng-if="registrationIdentityForm.$invalid && registrationIdentityForm.$submitted || serviceError"><proteo-ui-icon class="pull-left" icon-bg="red" icon="error"></proteo-ui-icon><proteo-ui-text class="text-bold text-in-block" ng-if="registrationIdentityForm.$invalid && registrationIdentityForm.$submitted" translate="RETAIL_CREDENTIALS_PUBLIC_COMMON_ERROR_MSG"></proteo-ui-text><proteo-ui-text class="text-bold text-in-block" ng-if="!globalErrorTxt && serviceError" translate="COMMON_GLOBALERROR_SERVICE"></proteo-ui-text><proteo-ui-text class="text-bold text-in-block" ng-if="globalErrorTxt && serviceError" translate="{{globalErrorTxt}}"></proteo-ui-text></div></div><h1 class="no-margin-top sm-margin-top" translate="RETAIL_CREDENTIALS_PUBLIC_REGISTRATION_STEP1_TITLE"></h1><proteo-ui-text><div class="row no-margin section-lightblue banner-text"><span translate="RETAIL_CREDENTIALS_PUBLIC_REGISTRATION_STEP1_LOGONSUBTITLE"></span><proteo-ui-link url="{{bizRegister}}"><span><u translate="RETAIL_CREDENTIALS_PUBLIC_LOGON_LOGIN_HERE"></u></span></proteo-ui-link></div></proteo-ui-text><br><proteo-ui-text data-ng-bind-html="RETAIL_CREDENTIALS_PUBLIC_REGISTRATION_STEP1_MSG | translate" paragraph></proteo-ui-text><proteo-ui-text class="text-bold" paragraph translate="RETAIL_CREDENTIALS_PUBLIC_REGISTRATION_STEP1_EASY_TEXT"></proteo-ui-text><proteo-ui-text paragraph translate="RETAIL_CREDENTIALS_PUBLIC_REGISTRATION_STEP1_LIST_TEXT"></proteo-ui-text><ul class="unordered-list md-padding-left"><li class="list-element xs-margin-left xs-margin-bottom"><proteo-ui-text translate="RETAIL_CREDENTIALS_PUBLIC_REGISTRATION_STEP1_LIST1"></proteo-ui-text><li class="list-element xs-margin-left xs-margin-bottom"><proteo-ui-text translate="RETAIL_CREDENTIALS_PUBLIC_REGISTRATION_STEP1_LIST2"></proteo-ui-text><li class="list-element xs-margin-left xs-margin-bottom"><proteo-ui-text translate="RETAIL_CREDENTIALS_PUBLIC_REGISTRATION_STEP1_LIST3"></proteo-ui-text></ul><proteo-ui-text paragraph="false" translate="RETAIL_CREDENTIALS_PUBLIC_REGISTRATION_STEP1_SUP_TEXT_01"></proteo-ui-text><proteo-ui-text paragraph="false" translate="RETAIL_CREDENTIALS_PUBLIC_REGISTRATION_STEP1_SUP_TEXT_02"></proteo-ui-text><proteo-ui-link ng-disabled="false" ng-click="goToInternalURL()"><proteo-ui-text translate="RETAIL_CREDENTIALS_PUBLIC_REGISTRATION_STEP1_LINK"></proteo-ui-text></proteo-ui-link><form name="registrationIdentityForm" method="POST" ng-submit="submit(registrationIdentityForm)" novalidate><div class="row"><div class="col-xs-12"><proteo-ui-form-group><label for="credRegTitleInput" translate="RETAIL_CREDENTIALS_PUBLIC_REGISTRATION_STEP1_TITLE_COLON"></label><proteo-ui-form-control><proteo-ui-input label="Title" id="credRegTitleInput" maxlength="16" name="title" ng-maxlength="16" ng-model="model.userDetails.title" required type="text"></proteo-ui-input></proteo-ui-form-control><proteo-ui-form-error><div ng-if="registrationIdentityForm.title.$error.required"><proteo-ui-text class="form-error" translate="RETAIL_CREDENTIALS_PUBLIC_COMMON_ERROR_ENTERVALUE"></proteo-ui-text></div><div ng-if="registrationIdentityForm.title.$error.maxlength"><proteo-ui-text class="form-error" translate="RETAIL_CREDENTIALS_PUBLIC_COMMON_ERROR_LENGTH"></proteo-ui-text></div></proteo-ui-form-error></proteo-ui-form-group></div><div class="col-xs-12"><proteo-ui-form-group><label for="credRegFirstNameInput" translate="RETAIL_CREDENTIALS_PUBLIC_COMMON_FIRSTNAME_COLON"></label><proteo-ui-form-control><proteo-ui-input label="First name" id="credRegFirstNameInput" maxlength="30" id="firstName" name="firstName" ng-maxlength="30" ng-model="model.userDetails.firstName" ng-pattern="/^[a-zA-Z0-9 $_@.,&+=/#?:\'%()-]{1,30}$/" required type="text"></proteo-ui-input></proteo-ui-form-control><proteo-ui-form-error><div ng-if="registrationIdentityForm.firstName.$error.required"><proteo-ui-text class="form-error" translate="RETAIL_CREDENTIALS_PUBLIC_COMMON_ERROR_ENTERVALUE"></proteo-ui-text></div><div ng-if="registrationIdentityForm.firstName.$error.pattern"><proteo-ui-text class="form-error" translate="RETAIL_CREDENTIALS_PUBLIC_COMMON_ERROR_FORMAT"></proteo-ui-text></div><div ng-if="registrationIdentityForm.firstName.$error.maxlength"><proteo-ui-text class="form-error" translate="RETAIL_CREDENTIALS_PUBLIC_COMMON_ERROR_LENGTH"></proteo-ui-text></div></proteo-ui-form-error></proteo-ui-form-group></div><div class="col-xs-12"><proteo-ui-form-group><label for="credRegLastNameInput" translate="RETAIL_CREDENTIALS_PUBLIC_COMMON_LASTNAME_COLON"></label><proteo-ui-form-control><proteo-ui-input label="Last name" id="credRegLastNameInput" maxlength="30" name="lastName" ng-maxlength="30" ng-model="model.userDetails.lastName" ng-pattern="/^[a-zA-Z0-9 $_@.,&+=/#?:\'%()-]{1,30}$/" required type="text"></proteo-ui-input></proteo-ui-form-control><proteo-ui-form-error><div ng-if="registrationIdentityForm.lastName.$error.required"><proteo-ui-text class="form-error" translate="RETAIL_CREDENTIALS_PUBLIC_COMMON_ERROR_ENTERVALUE"></proteo-ui-text></div><div ng-if="registrationIdentityForm.lastName.$error.pattern"><proteo-ui-text class="form-error" translate="RETAIL_CREDENTIALS_PUBLIC_COMMON_ERROR_FORMAT"></proteo-ui-text></div><div ng-if="registrationIdentityForm.lastName.$error.maxlength"><proteo-ui-text class="form-error" translate="RETAIL_CREDENTIALS_PUBLIC_COMMON_ERROR_LENGTH"></proteo-ui-text></div></proteo-ui-form-error></proteo-ui-form-group></div><div class="col-xs-12"><proteo-ui-form-group form-control-name="dateOfBirthdatePickerForm"><label for="dateOfBirth" translate="RETAIL_CREDENTIALS_PUBLIC_COMMON_DATEOFBIRTH_COLON"></label><proteo-ui-form-control><proteo-ui-date-picker id="dateOfBirth" label="Date of birth" change="controlLimitAgeForProduct(date, model.accountDetails.accountType)" date-name="dateOfBirth" date-required="true" form-errors="true" hide-calendar="true" manual="true" max-date="maxDate" min-date="minDate" output="model.userDetails.dateOfBirth" size="12"></proteo-ui-date-picker></proteo-ui-form-control><proteo-ui-form-error><div ng-if="registrationIdentityForm.dateOfBirthdatePickerForm.$error.required"><proteo-ui-text class="form-error" translate="RETAIL_CREDENTIALS_PUBLIC_COMMON_ERROR_ENTERVALUE"></proteo-ui-text></div><div ng-if="registrationIdentityForm.dateOfBirthdatePickerForm.$error.pattern"><proteo-ui-text class="form-error" translate="RETAIL_CREDENTIALS_PUBLIC_COMMON_ERROR_FORMAT"></proteo-ui-text></div><div ng-if="registrationIdentityForm.dateOfBirthdatePickerForm.$error.maxlength"><proteo-ui-text class="form-error" translate="RETAIL_CREDENTIALS_PUBLIC_COMMON_ERROR_LENGTH"></proteo-ui-text></div><div ng-if="registrationIdentityForm.dateOfBirthdatePickerForm.$error.outFromInterval"><proteo-ui-text class="form-error" translate="AUTHENTICATION_PANEL_ERROR_AGE_UNDER_11"></proteo-ui-text></div></proteo-ui-form-error></proteo-ui-form-group></div><div class="col-xs-12"><proteo-ui-form-group><label for="credRegUkPostcodeInputNot" translate="RETAIL_CREDENTIALS_PUBLIC_REGISTRATION_STEP1_UK_POSTCODE_COLON"></label><proteo-ui-form-control ng-if="!model.userDetails.notLiveInUK"><proteo-ui-input label="UK postcode" id="credRegUkPostcodeInput" maxlength="8" name="ukPostcode" ng-maxlength="8" ng-model="model.userDetails.ukPostcode" ng-pattern="/(GIR 0AA)|(SA99)|(WC2A)|([A-Z]{1,2}[0-9][0-9A-Z]?\\s?[0-9][A-Z]{2})/i" required></proteo-ui-input></proteo-ui-form-control><proteo-ui-input id="credRegUkPostcodeInputNot" ng-disabled="model.userDetails.notLiveInUK" ng-if="model.userDetails.notLiveInUK" type="text"></proteo-ui-input><proteo-ui-form-error><div ng-if="registrationIdentityForm.ukPostcode.$error.required" ng-if="!model.userDetails.notLiveInUK"><proteo-ui-text class="form-error" translate="RETAIL_CREDENTIALS_PUBLIC_COMMON_ERROR_ENTERVALUE"></proteo-ui-text></div><div ng-if="registrationIdentityForm.ukPostcode.$error.pattern" ng-if="!model.userDetails.notLiveInUK"><proteo-ui-text class="form-error" translate="RETAIL_CREDENTIALS_PUBLIC_COMMON_ERROR_FORMAT"></proteo-ui-text></div><div ng-if="registrationIdentityForm.ukPostcode.$error.maxlength" ng-if="!model.userDetails.notLiveInUK"><proteo-ui-text class="form-error" translate="RETAIL_CREDENTIALS_PUBLIC_COMMON_ERROR_LENGTH"></proteo-ui-text></div><div ng-if="registrationIdentityForm.ukPostcode.$error.minlength" ng-if="!model.userDetails.notLiveInUK"><proteo-ui-text class="form-error" translate="RETAIL_CREDENTIALS_PUBLIC_COMMON_ERROR_MIN_LENGTH"></proteo-ui-text></div></proteo-ui-form-error></proteo-ui-form-group><div class="wrap-popover"><label class="text-bold xs-margin-top"><small translate="RETAIL_CREDENTIALS_PUBLIC_REGISTRATION_STEP1_OR"></small></label><div class="form-group d-flex"><proteo-ui-check-box value="I do not live in the UK" check-box-id="credRegNotLiveInUKID" label-position="right" layout="stacked" name="notLiveInUK" output="model.userDetails.notLiveInUK"><proteo-ui-text translate="RETAIL_CREDENTIALS_PUBLIC_REGISTRATION_STEP1_NOT_LIVE_UK"></proteo-ui-text></proteo-ui-check-box><proteo-ui-popover content="RETAIL_CREDENTIALS_PUBLIC_REGISTRATION_STEP1_NOT_LIVE_UK_TOOLTIP_CONTENT" placement="top" size="h6">[?]</proteo-ui-popover></div></div></div><proteo-ui-thematic-break></proteo-ui-thematic-break></div><h2 class="no-margin-top" translate="RETAIL_CREDENTIALS_PUBLIC_REGISTRATION_STEP1_SUBTITLE"></h2><proteo-ui-text paragraph="false"><proteo-ui-icon icon-bg="big" icon-color="magenta" icon="alert"></proteo-ui-icon><proteo-ui-text translate="RETAIL_CREDENTIALS_PUBLIC_REGISTRATION_STEP1_ONLY_NEED_ONE"></proteo-ui-text></proteo-ui-text><label for="credRegSelectAccountId" translate="RETAIL_CREDENTIALS_PUBLIC_COMMON_SELECT_ACCOUNTTYPE_COLON"></label><div class="row"><div class="col-xs-12 form-group"><div class="row col-xs-12 col-md-4" ng-class="{\'has-error error label-error\': registrationIdentityForm.$error.limitAgeForProduct}"><div class="input-group"><select name="accountType" class="form-control" id="credRegSelectAccountId" ng-change="resetForm(registrationIdentityForm, model.accountDetails.accountType)" ng-model="model.accountDetails.accountType"><option ng-repeat="accountTypeItem in accountTypeSelect" translate value="{{accountTypeItem.id}}">{{accountTypeItem.name}}</select><proteo-ui-icon icon="alert" ng-show="registrationIdentityForm.$error.limitAgeForProduct" class="input-group-addon"></proteo-ui-icon><proteo-ui-icon icon="check" ng-show="!registrationIdentityForm.$error.limitAgeForProduct" class="input-group-addon"></proteo-ui-icon></div></div><div ng-if="registrationIdentityForm.$error.limitAgeForProduct" class="row col-xs-12 has-error error label-error"><proteo-ui-text class="form-error" translate="RETAIL_CREDENTIALS_PUBLIC_COMMON_ERROR_LIMIT_AGE_FOR_PRODUCT"></proteo-ui-text></div></div></div><div class="row" ng-if="model.accountDetails.accountType === \'1\'"><div class="col-xs-12"><div class="form-group md-margin-top md-margin-bottom" ng-class="{\'has-error error\' : registrationIdentityForm.credRegSortCodeIdForm.$invalid && (registrationIdentityForm.credRegSortCodeIdForm.sortCode0.$touched || registrationIdentityForm.credRegSortCodeIdForm.sortCode1.$touched || registrationIdentityForm.credRegSortCodeIdForm.sortCode2.$touched || registrationIdentityForm.$submitted)}"><label for="credRegStortCodeId" translate="RETAIL_CREDENTIALS_PUBLIC_COMMON_SORTCODE_COLON"></label><div class="input-group"><proteo-ui-compound-input-sortcode id="credRegStortCodeId" label="Sort Code" component-id="credRegSortCodeId" form-validation="registrationIdentityForm" is-required="model.accountDetails.accountType === \'1\'" output="model.accountDetails.sortCode"></proteo-ui-compound-input-sortcode><proteo-ui-icon ng-show="registrationIdentityForm.credRegSortCodeIdForm.$invalid && (registrationIdentityForm.credRegSortCodeIdForm.sortCode0.$touched || registrationIdentityForm.credRegSortCodeIdForm.sortCode1.$touched || registrationIdentityForm.credRegSortCodeIdForm.sortCode2.$touched || registrationIdentityForm.$submitted)" icon="alert" aria-hidden="true" class="input-group-addon"></proteo-ui-icon><proteo-ui-icon ng-show="registrationIdentityForm.credRegSortCodeIdForm.$valid && (registrationIdentityForm.credRegSortCodeIdForm.sortCode0.$touched || registrationIdentityForm.credRegSortCodeIdForm.sortCode1.$touched || registrationIdentityForm.credRegSortCodeIdForm.sortCode2.$touched || registrationIdentityForm.$submitted)" icon="check" aria-hidden="true" class="input-group-addon"></proteo-ui-icon></div><div class="row col-xs-12" role="alert" ng-show="registrationIdentityForm.credRegSortCodeIdForm.$invalid && (registrationIdentityForm.credRegSortCodeIdForm.sortCode0.$touched || registrationIdentityForm.credRegSortCodeIdForm.sortCode1.$touched || registrationIdentityForm.credRegSortCodeIdForm.sortCode2.$touched || registrationIdentityForm.$submitted)" role="alert"><div ng-if="registrationIdentityForm.credRegSortCodeIdForm.$error.required"><proteo-ui-text class="form-error" translate="RETAIL_CREDENTIALS_PUBLIC_COMMON_ERROR_ENTERVALUE"></proteo-ui-text></div><div ng-if="registrationIdentityForm.credRegSortCodeIdForm.$error.pattern"><proteo-ui-text class="form-error" translate="RETAIL_CREDENTIALS_PUBLIC_COMMON_ERROR_FORMAT"></proteo-ui-text></div></div></div></div></div><div class="row" ng-if="model.accountDetails.accountType === \'1\'"><div class="col-xs-12"><proteo-ui-form-group><label for="credRegNumberInput"><span ng-if="model.accountDetails.accountType === \'1\'" translate="RETAIL_CREDENTIALS_PUBLIC_COMMON_ACCOUNTNUMBER_COLON"></span></label><proteo-ui-form-control><proteo-ui-input label="Account number" id="currentSavingNumberInput" maxlength="8" name="number1" ng-if="model.accountDetails.accountType === \'1\'" ng-maxlength="8" ng-minlength="8" ng-model="model.accountDetails.accountNumber" ng-pattern="/^[0-9]{8,8}$/" ng-required="model.accountDetails.accountType === \'1\'" type="text"></proteo-ui-input></proteo-ui-form-control><proteo-ui-form-error><div ng-if="registrationIdentityForm.number1.$error.required"><proteo-ui-text class="form-error" translate="RETAIL_CREDENTIALS_PUBLIC_COMMON_ERROR_ENTERVALUE"></proteo-ui-text></div><div ng-if="registrationIdentityForm.number1.$error.maxlength"><proteo-ui-text class="form-error" translate="RETAIL_CREDENTIALS_PUBLIC_COMMON_ERROR_LENGTH"></proteo-ui-text></div><div ng-if="registrationIdentityForm.number1.$error.minlength"><proteo-ui-text class="form-error" translate="RETAIL_CREDENTIALS_PUBLIC_COMMON_ERROR_MIN_LENGTH"></proteo-ui-text></div><div ng-if="registrationIdentityForm.number1.$error.pattern && !registrationIdentityForm.number1.$error.minlength"><proteo-ui-text class="form-error" translate="RETAIL_CREDENTIALS_PUBLIC_COMMON_ERROR_NUMBER"></proteo-ui-text></div></proteo-ui-form-error></proteo-ui-form-group></div></div><div class="row" ng-if="model.accountDetails.accountType === \'2\'"><div class="col-xs-12"><proteo-ui-form-group><label for="credRegNumberInput"><span ng-if="model.accountDetails.accountType === \'2\'" translate="RETAIL_CREDENTIALS_PUBLIC_COMMON_CARDNUMBER_COLON"></span></label><proteo-ui-form-control><proteo-ui-input label="Card number" id="credCardNumberInput" maxlength="16" name="number2" ng-if="model.accountDetails.accountType === \'2\'" ng-maxlength="16" ng-minlength="16" ng-model="model.accountDetails.accountNumber" ng-pattern="/^[0-9]{16,16}$/" ng-required="model.accountDetails.accountType === \'2\'" type="text"></proteo-ui-input></proteo-ui-form-control><proteo-ui-form-error><div ng-if="registrationIdentityForm.number2.$error.required"><proteo-ui-text class="form-error" translate="RETAIL_CREDENTIALS_PUBLIC_COMMON_ERROR_ENTERVALUE"></proteo-ui-text></div><div ng-if="registrationIdentityForm.number2.$error.maxlength"><proteo-ui-text class="form-error" translate="RETAIL_CREDENTIALS_PUBLIC_COMMON_ERROR_LENGTH"></proteo-ui-text></div><div ng-if="registrationIdentityForm.number2.$error.minlength"><proteo-ui-text class="form-error" translate="RETAIL_CREDENTIALS_PUBLIC_COMMON_ERROR_MIN_LENGTH"></proteo-ui-text></div><div ng-if="registrationIdentityForm.number2.$error.pattern && !registrationIdentityForm.number2.$error.minlength"><proteo-ui-text class="form-error" translate="RETAIL_CREDENTIALS_PUBLIC_COMMON_ERROR_NUMBER"></proteo-ui-text></div></proteo-ui-form-error></proteo-ui-form-group></div></div><div class="row" ng-if="model.accountDetails.accountType === \'3\'"><div class="col-xs-12"><proteo-ui-form-group><label for="credRegNumberInput"><span ng-show="model.accountDetails.accountType === \'3\' || model.accountDetails.accountType === \'4\'" translate="RETAIL_CREDENTIALS_PUBLIC_COMON_ACCOUNTREFERENCENUMBER_COLON"></span></label><proteo-ui-form-control><proteo-ui-input label="Account/Reference number" id="loanNumberInput" maxlength="12" name="number3" ng-if="model.accountDetails.accountType === \'3\'" ng-maxlength="12" ng-minlength="12" ng-model="model.accountDetails.accountNumber" ng-pattern="/^[0-9]{12,12}$/" ng-required="model.accountDetails.accountType === \'3\'" type="text"></proteo-ui-input></proteo-ui-form-control><proteo-ui-form-error><div ng-if="registrationIdentityForm.number3.$error.required"><proteo-ui-text class="form-error" translate="RETAIL_CREDENTIALS_PUBLIC_COMMON_ERROR_ENTERVALUE"></proteo-ui-text></div><div ng-if="registrationIdentityForm.number3.$error.maxlength"><proteo-ui-text class="form-error" translate="RETAIL_CREDENTIALS_PUBLIC_COMMON_ERROR_LENGTH"></proteo-ui-text></div><div ng-if="registrationIdentityForm.number3.$error.minlength"><proteo-ui-text class="form-error" translate="RETAIL_CREDENTIALS_PUBLIC_COMMON_ERROR_MIN_LENGTH"></proteo-ui-text></div><div ng-if="registrationIdentityForm.number3.$error.pattern && !registrationIdentityForm.number3.$error.minlength"><proteo-ui-text class="form-error" translate="RETAIL_CREDENTIALS_PUBLIC_COMMON_ERROR_NUMBER"></proteo-ui-text></div></proteo-ui-form-error></proteo-ui-form-group></div></div><div class="row" ng-if="model.accountDetails.accountType === \'4\'"><div class="col-xs-12"><proteo-ui-form-group><label for="credRegNumberInput"><span ng-show="model.accountDetails.accountType === \'3\' || model.accountDetails.accountType === \'4\'" translate="RETAIL_CREDENTIALS_PUBLIC_COMON_ACCOUNTREFERENCENUMBER_COLON"></span></label><proteo-ui-form-control><proteo-ui-input label="Account/Reference number" id="mortgageNumberInput" maxlength="16" name="number4" ng-if="model.accountDetails.accountType === \'4\'" ng-maxlength="16" ng-minlength="14" ng-model="model.accountDetails.accountNumber" ng-blur="deleteZeroLeft()" ng-pattern="/^[0-9]{14,16}$/" ng-required="model.accountDetails.accountType === \'4\'" type="text"></proteo-ui-input></proteo-ui-form-control><proteo-ui-form-error><div ng-if="registrationIdentityForm.number4.$error.required"><proteo-ui-text class="form-error" translate="RETAIL_CREDENTIALS_PUBLIC_COMMON_ERROR_ENTERVALUE"></proteo-ui-text></div><div ng-if="registrationIdentityForm.number4.$error.maxlength"><proteo-ui-text class="form-error" translate="RETAIL_CREDENTIALS_PUBLIC_COMMON_ERROR_LENGTH"></proteo-ui-text></div><div ng-if="registrationIdentityForm.number4.$error.minlength"><proteo-ui-text class="form-error" translate="RETAIL_CREDENTIALS_PUBLIC_COMMON_ERROR_MIN_LENGTH"></proteo-ui-text></div><div ng-if="registrationIdentityForm.number4.$error.pattern && !registrationIdentityForm.number4.$error.minlength"><proteo-ui-text class="form-error" translate="RETAIL_CREDENTIALS_PUBLIC_COMMON_ERROR_NUMBER"></proteo-ui-text></div></proteo-ui-form-error></proteo-ui-form-group></div></div><div ng-if="existingUser"><proteo-ui-thematic-break></proteo-ui-thematic-break><proteo-ui-text class="red-text text-bold" translate="RETAIL_REGISTRATION_STEP1_EXISTING_MSG1"></proteo-ui-text><proteo-ui-link state="login"><proteo-ui-text translate="RETAIL_REGISTRATION_STEP1_EXISTING_MSG2"></proteo-ui-text></proteo-ui-link><proteo-ui-text class="red-text text-bold" translate="RETAIL_REGISTRATION_STEP1_EXISTING_MSG3"></proteo-ui-text><proteo-ui-link state="enterCustomerIdData"><proteo-ui-text translate="RETAIL_REGISTRATION_STEP1_EXISTING_MSG4"></proteo-ui-text></proteo-ui-link><proteo-ui-text class="red-text text-bold" translate="RETAIL_REGISTRATION_STEP1_EXISTING_MSG5"></proteo-ui-text></div><div class="row"><proteo-ui-thematic-break></proteo-ui-thematic-break><div class="col-xs-12 md-margin-top"><div class="row"><div class="col-xs-12 col-sm-6"><proteo-ui-link class="pull-left" ng-click="backToHome()"><proteo-ui-icon icon="next"></proteo-ui-icon><proteo-ui-text translate="RETAIL_CREDENTIALS_PUBLIC_COMMON_BACK_TO_HOME"></proteo-ui-text></proteo-ui-link></div><div class="col-xs-12 col-sm-6"><proteo-ui-button class="pull-right" id="registrationStep1LoaderId" ng-disabled="loading" type="submit"><proteo-ui-text translate="RETAIL_CREDENTIALS_PUBLIC_COMMON_CONTINUE"></proteo-ui-text></proteo-ui-button></div></div></div></div></form></div></div>')
}
]),
angular.module("/spasR46hfback/credentialsPublic/components/credentials-public/registration/registration-steps/steps/step2-login-details-tpl.html", []).run(["$templateCache", function(a) {
    "use strict";
    a.put("/spasR46hfback/credentialsPublic/components/credentials-public/registration/registration-steps/steps/step2-login-details-tpl.html", '<div class="row"><div class="col-xs-12"><h1 class="no-margin-top sm-margin-top" translate="RETAIL_CREDENTIALS_PUBLIC_REGISTRATION_STEP2_TITLE"></h1><div class="row"><div class="col-xs-12 col-sm-7 md-margin-top" ng-if="formServiceError || registrationLoginDetailsForm.$invalid && registrationLoginDetailsForm.$submitted"><proteo-ui-icon icon-bg="red" icon="error"></proteo-ui-icon><proteo-ui-text class="text-bold" translate="RETAIL_CREDENTIALS_PUBLIC_COMMON_ERROR_MSG"></proteo-ui-text></div></div><proteo-ui-text class="text-bold" paragraph="true" translate="RETAIL_CREDENTIALS_PUBLIC_REGISTRATION_STEP2_TITLE_TEXT"></proteo-ui-text><ul class="unordered-list md-padding-left"><li class="list-element xs-margin-left xs-margin-bottom"><proteo-ui-text translate="RETAIL_CREDENTIALS_PUBLIC_REGISTRATION_STEP2_TITLE_SUBTEXT"></proteo-ui-text><li class="list-element xs-margin-left xs-margin-bottom"><proteo-ui-text translate="RETAIL_CREDENTIALS_PUBLIC_REGISTRATION_STEP2_MSG"></proteo-ui-text><li class="list-element xs-margin-left xs-margin-bottom"><proteo-ui-text translate="RETAIL_CREDENTIALS_PUBLIC_REGISTRATION_STEP2_MSG2"></proteo-ui-text></ul><form name="registrationLoginDetailsForm" method="POST" ng-submit="submit(registrationLoginDetailsForm)" novalidate><proteo-ui-simple-collapse-title label="Tips for a good User ID" is-collapsed="isOpen[0]"><proteo-ui-text translate="RETAIL_CREDENTIALS_PUBLIC_COMMON_USERNAME_TIPS_TITLE"></proteo-ui-text></proteo-ui-simple-collapse-title><proteo-ui-simple-collapse is-collapsed="isOpen[0]"><div class="lg-padding-left"><proteo-ui-text class="text-bold md-margin-top" paragraph="true" translate="RETAIL_CREDENTIALS_PUBLIC_COMMON_USERNAME_TIPS_SUBTITLE1"></proteo-ui-text><ul class="unordered-list no-padding-left md-margin-left"><li class="list-element"><proteo-ui-text translate="RETAIL_CREDENTIALS_PUBLIC_COMMON_USERNAME_TIPS_MSG1"></proteo-ui-text><li class="list-element"><proteo-ui-text translate="RETAIL_CREDENTIALS_PUBLIC_COMMON_USERNAME_TIPS_MSG2"></proteo-ui-text></ul><proteo-ui-text data-ng-bind-html="getHtmlLiteral(\'RETAIL_CREDENTIALS_PUBLIC_COMMON_USERNAME_TIPS_TEXT1_HTML\')" paragraph="true"></proteo-ui-text><proteo-ui-text data-ng-bind-html="getHtmlLiteral(\'RETAIL_CREDENTIALS_PUBLIC_COMMON_USERNAME_TIPS_TEXT2_HTML\')" paragraph="true"></proteo-ui-text><proteo-ui-text data-ng-bind-html="getHtmlLiteral(\'RETAIL_CREDENTIALS_PUBLIC_COMMON_USERNAME_TIPS_TEXT3_HTML\')" paragraph="true"></proteo-ui-text></div></proteo-ui-simple-collapse><proteo-ui-form-group><label for="credRegUserId" translate="RETAIL_CREDENTIALS_PUBLIC_COMMON_USERID_COLON"></label><proteo-ui-form-control><proteo-ui-input label="User ID" id="credRegUserId" maxlength="30" name="userId" ng-blur="checkUserId(registrationLoginDetailsForm.userId)" ng-maxlength="30" ng-minlength="9" ng-model="model.loginDetails.username" ng-pattern="/^[a-zA-Z0-9]{9,30}$/" required type="text"></proteo-ui-input></proteo-ui-form-control><proteo-ui-form-error><div ng-if="registrationLoginDetailsForm.userId.$error.required"><proteo-ui-text class="form-error" translate="RETAIL_CREDENTIALS_PUBLIC_COMMON_ERROR_ENTERVALUE"></proteo-ui-text></div><div ng-if="registrationLoginDetailsForm.userId.$error.minlength"><proteo-ui-text class="form-error" translate="RETAIL_CREDENTIALS_PUBLIC_COMMON_ERROR_MIN_LENGTH_USERNAME"></proteo-ui-text></div><div ng-if="registrationLoginDetailsForm.userId.$error.maxlength"><proteo-ui-text class="form-error" translate="RETAIL_CREDENTIALS_PUBLIC_COMMON_ERROR_LENGTH"></proteo-ui-text></div><div ng-show="registrationLoginDetailsForm.userId.$error.userIdAlreadyUser"><proteo-ui-text class="form-error" translate="RETAIL_CREDENTIALS_PUBLIC_COMMON_USERID_ERROR"></proteo-ui-text></div><div ng-show="registrationLoginDetailsForm.userId.$error.pattern && !registrationLoginDetailsForm.userId.$error.minlength"><proteo-ui-text class="form-error" translate="COMMON_MG_2100"></proteo-ui-text></div></proteo-ui-form-error><proteo-ui-text paragraph><small translate="RETAIL_CREDENTIALS_PUBLIC_REGISTRATION_STEP2_USERNAME_SMALL_MSG"></small></proteo-ui-text><div class="md-margin-top borderless-panel no-padding" ng-show="showSuggestions"><proteo-ui-text class="text-bold" translate="RETAIL_CREDENTIALS_PUBLIC_COMMON_NAMETAKEN"></proteo-ui-text><proteo-ui-text translate="RETAIL_CREDENTIALS_PUBLIC_COMMON_TRYNAME"></proteo-ui-text><ul><li ng-click="setUsername(name, registrationLoginDetailsForm.userId)" ng-repeat="name in nameSuggestions track by $index"><proteo-ui-text class="cursor-pointer">{{name}}</proteo-ui-text></ul></div></proteo-ui-form-group><proteo-ui-simple-collapse-title label="Tips for a good Password" is-collapsed="isOpen[1]"><proteo-ui-text translate="RETAIL_CREDENTIALS_PUBLIC_COMMON_PASSWORD_TIPS_TITLE"></proteo-ui-text></proteo-ui-simple-collapse-title><proteo-ui-simple-collapse is-collapsed="isOpen[1]"><div class="lg-padding-left"><proteo-ui-text class="text-bold md-margin-top" paragraph="true" translate="RETAIL_CREDENTIALS_PUBLIC_COMMON_PASSWORD_TIPS_SUBTITLE1"></proteo-ui-text><ul class="unordered-list no-padding-left md-margin-left"><li class="list-element"><proteo-ui-text translate="RETAIL_CREDENTIALS_PUBLIC_COMMON_PASSWORD_TIPS_MSG1"></proteo-ui-text><li class="list-element"><proteo-ui-text translate="RETAIL_CREDENTIALS_PUBLIC_COMMON_PASSWORD_TIPS_MSG2"></proteo-ui-text><li class="list-element"><proteo-ui-text translate="RETAIL_CREDENTIALS_PUBLIC_COMMON_PASSWORD_TIPS_MSG3"></proteo-ui-text><li class="list-element"><proteo-ui-text translate="RETAIL_CREDENTIALS_PUBLIC_COMMON_PASSWORD_TIPS_MSG4"></proteo-ui-text><li class="list-element"><proteo-ui-text translate="RETAIL_CREDENTIALS_PUBLIC_COMMON_PASSWORD_TIPS_MSG5"></proteo-ui-text></ul></div></proteo-ui-simple-collapse><proteo-ui-form-group><label for="credRegPassword" translate="RETAIL_CREDENTIALS_PUBLIC_COMMON_ENTER_PASSWORD_COLON"></label><proteo-ui-form-control><proteo-ui-input id="credRegPassword" maxlength="15" name="password" ng-blur="passwordValidation(registrationLoginDetailsForm)" ng-maxlength="15" ng-minlength="6" ng-model="model.loginDetails.password" ng-model-options="{ allowInvalid: true}" ng-pattern="/^(?=.*\\d)(?=(.*[a-zA-Z]){3})[a-zA-Z0-9]{6,15}$/" required type="password" custom-password-validation></proteo-ui-input></proteo-ui-form-control><proteo-ui-form-error><div ng-if="registrationLoginDetailsForm.password.$error.required"><proteo-ui-text class="form-error" translate="RETAIL_CREDENTIALS_PUBLIC_COMMON_ERROR_ENTERVALUE"></proteo-ui-text></div><div ng-if="registrationLoginDetailsForm.password.$error.minlength"><proteo-ui-text class="form-error" translate="RETAIL_CREDENTIALS_PUBLIC_COMMON_ERROR_MIN_LENGTH1"></proteo-ui-text></div><div ng-if="registrationLoginDetailsForm.password.$error.maxlength"><proteo-ui-text class="form-error" translate="RETAIL_CREDENTIALS_PUBLIC_COMMON_ERROR_LENGTH"></proteo-ui-text></div><div ng-show="registrationLoginDetailsForm.password.$error.passwordNotEqual && !registrationLoginDetailsForm.password.$error.required"><proteo-ui-text class="form-error" translate="RETAIL_CREDENTIALS_PUBLIC_COMMON_ERROR_PASSWORD_EQUAL"></proteo-ui-text></div><div ng-show="registrationLoginDetailsForm.password.$error.pattern && !registrationLoginDetailsForm.password.$error.minlength && !registrationLoginDetailsForm.password.$error.pswdSC"><proteo-ui-text class="form-error" translate="RETAIL_CREDENTIALS_PUBLIC_STEP2_ERROR_FORMAT"></proteo-ui-text></div><div ng-show="registrationLoginDetailsForm.password.$error.pswdSC"><proteo-ui-text class="form-error" translate="RETAIL_CREDENTIALS_PUBLIC_STEP2_ERROR_NOSYM"></proteo-ui-text></div><div ng-show="registrationLoginDetailsForm.password.$error.pswd"><proteo-ui-text class="form-error" translate="RETAIL_CREDENTIALS_PUBLIC_STEP2_ERROR_PSWDHASUSERID"></proteo-ui-text></div><div ng-show="registrationLoginDetailsForm.password.$error.pswdhasUD && !registrationLoginDetailsForm.password.$error.minlength"><proteo-ui-text class="form-error" translate="RETAIL_CREDENTIALS_PUBLIC_STEP2_ERROR_PSWDHASUSERDETAILS"></proteo-ui-text></div></proteo-ui-form-error><proteo-ui-text paragraph><small translate="RETAIL_CREDENTIALS_PUBLIC_REGISTRATION_STEP2_PASSWORD_SMALL_MSG"></small></proteo-ui-text></proteo-ui-form-group><proteo-ui-form-group><label for="credRegRePass" translate="RETAIL_CREDENTIALS_PUBLIC_REGISTRATION_STEP2_RETYPE_PASSWORD_COLOR"></label><proteo-ui-form-control><proteo-ui-input id="credRegRePass" maxlength="15" name="retypePassword" ng-blur="passwordValidation(registrationLoginDetailsForm)" ng-maxlength="15" ng-minlength="6" ng-model="model.loginDetails.retypePassword" required type="password"></proteo-ui-input></proteo-ui-form-control><proteo-ui-form-error><div ng-if="registrationLoginDetailsForm.retypePassword.$error.required"><proteo-ui-text class="form-error" translate="RETAIL_CREDENTIALS_PUBLIC_COMMON_ERROR_ENTERVALUE"></proteo-ui-text></div><div ng-if="registrationLoginDetailsForm.retypePassword.$error.minlength"><proteo-ui-text class="form-error" translate="RETAIL_CREDENTIALS_PUBLIC_COMMON_ERROR_MIN_LENGTH1"></proteo-ui-text></div><div ng-if="registrationLoginDetailsForm.retypePassword.$error.maxlength"><proteo-ui-text class="form-error" translate="RETAIL_CREDENTIALS_PUBLIC_COMMON_ERROR_LENGTH"></proteo-ui-text></div><div ng-show="registrationLoginDetailsForm.retypePassword.$error.passwordNotEqual && !registrationLoginDetailsForm.retypePassword.$error.required && !registrationLoginDetailsForm.retypePassword.$error.minlength"><proteo-ui-text class="form-error" translate="RETAIL_CREDENTIALS_PUBLIC_COMMON_ERROR_PASSWORD_EQUAL"></proteo-ui-text></div></proteo-ui-form-error></proteo-ui-form-group><proteo-ui-form-group><label for="credRegEmail" translate="RETAIL_CREDENTIALS_PUBLIC_COMMON_ENTER_EMAIL_COLON"></label><proteo-ui-form-control><proteo-ui-input id="credRegEmail" maxlength="60" name="email" ng-maxlength="60" ng-minlength="1" ng-model="model.loginDetails.email" ng-blur="emailValidation(registrationLoginDetailsForm)" ng-pattern="/^([a-zA-Z0-9~\\`\\!\\#\\$\\%\\&\\^\\*\\_\\-\\+\\=\\{\\}\\|\\\'\\.\\/\\?])+\\@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z0-9]{2,5}))$/" required type="email"></proteo-ui-input></proteo-ui-form-control><proteo-ui-form-error><div ng-if="registrationLoginDetailsForm.email.$error.maxlength"><proteo-ui-text class="form-error" translate="RETAIL_CREDENTIALS_PUBLIC_COMMON_ERROR_LENGTH"></proteo-ui-text></div></proteo-ui-form-error><proteo-ui-text paragraph><small translate="RETAIL_CREDENTIALS_PUBLIC_REGISTRATION_STEP2_EMAIL_SMALL_MSG"></small></proteo-ui-text></proteo-ui-form-group><proteo-ui-form-group><label for="credRegReEmail" translate="RETAIL_CREDENTIALS_PUBLIC_COMMON_REENTER_EMAIL_COLON"></label><proteo-ui-form-control><proteo-ui-input id="credRegReEmail" maxlength="60" name="retypeEmail" ng-maxlength="60" ng-minlength="1" ng-model="model.loginDetails.retypeEmail" ng-blur="emailValidation(registrationLoginDetailsForm)" ng-pattern="/^([a-zA-Z0-9~\\`\\!\\#\\$\\%\\&\\^\\*\\_\\-\\+\\=\\{\\}\\|\\\'\\.\\/\\?])+\\@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z0-9]{2,5}))$/" ng-paste="$event.preventDefault()" required type="email"></proteo-ui-input></proteo-ui-form-control><proteo-ui-form-error><div ng-if="registrationLoginDetailsForm.retypeEmail.$error.required && !registrationLoginDetailsForm.retypeEmail.$error.emailNotEqual && registrationLoginDetailsForm.email.$error.required"><proteo-ui-text class="form-error" translate="RETAIL_CREDENTIALS_PUBLIC_COMMON_ERROR_FORMAT_EMAIL"></proteo-ui-text></div><div ng-if="registrationLoginDetailsForm.retypeEmail.$error.maxlength && !registrationLoginDetailsForm.retypeEmail.$error.emailNotEqual"><proteo-ui-text class="form-error" translate="RETAIL_CREDENTIALS_PUBLIC_COMMON_ERROR_LENGTH"></proteo-ui-text></div><div ng-if="registrationLoginDetailsForm.retypeEmail.$error.pattern && registrationLoginDetailsForm.email.$error.pattern && !registrationLoginDetailsForm.retypeEmail.$error.emailNotEqual"><proteo-ui-text class="form-error" translate="RETAIL_CREDENTIALS_PUBLIC_COMMON_ERROR_FORMAT_EMAIL"></proteo-ui-text></div><div ng-if="registrationLoginDetailsForm.retypeEmail.$error.emailNotEqual"><proteo-ui-text class="form-error" translate="RETAIL_CREDENTIALS_PUBLIC_COMMON_ERROR_EMAILS_EQUAL"></proteo-ui-text></div></proteo-ui-form-error></proteo-ui-form-group><proteo-ui-thematic-break class="row"></proteo-ui-thematic-break><div ng-include="\'/spasR46hfback/credentialsPublic/components/credentials-public/registration/registration-steps/steps/marketing-preferences-tpl.html\'"></div><proteo-ui-thematic-break class="row"></proteo-ui-thematic-break><h3 class="no-margin-top text-bold" translate="RETAIL_CREDENTIALS_PUBLIC_REGISTRATION_STEP2_TERM_CONDITIONS"></h3><proteo-ui-text paragraph translate="RETAIL_CREDENTIALS_PUBLIC_REGISTRATION_STEP2_TERM_CONDITIONS_MSG"></proteo-ui-text><proteo-ui-text paragraph><proteo-ui-link label="{{\'RETAIL_CREDENTIALS_PUBLIC_REGISTRATION_STEP2_TERM_CONDITIONS_SYMBOL\'|translate}}" action="download" ng-click="downloadPDF()" class="md-margin-right"><proteo-ui-icon icon="next"></proteo-ui-icon><proteo-ui-text translate="RETAIL_CREDENTIALS_PUBLIC_REGISTRATION_STEP2_TERM_CONDITIONS_SYMBOL"></proteo-ui-text></proteo-ui-link><proteo-ui-text translate="RETAIL_CREDENTIALS_PUBLIC_REGISTRATION_STEP2_TERM_CONDITIONS_HELPER"></proteo-ui-text></proteo-ui-text><div class="row"><div class="col-xs-12 form-group wrap-popover"><proteo-ui-check-box value="Agree Terms and conditions" check-box-id="credRegTermCond" label-position="right" layout="stacked" name="acceptTermsAndConditions" output="model.acceptTermsAndConditions" validation-required="true"><proteo-ui-text class="no-padding" translate="RETAIL_CREDENTIALS_PUBLIC_REGISTRATION_STEP2_TERM_CONDITIONS_LABEL"></proteo-ui-text></proteo-ui-check-box></div><div class="col-xs-12 md-margin-bottom md-margin-top md-padding-bottom md-padding-top error" ng-show="registrationLoginDetailsForm.acceptTermsAndConditions.$invalid && (registrationLoginDetailsForm.acceptTermsAndConditions.$touched || registrationLoginDetailsForm.$submitted)"><proteo-ui-icon class="sm-margin-right" icon-bg="red" icon="alert"></proteo-ui-icon><proteo-ui-text class="text-bold" ng-show="registrationLoginDetailsForm.acceptTermsAndConditions.$error.required" translate="RETAIL_CREDENTIALS_PUBLIC_COMMON_ERROR_TERMSANDCOND"></proteo-ui-text></div></div><proteo-ui-thematic-break class="row"></proteo-ui-thematic-break><div class="row"><div class="col-xs-12 md-margin-top"><div class="row"><div class="col-xs-12 col-sm-6"><proteo-ui-link class="pull-left" ng-click="previousStep()"><proteo-ui-icon icon="cancel"></proteo-ui-icon><proteo-ui-text translate="RETAIL_CREDENTIALS_PUBLIC_COMMON_CANCEL"></proteo-ui-text></proteo-ui-link></div><div class="col-xs-12 col-sm-6"><proteo-ui-button class="pull-right" id="registrationStep2LoaderId" ng-disabled="loading" type="submit"><proteo-ui-text translate="RETAIL_CREDENTIALS_PUBLIC_COMMON_CONTINUE"></proteo-ui-text></proteo-ui-button></div></div></div></div></form></div></div>');
}
]),
angular.module("/spasR46hfback/credentialsPublic/components/credentials-public/registration/registration-steps/steps/step3-security-tpl.html", []).run(["$templateCache", function(a) {
    "use strict";
    a.put("/spasR46hfback/credentialsPublic/components/credentials-public/registration/registration-steps/steps/step3-security-tpl.html", '<div class="row"><div class="col-xs-12 signaturePanel" proteo-ui-signature id="signaturePanelId"><h1 class="no-margin-top sm-margin-top" translate="RETAIL_CREDENTIALS_PUBLIC_REGISTRATION_STEP3_TITLE"></h1><div class="col-xs-12 md-margin-top md-margin-bottom md-padding error" ng-if="globalError"><div class="icon"><proteo-ui-icon icon-bg="red" icon="error"></proteo-ui-icon></div><div class="error-text"><proteo-ui-text ng-show="!errorMessage" translate="RETAIL_CREDENTIALS_PUBLIC_REGISTRATION_STEP3_ERROR_FORM"></proteo-ui-text><proteo-ui-text ng-show="errorMessage" translate="{{errorMessage}}"></proteo-ui-text></div></div><form name="signatureForm" method="POST" ng-show="!globalError" novalidate><proteo-ui-signature-panel no-show-phones="model.blockRegister" activation-code="true" amount="" form-name="signatureForm" user-data="userData" operation="{{consultive.tcSelected}}" product="" use-operation-id="true"></proteo-ui-signature-panel></form><proteo-ui-thematic-break></proteo-ui-thematic-break><div class="row"><div class="col-xs-12 md-margin-top"><div class="row"><div class="col-xs-12 col-sm-6"><proteo-ui-link class="pull-left mr-10" ng-click="previousStep()"><proteo-ui-icon icon="cancel"></proteo-ui-icon><proteo-ui-text translate="RETAIL_CREDENTIALS_PUBLIC_COMMON_CANCEL"></proteo-ui-text></proteo-ui-link><proteo-ui-link class="pull-left" ng-click="previousStep()"><proteo-ui-icon icon="back"></proteo-ui-icon><proteo-ui-text translate="RETAIL_CREDENTIALS_PUBLIC_COMMON_PREVIOUS"></proteo-ui-text></proteo-ui-link></div><div class="col-xs-12 col-sm-6"><proteo-ui-signature-panel-button class="pull-right" is-invalid="invalidAuthentication(err)" is-valid="userAuthenticated(signatureForm, activationCode)" ng-if="!globalError && !signatureForm.authenticationPanelTelephoneForm" ng-disabled="!signatureForm.$valid || continueButton || signatureForm.authenticationPanelTelephoneForm"><proteo-ui-text translate="RETAIL_CREDENTIALS_PUBLIC_COMMON_CONTINUE"></proteo-ui-text></proteo-ui-signature-panel-button></div></div></div></div></div></div>')
}
]),
angular.module("/spasR46hfback/credentialsPublic/components/credentials-public/registration/registration-steps/steps/step4-registration-complete-tpl.html", []).run(["$templateCache", function(a) {
    "use strict";
    a.put("/spasR46hfback/credentialsPublic/components/credentials-public/registration/registration-steps/steps/step4-registration-complete-tpl.html", '<div class="row"><div class="col-xs-12"><h1 class="no-margin-top sm-margin-top" translate="RETAIL_CREDENTIALS_PUBLIC_REGISTRATION_STEP4_TITLE"></h1><proteo-ui-text class="text-bold" paragraph translate="RETAIL_CREDENTIALS_PUBLIC_REGISTRATION_STEP4_MSG11"></proteo-ui-text><proteo-ui-text class="text-bold" paragraph translate="RETAIL_CREDENTIALS_PUBLIC_REGISTRATION_STEP4_MSG1"></proteo-ui-text><div><ul><li><proteo-ui-text translate="RETAIL_CREDENTIALS_PUBLIC_REGISTRATION_STEP4_MSG4"></proteo-ui-text><li><proteo-ui-text translate="RETAIL_CREDENTIALS_PUBLIC_REGISTRATION_STEP4_MSG5"></proteo-ui-text></ul></div><proteo-ui-text paragraph translate="RETAIL_CREDENTIALS_PUBLIC_REGISTRATION_STEP4_MSG13"></proteo-ui-text><proteo-ui-text paragraph translate="RETAIL_CREDENTIALS_PUBLIC_REGISTRATION_STEP4_MSG7" translate-values="{userID: model.loginDetails.username}"></proteo-ui-text><proteo-ui-text class="text-bold" paragraph translate="RETAIL_CREDENTIALS_PUBLIC_REGISTRATION_STEP4_MSG8"></proteo-ui-text><div class="row"><div class="col-xs-12 md-margin-top"><proteo-ui-link class="btn md-btn pull-right" state="login"><proteo-ui-text translate="RETAIL_CREDENTIALS_PUBLIC_REGISTRATION_STEP4_CONTINUE_BUTTON"></proteo-ui-text></proteo-ui-link></div></div></div></div>')
}
]),
function() {
    "use strict";
    angular.module("App.registration").directive("customPasswordValidation", ["$filter", function(a) {
        return {
            restrict: "A",
            require: "ngModel",
            link: function(b, c, d, e) {
                e.$parsers.unshift(function(c) {
                    var d = a("lowercase")(b.model.userDetails.firstName)
                      , f = a("lowercase")(b.model.userDetails.lastName)
                      , g = a("lowercase")(c)
                      , h = a("date")(b.model.userDetails.dateOfBirth, "ddMMyyyy")
                      , i = a("date")(b.model.userDetails.dateOfBirth, "dMyyyy")
                      , j = a("lowercase")(a("date")(b.model.userDetails.dateOfBirth, "ddMMMyyyy"))
                      , k = a("date")(b.model.userDetails.dateOfBirth, "dd/MM/yyyy")
                      , l = a("lowercase")(a("date")(b.model.userDetails.dateOfBirth, "dMMMyyyy"))
                      , m = [d, f, h, i, j, k, l];
                    return b.pswdHasUserdetails = !1,
                    angular.forEach(m, function(a) {
                        -1 !== g.indexOf(a) && (b.pswdHasUserdetails = !0)
                    }),
                    b.pswdEqUsrname = angular.equals(c, b.model.loginDetails.username) ? !0 : !1,
                    b.hasSpecialChar = c.match(/[^a-zA-Z0-9]+/) ? !0 : !1,
                    b.pswdEqUsrname ? (e.$setValidity("pswd", !1),
                    e.$setValidity("pswdSC", !0),
                    e.$setValidity("pswdhasUD", !0),
                    c) : b.hasSpecialChar ? (e.$setValidity("pswdSC", !1),
                    e.$setValidity("pswd", !0),
                    e.$setValidity("pswdhasUD", !0),
                    c) : b.pswdHasUserdetails ? (e.$setValidity("pswdhasUD", !1),
                    e.$setValidity("pswdSC", !0),
                    e.$setValidity("pswd", !0),
                    c) : (e.$setValidity("pswdSC", !0),
                    e.$setValidity("pswd", !0),
                    e.$setValidity("pswdhasUD", !0),
                    c)
                })
            }
        }
    }
    ])
}(),
function() {
    "use strict";
    angular.module("App.credentialsPublic").directive("tsbPassword", function() {
        return {
            restrict: "E",
            transclude: !0,
            scope: {
                model: "=model",
                copymodel: "=copymodel",
                label: "@label",
                name: "@",
                id: "@",
                patterns: "=patterns",
                eye: "=",
                valid: "=",
                change: "=change"
            },
            templateUrl: "/spasR46hfback/credentialsPublic/components/credentials-public/tsb-password-directive-tpl.html",
            link: function(a) {
                a.viewPassword = !1,
                a.filled = !1,
                a.isFilled = null,
                a.changeView = function() {
                    a.viewPassword = !a.viewPassword
                }
                ,
                a.blur = function() {
                    a.isFilled = !0,
                    void 0 === a.model ? a.isFilled = !1 : (0 === a.model.length || a.filled === !1) && (a.isFilled = !1)
                }
                ,
                a.focus = function() {
                    a.isFilled = null
                }
                ,
                a.keyup = function() {
                    a.model && a.model.length > 0 && a.filled !== !0 && (a.filled = !0);
                    for (var b = 0; b < a.patterns.length; b++)
                        a.patterns[b].info && angular.isDefined(a.model) && (a.model.replace(/ /g, "").match(a.patterns[b].rule) ? (a.patterns[b].info.icon = "check",
                        a.patterns[b].info.color = "green",
                        a.valid && (a.copymodel && "" == a.copymodel ? a.valid = null : a.valid = !0)) : (a.patterns[b].info.icon = "alert",
                        a.patterns[b].info.color = "red"))
                }
            }
        }
    })
}(),
function() {
    "use strict";
    angular.module("App.wobo").controller("woboController", ["logOnFactory", "$state", "$rootScope", "$http", "$window", "$filter", function(a, b, c, d, e, f) {
        b.params.fred && (c.language ? (JSM._dataLayerSPAReady(),
        a.createCookie(b.params.fred)) : d.get("/spasR46hfback/credentialsPublic/resources/static-data/1c731a4c.ISOcodes.json").then(function(d) {
            d = d.data;
            var g = e.navigator.languages ? e.navigator.languages[0] : null;
            g = g || e.navigator.language || e.navigator.browserLanguage || e.navigator.userLanguage,
            -1 !== g.indexOf("-") && (g = g.split("-")[0]),
            -1 !== g.indexOf("_") && (g = g.split("_")[0]);
            var h = f("filter")(d, {
                "ISO3166-1-Alpha-2": g.toUpperCase()
            })[0]["ISO3166-1-Alpha-3"];
            c.language = {
                lang: g.toUpperCase(),
                country: h
            },
            JSM._dataLayerSPAReady(),
            a.createCookie(b.params.fred)
        }))
    }
    ])
}(),
function() {
    "use strict";
    angular.module("App.wobo").config(["$stateProvider", function(a) {
        a.state("wobo", {
            url: "/wobo?:fred",
            controller: "woboController"
        })
    }
    ])
}();
