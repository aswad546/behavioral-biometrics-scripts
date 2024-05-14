var td_0b = td_0b || {};
td_0b.td_1e = function(td_A, td_G) {
    try {
        var td_B = [""];
        var td_M = 0;
        for (var td_K = 0; td_K < td_G.length; ++td_K) {
            td_B.push(String.fromCharCode(td_A.charCodeAt(td_M) ^ td_G.charCodeAt(td_K)));
            td_M++;
            if (td_M >= td_A.length) {
                td_M = 0;
            }
        }
        return td_B.join("");
    } catch (td_E) {
        return null;
    }
}
;
td_0b.td_6D = function(td_K) {
    if (!String || !String.fromCharCode || !parseInt) {
        return null;
    }
    try {
        this.td_c = td_K;
        this.td_d = "";
        this.td_f = function(td_g, td_u) {
            if (0 === this.td_d.length) {
                var td_h = this.td_c.substr(0, 32);
                var td_b = "";
                for (var td_X = 32; td_X < td_K.length; td_X += 2) {
                    td_b += String.fromCharCode(parseInt(td_K.substr(td_X, 2), 16));
                }
                this.td_d = td_0b.td_1e(td_h, td_b);
            }
            if (this.td_d.substr) {
                return this.td_d.substr(td_g, td_u);
            }
        }
        ;
    } catch (td_W) {}
    return null;
}
;
td_0b.td_2L = function(td_S) {
    if (td_S === null || td_S.length === null || !String || !String.fromCharCode) {
        return null;
    }
    var td_E = null;
    try {
        var td_Z = "";
        var td_L = [];
        var td_c = String.fromCharCode(48) + String.fromCharCode(48) + String.fromCharCode(48);
        var td_n = 0;
        for (var td_m = 0; td_m < td_S.length; ++td_m) {
            if (65 + td_n >= 126) {
                td_n = 0;
            }
            var td_j = (td_c + td_S.charCodeAt(td_n++)).slice(-3);
            td_L.push(td_j);
        }
        var td_k = td_L.join("");
        td_n = 0;
        for (var td_m = 0; td_m < td_k.length; ++td_m) {
            if (65 + td_n >= 126) {
                td_n = 0;
            }
            var td_v = String.fromCharCode(65 + td_n++);
            if (td_v !== [][[]] + "") {
                td_Z += td_v;
            }
        }
        td_E = td_0b.td_1e(td_Z, td_k);
    } catch (td_Y) {
        return null;
    }
    return td_E;
}
;
td_0b.td_4o = function(td_s) {
    if (td_s === null || td_s.length === null) {
        return null;
    }
    var td_d = "";
    try {
        var td_O = "";
        var td_x = 0;
        for (var td_M = 0; td_M < td_s.length; ++td_M) {
            if (65 + td_x >= 126) {
                td_x = 0;
            }
            var td_W = String.fromCharCode(65 + td_x++);
            if (td_W !== [][[]] + "") {
                td_O += td_W;
            }
        }
        var td_j = td_0b.td_1e(td_O, td_s);
        var td_H = td_j.match(/.{1,3}/g);
        for (var td_M = 0; td_M < td_H.length; ++td_M) {
            td_d += String.fromCharCode(parseInt(td_H[td_M], 10));
        }
    } catch (td_U) {
        return null;
    }
    return td_d;
}
;
td_0b.tdz_c2e712e533454d3c8e5959d6fdda8817 = new td_0b.td_6D("\x63\x32\x65\x37\x31\x32\x65\x35\x33\x33\x34\x35\x34\x64\x33\x63\x38\x65\x35\x39\x35\x39\x64\x36\x66\x64\x64\x61\x38\x38\x31\x37\x33\x37\x35\x33\x30\x37\x34\x37\x35\x30\x34\x31\x31\x36\x34\x32\x35\x63\x34\x31\x35\x30\x37\x30\x34\x32\x30\x31\x35\x64\x31\x37\x37\x62\x31\x30\x34\x36\x34\x64\x35\x61\x35\x34\x32\x31\x34\x30\x30\x33\x30\x61\x31\x30\x32\x38\x37\x36\x36\x38\x36\x34\x36\x33\x30\x32\x34\x37\x31\x31\x35\x38\x35\x37\x35\x62\x30\x39\x35\x39\x35\x36\x35\x37\x35\x66\x35\x30\x34\x64\x30\x36\x35\x63\x30\x32\x34\x61\x30\x31\x35\x65\x35\x63\x34\x63\x35\x64\x30\x62\x34\x31\x30\x38\x30\x37\x30\x63\x30\x30\x34\x61\x35\x39\x35\x32\x34\x33\x30\x36\x34\x30\x30\x65\x35\x32\x34\x38\x34\x37\x31\x35\x35\x33\x35\x65\x37\x30\x35\x35\x34\x35\x34\x37\x32\x38\x35\x63\x30\x30\x35\x33\x33\x31\x37\x30\x36\x31\x36\x31\x37\x38\x33\x36\x37\x33\x32\x37\x33\x37\x32\x31\x32\x64\x37\x64\x37\x62\x36\x35\x35\x36\x31\x36\x34\x36\x30\x61\x35\x34\x35\x65\x35\x66\x31\x35\x35\x39\x35\x36\x34\x37\x35\x31\x34\x35\x35\x35\x31\x37\x34\x37\x30\x36\x37\x64\x30\x62\x34\x31\x35\x63\x34\x37\x37\x38\x31\x36\x34\x34\x30\x39\x31\x33\x32\x38\x30\x34\x35\x65\x34\x63\x37\x30\x34\x35\x31\x31\x35\x64\x31\x32\x36\x32\x34\x31\x37\x33\x31\x37\x34\x37\x35\x63\x34\x34\x36\x36\x35\x63\x35\x33\x30\x63\x34\x37\x32\x32\x34\x61\x31\x37\x35\x61\x34\x65\x37\x31\x35\x36\x31\x33\x35\x38\x32\x39\x31\x30\x30\x63\x30\x34\x34\x61\x34\x62\x35\x39\x35\x65\x30\x35\x34\x36\x30\x34\x35\x62\x34\x35\x35\x63\x30\x34\x34\x33\x35\x61\x35\x34\x35\x35\x34\x31\x35\x64\x30\x62\x35\x64\x31\x31\x35\x64\x30\x39\x35\x61\x35\x38\x35\x31\x35\x36\x30\x36\x35\x63\x30\x33\x30\x37\x31\x30\x30\x30\x35\x62\x35\x62\x35\x34\x34\x34\x31\x30\x35\x31\x30\x61\x34\x32\x35\x66\x34\x36\x33\x61\x35\x39\x35\x36\x35\x64\x36\x62\x35\x38\x35\x64\x30\x61\x36\x63\x30\x65\x35\x39\x31\x64\x36\x61\x35\x38\x34\x33\x35\x65\x33\x62\x34\x35\x31\x32\x30\x30\x30\x30\x31\x36\x35\x64\x35\x34\x35\x64\x35\x31\x30\x66\x35\x62\x30\x32\x35\x66\x34\x35\x34\x32\x31\x35\x35\x31\x34\x33\x34\x33\x34\x30\x34\x37\x34\x36\x30\x30\x34\x31\x31\x31\x34\x63\x31\x36\x34\x31\x35\x38\x34\x37\x34\x64\x30\x31\x35\x38\x30\x32");
var td_0b = td_0b || {};
td_0b.kb = {};
td_0b.kb.VERSION_REF = 0;
td_0b.kb.BASE_HANDLE_REF = 1;
td_0b.kb.LEGACY_REPORT_REF = 2;
td_0b.kb.BHS_REPORT_REF = 3;
td_0b.kb.MAX_SIZE_ANALYTICS_REF = 4;
td_0b.kb.MAX_SIZE_STAT_REF = 5;
td_0b.kb.MAX_SIZE_COMBO_REF = 6;
td_0b.kb.MAX_SIZE_BHSW = 7;
td_0b.kb.MAX_SIZE_BHSKSTE = 8;
td_0b.kb.MAX_SIZE_BHSKST = 9;
td_0b.kb.MAX_SIZE_BHSFDCXT = 10;
td_0b.kb.HELPERS_REF = 11;
td_0b.kb.CRIT_SELECTOR = 12;
td_0b.kb.ANALYTICS_OFFSET = 1;
td_0b.kb.STATS_OFFSET = 2;
td_0b.kb.RAW_OFFSET = 4;
td_0b.kb.LIVENESS_OFFSET = 16;
td_0b.kb.TYPE_FILTER_OFFSET = 32;
td_0b.kb.M_DATA_KEY_TYPE = 0;
td_0b.kb.M_DATA_KEY_ELEMENT = 1;
function td_2B(td_FX, td_ax, td_HX, td_jb) {
    var td_FY = 1;
    var td_Qo = 1;
    var td_M0 = 30000;
    var td_dk = 250;
    td_FX = (typeof td_FX !== [][[]] + "") ? td_0b.toNumber(td_FX) : td_FY;
    td_ax = (typeof td_ax !== [][[]] + "") ? td_0b.toNumber(td_ax) : td_M0;
    td_HX = (typeof td_HX !== [][[]] + "") ? td_0b.toNumber(td_HX) : td_dk;
    var td_LJ = (td_FX === null || td_FY > td_FX) ? td_FY : td_FX;
    var td_da = (td_ax === null || td_Qo > td_ax) ? td_M0 : td_ax;
    var td_lU = (td_HX === null || td_dk > td_HX) ? td_dk : td_HX;
    var td_QO = 2000;
    var td_xi = 2000;
    var td_i1 = 1024;
    var td_ea = 1024;
    var td_AD = 100;
    var td_Mx = 32000 - td_QO - td_xi - td_i1 - td_ea - td_AD - 256;
    var td_kj = 32000;
    var td_Mq = 5;
    var td_wL = 40;
    var td_Lo = 1000;
    var td_n3 = 10;
    var td_eQ = 3000;
    var td_eU = 86400000;
    var td_lI = true;
    var td_xf = 1000;
    var td_Hf = 40;
    var td_Iz = 2;
    var td_Qu = td_0b.IDENT_TYPE;
    var td_W5 = td_0b.IDENT_ID;
    var td_vu = td_0b.IDENT_NAME;
    var td_eB = 8;
    var td_eX = 9;
    var td_pb = 13;
    var td_E8 = 16;
    var td_B0 = 17;
    var td_cE = 18;
    var td_rH = 20;
    var td_sc = 37;
    var td_Zp = 38;
    var td_xG = 39;
    var td_Pj = 40;
    var td_ok = 45;
    var td_x4 = 46;
    var td_LQ = 91;
    var td_vG = 91;
    var td_RR = 92;
    var td_lA = 93;
    var td_NW = 65;
    var td_rh = 67;
    var td_ia = 82;
    var td_Wa = 86;
    var td_pZ = 88;
    var td_Bg = 90;
    var td_BI = 112;
    var td_HP = 124;
    var td_vk = null;
    var td_Cy = null;
    var td_FB = null;
    var td_F2 = null;
    var td_tZ = null;
    var td_ZD = null;
    var td_f7 = false;
    var td_oV = {};
    var td_Ju = {};
    var td_Jd = [];
    var td_kE = {};
    var td_XV = {};
    var td_aO = td_vZ();
    var td_kc = td_yc();
    var td_ii = null;
    var td_RW = null;
    var td_XW = {};
    var td_yt = 0;
    var td_u2 = 0;
    var td_SA = false;
    var td_YD = 0;
    var td_FS = [];
    var td_iQ = null;
    var td_z7 = false;
    var td_j5 = false;
    var td_Ld = false;
    var td_FH = 0;
    var td_Yz = null;
    var td_dU = {};
    var td_hJ = [td_B0, td_cE, td_ia, td_vG, td_RR, td_lA];
    var td_r1 = [td_E8, td_B0, td_vG, td_RR, td_lA];
    var td_Th = null;
    var td_p4 = null;
    var td_Ap = {};
    var td_E2 = {};
    var td_pG = 0;
    var td_S9 = null;
    var td_Lp = null;
    var td_fY = {};
    var td_dL = [];
    var td_X6 = {};
    var td_ZV = -1;
    var td_fj = {};
    var td_xm = {
        "\x6b\x6e": 0,
        "\x6b\x32\x32\x39": 0
    };
    var td_ON = false;
    var td_cy = null;
    var td_KP = null;
    var td_hH = false;
    var td_pH = false;
    var td_nW = {
        "\x41\x6c\x74": 18,
        "\x41\x6c\x74\x4c\x65\x66\x74": 18,
        "\x41\x6c\x74\x52\x69\x67\x68\x74": 18,
        "\x41\x6c\x74\x47\x72\x61\x70\x68": 18,
        "\x43\x61\x70\x73\x4c\x6f\x63\x6b": 20,
        "\x43\x6f\x6e\x74\x72\x6f\x6c": 17,
        "\x43\x6f\x6e\x74\x72\x6f\x6c\x4c\x65\x66\x74": 17,
        "\x43\x6f\x6e\x74\x72\x6f\x6c\x52\x49\x67\x68\x74": 17,
        "\x46\x6e": 119,
        "\x53\x75\x70\x65\x72": 91,
        "\x48\x79\x70\x65\x72": 91,
        "\x4d\x65\x74\x61": 91,
        "\x4d\x65\x74\x61\x4c\x65\x66\x74": 91,
        "\x4d\x65\x74\x61\x52\x69\x67\x68\x74": 93,
        "\x4f\x53": 91,
        "\x4f\x53\x4c\x65\x66\x74": 91,
        "\x4f\x53\x52\x69\x67\x68\x74": 93,
        "\x4e\x75\x6d\x4c\x6f\x63\x6b": 144,
        "\x53\x63\x72\x6f\x6c\x6c\x4c\x6f\x63\x6b": 145,
        "\x53\x68\x69\x66\x74": 16,
        "\x53\x68\x69\x66\x74\x4c\x65\x66\x74": 16,
        "\x53\x68\x69\x66\x74\x52\x69\x67\x68\x74": 16,
        "\x53\x79\x6d\x62\x6f\x6c": 63,
        "\x45\x6e\x74\x65\x72": 13,
        "\x54\x61\x62": 9,
        "\x53\x70\x61\x63\x65": 32,
        "\x41\x72\x72\x6f\x77\x44\x6f\x77\x6e": 40,
        "\x41\x72\x72\x6f\x77\x4c\x65\x66\x74": 37,
        "\x41\x72\x72\x6f\x77\x52\x69\x67\x68\x74": 39,
        "\x41\x72\x72\x6f\x77\x55\x70": 38,
        "\x44\x6f\x77\x6e": 40,
        "\x4c\x65\x66\x74": 37,
        "\x52\x69\x67\x68\x74": 39,
        "\x55\x70": 38,
        "\x45\x6e\x64": 35,
        "\x48\x6f\x6d\x65": 36,
        "\x50\x61\x67\x65\x44\x6f\x77\x6e": 34,
        "\x50\x61\x67\x65\x55\x70": 33,
        "\x42\x61\x63\x6b\x73\x70\x61\x63\x65": 8,
        "\x43\x6c\x65\x61\x72": 144,
        "\x43\x6f\x70\x79": 242,
        "\x43\x72\x53\x65\x6c": 247,
        "\x44\x65\x6c\x65\x74\x65": 46,
        "\x45\x78\x53\x65\x6c": 248,
        "\x49\x6e\x73\x65\x72\x74": 45,
        "\x53\x70\x61\x63\x65\x62\x61\x72": 32,
        "\x41\x63\x63\x65\x70\x74": 30,
        "\x41\x74\x74\x6e": 240,
        "\x43\x61\x6e\x63\x65\x6c": 3,
        "\x43\x6f\x6e\x74\x65\x78\x74\x4d\x65\x6e\x75": 93,
        "\x45\x73\x63\x61\x70\x65": 27,
        "\x45\x73\x63": 27,
        "\x45\x78\x65\x63\x75\x74\x65": 43,
        "\x46\x69\x6e\x69\x73\x68": 241,
        "\x48\x65\x6c\x70": 45,
        "\x50\x61\x75\x73\x65": 19,
        "\x50\x6c\x61\x79": 250,
        "\x53\x65\x6c\x65\x63\x74": 41,
        "\x5a\x6f\x6f\x6d\x49\x6e": 168,
        "\x5a\x6f\x6f\x6d\x4f\x75\x74": 169,
        "\x50\x72\x69\x6e\x74\x53\x63\x72\x65\x65\x6e": 44,
        "\x4e\x75\x6d\x70\x61\x64\x45\x6e\x74\x65\x72": 13,
        "\x4e\x75\x6d\x70\x61\x64\x44\x65\x63\x69\x6d\x61\x6c": 110,
        "\x4d\x75\x6c\x74\x69\x70\x6c\x79": 155,
        "\x4e\x75\x6d\x70\x61\x64\x4d\x75\x6c\x74\x69\x70\x6c\x79": 106,
        "\x41\x64\x64": 157,
        "\x4e\x75\x6d\x70\x61\x64\x41\x64\x64": 107,
        "\x44\x69\x76\x69\x64\x65": 154,
        "\x4e\x75\x6d\x70\x61\x64\x44\x69\x76\x69\x64\x65": 111,
        "\x53\x75\x62\x74\x72\x61\x63\x74": 156,
        "\x4e\x75\x6d\x70\x61\x64\x53\x75\x62\x74\x72\x61\x63\x74": 109,
        "\x53\x65\x70\x61\x72\x61\x74\x6f\x72": 159,
        "\x4e\x75\x6d\x70\x61\x64\x45\x71\x75\x61\x6c": 12,
        "\x46\x31": 112,
        "\x46\x32": 113,
        "\x46\x33": 114,
        "\x46\x34": 115,
        "\x46\x35": 116,
        "\x46\x36": 117,
        "\x46\x37": 118,
        "\x46\x38": 119,
        "\x46\x39": 120,
        "\x46\x31\x30": 121,
        "\x46\x31\x31": 122,
        "\x46\x31\x32": 123,
        "\x46\x31\x33": 124,
        "\x46\x31\x34": 125,
        "\x46\x31\x35": 126,
        "\x46\x31\x36": 127,
        "\x46\x31\x37": 128,
        "\x46\x31\x38": 129,
        "\x46\x31\x39": 130,
        "\x46\x32\x30": 131,
        "\x46\x32\x31": 132,
        "\x46\x32\x32": 133,
        "\x46\x32\x33": 134,
        "\x46\x32\x34": 135,
        "\x42\x72\x6f\x77\x73\x65\x72\x42\x61\x63\x6b": 4,
        "\x42\x72\x6f\x77\x73\x65\x72\x46\x61\x76\x6f\x72\x69\x74\x65\x73": 174,
        "\x42\x72\x6f\x77\x73\x65\x72\x46\x6f\x72\x77\x61\x72\x64": 125,
        "\x42\x72\x6f\x77\x73\x65\x72\x48\x6f\x6d\x65": 3,
        "\x42\x72\x6f\x77\x73\x65\x72\x52\x65\x66\x72\x65\x73\x68": 0,
        "\x42\x72\x6f\x77\x73\x65\x72\x53\x65\x61\x72\x63\x68": 84,
        "\x42\x72\x6f\x77\x73\x65\x72\x53\x74\x6f\x70": 0
    };
    var td_zY = {
        32: 32,
        33: 49,
        64: 50,
        35: 51,
        36: 52,
        37: 53,
        94: 54,
        38: 55,
        42: 56,
        40: 57,
        41: 48,
        45: 189,
        95: 189,
        61: 187,
        43: 187,
        59: 186,
        58: 186,
        44: 188,
        60: 188,
        46: 190,
        62: 190,
        47: 191,
        63: 191,
        96: 192,
        126: 192,
        91: 219,
        123: 219,
        92: 220,
        124: 220,
        93: 221,
        125: 221,
        39: 222,
        34: 222
    };
    var td_rY = {
        "\x63\x68\x65\x63\x6b\x62\x6f\x78": 1,
        "\x66\x69\x65\x6c\x64\x73\x65\x74": 1,
        "\x6f\x75\x74\x70\x75\x74": 1,
        "\x6f\x62\x6a\x65\x63\x74": 1,
        "\x73\x65\x6c\x65\x63\x74": 1,
        "\x62\x75\x74\x74\x6f\x6e": 1,
        "\x6d\x65\x74\x65\x72": 1,
        "\x64\x61\x74\x61\x6c\x69\x73\x74": 1,
        "\x72\x61\x64\x69\x6f": 1,
        "\x63\x6f\x6c\x6f\x72": 1,
        "\x66\x69\x6c\x65": 1,
        "\x68\x69\x64\x64\x65\x6e": 1,
        "\x72\x61\x6e\x67\x65": 1,
        "\x74\x65\x6c": 1,
        "\x6f\x70\x74\x69\x6f\x6e": 1,
        "\x73\x75\x62\x6d\x69\x74": 1,
        "\x72\x65\x73\x65\x74": 1,
        "\x69\x6d\x61\x67\x65": 1,
    };
    var td_UK = {
        "\x69\x6e\x70\x75\x74": 1,
        "\x73\x65\x61\x72\x63\x68": 1,
        "\x74\x65\x78\x74": 1,
        "\x70\x61\x73\x73\x77\x6f\x72\x64": 1,
        "\x74\x65\x78\x74\x61\x72\x65\x61": 1,
        "\x65\x6d\x61\x69\x6c": 1,
        "\x64\x61\x74\x65": 1,
        "\x64\x61\x74\x65\x74\x69\x6d\x65": 1,
        "\x64\x61\x74\x65\x74\x69\x6d\x65-\x6c\x6f\x63\x61\x6c": 1,
        "\x6d\x6f\x6e\x74\x68": 1,
        "\x6e\x75\x6d\x62\x65\x72": 1,
        "\x74\x65\x6c": 1,
        "\x74\x69\x6d\x65": 1,
        "\x75\x72\x6c": 1,
        "\x77\x65\x65\x6b": 1,
    };
    function td_yc() {
        return {
            dwell_min: 0,
            dwell_max: 0,
            dwell_avg: 0,
            dwell_std: 0,
            flight_min: 0,
            flight_max: 0,
            flight_avg: 0,
            flight_std: 0,
            cut: 0,
            copy: 0,
            paste: 0,
            tab: 0,
            auto: null,
            onpaste: null,
            is_caps: null,
            num_fields: 0,
            total_time_taken: 0,
            num_alphaNum: 0,
            num_special_characters: 0,
            max_wait_between_fields: 0,
            min_wait_between_fields: 0,
            avg_wait_between_fields: 0,
            num_shift: 0,
            num_errors: 0,
            num_neg_PR: 0,
            familiarity: 0,
            suspicious_timing: false
        };
    }
    function td_lw() {
        return {
            type: "",
            cut: [],
            copy: [],
            paste: [],
            tab: [],
            time: [],
            access: [],
            autofill: [],
            error: [],
            kcount: 0,
            count: [],
            fill: false
        };
    }
    function td_xJ() {
        return {
            k: 0,
            t: null,
            shiftKey: false,
            altKey: false,
            ctrlKey: false,
            metaKey: false,
            tabKey: false
        };
    }
    function td_vZ() {
        return {
            ver: td_Mq,
            dwell_min: 0,
            dwell_max: 0,
            dwell_avg: 0,
            dwell_std: 0,
            flight_min: 0,
            flight_max: 0,
            flight_avg: 0,
            flight_std: 0,
            cut: 0,
            copy: 0,
            paste: 0,
            tab: 0,
            auto: 0,
            onpaste: 0,
            cis: 0,
            fni: 0,
            ttt: 0,
            anl: 0,
            snc: 0,
            wmb: 0,
            wmf: 0,
            wab: 0,
            snh: 0,
            enr: 0,
            nnp: 0,
            qiu: 0,
            lfr: 0,
            tsi: 0
        };
    }
    function td_Hq() {
        return {
            dataKeyCount: 0
        };
    }
    function td_Wp(td_LS) {
        return (typeof td_LS !== [][[]] + "" && td_LS !== null);
    }
    function td_jh(td_Ih) {
        return !!td_Ih;
    }
    function td_gF(td_au, td_Oj, td_w4, td_Pa, td_w5) {
        if (td_SA === false || !td_jh(td_au) && !td_jh(td_Oj) && !td_jh(td_w4)) {
            return;
        }
        td_3q.set(td_au, td_Oj, td_w4, true, td_Pa, td_w5);
    }
    function td_fH(td_x) {
        if (td_Lp === null) {
            return false;
        }
        return td_Lp.checkEventTargetIgnore(td_x);
    }
    function td_NE(td_x) {
        if (td_Lp === null) {
            return false;
        }
        return td_Lp.checkEventTargetMask(td_x);
    }
    function td_hS(td_x) {
        if (td_Lp === null) {
            return false;
        }
        td_Lp.shouldDocument(td_x);
        return td_Lp.shouldDefineAsPasswordType(td_x);
    }
    function td_KZ(td_x) {
        if (td_Lp === null) {
            return false;
        }
        return td_Lp.shouldDocument(td_x);
    }
    function td_n1() {
        return (td_RW !== null && td_RW.tabKey);
    }
    function td_DJ() {
        return (td_RW !== null && (td_RW.shiftKey || td_RW.altKey || td_RW.ctrlKey || td_RW.metaKey));
    }
    function td_Pw(td_sx) {
        return (td_sx >= 37 && td_sx <= 40);
    }
    function td_yB() {
        var td_K7 = [];
        for (var td_fX in td_XW) {
            if (!td_XW.hasOwnProperty(td_fX)) {
                continue;
            }
            if (td_XW[td_fX] !== null) {
                td_K7.push(td_yH(td_fX));
            }
        }
        return td_K7;
    }
    function td_QL(td_x) {
        return td_0b.getEventTypeIdName(td_x);
    }
    function td_yH(td_kp) {
        if (typeof td_kp === [][[]] + "" || td_kp === null) {
            return -1;
        }
        if ((td_kp >= 48 && td_kp <= 57) || (td_kp >= 65 && td_kp < 90) || (td_kp >= 96 && td_kp <= 105)) {
            return 999;
        }
        return td_kp;
    }
    function td_lb(td_ct) {
        if (typeof td_ct === [][[]] + "" || td_ct === null) {
            return -1;
        }
        switch (td_ct) {
        case td_NW:
            return 998;
        case td_rh:
            return 997;
        case td_ia:
            return 996;
        case td_Wa:
            return 995;
        case td_pZ:
            return 994;
        case td_Bg:
            return 993;
        default:
            break;
        }
        if ((td_ct >= 48 && td_ct <= 57) || (td_ct >= 65 && td_ct < 90) || (td_ct >= 96 && td_ct <= 105)) {
            return 999;
        }
        return td_ct;
    }
    function td_sf() {
        var td_Hp = td_yB();
        var td_PB = [];
        if (td_Hp.length > 0) {
            var td_TH;
            for (var td_uJ in td_Hp) {
                if (!td_Hp.hasOwnProperty(td_uJ) || typeof td_Hp[td_uJ] === [][[]] + "") {
                    continue;
                }
                td_TH = td_0b.parseInt(td_Hp[td_uJ]);
                if (td_6T(td_r1, td_TH, 0) !== -1) {
                    td_PB.push(td_TH);
                }
            }
        }
        return td_PB;
    }
    function td_Cg(td_gX, td_AG) {
        if (td_gX === td_NW && td_AG && td_AG.length > 0) {
            for (var td_RZ in td_AG) {
                if (!td_AG.hasOwnProperty(td_RZ)) {
                    continue;
                }
                switch (td_AG[td_RZ]) {
                case td_B0:
                case td_vG:
                case td_RR:
                case td_lA:
                    return [td_gX, td_AG[td_RZ]];
                default:
                    break;
                }
            }
        }
        return [];
    }
    function td_He(td_WF) {
        switch (td_WF) {
        case td_eB:
        case td_x4:
        case td_lA:
        case td_Pj:
        case td_ok:
        case td_BI:
        case td_HP:
            return [td_WF];
        default:
            break;
        }
        return [];
    }
    function td_sV(td_yF, td_M8) {
        if (td_yF >= 33 && td_yF <= 40) {
            if (td_M8.length > 0) {
                var td_cW = [];
                td_cW.push(td_yF);
                for (var td_si in td_M8) {
                    if (!td_M8.hasOwnProperty(td_si)) {
                        continue;
                    }
                    td_cW.push(td_M8[td_si]);
                }
                return td_cW;
            }
            return [td_yF];
        }
        return [];
    }
    function td_jf(td_qp) {
        if (typeof td_qp === [][[]] + "" || td_qp === null) {
            return [];
        }
        var td_oG = td_sf();
        var td_tR = td_Cg(td_qp, td_oG);
        if (td_tR.length > 0) {
            return td_tR;
        }
        td_tR = td_sV(td_qp, td_oG);
        if (td_tR.length > 0) {
            return td_tR;
        }
        return td_He(td_qp);
    }
    function td_pL() {
        var td_nP = Number.NaN;
        var td_uy = td_n3;
        while (isNaN(td_nP) && --td_uy > 0) {
            td_nP = td_p();
        }
        if (0 >= td_uy) {
            return 0;
        }
        return td_nP;
    }
    function td_Gz() {
        return td_pL() - td_ii;
    }
    function td_JA(td_GQ) {
        if (typeof td_GQ === [][[]] + "" || td_GQ === null) {
            return false;
        }
        return !(!(td_GQ > 47 && td_GQ < 58) && !(td_GQ > 64 && td_GQ < 91) && !(td_GQ > 96 && td_GQ < 123));
    }
    function td_tg(td_PL) {
        if (typeof String === [][[]] + "" || typeof String.fromCharCode === [][[]] + "") {
            return false;
        }
        var td_nQ = String.fromCharCode(td_PL);
        if (td_nQ === " ") {
            return false;
        }
        return (td_nQ.toLowerCase() === td_nQ.toUpperCase());
    }
    function td_gt(td_Zx, td_Qi) {
        if (td_Zx === ((typeof (td_0b.tdz_c2e712e533454d3c8e5959d6fdda8817) !== "undefined" && typeof (td_0b.tdz_c2e712e533454d3c8e5959d6fdda8817.td_f) !== "undefined") ? (td_0b.tdz_c2e712e533454d3c8e5959d6fdda8817.td_f(0, 3)) : null) && td_Wp(td_iQ) && typeof td_kE[td_iQ] !== [][[]] + "" && typeof td_kE[td_iQ][td_Zx] !== [][[]] + "") {
            if (typeof td_kE[td_Qi] === [][[]] + "") {
                td_kE[td_Qi] = {};
            }
            if (typeof td_oV[td_Qi] === [][[]] + "") {
                td_oV[td_Qi] = [];
            }
            td_kE[td_Qi][td_Zx] = td_kE[td_iQ][td_Zx];
            delete td_kE[td_iQ][td_Zx];
            td_iQ = null;
        }
    }
    function td_pF(td_If) {
        if (!td_Wp(td_If)) {
            return null;
        }
        if (td_If.length > 1 && td_Wp(td_nW)) {
            if (td_nW.hasOwnProperty(td_If)) {
                return td_nW[td_If];
            }
            return null;
        }
        if (!td_Wp(td_If.charCodeAt)) {
            return null;
        }
        var td_ag = td_If.charCodeAt(0);
        if (td_ag > 47 && td_ag < 58 || td_ag > 64 && td_ag < 91) {
            return td_ag;
        }
        if (td_ag > 96 && td_ag < 123) {
            return td_ag - 32;
        }
        if (typeof td_zY !== [][[]] + "" && td_zY !== null) {
            return td_zY.hasOwnProperty(td_ag) ? td_zY[td_ag] : null;
        }
    }
    function td_xV(td_H9) {
        if (typeof td_H9.metaKey !== [][[]] + "" && !td_H9.metaKey) {
            return;
        }
        var td_Yl = td_yB();
        if (td_Yl.length > 0) {
            td_XW = {};
        }
    }
    function td_hP(td_x) {
        return td_x.keyCode || td_x.which || td_pF(td_x.key);
    }
    function td_rt(td_x) {
        try {
            if (!td_Wp(td_x)) {
                return;
            }
            if (td_fH(td_x)) {
                return;
            }
            td_KZ(td_x);
            var td_aX = td_QL(td_x);
            var td_Pd = td_aX[td_W5];
            if (td_Pd === null) {
                td_Pd = td_aX[td_vu];
            }
            if (td_hS(td_x)) {
                td_aX[td_0b.IDENT_TYPE] = ((typeof (td_0b.tdz_c2e712e533454d3c8e5959d6fdda8817) !== "undefined" && typeof (td_0b.tdz_c2e712e533454d3c8e5959d6fdda8817.td_f) !== "undefined") ? (td_0b.tdz_c2e712e533454d3c8e5959d6fdda8817.td_f(3, 8)) : null);
            }
            var td_EL = td_hP(td_x);
            td_rq(td_aX[td_vu], td_aX[td_W5], td_0b.getEventTargetType(td_x));
            td_gt(td_EL, td_Pd);
            td_xV(td_x);
            var td_l7 = td_Gz();
            if (typeof td_EL !== [][[]] + "" && typeof td_kE[td_Pd] !== [][[]] + "" && typeof td_kE[td_Pd][td_EL] !== [][[]] + "") {
                if (td_EL === td_rH) {
                    td_Ju[td_Pd].kcount += 1;
                }
                var td_kk = td_kE[td_Pd][td_EL];
                if (td_kk === null || td_kk === 0) {
                    td_kk = td_l7;
                }
                td_oV[td_Pd].push([td_kk, td_l7, td_x.location, td_yH(td_EL)]);
                delete td_kE[td_Pd][td_EL];
            }
            td_mz(td_x, td_aX, td_l7, td_EL);
            if (typeof td_XW[td_EL] !== [][[]] + "") {
                delete td_XW[td_EL];
            }
            td_f7 = true;
        } catch (td_Ub) {}
    }
    function td_ks(td_x) {
        try {
            if (!td_Wp(td_x)) {
                return;
            }
            if (td_fH(td_x)) {
                return;
            }
            td_KZ(td_x);
            var td_Rx = td_QL(td_x);
            var td_go = td_0b.getEventTargetHtmlTag(td_x);
            var td_ES = td_Rx[td_Qu];
            var td_pA = td_Rx[td_W5];
            if (td_pA === null) {
                td_pA = td_Rx[td_vu];
            }
            if (td_hS(td_x)) {
                td_Rx[td_0b.IDENT_TYPE] = ((typeof (td_0b.tdz_c2e712e533454d3c8e5959d6fdda8817) !== "undefined" && typeof (td_0b.tdz_c2e712e533454d3c8e5959d6fdda8817.td_f) !== "undefined") ? (td_0b.tdz_c2e712e533454d3c8e5959d6fdda8817.td_f(3, 8)) : null);
            }
            var td_Qh = td_0b.getEventTargetValue(td_x);
            td_rq(td_Rx[td_vu], td_Rx[td_W5], td_ES);
            var td_Er = td_Gz();
            var td_gT = td_hP(td_x);
            td_mz(td_x, td_Rx, td_Er, td_gT);
            if (td_x.constructor && (td_x.constructor.name === ((typeof (td_0b.tdz_c2e712e533454d3c8e5959d6fdda8817) !== "undefined" && typeof (td_0b.tdz_c2e712e533454d3c8e5959d6fdda8817.td_f) !== "undefined") ? (td_0b.tdz_c2e712e533454d3c8e5959d6fdda8817.td_f(11, 5)) : null) || td_x.constructor.name === ((typeof (td_0b.tdz_c2e712e533454d3c8e5959d6fdda8817) !== "undefined" && typeof (td_0b.tdz_c2e712e533454d3c8e5959d6fdda8817.td_f) !== "undefined") ? (td_0b.tdz_c2e712e533454d3c8e5959d6fdda8817.td_f(16, 11)) : null))) {
                if (td_go === ((typeof (td_0b.tdz_c2e712e533454d3c8e5959d6fdda8817) !== "undefined" && typeof (td_0b.tdz_c2e712e533454d3c8e5959d6fdda8817.td_f) !== "undefined") ? (td_0b.tdz_c2e712e533454d3c8e5959d6fdda8817.td_f(27, 5)) : null)) {
                    td_Ju[td_pA].fill = ((typeof (td_0b.tdz_c2e712e533454d3c8e5959d6fdda8817) !== "undefined" && typeof (td_0b.tdz_c2e712e533454d3c8e5959d6fdda8817.td_f) !== "undefined") ? (td_0b.tdz_c2e712e533454d3c8e5959d6fdda8817.td_f(32, 10)) : null);
                    td_Ju[td_pA].autofill.push((td_Er));
                    td_gF(td_ES, td_Rx[td_vu], td_Rx[td_W5], td_FB, td_Qh);
                }
                return;
            }
            td_E4(td_x, td_pA, td_gT);
            if (typeof td_gT !== [][[]] + "" && typeof td_kE[td_pA][td_gT] === [][[]] + "") {
                td_Ju[td_pA].kcount += 1;
                var td_Jp = td_Er;
                td_As(td_x, td_pA, td_gT, td_Jp);
                var td_Ab = td_jf(td_gT);
                if (td_Ab.length > 0) {
                    td_Ju[td_pA].error.push([td_Ab, (td_Jp)]);
                    td_kc.num_errors += 1;
                }
                td_ZG(td_x, td_pA, td_gT, td_Jp);
                td_kE[td_pA][td_gT] = td_Jp;
                if (td_gT !== td_eX && !td_DJ() && !td_Pw(td_gT)) {
                    td_Ju[td_pA].fill = ((typeof (td_0b.tdz_c2e712e533454d3c8e5959d6fdda8817) !== "undefined" && typeof (td_0b.tdz_c2e712e533454d3c8e5959d6fdda8817.td_f) !== "undefined") ? (td_0b.tdz_c2e712e533454d3c8e5959d6fdda8817.td_f(42, 8)) : null);
                    td_gF(td_ES, td_Rx[td_vu], td_Rx[td_W5], td_vk, td_Qh);
                }
                if (td_gT === td_Pj) {
                    var td_sK = td_0b.getEventTargetValueLength(td_x);
                    if (td_sK !== -1 && 2 > td_sK) {
                        td_Ju[td_pA].fill = ((typeof (td_0b.tdz_c2e712e533454d3c8e5959d6fdda8817) !== "undefined" && typeof (td_0b.tdz_c2e712e533454d3c8e5959d6fdda8817.td_f) !== "undefined") ? (td_0b.tdz_c2e712e533454d3c8e5959d6fdda8817.td_f(50, 7)) : null);
                    }
                }
                td_Gq(td_x, td_gT, td_Jp);
                if (!td_Wp(td_E2[td_pA])) {
                    td_E2[td_pA] = td_Hq();
                }
                if (td_JA(td_gT)) {
                    td_kc.num_alphaNum += 1;
                    td_E2[td_pA].dataKeyCount += 1;
                } else {
                    if (td_tg(td_gT)) {
                        td_kc.num_special_characters += 1;
                        td_E2[td_pA].dataKeyCount += 1;
                    }
                }
            } else {
                td_yt = 1;
            }
            td_XW[td_gT] = 0;
        } catch (td_aq) {}
    }
    function td_mz(td_x, td_Vy, td_v0, td_KU) {
        if (!td_pH) {
            return;
        }
        var td_L6 = td_KU;
        if (!td_Kz(td_Vy[td_Qu])) {
            return;
        }
        if (td_KU === 0) {
            td_KU = 229;
            td_L6 = td_KU;
        } else {
            if (td_KU === null) {
                td_KU = -500;
            }
        }
        if (td_KU === 229 && td_x.type === ((typeof (td_0b.tdz_c2e712e533454d3c8e5959d6fdda8817) !== "undefined" && typeof (td_0b.tdz_c2e712e533454d3c8e5959d6fdda8817.td_f) !== "undefined") ? (td_0b.tdz_c2e712e533454d3c8e5959d6fdda8817.td_f(50, 7)) : null) && !td_ON) {
            td_GW();
        }
        var td_iS = "n";
        if (td_NE(td_x)) {
            td_iS = "m";
        }
        var td_cT = [];
        var td_lv = td_KP.getTargetName(td_Vy);
        var td_y6 = td_x.target || td_x.srcElement || {};
        if (td_iS === "m") {
            var td_Zr = 0;
            if (td_Wp(td_cy.selection) && td_Wp(td_cy.selection.createRange)) {
                var td_q6 = td_cy.selection.createRange();
                var td_CB = td_q6.text.length;
                td_q6.moveStart(((typeof (td_0b.tdz_c2e712e533454d3c8e5959d6fdda8817) !== "undefined" && typeof (td_0b.tdz_c2e712e533454d3c8e5959d6fdda8817.td_f) !== "undefined") ? (td_0b.tdz_c2e712e533454d3c8e5959d6fdda8817.td_f(57, 9)) : null), -td_y6.value.length);
                td_Zr = td_q6.text.length - td_CB;
            } else {
                if (td_y6.selectionStart || td_y6.selectionStart === 0) {
                    td_Zr = td_y6.selectionStart;
                }
            }
            td_Zr = -1 * (td_Zr + 1);
            if ((td_KU < 47 && td_KU !== 32) || (td_KU > 90 && td_KU < 96) || (td_KU >= 112 && td_KU <= 123) || td_KU === 144) {
                if (td_x.type === ((typeof (td_0b.tdz_c2e712e533454d3c8e5959d6fdda8817) !== "undefined" && typeof (td_0b.tdz_c2e712e533454d3c8e5959d6fdda8817.td_f) !== "undefined") ? (td_0b.tdz_c2e712e533454d3c8e5959d6fdda8817.td_f(50, 7)) : null)) {
                    td_ZV = -1;
                    td_cT[0] = 0;
                    td_cT[1] = td_KU;
                } else {
                    if (td_x.type === ((typeof (td_0b.tdz_c2e712e533454d3c8e5959d6fdda8817) !== "undefined" && typeof (td_0b.tdz_c2e712e533454d3c8e5959d6fdda8817.td_f) !== "undefined") ? (td_0b.tdz_c2e712e533454d3c8e5959d6fdda8817.td_f(66, 5)) : null)) {
                        td_cT[0] = 1;
                        td_cT[1] = td_KU;
                        td_X6[td_KU] = null;
                    }
                }
            } else {
                if (td_x.type === ((typeof (td_0b.tdz_c2e712e533454d3c8e5959d6fdda8817) !== "undefined" && typeof (td_0b.tdz_c2e712e533454d3c8e5959d6fdda8817.td_f) !== "undefined") ? (td_0b.tdz_c2e712e533454d3c8e5959d6fdda8817.td_f(50, 7)) : null)) {
                    if (typeof td_X6[td_KU] === [][[]] + "" || td_X6[td_KU] === null) {
                        td_X6[td_KU] = td_Zr;
                    }
                    td_cT[0] = 0;
                    td_cT[1] = td_Zr;
                } else {
                    if (td_x.type === ((typeof (td_0b.tdz_c2e712e533454d3c8e5959d6fdda8817) !== "undefined" && typeof (td_0b.tdz_c2e712e533454d3c8e5959d6fdda8817.td_f) !== "undefined") ? (td_0b.tdz_c2e712e533454d3c8e5959d6fdda8817.td_f(66, 5)) : null)) {
                        td_cT[0] = 1;
                        td_cT[1] = td_X6[td_KU];
                        td_X6[td_KU] = null;
                    }
                }
            }
            td_cT[2] = td_v0;
        } else {
            if (td_KU === 229 && td_x.type === ((typeof (td_0b.tdz_c2e712e533454d3c8e5959d6fdda8817) !== "undefined" && typeof (td_0b.tdz_c2e712e533454d3c8e5959d6fdda8817.td_f) !== "undefined") ? (td_0b.tdz_c2e712e533454d3c8e5959d6fdda8817.td_f(50, 7)) : null)) {
                td_fh(td_lv, td_0b.getEventTargetValueLength(td_x));
            } else {
                if (td_KU === 229 && td_x.type === ((typeof (td_0b.tdz_c2e712e533454d3c8e5959d6fdda8817) !== "undefined" && typeof (td_0b.tdz_c2e712e533454d3c8e5959d6fdda8817.td_f) !== "undefined") ? (td_0b.tdz_c2e712e533454d3c8e5959d6fdda8817.td_f(66, 5)) : null)) {
                    var td_sD = td_fj[td_lv] || [];
                    var td_k7 = td_y6.value.length
                      , td_lg = td_sD.pop() || 0;
                    if (td_ZV !== -1 || td_k7 < td_lg) {
                        if (td_k7 - td_lg <= 1) {
                            td_KU = (td_k7 < td_lg ? td_eB : td_ZV);
                        }
                        var td_Ad = td_Vt(td_lv);
                        if (td_Ad != null) {
                            var td_WQ = td_Ad[td_Ad.length - 1];
                            if (td_WQ[1] === 229) {
                                td_WQ[1] = td_KU;
                            }
                            td_ZV = -1;
                        }
                    }
                }
            }
            td_cT = [(td_x.type === ((typeof (td_0b.tdz_c2e712e533454d3c8e5959d6fdda8817) !== "undefined" && typeof (td_0b.tdz_c2e712e533454d3c8e5959d6fdda8817.td_f) !== "undefined") ? (td_0b.tdz_c2e712e533454d3c8e5959d6fdda8817.td_f(50, 7)) : null) ? 0 : 1), td_KU, td_v0];
        }
        if (td_L6 === 229) {
            td_xm.k229++;
        } else {
            td_xm.kn++;
        }
        td_Lv(td_lv, td_iS, td_cT);
        td_b8(td_lv, td_0b.getEventTargetValueLength(td_x));
    }
    function td_fh(td_qz, td_cI) {
        (td_fj[td_qz] = (td_fj[td_qz] || [])).push(td_cI);
    }
    function td_VF(td_x) {
        var td_nk = td_x.data;
        if (td_Wp(td_nk) && td_nk.length === 1) {
            td_bX(td_nk.toUpperCase().charCodeAt(0));
        }
    }
    function td_Tu(td_x) {
        var td_ny = td_x.data;
        if (typeof td_ny !== [][[]] + "" && td_ny !== null && td_ny.length !== null) {
            td_bX(td_ny.toUpperCase().charCodeAt(td_ny.length - 1));
        }
    }
    function td_bX(td_bu) {
        td_ZV = td_bu;
    }
    function td_Vt(td_oE) {
        for (var td_u6 = td_dL.length - 1; td_u6 >= 0; td_u6--) {
            if (td_dL[td_u6][td_0b.kb.M_DATA_KEY_ELEMENT] === td_oE) {
                return td_dL[td_u6];
            }
        }
        return null;
    }
    function td_b8(td_kF, td_R6) {
        td_fY[td_kF] = td_R6;
    }
    function td_GW() {
        td_ON = true;
        td_3h(td_cy, td_E, td_VF);
        td_3h(td_cy, td_s, td_Tu);
    }
    function td_Lv(td_JX, td_tf, td_Ws) {
        for (var td_HJ = td_dL.length - 1; td_HJ > -1; td_HJ--) {
            if ((td_tf === "n" && td_dL[td_HJ][td_0b.kb.M_DATA_KEY_TYPE] !== "f") || (td_tf === "m" && td_dL[td_HJ][td_0b.kb.M_DATA_KEY_TYPE] !== ((typeof (td_0b.tdz_c2e712e533454d3c8e5959d6fdda8817) !== "undefined" && typeof (td_0b.tdz_c2e712e533454d3c8e5959d6fdda8817.td_f) !== "undefined") ? (td_0b.tdz_c2e712e533454d3c8e5959d6fdda8817.td_f(71, 2)) : null))) {
                continue;
            }
            if (td_dL[td_HJ][td_0b.kb.M_DATA_KEY_ELEMENT] === td_JX) {
                td_dL[td_HJ].push(td_Ws);
                return;
            }
        }
        var td_Y0 = td_tf === "m" ? ((typeof (td_0b.tdz_c2e712e533454d3c8e5959d6fdda8817) !== "undefined" && typeof (td_0b.tdz_c2e712e533454d3c8e5959d6fdda8817.td_f) !== "undefined") ? (td_0b.tdz_c2e712e533454d3c8e5959d6fdda8817.td_f(71, 2)) : null) : "f";
        td_dL.push([td_Y0, td_JX, td_Ws]);
    }
    function td_Kz(td_Mt) {
        if (!td_jh(td_Mt)) {
            return false;
        }
        if (td_hH) {
            return !td_rY.hasOwnProperty(td_Mt);
        }
        return td_UK.hasOwnProperty(td_Mt);
    }
    function td_rq(td_op, td_TZ, td_r5) {
        var td_DM = (td_TZ !== null) ? td_TZ : td_op;
        if (typeof td_oV[td_DM] === [][[]] + "") {
            td_oV[td_DM] = [];
        }
        if (typeof td_Ju[td_DM] === [][[]] + "") {
            td_kc.num_fields += 1;
            td_Ju[td_DM] = td_lw();
            td_Ju[td_DM].type = td_r5;
            td_gF(td_r5, td_op, td_TZ, null, null);
        }
        if (typeof td_kE[td_DM] === [][[]] + "") {
            td_kE[td_DM] = {};
        }
    }
    function td_E4(td_x, td_NQ, td_n8) {
        if (!td_Wp(td_n8) || td_n8 !== td_rH) {
            return;
        }
        if (!td_Wp(td_x.getModifierState)) {
            return;
        }
        if (typeof td_kE[td_NQ] !== [][[]] + "" && typeof td_kE[td_NQ][td_n8] !== [][[]] + "" && !td_x.getModifierState(((typeof (td_0b.tdz_c2e712e533454d3c8e5959d6fdda8817) !== "undefined" && typeof (td_0b.tdz_c2e712e533454d3c8e5959d6fdda8817.td_f) !== "undefined") ? (td_0b.tdz_c2e712e533454d3c8e5959d6fdda8817.td_f(73, 8)) : null))) {
            delete td_kE[td_NQ][td_n8];
            delete td_XW[td_n8];
        }
    }
    function td_ZG(td_x, td_ux, td_yb, td_Cu) {
        var td_fd = td_yB();
        if (td_fd.length > 0) {
            td_kc.num_neg_PR += 1;
            var td_HA;
            for (var td_cS in td_fd) {
                if (!td_fd.hasOwnProperty(td_cS) || !td_Wp(td_fd[td_cS])) {
                    continue;
                }
                td_HA = td_0b.parseInt(td_fd[td_cS]);
                if (!td_Wp(td_dU[td_ux])) {
                    td_dU[td_ux] = [];
                }
                if (td_6T(td_hJ, td_HA, 0) !== -1) {
                    td_dU[td_ux].push({
                        lk: td_fd,
                        k: td_lb(td_yb),
                        t: td_Cu
                    });
                    break;
                }
            }
        }
    }
    function td_As(td_x, td_Vj, td_C9, td_Cs) {
        var td_rJ = td_x.ctrlKey || td_x.metaKey || (td_RW && (td_RW.k === td_B0 || td_RW.k === td_LQ));
        if (td_rJ && td_C9 === td_rh) {
            td_Ju[td_Vj].copy.push(td_Cs);
        } else {
            if (td_C9 === td_eX) {
                td_Ju[td_Vj].tab.push(td_Cs);
            } else {
                if (td_C9 === td_rH) {
                    td_kc.is_caps += 1;
                } else {
                    if (td_C9 === td_E8) {
                        td_kc.num_shift += 1;
                    }
                }
            }
        }
    }
    function td_Gq(td_x, td_mF, td_C8) {
        td_RW = td_xJ();
        td_RW.k = td_mF;
        td_RW.t = td_C8;
        if (typeof td_x.shiftKey !== [][[]] + "") {
            td_RW.shiftKey = td_x.shiftKey;
        } else {
            td_RW.shiftKey = false;
        }
        if (typeof td_x.altKey !== [][[]] + "") {
            td_RW.altKey = td_x.altKey;
        } else {
            td_RW.altKey = false;
        }
        if (typeof td_x.ctrlKey !== [][[]] + "") {
            td_RW.ctrlKey = td_x.ctrlKey;
        } else {
            td_RW.ctrlKey = false;
        }
        if (typeof td_x.metaKey !== [][[]] + "") {
            td_RW.metaKey = td_x.metaKey;
        } else {
            td_RW.metaKey = false;
        }
        if (td_mF === td_eX) {
            td_RW.tabKey = true;
        }
    }
    function td_Zy(td_x, td_Vm, td_Oo) {
        var td_Ij = (!td_Wp(td_kE[td_Vm]) || (td_Wp(td_Ju[td_Vm]) && td_Ju[td_Vm].kcount === 0));
        var td_jP = td_Oo > 0;
        return (td_Ij && td_jP);
    }
    function td_On(td_zx) {
        var td_PZ = 0;
        if (td_Wp(td_E2[td_zx])) {
            td_PZ = td_E2[td_zx].dataKeyCount;
        }
        if (td_PZ === 0 && (td_Wp(td_Ju[td_zx]) && td_Ju[td_zx].kcount > 0)) {
            td_PZ = td_Ju[td_zx].kcount - td_kc.num_errors;
        }
        if (td_PZ === 0 && td_Wp(td_oV[td_zx]) && td_oV[td_zx].length > 0) {
            td_PZ = td_oV[td_zx].length;
        }
        return td_PZ;
    }
    function td_Nr(td_wV, td_jl) {
        var td_KT = !td_Wp(td_Ju[td_wV]) || !td_Wp(td_Ju[td_wV].paste) || !td_Wp(td_Ju[td_wV].paste.length) || td_Ju[td_wV].paste.length === 0;
        if (td_KT) {
            return true;
        }
        var td_mT = td_Wp(td_jl) && td_Wp(td_ii);
        var td_Kq = true;
        if (td_mT && td_Ju[td_wV].paste.length > 0) {
            td_Kq = (td_jl - 20) > td_Ju[td_wV].paste[(td_Ju[td_wV].paste.length - 1)];
        }
        return td_Kq;
    }
    function td_Ek(td_x) {
        var td_iz = td_0b.getEventTargetHtmlTag(td_x);
        return (td_iz !== ((typeof (td_0b.tdz_c2e712e533454d3c8e5959d6fdda8817) !== "undefined" && typeof (td_0b.tdz_c2e712e533454d3c8e5959d6fdda8817.td_f) !== "undefined") ? (td_0b.tdz_c2e712e533454d3c8e5959d6fdda8817.td_f(27, 5)) : null) && td_iz !== ((typeof (td_0b.tdz_c2e712e533454d3c8e5959d6fdda8817) !== "undefined" && typeof (td_0b.tdz_c2e712e533454d3c8e5959d6fdda8817.td_f) !== "undefined") ? (td_0b.tdz_c2e712e533454d3c8e5959d6fdda8817.td_f(81, 8)) : null) && td_iz !== ((typeof (td_0b.tdz_c2e712e533454d3c8e5959d6fdda8817) !== "undefined" && typeof (td_0b.tdz_c2e712e533454d3c8e5959d6fdda8817.td_f) !== "undefined") ? (td_0b.tdz_c2e712e533454d3c8e5959d6fdda8817.td_f(89, 6)) : null));
    }
    function td_UD(td_x) {
        try {
            if (!td_Wp(td_x)) {
                return;
            }
            if (td_fH(td_x)) {
                return;
            }
            td_KZ(td_x);
            var td_lK = td_QL(td_x);
            var td_n9 = td_lK[td_Qu];
            if (td_Ek(td_x)) {
                return;
            }
            td_fV(td_x);
        } catch (td_Qc) {}
    }
    function td_fV(td_x) {
        try {
            if (!td_Wp(td_x)) {
                return;
            }
            if (td_fH(td_x)) {
                return;
            }
            td_KZ(td_x);
            var td_JP = td_QL(td_x);
            var td_X7 = td_JP[td_Qu];
            var td_gR = td_JP[td_W5];
            if (td_gR === null) {
                td_gR = td_JP[td_vu];
            }
            var td_Cl = td_Gz();
            var td_Po = td_On(td_gR);
            var td_dW = td_Zy(td_x, td_gR, td_Po);
            var td_zM = td_0b.getEventTargetValueLength(td_x);
            var td_B4 = (td_Po > 0 && td_Po < td_zM);
            var td_eF = td_Nr(td_gR, td_Cl);
            if (td_Kz(td_JP[td_Qu])) {
                td_b8(td_KP.getTargetName(td_JP), td_zM);
            }
            if (td_eF) {
                td_rq(td_JP[td_vu], td_JP[td_W5], td_X7);
                if (td_dW) {
                    td_Ju[td_gR].autofill.push(td_Cl);
                    td_Ju[td_gR].fill = ((typeof (td_0b.tdz_c2e712e533454d3c8e5959d6fdda8817) !== "undefined" && typeof (td_0b.tdz_c2e712e533454d3c8e5959d6fdda8817.td_f) !== "undefined") ? (td_0b.tdz_c2e712e533454d3c8e5959d6fdda8817.td_f(32, 10)) : null);
                    td_f7 = true;
                    var td_DY = td_0b.getEventTargetValue(td_x);
                    td_gF(td_X7, td_JP[td_vu], td_JP[td_W5], td_FB, td_DY);
                } else {
                    if (td_B4 && td_Cl > td_eQ) {
                        td_Ju[td_gR].autofill.push(td_Cl);
                        td_Ju[td_gR].fill = ((typeof (td_0b.tdz_c2e712e533454d3c8e5959d6fdda8817) !== "undefined" && typeof (td_0b.tdz_c2e712e533454d3c8e5959d6fdda8817.td_f) !== "undefined") ? (td_0b.tdz_c2e712e533454d3c8e5959d6fdda8817.td_f(95, 12)) : null);
                        td_f7 = true;
                        var td_DY = td_0b.getEventTargetValue(td_x);
                        td_gF(td_X7, td_JP[td_vu], td_JP[td_W5], td_F2, td_DY);
                    }
                }
            } else {}
        } catch (td_lV) {}
    }
    function td_mE(td_x) {
        try {
            td_u2 = 1;
            if (!td_Wp(td_x)) {
                return;
            }
            if (td_fH(td_x)) {
                return;
            }
            td_KZ(td_x);
            var td_qn = td_QL(td_x);
            if (td_Ek(td_x)) {
                return;
            }
            var td_LL = td_qn[td_Qu];
            var td_GQ = td_qn[td_W5];
            if (td_GQ === null) {
                td_GQ = td_qn[td_vu];
            }
            td_rq(td_qn[td_vu], td_qn[td_W5], td_LL);
            td_Ju[td_GQ].paste.push(td_Gz());
            td_Ju[td_GQ].fill = ((typeof (td_0b.tdz_c2e712e533454d3c8e5959d6fdda8817) !== "undefined" && typeof (td_0b.tdz_c2e712e533454d3c8e5959d6fdda8817.td_f) !== "undefined") ? (td_0b.tdz_c2e712e533454d3c8e5959d6fdda8817.td_f(107, 5)) : null);
            td_f7 = true;
            var td_eI = td_0b.getEventTargetValue(td_x);
            td_gF(td_LL, td_qn[td_vu], td_qn[td_W5], td_Cy, td_eI);
        } catch (td_dv) {}
    }
    function td_Gf(td_x) {
        try {
            if (!td_Wp(td_x)) {
                return;
            }
            if (td_fH(td_x)) {
                return;
            }
            td_KZ(td_x);
            var td_SD = td_QL(td_x);
            var td_bj = td_SD[td_Qu];
            var td_Pc = td_SD[td_W5];
            if (td_Pc === null) {
                td_Pc = td_SD[td_vu];
            }
            td_rq(td_SD[td_vu], td_SD[td_W5], td_bj);
            var td_wW = td_Gz();
            td_Ju[td_Pc].cut.push(td_wW);
            td_f7 = true;
        } catch (td_Lz) {}
    }
    function td_gB(td_x) {
        try {
            if (!td_Wp(td_x)) {
                return;
            }
            if (td_fH(td_x)) {
                return;
            }
            td_KZ(td_x);
            var td_o5 = td_QL(td_x);
            var td_aJ = td_o5[td_Qu];
            var td_zb = td_o5[td_W5];
            if (td_zb === null) {
                td_zb = td_o5[td_vu];
            }
            if (td_Ek(td_x)) {
                return;
            }
            td_rq(td_o5[td_vu], td_o5[td_W5], td_aJ);
            td_Ju[td_zb].access.push("m");
            td_p4 = {
                "\x6e\x61\x6d\x65": td_zb,
                t: td_Gz()
            };
            td_f7 = true;
        } catch (td_R8) {}
    }
    function td_nY(td_x) {
        try {
            if (!td_Wp(td_x)) {
                return;
            }
            if (td_fH(td_x)) {
                return;
            }
            td_KZ(td_x);
            var td_sG = td_QL(td_x);
            var td_H2 = td_sG[td_Qu];
            var td_uP = td_sG[td_W5];
            if (td_uP === null) {
                td_uP = td_sG[td_vu];
            }
            if (td_Ek(td_x)) {
                return;
            }
            td_rq(td_sG[td_vu], td_sG[td_W5], td_H2);
            var td_OY = td_Gz();
            if (td_OY > td_eU) {
                td_OY = 0;
            } else {
                if (td_OY > 0 && td_YD > 0) {
                    td_FS.push(Math.abs(td_OY - td_YD));
                }
            }
            if (typeof td_XV[td_uP] === [][[]] + "") {
                td_XV[td_uP] = [];
            }
            td_XV[td_uP].push(Math.floor(td_OY));
            td_ip(td_uP, td_Ju[td_uP].access);
            td_f7 = true;
        } catch (td_dB) {}
    }
    function td_ip(td_R5, td_dV) {
        var td_nE = (typeof td_R5 !== [][[]] + "" && td_R5 !== null && td_R5 !== [][[]] + "");
        var td_BA = (td_p4 !== null && td_p4.t !== null && (td_wL < (td_Gz() - td_p4.t)));
        var td_DT = (td_RW !== null && td_RW.t !== null && (td_wL < (td_Gz() - td_RW.t)));
        if (!td_nE || (!td_BA && !td_DT)) {
            return;
        }
        if (td_p4 !== null && td_p4.name !== null && td_p4.name === td_R5) {
            return;
        }
        var td_Bn = td_MC();
        switch (td_RW.k) {
        case td_eX:
            td_dV.push(td_Bn + ((typeof (td_0b.tdz_c2e712e533454d3c8e5959d6fdda8817) !== "undefined" && typeof (td_0b.tdz_c2e712e533454d3c8e5959d6fdda8817.td_f) !== "undefined") ? (td_0b.tdz_c2e712e533454d3c8e5959d6fdda8817.td_f(0, 3)) : null));
            break;
        case td_pb:
            td_dV.push(td_Bn + ((typeof (td_0b.tdz_c2e712e533454d3c8e5959d6fdda8817) !== "undefined" && typeof (td_0b.tdz_c2e712e533454d3c8e5959d6fdda8817.td_f) !== "undefined") ? (td_0b.tdz_c2e712e533454d3c8e5959d6fdda8817.td_f(112, 5)) : null));
            break;
        case td_sc:
            td_dV.push(td_Bn + ((typeof (td_0b.tdz_c2e712e533454d3c8e5959d6fdda8817) !== "undefined" && typeof (td_0b.tdz_c2e712e533454d3c8e5959d6fdda8817.td_f) !== "undefined") ? (td_0b.tdz_c2e712e533454d3c8e5959d6fdda8817.td_f(117, 9)) : null));
            break;
        case td_Zp:
            td_dV.push(td_Bn + ((typeof (td_0b.tdz_c2e712e533454d3c8e5959d6fdda8817) !== "undefined" && typeof (td_0b.tdz_c2e712e533454d3c8e5959d6fdda8817.td_f) !== "undefined") ? (td_0b.tdz_c2e712e533454d3c8e5959d6fdda8817.td_f(126, 7)) : null));
            break;
        case td_xG:
            td_dV.push(td_Bn + ((typeof (td_0b.tdz_c2e712e533454d3c8e5959d6fdda8817) !== "undefined" && typeof (td_0b.tdz_c2e712e533454d3c8e5959d6fdda8817.td_f) !== "undefined") ? (td_0b.tdz_c2e712e533454d3c8e5959d6fdda8817.td_f(133, 10)) : null));
            break;
        case td_Pj:
            td_dV.push(td_Bn + ((typeof (td_0b.tdz_c2e712e533454d3c8e5959d6fdda8817) !== "undefined" && typeof (td_0b.tdz_c2e712e533454d3c8e5959d6fdda8817.td_f) !== "undefined") ? (td_0b.tdz_c2e712e533454d3c8e5959d6fdda8817.td_f(143, 9)) : null));
            break;
        default:
            td_dV.push(td_Bn + ((typeof (td_0b.tdz_c2e712e533454d3c8e5959d6fdda8817) !== "undefined" && typeof (td_0b.tdz_c2e712e533454d3c8e5959d6fdda8817.td_f) !== "undefined") ? (td_0b.tdz_c2e712e533454d3c8e5959d6fdda8817.td_f(152, 5)) : null));
        }
    }
    function td_MC() {
        if (td_RW.shiftKey) {
            return ((typeof (td_0b.tdz_c2e712e533454d3c8e5959d6fdda8817) !== "undefined" && typeof (td_0b.tdz_c2e712e533454d3c8e5959d6fdda8817.td_f) !== "undefined") ? (td_0b.tdz_c2e712e533454d3c8e5959d6fdda8817.td_f(157, 5)) : null);
        } else {
            if (td_RW.altKey) {
                return ((typeof (td_0b.tdz_c2e712e533454d3c8e5959d6fdda8817) !== "undefined" && typeof (td_0b.tdz_c2e712e533454d3c8e5959d6fdda8817.td_f) !== "undefined") ? (td_0b.tdz_c2e712e533454d3c8e5959d6fdda8817.td_f(162, 3)) : null);
            } else {
                if (td_RW.ctrlKey) {
                    return Number(350931).toString(30);
                } else {
                    if (td_RW.metaKey) {
                        return Number(607480).toString(30);
                    }
                }
            }
        }
        return "";
    }
    function td_JR(td_x) {
        try {
            if (!td_Wp(td_x)) {
                return;
            }
            if (td_fH(td_x)) {
                return;
            }
            td_KZ(td_x);
            var td_AM = td_QL(td_x);
            var td_Ht = td_AM[td_Qu];
            var td_BG = td_AM[td_W5];
            if (td_BG === null) {
                td_BG = td_AM[td_vu];
            }
            if (td_Ek(td_x)) {
                return;
            }
            td_iQ = td_BG;
            td_rq(td_AM[td_vu], td_AM[td_W5], td_Ht);
            var td_sD = 0;
            if (typeof td_XV[td_BG] === [][[]] + "" || td_XV[td_BG] === null) {
                td_XV[td_BG] = [];
            } else {
                if (td_XV[td_BG].length > 0) {
                    td_sD = td_XV[td_BG][(td_XV[td_BG].length - 1)];
                    if (typeof td_sD === [][[]] + "" || td_sD === null || td_sD === [][[]] + "") {
                        td_sD = 0;
                    }
                }
            }
            var td_Jl = td_Gz();
            if (td_Jl > td_eU) {
                td_Jl = 0;
            } else {
                if (td_Jl > 0) {
                    td_YD = td_Jl;
                }
            }
            var td_zQ = Math.floor(td_Jl);
            if (typeof td_sD === [][[]] + "" || td_sD === null || td_sD === 0) {
                td_sD = td_zQ;
                td_Th = td_BG;
            }
            var td_ji = Math.abs(td_zQ - td_sD);
            if (td_xf > td_ji && td_Ju[td_BG].fill !== ((typeof (td_0b.tdz_c2e712e533454d3c8e5959d6fdda8817) !== "undefined" && typeof (td_0b.tdz_c2e712e533454d3c8e5959d6fdda8817.td_f) !== "undefined") ? (td_0b.tdz_c2e712e533454d3c8e5959d6fdda8817.td_f(32, 10)) : null) && td_Ju[td_BG].fill !== ((typeof (td_0b.tdz_c2e712e533454d3c8e5959d6fdda8817) !== "undefined" && typeof (td_0b.tdz_c2e712e533454d3c8e5959d6fdda8817.td_f) !== "undefined") ? (td_0b.tdz_c2e712e533454d3c8e5959d6fdda8817.td_f(95, 12)) : null) && !td_n1()) {
                if (!td_Ap.hasOwnProperty(td_BG)) {
                    td_Ap[td_BG] = [];
                }
                td_Ap[td_BG].push(td_ji);
            }
            td_kc.total_time_taken += td_ji;
            td_Ju[td_BG].time.push([td_sD, td_zQ, td_ji]);
            td_f7 = true;
            td_fV(td_x);
        } catch (td_sQ) {}
    }
    function td_J0(td_dV) {
        try {
            var td_Vy = null;
            if (td_Wp(performance) && td_Wp(performance.navigation)) {
                var td_Sd = performance.navigation;
                if (td_Wp(td_Sd.type) && td_Sd.type === 1) {
                    td_Vy = true;
                }
            }
            if (td_Vy === null && td_Wp(performance) && td_Wp(performance.getEntriesByType)) {
                var td_vI = performance.getEntriesByType(((typeof (td_0b.tdz_c2e712e533454d3c8e5959d6fdda8817) !== "undefined" && typeof (td_0b.tdz_c2e712e533454d3c8e5959d6fdda8817.td_f) !== "undefined") ? (td_0b.tdz_c2e712e533454d3c8e5959d6fdda8817.td_f(165, 10)) : null));
                if (td_Wp(td_vI)) {
                    for (var td_wS = 0; td_wS < td_vI.length; ++td_wS) {
                        if (td_Wp(td_vI[td_wS]) && td_Wp(td_vI[td_wS].type) && td_vI[td_wS].type === ((typeof (td_0b.tdz_c2e712e533454d3c8e5959d6fdda8817) !== "undefined" && typeof (td_0b.tdz_c2e712e533454d3c8e5959d6fdda8817.td_f) !== "undefined") ? (td_0b.tdz_c2e712e533454d3c8e5959d6fdda8817.td_f(175, 6)) : null)) {
                            td_Vy = true;
                            break;
                        }
                    }
                }
            }
            if (td_Vy === null && td_Wp(td_RW) && typeof td_RW.metaKey !== [][[]] + "" && td_Wp(td_RW.t)) {
                var td_nz = td_yB();
                var td_pR = (td_RW.metaKey && td_nz.length > 0);
                var td_CK = (td_Lo >= (td_Gz() - td_RW.t));
                if (td_pR && td_CK) {
                    td_Vy = true;
                }
            }
            if (td_Vy !== null && td_Vy === true) {
                td_Ju.refresh = Number(890830).toString(31);
            } else {}
        } catch (td_ra) {}
    }
    this.deepCopyJson = function(td_c8) {
        var td_L3 = JSON.stringify(td_c8);
        if (!td_Wp(td_L3)) {
            return null;
        }
        return JSON.parse(td_L3);
    }
    ;
    this.pruneEmptyData = function(td_E5) {
        if (typeof td_E5 === [][[]] + "" || typeof td_E5 !== ((typeof (td_0b.tdz_c2e712e533454d3c8e5959d6fdda8817) !== "undefined" && typeof (td_0b.tdz_c2e712e533454d3c8e5959d6fdda8817.td_f) !== "undefined") ? (td_0b.tdz_c2e712e533454d3c8e5959d6fdda8817.td_f(181, 6)) : null)) {
            return;
        }
        for (var td_ti in td_E5) {
            if (!td_E5.hasOwnProperty(td_ti)) {
                continue;
            }
            if (typeof td_E5[td_ti] === ((typeof (td_0b.tdz_c2e712e533454d3c8e5959d6fdda8817) !== "undefined" && typeof (td_0b.tdz_c2e712e533454d3c8e5959d6fdda8817.td_f) !== "undefined") ? (td_0b.tdz_c2e712e533454d3c8e5959d6fdda8817.td_f(181, 6)) : null) && td_E5[td_ti] !== null) {
                if (td_E5[td_ti].length === 0) {
                    delete td_E5[td_ti];
                } else {
                    this.pruneEmptyData(td_E5[td_ti]);
                }
            }
            if (td_Wp(td_E5[td_ti]) && typeof td_E5[td_ti][((typeof (td_0b.tdz_c2e712e533454d3c8e5959d6fdda8817) !== "undefined" && typeof (td_0b.tdz_c2e712e533454d3c8e5959d6fdda8817.td_f) !== "undefined") ? (td_0b.tdz_c2e712e533454d3c8e5959d6fdda8817.td_f(187, 6)) : null)] === [][[]] + "" && td_Wp(td_E5[td_ti][((typeof (td_0b.tdz_c2e712e533454d3c8e5959d6fdda8817) !== "undefined" && typeof (td_0b.tdz_c2e712e533454d3c8e5959d6fdda8817.td_f) !== "undefined") ? (td_0b.tdz_c2e712e533454d3c8e5959d6fdda8817.td_f(193, 5)) : null)]) && td_E5[td_ti][((typeof (td_0b.tdz_c2e712e533454d3c8e5959d6fdda8817) !== "undefined" && typeof (td_0b.tdz_c2e712e533454d3c8e5959d6fdda8817.td_f) !== "undefined") ? (td_0b.tdz_c2e712e533454d3c8e5959d6fdda8817.td_f(193, 5)) : null)] === 0) {
                delete td_E5[td_ti][((typeof (td_0b.tdz_c2e712e533454d3c8e5959d6fdda8817) !== "undefined" && typeof (td_0b.tdz_c2e712e533454d3c8e5959d6fdda8817.td_f) !== "undefined") ? (td_0b.tdz_c2e712e533454d3c8e5959d6fdda8817.td_f(193, 5)) : null)];
            }
        }
    }
    ;
    function td_W1(td_YC) {
        if (!td_Wp(td_YC)) {
            return null;
        }
        var td_Xw = [];
        var td_wf = 0;
        try {
            for (var td_U2 in td_YC) {
                if (!td_YC.hasOwnProperty(td_U2)) {
                    continue;
                }
                var td_jd = td_YC[td_U2];
                if (3 > td_jd.length) {
                    continue;
                }
                var td_y2 = td_jd.length;
                if (td_jd.length % 2 > 0) {
                    td_y2 -= 1;
                }
                for (var td_de = 1; td_de < td_y2; td_de += 2) {
                    td_wf = td_jd[(td_de)][1] - td_jd[(td_de - 1)][2];
                    if (td_wf > 0) {
                        td_Xw.push(td_wf);
                    }
                }
            }
            return td_Xw;
        } catch (td_T5) {}
        return null;
    }
    function td_Rp(td_rA) {
        if (!td_Wp(td_rA)) {
            return null;
        }
        var td_YE = td_0b.toFixed(td_0b._mean(td_rA), td_Iz);
        var td_LN = td_0b.toFixed(td_0b._std_dev(td_rA, td_YE), td_Iz);
        return (td_LN <= td_Hf);
    }
    function td_q7() {
        var td_ac = 0;
        for (var td_er in td_Ap) {
            if (td_Ap.hasOwnProperty(td_er) && td_er.indexOf(((typeof (td_0b.tdz_c2e712e533454d3c8e5959d6fdda8817) !== "undefined" && typeof (td_0b.tdz_c2e712e533454d3c8e5959d6fdda8817.td_f) !== "undefined") ? (td_0b.tdz_c2e712e533454d3c8e5959d6fdda8817.td_f(198, 4)) : null)) === -1) {
                var td_yi = 0;
                for (var td_S1 in td_Ap[td_er]) {
                    if (td_Ap[td_er].hasOwnProperty(td_S1)) {
                        td_yi += td_Ap[td_er][td_S1];
                    }
                }
                if (td_xf >= td_yi) {
                    td_ac += 1;
                }
            }
        }
        return (td_ac >= (td_kc.num_fields * 0.75)) ? 1 : 0;
    }
    function td_BC(td_NU, td_gc, td_dy) {
        var td_ED = td_0b.toFixed(td_0b._mean(td_dy), td_Iz);
        td_NU[td_gc + ((typeof (td_0b.tdz_c2e712e533454d3c8e5959d6fdda8817) !== "undefined" && typeof (td_0b.tdz_c2e712e533454d3c8e5959d6fdda8817.td_f) !== "undefined") ? (td_0b.tdz_c2e712e533454d3c8e5959d6fdda8817.td_f(202, 4)) : null)] = td_0b.toFixed(Math.min.apply(null, td_dy), td_Iz);
        td_NU[td_gc + ((typeof (td_0b.tdz_c2e712e533454d3c8e5959d6fdda8817) !== "undefined" && typeof (td_0b.tdz_c2e712e533454d3c8e5959d6fdda8817.td_f) !== "undefined") ? (td_0b.tdz_c2e712e533454d3c8e5959d6fdda8817.td_f(206, 4)) : null)] = td_0b.toFixed(Math.max.apply(null, td_dy), td_Iz);
        td_NU[td_gc + ((typeof (td_0b.tdz_c2e712e533454d3c8e5959d6fdda8817) !== "undefined" && typeof (td_0b.tdz_c2e712e533454d3c8e5959d6fdda8817.td_f) !== "undefined") ? (td_0b.tdz_c2e712e533454d3c8e5959d6fdda8817.td_f(210, 4)) : null)] = td_ED;
        td_NU[td_gc + ((typeof (td_0b.tdz_c2e712e533454d3c8e5959d6fdda8817) !== "undefined" && typeof (td_0b.tdz_c2e712e533454d3c8e5959d6fdda8817.td_f) !== "undefined") ? (td_0b.tdz_c2e712e533454d3c8e5959d6fdda8817.td_f(214, 4)) : null)] = td_0b.toFixed(td_0b._std_dev(td_dy, td_ED), td_Iz);
    }
    function td_y7(td_xQ, td_rT) {
        if (!td_Wp(td_xQ) || !td_Wp(td_rT) || td_rT.length < 1) {
            return;
        }
        var td_Ku = [];
        var td_tf = [];
        var td_tl = [];
        var td_DQ = [];
        var td_XF = [];
        var td_Pq = [];
        for (var td_ug in td_rT) {
            if (!td_rT.hasOwnProperty(td_ug)) {
                continue;
            }
            var td_u9 = td_rT[td_ug];
            if (td_u9.length < 1) {
                continue;
            }
            if (td_Wp(td_u9.sort)) {
                td_u9.sort(function(td_Ow, td_up) {
                    return td_Ow[0] - td_up[0];
                });
            }
            for (var td_ge = 0; td_ge < td_u9.length; ++td_ge) {
                var td_Pe = td_u9[td_ge][1] - td_u9[td_ge][0];
                td_Ku.push((td_Pe < 0 ? 0 : td_Pe));
                if (td_ge >= 2) {
                    td_DQ.push(td_u9[td_ge][0] - td_u9[(td_ge - 2)][0]);
                    td_Pq.push(td_u9[td_ge][1] - td_u9[(td_ge - 2)][1]);
                }
                if (td_ge >= 1) {
                    td_tl.push(td_u9[td_ge][0] - td_u9[(td_ge - 1)][0]);
                    td_XF.push(td_u9[td_ge][1] - td_u9[(td_ge - 1)][1]);
                    td_tf.push(td_u9[td_ge][0] - td_u9[(td_ge - 1)][1]);
                }
            }
        }
        if (td_Ku.length > 0) {
            td_BC(td_xQ, ((typeof (td_0b.tdz_c2e712e533454d3c8e5959d6fdda8817) !== "undefined" && typeof (td_0b.tdz_c2e712e533454d3c8e5959d6fdda8817.td_f) !== "undefined") ? (td_0b.tdz_c2e712e533454d3c8e5959d6fdda8817.td_f(218, 5)) : null), td_Ku);
        }
        if (td_tf.length > 0) {
            td_BC(td_xQ, ((typeof (td_0b.tdz_c2e712e533454d3c8e5959d6fdda8817) !== "undefined" && typeof (td_0b.tdz_c2e712e533454d3c8e5959d6fdda8817.td_f) !== "undefined") ? (td_0b.tdz_c2e712e533454d3c8e5959d6fdda8817.td_f(223, 6)) : null), td_tf);
        }
        if (td_tl.length > 0) {
            td_BC(td_xQ, ((typeof (td_0b.tdz_c2e712e533454d3c8e5959d6fdda8817) !== "undefined" && typeof (td_0b.tdz_c2e712e533454d3c8e5959d6fdda8817.td_f) !== "undefined") ? (td_0b.tdz_c2e712e533454d3c8e5959d6fdda8817.td_f(229, 3)) : null), td_tl);
        }
        if (td_DQ.length > 0) {
            td_BC(td_xQ, ((typeof (td_0b.tdz_c2e712e533454d3c8e5959d6fdda8817) !== "undefined" && typeof (td_0b.tdz_c2e712e533454d3c8e5959d6fdda8817.td_f) !== "undefined") ? (td_0b.tdz_c2e712e533454d3c8e5959d6fdda8817.td_f(232, 3)) : null), td_DQ);
        }
        if (td_XF.length > 0) {
            td_BC(td_xQ, ((typeof (td_0b.tdz_c2e712e533454d3c8e5959d6fdda8817) !== "undefined" && typeof (td_0b.tdz_c2e712e533454d3c8e5959d6fdda8817.td_f) !== "undefined") ? (td_0b.tdz_c2e712e533454d3c8e5959d6fdda8817.td_f(235, 3)) : null), td_XF);
        }
        if (td_Pq.length > 0) {
            td_BC(td_xQ, ((typeof (td_0b.tdz_c2e712e533454d3c8e5959d6fdda8817) !== "undefined" && typeof (td_0b.tdz_c2e712e533454d3c8e5959d6fdda8817.td_f) !== "undefined") ? (td_0b.tdz_c2e712e533454d3c8e5959d6fdda8817.td_f(238, 3)) : null), td_Pq);
        }
    }
    this.getstats = function() {
        var td_cx = [];
        td_Jd.length = 0;
        var td_xI;
        for (var td_NT in td_oV) {
            if (!td_oV.hasOwnProperty(td_NT)) {
                continue;
            }
            td_cx[td_NT] = [];
            for (var td_TV = 0; td_TV < td_oV[td_NT].length; ++td_TV) {
                td_cx[td_NT].push(td_oV[td_NT][td_TV]);
                if (td_oV[td_NT][td_TV][0] > (td_FH - td_ii)) {
                    td_xI = this.deepCopyJson(td_oV[td_NT][td_TV]);
                    if (td_xI === null) {
                        continue;
                    }
                    td_xI.push(td_NT);
                    td_Jd.push(td_xI);
                }
            }
            if (typeof td_Ju[td_NT] !== [][[]] + "") {
                if (typeof td_Ju[td_NT][((typeof (td_0b.tdz_c2e712e533454d3c8e5959d6fdda8817) !== "undefined" && typeof (td_0b.tdz_c2e712e533454d3c8e5959d6fdda8817.td_f) !== "undefined") ? (td_0b.tdz_c2e712e533454d3c8e5959d6fdda8817.td_f(187, 6)) : null)] !== [][[]] + "") {
                    td_Ju[td_NT].count = td_Ju[td_NT].access.length;
                    if (td_Th !== null && td_Th === td_NT) {
                        td_Ju[td_NT].count += 1;
                    }
                }
                td_aO.cut += td_Ju[td_NT].cut.length;
                td_aO.copy += td_Ju[td_NT].copy.length;
                td_aO.paste += td_Ju[td_NT].paste.length;
                td_aO.tab += td_Ju[td_NT].tab.length;
            }
        }
        td_y7(td_aO, td_oV);
        if (typeof td_Jd.sort !== [][[]] + "") {
            td_Jd.sort(function(td_WV, td_Lt) {
                return td_WV[0] - td_Lt[0];
            });
        }
        td_aO.auto = td_yt;
        td_aO.onpaste = (td_u2 > 0) ? 1 : 0;
        td_aO.anl = td_kc.num_alphaNum;
        td_aO.snc = td_kc.num_special_characters;
        td_aO.fni = td_kc.num_fields;
        td_aO.snh = td_kc.num_shift;
        td_aO.enr = td_kc.num_errors;
        td_aO.nnp = td_kc.num_neg_PR;
        td_aO.cis = (td_kc.is_caps > 0) ? 1 : 0;
        td_aO.ttt = td_kc.total_time_taken;
        if (td_FS.length > 0) {
            td_aO.wmf = Math.min.apply(null, td_FS);
            td_aO.wmb = Math.max.apply(null, td_FS);
            td_aO.wab = td_0b.toFixed(td_0b._mean(td_FS), td_Iz);
        } else {
            td_aO.wmf = 0;
            td_aO.wmb = 0;
            td_aO.wab = 0;
        }
        td_aO.qiu = td_q7();
        td_aO.lfr = td_0b.toFixed((td_Gz() / td_kc.total_time_taken), td_Iz);
        td_aO.tsi = (td_Rp(td_W1(td_cx))) ? 1 : 0;
        td_Ju[((typeof (td_0b.tdz_c2e712e533454d3c8e5959d6fdda8817) !== "undefined" && typeof (td_0b.tdz_c2e712e533454d3c8e5959d6fdda8817.td_f) !== "undefined") ? (td_0b.tdz_c2e712e533454d3c8e5959d6fdda8817.td_f(241, 5)) : null)] = td_ii;
        td_Ju[((typeof (td_0b.tdz_c2e712e533454d3c8e5959d6fdda8817) !== "undefined" && typeof (td_0b.tdz_c2e712e533454d3c8e5959d6fdda8817.td_f) !== "undefined") ? (td_0b.tdz_c2e712e533454d3c8e5959d6fdda8817.td_f(246, 3)) : null)] = td_Gz();
    }
    ;
    function td_ML() {
        return {
            "\x6d_\x62\x61\x73\x65": td_ii,
            "\x56\x45\x52\x53\x49\x4f\x4e": td_Mq,
            "\x6b\x73\x74\x61\x74\x73": td_aO,
            "\x6d\x73\x74\x61\x74\x73": td_Ju,
            "\x63\x6f\x6d\x62\x6f\x44\x61\x74\x61": td_dU,
            "\x72\x61\x77\x74\x69\x6d\x65": td_Jd,
            "\x64\x61\x74\x61\x49\x6e\x74\x65\x67\x72\x69\x74\x79": td_fY,
            "\x65\x6e\x76": td_xm,
            "\x64\x61\x74\x61": td_dL,
        };
    }
    function td_AT() {
        if ((td_z7 && td_Ld && td_j5) || td_pL() - td_FH < td_dk || !td_f7) {
            return;
        }
        var td_Yy = td_Yz();
        td_FH = td_pL();
        td_f7 = false;
        if (td_Yy) {
            td_v4();
        }
    }
    function td_Bh() {
        td_Ju.ver = td_Mq;
        td_ii = td_KP.getBaseTimestamp();
        td_Ju[((typeof (td_0b.tdz_c2e712e533454d3c8e5959d6fdda8817) !== "undefined" && typeof (td_0b.tdz_c2e712e533454d3c8e5959d6fdda8817.td_f) !== "undefined") ? (td_0b.tdz_c2e712e533454d3c8e5959d6fdda8817.td_f(241, 5)) : null)] = td_ii;
        td_Ju[((typeof (td_0b.tdz_c2e712e533454d3c8e5959d6fdda8817) !== "undefined" && typeof (td_0b.tdz_c2e712e533454d3c8e5959d6fdda8817.td_f) !== "undefined") ? (td_0b.tdz_c2e712e533454d3c8e5959d6fdda8817.td_f(246, 3)) : null)] = 0;
        try {
            td_cy = td_0b.td_4a(td_2u).document;
            td_3h(td_cy, td_3l, td_rt);
            td_3h(td_cy, td_4j, td_ks);
            td_3h(td_cy, td_6s, td_fV, true);
            td_3h(td_cy, td_5P, td_Gf);
            td_J(td_cy, td_5q, td_mE, td_lI, true);
            td_J(td_cy, td_6c, td_nY, td_lI, true);
            td_3h(td_cy, td_3i, td_UD);
            td_J(td_cy, td_4v, td_JR, td_lI, true);
            td_3h(td_cy, td_2X, td_gB, true);
            if (typeof navigator !== [][[]] + "" && typeof navigator.sendBeacon !== [][[]] + "") {
                td_J(td_cy, td_6L, td_J0, td_lI);
                td_J(td_cy, td_4M, td_J0, td_lI);
            }
            td_J(window, td_6L, td_v4, td_lI);
            td_J(window, td_4M, td_v4, td_lI);
        } catch (td_DA) {}
        if (td_S9 === null) {
            td_tZ = setInterval(td_AT, td_lU);
        } else {
            td_tZ = td_S9(td_AT);
        }
        td_ZD = setTimeout(td_v4, td_da);
    }
    function td_qZ(td_oA) {
        td_tZ = td_oA;
    }
    function td_v4() {
        try {
            if ((td_S9 === null && td_tZ !== null) || (td_S9 !== null && td_pG === 0)) {
                clearInterval(td_tZ);
                td_tZ = null;
            } else {
                if (td_S9) {
                    clearTimeout(td_tZ);
                }
            }
            if (td_ZD) {
                clearTimeout(td_ZD);
                td_ZD = null;
            }
            td_2O(td_cy, td_3l, td_rt);
            td_2O(td_cy, td_4j, td_ks);
            td_2O(td_cy, td_6s, td_fV, true);
            td_2O(td_cy, td_5P, td_Gf);
            td_X(td_cy, td_5q, td_mE, td_lI, true);
            td_X(td_cy, td_6c, td_nY, td_lI, true);
            td_2O(td_cy, td_3i, td_UD);
            td_X(td_cy, td_4v, td_JR, td_lI, true);
            td_2O(td_cy, td_2X, td_gB, true);
            if (td_ON) {
                td_2O(td_cy, td_E, td_VF);
                td_2O(td_cy, td_s, td_Tu);
            }
            if (typeof navigator !== [][[]] + "" && typeof navigator.sendBeacon !== [][[]] + "") {
                td_X(td_cy, td_6L, td_J0, td_lI);
                td_X(td_cy, td_4M, td_J0, td_lI);
            }
            td_X(window, td_6L, td_v4, td_lI);
            td_X(window, td_4M, td_v4, td_lI);
        } catch (td_zm) {}
    }
    if (!td_Wp(JSON) || !td_Wp(JSON.stringify) || !td_Wp(encodeURIComponent)) {
        return;
    }
    if (td_Wp(td_3q) && td_Wp(td_3q.set)) {
        td_SA = true;
        td_vk = td_3q.getKeypressFillType();
        td_Cy = td_3q.getPasteFillType();
        td_FB = td_3q.getAutofilFillType();
        td_F2 = td_3q.getAutocompleteFillType();
    } else {}
    if (td_Wp(td_4A)) {
        var td_hD = [td_lU, td_qZ];
        var td_tM = new td_4A(td_hD);
        td_pG = td_tM[0];
        td_S9 = td_tM[1];
    }
    if (typeof td_5Z !== [][[]] + "" && td_5Z !== null) {
        td_Lp = td_5Z();
        if (typeof td_Lp !== ((typeof (td_0b.tdz_c2e712e533454d3c8e5959d6fdda8817) !== "undefined" && typeof (td_0b.tdz_c2e712e533454d3c8e5959d6fdda8817.td_f) !== "undefined") ? (td_0b.tdz_c2e712e533454d3c8e5959d6fdda8817.td_f(181, 6)) : null) || td_Lp === null) {
            td_Lp = null;
        } else {
            td_Lp = td_Lp[3];
        }
    } else {}
    var td_xR = [];
    td_xR[td_0b.kb.VERSION_REF] = td_Mq;
    td_xR[td_0b.kb.BASE_HANDLE_REF] = this;
    td_xR[td_0b.kb.LEGACY_REPORT_REF] = null;
    td_xR[td_0b.kb.BHS_REPORT_REF] = null;
    td_xR[td_0b.kb.MAX_SIZE_ANALYTICS_REF] = td_QO;
    td_xR[td_0b.kb.MAX_SIZE_STAT_REF] = td_i1;
    td_xR[td_0b.kb.MAX_SIZE_COMBO_REF] = td_xi;
    td_xR[td_0b.kb.MAX_SIZE_BHSW] = td_ea;
    td_xR[td_0b.kb.MAX_SIZE_BHSKSTE] = td_AD;
    td_xR[td_0b.kb.MAX_SIZE_BHSKST] = td_Mx;
    td_xR[td_0b.kb.MAX_SIZE_BHSFDCXT] = td_kj;
    td_xR[td_0b.kb.HELPERS_REF] = td_ML();
    td_xR[td_0b.kb.CRIT_SELECTOR] = td_Lp;
    if (typeof td_2x !== [][[]] + "" && td_2x !== null) {
        var td_Ip = td_2x(td_xR);
        td_xR[td_0b.kb.LEGACY_REPORT_REF] = td_Wp(td_Ip) ? td_Ip : null;
    }
    if (typeof td_4n !== [][[]] + "" && td_4n !== null) {
        var td_P0 = td_4n(td_xR);
        td_xR[td_0b.kb.BHS_REPORT_REF] = td_Wp(td_P0) ? td_P0 : null;
        if (td_xR[td_0b.kb.BHS_REPORT_REF]) {
            td_pH = true;
        }
    }
    if (td_xR[td_0b.kb.LEGACY_REPORT_REF] === null && td_xR[td_0b.kb.BHS_REPORT_REF] === null) {
        return;
    }
    if (!td_Wp(td_jb)) {
        return;
    }
    td_KP = td_jb;
    if (!td_Wp(td_4i)) {
        return;
    }
    var td_bT = td_4i(td_xR);
    if (!td_Wp(td_bT)) {
        return;
    }
    td_Yz = td_bT[0];
    if (!td_Wp(td_Yz)) {
        return;
    }
    if (typeof td_6r !== [][[]] + "" && td_6r !== null && td_6r !== 0) {
        td_hH = (td_6r & td_0b.kb.TYPE_FILTER_OFFSET) === td_0b.kb.TYPE_FILTER_OFFSET;
    }
    td_Bh();
}
td_0b.tdz_f576b59346964bf4baf89285145e9f64 = new td_0b.td_6D("\x66\x35\x37\x36\x62\x35\x39\x33\x34\x36\x39\x36\x34\x62\x66\x34\x62\x61\x66\x38\x39\x32\x38\x35\x31\x34\x35\x65\x39\x66\x36\x34\x31\x33\x34\x36\x35\x32\x31\x36\x31\x31\x34\x31\x34\x62\x35\x61\x35\x37\x34\x32\x31\x66\x34\x33\x35\x35\x30\x65\x35\x62\x34\x66\x31\x66");
var td_0b = td_0b || {};
function td_4C() {
    ((typeof (td_0b.tdz_f576b59346964bf4baf89285145e9f64) !== "undefined" && typeof (td_0b.tdz_f576b59346964bf4baf89285145e9f64.td_f) !== "undefined") ? (td_0b.tdz_f576b59346964bf4baf89285145e9f64.td_f(0, 10)) : null);
    var td_wr = false;
    var td_TL = 512;
    this.tryAgain = function() {
        return !td_wr;
    }
    ;
    this.getFPParams = function() {
        if (td_wr) {
            return null;
        }
        td_wr = true;
        if (td_NJ(navigator) && td_NJ(navigator.userAgentData)) {
            var td_gz = {};
            if (td_NJ(navigator.userAgentData.brands)) {
                td_gz.brands = navigator.userAgentData.brands;
            }
            if (td_NJ(navigator.userAgentData.mobile)) {
                td_gz.mobile = navigator.userAgentData.mobile;
            }
            if (td_NJ(navigator.userAgentData.platform)) {
                td_gz.platform = navigator.userAgentData.platform;
            }
            if (td_o7(td_gz)) {
                return null;
            }
            var td_hF = ((typeof (td_0b.tdz_f576b59346964bf4baf89285145e9f64) !== "undefined" && typeof (td_0b.tdz_f576b59346964bf4baf89285145e9f64.td_f) !== "undefined") ? (td_0b.tdz_f576b59346964bf4baf89285145e9f64.td_f(10, 5)) : null) + encodeURIComponent(JSON.stringify(td_gz));
            if (td_hF.length > td_TL) {
                return null;
            }
            return td_hF;
        }
        return null;
    }
    ;
    function td_NJ(td_sd) {
        return (typeof td_sd !== [][[]] + "" && td_sd !== null);
    }
    function td_Ie() {
        if (typeof JSON !== [][[]] + "" && typeof JSON.stringify !== [][[]] + "") {
            return true;
        }
        return false;
    }
    function td_o7(td_Xo) {
        for (var td_bw in td_Xo) {
            if (Object.prototype.hasOwnProperty.call(td_Xo, td_bw)) {
                return false;
            }
        }
        return JSON.stringify(td_Xo) === ((typeof (td_0b.tdz_f576b59346964bf4baf89285145e9f64) !== "undefined" && typeof (td_0b.tdz_f576b59346964bf4baf89285145e9f64.td_f) !== "undefined") ? (td_0b.tdz_f576b59346964bf4baf89285145e9f64.td_f(15, 2)) : null);
    }
    this.setup = function() {
        if (!td_Ie()) {
            td_wr = true;
        }
    }
    ;
}
td_0b.tdz_274ea93cecd843909e49293d864f8402 = new td_0b.td_6D("\x32\x37\x34\x65\x61\x39\x33\x63\x65\x63\x64\x38\x34\x33\x39\x30\x39\x65\x34\x39\x32\x39\x33\x64\x38\x36\x34\x66\x38\x34\x30\x32\x34\x37\x34\x34\x35\x31\x34\x35\x31\x32\x34\x64\x34\x31\x30\x61\x30\x36\x31\x37");
function td_2x(td_x9) {
    ((typeof (td_0b.tdz_274ea93cecd843909e49293d864f8402) !== "undefined" && typeof (td_0b.tdz_274ea93cecd843909e49293d864f8402.td_f) !== "undefined") ? (td_0b.tdz_274ea93cecd843909e49293d864f8402.td_f(0, 10)) : null);
    if (typeof td_x9 === [][[]] + "" || td_x9 === null) {
        return null;
    }
    var td_Ar = td_x9[td_0b.kb.BASE_HANDLE_REF];
    var td_sr = td_x9[td_0b.kb.HELPERS_REF];
    if (!td_sr || !td_sr.kstats || !td_sr.mstats || !td_sr.comboData) {
        return null;
    }
    var td_AY = td_sr.kstats;
    var td_ok = td_sr.mstats;
    var td_VD = td_sr.comboData;
    function td_a5() {
        this.getKStatsParam = function() {
            var td_WV = td_Ar.deepCopyJson(td_AY);
            if (td_WV === null) {
                return "";
            }
            var td_Ya = JSON.stringify(td_WV);
            if (td_Ya !== null && td_Ya.length > 2) {
                return td_Ya;
            }
            return "";
        }
        ;
        this.getStatParams = function() {
            var td_Ap = td_Ar.deepCopyJson(td_ok);
            if (td_Ap === null) {
                return "";
            }
            td_Ar.pruneEmptyData(td_Ap);
            var td_N9 = JSON.stringify(td_Ap);
            if (td_N9 !== null && td_N9.length > 2) {
                return td_N9;
            }
            return "";
        }
        ;
        this.getComboData = function() {
            var td_CR = td_Ar.deepCopyJson(td_VD);
            if (td_CR === null) {
                return "";
            }
            td_Ar.pruneEmptyData(td_CR);
            var td_Rg = JSON.stringify(td_CR);
            if (td_Rg !== null && td_Rg.length > 2) {
                return td_Rg;
            }
            return "";
        }
        ;
    }
    return new td_a5();
}
td_0b.tdz_6b52168e3f274bcf893c11882e1f7ce4 = new td_0b.td_6D("\x36\x62\x35\x32\x31\x36\x38\x65\x33\x66\x32\x37\x34\x62\x63\x66\x38\x39\x33\x63\x31\x31\x38\x38\x32\x65\x31\x66\x37\x63\x65\x34\x34\x33\x31\x31\x35\x30\x31\x32\x34\x32\x34\x32\x34\x61\x30\x63\x35\x30\x31\x32\x35\x33\x34\x34\x35\x64\x30\x63\x30\x62\x30\x37\x34\x63\x35\x38\x35\x64\x30\x62\x35\x34\x34\x39\x34\x38\x35\x35\x30\x33\x30\x39\x35\x65\x30\x31\x30\x36\x31\x33\x31\x31\x35\x35\x35\x38\x31\x32\x35\x61\x34\x35\x36\x31\x37\x66\x31\x31\x35\x66");
var td_0b = td_0b || {};
function td_3d() {
    ((typeof (td_0b.tdz_6b52168e3f274bcf893c11882e1f7ce4) !== "undefined" && typeof (td_0b.tdz_6b52168e3f274bcf893c11882e1f7ce4.td_f) !== "undefined") ? (td_0b.tdz_6b52168e3f274bcf893c11882e1f7ce4.td_f(0, 10)) : null);
    var td_XB = [[((typeof (td_0b.tdz_6b52168e3f274bcf893c11882e1f7ce4) !== "undefined" && typeof (td_0b.tdz_6b52168e3f274bcf893c11882e1f7ce4.td_f) !== "undefined") ? (td_0b.tdz_6b52168e3f274bcf893c11882e1f7ce4.td_f(10, 5)) : null), 1, function(td_Wf) {
        return Math.log(td_Wf + Math.sqrt(td_Wf * td_Wf + 1));
    }
    ], [((typeof (td_0b.tdz_6b52168e3f274bcf893c11882e1f7ce4) !== "undefined" && typeof (td_0b.tdz_6b52168e3f274bcf893c11882e1f7ce4.td_f) !== "undefined") ? (td_0b.tdz_6b52168e3f274bcf893c11882e1f7ce4.td_f(15, 5)) : null), 0.5, function(td_qW) {
        return Math.log((1 + td_qW) / (1 - td_qW)) / 2;
    }
    ], [((typeof (td_0b.tdz_6b52168e3f274bcf893c11882e1f7ce4) !== "undefined" && typeof (td_0b.tdz_6b52168e3f274bcf893c11882e1f7ce4.td_f) !== "undefined") ? (td_0b.tdz_6b52168e3f274bcf893c11882e1f7ce4.td_f(20, 5)) : null), 1, function(td_oz) {
        return Math.exp(td_oz) - 1;
    }
    ], [((typeof (td_0b.tdz_6b52168e3f274bcf893c11882e1f7ce4) !== "undefined" && typeof (td_0b.tdz_6b52168e3f274bcf893c11882e1f7ce4.td_f) !== "undefined") ? (td_0b.tdz_6b52168e3f274bcf893c11882e1f7ce4.td_f(25, 5)) : null), 10, function(td_RH) {
        return Math.log(1 + td_RH);
    }
    ], [Number(698714).toString(29), 1, function(td_Kn) {
        var td_Rr = Math.exp(td_Kn);
        return (td_Rr - 1 / td_Rr) / 2;
    }
    ], [Number(313681).toString(29), 10, function(td_sr) {
        var td_QS = Math.exp(td_sr);
        return (td_QS + 1 / td_QS) / 2;
    }
    ], [Number(792707).toString(30), 1, function(td_K4) {
        var td_x7 = Math.exp(2 * td_K4);
        return (td_x7 - 1) / (td_x7 + 1);
    }
    ], [((typeof (td_0b.tdz_6b52168e3f274bcf893c11882e1f7ce4) !== "undefined" && typeof (td_0b.tdz_6b52168e3f274bcf893c11882e1f7ce4.td_f) !== "undefined") ? (td_0b.tdz_6b52168e3f274bcf893c11882e1f7ce4.td_f(30, 3)) : null), -1e+300, function(td_ci) {
        return Math.tan(-1e+300);
    }
    ], [((typeof (td_0b.tdz_6b52168e3f274bcf893c11882e1f7ce4) !== "undefined" && typeof (td_0b.tdz_6b52168e3f274bcf893c11882e1f7ce4.td_f) !== "undefined") ? (td_0b.tdz_6b52168e3f274bcf893c11882e1f7ce4.td_f(33, 5)) : null), -100, function(td_BI) {
        return Math.pow(Math.PI, td_BI);
    }
    ]];
    try {
        var td_MY = "";
        for (var td_uG = 0; td_uG < td_XB.length; td_uG++) {
            var td_tE = td_XB[td_uG][0] + "(" + td_XB[td_uG][1] + ((typeof (td_0b.tdz_6b52168e3f274bcf893c11882e1f7ce4) !== "undefined" && typeof (td_0b.tdz_6b52168e3f274bcf893c11882e1f7ce4.td_f) !== "undefined") ? (td_0b.tdz_6b52168e3f274bcf893c11882e1f7ce4.td_f(38, 2)) : null) + td_XB[td_uG][2](td_XB[td_uG][1]);
            td_MY += td_tE + ",";
        }
        var td_Z1 = new td_3n();
        return td_Z1.hash(td_MY);
    } catch (td_x) {}
    return null;
}
td_0b.tdz_fac1f2912680401287735f8b8b132929 = new td_0b.td_6D("\x66\x61\x63\x31\x66\x32\x39\x31\x32\x36\x38\x30\x34\x30\x31\x32\x38\x37\x37\x33\x35\x66\x38\x62\x38\x62\x31\x33\x32\x39\x32\x39\x31\x33\x31\x32\x30\x36\x31\x31\x31\x35\x34\x36\x34\x62\x35\x38\x35\x31\x34\x32");
var td_0b = td_0b || {};
function td_4A(td_D) {
    ((typeof (td_0b.tdz_fac1f2912680401287735f8b8b132929) !== "undefined" && typeof (td_0b.tdz_fac1f2912680401287735f8b8b132929.td_f) !== "undefined") ? (td_0b.tdz_fac1f2912680401287735f8b8b132929.td_f(0, 10)) : null);
    if (typeof td_D === [][[]] + "" || td_D === null || td_D.length !== 2) {
        return null;
    }
    var td_wB = 1;
    var td_nG = 250;
    var td_Gb = 4000;
    var td_D0 = 0;
    var td_Hl = 1;
    var td_k4 = 10;
    var td_JB = td_D[td_D0];
    var td_eg = td_D[td_Hl];
    td_JB = (td_JB === null || td_nG > td_JB) ? td_nG : td_JB;
    var td_Rb = 0;
    var td_LK = 1;
    var td_mx = 2;
    var td_p2 = 4;
    var td_qE = 0;
    var td_P0 = null;
    var td_KB = 250;
    var td_x = null;
    function td_XI() {
        var td_Lu = Number.NaN;
        var td_W4 = td_k4;
        while (isNaN(td_Lu) && --td_W4 > 0) {
            td_Lu = td_p();
        }
        if (0 >= td_W4) {
            return 0;
        }
        return td_Lu;
    }
    var td_kY = td_XI();
    function td_Lv() {
        return td_XI() - td_kY;
    }
    function td_ah(td_AS, td_zZ) {
        if (td_x === null) {
            return;
        }
        td_x();
        td_P0 = setTimeout(td_zZ, td_AS);
        td_eg(td_P0);
    }
    function td_tA() {
        td_KB = (td_KB >= td_Gb) ? td_Gb : td_KB * 2;
        td_ah(td_KB, td_tA);
    }
    function td_VZ() {
        var td_fW = td_Lv();
        if (2000 > td_fW) {
            td_ah(250, td_VZ);
            return;
        }
        if (22000 > td_fW) {
            td_ah(2000, td_VZ);
            return;
        }
        if (120000 > td_fW) {
            td_ah(10000, td_VZ);
            return;
        }
        if (480000 > td_fW) {
            td_ah(45000, td_VZ);
            return;
        }
        td_ah(60000, td_VZ);
    }
    function td_Km() {
        var td_ox = td_Lv();
        if (2000 > td_ox) {
            td_ah(250, td_Km);
            return;
        }
        if (7000 > td_ox) {
            td_ah(500, td_Km);
            return;
        }
        if (22000 > td_ox) {
            td_ah(1000, td_Km);
            return;
        }
        if (120000 > td_ox) {
            td_ah(3000, td_Km);
            return;
        }
        td_ah(10000, td_Km);
    }
    function td_eO(td_cn) {
        if (typeof td_cn === [][[]] + "" || td_cn === null || td_cn === "") {
            return null;
        }
        td_x = td_cn;
        switch (td_qE) {
        case td_LK:
            td_P0 = setTimeout(td_tA, td_KB);
            break;
        case td_mx:
            td_P0 = setTimeout(td_VZ, td_KB);
            break;
        case td_p2:
            td_P0 = setTimeout(td_Km, td_KB);
            break;
        case td_Rb:
        default:
            td_P0 = setInterval(td_cn, td_JB);
        }
        return td_P0;
    }
    if (typeof td_1F !== [][[]] + "" && td_1F !== null && td_1F !== 0) {
        var td_Wz = (td_1F & td_LK) === td_LK;
        var td_dc = (td_1F & td_mx) === td_mx;
        var td_zX = (td_1F & td_p2) === td_p2;
        td_qE = td_Wz ? td_LK : td_Rb;
        td_qE = td_dc ? td_mx : td_qE;
        td_qE = td_zX ? td_p2 : td_qE;
    }
    return [td_qE, td_eO];
}
td_0b.tdz_82d57eea754c481fa64bcf128fdce775 = new td_0b.td_6D("\x38\x32\x64\x35\x37\x65\x65\x61\x37\x35\x34\x63\x34\x38\x31\x66\x61\x36\x34\x62\x63\x66\x31\x32\x38\x66\x64\x63\x65\x37\x37\x35\x35\x62\x35\x33\x30\x61\x34\x33\x35\x36\x31\x36\x31\x32\x30\x34\x35\x35\x35\x32\x35\x38\x30\x36\x34\x63\x34\x38\x35\x34\x31\x34\x30\x38\x35\x62\x35\x31\x30\x63\x31\x37\x30\x37\x35\x64\x31\x66\x34\x66\x30\x33\x30\x36\x30\x34\x30\x39\x35\x61\x35\x38\x34\x66\x31\x35\x34\x35\x30\x31\x35\x37\x35\x30\x30\x39\x31\x32\x30\x34\x35\x35\x35\x65\x35\x64\x31\x37\x31\x39\x30\x62\x35\x35\x30\x30\x31\x34\x35\x38\x35\x37\x31\x36\x30\x61\x30\x39\x35\x66");
var td_0b = td_0b || {};
function td_ot() {
    if (!!window.WebGLRenderingContext) {
        var td_rF = document.createElement(((typeof (td_0b.tdz_82d57eea754c481fa64bcf128fdce775) !== "undefined" && typeof (td_0b.tdz_82d57eea754c481fa64bcf128fdce775.td_f) !== "undefined") ? (td_0b.tdz_82d57eea754c481fa64bcf128fdce775.td_f(0, 6)) : null));
        var td_zv = [((typeof (td_0b.tdz_82d57eea754c481fa64bcf128fdce775) !== "undefined" && typeof (td_0b.tdz_82d57eea754c481fa64bcf128fdce775.td_f) !== "undefined") ? (td_0b.tdz_82d57eea754c481fa64bcf128fdce775.td_f(6, 5)) : null), ((typeof (td_0b.tdz_82d57eea754c481fa64bcf128fdce775) !== "undefined" && typeof (td_0b.tdz_82d57eea754c481fa64bcf128fdce775.td_f) !== "undefined") ? (td_0b.tdz_82d57eea754c481fa64bcf128fdce775.td_f(11, 18)) : null), ((typeof (td_0b.tdz_82d57eea754c481fa64bcf128fdce775) !== "undefined" && typeof (td_0b.tdz_82d57eea754c481fa64bcf128fdce775.td_f) !== "undefined") ? (td_0b.tdz_82d57eea754c481fa64bcf128fdce775.td_f(29, 9)) : null), ((typeof (td_0b.tdz_82d57eea754c481fa64bcf128fdce775) !== "undefined" && typeof (td_0b.tdz_82d57eea754c481fa64bcf128fdce775.td_f) !== "undefined") ? (td_0b.tdz_82d57eea754c481fa64bcf128fdce775.td_f(38, 9)) : null)];
        for (var td_Az = 0; td_Az < 4; td_Az++) {
            try {
                var td_qB = td_rF.getContext(td_zv[td_Az]);
                if (td_qB && typeof td_qB.getParameter === ((typeof (td_0b.tdz_82d57eea754c481fa64bcf128fdce775) !== "undefined" && typeof (td_0b.tdz_82d57eea754c481fa64bcf128fdce775.td_f) !== "undefined") ? (td_0b.tdz_82d57eea754c481fa64bcf128fdce775.td_f(47, 8)) : null)) {
                    return {
                        name: td_zv[td_Az],
                        gl: td_qB
                    };
                }
            } catch (td_x) {}
        }
        return -1;
    }
    return 0;
}
td_0b.tdz_1c941fd684bc463483fec8debaa4069b = new td_0b.td_6D("\x31\x63\x39\x34\x31\x66\x64\x36\x38\x34\x62\x63\x34\x36\x33\x34\x38\x33\x66\x65\x63\x38\x64\x65\x62\x61\x61\x34\x30\x36\x39\x62\x34\x34\x31\x30\x35\x63\x31\x34\x34\x32\x31\x32\x31\x36\x35\x66\x35\x62\x34\x30\x34\x34\x30\x39\x34\x37\x35\x39\x30\x65");
var td_0b = td_0b || {};
td_0b.obfuscatedHandle = null;
function td_6S() {
    ((typeof (td_0b.tdz_1c941fd684bc463483fec8debaa4069b) !== "undefined" && typeof (td_0b.tdz_1c941fd684bc463483fec8debaa4069b.td_f) !== "undefined") ? (td_0b.tdz_1c941fd684bc463483fec8debaa4069b.td_f(0, 10)) : null);
    var td_R = 0;
    var td_Z = 1;
    var td_e = 2;
    var td_t = 3;
    var td_H = 4;
    var td_Mo = false;
    this.tryAgain = function() {
        return !td_Mo;
    }
    ;
    function td_eo() {
        return typeof navigator.userAgentData !== [][[]] + "" && navigator.userAgentData !== null && typeof navigator.userAgentData.getHighEntropyValues !== [][[]] + "" && navigator.userAgentData.getHighEntropyValues !== null;
    }
    this.getFPParams = function() {
        if (!td_eo()) {
            td_0b.td_0M = td_H;
            td_Mo = true;
            return null;
        }
        if (td_0b.td_0M < td_Z || td_0b.td_0M === td_H) {
            td_Mo = true;
        } else {
            if (td_0b.td_0M === td_t) {
                td_Mo = true;
                return ((typeof (td_0b.tdz_1c941fd684bc463483fec8debaa4069b) !== "undefined" && typeof (td_0b.tdz_1c941fd684bc463483fec8debaa4069b.td_f) !== "undefined") ? (td_0b.tdz_1c941fd684bc463483fec8debaa4069b.td_f(10, 5)) : null) + encodeURIComponent(td_0Z.td_1J);
            }
        }
        return null;
    }
    ;
    this.setup = function() {}
    ;
}
td_0b.tdz_848e36d805b14e6e8270dc7b49234367 = new td_0b.td_6D("\x38\x34\x38\x65\x33\x36\x64\x38\x30\x35\x62\x31\x34\x65\x36\x65\x38\x32\x37\x30\x64\x63\x37\x62\x34\x39\x32\x33\x34\x33\x36\x37\x34\x64\x34\x37\x35\x64\x34\x35\x34\x30\x34\x32\x31\x36\x35\x31\x35\x33\x34\x31\x34\x34\x34\x34\x35\x35\x30\x64\x30\x62\x31\x30\x35\x39\x35\x61\x30\x64\x35\x31\x31\x36\x30\x30\x35\x66\x30\x62\x34\x30\x35\x63\x35\x31\x34\x37\x34\x31\x34\x31\x35\x33\x35\x61\x35\x37\x35\x30\x35\x64\x30\x39\x34\x33\x35\x61\x30\x35\x34\x63\x35\x36\x35\x61\x31\x30\x35\x63\x34\x34\x30\x39\x35\x37\x31\x31\x35\x65\x35\x64\x34\x35\x35\x64\x33\x32\x30\x36\x34\x35\x31\x31\x35\x64\x35\x36\x35\x63\x35\x35\x34\x31\x35\x66\x35\x61\x36\x31\x35\x64\x34\x36\x34\x62\x30\x63\x35\x63\x35\x38\x32\x38\x35\x31\x34\x33\x34\x31\x30\x66\x35\x65\x35\x36\x30\x63\x35\x61\x30\x30\x35\x61\x35\x62\x34\x33\x35\x65\x30\x31\x31\x30\x34\x34\x31\x35\x35\x62\x34\x65\x30\x34\x30\x37\x34\x66\x34\x65");
var td_0b = td_0b || {};
function td_4I() {
    ((typeof (td_0b.tdz_848e36d805b14e6e8270dc7b49234367) !== "undefined" && typeof (td_0b.tdz_848e36d805b14e6e8270dc7b49234367.td_f) !== "undefined") ? (td_0b.tdz_848e36d805b14e6e8270dc7b49234367.td_f(0, 10)) : null);
    var td_e9 = false;
    var td_xy = false;
    var td_KM = false;
    var td_y2 = {};
    var td_nO = null;
    var td_PA = 1024;
    this.tryAgain = function() {
        return !td_e9;
    }
    ;
    this.getFPParams = function() {
        if (!td_xy) {
            td_e9 = true;
            return null;
        }
        if (!td_e9 && td_KM) {
            td_e9 = true;
            if (td_rR(td_y2)) {
                return null;
            }
            var td_kY = ((typeof (td_0b.tdz_848e36d805b14e6e8270dc7b49234367) !== "undefined" && typeof (td_0b.tdz_848e36d805b14e6e8270dc7b49234367.td_f) !== "undefined") ? (td_0b.tdz_848e36d805b14e6e8270dc7b49234367.td_f(10, 5)) : null) + encodeURIComponent(JSON.stringify(td_y2));
            if (td_kY.length > td_PA) {
                return null;
            }
            return td_kY;
        }
        return null;
    }
    ;
    this.getRunTimeMS = function() {
        if (td_nO !== null) {
            return ((typeof (td_0b.tdz_848e36d805b14e6e8270dc7b49234367) !== "undefined" && typeof (td_0b.tdz_848e36d805b14e6e8270dc7b49234367.td_f) !== "undefined") ? (td_0b.tdz_848e36d805b14e6e8270dc7b49234367.td_f(15, 4)) : null) + td_0b.toFixed(td_nO, 2);
        }
        return "";
    }
    ;
    this.setup = function() {
        if (td_hZ() && td_KN(navigator) && td_KN(navigator.userAgentData) && td_KN(navigator.userAgentData.getHighEntropyValues)) {
            var td_Z9 = td_g();
            td_xy = true;
            try {
                var td_Kd = navigator.userAgentData.getHighEntropyValues([((typeof (td_0b.tdz_848e36d805b14e6e8270dc7b49234367) !== "undefined" && typeof (td_0b.tdz_848e36d805b14e6e8270dc7b49234367.td_f) !== "undefined") ? (td_0b.tdz_848e36d805b14e6e8270dc7b49234367.td_f(19, 12)) : null), ((typeof (td_0b.tdz_848e36d805b14e6e8270dc7b49234367) !== "undefined" && typeof (td_0b.tdz_848e36d805b14e6e8270dc7b49234367.td_f) !== "undefined") ? (td_0b.tdz_848e36d805b14e6e8270dc7b49234367.td_f(31, 5)) : null), ((typeof (td_0b.tdz_848e36d805b14e6e8270dc7b49234367) !== "undefined" && typeof (td_0b.tdz_848e36d805b14e6e8270dc7b49234367.td_f) !== "undefined") ? (td_0b.tdz_848e36d805b14e6e8270dc7b49234367.td_f(36, 8)) : null), ((typeof (td_0b.tdz_848e36d805b14e6e8270dc7b49234367) !== "undefined" && typeof (td_0b.tdz_848e36d805b14e6e8270dc7b49234367.td_f) !== "undefined") ? (td_0b.tdz_848e36d805b14e6e8270dc7b49234367.td_f(44, 15)) : null), ((typeof (td_0b.tdz_848e36d805b14e6e8270dc7b49234367) !== "undefined" && typeof (td_0b.tdz_848e36d805b14e6e8270dc7b49234367.td_f) !== "undefined") ? (td_0b.tdz_848e36d805b14e6e8270dc7b49234367.td_f(59, 15)) : null), ((typeof (td_0b.tdz_848e36d805b14e6e8270dc7b49234367) !== "undefined" && typeof (td_0b.tdz_848e36d805b14e6e8270dc7b49234367.td_f) !== "undefined") ? (td_0b.tdz_848e36d805b14e6e8270dc7b49234367.td_f(74, 6)) : null), ((typeof (td_0b.tdz_848e36d805b14e6e8270dc7b49234367) !== "undefined" && typeof (td_0b.tdz_848e36d805b14e6e8270dc7b49234367.td_f) !== "undefined") ? (td_0b.tdz_848e36d805b14e6e8270dc7b49234367.td_f(80, 7)) : null), ((typeof (td_0b.tdz_848e36d805b14e6e8270dc7b49234367) !== "undefined" && typeof (td_0b.tdz_848e36d805b14e6e8270dc7b49234367.td_f) !== "undefined") ? (td_0b.tdz_848e36d805b14e6e8270dc7b49234367.td_f(87, 5)) : null)]);
                if (td_KN(td_Kd) && td_KN(td_Kd.then)) {
                    td_Kd.then(function(td_Qk) {
                        td_KM = true;
                        if (td_KN(td_Qk)) {
                            td_y2 = td_Qk;
                        }
                        td_nO = td_g() - td_Z9;
                    }, function(td_EM) {
                        td_KM = true;
                        td_nO = td_g() - td_Z9;
                    });
                } else {
                    td_KM = true;
                    td_nO = td_g() - td_Z9;
                }
            } catch (td_YU) {
                td_xy = false;
            }
        }
    }
    ;
    function td_KN(td_bB) {
        return (typeof td_bB !== [][[]] + "" && td_bB !== null);
    }
    function td_hZ() {
        if (typeof JSON !== [][[]] + "" && typeof JSON.stringify !== [][[]] + "") {
            return true;
        }
        return false;
    }
    function td_rR(td_t9) {
        for (var td_Vm in td_t9) {
            if (Object.prototype.hasOwnProperty.call(td_t9, td_Vm)) {
                return false;
            }
        }
        return JSON.stringify(td_t9) === ((typeof (td_0b.tdz_848e36d805b14e6e8270dc7b49234367) !== "undefined" && typeof (td_0b.tdz_848e36d805b14e6e8270dc7b49234367.td_f) !== "undefined") ? (td_0b.tdz_848e36d805b14e6e8270dc7b49234367.td_f(92, 2)) : null);
    }
}
td_0b.tdz_cfaf7463122e4ec78e567146c3c568bb = new td_0b.td_6D("\x63\x66\x61\x66\x37\x34\x36\x33\x31\x32\x32\x65\x34\x65\x63\x37\x38\x65\x35\x36\x37\x31\x34\x36\x63\x33\x63\x35\x36\x38\x62\x62\x31\x30\x31\x32\x31\x33\x30\x66\x35\x39\x35\x33\x35\x30\x34\x36\x35\x66\x35\x31\x34\x36\x30\x63\x35\x62\x30\x62\x33\x38\x35\x38\x35\x61\x30\x66\x35\x30\x35\x35\x34\x33\x31\x31\x37\x35\x34\x34\x31\x31\x35\x32\x31\x61\x36\x38\x34\x33\x35\x36\x30\x39\x30\x63\x30\x63\x31\x31\x30\x66\x30\x35\x35\x38\x35\x39\x34\x36\x35\x66\x35\x34\x34\x36\x35\x37\x30\x61\x35\x61\x30\x39\x30\x63\x35\x36\x35\x63");
function td_k(td_E, td_Q, td_n) {
    if (typeof td_n === [][[]] + "" || td_n === null) {
        td_n = 0;
    } else {
        if (td_n < 0) {
            td_n = Math.max(0, td_E.length + td_n);
        }
    }
    for (var td_F = td_n, td_X = td_E.length; td_F < td_X; td_F++) {
        if (td_E[td_F] === td_Q) {
            return td_F;
        }
    }
    return -1;
}
function td_L(td_x, td_n, td_J) {
    return td_x.indexOf(td_n, td_J);
}
function td_W(td_D) {
    if (typeof td_D !== ((typeof (td_0b.tdz_cfaf7463122e4ec78e567146c3c568bb) !== "undefined" && typeof (td_0b.tdz_cfaf7463122e4ec78e567146c3c568bb.td_f) !== "undefined") ? (td_0b.tdz_cfaf7463122e4ec78e567146c3c568bb.td_f(0, 6)) : null) || td_D === null || typeof td_D.replace === [][[]] + "" || td_D.replace === null) {
        return null;
    }
    return td_D.replace(/^\s+|\s+$/g, "");
}
function td_a(td_v) {
    if (typeof td_v !== ((typeof (td_0b.tdz_cfaf7463122e4ec78e567146c3c568bb) !== "undefined" && typeof (td_0b.tdz_cfaf7463122e4ec78e567146c3c568bb.td_f) !== "undefined") ? (td_0b.tdz_cfaf7463122e4ec78e567146c3c568bb.td_f(0, 6)) : null) || td_v === null || typeof td_v.trim === [][[]] + "" || td_v.trim === null) {
        return null;
    }
    return td_v.trim();
}
function td_5y(td_F) {
    if (typeof td_F !== ((typeof (td_0b.tdz_cfaf7463122e4ec78e567146c3c568bb) !== "undefined" && typeof (td_0b.tdz_cfaf7463122e4ec78e567146c3c568bb.td_f) !== "undefined") ? (td_0b.tdz_cfaf7463122e4ec78e567146c3c568bb.td_f(0, 6)) : null) || td_F === null || typeof td_F.trim === [][[]] + "" || td_F.trim === null) {
        return null;
    }
    return td_F.trim();
}
function td_6T(td_D, td_y, td_n) {
    return td_D.indexOf(td_y, td_n);
}
function td_p() {
    return Date.now();
}
function td_m() {
    return new Date().getTime();
}
function td_g() {
    return performance.now();
}
function td_w() {
    return window.performance.now();
}
function td_5B(td_D) {
    return parseFloat(td_D);
}
function td_6h(td_C) {
    return parseInt(td_C);
}
function td_6f(td_D) {
    return isNaN(td_D);
}
function td_2z(td_Q) {
    return isFinite(td_Q);
}
function td_N() {
    if (typeof Number.parseFloat !== [][[]] + "" && typeof Number.parseInt !== [][[]] + "") {
        td_5B = Number.parseFloat;
        td_6h = Number.parseInt;
    } else {
        if (typeof parseFloat !== [][[]] + "" && typeof parseInt !== [][[]] + "") {
            td_5B = parseFloat;
            td_6h = parseInt;
        } else {
            td_5B = null;
            td_6h = null;
        }
    }
    if (typeof Number.isNaN !== [][[]] + "") {
        td_6f = Number.isNaN;
    } else {
        if (typeof isNaN !== [][[]] + "") {
            td_6f = isNaN;
        } else {
            td_6f = null;
        }
    }
    if (typeof Number.isFinite !== [][[]] + "") {
        td_2z = Number.isFinite;
    } else {
        if (typeof isFinite !== [][[]] + "") {
            td_2z = isFinite;
        } else {
            td_2z = null;
        }
    }
}
function td_u() {
    if (!Array.prototype.indexOf) {
        td_6T = td_k;
    } else {
        td_6T = td_L;
    }
    if (typeof String.prototype.trim !== ((typeof (td_0b.tdz_cfaf7463122e4ec78e567146c3c568bb) !== "undefined" && typeof (td_0b.tdz_cfaf7463122e4ec78e567146c3c568bb.td_f) !== "undefined") ? (td_0b.tdz_cfaf7463122e4ec78e567146c3c568bb.td_f(6, 8)) : null)) {
        td_5y = td_W;
    } else {
        td_5y = td_a;
    }
    if (typeof Date.now === [][[]] + "") {
        td_p = td_m;
    }
    var td_y = false;
    if (typeof performance === [][[]] + "" || typeof performance.now === [][[]] + "") {
        if (typeof window.performance !== [][[]] + "" && typeof window.performance.now !== [][[]] + "") {
            td_g = td_w;
        } else {
            td_g = td_p;
            td_y = true;
        }
    }
    if (!td_y) {
        var td_J = td_g();
        var td_d = td_J.toFixed();
        if (td_J === td_d) {
            td_g = td_p;
        }
    }
    if (typeof Array.isArray === [][[]] + "") {
        Array.isArray = function(td_M) {
            return Object.prototype.toString.call(td_M) === ((typeof (td_0b.tdz_cfaf7463122e4ec78e567146c3c568bb) !== "undefined" && typeof (td_0b.tdz_cfaf7463122e4ec78e567146c3c568bb.td_f) !== "undefined") ? (td_0b.tdz_cfaf7463122e4ec78e567146c3c568bb.td_f(14, 14)) : null);
        }
        ;
    }
    td_N();
}
function td_6b(td_c) {
    if (typeof document.readyState !== [][[]] + "" && document.readyState !== null && typeof document.readyState !== ((typeof (td_0b.tdz_cfaf7463122e4ec78e567146c3c568bb) !== "undefined" && typeof (td_0b.tdz_cfaf7463122e4ec78e567146c3c568bb.td_f) !== "undefined") ? (td_0b.tdz_cfaf7463122e4ec78e567146c3c568bb.td_f(28, 7)) : null) && document.readyState === ((typeof (td_0b.tdz_cfaf7463122e4ec78e567146c3c568bb) !== "undefined" && typeof (td_0b.tdz_cfaf7463122e4ec78e567146c3c568bb.td_f) !== "undefined") ? (td_0b.tdz_cfaf7463122e4ec78e567146c3c568bb.td_f(35, 8)) : null)) {
        td_c();
    } else {
        if (typeof document.readyState === [][[]] + "") {
            setTimeout(td_c, 300);
        } else {
            var td_C = 200;
            var td_n;
            if (typeof window !== [][[]] + "" && typeof window !== ((typeof (td_0b.tdz_cfaf7463122e4ec78e567146c3c568bb) !== "undefined" && typeof (td_0b.tdz_cfaf7463122e4ec78e567146c3c568bb.td_f) !== "undefined") ? (td_0b.tdz_cfaf7463122e4ec78e567146c3c568bb.td_f(28, 7)) : null) && window !== null) {
                td_n = window;
            } else {
                td_n = document.body;
            }
            if (td_n.addEventListener) {
                td_n.addEventListener(Number(343388).toString(25), function() {
                    setTimeout(td_c, td_C);
                }, false);
            } else {
                if (td_n.attachEvent) {
                    td_n.attachEvent(((typeof (td_0b.tdz_cfaf7463122e4ec78e567146c3c568bb) !== "undefined" && typeof (td_0b.tdz_cfaf7463122e4ec78e567146c3c568bb.td_f) !== "undefined") ? (td_0b.tdz_cfaf7463122e4ec78e567146c3c568bb.td_f(43, 6)) : null), function() {
                        setTimeout(td_c, td_C);
                    }, false);
                } else {
                    var td_x = td_n.onload;
                    td_n.onload = new function() {
                        var td_D = true;
                        if (td_x !== null && typeof td_x === ((typeof (td_0b.tdz_cfaf7463122e4ec78e567146c3c568bb) !== "undefined" && typeof (td_0b.tdz_cfaf7463122e4ec78e567146c3c568bb.td_f) !== "undefined") ? (td_0b.tdz_cfaf7463122e4ec78e567146c3c568bb.td_f(6, 8)) : null)) {
                            td_D = td_x();
                        }
                        setTimeout(td_c, td_C);
                        td_n.onload = td_x;
                        return td_D;
                    }
                    ;
                }
            }
        }
    }
}
function td_P() {
    if (typeof td_0j !== [][[]] + "") {
        td_0j();
    }
    if (typeof td_4U !== [][[]] + "") {
        td_4U();
    }
    if (typeof td_1m !== [][[]] + "") {
        td_1m();
    }
    if (typeof td_5i !== [][[]] + "") {
        if (typeof td_0S !== [][[]] + "" && td_0S !== null) {
            td_5i(td_0S, false);
        }
        if (typeof td_1L !== [][[]] + "" && td_1L !== null) {
            td_5i(td_1L, true);
        }
    }
    if (typeof tmx_link_scan !== [][[]] + "") {
        tmx_link_scan();
    }
    if (typeof td_2l !== [][[]] + "") {
        td_2l();
    }
    if (typeof td_2Z !== [][[]] + "") {
        td_2Z.start();
    }
    if (typeof td_0A !== [][[]] + "") {
        td_0A.start();
    }
    if (typeof td_0C !== [][[]] + "") {
        td_0C();
    }
}
function td_2n() {
    try {
        td_0b.td_6z();
        td_0b.td_3g(document);
        td_0Z.td_0s();
        td_u();
        var td_F = "1";
        if (typeof td_0b.td_6U !== [][[]] + "" && td_0b.td_6U !== null && td_0b.td_6U === td_F) {
            td_P();
        } else {
            td_6b(td_P);
        }
    } catch (td_C) {}
}
td_0b.tdz_05b3bb03d66348b3b558e5966763ccf1 = new td_0b.td_6D("\x30\x35\x62\x33\x62\x62\x30\x33\x64\x36\x36\x33\x34\x38\x62\x33\x62\x35\x35\x38\x65\x35\x39\x36\x36\x37\x36\x33\x63\x63\x66\x31\x34\x35\x35\x62\x30\x39\x35\x64\x30\x64\x31\x35\x35\x65\x36\x30\x30\x35\x35\x30\x35\x37\x34\x31\x35\x64");
var td_0b = td_0b || {};
function td_0f() {
    var td_Vw = "";
    if (typeof td_0Z !== [][[]] + "") {
        td_Vw = (td_0Z.td_1t !== ((typeof (td_0b.tdz_05b3bb03d66348b3b558e5966763ccf1) !== "undefined" && typeof (td_0b.tdz_05b3bb03d66348b3b558e5966763ccf1.td_f) !== "undefined") ? (td_0b.tdz_05b3bb03d66348b3b558e5966763ccf1.td_f(0, 7)) : null)) ? td_0Z.td_1t : ((td_0Z.td_2k !== ((typeof (td_0b.tdz_05b3bb03d66348b3b558e5966763ccf1) !== "undefined" && typeof (td_0b.tdz_05b3bb03d66348b3b558e5966763ccf1.td_f) !== "undefined") ? (td_0b.tdz_05b3bb03d66348b3b558e5966763ccf1.td_f(0, 7)) : null)) ? td_0Z.td_2k : "");
    }
    if (td_Vw !== ((typeof (td_0b.tdz_05b3bb03d66348b3b558e5966763ccf1) !== "undefined" && typeof (td_0b.tdz_05b3bb03d66348b3b558e5966763ccf1.td_f) !== "undefined") ? (td_0b.tdz_05b3bb03d66348b3b558e5966763ccf1.td_f(7, 6)) : null)) {
        td_0b.load_iframe(td_5k, document);
    }
}
td_0b.tdz_41344d7cd21c4a32af152774853d39e7 = new td_0b.td_6D("\x34\x31\x33\x34\x34\x64\x37\x63\x64\x32\x31\x63\x34\x61\x33\x32\x61\x66\x31\x35\x32\x37\x37\x34\x38\x35\x33\x64\x33\x39\x65\x37\x34\x31\x34\x32\x35\x36\x31\x34\x34\x37\x31\x30\x34\x35\x30\x61\x30\x37\x34\x36\x35\x61\x30\x36\x34\x64\x31\x32\x34\x37\x35\x39\x30\x34\x31\x66\x35\x63\x34\x33\x35\x31\x35\x35\x35\x38\x35\x36\x35\x30\x34\x36\x35\x38\x31\x37\x34\x37\x35\x63\x30\x37\x35\x66\x34\x37\x35\x37\x35\x37\x35\x37\x34\x63\x31\x30\x31\x31\x30\x31\x30\x63\x34\x31\x35\x61\x31\x30\x34\x30\x35\x63\x31\x35\x35\x30\x30\x39\x31\x35\x35\x61\x34\x36\x34\x36\x36\x38\x35\x65\x35\x61\x35\x63\x35\x30\x34\x62\x35\x39\x31\x35\x35\x32\x30\x39\x35\x32\x30\x39\x30\x30\x31\x35\x34\x34\x35\x35\x30\x33\x35\x32\x33\x63\x30\x64\x35\x36\x30\x63\x34\x35\x35\x65\x30\x30\x35\x30\x30\x66\x35\x30\x34\x30\x35\x62\x35\x30\x30\x66");
var td_0b = td_0b || {};
function td_4i(td_cZ) {
    ((typeof (td_0b.tdz_41344d7cd21c4a32af152774853d39e7) !== "undefined" && typeof (td_0b.tdz_41344d7cd21c4a32af152774853d39e7.td_f) !== "undefined") ? (td_0b.tdz_41344d7cd21c4a32af152774853d39e7.td_f(0, 10)) : null);
    if (typeof td_cZ === [][[]] + "" || td_cZ === null) {
        return null;
    }
    if (typeof td_0b.makeQueryStringIfJsonUnderMaxSize === [][[]] + "" || td_0b.makeQueryStringIfJsonUnderMaxSize === null) {}
    var td_vg = td_0b.kb.ANALYTICS_OFFSET;
    var td_hQ = td_0b.kb.STATS_OFFSET;
    var td_Jc = td_0b.kb.RAW_OFFSET;
    var td_dj = td_0b.kb.LIVENESS_OFFSET;
    var td_Bw = td_cZ[td_0b.kb.BASE_HANDLE_REF];
    var td_WX = td_cZ[td_0b.kb.LEGACY_REPORT_REF];
    var td_IX = td_cZ[td_0b.kb.BHS_REPORT_REF];
    var td_JZ = td_cZ[td_0b.kb.MAX_SIZE_ANALYTICS_REF];
    var td_mN = td_cZ[td_0b.kb.MAX_SIZE_STAT_REF];
    var td_Wm = td_cZ[td_0b.kb.MAX_SIZE_COMBO_REF];
    var td_iG = td_cZ[td_0b.kb.MAX_SIZE_BHSW];
    var td_CN = td_cZ[td_0b.kb.MAX_SIZE_BHSKSTE];
    var td_wT = td_cZ[td_0b.kb.MAX_SIZE_BHSKST];
    var td_Q2 = td_cZ[td_0b.kb.MAX_SIZE_BHSFDCXT];
    var td_Qi = td_cZ[td_0b.kb.HELPERS_REF];
    if (!td_Bw || (!td_WX && !td_IX)) {
        return null;
    }
    var td_d7 = td_Qi.rawtime;
    var td_oV = 64000;
    var td_yG = 1;
    var td_T9 = true;
    var td_iB = true;
    var td_Nz = true;
    var td_Xq = true;
    var td_u2 = 0;
    var td_kd = 0;
    var td_X7 = false;
    var td_Jm = false;
    var td_RT = false;
    var td_Sa = false;
    var td_Wo = false;
    var td_mq = false;
    var td_Qu = false;
    var td_xN = false;
    if (typeof td_6r !== [][[]] + "" && td_6r !== null && td_6r !== 0) {
        td_T9 = (td_6r & td_vg) === td_vg;
        td_iB = (td_6r & td_hQ) === td_hQ;
        td_Nz = (td_6r & td_Jc) === td_Jc;
        td_Xq = (td_6r & td_dj) === td_dj;
    }
    function td_eP() {
        if (typeof td_Bw === [][[]] + "" || td_Bw === null) {
            return true;
        }
        td_Bw.getstats();
        var td_wQ = "";
        var td_ob = "";
        var td_V9 = null;
        if (td_WX && td_iB && !td_Jm) {
            td_ob = td_WX.getKStatsParam();
            td_V9 = td_0b.makeQueryStringIfJsonUnderMaxSize(((typeof (td_0b.tdz_41344d7cd21c4a32af152774853d39e7) !== "undefined" && typeof (td_0b.tdz_41344d7cd21c4a32af152774853d39e7.td_f) !== "undefined") ? (td_0b.tdz_41344d7cd21c4a32af152774853d39e7.td_f(10, 5)) : null), td_mN, td_ob);
            (td_V9[td_0b.BB_COMMON.NOT_TOO_LARGE]) ? (td_wQ += td_V9[td_0b.BB_COMMON.RESULT_QUERY_DATA]) : (td_Jm = true);
        }
        if (td_WX && td_T9 && !td_X7) {
            td_ob = td_WX.getStatParams();
            td_V9 = td_0b.makeQueryStringIfJsonUnderMaxSize(((typeof (td_0b.tdz_41344d7cd21c4a32af152774853d39e7) !== "undefined" && typeof (td_0b.tdz_41344d7cd21c4a32af152774853d39e7.td_f) !== "undefined") ? (td_0b.tdz_41344d7cd21c4a32af152774853d39e7.td_f(15, 5)) : null), td_JZ, td_ob);
            (td_V9[td_0b.BB_COMMON.NOT_TOO_LARGE]) ? (td_wQ += td_V9[td_0b.BB_COMMON.RESULT_QUERY_DATA]) : (td_X7 = true);
        }
        if (td_WX && td_T9 && !td_RT) {
            td_ob = td_WX.getComboData();
            td_V9 = td_0b.makeQueryStringIfJsonUnderMaxSize(((typeof (td_0b.tdz_41344d7cd21c4a32af152774853d39e7) !== "undefined" && typeof (td_0b.tdz_41344d7cd21c4a32af152774853d39e7.td_f) !== "undefined") ? (td_0b.tdz_41344d7cd21c4a32af152774853d39e7.td_f(20, 3)) : null), td_Wm, td_ob);
            (td_V9[td_0b.BB_COMMON.NOT_TOO_LARGE]) ? (td_wQ += td_V9[td_0b.BB_COMMON.RESULT_QUERY_DATA]) : (td_RT = true);
        }
        if (td_IX && !td_mq) {
            td_ob = td_IX.getDataIntegrity();
            td_V9 = td_0b.makeQueryStringIfJsonUnderMaxSize(Number(414776).toString(33), td_iG, td_ob);
            (td_V9[td_0b.BB_COMMON.NOT_TOO_LARGE]) ? (td_wQ += td_V9[td_0b.BB_COMMON.RESULT_QUERY_DATA]) : (td_mq = true);
        }
        if (td_IX && !td_Qu) {
            td_ob = td_IX.getKeyboardEnv();
            td_V9 = td_0b.makeQueryStringIfJsonUnderMaxSize(((typeof (td_0b.tdz_41344d7cd21c4a32af152774853d39e7) !== "undefined" && typeof (td_0b.tdz_41344d7cd21c4a32af152774853d39e7.td_f) !== "undefined") ? (td_0b.tdz_41344d7cd21c4a32af152774853d39e7.td_f(23, 7)) : null), td_CN, td_ob);
            (td_V9[td_0b.BB_COMMON.NOT_TOO_LARGE]) ? (td_wQ += td_V9[td_0b.BB_COMMON.RESULT_QUERY_DATA]) : (td_Qu = true);
        }
        if (td_IX && !td_xN) {
            td_ob = td_IX.getDocumentationAttribute();
            if (td_ob !== null) {
                td_V9 = td_0b.makeQueryStringIfJsonUnderMaxSize(((typeof (td_0b.tdz_41344d7cd21c4a32af152774853d39e7) !== "undefined" && typeof (td_0b.tdz_41344d7cd21c4a32af152774853d39e7.td_f) !== "undefined") ? (td_0b.tdz_41344d7cd21c4a32af152774853d39e7.td_f(30, 8)) : null), td_Q2, td_ob);
                (td_V9[td_0b.BB_COMMON.NOT_TOO_LARGE]) ? (td_wQ += td_V9[td_0b.BB_COMMON.RESULT_QUERY_DATA]) : (td_xN = true);
            }
        }
        if (td_IX && td_Nz && !td_Wo) {
            td_ob = td_IX.getRawParams();
            td_u2 += (td_ob.length - 2);
            if (td_ob.length > td_wT || td_u2 > td_wT) {
                td_Wo = true;
            } else {
                if (td_ob.length > 2) {
                    td_wQ += ((typeof (td_0b.tdz_41344d7cd21c4a32af152774853d39e7) !== "undefined" && typeof (td_0b.tdz_41344d7cd21c4a32af152774853d39e7.td_f) !== "undefined") ? (td_0b.tdz_41344d7cd21c4a32af152774853d39e7.td_f(38, 8)) : null) + encodeURIComponent(td_ob);
                    td_wQ += ((typeof (td_0b.tdz_41344d7cd21c4a32af152774853d39e7) !== "undefined" && typeof (td_0b.tdz_41344d7cd21c4a32af152774853d39e7.td_f) !== "undefined") ? (td_0b.tdz_41344d7cd21c4a32af152774853d39e7.td_f(46, 14)) : null) + td_kd++;
                }
            }
        }
        if (td_wQ === null || td_wQ === "") {
            return "";
        }
        if (td_WX && td_Xq && (td_d7.length >= td_yG)) {
            td_wQ += ((typeof (td_0b.tdz_41344d7cd21c4a32af152774853d39e7) !== "undefined" && typeof (td_0b.tdz_41344d7cd21c4a32af152774853d39e7.td_f) !== "undefined") ? (td_0b.tdz_41344d7cd21c4a32af152774853d39e7.td_f(60, 6)) : null);
        }
        return td_wQ;
    }
    function td_pT() {
        var td_wB = td_eP();
        if (td_wB === null || td_wB === "") {
            return td_Sa;
        }
        if (typeof td_6K !== [][[]] + "" && td_6K !== null) {
            td_wB = ((typeof (td_0b.tdz_41344d7cd21c4a32af152774853d39e7) !== "undefined" && typeof (td_0b.tdz_41344d7cd21c4a32af152774853d39e7.td_f) !== "undefined") ? (td_0b.tdz_41344d7cd21c4a32af152774853d39e7.td_f(66, 9)) : null) + encodeURIComponent(td_6K) + td_wB;
        }
        td_wB = ((typeof (td_0b.tdz_41344d7cd21c4a32af152774853d39e7) !== "undefined" && typeof (td_0b.tdz_41344d7cd21c4a32af152774853d39e7.td_f) !== "undefined") ? (td_0b.tdz_41344d7cd21c4a32af152774853d39e7.td_f(75, 6)) : null) + td_wB;
        var td_mG = td_4m + ((typeof (td_0b.tdz_41344d7cd21c4a32af152774853d39e7) !== "undefined" && typeof (td_0b.tdz_41344d7cd21c4a32af152774853d39e7.td_f) !== "undefined") ? (td_0b.tdz_41344d7cd21c4a32af152774853d39e7.td_f(81, 4)) : null) + td_0b.td_0B(td_wB, td_3r);
        if (td_mG.length >= td_oV) {
            td_Sa = true;
            return td_Sa;
        }
        td_0Q(td_mG, document);
        return td_Sa;
    }
    var td_NH = false;
    if (typeof td_0l !== [][[]] + "" && td_0l !== null) {
        if (typeof td_4B === [][[]] + "" || td_4B === null) {
            td_0l();
        }
        if (typeof td_4B !== [][[]] + "" && td_4B !== null && typeof td_4B.reg !== [][[]] + "" && td_4B.reg !== null) {
            td_NH = td_4B.reg(td_eP);
        }
    }
    if (!td_NH) {}
    return [td_pT];
}
td_0b.tdz_1d8b7bfa45ef45d1bd584eb302b9682f = new td_0b.td_6D("\x31\x64\x38\x62\x37\x62\x66\x61\x34\x35\x65\x66\x34\x35\x64\x31\x62\x64\x35\x38\x34\x65\x62\x33\x30\x32\x62\x39\x36\x38\x32\x66\x30\x31\x35\x35\x30\x61\x35\x31\x30\x33\x35\x37\x35\x30\x35\x36\x30\x63\x30\x63\x30\x34\x30\x34\x35\x37\x35\x31\x30\x31\x35\x37");
var td_0P = function(td_y6) {
    function td_tU(td_Mk) {
        return td_C8(td_sy(td_wA(td_Mk), td_Mk.length * 8));
    }
    function td_OB(td_dB) {
        var td_ue = ((typeof (td_0b.tdz_1d8b7bfa45ef45d1bd584eb302b9682f) !== "undefined" && typeof (td_0b.tdz_1d8b7bfa45ef45d1bd584eb302b9682f.td_f) !== "undefined") ? (td_0b.tdz_1d8b7bfa45ef45d1bd584eb302b9682f.td_f(0, 16)) : null);
        var td_sr = "";
        var td_Ar;
        for (var td_YW = 0; td_YW < td_dB.length; td_YW++) {
            td_Ar = td_dB.charCodeAt(td_YW);
            td_sr += td_ue.charAt((td_Ar >>> 4) & 15) + td_ue.charAt(td_Ar & 15);
        }
        return td_sr;
    }
    function td_SZ(td_zm) {
        var td_aH = "";
        var td_MO = -1;
        var td_Ce, td_Ei;
        while (++td_MO < td_zm.length) {
            td_Ce = td_zm.charCodeAt(td_MO);
            td_Ei = td_MO + 1 < td_zm.length ? td_zm.charCodeAt(td_MO + 1) : 0;
            if (55296 <= td_Ce && td_Ce <= 56319 && 56320 <= td_Ei && td_Ei <= 57343) {
                td_Ce = 65536 + ((td_Ce & 1023) << 10) + (td_Ei & 1023);
                td_MO++;
            }
            if (td_Ce <= 127) {
                td_aH += String.fromCharCode(td_Ce);
            } else {
                if (td_Ce <= 2047) {
                    td_aH += String.fromCharCode(192 | ((td_Ce >>> 6) & 31), 128 | (td_Ce & 63));
                } else {
                    if (td_Ce <= 65535) {
                        td_aH += String.fromCharCode(224 | ((td_Ce >>> 12) & 15), 128 | ((td_Ce >>> 6) & 63), 128 | (td_Ce & 63));
                    } else {
                        if (td_Ce <= 2097151) {
                            td_aH += String.fromCharCode(240 | ((td_Ce >>> 18) & 7), 128 | ((td_Ce >>> 12) & 63), 128 | ((td_Ce >>> 6) & 63), 128 | (td_Ce & 63));
                        }
                    }
                }
            }
        }
        return td_aH;
    }
    function td_wA(td_ff) {
        var td_sl = Array(td_ff.length >> 2);
        for (var td_GY = 0; td_GY < td_sl.length; td_GY++) {
            td_sl[td_GY] = 0;
        }
        for (td_GY = 0; td_GY < td_ff.length * 8; td_GY += 8) {
            td_sl[td_GY >> 5] |= (td_ff.charCodeAt(td_GY / 8) & 255) << (td_GY % 32);
        }
        return td_sl;
    }
    function td_C8(td_R9) {
        var td_Cr = "";
        for (var td_DC = 0; td_DC < td_R9.length * 32; td_DC += 8) {
            td_Cr += String.fromCharCode((td_R9[td_DC >> 5] >>> (td_DC % 32)) & 255);
        }
        return td_Cr;
    }
    function td_sy(td_Ti, td_f4) {
        td_Ti[td_f4 >> 5] |= 128 << ((td_f4) % 32);
        td_Ti[(((td_f4 + 64) >>> 9) << 4) + 14] = td_f4;
        var td_vi = 1732584193;
        var td_p3 = -271733879;
        var td_Ia = -1732584194;
        var td_M3 = 271733878;
        for (var td_PN = 0; td_PN < td_Ti.length; td_PN += 16) {
            var td_CX = td_vi;
            var td_xM = td_p3;
            var td_D9 = td_Ia;
            var td_Ei = td_M3;
            td_vi = td_B2(td_vi, td_p3, td_Ia, td_M3, td_Ti[td_PN + 0], 7, -680876936);
            td_M3 = td_B2(td_M3, td_vi, td_p3, td_Ia, td_Ti[td_PN + 1], 12, -389564586);
            td_Ia = td_B2(td_Ia, td_M3, td_vi, td_p3, td_Ti[td_PN + 2], 17, 606105819);
            td_p3 = td_B2(td_p3, td_Ia, td_M3, td_vi, td_Ti[td_PN + 3], 22, -1044525330);
            td_vi = td_B2(td_vi, td_p3, td_Ia, td_M3, td_Ti[td_PN + 4], 7, -176418897);
            td_M3 = td_B2(td_M3, td_vi, td_p3, td_Ia, td_Ti[td_PN + 5], 12, 1200080426);
            td_Ia = td_B2(td_Ia, td_M3, td_vi, td_p3, td_Ti[td_PN + 6], 17, -1473231341);
            td_p3 = td_B2(td_p3, td_Ia, td_M3, td_vi, td_Ti[td_PN + 7], 22, -45705983);
            td_vi = td_B2(td_vi, td_p3, td_Ia, td_M3, td_Ti[td_PN + 8], 7, 1770035416);
            td_M3 = td_B2(td_M3, td_vi, td_p3, td_Ia, td_Ti[td_PN + 9], 12, -1958414417);
            td_Ia = td_B2(td_Ia, td_M3, td_vi, td_p3, td_Ti[td_PN + 10], 17, -42063);
            td_p3 = td_B2(td_p3, td_Ia, td_M3, td_vi, td_Ti[td_PN + 11], 22, -1990404162);
            td_vi = td_B2(td_vi, td_p3, td_Ia, td_M3, td_Ti[td_PN + 12], 7, 1804603682);
            td_M3 = td_B2(td_M3, td_vi, td_p3, td_Ia, td_Ti[td_PN + 13], 12, -40341101);
            td_Ia = td_B2(td_Ia, td_M3, td_vi, td_p3, td_Ti[td_PN + 14], 17, -1502002290);
            td_p3 = td_B2(td_p3, td_Ia, td_M3, td_vi, td_Ti[td_PN + 15], 22, 1236535329);
            td_vi = td_Xt(td_vi, td_p3, td_Ia, td_M3, td_Ti[td_PN + 1], 5, -165796510);
            td_M3 = td_Xt(td_M3, td_vi, td_p3, td_Ia, td_Ti[td_PN + 6], 9, -1069501632);
            td_Ia = td_Xt(td_Ia, td_M3, td_vi, td_p3, td_Ti[td_PN + 11], 14, 643717713);
            td_p3 = td_Xt(td_p3, td_Ia, td_M3, td_vi, td_Ti[td_PN + 0], 20, -373897302);
            td_vi = td_Xt(td_vi, td_p3, td_Ia, td_M3, td_Ti[td_PN + 5], 5, -701558691);
            td_M3 = td_Xt(td_M3, td_vi, td_p3, td_Ia, td_Ti[td_PN + 10], 9, 38016083);
            td_Ia = td_Xt(td_Ia, td_M3, td_vi, td_p3, td_Ti[td_PN + 15], 14, -660478335);
            td_p3 = td_Xt(td_p3, td_Ia, td_M3, td_vi, td_Ti[td_PN + 4], 20, -405537848);
            td_vi = td_Xt(td_vi, td_p3, td_Ia, td_M3, td_Ti[td_PN + 9], 5, 568446438);
            td_M3 = td_Xt(td_M3, td_vi, td_p3, td_Ia, td_Ti[td_PN + 14], 9, -1019803690);
            td_Ia = td_Xt(td_Ia, td_M3, td_vi, td_p3, td_Ti[td_PN + 3], 14, -187363961);
            td_p3 = td_Xt(td_p3, td_Ia, td_M3, td_vi, td_Ti[td_PN + 8], 20, 1163531501);
            td_vi = td_Xt(td_vi, td_p3, td_Ia, td_M3, td_Ti[td_PN + 13], 5, -1444681467);
            td_M3 = td_Xt(td_M3, td_vi, td_p3, td_Ia, td_Ti[td_PN + 2], 9, -51403784);
            td_Ia = td_Xt(td_Ia, td_M3, td_vi, td_p3, td_Ti[td_PN + 7], 14, 1735328473);
            td_p3 = td_Xt(td_p3, td_Ia, td_M3, td_vi, td_Ti[td_PN + 12], 20, -1926607734);
            td_vi = td_mV(td_vi, td_p3, td_Ia, td_M3, td_Ti[td_PN + 5], 4, -378558);
            td_M3 = td_mV(td_M3, td_vi, td_p3, td_Ia, td_Ti[td_PN + 8], 11, -2022574463);
            td_Ia = td_mV(td_Ia, td_M3, td_vi, td_p3, td_Ti[td_PN + 11], 16, 1839030562);
            td_p3 = td_mV(td_p3, td_Ia, td_M3, td_vi, td_Ti[td_PN + 14], 23, -35309556);
            td_vi = td_mV(td_vi, td_p3, td_Ia, td_M3, td_Ti[td_PN + 1], 4, -1530992060);
            td_M3 = td_mV(td_M3, td_vi, td_p3, td_Ia, td_Ti[td_PN + 4], 11, 1272893353);
            td_Ia = td_mV(td_Ia, td_M3, td_vi, td_p3, td_Ti[td_PN + 7], 16, -155497632);
            td_p3 = td_mV(td_p3, td_Ia, td_M3, td_vi, td_Ti[td_PN + 10], 23, -1094730640);
            td_vi = td_mV(td_vi, td_p3, td_Ia, td_M3, td_Ti[td_PN + 13], 4, 681279174);
            td_M3 = td_mV(td_M3, td_vi, td_p3, td_Ia, td_Ti[td_PN + 0], 11, -358537222);
            td_Ia = td_mV(td_Ia, td_M3, td_vi, td_p3, td_Ti[td_PN + 3], 16, -722521979);
            td_p3 = td_mV(td_p3, td_Ia, td_M3, td_vi, td_Ti[td_PN + 6], 23, 76029189);
            td_vi = td_mV(td_vi, td_p3, td_Ia, td_M3, td_Ti[td_PN + 9], 4, -640364487);
            td_M3 = td_mV(td_M3, td_vi, td_p3, td_Ia, td_Ti[td_PN + 12], 11, -421815835);
            td_Ia = td_mV(td_Ia, td_M3, td_vi, td_p3, td_Ti[td_PN + 15], 16, 530742520);
            td_p3 = td_mV(td_p3, td_Ia, td_M3, td_vi, td_Ti[td_PN + 2], 23, -995338651);
            td_vi = td_oX(td_vi, td_p3, td_Ia, td_M3, td_Ti[td_PN + 0], 6, -198630844);
            td_M3 = td_oX(td_M3, td_vi, td_p3, td_Ia, td_Ti[td_PN + 7], 10, 1126891415);
            td_Ia = td_oX(td_Ia, td_M3, td_vi, td_p3, td_Ti[td_PN + 14], 15, -1416354905);
            td_p3 = td_oX(td_p3, td_Ia, td_M3, td_vi, td_Ti[td_PN + 5], 21, -57434055);
            td_vi = td_oX(td_vi, td_p3, td_Ia, td_M3, td_Ti[td_PN + 12], 6, 1700485571);
            td_M3 = td_oX(td_M3, td_vi, td_p3, td_Ia, td_Ti[td_PN + 3], 10, -1894986606);
            td_Ia = td_oX(td_Ia, td_M3, td_vi, td_p3, td_Ti[td_PN + 10], 15, -1051523);
            td_p3 = td_oX(td_p3, td_Ia, td_M3, td_vi, td_Ti[td_PN + 1], 21, -2054922799);
            td_vi = td_oX(td_vi, td_p3, td_Ia, td_M3, td_Ti[td_PN + 8], 6, 1873313359);
            td_M3 = td_oX(td_M3, td_vi, td_p3, td_Ia, td_Ti[td_PN + 15], 10, -30611744);
            td_Ia = td_oX(td_Ia, td_M3, td_vi, td_p3, td_Ti[td_PN + 6], 15, -1560198380);
            td_p3 = td_oX(td_p3, td_Ia, td_M3, td_vi, td_Ti[td_PN + 13], 21, 1309151649);
            td_vi = td_oX(td_vi, td_p3, td_Ia, td_M3, td_Ti[td_PN + 4], 6, -145523070);
            td_M3 = td_oX(td_M3, td_vi, td_p3, td_Ia, td_Ti[td_PN + 11], 10, -1120210379);
            td_Ia = td_oX(td_Ia, td_M3, td_vi, td_p3, td_Ti[td_PN + 2], 15, 718787259);
            td_p3 = td_oX(td_p3, td_Ia, td_M3, td_vi, td_Ti[td_PN + 9], 21, -343485551);
            td_vi = td_iX(td_vi, td_CX);
            td_p3 = td_iX(td_p3, td_xM);
            td_Ia = td_iX(td_Ia, td_D9);
            td_M3 = td_iX(td_M3, td_Ei);
        }
        return Array(td_vi, td_p3, td_Ia, td_M3);
    }
    function td_dE(td_tP, td_T8, td_Eo, td_F7, td_Em, td_V0) {
        return td_iX(td_m5(td_iX(td_iX(td_T8, td_tP), td_iX(td_F7, td_V0)), td_Em), td_Eo);
    }
    function td_B2(td_dz, td_vR, td_Qm, td_dV, td_Fv, td_uz, td_uX) {
        return td_dE((td_vR & td_Qm) | ((~td_vR) & td_dV), td_dz, td_vR, td_Fv, td_uz, td_uX);
    }
    function td_Xt(td_IX, td_nH, td_hb, td_nO, td_MG, td_Uh, td_Rb) {
        return td_dE((td_nH & td_nO) | (td_hb & (~td_nO)), td_IX, td_nH, td_MG, td_Uh, td_Rb);
    }
    function td_mV(td_Fc, td_sU, td_id, td_EU, td_hu, td_A4, td_HK) {
        return td_dE(td_sU ^ td_id ^ td_EU, td_Fc, td_sU, td_hu, td_A4, td_HK);
    }
    function td_oX(td_qm, td_KR, td_JG, td_ng, td_u8, td_Ft, td_Ka) {
        return td_dE(td_JG ^ (td_KR | (~td_ng)), td_qm, td_KR, td_u8, td_Ft, td_Ka);
    }
    function td_iX(td_P9, td_TO) {
        var td_as = (td_P9 & 65535) + (td_TO & 65535);
        var td_Qt = (td_P9 >> 16) + (td_TO >> 16) + (td_as >> 16);
        return ((td_Qt << 16) | (td_as & 65535));
    }
    function td_m5(td_rG, td_HV) {
        return ((td_rG << td_HV) | (td_rG >>> (32 - td_HV)));
    }
    return td_OB(td_tU(td_SZ(td_y6)));
};
td_0b.tdz_7bf41e49c1c241a0a32b9eb7c2ba3503 = new td_0b.td_6D("\x37\x62\x66\x34\x31\x65\x34\x39\x63\x31\x63\x32\x34\x31\x61\x30\x61\x33\x32\x62\x39\x65\x62\x37\x63\x32\x62\x61\x33\x35\x30\x33\x34\x32\x30\x63\x30\x64\x35\x61\x35\x65\x31\x32\x35\x61\x36\x61\x30\x32\x35\x37\x30\x32\x34\x30\x35\x64");
var td_0b = td_0b || {};
function td_1l() {
    var td_xb = "";
    if (typeof td_0Z !== [][[]] + "") {
        td_xb = (td_0Z.td_1t !== ((typeof (td_0b.tdz_7bf41e49c1c241a0a32b9eb7c2ba3503) !== "undefined" && typeof (td_0b.tdz_7bf41e49c1c241a0a32b9eb7c2ba3503.td_f) !== "undefined") ? (td_0b.tdz_7bf41e49c1c241a0a32b9eb7c2ba3503.td_f(0, 7)) : null)) ? td_0Z.td_1t : ((td_0Z.td_2k !== ((typeof (td_0b.tdz_7bf41e49c1c241a0a32b9eb7c2ba3503) !== "undefined" && typeof (td_0b.tdz_7bf41e49c1c241a0a32b9eb7c2ba3503.td_f) !== "undefined") ? (td_0b.tdz_7bf41e49c1c241a0a32b9eb7c2ba3503.td_f(0, 7)) : null)) ? td_0Z.td_2k : "");
    }
    if (td_xb !== ((typeof (td_0b.tdz_7bf41e49c1c241a0a32b9eb7c2ba3503) !== "undefined" && typeof (td_0b.tdz_7bf41e49c1c241a0a32b9eb7c2ba3503.td_f) !== "undefined") ? (td_0b.tdz_7bf41e49c1c241a0a32b9eb7c2ba3503.td_f(7, 6)) : null)) {
        td_0b.load_iframe(td_4P, document);
    }
}
td_0b.tdz_15e6259516114f3fb116ea4731af296e = new td_0b.td_6D("\x31\x35\x65\x36\x32\x35\x39\x35\x31\x36\x31\x31\x34\x66\x33\x66\x62\x31\x31\x36\x65\x61\x34\x37\x33\x31\x61\x66\x32\x39\x36\x65\x34\x34\x34\x36\x30\x30\x31\x36\x34\x31\x34\x31\x34\x62\x35\x63\x35\x32\x34\x32\x31\x64\x31\x33\x35\x39\x30\x66\x35\x64\x34\x34\x35\x38\x35\x30\x34\x37\x35\x31\x34\x37\x35\x62\x35\x39\x35\x36\x34\x62\x31\x33\x35\x62\x34\x61\x31\x30\x35\x62\x35\x35\x33\x61\x37\x64\x31\x37\x35\x66\x31\x61\x31\x30\x35\x37\x35\x61\x36\x61\x37\x63\x31\x34\x30\x62\x31\x64\x31\x36\x30\x34\x35\x30\x33\x39\x33\x30\x31\x33\x30\x62\x31\x34\x35\x66\x35\x31\x31\x36\x30\x64\x34\x38\x31\x33\x31\x37\x30\x33\x34\x30\x31\x62\x30\x63\x34\x39\x31\x33\x34\x36\x31\x31\x35\x37\x34\x30\x34\x31\x31\x62\x30\x66\x31\x64\x31\x34\x35\x34\x35\x66\x35\x30\x34\x34\x30\x39\x34\x61\x34\x30\x34\x32\x35\x32\x34\x34\x30\x61\x30\x64\x35\x38\x31\x35\x30\x39\x31\x64\x34\x33\x30\x32\x35\x62\x34\x61\x34\x32\x30\x34\x35\x66\x35\x36\x30\x30\x31\x34\x30\x38\x31\x39\x31\x62\x35\x63\x35\x35\x35\x61\x35\x34\x31\x33\x30\x65\x34\x61\x31\x33\x34\x34\x30\x66\x35\x65\x34\x34\x34\x35\x30\x30\x34\x33\x30\x65\x31\x35\x34\x35\x35\x34\x31\x33\x34\x34\x30\x38\x35\x34\x35\x32\x33\x61\x35\x63\x34\x33\x33\x61\x35\x62\x35\x62\x36\x61\x35\x34\x35\x36\x36\x65\x34\x31\x35\x35\x36\x65\x34\x33\x31\x34\x36\x63\x30\x34\x30\x36\x36\x65\x35\x35\x34\x32\x30\x63\x30\x30\x34\x32\x34\x65\x35\x37\x34\x35\x31\x32\x30\x35\x34\x36\x34\x63\x34\x32\x31\x31\x35\x38\x34\x36\x30\x34\x34\x36\x35\x33\x35\x37\x34\x62\x35\x64\x35\x63\x35\x33\x35\x39\x35\x63\x34\x37\x30\x65\x35\x32\x30\x33\x30\x61\x35\x66\x35\x34\x35\x32\x30\x62\x30\x38\x35\x30\x35\x39\x34\x30\x35\x63\x30\x66\x30\x39\x35\x66\x34\x64\x35\x39\x30\x38\x34\x32\x35\x61\x30\x38\x35\x62\x35\x31\x35\x38\x35\x34\x35\x38\x35\x63\x34\x35\x35\x63\x34\x37\x34\x37\x30\x62\x34\x35\x30\x37\x30\x66");
function td_4f(td_J4) {
    ((typeof (td_0b.tdz_15e6259516114f3fb116ea4731af296e) !== "undefined" && typeof (td_0b.tdz_15e6259516114f3fb116ea4731af296e.td_f) !== "undefined") ? (td_0b.tdz_15e6259516114f3fb116ea4731af296e.td_f(0, 10)) : null);
    if (typeof td_J4 === [][[]] + "" || td_J4 === null) {
        return null;
    }
    var td_cN = td_J4[td_0b.mouse.HELPERS_REF];
    if (!td_cN) {
        return null;
    }
    var td_o9 = td_cN.m_base;
    var td_aN = td_cN.VERSION;
    var td_Tw = td_cN.PRECISION;
    var td_bp = td_cN.m_move;
    var td_s6 = td_cN.m_move_static;
    var td_Mj = td_cN.m_wheel;
    var td_Gc = td_cN.m_button;
    var td_oU = td_cN.m_stat;
    var td_ko = td_cN.getSkippedUpdateCount;
    var td_x1 = td_cN.getOffScreenCount;
    var td_Jr = td_cN.getOffScreenTime;
    var td_Eg = td_cN.m_mouse_off_page;
    var td_sX = td_cN.isInitialMovePresent;
    var td_bL = td_cN.isLastMovePresent;
    var td_y9 = td_cN.isInitialMoveAlsoLastMove;
    var td_fk = td_cN.getTime;
    function td_rg() {
        function td_EW(td_AE, td_cr) {
            return ((typeof (td_0b.tdz_15e6259516114f3fb116ea4731af296e) !== "undefined" && typeof (td_0b.tdz_15e6259516114f3fb116ea4731af296e.td_f) !== "undefined") ? (td_0b.tdz_15e6259516114f3fb116ea4731af296e.td_f(10, 2)) : null) + td_AE + ((typeof (td_0b.tdz_15e6259516114f3fb116ea4731af296e) !== "undefined" && typeof (td_0b.tdz_15e6259516114f3fb116ea4731af296e.td_f) !== "undefined") ? (td_0b.tdz_15e6259516114f3fb116ea4731af296e.td_f(12, 5)) : null) + td_0b.toFixed(td_cr.min, td_Tw) + ((typeof (td_0b.tdz_15e6259516114f3fb116ea4731af296e) !== "undefined" && typeof (td_0b.tdz_15e6259516114f3fb116ea4731af296e.td_f) !== "undefined") ? (td_0b.tdz_15e6259516114f3fb116ea4731af296e.td_f(10, 2)) : null) + td_AE + ((typeof (td_0b.tdz_15e6259516114f3fb116ea4731af296e) !== "undefined" && typeof (td_0b.tdz_15e6259516114f3fb116ea4731af296e.td_f) !== "undefined") ? (td_0b.tdz_15e6259516114f3fb116ea4731af296e.td_f(17, 5)) : null) + td_0b.toFixed(td_cr.avg, td_Tw) + ((typeof (td_0b.tdz_15e6259516114f3fb116ea4731af296e) !== "undefined" && typeof (td_0b.tdz_15e6259516114f3fb116ea4731af296e.td_f) !== "undefined") ? (td_0b.tdz_15e6259516114f3fb116ea4731af296e.td_f(10, 2)) : null) + td_AE + ((typeof (td_0b.tdz_15e6259516114f3fb116ea4731af296e) !== "undefined" && typeof (td_0b.tdz_15e6259516114f3fb116ea4731af296e.td_f) !== "undefined") ? (td_0b.tdz_15e6259516114f3fb116ea4731af296e.td_f(22, 5)) : null) + td_0b.toFixed(td_cr.max, td_Tw);
        }
        function td_s2() {
            return ((typeof (td_0b.tdz_15e6259516114f3fb116ea4731af296e) !== "undefined" && typeof (td_0b.tdz_15e6259516114f3fb116ea4731af296e.td_f) !== "undefined") ? (td_0b.tdz_15e6259516114f3fb116ea4731af296e.td_f(27, 8)) : null) + td_Gc.click.LC + ((typeof (td_0b.tdz_15e6259516114f3fb116ea4731af296e) !== "undefined" && typeof (td_0b.tdz_15e6259516114f3fb116ea4731af296e.td_f) !== "undefined") ? (td_0b.tdz_15e6259516114f3fb116ea4731af296e.td_f(35, 8)) : null) + td_Gc.click.MC + ((typeof (td_0b.tdz_15e6259516114f3fb116ea4731af296e) !== "undefined" && typeof (td_0b.tdz_15e6259516114f3fb116ea4731af296e.td_f) !== "undefined") ? (td_0b.tdz_15e6259516114f3fb116ea4731af296e.td_f(43, 8)) : null) + td_Gc.click.RC;
        }
        function td_XH() {
            return ((td_bp.bounded.maxX - td_bp.bounded.minX) * (td_bp.bounded.maxY - td_bp.bounded.minY));
        }
        function td_YP(td_wu, td_zK) {
            if (td_wu === null || td_wu === "") {
                return "";
            }
            if (td_zK === null || td_zK === "") {
                return ((typeof (td_0b.tdz_15e6259516114f3fb116ea4731af296e) !== "undefined" && typeof (td_0b.tdz_15e6259516114f3fb116ea4731af296e.td_f) !== "undefined") ? (td_0b.tdz_15e6259516114f3fb116ea4731af296e.td_f(10, 2)) : null) + td_wu + ((typeof (td_0b.tdz_15e6259516114f3fb116ea4731af296e) !== "undefined" && typeof (td_0b.tdz_15e6259516114f3fb116ea4731af296e.td_f) !== "undefined") ? (td_0b.tdz_15e6259516114f3fb116ea4731af296e.td_f(51, 3)) : null);
            }
            return ((typeof (td_0b.tdz_15e6259516114f3fb116ea4731af296e) !== "undefined" && typeof (td_0b.tdz_15e6259516114f3fb116ea4731af296e.td_f) !== "undefined") ? (td_0b.tdz_15e6259516114f3fb116ea4731af296e.td_f(10, 2)) : null) + td_wu + ((typeof (td_0b.tdz_15e6259516114f3fb116ea4731af296e) !== "undefined" && typeof (td_0b.tdz_15e6259516114f3fb116ea4731af296e.td_f) !== "undefined") ? (td_0b.tdz_15e6259516114f3fb116ea4731af296e.td_f(54, 2)) : null) + td_zK;
        }
        this.getMetaParams = function() {
            var td_EA = "";
            td_EA += ((typeof (td_0b.tdz_15e6259516114f3fb116ea4731af296e) !== "undefined" && typeof (td_0b.tdz_15e6259516114f3fb116ea4731af296e.td_f) !== "undefined") ? (td_0b.tdz_15e6259516114f3fb116ea4731af296e.td_f(56, 7)) : null) + td_aN;
            td_EA += ((typeof (td_0b.tdz_15e6259516114f3fb116ea4731af296e) !== "undefined" && typeof (td_0b.tdz_15e6259516114f3fb116ea4731af296e.td_f) !== "undefined") ? (td_0b.tdz_15e6259516114f3fb116ea4731af296e.td_f(63, 9)) : null) + td_o9;
            td_EA += ((typeof (td_0b.tdz_15e6259516114f3fb116ea4731af296e) !== "undefined" && typeof (td_0b.tdz_15e6259516114f3fb116ea4731af296e.td_f) !== "undefined") ? (td_0b.tdz_15e6259516114f3fb116ea4731af296e.td_f(72, 7)) : null) + (td_fk() - td_o9);
            td_EA += ((typeof (td_0b.tdz_15e6259516114f3fb116ea4731af296e) !== "undefined" && typeof (td_0b.tdz_15e6259516114f3fb116ea4731af296e.td_f) !== "undefined") ? (td_0b.tdz_15e6259516114f3fb116ea4731af296e.td_f(79, 10)) : null) + td_0b.toFixed(td_Mj.distance.total, td_Tw);
            td_EA += ((typeof (td_0b.tdz_15e6259516114f3fb116ea4731af296e) !== "undefined" && typeof (td_0b.tdz_15e6259516114f3fb116ea4731af296e.td_f) !== "undefined") ? (td_0b.tdz_15e6259516114f3fb116ea4731af296e.td_f(89, 12)) : null) + td_0b.toFixed(td_bp.distance.total, td_Tw);
            td_EA += ((typeof (td_0b.tdz_15e6259516114f3fb116ea4731af296e) !== "undefined" && typeof (td_0b.tdz_15e6259516114f3fb116ea4731af296e.td_f) !== "undefined") ? (td_0b.tdz_15e6259516114f3fb116ea4731af296e.td_f(101, 8)) : null) + td_ko();
            if (typeof JSON !== [][[]] + "" || JSON !== null || typeof JSON.stringify !== [][[]] + "" || JSON.stringify !== null) {
                var td_Yo = JSON.stringify(td_oU);
                td_EA += ((typeof (td_0b.tdz_15e6259516114f3fb116ea4731af296e) !== "undefined" && typeof (td_0b.tdz_15e6259516114f3fb116ea4731af296e.td_f) !== "undefined") ? (td_0b.tdz_15e6259516114f3fb116ea4731af296e.td_f(109, 10)) : null) + td_Yo;
            }
            td_EA += "}";
            return td_EA;
        }
        ;
        this.getStatParams = function() {
            var td_fH = (td_fk() - td_o9);
            var td_pY = "{";
            td_pY += ((typeof (td_0b.tdz_15e6259516114f3fb116ea4731af296e) !== "undefined" && typeof (td_0b.tdz_15e6259516114f3fb116ea4731af296e.td_f) !== "undefined") ? (td_0b.tdz_15e6259516114f3fb116ea4731af296e.td_f(119, 6)) : null) + td_aN;
            td_pY += td_EW(((typeof (td_0b.tdz_15e6259516114f3fb116ea4731af296e) !== "undefined" && typeof (td_0b.tdz_15e6259516114f3fb116ea4731af296e.td_f) !== "undefined") ? (td_0b.tdz_15e6259516114f3fb116ea4731af296e.td_f(125, 3)) : null), td_bp.distance);
            td_pY += td_EW(((typeof (td_0b.tdz_15e6259516114f3fb116ea4731af296e) !== "undefined" && typeof (td_0b.tdz_15e6259516114f3fb116ea4731af296e.td_f) !== "undefined") ? (td_0b.tdz_15e6259516114f3fb116ea4731af296e.td_f(128, 3)) : null), td_bp.velocity);
            td_pY += td_EW(((typeof (td_0b.tdz_15e6259516114f3fb116ea4731af296e) !== "undefined" && typeof (td_0b.tdz_15e6259516114f3fb116ea4731af296e.td_f) !== "undefined") ? (td_0b.tdz_15e6259516114f3fb116ea4731af296e.td_f(131, 3)) : null), td_bp.inflexion);
            td_pY += td_EW(((typeof (td_0b.tdz_15e6259516114f3fb116ea4731af296e) !== "undefined" && typeof (td_0b.tdz_15e6259516114f3fb116ea4731af296e.td_f) !== "undefined") ? (td_0b.tdz_15e6259516114f3fb116ea4731af296e.td_f(134, 3)) : null), td_bp.curviness);
            td_pY += td_EW(((typeof (td_0b.tdz_15e6259516114f3fb116ea4731af296e) !== "undefined" && typeof (td_0b.tdz_15e6259516114f3fb116ea4731af296e.td_f) !== "undefined") ? (td_0b.tdz_15e6259516114f3fb116ea4731af296e.td_f(137, 3)) : null), td_Mj.distance);
            td_pY += td_EW(((typeof (td_0b.tdz_15e6259516114f3fb116ea4731af296e) !== "undefined" && typeof (td_0b.tdz_15e6259516114f3fb116ea4731af296e.td_f) !== "undefined") ? (td_0b.tdz_15e6259516114f3fb116ea4731af296e.td_f(140, 3)) : null), td_Mj.reversal);
            td_pY += td_EW(((typeof (td_0b.tdz_15e6259516114f3fb116ea4731af296e) !== "undefined" && typeof (td_0b.tdz_15e6259516114f3fb116ea4731af296e.td_f) !== "undefined") ? (td_0b.tdz_15e6259516114f3fb116ea4731af296e.td_f(143, 3)) : null), td_Gc.depress);
            td_pY += td_s2();
            var td_Cd = td_0b.toFixed((td_bp.distance.total + td_Mj.distance.total), td_Tw);
            td_pY += td_YP(((typeof (td_0b.tdz_15e6259516114f3fb116ea4731af296e) !== "undefined" && typeof (td_0b.tdz_15e6259516114f3fb116ea4731af296e.td_f) !== "undefined") ? (td_0b.tdz_15e6259516114f3fb116ea4731af296e.td_f(146, 3)) : null), td_Cd);
            var td_qB = 0;
            if (td_sX() && td_Cd > 0) {
                if (td_bp.total_displacement > 0) {
                    td_qB = td_0b.toFixed((td_bp.total_displacement / td_Cd), 4);
                    td_pY += td_YP(((typeof (td_0b.tdz_15e6259516114f3fb116ea4731af296e) !== "undefined" && typeof (td_0b.tdz_15e6259516114f3fb116ea4731af296e.td_f) !== "undefined") ? (td_0b.tdz_15e6259516114f3fb116ea4731af296e.td_f(149, 3)) : null), td_0b.toFixed((td_bp.total_displacement / td_fH), td_Tw));
                } else {
                    td_pY += td_YP(((typeof (td_0b.tdz_15e6259516114f3fb116ea4731af296e) !== "undefined" && typeof (td_0b.tdz_15e6259516114f3fb116ea4731af296e.td_f) !== "undefined") ? (td_0b.tdz_15e6259516114f3fb116ea4731af296e.td_f(149, 3)) : null), 0);
                }
            } else {
                td_pY += td_YP(((typeof (td_0b.tdz_15e6259516114f3fb116ea4731af296e) !== "undefined" && typeof (td_0b.tdz_15e6259516114f3fb116ea4731af296e.td_f) !== "undefined") ? (td_0b.tdz_15e6259516114f3fb116ea4731af296e.td_f(149, 3)) : null), 0);
            }
            td_pY += td_YP(((typeof (td_0b.tdz_15e6259516114f3fb116ea4731af296e) !== "undefined" && typeof (td_0b.tdz_15e6259516114f3fb116ea4731af296e.td_f) !== "undefined") ? (td_0b.tdz_15e6259516114f3fb116ea4731af296e.td_f(152, 3)) : null), td_bp.total_displacement);
            td_pY += td_YP(((typeof (td_0b.tdz_15e6259516114f3fb116ea4731af296e) !== "undefined" && typeof (td_0b.tdz_15e6259516114f3fb116ea4731af296e.td_f) !== "undefined") ? (td_0b.tdz_15e6259516114f3fb116ea4731af296e.td_f(155, 3)) : null), td_qB);
            td_pY += td_YP(((typeof (td_0b.tdz_15e6259516114f3fb116ea4731af296e) !== "undefined" && typeof (td_0b.tdz_15e6259516114f3fb116ea4731af296e.td_f) !== "undefined") ? (td_0b.tdz_15e6259516114f3fb116ea4731af296e.td_f(158, 3)) : null), td_fH);
            if (td_Cd > 0) {
                td_pY += td_YP(((typeof (td_0b.tdz_15e6259516114f3fb116ea4731af296e) !== "undefined" && typeof (td_0b.tdz_15e6259516114f3fb116ea4731af296e.td_f) !== "undefined") ? (td_0b.tdz_15e6259516114f3fb116ea4731af296e.td_f(161, 3)) : null), td_0b.toFixed((td_Cd / td_fH), td_Tw));
            } else {
                td_pY += td_YP(((typeof (td_0b.tdz_15e6259516114f3fb116ea4731af296e) !== "undefined" && typeof (td_0b.tdz_15e6259516114f3fb116ea4731af296e.td_f) !== "undefined") ? (td_0b.tdz_15e6259516114f3fb116ea4731af296e.td_f(161, 3)) : null), 0);
            }
            if (td_sX() && td_bL() && !td_y9()) {
                td_pY += td_YP(((typeof (td_0b.tdz_15e6259516114f3fb116ea4731af296e) !== "undefined" && typeof (td_0b.tdz_15e6259516114f3fb116ea4731af296e.td_f) !== "undefined") ? (td_0b.tdz_15e6259516114f3fb116ea4731af296e.td_f(164, 3)) : null), td_XH());
            } else {
                td_pY += td_YP(((typeof (td_0b.tdz_15e6259516114f3fb116ea4731af296e) !== "undefined" && typeof (td_0b.tdz_15e6259516114f3fb116ea4731af296e.td_f) !== "undefined") ? (td_0b.tdz_15e6259516114f3fb116ea4731af296e.td_f(164, 3)) : null), 0);
            }
            td_pY += td_YP(((typeof (td_0b.tdz_15e6259516114f3fb116ea4731af296e) !== "undefined" && typeof (td_0b.tdz_15e6259516114f3fb116ea4731af296e.td_f) !== "undefined") ? (td_0b.tdz_15e6259516114f3fb116ea4731af296e.td_f(167, 3)) : null), td_0b.toFixed(td_bp.hesitancy.max, td_Tw));
            if (td_bp.hesitancy.min !== 0) {
                td_pY += td_YP(((typeof (td_0b.tdz_15e6259516114f3fb116ea4731af296e) !== "undefined" && typeof (td_0b.tdz_15e6259516114f3fb116ea4731af296e.td_f) !== "undefined") ? (td_0b.tdz_15e6259516114f3fb116ea4731af296e.td_f(170, 3)) : null), td_0b.toFixed(td_bp.hesitancy.min, td_Tw));
            } else {
                td_pY += td_YP(((typeof (td_0b.tdz_15e6259516114f3fb116ea4731af296e) !== "undefined" && typeof (td_0b.tdz_15e6259516114f3fb116ea4731af296e.td_f) !== "undefined") ? (td_0b.tdz_15e6259516114f3fb116ea4731af296e.td_f(170, 3)) : null), 0);
            }
            td_pY += td_YP(((typeof (td_0b.tdz_15e6259516114f3fb116ea4731af296e) !== "undefined" && typeof (td_0b.tdz_15e6259516114f3fb116ea4731af296e.td_f) !== "undefined") ? (td_0b.tdz_15e6259516114f3fb116ea4731af296e.td_f(173, 3)) : null), td_0b.toFixed(td_bp.hesitancy.avg, td_Tw));
            td_pY += td_YP(((typeof (td_0b.tdz_15e6259516114f3fb116ea4731af296e) !== "undefined" && typeof (td_0b.tdz_15e6259516114f3fb116ea4731af296e.td_f) !== "undefined") ? (td_0b.tdz_15e6259516114f3fb116ea4731af296e.td_f(176, 3)) : null), td_bp.hesitancy.num);
            td_pY += td_YP(((typeof (td_0b.tdz_15e6259516114f3fb116ea4731af296e) !== "undefined" && typeof (td_0b.tdz_15e6259516114f3fb116ea4731af296e.td_f) !== "undefined") ? (td_0b.tdz_15e6259516114f3fb116ea4731af296e.td_f(179, 3)) : null), td_bp.discrete.x);
            td_pY += td_YP(((typeof (td_0b.tdz_15e6259516114f3fb116ea4731af296e) !== "undefined" && typeof (td_0b.tdz_15e6259516114f3fb116ea4731af296e.td_f) !== "undefined") ? (td_0b.tdz_15e6259516114f3fb116ea4731af296e.td_f(182, 3)) : null), td_bp.discrete.y);
            td_pY += td_YP(((typeof (td_0b.tdz_15e6259516114f3fb116ea4731af296e) !== "undefined" && typeof (td_0b.tdz_15e6259516114f3fb116ea4731af296e.td_f) !== "undefined") ? (td_0b.tdz_15e6259516114f3fb116ea4731af296e.td_f(185, 3)) : null), td_x1());
            td_pY += td_YP(((typeof (td_0b.tdz_15e6259516114f3fb116ea4731af296e) !== "undefined" && typeof (td_0b.tdz_15e6259516114f3fb116ea4731af296e.td_f) !== "undefined") ? (td_0b.tdz_15e6259516114f3fb116ea4731af296e.td_f(188, 3)) : null), td_Jr());
            td_pY += td_YP(((typeof (td_0b.tdz_15e6259516114f3fb116ea4731af296e) !== "undefined" && typeof (td_0b.tdz_15e6259516114f3fb116ea4731af296e.td_f) !== "undefined") ? (td_0b.tdz_15e6259516114f3fb116ea4731af296e.td_f(191, 3)) : null), td_s6.segmentCount);
            td_pY += td_YP(((typeof (td_0b.tdz_15e6259516114f3fb116ea4731af296e) !== "undefined" && typeof (td_0b.tdz_15e6259516114f3fb116ea4731af296e.td_f) !== "undefined") ? (td_0b.tdz_15e6259516114f3fb116ea4731af296e.td_f(194, 3)) : null), td_s6.motionsCount);
            td_pY += td_YP(((typeof (td_0b.tdz_15e6259516114f3fb116ea4731af296e) !== "undefined" && typeof (td_0b.tdz_15e6259516114f3fb116ea4731af296e.td_f) !== "undefined") ? (td_0b.tdz_15e6259516114f3fb116ea4731af296e.td_f(197, 3)) : null), td_0b.toFixed(td_s6.meanMotions, td_Tw));
            td_pY += td_YP(((typeof (td_0b.tdz_15e6259516114f3fb116ea4731af296e) !== "undefined" && typeof (td_0b.tdz_15e6259516114f3fb116ea4731af296e.td_f) !== "undefined") ? (td_0b.tdz_15e6259516114f3fb116ea4731af296e.td_f(200, 3)) : null), td_0b.toFixed((td_bp.distance.total / td_fH), td_Tw));
            var td_NE = td_0b.variance(td_s6.speedSamples, td_s6.speedMean);
            td_pY += td_YP(((typeof (td_0b.tdz_15e6259516114f3fb116ea4731af296e) !== "undefined" && typeof (td_0b.tdz_15e6259516114f3fb116ea4731af296e.td_f) !== "undefined") ? (td_0b.tdz_15e6259516114f3fb116ea4731af296e.td_f(203, 3)) : null), td_0b.toFixed(td_NE, td_Tw));
            var td_rF = td_0b.variance(td_s6.accelSamples, td_s6.accelerationMean);
            td_pY += td_YP(((typeof (td_0b.tdz_15e6259516114f3fb116ea4731af296e) !== "undefined" && typeof (td_0b.tdz_15e6259516114f3fb116ea4731af296e.td_f) !== "undefined") ? (td_0b.tdz_15e6259516114f3fb116ea4731af296e.td_f(206, 3)) : null), td_0b.toFixed(td_rF, td_Tw));
            td_pY += "}";
            return td_pY;
        }
        ;
        this.getMouseOffPage = function() {
            if (typeof JSON === [][[]] + "" || JSON === null || typeof JSON.stringify === [][[]] + "" || JSON.stringify === null) {
                return "";
            }
            var td_Ah = JSON.stringify(td_Eg);
            if (td_Ah !== null && td_Ah.length > 2) {
                return td_Ah;
            }
            return "";
        }
        ;
        this.isLivenessGreaterThanThreshold = function(td_JO) {
            if (typeof td_JO !== [][[]] + "" && td_JO !== null) {
                return td_cN.updateStream.length > td_JO;
            }
            return false;
        }
        ;
    }
    return new td_rg();
}
td_0b.tdz_15e96cf81b9b47a6879792968b8af698 = new td_0b.td_6D("\x31\x35\x65\x39\x36\x63\x66\x38\x31\x62\x39\x62\x34\x37\x61\x36\x38\x37\x39\x37\x39\x32\x39\x36\x38\x62\x38\x61\x66\x36\x39\x38\x37\x34\x34\x64\x31\x35\x35\x35\x35\x39\x31\x31\x30\x33\x34\x61\x36\x36\x30\x62\x35\x37\x30\x36\x35\x62\x34\x30\x31\x32\x36\x31\x37\x31\x37\x39\x37\x34\x35\x36\x35\x61\x37\x66\x37\x38\x37\x35\x30\x39\x35\x30\x30\x66\x34\x66\x35\x36\x31\x38\x30\x39\x31\x36\x30\x30\x36\x61\x30\x61\x34\x39\x35\x33\x30\x64\x35\x63\x30\x32\x31\x31\x35\x38\x31\x39\x33\x64\x35\x31\x34\x35\x31\x33\x35\x39\x34\x61\x36\x38\x35\x61\x35\x62\x35\x36\x34\x31\x35\x63\x34\x31\x34\x62\x31\x31\x30\x32\x34\x65\x34\x39\x36\x39\x35\x30\x35\x36\x34\x35\x35\x30\x31\x37\x34\x66\x35\x37\x30\x66\x31\x34\x35\x63\x30\x63\x34\x34\x34\x62\x30\x36\x34\x30\x30\x61\x31\x33\x35\x32\x30\x35\x31\x31\x34\x62\x35\x33\x34\x64\x30\x66\x31\x66\x35\x63\x35\x64\x35\x66\x35\x64\x31\x37\x30\x37\x35\x61\x36\x36\x35\x65\x35\x66\x36\x61\x35\x34\x34\x64\x35\x62\x31\x62\x30\x62\x35\x64\x34\x32\x31\x31\x35\x38\x30\x35\x35\x31\x35\x32\x31\x33\x34\x34\x35\x37\x34\x35\x35\x61\x35\x62\x35\x36\x34\x31\x35\x63\x34\x31\x34\x62\x31\x31\x30\x32\x34\x65\x34\x39\x30\x37\x30\x62\x30\x66\x31\x66\x30\x35\x34\x62\x30\x39\x31\x38\x35\x32\x35\x63\x37\x63\x37\x30\x33\x36\x37\x38\x32\x36\x37\x62\x37\x39\x32\x34\x36\x37\x36\x64\x37\x32\x36\x62\x36\x65\x37\x30\x37\x63\x37\x30\x36\x32\x36\x61\x32\x37\x36\x62\x33\x34\x32\x61\x36\x32\x37\x64\x37\x39\x36\x35\x37\x34\x32\x36\x37\x36\x36\x33\x32\x64\x33\x32\x36\x63\x37\x38\x32\x66\x37\x63\x32\x64\x36\x31\x36\x33\x31\x36\x35\x37\x34\x63\x35\x34\x35\x31\x35\x32\x34\x62\x36\x64\x35\x36\x34\x36\x35\x64\x30\x63\x34\x66\x30\x30\x31\x32\x35\x35\x35\x31\x35\x64\x34\x33\x36\x61\x30\x30\x34\x62\x34\x34\x30\x63\x31\x34\x34\x66\x35\x30\x31\x36\x35\x61\x30\x61\x35\x31\x34\x35\x33\x65\x35\x35\x35\x34\x35\x38\x34\x61\x35\x32\x35\x37\x34\x37\x35\x34\x35\x34\x35\x64\x31\x30\x31\x38\x34\x63\x34\x36\x34\x32\x35\x30\x35\x35\x35\x34\x31\x35\x30\x30\x34\x31\x35\x35\x30\x36\x30\x33\x35\x63\x35\x34\x30\x36\x34\x61\x30\x37\x35\x38\x35\x31\x34\x66\x37\x62\x37\x64\x36\x34\x36\x61\x37\x36\x37\x65\x37\x37\x31\x39\x30\x62\x31\x38\x34\x30\x34\x62\x30\x34\x30\x61\x35\x30\x31\x37\x37\x37\x36\x31\x37\x30\x32\x62\x31\x39\x30\x62\x34\x33\x34\x34\x34\x62\x35\x34\x30\x65\x35\x66\x34\x63\x37\x31\x36\x35\x33\x33\x37\x39\x36\x61\x31\x37\x30\x34\x31\x37\x31\x62\x34\x31\x35\x63\x35\x61\x35\x65\x34\x63\x37\x62\x32\x64\x32\x39\x36\x35\x37\x63\x31\x38\x30\x63\x31\x35\x34\x37\x34\x61\x35\x33\x30\x66\x30\x30\x31\x36\x37\x38\x32\x63\x36\x64\x32\x37\x36\x36\x36\x31\x32\x30\x37\x61\x31\x38\x30\x61\x31\x39\x31\x35\x34\x61\x35\x37\x35\x35\x35\x30\x31\x36\x33\x31\x37\x37\x32\x32\x32\x64\x37\x33\x36\x64\x31\x38\x30\x63\x31\x35\x34\x37\x34\x61\x35\x33\x30\x66\x30\x30\x31\x36\x37\x35\x32\x33\x36\x64\x32\x33\x31\x34\x30\x61\x34\x31\x31\x34\x34\x62\x35\x32\x35\x35\x35\x31\x31\x37\x36\x36\x37\x30\x37\x62\x37\x64\x32\x37\x36\x30\x32\x32\x32\x33\x37\x33\x37\x64\x37\x64\x37\x35\x31\x35\x35\x38\x31\x39\x31\x34\x31\x30\x30\x33\x35\x34\x35\x37\x34\x63\x36\x61\x32\x37\x36\x34\x31\x37\x35\x63\x31\x36\x31\x61\x34\x34\x35\x63\x35\x62\x35\x66\x31\x63\x36\x39\x37\x39\x36\x62\x33\x36\x37\x35\x33\x32\x32\x31\x37\x32\x37\x36\x37\x36\x37\x34\x31\x35\x35\x38\x31\x39\x31\x34\x31\x30\x30\x33\x35\x34\x35\x37\x34\x63\x36\x39\x32\x64\x36\x37\x36\x33\x32\x63\x36\x35\x37\x66\x36\x36\x36\x63\x37\x32\x36\x62\x36\x62\x31\x39\x30\x62\x31\x38\x34\x30\x34\x62\x30\x34\x30\x61\x35\x30\x31\x37\x37\x31\x37\x66\x37\x63\x33\x31\x31\x39\x30\x62\x34\x33\x34\x34\x34\x62\x35\x34\x30\x65\x35\x66\x34\x63\x36\x36\x37\x32\x33\x32\x36\x33\x37\x34\x36\x33\x31\x39\x30\x61\x31\x39\x31\x30\x34\x61\x35\x33\x35\x34\x30\x34\x31\x36\x32\x35\x32\x37\x36\x32\x37\x38\x37\x62\x37\x65\x36\x30\x32\x62\x36\x64\x31\x36\x35\x65\x34\x36\x31\x61\x34\x32\x30\x37\x35\x35\x30\x34\x31\x61\x37\x34\x33\x35\x37\x66\x37\x35\x37\x32\x37\x36\x36\x32\x36\x64\x31\x32\x30\x34\x31\x36\x31\x61\x31\x31\x35\x64\x30\x64\x30\x30\x31\x38\x36\x65\x37\x37\x36\x31\x37\x30\x32\x62\x31\x39\x30\x62\x34\x33\x34\x34\x34\x62\x35\x34\x30\x65\x35\x66\x34\x63\x36\x33\x37\x32\x33\x33\x36\x34\x37\x37\x36\x35\x31\x39\x30\x61\x31\x39\x31\x30\x34\x61\x35\x33\x35\x34\x30\x34\x31\x36\x33\x36\x32\x35\x37\x61\x37\x36\x36\x62\x37\x34\x31\x35\x35\x38\x31\x39\x31\x34\x31\x30\x30\x33\x35\x34\x35\x37\x34\x63\x37\x37\x33\x37\x37\x39\x37\x35\x32\x34\x36\x34\x31\x38\x30\x61\x31\x39\x31\x35\x34\x64\x35\x66\x34\x31\x31\x38\x35\x63\x30\x37\x35\x61\x31\x34\x30\x31\x31\x36\x30\x34\x31\x38\x34\x35\x35\x38\x31\x64\x31\x37\x34\x32\x31\x31\x30\x37\x35\x62\x35\x34\x34\x32\x30\x34\x34\x32\x34\x32\x35\x36\x31\x33\x31\x36\x34\x63\x35\x61\x34\x31\x31\x37\x30\x34\x31\x32\x34\x64\x35\x62\x34\x30\x34\x32\x34\x34\x31\x64\x34\x36\x34\x64\x34\x34\x30\x33\x31\x31\x31\x61\x34\x61\x35\x37\x35\x37\x30\x65\x30\x33\x34\x62\x34\x31\x30\x33\x35\x61\x30\x37\x35\x35\x34\x37\x31\x31\x35\x61\x35\x31\x35\x34\x35\x38\x34\x33\x35\x30\x35\x64\x35\x37\x31\x39\x35\x32\x30\x33\x34\x65\x30\x30\x31\x35\x35\x35\x34\x62\x35\x31\x34\x31\x34\x31\x30\x61\x35\x62\x35\x63\x30\x36\x30\x35\x34\x63\x36\x36\x30\x62\x35\x37\x30\x36\x35\x62\x34\x30\x31\x32\x31\x36\x30\x66\x36\x30\x35\x30\x35\x39\x35\x64\x35\x64\x34\x65\x34\x35\x31\x38\x35\x61\x31\x36\x35\x30\x32\x30\x35\x66\x34\x62\x35\x64\x35\x37\x35\x61\x31\x64");
var td_0b = td_0b || {};
function td_3I(td_ZF, td_tS, td_I1) {
    var td_lK = [];
    var td_Rt = 0;
    var td_Ui = [];
    var td_zE = [];
    var td_Mc = null;
    var td_y6 = true;
    var td_oK = true;
    this.timeout = 1500;
    this.validate = false;
    this.isValid = function() {
        return this.validate;
    }
    ;
    if (typeof WebSocket === [][[]] + "") {
        return;
    }
    var td_jj = 0;
    var td_Xc = 0;
    if (td_0Z.td_2k === ((typeof (td_0b.tdz_15e96cf81b9b47a6879792968b8af698) !== "undefined" && typeof (td_0b.tdz_15e96cf81b9b47a6879792968b8af698.td_f) !== "undefined") ? (td_0b.tdz_15e96cf81b9b47a6879792968b8af698.td_f(0, 8)) : null)) {
        td_jj = 2500;
        td_Xc = 6;
    } else {
        td_jj = 1500;
        td_Xc = 128;
    }
    var td_PO = 3 * td_jj;
    var td_aW = function(td_E9, td_vf, td_l5, td_PR, td_dX, td_rM) {
        if (typeof td_l5 === [][[]] + "" || typeof td_rM === [][[]] + "") {
            return false;
        }
        if (td_rM < td_l5 / 2) {
            return true;
        }
        return false;
    };
    if (td_ZF === ((typeof (td_0b.tdz_15e96cf81b9b47a6879792968b8af698) !== "undefined" && typeof (td_0b.tdz_15e96cf81b9b47a6879792968b8af698.td_f) !== "undefined") ? (td_0b.tdz_15e96cf81b9b47a6879792968b8af698.td_f(8, 7)) : null)) {
        this.os = ((typeof (td_0b.tdz_15e96cf81b9b47a6879792968b8af698) !== "undefined" && typeof (td_0b.tdz_15e96cf81b9b47a6879792968b8af698.td_f) !== "undefined") ? (td_0b.tdz_15e96cf81b9b47a6879792968b8af698.td_f(15, 3)) : null);
    } else {
        if (td_ZF === ((typeof (td_0b.tdz_15e96cf81b9b47a6879792968b8af698) !== "undefined" && typeof (td_0b.tdz_15e96cf81b9b47a6879792968b8af698.td_f) !== "undefined") ? (td_0b.tdz_15e96cf81b9b47a6879792968b8af698.td_f(18, 3)) : null)) {
            this.os = ((typeof (td_0b.tdz_15e96cf81b9b47a6879792968b8af698) !== "undefined" && typeof (td_0b.tdz_15e96cf81b9b47a6879792968b8af698.td_f) !== "undefined") ? (td_0b.tdz_15e96cf81b9b47a6879792968b8af698.td_f(21, 3)) : null);
        } else {
            this.os = td_ZF;
        }
    }
    this.browser = td_tS;
    this.ip = ((typeof (td_0b.tdz_15e96cf81b9b47a6879792968b8af698) !== "undefined" && typeof (td_0b.tdz_15e96cf81b9b47a6879792968b8af698.td_f) !== "undefined") ? (td_0b.tdz_15e96cf81b9b47a6879792968b8af698.td_f(24, 9)) : null);
    this.scanPorts = [];
    for (var td_SK = 0; td_SK < td_I1.length; td_SK++) {
        var td_lp = td_I1[td_SK].split(":");
        var td_H3;
        if (td_lp.length === 1) {
            td_H3 = td_lp[0];
        } else {
            if (td_lp.length === 2) {
                td_H3 = td_lp[1];
            } else {
                if (td_lp.length === 3) {
                    td_H3 = td_lp[2];
                } else {
                    continue;
                }
            }
        }
        if (this.os !== ((typeof (td_0b.tdz_15e96cf81b9b47a6879792968b8af698) !== "undefined" && typeof (td_0b.tdz_15e96cf81b9b47a6879792968b8af698.td_f) !== "undefined") ? (td_0b.tdz_15e96cf81b9b47a6879792968b8af698.td_f(15, 3)) : null)) {
            continue;
        }
        this.scanPorts.push([td_H3, td_aW]);
    }
    if (this.scanPorts.length > 1) {
        this.validate = true;
    }
    if (this.validate === false) {
        return;
    }
    var td_zH = this;
    var td_Pg;
    var td_mw = 0;
    var td_TF = 0;
    var td_zq;
    var td_Ze = {};
    var td_fX = this.scanPorts.length;
    var td_bk = function(td_Yw) {
        try {
            td_Ze[td_mw + ((typeof (td_0b.tdz_15e96cf81b9b47a6879792968b8af698) !== "undefined" && typeof (td_0b.tdz_15e96cf81b9b47a6879792968b8af698.td_f) !== "undefined") ? (td_0b.tdz_15e96cf81b9b47a6879792968b8af698.td_f(33, 5)) : null)] = true;
            if (td_0b.hasDebug) {
                var td_ZG = "";
                for (var td_Rn in td_Yw) {
                    td_ZG += ((typeof (td_0b.tdz_15e96cf81b9b47a6879792968b8af698) !== "undefined" && typeof (td_0b.tdz_15e96cf81b9b47a6879792968b8af698.td_f) !== "undefined") ? (td_0b.tdz_15e96cf81b9b47a6879792968b8af698.td_f(38, 2)) : null) + td_Rn + ((typeof (td_0b.tdz_15e96cf81b9b47a6879792968b8af698) !== "undefined" && typeof (td_0b.tdz_15e96cf81b9b47a6879792968b8af698.td_f) !== "undefined") ? (td_0b.tdz_15e96cf81b9b47a6879792968b8af698.td_f(40, 3)) : null) + td_Yw[td_Rn];
                }
            }
        } catch (td_O5) {}
    };
    var td_ks = function(td_bg) {
        try {
            td_Ze[td_mw + ((typeof (td_0b.tdz_15e96cf81b9b47a6879792968b8af698) !== "undefined" && typeof (td_0b.tdz_15e96cf81b9b47a6879792968b8af698.td_f) !== "undefined") ? (td_0b.tdz_15e96cf81b9b47a6879792968b8af698.td_f(43, 6)) : null)] = true;
        } catch (td_sG) {}
    };
    var td_WR = function(td_rA) {
        try {
            td_Ze[td_mw + ((typeof (td_0b.tdz_15e96cf81b9b47a6879792968b8af698) !== "undefined" && typeof (td_0b.tdz_15e96cf81b9b47a6879792968b8af698.td_f) !== "undefined") ? (td_0b.tdz_15e96cf81b9b47a6879792968b8af698.td_f(49, 6)) : null)] = true;
        } catch (td_AR) {}
    };
    function td_V5() {
        if (!td_ED() || !td_oK) {
            return;
        }
        td_Pg = td_p();
        try {
            td_zq = new WebSocket(((typeof (td_0b.tdz_15e96cf81b9b47a6879792968b8af698) !== "undefined" && typeof (td_0b.tdz_15e96cf81b9b47a6879792968b8af698.td_f) !== "undefined") ? (td_0b.tdz_15e96cf81b9b47a6879792968b8af698.td_f(55, 6)) : null) + td_zH.ip + ":" + td_mw);
            td_zq.onerror = td_ks;
            td_zq.onopen = td_bk;
            td_zq.onclose = td_WR;
            td_zE.push(setTimeout(td_w1, 5));
        } catch (td_A5) {
            return;
        }
    }
    function td_w1() {
        var td_it = td_p() - td_Pg;
        if (td_zq.readyState === 0) {
            if (td_it > td_jj) {
                td_Ze[td_mw + ((typeof (td_0b.tdz_15e96cf81b9b47a6879792968b8af698) !== "undefined" && typeof (td_0b.tdz_15e96cf81b9b47a6879792968b8af698.td_f) !== "undefined") ? (td_0b.tdz_15e96cf81b9b47a6879792968b8af698.td_f(61, 9)) : null)] = td_jj;
                td_zq.close();
                td_zq = null;
                td_Pg = td_p();
                td_zE.push(setTimeout(td_V5, 1));
            } else {
                td_zE.push(setTimeout(td_w1, 5));
            }
        } else {
            td_Ze[td_mw + ((typeof (td_0b.tdz_15e96cf81b9b47a6879792968b8af698) !== "undefined" && typeof (td_0b.tdz_15e96cf81b9b47a6879792968b8af698.td_f) !== "undefined") ? (td_0b.tdz_15e96cf81b9b47a6879792968b8af698.td_f(61, 9)) : null)] = td_it;
            td_zq.close();
            td_zq = null;
            td_zE.push(setTimeout(td_V5, 1));
        }
    }
    function td_ED() {
        if (td_TF >= td_zH.scanPorts.length) {
            td_Rx();
            return false;
        }
        td_mw = td_zH.scanPorts[td_TF++][0];
        return true;
    }
    function td_Rx() {
        var td_On = [];
        var td_KJ = td_Ze[td_zH.scanPorts[0][0] + ((typeof (td_0b.tdz_15e96cf81b9b47a6879792968b8af698) !== "undefined" && typeof (td_0b.tdz_15e96cf81b9b47a6879792968b8af698.td_f) !== "undefined") ? (td_0b.tdz_15e96cf81b9b47a6879792968b8af698.td_f(43, 6)) : null)];
        var td_JP = td_Ze[td_zH.scanPorts[0][0] + ((typeof (td_0b.tdz_15e96cf81b9b47a6879792968b8af698) !== "undefined" && typeof (td_0b.tdz_15e96cf81b9b47a6879792968b8af698.td_f) !== "undefined") ? (td_0b.tdz_15e96cf81b9b47a6879792968b8af698.td_f(49, 6)) : null)];
        var td_qx = td_Ze[td_zH.scanPorts[0][0] + ((typeof (td_0b.tdz_15e96cf81b9b47a6879792968b8af698) !== "undefined" && typeof (td_0b.tdz_15e96cf81b9b47a6879792968b8af698.td_f) !== "undefined") ? (td_0b.tdz_15e96cf81b9b47a6879792968b8af698.td_f(61, 9)) : null)];
        var td_Zd = td_zH.scanPorts[0][0] + "-" + td_qx;
        for (var td_CI = 1; td_CI < td_zH.scanPorts.length; td_CI++) {
            var td_h1 = td_Ze[td_zH.scanPorts[td_CI][0] + ((typeof (td_0b.tdz_15e96cf81b9b47a6879792968b8af698) !== "undefined" && typeof (td_0b.tdz_15e96cf81b9b47a6879792968b8af698.td_f) !== "undefined") ? (td_0b.tdz_15e96cf81b9b47a6879792968b8af698.td_f(43, 6)) : null)];
            var td_nS = td_Ze[td_zH.scanPorts[td_CI][0] + ((typeof (td_0b.tdz_15e96cf81b9b47a6879792968b8af698) !== "undefined" && typeof (td_0b.tdz_15e96cf81b9b47a6879792968b8af698.td_f) !== "undefined") ? (td_0b.tdz_15e96cf81b9b47a6879792968b8af698.td_f(49, 6)) : null)];
            var td_QU = td_Ze[td_zH.scanPorts[td_CI][0] + ((typeof (td_0b.tdz_15e96cf81b9b47a6879792968b8af698) !== "undefined" && typeof (td_0b.tdz_15e96cf81b9b47a6879792968b8af698.td_f) !== "undefined") ? (td_0b.tdz_15e96cf81b9b47a6879792968b8af698.td_f(61, 9)) : null)];
            if (td_zH.scanPorts[td_CI][1](td_KJ, td_JP, td_qx, td_h1, td_nS, td_QU)) {
                var td_Ep = td_zH.scanPorts[td_CI][0];
                td_On.push(td_Ep);
            }
            td_Zd += "," + td_zH.scanPorts[td_CI][0] + "-" + td_QU;
        }
        var td_oo = ((typeof (td_0b.tdz_15e96cf81b9b47a6879792968b8af698) !== "undefined" && typeof (td_0b.tdz_15e96cf81b9b47a6879792968b8af698.td_f) !== "undefined") ? (td_0b.tdz_15e96cf81b9b47a6879792968b8af698.td_f(70, 3)) : null) + td_On.join() + ((typeof (td_0b.tdz_15e96cf81b9b47a6879792968b8af698) !== "undefined" && typeof (td_0b.tdz_15e96cf81b9b47a6879792968b8af698.td_f) !== "undefined") ? (td_0b.tdz_15e96cf81b9b47a6879792968b8af698.td_f(73, 5)) : null) + td_Zd;
        if (td_oo === null || td_oo === ((typeof (td_0b.tdz_15e96cf81b9b47a6879792968b8af698) !== "undefined" && typeof (td_0b.tdz_15e96cf81b9b47a6879792968b8af698.td_f) !== "undefined") ? (td_0b.tdz_15e96cf81b9b47a6879792968b8af698.td_f(78, 8)) : null)) {}
        var td_vv = td_4m + ((typeof (td_0b.tdz_15e96cf81b9b47a6879792968b8af698) !== "undefined" && typeof (td_0b.tdz_15e96cf81b9b47a6879792968b8af698.td_f) !== "undefined") ? (td_0b.tdz_15e96cf81b9b47a6879792968b8af698.td_f(86, 4)) : null) + td_0b.td_0B(td_oo, td_3r);
        td_0Q(td_vv, document);
        if (td_0b.hasTrace) {
            for (var td_wF in td_Ze) {
                if (td_Ze.hasOwnProperty(td_wF)) {}
            }
        }
    }
    function td_Hn() {
        self.GLOBREPLACE = ((typeof (td_0b.tdz_15e96cf81b9b47a6879792968b8af698) !== "undefined" && typeof (td_0b.tdz_15e96cf81b9b47a6879792968b8af698.td_f) !== "undefined") ? (td_0b.tdz_15e96cf81b9b47a6879792968b8af698.td_f(90, 9)) : null);
        self.REPLACEVAL = ((typeof (td_0b.tdz_15e96cf81b9b47a6879792968b8af698) !== "undefined" && typeof (td_0b.tdz_15e96cf81b9b47a6879792968b8af698.td_f) !== "undefined") ? (td_0b.tdz_15e96cf81b9b47a6879792968b8af698.td_f(99, 3)) : null);
        self.MESSAGE = ((typeof (td_0b.tdz_15e96cf81b9b47a6879792968b8af698) !== "undefined" && typeof (td_0b.tdz_15e96cf81b9b47a6879792968b8af698.td_f) !== "undefined") ? (td_0b.tdz_15e96cf81b9b47a6879792968b8af698.td_f(102, 7)) : null);
        self.OPEN = Number(439111).toString(26);
        self.ERROR = ((typeof (td_0b.tdz_15e96cf81b9b47a6879792968b8af698) !== "undefined" && typeof (td_0b.tdz_15e96cf81b9b47a6879792968b8af698.td_f) !== "undefined") ? (td_0b.tdz_15e96cf81b9b47a6879792968b8af698.td_f(109, 5)) : null);
        self.CLOSE = ((typeof (td_0b.tdz_15e96cf81b9b47a6879792968b8af698) !== "undefined" && typeof (td_0b.tdz_15e96cf81b9b47a6879792968b8af698.td_f) !== "undefined") ? (td_0b.tdz_15e96cf81b9b47a6879792968b8af698.td_f(114, 5)) : null);
        self.INTERVAL = ((typeof (td_0b.tdz_15e96cf81b9b47a6879792968b8af698) !== "undefined" && typeof (td_0b.tdz_15e96cf81b9b47a6879792968b8af698.td_f) !== "undefined") ? (td_0b.tdz_15e96cf81b9b47a6879792968b8af698.td_f(61, 9)) : null);
        self.SOCKET = ((typeof (td_0b.tdz_15e96cf81b9b47a6879792968b8af698) !== "undefined" && typeof (td_0b.tdz_15e96cf81b9b47a6879792968b8af698.td_f) !== "undefined") ? (td_0b.tdz_15e96cf81b9b47a6879792968b8af698.td_f(119, 16)) : null);
        self.DATA = ((typeof (td_0b.tdz_15e96cf81b9b47a6879792968b8af698) !== "undefined" && typeof (td_0b.tdz_15e96cf81b9b47a6879792968b8af698.td_f) !== "undefined") ? (td_0b.tdz_15e96cf81b9b47a6879792968b8af698.td_f(135, 4)) : null);
        self.POSTMSGDONE = ((typeof (td_0b.tdz_15e96cf81b9b47a6879792968b8af698) !== "undefined" && typeof (td_0b.tdz_15e96cf81b9b47a6879792968b8af698.td_f) !== "undefined") ? (td_0b.tdz_15e96cf81b9b47a6879792968b8af698.td_f(139, 4)) : null);
        self.POSTMSGQUERY = ((typeof (td_0b.tdz_15e96cf81b9b47a6879792968b8af698) !== "undefined" && typeof (td_0b.tdz_15e96cf81b9b47a6879792968b8af698.td_f) !== "undefined") ? (td_0b.tdz_15e96cf81b9b47a6879792968b8af698.td_f(143, 5)) : null);
        self.INIT = ((typeof (td_0b.tdz_15e96cf81b9b47a6879792968b8af698) !== "undefined" && typeof (td_0b.tdz_15e96cf81b9b47a6879792968b8af698.td_f) !== "undefined") ? (td_0b.tdz_15e96cf81b9b47a6879792968b8af698.td_f(148, 4)) : null);
        self.RESULT = ((typeof (td_0b.tdz_15e96cf81b9b47a6879792968b8af698) !== "undefined" && typeof (td_0b.tdz_15e96cf81b9b47a6879792968b8af698.td_f) !== "undefined") ? (td_0b.tdz_15e96cf81b9b47a6879792968b8af698.td_f(152, 6)) : null);
        self.DATACOUNT = ((typeof (td_0b.tdz_15e96cf81b9b47a6879792968b8af698) !== "undefined" && typeof (td_0b.tdz_15e96cf81b9b47a6879792968b8af698.td_f) !== "undefined") ? (td_0b.tdz_15e96cf81b9b47a6879792968b8af698.td_f(158, 9)) : null);
        self.CTIMEOUT = ((typeof (td_0b.tdz_15e96cf81b9b47a6879792968b8af698) !== "undefined" && typeof (td_0b.tdz_15e96cf81b9b47a6879792968b8af698.td_f) !== "undefined") ? (td_0b.tdz_15e96cf81b9b47a6879792968b8af698.td_f(167, 7)) : null);
        self.WOPEN = ((typeof (td_0b.tdz_15e96cf81b9b47a6879792968b8af698) !== "undefined" && typeof (td_0b.tdz_15e96cf81b9b47a6879792968b8af698.td_f) !== "undefined") ? (td_0b.tdz_15e96cf81b9b47a6879792968b8af698.td_f(174, 12)) : null);
        self.WERROR = ((typeof (td_0b.tdz_15e96cf81b9b47a6879792968b8af698) !== "undefined" && typeof (td_0b.tdz_15e96cf81b9b47a6879792968b8af698.td_f) !== "undefined") ? (td_0b.tdz_15e96cf81b9b47a6879792968b8af698.td_f(186, 13)) : null);
        self.WCLOSE = ((typeof (td_0b.tdz_15e96cf81b9b47a6879792968b8af698) !== "undefined" && typeof (td_0b.tdz_15e96cf81b9b47a6879792968b8af698.td_f) !== "undefined") ? (td_0b.tdz_15e96cf81b9b47a6879792968b8af698.td_f(199, 13)) : null);
        self.NUMBER = ((typeof (td_0b.tdz_15e96cf81b9b47a6879792968b8af698) !== "undefined" && typeof (td_0b.tdz_15e96cf81b9b47a6879792968b8af698.td_f) !== "undefined") ? (td_0b.tdz_15e96cf81b9b47a6879792968b8af698.td_f(212, 6)) : null);
        self.TIMEEXCEEDED = ((typeof (td_0b.tdz_15e96cf81b9b47a6879792968b8af698) !== "undefined" && typeof (td_0b.tdz_15e96cf81b9b47a6879792968b8af698.td_f) !== "undefined") ? (td_0b.tdz_15e96cf81b9b47a6879792968b8af698.td_f(218, 16)) : null);
        self.SEP = ((typeof (td_0b.tdz_15e96cf81b9b47a6879792968b8af698) !== "undefined" && typeof (td_0b.tdz_15e96cf81b9b47a6879792968b8af698.td_f) !== "undefined") ? (td_0b.tdz_15e96cf81b9b47a6879792968b8af698.td_f(40, 3)) : null);
        this.PortProbeInitialiser = function() {
            return ((typeof (td_0b.tdz_15e96cf81b9b47a6879792968b8af698) !== "undefined" && typeof (td_0b.tdz_15e96cf81b9b47a6879792968b8af698.td_f) !== "undefined") ? (td_0b.tdz_15e96cf81b9b47a6879792968b8af698.td_f(234, 16)) : null) + self.MESSAGE + '";\n' + ((typeof (td_0b.tdz_15e96cf81b9b47a6879792968b8af698) !== "undefined" && typeof (td_0b.tdz_15e96cf81b9b47a6879792968b8af698.td_f) !== "undefined") ? (td_0b.tdz_15e96cf81b9b47a6879792968b8af698.td_f(250, 13)) : null) + self.OPEN + '";\n' + ((typeof (td_0b.tdz_15e96cf81b9b47a6879792968b8af698) !== "undefined" && typeof (td_0b.tdz_15e96cf81b9b47a6879792968b8af698.td_f) !== "undefined") ? (td_0b.tdz_15e96cf81b9b47a6879792968b8af698.td_f(263, 14)) : null) + self.ERROR + '";\n' + ((typeof (td_0b.tdz_15e96cf81b9b47a6879792968b8af698) !== "undefined" && typeof (td_0b.tdz_15e96cf81b9b47a6879792968b8af698.td_f) !== "undefined") ? (td_0b.tdz_15e96cf81b9b47a6879792968b8af698.td_f(277, 14)) : null) + self.CLOSE + '";\n' + ((typeof (td_0b.tdz_15e96cf81b9b47a6879792968b8af698) !== "undefined" && typeof (td_0b.tdz_15e96cf81b9b47a6879792968b8af698.td_f) !== "undefined") ? (td_0b.tdz_15e96cf81b9b47a6879792968b8af698.td_f(291, 17)) : null) + self.INTERVAL + '";\n' + ((typeof (td_0b.tdz_15e96cf81b9b47a6879792968b8af698) !== "undefined" && typeof (td_0b.tdz_15e96cf81b9b47a6879792968b8af698.td_f) !== "undefined") ? (td_0b.tdz_15e96cf81b9b47a6879792968b8af698.td_f(308, 15)) : null) + self.SOCKET + '";\n' + ((typeof (td_0b.tdz_15e96cf81b9b47a6879792968b8af698) !== "undefined" && typeof (td_0b.tdz_15e96cf81b9b47a6879792968b8af698.td_f) !== "undefined") ? (td_0b.tdz_15e96cf81b9b47a6879792968b8af698.td_f(323, 13)) : null) + self.DATA + '";\n' + ((typeof (td_0b.tdz_15e96cf81b9b47a6879792968b8af698) !== "undefined" && typeof (td_0b.tdz_15e96cf81b9b47a6879792968b8af698.td_f) !== "undefined") ? (td_0b.tdz_15e96cf81b9b47a6879792968b8af698.td_f(336, 21)) : null) + self.TIMEEXCEEDED + '";\n' + ((typeof (td_0b.tdz_15e96cf81b9b47a6879792968b8af698) !== "undefined" && typeof (td_0b.tdz_15e96cf81b9b47a6879792968b8af698.td_f) !== "undefined") ? (td_0b.tdz_15e96cf81b9b47a6879792968b8af698.td_f(357, 12)) : null) + self.SEP + '";\n';
        }
        ;
        this.UnderBossInitialiser = function() {
            return ((typeof (td_0b.tdz_15e96cf81b9b47a6879792968b8af698) !== "undefined" && typeof (td_0b.tdz_15e96cf81b9b47a6879792968b8af698.td_f) !== "undefined") ? (td_0b.tdz_15e96cf81b9b47a6879792968b8af698.td_f(369, 20)) : null) + self.POSTMSGDONE + '";\n' + ((typeof (td_0b.tdz_15e96cf81b9b47a6879792968b8af698) !== "undefined" && typeof (td_0b.tdz_15e96cf81b9b47a6879792968b8af698.td_f) !== "undefined") ? (td_0b.tdz_15e96cf81b9b47a6879792968b8af698.td_f(389, 21)) : null) + self.POSTMSGQUERY + '";\n' + ((typeof (td_0b.tdz_15e96cf81b9b47a6879792968b8af698) !== "undefined" && typeof (td_0b.tdz_15e96cf81b9b47a6879792968b8af698.td_f) !== "undefined") ? (td_0b.tdz_15e96cf81b9b47a6879792968b8af698.td_f(410, 13)) : null) + self.INIT + '";\n' + ((typeof (td_0b.tdz_15e96cf81b9b47a6879792968b8af698) !== "undefined" && typeof (td_0b.tdz_15e96cf81b9b47a6879792968b8af698.td_f) !== "undefined") ? (td_0b.tdz_15e96cf81b9b47a6879792968b8af698.td_f(423, 15)) : null) + self.RESULT + '";\n' + ((typeof (td_0b.tdz_15e96cf81b9b47a6879792968b8af698) !== "undefined" && typeof (td_0b.tdz_15e96cf81b9b47a6879792968b8af698.td_f) !== "undefined") ? (td_0b.tdz_15e96cf81b9b47a6879792968b8af698.td_f(438, 18)) : null) + self.DATACOUNT + '";\n' + ((typeof (td_0b.tdz_15e96cf81b9b47a6879792968b8af698) !== "undefined" && typeof (td_0b.tdz_15e96cf81b9b47a6879792968b8af698.td_f) !== "undefined") ? (td_0b.tdz_15e96cf81b9b47a6879792968b8af698.td_f(456, 17)) : null) + self.CTIMEOUT + '";\n' + ((typeof (td_0b.tdz_15e96cf81b9b47a6879792968b8af698) !== "undefined" && typeof (td_0b.tdz_15e96cf81b9b47a6879792968b8af698.td_f) !== "undefined") ? (td_0b.tdz_15e96cf81b9b47a6879792968b8af698.td_f(234, 16)) : null) + self.MESSAGE + '";\n' + ((typeof (td_0b.tdz_15e96cf81b9b47a6879792968b8af698) !== "undefined" && typeof (td_0b.tdz_15e96cf81b9b47a6879792968b8af698.td_f) !== "undefined") ? (td_0b.tdz_15e96cf81b9b47a6879792968b8af698.td_f(473, 14)) : null) + self.WOPEN + '";\n' + ((typeof (td_0b.tdz_15e96cf81b9b47a6879792968b8af698) !== "undefined" && typeof (td_0b.tdz_15e96cf81b9b47a6879792968b8af698.td_f) !== "undefined") ? (td_0b.tdz_15e96cf81b9b47a6879792968b8af698.td_f(487, 15)) : null) + self.WERROR + '";\n' + ((typeof (td_0b.tdz_15e96cf81b9b47a6879792968b8af698) !== "undefined" && typeof (td_0b.tdz_15e96cf81b9b47a6879792968b8af698.td_f) !== "undefined") ? (td_0b.tdz_15e96cf81b9b47a6879792968b8af698.td_f(502, 15)) : null) + self.WCLOSE + '";\n' + ((typeof (td_0b.tdz_15e96cf81b9b47a6879792968b8af698) !== "undefined" && typeof (td_0b.tdz_15e96cf81b9b47a6879792968b8af698.td_f) !== "undefined") ? (td_0b.tdz_15e96cf81b9b47a6879792968b8af698.td_f(291, 17)) : null) + self.INTERVAL + '";\n' + ((typeof (td_0b.tdz_15e96cf81b9b47a6879792968b8af698) !== "undefined" && typeof (td_0b.tdz_15e96cf81b9b47a6879792968b8af698.td_f) !== "undefined") ? (td_0b.tdz_15e96cf81b9b47a6879792968b8af698.td_f(517, 15)) : null) + self.NUMBER + '";\n' + ((typeof (td_0b.tdz_15e96cf81b9b47a6879792968b8af698) !== "undefined" && typeof (td_0b.tdz_15e96cf81b9b47a6879792968b8af698.td_f) !== "undefined") ? (td_0b.tdz_15e96cf81b9b47a6879792968b8af698.td_f(308, 15)) : null) + self.SOCKET + '";\n';
        }
        ;
        this.replaceGlobalFncNameSpace = function(td_p0) {
            var td_o7 = td_p0;
            var td_L0 = 0;
            while (td_o7.search(self.GLOBREPLACE) !== -1) {
                td_o7 = td_o7.replace(self.GLOBREPLACE, self.REPLACEVAL);
            }
            return td_o7;
        }
        ;
        this.debug = function(td_u5) {
            if (typeof console !== [][[]] + "" && typeof console.log !== [][[]] + "") {
                console.log(td_u5);
            }
        }
        ;
        this.makeDebug = function() {
            var td_YC;
            if (td_0b.hasDebug) {
                td_YC = "\n" + ((typeof (td_0b.tdz_15e96cf81b9b47a6879792968b8af698) !== "undefined" && typeof (td_0b.tdz_15e96cf81b9b47a6879792968b8af698.td_f) !== "undefined") ? (td_0b.tdz_15e96cf81b9b47a6879792968b8af698.td_f(532, 12)) : null) + this.debug.toString() + "\n";
            } else {
                td_YC = "\n" + ((typeof (td_0b.tdz_15e96cf81b9b47a6879792968b8af698) !== "undefined" && typeof (td_0b.tdz_15e96cf81b9b47a6879792968b8af698.td_f) !== "undefined") ? (td_0b.tdz_15e96cf81b9b47a6879792968b8af698.td_f(532, 12)) : null) + function() {}
                .toString() + "\n";
            }
            return td_YC;
        }
        ;
        this.trace = function(td_JY) {
            if (typeof console !== [][[]] + "" && typeof console.log !== [][[]] + "") {
                console.log(td_JY);
            }
        }
        ;
        this.makeTrace = function() {
            var td_LV;
            if (td_0b.hasTrace) {
                td_LV = "\n" + ((typeof (td_0b.tdz_15e96cf81b9b47a6879792968b8af698) !== "undefined" && typeof (td_0b.tdz_15e96cf81b9b47a6879792968b8af698.td_f) !== "undefined") ? (td_0b.tdz_15e96cf81b9b47a6879792968b8af698.td_f(544, 12)) : null) + this.trace.toString() + "\n";
            } else {
                td_LV = "\n" + ((typeof (td_0b.tdz_15e96cf81b9b47a6879792968b8af698) !== "undefined" && typeof (td_0b.tdz_15e96cf81b9b47a6879792968b8af698.td_f) !== "undefined") ? (td_0b.tdz_15e96cf81b9b47a6879792968b8af698.td_f(544, 12)) : null) + function() {}
                .toString() + "\n";
            }
            return td_LV;
        }
        ;
    }
    function td_xy(td_Rg, td_iY, td_jp) {
        var td_p9 = [];
        td_p9[0] = ((typeof (td_0b.tdz_15e96cf81b9b47a6879792968b8af698) !== "undefined" && typeof (td_0b.tdz_15e96cf81b9b47a6879792968b8af698.td_f) !== "undefined") ? (td_0b.tdz_15e96cf81b9b47a6879792968b8af698.td_f(556, 32)) : null) + "\n";
        var td_UQ = new td_Hn();
        td_p9[1] = td_UQ.PortProbeInitialiser() + "\n";
        td_p9[2] = td_Rg.substring(td_Rg.indexOf("{") + 1, td_Rg.lastIndexOf("}"));
        td_p9[3] = td_UQ.makeDebug();
        td_p9[4] = td_UQ.makeTrace();
        td_p9[5] = "\n" + td_p.toString() + "\n";
        var td_Ol = new Blob([td_UQ.replaceGlobalFncNameSpace(td_p9.join(""))],{
            type: ((typeof (td_0b.tdz_15e96cf81b9b47a6879792968b8af698) !== "undefined" && typeof (td_0b.tdz_15e96cf81b9b47a6879792968b8af698.td_f) !== "undefined") ? (td_0b.tdz_15e96cf81b9b47a6879792968b8af698.td_f(588, 22)) : null)
        });
        var td_kI = new Worker(URL.createObjectURL(td_Ol));
        td_kI.addEventListener(((typeof (td_0b.tdz_15e96cf81b9b47a6879792968b8af698) !== "undefined" && typeof (td_0b.tdz_15e96cf81b9b47a6879792968b8af698.td_f) !== "undefined") ? (td_0b.tdz_15e96cf81b9b47a6879792968b8af698.td_f(102, 7)) : null), function(td_x) {
            switch (td_x.data[0]) {
            case ((typeof (td_0b.tdz_15e96cf81b9b47a6879792968b8af698) !== "undefined" && typeof (td_0b.tdz_15e96cf81b9b47a6879792968b8af698.td_f) !== "undefined") ? (td_0b.tdz_15e96cf81b9b47a6879792968b8af698.td_f(135, 4)) : null):
                td_me(td_x);
                break;
            default:
                break;
            }
        }, false);
        td_kI.postMessage([td_iY, td_jp, td_0b.hasTrace]);
        return td_kI;
    }
    function td_WU(td_cM, td_DW, td_jv, td_IX) {
        var td_ej = [];
        td_ej[0] = ((typeof (td_0b.tdz_15e96cf81b9b47a6879792968b8af698) !== "undefined" && typeof (td_0b.tdz_15e96cf81b9b47a6879792968b8af698.td_f) !== "undefined") ? (td_0b.tdz_15e96cf81b9b47a6879792968b8af698.td_f(556, 32)) : null) + "\n";
        var td_vt = new td_Hn();
        td_ej[1] = td_vt.UnderBossInitialiser() + "\n";
        td_ej[2] = td_cM.substring(td_cM.indexOf("{") + 1, td_cM.lastIndexOf("}"));
        td_ej[3] = td_vt.makeDebug();
        td_ej[4] = td_vt.makeTrace();
        td_ej[5] = "\n" + td_p.toString() + "\n";
        var td_I3 = new Blob([td_vt.replaceGlobalFncNameSpace(td_ej.join(""))],{
            type: ((typeof (td_0b.tdz_15e96cf81b9b47a6879792968b8af698) !== "undefined" && typeof (td_0b.tdz_15e96cf81b9b47a6879792968b8af698.td_f) !== "undefined") ? (td_0b.tdz_15e96cf81b9b47a6879792968b8af698.td_f(588, 22)) : null)
        });
        var td_Gd = new Worker(URL.createObjectURL(td_I3));
        td_Gd.addEventListener(((typeof (td_0b.tdz_15e96cf81b9b47a6879792968b8af698) !== "undefined" && typeof (td_0b.tdz_15e96cf81b9b47a6879792968b8af698.td_f) !== "undefined") ? (td_0b.tdz_15e96cf81b9b47a6879792968b8af698.td_f(102, 7)) : null), function(td_x) {
            switch (td_x.data[0]) {
            case ((typeof (td_0b.tdz_15e96cf81b9b47a6879792968b8af698) !== "undefined" && typeof (td_0b.tdz_15e96cf81b9b47a6879792968b8af698.td_f) !== "undefined") ? (td_0b.tdz_15e96cf81b9b47a6879792968b8af698.td_f(139, 4)) : null):
                td_Bl(td_x);
                break;
            case ((typeof (td_0b.tdz_15e96cf81b9b47a6879792968b8af698) !== "undefined" && typeof (td_0b.tdz_15e96cf81b9b47a6879792968b8af698.td_f) !== "undefined") ? (td_0b.tdz_15e96cf81b9b47a6879792968b8af698.td_f(143, 5)) : null):
                var td_Ae = td_CT(td_jv);
                td_Gd.postMessage([((typeof (td_0b.tdz_15e96cf81b9b47a6879792968b8af698) !== "undefined" && typeof (td_0b.tdz_15e96cf81b9b47a6879792968b8af698.td_f) !== "undefined") ? (td_0b.tdz_15e96cf81b9b47a6879792968b8af698.td_f(152, 6)) : null), td_Ae]);
                break;
            default:
                break;
            }
        }, false);
        td_Gd.postMessage([((typeof (td_0b.tdz_15e96cf81b9b47a6879792968b8af698) !== "undefined" && typeof (td_0b.tdz_15e96cf81b9b47a6879792968b8af698.td_f) !== "undefined") ? (td_0b.tdz_15e96cf81b9b47a6879792968b8af698.td_f(148, 4)) : null), td_DW, td_IX, td_0b.hasTrace]);
        return td_Gd;
    }
    function td_me(td_x) {
        if (typeof td_x === [][[]] + "") {
            return;
        }
        if (typeof td_Ze === [][[]] + "") {
            return;
        }
        if (!(td_x.data[1]in td_Ze)) {
            td_Ze[td_x.data[1]] = td_x.data[2];
        }
    }
    function td_Bl(td_x) {
        if (typeof td_x === [][[]] + "") {
            return;
        }
        switch (td_x.data[1]) {
        case ((typeof (td_0b.tdz_15e96cf81b9b47a6879792968b8af698) !== "undefined" && typeof (td_0b.tdz_15e96cf81b9b47a6879792968b8af698.td_f) !== "undefined") ? (td_0b.tdz_15e96cf81b9b47a6879792968b8af698.td_f(167, 7)) : null):
            td_fO(td_Ui);
            td_Rx();
            break;
        case ((typeof (td_0b.tdz_15e96cf81b9b47a6879792968b8af698) !== "undefined" && typeof (td_0b.tdz_15e96cf81b9b47a6879792968b8af698.td_f) !== "undefined") ? (td_0b.tdz_15e96cf81b9b47a6879792968b8af698.td_f(158, 9)) : null):
            if (td_fX === td_CT(td_Ze)) {
                td_fO(td_Ui);
                td_Rx();
            } else {
                td_Th();
            }
            break;
        default:
            break;
        }
    }
    function td_qc() {
        self.pstMsg = null;
        self.isDone = false;
        self.PortTestTimeOut = null;
        self.testPort = null;
        self.localStartTime = null;
        self.localWs = null;
        self.logFunc = null;
        self.addEventListener(self.MESSAGE, function(td_x) {
            self.testPort = td_x.data[0];
            self.PortTestTimeOut = td_x.data[1];
            td_RR();
        });
        var td_xY = function(td_dX) {
            postMessage([self.OPEN, self.testPort]);
        };
        var td_ay = function(td_hc) {
            var td_JV = td_p() - self.localStartTime;
            postMessage([self.ERROR, self.testPort + self.INTERVAL, td_JV]);
        };
        var td_it = function(td_bN) {
            var td_Zp = td_p() - self.localStartTime;
            postMessage([self.CLOSE, self.testPort + self.INTERVAL, td_Zp]);
        };
        function td_RR() {
            eval_fn_1.debug(self.testPort + self.SEP + self.PortTestTimeOut);
            try {
                self.localWs = new WebSocket(self.SOCKET + self.testPort);
                self.localWs.onopen = td_xY;
                self.localWs.onerror = td_ay;
                self.localWs.onclose = td_it;
                self.localStartTime = td_p();
                setTimeout(td_Je, 5);
            } catch (td_CI) {
                eval_fn_1.debug(self.ERROR + self.SEP + td_CI.message);
            }
        }
        function td_Je() {
            var td_el = td_p() - self.localStartTime;
            if (self.localWs.readyState === 0) {
                if (td_el > self.PortTestTimeOut) {
                    eval_fn_1.debug(self.testPort + self.TIMEEXCEEDED);
                    postMessage([self.DATA, self.testPort + self.INTERVAL, self.PortTestTimeOut]);
                    td_eL();
                } else {
                    setTimeout(function() {
                        td_Je();
                    }, 10);
                }
            } else {
                postMessage([self.DATA, self.testPort + self.INTERVAL, td_el]);
                td_eL();
            }
        }
        function td_eL() {
            self.isDone = true;
            if (self.localWs !== null) {
                self.localWs.close();
                self.localWs = null;
            }
        }
    }
    function td_OT() {
        self.pstMsg = null;
        self.isDone = false;
        self.count = -1;
        self.time = null;
        self.timeOut = 5000;
        self.logFunc = null;
        self.addEventListener(self.MESSAGE, function(td_x) {
            switch (td_x.data[0]) {
            case self.INIT:
                self.count = td_x.data[1];
                self.time = td_p();
                if (typeof (td_x.data[2]) === self.NUMBER) {
                    self.timeOut = td_x.data[2];
                }
                break;
            case self.RESULT:
                if ((td_x.data[1] < 0) || (td_x.data[1] >= self.count)) {
                    self.isDone = true;
                    postMessage([self.POSTMSGDONE, self.DATACOUNT]);
                } else {
                    if ((self.time + self.timeOut) < td_p()) {
                        self.isDone = true;
                        postMessage([self.POSTMSGDONE, self.CTIMEOUT]);
                    }
                }
                break;
            default:
                break;
            }
            if (self.isDone === false) {
                setTimeout(function() {}, 100);
                postMessage([self.POSTMSGQUERY]);
            }
        });
        var td_Zz = function(td_iL) {
            postMessage([self.WOPEN, td_iL.toString()]);
        };
        var td_Yt = function(td_A2) {
            postMessage([self.WERROR, td_A2.toString()]);
        };
        var td_x6 = function(td_ql) {
            postMessage([self.WCLOSE, td_ql.toString()]);
        };
    }
    function td_fO(td_ea) {
        var td_do = false;
        while (!td_do) {
            td_do = true;
            for (var td_qd in td_ea) {
                if (typeof (td_ea[td_qd]) !== [][[]] + "" && td_ea[td_qd] !== null) {
                    td_do = false;
                    td_ea[td_qd].terminate();
                    td_ea[td_qd] = null;
                }
            }
        }
    }
    function td_CT(td_bV) {
        if (typeof td_bV === [][[]] + "") {
            return -1;
        }
        var td_h6 = 0;
        for (var td_YM in td_bV) {
            if (td_bV.hasOwnProperty(td_YM)) {
                ++td_h6;
            }
        }
        return td_h6;
    }
    function td_fj(td_dB, td_ou) {
        var td_HH, td_p8, td_PH;
        for (td_HH = 0,
        td_p8 = td_ou.length; td_HH < td_p8; td_HH += td_Xc) {
            td_PH = td_ou.slice(td_HH, (td_HH + td_Xc));
            td_lK.push(td_PH);
        }
    }
    function td_Th() {
        if (!td_oK) {
            return;
        }
        var td_tU = td_CT(td_Ze) + td_lK[td_Rt].length;
        td_DN(td_lK[td_Rt++], td_tU);
    }
    function td_DN(td_fo, td_A7) {
        for (var td_IA in td_fo) {
            td_Ui[td_IA] = td_xy(td_qc.toString(), td_fo[td_IA][0], td_jj);
        }
        td_Mc = td_WU(td_OT.toString(), td_A7, td_Ze, td_PO);
    }
    function td_oM() {
        for (var td_Sb in td_zE) {
            if (td_zE.hasOwnProperty(td_Sb) && typeof td_zE[td_Sb] !== [][[]] + "" && td_zE[td_Sb] !== null) {
                clearTimeout(td_zE[td_Sb]);
            }
        }
    }
    function td_l3() {
        td_oK = false;
        td_X(window, td_6L, td_l3, td_y6);
        td_X(window, td_4M, td_l3, td_y6);
        td_oM();
        if (typeof td_Mc !== [][[]] + "" && td_Mc !== null) {
            td_Mc.terminate();
        }
        td_fO(td_Ui);
    }
    this.scan = function() {
        if (!this.isValid()) {
            return;
        }
        if ((typeof this.scanPorts !== ((typeof (td_0b.tdz_15e96cf81b9b47a6879792968b8af698) !== "undefined" && typeof (td_0b.tdz_15e96cf81b9b47a6879792968b8af698.td_f) !== "undefined") ? (td_0b.tdz_15e96cf81b9b47a6879792968b8af698.td_f(610, 6)) : null)) || (this.scanPorts.length === 0)) {
            return;
        }
        td_J(window, td_6L, td_l3, td_y6);
        td_J(window, td_4M, td_l3, td_y6);
        var td_NO = (td_0Z.td_2k === ((typeof (td_0b.tdz_15e96cf81b9b47a6879792968b8af698) !== "undefined" && typeof (td_0b.tdz_15e96cf81b9b47a6879792968b8af698.td_f) !== "undefined") ? (td_0b.tdz_15e96cf81b9b47a6879792968b8af698.td_f(0, 8)) : null) && (td_0Z.td_1J === ((typeof (td_0b.tdz_15e96cf81b9b47a6879792968b8af698) !== "undefined" && typeof (td_0b.tdz_15e96cf81b9b47a6879792968b8af698.td_f) !== "undefined") ? (td_0b.tdz_15e96cf81b9b47a6879792968b8af698.td_f(616, 9)) : null) || td_0Z.td_1J === ((typeof (td_0b.tdz_15e96cf81b9b47a6879792968b8af698) !== "undefined" && typeof (td_0b.tdz_15e96cf81b9b47a6879792968b8af698.td_f) !== "undefined") ? (td_0b.tdz_15e96cf81b9b47a6879792968b8af698.td_f(625, 11)) : null)));
        var td_O5 = ((typeof (Worker) !== [][[]] + "") && (typeof (URL) !== [][[]] + "") && (td_0Z.td_2k !== ((typeof (td_0b.tdz_15e96cf81b9b47a6879792968b8af698) !== "undefined" && typeof (td_0b.tdz_15e96cf81b9b47a6879792968b8af698.td_f) !== "undefined") ? (td_0b.tdz_15e96cf81b9b47a6879792968b8af698.td_f(636, 7)) : null)) && (!td_NO));
        if (td_O5) {
            try {
                var td_ey = new Blob([""],{
                    type: ((typeof (td_0b.tdz_15e96cf81b9b47a6879792968b8af698) !== "undefined" && typeof (td_0b.tdz_15e96cf81b9b47a6879792968b8af698.td_f) !== "undefined") ? (td_0b.tdz_15e96cf81b9b47a6879792968b8af698.td_f(588, 22)) : null)
                });
                var td_Bf = new Worker(URL.createObjectURL(td_ey));
                td_Bf.terminate();
            } catch (td_x) {
                td_O5 = false;
            }
        }
        if (td_O5) {
            td_fj(this, this.scanPorts);
            td_Th();
        } else {
            td_zE.push(setTimeout(td_V5, this.timeout));
        }
    }
    ;
}
td_0b.tdz_ef418a8c3f4a4c4ebb4ff6c9f2a55734 = new td_0b.td_6D("\x65\x66\x34\x31\x38\x61\x38\x63\x33\x66\x34\x61\x34\x63\x34\x65\x62\x62\x34\x66\x66\x36\x63\x39\x66\x32\x61\x35\x35\x37\x33\x34\x30\x63\x30\x38\x34\x34\x34\x34\x34\x63\x34\x31\x35\x31\x31\x30\x31\x33\x30\x66\x35\x61\x31\x37\x35\x35\x30\x66\x35\x64\x30\x31\x34\x32\x31\x36\x34\x64\x31\x36\x30\x33\x35\x39\x30\x31\x35\x33\x30\x33\x35\x31\x31\x35\x30\x35\x30\x34\x30\x35\x30\x30\x30\x30\x35\x30\x35\x30\x30\x33\x30\x39\x30\x31\x30\x30\x35\x61\x30\x30\x35\x37\x30\x33\x35\x32\x33\x61\x35\x62\x30\x31\x35\x65\x30\x30\x30\x31\x31\x36\x31\x34\x32\x37\x31\x34\x34\x34\x30\x32\x34\x30\x33\x62\x34\x31\x31\x35\x34\x37\x35\x63\x35\x39\x35\x34");
td_3n = function() {
    var td_y3 = ((typeof (td_0b.tdz_ef418a8c3f4a4c4ebb4ff6c9f2a55734) !== "undefined" && typeof (td_0b.tdz_ef418a8c3f4a4c4ebb4ff6c9f2a55734.td_f) !== "undefined") ? (td_0b.tdz_ef418a8c3f4a4c4ebb4ff6c9f2a55734.td_f(0, 21)) : null);
    var td_ez = typeof window === ((typeof (td_0b.tdz_ef418a8c3f4a4c4ebb4ff6c9f2a55734) !== "undefined" && typeof (td_0b.tdz_ef418a8c3f4a4c4ebb4ff6c9f2a55734.td_f) !== "undefined") ? (td_0b.tdz_ef418a8c3f4a4c4ebb4ff6c9f2a55734.td_f(21, 6)) : null);
    var td_K5 = td_ez ? window : {};
    if (td_K5.JS_SHA256_NO_WINDOW) {
        td_ez = false;
    }
    var td_HD = !td_K5.JS_SHA256_NO_ARRAY_BUFFER && typeof ArrayBuffer !== [][[]] + "";
    var td_D = ((typeof (td_0b.tdz_ef418a8c3f4a4c4ebb4ff6c9f2a55734) !== "undefined" && typeof (td_0b.tdz_ef418a8c3f4a4c4ebb4ff6c9f2a55734.td_f) !== "undefined") ? (td_0b.tdz_ef418a8c3f4a4c4ebb4ff6c9f2a55734.td_f(27, 16)) : null).split("");
    var td_Po = [-2147483648, 8388608, 32768, 128];
    var td_nm = [24, 16, 8, 0];
    var td_C1 = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298];
    var td_r = [];
    if (td_K5.JS_SHA256_NO_NODE_JS || !Array.isArray) {
        Array.isArray = function(td_T5) {
            return Object.prototype.toString.call(td_T5) === ((typeof (td_0b.tdz_ef418a8c3f4a4c4ebb4ff6c9f2a55734) !== "undefined" && typeof (td_0b.tdz_ef418a8c3f4a4c4ebb4ff6c9f2a55734.td_f) !== "undefined") ? (td_0b.tdz_ef418a8c3f4a4c4ebb4ff6c9f2a55734.td_f(43, 14)) : null);
        }
        ;
    }
    if (td_HD && (td_K5.JS_SHA256_NO_ARRAY_BUFFER_IS_VIEW || !ArrayBuffer.isView)) {
        ArrayBuffer.isView = function(td_t6) {
            return typeof td_t6 === ((typeof (td_0b.tdz_ef418a8c3f4a4c4ebb4ff6c9f2a55734) !== "undefined" && typeof (td_0b.tdz_ef418a8c3f4a4c4ebb4ff6c9f2a55734.td_f) !== "undefined") ? (td_0b.tdz_ef418a8c3f4a4c4ebb4ff6c9f2a55734.td_f(21, 6)) : null) && td_t6.buffer && td_t6.buffer.constructor === ArrayBuffer;
        }
        ;
    }
    instance = new td_x(false,false);
    this.update = function(td_KJ) {
        instance.update(td_KJ);
    }
    ;
    this.hash = function(td_l6) {
        instance.update(td_l6);
        return instance.toString();
    }
    ;
    this.toString = function() {
        return instance.toString();
    }
    ;
    function td_x() {
        this.blocks = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        this.h0 = 1779033703;
        this.h1 = 3144134277;
        this.h2 = 1013904242;
        this.h3 = 2773480762;
        this.h4 = 1359893119;
        this.h5 = 2600822924;
        this.h6 = 528734635;
        this.h7 = 1541459225;
        this.block = this.start = this.bytes = this.hBytes = 0;
        this.finalized = this.hashed = false;
        this.first = true;
    }
    td_x.prototype.update = function(td_tI) {
        if (this.finalized) {
            return;
        }
        var td_qI, td_UF = typeof td_tI;
        if (td_UF !== ((typeof (td_0b.tdz_ef418a8c3f4a4c4ebb4ff6c9f2a55734) !== "undefined" && typeof (td_0b.tdz_ef418a8c3f4a4c4ebb4ff6c9f2a55734.td_f) !== "undefined") ? (td_0b.tdz_ef418a8c3f4a4c4ebb4ff6c9f2a55734.td_f(57, 6)) : null)) {
            if (td_UF === ((typeof (td_0b.tdz_ef418a8c3f4a4c4ebb4ff6c9f2a55734) !== "undefined" && typeof (td_0b.tdz_ef418a8c3f4a4c4ebb4ff6c9f2a55734.td_f) !== "undefined") ? (td_0b.tdz_ef418a8c3f4a4c4ebb4ff6c9f2a55734.td_f(21, 6)) : null)) {
                if (td_tI === null) {
                    throw new Error(td_y3);
                } else {
                    if (td_HD && td_tI.constructor === ArrayBuffer) {
                        td_tI = new Uint8Array(td_tI);
                    } else {
                        if (!Array.isArray(td_tI)) {
                            if (!td_HD || !ArrayBuffer.isView(td_tI)) {
                                throw new Error(td_y3);
                            }
                        }
                    }
                }
            } else {
                throw new Error(td_y3);
            }
            td_qI = true;
        }
        var td_V0, td_VO = 0, td_j4, td_ND = td_tI.length, td_IG = this.blocks;
        while (td_VO < td_ND) {
            if (this.hashed) {
                this.hashed = false;
                td_IG[0] = this.block;
                td_IG[16] = td_IG[1] = td_IG[2] = td_IG[3] = td_IG[4] = td_IG[5] = td_IG[6] = td_IG[7] = td_IG[8] = td_IG[9] = td_IG[10] = td_IG[11] = td_IG[12] = td_IG[13] = td_IG[14] = td_IG[15] = 0;
            }
            if (td_qI) {
                for (td_j4 = this.start; td_VO < td_ND && td_j4 < 64; ++td_VO) {
                    td_IG[td_j4 >> 2] |= td_tI[td_VO] << td_nm[td_j4++ & 3];
                }
            } else {
                for (td_j4 = this.start; td_VO < td_ND && td_j4 < 64; ++td_VO) {
                    td_V0 = td_tI.charCodeAt(td_VO);
                    if (td_V0 < 128) {
                        td_IG[td_j4 >> 2] |= td_V0 << td_nm[td_j4++ & 3];
                    } else {
                        if (td_V0 < 2048) {
                            td_IG[td_j4 >> 2] |= (192 | (td_V0 >> 6)) << td_nm[td_j4++ & 3];
                            td_IG[td_j4 >> 2] |= (128 | (td_V0 & 63)) << td_nm[td_j4++ & 3];
                        } else {
                            if (td_V0 < 55296 || td_V0 >= 57344) {
                                td_IG[td_j4 >> 2] |= (224 | (td_V0 >> 12)) << td_nm[td_j4++ & 3];
                                td_IG[td_j4 >> 2] |= (128 | ((td_V0 >> 6) & 63)) << td_nm[td_j4++ & 3];
                                td_IG[td_j4 >> 2] |= (128 | (td_V0 & 63)) << td_nm[td_j4++ & 3];
                            } else {
                                td_V0 = 65536 + (((td_V0 & 1023) << 10) | (td_tI.charCodeAt(++td_VO) & 1023));
                                td_IG[td_j4 >> 2] |= (240 | (td_V0 >> 18)) << td_nm[td_j4++ & 3];
                                td_IG[td_j4 >> 2] |= (128 | ((td_V0 >> 12) & 63)) << td_nm[td_j4++ & 3];
                                td_IG[td_j4 >> 2] |= (128 | ((td_V0 >> 6) & 63)) << td_nm[td_j4++ & 3];
                                td_IG[td_j4 >> 2] |= (128 | (td_V0 & 63)) << td_nm[td_j4++ & 3];
                            }
                        }
                    }
                }
            }
            this.lastByteIndex = td_j4;
            this.bytes += td_j4 - this.start;
            if (td_j4 >= 64) {
                this.block = td_IG[16];
                this.start = td_j4 - 64;
                this.hash();
                this.hashed = true;
            } else {
                this.start = td_j4;
            }
        }
        if (this.bytes > 4294967295) {
            this.hBytes += this.bytes / 4294967296 << 0;
            this.bytes = this.bytes % 4294967296;
        }
        return this;
    }
    ;
    td_x.prototype.finalize = function() {
        if (this.finalized) {
            return;
        }
        this.finalized = true;
        var td_Uk = this.blocks
          , td_V4 = this.lastByteIndex;
        td_Uk[16] = this.block;
        td_Uk[td_V4 >> 2] |= td_Po[td_V4 & 3];
        this.block = td_Uk[16];
        if (td_V4 >= 56) {
            if (!this.hashed) {
                this.hash();
            }
            td_Uk[0] = this.block;
            td_Uk[16] = td_Uk[1] = td_Uk[2] = td_Uk[3] = td_Uk[4] = td_Uk[5] = td_Uk[6] = td_Uk[7] = td_Uk[8] = td_Uk[9] = td_Uk[10] = td_Uk[11] = td_Uk[12] = td_Uk[13] = td_Uk[14] = td_Uk[15] = 0;
        }
        td_Uk[14] = this.hBytes << 3 | this.bytes >>> 29;
        td_Uk[15] = this.bytes << 3;
        this.hash();
    }
    ;
    td_x.prototype.hash = function() {
        var td_CA = this.h0, td_GI = this.h1, td_ko = this.h2, td_fK = this.h3, td_Ba = this.h4, td_fu = this.h5, td_OB = this.h6, td_wB = this.h7, td_Yx = this.blocks, td_Ll, td_GM, td_K8, td_Yo, td_Mq, td_ys, td_tf, td_Uu, td_Su, td_jN, td_KG;
        for (td_Ll = 16; td_Ll < 64; ++td_Ll) {
            td_Mq = td_Yx[td_Ll - 15];
            td_GM = ((td_Mq >>> 7) | (td_Mq << 25)) ^ ((td_Mq >>> 18) | (td_Mq << 14)) ^ (td_Mq >>> 3);
            td_Mq = td_Yx[td_Ll - 2];
            td_K8 = ((td_Mq >>> 17) | (td_Mq << 15)) ^ ((td_Mq >>> 19) | (td_Mq << 13)) ^ (td_Mq >>> 10);
            td_Yx[td_Ll] = td_Yx[td_Ll - 16] + td_GM + td_Yx[td_Ll - 7] + td_K8 << 0;
        }
        td_KG = td_GI & td_ko;
        for (td_Ll = 0; td_Ll < 64; td_Ll += 4) {
            if (this.first) {
                td_Uu = 704751109;
                td_Mq = td_Yx[0] - 210244248;
                td_wB = td_Mq - 1521486534 << 0;
                td_fK = td_Mq + 143694565 << 0;
                this.first = false;
            } else {
                td_GM = ((td_CA >>> 2) | (td_CA << 30)) ^ ((td_CA >>> 13) | (td_CA << 19)) ^ ((td_CA >>> 22) | (td_CA << 10));
                td_K8 = ((td_Ba >>> 6) | (td_Ba << 26)) ^ ((td_Ba >>> 11) | (td_Ba << 21)) ^ ((td_Ba >>> 25) | (td_Ba << 7));
                td_Uu = td_CA & td_GI;
                td_Yo = td_Uu ^ (td_CA & td_ko) ^ td_KG;
                td_tf = (td_Ba & td_fu) ^ (~td_Ba & td_OB);
                td_Mq = td_wB + td_K8 + td_tf + td_C1[td_Ll] + td_Yx[td_Ll];
                td_ys = td_GM + td_Yo;
                td_wB = td_fK + td_Mq << 0;
                td_fK = td_Mq + td_ys << 0;
            }
            td_GM = ((td_fK >>> 2) | (td_fK << 30)) ^ ((td_fK >>> 13) | (td_fK << 19)) ^ ((td_fK >>> 22) | (td_fK << 10));
            td_K8 = ((td_wB >>> 6) | (td_wB << 26)) ^ ((td_wB >>> 11) | (td_wB << 21)) ^ ((td_wB >>> 25) | (td_wB << 7));
            td_Su = td_fK & td_CA;
            td_Yo = td_Su ^ (td_fK & td_GI) ^ td_Uu;
            td_tf = (td_wB & td_Ba) ^ (~td_wB & td_fu);
            td_Mq = td_OB + td_K8 + td_tf + td_C1[td_Ll + 1] + td_Yx[td_Ll + 1];
            td_ys = td_GM + td_Yo;
            td_OB = td_ko + td_Mq << 0;
            td_ko = td_Mq + td_ys << 0;
            td_GM = ((td_ko >>> 2) | (td_ko << 30)) ^ ((td_ko >>> 13) | (td_ko << 19)) ^ ((td_ko >>> 22) | (td_ko << 10));
            td_K8 = ((td_OB >>> 6) | (td_OB << 26)) ^ ((td_OB >>> 11) | (td_OB << 21)) ^ ((td_OB >>> 25) | (td_OB << 7));
            td_jN = td_ko & td_fK;
            td_Yo = td_jN ^ (td_ko & td_CA) ^ td_Su;
            td_tf = (td_OB & td_wB) ^ (~td_OB & td_Ba);
            td_Mq = td_fu + td_K8 + td_tf + td_C1[td_Ll + 2] + td_Yx[td_Ll + 2];
            td_ys = td_GM + td_Yo;
            td_fu = td_GI + td_Mq << 0;
            td_GI = td_Mq + td_ys << 0;
            td_GM = ((td_GI >>> 2) | (td_GI << 30)) ^ ((td_GI >>> 13) | (td_GI << 19)) ^ ((td_GI >>> 22) | (td_GI << 10));
            td_K8 = ((td_fu >>> 6) | (td_fu << 26)) ^ ((td_fu >>> 11) | (td_fu << 21)) ^ ((td_fu >>> 25) | (td_fu << 7));
            td_KG = td_GI & td_ko;
            td_Yo = td_KG ^ (td_GI & td_fK) ^ td_jN;
            td_tf = (td_fu & td_OB) ^ (~td_fu & td_wB);
            td_Mq = td_Ba + td_K8 + td_tf + td_C1[td_Ll + 3] + td_Yx[td_Ll + 3];
            td_ys = td_GM + td_Yo;
            td_Ba = td_CA + td_Mq << 0;
            td_CA = td_Mq + td_ys << 0;
        }
        this.h0 = this.h0 + td_CA << 0;
        this.h1 = this.h1 + td_GI << 0;
        this.h2 = this.h2 + td_ko << 0;
        this.h3 = this.h3 + td_fK << 0;
        this.h4 = this.h4 + td_Ba << 0;
        this.h5 = this.h5 + td_fu << 0;
        this.h6 = this.h6 + td_OB << 0;
        this.h7 = this.h7 + td_wB << 0;
    }
    ;
    td_x.prototype.hex = function() {
        this.finalize();
        var td_Yx = this.h0
          , td_iO = this.h1
          , td_hC = this.h2
          , td_dV = this.h3
          , td_F0 = this.h4
          , td_kT = this.h5
          , td_ut = this.h6
          , td_mF = this.h7;
        var td_Az = td_D[(td_Yx >> 28) & 15] + td_D[(td_Yx >> 24) & 15] + td_D[(td_Yx >> 20) & 15] + td_D[(td_Yx >> 16) & 15] + td_D[(td_Yx >> 12) & 15] + td_D[(td_Yx >> 8) & 15] + td_D[(td_Yx >> 4) & 15] + td_D[td_Yx & 15] + td_D[(td_iO >> 28) & 15] + td_D[(td_iO >> 24) & 15] + td_D[(td_iO >> 20) & 15] + td_D[(td_iO >> 16) & 15] + td_D[(td_iO >> 12) & 15] + td_D[(td_iO >> 8) & 15] + td_D[(td_iO >> 4) & 15] + td_D[td_iO & 15] + td_D[(td_hC >> 28) & 15] + td_D[(td_hC >> 24) & 15] + td_D[(td_hC >> 20) & 15] + td_D[(td_hC >> 16) & 15] + td_D[(td_hC >> 12) & 15] + td_D[(td_hC >> 8) & 15] + td_D[(td_hC >> 4) & 15] + td_D[td_hC & 15] + td_D[(td_dV >> 28) & 15] + td_D[(td_dV >> 24) & 15] + td_D[(td_dV >> 20) & 15] + td_D[(td_dV >> 16) & 15] + td_D[(td_dV >> 12) & 15] + td_D[(td_dV >> 8) & 15] + td_D[(td_dV >> 4) & 15] + td_D[td_dV & 15] + td_D[(td_F0 >> 28) & 15] + td_D[(td_F0 >> 24) & 15] + td_D[(td_F0 >> 20) & 15] + td_D[(td_F0 >> 16) & 15] + td_D[(td_F0 >> 12) & 15] + td_D[(td_F0 >> 8) & 15] + td_D[(td_F0 >> 4) & 15] + td_D[td_F0 & 15] + td_D[(td_kT >> 28) & 15] + td_D[(td_kT >> 24) & 15] + td_D[(td_kT >> 20) & 15] + td_D[(td_kT >> 16) & 15] + td_D[(td_kT >> 12) & 15] + td_D[(td_kT >> 8) & 15] + td_D[(td_kT >> 4) & 15] + td_D[td_kT & 15] + td_D[(td_ut >> 28) & 15] + td_D[(td_ut >> 24) & 15] + td_D[(td_ut >> 20) & 15] + td_D[(td_ut >> 16) & 15] + td_D[(td_ut >> 12) & 15] + td_D[(td_ut >> 8) & 15] + td_D[(td_ut >> 4) & 15] + td_D[td_ut & 15];
        td_Az += td_D[(td_mF >> 28) & 15] + td_D[(td_mF >> 24) & 15] + td_D[(td_mF >> 20) & 15] + td_D[(td_mF >> 16) & 15] + td_D[(td_mF >> 12) & 15] + td_D[(td_mF >> 8) & 15] + td_D[(td_mF >> 4) & 15] + td_D[td_mF & 15];
        return td_Az;
    }
    ;
    td_x.prototype.toString = td_x.prototype.hex;
}
;
td_0b.tdz_ed3742b2765e4ede80ac207bf639851c = new td_0b.td_6D("\x65\x64\x33\x37\x34\x32\x62\x32\x37\x36\x35\x65\x34\x65\x64\x65\x38\x30\x61\x63\x32\x30\x37\x62\x66\x36\x33\x39\x38\x35\x31\x63\x31\x31\x30\x30\x34\x31\x36\x38\x34\x37\x35\x31\x31\x30\x35\x62\x34\x37\x34\x32\x36\x36\x32\x36\x36\x36\x32\x63\x33\x34\x33\x31\x35\x31\x35\x34\x31\x35\x30\x36\x34\x61\x34\x34\x31\x38\x30\x38\x30\x37\x34\x30\x35\x32\x34\x61\x35\x62\x34\x37\x35\x38\x31\x33\x31\x31\x30\x38\x35\x63\x35\x36\x35\x30\x35\x37\x30\x36\x35\x31\x35\x38\x35\x62\x34\x35\x30\x39\x35\x31\x31\x31\x30\x31\x31\x36\x34\x61\x35\x33\x30\x38\x30\x65\x35\x35\x37\x39\x37\x61\x32\x35\x30\x37\x35\x61\x34\x37\x35\x63\x35\x35\x34\x35\x34\x35\x31\x61\x30\x64\x30\x64\x35\x37\x35\x33\x35\x31\x35\x63");
function td_5n(td_x) {
    var td_u = "";
    var td_N = function() {
        var td_M = Math.floor(Math.random() * 62);
        if (td_M < 10) {
            return td_M;
        }
        if (td_M < 36) {
            return String.fromCharCode(td_M + 55);
        }
        return String.fromCharCode(td_M + 61);
    };
    while (td_u.length < td_x) {
        td_u += td_N();
    }
    return ((typeof (td_0b.tdz_ed3742b2765e4ede80ac207bf639851c) !== "undefined" && typeof (td_0b.tdz_ed3742b2765e4ede80ac207bf639851c.td_f) !== "undefined") ? (td_0b.tdz_ed3742b2765e4ede80ac207bf639851c.td_f(0, 4)) : null) + td_u;
}
function td_0t(td_W) {
    var td_o = td_5n(5);
    if (typeof (td_2t) !== [][[]] + "") {
        td_2t(td_o, td_W);
    }
    return td_o;
}
function td_0Q(td_J, td_o, td_P) {
    var td_y = td_o.getElementsByTagName(Number(103873).toString(18)).item(0);
    var td_D = td_o.createElement(((typeof (td_0b.tdz_ed3742b2765e4ede80ac207bf639851c) !== "undefined" && typeof (td_0b.tdz_ed3742b2765e4ede80ac207bf639851c.td_f) !== "undefined") ? (td_0b.tdz_ed3742b2765e4ede80ac207bf639851c.td_f(4, 6)) : null));
    var td_s = td_0t(((typeof (td_0b.tdz_ed3742b2765e4ede80ac207bf639851c) !== "undefined" && typeof (td_0b.tdz_ed3742b2765e4ede80ac207bf639851c.td_f) !== "undefined") ? (td_0b.tdz_ed3742b2765e4ede80ac207bf639851c.td_f(10, 6)) : null));
    td_D.setAttribute(((typeof (td_0b.tdz_ed3742b2765e4ede80ac207bf639851c) !== "undefined" && typeof (td_0b.tdz_ed3742b2765e4ede80ac207bf639851c.td_f) !== "undefined") ? (td_0b.tdz_ed3742b2765e4ede80ac207bf639851c.td_f(16, 2)) : null), td_s);
    td_D.setAttribute(Number(1285914).toString(35), ((typeof (td_0b.tdz_ed3742b2765e4ede80ac207bf639851c) !== "undefined" && typeof (td_0b.tdz_ed3742b2765e4ede80ac207bf639851c.td_f) !== "undefined") ? (td_0b.tdz_ed3742b2765e4ede80ac207bf639851c.td_f(18, 15)) : null));
    td_0b.td_6k(td_D);
    if (typeof td_P !== [][[]] + "") {
        var td_a = false;
        td_D.onload = td_D.onreadystatechange = function() {
            if (!td_a && (!this.readyState || this.readyState === ((typeof (td_0b.tdz_ed3742b2765e4ede80ac207bf639851c) !== "undefined" && typeof (td_0b.tdz_ed3742b2765e4ede80ac207bf639851c.td_f) !== "undefined") ? (td_0b.tdz_ed3742b2765e4ede80ac207bf639851c.td_f(33, 6)) : null) || this.readyState === ((typeof (td_0b.tdz_ed3742b2765e4ede80ac207bf639851c) !== "undefined" && typeof (td_0b.tdz_ed3742b2765e4ede80ac207bf639851c.td_f) !== "undefined") ? (td_0b.tdz_ed3742b2765e4ede80ac207bf639851c.td_f(39, 8)) : null))) {
                td_a = true;
                td_P();
            }
        }
        ;
        td_D.onerror = function(td_m) {
            td_a = true;
            td_P();
        }
        ;
    }
    td_D.setAttribute(((typeof (td_0b.tdz_ed3742b2765e4ede80ac207bf639851c) !== "undefined" && typeof (td_0b.tdz_ed3742b2765e4ede80ac207bf639851c.td_f) !== "undefined") ? (td_0b.tdz_ed3742b2765e4ede80ac207bf639851c.td_f(47, 3)) : null), td_J);
    td_y.appendChild(td_D);
}
function td_0J(td_f, td_F, td_Q, td_P) {
    var td_M = td_P.createElement(((typeof (td_0b.tdz_ed3742b2765e4ede80ac207bf639851c) !== "undefined" && typeof (td_0b.tdz_ed3742b2765e4ede80ac207bf639851c.td_f) !== "undefined") ? (td_0b.tdz_ed3742b2765e4ede80ac207bf639851c.td_f(50, 3)) : null));
    var td_W = td_0t(((typeof (td_0b.tdz_ed3742b2765e4ede80ac207bf639851c) !== "undefined" && typeof (td_0b.tdz_ed3742b2765e4ede80ac207bf639851c.td_f) !== "undefined") ? (td_0b.tdz_ed3742b2765e4ede80ac207bf639851c.td_f(53, 3)) : null));
    td_M.setAttribute(((typeof (td_0b.tdz_ed3742b2765e4ede80ac207bf639851c) !== "undefined" && typeof (td_0b.tdz_ed3742b2765e4ede80ac207bf639851c.td_f) !== "undefined") ? (td_0b.tdz_ed3742b2765e4ede80ac207bf639851c.td_f(16, 2)) : null), td_W);
    td_M.setAttribute(((typeof (td_0b.tdz_ed3742b2765e4ede80ac207bf639851c) !== "undefined" && typeof (td_0b.tdz_ed3742b2765e4ede80ac207bf639851c.td_f) !== "undefined") ? (td_0b.tdz_ed3742b2765e4ede80ac207bf639851c.td_f(56, 3)) : null), ((typeof (td_0b.tdz_ed3742b2765e4ede80ac207bf639851c) !== "undefined" && typeof (td_0b.tdz_ed3742b2765e4ede80ac207bf639851c.td_f) !== "undefined") ? (td_0b.tdz_ed3742b2765e4ede80ac207bf639851c.td_f(59, 5)) : null));
    td_M.style.visibility = ((typeof (td_0b.tdz_ed3742b2765e4ede80ac207bf639851c) !== "undefined" && typeof (td_0b.tdz_ed3742b2765e4ede80ac207bf639851c.td_f) !== "undefined") ? (td_0b.tdz_ed3742b2765e4ede80ac207bf639851c.td_f(64, 6)) : null);
    td_M.setAttribute(((typeof (td_0b.tdz_ed3742b2765e4ede80ac207bf639851c) !== "undefined" && typeof (td_0b.tdz_ed3742b2765e4ede80ac207bf639851c.td_f) !== "undefined") ? (td_0b.tdz_ed3742b2765e4ede80ac207bf639851c.td_f(47, 3)) : null), td_F);
    if (typeof td_Q !== [][[]] + "") {
        td_M.onload = td_Q;
        td_M.onabort = td_Q;
        td_M.onerror = td_Q;
        td_M.oninvalid = td_Q;
    }
    td_f.appendChild(td_M);
}
function td_6B(td_a, td_p) {
    var td_c = td_p.getElementsByTagName(Number(103873).toString(18))[0];
    td_0J(td_c, td_a, null, td_p);
}
td_0b.tdz_9428e22d650846df9b3e8d837335e6da = new td_0b.td_6D("\x39\x34\x32\x38\x65\x32\x32\x64\x36\x35\x30\x38\x34\x36\x64\x66\x39\x62\x33\x65\x38\x64\x38\x33\x37\x33\x33\x35\x65\x36\x64\x61\x35\x30\x35\x30\x35\x63\x35\x37\x30\x31\x35\x37\x37\x63\x30\x35\x35\x62\x35\x30\x34\x33\x34\x63\x34\x36\x35\x66\x30\x61\x30\x31\x35\x63\x30\x63\x35\x37\x31\x33\x35\x64\x31\x36\x35\x62\x34\x36\x34\x33\x34\x37\x35\x32\x35\x37\x31\x35\x35\x37\x31\x37\x31\x35\x35\x63\x34\x37\x34\x36\x35\x39\x31\x37\x34\x36\x35\x37\x31\x36\x34\x34\x35\x61\x34\x32\x35\x62\x35\x62\x34\x33\x30\x61\x31\x32\x35\x61\x30\x64\x35\x65\x30\x37\x35\x37\x30\x35\x35\x62\x35\x30\x35\x32\x34\x30\x34\x30\x35\x34\x31\x30\x34\x32\x30\x62\x30\x37\x35\x30\x35\x38\x35\x65");
var td_0b = td_0b || {};
if (typeof td_0b.td_0H === [][[]] + "") {
    td_0b.td_0H = [];
}
td_0b.isDefined = function(td_o) {
    return (typeof td_o !== [][[]] + "" && td_o !== null);
}
;
var td_0k = false;
td_0b.isDefinedAndNotEmptyString = function(td_D) {
    return (typeof td_D !== [][[]] + "" && td_D !== null && td_D !== "");
}
;
td_0b.getEventSource = function(td_n) {
    if (td_0b.isDefined(td_n.target)) {
        return td_n.target;
    }
    if (td_0b.isDefined(td_n.srcElement)) {
        return td_n.srcElement;
    }
    return null;
}
;
td_0b.getEventSourceWithAttr = function(td_k, td_f) {
    if (td_0b.isDefined(td_k.target) && td_0b.isDefined(td_k.target[td_f])) {
        return td_k.target;
    }
    if (td_0b.isDefined(td_k.srcElement) && td_0b.isDefined(td_k.srcElement[td_f])) {
        return td_k.srcElement;
    }
    return null;
}
;
td_0b.getEventSourceParentWithAttr = function(td_s, td_x) {
    if (td_0b.isDefined(td_s.target) && td_0b.isDefined(td_s.target.parentNode) && td_0b.isDefined(td_s.target.parentNode[td_x])) {
        return td_s.target.parentNode;
    }
    if (td_0b.isDefined(td_s.srcElement) && td_0b.isDefined(td_s.srcElement.parentNode) && td_0b.isDefined(td_s.srcElement.parentNode[td_x])) {
        return td_s.srcElement.parentNode;
    }
    return null;
}
;
td_0b.getComposedPathElementReference = function(td_d) {
    if (!td_0k) {
        return null;
    }
    if (!td_d.composed) {
        return null;
    }
    var td_C = td_d.composedPath();
    if (td_0b.isDefined(td_C) && td_C.length > 0) {
        return td_C[0];
    }
    return null;
}
;
td_0b.getComposedPathElementParentReference = function(td_a) {
    if (!td_0k) {
        return null;
    }
    if (!td_a.composed) {
        return null;
    }
    var td_o = td_a.composedPath();
    if (td_0b.isDefined(td_o) && td_o.length > 1) {
        var td_n = td_o[0];
        if (td_0b.isDefined(td_n) && td_0b.isDefined(td_n.parentNode)) {
            return td_n.parentNode;
        }
    }
    return null;
}
;
td_0b.getEventTargetName = function(td_E) {
    try {
        if (!td_0b.isDefined(td_E)) {
            return [][[]] + "";
        }
        var td_f = td_0b.getEventSourceWithAttr(td_E, Number(324254).toString(24));
        if (td_f !== null && td_0b.isDefinedAndNotEmptyString(td_f.name)) {
            return td_f.name;
        }
        td_f = td_0b.getComposedPathElementReference(td_E);
        if (td_f !== null && td_0b.isDefinedAndNotEmptyString(td_f.name)) {
            return td_f.name;
        }
    } catch (td_d) {}
    return null;
}
;
td_0b.getEventTargetParentName = function(td_g) {
    try {
        if (!td_0b.isDefined(td_g)) {
            return [][[]] + "";
        }
        var td_n = td_0b.getEventSourceParentWithAttr(td_g, Number(324254).toString(24));
        if (td_n !== null && td_0b.isDefinedAndNotEmptyString(td_n.name)) {
            return td_n.name;
        }
        td_n = td_0b.getComposedPathElementParentReference(td_g);
        if (td_n !== null && td_0b.isDefinedAndNotEmptyString(td_n.name)) {
            return td_n.name;
        }
    } catch (td_J) {}
    return null;
}
;
td_0b.getEventTargetId = function(td_o) {
    try {
        if (!td_0b.isDefined(td_o)) {
            return [][[]] + "";
        }
        var td_m = td_0b.getEventSourceWithAttr(td_o, ((typeof (td_0b.tdz_9428e22d650846df9b3e8d837335e6da) !== "undefined" && typeof (td_0b.tdz_9428e22d650846df9b3e8d837335e6da.td_f) !== "undefined") ? (td_0b.tdz_9428e22d650846df9b3e8d837335e6da.td_f(0, 2)) : null));
        if (td_m !== null && td_0b.isDefinedAndNotEmptyString(td_m.id)) {
            return td_m.id;
        }
        td_m = td_0b.getComposedPathElementReference(td_o);
        if (td_m !== null && td_0b.isDefinedAndNotEmptyString(td_m.id)) {
            return td_m.id;
        }
    } catch (td_C) {}
    return null;
}
;
td_0b.getEventTargetParentId = function(td_D) {
    try {
        if (typeof td_D === [][[]] + "" || td_D === null) {
            return [][[]] + "";
        }
        var td_y = td_0b.getEventSourceParentWithAttr(td_D, ((typeof (td_0b.tdz_9428e22d650846df9b3e8d837335e6da) !== "undefined" && typeof (td_0b.tdz_9428e22d650846df9b3e8d837335e6da.td_f) !== "undefined") ? (td_0b.tdz_9428e22d650846df9b3e8d837335e6da.td_f(0, 2)) : null));
        if (td_y !== null && td_0b.isDefinedAndNotEmptyString(td_y.id)) {
            return td_y.id;
        }
        td_y = td_0b.getComposedPathElementParentReference(td_D);
        if (td_y !== null && td_0b.isDefinedAndNotEmptyString(td_y.id)) {
            return td_y.id;
        }
    } catch (td_m) {}
    return null;
}
;
td_0b.getEventTargetAttr = function(td_u, td_J) {
    try {
        if (!td_0b.isDefined(td_u) || !td_0b.isDefined(td_J)) {
            return [][[]] + "";
        }
        var td_E = td_0b.getEventSource(td_u);
        if (td_E !== null && td_0b.isDefined(td_E.getAttribute)) {
            var td_M = td_E.getAttribute(td_J);
            if (td_0b.isDefined(td_M)) {
                return td_M;
            }
        }
        td_E = td_0b.getComposedPathElementReference(td_u);
        if (td_E !== null && td_0b.isDefined(td_E.getAttribute)) {
            var td_M = td_E.getAttribute(td_J);
            if (td_0b.isDefined(td_M)) {
                return td_M;
            }
        }
    } catch (td_X) {}
    return null;
}
;
td_0b.getEventTargetHtmlTag = function(td_k) {
    try {
        if (!td_0b.isDefined(td_k)) {
            return [][[]] + "";
        }
        var td_v = td_0b.getEventSourceWithAttr(td_k, ((typeof (td_0b.tdz_9428e22d650846df9b3e8d837335e6da) !== "undefined" && typeof (td_0b.tdz_9428e22d650846df9b3e8d837335e6da.td_f) !== "undefined") ? (td_0b.tdz_9428e22d650846df9b3e8d837335e6da.td_f(2, 8)) : null));
        if (td_0b.isDefined(td_v) && td_0b.isDefinedAndNotEmptyString(td_v.nodeName)) {
            return td_v.nodeName;
        }
        td_v = td_0b.getComposedPathElementReference(td_k);
        if (td_v !== null && td_0b.isDefinedAndNotEmptyString(td_v.nodeName)) {
            return td_v.nodeName;
        }
    } catch (td_u) {}
    return null;
}
;
td_0b.getEventTargetParentHtmlTag = function(td_x) {
    try {
        if (!td_0b.isDefined(td_x)) {
            return [][[]] + "";
        }
        var td_F = td_0b.getEventSourceParentWithAttr(td_x, ((typeof (td_0b.tdz_9428e22d650846df9b3e8d837335e6da) !== "undefined" && typeof (td_0b.tdz_9428e22d650846df9b3e8d837335e6da.td_f) !== "undefined") ? (td_0b.tdz_9428e22d650846df9b3e8d837335e6da.td_f(2, 8)) : null));
        if (td_0b.isDefined(td_F) && td_0b.isDefinedAndNotEmptyString(td_F.nodeName)) {
            return td_F.nodeName;
        }
        td_F = td_0b.getComposedPathElementParentReference(td_x);
        if (td_F !== null && td_0b.isDefinedAndNotEmptyString(td_F.nodeName)) {
            return td_F.nodeName;
        }
    } catch (td_f) {}
    return null;
}
;
td_0b.getEventTargetType = function(td_W) {
    try {
        if (!td_0b.isDefined(td_W)) {
            return [][[]] + "";
        }
        var td_E = td_0b.getEventSourceWithAttr(td_W, Number(1285914).toString(35));
        if (td_0b.isDefined(td_E) && td_0b.isDefinedAndNotEmptyString(td_E.type)) {
            return td_E.type;
        }
        td_E = td_0b.getComposedPathElementReference(td_W);
        if (td_E !== null && td_0b.isDefinedAndNotEmptyString(td_E.type)) {
            return td_E.type;
        }
        return td_0b.getEventTargetHtmlTag(td_W);
    } catch (td_v) {}
    return null;
}
;
td_0b.getEventTargetParentType = function(td_c) {
    try {
        if (!td_0b.isDefined(td_c)) {
            return [][[]] + "";
        }
        var td_y = td_0b.getEventSourceParentWithAttr(td_c, Number(1285914).toString(35));
        if (td_y !== null && td_0b.isDefinedAndNotEmptyString(td_y.type)) {
            return td_y.type;
        }
        td_y = td_0b.getComposedPathElementParentReference(td_c);
        if (td_y !== null && td_0b.isDefinedAndNotEmptyString(td_y.type)) {
            return td_y.type;
        }
        return td_0b.getEventTargetParentHtmlTag(td_c);
    } catch (td_g) {}
    return null;
}
;
td_0b.IDENT_TYPE = 0;
td_0b.IDENT_ID = 1;
td_0b.IDENT_NAME = 2;
td_0b.getEventTypeIdName = function(td_r) {
    var td_S = td_0b.sanitisedInputNames(td_0b.getEventTargetName(td_r));
    var td_L = td_0b.sanitisedInputNames(td_0b.getEventTargetId(td_r));
    var td_s = td_0b.getEventTargetType(td_r);
    if (td_s !== null && td_0b.isDefined(td_5y)) {
        td_s = td_5y(td_s);
    }
    return [td_s, td_L, td_S];
}
;
td_0b.getEventParentTypeIdName = function(td_r) {
    var td_N = td_0b.sanitisedInputNames(td_0b.getEventTargetParentName(td_r));
    if (td_N !== null && typeof td_5y !== [][[]] + "" && td_5y !== null) {
        td_N = td_5y(td_N);
    }
    var td_f = td_0b.sanitisedInputNames(td_0b.getEventTargetParentId(td_r));
    if (td_f !== null && typeof td_5y !== [][[]] + "" && td_5y !== null) {
        td_f = td_5y(td_f);
    }
    var td_F = td_0b.getEventTargetParentType(td_r);
    if (td_F !== null && typeof td_5y !== [][[]] + "" && td_5y !== null) {
        td_F = td_5y(td_F);
    }
    return [td_F, td_f, td_N];
}
;
td_0b.emptyTargetAndSource = function(td_k) {
    var td_x = td_0b.getEventTargetId(td_k);
    var td_r = td_0b.getEventTargetName(td_k);
    return ((!td_0b.isDefined(td_x) || td_x === [][[]] + "") && (!td_0b.isDefined(td_r) || td_r === [][[]] + ""));
}
;
td_0b.isContentEditable = function(td_s) {
    try {
        if (!td_0b.isDefined(td_s)) {
            return false;
        }
        if (td_0b.isDefined(td_s.contenteditable)) {
            return (td_s.contenteditable === "" || td_s.contenteditable === Number(890830).toString(31) || td_s.contenteditable === true);
        } else {
            if (td_0b.isDefined(td_s.contentEditable)) {
                return (td_s.contentEditable === "" || td_s.contentEditable === Number(890830).toString(31) || td_s.contentEditable === true);
            }
        }
    } catch (td_y) {}
    return false;
}
;
td_0b.getEventTargetValueLength = function(td_o) {
    try {
        if (!td_0b.isDefined(td_o)) {
            return -1;
        }
        if (td_0b.isDefined(td_o.target) && td_0b.isDefined(td_o.target.value) && typeof td_o.target.value.length !== [][[]] + "") {
            return td_o.target.value.length;
        } else {
            if (td_0b.isDefined(td_o.srcElement) && td_0b.isDefined(td_o.srcElement.value) && typeof td_o.srcElement.value.length !== [][[]] + "") {
                return td_o.srcElement.value.length;
            } else {
                if (td_0b.isContentEditable(td_o.target) && td_0b.isDefinedAndNotEmptyString(td_o.target.innerText)) {
                    return td_o.target.innerText.length;
                } else {
                    if (td_0b.isContentEditable(td_o.srcElement) && td_0b.isDefinedAndNotEmptyString(td_o.srcElement.innerText)) {
                        return td_o.target.srcElement.length;
                    }
                }
            }
        }
    } catch (td_E) {}
    return -1;
}
;
td_0b.getEventTargetValue = function(td_l) {
    try {
        if (!td_0b.isDefined(td_l)) {
            return null;
        }
        var td_v = td_0b.getEventSource(td_l);
        if (td_v !== null) {
            if (td_0b.isDefined(td_v.checked)) {
                return td_v.checked;
            }
            if (td_0b.isDefined(td_v.indeterminate)) {
                return td_v.indeterminate;
            }
            if (td_0b.isDefined(td_v.value)) {
                return td_v.value;
            }
            if (td_0b.isDefined(td_v.textContent)) {
                return td_v.textContent;
            }
        }
    } catch (td_c) {}
    return null;
}
;
function td_z(td_Q, td_c) {
    return (td_Q === td_c.length) ? ("_" + td_c + "_") : td_c;
}
td_0b.sanitisedInputNames = function(td_l) {
    if (typeof td_l !== ((typeof (td_0b.tdz_9428e22d650846df9b3e8d837335e6da) !== "undefined" && typeof (td_0b.tdz_9428e22d650846df9b3e8d837335e6da.td_f) !== "undefined") ? (td_0b.tdz_9428e22d650846df9b3e8d837335e6da.td_f(10, 6)) : null) || td_l === null) {
        return td_l;
    }
    if (td_0b.isDefined(td_5y)) {
        td_l = td_5y(td_l);
    }
    switch (td_l) {
    case ((typeof (td_0b.tdz_9428e22d650846df9b3e8d837335e6da) !== "undefined" && typeof (td_0b.tdz_9428e22d650846df9b3e8d837335e6da.td_f) !== "undefined") ? (td_0b.tdz_9428e22d650846df9b3e8d837335e6da.td_f(16, 3)) : null):
    case ((typeof (td_0b.tdz_9428e22d650846df9b3e8d837335e6da) !== "undefined" && typeof (td_0b.tdz_9428e22d650846df9b3e8d837335e6da.td_f) !== "undefined") ? (td_0b.tdz_9428e22d650846df9b3e8d837335e6da.td_f(19, 3)) : null):
    case ((typeof (td_0b.tdz_9428e22d650846df9b3e8d837335e6da) !== "undefined" && typeof (td_0b.tdz_9428e22d650846df9b3e8d837335e6da.td_f) !== "undefined") ? (td_0b.tdz_9428e22d650846df9b3e8d837335e6da.td_f(22, 3)) : null):
    case ((typeof (td_0b.tdz_9428e22d650846df9b3e8d837335e6da) !== "undefined" && typeof (td_0b.tdz_9428e22d650846df9b3e8d837335e6da.td_f) !== "undefined") ? (td_0b.tdz_9428e22d650846df9b3e8d837335e6da.td_f(25, 3)) : null):
        return td_z(3, td_l);
    case Number(168915).toString(22):
    case Number(544809).toString(35):
    case Number(799874).toString(30):
        return td_z(4, td_l);
    case ((typeof (td_0b.tdz_9428e22d650846df9b3e8d837335e6da) !== "undefined" && typeof (td_0b.tdz_9428e22d650846df9b3e8d837335e6da.td_f) !== "undefined") ? (td_0b.tdz_9428e22d650846df9b3e8d837335e6da.td_f(28, 5)) : null):
    case ((typeof (td_0b.tdz_9428e22d650846df9b3e8d837335e6da) !== "undefined" && typeof (td_0b.tdz_9428e22d650846df9b3e8d837335e6da.td_f) !== "undefined") ? (td_0b.tdz_9428e22d650846df9b3e8d837335e6da.td_f(33, 5)) : null):
    case ((typeof (td_0b.tdz_9428e22d650846df9b3e8d837335e6da) !== "undefined" && typeof (td_0b.tdz_9428e22d650846df9b3e8d837335e6da.td_f) !== "undefined") ? (td_0b.tdz_9428e22d650846df9b3e8d837335e6da.td_f(38, 5)) : null):
    case ((typeof (td_0b.tdz_9428e22d650846df9b3e8d837335e6da) !== "undefined" && typeof (td_0b.tdz_9428e22d650846df9b3e8d837335e6da.td_f) !== "undefined") ? (td_0b.tdz_9428e22d650846df9b3e8d837335e6da.td_f(43, 5)) : null):
    case ((typeof (td_0b.tdz_9428e22d650846df9b3e8d837335e6da) !== "undefined" && typeof (td_0b.tdz_9428e22d650846df9b3e8d837335e6da.td_f) !== "undefined") ? (td_0b.tdz_9428e22d650846df9b3e8d837335e6da.td_f(48, 5)) : null):
        return td_z(5, td_l);
    case ((typeof (td_0b.tdz_9428e22d650846df9b3e8d837335e6da) !== "undefined" && typeof (td_0b.tdz_9428e22d650846df9b3e8d837335e6da.td_f) !== "undefined") ? (td_0b.tdz_9428e22d650846df9b3e8d837335e6da.td_f(53, 6)) : null):
        return td_z(6, td_l);
    case ((typeof (td_0b.tdz_9428e22d650846df9b3e8d837335e6da) !== "undefined" && typeof (td_0b.tdz_9428e22d650846df9b3e8d837335e6da.td_f) !== "undefined") ? (td_0b.tdz_9428e22d650846df9b3e8d837335e6da.td_f(59, 8)) : null):
        return td_z(8, td_l);
    default:
        break;
    }
    return td_l;
}
;
td_0b.stripLeadingAndTrailingUnderscore = function(td_u) {
    if (typeof td_u !== ((typeof (td_0b.tdz_9428e22d650846df9b3e8d837335e6da) !== "undefined" && typeof (td_0b.tdz_9428e22d650846df9b3e8d837335e6da.td_f) !== "undefined") ? (td_0b.tdz_9428e22d650846df9b3e8d837335e6da.td_f(10, 6)) : null) || td_u === null) {
        return "";
    }
    if (2 > td_u.length) {
        return td_u;
    }
    var td_F = td_u;
    if (td_F.charAt(0) === "_") {
        td_F = td_F.substr(1);
    }
    if (td_F.charAt((td_F.length - 1)) === "_") {
        td_F = td_F.substr(0, (td_F.length - 1));
    }
    return td_F;
}
;
td_0b.tdz_9df180c8862641a58b166e96ef560a1d = new td_0b.td_6D("\x39\x64\x66\x31\x38\x30\x63\x38\x38\x36\x32\x36\x34\x31\x61\x35\x38\x62\x31\x36\x36\x65\x39\x36\x65\x66\x35\x36\x30\x61\x31\x64\x30\x32\x34\x34\x32\x33\x36\x39\x36\x63\x36\x66\x31\x37\x35\x64\x34\x30\x34\x32\x34\x37\x34\x34\x35\x31\x36\x65\x30\x37\x35\x63\x35\x34\x31\x36\x35\x34\x34\x34\x36\x39\x30\x34\x35\x37\x35\x66\x31\x36\x30\x39\x34\x31\x34\x34\x35\x66\x31\x31\x35\x38\x30\x37\x36\x65\x32\x31\x32\x34\x37\x61\x37\x31\x36\x34\x33\x63\x37\x64\x36\x30\x36\x32\x36\x64\x34\x32\x35\x31\x34\x39\x31\x35\x34\x30\x34\x61\x30\x37\x36\x65\x35\x30\x35\x66\x30\x39\x34\x64\x35\x33\x31\x37\x33\x39\x35\x34\x35\x38\x35\x39\x31\x32\x35\x65\x31\x30\x34\x62\x30\x62\x31\x36\x35\x38\x35\x62\x37\x64\x32\x63\x36\x32\x36\x37\x37\x33\x36\x61\x36\x32\x36\x62\x34\x35\x30\x34\x34\x64\x34\x63\x31\x37\x34\x33\x35\x33\x36\x39\x30\x33\x35\x30\x35\x61\x31\x31\x30\x33\x34\x37\x36\x39\x35\x31\x30\x66\x35\x38\x31\x37\x35\x36\x31\x30\x31\x34\x35\x65\x34\x38\x35\x39\x30\x30\x37\x36\x35\x37\x34\x32\x31\x32\x35\x37\x34\x32\x35\x30\x30\x38\x35\x39\x35\x39\x30\x30\x35\x64\x35\x33\x35\x30\x31\x30\x35\x37\x35\x35\x31\x31\x30\x66\x35\x61\x35\x38\x36\x37\x32\x34\x37\x33\x32\x33\x37\x35\x33\x62\x30\x32\x35\x34\x35\x61\x34\x35\x30\x34\x36\x37\x34\x61\x35\x33\x35\x63\x35\x32\x35\x31\x34\x33\x30\x34\x34\x37\x36\x37\x30\x62\x35\x66\x35\x30\x35\x39\x30\x61\x35\x62\x35\x63\x30\x30\x30\x35\x34\x31\x34\x35\x34\x34\x31\x33\x35\x38\x30\x61\x35\x65\x34\x32\x31\x31\x35\x36\x35\x34\x34\x36\x35\x65\x31\x65\x34\x66\x35\x31\x35\x65\x34\x34\x30\x39");
var td_0b = td_0b || {};
function td_2g() {
    try {
        var td_e7 = td_ot();
        if (td_e7 === 0 || td_e7 === -1) {
            return;
        }
        var td_q8 = td_e7.gl;
        var td_Dy = td_e7.name;
        td_Dy += td_q8.getParameter(td_q8.VERSION);
        td_Dy += td_q8.getParameter(td_q8.SHADING_LANGUAGE_VERSION);
        td_Dy += td_q8.getParameter(td_q8.VENDOR);
        td_Dy += td_q8.getParameter(td_q8.RENDERER);
        var td_cn = [];
        try {
            td_cn = td_q8.getSupportedExtensions();
        } catch (td_x) {}
        var td_qH = td_cn.length;
        if (td_qH) {
            var td_yZ = "";
            for (var td_Ih = 0; td_Ih < td_qH; td_Ih++) {
                if (td_yZ.length) {
                    td_yZ += ((typeof (td_0b.tdz_9df180c8862641a58b166e96ef560a1d) !== "undefined" && typeof (td_0b.tdz_9df180c8862641a58b166e96ef560a1d.td_f) !== "undefined") ? (td_0b.tdz_9df180c8862641a58b166e96ef560a1d.td_f(0, 2)) : null);
                }
                td_yZ += td_cn[td_Ih];
            }
            td_Dy += td_yZ;
        }
        var td_BG;
        var td_x = td_q8.getExtension(((typeof (td_0b.tdz_9df180c8862641a58b166e96ef560a1d) !== "undefined" && typeof (td_0b.tdz_9df180c8862641a58b166e96ef560a1d.td_f) !== "undefined") ? (td_0b.tdz_9df180c8862641a58b166e96ef560a1d.td_f(2, 30)) : null)) || td_q8.getExtension(((typeof (td_0b.tdz_9df180c8862641a58b166e96ef560a1d) !== "undefined" && typeof (td_0b.tdz_9df180c8862641a58b166e96ef560a1d.td_f) !== "undefined") ? (td_0b.tdz_9df180c8862641a58b166e96ef560a1d.td_f(32, 37)) : null)) || td_q8.getExtension(((typeof (td_0b.tdz_9df180c8862641a58b166e96ef560a1d) !== "undefined" && typeof (td_0b.tdz_9df180c8862641a58b166e96ef560a1d.td_f) !== "undefined") ? (td_0b.tdz_9df180c8862641a58b166e96ef560a1d.td_f(69, 34)) : null));
        if (td_x) {
            td_BG = td_q8.getParameter(td_x.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
            if (td_BG === 0) {
                td_BG = 2;
            }
        } else {
            td_BG = ((typeof (td_0b.tdz_9df180c8862641a58b166e96ef560a1d) !== "undefined" && typeof (td_0b.tdz_9df180c8862641a58b166e96ef560a1d.td_f) !== "undefined") ? (td_0b.tdz_9df180c8862641a58b166e96ef560a1d.td_f(103, 13)) : null);
        }
        td_Dy += td_BG;
        return td_Dy;
    } catch (td_x) {
        return null;
    }
}
function td_1K() {
    try {
        var td_HV = td_ot();
        if (td_HV === 0 || td_HV === -1) {
            return;
        }
        var td_tn = td_HV.gl;
        if (typeof td_tn.getExtension !== ((typeof (td_0b.tdz_9df180c8862641a58b166e96ef560a1d) !== "undefined" && typeof (td_0b.tdz_9df180c8862641a58b166e96ef560a1d.td_f) !== "undefined") ? (td_0b.tdz_9df180c8862641a58b166e96ef560a1d.td_f(116, 8)) : null) || typeof td_tn.getParameter !== ((typeof (td_0b.tdz_9df180c8862641a58b166e96ef560a1d) !== "undefined" && typeof (td_0b.tdz_9df180c8862641a58b166e96ef560a1d.td_f) !== "undefined") ? (td_0b.tdz_9df180c8862641a58b166e96ef560a1d.td_f(116, 8)) : null)) {
            return null;
        }
        var td_vP = td_tn.getExtension(((typeof (td_0b.tdz_9df180c8862641a58b166e96ef560a1d) !== "undefined" && typeof (td_0b.tdz_9df180c8862641a58b166e96ef560a1d.td_f) !== "undefined") ? (td_0b.tdz_9df180c8862641a58b166e96ef560a1d.td_f(124, 25)) : null));
        if (!td_vP || typeof td_vP !== ((typeof (td_0b.tdz_9df180c8862641a58b166e96ef560a1d) !== "undefined" && typeof (td_0b.tdz_9df180c8862641a58b166e96ef560a1d.td_f) !== "undefined") ? (td_0b.tdz_9df180c8862641a58b166e96ef560a1d.td_f(149, 6)) : null)) {
            return null;
        }
        var td_lp = "";
        var td_J3 = td_tn.getParameter(td_vP.UNMASKED_VENDOR_WEBGL);
        if (typeof td_J3 === ((typeof (td_0b.tdz_9df180c8862641a58b166e96ef560a1d) !== "undefined" && typeof (td_0b.tdz_9df180c8862641a58b166e96ef560a1d.td_f) !== "undefined") ? (td_0b.tdz_9df180c8862641a58b166e96ef560a1d.td_f(155, 6)) : null)) {
            td_lp += ((typeof (td_0b.tdz_9df180c8862641a58b166e96ef560a1d) !== "undefined" && typeof (td_0b.tdz_9df180c8862641a58b166e96ef560a1d.td_f) !== "undefined") ? (td_0b.tdz_9df180c8862641a58b166e96ef560a1d.td_f(161, 6)) : null) + encodeURIComponent(td_J3);
        }
        var td_H1 = td_tn.getParameter(td_vP.UNMASKED_RENDERER_WEBGL);
        if (typeof td_H1 === ((typeof (td_0b.tdz_9df180c8862641a58b166e96ef560a1d) !== "undefined" && typeof (td_0b.tdz_9df180c8862641a58b166e96ef560a1d.td_f) !== "undefined") ? (td_0b.tdz_9df180c8862641a58b166e96ef560a1d.td_f(155, 6)) : null)) {
            td_lp += ((typeof (td_0b.tdz_9df180c8862641a58b166e96ef560a1d) !== "undefined" && typeof (td_0b.tdz_9df180c8862641a58b166e96ef560a1d.td_f) !== "undefined") ? (td_0b.tdz_9df180c8862641a58b166e96ef560a1d.td_f(167, 6)) : null) + encodeURIComponent(td_H1);
        }
        return td_lp;
    } catch (td_x) {
        return null;
    }
}
td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415 = new td_0b.td_6D("\x35\x39\x66\x36\x38\x30\x63\x66\x63\x64\x62\x39\x34\x30\x35\x64\x61\x37\x35\x66\x66\x34\x61\x32\x65\x64\x62\x32\x61\x34\x31\x35\x31\x35\x37\x36\x33\x36\x36\x34\x31\x37\x31\x30\x32\x63\x33\x36\x33\x31\x32\x62\x31\x32\x35\x63\x34\x36\x35\x31\x37\x61\x31\x34\x30\x34\x34\x35\x35\x34\x34\x36\x32\x62\x35\x64\x30\x66\x35\x62\x32\x30\x30\x30\x30\x35\x35\x37\x34\x65\x37\x31\x35\x35\x35\x32\x35\x30\x37\x63\x30\x32\x35\x31\x31\x37\x37\x35\x30\x37\x30\x31\x32\x36\x30\x30\x30\x35\x37\x38\x31\x62\x37\x35\x35\x31\x30\x33\x32\x30\x37\x32\x35\x31\x30\x31\x30\x66\x37\x62\x33\x32\x31\x64\x32\x30\x30\x30\x30\x35\x35\x62\x32\x65\x36\x37\x36\x38\x35\x34\x37\x37\x34\x62\x30\x39\x34\x31\x34\x62\x35\x35\x31\x31\x33\x66\x30\x32\x30\x61\x30\x36\x35\x63\x34\x63\x36\x33\x35\x34\x30\x39\x31\x32\x34\x32\x35\x62\x30\x31\x32\x34\x34\x36\x30\x65\x34\x35\x31\x36\x30\x31\x31\x30\x36\x37\x32\x32\x37\x36\x34\x33\x35\x61\x34\x32\x34\x61\x30\x33\x34\x34\x36\x38\x34\x35\x30\x35\x30\x30\x30\x61\x30\x61\x32\x31\x35\x31\x34\x36\x35\x66\x35\x38\x30\x31\x32\x65\x35\x61\x35\x62\x30\x66\x33\x31\x35\x31\x30\x33\x37\x64\x30\x38\x30\x61\x30\x62\x36\x35\x30\x34\x35\x36\x31\x65\x37\x33\x34\x64\x35\x30\x32\x39\x36\x35\x37\x65\x35\x39\x31\x31\x30\x33\x30\x35\x30\x62\x31\x61\x37\x61\x34\x36\x35\x39\x37\x61\x33\x37\x33\x39\x35\x65\x35\x34\x30\x39\x32\x62\x35\x64\x34\x65\x37\x66\x30\x63\x31\x31\x30\x62\x37\x30\x31\x33\x35\x62\x34\x36\x34\x36\x35\x30\x34\x62\x32\x37\x34\x36\x34\x38\x35\x63\x30\x36\x33\x35\x30\x32\x30\x32\x30\x33\x34\x62\x35\x64\x36\x36\x35\x30\x31\x36\x31\x32\x35\x65\x35\x61\x30\x38\x30\x66\x37\x37\x30\x30\x35\x30\x32\x65\x32\x30\x32\x37\x37\x39\x30\x65\x35\x61\x34\x30\x34\x30\x35\x30\x34\x62\x30\x39\x34\x34\x37\x62\x35\x31\x30\x65\x30\x66\x30\x64\x30\x62\x32\x63\x35\x63\x34\x30\x34\x33\x35\x36\x30\x35\x31\x31\x35\x32\x37\x38\x33\x35\x32\x66\x37\x31\x32\x34\x34\x61\x31\x35\x30\x38\x30\x64\x34\x30\x30\x34\x34\x36\x37\x38\x37\x30\x37\x38\x35\x36\x30\x34\x35\x66\x35\x34\x35\x35\x33\x37\x31\x34\x30\x61\x30\x30\x30\x37\x35\x37\x34\x30\x34\x32\x34\x33\x32\x33\x30\x34\x35\x34\x35\x65\x30\x39\x32\x62\x35\x62\x31\x62\x35\x62\x30\x39\x30\x38\x30\x33\x36\x35\x30\x38\x35\x61\x36\x36\x35\x63\x35\x62\x35\x64\x30\x39\x34\x31\x34\x62\x37\x64\x30\x32\x30\x35\x33\x34\x30\x64\x30\x63\x35\x64\x35\x62\x34\x37\x34\x36\x34\x34\x33\x31\x35\x66\x35\x61\x30\x38\x30\x33\x37\x35\x30\x66\x35\x36\x31\x37\x30\x62\x30\x62\x35\x36\x32\x65\x34\x34\x35\x34\x35\x62\x37\x37\x36\x61\x32\x32\x36\x35\x34\x64\x35\x65\x32\x63\x33\x35\x32\x66\x30\x64\x30\x63\x34\x63\x34\x63\x31\x30\x35\x34\x31\x36\x30\x63\x37\x62\x35\x63\x30\x38\x31\x33\x34\x63\x32\x33\x35\x65\x30\x34\x30\x37\x30\x39\x37\x30\x30\x34\x34\x36\x34\x33\x34\x63\x35\x63\x36\x39\x30\x65\x35\x39\x35\x36\x35\x35\x30\x61\x33\x36\x30\x62\x30\x62\x30\x63\x35\x63\x31\x62\x35\x39\x36\x35\x30\x62\x30\x35\x35\x65\x36\x35\x30\x37\x30\x32\x37\x38\x30\x38\x35\x63\x31\x30\x31\x63\x34\x32\x35\x33\x30\x30\x34\x36\x35\x32\x35\x64\x36\x32\x35\x30\x30\x38\x35\x32\x35\x37\x34\x37\x31\x30\x34\x36\x35\x32\x35\x34\x33\x35\x35\x30\x35\x61\x35\x34\x35\x61\x31\x33\x31\x32\x31\x37\x30\x64\x34\x38\x35\x37\x36\x33\x30\x38\x35\x63\x30\x31\x30\x62\x31\x35\x34\x31\x34\x31\x30\x63\x36\x36\x35\x63\x35\x62\x35\x64\x30\x39\x34\x31\x34\x62\x31\x30\x35\x34\x33\x31\x30\x61\x30\x61\x30\x36\x35\x36\x34\x33\x34\x33\x31\x35\x33\x32\x30\x38\x34\x34\x34\x31\x30\x37\x33\x31\x35\x64\x30\x66\x35\x36\x30\x61\x31\x33\x31\x31\x31\x32\x33\x32\x35\x31\x34\x33\x34\x33\x35\x30\x34\x62\x34\x36\x30\x34\x30\x38\x30\x30\x35\x30\x33\x31\x30\x61\x30\x61\x30\x36\x35\x36\x34\x33\x34\x33\x31\x35\x33\x63\x33\x31\x36\x30\x35\x63\x30\x38\x30\x32\x35\x62\x31\x36\x34\x31\x34\x35\x35\x36\x35\x32\x30\x32\x35\x31\x36\x33\x35\x38\x35\x62\x35\x31\x35\x36\x31\x31\x34\x35\x31\x38\x37\x64\x32\x36\x33\x31\x30\x61\x30\x61\x30\x36\x35\x36\x34\x33\x34\x33\x31\x35\x35\x64\x35\x39\x36\x30\x35\x63\x30\x38\x30\x32\x35\x62\x31\x36\x34\x31\x34\x35\x35\x64\x35\x37\x36\x35\x30\x38\x35\x61\x35\x35\x35\x61\x34\x32\x34\x61\x34\x36\x37\x38\x36\x63\x31\x30\x35\x37\x34\x38\x35\x33\x33\x33\x30\x62\x35\x37\x35\x30\x35\x66\x34\x32\x31\x37\x34\x31\x37\x34\x37\x30\x33\x31\x30\x66\x35\x61\x30\x35\x35\x64\x31\x32\x31\x37\x34\x32\x30\x31\x34\x66\x30\x35\x30\x30\x37\x38\x35\x34\x35\x61\x34\x36\x37\x39\x36\x62\x31\x30\x33\x62\x32\x62\x30\x32\x30\x37\x34\x32\x37\x36\x36\x37\x36\x37\x35\x63\x30\x61\x30\x35\x35\x38\x34\x32\x31\x35\x34\x36\x36\x34\x30\x39\x35\x64\x30\x62\x30\x31\x34\x32\x30\x34\x34\x66\x30\x34\x36\x36\x35\x63\x35\x62\x35\x64\x30\x39\x34\x31\x34\x62\x31\x30\x33\x33\x30\x65\x30\x63\x30\x61\x30\x37\x31\x39\x30\x33\x31\x65\x30\x35\x33\x33\x30\x38\x35\x39\x35\x31\x30\x39\x31\x31\x34\x37\x34\x31\x36\x32\x30\x64\x30\x62\x30\x63\x35\x37\x34\x31\x30\x63\x31\x66\x30\x35\x36\x32\x35\x30\x30\x38\x35\x32\x35\x37\x34\x37\x31\x30\x34\x36\x33\x33\x30\x63\x30\x64\x35\x37\x35\x31\x31\x30\x30\x64\x34\x61\x35\x30\x36\x30\x35\x63\x30\x38\x30\x32\x35\x62\x31\x36\x34\x31\x34\x35\x33\x34\x30\x61\x35\x64\x30\x66\x35\x31\x31\x31\x30\x34\x30\x35\x31\x37\x35\x36\x34\x33\x35\x36\x35\x62\x30\x64\x30\x39\x31\x34\x30\x61\x33\x35\x35\x30\x35\x61\x35\x34\x35\x61\x31\x33\x31\x32\x31\x37\x30\x34\x35\x37\x32\x62\x35\x35\x30\x32\x37\x62\x30\x62\x31\x30\x30\x37\x35\x65\x30\x38\x36\x34\x35\x30\x35\x31\x31\x35\x36\x31\x34\x36\x35\x66\x37\x37\x36\x33\x34\x33\x32\x39\x33\x33\x33\x36\x30\x62\x34\x61\x31\x34\x35\x65\x35\x61\x31\x30\x34\x31\x35\x36\x31\x35\x31\x30\x30\x37\x35\x38\x30\x38\x35\x36\x34\x35\x33\x31\x33\x30\x37\x65\x30\x65\x35\x36\x35\x62\x35\x30\x35\x36\x34\x64\x33\x64\x35\x39\x35\x61\x35\x61\x30\x36\x30\x35\x31\x37\x34\x34\x33\x31\x35\x38\x35\x32\x35\x31\x34\x37\x30\x64\x33\x33\x35\x32\x35\x38\x30\x39\x31\x32\x35\x31\x32\x66\x35\x64\x31\x31\x30\x64\x30\x34\x35\x62\x30\x32\x35\x35\x34\x35\x35\x63\x35\x61\x35\x37\x33\x62\x34\x35\x35\x39\x35\x36\x30\x32\x31\x34\x30\x61\x30\x36\x31\x30\x35\x38\x34\x32\x35\x35\x30\x66\x34\x62\x34\x65\x37\x35\x34\x37\x30\x37\x31\x30\x35\x31\x30\x34\x35\x36\x30\x32\x30\x31\x35\x38\x31\x64\x34\x65\x34\x34\x34\x34\x35\x33\x35\x33\x35\x30\x30\x38\x30\x63\x31\x37\x31\x66\x30\x61\x33\x36\x30\x62\x30\x62\x30\x63\x35\x63\x31\x62\x35\x39\x36\x35\x30\x35\x30\x35\x34\x34\x34\x31\x31\x34\x30\x66\x35\x61\x30\x36\x35\x62\x33\x35\x30\x35\x30\x36\x31\x32\x33\x39\x34\x34\x35\x64\x35\x34\x34\x31\x35\x66\x30\x39\x34\x34\x35\x35\x36\x36\x30\x36\x31\x34\x31\x30\x30\x64\x30\x64\x35\x37\x37\x35\x35\x65\x35\x31\x31\x36\x30\x65\x35\x65\x35\x31\x34\x36\x35\x37\x30\x63\x31\x31\x34\x61\x34\x35\x33\x37\x30\x37\x35\x35\x30\x65\x35\x31\x31\x31\x37\x33\x35\x39\x34\x63\x30\x33\x35\x38\x34\x63\x31\x30\x32\x61\x30\x35\x30\x63\x30\x61\x31\x31");
var td_0b = td_0b || {};
var td_R = 0;
var td_Z = 1;
var td_e = 2;
var td_t = 3;
var td_H = 4;
td_0b.td_0M = td_R;
var td_0Z = {
    td_0s: function() {
        if (typeof navigator !== [][[]] + "") {
            this.td_h(navigator.userAgent, navigator.vendor, navigator.platform, navigator.appVersion, window.opera);
        }
    },
    td_h: function(td_N, td_Q, td_f, td_c, td_z) {
        this.td_I = [{
            string: td_N,
            subString: ((typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415) !== "undefined" && typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f) !== "undefined") ? (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f(0, 5)) : null),
            versionSearch: ((typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415) !== "undefined" && typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f) !== "undefined") ? (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f(5, 4)) : null),
            identity: ((typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415) !== "undefined" && typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f) !== "undefined") ? (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f(9, 5)) : null)
        }, {
            string: td_N,
            subString: ((typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415) !== "undefined" && typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f) !== "undefined") ? (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f(14, 10)) : null),
            versionSearch: ((typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415) !== "undefined" && typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f) !== "undefined") ? (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f(14, 10)) : null),
            identity: ((typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415) !== "undefined" && typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f) !== "undefined") ? (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f(14, 10)) : null)
        }, {
            string: td_N,
            subString: ((typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415) !== "undefined" && typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f) !== "undefined") ? (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f(24, 5)) : null),
            versionSearch: ((typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415) !== "undefined" && typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f) !== "undefined") ? (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f(29, 4)) : null),
            identity: ((typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415) !== "undefined" && typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f) !== "undefined") ? (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f(29, 4)) : null)
        }, {
            string: td_N,
            subString: ((typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415) !== "undefined" && typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f) !== "undefined") ? (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f(33, 4)) : null),
            versionSearch: ((typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415) !== "undefined" && typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f) !== "undefined") ? (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f(37, 3)) : null),
            identity: ((typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415) !== "undefined" && typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f) !== "undefined") ? (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f(29, 4)) : null)
        }, {
            string: td_N,
            subString: ((typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415) !== "undefined" && typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f) !== "undefined") ? (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f(40, 5)) : null),
            versionSearch: ((typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415) !== "undefined" && typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f) !== "undefined") ? (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f(45, 4)) : null),
            identity: ((typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415) !== "undefined" && typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f) !== "undefined") ? (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f(29, 4)) : null)
        }, {
            string: td_N,
            subString: ((typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415) !== "undefined" && typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f) !== "undefined") ? (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f(49, 7)) : null),
            versionSearch: ((typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415) !== "undefined" && typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f) !== "undefined") ? (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f(56, 6)) : null),
            identity: ((typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415) !== "undefined" && typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f) !== "undefined") ? (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f(29, 4)) : null)
        }, {
            string: td_N,
            subString: ((typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415) !== "undefined" && typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f) !== "undefined") ? (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f(62, 9)) : null),
            versionSearch: ((typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415) !== "undefined" && typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f) !== "undefined") ? (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f(62, 9)) : null),
            identity: ((typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415) !== "undefined" && typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f) !== "undefined") ? (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f(71, 6)) : null)
        }, {
            string: td_N,
            subString: ((typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415) !== "undefined" && typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f) !== "undefined") ? (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f(77, 14)) : null),
            identity: ((typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415) !== "undefined" && typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f) !== "undefined") ? (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f(77, 14)) : null)
        }, {
            string: td_N,
            subString: ((typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415) !== "undefined" && typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f) !== "undefined") ? (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f(91, 9)) : null),
            identity: ((typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415) !== "undefined" && typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f) !== "undefined") ? (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f(91, 9)) : null)
        }, {
            string: td_N,
            subString: ((typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415) !== "undefined" && typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f) !== "undefined") ? (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f(100, 6)) : null),
            identity: ((typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415) !== "undefined" && typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f) !== "undefined") ? (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f(100, 6)) : null)
        }, {
            string: td_N,
            subString: ((typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415) !== "undefined" && typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f) !== "undefined") ? (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f(106, 6)) : null),
            identity: ((typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415) !== "undefined" && typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f) !== "undefined") ? (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f(106, 6)) : null)
        }, {
            string: td_N,
            subString: ((typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415) !== "undefined" && typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f) !== "undefined") ? (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f(112, 7)) : null),
            versionSearch: ((typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415) !== "undefined" && typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f) !== "undefined") ? (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f(119, 8)) : null),
            identity: ((typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415) !== "undefined" && typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f) !== "undefined") ? (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f(112, 7)) : null)
        }, {
            string: td_N,
            subString: ((typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415) !== "undefined" && typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f) !== "undefined") ? (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f(127, 5)) : null),
            identity: ((typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415) !== "undefined" && typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f) !== "undefined") ? (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f(132, 7)) : null),
            versionSearch: ((typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415) !== "undefined" && typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f) !== "undefined") ? (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f(127, 5)) : null)
        }, {
            string: td_N,
            subString: ((typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415) !== "undefined" && typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f) !== "undefined") ? (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f(139, 5)) : null),
            identity: ((typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415) !== "undefined" && typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f) !== "undefined") ? (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f(106, 6)) : null),
            versionSearch: ((typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415) !== "undefined" && typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f) !== "undefined") ? (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f(139, 5)) : null)
        }, {
            string: td_N,
            subString: ((typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415) !== "undefined" && typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f) !== "undefined") ? (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f(144, 18)) : null),
            identity: ((typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415) !== "undefined" && typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f) !== "undefined") ? (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f(144, 18)) : null),
            versionSearch: ((typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415) !== "undefined" && typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f) !== "undefined") ? (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f(144, 18)) : null)
        }, {
            string: td_Q,
            subString: ((typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415) !== "undefined" && typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f) !== "undefined") ? (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f(162, 5)) : null),
            identity: ((typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415) !== "undefined" && typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f) !== "undefined") ? (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f(167, 6)) : null),
            versionSearch: ((typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415) !== "undefined" && typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f) !== "undefined") ? (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f(173, 7)) : null)
        }, {
            prop: td_z,
            identity: ((typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415) !== "undefined" && typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f) !== "undefined") ? (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f(9, 5)) : null),
            versionSearch: ((typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415) !== "undefined" && typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f) !== "undefined") ? (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f(173, 7)) : null)
        }, {
            string: td_Q,
            subString: ((typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415) !== "undefined" && typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f) !== "undefined") ? (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f(180, 4)) : null),
            identity: ((typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415) !== "undefined" && typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f) !== "undefined") ? (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f(180, 4)) : null)
        }, {
            string: td_Q,
            subString: ((typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415) !== "undefined" && typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f) !== "undefined") ? (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f(184, 3)) : null),
            identity: ((typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415) !== "undefined" && typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f) !== "undefined") ? (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f(187, 9)) : null)
        }, {
            string: td_N,
            subString: ((typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415) !== "undefined" && typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f) !== "undefined") ? (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f(132, 7)) : null),
            identity: ((typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415) !== "undefined" && typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f) !== "undefined") ? (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f(132, 7)) : null)
        }, {
            string: td_Q,
            subString: ((typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415) !== "undefined" && typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f) !== "undefined") ? (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f(196, 6)) : null),
            identity: ((typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415) !== "undefined" && typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f) !== "undefined") ? (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f(196, 6)) : null)
        }, {
            string: td_N,
            subString: ((typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415) !== "undefined" && typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f) !== "undefined") ? (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f(202, 8)) : null),
            identity: ((typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415) !== "undefined" && typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f) !== "undefined") ? (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f(202, 8)) : null)
        }, {
            string: td_N,
            subString: ((typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415) !== "undefined" && typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f) !== "undefined") ? (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f(210, 4)) : null),
            identity: ((typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415) !== "undefined" && typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f) !== "undefined") ? (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f(214, 8)) : null),
            versionSearch: ((typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415) !== "undefined" && typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f) !== "undefined") ? (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f(210, 4)) : null)
        }, {
            string: td_N,
            subString: ((typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415) !== "undefined" && typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f) !== "undefined") ? (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f(222, 8)) : null),
            identity: ((typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415) !== "undefined" && typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f) !== "undefined") ? (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f(222, 8)) : null),
            versionSearch: ((typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415) !== "undefined" && typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f) !== "undefined") ? (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f(222, 8)) : null)
        }, {
            string: td_N,
            subString: ((typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415) !== "undefined" && typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f) !== "undefined") ? (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f(230, 7)) : null),
            identity: ((typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415) !== "undefined" && typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f) !== "undefined") ? (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f(214, 8)) : null),
            versionSearch: ((typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415) !== "undefined" && typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f) !== "undefined") ? (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f(237, 2)) : null)
        }, {
            string: td_N,
            subString: ((typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415) !== "undefined" && typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f) !== "undefined") ? (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f(239, 5)) : null),
            identity: ((typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415) !== "undefined" && typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f) !== "undefined") ? (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f(244, 7)) : null),
            versionSearch: ((typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415) !== "undefined" && typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f) !== "undefined") ? (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f(237, 2)) : null)
        }, {
            string: td_N,
            subString: ((typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415) !== "undefined" && typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f) !== "undefined") ? (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f(244, 7)) : null),
            identity: ((typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415) !== "undefined" && typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f) !== "undefined") ? (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f(202, 8)) : null),
            versionSearch: ((typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415) !== "undefined" && typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f) !== "undefined") ? (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f(244, 7)) : null)
        }];
        this.td_Y = [{
            string: td_f,
            subString: ((typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415) !== "undefined" && typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f) !== "undefined") ? (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f(251, 3)) : null),
            identity: ((typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415) !== "undefined" && typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f) !== "undefined") ? (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f(254, 7)) : null)
        }, {
            string: td_f,
            subString: ((typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415) !== "undefined" && typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f) !== "undefined") ? (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f(261, 3)) : null),
            identity: ((typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415) !== "undefined" && typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f) !== "undefined") ? (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f(261, 3)) : null)
        }, {
            string: td_N,
            subString: ((typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415) !== "undefined" && typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f) !== "undefined") ? (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f(264, 13)) : null),
            identity: ((typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415) !== "undefined" && typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f) !== "undefined") ? (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f(264, 13)) : null)
        }, {
            string: td_N,
            subString: ((typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415) !== "undefined" && typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f) !== "undefined") ? (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f(277, 7)) : null),
            identity: ((typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415) !== "undefined" && typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f) !== "undefined") ? (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f(277, 7)) : null)
        }, {
            string: td_N,
            subString: ((typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415) !== "undefined" && typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f) !== "undefined") ? (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f(284, 7)) : null),
            identity: ((typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415) !== "undefined" && typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f) !== "undefined") ? (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f(284, 7)) : null)
        }, {
            string: td_N,
            subString: ((typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415) !== "undefined" && typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f) !== "undefined") ? (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f(291, 5)) : null),
            identity: ((typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415) !== "undefined" && typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f) !== "undefined") ? (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f(291, 5)) : null)
        }, {
            string: td_f,
            subString: ((typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415) !== "undefined" && typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f) !== "undefined") ? (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f(296, 9)) : null),
            identity: ((typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415) !== "undefined" && typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f) !== "undefined") ? (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f(277, 7)) : null)
        }, {
            string: td_f,
            subString: ((typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415) !== "undefined" && typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f) !== "undefined") ? (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f(305, 5)) : null),
            identity: ((typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415) !== "undefined" && typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f) !== "undefined") ? (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f(305, 5)) : null)
        }, {
            string: td_f,
            subString: ((typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415) !== "undefined" && typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f) !== "undefined") ? (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f(310, 10)) : null),
            identity: ((typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415) !== "undefined" && typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f) !== "undefined") ? (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f(310, 10)) : null)
        }, {
            string: td_f,
            subString: ((typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415) !== "undefined" && typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f) !== "undefined") ? (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f(320, 6)) : null),
            identity: ((typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415) !== "undefined" && typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f) !== "undefined") ? (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f(326, 11)) : null)
        }, {
            string: td_f,
            subString: ((typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415) !== "undefined" && typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f) !== "undefined") ? (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f(337, 4)) : null),
            identity: ((typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415) !== "undefined" && typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f) !== "undefined") ? (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f(337, 4)) : null)
        }];
        this.td_G = [{
            string: td_f,
            subString: ((typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415) !== "undefined" && typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f) !== "undefined") ? (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f(251, 3)) : null),
            identity: ((typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415) !== "undefined" && typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f) !== "undefined") ? (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f(254, 7)) : null)
        }, {
            string: td_f,
            subString: ((typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415) !== "undefined" && typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f) !== "undefined") ? (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f(261, 3)) : null),
            identity: ((typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415) !== "undefined" && typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f) !== "undefined") ? (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f(261, 3)) : null)
        }, {
            string: td_f,
            subString: ((typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415) !== "undefined" && typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f) !== "undefined") ? (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f(296, 9)) : null),
            identity: ((typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415) !== "undefined" && typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f) !== "undefined") ? (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f(277, 7)) : null)
        }, {
            string: td_f,
            subString: ((typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415) !== "undefined" && typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f) !== "undefined") ? (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f(341, 11)) : null),
            identity: ((typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415) !== "undefined" && typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f) !== "undefined") ? (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f(277, 7)) : null)
        }, {
            string: td_f,
            subString: ((typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415) !== "undefined" && typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f) !== "undefined") ? (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f(305, 5)) : null),
            identity: ((typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415) !== "undefined" && typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f) !== "undefined") ? (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f(305, 5)) : null)
        }, {
            string: td_f,
            subString: ((typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415) !== "undefined" && typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f) !== "undefined") ? (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f(310, 10)) : null),
            identity: ((typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415) !== "undefined" && typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f) !== "undefined") ? (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f(310, 10)) : null)
        }, {
            string: td_f,
            subString: ((typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415) !== "undefined" && typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f) !== "undefined") ? (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f(320, 6)) : null),
            identity: ((typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415) !== "undefined" && typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f) !== "undefined") ? (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f(320, 6)) : null)
        }, {
            string: td_f,
            subString: ((typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415) !== "undefined" && typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f) !== "undefined") ? (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f(337, 4)) : null),
            identity: ((typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415) !== "undefined" && typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f) !== "undefined") ? (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f(337, 4)) : null)
        }];
        this.td_K = [{
            identity: ((typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415) !== "undefined" && typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f) !== "undefined") ? (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f(254, 7)) : null),
            versionMap: [{
                s: ((typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415) !== "undefined" && typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f) !== "undefined") ? (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f(352, 10)) : null),
                r: /(Windows 10.0|Windows NT 10.0)/
            }, {
                s: ((typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415) !== "undefined" && typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f) !== "undefined") ? (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f(362, 11)) : null),
                r: /(Windows 8.1|Windows NT 6.3)/
            }, {
                s: ((typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415) !== "undefined" && typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f) !== "undefined") ? (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f(373, 9)) : null),
                r: /(Windows 8|Windows NT 6.2)/
            }, {
                s: ((typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415) !== "undefined" && typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f) !== "undefined") ? (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f(382, 9)) : null),
                r: /(Windows 7|Windows NT 6.1)/
            }, {
                s: ((typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415) !== "undefined" && typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f) !== "undefined") ? (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f(391, 13)) : null),
                r: /Windows NT 6.0/
            }, {
                s: ((typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415) !== "undefined" && typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f) !== "undefined") ? (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f(404, 19)) : null),
                r: /Windows NT 5.2/
            }, {
                s: ((typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415) !== "undefined" && typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f) !== "undefined") ? (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f(423, 10)) : null),
                r: /(Windows NT 5.1|Windows XP)/
            }, {
                s: ((typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415) !== "undefined" && typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f) !== "undefined") ? (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f(433, 12)) : null),
                r: /(Windows NT 5.0|Windows 2000)/
            }, {
                s: ((typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415) !== "undefined" && typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f) !== "undefined") ? (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f(445, 10)) : null),
                r: /(Win 9x 4.90|Windows ME)/
            }, {
                s: ((typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415) !== "undefined" && typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f) !== "undefined") ? (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f(455, 10)) : null),
                r: /(Windows 98|Win98)/
            }, {
                s: ((typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415) !== "undefined" && typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f) !== "undefined") ? (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f(465, 10)) : null),
                r: /(Windows 95|Win95|Windows_95)/
            }, {
                s: ((typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415) !== "undefined" && typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f) !== "undefined") ? (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f(475, 14)) : null),
                r: /(Windows NT 4.0|WinNT4.0|WinNT|Windows NT)/
            }, {
                s: ((typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415) !== "undefined" && typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f) !== "undefined") ? (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f(489, 10)) : null),
                r: /Windows CE/
            }, {
                s: ((typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415) !== "undefined" && typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f) !== "undefined") ? (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f(499, 12)) : null),
                r: /Win16/
            }]
        }, {
            identity: ((typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415) !== "undefined" && typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f) !== "undefined") ? (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f(261, 3)) : null),
            versionMap: [{
                s: ((typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415) !== "undefined" && typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f) !== "undefined") ? (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f(511, 8)) : null),
                r: /Mac OS X/
            }, {
                s: ((typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415) !== "undefined" && typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f) !== "undefined") ? (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f(519, 6)) : null),
                r: /(MacPPC|MacIntel|Mac_PowerPC|Macintosh)/
            }]
        }, {
            identity: ((typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415) !== "undefined" && typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f) !== "undefined") ? (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f(264, 13)) : null),
            versionMap: [{
                s: ((typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415) !== "undefined" && typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f) !== "undefined") ? (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f(525, 17)) : null),
                r: /Windows Phone 6.0/
            }, {
                s: ((typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415) !== "undefined" && typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f) !== "undefined") ? (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f(542, 17)) : null),
                r: /Windows Phone 7.0/
            }, {
                s: ((typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415) !== "undefined" && typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f) !== "undefined") ? (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f(559, 17)) : null),
                r: /Windows Phone 8.0/
            }, {
                s: ((typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415) !== "undefined" && typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f) !== "undefined") ? (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f(576, 17)) : null),
                r: /Windows Phone 8.1/
            }, {
                s: ((typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415) !== "undefined" && typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f) !== "undefined") ? (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f(593, 18)) : null),
                r: /Windows Phone 10.0/
            }]
        }];
        this.td_3j = (typeof window.orientation !== [][[]] + "");
        this.td_5c = this.td_B(this.td_G) || ((typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415) !== "undefined" && typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f) !== "undefined") ? (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f(611, 7)) : null);
        this.td_1t = this.td_O(this.td_3j, this.td_5c) || ((typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415) !== "undefined" && typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f) !== "undefined") ? (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f(611, 7)) : null);
        this.td_2k = this.td_B(this.td_I) || ((typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415) !== "undefined" && typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f) !== "undefined") ? (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f(611, 7)) : null);
        this.td_6V = this.td_T(this.td_2k, td_N) || this.td_T(this.td_2k, td_c) || ((typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415) !== "undefined" && typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f) !== "undefined") ? (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f(611, 7)) : null);
        this.td_5o = this.td_B(this.td_Y) || ((typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415) !== "undefined" && typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f) !== "undefined") ? (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f(611, 7)) : null);
        this.td_1J = this.td_b(this.td_K, this.td_5o, this.td_2k, this.td_6V, td_N, td_c) || this.td_5o;
        this.td_V();
    },
    td_b: function(td_W, td_f, td_r, td_k, td_z, td_s) {
        var td_C = td_z;
        var td_w = td_s;
        var td_o = td_f;
        var td_l;
        for (var td_E = 0; td_E < td_W.length; td_E++) {
            if (td_W[td_E].identity === td_f) {
                for (var td_D = 0; td_D < td_W[td_E].versionMap.length; td_D++) {
                    var td_F = td_W[td_E].versionMap[td_D];
                    if (td_F.r.test(td_C)) {
                        td_o = td_F.s;
                        if (/Windows/.test(td_o)) {
                            if (td_o === ((typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415) !== "undefined" && typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f) !== "undefined") ? (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f(352, 10)) : null)) {
                                if (td_0Z.td_q()) {
                                    td_o = ((typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415) !== "undefined" && typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f) !== "undefined") ? (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f(618, 10)) : null);
                                }
                                td_0b.td_0M = td_Z;
                                td_0Z.td_i();
                            }
                            return td_o;
                        }
                        break;
                    }
                }
                break;
            }
        }
        switch (td_o) {
        case ((typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415) !== "undefined" && typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f) !== "undefined") ? (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f(511, 8)) : null):
            td_o = null;
            var td_p = /(Mac OS X 10[\.\_\d]+)/.exec(td_C);
            if (td_p !== null && td_p.length >= 1) {
                td_o = td_p[1];
            }
            if (typeof navigator.platform !== [][[]] + "" && navigator.platform !== null && navigator.platform === ((typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415) !== "undefined" && typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f) !== "undefined") ? (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f(628, 8)) : null) && typeof navigator.maxTouchPoints !== [][[]] + "" && navigator.maxTouchPoints !== null && navigator.maxTouchPoints === 5) {
                if (typeof "".split !== [][[]] + "" && "".split !== null) {
                    var td_d = td_o.split(" ");
                    if (td_d.length === 4) {
                        var td_k = /(Version\/[\.\d]+)/.exec(td_C);
                        if (td_k !== null && td_k.length > 1) {
                            var td_v = td_k[1];
                            if (td_v !== null && td_v.length > 1) {
                                var td_N = td_v.split("/");
                                if (td_N !== null && td_N.length > 1) {
                                    td_o = ((typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415) !== "undefined" && typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f) !== "undefined") ? (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f(636, 7)) : null) + td_N[1];
                                }
                            }
                        }
                    }
                }
            }
            break;
        case ((typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415) !== "undefined" && typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f) !== "undefined") ? (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f(277, 7)) : null):
            td_o = null;
            var td_S = /[^-](Android[^\d]?[\.\_\d]+)/.exec(td_C);
            if (td_S !== null && td_S.length >= 1) {
                td_o = td_S[1];
            }
            if (td_r === ((typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415) !== "undefined" && typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f) !== "undefined") ? (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f(106, 6)) : null) && td_k >= 110) {
                td_0b.td_0M = td_Z;
                td_0Z.td_i();
            }
            break;
        case ((typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415) !== "undefined" && typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f) !== "undefined") ? (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f(337, 4)) : null):
        case ((typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415) !== "undefined" && typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f) !== "undefined") ? (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f(320, 6)) : null):
        case ((typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415) !== "undefined" && typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f) !== "undefined") ? (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f(326, 11)) : null):
            td_o = null;
            td_l = /OS (\d+)_(\d+)_?(\d+)?/.exec(td_w);
            if (td_l !== null) {
                var td_P = td_l.length >= 1 ? td_l[1] : ((typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415) !== "undefined" && typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f) !== "undefined") ? (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f(611, 7)) : null);
                var td_u = td_l.length >= 2 ? td_l[2] : ((typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415) !== "undefined" && typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f) !== "undefined") ? (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f(611, 7)) : null);
                var td_m = td_l.length >= 3 ? td_l[3] | "0" : "0";
                td_o = ((typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415) !== "undefined" && typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f) !== "undefined") ? (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f(643, 4)) : null) + td_P + "." + td_u + "." + td_m;
            }
            break;
        default:
            return null;
        }
        return td_o;
    },
    td_B: function(td_f) {
        for (var td_X = 0; td_X < td_f.length; ++td_X) {
            var td_s = td_f[td_X].string;
            var td_g = td_f[td_X].prop;
            this.versionSearchString = td_f[td_X].versionSearch || td_f[td_X].identity;
            if (td_s) {
                if (td_s.indexOf(td_f[td_X].subString) !== -1) {
                    return td_f[td_X].identity;
                }
            } else {
                if (td_g) {
                    return td_f[td_X].identity;
                }
            }
        }
    },
    td_T: function(td_l, td_f) {
        if (!td_l) {
            return null;
        }
        var td_E;
        switch (td_l) {
        case ((typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415) !== "undefined" && typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f) !== "undefined") ? (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f(167, 6)) : null):
            var td_o = /\WVersion[^\d]([\.\d]+)/.exec(td_f);
            if (td_o !== null && td_o.length >= 1) {
                td_E = td_o[1];
            }
            break;
        case ((typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415) !== "undefined" && typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f) !== "undefined") ? (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f(9, 5)) : null):
            if (this.versionSearchString === ((typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415) !== "undefined" && typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f) !== "undefined") ? (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f(647, 3)) : null)) {
                var td_v = /\WOPR[^\d]*([\.\d]+)/.exec(td_f);
                if (td_v !== null && td_v.length >= 1) {
                    td_E = td_v[1];
                }
                break;
            }
        default:
            var td_g = td_f.indexOf(this.versionSearchString);
            if (td_g !== -1) {
                td_E = td_f.substring(td_g + this.versionSearchString.length + 1);
            }
            break;
        }
        if (td_E) {
            return parseFloat(td_E);
        }
        return null;
    },
    td_A: function(td_L) {
        var td_o = null;
        try {
            td_o = new Worker(td_L);
        } catch (td_f) {
            if (td_o !== null && typeof td_o.terminate !== [][[]] + "") {
                td_o.terminate();
            }
            return (td_f.toString().indexOf(((typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415) !== "undefined" && typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f) !== "undefined") ? (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f(650, 18)) : null)) !== -1);
        }
        return false;
    },
    td_O: function(isMobile, osNoUA) {
        var psc = this.td_A;
        try {
            var check = ((typeof window.opr !== [][[]] + "") && (typeof window.opr.addons !== [][[]] + "")) || (typeof window.opera === ((typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415) !== "undefined" && typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f) !== "undefined") ? (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f(668, 6)) : null)) || ((typeof window.opr !== [][[]] + "") && (typeof window.opr === ((typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415) !== "undefined" && typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f) !== "undefined") ? (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f(668, 6)) : null)));
            if (check) {
                return ((typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415) !== "undefined" && typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f) !== "undefined") ? (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f(9, 5)) : null);
            }
            check = (typeof InstallTrigger !== [][[]] + "");
            if (check) {
                return ((typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415) !== "undefined" && typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f) !== "undefined") ? (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f(132, 7)) : null);
            }
            check = /constructor/i.test(window.HTMLElement) || (function(p) {
                return p.toString() === ((typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415) !== "undefined" && typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f) !== "undefined") ? (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f(674, 33)) : null);
            }
            )(!window[((typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415) !== "undefined" && typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f) !== "undefined") ? (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f(707, 6)) : null)] || (typeof safari !== [][[]] + "" && safari.pushNotification));
            if (check) {
                return ((typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415) !== "undefined" && typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f) !== "undefined") ? (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f(167, 6)) : null);
            }
            check = (typeof window.safari !== [][[]] + "");
            if (check) {
                return ((typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415) !== "undefined" && typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f) !== "undefined") ? (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f(167, 6)) : null);
            }
            check = /*@cc_on!@*/
            false || (typeof document.documentMode !== [][[]] + "");
            if (check) {
                return ((typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415) !== "undefined" && typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f) !== "undefined") ? (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f(214, 8)) : null);
            }
            if (!check && (typeof window.StyleMedia !== [][[]] + "")) {
                return ((typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415) !== "undefined" && typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f) !== "undefined") ? (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f(29, 4)) : null);
            }
            if (psc(((typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415) !== "undefined" && typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f) !== "undefined") ? (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f(713, 8)) : null))) {
                return ((typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415) !== "undefined" && typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f) !== "undefined") ? (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f(721, 5)) : null);
            }
            if (psc(((typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415) !== "undefined" && typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f) !== "undefined") ? (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f(726, 7)) : null))) {
                return ((typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415) !== "undefined" && typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f) !== "undefined") ? (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f(29, 4)) : null);
            }
            if (psc(((typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415) !== "undefined" && typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f) !== "undefined") ? (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f(733, 9)) : null))) {
                return ((typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415) !== "undefined" && typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f) !== "undefined") ? (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f(100, 6)) : null);
            }
            check = (typeof window.chrome !== [][[]] + "") && (typeof window.yandex == [][[]] + "") && ((typeof window.chrome.webstore !== [][[]] + "") || (typeof window.chrome.runtime !== [][[]] + "") || (typeof window.chrome.loadTimes !== [][[]] + ""));
            if (check) {
                return ((typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415) !== "undefined" && typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f) !== "undefined") ? (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f(106, 6)) : null);
            }
            if (isMobile) {
                check = (typeof window.chrome !== [][[]] + "") && (typeof window.chrome.Benchmarking !== [][[]] + "");
                if (check) {
                    return ((typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415) !== "undefined" && typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f) !== "undefined") ? (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f(77, 14)) : null);
                }
                check = (typeof window.ucapi !== [][[]] + "");
                if (check) {
                    return ((typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415) !== "undefined" && typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f) !== "undefined") ? (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f(91, 9)) : null);
                }
            }
            if (osNoUA === ((typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415) !== "undefined" && typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f) !== "undefined") ? (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f(320, 6)) : null) || osNoUA === ((typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415) !== "undefined" && typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f) !== "undefined") ? (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f(337, 4)) : null)) {
                if (typeof navigator.serviceWorker !== [][[]] + "") {
                    return ((typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415) !== "undefined" && typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f) !== "undefined") ? (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f(167, 6)) : null);
                }
                if (typeof window.$jscomp !== [][[]] + "") {
                    return ((typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415) !== "undefined" && typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f) !== "undefined") ? (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f(106, 6)) : null);
                }
            }
            check = (typeof window.chrome !== [][[]] + "") && (typeof window.yandex !== [][[]] + "");
            if (check) {
                return ((typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415) !== "undefined" && typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f) !== "undefined") ? (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f(71, 6)) : null);
            }
        } catch (err) {}
        return null;
    },
    td_V: function() {
        var td_Q = this.td_2k;
        if (td_Q === ((typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415) !== "undefined" && typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f) !== "undefined") ? (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f(106, 6)) : null) && this.td_1t === ((typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415) !== "undefined" && typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f) !== "undefined") ? (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f(721, 5)) : null)) {
            td_Q = ((typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415) !== "undefined" && typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f) !== "undefined") ? (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f(721, 5)) : null);
        }
        this.td_2k = td_Q;
        if (this.td_3j !== true || this.td_5c !== ((typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415) !== "undefined" && typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f) !== "undefined") ? (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f(261, 3)) : null)) {
            return;
        }
        this.td_5c = ((typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415) !== "undefined" && typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f) !== "undefined") ? (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f(742, 11)) : null);
        this.td_5o = this.td_5c;
        var td_w = (typeof this.td_1J === ((typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415) !== "undefined" && typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f) !== "undefined") ? (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f(753, 6)) : null) && this.td_1J !== null && this.td_1J.indexOf(((typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415) !== "undefined" && typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f) !== "undefined") ? (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f(759, 6)) : null)) !== -1);
        if (td_w) {
            return;
        }
        this.td_1J = this.td_5o;
    },
    td_j: function(td_z) {
        return (typeof td_z !== [][[]] + "" && td_z !== null);
    },
    td_U: function(td_u) {
        this.td_1J = td_u;
    },
    td_i: function() {
        if (this.td_2k === ((typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415) !== "undefined" && typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f) !== "undefined") ? (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f(132, 7)) : null) || this.td_2k === ((typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415) !== "undefined" && typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f) !== "undefined") ? (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f(167, 6)) : null)) {
            td_0b.td_0M = td_H;
            return;
        }
        if (td_0b.td_0M > td_Z) {
            return;
        }
        td_0b.td_0M = td_e;
        if (td_0Z.td_j(navigator.userAgentData) && td_0Z.td_j(navigator.userAgentData.getHighEntropyValues)) {
            var td_F = navigator.userAgentData.getHighEntropyValues([((typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415) !== "undefined" && typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f) !== "undefined") ? (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f(765, 15)) : null)]);
            if (td_0Z.td_j(td_F) && td_0Z.td_j(td_F.then)) {
                td_F.then(function(td_u) {
                    function td_c(td_M) {
                        return (typeof td_M !== [][[]] + "" && td_M !== null);
                    }
                    if (td_c(navigator.userAgentData.platform) && navigator.userAgentData.platform === ((typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415) !== "undefined" && typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f) !== "undefined") ? (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f(254, 7)) : null)) {
                        if (td_c(td_u) && td_c(td_u.platformVersion) && td_c(td_u.platformVersion.split)) {
                            var td_N = parseInt(td_u.platformVersion.split(".")[0]);
                            if (td_N >= 13) {
                                td_0Z.td_U(((typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415) !== "undefined" && typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f) !== "undefined") ? (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f(618, 10)) : null));
                                td_0b.td_0M = td_t;
                            } else {
                                if (td_N > 0) {
                                    td_0Z.td_U(((typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415) !== "undefined" && typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f) !== "undefined") ? (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f(352, 10)) : null));
                                }
                                td_0b.td_0M = td_H;
                            }
                        }
                    } else {
                        if (td_c(navigator.userAgentData.platform) && navigator.userAgentData.platform === ((typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415) !== "undefined" && typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f) !== "undefined") ? (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f(277, 7)) : null)) {
                            if (td_c(td_u) && td_c(td_u.platformVersion) && td_c(td_u.platformVersion.split)) {
                                var td_N = parseInt(td_u.platformVersion.split(".")[0]);
                                if (td_N > 0) {
                                    td_0Z.td_U(((typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415) !== "undefined" && typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f) !== "undefined") ? (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f(780, 8)) : null) + td_N);
                                    td_0b.td_0M = td_t;
                                } else {
                                    td_0b.td_0M = td_H;
                                }
                            }
                        }
                    }
                });
            }
        }
    },
    td_q: function() {
        if (this.td_2k === ((typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415) !== "undefined" && typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f) !== "undefined") ? (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f(132, 7)) : null) || this.td_2k === ((typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415) !== "undefined" && typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f) !== "undefined") ? (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f(167, 6)) : null)) {
            return false;
        }
        try {
            if (td_0Z.td_j(document.fonts) && td_0Z.td_j(document.fonts.check)) {
                return document.fonts.check(((typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415) !== "undefined" && typeof (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f) !== "undefined") ? (td_0b.tdz_59f680cfcdb9405da75ff4a2edb2a415.td_f(788, 23)) : null));
            }
        } catch (td_X) {}
        return false;
    },
    td_I: {},
    td_Y: {},
    td_G: {},
    td_K: {}
};
td_0b.tdz_0df12b2189fd4eee96055f1a628f478a = new td_0b.td_6D("\x30\x64\x66\x31\x32\x62\x32\x31\x38\x39\x66\x64\x34\x65\x65\x65\x39\x36\x30\x35\x35\x66\x31\x61\x36\x32\x38\x66\x34\x37\x38\x61\x34\x35\x31\x37\x30\x33\x31\x31\x34\x31\x31\x36\x34\x30\x35\x38\x35\x62\x34\x64\x32\x62\x32\x35\x36\x63\x33\x61\x32\x62\x33\x30\x37\x34\x37\x34\x37\x35\x36\x37\x36\x61\x32\x30\x37\x38\x32\x34\x37\x61\x37\x36\x36\x62\x32\x62\x37\x35\x36\x66\x36\x62\x32\x38\x36\x61\x32\x31\x33\x34\x36\x65\x36\x37\x33\x31\x37\x37\x37\x35\x36\x37\x36\x62\x32\x33\x32\x32\x36\x36\x33\x61\x32\x33\x32\x63\x37\x35\x37\x61\x36\x66\x36\x37\x37\x30\x32\x30\x37\x37\x32\x38\x37\x61\x37\x65\x36\x37\x33\x32\x36\x64\x36\x37\x37\x64\x33\x65\x36\x35\x32\x61\x33\x35\x37\x34\x36\x36\x30\x64\x35\x30\x35\x62\x35\x64\x35\x61\x31\x32\x30\x35\x35\x37\x30\x36\x30\x30\x31\x36\x34\x61\x35\x35\x35\x66\x34\x30\x35\x62\x31\x32\x34\x61\x31\x63\x31\x30\x34\x32\x35\x66\x30\x33\x36\x62\x34\x32\x34\x38\x30\x35\x35\x31\x31\x30\x30\x33\x30\x63\x31\x34\x30\x38\x35\x33\x35\x32\x30\x35\x30\x38\x34\x30\x30\x65\x35\x31\x35\x38");
var td_0b = td_0b || {};
function td_5D(td_fH) {
    ((typeof (td_0b.tdz_0df12b2189fd4eee96055f1a628f478a) !== "undefined" && typeof (td_0b.tdz_0df12b2189fd4eee96055f1a628f478a.td_f) !== "undefined") ? (td_0b.tdz_0df12b2189fd4eee96055f1a628f478a.td_f(0, 10)) : null);
    if (typeof td_fH === [][[]] + "" || td_fH === null) {
        return null;
    }
    var td_xQ = td_fH[((typeof (td_0b.tdz_0df12b2189fd4eee96055f1a628f478a) !== "undefined" && typeof (td_0b.tdz_0df12b2189fd4eee96055f1a628f478a.td_f) !== "undefined") ? (td_0b.tdz_0df12b2189fd4eee96055f1a628f478a.td_f(10, 17)) : null)];
    var td_Za = {};
    var td_N0 = {};
    var td_Pu = false;
    var td_yX = td_fH[((typeof (td_0b.tdz_0df12b2189fd4eee96055f1a628f478a) !== "undefined" && typeof (td_0b.tdz_0df12b2189fd4eee96055f1a628f478a.td_f) !== "undefined") ? (td_0b.tdz_0df12b2189fd4eee96055f1a628f478a.td_f(27, 7)) : null)];
    var td_L1 = td_fH[((typeof (td_0b.tdz_0df12b2189fd4eee96055f1a628f478a) !== "undefined" && typeof (td_0b.tdz_0df12b2189fd4eee96055f1a628f478a.td_f) !== "undefined") ? (td_0b.tdz_0df12b2189fd4eee96055f1a628f478a.td_f(34, 10)) : null)];
    var td_GX = td_fH[((typeof (td_0b.tdz_0df12b2189fd4eee96055f1a628f478a) !== "undefined" && typeof (td_0b.tdz_0df12b2189fd4eee96055f1a628f478a.td_f) !== "undefined") ? (td_0b.tdz_0df12b2189fd4eee96055f1a628f478a.td_f(44, 10)) : null)];
    var td_Sl = td_fH[((typeof (td_0b.tdz_0df12b2189fd4eee96055f1a628f478a) !== "undefined" && typeof (td_0b.tdz_0df12b2189fd4eee96055f1a628f478a.td_f) !== "undefined") ? (td_0b.tdz_0df12b2189fd4eee96055f1a628f478a.td_f(54, 15)) : null)];
    var td_NQ = 200;
    var td_sP = false;
    function td_tu(td_Qg) {
        var td_I3 = [];
        for (var td_eC in td_Qg) {
            if (!td_Qg.hasOwnProperty(td_eC)) {
                continue;
            }
            td_I3.push(td_eC);
        }
        return td_I3;
    }
    function td_vg(td_Qz) {
        if (typeof td_Qz === [][[]] + "" || typeof td_Qz !== ((typeof (td_0b.tdz_0df12b2189fd4eee96055f1a628f478a) !== "undefined" && typeof (td_0b.tdz_0df12b2189fd4eee96055f1a628f478a.td_f) !== "undefined") ? (td_0b.tdz_0df12b2189fd4eee96055f1a628f478a.td_f(69, 6)) : null)) {
            return;
        }
        for (var td_a1 in td_Qz) {
            if (!td_Qz.hasOwnProperty(td_a1)) {
                continue;
            }
            if (typeof td_Qz[td_a1] === ((typeof (td_0b.tdz_0df12b2189fd4eee96055f1a628f478a) !== "undefined" && typeof (td_0b.tdz_0df12b2189fd4eee96055f1a628f478a.td_f) !== "undefined") ? (td_0b.tdz_0df12b2189fd4eee96055f1a628f478a.td_f(69, 6)) : null) && td_Qz[td_a1] !== null) {
                if (td_Qz[td_a1].length === 0 || (Array.isArray(td_Qz[td_a1]) && td_Qz[td_a1][td_L1] === false && td_Qz[td_a1][td_GX] === td_Sl)) {
                    delete td_Qz[td_a1];
                } else {
                    td_vg(td_Qz[td_a1]);
                }
            }
            if (typeof td_Qz[td_a1] !== [][[]] + "" && td_Qz[td_a1] !== null && typeof td_Qz[td_a1][((typeof (td_0b.tdz_0df12b2189fd4eee96055f1a628f478a) !== "undefined" && typeof (td_0b.tdz_0df12b2189fd4eee96055f1a628f478a.td_f) !== "undefined") ? (td_0b.tdz_0df12b2189fd4eee96055f1a628f478a.td_f(75, 6)) : null)] === [][[]] + "" && typeof td_Qz[td_a1][((typeof (td_0b.tdz_0df12b2189fd4eee96055f1a628f478a) !== "undefined" && typeof (td_0b.tdz_0df12b2189fd4eee96055f1a628f478a.td_f) !== "undefined") ? (td_0b.tdz_0df12b2189fd4eee96055f1a628f478a.td_f(81, 5)) : null)] !== [][[]] + "" && td_Qz[td_a1][((typeof (td_0b.tdz_0df12b2189fd4eee96055f1a628f478a) !== "undefined" && typeof (td_0b.tdz_0df12b2189fd4eee96055f1a628f478a.td_f) !== "undefined") ? (td_0b.tdz_0df12b2189fd4eee96055f1a628f478a.td_f(81, 5)) : null)] !== null && td_Qz[td_a1][((typeof (td_0b.tdz_0df12b2189fd4eee96055f1a628f478a) !== "undefined" && typeof (td_0b.tdz_0df12b2189fd4eee96055f1a628f478a.td_f) !== "undefined") ? (td_0b.tdz_0df12b2189fd4eee96055f1a628f478a.td_f(81, 5)) : null)] === 0) {
                delete td_Qz[td_a1][((typeof (td_0b.tdz_0df12b2189fd4eee96055f1a628f478a) !== "undefined" && typeof (td_0b.tdz_0df12b2189fd4eee96055f1a628f478a.td_f) !== "undefined") ? (td_0b.tdz_0df12b2189fd4eee96055f1a628f478a.td_f(81, 5)) : null)];
            }
        }
    }
    function td_UN(td_dG) {
        if (typeof JSON !== [][[]] + "" && typeof JSON.stringify !== [][[]] + "") {
            return JSON.stringify(td_dG);
        }
        return "";
    }
    function td_bR(td_fG) {
        var td_el = td_UN(td_fG);
        return (td_el && td_el.length > td_yX) ? true : false;
    }
    function td_Ge(td_id) {
        var td_Oh = JSON.stringify(td_id);
        if (typeof td_Oh === [][[]] + "" || td_Oh === null) {
            return null;
        }
        return JSON.parse(td_Oh);
    }
    function td_co(td_R3) {
        if (typeof td_Za[td_R3] === [][[]] + "") {
            td_Za[td_R3] = td_tu(td_Za).length;
        }
    }
    function td_AR(td_vu, td_ST) {
        var td_JO = {};
        var td_DY = td_Ge(td_ST);
        if (td_DY === null) {
            td_DY = {};
        }
        if (!td_sP && td_bR(td_DY)) {
            td_sP = true;
        }
        for (var td_dR in td_ST) {
            if (typeof td_dR === [][[]] + "" || td_dR === null || !td_ST.hasOwnProperty(td_dR)) {
                continue;
            }
            var td_fr = td_vu[td_dR];
            var td_kx = td_ST[td_dR];
            if (typeof td_kx === [][[]] + "" || td_kx === null) {
                continue;
            }
            var td_y7 = (typeof td_fr !== [][[]] + "" && td_fr !== null);
            var td_qM = (!td_y7 && !td_sP);
            var td_lX = (td_y7 && (JSON.stringify(td_fr) !== JSON.stringify(td_kx)));
            if (td_lX) {
                td_DY[td_dR] = td_kx;
                td_JO[td_dR] = td_kx;
                td_co(td_dR);
            } else {
                if (td_qM) {
                    td_DY[td_dR] = td_kx;
                    if (td_bR(td_DY)) {
                        td_sP = true;
                        delete td_DY[td_dR];
                        continue;
                    }
                    td_JO[td_dR] = td_kx;
                    td_co(td_dR);
                }
            }
        }
        return td_JO;
    }
    function td_Dj(td_n3) {
        var td_S1 = {};
        for (var td_Lf in td_n3) {
            if (!td_n3.hasOwnProperty(td_Lf)) {
                continue;
            }
            var td_yM = {};
            td_yM[td_Lf] = td_n3[td_Lf];
            if (td_Za[td_Lf] < td_NQ) {
                td_S1[td_Za[td_Lf]] = td_yM;
            }
        }
        return td_S1;
    }
    function td_Jo() {
        if (td_Pu) {
            return "";
        }
        var td_Jk = JSON.parse(td_3q.getJsonData());
        td_vg(td_Jk);
        var td_Mj = td_AR(td_N0, td_Jk);
        td_N0 = td_Jk;
        var td_Vq = JSON.stringify(td_Dj(td_Mj));
        if (typeof td_Vq === [][[]] + "" || td_Vq === null || td_Vq === ((typeof (td_0b.tdz_0df12b2189fd4eee96055f1a628f478a) !== "undefined" && typeof (td_0b.tdz_0df12b2189fd4eee96055f1a628f478a.td_f) !== "undefined") ? (td_0b.tdz_0df12b2189fd4eee96055f1a628f478a.td_f(86, 2)) : null) || td_xQ >= td_Vq.length) {
            return "";
        }
        var td_nP = ((typeof (td_0b.tdz_0df12b2189fd4eee96055f1a628f478a) !== "undefined" && typeof (td_0b.tdz_0df12b2189fd4eee96055f1a628f478a.td_f) !== "undefined") ? (td_0b.tdz_0df12b2189fd4eee96055f1a628f478a.td_f(88, 12)) : null) + encodeURIComponent(td_Vq);
        if (td_Vq.length > td_yX) {
            td_Pu = true;
            return "";
        }
        return td_nP;
    }
    function td_HA() {
        var td_VS = td_Jo();
        if (td_VS !== null && td_VS !== "") {
            td_VS = ((typeof (td_0b.tdz_0df12b2189fd4eee96055f1a628f478a) !== "undefined" && typeof (td_0b.tdz_0df12b2189fd4eee96055f1a628f478a.td_f) !== "undefined") ? (td_0b.tdz_0df12b2189fd4eee96055f1a628f478a.td_f(100, 6)) : null) + td_VS;
            var td_Cs = td_4m + ((typeof (td_0b.tdz_0df12b2189fd4eee96055f1a628f478a) !== "undefined" && typeof (td_0b.tdz_0df12b2189fd4eee96055f1a628f478a.td_f) !== "undefined") ? (td_0b.tdz_0df12b2189fd4eee96055f1a628f478a.td_f(106, 4)) : null) + td_0b.td_0B(td_VS, td_3r);
            td_0Q(td_Cs, document);
        }
        return td_Pu;
    }
    return [td_HA];
}
td_0b.tdz_75d5eab1c0264aaab8b8f3ebd17ef39a = new td_0b.td_6D("\x37\x35\x64\x35\x65\x61\x62\x31\x63\x30\x32\x36\x34\x61\x61\x61\x62\x38\x62\x38\x66\x33\x65\x62\x64\x31\x37\x65\x66\x33\x39\x61\x34\x32\x34\x36\x30\x31\x31\x35\x31\x36\x31\x35\x31\x30\x35\x38\x30\x30\x34\x34\x31\x34\x35\x33\x34\x63\x35\x32\x35\x63\x30\x34\x31\x61\x30\x62\x35\x38\x30\x61\x30\x32\x37\x33\x32\x37\x31\x30\x30\x62\x34\x36\x34\x34\x30\x30\x31\x34\x34\x30\x34\x37\x34\x34\x35\x31\x35\x63\x30\x61\x35\x32\x32\x32\x33\x31\x33\x30\x35\x38\x30\x64\x34\x34\x31\x36\x31\x30\x31\x38\x35\x64\x30\x32\x30\x30\x30\x63\x34\x65\x30\x33\x34\x62\x35\x38\x30\x62\x31\x35\x31\x61\x34\x34\x37\x30\x34\x35\x30\x63\x30\x37\x35\x66\x30\x38\x35\x33\x34\x37\x34\x64\x34\x34\x37\x34\x31\x37\x30\x38\x30\x33\x35\x64\x30\x65\x35\x31\x35\x35\x35\x33\x35\x61\x31\x35\x30\x30\x35\x31\x34\x63\x30\x64\x35\x33\x31\x36\x35\x36\x34\x31\x30\x30\x30\x36\x30\x64\x35\x63\x35\x36\x30\x32\x30\x33\x31\x63\x34\x39\x30\x66\x35\x30\x35\x36\x30\x35\x35\x62\x31\x33\x30\x30\x31\x31");
var td_0b = td_0b || {};
function td_0h() {
    ((typeof (td_0b.tdz_75d5eab1c0264aaab8b8f3ebd17ef39a) !== "undefined" && typeof (td_0b.tdz_75d5eab1c0264aaab8b8f3ebd17ef39a.td_f) !== "undefined") ? (td_0b.tdz_75d5eab1c0264aaab8b8f3ebd17ef39a.td_f(0, 10)) : null);
    var td_UR = null;
    var td_H8 = null;
    var td_td = true;
    var td_fW = null;
    this.tryAgain = function() {
        return td_td;
    }
    ;
    this.getFPParams = function() {
        if (td_UR !== null) {
            td_td = false;
            return ((typeof (td_0b.tdz_75d5eab1c0264aaab8b8f3ebd17ef39a) !== "undefined" && typeof (td_0b.tdz_75d5eab1c0264aaab8b8f3ebd17ef39a.td_f) !== "undefined") ? (td_0b.tdz_75d5eab1c0264aaab8b8f3ebd17ef39a.td_f(10, 5)) : null) + td_UR;
        }
        return "";
    }
    ;
    this.getRunTimeMS = function() {
        if (td_fW !== null) {
            return ((typeof (td_0b.tdz_75d5eab1c0264aaab8b8f3ebd17ef39a) !== "undefined" && typeof (td_0b.tdz_75d5eab1c0264aaab8b8f3ebd17ef39a.td_f) !== "undefined") ? (td_0b.tdz_75d5eab1c0264aaab8b8f3ebd17ef39a.td_f(15, 4)) : null) + td_0b.toFixed(td_fW, 2);
        }
        return "";
    }
    ;
    function td_j2() {
        var td_dm = td_g();
        try {
            var td_oT = td_H8.getContext(((typeof (td_0b.tdz_75d5eab1c0264aaab8b8f3ebd17ef39a) !== "undefined" && typeof (td_0b.tdz_75d5eab1c0264aaab8b8f3ebd17ef39a.td_f) !== "undefined") ? (td_0b.tdz_75d5eab1c0264aaab8b8f3ebd17ef39a.td_f(19, 2)) : null));
            var td_gb = ((typeof (td_0b.tdz_75d5eab1c0264aaab8b8f3ebd17ef39a) !== "undefined" && typeof (td_0b.tdz_75d5eab1c0264aaab8b8f3ebd17ef39a.td_f) !== "undefined") ? (td_0b.tdz_75d5eab1c0264aaab8b8f3ebd17ef39a.td_f(21, 32)) : null);
            td_oT.font = ((typeof (td_0b.tdz_75d5eab1c0264aaab8b8f3ebd17ef39a) !== "undefined" && typeof (td_0b.tdz_75d5eab1c0264aaab8b8f3ebd17ef39a.td_f) !== "undefined") ? (td_0b.tdz_75d5eab1c0264aaab8b8f3ebd17ef39a.td_f(53, 9)) : null);
            td_oT.fillText(td_gb, 0, 50);
            td_oT.font = ((typeof (td_0b.tdz_75d5eab1c0264aaab8b8f3ebd17ef39a) !== "undefined" && typeof (td_0b.tdz_75d5eab1c0264aaab8b8f3ebd17ef39a.td_f) !== "undefined") ? (td_0b.tdz_75d5eab1c0264aaab8b8f3ebd17ef39a.td_f(62, 10)) : null);
            var td_co = td_oT.createLinearGradient(0, 0, td_H8.width, 0);
            td_co.addColorStop("0", ((typeof (td_0b.tdz_75d5eab1c0264aaab8b8f3ebd17ef39a) !== "undefined" && typeof (td_0b.tdz_75d5eab1c0264aaab8b8f3ebd17ef39a.td_f) !== "undefined") ? (td_0b.tdz_75d5eab1c0264aaab8b8f3ebd17ef39a.td_f(72, 7)) : null));
            td_co.addColorStop(((typeof (td_0b.tdz_75d5eab1c0264aaab8b8f3ebd17ef39a) !== "undefined" && typeof (td_0b.tdz_75d5eab1c0264aaab8b8f3ebd17ef39a.td_f) !== "undefined") ? (td_0b.tdz_75d5eab1c0264aaab8b8f3ebd17ef39a.td_f(79, 3)) : null), Number(348826).toString(31));
            td_co.addColorStop(((typeof (td_0b.tdz_75d5eab1c0264aaab8b8f3ebd17ef39a) !== "undefined" && typeof (td_0b.tdz_75d5eab1c0264aaab8b8f3ebd17ef39a.td_f) !== "undefined") ? (td_0b.tdz_75d5eab1c0264aaab8b8f3ebd17ef39a.td_f(82, 3)) : null), ((typeof (td_0b.tdz_75d5eab1c0264aaab8b8f3ebd17ef39a) !== "undefined" && typeof (td_0b.tdz_75d5eab1c0264aaab8b8f3ebd17ef39a.td_f) !== "undefined") ? (td_0b.tdz_75d5eab1c0264aaab8b8f3ebd17ef39a.td_f(85, 3)) : null));
            td_oT.fillStyle = td_co;
            td_oT.fillText(td_gb, 0, 90);
            var td_bC = td_H8.toDataURL(((typeof (td_0b.tdz_75d5eab1c0264aaab8b8f3ebd17ef39a) !== "undefined" && typeof (td_0b.tdz_75d5eab1c0264aaab8b8f3ebd17ef39a.td_f) !== "undefined") ? (td_0b.tdz_75d5eab1c0264aaab8b8f3ebd17ef39a.td_f(88, 9)) : null));
            if (!td_bC) {
                td_td = false;
                return;
            }
            td_UR = td_2D(td_bC);
        } catch (td_x) {
            td_td = false;
            return;
        }
        td_fW += td_g() - td_dm;
    }
    this.setup = function() {
        var td_l6 = td_g();
        try {
            td_H8 = document.createElement(((typeof (td_0b.tdz_75d5eab1c0264aaab8b8f3ebd17ef39a) !== "undefined" && typeof (td_0b.tdz_75d5eab1c0264aaab8b8f3ebd17ef39a.td_f) !== "undefined") ? (td_0b.tdz_75d5eab1c0264aaab8b8f3ebd17ef39a.td_f(97, 6)) : null));
            if (!td_H8) {
                td_td = false;
                return null;
            }
            if (!(td_H8.getContext)) {
                td_td = false;
                return null;
            }
            var td_lQ = td_H8.getContext(((typeof (td_0b.tdz_75d5eab1c0264aaab8b8f3ebd17ef39a) !== "undefined" && typeof (td_0b.tdz_75d5eab1c0264aaab8b8f3ebd17ef39a.td_f) !== "undefined") ? (td_0b.tdz_75d5eab1c0264aaab8b8f3ebd17ef39a.td_f(19, 2)) : null));
            if (!td_lQ) {
                td_td = false;
                return null;
            }
            if (!td_lQ.font || !td_lQ.fillText) {
                td_td = false;
                return null;
            }
            td_H8.width = 300;
            td_H8.height = 100;
            setTimeout(function() {
                td_j2();
            });
        } catch (td_x) {
            td_td = false;
            return null;
        }
        td_fW = td_g() - td_l6;
    }
    ;
}
td_0b.tdz_d532b10be45b4b469e215a5f69aa010d = new td_0b.td_6D("\x64\x35\x33\x32\x62\x31\x30\x62\x65\x34\x35\x62\x34\x62\x34\x36\x39\x65\x32\x31\x35\x61\x35\x66\x36\x39\x61\x61\x30\x31\x30\x64\x31\x31\x34\x36\x35\x36\x31\x32\x31\x31\x34\x35\x34\x32\x30\x62\x30\x36\x34\x30\x31\x33\x30\x30\x35\x35\x31\x36\x34\x37\x34\x32\x30\x34\x30\x37\x35\x33\x34\x35\x34\x36\x31\x35\x30\x66\x30\x38\x34\x33\x35\x34\x30\x33\x30\x34\x34\x32\x31\x33\x35\x63\x30\x31\x31\x32\x35\x30\x35\x66\x31\x30\x35\x38\x31\x33\x34\x33\x31\x36\x30\x34\x34\x30\x34\x30\x31\x31\x31\x36\x35\x38\x31\x36\x35\x35\x35\x31\x30\x34\x34\x30\x35\x36\x35\x63\x30\x66\x35\x32\x34\x34\x31\x34\x34\x63\x30\x66\x31\x31\x35\x63\x34\x34\x35\x37\x30\x33\x30\x31\x35\x31\x31\x31");
var td_0b = td_0b || {};
function td_6N() {
    ((typeof (td_0b.tdz_d532b10be45b4b469e215a5f69aa010d) !== "undefined" && typeof (td_0b.tdz_d532b10be45b4b469e215a5f69aa010d.td_f) !== "undefined") ? (td_0b.tdz_d532b10be45b4b469e215a5f69aa010d.td_f(0, 10)) : null);
    var td_AE = null;
    var td_Ue = true;
    var td_vg = null;
    this.tryAgain = function() {
        return (td_AE !== null) ? false : td_Ue;
    }
    ;
    this.getFPParams = function() {
        if (td_AE !== null && td_Ue) {
            td_Ue = false;
            return ((typeof (td_0b.tdz_d532b10be45b4b469e215a5f69aa010d) !== "undefined" && typeof (td_0b.tdz_d532b10be45b4b469e215a5f69aa010d.td_f) !== "undefined") ? (td_0b.tdz_d532b10be45b4b469e215a5f69aa010d.td_f(10, 7)) : null) + encodeURIComponent(td_AE);
        }
        return null;
    }
    ;
    this.getRunTimeMS = function() {
        if (td_vg !== null) {
            return ((typeof (td_0b.tdz_d532b10be45b4b469e215a5f69aa010d) !== "undefined" && typeof (td_0b.tdz_d532b10be45b4b469e215a5f69aa010d.td_f) !== "undefined") ? (td_0b.tdz_d532b10be45b4b469e215a5f69aa010d.td_f(17, 6)) : null) + td_0b.toFixed(td_vg, 2);
        }
        return "";
    }
    ;
    function td_q7(td_ZY, td_ZL) {
        var td_ka = "";
        if (typeof td_ZY === ((typeof (td_0b.tdz_d532b10be45b4b469e215a5f69aa010d) !== "undefined" && typeof (td_0b.tdz_d532b10be45b4b469e215a5f69aa010d.td_f) !== "undefined") ? (td_0b.tdz_d532b10be45b4b469e215a5f69aa010d.td_f(23, 6)) : null)) {
            td_ka = ((typeof (td_0b.tdz_d532b10be45b4b469e215a5f69aa010d) !== "undefined" && typeof (td_0b.tdz_d532b10be45b4b469e215a5f69aa010d.td_f) !== "undefined") ? (td_0b.tdz_d532b10be45b4b469e215a5f69aa010d.td_f(29, 8)) : null) + td_ZY.toFixed(2);
        }
        if (typeof td_ZL !== [][[]] + "") {
            if (td_ka) {
                td_ka += ",";
            }
            td_ka += ((typeof (td_0b.tdz_d532b10be45b4b469e215a5f69aa010d) !== "undefined" && typeof (td_0b.tdz_d532b10be45b4b469e215a5f69aa010d.td_f) !== "undefined") ? (td_0b.tdz_d532b10be45b4b469e215a5f69aa010d.td_f(37, 9)) : null) + (td_ZL ? ((typeof (td_0b.tdz_d532b10be45b4b469e215a5f69aa010d) !== "undefined" && typeof (td_0b.tdz_d532b10be45b4b469e215a5f69aa010d.td_f) !== "undefined") ? (td_0b.tdz_d532b10be45b4b469e215a5f69aa010d.td_f(46, 10)) : null) : ((typeof (td_0b.tdz_d532b10be45b4b469e215a5f69aa010d) !== "undefined" && typeof (td_0b.tdz_d532b10be45b4b469e215a5f69aa010d.td_f) !== "undefined") ? (td_0b.tdz_d532b10be45b4b469e215a5f69aa010d.td_f(56, 11)) : null));
        }
        if (td_ka) {
            return "{" + td_ka + "}";
        }
        return null;
    }
    this.setup = function() {
        var td_Z9 = td_g();
        try {
            var td_Yx = navigator.battery || navigator.webkitBattery || navigator.mozBattery || navigator.msBattery || null;
            if (td_Yx) {
                td_AE = td_q7(td_Yx.level, td_Yx.charging);
            } else {
                if (navigator.getBattery) {
                    navigator.getBattery().then(function(td_bs) {
                        var td_fU = td_g();
                        td_AE = td_q7(td_bs.level, td_bs.charging);
                        td_vg += td_g() - td_fU;
                    }, function(td_x) {});
                } else {
                    td_Ue = false;
                }
            }
        } catch (td_x) {
            td_Ue = false;
        }
        td_vg = td_g() - td_Z9;
    }
    ;
}
td_0b.tdz_f5151b7e17df4f42b18f6a328ae91c78 = new td_0b.td_6D("\x66\x35\x31\x35\x31\x62\x37\x65\x31\x37\x64\x66\x34\x66\x34\x32\x62\x31\x38\x66\x36\x61\x33\x32\x38\x61\x65\x39\x31\x63\x37\x38\x31\x33\x34\x36\x35\x34\x31\x35\x34\x32\x31\x36\x34\x35\x30\x63\x35\x32\x34\x33\x34\x32\x30\x37\x34\x31\x30\x32\x35\x63\x30\x66\x30\x33\x34\x34\x35\x63\x30\x65\x30\x63\x31\x35\x34\x31\x35\x62\x35\x39\x30\x66\x30\x32\x35\x35\x35\x34");
var td_0b = td_0b || {};
function td_3m() {
    ((typeof (td_0b.tdz_f5151b7e17df4f42b18f6a328ae91c78) !== "undefined" && typeof (td_0b.tdz_f5151b7e17df4f42b18f6a328ae91c78.td_f) !== "undefined") ? (td_0b.tdz_f5151b7e17df4f42b18f6a328ae91c78.td_f(0, 10)) : null);
    var td_jN = null;
    var td_b1 = true;
    var td_nF = null;
    var td_OR = null;
    this.tryAgain = function() {
        return (td_jN !== null) ? false : td_b1;
    }
    ;
    this.getFPParams = function() {
        if (td_jN !== null) {
            return ((typeof (td_0b.tdz_f5151b7e17df4f42b18f6a328ae91c78) !== "undefined" && typeof (td_0b.tdz_f5151b7e17df4f42b18f6a328ae91c78.td_f) !== "undefined") ? (td_0b.tdz_f5151b7e17df4f42b18f6a328ae91c78.td_f(10, 6)) : null) + td_jN;
        }
        return null;
    }
    ;
    this.getRunTimeMS = function() {
        if (td_OR !== null) {
            return ((typeof (td_0b.tdz_f5151b7e17df4f42b18f6a328ae91c78) !== "undefined" && typeof (td_0b.tdz_f5151b7e17df4f42b18f6a328ae91c78.td_f) !== "undefined") ? (td_0b.tdz_f5151b7e17df4f42b18f6a328ae91c78.td_f(16, 5)) : null) + td_0b.toFixed(td_OR, 2);
        }
        return "";
    }
    ;
    function td_WP() {
        var td_Z9 = td_g();
        try {
            var td_zg = td_nF.createOscillator();
            td_zg.type = ((typeof (td_0b.tdz_f5151b7e17df4f42b18f6a328ae91c78) !== "undefined" && typeof (td_0b.tdz_f5151b7e17df4f42b18f6a328ae91c78.td_f) !== "undefined") ? (td_0b.tdz_f5151b7e17df4f42b18f6a328ae91c78.td_f(21, 8)) : null);
            td_zg.frequency.value = 10000;
            var td_dJ = td_nF.createDynamicsCompressor();
            td_dJ.threshold && (td_dJ.threshold.value = -50);
            td_dJ.knee && (td_dJ.knee.value = 40);
            td_dJ.ratio && (td_dJ.ratio.value = 12);
            td_dJ.reduction && (td_dJ.reduction.value = -20);
            td_dJ.attack && (td_dJ.attack.value = 0);
            td_dJ.release && (td_dJ.release.value = 0.25);
            td_zg.connect(td_dJ);
            td_dJ.connect(td_nF.destination);
            td_zg.start(0);
            td_nF.startRendering();
            td_nF.oncomplete = function(td_Nt) {
                var td_EH = td_g();
                if (typeof td_Nt.renderedBuffer === [][[]] + "") {
                    return;
                }
                var td_TW = new td_3n();
                for (var td_fF = 0; td_fF < td_Nt.renderedBuffer.length; td_fF++) {
                    td_TW.update(td_Nt.renderedBuffer.getChannelData(0)[td_fF].toString());
                }
                td_dJ.disconnect();
                td_jN = td_TW.toString();
                td_OR += td_g() - td_EH;
            }
            ;
        } catch (td_x) {
            td_b1 = false;
        }
        td_OR += td_g() - td_Z9;
    }
    this.setup = function() {
        var td_Z9 = td_g();
        try {
            if (td_nF = new (window.OfflineAudioContext || window.webkitOfflineAudioContext)(1,44100,44100),
            !td_nF) {
                return null;
            }
            setTimeout(function() {
                td_WP();
            });
        } catch (td_x) {
            td_b1 = false;
        }
        td_OR = td_g() - td_Z9;
    }
    ;
}
td_0b.tdz_77a542b62d5a42c9bc7a61fe038b6676 = new td_0b.td_6D("\x37\x37\x61\x35\x34\x32\x62\x36\x32\x64\x35\x61\x34\x32\x63\x39\x62\x63\x37\x61\x36\x31\x66\x65\x30\x33\x38\x62\x36\x36\x37\x36\x34\x33\x35\x61\x31\x39\x31\x38\x35\x30\x35\x30\x31\x36\x35\x62\x34\x61\x34\x39\x34\x36\x30\x38\x35\x30\x34\x36\x30\x65\x34\x31\x34\x66\x31\x30\x35\x65\x30\x35\x30\x37\x35\x38\x30\x32\x31\x37\x35\x35\x35\x32\x35\x63\x30\x64\x35\x38\x35\x61\x34\x65\x34\x31\x35\x32\x35\x35\x35\x62\x35\x30\x35\x37\x35\x36\x31\x31\x35\x37\x37\x37\x32\x37\x37\x31\x33\x32\x37\x35\x36\x32\x34\x65\x30\x62\x35\x37\x35\x35\x36\x35\x33\x32\x37\x37\x36\x32\x33\x35\x32\x34\x31\x64\x36\x33\x37\x33\x32\x31\x36\x35\x30\x37\x31\x61\x34\x30\x30\x36\x36\x38\x35\x34\x36\x36\x37\x63\x37\x33\x34\x66\x30\x34\x30\x37\x35\x32\x34\x32\x30\x34\x35\x36\x30\x38\x31\x31\x34\x61\x30\x33\x31\x31\x35\x32\x30\x30\x35\x32\x34\x36\x31\x34\x30\x63\x34\x34\x35\x36\x35\x32\x31\x35\x35\x64\x34\x31\x35\x32\x35\x34\x30\x64\x34\x35\x31\x32\x35\x34\x35\x65\x34\x35\x30\x39\x34\x36\x34\x37\x30\x36\x35\x65\x30\x34\x34\x64\x34\x31\x30\x61\x35\x65\x31\x30\x30\x64\x35\x33\x30\x66\x35\x39\x35\x66\x30\x35\x30\x30\x30\x30\x30\x33\x30\x38\x35\x30\x30\x35\x30\x36\x34\x34\x35\x66\x35\x33\x36\x38\x31\x33\x35\x62\x35\x30\x30\x66\x34\x34\x34\x35\x35\x62\x30\x30\x36\x61\x30\x35\x35\x35\x34\x36\x30\x36\x30\x34\x34\x34\x31\x30\x35\x65\x30\x35\x36\x39\x34\x35\x31\x66\x31\x35\x35\x35\x30\x65\x31\x65\x31\x31\x35\x66\x35\x32\x36\x38\x35\x64\x35\x32\x34\x65\x35\x63\x31\x33\x34\x37\x35\x62\x30\x36\x36\x39\x34\x31\x30\x64\x35\x32\x35\x63\x31\x32\x34\x31\x30\x61\x35\x66\x31\x30\x35\x65\x30\x36\x34\x37\x34\x35\x35\x38\x30\x30\x31\x37\x30\x64\x30\x33\x31\x65\x30\x38\x35\x30\x30\x62");
var td_0b = td_0b || {};
if (typeof td_0b.td_0H === [][[]] + "") {
    td_0b.td_0H = [];
}
var td_A9 = ((typeof (td_0b.tdz_77a542b62d5a42c9bc7a61fe038b6676) !== "undefined" && typeof (td_0b.tdz_77a542b62d5a42c9bc7a61fe038b6676.td_f) !== "undefined") ? (td_0b.tdz_77a542b62d5a42c9bc7a61fe038b6676.td_f(0, 6)) : null);
var td_ab = ((typeof (td_0b.tdz_77a542b62d5a42c9bc7a61fe038b6676) !== "undefined" && typeof (td_0b.tdz_77a542b62d5a42c9bc7a61fe038b6676.td_f) !== "undefined") ? (td_0b.tdz_77a542b62d5a42c9bc7a61fe038b6676.td_f(6, 7)) : null);
var td_HW = ((typeof (td_0b.tdz_77a542b62d5a42c9bc7a61fe038b6676) !== "undefined" && typeof (td_0b.tdz_77a542b62d5a42c9bc7a61fe038b6676.td_f) !== "undefined") ? (td_0b.tdz_77a542b62d5a42c9bc7a61fe038b6676.td_f(13, 8)) : null);
var td_Cq = window.crypto || window.msCrypto;
var td_cz = (typeof td_Cq !== [][[]] + "") ? td_Cq.subtle || td_Cq.webkitSubtle : null;
var td_lY = false;
function td_5O() {
    try {
        var td_cD = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB || window.shimIndexedDB;
        if (!td_Cq || !td_cz || !td_cD) {
            return;
        }
        var td_xW = td_cD.open(td_A9, 1);
        td_xW.onupgradeneeded = function() {
            try {
                td_xW.result.createObjectStore(td_ab, {
                    keyPath: ((typeof (td_0b.tdz_77a542b62d5a42c9bc7a61fe038b6676) !== "undefined" && typeof (td_0b.tdz_77a542b62d5a42c9bc7a61fe038b6676.td_f) !== "undefined") ? (td_0b.tdz_77a542b62d5a42c9bc7a61fe038b6676.td_f(21, 2)) : null)
                });
            } catch (td_rE) {}
        }
        ;
        td_xW.onsuccess = function() {
            try {
                td_rw(td_xW.result);
            } catch (td_PE) {}
        }
        ;
        td_xW.onerror = function(td_FQ) {
            try {} catch (td_sd) {}
        }
        ;
    } catch (td_x) {}
}
function td_rw(td_xB) {
    var td_Xe = td_xB.transaction(td_ab, ((typeof (td_0b.tdz_77a542b62d5a42c9bc7a61fe038b6676) !== "undefined" && typeof (td_0b.tdz_77a542b62d5a42c9bc7a61fe038b6676.td_f) !== "undefined") ? (td_0b.tdz_77a542b62d5a42c9bc7a61fe038b6676.td_f(23, 8)) : null));
    var td_FY = td_Xe.objectStore(td_ab);
    var td_mH = td_FY.get(td_HW);
    td_mH.onsuccess = function() {
        try {
            if (td_mH.result === undefined || td_mH.result === null || td_mH.result.privateKey === null || td_mH.result.publicKey === null || td_mH.result.createTime === null || td_mH.result.type === null) {
                td_DZ(td_xB, ((typeof (td_0b.tdz_77a542b62d5a42c9bc7a61fe038b6676) !== "undefined" && typeof (td_0b.tdz_77a542b62d5a42c9bc7a61fe038b6676.td_f) !== "undefined") ? (td_0b.tdz_77a542b62d5a42c9bc7a61fe038b6676.td_f(31, 9)) : null));
            } else {
                td_N2(td_mH.result.privateKey, td_mH.result.publicKey, td_cY(td_mH.result.createTime, td_mH.result.type));
            }
        } catch (td_x) {}
    }
    ;
}
function td_DZ(td_b2, td_WT) {
    try {
        var td_DU;
        if (td_WT === ((typeof (td_0b.tdz_77a542b62d5a42c9bc7a61fe038b6676) !== "undefined" && typeof (td_0b.tdz_77a542b62d5a42c9bc7a61fe038b6676.td_f) !== "undefined") ? (td_0b.tdz_77a542b62d5a42c9bc7a61fe038b6676.td_f(31, 9)) : null)) {
            td_DU = td_cz.generateKey({
                name: ((typeof (td_0b.tdz_77a542b62d5a42c9bc7a61fe038b6676) !== "undefined" && typeof (td_0b.tdz_77a542b62d5a42c9bc7a61fe038b6676.td_f) !== "undefined") ? (td_0b.tdz_77a542b62d5a42c9bc7a61fe038b6676.td_f(40, 5)) : null),
                namedCurve: ((typeof (td_0b.tdz_77a542b62d5a42c9bc7a61fe038b6676) !== "undefined" && typeof (td_0b.tdz_77a542b62d5a42c9bc7a61fe038b6676.td_f) !== "undefined") ? (td_0b.tdz_77a542b62d5a42c9bc7a61fe038b6676.td_f(45, 5)) : null)
            }, false, [Number(698517).toString(29)]);
        } else {
            td_DU = td_cz.generateKey({
                name: ((typeof (td_0b.tdz_77a542b62d5a42c9bc7a61fe038b6676) !== "undefined" && typeof (td_0b.tdz_77a542b62d5a42c9bc7a61fe038b6676.td_f) !== "undefined") ? (td_0b.tdz_77a542b62d5a42c9bc7a61fe038b6676.td_f(50, 17)) : null),
                modulusLength: 2048,
                publicExponent: new Uint8Array([1, 0, 1]),
                hash: {
                    name: ((typeof (td_0b.tdz_77a542b62d5a42c9bc7a61fe038b6676) !== "undefined" && typeof (td_0b.tdz_77a542b62d5a42c9bc7a61fe038b6676.td_f) !== "undefined") ? (td_0b.tdz_77a542b62d5a42c9bc7a61fe038b6676.td_f(67, 7)) : null)
                }
            }, false, [Number(698517).toString(29)]);
        }
        if (typeof td_DU.then !== [][[]] + "") {
            td_DU.then(function(td_Ew) {
                td_aI(td_b2, td_Ew, td_WT);
            }, function(td_wf) {
                if (td_WT === ((typeof (td_0b.tdz_77a542b62d5a42c9bc7a61fe038b6676) !== "undefined" && typeof (td_0b.tdz_77a542b62d5a42c9bc7a61fe038b6676.td_f) !== "undefined") ? (td_0b.tdz_77a542b62d5a42c9bc7a61fe038b6676.td_f(31, 9)) : null)) {
                    td_DZ(td_b2, ((typeof (td_0b.tdz_77a542b62d5a42c9bc7a61fe038b6676) !== "undefined" && typeof (td_0b.tdz_77a542b62d5a42c9bc7a61fe038b6676.td_f) !== "undefined") ? (td_0b.tdz_77a542b62d5a42c9bc7a61fe038b6676.td_f(74, 7)) : null));
                }
            });
        } else {
            try {
                td_DU.oncomplete = function(td_Dv) {
                    td_aI(td_b2, td_Dv.target.result, td_WT);
                }
                ;
                td_DU.onerror = function(td_iA) {
                    if (td_WT === ((typeof (td_0b.tdz_77a542b62d5a42c9bc7a61fe038b6676) !== "undefined" && typeof (td_0b.tdz_77a542b62d5a42c9bc7a61fe038b6676.td_f) !== "undefined") ? (td_0b.tdz_77a542b62d5a42c9bc7a61fe038b6676.td_f(31, 9)) : null)) {
                        td_DZ(td_b2, ((typeof (td_0b.tdz_77a542b62d5a42c9bc7a61fe038b6676) !== "undefined" && typeof (td_0b.tdz_77a542b62d5a42c9bc7a61fe038b6676.td_f) !== "undefined") ? (td_0b.tdz_77a542b62d5a42c9bc7a61fe038b6676.td_f(74, 7)) : null));
                    }
                }
                ;
            } catch (td_x) {}
        }
    } catch (td_x) {
        if (td_WT === ((typeof (td_0b.tdz_77a542b62d5a42c9bc7a61fe038b6676) !== "undefined" && typeof (td_0b.tdz_77a542b62d5a42c9bc7a61fe038b6676.td_f) !== "undefined") ? (td_0b.tdz_77a542b62d5a42c9bc7a61fe038b6676.td_f(31, 9)) : null)) {
            td_DZ(td_b2, ((typeof (td_0b.tdz_77a542b62d5a42c9bc7a61fe038b6676) !== "undefined" && typeof (td_0b.tdz_77a542b62d5a42c9bc7a61fe038b6676.td_f) !== "undefined") ? (td_0b.tdz_77a542b62d5a42c9bc7a61fe038b6676.td_f(74, 7)) : null));
        }
    }
}
function td_aI(td_x7, td_Xb, td_yR) {
    try {
        var td_bH = td_x7.transaction(td_ab, ((typeof (td_0b.tdz_77a542b62d5a42c9bc7a61fe038b6676) !== "undefined" && typeof (td_0b.tdz_77a542b62d5a42c9bc7a61fe038b6676.td_f) !== "undefined") ? (td_0b.tdz_77a542b62d5a42c9bc7a61fe038b6676.td_f(81, 9)) : null));
        var td_Iy = td_bH.objectStore(td_ab);
        var td_nt = Math.floor(td_p() / 1000);
        var td_Q0 = td_Iy.put({
            id: td_HW,
            publicKey: td_Xb.publicKey,
            privateKey: td_Xb.privateKey,
            createTime: td_nt,
            type: td_yR
        });
        td_Q0.onsuccess = function() {
            try {
                td_N2(td_Xb.privateKey, td_Xb.publicKey, td_cY(td_nt, td_yR));
            } catch (td_Y7) {}
        }
        ;
        td_Q0.onerror = function() {
            try {
                if (td_yR === ((typeof (td_0b.tdz_77a542b62d5a42c9bc7a61fe038b6676) !== "undefined" && typeof (td_0b.tdz_77a542b62d5a42c9bc7a61fe038b6676.td_f) !== "undefined") ? (td_0b.tdz_77a542b62d5a42c9bc7a61fe038b6676.td_f(31, 9)) : null)) {
                    td_DZ(td_x7, ((typeof (td_0b.tdz_77a542b62d5a42c9bc7a61fe038b6676) !== "undefined" && typeof (td_0b.tdz_77a542b62d5a42c9bc7a61fe038b6676.td_f) !== "undefined") ? (td_0b.tdz_77a542b62d5a42c9bc7a61fe038b6676.td_f(74, 7)) : null));
                }
            } catch (td_rg) {}
        }
        ;
    } catch (td_x) {
        if (td_yR === ((typeof (td_0b.tdz_77a542b62d5a42c9bc7a61fe038b6676) !== "undefined" && typeof (td_0b.tdz_77a542b62d5a42c9bc7a61fe038b6676.td_f) !== "undefined") ? (td_0b.tdz_77a542b62d5a42c9bc7a61fe038b6676.td_f(31, 9)) : null)) {
            td_DZ(td_x7, ((typeof (td_0b.tdz_77a542b62d5a42c9bc7a61fe038b6676) !== "undefined" && typeof (td_0b.tdz_77a542b62d5a42c9bc7a61fe038b6676.td_f) !== "undefined") ? (td_0b.tdz_77a542b62d5a42c9bc7a61fe038b6676.td_f(74, 7)) : null));
        }
    }
}
function td_cY(td_Qf, td_PK) {
    var td_rY = td_lY ? td_6x : td_3w;
    return {
        "\x72\x6e\x64": td_5n(16),
        "\x6e\x6f\x6e\x63\x65": td_rY,
        "\x64\x61\x74\x65": td_Qf,
        "\x74\x79\x70\x65": td_PK
    };
}
function td_OQ(td_g4, td_UH) {
    try {
        return td_cz.exportKey(td_g4, td_UH);
    } catch (td_sX) {
        return null;
    }
}
function td_N2(td_Mv, td_YZ, td_xu) {
    var td_ni = td_OQ(Number(704515).toString(29), td_YZ);
    if (td_ni === null) {
        td_ni = td_OQ(((typeof (td_0b.tdz_77a542b62d5a42c9bc7a61fe038b6676) !== "undefined" && typeof (td_0b.tdz_77a542b62d5a42c9bc7a61fe038b6676.td_f) !== "undefined") ? (td_0b.tdz_77a542b62d5a42c9bc7a61fe038b6676.td_f(90, 3)) : null), td_YZ);
        td_xu[Number(1285914).toString(35)] = ((typeof (td_0b.tdz_77a542b62d5a42c9bc7a61fe038b6676) !== "undefined" && typeof (td_0b.tdz_77a542b62d5a42c9bc7a61fe038b6676.td_f) !== "undefined") ? (td_0b.tdz_77a542b62d5a42c9bc7a61fe038b6676.td_f(93, 10)) : null);
    }
    if (td_ni === null || typeof td_ni === [][[]] + "") {
        return;
    }
    if (typeof td_ni.then !== [][[]] + "") {
        td_ni.then(function(td_nn) {
            td_xu[((typeof (td_0b.tdz_77a542b62d5a42c9bc7a61fe038b6676) !== "undefined" && typeof (td_0b.tdz_77a542b62d5a42c9bc7a61fe038b6676.td_f) !== "undefined") ? (td_0b.tdz_77a542b62d5a42c9bc7a61fe038b6676.td_f(103, 6)) : null)] = td_UF(td_nn);
            td_HO(td_Mv, td_xu);
        });
    } else {
        td_ni.oncomplete = function(td_gD) {
            td_xu[((typeof (td_0b.tdz_77a542b62d5a42c9bc7a61fe038b6676) !== "undefined" && typeof (td_0b.tdz_77a542b62d5a42c9bc7a61fe038b6676.td_f) !== "undefined") ? (td_0b.tdz_77a542b62d5a42c9bc7a61fe038b6676.td_f(103, 6)) : null)] = td_UF(td_gD.target.result);
            td_HO(td_Mv, td_xu);
        }
        ;
    }
}
function td_HO(td_XV, td_vE) {
    try {
        var td_ib;
        if (td_vE[Number(1285914).toString(35)] === ((typeof (td_0b.tdz_77a542b62d5a42c9bc7a61fe038b6676) !== "undefined" && typeof (td_0b.tdz_77a542b62d5a42c9bc7a61fe038b6676.td_f) !== "undefined") ? (td_0b.tdz_77a542b62d5a42c9bc7a61fe038b6676.td_f(31, 9)) : null)) {
            td_ib = td_cz.sign({
                name: ((typeof (td_0b.tdz_77a542b62d5a42c9bc7a61fe038b6676) !== "undefined" && typeof (td_0b.tdz_77a542b62d5a42c9bc7a61fe038b6676.td_f) !== "undefined") ? (td_0b.tdz_77a542b62d5a42c9bc7a61fe038b6676.td_f(40, 5)) : null),
                hash: {
                    name: ((typeof (td_0b.tdz_77a542b62d5a42c9bc7a61fe038b6676) !== "undefined" && typeof (td_0b.tdz_77a542b62d5a42c9bc7a61fe038b6676.td_f) !== "undefined") ? (td_0b.tdz_77a542b62d5a42c9bc7a61fe038b6676.td_f(67, 7)) : null)
                }
            }, td_XV, td_V9(td_vE));
        } else {
            td_ib = td_cz.sign({
                name: ((typeof (td_0b.tdz_77a542b62d5a42c9bc7a61fe038b6676) !== "undefined" && typeof (td_0b.tdz_77a542b62d5a42c9bc7a61fe038b6676.td_f) !== "undefined") ? (td_0b.tdz_77a542b62d5a42c9bc7a61fe038b6676.td_f(50, 17)) : null),
                hash: {
                    name: ((typeof (td_0b.tdz_77a542b62d5a42c9bc7a61fe038b6676) !== "undefined" && typeof (td_0b.tdz_77a542b62d5a42c9bc7a61fe038b6676.td_f) !== "undefined") ? (td_0b.tdz_77a542b62d5a42c9bc7a61fe038b6676.td_f(67, 7)) : null)
                }
            }, td_XV, td_V9(td_vE));
        }
        if (typeof td_ib.then !== [][[]] + "") {
            td_ib.then(function(td_NV) {
                if (td_vE[Number(1285914).toString(35)] === ((typeof (td_0b.tdz_77a542b62d5a42c9bc7a61fe038b6676) !== "undefined" && typeof (td_0b.tdz_77a542b62d5a42c9bc7a61fe038b6676.td_f) !== "undefined") ? (td_0b.tdz_77a542b62d5a42c9bc7a61fe038b6676.td_f(31, 9)) : null)) {
                    var td_dX = td_ZI(td_NV.slice(0, 32));
                    var td_Sp = td_ZI(td_NV.slice(32, 64));
                    td_vE[((typeof (td_0b.tdz_77a542b62d5a42c9bc7a61fe038b6676) !== "undefined" && typeof (td_0b.tdz_77a542b62d5a42c9bc7a61fe038b6676.td_f) !== "undefined") ? (td_0b.tdz_77a542b62d5a42c9bc7a61fe038b6676.td_f(109, 3)) : null)] = td_ge(td_mX(td_UF(td_dX)) + td_mX(td_UF(td_Sp)));
                } else {
                    td_vE[((typeof (td_0b.tdz_77a542b62d5a42c9bc7a61fe038b6676) !== "undefined" && typeof (td_0b.tdz_77a542b62d5a42c9bc7a61fe038b6676.td_f) !== "undefined") ? (td_0b.tdz_77a542b62d5a42c9bc7a61fe038b6676.td_f(109, 3)) : null)] = td_UF(td_NV);
                }
                td_TE(td_vE);
            }, function(td_dJ) {});
        } else {
            try {
                td_ib.oncomplete = function(td_qY) {
                    td_vE[((typeof (td_0b.tdz_77a542b62d5a42c9bc7a61fe038b6676) !== "undefined" && typeof (td_0b.tdz_77a542b62d5a42c9bc7a61fe038b6676.td_f) !== "undefined") ? (td_0b.tdz_77a542b62d5a42c9bc7a61fe038b6676.td_f(109, 3)) : null)] = td_UF(td_qY.target.result);
                    td_TE(td_vE);
                }
                ;
            } catch (td_x) {}
        }
    } catch (td_x) {}
}
function td_V9(td_Nf) {
    var td_C9 = [];
    var td_OF = td_Nf[((typeof (td_0b.tdz_77a542b62d5a42c9bc7a61fe038b6676) !== "undefined" && typeof (td_0b.tdz_77a542b62d5a42c9bc7a61fe038b6676.td_f) !== "undefined") ? (td_0b.tdz_77a542b62d5a42c9bc7a61fe038b6676.td_f(112, 3)) : null)] + td_Nf[((typeof (td_0b.tdz_77a542b62d5a42c9bc7a61fe038b6676) !== "undefined" && typeof (td_0b.tdz_77a542b62d5a42c9bc7a61fe038b6676.td_f) !== "undefined") ? (td_0b.tdz_77a542b62d5a42c9bc7a61fe038b6676.td_f(115, 5)) : null)] + td_Nf[Number(360884).toString(30)] + td_Nf[Number(1285914).toString(35)];
    for (var td_De = 0; td_De < td_OF.length; td_De++) {
        td_C9.push(td_OF.charCodeAt(td_De));
    }
    return new Uint8Array(td_C9);
}
function td_ZI(td_Lt) {
    var td_zu = 0;
    var td_F9 = new Uint8Array(td_Lt);
    for (var td_D9 = 0; td_D9 < td_F9.length; ++td_D9) {
        if (td_F9[td_D9] === 0) {
            ++td_zu;
        } else {
            break;
        }
    }
    if (td_zu === 0) {
        return td_Lt;
    } else {
        td_F9 = td_F9.slice(td_zu);
        return td_F9.buffer;
    }
}
function td_UF(td_bW) {
    return Array.prototype.map.call(new Uint8Array(td_bW), td_kA).join("");
}
function td_kA(td_kp) {
    return (((typeof (td_0b.tdz_77a542b62d5a42c9bc7a61fe038b6676) !== "undefined" && typeof (td_0b.tdz_77a542b62d5a42c9bc7a61fe038b6676.td_f) !== "undefined") ? (td_0b.tdz_77a542b62d5a42c9bc7a61fe038b6676.td_f(120, 2)) : null) + td_kp.toString(16)).slice(-2);
}
function td_mX(td_AM) {
    if (td_AM[0] >= "8") {
        return ((typeof (td_0b.tdz_77a542b62d5a42c9bc7a61fe038b6676) !== "undefined" && typeof (td_0b.tdz_77a542b62d5a42c9bc7a61fe038b6676.td_f) !== "undefined") ? (td_0b.tdz_77a542b62d5a42c9bc7a61fe038b6676.td_f(122, 2)) : null) + td_kA(td_AM.length / 2 + 1) + ((typeof (td_0b.tdz_77a542b62d5a42c9bc7a61fe038b6676) !== "undefined" && typeof (td_0b.tdz_77a542b62d5a42c9bc7a61fe038b6676.td_f) !== "undefined") ? (td_0b.tdz_77a542b62d5a42c9bc7a61fe038b6676.td_f(120, 2)) : null) + td_AM;
    } else {
        return ((typeof (td_0b.tdz_77a542b62d5a42c9bc7a61fe038b6676) !== "undefined" && typeof (td_0b.tdz_77a542b62d5a42c9bc7a61fe038b6676.td_f) !== "undefined") ? (td_0b.tdz_77a542b62d5a42c9bc7a61fe038b6676.td_f(122, 2)) : null) + td_kA(td_AM.length / 2) + td_AM;
    }
}
function td_ge(td_Kz) {
    return ((typeof (td_0b.tdz_77a542b62d5a42c9bc7a61fe038b6676) !== "undefined" && typeof (td_0b.tdz_77a542b62d5a42c9bc7a61fe038b6676.td_f) !== "undefined") ? (td_0b.tdz_77a542b62d5a42c9bc7a61fe038b6676.td_f(124, 2)) : null) + td_kA(td_Kz.length / 2) + td_Kz;
}
function td_TE(td_pS) {
    var td_EO = ((typeof (td_0b.tdz_77a542b62d5a42c9bc7a61fe038b6676) !== "undefined" && typeof (td_0b.tdz_77a542b62d5a42c9bc7a61fe038b6676.td_f) !== "undefined") ? (td_0b.tdz_77a542b62d5a42c9bc7a61fe038b6676.td_f(126, 8)) : null) + td_pS[((typeof (td_0b.tdz_77a542b62d5a42c9bc7a61fe038b6676) !== "undefined" && typeof (td_0b.tdz_77a542b62d5a42c9bc7a61fe038b6676.td_f) !== "undefined") ? (td_0b.tdz_77a542b62d5a42c9bc7a61fe038b6676.td_f(112, 3)) : null)] + ((typeof (td_0b.tdz_77a542b62d5a42c9bc7a61fe038b6676) !== "undefined" && typeof (td_0b.tdz_77a542b62d5a42c9bc7a61fe038b6676.td_f) !== "undefined") ? (td_0b.tdz_77a542b62d5a42c9bc7a61fe038b6676.td_f(134, 10)) : null) + td_pS[Number(360884).toString(30)] + ((typeof (td_0b.tdz_77a542b62d5a42c9bc7a61fe038b6676) !== "undefined" && typeof (td_0b.tdz_77a542b62d5a42c9bc7a61fe038b6676.td_f) !== "undefined") ? (td_0b.tdz_77a542b62d5a42c9bc7a61fe038b6676.td_f(144, 10)) : null) + td_pS[Number(1285914).toString(35)] + ((typeof (td_0b.tdz_77a542b62d5a42c9bc7a61fe038b6676) !== "undefined" && typeof (td_0b.tdz_77a542b62d5a42c9bc7a61fe038b6676.td_f) !== "undefined") ? (td_0b.tdz_77a542b62d5a42c9bc7a61fe038b6676.td_f(154, 9)) : null) + td_pS[((typeof (td_0b.tdz_77a542b62d5a42c9bc7a61fe038b6676) !== "undefined" && typeof (td_0b.tdz_77a542b62d5a42c9bc7a61fe038b6676.td_f) !== "undefined") ? (td_0b.tdz_77a542b62d5a42c9bc7a61fe038b6676.td_f(103, 6)) : null)] + ((typeof (td_0b.tdz_77a542b62d5a42c9bc7a61fe038b6676) !== "undefined" && typeof (td_0b.tdz_77a542b62d5a42c9bc7a61fe038b6676.td_f) !== "undefined") ? (td_0b.tdz_77a542b62d5a42c9bc7a61fe038b6676.td_f(163, 9)) : null) + td_pS[((typeof (td_0b.tdz_77a542b62d5a42c9bc7a61fe038b6676) !== "undefined" && typeof (td_0b.tdz_77a542b62d5a42c9bc7a61fe038b6676.td_f) !== "undefined") ? (td_0b.tdz_77a542b62d5a42c9bc7a61fe038b6676.td_f(109, 3)) : null)];
    td_EO += td_lY ? ((typeof (td_0b.tdz_77a542b62d5a42c9bc7a61fe038b6676) !== "undefined" && typeof (td_0b.tdz_77a542b62d5a42c9bc7a61fe038b6676.td_f) !== "undefined") ? (td_0b.tdz_77a542b62d5a42c9bc7a61fe038b6676.td_f(172, 7)) : null) : ((typeof (td_0b.tdz_77a542b62d5a42c9bc7a61fe038b6676) !== "undefined" && typeof (td_0b.tdz_77a542b62d5a42c9bc7a61fe038b6676.td_f) !== "undefined") ? (td_0b.tdz_77a542b62d5a42c9bc7a61fe038b6676.td_f(179, 7)) : null);
    var td_Ag = td_6I + ((typeof (td_0b.tdz_77a542b62d5a42c9bc7a61fe038b6676) !== "undefined" && typeof (td_0b.tdz_77a542b62d5a42c9bc7a61fe038b6676.td_f) !== "undefined") ? (td_0b.tdz_77a542b62d5a42c9bc7a61fe038b6676.td_f(186, 4)) : null) + td_0b.td_0B(td_EO, td_3r);
    td_6B(td_Ag, document);
}
function td_0G() {
    td_0b.td_6z();
    td_0b.td_3g(document);
    td_u();
    td_lY = true;
    td_5O();
}
td_0b.td_0H.push(function() {
    var td_1h = new td_0b.td_6D("885e7db6b30a4da4b7373959ad9268c3504C4115445E4D19151E40135B0208580B5954195050575A4F07565F19685646085E72275B52126F0C560856645B050452520603070A005A07505C57060F5E717D60523205321006034B055262132A720F674B42437F6A5303337E5D045D2E7E550C672A045707475067754C5D2E52591703794E4A0C5B762E300805587B567E4015725056501273531E4930063B2073045F6B787A74537339266C5E534B5B6169537A076F2A040452747D19460E194E007C5155624B7A53342A14476552265D480D582C7457365B337B52317D06136D1250405955484F51552968445C752046674B043F7C25300F2B50612E4020124C3A014547501456720F5D56626C682249745504090E55046C134A64377A090306007E0156055F055F5152140B0359061E0C0D50501A0556065A1E02520C00530D560E5656070F0C0E565308530E5D05005C5A0306055D5B01575554055202500651015500050A");
    td_3w = (td_1h) ? td_1h.td_f(326, 16) : null;
    td_6I = (td_1h) ? td_1h.td_f(0, 274) : null;
    td_3r = (td_1h) ? td_1h.td_f(274, 36) : null;
    td_1c = (td_1h) ? td_1h.td_f(310, 16) : null;
});
td_0b.tdz_5fffd5139d23445b82f2ff03a0b77340 = new td_0b.td_6D("\x35\x66\x66\x66\x64\x35\x31\x33\x39\x64\x32\x33\x34\x34\x35\x62\x38\x32\x66\x32\x66\x66\x30\x33\x61\x30\x62\x37\x37\x33\x34\x30\x34\x36\x31\x32\x31\x34\x30\x66\x30\x61\x35\x32");
var td_0b = td_0b || {};
var td_YA = 255;
function td_6d() {
    var td_nU = "";
    var td_pZ = "";
    if (typeof encodeURIComponent === [][[]] + "") {
        return td_nU;
    }
    if (document.referrer !== undefined && document.referrer !== null && document.referrer.substring !== undefined && document.referrer.substring !== null) {
        td_nU = encodeURIComponent(document.referrer.substring(0, td_YA));
    } else {}
    if (location.href !== undefined && location.href !== null && location.href.substring !== undefined && location.href.substring !== null) {
        td_pZ = encodeURIComponent(location.href.substring(0, td_YA));
    } else {}
    if (typeof td_6M === ((typeof (td_0b.tdz_5fffd5139d23445b82f2ff03a0b77340) !== "undefined" && typeof (td_0b.tdz_5fffd5139d23445b82f2ff03a0b77340.td_f) !== "undefined") ? (td_0b.tdz_5fffd5139d23445b82f2ff03a0b77340.td_f(0, 6)) : null) && td_6M.length > 0 && (window.top !== undefined && window.top !== null && window !== window.top) && (td_nU.length === 0 || ((td_pZ.length > 0 && td_nU === td_pZ) && (!(window.frameElement === undefined) && window.frameElement !== null)))) {
        td_nU = td_6M;
    }
    return td_nU;
}
var td_0b = td_0b || {};
function td_3H() {
    td_0b.load_iframe(td_4D, document);
}
td_0b.tdz_1fd11fa0e9c14d81bf216c3685be5c5d = new td_0b.td_6D("\x31\x66\x64\x31\x31\x66\x61\x30\x65\x39\x63\x31\x34\x64\x38\x31\x62\x66\x32\x31\x36\x63\x33\x36\x38\x35\x62\x65\x35\x63\x35\x64\x34\x34\x31\x35\x30\x31\x31\x31\x34\x32\x31\x32\x31\x33\x35\x39\x30\x36\x34\x64\x32\x36\x34\x39\x34\x34\x30\x38\x35\x37\x34\x33\x30\x37\x31\x34\x37\x62\x37\x34\x31\x36\x30\x37\x35\x63\x35\x33\x34\x62\x35\x62\x34\x35\x31\x31\x31\x35\x31\x34\x35\x61\x31\x36\x35\x61\x33\x33\x32\x37\x37\x33\x34\x33\x30\x39\x31\x36\x34\x33\x30\x30\x34\x62\x33\x36\x37\x32\x37\x36\x31\x36\x35\x37\x34\x36\x31\x31\x30\x33\x34\x30\x31\x31\x35\x35\x30\x32\x35\x30\x35\x65\x35\x64\x31\x35\x30\x33\x30\x36\x35\x36\x30\x36\x34\x35\x31\x30\x31\x31\x30\x65\x30\x31\x35\x30\x35\x35\x30\x33\x31\x33\x34\x33\x33\x36\x35\x38\x30\x35\x35\x30\x34\x36\x30\x64\x36\x62\x35\x30\x30\x34\x30\x37\x34\x30\x35\x38\x31\x36\x35\x61\x31\x65\x31\x36\x35\x62\x35\x34\x30\x31\x30\x64\x35\x30\x34\x33\x35\x34\x30\x37\x35\x32\x30\x33\x31\x34\x34\x35\x31\x31\x30\x65\x30\x34\x35\x31\x30\x31\x35\x63\x31\x31\x34\x32\x37\x33\x32\x31\x36\x63\x37\x30\x30\x31\x30\x35\x35\x37\x34\x31\x34\x32\x34\x39\x31\x63\x31\x63\x31\x34\x31\x35");
var td_0b = td_0b || {};
function td_Pe() {
    ((typeof (td_0b.tdz_1fd11fa0e9c14d81bf216c3685be5c5d) !== "undefined" && typeof (td_0b.tdz_1fd11fa0e9c14d81bf216c3685be5c5d.td_f) !== "undefined") ? (td_0b.tdz_1fd11fa0e9c14d81bf216c3685be5c5d.td_f(0, 10)) : null);
    var td_DI = [[((typeof (td_0b.tdz_1fd11fa0e9c14d81bf216c3685be5c5d) !== "undefined" && typeof (td_0b.tdz_1fd11fa0e9c14d81bf216c3685be5c5d.td_f) !== "undefined") ? (td_0b.tdz_1fd11fa0e9c14d81bf216c3685be5c5d.td_f(10, 8)) : null), 0, ((typeof (td_0b.tdz_1fd11fa0e9c14d81bf216c3685be5c5d) !== "undefined" && typeof (td_0b.tdz_1fd11fa0e9c14d81bf216c3685be5c5d.td_f) !== "undefined") ? (td_0b.tdz_1fd11fa0e9c14d81bf216c3685be5c5d.td_f(18, 15)) : null)], [((typeof (td_0b.tdz_1fd11fa0e9c14d81bf216c3685be5c5d) !== "undefined" && typeof (td_0b.tdz_1fd11fa0e9c14d81bf216c3685be5c5d.td_f) !== "undefined") ? (td_0b.tdz_1fd11fa0e9c14d81bf216c3685be5c5d.td_f(33, 9)) : null), 0, ((typeof (td_0b.tdz_1fd11fa0e9c14d81bf216c3685be5c5d) !== "undefined" && typeof (td_0b.tdz_1fd11fa0e9c14d81bf216c3685be5c5d.td_f) !== "undefined") ? (td_0b.tdz_1fd11fa0e9c14d81bf216c3685be5c5d.td_f(42, 30)) : null)], [((typeof (td_0b.tdz_1fd11fa0e9c14d81bf216c3685be5c5d) !== "undefined" && typeof (td_0b.tdz_1fd11fa0e9c14d81bf216c3685be5c5d.td_f) !== "undefined") ? (td_0b.tdz_1fd11fa0e9c14d81bf216c3685be5c5d.td_f(72, 6)) : null), 9, ((typeof (td_0b.tdz_1fd11fa0e9c14d81bf216c3685be5c5d) !== "undefined" && typeof (td_0b.tdz_1fd11fa0e9c14d81bf216c3685be5c5d.td_f) !== "undefined") ? (td_0b.tdz_1fd11fa0e9c14d81bf216c3685be5c5d.td_f(78, 30)) : null)]];
    try {
        for (var td_yd = 0; td_yd < td_DI.length; td_yd++) {
            var td_Hy = td_DI[td_yd][0];
            var td_gx = td_DI[td_yd][1];
            if (td_0Z.td_2k !== td_Hy) {
                continue;
            }
            if (td_gx === 0) {
                return false;
            }
            var td_gZ = parseInt(td_0Z.td_6V);
            if (td_gZ && td_gx < td_gZ) {
                return true;
            }
            return false;
        }
    } catch (td_x) {
        return false;
    }
    return true;
}
function td_5l() {
    ((typeof (td_0b.tdz_1fd11fa0e9c14d81bf216c3685be5c5d) !== "undefined" && typeof (td_0b.tdz_1fd11fa0e9c14d81bf216c3685be5c5d.td_f) !== "undefined") ? (td_0b.tdz_1fd11fa0e9c14d81bf216c3685be5c5d.td_f(0, 10)) : null);
    var td_ji = td_0b.td_1R();
    if (!td_Pe() || !td_ji) {
        return false;
    }
    try {
        var td_rE = td_0E + "/" + td_1c + td_3r;
        td_rE = td_rE.replace(/[\r\n]/g, "");
        td_ji.open(((typeof (td_0b.tdz_1fd11fa0e9c14d81bf216c3685be5c5d) !== "undefined" && typeof (td_0b.tdz_1fd11fa0e9c14d81bf216c3685be5c5d.td_f) !== "undefined") ? (td_0b.tdz_1fd11fa0e9c14d81bf216c3685be5c5d.td_f(108, 3)) : null), td_4F, true);
        td_ji.setRequestHeader(((typeof (td_0b.tdz_1fd11fa0e9c14d81bf216c3685be5c5d) !== "undefined" && typeof (td_0b.tdz_1fd11fa0e9c14d81bf216c3685be5c5d.td_f) !== "undefined") ? (td_0b.tdz_1fd11fa0e9c14d81bf216c3685be5c5d.td_f(111, 6)) : null), ((typeof (td_0b.tdz_1fd11fa0e9c14d81bf216c3685be5c5d) !== "undefined" && typeof (td_0b.tdz_1fd11fa0e9c14d81bf216c3685be5c5d.td_f) !== "undefined") ? (td_0b.tdz_1fd11fa0e9c14d81bf216c3685be5c5d.td_f(117, 5)) : null) + td_rE);
        td_ji.send(null);
        return true;
    } catch (td_x) {
        return false;
    }
    return false;
}
td_0b.tdz_23c59efa29c742ca9ecd1bc48e395a44 = new td_0b.td_6D("\x32\x33\x63\x35\x39\x65\x66\x61\x32\x39\x63\x37\x34\x32\x63\x61\x39\x65\x63\x64\x31\x62\x63\x34\x38\x65\x33\x39\x35\x61\x34\x34\x37\x34\x35\x61\x31\x31\x35\x30\x35\x66\x30\x61\x31\x65\x33\x32\x35\x33\x35\x66\x30\x32\x34\x35\x35\x64");
var td_0b = td_0b || {};
function td_3c() {
    var td_QN = 20;
    var td_cZ = 10;
    var td_eu = 10;
    var td_Kj = 0;
    var td_yo = null;
    var td_I1 = function() {
        return window.performance.now() * 1000;
    };
    var td_Nt = function() {
        return performance.now().toFixed(3) / 1000;
    };
    var td_KT = function() {
        return (td_p() - td_Kj).toFixed(3) * 1000;
    };
    function td_nh() {
        var td_Ls = 1;
        var td_KS = td_yo();
        var td_Xc = td_yo();
        while (td_Xc === td_KS) {
            td_Xc = td_yo();
            ++td_Ls;
        }
        var td_yO = (td_Xc - td_KS) * 1000000;
        var td_G4 = td_Ls / td_yO;
        if (td_G4 < 1e-8) {
            return 1e-8;
        }
        return td_G4;
    }
    function td_P2(td_rY) {
        if (typeof Math !== [][[]] + "" && Math !== null && typeof Math.round !== [][[]] + "" && Math.round !== null) {
            return Math.round(td_rY);
        }
        return null;
    }
    function td_qS() {
        var td_VX = 0;
        var td_sL = 0;
        try {
            var td_gC = td_nh();
            td_VX = td_yo();
            td_sL = td_yo() - td_VX;
            if (td_sL === 0 || td_sL < 1e-8) {
                td_sL = td_gC;
            }
            for (var td_Qf = 0; td_Qf < td_QN; ++td_Qf) {
                td_sL = td_Ic(td_sL, (td_yo() - td_VX));
            }
            return (td_P2(1 / td_sL));
        } catch (td_tQ) {
            return -1;
        }
    }
    function td_Ic(td_tY, td_Qw) {
        try {
            if (td_tY < 1e-8) {
                return td_Qw;
            }
            if (td_tY < td_Qw) {
                return td_Ic(td_Qw - Math.floor(td_Qw / td_tY) * td_tY, td_tY);
            } else {
                if (td_tY === td_Qw) {
                    return td_tY;
                } else {
                    return td_Ic(td_Qw, td_tY);
                }
            }
        } catch (td_vW) {
            return 0;
        }
    }
    if (td_0Z.td_2k !== ((typeof (td_0b.tdz_23c59efa29c742ca9ecd1bc48e395a44) !== "undefined" && typeof (td_0b.tdz_23c59efa29c742ca9ecd1bc48e395a44.td_f) !== "undefined") ? (td_0b.tdz_23c59efa29c742ca9ecd1bc48e395a44.td_f(0, 7)) : null) && td_0Z.td_2k !== ((typeof (td_0b.tdz_23c59efa29c742ca9ecd1bc48e395a44) !== "undefined" && typeof (td_0b.tdz_23c59efa29c742ca9ecd1bc48e395a44.td_f) !== "undefined") ? (td_0b.tdz_23c59efa29c742ca9ecd1bc48e395a44.td_f(7, 6)) : null) && typeof performance !== [][[]] + "" && typeof performance.now !== [][[]] + "") {
        td_yo = td_Nt;
    } else {
        if (td_0Z.td_2k !== ((typeof (td_0b.tdz_23c59efa29c742ca9ecd1bc48e395a44) !== "undefined" && typeof (td_0b.tdz_23c59efa29c742ca9ecd1bc48e395a44.td_f) !== "undefined") ? (td_0b.tdz_23c59efa29c742ca9ecd1bc48e395a44.td_f(7, 6)) : null) && typeof window.performance !== [][[]] + "" && typeof window.performance.now !== [][[]] + "") {
            td_yo = td_I1;
        } else {
            td_Kj = td_p();
            td_yo = td_KT;
        }
    }
    if (!td_yo || !Math || !Math.round || !Math.floor || !Math.sqrt || !Math.pow) {
        return null;
    }
    function td_Sb() {
        var td_nx = [];
        for (var td_Wj = 0; td_Wj < td_cZ; ++td_Wj) {
            td_nx.push(td_qS());
        }
        var td_tA = td_0b.mean(td_nx);
        var td_Yi = td_0b.std_dev(td_nx, td_tA);
        var td_NR = 0;
        var td_uq = 0;
        if (td_Yi !== 0) {
            var td_tH = td_0b.confidence_interval(td_nx, td_Yi, td_tA, 1);
            td_uq = td_0b.mean(td_tH);
            td_NR = td_P2(td_uq);
        } else {
            td_NR = td_P2(td_tA);
        }
        return td_NR;
    }
    var td_VV = 0;
    var td_m5 = 0;
    while (td_VV === 0 && td_m5++ < td_eu) {
        td_VV = td_Sb();
    }
    if (td_VV !== 0) {
        return encodeURIComponent(td_VV);
    } else {
        return null;
    }
}
function td_4u() {
    td_6B(td_2j, document);
}
var td_3P = {};
td_3P.td_3t = function(td_x, td_C) {
    td_C = (typeof td_C === [][[]] + "") ? true : td_C;
    if (td_C) {
        td_x = td_1T.td_4L(td_x);
    }
    var td_a = [1518500249, 1859775393, 2400959708, 3395469782];
    td_x += String.fromCharCode(128);
    var td_w = td_x.length / 4 + 2;
    var td_J = Math.ceil(td_w / 16);
    var td_m = new Array(td_J);
    for (var td_X = 0; td_X < td_J; td_X++) {
        td_m[td_X] = new Array(16);
        for (var td_u = 0; td_u < 16; td_u++) {
            td_m[td_X][td_u] = (td_x.charCodeAt(td_X * 64 + td_u * 4) << 24) | (td_x.charCodeAt(td_X * 64 + td_u * 4 + 1) << 16) | (td_x.charCodeAt(td_X * 64 + td_u * 4 + 2) << 8) | (td_x.charCodeAt(td_X * 64 + td_u * 4 + 3));
        }
    }
    td_m[td_J - 1][14] = ((td_x.length - 1) * 8) / Math.pow(2, 32);
    td_m[td_J - 1][14] = Math.floor(td_m[td_J - 1][14]);
    td_m[td_J - 1][15] = ((td_x.length - 1) * 8) & 4294967295;
    var td_L = 1732584193;
    var td_k = 4023233417;
    var td_S = 2562383102;
    var td_W = 271733878;
    var td_d = 3285377520;
    var td_N = new Array(80);
    var td_n, td_f, td_l, td_P, td_p;
    for (var td_X = 0; td_X < td_J; td_X++) {
        for (var td_E = 0; td_E < 16; td_E++) {
            td_N[td_E] = td_m[td_X][td_E];
        }
        for (var td_E = 16; td_E < 80; td_E++) {
            td_N[td_E] = td_3P.td_2Q(td_N[td_E - 3] ^ td_N[td_E - 8] ^ td_N[td_E - 14] ^ td_N[td_E - 16], 1);
        }
        td_n = td_L;
        td_f = td_k;
        td_l = td_S;
        td_P = td_W;
        td_p = td_d;
        for (var td_E = 0; td_E < 80; td_E++) {
            var td_v = Math.floor(td_E / 20);
            var td_F = (td_3P.td_2Q(td_n, 5) + td_3P.f(td_v, td_f, td_l, td_P) + td_p + td_a[td_v] + td_N[td_E]) & 4294967295;
            td_p = td_P;
            td_P = td_l;
            td_l = td_3P.td_2Q(td_f, 30);
            td_f = td_n;
            td_n = td_F;
        }
        td_L = (td_L + td_n) & 4294967295;
        td_k = (td_k + td_f) & 4294967295;
        td_S = (td_S + td_l) & 4294967295;
        td_W = (td_W + td_P) & 4294967295;
        td_d = (td_d + td_p) & 4294967295;
    }
    return td_3P.td_4x(td_L) + td_3P.td_4x(td_k) + td_3P.td_4x(td_S) + td_3P.td_4x(td_W) + td_3P.td_4x(td_d);
}
;
td_3P.f = function(td_k, td_L, td_n, td_u) {
    switch (td_k) {
    case 0:
        return (td_L & td_n) ^ (~td_L & td_u);
    case 1:
        return td_L ^ td_n ^ td_u;
    case 2:
        return (td_L & td_n) ^ (td_L & td_u) ^ (td_n & td_u);
    case 3:
        return td_L ^ td_n ^ td_u;
    }
}
;
td_3P.td_2Q = function(td_f, td_o) {
    return (td_f << td_o) | (td_f >>> (32 - td_o));
}
;
td_3P.td_4x = function(td_S) {
    var td_a = "", td_r;
    for (var td_J = 7; td_J >= 0; td_J--) {
        td_r = (td_S >>> (td_J * 4)) & 15;
        td_a += td_r.toString(16);
    }
    return td_a;
}
;
var td_1T = {};
td_1T.td_4L = function(td_E) {
    var td_N = td_E.replace(/[\u0080-\u07ff]/g, function(td_D) {
        var td_s = td_D.charCodeAt(0);
        return String.fromCharCode(192 | td_s >> 6, 128 | td_s & 63);
    });
    td_N = td_N.replace(/[\u0800-\uffff]/g, function(td_m) {
        var td_X = td_m.charCodeAt(0);
        return String.fromCharCode(224 | td_X >> 12, 128 | td_X >> 6 & 63, 128 | td_X & 63);
    });
    return td_N;
}
;
function td_2D(td_s) {
    return td_3P.td_3t(td_s, true);
}
td_0b.tdz_32212204e5c3485ca6899e4f3aa9d7a4 = new td_0b.td_6D("\x33\x32\x32\x31\x32\x32\x30\x34\x65\x35\x63\x33\x34\x38\x35\x63\x61\x36\x38\x39\x39\x65\x34\x66\x33\x61\x61\x39\x64\x37\x61\x34\x34\x36\x34\x31\x35\x37\x31\x31\x34\x31\x34\x36\x34\x32\x35\x64\x30\x36\x34\x31\x30\x65\x35\x63\x34\x31\x34\x62\x35\x30\x30\x65\x31\x37\x35\x62\x34\x62\x34\x64\x35\x34\x30\x61\x34\x34\x34\x30\x35\x31\x30\x39\x31\x32\x35\x61\x33\x62\x35\x65\x30\x66\x35\x30\x35\x36\x34\x61\x30\x66\x31\x37\x35\x66\x35\x65\x35\x35\x30\x39\x35\x34\x31\x33\x31\x33\x35\x32\x35\x33\x35\x64\x36\x61\x30\x61\x30\x35\x30\x62\x31\x65\x35\x33\x35\x38\x30\x36\x30\x39\x35\x37\x31\x35\x30\x62\x30\x34\x30\x34");
var td_0b = td_0b || {};
function td_2q(td_P3) {
    ((typeof (td_0b.tdz_32212204e5c3485ca6899e4f3aa9d7a4) !== "undefined" && typeof (td_0b.tdz_32212204e5c3485ca6899e4f3aa9d7a4.td_f) !== "undefined") ? (td_0b.tdz_32212204e5c3485ca6899e4f3aa9d7a4.td_f(0, 10)) : null);
    if (typeof td_P3 === [][[]] + "" || td_P3 === null) {
        return null;
    }
    if (typeof td_0b.makeQueryStringIfJsonUnderMaxSize === [][[]] + "" || td_0b.makeQueryStringIfJsonUnderMaxSize === null) {}
    var td_vz = td_0b.mouse.ANALYTICS_OFFSET;
    var td_NN = td_0b.mouse.STATS_OFFSET;
    var td_yf = td_0b.mouse.RAW_OFFSET;
    var td_OZ = td_0b.mouse.LIVENESS_OFFSET;
    var td_DP = td_P3[td_0b.mouse.LEGACY_REPORT_REF];
    var td_Lx = td_P3[td_0b.mouse.BHS_REPORT_REF];
    var td_Lm = td_P3[td_0b.mouse.MAX_SIZE_ANALYTICS_REF];
    var td_s1 = td_P3[td_0b.mouse.MAX_SIZE_STAT_REF];
    var td_EH = td_P3[td_0b.mouse.MAX_SIZE_RAW_REF];
    var td_oY = td_P3[td_0b.mouse.MAX_SIZE_MOUSE_OFF_PAGE_REF];
    if (!td_DP && !td_Lx) {
        return null;
    }
    var td_aV = 64000;
    var td_bk = 4;
    var td_uQ = 10;
    var td_Ub = false;
    var td_Rg = false;
    var td_UH = false;
    var td_zz = false;
    var td_t4 = 0;
    var td_Sr = 0;
    var td_fi = true;
    var td_lE = true;
    var td_Z0 = true;
    var td_Vz = true;
    var td_B3 = false;
    var td_kt = 0;
    if (typeof td_3v !== [][[]] + "" && td_3v !== null && td_3v !== 0) {
        td_fi = (td_3v & td_yf) === td_yf;
        td_lE = (td_3v & td_OZ) === td_OZ;
        td_Z0 = (td_3v & td_NN) === td_NN;
        td_Vz = (td_3v & td_vz) === td_vz;
    }
    function td_q6() {
        var td_uN = "";
        var td_bm = null;
        var td_Wv = "";
        if (td_DP && td_Vz && !td_Ub) {
            td_Wv = td_DP.getMetaParams();
            td_bm = td_0b.makeQueryStringIfJsonUnderMaxSize(((typeof (td_0b.tdz_32212204e5c3485ca6899e4f3aa9d7a4) !== "undefined" && typeof (td_0b.tdz_32212204e5c3485ca6899e4f3aa9d7a4.td_f) !== "undefined") ? (td_0b.tdz_32212204e5c3485ca6899e4f3aa9d7a4.td_f(10, 7)) : null), td_Lm, td_Wv);
            (td_bm[td_0b.BB_COMMON.NOT_TOO_LARGE]) ? (td_uN += td_bm[td_0b.BB_COMMON.RESULT_QUERY_DATA]) : (td_Ub = true);
        }
        if (td_DP && td_Z0 && !td_Rg) {
            td_Wv = td_DP.getStatParams();
            td_bm = td_0b.makeQueryStringIfJsonUnderMaxSize(((typeof (td_0b.tdz_32212204e5c3485ca6899e4f3aa9d7a4) !== "undefined" && typeof (td_0b.tdz_32212204e5c3485ca6899e4f3aa9d7a4.td_f) !== "undefined") ? (td_0b.tdz_32212204e5c3485ca6899e4f3aa9d7a4.td_f(17, 3)) : null), td_s1, td_Wv);
            (td_bm[td_0b.BB_COMMON.NOT_TOO_LARGE]) ? (td_uN += td_bm[td_0b.BB_COMMON.RESULT_QUERY_DATA]) : (td_Rg = true);
        }
        if (td_DP && !td_UH) {
            td_Wv = td_DP.getMouseOffPage();
            td_bm = td_0b.makeQueryStringIfJsonUnderMaxSize(((typeof (td_0b.tdz_32212204e5c3485ca6899e4f3aa9d7a4) !== "undefined" && typeof (td_0b.tdz_32212204e5c3485ca6899e4f3aa9d7a4.td_f) !== "undefined") ? (td_0b.tdz_32212204e5c3485ca6899e4f3aa9d7a4.td_f(20, 3)) : null), td_oY, td_Wv);
            (td_bm[td_0b.BB_COMMON.NOT_TOO_LARGE]) ? (td_uN += td_bm[td_0b.BB_COMMON.RESULT_QUERY_DATA]) : (td_UH = true);
        }
        if (td_Lx && !td_zz) {
            td_Wv = td_Lx.getDataReportingChunk(td_EH);
            td_bm = td_0b.makeQueryStringIfJsonUnderMaxSize(Number(283400).toString(29), td_EH, td_Wv);
            if (td_bm[td_0b.BB_COMMON.NOT_TOO_LARGE] && td_bm[td_0b.BB_COMMON.RESULT_QUERY_DATA].length > 2) {
                td_uN += td_bm[td_0b.BB_COMMON.RESULT_QUERY_DATA];
                td_uN += ((typeof (td_0b.tdz_32212204e5c3485ca6899e4f3aa9d7a4) !== "undefined" && typeof (td_0b.tdz_32212204e5c3485ca6899e4f3aa9d7a4.td_f) !== "undefined") ? (td_0b.tdz_32212204e5c3485ca6899e4f3aa9d7a4.td_f(23, 12)) : null) + td_kt++;
            }
            if (!td_bm[td_0b.BB_COMMON.NOT_TOO_LARGE]) {
                td_zz = true;
            }
        }
        if (td_uN === null || td_uN === "") {
            return "";
        }
        if (td_DP && td_lE && td_DP.isLivenessGreaterThanThreshold(td_bk)) {
            td_uN += ((typeof (td_0b.tdz_32212204e5c3485ca6899e4f3aa9d7a4) !== "undefined" && typeof (td_0b.tdz_32212204e5c3485ca6899e4f3aa9d7a4.td_f) !== "undefined") ? (td_0b.tdz_32212204e5c3485ca6899e4f3aa9d7a4.td_f(35, 6)) : null);
        }
        return td_uN;
    }
    function td_OK() {
        var td_ib = td_q6();
        if (td_ib === null || td_ib === "") {
            return td_B3;
        }
        if (typeof td_6K !== [][[]] + "" && td_6K !== null) {
            td_ib = ((typeof (td_0b.tdz_32212204e5c3485ca6899e4f3aa9d7a4) !== "undefined" && typeof (td_0b.tdz_32212204e5c3485ca6899e4f3aa9d7a4.td_f) !== "undefined") ? (td_0b.tdz_32212204e5c3485ca6899e4f3aa9d7a4.td_f(41, 9)) : null) + encodeURIComponent(td_6K) + td_ib;
        }
        td_ib = ((typeof (td_0b.tdz_32212204e5c3485ca6899e4f3aa9d7a4) !== "undefined" && typeof (td_0b.tdz_32212204e5c3485ca6899e4f3aa9d7a4.td_f) !== "undefined") ? (td_0b.tdz_32212204e5c3485ca6899e4f3aa9d7a4.td_f(50, 6)) : null) + td_ib;
        var td_SN = td_4m + ((typeof (td_0b.tdz_32212204e5c3485ca6899e4f3aa9d7a4) !== "undefined" && typeof (td_0b.tdz_32212204e5c3485ca6899e4f3aa9d7a4.td_f) !== "undefined") ? (td_0b.tdz_32212204e5c3485ca6899e4f3aa9d7a4.td_f(56, 4)) : null) + td_0b.td_0B(td_ib, td_3r);
        if (td_SN.length >= td_aV) {
            td_B3 = true;
            return td_B3;
        }
        td_0Q(td_SN, document);
        return td_B3;
    }
    var td_MJ = false;
    if (typeof td_0l !== [][[]] + "" && td_0l !== null) {
        if (typeof td_4B === [][[]] + "" || td_4B === null) {
            td_0l();
        }
        if (typeof td_4B !== [][[]] + "" && td_4B !== null && typeof td_4B.reg !== [][[]] + "" && td_4B.reg !== null) {
            td_MJ = td_4B.reg(td_q6);
        }
    }
    if (!td_MJ) {}
    return [td_OK];
}
td_0b.tdz_b4a277ac769649d38ea069944834ace6 = new td_0b.td_6D("\x62\x34\x61\x32\x37\x37\x61\x63\x37\x36\x39\x36\x34\x39\x64\x33\x38\x65\x61\x30\x36\x39\x39\x34\x34\x38\x33\x34\x61\x63\x65\x36\x30\x31\x35\x63\x30\x34\x35\x31\x35\x63\x35\x35\x30\x65\x31\x62\x34\x31\x35\x33\x34\x62\x35\x32\x35\x64\x34\x61\x30\x35\x35\x31\x35\x34\x30\x30\x30\x35");
var td_0b = td_0b || {};
function td_6u(td_QE, td_Tf, td_va) {
    var td_i6 = 1;
    var td_k8 = 1;
    var td_oB = 30000;
    var td_y2 = 250;
    td_QE = (typeof td_QE !== [][[]] + "") ? td_0b.toNumber(td_QE) : td_i6;
    td_Tf = (typeof td_Tf !== [][[]] + "") ? td_0b.toNumber(td_Tf) : td_oB;
    td_va = (typeof td_va !== [][[]] + "") ? td_0b.toNumber(td_va) : td_y2;
    var td_dx = (td_QE === null || td_i6 > td_QE) ? td_i6 : td_QE;
    var td_n4 = (td_Tf === null || td_k8 > td_Tf) ? td_oB : td_Tf;
    var td_L4 = (td_va === null || td_y2 > td_va) ? td_y2 : td_va;
    var td_xj = 3;
    var td_Ta = null;
    var td_Sq = null;
    var td_GE = null;
    var td_Lf = 2048;
    var td_ae = false;
    var td_Ry = 0;
    var td_l6 = true;
    var td_ps = {
        "\x69\x6e\x70\x75\x74": 1,
        "\x66\x69\x65\x6c\x64\x73\x65\x74": 1,
        "\x6f\x75\x74\x70\x75\x74": 1,
        "\x73\x65\x61\x72\x63\x68": 1,
        "\x74\x65\x78\x74": 1,
        "\x70\x61\x73\x73\x77\x6f\x72\x64": 1,
        "\x74\x65\x78\x74\x61\x72\x65\x61": 1,
        "\x6f\x62\x6a\x65\x63\x74": 1,
        "\x73\x65\x6c\x65\x63\x74": 1,
        "\x62\x75\x74\x74\x6f\x6e": 1,
        "\x6d\x65\x74\x65\x72": 1,
        "\x65\x6d\x61\x69\x6c": 1,
        "\x64\x61\x74\x61\x6c\x69\x73\x74": 1,
        "\x63\x68\x65\x63\x6b\x62\x6f\x78": 1,
        "\x72\x61\x64\x69\x6f": 1,
        "\x63\x6f\x6c\x6f\x72": 1,
        "\x64\x61\x74\x65": 1,
        "\x64\x61\x74\x65\x74\x69\x6d\x65": 1,
        "\x64\x61\x74\x65\x74\x69\x6d\x65-\x6c\x6f\x63\x61\x6c": 1,
        "\x66\x69\x6c\x65": 1,
        "\x68\x69\x64\x64\x65\x6e": 1,
        "\x6d\x6f\x6e\x74\x68": 1,
        "\x6e\x75\x6d\x62\x65\x72": 1,
        "\x72\x61\x6e\x67\x65": 1,
        "\x74\x65\x6c": 1,
        "\x74\x69\x6d\x65": 1,
        "\x75\x72\x6c": 1,
        "\x77\x65\x65\x6b": 1,
        "\x6f\x70\x74\x69\x6f\x6e": 1,
        "\x73\x75\x62\x6d\x69\x74": 1,
        "\x72\x65\x73\x65\x74": 1,
        "\x69\x6d\x61\x67\x65": 1
    };
    var td_Ff = true;
    var td_AR = 10;
    var td_tF = 0;
    var td_MX = null;
    var td_S8 = null;
    function td_U5(td_QQ) {
        return (typeof td_QQ === [][[]] + "" || td_QQ === null || td_QQ === "");
    }
    function td_T8(td_j4) {
        if (typeof td_j4 === [][[]] + "" || td_j4 === null) {
            return null;
        }
        if (!td_U5(td_j4.name)) {
            return td_0b.sanitisedInputNames(td_j4.name);
        }
        return null;
    }
    function td_Ty(td_vU) {
        if (typeof td_vU === [][[]] + "" || td_vU === null) {
            return null;
        }
        if (!td_U5(td_vU.id)) {
            return td_0b.sanitisedInputNames(td_vU.id);
        }
        return null;
    }
    function td_HC(td_n3) {
        if (typeof td_n3 === [][[]] + "" || td_n3 === null) {
            return null;
        }
        if (typeof td_n3.type !== [][[]] + "" && td_n3.type !== null) {
            return td_n3.type;
        }
        if (typeof td_n3.nodeName === [][[]] + "" || td_n3.nodeName === null) {
            return td_n3.nodeName;
        }
        return null;
    }
    function td_lN(td_cU, td_FS) {
        if (typeof td_cU === [][[]] + "" || td_cU === null) {
            return null;
        }
        if (td_FS === ((typeof (td_0b.tdz_b4a277ac769649d38ea069944834ace6) !== "undefined" && typeof (td_0b.tdz_b4a277ac769649d38ea069944834ace6.td_f) !== "undefined") ? (td_0b.tdz_b4a277ac769649d38ea069944834ace6.td_f(0, 8)) : null) && typeof td_cU.checked !== [][[]] + "" && td_cU.checked !== null) {
            return "" + td_cU.checked;
        }
        if (td_FS === ((typeof (td_0b.tdz_b4a277ac769649d38ea069944834ace6) !== "undefined" && typeof (td_0b.tdz_b4a277ac769649d38ea069944834ace6.td_f) !== "undefined") ? (td_0b.tdz_b4a277ac769649d38ea069944834ace6.td_f(0, 8)) : null) && typeof td_cU.indeterminate !== [][[]] + "" && td_cU.indeterminate !== null) {
            return "" + td_cU.indeterminate;
        }
        if (typeof td_cU.value !== [][[]] + "" && td_cU.value !== null) {
            return td_cU.value;
        }
        if (typeof td_cU.textContent !== [][[]] + "" && td_cU.textContent !== null) {
            return td_cU.textContent;
        }
        return null;
    }
    function td_qH(td_qj) {
        return td_ps.hasOwnProperty(td_qj);
    }
    function td_jO(td_HQ, td_jS) {
        var td_ld = td_HC(td_HQ);
        if (td_ld === null || td_ld === "" || !td_qH(td_ld) && !td_0b.isContentEditable(td_HQ)) {
            return;
        }
        var td_ei = td_Ty(td_HQ);
        var td_wY = td_T8(td_HQ);
        if (td_ld === null || (td_ei === null && td_wY === null)) {
            return;
        }
        var td_JK = td_5y(td_lN(td_HQ, td_ld));
        if (td_U5(td_JK)) {
            td_JK = null;
        }
        td_3q.set(td_ld, td_wY, td_ei, ((td_jS) ? false : null), null, td_JK);
    }
    function td_hv(td_r1, td_sa) {
        if (typeof "".toUpperCase === [][[]] + "") {
            return false;
        }
        if (typeof td_r1 === [][[]] + "" || td_r1.all === undefined || td_r1.all.length === undefined) {
            return false;
        }
        var td_uX = null;
        var td_On = td_r1.all.length;
        for (var td_uh = 0; td_uh < td_On; ++td_uh) {
            if (typeof td_r1.all.hasOwnProperty !== [][[]] + "" && td_r1.all.hasOwnProperty !== null && !td_r1.all.hasOwnProperty(td_uh)) {
                continue;
            }
            var td_o1 = td_r1.all[td_uh];
            if (typeof td_o1.length !== [][[]] + "") {
                for (var td_NR = 0; td_NR < td_o1.length; ++td_NR) {
                    if (!td_o1.hasOwnProperty(td_NR)) {
                        continue;
                    }
                    td_jO(td_o1[td_NR], td_sa);
                }
            } else {
                td_jO(td_o1, td_sa);
            }
        }
        return true;
    }
    function td_h3(td_Fm, td_gV) {
        if (td_Fm === null || typeof Array === [][[]] + "" || typeof Array.prototype === [][[]] + "" || typeof Array.prototype.concat === [][[]] + "" || typeof Array.prototype.concat.apply === [][[]] + "") {
            return false;
        }
        var td_Hx = [];
        for (var td_AN in td_ps) {
            if (!td_ps.hasOwnProperty(td_AN)) {
                continue;
            }
            var td_bX = td_Fm.getElementsByTagName(td_AN);
            var td_CI = [];
            for (var td_fK in td_bX) {
                td_CI[td_fK] = td_bX[td_fK];
            }
            td_Hx = Array.prototype.concat.apply(td_Hx, td_CI);
        }
        for (var td_Fr in td_Hx) {
            if (typeof td_Hx.hasOwnProperty !== [][[]] + "" && !td_Hx.hasOwnProperty(td_Fr)) {
                continue;
            }
            var td_Os = td_Hx[td_Fr];
            td_jO(td_Os, td_gV);
        }
        return true;
    }
    function td_L3(td_vC) {
        var td_Wy = null;
        if (typeof td_0b.td_4a !== [][[]] + "" && typeof td_2u !== [][[]] + "") {
            td_Wy = td_0b.td_4a(td_2u).document;
        } else {
            if (typeof td_0b.td_1j !== [][[]] + "") {
                td_Wy = td_0b.td_1j();
            }
        }
        if (td_Wy === null) {
            return false;
        }
        if (!td_hv(td_Wy, td_vC)) {
            if (!td_h3(td_Wy, td_vC)) {
                return false;
            }
        }
        return td_3q.length() > 0;
    }
    function td_OK() {
        if (!td_L3(td_Ff)) {}
    }
    function td_Se() {
        if (td_3q.isPending()) {
            if (td_p() - td_Ry < 500 || td_ae) {
                return;
            }
            td_ae = td_ki();
            td_Ry = td_p();
            if (td_ae) {
                td_ae = false;
                td_d3();
            }
            td_3q.resetPending();
        }
    }
    this.init = function() {
        td_J(window, td_6L, td_d3, td_l6);
        td_J(window, td_4M, td_d3, td_l6);
        td_3q.setAttr(((typeof (td_0b.tdz_b4a277ac769649d38ea069944834ace6) !== "undefined" && typeof (td_0b.tdz_b4a277ac769649d38ea069944834ace6.td_f) !== "undefined") ? (td_0b.tdz_b4a277ac769649d38ea069944834ace6.td_f(8, 3)) : null), td_xj);
        if (!td_L3(td_Ff)) {
            td_3q.setAttr(((typeof (td_0b.tdz_b4a277ac769649d38ea069944834ace6) !== "undefined" && typeof (td_0b.tdz_b4a277ac769649d38ea069944834ace6.td_f) !== "undefined") ? (td_0b.tdz_b4a277ac769649d38ea069944834ace6.td_f(11, 8)) : null), true);
            return;
        }
        td_Ff = false;
        if (td_MX === null) {
            td_Ta = setInterval(td_Se, td_L4);
        } else {
            td_Ta = td_MX(td_Se);
        }
        td_Sq = setInterval(td_OK, (td_L4 - 100));
        td_GE = setTimeout(td_d3, td_n4);
    }
    ;
    function td_mD(td_y6) {
        td_Ta = td_y6;
    }
    function td_d3() {
        if ((td_MX === null && td_Ta !== null) || (td_MX !== null && td_tF === 0)) {
            clearInterval(td_Ta);
            td_Ta = null;
        } else {
            if (td_MX) {
                clearTimeout(td_Ta);
            }
        }
        if (td_Sq) {
            clearInterval(td_Sq);
            td_Sq = null;
        }
        if (td_GE !== null) {
            clearTimeout(td_GE);
            td_GE = null;
        }
        td_X(window, td_6L, td_d3, td_l6);
        td_X(window, td_4M, td_d3, td_l6);
    }
    if (typeof td_3q === [][[]] + "" || td_3q === null) {
        return;
    }
    if (typeof td_4A !== [][[]] + "" && td_4A !== null) {
        var td_IJ = [td_L4, td_mD];
        var td_us = new td_4A(td_IJ);
        td_tF = td_us[0];
        td_MX = td_us[1];
    }
    td_S8 = {
        "\x4f\x4e\x4c\x59_\x56\x45\x52\x53\x49\x4f\x4e_\x46\x49\x45\x4c\x44_\x4c\x45\x4e\x47\x54\x48": td_AR,
        "\x4d\x41\x58\x53\x49\x5a\x45": td_Lf,
        "\x52_\x55\x53\x45\x44_\x52\x45\x46": td_3q.getUsedRef(),
        "\x52_\x46\x49\x4c\x4c_\x52\x45\x46": td_3q.getFillRef(),
        "\x46\x49\x4c\x4c_\x54\x59\x50\x45_\x55\x4e\x53\x45\x54": td_3q.getUnsetFillType()
    };
    if (typeof JSON === [][[]] + "" || JSON === null || typeof JSON.stringify === [][[]] + "" || JSON.stringify === null) {
        return;
    }
    if (typeof td_5D === [][[]] + "" || td_5D === null) {
        return;
    }
    var td_VM = td_5D(td_S8);
    if (typeof td_VM === [][[]] + "" || td_VM === null || td_VM.length !== 1) {
        return;
    }
    var td_ki = td_VM[0];
    if (typeof td_ki === [][[]] + "" || td_ki === null) {
        return;
    }
    setTimeout(this.init, td_dx);
}
td_0b.tdz_8c6974e37a404634bb0e37786e0e7a83 = new td_0b.td_6D("\x38\x63\x36\x39\x37\x34\x65\x33\x37\x61\x34\x30\x34\x36\x33\x34\x62\x62\x30\x65\x33\x37\x37\x38\x36\x65\x30\x65\x37\x61\x38\x33\x31\x65\x30\x39\x35\x34\x30\x34\x35\x62\x34\x35\x35\x38\x31\x35\x35\x64\x30\x30\x30\x39\x34\x35\x34\x37\x35\x33\x31\x33\x34\x37\x31\x36\x31\x30\x35\x39\x30\x36\x34\x37\x35\x39\x34\x32\x35\x35\x35\x34\x30\x30\x34\x32\x32\x36\x35\x66\x31\x33\x35\x37\x35\x65\x35\x64\x32\x31\x34\x34\x35\x38\x34\x31\x35\x31\x32\x61\x34\x33\x35\x32\x31\x33\x35\x35\x31\x36\x35\x32\x30\x62\x31\x35\x35\x35\x30\x34\x35\x66\x31\x36\x31\x36\x34\x62\x34\x65\x30\x61\x31\x65\x35\x32\x31\x35\x34\x32\x35\x38\x31\x31\x31\x31\x35\x34\x30\x65\x31\x65\x31\x33\x35\x65\x30\x34\x31\x31\x35\x39\x31\x31\x30\x65\x31\x31\x30\x63\x35\x61\x30\x64\x31\x32\x35\x35\x30\x65\x31\x32\x31\x38\x35\x66\x31\x36\x31\x36\x35\x30\x35\x33\x30\x61\x31\x65\x35\x61\x30\x64\x30\x64\x34\x33\x35\x66\x30\x39\x30\x35\x34\x36\x35\x36\x30\x38\x35\x38\x35\x36\x34\x30\x35\x61\x34\x33\x35\x39\x34\x34\x30\x65\x30\x39\x31\x36\x35\x65\x34\x35\x35\x31\x30\x39\x34\x34\x30\x38\x34\x33\x30\x61\x34\x36\x30\x61\x31\x31\x35\x32\x34\x35\x30\x37\x34\x35\x35\x38\x31\x31\x30\x62\x34\x62\x35\x65\x34\x64\x35\x65\x34\x32\x34\x62\x34\x32\x35\x31\x34\x33\x35\x64\x35\x66\x30\x32\x30\x39\x31\x36\x35\x61\x35\x32\x35\x65\x30\x39\x34\x34\x30\x63\x35\x64\x31\x31\x34\x33\x30\x61\x34\x34\x34\x63\x34\x34\x30\x63\x35\x65\x30\x32\x31\x31\x31\x35\x34\x32\x35\x37\x30\x35\x34\x35\x35\x62\x35\x38\x34\x33\x35\x63\x31\x37\x30\x65\x34\x33\x30\x35\x35\x64\x35\x34\x35\x39\x30\x63\x31\x35\x35\x30\x31\x30\x35\x66\x35\x34\x31\x37\x30\x39\x31\x31\x34\x37\x30\x35\x34\x36\x35\x66\x31\x36\x30\x32\x35\x62\x33\x65\x35\x62\x30\x65\x31\x65\x30\x34\x35\x61\x36\x36\x35\x66\x30\x39\x30\x32\x35\x66\x30\x64\x31\x36\x35\x33\x35\x63\x30\x65\x35\x31\x35\x30\x34\x34\x35\x38\x30\x65\x34\x33\x35\x66\x34\x30\x35\x65\x35\x33\x30\x32\x35\x32\x30\x63\x30\x61\x30\x33\x35\x65\x30\x35\x30\x32\x34\x37\x35\x37\x31\x31\x35\x32\x35\x38\x34\x33\x35\x35\x35\x66\x34\x31\x35\x33\x35\x62\x35\x63\x30\x31\x30\x65\x35\x66\x30\x39\x31\x32\x30\x31\x30\x31\x35\x34\x35\x38\x35\x30\x35\x34\x35\x33\x30\x32");
var td_0b = td_0b || {};
var td_YA = 255;
var td_vz = null;
var td_JO = null;
var td_yN = [];
var td_Cw = true;
var td_y6 = true;
var td_E5 = (typeof td_3E !== [][[]] + "");
function td_vT() {
    if (td_Cw) {
        td_Cw = false;
        throw new TypeError();
    }
}
function td_4U() {
    try {
        var td_p0 = td_g();
        td_J(window, td_6L, td_vT, td_y6);
        td_J(window, td_4M, td_vT, td_y6);
        td_0a = new td_s8(td_0Z.td_5o);
        td_6y = new td_jc(td_0Z.td_2k);
        td_1U = new td_hL(td_0Z.td_6V);
        try {
            td_Ox();
        } catch (td_x) {}
        var td_VI = "";
        try {
            td_VI += td_qz();
        } catch (td_x) {}
        try {
            td_VI += td_W7();
        } catch (td_x) {}
        var td_L2 = navigator.userAgent ? ((typeof (td_0b.tdz_8c6974e37a404634bb0e37786e0e7a83) !== "undefined" && typeof (td_0b.tdz_8c6974e37a404634bb0e37786e0e7a83.td_f) !== "undefined") ? (td_0b.tdz_8c6974e37a404634bb0e37786e0e7a83.td_f(0, 4)) : null) + td_0b.td_0B(((typeof (td_0b.tdz_8c6974e37a404634bb0e37786e0e7a83) !== "undefined" && typeof (td_0b.tdz_8c6974e37a404634bb0e37786e0e7a83.td_f) !== "undefined") ? (td_0b.tdz_8c6974e37a404634bb0e37786e0e7a83.td_f(4, 3)) : null) + encodeURIComponent(navigator.userAgent), td_3r) : "";
        var td_GO = td_5Q + ((typeof (td_0b.tdz_8c6974e37a404634bb0e37786e0e7a83) !== "undefined" && typeof (td_0b.tdz_8c6974e37a404634bb0e37786e0e7a83.td_f) !== "undefined") ? (td_0b.tdz_8c6974e37a404634bb0e37786e0e7a83.td_f(7, 4)) : null) + td_0b.td_0B(td_VI, td_3r) + td_L2;
        if (td_vz) {
            td_vz.calcTime(td_p0);
        }
        if (td_JO) {
            td_JO.report(td_yN.toString());
        }
        if (typeof td_3o !== [][[]] + "") {
            var td_qx = function() {
                setTimeout(function() {
                    td_3o(td_3r);
                }, 2000);
            };
        }
        td_0Q(td_GO, document, td_qx);
    } catch (td_x) {} finally {
        td_Cw = false;
        td_X(window, td_6L, td_vT, td_y6);
        td_X(window, td_4M, td_vT, td_y6);
    }
}
function td_Tn(td_JG) {
    ((typeof (td_0b.tdz_8c6974e37a404634bb0e37786e0e7a83) !== "undefined" && typeof (td_0b.tdz_8c6974e37a404634bb0e37786e0e7a83.td_f) !== "undefined") ? (td_0b.tdz_8c6974e37a404634bb0e37786e0e7a83.td_f(11, 10)) : null);
    try {
        if (typeof td_JG !== ((typeof (td_0b.tdz_8c6974e37a404634bb0e37786e0e7a83) !== "undefined" && typeof (td_0b.tdz_8c6974e37a404634bb0e37786e0e7a83.td_f) !== "undefined") ? (td_0b.tdz_8c6974e37a404634bb0e37786e0e7a83.td_f(21, 6)) : null) || td_JG <= 0) {
            td_JG = 1;
        } else {
            if (!td_0Z.td_3j) {
                if (td_0Z.td_2k === ((typeof (td_0b.tdz_8c6974e37a404634bb0e37786e0e7a83) !== "undefined" && typeof (td_0b.tdz_8c6974e37a404634bb0e37786e0e7a83.td_f) !== "undefined") ? (td_0b.tdz_8c6974e37a404634bb0e37786e0e7a83.td_f(27, 6)) : null) || td_0Z.td_2k === ((typeof (td_0b.tdz_8c6974e37a404634bb0e37786e0e7a83) !== "undefined" && typeof (td_0b.tdz_8c6974e37a404634bb0e37786e0e7a83.td_f) !== "undefined") ? (td_0b.tdz_8c6974e37a404634bb0e37786e0e7a83.td_f(33, 5)) : null) || td_0Z.td_2k === ((typeof (td_0b.tdz_8c6974e37a404634bb0e37786e0e7a83) !== "undefined" && typeof (td_0b.tdz_8c6974e37a404634bb0e37786e0e7a83.td_f) !== "undefined") ? (td_0b.tdz_8c6974e37a404634bb0e37786e0e7a83.td_f(38, 5)) : null)) {
                    td_JG = Math.floor(td_JG);
                    if (td_JG <= 0) {
                        td_JG = 1;
                    }
                }
            }
        }
    } catch (td_Fj) {}
    return td_JG;
}
function td_P2(td_mP) {
    if (typeof Math !== [][[]] + "" && Math !== null && typeof Math.round !== [][[]] + "" && Math.round !== null) {
        return Math.round(td_mP);
    }
    return null;
}
function td_Vz(td_uL, td_XU) {
    ((typeof (td_0b.tdz_8c6974e37a404634bb0e37786e0e7a83) !== "undefined" && typeof (td_0b.tdz_8c6974e37a404634bb0e37786e0e7a83.td_f) !== "undefined") ? (td_0b.tdz_8c6974e37a404634bb0e37786e0e7a83.td_f(11, 10)) : null);
    var td_l2 = td_uL * td_XU;
    try {
        if (td_XU % 1 === 0) {
            return td_l2;
        }
        td_l2 = td_P2(td_l2);
        if (td_l2 !== null) {
            for (var td_Jj = td_l2 - 2; td_Jj < td_l2 + 2; td_Jj++) {
                if (td_Jj % 10 === 0) {
                    return td_Jj;
                }
            }
        }
    } catch (td_Uk) {}
    return td_l2;
}
function td_vS() {
    try {
        var td_iS = 1;
        if (window && window.devicePixelRatio) {
            td_iS = window.devicePixelRatio;
        }
        td_iS = td_Tn(td_iS);
        var td_W0 = 0;
        var td_Wv = 0;
        var td_tE = 0;
        var td_yl = 0;
        if (screen && screen.width && screen.height) {
            td_W0 = screen.width;
            td_Wv = screen.height;
        } else {
            if (window && window.screen.width && window.screen.height) {
                td_W0 = window.screen.width;
                td_Wv = window.screen.height;
            }
        }
        var td_Te = ((typeof (td_0b.tdz_8c6974e37a404634bb0e37786e0e7a83) !== "undefined" && typeof (td_0b.tdz_8c6974e37a404634bb0e37786e0e7a83.td_f) !== "undefined") ? (td_0b.tdz_8c6974e37a404634bb0e37786e0e7a83.td_f(43, 3)) : null) + td_Vz(td_W0, td_iS) + "x" + td_Vz(td_Wv, td_iS);
        if (window && window.screen && window.screen.availWidth && window.screen.availHeight) {
            td_tE = window.screen.availWidth * td_iS;
            td_yl = window.screen.availHeight * td_iS;
        }
        if (td_tE !== 0 && td_yl !== 0) {
            td_Te += ((typeof (td_0b.tdz_8c6974e37a404634bb0e37786e0e7a83) !== "undefined" && typeof (td_0b.tdz_8c6974e37a404634bb0e37786e0e7a83.td_f) !== "undefined") ? (td_0b.tdz_8c6974e37a404634bb0e37786e0e7a83.td_f(46, 4)) : null) + td_tE + "x" + td_yl;
        }
        if (typeof window !== [][[]] + "" && typeof window.screenX !== [][[]] + "" && typeof window.screenY !== [][[]] + "") {
            var td_LM = window.screenX * td_iS;
            var td_JX = window.screenY * td_iS;
            td_Te += ((typeof (td_0b.tdz_8c6974e37a404634bb0e37786e0e7a83) !== "undefined" && typeof (td_0b.tdz_8c6974e37a404634bb0e37786e0e7a83.td_f) !== "undefined") ? (td_0b.tdz_8c6974e37a404634bb0e37786e0e7a83.td_f(50, 5)) : null) + td_LM + "x" + td_JX;
        }
        var td_aI = td_0b.td_4a("t");
        td_Te += ((typeof (td_0b.tdz_8c6974e37a404634bb0e37786e0e7a83) !== "undefined" && typeof (td_0b.tdz_8c6974e37a404634bb0e37786e0e7a83.td_f) !== "undefined") ? (td_0b.tdz_8c6974e37a404634bb0e37786e0e7a83.td_f(55, 5)) : null) + td_aI.devicePixelRatio + "," + screen.width + "," + screen.height + "," + screen.availWidth + "," + screen.availHeight + "," + td_aI.innerWidth + "," + td_aI.innerHeight + "," + td_aI.outerWidth + "," + td_aI.outerHeight + "," + td_aI.screenX + "," + td_aI.screenY;
        return td_Te;
    } catch (td_lq) {}
    return "";
}
function td_bL() {
    if (!!!navigator.plugins) {
        return "";
    }
    var td_xn = "";
    var td_lI = navigator.plugins;
    if (!!td_lI && td_lI.length) {
        var td_GF = td_lI.length;
        td_xn += ((typeof (td_0b.tdz_8c6974e37a404634bb0e37786e0e7a83) !== "undefined" && typeof (td_0b.tdz_8c6974e37a404634bb0e37786e0e7a83.td_f) !== "undefined") ? (td_0b.tdz_8c6974e37a404634bb0e37786e0e7a83.td_f(60, 4)) : null) + td_GF;
        var td_iW;
        for (var td_Ns = 0; td_Ns < td_GF; td_Ns++) {
            td_iW += td_lI[td_Ns].name + td_lI[td_Ns].description + td_lI[td_Ns].filename + td_lI[td_Ns].length;
        }
        td_xn += ((typeof (td_0b.tdz_8c6974e37a404634bb0e37786e0e7a83) !== "undefined" && typeof (td_0b.tdz_8c6974e37a404634bb0e37786e0e7a83.td_f) !== "undefined") ? (td_0b.tdz_8c6974e37a404634bb0e37786e0e7a83.td_f(64, 4)) : null) + td_0P(td_iW);
    }
    return td_xn;
}
function td_Ox() {
    if (typeof td_4H !== [][[]] + "" && (typeof td_3q === [][[]] + "" || td_3q === null)) {
        td_4H();
    }
    if (typeof td_6u !== [][[]] + "") {
        td_Fx[new td_6u(td_2W,td_5v,td_3J)];
    }
    var td_UC = null;
    if (typeof td_5f !== [][[]] + "") {
        td_UC = new td_5f();
        td_Fx[td_UC];
    }
    if (typeof td_5L !== [][[]] + "") {
        td_Fx[new td_5L(td_5s,td_6e,td_4X,td_UC)];
    }
    if (typeof td_4y !== [][[]] + "") {
        td_Fx[new td_4y(td_1M,td_0e,td_2s,td_UC)];
    }
    if (typeof td_2B !== [][[]] + "") {
        td_Fx[new td_2B(td_2N,td_3p,td_2p,td_UC)];
    }
    if (typeof td_5M !== [][[]] + "" && typeof Object.create !== [][[]] + "" && typeof String.prototype.toUpperCase !== [][[]] + "") {
        td_Fx[new td_5M(td_4V,td_1S,td_5t)];
    }
    if (typeof td_5I !== [][[]] + "") {
        td_Fx[new td_5I(td_1O,td_1o,td_2E)];
    }
}
function td_qz() {
    var td_mt = td_g();
    var td_W9 = new Date();
    td_W9.setDate(1);
    td_W9.setMonth(5);
    var td_CQ = -td_W9.getTimezoneOffset();
    td_W9.setMonth(11);
    var td_XV = -td_W9.getTimezoneOffset();
    var td_kp = Math.min(td_CQ, td_XV);
    var td_Dz = Math.max(td_CQ, td_XV) - td_kp;
    var td_cE = td_Vc ? td_Vc.length : 0;
    var td_uY = [];
    for (var td_v5 = 0; td_v5 < td_cE; td_v5++) {
        td_uY[td_v5] = td_Vc[td_v5].type;
    }
    var td_kR = td_cE > 0 ? ((typeof (td_0b.tdz_8c6974e37a404634bb0e37786e0e7a83) !== "undefined" && typeof (td_0b.tdz_8c6974e37a404634bb0e37786e0e7a83.td_f) !== "undefined") ? (td_0b.tdz_8c6974e37a404634bb0e37786e0e7a83.td_f(68, 4)) : null) + td_0P(td_uY.join()) + ((typeof (td_0b.tdz_8c6974e37a404634bb0e37786e0e7a83) !== "undefined" && typeof (td_0b.tdz_8c6974e37a404634bb0e37786e0e7a83.td_f) !== "undefined") ? (td_0b.tdz_8c6974e37a404634bb0e37786e0e7a83.td_f(72, 4)) : null) + td_cE : "";
    var td_MX = "";
    td_MX += ((typeof (td_0b.tdz_8c6974e37a404634bb0e37786e0e7a83) !== "undefined" && typeof (td_0b.tdz_8c6974e37a404634bb0e37786e0e7a83.td_f) !== "undefined") ? (td_0b.tdz_8c6974e37a404634bb0e37786e0e7a83.td_f(76, 3)) : null) + td_kp + ((typeof (td_0b.tdz_8c6974e37a404634bb0e37786e0e7a83) !== "undefined" && typeof (td_0b.tdz_8c6974e37a404634bb0e37786e0e7a83.td_f) !== "undefined") ? (td_0b.tdz_8c6974e37a404634bb0e37786e0e7a83.td_f(79, 3)) : null) + td_Dz + td_vS() + td_kR;
    td_MX += ((typeof (td_0b.tdz_8c6974e37a404634bb0e37786e0e7a83) !== "undefined" && typeof (td_0b.tdz_8c6974e37a404634bb0e37786e0e7a83.td_f) !== "undefined") ? (td_0b.tdz_8c6974e37a404634bb0e37786e0e7a83.td_f(82, 5)) : null) + screen.colorDepth;
    td_MX += ((typeof (td_0b.tdz_8c6974e37a404634bb0e37786e0e7a83) !== "undefined" && typeof (td_0b.tdz_8c6974e37a404634bb0e37786e0e7a83.td_f) !== "undefined") ? (td_0b.tdz_8c6974e37a404634bb0e37786e0e7a83.td_f(87, 4)) : null) + encodeURIComponent(location.href.substring(0, td_YA));
    td_MX += td_bL();
    td_MX += ((typeof (td_0b.tdz_8c6974e37a404634bb0e37786e0e7a83) !== "undefined" && typeof (td_0b.tdz_8c6974e37a404634bb0e37786e0e7a83.td_f) !== "undefined") ? (td_0b.tdz_8c6974e37a404634bb0e37786e0e7a83.td_f(91, 4)) : null) + td_0P(td_0E + td_3r);
    if (td_0Z.td_1J !== ((typeof (td_0b.tdz_8c6974e37a404634bb0e37786e0e7a83) !== "undefined" && typeof (td_0b.tdz_8c6974e37a404634bb0e37786e0e7a83.td_f) !== "undefined") ? (td_0b.tdz_8c6974e37a404634bb0e37786e0e7a83.td_f(95, 7)) : null)) {
        td_MX += ((typeof (td_0b.tdz_8c6974e37a404634bb0e37786e0e7a83) !== "undefined" && typeof (td_0b.tdz_8c6974e37a404634bb0e37786e0e7a83.td_f) !== "undefined") ? (td_0b.tdz_8c6974e37a404634bb0e37786e0e7a83.td_f(102, 5)) : null) + encodeURIComponent(td_0Z.td_1J);
    }
    if (td_0Z.td_2k !== ((typeof (td_0b.tdz_8c6974e37a404634bb0e37786e0e7a83) !== "undefined" && typeof (td_0b.tdz_8c6974e37a404634bb0e37786e0e7a83.td_f) !== "undefined") ? (td_0b.tdz_8c6974e37a404634bb0e37786e0e7a83.td_f(95, 7)) : null)) {
        if (td_0Z.td_6V !== ((typeof (td_0b.tdz_8c6974e37a404634bb0e37786e0e7a83) !== "undefined" && typeof (td_0b.tdz_8c6974e37a404634bb0e37786e0e7a83.td_f) !== "undefined") ? (td_0b.tdz_8c6974e37a404634bb0e37786e0e7a83.td_f(95, 7)) : null)) {
            td_MX += ((typeof (td_0b.tdz_8c6974e37a404634bb0e37786e0e7a83) !== "undefined" && typeof (td_0b.tdz_8c6974e37a404634bb0e37786e0e7a83.td_f) !== "undefined") ? (td_0b.tdz_8c6974e37a404634bb0e37786e0e7a83.td_f(107, 5)) : null) + encodeURIComponent(td_0Z.td_2k + " " + td_0Z.td_6V);
        } else {
            td_MX += ((typeof (td_0b.tdz_8c6974e37a404634bb0e37786e0e7a83) !== "undefined" && typeof (td_0b.tdz_8c6974e37a404634bb0e37786e0e7a83.td_f) !== "undefined") ? (td_0b.tdz_8c6974e37a404634bb0e37786e0e7a83.td_f(107, 5)) : null) + encodeURIComponent(td_0Z.td_2k);
        }
    }
    if (td_0Z.td_5c !== ((typeof (td_0b.tdz_8c6974e37a404634bb0e37786e0e7a83) !== "undefined" && typeof (td_0b.tdz_8c6974e37a404634bb0e37786e0e7a83.td_f) !== "undefined") ? (td_0b.tdz_8c6974e37a404634bb0e37786e0e7a83.td_f(95, 7)) : null)) {
        td_MX += ((typeof (td_0b.tdz_8c6974e37a404634bb0e37786e0e7a83) !== "undefined" && typeof (td_0b.tdz_8c6974e37a404634bb0e37786e0e7a83.td_f) !== "undefined") ? (td_0b.tdz_8c6974e37a404634bb0e37786e0e7a83.td_f(112, 6)) : null) + encodeURIComponent(td_0Z.td_5c);
    }
    if (td_0Z.td_1t !== ((typeof (td_0b.tdz_8c6974e37a404634bb0e37786e0e7a83) !== "undefined" && typeof (td_0b.tdz_8c6974e37a404634bb0e37786e0e7a83.td_f) !== "undefined") ? (td_0b.tdz_8c6974e37a404634bb0e37786e0e7a83.td_f(95, 7)) : null)) {
        td_MX += ((typeof (td_0b.tdz_8c6974e37a404634bb0e37786e0e7a83) !== "undefined" && typeof (td_0b.tdz_8c6974e37a404634bb0e37786e0e7a83.td_f) !== "undefined") ? (td_0b.tdz_8c6974e37a404634bb0e37786e0e7a83.td_f(118, 6)) : null) + encodeURIComponent(td_0Z.td_1t);
    }
    if (td_0Z.td_3j === true) {
        td_MX += ((typeof (td_0b.tdz_8c6974e37a404634bb0e37786e0e7a83) !== "undefined" && typeof (td_0b.tdz_8c6974e37a404634bb0e37786e0e7a83.td_f) !== "undefined") ? (td_0b.tdz_8c6974e37a404634bb0e37786e0e7a83.td_f(124, 10)) : null);
    }
    if (typeof navigator !== [][[]] + "") {
        if (typeof navigator.hardwareConcurrency === ((typeof (td_0b.tdz_8c6974e37a404634bb0e37786e0e7a83) !== "undefined" && typeof (td_0b.tdz_8c6974e37a404634bb0e37786e0e7a83.td_f) !== "undefined") ? (td_0b.tdz_8c6974e37a404634bb0e37786e0e7a83.td_f(21, 6)) : null)) {
            var td_nu = navigator.hardwareConcurrency;
            if (td_6f !== null && !td_6f(td_nu)) {
                td_MX += ((typeof (td_0b.tdz_8c6974e37a404634bb0e37786e0e7a83) !== "undefined" && typeof (td_0b.tdz_8c6974e37a404634bb0e37786e0e7a83.td_f) !== "undefined") ? (td_0b.tdz_8c6974e37a404634bb0e37786e0e7a83.td_f(134, 5)) : null) + td_nu;
            }
        }
        if (typeof navigator.deviceMemory === ((typeof (td_0b.tdz_8c6974e37a404634bb0e37786e0e7a83) !== "undefined" && typeof (td_0b.tdz_8c6974e37a404634bb0e37786e0e7a83.td_f) !== "undefined") ? (td_0b.tdz_8c6974e37a404634bb0e37786e0e7a83.td_f(21, 6)) : null)) {
            td_MX += ((typeof (td_0b.tdz_8c6974e37a404634bb0e37786e0e7a83) !== "undefined" && typeof (td_0b.tdz_8c6974e37a404634bb0e37786e0e7a83.td_f) !== "undefined") ? (td_0b.tdz_8c6974e37a404634bb0e37786e0e7a83.td_f(139, 5)) : null) + navigator.deviceMemory;
        }
        if (typeof navigator.maxTouchPoints === ((typeof (td_0b.tdz_8c6974e37a404634bb0e37786e0e7a83) !== "undefined" && typeof (td_0b.tdz_8c6974e37a404634bb0e37786e0e7a83.td_f) !== "undefined") ? (td_0b.tdz_8c6974e37a404634bb0e37786e0e7a83.td_f(21, 6)) : null)) {
            td_MX += ((typeof (td_0b.tdz_8c6974e37a404634bb0e37786e0e7a83) !== "undefined" && typeof (td_0b.tdz_8c6974e37a404634bb0e37786e0e7a83.td_f) !== "undefined") ? (td_0b.tdz_8c6974e37a404634bb0e37786e0e7a83.td_f(144, 6)) : null) + navigator.maxTouchPoints;
        }
    }
    if (typeof Intl !== [][[]] + "" && typeof Intl.DateTimeFormat !== [][[]] + "") {
        var td_Bl = Intl.DateTimeFormat();
        if (td_Bl !== null && typeof td_Bl !== [][[]] + "" && typeof td_Bl.resolvedOptions !== [][[]] + "") {
            var td_ia = td_Bl.resolvedOptions();
            if (td_ia !== null && typeof td_ia.timeZone === ((typeof (td_0b.tdz_8c6974e37a404634bb0e37786e0e7a83) !== "undefined" && typeof (td_0b.tdz_8c6974e37a404634bb0e37786e0e7a83.td_f) !== "undefined") ? (td_0b.tdz_8c6974e37a404634bb0e37786e0e7a83.td_f(150, 6)) : null) && td_ia.timeZone.length > 0) {
                td_MX += ((typeof (td_0b.tdz_8c6974e37a404634bb0e37786e0e7a83) !== "undefined" && typeof (td_0b.tdz_8c6974e37a404634bb0e37786e0e7a83.td_f) !== "undefined") ? (td_0b.tdz_8c6974e37a404634bb0e37786e0e7a83.td_f(156, 5)) : null) + encodeURIComponent(td_ia.timeZone);
            }
        }
    }
    var td_TJ = td_3d();
    if (td_TJ) {
        td_MX += ((typeof (td_0b.tdz_8c6974e37a404634bb0e37786e0e7a83) !== "undefined" && typeof (td_0b.tdz_8c6974e37a404634bb0e37786e0e7a83.td_f) !== "undefined") ? (td_0b.tdz_8c6974e37a404634bb0e37786e0e7a83.td_f(161, 7)) : null) + encodeURIComponent(td_TJ);
    }
    if (typeof td_5l === [][[]] + "" || !td_5l()) {
        td_6B(td_4F, document);
    }
    if (td_E5) {
        td_yN.push(((typeof (td_0b.tdz_8c6974e37a404634bb0e37786e0e7a83) !== "undefined" && typeof (td_0b.tdz_8c6974e37a404634bb0e37786e0e7a83.td_f) !== "undefined") ? (td_0b.tdz_8c6974e37a404634bb0e37786e0e7a83.td_f(168, 6)) : null) + td_0b.toFixed((td_g() - td_mt), 2));
    }
    return td_MX;
}
var td_Fx = [];
var td_vu;
function td_W7() {
    var td_Gv = "";
    var td_w1 = null;
    if (typeof td_6d !== [][[]] + "") {
        td_w1 = td_g();
        var td_DW = td_6d();
        if (td_DW) {
            td_Gv += ((typeof (td_0b.tdz_8c6974e37a404634bb0e37786e0e7a83) !== "undefined" && typeof (td_0b.tdz_8c6974e37a404634bb0e37786e0e7a83.td_f) !== "undefined") ? (td_0b.tdz_8c6974e37a404634bb0e37786e0e7a83.td_f(174, 4)) : null) + td_DW;
            if (td_E5) {
                td_yN.push(((typeof (td_0b.tdz_8c6974e37a404634bb0e37786e0e7a83) !== "undefined" && typeof (td_0b.tdz_8c6974e37a404634bb0e37786e0e7a83.td_f) !== "undefined") ? (td_0b.tdz_8c6974e37a404634bb0e37786e0e7a83.td_f(178, 3)) : null) + td_0b.toFixed((td_g() - td_w1), 2));
            }
        }
    }
    if (typeof td_4K !== [][[]] + "") {
        td_w1 = td_g();
        var td_YS = td_4K();
        if (td_YS !== null) {
            td_Gv += ((typeof (td_0b.tdz_8c6974e37a404634bb0e37786e0e7a83) !== "undefined" && typeof (td_0b.tdz_8c6974e37a404634bb0e37786e0e7a83.td_f) !== "undefined") ? (td_0b.tdz_8c6974e37a404634bb0e37786e0e7a83.td_f(181, 3)) : null) + encodeURIComponent(td_YS);
            if (td_E5) {
                td_yN.push(((typeof (td_0b.tdz_8c6974e37a404634bb0e37786e0e7a83) !== "undefined" && typeof (td_0b.tdz_8c6974e37a404634bb0e37786e0e7a83.td_f) !== "undefined") ? (td_0b.tdz_8c6974e37a404634bb0e37786e0e7a83.td_f(184, 2)) : null) + td_0b.toFixed((td_g() - td_w1), 2));
            }
        }
    }
    if (typeof td_2g !== [][[]] + "") {
        td_w1 = td_g();
        var td_dC = td_2g();
        if (td_dC) {
            td_Gv += ((typeof (td_0b.tdz_8c6974e37a404634bb0e37786e0e7a83) !== "undefined" && typeof (td_0b.tdz_8c6974e37a404634bb0e37786e0e7a83.td_f) !== "undefined") ? (td_0b.tdz_8c6974e37a404634bb0e37786e0e7a83.td_f(186, 6)) : null) + encodeURIComponent(td_dC) + ((typeof (td_0b.tdz_8c6974e37a404634bb0e37786e0e7a83) !== "undefined" && typeof (td_0b.tdz_8c6974e37a404634bb0e37786e0e7a83.td_f) !== "undefined") ? (td_0b.tdz_8c6974e37a404634bb0e37786e0e7a83.td_f(192, 6)) : null) + td_2D(td_dC);
            if (td_E5) {
                td_yN.push(((typeof (td_0b.tdz_8c6974e37a404634bb0e37786e0e7a83) !== "undefined" && typeof (td_0b.tdz_8c6974e37a404634bb0e37786e0e7a83.td_f) !== "undefined") ? (td_0b.tdz_8c6974e37a404634bb0e37786e0e7a83.td_f(198, 3)) : null) + td_0b.toFixed((td_g() - td_w1), 2));
            }
        }
    }
    if (typeof td_1K !== [][[]] + "") {
        td_w1 = td_g();
        var td_sX = td_1K();
        if (td_sX) {
            td_Gv += td_sX;
            if (td_E5) {
                td_yN.push(((typeof (td_0b.tdz_8c6974e37a404634bb0e37786e0e7a83) !== "undefined" && typeof (td_0b.tdz_8c6974e37a404634bb0e37786e0e7a83.td_f) !== "undefined") ? (td_0b.tdz_8c6974e37a404634bb0e37786e0e7a83.td_f(201, 4)) : null) + td_0b.toFixed((td_g() - td_w1), 2));
            }
        }
    }
    if (typeof td_2b !== [][[]] + "") {
        td_w1 = td_g();
        td_2b();
        if (td_E5) {
            td_yN.push(((typeof (td_0b.tdz_8c6974e37a404634bb0e37786e0e7a83) !== "undefined" && typeof (td_0b.tdz_8c6974e37a404634bb0e37786e0e7a83.td_f) !== "undefined") ? (td_0b.tdz_8c6974e37a404634bb0e37786e0e7a83.td_f(205, 4)) : null) + td_0b.toFixed((td_g() - td_w1), 2));
        }
    }
    td_w1 = td_g();
    if (typeof td_0f !== [][[]] + "") {
        td_0f();
    }
    if (typeof td_0i !== [][[]] + "") {
        td_0i();
        if (td_E5) {
            td_yN.push(((typeof (td_0b.tdz_8c6974e37a404634bb0e37786e0e7a83) !== "undefined" && typeof (td_0b.tdz_8c6974e37a404634bb0e37786e0e7a83.td_f) !== "undefined") ? (td_0b.tdz_8c6974e37a404634bb0e37786e0e7a83.td_f(209, 3)) : null) + td_0b.toFixed((td_g() - td_w1), 2));
        }
    }
    td_w1 = td_g();
    if (typeof td_1l !== [][[]] + "") {
        td_1l();
    }
    if (typeof td_5O !== [][[]] + "") {
        td_5O();
        if (td_E5) {
            td_yN.push(((typeof (td_0b.tdz_8c6974e37a404634bb0e37786e0e7a83) !== "undefined" && typeof (td_0b.tdz_8c6974e37a404634bb0e37786e0e7a83.td_f) !== "undefined") ? (td_0b.tdz_8c6974e37a404634bb0e37786e0e7a83.td_f(212, 4)) : null) + td_0b.toFixed((td_g() - td_w1), 2));
        }
    }
    if (typeof td_4u !== [][[]] + "") {
        td_w1 = td_g();
        td_4u();
        if (td_E5) {
            td_yN.push(((typeof (td_0b.tdz_8c6974e37a404634bb0e37786e0e7a83) !== "undefined" && typeof (td_0b.tdz_8c6974e37a404634bb0e37786e0e7a83.td_f) !== "undefined") ? (td_0b.tdz_8c6974e37a404634bb0e37786e0e7a83.td_f(216, 3)) : null) + td_0b.toFixed((td_g() - td_w1), 2));
        }
    }
    if (td_E5) {
        td_JO = new td_3E();
    }
    if (typeof td_2Z !== [][[]] + "") {
        if (td_JO) {
            td_2Z.addCollectorTimer(td_JO);
        }
        if (typeof td_4R !== [][[]] + "") {
            td_2Z.addFeature(new td_4R());
        }
        if (typeof td_5m !== [][[]] + "") {
            td_2Z.addFeature(new td_5m());
        }
        if (typeof td_1b !== [][[]] + "") {
            td_2Z.addFeature(new td_1b());
        }
        if (typeof td_6N !== [][[]] + "") {
            td_2Z.addFeature(new td_6N());
        }
        if (typeof td_3m !== [][[]] + "") {
            td_2Z.addFeature(new td_3m());
        }
        if (typeof td_2h !== [][[]] + "") {
            td_vz = new td_2h();
            td_2Z.addFeature(td_vz);
        }
        if (typeof td_0h !== [][[]] + "") {
            td_2Z.addFeature(new td_0h());
        }
        if (typeof td_6S !== [][[]] + "") {
            td_2Z.addFeature(new td_6S());
        }
        if (typeof td_4I !== [][[]] + "") {
            td_2Z.addFeature(new td_4I());
        }
        if (typeof td_4C !== [][[]] + "") {
            td_2Z.addFeature(new td_4C());
        }
    }
    if (typeof td_0A !== [][[]] + "") {
        if (td_JO) {
            td_0A.addCollectorTimer(td_JO);
        }
        if (typeof td_1Q !== [][[]] + "") {
            td_0A.addFeature(new td_1Q());
        }
        if (typeof td_0z !== [][[]] + "") {
            td_0A.addFeature(new td_0z());
        }
        if (typeof td_3K !== [][[]] + "") {
            td_0A.addFeature(new td_3K());
        }
        if (typeof td_1D !== [][[]] + "") {
            td_0A.addFeature(new td_1D());
        }
    }
    if (typeof td_2r !== [][[]] + "") {
        td_2r();
    }
    if (typeof td_0O !== [][[]] + "") {
        td_Fx[new td_0O(td_6q,td_6g,td_0q)];
    }
    if (typeof td_3e !== [][[]] + "") {
        td_w1 = td_g();
        td_3e();
        if (td_E5) {
            td_yN.push(((typeof (td_0b.tdz_8c6974e37a404634bb0e37786e0e7a83) !== "undefined" && typeof (td_0b.tdz_8c6974e37a404634bb0e37786e0e7a83.td_f) !== "undefined") ? (td_0b.tdz_8c6974e37a404634bb0e37786e0e7a83.td_f(219, 4)) : null) + td_0b.toFixed((td_g() - td_w1), 2));
        }
    }
    if (typeof td_0R !== [][[]] + "") {
        td_Fx[new td_0R()];
    }
    if (typeof td_5d !== [][[]] + "") {
        td_w1 = td_g();
        var td_CA = td_5d();
        if (td_CA !== null) {
            td_Gv += td_CA;
            if (td_E5) {
                td_yN.push(((typeof (td_0b.tdz_8c6974e37a404634bb0e37786e0e7a83) !== "undefined" && typeof (td_0b.tdz_8c6974e37a404634bb0e37786e0e7a83.td_f) !== "undefined") ? (td_0b.tdz_8c6974e37a404634bb0e37786e0e7a83.td_f(223, 8)) : null) + td_0b.toFixed((td_g() - td_w1), 2));
            }
        }
    }
    if (typeof td_6G !== [][[]] + "" && td_6G !== null && td_6G.length > 0 && typeof td_3I !== [][[]] + "") {
        td_vu = new td_3I(td_0Z.td_5o,td_0Z.td_2k,td_6G);
        if (td_vu.isValid()) {
            td_w1 = td_g();
            td_vu.scan();
            if (td_E5) {
                td_yN.push(((typeof (td_0b.tdz_8c6974e37a404634bb0e37786e0e7a83) !== "undefined" && typeof (td_0b.tdz_8c6974e37a404634bb0e37786e0e7a83.td_f) !== "undefined") ? (td_0b.tdz_8c6974e37a404634bb0e37786e0e7a83.td_f(231, 3)) : null) + td_0b.toFixed((td_g() - td_w1), 2));
            }
        }
    }
    if (typeof td_3H !== [][[]] + "") {
        td_3H();
    }
    if (typeof td_1X !== [][[]] + "") {
        td_w1 = td_g();
        td_1X();
        if (td_E5) {
            td_yN.push(((typeof (td_0b.tdz_8c6974e37a404634bb0e37786e0e7a83) !== "undefined" && typeof (td_0b.tdz_8c6974e37a404634bb0e37786e0e7a83.td_f) !== "undefined") ? (td_0b.tdz_8c6974e37a404634bb0e37786e0e7a83.td_f(234, 3)) : null) + td_0b.toFixed((td_g() - td_w1), 2));
        }
    }
    if (typeof td_4E !== [][[]] + "") {
        td_w1 = td_g();
        td_4E();
        if (td_E5) {
            td_yN.push(((typeof (td_0b.tdz_8c6974e37a404634bb0e37786e0e7a83) !== "undefined" && typeof (td_0b.tdz_8c6974e37a404634bb0e37786e0e7a83.td_f) !== "undefined") ? (td_0b.tdz_8c6974e37a404634bb0e37786e0e7a83.td_f(237, 2)) : null) + td_0b.toFixed((td_g() - td_w1), 2));
        }
    }
    if (typeof td_3c !== [][[]] + "") {
        td_w1 = td_g();
        var td_aj = td_3c();
        if (td_aj) {
            td_Gv += ((typeof (td_0b.tdz_8c6974e37a404634bb0e37786e0e7a83) !== "undefined" && typeof (td_0b.tdz_8c6974e37a404634bb0e37786e0e7a83.td_f) !== "undefined") ? (td_0b.tdz_8c6974e37a404634bb0e37786e0e7a83.td_f(239, 5)) : null) + td_aj;
            if (td_E5) {
                td_yN.push(((typeof (td_0b.tdz_8c6974e37a404634bb0e37786e0e7a83) !== "undefined" && typeof (td_0b.tdz_8c6974e37a404634bb0e37786e0e7a83.td_f) !== "undefined") ? (td_0b.tdz_8c6974e37a404634bb0e37786e0e7a83.td_f(244, 4)) : null) + td_0b.toFixed((td_g() - td_w1), 2));
            }
        }
    }
    if (typeof td_1A !== [][[]] + "") {
        td_Gv += td_1A();
    }
    return td_Gv;
}
var td_0b = td_0b || {};
function td_2b() {
    td_0Q(td_1r, document);
}
td_0b.tdz_24b15a0c54b94fe682fac5706ea248a7 = new td_0b.td_6D("\x32\x34\x62\x31\x35\x61\x30\x63\x35\x34\x62\x39\x34\x66\x65\x36\x38\x32\x66\x61\x63\x35\x37\x30\x36\x65\x61\x32\x34\x38\x61\x37\x35\x62\x35\x32\x31\x30\x35\x30\x35\x38\x30\x34\x35\x39\x30\x37\x34\x31\x35\x30\x31\x38\x36\x36\x35\x64\x30\x30\x31\x37\x35\x62\x34\x63\x35\x62\x31\x32\x30\x64\x30\x36\x35\x30\x35\x61\x34\x30\x34\x32\x31\x63\x31\x36\x35\x62\x35\x30\x34\x63\x30\x39\x30\x37\x34\x32\x34\x63\x30\x61\x35\x34\x35\x63\x30\x36\x35\x38\x31\x37\x35\x38\x35\x35\x31\x30\x35\x65\x35\x64\x30\x38\x31\x32\x35\x66\x35\x63\x34\x36\x30\x65\x30\x63\x30\x32\x34\x37\x35\x30\x35\x39\x35\x38\x30\x64\x30\x34\x35\x62\x35\x33\x35\x30\x31\x35\x35\x31\x34\x30\x35\x35\x30\x66\x35\x34\x35\x37\x30\x65\x34\x32\x30\x37\x35\x30\x34\x36\x30\x36\x35\x30\x34\x37\x31\x36\x30\x39\x35\x37\x34\x31\x30\x38\x30\x38\x30\x65\x30\x64\x35\x30\x31\x37\x31\x31\x35\x66\x30\x38\x31\x31\x35\x64\x34\x36\x34\x63\x30\x30\x35\x39\x34\x36\x30\x66\x34\x32\x34\x62\x31\x38\x30\x38\x35\x65\x30\x37\x35\x30\x34\x63\x35\x38\x31\x34\x30\x64\x35\x66\x35\x63\x30\x66\x31\x38\x31\x33\x30\x66\x30\x63\x31\x33\x35\x61\x34\x35\x34\x34\x35\x37\x30\x62\x31\x35\x30\x39\x31\x34\x34\x65\x30\x38\x34\x34\x35\x62\x35\x36\x30\x62\x35\x64\x35\x63\x31\x35\x34\x39\x35\x39\x35\x64\x35\x64\x30\x36\x35\x64\x35\x31\x30\x38\x34\x35\x31\x37\x35\x31\x35\x66\x31\x36\x30\x65\x31\x31\x34\x31\x35\x36\x35\x65\x34\x32\x30\x34\x31\x33\x35\x62\x35\x35\x31\x35\x30\x35\x35\x65\x34\x31\x35\x35\x30\x30\x35\x64\x35\x30\x30\x35\x35\x31\x31\x31\x35\x63\x35\x35\x34\x66\x35\x31\x35\x64\x30\x32\x30\x31\x35\x33\x35\x36\x34\x31\x30\x37\x30\x66\x30\x37\x35\x37\x35\x38\x34\x38\x31\x62\x35\x34\x31\x32\x34\x30\x35\x37");
var td_0b = td_0b || {};
if (typeof td_0b.td_0H === [][[]] + "") {
    td_0b.td_0H = [];
}
var td_1H = "";
var td_5C = null;
function td_0j() {
    try {
        var td_QO;
        if (typeof td_0b.td_4a !== [][[]] + "" && typeof td_2u !== [][[]] + "") {
            td_QO = td_0b.td_4a(td_2u).document;
        } else {
            td_QO = td_0b.td_1j();
        }
        var td_e2 = td_QO.createElement(((typeof (td_0b.tdz_24b15a0c54b94fe682fac5706ea248a7) !== "undefined" && typeof (td_0b.tdz_24b15a0c54b94fe682fac5706ea248a7.td_f) !== "undefined") ? (td_0b.tdz_24b15a0c54b94fe682fac5706ea248a7.td_f(0, 6)) : null));
        td_e2.setAttribute(((typeof (td_0b.tdz_24b15a0c54b94fe682fac5706ea248a7) !== "undefined" && typeof (td_0b.tdz_24b15a0c54b94fe682fac5706ea248a7.td_f) !== "undefined") ? (td_0b.tdz_24b15a0c54b94fe682fac5706ea248a7.td_f(6, 2)) : null), ((typeof (td_0b.tdz_24b15a0c54b94fe682fac5706ea248a7) !== "undefined" && typeof (td_0b.tdz_24b15a0c54b94fe682fac5706ea248a7.td_f) !== "undefined") ? (td_0b.tdz_24b15a0c54b94fe682fac5706ea248a7.td_f(8, 8)) : null));
        td_e2.setAttribute(((typeof (td_0b.tdz_24b15a0c54b94fe682fac5706ea248a7) !== "undefined" && typeof (td_0b.tdz_24b15a0c54b94fe682fac5706ea248a7.td_f) !== "undefined") ? (td_0b.tdz_24b15a0c54b94fe682fac5706ea248a7.td_f(16, 5)) : null), ((typeof (td_0b.tdz_24b15a0c54b94fe682fac5706ea248a7) !== "undefined" && typeof (td_0b.tdz_24b15a0c54b94fe682fac5706ea248a7.td_f) !== "undefined") ? (td_0b.tdz_24b15a0c54b94fe682fac5706ea248a7.td_f(21, 5)) : null));
        td_e2.setAttribute(Number(324254).toString(24), "");
        td_e2.setAttribute(((typeof (td_0b.tdz_24b15a0c54b94fe682fac5706ea248a7) !== "undefined" && typeof (td_0b.tdz_24b15a0c54b94fe682fac5706ea248a7.td_f) !== "undefined") ? (td_0b.tdz_24b15a0c54b94fe682fac5706ea248a7.td_f(26, 5)) : null), ((typeof (td_0b.tdz_24b15a0c54b94fe682fac5706ea248a7) !== "undefined" && typeof (td_0b.tdz_24b15a0c54b94fe682fac5706ea248a7.td_f) !== "undefined") ? (td_0b.tdz_24b15a0c54b94fe682fac5706ea248a7.td_f(31, 3)) : null));
        td_e2.setAttribute(((typeof (td_0b.tdz_24b15a0c54b94fe682fac5706ea248a7) !== "undefined" && typeof (td_0b.tdz_24b15a0c54b94fe682fac5706ea248a7.td_f) !== "undefined") ? (td_0b.tdz_24b15a0c54b94fe682fac5706ea248a7.td_f(34, 6)) : null), ((typeof (td_0b.tdz_24b15a0c54b94fe682fac5706ea248a7) !== "undefined" && typeof (td_0b.tdz_24b15a0c54b94fe682fac5706ea248a7.td_f) !== "undefined") ? (td_0b.tdz_24b15a0c54b94fe682fac5706ea248a7.td_f(31, 3)) : null));
        td_e2.setAttribute(((typeof (td_0b.tdz_24b15a0c54b94fe682fac5706ea248a7) !== "undefined" && typeof (td_0b.tdz_24b15a0c54b94fe682fac5706ea248a7.td_f) !== "undefined") ? (td_0b.tdz_24b15a0c54b94fe682fac5706ea248a7.td_f(40, 11)) : null), "0");
        td_e2.setAttribute(((typeof (td_0b.tdz_24b15a0c54b94fe682fac5706ea248a7) !== "undefined" && typeof (td_0b.tdz_24b15a0c54b94fe682fac5706ea248a7.td_f) !== "undefined") ? (td_0b.tdz_24b15a0c54b94fe682fac5706ea248a7.td_f(51, 12)) : null), "0");
        td_e2.setAttribute(((typeof (td_0b.tdz_24b15a0c54b94fe682fac5706ea248a7) !== "undefined" && typeof (td_0b.tdz_24b15a0c54b94fe682fac5706ea248a7.td_f) !== "undefined") ? (td_0b.tdz_24b15a0c54b94fe682fac5706ea248a7.td_f(63, 11)) : null), "0");
        td_e2.style = ((typeof (td_0b.tdz_24b15a0c54b94fe682fac5706ea248a7) !== "undefined" && typeof (td_0b.tdz_24b15a0c54b94fe682fac5706ea248a7.td_f) !== "undefined") ? (td_0b.tdz_24b15a0c54b94fe682fac5706ea248a7.td_f(74, 79)) : null);
        td_e2.setAttribute(((typeof (td_0b.tdz_24b15a0c54b94fe682fac5706ea248a7) !== "undefined" && typeof (td_0b.tdz_24b15a0c54b94fe682fac5706ea248a7.td_f) !== "undefined") ? (td_0b.tdz_24b15a0c54b94fe682fac5706ea248a7.td_f(153, 13)) : null), Number(890830).toString(31));
        td_e2.setAttribute(((typeof (td_0b.tdz_24b15a0c54b94fe682fac5706ea248a7) !== "undefined" && typeof (td_0b.tdz_24b15a0c54b94fe682fac5706ea248a7.td_f) !== "undefined") ? (td_0b.tdz_24b15a0c54b94fe682fac5706ea248a7.td_f(166, 11)) : null), Number(890830).toString(31));
        if (td_5C !== null) {
            td_e2.setAttribute(((typeof (td_0b.tdz_24b15a0c54b94fe682fac5706ea248a7) !== "undefined" && typeof (td_0b.tdz_24b15a0c54b94fe682fac5706ea248a7.td_f) !== "undefined") ? (td_0b.tdz_24b15a0c54b94fe682fac5706ea248a7.td_f(177, 7)) : null), td_5C);
        }
        if (typeof td_e2.tabIndex !== [][[]] + "") {
            td_e2.tabIndex = ((typeof (td_0b.tdz_24b15a0c54b94fe682fac5706ea248a7) !== "undefined" && typeof (td_0b.tdz_24b15a0c54b94fe682fac5706ea248a7.td_f) !== "undefined") ? (td_0b.tdz_24b15a0c54b94fe682fac5706ea248a7.td_f(184, 2)) : null);
        }
        td_e2.onload = null;
        td_e2.setAttribute(((typeof (td_0b.tdz_24b15a0c54b94fe682fac5706ea248a7) !== "undefined" && typeof (td_0b.tdz_24b15a0c54b94fe682fac5706ea248a7.td_f) !== "undefined") ? (td_0b.tdz_24b15a0c54b94fe682fac5706ea248a7.td_f(186, 3)) : null), td_1H);
        td_QO.body.appendChild(td_e2);
    } catch (td_x) {}
}
td_0b.td_0H.push(function() {
    var td_1a = new td_0b.td_6D("b84ea3fdb8604f1a8207942bf0b94f940A4C40151209494B151546425B00580D515C57195A5D500148530D541B24665831757C1407652A0217560F44475902585D5606040A5006045752530A5600044D3D556550045D5F5D0A5741005A2A09076D7D7A5168405329146801685A050C515355001C1267533B33735740715069584C5C497C5E7906202B495B6A762D564E1A7777022C5711263A0F7F58474B5650737F5976786C750E236F200C630A0E5A530F4D2B2D794B1657726C0544577D2A7364614E537351575758090A5B1148050D5D0C10240007112D6D53081950701071767943764D783204714451445B17570D155B15044107100B4E535255085A4F5B5D1E42521B71202F72316E510416580D5F5D0B4F57094A01571B5F440343004C5B46525B555C0948530D17410D1677207176363656044B114C57424048550E16565518495B4016075C4D495B144D550E174C4B045D12160D4857491A055E0C175051445C59570C131F124B5B12164C4C5E55060451090B0916555F591E1F0F594659585751464C055F0F164C485751165A550B0A1D050B0F5554515A0D1F02575F1E564C1B5C07125203575F495B550C535904085D1E4A0C4854431A055E4F4D591F595C405F031544074B5309555000595A0E085D014B1A1658475B0A534F405E5F50505A1C0315401A0646035F51105D460C055608101A164452470258065146515B174C7301055F175740354C590F59461C191D15090B54531E57091F14531D635A5058573503524D555B01505A4C5C5B4B125E0F080716555F1A135A4E6B5F595B5C63570049431658461217500D164D040F57031C4C4A43481B2550115146515B765A573D255F0C4A410B5C464D401B0000401F14034118524D49494E4B505159521A40174948570A1A0556594D4B5117175F03104D5D50435B085D085657480D161B5D0C0A590C5C1A115C580E4B52041354094A01575B1F4C5C1E4E4B5753424B511C0315430B4A40484B414D5947160840120D061746425B1254024C57541854555B0C48540D4155045B511B565511085C08050E16555F1A135A4E7D70717966717C3149721656770E585A0C5D5821135A10011040575C580F500F5B571D5B5C5D51071544074B4C075540074A530A0D5748070D55195C5B01580F1642584741555F07145901585A034144105D47164F5009094D554F535549580F4C5E1F565A574611135D0F16510B5C554D5957060E460810314D5B5D551448195A535E54585D5C16034303175D12164C00595A0E02521400115D44465D05541216515F194C5F4A00075E095652075451105157044F5009094D4054515A174404485D404255555B10031E044B1B1E5B5A12485517085107174C5653441B1E5200505D5F4317575D0F1E5303495D1258580D56510A0F5F0F0A0716555F1A135A4E7B53405E4D555E2D08553D7A5B084A410F5D464A3541070A115955445D095F124051525857585B0C031E01561A13521B105958104E4103030E551B4751041E125D4645476A5151171459164065135C4716515B0B315201011A5B5F525748520E554A60455C675B05087F0C41570F5B574C5B5B0819600F030C775848570F45085A535E5C1746474D1E530E5051084D1A174A5509125A040603565D1E46134902571F5F475C4653160F46075B5508521A01571A100A1C25262B7A656751041E0D575559596A445B1A055F0F5451145A510D56580C0F5604050C535F5E5348520E554A53584F515C161449004C5D0A5D5D0C5F470A025A03101B16555F1A135A195C5745434A575A074B5203575F485D511A5C5D16025C1001105B57425048520E551D53564B505F070B52074B47105A474D4B40170E5D0105174C5E1F5516414E4B536F5A585D5C1A035203575F0F57534C5A5512005448070D554E5556056E045A51010E0F054A0701574C5A5B0B1657174B400A0C56144B0F57405559095F04414A55505E1A510D0B1F014C47125659074A1B1C0E4614090D5653494C0050025D505F58521A510D0B1F1A51550A50520340190A0F5F0F0A0716555F1A135A19754B71545A5B470C12431A51550A50520340190A0F5F0F0A0716555F1A135A4E401D7D5F58585B0407484F565A0A505A0716570A4F460D4B125D44435B08500D405A43555A1A510D4845091605490B1B125D46160E5D07084D51584451145F044C1F5256575F5B0C011F1A5147045A1A0157591D094712141102191F56075F0A515C5719495B411604510C521A025C1B0348444A075A08050C42454455124412165B5E5E4D1A560D5D5A115C4715505B0C51501D085148020B5653535B485815177459595C575D3503524D7B5B0850520B5B5D3604411008074C4E595648570856575358175D464D20590C5C57096E5100175E16111C2B050B5619787620580F5D515F195347421A0F524C5F5D085C570D165D114E750F0A075B596751041E0B4B421F7A585D5C4D36420B57570F49550E5D1A0F12431E0D0059585B1A075D0759505159521A40171E590C14560F431A0B4C1B1D08430D0B4C485A48580F53044A4649455C47571010554C5A5B0B164C4D505D16155C141D0E515455461248135D4155454F511C01095D4D411B0A56530B564312161D0A0D005D44444D1454125D40465217575D0F49484D7A5B145C1A084B4312161D0A0D005D44444D1454125D40465217575D0F49484D4D46075747045D464B0D5A0401104C4F42511554134E571E5456591D1A49530D5459095747014A5D15151D0C170E545949501545125A1C53581741594D1655104A5B0858584D591B04025009110C4C695F42034317515747184159500C071E01561A13524C0F5D5A1C005F074A104D4E5D5B085418164B51595D514A4C14451A545B085C4D00575B0E0441154A01575B1F5516414E545D575E571A420E1E5D0D57511F54550B541A17144B0B1D4C5D54514D48520E16475B184E471D0724511B706727697D4C5C58095E7E1F2100594F48591F1F045A5349195A5B5F4D11434D5C7607407D3179642C4F570A085D754F7556074819554B1E525B554B4C00424D4E47495C7603417D3620632F4A06545A0F791F7403594B485A405647110F5E074A4704585A0916570A4F460D1C0C5942595B08541516515F5A167542123555104F5D055C474D6B5D020F7C084B3151515E7B086113575155444A1B600107630B5E5A29574C0C4856164F50094A17534E5E43095D0316515F5A1675510109450C4D67135459034A4D1D0F4409080016555F594962155946555A5C5A46111E5E1556580417570D551B3113520817045D444378075F05515C57675853571A095C16411A00505007545D11181D050B0F174E1F4C495E074B475D5A58464B4D15450F545514404C0D56580C0F5648080E574F544712420316515F194C5F4A0D085C0B575104585A09515A024F5E070A064C54515A0D1F02575F1F444C595F0314494D78570556410C4C67100C5E07161B4046514715410E4A461E4E585A56071E1E104C4C16584D1259584B025C0B4B1A1755575D4B5308561D47525B47511059530F5D093958570157410B154B16051B48575C1A055E0C174A1F545E5D1F000F5E4D4E51044A5710075708050E39080D5F5F5E19025E0F5D145C585E5D5C3D0753015C4715044C12594D15005F48070D55194547495206511F525E571B45070443014B0B0554505F67580A065A084906575855120A5E06515C6F565A575711150D1A495B154D514C51404A1943150F4C5B591E55121E194B5753424B511C0E0A5F1B5D47124A564C5B5B4B14584914074A455F5A075D4E591D51545A5B470C126F0D4F51144F5D074F4C160C5A0A014C5B591E410D1E32555B5C526E51504D1651114A57095D511A4D4704001D050B0F174E454704500F531C5358541B5B0C1255105751127B550C535D0B061C3401134D534340345E144C5742084B5143170343167A590270505F7F4C1200500E0B1451571E57095C1941505F59555D5C0748530D17410D16460354414A135601080F154155564942044C4740645C5747100F441B6841034A400B575A350054031C4C595B514E095F4F5E401F4F515D411609421B165B145D51104B1B130856114A0A4C5B5C4C48530056434552495B42170A510B4B51485F461A6B5C0A1663091616595A1E5009494F5A5C404758465B0007430456461250474C5A511D295C0B013D7459575B081F004B4248195A505B11055F175740485A5B0F177506025C130A16177E5F59031F004B42484F17575F004856104155055A410751584B0B40161C4C5B4455500F454C5955425E5A5B5E074856104151084D46075D76040C0C1501114B5F5F5A357026401C5C565B555C131355125647125858071652174E4B14010E5D40557736614C4A575C524F516D0105404C5C551E1747075B4117041D040A124857425D045012165C5543167A6124340F235A400F565A1A164700024614014C54555C1A004319795153425C5D5E1A0542075D510B175D16177B0B0467092B0C5D195556075F0A175445595A405B0D08431A545D0C571A0B56534B0F5F491C0D565A595A031F185A411E54561A47091E47154E1A02504701574200131D050B0F174E5F460254131651545E4A575D1708444C5A5B0B4177174B400A0C56144A034B46484C155400545B5E51561A440714591150530817570D551B16115F07170A07505F460B6E07515E554F4F5B414F055F0F4940034A1A014A510108474B001715585F46021F074A1D73737A6B6603045C075841225C760D4A503A511D071712074E465B15520E554244524A515C0E0F570C5C1A0A5856035645100443091716595A551A0043194F454719411A51030F43115C19034955105F5A004F55144B32574444550F5D4F5941404F4143451548551A5856075745175D1A0B04471E0B0C5F5A5540484109484A54524C4041010E554F5B5508521A065D1B1D0F5C140D115A575E5F485504174A40584A405003085B4C5D51494140034A530A0352080F4C5C531F4C48494F5C571F47564646030A1F1A175607575F0D5E550804410F070316555F5949494E5B5D5D5A565A41011459124D1A0C4A1A00555B4B025C0B4B2D74740F5D020C1916505D5817575D0F49622F7A0B0F5D091A16570D0040034A01575B1F4C485012484A48195A5C5311031E0156594953474D6A51150E41120D0C5F185A471E1F0A575D5458545B500B0A554C5A5B0B1655015B5B100F4749170754504351144704174A1F4F5857510D135E1670505B411A12594D08045D124A104D19481A15520E4C5B5155585A594C055F0F1644094B4003541B0C0F57031C4C5245400B1E530056515F475644470E07424C5C47495C59124A511600401E07105D405158485815175E5F50505A005256074D555B01505A3151570C0D5A070A0D165743441E57084A41441A5D5D400705444C5A5B0B164C0B485F0A4F430A1C0F415445470F5F044B415256575F1C01091E17524C15585A12595B090E5A0B0D4C5B595D1B1E440D4B4655455B555C09075E1B4D5D0B5C5603565F0C0F54481C4D5459575D081F004B42484F09");
    td_1H = (td_1a) ? td_1a.td_f(0, 3956) : null;
    td_0b.td_6U = (td_1a) ? td_1a.td_f(3956, 1) : null;
});
td_0b.tdz_328aa39427ce4cf3a9c2ea65f63d97fe = new td_0b.td_6D("\x33\x32\x38\x61\x61\x33\x39\x34\x32\x37\x63\x65\x34\x63\x66\x33\x61\x39\x63\x32\x65\x61\x36\x35\x66\x36\x33\x64\x39\x37\x66\x65\x35\x65\x35\x36\x35\x35\x31\x37\x30\x63\x35\x61\x35\x34\x35\x37\x35\x61\x35\x32\x30\x37\x30\x63\x34\x33\x30\x37\x31\x31\x34\x31\x30\x33\x35\x64\x30\x61\x35\x63\x31\x35\x31\x34\x34\x32\x34\x36\x30\x33\x35\x37\x34\x31\x30\x37\x35\x31\x34\x37\x30\x37\x31\x36\x34\x30\x34\x35\x35\x37\x31\x33\x30\x35\x34\x37\x35\x63\x34\x63\x34\x36\x35\x36\x31\x31\x30\x30\x35\x35\x30\x63\x30\x34\x35\x39\x30\x34\x35\x61\x31\x37\x34\x31\x30\x30\x30\x64\x35\x33\x35\x36\x31\x32\x35\x34\x34\x36\x31\x30\x34\x64\x35\x38\x30\x38\x30\x38\x35\x36\x34\x36\x35\x64\x31\x33\x30\x34\x35\x65\x35\x38\x35\x64\x35\x65\x35\x33\x30\x32\x31\x31\x35\x35\x30\x66\x30\x66\x34\x30\x31\x35\x35\x61\x30\x62\x35\x37\x30\x36\x30\x61\x35\x34\x35\x61\x31\x65\x34\x34\x35\x32\x30\x30\x35\x30\x35\x38\x30\x35\x30\x61\x35\x66\x35\x64\x34\x61\x30\x35\x30\x30\x34\x37\x35\x63\x34\x30\x35\x62\x35\x61\x30\x36\x30\x31\x35\x35\x31\x37\x30\x33\x34\x37\x30\x38\x35\x34\x30\x36\x31\x66\x30\x39\x30\x65\x35\x35\x35\x34\x30\x61\x35\x65\x35\x61\x30\x30\x35\x64\x35\x32\x30\x38\x30\x38\x35\x63\x35\x63\x34\x63\x30\x39\x30\x66\x34\x36\x35\x34\x35\x36\x35\x37\x34\x35\x31\x31\x30\x34\x35\x61\x30\x34\x30\x33\x34\x37\x30\x34\x35\x35\x31\x36\x34\x30\x30\x39\x30\x63\x35\x62\x34\x30\x30\x38\x35\x64\x35\x64\x30\x62\x34\x65\x35\x39\x31\x36\x30\x36\x34\x33\x35\x66\x35\x35\x31\x34\x30\x63\x35\x63\x34\x63\x34\x37\x35\x37\x34\x30\x30\x62\x30\x30\x35\x31\x30\x66\x32\x65\x36\x37\x32\x63\x37\x35\x32\x36\x34\x61\x31\x35\x30\x64\x35\x39\x34\x37\x30\x33\x34\x34");
var td_0b = td_0b || {};
td_0b.mouse = {};
td_0b.mouse.VERSION_REF = 0;
td_0b.mouse.BASE_HANDLE_REF = 1;
td_0b.mouse.LEGACY_REPORT_REF = 2;
td_0b.mouse.BHS_REPORT_REF = 3;
td_0b.mouse.MAX_SIZE_ANALYTICS_REF = 4;
td_0b.mouse.MAX_SIZE_STAT_REF = 5;
td_0b.mouse.MAX_SIZE_RAW_REF = 6;
td_0b.mouse.MAX_SIZE_MOUSE_OFF_PAGE_REF = 7;
td_0b.mouse.HELPERS_REF = 8;
td_0b.mouse.ANALYTICS_OFFSET = 1;
td_0b.mouse.STATS_OFFSET = 2;
td_0b.mouse.RAW_OFFSET = 4;
td_0b.mouse.LIVENESS_OFFSET = 16;
function td_4y(td_oy, td_x6, td_Wx, td_NV) {
    var td_BA = 1;
    var td_nZ = 1;
    var td_RK = 30000;
    var td_jW = 250;
    td_oy = (typeof td_oy !== [][[]] + "") ? td_0b.toNumber(td_oy) : td_BA;
    td_x6 = (typeof td_x6 !== [][[]] + "") ? td_0b.toNumber(td_x6) : td_RK;
    td_Wx = (typeof td_Wx !== [][[]] + "") ? td_0b.toNumber(td_Wx) : td_jW;
    var td_n7 = (td_oy === null || td_BA > td_oy) ? td_BA : td_oy;
    var td_ey = (td_x6 === null || td_nZ > td_x6) ? td_RK : td_x6;
    var td_IB = (td_Wx === null || td_jW > td_Wx) ? td_jW : td_Wx;
    var td_hU = 3;
    var td_p2 = 10;
    var td_Wy = true;
    var td_PS = 400;
    var td_jk = 3;
    var td_ms = 2;
    var td_f0 = td_0b.IDENT_TYPE;
    var td_IF = td_0b.IDENT_ID;
    var td_tJ = td_0b.IDENT_NAME;
    var td_pp = 2000;
    var td_AB = 1024;
    var td_lz = 128;
    var td_GY = 28500;
    var td_mF = null;
    var td_hH = 100;
    var td_iC = 500;
    var td_W3 = false;
    var td_S4 = 0;
    var td_jT = td_0b.td_1w();
    var td_HV = {
        "\x75\x70": 0,
        "\x64\x6f\x77\x6e": 1,
        "\x6d\x6f\x76": 2,
        "\x72\x6f\x6c\x6c": 3,
        "\x69\x64\x6c\x65": 4,
        "\x66\x69\x64\x6c\x65": 5
    };
    var td_kI = [];
    var td_kA = [];
    var td_U0 = td_E0();
    var td_vg = null;
    var td_o0 = null;
    var td_vJ = null;
    var td_Kj = false;
    var td_eX = null;
    var td_TZ = td_E0();
    var td_mo = {};
    var td_WF = 0;
    var td_PY = 0;
    var td_rn = 0;
    var td_zf = 0;
    var td_nd = 0;
    var td_yv = false;
    var td_Hz = [];
    var td_j8 = "";
    var td_oC = false;
    var td_vp = 0;
    var td_WI = null;
    var td_By = null;
    var td_Nh = null;
    var td_jt = 0;
    var td_AY = null;
    var td_YU = null;
    var td_uB = null;
    var td_gC = [-1, -1];
    var td_Al = [];
    var td_uk = {
        ptypes: {},
        ptype: null
    };
    function td_EN(td_g6) {
        if (typeof td_o0 === [][[]] + "" || td_o0 === null) {
            return false;
        }
        return ((td_o0.x === td_g6.x) && (td_o0.y === td_g6.y) && (td_o0.b === td_g6.b) && (td_o0.s === td_g6.s));
    }
    function td_zH(td_AQ) {
        return (typeof td_AQ !== [][[]] + "" && td_AQ !== null);
    }
    function td_f7(td_n5, td_Y3, td_Z2, td_Or, td_gN) {
        td_n5 = td_zH(td_n5) ? td_n5 : null;
        td_Y3 = td_zH(td_Y3) ? td_Y3 : null;
        td_Z2 = td_zH(td_Z2) ? td_Z2 : null;
        td_Or = td_zH(td_Or) ? td_Or : null;
        td_gN = td_zH(td_gN) ? td_gN : null;
        var td_Pc = {
            x: 0,
            y: 0,
            b: null,
            s: -1,
            t: (td_E0() - td_U0),
            e: null
        };
        if (td_n5 !== null && td_Y3 !== null) {
            td_Pc.x = td_n5;
            td_Pc.y = td_Y3;
        }
        if (td_Z2 !== null) {
            td_Pc.b = td_Z2;
        } else {
            delete td_Pc.b;
        }
        if (td_Or !== null) {
            td_Pc.s = td_Or;
        } else {
            delete td_Pc.s;
        }
        if (td_gN !== null) {
            td_Pc.e = td_gN;
        } else {
            delete td_Pc.e;
        }
        if (td_Pc.x && !td_EN(td_Pc)) {
            td_o0 = td_Pc;
            td_kI.push(td_Pc);
            td_kA.push(td_Pc);
            td_W3 = true;
            return td_Pc;
        }
        return null;
    }
    var td_Fe = {
        distance: {
            id: ((typeof (td_0b.tdz_328aa39427ce4cf3a9c2ea65f63d97fe) !== "undefined" && typeof (td_0b.tdz_328aa39427ce4cf3a9c2ea65f63d97fe.td_f) !== "undefined") ? (td_0b.tdz_328aa39427ce4cf3a9c2ea65f63d97fe.td_f(0, 2)) : null),
            min: 0,
            max: 0,
            avg: 0,
            val: 0,
            num: 0,
            total: 0
        },
        velocity: {
            id: ((typeof (td_0b.tdz_328aa39427ce4cf3a9c2ea65f63d97fe) !== "undefined" && typeof (td_0b.tdz_328aa39427ce4cf3a9c2ea65f63d97fe.td_f) !== "undefined") ? (td_0b.tdz_328aa39427ce4cf3a9c2ea65f63d97fe.td_f(2, 2)) : null),
            min: 0,
            max: 0,
            avg: 0,
            val: 0,
            num: 0
        },
        inflexion: {
            id: ((typeof (td_0b.tdz_328aa39427ce4cf3a9c2ea65f63d97fe) !== "undefined" && typeof (td_0b.tdz_328aa39427ce4cf3a9c2ea65f63d97fe.td_f) !== "undefined") ? (td_0b.tdz_328aa39427ce4cf3a9c2ea65f63d97fe.td_f(4, 2)) : null),
            min: 0,
            max: 0,
            avg: 0,
            val: 0,
            num: 0
        },
        curviness: {
            id: ((typeof (td_0b.tdz_328aa39427ce4cf3a9c2ea65f63d97fe) !== "undefined" && typeof (td_0b.tdz_328aa39427ce4cf3a9c2ea65f63d97fe.td_f) !== "undefined") ? (td_0b.tdz_328aa39427ce4cf3a9c2ea65f63d97fe.td_f(6, 2)) : null),
            min: 0,
            max: 0,
            avg: 0,
            val: 0,
            num: 0
        },
        hesitancy: {
            id: ((typeof (td_0b.tdz_328aa39427ce4cf3a9c2ea65f63d97fe) !== "undefined" && typeof (td_0b.tdz_328aa39427ce4cf3a9c2ea65f63d97fe.td_f) !== "undefined") ? (td_0b.tdz_328aa39427ce4cf3a9c2ea65f63d97fe.td_f(8, 2)) : null),
            min: 0,
            max: 0,
            avg: 0,
            num: 0
        },
        discrete: {
            id: ((typeof (td_0b.tdz_328aa39427ce4cf3a9c2ea65f63d97fe) !== "undefined" && typeof (td_0b.tdz_328aa39427ce4cf3a9c2ea65f63d97fe.td_f) !== "undefined") ? (td_0b.tdz_328aa39427ce4cf3a9c2ea65f63d97fe.td_f(10, 2)) : null),
            x: 0,
            y: 0
        },
        bounded: {
            maxX: 0,
            minX: 0,
            maxY: 0,
            minY: 0
        },
        event1: null,
        event2: null,
        event3: null,
        angle: 0,
        change: 0,
        segmentSpotTime: [],
        velocitySamples: [],
        total_displacement: 0
    };
    var td_TU = {
        count1: 0,
        segmentCount: 0,
        motionsCount: 0,
        meanMotions: 0,
        speedSamples: [],
        accelSamples: [],
        speedMean: 0,
        accelerationMean: 0
    };
    var td_jf = {
        distance: {
            id: ((typeof (td_0b.tdz_328aa39427ce4cf3a9c2ea65f63d97fe) !== "undefined" && typeof (td_0b.tdz_328aa39427ce4cf3a9c2ea65f63d97fe.td_f) !== "undefined") ? (td_0b.tdz_328aa39427ce4cf3a9c2ea65f63d97fe.td_f(12, 2)) : null),
            min: 0,
            max: 0,
            avg: 0,
            val: 0,
            num: 0,
            total: 0
        },
        reversal: {
            id: ((typeof (td_0b.tdz_328aa39427ce4cf3a9c2ea65f63d97fe) !== "undefined" && typeof (td_0b.tdz_328aa39427ce4cf3a9c2ea65f63d97fe.td_f) !== "undefined") ? (td_0b.tdz_328aa39427ce4cf3a9c2ea65f63d97fe.td_f(14, 2)) : null),
            min: 0,
            max: 0,
            avg: 0,
            val: 0,
            num: 0
        },
        event1: null
    };
    function td_m1() {
        return {
            LC: 0,
            MC: 0,
            RC: 0,
            OP: false,
            TYPE: ""
        };
    }
    var td_lx = {
        depress: {
            id: ((typeof (td_0b.tdz_328aa39427ce4cf3a9c2ea65f63d97fe) !== "undefined" && typeof (td_0b.tdz_328aa39427ce4cf3a9c2ea65f63d97fe.td_f) !== "undefined") ? (td_0b.tdz_328aa39427ce4cf3a9c2ea65f63d97fe.td_f(16, 2)) : null),
            min: 0,
            max: 0,
            avg: 0,
            val: 0,
            num: 0
        },
        click: td_m1(),
        event1: null
    };
    function td_bC(td_qp) {
        td_qp.num += 1;
        td_qp.min = td_qp.min > 0 ? Math.min(td_qp.min, td_qp.val) : td_qp.val;
        td_qp.max = Math.max(td_qp.max, td_qp.val);
        td_qp.avg = td_Pz(td_qp.avg, td_qp.val, td_qp.num);
    }
    function td_eN(td_QF, td_dI, td_p1, td_Fa) {
        if (td_oC === false || ((typeof td_QF === [][[]] + "" || td_QF === "") && (typeof td_dI === [][[]] + "" || td_dI === "") && (typeof td_p1 === [][[]] + "" || td_p1 === ""))) {
            return;
        }
        switch (td_QF) {
        case ((typeof (td_0b.tdz_328aa39427ce4cf3a9c2ea65f63d97fe) !== "undefined" && typeof (td_0b.tdz_328aa39427ce4cf3a9c2ea65f63d97fe.td_f) !== "undefined") ? (td_0b.tdz_328aa39427ce4cf3a9c2ea65f63d97fe.td_f(18, 5)) : null):
        case ((typeof (td_0b.tdz_328aa39427ce4cf3a9c2ea65f63d97fe) !== "undefined" && typeof (td_0b.tdz_328aa39427ce4cf3a9c2ea65f63d97fe.td_f) !== "undefined") ? (td_0b.tdz_328aa39427ce4cf3a9c2ea65f63d97fe.td_f(23, 6)) : null):
        case Number(1157151).toString(34):
        case ((typeof (td_0b.tdz_328aa39427ce4cf3a9c2ea65f63d97fe) !== "undefined" && typeof (td_0b.tdz_328aa39427ce4cf3a9c2ea65f63d97fe.td_f) !== "undefined") ? (td_0b.tdz_328aa39427ce4cf3a9c2ea65f63d97fe.td_f(29, 8)) : null):
        case ((typeof (td_0b.tdz_328aa39427ce4cf3a9c2ea65f63d97fe) !== "undefined" && typeof (td_0b.tdz_328aa39427ce4cf3a9c2ea65f63d97fe.td_f) !== "undefined") ? (td_0b.tdz_328aa39427ce4cf3a9c2ea65f63d97fe.td_f(37, 8)) : null):
        case ((typeof (td_0b.tdz_328aa39427ce4cf3a9c2ea65f63d97fe) !== "undefined" && typeof (td_0b.tdz_328aa39427ce4cf3a9c2ea65f63d97fe.td_f) !== "undefined") ? (td_0b.tdz_328aa39427ce4cf3a9c2ea65f63d97fe.td_f(45, 6)) : null):
        case ((typeof (td_0b.tdz_328aa39427ce4cf3a9c2ea65f63d97fe) !== "undefined" && typeof (td_0b.tdz_328aa39427ce4cf3a9c2ea65f63d97fe.td_f) !== "undefined") ? (td_0b.tdz_328aa39427ce4cf3a9c2ea65f63d97fe.td_f(51, 6)) : null):
        case ((typeof (td_0b.tdz_328aa39427ce4cf3a9c2ea65f63d97fe) !== "undefined" && typeof (td_0b.tdz_328aa39427ce4cf3a9c2ea65f63d97fe.td_f) !== "undefined") ? (td_0b.tdz_328aa39427ce4cf3a9c2ea65f63d97fe.td_f(57, 6)) : null):
        case ((typeof (td_0b.tdz_328aa39427ce4cf3a9c2ea65f63d97fe) !== "undefined" && typeof (td_0b.tdz_328aa39427ce4cf3a9c2ea65f63d97fe.td_f) !== "undefined") ? (td_0b.tdz_328aa39427ce4cf3a9c2ea65f63d97fe.td_f(63, 5)) : null):
        case ((typeof (td_0b.tdz_328aa39427ce4cf3a9c2ea65f63d97fe) !== "undefined" && typeof (td_0b.tdz_328aa39427ce4cf3a9c2ea65f63d97fe.td_f) !== "undefined") ? (td_0b.tdz_328aa39427ce4cf3a9c2ea65f63d97fe.td_f(68, 5)) : null):
        case ((typeof (td_0b.tdz_328aa39427ce4cf3a9c2ea65f63d97fe) !== "undefined" && typeof (td_0b.tdz_328aa39427ce4cf3a9c2ea65f63d97fe.td_f) !== "undefined") ? (td_0b.tdz_328aa39427ce4cf3a9c2ea65f63d97fe.td_f(73, 8)) : null):
        case ((typeof (td_0b.tdz_328aa39427ce4cf3a9c2ea65f63d97fe) !== "undefined" && typeof (td_0b.tdz_328aa39427ce4cf3a9c2ea65f63d97fe.td_f) !== "undefined") ? (td_0b.tdz_328aa39427ce4cf3a9c2ea65f63d97fe.td_f(81, 8)) : null):
        case ((typeof (td_0b.tdz_328aa39427ce4cf3a9c2ea65f63d97fe) !== "undefined" && typeof (td_0b.tdz_328aa39427ce4cf3a9c2ea65f63d97fe.td_f) !== "undefined") ? (td_0b.tdz_328aa39427ce4cf3a9c2ea65f63d97fe.td_f(89, 5)) : null):
        case ((typeof (td_0b.tdz_328aa39427ce4cf3a9c2ea65f63d97fe) !== "undefined" && typeof (td_0b.tdz_328aa39427ce4cf3a9c2ea65f63d97fe.td_f) !== "undefined") ? (td_0b.tdz_328aa39427ce4cf3a9c2ea65f63d97fe.td_f(94, 5)) : null):
        case Number(360884).toString(30):
        case ((typeof (td_0b.tdz_328aa39427ce4cf3a9c2ea65f63d97fe) !== "undefined" && typeof (td_0b.tdz_328aa39427ce4cf3a9c2ea65f63d97fe.td_f) !== "undefined") ? (td_0b.tdz_328aa39427ce4cf3a9c2ea65f63d97fe.td_f(99, 8)) : null):
        case ((typeof (td_0b.tdz_328aa39427ce4cf3a9c2ea65f63d97fe) !== "undefined" && typeof (td_0b.tdz_328aa39427ce4cf3a9c2ea65f63d97fe.td_f) !== "undefined") ? (td_0b.tdz_328aa39427ce4cf3a9c2ea65f63d97fe.td_f(107, 14)) : null):
        case Number(168908).toString(22):
        case ((typeof (td_0b.tdz_328aa39427ce4cf3a9c2ea65f63d97fe) !== "undefined" && typeof (td_0b.tdz_328aa39427ce4cf3a9c2ea65f63d97fe.td_f) !== "undefined") ? (td_0b.tdz_328aa39427ce4cf3a9c2ea65f63d97fe.td_f(121, 6)) : null):
        case ((typeof (td_0b.tdz_328aa39427ce4cf3a9c2ea65f63d97fe) !== "undefined" && typeof (td_0b.tdz_328aa39427ce4cf3a9c2ea65f63d97fe.td_f) !== "undefined") ? (td_0b.tdz_328aa39427ce4cf3a9c2ea65f63d97fe.td_f(127, 5)) : null):
        case ((typeof (td_0b.tdz_328aa39427ce4cf3a9c2ea65f63d97fe) !== "undefined" && typeof (td_0b.tdz_328aa39427ce4cf3a9c2ea65f63d97fe.td_f) !== "undefined") ? (td_0b.tdz_328aa39427ce4cf3a9c2ea65f63d97fe.td_f(132, 6)) : null):
        case ((typeof (td_0b.tdz_328aa39427ce4cf3a9c2ea65f63d97fe) !== "undefined" && typeof (td_0b.tdz_328aa39427ce4cf3a9c2ea65f63d97fe.td_f) !== "undefined") ? (td_0b.tdz_328aa39427ce4cf3a9c2ea65f63d97fe.td_f(138, 5)) : null):
        case ((typeof (td_0b.tdz_328aa39427ce4cf3a9c2ea65f63d97fe) !== "undefined" && typeof (td_0b.tdz_328aa39427ce4cf3a9c2ea65f63d97fe.td_f) !== "undefined") ? (td_0b.tdz_328aa39427ce4cf3a9c2ea65f63d97fe.td_f(143, 3)) : null):
        case Number(799874).toString(30):
        case ((typeof (td_0b.tdz_328aa39427ce4cf3a9c2ea65f63d97fe) !== "undefined" && typeof (td_0b.tdz_328aa39427ce4cf3a9c2ea65f63d97fe.td_f) !== "undefined") ? (td_0b.tdz_328aa39427ce4cf3a9c2ea65f63d97fe.td_f(146, 3)) : null):
        case Number(1165712).toString(33):
            td_3q.set(td_QF, td_dI, td_p1, true, td_Nh, td_Fa);
            break;
        default:
            td_3q.set(td_QF, td_dI, td_p1, true);
            break;
        }
    }
    function td_Y8(td_x) {
        if (td_YU === null) {
            return false;
        }
        if (td_0b.emptyTargetAndSource(td_x)) {
            return false;
        }
        return td_YU.checkEventTargetIgnore(td_x);
    }
    function td_fP(td_x) {
        if (td_YU === null) {
            return false;
        }
        if (td_0b.emptyTargetAndSource(td_x)) {
            return false;
        }
        td_YU.shouldDocument(td_x);
        return td_YU.shouldDefineAsPasswordType(td_x);
    }
    function td_nk(td_TJ) {
        td_Al.push(td_TJ);
    }
    function td_zN(td_N9, td_GI) {
        var td_pM = null;
        td_pM = td_By.elementFromPoint(td_N9.clientX, td_N9.clientY);
        if (td_zH(td_pM) && td_pM !== td_uB && td_zH(td_pM.parentNode)) {
            var td_Yx = [];
            td_Yx[0] = "t";
            var td_Z3 = td_0b.getEventTypeIdName(td_N9);
            var td_UG = td_Z3[td_0b.IDENT_ID] || td_Z3[td_0b.IDENT_NAME] || "";
            var td_Ok = td_Z3[td_0b.IDENT_TYPE] || "";
            var td_O9 = td_0b.getEventParentTypeIdName(td_N9);
            var td_eD = td_O9[td_0b.IDENT_ID] || td_O9[td_0b.IDENT_NAME] || "";
            var td_Mk = td_O9[td_0b.IDENT_TYPE] || "";
            td_Yx[1] = td_Ok + "#" + td_UG + "#" + td_Mk + "#" + td_eD;
            td_Yx[2] = td_GI || td_NV.getTimestamp();
            td_uB = td_pM;
            td_nk(td_Yx);
        }
    }
    function td_Lx(td_ao) {
        if (td_gC[0] === td_By.documentElement.clientWidth && td_gC[1] === td_By.documentElement.clientHeight) {
            return;
        }
        var td_Wc = [];
        td_Wc[0] = "v";
        td_Wc[1] = td_By.documentElement.clientWidth;
        td_Wc[2] = td_By.documentElement.clientHeight;
        td_Wc[3] = td_ao || td_NV.getTimestamp();
        td_gC[0] = td_By.documentElement.clientWidth;
        td_gC[1] = td_By.documentElement.clientHeight;
        td_nk(td_Wc);
    }
    function td_gl(td_u4) {
        var td_re, td_jF, td_s9, td_Oe;
        if (td_u4.getCoalescedEvents) {
            var td_Ba = td_u4.getCoalescedEvents() || [];
            if (td_Ba.length === 0) {
                td_Ba.push(td_u4);
            }
            var td_F9 = td_NV.getTimestamp();
            var td_V4 = td_u4.timeStamp;
            for (var td_jV = 0; td_jV < td_Ba.length; td_jV++) {
                var td_x = td_Ba[td_jV];
                td_s9 = td_F9 - Math.round(td_V4 - (td_x.timeStamp || td_V4));
                td_re = [];
                td_re[0] = ((typeof (td_0b.tdz_328aa39427ce4cf3a9c2ea65f63d97fe) !== "undefined" && typeof (td_0b.tdz_328aa39427ce4cf3a9c2ea65f63d97fe.td_f) !== "undefined") ? (td_0b.tdz_328aa39427ce4cf3a9c2ea65f63d97fe.td_f(149, 2)) : null);
                td_re[1] = td_0b.toFixedDecimal2(td_x.clientX);
                td_re[2] = td_0b.toFixedDecimal2(td_x.clientY);
                td_re[3] = td_s9;
                td_zN(td_u4, td_s9);
                td_Lx(td_s9);
                td_nk(td_re);
                td_Oe = td_x.pointerType || ((typeof (td_0b.tdz_328aa39427ce4cf3a9c2ea65f63d97fe) !== "undefined" && typeof (td_0b.tdz_328aa39427ce4cf3a9c2ea65f63d97fe.td_f) !== "undefined") ? (td_0b.tdz_328aa39427ce4cf3a9c2ea65f63d97fe.td_f(151, 7)) : null);
                td_uk.ptypes[td_Oe] = (td_uk.ptypes[td_Oe] || 0) + 1;
            }
            td_uk.ptype = ((typeof (td_0b.tdz_328aa39427ce4cf3a9c2ea65f63d97fe) !== "undefined" && typeof (td_0b.tdz_328aa39427ce4cf3a9c2ea65f63d97fe.td_f) !== "undefined") ? (td_0b.tdz_328aa39427ce4cf3a9c2ea65f63d97fe.td_f(158, 2)) : null);
        } else {
            td_jF = td_NV.getTimestamp();
            td_re = [];
            td_re[0] = ((typeof (td_0b.tdz_328aa39427ce4cf3a9c2ea65f63d97fe) !== "undefined" && typeof (td_0b.tdz_328aa39427ce4cf3a9c2ea65f63d97fe.td_f) !== "undefined") ? (td_0b.tdz_328aa39427ce4cf3a9c2ea65f63d97fe.td_f(149, 2)) : null);
            td_re[1] = td_0b.toFixedDecimal2(td_u4.clientX);
            td_re[2] = td_0b.toFixedDecimal2(td_u4.clientY);
            td_re[3] = td_jF;
            td_zN(td_u4, td_jF);
            td_Lx(td_jF);
            td_nk(td_re);
            td_Oe = td_u4.pointerType || ((typeof (td_0b.tdz_328aa39427ce4cf3a9c2ea65f63d97fe) !== "undefined" && typeof (td_0b.tdz_328aa39427ce4cf3a9c2ea65f63d97fe.td_f) !== "undefined") ? (td_0b.tdz_328aa39427ce4cf3a9c2ea65f63d97fe.td_f(151, 7)) : null);
            td_uk.ptypes[td_Oe] = (td_uk.ptypes[td_Oe] || 0) + 1;
            td_uk.ptype = ((typeof (td_0b.tdz_328aa39427ce4cf3a9c2ea65f63d97fe) !== "undefined" && typeof (td_0b.tdz_328aa39427ce4cf3a9c2ea65f63d97fe.td_f) !== "undefined") ? (td_0b.tdz_328aa39427ce4cf3a9c2ea65f63d97fe.td_f(160, 2)) : null);
        }
        td_NV.setMouseEnvData(td_uk);
    }
    function td_pZ(td_l4) {
        var td_Rq, td_X1, td_Rh;
        td_Rq = td_NV.getTimestamp();
        td_X1 = [];
        td_X1[0] = ((typeof (td_0b.tdz_328aa39427ce4cf3a9c2ea65f63d97fe) !== "undefined" && typeof (td_0b.tdz_328aa39427ce4cf3a9c2ea65f63d97fe.td_f) !== "undefined") ? (td_0b.tdz_328aa39427ce4cf3a9c2ea65f63d97fe.td_f(0, 2)) : null);
        td_X1[1] = td_0b.toFixedDecimal2(td_l4.clientX);
        td_X1[2] = td_0b.toFixedDecimal2(td_l4.clientY);
        td_X1[3] = td_Rq;
        td_X1[4] = td_l4.button;
        td_zN(td_l4, td_Rq);
        td_Lx(td_Rq);
        td_nk(td_X1);
        td_Rh = td_l4.pointerType || ((typeof (td_0b.tdz_328aa39427ce4cf3a9c2ea65f63d97fe) !== "undefined" && typeof (td_0b.tdz_328aa39427ce4cf3a9c2ea65f63d97fe.td_f) !== "undefined") ? (td_0b.tdz_328aa39427ce4cf3a9c2ea65f63d97fe.td_f(151, 7)) : null);
        td_uk.ptypes[td_Rh] = (td_uk.ptypes[td_Rh] || 0) + 1;
        td_NV.setMouseEnvData(td_uk);
    }
    function td_Av(td_Uf) {
        var td_rI, td_ba, td_Jv;
        td_rI = td_NV.getTimestamp();
        td_ba = [];
        td_ba[0] = ((typeof (td_0b.tdz_328aa39427ce4cf3a9c2ea65f63d97fe) !== "undefined" && typeof (td_0b.tdz_328aa39427ce4cf3a9c2ea65f63d97fe.td_f) !== "undefined") ? (td_0b.tdz_328aa39427ce4cf3a9c2ea65f63d97fe.td_f(162, 2)) : null);
        td_ba[1] = td_0b.toFixedDecimal2(td_Uf.clientX);
        td_ba[2] = td_0b.toFixedDecimal2(td_Uf.clientY);
        td_ba[3] = td_rI;
        td_ba[4] = td_Uf.button;
        td_zN(td_Uf, td_rI);
        td_Lx(td_rI);
        td_nk(td_ba);
        td_Jv = td_Uf.pointerType || ((typeof (td_0b.tdz_328aa39427ce4cf3a9c2ea65f63d97fe) !== "undefined" && typeof (td_0b.tdz_328aa39427ce4cf3a9c2ea65f63d97fe.td_f) !== "undefined") ? (td_0b.tdz_328aa39427ce4cf3a9c2ea65f63d97fe.td_f(151, 7)) : null);
        td_uk.ptypes[td_Jv] = (td_uk.ptypes[td_Jv] || 0) + 1;
        td_NV.setMouseEnvData(td_uk);
    }
    function td_hB(td_qg) {
        var td_Hp = [];
        td_Hp[0] = ((typeof (td_0b.tdz_328aa39427ce4cf3a9c2ea65f63d97fe) !== "undefined" && typeof (td_0b.tdz_328aa39427ce4cf3a9c2ea65f63d97fe.td_f) !== "undefined") ? (td_0b.tdz_328aa39427ce4cf3a9c2ea65f63d97fe.td_f(149, 2)) : null);
        td_Hp[1] = td_0b.toFixedDecimal2(td_qg.clientX);
        td_Hp[2] = td_0b.toFixedDecimal2(td_qg.clientY);
        td_Hp[3] = td_NV.getTimestamp();
        td_zN(td_qg);
        td_Lx();
        td_nk(td_Hp);
    }
    function td_rs(td_GL) {
        var td_JC = [];
        td_JC[0] = ((typeof (td_0b.tdz_328aa39427ce4cf3a9c2ea65f63d97fe) !== "undefined" && typeof (td_0b.tdz_328aa39427ce4cf3a9c2ea65f63d97fe.td_f) !== "undefined") ? (td_0b.tdz_328aa39427ce4cf3a9c2ea65f63d97fe.td_f(0, 2)) : null);
        td_JC[1] = td_0b.toFixedDecimal2(td_GL.clientX);
        td_JC[2] = td_0b.toFixedDecimal2(td_GL.clientY);
        td_JC[3] = td_NV.getTimestamp();
        td_JC[4] = td_GL.button;
        td_zN(td_GL);
        td_Lx();
        td_nk(td_JC);
    }
    function td_y9(td_BI) {
        var td_Sr = [];
        td_Sr[0] = ((typeof (td_0b.tdz_328aa39427ce4cf3a9c2ea65f63d97fe) !== "undefined" && typeof (td_0b.tdz_328aa39427ce4cf3a9c2ea65f63d97fe.td_f) !== "undefined") ? (td_0b.tdz_328aa39427ce4cf3a9c2ea65f63d97fe.td_f(162, 2)) : null);
        td_Sr[1] = td_0b.toFixedDecimal2(td_BI.clientX);
        td_Sr[2] = td_0b.toFixedDecimal2(td_BI.clientY);
        td_Sr[3] = td_NV.getTimestamp();
        td_Sr[4] = td_BI.button;
        td_zN(td_BI);
        td_Lx();
        td_nk(td_Sr);
    }
    function td_Pz(td_oz, td_tL, td_Uv) {
        return (td_oz * (td_Uv - 1) + td_tL) / td_Uv;
    }
    function td_dr(td_bx, td_YF, td_wk, td_kB) {
        var td_HK = td_wk - td_bx;
        var td_bW = td_kB - td_YF;
        return Math.sqrt(Math.pow(td_HK, 2) + Math.pow(td_bW, 2));
    }
    function td_kX(td_q8, td_uF, td_Bw, td_QB) {
        var td_ts = td_Bw - td_q8;
        var td_Xn = td_QB - td_uF;
        if (td_ts === 0) {
            if (td_Xn === 0) {
                return 0;
            }
            if (td_Xn > 0) {
                return 90;
            } else {
                return 270;
            }
        }
        var td_Kq = Math.atan(td_Xn / td_ts) * (180 / Math.PI);
        if (td_ts < 0) {
            td_Kq += 180;
        }
        if (td_ts > 0 && td_Xn < 0) {
            td_Kq += 360;
        }
        return td_Kq % 360;
    }
    function td_S0(td_AK, td_Hk, td_pQ) {
        if (td_vg === null) {
            td_vg = {
                x: td_AK,
                y: td_Hk,
                t: td_pQ
            };
        }
        if (td_Fe.event1 === null) {
            td_Fe.event1 = {
                x: td_AK,
                y: td_Hk,
                t: td_pQ
            };
        }
        if (td_Fe.event2 === null) {
            td_Fe.event2 = {
                x: td_AK,
                y: td_Hk,
                t: td_pQ
            };
        }
        if (td_Fe.event3 === null) {
            td_Fe.event3 = {
                x: td_AK,
                y: td_Hk,
                t: td_pQ
            };
        }
    }
    function td_SC(td_x) {
        try {
            if (typeof td_x !== ((typeof (td_0b.tdz_328aa39427ce4cf3a9c2ea65f63d97fe) !== "undefined" && typeof (td_0b.tdz_328aa39427ce4cf3a9c2ea65f63d97fe.td_f) !== "undefined") ? (td_0b.tdz_328aa39427ce4cf3a9c2ea65f63d97fe.td_f(45, 6)) : null) || td_x === null) {
                td_2O(td_By, td_4k, td_SC);
                return;
            }
            var td_iY = td_E0() - td_U0;
            var td_RH = td_x.clientX;
            var td_oL = td_x.clientY;
            var td_zl;
            td_S0(td_RH, td_oL, td_iY);
            td_Fe.event3 = {
                x: td_RH,
                y: td_oL,
                t: td_iY
            };
            td_zl = td_iY - td_Fe.event2.t;
            if (td_hH > td_zl) {
                return;
            }
            td_TU.count1 += 1;
            td_Fe.segmentSpotTime.push(td_iY);
            var td_Bi = td_dr(td_Fe.event2.x, td_Fe.event2.y, td_RH, td_oL);
            td_Fe.distance.val += td_Bi;
            var td_KO = (td_Fe.event2.t - td_Fe.event1.t);
            if ((td_hH - (td_hH / 3)) > td_KO) {
                td_KO = td_iY - td_hH;
            }
            var td_Wf = td_0b.toFixed(td_Bi / td_KO, td_ms);
            td_TU.speedSamples.push(td_Wf);
            td_TU.speedMean = td_0b.toFixed(td_Pz(td_TU.speedMean, td_Wf, td_TU.count1), td_ms);
            var td_pW = td_dr(td_Fe.event1.x, td_Fe.event1.y, td_RH, td_oL);
            var td_ju = td_0b.toFixed(td_pW / td_iY, td_ms);
            td_Fe.velocitySamples.push(td_ju);
            td_Fe.velocity.num += 1;
            td_Fe.velocity.avg = td_0b.toFixed(td_Pz(td_Fe.velocity.avg, td_ju, td_Fe.velocity.num), td_ms);
            td_Fe.velocity.max = Math.max(td_Fe.velocity.max, td_ju);
            td_Fe.velocity.min = td_Fe.velocity.min !== 0 ? Math.min(td_Fe.velocity.min, td_ju) : td_ju;
            td_Fe.bounded.maxX = Math.max(td_Fe.bounded.maxX, td_RH);
            td_Fe.bounded.minX = td_Fe.bounded.minX !== 0 ? Math.min(td_Fe.bounded.minX, td_RH) : td_RH;
            td_Fe.bounded.maxY = Math.max(td_Fe.bounded.maxY, td_oL);
            td_Fe.bounded.minY = td_Fe.bounded.minY !== 0 ? Math.min(td_Fe.bounded.minY, td_oL) : td_oL;
            if (td_Fe.velocitySamples.length > 1) {
                var td_Xc = (td_iY - td_Fe.event1.t) / 1000;
                var td_OF = td_Fe.velocitySamples.length - 2;
                var td_GU = td_ju - td_Fe.velocitySamples[td_OF];
                var td_wW = td_0b.toFixed(td_GU / td_Xc, td_ms);
                td_TU.accelSamples.push(td_wW);
                td_TU.accelerationMean = td_0b.toFixed(td_Pz(td_TU.accelerationMean, td_wW, td_TU.count1), td_ms);
            }
            var td_we = td_kX(td_Fe.event2.x, td_Fe.event2.y, td_RH, td_oL);
            var td_Fj = td_Fe.angle - td_we;
            td_Fj = (td_Fj + 540) % 360 - 180;
            if (td_Fe.change * td_Fj < 0) {
                td_Fe.inflexion.val += 1;
            }
            td_Fe.angle = td_we;
            td_Fe.change = td_Fj;
            var td_w8 = td_f7(td_RH, td_oL, null, td_HV.mov, null, null);
            if (td_w8 === null && td_o0 !== null && (td_iY - td_o0.t) > td_PS) {
                td_Fe.hesitancy.num += 1;
                td_Fe.hesitancy.max = Math.max(td_Fe.hesitancy.max, (td_iY - td_Fe.event2.t));
                td_Fe.hesitancy.min = td_Fe.hesitancy.min !== 0 ? Math.min(td_Fe.hesitancy.min, (td_iY - td_Fe.event2.t)) : (td_iY - td_Fe.event2.t);
                td_Fe.hesitancy.avg = td_0b.toFixed(td_Pz(td_Fe.hesitancy.avg, (td_iY - td_Fe.event2.t), td_Fe.hesitancy.num), td_ms);
            }
            td_Fe.event2 = {
                x: td_RH,
                y: td_oL,
                t: td_iY
            };
        } catch (td_KG) {}
    }
    function td_IW(td_x) {
        return td_0b.getEventTypeIdName(td_x);
    }
    function td_Uz(td_x) {
        if (typeof td_x !== ((typeof (td_0b.tdz_328aa39427ce4cf3a9c2ea65f63d97fe) !== "undefined" && typeof (td_0b.tdz_328aa39427ce4cf3a9c2ea65f63d97fe.td_f) !== "undefined") ? (td_0b.tdz_328aa39427ce4cf3a9c2ea65f63d97fe.td_f(45, 6)) : null) || td_x === null) {
            td_2O(td_By, td_2X, td_Uz);
            return;
        }
        td_lx.event1 = td_E0();
        var td_Ar = !td_Y8(td_x);
        var td_e9 = td_IW(td_x);
        var td_Gc = td_e9[td_tJ];
        var td_k0 = td_e9[td_IF];
        if (td_fP(td_x)) {
            td_e9[td_f0] = ((typeof (td_0b.tdz_328aa39427ce4cf3a9c2ea65f63d97fe) !== "undefined" && typeof (td_0b.tdz_328aa39427ce4cf3a9c2ea65f63d97fe.td_f) !== "undefined") ? (td_0b.tdz_328aa39427ce4cf3a9c2ea65f63d97fe.td_f(29, 8)) : null);
        }
        var td_hM = td_e9[td_f0];
        var td_nM = (td_k0 !== null) ? td_k0 : td_Gc;
        if (td_nM === null) {
            td_nM = [][[]] + "";
        }
        td_f7(td_x.clientX, td_x.clientY, td_x.button, td_HV.down, (td_Ar) ? td_nM : null);
        td_vJ = {
            "\x69\x64\x65\x6e\x74": td_nM,
            "\x74\x69\x6d\x65": td_E0()
        };
        if (td_Ar) {
            td_j8 = td_nM;
        } else {
            td_j8 = "";
            return;
        }
        if (typeof td_mo[td_nM] === [][[]] + "") {
            td_mo[td_nM] = td_m1();
            td_mo[td_nM].TYPE = td_hM;
        }
        var td_F1 = td_0b.getEventTargetValue(td_x);
        td_eN(td_hM, td_Gc, td_k0, td_F1);
        switch (td_x.button) {
        case 0:
            td_mo[td_nM].LC += 1;
            td_lx.click.LC += 1;
            break;
        case 1:
            td_mo[td_nM].MC += 1;
            td_lx.click.MC += 1;
            break;
        case 2:
            td_mo[td_nM].RC += 1;
            td_lx.click.RC += 1;
            break;
        default:
            break;
        }
    }
    function td_Sx(td_x) {
        if (typeof td_x !== ((typeof (td_0b.tdz_328aa39427ce4cf3a9c2ea65f63d97fe) !== "undefined" && typeof (td_0b.tdz_328aa39427ce4cf3a9c2ea65f63d97fe.td_f) !== "undefined") ? (td_0b.tdz_328aa39427ce4cf3a9c2ea65f63d97fe.td_f(45, 6)) : null) || td_x === null) {
            td_2O(td_By, td_2C, td_Sx);
            return;
        }
        if (td_lx.event1) {
            td_lx.depress.val = td_E0() - td_lx.event1;
            td_bC(td_lx.depress);
        }
        td_f7(td_x.clientX, td_x.clientY, td_x.button, td_HV.up, null);
    }
    function td_YL() {
        if (typeof document.documentElement !== [][[]] + "" && document.documentElement !== null && typeof document.documentElement.clientWidth !== [][[]] + "" && document.documentElement.clientWidth !== null && typeof window.innerWidth !== [][[]] + "" && window.innerWidth !== null && window.innerWidth !== 0) {
            var td_BG = document.documentElement.clientWidth / window.innerWidth;
            td_jf.distance.val += Math.abs(td_BG);
        }
    }
    function td_PA(td_x) {
        if (typeof td_x !== ((typeof (td_0b.tdz_328aa39427ce4cf3a9c2ea65f63d97fe) !== "undefined" && typeof (td_0b.tdz_328aa39427ce4cf3a9c2ea65f63d97fe.td_f) !== "undefined") ? (td_0b.tdz_328aa39427ce4cf3a9c2ea65f63d97fe.td_f(45, 6)) : null) || td_x === null) {
            td_2O(td_By, tmx_mousewheel, td_PA);
            return;
        }
        var td_DM = td_jT === ((typeof (td_0b.tdz_328aa39427ce4cf3a9c2ea65f63d97fe) !== "undefined" && typeof (td_0b.tdz_328aa39427ce4cf3a9c2ea65f63d97fe.td_f) !== "undefined") ? (td_0b.tdz_328aa39427ce4cf3a9c2ea65f63d97fe.td_f(164, 10)) : null) ? -1 / 40 * td_x.wheelDelta : td_x.deltaY || td_x.detail;
        var td_el = td_E0();
        td_jf.distance.val += Math.abs(td_DM);
        if (td_jf.event1 === null) {
            td_jf.event1 = {
                y: td_DM,
                t: td_el
            };
            td_jf.reversal.val = 0;
        }
        if (td_jf.event1.y * td_DM < 0) {
            td_jf.reversal.val += 1;
        }
        td_jf.event1 = {
            y: td_DM,
            t: td_el
        };
        if (td_hH > (td_el - td_TZ)) {
            return;
        }
        td_TZ = td_el;
        if (typeof td_x.pageX !== [][[]] + "") {
            td_f7(td_x.pageX, td_x.pageY, td_x.button, td_HV.roll, null);
        } else {
            td_f7(td_x.clientX, td_x.clientY, td_x.button, td_HV.roll, null);
        }
    }
    function td_Xl(td_x) {
        if (typeof td_x !== ((typeof (td_0b.tdz_328aa39427ce4cf3a9c2ea65f63d97fe) !== "undefined" && typeof (td_0b.tdz_328aa39427ce4cf3a9c2ea65f63d97fe.td_f) !== "undefined") ? (td_0b.tdz_328aa39427ce4cf3a9c2ea65f63d97fe.td_f(45, 6)) : null) || td_x === null) {
            td_2O(td_By, td_5x, td_Xl);
            return;
        }
        if (td_rn > 0) {
            var td_tX = (td_E0() - td_U0) - td_rn;
            td_nd += td_tX;
            td_f7(td_x.clientX, td_x.clientY, null, td_HV.fidle, null);
            td_Hz.push([td_j8, td_tX]);
            td_j8 = "";
            td_rn = 0;
        }
    }
    function td_hr(td_x) {
        if (typeof td_x !== ((typeof (td_0b.tdz_328aa39427ce4cf3a9c2ea65f63d97fe) !== "undefined" && typeof (td_0b.tdz_328aa39427ce4cf3a9c2ea65f63d97fe.td_f) !== "undefined") ? (td_0b.tdz_328aa39427ce4cf3a9c2ea65f63d97fe.td_f(45, 6)) : null) || td_x === null) {
            td_2O(td_By, td_0x, td_hr);
            return;
        }
        var td_hv = td_x.relatedTarget || td_x.toElement;
        if ((!td_hv || td_hv.nodeName === ((typeof (td_0b.tdz_328aa39427ce4cf3a9c2ea65f63d97fe) !== "undefined" && typeof (td_0b.tdz_328aa39427ce4cf3a9c2ea65f63d97fe.td_f) !== "undefined") ? (td_0b.tdz_328aa39427ce4cf3a9c2ea65f63d97fe.td_f(174, 4)) : null)) && typeof td_x.clientX !== [][[]] + "" && typeof td_x.clientY !== [][[]] + "" && td_NX(td_x.clientX, td_x.clientY)) {
            td_f7(td_x.clientX, td_x.clientY, null, td_HV.idle, null);
            td_rn = (td_E0() - td_U0);
            td_zf += 1;
            if (td_vJ !== null) {
                if (!td_Y8(td_x)) {
                    if (typeof td_mo[td_vJ.ident] === [][[]] + "") {
                        var td_iP = td_IW(td_x);
                        var td_CT = td_iP[td_tJ];
                        var td_hz = td_iP[td_IF];
                        var td_Qr = td_iP[td_f0];
                        td_mo[td_vJ.ident] = td_m1();
                        td_mo[td_vJ.ident].TYPE = td_Qr;
                        td_eN(td_Qr, td_CT, td_hz, null);
                    }
                    td_mo[td_vJ.ident].OP = true;
                }
                td_vJ = null;
            }
        }
    }
    function td_Vv(td_Ti, td_tC) {
        return Math.max(td_Ti, td_tC) - Math.min(td_Ti, td_tC);
    }
    function td_c0() {
        var td_xK = td_kI.length;
        if (2 > td_xK) {
            return [0, 0];
        }
        var td_LZ = {};
        var td_nV = {};
        var td_WA = 1;
        var td_xt;
        for (; td_WA < td_xK; ++td_WA) {
            td_xt = td_Vv(td_kI[td_WA].x, td_kI[(td_WA - 1)].x);
            if (!td_LZ.hasOwnProperty(td_xt)) {
                td_LZ[td_xt] = 1;
            } else {
                td_LZ[td_xt] = td_LZ[td_xt] + 1;
            }
            td_xt = td_Vv(td_kI[td_WA].y, td_kI[(td_WA - 1)].y);
            if (!td_nV.hasOwnProperty(td_xt)) {
                td_nV[td_xt] = 1;
            } else {
                td_nV[td_xt] = td_nV[td_xt] + 1;
            }
        }
        var td_F9 = 0;
        for (var td_ur in td_LZ) {
            if (td_LZ[td_ur] > td_jk) {
                td_F9 += 1;
            }
        }
        var td_Jj = 0;
        for (var td_ur in td_nV) {
            if (td_nV[td_ur] > td_jk) {
                td_Jj += 1;
            }
        }
        return [td_F9, td_Jj];
    }
    function td_oY() {
        var td_cA = td_dr(td_Fe.event3.x, td_Fe.event3.y, td_Fe.event1.x, td_Fe.event1.y);
        if (td_cA === 0 || td_Fe.distance.val === 0 || td_cA > td_Fe.distance.val) {
            td_Fe.curviness.val = 0;
        } else {
            td_Fe.curviness.val = td_Fe.distance.val / td_cA;
        }
        td_bC(td_Fe.distance);
        td_bC(td_Fe.velocity);
        td_bC(td_Fe.inflexion);
        td_bC(td_Fe.curviness);
        var td_Ya = td_SA(td_Fe.segmentSpotTime);
        td_TU.segmentCount += td_Ya[0];
        var td_Dr = td_jM(td_Ya[1]);
        td_TU.motionsCount += td_Dr[0];
        if (td_TU.meanMotions === 0 && td_TU.motionsCount !== 0) {
            td_TU.meanMotions = td_Dr[1];
        } else {
            if (td_TU.motionsCount !== 0) {
                td_TU.meanMotions = td_Pz(td_TU.meanMotions, td_Dr[1], td_TU.motionsCount);
            }
        }
        var td_dZ = td_c0();
        if (td_dZ[0] > 0) {
            td_Fe.discrete.x = td_dZ[0];
        }
        if (td_dZ[1] > 0) {
            td_Fe.discrete.y = td_dZ[1];
        }
        td_Fe.velocitySamples = [td_Fe.velocitySamples[(td_Fe.velocitySamples.length - 1)]];
        td_Fe.total_displacement = td_MS();
        td_Fe.distance.total += td_Fe.distance.val;
        td_Fe.distance.val = 0;
        td_Fe.velocity.val = 0;
        td_Fe.inflexion.val = 0;
        td_Fe.event1 = null;
        td_Fe.event2 = null;
        td_Fe.event3 = null;
        td_Fe.angle = 0;
        td_Fe.change = 0;
        td_Fe.segmentSpotTime = [];
    }
    function td_uN() {
        td_bC(td_jf.distance);
        td_bC(td_jf.reversal);
        td_jf.distance.total += td_jf.distance.val;
        td_jf.distance.val = 0;
        td_jf.reversal.val = 0;
        td_jf.event1 = null;
    }
    function td_E0() {
        var td_jg = Number.NaN;
        var td_E3 = td_p2;
        while (isNaN(td_jg) && --td_E3 > 0) {
            td_jg = td_p();
        }
        if (0 >= td_E3) {
            return 0;
        }
        return td_jg;
    }
    function td_SA(td_H5) {
        if (2 > td_H5.length) {
            return [0, []];
        }
        var td_pD = td_H5.length;
        var td_j9 = 0;
        var td_PE = [];
        for (var td_rA = 1; td_rA < td_pD; ++td_rA) {
            var td_yS = td_H5[(td_rA - 1)];
            var td_v3 = td_H5[td_rA];
            var td_vW = td_v3 - td_yS;
            if (td_iC > td_vW) {
                td_j9 += 1;
                td_PE.push([td_yS, td_v3, td_vW]);
            }
        }
        return [td_j9, td_PE];
    }
    function td_jM(td_eF) {
        if (2 > td_eF.length) {
            return [0, 0];
        }
        var td_lP = 0;
        var td_fI = 1;
        var td_Jm = 1;
        var td_yJ = 0;
        var td_Ke = 0;
        var td_bN = 0;
        var td_MX = td_eF.length - 1;
        var td_nX = td_eF[0][td_lP] + td_iC;
        var td_RM = 0;
        for (; td_RM < td_MX; ++td_RM) {
            if (td_nX > td_eF[td_RM][td_fI]) {
                td_bN = Math.max((td_eF[td_RM][td_lP]), (td_eF[td_Ke][td_fI])) - Math.min((td_eF[td_RM][td_lP]), (td_eF[td_Ke][td_fI]));
                td_yJ += td_bN;
                td_nX = td_eF[td_RM][td_lP] + td_iC;
                td_Jm += 1;
                td_Ke = td_RM;
            }
        }
        if (td_Ke !== 0) {
            td_Jm += 1;
        }
        td_bN = Math.max((td_eF[td_RM][td_lP]), (td_eF[td_Ke][td_fI])) - Math.min((td_eF[td_RM][td_lP]), (td_eF[td_Ke][td_fI]));
        td_yJ += td_bN;
        var td_Jq = td_yJ / td_Jm;
        return [td_Jm, td_Jq];
    }
    function td_vd() {
        return (typeof td_vg !== [][[]] + "" && td_vg !== null && typeof td_vg.x !== [][[]] + "" && typeof td_vg.y !== [][[]] + "");
    }
    function td_wh() {
        return (typeof td_o0 !== [][[]] + "" && td_o0 !== null && typeof td_o0.x !== [][[]] + "" && typeof td_o0.y !== [][[]] + "");
    }
    function td_W8() {
        return (td_vg.x === td_o0.x && td_vg.y === td_o0.y);
    }
    function td_MS() {
        if (!td_vd() || !td_wh() || td_W8()) {
            return 0;
        }
        var td_J7 = td_dr(td_vg.x, td_vg.y, td_o0.x, td_o0.y);
        return td_0b.toFixed(td_J7, td_ms);
    }
    function td_K3() {
        if (window && window.innerWidth && window.innerHeight) {
            td_WF = window.innerWidth;
            td_PY = window.innerHeight;
        } else {
            if (document && document.documentElement && document.documentElement.clientWidth && document.documentElement.clientHeight) {
                td_WF = document.documentElement.clientWidth;
                td_PY = document.documentElement.clientHeight;
            } else {
                if (document && document.body && document.body.clientWidth && document.body.clientHeight) {
                    td_WF = document.body.clientWidth;
                    td_PY = document.body.clientHeight;
                } else {
                    if (screen && screen.width && screen.height) {
                        td_WF = screen.width;
                        td_PY = screen.height;
                    } else {
                        if (window && window.screen && window.screen.width && window.screen.height) {
                            td_WF = window.screen.width;
                            td_PY = window.screen.height;
                        }
                    }
                }
            }
        }
    }
    function td_NX(td_LQ, td_hp) {
        if (!td_yv) {
            return true;
        }
        if (td_LQ < 0 || td_LQ > td_WF) {
            return true;
        }
        if (td_hp < 0 || td_hp > td_PY) {
            return true;
        }
        return false;
    }
    function td_Q3() {
        return td_0Z.td_2k !== ((typeof (td_0b.tdz_328aa39427ce4cf3a9c2ea65f63d97fe) !== "undefined" && typeof (td_0b.tdz_328aa39427ce4cf3a9c2ea65f63d97fe.td_f) !== "undefined") ? (td_0b.tdz_328aa39427ce4cf3a9c2ea65f63d97fe.td_f(178, 8)) : null) && td_0Z.td_1t !== ((typeof (td_0b.tdz_328aa39427ce4cf3a9c2ea65f63d97fe) !== "undefined" && typeof (td_0b.tdz_328aa39427ce4cf3a9c2ea65f63d97fe.td_f) !== "undefined") ? (td_0b.tdz_328aa39427ce4cf3a9c2ea65f63d97fe.td_f(178, 8)) : null);
    }
    function td_K2() {
        return td_vp;
    }
    function td_Da() {
        return td_zf;
    }
    function td_FG() {
        return td_nd;
    }
    function td_HL() {
        td_kA.length = 0;
    }
    function td_C2() {
        return {
            "\x6d_\x62\x61\x73\x65": td_U0,
            "\x56\x45\x52\x53\x49\x4f\x4e": td_hU,
            "\x50\x52\x45\x43\x49\x53\x49\x4f\x4e": td_ms,
            "\x6d_\x6d\x6f\x76\x65": td_Fe,
            "\x6d_\x6d\x6f\x76\x65_\x73\x74\x61\x74\x69\x63": td_TU,
            "\x6d_\x77\x68\x65\x65\x6c": td_jf,
            "\x6d_\x62\x75\x74\x74\x6f\x6e": td_lx,
            "\x6d_\x73\x74\x61\x74": td_mo,
            "\x67\x65\x74\x53\x6b\x69\x70\x70\x65\x64\x55\x70\x64\x61\x74\x65\x43\x6f\x75\x6e\x74": td_K2,
            "\x67\x65\x74\x4f\x66\x66\x53\x63\x72\x65\x65\x6e\x43\x6f\x75\x6e\x74": td_Da,
            "\x67\x65\x74\x4f\x66\x66\x53\x63\x72\x65\x65\x6e\x54\x69\x6d\x65": td_FG,
            "\x6d_\x6d\x6f\x75\x73\x65_\x6f\x66\x66_\x70\x61\x67\x65": td_Hz,
            "\x69\x73\x49\x6e\x69\x74\x69\x61\x6c\x4d\x6f\x76\x65\x50\x72\x65\x73\x65\x6e\x74": td_vd,
            "\x69\x73\x4c\x61\x73\x74\x4d\x6f\x76\x65\x50\x72\x65\x73\x65\x6e\x74": td_wh,
            "\x69\x73\x49\x6e\x69\x74\x69\x61\x6c\x4d\x6f\x76\x65\x41\x6c\x73\x6f\x4c\x61\x73\x74\x4d\x6f\x76\x65": td_W8,
            "\x67\x65\x74\x54\x69\x6d\x65": td_E0,
            "\x75\x70\x64\x61\x74\x65\x53\x74\x72\x65\x61\x6d": td_kA,
            "\x72\x65\x73\x65\x74\x53\x74\x72\x65\x61\x6d\x55\x70\x64\x61\x74\x65": td_HL,
            "\x6d_\x64\x61\x74\x61": td_Al
        };
    }
    function td_E6() {
        try {
            if ((td_E0() - td_S4) < 500 || td_Kj) {
                return;
            }
            if (td_Fe.distance.val > 0) {
                td_oY();
                td_W3 = true;
            }
            if (td_jf.distance.val > 0) {
                td_uN();
                td_W3 = true;
            }
            if (td_W3) {
                var td_t8 = td_WI();
                td_W3 = false;
                td_S4 = td_E0();
                if (td_t8) {
                    td_Kj = true;
                    td_cR();
                }
            } else {
                td_vp += 1;
            }
        } catch (td_SO) {}
    }
    this.init = function() {
        td_K3();
        td_By = td_0b.td_4a(td_2u).document;
        td_3h(td_By, td_5x, td_Xl);
        td_3h(td_By, td_0x, td_hr);
        if (typeof window.PointerEvent !== [][[]] + "" && window.PointerEvent !== null) {
            td_3h(td_By, td_C, td_pZ);
            td_3h(td_By, td_l, td_Av);
            td_3h(td_By, td_n, td_gl);
            td_3h(td_By, td_n, td_SC);
            td_3h(td_By, td_C, td_Uz);
            td_3h(td_By, td_l, td_Sx);
        } else {
            td_uk.ptype = ((typeof (td_0b.tdz_328aa39427ce4cf3a9c2ea65f63d97fe) !== "undefined" && typeof (td_0b.tdz_328aa39427ce4cf3a9c2ea65f63d97fe.td_f) !== "undefined") ? (td_0b.tdz_328aa39427ce4cf3a9c2ea65f63d97fe.td_f(149, 2)) : null);
            td_3h(td_By, td_2X, td_rs);
            td_3h(td_By, td_2C, td_y9);
            td_3h(td_By, td_4k, td_hB);
            td_3h(td_By, td_4k, td_SC);
            td_3h(td_By, td_2X, td_Uz);
            td_3h(td_By, td_2C, td_Sx);
        }
        td_J(td_By, td_1q, td_YL, td_Wy, true);
        if (td_jT) {
            td_Q(td_By, td_jT, td_PA, true);
        }
        td_J(window, td_6L, td_cR, td_Wy);
        td_J(window, td_4M, td_cR, td_Wy);
        td_yv = td_Q3();
        if (td_AY === null) {
            td_mF = setInterval(td_E6, td_IB);
        } else {
            td_mF = td_AY(td_E6);
        }
        td_eX = setTimeout(td_cR, td_ey);
    }
    ;
    function td_rF(td_Uu) {
        td_mF = td_Uu;
    }
    function td_cR() {
        try {
            if ((td_AY === null && td_mF !== null) || (td_AY !== null && td_jt === 0)) {
                clearInterval(td_mF);
                td_mF = null;
            } else {
                if (td_AY) {
                    clearTimeout(td_mF);
                }
            }
            if (td_eX) {
                clearTimeout(td_eX);
                td_eX = null;
            }
            td_2O(td_By, td_5x, td_Xl);
            td_2O(td_By, td_0x, td_hr);
            if (typeof window.PointerEvent !== [][[]] + "" && window.PointerEvent !== null) {
                td_2O(td_By, td_C, td_pZ);
                td_2O(td_By, td_l, td_Av);
                td_2O(td_By, td_n, td_gl);
                td_2O(td_By, td_n, td_SC);
                td_2O(td_By, td_C, td_Uz);
                td_2O(td_By, td_l, td_Sx);
            } else {
                td_2O(td_By, td_2X, td_rs);
                td_2O(td_By, td_2C, td_y9);
                td_2O(td_By, td_4k, td_hB);
                td_2O(td_By, td_4k, td_SC);
                td_2O(td_By, td_2X, td_Uz);
                td_2O(td_By, td_2C, td_Sx);
            }
            td_X(td_By, td_1q, td_YL, td_Wy, true);
            if (td_jT) {
                td_c(td_By, td_jT, td_PA, true);
            }
            td_X(window, td_6L, td_cR, td_Wy);
            td_X(window, td_4M, td_cR, td_Wy);
        } catch (td_OZ) {}
    }
    if (typeof encodeURIComponent === [][[]] + "") {
        return;
    }
    if (typeof td_3q !== [][[]] + "" && td_3q !== null && typeof td_3q.set !== [][[]] + "" && td_3q.set !== null) {
        td_oC = true;
        td_Nh = td_3q.getPointerpressFillType();
    } else {}
    if (typeof td_4A !== [][[]] + "" && td_4A !== null) {
        var td_y8 = [td_IB, td_rF];
        var td_AL = new td_4A(td_y8);
        td_jt = td_AL[0];
        td_AY = td_AL[1];
    }
    var td_CO = [];
    td_CO[td_0b.mouse.VERSION_REF] = td_hU;
    td_CO[td_0b.mouse.BASE_HANDLE_REF] = this;
    td_CO[td_0b.mouse.LEGACY_REPORT_REF] = null;
    td_CO[td_0b.mouse.BHS_REPORT_REF] = null;
    td_CO[td_0b.mouse.MAX_SIZE_ANALYTICS_REF] = td_pp;
    td_CO[td_0b.mouse.MAX_SIZE_STAT_REF] = td_AB;
    td_CO[td_0b.mouse.MAX_SIZE_RAW_REF] = td_GY;
    td_CO[td_0b.mouse.MAX_SIZE_MOUSE_OFF_PAGE_REF] = td_lz;
    td_CO[td_0b.mouse.HELPERS_REF] = td_C2();
    var td_uo = null;
    if (typeof td_4f !== [][[]] + "" && td_4f !== null) {
        td_uo = td_4f(td_CO);
        td_CO[td_0b.mouse.LEGACY_REPORT_REF] = (td_uo) ? td_uo : null;
    }
    if (typeof td_1k !== [][[]] + "" && td_1k !== null) {
        td_uo = td_1k(td_CO);
        td_CO[td_0b.mouse.BHS_REPORT_REF] = (td_uo) ? td_uo : null;
    }
    if (td_CO[td_0b.mouse.LEGACY_REPORT_REF] === null && td_CO[td_0b.mouse.BHS_REPORT_REF] === null) {
        return;
    }
    if (typeof td_NV === [][[]] + "" || td_NV === null) {
        return;
    }
    if (typeof td_2q === [][[]] + "" || td_2q === null) {
        return;
    }
    var td_IZ = td_2q(td_CO);
    if (typeof td_IZ === [][[]] + "" || td_IZ === null) {
        return;
    }
    td_WI = td_IZ[0];
    if (typeof td_WI === [][[]] + "" || td_WI === null) {
        return;
    }
    if (typeof td_5Z !== [][[]] + "" && td_5Z !== null) {
        td_YU = td_5Z();
        if (typeof td_YU !== ((typeof (td_0b.tdz_328aa39427ce4cf3a9c2ea65f63d97fe) !== "undefined" && typeof (td_0b.tdz_328aa39427ce4cf3a9c2ea65f63d97fe.td_f) !== "undefined") ? (td_0b.tdz_328aa39427ce4cf3a9c2ea65f63d97fe.td_f(45, 6)) : null) || td_YU === null) {
            td_YU = null;
        } else {
            td_YU = td_YU[3];
        }
    } else {}
    this.init();
}
td_0b.tdz_aee7b31e48c24eaf881af2930a23bfc5 = new td_0b.td_6D("\x61\x65\x65\x37\x62\x33\x31\x65\x34\x38\x63\x32\x34\x65\x61\x66\x38\x38\x31\x61\x66\x32\x39\x33\x30\x61\x32\x33\x62\x66\x63\x35\x30\x37\x30\x34\x30\x39\x34\x34\x30\x37\x35\x32\x34\x31\x31\x35\x35\x38\x35\x31\x30\x30\x35\x33\x34\x30\x30\x63\x30\x65\x30\x38\x31\x37\x34\x30\x31\x63\x31\x32\x30\x65\x35\x64\x35\x61\x35\x38\x34\x37\x30\x30\x34\x34\x35\x36\x34\x66\x30\x30\x30\x66\x35\x34\x31\x32\x30\x64\x30\x34\x34\x37\x31\x32\x35\x66\x35\x38\x30\x36\x35\x35\x34\x63\x30\x61\x35\x64\x35\x61\x34\x61\x30\x37\x31\x33\x34\x63\x34\x64\x34\x33\x30\x34\x31\x35\x34\x32\x35\x35\x35\x32\x34\x33\x30\x39\x35\x33\x34\x33\x31\x32\x30\x61\x30\x61\x35\x36\x30\x30\x31\x31\x30\x63\x35\x38\x30\x63\x31\x63\x34\x39\x34\x38\x35\x39\x34\x38\x30\x66\x35\x33\x34\x64\x30\x30\x31\x33\x35\x34\x35\x39\x34\x38\x34\x31\x30\x64\x30\x66\x35\x31\x35\x38\x34\x37\x35\x39\x30\x65\x35\x63\x31\x63\x30\x33\x31\x35\x31\x62\x35\x34\x31\x31\x31\x35\x30\x39\x35\x65\x30\x31\x35\x32\x34\x35\x30\x63\x35\x62\x35\x36\x34\x63\x34\x32\x35\x30\x30\x33\x35\x39\x34\x38\x30\x38\x31\x37\x35\x64\x30\x30\x31\x32\x35\x37\x34\x62\x34\x35\x35\x39\x30\x35\x35\x37\x35\x63\x34\x64\x31\x37\x31\x36\x35\x63\x30\x32\x30\x65\x31\x31\x35\x65\x30\x66\x35\x36\x35\x30\x31\x35\x34\x34\x35\x34\x30\x61\x35\x31\x35\x35\x31\x31\x30\x38\x30\x39\x35\x36\x31\x37\x34\x39\x34\x63\x31\x37\x34\x37\x35\x30\x35\x30\x35\x62\x31\x35\x35\x62\x35\x65\x30\x37\x31\x36\x30\x66\x35\x34\x31\x38\x30\x30\x31\x37\x35\x65\x30\x66\x35\x32\x35\x36\x30\x30\x31\x62\x34\x30\x34\x65\x35\x66\x35\x35\x30\x36\x31\x31\x30\x37\x35\x31\x35\x36\x34\x35\x30\x38\x30\x62\x35\x33\x35\x65\x35\x36\x31\x66\x31\x39\x31\x66\x34\x32\x31\x37\x30\x66\x30\x30\x35\x65\x31\x35\x30\x63\x30\x38\x35\x32\x30\x33\x34\x33\x34\x31\x30\x39\x35\x64\x35\x62\x30\x32\x34\x36\x35\x64\x30\x61\x30\x66\x34\x39\x34\x30\x31\x35\x35\x35\x30\x38\x31\x34\x35\x37\x35\x61\x34\x37\x35\x66\x31\x33\x35\x33\x34\x33\x31\x32\x30\x61\x30\x61\x35\x36\x30\x30\x31\x31\x30\x63\x35\x38\x30\x63\x31\x63\x34\x37\x30\x62\x35\x30\x31\x36\x31\x31\x35\x63\x31\x39\x31\x37\x30\x34\x30\x37\x35\x34\x34\x38\x35\x64\x30\x30\x31\x66\x35\x37\x34\x62\x31\x65\x35\x61\x30\x30\x34\x34\x35\x32\x31\x31\x30\x35\x31\x31\x35\x63\x31\x31\x31\x31\x35\x30\x31\x39\x35\x32\x35\x32\x34\x31\x31\x35\x35\x38\x35\x31\x30\x30\x35\x33\x34\x30\x30\x63\x30\x65\x30\x38\x31\x37\x34\x30\x31\x63\x31\x37\x30\x61\x35\x31\x31\x34\x34\x33\x35\x63\x31\x34\x35\x35\x35\x61\x30\x63\x30\x37\x31\x33\x34\x35\x30\x64\x30\x63\x30\x36\x35\x36\x31\x36\x35\x61\x35\x65\x30\x62\x31\x62\x34\x30\x34\x65\x35\x36\x35\x31\x31\x33\x30\x30\x30\x61\x34\x65\x34\x61\x34\x39\x30\x38\x30\x62\x35\x33\x35\x65\x35\x36\x31\x66\x31\x32\x34\x34\x35\x34\x34\x66\x31\x65\x30\x65\x35\x39\x30\x38\x30\x38\x30\x34\x35\x30\x30\x37\x31\x63\x34\x32\x31\x33\x35\x33\x31\x33\x31\x62\x35\x66\x35\x38\x30\x34\x31\x31\x31\x36\x35\x34\x35\x31\x35\x32\x30\x30\x31\x32\x35\x62\x35\x36\x35\x64\x31\x66\x31\x39\x31\x66\x35\x39\x30\x33\x31\x30\x30\x32\x31\x38\x30\x30\x31\x35\x31\x35\x35\x62\x30\x37\x34\x37\x35\x30\x31\x35\x34\x34\x35\x34\x30\x61\x35\x31\x35\x35\x31\x31\x30\x38\x30\x39\x35\x36\x31\x37\x34\x39\x34\x63\x30\x63\x35\x33\x34\x66\x35\x32\x31\x64\x31\x37\x35\x66\x35\x32\x31\x32\x31\x36\x30\x66\x35\x63\x30\x32\x30\x34\x31\x31\x35\x65\x30\x64\x35\x64\x31\x65\x31\x64\x31\x39\x35\x32\x30\x32\x34\x34\x35\x35\x34\x38\x30\x33\x30\x33\x35\x39\x35\x36\x36\x32\x30\x39\x30\x39\x35\x31\x35\x32\x34\x34\x35\x31\x31\x37\x35\x37\x37\x35\x30\x65\x30\x37\x31\x30\x35\x64\x34\x66\x33\x36\x30\x64\x35\x38\x30\x31\x35\x38\x34\x36\x30\x34\x34\x32\x35\x64\x32\x35\x35\x65\x35\x35\x31\x36\x30\x39\x30\x37\x35\x34\x34\x66\x35\x30\x31\x38\x31\x35\x30\x34\x31\x35\x30\x33\x31\x63\x35\x33\x30\x33\x31\x66\x35\x32\x34\x32\x31\x35\x35\x30\x31\x33\x31\x36\x30\x63\x35\x38\x30\x63\x34\x34\x35\x63\x31\x35\x35\x38\x35\x39\x31\x61\x35\x37\x34\x36\x34\x62\x30\x65\x30\x35\x34\x30\x36\x38\x37\x35\x32\x37\x34\x38\x34\x32\x35\x64\x35\x35\x37\x33\x31\x35\x34\x30\x35\x66\x32\x33\x30\x35\x31\x31\x35\x61\x33\x31\x32\x31\x32\x33\x31\x39\x33\x32\x37\x37\x37\x37\x34\x62\x30\x35\x31\x36\x35\x32\x30\x36\x31\x61\x35\x35\x35\x36\x34\x38\x30\x38\x31\x37\x35\x64\x30\x30\x31\x32\x35\x37\x34\x62\x36\x32\x34\x35\x30\x38\x35\x31\x35\x38\x33\x36\x30\x66\x30\x65\x35\x30\x34\x66\x33\x34\x31\x30\x35\x65\x30\x31\x35\x38\x36\x35\x30\x63\x35\x39\x35\x64\x33\x30\x36\x35\x37\x37\x31\x31\x30\x64\x34\x38\x36\x62\x36\x66\x37\x32\x31\x35\x30\x61\x34\x31\x34\x64\x34\x31\x35\x39\x30\x66\x35\x35\x31\x64\x35\x61\x34\x38\x35\x34\x37\x34\x30\x32\x31\x31\x30\x63\x34\x31\x30\x37\x36\x62\x37\x65\x30\x37\x35\x65\x35\x64\x30\x30\x34\x36\x34\x34\x30\x39\x31\x34\x30\x31\x35\x31\x35\x36\x36\x65\x30\x37\x30\x61\x35\x33\x34\x61\x35\x62\x36\x65\x31\x31\x35\x65\x34\x36\x30\x35\x30\x66\x30\x64\x36\x61\x31\x36\x30\x63\x30\x62\x35\x33\x30\x64\x34\x34\x34\x32\x33\x61\x35\x39\x35\x64\x30\x37\x35\x62\x35\x35\x33\x61\x31\x31\x30\x61\x35\x39\x34\x31\x35\x34\x31\x33\x33\x38\x34\x32\x35\x35\x34\x36\x35\x37\x30\x38\x35\x63\x36\x63\x30\x33\x30\x32\x30\x63\x35\x37\x30\x34\x33\x61\x30\x34\x35\x34\x31\x30\x35\x63\x35\x33\x30\x34\x34\x30\x36\x36\x31\x33\x35\x65\x34\x31\x30\x32\x30\x38\x30\x38\x36\x37\x34\x39\x34\x34\x30\x38\x30\x35\x35\x39\x34\x64\x35\x61\x35\x64\x30\x34\x36\x63\x34\x33\x30\x65\x31\x33\x30\x34\x35\x63\x30\x66\x33\x61\x31\x36\x35\x66\x30\x64\x35\x30\x35\x61\x31\x32\x35\x35\x34\x65\x30\x36\x36\x63\x34\x34\x30\x39\x31\x34\x30\x31\x35\x31\x35\x36\x36\x65\x31\x33\x30\x33\x35\x33\x35\x35\x34\x33\x35\x63\x30\x30\x34\x62\x35\x36\x31\x30\x33\x38\x31\x33\x35\x39\x31\x34\x30\x32\x30\x63\x35\x39\x33\x64\x34\x35\x35\x64\x30\x36\x36\x62\x34\x38\x30\x66\x35\x33\x34\x64\x30\x30\x31\x33\x33\x38\x34\x38\x35\x34\x34\x34\x30\x36\x30\x66\x35\x63\x36\x36\x35\x37\x35\x35\x31\x37\x35\x33\x35\x66\x31\x34\x31\x34\x33\x64\x34\x35\x30\x64\x31\x30\x30\x32\x35\x65\x30\x63\x36\x63\x34\x32\x31\x33\x35\x33\x36\x37\x31\x35\x35\x62\x35\x31\x31\x32\x30\x34\x31\x34\x36\x36\x34\x38\x35\x64\x31\x34\x30\x31\x35\x62\x35\x37\x36\x63\x35\x61\x30\x30\x34\x34\x35\x32\x33\x63");
function td_UW(td_NQ) {
    var td_e0 = td_NQ.constructor == String ? [td_NQ] : td_NQ;
    var td_vf = ((typeof (td_0b.tdz_aee7b31e48c24eaf881af2930a23bfc5) !== "undefined" && typeof (td_0b.tdz_aee7b31e48c24eaf881af2930a23bfc5.td_f) !== "undefined") ? (td_0b.tdz_aee7b31e48c24eaf881af2930a23bfc5.td_f(0, 5)) : null);
    var td_dj = ((typeof (td_0b.tdz_aee7b31e48c24eaf881af2930a23bfc5) !== "undefined" && typeof (td_0b.tdz_aee7b31e48c24eaf881af2930a23bfc5.td_f) !== "undefined") ? (td_0b.tdz_aee7b31e48c24eaf881af2930a23bfc5.td_f(0, 5)) : null);
    var td_JK;
    for (td_JK = 0; td_JK < td_e0.length; td_JK++) {
        var td_Mw = td_Vc[td_e0[td_JK]];
        if (td_Mw && td_Mw.enabledPlugin) {
            var td_z2 = td_Mw.enabledPlugin;
            if (td_z2.name) {
                td_vf = td_z2.name;
            } else {
                td_vf = Number(890830).toString(31);
            }
            td_dj = td_z2.description;
            break;
        }
    }
    return [td_vf, td_dj];
}
function td_EB() {
    var td_LD = ((typeof (td_0b.tdz_aee7b31e48c24eaf881af2930a23bfc5) !== "undefined" && typeof (td_0b.tdz_aee7b31e48c24eaf881af2930a23bfc5.td_f) !== "undefined") ? (td_0b.tdz_aee7b31e48c24eaf881af2930a23bfc5.td_f(0, 5)) : null);
    var td_Ze = td_UW([((typeof (td_0b.tdz_aee7b31e48c24eaf881af2930a23bfc5) !== "undefined" && typeof (td_0b.tdz_aee7b31e48c24eaf881af2930a23bfc5.td_f) !== "undefined") ? (td_0b.tdz_aee7b31e48c24eaf881af2930a23bfc5.td_f(5, 29)) : null), ((typeof (td_0b.tdz_aee7b31e48c24eaf881af2930a23bfc5) !== "undefined" && typeof (td_0b.tdz_aee7b31e48c24eaf881af2930a23bfc5.td_f) !== "undefined") ? (td_0b.tdz_aee7b31e48c24eaf881af2930a23bfc5.td_f(34, 24)) : null)]);
    var td_pS = td_Ze[0];
    var td_gL = td_Ze[1];
    if (td_pS !== ((typeof (td_0b.tdz_aee7b31e48c24eaf881af2930a23bfc5) !== "undefined" && typeof (td_0b.tdz_aee7b31e48c24eaf881af2930a23bfc5.td_f) !== "undefined") ? (td_0b.tdz_aee7b31e48c24eaf881af2930a23bfc5.td_f(0, 5)) : null) && td_pS !== Number(890830).toString(31) && (/Flash/i).test(td_pS)) {
        td_LD = Number(890830).toString(31);
    }
    if (td_LD === Number(890830).toString(31) && td_gL) {
        var td_Zp = /[\d][\d\,\.\s]*[rRdD]{0,1}[\d\,]*/.exec(td_gL);
        if (td_Zp) {
            td_LD = td_Zp[0];
        }
    }
    return td_LD;
}
function td_Ci() {
    var td_jz = ((typeof (td_0b.tdz_aee7b31e48c24eaf881af2930a23bfc5) !== "undefined" && typeof (td_0b.tdz_aee7b31e48c24eaf881af2930a23bfc5.td_f) !== "undefined") ? (td_0b.tdz_aee7b31e48c24eaf881af2930a23bfc5.td_f(0, 5)) : null);
    var td_sS = td_UW([((typeof (td_0b.tdz_aee7b31e48c24eaf881af2930a23bfc5) !== "undefined" && typeof (td_0b.tdz_aee7b31e48c24eaf881af2930a23bfc5.td_f) !== "undefined") ? (td_0b.tdz_aee7b31e48c24eaf881af2930a23bfc5.td_f(58, 22)) : null), ((typeof (td_0b.tdz_aee7b31e48c24eaf881af2930a23bfc5) !== "undefined" && typeof (td_0b.tdz_aee7b31e48c24eaf881af2930a23bfc5.td_f) !== "undefined") ? (td_0b.tdz_aee7b31e48c24eaf881af2930a23bfc5.td_f(80, 15)) : null)]);
    var td_SZ = td_sS[0];
    if (td_SZ !== ((typeof (td_0b.tdz_aee7b31e48c24eaf881af2930a23bfc5) !== "undefined" && typeof (td_0b.tdz_aee7b31e48c24eaf881af2930a23bfc5.td_f) !== "undefined") ? (td_0b.tdz_aee7b31e48c24eaf881af2930a23bfc5.td_f(0, 5)) : null) && td_SZ !== Number(890830).toString(31) && (/Windows.*Media.*Firefox Plugin.*/i).test(td_SZ)) {
        td_jz = Number(890830).toString(31);
    }
    return td_jz;
}
function td_Og() {
    var td_T8 = ((typeof (td_0b.tdz_aee7b31e48c24eaf881af2930a23bfc5) !== "undefined" && typeof (td_0b.tdz_aee7b31e48c24eaf881af2930a23bfc5.td_f) !== "undefined") ? (td_0b.tdz_aee7b31e48c24eaf881af2930a23bfc5.td_f(0, 5)) : null);
    var td_YD = td_UW([((typeof (td_0b.tdz_aee7b31e48c24eaf881af2930a23bfc5) !== "undefined" && typeof (td_0b.tdz_aee7b31e48c24eaf881af2930a23bfc5.td_f) !== "undefined") ? (td_0b.tdz_aee7b31e48c24eaf881af2930a23bfc5.td_f(95, 15)) : null)]);
    var td_NE = td_YD[0];
    var td_kI = td_YD[1];
    if (td_NE !== ((typeof (td_0b.tdz_aee7b31e48c24eaf881af2930a23bfc5) !== "undefined" && typeof (td_0b.tdz_aee7b31e48c24eaf881af2930a23bfc5.td_f) !== "undefined") ? (td_0b.tdz_aee7b31e48c24eaf881af2930a23bfc5.td_f(0, 5)) : null) && td_NE !== Number(890830).toString(31) && (/Adobe Acrobat/i).test(td_NE)) {
        td_T8 = Number(890830).toString(31);
    }
    if (td_T8 === Number(890830).toString(31) && td_kI) {
        var td_vC = /[\d][\d\.\_,-]*/.exec(td_kI);
        if (td_vC) {
            td_T8 = td_vC[0];
        } else {
            td_T8 = ((typeof (td_0b.tdz_aee7b31e48c24eaf881af2930a23bfc5) !== "undefined" && typeof (td_0b.tdz_aee7b31e48c24eaf881af2930a23bfc5.td_f) !== "undefined") ? (td_0b.tdz_aee7b31e48c24eaf881af2930a23bfc5.td_f(110, 9)) : null);
        }
    }
    return td_T8;
}
function td_FF() {
    var td_iM = ((typeof (td_0b.tdz_aee7b31e48c24eaf881af2930a23bfc5) !== "undefined" && typeof (td_0b.tdz_aee7b31e48c24eaf881af2930a23bfc5.td_f) !== "undefined") ? (td_0b.tdz_aee7b31e48c24eaf881af2930a23bfc5.td_f(0, 5)) : null);
    if (navigator.platform && (/linux/i).test(navigator.platform)) {
        td_iM = ((typeof (td_0b.tdz_aee7b31e48c24eaf881af2930a23bfc5) !== "undefined" && typeof (td_0b.tdz_aee7b31e48c24eaf881af2930a23bfc5.td_f) !== "undefined") ? (td_0b.tdz_aee7b31e48c24eaf881af2930a23bfc5.td_f(0, 5)) : null);
    } else {
        var td_C2 = td_UW([((typeof (td_0b.tdz_aee7b31e48c24eaf881af2930a23bfc5) !== "undefined" && typeof (td_0b.tdz_aee7b31e48c24eaf881af2930a23bfc5.td_f) !== "undefined") ? (td_0b.tdz_aee7b31e48c24eaf881af2930a23bfc5.td_f(119, 15)) : null), ((typeof (td_0b.tdz_aee7b31e48c24eaf881af2930a23bfc5) !== "undefined" && typeof (td_0b.tdz_aee7b31e48c24eaf881af2930a23bfc5.td_f) !== "undefined") ? (td_0b.tdz_aee7b31e48c24eaf881af2930a23bfc5.td_f(134, 29)) : null), ((typeof (td_0b.tdz_aee7b31e48c24eaf881af2930a23bfc5) !== "undefined" && typeof (td_0b.tdz_aee7b31e48c24eaf881af2930a23bfc5.td_f) !== "undefined") ? (td_0b.tdz_aee7b31e48c24eaf881af2930a23bfc5.td_f(163, 16)) : null), ((typeof (td_0b.tdz_aee7b31e48c24eaf881af2930a23bfc5) !== "undefined" && typeof (td_0b.tdz_aee7b31e48c24eaf881af2930a23bfc5.td_f) !== "undefined") ? (td_0b.tdz_aee7b31e48c24eaf881af2930a23bfc5.td_f(179, 17)) : null)]);
        var td_ag = td_C2[0];
        if (td_ag !== ((typeof (td_0b.tdz_aee7b31e48c24eaf881af2930a23bfc5) !== "undefined" && typeof (td_0b.tdz_aee7b31e48c24eaf881af2930a23bfc5.td_f) !== "undefined") ? (td_0b.tdz_aee7b31e48c24eaf881af2930a23bfc5.td_f(0, 5)) : null) && td_ag !== Number(890830).toString(31) && (/QuickTime.*(Plug-in|Plugin).*/i).test(td_ag)) {
            td_iM = Number(890830).toString(31);
            var td_iQ = /[\d][\d\.\_,-]*/.exec(td_ag);
            if (td_iQ) {
                td_iM = td_iQ[0];
            }
        }
    }
    return td_iM;
}
function td_J9() {
    var td_M1 = ((typeof (td_0b.tdz_aee7b31e48c24eaf881af2930a23bfc5) !== "undefined" && typeof (td_0b.tdz_aee7b31e48c24eaf881af2930a23bfc5.td_f) !== "undefined") ? (td_0b.tdz_aee7b31e48c24eaf881af2930a23bfc5.td_f(0, 5)) : null);
    var td_dm = td_UW([((typeof (td_0b.tdz_aee7b31e48c24eaf881af2930a23bfc5) !== "undefined" && typeof (td_0b.tdz_aee7b31e48c24eaf881af2930a23bfc5.td_f) !== "undefined") ? (td_0b.tdz_aee7b31e48c24eaf881af2930a23bfc5.td_f(196, 22)) : null)]);
    var td_SB = td_dm[0];
    var td_iZ = td_dm[1];
    if (td_SB !== ((typeof (td_0b.tdz_aee7b31e48c24eaf881af2930a23bfc5) !== "undefined" && typeof (td_0b.tdz_aee7b31e48c24eaf881af2930a23bfc5.td_f) !== "undefined") ? (td_0b.tdz_aee7b31e48c24eaf881af2930a23bfc5.td_f(0, 5)) : null) && td_SB !== Number(890830).toString(31) && (/Shockwave for Director/i).test(td_SB)) {
        td_M1 = Number(890830).toString(31);
    }
    if (td_M1 === Number(890830).toString(31) && td_iZ) {
        var td_Ao = /[\d][\d\.\_,-]*/.exec(td_iZ);
        if (td_Ao) {
            td_M1 = td_Ao[0];
        }
    }
    return td_M1;
}
function td_Qj() {
    var td_Wc = ((typeof (td_0b.tdz_aee7b31e48c24eaf881af2930a23bfc5) !== "undefined" && typeof (td_0b.tdz_aee7b31e48c24eaf881af2930a23bfc5.td_f) !== "undefined") ? (td_0b.tdz_aee7b31e48c24eaf881af2930a23bfc5.td_f(0, 5)) : null);
    var td_aw = td_UW([((typeof (td_0b.tdz_aee7b31e48c24eaf881af2930a23bfc5) !== "undefined" && typeof (td_0b.tdz_aee7b31e48c24eaf881af2930a23bfc5.td_f) !== "undefined") ? (td_0b.tdz_aee7b31e48c24eaf881af2930a23bfc5.td_f(218, 40)) : null)]);
    var td_Gv = td_aw[0];
    var td_Ip = td_aw[1];
    if (td_Gv !== ((typeof (td_0b.tdz_aee7b31e48c24eaf881af2930a23bfc5) !== "undefined" && typeof (td_0b.tdz_aee7b31e48c24eaf881af2930a23bfc5.td_f) !== "undefined") ? (td_0b.tdz_aee7b31e48c24eaf881af2930a23bfc5.td_f(0, 5)) : null) && td_Gv !== Number(890830).toString(31) && (/RealPlayer.*Version.*/i).test(td_Gv)) {
        td_Wc = Number(890830).toString(31);
    }
    if (td_Wc === Number(890830).toString(31) && td_Ip) {
        var td_NR = /[\d][\d\.\_,-]*/.exec(td_Ip);
        if (td_NR) {
            td_Wc = td_NR[0];
        } else {
            td_Wc = ((typeof (td_0b.tdz_aee7b31e48c24eaf881af2930a23bfc5) !== "undefined" && typeof (td_0b.tdz_aee7b31e48c24eaf881af2930a23bfc5.td_f) !== "undefined") ? (td_0b.tdz_aee7b31e48c24eaf881af2930a23bfc5.td_f(258, 3)) : null);
        }
    }
    return td_Wc;
}
function td_Ph() {
    var td_LD = ((typeof (td_0b.tdz_aee7b31e48c24eaf881af2930a23bfc5) !== "undefined" && typeof (td_0b.tdz_aee7b31e48c24eaf881af2930a23bfc5.td_f) !== "undefined") ? (td_0b.tdz_aee7b31e48c24eaf881af2930a23bfc5.td_f(0, 5)) : null);
    var td_T2 = td_UW([((typeof (td_0b.tdz_aee7b31e48c24eaf881af2930a23bfc5) !== "undefined" && typeof (td_0b.tdz_aee7b31e48c24eaf881af2930a23bfc5.td_f) !== "undefined") ? (td_0b.tdz_aee7b31e48c24eaf881af2930a23bfc5.td_f(261, 24)) : null)]);
    var td_UF = td_T2[0];
    var td_AQ = td_T2[1];
    if (td_UF !== ((typeof (td_0b.tdz_aee7b31e48c24eaf881af2930a23bfc5) !== "undefined" && typeof (td_0b.tdz_aee7b31e48c24eaf881af2930a23bfc5.td_f) !== "undefined") ? (td_0b.tdz_aee7b31e48c24eaf881af2930a23bfc5.td_f(0, 5)) : null) && td_UF !== Number(890830).toString(31) && (/VLC.*(Plug-in|Plugin).*/i).test(td_UF)) {
        td_LD = Number(890830).toString(31);
    }
    if (td_LD === Number(890830).toString(31) && td_AQ) {
        var td_sx = /(Version) ([\d][\d\.]*[a-z]*)/.exec(td_AQ);
        if (td_sx) {
            td_LD = td_sx[2];
        }
    }
    return td_LD;
}
function td_Jz() {
    var td_Qd = ((typeof (td_0b.tdz_aee7b31e48c24eaf881af2930a23bfc5) !== "undefined" && typeof (td_0b.tdz_aee7b31e48c24eaf881af2930a23bfc5.td_f) !== "undefined") ? (td_0b.tdz_aee7b31e48c24eaf881af2930a23bfc5.td_f(0, 5)) : null);
    var td_Df = td_UW([((typeof (td_0b.tdz_aee7b31e48c24eaf881af2930a23bfc5) !== "undefined" && typeof (td_0b.tdz_aee7b31e48c24eaf881af2930a23bfc5.td_f) !== "undefined") ? (td_0b.tdz_aee7b31e48c24eaf881af2930a23bfc5.td_f(285, 22)) : null)]);
    var td_QU = td_Df[0];
    var td_wa = td_Df[1];
    if (td_QU !== ((typeof (td_0b.tdz_aee7b31e48c24eaf881af2930a23bfc5) !== "undefined" && typeof (td_0b.tdz_aee7b31e48c24eaf881af2930a23bfc5.td_f) !== "undefined") ? (td_0b.tdz_aee7b31e48c24eaf881af2930a23bfc5.td_f(0, 5)) : null) && td_QU !== Number(890830).toString(31) && (/DevalVR/i).test(td_QU)) {
        td_Qd = Number(890830).toString(31);
    }
    if (td_Qd === Number(890830).toString(31) && td_wa) {
        var td_WL = /(Plugin) ([\d][\d\.\,]*)/.exec(td_wa);
        if (td_WL) {
            td_Qd = td_WL[2];
        }
    }
    return td_Qd;
}
function td_s2() {
    var td_s0 = ((typeof (td_0b.tdz_aee7b31e48c24eaf881af2930a23bfc5) !== "undefined" && typeof (td_0b.tdz_aee7b31e48c24eaf881af2930a23bfc5.td_f) !== "undefined") ? (td_0b.tdz_aee7b31e48c24eaf881af2930a23bfc5.td_f(0, 5)) : null);
    var td_fl = td_UW([((typeof (td_0b.tdz_aee7b31e48c24eaf881af2930a23bfc5) !== "undefined" && typeof (td_0b.tdz_aee7b31e48c24eaf881af2930a23bfc5.td_f) !== "undefined") ? (td_0b.tdz_aee7b31e48c24eaf881af2930a23bfc5.td_f(307, 13)) : null), ((typeof (td_0b.tdz_aee7b31e48c24eaf881af2930a23bfc5) !== "undefined" && typeof (td_0b.tdz_aee7b31e48c24eaf881af2930a23bfc5.td_f) !== "undefined") ? (td_0b.tdz_aee7b31e48c24eaf881af2930a23bfc5.td_f(320, 13)) : null)]);
    var td_tb = td_fl[0];
    var td_HJ = td_fl[1];
    if (td_tb !== ((typeof (td_0b.tdz_aee7b31e48c24eaf881af2930a23bfc5) !== "undefined" && typeof (td_0b.tdz_aee7b31e48c24eaf881af2930a23bfc5.td_f) !== "undefined") ? (td_0b.tdz_aee7b31e48c24eaf881af2930a23bfc5.td_f(0, 5)) : null) && td_tb !== Number(890830).toString(31) && (/SVG Viewer/i).test(td_tb)) {
        td_s0 = Number(890830).toString(31);
    }
    if (td_s0 === Number(890830).toString(31) && td_HJ) {
        var td_so = /[\d][\d\.]*/.exec(td_HJ);
        if (td_so) {
            td_s0 = td_so[0];
        }
    }
    return td_s0;
}
function td_Yk() {
    var td_OW = ((typeof (td_0b.tdz_aee7b31e48c24eaf881af2930a23bfc5) !== "undefined" && typeof (td_0b.tdz_aee7b31e48c24eaf881af2930a23bfc5.td_f) !== "undefined") ? (td_0b.tdz_aee7b31e48c24eaf881af2930a23bfc5.td_f(0, 5)) : null);
    var td_KE = td_UW([((typeof (td_0b.tdz_aee7b31e48c24eaf881af2930a23bfc5) !== "undefined" && typeof (td_0b.tdz_aee7b31e48c24eaf881af2930a23bfc5.td_f) !== "undefined") ? (td_0b.tdz_aee7b31e48c24eaf881af2930a23bfc5.td_f(333, 25)) : null), ((typeof (td_0b.tdz_aee7b31e48c24eaf881af2930a23bfc5) !== "undefined" && typeof (td_0b.tdz_aee7b31e48c24eaf881af2930a23bfc5.td_f) !== "undefined") ? (td_0b.tdz_aee7b31e48c24eaf881af2930a23bfc5.td_f(358, 21)) : null), ((typeof (td_0b.tdz_aee7b31e48c24eaf881af2930a23bfc5) !== "undefined" && typeof (td_0b.tdz_aee7b31e48c24eaf881af2930a23bfc5.td_f) !== "undefined") ? (td_0b.tdz_aee7b31e48c24eaf881af2930a23bfc5.td_f(379, 23)) : null)]);
    var td_Q8 = td_KE[0];
    var td_nv = td_KE[1];
    if (td_Q8 !== ((typeof (td_0b.tdz_aee7b31e48c24eaf881af2930a23bfc5) !== "undefined" && typeof (td_0b.tdz_aee7b31e48c24eaf881af2930a23bfc5.td_f) !== "undefined") ? (td_0b.tdz_aee7b31e48c24eaf881af2930a23bfc5.td_f(0, 5)) : null) && td_Q8 !== Number(890830).toString(31) && (/Java/i).test(td_Q8)) {
        td_OW = Number(890830).toString(31);
    }
    if (td_OW === Number(890830).toString(31) && td_nv) {
        var td_Fa = /[\d][\d\._]*/.exec(td_nv);
        if (td_Fa) {
            td_OW = td_Fa[0];
        }
    }
    return td_OW;
}
function td_j0(td_hn, td_WY) {
    var td_AR = null;
    var td_B7 = false;
    try {
        td_AR = new ActiveXObject(td_hn);
        td_B7 = true;
    } catch (td_Ya) {}
    if (typeof td_WY !== [][[]] + "") {
        return td_B7;
    }
    return td_AR;
}
function td_d9() {
    var td_IC = ((typeof (td_0b.tdz_aee7b31e48c24eaf881af2930a23bfc5) !== "undefined" && typeof (td_0b.tdz_aee7b31e48c24eaf881af2930a23bfc5.td_f) !== "undefined") ? (td_0b.tdz_aee7b31e48c24eaf881af2930a23bfc5.td_f(402, 29)) : null);
    var td_aw, td_O6 = null, td_sU = null, td_Js = null;
    var td_zR = 15;
    var td_I2 = 2;
    for (td_aw = td_zR; td_aw > td_I2; td_aw--) {
        td_sU = td_j0(td_IC + "." + td_aw);
        if (td_sU) {
            td_O6 = td_aw.toString();
            break;
        }
    }
    if (td_O6 === "6") {
        try {
            td_sU.AllowScriptAccess = ((typeof (td_0b.tdz_aee7b31e48c24eaf881af2930a23bfc5) !== "undefined" && typeof (td_0b.tdz_aee7b31e48c24eaf881af2930a23bfc5.td_f) !== "undefined") ? (td_0b.tdz_aee7b31e48c24eaf881af2930a23bfc5.td_f(431, 6)) : null);
        } catch (td_hO) {
            td_Js = ((typeof (td_0b.tdz_aee7b31e48c24eaf881af2930a23bfc5) !== "undefined" && typeof (td_0b.tdz_aee7b31e48c24eaf881af2930a23bfc5.td_f) !== "undefined") ? (td_0b.tdz_aee7b31e48c24eaf881af2930a23bfc5.td_f(437, 8)) : null);
        }
    } else {
        if (td_sU) {
            try {
                td_Js = td_sU.GetVariable(((typeof (td_0b.tdz_aee7b31e48c24eaf881af2930a23bfc5) !== "undefined" && typeof (td_0b.tdz_aee7b31e48c24eaf881af2930a23bfc5.td_f) !== "undefined") ? (td_0b.tdz_aee7b31e48c24eaf881af2930a23bfc5.td_f(445, 8)) : null));
                var td_I5 = /[\d][\d\,\.\s]*[rRdD]{0,1}[\d\,]*/.exec(td_Js);
                if (td_I5) {
                    td_Js = td_I5[0];
                } else {
                    td_Js = Number(890830).toString(31);
                }
            } catch (td_hO) {
                td_Js = Number(890830).toString(31);
            }
        }
    }
    if (!td_Js && td_O6) {
        td_Js = td_O6;
    }
    if (!td_Js) {
        td_Js = ((typeof (td_0b.tdz_aee7b31e48c24eaf881af2930a23bfc5) !== "undefined" && typeof (td_0b.tdz_aee7b31e48c24eaf881af2930a23bfc5.td_f) !== "undefined") ? (td_0b.tdz_aee7b31e48c24eaf881af2930a23bfc5.td_f(0, 5)) : null);
    }
    return td_Js;
}
function td_hu() {
    var td_Fv = ((typeof (td_0b.tdz_aee7b31e48c24eaf881af2930a23bfc5) !== "undefined" && typeof (td_0b.tdz_aee7b31e48c24eaf881af2930a23bfc5.td_f) !== "undefined") ? (td_0b.tdz_aee7b31e48c24eaf881af2930a23bfc5.td_f(453, 12)) : null);
    var td_do = ((typeof (td_0b.tdz_aee7b31e48c24eaf881af2930a23bfc5) !== "undefined" && typeof (td_0b.tdz_aee7b31e48c24eaf881af2930a23bfc5.td_f) !== "undefined") ? (td_0b.tdz_aee7b31e48c24eaf881af2930a23bfc5.td_f(0, 5)) : null);
    var td_io = td_j0(td_Fv);
    if (td_io) {
        td_do = td_io.versionInfo;
    }
    return td_do;
}
function td_m3() {
    var td_FV = ((typeof (td_0b.tdz_aee7b31e48c24eaf881af2930a23bfc5) !== "undefined" && typeof (td_0b.tdz_aee7b31e48c24eaf881af2930a23bfc5.td_f) !== "undefined") ? (td_0b.tdz_aee7b31e48c24eaf881af2930a23bfc5.td_f(465, 11)) : null);
    var td_uJ = ((typeof (td_0b.tdz_aee7b31e48c24eaf881af2930a23bfc5) !== "undefined" && typeof (td_0b.tdz_aee7b31e48c24eaf881af2930a23bfc5.td_f) !== "undefined") ? (td_0b.tdz_aee7b31e48c24eaf881af2930a23bfc5.td_f(476, 13)) : null);
    var td_bJ;
    var td_fv = ((typeof (td_0b.tdz_aee7b31e48c24eaf881af2930a23bfc5) !== "undefined" && typeof (td_0b.tdz_aee7b31e48c24eaf881af2930a23bfc5.td_f) !== "undefined") ? (td_0b.tdz_aee7b31e48c24eaf881af2930a23bfc5.td_f(0, 5)) : null);
    var td_NJ = td_j0(td_uJ);
    if (!td_NJ) {
        var td_eU = 10;
        var td_I5 = 1;
        for (td_bJ = td_eU; td_bJ > td_I5; td_bJ--) {
            td_NJ = td_j0(td_FV + "." + td_bJ);
            if (td_NJ) {
                td_fv = td_fv.toString();
                break;
            }
        }
        if (!td_NJ) {
            td_NJ = td_j0(td_FV + ((typeof (td_0b.tdz_aee7b31e48c24eaf881af2930a23bfc5) !== "undefined" && typeof (td_0b.tdz_aee7b31e48c24eaf881af2930a23bfc5.td_f) !== "undefined") ? (td_0b.tdz_aee7b31e48c24eaf881af2930a23bfc5.td_f(489, 2)) : null));
            if (td_NJ) {
                td_fv = ((typeof (td_0b.tdz_aee7b31e48c24eaf881af2930a23bfc5) !== "undefined" && typeof (td_0b.tdz_aee7b31e48c24eaf881af2930a23bfc5.td_f) !== "undefined") ? (td_0b.tdz_aee7b31e48c24eaf881af2930a23bfc5.td_f(491, 3)) : null);
            }
        }
    } else {
        td_fv = ((typeof (td_0b.tdz_aee7b31e48c24eaf881af2930a23bfc5) !== "undefined" && typeof (td_0b.tdz_aee7b31e48c24eaf881af2930a23bfc5.td_f) !== "undefined") ? (td_0b.tdz_aee7b31e48c24eaf881af2930a23bfc5.td_f(494, 9)) : null);
    }
    return td_fv;
}
function td_tL() {
    var td_J6 = ((typeof (td_0b.tdz_aee7b31e48c24eaf881af2930a23bfc5) !== "undefined" && typeof (td_0b.tdz_aee7b31e48c24eaf881af2930a23bfc5.td_f) !== "undefined") ? (td_0b.tdz_aee7b31e48c24eaf881af2930a23bfc5.td_f(503, 19)) : null);
    var td_oP = ((typeof (td_0b.tdz_aee7b31e48c24eaf881af2930a23bfc5) !== "undefined" && typeof (td_0b.tdz_aee7b31e48c24eaf881af2930a23bfc5.td_f) !== "undefined") ? (td_0b.tdz_aee7b31e48c24eaf881af2930a23bfc5.td_f(0, 5)) : null);
    var td_z0 = null;
    try {
        td_z0 = td_j0(td_J6);
    } catch (td_wg) {}
    if (td_z0) {
        if (td_z0.QuickTimeVersion) {
            td_oP = td_z0.QuickTimeVersion.toString(16);
            td_oP = td_oP.charAt(0) + "." + td_oP.charAt(1) + "." + td_oP.charAt(2);
        } else {
            td_oP = Number(890830).toString(31);
        }
    }
    return td_oP;
}
function td_K2() {
    var td_yP = ((typeof (td_0b.tdz_aee7b31e48c24eaf881af2930a23bfc5) !== "undefined" && typeof (td_0b.tdz_aee7b31e48c24eaf881af2930a23bfc5.td_f) !== "undefined") ? (td_0b.tdz_aee7b31e48c24eaf881af2930a23bfc5.td_f(522, 11)) : null);
    var td_Ma = ((typeof (td_0b.tdz_aee7b31e48c24eaf881af2930a23bfc5) !== "undefined" && typeof (td_0b.tdz_aee7b31e48c24eaf881af2930a23bfc5.td_f) !== "undefined") ? (td_0b.tdz_aee7b31e48c24eaf881af2930a23bfc5.td_f(0, 5)) : null), td_eS = null, td_k2;
    try {
        td_eS = td_j0(td_yP).ShockwaveVersion("");
    } catch (td_k2) {}
    if (typeof td_eS === ((typeof (td_0b.tdz_aee7b31e48c24eaf881af2930a23bfc5) !== "undefined" && typeof (td_0b.tdz_aee7b31e48c24eaf881af2930a23bfc5.td_f) !== "undefined") ? (td_0b.tdz_aee7b31e48c24eaf881af2930a23bfc5.td_f(533, 6)) : null) && td_eS.length > 0) {
        td_Ma = td_eS;
    } else {
        if (td_j0(td_yP + ((typeof (td_0b.tdz_aee7b31e48c24eaf881af2930a23bfc5) !== "undefined" && typeof (td_0b.tdz_aee7b31e48c24eaf881af2930a23bfc5.td_f) !== "undefined") ? (td_0b.tdz_aee7b31e48c24eaf881af2930a23bfc5.td_f(539, 2)) : null), 1)) {
            td_Ma = "8";
        } else {
            if (td_j0(td_yP + ((typeof (td_0b.tdz_aee7b31e48c24eaf881af2930a23bfc5) !== "undefined" && typeof (td_0b.tdz_aee7b31e48c24eaf881af2930a23bfc5.td_f) !== "undefined") ? (td_0b.tdz_aee7b31e48c24eaf881af2930a23bfc5.td_f(541, 2)) : null), 1)) {
                td_Ma = "7";
            } else {
                if (td_j0(td_yP + ((typeof (td_0b.tdz_aee7b31e48c24eaf881af2930a23bfc5) !== "undefined" && typeof (td_0b.tdz_aee7b31e48c24eaf881af2930a23bfc5.td_f) !== "undefined") ? (td_0b.tdz_aee7b31e48c24eaf881af2930a23bfc5.td_f(489, 2)) : null), 1)) {
                    td_Ma = "6";
                }
            }
        }
    }
    return td_Ma;
}
function td_4K() {
    var td_Pn = 0;
    var td_bD;
    var td_NR = ((typeof (td_0b.tdz_aee7b31e48c24eaf881af2930a23bfc5) !== "undefined" && typeof (td_0b.tdz_aee7b31e48c24eaf881af2930a23bfc5.td_f) !== "undefined") ? (td_0b.tdz_aee7b31e48c24eaf881af2930a23bfc5.td_f(0, 5)) : null);
    var td_mQ = ((typeof (td_0b.tdz_aee7b31e48c24eaf881af2930a23bfc5) !== "undefined" && typeof (td_0b.tdz_aee7b31e48c24eaf881af2930a23bfc5.td_f) !== "undefined") ? (td_0b.tdz_aee7b31e48c24eaf881af2930a23bfc5.td_f(0, 5)) : null);
    var td_bO = ((typeof (td_0b.tdz_aee7b31e48c24eaf881af2930a23bfc5) !== "undefined" && typeof (td_0b.tdz_aee7b31e48c24eaf881af2930a23bfc5.td_f) !== "undefined") ? (td_0b.tdz_aee7b31e48c24eaf881af2930a23bfc5.td_f(0, 5)) : null);
    var td_Lx = ((typeof (td_0b.tdz_aee7b31e48c24eaf881af2930a23bfc5) !== "undefined" && typeof (td_0b.tdz_aee7b31e48c24eaf881af2930a23bfc5.td_f) !== "undefined") ? (td_0b.tdz_aee7b31e48c24eaf881af2930a23bfc5.td_f(0, 5)) : null);
    var td_SR = ((typeof (td_0b.tdz_aee7b31e48c24eaf881af2930a23bfc5) !== "undefined" && typeof (td_0b.tdz_aee7b31e48c24eaf881af2930a23bfc5.td_f) !== "undefined") ? (td_0b.tdz_aee7b31e48c24eaf881af2930a23bfc5.td_f(0, 5)) : null);
    var td_Sl = ((typeof (td_0b.tdz_aee7b31e48c24eaf881af2930a23bfc5) !== "undefined" && typeof (td_0b.tdz_aee7b31e48c24eaf881af2930a23bfc5.td_f) !== "undefined") ? (td_0b.tdz_aee7b31e48c24eaf881af2930a23bfc5.td_f(0, 5)) : null);
    var td_wc = ((typeof (td_0b.tdz_aee7b31e48c24eaf881af2930a23bfc5) !== "undefined" && typeof (td_0b.tdz_aee7b31e48c24eaf881af2930a23bfc5.td_f) !== "undefined") ? (td_0b.tdz_aee7b31e48c24eaf881af2930a23bfc5.td_f(0, 5)) : null);
    var td_BN = ((typeof (td_0b.tdz_aee7b31e48c24eaf881af2930a23bfc5) !== "undefined" && typeof (td_0b.tdz_aee7b31e48c24eaf881af2930a23bfc5.td_f) !== "undefined") ? (td_0b.tdz_aee7b31e48c24eaf881af2930a23bfc5.td_f(0, 5)) : null);
    var td_KF = ((typeof (td_0b.tdz_aee7b31e48c24eaf881af2930a23bfc5) !== "undefined" && typeof (td_0b.tdz_aee7b31e48c24eaf881af2930a23bfc5.td_f) !== "undefined") ? (td_0b.tdz_aee7b31e48c24eaf881af2930a23bfc5.td_f(0, 5)) : null);
    var td_ht = ((typeof (td_0b.tdz_aee7b31e48c24eaf881af2930a23bfc5) !== "undefined" && typeof (td_0b.tdz_aee7b31e48c24eaf881af2930a23bfc5.td_f) !== "undefined") ? (td_0b.tdz_aee7b31e48c24eaf881af2930a23bfc5.td_f(0, 5)) : null);
    if (td_Vc && td_Vc.length) {
        td_Pn = td_Vc.length;
    }
    if (window.ActiveXObject || ((typeof (td_0b.tdz_aee7b31e48c24eaf881af2930a23bfc5) !== "undefined" && typeof (td_0b.tdz_aee7b31e48c24eaf881af2930a23bfc5.td_f) !== "undefined") ? (td_0b.tdz_aee7b31e48c24eaf881af2930a23bfc5.td_f(543, 13)) : null)in window) {
        if (td_Pn > 0) {
            td_NR = td_EB();
        }
        if (td_NR === ((typeof (td_0b.tdz_aee7b31e48c24eaf881af2930a23bfc5) !== "undefined" && typeof (td_0b.tdz_aee7b31e48c24eaf881af2930a23bfc5.td_f) !== "undefined") ? (td_0b.tdz_aee7b31e48c24eaf881af2930a23bfc5.td_f(0, 5)) : null)) {
            td_NR = td_d9();
        }
        td_mQ = td_hu();
        td_bO = td_m3();
        td_Lx = td_tL();
        td_SR = td_K2();
    } else {
        if (td_Pn > 0) {
            td_NR = td_EB();
            td_mQ = td_Ci();
            td_bO = td_Og();
            td_Lx = td_FF();
            td_SR = td_J9();
            td_Sl = td_Qj();
            td_wc = td_Ph();
            td_BN = td_Jz();
            td_KF = td_s2();
            td_ht = td_Yk();
        }
    }
    td_bD = ((typeof (td_0b.tdz_aee7b31e48c24eaf881af2930a23bfc5) !== "undefined" && typeof (td_0b.tdz_aee7b31e48c24eaf881af2930a23bfc5.td_f) !== "undefined") ? (td_0b.tdz_aee7b31e48c24eaf881af2930a23bfc5.td_f(556, 13)) : null) + td_NR + "!";
    td_bD += ((typeof (td_0b.tdz_aee7b31e48c24eaf881af2930a23bfc5) !== "undefined" && typeof (td_0b.tdz_aee7b31e48c24eaf881af2930a23bfc5.td_f) !== "undefined") ? (td_0b.tdz_aee7b31e48c24eaf881af2930a23bfc5.td_f(569, 28)) : null) + td_mQ + "!";
    td_bD += ((typeof (td_0b.tdz_aee7b31e48c24eaf881af2930a23bfc5) !== "undefined" && typeof (td_0b.tdz_aee7b31e48c24eaf881af2930a23bfc5.td_f) !== "undefined") ? (td_0b.tdz_aee7b31e48c24eaf881af2930a23bfc5.td_f(597, 21)) : null) + td_bO + "!";
    td_bD += ((typeof (td_0b.tdz_aee7b31e48c24eaf881af2930a23bfc5) !== "undefined" && typeof (td_0b.tdz_aee7b31e48c24eaf881af2930a23bfc5.td_f) !== "undefined") ? (td_0b.tdz_aee7b31e48c24eaf881af2930a23bfc5.td_f(618, 17)) : null) + td_Lx + "!";
    td_bD += ((typeof (td_0b.tdz_aee7b31e48c24eaf881af2930a23bfc5) !== "undefined" && typeof (td_0b.tdz_aee7b31e48c24eaf881af2930a23bfc5.td_f) !== "undefined") ? (td_0b.tdz_aee7b31e48c24eaf881af2930a23bfc5.td_f(635, 17)) : null) + td_SR + "!";
    td_bD += ((typeof (td_0b.tdz_aee7b31e48c24eaf881af2930a23bfc5) !== "undefined" && typeof (td_0b.tdz_aee7b31e48c24eaf881af2930a23bfc5.td_f) !== "undefined") ? (td_0b.tdz_aee7b31e48c24eaf881af2930a23bfc5.td_f(652, 18)) : null) + td_Sl + "!";
    td_bD += ((typeof (td_0b.tdz_aee7b31e48c24eaf881af2930a23bfc5) !== "undefined" && typeof (td_0b.tdz_aee7b31e48c24eaf881af2930a23bfc5.td_f) !== "undefined") ? (td_0b.tdz_aee7b31e48c24eaf881af2930a23bfc5.td_f(670, 18)) : null) + td_wc + "!";
    td_bD += ((typeof (td_0b.tdz_aee7b31e48c24eaf881af2930a23bfc5) !== "undefined" && typeof (td_0b.tdz_aee7b31e48c24eaf881af2930a23bfc5.td_f) !== "undefined") ? (td_0b.tdz_aee7b31e48c24eaf881af2930a23bfc5.td_f(688, 15)) : null) + td_BN + "!";
    td_bD += ((typeof (td_0b.tdz_aee7b31e48c24eaf881af2930a23bfc5) !== "undefined" && typeof (td_0b.tdz_aee7b31e48c24eaf881af2930a23bfc5.td_f) !== "undefined") ? (td_0b.tdz_aee7b31e48c24eaf881af2930a23bfc5.td_f(703, 18)) : null) + td_KF + "!";
    td_bD += ((typeof (td_0b.tdz_aee7b31e48c24eaf881af2930a23bfc5) !== "undefined" && typeof (td_0b.tdz_aee7b31e48c24eaf881af2930a23bfc5.td_f) !== "undefined") ? (td_0b.tdz_aee7b31e48c24eaf881af2930a23bfc5.td_f(721, 12)) : null) + td_ht;
    return td_bD;
}
var td_0b = td_0b || {};
td_0b._mean = function(td_x) {
    if (td_x.length < 1) {
        return 0;
    }
    var td_r = 0;
    for (var td_D = 0; td_D < td_x.length; ++td_D) {
        td_r += td_x[td_D];
    }
    return td_r / td_x.length;
}
;
td_0b.mean = function(td_x) {
    return Math.floor(td_0b._mean(td_x));
}
;
td_0b.variance = function(td_Ks, td_r) {
    if (td_Ks.length < 2) {
        return 0;
    }
    var td_x = 0;
    for (var td_D = 0; td_D < td_Ks.length; ++td_D) {
        td_x += Math.pow(td_Ks[td_D] - td_r, 2);
    }
    return td_x / (td_Ks.length - 1);
}
;
td_0b._std_dev = function(td_D, td_x) {
    return Math.sqrt(td_0b.variance(td_D, td_x));
}
;
td_0b.std_dev = function(td_D, td_r) {
    return Math.floor(td_0b._std_dev(td_D, td_r));
}
;
td_0b.confidence_interval = function(td_ia, td_S9, td_r, td_x) {
    if (td_ia.length < 1) {
        return [];
    }
    var td_K8 = [];
    var td_rP = td_r + (td_S9 * td_x);
    var td_D = td_r - (td_S9 * td_x);
    for (var td_ZQ = 0; td_ZQ < td_ia.length; ++td_ZQ) {
        if (td_ia[td_ZQ] > td_D && td_rP > td_ia[td_ZQ]) {
            td_K8.push(td_ia[td_ZQ]);
        }
    }
    return td_K8;
}
;
td_0b.median = function(td_LY) {
    if (typeof td_LY === [][[]] + "" || td_LY === null || typeof td_LY.sort === [][[]] + "" || td_LY.sort === null) {
        return null;
    }
    var td_va = null;
    if (typeof JSON !== [][[]] + "" && typeof JSON.stringify !== [][[]] + "" && typeof JSON.parse !== [][[]] + "") {
        var td_D = JSON.stringify(td_LY);
        if (typeof td_D === [][[]] + "" || td_D === null) {
            return null;
        }
        td_va = JSON.parse(td_D);
    } else {
        if (typeof td_LY.slice !== [][[]] + "") {
            td_va = td_LY.slice();
        }
    }
    if (td_va === null) {
        return null;
    }
    td_va.sort(function(td_oE, td_TN) {
        return td_oE - td_TN;
    });
    var td_r = td_va.length;
    if (1 > td_r) {
        return 0;
    } else {
        if (2 > td_r) {
            return td_va[0];
        } else {
            if (td_r % 2) {
                return td_va[Math.floor(td_r / 2)];
            } else {
                var td_x = td_va[Math.floor((td_r / 2) - 1)];
                var td_Bu = td_va[Math.floor(td_r / 2)];
                return (td_x + td_Bu) / 2;
            }
        }
    }
}
;
td_0b.mad = function(td_Ys, td_r) {
    if (typeof td_r === [][[]] + "" || typeof td_Ys === [][[]] + "" || typeof td_Ys.length === [][[]] + "") {
        return 0;
    }
    var td_D = td_Ys.length;
    if (1 > td_D) {
        return 0;
    }
    var td_Vg = [];
    for (var td_x in td_Ys) {
        if (td_Ys.hasOwnProperty(td_x)) {
            td_Vg.push(Math.abs(td_Ys[td_x] - td_r));
        }
    }
    return td_0b.median(td_Vg);
}
;
td_0b.tdz_c3e4cb62a294435ca62d5ce5fc17520c = new td_0b.td_6D("\x63\x33\x65\x34\x63\x62\x36\x32\x61\x32\x39\x34\x34\x33\x35\x63\x61\x36\x32\x64\x35\x63\x65\x35\x66\x63\x31\x37\x35\x32\x30\x63\x31\x33\x34\x31\x31\x31\x34\x31\x31\x36\x31\x35\x34\x30\x34\x38\x31\x39\x31\x37\x30\x65\x37\x36\x31\x31\x30\x34\x37\x37\x34\x36\x35\x36\x37\x35\x31\x37\x35\x33\x37\x36\x34\x36\x35\x32\x37\x33\x31\x38\x30\x32\x31\x34\x30\x31\x30\x35\x35\x39\x35\x32\x30\x36\x30\x36\x34\x33\x31\x37\x34\x30\x31\x36\x31\x37\x34\x31\x34\x34\x31\x62\x34\x61\x31\x63\x30\x33\x37\x36\x34\x39\x31\x30\x35\x34\x32\x33\x31\x33\x30\x35\x32\x37\x31\x30\x35\x34\x32\x33\x31\x30\x35\x31\x32\x37\x34\x30\x31\x32\x30\x32\x37\x30\x34\x61\x31\x36\x31\x36\x34\x31\x31\x32\x34\x35\x31\x64\x34\x37\x30\x31\x37\x30\x31\x62\x31\x37\x30\x65\x37\x37\x31\x31\x30\x34\x37\x36\x31\x64\x34\x34\x30\x31\x37\x31\x30\x35\x35\x34\x30\x30\x31\x35\x34\x36\x31\x37\x31\x37\x31\x34\x30\x30\x37\x36\x34\x33\x34\x36\x31\x61\x34\x36\x30\x34\x32\x36\x31\x31\x35\x34\x32\x30\x34\x63\x34\x38\x34\x34\x30\x35\x37\x61\x34\x61\x34\x61\x34\x32\x31\x30\x35\x34\x32\x33\x34\x63\x34\x37\x31\x30\x34\x34\x31\x35\x31\x63\x31\x30\x35\x31\x32\x35\x34\x30\x31\x32\x30\x32\x37\x30\x34\x61\x31\x36\x31\x37\x34\x34\x31\x33\x34\x64\x34\x36\x35\x35\x37\x34\x31\x37\x35\x36\x37\x30\x34\x30\x31\x31\x30\x33\x37\x37\x34\x34\x34\x36\x35\x36\x37\x34\x34\x38\x31\x31\x34\x31\x31\x34\x31\x33\x34\x64\x31\x36\x34\x36\x30\x36\x37\x35\x34\x66\x34\x63\x31\x35\x35\x34\x32\x30\x31\x36\x35\x32\x37\x32\x31\x64\x30\x33\x31\x33\x30\x34\x35\x31\x35\x35\x35\x62\x35\x30\x31\x31\x30\x35\x30\x35\x30\x34\x30\x37\x35\x38\x35\x61\x30\x65\x35\x62\x30\x65\x30\x39\x35\x61\x30\x38\x33\x32\x36\x30\x36\x34\x36\x37\x36\x31\x36\x34\x33\x34\x33\x36\x36\x61\x33\x63\x36\x65\x34\x36\x35\x37\x37\x34\x36\x37\x33\x62\x36\x64\x31\x63\x30\x31\x37\x31\x37\x35\x31\x30\x35\x37\x35\x31\x37\x34\x37\x30\x31\x34\x34\x36\x31\x36\x31\x30\x34\x30\x31\x31\x31\x35\x34\x62\x34\x65\x31\x30\x30\x35\x37\x32\x31\x39\x31\x39\x31\x36\x35\x32\x37\x30\x31\x61\x34\x37\x30\x31\x37\x31\x30\x30\x31\x37\x30\x66\x30\x34\x35\x36\x35\x31\x35\x30\x30\x34\x30\x36\x35\x30\x35\x64\x30\x63\x35\x65\x30\x65\x31\x35\x34\x37\x31\x37\x31\x36\x34\x35\x34\x30\x34\x32\x34\x33\x34\x30\x34\x36\x35\x34\x37\x31\x31\x66\x31\x31\x35\x34\x32\x30\x31\x33\x30\x35\x32\x32\x31\x37\x30\x65\x37\x32\x34\x65\x34\x33\x34\x37\x31\x32\x31\x34\x34\x32\x34\x35\x31\x33\x34\x34\x31\x33\x34\x30\x30\x32\x32\x34\x31\x39\x31\x34\x30\x30\x37\x37\x31\x37\x30\x37\x32\x30\x34\x36\x30\x34\x32\x33\x34\x65\x30\x32\x34\x37\x30\x30\x30\x32\x30\x32\x35\x30\x35\x63\x35\x36\x35\x33\x35\x35\x35\x62\x31\x32\x34\x34\x30\x31\x37\x30\x34\x31\x30\x32\x32\x31\x31\x30\x34\x30\x31\x38\x31\x35\x34\x38\x34\x39\x31\x30\x30\x35\x37\x32\x31\x39\x31\x62\x34\x32\x34\x30\x30\x33\x32\x31\x34\x37\x30\x31\x37\x30\x31\x34\x34\x37\x34\x65\x34\x32\x34\x63\x31\x36\x30\x32\x32\x31\x34\x34\x30\x31\x37\x30\x31\x65\x31\x30\x35\x34\x32\x31\x31\x30\x35\x31\x32\x30\x31\x34\x30\x30\x37\x33\x31\x37\x30\x37\x32\x31\x30\x32\x35\x32\x30\x36\x35\x36\x30\x36\x30\x30\x35\x31\x35\x34\x30\x39\x35\x61\x35\x33\x35\x37\x35\x39\x35\x66\x35\x61\x30\x63\x33\x38\x36\x30\x36\x31\x33\x37\x36\x31\x31\x33\x31\x36\x34\x31\x31\x33\x31\x37\x34\x37\x34\x31\x34\x64\x34\x33\x31\x35\x35\x34\x32\x31\x34\x39\x34\x30\x30\x33\x32\x37\x34\x37\x30\x31\x37\x36\x31\x36\x34\x61\x35\x38\x35\x35\x35\x36\x34\x33\x34\x37\x31\x32\x31\x34\x34\x32\x34\x35\x31\x33\x34\x34\x31\x33\x34\x30\x30\x32\x32\x34\x31\x39\x31\x34\x30\x30\x37\x37\x31\x37\x30\x37\x32\x30\x34\x36\x30\x34\x32\x33\x34\x65\x30\x32\x30\x33\x35\x31\x35\x30\x30\x34\x35\x37\x34\x39\x34\x37\x34\x32\x34\x36\x34\x31\x31\x32\x31\x36\x34\x37\x34\x33\x34\x31\x30\x32\x32\x31\x34\x30\x30\x32\x32\x34\x31\x36\x31\x34\x30\x30\x37\x36\x34\x63\x34\x61\x30\x32\x34\x36\x30\x35\x35\x35\x35\x30\x31\x33\x31\x30\x34\x37\x34\x37\x31\x35\x34\x35\x34\x66\x34\x64\x31\x31\x30\x34\x37\x31\x34\x36\x35\x36\x37\x34\x31\x37\x35\x33\x37\x37\x31\x36\x34\x30\x30\x32\x32\x35\x31\x64\x31\x34\x30\x30\x37\x33\x31\x37\x30\x36\x35\x33\x30\x62\x35\x36\x30\x37\x35\x31\x30\x30\x30\x34\x35\x38\x35\x64\x31\x31\x34\x30\x34\x33\x34\x31\x34\x30\x34\x34\x34\x33\x31\x61\x31\x66\x31\x33\x30\x35\x32\x36\x34\x66\x31\x61\x34\x30\x30\x32\x32\x35\x31\x64\x34\x66\x35\x36\x35\x34\x35\x39\x35\x32\x30\x36\x30\x37\x35\x34\x30\x33\x31\x31\x35\x35\x35\x32\x35\x65\x35\x38\x30\x62\x34\x32\x34\x62\x34\x65\x34\x31\x34\x37\x34\x32\x31\x35\x31\x38\x34\x38\x31\x37\x35\x33\x37\x37\x31\x39\x31\x63\x31\x30\x35\x31\x32\x30\x34\x66\x34\x39\x35\x34\x31\x37\x30\x36\x35\x33\x30\x30\x35\x31\x30\x30\x35\x39\x30\x34\x30\x35\x35\x66\x35\x61\x30\x61\x35\x64\x34\x39\x34\x36\x34\x65\x34\x36\x34\x31\x31\x34\x31\x37\x34\x66\x34\x63\x34\x31\x30\x32\x32\x31\x31\x66\x34\x63\x34\x33\x35\x34\x37\x32\x34\x39\x34\x62\x35\x33\x31\x35\x35\x35\x35\x33\x35\x30\x30\x37\x35\x31\x30\x31\x30\x35\x35\x30\x35\x63\x31\x31\x34\x30\x34\x33\x34\x31\x34\x30\x34\x34\x34\x33\x31\x61\x31\x66\x31\x33\x30\x35\x32\x36\x34\x66\x31\x61\x34\x30\x30\x32\x32\x35\x31\x64\x34\x66\x35\x36\x35\x34\x35\x30\x35\x32\x30\x36\x30\x37\x35\x34\x30\x33\x35\x35\x30\x62\x30\x39\x35\x64\x34\x32\x31\x33\x34\x38\x34\x63\x34\x30\x34\x33\x34\x35\x34\x63\x31\x64\x34\x34\x30\x31\x37\x30\x31\x65\x34\x63\x34\x36\x35\x32\x37\x36\x31\x38\x31\x64\x35\x30\x31\x32\x30\x33\x30\x32\x35\x35\x30\x31\x30\x36\x35\x34\x31\x35\x34\x36\x31\x39\x31\x37\x34\x32\x34\x35\x31\x37\x34\x62\x34\x37\x31\x31\x30\x33\x37\x31\x34\x66\x31\x61\x34\x34\x30\x31\x37\x31\x31\x61\x34\x62\x30\x32\x30\x34\x35\x66\x30\x34\x30\x37\x35\x35\x35\x31\x35\x62\x35\x64\x35\x38\x30\x38\x30\x30\x35\x65\x30\x38\x35\x62\x31\x33\x31\x30\x34\x36\x34\x37\x31\x34\x34\x35\x34\x66\x34\x64\x31\x31\x30\x34\x37\x36\x34\x36\x35\x36\x37\x34\x34\x38\x31\x65\x31\x30\x35\x34\x32\x36\x31\x30\x35\x31\x32\x35\x34\x39\x35\x36\x31\x30\x30\x34\x30\x30\x30\x35\x30\x31\x35\x37\x30\x31\x35\x32\x30\x64\x30\x33\x35\x65\x35\x38\x30\x65\x35\x65\x35\x64\x35\x64\x35\x61\x36\x32\x36\x34\x33\x30\x33\x32\x36\x31\x36\x36\x33\x32\x36\x33\x31\x33\x31\x36\x31\x30\x35\x31\x32\x31\x34\x34\x34\x32\x34\x36\x34\x34\x34\x39\x34\x36\x35\x34\x37\x30\x34\x30\x30\x33\x32\x31\x34\x37\x30\x31\x37\x30\x31\x38\x31\x37\x30\x65\x37\x30\x34\x33\x34\x34\x35\x34\x30\x32\x30\x36\x35\x34\x35\x36\x30\x39\x35\x32\x30\x34\x30\x38\x35\x64\x30\x64\x30\x65\x35\x63\x35\x38\x35\x61\x35\x64\x36\x39\x33\x62\x33\x30\x36\x30\x33\x35\x36\x31\x33\x63\x33\x32\x36\x66\x36\x61\x33\x62\x36\x38\x31\x63\x30\x31\x37\x37\x31\x36\x30\x30\x32\x36\x33\x65\x36\x39\x37\x33\x31\x35\x31\x30\x35\x34\x32\x37\x34\x66\x31\x33\x31\x37\x34\x36\x34\x31\x34\x63\x34\x62\x31\x35\x35\x34\x32\x31\x34\x39\x31\x66\x31\x31\x35\x34\x32\x31\x34\x38\x34\x63\x30\x30\x35\x31\x35\x62\x35\x36\x35\x31\x35\x30\x35\x32\x30\x34\x30\x30\x35\x65\x35\x38\x30\x65\x35\x38\x30\x66\x30\x62\x35\x62\x33\x37\x33\x35\x34\x31\x34\x34\x34\x33\x34\x36\x31\x35\x35\x34\x32\x30\x31\x36\x35\x32\x37\x32\x31\x35\x31\x62\x31\x33\x30\x35\x32\x35\x31\x37\x30\x65\x37\x36\x34\x65\x31\x36\x30\x32\x32\x37\x34\x34\x30\x31\x37\x31\x31\x61\x34\x32\x30\x32\x30\x34\x35\x66\x31\x37\x31\x37\x31\x34\x30\x30\x37\x37\x34\x36\x34\x32\x34\x36\x35\x34\x37\x35\x31\x32\x31\x31\x35\x34\x32\x34\x34\x38\x34\x38\x34\x34\x30\x35\x37\x64\x31\x31\x30\x33\x37\x31\x31\x30\x35\x34\x32\x32\x31\x33\x30\x35\x32\x32\x34\x62\x30\x32\x34\x30\x30\x33\x35\x36\x30\x31\x35\x33\x35\x32\x35\x36\x35\x35\x35\x37\x30\x61\x30\x62\x35\x38\x30\x65\x35\x39\x30\x66\x30\x61\x35\x39\x36\x35\x33\x36\x36\x31\x36\x62\x36\x31\x36\x31\x36\x63\x36\x35\x33\x61\x33\x38\x36\x63\x36\x38\x34\x31\x30\x30\x32\x30\x34\x30\x30\x30\x32\x35\x33\x63\x36\x65\x31\x32\x30\x31\x30\x32\x34\x30\x31\x30\x31\x34\x34\x36\x31\x30\x34\x33\x31\x35\x31\x62\x31\x33\x30\x35\x32\x32\x31\x37\x30\x65\x37\x36\x31\x31\x30\x34\x37\x37\x31\x61\x34\x34\x30\x31\x37\x31\x34\x31\x30\x32\x32\x30\x34\x30\x30\x32\x32\x32\x30\x32\x35\x30\x35\x34\x34\x35\x34\x31\x34\x31\x31\x36\x31\x37\x34\x34\x31\x33\x34\x63\x34\x36\x35\x35\x37\x35\x31\x37\x35\x36\x37\x30\x34\x33\x31\x31\x30\x33\x37\x30\x31\x30\x35\x34\x32\x32\x31\x33\x30\x35\x32\x32\x34\x63\x30\x32\x30\x34\x35\x36\x30\x34\x30\x36\x35\x30\x35\x30\x35\x32\x35\x61\x35\x38\x30\x38\x30\x39\x35\x65\x30\x39\x35\x33\x30\x64\x33\x33\x36\x37\x34\x32\x31\x32\x34\x33\x34\x63\x34\x30\x34\x33\x34\x35\x34\x64\x34\x36\x35\x36\x37\x35\x31\x37\x35\x33\x37\x37\x31\x39\x34\x30\x30\x32\x32\x35\x34\x36\x30\x36\x37\x34\x31\x30\x30\x35\x37\x36\x31\x61\x30\x32\x35\x32\x30\x36\x35\x36\x30\x36\x30\x33\x35\x31\x35\x34\x30\x65\x35\x61\x35\x32\x35\x64\x34\x34\x34\x30\x34\x34\x31\x36\x31\x35\x34\x31\x34\x34\x31\x63\x31\x30\x35\x34\x32\x36\x31\x30\x35\x31\x32\x31\x34\x62\x31\x32\x30\x32\x37\x31\x31\x35\x35\x34\x32\x30\x31\x36\x35\x32\x37\x32\x31\x61\x30\x33\x35\x37\x35\x31\x30\x33\x35\x37\x35\x38\x35\x33\x35\x33\x35\x32\x35\x64\x30\x38\x30\x62\x35\x62\x35\x65\x30\x32\x35\x62\x33\x33\x33\x35\x35\x61\x30\x38\x34\x35\x35\x62\x35\x36\x35\x36\x30\x66\x30\x31\x34\x35\x30\x39\x35\x36\x35\x38");
var td_0b = td_0b || {};
var td_4j = ((typeof (td_0b.tdz_c3e4cb62a294435ca62d5ce5fc17520c) !== "undefined" && typeof (td_0b.tdz_c3e4cb62a294435ca62d5ce5fc17520c.td_f) !== "undefined") ? (td_0b.tdz_c3e4cb62a294435ca62d5ce5fc17520c.td_f(0, 33)) : null);
var td_3l = ((typeof (td_0b.tdz_c3e4cb62a294435ca62d5ce5fc17520c) !== "undefined" && typeof (td_0b.tdz_c3e4cb62a294435ca62d5ce5fc17520c.td_f) !== "undefined") ? (td_0b.tdz_c3e4cb62a294435ca62d5ce5fc17520c.td_f(33, 25)) : null);
var td_6s = ((typeof (td_0b.tdz_c3e4cb62a294435ca62d5ce5fc17520c) !== "undefined" && typeof (td_0b.tdz_c3e4cb62a294435ca62d5ce5fc17520c.td_f) !== "undefined") ? (td_0b.tdz_c3e4cb62a294435ca62d5ce5fc17520c.td_f(58, 28)) : null);
var td_5q = ((typeof (td_0b.tdz_c3e4cb62a294435ca62d5ce5fc17520c) !== "undefined" && typeof (td_0b.tdz_c3e4cb62a294435ca62d5ce5fc17520c.td_f) !== "undefined") ? (td_0b.tdz_c3e4cb62a294435ca62d5ce5fc17520c.td_f(86, 23)) : null);
var td_5P = ((typeof (td_0b.tdz_c3e4cb62a294435ca62d5ce5fc17520c) !== "undefined" && typeof (td_0b.tdz_c3e4cb62a294435ca62d5ce5fc17520c.td_f) !== "undefined") ? (td_0b.tdz_c3e4cb62a294435ca62d5ce5fc17520c.td_f(109, 13)) : null);
var td_1g = ((typeof (td_0b.tdz_c3e4cb62a294435ca62d5ce5fc17520c) !== "undefined" && typeof (td_0b.tdz_c3e4cb62a294435ca62d5ce5fc17520c.td_f) !== "undefined") ? (td_0b.tdz_c3e4cb62a294435ca62d5ce5fc17520c.td_f(122, 20)) : null);
var td_s = ((typeof (td_0b.tdz_c3e4cb62a294435ca62d5ce5fc17520c) !== "undefined" && typeof (td_0b.tdz_c3e4cb62a294435ca62d5ce5fc17520c.td_f) !== "undefined") ? (td_0b.tdz_c3e4cb62a294435ca62d5ce5fc17520c.td_f(142, 69)) : null);
var td_E = ((typeof (td_0b.tdz_c3e4cb62a294435ca62d5ce5fc17520c) !== "undefined" && typeof (td_0b.tdz_c3e4cb62a294435ca62d5ce5fc17520c.td_f) !== "undefined") ? (td_0b.tdz_c3e4cb62a294435ca62d5ce5fc17520c.td_f(211, 35)) : null);
var td_6c = ((typeof (td_0b.tdz_c3e4cb62a294435ca62d5ce5fc17520c) !== "undefined" && typeof (td_0b.tdz_c3e4cb62a294435ca62d5ce5fc17520c.td_f) !== "undefined") ? (td_0b.tdz_c3e4cb62a294435ca62d5ce5fc17520c.td_f(246, 23)) : null);
var td_3i = ((typeof (td_0b.tdz_c3e4cb62a294435ca62d5ce5fc17520c) !== "undefined" && typeof (td_0b.tdz_c3e4cb62a294435ca62d5ce5fc17520c.td_f) !== "undefined") ? (td_0b.tdz_c3e4cb62a294435ca62d5ce5fc17520c.td_f(269, 34)) : null);
var td_4v = ((typeof (td_0b.tdz_c3e4cb62a294435ca62d5ce5fc17520c) !== "undefined" && typeof (td_0b.tdz_c3e4cb62a294435ca62d5ce5fc17520c.td_f) !== "undefined") ? (td_0b.tdz_c3e4cb62a294435ca62d5ce5fc17520c.td_f(303, 18)) : null);
var td_6L = ((typeof (td_0b.tdz_c3e4cb62a294435ca62d5ce5fc17520c) !== "undefined" && typeof (td_0b.tdz_c3e4cb62a294435ca62d5ce5fc17520c.td_f) !== "undefined") ? (td_0b.tdz_c3e4cb62a294435ca62d5ce5fc17520c.td_f(321, 52)) : null);
var td_4M = ((typeof (td_0b.tdz_c3e4cb62a294435ca62d5ce5fc17520c) !== "undefined" && typeof (td_0b.tdz_c3e4cb62a294435ca62d5ce5fc17520c.td_f) !== "undefined") ? (td_0b.tdz_c3e4cb62a294435ca62d5ce5fc17520c.td_f(373, 24)) : null);
var td_S = ((typeof (td_0b.tdz_c3e4cb62a294435ca62d5ce5fc17520c) !== "undefined" && typeof (td_0b.tdz_c3e4cb62a294435ca62d5ce5fc17520c.td_f) !== "undefined") ? (td_0b.tdz_c3e4cb62a294435ca62d5ce5fc17520c.td_f(397, 29)) : null);
var td_2P = ((typeof (td_0b.tdz_c3e4cb62a294435ca62d5ce5fc17520c) !== "undefined" && typeof (td_0b.tdz_c3e4cb62a294435ca62d5ce5fc17520c.td_f) !== "undefined") ? (td_0b.tdz_c3e4cb62a294435ca62d5ce5fc17520c.td_f(426, 26)) : null);
var td_0d = ((typeof (td_0b.tdz_c3e4cb62a294435ca62d5ce5fc17520c) !== "undefined" && typeof (td_0b.tdz_c3e4cb62a294435ca62d5ce5fc17520c.td_f) !== "undefined") ? (td_0b.tdz_c3e4cb62a294435ca62d5ce5fc17520c.td_f(452, 36)) : null);
var td_4k = ((typeof (td_0b.tdz_c3e4cb62a294435ca62d5ce5fc17520c) !== "undefined" && typeof (td_0b.tdz_c3e4cb62a294435ca62d5ce5fc17520c.td_f) !== "undefined") ? (td_0b.tdz_c3e4cb62a294435ca62d5ce5fc17520c.td_f(488, 33)) : null);
var td_5x = ((typeof (td_0b.tdz_c3e4cb62a294435ca62d5ce5fc17520c) !== "undefined" && typeof (td_0b.tdz_c3e4cb62a294435ca62d5ce5fc17520c.td_f) !== "undefined") ? (td_0b.tdz_c3e4cb62a294435ca62d5ce5fc17520c.td_f(521, 33)) : null);
var td_0x = ((typeof (td_0b.tdz_c3e4cb62a294435ca62d5ce5fc17520c) !== "undefined" && typeof (td_0b.tdz_c3e4cb62a294435ca62d5ce5fc17520c.td_f) !== "undefined") ? (td_0b.tdz_c3e4cb62a294435ca62d5ce5fc17520c.td_f(554, 30)) : null);
var td_2X = ((typeof (td_0b.tdz_c3e4cb62a294435ca62d5ce5fc17520c) !== "undefined" && typeof (td_0b.tdz_c3e4cb62a294435ca62d5ce5fc17520c.td_f) !== "undefined") ? (td_0b.tdz_c3e4cb62a294435ca62d5ce5fc17520c.td_f(584, 31)) : null);
var td_2C = ((typeof (td_0b.tdz_c3e4cb62a294435ca62d5ce5fc17520c) !== "undefined" && typeof (td_0b.tdz_c3e4cb62a294435ca62d5ce5fc17520c.td_f) !== "undefined") ? (td_0b.tdz_c3e4cb62a294435ca62d5ce5fc17520c.td_f(615, 27)) : null);
var td_1W = ((typeof (td_0b.tdz_c3e4cb62a294435ca62d5ce5fc17520c) !== "undefined" && typeof (td_0b.tdz_c3e4cb62a294435ca62d5ce5fc17520c.td_f) !== "undefined") ? (td_0b.tdz_c3e4cb62a294435ca62d5ce5fc17520c.td_f(642, 34)) : null);
var td_1q = ((typeof (td_0b.tdz_c3e4cb62a294435ca62d5ce5fc17520c) !== "undefined" && typeof (td_0b.tdz_c3e4cb62a294435ca62d5ce5fc17520c.td_f) !== "undefined") ? (td_0b.tdz_c3e4cb62a294435ca62d5ce5fc17520c.td_f(676, 49)) : null);
var td_y = ((typeof (td_0b.tdz_c3e4cb62a294435ca62d5ce5fc17520c) !== "undefined" && typeof (td_0b.tdz_c3e4cb62a294435ca62d5ce5fc17520c.td_f) !== "undefined") ? (td_0b.tdz_c3e4cb62a294435ca62d5ce5fc17520c.td_f(725, 62)) : null);
var td_0K = ((typeof (td_0b.tdz_c3e4cb62a294435ca62d5ce5fc17520c) !== "undefined" && typeof (td_0b.tdz_c3e4cb62a294435ca62d5ce5fc17520c.td_f) !== "undefined") ? (td_0b.tdz_c3e4cb62a294435ca62d5ce5fc17520c.td_f(787, 39)) : null);
var td_6j = ((typeof (td_0b.tdz_c3e4cb62a294435ca62d5ce5fc17520c) !== "undefined" && typeof (td_0b.tdz_c3e4cb62a294435ca62d5ce5fc17520c.td_f) !== "undefined") ? (td_0b.tdz_c3e4cb62a294435ca62d5ce5fc17520c.td_f(826, 30)) : null);
var td_1Z = ((typeof (td_0b.tdz_c3e4cb62a294435ca62d5ce5fc17520c) !== "undefined" && typeof (td_0b.tdz_c3e4cb62a294435ca62d5ce5fc17520c.td_f) !== "undefined") ? (td_0b.tdz_c3e4cb62a294435ca62d5ce5fc17520c.td_f(856, 70)) : null);
var td_v = ((typeof (td_0b.tdz_c3e4cb62a294435ca62d5ce5fc17520c) !== "undefined" && typeof (td_0b.tdz_c3e4cb62a294435ca62d5ce5fc17520c.td_f) !== "undefined") ? (td_0b.tdz_c3e4cb62a294435ca62d5ce5fc17520c.td_f(926, 30)) : null);
var td_C = ((typeof (td_0b.tdz_c3e4cb62a294435ca62d5ce5fc17520c) !== "undefined" && typeof (td_0b.tdz_c3e4cb62a294435ca62d5ce5fc17520c.td_f) !== "undefined") ? (td_0b.tdz_c3e4cb62a294435ca62d5ce5fc17520c.td_f(956, 43)) : null);
var td_l = ((typeof (td_0b.tdz_c3e4cb62a294435ca62d5ce5fc17520c) !== "undefined" && typeof (td_0b.tdz_c3e4cb62a294435ca62d5ce5fc17520c.td_f) !== "undefined") ? (td_0b.tdz_c3e4cb62a294435ca62d5ce5fc17520c.td_f(999, 37)) : null);
var td_n = ((typeof (td_0b.tdz_c3e4cb62a294435ca62d5ce5fc17520c) !== "undefined" && typeof (td_0b.tdz_c3e4cb62a294435ca62d5ce5fc17520c.td_f) !== "undefined") ? (td_0b.tdz_c3e4cb62a294435ca62d5ce5fc17520c.td_f(1036, 43)) : null);
var td_f = 1;
var td_M = 0;
function td_3h(td_SK, td_D, td_r, td_x) {
    return td_J(td_SK, td_D, td_r, null, td_x);
}
function td_J(td_JR, td_SP, td_r, td_QW, td_D) {
    var td_x = td_0b.td_4o(decodeURIComponent(td_SP));
    if (td_x === null) {
        return;
    }
    if (typeof td_QW !== [][[]] + "" && td_QW !== null) {
        return td_o(td_JR, td_x, td_r, td_D);
    } else {
        return td_Q(td_JR, td_x, td_r, td_D);
    }
}
function td_Q(td_Pq, td_D, td_r, td_x) {
    if (td_Pq.attachEvent) {
        td_Pq.attachEvent(((typeof (td_0b.tdz_c3e4cb62a294435ca62d5ce5fc17520c) !== "undefined" && typeof (td_0b.tdz_c3e4cb62a294435ca62d5ce5fc17520c.td_f) !== "undefined") ? (td_0b.tdz_c3e4cb62a294435ca62d5ce5fc17520c.td_f(1079, 2)) : null) + td_D, function(td_jj) {
            try {
                td_r(td_jj || window.event);
            } catch (td_K4) {}
        });
    } else {
        td_Pq.addEventListener(td_D, td_r, ((typeof td_x === [][[]] + "") ? false : td_x));
    }
}
function td_o(td_IV, td_r, td_D, td_x) {
    if (typeof td_IV.addEventListener !== [][[]] + "") {
        td_IV.addEventListener(td_r, td_D, ((typeof td_x === [][[]] + "") ? false : td_x));
    } else {
        td_IV.attachEvent(((typeof (td_0b.tdz_c3e4cb62a294435ca62d5ce5fc17520c) !== "undefined" && typeof (td_0b.tdz_c3e4cb62a294435ca62d5ce5fc17520c.td_f) !== "undefined") ? (td_0b.tdz_c3e4cb62a294435ca62d5ce5fc17520c.td_f(1079, 2)) : null) + td_r, function(td_Vy) {
            try {
                td_D(td_Vy || window.event);
            } catch (td_JO) {}
        });
    }
}
function td_2O(td_iv, td_D, td_r, td_x) {
    return td_X(td_iv, td_D, td_r, null, td_x);
}
function td_X(td_pA, td_py, td_r, td_Hr, td_x) {
    var td_D = td_0b.td_4o(decodeURIComponent(td_py));
    if (td_D === null) {
        return;
    }
    if (typeof td_Hr !== [][[]] + "" && td_Hr !== null) {
        return td_F(td_pA, td_D, td_r, td_x);
    } else {
        return td_c(td_pA, td_D, td_r, td_x);
    }
}
function td_c(td_Kf, td_x, td_r, td_D) {
    if (td_Kf.detachEvent) {
        td_Kf["e" + td_x + td_r] = td_r;
        td_Kf[td_x + td_r] = function(td_i6) {
            td_Kf["e" + td_x + td_r](td_i6 || window.event);
        }
        ;
        td_Kf.detachEvent(((typeof (td_0b.tdz_c3e4cb62a294435ca62d5ce5fc17520c) !== "undefined" && typeof (td_0b.tdz_c3e4cb62a294435ca62d5ce5fc17520c.td_f) !== "undefined") ? (td_0b.tdz_c3e4cb62a294435ca62d5ce5fc17520c.td_f(1079, 2)) : null) + td_x, td_Kf[td_x + td_r]);
    } else {
        td_Kf.removeEventListener(td_x, td_r, ((typeof td_D === [][[]] + "") ? false : td_D));
    }
}
function td_F(td_xG, td_D, td_r, td_x) {
    if (typeof td_xG.removeEventListener !== [][[]] + "") {
        td_xG.removeEventListener(td_D, td_r, ((typeof td_x === [][[]] + "") ? false : td_x));
    } else {
        td_xG["e" + td_D + td_r] = td_r;
        td_xG[td_D + td_r] = function(td_I0) {
            td_xG["e" + td_D + td_r](td_I0 || window.event);
        }
        ;
        td_xG.detachEvent(((typeof (td_0b.tdz_c3e4cb62a294435ca62d5ce5fc17520c) !== "undefined" && typeof (td_0b.tdz_c3e4cb62a294435ca62d5ce5fc17520c.td_f) !== "undefined") ? (td_0b.tdz_c3e4cb62a294435ca62d5ce5fc17520c.td_f(1079, 2)) : null) + td_D, td_xG[td_D + td_r]);
    }
}
function td_d(td_G4) {
    var td_wv = td_G4;
    var td_fp = 500;
    var td_Z8 = 30000;
    var td_x = [];
    var td_r = 0;
    var td_do = null;
    var td_Jx = true;
    this.isDone = false;
    this.getTotalRuntime = function() {
        return td_Z8;
    }
    ;
    var td_p5 = null;
    this.addFeature = function(td_rz, td_ng) {
        if (typeof td_ng === [][[]] + "" || td_ng < td_fp) {
            td_ng = td_fp;
        }
        var td_rE = Math.ceil(td_ng / td_fp);
        td_x.push([td_rz, td_rE, true]);
        td_rz.setup();
    }
    ;
    this.addCollectorTimer = function(td_VN) {
        td_p5 = td_VN;
    }
    ;
    this.getFeaturesForTest = function() {
        return td_x;
    }
    ;
    this.start = function() {
        if (td_x.length === 0) {
            return;
        }
        td_J(window, td_6L, this.fini, td_Jx);
        td_J(window, td_4M, this.fini, td_Jx);
        td_do = setTimeout(td_D, td_fp);
    }
    ;
    this.fini = function() {
        if (td_do) {
            clearTimeout(td_do);
            td_do = null;
        }
        td_X(window, td_6L, this.fini, td_Jx);
        td_X(window, td_4M, this.fini, td_Jx);
    }
    ;
    this.check = function() {
        td_D();
    }
    ;
    function td_D() {
        var td_hi;
        var td_Wy = "";
        var td_Eq = 0;
        var td_Ca = {};
        td_r++;
        for (td_hi = 0; td_hi < td_x.length; td_hi++) {
            var td_Wt = td_x[td_hi][0];
            var td_F5 = td_x[td_hi][1];
            var td_Bw = td_x[td_hi][2];
            if (!td_Bw) {
                td_Eq++;
                continue;
            }
            if (td_r >= td_F5) {
                var td_Ko = td_Wt.getFPParams();
                if (td_Ko !== null && td_Ko !== "" && td_Ca[td_Ko] !== true) {
                    td_Wy += td_Ko;
                    td_Ca[td_Ko] = true;
                    if (td_p5 && typeof td_Wt.getRunTimeMS !== [][[]] + "") {
                        td_p5.report(td_Wt.getRunTimeMS());
                    }
                }
                if (!td_Wt.tryAgain()) {
                    td_x[td_hi][2] = false;
                    td_Eq++;
                } else {}
            }
        }
        if (td_Wy.length > 0) {
            var td_Xx = null;
            switch (td_wv) {
            case 0:
                td_Xx = td_4m + ((typeof (td_0b.tdz_c3e4cb62a294435ca62d5ce5fc17520c) !== "undefined" && typeof (td_0b.tdz_c3e4cb62a294435ca62d5ce5fc17520c.td_f) !== "undefined") ? (td_0b.tdz_c3e4cb62a294435ca62d5ce5fc17520c.td_f(1081, 10)) : null) + td_0b.td_0B(td_Wy, td_3r);
                break;
            case 1:
            default:
                td_Xx = td_5Q + ((typeof (td_0b.tdz_c3e4cb62a294435ca62d5ce5fc17520c) !== "undefined" && typeof (td_0b.tdz_c3e4cb62a294435ca62d5ce5fc17520c.td_f) !== "undefined") ? (td_0b.tdz_c3e4cb62a294435ca62d5ce5fc17520c.td_f(1081, 10)) : null) + td_0b.td_0B(td_Wy, td_3r);
                break;
            }
            td_0Q(td_Xx, document);
        }
        if (td_r >= Math.ceil(td_Z8 / td_fp)) {
            return;
        }
        if (td_Eq < td_x.length) {
            td_do = setTimeout(td_D, td_fp);
        } else {
            this.isDone = true;
        }
    }
}
var td_2Z = new td_d(td_f);
var td_0A = new td_d(td_M);
var td_0b = td_0b || {};
function td_5f() {
    var td_cq = 3;
    var td_ei = {};
    var td_sM = false;
    var td_H5 = 0;
    var td_lY = "Z";
    var td_Cu = "e";
    var td_qh = "w";
    var td_Xf = "k";
    var td_x = "M";
    var td_Ti = "T";
    var td_EF = "G";
    var td_XA = 0;
    var td_lD = 1;
    td_0b.behavioSecBaseTimestamp = td_0b.behavioSecBaseTimestamp || td_p();
    var td_xd = null;
    var td_CX = {
        meta: {},
        events: [],
        bhsce: {}
    };
    this.getVersion = function() {
        return td_cq;
    }
    ;
    this.getIdentElementTypeIdx = function() {
        return td_XA;
    }
    ;
    this.getIdentIdIdx = function() {
        return td_lD;
    }
    ;
    this.getTargetName = function(td_Xa) {
        var td_X9 = this.getDefaultTargetName(td_Xa);
        return td_X9[td_XA] + td_X9[td_lD];
    }
    ;
    this.setAttr = function(td_Cv, td_Vp) {
        if (typeof td_Cv === [][[]] + "" || td_Cv === null || td_Cv === "" || typeof td_Vp === [][[]] + "" || td_Vp === null || td_Vp === "") {
            return;
        }
        td_ei[td_Cv] = td_Vp;
    }
    ;
    function td_wf(td_QZ) {
        return td_QZ[td_0b.IDENT_ID] ? td_QZ[td_0b.IDENT_ID] : td_QZ[td_0b.IDENT_NAME];
    }
    this.getDefaultTargetName = function(td_DM) {
        return [td_DM[td_0b.IDENT_TYPE], ("#" + td_wf(td_DM))];
    }
    ;
    this.getTimestamp = function() {
        return td_p() - td_0b.behavioSecBaseTimestamp;
    }
    ;
    this.getBaseTimestamp = function() {
        return td_0b.behavioSecBaseTimestamp;
    }
    ;
    this.getElementIdentifier = function(td_EQ) {
        var td_tv = td_0b.getEventTypeIdName(td_EQ);
        if (td_tv[td_0b.IDENT_TYPE] && (td_tv[td_0b.IDENT_ID] || td_tv[td_0b.IDENT_NAME])) {
            return this.getDefaultTargetName(td_tv);
        }
        var td_hs = td_EQ.target || td_EQ.srcElement || {};
        if (td_hs && td_hs.parentNode) {
            var td_Bo = td_0b.getEventParentTypeIdName(td_EQ);
            var td_FM = td_Bo[td_0b.IDENT_ID] || td_Bo[td_0b.IDENT_NAME] || "";
            var td_fo = td_tv[td_0b.IDENT_ID] || td_tv[td_0b.IDENT_NAME] || "";
            var td_fl = td_tv[td_0b.IDENT_TYPE] || "";
            var td_qP = td_Bo[td_0b.IDENT_TYPE] || "";
            return [null, td_fl + "#" + td_fo + "#" + td_qP + "#" + td_FM];
        }
        if (td_tv[td_0b.IDENT_TYPE]) {
            return [null, td_tv[td_0b.IDENT_TYPE]];
        }
        return null;
    }
    ;
    this.addGlobalEvent = function(td_OM, td_aC, td_pd) {
        td_CX.events.push([td_OM, this.getTimestamp(), ((td_aC) ? (td_aC + td_pd) : td_pd)]);
        td_sM = true;
    }
    ;
    this.addGlobalEventState = function(td_G4, td_Ex) {
        td_CX.events.push([td_G4, this.getTimestamp(), td_Ex]);
        td_sM = true;
    }
    ;
    this.addGlobalStats = function(td_tV) {
        if (typeof td_tV === [][[]] + "" || td_tV === null) {
            return;
        }
        td_CX.meta[td_tV] = (td_tV in td_CX.meta ? ++td_CX.meta[td_tV] : 1);
        td_sM = true;
    }
    ;
    this.setMouseEnvData = function(td_rk) {
        td_CX.bhsce = td_rk;
        td_sM = true;
    }
    ;
    this.resetStateEvents = function() {
        td_CX.events = [];
    }
    ;
    this.getGlobalStats = function(td_bM) {
        if (typeof td_bM === [][[]] + "" || td_bM === null) {
            return 0;
        }
        td_CX.meta[td_bM] = (td_bM in td_CX.meta ? td_CX.meta[td_bM] : 0);
        return td_CX.meta[td_bM];
    }
    ;
    this.checkDevicePixelRatio = function() {
        if (td_xd !== window.devicePixelRatio) {
            td_xd = window.devicePixelRatio;
            this.addGlobalEvent(td_EF, null, td_xd);
        }
    }
    ;
    this.metaMapping = function(td_tm) {
        switch (td_tm) {
        case td_4j:
            return td_Cu;
        case td_3l:
            return td_qh;
        default:
            return td_Ti;
        }
    }
    ;
    this.isPending = function() {
        return td_sM;
    }
    ;
    this.resetPending = function() {
        td_sM = false;
    }
    ;
    this.getJsonEventsData = function() {
        if (typeof JSON !== [][[]] + "" && typeof JSON.stringify !== [][[]] + "") {
            return JSON.stringify(td_CX.events);
        }
        return "";
    }
    ;
    this.getJsonMetaData = function() {
        if (typeof JSON !== [][[]] + "" && typeof JSON.stringify !== [][[]] + "") {
            return JSON.stringify(td_CX.meta);
        }
        return "";
    }
    ;
    this.getMouseEnvData = function() {
        if (typeof JSON !== [][[]] + "" && typeof JSON.stringify !== [][[]] + "") {
            return JSON.stringify(td_CX.bhsce);
        }
        return "";
    }
    ;
    this.length = function() {
        return td_H5;
    }
    ;
}
td_0b.tdz_0735a4a131d64e8bac83a9ae3ed482d6 = new td_0b.td_6D("\x30\x37\x33\x35\x61\x34\x61\x31\x33\x31\x64\x36\x34\x65\x38\x62\x61\x63\x38\x33\x61\x39\x61\x65\x33\x65\x64\x34\x38\x32\x64\x36\x37\x34\x37\x38\x37\x65\x37\x38\x30\x65\x34\x31\x31\x32\x35\x34\x36\x30\x35\x32\x31\x36\x35\x39\x35\x38\x30\x39\x35\x37\x30\x63\x31\x36\x30\x62\x35\x64\x35\x36\x30\x64\x35\x64\x30\x38\x31\x33\x34\x34\x30\x64\x30\x31\x35\x31\x35\x34\x35\x66\x30\x62\x34\x33\x34\x33\x35\x32\x34\x34\x35\x64\x30\x34\x35\x31\x30\x64");
var td_0b = td_0b || {};
td_0b.BB_COMMON = {};
td_0b.BB_COMMON.NOT_TOO_LARGE = 0;
td_0b.BB_COMMON.RESULT_QUERY_DATA = 1;
td_0b.makeQueryStringIfJsonUnderMaxSize = function(td_x, td_EI, td_D) {
    if (typeof td_D === [][[]] + "" || td_D === null || 3 > td_D.length) {
        return [true, ""];
    }
    if (td_D.length > td_EI) {
        return [false, ""];
    }
    return [true, "&" + td_x + "=" + encodeURIComponent(td_D)];
}
;
td_0b.td_5Y = function(td_ZB) {
    var td_x = [];
    for (var td_D in td_ZB) {
        if (!td_D.hasOwnProperty) {
            continue;
        }
        td_x.push(td_D);
    }
    return td_x;
}
;
td_0b.td_1w = function() {
    var td_D = ((typeof (td_0b.tdz_0735a4a131d64e8bac83a9ae3ed482d6) !== "undefined" && typeof (td_0b.tdz_0735a4a131d64e8bac83a9ae3ed482d6.td_f) !== "undefined") ? (td_0b.tdz_0735a4a131d64e8bac83a9ae3ed482d6.td_f(0, 14)) : null);
    if (((typeof (td_0b.tdz_0735a4a131d64e8bac83a9ae3ed482d6) !== "undefined" && typeof (td_0b.tdz_0735a4a131d64e8bac83a9ae3ed482d6.td_f) !== "undefined") ? (td_0b.tdz_0735a4a131d64e8bac83a9ae3ed482d6.td_f(14, 7)) : null)in document.createElement(((typeof (td_0b.tdz_0735a4a131d64e8bac83a9ae3ed482d6) !== "undefined" && typeof (td_0b.tdz_0735a4a131d64e8bac83a9ae3ed482d6.td_f) !== "undefined") ? (td_0b.tdz_0735a4a131d64e8bac83a9ae3ed482d6.td_f(21, 3)) : null))) {
        td_D = ((typeof (td_0b.tdz_0735a4a131d64e8bac83a9ae3ed482d6) !== "undefined" && typeof (td_0b.tdz_0735a4a131d64e8bac83a9ae3ed482d6.td_f) !== "undefined") ? (td_0b.tdz_0735a4a131d64e8bac83a9ae3ed482d6.td_f(24, 5)) : null);
    } else {
        if (typeof document.onmousewheel !== [][[]] + "") {
            td_D = ((typeof (td_0b.tdz_0735a4a131d64e8bac83a9ae3ed482d6) !== "undefined" && typeof (td_0b.tdz_0735a4a131d64e8bac83a9ae3ed482d6.td_f) !== "undefined") ? (td_0b.tdz_0735a4a131d64e8bac83a9ae3ed482d6.td_f(29, 10)) : null);
        }
    }
    return td_D;
}
;
td_0b.tdz_8086fe1efc9f4cd2805a2bfbe703b344 = new td_0b.td_6D("\x38\x30\x38\x36\x66\x65\x31\x65\x66\x63\x39\x66\x34\x63\x64\x32\x38\x30\x35\x61\x32\x62\x66\x62\x65\x37\x30\x33\x62\x33\x34\x34\x35\x64\x35\x34\x30\x66\x30\x35\x30\x30\x35\x37\x30\x31\x30\x30\x30\x32\x30\x31\x35\x66\x35\x34\x35\x36\x35\x34\x35\x37\x31\x34\x35\x34\x35\x31\x36\x61\x30\x65\x35\x65\x30\x36\x35\x62\x34\x34\x30\x66\x35\x31\x30\x64\x35\x66\x31\x31\x35\x31\x30\x39\x31\x32\x35\x32\x35\x32\x30\x35\x35\x61\x31\x35\x30\x34\x30\x63");
var td_0b = td_0b || {};
if (typeof td_0b.td_0H === [][[]] + "") {
    td_0b.td_0H = [];
}
function td_0i(td_B7) {
    try {
        if (window.localStorage) {
            var td_cb = null;
            var td_yD = null;
            var td_yk = window.localStorage.getItem(((typeof (td_0b.tdz_8086fe1efc9f4cd2805a2bfbe703b344) !== "undefined" && typeof (td_0b.tdz_8086fe1efc9f4cd2805a2bfbe703b344.td_f) !== "undefined") ? (td_0b.tdz_8086fe1efc9f4cd2805a2bfbe703b344.td_f(0, 15)) : null));
            if (td_yk !== null) {
                var td_Gz = td_yk.split("_");
                if (td_Gz.length === 2) {
                    var td_I4 = td_Gz[1];
                    if (td_I4 < td_p()) {
                        window.localStorage.setItem(((typeof (td_0b.tdz_8086fe1efc9f4cd2805a2bfbe703b344) !== "undefined" && typeof (td_0b.tdz_8086fe1efc9f4cd2805a2bfbe703b344.td_f) !== "undefined") ? (td_0b.tdz_8086fe1efc9f4cd2805a2bfbe703b344.td_f(0, 15)) : null), td_4e);
                        td_cb = td_4e.split("_")[0];
                        td_yD = td_Gz[0];
                    } else {
                        td_cb = td_Gz[0];
                    }
                } else {
                    if (td_Gz.length === 1) {
                        window.localStorage.setItem(((typeof (td_0b.tdz_8086fe1efc9f4cd2805a2bfbe703b344) !== "undefined" && typeof (td_0b.tdz_8086fe1efc9f4cd2805a2bfbe703b344.td_f) !== "undefined") ? (td_0b.tdz_8086fe1efc9f4cd2805a2bfbe703b344.td_f(0, 15)) : null), td_Gz[0] + "_" + td_4e.split("_")[1]);
                        td_cb = td_Gz[0];
                    } else {
                        window.localStorage.setItem(((typeof (td_0b.tdz_8086fe1efc9f4cd2805a2bfbe703b344) !== "undefined" && typeof (td_0b.tdz_8086fe1efc9f4cd2805a2bfbe703b344.td_f) !== "undefined") ? (td_0b.tdz_8086fe1efc9f4cd2805a2bfbe703b344.td_f(0, 15)) : null), td_4e);
                        td_cb = td_4e.split("_")[0];
                    }
                }
            } else {
                window.localStorage.setItem(((typeof (td_0b.tdz_8086fe1efc9f4cd2805a2bfbe703b344) !== "undefined" && typeof (td_0b.tdz_8086fe1efc9f4cd2805a2bfbe703b344.td_f) !== "undefined") ? (td_0b.tdz_8086fe1efc9f4cd2805a2bfbe703b344.td_f(0, 15)) : null), td_4e);
                td_cb = td_4e.split("_")[0];
            }
            var td_g8 = "";
            if (td_yD !== null) {
                td_g8 = ((typeof (td_0b.tdz_8086fe1efc9f4cd2805a2bfbe703b344) !== "undefined" && typeof (td_0b.tdz_8086fe1efc9f4cd2805a2bfbe703b344.td_f) !== "undefined") ? (td_0b.tdz_8086fe1efc9f4cd2805a2bfbe703b344.td_f(15, 8)) : null) + td_yD;
            }
            var td_Ss = td_5Q + td_g8;
            if (typeof td_B7 !== [][[]] + "" && td_B7 === true) {
                td_Ss += ((typeof (td_0b.tdz_8086fe1efc9f4cd2805a2bfbe703b344) !== "undefined" && typeof (td_0b.tdz_8086fe1efc9f4cd2805a2bfbe703b344.td_f) !== "undefined") ? (td_0b.tdz_8086fe1efc9f4cd2805a2bfbe703b344.td_f(23, 4)) : null) + td_0b.td_0B(((typeof (td_0b.tdz_8086fe1efc9f4cd2805a2bfbe703b344) !== "undefined" && typeof (td_0b.tdz_8086fe1efc9f4cd2805a2bfbe703b344.td_f) !== "undefined") ? (td_0b.tdz_8086fe1efc9f4cd2805a2bfbe703b344.td_f(27, 4)) : null) + td_cb, td_3r);
            } else {
                td_B7 = false;
                td_Ss += ((typeof (td_0b.tdz_8086fe1efc9f4cd2805a2bfbe703b344) !== "undefined" && typeof (td_0b.tdz_8086fe1efc9f4cd2805a2bfbe703b344.td_f) !== "undefined") ? (td_0b.tdz_8086fe1efc9f4cd2805a2bfbe703b344.td_f(31, 4)) : null) + td_0b.td_0B(((typeof (td_0b.tdz_8086fe1efc9f4cd2805a2bfbe703b344) !== "undefined" && typeof (td_0b.tdz_8086fe1efc9f4cd2805a2bfbe703b344.td_f) !== "undefined") ? (td_0b.tdz_8086fe1efc9f4cd2805a2bfbe703b344.td_f(35, 4)) : null) + td_cb, td_3r);
            }
            td_0Q(td_Ss, document);
            if (typeof td_4c !== [][[]] + "") {
                td_4c(td_B7);
            }
            return td_Ss;
        }
    } catch (td_x) {}
}
function td_0G() {
    td_0b.td_6z();
    td_0b.td_3g(document);
    td_u();
    td_0i(true);
}
td_0b.td_0H.push(function() {
    var td_3A = new td_0b.td_6D("e082c339034f464b95fd14c035235bea0D444C4210091C16471E44145B505D0E505B014A525D01531D565D5E1A182D345D48487836545B7E7D6A452F72090D035F575E51025706510A04535150045803127B0A46390144535364041E63607F5B6C45553452003A437961075F031648341C5B0170337A5C7542627F1F446E442A0918322B456752496C617E7C422E24082C48544B1776415860415A0B0C046E2F634C0F26636B5100017A5E5076535C101F5148020F5566610375043E61705608556D210A464631715A037B44702022221C664B710402694C6202644B054365350A0D36205701344A5C0D51000351570004045C560752075B550556560C0456565A025F5257030509550C6D020D55555757040B025002040A0252020004500454140C53055419570556001F5201525D4C57030056510A070055520050");
    td_5Q = (td_3A) ? td_3A.td_f(0, 218) : null;
    td_4e = (td_3A) ? td_3A.td_f(218, 46) : null;
    td_3r = (td_3A) ? td_3A.td_f(264, 36) : null;
});
td_0b.tdz_a933a66cdfef4570b6fef050ff3194e7 = new td_0b.td_6D("\x61\x39\x33\x33\x61\x36\x36\x63\x64\x66\x65\x66\x34\x35\x37\x30\x62\x36\x66\x65\x66\x30\x35\x30\x66\x66\x33\x31\x39\x34\x65\x37\x33\x32\x34\x64\x35\x32\x34\x37\x30\x34\x37\x62\x35\x37\x30\x30\x30\x63\x30\x66\x30\x62\x30\x33\x37\x37\x35\x61\x35\x39\x34\x34\x30\x37\x34\x65\x31\x32\x34\x35\x34\x62\x31\x30\x37\x63\x35\x65\x30\x66\x31\x32\x35\x61\x35\x30\x35\x35\x31\x34\x31\x36\x34\x33\x30\x30\x34\x64\x35\x36\x31\x33\x30\x66\x35\x33\x35\x33\x30\x37\x31\x37\x34\x36\x31\x31\x30\x39\x31\x34\x35\x37\x35\x32\x31\x30\x31\x31\x35\x33\x31\x32\x34\x35\x31\x36\x34\x32\x35\x63\x35\x66\x31\x34\x34\x36\x34\x37\x35\x65\x31\x39\x34\x36\x31\x30\x35\x39\x30\x66\x35\x30\x35\x64\x35\x34\x34\x66\x36\x35\x34\x32\x30\x32\x31\x30\x30\x33\x32\x38\x30\x37\x35\x37\x35\x64\x35\x65\x35\x65\x30\x37\x37\x35\x30\x39\x30\x62\x31\x32\x35\x35\x34\x64\x34\x34\x34\x36\x34\x62\x31\x33\x36\x38\x35\x30\x35\x31\x30\x39\x35\x33\x30\x38\x35\x37\x35\x34\x31\x33\x30\x63\x35\x37\x35\x66\x30\x64\x34\x34\x31\x32\x30\x64\x31\x34\x35\x31\x35\x34\x35\x33\x31\x65\x34\x63\x31\x38\x33\x35\x31\x31\x30\x37\x34\x34\x35\x30\x31\x30\x34\x62\x34\x36\x36\x37\x35\x39\x35\x30\x34\x37\x34\x35\x35\x61\x30\x34\x34\x64\x35\x62\x35\x63\x30\x35\x31\x36\x35\x62\x31\x36\x31\x37\x31\x32\x34\x35\x30\x34\x35\x31\x31\x35\x35\x38\x34\x36\x30\x37\x34\x34\x31\x34\x30\x63\x30\x32\x35\x34\x35\x30\x35\x65\x34\x36\x30\x34\x34\x61\x31\x31\x35\x38\x31\x34\x30\x36\x35\x38\x30\x66\x35\x61\x34\x31\x35\x36\x31\x35\x35\x33\x31\x36\x31\x30\x31\x30\x30\x37\x31\x31\x30\x33\x31\x61\x35\x38\x35\x38\x35\x65\x30\x64\x34\x35\x31\x36\x30\x34\x30\x35\x35\x35\x34\x36\x35\x35\x31\x34\x30\x66\x35\x35\x35\x36\x37\x34\x35\x37\x30\x31\x35\x32\x30\x37\x35\x65\x35\x62\x35\x61\x30\x62\x35\x64\x35\x61\x30\x65\x30\x61\x30\x39\x31\x35\x31\x37\x34\x36\x34\x36\x34\x33\x34\x35\x31\x34\x34\x31\x31\x65\x31\x63\x31\x63\x30\x30\x30\x34\x30\x32\x35\x35\x35\x32\x30\x36\x30\x37\x30\x65\x30\x63\x35\x63\x37\x31\x30\x65\x35\x37\x34\x37\x34\x30\x32\x35\x35\x33\x34\x32\x30\x36\x30\x37\x31\x32\x30\x63\x30\x39\x35\x61\x37\x36\x35\x38\x35\x63\x30\x65\x35\x33\x30\x35\x31\x31\x30\x39\x34\x32\x31\x35\x31\x64\x34\x36\x30\x33\x34\x62\x35\x32\x35\x63\x34\x34\x31\x31\x35\x65\x30\x65\x35\x37\x30\x39\x31\x33\x32\x37\x35\x39\x35\x38\x31\x37\x31\x37\x32\x32\x30\x30\x31\x32\x35\x31\x35\x36\x34\x33\x35\x39\x30\x64\x35\x38\x32\x35\x30\x61\x30\x61\x35\x63\x35\x30\x35\x33\x31\x32\x30\x39\x34\x31\x31\x31\x31\x34\x31\x34\x30\x62\x35\x38\x34\x31\x35\x66\x35\x63\x35\x64\x31\x35\x34\x35\x31\x36\x30\x35\x30\x62\x31\x33\x30\x62\x30\x32\x37\x32\x35\x61\x35\x39\x34\x34\x31\x31\x37\x32\x30\x33\x31\x31\x30\x33\x35\x33\x34\x31\x35\x39\x30\x39\x30\x38\x37\x30\x35\x65\x35\x35\x35\x38\x30\x30\x35\x34\x31\x35\x35\x36\x34\x31\x31\x33\x34\x63\x31\x36\x35\x35\x30\x32\x30\x61\x31\x30\x30\x34\x31\x35\x31\x34\x35\x62\x35\x38\x34\x34\x34\x32\x34\x35\x31\x33\x31\x35\x31\x36\x35\x66\x34\x37\x34\x34\x30\x33\x30\x32\x37\x35\x35\x65\x35\x37\x34\x30\x31\x36\x37\x33\x30\x34\x34\x64\x35\x36\x35\x30\x31\x35\x35\x66\x35\x39\x30\x64\x32\x37\x30\x39\x30\x39\x30\x61\x35\x31\x35\x36\x34\x33\x35\x66\x31\x30\x31\x36\x34\x62\x34\x35\x30\x30\x35\x31\x35\x63\x35\x63\x30\x33\x30\x32\x31\x33\x34\x35\x35\x36\x31\x34\x30\x32\x35\x32\x31\x35\x31\x39\x35\x35\x35\x63\x30\x66\x34\x32\x37\x35\x30\x63\x30\x61\x31\x32\x30\x30\x31\x65\x34\x30\x31\x62\x37\x31\x35\x66\x30\x63\x34\x32\x31\x35\x32\x31\x30\x33\x34\x34\x35\x30\x35\x33\x31\x32\x30\x66\x35\x63\x35\x66\x37\x61\x35\x62\x30\x39\x35\x62\x30\x34\x35\x61\x34\x37\x35\x63\x31\x33\x31\x36\x31\x62\x34\x33\x30\x39\x33\x39\x30\x33\x30\x39\x35\x61\x34\x31\x37\x34\x35\x66\x30\x63\x34\x32\x30\x33\x31\x64\x31\x32\x31\x65\x35\x38\x35\x35\x30\x37\x31\x35\x34\x36\x34\x33\x35\x63\x36\x30\x30\x30\x34\x66\x31\x35\x31\x39\x35\x61\x34\x30\x34\x31\x34\x33\x35\x38\x30\x37\x30\x31\x30\x30\x30\x63\x30\x38\x35\x31\x35\x31\x31\x39\x37\x36\x30\x64\x35\x38\x31\x32\x31\x36\x32\x32\x35\x35\x34\x31\x35\x35\x30\x35\x31\x32\x35\x61\x35\x65\x35\x37\x37\x37\x30\x61\x35\x62\x30\x64\x35\x63\x35\x30\x34\x37\x30\x65\x34\x34\x31\x36\x34\x65\x34\x34\x30\x30\x30\x34\x30\x66\x35\x38\x35\x30\x35\x33\x31\x30\x31\x36\x35\x39\x34\x36\x30\x36\x30\x65\x35\x35\x35\x36\x35\x62\x34\x36\x31\x32\x35\x62\x35\x34\x31\x39\x34\x37\x30\x63\x34\x64\x30\x34\x31\x39\x35\x63\x35\x35\x34\x31\x34\x32\x35\x65\x30\x36\x34\x34\x30\x34\x30\x34\x31\x35\x35\x31\x35\x39\x35\x65\x35\x65\x30\x37\x31\x36\x31\x32\x30\x30\x31\x65\x34\x34\x37\x33\x35\x66\x30\x38\x31\x32\x34\x30\x37\x35\x35\x63\x34\x30\x30\x30\x35\x34\x31\x35\x35\x30\x35\x63\x35\x64\x32\x32\x35\x39\x35\x61\x30\x66\x30\x31\x30\x35\x31\x31\x30\x39\x34\x36\x31\x35\x31\x61\x31\x30\x30\x63\x35\x39\x34\x36\x30\x33\x30\x39\x35\x65\x34\x31\x36\x33\x31\x32\x31\x34\x35\x61\x35\x66\x35\x65\x37\x32\x30\x61\x35\x39\x31\x35\x34\x61\x37\x37\x35\x36\x31\x35\x35\x33\x35\x35\x31\x37\x30\x64\x30\x39\x30\x62\x32\x35\x35\x62\x35\x39\x35\x62\x35\x35\x30\x31\x34\x32\x30\x39\x31\x37\x34\x36\x31\x64\x31\x35\x35\x36\x30\x39\x30\x38\x34\x37\x34\x32\x31\x39\x35\x30\x30\x30\x34\x33\x30\x34\x35\x61\x34\x37\x35\x61\x30\x65\x35\x38\x31\x36\x30\x61\x31\x37\x34\x36\x30\x31\x30\x66\x34\x37\x35\x34\x35\x35\x35\x63\x30\x37\x35\x32\x32\x30\x30\x61\x30\x38\x34\x34\x34\x36\x37\x34\x30\x33\x31\x32\x35\x36\x35\x32\x34\x64\x35\x64\x30\x61\x35\x39\x32\x32\x35\x36\x35\x66\x35\x66\x30\x34\x35\x35\x34\x32\x30\x63\x31\x36\x34\x36\x34\x38\x34\x36\x34\x64\x35\x63\x35\x32\x35\x63\x30\x36\x31\x36\x30\x66\x31\x36\x34\x36\x35\x34\x35\x63\x34\x33\x30\x37\x30\x34\x35\x66\x35\x34\x35\x64\x37\x32\x30\x61\x35\x39\x31\x35\x34\x61\x37\x37\x35\x36\x31\x35\x35\x33\x35\x35\x31\x37\x30\x64\x30\x39\x30\x62\x32\x35\x35\x62\x35\x39\x35\x62\x35\x35\x30\x31\x34\x32\x30\x39\x31\x37\x34\x36\x31\x64\x31\x35\x35\x64\x33\x39\x30\x30\x35\x63\x35\x66\x34\x64\x37\x30\x30\x30\x34\x33\x30\x34\x35\x61\x34\x37\x35\x61\x30\x65\x35\x38\x37\x35\x30\x63\x30\x61\x31\x32\x30\x30\x31\x65\x34\x30\x31\x35\x35\x65\x34\x33\x34\x32\x35\x38\x31\x33\x30\x39\x30\x61\x35\x33\x35\x34\x35\x65\x31\x30\x30\x37\x34\x30\x30\x33\x35\x64\x30\x33\x35\x37\x34\x37\x31\x39\x31\x39\x31\x34\x31\x66\x34\x31\x31\x30\x35\x63\x30\x35\x30\x61\x35\x62\x34\x33\x30\x63\x35\x32\x35\x64\x30\x61\x31\x36\x30\x38\x35\x30\x31\x32\x30\x62\x35\x62\x30\x30\x30\x66\x31\x36\x30\x63\x30\x30\x34\x37\x35\x66\x30\x34\x30\x35\x35\x66\x35\x65\x30\x34\x31\x66\x35\x39\x35\x35\x30\x64\x30\x62\x35\x63\x30\x35\x35\x65");
var td_0b = td_0b || {};
var td_0D = 0;
var td_3x = 0;
function td_4R() {
    var td_Xl = {
        STR_INITIAL_STATE_NEEDS_TO_BE_SET: ((typeof (td_0b.tdz_a933a66cdfef4570b6fef050ff3194e7) !== "undefined" && typeof (td_0b.tdz_a933a66cdfef4570b6fef050ff3194e7.td_f) !== "undefined") ? (td_0b.tdz_a933a66cdfef4570b6fef050ff3194e7.td_f(0, 69)) : null),
        STR_YIELDING_MAIN_THREAD: ((typeof (td_0b.tdz_a933a66cdfef4570b6fef050ff3194e7) !== "undefined" && typeof (td_0b.tdz_a933a66cdfef4570b6fef050ff3194e7.td_f) !== "undefined") ? (td_0b.tdz_a933a66cdfef4570b6fef050ff3194e7.td_f(69, 45)) : null),
        STR_THIS_METHOD_MUST_BE_OVERRIDEN: ((typeof (td_0b.tdz_a933a66cdfef4570b6fef050ff3194e7) !== "undefined" && typeof (td_0b.tdz_a933a66cdfef4570b6fef050ff3194e7.td_f) !== "undefined") ? (td_0b.tdz_a933a66cdfef4570b6fef050ff3194e7.td_f(114, 59)) : null),
        NUM_OF_FONTS_TO_PROCESS_BEFORE_TIMING_CHECK: 5,
        FONT_NAME_MONOSPACE: ((typeof (td_0b.tdz_a933a66cdfef4570b6fef050ff3194e7) !== "undefined" && typeof (td_0b.tdz_a933a66cdfef4570b6fef050ff3194e7.td_f) !== "undefined") ? (td_0b.tdz_a933a66cdfef4570b6fef050ff3194e7.td_f(173, 9)) : null),
        FONT_NAME_SERIF: ((typeof (td_0b.tdz_a933a66cdfef4570b6fef050ff3194e7) !== "undefined" && typeof (td_0b.tdz_a933a66cdfef4570b6fef050ff3194e7.td_f) !== "undefined") ? (td_0b.tdz_a933a66cdfef4570b6fef050ff3194e7.td_f(182, 5)) : null),
        TEXT: ((typeof (td_0b.tdz_a933a66cdfef4570b6fef050ff3194e7) !== "undefined" && typeof (td_0b.tdz_a933a66cdfef4570b6fef050ff3194e7.td_f) !== "undefined") ? (td_0b.tdz_a933a66cdfef4570b6fef050ff3194e7.td_f(187, 36)) : null),
        EXCEPTION_MSG: ((typeof (td_0b.tdz_a933a66cdfef4570b6fef050ff3194e7) !== "undefined" && typeof (td_0b.tdz_a933a66cdfef4570b6fef050ff3194e7.td_f) !== "undefined") ? (td_0b.tdz_a933a66cdfef4570b6fef050ff3194e7.td_f(223, 37)) : null),
        NO_FONTS_FOUND: ((typeof (td_0b.tdz_a933a66cdfef4570b6fef050ff3194e7) !== "undefined" && typeof (td_0b.tdz_a933a66cdfef4570b6fef050ff3194e7.td_f) !== "undefined") ? (td_0b.tdz_a933a66cdfef4570b6fef050ff3194e7.td_f(260, 40)) : null),
        CANVAS_NOT_SUPPORTED: ((typeof (td_0b.tdz_a933a66cdfef4570b6fef050ff3194e7) !== "undefined" && typeof (td_0b.tdz_a933a66cdfef4570b6fef050ff3194e7.td_f) !== "undefined") ? (td_0b.tdz_a933a66cdfef4570b6fef050ff3194e7.td_f(300, 46)) : null),
        FAILED_TO_GET_FONT_CONTEXT: ((typeof (td_0b.tdz_a933a66cdfef4570b6fef050ff3194e7) !== "undefined" && typeof (td_0b.tdz_a933a66cdfef4570b6fef050ff3194e7.td_f) !== "undefined") ? (td_0b.tdz_a933a66cdfef4570b6fef050ff3194e7.td_f(346, 52)) : null),
        FONT_CONTEXT_MEASURE_TEXT_UNDEFINED: ((typeof (td_0b.tdz_a933a66cdfef4570b6fef050ff3194e7) !== "undefined" && typeof (td_0b.tdz_a933a66cdfef4570b6fef050ff3194e7.td_f) !== "undefined") ? (td_0b.tdz_a933a66cdfef4570b6fef050ff3194e7.td_f(398, 65)) : null),
        FAILED_TO_CHECK_SIZE_OF_BASELINE_TEXT: ((typeof (td_0b.tdz_a933a66cdfef4570b6fef050ff3194e7) !== "undefined" && typeof (td_0b.tdz_a933a66cdfef4570b6fef050ff3194e7.td_f) !== "undefined") ? (td_0b.tdz_a933a66cdfef4570b6fef050ff3194e7.td_f(463, 71)) : null),
        STR_NO_FONT_STRING: ((typeof (td_0b.tdz_a933a66cdfef4570b6fef050ff3194e7) !== "undefined" && typeof (td_0b.tdz_a933a66cdfef4570b6fef050ff3194e7.td_f) !== "undefined") ? (td_0b.tdz_a933a66cdfef4570b6fef050ff3194e7.td_f(534, 39)) : null),
        FONTS_DETECTION_DISABLED: ((typeof (td_0b.tdz_a933a66cdfef4570b6fef050ff3194e7) !== "undefined" && typeof (td_0b.tdz_a933a66cdfef4570b6fef050ff3194e7.td_f) !== "undefined") ? (td_0b.tdz_a933a66cdfef4570b6fef050ff3194e7.td_f(573, 53)) : null),
        FONTS_DETECTION_YIELD_DISABLED: ((typeof (td_0b.tdz_a933a66cdfef4570b6fef050ff3194e7) !== "undefined" && typeof (td_0b.tdz_a933a66cdfef4570b6fef050ff3194e7.td_f) !== "undefined") ? (td_0b.tdz_a933a66cdfef4570b6fef050ff3194e7.td_f(626, 43)) : null),
        MAX_LENGTH_IE6: 1800,
        FONT_DETECTION_CONTEXT_IS_NULL: ((typeof (td_0b.tdz_a933a66cdfef4570b6fef050ff3194e7) !== "undefined" && typeof (td_0b.tdz_a933a66cdfef4570b6fef050ff3194e7.td_f) !== "undefined") ? (td_0b.tdz_a933a66cdfef4570b6fef050ff3194e7.td_f(669, 56)) : null)
    };
    function td_Jc() {
        var td_AF = null;
        var td_nX = false;
        var td_in = false;
        this.run = function() {
            if (td_AF === null) {
                td_nX = true;
                return;
            }
            while (!td_nX) {
                if (td_in) {
                    td_in = false;
                    setTimeout(function(td_Ks) {
                        td_Ks.run();
                    }, 0, this);
                    return;
                }
                td_AF.run();
            }
        }
        ;
        this.setState = function(td_gv) {
            td_AF = td_gv;
        }
        ;
        this.setEnd = function(td_AS) {
            td_nX = td_AS;
        }
        ;
        this.hasEnded = function() {
            return td_nX;
        }
        ;
        this.setYield = function(td_Jp) {
            td_in = td_Jp;
        }
        ;
    }
    function td_Mn() {
        var td_bz = null;
        var td_di = null;
        var td_ad = 0;
        var td_wj = null;
        var td_Kz = 0;
        var td_LH = 0;
        var td_RW = 0;
        var td_yR = "";
        var td_ee = false;
        var td_iH = 0;
        var td_iP = 0;
        var td_hI = false;
        var td_NR = 0;
        this.m_context = new td_Jc();
        this.init = function() {
            try {
                td_bz = td_0a.getFontsList();
                if (td_bz.length === 0) {
                    this.setEnd(true);
                    return;
                }
                var td_Gv = document.createElement(((typeof (td_0b.tdz_a933a66cdfef4570b6fef050ff3194e7) !== "undefined" && typeof (td_0b.tdz_a933a66cdfef4570b6fef050ff3194e7.td_f) !== "undefined") ? (td_0b.tdz_a933a66cdfef4570b6fef050ff3194e7.td_f(725, 6)) : null));
                if (!td_Gv || !td_Gv.getContext) {
                    this.setEnd(true);
                    return;
                }
                td_di = td_Gv.getContext(((typeof (td_0b.tdz_a933a66cdfef4570b6fef050ff3194e7) !== "undefined" && typeof (td_0b.tdz_a933a66cdfef4570b6fef050ff3194e7.td_f) !== "undefined") ? (td_0b.tdz_a933a66cdfef4570b6fef050ff3194e7.td_f(731, 2)) : null));
                if (!td_di) {
                    this.setEnd(true);
                    return;
                }
                if (typeof td_di.measureText === [][[]] + "") {
                    this.setEnd(true);
                    return;
                }
                td_Kz = td_p();
                td_iH = this.fontSize(td_Xl.FONT_NAME_MONOSPACE, td_Xl.TEXT);
                td_iP = this.fontSize(td_Xl.FONT_NAME_SERIF, td_Xl.TEXT);
                if (td_iH === null || td_iP === null) {
                    this.setEnd(true);
                }
            } catch (td_x) {
                this.setEnd(true);
            }
        }
        ;
        this.run = function() {
            this.m_context.run();
        }
        ;
        this.setState = function(td_RQ) {
            this.m_context.setState(td_RQ);
        }
        ;
        this.setEnd = function(td_IS) {
            this.m_context.setEnd(td_IS);
        }
        ;
        this.hasEnded = function() {
            return this.m_context.hasEnded();
        }
        ;
        this.setYield = function(td_Gh) {
            this.m_context.setYield(td_Gh);
        }
        ;
        this.getFonts = function() {
            return td_bz;
        }
        ;
        this.getStartTime = function() {
            return td_Kz;
        }
        ;
        this.setElapsedTime = function(td_UN) {
            td_LH = td_UN;
        }
        ;
        this.getElapsedTime = function() {
            return td_LH;
        }
        ;
        this.setTimedOut = function(td_an) {
            td_ee = td_an;
        }
        ;
        this.getTimedOut = function() {
            return td_ee;
        }
        ;
        this.setFontNumber = function(td_ON) {
            td_RW = td_ON;
        }
        ;
        this.getFontNumber = function() {
            return td_RW;
        }
        ;
        this.setFontString = function(td_o7) {
            td_yR = td_o7;
        }
        ;
        this.getFontString = function() {
            return td_yR;
        }
        ;
        this.getSizeMonospace = function() {
            return td_iH;
        }
        ;
        this.getSizeSerif = function() {
            return td_iP;
        }
        ;
        this.getFontDetectionTimeLimit = function() {
            return td_ad;
        }
        ;
        this.getNumOfFontsToProcessBeforeYield = function() {
            return td_NR;
        }
        ;
        this.setParams = function(td_ZH) {
            td_wj = td_ZH;
        }
        ;
        this.getParams = function() {
            return td_wj;
        }
        ;
        this.fontSize = function(td_nz, td_N2) {
            td_di.font = ((typeof (td_0b.tdz_a933a66cdfef4570b6fef050ff3194e7) !== "undefined" && typeof (td_0b.tdz_a933a66cdfef4570b6fef050ff3194e7.td_f) !== "undefined") ? (td_0b.tdz_a933a66cdfef4570b6fef050ff3194e7.td_f(733, 5)) : null) + td_nz;
            try {
                return td_di.measureText(td_N2).width;
            } catch (td_x) {}
            return null;
        }
        ;
        this.fontSizeDiff = function(td_Fy, td_Yb, td_w5) {
            var td_Zh = this.fontSize(td_Fy, td_Yb);
            return (td_Zh !== null && td_w5 !== td_Zh);
        }
        ;
        this.setFontDetectionTimeLimit = function(td_rj) {
            td_ad = td_rj;
        }
        ;
        this.setNumOfFontsToProcessBeforeYield = function(td_c3) {
            td_NR = td_c3;
        }
        ;
        this.setSendFontsList = function(td_fC) {
            td_hI = td_fC;
        }
        ;
        this.getSendFontsList = function() {
            return td_hI;
        }
        ;
    }
    function td_z8(td_fh) {
        var td_Y1 = td_fh;
        var td_Su = 0;
        var td_Zs = 0;
        var td_BJ = td_Y1.getFonts();
        var td_LM = td_Y1.getSizeMonospace();
        var td_zq = td_Y1.getSizeSerif();
        var td_mC = td_Y1.getFontDetectionTimeLimit();
        var td_bh = td_Y1.getNumOfFontsToProcessBeforeYield();
        var td_GJ = 0;
        var td_LS = 0;
        var td_mF = "";
        this.run = function() {
            if (td_Su >= td_BJ.length) {
                td_Y1.setFontNumber(td_LS);
                td_Y1.setFontString(td_mF);
                td_Y1.setState(new td_Fd(td_Y1));
                return;
            }
            if (typeof td_BJ[td_Su] === [][[]] + "" || td_BJ[td_Su] === null) {
                td_Su++;
                return;
            }
            var td_Bs = "'" + td_BJ[td_Su] + ((typeof (td_0b.tdz_a933a66cdfef4570b6fef050ff3194e7) !== "undefined" && typeof (td_0b.tdz_a933a66cdfef4570b6fef050ff3194e7.td_f) !== "undefined") ? (td_0b.tdz_a933a66cdfef4570b6fef050ff3194e7.td_f(738, 3)) : null) + td_Xl.FONT_NAME_MONOSPACE;
            var td_nE = "'" + td_BJ[td_Su] + ((typeof (td_0b.tdz_a933a66cdfef4570b6fef050ff3194e7) !== "undefined" && typeof (td_0b.tdz_a933a66cdfef4570b6fef050ff3194e7.td_f) !== "undefined") ? (td_0b.tdz_a933a66cdfef4570b6fef050ff3194e7.td_f(738, 3)) : null) + td_Xl.FONT_NAME_SERIF;
            if (td_Y1.fontSizeDiff(td_Bs, td_Xl.TEXT, td_LM) === true || td_Y1.fontSizeDiff(td_nE, td_Xl.TEXT, td_zq) === true) {
                td_LS++;
                td_mF += "," + td_BJ[td_Su];
            }
            if (td_mC > 0 && (td_Su % td_Xl.NUM_OF_FONTS_TO_PROCESS_BEFORE_TIMING_CHECK) === 0) {
                td_GJ = td_p() - td_Y1.getStartTime();
                if (td_GJ > td_mC) {
                    td_Y1.setElapsedTime(td_GJ);
                    td_Y1.setTimedOut(true);
                    td_Y1.setFontNumber(td_LS);
                    td_Y1.setFontString(td_mF);
                    td_Y1.setState(new td_Fd(td_Y1));
                    return;
                }
            }
            td_Su++;
            td_Zs++;
            if ((td_bh > 0) && (td_Zs % td_bh === 0)) {
                td_Y1.setYield(true);
            }
        }
        ;
    }
    function td_Fd(td_ld) {
        var td_kg = td_ld;
        var td_M2 = td_kg.getFontString();
        var td_Io = td_kg.getTimedOut();
        var td_gB = null;
        this.run = function() {
            if (!td_M2) {
                td_kg.setEnd(true);
                return;
            }
            if (td_kg.getElapsedTime() === 0) {
                td_kg.setElapsedTime(td_p() - td_kg.getStartTime());
            }
            var td_Ku = td_0P(td_M2);
            if (!td_Io) {
                td_gB = ((typeof (td_0b.tdz_a933a66cdfef4570b6fef050ff3194e7) !== "undefined" && typeof (td_0b.tdz_a933a66cdfef4570b6fef050ff3194e7.td_f) !== "undefined") ? (td_0b.tdz_a933a66cdfef4570b6fef050ff3194e7.td_f(741, 5)) : null) + td_kg.getFontNumber() + ((typeof (td_0b.tdz_a933a66cdfef4570b6fef050ff3194e7) !== "undefined" && typeof (td_0b.tdz_a933a66cdfef4570b6fef050ff3194e7.td_f) !== "undefined") ? (td_0b.tdz_a933a66cdfef4570b6fef050ff3194e7.td_f(746, 5)) : null) + td_Ku + ((typeof (td_0b.tdz_a933a66cdfef4570b6fef050ff3194e7) !== "undefined" && typeof (td_0b.tdz_a933a66cdfef4570b6fef050ff3194e7.td_f) !== "undefined") ? (td_0b.tdz_a933a66cdfef4570b6fef050ff3194e7.td_f(751, 8)) : null) + td_kg.getElapsedTime() + ":" + td_kg.getFontNumber();
            } else {
                td_gB = ((typeof (td_0b.tdz_a933a66cdfef4570b6fef050ff3194e7) !== "undefined" && typeof (td_0b.tdz_a933a66cdfef4570b6fef050ff3194e7.td_f) !== "undefined") ? (td_0b.tdz_a933a66cdfef4570b6fef050ff3194e7.td_f(759, 8)) : null) + td_kg.getElapsedTime() + ":" + td_kg.getFontNumber();
            }
            var td_cT = td_M2.length;
            if (td_cT > 0 && td_kg.getSendFontsList() && !td_Io) {
                if (td_cT > td_Xl.MAX_LENGTH_IE6 && td_6y._eq(((typeof (td_0b.tdz_a933a66cdfef4570b6fef050ff3194e7) !== "undefined" && typeof (td_0b.tdz_a933a66cdfef4570b6fef050ff3194e7.td_f) !== "undefined") ? (td_0b.tdz_a933a66cdfef4570b6fef050ff3194e7.td_f(767, 2)) : null)) && td_1U._eq("6")) {
                    var td_UU = td_M2.indexOf(",", td_Xl.MAX_LENGTH_IE6);
                    if (td_UU !== -1) {
                        td_cT = td_UU;
                    }
                }
                td_gB += ((typeof (td_0b.tdz_a933a66cdfef4570b6fef050ff3194e7) !== "undefined" && typeof (td_0b.tdz_a933a66cdfef4570b6fef050ff3194e7.td_f) !== "undefined") ? (td_0b.tdz_a933a66cdfef4570b6fef050ff3194e7.td_f(769, 5)) : null) + td_M2.substring(0, td_cT);
            }
            td_kg.setParams(td_gB);
            td_kg.setEnd(true);
        }
        ;
    }
    var td_Rm = null;
    var td_Of = null;
    var td_r2 = 0;
    var td_ug = null;
    this.setup = function() {
        td_Rm = new td_Mn();
        var td_Wt = td_0b.parseInt(td_0D);
        var td_nv = td_0b.parseInt(td_3x);
        if (td_Wt === 0) {
            return;
        }
        td_Rm.setFontDetectionTimeLimit(td_Wt);
        if (td_nv === 0) {}
        td_Rm.setNumOfFontsToProcessBeforeYield(td_nv);
        if (typeof td_4w !== [][[]] + "") {
            td_Rm.setSendFontsList(true);
        }
        td_r2 = td_g();
        td_Of = setTimeout(td_P0, 1);
    }
    ;
    function td_P0() {
        if (td_Rm === null) {
            return;
        }
        td_Rm.init();
        td_Rm.setState(new td_z8(td_Rm));
        td_Rm.run();
    }
    this.tryAgain = function() {
        if (td_Rm === null) {
            return true;
        }
        return !td_Rm.hasEnded();
    }
    ;
    this.getFPParams = function() {
        if (td_Rm === null) {
            return null;
        }
        return td_Rm.getParams();
    }
    ;
    this.getRunTimeMS = function() {
        if (td_Rm === null) {
            return "";
        }
        if (td_Rm.hasEnded()) {
            td_ug = td_g() - td_r2;
            return ((typeof (td_0b.tdz_a933a66cdfef4570b6fef050ff3194e7) !== "undefined" && typeof (td_0b.tdz_a933a66cdfef4570b6fef050ff3194e7.td_f) !== "undefined") ? (td_0b.tdz_a933a66cdfef4570b6fef050ff3194e7.td_f(774, 3)) : null) + td_0b.toFixed(td_ug, 2);
        }
        return "";
    }
    ;
    this.getArtifacts = function() {
        return {
            Constants: td_Xl,
            Context: td_Jc,
            FontDetectionContext: td_Mn,
            FontDetectionProcessFontsState: td_z8,
            FontDetectionEndState: td_Fd
        };
    }
    ;
}
td_0D = 5000;
td_3x = 100;
var td_4G = ['Andale Mono', 'Arial', 'Arial Black', 'AR PL UKai CN', 'AR PL UMing CN', 'Batang', 'Bitstream Vera Sans', 'Comic Sans MS', 'Courier New', 'Cursor', 'DejaVu LGC Sans', 'DejaVu Sans', 'DejaVu Sans Mono', 'DejaVu Serif', 'Dotum', 'Droid Sans', 'FreeMono', 'FreeSans', 'FreeSerif', 'gargi', 'Garuda', 'Georgia', 'Hei', 'Impact', 'KacstArt', 'Kedage', 'Khmer OS', 'Khmer OS System', 'Kinnari', 'Liberation Sans Narrow', 'Lohit Bengali', 'Loma', 'Lucida Bright', 'Lucida Sans', 'Lucida Sans Typewriter', 'Luxi Mono', 'Mallige', 'Meera', 'Monospace', 'mry_KacstQurn', 'Mukti Narrow', 'NanumGothic', 'NanumMyeongjo', 'Nimbus Sans L Condensed', 'Norasi', 'OpenSymbol', 'ori1Uni', 'Phetsarath OT', 'Pothana2000', 'Purisa', 'Rachana', 'Rekha', 'Saab', 'Sawasdee', 'System', 'TakaoPGothic', 'Times', 'Times New Roman', 'TlwgMono', 'TlwgTypewriter', 'Tlwg Typist', 'Tlwg Typo', 'Trebuchet MS', 'Ubuntu', 'Ubuntu Condensed', 'Ume Gothic', 'Ume Mincho', 'Ume P Gothic', 'Ume P Mincho', 'Ume UI Gothic', 'Umpush', 'UnBatang', 'UnDinaru', 'UnDotum', 'UnGraphic', 'UnGungseo', 'UnPilgi', 'Untitled1', 'Utopia', 'Vemana2000', 'Verdana', 'Waree', 'Webdings', 'WenQuanYi Bitmap Song', 'WenQuanYi Micro Hei', 'WenQuanYi Zen Hei'];
var td_3W = ['18thCentury', '8514oem', 'AcmeFont', 'Adobe Arabic', 'Agency FB', 'Aharoni', 'Aldhabi', 'Alfredo', 'Algerian', 'Alien Encounters', 'Almonte Snow', 'Amethyst', 'Andalus', 'Aparajita', 'Arabic Transparent', 'Arabic Typesetting', 'AR BERKLEY', 'Arial Baltic', 'Arial CE', 'Arial CYR', 'Arial Greek', 'Arial Narrow', 'Arial Rounded MT Bold', 'Arial TUR', 'Arial Unicode MS', 'Arimo', 'AR JULIAN', 'Asimov', 'Autumn', 'Baby Kruffy', 'Balthazar', 'Baskerville', 'Baskerville Old Face', 'Bastion', 'Batang', 'BatangChe', 'Bauhaus 93', 'Bellerose', 'Bell MT', 'Berlin Sans FB', 'Berlin Sans FB Demi', 'Bernard MT Condensed', 'Birch Std', 'Bitstream Vera Sans', 'Blackadder ITC', 'Blackoak Std', 'BN Jinx', 'BN Machine', 'Bobcat', 'Bodoni MT', 'Bodoni MT Black', 'Bodoni MT Poster Compressed', 'BolsterBold', 'Book Antiqua', 'Bookman Old Style', 'Bookshelf Symbol 7', 'Borealis', 'BOUTON International Symbols', 'Bradley Hand ITC', 'Brandish', 'Britannic Bold', 'Broadway', 'Browallia New', 'BrowalliaUPC', 'Brush Script MT', 'Brush Script Std', 'Brussels', 'Calibri', 'Calibri Light', 'Californian FB', 'Calisto MT', 'Calligraphic', 'Calvin', 'Cambria', 'Cambria Math', 'Candara', 'Candles', 'Castellar', 'Centaur', 'Century', 'Century Gothic', 'Century Schoolbook', 'Chaparral Pro', 'Chaparral Pro Light', 'Charlemagne Std', 'Chiller', 'Chinyen', 'Clarendon', 'Colbert', 'Colonna MT', 'Comic Sans MS', 'Commons', 'Consolas', 'Constantia', 'Coolsville', 'Cooper Black', 'Cooper Std Black', 'Copperplate', 'Corbel', 'Cordia New', 'CordiaUPC', 'Corporate', 'Courier New Baltic', 'Courier New CE', 'Cracked Johnnie', 'Creepygirl', 'Curlz MT', 'DaunPenh', 'David', 'Dayton', 'DejaVu Sans', 'Deneane', 'Detente', 'DFKai-SB', 'Digifit', 'DilleniaUPC', 'Distant Galaxy', 'DokChampa', 'Dominican', 'Dotum', 'DotumChe', 'Ebrima', 'Edwardian Script ITC', 'Elephant', 'Emmett', 'Engravers MT', 'Enliven', 'Eras Bold ITC', 'Ethnocentric', 'EucrosiaUPC', 'Euphemia', 'Expressway Rg', 'FangSong', 'Felix Titling', 'Fingerpop', 'Fixedsys', 'Flubber', 'Footlight MT Light', 'Forte', 'Frankfurter Venetian TT', 'Franklin Gothic Book', 'Franklin Gothic Medium Cond', 'FrankRuehl', 'FreesiaUPC', 'Freestyle Script', 'French Script MT', 'Gabriola', 'Gadugi', 'Garamond', 'Gazzarelli', 'Gentium Basic', 'Gentium Book Basic', 'Geotype TT', 'Giddyup Std', 'Gigi', 'Gill Sans', 'Gill Sans MT', 'Gill Sans MT Condensed', 'Gill Sans MT Ext Condensed Bold', 'Gill Sans Ultra Bold', 'Gill Sans Ultra Bold Condensed', 'Gisha', 'Glockenspiel', 'Gloucester MT Extra Condensed', 'Good Times', 'Goudy Old Style', 'Goudy Stout', 'Greek Diner Inline TT', 'Gulim', 'GulimChe', 'Gungsuh', 'GungsuhChe', 'Haettenschweiler', 'Hand Me Down S (BRK)', 'Hansen', 'Harlow Solid Italic', 'Harrington', 'Harvest', 'HarvestItal', 'Haxton Logos TT', 'Heavy Heap', 'Hei', 'Helvetica', 'Helvetica LT Std', 'HelveticaNeueLT Com 107 XBlkCn', 'Highboot', 'High Tower Text', 'Hobo Std', 'Hollywood Hills', 'Hombre', 'Huxley Titling', 'Imprint MT Shadow', 'Induction', 'Informal Roman', 'IrisUPC', 'Iskoola Pota', 'Italianate', 'JasmineUPC', 'Jokerman', 'Juice ITC', 'Kai', 'KaiTi', 'Kalinga', 'Kartika', 'Khmer UI', 'KodchiangUPC', 'Kokila', 'Kozuka Gothic Pr6N B', 'Kristen ITC', 'Kunstler Script', 'Lao UI', 'Latha', 'Leelawadee', 'Letter Gothic Std', 'LetterOMatic!', 'Levenim MT', 'LilyUPC', 'Limousine', 'Lithos Pro Regular', 'LittleLordFontleroy', 'Lucida Bright', 'Lucida Calligraphy', 'Lucida Fax', 'Lucida Handwriting', 'Lucida Sans Typewriter', 'Mael', 'Magneto', 'Maiandra GD', 'Malgun Gothic', 'Manorly', 'Martina', 'Matura MT Script Capitals', 'Meiryo', 'Meiryo UI', 'MelodBold', 'Mesquite Std', 'Microsoft Himalaya', 'Microsoft JhengHei', 'Microsoft JhengHei UI', 'Microsoft New Tai Lue', 'Microsoft PhagsPa', 'Microsoft Tai Le', 'Microsoft Uighur', 'Microsoft YaHei', 'Microsoft YaHei UI', 'Microsoft Yi Baiti', 'Minerva', 'MingLiU', 'MingLiU-ExtB', 'MingLiU_HKSCS', 'Minion Pro', 'Miriam', 'Mistral', 'Modern', 'Modern No. 20', 'Mongolian Baiti', 'Monotype Corsiva', 'MoolBoran', 'Moonbeam', 'MS Gothic', 'MS Mincho', 'MS Outlook', 'MS PGothic', 'MS PMincho', 'MS Reference Sans Serif', 'MS Reference Specialty', 'MS Sans Serif', 'MS Serif', 'MS UI Gothic', 'MT Extra', 'Myanmar Text', 'Mycalc', 'Myriad Arabic', 'Myriad Hebrew', 'Myriad Pro', 'Narkisim', 'Nasalization', 'Neon Lights', 'Niagara Engraved', 'Niagara Solid', 'Nina', 'Nirmala UI', 'Notram', 'November', 'NSimSun', 'Nueva Std', 'Nueva Std Cond', 'Nyala', 'OCR A Extended', 'OCR A Std', 'Old English Text MT', 'Onyx', 'OpenSymbol', 'OpineHeavy', 'Orator Std', 'Palace Script MT', 'Palatino', 'Papyrus', 'Parchment', 'Parry Hotter', 'PenultimateLight', 'Perpetua', 'Perpetua Titling MT', 'PhrasticMedium', 'Pirate', 'Plantagenet Cherokee', 'Playbill', 'PMingLiU', 'PMingLiU-ExtB', 'Poor Richard', 'Poplar Std', 'PR Celtic Narrow', 'Prestige Elite Std', 'Pristina', 'QuiverItal', 'Rage Italic', 'Ravie', 'Rockwell', 'Rockwell Condensed', 'Rod', 'Roland', 'Rondalo', 'Rosewood Std Regular', 'RowdyHeavy', 'Russel Write TT', 'Sakkal Majalla', 'Salina', 'Script', 'Script MT Bold', 'Segoe Print', 'Segoe UI Semilight', 'Segoe UI Symbol', 'SF Movie Poster', 'Shonar Bangla', 'Showcard Gothic', 'SimHei', 'Simplified Arabic', 'Simplified Arabic Fixed', 'SimSun', 'SimSun-ExtB', 'Skinny', 'Small Fonts', 'Snap ITC', 'Snowdrift', 'Source Code Pro', 'Splash', 'Stencil', 'Stencil Std', 'Stephen', 'SWGamekeys MT', 'System', 'Tarzan', 'Tekton Pro', 'Tekton Pro Cond', 'Tekton Pro Ext', 'Tempus Sans ITC', 'Terminal', 'Terminator Two', 'Times New Roman Baltic', 'Toledo', 'Traditional Arabic', 'Trajan Pro', 'Tw Cen MT', 'Urdu Typesetting', 'Utsaah', 'Valken', 'Vani', 'Vijaya', 'Viner Hand ITC', 'Vivaldi', 'Vivian', 'Vladimir Script', 'Vrinda', 'Waverly', 'Whimsy TT', 'Wide Latin', 'Wingdings 2', 'Woodcut', 'X-Files', 'Year supply of fairy cakes'];
var td_0u = ['Abadi MT Condensed Extra Bold', 'Abadi MT Condensed Light', 'Al Bayan Bold', 'Al Bayan Plain', 'American Typewriter Bold', 'American Typewriter Condensed', 'American Typewriter Light', 'Apple Braille Outline 6 Dot', 'Apple Braille Pinpoint 6 Dot', 'AppleGothic Regular', 'Apple LiGothic Medium', 'Apple LiSung Light', 'AppleMyungjo Regular', 'Apple SD Gothic Neo', 'Apple SD GothicNeo ExtraBold', 'Apple SD Gothic Neo Regular', 'Arial Bold', 'Arial Bold Italic', 'Arial Hebrew Bold', 'Arial Italic', 'Arial Narrow Bold', 'Arial Narrow Bold Italic', 'Arial Narrow Italic', 'Avenir', 'Avenir Black', 'Avenir Next', 'Avenir Next Bold', 'Avenir Next Condensed', 'Avenir Next Condensed Bold', 'Avenir Next Demi Bold', 'Avenir Next Heavy', 'Avenir Next Regular', 'Bangla MN Bold', 'Bangla Sangam MN Bold', 'Baskerville Bold', 'Baskerville Bold Italic', 'Baskerville SemiBold', 'Baskerville SemiBold Italic', 'Bell MT Bold', 'Bell MT Italic', 'Bernard MT Condensed', 'Big Caslon Medium', 'Book Antiqua', 'Book Antiqua Bold', 'Bookman Old Style', 'Bookman Old Style Bold', 'Bookshelf Symbol 7', 'Braggadocio', 'Britannic Bold', 'Brush Script MT Italic', 'Calibri', 'Calibri Bold', 'Calibri Light', 'Calisto MT', 'Calisto MT Bold', 'Cambria', 'Cambria Bold', 'Cambria Math', 'Candara Bold', 'Century', 'Century Gothic', 'Century Gothic Bold', 'Century Schoolbook', 'Century Schoolbook Bold', 'Chalkboard Bold', 'Chalkboard SE', 'Chalkboard SE Bold', 'Cochin Bold', 'Colonna MT', 'Comic Sans MS Bold', 'Consolas', 'Consolas Bold', 'Constantia', 'Constantia Bold', 'Cooper Black', 'Copperplate Bold', 'Copperplate Gothic Bold', 'Copperplate Light', 'Corbel', 'Corbel Bold', 'Corsiva Hebrew Bold', 'Courier Bold', 'Courier New Bold', 'Courier New Italic', 'Courier Oblique', 'Curlz MT', 'Damascus Bold', 'Desdemona', 'Devanagari MT Bold', 'Didot Bold', 'Edwardian Script ITC', 'Engravers MT', 'Engravers MT Bold', 'Euphemia UCAS Bold', 'Eurostile', 'Eurostile Bold', 'Footlight MT Light', 'Franklin Gothic Book', 'Franklin Gothic Book Italic', 'Franklin Gothic Medium', 'Franklin Gothic Medium Italic', 'Futura Condensed ExtraBold', 'Futura Medium', 'Gabriola', 'Garamond', 'Garamond Bold', 'Geeza Pro Bold', 'Georgia Bold', 'Gill Sans Bold', 'Gill Sans MT', 'Gill Sans MT Bold', 'Gill Sans MT Italic', 'Gill Sans Ultra Bold', 'Gloucester MT Extra Condensed', 'Goudy Old Style', 'Goudy Old Style Bold', 'Gujarati MT Bold', 'Gujarati Sangam MN Bold', 'Gulim', 'GungSeo Regular', 'Gurmukhi MN Bold', 'Gurmukhi Sangam MN', 'Gurmukhi Sangam MN Bold', 'Haettenschweiler', 'Harrington', 'HeadLineA Regular', 'Hei Regular', 'Heiti SC Light', 'Heiti TC Light', 'Helvetica Bold', 'Helvetica CY Bold', 'Helvetica CY Plain', 'Helvetica Light', 'Helvetica Neue Bold', 'Helvetica Neue Medium', 'Helvetica Oblique', 'Hiragino Kaku Gothic ProN W3', 'Hiragino Kaku Gothic Pro W3', 'Hiragino Kaku Gothic StdN W8', 'Hiragino Maru Gothic ProN W4', 'Hiragino Mincho ProN W3', 'Hiragino Mincho ProN W6', 'Hiragino Sans GB W3', 'Hiragino Sans GB W6', 'Hoefler Text Black', 'Hoefler Text Ornaments', 'Imprint MT Shadow', 'Kailasa Regular', 'Kai Regular', 'Kaiti SC', 'Kaiti SC Black', 'Kannada MN Bold', 'Kannada Sangam MN Bold', 'Kefa Bold', 'Khmer MN Bold', 'Kino MT', 'Kokonor Regular', 'Lucida Blackletter', 'Lucida Bright', 'Lucida Bright Demibold', 'Lucida Bright Demibold Italic', 'Lucida Bright Italic', 'Lucida Calligraphy', 'Lucida Calligraphy Italic', 'Lucida Console', 'Lucida Fax', 'Lucida Fax Demibold', 'Lucida Fax Regular', 'Lucida Grande Bold', 'Lucida Handwriting', 'Lucida Handwriting Italic', 'Lucida Sans', 'Lucida Sans Demibold Italic', 'Lucida Sans Typewriter', 'Lucida Sans Typewriter Bold', 'Lucida Sans Unicode', 'Malayalam MN Bold', 'Malayalam Sangam MN Bold', 'Marion', 'Marion Bold', 'Marker Felt Thin', 'Marlett', 'Matura MT Script Capitals', 'Meiryo', 'Meiryo Bold', 'Menlo Bold', 'Microsoft Himalaya', 'Microsoft Tai Le', 'Microsoft Tai Le Bold', 'Microsoft Yi Baiti', 'MingLiU', 'MingLiU-ExtB', 'MingLiU_HKSCS', 'Mistral', 'Modern', 'Modern No. 20', 'Mongolian Baiti', 'Monotype Corsiva', 'Monotype Sorts', 'MS Gothic', 'Mshtakan Bold', 'MS Mincho', 'MS PGothic', 'MS PMincho', 'MS Reference Sans Serif', 'MS Reference Specialty', 'MT Extra', 'Myanmar MN Bold', 'NanumGothic', 'Nanum Gothic', 'NanumGothic Bold', 'NanumMyeongjo', 'Nanum Myeongjo', 'NanumMyeongjo Bold', 'New Peninim MT Bold', 'News Gothic MT', 'News Gothic MT Bold', 'Noteworthy Bold', 'Onyx', 'Optima Bold', 'Optima Regular', 'Oriya MN Bold', 'Oriya Sangam MN Bold', 'Osaka-Mono', 'Palatino Bold', 'Palatino Linotype', 'Palatino Linotype Bold', 'Papyrus Condensed', 'PCMyungjo Regular', 'Perpetua', 'Perpetua Bold', 'Perpetua Titling MT', 'Perpetua Titling MT Bold', 'PilGi Regular', 'Playbill', 'PMingLiU', 'PMingLiU-ExtB', 'PT Sans Bold', 'PT Sans Caption Bold', 'PT Sans Narrow Bold', 'Raanana Bold', 'Rockwell', 'Rockwell Bold', 'Rockwell Extra Bold', 'Rockwell Italic', 'SimHei', 'SimSun', 'Sinhala MN Bold', 'Sinhala Sangam MN Bold', 'Skia Regular', 'Songti SC', 'Songti SC Black', 'Stencil', 'STIXGeneral-Bold', 'STIXGeneral-Regular', 'STIXIntegralsD-Bold', 'STIXIntegralsSm-Bold', 'STIXIntegralsUp-Bold', 'STIXIntegralsUpD-Bold', 'STIXIntegralsUpD-Regular', 'STIXIntegralsUp-Regular', 'STIXIntegralsUpSm-Bold', 'STIXNonUnicode-Bold', 'STIXSizeFiveSym-Regular', 'STIXSizeFourSym-Bold', 'STIXSizeOneSym-Bold', 'STIXSizeThreeSym-Bold', 'STIXSizeTwoSym-Bold', 'STIXVariants-Bold', 'STXihei', 'Tahoma Negreta', 'Tamil MN Bold', 'Tamil Sangam MN Bold', 'Telugu MN Bold', 'Telugu Sangam MN Bold', 'Thonburi Bold', 'Times Bold', 'Times New Roman Bold', 'Times New Roman Italic', 'Times Roman', 'Trebuchet MS Bold', 'Tw Cen MT', 'Tw Cen MT Bold', 'Tw Cen MT Italic', 'Verdana Bold', 'Wide Latin', 'Yuppy SC', 'Yuppy SC Regular', 'Yuppy TC', 'Yuppy TC Regular'];
var td_4S = ['AR PL UKai CN', 'AR PL UMing CN', 'AR PL UMing HK', 'AR PL UMing TW', 'AR PL UMing TW MBE', 'Andale Mono', 'Arial', 'Arial Black', 'Arial Unicode MS', 'Baskerville', 'Batang', 'Bitstream Charter', 'Bitstream Vera Sans', 'Carrois Gothic SC', 'Century Schoolbook L', 'Comic Sans MS', 'Courier 10 Pitch', 'Courier New', 'Cursor', 'Cutive Mono', 'Dancing Script', 'DejaVu LGC Sans', 'DejaVu Sans', 'DejaVu Sans Mono', 'DejaVu Serif', 'Dingbats', 'Dotum', 'Droid Sans', 'Droid Sans Mono', 'FreeMono', 'FreeSans', 'FreeSerif', 'Garuda', 'Gentium', 'GentiumAlt', 'Georgia', 'Goudy', 'Hei', 'ITC Stone Serif', 'Impact', 'KacstArt', 'KacstBook', 'KacstDecorative', 'KacstDigital', 'KacstFarsi', 'KacstLetter', 'KacstNaskh', 'KacstOffice', 'KacstOne', 'KacstPen', 'KacstPoster', 'KacstQurn', 'KacstScreen', 'KacstTitle', 'KacstTitleL', 'Kedage', 'Khmer OS', 'Khmer OS System', 'Kinnari', 'Liberation Mono', 'Liberation Sans', 'Liberation Sans Narrow', 'Liberation Serif', 'Lohit Bengali', 'Lohit Devanagari', 'Lohit Gujarati', 'Lohit Hindi', 'Lohit Punjabi', 'Lohit Tamil', 'Loma', 'Lucida Bright', 'Lucida Sans', 'Lucida Sans Typewriter', 'Luxi Mono', 'Mallige', 'Meera', 'Monaco', 'Monospace', 'MotoyaLMaru', 'Mukti Narrow', 'NanumBarunGothic', 'NanumGothic', 'NanumGothicCoding', 'NanumMyeongjo', 'Nimbus Mono L', 'Nimbus Roman No9 L', 'Nimbus Sans L', 'Nimbus Sans L Condensed', 'Norasi', 'Noto Emoji', 'Noto Naskh Arabic', 'Noto Sans', 'Noto Serif', 'OldeEnglish', 'OpenSymbol', 'Palatino', 'Phetsarath OT', 'Pothana2000', 'Purisa', 'Rachana', 'Rekha', 'Roboto', 'Saab', 'Samyak Tamil', 'Sans', 'Sawasdee', 'Serif', 'Standard Symbols L', 'System', 'TakaoExGothic', 'TakaoExMincho', 'TakaoGothic', 'TakaoMincho', 'TakaoPGothic', 'TakaoPMincho', 'Times', 'Times New Roman', 'Tlwg Typist', 'Tlwg Typo', 'TlwgMono', 'TlwgTypewriter', 'Trebuchet MS', 'URW Bookman L', 'URW Chancery L', 'URW Gothic L', 'URW Palladio L', 'Ubuntu', 'Ubuntu Condensed', 'Ubuntu Mono', 'Ume Gothic', 'Ume Mincho', 'Ume P Gothic', 'Ume P Mincho', 'Ume UI Gothic', 'Umpush', 'UnBatang', 'UnDinaru', 'UnDotum', 'UnGraphic', 'UnGungseo', 'UnPilgi', 'Untitled1', 'Utopia', 'Vemana2000', 'Verdana', 'Waree', 'Webdings', 'WenQuanYi Bitmap Song', 'WenQuanYi Micro Hei', 'WenQuanYi Micro Hei Mono', 'WenQuanYi Zen Hei', 'Zawgyi-One', 'gargi', 'mry_KacstQurn', 'ori1Uni'];
var td_0o = ['AR PL UMing CN', 'AR PL UMing HK', 'AR PL UMing TW', 'AR PL UMing TW MBE', 'Arial', 'Arial Unicode MS', 'Baskerville', 'Bitstream Charter', 'Carrois Gothic SC', 'Century Schoolbook L', 'Copperplate', 'Courier 10 Pitch', 'Courier New', 'Cutive Mono', 'Dancing Script', 'DejaVu Sans', 'DejaVu Sans Mono', 'DejaVu Serif', 'Didot', 'Dingbats', 'Droid Sans Mono', 'FreeMono', 'FreeSans', 'FreeSerif', 'Futura', 'Garuda', 'Georgia', 'Gill Sans', 'Helvetica', 'Hoefler Text', 'KacstArt', 'KacstBook', 'KacstDecorative', 'KacstDigital', 'KacstFarsi', 'KacstLetter', 'KacstNaskh', 'KacstOffice', 'KacstOne', 'KacstPen', 'KacstPoster', 'KacstQurn', 'KacstScreen', 'KacstTitle', 'KacstTitleL', 'Kedage', 'Khmer OS', 'Khmer OS System', 'Kinnari', 'Liberation Mono', 'Liberation Sans', 'Liberation Sans Narrow', 'Liberation Serif', 'Lohit Bengali', 'Lohit Gujarati', 'Lohit Hindi', 'Lohit Punjabi', 'Lohit Tamil', 'Loma', 'Lucida Grande', 'Mallige', 'Meera', 'Monaco', 'Monospace', 'MotoyaLMaru', 'Mukti Narrow', 'NanumGothic', 'NanumMyeongjo', 'Nimbus Mono L', 'Nimbus Roman No9 L', 'Nimbus Sans L', 'Norasi', 'Noto Emoji', 'Noto Naskh Arabic', 'Noto Sans', 'Noto Sans Armenian', 'Noto Sans Bengali', 'Noto Sans Canadian Aboriginal', 'Noto Sans Cherokee', 'Noto Sans Devanagari', 'Noto Sans Ethiopic', 'Noto Sans Georgian', 'Noto Sans Gujarati', 'Noto Sans Gurmukhi', 'Noto Sans Hebrew', 'Noto Sans JP', 'Noto Sans KR', 'Noto Sans Kannada', 'Noto Sans Khmer', 'Noto Sans Lao', 'Noto Sans Malayalam', 'Noto Sans Myanmar', 'Noto Sans Oriya', 'Noto Sans SC', 'Noto Sans Sinhala', 'Noto Sans Symbols', 'Noto Sans TC', 'Noto Sans Tamil', 'Noto Sans Telugu', 'Noto Sans Thai', 'Noto Sans Yi', 'Noto Serif', 'OpenSymbol', 'Optima', 'Palatino', 'Palatino Linotype', 'Papyrus', 'Phetsarath OT', 'Pothana2000', 'Purisa', 'Rachana', 'Rekha', 'Roboto', 'Saab', 'Sans', 'Sawasdee', 'Serif', 'Standard Symbols L', 'Symbol', 'TAMu_Kadambri', 'TAMu_Kalyani', 'TAMu_Maduram', 'TSCu_Comic', 'TSCu_Paranar', 'TSCu_Times', 'TakaoExGothic', 'TakaoExMincho', 'TakaoGothic', 'TakaoMincho', 'TakaoPGothic', 'TakaoPMincho', 'Tlwg Typist', 'Tlwg Typo', 'TlwgMono', 'TlwgTypewriter', 'Trebuchet MS', 'URW Bookman L', 'URW Chancery L', 'URW Gothic L', 'URW Palladio L', 'Ubuntu', 'Ubuntu Condensed', 'Ubuntu Mono', 'Umpush', 'UnBatang', 'UnDinaru', 'UnDotum', 'UnGraphic', 'UnGungseo', 'UnPilgi', 'Untitled1', 'Vemana2000', 'Verdana', 'Waree', 'WenQuanYi Micro Hei', 'WenQuanYi Micro Hei Mono', 'Zawgyi-One', 'gargi', 'mry_KacstQurn', 'ori1Uni'];
td_0b.tdz_100f7d97ca5a4725b423246df26fa667 = new td_0b.td_6D("\x31\x30\x30\x66\x37\x64\x39\x37\x63\x61\x35\x61\x34\x37\x32\x35\x62\x34\x32\x33\x32\x34\x36\x64\x66\x32\x36\x66\x61\x36\x36\x37\x30\x31\x30\x31\x30\x32\x35\x35\x30\x33\x35\x31\x30\x66\x30\x30\x35\x62\x35\x38\x35\x34\x30\x33\x35\x37\x35\x33\x35\x37\x35\x33\x30\x37\x35\x61\x37\x62\x37\x35\x36\x30\x37\x35\x37\x62\x32\x31\x30\x66\x35\x34\x34\x34\x30\x37\x30\x63\x35\x33\x35\x33\x35\x61\x34\x31\x34\x34\x34\x39\x30\x37\x34\x35\x30\x64\x35\x38\x31\x61\x30\x37\x30\x38\x34\x36\x30\x30\x35\x36\x35\x62\x35\x37\x35\x31\x30\x33\x34\x36\x35\x62\x35\x32\x31\x66\x35\x63\x35\x66\x30\x30\x30\x32\x35\x37\x35\x38\x34\x62\x35\x30\x34\x35\x35\x37\x35\x39\x35\x35\x35\x32\x35\x66\x31\x65\x35\x34\x30\x62\x35\x35\x35\x38\x31\x31\x35\x62\x34\x37\x30\x36\x35\x36\x35\x36\x31\x61\x30\x35\x34\x65\x30\x34\x31\x65\x30\x33\x31\x65\x30\x34\x31\x66\x35\x66\x34\x36\x35\x34\x35\x61\x30\x39\x30\x30\x34\x32\x30\x63\x35\x62\x35\x34\x35\x36\x34\x34\x35\x64\x31\x37\x31\x34\x35\x36\x34\x34\x30\x61\x31\x35\x35\x63\x30\x65\x35\x61\x30\x64\x35\x33\x35\x37\x31\x31\x35\x62\x35\x65\x34\x36\x34\x36\x35\x31\x30\x64\x34\x34\x31\x32\x35\x64\x34\x36\x35\x63\x34\x63\x30\x34\x30\x36\x30\x37\x30\x61\x31\x30\x35\x63\x30\x33\x35\x31\x31\x30\x30\x33\x31\x61\x35\x31\x35\x31\x30\x35\x35\x61\x31\x34\x35\x35\x35\x64\x34\x37\x30\x36\x35\x31\x34\x30\x30\x39\x30\x32\x34\x34\x34\x65\x31\x37\x31\x34\x35\x31\x35\x38\x30\x39\x30\x66\x35\x35\x35\x33\x37\x61\x36\x32\x36\x38\x37\x64\x32\x61\x30\x35\x34\x61\x36\x31\x37\x61\x32\x66\x32\x39\x36\x31\x33\x35\x36\x34\x31\x39\x30\x31\x31\x62\x35\x32\x37\x39\x34\x31\x34\x62\x35\x66\x35\x38\x30\x34\x34\x61\x33\x65\x37\x66\x37\x61\x32\x65\x33\x35\x36\x32\x36\x36\x37\x61\x35\x38\x35\x33\x34\x32\x30\x39\x34\x34\x30\x62\x35\x66\x34\x33\x34\x64\x33\x39\x37\x38\x32\x64\x37\x63\x36\x33\x36\x36\x36\x35");
var td_0b = td_0b || {};
if (typeof td_0b.td_0H === [][[]] + "") {
    td_0b.td_0H = [];
}
td_0b.td_6z = function() {
    for (var td_v = 0; td_v < td_0b.td_0H.length; ++td_v) {
        td_0b.td_0H[td_v]();
    }
}
;
td_0b.td_0B = function(td_E, td_y) {
    try {
        var td_c = td_E.length + "&" + td_E;
        var td_D = "";
        var td_Q = ((typeof (td_0b.tdz_100f7d97ca5a4725b423246df26fa667) !== "undefined" && typeof (td_0b.tdz_100f7d97ca5a4725b423246df26fa667.td_f) !== "undefined") ? (td_0b.tdz_100f7d97ca5a4725b423246df26fa667.td_f(0, 16)) : null);
        for (var td_M = 0, td_f = 0; td_M < td_c.length; td_M++) {
            var td_o = td_c.charCodeAt(td_M) ^ td_y.charCodeAt(td_f) & 10;
            if (++td_f === td_y.length) {
                td_f = 0;
            }
            td_D += td_Q.charAt((td_o >> 4) & 15);
            td_D += td_Q.charAt(td_o & 15);
        }
        return td_D;
    } catch (td_d) {
        return null;
    }
}
;
td_0b.td_1j = function() {
    try {
        var td_y = window.top.document;
        var td_c = td_y.forms.length;
        return td_y;
    } catch (td_v) {
        return document;
    }
}
;
td_0b.td_4a = function(td_Q) {
    try {
        var td_D;
        if (typeof td_Q === [][[]] + "") {
            td_D = window;
        } else {
            if (td_Q === "t") {
                td_D = window.top;
            } else {
                if (td_Q === "p") {
                    td_D = window.parent;
                } else {
                    td_D = window;
                }
            }
        }
        var td_s = td_D.document.forms.length;
        return td_D;
    } catch (td_S) {
        return window;
    }
}
;
td_0b.add_lang_attr_html_tag = function(td_v) {
    try {
        if (td_v === null) {
            return;
        }
        var td_r = td_v.getElementsByTagName(Number(485781).toString(30));
        if (td_r[0].getAttribute(Number(296632).toString(24)) === null || td_r[0].getAttribute(Number(296632).toString(24)) === "") {
            td_r[0].setAttribute(Number(296632).toString(24), ((typeof (td_0b.tdz_100f7d97ca5a4725b423246df26fa667) !== "undefined" && typeof (td_0b.tdz_100f7d97ca5a4725b423246df26fa667.td_f) !== "undefined") ? (td_0b.tdz_100f7d97ca5a4725b423246df26fa667.td_f(16, 2)) : null));
        } else {}
    } catch (td_n) {}
}
;
td_0b.load_iframe = function(td_Q, td_C) {
    var td_X = td_5n(5);
    if (typeof (td_2t) !== [][[]] + "") {
        td_2t(td_X, ((typeof (td_0b.tdz_100f7d97ca5a4725b423246df26fa667) !== "undefined" && typeof (td_0b.tdz_100f7d97ca5a4725b423246df26fa667.td_f) !== "undefined") ? (td_0b.tdz_100f7d97ca5a4725b423246df26fa667.td_f(18, 6)) : null));
    }
    var td_J = td_C.createElement(((typeof (td_0b.tdz_100f7d97ca5a4725b423246df26fa667) !== "undefined" && typeof (td_0b.tdz_100f7d97ca5a4725b423246df26fa667.td_f) !== "undefined") ? (td_0b.tdz_100f7d97ca5a4725b423246df26fa667.td_f(24, 6)) : null));
    td_J.id = td_X;
    td_J.title = ((typeof (td_0b.tdz_100f7d97ca5a4725b423246df26fa667) !== "undefined" && typeof (td_0b.tdz_100f7d97ca5a4725b423246df26fa667.td_f) !== "undefined") ? (td_0b.tdz_100f7d97ca5a4725b423246df26fa667.td_f(30, 5)) : null);
    td_J.setAttribute(((typeof (td_0b.tdz_100f7d97ca5a4725b423246df26fa667) !== "undefined" && typeof (td_0b.tdz_100f7d97ca5a4725b423246df26fa667.td_f) !== "undefined") ? (td_0b.tdz_100f7d97ca5a4725b423246df26fa667.td_f(35, 13)) : null), Number(890830).toString(31));
    td_J.setAttribute(((typeof (td_0b.tdz_100f7d97ca5a4725b423246df26fa667) !== "undefined" && typeof (td_0b.tdz_100f7d97ca5a4725b423246df26fa667.td_f) !== "undefined") ? (td_0b.tdz_100f7d97ca5a4725b423246df26fa667.td_f(48, 11)) : null), Number(890830).toString(31));
    td_J.width = "0";
    td_J.height = "0";
    if (typeof td_J.tabIndex !== [][[]] + "") {
        td_J.tabIndex = ((typeof (td_0b.tdz_100f7d97ca5a4725b423246df26fa667) !== "undefined" && typeof (td_0b.tdz_100f7d97ca5a4725b423246df26fa667.td_f) !== "undefined") ? (td_0b.tdz_100f7d97ca5a4725b423246df26fa667.td_f(59, 2)) : null);
    }
    if (typeof td_0p !== [][[]] + "" && td_0p !== null) {
        td_J.setAttribute(((typeof (td_0b.tdz_100f7d97ca5a4725b423246df26fa667) !== "undefined" && typeof (td_0b.tdz_100f7d97ca5a4725b423246df26fa667.td_f) !== "undefined") ? (td_0b.tdz_100f7d97ca5a4725b423246df26fa667.td_f(61, 7)) : null), td_0p);
    }
    td_J.style = ((typeof (td_0b.tdz_100f7d97ca5a4725b423246df26fa667) !== "undefined" && typeof (td_0b.tdz_100f7d97ca5a4725b423246df26fa667.td_f) !== "undefined") ? (td_0b.tdz_100f7d97ca5a4725b423246df26fa667.td_f(68, 83)) : null);
    td_J.setAttribute(((typeof (td_0b.tdz_100f7d97ca5a4725b423246df26fa667) !== "undefined" && typeof (td_0b.tdz_100f7d97ca5a4725b423246df26fa667.td_f) !== "undefined") ? (td_0b.tdz_100f7d97ca5a4725b423246df26fa667.td_f(151, 3)) : null), td_Q);
    td_C.body.appendChild(td_J);
}
;
td_0b.csp_nonce = null;
td_0b.td_3g = function(td_x) {
    if (typeof td_x.currentScript !== [][[]] + "" && td_x.currentScript !== null) {
        var td_M = td_x.currentScript.getAttribute(((typeof (td_0b.tdz_100f7d97ca5a4725b423246df26fa667) !== "undefined" && typeof (td_0b.tdz_100f7d97ca5a4725b423246df26fa667.td_f) !== "undefined") ? (td_0b.tdz_100f7d97ca5a4725b423246df26fa667.td_f(154, 5)) : null));
        if (typeof td_M !== [][[]] + "" && td_M !== null && td_M !== "") {
            td_0b.csp_nonce = td_M;
        } else {
            if (typeof td_x.currentScript.nonce !== [][[]] + "" && td_x.currentScript.nonce !== null && td_x.currentScript.nonce !== "") {
                td_0b.csp_nonce = td_x.currentScript.nonce;
            }
        }
    }
}
;
td_0b.td_6k = function(td_F) {
    if (td_0b.csp_nonce !== null) {
        td_F.setAttribute(((typeof (td_0b.tdz_100f7d97ca5a4725b423246df26fa667) !== "undefined" && typeof (td_0b.tdz_100f7d97ca5a4725b423246df26fa667.td_f) !== "undefined") ? (td_0b.tdz_100f7d97ca5a4725b423246df26fa667.td_f(154, 5)) : null), td_0b.csp_nonce);
        if (td_F.getAttribute(((typeof (td_0b.tdz_100f7d97ca5a4725b423246df26fa667) !== "undefined" && typeof (td_0b.tdz_100f7d97ca5a4725b423246df26fa667.td_f) !== "undefined") ? (td_0b.tdz_100f7d97ca5a4725b423246df26fa667.td_f(154, 5)) : null)) !== td_0b.csp_nonce) {
            td_F.nonce = td_0b.csp_nonce;
        }
    }
}
;
td_0b.td_5b = function() {
    try {
        return new ActiveXObject(activeXMode);
    } catch (td_d) {
        return null;
    }
}
;
td_0b.td_1R = function() {
    if (window.XMLHttpRequest) {
        return new XMLHttpRequest();
    }
    if (window.ActiveXObject) {
        var td_E = [((typeof (td_0b.tdz_100f7d97ca5a4725b423246df26fa667) !== "undefined" && typeof (td_0b.tdz_100f7d97ca5a4725b423246df26fa667.td_f) !== "undefined") ? (td_0b.tdz_100f7d97ca5a4725b423246df26fa667.td_f(159, 18)) : null), ((typeof (td_0b.tdz_100f7d97ca5a4725b423246df26fa667) !== "undefined" && typeof (td_0b.tdz_100f7d97ca5a4725b423246df26fa667.td_f) !== "undefined") ? (td_0b.tdz_100f7d97ca5a4725b423246df26fa667.td_f(177, 14)) : null), ((typeof (td_0b.tdz_100f7d97ca5a4725b423246df26fa667) !== "undefined" && typeof (td_0b.tdz_100f7d97ca5a4725b423246df26fa667.td_f) !== "undefined") ? (td_0b.tdz_100f7d97ca5a4725b423246df26fa667.td_f(191, 17)) : null)];
        for (var td_D = 0; td_D < td_E.length; td_D++) {
            var td_l = td_0b.td_5b(td_E[td_D]);
            if (td_l !== null) {
                return td_l;
            }
        }
    }
    return null;
}
;
td_0b.tdz_cdf87ba20a0b4f839c0427e6a80b2b30 = new td_0b.td_6D("\x63\x64\x66\x38\x37\x62\x61\x32\x30\x61\x30\x62\x34\x66\x38\x33\x39\x63\x30\x34\x32\x37\x65\x36\x61\x38\x30\x62\x32\x62\x33\x30\x31\x36\x31\x37\x30\x33\x31\x38\x34\x34\x31\x36\x31\x33\x35\x62\x35\x33\x31\x35\x35\x36\x31\x37\x35\x61\x30\x35\x34\x63\x35\x61\x35\x36\x30\x64\x35\x31\x34\x31\x35\x36\x35\x65\x30\x61\x35\x66\x30\x66\x34\x38\x34\x35\x31\x36\x34\x34\x30\x62\x35\x37\x35\x35\x30\x63\x30\x64\x30\x38\x34\x38\x34\x32\x31\x36\x30\x30\x34\x37\x35\x34\x30\x38\x35\x66\x30\x64\x34\x31\x31\x32\x34\x38\x34\x36\x34\x64\x35\x66\x35\x32\x34\x36\x30\x63\x31\x31\x30\x38\x35\x33\x30\x35\x35\x30\x30\x64\x34\x34\x35\x38\x30\x33\x35\x30\x30\x64\x35\x32\x34\x32\x30\x63\x35\x64\x30\x61\x30\x38\x30\x34\x30\x38");
var td_0b = td_0b || {};
function td_2r() {
    ((typeof (td_0b.tdz_cdf87ba20a0b4f839c0427e6a80b2b30) !== "undefined" && typeof (td_0b.tdz_cdf87ba20a0b4f839c0427e6a80b2b30.td_f) !== "undefined") ? (td_0b.tdz_cdf87ba20a0b4f839c0427e6a80b2b30.td_f(0, 10)) : null);
    function td_pM(td_Xx) {
        if (typeof td_Xx.parent === [][[]] + "" || td_Xx.parent === null || td_Xx.parent === td_Xx) {
            return td_Xx;
        }
        return td_pM(td_Xx.parent);
    }
    function td_Rq() {
        try {
            var td_zk = td_pM(window);
            if (td_zk !== undefined && td_zk !== null && td_zk.navigator !== undefined && td_zk.navigator !== null && td_zk.navigator.mediaDevices !== undefined && td_zk.navigator.mediaDevices !== null && td_zk.navigator.mediaDevices.enumerateDevices !== undefined && td_zk.navigator.mediaDevices.enumerateDevices !== null && typeof td_zk.navigator.mediaDevices.enumerateDevices === ((typeof (td_0b.tdz_cdf87ba20a0b4f839c0427e6a80b2b30) !== "undefined" && typeof (td_0b.tdz_cdf87ba20a0b4f839c0427e6a80b2b30.td_f) !== "undefined") ? (td_0b.tdz_cdf87ba20a0b4f839c0427e6a80b2b30.td_f(10, 8)) : null)) {
                td_zk.navigator.mediaDevices.enumerateDevices().then(td_rd, td_hO);
            }
        } catch (td_Sx) {}
    }
    function td_rd(td_Cz) {
        if (td_Cz.length === 0 && td_Eg === false) {
            td_Eg = true;
            td_Rq();
        } else {
            var td_eh = td_g();
            var td_Wo = 0;
            var td_yr = 0;
            var td_r3 = 0;
            var td_mp = new td_3n();
            td_Cz.forEach(function(td_xo) {
                if (td_xo.kind === ((typeof (td_0b.tdz_cdf87ba20a0b4f839c0427e6a80b2b30) !== "undefined" && typeof (td_0b.tdz_cdf87ba20a0b4f839c0427e6a80b2b30.td_f) !== "undefined") ? (td_0b.tdz_cdf87ba20a0b4f839c0427e6a80b2b30.td_f(18, 10)) : null)) {
                    td_Wo++;
                } else {
                    if (td_xo.kind === ((typeof (td_0b.tdz_cdf87ba20a0b4f839c0427e6a80b2b30) !== "undefined" && typeof (td_0b.tdz_cdf87ba20a0b4f839c0427e6a80b2b30.td_f) !== "undefined") ? (td_0b.tdz_cdf87ba20a0b4f839c0427e6a80b2b30.td_f(28, 10)) : null)) {
                        td_r3++;
                    } else {
                        if (td_xo.kind === ((typeof (td_0b.tdz_cdf87ba20a0b4f839c0427e6a80b2b30) !== "undefined" && typeof (td_0b.tdz_cdf87ba20a0b4f839c0427e6a80b2b30.td_f) !== "undefined") ? (td_0b.tdz_cdf87ba20a0b4f839c0427e6a80b2b30.td_f(38, 11)) : null)) {
                            td_yr++;
                        }
                    }
                }
                var td_q0 = td_xo.kind + "," + td_xo.label + "," + td_xo.deviceId;
                td_mp.update(td_q0 + ((typeof (td_0b.tdz_cdf87ba20a0b4f839c0427e6a80b2b30) !== "undefined" && typeof (td_0b.tdz_cdf87ba20a0b4f839c0427e6a80b2b30.td_f) !== "undefined") ? (td_0b.tdz_cdf87ba20a0b4f839c0427e6a80b2b30.td_f(49, 4)) : null));
            });
            var td_tY;
            if (td_Wo !== 0 || td_yr !== 0 || td_r3 !== 0) {
                td_tY = "(" + td_Wo + "," + td_r3 + "," + td_yr + "," + td_mp.toString() + ")";
            }
            if (td_tY) {
                var td_sx = ((typeof (td_0b.tdz_cdf87ba20a0b4f839c0427e6a80b2b30) !== "undefined" && typeof (td_0b.tdz_cdf87ba20a0b4f839c0427e6a80b2b30.td_f) !== "undefined") ? (td_0b.tdz_cdf87ba20a0b4f839c0427e6a80b2b30.td_f(53, 6)) : null) + encodeURIComponent(td_tY);
                if (td_sx !== ((typeof (td_0b.tdz_cdf87ba20a0b4f839c0427e6a80b2b30) !== "undefined" && typeof (td_0b.tdz_cdf87ba20a0b4f839c0427e6a80b2b30.td_f) !== "undefined") ? (td_0b.tdz_cdf87ba20a0b4f839c0427e6a80b2b30.td_f(53, 6)) : null)) {
                    var td_uY = td_4m + ((typeof (td_0b.tdz_cdf87ba20a0b4f839c0427e6a80b2b30) !== "undefined" && typeof (td_0b.tdz_cdf87ba20a0b4f839c0427e6a80b2b30.td_f) !== "undefined") ? (td_0b.tdz_cdf87ba20a0b4f839c0427e6a80b2b30.td_f(59, 10)) : null) + td_0b.td_0B(td_sx, td_3r);
                    td_0Q(td_uY, document);
                }
            }
            if (td_JO) {
                td_JO.report(((typeof (td_0b.tdz_cdf87ba20a0b4f839c0427e6a80b2b30) !== "undefined" && typeof (td_0b.tdz_cdf87ba20a0b4f839c0427e6a80b2b30.td_f) !== "undefined") ? (td_0b.tdz_cdf87ba20a0b4f839c0427e6a80b2b30.td_f(69, 3)) : null) + td_0b.toFixed((td_g() - td_eh), 2));
            }
        }
    }
    function td_hO(td_x) {}
    try {
        var td_Eg = false;
        if (!navigator.mediaDevices || !navigator.mediaDevices.enumerateDevices) {
            return;
        }
        navigator.mediaDevices.enumerateDevices().then(td_rd, td_hO);
    } catch (td_x) {}
}
td_0b.tdz_ed5c51848b2747bea69e8968e093759d = new td_0b.td_6D("\x65\x64\x35\x63\x35\x31\x38\x34\x38\x62\x32\x37\x34\x37\x62\x65\x61\x36\x39\x65\x38\x39\x36\x38\x65\x30\x39\x33\x37\x35\x39\x64\x31\x32\x30\x64\x35\x62\x30\x37\x35\x61\x34\x36\x34\x62\x34\x33\x35\x31\x30\x63\x35\x62\x34\x37\x35\x63\x35\x38\x30\x63\x30\x30\x34\x65\x35\x66\x34\x39\x30\x61\x35\x63\x35\x30\x34\x36\x35\x30\x30\x61\x35\x65\x35\x63\x31\x63\x35\x65\x34\x35\x35\x38\x30\x30\x30\x63\x30\x62\x34\x36\x30\x65\x35\x34\x35\x32\x35\x37\x35\x36\x35\x32\x30\x37\x35\x31\x34\x33\x35\x38\x35\x65\x30\x63\x31\x30\x31\x39\x35\x37\x35\x37\x30\x31\x34\x61\x35\x36\x35\x66\x35\x63\x30\x30\x34\x38\x34\x39\x35\x66\x35\x38\x34\x37\x35\x63\x31\x36\x30\x63\x30\x31");
function td_s8(td_0a) {
    var td_nc = td_0a.toLowerCase();
    if (td_nc === ((typeof (td_0b.tdz_ed5c51848b2747bea69e8968e093759d) !== "undefined" && typeof (td_0b.tdz_ed5c51848b2747bea69e8968e093759d.td_f) !== "undefined") ? (td_0b.tdz_ed5c51848b2747bea69e8968e093759d.td_f(0, 7)) : null)) {
        td_nc = ((typeof (td_0b.tdz_ed5c51848b2747bea69e8968e093759d) !== "undefined" && typeof (td_0b.tdz_ed5c51848b2747bea69e8968e093759d.td_f) !== "undefined") ? (td_0b.tdz_ed5c51848b2747bea69e8968e093759d.td_f(7, 3)) : null);
    } else {
        if (td_nc === ((typeof (td_0b.tdz_ed5c51848b2747bea69e8968e093759d) !== "undefined" && typeof (td_0b.tdz_ed5c51848b2747bea69e8968e093759d.td_f) !== "undefined") ? (td_0b.tdz_ed5c51848b2747bea69e8968e093759d.td_f(10, 11)) : null) || td_nc === Number(333541).toString(26) || td_nc === ((typeof (td_0b.tdz_ed5c51848b2747bea69e8968e093759d) !== "undefined" && typeof (td_0b.tdz_ed5c51848b2747bea69e8968e093759d.td_f) !== "undefined") ? (td_0b.tdz_ed5c51848b2747bea69e8968e093759d.td_f(21, 11)) : null)) {
            td_nc = ((typeof (td_0b.tdz_ed5c51848b2747bea69e8968e093759d) !== "undefined" && typeof (td_0b.tdz_ed5c51848b2747bea69e8968e093759d.td_f) !== "undefined") ? (td_0b.tdz_ed5c51848b2747bea69e8968e093759d.td_f(32, 3)) : null);
        }
    }
    this.os_name = td_nc;
    this._eq = function(td_0a) {
        return (td_0a === this.os_name);
    }
    ;
    this._ne = function(td_0a) {
        return (td_0a !== this.os_name);
    }
    ;
    this._gt = function(td_0a) {
        return (this.os_name > td_0a);
    }
    ;
    this._ge = function(td_0a) {
        return (this.os_name >= td_0a);
    }
    ;
    this._lt = function(td_0a) {
        return (this.os_name < td_0a);
    }
    ;
    this._le = function(td_0a) {
        return (this.os_name <= td_0a);
    }
    ;
    this._in = function(td_0a) {
        var td_Or = (td_0a.constructor === String ? [td_0a] : td_0a);
        var td_fV;
        for (td_fV = 0; td_fV < td_Or.length; td_fV++) {
            if (this.os_name === td_Or[td_fV]) {
                return true;
            }
        }
        return false;
    }
    ;
    this.getFontsList = function() {
        if (this.os_name === ((typeof (td_0b.tdz_ed5c51848b2747bea69e8968e093759d) !== "undefined" && typeof (td_0b.tdz_ed5c51848b2747bea69e8968e093759d.td_f) !== "undefined") ? (td_0b.tdz_ed5c51848b2747bea69e8968e093759d.td_f(35, 3)) : null)) {
            return (typeof (td_0u) === ((typeof (td_0b.tdz_ed5c51848b2747bea69e8968e093759d) !== "undefined" && typeof (td_0b.tdz_ed5c51848b2747bea69e8968e093759d.td_f) !== "undefined") ? (td_0b.tdz_ed5c51848b2747bea69e8968e093759d.td_f(38, 6)) : null) ? td_0u : []);
        }
        if (this.os_name === ((typeof (td_0b.tdz_ed5c51848b2747bea69e8968e093759d) !== "undefined" && typeof (td_0b.tdz_ed5c51848b2747bea69e8968e093759d.td_f) !== "undefined") ? (td_0b.tdz_ed5c51848b2747bea69e8968e093759d.td_f(44, 5)) : null)) {
            return (typeof (td_4G) === ((typeof (td_0b.tdz_ed5c51848b2747bea69e8968e093759d) !== "undefined" && typeof (td_0b.tdz_ed5c51848b2747bea69e8968e093759d.td_f) !== "undefined") ? (td_0b.tdz_ed5c51848b2747bea69e8968e093759d.td_f(38, 6)) : null) ? td_4G : []);
        }
        if (this.os_name === ((typeof (td_0b.tdz_ed5c51848b2747bea69e8968e093759d) !== "undefined" && typeof (td_0b.tdz_ed5c51848b2747bea69e8968e093759d.td_f) !== "undefined") ? (td_0b.tdz_ed5c51848b2747bea69e8968e093759d.td_f(7, 3)) : null)) {
            return (typeof (td_3W) === ((typeof (td_0b.tdz_ed5c51848b2747bea69e8968e093759d) !== "undefined" && typeof (td_0b.tdz_ed5c51848b2747bea69e8968e093759d.td_f) !== "undefined") ? (td_0b.tdz_ed5c51848b2747bea69e8968e093759d.td_f(38, 6)) : null) ? td_3W : []);
        }
        if (this.os_name === ((typeof (td_0b.tdz_ed5c51848b2747bea69e8968e093759d) !== "undefined" && typeof (td_0b.tdz_ed5c51848b2747bea69e8968e093759d.td_f) !== "undefined") ? (td_0b.tdz_ed5c51848b2747bea69e8968e093759d.td_f(32, 3)) : null)) {
            return (typeof (td_0o) === ((typeof (td_0b.tdz_ed5c51848b2747bea69e8968e093759d) !== "undefined" && typeof (td_0b.tdz_ed5c51848b2747bea69e8968e093759d.td_f) !== "undefined") ? (td_0b.tdz_ed5c51848b2747bea69e8968e093759d.td_f(38, 6)) : null) ? td_0o : []);
        }
        if (this.os_name === ((typeof (td_0b.tdz_ed5c51848b2747bea69e8968e093759d) !== "undefined" && typeof (td_0b.tdz_ed5c51848b2747bea69e8968e093759d.td_f) !== "undefined") ? (td_0b.tdz_ed5c51848b2747bea69e8968e093759d.td_f(49, 7)) : null)) {
            return (typeof (td_4S) === ((typeof (td_0b.tdz_ed5c51848b2747bea69e8968e093759d) !== "undefined" && typeof (td_0b.tdz_ed5c51848b2747bea69e8968e093759d.td_f) !== "undefined") ? (td_0b.tdz_ed5c51848b2747bea69e8968e093759d.td_f(38, 6)) : null) ? td_4S : []);
        } else {
            return [];
        }
    }
    ;
}
function td_jc(td_6y) {
    var td_fO = td_6y.toLowerCase();
    if (td_fO === ((typeof (td_0b.tdz_ed5c51848b2747bea69e8968e093759d) !== "undefined" && typeof (td_0b.tdz_ed5c51848b2747bea69e8968e093759d.td_f) !== "undefined") ? (td_0b.tdz_ed5c51848b2747bea69e8968e093759d.td_f(56, 8)) : null)) {
        td_fO = ((typeof (td_0b.tdz_ed5c51848b2747bea69e8968e093759d) !== "undefined" && typeof (td_0b.tdz_ed5c51848b2747bea69e8968e093759d.td_f) !== "undefined") ? (td_0b.tdz_ed5c51848b2747bea69e8968e093759d.td_f(64, 2)) : null);
    }
    this.browser_name = td_fO;
    this._eq = function(td_6y) {
        return (td_6y === this.browser_name);
    }
    ;
    this._ne = function(td_6y) {
        return (td_6y !== this.browser_name);
    }
    ;
    this._in = function(td_6y) {
        var td_x9 = (td_6y.constructor === String ? [td_6y] : td_6y);
        var td_Gz;
        for (td_Gz = 0; td_Gz < td_x9.length; td_Gz++) {
            if (this.browser_name === td_x9[td_Gz]) {
                return true;
            }
        }
        return false;
    }
    ;
}
function td_hL(td_r9) {
    this.version = td_r9;
    this._eq = function(td_M1) {
        return (this.version === parseInt(td_M1));
    }
    ;
    this._ne = function(td_mf) {
        return (this.version !== parseInt(td_mf));
    }
    ;
    this._gt = function(td_Wl) {
        return (this.version > parseInt(td_Wl));
    }
    ;
    this._ge = function(td_Az) {
        return (this.version >= parseInt(td_Az));
    }
    ;
    this._lt = function(td_K5) {
        return (this.version < parseInt(td_K5));
    }
    ;
    this._le = function(td_bS) {
        return (this.version <= parseInt(td_bS));
    }
    ;
}
td_0b.tdz_fe81533c06bd4ed982fd0dd41820e475 = new td_0b.td_6D("\x66\x65\x38\x31\x35\x33\x33\x63\x30\x36\x62\x64\x34\x65\x64\x39\x38\x32\x66\x64\x30\x64\x64\x34\x31\x38\x32\x30\x65\x34\x37\x35\x31\x33\x31\x36\x35\x64\x31\x31\x34\x36\x34\x37\x34\x31\x30\x61\x35\x33\x34\x32\x30\x34\x31\x31\x35\x61\x30\x36\x31\x30\x35\x30\x35\x37\x35\x63\x34\x30\x30\x37\x35\x31\x30\x37\x35\x39\x30\x35\x31\x37\x35\x32\x35\x37\x30\x64\x34\x33\x34\x36\x34\x34\x35\x64\x35\x62\x35\x34\x31\x65\x35\x62\x35\x30\x30\x65\x37\x34\x32\x36\x36\x34");
var td_0b = td_0b || {};
var td_4B = null;
function td_0l() {
    ((typeof (td_0b.tdz_fe81533c06bd4ed982fd0dd41820e475) !== "undefined" && typeof (td_0b.tdz_fe81533c06bd4ed982fd0dd41820e475.td_f) !== "undefined") ? (td_0b.tdz_fe81533c06bd4ed982fd0dd41820e475.td_f(0, 10)) : null);
    var td_rv = true;
    var td_YF = 3600000 * 6;
    var td_oq = 3000;
    var td_x = false;
    var td_qR = null;
    var td_GW = false;
    function td_e6() {
        var td_Tq = 1;
        var td_iP = false;
        var td_H1 = [];
        this.reg = function(td_Vt) {
            if (typeof td_Vt === ((typeof (td_0b.tdz_fe81533c06bd4ed982fd0dd41820e475) !== "undefined" && typeof (td_0b.tdz_fe81533c06bd4ed982fd0dd41820e475.td_f) !== "undefined") ? (td_0b.tdz_fe81533c06bd4ed982fd0dd41820e475.td_f(10, 8)) : null) && td_Vt !== null) {
                td_H1.push(td_Vt);
                return true;
            }
            return false;
        }
        ;
        function td_XB(td_AD) {
            if (td_qR !== null && (td_qR + td_oq) > td_p()) {
                return;
            }
            td_qR = td_p();
            td_e2(td_AD);
        }
        function td_h4(td_Pq) {
            if (td_iP) {
                return;
            }
            td_iP = true;
            td_e2(td_Pq);
        }
        function td_CG(td_U6) {
            if (td_qR !== null && (td_qR + td_oq) > td_p()) {
                return;
            }
            td_qR = td_p();
            td_e2(td_U6);
        }
        function td_e2(td_hy) {
            try {
                var td_y1 = ((typeof (td_0b.tdz_fe81533c06bd4ed982fd0dd41820e475) !== "undefined" && typeof (td_0b.tdz_fe81533c06bd4ed982fd0dd41820e475.td_f) !== "undefined") ? (td_0b.tdz_fe81533c06bd4ed982fd0dd41820e475.td_f(18, 6)) : null);
                for (var td_qe in td_H1) {
                    if (!td_H1.hasOwnProperty(td_qe)) {
                        continue;
                    }
                    var td_WD = td_H1[td_qe];
                    if (typeof td_WD !== [][[]] + "" && td_WD !== null) {
                        td_y1 += td_WD();
                    } else {}
                }
                if (typeof navigator !== [][[]] + "" && navigator !== null && typeof navigator.sendBeacon !== [][[]] + "" && navigator.sendBeacon !== null) {
                    var td_sj = ((typeof (td_0b.tdz_fe81533c06bd4ed982fd0dd41820e475) !== "undefined" && typeof (td_0b.tdz_fe81533c06bd4ed982fd0dd41820e475.td_f) !== "undefined") ? (td_0b.tdz_fe81533c06bd4ed982fd0dd41820e475.td_f(24, 4)) : null) + td_0b.td_0B(td_y1, td_3r);
                    var td_Th = navigator.sendBeacon(td_4m, td_sj);
                } else {
                    var td_fR = td_0b.td_1R();
                    if (typeof td_fR === [][[]] + "" || td_fR === null) {
                        return;
                    }
                    try {
                        var td_CO = td_4m + ((typeof (td_0b.tdz_fe81533c06bd4ed982fd0dd41820e475) !== "undefined" && typeof (td_0b.tdz_fe81533c06bd4ed982fd0dd41820e475.td_f) !== "undefined") ? (td_0b.tdz_fe81533c06bd4ed982fd0dd41820e475.td_f(28, 10)) : null) + td_0b.td_0B(td_y1, td_3r);
                        td_fR.open(((typeof (td_0b.tdz_fe81533c06bd4ed982fd0dd41820e475) !== "undefined" && typeof (td_0b.tdz_fe81533c06bd4ed982fd0dd41820e475.td_f) !== "undefined") ? (td_0b.tdz_fe81533c06bd4ed982fd0dd41820e475.td_f(38, 3)) : null), td_CO, false);
                        td_fR.send(null);
                    } catch (td_Ja) {}
                }
            } catch (td_ox) {}
            if (td_iP) {
                td_mQ();
            }
        }
        function td_Fu(td_Ut) {
            var td_XR = 0;
            try {
                for (var td_oC in td_Ut) {
                    if (!td_Ut.hasOwnProperty(td_oC) || typeof td_Ut[td_oC] === [][[]] + "" || td_Ut[td_oC] === null) {
                        continue;
                    }
                    td_Ut[td_oC].addEventListener(td_0b.td_4o(decodeURIComponent(td_2P)), td_CG, false);
                    ++td_XR;
                }
            } catch (td_BV) {
                return false;
            }
            return td_XR > 0;
        }
        function td_ui(td_ZI) {
            if (typeof td_ZI.querySelectorAll === [][[]] + "" || td_ZI.querySelectorAll === null) {
                return false;
            }
            try {
                var td_ol = document.querySelectorAll(Number(348874).toString(28));
                return td_Fu(td_ol);
            } catch (td_Il) {}
            return false;
        }
        function td_UJ(td_FK) {
            if (typeof td_FK.getElementsByTagName === [][[]] + "" || td_FK.getElementsByTagName === null) {
                return false;
            }
            try {
                var td_TU = td_FK.getElementsByTagName(Number(348874).toString(28));
                return td_Fu(td_TU);
            } catch (td_UN) {}
            return false;
        }
        function td_fl() {
            var td_sP = null;
            if (typeof td_0b.td_4a !== [][[]] + "" && td_0b.td_4a !== null && typeof td_2u !== [][[]] + "" && td_2u !== null) {
                td_sP = td_0b.td_4a(td_2u).document;
            } else {
                if (typeof td_0b.td_1j !== [][[]] + "" && td_0b.td_1j !== null) {
                    td_sP = td_0b.td_1j();
                }
            }
            if (td_sP === null) {
                return false;
            }
            if (!td_ui(td_sP)) {
                return td_UJ(td_sP);
            }
            return true;
        }
        function td_gP() {
            try {
                if (typeof navigator === [][[]] + "" || navigator === null || typeof navigator.sendBeacon === [][[]] + "" || navigator.sendBeacon === null) {
                    return;
                }
                var td_Tn = td_0b.td_4a(td_2u).document;
                td_J(td_Tn, td_6L, td_h4, td_rv);
                td_J(td_Tn, td_4M, td_h4, td_rv);
                td_J(td_Tn, td_y, td_XB, td_rv);
                if (td_GW) {
                    td_J(td_Tn, td_2P, td_CG, td_rv, false);
                    td_J(td_Tn, td_0d, td_CG, td_rv, false);
                    td_fl();
                }
            } catch (td_DP) {}
        }
        function td_mQ() {
            try {
                if (typeof navigator === [][[]] + "" || navigator === null || typeof navigator.sendBeacon === [][[]] + "" || navigator.sendBeacon === null) {
                    return;
                }
                var td_X3 = td_0b.td_4a(td_2u).document;
                td_X(td_X3, td_6L, td_h4, td_rv);
                td_X(td_X3, td_4M, td_h4, td_rv);
                td_X(td_X3, td_y, td_XB, td_rv);
                if (td_GW) {
                    td_X(td_X3, td_2P, td_CG, td_rv, false);
                    td_X(td_X3, td_0d, td_CG, td_rv, false);
                }
            } catch (td_aD) {}
        }
        td_gP();
        setTimeout(td_mQ, td_YF);
    }
    if (!td_x) {
        td_x = true;
        if (typeof td_4B === [][[]] + "" || td_4B === null) {
            td_4B = new td_e6();
        }
        if (typeof td_3b !== [][[]] + "" && td_3b !== null && td_3b === "2") {
            td_GW = true;
        }
    }
}
td_0b.tdz_98cfc473eea34e798f1900facbd84ffb = new td_0b.td_6D("\x39\x38\x63\x66\x63\x34\x37\x33\x65\x65\x61\x33\x34\x65\x37\x39\x38\x66\x31\x39\x30\x30\x66\x61\x63\x62\x64\x38\x34\x66\x66\x62\x34\x61\x34\x63\x31\x31\x30\x66\x30\x64\x35\x33\x35\x38\x35\x31\x30\x66\x30\x30\x30\x32\x34\x37\x35\x61\x31\x30\x35\x61\x35\x62\x35\x64\x31\x34\x34\x33\x35\x63\x34\x30\x35\x63\x30\x37\x30\x32\x30\x36\x30\x36\x33\x30\x35\x30\x35\x64\x31\x35\x34\x36\x30\x62\x34\x61\x31\x38\x30\x32\x34\x36\x31\x37\x35\x31\x34\x34\x34\x37\x34\x35\x30\x61\x30\x37\x31\x33\x36\x36\x30\x30\x35\x30\x37\x63\x34\x30\x31\x36\x36\x35\x35\x31\x35\x39\x34\x33\x34\x36\x30\x38\x31\x30\x34\x32\x30\x35\x31\x38\x34\x36\x30\x33\x31\x36\x30\x65\x35\x38\x35\x62\x30\x36\x30\x32\x34\x33\x35\x62\x35\x31\x31\x33\x33\x37\x30\x30\x30\x36\x37\x36\x34\x63\x31\x35\x34\x33\x36\x32\x35\x39\x34\x62\x34\x62\x36\x34\x31\x62\x34\x34\x30\x32\x33\x65\x30\x30\x31\x32\x30\x35\x34\x62\x34\x37\x31\x31\x30\x39\x31\x30\x35\x64");
var td_0b = td_0b || {};
var td_D = null;
function td_5Z() {
    function td_x() {
        var td_nm = 1;
        var td_Jf = null;
        var td_Vs = 5;
        var td_AW = 7;
        var td_zb = 0;
        var td_cu = 1;
        var td_bN = 2;
        var td_J8 = 3;
        var td_Ps = 4;
        var td_pT = 5;
        var td_ig = 6;
        var td_UB = td_0b.IDENT_TYPE;
        var td_bz = td_0b.IDENT_ID;
        var td_hc = td_0b.IDENT_NAME;
        var td_Q9 = 2;
        var td_m0 = 0;
        var td_NT = 1;
        var td_RS = 0;
        var td_F3 = 1;
        var td_Lq = false;
        var td_Ou = 0;
        var td_AQ = 0;
        var td_UQ = 0;
        var td_yw = 0;
        var td_ck = false;
        var td_Rn = false;
        var td_N5 = false;
        var td_mv = false;
        var td_fU = null;
        var td_BO = null;
        var td_vV = false;
        var td_mB = {
            m_ruleSet: [],
            m_exactMatchNeg: {},
            m_exactMatchPos: {},
            m_attr_to_query: [],
        };
        var td_zx = {
            m_ruleSet: [],
            m_exactMatchNeg: {},
            m_exactMatchPos: {},
            m_attr_to_query: [],
        };
        var td_eu = {
            m_ruleSet: [],
            m_exactMatchNeg: {},
            m_exactMatchPos: {},
            m_attr_to_query: [],
        };
        var td_C8 = {
            m_ruleSet: [],
            m_exactMatchNeg: {},
            m_exactMatchPos: {},
            m_attr_to_query: [],
            m_ident_doc_map: {},
            m_update_container: [],
        };
        function td_pN(td_HZ) {
            return (typeof td_HZ !== [][[]] + "" && td_HZ !== null);
        }
        function td_d6(td_tZ) {
            return (typeof td_tZ !== [][[]] + "" && td_tZ !== null && td_tZ !== "");
        }
        function td_pm(td_Mw) {
            return (typeof td_Mw === ((typeof (td_0b.tdz_98cfc473eea34e798f1900facbd84ffb) !== "undefined" && typeof (td_0b.tdz_98cfc473eea34e798f1900facbd84ffb.td_f) !== "undefined") ? (td_0b.tdz_98cfc473eea34e798f1900facbd84ffb.td_f(0, 6)) : null) && td_Mw !== null && td_Mw !== "");
        }
        function td_sd(td_S1) {
            return (typeof td_S1 === ((typeof (td_0b.tdz_98cfc473eea34e798f1900facbd84ffb) !== "undefined" && typeof (td_0b.tdz_98cfc473eea34e798f1900facbd84ffb.td_f) !== "undefined") ? (td_0b.tdz_98cfc473eea34e798f1900facbd84ffb.td_f(6, 6)) : null) && td_S1 !== null);
        }
        function td_rN(td_fC) {
            return ((typeof td_fC === ((typeof (td_0b.tdz_98cfc473eea34e798f1900facbd84ffb) !== "undefined" && typeof (td_0b.tdz_98cfc473eea34e798f1900facbd84ffb.td_f) !== "undefined") ? (td_0b.tdz_98cfc473eea34e798f1900facbd84ffb.td_f(6, 6)) : null) || typeof td_fC === ((typeof (td_0b.tdz_98cfc473eea34e798f1900facbd84ffb) !== "undefined" && typeof (td_0b.tdz_98cfc473eea34e798f1900facbd84ffb.td_f) !== "undefined") ? (td_0b.tdz_98cfc473eea34e798f1900facbd84ffb.td_f(0, 6)) : null)) && td_fC !== null && td_fC !== "");
        }
        function td_Na(td_LI) {
            return (typeof td_LI === ((typeof (td_0b.tdz_98cfc473eea34e798f1900facbd84ffb) !== "undefined" && typeof (td_0b.tdz_98cfc473eea34e798f1900facbd84ffb.td_f) !== "undefined") ? (td_0b.tdz_98cfc473eea34e798f1900facbd84ffb.td_f(12, 6)) : null) && td_LI !== null);
        }
        function td_j5(td_NS) {
            return td_VX(0, td_NS);
        }
        function td_VX(td_xi, td_Vv) {
            for (var td_Ds = td_xi; td_Ds < td_Vv.length; ++td_Ds) {
                if (td_Vv[td_Ds] !== null) {
                    return false;
                }
            }
            return true;
        }
        function td_PU(td_i4, td_LR, td_Wc, td_So) {
            if (td_d6(td_So[td_LR]) && td_So[td_LR] !== "&") {
                if (td_Wc) {
                    try {
                        td_i4[td_LR] = new RegExp(td_So[td_LR]);
                        return;
                    } catch (td_lE) {}
                }
                td_i4[td_LR] = td_So[td_LR];
            } else {
                td_i4[td_LR] = null;
            }
        }
        function td_FQ(td_Ck) {
            if (typeof td_Ck === [][[]] + "" || td_Ck === null) {
                return false;
            }
            return ((td_Ck > 47 && td_Ck < 58) || (td_Ck > 64 && td_Ck < 91) || (td_Ck > 96 && td_Ck < 123));
        }
        function td_Ab(td_TQ) {
            var td_Ja = JSON.stringify(td_TQ);
            if (!td_pN(td_Ja)) {
                return null;
            }
            return JSON.parse(td_Ja);
        }
        function td_cB() {
            if (td_BO !== null) {
                return td_BO;
            }
            td_BO = ((typeof "".toLowerCase !== [][[]] + "" && "".toLowerCase !== null) && (typeof "".toUpperCase !== [][[]] + "" && "".toUpperCase !== null) && (typeof "".fromCharCode !== [][[]] + "" && "".fromCharCode !== null));
            return td_BO;
        }
        function td_Wk(td_FL) {
            if (typeof td_FL !== ((typeof (td_0b.tdz_98cfc473eea34e798f1900facbd84ffb) !== "undefined" && typeof (td_0b.tdz_98cfc473eea34e798f1900facbd84ffb.td_f) !== "undefined") ? (td_0b.tdz_98cfc473eea34e798f1900facbd84ffb.td_f(0, 6)) : null)) {
                return null;
            }
            if (td_cB()) {
                var td_N2 = td_FL.toLowerCase();
                var td_U9 = td_FL.toUpperCase();
                var td_hz = "";
                for (var td_Hx = 0; td_Hx < td_N2.length; ++td_Hx) {
                    if (td_FQ(td_N2.charCodeAt(td_Hx)) || (td_N2[td_Hx] !== td_U9[td_Hx] && td_N2[td_Hx].trim() !== "")) {
                        td_hz += td_N2[td_Hx];
                    }
                }
                return td_hz;
            }
            return td_FL;
        }
        function td_hv(td_Ek) {
            if (!td_sd(td_Ek)) {
                return null;
            }
            var td_Jg = td_pm(td_Ek[td_0b.IDENT_ID]) ? td_Wk(td_Ek[td_0b.IDENT_ID]) : null;
            if (!td_Jg) {
                td_Jg = td_pm(td_Ek[td_0b.IDENT_NAME]) ? td_Wk(td_Ek[td_0b.IDENT_NAME]) : null;
            }
            return td_Jg;
        }
        function td_G5(td_aj) {
            return td_aj[td_0b.IDENT_TYPE] === null && td_aj[td_0b.IDENT_ID] === null && td_aj[td_0b.IDENT_NAME] === null;
        }
        function td_go(td_cN) {
            if (!td_fU) {
                return false;
            }
            return (td_pN(td_cN) && td_pN(td_cN.test));
        }
        function td_QD(td_cb) {
            try {
                return new RegExp(td_cb);
            } catch (td_TH) {}
            return td_cb;
        }
        function td_Gw(td_Be) {
            for (var td_ID = 0; td_Be.length > td_ID; ++td_ID) {
                if (!td_Be.hasOwnProperty(td_ID) || td_ID === td_J8 || td_ID === td_Ps || !td_rN(td_Be[td_ID]) || td_Be[td_ID] === "&") {
                    continue;
                }
                td_Be[td_ID] = td_QD(td_Be[td_ID]);
            }
        }
        function td_Zb() {
            if (td_fU !== null) {
                return td_fU;
            }
            try {
                var td_K6 = ((typeof (td_0b.tdz_98cfc473eea34e798f1900facbd84ffb) !== "undefined" && typeof (td_0b.tdz_98cfc473eea34e798f1900facbd84ffb.td_f) !== "undefined") ? (td_0b.tdz_98cfc473eea34e798f1900facbd84ffb.td_f(18, 8)) : null);
                var td_yJ = ((typeof (td_0b.tdz_98cfc473eea34e798f1900facbd84ffb) !== "undefined" && typeof (td_0b.tdz_98cfc473eea34e798f1900facbd84ffb.td_f) !== "undefined") ? (td_0b.tdz_98cfc473eea34e798f1900facbd84ffb.td_f(26, 24)) : null);
                var td_Zc = ((typeof (td_0b.tdz_98cfc473eea34e798f1900facbd84ffb) !== "undefined" && typeof (td_0b.tdz_98cfc473eea34e798f1900facbd84ffb.td_f) !== "undefined") ? (td_0b.tdz_98cfc473eea34e798f1900facbd84ffb.td_f(50, 28)) : null);
                var td_Ur = new RegExp(((typeof (td_0b.tdz_98cfc473eea34e798f1900facbd84ffb) !== "undefined" && typeof (td_0b.tdz_98cfc473eea34e798f1900facbd84ffb.td_f) !== "undefined") ? (td_0b.tdz_98cfc473eea34e798f1900facbd84ffb.td_f(78, 7)) : null));
                if (td_Ur.test(td_yJ)) {
                    var td_ZA = td_yJ.replace(td_Ur, td_K6);
                    if (td_ZA === td_Zc) {
                        td_fU = true;
                        return true;
                    }
                }
            } catch (td_uw) {}
            td_fU = false;
            return false;
        }
        function td_pI(td_oy, td_Es) {
            if (!td_pN(td_Es)) {
                return null;
            }
            var td_QR = [null, null, null, null, null, null, null];
            td_PU(td_QR, td_zb, td_fU, td_Es);
            td_PU(td_QR, td_cu, td_fU, td_Es);
            td_PU(td_QR, td_bN, td_fU, td_Es);
            td_PU(td_QR, td_J8, td_Lq, td_Es);
            td_PU(td_QR, td_Ps, td_Lq, td_Es);
            td_PU(td_QR, td_pT, td_Lq, td_Es);
            td_PU(td_QR, td_ig, td_Lq, td_Es);
            if (!td_Na(td_QR[td_pT]) || !td_Na(td_QR[td_ig])) {
                td_QR[td_pT] = null;
                td_QR[td_ig] = null;
            }
            if (td_pm(td_QR[td_Ps]) && !td_pm(td_QR[td_J8])) {
                return null;
            }
            if (td_pm(td_QR[td_J8])) {
                if (!td_vV) {
                    td_vV = true;
                }
                td_oy.push([td_QR[td_J8], td_QR[td_Ps]]);
            }
            if (!td_VX(0, td_QR)) {
                return td_QR;
            }
            return null;
        }
        function td_Z2(td_oL, td_Vu) {
            if (td_pN(td_Vu[td_cu]) && !td_go(td_Vu[td_cu])) {
                td_oL[td_Vu[td_cu]] = 1;
            } else {
                if (td_pN(td_Vu[td_bN]) && !td_go(td_Vu[td_bN])) {
                    td_oL[td_Vu[td_bN]] = 1;
                }
            }
        }
        function td_tv(td_oM, td_bX, td_eR, td_qm) {
            td_fU = td_Zb();
            for (var td_Ma in td_qm) {
                if (!td_qm.hasOwnProperty(td_Ma) || !Array.isArray(td_qm[td_Ma]) || (td_qm[td_Ma].length !== td_Vs && td_qm[td_Ma].length !== td_AW)) {
                    continue;
                }
                var td_Qs = td_pI(td_bX, td_qm[td_Ma]);
                if (td_Qs !== null) {
                    td_Z2(td_eR, td_Qs);
                    if (td_fU) {
                        td_Gw(td_Qs);
                    }
                    td_oM.push(td_Qs);
                }
            }
        }
        function td_d7(td_EP, td_m3, td_zf, td_XK) {
            var td_AY = null;
            try {
                var td_WC = new td_0b.td_6D(td_XK[((typeof (td_0b.tdz_98cfc473eea34e798f1900facbd84ffb) !== "undefined" && typeof (td_0b.tdz_98cfc473eea34e798f1900facbd84ffb.td_f) !== "undefined") ? (td_0b.tdz_98cfc473eea34e798f1900facbd84ffb.td_f(85, 4)) : null)]).td_f(0, td_XK[((typeof (td_0b.tdz_98cfc473eea34e798f1900facbd84ffb) !== "undefined" && typeof (td_0b.tdz_98cfc473eea34e798f1900facbd84ffb.td_f) !== "undefined") ? (td_0b.tdz_98cfc473eea34e798f1900facbd84ffb.td_f(85, 4)) : null)].length);
                if (typeof td_WC === ((typeof (td_0b.tdz_98cfc473eea34e798f1900facbd84ffb) !== "undefined" && typeof (td_0b.tdz_98cfc473eea34e798f1900facbd84ffb.td_f) !== "undefined") ? (td_0b.tdz_98cfc473eea34e798f1900facbd84ffb.td_f(6, 6)) : null)) {
                    td_AY = td_WC;
                } else {
                    td_AY = JSON.parse(td_WC);
                }
                if (typeof td_AY !== [][[]] + "" && td_AY !== null && Array.isArray(td_AY) && td_AY.length > 0) {
                    td_tv(td_EP, td_m3, td_zf, td_AY);
                }
            } catch (td_do) {}
        }
        function td_RL(td_wM, td_N0, td_NX) {
            for (var td_nQ in td_N0) {
                if (!td_N0.hasOwnProperty(td_nQ)) {
                    continue;
                }
                var td_pz = td_0b.getEventTargetAttr(td_NX, (td_N0[td_nQ][td_RS]));
                if (td_pN(td_pz) && td_pz !== [][[]] + "") {
                    td_wM.push([(td_N0[td_nQ][td_RS]), td_pz]);
                }
            }
        }
        function td_o7(td_hF) {
            if (td_pm(td_hF[td_0b.IDENT_ID])) {
                return td_hF[td_0b.IDENT_TYPE] + "#" + td_hF[td_0b.IDENT_ID];
            }
            return td_hF[td_0b.IDENT_TYPE] + "#" + td_hF[td_0b.IDENT_NAME];
        }
        function td_RN(td_uC, td_m2) {
            var td_Eu = td_o7(td_uC);
            var td_PL = td_Eu + "#" + td_m2[td_pT];
            if (td_C8.m_ident_doc_map.hasOwnProperty(td_PL) || !td_pN(td_m2[td_pT]) || !td_pN(td_m2[td_ig])) {
                return;
            }
            td_C8.m_ident_doc_map[td_PL] = td_m2[td_ig];
            var td_vu = [td_Eu, td_m2[td_ig]];
            td_C8.m_update_container.push(td_vu);
        }
        function td_Id(td_KD) {
            if (td_KD === null || !Array.isArray(td_KD)) {
                return 0;
            }
            var td_F2 = 0;
            for (var td_Jq in td_KD) {
                if (!td_pN(td_Jq) || !td_KD.hasOwnProperty(td_Jq) || !td_rN(td_KD[td_Jq])) {
                    continue;
                }
                ++td_F2;
            }
            return td_F2;
        }
        function td_l2(td_oy) {
            if (td_oy === null || !Array.isArray(td_oy)) {
                return 0;
            }
            var td_vu = 0;
            for (var td_nG in td_oy) {
                if (!td_pN(td_nG) || !td_pN(td_oy[td_nG]) || !td_oy.hasOwnProperty(td_nG) || td_oy[td_nG] === "&") {
                    continue;
                }
                if (td_go(td_oy[td_nG]) || td_pm(td_oy[td_nG])) {
                    ++td_vu;
                }
            }
            return td_vu;
        }
        function td_k0(td_ei, td_Bf) {
            if (!td_d6(td_ei) || td_ei === "&") {
                return false;
            }
            if (td_go(td_ei)) {
                return td_ei.test(td_Bf);
            }
            return td_ei === td_Bf;
        }
        function td_Yc(td_NY, td_KB) {
            var td_Cn = 0;
            for (var td_C4 in td_KB) {
                if (!td_pm(td_KB[td_C4])) {
                    continue;
                }
                var td_P5 = td_0b.toNumber(td_C4);
                switch (td_P5) {
                case td_UB:
                    td_Cn += td_k0(td_NY[td_zb], td_KB[td_UB]);
                    break;
                case td_bz:
                    td_Cn += td_k0(td_NY[td_cu], td_KB[td_bz]);
                    break;
                case td_hc:
                    td_Cn += td_k0(td_NY[td_bN], td_KB[td_hc]);
                    break;
                default:
                    break;
                }
            }
            return td_Cn;
        }
        function td_Ky(td_VS, td_Xm) {
            if (1 > td_Xm.length) {
                return 0;
            }
            var td_xe = 0;
            for (var td_dI in td_Xm) {
                if (!td_Xm.hasOwnProperty(td_dI)) {
                    continue;
                }
                if (td_pN(td_Xm[td_dI]) && td_Xm[td_dI].length === td_Q9 && td_k0(td_VS[td_J8], (td_Xm[td_dI][td_m0]))) {
                    ++td_xe;
                    if (td_pN(td_VS[td_Ps]) && td_pN(td_Xm[td_dI][td_NT]) && td_k0(td_VS[td_Ps], (td_Xm[td_dI][td_NT]))) {
                        ++td_xe;
                    }
                }
            }
            return td_xe;
        }
        function td_tW(td_Od, td_QO, td_h8) {
            var td_BM = td_l2(td_h8);
            if (1 > td_BM) {
                return false;
            }
            var td_EM = td_Id(td_Od) + td_QO.length;
            if (td_BM > td_EM) {
                return false;
            }
            var td_oT = 0;
            td_oT += td_Yc(td_h8, td_Od);
            td_oT += td_Ky(td_h8, td_QO);
            if (td_oT >= td_BM) {
                return true;
            }
            return false;
        }
        function td_xo(td_gU, td_jq, td_ru) {
            if (1 > td_jq.length || 1 > td_gU.length) {
                return false;
            }
            for (var td_xP in td_gU) {
                if (td_tW(td_jq, td_ru, td_gU[td_xP])) {
                    td_RN(td_jq, td_gU[td_xP]);
                    return true;
                }
            }
            return false;
        }
        function td_lT() {
            this.shouldMaskExactNeg = function(td_WD) {
                var td_ZZ = td_hv(td_WD);
                if (td_ZZ) {
                    return td_zx.m_exactMatchNeg.hasOwnProperty(td_ZZ);
                }
                return false;
            }
            ;
            this.setMaskExactNeg = function(td_FS) {
                var td_Yk = td_hv(td_FS);
                if (td_Yk) {
                    td_zx.m_exactMatchNeg[td_Yk] = 1;
                }
            }
            ;
            this.shouldMaskExactPos = function(td_R2) {
                var td_SM = td_hv(td_R2);
                if (td_SM) {
                    return td_zx.m_exactMatchPos.hasOwnProperty(td_SM);
                }
                return false;
            }
            ;
            this.setMaskExactPos = function(td_mG) {
                var td_qo = td_hv(td_mG);
                if (td_qo) {
                    td_zx.m_exactMatchPos[td_qo] = 1;
                }
            }
            ;
            this.shouldIgnoreExactNeg = function(td_tk) {
                var td_Uy = td_hv(td_tk);
                if (td_Uy) {
                    return td_mB.m_exactMatchNeg.hasOwnProperty(td_Uy);
                }
                return false;
            }
            ;
            this.setIgnoreExactNeg = function(td_k4) {
                var td_G8 = td_hv(td_k4);
                if (td_G8) {
                    td_mB.m_exactMatchNeg[td_G8] = 1;
                }
            }
            ;
            this.shouldIgnoreExactPos = function(td_so) {
                var td_zq = td_hv(td_so);
                if (td_zq) {
                    return td_mB.m_exactMatchPos.hasOwnProperty(td_zq);
                }
                return false;
            }
            ;
            this.setIgnoreExactPos = function(td_wb) {
                var td_WU = td_hv(td_wb);
                if (td_WU) {
                    td_mB.m_exactMatchPos[td_WU] = 1;
                }
            }
            ;
            this.shouldPasswdExactNeg = function(td_R2) {
                var td_eQ = td_hv(td_R2);
                if (td_eQ) {
                    return td_eu.m_exactMatchNeg.hasOwnProperty(td_eQ);
                }
                return false;
            }
            ;
            this.setPasswdExactNeg = function(td_IZ) {
                var td_S2 = td_hv(td_IZ);
                if (td_S2) {
                    td_eu.m_exactMatchNeg[td_S2] = 1;
                }
            }
            ;
            this.shouldPasswdExactPos = function(td_Px) {
                var td_tm = td_hv(td_Px);
                if (td_tm) {
                    return td_eu.m_exactMatchPos.hasOwnProperty(td_tm);
                }
                return false;
            }
            ;
            this.setPasswdExactPos = function(td_S6) {
                var td_jv = td_hv(td_S6);
                if (td_jv) {
                    td_eu.m_exactMatchPos[td_jv] = 1;
                }
            }
            ;
            this.shouldDocumentExactNeg = function(td_Bp) {
                var td_O2 = td_hv(td_Bp);
                if (td_O2) {
                    return td_C8.m_exactMatchNeg.hasOwnProperty(td_O2);
                }
                return false;
            }
            ;
            this.setDocumentExactNeg = function(td_pz) {
                var td_Hn = td_hv(td_pz);
                if (td_Hn) {
                    td_C8.m_exactMatchNeg[td_Hn] = 1;
                }
            }
            ;
            this.shouldDocumentExactPos = function(td_k8) {
                var td_vL = td_hv(td_k8);
                if (td_vL) {
                    return td_C8.m_exactMatchPos.hasOwnProperty(td_vL);
                }
                return false;
            }
            ;
            this.setDocumentExactPos = function(td_Ow) {
                var td_dD = td_hv(td_Ow);
                if (td_dD) {
                    td_C8.m_exactMatchPos[td_dD] = 1;
                }
            }
            ;
            this.getDocumentationList = function() {
                if (1 > td_C8.m_update_container.length) {
                    return null;
                }
                var td_PW = td_Ab(td_C8.m_update_container);
                td_C8.m_update_container = [];
                return td_PW;
            }
            ;
            this.checkEventTargetIgnore = function(td_Ad) {
                if (!td_pN(td_Ad)) {
                    return false;
                }
                var td_AM = td_0b.getEventTypeIdName(td_Ad);
                var td_N4 = td_G5(td_AM);
                if (!td_N4) {
                    if (this.shouldIgnoreExactNeg(td_AM)) {
                        return true;
                    }
                    if (this.shouldIgnoreExactPos(td_AM)) {
                        return false;
                    }
                }
                var td_Hb = [];
                if (td_vV) {
                    td_RL(td_Hb, td_mB.m_attr_to_query, td_Ad);
                }
                if (td_N4 && td_Hb.length === 0) {
                    return false;
                }
                var td_pc = td_xo(td_mB.m_ruleSet, td_AM, td_Hb);
                if (td_pc) {
                    this.setIgnoreExactNeg(td_AM);
                } else {
                    this.setIgnoreExactPos(td_AM);
                }
                return td_pc;
            }
            ;
            this.checkEventTargetMask = function(td_tS) {
                if (!td_pN(td_tS)) {
                    return false;
                }
                var td_Rp = td_0b.getEventTypeIdName(td_tS);
                var td_CQ = td_G5(td_Rp);
                if (!td_CQ) {
                    if (this.shouldMaskExactNeg(td_Rp)) {
                        return true;
                    }
                    if (this.shouldMaskExactPos(td_Rp)) {
                        return false;
                    }
                }
                var td_W0 = [];
                if (td_vV) {
                    td_RL(td_W0, td_zx.m_attr_to_query, td_tS);
                }
                if (td_CQ && td_W0.length === 0) {
                    return false;
                }
                var td_Mp = td_xo(td_zx.m_ruleSet, td_Rp, td_W0);
                if (td_Mp || td_Rp[td_0b.IDENT_TYPE] === ((typeof (td_0b.tdz_98cfc473eea34e798f1900facbd84ffb) !== "undefined" && typeof (td_0b.tdz_98cfc473eea34e798f1900facbd84ffb.td_f) !== "undefined") ? (td_0b.tdz_98cfc473eea34e798f1900facbd84ffb.td_f(89, 8)) : null)) {
                    this.setMaskExactNeg(td_Rp);
                    td_Mp = true;
                } else {
                    this.setMaskExactPos(td_Rp);
                }
                return td_Mp;
            }
            ;
            this.shouldDefineAsPasswordType = function(td_Qq) {
                if (!td_pN(td_Qq)) {
                    return false;
                }
                var td_uj = td_0b.getEventTypeIdName(td_Qq);
                var td_dM = td_G5(td_uj);
                if (!td_dM) {
                    if (this.shouldPasswdExactNeg(td_uj)) {
                        return true;
                    }
                    if (this.shouldPasswdExactPos(td_uj)) {
                        return false;
                    }
                }
                var td_Vr = [];
                if (td_vV) {
                    td_RL(td_Vr, td_eu.m_attr_to_query, td_Qq);
                }
                if (td_dM && td_Vr.length === 0) {
                    return false;
                }
                var td_SZ = td_xo(td_eu.m_ruleSet, td_uj, td_Vr);
                if (td_SZ || td_uj[td_0b.IDENT_TYPE] === ((typeof (td_0b.tdz_98cfc473eea34e798f1900facbd84ffb) !== "undefined" && typeof (td_0b.tdz_98cfc473eea34e798f1900facbd84ffb.td_f) !== "undefined") ? (td_0b.tdz_98cfc473eea34e798f1900facbd84ffb.td_f(89, 8)) : null)) {
                    this.setPasswdExactNeg(td_uj);
                    td_SZ = true;
                } else {
                    this.setPasswdExactPos(td_uj);
                }
                return td_SZ;
            }
            ;
            this.shouldDocument = function(td_AJ) {
                if (!td_pN(td_AJ)) {
                    return false;
                }
                var td_Ev = td_0b.getEventTypeIdName(td_AJ);
                var td_TE = td_G5(td_Ev);
                if (!td_TE) {
                    if (this.shouldDocumentExactNeg(td_Ev)) {
                        return true;
                    }
                    if (this.shouldDocumentExactPos(td_Ev)) {
                        return false;
                    }
                }
                var td_P0 = [];
                if (td_vV) {
                    td_RL(td_P0, td_C8.m_attr_to_query, td_AJ);
                }
                if (td_TE && td_P0.length === 0) {
                    return false;
                }
                var td_VW = td_xo(td_C8.m_ruleSet, td_Ev, td_P0);
                if (td_VW) {
                    this.setDocumentExactNeg(td_Ev);
                } else {
                    this.setDocumentExactPos(td_Ev);
                }
                return td_VW;
            }
            ;
        }
        if (!td_ck) {
            if (typeof td_2U !== [][[]] + "" && td_2U !== null) {
                td_d7(td_mB.m_ruleSet, td_mB.m_attr_to_query, td_mB.m_exactMatchNeg, td_2U);
            }
            td_Ou = td_mB.m_ruleSet.length;
            td_ck = true;
        }
        if (!td_Rn) {
            if (typeof td_1z !== [][[]] + "" && td_1z !== null) {
                td_d7(td_zx.m_ruleSet, td_zx.m_attr_to_query, td_zx.m_exactMatchNeg, td_1z);
            }
            td_AQ = td_zx.m_ruleSet.length;
            td_Rn = true;
        }
        if (!td_N5) {
            if (typeof td_1i !== [][[]] + "" && td_1i !== null) {
                td_d7(td_eu.m_ruleSet, td_eu.m_attr_to_query, td_eu.m_exactMatchNeg, td_1i);
            }
            td_UQ = td_eu.m_ruleSet.length;
            td_N5 = true;
        }
        if (!td_mv) {
            if (typeof td_4Q !== [][[]] + "" && td_4Q !== null) {
                td_d7(td_C8.m_ruleSet, td_C8.m_attr_to_query, td_C8.m_exactMatchNeg, td_4Q);
            }
            td_yw = td_C8.m_ruleSet.length;
            td_mv = true;
        }
        return [td_Ou, td_AQ, td_UQ, new td_lT()];
    }
    if (typeof Array === [][[]] + "" || Array === null || typeof Array.isArray === [][[]] + "" || Array.isArray === null || typeof JSON === [][[]] + "" || JSON === null || typeof JSON.stringify === [][[]] + "" || JSON.stringify === null || typeof JSON.parse === [][[]] + "" || JSON.parse === null) {
        return null;
    }
    if (typeof td_D !== [][[]] + "" && td_D === null) {
        td_D = new td_x();
    }
    return td_D;
}
td_0b.tdz_d489afc5c2fd4f56bb8c285d2d409da0 = new td_0b.td_6D("\x64\x34\x38\x39\x61\x66\x63\x35\x63\x32\x66\x64\x34\x66\x35\x36\x62\x62\x38\x63\x32\x38\x35\x64\x32\x64\x34\x30\x39\x64\x61\x30\x34\x32\x35\x61\x35\x61\x34\x61\x31\x31\x35\x64\x30\x63\x35\x37\x30\x39\x35\x37\x30\x35\x31\x30\x35\x32\x30\x66\x34\x64\x35\x33\x30\x36\x35\x33\x34\x38\x31\x62\x30\x32\x34\x38\x34\x64\x35\x65\x37\x30\x32\x30\x36\x62\x30\x61\x37\x31\x33\x65\x35\x62\x37\x31\x33\x36\x30\x65\x37\x64\x36\x33\x35\x62\x33\x32\x32\x36\x30\x66\x33\x30\x37\x31\x33\x39\x35\x65\x37\x37\x33\x32\x36\x61\x30\x63\x32\x36\x32\x66\x36\x37\x34\x35\x34\x30\x35\x64\x34\x33\x35\x39\x31\x34\x30\x65\x35\x31\x30\x64");
var td_0b = td_0b || {};
function td_0O(td_WP, td_D9, td_EN) {
    var td_GU = false;
    var td_pO = false;
    var td_Nz = [];
    var td_IS = 2000;
    var td_gK = 2000;
    var td_wX = td_D9;
    var td_tl = [];
    var td_p9;
    var td_IR = td_EN;
    var td_Th = 0;
    var td_Vl = 0;
    var td_zC;
    var td_qN = null;
    var td_Vd = 0;
    var td_aF = 0;
    var td_kO = 2;
    var td_jr = 18;
    var td_eZ = 10;
    var td_uP = 128;
    var td_fF;
    var td_eV = null;
    var td_lq = null;
    var td_Tp = 5;
    var td_ul = 0;
    var td_tr;
    var td_C7;
    var td_Z2 = 0;
    var td_tC = 0;
    var td_ih = [];
    var td_Y7 = [];
    var td_Bj = [];
    var td_Hj = 1;
    var td_sw = 0;
    var td_fU = 0;
    var td_VN = 5000;
    var td_gr = false;
    var td_fo = 0;
    var td_AZ = 0;
    var td_X5 = 15;
    var td_Ur = 0;
    var td_Be = 0;
    var td_mG = true;
    var td_ls = 0;
    var td_s9 = 500;
    var td_NF;
    var td_bb = 0;
    var td_rm = 0;
    function td_Kt() {
        if (td_Y7.length > 1) {
            var td_Mv = 0;
            for (var td_id = 0; td_id < td_Y7.length; ++td_id) {
                td_Mv += td_Y7[td_id][0];
            }
            var td_pq = (td_Y7[td_Y7.length - 1][1] - td_Y7[0][1]);
            var td_Km = td_Mv / td_pq;
            td_Bj.push([td_Y7, td_Km]);
        }
        td_Y7 = [];
    }
    function td_Qf(td_x) {
        var td_Q9 = (typeof td_x.movementX !== [][[]] + "" && typeof td_x.movementY !== [][[]] + "");
        var td_td = (typeof td_x.clientX !== [][[]] + "" && typeof td_x.clientY !== [][[]] + "");
        var td_VU = 0;
        if ((td_Q9 && td_x.movementX > 0) || (td_eV !== null && !td_Q9 && td_td && td_x.clientX > td_eV)) {
            td_VU = 1;
        } else {
            if ((td_Q9 && td_x.movementX < 0) || (td_eV !== null && !td_Q9 && td_td && td_x.clientX < td_eV)) {
                td_VU = -1;
            }
        }
        var td_r5 = 0;
        if ((td_Q9 && td_x.movementY > 0) || (td_lq !== null && !td_Q9 && td_td && td_x.clientY > td_lq)) {
            td_r5 = 1;
        } else {
            if ((td_Q9 && td_x.movementX < 0) || (td_lq !== null && !td_Q9 && td_td && td_x.clientY < td_lq)) {
                td_r5 = -1;
            }
        }
        var td_ae = false;
        if ((td_Q9 && td_x.movementX !== 0 && td_x.movementY !== 0) || (!td_Q9 && td_td && td_eV !== null && td_lq !== null && td_x.clientY !== td_lq && td_x.clientX !== td_eV)) {
            td_ae = td_VU !== td_rm || td_r5 !== td_bb;
            td_rm = td_VU;
            td_bb = td_r5;
            if (td_ae) {
                td_Kt();
            }
        }
    }
    function td_kW(td_sy) {
        if (typeof td_sy === [][[]] + "" || td_sy === null) {
            return;
        }
        var td_q9 = (typeof td_sy.movementX !== [][[]] + "" && typeof td_sy.movementY !== [][[]] + "");
        var td_Qt = (typeof td_sy.clientX !== [][[]] + "" && typeof td_sy.clientY !== [][[]] + "");
        var td_i1 = td_qN.performance.now();
        var td_Pu = (typeof td_sy.sourceCapabilities !== [][[]] + "" && typeof td_sy.sourceCapabilities !== null && typeof td_sy.sourceCapabilities.firesTouchEvents !== [][[]] + "" && typeof td_sy.sourceCapabilities.firesTouchEvents !== null && td_sy.sourceCapabilities.firesTouchEvents === true) || (typeof td_sy.buttons !== [][[]] + "" && td_sy.buttons !== 0);
        if (td_Pu === true) {
            td_tC++;
        }
        if ((td_q9 && typeof Math !== [][[]] + "" && Math !== null && typeof Math.abs !== [][[]] + "" && Math.abs !== null && Math.abs(td_sy.movementX * td_Hj) + Math.abs(td_sy.movementY * td_Hj) > td_kO) || ((!td_q9 || (td_sy.movementX === 0 && td_sy.movementY === 0)) && !td_Pu && td_Qt && td_eV !== null && td_lq !== null && Math.abs(td_sy.clientX - td_eV) + Math.abs(td_sy.clientY - td_lq) > td_kO)) {
            td_Vd = td_Vd + 1;
            if (td_i1 - td_fF > td_jr) {
                td_aF = td_aF + 1;
            }
            var td_Bf = (td_aF / td_Vd);
            try {
                td_Bf = td_Bf.toFixed(5);
            } catch (td_x) {}
            td_tl.unshift(td_Bf);
        }
        if (td_q9 && td_sy.movementX === 0 && td_sy.movementY === 0 && td_Z2 !== -1) {
            td_Z2++;
        } else {
            td_Z2 = -1;
        }
        if (td_fF !== null) {
            var td_Ft = td_i1 - td_fF;
            if (td_Ft < 1000) {
                var td_kb = (1000 / td_Ft);
                try {
                    td_kb = td_kb.toFixed(3);
                } catch (td_x) {}
                td_ih.unshift(td_kb);
            }
            while (td_ih.length > td_uP) {
                td_ih.pop();
            }
        }
        td_Qf(td_sy);
        if (td_q9) {
            var td_zm = Math.sqrt(Math.pow(td_sy.movementX * td_Hj, 2) + Math.pow(td_sy.movementY * td_Hj, 2));
            td_Y7.push([td_zm, td_qN.performance.now()]);
        } else {
            if (td_Qt && td_eV !== null && td_lq !== null) {
                var td_pv = (td_sy.clientX - td_eV) * td_Hj;
                var td_Vy = (td_sy.clientY - td_lq) * td_Hj;
                var td_zm = Math.sqrt(Math.pow(td_pv, 2) + Math.pow(td_Vy, 2));
                td_Y7.push([td_zm, td_qN.performance.now()]);
            }
        }
        if (td_Qt) {
            td_eV = td_sy.clientX;
            td_lq = td_sy.clientY;
        }
        td_fF = td_i1;
        while (td_tl.length > td_uP) {
            td_tl.pop();
        }
        if (td_tl.length === td_uP) {
            td_GU = true;
        }
    }
    function td_IW() {
        td_eV = null;
        td_lq = null;
        td_Kt();
    }
    function td_pd(td_fD) {
        if (typeof td_3k !== [][[]] + "" && td_3k) {
            var td_ay = ((typeof (td_0b.tdz_d489afc5c2fd4f56bb8c285d2d409da0) !== "undefined" && typeof (td_0b.tdz_d489afc5c2fd4f56bb8c285d2d409da0.td_f) !== "undefined") ? (td_0b.tdz_d489afc5c2fd4f56bb8c285d2d409da0.td_f(0, 6)) : null);
            for (var td_f3 = 0; td_f3 < td_ul % 3; ++td_f3) {
                td_ay += ((typeof (td_0b.tdz_d489afc5c2fd4f56bb8c285d2d409da0) !== "undefined" && typeof (td_0b.tdz_d489afc5c2fd4f56bb8c285d2d409da0.td_f) !== "undefined") ? (td_0b.tdz_d489afc5c2fd4f56bb8c285d2d409da0.td_f(0, 6)) : null);
            }
            td_NF.innerHTML = td_ay;
        }
        if (td_fD > td_C7 && !td_pO) {
            td_pO = true;
            if (typeof td_3k !== [][[]] + "" && td_3k) {
                if (td_qN && td_qN.document && td_qN.document.body && typeof td_qN.document.body.hasChildNodes !== [][[]] + "" && td_qN.document.body.hasChildNodes !== null && td_qN.document.body.hasChildNodes() && typeof td_qN.document.body.childNodes !== [][[]] + "") {
                    var td_zT = td_qN.document.body.childNodes;
                    for (var td_f3 = 0; td_f3 < td_zT.length; ++td_f3) {
                        if (td_zT[td_f3] === td_NF) {}
                        td_qN.document.body.removeChild(td_NF);
                        break;
                    }
                }
            }
            return;
        }
        if (typeof td_tr !== [][[]] + "" && td_ul % td_Tp === 0) {
            var td_oO = (td_fD - td_tr);
            if (td_oO > 0) {
                var td_P3 = (1000 * td_Tp) / td_oO;
                try {
                    td_P3 = td_P3.toFixed(2);
                } catch (td_x) {}
                td_Nz.push(td_P3);
            }
        }
        if (td_ul % td_Tp === 0) {
            td_tr = td_fD;
        }
        ++td_ul;
        td_qN.requestAnimationFrame(td_pd);
    }
    function td_m4(td_x) {
        if (typeof td_x !== ((typeof (td_0b.tdz_d489afc5c2fd4f56bb8c285d2d409da0) !== "undefined" && typeof (td_0b.tdz_d489afc5c2fd4f56bb8c285d2d409da0.td_f) !== "undefined") ? (td_0b.tdz_d489afc5c2fd4f56bb8c285d2d409da0.td_f(6, 6)) : null) || td_x === null) {
            td_2O(td_qN.document, td_0x, td_m4);
            return;
        }
        if (td_x.clientX < 0 || td_x.clientY < 0 || td_x.clientX > td_qN.innerWidth || td_x.clientY > td_qN.innerHeight) {
            td_gr = true;
        }
    }
    function td_Mr(td_oI) {
        if (!td_mG && (td_oI - td_Ur) > td_X5 && td_fU > 1 && !td_gr) {
            td_mG = true;
            td_ls++;
            td_Be = td_qN.performance.now();
        }
        if (td_qN.performance.now() - td_Be > td_s9) {
            td_r0();
        }
        if (td_sw > td_VN || td_GU) {
            td_r0();
        } else {
            td_qN.requestAnimationFrame(td_Mr);
        }
    }
    function td_r0() {
        if (td_ls > 0) {
            td_AZ += td_ls - 1;
            td_ls = 0;
        }
    }
    function td_gt(td_x) {
        var td_kr = (typeof td_x.movementX !== [][[]] + "" && typeof td_x.movementY !== [][[]] + "");
        var td_aq = (typeof td_x.clientX !== [][[]] + "" && typeof td_x.clientY !== [][[]] + "");
        var td_RW = 0;
        var td_Dx = 0;
        if (td_kr) {
            td_RW = td_x.movementX;
            td_Dx = td_x.movementY;
        } else {
            if (td_aq) {
                td_RW = td_x.clientX;
                td_Dx = td_x.clientY;
            }
        }
        td_gr = false;
        td_fo++;
        td_fU = Math.sqrt(Math.pow(td_RW, 2) + Math.pow(td_Dx, 2));
        td_sw += td_fU;
        td_Ur = td_qN.performance.now();
        td_mG = false;
    }
    this.setup = function() {
        td_qN = td_0b.td_4a(td_2u);
        if (typeof td_qN === [][[]] + "" || typeof td_qN === null || typeof td_qN.performance === [][[]] + "" || typeof td_qN.performance.now === [][[]] + "") {
            return;
        }
        if (typeof window !== [][[]] + "" && typeof window.devicePixelRatio !== [][[]] + "" && typeof window.screen !== [][[]] + "" && typeof window.screen.width !== [][[]] + "" && typeof window.screen.height !== [][[]] + "") {
            td_Hj = (1920 * 1080) / (window.screen.width * window.devicePixelRatio * window.screen.height * window.devicePixelRatio);
        }
        td_fF = td_qN.performance.now();
        setTimeout(function() {
            td_GU = true;
        }, td_wX);
        td_zC = td_gK + td_qN.performance.now();
        var td_vq = td_qN.document;
        td_3h(td_vq, td_4k, td_kW);
        td_3h(td_qN, td_4k, td_gt);
        td_3h(td_vq.body, td_1W, td_IW);
        td_3h(td_vq, td_0x, td_m4);
        if (typeof td_qN.requestAnimationFrame !== [][[]] + "") {
            td_C7 = td_qN.performance.now() + td_IS;
            if (typeof td_3k !== [][[]] + "" && td_3k) {
                td_NF = td_qN.document.createElement(Number(704230).toString(29));
                td_qN.document.body.appendChild(td_NF);
                td_NF.style.opacity = 0.01;
                td_NF.style.position = ((typeof (td_0b.tdz_d489afc5c2fd4f56bb8c285d2d409da0) !== "undefined" && typeof (td_0b.tdz_d489afc5c2fd4f56bb8c285d2d409da0.td_f) !== "undefined") ? (td_0b.tdz_d489afc5c2fd4f56bb8c285d2d409da0.td_f(12, 5)) : null);
                td_NF.style.lineHeight = ((typeof (td_0b.tdz_d489afc5c2fd4f56bb8c285d2d409da0) !== "undefined" && typeof (td_0b.tdz_d489afc5c2fd4f56bb8c285d2d409da0.td_f) !== "undefined") ? (td_0b.tdz_d489afc5c2fd4f56bb8c285d2d409da0.td_f(17, 3)) : null);
                td_NF.style.width = ((typeof (td_0b.tdz_d489afc5c2fd4f56bb8c285d2d409da0) !== "undefined" && typeof (td_0b.tdz_d489afc5c2fd4f56bb8c285d2d409da0.td_f) !== "undefined") ? (td_0b.tdz_d489afc5c2fd4f56bb8c285d2d409da0.td_f(17, 3)) : null);
                td_NF.style.top = ((typeof (td_0b.tdz_d489afc5c2fd4f56bb8c285d2d409da0) !== "undefined" && typeof (td_0b.tdz_d489afc5c2fd4f56bb8c285d2d409da0.td_f) !== "undefined") ? (td_0b.tdz_d489afc5c2fd4f56bb8c285d2d409da0.td_f(20, 3)) : null);
                td_NF.style.left = ((typeof (td_0b.tdz_d489afc5c2fd4f56bb8c285d2d409da0) !== "undefined" && typeof (td_0b.tdz_d489afc5c2fd4f56bb8c285d2d409da0.td_f) !== "undefined") ? (td_0b.tdz_d489afc5c2fd4f56bb8c285d2d409da0.td_f(20, 3)) : null);
                td_NF.style.fontSize = ((typeof (td_0b.tdz_d489afc5c2fd4f56bb8c285d2d409da0) !== "undefined" && typeof (td_0b.tdz_d489afc5c2fd4f56bb8c285d2d409da0.td_f) !== "undefined") ? (td_0b.tdz_d489afc5c2fd4f56bb8c285d2d409da0.td_f(17, 3)) : null);
            }
            td_pd(td_qN.performance.now());
            td_Mr(td_qN.performance.now());
        }
        td_J(window, td_6L, td_Ae, td_y6);
        td_J(window, td_4M, td_Ae, td_y6);
        td_p9 = setInterval(td_Ra, td_IR);
    }
    ;
    function td_Ae() {
        td_GU = true;
        if (td_p9) {
            clearInterval(td_p9);
            td_p9 = null;
        }
        td_X(window, td_6L, td_Ae, td_y6);
        td_X(window, td_4M, td_Ae, td_y6);
        var td_vw = td_qN.document;
        td_2O(td_vw, td_4k, td_kW);
        td_2O(td_vw, td_4k, td_gt);
        td_2O(td_vw.body, td_1W, td_IW);
        td_2O(td_vw, td_0x, td_m4);
    }
    function td_Ra() {
        var td_uQ = (td_GU || (td_qN.performance.now() > td_zC && td_Vl === 0 && td_tl.length !== 0) || td_tl.length > td_Vl);
        if (!(td_uQ && td_pO)) {
            return;
        }
        if (typeof td_p9 !== [][[]] + "") {
            if (td_GU || td_Th > 2) {
                td_Ae();
            }
        }
        if (td_Z2 > 0) {}
        var td_eh = [];
        for (var td_wZ = 0; td_wZ < td_Bj.length; ++td_wZ) {
            var td_z2 = td_Bj[td_wZ][0];
            var td_Q4 = td_Bj[td_wZ][1];
            if (td_z2.length > 1 && td_Q4 > 0) {
                var td_FL = 0;
                for (var td_jO = 1; td_jO < td_z2.length; ++td_jO) {
                    var td_gG = (td_z2[td_jO][0] - td_z2[td_jO - 1][0]) / td_Q4;
                    if (Math.abs(td_gG) > td_eZ) {
                        td_FL++;
                    }
                }
                var td_Q9 = (td_FL / (td_z2.length - 1));
                try {
                    td_Q9 = (td_Q9).toFixed(3);
                } catch (td_x) {}
                td_eh.push(td_Q9);
            }
        }
        var td_Yg = "";
        if (td_Nz.length > 0) {
            td_Yg = td_Nz.join(",");
        }
        if (td_tl.length > 0) {
            td_Yg += ":" + td_tl.join(",");
            td_Yg += ((typeof (td_0b.tdz_d489afc5c2fd4f56bb8c285d2d409da0) !== "undefined" && typeof (td_0b.tdz_d489afc5c2fd4f56bb8c285d2d409da0.td_f) !== "undefined") ? (td_0b.tdz_d489afc5c2fd4f56bb8c285d2d409da0.td_f(23, 4)) : null) + td_0Z.td_2k;
            td_Yg += ((typeof (td_0b.tdz_d489afc5c2fd4f56bb8c285d2d409da0) !== "undefined" && typeof (td_0b.tdz_d489afc5c2fd4f56bb8c285d2d409da0.td_f) !== "undefined") ? (td_0b.tdz_d489afc5c2fd4f56bb8c285d2d409da0.td_f(27, 3)) : null) + td_ih.join(",");
            td_Yg += ((typeof (td_0b.tdz_d489afc5c2fd4f56bb8c285d2d409da0) !== "undefined" && typeof (td_0b.tdz_d489afc5c2fd4f56bb8c285d2d409da0.td_f) !== "undefined") ? (td_0b.tdz_d489afc5c2fd4f56bb8c285d2d409da0.td_f(30, 3)) : null) + td_eh.join(",");
        }
        if (td_Z2 > 0 || td_tC > 0) {
            td_Yg += ((typeof (td_0b.tdz_d489afc5c2fd4f56bb8c285d2d409da0) !== "undefined" && typeof (td_0b.tdz_d489afc5c2fd4f56bb8c285d2d409da0.td_f) !== "undefined") ? (td_0b.tdz_d489afc5c2fd4f56bb8c285d2d409da0.td_f(33, 3)) : null) + td_Z2;
            td_Yg += ((typeof (td_0b.tdz_d489afc5c2fd4f56bb8c285d2d409da0) !== "undefined" && typeof (td_0b.tdz_d489afc5c2fd4f56bb8c285d2d409da0.td_f) !== "undefined") ? (td_0b.tdz_d489afc5c2fd4f56bb8c285d2d409da0.td_f(36, 3)) : null) + td_tC;
        }
        if (td_sw > 0) {
            td_Yg += ((typeof (td_0b.tdz_d489afc5c2fd4f56bb8c285d2d409da0) !== "undefined" && typeof (td_0b.tdz_d489afc5c2fd4f56bb8c285d2d409da0.td_f) !== "undefined") ? (td_0b.tdz_d489afc5c2fd4f56bb8c285d2d409da0.td_f(39, 4)) : null) + td_AZ + ((typeof (td_0b.tdz_d489afc5c2fd4f56bb8c285d2d409da0) !== "undefined" && typeof (td_0b.tdz_d489afc5c2fd4f56bb8c285d2d409da0.td_f) !== "undefined") ? (td_0b.tdz_d489afc5c2fd4f56bb8c285d2d409da0.td_f(43, 4)) : null) + td_fo + ((typeof (td_0b.tdz_d489afc5c2fd4f56bb8c285d2d409da0) !== "undefined" && typeof (td_0b.tdz_d489afc5c2fd4f56bb8c285d2d409da0.td_f) !== "undefined") ? (td_0b.tdz_d489afc5c2fd4f56bb8c285d2d409da0.td_f(47, 4)) : null) + td_sw.toFixed(0);
        }
        if (td_Yg.length > 0) {
            td_Yg = ((typeof (td_0b.tdz_d489afc5c2fd4f56bb8c285d2d409da0) !== "undefined" && typeof (td_0b.tdz_d489afc5c2fd4f56bb8c285d2d409da0.td_f) !== "undefined") ? (td_0b.tdz_d489afc5c2fd4f56bb8c285d2d409da0.td_f(51, 5)) : null) + td_Yg;
            if (td_Yg === null || td_Yg === ((typeof (td_0b.tdz_d489afc5c2fd4f56bb8c285d2d409da0) !== "undefined" && typeof (td_0b.tdz_d489afc5c2fd4f56bb8c285d2d409da0.td_f) !== "undefined") ? (td_0b.tdz_d489afc5c2fd4f56bb8c285d2d409da0.td_f(51, 5)) : null)) {
                return;
            }
            var td_Ku = td_4m + ((typeof (td_0b.tdz_d489afc5c2fd4f56bb8c285d2d409da0) !== "undefined" && typeof (td_0b.tdz_d489afc5c2fd4f56bb8c285d2d409da0.td_f) !== "undefined") ? (td_0b.tdz_d489afc5c2fd4f56bb8c285d2d409da0.td_f(56, 4)) : null) + td_0b.td_0B(td_Yg, td_3r);
            td_0Q(td_Ku, document);
            td_Vl = td_tl.length;
            td_Th++;
        }
    }
    td_WP = td_WP || 0;
    setTimeout(this.setup, td_WP);
}
td_0b.tdz_3f93e63bec3b4e4192ea43aa3f137c56 = new td_0b.td_6D("\x33\x66\x39\x33\x65\x36\x33\x62\x65\x63\x33\x62\x34\x65\x34\x31\x39\x32\x65\x61\x34\x33\x61\x61\x33\x66\x31\x33\x37\x63\x35\x36\x31\x62\x33\x64\x30\x39\x31\x65\x35\x63\x36\x62\x34\x66\x33\x39\x35\x34\x34\x65\x30\x61\x33\x66\x36\x66\x35\x35\x31\x39\x30\x38\x36\x34\x34\x65\x35\x34\x33\x61\x30\x34\x31\x65\x35\x38\x33\x63\x34\x38\x35\x34\x34\x63\x34\x66\x30\x35\x33\x38\x30\x35\x31\x62\x30\x37\x33\x62\x36\x32\x30\x33\x34\x38\x30\x66\x36\x65\x31\x65\x35\x37\x35\x36\x36\x38\x35\x32\x31\x39\x35\x30\x36\x39\x31\x38\x36\x37\x31\x61\x34\x62\x34\x38\x34\x66\x30\x30\x31\x63\x34\x37\x34\x34\x30\x66\x35\x38\x30\x65\x31\x31\x31\x34\x35\x30\x35\x66\x30\x65\x34\x30\x34\x65\x35\x61\x35\x33\x30\x62\x31\x35\x31\x35\x30\x63\x30\x65\x30\x65\x31\x35\x35\x31\x30\x37\x34\x36\x34\x35\x35\x61\x36\x64\x30\x63\x30\x66\x34\x30\x35\x36\x31\x33\x30\x66\x35\x32\x30\x61\x36\x65\x35\x65\x35\x33\x30\x64\x34\x36\x31\x30\x34\x34\x30\x38\x35\x30\x35\x37\x35\x38\x34\x31\x35\x36\x30\x30\x31\x37\x31\x37\x35\x30\x33\x64\x35\x61\x30\x61\x36\x62\x35\x38\x35\x37\x34\x36\x30\x30\x31\x33\x35\x61\x35\x32\x30\x64\x33\x65\x35\x37\x30\x37\x34\x35\x35\x32\x34\x30\x30\x61\x30\x66\x35\x35\x35\x32\x30\x38\x35\x64\x35\x61\x30\x31\x35\x37\x34\x37\x30\x37\x35\x66\x32\x65\x35\x32\x30\x31\x36\x37\x30\x34\x35\x32\x35\x30\x34\x62\x35\x62\x30\x36\x30\x65\x35\x39\x34\x33\x30\x64\x30\x34\x34\x37\x30\x33\x34\x35\x34\x36\x34\x35\x30\x64\x30\x66\x30\x39\x34\x37\x31\x34\x35\x38\x35\x64\x31\x36\x34\x36\x35\x63\x31\x30\x31\x31\x35\x65\x34\x37\x30\x31\x34\x34\x31\x30\x35\x30\x34\x31");
var td_0b = td_0b || {};
if (typeof td_0b.td_0H === [][[]] + "") {
    td_0b.td_0H = [];
}
function td_5m() {
    var td_R2 = 1;
    var td_Xb = td_R2 + ":" + td_0E + ":" + td_3r + ";" + td_1c;
    var td_aS = td_3r;
    var td_OI = {};
    var td_Rf = {};
    var td_gK = {};
    var td_y7 = false;
    var td_UM = false;
    var td_FK = null;
    var td_tq = null;
    var td_bV = false;
    var td_fX = td_p();
    var td_BZ = false;
    var td_jz = null;
    var td_Kr = 1;
    var td_BB = false;
    var td_TP = ((typeof (td_0b.tdz_3f93e63bec3b4e4192ea43aa3f137c56) !== "undefined" && typeof (td_0b.tdz_3f93e63bec3b4e4192ea43aa3f137c56.td_f) !== "undefined") ? (td_0b.tdz_3f93e63bec3b4e4192ea43aa3f137c56.td_f(0, 48)) : null);
    var td_Hy = ((typeof (td_0b.tdz_3f93e63bec3b4e4192ea43aa3f137c56) !== "undefined" && typeof (td_0b.tdz_3f93e63bec3b4e4192ea43aa3f137c56.td_f) !== "undefined") ? (td_0b.tdz_3f93e63bec3b4e4192ea43aa3f137c56.td_f(48, 2)) : null) + td_TP + ((typeof (td_0b.tdz_3f93e63bec3b4e4192ea43aa3f137c56) !== "undefined" && typeof (td_0b.tdz_3f93e63bec3b4e4192ea43aa3f137c56.td_f) !== "undefined") ? (td_0b.tdz_3f93e63bec3b4e4192ea43aa3f137c56.td_f(50, 5)) : null) + td_TP + "$";
    var td_ra = 4000;
    this.tryAgain = function() {
        return !td_bV;
    }
    ;
    function td_N6(td_U6) {
        retVal = [];
        for (var td_p1 in td_U6) {
            if (!td_U6.hasOwnProperty(td_p1)) {
                continue;
            }
            if (td_p1.match(td_Hy)) {
                retVal.push(td_p1);
            }
        }
        return retVal;
    }
    function td_DS(td_QI) {
        var td_wQ = td_g();
        var td_ou = "";
        var td_cL = td_N6(td_OI);
        var td_NH = td_N6(td_Rf);
        var td_vU = Object.keys(td_gK);
        if (td_cL.length > 0) {
            td_ou += ((typeof (td_0b.tdz_3f93e63bec3b4e4192ea43aa3f137c56) !== "undefined" && typeof (td_0b.tdz_3f93e63bec3b4e4192ea43aa3f137c56.td_f) !== "undefined") ? (td_0b.tdz_3f93e63bec3b4e4192ea43aa3f137c56.td_f(55, 5)) : null) + td_cL.join(",");
        }
        if (td_NH.length > 0) {
            td_ou += ((typeof (td_0b.tdz_3f93e63bec3b4e4192ea43aa3f137c56) !== "undefined" && typeof (td_0b.tdz_3f93e63bec3b4e4192ea43aa3f137c56.td_f) !== "undefined") ? (td_0b.tdz_3f93e63bec3b4e4192ea43aa3f137c56.td_f(60, 5)) : null) + td_NH.join(",");
        }
        if (td_vU.length > 0) {
            td_ou += ((typeof (td_0b.tdz_3f93e63bec3b4e4192ea43aa3f137c56) !== "undefined" && typeof (td_0b.tdz_3f93e63bec3b4e4192ea43aa3f137c56.td_f) !== "undefined") ? (td_0b.tdz_3f93e63bec3b4e4192ea43aa3f137c56.td_f(65, 5)) : null) + td_vU.join(",");
        }
        if (td_QI) {
            if (td_y7) {
                td_ou += ((typeof (td_0b.tdz_3f93e63bec3b4e4192ea43aa3f137c56) !== "undefined" && typeof (td_0b.tdz_3f93e63bec3b4e4192ea43aa3f137c56.td_f) !== "undefined") ? (td_0b.tdz_3f93e63bec3b4e4192ea43aa3f137c56.td_f(70, 25)) : null);
            }
            if (!td_UM) {
                td_ou += ((typeof (td_0b.tdz_3f93e63bec3b4e4192ea43aa3f137c56) !== "undefined" && typeof (td_0b.tdz_3f93e63bec3b4e4192ea43aa3f137c56.td_f) !== "undefined") ? (td_0b.tdz_3f93e63bec3b4e4192ea43aa3f137c56.td_f(95, 29)) : null);
            }
        }
        td_jz += td_g() - td_wQ;
        return td_ou;
    }
    function td_rb() {
        try {
            if (typeof m_rtcConnection !== [][[]] + "" && m_rtcConnection !== null && typeof m_rtcConnection.close !== [][[]] + "" && m_rtcConnection.close !== null) {
                m_rtcConnection.close();
            }
        } finally {
            if (typeof m_rtcConnection !== [][[]] + "" && m_rtcConnection !== null && typeof m_rtcConnection.onicecandidate !== [][[]] + "" && m_rtcConnection.onicecandidate !== null) {
                m_rtcConnection.onicecandidate = function() {}
                ;
                m_rtcConnection = null;
            }
        }
    }
    this.getFPParams = function() {
        if (!td_bV) {
            var td_gb = (td_p() - td_fX) > td_ra;
            if (td_gb || td_BZ) {
                td_rb();
                td_bV = true;
                return td_DS(td_gb);
            }
        }
        return "";
    }
    ;
    this.getRunTimeMS = function() {
        if (td_jz !== null) {
            return ((typeof (td_0b.tdz_3f93e63bec3b4e4192ea43aa3f137c56) !== "undefined" && typeof (td_0b.tdz_3f93e63bec3b4e4192ea43aa3f137c56.td_f) !== "undefined") ? (td_0b.tdz_3f93e63bec3b4e4192ea43aa3f137c56.td_f(124, 3)) : null) + td_0b.toFixed(td_jz, 2);
        }
        return "";
    }
    ;
    function td_ro(td_XK) {
        var td_Ur = td_XK.substr(td_XK.indexOf(((typeof (td_0b.tdz_3f93e63bec3b4e4192ea43aa3f137c56) !== "undefined" && typeof (td_0b.tdz_3f93e63bec3b4e4192ea43aa3f137c56.td_f) !== "undefined") ? (td_0b.tdz_3f93e63bec3b4e4192ea43aa3f137c56.td_f(127, 10)) : null)) + 10).split(" ");
        if (td_Ur === null || td_Ur.length <= 7 || td_Ur[4] === null) {
            return;
        }
        var td_RJ = td_Ur[4];
        var td_C1 = td_Ur[7];
        if (td_C1 === Number(481469).toString(30)) {
            td_UM = true;
            if (td_RJ.match(/^.*\.local$/)) {
                td_y7 = true;
                return;
            }
            if (td_RJ.match(td_Hy)) {
                td_OI[td_RJ] = true;
            } else {
                td_gK[td_RJ] = true;
            }
        } else {
            if (td_RJ.match(td_Hy)) {
                td_Rf[td_RJ] = true;
            } else {
                td_gK[td_RJ] = true;
            }
        }
    }
    function td_rd() {
        if (!Object || !Object.create || !Object.keys) {
            td_bV = true;
            return false;
        }
        if (typeof td_2M !== [][[]] + "" && td_2M !== null && td_2M !== 0) {
            td_BB = (td_2M & td_Kr) === td_Kr;
        }
        if (td_BB) {
            var td_iE = td_0Z.td_2k;
            var td_a0 = parseInt(td_0Z.td_6V);
            var td_t4 = td_0Z.td_3j;
            var td_Kn = td_0Z.td_5c;
            if (td_Kn === ((typeof (td_0b.tdz_3f93e63bec3b4e4192ea43aa3f137c56) !== "undefined" && typeof (td_0b.tdz_3f93e63bec3b4e4192ea43aa3f137c56.td_f) !== "undefined") ? (td_0b.tdz_3f93e63bec3b4e4192ea43aa3f137c56.td_f(137, 3)) : null) && td_iE === ((typeof (td_0b.tdz_3f93e63bec3b4e4192ea43aa3f137c56) !== "undefined" && typeof (td_0b.tdz_3f93e63bec3b4e4192ea43aa3f137c56.td_f) !== "undefined") ? (td_0b.tdz_3f93e63bec3b4e4192ea43aa3f137c56.td_f(140, 6)) : null) && td_a0 === 15 && !td_t4) {
                td_bV = true;
                return false;
            }
        }
        if (typeof window.RTCPeerConnection !== [][[]] + "" && window.RTCPeerConnection !== null) {
            td_FK = window.RTCPeerConnection;
        } else {
            if (typeof window.webkitRTCPeerConnection !== [][[]] + "" && window.webkitRTCPeerConnection !== null) {
                td_FK = window.webkitRTCPeerConnection;
            } else {
                if (typeof window.mozRTCPeerConnection !== [][[]] + "" && window.mozRTCPeerConnection !== null) {
                    td_FK = window.mozRTCPeerConnection;
                }
            }
        }
        if (!td_FK) {
            td_bV = true;
            return false;
        }
        return true;
    }
    function td_Ab(td_IV) {
        if (typeof td_IV.onicecandidate !== [][[]] + "") {
            td_IV.onicecandidate = function(td_y2) {
                if (td_y2.candidate) {
                    td_ro(td_y2.candidate.candidate);
                } else {}
            }
            ;
        }
        if (typeof td_IV.onicegatheringstatechange !== [][[]] + "") {
            td_IV.onicegatheringstatechange = function() {
                if (td_IV !== null && typeof td_IV.iceGatheringState !== [][[]] + "" && td_IV.iceGatheringState !== null) {
                    if (td_IV.iceGatheringState === ((typeof (td_0b.tdz_3f93e63bec3b4e4192ea43aa3f137c56) !== "undefined" && typeof (td_0b.tdz_3f93e63bec3b4e4192ea43aa3f137c56.td_f) !== "undefined") ? (td_0b.tdz_3f93e63bec3b4e4192ea43aa3f137c56.td_f(146, 8)) : null)) {
                        td_BZ = true;
                    }
                }
            }
            ;
        }
    }
    function td_NX(td_RW) {
        if (typeof td_RW.createDataChannel === [][[]] + "" || td_RW.createDataChannel === null) {
            td_bV = true;
            return;
        }
        td_RW.createDataChannel(Math.random().toString());
        var td_sj = function() {};
        var td_Y6 = function(td_xP) {
            td_RW.setLocalDescription(td_xP, function() {}, td_sj);
        };
        var td_YV = function() {};
        if (typeof Promise === [][[]] + "" || td_RW.createOffer.length > 0) {
            td_RW.createOffer(td_Y6, td_YV);
        } else {
            td_RW.createOffer().then(td_Y6, td_YV);
        }
    }
    this.setup = function() {
        var td_aP = td_g();
        if (!td_rd()) {
            return;
        }
        this.m_startWaitTime = td_p();
        try {
            var td_hk = ((typeof (td_0b.tdz_3f93e63bec3b4e4192ea43aa3f137c56) !== "undefined" && typeof (td_0b.tdz_3f93e63bec3b4e4192ea43aa3f137c56.td_f) !== "undefined") ? (td_0b.tdz_3f93e63bec3b4e4192ea43aa3f137c56.td_f(154, 5)) : null) + td_5u + ((typeof (td_0b.tdz_3f93e63bec3b4e4192ea43aa3f137c56) !== "undefined" && typeof (td_0b.tdz_3f93e63bec3b4e4192ea43aa3f137c56.td_f) !== "undefined") ? (td_0b.tdz_3f93e63bec3b4e4192ea43aa3f137c56.td_f(159, 11)) : null);
            var td_Op = {
                iceServers: [{
                    urls: td_hk + ((typeof (td_0b.tdz_3f93e63bec3b4e4192ea43aa3f137c56) !== "undefined" && typeof (td_0b.tdz_3f93e63bec3b4e4192ea43aa3f137c56.td_f) !== "undefined") ? (td_0b.tdz_3f93e63bec3b4e4192ea43aa3f137c56.td_f(170, 3)) : null),
                    username: td_Xb,
                    credential: td_aS
                }, {
                    urls: td_hk + ((typeof (td_0b.tdz_3f93e63bec3b4e4192ea43aa3f137c56) !== "undefined" && typeof (td_0b.tdz_3f93e63bec3b4e4192ea43aa3f137c56.td_f) !== "undefined") ? (td_0b.tdz_3f93e63bec3b4e4192ea43aa3f137c56.td_f(173, 3)) : null),
                    username: td_Xb,
                    credential: td_aS
                }]
            };
            td_tq = new td_FK(td_Op);
            td_Ab(td_tq);
            td_NX(td_tq);
        } catch (td_x) {
            return;
        }
        td_jz = td_g() - td_aP;
    }
    ;
}
td_0b.td_0H.push(function() {
    td_2M = 1;
});
var td_0b = td_0b || {};
td_0b.toNumber = function(td_g) {
    if (typeof td_g === [][[]] + "" || td_g === null || typeof Number === [][[]] + "" || td_6f === null || td_2z === null) {
        return td_g;
    }
    try {
        var td_a = Number(td_g);
        if (!td_6f(td_a) && td_2z(td_a)) {
            return td_a;
        }
    } catch (td_l) {}
    return td_g;
}
;
td_0b.toFixed = function(td_w, td_u) {
    if (typeof td_w === [][[]] + "" || td_w === null || td_5B === null || td_6f === null || td_2z === null) {
        return 0;
    }
    try {
        var td_p = td_5B(td_w);
        if (typeof td_p !== [][[]] + "" && typeof td_p !== null && typeof td_p.toFixed !== [][[]] + "") {
            if (!td_6f(td_p) && td_2z(td_p)) {
                return td_5B(td_p.toFixed(td_u));
            } else {
                return 0;
            }
        }
    } catch (td_k) {}
    var td_L = td_w.toString();
    var td_s = td_L.lastIndexOf(".");
    if (td_s !== -1 && td_L.length > (td_s + (td_u + 1))) {
        var td_C = td_L.substr(0, (td_s + (td_u + 1)));
        return td_0b.toNumber(td_C);
    }
    return td_0b.toNumber(td_w);
}
;
td_0b.toFixedDecimal2 = function(td_X) {
    if (typeof td_X === [][[]] + "" || td_X === null) {
        return 0;
    }
    var td_u = 100;
    return Math.round(td_X * td_u) / td_u;
}
;
td_0b.parseInt = function(td_J) {
    if (td_6h === null || td_6f === null || td_2z === null) {
        return 0;
    }
    var td_Q;
    try {
        td_Q = td_6h(td_J);
    } catch (td_s) {
        return 0;
    }
    if (typeof td_Q === [][[]] + "" || td_Q === null || td_6f(td_Q) || !td_2z(td_Q)) {
        return 0;
    }
    return td_Q;
}
;
td_0b.tdz_e7c6783680264a02b48c2aabb66be46f = new td_0b.td_6D("\x65\x37\x63\x36\x37\x38\x33\x36\x38\x30\x32\x36\x34\x61\x30\x32\x62\x34\x38\x63\x32\x61\x61\x62\x62\x36\x36\x62\x65\x34\x36\x66\x30\x61\x35\x35\x30\x39\x35\x33\x35\x34\x34\x63");
var td_0b = td_0b || {};
var td_3q = null;
function td_4H() {
    var td_LN = null;
    var td_Yb = false;
    function td_rl() {
        var td_Do = 3;
        var td_Zo = {};
        var td_oo = {};
        var td_wL = false;
        var td_wa = false;
        var td_MV = 0;
        var td_JS = 0;
        var td_ts = 1;
        var td_jZ = 2;
        var td_cn = 0;
        var td_bD = 1;
        var td_OY = 0;
        var td_uk = 1;
        var td_au = 2;
        var td_td = 3;
        var td_tN = 4;
        var td_Xc = 5;
        var td_le = 6;
        var td_wz = 128;
        var td_Id = (typeof "".substring !== [][[]] + "" && "".substring !== null);
        var td_na = (typeof "".trim !== [][[]] + "" && "".trim !== null);
        this.getVersion = function() {
            return td_Do;
        }
        ;
        this.getIdRef = function() {
            return R_ID_REF;
        }
        ;
        this.getUsedRef = function() {
            return td_JS;
        }
        ;
        this.getFillRef = function() {
            return td_jZ;
        }
        ;
        this.getUnsetFillType = function() {
            return td_OY;
        }
        ;
        this.getKeypressFillType = function() {
            return td_uk;
        }
        ;
        this.getPointerpressFillType = function() {
            return td_au;
        }
        ;
        this.getPasteFillType = function() {
            return td_td;
        }
        ;
        this.getAutofilFillType = function() {
            return td_tN;
        }
        ;
        this.getAutocompleteFillType = function() {
            return td_Xc;
        }
        ;
        function td_Ys(td_up, td_qj, td_Bi) {
            var td_XI = false;
            var td_W7 = [];
            if (typeof td_up !== [][[]] + "" && td_up !== null) {
                td_XI = td_up;
            }
            var td_st = td_OY;
            if (typeof td_Bi !== [][[]] + "" && td_Bi !== null) {
                td_st = td_Bi;
            }
            td_W7[td_JS] = td_XI;
            td_W7[td_jZ] = td_st;
            td_W7[td_ts] = td_qj;
            return td_W7;
        }
        function td_sx(td_iA, td_zJ, td_qh, td_R7) {
            if (typeof td_R7 === [][[]] + "" || td_R7 === null) {
                return [td_iA, td_zJ, td_qh, td_R7];
            }
            return [td_iA, td_zJ, td_qh, td_Yx(td_R7)];
        }
        function td_cX(td_x) {
            if (td_LN === null) {
                return false;
            }
            return td_LN.checkEventTargetIgnore(td_x);
        }
        function td_iJ(td_R7, td_xu) {
            if (typeof td_xu === [][[]] + "" || td_xu === null || td_xu === "") {
                return false;
            }
            if (typeof td_Zo[td_R7][R_ID_REF] !== [][[]] + "" && td_Zo[td_R7][R_ID_REF] !== td_xu) {
                td_Zo[td_R7][R_ID_REF] = td_xu;
                return true;
            }
            return false;
        }
        function td_hh(td_fL, td_Gh) {
            if (typeof td_Gh === [][[]] + "" || td_Gh === null || td_Gh === [][[]] + "") {
                return false;
            }
            if (typeof td_Zo[td_fL][td_jZ] !== [][[]] + "" && td_Zo[td_fL][td_jZ] !== td_Gh) {
                td_Zo[td_fL][td_jZ] = td_Gh;
                return true;
            }
            return false;
        }
        function td_rH(td_O7, td_EH) {
            if (typeof td_O7 === [][[]] + "" || td_O7 === null) {
                return false;
            }
            if (typeof td_EH === [][[]] + "" || td_EH === null) {
                return false;
            }
            if (typeof td_Zo[td_O7][td_JS] !== [][[]] + "" && td_Zo[td_O7][td_JS] !== td_EH) {
                td_Zo[td_O7][td_JS] = td_EH;
                return true;
            }
            return false;
        }
        function td_gP(td_NE, td_oh, td_Hb) {
            if (typeof td_oh === [][[]] + "" || td_oh === null) {
                return false;
            }
            if (typeof td_oo[td_NE] === [][[]] + "") {
                return false;
            }
            var td_me = td_Yx(td_oh);
            var td_Rn = td_oo[td_NE][td_bD];
            if (td_Rn === td_me) {
                return false;
            }
            td_oo[td_NE][td_bD] = td_me;
            if (td_Hb === null && td_Zo[td_NE][td_JS] === false || td_Zo[td_NE][td_jZ] === td_OY) {
                td_Zo[td_NE][td_jZ] = td_tN;
            } else {
                if (td_Hb === null && td_Zo[td_NE][td_JS] === true && td_Zo[td_NE][td_jZ] === td_OY && td_Rn !== null && td_Rn !== "" && td_Rn !== 0) {
                    td_Zo[td_NE][td_jZ] = td_le;
                }
            }
            return true;
        }
        function td_no(td_MB, td_tJ, td_JN, td_zI) {
            var td_Ed = td_rH(td_MB, td_tJ);
            var td_vL = td_gP(td_MB, td_zI, td_JN);
            var td_XO = td_hh(td_MB, td_JN);
            return (td_Ed || td_vL || td_XO);
        }
        function td_KE(td_EQ, td_g7, td_Lg, td_lG, td_t2, td_Hh, td_o1) {
            td_Zo[td_EQ] = td_Ys(td_t2, td_lG, td_Hh);
            td_oo[td_EQ] = td_sx(td_lG, td_g7, td_Lg, td_o1);
            td_MV += 1;
        }
        function td_Yx(td_xK) {
            var td_oT = 0
              , td_oB = td_xK.length
              , td_dV = 0;
            if (td_oB > 0) {
                while (td_dV < td_oB) {
                    td_oT = (td_oT << 5) - td_oT + td_xK.charCodeAt(td_dV++) | 0;
                }
            }
            return td_oT;
        }
        function td_Yd(td_fc) {
            if (typeof td_fc === [][[]] + "" || td_fc === null) {
                return null;
            }
            if (!td_Id) {
                return td_fc;
            }
            if (!td_na) {
                return td_fc.substring(0, td_wz);
            }
            return td_fc.substring(0, td_wz).trim();
        }
        function td_Ko(td_kW, td_Nf, td_Wk) {
            return td_Yd(((td_Nf) ? td_Nf : td_Wk));
        }
        this.isPending = function() {
            return td_wa;
        }
        ;
        this.resetPending = function() {
            td_wa = false;
        }
        ;
        this.makeKey = function(td_km, td_NW, td_mK) {
            return td_Ko(td_km, td_NW, td_mK);
        }
        ;
        this.exists = function(td_Yu, td_Ya, td_n9) {
            var td_gH = td_Ko(td_Yu, td_Ya, td_n9);
            return (typeof td_Zo[td_gH] !== [][[]] + "" && td_Zo[td_gH] !== null);
        }
        ;
        this.setAttr = function(td_rn, td_ib) {
            if (td_wL === true || typeof td_rn === [][[]] + "" || typeof td_rn === null || typeof td_ib === [][[]] + "" || typeof td_ib === null) {
                return;
            }
            td_Zo[td_rn] = td_ib;
        }
        ;
        this.set = function(td_Wl, td_xJ, td_tn, td_fJ, td_Oa, td_ib) {
            if (td_wL === true) {
                return;
            }
            if (td_Wl === null || (td_xJ === null && td_tn === null)) {
                return;
            }
            if (td_cX(td_Wl, td_xJ, td_tn)) {
                return;
            }
            var td_Fk = td_Ko(td_Wl, td_tn, td_xJ);
            if (typeof td_Zo[td_Fk] !== [][[]] + "" && td_Zo[td_Fk] !== null) {
                if (td_no(td_Fk, td_fJ, td_Oa, td_ib)) {
                    td_wa = true;
                }
                return;
            }
            td_KE(td_Fk, td_tn, td_xJ, td_Wl, td_fJ, td_Oa, td_ib);
            td_wa = true;
        }
        ;
        this.getJsonData = function() {
            if (typeof JSON !== [][[]] + "" && typeof JSON.stringify !== [][[]] + "") {
                return JSON.stringify(td_Zo);
            }
            return "";
        }
        ;
        this.getJsontrackingData = function() {
            if (typeof JSON !== [][[]] + "" && typeof JSON.stringify !== [][[]] + "") {
                return JSON.stringify(td_oo);
            }
            return "";
        }
        ;
        this.length = function() {
            return td_MV;
        }
        ;
    }
    function td_ky() {
        if (typeof td_5Z !== [][[]] + "" && td_5Z !== null) {
            td_LN = td_5Z();
            if (typeof td_LN !== ((typeof (td_0b.tdz_e7c6783680264a02b48c2aabb66be46f) !== "undefined" && typeof (td_0b.tdz_e7c6783680264a02b48c2aabb66be46f.td_f) !== "undefined") ? (td_0b.tdz_e7c6783680264a02b48c2aabb66be46f.td_f(0, 6)) : null) || td_LN === null) {
                td_LN = null;
            } else {
                td_LN = td_LN[3];
            }
        } else {}
    }
    if (typeof td_3q !== [][[]] + "" && td_3q === null) {
        td_3q = new td_rl();
        td_ky();
    }
}
var td_0b = td_0b || {};
td_0b.td_1C = function() {}
;
td_0b.hasDebug = false;
td_0b.trace = function() {}
;
td_0b.hasTrace = false;
var td_0b = td_0b || {};
if (typeof td_0b.td_0H === [][[]] + "") {
    td_0b.td_0H = [];
}
var td_5Q, td_4F, td_6I, td_4P, td_5k, td_3s, td_3B, td_3r, td_0E, td_4e, td_Vc = [], td_0a, td_6y, td_1U, td_4G, td_3W, td_0u, td_6G = [], td_1M, td_0e, td_2s, td_4V, td_1S, td_5t, td_2N, td_3p, td_2p, td_1O, td_1o, td_2E, td_6q, td_6g, td_0q, td_5H, td_5u, td_1c, td_6x, td_3w, td_0p = null, td_EX;
if (typeof navigator !== [][[]] + "") {
    td_Vc = navigator.mimeTypes;
}
td_0b.td_0H.push(function() {
    var td_6m = new td_0b.td_6D("6a86eabd1e934428b08f5c4691758f225E154C46165B4D4B594B565D585D5C5D4F5D5D12470A4C185754431A73517E07032A097F012D3B05742D5B6A0B03560051550152060152570F550700085B70515C24577B30593D52475253704300460B05740A09592C6C650E45507A575E5F5C7F125E7E0D32381C462C540A4C7D7A0A1B664B2C5E15444C7653460473255F6A0224427D00565B3C45366142034E4B7718054927443656017C7B03796C5259675D25724430230E55553A551E70195B7E0E1D0A20475A7E4601077C770D56786255097B5724335B127456406363575A7656434C3E071366725F7A5059552D7C5C7D3E015700203D5C7C3C706C0406610D3B7C70237E3700625545594D5C32744A4C595C5B332951085B0D0E06415A474D517E50124113470C161E401848145D545F0D5158024F010D530617505B591D5A0F7C7B015E1A03427E670459522D760D0000590E54055353095D5F0A0403010D5F5B61136F217670485E545B5731716603367B662933080D031C0C5806714376547C75370639536C6D5D7B4F0856744750027B530719031D65200A705F6B68013B464005501A6D516E054F0754565406473B525E2216342258306E694E51045D38580E5F5D5772444D60566D5A056843430B555710361501482F400A6C550B0F0D0776376D020262636E54770F536774430D0A7355512511750351654360586A5563490D5D1740464A0B181A4F4B42405907515A0C0F054A520C5B501A575D554D5C4D57770C6C010A5D00057B075145435E010E5000525D55075D520657060F53560539581457630E4B0440520546070530506E281807141C087349074D7C420F69742E180C4372576160626F0C6B5F073E5B583F2D3322690471540C7F6B76571D0E3E5C1A6E6F484B42610B3942437908716C3C3B570A7954774B7C6674793549612743277B62686660436E01075367366772122F521D5E06585E506775560C01752D745B064E535F0647412740045F207D512F101B0F560D5A1E5D6443090F01672E572273716E505C7F5C240B6A752A5C4E0D310A077255717963510A7C05655D0F7B257C064E531A7359200B5A7F57750E0B0E0A1045154A091B1B015C0809530F041B475B4A595C584A0F5F4A4C02550511560F115E115C5803074642544A5F545E560D010E0606540003540152030E5557581105524B5D1D55551C570C5C5108504E59534D435E4D1608574619327A0200180D2D551754430C425F542F0F0D0301520D030002030D5D5351010058056322091A06612A727A636E60690E655B07675A767D5706017B4E017078060E6A741C4C04237F085D476E470353354876035B3578067D60010479321F7F0E3869791002163454136F7107795C76260349095E2D707B70031A760813650B05524A4F3C350F16482A54555062686D5064790C0402196269097E050C2E467441560D7812271B2A7E170A580673655A037D09236F297D5D01077F5C5E55777E7A2B695B321B1A0C451149400E1B1D4F4F404A09530A585F575619565104511C550E5519510E55365D0C4C5142567349300115170A0504005C0700075E55575657500154035C2F2676087F060C4350711B785453442D445B086558596C0F767A6F1259552D0E0F006014097B515C5D60370250105709476E7152534159367D594410605F23510E095228735F07720A705A470F5F632A7E615E5E680D4F325707545955060B3B1A35470B0D556D535C0A3453093E05507F466E01705A7F0C73734F224F5D2A3234497E000851417A710D286560085D2D407F69617D60742F7F5605585C711220562D681008694C5E4A552B76743757015761086B07760D0D74750F19775155332B316E355A0B40056B4E54040C344313787801565F414C164108194E4F1B15130D025809505D531A5151005316055A0E1B4E51777D735004795000576F021325515B03570A005100535B560159050C510D0E0452475D723143506217017201181055701C68047D596562050274205D245900536652607B055D7F750C415426222F5C06375B074E5D4552337E54557D4E4663720407046F3E044A41236B7D22332421613C0B5D447766591575604B760D6773634B7B6F79350747035651013338121E46346A656B4D026C07687C2245125C61505663787D075E7642280E751037093B4102436A5507405E365F0856424E4D526C02556C7407516545297A515C261A117E53777A73796B5D50694A5672095D5056747305420E6A6447587F675523272059267D075C404648110A17495D4D5B5855585950150B5746440840180B04164B680F7C0A6362027E1A086E205002646E060551010D5105050F02590700545354035857545C7B466252035D2B633A70607B7246590822656A5D237D7D110F242C67227E55675A540E2D7A401E040C05425762044241087156671479782023335774295275457A63490F54592301056467580568734C1254795C0C7260132525555C5177606E590B0B164A490A7B076063146B795A4E020161502E510E124C34175017080B4557644A20030B0156210677406B55414D0A05755D0755510251332B4000567E5D467C6E10046E544621565B7C5943414815081D190916590B0D0B0A5448545640465B404C5E5D121A15767D0176026F6701076262055F540D5E5355060300500055055B00035B03075709584E5D6E0C775E7C447C335A4057521113790E6B056D641F68256F615102397B585B55606A622D6860051742015C25120A0911700161464A6F2E7D6105563719725805555A0F12757560534D5953042B207B144B4065025B6F0C7A70210709040454680E7A5E3C434407520C532729355C492A14525170607709526B5554130106615A70654014615F71086A672D2B03297C1072437D78535010540D144C19575E75545F5D4C1242410C4E17414811100B570C555A5A531C5B0B525B48560C59194E757447001205475C536863103837150E000A020052025C07055904060205020F0C7C456B155B6646527B013712242C730B7B555E515A74505D595E5E397D610B587E7C6E3051441B250A75032D345002294A587300676C0E667E25790D63525E4445675C57045155387B045C552A28612C0F47574006500363550870155F6C5F5D745D4124585D1B057A63120A0C50480C547478435500265E56504631635058677C5A4B2D00590E3150610F0D5B35503A7A030402575752717A116C0B404249420D1A17111F42440E5E5F09080C031F065051571A51570F1F5E161A00585358431945560101565C58535F541950050703095504021F0157515D4B0156510314500305004B00010E050A0F5158070505530004030303595A555E55510102550B0843015D500A0707545D5054515A50000101520104015D53055B05505103045855566A095E050200530C055552535304510C00040402085204085605510707090207050856020606510804565057570155090304000208525159485A0D585F57541A585D12405B4E4F56531115101154540C0204040208530508560552");
    td_0b.td_6U = (td_6m) ? td_6m.td_f(2516, 1) : null;
    td_5v = (td_6m) ? td_6m.td_f(2471, 6) : null;
    td_3b = (td_6m) ? td_6m.td_f(2517, 1) : null;
    td_5k = (td_6m) ? td_6m.td_f(1338, 274) : null;
    td_1F = (td_6m) ? td_6m.td_f(2441, 1) : null;
    td_4P = (td_6m) ? td_6m.td_f(0, 274) : null;
    td_3r = (td_6m) ? td_6m.td_f(2342, 36) : null;
    td_0E = (td_6m) ? td_6m.td_f(2334, 8) : null;
    td_3J = (td_6m) ? td_6m.td_f(2477, 4) : null;
    td_0q = (td_6m) ? td_6m.td_f(2512, 4) : null;
    td_1r = (td_6m) ? td_6m.td_f(1612, 237) : null;
    td_4e = (td_6m) ? td_6m.td_f(2395, 46) : null;
    td_3v = (td_6m) ? td_6m.td_f(2453, 2) : null;
    td_1M = (td_6m) ? td_6m.td_f(2442, 1) : null;
    td_2N = (td_6m) ? td_6m.td_f(2455, 2) : null;
    td_2j = (td_6m) ? td_6m.td_f(774, 289) : null;
    td_2p = (td_6m) ? td_6m.td_f(2463, 4) : null;
    td_4m = (td_6m) ? td_6m.td_f(500, 274) : null;
    td_3p = (td_6m) ? td_6m.td_f(2457, 6) : null;
    td_1c = (td_6m) ? td_6m.td_f(2378, 16) : null;
    td_2W = (td_6m) ? td_6m.td_f(2469, 2) : null;
    td_6r = (td_6m) ? td_6m.td_f(2467, 2) : null;
    td_6g = (td_6m) ? td_6m.td_f(2507, 5) : null;
    td_5Q = (td_6m) ? td_6m.td_f(2075, 218) : null;
    td_6q = (td_6m) ? td_6m.td_f(2505, 2) : null;
    td_3k = (td_6m) ? td_6m.td_f(2501, 4) : null;
    td_1I = (td_6m) ? td_6m.td_f(274, 226) : null;
    td_6G = ['REF:63333', 'VNC:5900', 'VNC:5901', 'VNC:5902', 'VNC:5903', 'RDP:3389', 'ARO:5950', 'AMY:5931', 'TV0:5939', 'TV1:6039', 'TV2:5944', 'TV2:6040', 'TV3:5938', 'APC:5279', 'ANY:7070', 'ULV:2112'];
    td_3C = (td_6m) ? td_6m.td_f(1849, 226) : null;
    td_2s = (td_6m) ? td_6m.td_f(2449, 4) : null;
    td_5u = (td_6m) ? td_6m.td_f(2481, 20) : null;
    td_0e = (td_6m) ? td_6m.td_f(2443, 6) : null;
    td_4F = (td_6m) ? td_6m.td_f(2293, 41) : null;
    td_4D = (td_6m) ? td_6m.td_f(1063, 275) : null;
    td_2u = (td_6m) ? td_6m.td_f(2394, 1) : null;
});
td_0b.tdz_18ab4332cd404dbb8c697834f046c807 = new td_0b.td_6D("\x31\x38\x61\x62\x34\x33\x33\x32\x63\x64\x34\x30\x34\x64\x62\x62\x38\x63\x36\x39\x37\x38\x33\x34\x66\x30\x34\x36\x63\x38\x30\x37\x31\x37\x34\x38\x30\x63\x35\x66\x34\x64\x35\x36\x34\x30\x35\x63\x30\x63\x31\x34\x35\x39\x30\x61\x36\x30\x32\x31\x33\x31\x33\x36\x37\x63\x32\x32\x36\x32\x37\x38\x36\x33\x37\x64\x36\x30\x36\x30\x32\x64\x37\x35\x36\x64\x37\x35\x30\x62\x34\x61\x35\x66\x35\x61\x35\x34\x37\x39\x30\x66\x30\x36\x34\x36\x35\x63\x35\x61\x35\x36\x30\x61\x33\x34\x35\x35\x35\x34\x35\x64\x33\x34\x30\x61\x30\x64\x35\x36\x30\x36\x37\x39\x34\x39\x35\x32\x34\x61\x35\x32\x37\x31\x30\x32\x35\x37\x35\x31\x37\x30\x30\x61\x34\x61\x35\x35\x35\x31\x35\x65\x34\x30\x31\x32\x30\x37\x34\x36\x34\x35\x35\x61\x35\x31\x30\x36\x33\x33\x35\x62\x34\x32\x35\x66\x30\x31\x31\x30\x32\x37\x34\x30\x31\x33\x35\x61\x35\x36\x34\x35\x35\x64\x34\x31\x36\x37\x30\x37\x35\x36\x35\x35\x34\x34\x30\x61\x30\x64\x35\x35\x35\x31\x30\x34\x30\x65\x30\x35\x30\x37\x35\x31\x30\x36\x30\x34\x30\x35\x30\x32\x30\x32");
var td_0b = td_0b || {};
function td_1b() {
    var td_Ge = null;
    var td_CR;
    var td_hP = td_0Z.td_2k;
    var td_X1 = parseInt(td_0Z.td_6V);
    var td_Rq = td_0Z.td_3j;
    var td_UO = td_0Z.td_5c;
    var td_HR = null;
    this.tryAgain = function() {
        return td_Ge === null;
    }
    ;
    this.getFPParams = function() {
        if (td_Ge === null) {
            return null;
        }
        var td_Ol = ((typeof (td_0b.tdz_18ab4332cd404dbb8c697834f046c807) !== "undefined" && typeof (td_0b.tdz_18ab4332cd404dbb8c697834f046c807.td_f) !== "undefined") ? (td_0b.tdz_18ab4332cd404dbb8c697834f046c807.td_f(0, 4)) : null);
        if (typeof td_Ge === [][[]] + "") {
            if (typeof td_CR !== [][[]] + "" && td_CR.readyState === Number(218714).toString(25)) {
                td_Ge = td_CR.result ? false : true;
            } else {
                return null;
            }
        }
        td_Ol += td_Ge ? ((typeof (td_0b.tdz_18ab4332cd404dbb8c697834f046c807) !== "undefined" && typeof (td_0b.tdz_18ab4332cd404dbb8c697834f046c807.td_f) !== "undefined") ? (td_0b.tdz_18ab4332cd404dbb8c697834f046c807.td_f(4, 3)) : null) : ((typeof (td_0b.tdz_18ab4332cd404dbb8c697834f046c807) !== "undefined" && typeof (td_0b.tdz_18ab4332cd404dbb8c697834f046c807.td_f) !== "undefined") ? (td_0b.tdz_18ab4332cd404dbb8c697834f046c807.td_f(7, 2)) : null);
        return td_Ol;
    }
    ;
    this.getRunTimeMS = function() {
        if (td_HR !== null) {
            return ((typeof (td_0b.tdz_18ab4332cd404dbb8c697834f046c807) !== "undefined" && typeof (td_0b.tdz_18ab4332cd404dbb8c697834f046c807.td_f) !== "undefined") ? (td_0b.tdz_18ab4332cd404dbb8c697834f046c807.td_f(9, 3)) : null) + td_0b.toFixed(td_HR, 2);
        }
        return "";
    }
    ;
    function td_Sf() {
        if (navigator && typeof navigator.storage !== [][[]] + "" && typeof navigator.storage.estimate !== [][[]] + "") {
            navigator.storage.estimate().then(function(td_oK) {
                td_Ge = (td_oK.quota < 120000000);
            });
        } else {
            td_Ge = false;
        }
    }
    function td_qj() {
        function td_vL(td_ts) {}
        navigator.webkitTemporaryStorage.requestQuota(120000000, function(td_Li) {
            td_Ge = (td_Li < 120000000);
        }, td_vL);
    }
    function td_CQ() {
        if (window.openDatabase) {
            try {
                var td_n2 = window.openDatabase(null, null, null, null);
            } catch (td_x) {
                td_Ge = true;
            }
        } else {}
    }
    function td_Y1() {
        if (!window.localStorage) {
            return;
        }
        var td_wn = 0;
        try {
            var td_e2 = "";
            for (; td_wn < 110000; ++td_wn) {
                td_e2 += ((typeof (td_0b.tdz_18ab4332cd404dbb8c697834f046c807) !== "undefined" && typeof (td_0b.tdz_18ab4332cd404dbb8c697834f046c807.td_f) !== "undefined") ? (td_0b.tdz_18ab4332cd404dbb8c697834f046c807.td_f(12, 8)) : null);
            }
            td_wn = 0;
            for (; td_wn < 5; ++td_wn) {
                window.localStorage.setItem(((typeof (td_0b.tdz_18ab4332cd404dbb8c697834f046c807) !== "undefined" && typeof (td_0b.tdz_18ab4332cd404dbb8c697834f046c807.td_f) !== "undefined") ? (td_0b.tdz_18ab4332cd404dbb8c697834f046c807.td_f(20, 7)) : null) + td_wn, td_e2);
            }
            td_Ge = true;
            for (; td_wn > 0; --td_wn) {
                window.localStorage.removeItem(((typeof (td_0b.tdz_18ab4332cd404dbb8c697834f046c807) !== "undefined" && typeof (td_0b.tdz_18ab4332cd404dbb8c697834f046c807.td_f) !== "undefined") ? (td_0b.tdz_18ab4332cd404dbb8c697834f046c807.td_f(20, 7)) : null) + td_wn);
            }
        } catch (td_eV) {
            if (typeof td_eV.code !== [][[]] + "" && td_eV.code === DOMException.QUOTA_EXCEEDED_ERR) {}
            try {
                for (; td_wn > 0; --td_wn) {
                    window.localStorage.removeItem(((typeof (td_0b.tdz_18ab4332cd404dbb8c697834f046c807) !== "undefined" && typeof (td_0b.tdz_18ab4332cd404dbb8c697834f046c807.td_f) !== "undefined") ? (td_0b.tdz_18ab4332cd404dbb8c697834f046c807.td_f(20, 7)) : null) + td_wn);
                }
            } catch (td_eV) {}
        }
    }
    function td_kz() {
        if (td_hP === ((typeof (td_0b.tdz_18ab4332cd404dbb8c697834f046c807) !== "undefined" && typeof (td_0b.tdz_18ab4332cd404dbb8c697834f046c807.td_f) !== "undefined") ? (td_0b.tdz_18ab4332cd404dbb8c697834f046c807.td_f(27, 6)) : null) && td_X1 >= 76) {
            if (!td_Rq) {
                td_Sf();
            } else {
                switch (td_UO) {
                case ((typeof (td_0b.tdz_18ab4332cd404dbb8c697834f046c807) !== "undefined" && typeof (td_0b.tdz_18ab4332cd404dbb8c697834f046c807.td_f) !== "undefined") ? (td_0b.tdz_18ab4332cd404dbb8c697834f046c807.td_f(33, 7)) : null):
                    td_qj();
                    break;
                case ((typeof (td_0b.tdz_18ab4332cd404dbb8c697834f046c807) !== "undefined" && typeof (td_0b.tdz_18ab4332cd404dbb8c697834f046c807.td_f) !== "undefined") ? (td_0b.tdz_18ab4332cd404dbb8c697834f046c807.td_f(40, 4)) : null):
                case ((typeof (td_0b.tdz_18ab4332cd404dbb8c697834f046c807) !== "undefined" && typeof (td_0b.tdz_18ab4332cd404dbb8c697834f046c807.td_f) !== "undefined") ? (td_0b.tdz_18ab4332cd404dbb8c697834f046c807.td_f(44, 6)) : null):
                    td_CQ();
                    if (td_Ge === null) {
                        td_Ge = false;
                    }
                    break;
                default:
                    td_Ge = false;
                    break;
                }
            }
        } else {
            if (td_hP === ((typeof (td_0b.tdz_18ab4332cd404dbb8c697834f046c807) !== "undefined" && typeof (td_0b.tdz_18ab4332cd404dbb8c697834f046c807.td_f) !== "undefined") ? (td_0b.tdz_18ab4332cd404dbb8c697834f046c807.td_f(50, 5)) : null) || td_hP === ((typeof (td_0b.tdz_18ab4332cd404dbb8c697834f046c807) !== "undefined" && typeof (td_0b.tdz_18ab4332cd404dbb8c697834f046c807.td_f) !== "undefined") ? (td_0b.tdz_18ab4332cd404dbb8c697834f046c807.td_f(27, 6)) : null) || td_hP === ((typeof (td_0b.tdz_18ab4332cd404dbb8c697834f046c807) !== "undefined" && typeof (td_0b.tdz_18ab4332cd404dbb8c697834f046c807.td_f) !== "undefined") ? (td_0b.tdz_18ab4332cd404dbb8c697834f046c807.td_f(55, 4)) : null)) {
                if (window.webkitRequestFileSystem) {
                    window.webkitRequestFileSystem(window.TEMPORARY, 1, function() {
                        td_Ge = false;
                    }, function(td_x) {
                        td_Ge = true;
                    });
                } else {
                    if (window.openDatabase) {
                        td_CQ();
                        if (td_Ge === null) {
                            td_Ge = false;
                        }
                    }
                }
            } else {
                if (td_hP === ((typeof (td_0b.tdz_18ab4332cd404dbb8c697834f046c807) !== "undefined" && typeof (td_0b.tdz_18ab4332cd404dbb8c697834f046c807.td_f) !== "undefined") ? (td_0b.tdz_18ab4332cd404dbb8c697834f046c807.td_f(59, 7)) : null) && window.indexedDB) {
                    if (typeof td_CR === [][[]] + "") {
                        try {
                            td_CR = window.indexedDB.open(Number(796469).toString(30));
                        } catch (td_x) {
                            td_Ge = true;
                        }
                    }
                    if (td_Ge === null && td_X1 > 44 && typeof self.isSecureContext !== [][[]] + "" && self.isSecureContext && typeof navigator !== [][[]] + "" && !(((typeof (td_0b.tdz_18ab4332cd404dbb8c697834f046c807) !== "undefined" && typeof (td_0b.tdz_18ab4332cd404dbb8c697834f046c807.td_f) !== "undefined") ? (td_0b.tdz_18ab4332cd404dbb8c697834f046c807.td_f(66, 13)) : null)in navigator)) {
                        td_Ge = true;
                    }
                    if (td_Ge === null) {
                        td_Ge = false;
                    }
                } else {
                    if (td_hP === ((typeof (td_0b.tdz_18ab4332cd404dbb8c697834f046c807) !== "undefined" && typeof (td_0b.tdz_18ab4332cd404dbb8c697834f046c807.td_f) !== "undefined") ? (td_0b.tdz_18ab4332cd404dbb8c697834f046c807.td_f(79, 8)) : null)) {
                        if (td_X1 < 10) {
                            td_Ge = false;
                            td_HR = td_g() - td_Z9;
                            return;
                        }
                        try {
                            if (!window.indexedDB) {
                                td_Ge = true;
                                td_HR = td_g() - td_Z9;
                                return;
                            }
                            td_Ge = false;
                        } catch (td_x) {
                            td_Ge = true;
                        }
                    } else {
                        if (td_hP === ((typeof (td_0b.tdz_18ab4332cd404dbb8c697834f046c807) !== "undefined" && typeof (td_0b.tdz_18ab4332cd404dbb8c697834f046c807.td_f) !== "undefined") ? (td_0b.tdz_18ab4332cd404dbb8c697834f046c807.td_f(87, 6)) : null)) {
                            if (td_Rq === true && td_X1 < 12 || td_X1 >= 11.1 && td_X1 < 12) {
                                td_CQ();
                            } else {
                                if ((td_Ge === null || td_Ge === false) && td_X1 >= 12 && td_X1 < 14) {
                                    td_Y1();
                                }
                            }
                            if (td_Ge === null || td_Ge === false && window.localStorage) {
                                try {
                                    window.localStorage.setItem(((typeof (td_0b.tdz_18ab4332cd404dbb8c697834f046c807) !== "undefined" && typeof (td_0b.tdz_18ab4332cd404dbb8c697834f046c807.td_f) !== "undefined") ? (td_0b.tdz_18ab4332cd404dbb8c697834f046c807.td_f(93, 13)) : null), 1);
                                } catch (td_x) {
                                    td_Ge = true;
                                }
                                window.localStorage.removeItem(((typeof (td_0b.tdz_18ab4332cd404dbb8c697834f046c807) !== "undefined" && typeof (td_0b.tdz_18ab4332cd404dbb8c697834f046c807.td_f) !== "undefined") ? (td_0b.tdz_18ab4332cd404dbb8c697834f046c807.td_f(93, 13)) : null));
                            }
                            if (td_Ge === null) {
                                td_Ge = false;
                            }
                        }
                    }
                }
            }
        }
    }
    this.setup = function() {
        var td_Z9 = td_g();
        setTimeout(function() {
            td_kz();
            td_HR = td_g() - td_Z9;
        }, 1);
    }
    ;
}
td_2n();
