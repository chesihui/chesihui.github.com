debugger;
document.write("<scr" + "ipt type='text/javascript' charset='gbk' src='" + "ad.js" + "'></scr" + "ipt>");
/*var alimama_source = "1";
var alimama_jstype = "NORMAL";
var alimama_config = [6, 6, 20, 10000, 2, 1, "sc1", "mc1", "http://z.alimama.com/alimama.php", "http://z.alimama.com/alimamal.php", 4973, 0.9, 10, 10, [4, 8, 12],
    [12, 14, 16], "tc1", 20, "tksc1", 10, "0-0-0", "http://t.alimama.com/alimama.php", "http://t.alimama.com/alimamal.php"];
function alimama_adsOutPut() {
    var ca = alimama_ads[alimama_nextadid];
    var cw = window;
    cw.alimama_containerid = ca[0];
    cw.alimama_pid = ca[1];
    cw.alimama_titlecolor = ca[2];
    cw.alimama_descolor = ca[3];
    cw.alimama_bgcolor = ca[4];
    cw.alimama_bordercolor = ca[5];
    cw.alimama_linkcolor = ca[6];
    cw.alimama_bottomcolor = ca[7];
    cw.alimama_anglesize = ca[8];
    cw.alimama_bgpic = ca[9];
    cw.alimama_icon = ca[10];
    cw.alimama_sizecode = ca[11];
    cw.alimama_width = ca[12];
    cw.alimama_height = ca[13];
    cw.alimama_type = ca[14];
    if (alimama_ads.length == alimama_nextadid + 1) {
        alimama_nextadid = 99;
    } else {
        alimama_nextadid++;
    }
    alimama_show();
}
function alimama_getiframe(pid, titlecolor, descolor, bgcolor, bordercolor, linkcolor, sizecode, width, height, type, bottomcolor, angelsize, bgpic, icon) {
    var cw = window;
    cw.alimama_pid = pid;
    cw.alimama_titlecolor = titlecolor;
    cw.alimama_descolor = descolor;
    cw.alimama_bgcolor = bgcolor;
    cw.alimama_bordercolor = bordercolor;
    cw.alimama_linkcolor = linkcolor;
    cw.alimama_sizecode = sizecode;
    if (alimama_config[8] == "http://z.alimama.com/docom.php") {
        cw.alimama_width = "0";
        cw.alimama_height = "0";
    } else {
        cw.alimama_width = width;
        cw.alimama_height = height;
    }
    cw.alimama_type = type ? type : "2";
    cw.alimama_bottomcolor = bottomcolor ? bottomcolor : "FFFFFF";
    cw.alimama_anglesize = angelsize ? angelsize : "0";
    cw.alimama_bgpic = bgpic ? bgpic : "0";
    cw.alimama_icon = icon ? icon : "0";
    return alimama_show(1);
}
function alimama_getcomiframe(pid, titlecolor, descolor, bgcolor, bordercolor, linkcolor, sizecode, width, height, type, bottomcolor, angelsize, bgpic, icon) {
    return alimama_getiframe(pid, titlecolor, descolor, bgcolor, bordercolor, linkcolor, sizecode, width, height, type, bottomcolor, angelsize, bgpic, icon);
}
function alimama_getImgPosition(cn) {
    function bgetx(co) {
        var cl = 0;
        try {
            if (typeof co.offsetParent != "undefined" && co.offsetParent) {
                while (typeof co.offsetParent != "undefined" && co.offsetParent) {
                    if (typeof co.offsetLeft != "undefined" && co.offsetLeft) {
                        cl += co.offsetLeft;
                    }
                    co = co.offsetParent;
                }
            } else if (co.x) {
                cl += co.x;
            }
        } catch(err) {
            cl = 0;
        }
        return cl;
    }
    function bgety(co) {
        var ct = 0;
        try {
            if (typeof co.offsetParent != "undefined" && co.offsetParent) {
                while (typeof co.offsetParent != "undefined" && co.offsetParent) {
                    if (typeof co.offsetTop != "undefined" && co.offsetTop) {
                        ct += co.offsetTop;
                    }
                    co = co.offsetParent;
                }
            } else if (co.y) {
                ct += co.y;
            }
        } catch(err) {
            ct = 0;
        }
        return ct;
    }
    var cx = 0;
    var cy = 0;
    try {
        var ci = document.getElementById(cn);
        var cw = window;
        cx = bgetx(ci);
        cy = bgety(ci);
        var i = 0;
        if (cw.parent.window && typeof cw.parent.window != "undefined" && cw != cw.parent) {
            while (cw.location != window.top.location) {
                cx += bgetx.call(cw.parent, cw.frameElement);
                cy += bgety.call(cw.parent, cw.frameElement);
                cw = cw.parent.window;
            }
        }
    } catch(err) {
        cx = 0;
        cy = 0;
    }
    return [cx, cy];
}
function alimama_scrollToAd(cy) {
    if (cy < 200) {
        return;
    }
    try {
        var ctbd = top.document.body;
        var ctde = top.document.documentElement;
        cy = cy - 200;
        try {
            ctbd.scrollTop = cy;
        } catch(err) {}
        try {
            ctde.scrollTop = cy;
        } catch(err) {}
    } catch(err) {}
} (function () {
    com_alimama = window.com_alimama || {};
    com_alimama.util = window.com_alimama.util || {};
    if ("function" === typeof(com_alimama.util.domReady)) {
        return;
    }
    com_alimama.util.domReady = function (f) {
        var t = com_alimama.util.domReady;
        if ("function" !== typeof(f)) {
            return;
        }
        if (t.ready) {
            return f();
        }
        if (t.timer) {
            t.fns.push(f);
        } else { if (window.attachEvent) {
                attachEvent("onload", t.isDomReady);
            } else {
                addEventListener("load", t.isDomReady, false);
            }
            t.fns = [f];
            t.isDomReady();
        }
    };
    com_alimama.util.domReady.isDomReady = function () {
        var ts = com_alimama.util.domReady;
        if (ts.ready) {
            return false;
        }
        if (document && document.getElementsByTagName && document.getElementById && document.body) {
            if ("undefined" !== typeof(ts.timer)) {
                clearTimeout(ts.timer);
            }
            ts.timer = null;
            for (var i = 0; i < ts.fns.length; i++) {
                ts.fns[i]();
            }
            ts.fns = null;
            ts.ready = true;
        } else {
            ts.timer = setTimeout(ts.isDomReady, 50);
        }
    };
})();
(function () {
    com_alimama = window.com_alimama || {};
    com_alimama.type = window.com_alimama.type || {};
    com_alimama.type.e = window.com_alimama.type.e || {};
    if ("function" === typeof(com_alimama.type.e.popup)) {
        return;
    }
    com_alimama.type.e.popup = function (u, c) {
        var t = com_alimama.type.e.popup;
        if (typeof alimama_callBackFuncs != "undefined") {
            alimama_callBackFuncs("addec", "1-0-1");
        }
        if ("undefined" === typeof(c)) {
            c = "width=760,height=480,toolbar=no,location=no,directories=no,status=yes,resizable=no,scrollbars=no";
        }
        var Af = function () {
            var cp = window.open('about:blank', '_blank', c);
            cp.blur();
            try {
                cp.opener.focus();
            } catch(err) {}
            cp.location = u;
        };
        var Ag = function () {
            if (window.attachEvent) {
                document.detachEvent("onclick", arguments.callee);
            } else {
                document.removeEventListener("click", arguments.callee, false);
            }
            try {
                Af();
            } catch(err) {
                com_alimama.util.domReady(Ah);
            }
        };
        var Ah = function () {
            if (window.attachEvent) {
                document.attachEvent("onclick", Ag);
            } else {
                document.addEventListener("click", Ag, false);
            }
        };
        try {
            Af();
        } catch(err) {
            com_alimama.util.domReady(Ah);
        }
    };
})();
(function () {
    com_alimama = window.com_alimama || {};
    com_alimama.util = window.com_alimama.util || {};
    if (com_alimama.util.oo) {
        return;
    }
    com_alimama.util.oo = {
        mix: function (ct, cs, co) {
            if (!ct || !cs) {
                return ct;
            }
            if (typeof co === "undefined") {
                co = true;
            }
            var ck;
            for (ck in cs) {
                if (co || !(ck in ct)) {
                    ct[ck] = cs[ck];
                }
            }
            return ct;
        },
        extend: function (cs, cp, cpp, csp) {
            var cf = function () {};
            cf.prototype = cp.prototype;
            cs.prototype = new cf();
            cs.prototype.constructor = cs;
            cs.superclass = cp.prototype;
            if (cp.prototype.constructor == Object.prototype.constructor) {
                cp.prototype.constructor = cp;
            }
            if (cpp) {
                this.mix(cs.prototype, cpp);
            }
            if (csp) {
                this.mix(cs, csp);
            }
        }
    };
})();
(function () {
    com_alimama = window.com_alimama || {};
    com_alimama.tools = window.com_alimama.tools || {};
    if ("function" === typeof(com_alimama.tools.floatWindow)) {
        return;
    }
    com_alimama.tools.floatWindow = function (o) {
        this.Fa = o;
        if (!this.Fa.cmp) {
            this.Fa.cmp = 20;
        }
        if (!this.Fa.cmi) {
            this.Fa.cmi = 50;
        }
        this.Fb = {
            "co": {},
            "ci": {},
            "cm": {},
            "cc": {}
        };
        this.Ft();
    };
    var cw = window;
    var cd = document;
    var ctf = com_alimama.tools.floatWindow;
    ctf.prototype.Ft = function () {
        this.Fc = this.constructor;
        this.Fd();
        this.Fe();
    };
    ctf.prototype.Fd = function () {
        this.Fc.Fg.push(this);
        if (!this.Fc.ci.spfixed && this.Fa.position == "fixed" && !this.Fc.cio) {
            this.Fc.cio = true;
            this.Fc.bfixpos();
        }
    };
    ctf.prototype.Fn = function () {
        var cg = this.Fo();
        var cso = this.Fb.co;
        if (cg) {
            this.co.style.top = cso.css_top[2];
            this.co.style.left = cso.css_left[2];
            this.co.style.visibility = "visible";
        }
    };
    ctf.prototype.Fe = function () {
        this.Fp();
        this.Fq();
        this.Fr();
        this.Fs();
        var cid = this.Fa.oid;
        var cs = "";
        cs += "<div id='outer" + cid + "' style='" + this.Fc.Fh(this.Fb.co) + "'>";
        cs += "<div id='inner" + cid + "' style='" + this.Fc.Fh(this.Fb.ci) + "'>";
        cs += "<div id='masker" + cid + "' style='" + this.Fc.Fh(this.Fb.cm) + "'><iframe frameborder=0 style='Height:100%;width:100%'></iframe></div>";
        cs += "<div id='container" + cid + "' style='" + this.Fc.Fh(this.Fb.cc) + "'>";
        cs += this.Fa.content;
        cs += "</div></div></div>";
        document.write(cs);
        this.Fm = true;
        this.co = document.getElementById("outer" + cid);
        this.ci = document.getElementById("inner" + cid);
        this.cc = document.getElementById("container" + cid);
        if (this.co.parentNode != document.body) {
            document.body.insertBefore(this.co.parentNode.removeChild(this.co), document.body.firstChild);
        }
        this.Fc.Fi("show", this);
    };
    ctf.prototype.Fo = function () {
        var cso = this.Fb.co;
        var cfg = this.Fa;
        var cw = window;
        var cde = cd.documentElement;
        var cbd = cd.body;
        var cpl = cso.css_left;
        var cpt = cso.css_top;
        var cwh = parseInt(cde.clientHeight, 10);
        var cww = parseInt(cde.clientWidth, 10);
        var cst = parseInt(cde.scrollTop, 10);
        var csl = parseInt(cde.scrollLeft, 10);
        if (!cwh && !cww) {
            cwh = parseInt(cbd.clientHeight, 10);
            cww = parseInt(cbd.clientWidth, 10);
            cst = parseInt(cbd.scrollTop, 10);
            csl = parseInt(cbd.scrollLeft, 10);
        }
        var cnl = 0;
        var cnt = 0;
        var cg = false;
        if (cfg.vertical[0] == "top") {
            cnt = cfg.vertical[1] + cst;
        } else if (cfg.vertical[0] == "bottom") {
            cnt = cwh + cst - this.Fa.h - cfg.vertical[1];
        }
        if (cfg.level[0] == "center") {
            if (parseInt(cbd.clientWidth, 10) >= this.Fa.w) {
                this.Fa.level = ["left", Math.floor((parseInt(cbd.clientWidth, 10) - this.Fa.w) / 2)];
            } else {
                this.Fa.level = ["left", 0];
            }
        }
        if (cfg.level[0] == "right") {
            cnl = cww + csl - this.Fa.w - cfg.level[1];
        } else if (cfg.level[0] == "left") {
            cnl = cfg.level[1] + csl;
        }
        if (typeof document.body.offsetLeft == "number" && document.body.offsetLeft) {
            cnl = cnl - document.body.offsetLeft;
        }
        if (cpt && parseInt(cpt[2], 10) == cnt) {} else {
            cso.css_top = ["top", "top", cnt + "px"];
            cg = true;
        }
        if (cpl && parseInt(cpl[2], 10) == cnl) {} else {
            cso.css_left = ["left", "left", cnl + "px"];
            cg = true;
        }
        return cg;
    };
    ctf.prototype.Fp = function () {
        var cso = this.Fb.co;
        cso.css_z_index = ["z-index", "zIndex", "2147483647"];
        cso.css_width = ["width", "width", this.Fa.w + "px"];
        cso.css_height = ["height", "height", this.Fa.h + "px"];
        if (this.Fa.position == "fixed" && !this.Fc.ci.spfixed) {
            this.Fo();
        } else {
            cso["css_" + this.Fa.vertical[0]] = [this.Fa.vertical[0], this.Fa.vertical[0], this.Fa.vertical[1] + "px"];
            if (this.Fa.level[0] == "center") {
                if (parseInt(cd.body.clientWidth, 10) >= this.Fa.w) {
                    cso.css_left = ["left", "left", Math.floor((parseInt(cd.body.clientWidth, 10) - this.Fa.w) / 2) + "px"];
                    this.Fa.level = ["left", Math.floor((parseInt(cd.body.clientWidth, 10) - this.Fa.w) / 2)];
                } else {
                    cso.css_left = ["left", "left", "0px"];
                    this.Fa.level = ["left", 0];
                }
            } else {
                cso["css_" + this.Fa.level[0]] = [this.Fa.level[0], this.Fa.level[0], this.Fa.level[1] + "px"];
            }
        }
        if (this.Fa.position == "fixed") {
            if (!this.Fc.ci.spfixed) {
                cso.css_position = ["position", "position", "absolute"];
            } else {
                cso.css_position = ["position", "position", "fixed"];
            }
        } else {
            cso.css_position = ["position", "position", "absolute"];
        }
    };
    ctf.prototype.Fq = function () {
        var cso = this.Fb.ci;
        cso.css_width = ["width", "width", this.Fa.w + "px"];
        cso.css_height = ["height", "height", this.Fa.h + "px"];
        cso.css_position = ["position", "position", "absolute"];
        cso.css_left = ["left", "left", this.Fa.innerpos.left + "px"];
        cso.css_top = ["top", "top", this.Fa.innerpos.top + "px"];
    };
    ctf.prototype.Fr = function () {
        var cso = this.Fb.cm;
        cso.css_z_index = ["z-index", "zIndex", "10001"];
        cso.css_left = ["left", "left", "0px"];
        cso.css_top = ["top", "top", "0px"];
        cso.css_width = ["width", "width", this.Fa.w + "px"];
        cso.css_height = ["height", "height", this.Fa.h + "px"];
        cso.css_position = ["position", "position", "absolute"];
    };
    ctf.prototype.Fs = function () {
        var cso = this.Fb.cc;
        cso.css_z_index = ["z-index", "zIndex", "10003"];
        cso.css_left = ["left", "left", "0px"];
        cso.css_top = ["top", "top", "0px"];
        cso.css_width = ["width", "width", this.Fa.w + "px"];
        cso.css_height = ["height", "height", this.Fa.h + "px"];
        cso.css_position = ["position", "position", "absolute"];
    };
    ctf.Fg = [];
    ctf.ci = (function () {
        var A = {};
        var cu = navigator.userAgent.toLowerCase();
        A.isOpera = (cu.indexOf('opera') > -1);
        A.isIE = (!A.isOpera && cu.indexOf('msie') > -1);
        A.isFF = (!A.isOpera && !A.isIE && cu.indexOf('firefox') > -1);
        A.addEvent = function (o, c, h) {
            if (this.isIE) {
                o.attachEvent('on' + c, h);
            } else {
                o.addEventListener(c, h, false);
            }
        };
        A.ie = 0;
        var cm = navigator.userAgent.match(/MSIE\s([^;]*)/);
        if (cm && cm[1]) {
            A.ie = parseFloat(cm[1]);
        }
        if (A.isIE) {
            if (A.ie < 7) {
                A.spfixed = false;
            } else if ("BackCompat" == cd.compatMode) {
                A.spfixed = false;
            } else {
                A.spfixed = true;
            }
        } else {
            A.spfixed = true;
        }
        return A;
    })();
    ctf.Ff = function () {
        for (var i = 0; i < ctf.Fg.length; i++) {
            if (ctf.Fg[i].co.parentNode != document.body) {
                document.body.appendChild(ctf.Fg[i].co.parentNode.removeChild(ctf.Fg[i].co));
            }
        }
    };
    ctf.Fh = function (cs) {
        var css = [];
        for (ck in cs) {
            if (ck.indexOf("css_") < 0) {
                continue;
            }
            css.push(cs[ck][0] + ":" + cs[ck][2]);
        }
        return css.join(";");
    };
    ctf.Fi = function (type, cs) {
        if (!cs.Fa["on" + type]) {
            return;
        }
        for (var i = 0; i < cs.Fa["on" + type].length; i++) {
            if (typeof cs.Fa["on" + type][i] == "function") {
                cs.Fa["on" + type][i](cs);
            }
            if (typeof cs.Fa["on" + type][i] == "object" && typeof cs.Fa["on" + type][i].action) {
                cs.Fc.Fj(cs, cs.Fa["on" + type][i]);
            }
        }
    };
    ctf.Fj = function (cs, ca) {
        if (ca.action == "move") {
            cs.Fc.Fl(cs, ca.args);
        } else if (ca.action == "wait") {
            cs.Fc.towait(cs, ca.args);
        } else if (ca.action == "hide") {
            cs.Fc.Fk(cs);
        }
    };
    ctf.Fk = function (cs) {
        cs.co.style.display = "none";
    };
    ctf.btoshow = function (cs) {
        cs.co.style.display = "";
    };
    ctf.Fl = function (cs, ca) {
        ca.cfl = parseInt(cs.ci.style.left, 10);
        ca.cft = parseInt(cs.ci.style.top, 10);
        (function (cs, ca) {
            var csi = cs.ci.style;
            var ccl = parseInt(csi.left, 10);
            var cct = parseInt(csi.top, 10);
            if (ccl == ca.aimleft && cct == ca.aimtop) {
                if (ca.oncomplete) {
                    cs.Fc.Fi(ca.oncomplete, cs);
                }
                return;
            }
            if (ca.cfl > ca.aimleft) {
                if (ccl - cs.Fa.cmp <= ca.aimleft) {
                    csi.left = ca.aimleft + "px";
                } else {
                    csi.left = (ccl - cs.Fa.cmp) + "px";
                }
            } else if (ca.cfl < ca.aimleft) {
                if (ccl + cs.Fa.cmp >= ca.aimleft) {
                    csi.left = ca.aimleft + "px";
                } else {
                    csi.left = (ccl + cs.Fa.cmp) + "px";
                }
            }
            if (ca.cft > ca.aimtop) {
                if (cct - cs.Fa.cmp <= ca.aimtop) {
                    csi.top = ca.aimtop + "px";
                } else {
                    csi.top = (cct - cs.Fa.cmp) + "px";
                }
            } else if (ca.cft < ca.aimtop) {
                if (cct + cs.Fa.cmp >= ca.aimtop) {
                    csi.top = ca.aimtop + "px";
                } else {
                    csi.top = (cct + cs.Fa.cmp) + "px";
                }
            }
            var ce = arguments.callee;
            window.setTimeout((function () {
                ce(cs, ca);
            }), cs.Fa.cmi);
        })(cs, ca);
    };
    ctf.towait = function (cs, ca) {
        window.setTimeout((function () {
            cs.Fc.Fj(cs, ca[1]);
        }), ca[0]);
    };
    ctf.bfixpos = function () {
        var cs = ctf.Fg;
        for (var i = 0; i < cs.length; i++) {
            if (cs[i].Fm && cs[i].Fa.position == "fixed") {
                cs[i].Fn();
            }
        }
        var ce = arguments.callee;
        window.setTimeout(ce, 200);
    };
    ctf.hideFloatAd = function (ct) {
        var cs = ctf.Fg;
        for (var i = 0; i < cs.length; i++) {
            if (cs[i].Fa.mmtype == ct) {
                cs[i].co.style.display = "none";
            }
        }
    };
})();
(function () {
    com_alimama = window.com_alimama || {};
    com_alimama.type = window.com_alimama.type || {};
    com_alimama.type.a = function (cf) {
        if (cf.t && a[cf.t]) {
            new a[cf.t](cf);
        } else {
            new a.dft(cf);
        }
    };
    var a = com_alimama.type.a;
    var fw = com_alimama.tools.floatWindow;
    var oo = com_alimama.util.oo;
    var d = document;
    var w = window;
    var id = function (i) {
        return d.getElementById(i);
    };
    a.dft = function (cf) {
        this.f1h = cf.f1h;
        this.f1w = cf.f1w;
        this.f1s = cf.f1s;
        this.oid = "o" + Math.random();
        this.f1 = null;
        this._init();
    };
    a.dft.prototype = {
        _init: function () {
            var that = this;
            this.f1 = new fw({
                "mmtype": "a",
                "level": ["right", 5],
                "vertical": ["bottom", 0],
                "h": this.f1h,
                "w": this.f1w,
                "oid": "mmtypea",
                "position": "fixed",
                "innerpos": {
                    "left": 0,
                    "top": (navigator.userAgent.indexOf("360SE") > -1) ? 0 : this.f1h + 16
                },
                "onshow": [{
                    "action": "move",
                    "args": {
                        "aimleft": 0,
                        "aimtop": 0
                    }
                }],
                "content": "<div style='position:absolute;top:-16px;width:" + this.f1w + "px'><div style='height:16px;font-size:14px;float:right;width:44px;cursor:pointer;' id='cf1" + this.oid + "'><img alt='Close' src='http://img.alimama.cn/p/close1.gif' onmouseout='this.src=\"http://img.alimama.cn/p/close1.gif\"' onmouseover='this.src=\"http://img.alimama.cn/p/close2.gif\"'/></div><div style='clear:both;'></div></div><div style='background-color:#FFFFFF;width:" + this.f1w + "px;height:" + this.f1h + "px'>" + this.f1s + "</div>"
            });
            w.setTimeout((function () {
                id("cf1" + that.oid).onclick = function () {
                    that.cf1(that);
                };
            }), 0);
            w.setTimeout((function () {
                that.cf1(that);
            }), 25000);
        },
        cf1: function (that) {
            that.f1.co.style.display = "none";
        }
    };
    a.replay = function (cf) {
        this.f2h = cf.f2h;
        this.f2w = cf.f2w;
        this.f2s = cf.f2s;
        this.f2e = cf.f2e;
        this.f2 = null;
        this.constructor.superclass.constructor.apply(this, arguments);
    };
    oo.extend(a.replay, a.dft, {
        _init: function () {
            var that = this;
            this.constructor.superclass._init.call(this);
            this.f2 = new fw({
                "level": ["right", 5],
                "vertical": ["bottom", 0],
                "h": this.f2h,
                "w": this.f2w,
                "oid": "mmtypea_replay",
                "position": "fixed",
                "innerpos": {
                    "left": 0,
                    "top": 0
                },
                "content": "<div style='position:absolute;top:-16px;width:" + this.f2w + "px'><div style='height:16px;font-size:14px;float:right;width:44px;cursor:pointer;' id='cf2" + this.oid + "'><img alt='Close' src='http://img.alimama.cn/p/close1.gif' onmouseout='this.src=\"http://img.alimama.cn/p/close1.gif\"' onmouseover='this.src=\"http://img.alimama.cn/p/close2.gif\"'/></div><div style='clear:both;'></div></div><div id='sf1" + this.oid + "' style='cursor:pointer;background-color:#FFFFFF;width:" + this.f2w + "px;height:" + this.f2h + "px'>" + this.f2s + "</div>"
            });
            this.f2.co.style.display = "none";
            w.setTimeout((function () {
                id("cf2" + that.oid).onclick = (function () {
                    that.cf2(that);
                });
                if (that.f2e == "click") {
                    id("sf1" + that.oid).onclick = (function () {
                        that.sf1(that);
                    });
                } else {
                    id("sf1" + that.oid).onmouseover = (function () {
                        that.sf1(that);
                    });
                }
            }), 0);
        },
        cf1: function (that) {
            that.f1.co.style.display = "none";
            that.f2.co.style.display = "";
        },
        cf2: function (that) {
            that.f2.co.style.display = "none";
        },
        sf1: function (that) {
            that.f1.co.style.display = "";
            that.f2.co.style.display = "none";
        }
    });
})();
function alimama_callBackFuncs(ca, cg) {
    if (ca == "addec") {
        var cs = cg.split("-");
        var ce = alimama_data.ec.split("-");
        for (var i = 0; i < cs.length && i < ce.length; i++) {
            ce[i] = parseInt(ce[i], 10) + parseInt(cs[i], 10);
        }
        alimama_data.ec = ce.join("-");
    }
}
function alimama_show(bdzflag) {
    var boutputstr = "";
    var $bud = "undefined";
    var $bif = true;
    try {
        $bif = (self.location != top.location);
    } catch(err) {}
    var $bof = false;
    var $bmw = R2();
    var $bus = O();
    var $bmd = $bmw.document;
    var $bcu = null;
    var $burl = "";
    var A = null;
    var B = alimama_config;
    var bss = false;
    var C = {
        jt: {
            n: ["alimama_jstype"],
            i: [],
            e: [],
            t: ""
        },
        pf: {
            n: ["alimama_source"],
            i: [],
            e: [],
            t: ""
        },
        w: {
            n: ["alimama_width"],
            i: [],
            e: [],
            t: ""
        },
        h: {
            n: ["alimama_height"],
            i: [],
            e: [],
            t: ""
        },
        sz: {
            n: ["alimama_sizecode"],
            i: [],
            e: [],
            t: ""
        },
        i: {
            n: ["alimama_pid"],
            i: [],
            e: [],
            t: ""
        },
        rp: {
            n: ["alimama_referpid"],
            i: [],
            e: [],
            t: ""
        },
        refpos: {
            n: ["alimama_refpos"],
            i: [],
            e: [],
            t: ""
        },
        t: {
            n: ["alimama_type"],
            i: [],
            e: [],
            t: ""
        },
        dt: {
            n: ["alimama_displaytype"],
            i: [],
            e: [],
            t: ""
        },
        tc: {
            n: ["alimama_titlecolor"],
            i: [],
            e: [],
            t: "c"
        },
        dc: {
            n: ["alimama_descolor"],
            i: [],
            e: [],
            t: "c"
        },
        bgc: {
            n: ["alimama_bgcolor"],
            i: [],
            e: [],
            t: "c"
        },
        bdc: {
            n: ["alimama_bordercolor"],
            i: [],
            e: [],
            t: "c"
        },
        lc: {
            n: ["alimama_linkcolor"],
            i: [],
            e: [],
            t: "c"
        },
        bmc: {
            n: ["alimama_bottomcolor"],
            i: [],
            e: [],
            t: "c"
        },
        as: {
            n: ["alimama_anglesize"],
            i: [],
            e: [],
            t: ""
        },
        bgp: {
            n: ["alimama_bgpic"],
            i: [],
            e: [],
            t: ""
        },
        ic: {
            n: ["alimama_icon"],
            i: [],
            e: [],
            t: ""
        },
        cid: {
            n: ["alimama_containerid"],
            i: [],
            e: [],
            t: ""
        },
        flt: {
            n: ["alimama_underfilter"],
            i: [],
            e: [],
            t: ""
        },
        tlul: {
            n: ["alimama_underline"],
            i: [],
            e: [],
            t: ""
        },
        tlfs: {
            n: ["alimama_fontsize"],
            i: [],
            e: [],
            t: ""
        }
    };
    var D = N("i");
    var btl = {
        "l": 1,
        "c": 1,
        "s": 12,
        "n": 4
    };
    var bm2s = {
        "2859729": "738926",
        "2311734": "738966",
        "3154342": "765952",
        "3154367": "765954"
    };
    function R2() {
        if (navigator.userAgent.toLowerCase().indexOf("opera") > -1) {
            return window;
        }
        var cx;
        try {
            cx = top.document.location;
            return top;
        } catch(err) {
            $bof = true;
        }
        var cwd = window;
        while (cwd != cwd.parent) {
            var cp = cwd.parent;
            try {
                cx = cp.document.location;
            } catch(err) {
                return cwd;
            }
            cwd = cp;
        }
        return cwd;
    }
    function O() {
        if (!$bmw.alimama_adunits) {
            $bmw.alimama_adunits = [];
        }
        return $bmw.alimama_adunits;
    }
    function g(cw, cf) {
        var ct = new Date();
        var cs = ct.getTime();
        L(cw);
        if (cw.alimama_data.t && cs - cw.alimama_data.t > B[3]) {
            cw.alimama_data[cf] = 0;
        }
        if (!cw.alimama_data[cf]) {
            cw.alimama_data[cf] = 1;
        } else {
            cw.alimama_data[cf]++;
        }
        cw.alimama_data.t = cs;
    }
    function L(cw) {
        if (!cw.alimama_data) {
            cw.alimama_data = {};
        }
    }
    function V() {
        if (alimama_type == "i") {
            return true;
        }
        var ct = new Date();
        var cs = ct.getTime();
        var cr = true;
        var cw = window;
        var cul = 0;
        var ctl = 0;
        for (var cu in $bus) {
            if (cu.indexOf("mm_") === 0) {
                if ($bus[cu][0].tp == "f") {
                    ctl++;
                } else if ($bus[cu][0].tp == "g") {} else if ($bus[cu][0].tp == "h") {} else if ($bus[cu][0].tp == "e") {} else if ($bus[cu][0].tp == "i") {} else {
                    cul++;
                }
            }
        }
        if (ctl > B[17]) {
            cr = false;
        }
        if (cul > B[0]) {
            cr = false;
        }
        if (cul > B[1]) {
            cr = false;
        }
        var cl = $bus[D].length;
        var cp = [];
        for (var i = 0; i < cl; i++) {
            if ((cs - $bus[D][i].t) <= B[3]) {
                cp.push($bus[D][i]);
            }
        }
        cl = cp.length;
        if (cl > B[4]) {
            cr = false;
        }
        if (B[5] < cl && cl <= B[4] && cl > 0) {
            var cc = $bus[D][0].w;
            var cpp = false;
            for (var j = 0; j < cl; j++) {
                if ($bus[D][j].w != cc) {
                    cpp = true;
                    break;
                }
            }
            if (!cpp) {
                cr = false;
            }
        }
        if (alimama_type == "e") {
            if ($bus[D].length > 1) {
                return false;
            }
        }
        return cr;
    }
    function G() {
        if (typeof alimama_height == "undefined") {
            alimama_height = 0;
        }
        if (typeof alimama_width == "undefined") {
            alimama_width = 0;
        }
        var cw = window;
        if (B[8] != "http://z.alimama.com/docom.php" && alimama_type == 2) {
            var cmr = B[11];
            var csz = {
                "11": [760, 90],
                "12": [468, 60],
                "14": [728, 90],
                "15": [950, 90],
                "16": [658, 60],
                "13": [250, 60],
                "21": [120, 600],
                "22": [120, 240],
                "23": [160, 600],
                "31": [180, 250],
                "32": [250, 300],
                "33": [360, 190],
                "34": [250, 250],
                "35": [200, 200],
                "36": [336, 280],
                "37": [300, 250],
                "38": [290, 200]
            };
            var caw = cw.alimama_width;
            var cah = cw.alimama_height;
            var cat = cw.alimama_sizecode;
            if (csz[cat]) {
                var csw = csz[cat][0];
                var csh = csz[cat][1];
                if (csw * cmr > caw) {
                    cw.alimama_width = Math.round(csw * cmr);
                }
                if (csh * cmr > cah) {
                    cw.alimama_height = Math.round(csh * cmr);
                }
            }
        } else if (alimama_type == "f") {
            x();
        } else if (alimama_type == "g") {
            Aa();
        } else if (alimama_type == "h") {
            Ad();
        }
        if (alimama_type == "f") {
            g($bmw, B[16]);
        } else if (alimama_type == "g") {
            g($bmw, B[18]);
        } else if (alimama_type == "h") {} else if (alimama_type == "e") {
            if (typeof(alimama_sizecode) == "undefined") {
                alimama_sizecode = "99";
            }
            L($bmw);
            if (typeof($bmw.alimama_data.ec) == "undefined") {
                $bmw.alimama_data.ec = B[20];
            }
        } else if (alimama_type == "i") {
            if (typeof(alimama_sizecode) == "undefined") {
                alimama_sizecode = "99";
            }
        } else {
            g(cw, B[6]);
            g($bmw, B[7]);
        }
        d();
    }
    function Ad() {
        var cf = alimama_tkw;
        var cw = 0;
        var ch = 0;
        if (typeof(cf.lg_i) == "number" && typeof(cf.pb_i) == "number") {
            if (cf.lg_i === 0) {
                if (cf.pb_i === 0) {
                    ch = 90;
                    cw = 240;
                } else {
                    ch = 160;
                    cw = 140;
                }
            } else { if (cf.pb_i === 0) {
                    ch = 120;
                    cw = 210;
                } else {
                    ch = 190;
                    cw = 110;
                }
            }
        }
        if (cf.w_i <= cw) {
            cf.w_i = cw;
        }
        if (cf.h_i <= ch) {
            cf.h_i = ch;
        }
        alimama_width = cf.w_i;
        alimama_height = cf.h_i;
    }
    function Aa() {
        var cf = alimama_tks;
        var cw = 0;
        var ch = 0;
        if (cf.style_i == 1) {
            cw = 249;
            ch = 45;
            if (cf.lg_i == 1) {
                cw = cw + 60;
            }
            if (cf.c_i == 1) {
                cw = cw + 263;
            }
            if (cf.hot_i == 1) {
                ch = ch + 24;
            }
        } else if (cf.style_i == 2) {
            cw = 249;
            ch = 33;
            if (cf.lg_i == 1) {
                cw = cw + 41;
            }
            if (cf.hot_i == 1) {
                ch = ch + 24;
            }
        }
        if (cf.w_i <= cw) {
            cf.w_i = cw;
        }
        if (cf.h_i <= ch) {
            cf.h_i = ch;
        }
        alimama_width = cf.w_i;
        alimama_height = cf.h_i;
    }
    function Ab() {
        $burl += Ac(alimama_tks, alimama_type, {
            txt: B[19],
            unid: 16
        });
    }
    function Ae() {
        $burl += Ac(alimama_tkw, alimama_type, {
            unid: 16
        });
    }
    function Ac(co, ct, cf) {
        if (!cf) {
            cf = {};
        }
        var cut = function (cus, cul) {
            var cur = 0;
            var cue = /[^\x00-\xff]/;
            for (var i = 0; i < cus.length; i++) {
                var cuc = cus.charAt(i);
                var cug = 1;
                if (cue.test(cuc)) {
                    cug = 2;
                }
                cur = cur + cug;
                if (cur > cul * 2) {
                    return cus.substr(0, i);
                }
            }
            return cus;
        };
        var cs = "";
        for (var ck in co) {
            var cv = co[ck];
            var ca = ck.split("_");
            if (ca.length < 2) {
                break;
            }
            var cst = ca[1];
            if (cst == "i") {
                if (/[\D]/.test(cv)) {
                    cv = 0;
                }
                cs += "&" + ct + "_" + ca[0] + "=" + cv;
            } else if (cst == "c") {
                if (cv.indexOf("#") === 0) {
                    cv = cv.substr(1);
                }
                if (/[^0-9a-fA-F]/.test(cv) || cv.toString().length != 6) {
                    cv = "FFFFFF";
                }
                cs += "&" + ct + "_" + ca[0] + "=" + cv;
            } else if (cst == "s") {
                if (cf[ca[0]]) {
                    cv = cut(cv, cf[ca[0]]);
                } else {
                    cv = cut(cv, 10);
                }
                cs += "&" + ct + "_" + ca[0] + "=" + T(cv);
            }
        }
        return cs;
    }
    function x() {
        var csz = alimama_sizecode.split("_");
        try {
            var clc = csz[1].split("x");
            btl.l = parseInt(clc[0], 10);
            btl.c = parseInt(clc[1], 10);
            if (btl.l > B[12]) {
                btl.l = B[12];
            }
            if (btl.c > B[13]) {
                btl.c = B[13];
            }
        } catch(err) {}
        try {
            var cn = parseInt(csz[2], 10);
            for (var i = 0; i < B[14].length; i++) {
                if (cn == B[14][i]) {
                    btl.n = cn;
                    break;
                }
            }
        } catch(err) {}
        try {
            for (var j = 0; j < B[15].length; j++) {
                if (alimama_fontsize == B[15][j]) {
                    btl.s = alimama_fontsize;
                    break;
                }
            }
        } catch(err) {}
        alimama_sizecode = "tl_" + btl.l + "x" + btl.c + "_" + btl.n;
        alimama_fontsize = btl.s;
        var cmw = btl.c * (btl.n * btl.s + 6) + 2;
        var cmh = btl.l * 20 + 2;
        if (alimama_width < cmw && alimama_width !== 0) {
            alimama_width = cmw;
        }
        if (alimama_height < cmh) {
            alimama_height = cmh;
        }
    }
    function d() {
        var ct = new Date();
        var cs = ct.getTime();
        var cu = {};
        cu.w = window;
        cu.pid = D;
        cu.t = cs;
        cu.tp = alimama_type;
        cu.sz = N("sz");
        if (!$bus[D]) {
            $bus[D] = [];
        }
        try {
            $bus[D].push(cu);
        } catch(err) {}
        $bcu = cu;
    }
    function N(ck) {
        var cr = null;
        var co = C[ck];
        var cw = window;
        for (var i = 0; i < co.n.length; i++) {
            if (cw[co.n[i]]) {
                var cv = cw[co.n[i]];
                if (co.t && co.t == "c") {
                    if (cv.indexOf("#") === 0) {
                        cv = cv.substr(1);
                    }
                }
                cr = cv;
                break;
            }
        }
        return cr;
    }
    function J() {
        if (typeof D == $bud) {
            D = "";
        }
        if (!D) {
            D = "";
        }
        $burl = "?i=" + D;
    }
    function Z() {
        p("u", T(Q()));
    }
    function w() {
        var cf = "-1";
        if ($bif) {
            var cw = window;
            var cd = document;
            var cfw = 1;
            var cfh = 1;
            if (cw.innerHeight) {
                cfw = cw.innerWidth;
                cfh = cw.innerHeight;
            } else if (cd.documentElement && cd.documentElement.clientHeight) {
                cfw = cd.documentElement.clientWidth;
                cfh = cd.documentElement.clientHeight;
            } else if (cd.body) {
                cfw = cd.body.clientWidth;
                cfh = cd.body.clientHeight;
            }
            if (cfh > 2 * alimama_height || cfw > 2 * alimama_width) {
                cf = T(cw.location.href);
            }
        }
        f("fu", cf);
    }
    function Q() {
        if ($bof && $bmd.referrer) {
            return $bmd.referrer;
        }
        return $bmd.location.href;
    }
    function T(cs) {
        if (typeof encodeURIComponent == "function") {
            return encodeURIComponent(cs.toString());
        } else {
            return S(cs.toString());
        }
    }
    function S(cs) {
        var cr = "";
        for (var i = 0; i < cs.length; i++) {
            var c = cs.charCodeAt(i);
            if (c < 128) {
                if (c == 46 || c == 40 || c == 41 || (c > 47 && c < 58) || (c > 64 && c < 91) || (c > 96 && c < 123)) {
                    cr += cs.charAt(i);
                } else {
                    cr += M(c);
                }
            } else if (127 < c && c < 0x800) {
                cr += M((c >> 6) | 192);
                cr += M((c & 63) | 128);
            } else if (0x7ff < c && c < 0x10000) {
                cr += M((c >> 12) | 224);
                cr += M(((c >> 6) & 63) | 128);
                cr += M((c & 63) | 128);
            } else if (0xffff < c && c < 0x200000) {
                cr += M((c >> 18) | 0xf0);
                cr += M(((c >> 12) & 63) | 128);
                cr += M(((c >> 6) & 63) | 128);
                cr += M((c & 63) | 128);
            } else if (0x1FFFFF < c && c < 0x4000000) {
                cr += M((c >> 24) | 0xf8);
                cr += M(((c >> 18) & 63) | 128);
                cr += M(((c >> 12) & 63) | 128);
                cr += M(((c >> 6) & 63) | 128);
                cr += M((c & 63) | 128);
            } else if (0x3FFFFFF < c && c < 0x80000000) {
                cr += M((c >> 30) | 0xfc);
                cr += M(((c >> 24) & 63) | 128);
                cr += M(((c >> 18) & 63) | 128);
                cr += M(((c >> 12) & 63) | 128);
                cr += M(((c >> 6) & 63) | 128);
                cr += M((c & 63) | 128);
            }
        }
        return cr;
    }
    function M(c) {
        var cx = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];
        if (c < 256) {
            return "%" + cx[c >> 4] + cx[c & 0xf];
        } else {
            return M(c >> 8) + M(c & 0xf);
        }
    }
    function I() {
        var cr = "";
        var c = navigator.userAgent.toLowerCase();
        try {
            var ct = location.href;
            try {
                ct = top.location.href;
            } catch(err) {
                ct = $bmd.referrer;
            }
            if (c.indexOf('firefox/ss') > -1 && ct.indexOf('alimamapid=')) {
                if (ct.substr(ct.indexOf("alimamapid=") + 11) == D) {
                    cr = "1";
                    bss = true;
                } else {
                    cr = "0";
                }
            } else {
                cr = "0";
            }
        } catch(err) {
            cr = "0";
        }
        f("iss", cr);
    }
    function f(ck, cv) {
        if (!ck || (!cv && cv !== 0) || ck === "" || (cv === "" && typeof cv == "string")) {
            return;
        }
        $burl = $burl + "&" + ck + "=" + cv;
    }
    function p(ck, cv) {
        if (!ck || ck === "") {
            return;
        }
        if (!cv) {
            cv = "";
        }
        $burl = $burl + "&" + ck + "=" + cv;
    }
    function e(ck) {
        f(ck, N(ck));
    }
    function o(ck) {
        p(ck, N(ck));
    }
    function X() {
        var cw = window;
        var cx = 0;
        var cy = 0;
        try {
            cx = cw.screen.width;
            cy = cw.screen.height;
        } catch(err) {}
        p("re", cx + "x" + cy);
    }
    function Y() {
        var cu = Q();
        var ck = P(cu);
        if (ck === "") {
            var cr = R();
            ck = P(cr);
        }
        f("k", ck);
    }
    function P(cu) {
        var cs = ["wd", "p", "q", "keyword", "kw", "w", "key", "word", "query", "q1", "name"];
        if (cu !== "" && cu !== null) {
            for (var i = 0; i < cs.length; i++) {
                var cr = new RegExp("[^1-9a-zA-Z]" + cs[i] + "=\([^&]*\)");
                var ck = cu.match(cr);
                if (ck !== null) {
                    cr = new RegExp("^[0-9]*$");
                    if (ck[1].match(cr) === null) {
                        return ck[1];
                    }
                }
            }
        }
        return "";
    }
    function R() {
        var cr = "";
        try {
            cr = $bmd.referrer;
        } catch(err) {}
        if (cr === null) {
            cr = "";
        }
        return cr;
    }
    function a() {
        var ct = "";
        try {
            ct = $bmd.title;
        } catch(err) {}
        ct = T(ct);
        f("tt", ct);
    }
    function b() {
        var cr = R();
        cr = T(cr);
        p("r", cr);
    }
    function W() {
        $bcu.i = Math.random();
        var cn = "alimamatmpf" + $bcu.i;
        var cs = "<img name='" + cn + "' id='" + cn + "' style='width:0px;height:0px;padding:0px;margin:0px;border:0px;vertical-align:baseline;' border=0 />";
        if (typeof alimama_containerid == "string") {
            try {
                document.getElementById(alimama_containerid).innerHTML += cs;
            } catch(err) {}
        } else { if (bdzflag == 1) {
                boutputstr += cs;
            } else {
                document.write(cs);
            }
        }
        var cp = alimama_getImgPosition(cn);
        f("sx", cp[0]);
        f("sy", cp[1]);
        try {
            var ci = document.getElementById(cn);
            if (ci) {
                ci.parentNode.removeChild(ci);
            }
        } catch(err) {}
    }
    function c() {
        var ca = Math.floor(Math.random() * 10000) + 10001;
        try {
            if ($bmw && $bmw.alimama_data.sid) {
                ca = $bmw.alimama_data.sid;
            } else {
                ca = ca - 10001;
                $bmw.alimama_data.sid = ca;
            }
        } catch(err) {}
        f("ac", ca);
    }
    function r() {
        var cs = window.screen;
        var ct = new Date();
        f("cah", cs.availHeight);
        f("caw", cs.availWidth);
        f("ccd", cs.colorDepth);
        f("ctz", -ct.getTimezoneOffset() / 60);
        f("chl", history.length);
        if (navigator.javaEnabled()) {
            f("cja", 1);
        }
        if (navigator.plugins) {
            f("cpl", navigator.plugins.length);
        }
        if (navigator.mimeTypes) {
            f("cmm", navigator.mimeTypes.length);
        }
    }
    function v() {
        f("cbh", $bmd.body ? $bmd.body.clientHeight : -1);
        f("cbw", $bmd.body ? $bmd.body.clientWidth : -1);
    }
    function s() {
        var cv = "-1";
        var cn = navigator;
        if (cn.plugins && cn.plugins.length) {
            for (var i = 0; i < cn.plugins.length; i++) {
                if (cn.plugins[i].name.indexOf('Shockwave Flash') != -1) {
                    cv = cn.plugins[i].description.split('Shockwave Flash ')[1];
                    break;
                }
            }
        } else if (window.ActiveXObject) {
            for (var j = 10; j >= 2; j--) {
                try {
                    var cf = eval("new ActiveXObject('ShockwaveFlash.ShockwaveFlash." + j + "');");
                    if (cf) {
                        cv = j + '.0';
                        break;
                    }
                } catch(err) {}
            }
        }
        if (cv != "-1") {
            cv = cv.substring(0, cv.indexOf(".") + 2);
        }
        f("cf", cv);
    }
    function t() {
        var ct = 0;
        var cn = 16;
        var cs = 0;
        for (var i = 1; i <= cn; i++) {
            var cx = Math.random();
            var cy = Math.random();
            if ((Math.pow(cx, 2) + Math.pow(cy, 2)) <= 1) {
                ct++;
            }
            if (i <= 12) {
                cs = cs + cx;
            }
        }
        var ck = 'pr' + String.fromCharCode(97 + ct);
        var cv = (Math.round(cs * B[10]) | (($bmd.body ? $bmd.body.clientWidth : 0) << 16));
        f(ck, cv);
        f("cas", ck);
    }
    function u() {
        var cu, cc = "",
        cgn, cgm, i, cl = location,
        cg = "",
        cna = "",
        cks = [],
        cre = /(^\s*)|(\s*$)/g,
        cali = /(mmstat.com|alimama.com|alibaba.com|taobao.com|alipay.com|koubei.com|alisoft.com)$/;
        function cp(cs, cn) {
            var cr = "",
            cw = 1,
            i;
            cw = Math.floor(cs.length / cn);
            if (cw == 1) {
                cr = cs.substr(0, cn);
            } else {
                for (i = 0; i < cn; i++) {
                    cr += cs.substr(i * cw, 1);
                }
            }
            return cr;
        }
        if (cali.test(document.domain)) {
            cks = document.cookie.split(";");
            for (i = 0; i < cks.length; i++) {
                cks[i] = cks[i].replace(cre, "");
                if (cks[i].indexOf("cna=") === 0) {
                    cna = cks[i].substr(4, 24);
                    break;
                }
            }
        }
        if (cna === "") {
            cu = (cl.search.length > 9) ? cl.search : ((cl.pathname.length > 9) ? cl.pathname : cl.href).substr(1);
            cks = document.cookie.split(";");
            for (i = 0; i < cks.length; i++) {
                if (cks[i].split("=").length > 1) {
                    cc += cks[i].split("=")[1];
                }
            }
            if (cc.length < 16) {
                cc += "0123456789abcdef";
            }
            cna = cp(cu, 8) + cp(cc, 16);
        }
        for (i = 1; i <= 32; i++) {
            cgn = Math.floor(Math.random() * 16.0);
            if (cna && i <= cna.length) {
                cgm = cna.charCodeAt(i - 1);
                cgn = (cgn + cgm) % 16;
            }
            cg += cgn.toString(16);
        }
        f("cg", cg);
    }
    function H() {
        var ci = "alimamaf" + $bcu.i;
        $burl = B[8] + $burl;
        $burl = $burl.substring(0, 2048);
        var cs = "<iframe name='" + ci + "' id='" + ci + "' border=0 frameborder=0  marginwidth='0' marginheight='0' scrolling='no' ";
        if (typeof alimama_underfilter == "number") {
            cs = cs + "style=\"position:relative;width:" + alimama_width + "px; height:" + alimama_height + "px;\" ";
        } else { if (alimama_type == "f" && alimama_width === 0) {
                cs = cs + "style=\"width:100%; height:" + alimama_height + "px;\" ";
            } else {
                cs = cs + "style=\"width:" + alimama_width + "px; height:" + alimama_height + "px;\" ";
            }
        }
        if (typeof(alimama_tks) == "object" && alimama_tks && alimama_tks.tm_i) {
            cs = cs + " allowTransparency=\"true\" ";
        }
        cs = cs + "src=\"" + $burl + "\"></iframe>";
        if (alimama_type == "e" || alimama_type == "i") {
            document.write("<scr" + "ipt type='text/javascript' charset='gbk' src='" + "ad.js" + "'></scr" + "ipt>");
        } else { if (bdzflag == 1) {
                boutputstr += cs;
            } else { if (typeof alimama_containerid == "string") {
                    try {
                        document.getElementById(alimama_containerid).innerHTML += cs;
                    } catch(err) {}
                } else { if (typeof(bm2s) == "object") {
                        try {
                            var cz = alimama_pid.split("_")[3];
                            if (bm2s[cz]) {
                                cs += "<div style=\"display:none;\"><scr" + "ipt type=\"text/javascript\" src=\"http://js.tongji.cn.yahoo.com/" + bm2s[cz] + "/ystat.js\"></scr" + "ipt></div>";
                            }
                        } catch(err) {}
                    }
                    document.write(cs);
                }
            }
        }
    }
    function U() {
        var cm = C;
        var cw = window;
        for (var co in cm) {
            if (bdzflag == 1) {
                if (co == "w" || co == "h") {
                    continue;
                }
            }
            var cn = cm[co].n;
            if (cn) {
                for (var i = 0; i < cn.length; i++) {
                    if (typeof cw[cn[i]] != $bud && cn[i] != "alimama_referpid") {
                        cw[cn[i]] = null;
                    }
                }
            }
        }
        if (typeof alimama_nextadid == "number") {
            if (alimama_nextadid < 99) {
                alimama_adsOutPut();
            } else {
                alimama_ads = null;
                alimama_nextadid = null;
            }
        }
    }
    function K() {
        if (A) {
            return;
        }
        A = {};
        var cu = navigator.userAgent.toLowerCase();
        A.isOpera = (cu.indexOf('opera') > -1);
        A.isIE = (!A.isOpera && cu.indexOf('msie') > -1);
        A.isFF = (!A.isOpera && !A.isIE && cu.indexOf('firefox') > -1);
        A.addEvent = function (o, c, h) {
            if (this.isIE) {
                o.attachEvent('on' + c, h);
            } else {
                o.addEventListener(c, h, false);
            }
        };
    }
    function Ai() {
        var ch = location.host;
        if (-1 < ch.lastIndexOf("taobao.com") && 10 === ch.length - ch.lastIndexOf("taobao.com")) {
            var cs = document.cookie.split(";");
            for (var i = 0; i < cs.length; i++) {
                var ckv = cs[i].split("=");
                if (-1 < ckv[0].lastIndexOf("tracknick") && 9 === ckv[0].length - ckv[0].lastIndexOf("tracknick")) {
                    if (ckv.length > 1) {
                        f("uid", ckv[1]);
                        return;
                    }
                }
            }
        }
    }
    function Aj() {
        if (typeof(alimama_p4p_kw) == "string") {
            f("p4p_kw", T(alimama_p4p_kw));
            alimama_p4p_kw = null;
        }
        if (typeof(alimama_p4p_ai) == "string") {
            if (alimama_p4p_ai == "1" || alimama_p4p_ai == "2" || alimama_p4p_ai == "3") {
                f("p4p_ai", alimama_p4p_ai);
                alimama_p4p_ai = null;
            }
        } else {
            f("p4p_ai", "1");
        }
    }
    function F() {
        K();
        J();
        o("w");
        o("h");
        X();
        o("sz");
        u();
        t();
        r();
        s();
        $bcu.s = $burl;
        $bcu.s = $bcu.s + "&u=" + T(Q()) + "&r=" + T(R());
        if (alimama_type == "g") {
            Ab();
        } else if (alimama_type == "h") {
            Ae();
        } else if (alimama_type == "e") {
            f("ec", alimama_data.ec);
        }
        try {
            f("dx", $bmw.alimama_data[B[7]]);
        } catch(err) {}
        c();
        v();
        I();
        e("rp");
        e("refpos");
        e("t");
        e("tc");
        e("dc");
        e("bgc");
        e("bdc");
        e("lc");
        e("bmc");
        e("as");
        e("bgp");
        e("ic");
        e("tlul");
        e("tlfs");
        e("pf");
        Ai();
        Aj();
        W();
        Z();
        Y();
        a();
        b();
        w();
        $bcu.q = $burl;
        H();
        U();
    }
    G();
    if (V()) {
        F();
    }
    return boutputstr;
} (function () {
    if (window.alimama_type && (alimama_type == "a" || alimama_type == "b" || alimama_type == "j")) {
        if (alimama_type == "j") {
            alimama_config[11] = 0.1;
        } else {
            alimama_displaytype = alimama_type;
        }
        alimama_type = 2;
    }
    window.alimama_refpos = (function () {
        var rp = "";
        var rp1 = ("&" + location.search.substring(1)).split("&refpos=");
        if (rp1[1]) {
            var rp2 = rp1[1].split("&")[0].split(",");
            if (rp2[1]) {
                var rp3 = rp2[1];
            }
            if (rp3 && rp3 != "null") {
                rp = rp3;
            }
        }
        if (rp === "") {
            if (alimama_type == "2" || alimama_type == "j") {
                if (window.alimama_displaytype == "a" || window.alimama_displaytype == "c") {
                    rp = "b";
                } else if (window.alimama_displaytype == "b") {
                    rp = "e";
                } else {
                    rp = "a";
                }
            } else {
                rp = "null";
            }
        }
        return "," + rp + ",null";
    })();
    if (window.alimama_type && (alimama_type == "i" || alimama_type == "k")) {
        alimama_config[8] = alimama_config[21];
        alimama_config[9] = alimama_config[22];
    }
    if (typeof alimama_ads != "undefined" && alimama_ads !== null) {
        if (!alimama_ads instanceof Array) {
            return;
        }
        if (alimama_ads.length === 0) {
            return;
        }
        alimama_nextadid = 0;
        alimama_adsOutPut();
    } else if (typeof alimama_type == "undefined") {
        return;
    } else if ((alimama_type == 2 || alimama_type == "j") && (window.alimama_displaytype == "a" || window.alimama_displaytype == "c")) {
        var ct = alimama_displaytype;
        if (typeof alimama_data == "object" && alimama_data.typea) {
            return;
        }
        var cfs = alimama_show(1);
        var cfw = parseInt(alimama_width, 10);
        var cfh = parseInt(alimama_height, 10);
        alimama_width = null;
        alimama_height = null;
        if (!cfs) {
            return;
        }
        var cf = {
            f1h: cfh,
            f1w: cfw,
            f1s: cfs
        };
        if (ct == "c") {
            var cdc = window.alimama_displayconfig;
            cf.t = "replay";
            cf.f2w = 43;
            cf.f2h = 65;
            cf.f2s = "<img style='width:43px;height:65px' src='http://img.alimama.cn/cms/images/1261983332024.png'/>";
            cf.f2e = "mouseover";
            if (cdc) {
                cf.f2e = cdc.replay_type || cf.f2e;
                if (cdc.replay_img) {
                    cf.f2w = cdc.replay_width || cf.f2w;
                    cf.f2h = cdc.replay_height || cf.f2h;
                    cf.f2s = "<img style='width:" + cf.f2w + "px;height:" + cf.f2h + "px' src='" + cdc.replay_img + "'/>";
                }
            }
        }
        com_alimama.type.a(cf);
        alimama_data.typea = 1;
    } else if ((alimama_type == 2 || alimama_type == "j") && window.alimama_displaytype == "b") {
        if (window.screen.width < 1024) {
            return;
        }
        alimama_config[11] = 0.65;
        if (typeof alimama_data == "object" && alimama_data.typeb) {
            return;
        }
        var cs = alimama_show(1);
        var cw = parseInt(alimama_width, 10);
        var ch = parseInt(alimama_height, 10);
        alimama_width = null;
        alimama_height = null;
        if (!cs) {
            return;
        }
        var cp = "absolute";
        if (window.alimama_fwposition && window.alimama_fwposition == "fixed") {
            cp = "fixed";
        }
        new com_alimama.tools.floatWindow({
            "mmtype": "b",
            "level": ["left", 5],
            "vertical": ["top", 30],
            "h": ch,
            "w": cw,
            "oid": "mmtypeb-left",
            "position": cp,
            "innerpos": {
                "left": 0,
                "top": 0
            },
            "content": "<div style='background-color:#FFFFFF;height:" + ch + "px;width:" + cw + "px'>" + cs + "</div><div style='position:absolute;width:" + cw + "px;top:" + ch + "px'><div style='line-height:16px;height:16px;font-size:12px;float:right;width:44px;cursor:pointer;' onclick='com_alimama.tools.floatWindow.hideFloatAd(\"b\")'><img style='margin-top:1px;' alt='Close' src='http://img.alimama.cn/p/close1.gif' onmouseout='this.src=\"http://img.alimama.cn/p/close1.gif\"' onmouseover='this.src=\"http://img.alimama.cn/p/close2.gif\"'/></div><div style='clear:both;'></div></div>"
        });
        new com_alimama.tools.floatWindow({
            "mmtype": "b",
            "level": ["right", 5],
            "vertical": ["top", 30],
            "h": ch,
            "w": cw,
            "oid": "mmtypeb-right",
            "position": cp,
            "innerpos": {
                "left": 0,
                "top": 0
            },
            "content": "<div style='background-color:#FFFFFF;height:" + ch + "px;width:" + cw + "px'>" + cs + "</div><div style='position:absolute;width:" + cw + "px;top:" + ch + "px'><div style='line-height:16px;height:16px;font-size:12px;float:right;width:44px;cursor:pointer;' onclick='com_alimama.tools.floatWindow.hideFloatAd(\"b\")'><img style='margin-top:1px;' alt='Close' src='http://img.alimama.cn/p/close1.gif' onmouseout='this.src=\"http://img.alimama.cn/p/close1.gif\"' onmouseover='this.src=\"http://img.alimama.cn/p/close2.gif\"'/></div><div style='clear:both;'></div></div>"
        });
        alimama_data.typeb = 1;
    } else if (alimama_type == "e" && (self.location != top.location)) {
        return;
    } else {
        alimama_show();
    }
})();*/